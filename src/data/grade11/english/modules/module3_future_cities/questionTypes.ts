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
  moduleId: 'eng11-m3',
  topicId: 'eng11-topic-u3',
  examFrequency: 'high' as const,
  practiceCoverage: { ...coverage, requiredPracticeRoles: [...coverage.requiredPracticeRoles], requiredRepresentations: [...coverage.requiredRepresentations] }
};

export const g11EnglishModule3QuestionTypes: CourseQuestionType[] = [
  {
    ...base,
    id: 'eng11-qt-u3-pronunciation',
    name: 'Linking final consonants to initial vowels',
    slug: 'consonant-vowel-linking',
    description: 'Nhận biết vị trí nối âm phụ âm cuối-nguyên âm đầu trong cụm và câu.',
    recognitionSigns: ['Từ trước kết thúc bằng âm phụ âm.', 'Từ sau bắt đầu bằng âm nguyên âm.'],
    solvingSteps: ['Xác định âm cuối thực tế.', 'Xác định âm đầu thực tế của từ kế tiếp.', 'Đánh dấu nối nếu là phụ âm-nguyên âm và không có quãng ngắt.'],
    commonMistakes: [],
    difficulty: 'medium',
    lessonIds: ['eng11-u3-language'],
    outcomeIds: ['eng11-out-u3-pronunciation'],
    subTypes: [
      { id: 'eng11-u3-pron-identify', name: 'Nhận diện vị trí nối âm', example: 'lives‿in, cities‿of', targetQuestionCount: 6 },
      { id: 'eng11-u3-pron-boundary', name: 'Phân biệt ranh giới có/không nối', example: 'Xét âm thực tế và vị trí ngắt câu.', targetQuestionCount: 6 }
    ]
  },
  {
    ...base,
    id: 'eng11-qt-u3-vocabulary',
    name: 'Từ vựng về thành phố và cuộc sống thông minh',
    slug: 'smart-city-vocabulary',
    description: 'Dùng từ và collocation về hạ tầng, quy hoạch, giao thông, năng lượng và dữ liệu đô thị.',
    recognitionSigns: ['Ngữ cảnh mô tả dịch vụ hoặc vấn đề đô thị.', 'Khoảng trống nằm trong cụm như public transport hoặc renewable energy.'],
    solvingSteps: ['Xác định lĩnh vực đô thị.', 'Xác định từ loại và collocation.', 'Kiểm tra nghĩa và sắc thái toàn câu.'],
    commonMistakes: [],
    difficulty: 'medium',
    lessonIds: ['eng11-u3-getting-started', 'eng11-u3-language'],
    outcomeIds: ['eng11-out-u3-vocabulary'],
    subTypes: [
      { id: 'eng11-u3-vocab-meaning', name: 'Nghĩa từ đô thị', example: 'infrastructure, sensor, pedestrian, congestion', targetQuestionCount: 6 },
      { id: 'eng11-u3-vocab-collocation', name: 'Collocation đô thị thông minh', example: 'renewable energy, public transport, reduce congestion', targetQuestionCount: 6 }
    ]
  },
  {
    ...base,
    id: 'eng11-qt-u3-grammar',
    name: 'Stative verbs in continuous forms và linking verbs',
    slug: 'stative-continuous-linking-verbs',
    description: 'Phân biệt nghĩa trạng thái/hành động và dùng tính từ sau động từ nối.',
    recognitionSigns: ['Think, have, see, taste, smell có thể đổi nghĩa theo ngữ cảnh.', 'Look, seem, become, feel, taste làm linking verb và theo sau bởi adjective.'],
    solvingSteps: ['Xác định nghĩa của động từ trong câu.', 'Chọn simple hoặc continuous nếu động từ chuyển nghĩa.', 'Nếu là linking verb, chọn tính từ mô tả chủ ngữ.'],
    commonMistakes: [],
    difficulty: 'hard',
    lessonIds: ['eng11-u3-language'],
    outcomeIds: ['eng11-out-u3-grammar'],
    subTypes: [
      { id: 'eng11-u3-grammar-stative', name: 'Stative verbs chuyển nghĩa ở tiếp diễn', example: 'I think / I am thinking; I have / I am having', targetQuestionCount: 6 },
      { id: 'eng11-u3-grammar-linking', name: 'Linking verbs + adjective', example: 'The plan seems practical; the air smells clean.', targetQuestionCount: 6 }
    ]
  },
  {
    ...base,
    id: 'eng11-qt-u3-reading',
    name: 'Đọc hiểu về đô thị tương lai',
    slug: 'future-city-reading',
    description: 'Đọc văn bản nguyên bản và xử lý ý chính, chi tiết, bằng chứng, quy chiếu và suy luận.',
    recognitionSigns: ['Văn bản đánh giá giải pháp đô thị và các đánh đổi.', 'Câu hỏi có main idea, according to, refers to, infer.'],
    solvingSteps: ['Xác định vấn đề và giải pháp trung tâm.', 'Tìm bằng chứng hoặc quan hệ nguyên nhân-kết quả.', 'Loại đáp án quá tuyệt đối hoặc ngoài văn bản.'],
    commonMistakes: [],
    difficulty: 'hard',
    lessonIds: ['eng11-u3-reading'],
    outcomeIds: ['eng11-out-u3-reading'],
    subTypes: [
      { id: 'eng11-u3-read-main-detail', name: 'Ý chính, mục đích và chi tiết', example: 'Main idea / According to the passage', targetQuestionCount: 6 },
      { id: 'eng11-u3-read-infer-evidence', name: 'Suy luận, bằng chứng và quy chiếu', example: 'The evidence suggests / refers to', targetQuestionCount: 6 }
    ]
  },
  {
    ...base,
    id: 'eng11-qt-u3-writing',
    name: 'Writing gián tiếp về thành phố tương lai',
    slug: 'future-city-indirect-writing',
    description: 'Sắp xếp lập luận, chọn câu chủ đề và liên kết giải pháp với lợi ích hoặc giới hạn.',
    recognitionSigns: ['Đoạn thường theo vấn đề → giải pháp → tác động → điều kiện.', 'Cần chọn từ nối nguyên nhân, kết quả hoặc tương phản.'],
    solvingSteps: ['Xác định câu giới thiệu vấn đề.', 'Ghép giải pháp với cơ chế tác động.', 'Đặt giới hạn hoặc kết luận ở vị trí hợp lý.'],
    commonMistakes: [],
    difficulty: 'medium',
    lessonIds: ['eng11-u3-writing'],
    outcomeIds: ['eng11-out-u3-writing'],
    subTypes: [
      { id: 'eng11-u3-write-order', name: 'Sắp xếp lập luận đô thị', example: 'Problem → solution → effect → limitation', targetQuestionCount: 6 },
      { id: 'eng11-u3-write-transform', name: 'Kết hợp và viết lại câu', example: 'Nối nguyên nhân-kết quả; chọn topic/concluding sentence', targetQuestionCount: 6 }
    ]
  },
  {
    ...base,
    id: 'eng11-qt-u3-communication',
    name: 'Giao tiếp về giải pháp đô thị',
    slug: 'future-city-communication',
    description: 'Đưa ra dự đoán có mức độ, đánh giá lợi ích-hạn chế và đề xuất ưu tiên.',
    recognitionSigns: ['Có may, might, could, likely hoặc in my view.', 'Hội thoại yêu cầu cân nhắc nhiều bên liên quan.'],
    solvingSteps: ['Xác định mức độ chắc chắn.', 'Nêu lợi ích hoặc hạn chế liên quan.', 'Đưa đề xuất cụ thể, lịch sự.'],
    commonMistakes: [],
    difficulty: 'medium',
    lessonIds: ['eng11-u3-communication-culture'],
    outcomeIds: ['eng11-out-u3-communication'],
    subTypes: [
      { id: 'eng11-u3-comm-prediction', name: 'Dự đoán và đánh giá', example: 'This may reduce congestion, but...', targetQuestionCount: 6 },
      { id: 'eng11-u3-comm-proposal', name: 'Đề xuất và phản hồi giải pháp', example: 'Why don’t we...? / That could work if...', targetQuestionCount: 6 }
    ]
  }
];
