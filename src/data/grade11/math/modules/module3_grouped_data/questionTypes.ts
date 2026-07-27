import type { CourseQuestionType } from '@/data/schema';

export const g11MathModule3QuestionTypes: CourseQuestionType[] = [
  {
    id: 'math11-qt08',
    topicId: 'math11-t03',
    courseId: 'grade11:math',
    moduleId: 'math11-m3',
    lessonIds: ['math11-kntt-l8'],
    outcomeIds: ['out-math11-m3-01'],
    name: 'Dạng 8: Lập và đọc bảng số liệu ghép nhóm',
    slug: 'lap-doc-bang-ghep-nhom',
    description: 'Đọc khoảng nhóm, tần số, tần số tương đối, độ dài nhóm và giá trị đại diện; ghép nhóm dữ liệu thô.',
    difficulty: 'easy',
    examFrequency: 'high',
    recognitionSigns: ['Dữ liệu được chia thành các khoảng dạng $[a;b)$.', 'Đề yêu cầu lập bảng hoặc đọc thông tin của một nhóm.'],
    solvingSteps: ['Xác định quy ước đầu mút và độ dài mỗi nhóm.', 'Đếm tần số hoặc cộng tổng tần số.', 'Dùng trung điểm nhóm làm giá trị đại diện khi cần.'],
    commonMistakes: ['Đếm giá trị ở đầu mút phải vào sai nhóm.', 'Nhầm tần số với tần số tương đối.'],
    subTypes: [
      { id: 'math11-qt08-st-read', name: 'Đọc bảng ghép nhóm', example: 'Tìm cỡ mẫu, nhóm có tần số lớn nhất hoặc tần số tương đối.', targetQuestionCount: 6 },
      { id: 'math11-qt08-st-group', name: 'Ghép nhóm và giá trị đại diện', example: 'Xếp dữ liệu vào nhóm và tính trung điểm nhóm.', targetQuestionCount: 6 }
    ],
    practiceCoverage: {
      targetQuestionCount: 12,
      minimumQuestionsPerSubType: 3,
      requiredPracticeRoles: ['guided', 'near_transfer', 'misconception_check'],
      requiredRepresentations: ['table', 'text'],
      masteryHoldoutCount: 2
    }
  },
  {
    id: 'math11-qt09',
    topicId: 'math11-t03',
    courseId: 'grade11:math',
    moduleId: 'math11-m3',
    lessonIds: ['math11-kntt-l9'],
    outcomeIds: ['out-math11-m3-02'],
    name: 'Dạng 9: Các số đặc trưng của mẫu ghép nhóm',
    slug: 'so-dac-trung-mau-ghep-nhom',
    description: 'Ước lượng số trung bình, trung vị, tứ phân vị và mốt từ bảng tần số ghép nhóm.',
    difficulty: 'medium',
    examFrequency: 'high',
    recognitionSigns: ['Đề cho khoảng nhóm và tần số.', 'Đề hỏi xu thế trung tâm hoặc vị trí chia mẫu.'],
    solvingSteps: ['Tính cỡ mẫu, giá trị đại diện và tần số tích lũy.', 'Xác định đúng nhóm chứa đại lượng cần tìm.', 'Thay vào công thức nội suy và giải thích kết quả là xấp xỉ.'],
    commonMistakes: ['Dùng cận trên thay cho giá trị đại diện khi tính trung bình.', 'Dùng tần số riêng thay cho tần số tích lũy để tìm nhóm trung vị.'],
    subTypes: [
      { id: 'math11-qt09-st-mean-mode', name: 'Số trung bình và mốt', example: 'Ước lượng $\\bar x$ hoặc $M_o$ từ bảng nhóm.', targetQuestionCount: 6 },
      { id: 'math11-qt09-st-median-quartile', name: 'Trung vị và tứ phân vị', example: 'Tìm nhóm chứa và nội suy $M_e,Q_1,Q_3$.', targetQuestionCount: 6 }
    ],
    practiceCoverage: {
      targetQuestionCount: 12,
      minimumQuestionsPerSubType: 3,
      requiredPracticeRoles: ['guided', 'near_transfer', 'misconception_check'],
      requiredRepresentations: ['table', 'equation'],
      masteryHoldoutCount: 2
    }
  }
];
