import type { QuestionTypePracticeBlueprint, QuestionTypePracticeCoverage } from '@/types';

const standardCoverage: Omit<QuestionTypePracticeCoverage, 'targetQuestionCount' | 'requiredRepresentations'> = {
  minimumQuestionsPerSubType: 12,
  requiredPracticeRoles: ['guided', 'near_transfer', 'representation_switch', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'],
  masteryHoldoutCount: 2
};

export const g10MathModule5PracticeBlueprints: QuestionTypePracticeBlueprint[] = [
  {
    questionTypeId: 'math10-qt5',
    subTypes: [
      { id: 'math10-qt5-st1', name: 'Biểu diễn vectơ qua hai vectơ cơ sở', example: 'Dùng quy tắc ba điểm, trung điểm và tỉ số chia đoạn để đổi về cùng gốc.', recognitionSigns: ['Đề yêu cầu biểu diễn một vectơ theo hai vectơ cho trước.', 'Các điểm thường là trung điểm, trọng tâm hoặc điểm chia đoạn.'], targetQuestionCount: 12 },
      { id: 'math10-qt5-st2', name: 'Cùng phương và thẳng hàng có tham số', example: 'So sánh các hệ số theo hai vectơ không cùng phương.', recognitionSigns: ['Đề hỏi ba điểm thẳng hàng hoặc hai vectơ cùng phương.', 'Các hệ số chứa tham số cần thỏa cùng một tỉ lệ.'], targetQuestionCount: 12 },
      { id: 'math10-qt5-st3', name: 'Tổng hợp nhiều điểm chia đoạn', example: 'Chọn gốc chung, biểu diễn từng điểm rồi lấy hiệu hai vectơ vị trí.', recognitionSigns: ['Đề có từ hai điểm phụ trở lên và nhiều tỉ số.', 'Cần tránh trừ vectơ sai thứ tự khi lập vectơ nối hai điểm.'], targetQuestionCount: 12 }
    ],
    coverage: { ...standardCoverage, targetQuestionCount: 36, requiredRepresentations: ['text', 'equation', 'diagram'] }
  },
  {
    questionTypeId: 'math10-qt7',
    subTypes: [
      { id: 'math10-qt7-st1', name: 'Tích vô hướng từ độ dài và góc', example: 'Dùng u·v=|u||v|cosα và xác định đúng góc giữa hai vectơ.', recognitionSigns: ['Đề cho độ dài và góc hoặc hình học quen thuộc.', 'Hướng của vectơ có thể khiến góc cần dùng là góc bù.'], targetQuestionCount: 12 },
      { id: 'math10-qt7-st2', name: 'Tích vô hướng bằng tọa độ', example: 'Lập tọa độ vectơ rồi tính tổng tích các thành phần.', recognitionSigns: ['Đề cho tọa độ điểm hoặc tọa độ vectơ.', 'Có thể hỏi tích vô hướng, góc hoặc điều kiện vuông góc.'], targetQuestionCount: 12 },
      { id: 'math10-qt7-st3', name: 'Ứng dụng độ dài và vuông góc', example: 'Khai triển bình phương vectơ hoặc đặt tích vô hướng bằng 0.', recognitionSigns: ['Đề hỏi độ dài của tổng/hiệu, tham số vuông góc hoặc chứng minh hình học.', 'Nên chuyển bài toán về tích vô hướng trước khi thay số.'], targetQuestionCount: 12 }
    ],
    coverage: { ...standardCoverage, targetQuestionCount: 36, requiredRepresentations: ['text', 'equation', 'diagram'] }
  }
];
