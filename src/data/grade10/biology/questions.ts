import { Question } from '@/types';
import { g10BiologyPracticeMetadata } from './practiceMetadata';
import { normalizeBiologyPracticeChoice } from './practiceChoiceNormalizer';

const modules = import.meta.glob('./modules/module*/index.ts', { eager: true });

const moduleQuestions: Question[] = Object.values(modules).flatMap(
  (mod: any) => mod.questions || []
);

const metadataByQuestionId = new Map(
  g10BiologyPracticeMetadata.map(metadata => [metadata.questionId, metadata])
);

const enrichedQuestions = moduleQuestions.map(question => {
  const metadata = metadataByQuestionId.get(question.id);
  return metadata ? { ...question, ...metadata, id: question.id } : question;
});

/** Chuẩn hóa vị trí đáp án ở tầng trình bày; dữ liệu nguồn vẫn giữ nguyên để dễ biên tập. */
export const g10BiologyQuestions: Question[] = enrichedQuestions.map(normalizeBiologyPracticeChoice);

export const g10BiologyDisplayAnswerByQuestionId = new Map(
  g10BiologyQuestions.map(question => [question.id, question.correctAnswer])
);
