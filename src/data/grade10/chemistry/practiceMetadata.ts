import type { QuestionPracticeMetadata } from '@/types';
import { m3PracticeMetadata } from './modules/module3_bond/practiceMetadata';
import { m0PracticeMetadata } from './modules/module0_intro/practiceMetadata';
import { m1PracticeMetadata } from './modules/module1_atoms/practiceMetadata';
import { m2PracticeMetadata } from './modules/module2_periodic/practiceMetadata';
import { m4PracticeMetadata } from './modules/module4_redox/practiceMetadata';
import { m5PracticeMetadata } from './modules/module5_energy/practiceMetadata';
import { m6PracticeMetadata } from './modules/module6_rate/practiceMetadata';
import { m7PracticeMetadata } from './modules/module7_halogen/practiceMetadata';
import { m8PracticeMetadata } from './modules/module8_synthesis/practiceMetadata';

/** Aggregator migration: chỉ import và gộp metadata tường minh theo module. */
export const g10ChemistryPracticeMetadata: QuestionPracticeMetadata[] = [
  ...m0PracticeMetadata,
  ...m1PracticeMetadata,
  ...m2PracticeMetadata,
  ...m3PracticeMetadata,
  ...m4PracticeMetadata,
  ...m5PracticeMetadata,
  ...m6PracticeMetadata,
  ...m7PracticeMetadata,
  ...m8PracticeMetadata
];
