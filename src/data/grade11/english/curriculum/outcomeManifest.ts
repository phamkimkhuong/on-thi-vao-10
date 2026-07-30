import type { OutcomeManifestEntry } from '@/data/schema';

const outcomeKinds = [
  ['pronunciation', 'language'],
  ['vocabulary', 'getting-started'],
  ['grammar', 'language'],
  ['reading', 'reading'],
  ['writing', 'writing'],
  ['communication', 'communication-culture']
] as const;

export const g11EnglishOutcomeManifest: OutcomeManifestEntry[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].flatMap(
  unitNumber =>
    outcomeKinds.map(([kind, lesson]) => ({
      outcomeId: `eng11-out-u${unitNumber}-${kind}`,
      courseId: 'grade11:english' as const,
      moduleId: `eng11-m${unitNumber}`,
      scope: 'core' as const,
      scopeBasis: 'textbook_core' as const,
      officialRequirementIds: [`eng11-req-u${unitNumber}`],
      lessonIds: [`eng11-u${unitNumber}-${lesson}`],
      reviewStatus: 'source_checked' as const,
      contentVersion: '0.6.0',
      lastVerifiedAt: '2026-07-30'
    }))
);
