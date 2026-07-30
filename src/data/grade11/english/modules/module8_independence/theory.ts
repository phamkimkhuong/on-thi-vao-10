import type { TheoryBlock } from '@/data/schema';
type Choice = 'A' | 'B' | 'C' | 'D';
const sourceIds = ['eng11-source-official-program', 'eng11-source-global-success-textbook'];
const block = (
  kind: string, lesson: string, title: string, objectives: string[], paragraphs: string[],
  keyPoints: string[], example: [string, string, string[], string],
  checks: Array<[string, [string, string, string, string], Choice, string]>,
  orderIndex: number, formulas: TheoryBlock['formulas'] = []
): TheoryBlock => ({
  id: `eng11-theory-u8-${kind}`, courseId: 'grade11:english', moduleId: 'eng11-m8',
  lessonIds: kind === 'vocabulary' ? ['eng11-u8-getting-started', 'eng11-u8-language'] : [`eng11-u8-${lesson}`],
  outcomeIds: [`eng11-out-u8-${kind}`], questionTypeIds: [`eng11-qt-u8-${kind}`], sourceIds,
  title, objectives, content: paragraphs.join('\n\n'), formulas, keyPoints,
  workedExamples: [{ id: `eng11-ex-u8-${kind}`, title: example[0], problem: example[1], steps: example[2], answer: example[3] }],
  checkpoints: checks.map((item, index) => ({
    id: `eng11-cp-u8-${kind}-${index + 1}`, question: item[0],
    options: item[1], correctAnswer: item[2], explanation: item[3]
  })),
  orderIndex, reviewStatus: 'source_checked'
});
export const g11EnglishModule8Theory: TheoryBlock[] = [
  block('pronunciation', 'language', 'Intonation in invitations, suggestions and requests',
    ['Nhận biết friendly rising tone và polite fall-rise.', 'Kết hợp tone với cấu trúc và bối cảnh.'],
    [
      'Invitations và suggestions thân thiện thường có rising hoặc fall-rise tone để giữ không gian cho người nghe: “Would you like to join us?”; “Why don’t we make a budget?” Requests lịch sự cũng tránh final fall quá mạnh.',
      'Một falling tone mạnh có thể phù hợp với chỉ dẫn khẩn cấp hoặc yêu cầu dứt khoát, nhưng trong request thông thường có thể nghe áp đặt. Từ please không tự động sửa được tone hoặc cấu trúc thiếu lịch sự.',
      'Ý nghĩa phụ thuộc quan hệ, urgency và wording. Bài tập web yêu cầu suy ra sắc thái dự kiến; không coi một đường nét là đúng tuyệt đối trong mọi biến thể giao tiếp.'
    ],
    ['Invitation/suggestion thường mở bằng rise hoặc fall-rise.', 'Request lịch sự kết hợp modal và tone.', 'Urgency có thể tạo final fall mạnh.'],
    ['Chọn sắc thái', 'Why might “Could you help me?” use rising tone?', ['Modal tạo request.', 'Rising tone mời phản hồi và làm mềm yêu cầu.'], 'To sound open and polite.'],
    [
      ['Câu nào là invitation?', ['Would you like to join us?', 'Close it now.', 'You joined yesterday.', 'Why is it closed?'], 'A', 'Would you like...? là cấu trúc lời mời.'],
      ['Tone request phải xét cùng:', ['chính tả duy nhất', 'wording, relationship and urgency', 'số chữ cái', 'màu văn bản'], 'B', 'Sắc thái do nhiều yếu tố giao tiếp quyết định.']
    ], 1),
  block('vocabulary', 'language', 'Vocabulary: skills, responsibility and self-management',
    ['Dùng từ về quản lý thời gian, tiền và quyết định.', 'Phân biệt independence với isolation.'],
    [
      'Independent people can set priorities, make decisions, solve problems and take responsibility. Self-reliance không có nghĩa từ chối mọi hỗ trợ; help-seeking đúng lúc là một kỹ năng.',
      'Time management gồm estimate time, set a deadline, break a task into steps và avoid procrastination. Financial skills gồm make a budget, track expenses, distinguish needs from wants và build an emergency fund.',
      'Collocation trọng tâm gồm take responsibility for, make an informed decision, meet a deadline, manage a budget, develop self-discipline, ask for guidance và learn from consequences.'
    ],
    ['take responsibility for', 'set priorities/deadlines', 'manage a budget', 'ask for guidance appropriately'],
    ['Chọn hành động', 'What should you do before spending your whole allowance?', ['Ghi needs, wants và available money.', 'Lập budget và theo dõi expenses.'], 'Make a budget.'],
    [
      ['Cụm nào đúng?', ['take responsibility for', 'do responsibility at', 'make deadline late', 'manage on money'], 'A', 'Take responsibility for là collocation chuẩn.'],
      ['Trì hoãn việc cần làm là:', ['self-reliance', 'procrastination', 'budgeting', 'prioritising'], 'B', 'Procrastination là sự trì hoãn.']
    ], 2),
  block('grammar', 'language', 'Cleft sentences with It',
    ['Nhấn mạnh subject hoặc object.', 'Nhấn mạnh time/place phrase và giữ đúng nghĩa.'],
    [
      'It-cleft có cấu trúc It + be + focus + that/who clause: “It was Lan who created the budget.” Focus Lan sửa hoặc đối lập người thực hiện. Who thường dùng cho người; that dùng rộng hơn.',
      'Để nhấn object: “It was the deadline that Nam forgot.” Để nhấn time/place: “It was on Friday that we reviewed the plan”; “It was at home that she learnt to cook.”',
      'Cleft sentence phải giữ đúng tense và các vai nghĩa câu gốc. Không đưa cả mệnh đề vào focus tùy ý. Trong câu hỏi có thể dùng “Was it Minh who...?” nhưng trọng tâm core là nhận biết và biến đổi câu kể.'
    ],
    ['It + be + focus + that/who clause.', 'Be giữ tense phù hợp.', 'Focus phải đúng thành phần cần nhấn.'],
    ['Biến đổi câu', 'Mai paid the bill yesterday. Emphasise yesterday.', ['Focus là trạng ngữ thời gian.', 'Dùng It was yesterday that...'], 'It was yesterday that Mai paid the bill.'],
    [
      ['Nhấn chủ thể Lan trong “Lan made the plan”:', ['It was Lan who made the plan.', 'It Lan was plan.', 'Lan that it made.', 'It made Lan who plan.'], 'A', 'Lan là focus người, theo sau who clause.'],
      ['Nhấn Friday:', ['It Friday was we met.', 'It was on Friday that we met.', 'Friday who met us.', 'It was meet Friday.'], 'B', 'Trạng ngữ on Friday đặt ở focus.']
    ], 3, [
      { id: 'eng11-form-u8-cleft', label: 'It-cleft', expression: 'It + be + focus + that/who + clause', variables: [{ symbol: 'focus', meaning: 'Thành phần được nhấn mạnh' }], conditions: ['Giữ nghĩa và tense của câu gốc'] }
    ]),
  block('reading', 'reading', 'Reading evidence of growing independence',
    ['Phân biệt support với doing-for.', 'Đánh giá tiến bộ qua hành vi và dữ liệu theo thời gian.'],
    [
      'Văn bản về tự lập thường mô tả goal, strategy, monitoring và adjustment. Một hành động đơn lẻ chưa chứng minh kỹ năng bền vững; hãy tìm việc người học có thể lặp lại, giải thích và điều chỉnh.',
      'Support hữu ích có thể là checklist, modelling, feedback hoặc reminder tạm thời. Nếu người hỗ trợ làm thay mọi bước, người học không phát triển quyền quyết định và năng lực tự theo dõi.',
      'Bằng chứng tiến bộ gồm hoàn thành đúng hạn, budget accuracy, phản ánh nguyên nhân sai lệch, biết xin giúp đỡ và giảm dần scaffolding. Cần xét cả wellbeing và rủi ro, không tôn vinh thất bại nguy hiểm.'
    ],
    ['Goal–strategy–monitor–adjust.', 'Scaffolding nên giảm dần.', 'Progress cần hành vi lặp lại và reflection.'],
    ['Đánh giá support', 'A parent completes every budget entry. Does this build independence?', ['Learner không thực hiện/kiểm tra.', 'Support đã biến thành doing-for.'], 'Không; nên chuyển sang hướng dẫn rồi giảm hỗ trợ.'],
    [
      ['Dấu hiệu tiến bộ mạnh là:', ['Một lần may mắn', 'Tự theo dõi và điều chỉnh qua nhiều tuần', 'Người khác làm thay', 'Không bao giờ hỏi'], 'B', 'Tiến bộ bền vững cần dữ liệu qua thời gian.'],
      ['Scaffolding tốt nên:', ['tăng mãi', 'giảm khi năng lực tăng', 'xóa agency', 'tránh feedback'], 'B', 'Hỗ trợ được rút dần theo năng lực.']
    ], 4),
  block('writing', 'writing', 'Indirect writing: action plans and reflective advice',
    ['Tổ chức goal–steps–deadline–monitoring.', 'Viết reflection dựa trên evidence và adjustment.'],
    [
      'Action plan cần mục tiêu cụ thể, các bước, thời hạn, nguồn lực, tiêu chí theo dõi và thời điểm review. “Become independent” quá rộng; “prepare three meals safely by the end of the month” có thể quan sát.',
      'Reflection nên nêu what happened, evidence, why và next adjustment. Không biến một lỗi thành phán xét tính cách; tập trung vào quy trình có thể thay đổi.',
      'Các connector first, by, because, however, after reviewing và next time làm rõ sequence và reason. Cleft sentence có thể dùng có mục đích để nhấn nguyên nhân hoặc thay đổi quan trọng.'
    ],
    ['Specific goal.', 'Steps + deadline + monitoring.', 'Reflection: evidence → cause → adjustment.'],
    ['Làm rõ mục tiêu', 'Improve “I will manage money better.”', ['Thêm hành vi và thời gian.', 'Thêm cách theo dõi.'], 'I will record every expense for four weeks and review my budget each Sunday.'],
    [
      ['Mục tiêu nào đo được?', ['Be better.', 'Submit every task by its deadline this month.', 'Try things.', 'Become perfect.'], 'B', 'Có hành vi và thời hạn rõ.'],
      ['Reflection tốt kết bằng:', ['đổ lỗi', 'adjustment cụ thể', 'khẩu hiệu', 'bỏ dữ liệu'], 'B', 'Adjustment biến evidence thành cải tiến.']
    ], 5),
  block('communication', 'communication-culture', 'Supporting autonomy through invitations and requests',
    ['Đưa lời mời, đề xuất và yêu cầu lịch sự.', 'Hỗ trợ mà không làm thay.'],
    [
      'Invitation cho phép từ chối: Would you like to review the plan together? Suggestion mở lựa chọn: We could start with one task. Request nêu hành động cụ thể: Could you show me how to check this bill?',
      'Khi hỗ trợ, hỏi What part would you like help with? thay vì tiếp quản. Có thể model một lần, cùng làm một lần, rồi để người học tự làm và review.',
      'Tự lập bao gồm ranh giới an toàn. Trong tình huống y tế, pháp lý hoặc tài chính rủi ro, tìm người lớn/chuyên gia không phải thất bại mà là quyết định có trách nhiệm.'
    ],
    ['Offer choice.', 'Ask what support is needed.', 'Model–practise–fade.', 'Escalate high-risk issues.'],
    ['Hỗ trợ giữ agency', 'Respond to “Can you do my application for me?”', ['Không làm thay toàn bộ.', 'Đề xuất review checklist và feedback.'], 'I can help you check the requirements, then you can draft it and I’ll give feedback.'],
    [
      ['Lời mời tôn trọng là:', ['Would you like to plan this together?', 'You must accept.', 'I decided for you.', 'No refusal.'], 'A', 'Would you like...? cho phép lựa chọn.'],
      ['Khi có rủi ro nghiêm trọng nên:', ['giấu đi', 'seek qualified help', 'đoán', 'từ chối mọi hỗ trợ'], 'B', 'Tìm hỗ trợ chuyên môn là trách nhiệm.']
    ], 6)
];
