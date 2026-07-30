import type { CourseSolution } from '@/data/schema';

type Choice = 'A' | 'B' | 'C' | 'D';
type Note = [Choice, string];
const groups: Array<{ key: string; recognition: string; review: string; mistake: string; notes: Note[] }> = [
  {
    key: 'pron', recognition: 'Xác định âm tiết không nhấn và đối chiếu cách phát âm tự nhiên được chấp nhận.',
    review: 'Elision of unstressed vowels', mistake: 'Tự ý lược mọi nguyên âm yếu chỉ dựa vào chính tả.',
    notes: [
      ['A', 'Nguyên âm không nhấn dễ bị yếu hoặc lược trong một số từ.'],
      ['B', 'Family thường có cách phát âm tự nhiên với nguyên âm giữa bị lược.'],
      ['C', 'History có thể lược một nguyên âm giữa không nhấn.'],
      ['D', 'Comfortable thường giảm một nguyên âm yếu, làm số âm tiết nghe ít hơn.'],
      ['A', 'Different là ví dụ quen thuộc của vowel elision.'],
      ['B', 'Camera có thể giảm nguyên âm giữa trong nhiều giọng chuẩn.'],
      ['C', 'Elision là đặc điểm được chấp nhận của những cách phát âm cụ thể.'],
      ['D', 'Cần kiểm tra phát âm chuẩn vì chữ viết không phản ánh đầy đủ âm nói.'],
      ['A', 'Âm không nhấn thường yếu hơn và dễ bị lược.'],
      ['B', 'Nguồn phát âm đáng tin giúp kiểm tra stress và số âm tiết.'],
      ['C', 'Khi nguyên âm giữa bị lược, hai phụ âm có thể đứng liền trong phát âm.'],
      ['D', 'Biến thể tồn tại; mục tiêu là nhận biết dạng phổ biến, không xóa âm tùy ý.']
    ]
  },
  {
    key: 'vocab', recognition: 'Xác định khái niệm, từ loại và collocation trong ngữ cảnh ASEAN.',
    review: 'ASEAN vocabulary and regional-cooperation collocations', mistake: 'Nhầm người tham gia với sự tham gia hoặc sai giới từ trong participate in.',
    notes: [
      ['A', 'Cụm đúng là member state.'],
      ['B', 'Cultural diversity là sự đa dạng văn hóa.'],
      ['C', 'Participant là danh từ chỉ người tham gia.'],
      ['D', 'Cultural identity là ý thức về mình là ai trong một nhóm văn hóa.'],
      ['A', 'Summit là cuộc họp cấp cao của lãnh đạo.'],
      ['B', 'Participation là danh từ cần ở vị trí chủ ngữ.'],
      ['A', 'Promote cooperation là thúc đẩy hợp tác.'],
      ['B', 'Strengthen ties là củng cố quan hệ.'],
      ['C', 'Host a forum là đăng cai/tổ chức diễn đàn.'],
      ['D', 'Participate in là tham gia vào.'],
      ['A', 'Exchange ideas là trao đổi ý tưởng.'],
      ['B', 'Economic growth là tăng trưởng kinh tế.']
    ]
  },
  {
    key: 'grammar', recognition: 'Xác định gerund làm chủ ngữ, tân ngữ hoặc đứng sau giới từ.',
    review: 'Gerunds as subjects and objects', mistake: 'Dùng to-infinitive sau suggest/enjoy hoặc chia verb số nhiều sau gerund subject.',
    notes: [
      ['A', 'Learning là gerund phrase làm chủ ngữ.'],
      ['B', 'Joining... là một hoạt động số ít nên dùng helps.'],
      ['C', 'Preserving làm chủ ngữ của requires.'],
      ['D', 'Giving presentations là gerund phrase làm chủ ngữ.'],
      ['A', 'Working... là chủ ngữ số ít nên dùng develops.'],
      ['B', 'Exchanging ideas là gerund subject đúng.'],
      ['A', 'Enjoy đi với V-ing: communicating.'],
      ['B', 'Suggest đi với V-ing: hosting.'],
      ['C', 'Sau giới từ in dùng learning.'],
      ['D', 'Avoid đi với V-ing: making.'],
      ['A', 'Look forward to có to là giới từ nên theo sau meeting.'],
      ['B', 'After là giới từ/liên từ rút gọn ở đây nên dùng submitting.']
    ]
  },
  {
    key: 'reading', recognition: 'Xác định mục tiêu, cơ chế hợp tác, bằng chứng và rào cản tiếp cận.',
    review: 'Reading regional cooperation, evidence and fairness', mistake: 'Đồng nhất mục tiêu với kết quả hoặc coi số người tham dự là bằng chứng duy nhất.',
    notes: [
      ['A', 'Bài nhấn mạnh phương pháp chung, bối cảnh địa phương và tham gia bao trùm.'],
      ['B', 'Phương pháp ghi chung giúp dữ liệu có thể so sánh.'],
      ['C', 'Điều kiện địa phương khác nhau khiến một trung bình chung gây hiểu sai.'],
      ['D', 'Luân phiên vai trò giúp nhiều học sinh có đóng góp rõ ràng.'],
      ['A', 'Bài giải thích vấn đề khói xuyên biên giới cần hợp tác minh bạch và kiến thức địa phương.'],
      ['B', 'Nền tảng cho phép so sánh điều kiện và thống nhất mức khuyến cáo sức khỏe.'],
      ['C', 'Khoảng bất định cho biết giới hạn của quan sát và ước lượng.'],
      ['D', 'Minh bạch về nguồn bằng chứng và tác động giúp xây dựng lòng tin.'],
      ['A', 'Biểu diễn ngắn, nhiều màu sắc có nguy cơ biến văn hóa thành định kiến đơn giản.'],
      ['B', 'Cộng đồng được cùng chọn chủ đề và giải thích bối cảnh.'],
      ['C', 'Một nền văn hóa có đa dạng nội bộ nên một cá nhân không đại diện cho tất cả.'],
      ['D', 'Cảm nhận được đại diện chính xác và hợp tác mới là bằng chứng sâu hơn lượng người dự.']
    ]
  },
  {
    key: 'writing', recognition: 'Xác định loại văn bản, thứ tự purpose–details–action và mức độ khẳng định.',
    review: 'Indirect writing: notices, invitations and programme descriptions', mistake: 'Thiếu deadline/cách đăng ký hoặc khẳng định mục tiêu như kết quả chắc chắn.',
    notes: [
      ['A', 'B giới thiệu hoạt động, C nêu đối tượng, A chỉ cách và hạn đăng ký.'],
      ['B', 'Câu B trang trọng, rõ tên chương trình và mục đích thông báo.'],
      ['C', 'However nối working language với hỗ trợ dịch mang tính điều chỉnh/đối lập.'],
      ['D', 'B giới thiệu, C mời cụ thể, A yêu cầu phản hồi.'],
      ['A', 'Màu yêu thích của người tổ chức không giúp người đọc tham gia.'],
      ['B', 'Câu B nêu deadline, cách nộp và bước phản hồi.'],
      ['C', 'It is valuable to learn... giữ nghĩa của gerund subject.'],
      ['D', 'Taking part in đồng nghĩa joining trong ngữ cảnh.'],
      ['A', 'Câu A bao quát ba hình thức đóng góp của thanh niên.'],
      ['B', 'Aims to mô tả mục tiêu mà không giả định chương trình đã thành công.'],
      ['C', 'By exchanging... diễn đạt phương tiện dẫn đến khả năng nhận diện thách thức chung.'],
      ['D', 'Câu D tổng kết kết quả hiện tại và khả năng hợp tác sau này.']
    ]
  },
  {
    key: 'comm', recognition: 'Xác định lời mời, yêu cầu thông tin hoặc phản hồi đa văn hóa.',
    review: 'Inviting, requesting information and culturally respectful communication', mistake: 'Chọn lời đáp không cung cấp bước tiếp theo hoặc dùng khái quát hóa tuyệt đối.',
    notes: [
      ['A', 'Câu trả lời chấp nhận lời mời và hỏi thông tin cần thiết.'],
      ['B', 'Câu B trả lời trực tiếp điều kiện tham gia.'],
      ['C', 'We would be delighted... là lời mời trang trọng.'],
      ['D', 'Câu D chủ động cung cấp chương trình và liên kết đăng ký.'],
      ['A', 'Câu hỏi về interpretation/translation kiểm tra khả năng tiếp cận.'],
      ['B', 'Phản hồi ghi nhận lý do và đưa lựa chọn xem lại phù hợp.'],
      ['A', 'Câu A bác bỏ khái quát hóa và nhấn mạnh đa dạng cá nhân/cộng đồng.'],
      ['B', 'Hỏi người tham gia giúp hiểu ý nghĩa trong bối cảnh thay vì đoán.'],
      ['C', 'In some communities tạo mức khẳng định thận trọng và có phạm vi.'],
      ['D', 'Câu hỏi tiếp tục đối thoại và mời làm rõ điều bất ngờ.'],
      ['A', 'Hỏi lịch sử trước khi thử thể hiện tôn trọng kiến thức và bối cảnh.'],
      ['B', 'Câu trả lời chia sẻ trải nghiệm cụ thể, không khái quát cho mọi người.']
    ]
  }
];

export const g11EnglishModule4Solutions: CourseSolution[] = groups.flatMap(group =>
  group.notes.map(([answer, explanation], index) => ({
    id: `eng11-sol-u4-${group.key}-${String(index + 1).padStart(2, '0')}`,
    questionId: `eng11-q-u4-${group.key}-${String(index + 1).padStart(2, '0')}`,
    courseId: 'grade11:english', moduleId: 'eng11-m4', recognition: group.recognition,
    detailedSteps: [
      { order: 1, title: 'Nhận dạng yêu cầu', explanation: group.recognition },
      { order: 2, title: 'Đối chiếu ngữ cảnh', explanation }
    ],
    finalAnswer: answer, commonMistakes: [group.mistake], reviewSuggestions: [group.review]
  }))
);
