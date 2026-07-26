import type { CourseQuestion } from '@/data/schema';

export const g11PhysicsModule1Questions: CourseQuestion[] = [
  {
    id: 'phy11-q001',
    subjectId: 'physics',
    courseId: 'grade11:physics',
    moduleId: 'phy11-m1',
    lessonId: 'phy11-kntt-l2',
    topicId: 'phy11-t01',
    questionTypeId: 'phy11-qt01',
    content: 'Một vật dao động điều hòa theo phương trình $x = 5 \\cos\\left(10\\pi t + \\frac{\\pi}{3}\\right)$ (cm). Biên độ và tần số góc của dao động lần lượt là:',
    options: [
      '$A = 5\\text{ cm}, \\omega = 10\\pi\\text{ rad/s}$',
      '$A = 5\\text{ cm}, \\omega = 5\\pi\\text{ rad/s}$',
      '$A = 10\\text{ cm}, \\omega = 10\\pi\\text{ rad/s}$',
      '$A = 5\\text{ cm}, \\omega = \\frac{\\pi}{3}\\text{ rad/s}$'
    ],
    correctAnswer: 'A',
    responseType: 'single_choice',
    validatorType: 'choice',
    outcomeIds: ['out-phy11-m1-01'],
    competency: 'physical_cognition',
    cognitiveLevel: 'recognition',
    estimatedSeconds: 60,
    subTypeId: 'phy11-qt01-st-equation',
    practiceRole: 'guided',
    representationType: 'equation',
    difficulty: 'easy',
    sourceType: 'manual'
  },
  {
    id: 'phy11-q002',
    subjectId: 'physics',
    courseId: 'grade11:physics',
    moduleId: 'phy11-m1',
    lessonId: 'phy11-kntt-l3',
    topicId: 'phy11-t01',
    questionTypeId: 'phy11-qt02',
    content: 'Một vật dao động điều hòa với biên độ $A = 6\\text{ cm}$ và tần số góc $\\omega = 10\\text{ rad/s}$. Vận tốc cực đại của vật là:',
    options: [
      '$60\\text{ cm/s}$',
      '$30\\text{ cm/s}$',
      '$600\\text{ cm/s}$',
      '$6\\text{ cm/s}$'
    ],
    correctAnswer: 'A',
    responseType: 'single_choice',
    validatorType: 'choice',
    outcomeIds: ['out-phy11-m1-02'],
    competency: 'physical_cognition',
    cognitiveLevel: 'understanding',
    estimatedSeconds: 75,
    subTypeId: 'phy11-qt02-st-extrema',
    practiceRole: 'guided',
    representationType: 'equation',
    difficulty: 'easy',
    sourceType: 'manual'
  }
];
