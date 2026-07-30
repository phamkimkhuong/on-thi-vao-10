import type { CourseQuestionType } from '@/data/schema';
const coverage = {
  targetQuestionCount: 12, minimumQuestionsPerSubType: 6,
  requiredPracticeRoles: ['guided', 'near_transfer', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'] as const,
  requiredRepresentations: ['text', 'dialogue'] as const, masteryHoldoutCount: 2
};
const specs = [
  ['pronunciation', 'Intonation in questions', 'question-intonation', 'Nhận biết ngữ điệu Yes/No và Wh-questions theo chức năng.', 'medium', 'language', ['yes-no', 'wh-context']],
  ['vocabulary', 'Từ vựng về education options', 'education-options-vocabulary', 'Dùng từ và collocation về bằng cấp, nghề, học việc và tuyển sinh.', 'medium', 'language', ['meaning-word-form', 'education-collocation']],
  ['grammar', 'Perfect gerunds and perfect participle clauses', 'perfect-gerunds-participles', 'Dùng having + V3 đúng chức năng và trình tự thời gian.', 'medium', 'language', ['perfect-gerund', 'perfect-participle']],
  ['reading', 'Đọc hiểu về lộ trình sau phổ thông', 'school-leaver-options-reading', 'Đọc văn bản nguyên bản về lựa chọn, bằng chứng đầu ra và khả năng tiếp cận.', 'hard', 'reading', ['main-detail', 'infer-evaluate']],
  ['writing', 'Writing gián tiếp về lựa chọn giáo dục', 'education-indirect-writing', 'Tổ chức email, tư vấn và đoạn so sánh lộ trình.', 'medium', 'writing', ['order-cohesion', 'transform-advice']],
  ['communication', 'Trao đổi về kế hoạch sau phổ thông', 'school-leaver-communication', 'Hỏi làm rõ, tư vấn và phản hồi không áp đặt.', 'medium', 'communication-culture', ['ask-advise', 'compare-agency']]
] as const;
export const g11EnglishModule7QuestionTypes: CourseQuestionType[] = specs.map(spec => ({
  courseId: 'grade11:english', moduleId: 'eng11-m7', topicId: 'eng11-topic-u7',
  id: `eng11-qt-u7-${spec[0]}`, name: spec[1], slug: spec[2], description: spec[3],
  recognitionSigns: ['Xác định mục đích câu hỏi hoặc thông tin giáo dục cần xử lý.', 'Kiểm tra cấu trúc và nghĩa toàn ngữ cảnh.'],
  solvingSteps: ['Đọc yêu cầu và xác định chức năng.', 'Loại phương án sai cấu trúc hoặc thiếu bằng chứng.', 'Đối chiếu đáp án với mục tiêu người học.'],
  commonMistakes: [],
  examFrequency: 'high', difficulty: spec[4], lessonIds: [`eng11-u7-${spec[5]}`],
  outcomeIds: [`eng11-out-u7-${spec[0]}`],
  subTypes: [
    { id: `eng11-u7-${spec[0]}-${spec[6][0]}`, name: spec[6][0], example: spec[3], targetQuestionCount: 6 },
    { id: `eng11-u7-${spec[0]}-${spec[6][1]}`, name: spec[6][1], example: spec[3], targetQuestionCount: 6 }
  ],
  practiceCoverage: { ...coverage, requiredPracticeRoles: [...coverage.requiredPracticeRoles], requiredRepresentations: [...coverage.requiredRepresentations] }
}));
