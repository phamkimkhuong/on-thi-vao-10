import type { CourseQuestion } from '@/data/schema';
import type { PracticeRole, QuestionRepresentationType, QuestionStimulus } from '@/types';
type Choice = 'A' | 'B' | 'C' | 'D';
type Raw = {
  p: string;
  c: string;
  w: [string, string, string];
  stimulus?: QuestionStimulus;
  representation?: QuestionRepresentationType;
  translation?: {
    content: string;
    options?: string[];
  };
};
const letters: Choice[] = ['A', 'B', 'C', 'D'];
const roles: PracticeRole[] = ['guided', 'near_transfer', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'];
const difficulties: CourseQuestion['difficulty'][] = ['easy', 'easy', 'easy', 'easy', 'medium', 'medium', 'medium', 'medium', 'medium', 'hard', 'hard', 'hard'];
const build = (key: string, lesson: string, rows: Raw[], subTypes: [string, string]): CourseQuestion[] =>
  rows.map((row, index) => {
    const position = index % 4, choices = [...row.w]; choices.splice(position, 0, row.c);
    return {
      id: `eng11-q-u8-${key}-${String(index + 1).padStart(2, '0')}`,
      courseId: 'grade11:english', moduleId: 'eng11-m8', lessonId: `eng11-u8-${lesson}`,
      subjectId: 'english', topicId: 'eng11-topic-u8', questionTypeId: `eng11-qt-u8-${key}`,
      content: row.p, options: choices.map((v, i) => `${letters[i]}. ${v}`) as [string, string, string, string],
      correctAnswer: letters[position], responseType: 'single_choice', validatorType: 'choice',
      translation: row.translation,
      difficulty: difficulties[index], points: 0.25, sourceType: 'manual', outcomeIds: [`eng11-out-u8-${key}`],
      subTypeId: `eng11-u8-${key}-${index < 6 ? subTypes[0] : subTypes[1]}`,
      practiceRole: roles[index % 6], representationType: row.representation ?? (index % 4 === 3 ? 'dialogue' : 'text'),
      isMasteryHoldout: index % 6 === 5, stimulus: row.stimulus
    };
  });
const pronunciation: Raw[] = [
  {
    p: 'Which sentence is an invitation that commonly uses an open rising tone?',
    c: 'Would you like to cook with us?',
    w: ['You cooked yesterday.', 'Close the door now.', 'Why did you cook?'],
    translation: {
      content: 'Câu nào là một lời mời thường sử dụng tông giọng lên mở?',
      options: ['A. Would you like to cook with us? (Lời mời thường lên giọng cuối)', 'B. You cooked yesterday.', 'C. Close the door now.', 'D. Why did you cook?']
    }
  },
  {
    p: 'A friendly rising or fall-rise tone in an invitation helps:',
    c: 'leave space for the listener’s response',
    w: ['turn it into a command', 'remove politeness', 'guarantee acceptance'],
    translation: {
      content: 'Một tông giọng lên hoặc xuống-lên thân thiện trong lời mời giúp:',
      options: ['A. chuyển nó thành một mệnh lệnh', 'B. leave space for the listener’s response (tạo không gian cho sự phản hồi của người nghe)', 'C. gỡ bỏ sự lịch sự', 'D. đảm bảo sự chấp nhận']
    }
  },
  {
    p: 'Which sentence is a suggestion?',
    c: 'Why don’t we make a weekly plan?',
    w: ['You made the plan.', 'The plan is weekly.', 'Where is the plan?'],
    translation: {
      content: 'Câu nào là một lời gợi ý?',
      options: ['A. You made the plan.', 'B. The plan is weekly.', 'C. Why don’t we make a weekly plan? (Lời gợi ý: Why don’t we...?)', 'D. Where is the plan?']
    }
  },
  {
    p: 'A: “How can ‘We could review it together’ sound collaborative?” B: “Use an ______ tone.”',
    c: 'open, non-final',
    w: ['abrupt command-only', 'unrelated flat written', 'angry final'],
    representation: 'dialogue',
    translation: {
      content: 'A: “Làm thế nào để câu ‘We could review it together’ nghe có tính hợp tác?” B: “Hãy dùng tông giọng ______.”',
      options: ['A. mệnh lệnh đột ngột', 'B. bằng phẳng không liên quan', 'C. tức giận dứt khoát', 'D. open, non-final (mở, không dứt khoát / tạo không gian thảo luận)']
    }
  },
  {
    p: 'Which conclusion about invitation intonation is safest?',
    c: 'Tone, wording and relationship work together.',
    w: ['Rising tone guarantees politeness.', 'Please fixes every rude request.', 'Context never matters.'],
    translation: {
      content: 'Kết luận nào về ngữ điệu lời mời là an toàn nhất?',
      options: ['A. Tone, wording and relationship work together. (Tông giọng, cách dùng từ và mối quan hệ hoạt động cùng nhau.)', 'B. Tông giọng lên đảm bảo sự lịch sự', 'C. Từ Please giải quyết mọi yêu cầu thô lỗ', 'D. Bối cảnh không bao giờ quan trọng']
    }
  },
  {
    p: 'A strong fall on a suggestion can make it sound more:',
    c: 'firm or directive',
    w: ['like an unfinished list only', 'like no message exists', 'grammatically past'],
    translation: {
      content: 'Một sự xuống giọng mạnh ở lời gợi ý có thể làm cho nó nghe có vẻ:',
      options: ['A. chỉ như một danh sách chưa xong', 'B. firm or directive (kiên quyết hoặc mang tính chỉ thị/mệnh lệnh)', 'C. như không có thông điệp nào tồn tại', 'D. mang ngữ pháp quá khứ']
    }
  },
  {
    p: 'Which request is worded most politely?',
    c: 'Could you show me how to check this bill?',
    w: ['Check it.', 'You do this now.', 'Why have a bill?'],
    translation: {
      content: 'Yêu cầu nào được diễn đạt lịch sự nhất?',
      options: ['A. Check it.', 'B. You do this now.', 'C. Could you show me how to check this bill? (Dùng Could you... lịch sự)', 'D. Why have a bill?']
    }
  },
  {
    p: 'A: “May I borrow the guide?” B: “A gentle rise can signal ______.”',
    c: 'a genuine request for permission',
    w: ['a completed command', 'certain refusal', 'a past event'],
    representation: 'dialogue',
    translation: {
      content: 'A: “Tớ có thể mượn cuốn sách hướng dẫn không?” B: “Sự lên giọng nhẹ nhàng có thể ra hiệu ______.”',
      options: ['A. một mệnh lệnh hoàn thành', 'B. một sự từ chối chắc chắn', 'C. một sự kiện quá khứ', 'D. a genuine request for permission (một lời xin phép chân thành)']
    }
  },
  {
    p: 'Why may an urgent safety request use a strong falling tone?',
    c: 'Urgency can require a clear, firm instruction.',
    w: ['All requests are commands.', 'Politeness is forbidden.', 'Falling tone changes the verb tense.'],
    translation: {
      content: 'Tại sao một yêu cầu an toàn khẩn cấp lại có thể sử dụng tông giọng xuống mạnh?',
      options: ['A. Urgency can require a clear, firm instruction. (Sự khẩn cấp có thể đòi hỏi một hướng dẫn rõ ràng, kiên quyết.)', 'B. Tất cả yêu cầu đều là mệnh lệnh', 'C. Sự lịch sự bị cấm', 'D. Tông giọng xuống làm thay đổi thì của động từ']
    }
  },
  {
    p: 'Which factor is least useful when judging request tone?',
    c: 'The colour of the written text',
    w: ['Urgency', 'Relationship', 'Modal wording'],
    translation: {
      content: 'Yếu tố nào ít hữu ích nhất khi đánh giá tông giọng yêu cầu?',
      options: ['A. Mức độ khẩn cấp', 'B. The colour of the written text (Màu sắc của văn bản - Không liên quan)', 'C. Mối quan hệ', 'D. Cách dùng động từ khuyết thiếu']
    }
  },
  {
    p: 'What can make “Can you help?” less imposing?',
    c: 'An open tone and room to decline',
    w: ['A louder final fall always', 'Removing the question form', 'Assuming agreement'],
    translation: {
      content: 'Điều gì có thể làm cho câu “Can you help?” bớt áp đặt/gượng ép hơn?',
      options: ['A. Tông giọng xuống dứt khoát to hơn', 'B. Gỡ bỏ dạng câu hỏi', 'C. An open tone and room to decline (Một tông giọng mở và tạo không gian cho người nghe từ chối)', 'D. Giả định sự đồng ý']
    }
  },
  {
    p: 'How should learners interpret functional intonation?',
    c: 'Combine pitch, wording, purpose and context.',
    w: ['Use one fixed tone rule.', 'Count letters only.', 'Ignore speaker relationships.'],
    translation: {
      content: 'Người học nên diễn giải ngữ điệu chức năng như thế nào?',
      options: ['A. Sử dụng một quy tắc tông giọng cố định', 'B. Chỉ đếm số chữ cái', 'C. Bỏ qua mối quan hệ của người nói', 'D. Combine pitch, wording, purpose and context. (Kết hợp cao độ, cách dùng từ, mục đích và bối cảnh)']
    }
  }
];
const vocabulary: Raw[] = [
  {
    p: 'The ability to rely on your own skills and judgement is:',
    c: 'self-reliance',
    w: ['procrastination', 'allowance', 'deadline'],
    translation: {
      content: 'Khả năng dựa vào kỹ năng và sự phán đoán của chính mình là:',
      options: ['A. self-reliance (sự tự lực / tự lập)', 'B. procrastination', 'C. allowance', 'D. deadline']
    }
  },
  {
    p: 'Choosing which tasks matter most means setting:',
    c: 'priorities',
    w: ['expenses', 'consequences', 'instructions only'],
    translation: {
      content: 'Việc lựa chọn công việc nào quan trọng nhất nghĩa là thiết lập:',
      options: ['A. expenses', 'B. priorities (các thứ tự ưu tiên / setting priorities)', 'C. consequences', 'D. instructions only']
    }
  },
  {
    p: 'A plan for income and spending is a:',
    c: 'budget',
    w: ['deadline', 'decision consequence', 'self-discipline'],
    translation: {
      content: 'Kế hoạch thu nhập và chi tiêu là một:',
      options: ['A. deadline', 'B. decision consequence', 'C. budget (ngân sách / kế hoạch thu chi)', 'D. self-discipline']
    }
  },
  {
    p: 'A: “What is procrastination?” B: “It is ______.”',
    c: 'delaying tasks that should be done',
    w: ['asking for qualified help', 'tracking expenses', 'meeting deadlines'],
    representation: 'dialogue',
    translation: {
      content: 'A: “Procrastination (sự trì hoãn) là gì?” B: “Nó là ______.”',
      options: ['A. hỏi xin sự giúp đỡ', 'B. theo dõi chi tiêu', 'C. đáp ứng các hạn chót', 'D. delaying tasks that should be done (trì hoãn các công việc đáng lẽ phải làm)']
    }
  },
  {
    p: 'Money spent on goods or services is called:',
    c: 'expenses',
    w: ['priorities', 'self-reliance', 'guidance'],
    translation: {
      content: 'Số tiền chi cho hàng hóa hoặc dịch vụ được gọi là:',
      options: ['A. expenses (các chi phí)', 'B. priorities', 'C. self-reliance', 'D. guidance']
    }
  },
  {
    p: 'Control over habits and actions is:',
    c: 'self-discipline',
    w: ['dependence fee', 'deadline budget', 'consequence plan'],
    translation: {
      content: 'Sự kiểm soát đối với các thói quen và hành động là:',
      options: ['A. dependence fee', 'B. self-discipline (tính kỷ luật bản thân)', 'C. deadline budget', 'D. consequence plan']
    }
  },
  {
    p: 'Choose the correct collocation.',
    c: 'take responsibility for a decision',
    w: ['do responsibility at', 'make responsibility into', 'take decision for responsibility'],
    translation: {
      content: 'Chọn kết hợp từ (collocation) đúng:',
      options: ['A. do responsibility at', 'B. make responsibility into', 'C. take responsibility for a decision (chịu trách nhiệm cho một quyết định)', 'D. take decision for responsibility']
    }
  },
  {
    p: 'Students should ______ a realistic deadline for each step.',
    c: 'set',
    w: ['take into', 'meet on before setting', 'do'],
    translation: {
      content: 'Học sinh phải ______ một hạn chót thực tế cho mỗi bước:',
      options: ['A. take into', 'B. meet on', 'C. do', 'D. set (đặt / set a deadline)']
    }
  },
  {
    p: 'Tracking every purchase helps you ______ a budget.',
    c: 'manage',
    w: ['procrastinate', 'deadline', 'priority from'],
    translation: {
      content: 'Theo dõi từng khoản mua sắm giúp bạn ______ một ngân sách:',
      options: ['A. manage (quản lý / manage a budget)', 'B. procrastinate', 'C. deadline', 'D. priority from']
    }
  },
  {
    p: 'A: “I do not understand the contract.” B: “You should ______.”',
    c: 'ask for guidance',
    w: ['hide the problem', 'sign without reading', 'avoid qualified adults'],
    representation: 'dialogue',
    translation: {
      content: 'A: “Tớ không hiểu hợp đồng này.” B: “Cậu nên ______.”',
      options: ['A. giấu vấn đề đi', 'B. ask for guidance (xin sự hướng dẫn / tư vấn)', 'C. ký mà không đọc', 'D. tránh những người lớn có chuyên môn']
    }
  },
  {
    p: 'Which phrase means choosing on the basis of reliable information?',
    c: 'make an informed decision',
    w: ['take a random deadline', 'do a consequence', 'set an expense'],
    translation: {
      content: 'Cụm từ nào có nghĩa là lựa chọn dựa trên thông tin đáng tin cậy?',
      options: ['A. take a random deadline', 'B. do a consequence', 'C. make an informed decision (đưa ra quyết định sáng suốt / dựa trên đủ thông tin)', 'D. set an expense']
    }
  },
  {
    p: 'A responsible learner should ______ the consequences of a choice.',
    c: 'learn from',
    w: ['procrastinate at', 'budget into', 'prioritise away'],
    translation: {
      content: 'Một người học có trách nhiệm nên ______ những hậu quả của một lựa chọn:',
      options: ['A. procrastinate at', 'B. budget into', 'C. prioritise away', 'D. learn from (học hỏi từ / learn from the consequences)']
    }
  }
];
const grammar: Raw[] = [
  {
    p: 'Emphasise Lan: “Lan created the budget.”',
    c: 'It was Lan who created the budget.',
    w: ['It Lan was the budget.', 'Lan that created it was.', 'It created Lan who budget.'],
    translation: {
      content: 'Nhấn mạnh Lan: “Lan đã tạo ra ngân sách.”',
      options: ['A. It was Lan who created the budget. (Câu chẻ nhấn mạnh chủ ngữ chỉ người: It was + Person + who + V)', 'B. Sai cấu trúc', 'C. Sai cấu trúc', 'D. Sai cấu trúc']
    }
  },
  {
    p: 'Emphasise the object: “Minh forgot the deadline.”',
    c: 'It was the deadline that Minh forgot.',
    w: ['It the deadline forgot Minh.', 'The deadline who it forgot.', 'It was Minh that the deadline forgot.'],
    translation: {
      content: 'Nhấn mạnh tân ngữ: “Minh đã quên hạn chót.”',
      options: ['A. Sai cấu trúc', 'B. It was the deadline that Minh forgot. (Câu chẻ nhấn mạnh tân ngữ: It was + Object + that...)', 'C. Sai cấu trúc', 'D. Sai cấu trúc']
    }
  },
  {
    p: 'Which sentence correctly focuses on “my sister”?',
    c: 'It was my sister who taught me to cook.',
    w: ['It my sister was taught cook.', 'My sister that it taught.', 'It was taught who my sister.'],
    translation: {
      content: 'Câu nào nhấn mạnh đúng vào “my sister”?',
      options: ['A. Sai cấu trúc', 'B. Sai cấu trúc', 'C. It was my sister who taught me to cook. (Câu chẻ nhấn mạnh chủ ngữ chỉ người: It was + my sister + who...)', 'D. Sai cấu trúc']
    }
  },
  {
    p: 'A: “Who prepared the documents?” B: “It was Nam ______ prepared them.”',
    c: 'who',
    w: ['where', 'when', 'what'],
    representation: 'dialogue',
    translation: {
      content: 'A: “Ai đã chuẩn bị các tài liệu?” B: “Chính là Nam ______ đã chuẩn bị chúng.”',
      options: ['A. where', 'B. when', 'C. what', 'D. who (dùng who/that cho chủ ngữ chỉ người Nam trong câu chẻ)']
    }
  },
  {
    p: 'Which cleft keeps the past tense of the original?',
    c: 'It was Hoa who paid the bill.',
    w: ['It is Hoa who paid yesterday originally.', 'It be Hoa paid.', 'It were pay Hoa.'],
    translation: {
      content: 'Câu chẻ nào giữ đúng thì quá khứ của câu gốc?',
      options: ['A. It was Hoa who paid the bill. (Giữ đúng thì quá khứ đơn: It was...)', 'B. Sai thì (It is)', 'C. Sai cấu trúc', 'D. Sai cấu trúc']
    }
  },
  {
    p: 'Emphasise “this checklist” in “I use this checklist every week.”',
    c: 'It is this checklist that I use every week.',
    w: ['It this checklist is use.', 'This checklist who uses me.', 'It is I that this checklist uses.'],
    translation: {
      content: 'Nhấn mạnh “this checklist” trong câu “Tớ dùng danh sách kiểm tra này mỗi tuần.”',
      options: ['A. Sai cấu trúc', 'B. It is this checklist that I use every week. (Câu chẻ nhấn mạnh tân ngữ: It is + Object + that...)', 'C. Sai cấu trúc', 'D. Sai cấu trúc']
    }
  },
  {
    p: 'Emphasise time: “We reviewed the plan on Sunday.”',
    c: 'It was on Sunday that we reviewed the plan.',
    w: ['It Sunday who reviewed.', 'On Sunday it was plan.', 'It reviewed that Sunday.'],
    translation: {
      content: 'Nhấn mạnh thời gian: “Chúng tớ đã xem xét kế hoạch vào Chủ Nhật.”',
      options: ['A. Sai cấu trúc', 'B. Sai cấu trúc', 'C. It was on Sunday that we reviewed the plan. (Câu chẻ nhấn mạnh trạng ngữ thời gian: It was + Prepositional phrase + that...)', 'D. Sai cấu trúc']
    }
  },
  {
    p: 'A: “Where did you learn budgeting?” B: “It was at school ______ I learnt it.”',
    c: 'that',
    w: ['who', 'what', 'whose'],
    representation: 'dialogue',
    translation: {
      content: 'A: “Cậu đã học quản lý ngân sách ở đâu?” B: “Chính tại trường học ______ tớ đã học nó.”',
      options: ['A. who', 'B. what', 'C. whose', 'D. that (dùng that nối mệnh đề sau cụm trạng ngữ chỉ nơi chốn trong câu chẻ)']
    }
  },
  {
    p: 'Which sentence correctly focuses on “after dinner”?',
    c: 'It is after dinner that I plan the next day.',
    w: ['It after dinner who plan.', 'After dinner it plans me.', 'It is I after dinner that.'],
    translation: {
      content: 'Câu nào nhấn mạnh đúng vào cụm “after dinner”?',
      options: ['A. It is after dinner that I plan the next day. (Câu chẻ nhấn mạnh trạng ngữ thời gian: It is + after dinner + that...)', 'B. Sai cấu trúc', 'C. Sai cấu trúc', 'D. Sai cấu trúc']
    }
  },
  {
    p: 'Emphasise the reason phrase: “I called because I needed advice.”',
    c: 'It was because I needed advice that I called.',
    w: ['It called because advice who.', 'Because it was I needed called.', 'It was advice who because called.'],
    translation: {
      content: 'Nhấn mạnh cụm lý do: “Tớ gọi điện vì tớ cần lời khuyên.”',
      options: ['A. Sai cấu trúc', 'B. It was because I needed advice that I called. (Câu chẻ nhấn mạnh mệnh đề lý do: It was + Clause + that...)', 'C. Sai cấu trúc', 'D. Sai cấu trúc']
    }
  },
  {
    p: 'Which cleft preserves the meaning “Mai bought the laptop at the local shop”?',
    c: 'It was at the local shop that Mai bought the laptop.',
    w: ['It was the shop that bought Mai.', 'It is Mai where the laptop bought.', 'The laptop was Mai who shop.'],
    translation: {
      content: 'Câu chẻ nào bảo toàn ý nghĩa của câu “Mai đã mua máy tính xách tay tại cửa hàng địa phương”?',
      options: ['A. Sai cấu trúc (vô nghĩa)', 'B. Sai cấu trúc', 'C. It was at the local shop that Mai bought the laptop. (Nhấn mạnh trạng ngữ nơi chốn: It was at the local shop that...)', 'D. Sai cấu trúc']
    }
  },
  {
    p: 'Which statement about It-clefts is correct?',
    c: 'The focus changes prominence, while the core event meaning is retained.',
    w: ['Clefting always changes tense.', 'Who must follow every object.', 'Any words can be moved without structure.'],
    translation: {
      content: 'Phát biểu nào về câu chẻ (It-clefts) là đúng?',
      options: ['A. Câu chẻ luôn thay đổi thì', 'B. Who phải theo sau mọi tân ngữ', 'C. Bất kỳ từ nào cũng có thể di chuyển mà không cần cấu trúc', 'D. The focus changes prominence, while the core event meaning is retained. (Sự nhấn mạnh làm thay đổi độ nổi bật của thông tin, trong khi ý nghĩa sự kiện cốt lõi được giữ nguyên.)']
    }
  }
];
const passage1: QuestionStimulus = {
  id: 'eng11-stim-u8-reading-1', title: 'A budgeting trial with fading support',
  content: `Mai received a monthly allowance for transport, lunches and personal expenses. During the first month, she spent most of it in two weeks and then borrowed money. Her parents considered taking control of every purchase, but they wanted her to develop budgeting skills rather than simply follow orders.

Together they listed fixed costs and estimated flexible spending. Mai chose weekly limits and recorded purchases in a simple app. At first, her father reminded her every evening. After two weeks, reminders moved to twice a week, then stopped. They reviewed the totals on Sundays, but Mai entered and classified the expenses herself.

The second month did not go perfectly. An unexpected school activity increased transport costs, and Mai exceeded one weekly limit. Instead of hiding the difference, she moved money from entertainment and updated the remaining weeks. She also created a small emergency category for future surprises.

By the third month, Mai no longer needed reminders and could explain why actual spending differed from her plan. Her parents still offered help with unfamiliar banking terms and potential scams. The family judged progress through accurate records, timely adjustments and safer decisions—not through never making a mistake. Their approach illustrates fading support: guidance is stronger while a skill is new and decreases as the learner demonstrates control. Independence grows when responsibility and suitable support change together, rather than when help disappears without regard to risk. Mai will repeat the review after any major change in allowance or travel needs, rather than assuming the system will remain suitable.`
};
const passage2: QuestionStimulus = {
  id: 'eng11-stim-u8-reading-2', title: 'Learning to manage a shared project',
  content: `Four students planned a school repair café where volunteers would help fix small household items. Their teacher offered a detailed checklist, but the group had to assign roles, contact volunteers, manage a small budget and report safety concerns.

At first, Long volunteered for every task because he believed independence meant doing the most work himself. Messages were delayed, receipts were lost and two volunteers received different arrival times. The group stopped and created a shared board showing each task, owner, deadline and status. Members agreed that asking for an update was not the same as taking over.

The teacher modelled how to make one safety checklist, then asked the students to adapt it. When they were uncertain about electrical repairs, they contacted a qualified technician rather than guessing. Students handled registration and publicity independently, while the technician approved equipment and supervised high-risk work.

After the event, the group reviewed more than attendance. They examined spending records, response times, repaired items, safety reports and volunteer feedback. Long had completed fewer individual tasks than in his original plan, yet the project was better coordinated. He concluded that responsibility includes delegation, communication and knowing when specialist help is necessary. The teacher retained the final safety authority but removed several planning prompts for the next event. The experience showed that independence in teamwork is not individual control over everything; it is reliable contribution within clear roles and boundaries. For the next event, students will rotate coordination roles and compare whether the revised board prevents earlier communication problems.`
};
const passage3: QuestionStimulus = {
  id: 'eng11-stim-u8-reading-3', title: 'A travel plan that included safety boundaries',
  content: `For a regional youth workshop, sixteen-year-old Huy wanted to organise his journey without his older brother. He compared train and bus times, calculated costs, checked the venue route and drafted a packing list. His family agreed that he would lead the planning but identified decisions requiring adult involvement.

Huy booked the approved ticket with a parent because the payment platform had age conditions. He saved emergency contacts offline, shared his itinerary and planned a check-in after arrival. Rather than choosing the cheapest connection, he rejected one that arrived after local transport stopped. He also confirmed the organiser’s safeguarding arrangements.

On travel day, a delayed train meant he would miss the final connection. Huy checked official updates, identified an earlier transfer and contacted both the organiser and his family before changing the route. He did not accept transport from an unknown person who approached passengers at the station.

After returning, Huy reviewed the difference between his estimated and actual costs and noted which information had been most useful. His brother had not managed the trip, but remained available for a high-risk problem. The family viewed this as supported independence, not failure. Huy had made ordinary decisions, communicated changes and followed agreed safety limits. The case suggests that becoming independent does not require removing every boundary. Clear escalation rules can allow young people to practise judgement while ensuring that unusual financial, legal or safety risks receive appropriate adult support. Huy also plans to teach the route-checking process to younger students under adult supervision.`
};
const reading: Raw[] = [
  {
    p: 'Why did Mai’s parents avoid controlling every purchase?',
    c: 'They wanted her to develop budgeting skill and responsibility.',
    w: ['They did not care about spending.', 'The app controlled all money.', 'Borrowing had no consequences.'],
    stimulus: passage1,
    translation: {
      content: 'Tại sao bố mẹ Mai tránh kiểm soát từng khoản mua sắm?',
      options: ['A. They wanted her to develop budgeting skill and responsibility. (Họ muốn bạn ấy phát triển kỹ năng lập ngân sách và tinh thần trách nhiệm.)', 'B. Họ không quan tâm đến việc chi tiêu', 'C. Ứng dụng kiểm soát toàn bộ tiền', 'D. Việc vay tiền không có hậu quả gì']
    }
  },
  {
    p: 'How was support reduced?',
    c: 'Reminders became less frequent and then stopped.',
    w: ['Records were removed.', 'Her father classified every expense forever.', 'Reviews increased to every hour.'],
    stimulus: passage1,
    translation: {
      content: 'Sự hỗ trợ đã được giảm dần như thế nào?',
      options: ['A. Các hồ sơ bị gỡ bỏ', 'B. Reminders became less frequent and then stopped. (Các lời nhắc nhở trở nên ít thường xuyên hơn và sau đó dừng lại.)', 'C. Bố bạn ấy phân loại mọi chi phí mãi mãi', 'D. Các đợt xem xét tăng lên mỗi giờ']
    }
  },
  {
    p: 'What did Mai do after an unexpected cost?',
    c: 'She reallocated money and revised later weeks.',
    w: ['She hid the expense.', 'She abandoned the budget.', 'She borrowed without recording it.'],
    stimulus: passage1,
    translation: {
      content: 'Mai đã làm gì sau khi có một khoản chi phí ngoài dự kiến?',
      options: ['A. Bạn ấy giấu chi phí đi', 'B. Bạn ấy bỏ kế hoạch ngân sách', 'C. She reallocated money and revised later weeks. (Bạn ấy phân bổ lại tiền và điều chỉnh các tuần sau.)', 'D. Bạn ấy vay tiền mà không ghi lại']
    }
  },
  {
    p: 'Which evidence best showed progress?',
    c: 'Accurate records, explanations and timely adjustments',
    w: ['Never facing surprises', 'Receiving no support at any risk level', 'Spending every category exactly'],
    stimulus: passage1,
    translation: {
      content: 'Bằng chứng nào thể hiện sự tiến bộ rõ nhất?',
      options: ['A. Không bao giờ gặp phải bất ngờ', 'B. Không nhận sự hỗ trợ ở bất kỳ mức rủi ro nào', 'C. Chi tiêu chính xác từng danh mục', 'D. Accurate records, explanations and timely adjustments (Các hồ sơ chính xác, các lời giải thích và sự điều chỉnh kịp thời)']
    }
  },
  {
    p: 'Why did Long’s first approach fail?',
    c: 'Taking every task caused poor coordination and lost information.',
    w: ['The group had too few tasks.', 'Volunteers refused all roles.', 'The teacher banned communication.'],
    stimulus: passage2,
    translation: {
      content: 'Tại sao cách tiếp cận đầu tiên của Long lại thất bại?',
      options: ['A. Taking every task caused poor coordination and lost information. (Gánh vác mọi nhiệm vụ dẫn đến sự phối hợp kém và thất lạc thông tin.)', 'B. Nhóm có quá ít nhiệm vụ', 'C. Tình nguyện viên từ chối mọi vai trò', 'D. Giáo viên cấm giao tiếp']
    }
  },
  {
    p: 'What did the shared board record?',
    c: 'Task, owner, deadline and status',
    w: ['Only attendance', 'Private opinions', 'The teacher’s favourite repairs'],
    stimulus: passage2,
    translation: {
      content: 'Bảng làm việc chung ghi lại điều gì?',
      options: ['A. Chỉ điểm danh', 'B. Task, owner, deadline and status (Nhiệm vụ, người phụ trách, hạn chót và trạng thái)', 'C. Các ý kiến cá nhân', 'D. Việc sửa chữa yêu thích của giáo viên']
    }
  },
  {
    p: 'Why did students contact a technician?',
    c: 'Electrical work involved risks beyond their competence.',
    w: ['They wanted the technician to run publicity.', 'Students avoided every responsibility.', 'The repair café had no tools.'],
    stimulus: passage2,
    translation: {
      content: 'Tại sao học sinh lại liên hệ với một kỹ thuật viên?',
      options: ['A. Họ muốn kỹ thuật viên làm truyền thông', 'B. Học sinh né tránh mọi trách nhiệm', 'C. Electrical work involved risks beyond their competence. (Công việc về điện liên quan đến các rủi ro vượt quá năng lực của họ.)', 'D. Quán cà phê sửa chữa không có công cụ']
    }
  },
  {
    p: 'What did Long learn about responsibility?',
    c: 'It includes delegation, communication and seeking specialist help.',
    w: ['It means doing everything alone.', 'It is measured by task count only.', 'Clear roles reduce independence.'],
    stimulus: passage2,
    translation: {
      content: 'Long đã học được điều gì về trách nhiệm?',
      options: ['A. Nó nghĩa là tự làm mọi thứ một mình', 'B. Nó chỉ được đo lường bằng số lượng nhiệm vụ', 'C. Các vai trò rõ ràng làm giảm sự tự lập', 'D. It includes delegation, communication and seeking specialist help. (Nó bao gồm sự giao việc, giao tiếp và tìm kiếm sự trợ giúp chuyên gia.)']
    }
  },
  {
    p: 'Which planning choice shows Huy considered safety, not just price?',
    c: 'He rejected a route arriving after local transport ended.',
    w: ['He chose the cheapest connection.', 'He removed emergency contacts.', 'He kept the itinerary secret.'],
    stimulus: passage3,
    translation: {
      content: 'Lựa chọn lập kế hoạch nào cho thấy Huy cân nhắc sự an toàn chứ không chỉ riêng giá cả?',
      options: ['A. He rejected a route arriving after local transport ended. (Bạn ấy từ chối tuyến đường đến nơi sau khi giao thông địa phương đã dừng hoạt động.)', 'B. Bạn ấy chọn chuyến kết nối rẻ nhất', 'C. Bạn ấy xóa các liên hệ khẩn cấp', 'D. Bạn ấy giữ kín lịch trình']
    }
  },
  {
    p: 'What did Huy do when the train was delayed?',
    c: 'He checked official information and communicated before rerouting.',
    w: ['He accepted an unknown driver.', 'He stopped informing anyone.', 'He guessed without checking.'],
    stimulus: passage3,
    translation: {
      content: 'Huy đã làm gì khi tàu bị trễ?',
      options: ['A. Bạn ấy chấp nhận một tài xế không quen biết', 'B. He checked official information and communicated before rerouting. (Bạn ấy kiểm tra thông tin chính thức và liên lạc trước khi đổi tuyến.)', 'C. Bạn ấy ngừng thông báo cho mọi người', 'D. Bạn ấy đoán mà không kiểm tra']
    }
  },
  {
    p: 'Why did the family call this supported independence?',
    c: 'Huy led normal decisions while adults remained available for high-risk issues.',
    w: ['His brother planned the entire trip.', 'No boundaries existed.', 'Huy made no decisions.'],
    stimulus: passage3,
    translation: {
      content: 'Tại sao gia đình lại gọi đây là sự tự lập được hỗ trợ (supported independence)?',
      options: ['A. Anh trai bạn ấy đã lập toàn bộ chuyến đi', 'B. Không có ranh giới nào tồn tại', 'C. Huy led normal decisions while adults remained available for high-risk issues. (Huy chủ trì các quyết định thông thường trong khi người lớn vẫn sẵn sàng hỗ trợ cho các vấn đề rủi ro cao.)', 'D. Huy không đưa ra quyết định nào']
    }
  },
  {
    p: 'What broader lesson does Huy’s travel experience support?',
    c: 'Clear escalation rules can support autonomy and safety together.',
    w: ['Independence requires removing every boundary.', 'Asking for help always shows failure.', 'Lowest cost is the only criterion.'],
    stimulus: passage3,
    translation: {
      content: 'Bài học rộng hơn nào mà trải nghiệm đi lại của Huy hỗ trợ?',
      options: ['A. Sự tự lập đòi hỏi gỡ bỏ mọi ranh giới', 'B. Hỏi xin sự giúp đỡ luôn thể hiện sự thất bại', 'C. Chi phí thấp nhất là tiêu chí duy nhất', 'D. Clear escalation rules can support autonomy and safety together. (Các quy tắc báo cáo/xin hỗ trợ rõ ràng có thể hỗ trợ cả sự tự chủ và an toàn cùng nhau.)']
    }
  }
];
const writing: Raw[] = [
  {
    p: 'Choose the best order: (a) Review actual spending each Sunday. (b) My goal is to control monthly expenses. (c) Record every purchase in the app.',
    c: 'b-c-a',
    w: ['a-b-c', 'c-a-b', 'b-a-c'],
    translation: {
      content: 'Chọn thứ tự tốt nhất: (a) Xem xét chi tiêu thực tế vào mỗi Chủ Nhật. (b) Mục tiêu của tớ là kiểm soát các chi phí hằng tháng. (c) Ghi lại mọi khoản mua sắm trong ứng dụng.',
      options: ['A. b-c-a', 'B. a-b-c', 'C. c-a-b', 'D. b-a-c']
    }
  },
  {
    p: 'Which goal is specific and measurable?',
    c: 'I will prepare two safe meals each week for one month.',
    w: ['I will be independent.', 'I will improve somehow.', 'I will never need help.'],
    translation: {
      content: 'Mục tiêu nào cụ thể và có thể đo lường được?',
      options: ['A. Tớ sẽ tự lập.', 'B. I will prepare two safe meals each week for one month. (Tớ sẽ chuẩn bị 2 bữa ăn an toàn mỗi tuần trong 1 tháng.)', 'C. Tớ sẽ cải thiện bằng cách nào đó.', 'D. Tớ sẽ không bao giờ cần trợ giúp.']
    }
  },
  {
    p: 'Choose the connector: “I missed two deadlines. ______, I divided later assignments into smaller steps.”',
    c: 'As a result',
    w: ['Although without contrast', 'For example of a definition', 'Before purpose'],
    translation: {
      content: 'Chọn từ nối: “Tớ đã trễ 2 hạn chót. ______, tớ đã chia các bài tập sau thành các bước nhỏ hơn.”',
      options: ['A. Mặc dù', 'B. Ví dụ', 'C. As a result (Kết quả là)', 'D. Trước khi']
    }
  },
  {
    p: 'A: “What follows a progress review?” B: “______”',
    c: 'A specific adjustment for the next cycle',
    w: ['A judgement about personality', 'An unrelated target', 'A claim that evidence is useless'],
    representation: 'dialogue',
    translation: {
      content: 'A: “Điều gì nên đi sau một buổi xem xét tiến độ?” B: “______”',
      options: ['A. Sự đánh giá về tính cách', 'B. Một mục tiêu không liên quan', 'C. Tuyên bố rằng bằng chứng là vô dụng', 'D. A specific adjustment for the next cycle (Một sự điều chỉnh cụ thể cho chu kỳ tiếp theo)']
    }
  },
  {
    p: 'Which evidence best supports improved time management?',
    c: 'All assignments were submitted by the recorded deadlines for four weeks.',
    w: ['I feel perfect.', 'One task was easy.', 'A friend likes schedules.'],
    translation: {
      content: 'Bằng chứng nào hỗ trợ tốt nhất cho việc quản lý thời gian được cải thiện?',
      options: ['A. All assignments were submitted by the recorded deadlines for four weeks. (Tất cả bài tập đều được nộp đúng các hạn chót đã ghi lại trong 4 tuần.)', 'B. Tớ cảm thấy hoàn hảo', 'C. Một nhiệm vụ thì dễ', 'D. Một người bạn thích lịch trình']
    }
  },
  {
    p: 'Which detail is least useful in a budgeting plan?',
    c: 'The app icon’s favourite colour',
    w: ['Income', 'Fixed costs', 'Review date'],
    translation: {
      content: 'Chi tiết nào ít hữu ích nhất trong một kế hoạch ngân sách?',
      options: ['A. Thu nhập', 'B. The app icon’s favourite colour (Màu sắc yêu thích của biểu tượng ứng dụng - Không liên quan)', 'C. Chi phí cố định', 'D. Ngày xem xét']
    }
  },
  {
    p: 'Emphasise Sunday in a reflective sentence.',
    c: 'It was on Sunday that I noticed the spending error.',
    w: ['It Sunday who noticed.', 'Sunday was it spending.', 'It noticed Sunday that error.'],
    translation: {
      content: 'Nhấn mạnh Chủ Nhật trong một câu suy ngẫm:',
      options: ['A. Sai cấu trúc', 'B. Sai cấu trúc', 'C. It was on Sunday that I noticed the spending error. (Chính vào Chủ Nhật tớ mới nhận ra lỗi chi tiêu.)', 'D. Sai cấu trúc']
    }
  },
  {
    p: 'A: “How can I avoid blaming myself in reflection?” B: “______”',
    c: 'Describe the evidence, cause and changeable process.',
    w: ['Use a negative label.', 'Ignore what happened.', 'Claim one mistake defines you.'],
    representation: 'dialogue',
    translation: {
      content: 'A: “Làm thế nào tớ có thể tránh tự trách bản thân khi suy ngẫm?” B: “______”',
      options: ['A. Sử dụng nhãn dán tiêu cực', 'B. Lờ đi điều đã xảy ra', 'C. Cho rằng một sai lầm định nghĩa bản thân cậu', 'D. Describe the evidence, cause and changeable process. (Mô tả bằng chứng, nguyên nhân và quy trình có thể thay đổi.)']
    }
  },
  {
    p: 'Which topic sentence fits details about lists, deadlines and weekly reviews?',
    c: 'A simple monitoring system can improve task management.',
    w: ['Lists use paper.', 'Weeks have days.', 'Deadlines are dates.'],
    translation: {
      content: 'Câu chủ đề nào phù hợp với các chi tiết về danh sách, hạn chót và đợt xem xét hằng tuần?',
      options: ['A. A simple monitoring system can improve task management. (Một hệ thống theo dõi đơn giản có thể cải thiện việc quản lý nhiệm vụ.)', 'B. Danh sách dùng giấy.', 'C. Tuần có các ngày.', 'D. Hạn chót là các ngày.']
    }
  },
  {
    p: 'Which revision creates a realistic plan?',
    c: 'I will test the checklist for two weeks and revise it using missed-task data.',
    w: ['The checklist will solve everything.', 'No review is needed.', 'I will become perfect tomorrow.'],
    translation: {
      content: 'Bản sửa đổi nào tạo ra một kế hoạch thực tế?',
      options: ['A. Danh sách kiểm tra sẽ giải quyết mọi thứ', 'B. I will test the checklist for two weeks and revise it using missed-task data. (Tớ sẽ thử nghiệm danh sách kiểm tra trong 2 tuần và sửa đổi nó bằng dữ liệu nhiệm vụ bị bỏ lỡ.)', 'C. Không cần xem xét lại', 'D. Tớ sẽ trở nên hoàn hảo vào ngày mai']
    }
  },
  {
    p: 'Choose the clearest cleft transformation emphasising “the reminder”.',
    c: 'It was the reminder that helped me complete the task.',
    w: ['It reminder was helped.', 'The task who reminded.', 'It helped reminder that me.'],
    translation: {
      content: 'Chọn bản chuyển đổi câu chẻ rõ ràng nhất nhấn mạnh “the reminder”:',
      options: ['A. Sai cấu trúc', 'B. Sai cấu trúc', 'C. It was the reminder that helped me complete the task. (Chính lời nhắc nhở đã giúp tớ hoàn thành nhiệm vụ.)', 'D. Sai cấu trúc']
    }
  },
  {
    p: 'Which final sentence best closes a reflection?',
    c: 'Next week, I will set earlier reminders and compare completion data at Friday’s review.',
    w: ['Time management is good.', 'The paragraph is finished.', 'Nothing can be changed.'],
    translation: {
      content: 'Câu kết thúc nào khép lại tốt nhất một bài suy ngẫm?',
      options: ['A. Quản lý thời gian là tốt', 'B. Đoạn văn đã kết thúc ở đây', 'C. Không có gì có thể thay đổi', 'D. Next week, I will set earlier reminders and compare completion data at Friday’s review. (Tuần tới, tớ sẽ đặt các lời nhắc nhở sớm hơn và so sánh dữ liệu hoàn thành vào đợt xem xét thứ Sáu.)']
    }
  }
];
const communication: Raw[] = [
  {
    p: 'Which invitation allows the listener a real choice?',
    c: 'Would you like to practise cooking together?',
    w: ['You must cook with me.', 'I have accepted for you.', 'Cooking is compulsory now.'],
    translation: {
      content: 'Lời mời nào cho phép người nghe một sự lựa chọn thực sự?',
      options: ['A. Would you like to practise cooking together? (Cậu có muốn cùng nhau thực hành nấu ăn không?)', 'B. Cậu phải nấu ăn với tớ', 'C. Tớ đã chấp nhận thay cậu rồi', 'D. Việc nấu ăn giờ là bắt buộc']
    }
  },
  {
    p: 'A: “I keep missing deadlines.” B: “______”',
    c: 'Would you like to try breaking one task into smaller steps?',
    w: ['I will do every task for you.', 'You are irresponsible forever.', 'Deadlines do not matter.'],
    representation: 'dialogue',
    translation: {
      content: 'A: “Tớ cứ bị trễ hạn chót hoài.” B: “______”',
      options: ['A. Tớ sẽ làm mọi nhiệm vụ cho cậu', 'B. Would you like to try breaking one task into smaller steps? (Cậu có muốn thử chia một nhiệm vụ thành các bước nhỏ hơn không?)', 'C. Cậu vô trách nhiệm mãi mãi', 'D. Hạn chót không quan trọng']
    }
  },
  {
    p: 'Which request asks for instruction rather than replacement?',
    c: 'Could you show me how to check this form?',
    w: ['Could you complete it secretly?', 'Take over every decision.', 'Sign it for me without explanation.'],
    translation: {
      content: 'Yêu cầu nào xin sự hướng dẫn thay vì yêu cầu làm hộ?',
      options: ['A. Cậu có thể hoàn thành lén lút giúp tớ không?', 'B. Hãy tiếp quản mọi quyết định', 'C. Could you show me how to check this form? (Cậu có thể chỉ cho tớ cách kiểm tra mẫu đơn này không?)', 'D. Hãy ký nó giúp tớ mà không cần giải thích']
    }
  },
  {
    p: 'A: “Can you write my budget?” B: “______”',
    c: 'I can explain the template; you fill it in, and we can review it.',
    w: ['Yes, you need not learn.', 'No support is ever allowed.', 'Budgets require no data.'],
    representation: 'dialogue',
    translation: {
      content: 'A: “Cậu viết ngân sách giúp tớ được không?” B: “______”',
      options: ['A. Được chứ, cậu không cần học đâu', 'B. Không có sự hỗ trợ nào được cho phép', 'C. Ngân sách không cần dữ liệu', 'D. I can explain the template; you fill it in, and we can review it. (Tớ có thể giải thích mẫu; cậu tự điền vào, rồi chúng ta cùng xem lại.)']
    }
  },
  {
    p: 'Which response respects a refusal?',
    c: 'No problem; let me know if you want help later.',
    w: ['You must accept.', 'I will proceed anyway.', 'Refusal is not allowed.'],
    translation: {
      content: 'Phản hồi nào thể hiện sự tôn trọng lời từ chối?',
      options: ['A. No problem; let me know if you want help later. (Không sao đâu; hãy báo cho tớ biết nếu sau này cậu muốn được giúp đỡ nhé.)', 'B. Cậu phải chấp nhận', 'C. Tớ sẽ vẫn tiến hành dù sao đi nữa', 'D. Sự từ chối không được cho phép']
    }
  },
  {
    p: 'A: “This payment request seems suspicious.” B: “______”',
    c: 'Do not pay yet; let’s ask a trusted adult or the bank.',
    w: ['Guess and send money.', 'Hide it from everyone.', 'Independence means taking the risk alone.'],
    representation: 'dialogue',
    translation: {
      content: 'A: “Yêu cầu thanh toán này có vẻ khả nghi.” B: “______”',
      options: ['A. Đoán đại rồi chuyển tiền đi', 'B. Do not pay yet; let’s ask a trusted adult or the bank. (Đừng thanh toán vội; hãy hỏi một người lớn tin cậy hoặc ngân hàng.)', 'C. Giấu tất cả mọi người', 'D. Tự lập nghĩa là tự chịu rủi ro một mình']
    }
  },
  {
    p: 'What is the best first question before offering help?',
    c: 'Which part would you like support with?',
    w: ['May I take control?', 'Why can’t you do anything?', 'Shall I decide without asking?'],
    translation: {
      content: 'Câu hỏi đầu tiên tốt nhất trước khi đề nghị giúp đỡ là gì?',
      options: ['A. Tớ có thể nắm quyền kiểm soát không?', 'B. Tại sao cậu không thể làm được gì vậy?', 'C. Which part would you like support with? (Cậu muốn được hỗ trợ ở phần nào?)', 'D. Tớ sẽ quyết định mà không cần hỏi nhé?']
    }
  },
  {
    p: 'A: “I made a mistake in the plan.” B: “______”',
    c: 'What did the evidence show, and what will you adjust?',
    w: ['One error defines you.', 'Stop monitoring.', 'Hide it.'],
    representation: 'dialogue',
    translation: {
      content: 'A: “Tớ đã mắc lỗi trong kế hoạch.” B: “______”',
      options: ['A. Một sai lầm định nghĩa con người cậu', 'B. Ngừng theo dõi đi', 'C. Giấu nó đi', 'D. What did the evidence show, and what will you adjust? (Bằng chứng chỉ ra điều gì, và cậu sẽ điều chỉnh điều gì?)']
    }
  },
  {
    p: 'Which support follows model–practise–fade?',
    c: 'Demonstrate once, practise together, then let the learner try independently.',
    w: ['Do the task forever.', 'Remove all support immediately.', 'Give no feedback.'],
    translation: {
      content: 'Sự hỗ trợ nào tuân theo mô hình Làm mẫu – Thực hành – Giảm dần (model–practise–fade)?',
      options: ['A. Demonstrate once, practise together, then let the learner try independently. (Làm mẫu một lần, cùng thực hành, sau đó để người học tự thử độc lập.)', 'B. Làm hộ nhiệm vụ mãi mãi', 'C. Gỡ bỏ mọi sự hỗ trợ ngay lập tức', 'D. Không đưa ra phản hồi']
    }
  },
  {
    p: 'A: “My friend wants my bank password to help.” B: “______”',
    c: 'Do not share it; use official support and protect your account.',
    w: ['Sharing passwords proves trust.', 'Security is unnecessary.', 'Post it publicly.'],
    representation: 'dialogue',
    translation: {
      content: 'A: “Bạn tớ muốn xin mật khẩu ngân hàng của tớ để giúp.” B: “______”',
      options: ['A. Chia sẻ mật khẩu chứng minh sự tin tưởng', 'B. Do not share it; use official support and protect your account. (Đừng chia sẻ; hãy dùng hỗ trợ chính thức và bảo vệ tài khoản của cậu.)', 'C. Bảo mật là không cần thiết', 'D. Đăng công khai lên']
    }
  },
  {
    p: 'Which statement best defines responsible independence?',
    c: 'Making informed choices, accepting consequences and seeking help when risk exceeds your skills',
    w: ['Never consulting anyone', 'Doing every group task alone', 'Avoiding all boundaries'],
    translation: {
      content: 'Phát biểu nào định nghĩa tốt nhất về sự tự lập có trách nhiệm?',
      options: ['A. Không bao giờ tham khảo ý kiến của ai', 'B. Tự làm mọi nhiệm vụ nhóm một mình', 'C. Making informed choices, accepting consequences and seeking help when risk exceeds your skills (Đưa ra các lựa chọn sáng suốt, chấp nhận hậu quả và tìm kiếm trợ giúp khi rủi ro vượt quá kỹ năng của bạn)', 'D. Tránh tất cả các ranh giới']
    }
  },
  {
    p: 'A: “How can my parents support me without taking over?” B: “______”',
    c: 'Agree on the outcome and safety limits, then reduce prompts as you improve.',
    w: ['They should make every choice.', 'Remove limits regardless of risk.', 'Stop all communication.'],
    representation: 'dialogue',
    translation: {
      content: 'A: “Bố mẹ có thể hỗ trợ tớ như thế nào mà không làm thay tớ?” B: “______”',
      options: ['A. Họ nên đưa ra mọi lựa chọn', 'B. Gỡ bỏ ranh giới bất chấp rủi ro', 'C. Ngừng mọi giao tiếp', 'D. Agree on the outcome and safety limits, then reduce prompts as you improve. (Thống nhất về kết quả và các giới hạn an toàn, sau đó giảm dần các nhở nhắc khi cậu tiến bộ.)']
    }
  }
];
export const g11EnglishModule8Questions: CourseQuestion[] = [
  ...build('pronunciation', 'language', pronunciation, ['invite-suggest', 'request-politeness']),
  ...build('vocabulary', 'language', vocabulary, ['meaning-word-form', 'independence-collocation']),
  ...build('grammar', 'language', grammar, ['subject-object-focus', 'adverbial-focus']),
  ...build('reading', 'reading', reading, ['main-detail', 'infer-evaluate']),
  ...build('writing', 'writing', writing, ['order-cohesion', 'transform-plan']),
  ...build('communication', 'communication-culture', communication, ['invite-request', 'support-agency'])
];
