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
    recognition: 'Mở rộng dạng rút gọn bằng cách xét dấu nháy và dạng động từ theo sau.',
    review: 'Contracted forms and formal/informal usage',
    mistake: 'Luôn hiểu ’s hoặc ’d theo một nghĩa duy nhất.',
    notes: [
      ['A', '’ll là dạng rút gọn của will.'],
      ['B', 'They’ve được mở rộng thành they have.'],
      ['C', 'Mustn’t là dạng rút gọn phủ định của must not.'],
      ['D', 'Trong I’d like, ’d là would: I would like.'],
      ['A', 'Talking là V-ing nên cấu trúc là she is talking.'],
      ['B', 'Finished là past participle nên cấu trúc là he has finished.'],
      ['C', 'We’re là dạng rút gọn đúng của we are.'],
      ['D', 'Cannot là dạng đầy đủ và phù hợp hơn trong thông báo trang trọng.'],
      ['A', 'Already spoken là cụm Present Perfect nên Mai’s = Mai has.'],
      ['B', 'We are rút gọn thành we’re, không phải we’ll.'],
      ['C', 'Must not là dạng đầy đủ, chính xác và trang trọng.'],
      ['D', 'Past Perfect “left” yêu cầu she had left.']
    ]
  },
  {
    key: 'vocab',
    recognition: 'Xác định khái niệm hoặc collocation về thế hệ, quan điểm và quan hệ gia đình.',
    review: 'Generation-gap vocabulary and collocations',
    mistake: 'Nhầm value, attitude, behaviour hoặc dùng sai động từ trong collocation.',
    notes: [
      ['A', 'Cụm cố định là generation gap.'],
      ['B', 'Honesty và respect là các values, tức những điều gia đình coi trọng.'],
      ['C', 'Conflict là một bất đồng nghiêm trọng hoặc xung đột.'],
      ['D', 'Privacy là quyền giữ thông tin hoặc không gian cá nhân ở trạng thái riêng tư.'],
      ['A', 'Attitude là cách nghĩ hoặc cảm nhận đối với người hay vấn đề.'],
      ['B', 'Việc kiểm tra điện thoại là hành động quan sát được nên là behaviour.'],
      ['A', 'Collocation đúng là reach a compromise.'],
      ['B', 'Respect someone’s privacy là tôn trọng quyền riêng tư của người khác.'],
      ['C', 'Resolve conflicts nghĩa là giải quyết xung đột.'],
      ['D', 'Set rules là đặt ra các quy tắc.'],
      ['A', 'Express an opinion là bày tỏ quan điểm.'],
      ['B', 'Follow a tradition là tiếp tục thực hành một truyền thống.']
    ]
  },
  {
    key: 'grammar',
    recognition: 'Xác định nghĩa vụ, lời khuyên, sự cấm đoán hoặc việc không cần thiết.',
    review: 'Must, have to, should, mustn’t and don’t have to',
    mistake: 'Đồng nhất mustn’t với don’t have to hoặc thêm to sau must/should.',
    notes: [
      ['A', 'Người nói tự nhấn mạnh việc gọi cho bà là rất quan trọng nên dùng must.'],
      ['B', 'Nghĩa vụ đến từ school rules nên have to phù hợp.'],
      ['C', 'Tình huống cần lời khuyên nhẹ nên dùng should.'],
      ['D', 'Cấu trúc đúng là have to + V; deadline tạo nghĩa vụ bên ngoài.'],
      ['A', 'Câu đưa lời khuyên để có cuộc trò chuyện cởi mở nên dùng should.'],
      ['B', 'Lịch xe buýt tạo hoàn cảnh buộc người nói rời sớm nên dùng have to.'],
      ['C', 'Chia sẻ mật khẩu là điều bị cấm vì không an toàn nên dùng mustn’t.'],
      ['D', 'Đã có bữa trưa nên không cần mang đồ ăn: do not have to.'],
      ['A', 'Không ngắt lời là lời khuyên về hành vi phù hợp: should not.'],
      ['B', 'Not necessary tương đương does not have to, không phải mustn’t.'],
      ['C', 'Must not + V nguyên mẫu là cấu trúc đúng và diễn tả cấm dùng lối thoát.'],
      ['D', 'Không cần mua vé nhưng bị cấm chạm hiện vật: don’t have to / mustn’t.']
    ]
  },
  {
    key: 'reading',
    recognition: 'Xác định ý chính, người phát ngôn và bằng chứng trước khi suy luận.',
    review: 'Reading arguments, details, attitude and inference',
    mistake: 'Gán lời của nhân vật cho tác giả hoặc chọn đáp án tuyệt đối hóa.',
    notes: [
      ['A', 'Bài mô tả cách một thỏa thuận chung, linh hoạt giúp gia đình xử lý xung đột điện thoại.'],
      ['B', 'Gia đình chỉ bàn về quy tắc sau khi có vi phạm nên cuộc trao đổi dễ thành tranh cãi.'],
      ['C', 'Quy tắc không dùng điện thoại trong bữa ăn áp dụng cho mọi thành viên.'],
      ['D', 'Đoạn cuối nói cải thiện chính đến từ việc mọi người giải thích nhu cầu phía sau quan điểm.'],
      ['A', 'Bài lập luận rằng so sánh thế hệ phải xét trí nhớ chọn lọc và bối cảnh khác nhau.'],
      ['B', 'Fewer educational opportunities được nêu là khó khăn của các thế hệ trước.'],
      ['C', 'Cụm này bác bỏ kết luận rằng thiếu niên ngày nay khó khăn hơn ở mọi mặt.'],
      ['D', 'Tác giả liên tục khuyến khích tò mò, cân bằng và thảo luận thay vì cạnh tranh.'],
      ['A', 'Hai thế hệ luân phiên dạy và học các kỹ năng khác nhau nên gọi là reverse mentoring.'],
      ['B', 'Ví dụ trong bài cho thấy người cùng độ tuổi vẫn có năng lực và hành vi rất khác nhau.'],
      ['C', 'Giải thích thay vì cầm thiết bị làm hộ giúp người học tăng tính độc lập.'],
      ['D', 'Trải nghiệm hợp tác trực tiếp tạo bằng chứng chống lại định kiến chung chung.']
    ]
  },
  {
    key: 'writing',
    recognition: 'Theo dõi cấu trúc vấn đề–góc nhìn–giải pháp và giữ nguyên sắc thái modal khi viết lại.',
    review: 'Indirect writing about family views and compromise',
    mistake: 'Đổi lời khuyên thành nghĩa vụ hoặc đổi “không cần” thành “bị cấm”.',
    notes: [
      ['A', 'B nêu vấn đề, C mô tả bước trao đổi và A đưa ra giải pháp cuối cùng.'],
      ['B', 'Câu B bao quát chủ đề giải quyết bất đồng bằng giao tiếp tôn trọng.'],
      ['C', 'Hai ý trái chiều nên dùng However.'],
      ['D', 'First → Then → As a result tạo thứ tự b-c-a.'],
      ['A', 'Chiếc xe đạp của người chú không liên quan đến việc rà soát quy tắc gia đình.'],
      ['B', 'Câu B đánh giá thỏa hiệp và khép lại hai góc nhìn đã trình bày.'],
      ['C', 'Necessary trong quy định tương ứng với have to.'],
      ['D', 'Not necessary tương đương do not have to.'],
      ['A', 'Advisable biểu thị lời khuyên nên dùng should.'],
      ['B', 'Although nối nỗi lo với hành động vẫn lắng nghe, giữ đúng quan hệ tương phản.'],
      ['C', 'Câu C nêu khác biệt trung tính và đề xuất thảo luận nguyên nhân.'],
      ['D', 'Câu D lịch sự, cụ thể và mời người nhận tiếp tục trao đổi.']
    ]
  },
  {
    key: 'comm',
    recognition: 'Xác định người nói đang nêu quan điểm, bất đồng, hỏi lại hay đề xuất thỏa hiệp.',
    review: 'Polite disagreement, clarification and compromise',
    mistake: 'Tấn công người nói hoặc chọn phản hồi không giúp cuộc trao đổi tiếp tục.',
    notes: [
      ['A', 'Câu sau giải thích lợi ích của quy tắc áp dụng chung nên hoàn toàn đồng ý là hợp lý.'],
      ['B', 'I’m not sure I agree nêu bất đồng mềm trước khi đưa lý do.'],
      ['C', 'From my perspective là khung diễn đạt quan điểm lịch sự.'],
      ['D', 'I see your point, but ghi nhận lo lắng trước khi đưa góc nhìn khác.'],
      ['A', 'Câu A phản hồi nội dung của quy tắc và không công kích cá nhân.'],
      ['B', 'Câu B bác bỏ khái quát hóa “mọi người trẻ” bằng cách diễn đạt thận trọng.'],
      ['A', 'Do you mean...? kiểm tra lại cách hiểu về nhu cầu riêng tư.'],
      ['B', 'How about + V-ing dùng để đưa ra đề xuất thỏa hiệp.'],
      ['C', 'Could you explain...? là cách hỏi làm rõ lịch sự và cụ thể.'],
      ['D', 'Tách thời gian cho hai hoạt động đáp ứng nhu cầu của cả hai bên.'],
      ['A', 'Phương án này giữ giới hạn ngày đi học nhưng cho phép bàn linh hoạt cuối tuần.'],
      ['B', 'That seems reasonable ghi nhận đề xuất thử và xem xét lại sau một tháng.']
    ]
  }
];

export const g11EnglishModule2Solutions: CourseSolution[] = groups.flatMap(group =>
  group.notes.map(([answer, explanation], index) => ({
    id: `eng11-sol-u2-${group.key}-${String(index + 1).padStart(2, '0')}`,
    questionId: `eng11-q-u2-${group.key}-${String(index + 1).padStart(2, '0')}`,
    courseId: 'grade11:english',
    moduleId: 'eng11-m2',
    recognition: group.recognition,
    detailedSteps: [
      { order: 1, title: 'Nhận dạng yêu cầu', explanation: group.recognition },
      { order: 2, title: 'Đối chiếu ngữ cảnh', explanation }
    ],
    finalAnswer: answer,
    commonMistakes: [group.mistake],
    reviewSuggestions: [group.review]
  }))
);
