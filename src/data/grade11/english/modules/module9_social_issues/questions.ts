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
const build = (key: string, lesson: string, rows: Raw[], subs: [string, string]): CourseQuestion[] =>
  rows.map((r, i) => {
    const pos = i % 4, o = [...r.w]; o.splice(pos, 0, r.c);
    return {
      id: `eng11-q-u9-${key}-${String(i + 1).padStart(2, '0')}`,
      courseId: 'grade11:english', moduleId: 'eng11-m9', lessonId: `eng11-u9-${lesson}`,
      subjectId: 'english', topicId: 'eng11-topic-u9', questionTypeId: `eng11-qt-u9-${key}`,
      content: r.p, options: o.map((v, j) => `${letters[j]}. ${v}`) as [string, string, string, string],
      correctAnswer: letters[pos], responseType: 'single_choice', validatorType: 'choice',
      translation: r.translation,
      difficulty: difficulties[i], points: 0.25, sourceType: 'manual', outcomeIds: [`eng11-out-u9-${key}`],
      subTypeId: `eng11-u9-${key}-${i < 6 ? subs[0] : subs[1]}`,
      practiceRole: roles[i % 6], representationType: r.representation ?? (i % 4 === 3 ? 'dialogue' : 'text'),
      isMasteryHoldout: i % 6 === 5, stimulus: r.stimulus
    };
  });
const pronunciation: Raw[] = [
  {
    p: 'In “online or in person?”, how does “online” normally end?',
    c: 'with rising intonation',
    w: ['with the final fall', 'without pitch', 'as a tag question'],
    translation: {
      content: 'Trong câu “online or in person?”, từ “online” thường kết thúc như thế nào?',
      options: ['A. with rising intonation (với ngữ điệu lên giọng)', 'B. với xuống giọng ở cuối', 'C. không có cao độ', 'D. như một câu hỏi đuôi']
    }
  },
  {
    p: 'The last alternative in a choice question usually has:',
    c: 'falling intonation',
    w: ['rising intonation', 'no stress', 'question-tag grammar'],
    translation: {
      content: 'Lựa chọn cuối cùng trong câu hỏi lựa chọn thường có:',
      options: ['A. ngữ điệu lên giọng', 'B. falling intonation (ngữ điệu xuống giọng)', 'C. không có trọng âm', 'D. ngữ pháp câu hỏi đuôi']
    }
  },
  {
    p: 'Which pattern fits “peer pressure or bullying?”',
    c: 'rise–fall',
    w: ['fall–rise', 'rise–rise', 'fall–fall only'],
    translation: {
      content: 'Mô hình ngữ điệu nào phù hợp với câu hỏi lựa chọn 2 phương án “peer pressure or bullying?”',
      options: ['A. fall–rise', 'B. rise–rise', 'C. rise–fall (lên ở phương án đầu – xuống ở phương án cuối)', 'D. fall–fall']
    }
  },
  {
    p: 'A: “Should we email or call?” B: “Email rises; call ______.”',
    c: 'falls',
    w: ['rises forever', 'disappears', 'becomes a noun'],
    representation: 'dialogue',
    translation: {
      content: 'A: “Chúng ta nên gửi email hay gọi điện?” B: “Email thì lên giọng; call thì ______.”',
      options: ['A. lên giọng mãi mãi', 'B. biến mất', 'C. trở thành một danh từ', 'D. falls (xuống giọng)']
    }
  },
  {
    p: 'Why does the first choice rise?',
    c: 'It signals that another alternative follows.',
    w: ['It closes the question.', 'It changes tense.', 'It shows a statement.'],
    translation: {
      content: 'Tại sao lựa chọn đầu tiên lại lên giọng?',
      options: ['A. It signals that another alternative follows. (Nó ra hiệu rằng còn một lựa chọn khác theo sau.)', 'B. Nó khép lại câu hỏi', 'C. Nó làm thay đổi thì', 'D. Nó thể hiện một câu trần thuật']
    }
  },
  {
    p: 'Which item receives the final fall in “school, family, or online support”?',
    c: 'online support',
    w: ['school only', 'family only', 'every item rises'],
    translation: {
      content: 'Mục nào nhận ngữ điệu xuống giọng ở cuối trong cụm “school, family, or online support”?',
      options: ['A. chỉ school', 'B. online support (lựa chọn cuối cùng)', 'C. chỉ family', 'D. mọi mục đều lên giọng']
    }
  },
  {
    p: 'Choose the correct three-choice pattern.',
    c: 'rise–rise–fall',
    w: ['fall–rise–rise', 'fall–fall–rise', 'rise–fall–rise'],
    translation: {
      content: 'Chọn mô hình ngữ điệu đúng cho câu hỏi 3 lựa chọn:',
      options: ['A. fall–rise–rise', 'B. fall–fall–rise', 'C. rise–rise–fall (lên – lên – xuống ở lựa chọn cuối)', 'D. rise–fall–rise']
    }
  },
  {
    p: 'A: “Campaign A, B, or C?” B: “The tone on B should usually ______.”',
    c: 'rise',
    w: ['fall as final', 'stay silent', 'be a command'],
    representation: 'dialogue',
    translation: {
      content: 'A: “Chiến dịch A, B, hay C?” B: “Tông giọng ở B thường nên ______.”',
      options: ['A. xuống giọng như câu kết', 'B. giữ im lặng', 'C. là một mệnh lệnh', 'D. rise (lên giọng vì chưa phải lựa chọn cuối)']
    }
  },
  {
    p: 'A final fall tells the listener that:',
    c: 'the set of choices is complete',
    w: ['another item must follow', 'the speaker has no choice', 'or is a preposition'],
    translation: {
      content: 'Ngữ điệu xuống giọng ở cuối nói cho người nghe biết rằng:',
      options: ['A. the set of choices is complete (tập hợp các lựa chọn đã hoàn thành/kết thúc)', 'B. một mục khác phải theo sau', 'C. người nói không có lựa chọn', 'D. or là một giới từ']
    }
  },
  {
    p: 'Which question clearly presents alternatives?',
    c: 'Will you report it now or after class?',
    w: ['Do you know that bread and butter are food?', 'Where is the office?', 'It is safe, isn’t it?'],
    translation: {
      content: 'Câu hỏi nào thể hiện rõ ràng các lựa chọn thay thế nhau?',
      options: ['A. Do you know that bread and butter are food?', 'B. Will you report it now or after class? (Câu hỏi lựa chọn: Will you report it now or after class?)', 'C. Where is the office?', 'D. It is safe, isn’t it?']
    }
  },
  {
    p: 'A repeated first option may rise because the speaker:',
    c: 'is checking or requesting confirmation',
    w: ['has ended every choice', 'is making a past tense', 'removed the alternative'],
    translation: {
      content: 'Một tùy chọn đầu tiên được lặp lại có thể lên giọng vì người nói:',
      options: ['A. đã kết thúc mọi lựa chọn', 'B. đang tạo thì quá khứ', 'C. is checking or requesting confirmation (đang kiểm tra hoặc yêu cầu sự xác nhận)', 'D. đã gỡ bỏ lựa chọn thay thế']
    }
  },
  {
    p: 'What is the safest interpretation strategy?',
    c: 'Identify genuine alternatives and their position in the list.',
    w: ['Make every or rise.', 'Use spelling alone.', 'Make every item fall.'],
    translation: {
      content: 'Chi tiết chiến lược diễn giải an toàn nhất là gì?',
      options: ['A. làm cho mọi từ "or" lên giọng', 'B. chỉ sử dụng cách đánh vần', 'C. làm cho mọi mục xuống giọng', 'D. Identify genuine alternatives and their position in the list. (Xác định các lựa chọn thay thế thực sự và vị trí của chúng trong danh sách)']
    }
  }
];
const vocabulary: Raw[] = [
  {
    p: 'Pressure to behave like members of a friend group is:',
    c: 'peer pressure',
    w: ['food pressure', 'campaign reach', 'privacy support'],
    translation: {
      content: 'Áp lực phải hành xử giống như các thành viên trong một nhóm bạn là:',
      options: ['A. peer pressure (áp lực đồng lứa / bạn bè)', 'B. food pressure', 'C. campaign reach', 'D. privacy support']
    }
  },
  {
    p: 'Repeated harmful behaviour involving a power imbalance is:',
    c: 'bullying',
    w: ['awareness', 'confidentiality', 'evaluation'],
    translation: {
      content: 'Hành vi gây hại lặp đi lặp lại liên quan đến sự mất cân bằng quyền lực là:',
      options: ['A. awareness', 'B. bullying (sự bắt nạt / bạo lực học đường)', 'C. confidentiality', 'D. evaluation']
    }
  },
  {
    p: 'Bullying through messages or online platforms is:',
    c: 'cyberbullying',
    w: ['workplace training', 'biodiversity', 'budgeting'],
    translation: {
      content: 'Bắt nạt qua tin nhắn hoặc các nền tảng trực tuyến là:',
      options: ['A. workplace training', 'B. biodiversity', 'C. cyberbullying (bắt nạt trên không gian mạng)', 'D. budgeting']
    }
  },
  {
    p: 'A: “What is discrimination?” B: “It is ______.”',
    c: 'unfair treatment based on characteristics',
    w: ['a neutral choice question', 'an evaluation metric', 'a private budget'],
    representation: 'dialogue',
    translation: {
      content: 'A: “Discrimination (sự phân biệt đối xử) là gì?” B: “Nó là ______.”',
      options: ['A. một câu hỏi lựa chọn trung tính', 'B. một chỉ số đánh giá', 'C. một ngân sách riêng tư', 'D. unfair treatment based on characteristics (sự đối xử không công bằng dựa trên các đặc điểm)']
    }
  },
  {
    p: 'A person who witnesses an incident is a:',
    c: 'bystander',
    w: ['campaign outcome', 'support route', 'peer pressure'],
    translation: {
      content: 'Một người chứng kiến một vụ việc là một:',
      options: ['A. bystander (người đứng xem / người chứng kiến)', 'B. campaign outcome', 'C. support route', 'D. peer pressure']
    }
  },
  {
    p: 'A person who acts safely to help may be called an:',
    c: 'upstander',
    w: ['inequality', 'awareness', 'confidential form'],
    translation: {
      content: 'Một người hành động an toàn để giúp đỡ có thể được gọi là một:',
      options: ['A. inequality', 'B. upstander (người chủ động can thiệp bảo vệ)', 'C. awareness', 'D. confidential form']
    }
  },
  {
    p: 'Choose the correct campaign collocation.',
    c: 'raise awareness',
    w: ['do awareness', 'make bullying', 'take privacy'],
    translation: {
      content: 'Chọn kết hợp từ (collocation) đúng về chiến dịch:',
      options: ['A. do awareness', 'B. make bullying', 'C. raise awareness (nâng cao nhận thức)', 'D. take privacy']
    }
  },
  {
    p: 'Students should ______ bullying through a safe channel.',
    c: 'report',
    w: ['experience at', 'challenge into', 'support on'],
    translation: {
      content: 'Học sinh nên ______ hành vi bắt nạt qua một kênh an toàn:',
      options: ['A. experience at', 'B. challenge into', 'C. support on', 'D. report (báo cáo / tố giác / report bullying)']
    }
  },
  {
    p: 'Someone affected by harassment may need to ______ support.',
    c: 'seek',
    w: ['raise into', 'measure at', 'protect from seeking'],
    translation: {
      content: 'Ai đó bị ảnh hưởng bởi sự quấy rối có thể cần phải ______ sự hỗ trợ:',
      options: ['A. seek (tìm kiếm / seek support)', 'B. raise into', 'C. measure at', 'D. protect from seeking']
    }
  },
  {
    p: 'A: “How should the service handle names?” B: “It must ______ privacy.”',
    c: 'protect',
    w: ['bully', 'campaign', 'pressure'],
    representation: 'dialogue',
    translation: {
      content: 'A: “Dịch vụ nên xử lý tên như thế nào?” B: “Nó phải ______ sự riêng tư.”',
      options: ['A. bully', 'B. protect (bảo vệ / protect privacy)', 'C. campaign', 'D. pressure']
    }
  },
  {
    p: 'A programme should ______ outcomes, not only count posters.',
    c: 'measure',
    w: ['discriminate', 'peer', 'shame'],
    translation: {
      content: 'Một chương trình nên ______ các kết quả, chứ không chỉ đếm các áp phích:',
      options: ['A. discriminate', 'B. peer', 'C. measure (đo lường / measure outcomes)', 'D. shame']
    }
  },
  {
    p: 'Which phrase means opposing unfair treatment?',
    c: 'challenge discrimination',
    w: ['raise a bystander', 'seek bullying', 'report awareness'],
    translation: {
      content: 'Cụm từ nào có nghĩa là phản đối sự đối xử không công bằng?',
      options: ['A. raise a bystander', 'B. seek bullying', 'C. report awareness', 'D. challenge discrimination (thách thức / phản đối sự phân biệt đối xử)']
    }
  }
];
const grammar: Raw[] = [
  {
    p: '______ the campaign was popular, repeat incidents continued.',
    c: 'Although',
    w: ['Despite', 'Because of', 'Therefore'],
    translation: {
      content: '______ chiến dịch phổ biến, các sự cố lặp lại vẫn tiếp diễn.',
      options: ['A. Although (Mặc dù + mệnh đề)', 'B. Despite (sau Despite cần N/V-ing)', 'C. Because of', 'D. Therefore']
    }
  },
  {
    p: '______ its popularity, the campaign needed revision.',
    c: 'Despite',
    w: ['Although', 'Because', 'Therefore of'],
    translation: {
      content: '______ sự phổ biến của nó, chiến dịch vẫn cần được sửa đổi.',
      options: ['A. Although (sau Although cần mệnh đề)', 'B. Despite (Mặc dù + cụm danh từ)', 'C. Because', 'D. Therefore of']
    }
  },
  {
    p: 'The channel was anonymous. ______, more students used it.',
    c: 'Moreover',
    w: ['Although', 'Because of', 'Despite'],
    translation: {
      content: 'Kênh này được ẩn danh. ______, nhiều học sinh hơn đã sử dụng nó.',
      options: ['A. Although', 'B. Because of', 'C. Moreover (Hơn thế nữa / Bổ sung thông tin)', 'D. Despite']
    }
  },
  {
    p: 'A: “Which linker adds another benefit?” B: “______.”',
    c: 'In addition',
    w: ['However', 'Because', 'In spite of'],
    representation: 'dialogue',
    translation: {
      content: 'A: “Từ nối nào bổ sung thêm một lợi ích khác?” B: “______.”',
      options: ['A. However', 'B. Because', 'C. In spite of', 'D. In addition (Hơn nữa / Bổ sung thêm thông tin)']
    }
  },
  {
    p: 'The posters reached many students; ______, few knew the reporting steps.',
    c: 'however',
    w: ['because of', 'in addition to success', 'therefore only'],
    translation: {
      content: 'Các áp phích đã tiếp cận nhiều học sinh; ______, ít người biết các bước báo cáo.',
      options: ['A. however (Tuy nhiên / Trái ngược)', 'B. because of', 'C. in addition to success', 'D. therefore only']
    }
  },
  {
    p: '______ being short, the workshop included practical examples.',
    c: 'In spite of',
    w: ['Although', 'Because', 'Therefore'],
    translation: {
      content: '______ thời lượng ngắn, buổi hội thảo vẫn bao gồm các ví dụ thực tế.',
      options: ['A. Although (sau Although cần mệnh đề S+V)', 'B. In spite of (Mặc dù + V-ing)', 'C. Because', 'D. Therefore']
    }
  },
  {
    p: 'Reports increased ______ the new anonymous form reduced fear.',
    c: 'because',
    w: ['because of', 'despite', 'therefore'],
    translation: {
      content: 'Các báo cáo gia tăng ______ mẫu đơn ẩn danh mới đã làm giảm sự sợ hãi.',
      options: ['A. because of (sau because of cần N/V-ing)', 'B. despite', 'C. because (Bởi vì + mệnh đề S+V)', 'D. therefore']
    }
  },
  {
    p: 'A: “Why was attendance low?” B: “______ a transport strike.”',
    c: 'Because of',
    w: ['Because', 'Although', 'Therefore'],
    representation: 'dialogue',
    translation: {
      content: 'A: “Tại sao số lượng tham dự lại thấp?” B: “______ cuộc đình công giao thông.”',
      options: ['A. Because (sau because cần mệnh đề S+V)', 'B. Although', 'C. Therefore', 'D. Because of (Bởi vì + cụm danh từ)']
    }
  },
  {
    p: 'The response team trained staff; ______, waiting times fell.',
    c: 'as a result',
    w: ['although', 'because of', 'despite'],
    translation: {
      content: 'Đội phản ứng đã đào tạo nhân viên; ______, thời gian chờ đợi đã giảm.',
      options: ['A. as a result (Kết quả là / Chỉ kết quả)', 'B. although', 'C. because of', 'D. despite']
    }
  },
  {
    p: 'Which sentence is structurally correct?',
    c: 'Because the route was clear, students sought help.',
    w: ['Because of the route was clear, students sought help.', 'Although the route was clear, but students acted.', 'Despite students knew, they acted.'],
    translation: {
      content: 'Câu nào đúng về mặt cấu trúc ngữ pháp?',
      options: ['A. Sai (dùng Because of + mệnh đề)', 'B. Because the route was clear, students sought help. (Chính xác: Because + mệnh đề, S + V)', 'C. Sai (dùng lặp lòi Although... nhưng lại có "but")', 'D. Sai (dùng Despite + mệnh đề)']
    }
  },
  {
    p: 'Choose the correct contrast structure.',
    c: 'Despite receiving many views, the video changed little behaviour.',
    w: ['Although receiving many views, but the video changed.', 'Despite it received many views, the video changed.', 'Because of it received views, however changed.'],
    translation: {
      content: 'Chọn cấu trúc tương phản đúng:',
      options: ['A. Sai (dùng lặp Although... nhưng lại có "but")', 'B. Sai (dùng Despite + mệnh đề)', 'C. Despite receiving many views, the video changed little behaviour. (Đúng: Despite + V-ing, S + V)', 'D. Sai cấu trúc']
    }
  },
  {
    p: 'Which sentence avoids a double connector?',
    c: 'Although the meeting was difficult, participants stayed.',
    w: ['Although the meeting was difficult, but participants stayed.', 'Because the meeting ended, so they left.', 'Despite participants stayed, but difficult.'],
    translation: {
      content: 'Câu nào tránh lỗi dùng từ nối kép (đã dùng Although thì không dùng but)?',
      options: ['A. Sai (mắc lỗi lặp từ nối Although... but)', 'B. Sai (mắc lỗi lặp từ nối Because... so)', 'C. Sai (mắc lỗi lặp từ nối Despite... but)', 'D. Although the meeting was difficult, participants stayed. (Đúng: Chỉ dùng 1 từ nối Although)']
    }
  }
];
const passage1: QuestionStimulus = {
  id: 'eng11-stim-u9-reading-1', title: 'An anonymous reporting route',
  content: `A school survey found that many students had witnessed hurtful online messages, but few had reported them. Interviews suggested two barriers: students did not know which incidents qualified for reporting, and they feared that their names would become public.

The school introduced an online form that allowed anonymous initial reports. It explained what information was useful, what would happen next, and when anonymity might be limited because someone faced immediate danger. A trained safeguarding team reviewed submissions, while students could request a private follow-up conversation.

During the first term, reports increased sharply. Some adults assumed cyberbullying had become more common. However, the team compared survey responses and found that students were more aware of the route and more confident that staff would respond. The rise therefore could not be interpreted as a simple rise in incidents.

The review also identified problems. Several reports lacked enough detail for action, and response times varied. The school added examples to the form, set response targets and published aggregate data without identifying students. It tracked repeat incidents, response time, satisfaction with support and awareness of procedures. Student representatives reviewed the instructions and suggested simpler language for younger users. Staff also tested whether the form worked with screen readers and mobile phones. The purpose was not to maximise the number of reports, but to make harm visible and respond safely. The case shows why reporting data requires context: an increase can reflect a worsening problem, improved access, or both, and several indicators are needed to distinguish these possibilities.`
};
const passage2: QuestionStimulus = {
  id: 'eng11-stim-u9-reading-2', title: 'A peer-pressure workshop redesigned',
  content: `A youth centre ran a workshop telling teenagers to “just say no” to harmful peer pressure. Participants remembered the slogan, yet follow-up interviews showed that many could not use it when a friend threatened exclusion or when pressure appeared in a group chat.

The centre invited teenagers to redesign the sessions. They created realistic scenarios involving parties, risky online challenges, spending and sharing private images. Students practised delaying a decision, stating a boundary, suggesting an alternative and contacting a trusted person. Facilitators avoided describing all peer influence as harmful; they discussed how friends can also encourage healthy choices.

The revised programme used anonymous pre- and post-session scenarios. Participants selected responses and explained why. Scores improved immediately, but organisers did not claim lasting behaviour change. Three months later, they repeated the scenarios and asked whether students had used any strategy. They also provided an opt-out and information about support services because discussions could recall distressing experiences.

Results showed better recognition of pressure and more willingness to seek help. Self-reported use of strategies increased modestly, although the organisers noted possible memory and social-desirability bias. They planned confidential interviews with a smaller volunteer group and further adaptation for students with different communication needs. Facilitators would also record which scenarios prompted confusion without linking comments to individual participants. This evidence would guide the next training cycle instead of being used to rank students. The programme illustrates that awareness is only one step. Effective prevention needs realistic practice, safe support, repeated measurement and recognition that social situations differ across groups and platforms.`
};
const passage3: QuestionStimulus = {
  id: 'eng11-stim-u9-reading-3', title: 'Evaluating an anti-stigma campaign',
  content: `A student club planned a campaign to reduce stigma around seeking mental-health support. Its first proposal focused on posters saying “It is okay not to be okay.” A counsellor welcomed the message but asked what students should do after reading it and whether support services could handle increased demand.

The club added a directory of verified services, instructions for urgent situations and short videos explaining what a first counselling appointment might involve. Students with experience of using support reviewed the language, but no one was required to share a personal story. The school increased counsellor hours before launching the campaign.

Evaluation included more than online views. A baseline survey measured knowledge of services, confidence in approaching an adult and common misconceptions. Follow-up surveys used the same questions. The counselling team monitored waiting time and anonymous referral sources, while avoiding publication of small-group data that could reveal identities.

After eight weeks, knowledge improved and more students requested appointments. Waiting time initially grew, then returned near baseline after scheduling changes. The team could not determine whether stigma itself had fallen permanently, and it avoided claiming that every appointment resulted from the campaign. It concluded that communication and service capacity must develop together. Teachers received guidance on responding without diagnosing students or promising confidentiality they could not guarantee. The directory was updated monthly so that inaccurate contact information would not create another barrier. A campaign that encourages help-seeking without accessible, confidential support may create frustration. Future reviews will examine whether students receive appropriate help and whether awareness remains after the campaign ends.`
};
const reading: Raw[] = [
  {
    p: 'Why did many students avoid reporting?',
    c: 'They lacked clarity and feared exposure.',
    w: ['No harmful messages existed.', 'The school banned reports.', 'All forms required public names.'],
    stimulus: passage1,
    translation: {
      content: 'Tại sao nhiều học sinh tránh việc báo cáo?',
      options: ['A. They lacked clarity and feared exposure. (Họ thiếu sự rõ ràng và sợ bị lộ danh tính.)', 'B. Không có tin nhắn gây hại nào tồn tại', 'C. Nhà trường cấm các báo cáo', 'D. Tất cả các mẫu đơn đòi hỏi tên công khai']
    }
  },
  {
    p: 'Why did reports rise after the form opened?',
    c: 'Improved awareness and trust may have increased reporting.',
    w: ['The data proved incidents doubled.', 'Every report was false.', 'The form created bullying.'],
    stimulus: passage1,
    translation: {
      content: 'Tại sao các báo cáo lại gia tăng sau khi mẫu đơn mở?',
      options: ['A. Dữ liệu chứng minh các sự cố tăng gấp đôi', 'B. Improved awareness and trust may have increased reporting. (Nhận thức và sự tin tưởng được cải thiện có thể đã làm tăng việc báo cáo.)', 'C. Mọi báo cáo đều là giả mạo', 'D. Mẫu đơn đã tạo ra sự bắt nạt']
    }
  },
  {
    p: 'Which additional problem did the review find?',
    c: 'Some reports lacked detail and response time varied.',
    w: ['Students knew too much detail.', 'No team reviewed reports.', 'Aggregate data named everyone.'],
    stimulus: passage1,
    translation: {
      content: 'Vấn đề bổ sung nào mà đợt xem xét đã phát hiện?',
      options: ['A. Học sinh biết quá nhiều chi tiết', 'B. Không có đội ngũ nào xem xét báo cáo', 'C. Some reports lacked detail and response time varied. (Một số báo cáo thiếu chi tiết và thời gian phản hồi khác nhau.)', 'D. Dữ liệu tổng hợp nêu tên tất cả mọi người']
    }
  },
  {
    p: 'What is the main lesson of passage 1?',
    c: 'Reporting trends need context and multiple indicators.',
    w: ['More reports always mean more harm.', 'Fewer reports always mean safety.', 'One metric is sufficient.'],
    stimulus: passage1,
    translation: {
      content: 'Bài học chính của đoạn 1 là gì?',
      options: ['A. Nhiều báo cáo hơn luôn có nghĩa là nhiều tác hại hơn', 'B. Ít báo cáo hơn luôn có nghĩa là an toàn', 'C. Một chỉ số là đủ', 'D. Reporting trends need context and multiple indicators. (Các xu hướng báo cáo cần có bối cảnh và nhiều chỉ số.)']
    }
  },
  {
    p: 'Why was “just say no” insufficient?',
    c: 'Students could not apply it in realistic social situations.',
    w: ['No one remembered the slogan.', 'Peer influence is always positive.', 'The workshop included too much practice.'],
    stimulus: passage2,
    translation: {
      content: 'Tại sao khẩu hiệu “hãy cứ nói không” lại không đủ?',
      options: ['A. Students could not apply it in realistic social situations. (Học sinh không thể áp dụng nó trong các tình huống xã hội thực tế.)', 'B. Không ai nhớ khẩu hiệu', 'C. Ảnh hưởng bạn bè luôn tích cực', 'D. Hội thảo bao gồm quá nhiều thực hành']
    }
  },
  {
    p: 'What did the redesigned sessions add?',
    c: 'Scenario practice, boundaries, alternatives and support routes',
    w: ['Only longer slogans', 'Public personal stories', 'A ban on opting out'],
    stimulus: passage2,
    translation: {
      content: 'Các buổi học được thiết kế lại đã bổ sung thêm điều gì?',
      options: ['A. Chỉ là các khẩu hiệu dài hơn', 'B. Scenario practice, boundaries, alternatives and support routes (Thực hành kịch bản, các ranh giới, các phương án thay thế và các tuyến hỗ trợ)', 'C. Các câu chuyện cá nhân công khai', 'D. Cấm rút lui']
    }
  },
  {
    p: 'Why did organisers repeat measures after three months?',
    c: 'Immediate improvement did not prove retention or behaviour.',
    w: ['They wanted more poster views.', 'The first data was deleted.', 'All students gave identical answers.'],
    stimulus: passage2,
    translation: {
      content: 'Tại sao các ban tổ chức lại lặp lại việc đo lường sau 3 tháng?',
      options: ['A. Họ muốn thêm lượt xem áp phích', 'B. Dữ liệu đầu tiên đã bị xóa', 'C. Immediate improvement did not prove retention or behaviour. (Sự cải thiện ngay lập tức không chứng minh được sự ghi nhớ hoặc hành vi lâu dài.)', 'D. Tất cả học sinh đều đưa ra câu trả lời giống hệt nhau']
    }
  },
  {
    p: 'Which limitation affected self-reported strategy use?',
    c: 'Memory and social-desirability bias',
    w: ['No strategies existed.', 'The sample included adults only.', 'Scenarios were never used.'],
    stimulus: passage2,
    translation: {
      content: 'Hạn chế nào đã ảnh hưởng đến việc tự báo cáo sử dụng chiến lược?',
      options: ['A. Không có chiến lược nào tồn tại', 'B. Mẫu chỉ bao gồm người lớn', 'C. Kịch bản không bao giờ được sử dụng', 'D. Memory and social-desirability bias (Độ lệch ký ức và xu hướng trả lời theo mong muốn xã hội)']
    }
  },
  {
    p: 'What concern changed the anti-stigma proposal?',
    c: 'Students needed clear next steps and sufficient service capacity.',
    w: ['Posters were too small.', 'Counsellors opposed help-seeking.', 'Every student had to tell a story.'],
    stimulus: passage3,
    translation: {
      content: 'Mối quan ngại nào đã làm thay đổi đề xuất chống kỳ thị?',
      options: ['A. Students needed clear next steps and sufficient service capacity. (Học sinh cần các bước tiếp theo rõ ràng và năng lực dịch vụ đầy đủ.)', 'B. Áp phích quá nhỏ', 'C. Các tư vấn viên phản đối việc tìm kiếm trợ giúp', 'D. Mọi học sinh phải kể một câu chuyện']
    }
  },
  {
    p: 'How did the campaign protect participants?',
    c: 'It avoided forced disclosure and small-group identifying data.',
    w: ['It published names.', 'It removed urgent guidance.', 'It reduced counsellor hours.'],
    stimulus: passage3,
    translation: {
      content: 'Chiến dịch đã bảo vệ những người tham gia như thế nào?',
      options: ['A. Nó xuất bản tên', 'B. It avoided forced disclosure and small-group identifying data. (Nó tránh việc ép buộc tiết lộ thông tin và dữ liệu nhận dạng nhóm nhỏ.)', 'C. Nó gỡ bỏ hướng dẫn khẩn cấp', 'D. Nó giảm giờ tư vấn']
    }
  },
  {
    p: 'What happened to waiting time?',
    c: 'It rose initially and later fell after scheduling changes.',
    w: ['It stayed zero.', 'It was never measured.', 'It permanently doubled.'],
    stimulus: passage3,
    translation: {
      content: 'Điều gì đã xảy ra với thời gian chờ đợi?',
      options: ['A. Nó giữ nguyên ở mức 0', 'B. Nó không bao giờ được đo lường', 'C. It rose initially and later fell after scheduling changes. (Ban đầu nó tăng và sau đó giảm sau các thay đổi về lịch trình.)', 'D. Nó tăng gấp đôi vĩnh viễn']
    }
  },
  {
    p: 'Which conclusion best reflects passage 3?',
    c: 'Awareness campaigns need accessible, confidential support capacity.',
    w: ['Views alone prove stigma ended.', 'Communication can replace services.', 'Every appointment had one cause.'],
    stimulus: passage3,
    translation: {
      content: 'Kết luận nào phản ánh tốt nhất đoạn 3?',
      options: ['A. Chỉ riêng lượt xem chứng minh sự kỳ thị đã chấm dứt', 'B. Truyền thông có thể thay thế các dịch vụ', 'C. Mọi cuộc hẹn đều có một nguyên nhân', 'D. Awareness campaigns need accessible, confidential support capacity. (Các chiến dịch nâng cao nhận thức cần có năng lực hỗ trợ dễ tiếp cận và bảo mật.)']
    }
  }
];
const writing: Raw[] = [
  {
    p: 'Choose the best proposal order: (a) evaluate outcomes; (b) define the problem; (c) assign actions and safeguards.',
    c: 'b-c-a',
    w: ['a-b-c', 'c-a-b', 'b-a-c'],
    translation: {
      content: 'Chọn thứ tự đề xuất tốt nhất: (a) đánh giá các kết quả; (b) định nghĩa vấn đề; (c) phân công hành động và các biện pháp bảo vệ.',
      options: ['A. b-c-a', 'B. a-b-c', 'C. c-a-b', 'D. b-a-c']
    }
  },
  {
    p: 'Which opening has a clear scope?',
    c: 'This proposal addresses cyberbullying reports among Grades 10–11.',
    w: ['Social issues are bad.', 'End everything now.', 'Posters are useful.'],
    translation: {
      content: 'Mở đầu nào có phạm vi rõ ràng?',
      options: ['A. Vấn đề xã hội là xấu.', 'B. This proposal addresses cyberbullying reports among Grades 10–11. (Đề xuất này giải quyết các báo cáo bắt nạt trên mạng giữa các khối 10–11.)', 'C. Chấm dứt mọi thứ ngay bây giờ.', 'D. Áp phích thì hữu ích.']
    }
  },
  {
    p: 'Choose the connector: “Views were high. ______, knowledge of reporting remained low.”',
    c: 'However',
    w: ['Therefore', 'Because of', 'In addition without contrast'],
    translation: {
      content: 'Chọn từ nối: “Lượt xem cao. ______, kiến thức về việc báo cáo vẫn ở mức thấp.”',
      options: ['A. Vì vậy', 'B. Bởi vì', 'C. However (Tuy nhiên)', 'D. Hơn nữa']
    }
  },
  {
    p: 'A: “What belongs after evidence?” B: “______”',
    c: 'Actions linked to the identified barrier',
    w: ['An unrelated slogan', 'A guaranteed outcome', 'No responsible owner'],
    representation: 'dialogue',
    translation: {
      content: 'A: “Điều gì nên đi sau bằng chứng?” B: “______”',
      options: ['A. Một khẩu hiệu không liên quan', 'B. Một kết quả được đảm bảo', 'C. Không có người chịu trách nhiệm', 'D. Actions linked to the identified barrier (Các hành động gắn liền với rào cản đã được xác định)']
    }
  },
  {
    p: 'Which objective is measurable?',
    c: 'Increase correct identification of the reporting route by term end.',
    w: ['Raise awareness somehow.', 'End bullying forever.', 'Make everyone agree.'],
    translation: {
      content: 'Mục tiêu nào có thể đo lường được?',
      options: ['A. Increase correct identification of the reporting route by term end. (Tăng việc xác định đúng tuyến đường báo cáo vào cuối học kỳ.)', 'B. Nâng cao nhận thức bằng cách nào đó', 'C. Chấm dứt bạo lực học đường mãi mãi', 'D. Làm cho tất cả mọi người đồng ý']
    }
  },
  {
    p: 'Which detail is least relevant?',
    c: 'The designer’s favourite game',
    w: ['Privacy safeguard', 'Response owner', 'Review date'],
    translation: {
      content: 'Chi tiết nào ít liên quan nhất trong đề xuất?',
      options: ['A. Biện pháp bảo vệ riêng tư', 'B. The designer’s favourite game (Trò chơi yêu thích của nhà thiết kế - Không liên quan)', 'C. Người chịu trách nhiệm phản hồi', 'D. Ngày xem xét']
    }
  },
  {
    p: 'Choose the correct linker revision.',
    c: 'Despite strong reach, behaviour changed little.',
    w: ['Although strong reach, but behaviour changed.', 'Despite the campaign reached, behaviour.', 'Because of reach was strong, however.'],
    translation: {
      content: 'Chọn bản sửa đổi từ nối đúng:',
      options: ['A. Sai (dùng lặp Although... nhưng có "but")', 'B. Sai (dùng Despite + mệnh đề S+V)', 'C. Despite strong reach, behaviour changed little. (Đúng: Despite + cụm danh từ)', 'D. Sai cấu trúc']
    }
  },
  {
    p: 'A: “How should confidential data be reported?” B: “______”',
    c: 'Use aggregates large enough to protect identities.',
    w: ['Publish small-group names.', 'Share raw reports publicly.', 'Ignore privacy.'],
    representation: 'dialogue',
    translation: {
      content: 'A: “Dữ liệu bảo mật nên được báo cáo như thế nào?” B: “______”',
      options: ['A. Xuất bản tên nhóm nhỏ', 'B. Chia sẻ báo cáo thô công khai', 'C. Lờ đi sự riêng tư', 'D. Use aggregates large enough to protect identities. (Sử dụng dữ liệu tổng hợp đủ lớn để bảo vệ danh tính.)']
    }
  },
  {
    p: 'Which topic sentence fits training, reporting and counselling actions?',
    c: 'The campaign combines prevention, safe reporting and follow-up support.',
    w: ['Campaigns have posters.', 'Training takes time.', 'Counselling is a noun.'],
    translation: {
      content: 'Câu chủ đề nào phù hợp với các hành động đào tạo, báo cáo và tư vấn?',
      options: ['A. The campaign combines prevention, safe reporting and follow-up support. (Chiến dịch kết hợp phòng ngừa, báo cáo an toàn và hỗ trợ theo dõi.)', 'B. Các chiến dịch có áp phích.', 'C. Đào tạo tốn thời gian.', 'D. Tư vấn là một danh từ.']
    }
  },
  {
    p: 'Which social-campaign revision avoids overclaiming?',
    c: 'The pilot may improve help-seeking knowledge, which will be measured.',
    w: ['The pilot ends every social issue.', 'Views guarantee safety.', 'No evaluation is needed.'],
    translation: {
      content: 'Bản sửa đổi chiến dịch xã hội nào tránh việc tuyên bố quá lời?',
      options: ['A. Dự án thí điểm chấm dứt mọi vấn đề xã hội', 'B. The pilot may improve help-seeking knowledge, which will be measured. (Dự án thí điểm có thể cải thiện kiến thức tìm kiếm sự trợ giúp, điều này sẽ được đo lường.)', 'C. Lượt xem đảm bảo sự an toàn', 'D. Không cần đánh giá']
    }
  },
  {
    p: 'Choose the clearest cause–result link.',
    c: 'Because students feared exposure, the school introduced an anonymous first step.',
    w: ['Students feared although anonymous therefore.', 'Exposure introduced school.', 'Because of students feared, so form.'],
    translation: {
      content: 'Chọn liên kết nguyên nhân - kết quả rõ ràng nhất:',
      options: ['A. Vô nghĩa', 'B. Vô nghĩa', 'C. Because students feared exposure, the school introduced an anonymous first step. (Bởi vì học sinh sợ bị lộ danh tính, nhà trường đã đưa ra bước đầu tiên ẩn danh.)', 'D. Vô nghĩa']
    }
  },
  {
    p: 'Which final sentence best closes the proposal?',
    c: 'The team will review response time, repeat harm and support access after one term.',
    w: ['Success is guaranteed.', 'The proposal has a title.', 'Only views will be counted.'],
    translation: {
      content: 'Câu kết thúc nào khép lại tốt nhất bài đề xuất?',
      options: ['A. Thành công được đảm bảo', 'B. Đề xuất có một tiêu đề', 'C. Chỉ có lượt xem mới được đếm', 'D. The team will review response time, repeat harm and support access after one term. (Đội ngũ sẽ xem xét thời gian phản hồi, hành vi gây hại lặp lại và khả năng tiếp cận hỗ trợ sau 1 học kỳ.)']
    }
  }
];
const communication: Raw[] = [
  {
    p: 'Which response expresses disappointment without blame?',
    c: 'I’m sorry that happened to you.',
    w: ['Why did you cause it?', 'Ignore it.', 'You are too sensitive.'],
    translation: {
      content: 'Phản hồi nào thể hiện sự thất vọng mà không đổ lỗi?',
      options: ['A. I’m sorry that happened to you. (Tớ rất tiếc vì điều đó đã xảy ra với cậu.)', 'B. Tại sao cậu lại gây ra nó?', 'C. Lờ nó đi.', 'D. Cậu quá nhạy cảm rồi.']
    }
  },
  {
    p: 'A: “Someone posted a cruel image of me.” B: “______”',
    c: 'That’s awful. What support would feel helpful now?',
    w: ['You should have prevented it.', 'Post it again.', 'Tell no one ever.'],
    representation: 'dialogue',
    translation: {
      content: 'A: “Có ai đó đã đăng một bức ảnh độc ác về tớ.” B: “______”',
      options: ['A. Cậu đáng lẽ phải ngăn chặn nó', 'B. That’s awful. What support would feel helpful now? (Thật kinh khủng. Sự hỗ trợ nào sẽ làm cậu cảm thấy có ích lúc này?)', 'C. Đăng lại nó đi', 'D. Không bao giờ được kể với ai']
    }
  },
  {
    p: 'Which question supports rather than interrogates?',
    c: 'Would you like me to go with you to a trusted adult?',
    w: ['Why were you weak?', 'Who can we blame publicly?', 'Must you hide it?'],
    translation: {
      content: 'Câu hỏi nào mang tính hỗ trợ chứ không phải thẩm vấn/hạch hỏi?',
      options: ['A. Tại sao cậu lại yếu đuối thế?', 'B. Chúng ta có thể đổ lỗi cho ai công khai?', 'C. Would you like me to go with you to a trusted adult? (Cậu có muốn tớ đi cùng cậu đến gặp một người lớn tin cậy không?)', 'D. Cậu phải giấu nó à?']
    }
  },
  {
    p: 'A: “Promise you will never tell anyone.” B: “______”',
    c: 'I’ll respect your privacy, but if someone is in danger we need help.',
    w: ['I promise secrecy in every danger.', 'I will publish it.', 'Safety never matters.'],
    representation: 'dialogue',
    translation: {
      content: 'A: “Hứa là cậu sẽ không bao giờ kể với ai đi.” B: “______”',
      options: ['A. Tớ hứa giữ bí mật trong mọi nguy hiểm', 'B. Tớ sẽ xuất bản nó', 'C. Sự an toàn không bao giờ quan trọng', 'D. I’ll respect your privacy, but if someone is in danger we need help. (Tớ sẽ tôn trọng sự riêng tư của cậu, nhưng nếu ai đó gặp nguy hiểm chúng ta cần xin trợ giúp.)']
    }
  },
  {
    p: 'Which bystander action is safest?',
    c: 'Save evidence and report through the appropriate channel.',
    w: ['Start a dangerous confrontation.', 'Forward the harmful post.', 'Delete all evidence immediately.'],
    translation: {
      content: 'Hành động nào của người chứng kiến (bystander) là an toàn nhất?',
      options: ['A. Save evidence and report through the appropriate channel. (Lưu lại bằng chứng và báo cáo qua kênh phù hợp.)', 'B. Bắt đầu một cuộc đối đầu nguy hiểm', 'C. Chuyển tiếp bài viết gây hại', 'D. Xóa tất cả bằng chứng ngay lập tức']
    }
  },
  {
    p: 'A: “The threats mention tomorrow.” B: “______”',
    c: 'Let’s contact a trusted adult or emergency support now.',
    w: ['Wait silently.', 'Confront them alone.', 'Treat it as a joke.'],
    representation: 'dialogue',
    translation: {
      content: 'A: “Các lời đe dọa nhắc đến ngày mai.” B: “______”',
      options: ['A. Chờ đợi im lặng', 'B. Let’s contact a trusted adult or emergency support now. (Hãy liên hệ với một người lớn tin cậy hoặc sự hỗ trợ khẩn cấp ngay bây giờ.)', 'C. Đối đầu một mình', 'D. Coi đó như một trò đùa']
    }
  },
  {
    p: 'Which phrase establishes a boundary?',
    c: 'I won’t share that image, but I can help you report it.',
    w: ['I will forward it.', 'Boundaries are rude.', 'Reporting is impossible.'],
    translation: {
      content: 'Cụm từ nào thiết lập một ranh giới rõ ràng?',
      options: ['A. Tớ sẽ chuyển tiếp nó', 'B. Ranh giới là thô lỗ', 'C. I won’t share that image, but I can help you report it. (Tớ sẽ không chia sẻ bức ảnh đó, nhưng tớ có thể giúp cậu báo cáo nó.)', 'D. Việc báo cáo là không thể']
    }
  },
  {
    p: 'A: “I am disappointed the campaign excluded us.” B: “______”',
    c: 'You’re right to raise that; how should participation change?',
    w: ['Exclusion is irrelevant.', 'The plan cannot change.', 'Your view is wrong.'],
    representation: 'dialogue',
    translation: {
      content: 'A: “Tớ thất vọng vì chiến dịch đã loại trừ chúng tớ.” B: “______”',
      options: ['A. Sự loại trừ là không liên quan', 'B. Kế hoạch không thể thay đổi', 'C. Quan điểm của cậu là sai', 'D. You’re right to raise that; how should participation change? (Cậu đúng khi nêu ra điều đó; việc tham gia nên thay đổi như thế nào?)']
    }
  },
  {
    p: 'What should support services explain clearly?',
    c: 'Confidentiality, its limits and what happens next',
    w: ['Only the logo', 'Rumours', 'No process'],
    translation: {
      content: 'Dịch vụ hỗ trợ nên giải thích rõ ràng điều gì?',
      options: ['A. Confidentiality, its limits and what happens next (Sự bảo mật, các giới hạn của nó và điều gì xảy ra tiếp theo)', 'B. Chỉ có logo', 'C. Tin đồn', 'D. Không có quy trình']
    }
  },
  {
    p: 'A: “I don’t want to report alone.” B: “______”',
    c: 'I can stay with you while we use the school’s safe route.',
    w: ['Then do nothing.', 'I will decide for you.', 'Publicly name everyone.'],
    representation: 'dialogue',
    translation: {
      content: 'A: “Tớ không muốn báo cáo một mình.” B: “______”',
      options: ['A. Thế thì đừng làm gì cả', 'B. I can stay with you while we use the school’s safe route. (Tớ có thể ở bên cậu trong khi chúng ta sử dụng tuyến đường an toàn của trường.)', 'C. Tớ sẽ quyết định thay cậu', 'D. Công khai tên của mọi người']
    }
  },
  {
    p: 'Which response avoids minimising harm?',
    c: 'Even if others call it a joke, its impact matters.',
    w: ['It was only a joke.', 'Everyone experiences it.', 'Forget it immediately.'],
    translation: {
      content: 'Phản hồi nào tránh việc hạ thấp tác hại?',
      options: ['A. Nó chỉ là một trò đùa thôi', 'B. Ai cũng trải qua điều đó', 'C. Even if others call it a joke, its impact matters. (Cho dù những người khác gọi đó là trò đùa, tác động của nó vẫn quan trọng.)', 'D. Quên nó đi ngay lập tức']
    }
  },
  {
    p: 'A: “What if someone may hurt themselves?” B: “______”',
    c: 'Seek immediate qualified help and do not leave them unsupported.',
    w: ['Keep it secret.', 'Handle it alone online.', 'Wait for a campaign.'],
    representation: 'dialogue',
    translation: {
      content: 'A: “Nếu ai đó có thể tự làm hại bản thân thì sao?” B: “______”',
      options: ['A. Giữ bí mật', 'B. Tự xử lý một mình trên mạng', 'C. Chờ một chiến dịch', 'D. Seek immediate qualified help and do not leave them unsupported. (Tìm kiếm sự giúp đỡ chuyên môn ngay lập tức và không để họ không được hỗ trợ.)']
    }
  }
];
export const g11EnglishModule9Questions:CourseQuestion[]=[
  ...build('pronunciation','language',pronunciation,['two-choice','multi-choice-context']),...build('vocabulary','language',vocabulary,['meaning-word-form','social-collocation']),
  ...build('grammar','language',grammar,['addition-contrast','cause-result']),...build('reading','reading',reading,['main-detail','infer-evaluate']),
  ...build('writing','writing',writing,['order-cohesion','transform-proposal']),...build('communication','communication-culture',communication,['disappointment-support','boundary-escalate'])
];
