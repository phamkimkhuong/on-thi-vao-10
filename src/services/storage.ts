import { UserAttempt, UserMistake, UserProgress, ExamResult } from '../types';
import { calculateMasteryScore } from '../utils/theme';

const KEYS = {
  ATTEMPTS: 'otv10_attempts',
  MISTAKES: 'otv10_mistakes',
  PROGRESS: 'otv10_progress',
  EXAM_RESULTS: 'otv10_exam_results'
};

// Helper để đọc từ localStorage và tự động migrate dữ liệu cũ nếu là Array
const readAttemptsMap = (): Record<string, UserAttempt[]> => {
  try {
    const data = localStorage.getItem(KEYS.ATTEMPTS);
    if (!data) return {};
    const parsed = JSON.parse(data);
    if (Array.isArray(parsed)) {
      const migrated = { guest: parsed };
      localStorage.setItem(KEYS.ATTEMPTS, JSON.stringify(migrated));
      return migrated;
    }
    return parsed;
  } catch (e) {
    console.error('Lỗi khi đọc attempts từ localStorage', e);
    return {};
  }
};

const readMistakesMap = (): Record<string, UserMistake[]> => {
  try {
    const data = localStorage.getItem(KEYS.MISTAKES);
    if (!data) return {};
    const parsed = JSON.parse(data);
    if (Array.isArray(parsed)) {
      const migrated = { guest: parsed };
      localStorage.setItem(KEYS.MISTAKES, JSON.stringify(migrated));
      return migrated;
    }
    return parsed;
  } catch (e) {
    console.error('Lỗi khi đọc mistakes từ localStorage', e);
    return {};
  }
};

const readExamResultsMap = (): Record<string, ExamResult[]> => {
  try {
    const data = localStorage.getItem(KEYS.EXAM_RESULTS);
    if (!data) return {};
    const parsed = JSON.parse(data);
    if (Array.isArray(parsed)) {
      const migrated = { guest: parsed };
      localStorage.setItem(KEYS.EXAM_RESULTS, JSON.stringify(migrated));
      return migrated;
    }
    return parsed;
  } catch (e) {
    console.error('Lỗi khi đọc exam results từ localStorage', e);
    return {};
  }
};

const readProgressMap = (): Record<string, UserProgress> => {
  try {
    const data = localStorage.getItem(KEYS.PROGRESS);
    if (!data) return {};
    const parsed = JSON.parse(data);
    // Progress ban đầu đã được thiết kế dạng Map
    return parsed;
  } catch (e) {
    console.error('Lỗi khi đọc progress từ localStorage', e);
    return {};
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
  getAttempts(userId: string = 'guest'): UserAttempt[] {
    const map = readAttemptsMap();
    return map[userId] || [];
  },

  saveAttempt(userId: string = 'guest', attempt: UserAttempt): void {
    const map = readAttemptsMap();
    if (!map[userId]) {
      map[userId] = [];
    }
    map[userId].push(attempt);
    writeToStorage(KEYS.ATTEMPTS, map);

    // Tự động cập nhật tiến độ học tập và sổ lỗi sai tương ứng với userId
    this.updateProgress(userId, attempt.questionTypeId);

    if (!attempt.isCorrect) {
      this.addOrUpdateMistake(userId, attempt);
    } else {
      this.resolveMistakeIfCorrect(userId, attempt.questionId);
    }
  },

  saveAttemptsLocal(userId: string, attempts: UserAttempt[]): void {
    const map = readAttemptsMap();
    map[userId] = attempts;
    writeToStorage(KEYS.ATTEMPTS, map);
  },

  // MISTAKES (Sổ lỗi sai)
  getMistakes(userId: string = 'guest'): UserMistake[] {
    const map = readMistakesMap();
    return map[userId] || [];
  },

  addOrUpdateMistake(userId: string = 'guest', attempt: UserAttempt): void {
    const map = readMistakesMap();
    const mistakes = map[userId] || [];
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
        userId: userId,
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

    map[userId] = mistakes;
    writeToStorage(KEYS.MISTAKES, map);
  },

  resolveMistakeIfCorrect(userId: string = 'guest', questionId: string): void {
    const map = readMistakesMap();
    const mistakes = map[userId] || [];
    const index = mistakes.findIndex(m => m.questionId === questionId);

    if (index > -1) {
      const mistake = mistakes[index];
      // Nếu giải đúng lại, đánh dấu là đã fixed (mastered)
      mistakes[index] = {
        ...mistake,
        reviewStatus: 'fixed',
        nextReviewAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString() // 30 ngày sau ôn lại
      };
      map[userId] = mistakes;
      writeToStorage(KEYS.MISTAKES, map);
    }
  },

  updateMistakeStatus(userId: string = 'guest', mistakeId: string, status: 'new' | 'reviewing' | 'fixed'): void {
    const map = readMistakesMap();
    const mistakes = map[userId] || [];
    const index = mistakes.findIndex(m => m.id === mistakeId);
    if (index > -1) {
      mistakes[index].reviewStatus = status;
      map[userId] = mistakes;
      writeToStorage(KEYS.MISTAKES, map);
    }
  },

  saveMistakesLocal(userId: string, mistakes: UserMistake[]): void {
    const map = readMistakesMap();
    map[userId] = mistakes;
    writeToStorage(KEYS.MISTAKES, map);
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
    const progressMap = readProgressMap();
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

  updateProgress(userId: string = 'guest', questionTypeId: string): void {
    const progressMap = readProgressMap();
    if (!progressMap[userId]) {
      progressMap[userId] = {
        userId,
        masteryLevels: {},
        completedLessons: [],
        lastUpdatedAt: new Date().toISOString()
      };
    }

    // Lấy danh sách attempts của user cho dạng bài này
    const attempts = this.getAttempts(userId).filter(a => a.questionTypeId === questionTypeId);
    const newScore = calculateMasteryScore(attempts);

    progressMap[userId].masteryLevels[questionTypeId] = newScore;

    // Xem như hoàn thành (completed) nếu masteryScore đạt >= 60 (tương đương 2 sao trở lên)
    const isCompleted = newScore >= 60;
    const completedIndex = progressMap[userId].completedLessons.indexOf(questionTypeId);
    
    if (isCompleted && completedIndex === -1) {
      progressMap[userId].completedLessons.push(questionTypeId);
    } else if (!isCompleted && completedIndex !== -1) {
      progressMap[userId].completedLessons.splice(completedIndex, 1);
    }

    progressMap[userId].lastUpdatedAt = new Date().toISOString();
    writeToStorage(KEYS.PROGRESS, progressMap);
  },

  saveProgressLocal(userId: string, progress: UserProgress): void {
    const progressMap = readProgressMap();
    progressMap[userId] = progress;
    writeToStorage(KEYS.PROGRESS, progressMap);
  },

  // EXAM RESULTS (Kết quả thi thử)
  getExamResults(userId: string = 'guest'): ExamResult[] {
    const map = readExamResultsMap();
    return map[userId] || [];
  },

  saveExamResult(userId: string = 'guest', result: ExamResult): void {
    const map = readExamResultsMap();
    if (!map[userId]) {
      map[userId] = [];
    }
    map[userId].push(result);
    writeToStorage(KEYS.EXAM_RESULTS, map);
  },

  saveExamResultsLocal(userId: string, exams: ExamResult[]): void {
    const map = readExamResultsMap();
    map[userId] = exams;
    writeToStorage(KEYS.EXAM_RESULTS, map);
  },

  // RESET ALL DATA
  resetData(): void {
    localStorage.removeItem(KEYS.ATTEMPTS);
    localStorage.removeItem(KEYS.MISTAKES);
    localStorage.removeItem(KEYS.PROGRESS);
    localStorage.removeItem(KEYS.EXAM_RESULTS);
  }
};
