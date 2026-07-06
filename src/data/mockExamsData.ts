import mockExamsListJson from './grade9/mockExamsList.json';
import mockSolutionsListJson from './grade9/mockSolutionsList.json';
import mathMockQuestionsJson from './grade9/mathMockQuestions.json';
import englishMockQuestionsJson from './grade9/englishMockQuestions.json';
import { MockExam, Question, Solution } from '../types';

export const mockExamsList = mockExamsListJson as MockExam[];
export const mockSolutionsList = mockSolutionsListJson as Solution[];
export const mathMockQuestions = mathMockQuestionsJson as Question[];
export const englishMockQuestions = englishMockQuestionsJson as Question[];
