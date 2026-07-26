import type { CourseQuestionType } from '@/data/schema';

export const g11PhysicsModule1QuestionTypes: CourseQuestionType[] = [
  {
    id: 'phy11-qt01',
    topicId: 'phy11-t01',
    courseId: 'grade11:physics',
    moduleId: 'phy11-m1',
    lessonIds: ['phy11-kntt-l1', 'phy11-kntt-l2'],
    outcomeIds: ['out-phy11-m1-01'],
    name: 'Dạng 1: Xác định các đại lượng đặc trưng của Dao động điều hòa (A, T, f, omega, phi)',
    slug: 'dai-luong-dac-trung-dao-dong',
    description: 'Xác định biên độ A, chu kỳ T, tần số f, tần số góc omega và pha ban đầu phi từ phương trình li độ x = A*cos(omega*t + phi).',
    difficulty: 'easy',
    examFrequency: 'high',
    recognitionSigns: ['Đề cho phương trình x = A cos(omega t + phi) và yêu cầu tìm A, T, f, omega, phi.'],
    theory: [
      '**1. Phương trình li độ:**\n$$x = A \\cos(\\omega t + \\varphi)$$\nTrong đó:\n- $x$: Li độ (cm hoặc m).\n- $A$: Biên độ dao động ($A > 0$).\n- $\\omega$: Tần số góc (rad/s), $\\omega = \\frac{2\\pi}{T} = 2\\pi f$.\n- $(\\omega t + \\varphi)$: Pha dao động tại thời điểm $t$ (rad).\n- $\\varphi$: Pha ban đầu tại $t = 0$ (rad).'
    ],
    solvingSteps: [
      'Đưa phương trình về dạng chuẩn $x = A \\cos(\\omega t + \\varphi)$.',
      'Đọc trực tiếp $A$, $\\omega$, $\\varphi$ từ phương trình.',
      'Tính $T = \\frac{2\\pi}{\\omega}$ và $f = \\frac{\\omega}{2\\pi}$.'
    ],
    commonMistakes: [
      'Quên đổi hàm $-\\cos$ hoặc $\\sin$ về hàm $+\\cos$ chuẩn.',
      'Nhầm lẫn giữa pha ban đầu $\\varphi$ và pha tại thời điểm $t$ $(\\omega t + \\varphi)$.'
    ],
    subTypes: [
      {
        id: 'phy11-qt01-st-equation',
        name: 'Đọc đại lượng từ phương trình dao động',
        example: 'Xác định A, ω, φ từ x = A cos(ωt + φ).',
        targetQuestionCount: 6
      },
      {
        id: 'phy11-qt01-st-graph',
        name: 'Đọc đại lượng từ đồ thị li độ–thời gian',
        example: 'Xác định A và T từ đồ thị x–t.',
        targetQuestionCount: 6
      }
    ],
    practiceCoverage: {
      targetQuestionCount: 12,
      minimumQuestionsPerSubType: 3,
      requiredPracticeRoles: ['guided', 'near_transfer', 'misconception_check'],
      requiredRepresentations: ['equation', 'graph'],
      masteryHoldoutCount: 2
    }
  },
  {
    id: 'phy11-qt02',
    topicId: 'phy11-t01',
    courseId: 'grade11:physics',
    moduleId: 'phy11-m1',
    lessonIds: ['phy11-kntt-l3', 'phy11-kntt-l4'],
    outcomeIds: ['out-phy11-m1-02'],
    name: 'Dạng 2: Vận tốc và Gia tốc trong Dao động điều hòa',
    slug: 'van-toc-gia-toc-dao-dong',
    description: 'Tính vận tốc v = x\' và gia tốc a = v\' = -omega^2 * x, mối liên hệ v vuông pha với x và a ngược pha với x.',
    difficulty: 'medium',
    examFrequency: 'high',
    recognitionSigns: ['Đề yêu cầu tính vận tốc cực đại, gia tốc cực đại hoặc vận tốc tại vị trí bất kỳ.'],
    theory: [
      '**1. Phương trình vận tốc:**\n$$v = x\' = -\\omega A \\sin(\\omega t + \\varphi) = \\omega A \\cos\\left(\\omega t + \\varphi + \\frac{\\pi}{2}\\right)$$\n- Vận tốc cực đại: $v_{\\max} = \\omega A$ (khi qua vị trí cân bằng).\n- Vận tốc bằng 0 tại 2 vị trí biên.\n\n**2. Phương trình gia tốc:**\n$$a = v\' = -\\omega^2 A \\cos(\\omega t + \\varphi) = -\\omega^2 x$$\n- Gia tốc cực đại: $a_{\\max} = \\omega^2 A$ (tại vị trí biên âm).\n- Gia tốc luôn hướng về vị trí cân bằng.'
    ],
    solvingSteps: [
      'Viết phương trình $x(t)$, suy ra phương trình $v(t)$ và $a(t)$.',
      'Chọn hệ thức phù hợp với dữ kiện và thống nhất đơn vị.',
      'Sử dụng công thức độc lập thời gian: $A^2 = x^2 + \\frac{v^2}{\\omega^2}$ rồi kiểm tra dấu và chiều chuyển động.'
    ],
    commonMistakes: [
      'Nhầm vị trí $v_{\\max}$ và $a_{\\max}$.',
      'Quên dấu trừ trong công thức $a = -\\omega^2 x$.'
    ],
    subTypes: [
      {
        id: 'phy11-qt02-st-extrema',
        name: 'Giá trị cực đại của vận tốc và gia tốc',
        example: 'Tính vmax và amax từ A, ω.',
        targetQuestionCount: 6
      },
      {
        id: 'phy11-qt02-st-state',
        name: 'Trạng thái dao động tại một thời điểm hoặc vị trí',
        example: 'Xác định x, v, a và chiều chuyển động.',
        targetQuestionCount: 6
      }
    ],
    practiceCoverage: {
      targetQuestionCount: 12,
      minimumQuestionsPerSubType: 3,
      requiredPracticeRoles: ['guided', 'near_transfer', 'misconception_check'],
      requiredRepresentations: ['equation', 'graph'],
      masteryHoldoutCount: 2
    }
  }
];
