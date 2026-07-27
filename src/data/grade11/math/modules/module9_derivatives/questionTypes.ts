import type { CourseQuestionType } from '@/data/schema';

const specifications = [
  {
    number: 31,
    name: 'Dạng 31: Định nghĩa và ý nghĩa của đạo hàm',
    description:
      'Tính đạo hàm bằng định nghĩa; xác định hệ số góc, tiếp tuyến và tốc độ biến thiên tức thời.',
    subTypes: [
      ['definition', 'Định nghĩa và sự tồn tại', 'Dùng giới hạn tỉ số biến thiên.'],
      ['meaning', 'Ý nghĩa và tiếp tuyến', 'Hệ số góc, tiếp tuyến, vận tốc tức thời và số e.']
    ],
    representations: ['equation', 'text']
  },
  {
    number: 32,
    name: 'Dạng 32: Các quy tắc tính đạo hàm',
    description:
      'Tính đạo hàm của hàm số sơ cấp và vận dụng quy tắc tổng, tích, thương, hàm hợp.',
    subTypes: [
      ['elementary', 'Đạo hàm hàm sơ cấp', 'Đa thức, căn thức, lượng giác, mũ và lôgarit.'],
      ['rules', 'Quy tắc và hàm hợp', 'Tổng, hiệu, tích, thương và hàm hợp.']
    ],
    representations: ['equation', 'text']
  },
  {
    number: 33,
    name: 'Dạng 33: Đạo hàm cấp hai',
    description:
      'Tính đạo hàm cấp hai và giải thích ý nghĩa cơ học qua vận tốc, gia tốc.',
    subTypes: [
      ['second', 'Tính đạo hàm cấp hai', 'Lấy đạo hàm liên tiếp hai lần.'],
      ['mechanics', 'Vận tốc và gia tốc', 'Dùng $v=s\'$ và $a=s\'\'=v\'$.']
    ],
    representations: ['equation', 'text']
  }
] as const;

export const g11MathModule9QuestionTypes: CourseQuestionType[] = specifications.map(
  specification => ({
    id: `math11-qt${specification.number}`,
    topicId: 'math11-t09',
    courseId: 'grade11:math',
    moduleId: 'math11-m9',
    lessonIds: [`math11-kntt-l${specification.number}`],
    outcomeIds: [`out-math11-m9-0${specification.number - 30}`],
    name: specification.name,
    slug: `dao-ham-${specification.number}`,
    description: specification.description,
    difficulty: 'medium',
    examFrequency: 'high',
    recognitionSigns: [
      'Đề yêu cầu tính tốc độ biến thiên, tiếp tuyến hoặc đạo hàm của một biểu thức.',
      'Cần xác định đúng hàm số, điểm lấy đạo hàm và điều kiện xác định.'
    ],
    solvingSteps: [
      'Xác định công thức hoặc định nghĩa đạo hàm phù hợp.',
      'Tính cẩn thận, đặc biệt với tích, thương và hàm hợp.',
      'Rút gọn kết quả, kiểm tra điều kiện và diễn giải theo ngữ cảnh.'
    ],
    commonMistakes: [
      'Bỏ giới hạn trong định nghĩa hoặc nhầm đạo hàm với tỉ số biến thiên.',
      'Quên đạo hàm hàm bên trong hay nhầm đạo hàm cấp hai với bình phương.'
    ],
    subTypes: specification.subTypes.map(subType => ({
      id: `math11-qt${specification.number}-st-${subType[0]}`,
      name: subType[1],
      example: subType[2],
      targetQuestionCount: 6
    })),
    practiceCoverage: {
      targetQuestionCount: 12,
      minimumQuestionsPerSubType: 3,
      requiredPracticeRoles: ['guided', 'near_transfer', 'misconception_check'],
      requiredRepresentations: [...specification.representations],
      masteryHoldoutCount: 2
    }
  })
);
