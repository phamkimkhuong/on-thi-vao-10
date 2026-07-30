import type { CourseQuestionType } from '@/data/schema';

const coverage = {
  targetQuestionCount: 12,
  minimumQuestionsPerSubType: 6,
  requiredPracticeRoles: ['guided', 'near_transfer', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'] as const,
  requiredRepresentations: ['text', 'dialogue'] as const,
  masteryHoldoutCount: 2
};

const base = {
  courseId: 'grade11:english' as const,
  moduleId: 'eng11-m2',
  topicId: 'eng11-topic-u2',
  examFrequency: 'high' as const,
  practiceCoverage: { ...coverage, requiredPracticeRoles: [...coverage.requiredPracticeRoles], requiredRepresentations: [...coverage.requiredRepresentations] }
};

export const g11EnglishModule2QuestionTypes: CourseQuestionType[] = [
  {
    ...base,
    id: 'eng11-qt-u2-pronunciation',
    name: 'Contracted forms',
    slug: 'contracted-forms',
    description: 'Nhận biết và mở rộng dạng rút gọn của đại từ/danh từ với trợ động từ hoặc not.',
    recognitionSigns: ['Có dấu nháy đơn trong dạng như I’ll, she’s, don’t, mustn’t.', 'Cần dùng ngữ cảnh để phân biệt ’s là is hay has.'],
    solvingSteps: ['Xác định thành phần trước dấu nháy.', 'Xét động từ hoặc từ theo sau.', 'Mở rộng dạng đầy đủ và kiểm tra nghĩa.'],
    commonMistakes: [],
    difficulty: 'medium',
    lessonIds: ['eng11-u2-language'],
    outcomeIds: ['eng11-out-u2-pronunciation'],
    subTypes: [
      { id: 'eng11-u2-pron-expand', name: 'Mở rộng dạng rút gọn', example: 'we’ll → we will; she’s finished → she has finished', targetQuestionCount: 6 },
      { id: 'eng11-u2-pron-context', name: 'Chọn dạng theo ngữ cảnh', example: 'Phân biệt he’s = he is/he has và mức độ trang trọng.', targetQuestionCount: 6 }
    ]
  },
  {
    ...base,
    id: 'eng11-qt-u2-vocabulary',
    name: 'Từ vựng về khoảng cách thế hệ',
    slug: 'generation-gap-vocabulary',
    description: 'Dùng từ và collocation về quan điểm, giá trị, quy tắc gia đình, hành vi và sự thỏa hiệp.',
    recognitionSigns: ['Ngữ cảnh có sự khác biệt giữa người trẻ và người lớn tuổi.', 'Khoảng trống thường nằm trong collocation như family rules hoặc reach a compromise.'],
    solvingSteps: ['Xác định từ loại.', 'Xét sắc thái tích cực, trung tính hoặc tiêu cực.', 'Kiểm tra collocation và nghĩa toàn câu.'],
    commonMistakes: [],
    difficulty: 'medium',
    lessonIds: ['eng11-u2-getting-started', 'eng11-u2-language'],
    outcomeIds: ['eng11-out-u2-vocabulary'],
    subTypes: [
      { id: 'eng11-u2-vocab-meaning', name: 'Nghĩa từ trong ngữ cảnh', example: 'generation gap, value, attitude, conflict', targetQuestionCount: 6 },
      { id: 'eng11-u2-vocab-collocation', name: 'Collocation về gia đình', example: 'set rules, respect privacy, reach a compromise', targetQuestionCount: 6 }
    ]
  },
  {
    ...base,
    id: 'eng11-qt-u2-grammar',
    name: 'Must, have to và should',
    slug: 'must-have-to-should',
    description: 'Phân biệt nghĩa vụ mạnh, quy định bên ngoài, lời khuyên, cấm đoán và không cần thiết.',
    recognitionSigns: ['Must: nghĩa vụ mạnh từ người nói; have to: quy định hoặc hoàn cảnh bên ngoài.', 'Should: lời khuyên; mustn’t: cấm; don’t have to: không cần.'],
    solvingSteps: ['Xác định câu nói về nghĩa vụ, lời khuyên hay sự cấm đoán.', 'Xác định nguồn của nghĩa vụ nếu cần.', 'Chọn modal và kiểm tra dạng động từ nguyên mẫu.'],
    commonMistakes: [],
    difficulty: 'medium',
    lessonIds: ['eng11-u2-language'],
    outcomeIds: ['eng11-out-u2-grammar'],
    subTypes: [
      { id: 'eng11-u2-grammar-obligation', name: 'Nghĩa vụ và lời khuyên', example: 'must / have to / should', targetQuestionCount: 6 },
      { id: 'eng11-u2-grammar-negative', name: 'Cấm đoán và không cần thiết', example: 'mustn’t / don’t have to / shouldn’t', targetQuestionCount: 6 }
    ]
  },
  {
    ...base,
    id: 'eng11-qt-u2-reading',
    name: 'Đọc hiểu về khoảng cách thế hệ',
    slug: 'generation-gap-reading',
    description: 'Đọc văn bản nguyên bản và trả lời câu hỏi về luận điểm, chi tiết, thái độ, quy chiếu và suy luận.',
    recognitionSigns: ['Câu hỏi yêu cầu main purpose, according to, attitude, refers to hoặc infer.', 'Văn bản có thể trình bày nhiều góc nhìn.'],
    solvingSteps: ['Xác định cấu trúc lập luận của bài.', 'Tìm bằng chứng trực tiếp hoặc tín hiệu thái độ.', 'Loại đáp án tuyệt đối hóa hoặc không được hỗ trợ.'],
    commonMistakes: [],
    difficulty: 'hard',
    lessonIds: ['eng11-u2-reading'],
    outcomeIds: ['eng11-out-u2-reading'],
    subTypes: [
      { id: 'eng11-u2-read-main-detail', name: 'Mục đích, ý chính và chi tiết', example: 'Main purpose / According to the passage', targetQuestionCount: 6 },
      { id: 'eng11-u2-read-infer-attitude', name: 'Suy luận, thái độ và quy chiếu', example: 'It can be inferred / The writer suggests / refers to', targetQuestionCount: 6 }
    ]
  },
  {
    ...base,
    id: 'eng11-qt-u2-writing',
    name: 'Writing gián tiếp về quan hệ gia đình',
    slug: 'generation-gap-indirect-writing',
    description: 'Tổ chức đoạn văn, chọn câu chủ đề và viết lại câu về nghĩa vụ, lời khuyên và thỏa hiệp.',
    recognitionSigns: ['Theo dõi từ nối tương phản, nguyên nhân và kết quả.', 'Câu viết lại phải giữ nguyên mức độ nghĩa vụ hoặc lời khuyên.'],
    solvingSteps: ['Xác định quan hệ giữa các ý.', 'Kiểm tra từ nối hoặc modal giữ đúng sắc thái.', 'Đọc lại toàn câu hoặc đoạn.'],
    commonMistakes: [],
    difficulty: 'medium',
    lessonIds: ['eng11-u2-writing'],
    outcomeIds: ['eng11-out-u2-writing'],
    subTypes: [
      { id: 'eng11-u2-write-order', name: 'Sắp xếp đoạn và liên kết ý', example: 'Topic sentence, opposing view, compromise, conclusion', targetQuestionCount: 6 },
      { id: 'eng11-u2-write-transform', name: 'Viết lại câu với modal', example: 'It is necessary → have to; It is advisable → should', targetQuestionCount: 6 }
    ]
  },
  {
    ...base,
    id: 'eng11-qt-u2-communication',
    name: 'Giao tiếp khi có bất đồng thế hệ',
    slug: 'generation-gap-communication',
    description: 'Nêu và đáp lại quan điểm, không đồng ý lịch sự, làm rõ ý và đề xuất thỏa hiệp.',
    recognitionSigns: ['Có dấu hiệu I think, I see your point, however hoặc How about...?', 'Phản hồi cần giữ cuộc trao đổi mang tính xây dựng.'],
    solvingSteps: ['Xác định quan điểm hoặc bất đồng.', 'Chọn phản hồi ghi nhận người đối thoại.', 'Kiểm tra lý do hoặc phương án thỏa hiệp.'],
    commonMistakes: [],
    difficulty: 'medium',
    lessonIds: ['eng11-u2-communication-culture'],
    outcomeIds: ['eng11-out-u2-communication'],
    subTypes: [
      { id: 'eng11-u2-comm-opinion', name: 'Nêu và phản hồi quan điểm', example: 'In my view... / I see your point, but...', targetQuestionCount: 6 },
      { id: 'eng11-u2-comm-compromise', name: 'Làm rõ và thỏa hiệp', example: 'Do you mean...? / How about agreeing on...?', targetQuestionCount: 6 }
    ]
  }
];
