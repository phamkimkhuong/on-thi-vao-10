import type { CourseQuestionType } from '@/data/schema';
const coverage = { targetQuestionCount: 12, minimumQuestionsPerSubType: 6, requiredPracticeRoles: ['guided', 'near_transfer', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'] as const, requiredRepresentations: ['text', 'dialogue'] as const, masteryHoldoutCount: 2 };
const specs = [
  ['pronunciation', 'Intonation in tag questions', 'tag-question-intonation', 'Nhận biết rising/falling tag theo mức chắc chắn.', 'medium', 'language', ['form', 'meaning-tone']],
  ['vocabulary', 'Từ vựng về ecosystem', 'ecosystem-vocabulary', 'Dùng từ và collocation về quan hệ, đa dạng, đe dọa và phục hồi.', 'medium', 'language', ['meaning-word-form', 'ecosystem-collocation']],
  ['grammar', 'Compound nouns', 'compound-nouns', 'Nhận biết head noun, cấu tạo và spelling danh từ ghép.', 'medium', 'language', ['formation-head', 'meaning-spelling']],
  ['reading', 'Đọc hiểu về hệ sinh thái', 'ecosystem-reading', 'Đọc văn bản nguyên bản về monitoring, restoration và trade-offs.', 'hard', 'reading', ['main-detail', 'infer-evaluate']],
  ['writing', 'Writing gián tiếp về hệ sinh thái', 'ecosystem-indirect-writing', 'Tổ chức giải thích và proposal dựa trên evidence.', 'medium', 'writing', ['order-cohesion', 'transform-evidence']],
  ['communication', 'Trao đổi về quyết định hệ sinh thái', 'ecosystem-communication', 'Đề xuất, yêu cầu evidence và thảo luận trade-offs.', 'medium', 'communication-culture', ['ask-suggest', 'stakeholder-tradeoff']]
] as const;
export const g11EnglishModule10QuestionTypes: CourseQuestionType[] = specs.map(s => ({
  courseId: 'grade11:english', moduleId: 'eng11-m10', topicId: 'eng11-topic-u10', id: `eng11-qt-u10-${s[0]}`,
  name: s[1], slug: s[2], description: s[3], recognitionSigns: ['Xác định cấu trúc ngôn ngữ hoặc quan hệ sinh thái.', 'Kiểm tra evidence và phạm vi kết luận.'],
  solvingSteps: ['Xác định chức năng và dữ kiện.', 'Loại phương án sai cấu trúc/quan hệ.', 'Đối chiếu với evidence và uncertainty.'],
  commonMistakes: [], examFrequency: 'high', difficulty: s[4],
  lessonIds: [`eng11-u10-${s[5]}`], outcomeIds: [`eng11-out-u10-${s[0]}`],
  subTypes: [
    { id: `eng11-u10-${s[0]}-${s[6][0]}`, name: s[6][0], example: s[3], targetQuestionCount: 6 },
    { id: `eng11-u10-${s[0]}-${s[6][1]}`, name: s[6][1], example: s[3], targetQuestionCount: 6 }
  ],
  practiceCoverage: { ...coverage, requiredPracticeRoles: [...coverage.requiredPracticeRoles], requiredRepresentations: [...coverage.requiredRepresentations] }
}));
