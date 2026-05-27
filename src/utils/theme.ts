import { SubjectCode, UserAttempt } from '../types';

export interface SubjectTheme {
  badge: string;
  text: string;
  bg: string;
  border: string;
  iconBg: string;
  iconColor: string;
}

export const getSubjectTheme = (subject: SubjectCode): SubjectTheme => {
  if (subject === 'math') {
    return {
      badge: 'bg-indigo-100 dark:bg-indigo-950 text-primary',
      text: 'text-primary',
      bg: 'bg-indigo-50 dark:bg-indigo-950/20',
      border: 'border-indigo-500/10',
      iconBg: 'bg-indigo-500/10 dark:bg-indigo-500/20',
      iconColor: 'text-indigo-500'
    };
  } else {
    return {
      badge: 'bg-violet-100 dark:bg-violet-950 text-violet-500',
      text: 'text-violet-500',
      bg: 'bg-violet-50 dark:bg-violet-950/20',
      border: 'border-violet-500/10',
      iconBg: 'bg-violet-500/10 dark:bg-violet-500/20',
      iconColor: 'text-violet-500'
    };
  }
};

export interface DifficultyTheme {
  text: string;
  color: string;
}

export const getDifficultyTheme = (difficulty: 'easy' | 'medium' | 'hard'): DifficultyTheme => {
  switch (difficulty) {
    case 'easy':
      return {
        text: 'Cơ bản',
        color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400'
      };
    case 'medium':
      return {
        text: 'Trung bình',
        color: 'bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-400'
      };
    case 'hard':
      return {
        text: 'Nâng cao',
        color: 'bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-400'
      };
  }
};

export interface TierTheme {
  badgeStyle: string;
  lineStyle: string;
}

export const getTierTheme = (tierId: number): TierTheme => {
  switch (tierId) {
    case 1:
      return {
        badgeStyle: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-600 dark:text-emerald-400',
        lineStyle: 'border-emerald-200 dark:border-emerald-950'
      };
    case 2:
      return {
        badgeStyle: 'bg-indigo-500/10 border-indigo-500/20 text-indigo-600 dark:text-indigo-400',
        lineStyle: 'border-indigo-200 dark:border-indigo-950'
      };
    case 3:
    default:
      return {
        badgeStyle: 'bg-violet-500/10 border-violet-500/20 text-violet-600 dark:text-violet-400',
        lineStyle: 'border-violet-200 dark:border-violet-950'
      };
  }
};
export const getStarsFromScore = (score: number): number => {
  if (score <= 3) {
    // Backwards compatibility migration: old format levels (0, 1, 2, 3)
    return score;
  }
  if (score < 40) return 0;
  if (score < 60) return 1;
  if (score < 80) return 2;
  return 3;
};

export const calculateMasteryScore = (attempts: UserAttempt[]): number => {
  if (attempts.length === 0) return 0;
  
  // Sắp xếp các attempts theo thời gian tăng dần
  const sorted = [...attempts].sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
  
  // Lấy tối đa 8 attempts gần nhất
  const recent = sorted.slice(-8);
  const correctCount = recent.filter(a => a.isCorrect).length;
  const accuracy = correctCount / recent.length;
  
  // Tính chuỗi đúng/sai liên tiếp từ cuối danh sách
  let streak = 0;
  const lastAttempt = sorted[sorted.length - 1];
  
  if (lastAttempt.isCorrect) {
    for (let i = sorted.length - 1; i >= 0; i--) {
      if (sorted[i].isCorrect) {
        streak++;
      } else {
        break;
      }
    }
  } else {
    for (let i = sorted.length - 1; i >= 0; i--) {
      if (!sorted[i].isCorrect) {
        streak--;
      } else {
        break;
      }
    }
  }
  
  // Điểm số = độ chính xác (tối đa 70 điểm) + điểm thưởng/phạt streak (tối đa +/- 30 điểm)
  let score = Math.round(accuracy * 70);
  
  if (streak > 0) {
    score += Math.min(3, streak) * 10;
  } else if (streak < 0) {
    score += Math.max(-2, streak) * 15; // Phạt -15 hoặc -30 điểm
  }
  
  return Math.max(0, Math.min(100, score));
};
