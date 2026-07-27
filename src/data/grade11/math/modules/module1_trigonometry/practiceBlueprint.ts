import type { QuestionTypePracticeBlueprint } from '@/types';

const coverageByQuestionType = {
  'math11-qt01': {
    requiredPracticeRoles: ['guided', 'near_transfer', 'misconception_check'] as const,
    requiredRepresentations: ['diagram', 'equation'] as const
  },
  'math11-qt02': {
    requiredPracticeRoles: ['guided', 'near_transfer', 'misconception_check'] as const,
    requiredRepresentations: ['equation', 'text'] as const
  },
  'math11-qt03': {
    requiredPracticeRoles: ['guided', 'representation_switch', 'near_transfer'] as const,
    requiredRepresentations: ['graph', 'equation'] as const
  },
  'math11-qt04': {
    requiredPracticeRoles: ['guided', 'near_transfer', 'misconception_check'] as const,
    requiredRepresentations: ['equation', 'graph'] as const
  }
};

const blueprint = (
  questionTypeId: keyof typeof coverageByQuestionType,
  subTypes: QuestionTypePracticeBlueprint['subTypes']
): QuestionTypePracticeBlueprint => ({
  questionTypeId,
  subTypes,
  coverage: {
    targetQuestionCount: 12,
    minimumQuestionsPerSubType: 3,
    requiredPracticeRoles: [...coverageByQuestionType[questionTypeId].requiredPracticeRoles],
    requiredRepresentations: [...coverageByQuestionType[questionTypeId].requiredRepresentations],
    masteryHoldoutCount: 2
  }
});

export const g11MathModule1PracticeBlueprints: QuestionTypePracticeBlueprint[] = [
  blueprint('math11-qt01', [
    { id: 'math11-qt01-st-angle', name: 'Góc cùng tia cuối và đường tròn lượng giác', example: 'Rút gọn số đo góc theo modulo $2\\pi$ và xác định góc phần tư.', targetQuestionCount: 6 },
    { id: 'math11-qt01-st-values', name: 'Tính giá trị lượng giác', example: 'Biết $\\sin\\alpha$ và khoảng chứa $\\alpha$, tính $\\cos\\alpha$.', targetQuestionCount: 6 }
  ]),
  blueprint('math11-qt02', [
    { id: 'math11-qt02-st-addition', name: 'Công thức cộng và góc nhân đôi', example: 'Tính $\\cos 75^\\circ$ hoặc rút gọn biểu thức chứa $\\sin 2x$.', targetQuestionCount: 6 },
    { id: 'math11-qt02-st-product-sum', name: 'Biến đổi tích–tổng', example: 'Biến đổi $\\cos a+\\cos b$ thành tích.', targetQuestionCount: 6 }
  ]),
  blueprint('math11-qt03', [
    { id: 'math11-qt03-st-properties', name: 'Miền xác định và tính chất hàm', example: 'Tìm tập xác định hoặc chu kì của một hàm lượng giác.', targetQuestionCount: 6 },
    { id: 'math11-qt03-st-graph', name: 'Đọc và nhận dạng đồ thị', example: 'Nhận dạng hàm số từ đồ thị trên một chu kì.', targetQuestionCount: 6 }
  ]),
  blueprint('math11-qt04', [
    { id: 'math11-qt04-st-basic', name: 'Bốn phương trình lượng giác cơ bản', example: 'Giải $\\sin x=\\frac12$ hoặc $\\tan x=1$.', targetQuestionCount: 6 },
    { id: 'math11-qt04-st-transformed', name: 'Phương trình đưa trực tiếp về dạng cơ bản', example: 'Giải $\\cos(2x)=\\cos\\frac{\\pi}{3}$.', targetQuestionCount: 6 }
  ])
];
