import type { QuestionTypePracticeBlueprint, QuestionRepresentationType } from '@/types';

const representations: QuestionRepresentationType[] = [
  'diagram', 'diagram', 'diagram', 'experiment', 'diagram', 'graph', 'diagram', 'text', 'table'
];

export const g11BiologyModule2PracticeBlueprints: QuestionTypePracticeBlueprint[] =
  representations.map((representation, index) => {
    const id = `bio11-qt${index + 21}`;
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
