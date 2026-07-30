import type { LearningMisconception, LearningOutcome } from '@/types';

const specs = [
  ['pronunciation', 'Nhận biết ngữ điệu trong statements, commands và lists', 'Phân biệt đường nét ngữ điệu cơ bản theo mục đích phát ngôn.', [], false],
  ['vocabulary', 'Vận dụng từ vựng về bảo tồn di sản', 'Dùng đúng từ loại và collocation về di sản vật thể, phi vật thể và bảo tồn.', [], true],
  ['grammar', 'Dùng to-infinitive clauses', 'Dùng cụm to-infinitive diễn đạt mục đích, bổ nghĩa danh từ và sau tính từ phù hợp.', [], true],
  ['reading', 'Đọc hiểu văn bản về bảo tồn di sản', 'Xác định giá trị, bên liên quan, bằng chứng và đánh đổi trong bảo tồn.', ['eng11-out-u6-vocabulary'], true],
  ['writing', 'Tổ chức bài viết gián tiếp về di sản', 'Sắp xếp và hoàn thiện đề xuất, thông báo hoặc đoạn giới thiệu dự án bảo tồn.', ['eng11-out-u6-vocabulary', 'eng11-out-u6-grammar'], false],
  ['communication', 'Trao đổi tôn trọng về di sản', 'Hỏi thông tin, đề xuất hành động và ghi nhận quyền của cộng đồng nắm giữ di sản.', ['eng11-out-u6-vocabulary'], false]
] as const;
export const g11EnglishModule6Outcomes: LearningOutcome[] = specs.map((spec, index) => ({
  id: `eng11-out-u6-${spec[0]}`, topicId: 'eng11-topic-u6', title: spec[1],
  description: spec[2], scope: 'core', orderIndex: index + 1,
  questionTypeIds: [`eng11-qt-u6-${spec[0]}`], prerequisiteOutcomeIds: [...spec[3]],
  misconceptionIds: [`eng11-misc-u6-${spec[0]}`],
  evidenceTypes: index === 4 ? ['representation', 'application'] : ['recognition', 'explanation', 'application'],
  estimatedMinutes: index === 0 || index === 5 ? 30 : index === 1 || index === 4 ? 45 : 60,
  isCritical: spec[4]
}));
const misconceptionSpecs = [
  ['pronunciation', 'Mọi mục trong danh sách đều dùng falling intonation.', 'Danh sách chưa kết thúc thường lên giọng; mục cuối thường xuống giọng.'],
  ['vocabulary', 'Heritage chỉ gồm công trình cổ.', 'Di sản gồm cả vật thể và phi vật thể như tri thức, nghi lễ, nghề thủ công và nghệ thuật.'],
  ['grammar', 'Mọi cụm to-infinitive đều chỉ mục đích.', 'To-infinitive còn có thể bổ nghĩa danh từ hoặc đứng sau tính từ/cấu trúc đánh giá.'],
  ['reading', 'Nhiều khách du lịch luôn đồng nghĩa bảo tồn thành công.', 'Cần xét tình trạng di sản, lợi ích cộng đồng, sức chứa và tác động dài hạn.'],
  ['writing', 'Mô tả di sản chỉ cần lời ca ngợi chung chung.', 'Cần thông tin cụ thể về giá trị, nguy cơ, bên liên quan và hành động.'],
  ['communication', 'Chuyên gia bên ngoài có thể tự quyết cách trình bày di sản cộng đồng.', 'Cộng đồng nắm giữ di sản phải có tiếng nói và quyền đồng thuận trong quyết định.']
] as const;
export const g11EnglishModule6Misconceptions: LearningMisconception[] = misconceptionSpecs.map((item, index) => ({
  id: `eng11-misc-u6-${item[0]}`, outcomeId: `eng11-out-u6-${item[0]}`,
  statement: item[1], correction: item[2], severity: index === 2 || index === 3 ? 'critical' : 'normal'
}));
