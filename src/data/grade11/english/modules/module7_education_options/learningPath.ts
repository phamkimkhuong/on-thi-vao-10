import type { LearningMisconception, LearningOutcome } from '@/types';
const specs = [
  ['pronunciation', 'Nhận biết ngữ điệu trong câu hỏi', 'Phân biệt rising intonation của Yes/No questions và falling intonation phổ biến của Wh-questions.', [], false],
  ['vocabulary', 'Vận dụng từ vựng về lựa chọn sau phổ thông', 'Dùng đúng từ loại và collocation về đại học, đào tạo nghề, học việc và điều kiện tuyển sinh.', [], true],
  ['grammar', 'Dùng perfect gerunds và perfect participle clauses', 'Dùng having + V3/ed để nhấn mạnh hành động hoàn tất trước một mốc khác.', [], true],
  ['reading', 'Đọc hiểu văn bản về lựa chọn giáo dục', 'So sánh lộ trình, yêu cầu, chi phí, bằng chứng kết quả và mức độ phù hợp.', ['eng11-out-u7-vocabulary'], true],
  ['writing', 'Tổ chức bài viết gián tiếp về lựa chọn học tập', 'Sắp xếp và hoàn thiện email, tư vấn hoặc bài so sánh các lộ trình.', ['eng11-out-u7-vocabulary', 'eng11-out-u7-grammar'], false],
  ['communication', 'Trao đổi có căn cứ về kế hoạch sau phổ thông', 'Hỏi làm rõ, đưa lời khuyên và tránh áp đặt một lộ trình cho mọi học sinh.', ['eng11-out-u7-vocabulary'], false]
] as const;
export const g11EnglishModule7Outcomes: LearningOutcome[] = specs.map((spec, index) => ({
  id: `eng11-out-u7-${spec[0]}`, topicId: 'eng11-topic-u7', title: spec[1], description: spec[2],
  scope: 'core', orderIndex: index + 1, questionTypeIds: [`eng11-qt-u7-${spec[0]}`],
  prerequisiteOutcomeIds: [...spec[3]], misconceptionIds: [`eng11-misc-u7-${spec[0]}`],
  evidenceTypes: index === 4 ? ['representation', 'application'] : ['recognition', 'explanation', 'application'],
  estimatedMinutes: index === 0 || index === 5 ? 30 : index === 1 || index === 4 ? 45 : 60,
  isCritical: spec[4]
}));
const misconceptions = [
  ['pronunciation', 'Mọi câu hỏi đều lên giọng ở cuối.', 'Yes/No questions thường lên giọng; Wh-questions trung tính thường xuống giọng.'],
  ['vocabulary', 'Vocational education luôn có chất lượng hoặc triển vọng thấp hơn đại học.', 'Mỗi lộ trình phục vụ mục tiêu và nghề khác nhau; cần so sánh chất lượng, đầu ra và độ phù hợp.'],
  ['grammar', 'Perfect gerund và perfect participle clause có thể thay nhau ở mọi vị trí.', 'Cùng dạng having + V3 nhưng gerund có chức năng danh từ, còn participle clause bổ sung hoàn cảnh cho mệnh đề chính.'],
  ['reading', 'Tỷ lệ việc làm cao tự động chứng minh khóa học phù hợp với mọi người.', 'Cần xét cách thu thập số liệu, loại việc làm, thời điểm, chi phí và mục tiêu người học.'],
  ['writing', 'Lời khuyên tốt chỉ cần nêu một lựa chọn tốt nhất.', 'Cần tiêu chí, bằng chứng, điều kiện và bước tiếp theo phù hợp người đọc.'],
  ['communication', 'Cha mẹ hoặc cố vấn nên quyết định thay học sinh.', 'Tư vấn hỗ trợ quyết định có thông tin; học sinh cần được làm rõ mục tiêu và quyền lựa chọn.']
] as const;
export const g11EnglishModule7Misconceptions: LearningMisconception[] = misconceptions.map((item, index) => ({
  id: `eng11-misc-u7-${item[0]}`, outcomeId: `eng11-out-u7-${item[0]}`,
  statement: item[1], correction: item[2], severity: index === 2 || index === 3 ? 'critical' : 'normal'
}));
