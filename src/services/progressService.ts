import { db } from './firebase';
import { doc, setDoc, collection, writeBatch, getDocs, query } from 'firebase/firestore';
import { UserAttempt, UserMistake, UserProgress, ExamResult } from '../types';
import { storageService } from './storage';

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

  // Đồng bộ toàn bộ dữ liệu từ LocalStorage (Guest Mode) lên Firestore sau khi Đăng nhập/Đăng ký
  async syncLocalDataToFirestore(userId: string): Promise<void> {
    try {
      const batch = writeBatch(db);

      // 1. Đồng bộ Attempts của Guest
      const localAttempts = storageService.getAttempts('guest');
      localAttempts.forEach(attempt => {
        const attemptRef = doc(db, `users/${userId}/attempts`, attempt.id);
        batch.set(attemptRef, {
          ...attempt,
          userId, // chuyển quyền sở hữu sang user mới đăng nhập
          syncedAt: new Date().toISOString()
        });
      });

      // 2. Đồng bộ Mistakes của Guest
      const localMistakes = storageService.getMistakes('guest');
      localMistakes.forEach(mistake => {
        const mistakeRef = doc(db, `users/${userId}/mistakes`, mistake.id);
        batch.set(mistakeRef, {
          ...mistake,
          userId,
          syncedAt: new Date().toISOString()
        });
      });

      // 3. Đồng bộ Progress của Guest
      const localProgress = storageService.getProgress('guest');
      Object.entries(localProgress.masteryLevels).forEach(([questionTypeId, level]) => {
        const progressRef = doc(db, `users/${userId}/progress`, questionTypeId);
        batch.set(progressRef, {
          masteryLevel: level,
          isCompleted: localProgress.completedLessons.includes(questionTypeId),
          updatedAt: localProgress.lastUpdatedAt || new Date().toISOString()
        });
      });

      // 4. Đồng bộ Lịch sử Thi thử của Guest
      const localExams = storageService.getExamResults('guest');
      localExams.forEach((exam, idx) => {
        const examRef = doc(db, `users/${userId}/exam_results`, `exam-${idx}-${Date.now()}`);
        batch.set(examRef, {
          ...exam,
          syncedAt: new Date().toISOString()
        });
      });

      await batch.commit();
      console.log('Đã gộp thành công toàn bộ dữ liệu Guest vào tài khoản thành viên!');
    } catch (e) {
      console.error('Lỗi đồng bộ dữ liệu cục bộ lên đám mây:', e);
    }
  },

  // Tải dữ liệu từ Firestore về và ghi đè vào LocalStorage (Hydration)
  async hydrateFirestoreDataToLocal(userId: string): Promise<void> {
    try {
      // 1. Tải Progress
      const progress = await this.getUserProgressFromFirestore(userId);
      if (progress) {
        storageService.saveProgressLocal(userId, progress);
      }

      // 2. Tải Attempts
      const attempts = await this.getAttempts(userId);
      if (attempts.length > 0) {
        storageService.saveAttemptsLocal(userId, attempts);
      }

      // 3. Tải Mistakes
      const mistakes = await this.getMistakes(userId);
      if (mistakes.length > 0) {
        storageService.saveMistakesLocal(userId, mistakes);
      }

      // 4. Tải Exam Results
      const exams = await this.getExamResults(userId);
      if (exams.length > 0) {
        storageService.saveExamResultsLocal(userId, exams);
      }

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

    } catch (e) {
      console.error('Lỗi khi lưu Attempt lên Firestore:', e);
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
      const examRef = doc(db, `users/${userId}/exam_results`, `exam-${Date.now()}`);
      await setDoc(examRef, {
        ...result,
        syncedAt: new Date().toISOString()
      });
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
  }
};
