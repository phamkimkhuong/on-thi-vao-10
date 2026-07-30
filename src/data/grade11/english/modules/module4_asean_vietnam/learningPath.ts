import type { LearningMisconception, LearningOutcome } from '@/types';

export const g11EnglishModule4Outcomes: LearningOutcome[] = [
  {
    id: 'eng11-out-u4-pronunciation',
    topicId: 'eng11-topic-u4',
    title: 'Nhận biết hiện tượng nuốt nguyên âm',
    description: 'Nhận biết nguyên âm không nhấn có thể bị lược trong một số từ thông dụng khi nói tự nhiên.',
    scope: 'core',
    orderIndex: 1,
    questionTypeIds: ['eng11-qt-u4-pronunciation'],
    prerequisiteOutcomeIds: ['eng11-out-u3-pronunciation'],
    misconceptionIds: ['eng11-misc-u4-pronunciation'],
    evidenceTypes: ['recognition', 'explanation'],
    estimatedMinutes: 30,
    isCritical: false
  },
  {
    id: 'eng11-out-u4-vocabulary',
    topicId: 'eng11-topic-u4',
    title: 'Vận dụng từ vựng về ASEAN và Việt Nam',
    description: 'Dùng đúng từ và collocation về hợp tác khu vực, văn hóa, kinh tế, thanh niên và quan hệ thành viên.',
    scope: 'core',
    orderIndex: 2,
    questionTypeIds: ['eng11-qt-u4-vocabulary'],
    prerequisiteOutcomeIds: [],
    misconceptionIds: ['eng11-misc-u4-vocabulary'],
    evidenceTypes: ['recognition', 'application'],
    estimatedMinutes: 45,
    isCritical: true
  },
  {
    id: 'eng11-out-u4-grammar',
    topicId: 'eng11-topic-u4',
    title: 'Dùng gerunds làm chủ ngữ và tân ngữ',
    description: 'Dùng V-ing như danh từ ở vị trí chủ ngữ và sau các động từ/giới từ phù hợp.',
    scope: 'core',
    orderIndex: 3,
    questionTypeIds: ['eng11-qt-u4-grammar'],
    prerequisiteOutcomeIds: [],
    misconceptionIds: ['eng11-misc-u4-grammar'],
    evidenceTypes: ['recognition', 'explanation', 'application'],
    estimatedMinutes: 60,
    isCritical: true
  },
  {
    id: 'eng11-out-u4-reading',
    topicId: 'eng11-topic-u4',
    title: 'Đọc hiểu văn bản về hợp tác ASEAN',
    description: 'Xác định mục đích, chi tiết, quan hệ hợp tác, quy chiếu và suy luận trong văn bản khu vực.',
    scope: 'core',
    orderIndex: 4,
    questionTypeIds: ['eng11-qt-u4-reading'],
    prerequisiteOutcomeIds: ['eng11-out-u4-vocabulary'],
    misconceptionIds: ['eng11-misc-u4-reading'],
    evidenceTypes: ['recognition', 'explanation', 'application'],
    estimatedMinutes: 60,
    isCritical: true
  },
  {
    id: 'eng11-out-u4-writing',
    topicId: 'eng11-topic-u4',
    title: 'Tổ chức bài viết gián tiếp về hoạt động ASEAN',
    description: 'Sắp xếp và hoàn thiện thông báo, thư ngắn hoặc đoạn giới thiệu hoạt động hợp tác khu vực.',
    scope: 'core',
    orderIndex: 5,
    questionTypeIds: ['eng11-qt-u4-writing'],
    prerequisiteOutcomeIds: ['eng11-out-u4-vocabulary', 'eng11-out-u4-grammar'],
    misconceptionIds: ['eng11-misc-u4-writing'],
    evidenceTypes: ['representation', 'application'],
    estimatedMinutes: 45,
    isCritical: false
  },
  {
    id: 'eng11-out-u4-communication',
    topicId: 'eng11-topic-u4',
    title: 'Trao đổi về hợp tác và đa dạng văn hóa ASEAN',
    description: 'Mời tham gia, hỏi thông tin, phản hồi và thể hiện tôn trọng khác biệt văn hóa.',
    scope: 'core',
    orderIndex: 6,
    questionTypeIds: ['eng11-qt-u4-communication'],
    prerequisiteOutcomeIds: ['eng11-out-u4-vocabulary'],
    misconceptionIds: ['eng11-misc-u4-communication'],
    evidenceTypes: ['recognition', 'application'],
    estimatedMinutes: 30,
    isCritical: false
  }
];

export const g11EnglishModule4Misconceptions: LearningMisconception[] = [
  { id: 'eng11-misc-u4-pronunciation', outcomeId: 'eng11-out-u4-pronunciation', statement: 'Mọi nguyên âm viết ra đều phải phát âm đầy đủ trong lời nói tự nhiên.', correction: 'Một số nguyên âm không nhấn có thể bị lược; cần học theo cách phát âm chuẩn của từng từ.', severity: 'normal' },
  { id: 'eng11-misc-u4-vocabulary', outcomeId: 'eng11-out-u4-vocabulary', statement: 'Regional cooperation chỉ liên quan đến thương mại.', correction: 'Hợp tác khu vực có thể bao gồm giáo dục, văn hóa, môi trường, y tế, an ninh và kinh tế.', severity: 'normal' },
  { id: 'eng11-misc-u4-grammar', outcomeId: 'eng11-out-u4-grammar', statement: 'Mọi động từ đều có thể theo sau trực tiếp bằng gerund.', correction: 'Cần học complementation: enjoy/avoid/suggest + V-ing, nhưng want/decide thường + to-infinitive.', severity: 'critical' },
  { id: 'eng11-misc-u4-reading', outcomeId: 'eng11-out-u4-reading', statement: 'Một hoạt động có nhiều quốc gia tham gia nghĩa là lợi ích tự động được chia đều.', correction: 'Cần đọc kỹ thiết kế, điều kiện tiếp cận và cách phân phối nguồn lực hoặc tiếng nói.', severity: 'critical' },
  { id: 'eng11-misc-u4-writing', outcomeId: 'eng11-out-u4-writing', statement: 'Thông báo hoạt động chỉ cần tên sự kiện.', correction: 'Thông báo cần mục đích, đối tượng, thời gian, địa điểm/cách tham gia và hành động cần thực hiện.', severity: 'normal' },
  { id: 'eng11-misc-u4-communication', outcomeId: 'eng11-out-u4-communication', statement: 'Nói về văn hóa có thể dùng các khái quát tuyệt đối cho cả quốc gia.', correction: 'Tránh định kiến; dùng ngôn ngữ thận trọng và hỏi người tham gia về trải nghiệm cụ thể.', severity: 'normal' }
];
