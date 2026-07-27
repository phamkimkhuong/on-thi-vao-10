import type { QuestionTypeTheoryCheckpoint } from '@/types';

export type ChemistryTheoryCheckSpec = {
  question: string;
  options: [string, string, string, string];
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  explanation: string;
};

export type ChemistryTheoryResourceSpec = {
  id: string;
  principle: string;
  method: string[];
  example: {
    problem: string;
    steps: string[];
    answer: string;
  };
  checks: [ChemistryTheoryCheckSpec, ChemistryTheoryCheckSpec];
};

export type ChemistryTheoryCheckpointSpec = {
  id: string;
  checks: [ChemistryTheoryCheckSpec, ChemistryTheoryCheckSpec];
};

export type ChemistryTheoryResource = {
  theorySupplement: string[];
  checkpoints: QuestionTypeTheoryCheckpoint[];
};

export const buildChemistryTheoryResource = (
  spec: ChemistryTheoryResourceSpec
): ChemistryTheoryResource => ({
  theorySupplement: [
    `**Mở rộng kiến thức và điều kiện áp dụng**\n${spec.principle}`,
    [
      '**Quy trình xử lí dạng bài**',
      ...spec.method.map((step, index) => `${index + 1}. ${step}`)
    ].join('\n'),
    [
      '**Tình huống mẫu có hướng giải**',
      `Đề bài: ${spec.example.problem}`,
      ...spec.example.steps.map((step, index) => `- Bước ${index + 1}: ${step}`),
      `- Kết luận: ${spec.example.answer}`
    ].join('\n')
  ],
  checkpoints: spec.checks.map((check, index) => ({
    id: `${spec.id}-cp-${String(index + 1).padStart(2, '0')}`,
    ...check
  }))
});

export const buildChemistryTheoryResourceMap = (
  specs: ChemistryTheoryResourceSpec[]
): Record<string, ChemistryTheoryResource> =>
  Object.fromEntries(
    specs.map(spec => [spec.id, buildChemistryTheoryResource(spec)])
  );

export const buildChemistryTheoryCheckpointMap = (
  specs: ChemistryTheoryCheckpointSpec[]
): Record<string, QuestionTypeTheoryCheckpoint[]> =>
  Object.fromEntries(
    specs.map(spec => [
      spec.id,
      spec.checks.map((check, index) => ({
        id: `${spec.id}-cp-${String(index + 1).padStart(2, '0')}`,
        ...check
      }))
    ])
  );
