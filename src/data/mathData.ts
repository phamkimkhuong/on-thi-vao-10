import mathTopicsJson from './grade9/math/topics.json';
import mathQuestionTypesJson from './grade9/math/questionTypes.json';
import mathQuestionsJson from './grade9/math/questions.json';
import mathSolutionsJson from './grade9/math/solutions.json';
import { Topic, QuestionType, Question, Solution } from '../types';

export const mathTopics = mathTopicsJson as Topic[];
export const mathQuestionTypes = mathQuestionTypesJson as QuestionType[];
export const mathQuestions = mathQuestionsJson as Question[];
export const mathSolutions = mathSolutionsJson as Solution[];