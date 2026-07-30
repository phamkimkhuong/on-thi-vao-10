import type { QuestionTypePracticeBlueprint, QuestionRepresentationType } from '@/types';

const representations: QuestionRepresentationType[] = [
  'diagram', 'diagram', 'table', 'diagram', 'graph', 'experiment', 'diagram', 'table',
  'graph', 'experiment', 'diagram', 'experiment', 'diagram', 'diagram', 'diagram',
  'table', 'diagram', 'diagram', 'diagram', 'diagram'
];

export const g11BiologyModule1PracticeBlueprints: QuestionTypePracticeBlueprint[] =
  representations.map((representation, index) => {
    const id = `bio11-qt${String(index + 1).padStart(2, '0')}`;
    return {
      questionTypeId: id,
      subTypes: [
        { id: `${id}-st-concept`, name: 'Khái niệm và cơ chế cốt lõi', example: 'Nhận diện và giải thích cơ chế cốt lõi.', targetQuestionCount: 9 },
        { id: `${id}-st-application`, name: 'Dữ liệu, thực hành và vận dụng', example: 'Vận dụng kiến thức vào tình huống hoặc dữ liệu.', targetQuestionCount: 9 }
      ],
      coverage: {
        targetQuestionCount: 18,
        minimumQuestionsPerSubType: 6,
        requiredPracticeRoles: ['guided', 'near_transfer', 'misconception_check', 'far_transfer'],
        requiredRepresentations: representation === 'text' ? ['text'] : ['text', representation],
        masteryHoldoutCount: 4
      }
    };
  });
