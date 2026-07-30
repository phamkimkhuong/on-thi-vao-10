import type { LearningMisconception, LearningOutcome } from '@/types';
const specs = [
  ['pronunciation', 'Nhận biết ngữ điệu trong tag questions', 'Phân biệt rising tag hỏi thật và falling tag tìm sự đồng thuận.', [], false],
  ['vocabulary', 'Vận dụng từ vựng về hệ sinh thái', 'Dùng từ và collocation về habitat, biodiversity, food web, threats và restoration.', [], true],
  ['grammar', 'Cấu tạo và dùng compound nouns', 'Nhận biết cấu trúc, spelling và head noun của danh từ ghép.', [], true],
  ['reading', 'Đọc hiểu văn bản về hệ sinh thái', 'Phân tích quan hệ sinh thái, evidence, trade-off và uncertainty.', ['eng11-out-u10-vocabulary'], true],
  ['writing', 'Tổ chức bài viết gián tiếp về hệ sinh thái', 'Sắp xếp problem–mechanism–evidence–response và tránh overclaim.', ['eng11-out-u10-vocabulary', 'eng11-out-u10-grammar'], false],
  ['communication', 'Trao đổi về bảo vệ hệ sinh thái', 'Hỏi làm rõ, đề xuất và cân bằng lợi ích, rủi ro, tri thức địa phương.', ['eng11-out-u10-vocabulary'], false]
] as const;
export const g11EnglishModule10Outcomes: LearningOutcome[] = specs.map((s, i) => ({
  id: `eng11-out-u10-${s[0]}`, topicId: 'eng11-topic-u10', title: s[1], description: s[2], scope: 'core',
  orderIndex: i + 1, questionTypeIds: [`eng11-qt-u10-${s[0]}`], prerequisiteOutcomeIds: [...s[3]],
  misconceptionIds: [`eng11-misc-u10-${s[0]}`], evidenceTypes: i === 4 ? ['representation', 'application'] : ['recognition', 'explanation', 'application'],
  estimatedMinutes: i === 0 || i === 5 ? 30 : i === 1 || i === 4 ? 45 : 60, isCritical: s[4]
}));
const mis = [
  ['pronunciation', 'Mọi tag question đều lên giọng.', 'Rising tag thường hỏi thật; falling tag thường mời đồng thuận/xác nhận điều người nói tin.'],
  ['vocabulary', 'Ecosystem chỉ gồm động vật.', 'Ecosystem gồm sinh vật và môi trường vật lý cùng các tương tác.'],
  ['grammar', 'Compound noun luôn viết liền và nghĩa bằng tổng từng từ.', 'Danh từ ghép có thể viết liền, gạch nối hoặc tách; head noun và quy ước từ điển quyết định.'],
  ['reading', 'Tăng số lượng một loài luôn chứng minh hệ sinh thái phục hồi.', 'Cần xét diversity, chức năng, nhiều loài, thời gian và điều kiện môi trường.'],
  ['writing', 'Bài sinh thái chỉ cần liệt kê loài.', 'Cần cơ chế tương tác, evidence, uncertainty và response có thể đánh giá.'],
  ['communication', 'Bảo tồn chỉ cần ý kiến chuyên gia sinh học.', 'Quyết định cần khoa học, tri thức địa phương, sinh kế, quyền và theo dõi thích ứng.']
] as const;
export const g11EnglishModule10Misconceptions: LearningMisconception[] = mis.map((m, i) => ({
  id: `eng11-misc-u10-${m[0]}`, outcomeId: `eng11-out-u10-${m[0]}`, statement: m[1], correction: m[2],
  severity: i === 2 || i === 3 ? 'critical' : 'normal'
}));
