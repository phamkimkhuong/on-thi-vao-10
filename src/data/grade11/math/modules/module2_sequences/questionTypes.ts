import type { CourseQuestionType } from '@/data/schema';

export const g11MathModule2QuestionTypes: CourseQuestionType[] = [
  {
    id: 'math11-qt05',
    topicId: 'math11-t02',
    courseId: 'grade11:math',
    moduleId: 'math11-m2',
    lessonIds: ['math11-kntt-l5'],
    outcomeIds: ['out-math11-m2-01'],
    name: 'Dạng 5: Dãy số và tính chất',
    slug: 'day-so-va-tinh-chat',
    description: 'Tìm số hạng từ công thức hoặc truy hồi, biểu diễn dãy và xét tính tăng, giảm, bị chặn.',
    difficulty: 'medium',
    examFrequency: 'high',
    recognitionSigns: [
      'Đề cho $u_n$, bảng số hạng hoặc quy tắc xác định $u_{n+1}$ từ $u_n$.',
      'Đề hỏi số hạng, chỉ số, tính tăng giảm hoặc cận của dãy.'
    ],
    solvingSteps: [
      'Xác định cách cho dãy và miền chỉ số.',
      'Thay chỉ số hoặc tính lần lượt theo hệ thức truy hồi.',
      'Khi xét đơn điệu, phân tích dấu của $u_{n+1}-u_n$ hoặc tỉ số phù hợp.'
    ],
    commonMistakes: [
      'Nhầm chỉ số $n$ với giá trị số hạng $u_n$.',
      'Kết luận đơn điệu chỉ từ vài số hạng đầu.'
    ],
    subTypes: [
      {
        id: 'math11-qt05-st-explicit',
        name: 'Dãy cho bởi liệt kê hoặc công thức tổng quát',
        example: 'Với $u_n=2n-1$, tính $u_5$ hoặc tìm chỉ số của một số hạng.',
        targetQuestionCount: 12
      },
      {
        id: 'math11-qt05-st-recursive',
        name: 'Dãy truy hồi và tính chất',
        example: 'Tính các số hạng đầu từ hệ thức truy hồi hoặc xét dấu $u_{n+1}-u_n$.',
        targetQuestionCount: 12
      }
    ],
    practiceCoverage: {
      targetQuestionCount: 24,
      minimumQuestionsPerSubType: 6,
      requiredPracticeRoles: ['guided', 'near_transfer', 'misconception_check', 'far_transfer'],
      requiredRepresentations: ['table', 'equation'],
      masteryHoldoutCount: 4
    }
  },
  {
    id: 'math11-qt06',
    topicId: 'math11-t02',
    courseId: 'grade11:math',
    moduleId: 'math11-m2',
    lessonIds: ['math11-kntt-l6'],
    outcomeIds: ['out-math11-m2-02'],
    name: 'Dạng 6: Cấp số cộng',
    slug: 'cap-so-cong',
    description: 'Nhận biết và vận dụng công sai, số hạng tổng quát, tính chất trung bình cộng và tổng hữu hạn.',
    difficulty: 'medium',
    examFrequency: 'high',
    recognitionSigns: [
      'Hiệu hai số hạng liên tiếp không đổi.',
      'Tình huống thực tế tăng hoặc giảm một lượng cố định sau mỗi bước.'
    ],
    solvingSteps: [
      'Xác định $u_1$, công sai $d$ và đại lượng cần tìm.',
      'Chọn công thức $u_n=u_1+(n-1)d$ hoặc công thức tổng.',
      'Giải phương trình theo chỉ số rồi kiểm tra chỉ số nguyên dương.'
    ],
    commonMistakes: [
      'Viết $nd$ thay cho $(n-1)d$.',
      'Nhầm công thức tổng cấp số cộng với tổng cấp số nhân.'
    ],
    subTypes: [
      {
        id: 'math11-qt06-st-term',
        name: 'Công sai và số hạng tổng quát',
        example: 'Tìm $u_n$, $d$ hoặc vị trí của một số hạng.',
        targetQuestionCount: 12
      },
      {
        id: 'math11-qt06-st-sum',
        name: 'Tổng hữu hạn và bài toán thực tế',
        example: 'Tính $S_n$ hoặc mô hình số ghế tăng đều theo hàng.',
        targetQuestionCount: 12
      }
    ],
    practiceCoverage: {
      targetQuestionCount: 24,
      minimumQuestionsPerSubType: 6,
      requiredPracticeRoles: ['guided', 'near_transfer', 'misconception_check', 'far_transfer'],
      requiredRepresentations: ['equation', 'text'],
      masteryHoldoutCount: 4
    }
  },
  {
    id: 'math11-qt07',
    topicId: 'math11-t02',
    courseId: 'grade11:math',
    moduleId: 'math11-m2',
    lessonIds: ['math11-kntt-l7'],
    outcomeIds: ['out-math11-m2-03'],
    name: 'Dạng 7: Cấp số nhân',
    slug: 'cap-so-nhan',
    description: 'Nhận biết và vận dụng công bội, số hạng tổng quát, tính chất trung bình nhân và tổng hữu hạn.',
    difficulty: 'medium',
    examFrequency: 'high',
    recognitionSigns: [
      'Tỉ số hai số hạng liên tiếp không đổi khi số hạng trước khác 0.',
      'Tình huống thực tế tăng hoặc giảm theo cùng một tỉ lệ sau mỗi chu kì.'
    ],
    solvingSteps: [
      'Xác định $u_1$, công bội $q$ và số lần nhân.',
      'Dùng $u_n=u_1q^{n-1}$ hoặc công thức tổng phù hợp.',
      'Kiểm tra trường hợp $q=1$, dấu của $q$ và ý nghĩa thực tế của kết quả.'
    ],
    commonMistakes: [
      'Dùng số mũ $n$ thay vì $n-1$.',
      'Cộng tỉ lệ phần trăm tuyến tính thay vì lũy thừa theo số chu kì.'
    ],
    subTypes: [
      {
        id: 'math11-qt07-st-term',
        name: 'Công bội và số hạng tổng quát',
        example: 'Tìm $u_n$, $q$ hoặc vị trí của một số hạng.',
        targetQuestionCount: 12
      },
      {
        id: 'math11-qt07-st-sum',
        name: 'Tổng hữu hạn và mô hình tăng trưởng',
        example: 'Tính $S_n$ hoặc mô hình số lượng tăng theo cùng tỉ lệ.',
        targetQuestionCount: 12
      }
    ],
    practiceCoverage: {
      targetQuestionCount: 24,
      minimumQuestionsPerSubType: 6,
      requiredPracticeRoles: ['guided', 'near_transfer', 'misconception_check', 'far_transfer'],
      requiredRepresentations: ['equation', 'text'],
      masteryHoldoutCount: 4
    }
  }
];
