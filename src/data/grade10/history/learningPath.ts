import type { LearningOutcome, LearningMisconception } from '@/types';
import { g10HistoryKnowledgeSeeds, g10HistoryTopicIdForType } from './contentBank';
import { g10HistoryQuestionTypes } from './questionTypes';

const outcomeId = (type: number) => `g10-his-out-${String(type).padStart(2, '0')}`;
const misconceptionId = (type: number) => `g10-his-misc-${String(type).padStart(2, '0')}`;

export const g10HistoryOutcomes: LearningOutcome[] = g10HistoryQuestionTypes.map(
  (questionType, index) => {
    const type = index + 1;
    return {
      id: outcomeId(type),
      topicId: g10HistoryTopicIdForType(type),
      title: `Làm chủ: ${questionType.name}`,
      description: `Nhớ đúng kiến thức trọng tâm, nhận ra các cách ghép sai và trả lời được câu hỏi trắc nghiệm về ${questionType.name.toLocaleLowerCase('vi')}.`,
      scope: type <= 12 ? 'core' : 'specialized',
      orderIndex: type,
      questionTypeIds: [questionType.id],
      prerequisiteOutcomeIds: type === 1 ? [] : [outcomeId(type - 1)],
      misconceptionIds: [misconceptionId(type)],
      evidenceTypes: ['recognition', 'explanation', 'application'],
      estimatedMinutes: 45,
      isCritical: true
    };
  }
);

export const g10HistoryMisconceptions: LearningMisconception[] =
  g10HistoryQuestionTypes.map((questionType, index) => {
    const type = index + 1;
    const firstSeed = g10HistoryKnowledgeSeeds.find(item => item.type === type)!;
    return {
      id: misconceptionId(type),
      outcomeId: outcomeId(type),
      title: `Nhầm kiến thức của ${questionType.name}`,
      statement: firstSeed.wrong[0],
      description: `Học sinh dễ ghi nhớ sai rằng: “${firstSeed.wrong[0]}”`,
      correction: `${firstSeed.correct} ${firstSeed.explanation}`,
      severity: type === 1 || type === 2 ? 'critical' : 'normal'
    };
  });
