import type { CourseQuestionType } from '@/data/schema';

const coverage = {
  targetQuestionCount: 12,
  minimumQuestionsPerSubType: 6,
  requiredPracticeRoles: ['guided', 'near_transfer', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'] as const,
  requiredRepresentations: ['text', 'dialogue'] as const,
  masteryHoldoutCount: 2
};
const base = {
  courseId: 'grade11:english' as const, moduleId: 'eng11-m4', topicId: 'eng11-topic-u4',
  examFrequency: 'high' as const,
  practiceCoverage: { ...coverage, requiredPracticeRoles: [...coverage.requiredPracticeRoles], requiredRepresentations: [...coverage.requiredRepresentations] }
};
export const g11EnglishModule4QuestionTypes: CourseQuestionType[] = [
  {
    ...base, id: 'eng11-qt-u4-pronunciation', name: 'Elision of vowels', slug: 'vowel-elision',
    description: 'Nhận biết nguyên âm không nhấn bị lược trong một số từ khi nói tự nhiên.',
    recognitionSigns: ['Từ nhiều âm tiết có âm giữa không nhấn.', 'Cách phát âm tự nhiên có thể ít âm tiết hơn cách đánh vần gợi ý.'],
    solvingSteps: ['Tách âm tiết theo phát âm.', 'Xác định nguyên âm không nhấn ở giữa.', 'Đối chiếu dạng phát âm tự nhiên và không tự lược tùy ý.'],
    commonMistakes: [],
    difficulty: 'medium', lessonIds: ['eng11-u4-language'], outcomeIds: ['eng11-out-u4-pronunciation'],
    subTypes: [
      { id: 'eng11-u4-pron-word', name: 'Nhận biết elision trong từ', example: 'family, different, history, comfortable', targetQuestionCount: 6 },
      { id: 'eng11-u4-pron-principle', name: 'Vận dụng nguyên tắc phát âm', example: 'Xác định âm tiết yếu có thể bị lược và trường hợp không được tùy ý lược.', targetQuestionCount: 6 }
    ]
  },
  {
    ...base, id: 'eng11-qt-u4-vocabulary', name: 'Từ vựng về ASEAN và Việt Nam', slug: 'asean-vietnam-vocabulary',
    description: 'Dùng từ và collocation về thành viên, hợp tác khu vực, trao đổi văn hóa và phát triển.',
    recognitionSigns: ['Ngữ cảnh có member states, regional programmes hoặc cultural exchange.', 'Khoảng trống nằm trong collocation.'],
    solvingSteps: ['Xác định lĩnh vực hợp tác.', 'Xác định từ loại.', 'Kiểm tra collocation và nghĩa toàn câu.'],
    commonMistakes: [],
    difficulty: 'medium', lessonIds: ['eng11-u4-getting-started', 'eng11-u4-language'], outcomeIds: ['eng11-out-u4-vocabulary'],
    subTypes: [
      { id: 'eng11-u4-vocab-meaning', name: 'Khái niệm và từ loại', example: 'member state, diversity, identity, participant', targetQuestionCount: 6 },
      { id: 'eng11-u4-vocab-collocation', name: 'Collocation hợp tác khu vực', example: 'promote cooperation, strengthen ties, host a summit', targetQuestionCount: 6 }
    ]
  },
  {
    ...base, id: 'eng11-qt-u4-grammar', name: 'Gerunds as subjects and objects', slug: 'gerunds-subjects-objects',
    description: 'Dùng V-ing làm chủ ngữ, sau động từ phù hợp và sau giới từ.',
    recognitionSigns: ['Cụm V-ing đứng đầu câu và làm chủ ngữ.', 'Enjoy, avoid, suggest, consider, practise hoặc giới từ theo sau bằng V-ing.'],
    solvingSteps: ['Xác định vị trí/chức năng của cụm động từ.', 'Kiểm tra động từ hoặc giới từ đứng trước.', 'Chọn V-ing và kiểm tra số ít của chủ ngữ gerund.'],
    commonMistakes: [],
    difficulty: 'medium', lessonIds: ['eng11-u4-language'], outcomeIds: ['eng11-out-u4-grammar'],
    subTypes: [
      { id: 'eng11-u4-grammar-subject', name: 'Gerund làm chủ ngữ', example: 'Learning about ASEAN broadens perspectives.', targetQuestionCount: 6 },
      { id: 'eng11-u4-grammar-object', name: 'Gerund làm tân ngữ/sau giới từ', example: 'enjoy meeting; interested in joining', targetQuestionCount: 6 }
    ]
  },
  {
    ...base, id: 'eng11-qt-u4-reading', name: 'Đọc hiểu về hợp tác ASEAN', slug: 'asean-cooperation-reading',
    description: 'Đọc văn bản nguyên bản về chương trình khu vực, môi trường và trao đổi văn hóa.',
    recognitionSigns: ['Câu hỏi về purpose, detail, refers to, infer hoặc fairness.', 'Văn bản mô tả nhiều bên tham gia.'],
    solvingSteps: ['Xác định mục tiêu và các bên liên quan.', 'Tìm chi tiết/cơ chế hợp tác.', 'Đánh giá bằng chứng, điều kiện và lợi ích.'],
    commonMistakes: [],
    difficulty: 'hard', lessonIds: ['eng11-u4-reading'], outcomeIds: ['eng11-out-u4-reading'],
    subTypes: [
      { id: 'eng11-u4-read-main-detail', name: 'Mục đích, ý chính và chi tiết', example: 'Main purpose / According to the passage', targetQuestionCount: 6 },
      { id: 'eng11-u4-read-infer-fairness', name: 'Suy luận, quy chiếu và công bằng', example: 'It can be inferred / who benefits / refers to', targetQuestionCount: 6 }
    ]
  },
  {
    ...base, id: 'eng11-qt-u4-writing', name: 'Writing gián tiếp về hoạt động ASEAN', slug: 'asean-indirect-writing',
    description: 'Tổ chức thông báo, thư ngắn và đoạn giới thiệu hoạt động khu vực.',
    recognitionSigns: ['Cần đủ purpose, eligibility, time/place và call to action.', 'Theo dõi thứ tự thông tin chung đến chi tiết.'],
    solvingSteps: ['Xác định loại văn bản và người đọc.', 'Đặt mục đích trước chi tiết.', 'Kết bằng hướng dẫn đăng ký hoặc phản hồi.'],
    commonMistakes: [],
    difficulty: 'medium', lessonIds: ['eng11-u4-writing'], outcomeIds: ['eng11-out-u4-writing'],
    subTypes: [
      { id: 'eng11-u4-write-order', name: 'Sắp xếp thông báo/thư', example: 'Purpose → details → action', targetQuestionCount: 6 },
      { id: 'eng11-u4-write-transform', name: 'Kết hợp và hoàn thiện văn bản', example: 'Chọn câu chủ đề, kết luận hoặc viết lại với gerund', targetQuestionCount: 6 }
    ]
  },
  {
    ...base, id: 'eng11-qt-u4-communication', name: 'Giao tiếp trong hoạt động ASEAN', slug: 'asean-communication',
    description: 'Mời tham gia, hỏi thông tin, phản hồi và giao tiếp tôn trọng đa dạng văn hóa.',
    recognitionSigns: ['Có lời mời, yêu cầu làm rõ hoặc trao đổi trải nghiệm.', 'Cần tránh khái quát hóa và chọn cách diễn đạt lịch sự.'],
    solvingSteps: ['Xác định mục đích giao tiếp.', 'Chọn phản hồi cụ thể và tôn trọng.', 'Kiểm tra thông tin hoặc bước tiếp theo.'],
    commonMistakes: [],
    difficulty: 'medium', lessonIds: ['eng11-u4-communication-culture'], outcomeIds: ['eng11-out-u4-communication'],
    subTypes: [
      { id: 'eng11-u4-comm-invite-info', name: 'Mời và hỏi thông tin', example: 'Would you like to...? / Could you tell me...?', targetQuestionCount: 6 },
      { id: 'eng11-u4-comm-cultural', name: 'Phản hồi đa văn hóa', example: 'Hỏi trải nghiệm cụ thể, tránh định kiến và thể hiện tôn trọng.', targetQuestionCount: 6 }
    ]
  }
];
