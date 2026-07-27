import type { LearningOutcome, LearningMisconception } from '@/types';

const outcome = (
  number: number, title: string, description: string,
  prerequisiteOutcomeIds: string[], evidenceTypes: LearningOutcome['evidenceTypes']
): LearningOutcome => ({
  id: `out-math11-m4-0${number}`, topicId: 'math11-t04', title, description,
  scope: 'core', orderIndex: 9 + number, questionTypeIds: [`math11-qt${9 + number}`],
  prerequisiteOutcomeIds, misconceptionIds: [`misc-math11-m4-0${number}`],
  evidenceTypes, estimatedMinutes: number === 4 ? 70 : 55, isCritical: true
});

export const g11MathModule4Outcomes: LearningOutcome[] = [
  outcome(1, 'Đường thẳng và mặt phẳng trong không gian', 'Nhận biết quan hệ liên thuộc, ba cách xác định mặt phẳng; tìm giao điểm, giao tuyến và nhận biết hình chóp, tứ diện.', [], ['recognition', 'representation', 'explanation']),
  outcome(2, 'Hai đường thẳng song song', 'Phân loại vị trí tương đối của hai đường thẳng và vận dụng tính chất hai đường thẳng song song trong không gian.', ['out-math11-m4-01'], ['recognition', 'representation', 'explanation']),
  outcome(3, 'Đường thẳng song song với mặt phẳng', 'Nhận biết, giải thích điều kiện và tính chất cơ bản của đường thẳng song song với mặt phẳng.', ['out-math11-m4-01', 'out-math11-m4-02'], ['recognition', 'representation', 'explanation', 'application']),
  outcome(4, 'Hai mặt phẳng song song', 'Giải thích điều kiện, tính chất hai mặt phẳng song song; vận dụng định lí Thalès và tính chất lăng trụ, hình hộp.', ['out-math11-m4-03'], ['recognition', 'representation', 'calculation', 'explanation', 'application']),
  outcome(5, 'Phép chiếu song song', 'Nhận biết phép chiếu song song, xác định ảnh của hình và mô tả hình biểu diễn của các hình khối đơn giản.', ['out-math11-m4-02'], ['recognition', 'representation', 'explanation', 'application'])
];

export const g11MathModule4Misconceptions: LearningMisconception[] = [
  { id: 'misc-math11-m4-01', outcomeId: 'out-math11-m4-01', statement: 'Hai mặt phẳng có một điểm chung chỉ giao nhau tại điểm đó.', correction: 'Hai mặt phẳng phân biệt có điểm chung thì giao nhau theo một đường thẳng.', severity: 'critical' },
  { id: 'misc-math11-m4-02', outcomeId: 'out-math11-m4-02', statement: 'Hai đường thẳng không cắt nhau trong không gian luôn song song.', correction: 'Nếu không đồng phẳng, hai đường thẳng không cắt nhau là chéo nhau.', severity: 'critical' },
  { id: 'misc-math11-m4-03', outcomeId: 'out-math11-m4-03', statement: 'Một đường thẳng không có điểm chung với một đường trong mặt phẳng thì song song với mặt phẳng.', correction: 'Cần một đường thẳng nằm trong mặt phẳng song song với đường đã cho và đường đã cho không nằm trong mặt phẳng.', severity: 'critical' },
  { id: 'misc-math11-m4-04', outcomeId: 'out-math11-m4-04', statement: 'Hai mặt phẳng cùng song song với một đường thẳng thì song song nhau.', correction: 'Điều kiện đủ thường dùng là một mặt phẳng chứa hai đường cắt nhau cùng song song với mặt phẳng kia.', severity: 'critical' },
  { id: 'misc-math11-m4-05', outcomeId: 'out-math11-m4-05', statement: 'Phép chiếu song song bảo toàn mọi độ dài và góc.', correction: 'Phép chiếu song song bảo toàn thẳng hàng, song song và tỉ số trên cùng hoặc hai đường song song; không bảo toàn độ dài, góc nói chung.', severity: 'critical' }
];
