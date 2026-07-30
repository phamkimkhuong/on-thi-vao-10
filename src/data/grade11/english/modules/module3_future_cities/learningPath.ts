import type { LearningMisconception, LearningOutcome } from '@/types';

export const g11EnglishModule3Outcomes: LearningOutcome[] = [
  {
    id: 'eng11-out-u3-pronunciation',
    topicId: 'eng11-topic-u3',
    title: 'Nhận biết nối phụ âm cuối với nguyên âm đầu',
    description: 'Xác định vị trí nối âm giữa từ kết thúc bằng phụ âm và từ tiếp theo bắt đầu bằng nguyên âm.',
    scope: 'core',
    orderIndex: 1,
    questionTypeIds: ['eng11-qt-u3-pronunciation'],
    prerequisiteOutcomeIds: ['eng11-out-u1-pronunciation'],
    misconceptionIds: ['eng11-misc-u3-pronunciation'],
    evidenceTypes: ['recognition', 'explanation'],
    estimatedMinutes: 30,
    isCritical: false
  },
  {
    id: 'eng11-out-u3-vocabulary',
    topicId: 'eng11-topic-u3',
    title: 'Vận dụng từ vựng về đô thị thông minh',
    description: 'Dùng đúng từ và collocation về hạ tầng, giao thông, năng lượng, quy hoạch và chất lượng sống.',
    scope: 'core',
    orderIndex: 2,
    questionTypeIds: ['eng11-qt-u3-vocabulary'],
    prerequisiteOutcomeIds: [],
    misconceptionIds: ['eng11-misc-u3-vocabulary'],
    evidenceTypes: ['recognition', 'application'],
    estimatedMinutes: 45,
    isCritical: true
  },
  {
    id: 'eng11-out-u3-grammar',
    topicId: 'eng11-topic-u3',
    title: 'Dùng động từ trạng thái ở dạng tiếp diễn và động từ nối',
    description: 'Nhận biết khi động từ trạng thái chuyển nghĩa để dùng dạng tiếp diễn và dùng tính từ sau linking verbs.',
    scope: 'core',
    orderIndex: 3,
    questionTypeIds: ['eng11-qt-u3-grammar'],
    prerequisiteOutcomeIds: [],
    misconceptionIds: ['eng11-misc-u3-grammar'],
    evidenceTypes: ['recognition', 'explanation', 'application'],
    estimatedMinutes: 60,
    isCritical: true
  },
  {
    id: 'eng11-out-u3-reading',
    topicId: 'eng11-topic-u3',
    title: 'Đọc hiểu văn bản về thành phố tương lai',
    description: 'Xác định ý chính, bằng chứng, nguyên nhân-kết quả, quy chiếu và suy luận trong văn bản đô thị.',
    scope: 'core',
    orderIndex: 4,
    questionTypeIds: ['eng11-qt-u3-reading'],
    prerequisiteOutcomeIds: ['eng11-out-u3-vocabulary'],
    misconceptionIds: ['eng11-misc-u3-reading'],
    evidenceTypes: ['recognition', 'explanation', 'application'],
    estimatedMinutes: 60,
    isCritical: true
  },
  {
    id: 'eng11-out-u3-writing',
    topicId: 'eng11-topic-u3',
    title: 'Tổ chức bài viết gián tiếp về đô thị tương lai',
    description: 'Sắp xếp đoạn, chọn luận điểm và liên kết giải pháp đô thị với lợi ích hoặc hạn chế.',
    scope: 'core',
    orderIndex: 5,
    questionTypeIds: ['eng11-qt-u3-writing'],
    prerequisiteOutcomeIds: ['eng11-out-u3-vocabulary', 'eng11-out-u3-grammar'],
    misconceptionIds: ['eng11-misc-u3-writing'],
    evidenceTypes: ['representation', 'application'],
    estimatedMinutes: 45,
    isCritical: false
  },
  {
    id: 'eng11-out-u3-communication',
    topicId: 'eng11-topic-u3',
    title: 'Thảo luận và đánh giá giải pháp đô thị',
    description: 'Đưa ra dự đoán, nêu ưu/nhược điểm và đề xuất giải pháp đô thị trong hội thoại.',
    scope: 'core',
    orderIndex: 6,
    questionTypeIds: ['eng11-qt-u3-communication'],
    prerequisiteOutcomeIds: ['eng11-out-u3-vocabulary'],
    misconceptionIds: ['eng11-misc-u3-communication'],
    evidenceTypes: ['recognition', 'application'],
    estimatedMinutes: 30,
    isCritical: false
  }
];

export const g11EnglishModule3Misconceptions: LearningMisconception[] = [
  {
    id: 'eng11-misc-u3-pronunciation',
    outcomeId: 'eng11-out-u3-pronunciation',
    statement: 'Nối âm dựa trên chữ cái cuối và đầu.',
    correction: 'Nối âm dựa trên âm cuối và âm đầu thực tế, không chỉ dựa trên cách viết.',
    severity: 'normal'
  },
  {
    id: 'eng11-misc-u3-vocabulary',
    outcomeId: 'eng11-out-u3-vocabulary',
    statement: 'Smart city chỉ là thành phố có nhiều thiết bị điện tử.',
    correction: 'Đô thị thông minh kết hợp dữ liệu, hạ tầng, quản trị và thiết kế để cải thiện dịch vụ và chất lượng sống.',
    severity: 'normal'
  },
  {
    id: 'eng11-misc-u3-grammar',
    outcomeId: 'eng11-out-u3-grammar',
    statement: 'Động từ trạng thái không bao giờ dùng ở dạng tiếp diễn.',
    correction: 'Một số động từ trạng thái có thể dùng tiếp diễn khi chuyển sang nghĩa hành động hoặc tình trạng tạm thời.',
    severity: 'critical'
  },
  {
    id: 'eng11-misc-u3-reading',
    outcomeId: 'eng11-out-u3-reading',
    statement: 'Một công nghệ được nhắc đến nghĩa là tác giả hoàn toàn ủng hộ nó.',
    correction: 'Cần phân biệt mô tả, bằng chứng, lợi ích, hạn chế và đánh giá cuối cùng của tác giả.',
    severity: 'critical'
  },
  {
    id: 'eng11-misc-u3-writing',
    outcomeId: 'eng11-out-u3-writing',
    statement: 'Liệt kê càng nhiều công nghệ thì đoạn văn càng thuyết phục.',
    correction: 'Mỗi giải pháp phải gắn với vấn đề, cơ chế tác động và bằng chứng hoặc giới hạn.',
    severity: 'normal'
  },
  {
    id: 'eng11-misc-u3-communication',
    outcomeId: 'eng11-out-u3-communication',
    statement: 'Dự đoán về tương lai phải được diễn đạt như sự chắc chắn.',
    correction: 'Dùng may, might, could và likely khi bằng chứng chỉ cho phép dự đoán có mức độ.',
    severity: 'normal'
  }
];
