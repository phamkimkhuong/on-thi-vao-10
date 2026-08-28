import { QuestionType, Question } from '@/types';
import { 
  getSubjectFromQuestionTypeId, 
  getGradeFromQuestionTypeId, 
  getSubjectName, 
  getSubjectIcon 
} from '../utils/subject';
import { mathQuestionTypes, mathQuestions } from './mathData';
import { englishQuestionTypes, englishQuestions } from './englishData';
import { g10MathQuestionTypes } from './grade10/math/questionTypes';
import { g10MathQuestions } from './grade10/math/questions';
import { g10EnglishQuestionTypes } from './grade10/english/questionTypes';
import { g10EnglishQuestions } from './grade10/english/questions';
import { g10ChemistryQuestionTypes } from './grade10/chemistry/questionTypes';
import { g10ChemistryQuestions } from './grade10/chemistry/questions';
import { g10PhysicsQuestionTypes } from './grade10/physics/questionTypes';
import { g10PhysicsQuestions } from './grade10/physics/questions';
import { g10BiologyQuestionTypes } from './grade10/biology/questionTypes';
import { g10BiologyQuestions } from './grade10/biology/questions';
import { g10HistoryQuestionTypes } from './grade10/history/questionTypes';
import { g10HistoryQuestions } from './grade10/history/questions';
import { g11MathQuestionTypes } from './grade11/math/questionTypes';
import { g11MathQuestions } from './grade11/math/questions';
import { g11BiologyQuestionTypes } from './grade11/biology/questionTypes';
import { g11BiologyQuestions } from './grade11/biology/questions';
import { g11ChemistryQuestionTypes } from './grade11/chemistry/questionTypes';
import { g11ChemistryQuestions } from './grade11/chemistry/questions';
import { g11PhysicsQuestionTypes } from './grade11/physics/questionTypes';
import { g11PhysicsQuestions } from './grade11/physics/questions';
import { g11EnglishQuestionTypes } from './grade11/english/questionTypes';
import { g11EnglishQuestions } from './grade11/english/questions';

export interface SubjectCategoryInfo {
  key: string;
  name: string;
  grade: string;
  icon: string;
  badgeClass: string;
  textClass: string;
  order: number;
}

// Bảng màu sắc tĩnh để tránh Tailwind bị prune class động khi build production
const colorClasses: Record<string, { badge: string; text: string }> = {
  math: {
    badge: 'bg-blue-500/10 text-blue-800 dark:text-blue-300 border-blue-500/20',
    text: 'text-blue-800 dark:text-blue-300'
  },
  english: {
    badge: 'bg-orange-500/10 text-orange-800 dark:text-orange-300 border-orange-500/20',
    text: 'text-orange-800 dark:text-orange-300'
  },
  chemistry: {
    badge: 'bg-teal-500/10 text-teal-800 dark:text-teal-300 border-teal-500/20',
    text: 'text-teal-800 dark:text-teal-300'
  },
  physics: {
    badge: 'bg-cyan-500/10 text-cyan-800 dark:text-cyan-300 border-cyan-500/20',
    text: 'text-cyan-800 dark:text-cyan-300'
  },
  biology: {
    badge: 'bg-green-500/10 text-green-800 dark:text-green-300 border-green-500/20',
    text: 'text-green-800 dark:text-green-300'
  },
  history: {
    badge: 'bg-amber-600/10 text-amber-700 dark:text-amber-400 border-amber-600/20',
    text: 'text-amber-700 dark:text-amber-400'
  }
};

export const getSubjectInfoByTypeId = (typeId: string): SubjectCategoryInfo => {
  const subjectCode = getSubjectFromQuestionTypeId(typeId) || 'math';
  const grade = getGradeFromQuestionTypeId(typeId);
  const subjectName = getSubjectName(subjectCode);
  const icon = getSubjectIcon(subjectCode);

  const gradeNum = grade.replace('Lớp ', '');
  const key = `g${gradeNum}-${subjectCode}`;

  const colors = colorClasses[subjectCode] || colorClasses.math;

  // Thứ tự hiển thị môn học: Toán -> Anh -> Lý -> Hóa -> Sinh -> Sử
  let subjectOrder = 1;
  if (subjectCode === 'math') subjectOrder = 1;
  else if (subjectCode === 'english') subjectOrder = 2;
  else if (subjectCode === 'physics') subjectOrder = 3;
  else if (subjectCode === 'chemistry') subjectOrder = 4;
  else if (subjectCode === 'biology') subjectOrder = 5;
  else if (subjectCode === 'history') subjectOrder = 6;

  // Sắp xếp theo: Khối lớp giảm dần (g11 -> g10 -> g9) + Môn học tăng dần
  const gradeVal = parseInt(gradeNum) || 9;
  const order = (12 - gradeVal) * 10 + subjectOrder;

  return {
    key,
    name: `${subjectName} ${gradeNum}`,
    grade,
    icon,
    badgeClass: colors.badge,
    textClass: colors.text,
    order
  };
};

// Tổng hợp toàn bộ QuestionTypes của hệ thống
export const allQuestionTypesList: QuestionType[] = [
  ...g11MathQuestionTypes,
  ...g11EnglishQuestionTypes,
  ...g11ChemistryQuestionTypes,
  ...g11PhysicsQuestionTypes,
  ...g11BiologyQuestionTypes,
  ...g10ChemistryQuestionTypes,
  ...g10MathQuestionTypes,
  ...g10EnglishQuestionTypes,
  ...g10PhysicsQuestionTypes,
  ...g10BiologyQuestionTypes,
  ...g10HistoryQuestionTypes,
  ...mathQuestionTypes,
  ...englishQuestionTypes,
];

export const allQuestionTypesMap = new Map<string, QuestionType>(
  allQuestionTypesList.map(qt => [qt.id, qt])
);

// Tổng hợp toàn bộ Questions của hệ thống
export const allQuestionsList: Question[] = [
  ...g11MathQuestions,
  ...g11EnglishQuestions,
  ...g11ChemistryQuestions,
  ...g11PhysicsQuestions,
  ...g11BiologyQuestions,
  ...g10ChemistryQuestions,
  ...g10MathQuestions,
  ...g10EnglishQuestions,
  ...g10PhysicsQuestions,
  ...g10BiologyQuestions,
  ...g10HistoryQuestions,
  ...mathQuestions,
  ...englishQuestions,
];

export const allQuestionsMap = new Map<string, Question>(
  allQuestionsList.map(q => [q.id, q])
);
