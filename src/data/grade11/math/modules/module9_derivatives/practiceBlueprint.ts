import type { QuestionTypePracticeBlueprint } from '@/types';

const blueprints = [
  ['31', 'definition', 'Định nghĩa và sự tồn tại', 'Dùng giới hạn tỉ số biến thiên.', 'meaning', 'Ý nghĩa và tiếp tuyến', 'Hệ số góc, tiếp tuyến và vận tốc.', 'equation', 'text'],
  ['32', 'elementary', 'Đạo hàm hàm sơ cấp', 'Đa thức, căn, lượng giác, mũ, lôgarit.', 'rules', 'Quy tắc và hàm hợp', 'Tổng, tích, thương và hàm hợp.', 'equation', 'text'],
  ['33', 'second', 'Tính đạo hàm cấp hai', 'Lấy đạo hàm liên tiếp.', 'mechanics', 'Vận tốc và gia tốc', 'Dùng đạo hàm trong chuyển động.', 'equation', 'text']
] as const;

export const g11MathModule9PracticeBlueprints: QuestionTypePracticeBlueprint[] =
  blueprints.map(blueprint => ({
    questionTypeId: `math11-qt${blueprint[0]}`,
    subTypes: [
      {
        id: `math11-qt${blueprint[0]}-st-${blueprint[1]}`,
        name: blueprint[2],
        example: blueprint[3],
        targetQuestionCount: 6
      },
      {
        id: `math11-qt${blueprint[0]}-st-${blueprint[4]}`,
        name: blueprint[5],
        example: blueprint[6],
        targetQuestionCount: 6
      }
    ],
    coverage: {
      targetQuestionCount: 12,
      minimumQuestionsPerSubType: 3,
      requiredPracticeRoles: ['guided', 'near_transfer', 'misconception_check'],
      requiredRepresentations: [blueprint[7], blueprint[8]],
      masteryHoldoutCount: 2
    }
  }));
