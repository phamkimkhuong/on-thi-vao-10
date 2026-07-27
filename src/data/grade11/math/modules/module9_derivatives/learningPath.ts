import type { LearningMisconception, LearningOutcome } from '@/types';

const outcome = (
  index: number,
  title: string,
  description: string,
  prerequisiteOutcomeIds: string[]
): LearningOutcome => ({
  id: `out-math11-m9-0${index}`,
  topicId: 'math11-t09',
  title,
  description,
  scope: 'core',
  orderIndex: 30 + index,
  questionTypeIds: [`math11-qt${30 + index}`],
  prerequisiteOutcomeIds,
  misconceptionIds: [`misc-math11-m9-0${index}`],
  evidenceTypes: ['recognition', 'representation', 'calculation', 'explanation', 'application'],
  estimatedMinutes: 65,
  isCritical: true
});

export const g11MathModule9Outcomes: LearningOutcome[] = [
  outcome(
    1,
    'Định nghĩa và ý nghĩa của đạo hàm',
    'Tính đạo hàm đơn giản bằng định nghĩa; giải thích hệ số góc tiếp tuyến, tốc độ biến thiên tức thời, số e và viết phương trình tiếp tuyến.',
    ['out-math11-m5-02', 'out-math11-m5-03']
  ),
  outcome(
    2,
    'Các quy tắc tính đạo hàm',
    'Tính đạo hàm của hàm sơ cấp, tổng, hiệu, tích, thương và hàm hợp; vận dụng trong tình huống phù hợp.',
    ['out-math11-m9-01', 'out-math11-m6-03']
  ),
  outcome(
    3,
    'Đạo hàm cấp hai',
    'Nhận biết và tính đạo hàm cấp hai của hàm đơn giản; giải thích vận tốc và gia tốc trong chuyển động.',
    ['out-math11-m9-02']
  )
];

export const g11MathModule9Misconceptions: LearningMisconception[] = [
  {
    id: 'misc-math11-m9-01',
    outcomeId: 'out-math11-m9-01',
    statement: 'Đạo hàm tại một điểm chính là tỉ số biến thiên tại một khoảng hữu hạn.',
    correction:
      'Đạo hàm là giới hạn của tỉ số biến thiên khi số gia của biến tiến tới 0 và chỉ tồn tại khi giới hạn hữu hạn tồn tại.',
    severity: 'critical'
  },
  {
    id: 'misc-math11-m9-02',
    outcomeId: 'out-math11-m9-02',
    statement: 'Có thể lấy đạo hàm từng thừa số trong tích rồi nhân các kết quả.',
    correction: 'Quy tắc đúng là $(uv)\'=u\'v+uv\'$; hàm hợp còn phải nhân với đạo hàm của hàm bên trong.',
    severity: 'critical'
  },
  {
    id: 'misc-math11-m9-03',
    outcomeId: 'out-math11-m9-03',
    statement: 'Đạo hàm cấp hai là bình phương của đạo hàm cấp một.',
    correction: 'Đạo hàm cấp hai là đạo hàm của đạo hàm cấp một: $f\'\'=(f\')\'$, không phải $(f\')^2$.',
    severity: 'critical'
  }
];
