import type { LearningMisconception, LearningOutcome } from '@/types';

const specs = [
  ['pronunciation', 'Nhận biết sentence stress và rhythm', 'Xác định từ mang nội dung được nhấn và nhịp của câu nói tự nhiên.', [], false],
  ['vocabulary', 'Vận dụng từ vựng về biến đổi khí hậu', 'Dùng đúng từ loại và collocation về nguyên nhân, hậu quả và giải pháp khí hậu.', [], true],
  ['grammar', 'Dùng present và past participle clauses', 'Rút gọn mệnh đề bằng V-ing hoặc V3/ed theo quan hệ chủ động/bị động.', [], true],
  ['reading', 'Đọc hiểu văn bản về nóng lên toàn cầu', 'Xác định ý chính, bằng chứng, quan hệ nhân quả và giới hạn của giải pháp.', ['eng11-out-u5-vocabulary'], true],
  ['writing', 'Tổ chức bài viết gián tiếp về khí hậu', 'Sắp xếp và hoàn thiện đoạn văn nêu vấn đề, nguyên nhân, tác động và hành động.', ['eng11-out-u5-vocabulary', 'eng11-out-u5-grammar'], false],
  ['communication', 'Trao đổi có căn cứ về hành động khí hậu', 'Đề xuất, đồng ý, phản biện và làm rõ hành động khí hậu bằng ngôn ngữ phù hợp.', ['eng11-out-u5-vocabulary'], false]
] as const;

export const g11EnglishModule5Outcomes: LearningOutcome[] = specs.map((spec, index) => ({
  id: `eng11-out-u5-${spec[0]}`, topicId: 'eng11-topic-u5', title: spec[1],
  description: spec[2], scope: 'core', orderIndex: index + 1,
  questionTypeIds: [`eng11-qt-u5-${spec[0]}`],
  prerequisiteOutcomeIds: [...spec[3]], misconceptionIds: [`eng11-misc-u5-${spec[0]}`],
  evidenceTypes: index === 4 ? ['representation', 'application'] : ['recognition', 'explanation', 'application'],
  estimatedMinutes: index === 0 || index === 5 ? 30 : index === 1 || index === 4 ? 45 : 60,
  isCritical: spec[4]
}));

const misconceptionSpecs = [
  ['pronunciation', 'Mọi từ trong câu đều được nhấn như nhau.', 'Từ mang nội dung thường được nhấn; từ chức năng thường yếu hơn tùy ngữ cảnh.'],
  ['vocabulary', 'Global warming và climate change luôn hoàn toàn đồng nghĩa.', 'Global warming là xu hướng tăng nhiệt độ; climate change bao quát nhiều thay đổi khí hậu liên quan.'],
  ['grammar', 'Chỉ nhìn dạng V-ing/V3 để chọn mà không kiểm tra quan hệ chủ động hay bị động.', 'Xác định chủ ngữ logic: chủ động dùng present participle, bị động dùng past participle.'],
  ['reading', 'Một số liệu đơn lẻ đủ chứng minh mọi xu hướng khí hậu.', 'Cần xét thời gian, nguồn, phép đo, xu hướng và giới hạn của bằng chứng.'],
  ['writing', 'Bài viết khí hậu chỉ cần liệt kê thảm họa.', 'Cần quan hệ rõ giữa vấn đề, nguyên nhân, tác động, bằng chứng và hành động khả thi.'],
  ['communication', 'Hành động cá nhân khiến giải pháp hệ thống trở nên không cần thiết.', 'Hành động cá nhân và thay đổi chính sách/hạ tầng có vai trò bổ sung cho nhau.']
] as const;

export const g11EnglishModule5Misconceptions: LearningMisconception[] = misconceptionSpecs.map((item, index) => ({
  id: `eng11-misc-u5-${item[0]}`, outcomeId: `eng11-out-u5-${item[0]}`,
  statement: item[1], correction: item[2], severity: index === 2 || index === 3 ? 'critical' : 'normal'
}));
