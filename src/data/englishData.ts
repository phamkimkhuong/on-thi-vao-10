import englishTopicsJson from './grade9/english/topics.json';
import englishQuestionTypesJson from './grade9/english/questionTypes.json';
import englishQuestionsJson from './grade9/english/questions.json';
import englishSolutionsJson from './grade9/english/solutions.json';
import { Topic, QuestionType, Question, Solution } from '../types';

export const englishTopics = englishTopicsJson as Topic[];
export const englishQuestionTypes = englishQuestionTypesJson as QuestionType[];
export const englishQuestions = englishQuestionsJson as Question[];
export const englishSolutions = englishSolutionsJson as Solution[];
