import type { CourseQuestionType } from '@/data/schema';

export const g11MathModule1QuestionTypes: CourseQuestionType[] = [
  {
    id: 'math11-qt01',
    topicId: 'math11-t01',
    courseId: 'grade11:math',
    moduleId: 'math11-m1',
    lessonIds: ['math11-kntt-l1'],
    outcomeIds: ['out-math11-m1-01'],
    name: 'Dạng 1: Góc lượng giác và giá trị lượng giác',
    slug: 'goc-va-gia-tri-luong-giac',
    description: 'Biểu diễn góc lượng giác, xác định góc cùng tia cuối và tính giá trị lượng giác theo góc phần tư.',
    difficulty: 'easy',
    examFrequency: 'high',
    recognitionSigns: [
      'Đề xuất hiện số đo radian, góc cùng tia cuối hoặc hệ thức Chasles.',
      'Đề cho một giá trị lượng giác và khoảng chứa góc để tính giá trị còn lại.'
    ],
    solvingSteps: [
      'Chuẩn hóa số đo góc và xác định vị trí tia cuối trên đường tròn lượng giác.',
      'Chọn hệ thức lượng giác phù hợp và xác định dấu theo góc phần tư.',
      'Tính toán rồi kiểm tra miền giá trị của kết quả.'
    ],
    commonMistakes: [
      'Bỏ qua dấu của giá trị lượng giác theo góc phần tư.',
      'Nhầm chu kì $2\\pi$ của sin, cos với chu kì $\\pi$ của tan, cot.'
    ],
    subTypes: [
      {
        id: 'math11-qt01-st-angle',
        name: 'Góc cùng tia cuối và đường tròn lượng giác',
        example: 'Rút gọn số đo góc theo modulo $2\\pi$ và xác định góc phần tư.',
        targetQuestionCount: 12
      },
      {
        id: 'math11-qt01-st-values',
        name: 'Tính giá trị lượng giác',
        example: 'Biết $\\sin\\alpha$ và khoảng chứa $\\alpha$, tính $\\cos\\alpha$.',
        targetQuestionCount: 12
      }
    ],
    practiceCoverage: {
      targetQuestionCount: 24,
      minimumQuestionsPerSubType: 6,
      requiredPracticeRoles: ['guided', 'near_transfer', 'misconception_check', 'far_transfer'],
      requiredRepresentations: ['diagram', 'equation'],
      masteryHoldoutCount: 4
    }
  },
  {
    id: 'math11-qt02',
    topicId: 'math11-t01',
    courseId: 'grade11:math',
    moduleId: 'math11-m1',
    lessonIds: ['math11-kntt-l2'],
    outcomeIds: ['out-math11-m1-02'],
    name: 'Dạng 2: Biến đổi biểu thức lượng giác',
    slug: 'bien-doi-bieu-thuc-luong-giac',
    description: 'Sử dụng công thức cộng, nhân đôi, tích thành tổng và tổng thành tích để tính hoặc rút gọn.',
    difficulty: 'medium',
    examFrequency: 'high',
    recognitionSigns: [
      'Biểu thức chứa tổng hoặc hiệu hai góc.',
      'Đề yêu cầu rút gọn tích, tổng hoặc tính giá trị chính xác.'
    ],
    solvingSteps: [
      'Nhận dạng cấu trúc biểu thức và chọn đúng nhóm công thức.',
      'Biến đổi từng phần, giữ nguyên điều kiện và dấu.',
      'Thu gọn kết quả rồi kiểm tra bằng một giá trị góc đặc biệt khi có thể.'
    ],
    commonMistakes: [
      'Sai dấu trong công thức $\\cos(a+b)$.',
      'Áp dụng công thức nhân đôi nhưng quên hệ số 2.'
    ],
    subTypes: [
      {
        id: 'math11-qt02-st-addition',
        name: 'Công thức cộng và góc nhân đôi',
        example: 'Tính $\\cos 75^\\circ$ hoặc rút gọn biểu thức chứa $\\sin 2x$.',
        targetQuestionCount: 12
      },
      {
        id: 'math11-qt02-st-product-sum',
        name: 'Biến đổi tích–tổng',
        example: 'Biến đổi $\\cos a+\\cos b$ thành tích.',
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
    id: 'math11-qt03',
    topicId: 'math11-t01',
    courseId: 'grade11:math',
    moduleId: 'math11-m1',
    lessonIds: ['math11-kntt-l3'],
    outcomeIds: ['out-math11-m1-03'],
    name: 'Dạng 3: Hàm số lượng giác và đồ thị',
    slug: 'ham-so-luong-giac-va-do-thi',
    description: 'Xác định tập xác định, tập giá trị, chu kì, tính chẵn lẻ, đơn điệu và đọc đồ thị lượng giác.',
    difficulty: 'medium',
    examFrequency: 'high',
    recognitionSigns: [
      'Đề hỏi tính chất của $y=\\sin x$, $y=\\cos x$, $y=\\tan x$ hoặc $y=\\cot x$.',
      'Đề cho đồ thị tuần hoàn hoặc yêu cầu nhận dạng đồ thị.'
    ],
    solvingSteps: [
      'Xác định hàm lượng giác và điều kiện xác định.',
      'Dùng đường tròn lượng giác hoặc đồ thị chuẩn để suy ra tính chất.',
      'Đối chiếu chu kì, tập giá trị và các điểm đặc biệt để kết luận.'
    ],
    commonMistakes: [
      'Cho rằng $\\tan x$ có tập giá trị bị chặn.',
      'Nhầm $\\sin x$ là hàm chẵn và $\\cos x$ là hàm lẻ.'
    ],
    subTypes: [
      {
        id: 'math11-qt03-st-properties',
        name: 'Miền xác định và tính chất hàm',
        example: 'Tìm tập xác định hoặc chu kì của một hàm lượng giác.',
        targetQuestionCount: 12
      },
      {
        id: 'math11-qt03-st-graph',
        name: 'Đọc và nhận dạng đồ thị',
        example: 'Nhận dạng hàm số từ đồ thị trên một chu kì.',
        targetQuestionCount: 12
      }
    ],
    practiceCoverage: {
      targetQuestionCount: 24,
      minimumQuestionsPerSubType: 6,
      requiredPracticeRoles: ['guided', 'representation_switch', 'near_transfer', 'far_transfer'],
      requiredRepresentations: ['graph', 'equation'],
      masteryHoldoutCount: 4
    }
  },
  {
    id: 'math11-qt04',
    topicId: 'math11-t01',
    courseId: 'grade11:math',
    moduleId: 'math11-m1',
    lessonIds: ['math11-kntt-l4'],
    outcomeIds: ['out-math11-m1-04'],
    name: 'Dạng 4: Phương trình lượng giác cơ bản',
    slug: 'phuong-trinh-luong-giac-co-ban',
    description: 'Giải phương trình sin, cos, tan, cot cơ bản và phương trình đưa trực tiếp về dạng cơ bản.',
    difficulty: 'medium',
    examFrequency: 'high',
    recognitionSigns: [
      'Phương trình có thể đưa về $\\sin u=m$, $\\cos u=m$, $\\tan u=m$ hoặc $\\cot u=m$.',
      'Đề yêu cầu nghiệm tổng quát, nghiệm trên khoảng hoặc nghiệm gần đúng.'
    ],
    solvingSteps: [
      'Kiểm tra điều kiện tồn tại của phương trình và xác định hàm lượng giác chính.',
      'Đưa phương trình về dạng cơ bản rồi áp dụng đúng công thức nghiệm.',
      'Giải biến trung gian, lọc nghiệm theo miền và kiểm tra lại.'
    ],
    commonMistakes: [
      'Thiếu một họ nghiệm của phương trình sin hoặc cos.',
      'Quên chia hệ số của biến khi giải phương trình dạng $\\sin(ax+b)=m$.'
    ],
    subTypes: [
      {
        id: 'math11-qt04-st-basic',
        name: 'Bốn phương trình lượng giác cơ bản',
        example: 'Giải $\\sin x=\\frac12$ hoặc $\\tan x=1$.',
        targetQuestionCount: 12
      },
      {
        id: 'math11-qt04-st-transformed',
        name: 'Phương trình đưa trực tiếp về dạng cơ bản',
        example: 'Giải $\\cos(2x)=\\cos\\frac{\\pi}{3}$.',
        targetQuestionCount: 12
      }
    ],
    practiceCoverage: {
      targetQuestionCount: 24,
      minimumQuestionsPerSubType: 6,
      requiredPracticeRoles: ['guided', 'near_transfer', 'misconception_check', 'far_transfer'],
      requiredRepresentations: ['equation', 'graph'],
      masteryHoldoutCount: 4
    }
  }
];
