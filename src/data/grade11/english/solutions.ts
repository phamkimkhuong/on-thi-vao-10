import { g11EnglishModule1Solutions } from './modules/module1_healthy_life/solutions';
import { g11EnglishModule2Solutions } from './modules/module2_generation_gap/solutions';
import { g11EnglishModule3Solutions } from './modules/module3_future_cities/solutions';
import { g11EnglishModule4Solutions } from './modules/module4_asean_vietnam/solutions';
import { g11EnglishModule5Solutions } from './modules/module5_global_warming/solutions';
import { g11EnglishModule6Solutions } from './modules/module6_heritage/solutions';
import { g11EnglishModule7Solutions } from './modules/module7_education_options/solutions';
import { g11EnglishModule8Solutions } from './modules/module8_independence/solutions';
import { g11EnglishModule9Solutions } from './modules/module9_social_issues/solutions';
import { g11EnglishModule10Solutions } from './modules/module10_ecosystem/solutions';
import { g11EnglishQuestions } from './questions';
import { buildDetailedEnglishSolutions } from './solutionBuilder';

const baseSolutions = [
  ...g11EnglishModule1Solutions,
  ...g11EnglishModule2Solutions,
  ...g11EnglishModule3Solutions,
  ...g11EnglishModule4Solutions,
  ...g11EnglishModule5Solutions,
  ...g11EnglishModule6Solutions,
  ...g11EnglishModule7Solutions,
  ...g11EnglishModule8Solutions,
  ...g11EnglishModule9Solutions,
  ...g11EnglishModule10Solutions
];

export const g11EnglishSolutions = buildDetailedEnglishSolutions(
  g11EnglishQuestions,
  baseSolutions
);
