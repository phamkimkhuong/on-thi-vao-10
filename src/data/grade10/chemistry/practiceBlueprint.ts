import type { QuestionTypePracticeBlueprint } from '@/types';
import { m0PracticeBlueprints } from './modules/module0_intro/practiceBlueprint';
import { m1PracticeBlueprints } from './modules/module1_atoms/practiceBlueprint';
import { m2PracticeBlueprints } from './modules/module2_periodic/practiceBlueprint';
import { m3PracticeBlueprints } from './modules/module3_bond/practiceBlueprint';
import { m4PracticeBlueprints } from './modules/module4_redox/practiceBlueprint';
import { m5PracticeBlueprints } from './modules/module5_energy/practiceBlueprint';
import { m6PracticeBlueprints } from './modules/module6_rate/practiceBlueprint';
import { m7PracticeBlueprints } from './modules/module7_halogen/practiceBlueprint';
import { m8PracticeBlueprints } from './modules/module8_synthesis/practiceBlueprint';

/** Aggregator: chỉ gộp blueprint do từng module sở hữu, không chứa dữ liệu thô. */
export const g10ChemistryPracticeBlueprints: QuestionTypePracticeBlueprint[] = [
  ...m0PracticeBlueprints,
  ...m1PracticeBlueprints,
  ...m2PracticeBlueprints,
  ...m3PracticeBlueprints,
  ...m4PracticeBlueprints,
  ...m5PracticeBlueprints,
  ...m6PracticeBlueprints,
  ...m7PracticeBlueprints,
  ...m8PracticeBlueprints
];
