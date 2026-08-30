import type { QuestionStimulus } from '@/types';

export interface AuthoredProblem {
  topicId: string;
  content: string;
  options: string[];
  insight: string;
  steps: Array<{ title: string; explanation: string; result?: string }>;
  mistakes: string[];
  tags: string[];
  stimulus?: QuestionStimulus;
}

interface ProblemSpec {
  content: string;
  correct: string;
  distractors: [string, string, string];
  insight: string;
  reasoning: [string, string, string] | [string, string, string, string];
  mistakes?: [string, string];
  tags: string[];
  stimulus?: QuestionStimulus;
}

const math = (value: string): string => `\\(${value}\\)`;

export const problem = (topicId: string, spec: ProblemSpec): AuthoredProblem => ({
  topicId,
  content: spec.content,
  options: [spec.correct, ...spec.distractors].map(math),
  insight: spec.insight,
  steps: spec.reasoning.map((explanation, index) => ({
    title: index === spec.reasoning.length - 1 ? 'Kết luận' : `Bước ${index + 1}`,
    explanation,
    ...(index === spec.reasoning.length - 1 ? { result: math(spec.correct) } : {})
  })),
  mistakes: spec.mistakes ?? ['Áp dụng công thức trước khi kiểm tra điều kiện.', 'Dừng ở kết quả trung gian hoặc bỏ sót trường hợp.'],
  tags: spec.tags,
  stimulus: spec.stimulus
});

export const diagram = (
  id: string,
  title: string,
  content: string,
  src: string,
  alt: string
): QuestionStimulus => ({
  id,
  title,
  content,
  media: [{ id: `${id}-media`, type: 'diagram', src, alt, width: 960, height: 520 }]
});

export const table = (
  id: string,
  title: string,
  content: string,
  caption: string,
  columns: Array<{ key: string; label: string }>,
  rows: Array<Record<string, string | number>>
): QuestionStimulus => ({
  id,
  title,
  content,
  dataTable: { caption, columns, rows }
});
