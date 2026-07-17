import { biologyMidterm1Exams } from './exams/midterm1';
import { biologyFinal1Exams } from './exams/final1';
import { biologyMidterm2Exams } from './exams/midterm2';
import { biologyFinal2Exams } from './exams/final2';
import {
  biologyMidterm1QuestionsFormA,
  biologyMidterm1QuestionsFormB,
  biologyMidterm1SolutionsFormA,
  biologyMidterm1SolutionsFormB
} from './midterm1';
import {
  biologyFinal1QuestionsFormA,
  biologyFinal1QuestionsFormB,
  biologyFinal1SolutionsFormA,
  biologyFinal1SolutionsFormB
} from './final1';
import { biologyMidterm2QuestionsFormA, biologyMidterm2QuestionsFormB, biologyMidterm2SolutionsFormA, biologyMidterm2SolutionsFormB } from './midterm2';
import { biologyFinal2QuestionsFormA, biologyFinal2QuestionsFormB, biologyFinal2SolutionsFormA, biologyFinal2SolutionsFormB } from './final2';

export { biologyMidterm1Blueprint } from './blueprints/midterm1';
export { biologyFinal1Blueprint } from './blueprints/final1';
export { biologyMidterm2Blueprint } from './blueprints/midterm2';
export { biologyFinal2Blueprint } from './blueprints/final2';

export const g10BiologyAssessmentExams = [...biologyMidterm1Exams, ...biologyFinal1Exams, ...biologyMidterm2Exams, ...biologyFinal2Exams];
export const g10BiologyAssessmentQuestions = [
  ...biologyMidterm1QuestionsFormA,
  ...biologyMidterm1QuestionsFormB,
  ...biologyFinal1QuestionsFormA,
  ...biologyFinal1QuestionsFormB,
  ...biologyMidterm2QuestionsFormA,
  ...biologyMidterm2QuestionsFormB,
  ...biologyFinal2QuestionsFormA,
  ...biologyFinal2QuestionsFormB
];
export const g10BiologyAssessmentSolutions = [
  ...biologyMidterm1SolutionsFormA,
  ...biologyMidterm1SolutionsFormB,
  ...biologyFinal1SolutionsFormA,
  ...biologyFinal1SolutionsFormB,
  ...biologyMidterm2SolutionsFormA,
  ...biologyMidterm2SolutionsFormB,
  ...biologyFinal2SolutionsFormA,
  ...biologyFinal2SolutionsFormB
];
