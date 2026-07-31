import type { AssessmentBlueprint, MockExam, Question, Solution } from '@/types';
type AssessmentSpec = {
  id: string;
  blueprintId: string;
  title: string;
  kind: AssessmentBlueprint['kind'];
  semester: 1 | 2;
  seriesOrder: number;
  duration: number;
  scopeTopicIds: string[];
  topicWeights: Record<string, number>;
  outcomeIds: string[];
  questionIds: string[];
  hasTrueFalse?: boolean;
};

const createdAt = '2026-07-27T00:00:00.000Z';
const questionIds = (...numbers: number[]) =>
  numbers.map(number => `math11-assess-q${String(number).padStart(3, '0')}`);
const outcomeIds = (moduleNumber: number, count: number) =>
  Array.from(
    { length: count },
    (_, index) => `out-math11-m${moduleNumber}-${String(index + 1).padStart(2, '0')}`
  );

const moduleSpecs: AssessmentSpec[] = [
  {
    id: 'math11-exam-module-01',
    blueprintId: 'math11-blueprint-module-01',
    title: 'Kiểm tra Chương I – Hàm số và phương trình lượng giác',
    kind: 'module_checkpoint',
    semester: 1,
    seriesOrder: 1,
    duration: 30,
    scopeTopicIds: ['math11-t01'],
    topicWeights: { 'math11-t01': 1 },
    outcomeIds: outcomeIds(1, 4),
    questionIds: questionIds(1, 15, 30, 13, 21, 35, 40, 48, 626, 671)
  },
  {
    id: 'math11-exam-module-02',
    blueprintId: 'math11-blueprint-module-02',
    title: 'Kiểm tra Chương II – Dãy số, cấp số cộng và cấp số nhân',
    kind: 'module_checkpoint',
    semester: 1,
    seriesOrder: 2,
    duration: 30,
    scopeTopicIds: ['math11-t02'],
    topicWeights: { 'math11-t02': 1 },
    outcomeIds: outcomeIds(2, 3),
    questionIds: questionIds(49, 61, 73, 51, 64, 69, 76, 84, 674, 707)
  },
  {
    id: 'math11-exam-module-03',
    blueprintId: 'math11-blueprint-module-03',
    title: 'Kiểm tra Chương III – Mẫu số liệu ghép nhóm',
    kind: 'module_checkpoint',
    semester: 1,
    seriesOrder: 3,
    duration: 30,
    scopeTopicIds: ['math11-t03'],
    topicWeights: { 'math11-t03': 1 },
    outcomeIds: outcomeIds(3, 2),
    questionIds: questionIds(85, 91, 97, 88, 94, 98, 103, 108, 710, 731)
  },
  {
    id: 'math11-exam-module-04',
    blueprintId: 'math11-blueprint-module-04',
    title: 'Kiểm tra Chương IV – Quan hệ song song trong không gian',
    kind: 'module_checkpoint',
    semester: 1,
    seriesOrder: 4,
    duration: 30,
    scopeTopicIds: ['math11-t04'],
    topicWeights: { 'math11-t04': 1 },
    outcomeIds: outcomeIds(4, 5),
    questionIds: questionIds(109, 121, 133, 119, 125, 140, 159, 150, 771, 786)
  },
  {
    id: 'math11-exam-module-05',
    blueprintId: 'math11-blueprint-module-05',
    title: 'Kiểm tra Chương V – Giới hạn và hàm số liên tục',
    kind: 'module_checkpoint',
    semester: 1,
    seriesOrder: 5,
    duration: 30,
    scopeTopicIds: ['math11-t05'],
    topicWeights: { 'math11-t05': 1 },
    outcomeIds: outcomeIds(5, 3),
    questionIds: questionIds(169, 181, 193, 170, 184, 195, 412, 204, 398, 413),
    hasTrueFalse: true
  },
  {
    id: 'math11-exam-module-06',
    blueprintId: 'math11-blueprint-module-06',
    title: 'Kiểm tra Chương VI – Hàm số mũ và hàm số lôgarit',
    kind: 'module_checkpoint',
    semester: 2,
    seriesOrder: 6,
    duration: 30,
    scopeTopicIds: ['math11-t06'],
    topicWeights: { 'math11-t06': 1 },
    outcomeIds: outcomeIds(6, 4),
    questionIds: questionIds(205, 217, 229, 206, 221, 244, 460, 252, 434, 473),
    hasTrueFalse: true
  },
  {
    id: 'math11-exam-module-07',
    blueprintId: 'math11-blueprint-module-07',
    title: 'Kiểm tra Chương VII – Quan hệ vuông góc trong không gian',
    kind: 'module_checkpoint',
    semester: 2,
    seriesOrder: 7,
    duration: 30,
    scopeTopicIds: ['math11-t07'],
    topicWeights: { 'math11-t07': 1 },
    outcomeIds: outcomeIds(7, 6),
    questionIds: questionIds(253, 265, 277, 280, 292, 304, 316, 318, 501, 522)
  },
  {
    id: 'math11-exam-module-08',
    blueprintId: 'math11-blueprint-module-08',
    title: 'Kiểm tra Chương VIII – Các quy tắc tính xác suất',
    kind: 'module_checkpoint',
    semester: 2,
    seriesOrder: 8,
    duration: 30,
    scopeTopicIds: ['math11-t08'],
    topicWeights: { 'math11-t08': 1 },
    outcomeIds: outcomeIds(8, 3),
    questionIds: questionIds(325, 337, 349, 331, 340, 352, 353, 360, 566, 557)
  },
  {
    id: 'math11-exam-module-09',
    blueprintId: 'math11-blueprint-module-09',
    title: 'Kiểm tra Chương IX – Đạo hàm',
    kind: 'module_checkpoint',
    semester: 2,
    seriesOrder: 9,
    duration: 30,
    scopeTopicIds: ['math11-t09'],
    topicWeights: { 'math11-t09': 1 },
    outcomeIds: outcomeIds(9, 3),
    questionIds: questionIds(361, 373, 385, 364, 376, 388, 389, 396, 602, 617)
  }
];

const semesterSpecs: AssessmentSpec[] = [
  {
    id: 'math11-exam-midterm-1',
    blueprintId: 'math11-blueprint-midterm-1',
    title: 'Đề kiểm tra giữa học kỳ I – Toán 11',
    kind: 'midterm',
    semester: 1,
    seriesOrder: 1,
    duration: 45,
    scopeTopicIds: ['math11-t01', 'math11-t02'],
    topicWeights: { 'math11-t01': 0.6, 'math11-t02': 0.4 },
    outcomeIds: [...outcomeIds(1, 4), ...outcomeIds(2, 3)],
    questionIds: questionIds(2, 19, 50, 16, 25, 37, 67, 83, 662, 701)
  },
  {
    id: 'math11-exam-final-1',
    blueprintId: 'math11-blueprint-final-1',
    title: 'Đề kiểm tra cuối học kỳ I – Toán 11',
    kind: 'final',
    semester: 1,
    seriesOrder: 2,
    duration: 60,
    scopeTopicIds: ['math11-t01', 'math11-t02', 'math11-t03', 'math11-t04'],
    topicWeights: {
      'math11-t01': 0.2,
      'math11-t02': 0.2,
      'math11-t03': 0.2,
      'math11-t04': 0.4
    },
    outcomeIds: [
      ...outcomeIds(1, 4),
      ...outcomeIds(2, 3),
      ...outcomeIds(3, 2),
      ...outcomeIds(4, 5)
    ],
    questionIds: questionIds(9, 59, 89, 29, 80, 101, 147, 168, 741, 779)
  },
  {
    id: 'math11-exam-midterm-2',
    blueprintId: 'math11-blueprint-midterm-2',
    title: 'Đề kiểm tra giữa học kỳ II – Toán 11',
    kind: 'midterm',
    semester: 2,
    seriesOrder: 3,
    duration: 45,
    scopeTopicIds: ['math11-t05', 'math11-t06'],
    topicWeights: { 'math11-t05': 0.5, 'math11-t06': 0.5 },
    outcomeIds: [...outcomeIds(5, 3), ...outcomeIds(6, 4)],
    questionIds: questionIds(172, 176, 208, 177, 190, 223, 466, 246, 410, 455),
    hasTrueFalse: true
  },
  {
    id: 'math11-exam-final-2',
    blueprintId: 'math11-blueprint-final-2',
    title: 'Đề kiểm tra cuối học kỳ II – Toán 11',
    kind: 'final',
    semester: 2,
    seriesOrder: 4,
    duration: 60,
    scopeTopicIds: ['math11-t05', 'math11-t06', 'math11-t07', 'math11-t08', 'math11-t09'],
    topicWeights: {
      'math11-t05': 0.2,
      'math11-t06': 0.2,
      'math11-t07': 0.2,
      'math11-t08': 0.2,
      'math11-t09': 0.2
    },
    outcomeIds: [
      ...outcomeIds(5, 3),
      ...outcomeIds(6, 4),
      ...outcomeIds(7, 6),
      ...outcomeIds(8, 3),
      ...outcomeIds(9, 3)
    ],
    questionIds: questionIds(175, 219, 338, 182, 259, 344, 391, 460, 515, 599),
    hasTrueFalse: true
  }
];

const assessmentSpecs = [...moduleSpecs, ...semesterSpecs];

const sectionsFor = (spec: AssessmentSpec): AssessmentBlueprint['sections'] => [
  {
    id: `${spec.blueprintId}-multiple-choice`,
    title: 'Phần I – Trắc nghiệm nhiều lựa chọn',
    itemCount: spec.hasTrueFalse ? 7 : 8,
    points: spec.hasTrueFalse ? 7 : 8,
    responseType: 'multiple_choice'
  },
  ...(spec.hasTrueFalse
    ? [
        {
          id: `${spec.blueprintId}-true-false`,
          title: 'Phần II – Trắc nghiệm đúng/sai',
          itemCount: 1,
          points: 1,
          responseType: 'true_false_cluster' as const
        }
      ]
    : []),
  {
    id: `${spec.blueprintId}-short-answer`,
    title: spec.hasTrueFalse ? 'Phần III – Trả lời ngắn' : 'Phần II – Trả lời ngắn',
    itemCount: 2,
    points: 2,
    responseType: 'short_answer'
  }
];

export const g11MathAssessmentExams: MockExam[] = assessmentSpecs.map(spec => ({
  id: spec.id,
  subjectId: 'math',
  title: spec.title,
  duration: spec.duration,
  questionIds: spec.questionIds,
  createdAt,
  kind: spec.kind,
  focus: 'mixed',
  difficultyBand: 'standard',
  targetScoreRange: { min: 5, max: 8 },
  seriesOrder: spec.seriesOrder,
  semester: spec.semester,
  scopeTopicIds: spec.scopeTopicIds,
  totalPoints: 10,
  formCode: 'A',
  instructions: [
    'Làm lần lượt từ câu cơ bản đến câu vận dụng; mỗi câu có giá trị 1 điểm.',
    'Không xem lời giải trước khi nộp bài.',
    'Kiểm tra lại điều kiện, đơn vị và cách nhập đáp án trước khi hoàn tất.'
  ],
  resultReleasePolicy: 'after_submit',
  blueprintId: spec.blueprintId,
  assessmentVersion: '1.0.0'
}));

// <generated-assessment-bank>
export const g11MathAssessmentQuestions: Question[] = [
  {
    "id": "math11-assess-q001",
    "courseId": "grade11:math",
    "moduleId": "math11-m1",
    "lessonId": "math11-kntt-l1",
    "subjectId": "math",
    "topicId": "math11-t01",
    "questionTypeId": "math11-qt01",
    "subTypeId": "math11-qt01-st-values",
    "practiceRole": "guided",
    "representationType": "equation",
    "isMasteryHoldout": false,
    "content": "Cho $\\sin\\alpha=\\frac35$ với $\\frac\\pi2<\\alpha<\\pi$. Giá trị của $\\cos\\alpha$ là:",
    "responseType": "single_choice",
    "validatorType": "choice",
    "outcomeIds": [
      "out-math11-m1-01"
    ],
    "options": [
      "$\\frac45$",
      "$-\\frac45$",
      "$\\frac{16}{25}$",
      "$-\\frac{16}{25}$"
    ],
    "correctAnswer": "B",
    "difficulty": "easy",
    "sourceType": "mock_exam"
  },
  {
    "id": "math11-assess-q002",
    "courseId": "grade11:math",
    "moduleId": "math11-m1",
    "lessonId": "math11-kntt-l1",
    "subjectId": "math",
    "topicId": "math11-t01",
    "questionTypeId": "math11-qt01",
    "subTypeId": "math11-qt01-st-angle",
    "practiceRole": "near_transfer",
    "representationType": "diagram",
    "isMasteryHoldout": false,
    "content": "Trên đường tròn lượng giác, góc $\\frac{13\\pi}{6}$ có cùng tia cuối với góc nào?",
    "responseType": "single_choice",
    "validatorType": "choice",
    "outcomeIds": [
      "out-math11-m1-01"
    ],
    "options": [
      "$\\frac\\pi6$",
      "$\\frac{5\\pi}{6}$",
      "$\\frac{7\\pi}{6}$",
      "$\\frac{11\\pi}{6}$"
    ],
    "correctAnswer": "A",
    "difficulty": "easy",
    "sourceType": "mock_exam"
  },
  {
    "id": "math11-assess-q009",
    "courseId": "grade11:math",
    "moduleId": "math11-m1",
    "lessonId": "math11-kntt-l1",
    "subjectId": "math",
    "topicId": "math11-t01",
    "questionTypeId": "math11-qt01",
    "subTypeId": "math11-qt01-st-angle",
    "practiceRole": "representation_switch",
    "representationType": "diagram",
    "isMasteryHoldout": false,
    "content": "Góc $-\\frac{7\\pi}{6}$ có cùng tia cuối với góc dương nhỏ nhất nào?",
    "responseType": "single_choice",
    "validatorType": "choice",
    "outcomeIds": [
      "out-math11-m1-01"
    ],
    "options": [
      "$\\frac\\pi6$",
      "$\\frac{5\\pi}{6}$",
      "$\\frac{7\\pi}{6}$",
      "$\\frac{11\\pi}{6}$"
    ],
    "correctAnswer": "B",
    "difficulty": "easy",
    "sourceType": "mock_exam"
  },
  {
    "id": "math11-assess-q013",
    "courseId": "grade11:math",
    "moduleId": "math11-m1",
    "lessonId": "math11-kntt-l1",
    "subjectId": "math",
    "topicId": "math11-t01",
    "questionTypeId": "math11-qt01",
    "subTypeId": "math11-qt01-st-angle",
    "practiceRole": "mastery_holdout",
    "representationType": "diagram",
    "isMasteryHoldout": true,
    "content": "Góc $\\frac{11\\pi}{2}$ có cùng tia cuối với góc nào thuộc $[0;2\\pi)$?",
    "responseType": "single_choice",
    "validatorType": "choice",
    "outcomeIds": [
      "out-math11-m1-01"
    ],
    "options": [
      "$0$",
      "$\\frac\\pi2$",
      "$\\pi$",
      "$\\frac{3\\pi}{2}$"
    ],
    "correctAnswer": "D",
    "difficulty": "medium",
    "sourceType": "mock_exam"
  },
  {
    "id": "math11-assess-q015",
    "courseId": "grade11:math",
    "moduleId": "math11-m1",
    "lessonId": "math11-kntt-l1",
    "subjectId": "math",
    "topicId": "math11-t01",
    "questionTypeId": "math11-qt01",
    "subTypeId": "math11-qt01-st-values",
    "practiceRole": "misconception_check",
    "representationType": "equation",
    "isMasteryHoldout": false,
    "content": "Biết $\\tan\\alpha=-\\frac34$. Giá trị của $\\cot\\alpha$ là:",
    "responseType": "single_choice",
    "validatorType": "choice",
    "outcomeIds": [
      "out-math11-m1-01"
    ],
    "options": [
      "$-\\frac43$",
      "$\\frac43$",
      "$-\\frac34$",
      "$\\frac34$"
    ],
    "correctAnswer": "A",
    "difficulty": "easy",
    "sourceType": "mock_exam"
  },
  {
    "id": "math11-assess-q016",
    "courseId": "grade11:math",
    "moduleId": "math11-m1",
    "lessonId": "math11-kntt-l1",
    "subjectId": "math",
    "topicId": "math11-t01",
    "questionTypeId": "math11-qt01",
    "subTypeId": "math11-qt01-st-values",
    "practiceRole": "representation_switch",
    "representationType": "diagram",
    "isMasteryHoldout": false,
    "content": "Cho $\\cos\\alpha=\\frac{12}{13}$ và $\\frac{3\\pi}{2}<\\alpha<2\\pi$. Tính $\\sin\\alpha$.",
    "responseType": "single_choice",
    "validatorType": "choice",
    "outcomeIds": [
      "out-math11-m1-01"
    ],
    "options": [
      "$\\frac5{13}$",
      "$-\\frac5{13}$",
      "$\\frac{12}{13}$",
      "$-\\frac{12}{13}$"
    ],
    "correctAnswer": "B",
    "difficulty": "medium",
    "sourceType": "mock_exam"
  },
  {
    "id": "math11-assess-q019",
    "courseId": "grade11:math",
    "moduleId": "math11-m1",
    "lessonId": "math11-kntt-l2",
    "subjectId": "math",
    "topicId": "math11-t01",
    "questionTypeId": "math11-qt02",
    "subTypeId": "math11-qt02-st-addition",
    "practiceRole": "near_transfer",
    "representationType": "equation",
    "isMasteryHoldout": false,
    "content": "Giá trị chính xác của $\\sin75^\\circ$ là:",
    "responseType": "single_choice",
    "validatorType": "choice",
    "outcomeIds": [
      "out-math11-m1-02"
    ],
    "options": [
      "$\\frac{\\sqrt6+\\sqrt2}{4}$",
      "$\\frac{\\sqrt6-\\sqrt2}{4}$",
      "$\\frac{\\sqrt3+1}{2}$",
      "$\\frac{\\sqrt2+1}{2}$"
    ],
    "correctAnswer": "A",
    "difficulty": "easy",
    "sourceType": "mock_exam"
  },
  {
    "id": "math11-assess-q021",
    "courseId": "grade11:math",
    "moduleId": "math11-m1",
    "lessonId": "math11-kntt-l2",
    "subjectId": "math",
    "topicId": "math11-t01",
    "questionTypeId": "math11-qt02",
    "subTypeId": "math11-qt02-st-addition",
    "practiceRole": "misconception_check",
    "representationType": "equation",
    "isMasteryHoldout": false,
    "content": "Biết $\\sin a=\\frac35$, $\\cos a=\\frac45$. Tính $\\sin2a$.",
    "responseType": "single_choice",
    "validatorType": "choice",
    "outcomeIds": [
      "out-math11-m1-02"
    ],
    "options": [
      "$\\frac7{25}$",
      "$\\frac{12}{25}$",
      "$\\frac{24}{25}$",
      "$1$"
    ],
    "correctAnswer": "C",
    "difficulty": "medium",
    "sourceType": "mock_exam"
  },
  {
    "id": "math11-assess-q025",
    "courseId": "grade11:math",
    "moduleId": "math11-m1",
    "lessonId": "math11-kntt-l2",
    "subjectId": "math",
    "topicId": "math11-t01",
    "questionTypeId": "math11-qt02",
    "subTypeId": "math11-qt02-st-product-sum",
    "practiceRole": "misconception_check",
    "representationType": "equation",
    "isMasteryHoldout": false,
    "content": "Biến đổi $\\sin a+\\sin b$ thành tích:",
    "responseType": "single_choice",
    "validatorType": "choice",
    "outcomeIds": [
      "out-math11-m1-02"
    ],
    "options": [
      "$2\\sin\\frac{a+b}{2}\\cos\\frac{a-b}{2}$",
      "$2\\cos\\frac{a+b}{2}\\sin\\frac{a-b}{2}$",
      "$2\\sin\\frac{a-b}{2}\\cos\\frac{a+b}{2}$",
      "$\\sin(a+b)$"
    ],
    "correctAnswer": "A",
    "difficulty": "medium",
    "sourceType": "mock_exam"
  },
  {
    "id": "math11-assess-q029",
    "courseId": "grade11:math",
    "moduleId": "math11-m1",
    "lessonId": "math11-kntt-l3",
    "subjectId": "math",
    "topicId": "math11-t01",
    "questionTypeId": "math11-qt03",
    "subTypeId": "math11-qt03-st-properties",
    "practiceRole": "near_transfer",
    "representationType": "equation",
    "isMasteryHoldout": false,
    "content": "Chu kì nhỏ nhất của hàm số $y=\\sin(3x)$ là:",
    "responseType": "single_choice",
    "validatorType": "choice",
    "outcomeIds": [
      "out-math11-m1-03"
    ],
    "options": [
      "$\\frac\\pi3$",
      "$\\frac{2\\pi}{3}$",
      "$3\\pi$",
      "$6\\pi$"
    ],
    "correctAnswer": "B",
    "difficulty": "medium",
    "sourceType": "mock_exam"
  },
  {
    "id": "math11-assess-q030",
    "courseId": "grade11:math",
    "moduleId": "math11-m1",
    "lessonId": "math11-kntt-l3",
    "subjectId": "math",
    "topicId": "math11-t01",
    "questionTypeId": "math11-qt03",
    "subTypeId": "math11-qt03-st-properties",
    "practiceRole": "misconception_check",
    "representationType": "text",
    "isMasteryHoldout": false,
    "content": "Hàm số nào sau đây là hàm chẵn?",
    "responseType": "single_choice",
    "validatorType": "choice",
    "outcomeIds": [
      "out-math11-m1-03"
    ],
    "options": [
      "$y=\\cos x$",
      "$y=\\sin x$",
      "$y=\\tan x$",
      "$y=\\cot x$"
    ],
    "correctAnswer": "A",
    "difficulty": "easy",
    "sourceType": "mock_exam"
  },
  {
    "id": "math11-assess-q035",
    "courseId": "grade11:math",
    "moduleId": "math11-m1",
    "lessonId": "math11-kntt-l3",
    "subjectId": "math",
    "topicId": "math11-t01",
    "questionTypeId": "math11-qt03",
    "subTypeId": "math11-qt03-st-graph",
    "practiceRole": "near_transfer",
    "representationType": "graph",
    "isMasteryHoldout": false,
    "content": "Đồ thị có chu kì $\\pi$, đi qua gốc tọa độ và có tiệm cận đứng $x=\\frac\\pi2+k\\pi$ là:",
    "responseType": "single_choice",
    "validatorType": "choice",
    "outcomeIds": [
      "out-math11-m1-03"
    ],
    "options": [
      "$y=\\sin x$",
      "$y=\\cos x$",
      "$y=\\tan x$",
      "$y=\\cot x$"
    ],
    "correctAnswer": "C",
    "difficulty": "medium",
    "sourceType": "mock_exam"
  },
  {
    "id": "math11-assess-q037",
    "courseId": "grade11:math",
    "moduleId": "math11-m1",
    "lessonId": "math11-kntt-l3",
    "subjectId": "math",
    "topicId": "math11-t01",
    "questionTypeId": "math11-qt03",
    "subTypeId": "math11-qt03-st-graph",
    "practiceRole": "far_transfer",
    "representationType": "graph",
    "isMasteryHoldout": false,
    "content": "Đồ thị hình sin có biên độ 2, chu kì $2\\pi$, đi qua gốc và tăng tại gốc biểu diễn hàm:",
    "responseType": "single_choice",
    "validatorType": "choice",
    "outcomeIds": [
      "out-math11-m1-03"
    ],
    "options": [
      "$y=2\\sin x$",
      "$y=2\\cos x$",
      "$y=\\sin2x$",
      "$y=-2\\sin x$"
    ],
    "correctAnswer": "A",
    "difficulty": "medium",
    "sourceType": "mock_exam"
  },
  {
    "id": "math11-assess-q040",
    "courseId": "grade11:math",
    "moduleId": "math11-m1",
    "lessonId": "math11-kntt-l4",
    "subjectId": "math",
    "topicId": "math11-t01",
    "questionTypeId": "math11-qt04",
    "subTypeId": "math11-qt04-st-basic",
    "practiceRole": "representation_switch",
    "representationType": "graph",
    "isMasteryHoldout": false,
    "content": "Nghiệm của phương trình $\\tan x=\\sqrt3$ là:",
    "responseType": "single_choice",
    "validatorType": "choice",
    "outcomeIds": [
      "out-math11-m1-04"
    ],
    "options": [
      "$x=\\frac\\pi6+k\\pi$",
      "$x=\\frac\\pi3+2k\\pi$",
      "$x=\\frac\\pi3+k\\pi$",
      "$x=\\frac{2\\pi}{3}+k\\pi$"
    ],
    "correctAnswer": "C",
    "difficulty": "medium",
    "sourceType": "mock_exam"
  },
  {
    "id": "math11-assess-q048",
    "courseId": "grade11:math",
    "moduleId": "math11-m1",
    "lessonId": "math11-kntt-l4",
    "subjectId": "math",
    "topicId": "math11-t01",
    "questionTypeId": "math11-qt04",
    "subTypeId": "math11-qt04-st-transformed",
    "practiceRole": "mastery_holdout",
    "representationType": "equation",
    "isMasteryHoldout": true,
    "content": "Nghiệm của phương trình $\\cos(2x)=-1$ là:",
    "responseType": "single_choice",
    "validatorType": "choice",
    "outcomeIds": [
      "out-math11-m1-04"
    ],
    "options": [
      "$x=\\pi+2k\\pi$",
      "$x=\\frac\\pi2+2k\\pi$",
      "$x=\\pi+k\\pi$",
      "$x=\\frac\\pi2+k\\pi$"
    ],
    "correctAnswer": "D",
    "difficulty": "hard",
    "sourceType": "mock_exam"
  },
  {
    "id": "math11-assess-q626",
    "courseId": "grade11:math",
    "moduleId": "math11-m1",
    "lessonId": "math11-kntt-l1",
    "subjectId": "math",
    "topicId": "math11-t01",
    "questionTypeId": "math11-qt01",
    "subTypeId": "math11-qt01-st-angle",
    "practiceRole": "near_transfer",
    "representationType": "equation",
    "isMasteryHoldout": false,
    "content": "Đổi góc $225^\\circ$ sang radian. Nhập hệ số của $\\pi$.",
    "responseType": "short_answer",
    "validatorType": "exact",
    "acceptedAnswers": [
      "5/4",
      "$5/4$",
      "5/4"
    ],
    "outcomeIds": [
      "out-math11-m1-01"
    ],
    "correctAnswer": "5/4",
    "difficulty": "medium",
    "sourceType": "mock_exam",
    "cognitiveLevel": "application",
    "estimatedSeconds": 100
  },
  {
    "id": "math11-assess-q662",
    "courseId": "grade11:math",
    "moduleId": "math11-m1",
    "lessonId": "math11-kntt-l4",
    "subjectId": "math",
    "topicId": "math11-t01",
    "questionTypeId": "math11-qt04",
    "subTypeId": "math11-qt04-st-basic",
    "practiceRole": "near_transfer",
    "representationType": "equation",
    "isMasteryHoldout": false,
    "content": "Số nghiệm của $\\sin x=1/2$ trên $[0;2\\pi]$ là:",
    "responseType": "short_answer",
    "validatorType": "exact",
    "acceptedAnswers": [
      "2",
      "$2$",
      "2"
    ],
    "outcomeIds": [
      "out-math11-m1-04"
    ],
    "correctAnswer": "2",
    "difficulty": "medium",
    "sourceType": "mock_exam",
    "cognitiveLevel": "application",
    "estimatedSeconds": 100
  },
  {
    "id": "math11-assess-q671",
    "courseId": "grade11:math",
    "moduleId": "math11-m1",
    "lessonId": "math11-kntt-l4",
    "subjectId": "math",
    "topicId": "math11-t01",
    "questionTypeId": "math11-qt04",
    "subTypeId": "math11-qt04-st-transformed",
    "practiceRole": "far_transfer",
    "representationType": "equation",
    "isMasteryHoldout": false,
    "content": "Tính tổng các nghiệm của $\\cos(2x)=0$ trên $[0;\\pi]$.",
    "responseType": "short_answer",
    "validatorType": "exact",
    "acceptedAnswers": [
      "pi",
      "$pi$",
      "pi"
    ],
    "outcomeIds": [
      "out-math11-m1-04"
    ],
    "correctAnswer": "pi",
    "difficulty": "hard",
    "sourceType": "mock_exam",
    "cognitiveLevel": "application",
    "estimatedSeconds": 180
  },
  {
    "id": "math11-assess-q049",
    "courseId": "grade11:math",
    "moduleId": "math11-m2",
    "lessonId": "math11-kntt-l5",
    "subjectId": "math",
    "topicId": "math11-t02",
    "questionTypeId": "math11-qt05",
    "subTypeId": "math11-qt05-st-explicit",
    "practiceRole": "guided",
    "representationType": "equation",
    "isMasteryHoldout": false,
    "content": "Cho dãy số $u_n=2n-1$. Giá trị $u_5$ là:",
    "responseType": "single_choice",
    "validatorType": "choice",
    "outcomeIds": [
      "out-math11-m2-01"
    ],
    "options": [
      "$7$",
      "$9$",
      "$10$",
      "$11$"
    ],
    "correctAnswer": "B",
    "difficulty": "easy",
    "sourceType": "mock_exam"
  },
  {
    "id": "math11-assess-q050",
    "courseId": "grade11:math",
    "moduleId": "math11-m2",
    "lessonId": "math11-kntt-l5",
    "subjectId": "math",
    "topicId": "math11-t02",
    "questionTypeId": "math11-qt05",
    "subTypeId": "math11-qt05-st-explicit",
    "practiceRole": "near_transfer",
    "representationType": "equation",
    "isMasteryHoldout": false,
    "content": "Cho $u_n=n^2+1$. Giá trị số hạng thứ tư là:",
    "responseType": "single_choice",
    "validatorType": "choice",
    "outcomeIds": [
      "out-math11-m2-01"
    ],
    "options": [
      "$9$",
      "$15$",
      "$17$",
      "$25$"
    ],
    "correctAnswer": "C",
    "difficulty": "easy",
    "sourceType": "mock_exam"
  },
  {
    "id": "math11-assess-q051",
    "courseId": "grade11:math",
    "moduleId": "math11-m2",
    "lessonId": "math11-kntt-l5",
    "subjectId": "math",
    "topicId": "math11-t02",
    "questionTypeId": "math11-qt05",
    "subTypeId": "math11-qt05-st-explicit",
    "practiceRole": "representation_switch",
    "representationType": "table",
    "isMasteryHoldout": false,
    "content": "Bảng giá trị có $n:1,2,3,4$ tương ứng $u_n:3,6,9,12$. Công thức phù hợp là:",
    "responseType": "single_choice",
    "validatorType": "choice",
    "outcomeIds": [
      "out-math11-m2-01"
    ],
    "options": [
      "$u_n=3n$",
      "$u_n=n+3$",
      "$u_n=3^n$",
      "$u_n=n^2+2$"
    ],
    "correctAnswer": "A",
    "difficulty": "medium",
    "sourceType": "mock_exam"
  },
  {
    "id": "math11-assess-q059",
    "courseId": "grade11:math",
    "moduleId": "math11-m2",
    "lessonId": "math11-kntt-l5",
    "subjectId": "math",
    "topicId": "math11-t02",
    "questionTypeId": "math11-qt05",
    "subTypeId": "math11-qt05-st-recursive",
    "practiceRole": "retention",
    "representationType": "table",
    "isMasteryHoldout": false,
    "content": "Cho $u_1=1$, $u_{n+1}=2u_n$. Bốn số hạng đầu là $1,2,4,u_4$. Giá trị $u_4$ bằng:",
    "responseType": "single_choice",
    "validatorType": "choice",
    "outcomeIds": [
      "out-math11-m2-01"
    ],
    "options": [
      "$4$",
      "$6$",
      "$7$",
      "$8$"
    ],
    "correctAnswer": "D",
    "difficulty": "easy",
    "sourceType": "mock_exam"
  },
  {
    "id": "math11-assess-q061",
    "courseId": "grade11:math",
    "moduleId": "math11-m2",
    "lessonId": "math11-kntt-l6",
    "subjectId": "math",
    "topicId": "math11-t02",
    "questionTypeId": "math11-qt06",
    "subTypeId": "math11-qt06-st-term",
    "practiceRole": "guided",
    "representationType": "equation",
    "isMasteryHoldout": false,
    "content": "Cấp số cộng có $u_1=3$, công sai $d=4$. Giá trị $u_6$ là:",
    "responseType": "single_choice",
    "validatorType": "choice",
    "outcomeIds": [
      "out-math11-m2-02"
    ],
    "options": [
      "$19$",
      "$20$",
      "$23$",
      "$27$"
    ],
    "correctAnswer": "C",
    "difficulty": "easy",
    "sourceType": "mock_exam"
  },
  {
    "id": "math11-assess-q064",
    "courseId": "grade11:math",
    "moduleId": "math11-m2",
    "lessonId": "math11-kntt-l6",
    "subjectId": "math",
    "topicId": "math11-t02",
    "questionTypeId": "math11-qt06",
    "subTypeId": "math11-qt06-st-term",
    "practiceRole": "misconception_check",
    "representationType": "equation",
    "isMasteryHoldout": false,
    "content": "Cấp số cộng có $u_1=5$, $d=2$. Số 25 là số hạng thứ mấy?",
    "responseType": "single_choice",
    "validatorType": "choice",
    "outcomeIds": [
      "out-math11-m2-02"
    ],
    "options": [
      "Thứ 9",
      "Thứ 10",
      "Thứ 11",
      "Thứ 12"
    ],
    "correctAnswer": "C",
    "difficulty": "medium",
    "sourceType": "mock_exam"
  },
  {
    "id": "math11-assess-q067",
    "courseId": "grade11:math",
    "moduleId": "math11-m2",
    "lessonId": "math11-kntt-l6",
    "subjectId": "math",
    "topicId": "math11-t02",
    "questionTypeId": "math11-qt06",
    "subTypeId": "math11-qt06-st-sum",
    "practiceRole": "guided",
    "representationType": "equation",
    "isMasteryHoldout": false,
    "content": "Cấp số cộng có $u_1=2$, $d=3$. Tổng 10 số hạng đầu là:",
    "responseType": "single_choice",
    "validatorType": "choice",
    "outcomeIds": [
      "out-math11-m2-02"
    ],
    "options": [
      "$145$",
      "$150$",
      "$155$",
      "$160$"
    ],
    "correctAnswer": "C",
    "difficulty": "medium",
    "sourceType": "mock_exam"
  },
  {
    "id": "math11-assess-q069",
    "courseId": "grade11:math",
    "moduleId": "math11-m2",
    "lessonId": "math11-kntt-l6",
    "subjectId": "math",
    "topicId": "math11-t02",
    "questionTypeId": "math11-qt06",
    "subTypeId": "math11-qt06-st-sum",
    "practiceRole": "representation_switch",
    "representationType": "text",
    "isMasteryHoldout": false,
    "content": "Một khán đài có 15 hàng ghế. Hàng đầu có 20 ghế, mỗi hàng sau nhiều hơn hàng trước 2 ghế. Tổng số ghế là:",
    "responseType": "single_choice",
    "validatorType": "choice",
    "outcomeIds": [
      "out-math11-m2-02"
    ],
    "options": [
      "$480$",
      "$510$",
      "$525$",
      "$540$"
    ],
    "correctAnswer": "B",
    "difficulty": "medium",
    "sourceType": "mock_exam"
  },
  {
    "id": "math11-assess-q073",
    "courseId": "grade11:math",
    "moduleId": "math11-m2",
    "lessonId": "math11-kntt-l7",
    "subjectId": "math",
    "topicId": "math11-t02",
    "questionTypeId": "math11-qt07",
    "subTypeId": "math11-qt07-st-term",
    "practiceRole": "guided",
    "representationType": "equation",
    "isMasteryHoldout": false,
    "content": "Cấp số nhân có $u_1=2$, công bội $q=3$. Giá trị $u_5$ là:",
    "responseType": "single_choice",
    "validatorType": "choice",
    "outcomeIds": [
      "out-math11-m2-03"
    ],
    "options": [
      "$54$",
      "$81$",
      "$162$",
      "$243$"
    ],
    "correctAnswer": "C",
    "difficulty": "easy",
    "sourceType": "mock_exam"
  },
  {
    "id": "math11-assess-q076",
    "courseId": "grade11:math",
    "moduleId": "math11-m2",
    "lessonId": "math11-kntt-l7",
    "subjectId": "math",
    "topicId": "math11-t02",
    "questionTypeId": "math11-qt07",
    "subTypeId": "math11-qt07-st-term",
    "practiceRole": "misconception_check",
    "representationType": "equation",
    "isMasteryHoldout": false,
    "content": "Cấp số nhân có $u_1=5$, $q=-2$. Giá trị $u_4$ là:",
    "responseType": "single_choice",
    "validatorType": "choice",
    "outcomeIds": [
      "out-math11-m2-03"
    ],
    "options": [
      "$40$",
      "$-20$",
      "$20$",
      "$-40$"
    ],
    "correctAnswer": "D",
    "difficulty": "medium",
    "sourceType": "mock_exam"
  },
  {
    "id": "math11-assess-q080",
    "courseId": "grade11:math",
    "moduleId": "math11-m2",
    "lessonId": "math11-kntt-l7",
    "subjectId": "math",
    "topicId": "math11-t02",
    "questionTypeId": "math11-qt07",
    "subTypeId": "math11-qt07-st-sum",
    "practiceRole": "near_transfer",
    "representationType": "equation",
    "isMasteryHoldout": false,
    "content": "Cấp số nhân có $u_1=3$, $q=3$. Tổng 4 số hạng đầu là:",
    "responseType": "single_choice",
    "validatorType": "choice",
    "outcomeIds": [
      "out-math11-m2-03"
    ],
    "options": [
      "$81$",
      "$120$",
      "$121$",
      "$123$"
    ],
    "correctAnswer": "B",
    "difficulty": "medium",
    "sourceType": "mock_exam"
  },
  {
    "id": "math11-assess-q083",
    "courseId": "grade11:math",
    "moduleId": "math11-m2",
    "lessonId": "math11-kntt-l7",
    "subjectId": "math",
    "topicId": "math11-t02",
    "questionTypeId": "math11-qt07",
    "subTypeId": "math11-qt07-st-sum",
    "practiceRole": "far_transfer",
    "representationType": "text",
    "isMasteryHoldout": false,
    "content": "Một người gửi tin cho 3 người mới ở mỗi vòng; mỗi người nhận lại gửi cho 3 người mới. Tính cả người đầu tiên, tổng số người tham gia đến hết vòng 4 là:",
    "responseType": "single_choice",
    "validatorType": "choice",
    "outcomeIds": [
      "out-math11-m2-03"
    ],
    "options": [
      "$81$",
      "$108$",
      "$120$",
      "$121$"
    ],
    "correctAnswer": "D",
    "difficulty": "hard",
    "sourceType": "mock_exam"
  },
  {
    "id": "math11-assess-q084",
    "courseId": "grade11:math",
    "moduleId": "math11-m2",
    "lessonId": "math11-kntt-l7",
    "subjectId": "math",
    "topicId": "math11-t02",
    "questionTypeId": "math11-qt07",
    "subTypeId": "math11-qt07-st-sum",
    "practiceRole": "mastery_holdout",
    "representationType": "equation",
    "isMasteryHoldout": true,
    "content": "Tổng $2+6+18+\\cdots+1458$ bằng:",
    "responseType": "single_choice",
    "validatorType": "choice",
    "outcomeIds": [
      "out-math11-m2-03"
    ],
    "options": [
      "$2186$",
      "$2190$",
      "$4372$",
      "$4374$"
    ],
    "correctAnswer": "A",
    "difficulty": "hard",
    "sourceType": "mock_exam"
  },
  {
    "id": "math11-assess-q674",
    "courseId": "grade11:math",
    "moduleId": "math11-m2",
    "lessonId": "math11-kntt-l5",
    "subjectId": "math",
    "topicId": "math11-t02",
    "questionTypeId": "math11-qt05",
    "subTypeId": "math11-qt05-st-explicit",
    "practiceRole": "near_transfer",
    "representationType": "equation",
    "isMasteryHoldout": false,
    "content": "Cho $u_n=4n-7$. Số hạng nào của dãy bằng 45? Nhập chỉ số $n$.",
    "responseType": "short_answer",
    "validatorType": "exact",
    "acceptedAnswers": [
      "13",
      "$13$",
      "13"
    ],
    "outcomeIds": [
      "out-math11-m2-01"
    ],
    "correctAnswer": "13",
    "difficulty": "medium",
    "sourceType": "mock_exam",
    "cognitiveLevel": "application",
    "estimatedSeconds": 100
  },
  {
    "id": "math11-assess-q701",
    "courseId": "grade11:math",
    "moduleId": "math11-m2",
    "lessonId": "math11-kntt-l7",
    "subjectId": "math",
    "topicId": "math11-t02",
    "questionTypeId": "math11-qt07",
    "subTypeId": "math11-qt07-st-term",
    "practiceRole": "far_transfer",
    "representationType": "equation",
    "isMasteryHoldout": false,
    "content": "Chèn 3 số dương vào giữa 2 và 162 để được cấp số nhân gồm 5 số. Tính công bội dương.",
    "responseType": "short_answer",
    "validatorType": "exact",
    "acceptedAnswers": [
      "3",
      "$3$",
      "3"
    ],
    "outcomeIds": [
      "out-math11-m2-03"
    ],
    "correctAnswer": "3",
    "difficulty": "hard",
    "sourceType": "mock_exam",
    "cognitiveLevel": "application",
    "estimatedSeconds": 180
  },
  {
    "id": "math11-assess-q707",
    "courseId": "grade11:math",
    "moduleId": "math11-m2",
    "lessonId": "math11-kntt-l7",
    "subjectId": "math",
    "topicId": "math11-t02",
    "questionTypeId": "math11-qt07",
    "subTypeId": "math11-qt07-st-sum",
    "practiceRole": "far_transfer",
    "representationType": "equation",
    "isMasteryHoldout": false,
    "content": "Một người gửi 10 triệu đồng, lãi kép 5% mỗi năm. Sau 2 năm số tiền, theo triệu đồng, là bao nhiêu?",
    "responseType": "short_answer",
    "validatorType": "exact",
    "acceptedAnswers": [
      "11.025",
      "$11.025$",
      "11,025"
    ],
    "outcomeIds": [
      "out-math11-m2-03"
    ],
    "correctAnswer": "11.025",
    "difficulty": "hard",
    "sourceType": "mock_exam",
    "cognitiveLevel": "application",
    "estimatedSeconds": 180
  },
  {
    "id": "math11-assess-q085",
    "courseId": "grade11:math",
    "moduleId": "math11-m3",
    "lessonId": "math11-kntt-l8",
    "subjectId": "math",
    "topicId": "math11-t03",
    "questionTypeId": "math11-qt08",
    "subTypeId": "math11-qt08-st-read",
    "practiceRole": "guided",
    "representationType": "table",
    "isMasteryHoldout": false,
    "content": "Hai nhóm $[0;10)$ và $[10;20)$ có tần số 4 và 6. Cỡ mẫu bằng:",
    "responseType": "single_choice",
    "validatorType": "choice",
    "outcomeIds": [
      "out-math11-m3-01"
    ],
    "options": [
      "$4$",
      "$10$",
      "$20$",
      "$24$"
    ],
    "correctAnswer": "B",
    "difficulty": "easy",
    "sourceType": "mock_exam"
  },
  {
    "id": "math11-assess-q088",
    "courseId": "grade11:math",
    "moduleId": "math11-m3",
    "lessonId": "math11-kntt-l8",
    "subjectId": "math",
    "topicId": "math11-t03",
    "questionTypeId": "math11-qt08",
    "subTypeId": "math11-qt08-st-read",
    "practiceRole": "misconception_check",
    "representationType": "table",
    "isMasteryHoldout": false,
    "content": "Dữ liệu $1,2,4,5,7,9$ được ghép vào $[0;5)$ và $[5;10)$. Hai tần số là:",
    "responseType": "single_choice",
    "validatorType": "choice",
    "outcomeIds": [
      "out-math11-m3-01"
    ],
    "options": [
      "$2;4$",
      "$3;3$",
      "$4;2$",
      "$5;1$"
    ],
    "correctAnswer": "B",
    "difficulty": "medium",
    "sourceType": "mock_exam"
  },
  {
    "id": "math11-assess-q089",
    "courseId": "grade11:math",
    "moduleId": "math11-m3",
    "lessonId": "math11-kntt-l8",
    "subjectId": "math",
    "topicId": "math11-t03",
    "questionTypeId": "math11-qt08",
    "subTypeId": "math11-qt08-st-read",
    "practiceRole": "retention",
    "representationType": "text",
    "isMasteryHoldout": false,
    "content": "Giá trị nào thuộc nhóm $[10;20)$?",
    "responseType": "single_choice",
    "validatorType": "choice",
    "outcomeIds": [
      "out-math11-m3-01"
    ],
    "options": [
      "$10$",
      "$20$",
      "$21$",
      "$9{,}9$"
    ],
    "correctAnswer": "A",
    "difficulty": "easy",
    "sourceType": "mock_exam"
  },
  {
    "id": "math11-assess-q091",
    "courseId": "grade11:math",
    "moduleId": "math11-m3",
    "lessonId": "math11-kntt-l8",
    "subjectId": "math",
    "topicId": "math11-t03",
    "questionTypeId": "math11-qt08",
    "subTypeId": "math11-qt08-st-group",
    "practiceRole": "guided",
    "representationType": "table",
    "isMasteryHoldout": false,
    "content": "Các nhóm $[0;5)$, $[5;10)$, $[10;15)$ có tần số $2,5,3$. Nhóm có tần số lớn nhất là:",
    "responseType": "single_choice",
    "validatorType": "choice",
    "outcomeIds": [
      "out-math11-m3-01"
    ],
    "options": [
      "$[0;5)$",
      "$[5;10)$",
      "$[10;15)$",
      "Cả ba"
    ],
    "correctAnswer": "B",
    "difficulty": "easy",
    "sourceType": "mock_exam"
  },
  {
    "id": "math11-assess-q094",
    "courseId": "grade11:math",
    "moduleId": "math11-m3",
    "lessonId": "math11-kntt-l8",
    "subjectId": "math",
    "topicId": "math11-t03",
    "questionTypeId": "math11-qt08",
    "subTypeId": "math11-qt08-st-group",
    "practiceRole": "misconception_check",
    "representationType": "text",
    "isMasteryHoldout": false,
    "content": "Ghép dữ liệu $2,4,5,7,8,11$ vào $[0;5)$, $[5;10)$, $[10;15)$. Các tần số là:",
    "responseType": "single_choice",
    "validatorType": "choice",
    "outcomeIds": [
      "out-math11-m3-01"
    ],
    "options": [
      "$3,2,1$",
      "$2,2,2$",
      "$2,3,1$",
      "$1,3,2$"
    ],
    "correctAnswer": "C",
    "difficulty": "medium",
    "sourceType": "mock_exam"
  },
  {
    "id": "math11-assess-q097",
    "courseId": "grade11:math",
    "moduleId": "math11-m3",
    "lessonId": "math11-kntt-l9",
    "subjectId": "math",
    "topicId": "math11-t03",
    "questionTypeId": "math11-qt09",
    "subTypeId": "math11-qt09-st-mean-mode",
    "practiceRole": "guided",
    "representationType": "table",
    "isMasteryHoldout": false,
    "content": "Hai nhóm $[0;10)$, $[10;20)$ có tần số 2 và 3. Số trung bình xấp xỉ là:",
    "responseType": "single_choice",
    "validatorType": "choice",
    "outcomeIds": [
      "out-math11-m3-02"
    ],
    "options": [
      "$10$",
      "$11$",
      "$12$",
      "$13$"
    ],
    "correctAnswer": "B",
    "difficulty": "easy",
    "sourceType": "mock_exam"
  },
  {
    "id": "math11-assess-q098",
    "courseId": "grade11:math",
    "moduleId": "math11-m3",
    "lessonId": "math11-kntt-l9",
    "subjectId": "math",
    "topicId": "math11-t03",
    "questionTypeId": "math11-qt09",
    "subTypeId": "math11-qt09-st-mean-mode",
    "practiceRole": "near_transfer",
    "representationType": "table",
    "isMasteryHoldout": false,
    "content": "Hai giá trị đại diện 2 và 6 có tần số 1 và 3. Số trung bình xấp xỉ là:",
    "responseType": "single_choice",
    "validatorType": "choice",
    "outcomeIds": [
      "out-math11-m3-02"
    ],
    "options": [
      "$4$",
      "$4{,}5$",
      "$5$",
      "$5{,}5$"
    ],
    "correctAnswer": "C",
    "difficulty": "medium",
    "sourceType": "mock_exam"
  },
  {
    "id": "math11-assess-q101",
    "courseId": "grade11:math",
    "moduleId": "math11-m3",
    "lessonId": "math11-kntt-l9",
    "subjectId": "math",
    "topicId": "math11-t03",
    "questionTypeId": "math11-qt09",
    "subTypeId": "math11-qt09-st-mean-mode",
    "practiceRole": "misconception_check",
    "representationType": "text",
    "isMasteryHoldout": false,
    "content": "Vì sao số trung bình tính từ bảng ghép nhóm thường là xấp xỉ?",
    "responseType": "single_choice",
    "validatorType": "choice",
    "outcomeIds": [
      "out-math11-m3-02"
    ],
    "options": [
      "Vì cỡ mẫu luôn nhỏ",
      "Vì không cộng tần số",
      "Vì dùng giá trị đại diện thay dữ liệu gốc",
      "Vì không có đơn vị"
    ],
    "correctAnswer": "C",
    "difficulty": "medium",
    "sourceType": "mock_exam"
  },
  {
    "id": "math11-assess-q103",
    "courseId": "grade11:math",
    "moduleId": "math11-m3",
    "lessonId": "math11-kntt-l9",
    "subjectId": "math",
    "topicId": "math11-t03",
    "questionTypeId": "math11-qt09",
    "subTypeId": "math11-qt09-st-median-quartile",
    "practiceRole": "guided",
    "representationType": "table",
    "isMasteryHoldout": false,
    "content": "Các nhóm $[0;10)$, $[10;20)$, $[20;30)$ có tần số $4,8,8$. Trung vị xấp xỉ là:",
    "responseType": "single_choice",
    "validatorType": "choice",
    "outcomeIds": [
      "out-math11-m3-02"
    ],
    "options": [
      "$15$",
      "$16$",
      "$17{,}5$",
      "$18$"
    ],
    "correctAnswer": "C",
    "difficulty": "medium",
    "sourceType": "mock_exam"
  },
  {
    "id": "math11-assess-q108",
    "courseId": "grade11:math",
    "moduleId": "math11-m3",
    "lessonId": "math11-kntt-l9",
    "subjectId": "math",
    "topicId": "math11-t03",
    "questionTypeId": "math11-qt09",
    "subTypeId": "math11-qt09-st-median-quartile",
    "practiceRole": "mastery_holdout",
    "representationType": "equation",
    "isMasteryHoldout": true,
    "content": "Mẫu có $n=40$; nhóm chứa $Q_1$ là $[10;20)$, tần số 14, tích lũy trước nhóm 6. $Q_1$ xấp xỉ là:",
    "responseType": "single_choice",
    "validatorType": "choice",
    "outcomeIds": [
      "out-math11-m3-02"
    ],
    "options": [
      "$12$",
      "$12{,}5$",
      "$12{,}86$",
      "$14$"
    ],
    "correctAnswer": "C",
    "difficulty": "hard",
    "sourceType": "mock_exam"
  },
  {
    "id": "math11-assess-q710",
    "courseId": "grade11:math",
    "moduleId": "math11-m3",
    "lessonId": "math11-kntt-l8",
    "subjectId": "math",
    "topicId": "math11-t03",
    "questionTypeId": "math11-qt08",
    "subTypeId": "math11-qt08-st-read",
    "practiceRole": "near_transfer",
    "representationType": "equation",
    "isMasteryHoldout": false,
    "content": "Một nhóm có tần số 12 trong mẫu gồm 40 quan sát. Tính tần số tương đối dưới dạng thập phân.",
    "responseType": "short_answer",
    "validatorType": "exact",
    "acceptedAnswers": [
      "0.3",
      "$0.3$",
      "0,3"
    ],
    "outcomeIds": [
      "out-math11-m3-01"
    ],
    "correctAnswer": "0.3",
    "difficulty": "medium",
    "sourceType": "mock_exam",
    "cognitiveLevel": "application",
    "estimatedSeconds": 100
  },
  {
    "id": "math11-assess-q731",
    "courseId": "grade11:math",
    "moduleId": "math11-m3",
    "lessonId": "math11-kntt-l9",
    "subjectId": "math",
    "topicId": "math11-t03",
    "questionTypeId": "math11-qt09",
    "subTypeId": "math11-qt09-st-median-quartile",
    "practiceRole": "far_transfer",
    "representationType": "equation",
    "isMasteryHoldout": false,
    "content": "Các nhóm $[0;10)$, $[10;20)$, $[20;30)$ có tần số $5,10,5$. Ước lượng $Q_1$.",
    "responseType": "short_answer",
    "validatorType": "exact",
    "acceptedAnswers": [
      "10",
      "$10$",
      "10"
    ],
    "outcomeIds": [
      "out-math11-m3-02"
    ],
    "correctAnswer": "10",
    "difficulty": "hard",
    "sourceType": "mock_exam",
    "cognitiveLevel": "application",
    "estimatedSeconds": 180
  },
  {
    "id": "math11-assess-q109",
    "courseId": "grade11:math",
    "moduleId": "math11-m4",
    "lessonId": "math11-kntt-l10",
    "subjectId": "math",
    "topicId": "math11-t04",
    "questionTypeId": "math11-qt10",
    "subTypeId": "math11-qt10-st-incidence",
    "practiceRole": "guided",
    "representationType": "text",
    "isMasteryHoldout": false,
    "content": "Dữ kiện nào xác định duy nhất một mặt phẳng?",
    "responseType": "single_choice",
    "validatorType": "choice",
    "outcomeIds": [
      "out-math11-m4-01"
    ],
    "options": [
      "Ba điểm bất kỳ",
      "Ba điểm không thẳng hàng",
      "Hai điểm phân biệt",
      "Một điểm và một đường bất kỳ"
    ],
    "correctAnswer": "B",
    "difficulty": "easy",
    "sourceType": "mock_exam"
  },
  {
    "id": "math11-assess-q119",
    "courseId": "grade11:math",
    "moduleId": "math11-m4",
    "lessonId": "math11-kntt-l10",
    "subjectId": "math",
    "topicId": "math11-t04",
    "questionTypeId": "math11-qt10",
    "subTypeId": "math11-qt10-st-intersection",
    "practiceRole": "far_transfer",
    "representationType": "diagram",
    "isMasteryHoldout": false,
    "content": "Trong tứ diện $ABCD$, $(ABC)\\cap(BCD)$ bằng:",
    "responseType": "single_choice",
    "validatorType": "choice",
    "outcomeIds": [
      "out-math11-m4-01"
    ],
    "options": [
      "$AB$",
      "$AC$",
      "$BC$",
      "$BD$"
    ],
    "correctAnswer": "C",
    "difficulty": "medium",
    "sourceType": "mock_exam"
  },
  {
    "id": "math11-assess-q121",
    "courseId": "grade11:math",
    "moduleId": "math11-m4",
    "lessonId": "math11-kntt-l11",
    "subjectId": "math",
    "topicId": "math11-t04",
    "questionTypeId": "math11-qt11",
    "subTypeId": "math11-qt11-st-position",
    "practiceRole": "guided",
    "representationType": "diagram",
    "isMasteryHoldout": false,
    "content": "Trong tứ diện $ABCD$, hai cạnh đối $AB$ và $CD$ có vị trí:",
    "responseType": "single_choice",
    "validatorType": "choice",
    "outcomeIds": [
      "out-math11-m4-02"
    ],
    "options": [
      "Trùng nhau",
      "Cắt nhau",
      "Song song",
      "Chéo nhau"
    ],
    "correctAnswer": "D",
    "difficulty": "easy",
    "sourceType": "mock_exam"
  },
  {
    "id": "math11-assess-q125",
    "courseId": "grade11:math",
    "moduleId": "math11-m4",
    "lessonId": "math11-kntt-l11",
    "subjectId": "math",
    "topicId": "math11-t04",
    "questionTypeId": "math11-qt11",
    "subTypeId": "math11-qt11-st-position",
    "practiceRole": "misconception_check",
    "representationType": "text",
    "isMasteryHoldout": false,
    "content": "Dấu hiệu quyết định hai đường thẳng chéo nhau là:",
    "responseType": "single_choice",
    "validatorType": "choice",
    "outcomeIds": [
      "out-math11-m4-02"
    ],
    "options": [
      "Không bằng nhau",
      "Không có điểm chung",
      "Không đồng phẳng",
      "Không song song"
    ],
    "correctAnswer": "C",
    "difficulty": "medium",
    "sourceType": "mock_exam"
  },
  {
    "id": "math11-assess-q133",
    "courseId": "grade11:math",
    "moduleId": "math11-m4",
    "lessonId": "math11-kntt-l12",
    "subjectId": "math",
    "topicId": "math11-t04",
    "questionTypeId": "math11-qt12",
    "subTypeId": "math11-qt12-st-condition",
    "practiceRole": "guided",
    "representationType": "text",
    "isMasteryHoldout": false,
    "content": "Nếu $a\\subset(P)$, $d\\parallel a$ và $d\\not\\subset(P)$ thì:",
    "responseType": "single_choice",
    "validatorType": "choice",
    "outcomeIds": [
      "out-math11-m4-03"
    ],
    "options": [
      "$d\\perp(P)$",
      "$d\\parallel(P)$",
      "$d\\subset(P)$",
      "$d$ cắt $(P)$"
    ],
    "correctAnswer": "B",
    "difficulty": "easy",
    "sourceType": "mock_exam"
  },
  {
    "id": "math11-assess-q140",
    "courseId": "grade11:math",
    "moduleId": "math11-m4",
    "lessonId": "math11-kntt-l12",
    "subjectId": "math",
    "topicId": "math11-t04",
    "questionTypeId": "math11-qt12",
    "subTypeId": "math11-qt12-st-application",
    "practiceRole": "near_transfer",
    "representationType": "diagram",
    "isMasteryHoldout": false,
    "content": "Trong hình chóp $S.ABC$, $M,N$ là trung điểm $SA,SC$. $MN$ song song với mặt phẳng nào?",
    "responseType": "single_choice",
    "validatorType": "choice",
    "outcomeIds": [
      "out-math11-m4-03"
    ],
    "options": [
      "$(ABC)$",
      "$(SAB)$",
      "$(SAC)$",
      "Không mặt phẳng nào"
    ],
    "correctAnswer": "A",
    "difficulty": "medium",
    "sourceType": "mock_exam"
  },
  {
    "id": "math11-assess-q147",
    "courseId": "grade11:math",
    "moduleId": "math11-m4",
    "lessonId": "math11-kntt-l13",
    "subjectId": "math",
    "topicId": "math11-t04",
    "questionTypeId": "math11-qt13",
    "subTypeId": "math11-qt13-st-planes",
    "practiceRole": "representation_switch",
    "representationType": "diagram",
    "isMasteryHoldout": false,
    "content": "Nếu $(P)\\parallel(Q)$ và $(R)$ cắt chúng theo $a,b$ thì:",
    "responseType": "single_choice",
    "validatorType": "choice",
    "outcomeIds": [
      "out-math11-m4-04"
    ],
    "options": [
      "$a$ cắt $b$",
      "$a=b$",
      "$a\\parallel b$",
      "$a\\perp b$"
    ],
    "correctAnswer": "C",
    "difficulty": "medium",
    "sourceType": "mock_exam"
  },
  {
    "id": "math11-assess-q150",
    "courseId": "grade11:math",
    "moduleId": "math11-m4",
    "lessonId": "math11-kntt-l13",
    "subjectId": "math",
    "topicId": "math11-t04",
    "questionTypeId": "math11-qt13",
    "subTypeId": "math11-qt13-st-planes",
    "practiceRole": "mastery_holdout",
    "representationType": "text",
    "isMasteryHoldout": true,
    "content": "Hai mặt phẳng phân biệt cùng song song với mặt phẳng thứ ba thì:",
    "responseType": "single_choice",
    "validatorType": "choice",
    "outcomeIds": [
      "out-math11-m4-04"
    ],
    "options": [
      "Song song nhau",
      "Cắt nhau",
      "Vuông góc nhau",
      "Có thể trùng nhau"
    ],
    "correctAnswer": "A",
    "difficulty": "hard",
    "sourceType": "mock_exam"
  },
  {
    "id": "math11-assess-q159",
    "courseId": "grade11:math",
    "moduleId": "math11-m4",
    "lessonId": "math11-kntt-l14",
    "subjectId": "math",
    "topicId": "math11-t04",
    "questionTypeId": "math11-qt14",
    "subTypeId": "math11-qt14-st-image",
    "practiceRole": "misconception_check",
    "representationType": "text",
    "isMasteryHoldout": false,
    "content": "Tính chất nào không được bảo toàn nói chung?",
    "responseType": "single_choice",
    "validatorType": "choice",
    "outcomeIds": [
      "out-math11-m4-05"
    ],
    "options": [
      "Thẳng hàng",
      "Song song",
      "Tỉ số trên một đường",
      "Số đo góc"
    ],
    "correctAnswer": "D",
    "difficulty": "medium",
    "sourceType": "mock_exam"
  },
  {
    "id": "math11-assess-q168",
    "courseId": "grade11:math",
    "moduleId": "math11-m4",
    "lessonId": "math11-kntt-l14",
    "subjectId": "math",
    "topicId": "math11-t04",
    "questionTypeId": "math11-qt14",
    "subTypeId": "math11-qt14-st-representation",
    "practiceRole": "mastery_holdout",
    "representationType": "diagram",
    "isMasteryHoldout": true,
    "content": "Hình chiếu song song không suy biến của một hình vuông nói chung là:",
    "responseType": "single_choice",
    "validatorType": "choice",
    "outcomeIds": [
      "out-math11-m4-05"
    ],
    "options": [
      "Luôn hình vuông",
      "Luôn hình chữ nhật",
      "Hình thang",
      "Hình bình hành"
    ],
    "correctAnswer": "D",
    "difficulty": "hard",
    "sourceType": "mock_exam"
  },
  {
    "id": "math11-assess-q741",
    "courseId": "grade11:math",
    "moduleId": "math11-m4",
    "lessonId": "math11-kntt-l10",
    "subjectId": "math",
    "topicId": "math11-t04",
    "questionTypeId": "math11-qt10",
    "subTypeId": "math11-qt10-st-intersection",
    "practiceRole": "representation_switch",
    "representationType": "diagram",
    "isMasteryHoldout": false,
    "content": "Hai mặt phẳng $(ABC)$ và $(ABD)$ với $C,D$ không thuộc $AB$ có giao tuyến là đường nào?",
    "responseType": "short_answer",
    "validatorType": "exact",
    "acceptedAnswers": [
      "AB",
      "$AB$",
      "ab"
    ],
    "outcomeIds": [
      "out-math11-m4-01"
    ],
    "correctAnswer": "AB",
    "difficulty": "medium",
    "sourceType": "mock_exam",
    "cognitiveLevel": "application",
    "estimatedSeconds": 100
  },
  {
    "id": "math11-assess-q771",
    "courseId": "grade11:math",
    "moduleId": "math11-m4",
    "lessonId": "math11-kntt-l13",
    "subjectId": "math",
    "topicId": "math11-t04",
    "questionTypeId": "math11-qt13",
    "subTypeId": "math11-qt13-st-planes",
    "practiceRole": "representation_switch",
    "representationType": "diagram",
    "isMasteryHoldout": false,
    "content": "Hai mặt phẳng song song có bao nhiêu điểm chung?",
    "responseType": "short_answer",
    "validatorType": "exact",
    "acceptedAnswers": [
      "0",
      "$0$",
      "0"
    ],
    "outcomeIds": [
      "out-math11-m4-04"
    ],
    "correctAnswer": "0",
    "difficulty": "medium",
    "sourceType": "mock_exam",
    "cognitiveLevel": "application",
    "estimatedSeconds": 100
  },
  {
    "id": "math11-assess-q779",
    "courseId": "grade11:math",
    "moduleId": "math11-m4",
    "lessonId": "math11-kntt-l13",
    "subjectId": "math",
    "topicId": "math11-t04",
    "questionTypeId": "math11-qt13",
    "subTypeId": "math11-qt13-st-thales",
    "practiceRole": "far_transfer",
    "representationType": "equation",
    "isMasteryHoldout": false,
    "content": "Ba mặt phẳng song song chắn một cát tuyến các đoạn 4 và 6. Trên cát tuyến khác, đoạn thứ nhất dài 10. Tính đoạn thứ hai.",
    "responseType": "short_answer",
    "validatorType": "exact",
    "acceptedAnswers": [
      "15",
      "$15$",
      "15"
    ],
    "outcomeIds": [
      "out-math11-m4-04"
    ],
    "correctAnswer": "15",
    "difficulty": "hard",
    "sourceType": "mock_exam",
    "cognitiveLevel": "application",
    "estimatedSeconds": 180
  },
  {
    "id": "math11-assess-q786",
    "courseId": "grade11:math",
    "moduleId": "math11-m4",
    "lessonId": "math11-kntt-l14",
    "subjectId": "math",
    "topicId": "math11-t04",
    "questionTypeId": "math11-qt14",
    "subTypeId": "math11-qt14-st-image",
    "practiceRole": "mastery_holdout",
    "representationType": "diagram",
    "isMasteryHoldout": true,
    "content": "$A,B,C$ thẳng hàng và $AB=3BC$. Qua phép chiếu song song không suy biến, tính $A_1B_1/B_1C_1$.",
    "responseType": "short_answer",
    "validatorType": "exact",
    "acceptedAnswers": [
      "3",
      "$3$",
      "3"
    ],
    "outcomeIds": [
      "out-math11-m4-05"
    ],
    "correctAnswer": "3",
    "difficulty": "hard",
    "sourceType": "mock_exam",
    "cognitiveLevel": "application",
    "estimatedSeconds": 180
  },
  {
    "id": "math11-assess-q169",
    "courseId": "grade11:math",
    "moduleId": "math11-m5",
    "lessonId": "math11-kntt-l15",
    "subjectId": "math",
    "topicId": "math11-t05",
    "questionTypeId": "math11-qt15",
    "subTypeId": "math11-qt15-st-finite",
    "practiceRole": "guided",
    "representationType": "equation",
    "isMasteryHoldout": false,
    "content": "$\\lim_{n\\to\\infty}\\frac1n$ bằng:",
    "responseType": "single_choice",
    "validatorType": "choice",
    "outcomeIds": [
      "out-math11-m5-01"
    ],
    "options": [
      "$1$",
      "$0$",
      "$+\\infty$",
      "$-\\infty$"
    ],
    "correctAnswer": "B",
    "difficulty": "easy",
    "sourceType": "mock_exam"
  },
  {
    "id": "math11-assess-q170",
    "courseId": "grade11:math",
    "moduleId": "math11-m5",
    "lessonId": "math11-kntt-l15",
    "subjectId": "math",
    "topicId": "math11-t05",
    "questionTypeId": "math11-qt15",
    "subTypeId": "math11-qt15-st-finite",
    "practiceRole": "near_transfer",
    "representationType": "equation",
    "isMasteryHoldout": false,
    "content": "$\\lim\\frac{2n+1}{n+3}$ bằng:",
    "responseType": "single_choice",
    "validatorType": "choice",
    "outcomeIds": [
      "out-math11-m5-01"
    ],
    "options": [
      "$0$",
      "$1$",
      "$2$",
      "$+\\infty$"
    ],
    "correctAnswer": "C",
    "difficulty": "medium",
    "sourceType": "mock_exam"
  },
  {
    "id": "math11-assess-q172",
    "courseId": "grade11:math",
    "moduleId": "math11-m5",
    "lessonId": "math11-kntt-l15",
    "subjectId": "math",
    "topicId": "math11-t05",
    "questionTypeId": "math11-qt15",
    "subTypeId": "math11-qt15-st-finite",
    "practiceRole": "misconception_check",
    "representationType": "equation",
    "isMasteryHoldout": false,
    "content": "$\\lim\\frac{n+1}{n}$ bằng:",
    "responseType": "single_choice",
    "validatorType": "choice",
    "outcomeIds": [
      "out-math11-m5-01"
    ],
    "options": [
      "$0$",
      "$1$",
      "$2$",
      "$+\\infty$"
    ],
    "correctAnswer": "B",
    "difficulty": "easy",
    "sourceType": "mock_exam"
  },
  {
    "id": "math11-assess-q175",
    "courseId": "grade11:math",
    "moduleId": "math11-m5",
    "lessonId": "math11-kntt-l15",
    "subjectId": "math",
    "topicId": "math11-t05",
    "questionTypeId": "math11-qt15",
    "subTypeId": "math11-qt15-st-infinite",
    "practiceRole": "guided",
    "representationType": "equation",
    "isMasteryHoldout": false,
    "content": "$\\lim\\left(\\frac12\\right)^n$ bằng:",
    "responseType": "single_choice",
    "validatorType": "choice",
    "outcomeIds": [
      "out-math11-m5-01"
    ],
    "options": [
      "$1$",
      "$0$",
      "$+\\infty$",
      "Không tồn tại"
    ],
    "correctAnswer": "B",
    "difficulty": "easy",
    "sourceType": "mock_exam"
  },
  {
    "id": "math11-assess-q176",
    "courseId": "grade11:math",
    "moduleId": "math11-m5",
    "lessonId": "math11-kntt-l15",
    "subjectId": "math",
    "topicId": "math11-t05",
    "questionTypeId": "math11-qt15",
    "subTypeId": "math11-qt15-st-infinite",
    "practiceRole": "near_transfer",
    "representationType": "text",
    "isMasteryHoldout": false,
    "content": "Dãy $u_n=n^2$ có giới hạn:",
    "responseType": "single_choice",
    "validatorType": "choice",
    "outcomeIds": [
      "out-math11-m5-01"
    ],
    "options": [
      "$0$",
      "$1$",
      "$+\\infty$",
      "$-\\infty$"
    ],
    "correctAnswer": "C",
    "difficulty": "easy",
    "sourceType": "mock_exam"
  },
  {
    "id": "math11-assess-q177",
    "courseId": "grade11:math",
    "moduleId": "math11-m5",
    "lessonId": "math11-kntt-l15",
    "subjectId": "math",
    "topicId": "math11-t05",
    "questionTypeId": "math11-qt15",
    "subTypeId": "math11-qt15-st-infinite",
    "practiceRole": "representation_switch",
    "representationType": "text",
    "isMasteryHoldout": false,
    "content": "Dãy $u_n=-3n+2$ có giới hạn:",
    "responseType": "single_choice",
    "validatorType": "choice",
    "outcomeIds": [
      "out-math11-m5-01"
    ],
    "options": [
      "$0$",
      "$+\\infty$",
      "$2$",
      "$-\\infty$"
    ],
    "correctAnswer": "D",
    "difficulty": "medium",
    "sourceType": "mock_exam"
  },
  {
    "id": "math11-assess-q181",
    "courseId": "grade11:math",
    "moduleId": "math11-m5",
    "lessonId": "math11-kntt-l16",
    "subjectId": "math",
    "topicId": "math11-t05",
    "questionTypeId": "math11-qt16",
    "subTypeId": "math11-qt16-st-point",
    "practiceRole": "guided",
    "representationType": "equation",
    "isMasteryHoldout": false,
    "content": "$\\lim_{x\\to2}(x^2+1)$ bằng:",
    "responseType": "single_choice",
    "validatorType": "choice",
    "outcomeIds": [
      "out-math11-m5-02"
    ],
    "options": [
      "$3$",
      "$4$",
      "$5$",
      "$6$"
    ],
    "correctAnswer": "C",
    "difficulty": "easy",
    "sourceType": "mock_exam"
  },
  {
    "id": "math11-assess-q182",
    "courseId": "grade11:math",
    "moduleId": "math11-m5",
    "lessonId": "math11-kntt-l16",
    "subjectId": "math",
    "topicId": "math11-t05",
    "questionTypeId": "math11-qt16",
    "subTypeId": "math11-qt16-st-point",
    "practiceRole": "near_transfer",
    "representationType": "equation",
    "isMasteryHoldout": false,
    "content": "$\\lim_{x\\to2}\\frac{x^2-4}{x-2}$ bằng:",
    "responseType": "single_choice",
    "validatorType": "choice",
    "outcomeIds": [
      "out-math11-m5-02"
    ],
    "options": [
      "$2$",
      "$4$",
      "$0$",
      "Không tồn tại"
    ],
    "correctAnswer": "B",
    "difficulty": "medium",
    "sourceType": "mock_exam"
  },
  {
    "id": "math11-assess-q184",
    "courseId": "grade11:math",
    "moduleId": "math11-m5",
    "lessonId": "math11-kntt-l16",
    "subjectId": "math",
    "topicId": "math11-t05",
    "questionTypeId": "math11-qt16",
    "subTypeId": "math11-qt16-st-point",
    "practiceRole": "misconception_check",
    "representationType": "graph",
    "isMasteryHoldout": false,
    "content": "Tại $x_0$, giới hạn trái bằng 1 và giới hạn phải bằng 2. Giới hạn hai phía:",
    "responseType": "single_choice",
    "validatorType": "choice",
    "outcomeIds": [
      "out-math11-m5-02"
    ],
    "options": [
      "Bằng 1",
      "Bằng 2",
      "Bằng 3",
      "Không tồn tại"
    ],
    "correctAnswer": "D",
    "difficulty": "medium",
    "sourceType": "mock_exam"
  },
  {
    "id": "math11-assess-q190",
    "courseId": "grade11:math",
    "moduleId": "math11-m5",
    "lessonId": "math11-kntt-l16",
    "subjectId": "math",
    "topicId": "math11-t05",
    "questionTypeId": "math11-qt16",
    "subTypeId": "math11-qt16-st-infinity",
    "practiceRole": "near_transfer",
    "representationType": "equation",
    "isMasteryHoldout": false,
    "content": "$\\lim_{x\\to2^+}\\frac1{x-2}$ bằng:",
    "responseType": "single_choice",
    "validatorType": "choice",
    "outcomeIds": [
      "out-math11-m5-02"
    ],
    "options": [
      "$0$",
      "$1$",
      "$-\\infty$",
      "$+\\infty$"
    ],
    "correctAnswer": "D",
    "difficulty": "medium",
    "sourceType": "mock_exam"
  },
  {
    "id": "math11-assess-q193",
    "courseId": "grade11:math",
    "moduleId": "math11-m5",
    "lessonId": "math11-kntt-l17",
    "subjectId": "math",
    "topicId": "math11-t05",
    "questionTypeId": "math11-qt17",
    "subTypeId": "math11-qt17-st-point",
    "practiceRole": "guided",
    "representationType": "equation",
    "isMasteryHoldout": false,
    "content": "$f$ liên tục tại $x_0$ khi:",
    "responseType": "single_choice",
    "validatorType": "choice",
    "outcomeIds": [
      "out-math11-m5-03"
    ],
    "options": [
      "$f(x_0)=0$",
      "$\\lim_{x\\to x_0}f(x)=f(x_0)$",
      "$f$ tăng tại $x_0$",
      "$f$ có đạo hàm"
    ],
    "correctAnswer": "B",
    "difficulty": "easy",
    "sourceType": "mock_exam"
  },
  {
    "id": "math11-assess-q195",
    "courseId": "grade11:math",
    "moduleId": "math11-m5",
    "lessonId": "math11-kntt-l17",
    "subjectId": "math",
    "topicId": "math11-t05",
    "questionTypeId": "math11-qt17",
    "subTypeId": "math11-qt17-st-point",
    "practiceRole": "representation_switch",
    "representationType": "equation",
    "isMasteryHoldout": false,
    "content": "Hàm $f(x)=\\frac1{x-2}$ liên tục trên:",
    "responseType": "single_choice",
    "validatorType": "choice",
    "outcomeIds": [
      "out-math11-m5-03"
    ],
    "options": [
      "$\\mathbb R$",
      "$[2;+\\infty)$",
      "$(-\\infty;2)$ và $(2;+\\infty)$",
      "Chỉ tại $x=2$"
    ],
    "correctAnswer": "C",
    "difficulty": "medium",
    "sourceType": "mock_exam"
  },
  {
    "id": "math11-assess-q204",
    "courseId": "grade11:math",
    "moduleId": "math11-m5",
    "lessonId": "math11-kntt-l17",
    "subjectId": "math",
    "topicId": "math11-t05",
    "questionTypeId": "math11-qt17",
    "subTypeId": "math11-qt17-st-domain",
    "practiceRole": "mastery_holdout",
    "representationType": "equation",
    "isMasteryHoldout": true,
    "content": "Cho $f(x)=\\frac{\\sin x}{x}$ khi $x\\ne0$, $f(0)=a$. Liên tục tại 0 khi:",
    "responseType": "single_choice",
    "validatorType": "choice",
    "outcomeIds": [
      "out-math11-m5-03"
    ],
    "options": [
      "$a=0$",
      "$a=-1$",
      "$a=2$",
      "$a=1$"
    ],
    "correctAnswer": "D",
    "difficulty": "hard",
    "sourceType": "mock_exam"
  },
  {
    "id": "math11-assess-q398",
    "courseId": "grade11:math",
    "moduleId": "math11-m5",
    "lessonId": "math11-kntt-l15",
    "subjectId": "math",
    "topicId": "math11-t05",
    "questionTypeId": "math11-qt15",
    "subTypeId": "math11-qt15-st-finite",
    "practiceRole": "near_transfer",
    "representationType": "equation",
    "isMasteryHoldout": false,
    "content": "Tính $\\lim\\limits_{n\\to\\infty}n(\\sqrt{n^2+1}-n)$.",
    "responseType": "short_answer",
    "validatorType": "exact",
    "outcomeIds": [
      "out-math11-m5-01"
    ],
    "correctAnswer": "0.5",
    "difficulty": "medium",
    "sourceType": "mock_exam",
    "cognitiveLevel": "application",
    "estimatedSeconds": 90,
    "acceptedAnswers": [
      "0.5",
      "0,5",
      "1/2",
      "$1/2$"
    ]
  },
  {
    "id": "math11-assess-q410",
    "courseId": "grade11:math",
    "moduleId": "math11-m5",
    "lessonId": "math11-kntt-l16",
    "subjectId": "math",
    "topicId": "math11-t05",
    "questionTypeId": "math11-qt16",
    "subTypeId": "math11-qt16-st-point",
    "practiceRole": "near_transfer",
    "representationType": "equation",
    "isMasteryHoldout": false,
    "content": "Tính $\\lim\\limits_{x\\to4}\\dfrac{\\sqrt{x+5}-3}{x-4}$.",
    "responseType": "short_answer",
    "validatorType": "exact",
    "outcomeIds": [
      "out-math11-m5-02"
    ],
    "correctAnswer": "1/6",
    "difficulty": "medium",
    "sourceType": "mock_exam",
    "cognitiveLevel": "application",
    "estimatedSeconds": 90,
    "acceptedAnswers": [
      "1/6",
      "$1/6$",
      "0.1666667"
    ]
  },
  {
    "id": "math11-assess-q412",
    "courseId": "grade11:math",
    "moduleId": "math11-m5",
    "lessonId": "math11-kntt-l16",
    "subjectId": "math",
    "topicId": "math11-t05",
    "questionTypeId": "math11-qt16",
    "subTypeId": "math11-qt16-st-point",
    "practiceRole": "misconception_check",
    "representationType": "text",
    "isMasteryHoldout": false,
    "content": "Cho $f(x)=\\dfrac{x^2-1}{x-1}$ với $x\\ne1$. Chọn Đúng hoặc Sai.",
    "responseType": "true_false_cluster",
    "validatorType": "exact",
    "outcomeIds": [
      "out-math11-m5-02"
    ],
    "correctAnswer": "a:Đ|b:S|c:Đ|d:Đ",
    "difficulty": "medium",
    "sourceType": "mock_exam",
    "cognitiveLevel": "application",
    "estimatedSeconds": 90,
    "answerSchema": {
      "type": "true-false-cluster",
      "proofImageRequired": false,
      "autoCheckMode": "exact",
      "scoringMode": "per_field",
      "fields": [
        {
          "key": "a",
          "label": "$\\lim_{x\\to1}f(x)=2$.",
          "valueType": "choice",
          "required": true
        },
        {
          "key": "b",
          "label": "$f(1)$ đang được xác định.",
          "valueType": "choice",
          "required": true
        },
        {
          "key": "c",
          "label": "Có thể bổ sung $f(1)=2$ để hàm liên tục.",
          "valueType": "choice",
          "required": true
        },
        {
          "key": "d",
          "label": "Hai giới hạn một phía tại 1 bằng nhau.",
          "valueType": "choice",
          "required": true
        }
      ]
    },
    "correctFinalAnswer": {
      "a": "Đ",
      "b": "S",
      "c": "Đ",
      "d": "Đ"
    }
  },
  {
    "id": "math11-assess-q413",
    "courseId": "grade11:math",
    "moduleId": "math11-m5",
    "lessonId": "math11-kntt-l16",
    "subjectId": "math",
    "topicId": "math11-t05",
    "questionTypeId": "math11-qt16",
    "subTypeId": "math11-qt16-st-point",
    "practiceRole": "far_transfer",
    "representationType": "equation",
    "isMasteryHoldout": false,
    "content": "Tính $\\lim\\limits_{x\\to0}\\dfrac{\\sin3x}{\\sin5x}$.",
    "responseType": "short_answer",
    "validatorType": "exact",
    "outcomeIds": [
      "out-math11-m5-02"
    ],
    "correctAnswer": "3/5",
    "difficulty": "hard",
    "sourceType": "mock_exam",
    "cognitiveLevel": "application",
    "estimatedSeconds": 150,
    "acceptedAnswers": [
      "3/5",
      "$3/5$",
      "0.6",
      "0,6"
    ]
  },
  {
    "id": "math11-assess-q205",
    "courseId": "grade11:math",
    "moduleId": "math11-m6",
    "lessonId": "math11-kntt-l18",
    "subjectId": "math",
    "topicId": "math11-t06",
    "questionTypeId": "math11-qt18",
    "subTypeId": "math11-qt18-st-rules",
    "practiceRole": "guided",
    "representationType": "equation",
    "isMasteryHoldout": false,
    "content": "$2^3\\cdot2^4$ bằng:",
    "responseType": "single_choice",
    "validatorType": "choice",
    "outcomeIds": [
      "out-math11-m6-01"
    ],
    "options": [
      "$2^{12}$",
      "$2^7$",
      "$4^7$",
      "$2$"
    ],
    "correctAnswer": "B",
    "difficulty": "easy",
    "sourceType": "mock_exam"
  },
  {
    "id": "math11-assess-q206",
    "courseId": "grade11:math",
    "moduleId": "math11-m6",
    "lessonId": "math11-kntt-l18",
    "subjectId": "math",
    "topicId": "math11-t06",
    "questionTypeId": "math11-qt18",
    "subTypeId": "math11-qt18-st-rules",
    "practiceRole": "near_transfer",
    "representationType": "equation",
    "isMasteryHoldout": false,
    "content": "$a^5/a^2$ bằng:",
    "responseType": "single_choice",
    "validatorType": "choice",
    "outcomeIds": [
      "out-math11-m6-01"
    ],
    "options": [
      "$a^{10}$",
      "$a^7$",
      "$a^3$",
      "$a^{-3}$"
    ],
    "correctAnswer": "C",
    "difficulty": "medium",
    "sourceType": "mock_exam"
  },
  {
    "id": "math11-assess-q208",
    "courseId": "grade11:math",
    "moduleId": "math11-m6",
    "lessonId": "math11-kntt-l18",
    "subjectId": "math",
    "topicId": "math11-t06",
    "questionTypeId": "math11-qt18",
    "subTypeId": "math11-qt18-st-rules",
    "practiceRole": "representation_switch",
    "representationType": "text",
    "isMasteryHoldout": false,
    "content": "$16^{1/2}$ bằng:",
    "responseType": "single_choice",
    "validatorType": "choice",
    "outcomeIds": [
      "out-math11-m6-01"
    ],
    "options": [
      "$4$",
      "$8$",
      "$2$",
      "$16$"
    ],
    "correctAnswer": "A",
    "difficulty": "easy",
    "sourceType": "mock_exam"
  },
  {
    "id": "math11-assess-q217",
    "courseId": "grade11:math",
    "moduleId": "math11-m6",
    "lessonId": "math11-kntt-l19",
    "subjectId": "math",
    "topicId": "math11-t06",
    "questionTypeId": "math11-qt19",
    "subTypeId": "math11-qt19-st-definition",
    "practiceRole": "guided",
    "representationType": "equation",
    "isMasteryHoldout": false,
    "content": "$\\log_2 8$ bằng:",
    "responseType": "single_choice",
    "validatorType": "choice",
    "outcomeIds": [
      "out-math11-m6-02"
    ],
    "options": [
      "$2$",
      "$4$",
      "$3$",
      "$8$"
    ],
    "correctAnswer": "C",
    "difficulty": "easy",
    "sourceType": "mock_exam"
  },
  {
    "id": "math11-assess-q219",
    "courseId": "grade11:math",
    "moduleId": "math11-m6",
    "lessonId": "math11-kntt-l19",
    "subjectId": "math",
    "topicId": "math11-t06",
    "questionTypeId": "math11-qt19",
    "subTypeId": "math11-qt19-st-definition",
    "practiceRole": "retention",
    "representationType": "equation",
    "isMasteryHoldout": false,
    "content": "$\\log_a1$ bằng:",
    "responseType": "single_choice",
    "validatorType": "choice",
    "outcomeIds": [
      "out-math11-m6-02"
    ],
    "options": [
      "$0$",
      "$1$",
      "$a$",
      "Không xác định"
    ],
    "correctAnswer": "A",
    "difficulty": "easy",
    "sourceType": "mock_exam"
  },
  {
    "id": "math11-assess-q221",
    "courseId": "grade11:math",
    "moduleId": "math11-m6",
    "lessonId": "math11-kntt-l19",
    "subjectId": "math",
    "topicId": "math11-t06",
    "questionTypeId": "math11-qt19",
    "subTypeId": "math11-qt19-st-definition",
    "practiceRole": "misconception_check",
    "representationType": "text",
    "isMasteryHoldout": false,
    "content": "Điều kiện xác định $\\log_a x$ là:",
    "responseType": "single_choice",
    "validatorType": "choice",
    "outcomeIds": [
      "out-math11-m6-02"
    ],
    "options": [
      "$a\\ne0$",
      "$x\\ne0$",
      "$a>0,a\\ne1,x>0$",
      "$a>1,x\\ge0$"
    ],
    "correctAnswer": "C",
    "difficulty": "medium",
    "sourceType": "mock_exam"
  },
  {
    "id": "math11-assess-q223",
    "courseId": "grade11:math",
    "moduleId": "math11-m6",
    "lessonId": "math11-kntt-l19",
    "subjectId": "math",
    "topicId": "math11-t06",
    "questionTypeId": "math11-qt19",
    "subTypeId": "math11-qt19-st-properties",
    "practiceRole": "guided",
    "representationType": "equation",
    "isMasteryHoldout": false,
    "content": "$\\log_2(8\\cdot4)$ bằng:",
    "responseType": "single_choice",
    "validatorType": "choice",
    "outcomeIds": [
      "out-math11-m6-02"
    ],
    "options": [
      "$3$",
      "$4$",
      "$5$",
      "$6$"
    ],
    "correctAnswer": "C",
    "difficulty": "medium",
    "sourceType": "mock_exam"
  },
  {
    "id": "math11-assess-q229",
    "courseId": "grade11:math",
    "moduleId": "math11-m6",
    "lessonId": "math11-kntt-l20",
    "subjectId": "math",
    "topicId": "math11-t06",
    "questionTypeId": "math11-qt20",
    "subTypeId": "math11-qt20-st-properties",
    "practiceRole": "guided",
    "representationType": "graph",
    "isMasteryHoldout": false,
    "content": "Tập xác định của $y=2^x$ là:",
    "responseType": "single_choice",
    "validatorType": "choice",
    "outcomeIds": [
      "out-math11-m6-03"
    ],
    "options": [
      "$\\mathbb R$",
      "$(0;+\\infty)$",
      "$[0;+\\infty)$",
      "$\\mathbb R\\setminus\\{0\\}$"
    ],
    "correctAnswer": "A",
    "difficulty": "easy",
    "sourceType": "mock_exam"
  },
  {
    "id": "math11-assess-q244",
    "courseId": "grade11:math",
    "moduleId": "math11-m6",
    "lessonId": "math11-kntt-l21",
    "subjectId": "math",
    "topicId": "math11-t06",
    "questionTypeId": "math11-qt21",
    "subTypeId": "math11-qt21-st-equation",
    "practiceRole": "retention",
    "representationType": "equation",
    "isMasteryHoldout": false,
    "content": "$\\log_2x=4$ có nghiệm:",
    "responseType": "single_choice",
    "validatorType": "choice",
    "outcomeIds": [
      "out-math11-m6-04"
    ],
    "options": [
      "$4$",
      "$8$",
      "$12$",
      "$16$"
    ],
    "correctAnswer": "D",
    "difficulty": "medium",
    "sourceType": "mock_exam"
  },
  {
    "id": "math11-assess-q246",
    "courseId": "grade11:math",
    "moduleId": "math11-m6",
    "lessonId": "math11-kntt-l21",
    "subjectId": "math",
    "topicId": "math11-t06",
    "questionTypeId": "math11-qt21",
    "subTypeId": "math11-qt21-st-equation",
    "practiceRole": "mastery_holdout",
    "representationType": "equation",
    "isMasteryHoldout": true,
    "content": "$4^x=8$ có nghiệm:",
    "responseType": "single_choice",
    "validatorType": "choice",
    "outcomeIds": [
      "out-math11-m6-04"
    ],
    "options": [
      "$\\frac12$",
      "$\\frac32$",
      "$2$",
      "$3$"
    ],
    "correctAnswer": "B",
    "difficulty": "hard",
    "sourceType": "mock_exam"
  },
  {
    "id": "math11-assess-q252",
    "courseId": "grade11:math",
    "moduleId": "math11-m6",
    "lessonId": "math11-kntt-l21",
    "subjectId": "math",
    "topicId": "math11-t06",
    "questionTypeId": "math11-qt21",
    "subTypeId": "math11-qt21-st-inequality",
    "practiceRole": "mastery_holdout",
    "representationType": "equation",
    "isMasteryHoldout": true,
    "content": "$\\log_2(x-1)\\ge2$ có tập nghiệm:",
    "responseType": "single_choice",
    "validatorType": "choice",
    "outcomeIds": [
      "out-math11-m6-04"
    ],
    "options": [
      "$x>1$",
      "$x\\ge4$",
      "$x>5$",
      "$x\\ge5$"
    ],
    "correctAnswer": "D",
    "difficulty": "hard",
    "sourceType": "mock_exam"
  },
  {
    "id": "math11-assess-q434",
    "courseId": "grade11:math",
    "moduleId": "math11-m6",
    "lessonId": "math11-kntt-l18",
    "subjectId": "math",
    "topicId": "math11-t06",
    "questionTypeId": "math11-qt18",
    "subTypeId": "math11-qt18-st-rules",
    "practiceRole": "near_transfer",
    "representationType": "equation",
    "isMasteryHoldout": false,
    "content": "Tính $27^{2/3}\\cdot9^{-1/2}$.",
    "responseType": "short_answer",
    "validatorType": "exact",
    "outcomeIds": [
      "out-math11-m6-01"
    ],
    "correctAnswer": "3",
    "difficulty": "medium",
    "sourceType": "mock_exam",
    "cognitiveLevel": "application",
    "estimatedSeconds": 90,
    "acceptedAnswers": [
      "3",
      "3.0",
      "3,0"
    ]
  },
  {
    "id": "math11-assess-q455",
    "courseId": "grade11:math",
    "moduleId": "math11-m6",
    "lessonId": "math11-kntt-l19",
    "subjectId": "math",
    "topicId": "math11-t06",
    "questionTypeId": "math11-qt19",
    "subTypeId": "math11-qt19-st-properties",
    "practiceRole": "far_transfer",
    "representationType": "equation",
    "isMasteryHoldout": false,
    "content": "Giải $\\log_2x+\\log_4x=6$.",
    "responseType": "short_answer",
    "validatorType": "exact",
    "outcomeIds": [
      "out-math11-m6-02"
    ],
    "correctAnswer": "16",
    "difficulty": "hard",
    "sourceType": "mock_exam",
    "cognitiveLevel": "application",
    "estimatedSeconds": 150,
    "acceptedAnswers": [
      "16",
      "16.0",
      "16,0"
    ]
  },
  {
    "id": "math11-assess-q460",
    "courseId": "grade11:math",
    "moduleId": "math11-m6",
    "lessonId": "math11-kntt-l20",
    "subjectId": "math",
    "topicId": "math11-t06",
    "questionTypeId": "math11-qt20",
    "subTypeId": "math11-qt20-st-properties",
    "practiceRole": "misconception_check",
    "representationType": "text",
    "isMasteryHoldout": false,
    "content": "Chọn Đúng hoặc Sai về $y=a^x$, $a>0$, $a\\ne1$.",
    "responseType": "true_false_cluster",
    "validatorType": "exact",
    "outcomeIds": [
      "out-math11-m6-03"
    ],
    "correctAnswer": "a:Đ|b:Đ|c:S|d:Đ",
    "difficulty": "medium",
    "sourceType": "mock_exam",
    "cognitiveLevel": "application",
    "estimatedSeconds": 90,
    "answerSchema": {
      "type": "true-false-cluster",
      "proofImageRequired": false,
      "autoCheckMode": "exact",
      "scoringMode": "per_field",
      "fields": [
        {
          "key": "a",
          "label": "Tập xác định là $\\mathbb R$.",
          "valueType": "choice",
          "required": true
        },
        {
          "key": "b",
          "label": "Tập giá trị là $(0;+\\infty)$.",
          "valueType": "choice",
          "required": true
        },
        {
          "key": "c",
          "label": "Đồ thị đi qua $(1;0)$.",
          "valueType": "choice",
          "required": true
        },
        {
          "key": "d",
          "label": "Đồ thị có tiệm cận ngang $y=0$.",
          "valueType": "choice",
          "required": true
        }
      ]
    },
    "correctFinalAnswer": {
      "a": "Đ",
      "b": "Đ",
      "c": "S",
      "d": "Đ"
    }
  },
  {
    "id": "math11-assess-q466",
    "courseId": "grade11:math",
    "moduleId": "math11-m6",
    "lessonId": "math11-kntt-l20",
    "subjectId": "math",
    "topicId": "math11-t06",
    "questionTypeId": "math11-qt20",
    "subTypeId": "math11-qt20-st-model",
    "practiceRole": "misconception_check",
    "representationType": "text",
    "isMasteryHoldout": false,
    "content": "Chọn Đúng hoặc Sai về mô hình $A_n=A_0(1+r)^n$.",
    "responseType": "true_false_cluster",
    "validatorType": "exact",
    "outcomeIds": [
      "out-math11-m6-03"
    ],
    "correctAnswer": "a:Đ|b:Đ|c:S|d:Đ",
    "difficulty": "medium",
    "sourceType": "mock_exam",
    "cognitiveLevel": "application",
    "estimatedSeconds": 90,
    "answerSchema": {
      "type": "true-false-cluster",
      "proofImageRequired": false,
      "autoCheckMode": "exact",
      "scoringMode": "per_field",
      "fields": [
        {
          "key": "a",
          "label": "$A_0$ là giá trị ban đầu.",
          "valueType": "choice",
          "required": true
        },
        {
          "key": "b",
          "label": "$n$ là số chu kì.",
          "valueType": "choice",
          "required": true
        },
        {
          "key": "c",
          "label": "Tăng 5% thì $r=5$.",
          "valueType": "choice",
          "required": true
        },
        {
          "key": "d",
          "label": "Nếu giảm 20% mỗi chu kì thì hệ số còn lại là $0{,}8$.",
          "valueType": "choice",
          "required": true
        }
      ]
    },
    "correctFinalAnswer": {
      "a": "Đ",
      "b": "Đ",
      "c": "S",
      "d": "Đ"
    }
  },
  {
    "id": "math11-assess-q473",
    "courseId": "grade11:math",
    "moduleId": "math11-m6",
    "lessonId": "math11-kntt-l21",
    "subjectId": "math",
    "topicId": "math11-t06",
    "questionTypeId": "math11-qt21",
    "subTypeId": "math11-qt21-st-equation",
    "practiceRole": "far_transfer",
    "representationType": "equation",
    "isMasteryHoldout": false,
    "content": "Tính tổng các nghiệm của $4^x-5\\cdot2^x+4=0$.",
    "responseType": "short_answer",
    "validatorType": "exact",
    "outcomeIds": [
      "out-math11-m6-04"
    ],
    "correctAnswer": "2",
    "difficulty": "hard",
    "sourceType": "mock_exam",
    "cognitiveLevel": "application",
    "estimatedSeconds": 150,
    "acceptedAnswers": [
      "2",
      "2.0",
      "2,0"
    ]
  },
  {
    "id": "math11-assess-q253",
    "courseId": "grade11:math",
    "moduleId": "math11-m7",
    "lessonId": "math11-kntt-l22",
    "subjectId": "math",
    "topicId": "math11-t07",
    "questionTypeId": "math11-qt22",
    "subTypeId": "math11-qt22-st-angle",
    "practiceRole": "guided",
    "representationType": "equation",
    "isMasteryHoldout": false,
    "content": "Góc giữa hai đường thẳng song song bằng:",
    "responseType": "single_choice",
    "validatorType": "choice",
    "outcomeIds": [
      "out-math11-m7-01"
    ],
    "options": [
      "$0^\\circ$",
      "$30^\\circ$",
      "$60^\\circ$",
      "$90^\\circ$"
    ],
    "correctAnswer": "A",
    "difficulty": "easy",
    "sourceType": "mock_exam"
  },
  {
    "id": "math11-assess-q259",
    "courseId": "grade11:math",
    "moduleId": "math11-m7",
    "lessonId": "math11-kntt-l22",
    "subjectId": "math",
    "topicId": "math11-t07",
    "questionTypeId": "math11-qt22",
    "subTypeId": "math11-qt22-st-proof",
    "practiceRole": "guided",
    "representationType": "equation",
    "isMasteryHoldout": false,
    "content": "Nếu hai vectơ chỉ phương có tích vô hướng bằng 0 thì hai đường:",
    "responseType": "single_choice",
    "validatorType": "choice",
    "outcomeIds": [
      "out-math11-m7-01"
    ],
    "options": [
      "Song song",
      "Vuông góc",
      "Trùng nhau",
      "Cắt với góc $60^\\circ$"
    ],
    "correctAnswer": "B",
    "difficulty": "medium",
    "sourceType": "mock_exam"
  },
  {
    "id": "math11-assess-q265",
    "courseId": "grade11:math",
    "moduleId": "math11-m7",
    "lessonId": "math11-kntt-l23",
    "subjectId": "math",
    "topicId": "math11-t07",
    "questionTypeId": "math11-qt23",
    "subTypeId": "math11-qt23-st-condition",
    "practiceRole": "guided",
    "representationType": "text",
    "isMasteryHoldout": false,
    "content": "Để chứng minh $d\\perp(P)$, cần $d$ vuông góc với:",
    "responseType": "single_choice",
    "validatorType": "choice",
    "outcomeIds": [
      "out-math11-m7-02"
    ],
    "options": [
      "Một đường bất kỳ",
      "Hai đường cắt nhau trong $(P)$",
      "Mọi điểm của $(P)$",
      "Một đường ngoài $(P)$"
    ],
    "correctAnswer": "B",
    "difficulty": "easy",
    "sourceType": "mock_exam"
  },
  {
    "id": "math11-assess-q277",
    "courseId": "grade11:math",
    "moduleId": "math11-m7",
    "lessonId": "math11-kntt-l24",
    "subjectId": "math",
    "topicId": "math11-t07",
    "questionTypeId": "math11-qt24",
    "subTypeId": "math11-qt24-st-projection",
    "practiceRole": "guided",
    "representationType": "equation",
    "isMasteryHoldout": false,
    "content": "Hình chiếu vuông góc của điểm $M$ lên $(P)$ là:",
    "responseType": "single_choice",
    "validatorType": "choice",
    "outcomeIds": [
      "out-math11-m7-03"
    ],
    "options": [
      "Điểm bất kỳ",
      "Chân đường vuông góc từ $M$",
      "Trung điểm của $M$",
      "Giao tuyến"
    ],
    "correctAnswer": "B",
    "difficulty": "easy",
    "sourceType": "mock_exam"
  },
  {
    "id": "math11-assess-q280",
    "courseId": "grade11:math",
    "moduleId": "math11-m7",
    "lessonId": "math11-kntt-l24",
    "subjectId": "math",
    "topicId": "math11-t07",
    "questionTypeId": "math11-qt24",
    "subTypeId": "math11-qt24-st-projection",
    "practiceRole": "misconception_check",
    "representationType": "equation",
    "isMasteryHoldout": false,
    "content": "Góc giữa đường vuông góc mặt phẳng và mặt phẳng bằng:",
    "responseType": "single_choice",
    "validatorType": "choice",
    "outcomeIds": [
      "out-math11-m7-03"
    ],
    "options": [
      "$0^\\circ$",
      "$45^\\circ$",
      "$60^\\circ$",
      "$90^\\circ$"
    ],
    "correctAnswer": "D",
    "difficulty": "medium",
    "sourceType": "mock_exam"
  },
  {
    "id": "math11-assess-q292",
    "courseId": "grade11:math",
    "moduleId": "math11-m7",
    "lessonId": "math11-kntt-l25",
    "subjectId": "math",
    "topicId": "math11-t07",
    "questionTypeId": "math11-qt25",
    "subTypeId": "math11-qt25-st-condition",
    "practiceRole": "misconception_check",
    "representationType": "text",
    "isMasteryHoldout": false,
    "content": "Trong hình hộp chữ nhật, hai mặt kề nhau:",
    "responseType": "single_choice",
    "validatorType": "choice",
    "outcomeIds": [
      "out-math11-m7-04"
    ],
    "options": [
      "Song song",
      "Vuông góc",
      "Trùng",
      "Tạo góc $60^\\circ$"
    ],
    "correctAnswer": "B",
    "difficulty": "medium",
    "sourceType": "mock_exam"
  },
  {
    "id": "math11-assess-q304",
    "courseId": "grade11:math",
    "moduleId": "math11-m7",
    "lessonId": "math11-kntt-l26",
    "subjectId": "math",
    "topicId": "math11-t07",
    "questionTypeId": "math11-qt26",
    "subTypeId": "math11-qt26-st-basic",
    "practiceRole": "misconception_check",
    "representationType": "equation",
    "isMasteryHoldout": false,
    "content": "Khoảng cách giữa đường $d\\parallel(P)$ và $(P)$ bằng:",
    "responseType": "single_choice",
    "validatorType": "choice",
    "outcomeIds": [
      "out-math11-m7-05"
    ],
    "options": [
      "Độ dài $d$",
      "Khoảng cách từ một điểm của $d$ đến $(P)$",
      "$0$ luôn",
      "Góc giữa chúng"
    ],
    "correctAnswer": "B",
    "difficulty": "medium",
    "sourceType": "mock_exam"
  },
  {
    "id": "math11-assess-q316",
    "courseId": "grade11:math",
    "moduleId": "math11-m7",
    "lessonId": "math11-kntt-l27",
    "subjectId": "math",
    "topicId": "math11-t07",
    "questionTypeId": "math11-qt27",
    "subTypeId": "math11-qt27-st-prism",
    "practiceRole": "misconception_check",
    "representationType": "equation",
    "isMasteryHoldout": false,
    "content": "Lập phương cạnh $a$ có thể tích:",
    "responseType": "single_choice",
    "validatorType": "choice",
    "outcomeIds": [
      "out-math11-m7-06"
    ],
    "options": [
      "$a^2$",
      "$a^3$",
      "$6a^2$",
      "$4a^3$"
    ],
    "correctAnswer": "B",
    "difficulty": "medium",
    "sourceType": "mock_exam"
  },
  {
    "id": "math11-assess-q318",
    "courseId": "grade11:math",
    "moduleId": "math11-m7",
    "lessonId": "math11-kntt-l27",
    "subjectId": "math",
    "topicId": "math11-t07",
    "questionTypeId": "math11-qt27",
    "subTypeId": "math11-qt27-st-prism",
    "practiceRole": "mastery_holdout",
    "representationType": "diagram",
    "isMasteryHoldout": true,
    "content": "Lăng trụ có thể tích 48, diện tích đáy 8. Chiều cao là:",
    "responseType": "single_choice",
    "validatorType": "choice",
    "outcomeIds": [
      "out-math11-m7-06"
    ],
    "options": [
      "$4$",
      "$5$",
      "$6$",
      "$8$"
    ],
    "correctAnswer": "C",
    "difficulty": "hard",
    "sourceType": "mock_exam"
  },
  {
    "id": "math11-assess-q501",
    "courseId": "grade11:math",
    "moduleId": "math11-m7",
    "lessonId": "math11-kntt-l23",
    "subjectId": "math",
    "topicId": "math11-t07",
    "questionTypeId": "math11-qt23",
    "subTypeId": "math11-qt23-st-three-lines",
    "practiceRole": "representation_switch",
    "representationType": "text",
    "isMasteryHoldout": false,
    "content": "$SH\\perp(P)$, $SM=13$, $SH=5$. Tính độ dài hình chiếu $HM$ của $SM$ trên $(P)$.",
    "responseType": "short_answer",
    "validatorType": "exact",
    "acceptedAnswers": [
      "12",
      "$12$",
      "12"
    ],
    "outcomeIds": [
      "out-math11-m7-02"
    ],
    "correctAnswer": "12",
    "difficulty": "medium",
    "sourceType": "mock_exam",
    "cognitiveLevel": "application",
    "estimatedSeconds": 100
  },
  {
    "id": "math11-assess-q515",
    "courseId": "grade11:math",
    "moduleId": "math11-m7",
    "lessonId": "math11-kntt-l24",
    "subjectId": "math",
    "topicId": "math11-t07",
    "questionTypeId": "math11-qt24",
    "subTypeId": "math11-qt24-st-angle",
    "practiceRole": "far_transfer",
    "representationType": "equation",
    "isMasteryHoldout": false,
    "content": "Hình chóp có $SA\\perp(ABC)$, $SA=AB$. Tính góc giữa $SB$ và đáy theo độ.",
    "responseType": "short_answer",
    "validatorType": "exact",
    "acceptedAnswers": [
      "45",
      "$45$",
      "45"
    ],
    "outcomeIds": [
      "out-math11-m7-03"
    ],
    "correctAnswer": "45",
    "difficulty": "hard",
    "sourceType": "mock_exam",
    "cognitiveLevel": "application",
    "estimatedSeconds": 180
  },
  {
    "id": "math11-assess-q522",
    "courseId": "grade11:math",
    "moduleId": "math11-m7",
    "lessonId": "math11-kntt-l25",
    "subjectId": "math",
    "topicId": "math11-t07",
    "questionTypeId": "math11-qt25",
    "subTypeId": "math11-qt25-st-condition",
    "practiceRole": "mastery_holdout",
    "representationType": "diagram",
    "isMasteryHoldout": true,
    "content": "Hai mặt phẳng có góc nhị diện $90^\\circ$. Tính cosin góc giữa chúng.",
    "responseType": "short_answer",
    "validatorType": "exact",
    "acceptedAnswers": [
      "0",
      "$0$",
      "0"
    ],
    "outcomeIds": [
      "out-math11-m7-04"
    ],
    "correctAnswer": "0",
    "difficulty": "hard",
    "sourceType": "mock_exam",
    "cognitiveLevel": "application",
    "estimatedSeconds": 180
  },
  {
    "id": "math11-assess-q325",
    "courseId": "grade11:math",
    "moduleId": "math11-m8",
    "lessonId": "math11-kntt-l28",
    "subjectId": "math",
    "topicId": "math11-t08",
    "questionTypeId": "math11-qt28",
    "subTypeId": "math11-qt28-st-events",
    "practiceRole": "guided",
    "representationType": "text",
    "isMasteryHoldout": false,
    "content": "Biến cố $A\\cup B$ xảy ra khi:",
    "responseType": "single_choice",
    "validatorType": "choice",
    "outcomeIds": [
      "out-math11-m8-01"
    ],
    "options": [
      "Chỉ A",
      "Chỉ B",
      "Ít nhất một trong A, B",
      "Cả hai không xảy ra"
    ],
    "correctAnswer": "C",
    "difficulty": "easy",
    "sourceType": "mock_exam"
  },
  {
    "id": "math11-assess-q331",
    "courseId": "grade11:math",
    "moduleId": "math11-m8",
    "lessonId": "math11-kntt-l28",
    "subjectId": "math",
    "topicId": "math11-t08",
    "questionTypeId": "math11-qt28",
    "subTypeId": "math11-qt28-st-independent",
    "practiceRole": "guided",
    "representationType": "text",
    "isMasteryHoldout": false,
    "content": "Hai biến cố xung khắc có giao bằng:",
    "responseType": "single_choice",
    "validatorType": "choice",
    "outcomeIds": [
      "out-math11-m8-01"
    ],
    "options": [
      "Không gian mẫu",
      "$\\varnothing$",
      "$A\\cup B$",
      "$\\overline A$"
    ],
    "correctAnswer": "B",
    "difficulty": "medium",
    "sourceType": "mock_exam"
  },
  {
    "id": "math11-assess-q337",
    "courseId": "grade11:math",
    "moduleId": "math11-m8",
    "lessonId": "math11-kntt-l29",
    "subjectId": "math",
    "topicId": "math11-t08",
    "questionTypeId": "math11-qt29",
    "subTypeId": "math11-qt29-st-formula",
    "practiceRole": "guided",
    "representationType": "equation",
    "isMasteryHoldout": false,
    "content": "$P(A)=0{,}5$, $P(B)=0{,}4$, $P(A\\cap B)=0{,}2$. $P(A\\cup B)$ là:",
    "responseType": "single_choice",
    "validatorType": "choice",
    "outcomeIds": [
      "out-math11-m8-02"
    ],
    "options": [
      "$0{,}3$",
      "$0{,}5$",
      "$0{,}7$",
      "$0{,}9$"
    ],
    "correctAnswer": "C",
    "difficulty": "easy",
    "sourceType": "mock_exam"
  },
  {
    "id": "math11-assess-q338",
    "courseId": "grade11:math",
    "moduleId": "math11-m8",
    "lessonId": "math11-kntt-l29",
    "subjectId": "math",
    "topicId": "math11-t08",
    "questionTypeId": "math11-qt29",
    "subTypeId": "math11-qt29-st-formula",
    "practiceRole": "near_transfer",
    "representationType": "text",
    "isMasteryHoldout": false,
    "content": "A, B xung khắc, $P(A)=0{,}3$, $P(B)=0{,}4$. $P(A\\cup B)$ là:",
    "responseType": "single_choice",
    "validatorType": "choice",
    "outcomeIds": [
      "out-math11-m8-02"
    ],
    "options": [
      "$0{,}1$",
      "$0{,}7$",
      "$0{,}12$",
      "$1$"
    ],
    "correctAnswer": "B",
    "difficulty": "easy",
    "sourceType": "mock_exam"
  },
  {
    "id": "math11-assess-q340",
    "courseId": "grade11:math",
    "moduleId": "math11-m8",
    "lessonId": "math11-kntt-l29",
    "subjectId": "math",
    "topicId": "math11-t08",
    "questionTypeId": "math11-qt29",
    "subTypeId": "math11-qt29-st-formula",
    "practiceRole": "misconception_check",
    "representationType": "equation",
    "isMasteryHoldout": false,
    "content": "$P(A\\cup B)=0{,}8$, $P(A)=0{,}5$, $P(B)=0{,}6$. $P(A\\cap B)$ là:",
    "responseType": "single_choice",
    "validatorType": "choice",
    "outcomeIds": [
      "out-math11-m8-02"
    ],
    "options": [
      "$0{,}1$",
      "$0{,}2$",
      "$0{,}4$",
      "$0{,}3$"
    ],
    "correctAnswer": "D",
    "difficulty": "medium",
    "sourceType": "mock_exam"
  },
  {
    "id": "math11-assess-q344",
    "courseId": "grade11:math",
    "moduleId": "math11-m8",
    "lessonId": "math11-kntt-l29",
    "subjectId": "math",
    "topicId": "math11-t08",
    "questionTypeId": "math11-qt29",
    "subTypeId": "math11-qt29-st-counting",
    "practiceRole": "near_transfer",
    "representationType": "text",
    "isMasteryHoldout": false,
    "content": "Rút một lá từ bộ 52 lá. Xác suất rút vua hoặc hậu:",
    "responseType": "single_choice",
    "validatorType": "choice",
    "outcomeIds": [
      "out-math11-m8-02"
    ],
    "options": [
      "$1/13$",
      "$4/13$",
      "$1/4$",
      "$2/13$"
    ],
    "correctAnswer": "D",
    "difficulty": "medium",
    "sourceType": "mock_exam"
  },
  {
    "id": "math11-assess-q349",
    "courseId": "grade11:math",
    "moduleId": "math11-m8",
    "lessonId": "math11-kntt-l30",
    "subjectId": "math",
    "topicId": "math11-t08",
    "questionTypeId": "math11-qt30",
    "subTypeId": "math11-qt30-st-independent",
    "practiceRole": "guided",
    "representationType": "equation",
    "isMasteryHoldout": false,
    "content": "A, B độc lập, $P(A)=0{,}5$, $P(B)=0{,}4$. $P(A\\cap B)$ là:",
    "responseType": "single_choice",
    "validatorType": "choice",
    "outcomeIds": [
      "out-math11-m8-03"
    ],
    "options": [
      "$0{,}1$",
      "$0{,}2$",
      "$0{,}4$",
      "$0{,}9$"
    ],
    "correctAnswer": "B",
    "difficulty": "easy",
    "sourceType": "mock_exam"
  },
  {
    "id": "math11-assess-q352",
    "courseId": "grade11:math",
    "moduleId": "math11-m8",
    "lessonId": "math11-kntt-l30",
    "subjectId": "math",
    "topicId": "math11-t08",
    "questionTypeId": "math11-qt30",
    "subTypeId": "math11-qt30-st-independent",
    "practiceRole": "misconception_check",
    "representationType": "equation",
    "isMasteryHoldout": false,
    "content": "Hai biến cố độc lập có xác suất $0{,}8$ và $0{,}8$. Xác suất cả hai xảy ra:",
    "responseType": "single_choice",
    "validatorType": "choice",
    "outcomeIds": [
      "out-math11-m8-03"
    ],
    "options": [
      "$0{,}64$",
      "$0{,}8$",
      "$1{,}6$",
      "$0{,}16$"
    ],
    "correctAnswer": "A",
    "difficulty": "medium",
    "sourceType": "mock_exam"
  },
  {
    "id": "math11-assess-q353",
    "courseId": "grade11:math",
    "moduleId": "math11-m8",
    "lessonId": "math11-kntt-l30",
    "subjectId": "math",
    "topicId": "math11-t08",
    "questionTypeId": "math11-qt30",
    "subTypeId": "math11-qt30-st-independent",
    "practiceRole": "retention",
    "representationType": "diagram",
    "isMasteryHoldout": false,
    "content": "A, B độc lập, $P(A)=0{,}6$, $P(B)=0{,}5$. Xác suất giao:",
    "responseType": "single_choice",
    "validatorType": "choice",
    "outcomeIds": [
      "out-math11-m8-03"
    ],
    "options": [
      "$0{,}1$",
      "$0{,}3$",
      "$0{,}5$",
      "$1{,}1$"
    ],
    "correctAnswer": "B",
    "difficulty": "medium",
    "sourceType": "mock_exam"
  },
  {
    "id": "math11-assess-q360",
    "courseId": "grade11:math",
    "moduleId": "math11-m8",
    "lessonId": "math11-kntt-l30",
    "subjectId": "math",
    "topicId": "math11-t08",
    "questionTypeId": "math11-qt30",
    "subTypeId": "math11-qt30-st-tree",
    "practiceRole": "mastery_holdout",
    "representationType": "diagram",
    "isMasteryHoldout": true,
    "content": "Hai sản phẩm độc lập, mỗi sản phẩm lỗi xác suất $0{,}1$. Xác suất ít nhất một sản phẩm lỗi:",
    "responseType": "single_choice",
    "validatorType": "choice",
    "outcomeIds": [
      "out-math11-m8-03"
    ],
    "options": [
      "$0{,}19$",
      "$0{,}1$",
      "$0{,}2$",
      "$0{,}01$"
    ],
    "correctAnswer": "A",
    "difficulty": "hard",
    "sourceType": "mock_exam"
  },
  {
    "id": "math11-assess-q557",
    "courseId": "grade11:math",
    "moduleId": "math11-m8",
    "lessonId": "math11-kntt-l28",
    "subjectId": "math",
    "topicId": "math11-t08",
    "questionTypeId": "math11-qt28",
    "subTypeId": "math11-qt28-st-events",
    "practiceRole": "far_transfer",
    "representationType": "equation",
    "isMasteryHoldout": false,
    "content": "Không gian mẫu có 20 kết quả đồng khả năng, biến cố $A$ có 7 kết quả. Biến cố đối của $A$ có bao nhiêu kết quả?",
    "responseType": "short_answer",
    "validatorType": "exact",
    "acceptedAnswers": [
      "13",
      "$13$",
      "13"
    ],
    "outcomeIds": [
      "out-math11-m8-01"
    ],
    "correctAnswer": "13",
    "difficulty": "hard",
    "sourceType": "mock_exam",
    "cognitiveLevel": "application",
    "estimatedSeconds": 180
  },
  {
    "id": "math11-assess-q566",
    "courseId": "grade11:math",
    "moduleId": "math11-m8",
    "lessonId": "math11-kntt-l29",
    "subjectId": "math",
    "topicId": "math11-t08",
    "questionTypeId": "math11-qt29",
    "subTypeId": "math11-qt29-st-formula",
    "practiceRole": "near_transfer",
    "representationType": "equation",
    "isMasteryHoldout": false,
    "content": "$P(A\\cup B)=0{,}8$, $P(A)=0{,}5$, $P(B)=0{,}4$. Tính $P(A\\cap B)$.",
    "responseType": "short_answer",
    "validatorType": "exact",
    "acceptedAnswers": [
      "0.1",
      "$0.1$",
      "0,1"
    ],
    "outcomeIds": [
      "out-math11-m8-02"
    ],
    "correctAnswer": "0.1",
    "difficulty": "medium",
    "sourceType": "mock_exam",
    "cognitiveLevel": "application",
    "estimatedSeconds": 100
  },
  {
    "id": "math11-assess-q361",
    "courseId": "grade11:math",
    "moduleId": "math11-m9",
    "lessonId": "math11-kntt-l31",
    "subjectId": "math",
    "topicId": "math11-t09",
    "questionTypeId": "math11-qt31",
    "subTypeId": "math11-qt31-st-definition",
    "practiceRole": "guided",
    "representationType": "equation",
    "isMasteryHoldout": false,
    "content": "Công thức định nghĩa đạo hàm của $f$ tại $x_0$ là:",
    "responseType": "single_choice",
    "validatorType": "choice",
    "outcomeIds": [
      "out-math11-m9-01"
    ],
    "options": [
      "$\\lim\\limits_{x\\to x_0}\\dfrac{f(x)}{x}$",
      "$\\lim\\limits_{x\\to x_0}\\dfrac{f(x)-f(x_0)}{x-x_0}$",
      "$f(x_0)$",
      "$\\dfrac{f(x)-f(x_0)}{x-x_0}$ không cần giới hạn"
    ],
    "correctAnswer": "B",
    "difficulty": "easy",
    "sourceType": "mock_exam"
  },
  {
    "id": "math11-assess-q364",
    "courseId": "grade11:math",
    "moduleId": "math11-m9",
    "lessonId": "math11-kntt-l31",
    "subjectId": "math",
    "topicId": "math11-t09",
    "questionTypeId": "math11-qt31",
    "subTypeId": "math11-qt31-st-definition",
    "practiceRole": "misconception_check",
    "representationType": "text",
    "isMasteryHoldout": false,
    "content": "Đạo hàm của hàm số $f(x)=3x+1$ tại mọi điểm bằng:",
    "responseType": "single_choice",
    "validatorType": "choice",
    "outcomeIds": [
      "out-math11-m9-01"
    ],
    "options": [
      "$0$",
      "$1$",
      "$2$",
      "$3$"
    ],
    "correctAnswer": "D",
    "difficulty": "medium",
    "sourceType": "mock_exam"
  },
  {
    "id": "math11-assess-q373",
    "courseId": "grade11:math",
    "moduleId": "math11-m9",
    "lessonId": "math11-kntt-l32",
    "subjectId": "math",
    "topicId": "math11-t09",
    "questionTypeId": "math11-qt32",
    "subTypeId": "math11-qt32-st-elementary",
    "practiceRole": "guided",
    "representationType": "equation",
    "isMasteryHoldout": false,
    "content": "Đạo hàm của $y=x^5$ là:",
    "responseType": "single_choice",
    "validatorType": "choice",
    "outcomeIds": [
      "out-math11-m9-02"
    ],
    "options": [
      "$x^4$",
      "$5x^4$",
      "$5x$",
      "$x^6$"
    ],
    "correctAnswer": "B",
    "difficulty": "easy",
    "sourceType": "mock_exam"
  },
  {
    "id": "math11-assess-q376",
    "courseId": "grade11:math",
    "moduleId": "math11-m9",
    "lessonId": "math11-kntt-l32",
    "subjectId": "math",
    "topicId": "math11-t09",
    "questionTypeId": "math11-qt32",
    "subTypeId": "math11-qt32-st-elementary",
    "practiceRole": "misconception_check",
    "representationType": "text",
    "isMasteryHoldout": false,
    "content": "Đạo hàm của $y=\\cos x$ là:",
    "responseType": "single_choice",
    "validatorType": "choice",
    "outcomeIds": [
      "out-math11-m9-02"
    ],
    "options": [
      "$\\cos x$",
      "$-\\cos x$",
      "$\\sin x$",
      "$-\\sin x$"
    ],
    "correctAnswer": "D",
    "difficulty": "medium",
    "sourceType": "mock_exam"
  },
  {
    "id": "math11-assess-q385",
    "courseId": "grade11:math",
    "moduleId": "math11-m9",
    "lessonId": "math11-kntt-l33",
    "subjectId": "math",
    "topicId": "math11-t09",
    "questionTypeId": "math11-qt33",
    "subTypeId": "math11-qt33-st-second",
    "practiceRole": "guided",
    "representationType": "equation",
    "isMasteryHoldout": false,
    "content": "Đạo hàm cấp hai của $f$ được định nghĩa bởi:",
    "responseType": "single_choice",
    "validatorType": "choice",
    "outcomeIds": [
      "out-math11-m9-03"
    ],
    "options": [
      "$f^{\\prime\\prime}=(f^{\\prime})^2$",
      "$f^{\\prime\\prime}=(f^{\\prime})^{\\prime}$",
      "$f^{\\prime\\prime}=2f^{\\prime}$",
      "$f^{\\prime\\prime}=f/2$"
    ],
    "correctAnswer": "B",
    "difficulty": "easy",
    "sourceType": "mock_exam"
  },
  {
    "id": "math11-assess-q388",
    "courseId": "grade11:math",
    "moduleId": "math11-m9",
    "lessonId": "math11-kntt-l33",
    "subjectId": "math",
    "topicId": "math11-t09",
    "questionTypeId": "math11-qt33",
    "subTypeId": "math11-qt33-st-second",
    "practiceRole": "misconception_check",
    "representationType": "text",
    "isMasteryHoldout": false,
    "content": "Nếu $f(x)=e^x$ thì $f^{\\prime\\prime}(x)$ bằng:",
    "responseType": "single_choice",
    "validatorType": "choice",
    "outcomeIds": [
      "out-math11-m9-03"
    ],
    "options": [
      "$xe^x$",
      "$e^{2x}$",
      "$2e^x$",
      "$e^x$"
    ],
    "correctAnswer": "D",
    "difficulty": "medium",
    "sourceType": "mock_exam"
  },
  {
    "id": "math11-assess-q389",
    "courseId": "grade11:math",
    "moduleId": "math11-m9",
    "lessonId": "math11-kntt-l33",
    "subjectId": "math",
    "topicId": "math11-t09",
    "questionTypeId": "math11-qt33",
    "subTypeId": "math11-qt33-st-second",
    "practiceRole": "retention",
    "representationType": "equation",
    "isMasteryHoldout": false,
    "content": "Nếu $f(x)=x^4$ thì $f^{\\prime\\prime}(x)$ bằng:",
    "responseType": "single_choice",
    "validatorType": "choice",
    "outcomeIds": [
      "out-math11-m9-03"
    ],
    "options": [
      "$4x^3$",
      "$12x^2$",
      "$12x$",
      "$4x^2$"
    ],
    "correctAnswer": "B",
    "difficulty": "medium",
    "sourceType": "mock_exam"
  },
  {
    "id": "math11-assess-q391",
    "courseId": "grade11:math",
    "moduleId": "math11-m9",
    "lessonId": "math11-kntt-l33",
    "subjectId": "math",
    "topicId": "math11-t09",
    "questionTypeId": "math11-qt33",
    "subTypeId": "math11-qt33-st-mechanics",
    "practiceRole": "guided",
    "representationType": "equation",
    "isMasteryHoldout": false,
    "content": "Một vật có tọa độ $s(t)=t^3$. Gia tốc tại $t=2$ bằng:",
    "responseType": "single_choice",
    "validatorType": "choice",
    "outcomeIds": [
      "out-math11-m9-03"
    ],
    "options": [
      "$6$",
      "$8$",
      "$12$",
      "$24$"
    ],
    "correctAnswer": "C",
    "difficulty": "medium",
    "sourceType": "mock_exam"
  },
  {
    "id": "math11-assess-q396",
    "courseId": "grade11:math",
    "moduleId": "math11-m9",
    "lessonId": "math11-kntt-l33",
    "subjectId": "math",
    "topicId": "math11-t09",
    "questionTypeId": "math11-qt33",
    "subTypeId": "math11-qt33-st-mechanics",
    "practiceRole": "mastery_holdout",
    "representationType": "equation",
    "isMasteryHoldout": true,
    "content": "Nếu $f(x)=x^4-2x^2$ thì $f^{\\prime\\prime}(x)$ bằng:",
    "responseType": "single_choice",
    "validatorType": "choice",
    "outcomeIds": [
      "out-math11-m9-03"
    ],
    "options": [
      "$4x^3-4x$",
      "$12x^2$",
      "$12x^2+4$",
      "$12x^2-4$"
    ],
    "correctAnswer": "D",
    "difficulty": "hard",
    "sourceType": "mock_exam"
  },
  {
    "id": "math11-assess-q599",
    "courseId": "grade11:math",
    "moduleId": "math11-m9",
    "lessonId": "math11-kntt-l31",
    "subjectId": "math",
    "topicId": "math11-t09",
    "questionTypeId": "math11-qt31",
    "subTypeId": "math11-qt31-st-meaning",
    "practiceRole": "far_transfer",
    "representationType": "equation",
    "isMasteryHoldout": false,
    "content": "Tiếp tuyến của $y=x^3-2x$ tại điểm có hoành độ 1 có hệ số góc bằng bao nhiêu?",
    "responseType": "short_answer",
    "validatorType": "exact",
    "acceptedAnswers": [
      "1",
      "$1$",
      "1"
    ],
    "outcomeIds": [
      "out-math11-m9-01"
    ],
    "correctAnswer": "1",
    "difficulty": "hard",
    "sourceType": "mock_exam",
    "cognitiveLevel": "application",
    "estimatedSeconds": 180
  },
  {
    "id": "math11-assess-q602",
    "courseId": "grade11:math",
    "moduleId": "math11-m9",
    "lessonId": "math11-kntt-l32",
    "subjectId": "math",
    "topicId": "math11-t09",
    "questionTypeId": "math11-qt32",
    "subTypeId": "math11-qt32-st-elementary",
    "practiceRole": "near_transfer",
    "representationType": "text",
    "isMasteryHoldout": false,
    "content": "Tính $y^{\\prime}(\\pi/2)$ với $y=\\sin x+\\cos x$.",
    "responseType": "short_answer",
    "validatorType": "exact",
    "acceptedAnswers": [
      "-1",
      "$-1$",
      "-1"
    ],
    "outcomeIds": [
      "out-math11-m9-02"
    ],
    "correctAnswer": "-1",
    "difficulty": "medium",
    "sourceType": "mock_exam",
    "cognitiveLevel": "application",
    "estimatedSeconds": 100
  },
  {
    "id": "math11-assess-q617",
    "courseId": "grade11:math",
    "moduleId": "math11-m9",
    "lessonId": "math11-kntt-l33",
    "subjectId": "math",
    "topicId": "math11-t09",
    "questionTypeId": "math11-qt33",
    "subTypeId": "math11-qt33-st-second",
    "practiceRole": "far_transfer",
    "representationType": "equation",
    "isMasteryHoldout": false,
    "content": "Tính $f^{\\prime\\prime}(1)$ với $f(x)=xe^x$.",
    "responseType": "short_answer",
    "validatorType": "exact",
    "acceptedAnswers": [
      "3e",
      "$3e$",
      "3e"
    ],
    "outcomeIds": [
      "out-math11-m9-03"
    ],
    "correctAnswer": "3e",
    "difficulty": "hard",
    "sourceType": "mock_exam",
    "cognitiveLevel": "application",
    "estimatedSeconds": 180
  }
];

export const g11MathAssessmentSolutions: Solution[] = [
  {
    "id": "math11-assess-s001",
    "courseId": "grade11:math",
    "moduleId": "math11-m1",
    "questionId": "math11-assess-q001",
    "recognition": "Dùng hệ thức $\\sin^2\\alpha+\\cos^2\\alpha=1$ và xét dấu theo góc phần tư.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Lập luận",
        "explanation": "$\\cos^2\\alpha=1-\\frac9{25}=\\frac{16}{25}$ nên $|\\cos\\alpha|=\\frac45$."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "$\\alpha$ thuộc góc phần tư II nên $\\cos\\alpha=-\\frac45$."
      }
    ],
    "finalAnswer": "B",
    "commonMistakes": [
      "Lấy căn dương mà không xét góc phần tư."
    ],
    "reviewSuggestions": [
      "Ôn bảng dấu lượng giác trên đường tròn."
    ]
  },
  {
    "id": "math11-assess-s002",
    "courseId": "grade11:math",
    "moduleId": "math11-m1",
    "questionId": "math11-assess-q002",
    "recognition": "Hai góc cùng tia cuối nếu sai khác một bội của $2\\pi$.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Lập luận",
        "explanation": "$\\frac{13\\pi}{6}=2\\pi+\\frac\\pi6$."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Góc cần tìm là $\\frac\\pi6$."
      }
    ],
    "finalAnswer": "A",
    "commonMistakes": [
      "Trừ $\\pi$ thay vì một vòng $2\\pi$."
    ],
    "reviewSuggestions": [
      "Ôn số đo tổng quát của góc lượng giác."
    ]
  },
  {
    "id": "math11-assess-s009",
    "courseId": "grade11:math",
    "moduleId": "math11-m1",
    "questionId": "math11-assess-q009",
    "recognition": "Cộng một vòng $2\\pi$ để đưa góc âm về khoảng chuẩn.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Lập luận",
        "explanation": "$-\\frac{7\\pi}{6}+2\\pi=\\frac{5\\pi}{6}$."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Góc dương nhỏ nhất là $\\frac{5\\pi}{6}$."
      }
    ],
    "finalAnswer": "B",
    "commonMistakes": [
      "Đổi dấu góc thay vì cộng $2\\pi$."
    ],
    "reviewSuggestions": [
      "Ôn góc cùng tia cuối."
    ]
  },
  {
    "id": "math11-assess-s013",
    "courseId": "grade11:math",
    "moduleId": "math11-m1",
    "questionId": "math11-assess-q013",
    "recognition": "Trừ các vòng đầy đủ khỏi $\\frac{11\\pi}{2}$.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Lập luận",
        "explanation": "$\\frac{11\\pi}{2}-2\\cdot2\\pi=\\frac{3\\pi}{2}$."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Góc trong khoảng chuẩn là $\\frac{3\\pi}{2}$."
      }
    ],
    "finalAnswer": "D",
    "commonMistakes": [
      "Lấy dư theo $\\pi$ thay vì $2\\pi$."
    ],
    "reviewSuggestions": [
      "Ôn chuẩn hóa góc lớn."
    ]
  },
  {
    "id": "math11-assess-s015",
    "courseId": "grade11:math",
    "moduleId": "math11-m1",
    "questionId": "math11-assess-q015",
    "recognition": "Cot là nghịch đảo của tan khi hai biểu thức xác định.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Lập luận",
        "explanation": "$\\cot\\alpha=\\frac1{\\tan\\alpha}=\\frac1{-3/4}$."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Do đó $\\cot\\alpha=-\\frac43$."
      }
    ],
    "finalAnswer": "A",
    "commonMistakes": [
      "Giữ nguyên $-\\frac34$ thay vì lấy nghịch đảo."
    ],
    "reviewSuggestions": [
      "Ôn liên hệ giữa tan và cot."
    ]
  },
  {
    "id": "math11-assess-s016",
    "courseId": "grade11:math",
    "moduleId": "math11-m1",
    "questionId": "math11-assess-q016",
    "recognition": "Tìm độ lớn của sin và xét dấu ở góc phần tư IV.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Lập luận",
        "explanation": "$\\sin^2\\alpha=1-\\frac{144}{169}=\\frac{25}{169}$."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Ở phần tư IV, sin âm nên $\\sin\\alpha=-\\frac5{13}$."
      }
    ],
    "finalAnswer": "B",
    "commonMistakes": [
      "Chọn sin dương vì cos dương."
    ],
    "reviewSuggestions": [
      "Ôn dấu lượng giác theo góc phần tư."
    ]
  },
  {
    "id": "math11-assess-s019",
    "courseId": "grade11:math",
    "moduleId": "math11-m1",
    "questionId": "math11-assess-q019",
    "recognition": "Tách $75^\\circ=45^\\circ+30^\\circ$.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Lập luận",
        "explanation": "$\\sin75^\\circ=\\frac{\\sqrt2}{2}\\frac{\\sqrt3}{2}+\\frac{\\sqrt2}{2}\\frac12$."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Suy ra $\\sin75^\\circ=\\frac{\\sqrt6+\\sqrt2}{4}$."
      }
    ],
    "finalAnswer": "A",
    "commonMistakes": [
      "Dùng dấu trừ trong công thức sin của tổng."
    ],
    "reviewSuggestions": [
      "Ôn công thức cộng."
    ]
  },
  {
    "id": "math11-assess-s021",
    "courseId": "grade11:math",
    "moduleId": "math11-m1",
    "questionId": "math11-assess-q021",
    "recognition": "Áp dụng công thức góc đôi của sin.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Lập luận",
        "explanation": "$\\sin2a=2\\sin a\\cos a=2\\cdot\\frac35\\cdot\\frac45$."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Suy ra $\\sin2a=\\frac{24}{25}$."
      }
    ],
    "finalAnswer": "C",
    "commonMistakes": [
      "Quên hệ số 2."
    ],
    "reviewSuggestions": [
      "Ôn các công thức góc đôi."
    ]
  },
  {
    "id": "math11-assess-s025",
    "courseId": "grade11:math",
    "moduleId": "math11-m1",
    "questionId": "math11-assess-q025",
    "recognition": "Nhận dạng tổng hai sin.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Lập luận",
        "explanation": "$\\sin a+\\sin b=2\\sin\\frac{a+b}{2}\\cos\\frac{a-b}{2}$."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Công thức đúng là phương án A."
      }
    ],
    "finalAnswer": "A",
    "commonMistakes": [
      "Đổi vị trí sin và cos."
    ],
    "reviewSuggestions": [
      "Ôn biến đổi tổng thành tích."
    ]
  },
  {
    "id": "math11-assess-s029",
    "courseId": "grade11:math",
    "moduleId": "math11-m1",
    "questionId": "math11-assess-q029",
    "recognition": "Hàm $\\sin(ax)$ có chu kì nhỏ nhất $\\frac{2\\pi}{|a|}$.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Lập luận",
        "explanation": "Với $a=3$, $T=\\frac{2\\pi}{3}$."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Chu kì cần tìm là $\\frac{2\\pi}{3}$."
      }
    ],
    "finalAnswer": "B",
    "commonMistakes": [
      "Nhân chu kì với 3 thay vì chia."
    ],
    "reviewSuggestions": [
      "Ôn chu kì của hàm lượng giác hợp."
    ]
  },
  {
    "id": "math11-assess-s030",
    "courseId": "grade11:math",
    "moduleId": "math11-m1",
    "questionId": "math11-assess-q030",
    "recognition": "Hàm chẵn thỏa $f(-x)=f(x)$.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Lập luận",
        "explanation": "$\\cos(-x)=\\cos x$, còn sin, tan và cot là các hàm lẻ."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Hàm chẵn là $y=\\cos x$."
      }
    ],
    "finalAnswer": "A",
    "commonMistakes": [
      "Nhầm tính đối xứng qua trục tung với qua gốc."
    ],
    "reviewSuggestions": [
      "Ôn tính chẵn lẻ của bốn hàm lượng giác."
    ]
  },
  {
    "id": "math11-assess-s035",
    "courseId": "grade11:math",
    "moduleId": "math11-m1",
    "questionId": "math11-assess-q035",
    "recognition": "Hàm tan đi qua gốc, chu kì $\\pi$ và có các tiệm cận đứng đã nêu.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Lập luận",
        "explanation": "$\\tan0=0$ và tan không xác định tại $\\frac\\pi2+k\\pi$."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Đồ thị là $y=\\tan x$."
      }
    ],
    "finalAnswer": "C",
    "commonMistakes": [
      "Nhầm tan với cot vì cùng chu kì."
    ],
    "reviewSuggestions": [
      "Ôn đồ thị tan và cot."
    ]
  },
  {
    "id": "math11-assess-s037",
    "courseId": "grade11:math",
    "moduleId": "math11-m1",
    "questionId": "math11-assess-q037",
    "recognition": "Biên độ 2 loại các hàm hệ số 1; chiều tăng tại gốc xác định dấu.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Lập luận",
        "explanation": "$2\\sin0=0$ và đạo hàm/chiều biến thiên quanh 0 là dương."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Hàm phù hợp là $y=2\\sin x$."
      }
    ],
    "finalAnswer": "A",
    "commonMistakes": [
      "Nhầm hệ số ngoài với hệ số làm đổi chu kì."
    ],
    "reviewSuggestions": [
      "Ôn ảnh hưởng của hệ số lên đồ thị sin."
    ]
  },
  {
    "id": "math11-assess-s040",
    "courseId": "grade11:math",
    "moduleId": "math11-m1",
    "questionId": "math11-assess-q040",
    "recognition": "Đưa $\\sqrt3$ về $\\tan\\frac\\pi3$.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Lập luận",
        "explanation": "$\\tan x=\\tan\\frac\\pi3$ nên $x=\\frac\\pi3+k\\pi$."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Nghiệm là phương án C."
      }
    ],
    "finalAnswer": "C",
    "commonMistakes": [
      "Dùng chu kì $2\\pi$ cho hàm tan."
    ],
    "reviewSuggestions": [
      "Ôn phương trình tan cơ bản."
    ]
  },
  {
    "id": "math11-assess-s048",
    "courseId": "grade11:math",
    "moduleId": "math11-m1",
    "questionId": "math11-assess-q048",
    "recognition": "Cos bằng $-1$ khi đối số là $\\pi+2k\\pi$.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Lập luận",
        "explanation": "$2x=\\pi+2k\\pi$."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Chia 2 được $x=\\frac\\pi2+k\\pi$."
      }
    ],
    "finalAnswer": "D",
    "commonMistakes": [
      "Giữ nguyên chu kì $2\\pi$ sau khi chia."
    ],
    "reviewSuggestions": [
      "Ôn phương trình cos chứa góc bội."
    ]
  },
  {
    "id": "math11-assess-s626",
    "courseId": "grade11:math",
    "moduleId": "math11-m1",
    "questionId": "math11-assess-q626",
    "recognition": "Nhận dạng góc, công thức biến đổi, tính chất đồ thị hoặc dạng phương trình lượng giác.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Biến đổi lượng giác",
        "explanation": "$225^\\circ\\cdot\\pi/180^\\circ=5\\pi/4$."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Đáp án cần chọn hoặc nhập là 5/4."
      }
    ],
    "finalAnswer": "5/4",
    "commonMistakes": [
      "Sai dấu theo góc phần tư, quên chu kì hoặc thiếu một họ nghiệm."
    ],
    "reviewSuggestions": [
      "Đối chiếu với đường tròn lượng giác và kiểm tra nghiệm trong miền yêu cầu."
    ]
  },
  {
    "id": "math11-assess-s662",
    "courseId": "grade11:math",
    "moduleId": "math11-m1",
    "questionId": "math11-assess-q662",
    "recognition": "Nhận dạng góc, công thức biến đổi, tính chất đồ thị hoặc dạng phương trình lượng giác.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Biến đổi lượng giác",
        "explanation": "Hai nghiệm là $\\pi/6$ và $5\\pi/6$."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Đáp án cần chọn hoặc nhập là 2."
      }
    ],
    "finalAnswer": "2",
    "commonMistakes": [
      "Sai dấu theo góc phần tư, quên chu kì hoặc thiếu một họ nghiệm."
    ],
    "reviewSuggestions": [
      "Đối chiếu với đường tròn lượng giác và kiểm tra nghiệm trong miền yêu cầu."
    ]
  },
  {
    "id": "math11-assess-s671",
    "courseId": "grade11:math",
    "moduleId": "math11-m1",
    "questionId": "math11-assess-q671",
    "recognition": "Nhận dạng góc, công thức biến đổi, tính chất đồ thị hoặc dạng phương trình lượng giác.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Biến đổi lượng giác",
        "explanation": "Nghiệm là $\\pi/4$ và $3\\pi/4$, tổng bằng $\\pi$."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Đáp án cần chọn hoặc nhập là pi."
      }
    ],
    "finalAnswer": "pi",
    "commonMistakes": [
      "Sai dấu theo góc phần tư, quên chu kì hoặc thiếu một họ nghiệm."
    ],
    "reviewSuggestions": [
      "Đối chiếu với đường tròn lượng giác và kiểm tra nghiệm trong miền yêu cầu."
    ]
  },
  {
    "id": "math11-assess-s049",
    "courseId": "grade11:math",
    "moduleId": "math11-m2",
    "questionId": "math11-assess-q049",
    "recognition": "Dãy được cho bằng công thức số hạng tổng quát.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Lập luận",
        "explanation": "Thay $n=5$: $u_5=2\\cdot5-1=9$."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Số hạng cần tìm là 9."
      }
    ],
    "finalAnswer": "B",
    "commonMistakes": [
      "Thay $n=4$ do đếm số bước thay vì chỉ số."
    ],
    "reviewSuggestions": [
      "Ôn cách tính số hạng từ $u_n$."
    ]
  },
  {
    "id": "math11-assess-s050",
    "courseId": "grade11:math",
    "moduleId": "math11-m2",
    "questionId": "math11-assess-q050",
    "recognition": "Thay trực tiếp chỉ số của số hạng thứ tư.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Lập luận",
        "explanation": "$u_4=4^2+1=17$."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Chọn phương án C."
      }
    ],
    "finalAnswer": "C",
    "commonMistakes": [
      "Tính $4^2$ thành 8."
    ],
    "reviewSuggestions": [
      "Ôn thứ tự thực hiện phép tính."
    ]
  },
  {
    "id": "math11-assess-s051",
    "courseId": "grade11:math",
    "moduleId": "math11-m2",
    "questionId": "math11-assess-q051",
    "recognition": "Đối chiếu quy luật giữa mỗi chỉ số và giá trị trong bảng.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Lập luận",
        "explanation": "Các giá trị đều bằng 3 lần chỉ số: $3=3\\cdot1$, $6=3\\cdot2$, ..."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Công thức là $u_n=3n$."
      }
    ],
    "finalAnswer": "A",
    "commonMistakes": [
      "Chỉ kiểm tra một ô trong bảng."
    ],
    "reviewSuggestions": [
      "Ôn biểu diễn dãy bằng bảng và công thức."
    ]
  },
  {
    "id": "math11-assess-s059",
    "courseId": "grade11:math",
    "moduleId": "math11-m2",
    "questionId": "math11-assess-q059",
    "recognition": "Mỗi bước nhân số hạng trước với 2.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Lập luận",
        "explanation": "$u_2=2$, $u_3=4$, $u_4=8$."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Giá trị $u_4$ là 8."
      }
    ],
    "finalAnswer": "D",
    "commonMistakes": [
      "Cộng 2 thay vì nhân 2."
    ],
    "reviewSuggestions": [
      "Ôn hệ thức truy hồi dạng nhân."
    ]
  },
  {
    "id": "math11-assess-s061",
    "courseId": "grade11:math",
    "moduleId": "math11-m2",
    "questionId": "math11-assess-q061",
    "recognition": "Dùng số hạng tổng quát của cấp số cộng.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Lập luận",
        "explanation": "$u_6=u_1+(6-1)d=3+5\\cdot4=23$."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Suy ra $u_6=23$."
      }
    ],
    "finalAnswer": "C",
    "commonMistakes": [
      "Dùng $6d$ thay vì $5d$."
    ],
    "reviewSuggestions": [
      "Ôn công thức $u_n=u_1+(n-1)d$."
    ]
  },
  {
    "id": "math11-assess-s064",
    "courseId": "grade11:math",
    "moduleId": "math11-m2",
    "questionId": "math11-assess-q064",
    "recognition": "Giải phương trình số hạng tổng quát.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Lập luận",
        "explanation": "$25=5+(n-1)2\\Rightarrow n-1=10\\Rightarrow n=11$."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Số 25 ở vị trí thứ 11."
      }
    ],
    "finalAnswer": "C",
    "commonMistakes": [
      "Viết $25=5+2n$ nên lệch một vị trí."
    ],
    "reviewSuggestions": [
      "Ôn ý nghĩa của $n-1$."
    ]
  },
  {
    "id": "math11-assess-s067",
    "courseId": "grade11:math",
    "moduleId": "math11-m2",
    "questionId": "math11-assess-q067",
    "recognition": "Tìm số hạng cuối rồi dùng công thức tổng.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Lập luận",
        "explanation": "$u_{10}=2+9\\cdot3=29$ và $S_{10}=\\frac{10(2+29)}2=155$."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Tổng bằng 155."
      }
    ],
    "finalAnswer": "C",
    "commonMistakes": [
      "Dùng $u_{10}=2+10\\cdot3$."
    ],
    "reviewSuggestions": [
      "Ôn đồng thời công thức số hạng và tổng."
    ]
  },
  {
    "id": "math11-assess-s069",
    "courseId": "grade11:math",
    "moduleId": "math11-m2",
    "questionId": "math11-assess-q069",
    "recognition": "Số ghế mỗi hàng tạo cấp số cộng.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Lập luận",
        "explanation": "$u_{15}=20+14\\cdot2=48$; $S_{15}=\\frac{15(20+48)}2=510$."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Khán đài có 510 ghế."
      }
    ],
    "finalAnswer": "B",
    "commonMistakes": [
      "Nhân 15 với số ghế hàng cuối."
    ],
    "reviewSuggestions": [
      "Ôn mô hình tổng cấp số cộng."
    ]
  },
  {
    "id": "math11-assess-s073",
    "courseId": "grade11:math",
    "moduleId": "math11-m2",
    "questionId": "math11-assess-q073",
    "recognition": "Dùng công thức số hạng tổng quát của cấp số nhân.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Lập luận",
        "explanation": "$u_5=2\\cdot3^{5-1}=2\\cdot81=162$."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Giá trị $u_5$ là 162."
      }
    ],
    "finalAnswer": "C",
    "commonMistakes": [
      "Dùng số mũ 5 thay vì 4."
    ],
    "reviewSuggestions": [
      "Ôn công thức $u_n=u_1q^{n-1}$."
    ]
  },
  {
    "id": "math11-assess-s076",
    "courseId": "grade11:math",
    "moduleId": "math11-m2",
    "questionId": "math11-assess-q076",
    "recognition": "Giữ dấu của công bội âm khi nâng lũy thừa.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Lập luận",
        "explanation": "$u_4=5(-2)^{4-1}=5(-8)=-40$."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Giá trị là $-40$."
      }
    ],
    "finalAnswer": "D",
    "commonMistakes": [
      "Bỏ ngoặc và tính $-2^3$ không nhất quán."
    ],
    "reviewSuggestions": [
      "Ôn lũy thừa của số âm."
    ]
  },
  {
    "id": "math11-assess-s080",
    "courseId": "grade11:math",
    "moduleId": "math11-m2",
    "questionId": "math11-assess-q080",
    "recognition": "Tính tổng bốn số hạng đầu của cấp số nhân.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Lập luận",
        "explanation": "$S_4=3\\frac{1-3^4}{1-3}=3\\cdot40=120$."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Tổng bằng 120."
      }
    ],
    "finalAnswer": "B",
    "commonMistakes": [
      "Bỏ hệ số số hạng đầu 3."
    ],
    "reviewSuggestions": [
      "Ôn vai trò của $u_1$ trong công thức tổng."
    ]
  },
  {
    "id": "math11-assess-s083",
    "courseId": "grade11:math",
    "moduleId": "math11-m2",
    "questionId": "math11-assess-q083",
    "recognition": "Số người mới ở các vòng tạo cấp số nhân công bội 3.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Lập luận",
        "explanation": "Tổng đến vòng 4 là $1+3+9+27+81=121$."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Có 121 người tham gia."
      }
    ],
    "finalAnswer": "D",
    "commonMistakes": [
      "Chỉ tính 81 người ở vòng cuối."
    ],
    "reviewSuggestions": [
      "Ôn phân biệt số hạng cuối và tổng tích lũy."
    ]
  },
  {
    "id": "math11-assess-s084",
    "courseId": "grade11:math",
    "moduleId": "math11-m2",
    "questionId": "math11-assess-q084",
    "recognition": "Dãy có $u_1=2$, $q=3$ và số hạng cuối $1458=2\\cdot3^6$.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Lập luận",
        "explanation": "Có 7 số hạng; $S_7=2\\frac{1-3^7}{1-3}=2186$."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Tổng bằng 2186."
      }
    ],
    "finalAnswer": "A",
    "commonMistakes": [
      "Dùng 6 làm số số hạng vì số mũ cuối là 6."
    ],
    "reviewSuggestions": [
      "Ôn liên hệ giữa số mũ và chỉ số."
    ]
  },
  {
    "id": "math11-assess-s674",
    "courseId": "grade11:math",
    "moduleId": "math11-m2",
    "questionId": "math11-assess-q674",
    "recognition": "Nhận dạng dãy tổng quát, truy hồi, cấp số cộng hay cấp số nhân trước khi chọn công thức.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Phân tích dãy số",
        "explanation": "Giải $4n-7=45$ được $n=13$."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Đáp án cần chọn hoặc nhập là 13."
      }
    ],
    "finalAnswer": "13",
    "commonMistakes": [
      "Nhầm chỉ số với giá trị số hạng, dùng $n$ thay $n-1$ hoặc nhầm tăng đều với tăng theo tỉ lệ."
    ],
    "reviewSuggestions": [
      "Viết các số hạng đầu và kiểm tra công sai hoặc công bội trước khi tính."
    ]
  },
  {
    "id": "math11-assess-s701",
    "courseId": "grade11:math",
    "moduleId": "math11-m2",
    "questionId": "math11-assess-q701",
    "recognition": "Nhận dạng dãy tổng quát, truy hồi, cấp số cộng hay cấp số nhân trước khi chọn công thức.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Phân tích dãy số",
        "explanation": "$2q^4=162$, nên $q^4=81$ và $q=3$."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Đáp án cần chọn hoặc nhập là 3."
      }
    ],
    "finalAnswer": "3",
    "commonMistakes": [
      "Nhầm chỉ số với giá trị số hạng, dùng $n$ thay $n-1$ hoặc nhầm tăng đều với tăng theo tỉ lệ."
    ],
    "reviewSuggestions": [
      "Viết các số hạng đầu và kiểm tra công sai hoặc công bội trước khi tính."
    ]
  },
  {
    "id": "math11-assess-s707",
    "courseId": "grade11:math",
    "moduleId": "math11-m2",
    "questionId": "math11-assess-q707",
    "recognition": "Nhận dạng dãy tổng quát, truy hồi, cấp số cộng hay cấp số nhân trước khi chọn công thức.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Phân tích dãy số",
        "explanation": "$10\\cdot1{,}05^2=11{,}025$."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Đáp án cần chọn hoặc nhập là 11.025."
      }
    ],
    "finalAnswer": "11.025",
    "commonMistakes": [
      "Nhầm chỉ số với giá trị số hạng, dùng $n$ thay $n-1$ hoặc nhầm tăng đều với tăng theo tỉ lệ."
    ],
    "reviewSuggestions": [
      "Viết các số hạng đầu và kiểm tra công sai hoặc công bội trước khi tính."
    ]
  },
  {
    "id": "math11-assess-s085",
    "courseId": "grade11:math",
    "moduleId": "math11-m3",
    "questionId": "math11-assess-q085",
    "recognition": "Đọc đúng khoảng nhóm, tần số và giá trị đại diện.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Xử lí dữ liệu",
        "explanation": "$n=4+6=10$."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Phương án đúng là B."
      }
    ],
    "finalAnswer": "B",
    "commonMistakes": [
      "Đọc sai đầu mút nhóm hoặc dùng sai tần số tích lũy."
    ],
    "reviewSuggestions": [
      "Ôn bảng ghép nhóm và công thức số đặc trưng tương ứng."
    ]
  },
  {
    "id": "math11-assess-s088",
    "courseId": "grade11:math",
    "moduleId": "math11-m3",
    "questionId": "math11-assess-q088",
    "recognition": "Đọc đúng khoảng nhóm, tần số và giá trị đại diện.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Xử lí dữ liệu",
        "explanation": "Nhóm đầu có $1,2,4$; nhóm sau có $5,7,9$."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Phương án đúng là B."
      }
    ],
    "finalAnswer": "B",
    "commonMistakes": [
      "Đọc sai đầu mút nhóm hoặc dùng sai tần số tích lũy."
    ],
    "reviewSuggestions": [
      "Ôn bảng ghép nhóm và công thức số đặc trưng tương ứng."
    ]
  },
  {
    "id": "math11-assess-s089",
    "courseId": "grade11:math",
    "moduleId": "math11-m3",
    "questionId": "math11-assess-q089",
    "recognition": "Đọc đúng khoảng nhóm, tần số và giá trị đại diện.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Xử lí dữ liệu",
        "explanation": "$10\\in[10;20)$ còn 20 không thuộc nhóm."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Phương án đúng là A."
      }
    ],
    "finalAnswer": "A",
    "commonMistakes": [
      "Đọc sai đầu mút nhóm hoặc dùng sai tần số tích lũy."
    ],
    "reviewSuggestions": [
      "Ôn bảng ghép nhóm và công thức số đặc trưng tương ứng."
    ]
  },
  {
    "id": "math11-assess-s091",
    "courseId": "grade11:math",
    "moduleId": "math11-m3",
    "questionId": "math11-assess-q091",
    "recognition": "Đọc đúng khoảng nhóm, tần số và giá trị đại diện.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Xử lí dữ liệu",
        "explanation": "Tần số lớn nhất 5 ứng với nhóm $[5;10)$."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Phương án đúng là B."
      }
    ],
    "finalAnswer": "B",
    "commonMistakes": [
      "Đọc sai đầu mút nhóm hoặc dùng sai tần số tích lũy."
    ],
    "reviewSuggestions": [
      "Ôn bảng ghép nhóm và công thức số đặc trưng tương ứng."
    ]
  },
  {
    "id": "math11-assess-s094",
    "courseId": "grade11:math",
    "moduleId": "math11-m3",
    "questionId": "math11-assess-q094",
    "recognition": "Đọc đúng khoảng nhóm, tần số và giá trị đại diện.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Xử lí dữ liệu",
        "explanation": "Các nhóm chứa lần lượt 2, 3 và 1 giá trị."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Phương án đúng là C."
      }
    ],
    "finalAnswer": "C",
    "commonMistakes": [
      "Đọc sai đầu mút nhóm hoặc dùng sai tần số tích lũy."
    ],
    "reviewSuggestions": [
      "Ôn bảng ghép nhóm và công thức số đặc trưng tương ứng."
    ]
  },
  {
    "id": "math11-assess-s097",
    "courseId": "grade11:math",
    "moduleId": "math11-m3",
    "questionId": "math11-assess-q097",
    "recognition": "Xác định đúng số đặc trưng và nhóm chứa trước khi thay công thức.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Xử lí dữ liệu",
        "explanation": "$\\bar x\\approx(2\\cdot5+3\\cdot15)/5=11$."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Phương án đúng là B."
      }
    ],
    "finalAnswer": "B",
    "commonMistakes": [
      "Đọc sai đầu mút nhóm hoặc dùng sai tần số tích lũy."
    ],
    "reviewSuggestions": [
      "Ôn bảng ghép nhóm và công thức số đặc trưng tương ứng."
    ]
  },
  {
    "id": "math11-assess-s098",
    "courseId": "grade11:math",
    "moduleId": "math11-m3",
    "questionId": "math11-assess-q098",
    "recognition": "Xác định đúng số đặc trưng và nhóm chứa trước khi thay công thức.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Xử lí dữ liệu",
        "explanation": "$(1\\cdot2+3\\cdot6)/4=5$."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Phương án đúng là C."
      }
    ],
    "finalAnswer": "C",
    "commonMistakes": [
      "Đọc sai đầu mút nhóm hoặc dùng sai tần số tích lũy."
    ],
    "reviewSuggestions": [
      "Ôn bảng ghép nhóm và công thức số đặc trưng tương ứng."
    ]
  },
  {
    "id": "math11-assess-s101",
    "courseId": "grade11:math",
    "moduleId": "math11-m3",
    "questionId": "math11-assess-q101",
    "recognition": "Xác định đúng số đặc trưng và nhóm chứa trước khi thay công thức.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Xử lí dữ liệu",
        "explanation": "Bảng nhóm dùng giá trị đại diện thay cho từng dữ liệu gốc."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Phương án đúng là C."
      }
    ],
    "finalAnswer": "C",
    "commonMistakes": [
      "Đọc sai đầu mút nhóm hoặc dùng sai tần số tích lũy."
    ],
    "reviewSuggestions": [
      "Ôn bảng ghép nhóm và công thức số đặc trưng tương ứng."
    ]
  },
  {
    "id": "math11-assess-s103",
    "courseId": "grade11:math",
    "moduleId": "math11-m3",
    "questionId": "math11-assess-q103",
    "recognition": "Xác định đúng số đặc trưng và nhóm chứa trước khi thay công thức.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Xử lí dữ liệu",
        "explanation": "$M_e=10+\\frac{10-4}{8}\\cdot10=17{,}5$."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Phương án đúng là C."
      }
    ],
    "finalAnswer": "C",
    "commonMistakes": [
      "Đọc sai đầu mút nhóm hoặc dùng sai tần số tích lũy."
    ],
    "reviewSuggestions": [
      "Ôn bảng ghép nhóm và công thức số đặc trưng tương ứng."
    ]
  },
  {
    "id": "math11-assess-s108",
    "courseId": "grade11:math",
    "moduleId": "math11-m3",
    "questionId": "math11-assess-q108",
    "recognition": "Xác định đúng số đặc trưng và nhóm chứa trước khi thay công thức.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Xử lí dữ liệu",
        "explanation": "$Q_1=10+\\frac{10-6}{14}\\cdot10\\approx12{,}86$."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Phương án đúng là C."
      }
    ],
    "finalAnswer": "C",
    "commonMistakes": [
      "Đọc sai đầu mút nhóm hoặc dùng sai tần số tích lũy."
    ],
    "reviewSuggestions": [
      "Ôn bảng ghép nhóm và công thức số đặc trưng tương ứng."
    ]
  },
  {
    "id": "math11-assess-s710",
    "courseId": "grade11:math",
    "moduleId": "math11-m3",
    "questionId": "math11-assess-q710",
    "recognition": "Xác định cỡ mẫu, giá trị đại diện, tần số tích lũy và số đặc trưng cần ước lượng.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Đọc và tính từ bảng",
        "explanation": "$f=12/40=0{,}3$."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Đáp án cần chọn hoặc nhập là 0.3."
      }
    ],
    "finalAnswer": "0.3",
    "commonMistakes": [
      "Xếp sai đầu mút nhóm, dùng cận thay trung điểm hoặc nhầm tần số riêng với tích lũy."
    ],
    "reviewSuggestions": [
      "Lập thêm cột giá trị đại diện và tần số tích lũy trước khi tính."
    ]
  },
  {
    "id": "math11-assess-s731",
    "courseId": "grade11:math",
    "moduleId": "math11-m3",
    "questionId": "math11-assess-q731",
    "recognition": "Xác định cỡ mẫu, giá trị đại diện, tần số tích lũy và số đặc trưng cần ước lượng.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Đọc và tính từ bảng",
        "explanation": "$n/4=5$; nội suy ở ranh giới cho $Q_1=10$."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Đáp án cần chọn hoặc nhập là 10."
      }
    ],
    "finalAnswer": "10",
    "commonMistakes": [
      "Xếp sai đầu mút nhóm, dùng cận thay trung điểm hoặc nhầm tần số riêng với tích lũy."
    ],
    "reviewSuggestions": [
      "Lập thêm cột giá trị đại diện và tần số tích lũy trước khi tính."
    ]
  },
  {
    "id": "math11-assess-s109",
    "courseId": "grade11:math",
    "moduleId": "math11-m4",
    "questionId": "math11-assess-q109",
    "recognition": "Xác định quan hệ không gian và kiểm tra đủ điều kiện của định nghĩa hoặc định lí.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Lập luận hình học",
        "explanation": "Ba điểm phải không thẳng hàng."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Phương án đúng là B."
      }
    ],
    "finalAnswer": "B",
    "commonMistakes": [
      "Suy luận bằng mắt từ hình biểu diễn hoặc bỏ sót điều kiện đồng phẳng, liên thuộc."
    ],
    "reviewSuggestions": [
      "Ôn định nghĩa và dấu hiệu trong phần lý thuyết của bài tương ứng."
    ]
  },
  {
    "id": "math11-assess-s119",
    "courseId": "grade11:math",
    "moduleId": "math11-m4",
    "questionId": "math11-assess-q119",
    "recognition": "Xác định quan hệ không gian và kiểm tra đủ điều kiện của định nghĩa hoặc định lí.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Lập luận hình học",
        "explanation": "$B,C$ là hai điểm chung nên giao tuyến là $BC$."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Phương án đúng là C."
      }
    ],
    "finalAnswer": "C",
    "commonMistakes": [
      "Suy luận bằng mắt từ hình biểu diễn hoặc bỏ sót điều kiện đồng phẳng, liên thuộc."
    ],
    "reviewSuggestions": [
      "Ôn định nghĩa và dấu hiệu trong phần lý thuyết của bài tương ứng."
    ]
  },
  {
    "id": "math11-assess-s121",
    "courseId": "grade11:math",
    "moduleId": "math11-m4",
    "questionId": "math11-assess-q121",
    "recognition": "Xác định quan hệ không gian và kiểm tra đủ điều kiện của định nghĩa hoặc định lí.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Lập luận hình học",
        "explanation": "Hai cạnh đối của tứ diện không đồng phẳng nên chéo nhau."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Phương án đúng là D."
      }
    ],
    "finalAnswer": "D",
    "commonMistakes": [
      "Suy luận bằng mắt từ hình biểu diễn hoặc bỏ sót điều kiện đồng phẳng, liên thuộc."
    ],
    "reviewSuggestions": [
      "Ôn định nghĩa và dấu hiệu trong phần lý thuyết của bài tương ứng."
    ]
  },
  {
    "id": "math11-assess-s125",
    "courseId": "grade11:math",
    "moduleId": "math11-m4",
    "questionId": "math11-assess-q125",
    "recognition": "Xác định quan hệ không gian và kiểm tra đủ điều kiện của định nghĩa hoặc định lí.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Lập luận hình học",
        "explanation": "Hai đường chéo nhau được đặc trưng bởi tính không đồng phẳng."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Phương án đúng là C."
      }
    ],
    "finalAnswer": "C",
    "commonMistakes": [
      "Suy luận bằng mắt từ hình biểu diễn hoặc bỏ sót điều kiện đồng phẳng, liên thuộc."
    ],
    "reviewSuggestions": [
      "Ôn định nghĩa và dấu hiệu trong phần lý thuyết của bài tương ứng."
    ]
  },
  {
    "id": "math11-assess-s133",
    "courseId": "grade11:math",
    "moduleId": "math11-m4",
    "questionId": "math11-assess-q133",
    "recognition": "Xác định quan hệ không gian và kiểm tra đủ điều kiện của định nghĩa hoặc định lí.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Lập luận hình học",
        "explanation": "Áp dụng điều kiện đường thẳng song song với mặt phẳng."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Phương án đúng là B."
      }
    ],
    "finalAnswer": "B",
    "commonMistakes": [
      "Suy luận bằng mắt từ hình biểu diễn hoặc bỏ sót điều kiện đồng phẳng, liên thuộc."
    ],
    "reviewSuggestions": [
      "Ôn định nghĩa và dấu hiệu trong phần lý thuyết của bài tương ứng."
    ]
  },
  {
    "id": "math11-assess-s140",
    "courseId": "grade11:math",
    "moduleId": "math11-m4",
    "questionId": "math11-assess-q140",
    "recognition": "Xác định quan hệ không gian và kiểm tra đủ điều kiện của định nghĩa hoặc định lí.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Lập luận hình học",
        "explanation": "$MN\\parallel AC\\subset(ABC)$ nên $MN\\parallel(ABC)$."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Phương án đúng là A."
      }
    ],
    "finalAnswer": "A",
    "commonMistakes": [
      "Suy luận bằng mắt từ hình biểu diễn hoặc bỏ sót điều kiện đồng phẳng, liên thuộc."
    ],
    "reviewSuggestions": [
      "Ôn định nghĩa và dấu hiệu trong phần lý thuyết của bài tương ứng."
    ]
  },
  {
    "id": "math11-assess-s147",
    "courseId": "grade11:math",
    "moduleId": "math11-m4",
    "questionId": "math11-assess-q147",
    "recognition": "Xác định quan hệ không gian và kiểm tra đủ điều kiện của định nghĩa hoặc định lí.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Lập luận hình học",
        "explanation": "Mặt phẳng thứ ba cắt hai mặt phẳng song song theo hai đường song song."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Phương án đúng là C."
      }
    ],
    "finalAnswer": "C",
    "commonMistakes": [
      "Suy luận bằng mắt từ hình biểu diễn hoặc bỏ sót điều kiện đồng phẳng, liên thuộc."
    ],
    "reviewSuggestions": [
      "Ôn định nghĩa và dấu hiệu trong phần lý thuyết của bài tương ứng."
    ]
  },
  {
    "id": "math11-assess-s150",
    "courseId": "grade11:math",
    "moduleId": "math11-m4",
    "questionId": "math11-assess-q150",
    "recognition": "Xác định quan hệ không gian và kiểm tra đủ điều kiện của định nghĩa hoặc định lí.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Lập luận hình học",
        "explanation": "Hai mặt phẳng phân biệt cùng song song mặt phẳng thứ ba thì song song nhau."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Phương án đúng là A."
      }
    ],
    "finalAnswer": "A",
    "commonMistakes": [
      "Suy luận bằng mắt từ hình biểu diễn hoặc bỏ sót điều kiện đồng phẳng, liên thuộc."
    ],
    "reviewSuggestions": [
      "Ôn định nghĩa và dấu hiệu trong phần lý thuyết của bài tương ứng."
    ]
  },
  {
    "id": "math11-assess-s159",
    "courseId": "grade11:math",
    "moduleId": "math11-m4",
    "questionId": "math11-assess-q159",
    "recognition": "Xác định quan hệ không gian và kiểm tra đủ điều kiện của định nghĩa hoặc định lí.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Lập luận hình học",
        "explanation": "Số đo góc không được bảo toàn nói chung."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Phương án đúng là D."
      }
    ],
    "finalAnswer": "D",
    "commonMistakes": [
      "Suy luận bằng mắt từ hình biểu diễn hoặc bỏ sót điều kiện đồng phẳng, liên thuộc."
    ],
    "reviewSuggestions": [
      "Ôn định nghĩa và dấu hiệu trong phần lý thuyết của bài tương ứng."
    ]
  },
  {
    "id": "math11-assess-s168",
    "courseId": "grade11:math",
    "moduleId": "math11-m4",
    "questionId": "math11-assess-q168",
    "recognition": "Xác định quan hệ không gian và kiểm tra đủ điều kiện của định nghĩa hoặc định lí.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Lập luận hình học",
        "explanation": "Hai cặp cạnh song song được giữ nhưng góc vuông không được giữ."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Phương án đúng là D."
      }
    ],
    "finalAnswer": "D",
    "commonMistakes": [
      "Suy luận bằng mắt từ hình biểu diễn hoặc bỏ sót điều kiện đồng phẳng, liên thuộc."
    ],
    "reviewSuggestions": [
      "Ôn định nghĩa và dấu hiệu trong phần lý thuyết của bài tương ứng."
    ]
  },
  {
    "id": "math11-assess-s741",
    "courseId": "grade11:math",
    "moduleId": "math11-m4",
    "questionId": "math11-assess-q741",
    "recognition": "Xác định quan hệ liên thuộc, giao tuyến, vị trí tương đối hoặc tính chất song song cần dùng.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Lập luận hình học",
        "explanation": "Cả hai mặt phẳng cùng chứa hai điểm phân biệt $A,B$."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Đáp án cần chọn hoặc nhập là AB."
      }
    ],
    "finalAnswer": "AB",
    "commonMistakes": [
      "Suy luận theo hình vẽ, bỏ điều kiện đồng phẳng hoặc chỉ chứng minh một cặp phương."
    ],
    "reviewSuggestions": [
      "Ghi rõ mỗi điểm, đường thuộc mặt phẳng nào và định lí song song được áp dụng."
    ]
  },
  {
    "id": "math11-assess-s771",
    "courseId": "grade11:math",
    "moduleId": "math11-m4",
    "questionId": "math11-assess-q771",
    "recognition": "Xác định quan hệ liên thuộc, giao tuyến, vị trí tương đối hoặc tính chất song song cần dùng.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Lập luận hình học",
        "explanation": "Theo định nghĩa, hai mặt phẳng song song không có điểm chung."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Đáp án cần chọn hoặc nhập là 0."
      }
    ],
    "finalAnswer": "0",
    "commonMistakes": [
      "Suy luận theo hình vẽ, bỏ điều kiện đồng phẳng hoặc chỉ chứng minh một cặp phương."
    ],
    "reviewSuggestions": [
      "Ghi rõ mỗi điểm, đường thuộc mặt phẳng nào và định lí song song được áp dụng."
    ]
  },
  {
    "id": "math11-assess-s779",
    "courseId": "grade11:math",
    "moduleId": "math11-m4",
    "questionId": "math11-assess-q779",
    "recognition": "Xác định quan hệ liên thuộc, giao tuyến, vị trí tương đối hoặc tính chất song song cần dùng.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Lập luận hình học",
        "explanation": "$4/6=10/x$, nên $x=15$."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Đáp án cần chọn hoặc nhập là 15."
      }
    ],
    "finalAnswer": "15",
    "commonMistakes": [
      "Suy luận theo hình vẽ, bỏ điều kiện đồng phẳng hoặc chỉ chứng minh một cặp phương."
    ],
    "reviewSuggestions": [
      "Ghi rõ mỗi điểm, đường thuộc mặt phẳng nào và định lí song song được áp dụng."
    ]
  },
  {
    "id": "math11-assess-s786",
    "courseId": "grade11:math",
    "moduleId": "math11-m4",
    "questionId": "math11-assess-q786",
    "recognition": "Xác định quan hệ liên thuộc, giao tuyến, vị trí tương đối hoặc tính chất song song cần dùng.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Lập luận hình học",
        "explanation": "Tỉ số các đoạn cùng nằm trên một đường được bảo toàn."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Đáp án cần chọn hoặc nhập là 3."
      }
    ],
    "finalAnswer": "3",
    "commonMistakes": [
      "Suy luận theo hình vẽ, bỏ điều kiện đồng phẳng hoặc chỉ chứng minh một cặp phương."
    ],
    "reviewSuggestions": [
      "Ghi rõ mỗi điểm, đường thuộc mặt phẳng nào và định lí song song được áp dụng."
    ]
  },
  {
    "id": "math11-assess-s169",
    "courseId": "grade11:math",
    "moduleId": "math11-m5",
    "questionId": "math11-assess-q169",
    "recognition": "Nhận dạng loại giới hạn hoặc điều kiện liên tục trước khi biến đổi.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Tính toán",
        "explanation": "$1/n\\to0$."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Phương án đúng là B."
      }
    ],
    "finalAnswer": "B",
    "commonMistakes": [
      "Thay trực tiếp vào dạng vô định hoặc bỏ qua giới hạn một phía."
    ],
    "reviewSuggestions": [
      "Ôn công thức và điều kiện trong khối lý thuyết tương ứng."
    ]
  },
  {
    "id": "math11-assess-s170",
    "courseId": "grade11:math",
    "moduleId": "math11-m5",
    "questionId": "math11-assess-q170",
    "recognition": "Nhận dạng loại giới hạn hoặc điều kiện liên tục trước khi biến đổi.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Tính toán",
        "explanation": "Chia tử mẫu cho $n$ được 2."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Phương án đúng là C."
      }
    ],
    "finalAnswer": "C",
    "commonMistakes": [
      "Thay trực tiếp vào dạng vô định hoặc bỏ qua giới hạn một phía."
    ],
    "reviewSuggestions": [
      "Ôn công thức và điều kiện trong khối lý thuyết tương ứng."
    ]
  },
  {
    "id": "math11-assess-s172",
    "courseId": "grade11:math",
    "moduleId": "math11-m5",
    "questionId": "math11-assess-q172",
    "recognition": "Nhận dạng loại giới hạn hoặc điều kiện liên tục trước khi biến đổi.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Tính toán",
        "explanation": "$\\frac{n+1}{n}=1+1/n\\to1$."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Phương án đúng là B."
      }
    ],
    "finalAnswer": "B",
    "commonMistakes": [
      "Thay trực tiếp vào dạng vô định hoặc bỏ qua giới hạn một phía."
    ],
    "reviewSuggestions": [
      "Ôn công thức và điều kiện trong khối lý thuyết tương ứng."
    ]
  },
  {
    "id": "math11-assess-s175",
    "courseId": "grade11:math",
    "moduleId": "math11-m5",
    "questionId": "math11-assess-q175",
    "recognition": "Nhận dạng loại giới hạn hoặc điều kiện liên tục trước khi biến đổi.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Tính toán",
        "explanation": "Vì $|1/2|<1$ nên $(1/2)^n\\to0$."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Phương án đúng là B."
      }
    ],
    "finalAnswer": "B",
    "commonMistakes": [
      "Thay trực tiếp vào dạng vô định hoặc bỏ qua giới hạn một phía."
    ],
    "reviewSuggestions": [
      "Ôn công thức và điều kiện trong khối lý thuyết tương ứng."
    ]
  },
  {
    "id": "math11-assess-s176",
    "courseId": "grade11:math",
    "moduleId": "math11-m5",
    "questionId": "math11-assess-q176",
    "recognition": "Nhận dạng loại giới hạn hoặc điều kiện liên tục trước khi biến đổi.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Tính toán",
        "explanation": "$n^2$ tăng không bị chặn."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Phương án đúng là C."
      }
    ],
    "finalAnswer": "C",
    "commonMistakes": [
      "Thay trực tiếp vào dạng vô định hoặc bỏ qua giới hạn một phía."
    ],
    "reviewSuggestions": [
      "Ôn công thức và điều kiện trong khối lý thuyết tương ứng."
    ]
  },
  {
    "id": "math11-assess-s177",
    "courseId": "grade11:math",
    "moduleId": "math11-m5",
    "questionId": "math11-assess-q177",
    "recognition": "Nhận dạng loại giới hạn hoặc điều kiện liên tục trước khi biến đổi.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Tính toán",
        "explanation": "$-3n+2\\to-\\infty$."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Phương án đúng là D."
      }
    ],
    "finalAnswer": "D",
    "commonMistakes": [
      "Thay trực tiếp vào dạng vô định hoặc bỏ qua giới hạn một phía."
    ],
    "reviewSuggestions": [
      "Ôn công thức và điều kiện trong khối lý thuyết tương ứng."
    ]
  },
  {
    "id": "math11-assess-s181",
    "courseId": "grade11:math",
    "moduleId": "math11-m5",
    "questionId": "math11-assess-q181",
    "recognition": "Nhận dạng loại giới hạn hoặc điều kiện liên tục trước khi biến đổi.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Tính toán",
        "explanation": "Thay $x=2$ được 5."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Phương án đúng là C."
      }
    ],
    "finalAnswer": "C",
    "commonMistakes": [
      "Thay trực tiếp vào dạng vô định hoặc bỏ qua giới hạn một phía."
    ],
    "reviewSuggestions": [
      "Ôn công thức và điều kiện trong khối lý thuyết tương ứng."
    ]
  },
  {
    "id": "math11-assess-s182",
    "courseId": "grade11:math",
    "moduleId": "math11-m5",
    "questionId": "math11-assess-q182",
    "recognition": "Nhận dạng loại giới hạn hoặc điều kiện liên tục trước khi biến đổi.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Tính toán",
        "explanation": "Rút gọn thành $x+2$, giới hạn bằng 4."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Phương án đúng là B."
      }
    ],
    "finalAnswer": "B",
    "commonMistakes": [
      "Thay trực tiếp vào dạng vô định hoặc bỏ qua giới hạn một phía."
    ],
    "reviewSuggestions": [
      "Ôn công thức và điều kiện trong khối lý thuyết tương ứng."
    ]
  },
  {
    "id": "math11-assess-s184",
    "courseId": "grade11:math",
    "moduleId": "math11-m5",
    "questionId": "math11-assess-q184",
    "recognition": "Nhận dạng loại giới hạn hoặc điều kiện liên tục trước khi biến đổi.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Tính toán",
        "explanation": "Hai giới hạn một phía khác nhau."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Phương án đúng là D."
      }
    ],
    "finalAnswer": "D",
    "commonMistakes": [
      "Thay trực tiếp vào dạng vô định hoặc bỏ qua giới hạn một phía."
    ],
    "reviewSuggestions": [
      "Ôn công thức và điều kiện trong khối lý thuyết tương ứng."
    ]
  },
  {
    "id": "math11-assess-s190",
    "courseId": "grade11:math",
    "moduleId": "math11-m5",
    "questionId": "math11-assess-q190",
    "recognition": "Nhận dạng loại giới hạn hoặc điều kiện liên tục trước khi biến đổi.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Tính toán",
        "explanation": "Khi $x\\to2^+$, mẫu dương tiến tới 0."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Phương án đúng là D."
      }
    ],
    "finalAnswer": "D",
    "commonMistakes": [
      "Thay trực tiếp vào dạng vô định hoặc bỏ qua giới hạn một phía."
    ],
    "reviewSuggestions": [
      "Ôn công thức và điều kiện trong khối lý thuyết tương ứng."
    ]
  },
  {
    "id": "math11-assess-s193",
    "courseId": "grade11:math",
    "moduleId": "math11-m5",
    "questionId": "math11-assess-q193",
    "recognition": "Nhận dạng loại giới hạn hoặc điều kiện liên tục trước khi biến đổi.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Tính toán",
        "explanation": "Dùng định nghĩa liên tục tại điểm."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Phương án đúng là B."
      }
    ],
    "finalAnswer": "B",
    "commonMistakes": [
      "Thay trực tiếp vào dạng vô định hoặc bỏ qua giới hạn một phía."
    ],
    "reviewSuggestions": [
      "Ôn công thức và điều kiện trong khối lý thuyết tương ứng."
    ]
  },
  {
    "id": "math11-assess-s195",
    "courseId": "grade11:math",
    "moduleId": "math11-m5",
    "questionId": "math11-assess-q195",
    "recognition": "Nhận dạng loại giới hạn hoặc điều kiện liên tục trước khi biến đổi.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Tính toán",
        "explanation": "Hàm phân thức liên tục khi $x\\ne2$."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Phương án đúng là C."
      }
    ],
    "finalAnswer": "C",
    "commonMistakes": [
      "Thay trực tiếp vào dạng vô định hoặc bỏ qua giới hạn một phía."
    ],
    "reviewSuggestions": [
      "Ôn công thức và điều kiện trong khối lý thuyết tương ứng."
    ]
  },
  {
    "id": "math11-assess-s204",
    "courseId": "grade11:math",
    "moduleId": "math11-m5",
    "questionId": "math11-assess-q204",
    "recognition": "Nhận dạng loại giới hạn hoặc điều kiện liên tục trước khi biến đổi.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Tính toán",
        "explanation": "$\\lim_{x\\to0}\\sin x/x=1$ nên $a=1$."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Phương án đúng là D."
      }
    ],
    "finalAnswer": "D",
    "commonMistakes": [
      "Thay trực tiếp vào dạng vô định hoặc bỏ qua giới hạn một phía."
    ],
    "reviewSuggestions": [
      "Ôn công thức và điều kiện trong khối lý thuyết tương ứng."
    ]
  },
  {
    "id": "math11-assess-s398",
    "courseId": "grade11:math",
    "moduleId": "math11-m5",
    "questionId": "math11-assess-q398",
    "recognition": "Nhận dạng loại giới hạn hoặc điều kiện liên tục trước khi biến đổi.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Phân tích và tính toán",
        "explanation": "Nhân liên hợp: $n(\\sqrt{n^2+1}-n)=\\dfrac{n}{\\sqrt{n^2+1}+n}=\\dfrac1{\\sqrt{1+1/n^2}+1}\\to\\frac12$."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Kết quả cần chọn hoặc nhập là 0.5."
      }
    ],
    "finalAnswer": "0.5",
    "commonMistakes": [
      "Không kiểm tra điều kiện, dạng vô định hoặc giới hạn một phía."
    ],
    "reviewSuggestions": [
      "Làm lại phép biến đổi và nêu rõ điều kiện áp dụng."
    ]
  },
  {
    "id": "math11-assess-s410",
    "courseId": "grade11:math",
    "moduleId": "math11-m5",
    "questionId": "math11-assess-q410",
    "recognition": "Nhận dạng loại giới hạn hoặc điều kiện liên tục trước khi biến đổi.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Phân tích và tính toán",
        "explanation": "Nhân liên hợp, rút gọn thành $1/(\\sqrt{x+5}+3)$ rồi cho $x\\to4$."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Kết quả cần chọn hoặc nhập là 1/6."
      }
    ],
    "finalAnswer": "1/6",
    "commonMistakes": [
      "Không kiểm tra điều kiện, dạng vô định hoặc giới hạn một phía."
    ],
    "reviewSuggestions": [
      "Làm lại phép biến đổi và nêu rõ điều kiện áp dụng."
    ]
  },
  {
    "id": "math11-assess-s412",
    "courseId": "grade11:math",
    "moduleId": "math11-m5",
    "questionId": "math11-assess-q412",
    "recognition": "Nhận dạng loại giới hạn hoặc điều kiện liên tục trước khi biến đổi.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Phân tích và tính toán",
        "explanation": "Với $x\\ne1$, $f(x)=x+1$; giới hạn hai phía bằng 2 nhưng hàm ban đầu chưa có giá trị tại 1."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Kết quả cần chọn hoặc nhập là a:Đ|b:S|c:Đ|d:Đ."
      }
    ],
    "finalAnswer": "a:Đ|b:S|c:Đ|d:Đ",
    "commonMistakes": [
      "Không kiểm tra điều kiện, dạng vô định hoặc giới hạn một phía."
    ],
    "reviewSuggestions": [
      "Làm lại phép biến đổi và nêu rõ điều kiện áp dụng."
    ]
  },
  {
    "id": "math11-assess-s413",
    "courseId": "grade11:math",
    "moduleId": "math11-m5",
    "questionId": "math11-assess-q413",
    "recognition": "Nhận dạng loại giới hạn hoặc điều kiện liên tục trước khi biến đổi.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Phân tích và tính toán",
        "explanation": "Tách thành $\\dfrac{\\sin3x}{3x}\\cdot\\dfrac{5x}{\\sin5x}\\cdot\\dfrac35$; hai giới hạn đặc biệt bằng 1."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Kết quả cần chọn hoặc nhập là 3/5."
      }
    ],
    "finalAnswer": "3/5",
    "commonMistakes": [
      "Không kiểm tra điều kiện, dạng vô định hoặc giới hạn một phía."
    ],
    "reviewSuggestions": [
      "Làm lại phép biến đổi và nêu rõ điều kiện áp dụng."
    ]
  },
  {
    "id": "math11-assess-s205",
    "courseId": "grade11:math",
    "moduleId": "math11-m6",
    "questionId": "math11-assess-q205",
    "recognition": "Kiểm tra điều kiện rồi áp dụng quy tắc lũy thừa, lôgarit hoặc tính đơn điệu.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Biến đổi",
        "explanation": "$2^{3+4}=2^7$."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Phương án đúng là B."
      }
    ],
    "finalAnswer": "B",
    "commonMistakes": [
      "Bỏ điều kiện đối số dương hoặc dùng sai chiều đơn điệu của cơ số."
    ],
    "reviewSuggestions": [
      "Ôn định nghĩa và công thức của bài tương ứng."
    ]
  },
  {
    "id": "math11-assess-s206",
    "courseId": "grade11:math",
    "moduleId": "math11-m6",
    "questionId": "math11-assess-q206",
    "recognition": "Kiểm tra điều kiện rồi áp dụng quy tắc lũy thừa, lôgarit hoặc tính đơn điệu.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Biến đổi",
        "explanation": "$a^{5-2}=a^3$."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Phương án đúng là C."
      }
    ],
    "finalAnswer": "C",
    "commonMistakes": [
      "Bỏ điều kiện đối số dương hoặc dùng sai chiều đơn điệu của cơ số."
    ],
    "reviewSuggestions": [
      "Ôn định nghĩa và công thức của bài tương ứng."
    ]
  },
  {
    "id": "math11-assess-s208",
    "courseId": "grade11:math",
    "moduleId": "math11-m6",
    "questionId": "math11-assess-q208",
    "recognition": "Kiểm tra điều kiện rồi áp dụng quy tắc lũy thừa, lôgarit hoặc tính đơn điệu.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Biến đổi",
        "explanation": "$16^{1/2}=\\sqrt{16}=4$."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Phương án đúng là A."
      }
    ],
    "finalAnswer": "A",
    "commonMistakes": [
      "Bỏ điều kiện đối số dương hoặc dùng sai chiều đơn điệu của cơ số."
    ],
    "reviewSuggestions": [
      "Ôn định nghĩa và công thức của bài tương ứng."
    ]
  },
  {
    "id": "math11-assess-s217",
    "courseId": "grade11:math",
    "moduleId": "math11-m6",
    "questionId": "math11-assess-q217",
    "recognition": "Kiểm tra điều kiện rồi áp dụng quy tắc lũy thừa, lôgarit hoặc tính đơn điệu.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Biến đổi",
        "explanation": "Vì $2^3=8$ nên lôgarit bằng 3."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Phương án đúng là C."
      }
    ],
    "finalAnswer": "C",
    "commonMistakes": [
      "Bỏ điều kiện đối số dương hoặc dùng sai chiều đơn điệu của cơ số."
    ],
    "reviewSuggestions": [
      "Ôn định nghĩa và công thức của bài tương ứng."
    ]
  },
  {
    "id": "math11-assess-s219",
    "courseId": "grade11:math",
    "moduleId": "math11-m6",
    "questionId": "math11-assess-q219",
    "recognition": "Kiểm tra điều kiện rồi áp dụng quy tắc lũy thừa, lôgarit hoặc tính đơn điệu.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Biến đổi",
        "explanation": "$a^0=1$."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Phương án đúng là A."
      }
    ],
    "finalAnswer": "A",
    "commonMistakes": [
      "Bỏ điều kiện đối số dương hoặc dùng sai chiều đơn điệu của cơ số."
    ],
    "reviewSuggestions": [
      "Ôn định nghĩa và công thức của bài tương ứng."
    ]
  },
  {
    "id": "math11-assess-s221",
    "courseId": "grade11:math",
    "moduleId": "math11-m6",
    "questionId": "math11-assess-q221",
    "recognition": "Kiểm tra điều kiện rồi áp dụng quy tắc lũy thừa, lôgarit hoặc tính đơn điệu.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Biến đổi",
        "explanation": "Cơ số dương khác 1 và đối số dương."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Phương án đúng là C."
      }
    ],
    "finalAnswer": "C",
    "commonMistakes": [
      "Bỏ điều kiện đối số dương hoặc dùng sai chiều đơn điệu của cơ số."
    ],
    "reviewSuggestions": [
      "Ôn định nghĩa và công thức của bài tương ứng."
    ]
  },
  {
    "id": "math11-assess-s223",
    "courseId": "grade11:math",
    "moduleId": "math11-m6",
    "questionId": "math11-assess-q223",
    "recognition": "Kiểm tra điều kiện rồi áp dụng quy tắc lũy thừa, lôgarit hoặc tính đơn điệu.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Biến đổi",
        "explanation": "$\\log_2 8+\\log_2 4=3+2=5$."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Phương án đúng là C."
      }
    ],
    "finalAnswer": "C",
    "commonMistakes": [
      "Bỏ điều kiện đối số dương hoặc dùng sai chiều đơn điệu của cơ số."
    ],
    "reviewSuggestions": [
      "Ôn định nghĩa và công thức của bài tương ứng."
    ]
  },
  {
    "id": "math11-assess-s229",
    "courseId": "grade11:math",
    "moduleId": "math11-m6",
    "questionId": "math11-assess-q229",
    "recognition": "Kiểm tra điều kiện rồi áp dụng quy tắc lũy thừa, lôgarit hoặc tính đơn điệu.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Biến đổi",
        "explanation": "Hàm mũ xác định trên $\\mathbb R$."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Phương án đúng là A."
      }
    ],
    "finalAnswer": "A",
    "commonMistakes": [
      "Bỏ điều kiện đối số dương hoặc dùng sai chiều đơn điệu của cơ số."
    ],
    "reviewSuggestions": [
      "Ôn định nghĩa và công thức của bài tương ứng."
    ]
  },
  {
    "id": "math11-assess-s244",
    "courseId": "grade11:math",
    "moduleId": "math11-m6",
    "questionId": "math11-assess-q244",
    "recognition": "Kiểm tra điều kiện rồi áp dụng quy tắc lũy thừa, lôgarit hoặc tính đơn điệu.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Biến đổi",
        "explanation": "$x=2^4=16$."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Phương án đúng là D."
      }
    ],
    "finalAnswer": "D",
    "commonMistakes": [
      "Bỏ điều kiện đối số dương hoặc dùng sai chiều đơn điệu của cơ số."
    ],
    "reviewSuggestions": [
      "Ôn định nghĩa và công thức của bài tương ứng."
    ]
  },
  {
    "id": "math11-assess-s246",
    "courseId": "grade11:math",
    "moduleId": "math11-m6",
    "questionId": "math11-assess-q246",
    "recognition": "Kiểm tra điều kiện rồi áp dụng quy tắc lũy thừa, lôgarit hoặc tính đơn điệu.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Biến đổi",
        "explanation": "$2^{2x}=2^3$ nên $x=3/2$."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Phương án đúng là B."
      }
    ],
    "finalAnswer": "B",
    "commonMistakes": [
      "Bỏ điều kiện đối số dương hoặc dùng sai chiều đơn điệu của cơ số."
    ],
    "reviewSuggestions": [
      "Ôn định nghĩa và công thức của bài tương ứng."
    ]
  },
  {
    "id": "math11-assess-s252",
    "courseId": "grade11:math",
    "moduleId": "math11-m6",
    "questionId": "math11-assess-q252",
    "recognition": "Kiểm tra điều kiện rồi áp dụng quy tắc lũy thừa, lôgarit hoặc tính đơn điệu.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Biến đổi",
        "explanation": "Điều kiện và tính tăng cho $x-1\\ge4$, tức $x\\ge5$."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Phương án đúng là D."
      }
    ],
    "finalAnswer": "D",
    "commonMistakes": [
      "Bỏ điều kiện đối số dương hoặc dùng sai chiều đơn điệu của cơ số."
    ],
    "reviewSuggestions": [
      "Ôn định nghĩa và công thức của bài tương ứng."
    ]
  },
  {
    "id": "math11-assess-s434",
    "courseId": "grade11:math",
    "moduleId": "math11-m6",
    "questionId": "math11-assess-q434",
    "recognition": "Kiểm tra điều kiện rồi nhận dạng quy tắc lũy thừa, lôgarit hoặc tính đơn điệu.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Phân tích và tính toán",
        "explanation": "$27^{2/3}=9$ và $9^{-1/2}=1/3$, nên tích bằng 3."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Kết quả cần chọn hoặc nhập là 3."
      }
    ],
    "finalAnswer": "3",
    "commonMistakes": [
      "Bỏ điều kiện xác định hoặc dùng sai chiều đơn điệu của cơ số."
    ],
    "reviewSuggestions": [
      "Đối chiếu công thức và kiểm tra nghiệm trong miền xác định."
    ]
  },
  {
    "id": "math11-assess-s455",
    "courseId": "grade11:math",
    "moduleId": "math11-m6",
    "questionId": "math11-assess-q455",
    "recognition": "Kiểm tra điều kiện rồi nhận dạng quy tắc lũy thừa, lôgarit hoặc tính đơn điệu.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Phân tích và tính toán",
        "explanation": "Đặt $t=\\log_2x$ thì $\\log_4x=t/2$; $3t/2=6$, nên $t=4$, $x=16$."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Kết quả cần chọn hoặc nhập là 16."
      }
    ],
    "finalAnswer": "16",
    "commonMistakes": [
      "Bỏ điều kiện xác định hoặc dùng sai chiều đơn điệu của cơ số."
    ],
    "reviewSuggestions": [
      "Đối chiếu công thức và kiểm tra nghiệm trong miền xác định."
    ]
  },
  {
    "id": "math11-assess-s460",
    "courseId": "grade11:math",
    "moduleId": "math11-m6",
    "questionId": "math11-assess-q460",
    "recognition": "Kiểm tra điều kiện rồi nhận dạng quy tắc lũy thừa, lôgarit hoặc tính đơn điệu.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Phân tích và tính toán",
        "explanation": "Đồ thị hàm mũ đi qua $(0;1)$, không đi qua $(1;0)$; các phát biểu khác đúng."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Kết quả cần chọn hoặc nhập là a:Đ|b:Đ|c:S|d:Đ."
      }
    ],
    "finalAnswer": "a:Đ|b:Đ|c:S|d:Đ",
    "commonMistakes": [
      "Bỏ điều kiện xác định hoặc dùng sai chiều đơn điệu của cơ số."
    ],
    "reviewSuggestions": [
      "Đối chiếu công thức và kiểm tra nghiệm trong miền xác định."
    ]
  },
  {
    "id": "math11-assess-s466",
    "courseId": "grade11:math",
    "moduleId": "math11-m6",
    "questionId": "math11-assess-q466",
    "recognition": "Kiểm tra điều kiện rồi nhận dạng quy tắc lũy thừa, lôgarit hoặc tính đơn điệu.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Phân tích và tính toán",
        "explanation": "Tăng 5% phải dùng $r=0{,}05$; các diễn giải còn lại đúng."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Kết quả cần chọn hoặc nhập là a:Đ|b:Đ|c:S|d:Đ."
      }
    ],
    "finalAnswer": "a:Đ|b:Đ|c:S|d:Đ",
    "commonMistakes": [
      "Bỏ điều kiện xác định hoặc dùng sai chiều đơn điệu của cơ số."
    ],
    "reviewSuggestions": [
      "Đối chiếu công thức và kiểm tra nghiệm trong miền xác định."
    ]
  },
  {
    "id": "math11-assess-s473",
    "courseId": "grade11:math",
    "moduleId": "math11-m6",
    "questionId": "math11-assess-q473",
    "recognition": "Kiểm tra điều kiện rồi nhận dạng quy tắc lũy thừa, lôgarit hoặc tính đơn điệu.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Phân tích và tính toán",
        "explanation": "Đặt $t=2^x>0$, được $t^2-5t+4=0$, nên $t=1$ hoặc 4; tương ứng $x=0$ hoặc 2, tổng bằng 2."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Kết quả cần chọn hoặc nhập là 2."
      }
    ],
    "finalAnswer": "2",
    "commonMistakes": [
      "Bỏ điều kiện xác định hoặc dùng sai chiều đơn điệu của cơ số."
    ],
    "reviewSuggestions": [
      "Đối chiếu công thức và kiểm tra nghiệm trong miền xác định."
    ]
  },
  {
    "id": "math11-assess-s253",
    "courseId": "grade11:math",
    "moduleId": "math11-m7",
    "questionId": "math11-assess-q253",
    "recognition": "Xác định hình chiếu, quan hệ vuông góc, đường cao hoặc công thức hình khối phù hợp.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Lập luận",
        "explanation": "Theo định nghĩa hoặc tính chất tương ứng, kết quả là $0^\\circ$."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Phương án đúng là A."
      }
    ],
    "finalAnswer": "A",
    "commonMistakes": [
      "Suy luận từ hình vẽ hoặc chọn sai đường vuông góc, hình chiếu hay đường cao."
    ],
    "reviewSuggestions": [
      "Ôn điều kiện áp dụng trong phần lý thuyết bài tương ứng."
    ]
  },
  {
    "id": "math11-assess-s259",
    "courseId": "grade11:math",
    "moduleId": "math11-m7",
    "questionId": "math11-assess-q259",
    "recognition": "Xác định hình chiếu, quan hệ vuông góc, đường cao hoặc công thức hình khối phù hợp.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Lập luận",
        "explanation": "Theo định nghĩa hoặc tính chất tương ứng, kết quả là hai đường vuông góc."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Phương án đúng là B."
      }
    ],
    "finalAnswer": "B",
    "commonMistakes": [
      "Suy luận từ hình vẽ hoặc chọn sai đường vuông góc, hình chiếu hay đường cao."
    ],
    "reviewSuggestions": [
      "Ôn điều kiện áp dụng trong phần lý thuyết bài tương ứng."
    ]
  },
  {
    "id": "math11-assess-s265",
    "courseId": "grade11:math",
    "moduleId": "math11-m7",
    "questionId": "math11-assess-q265",
    "recognition": "Xác định hình chiếu, quan hệ vuông góc, đường cao hoặc công thức hình khối phù hợp.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Lập luận",
        "explanation": "Theo định nghĩa hoặc tính chất tương ứng, kết quả là hai đường cắt nhau trong mặt phẳng."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Phương án đúng là B."
      }
    ],
    "finalAnswer": "B",
    "commonMistakes": [
      "Suy luận từ hình vẽ hoặc chọn sai đường vuông góc, hình chiếu hay đường cao."
    ],
    "reviewSuggestions": [
      "Ôn điều kiện áp dụng trong phần lý thuyết bài tương ứng."
    ]
  },
  {
    "id": "math11-assess-s277",
    "courseId": "grade11:math",
    "moduleId": "math11-m7",
    "questionId": "math11-assess-q277",
    "recognition": "Xác định hình chiếu, quan hệ vuông góc, đường cao hoặc công thức hình khối phù hợp.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Lập luận",
        "explanation": "Theo định nghĩa hoặc tính chất tương ứng, kết quả là chân đường vuông góc."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Phương án đúng là B."
      }
    ],
    "finalAnswer": "B",
    "commonMistakes": [
      "Suy luận từ hình vẽ hoặc chọn sai đường vuông góc, hình chiếu hay đường cao."
    ],
    "reviewSuggestions": [
      "Ôn điều kiện áp dụng trong phần lý thuyết bài tương ứng."
    ]
  },
  {
    "id": "math11-assess-s280",
    "courseId": "grade11:math",
    "moduleId": "math11-m7",
    "questionId": "math11-assess-q280",
    "recognition": "Xác định hình chiếu, quan hệ vuông góc, đường cao hoặc công thức hình khối phù hợp.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Lập luận",
        "explanation": "Theo định nghĩa hoặc tính chất tương ứng, kết quả là $90^\\circ$."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Phương án đúng là D."
      }
    ],
    "finalAnswer": "D",
    "commonMistakes": [
      "Suy luận từ hình vẽ hoặc chọn sai đường vuông góc, hình chiếu hay đường cao."
    ],
    "reviewSuggestions": [
      "Ôn điều kiện áp dụng trong phần lý thuyết bài tương ứng."
    ]
  },
  {
    "id": "math11-assess-s292",
    "courseId": "grade11:math",
    "moduleId": "math11-m7",
    "questionId": "math11-assess-q292",
    "recognition": "Xác định hình chiếu, quan hệ vuông góc, đường cao hoặc công thức hình khối phù hợp.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Lập luận",
        "explanation": "Theo định nghĩa hoặc tính chất tương ứng, kết quả là hai mặt kề vuông góc."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Phương án đúng là B."
      }
    ],
    "finalAnswer": "B",
    "commonMistakes": [
      "Suy luận từ hình vẽ hoặc chọn sai đường vuông góc, hình chiếu hay đường cao."
    ],
    "reviewSuggestions": [
      "Ôn điều kiện áp dụng trong phần lý thuyết bài tương ứng."
    ]
  },
  {
    "id": "math11-assess-s304",
    "courseId": "grade11:math",
    "moduleId": "math11-m7",
    "questionId": "math11-assess-q304",
    "recognition": "Xác định hình chiếu, quan hệ vuông góc, đường cao hoặc công thức hình khối phù hợp.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Lập luận",
        "explanation": "Theo định nghĩa hoặc tính chất tương ứng, kết quả là khoảng cách từ điểm trên đường đến mặt phẳng."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Phương án đúng là B."
      }
    ],
    "finalAnswer": "B",
    "commonMistakes": [
      "Suy luận từ hình vẽ hoặc chọn sai đường vuông góc, hình chiếu hay đường cao."
    ],
    "reviewSuggestions": [
      "Ôn điều kiện áp dụng trong phần lý thuyết bài tương ứng."
    ]
  },
  {
    "id": "math11-assess-s316",
    "courseId": "grade11:math",
    "moduleId": "math11-m7",
    "questionId": "math11-assess-q316",
    "recognition": "Xác định hình chiếu, quan hệ vuông góc, đường cao hoặc công thức hình khối phù hợp.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Lập luận",
        "explanation": "Theo định nghĩa hoặc tính chất tương ứng, kết quả là $a^3$."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Phương án đúng là B."
      }
    ],
    "finalAnswer": "B",
    "commonMistakes": [
      "Suy luận từ hình vẽ hoặc chọn sai đường vuông góc, hình chiếu hay đường cao."
    ],
    "reviewSuggestions": [
      "Ôn điều kiện áp dụng trong phần lý thuyết bài tương ứng."
    ]
  },
  {
    "id": "math11-assess-s318",
    "courseId": "grade11:math",
    "moduleId": "math11-m7",
    "questionId": "math11-assess-q318",
    "recognition": "Xác định hình chiếu, quan hệ vuông góc, đường cao hoặc công thức hình khối phù hợp.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Lập luận",
        "explanation": "Theo định nghĩa hoặc tính chất tương ứng, kết quả là $6$."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Phương án đúng là C."
      }
    ],
    "finalAnswer": "C",
    "commonMistakes": [
      "Suy luận từ hình vẽ hoặc chọn sai đường vuông góc, hình chiếu hay đường cao."
    ],
    "reviewSuggestions": [
      "Ôn điều kiện áp dụng trong phần lý thuyết bài tương ứng."
    ]
  },
  {
    "id": "math11-assess-s501",
    "courseId": "grade11:math",
    "moduleId": "math11-m7",
    "questionId": "math11-assess-q501",
    "recognition": "Xác định quan hệ vuông góc, hình chiếu, khoảng cách hoặc công thức thể tích phù hợp.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Phân tích cấu hình",
        "explanation": "Tam giác $SHM$ vuông tại $H$: $HM=\\sqrt{13^2-5^2}=12$."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Đáp án cần chọn hoặc nhập là 12."
      }
    ],
    "finalAnswer": "12",
    "commonMistakes": [
      "Suy luận trực tiếp từ hình vẽ hoặc chọn sai đường cao, hình chiếu."
    ],
    "reviewSuggestions": [
      "Vẽ lại cấu hình và ghi rõ định lí được sử dụng."
    ]
  },
  {
    "id": "math11-assess-s515",
    "courseId": "grade11:math",
    "moduleId": "math11-m7",
    "questionId": "math11-assess-q515",
    "recognition": "Xác định quan hệ vuông góc, hình chiếu, khoảng cách hoặc công thức thể tích phù hợp.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Phân tích cấu hình",
        "explanation": "Hình chiếu của $SB$ là $AB$; tam giác $SAB$ vuông cân."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Đáp án cần chọn hoặc nhập là 45."
      }
    ],
    "finalAnswer": "45",
    "commonMistakes": [
      "Suy luận trực tiếp từ hình vẽ hoặc chọn sai đường cao, hình chiếu."
    ],
    "reviewSuggestions": [
      "Vẽ lại cấu hình và ghi rõ định lí được sử dụng."
    ]
  },
  {
    "id": "math11-assess-s522",
    "courseId": "grade11:math",
    "moduleId": "math11-m7",
    "questionId": "math11-assess-q522",
    "recognition": "Xác định quan hệ vuông góc, hình chiếu, khoảng cách hoặc công thức thể tích phù hợp.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Phân tích cấu hình",
        "explanation": "$\\cos90^\\circ=0$."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Đáp án cần chọn hoặc nhập là 0."
      }
    ],
    "finalAnswer": "0",
    "commonMistakes": [
      "Suy luận trực tiếp từ hình vẽ hoặc chọn sai đường cao, hình chiếu."
    ],
    "reviewSuggestions": [
      "Vẽ lại cấu hình và ghi rõ định lí được sử dụng."
    ]
  },
  {
    "id": "math11-assess-s325",
    "courseId": "grade11:math",
    "moduleId": "math11-m8",
    "questionId": "math11-assess-q325",
    "recognition": "Mô tả biến cố rồi chọn đúng công thức cộng, nhân, biến cố đối hoặc sơ đồ cây.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Tính xác suất",
        "explanation": "Áp dụng định nghĩa hoặc quy tắc phù hợp thu được ít nhất một biến cố."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Phương án đúng là C."
      }
    ],
    "finalAnswer": "C",
    "commonMistakes": [
      "Nhầm xung khắc với độc lập hoặc bỏ phần giao trong công thức cộng."
    ],
    "reviewSuggestions": [
      "Ôn định nghĩa biến cố và điều kiện áp dụng công thức."
    ]
  },
  {
    "id": "math11-assess-s331",
    "courseId": "grade11:math",
    "moduleId": "math11-m8",
    "questionId": "math11-assess-q331",
    "recognition": "Mô tả biến cố rồi chọn đúng công thức cộng, nhân, biến cố đối hoặc sơ đồ cây.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Tính xác suất",
        "explanation": "Áp dụng định nghĩa hoặc quy tắc phù hợp thu được giao rỗng."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Phương án đúng là B."
      }
    ],
    "finalAnswer": "B",
    "commonMistakes": [
      "Nhầm xung khắc với độc lập hoặc bỏ phần giao trong công thức cộng."
    ],
    "reviewSuggestions": [
      "Ôn định nghĩa biến cố và điều kiện áp dụng công thức."
    ]
  },
  {
    "id": "math11-assess-s337",
    "courseId": "grade11:math",
    "moduleId": "math11-m8",
    "questionId": "math11-assess-q337",
    "recognition": "Mô tả biến cố rồi chọn đúng công thức cộng, nhân, biến cố đối hoặc sơ đồ cây.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Tính xác suất",
        "explanation": "Áp dụng định nghĩa hoặc quy tắc phù hợp thu được $0{,}7$."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Phương án đúng là C."
      }
    ],
    "finalAnswer": "C",
    "commonMistakes": [
      "Nhầm xung khắc với độc lập hoặc bỏ phần giao trong công thức cộng."
    ],
    "reviewSuggestions": [
      "Ôn định nghĩa biến cố và điều kiện áp dụng công thức."
    ]
  },
  {
    "id": "math11-assess-s338",
    "courseId": "grade11:math",
    "moduleId": "math11-m8",
    "questionId": "math11-assess-q338",
    "recognition": "Mô tả biến cố rồi chọn đúng công thức cộng, nhân, biến cố đối hoặc sơ đồ cây.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Tính xác suất",
        "explanation": "Áp dụng định nghĩa hoặc quy tắc phù hợp thu được $0{,}7$."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Phương án đúng là B."
      }
    ],
    "finalAnswer": "B",
    "commonMistakes": [
      "Nhầm xung khắc với độc lập hoặc bỏ phần giao trong công thức cộng."
    ],
    "reviewSuggestions": [
      "Ôn định nghĩa biến cố và điều kiện áp dụng công thức."
    ]
  },
  {
    "id": "math11-assess-s340",
    "courseId": "grade11:math",
    "moduleId": "math11-m8",
    "questionId": "math11-assess-q340",
    "recognition": "Mô tả biến cố rồi chọn đúng công thức cộng, nhân, biến cố đối hoặc sơ đồ cây.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Tính xác suất",
        "explanation": "Áp dụng định nghĩa hoặc quy tắc phù hợp thu được $0{,}3$."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Phương án đúng là D."
      }
    ],
    "finalAnswer": "D",
    "commonMistakes": [
      "Nhầm xung khắc với độc lập hoặc bỏ phần giao trong công thức cộng."
    ],
    "reviewSuggestions": [
      "Ôn định nghĩa biến cố và điều kiện áp dụng công thức."
    ]
  },
  {
    "id": "math11-assess-s344",
    "courseId": "grade11:math",
    "moduleId": "math11-m8",
    "questionId": "math11-assess-q344",
    "recognition": "Mô tả biến cố rồi chọn đúng công thức cộng, nhân, biến cố đối hoặc sơ đồ cây.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Tính xác suất",
        "explanation": "Áp dụng định nghĩa hoặc quy tắc phù hợp thu được $2/13$."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Phương án đúng là D."
      }
    ],
    "finalAnswer": "D",
    "commonMistakes": [
      "Nhầm xung khắc với độc lập hoặc bỏ phần giao trong công thức cộng."
    ],
    "reviewSuggestions": [
      "Ôn định nghĩa biến cố và điều kiện áp dụng công thức."
    ]
  },
  {
    "id": "math11-assess-s349",
    "courseId": "grade11:math",
    "moduleId": "math11-m8",
    "questionId": "math11-assess-q349",
    "recognition": "Mô tả biến cố rồi chọn đúng công thức cộng, nhân, biến cố đối hoặc sơ đồ cây.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Tính xác suất",
        "explanation": "Áp dụng định nghĩa hoặc quy tắc phù hợp thu được $0{,}2$."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Phương án đúng là B."
      }
    ],
    "finalAnswer": "B",
    "commonMistakes": [
      "Nhầm xung khắc với độc lập hoặc bỏ phần giao trong công thức cộng."
    ],
    "reviewSuggestions": [
      "Ôn định nghĩa biến cố và điều kiện áp dụng công thức."
    ]
  },
  {
    "id": "math11-assess-s352",
    "courseId": "grade11:math",
    "moduleId": "math11-m8",
    "questionId": "math11-assess-q352",
    "recognition": "Mô tả biến cố rồi chọn đúng công thức cộng, nhân, biến cố đối hoặc sơ đồ cây.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Tính xác suất",
        "explanation": "Áp dụng định nghĩa hoặc quy tắc phù hợp thu được $0{,}64$."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Phương án đúng là A."
      }
    ],
    "finalAnswer": "A",
    "commonMistakes": [
      "Nhầm xung khắc với độc lập hoặc bỏ phần giao trong công thức cộng."
    ],
    "reviewSuggestions": [
      "Ôn định nghĩa biến cố và điều kiện áp dụng công thức."
    ]
  },
  {
    "id": "math11-assess-s353",
    "courseId": "grade11:math",
    "moduleId": "math11-m8",
    "questionId": "math11-assess-q353",
    "recognition": "Mô tả biến cố rồi chọn đúng công thức cộng, nhân, biến cố đối hoặc sơ đồ cây.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Tính xác suất",
        "explanation": "Áp dụng định nghĩa hoặc quy tắc phù hợp thu được $0{,}3$."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Phương án đúng là B."
      }
    ],
    "finalAnswer": "B",
    "commonMistakes": [
      "Nhầm xung khắc với độc lập hoặc bỏ phần giao trong công thức cộng."
    ],
    "reviewSuggestions": [
      "Ôn định nghĩa biến cố và điều kiện áp dụng công thức."
    ]
  },
  {
    "id": "math11-assess-s360",
    "courseId": "grade11:math",
    "moduleId": "math11-m8",
    "questionId": "math11-assess-q360",
    "recognition": "Mô tả biến cố rồi chọn đúng công thức cộng, nhân, biến cố đối hoặc sơ đồ cây.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Tính xác suất",
        "explanation": "Áp dụng định nghĩa hoặc quy tắc phù hợp thu được $0{,}19$."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Phương án đúng là A."
      }
    ],
    "finalAnswer": "A",
    "commonMistakes": [
      "Nhầm xung khắc với độc lập hoặc bỏ phần giao trong công thức cộng."
    ],
    "reviewSuggestions": [
      "Ôn định nghĩa biến cố và điều kiện áp dụng công thức."
    ]
  },
  {
    "id": "math11-assess-s557",
    "courseId": "grade11:math",
    "moduleId": "math11-m8",
    "questionId": "math11-assess-q557",
    "recognition": "Mô tả biến cố rồi chọn công thức cộng, nhân, biến cố đối hoặc sơ đồ cây.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Phân tích biến cố",
        "explanation": "$|\\overline A|=20-7=13$."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Đáp án cần chọn hoặc nhập là 13."
      }
    ],
    "finalAnswer": "13",
    "commonMistakes": [
      "Nhầm xung khắc với độc lập hoặc bỏ phần giao trong công thức cộng."
    ],
    "reviewSuggestions": [
      "Viết rõ biến cố và kiểm tra kết quả nằm trong đoạn $[0;1]$."
    ]
  },
  {
    "id": "math11-assess-s566",
    "courseId": "grade11:math",
    "moduleId": "math11-m8",
    "questionId": "math11-assess-q566",
    "recognition": "Mô tả biến cố rồi chọn công thức cộng, nhân, biến cố đối hoặc sơ đồ cây.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Phân tích biến cố",
        "explanation": "Chuyển vế công thức cộng: $0{,}5+0{,}4-0{,}8=0{,}1$."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Đáp án cần chọn hoặc nhập là 0.1."
      }
    ],
    "finalAnswer": "0.1",
    "commonMistakes": [
      "Nhầm xung khắc với độc lập hoặc bỏ phần giao trong công thức cộng."
    ],
    "reviewSuggestions": [
      "Viết rõ biến cố và kiểm tra kết quả nằm trong đoạn $[0;1]$."
    ]
  },
  {
    "id": "math11-assess-s361",
    "courseId": "grade11:math",
    "moduleId": "math11-m9",
    "questionId": "math11-assess-q361",
    "recognition": "Nhận dạng yêu cầu dùng định nghĩa, ý nghĩa hình học hoặc tốc độ biến thiên tức thời.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Áp dụng kiến thức",
        "explanation": "Theo định nghĩa, phải lấy giới hạn của $\\dfrac{f(x)-f(x_0)}{x-x_0}$ khi $x\\to x_0$."
      },
      {
        "order": 2,
        "title": "Đối chiếu phương án",
        "explanation": "Kết quả là định nghĩa theo giới hạn, tương ứng phương án B."
      }
    ],
    "finalAnswer": "B",
    "commonMistakes": [
      "Bỏ giới hạn trong định nghĩa hoặc thiếu tọa độ tiếp điểm khi viết tiếp tuyến."
    ],
    "reviewSuggestions": [
      "Ôn tỉ số biến thiên, giới hạn, hệ số góc và phương trình đường thẳng."
    ]
  },
  {
    "id": "math11-assess-s364",
    "courseId": "grade11:math",
    "moduleId": "math11-m9",
    "questionId": "math11-assess-q364",
    "recognition": "Nhận dạng yêu cầu dùng định nghĩa, ý nghĩa hình học hoặc tốc độ biến thiên tức thời.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Áp dụng kiến thức",
        "explanation": "$\\dfrac{3(x_0+h)+1-(3x_0+1)}h=3$, nên đạo hàm tại mọi điểm bằng 3."
      },
      {
        "order": 2,
        "title": "Đối chiếu phương án",
        "explanation": "Kết quả là $3$, tương ứng phương án D."
      }
    ],
    "finalAnswer": "D",
    "commonMistakes": [
      "Bỏ giới hạn trong định nghĩa hoặc thiếu tọa độ tiếp điểm khi viết tiếp tuyến."
    ],
    "reviewSuggestions": [
      "Ôn tỉ số biến thiên, giới hạn, hệ số góc và phương trình đường thẳng."
    ]
  },
  {
    "id": "math11-assess-s373",
    "courseId": "grade11:math",
    "moduleId": "math11-m9",
    "questionId": "math11-assess-q373",
    "recognition": "Nhận dạng hàm sơ cấp và phép toán ngoài cùng trước khi chọn quy tắc đạo hàm.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Áp dụng kiến thức",
        "explanation": "Áp dụng $(x^n)^{\\prime}=nx^{n-1}$ với $n=5$ được $5x^4$."
      },
      {
        "order": 2,
        "title": "Đối chiếu phương án",
        "explanation": "Kết quả là $5x^4$, tương ứng phương án B."
      }
    ],
    "finalAnswer": "B",
    "commonMistakes": [
      "Nhầm quy tắc tích, thương hoặc quên nhân đạo hàm của hàm bên trong."
    ],
    "reviewSuggestions": [
      "Ôn bảng đạo hàm cơ bản và luyện nhận dạng cấu trúc hàm số."
    ]
  },
  {
    "id": "math11-assess-s376",
    "courseId": "grade11:math",
    "moduleId": "math11-m9",
    "questionId": "math11-assess-q376",
    "recognition": "Nhận dạng hàm sơ cấp và phép toán ngoài cùng trước khi chọn quy tắc đạo hàm.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Áp dụng kiến thức",
        "explanation": "Công thức đạo hàm lượng giác cơ bản cho $(\\cos x)^{\\prime}=-\\sin x$."
      },
      {
        "order": 2,
        "title": "Đối chiếu phương án",
        "explanation": "Kết quả là $-\\sin x$, tương ứng phương án D."
      }
    ],
    "finalAnswer": "D",
    "commonMistakes": [
      "Nhầm quy tắc tích, thương hoặc quên nhân đạo hàm của hàm bên trong."
    ],
    "reviewSuggestions": [
      "Ôn bảng đạo hàm cơ bản và luyện nhận dạng cấu trúc hàm số."
    ]
  },
  {
    "id": "math11-assess-s385",
    "courseId": "grade11:math",
    "moduleId": "math11-m9",
    "questionId": "math11-assess-q385",
    "recognition": "Xác định cần lấy đạo hàm lần thứ hai hoặc chuyển từ tọa độ, vận tốc sang gia tốc.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Áp dụng kiến thức",
        "explanation": "Theo định nghĩa, đạo hàm cấp hai là đạo hàm của đạo hàm cấp một: $f^{\\prime\\prime}=(f^{\\prime})^{\\prime}$."
      },
      {
        "order": 2,
        "title": "Đối chiếu phương án",
        "explanation": "Kết quả là $(f^{\\prime})^{\\prime}$, tương ứng phương án B."
      }
    ],
    "finalAnswer": "B",
    "commonMistakes": [
      "Nhầm $f^{\\prime\\prime}$ với $(f^{\\prime})^2$ hoặc lấy sai số lần đạo hàm."
    ],
    "reviewSuggestions": [
      "Viết riêng từng dòng $f^{\\prime}$, $f^{\\prime\\prime}$ hoặc $s$, $v$, $a$ để tránh nhầm."
    ]
  },
  {
    "id": "math11-assess-s388",
    "courseId": "grade11:math",
    "moduleId": "math11-m9",
    "questionId": "math11-assess-q388",
    "recognition": "Xác định cần lấy đạo hàm lần thứ hai hoặc chuyển từ tọa độ, vận tốc sang gia tốc.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Áp dụng kiến thức",
        "explanation": "Đạo hàm của $e^x$ vẫn là $e^x$ ở cả lần thứ nhất và lần thứ hai."
      },
      {
        "order": 2,
        "title": "Đối chiếu phương án",
        "explanation": "Kết quả là $e^x$, tương ứng phương án D."
      }
    ],
    "finalAnswer": "D",
    "commonMistakes": [
      "Nhầm $f^{\\prime\\prime}$ với $(f^{\\prime})^2$ hoặc lấy sai số lần đạo hàm."
    ],
    "reviewSuggestions": [
      "Viết riêng từng dòng $f^{\\prime}$, $f^{\\prime\\prime}$ hoặc $s$, $v$, $a$ để tránh nhầm."
    ]
  },
  {
    "id": "math11-assess-s389",
    "courseId": "grade11:math",
    "moduleId": "math11-m9",
    "questionId": "math11-assess-q389",
    "recognition": "Xác định cần lấy đạo hàm lần thứ hai hoặc chuyển từ tọa độ, vận tốc sang gia tốc.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Áp dụng kiến thức",
        "explanation": "$f^{\\prime}(x)=4x^3$, nên $f^{\\prime\\prime}(x)=12x^2$."
      },
      {
        "order": 2,
        "title": "Đối chiếu phương án",
        "explanation": "Kết quả là $12x^2$, tương ứng phương án B."
      }
    ],
    "finalAnswer": "B",
    "commonMistakes": [
      "Nhầm $f^{\\prime\\prime}$ với $(f^{\\prime})^2$ hoặc lấy sai số lần đạo hàm."
    ],
    "reviewSuggestions": [
      "Viết riêng từng dòng $f^{\\prime}$, $f^{\\prime\\prime}$ hoặc $s$, $v$, $a$ để tránh nhầm."
    ]
  },
  {
    "id": "math11-assess-s391",
    "courseId": "grade11:math",
    "moduleId": "math11-m9",
    "questionId": "math11-assess-q391",
    "recognition": "Xác định cần lấy đạo hàm lần thứ hai hoặc chuyển từ tọa độ, vận tốc sang gia tốc.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Áp dụng kiến thức",
        "explanation": "$v(t)=s^{\\prime}(t)=3t^2$ và $a(t)=v^{\\prime}(t)=6t$; thay $t=2$ được 12."
      },
      {
        "order": 2,
        "title": "Đối chiếu phương án",
        "explanation": "Kết quả là $12$, tương ứng phương án C."
      }
    ],
    "finalAnswer": "C",
    "commonMistakes": [
      "Nhầm $f^{\\prime\\prime}$ với $(f^{\\prime})^2$ hoặc lấy sai số lần đạo hàm."
    ],
    "reviewSuggestions": [
      "Viết riêng từng dòng $f^{\\prime}$, $f^{\\prime\\prime}$ hoặc $s$, $v$, $a$ để tránh nhầm."
    ]
  },
  {
    "id": "math11-assess-s396",
    "courseId": "grade11:math",
    "moduleId": "math11-m9",
    "questionId": "math11-assess-q396",
    "recognition": "Xác định cần lấy đạo hàm lần thứ hai hoặc chuyển từ tọa độ, vận tốc sang gia tốc.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Áp dụng kiến thức",
        "explanation": "$f^{\\prime}(x)=4x^3-4x$; lấy đạo hàm lần nữa được $f^{\\prime\\prime}(x)=12x^2-4$."
      },
      {
        "order": 2,
        "title": "Đối chiếu phương án",
        "explanation": "Kết quả là $12x^2-4$, tương ứng phương án D."
      }
    ],
    "finalAnswer": "D",
    "commonMistakes": [
      "Nhầm $f^{\\prime\\prime}$ với $(f^{\\prime})^2$ hoặc lấy sai số lần đạo hàm."
    ],
    "reviewSuggestions": [
      "Viết riêng từng dòng $f^{\\prime}$, $f^{\\prime\\prime}$ hoặc $s$, $v$, $a$ để tránh nhầm."
    ]
  },
  {
    "id": "math11-assess-s599",
    "courseId": "grade11:math",
    "moduleId": "math11-m9",
    "questionId": "math11-assess-q599",
    "recognition": "Xác định đang dùng định nghĩa, ý nghĩa hình học, quy tắc đạo hàm hay đạo hàm cấp hai.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Tính đạo hàm",
        "explanation": "$f^{\\prime}(x)=3x^2-2$, nên $f^{\\prime}(1)=1$."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Đáp án cần chọn hoặc nhập là 1."
      }
    ],
    "finalAnswer": "1",
    "commonMistakes": [
      "Bỏ đạo hàm hàm trong, dùng sai quy tắc tích hoặc nhầm đạo hàm cấp hai với bình phương."
    ],
    "reviewSuggestions": [
      "Viết riêng từng lần đạo hàm và kiểm tra điều kiện xác định."
    ]
  },
  {
    "id": "math11-assess-s602",
    "courseId": "grade11:math",
    "moduleId": "math11-m9",
    "questionId": "math11-assess-q602",
    "recognition": "Xác định đang dùng định nghĩa, ý nghĩa hình học, quy tắc đạo hàm hay đạo hàm cấp hai.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Tính đạo hàm",
        "explanation": "$y^{\\prime}=\\cos x-\\sin x$, thay $x=\\pi/2$ được $-1$."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Đáp án cần chọn hoặc nhập là -1."
      }
    ],
    "finalAnswer": "-1",
    "commonMistakes": [
      "Bỏ đạo hàm hàm trong, dùng sai quy tắc tích hoặc nhầm đạo hàm cấp hai với bình phương."
    ],
    "reviewSuggestions": [
      "Viết riêng từng lần đạo hàm và kiểm tra điều kiện xác định."
    ]
  },
  {
    "id": "math11-assess-s617",
    "courseId": "grade11:math",
    "moduleId": "math11-m9",
    "questionId": "math11-assess-q617",
    "recognition": "Xác định đang dùng định nghĩa, ý nghĩa hình học, quy tắc đạo hàm hay đạo hàm cấp hai.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Tính đạo hàm",
        "explanation": "$f^{\\prime}=e^x(1+x)$, $f^{\\prime\\prime}=e^x(x+2)$; tại 1 bằng $3e$."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Đáp án cần chọn hoặc nhập là 3e."
      }
    ],
    "finalAnswer": "3e",
    "commonMistakes": [
      "Bỏ đạo hàm hàm trong, dùng sai quy tắc tích hoặc nhầm đạo hàm cấp hai với bình phương."
    ],
    "reviewSuggestions": [
      "Viết riêng từng lần đạo hàm và kiểm tra điều kiện xác định."
    ]
  }
];
// </generated-assessment-bank>
export const g11MathAssessmentBlueprints: AssessmentBlueprint[] = assessmentSpecs.map(spec => ({
  id: spec.blueprintId,
  subjectId: 'math',
  title: `Ma trận – ${spec.title}`,
  kind: spec.kind,
  focus: 'mixed',
  difficultyBand: 'standard',
  targetScoreRange: { min: 5, max: 8 },
  semester: spec.semester,
  seriesOrder: spec.seriesOrder,
  duration: spec.duration,
  totalPoints: 10,
  scopeTopicIds: spec.scopeTopicIds,
  topicWeights: spec.topicWeights,
  outcomeIds: spec.outcomeIds,
  competencyWeights: {
    mathematical_reasoning: 0.4,
    mathematical_modeling: 0.2,
    mathematical_problem_solving: 0.4
  },
  difficultyWeights: { easy: 0.3, medium: 0.5, hard: 0.2 },
  sections: sectionsFor(spec)
}));
