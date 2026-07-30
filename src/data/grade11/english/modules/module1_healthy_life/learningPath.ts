import type { LearningMisconception, LearningOutcome } from '@/types';

export const g11EnglishModule1Outcomes: LearningOutcome[] = [
  {
    id: 'eng11-out-u1-pronunciation',
    topicId: 'eng11-topic-u1',
    title: 'Nhận biết dạng mạnh và dạng yếu của trợ động từ',
    description: 'Phân biệt dạng mạnh/yếu của do, does, can, could, was, were, have, has theo vị trí và ý nghĩa trong câu.',
    scope: 'core',
    orderIndex: 1,
    questionTypeIds: ['eng11-qt-u1-pronunciation'],
    prerequisiteOutcomeIds: [],
    misconceptionIds: ['eng11-misc-u1-pronunciation'],
    evidenceTypes: ['recognition', 'explanation'],
    estimatedMinutes: 30,
    isCritical: false
  },
  {
    id: 'eng11-out-u1-vocabulary',
    topicId: 'eng11-topic-u1',
    title: 'Vận dụng từ vựng về sức khỏe và tuổi thọ',
    description: 'Dùng đúng từ, cụm từ và collocation về dinh dưỡng, vận động, bệnh tật và lối sống lành mạnh.',
    scope: 'core',
    orderIndex: 2,
    questionTypeIds: ['eng11-qt-u1-vocabulary'],
    prerequisiteOutcomeIds: [],
    misconceptionIds: ['eng11-misc-u1-vocabulary'],
    evidenceTypes: ['recognition', 'application'],
    estimatedMinutes: 45,
    isCritical: true
  },
  {
    id: 'eng11-out-u1-grammar',
    topicId: 'eng11-topic-u1',
    title: 'Phân biệt quá khứ đơn và hiện tại hoàn thành',
    description: 'Chọn và sử dụng đúng Past Simple hoặc Present Perfect dựa trên mốc thời gian, kết quả và khoảng thời gian kéo dài đến hiện tại.',
    scope: 'core',
    orderIndex: 3,
    questionTypeIds: ['eng11-qt-u1-grammar'],
    prerequisiteOutcomeIds: [],
    misconceptionIds: ['eng11-misc-u1-grammar'],
    evidenceTypes: ['recognition', 'explanation', 'application'],
    estimatedMinutes: 60,
    isCritical: true
  },
  {
    id: 'eng11-out-u1-reading',
    topicId: 'eng11-topic-u1',
    title: 'Đọc hiểu văn bản về lối sống lành mạnh',
    description: 'Xác định ý chính, chi tiết, từ quy chiếu, nghĩa trong ngữ cảnh và suy luận trong văn bản về sức khỏe.',
    scope: 'core',
    orderIndex: 4,
    questionTypeIds: ['eng11-qt-u1-reading'],
    prerequisiteOutcomeIds: ['eng11-out-u1-vocabulary'],
    misconceptionIds: ['eng11-misc-u1-reading'],
    evidenceTypes: ['recognition', 'explanation', 'application'],
    estimatedMinutes: 60,
    isCritical: true
  },
  {
    id: 'eng11-out-u1-writing',
    topicId: 'eng11-topic-u1',
    title: 'Tổ chức thông tin viết về lối sống lành mạnh',
    description: 'Sắp xếp câu, chọn câu chủ đề và liên kết ý để tạo đoạn văn mạch lạc; đây là bằng chứng viết gián tiếp có thể tự chấm.',
    scope: 'core',
    orderIndex: 5,
    questionTypeIds: ['eng11-qt-u1-writing'],
    prerequisiteOutcomeIds: ['eng11-out-u1-vocabulary', 'eng11-out-u1-grammar'],
    misconceptionIds: ['eng11-misc-u1-writing'],
    evidenceTypes: ['representation', 'application'],
    estimatedMinutes: 45,
    isCritical: false
  },
  {
    id: 'eng11-out-u1-communication',
    topicId: 'eng11-topic-u1',
    title: 'Phản hồi phù hợp trong giao tiếp về sức khỏe',
    description: 'Chọn lời khuyên, phản hồi và cách diễn đạt phù hợp với tình huống giao tiếp về sức khỏe.',
    scope: 'core',
    orderIndex: 6,
    questionTypeIds: ['eng11-qt-u1-communication'],
    prerequisiteOutcomeIds: ['eng11-out-u1-vocabulary'],
    misconceptionIds: ['eng11-misc-u1-communication'],
    evidenceTypes: ['recognition', 'application'],
    estimatedMinutes: 30,
    isCritical: false
  }
];

export const g11EnglishModule1Misconceptions: LearningMisconception[] = [
  {
    id: 'eng11-misc-u1-pronunciation',
    outcomeId: 'eng11-out-u1-pronunciation',
    statement: 'Mọi trợ động từ đều được phát âm mạnh trong câu.',
    correction: 'Trợ động từ thường có dạng yếu khi không được nhấn; dạng mạnh xuất hiện khi trả lời ngắn, nhấn mạnh hoặc đứng cuối cụm.',
    severity: 'normal'
  },
  {
    id: 'eng11-misc-u1-vocabulary',
    outcomeId: 'eng11-out-u1-vocabulary',
    statement: 'Có thể ghép bất kỳ tính từ tích cực nào với diet hoặc exercise.',
    correction: 'Cần học theo collocation, chẳng hạn balanced diet, regular exercise và life expectancy.',
    severity: 'normal'
  },
  {
    id: 'eng11-misc-u1-grammar',
    outcomeId: 'eng11-out-u1-grammar',
    statement: 'Dùng hiện tại hoàn thành với mọi hành động xảy ra trong quá khứ.',
    correction: 'Dùng quá khứ đơn khi thời gian quá khứ đã kết thúc; dùng hiện tại hoàn thành khi không nêu mốc quá khứ kết thúc hoặc kết quả còn liên hệ hiện tại.',
    severity: 'critical'
  },
  {
    id: 'eng11-misc-u1-reading',
    outcomeId: 'eng11-out-u1-reading',
    statement: 'Chọn đáp án vì có cùng từ với bài đọc.',
    correction: 'Phải kiểm tra cả ý nghĩa của câu và quan hệ giữa chi tiết với câu hỏi; đáp án nhiễu thường lặp từ nhưng làm sai ý.',
    severity: 'critical'
  },
  {
    id: 'eng11-misc-u1-writing',
    outcomeId: 'eng11-out-u1-writing',
    statement: 'Đoạn văn chỉ cần các câu đúng ngữ pháp, không cần thứ tự logic.',
    correction: 'Đoạn văn cần câu chủ đề, các ý hỗ trợ theo trình tự và câu kết hoặc thông điệp rõ ràng.',
    severity: 'normal'
  },
  {
    id: 'eng11-misc-u1-communication',
    outcomeId: 'eng11-out-u1-communication',
    statement: 'Lời khuyên càng trực tiếp càng phù hợp.',
    correction: 'Cần xét quan hệ, ngữ cảnh và mức độ lịch sự; should, could hoặc Why don’t you thường phù hợp hơn mệnh lệnh.',
    severity: 'normal'
  }
];
