import { db } from './firebase';
import { doc, setDoc, collection, writeBatch, getDocs, query, getDoc, arrayUnion } from 'firebase/firestore';
import { UserAttempt, UserMistake, UserProgress, ExamResult } from '../types';
import { User } from 'firebase/auth';
import { storageService } from './storage';
import { useAppStore } from './store';
import { calculateStudentStats } from '../utils/stats';
import { logger } from '../utils/logger';

const authMergePromises = new Map<string, Promise<void>>();

const safeDocId = (rawId: string, fallback: string): string => {
  const id = rawId.trim() || fallback;
  return encodeURIComponent(id).replace(/\./g, '%2E');
};

export const progressService = {
  // Lấy hoặc khởi tạo Progress của người dùng từ Firestore
  async getUserProgressFromFirestore(userId: string): Promise<UserProgress | null> {
    try {
      const userRef = doc(db, 'users', userId);
      const userSnap = await getDoc(userRef);
      logger.dbRead('Lấy tiến trình học sinh (users/{userId})', 1);

      if (!userSnap.exists()) {
        return null;
      }

      const data = userSnap.data();
      return {
        userId,
        masteryLevels: data.masteryLevels || {},
        completedLessons: data.completedLessons || [],
        lastUpdatedAt: data.lastActiveAt || new Date().toISOString()
      };
    } catch (e) {
      logger.error('Lấy tiến trình học sinh', e);
      return null;
    }
  },

  // Đồng bộ thông minh dữ liệu Firestore xuống LocalStorage (chỉ tải khi Local rỗng hoặc cũ hơn Server)
  async syncLocalDataToFirestore(userId: string): Promise<void> {
    return this.syncUserData(userId);
  },

  async syncUserData(userId: string): Promise<void> {
    const runningSync = authMergePromises.get(userId);
    if (runningSync) {
      return runningSync;
    }

    const syncPromise = this.syncUserDataInternal(userId)
      .finally(() => {
        authMergePromises.delete(userId);
      });

    authMergePromises.set(userId, syncPromise);
    return syncPromise;
  },

  async syncUserDataInternal(userId: string): Promise<void> {
    try {
      // 1. Đọc dữ liệu profile & progress hiện tại trên Server (1 Read)
      const userRef = doc(db, 'users', userId);
      const userSnap = await getDoc(userRef);
      logger.dbRead('Đọc thông tin học sinh để check sync (users/{userId})', 1);

      if (!userSnap.exists()) {
        return;
      }

      const remoteData = userSnap.data();
      const serverLastActive = remoteData.lastActiveAt || '';

      // 2. Lấy dữ liệu LocalStorage hiện tại của user này
      const localProgress = storageService.getProgress(userId);
      const localLastActive = localProgress?.lastUpdatedAt || '';

      // 3. Nếu LocalStorage đã có dữ liệu và timestamp trùng/mới hơn server, ta bỏ qua (Tiết kiệm hàng trăm Reads!)
      if (localLastActive && localLastActive >= serverLastActive) {
        console.log(`[Smart Sync] Dữ liệu Local của user ${userId} đã mới nhất. Bỏ qua tải chi tiết.`);
        return;
      }

      // 4. Nếu LocalStorage trống hoặc cũ hơn server, tải toàn bộ dữ liệu mới nhất từ Firestore xuống Local
      console.log(`[Smart Sync] Đồng bộ dữ liệu mới nhất từ Firestore cho user ${userId}...`);
      const [
        remoteAttempts,
        remoteMistakes,
        remoteExams
      ] = await Promise.all([
        this.getAttempts(userId),
        this.getMistakes(userId),
        this.getExamResults(userId)
      ]);

      const userProgress: UserProgress = {
        userId,
        masteryLevels: remoteData.masteryLevels || {},
        completedLessons: remoteData.completedLessons || [],
        lastUpdatedAt: serverLastActive || new Date().toISOString()
      };

      // Ghi đè vào LocalStorage
      storageService.saveAttemptsLocal(userId, remoteAttempts);
      storageService.saveMistakesLocal(userId, remoteMistakes);
      storageService.saveProgressLocal(userId, userProgress);
      storageService.saveExamResultsLocal(userId, remoteExams);

      console.log(`[Smart Sync] Hoàn tất đồng bộ dữ liệu Firestore xuống LocalStorage cho user: ${userId}`);
    } catch (e) {
      console.error('Lỗi đồng bộ dữ liệu người dùng:', e);
    }
  },

  // Tải dữ liệu từ Firestore về và ghi đè vào LocalStorage (Hydration)
  async hydrateFirestoreDataToLocal(userId: string): Promise<void> {
    try {
      // 1. Tải Progress
      const progress = await this.getUserProgressFromFirestore(userId);
      storageService.saveProgressLocal(userId, progress ?? {
        userId,
        masteryLevels: {},
        completedLessons: [],
        lastUpdatedAt: new Date().toISOString()
      });

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

  // Lưu một Attempt lên Firestore (Vào topic_attempts/{questionTypeId})
  async saveAttempt(userId: string, attempt: UserAttempt): Promise<void> {
    try {
      const syncedAt = new Date().toISOString();
      const topicRef = doc(db, `users/${userId}/topic_attempts`, attempt.questionTypeId);
      await setDoc(topicRef, {
        questionTypeId: attempt.questionTypeId,
        updatedAt: syncedAt,
        attempts: arrayUnion({
          ...attempt,
          userId,
          syncedAt
        })
      }, { merge: true });
      logger.dbWrite(`Lưu bài làm dạng ${attempt.questionTypeId} (topic_attempts)`, 1);

      if (attempt.gradingMode === 'manual') {
        const manualRef = doc(db, 'manual_attempts', attempt.id);
        const state = useAppStore.getState();
        await setDoc(manualRef, {
          ...attempt,
          userId,
          studentName: state.userData?.name || state.user?.displayName || 'Học sinh mới',
          studentAvatar: state.userData?.avatar || state.user?.photoURL || `https://api.dicebear.com/7.x/adventurer/svg?seed=${userId}`,
          studentEmail: state.userData?.email || state.user?.email || '',
          syncedAt
        });
        logger.dbWrite('Nhúng bài tự luận vào hàng đợi (manual_attempts)', 1);
      }

      // Đồng thời cập nhật progress tương ứng trực tiếp vào document cha users/{userId}
      const userProg = storageService.getProgress(userId);
      const allAttempts = storageService.getAttempts(userId);
      const stats = calculateStudentStats(allAttempts);
      const userRef = doc(db, 'users', userId);
      await setDoc(userRef, {
        [`masteryLevels.${attempt.questionTypeId}`]: userProg.masteryLevels[attempt.questionTypeId] || 0,
        completedLessons: userProg.completedLessons || [],
        completedCount: (userProg.completedLessons || []).length,
        stats,
        lastActiveAt: syncedAt
      }, { merge: true });
      logger.dbWrite('Cập nhật tiến độ & stats gộp (users/{userId})', 1);

      // Cập nhật LocalStorage khớp hoàn toàn với Server
      userProg.lastUpdatedAt = syncedAt;
      storageService.saveProgressLocal(userId, userProg);

    } catch (e) {
      logger.error('Lưu bài làm học sinh', e);
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
          const state = useAppStore.getState();
          batch.set(manualRef, {
            ...attempt,
            userId,
            studentName: state.userData?.name || state.user?.displayName || 'Học sinh mới',
            studentAvatar: state.userData?.avatar || state.user?.photoURL || `https://api.dicebear.com/7.x/adventurer/svg?seed=${userId}`,
            studentEmail: state.userData?.email || state.user?.email || '',
            syncedAt
          }, { merge: true });
        }
      });

      const progress = storageService.getProgress(userId);
      const allAttempts = storageService.getAttempts(userId);
      const stats = calculateStudentStats(allAttempts);
      const userRef = doc(db, 'users', userId);
      batch.set(userRef, {
        masteryLevels: progress.masteryLevels || {},
        completedLessons: progress.completedLessons || [],
        completedCount: (progress.completedLessons || []).length,
        stats,
        lastActiveAt: syncedAt
      }, { merge: true });

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

      const manualAttemptsCount = attempts.filter(a => a.gradingMode === 'manual').length;
      const writeCount = attempts.length + manualAttemptsCount + 1 + mistakes.length + 1;
      await batch.commit();
      logger.dbWrite('Nộp bài thi thử lên Firestore (Batch)', writeCount);

      // Cập nhật LocalStorage khớp hoàn toàn với Server
      progress.lastUpdatedAt = syncedAt;
      storageService.saveProgressLocal(userId, progress);
    } catch (e) {
      logger.error('Nộp bài thi thử lên Firestore (Batch)', e);
    }
  },

  // Lưu hoặc cập nhật một Mistake lên Firestore (Vào active_mistakes/current)
  async saveMistake(userId: string, mistake: UserMistake): Promise<void> {
    try {
      const activeRef = doc(db, `users/${userId}/active_mistakes`, 'current');
      const docSnap = await getDoc(activeRef);
      let mistakesList: UserMistake[] = docSnap.exists() ? (docSnap.data().mistakes || []) : [];

      const syncedAt = new Date().toISOString();
      const updatedMistake = { ...mistake, userId, syncedAt };

      if (mistake.reviewStatus === 'fixed') {
        // Loại bỏ câu đã fixed khỏi danh sách active mistakes
        mistakesList = mistakesList.filter(m => m.id !== mistake.id && m.questionId !== mistake.questionId);
      } else {
        // Thêm mới hoặc cập nhật câu sai
        const index = mistakesList.findIndex(m => m.id === mistake.id || m.questionId === mistake.questionId);
        if (index > -1) {
          mistakesList[index] = updatedMistake;
        } else {
          mistakesList.push(updatedMistake);
        }
      }

      await setDoc(activeRef, {
        updatedAt: syncedAt,
        totalActiveCount: mistakesList.length,
        mistakes: mistakesList
      }, { merge: true });

      logger.dbWrite('Lưu/Cập nhật Sổ lỗi sai (active_mistakes/current)', 1);
    } catch (e) {
      logger.error('Lưu Mistake lỗi sai', e);
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
      logger.dbWrite('Lưu kết quả thi thử (users/{userId}/exam_results)', 1);
    } catch (e) {
      logger.error('Lưu kết quả thi thử', e);
    }
  },

  // Lấy bài làm của một Dạng bài cụ thể từ Firestore (Tốn đúng 1 Read)
  async getTopicAttempts(userId: string, questionTypeId: string): Promise<UserAttempt[]> {
    try {
      const topicRef = doc(db, `users/${userId}/topic_attempts`, questionTypeId);
      const docSnap = await getDoc(topicRef);
      logger.dbRead(`Tải bài làm dạng ${questionTypeId} (topic_attempts)`, 1);

      if (docSnap.exists()) {
        const data = docSnap.data();
        return (data.attempts || []) as UserAttempt[];
      }
      return [];
    } catch (e) {
      logger.error(`Tải bài làm dạng ${questionTypeId}`, e);
      return [];
    }
  },

  // Lấy toàn bộ Attempts của người dùng từ Firestore (Gom theo topic_attempts)
  async getAttempts(userId: string): Promise<UserAttempt[]> {
    try {
      const q = query(collection(db, `users/${userId}/topic_attempts`));
      const querySnapshot = await getDocs(q);
      logger.dbRead('Tải toàn bộ bài làm dạng gộp (topic_attempts)', querySnapshot.size || 1);
      const allAttempts: UserAttempt[] = [];
      querySnapshot.forEach(docSnap => {
        const data = docSnap.data();
        if (Array.isArray(data.attempts)) {
          allAttempts.push(...data.attempts);
        }
      });
      return allAttempts;
    } catch (e) {
      logger.error('Tải toàn bộ bài làm dạng gộp (topic_attempts)', e);
      return [];
    }
  },

  // Lấy toàn bộ Mistakes CHƯA FIXED của người dùng từ Firestore (Tốn đúng 1 Read)
  async getMistakes(userId: string): Promise<UserMistake[]> {
    try {
      const activeRef = doc(db, `users/${userId}/active_mistakes`, 'current');
      const docSnap = await getDoc(activeRef);
      logger.dbRead('Tải Sổ lỗi sai (active_mistakes/current)', 1);

      if (docSnap.exists()) {
        const data = docSnap.data();
        return (data.mistakes || []) as UserMistake[];
      }
      return [];
    } catch (e) {
      logger.error('Tải Sổ lỗi sai (active_mistakes/current)', e);
      return [];
    }
  },

  // Lấy toàn bộ Lịch sử Thi thử của người dùng từ Firestore
  async getExamResults(userId: string): Promise<ExamResult[]> {
    try {
      const q = query(collection(db, `users/${userId}/exam_results`));
      const querySnapshot = await getDocs(q);
      logger.dbRead('Tải kết quả thi thử của học sinh (exam_results)', querySnapshot.size || 1);
      const results: ExamResult[] = [];
      querySnapshot.forEach(doc => {
        results.push(doc.data() as ExamResult);
      });
      return results;
    } catch (e) {
      logger.error('Tải kết quả thi thử của học sinh (exam_results)', e);
      return [];
    }
  },

  // TEACHER REAL DATA INTEGRATION
  async saveUserProfile(user: User, name?: string): Promise<void> {
    try {
      const syncedAt = new Date().toISOString();
      const progress = storageService.getProgress(user.uid);
      const completedCount = progress ? (progress.completedLessons || []).length : 0;
      
      const attempts = storageService.getAttempts(user.uid);
      const stats = calculateStudentStats(attempts);

      await setDoc(doc(db, 'users', user.uid), {
        id: user.uid,
        name: user.displayName || name || 'Học sinh mới',
        avatar: user.photoURL || `https://api.dicebear.com/7.x/adventurer/svg?seed=${user.uid}`,
        email: user.email,
        completedCount,
        stats,
        lastActiveAt: syncedAt
      }, { merge: true });

      // Cập nhật LocalStorage khớp hoàn toàn với Server
      if (progress) {
        progress.lastUpdatedAt = syncedAt;
        storageService.saveProgressLocal(user.uid, progress);
      }
    } catch (e) {
      console.error('Lỗi khi lưu thông tin user lên Firestore:', e);
    }
  }
};
