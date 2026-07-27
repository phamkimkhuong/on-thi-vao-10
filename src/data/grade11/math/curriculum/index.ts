import { g11MathOfficialRequirements } from './officialRequirements';
import { g11MathOutcomeManifest } from './outcomeManifest';
import { g11MathCurriculumSources } from './sources';
import { g11MathTextbookLessons } from './textbookMap';
import type { CurriculumBundle } from '@/data/schema';

export const g11MathCurriculum: CurriculumBundle = {
  sources: g11MathCurriculumSources,
  lessons: g11MathTextbookLessons,
  officialRequirements: g11MathOfficialRequirements,
  outcomeManifest: g11MathOutcomeManifest
};

export {
  g11MathCurriculumSources,
  g11MathOfficialRequirements,
  g11MathOutcomeManifest,
  g11MathTextbookLessons
};
