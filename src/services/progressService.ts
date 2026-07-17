import { db } from './firebase';
import { doc, setDoc, collection, writeBatch, getDocs, query, getDoc, orderBy, limit, deleteDoc } from 'firebase/firestore';
import { UserAttempt, UserMistake, UserProgress, ExamResult, SimulatedStudent } from '../types';
import { User } from 'firebase/auth';
import { storageService } from './storage';
import { calculateMasteryScore, getStarsFromScore } from '../utils/theme';

type MistakeSource = {
  mistake: UserMistake;
  source: 'remote' | 'guest';
};

const authMergePromises = new Map<string, Promise<void>>();

const toTime = (dateValue?: string): number => {
  if (!dateValue) return 0;
  const time = new Date(dateValue).getTime();
  return Number.isFinite(time) ? time : 0;
};

const safeDocId = (rawId: string, fallback: string): string => {
  const id = rawId.trim() || fallback;
  return encodeURIComponent(id).replace(/\./g, '%2E');
};

const createEmptyProgress = (userId: string): UserProgress => ({
  userId,
  masteryLevels: {},
  completedLessons: [],
  lastUpdatedAt: new Date().toISOString()
});

const normalizeAttemptForUser = (attempt: UserAttempt, userId: string): UserAttempt => ({
  ...attempt,
  userId
});

const normalizeMistakeForUser = (mistake: UserMistake, userId: string): UserMistake => ({
  ...mistake,
  userId
});

const mergeAttempts = (
  remoteAttempts: UserAttempt[],
  guestAttempts: UserAttempt[],
  userId: string
): UserAttempt[] => {
  const byId = new Map<string, UserAttempt>();

  remoteAttempts.forEach(attempt => {
    byId.set(attempt.id, normalizeAttemptForUser(attempt, userId));
  });

  guestAttempts.forEach(attempt => {
    const normalized = normalizeAttemptForUser(attempt, userId);
    const existing = byId.get(normalized.id);
    if (!existing || toTime(normalized.createdAt) >= toTime(existing.createdAt)) {
      byId.set(normalized.id, normalized);
    }
  });

  return [...byId.values()].sort((a, b) => toTime(a.createdAt) - toTime(b.createdAt));
};

const mergeMistakeGroup = (items: MistakeSource[], userId: string): UserMistake => {
  const sorted = [...items].sort((a, b) => toTime(b.mistake.lastAttemptedAt) - toTime(a.mistake.lastAttemptedAt));
  const latest = sorted[0].mistake;
  const remoteMistake = items.find(item => item.source === 'remote')?.mistake;
  const activeMistakes = items.filter(item => item.mistake.reviewStatus !== 'fixed').map(item => item.mistake);
  const nextReviewCandidates = latest.reviewStatus === 'fixed'
    ? items.map(item => item.mistake.nextReviewAt)
    : activeMistakes.map(item => item.nextReviewAt);

  const nextReviewAt = nextReviewCandidates
    .filter(Boolean)
    .sort((a, b) => toTime(a) - toTime(b))[0] ?? latest.nextReviewAt;

  return {
    ...latest,
    id: remoteMistake?.id ?? latest.id,
    userId,
    reviewCount: Math.max(...items.map(item => item.mistake.reviewCount || 1)),
    nextReviewAt
  };
};

const mergeMistakes = (
  remoteMistakes: UserMistake[],
  guestMistakes: UserMistake[],
  userId: string
): UserMistake[] => {
  const groups = new Map<string, MistakeSource[]>();

  const addToGroup = (mistake: UserMistake, source: MistakeSource['source']) => {
    const key = mistake.questionId || mistake.id;
    const group = groups.get(key) ?? [];
    group.push({ mistake: normalizeMistakeForUser(mistake, userId), source });
    groups.set(key, group);
  };

  remoteMistakes.forEach(mistake => addToGroup(mistake, 'remote'));
  guestMistakes.forEach(mistake => addToGroup(mistake, 'guest'));

  return [...groups.values()]
    .map(group => mergeMistakeGroup(group, userId))
    .sort((a, b) => toTime(b.lastAttemptedAt) - toTime(a.lastAttemptedAt));
};

const mergeExamResults = (
  remoteExams: ExamResult[],
  guestExams: ExamResult[]
): ExamResult[] => {
  const byExamId = new Map<string, ExamResult>();

  remoteExams.forEach((exam, index) => {
    byExamId.set(exam.examId || `remote-${index}`, exam);
  });

  guestExams.forEach((exam, index) => {
    const key = exam.examId || `guest-${index}`;
    const existing = byExamId.get(key);
    if (!existing || toTime(exam.completedAt) >= toTime(existing.completedAt)) {
      byExamId.set(key, exam);
    }
  });

  return [...byExamId.values()].sort((a, b) => toTime(a.completedAt) - toTime(b.completedAt));
};

const mergeProgressFromAttempts = (
  userId: string,
  attempts: UserAttempt[],
  remoteProgress: UserProgress | null,
  guestProgress: UserProgress
): UserProgress => {
  const attemptsByQuestionType = new Map<string, UserAttempt[]>();

  attempts.forEach(attempt => {
    const list = attemptsByQuestionType.get(attempt.questionTypeId) ?? [];
    list.push(attempt);
    attemptsByQuestionType.set(attempt.questionTypeId, list);
  });

  const masteryLevels: Record<string, number> = {};

  attemptsByQuestionType.forEach((typeAttempts, questionTypeId) => {
    masteryLevels[questionTypeId] = calculateMasteryScore(typeAttempts);
  });

  const applyFallbackProgress = (progress?: UserProgress | null) => {
    if (!progress) return;

    progress.completedLessons.forEach(questionTypeId => {
      if (!attemptsByQuestionType.has(questionTypeId) && masteryLevels[questionTypeId] === undefined) {
        masteryLevels[questionTypeId] = 60;
      }
    });

    Object.entries(progress.masteryLevels).forEach(([questionTypeId, score]) => {
      if (attemptsByQuestionType.has(questionTypeId)) return;
      masteryLevels[questionTypeId] = Math.max(masteryLevels[questionTypeId] ?? 0, score);
    });
  };

  applyFallbackProgress(remoteProgress);
  applyFallbackProgress(guestProgress);

  const completedLessons = Object.entries(masteryLevels)
    .filter(([, score]) => getStarsFromScore(score) >= 2)
    .map(([questionTypeId]) => questionTypeId);

  return {
    userId,
    masteryLevels,
    completedLessons,
    lastUpdatedAt: new Date().toISOString()
  };
};

const hasGuestData = (
  attempts: UserAttempt[],
  mistakes: UserMistake[],
  progress: UserProgress,
  exams: ExamResult[]
): boolean => {
  return attempts.length > 0
    || mistakes.length > 0
    || exams.length > 0
    || Object.keys(progress.masteryLevels).length > 0
    || progress.completedLessons.length > 0;
};

export const progressService = {
  // Lấy hoặc khởi tạo Progress của người dùng từ Firestore
  async getUserProgressFromFirestore(userId: string): Promise<UserProgress | null> {
    try {
      const q = query(collection(db, `users/${userId}/progress`));
      const querySnapshot = await getDocs(q);
      
      const masteryLevels: Record<string, number> = {};
      const completedLessons: string[] = [];
      let lastUpdatedAt = new Date().toISOString();

      querySnapshot.forEach((doc) => {
        const data = doc.data();
        const questionTypeId = doc.id;
        if (data.masteryLevel !== undefined) {
          masteryLevels[questionTypeId] = data.masteryLevel;
        }
        if (data.isCompleted && !completedLessons.includes(questionTypeId)) {
          completedLessons.push(questionTypeId);
        }
        if (data.updatedAt && data.updatedAt > lastUpdatedAt) {
          lastUpdatedAt = data.updatedAt;
        }
      });

      if (querySnapshot.empty) return null;

      return {
        userId,
        masteryLevels,
        completedLessons,
        lastUpdatedAt
      };
    } catch (e) {
      console.error('Lỗi khi lấy tiến trình từ Firestore:', e);
      return null;
    }
  },

  // Backwards-compatible wrapper. Luồng mới luôn merge remote + guest, không ghi đè tiến độ remote.
  async syncLocalDataToFirestore(userId: string): Promise<void> {
    return this.mergeGuestDataWithFirestore(userId);
  },

  async mergeGuestDataWithFirestore(userId: string): Promise<void> {
    const runningMerge = authMergePromises.get(userId);
    if (runningMerge) {
      return runningMerge;
    }

    const mergePromise = this.mergeGuestDataWithFirestoreInternal(userId)
      .finally(() => {
        authMergePromises.delete(userId);
      });

    authMergePromises.set(userId, mergePromise);
    return mergePromise;
  },

  async mergeGuestDataWithFirestoreInternal(userId: string): Promise<void> {
    try {
      const [
        remoteProgress,
        remoteAttempts,
        remoteMistakes,
        remoteExams
      ] = await Promise.all([
        this.getUserProgressFromFirestore(userId),
        this.getAttempts(userId),
        this.getMistakes(userId),
        this.getExamResults(userId)
      ]);

      const guestAttempts = storageService.getAttempts('guest');
      const guestMistakes = storageService.getMistakes('guest');
      const guestProgress = storageService.getProgress('guest');
      const guestExams = storageService.getExamResults('guest');
      const shouldClearGuest = hasGuestData(guestAttempts, guestMistakes, guestProgress, guestExams);

      if (!shouldClearGuest) {
        const hydratedAttempts = mergeAttempts(remoteAttempts, [], userId);
        const hydratedMistakes = mergeMistakes(remoteMistakes, [], userId);
        const hydratedExams = mergeExamResults(remoteExams, []);
        const hydratedProgress = mergeProgressFromAttempts(userId, hydratedAttempts, remoteProgress, createEmptyProgress(userId));

        storageService.saveAttemptsLocal(userId, hydratedAttempts);
        storageService.saveMistakesLocal(userId, hydratedMistakes);
        storageService.saveProgressLocal(userId, hydratedProgress);
        storageService.saveExamResultsLocal(userId, hydratedExams);

        console.log(`Đã hydrate dữ liệu Cloud xuống LocalStorage cho user: ${userId}`);
        return;
      }

      const mergedAttempts = mergeAttempts(remoteAttempts, guestAttempts, userId);
      const mergedMistakes = mergeMistakes(remoteMistakes, guestMistakes, userId);
      const mergedExams = mergeExamResults(remoteExams, guestExams);
      const mergedProgress = mergeProgressFromAttempts(userId, mergedAttempts, remoteProgress, guestProgress);

      const batch = writeBatch(db);
      const syncedAt = new Date().toISOString();

      mergedAttempts.forEach(attempt => {
        const attemptRef = doc(db, `users/${userId}/attempts`, attempt.id);
        batch.set(attemptRef, {
          ...attempt,
          userId,
          syncedAt
        });

        if (attempt.gradingMode === 'manual') {
          const manualRef = doc(db, 'manual_attempts', attempt.id);
          batch.set(manualRef, {
            ...attempt,
            userId,
            syncedAt
          });
        }
      });

      mergedMistakes.forEach(mistake => {
        const mistakeRef = doc(db, `users/${userId}/mistakes`, mistake.id);
        batch.set(mistakeRef, {
          ...mistake,
          userId,
          syncedAt
        });
      });

      Object.entries(mergedProgress.masteryLevels).forEach(([questionTypeId, score]) => {
        const progressRef = doc(db, `users/${userId}/progress`, questionTypeId);
        batch.set(progressRef, {
          masteryLevel: score,
          isCompleted: mergedProgress.completedLessons.includes(questionTypeId),
          updatedAt: syncedAt
        }, { merge: true });
      });

      const remoteExamIds = new Set(remoteExams.map(exam => exam.examId).filter(Boolean));
      guestExams
        .filter(exam => !remoteExamIds.has(exam.examId))
        .forEach((exam, idx) => {
          const examRef = doc(db, `users/${userId}/exam_results`, safeDocId(exam.examId, `exam-${idx}`));
          batch.set(examRef, {
            ...exam,
            syncedAt
          }, { merge: true });
        });

      const userRef = doc(db, 'users', userId);
      batch.set(userRef, { completedCount: mergedProgress.completedLessons.length }, { merge: true });

      await batch.commit();

      storageService.saveAttemptsLocal(userId, mergedAttempts);
      storageService.saveMistakesLocal(userId, mergedMistakes);
      storageService.saveProgressLocal(userId, mergedProgress);
      storageService.saveExamResultsLocal(userId, mergedExams);

      if (shouldClearGuest) {
        storageService.clearGuestData();
      }

      console.log('Đã merge an toàn dữ liệu Guest + Cloud vào tài khoản thành viên!');
    } catch (e) {
      console.error('Lỗi merge dữ liệu Guest với Cloud:', e);
    }
  },

  // Tải dữ liệu từ Firestore về và ghi đè vào LocalStorage (Hydration)
  async hydrateFirestoreDataToLocal(userId: string): Promise<void> {
    try {
      // 1. Tải Progress
      const progress = await this.getUserProgressFromFirestore(userId);
      storageService.saveProgressLocal(userId, progress ?? createEmptyProgress(userId));

      // 2. Tải Attempts
      const attempts = await this.getAttempts(userId);
      storageService.saveAttemptsLocal(userId, attempts);

      // 3. Tải Mistakes
      const mistakes = await this.getMistakes(userId);
      storageService.saveMistakesLocal(userId, mistakes);

      // 4. Tải Exam Results
      const exams = await this.getExamResults(userId);
      storageService.saveExamResultsLocal(userId, exams);

      console.log(`Đã hydrate thành công dữ liệu từ Firestore xuống LocalStorage cho user: ${userId}`);
    } catch (e) {
      console.error('Lỗi khi hydrate dữ liệu từ Firestore xuống local:', e);
    }
  },

  // Lưu một Attempt lên Firestore
  async saveAttempt(userId: string, attempt: UserAttempt): Promise<void> {
    try {
      const attemptRef = doc(db, `users/${userId}/attempts`, attempt.id);
      await setDoc(attemptRef, {
        ...attempt,
        userId,
        syncedAt: new Date().toISOString()
      });

      if (attempt.gradingMode === 'manual') {
        const manualRef = doc(db, 'manual_attempts', attempt.id);
        await setDoc(manualRef, {
          ...attempt,
          userId,
          syncedAt: new Date().toISOString()
        });
      }

      // Đồng thời cập nhật progress tương ứng
      const progressRef = doc(db, `users/${userId}/progress`, attempt.questionTypeId);
      // Đọc progress cục bộ để biết level hiện tại (sử dụng storageService thay vì parse localStorage thô)
      const userProg = storageService.getProgress(userId);
      const currentLevel = userProg.masteryLevels[attempt.questionTypeId] || 0;
      const completedLessons = userProg.completedLessons || [];

      await setDoc(progressRef, {
        masteryLevel: currentLevel,
        isCompleted: completedLessons.includes(attempt.questionTypeId),
        updatedAt: new Date().toISOString()
      }, { merge: true });

      // Phi chuẩn hóa completedCount vào user doc
      const userRef = doc(db, 'users', userId);
      await setDoc(userRef, { completedCount: completedLessons.length }, { merge: true });

    } catch (e) {
      console.error('Lỗi khi lưu Attempt lên Firestore:', e);
    }
  },

  async saveExamSubmission(
    userId: string,
    result: ExamResult,
    attempts: UserAttempt[],
    mistakes: UserMistake[]
  ): Promise<void> {
    try {
      const batch = writeBatch(db);
      const syncedAt = new Date().toISOString();

      attempts.forEach(attempt => {
        const attemptRef = doc(db, `users/${userId}/attempts`, attempt.id);
        batch.set(attemptRef, {
          ...attempt,
          userId,
          syncedAt
        }, { merge: true });

        if (attempt.gradingMode === 'manual') {
          const manualRef = doc(db, 'manual_attempts', attempt.id);
          batch.set(manualRef, {
            ...attempt,
            userId,
            syncedAt
          }, { merge: true });
        }
      });

      const progress = storageService.getProgress(userId);
      const affectedQuestionTypeIds = new Set(attempts.map(attempt => attempt.questionTypeId));
      affectedQuestionTypeIds.forEach(questionTypeId => {
        const progressRef = doc(db, `users/${userId}/progress`, questionTypeId);
        batch.set(progressRef, {
          masteryLevel: progress.masteryLevels[questionTypeId] || 0,
          isCompleted: progress.completedLessons.includes(questionTypeId),
          updatedAt: syncedAt
        }, { merge: true });
      });

      mistakes.forEach(mistake => {
        const mistakeRef = doc(db, `users/${userId}/mistakes`, mistake.id);
        batch.set(mistakeRef, {
          ...mistake,
          userId,
          syncedAt
        }, { merge: true });
      });

      const examRef = doc(db, `users/${userId}/exam_results`, safeDocId(result.examId, `exam-${Date.now()}`));
      batch.set(examRef, {
        ...result,
        syncedAt
      }, { merge: true });

      // Phi chuẩn hóa completedCount vào user doc
      const userRef = doc(db, 'users', userId);
      batch.set(userRef, { completedCount: progress.completedLessons.length }, { merge: true });

      await batch.commit();
    } catch (e) {
      console.error('Lỗi khi đồng bộ bài thi thử lên Firestore:', e);
    }
  },

  // Lưu hoặc cập nhật một Mistake lên Firestore
  async saveMistake(userId: string, mistake: UserMistake): Promise<void> {
    try {
      const mistakeRef = doc(db, `users/${userId}/mistakes`, mistake.id);
      await setDoc(mistakeRef, {
        ...mistake,
        userId,
        syncedAt: new Date().toISOString()
      });
    } catch (e) {
      console.error('Lỗi khi lưu Mistake lên Firestore:', e);
    }
  },

  // Lưu kết quả thi thử lên Firestore
  async saveExamResult(userId: string, result: ExamResult): Promise<void> {
    try {
      const examRef = doc(db, `users/${userId}/exam_results`, safeDocId(result.examId, `exam-${Date.now()}`));
      await setDoc(examRef, {
        ...result,
        syncedAt: new Date().toISOString()
      }, { merge: true });
    } catch (e) {
      console.error('Lỗi khi lưu kết quả thi thử lên Firestore:', e);
    }
  },

  // Lấy toàn bộ Attempts của người dùng từ Firestore
  async getAttempts(userId: string): Promise<UserAttempt[]> {
    try {
      const q = query(collection(db, `users/${userId}/attempts`));
      const querySnapshot = await getDocs(q);
      const attempts: UserAttempt[] = [];
      querySnapshot.forEach(doc => {
        attempts.push(doc.data() as UserAttempt);
      });
      return attempts;
    } catch (e) {
      console.error('Lỗi khi lấy danh sách Attempts từ Firestore:', e);
      return [];
    }
  },

  // Lấy toàn bộ Mistakes của người dùng từ Firestore
  async getMistakes(userId: string): Promise<UserMistake[]> {
    try {
      const q = query(collection(db, `users/${userId}/mistakes`));
      const querySnapshot = await getDocs(q);
      const mistakes: UserMistake[] = [];
      querySnapshot.forEach(doc => {
        mistakes.push(doc.data() as UserMistake);
      });
      return mistakes;
    } catch (e) {
      console.error('Lỗi khi lấy danh sách Mistakes từ Firestore:', e);
      return [];
    }
  },

  // Lấy toàn bộ Lịch sử Thi thử của người dùng từ Firestore
  async getExamResults(userId: string): Promise<ExamResult[]> {
    try {
      const q = query(collection(db, `users/${userId}/exam_results`));
      const querySnapshot = await getDocs(q);
      const results: ExamResult[] = [];
      querySnapshot.forEach(doc => {
        results.push(doc.data() as ExamResult);
      });
      return results;
    } catch (e) {
      console.error('Lỗi khi lấy kết quả thi thử từ Firestore:', e);
      return [];
    }
  },

  // TEACHER REAL DATA INTEGRATION
  async saveUserProfile(user: User, name?: string): Promise<void> {
    try {
      const progress = storageService.getProgress(user.uid);
      const completedCount = progress ? (progress.completedLessons || []).length : 0;

      await setDoc(doc(db, 'users', user.uid), {
        id: user.uid,
        name: user.displayName || name || 'Học sinh mới',
        avatar: user.photoURL || `https://api.dicebear.com/7.x/adventurer/svg?seed=${user.uid}`,
        email: user.email,
        completedCount,
        lastActiveAt: new Date().toISOString()
      }, { merge: true });
    } catch (e) {
      console.error('Lỗi khi lưu thông tin user lên Firestore:', e);
    }
  },

  async getRealStudents(excludedUserIds: string[] = []): Promise<SimulatedStudent[]> {
    try {
      const querySnapshot = await getDocs(collection(db, 'users'));
      const students: SimulatedStudent[] = [];
      const excludedIds = new Set(excludedUserIds);
      
      querySnapshot.forEach(docRef => {
        const data = docRef.data();
        if (!excludedIds.has(docRef.id)) {
          students.push({
            id: docRef.id,
            name: data.name || 'Học sinh mới',
            avatar: data.avatar || `https://api.dicebear.com/7.x/adventurer/svg?seed=${docRef.id}`,
            email: data.email || '',
            isPremium: data.isPremium === true || data.role === 'premium',
            completedCount: data.completedCount ?? 0
          } as any);
        }
      });
      
      return students;
    } catch (e) {
      console.error('Lỗi khi lấy danh sách học sinh từ Firestore:', e);
      return [];
    }
  },

  async getRealPendingManualAttempts(students: SimulatedStudent[]): Promise<Array<{ student: SimulatedStudent; attempt: UserAttempt }>> {
    try {
      const pendingSnapshot = await getDocs(collection(db, 'manual_attempts'));
      const pending: Array<{ student: SimulatedStudent; attempt: UserAttempt }> = [];
      
      pendingSnapshot.forEach(docRef => {
        const attempt = docRef.data() as UserAttempt;
        const student = students.find(s => s.id === attempt.userId);
        if (student) {
          pending.push({ student, attempt });
        }
      });
      
      return pending.sort((a, b) => new Date(b.attempt.createdAt).getTime() - new Date(a.attempt.createdAt).getTime());
    } catch (e) {
      console.error('Lỗi khi lấy danh sách bài chờ chấm từ Firestore:', e);
      return [];
    }
  },

  async gradeRealAttempt(studentId: string, attempt: UserAttempt, isCorrect: boolean, feedback?: string): Promise<void> {
    try {
      const attemptId = attempt.id;
      const attemptRef = doc(db, `users/${studentId}/attempts`, attemptId);
      const syncedAt = new Date().toISOString();
      
      const reviewPatch = {
        isCorrect,
        gradingMode: 'auto' as const,
        teacherFeedback: feedback,
        syncedAt
      };

      const updatedAttempt = {
        ...attempt,
        ...reviewPatch
      };
      
      await setDoc(attemptRef, reviewPatch, { merge: true });

      // Xóa khỏi hàng đợi chấm bài thủ công
      try {
        await deleteDoc(doc(db, 'manual_attempts', attemptId));
      } catch (err) {
        console.error("Lỗi khi xóa bài làm khỏi hàng đợi manual_attempts:", err);
      }

      // Lấy toàn bộ attempts của học sinh này để recalculate progress
      const allAttempts = await this.getAttempts(studentId);
      const index = allAttempts.findIndex(a => a.id === attemptId);
      if (index > -1) {
        allAttempts[index] = updatedAttempt;
      } else {
        allAttempts.push(updatedAttempt);
      }

      const typeAttempts = allAttempts.filter(a => a.questionTypeId === attempt.questionTypeId);
      const newScore = calculateMasteryScore(typeAttempts);
      const isCompleted = newScore >= 60;

      // Cập nhật progress trên Firestore
      const progressRef = doc(db, `users/${studentId}/progress`, attempt.questionTypeId);
      await setDoc(progressRef, {
        masteryLevel: newScore,
        isCompleted,
        updatedAt: syncedAt
      }, { merge: true });

      // Tính toán lại completedCount và cập nhật user doc
      let completedCount = 0;
      try {
        const progSnapshot = await getDocs(collection(db, `users/${studentId}/progress`));
        progSnapshot.forEach(pDoc => {
          if (pDoc.data().isCompleted) {
            completedCount++;
          }
        });
        await setDoc(doc(db, 'users', studentId), { completedCount }, { merge: true });
      } catch (pe) {
        console.error("Lỗi khi cập nhật completedCount của học sinh sau khi chấm:", pe);
      }

      // Cập nhật Sổ lỗi sai trên Firestore
      const mistakeId = `mistake-${attempt.questionId}`;
      const mistakeRef = doc(db, `users/${studentId}/mistakes`, mistakeId);

      if (!isCorrect) {
        await setDoc(mistakeRef, {
          id: mistakeId,
          userId: studentId,
          questionId: attempt.questionId,
          questionTypeId: attempt.questionTypeId,
          wrongAnswer: attempt.userAnswer,
          reviewStatus: 'new',
          reviewCount: 1,
          lastAttemptedAt: attempt.createdAt,
          nextReviewAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
          teacherFeedback: feedback,
          syncedAt
        }, { merge: true });
      } else {
        const existingMistake = await getDoc(mistakeRef);
        if (existingMistake.exists()) {
          await setDoc(mistakeRef, {
            reviewStatus: 'fixed',
            nextReviewAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
            syncedAt
          }, { merge: true });
        }
      }
    } catch (e) {
      console.error('Lỗi khi chấm điểm lên Firestore:', e);
    }
  },

  async getAiUsageLogs(limitCount = 100): Promise<any[]> {
    try {
      const q = query(
        collection(db, 'ai_usage_logs'),
        orderBy('timestamp', 'desc'),
        limit(limitCount)
      );
      const querySnapshot = await getDocs(q);
      const logs: any[] = [];
      querySnapshot.forEach(docSnap => {
        const data = docSnap.data();
        logs.push({
          id: docSnap.id,
          ...data,
          timestamp: data.timestamp ? (data.timestamp.toDate ? data.timestamp.toDate().toISOString() : data.timestamp) : null
        });
      });
      return logs;
    } catch (e) {
      console.error('Lỗi khi lấy logs AI:', e);
      return [];
    }
  }
};
