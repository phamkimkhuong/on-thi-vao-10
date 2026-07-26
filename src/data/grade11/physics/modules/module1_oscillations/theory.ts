import type { TheoryBlock } from '@/data/schema';

export const phy11Module1Theory: TheoryBlock[] = [
  {
    id: 'phy11-theory-m1-concept',
    courseId: 'grade11:physics',
    moduleId: 'phy11-m1',
    lessonIds: ['phy11-kntt-l1'],
    title: 'Khái niệm dao động và dao động điều hòa',
    content:
      'Dao động cơ là chuyển động qua lại quanh một vị trí cân bằng. Dao động điều hòa có li độ biến thiên theo hàm cosin hoặc sin của thời gian: $x = A \\cos(\\omega t + \\varphi)$.',
    orderIndex: 1,
    reviewStatus: 'draft'
  },
  {
    id: 'phy11-theory-m1-characteristics',
    courseId: 'grade11:physics',
    moduleId: 'phy11-m1',
    lessonIds: ['phy11-kntt-l2'],
    title: 'Các đại lượng đặc trưng',
    content:
      'Biên độ $A > 0$; chu kì $T = \\frac{2\\pi}{\\omega}$; tần số $f = \\frac{1}{T} = \\frac{\\omega}{2\\pi}$; pha dao động tại thời điểm $t$ là $\\omega t + \\varphi$.',
    orderIndex: 2,
    reviewStatus: 'draft'
  },
  {
    id: 'phy11-theory-m1-energy',
    courseId: 'grade11:physics',
    moduleId: 'phy11-m1',
    lessonIds: ['phy11-kntt-l5'],
    title: 'Năng lượng trong dao động điều hòa',
    content:
      'Động năng và thế năng chuyển hóa qua lại. Trong mô hình lí tưởng, cơ năng $W = \\frac{1}{2}m\\omega^2A^2$ được bảo toàn.',
    orderIndex: 3,
    reviewStatus: 'draft'
  }
];
