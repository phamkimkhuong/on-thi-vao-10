import { QuestionType } from '@/types';
import { m0QuestionTypes } from './modules/m0_intro';
import { m1QuestionTypes } from './modules/m1_atoms';
import { m2QuestionTypes } from './modules/m2_periodic';
import { m3QuestionTypes } from './modules/m3_bond';
import { m4QuestionTypes } from './modules/m4_redox';
import { m5QuestionTypes } from './modules/m5_energy';
import { m6QuestionTypes } from './modules/m6_rate';
import { m7QuestionTypes } from './modules/m7_halogen';
import { m8QuestionTypes } from './modules/m8_synthesis';

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
