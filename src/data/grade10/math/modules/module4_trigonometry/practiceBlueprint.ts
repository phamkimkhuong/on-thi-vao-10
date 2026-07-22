import type { QuestionTypePracticeBlueprint, QuestionTypePracticeCoverage } from '@/types';

const standardCoverage: Omit<QuestionTypePracticeCoverage, 'targetQuestionCount' | 'requiredRepresentations'> = {
  minimumQuestionsPerSubType: 12,
  requiredPracticeRoles: ['guided', 'near_transfer', 'representation_switch', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'],
  masteryHoldoutCount: 2
};

export const g10MathModule4PracticeBlueprints: QuestionTypePracticeBlueprint[] = [{
  questionTypeId: 'math10-qt6',
  subTypes: [
    { id: 'math10-qt6-st1', name: 'Tính cạnh, góc, diện tích và bán kính', example: 'Chọn định lí cosin, sin hoặc công thức diện tích theo dữ kiện.', recognitionSigns: ['Đề cho các cạnh, góc và hỏi một đại lượng còn lại.', 'Cần nhận ra công thức dùng trực tiếp ít ẩn nhất.'], targetQuestionCount: 12 },
    { id: 'math10-qt6-st2', name: 'Giải tam giác', example: 'Xác định toàn bộ cạnh và góc còn thiếu từ bộ dữ kiện đủ.', recognitionSigns: ['Đề dùng cụm “giải tam giác” hoặc yêu cầu nhiều yếu tố.', 'Cần kiểm tra tổng ba góc và khả năng có nhiều nghiệm.'], targetQuestionCount: 12 },
    { id: 'math10-qt6-st3', name: 'Đo đạc và chuyển động thực tế', example: 'Dựng tam giác từ góc quan sát, phương chuyển động hoặc khoảng cách chuẩn.', recognitionSigns: ['Dữ kiện nằm trong bối cảnh đo chiều cao, khoảng cách hoặc chuyển động.', 'Bước khó nhất là mô hình hóa đúng tam giác và cặp cạnh–góc đối diện.'], targetQuestionCount: 12 }
  ],
  coverage: { ...standardCoverage, targetQuestionCount: 36, requiredRepresentations: ['text', 'equation', 'diagram', 'table'] }
}, {
  questionTypeId: 'math10-qt19',
  subTypes: [
    {
      id: 'math10-qt19-st1',
      name: 'Góc đặc biệt và dấu của giá trị lượng giác',
      example: 'Tính giá trị lượng giác của góc đặc biệt hoặc xác định dấu theo miền góc.',
      recognitionSigns: ['Đề cho trực tiếp một góc từ 0° đến 180°.', 'Cần dùng bảng giá trị đặc biệt và dấu của sin, cos, tan.'],
      targetQuestionCount: 12
    },
    {
      id: 'math10-qt19-st2',
      name: 'Góc bù và hệ thức lượng giác cơ bản',
      example: 'Biến đổi góc bù hoặc suy ra giá trị còn lại từ sin²α + cos²α = 1.',
      recognitionSigns: ['Xuất hiện hai góc có tổng bằng 180°.', 'Đề cho một giá trị lượng giác và miền của góc để tìm giá trị khác.'],
      targetQuestionCount: 12
    },
    {
      id: 'math10-qt19-st3',
      name: 'Xác định góc và suy luận từ một giá trị lượng giác',
      example: 'Tìm góc thỏa mãn giá trị lượng giác hoặc tính biểu thức nhiều bước.',
      recognitionSigns: ['Ẩn số nằm trong góc hoặc biểu thức lượng giác.', 'Phải kết hợp giá trị đặc biệt, dấu và điều kiện miền góc để chọn nghiệm.'],
      targetQuestionCount: 12
    }
  ],
  coverage: { ...standardCoverage, targetQuestionCount: 36, requiredRepresentations: ['text', 'equation', 'diagram', 'table'] }
}];
