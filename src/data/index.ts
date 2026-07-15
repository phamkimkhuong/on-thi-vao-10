import { SubjectCode, Topic, QuestionType, Question, Solution, MockExam } from '@/types';

// 1. Grade 9 data (JSON)
import g9MathTopics from './grade9/math/topics.json';
import g9MathQuestionTypes from './grade9/math/questionTypes.json';
import g9MathQuestions from './grade9/math/questions.json';
import g9MathSolutions from './grade9/math/solutions.json';

import g9EnglishTopics from './grade9/english/topics.json';
import g9EnglishQuestionTypes from './grade9/english/questionTypes.json';
import g9EnglishQuestions from './grade9/english/questions.json';
import g9EnglishSolutions from './grade9/english/solutions.json';

import g9MockExamsList from './grade9/mockExamsList.json';
import g9MockSolutionsList from './grade9/mockSolutionsList.json';
import g9MathMockQuestions from './grade9/mathMockQuestions.json';
import g9EnglishMockQuestions from './grade9/englishMockQuestions.json';

// 2. Grade 10 data (TS)
import { g10MathTopics } from './grade10/math/topics';
import { g10MathQuestionTypes } from './grade10/math/questionTypes';
import { g10MathQuestions } from './grade10/math/questions';
import { g10MathSolutions } from './grade10/math/solutions';

import { g10EnglishTopics } from './grade10/english/topics';
import { g10EnglishQuestionTypes } from './grade10/english/questionTypes';
import { g10EnglishQuestions } from './grade10/english/questions';
import { g10EnglishSolutions } from './grade10/english/solutions';

import { g10ChemistryTopics } from './grade10/chemistry/topics';
import { g10ChemistryQuestionTypes } from './grade10/chemistry/questionTypes';
import { g10ChemistryQuestions } from './grade10/chemistry/questions';
import { g10ChemistrySolutions } from './grade10/chemistry/solutions';
import { g10ChemistryMisconceptions, g10ChemistryOutcomes } from './grade10/chemistry/learningPath';
import {
  g10ChemistryAssessmentExams,
  g10ChemistryAssessmentQuestions,
  g10ChemistryAssessmentSolutions
} from './grade10/chemistry/assessments';

import {
  g10MathAssessmentExams,
  g10MathAssessmentQuestions,
  g10MathAssessmentSolutions
} from './grade10/math/assessments';

// Combined questions for cross-referencing
export const allQuestions: Question[] = [
  ...(g9MathQuestions as Question[]),
  ...(g9EnglishQuestions as Question[]),
  ...(g9MathMockQuestions as Question[]),
  ...(g9EnglishMockQuestions as Question[]),
  ...g10MathQuestions,
  ...g10EnglishQuestions,
  ...g10ChemistryQuestions,
  ...g10ChemistryAssessmentQuestions,
  ...g10MathAssessmentQuestions
];

export const allSolutions: Solution[] = [
  ...(g9MathSolutions as Solution[]),
  ...(g9EnglishSolutions as Solution[]),
  ...(g9MockSolutionsList as Solution[]),
  ...g10MathSolutions,
  ...g10EnglishSolutions,
  ...g10ChemistrySolutions,
  ...g10ChemistryAssessmentSolutions,
  ...g10MathAssessmentSolutions
];

// Helper functions to get data dynamically based on grade
export const getTopics = (grade: 'grade9' | 'grade10', subject: SubjectCode): Topic[] => {
  if (grade === 'grade9') {
    return subject === 'math' ? (g9MathTopics as Topic[]) : (g9EnglishTopics as Topic[]);
  } else {
    if (subject === 'math') return g10MathTopics;
    if (subject === 'english') return g10EnglishTopics;
    if (subject === 'chemistry') return g10ChemistryTopics;
    return [];
  }
};

export const getQuestionTypes = (grade: 'grade9' | 'grade10', subject: SubjectCode): QuestionType[] => {
  if (grade === 'grade9') {
    return subject === 'math' ? (g9MathQuestionTypes as QuestionType[]) : (g9EnglishQuestionTypes as QuestionType[]);
  } else {
    if (subject === 'math') return g10MathQuestionTypes;
    if (subject === 'english') return g10EnglishQuestionTypes;
    if (subject === 'chemistry') return g10ChemistryQuestionTypes;
    return [];
  }
};

export const getQuestions = (grade: 'grade9' | 'grade10', subject: SubjectCode): Question[] => {
  if (grade === 'grade9') {
    return subject === 'math' ? (g9MathQuestions as Question[]) : (g9EnglishQuestions as Question[]);
  } else {
    if (subject === 'math') return g10MathQuestions;
    if (subject === 'english') return g10EnglishQuestions;
    if (subject === 'chemistry') return g10ChemistryQuestions;
    return [];
  }
};

export const getSolutions = (grade: 'grade9' | 'grade10', subject: SubjectCode): Solution[] => {
  if (grade === 'grade9') {
    return subject === 'math' ? (g9MathSolutions as Solution[]) : (g9EnglishSolutions as Solution[]);
  } else {
    if (subject === 'math') return g10MathSolutions;
    if (subject === 'english') return g10EnglishSolutions;
    if (subject === 'chemistry') return g10ChemistrySolutions;
    return [];
  }
};

export const getMockExams = (grade: 'grade9' | 'grade10', subject: SubjectCode): MockExam[] => {
  const exams = grade === 'grade9'
    ? (g9MockExamsList as MockExam[])
    : [...g10MathAssessmentExams, ...g10ChemistryAssessmentExams];
  return exams.filter(exam => exam.subjectId === subject);
};

export const getLearningOutcomes = (grade: 'grade9' | 'grade10', subject: SubjectCode) =>
  grade === 'grade10' && subject === 'chemistry' ? g10ChemistryOutcomes : [];

export const getLearningMisconceptions = (grade: 'grade9' | 'grade10', subject: SubjectCode) =>
  grade === 'grade10' && subject === 'chemistry' ? g10ChemistryMisconceptions : [];
