import type { CourseQuestionType } from '@/data/schema';

const coverage = {
  targetQuestionCount: 12, minimumQuestionsPerSubType: 6,
  requiredPracticeRoles: ['guided', 'near_transfer', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'] as const,
  requiredRepresentations: ['text', 'dialogue'] as const, masteryHoldoutCount: 2
};
const specs = [
  ['pronunciation', 'Sentence stress and rhythm', 'sentence-stress-rhythm', 'Nhận biết content words, function words và nhịp câu.', 'medium', 'language', ['content-stress', 'contrastive-stress']],
  ['vocabulary', 'Từ vựng về global warming', 'global-warming-vocabulary', 'Dùng từ và collocation về khí thải, tác động và giảm nhẹ.', 'medium', 'language', ['meaning-word-form', 'climate-collocation']],
  ['grammar', 'Present and past participle clauses', 'participle-clauses', 'Dùng participle clauses theo quan hệ chủ động hoặc bị động.', 'medium', 'language', ['present-participle', 'past-participle']],
  ['reading', 'Đọc hiểu về biến đổi khí hậu', 'climate-reading', 'Đọc văn bản nguyên bản về bằng chứng, thích ứng và giảm phát thải.', 'hard', 'reading', ['main-detail', 'infer-evidence']],
  ['writing', 'Writing gián tiếp về hành động khí hậu', 'climate-indirect-writing', 'Tổ chức đoạn giải thích vấn đề và đề xuất hành động.', 'medium', 'writing', ['order-cohesion', 'transform-evidence']],
  ['communication', 'Trao đổi về hành động khí hậu', 'climate-communication', 'Đề xuất, phản hồi và đánh giá giải pháp có căn cứ.', 'medium', 'communication-culture', ['suggest-respond', 'evidence-tradeoff']]
] as const;

export const g11EnglishModule5QuestionTypes: CourseQuestionType[] = specs.map(spec => ({
  courseId: 'grade11:english', moduleId: 'eng11-m5', topicId: 'eng11-topic-u5',
  id: `eng11-qt-u5-${spec[0]}`, name: spec[1], slug: spec[2], description: spec[3],
  recognitionSigns: ['Xác định từ khóa và chức năng ngôn ngữ trong ngữ cảnh.', 'Kiểm tra ý nghĩa toàn câu hoặc toàn đoạn.'],
  solvingSteps: ['Đọc yêu cầu và xác định dữ kiện.', 'Loại phương án sai về nghĩa hoặc cấu trúc.', 'Đối chiếu đáp án với ngữ cảnh.'],
  commonMistakes: [],
  examFrequency: 'high', difficulty: spec[4], lessonIds: [`eng11-u5-${spec[5]}`],
  outcomeIds: [`eng11-out-u5-${spec[0]}`],
  subTypes: [
    { id: `eng11-u5-${spec[0]}-${spec[6][0]}`, name: spec[6][0], example: spec[3], targetQuestionCount: 6 },
    { id: `eng11-u5-${spec[0]}-${spec[6][1]}`, name: spec[6][1], example: spec[3], targetQuestionCount: 6 }
  ],
  practiceCoverage: { ...coverage, requiredPracticeRoles: [...coverage.requiredPracticeRoles], requiredRepresentations: [...coverage.requiredRepresentations] }
}));
