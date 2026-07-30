import { g11BiologyCurriculumSources } from './sources';
import { g11BiologyTextbookLessons } from './textbookMap';
import { g11BiologyOfficialRequirements } from './officialRequirements';
import { g11BiologyOutcomeManifest } from './outcomeManifest';

export {
  g11BiologyCurriculumSources,
  g11BiologyTextbookLessons,
  g11BiologyOfficialRequirements,
  g11BiologyOutcomeManifest
};

export const g11BiologyCurriculum = {
  sources: g11BiologyCurriculumSources,
  lessons: g11BiologyTextbookLessons,
  officialRequirements: g11BiologyOfficialRequirements,
  outcomeManifest: g11BiologyOutcomeManifest
};
