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

import { g10MockExamsList, g10MockQuestions, g10MockSolutionsList } from './grade10/mockExams';

// Combined questions for cross-referencing
export const allQuestions: Question[] = [
  ...(g9MathQuestions as Question[]),
  ...(g9EnglishQuestions as Question[]),
  ...(g9MathMockQuestions as Question[]),
  ...(g9EnglishMockQuestions as Question[]),
  ...g10MathQuestions,
  ...g10EnglishQuestions,
  ...g10MockQuestions
];

export const allSolutions: Solution[] = [
  ...(g9MathSolutions as Solution[]),
  ...(g9EnglishSolutions as Solution[]),
  ...(g9MockSolutionsList as Solution[]),
  ...g10MathSolutions,
  ...g10EnglishSolutions,
  ...g10MockSolutionsList
];

// Helper functions to get data dynamically based on grade
export const getTopics = (grade: 'grade9' | 'grade10', subject: SubjectCode): Topic[] => {
  if (grade === 'grade9') {
    return subject === 'math' ? (g9MathTopics as Topic[]) : (g9EnglishTopics as Topic[]);
  } else {
    return subject === 'math' ? g10MathTopics : g10EnglishTopics;
  }
};

export const getQuestionTypes = (grade: 'grade9' | 'grade10', subject: SubjectCode): QuestionType[] => {
  if (grade === 'grade9') {
    return subject === 'math' ? (g9MathQuestionTypes as QuestionType[]) : (g9EnglishQuestionTypes as QuestionType[]);
  } else {
    return subject === 'math' ? g10MathQuestionTypes : g10EnglishQuestionTypes;
  }
};

export const getQuestions = (grade: 'grade9' | 'grade10', subject: SubjectCode): Question[] => {
  if (grade === 'grade9') {
    return subject === 'math' ? (g9MathQuestions as Question[]) : (g9EnglishQuestions as Question[]);
  } else {
    return subject === 'math' ? g10MathQuestions : g10EnglishQuestions;
  }
};

export const getSolutions = (grade: 'grade9' | 'grade10', subject: SubjectCode): Solution[] => {
  if (grade === 'grade9') {
    return subject === 'math' ? (g9MathSolutions as Solution[]) : (g9EnglishSolutions as Solution[]);
  } else {
    return subject === 'math' ? g10MathSolutions : g10EnglishSolutions;
  }
};

export const getMockExams = (grade: 'grade9' | 'grade10', subject: SubjectCode): MockExam[] => {
  const exams = grade === 'grade9' ? (g9MockExamsList as MockExam[]) : g10MockExamsList;
  return exams.filter(exam => exam.subjectId === subject);
};
