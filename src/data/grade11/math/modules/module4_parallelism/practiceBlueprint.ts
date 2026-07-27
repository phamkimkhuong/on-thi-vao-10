import type { QuestionTypePracticeBlueprint, QuestionRepresentationType } from '@/types';

const blueprint = (
  questionTypeId: string,
  representations: QuestionRepresentationType[],
  subTypes: QuestionTypePracticeBlueprint['subTypes']
): QuestionTypePracticeBlueprint => ({
  questionTypeId,
  subTypes,
  coverage: {
    targetQuestionCount: 24,
    minimumQuestionsPerSubType: 6,
    requiredPracticeRoles: ['guided', 'near_transfer', 'misconception_check', 'far_transfer'],
    requiredRepresentations: representations,
    masteryHoldoutCount: 4
  }
});

export const g11MathModule4PracticeBlueprints: QuestionTypePracticeBlueprint[] = [
  blueprint('math11-qt10', ['diagram', 'text'], [
    { id: 'math11-qt10-st-incidence', name: 'Quan hệ liên thuộc và xác định mặt phẳng', example: 'Chọn cách xác định mặt phẳng.', targetQuestionCount: 12 },
    { id: 'math11-qt10-st-intersection', name: 'Giao điểm và giao tuyến', example: 'Tìm giao tuyến trong hình chóp.', targetQuestionCount: 12 }
  ]),
  blueprint('math11-qt11', ['diagram', 'text'], [
    { id: 'math11-qt11-st-position', name: 'Vị trí tương đối', example: 'Phân biệt song song và chéo nhau.', targetQuestionCount: 12 },
    { id: 'math11-qt11-st-proof', name: 'Chứng minh song song', example: 'Dùng đường trung bình hoặc đường thứ ba.', targetQuestionCount: 12 }
  ]),
  blueprint('math11-qt12', ['diagram', 'text'], [
    { id: 'math11-qt12-st-condition', name: 'Điều kiện và nhận biết', example: 'Nhận biết $d\\parallel(P)$.', targetQuestionCount: 12 },
    { id: 'math11-qt12-st-application', name: 'Chứng minh và giao tuyến', example: 'Dùng mặt phẳng phụ.', targetQuestionCount: 12 }
  ]),
  blueprint('math11-qt13', ['diagram', 'equation'], [
    { id: 'math11-qt13-st-planes', name: 'Điều kiện hai mặt phẳng song song', example: 'Chứng minh hai mặt phẳng song song.', targetQuestionCount: 12 },
    { id: 'math11-qt13-st-thales', name: 'Thalès, lăng trụ và hình hộp', example: 'Tính đoạn tương ứng.', targetQuestionCount: 12 }
  ]),
  blueprint('math11-qt14', ['diagram', 'text'], [
    { id: 'math11-qt14-st-image', name: 'Ảnh và tính chất phép chiếu', example: 'Xác định ảnh qua phép chiếu.', targetQuestionCount: 12 },
    { id: 'math11-qt14-st-representation', name: 'Hình biểu diễn không gian', example: 'Chọn hình biểu diễn đúng.', targetQuestionCount: 12 }
  ])
];
