import type { CourseQuestionType } from '@/data/schema';
const coverage = { targetQuestionCount: 12, minimumQuestionsPerSubType: 6, requiredPracticeRoles: ['guided', 'near_transfer', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'] as const, requiredRepresentations: ['text', 'dialogue'] as const, masteryHoldoutCount: 2 };
const specs = [
  ['pronunciation', 'Intonation in choice questions', 'choice-question-intonation', 'Nhận biết rise–fall trong câu hỏi lựa chọn.', 'medium', 'language', ['two-choice', 'multi-choice-context']],
  ['vocabulary', 'Từ vựng về social issues', 'social-issues-vocabulary', 'Dùng từ và collocation về áp lực, bắt nạt, bất bình đẳng và hỗ trợ.', 'medium', 'language', ['meaning-word-form', 'social-collocation']],
  ['grammar', 'Linking words and phrases', 'linking-words-phrases', 'Dùng từ nối bổ sung, tương phản, nguyên nhân và kết quả.', 'medium', 'language', ['addition-contrast', 'cause-result']],
  ['reading', 'Đọc hiểu về vấn đề xã hội', 'social-issues-reading', 'Đọc văn bản nguyên bản về can thiệp, an toàn và bằng chứng.', 'hard', 'reading', ['main-detail', 'infer-evaluate']],
  ['writing', 'Writing gián tiếp proposal xã hội', 'social-proposal-writing', 'Tổ chức proposal và đánh giá chiến dịch.', 'medium', 'writing', ['order-cohesion', 'transform-proposal']],
  ['communication', 'Giao tiếp trong tình huống xã hội', 'social-support-communication', 'Thể hiện disappointment, hỗ trợ và tìm trợ giúp an toàn.', 'medium', 'communication-culture', ['disappointment-support', 'boundary-escalate']]
] as const;
export const g11EnglishModule9QuestionTypes: CourseQuestionType[] = specs.map(s => ({
  courseId: 'grade11:english', moduleId: 'eng11-m9', topicId: 'eng11-topic-u9', id: `eng11-qt-u9-${s[0]}`,
  name: s[1], slug: s[2], description: s[3], recognitionSigns: ['Xác định chức năng phát ngôn hoặc quan hệ giữa các ý.', 'Kiểm tra nhóm bị ảnh hưởng và evidence.'],
  solvingSteps: ['Xác định yêu cầu và cấu trúc.', 'Loại phương án sai nghĩa hoặc thiếu an toàn.', 'Đối chiếu với bằng chứng và bối cảnh.'],
  commonMistakes: [], examFrequency: 'high', difficulty: s[4],
  lessonIds: [`eng11-u9-${s[5]}`], outcomeIds: [`eng11-out-u9-${s[0]}`],
  subTypes: [
    { id: `eng11-u9-${s[0]}-${s[6][0]}`, name: s[6][0], example: s[3], targetQuestionCount: 6 },
    { id: `eng11-u9-${s[0]}-${s[6][1]}`, name: s[6][1], example: s[3], targetQuestionCount: 6 }
  ],
  practiceCoverage: { ...coverage, requiredPracticeRoles: [...coverage.requiredPracticeRoles], requiredRepresentations: [...coverage.requiredRepresentations] }
}));
