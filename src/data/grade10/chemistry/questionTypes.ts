import { QuestionType } from '@/types';
import { m0QuestionTypes } from './modules/module0_intro';
import { m1QuestionTypes } from './modules/module1_atoms';
import { m2QuestionTypes } from './modules/module2_periodic';
import { m3QuestionTypes } from './modules/module3_bond';
import { m4QuestionTypes } from './modules/module4_redox';
import { m5QuestionTypes } from './modules/module5_energy';
import { m6QuestionTypes } from './modules/module6_rate';
import { m7QuestionTypes } from './modules/module7_halogen';
import { m8QuestionTypes } from './modules/module8_synthesis';

export const g10ChemistryQuestionTypes: QuestionType[] = [
  ...m0QuestionTypes,
  ...m1QuestionTypes,
  ...m2QuestionTypes,
  ...m3QuestionTypes,
  ...m4QuestionTypes,
  ...m5QuestionTypes,
  ...m6QuestionTypes,
  ...m7QuestionTypes,
  ...m8QuestionTypes
];
