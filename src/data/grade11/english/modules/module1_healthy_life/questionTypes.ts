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
  moduleId: 'eng11-m1',
  topicId: 'eng11-topic-u1',
  examFrequency: 'high' as const,
  practiceCoverage: { ...coverage, requiredPracticeRoles: [...coverage.requiredPracticeRoles], requiredRepresentations: [...coverage.requiredRepresentations] }
};

export const g11EnglishModule1QuestionTypes: CourseQuestionType[] = [
  {
    ...base,
    id: 'eng11-qt-u1-pronunciation',
    name: 'Dạng mạnh và dạng yếu của trợ động từ',
    slug: 'strong-weak-auxiliary-forms',
    description: 'Nhận biết khi nào trợ động từ được nhấn và chọn dạng phát âm phù hợp.',
    recognitionSigns: ['Trợ động từ trong câu hỏi thường không mang trọng âm.', 'Trợ động từ trong câu trả lời ngắn hoặc dùng để nhấn mạnh thường mang trọng âm.'],
    solvingSteps: ['Xác định trợ động từ.', 'Xét trợ động từ có được nhấn hay đứng độc lập không.', 'Chọn dạng mạnh hoặc yếu phù hợp với ngữ cảnh.'],
    commonMistakes: [],
    difficulty: 'medium',
    lessonIds: ['eng11-u1-language'],
    outcomeIds: ['eng11-out-u1-pronunciation'],
    subTypes: [
      { id: 'eng11-u1-pron-weak', name: 'Nhận biết dạng yếu', example: 'Have you finished? — have thường ở dạng yếu.', targetQuestionCount: 6 },
      { id: 'eng11-u1-pron-strong', name: 'Nhận biết dạng mạnh', example: 'Yes, I have. — have mang dạng mạnh.', targetQuestionCount: 6 }
    ]
  },
  {
    ...base,
    id: 'eng11-qt-u1-vocabulary',
    name: 'Từ vựng và collocation về sức khỏe',
    slug: 'health-vocabulary-collocations',
    description: 'Dùng từ vựng về dinh dưỡng, tập luyện, hệ miễn dịch, bệnh tật và tuổi thọ trong ngữ cảnh.',
    recognitionSigns: ['Khoảng trống nằm trong một collocation.', 'Ngữ cảnh mô tả nguyên nhân, thói quen hoặc kết quả sức khỏe.'],
    solvingSteps: ['Xác định từ loại cần điền.', 'Đọc cả cụm để nhận diện collocation.', 'Kiểm tra nghĩa trong toàn câu.'],
    commonMistakes: [],
    difficulty: 'medium',
    lessonIds: ['eng11-u1-getting-started', 'eng11-u1-language'],
    outcomeIds: ['eng11-out-u1-vocabulary'],
    subTypes: [
      { id: 'eng11-u1-vocab-meaning', name: 'Nghĩa từ trong ngữ cảnh', example: 'immune system, life expectancy, ingredient', targetQuestionCount: 6 },
      { id: 'eng11-u1-vocab-collocation', name: 'Collocation sức khỏe', example: 'balanced diet, regular exercise, break a habit', targetQuestionCount: 6 }
    ]
  },
  {
    ...base,
    id: 'eng11-qt-u1-grammar',
    name: 'Past Simple và Present Perfect',
    slug: 'past-simple-present-perfect',
    description: 'Phân biệt hành động đã kết thúc ở quá khứ với kinh nghiệm, kết quả hoặc trạng thái kéo dài đến hiện tại.',
    recognitionSigns: ['Past Simple: yesterday, last..., ago, in + năm đã qua.', 'Present Perfect: since, for, already, yet, ever, never, so far.'],
    solvingSteps: ['Tìm dấu hiệu thời gian.', 'Xác định thời gian đã kết thúc hay còn liên hệ hiện tại.', 'Chia động từ đúng dạng và kiểm tra chủ ngữ.'],
    commonMistakes: [],
    difficulty: 'medium',
    lessonIds: ['eng11-u1-language'],
    outcomeIds: ['eng11-out-u1-grammar'],
    subTypes: [
      { id: 'eng11-u1-grammar-time', name: 'Dấu hiệu và mốc thời gian', example: 'I saw him yesterday / I have known him for years.', targetQuestionCount: 6 },
      { id: 'eng11-u1-grammar-context', name: 'Lựa chọn thì theo ngữ cảnh', example: 'The result matters now hoặc sự kiện đã kết thúc.', targetQuestionCount: 6 }
    ]
  },
  {
    ...base,
    id: 'eng11-qt-u1-reading',
    name: 'Đọc hiểu về lối sống lành mạnh',
    slug: 'healthy-lifestyle-reading',
    description: 'Đọc văn bản nguyên bản và trả lời câu hỏi ý chính, chi tiết, quy chiếu, từ vựng và suy luận.',
    recognitionSigns: ['Câu hỏi hỏi main idea, according to the passage, refers to hoặc infer.', 'Đáp án phải được chứng minh từ văn bản.'],
    solvingSteps: ['Đọc câu hỏi và xác định loại thông tin.', 'Tìm đoạn liên quan hoặc đọc lướt toàn bài.', 'Loại đáp án sai ý, quá rộng hoặc không được đề cập.'],
    commonMistakes: [],
    difficulty: 'hard',
    lessonIds: ['eng11-u1-reading'],
    outcomeIds: ['eng11-out-u1-reading'],
    subTypes: [
      { id: 'eng11-u1-read-main-detail', name: 'Ý chính và chi tiết', example: 'Main idea / According to the passage', targetQuestionCount: 6 },
      { id: 'eng11-u1-read-infer-reference', name: 'Suy luận, quy chiếu và từ trong ngữ cảnh', example: 'The word “it” refers to... / It can be inferred...', targetQuestionCount: 6 }
    ]
  },
  {
    ...base,
    id: 'eng11-qt-u1-writing',
    name: 'Writing gián tiếp về lối sống lành mạnh',
    slug: 'healthy-lifestyle-indirect-writing',
    description: 'Chọn câu chủ đề, liên kết ý, sắp xếp câu và viết lại câu mà không cần chấm bài tự luận.',
    recognitionSigns: ['Yêu cầu chọn thứ tự câu hoặc câu gần nghĩa nhất.', 'Cần theo dõi đại từ, từ nối và quan hệ nguyên nhân-kết quả.'],
    solvingSteps: ['Xác định câu mở đầu.', 'Nối các câu bằng từ khóa và đại từ quy chiếu.', 'Đọc lại để kiểm tra mạch ý và ngữ pháp.'],
    commonMistakes: [],
    difficulty: 'medium',
    lessonIds: ['eng11-u1-writing'],
    outcomeIds: ['eng11-out-u1-writing'],
    subTypes: [
      { id: 'eng11-u1-write-order', name: 'Sắp xếp và liên kết câu', example: 'Chọn thứ tự tạo thành đoạn văn hợp lý.', targetQuestionCount: 6 },
      { id: 'eng11-u1-write-transform', name: 'Viết lại câu và chọn câu chủ đề', example: 'Viết lại với since/for hoặc chọn topic sentence.', targetQuestionCount: 6 }
    ]
  },
  {
    ...base,
    id: 'eng11-qt-u1-communication',
    name: 'Giao tiếp chức năng về sức khỏe',
    slug: 'health-functional-communication',
    description: 'Chọn phản hồi, lời khuyên và lời đề nghị phù hợp trong hội thoại.',
    recognitionSigns: ['Có hai lượt lời và một lượt bị khuyết.', 'Phản hồi phải đúng cả ý nghĩa lẫn mức độ lịch sự.'],
    solvingSteps: ['Xác định mục đích giao tiếp.', 'Loại phản hồi sai thái độ hoặc không liên quan.', 'Đọc lại toàn hội thoại.'],
    commonMistakes: [],
    difficulty: 'medium',
    lessonIds: ['eng11-u1-communication-culture'],
    outcomeIds: ['eng11-out-u1-communication'],
    subTypes: [
      { id: 'eng11-u1-comm-advice', name: 'Đưa và đáp lại lời khuyên', example: 'You should... / Thanks, I’ll try that.', targetQuestionCount: 6 },
      { id: 'eng11-u1-comm-response', name: 'Phản hồi trong tình huống sức khỏe', example: 'Hỏi thăm, đồng ý, từ chối hoặc đề nghị lịch sự.', targetQuestionCount: 6 }
    ]
  }
];
