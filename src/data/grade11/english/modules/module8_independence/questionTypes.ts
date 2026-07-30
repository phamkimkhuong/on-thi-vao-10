import type { CourseQuestionType } from '@/data/schema';
const coverage = {
  targetQuestionCount: 12, minimumQuestionsPerSubType: 6,
  requiredPracticeRoles: ['guided', 'near_transfer', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'] as const,
  requiredRepresentations: ['text', 'dialogue'] as const, masteryHoldoutCount: 2
};
const specs = [
  ['pronunciation', 'Intonation in invitations, suggestions and requests', 'functional-intonation', 'Nhận biết ngữ điệu và sắc thái trong lời mời, đề xuất, yêu cầu.', 'medium', 'language', ['invite-suggest', 'request-politeness']],
  ['vocabulary', 'Từ vựng về becoming independent', 'independence-vocabulary', 'Dùng từ và collocation về kỹ năng, trách nhiệm, quyết định và quản lý nguồn lực.', 'medium', 'language', ['meaning-word-form', 'independence-collocation']],
  ['grammar', 'Cleft sentences', 'cleft-sentences', 'Dùng It-cleft nhấn mạnh chủ thể, tân ngữ hoặc trạng ngữ.', 'medium', 'language', ['subject-object-focus', 'adverbial-focus']],
  ['reading', 'Đọc hiểu về phát triển tự lập', 'independence-reading', 'Đọc văn bản nguyên bản về tự quản, hỗ trợ và đánh giá tiến bộ.', 'hard', 'reading', ['main-detail', 'infer-evaluate']],
  ['writing', 'Writing gián tiếp về kỹ năng tự lập', 'independence-indirect-writing', 'Tổ chức kế hoạch, lời khuyên và đoạn phản ánh.', 'medium', 'writing', ['order-cohesion', 'transform-plan']],
  ['communication', 'Trao đổi về tự lập và hỗ trợ', 'independence-communication', 'Mời, đề xuất, yêu cầu và phản hồi giữ quyền tự quyết.', 'medium', 'communication-culture', ['invite-request', 'support-agency']]
] as const;
export const g11EnglishModule8QuestionTypes: CourseQuestionType[] = specs.map(spec => ({
  courseId: 'grade11:english', moduleId: 'eng11-m8', topicId: 'eng11-topic-u8',
  id: `eng11-qt-u8-${spec[0]}`, name: spec[1], slug: spec[2], description: spec[3],
  recognitionSigns: ['Xác định thành phần cần nhấn hoặc mục đích giao tiếp.', 'Kiểm tra nghĩa và sắc thái toàn ngữ cảnh.'],
  solvingSteps: ['Xác định focus hoặc hành động cần thực hiện.', 'Loại phương án sai cấu trúc/sắc thái.', 'Kiểm tra quyền tự quyết và trách nhiệm.'],
  commonMistakes: [],
  examFrequency: 'high', difficulty: spec[4], lessonIds: [`eng11-u8-${spec[5]}`],
  outcomeIds: [`eng11-out-u8-${spec[0]}`],
  subTypes: [
    { id: `eng11-u8-${spec[0]}-${spec[6][0]}`, name: spec[6][0], example: spec[3], targetQuestionCount: 6 },
    { id: `eng11-u8-${spec[0]}-${spec[6][1]}`, name: spec[6][1], example: spec[3], targetQuestionCount: 6 }
  ],
  practiceCoverage: { ...coverage, requiredPracticeRoles: [...coverage.requiredPracticeRoles], requiredRepresentations: [...coverage.requiredRepresentations] }
}));
