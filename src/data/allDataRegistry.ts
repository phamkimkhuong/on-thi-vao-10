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
    badge: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20',
    text: 'text-indigo-600 dark:text-indigo-400'
  },
  english: {
    badge: 'bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/20',
    text: 'text-violet-600 dark:text-violet-400'
  },
  chemistry: {
    badge: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
    text: 'text-emerald-600 dark:text-emerald-400'
  },
  physics: {
    badge: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20',
    text: 'text-amber-600 dark:text-amber-400'
  },
  biology: {
    badge: 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20',
    text: 'text-rose-600 dark:text-rose-400'
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

  // Thứ tự hiển thị môn học: Toán -> Anh -> Lý -> Hóa -> Sinh
  let subjectOrder = 1;
  if (subjectCode === 'math') subjectOrder = 1;
  else if (subjectCode === 'english') subjectOrder = 2;
  else if (subjectCode === 'physics') subjectOrder = 3;
  else if (subjectCode === 'chemistry') subjectOrder = 4;
  else if (subjectCode === 'biology') subjectOrder = 5;

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
  ...g11EnglishQuestionTypes,
  ...g11ChemistryQuestionTypes,
  ...g11PhysicsQuestionTypes,
  ...g10ChemistryQuestionTypes,
  ...g10MathQuestionTypes,
  ...g10EnglishQuestionTypes,
  ...g10PhysicsQuestionTypes,
  ...g10BiologyQuestionTypes,
  ...mathQuestionTypes,
  ...englishQuestionTypes,
];

export const allQuestionTypesMap = new Map<string, QuestionType>(
  allQuestionTypesList.map(qt => [qt.id, qt])
);

// Tổng hợp toàn bộ Questions của hệ thống
export const allQuestionsList: Question[] = [
  ...g11EnglishQuestions,
  ...g11ChemistryQuestions,
  ...g11PhysicsQuestions,
  ...g10ChemistryQuestions,
  ...g10MathQuestions,
  ...g10EnglishQuestions,
  ...g10PhysicsQuestions,
  ...g10BiologyQuestions,
  ...mathQuestions,
  ...englishQuestions,
];

export const allQuestionsMap = new Map<string, Question>(
  allQuestionsList.map(q => [q.id, q])
);
