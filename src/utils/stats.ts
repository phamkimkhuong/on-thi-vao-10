import { UserAttempt } from '../types';

export const calculateStudentStats = (attempts: UserAttempt[], completedLessonsCount = 0): {
  totalStudySeconds: number;
  totalAttempts: number;
  correctAttempts: number;
  dailyActivity: Record<string, number>;
  xpScore: number;
} => {
  const totalStudySeconds = attempts.reduce((acc, a) => acc + (a.timeSpent || 0), 0);
  const totalAttempts = attempts.length;
  const correctAttempts = attempts.filter(a => a.isCorrect).length;
  const totalMinutes = Math.round(totalStudySeconds / 60);

  const dailyActivity: Record<string, number> = {};
  attempts.forEach(a => {
    if (a.createdAt) {
      const dateStr = a.createdAt.substring(0, 10);
      dailyActivity[dateStr] = (dailyActivity[dateStr] || 0) + 1;
    }
  });

  const xpScore = (totalAttempts * 10) + (totalMinutes * 5) + (completedLessonsCount * 50);

  return {
    totalStudySeconds,
    totalAttempts,
    correctAttempts,
    dailyActivity,
    xpScore
  };
};
