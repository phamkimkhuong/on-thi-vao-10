import type { CourseSolution } from '@/data/schema';

type Choice = 'A' | 'B' | 'C' | 'D';
type Note = [Choice, string];

const groups: Array<{
  key: string;
  recognition: string;
  review: string;
  mistake: string;
  notes: Note[];
}> = [
  {
    key: 'pron',
    recognition: 'Xác định trợ động từ có mang trọng âm, đứng độc lập hoặc thể hiện tương phản hay không.',
    review: 'Strong and weak forms of auxiliary verbs',
    mistake: 'Chỉ nhìn mặt chữ mà không xét chức năng và trọng âm của trợ động từ.',
    notes: [
      ['A', 'Do chỉ làm nhiệm vụ tạo câu hỏi trung tính nên thường ở dạng yếu.'],
      ['B', 'Can là trợ động từ trong câu hỏi trung tính và thường không mang trọng âm.'],
      ['C', 'Have đứng đầu câu hỏi và chỉ hỗ trợ tạo Present Perfect nên thường yếu.'],
      ['D', 'Could trong lời đề nghị trung tính thường không được nhấn.'],
      ['A', 'Was tạo câu hỏi và không mang thông tin tương phản nên thường dùng dạng yếu.'],
      ['C', 'Trong “Has Lan taken...?”, has là trợ động từ không được nhấn.'],
      ['B', 'Do trong câu trả lời ngắn đứng cuối cụm và mang thông tin xác nhận nên mạnh.'],
      ['D', 'Can trong “Yes, I can” là câu trả lời ngắn nên mang dạng mạnh.'],
      ['B', 'HAS được nhấn để bác lại nhận định trước đó nên dùng dạng mạnh.'],
      ['C', 'Could vừa mang ý tương phản vừa đứng không có động từ chính theo sau nên được nhấn.'],
      ['A', 'DO được nhấn để khẳng định mạnh hoặc sửa một nhận định sai.'],
      ['D', 'Have ở câu hỏi thường yếu, còn have trong câu trả lời ngắn thường mạnh.']
    ]
  },
  {
    key: 'vocab',
    recognition: 'Xác định nghĩa cần diễn đạt, từ loại và collocation trong toàn câu.',
    review: 'Vocabulary and collocations about health and longevity',
    mistake: 'Chọn từ gần nghĩa nhưng không tạo thành cụm tự nhiên.',
    notes: [
      ['A', 'Balanced diet là chế độ ăn cung cấp các nhóm chất ở lượng phù hợp.'],
      ['B', 'Immune system là hệ miễn dịch bảo vệ cơ thể khỏi tác nhân gây bệnh.'],
      ['C', 'Detect a disease nghĩa là phát hiện một căn bệnh.'],
      ['D', 'Life expectancy là số năm trung bình một người được kỳ vọng sẽ sống.'],
      ['A', 'Vitamins là một nhóm nutrients, tức các chất dinh dưỡng cơ thể cần.'],
      ['B', 'Fever và cough có thể là symptoms, tức triệu chứng của nhiễm trùng.'],
      ['A', 'Collocation đúng là boost the immune system.'],
      ['B', 'Break a habit nghĩa là từ bỏ hoặc chấm dứt một thói quen.'],
      ['C', 'Regular exercise là vận động đều đặn.'],
      ['D', 'Suffer from đi với bệnh hoặc tình trạng sức khỏe.'],
      ['A', 'Cụm cố định là life expectancy.'],
      ['B', 'Sedentary mô tả lối sống ít vận động.']
    ]
  },
  {
    key: 'grammar',
    recognition: 'Tìm dấu hiệu thời gian và xác định hành động đã kết thúc hay còn liên hệ hiện tại.',
    review: 'Past Simple vs. Present Perfect; since and for',
    mistake: 'Dùng Present Perfect với yesterday, last... hoặc ago.',
    notes: [
      ['A', 'Twenty years ago là mốc quá khứ đã kết thúc nên dùng stopped.'],
      ['B', 'Three months là khoảng thời gian nên dùng for.'],
      ['C', 'Last Friday yêu cầu Past Simple: organised.'],
      ['D', 'Yet thường đứng cuối câu hỏi hoặc câu phủ định ở Present Perfect.'],
      ['A', 'Since she was sixteen chỉ trạng thái kéo dài đến hiện tại: has been.'],
      ['B', 'September 2025 là thời gian quá khứ xác định nên dùng met.'],
      ['C', 'Chấn thương có kết quả hiện tại là không thể chạy nên dùng have injured.'],
      ['D', 'Has gone cho biết Minh đã đi và hiện chưa quay lại.'],
      ['A', 'Cấu trúc “This is the first time...” đi với Present Perfect.'],
      ['B', 'Giai đoạn học đại học của mẹ đã kết thúc nên dùng played.'],
      ['C', 'For two months kết hợp đúng với Present Perfect và không có mốc quá khứ đã kết thúc.'],
      ['D', 'Ever since nối từ khi phòng khám mở đến hiện tại nên dùng has offered.']
    ]
  },
  {
    key: 'reading',
    recognition: 'Xác định loại câu hỏi, tìm bằng chứng trong văn bản rồi loại đáp án sai phạm vi hoặc sai ý.',
    review: 'Reading: main idea, details, reference and inference',
    mistake: 'Chọn đáp án chỉ vì lặp lại từ trong bài hoặc dựa vào kiến thức bên ngoài.',
    notes: [
      ['A', 'Toàn bài đối chiếu kế hoạch cực đoan với thay đổi nhỏ, thực tế và bền vững.'],
      ['B', 'Đoạn đầu nói các kế hoạch này đòi hỏi quá nhiều sự chú ý và năng lượng.'],
      ['C', 'Đoạn ba đề xuất đánh dấu lịch như một cách theo dõi đơn giản.'],
      ['D', 'Đoạn cuối nhấn mạnh thói quen cần phù hợp với hoàn cảnh thực tế.'],
      ['A', 'Bài đọc giải thích giấc ngủ là quá trình chủ động và thiết yếu với sức khỏe.'],
      ['D', 'Gardening không được nêu là nguyên nhân làm giảm thời gian ngủ của thiếu niên.'],
      ['B', 'Một lịch ngủ quá cứng nhắc có thể gây lo âu, trái với mục đích giúp nghỉ ngơi.'],
      ['A', 'Bài khuyên thay đổi thói quen nhưng vẫn yêu cầu gặp chuyên gia nếu vấn đề kéo dài.'],
      ['C', 'Phòng khám muốn tạo cơ hội giao tiếp xã hội và vận động nhẹ an toàn.'],
      ['D', 'They nối với cụm community activities ngay trước đó.'],
      ['A', 'Tác giả nêu động lực sẵn có và giao tiếp xã hội đều có thể góp phần vào kết quả.'],
      ['B', 'Kết luận của bài là hoạt động cộng đồng được thiết kế tốt có thể bổ trợ chăm sóc chuyên môn.']
    ]
  },
  {
    key: 'writing',
    recognition: 'Theo dõi câu chủ đề, đại từ quy chiếu, từ nối và quan hệ logic giữa các câu.',
    review: 'Indirect writing: paragraph organisation and sentence transformation',
    mistake: 'Sắp xếp câu theo từ giống nhau nhưng bỏ qua quan hệ nguyên nhân-kết quả.',
    notes: [
      ['A', 'B giới thiệu thói quen, C phát triển chi tiết và A nêu kết quả.'],
      ['B', 'Câu B bao quát chủ đề và có thể đứng độc lập trước các ví dụ.'],
      ['C', 'Mệt mỏi là nguyên nhân dẫn đến quyết định ngủ sớm, nên dùng Therefore.'],
      ['D', 'First → Next → Finally tạo thứ tự a-c-b.'],
      ['A', 'Tuổi của tòa nhà trường không hỗ trợ lợi ích của vận động với học sinh.'],
      ['B', 'Câu B tổng kết nhiều thay đổi nhỏ và liên hệ lại chủ đề sức khỏe.'],
      ['C', 'Started two years ago và vẫn tiếp tục tương đương have done... for two years.'],
      ['D', 'Last ate in May nghĩa là từ tháng Năm đến nay Mai chưa ăn lại.'],
      ['A', 'Nước, ngủ và vận động đều là các thói quen hằng ngày ảnh hưởng sức khỏe.'],
      ['B', 'Although diễn tả tương phản giữa chế độ ăn tốt và nhu cầu vẫn phải tập thể dục.'],
      ['C', 'Câu C ngắn gọn, rõ nghĩa và không lặp từ vô ích.'],
      ['D', 'Câu D vừa lịch sự vừa nêu rõ hành động người nhận cần phản hồi.']
    ]
  },
  {
    key: 'comm',
    recognition: 'Xác định mục đích của lượt lời và chọn phản hồi liên quan, tự nhiên, lịch sự.',
    review: 'Giving advice and responding in health-related situations',
    mistake: 'Chọn câu đúng ngữ pháp nhưng không đáp lại nội dung của hội thoại.',
    notes: [
      ['A', 'Ngủ sớm hơn là lời khuyên trực tiếp và phù hợp với việc thức khuya gây mệt.'],
      ['B', 'That sounds like a good idea là cách tiếp nhận lời gợi ý tự nhiên.'],
      ['C', 'Could đưa ra lời khuyên mềm, cụ thể và tôn trọng người nghe.'],
      ['D', 'How about... đưa ra một bước khởi đầu nhỏ, phù hợp với yêu cầu của người nói.'],
      ['A', 'Câu này cảm ơn và cho biết sẽ thử làm theo lời khuyên.'],
      ['B', 'Người nghe ghi nhận lời khuyên và thể hiện ý định thực hiện.'],
      ['A', 'Câu trả lời trực tiếp cho câu hỏi thăm sức khỏe và có lời cảm ơn.'],
      ['B', 'Cấu trúc I’d love to, but... từ chối lời mời một cách lịch sự và nêu lý do.'],
      ['C', 'Thành tích vừa hoàn thành phù hợp với lời chúc mừng.'],
      ['D', 'Câu trả lời đồng ý giúp và bắt đầu bằng hướng dẫn an toàn.'],
      ['A', 'Câu A thể hiện quan tâm và đề nghị hỗ trợ cụ thể.'],
      ['B', 'I hope you recover soon là lời chúc phù hợp khi người khác cần nghỉ vì sức khỏe.']
    ]
  }
];

export const g11EnglishModule1Solutions: CourseSolution[] = groups.flatMap(group =>
  group.notes.map(([answer, explanation], index) => ({
    id: `eng11-sol-u1-${group.key}-${String(index + 1).padStart(2, '0')}`,
    questionId: `eng11-q-u1-${group.key}-${String(index + 1).padStart(2, '0')}`,
    courseId: 'grade11:english',
    moduleId: 'eng11-m1',
    recognition: group.recognition,
    detailedSteps: [
      {
        order: 1,
        title: 'Nhận dạng yêu cầu',
        explanation: group.recognition
      },
      {
        order: 2,
        title: 'Đối chiếu ngữ cảnh',
        explanation
      }
    ],
    finalAnswer: answer,
    commonMistakes: [group.mistake],
    reviewSuggestions: [group.review]
  }))
);
