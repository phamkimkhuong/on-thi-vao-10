import type { CurriculumBundle } from '@/data/schema';
import { g11EnglishCurriculumSources } from './sources';
import { g11EnglishTextbookLessons } from './textbookMap';
import { g11EnglishOfficialRequirements } from './officialRequirements';
import { g11EnglishOutcomeManifest } from './outcomeManifest';

export const g11EnglishCurriculum: CurriculumBundle = {
  sources: g11EnglishCurriculumSources,
  lessons: g11EnglishTextbookLessons,
  officialRequirements: g11EnglishOfficialRequirements,
  outcomeManifest: g11EnglishOutcomeManifest
};

export {
  g11EnglishCurriculumSources,
  g11EnglishTextbookLessons,
  g11EnglishOfficialRequirements,
  g11EnglishOutcomeManifest
};
