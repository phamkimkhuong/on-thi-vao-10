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
  numbers.map(number => `math11-q${String(number).padStart(3, '0')}`);
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

export const g11MathAssessmentQuestions: Question[] = [];
export const g11MathAssessmentSolutions: Solution[] = [];
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
