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
  switch (subject) {
    case 'math':
      return {
        badge: 'bg-indigo-100/80 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 border border-indigo-200/50 dark:border-indigo-500/20',
        text: 'text-indigo-600 dark:text-indigo-400 font-extrabold',
        bg: 'bg-gradient-to-br from-indigo-50 to-blue-50/50 dark:from-indigo-950/20 dark:to-blue-950/10',
        border: 'border-indigo-500/10 shadow-sm shadow-indigo-500/2',
        iconBg: 'bg-indigo-500/10 dark:bg-indigo-500/20 shadow-inner',
        iconColor: 'text-indigo-500'
      };
    case 'chemistry':
      return {
        badge: 'bg-emerald-100/80 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 border border-emerald-200/50 dark:border-emerald-500/20',
        text: 'text-emerald-600 dark:text-emerald-400 font-extrabold',
        bg: 'bg-gradient-to-br from-emerald-50 to-teal-50/50 dark:from-emerald-950/20 dark:to-teal-950/10',
        border: 'border-emerald-500/10 shadow-sm shadow-emerald-500/2',
        iconBg: 'bg-emerald-500/10 dark:bg-emerald-500/20 shadow-inner',
        iconColor: 'text-emerald-500'
      };
    case 'physics':
      return {
        badge: 'bg-cyan-100/80 dark:bg-cyan-950/50 text-cyan-600 dark:text-cyan-400 border border-cyan-200/50 dark:border-cyan-500/20',
        text: 'text-cyan-600 dark:text-cyan-400 font-extrabold',
        bg: 'bg-gradient-to-br from-cyan-50 to-sky-50/50 dark:from-cyan-950/20 dark:to-sky-950/10',
        border: 'border-cyan-500/10 shadow-sm shadow-cyan-500/2',
        iconBg: 'bg-cyan-500/10 dark:bg-cyan-500/20 shadow-inner',
        iconColor: 'text-cyan-500'
      };
    case 'biology':
      return {
        badge: 'bg-green-100/80 dark:bg-green-950/50 text-green-600 dark:text-green-400 border border-green-200/50 dark:border-green-500/20',
        text: 'text-green-600 dark:text-green-400 font-extrabold',
        bg: 'bg-gradient-to-br from-green-50 to-emerald-50/50 dark:from-green-950/20 dark:to-emerald-950/10',
        border: 'border-green-500/10 shadow-sm shadow-green-500/2',
        iconBg: 'bg-green-500/10 dark:bg-green-500/20 shadow-inner',
        iconColor: 'text-green-500'
      };
    case 'english':
    default:
      return {
        badge: 'bg-purple-100/80 dark:bg-purple-950/50 text-purple-600 dark:text-purple-400 border border-purple-200/50 dark:border-purple-500/20',
        text: 'text-purple-600 dark:text-purple-400 font-extrabold',
        bg: 'bg-gradient-to-br from-purple-50 to-pink-50/50 dark:from-purple-950/20 dark:to-pink-950/10',
        border: 'border-purple-500/10 shadow-sm shadow-purple-500/2',
        iconBg: 'bg-purple-500/10 dark:bg-purple-500/20 shadow-inner',
        iconColor: 'text-purple-500'
      };
  }
};

export interface DifficultyTheme {
  text: string;
  dotClass: string;
}

export const getDifficultyTheme = (difficulty: 'easy' | 'medium' | 'hard'): DifficultyTheme => {
  switch (difficulty) {
    case 'easy':
      return {
        text: 'Cơ bản',
        dotClass: 'bg-emerald-500'
      };
    case 'medium':
      return {
        text: 'Trung bình',
        dotClass: 'bg-amber-500'
      };
    case 'hard':
      return {
        text: 'Nâng cao',
        dotClass: 'bg-rose-500'
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
