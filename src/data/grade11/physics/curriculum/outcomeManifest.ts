import type { OutcomeManifestEntry } from '@/data/schema';

const verifiedAt = '2026-07-27';

const manifest = (
  outcomeId: string,
  moduleId: string,
  officialRequirementId: string,
  lessonIds: string[]
): OutcomeManifestEntry => ({
  outcomeId,
  courseId: 'grade11:physics',
  moduleId,
  scope: 'core',
  scopeBasis: 'official_required',
  officialRequirementIds: [officialRequirementId],
  lessonIds,
  reviewStatus: 'source_checked',
  contentVersion: '0.2.0',
  lastVerifiedAt: verifiedAt
});

export const g11PhysicsOutcomeManifest: OutcomeManifestEntry[] = [
  manifest('out-phy11-m1-01', 'phy11-m1', 'phy11-official-ch1-characteristics', ['phy11-kntt-l1', 'phy11-kntt-l2']),
  manifest('out-phy11-m1-02', 'phy11-m1', 'phy11-official-ch1-motion', ['phy11-kntt-l3', 'phy11-kntt-l4']),
  manifest('out-phy11-m1-03', 'phy11-m1', 'phy11-official-ch1-energy', ['phy11-kntt-l5', 'phy11-kntt-l7']),
  manifest('out-phy11-m1-04', 'phy11-m1', 'phy11-official-ch1-damping-forced', ['phy11-kntt-l6']),
  manifest('out-phy11-m1-05', 'phy11-m1', 'phy11-official-ch1-resonance', ['phy11-kntt-l6']),
  manifest('out-phy11-m1-06', 'phy11-m1', 'phy11-official-ch1-experiment', ['phy11-kntt-l1']),

  manifest('out-phy11-m2-01', 'phy11-m2', 'phy11-official-ch2-description', ['phy11-kntt-l8']),
  manifest('out-phy11-m2-02', 'phy11-m2', 'phy11-official-ch2-speed-energy', ['phy11-kntt-l8', 'phy11-kntt-l9', 'phy11-kntt-l14']),
  manifest('out-phy11-m2-03', 'phy11-m2', 'phy11-official-ch2-wave-types', ['phy11-kntt-l9']),
  manifest('out-phy11-m2-04', 'phy11-m2', 'phy11-official-ch2-sound-frequency', ['phy11-kntt-l10']),
  manifest('out-phy11-m2-05', 'phy11-m2', 'phy11-official-ch2-electromagnetic', ['phy11-kntt-l11']),
  manifest('out-phy11-m2-06', 'phy11-m2', 'phy11-official-ch2-interference', ['phy11-kntt-l12', 'phy11-kntt-l14']),
  manifest('out-phy11-m2-07', 'phy11-m2', 'phy11-official-ch2-standing', ['phy11-kntt-l13', 'phy11-kntt-l14']),
  manifest('out-phy11-m2-08', 'phy11-m2', 'phy11-official-ch2-sound-speed', ['phy11-kntt-l15']),

  manifest('out-phy11-m3-01', 'phy11-m3', 'phy11-official-ch3-coulomb', ['phy11-kntt-l16']),
  manifest('out-phy11-m3-02', 'phy11-m3', 'phy11-official-ch3-field-concept', ['phy11-kntt-l17']),
  manifest('out-phy11-m3-03', 'phy11-m3', 'phy11-official-ch3-point-charge', ['phy11-kntt-l17']),
  manifest('out-phy11-m3-04', 'phy11-m3', 'phy11-official-ch3-field-lines', ['phy11-kntt-l17']),
  manifest('out-phy11-m3-05', 'phy11-m3', 'phy11-official-ch3-uniform-field', ['phy11-kntt-l18']),
  manifest('out-phy11-m3-06', 'phy11-m3', 'phy11-official-ch3-charged-particle', ['phy11-kntt-l18']),
  manifest('out-phy11-m3-07', 'phy11-m3', 'phy11-official-ch3-potential-energy', ['phy11-kntt-l19']),
  manifest('out-phy11-m3-08', 'phy11-m3', 'phy11-official-ch3-potential', ['phy11-kntt-l20']),
  manifest('out-phy11-m3-09', 'phy11-m3', 'phy11-official-ch3-capacitor', ['phy11-kntt-l21']),

  manifest('out-phy11-m4-01', 'phy11-m4', 'phy11-official-ch4-current', ['phy11-kntt-l22']),
  manifest('out-phy11-m4-02', 'phy11-m4', 'phy11-official-ch4-current', ['phy11-kntt-l22']),
  manifest('out-phy11-m4-03', 'phy11-m4', 'phy11-official-ch4-resistance-temperature', ['phy11-kntt-l23']),
  manifest('out-phy11-m4-04', 'phy11-m4', 'phy11-official-ch4-characteristic', ['phy11-kntt-l23']),
  manifest('out-phy11-m4-05', 'phy11-m4', 'phy11-official-ch4-ohm', ['phy11-kntt-l23']),
  manifest('out-phy11-m4-06', 'phy11-m4', 'phy11-official-ch4-source', ['phy11-kntt-l24']),
  manifest('out-phy11-m4-07', 'phy11-m4', 'phy11-official-ch4-energy-power', ['phy11-kntt-l25']),
  manifest('out-phy11-m4-08', 'phy11-m4', 'phy11-official-ch4-source-experiment', ['phy11-kntt-l26'])
];
