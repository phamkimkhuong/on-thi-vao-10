import type { CourseQuestionType } from '@/data/schema';
const coverage = {
  targetQuestionCount: 12, minimumQuestionsPerSubType: 6,
  requiredPracticeRoles: ['guided', 'near_transfer', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'] as const,
  requiredRepresentations: ['text', 'dialogue'] as const, masteryHoldoutCount: 2
};
const specs = [
  ['pronunciation', 'Intonation in statements, commands and lists', 'statement-command-list-intonation', 'Nhận biết falling/rising intonation theo mục đích và cấu trúc danh sách.', 'medium', 'language', ['statement-command', 'list-intonation']],
  ['vocabulary', 'Từ vựng về preserving heritage', 'heritage-vocabulary', 'Dùng từ và collocation về giá trị, nguy cơ và hoạt động bảo tồn.', 'medium', 'language', ['meaning-word-form', 'heritage-collocation']],
  ['grammar', 'To-infinitive clauses', 'to-infinitive-clauses', 'Dùng to-infinitive chỉ mục đích, bổ nghĩa danh từ và sau tính từ.', 'medium', 'language', ['purpose-adjective', 'noun-modifier']],
  ['reading', 'Đọc hiểu về bảo tồn di sản', 'heritage-reading', 'Đọc văn bản nguyên bản về cộng đồng, du lịch và truyền nghề.', 'hard', 'reading', ['main-detail', 'infer-stakeholder']],
  ['writing', 'Writing gián tiếp về dự án di sản', 'heritage-indirect-writing', 'Tổ chức đề xuất, thông báo và đoạn giới thiệu bảo tồn.', 'medium', 'writing', ['order-cohesion', 'transform-proposal']],
  ['communication', 'Trao đổi về di sản', 'heritage-communication', 'Hỏi, đề xuất và phản hồi tôn trọng cộng đồng di sản.', 'medium', 'communication-culture', ['request-suggest', 'community-respect']]
] as const;
export const g11EnglishModule6QuestionTypes: CourseQuestionType[] = specs.map(spec => ({
  courseId: 'grade11:english', moduleId: 'eng11-m6', topicId: 'eng11-topic-u6',
  id: `eng11-qt-u6-${spec[0]}`, name: spec[1], slug: spec[2], description: spec[3],
  recognitionSigns: ['Xác định từ khóa và chức năng ngôn ngữ trong ngữ cảnh.', 'Kiểm tra ý nghĩa toàn câu hoặc toàn đoạn.'],
  solvingSteps: ['Đọc yêu cầu và xác định dữ kiện.', 'Loại phương án sai về nghĩa hoặc cấu trúc.', 'Đối chiếu đáp án với ngữ cảnh.'],
  commonMistakes: [],
  examFrequency: 'high', difficulty: spec[4], lessonIds: [`eng11-u6-${spec[5]}`],
  outcomeIds: [`eng11-out-u6-${spec[0]}`],
  subTypes: [
    { id: `eng11-u6-${spec[0]}-${spec[6][0]}`, name: spec[6][0], example: spec[3], targetQuestionCount: 6 },
    { id: `eng11-u6-${spec[0]}-${spec[6][1]}`, name: spec[6][1], example: spec[3], targetQuestionCount: 6 }
  ],
  practiceCoverage: { ...coverage, requiredPracticeRoles: [...coverage.requiredPracticeRoles], requiredRepresentations: [...coverage.requiredRepresentations] }
}));
