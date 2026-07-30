import type { LearningMisconception, LearningOutcome } from '@/types';
const specs = [
  ['pronunciation', 'Nhận biết ngữ điệu trong choice questions', 'Nhận biết rising tone ở lựa chọn chưa cuối và falling tone ở lựa chọn cuối.', [], false],
  ['vocabulary', 'Vận dụng từ vựng về social issues', 'Dùng từ và collocation về peer pressure, bullying, inequality, awareness và support.', [], true],
  ['grammar', 'Dùng linking words and phrases', 'Liên kết ý bổ sung, tương phản, nguyên nhân và kết quả đúng cấu trúc.', [], true],
  ['reading', 'Đọc hiểu văn bản về vấn đề xã hội', 'Đánh giá claim, bằng chứng, nhóm bị ảnh hưởng, nguyên nhân và hiệu quả can thiệp.', ['eng11-out-u9-vocabulary'], true],
  ['writing', 'Tổ chức proposal gián tiếp về vấn đề xã hội', 'Sắp xếp problem–evidence–action–evaluation và chọn register phù hợp.', ['eng11-out-u9-vocabulary', 'eng11-out-u9-grammar'], false],
  ['communication', 'Phản hồi tôn trọng trước vấn đề xã hội', 'Thể hiện disappointment, hỗ trợ, thiết lập ranh giới và tìm trợ giúp an toàn.', ['eng11-out-u9-vocabulary'], false]
] as const;
export const g11EnglishModule9Outcomes: LearningOutcome[] = specs.map((s, i) => ({
  id: `eng11-out-u9-${s[0]}`, topicId: 'eng11-topic-u9', title: s[1], description: s[2], scope: 'core',
  orderIndex: i + 1, questionTypeIds: [`eng11-qt-u9-${s[0]}`], prerequisiteOutcomeIds: [...s[3]],
  misconceptionIds: [`eng11-misc-u9-${s[0]}`], evidenceTypes: i === 4 ? ['representation', 'application'] : ['recognition', 'explanation', 'application'],
  estimatedMinutes: i === 0 || i === 5 ? 30 : i === 1 || i === 4 ? 45 : 60, isCritical: s[4]
}));
const mis = [
  ['pronunciation', 'Mọi lựa chọn trong choice question đều lên giọng.', 'Các lựa chọn chưa cuối thường lên; lựa chọn cuối thường xuống.'],
  ['vocabulary', 'Peer pressure luôn tiêu cực và chỉ xảy ra trực tiếp.', 'Ảnh hưởng bạn bè có thể đa dạng; áp lực gây hại có thể xuất hiện trực tiếp hoặc trực tuyến.'],
  ['grammar', 'Các linking words cùng nhóm dùng được với cùng cấu trúc.', 'Although + clause; despite/in spite of + noun/V-ing; because + clause; because of + noun/V-ing.'],
  ['reading', 'Nhiều lượt xem của chiến dịch chứng minh vấn đề đã giảm.', 'Cần outcome liên quan hành vi, an toàn, báo cáo và hỗ trợ, không chỉ reach.'],
  ['writing', 'Proposal chỉ cần khẩu hiệu mạnh.', 'Proposal cần phạm vi, evidence, hành động, trách nhiệm và chỉ số đánh giá.'],
  ['communication', 'Giữ bí mật luôn là cách hỗ trợ bạn tốt nhất.', 'Khi có nguy cơ gây hại, cần tìm người lớn hoặc dịch vụ phù hợp, đồng thời tôn trọng và giải thích.']
] as const;
export const g11EnglishModule9Misconceptions: LearningMisconception[] = mis.map((m, i) => ({
  id: `eng11-misc-u9-${m[0]}`, outcomeId: `eng11-out-u9-${m[0]}`, statement: m[1], correction: m[2],
  severity: i === 2 || i === 3 || i === 5 ? 'critical' : 'normal'
}));
