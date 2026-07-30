import type { LearningMisconception, LearningOutcome } from '@/types';
const specs = [
  ['pronunciation', 'Nhận biết ngữ điệu trong invitations, suggestions và requests', 'Nhận biết sắc thái thân thiện, lịch sự hoặc áp đặt qua đường nét ngữ điệu và ngữ cảnh.', [], false],
  ['vocabulary', 'Vận dụng từ vựng về sống tự lập', 'Dùng đúng từ loại và collocation về quản lý thời gian, tiền bạc, quyết định và trách nhiệm.', [], true],
  ['grammar', 'Dùng cleft sentences', 'Dùng It-cleft để nhấn mạnh người, vật, thời gian, nơi chốn hoặc thành phần cần đối lập.', [], true],
  ['reading', 'Đọc hiểu văn bản về phát triển tính tự lập', 'Xác định chiến lược, bằng chứng tiến bộ, hỗ trợ phù hợp và rủi ro.', ['eng11-out-u8-vocabulary'], true],
  ['writing', 'Tổ chức bài viết gián tiếp về kỹ năng tự lập', 'Sắp xếp và hoàn thiện kế hoạch, lời khuyên hoặc đoạn phản ánh tiến bộ.', ['eng11-out-u8-vocabulary', 'eng11-out-u8-grammar'], false],
  ['communication', 'Trao đổi về trách nhiệm và hỗ trợ', 'Đưa lời mời, đề xuất, yêu cầu và phản hồi tôn trọng quyền tự quyết.', ['eng11-out-u8-vocabulary'], false]
] as const;
export const g11EnglishModule8Outcomes: LearningOutcome[] = specs.map((spec, index) => ({
  id: `eng11-out-u8-${spec[0]}`, topicId: 'eng11-topic-u8', title: spec[1], description: spec[2],
  scope: 'core', orderIndex: index + 1, questionTypeIds: [`eng11-qt-u8-${spec[0]}`],
  prerequisiteOutcomeIds: [...spec[3]], misconceptionIds: [`eng11-misc-u8-${spec[0]}`],
  evidenceTypes: index === 4 ? ['representation', 'application'] : ['recognition', 'explanation', 'application'],
  estimatedMinutes: index === 0 || index === 5 ? 30 : index === 1 || index === 4 ? 45 : 60,
  isCritical: spec[4]
}));
const misconceptions = [
  ['pronunciation', 'Lịch sự chỉ phụ thuộc vào từ please.', 'Cấu trúc, ngữ điệu, quan hệ và bối cảnh cùng quyết định mức độ lịch sự.'],
  ['vocabulary', 'Independent nghĩa là không bao giờ nhờ giúp đỡ.', 'Tự lập bao gồm tự quyết, chịu trách nhiệm và biết tìm hỗ trợ phù hợp.'],
  ['grammar', 'Cleft sentence dùng được để nhấn mọi thành phần mà không đổi cấu trúc.', 'It-cleft cần it + be + focus + that/who clause và phải giữ đúng nghĩa câu gốc.'],
  ['reading', 'Làm mọi việc một mình là bằng chứng tốt nhất của tự lập.', 'Tiến bộ được thể hiện qua lập kế hoạch, quyết định, tự theo dõi và tìm giúp đỡ đúng lúc.'],
  ['writing', 'Kế hoạch chỉ cần mục tiêu lớn.', 'Kế hoạch cần bước hành động, thời hạn, tiêu chí theo dõi và phương án điều chỉnh.'],
  ['communication', 'Hỗ trợ đồng nghĩa làm thay.', 'Hỗ trợ tốt tạo scaffolding rồi giảm dần để người học giữ quyền và trách nhiệm.']
] as const;
export const g11EnglishModule8Misconceptions: LearningMisconception[] = misconceptions.map((item, index) => ({
  id: `eng11-misc-u8-${item[0]}`, outcomeId: `eng11-out-u8-${item[0]}`,
  statement: item[1], correction: item[2], severity: index === 2 || index === 3 ? 'critical' : 'normal'
}));
