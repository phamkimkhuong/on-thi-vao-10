import type { CourseSolution } from '@/data/schema';
type Choice = 'A' | 'B' | 'C' | 'D';
const answers: Choice[] = ['A', 'B', 'C', 'D'];
const groups = [
  {
    key: 'pronunciation', recognition: 'Xác định invitation, suggestion hay request và đọc relationship/urgency.',
    review: 'Intonation in invitations, suggestions and requests', mistake: 'Đánh giá lịch sự chỉ từ please hoặc một tone cố định.',
    notes: [
      'Would you like...? là invitation mở.', 'Open tone để chỗ cho phản hồi.',
      'Why don’t we...? là suggestion.', 'Non-final tone làm đề xuất collaborative.',
      'Tone, wording và relationship phối hợp.', 'Strong fall có thể nghe firm/directive.',
      'Could you...? là polite request.', 'Gentle rise mời permission.',
      'Urgency hợp lý hóa firm fall.', 'Màu chữ không quyết định sắc thái.',
      'Open tone và quyền decline làm mềm request.', 'Phải kết hợp pitch, wording, purpose, context.'
    ]
  },
  {
    key: 'vocabulary', recognition: 'Xác định kỹ năng tự quản, tiền bạc, thời gian và collocation.',
    review: 'Independence and self-management vocabulary', mistake: 'Đồng nhất independence với từ chối hỗ trợ.',
    notes: [
      'Self-reliance là dựa vào năng lực/phán đoán bản thân.', 'Priorities là thứ tự việc quan trọng.',
      'Budget là kế hoạch thu chi.', 'Procrastination là trì hoãn.',
      'Expenses là khoản chi.', 'Self-discipline là kiểm soát thói quen/hành động.',
      'Take responsibility for là collocation đúng.', 'Set a deadline là đặt hạn.',
      'Manage a budget là quản lý ngân sách.', 'Ask for guidance là tìm hướng dẫn.',
      'Informed decision dựa trên thông tin đáng tin.', 'Learn from consequences là học từ hệ quả.'
    ]
  },
  {
    key: 'grammar', recognition: 'Xác định focus rồi dựng It + be + focus + that/who clause.',
    review: 'Cleft sentences', mistake: 'Đặt sai focus, tense hoặc vai nghĩa.',
    notes: [
      'Lan là subject focus nên dùng who.', 'Deadline là object focus nên dùng that.',
      'My sister là người được nhấn.', 'Who nối focus người với clause.',
      'Was giữ past tense.', 'This checklist là object focus.',
      'On Sunday là time focus.', 'That nối place focus.',
      'After dinner là time phrase được nhấn.', 'Because-clause có thể là focus lý do.',
      'At the local shop là place focus đúng.', 'Cleft đổi prominence nhưng giữ core event.'
    ]
  },
  {
    key: 'reading', recognition: 'Theo dõi goal, support, agency, monitoring, risk và adjustment.',
    review: 'Reading supported independence', mistake: 'Coi làm một mình hoặc không mắc lỗi là thước đo duy nhất.',
    notes: [
      'Cha mẹ muốn phát triển skill, không chỉ compliance.', 'Reminders giảm dần rồi dừng.',
      'Mai reallocate và revise kế hoạch.', 'Record, explanation, adjustment chứng minh progress.',
      'Long ôm mọi việc làm coordination kém.', 'Board ghi task/owner/deadline/status.',
      'Electrical risk cần qualified technician.', 'Responsibility gồm delegation, communication, help.',
      'Huy bỏ route rẻ nhưng không an toàn.', 'Huy check official data và communicate.',
      'Huy tự quyết thường ngày, người lớn hỗ trợ high-risk.', 'Escalation rules hỗ trợ autonomy và safety.'
    ]
  },
  {
    key: 'writing', recognition: 'Tổ chức goal–steps–monitoring–adjustment và dùng evidence.',
    review: 'Action plans and reflective writing', mistake: 'Mục tiêu mơ hồ hoặc reflection thành phán xét tính cách.',
    notes: [
      'Goal trước, record action rồi weekly review.', 'Mục tiêu có số lần và thời hạn.',
      'As a result nối lỗi với adjustment.', 'Review phải dẫn tới adjustment.',
      'Bốn tuần đúng deadline là evidence.', 'Màu icon không giúp budget.',
      'On Sunday là cleft focus thời gian.', 'Reflection tập trung process có thể đổi.',
      'Topic sentence bao quát monitoring system.', 'Test/revise bằng data là realistic plan.',
      'Reminder là object focus.', 'Next action cùng review date khép reflection.'
    ]
  },
  {
    key: 'communication', recognition: 'Xác định lựa chọn, loại hỗ trợ, safety boundary và learner agency.',
    review: 'Supporting autonomy responsibly', mistake: 'Làm thay hoặc loại bỏ hỗ trợ cả khi rủi ro cao.',
    notes: [
      'Would you like...? cho phép lựa chọn.', 'Đề xuất steps thay vì làm thay.',
      'Show me how yêu cầu instruction.', 'Template + learner draft + review giữ agency.',
      'Tôn trọng refusal và để ngỏ hỗ trợ.', 'Suspicious payment cần trusted/official help.',
      'Hỏi phần cần support trước khi giúp.', 'Evidence và adjustment biến lỗi thành học tập.',
      'Model–practise–fade giảm scaffolding dần.', 'Bank password phải được bảo vệ.',
      'Responsible independence gồm informed choice, consequence và help.', 'Outcome/safety limits + fading prompts cân bằng.'
    ]
  }
] as const;
export const g11EnglishModule8Solutions: CourseSolution[] = groups.flatMap(group =>
  group.notes.map((explanation, index) => ({
    id: `eng11-sol-u8-${group.key}-${String(index + 1).padStart(2, '0')}`,
    questionId: `eng11-q-u8-${group.key}-${String(index + 1).padStart(2, '0')}`,
    courseId: 'grade11:english', moduleId: 'eng11-m8', recognition: group.recognition,
    detailedSteps: [
      { order: 1, title: 'Nhận dạng yêu cầu', explanation: group.recognition },
      { order: 2, title: 'Đối chiếu quy tắc và bằng chứng', explanation }
    ],
    finalAnswer: answers[index % 4], commonMistakes: [group.mistake], reviewSuggestions: [group.review]
  }))
);
