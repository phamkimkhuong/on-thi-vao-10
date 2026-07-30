import type { QuestionRepresentationType, QuestionTypePracticeBlueprint } from '@/types';

const representations: QuestionRepresentationType[] = ['diagram', 'diagram', 'diagram', 'table'];
export const g11BiologyModule5PracticeBlueprints: QuestionTypePracticeBlueprint[] =
  representations.map((representation, index) => {
    const id = `bio11-qt${index + 49}`;
    return {
      questionTypeId: id,
      subTypes: [
        { id: `${id}-st-concept`, name: 'Khái niệm và cơ chế cốt lõi', example: 'Giải thích cơ chế tích hợp.', targetQuestionCount: 9 },
        { id: `${id}-st-application`, name: 'Dữ liệu, thực hành và vận dụng', example: 'Vận dụng vào tình huống nhiều hệ.', targetQuestionCount: 9 }
      ],
      coverage: {
        targetQuestionCount: 18, minimumQuestionsPerSubType: 6,
        requiredPracticeRoles: ['guided', 'near_transfer', 'misconception_check', 'far_transfer'],
        requiredRepresentations: ['text', representation], masteryHoldoutCount: 4
      }
    };
  });
