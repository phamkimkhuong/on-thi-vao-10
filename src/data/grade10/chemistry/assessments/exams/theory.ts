import type { MockExam } from '@/types';

const createdAt = '2026-07-15T00:00:00.000Z';
const moduleNames = [
  'Cấu tạo nguyên tử',
  'Bảng tuần hoàn',
  'Liên kết hóa học',
  'Phản ứng oxi hóa–khử',
  'Năng lượng hóa học',
  'Tốc độ phản ứng',
  'Halogen'
] as const;

export const chemistryTheoryModuleExams: MockExam[] = moduleNames.flatMap((moduleName, index) => {
  const moduleNumber = index + 1;
  return (['A', 'B'] as const).map(formCode => {
    const firstQuestion = formCode === 'A' ? 1 : 5;
    return {
      id: `chem10-theory-module${moduleNumber}-${formCode.toLowerCase()}`,
      subjectId: 'chemistry',
      title: `Lý thuyết Chuyên đề ${moduleNumber} – ${moduleName} (Mã ${formCode})`,
      duration: 12,
      kind: 'module_checkpoint',
      focus: 'theory',
      theoryScope: 'module',
      scopeTopicIds: [`chem10-t${moduleNumber}`],
      totalPoints: 8,
      formCode,
      resultReleasePolicy: 'after_submit',
      instructions: [
        'Bài gồm 8 câu được chọn từ ngân hàng 12 câu lý thuyết của chuyên đề.',
        'Hãy chọn phương án giải thích chính xác nhất, không chỉ dựa vào từ khóa quen thuộc.',
        'Sau khi nộp bài, mở lời giải để xem dấu hiệu nhận dạng và nguyên tắc cần nhớ.'
      ],
      questionIds: Array.from(
        { length: 8 },
        (_, questionIndex) => `chem10-theory-m${moduleNumber}-q${String(firstQuestion + questionIndex).padStart(2, '0')}`
      ),
      createdAt
    } satisfies MockExam;
  });
});

const comprehensiveQuestionIds = (form: 'A' | 'B') => {
  const positions = form === 'A' ? [1, 3, 5, 7] : [2, 4, 6, 8];
  return Array.from({ length: 7 }, (_, moduleIndex) => moduleIndex + 1).flatMap(moduleNumber =>
    positions.map(position => `chem10-theory-m${moduleNumber}-q${String(position).padStart(2, '0')}`)
  );
};

export const chemistryTheoryComprehensiveExams: MockExam[] = (['A', 'B'] as const).map(formCode => ({
  id: `chem10-theory-comprehensive-${formCode.toLowerCase()}`,
  subjectId: 'chemistry',
  title: `Kiểm tra lý thuyết tổng hợp Hóa học 10 (Mã ${formCode})`,
  duration: 30,
  kind: 'full_course',
  focus: 'theory',
  theoryScope: 'comprehensive',
  scopeTopicIds: Array.from({ length: 7 }, (_, index) => `chem10-t${index + 1}`),
  totalPoints: 28,
  formCode,
  resultReleasePolicy: 'after_submit',
  instructions: [
    'Bài gồm 28 câu, phân bố đều 4 câu cho mỗi chuyên đề Hóa học 10.',
    'Đề ưu tiên hiểu khái niệm, giải thích nguyên nhân, phát hiện ngộ nhận và đọc bằng chứng.',
    'Kết quả sẽ được phân tích theo chuẩn đầu ra để chỉ ra chuyên đề cần củng cố.'
  ],
  questionIds: comprehensiveQuestionIds(formCode),
  createdAt
}));

export const chemistryTheoryExams: MockExam[] = [
  ...chemistryTheoryModuleExams,
  ...chemistryTheoryComprehensiveExams
];
