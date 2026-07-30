import type { LearningMisconception, LearningOutcome } from '@/types';

export const g11EnglishModule2Outcomes: LearningOutcome[] = [
  {
    id: 'eng11-out-u2-pronunciation',
    topicId: 'eng11-topic-u2',
    title: 'Nhận biết dạng rút gọn trong lời nói và văn viết',
    description: 'Phân biệt dạng đầy đủ với dạng rút gọn của trợ động từ và động từ khuyết thiếu trong ngữ cảnh.',
    scope: 'core',
    orderIndex: 1,
    questionTypeIds: ['eng11-qt-u2-pronunciation'],
    prerequisiteOutcomeIds: ['eng11-out-u1-pronunciation'],
    misconceptionIds: ['eng11-misc-u2-pronunciation'],
    evidenceTypes: ['recognition', 'explanation'],
    estimatedMinutes: 30,
    isCritical: false
  },
  {
    id: 'eng11-out-u2-vocabulary',
    topicId: 'eng11-topic-u2',
    title: 'Vận dụng từ vựng về thế hệ và gia đình',
    description: 'Dùng đúng từ và collocation về khác biệt giá trị, quan điểm, hành vi và xung đột giữa các thế hệ.',
    scope: 'core',
    orderIndex: 2,
    questionTypeIds: ['eng11-qt-u2-vocabulary'],
    prerequisiteOutcomeIds: [],
    misconceptionIds: ['eng11-misc-u2-vocabulary'],
    evidenceTypes: ['recognition', 'application'],
    estimatedMinutes: 45,
    isCritical: true
  },
  {
    id: 'eng11-out-u2-grammar',
    topicId: 'eng11-topic-u2',
    title: 'Dùng must, have to và should đúng sắc thái',
    description: 'Phân biệt nghĩa vụ do người nói, quy định bên ngoài, lời khuyên, sự cấm đoán và việc không cần thiết.',
    scope: 'core',
    orderIndex: 3,
    questionTypeIds: ['eng11-qt-u2-grammar'],
    prerequisiteOutcomeIds: [],
    misconceptionIds: ['eng11-misc-u2-grammar'],
    evidenceTypes: ['recognition', 'explanation', 'application'],
    estimatedMinutes: 60,
    isCritical: true
  },
  {
    id: 'eng11-out-u2-reading',
    topicId: 'eng11-topic-u2',
    title: 'Đọc hiểu văn bản về khoảng cách thế hệ',
    description: 'Xác định lập luận, chi tiết, thái độ, quy chiếu và suy luận trong văn bản về giao tiếp gia đình.',
    scope: 'core',
    orderIndex: 4,
    questionTypeIds: ['eng11-qt-u2-reading'],
    prerequisiteOutcomeIds: ['eng11-out-u2-vocabulary'],
    misconceptionIds: ['eng11-misc-u2-reading'],
    evidenceTypes: ['recognition', 'explanation', 'application'],
    estimatedMinutes: 60,
    isCritical: true
  },
  {
    id: 'eng11-out-u2-writing',
    topicId: 'eng11-topic-u2',
    title: 'Tổ chức bài viết gián tiếp về quan hệ gia đình',
    description: 'Sắp xếp đoạn, chọn câu chủ đề và viết lại câu thể hiện nghĩa vụ hoặc lời khuyên.',
    scope: 'core',
    orderIndex: 5,
    questionTypeIds: ['eng11-qt-u2-writing'],
    prerequisiteOutcomeIds: ['eng11-out-u2-vocabulary', 'eng11-out-u2-grammar'],
    misconceptionIds: ['eng11-misc-u2-writing'],
    evidenceTypes: ['representation', 'application'],
    estimatedMinutes: 45,
    isCritical: false
  },
  {
    id: 'eng11-out-u2-communication',
    topicId: 'eng11-topic-u2',
    title: 'Thảo luận bất đồng giữa các thế hệ một cách lịch sự',
    description: 'Chọn cách nêu quan điểm, đồng ý, không đồng ý và đề xuất thỏa hiệp phù hợp.',
    scope: 'core',
    orderIndex: 6,
    questionTypeIds: ['eng11-qt-u2-communication'],
    prerequisiteOutcomeIds: ['eng11-out-u2-vocabulary'],
    misconceptionIds: ['eng11-misc-u2-communication'],
    evidenceTypes: ['recognition', 'application'],
    estimatedMinutes: 30,
    isCritical: false
  }
];

export const g11EnglishModule2Misconceptions: LearningMisconception[] = [
  {
    id: 'eng11-misc-u2-pronunciation',
    outcomeId: 'eng11-out-u2-pronunciation',
    statement: 'Dạng rút gọn có thể dùng trong mọi văn bản.',
    correction: 'Dạng rút gọn phổ biến trong lời nói và văn viết thân mật; văn bản trang trọng thường ưu tiên dạng đầy đủ.',
    severity: 'normal'
  },
  {
    id: 'eng11-misc-u2-vocabulary',
    outcomeId: 'eng11-out-u2-vocabulary',
    statement: 'Generation gap luôn đồng nghĩa với xung đột nghiêm trọng.',
    correction: 'Generation gap là sự khác biệt về quan điểm, giá trị hoặc trải nghiệm; nó có thể dẫn đến bất đồng nhưng không nhất thiết là xung đột.',
    severity: 'normal'
  },
  {
    id: 'eng11-misc-u2-grammar',
    outcomeId: 'eng11-out-u2-grammar',
    statement: 'Mustn’t và don’t have to đều có nghĩa là không cần.',
    correction: 'Mustn’t là không được phép; don’t have to là không cần thiết nhưng vẫn có thể làm.',
    severity: 'critical'
  },
  {
    id: 'eng11-misc-u2-reading',
    outcomeId: 'eng11-out-u2-reading',
    statement: 'Tác giả nêu hai phía nghĩa là tác giả không có quan điểm.',
    correction: 'Một văn bản cân bằng vẫn có thể có luận điểm; cần xem cách tác giả đánh giá bằng chứng và kết luận.',
    severity: 'critical'
  },
  {
    id: 'eng11-misc-u2-writing',
    outcomeId: 'eng11-out-u2-writing',
    statement: 'Có thể mở đoạn bằng However hoặc This mà không cần ý trước đó.',
    correction: 'Từ nối tương phản và đại từ quy chiếu cần một ý đứng trước để liên kết.',
    severity: 'normal'
  },
  {
    id: 'eng11-misc-u2-communication',
    outcomeId: 'eng11-out-u2-communication',
    statement: 'Không đồng ý lịch sự chỉ cần thêm please.',
    correction: 'Nên ghi nhận quan điểm trước, nêu bất đồng mềm và đưa lý do hoặc phương án thay thế.',
    severity: 'normal'
  }
];
