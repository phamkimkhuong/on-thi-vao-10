import type { QuestionTypePracticeBlueprint, QuestionTypePracticeCoverage } from '@/types';

const standardCoverage: Omit<QuestionTypePracticeCoverage, 'targetQuestionCount' | 'requiredRepresentations'> = {
  minimumQuestionsPerSubType: 12,
  requiredPracticeRoles: ['guided', 'near_transfer', 'representation_switch', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'],
  masteryHoldoutCount: 2
};

export const g10MathModule1PracticeBlueprints: QuestionTypePracticeBlueprint[] = [
  {
    questionTypeId: 'math10-qt1',
    subTypes: [
      { id: 'math10-qt1-st1', name: 'Phép giao của các tập hợp', example: 'Xác định phần chung và kiểm tra chính xác hai đầu mút.', recognitionSigns: ['Đề xuất hiện kí hiệu giao hoặc yêu cầu phần tử thuộc đồng thời nhiều tập.', 'Cần đối chiếu điều kiện của từng đầu mút.'], targetQuestionCount: 12 },
      { id: 'math10-qt1-st2', name: 'Phép hợp của các tập hợp', example: 'Ghép toàn bộ miền thuộc ít nhất một tập và rút gọn các khoảng nối nhau.', recognitionSigns: ['Đề xuất hiện kí hiệu hợp hoặc cụm “thuộc A hoặc B”.', 'Các khoảng giao hay chạm nhau có thể gộp.'], targetQuestionCount: 12 },
      { id: 'math10-qt1-st3', name: 'Phép hiệu và phép toán kết hợp', example: 'Giữ phần thuộc tập đứng trước rồi loại phần thuộc tập đứng sau.', recognitionSigns: ['Thứ tự A\\B và B\\A tạo kết quả khác nhau.', 'Đề có nhiều phép toán cần thực hiện theo ngoặc.'], targetQuestionCount: 12 },
      { id: 'math10-qt1-st4', name: 'Phần bù trong tập nền', example: 'Lấy toàn bộ tập nền rồi loại các phần tử thuộc tập đã cho.', recognitionSigns: ['Đề nêu rõ tập nền hoặc kí hiệu phần bù.', 'Đầu mút bị loại khỏi A sẽ được giữ trong phần bù và ngược lại.'], targetQuestionCount: 12 },
      { id: 'math10-qt1-st5', name: 'Đếm phần tử bằng nguyên lí bao hàm–loại trừ', example: 'Đếm phần tử thuộc hợp rồi suy ra phần còn lại trong tập hữu hạn.', recognitionSigns: ['Đề hỏi số phần tử thay vì viết khoảng.', 'Hai điều kiện có phần giao nên không được cộng trực tiếp.'], targetQuestionCount: 12 }
    ],
    coverage: { ...standardCoverage, targetQuestionCount: 60, requiredRepresentations: ['text', 'equation', 'diagram'] }
  },
  {
    questionTypeId: 'math10-qt2',
    subTypes: [
      { id: 'math10-qt2-st1', name: 'Tham số để giao khác rỗng', example: 'So sánh các đầu mút để hai khoảng có ít nhất một điểm chung.', recognitionSigns: ['Đề có tham số trong đầu mút và điều kiện giao khác rỗng.', 'Phải xét dấu ngoặc khi hai đầu mút trùng nhau.'], targetQuestionCount: 12 },
      { id: 'math10-qt2-st2', name: 'Tham số để có quan hệ tập con', example: 'Ép đầu trái và đầu phải của tập con nằm trong tập chứa.', recognitionSigns: ['Đề có kí hiệu tập con hoặc cụm “mọi phần tử của A đều thuộc B”.', 'Cần kiểm tra thêm tập phụ thuộc tham số có khác rỗng hay không.'], targetQuestionCount: 12 },
      { id: 'math10-qt2-st3', name: 'Tham số để hai tập rời nhau', example: 'Tách hai khả năng: A nằm hoàn toàn bên trái hoặc hoàn toàn bên phải B.', recognitionSigns: ['Đề có điều kiện giao bằng rỗng.', 'Kết quả thường là hợp của hai miền tham số.'], targetQuestionCount: 12 }
    ],
    coverage: { ...standardCoverage, targetQuestionCount: 36, requiredRepresentations: ['text', 'equation', 'diagram'] }
  }
];
