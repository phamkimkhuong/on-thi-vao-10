import type { QuestionStimulus } from '@/types';
import type { AdvancedChemistryScope, AuthoredChemistryProblem } from '../types';

interface ChemistryProblemSpec {
  content: string;
  correct: string;
  distractors: [string, string, string];
  insight: string;
  principle: string;
  reasoning: Array<{ title: string; explanation: string; result?: string }>;
  mistakes: [string, string, string];
  tags: string[];
  scope?: AdvancedChemistryScope;
  stimulus?: QuestionStimulus;
}

interface BriefChemistryProblemSpec {
  content: string;
  correct: string;
  distractors: [string, string, string];
  insight: string;
  principle: string;
  work: [string, string, string] | [string, string, string, string];
  tags: string[];
  scope?: AdvancedChemistryScope;
  stimulus?: QuestionStimulus;
}

export const chemProblem = (
  topicId: string,
  spec: ChemistryProblemSpec
): AuthoredChemistryProblem => ({
  topicId,
  scope: spec.scope ?? 'core_advanced',
  content: spec.content,
  options: [spec.correct, ...spec.distractors],
  insight: spec.insight,
  principle: spec.principle,
  steps: spec.reasoning,
  mistakes: spec.mistakes,
  tags: spec.tags,
  stimulus: spec.stimulus
});

export const chemistryTable = (
  id: string,
  title: string,
  content: string,
  caption: string,
  columns: Array<{ key: string; label: string; unit?: string }>,
  rows: Array<Record<string, string | number>>
): QuestionStimulus => ({
  id,
  title,
  content,
  dataTable: { caption, columns, rows }
});

export const briefChemProblem = (
  topicId: string,
  spec: BriefChemistryProblemSpec
): AuthoredChemistryProblem => chemProblem(topicId, {
  content: spec.content,
  correct: spec.correct,
  distractors: spec.distractors,
  insight: spec.insight,
  principle: spec.principle,
  reasoning: spec.work.map((explanation, index) => ({
    title: index === 0 ? 'Tách dữ kiện hóa học' : index === spec.work.length - 1 ? 'Kiểm tra và kết luận' : `Triển khai phép suy luận ${index + 1}`,
    explanation,
    ...(index === spec.work.length - 1 ? { result: spec.correct } : {})
  })),
  mistakes: [
    `Chọn ${spec.distractors[0]} do áp dụng ${spec.tags[0] ?? 'dữ kiện'} trước khi kiểm tra đầy đủ điều kiện.`,
    `Nhầm bước trung gian với đại lượng đề hỏi nên rơi vào phương án ${spec.distractors[1]}.`,
    `Không thử lại đơn vị, điện tích hoặc giới hạn hóa học của kết quả và chọn ${spec.distractors[2]}.`
  ],
  tags: spec.tags,
  scope: spec.scope,
  stimulus: spec.stimulus
});
