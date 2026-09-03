import type { QuestionStimulus } from '@/types';
import type { AuthoredBiologyProblem } from '../types';

interface BiologyProblemSpec {
  content: string;
  correct: string;
  distractors: [string, string, string];
  insight: string;
  evidence: string;
  mechanism: string;
  reasoning: string[];
  distractorReasons: [string, string, string];
  tags: string[];
  stimulus?: QuestionStimulus;
}

export const bioProblem = (topicId: string, spec: BiologyProblemSpec): AuthoredBiologyProblem => ({
  topicId,
  content: spec.content,
  options: [spec.correct, ...spec.distractors],
  insight: spec.insight,
  evidence: spec.evidence,
  mechanism: spec.mechanism,
  reasoning: spec.reasoning,
  distractorReasons: spec.distractorReasons,
  tags: spec.tags,
  stimulus: spec.stimulus
});

export const biologyTable = (
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
