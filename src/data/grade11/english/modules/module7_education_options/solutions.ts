import type { CourseSolution } from '@/data/schema';
type Choice = 'A' | 'B' | 'C' | 'D';
const answers: Choice[] = ['A', 'B', 'C', 'D'];
const groups = [
  {
    key: 'pronunciation', recognition: 'Xác định Yes/No hay Wh-question rồi đọc sắc thái bối cảnh.',
    review: 'Intonation in questions', mistake: 'Cho rằng mọi câu hỏi dùng cùng một tone.',
    notes: [
      'Yes/No question trung tính thường lên giọng.', 'Rising tone mời người nghe xác nhận.',
      'Can I...? là Yes/No question.', 'Is...? dùng rising tone khi kiểm tra trung tính.',
      'Rise phổ biến nhưng context có thể đổi tone.', 'Final fall có thể tạo sắc thái dứt khoát/checking.',
      'What...? là Wh-question trung tính.', 'Wh-question thường xuống giọng.',
      'Wh-question yêu cầu thông tin cụ thể.', 'Rising Wh-question có thể biểu thị bất ngờ/lặp lại.',
      'Cặp quy tắc trung tính Yes/No–rise, Wh–fall là đúng.', 'Loại câu và mục đích giao tiếp cùng quyết định.'
    ]
  },
  {
    key: 'vocabulary', recognition: 'Xác định loại lộ trình, điều kiện và collocation giáo dục.',
    review: 'Education pathways and admission vocabulary', mistake: 'Nhầm route, qualification, fee và prospect.',
    notes: [
      'Degree programme dẫn tới bằng học thuật.', 'Vocational education tập trung kỹ năng nghề.',
      'Apprenticeship kết hợp nơi làm việc và học.', 'Entry requirements là điều kiện phải đáp ứng.',
      'Tuition fees là học phí.', 'Career prospects là triển vọng nghề nghiệp.',
      'Apply for a course là collocation đúng.', 'Meet requirements là đáp ứng điều kiện.',
      'Gain a qualification là đạt văn bằng/chứng chỉ.', 'Enrol in a course là ghi danh.',
      'Receive a scholarship chỉ hỗ trợ tài chính.', 'Make an informed decision là quyết định có thông tin.'
    ]
  },
  {
    key: 'grammar', recognition: 'Nhận dạng having + V3 và xác định chức năng danh từ hay clause hoàn cảnh.',
    review: 'Perfect gerunds and perfect participle clauses', mistake: 'Nhầm chức năng hoặc bỏ kiểm tra chủ ngữ logic.',
    notes: [
      'Admit theo sau bởi perfect gerund.', 'Regret nhận having missed.',
      'Having studied làm noun phrase chủ ngữ.', 'Perfect gerund giữ chức năng danh từ.',
      'Deny nhận gerund object.', 'Having checked là object của remembered.',
      'Having read xảy ra trước prepared.', 'Comparing hoàn tất trước choosing.',
      'Not having found là phủ định đúng.', 'Hoa vừa visited vừa completed nên cùng chủ ngữ.',
      'Having been offered là perfect passive.', 'Cụm đầu là gerund object, cụm sau là participle clause.'
    ]
  },
  {
    key: 'reading', recognition: 'Định vị definition, timing, cost, access, fit và evidence.',
    review: 'Reading education options critically', mistake: 'So sánh tỷ lệ khác định nghĩa hoặc coi một chỉ số là kết luận.',
    notes: [
      'Hai khảo sát khác thời điểm và định nghĩa employment.', 'Apprentices nhận wages.',
      'Sheet thêm definition, cost, qualification, route và priority.', 'So sánh cần evidence tương đương và tiêu chí cá nhân.',
      'Transport, materials và lost hours là hidden costs.', 'Rào cản cấu trúc không giải quyết chỉ bằng time management.',
      'Nhiều thay đổi cùng lúc nên không quy một nguyên nhân.', 'Access cần practical barriers và progression rõ.',
      'Trang đặt activity, cost, goal và check.', 'Overtime/mùa mưa làm điều kiện thay đổi.',
      'Evidence cho thấy learning chứ không chỉ participation.', 'Responsible progress gồm monitoring và adjustment.'
    ]
  },
  {
    key: 'writing', recognition: 'Tổ chức purpose–criteria–comparison–next step và lời khuyên có điều kiện.',
    review: 'Indirect comparison and advice writing', mistake: 'So sánh khác tiêu chí hoặc khẳng định một lựa chọn tốt cho tất cả.',
    notes: [
      'Mở mục đích, so sánh rồi bước kiểm chứng.', 'Opening nêu nhu cầu người đọc rõ.',
      'Whereas nối hai đặc điểm đối lập.', 'So sánh công bằng dùng cùng tiêu chí.',
      'Suggests và limitation tránh overclaim.', 'Sở thích người thiết kế không liên quan.',
      'Regretted having ignored là perfect gerund.', 'Closing nên có verified next step và agency.',
      'Topic sentence bao quát total cost.', 'May suit... gắn khuyên với điều kiện.',
      'Having checked xảy ra trước accepted.', 'Xác nhận bằng văn bản giảm bất định.'
    ]
  },
  {
    key: 'communication', recognition: 'Hỏi mục tiêu, evidence và constraint trước khi tư vấn.',
    review: 'Advising while preserving learner agency', mistake: 'Áp đặt lựa chọn hoặc biến kinh nghiệm cá nhân thành bằng chứng chung.',
    notes: [
      'Mục tiêu nghề và cách học cần biết trước.', 'Practical preference gợi ý kiểm tra apprenticeship.',
      'Total costs/support giúp đánh giá affordability.', 'Hỏi time/definition kiểm tra tỷ lệ.',
      'Requirement nghề tạo condition hợp lý.', 'Thảo luận mục tiêu giữ vai trò học sinh.',
      'Phân biệt personal experience với current official data.', 'Gap year cần goal và monitoring.',
      'Classroom/workplace preference liên quan learning fit.', 'Cần xét cost, quality, support, outcome.',
      'Cố vấn hỗ trợ criteria/evidence rồi để learner chọn.', 'Danh sách câu hỏi biến uncertainty thành hành động.'
    ]
  }
] as const;
export const g11EnglishModule7Solutions: CourseSolution[] = groups.flatMap(group =>
  group.notes.map((explanation, index) => ({
    id: `eng11-sol-u7-${group.key}-${String(index + 1).padStart(2, '0')}`,
    questionId: `eng11-q-u7-${group.key}-${String(index + 1).padStart(2, '0')}`,
    courseId: 'grade11:english', moduleId: 'eng11-m7', recognition: group.recognition,
    detailedSteps: [
      { order: 1, title: 'Nhận dạng yêu cầu', explanation: group.recognition },
      { order: 2, title: 'Đối chiếu quy tắc và bằng chứng', explanation }
    ],
    finalAnswer: answers[index % 4], commonMistakes: [group.mistake], reviewSuggestions: [group.review]
  }))
);
