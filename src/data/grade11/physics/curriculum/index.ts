import { g11PhysicsOfficialRequirements } from './officialRequirements';
import { g11PhysicsOutcomeManifest } from './outcomeManifest';
import { g11PhysicsCurriculumSources } from './sources';
import { g11PhysicsTextbookLessons } from './textbookMap';
import type { CurriculumBundle } from '@/data/schema';

export const g11PhysicsCurriculum: CurriculumBundle = {
  sources: g11PhysicsCurriculumSources,
  lessons: g11PhysicsTextbookLessons,
  officialRequirements: g11PhysicsOfficialRequirements,
  outcomeManifest: g11PhysicsOutcomeManifest
};

export {
  g11PhysicsCurriculumSources,
  g11PhysicsOfficialRequirements,
  g11PhysicsOutcomeManifest,
  g11PhysicsTextbookLessons
};
