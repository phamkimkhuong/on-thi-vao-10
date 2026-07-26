import type { OutcomeManifestEntry } from '@/data/schema';

const verifiedAt = '2026-07-26';

export const g11PhysicsOutcomeManifest: OutcomeManifestEntry[] = [
  {
    outcomeId: 'out-phy11-m1-01',
    courseId: 'grade11:physics',
    moduleId: 'phy11-m1',
    scope: 'core',
    scopeBasis: 'official_required',
    officialRequirementIds: ['phy11-official-ch1-characteristics'],
    lessonIds: ['phy11-kntt-l1', 'phy11-kntt-l2'],
    reviewStatus: 'source_checked',
    contentVersion: '0.1.0',
    lastVerifiedAt: verifiedAt
  },
  {
    outcomeId: 'out-phy11-m1-02',
    courseId: 'grade11:physics',
    moduleId: 'phy11-m1',
    scope: 'core',
    scopeBasis: 'official_required',
    officialRequirementIds: ['phy11-official-ch1-velocity-acceleration'],
    lessonIds: ['phy11-kntt-l3', 'phy11-kntt-l4'],
    reviewStatus: 'source_checked',
    contentVersion: '0.1.0',
    lastVerifiedAt: verifiedAt
  }
];
