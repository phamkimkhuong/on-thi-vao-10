import type { OutcomeManifestEntry } from '@/data/schema';

const entry = (
  outcomeId: string,
  officialRequirementId: string,
  lessonId: string,
  moduleId: string
): OutcomeManifestEntry => ({
  outcomeId,
  courseId: 'grade11:math',
  moduleId,
  scope: 'core',
  scopeBasis: 'official_required',
  officialRequirementIds: [officialRequirementId],
  lessonIds: [lessonId],
  reviewStatus: 'source_checked',
  contentVersion: '0.1.0',
  lastVerifiedAt: '2026-07-27'
});

export const g11MathOutcomeManifest: OutcomeManifestEntry[] = [
  entry('out-math11-m1-01', 'math11-official-ch1-angle-values', 'math11-kntt-l1', 'math11-m1'),
  entry('out-math11-m1-02', 'math11-official-ch1-transformations', 'math11-kntt-l2', 'math11-m1'),
  entry('out-math11-m1-03', 'math11-official-ch1-functions', 'math11-kntt-l3', 'math11-m1'),
  entry('out-math11-m1-04', 'math11-official-ch1-equations', 'math11-kntt-l4', 'math11-m1'),
  entry('out-math11-m2-01', 'math11-official-ch2-sequences', 'math11-kntt-l5', 'math11-m2'),
  entry('out-math11-m2-02', 'math11-official-ch2-arithmetic', 'math11-kntt-l6', 'math11-m2'),
  entry('out-math11-m2-03', 'math11-official-ch2-geometric', 'math11-kntt-l7', 'math11-m2'),
  entry('out-math11-m3-01', 'math11-official-ch3-grouped-data', 'math11-kntt-l8', 'math11-m3'),
  entry('out-math11-m3-02', 'math11-official-ch3-central-tendency', 'math11-kntt-l9', 'math11-m3'),
  entry('out-math11-m4-01', 'math11-official-ch4-incidence', 'math11-kntt-l10', 'math11-m4'),
  entry('out-math11-m4-02', 'math11-official-ch4-parallel-lines', 'math11-kntt-l11', 'math11-m4'),
  entry('out-math11-m4-03', 'math11-official-ch4-line-plane', 'math11-kntt-l12', 'math11-m4'),
  entry('out-math11-m4-04', 'math11-official-ch4-parallel-planes', 'math11-kntt-l13', 'math11-m4'),
  entry('out-math11-m4-05', 'math11-official-ch4-projection', 'math11-kntt-l14', 'math11-m4'),
  entry('out-math11-m5-01','math11-official-ch5-limits','math11-kntt-l15','math11-m5'),
  entry('out-math11-m5-02','math11-official-ch5-function-limits','math11-kntt-l16','math11-m5'),
  entry('out-math11-m5-03','math11-official-ch5-continuity','math11-kntt-l17','math11-m5'),
  entry('out-math11-m6-01','math11-official-ch6-exponential-logarithmic','math11-kntt-l18','math11-m6'),
  entry('out-math11-m6-02','math11-official-ch6-logarithms','math11-kntt-l19','math11-m6'),
  entry('out-math11-m6-03','math11-official-ch6-functions','math11-kntt-l20','math11-m6'),
  entry('out-math11-m6-04','math11-official-ch6-equations','math11-kntt-l21','math11-m6'),
  entry('out-math11-m7-01','math11-official-ch7-perpendicularity','math11-kntt-l22','math11-m7'),
  entry('out-math11-m7-02','math11-official-ch7-line-plane','math11-kntt-l23','math11-m7'),
  entry('out-math11-m7-03','math11-official-ch7-projection-angle','math11-kntt-l24','math11-m7'),
  entry('out-math11-m7-04','math11-official-ch7-planes','math11-kntt-l25','math11-m7'),
  entry('out-math11-m7-05','math11-official-ch7-distances','math11-kntt-l26','math11-m7'),
  entry('out-math11-m7-06','math11-official-ch7-volumes','math11-kntt-l27','math11-m7'),
  entry('out-math11-m8-01','math11-official-ch8-probability-rules','math11-kntt-l28','math11-m8'),
  entry('out-math11-m8-02','math11-official-ch8-addition','math11-kntt-l29','math11-m8'),
  entry('out-math11-m8-03','math11-official-ch8-multiplication','math11-kntt-l30','math11-m8'),
  entry('out-math11-m9-01','math11-official-ch9-definition','math11-kntt-l31','math11-m9'),
  entry('out-math11-m9-02','math11-official-ch9-rules','math11-kntt-l32','math11-m9'),
  entry('out-math11-m9-03','math11-official-ch9-second-derivative','math11-kntt-l33','math11-m9')
];
