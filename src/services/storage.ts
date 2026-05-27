import { UserAttempt, UserMistake, UserProgress, ExamResult } from '../types';

const KEYS = {
  ATTEMPTS: 'otv10_attempts',
  MISTAKES: 'otv10_mistakes',
  PROGRESS: 'otv10_progress',
  EXAM_RESULTS: 'otv10_exam_results'
};

// Helper để đọc từ localStorage an toàn
const readFromStorage = <T>(key: string, defaultValue: T): T => {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : defaultValue;
  } catch (e) {
    console.error(`Error reading ${key} from localStorage`, e);
    return defaultValue;
  }
};

// Helper để ghi vào localStorage an toàn
const writeToStorage = <T>(key: string, value: T): void => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error(`Error writing ${key} to localStorage`, e);
  }
};

export const storageService = {
  // ATTEMPTS
  getAttempts(): UserAttempt[] {
    return readFromStorage<UserAttempt[]>(KEYS.ATTEMPTS, []);
  },

  saveAttempt(attempt: UserAttempt): void {
    const attempts = this.getAttempts();
    attempts.push(attempt);
    writeToStorage(KEYS.ATTEMPTS, attempts);

    // Tự động cập nhật tiến độ học tập và sổ lỗi sai
    this.updateProgress(attempt.questionTypeId, attempt.isCorrect);

    if (!attempt.isCorrect) {
      this.addOrUpdateMistake(attempt);
    } else {
      this.resolveMistakeIfCorrect(attempt.questionId);
    }
  },

  // MISTAKES (Sổ lỗi sai)
  getMistakes(): UserMistake[] {
    return readFromStorage<UserMistake[]>(KEYS.MISTAKES, []);
  },

  addOrUpdateMistake(attempt: UserAttempt): void {
    const mistakes = this.getMistakes();
    const existingIndex = mistakes.findIndex(m => m.questionId === attempt.questionId);

    if (existingIndex > -1) {
      const existing = mistakes[existingIndex];
      const updated: UserMistake = {
        ...existing,
        wrongAnswer: attempt.userAnswer,
        reviewStatus: existing.reviewStatus === 'fixed' ? 'reviewing' : existing.reviewStatus,
        reviewCount: existing.reviewCount + 1,
        lastAttemptedAt: attempt.createdAt,
        // Tính chu kỳ Spaced Repetition (Luyện tập ngắt quãng)
        nextReviewAt: this.calculateNextReviewDate(existing.reviewCount + 1)
      };
      mistakes[existingIndex] = updated;
    } else {
      const newMistake: UserMistake = {
        id: `mistake-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        userId: attempt.userId,
        questionId: attempt.questionId,
        questionTypeId: attempt.questionTypeId,
        wrongAnswer: attempt.userAnswer,
        reviewStatus: 'new',
        reviewCount: 1,
        lastAttemptedAt: attempt.createdAt,
        nextReviewAt: this.calculateNextReviewDate(1)
      };
      mistakes.push(newMistake);
    }
    writeToStorage(KEYS.MISTAKES, mistakes);
  },

  resolveMistakeIfCorrect(questionId: string): void {
    const mistakes = this.getMistakes();
    const index = mistakes.findIndex(m => m.questionId === questionId);

    if (index > -1) {
      const mistake = mistakes[index];
      // Nếu giải đúng lại, đánh dấu là đã fixed (mastered)
      mistakes[index] = {
        ...mistake,
        reviewStatus: 'fixed',
        nextReviewAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString() // 30 ngày sau ôn lại
      };
      writeToStorage(KEYS.MISTAKES, mistakes);
    }
  },

  updateMistakeStatus(mistakeId: string, status: 'new' | 'reviewing' | 'fixed'): void {
    const mistakes = this.getMistakes();
    const index = mistakes.findIndex(m => m.id === mistakeId);
    if (index > -1) {
      mistakes[index].reviewStatus = status;
      writeToStorage(KEYS.MISTAKES, mistakes);
    }
  },

  calculateNextReviewDate(reviewCount: number): string {
    const now = Date.now();
    let daysToAdd = 1; // 1 ngày
    if (reviewCount === 2) daysToAdd = 3; // 3 ngày
    else if (reviewCount >= 3) daysToAdd = 7; // 7 ngày

    return new Date(now + daysToAdd * 24 * 60 * 60 * 1000).toISOString();
  },

  // PROGRESS (Tiến độ học tập)
  getProgress(userId: string = 'guest'): UserProgress {
    const progressMap = readFromStorage<Record<string, UserProgress>>(KEYS.PROGRESS, {});
    if (!progressMap[userId]) {
      progressMap[userId] = {
        userId,
        masteryLevels: {},
        completedLessons: [],
        lastUpdatedAt: new Date().toISOString()
      };
      writeToStorage(KEYS.PROGRESS, progressMap);
    }
    return progressMap[userId];
  },

  updateProgress(questionTypeId: string, isCorrect: boolean, userId: string = 'guest'): void {
    const progressMap = readFromStorage<Record<string, UserProgress>>(KEYS.PROGRESS, {});
    if (!progressMap[userId]) {
      progressMap[userId] = {
        userId,
        masteryLevels: {},
        completedLessons: [],
        lastUpdatedAt: new Date().toISOString()
      };
    }

    const currentLevel = progressMap[userId].masteryLevels[questionTypeId] || 0;
    let newLevel: number;

    if (isCorrect) {
      newLevel = Math.min(3, currentLevel + 1); // Tăng dần cấp bậc tối đa lên 3 (Master)
      if (newLevel >= 2 && !progressMap[userId].completedLessons.includes(questionTypeId)) {
        progressMap[userId].completedLessons.push(questionTypeId);
      }
    } else {
      newLevel = Math.max(0, currentLevel - 1); // Làm sai sẽ bị giảm nhẹ điểm mastery để kích hoạt nhắc nhở ôn lại
    }

    progressMap[userId].masteryLevels[questionTypeId] = newLevel;
    progressMap[userId].lastUpdatedAt = new Date().toISOString();
    writeToStorage(KEYS.PROGRESS, progressMap);
  },

  // EXAM RESULTS (Kết quả thi thử)
  getExamResults(): ExamResult[] {
    return readFromStorage<ExamResult[]>(KEYS.EXAM_RESULTS, []);
  },

  saveExamResult(result: ExamResult): void {
    const results = this.getExamResults();
    results.push(result);
    writeToStorage(KEYS.EXAM_RESULTS, results);
  },

  // RESET ALL DATA
  resetData(): void {
    localStorage.removeItem(KEYS.ATTEMPTS);
    localStorage.removeItem(KEYS.MISTAKES);
    localStorage.removeItem(KEYS.PROGRESS);
    localStorage.removeItem(KEYS.EXAM_RESULTS);
  }
};
