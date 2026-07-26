import type { CourseSolution } from '@/data/schema';

export const g11PhysicsModule1Solutions: CourseSolution[] = [
  {
    id: 'phy11-s001',
    questionId: 'phy11-q001',
    courseId: 'grade11:physics',
    moduleId: 'phy11-m1',
    recognition: 'Nhận dạng phương trình dạng $x = A \\cos(\\omega t + \\varphi)$.',
    detailedSteps: [
      {
        order: 1,
        title: 'Đơn dạng phương trình',
        explanation: 'Phương trình dao động điều hòa dạng chuẩn:\n$$x = A \\cos(\\omega t + \\varphi)$$'
      },
      {
        order: 2,
        title: 'Đối chiếu các đại lượng',
        explanation: 'Đối chiếu phương trình cho trước $x = 5 \\cos\\left(10\\pi t + \\frac{\\pi}{3}\\right)$ (cm):\n- Biên độ: $A = 5\\text{ cm}$\n- Tần số góc: $\\omega = 10\\pi\\text{ rad/s}$\n- Pha ban đầu: $\\varphi = \\frac{\\pi}{3}\\text{ rad}$'
      }
    ],
    finalAnswer: 'A',
    commonMistakes: [
      'Nhầm tần số góc $\\omega$ với pha ban đầu $\\varphi$.'
    ],
    reviewSuggestions: [
      'Ôn tập cách chuyển đổi phương trình dạng $-\\cos$ hay $\\sin$ về $+\\cos$ bằng công thức lượng giác.',
      'Ghi nhớ đơn vị chuẩn của biên độ (cm/m) và tần số góc (rad/s).'
    ]
  },
  {
    id: 'phy11-s002',
    questionId: 'phy11-q002',
    courseId: 'grade11:physics',
    moduleId: 'phy11-m1',
    recognition: 'Tính vận tốc cực đại từ biên độ và tần số góc.',
    detailedSteps: [
      {
        order: 1,
        title: 'Áp dụng công thức',
        explanation: 'Công thức vận tốc cực đại khi qua VTCB:\n$$v_{\\max} = \\omega A$$'
      },
      {
        order: 2,
        title: 'Thay số',
        explanation: 'Thay $A = 6\\text{ cm}$ và $\\omega = 10\\text{ rad/s}$:\n$$v_{\\max} = 10 \\times 6 = 60\\text{ cm/s}$$'
      }
    ],
    finalAnswer: 'A',
    commonMistakes: [
      'Nhầm $v_{\\max} = \\omega A$ với $a_{\\max} = \\omega^2 A$.'
    ],
    reviewSuggestions: [
      'Phân biệt vận tốc cực đại $v_{\\max} = \\omega A$ tại VTCB và gia tốc cực đại $a_{\\max} = \\omega^2 A$ tại vị trí biên.'
    ]
  }
];
