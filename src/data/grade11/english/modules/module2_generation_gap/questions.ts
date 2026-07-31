import type { CourseQuestion } from '@/data/schema';
import type { PracticeRole, QuestionRepresentationType, QuestionStimulus } from '@/types';

type Choice = 'A' | 'B' | 'C' | 'D';
type Row = {
  content: string;
  options: [string, string, string, string];
  answer: Choice;
  subTypeId: string;
  stimulus?: QuestionStimulus;
  representationType?: QuestionRepresentationType;
  translation?: {
    content: string;
    options?: string[];
  };
};

const roles: PracticeRole[] = ['guided', 'near_transfer', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'];
const difficulties: CourseQuestion['difficulty'][] = [
  'easy', 'easy', 'easy', 'easy',
  'medium', 'medium', 'medium', 'medium', 'medium',
  'hard', 'hard', 'hard'
];

const buildQuestions = (
  key: string,
  questionTypeId: string,
  lessonId: string,
  outcomeId: string,
  rows: Row[]
): CourseQuestion[] =>
  rows.map((row, index) => ({
    id: `eng11-q-u2-${key}-${String(index + 1).padStart(2, '0')}`,
    courseId: 'grade11:english',
    moduleId: 'eng11-m2',
    lessonId,
    subjectId: 'english',
    topicId: 'eng11-topic-u2',
    questionTypeId,
    content: row.content,
    options: row.options,
    correctAnswer: row.answer,
    translation: row.translation,
    responseType: 'single_choice',
    validatorType: 'choice',
    difficulty: difficulties[index],
    points: 0.25,
    sourceType: 'manual',
    outcomeIds: [outcomeId],
    subTypeId: row.subTypeId,
    practiceRole: roles[index % roles.length],
    representationType: row.representationType ?? (index % 4 === 3 ? 'dialogue' : 'text'),
    isMasteryHoldout: index % roles.length === 5,
    stimulus: row.stimulus
  }));

const pronunciationRows: Row[] = [
  {
    content: 'The contracted form “we’ll” stands for:',
    options: ['A. we will', 'B. we are', 'C. we have', 'D. we were'],
    answer: 'A',
    subTypeId: 'eng11-u2-pron-expand',
    translation: {
      content: 'Dạng viết tắt “we’ll” là viết tắt của:',
      options: ['A. we will', 'B. we are', 'C. we have', 'D. we were']
    }
  },
  {
    content: 'In “They’ve agreed on the new rule,” “they’ve” means:',
    options: ['A. they would', 'B. they have', 'C. they are', 'D. they will'],
    answer: 'B',
    subTypeId: 'eng11-u2-pron-expand',
    translation: {
      content: 'Trong câu “They’ve agreed on the new rule,” từ “they’ve” có nghĩa là:',
      options: ['A. they would', 'B. they have', 'C. they are', 'D. they will']
    }
  },
  {
    content: 'The full form of “mustn’t” is:',
    options: ['A. must need', 'B. must have', 'C. must not', 'D. must be'],
    answer: 'C',
    subTypeId: 'eng11-u2-pron-expand',
    translation: {
      content: 'Dạng đầy đủ của “mustn’t” là:',
      options: ['A. must need', 'B. must have', 'C. must not', 'D. must be']
    }
  },
  {
    content: 'A: “What does ‘I’d’ mean in ‘I’d like to explain’?” B: “It means ______.”',
    options: ['A. I did', 'B. I had', 'C. I must', 'D. I would'],
    answer: 'D',
    subTypeId: 'eng11-u2-pron-expand',
    representationType: 'dialogue',
    translation: {
      content: 'A: “Từ ‘I’d’ trong câu ‘I’d like to explain’ có nghĩa là gì?” B: “Nó có nghĩa là ______.”',
      options: ['A. I did', 'B. I had', 'C. I must', 'D. I would']
    }
  },
  {
    content: 'In “She’s talking to her parents,” the full form of “she’s” is:',
    options: ['A. she is', 'B. she has', 'C. she does', 'D. she was'],
    answer: 'A',
    subTypeId: 'eng11-u2-pron-expand',
    translation: {
      content: 'Trong câu “She’s talking to her parents,” dạng đầy đủ của “she’s” là:',
      options: ['A. she is', 'B. she has', 'C. she does', 'D. she was']
    }
  },
  {
    content: 'In “He’s finished his homework,” the full form of “he’s” is:',
    options: ['A. he is', 'B. he has', 'C. he was', 'D. he does'],
    answer: 'B',
    subTypeId: 'eng11-u2-pron-expand',
    translation: {
      content: 'Trong câu “He’s finished his homework,” dạng đầy đủ của “he’s” là:',
      options: ['A. he is', 'B. he has', 'C. he was', 'D. he does']
    }
  },
  {
    content: 'Choose the correct contracted sentence.',
    options: ['A. We not ready.', 'B. Were not ready.', 'C. We’re not ready.', 'D. We’nt ready.'],
    answer: 'C',
    subTypeId: 'eng11-u2-pron-context',
    translation: {
      content: 'Chọn câu viết tắt đúng quy tắc:',
      options: ['A. We not ready. (Sai)', 'B. Were not ready. (Sai)', 'C. We’re not ready. (Đúng)', 'D. We’nt ready. (Sai)']
    }
  },
  {
    content: 'A: “Is ‘can’t’ suitable in this formal notice?” B: “The full form ______ may be more formal.”',
    options: ['A. can', 'B. did not', 'C. should not', 'D. cannot'],
    answer: 'D',
    subTypeId: 'eng11-u2-pron-context',
    representationType: 'dialogue',
    translation: {
      content: 'A: “Từ ‘can’t’ có phù hợp trong thông báo trang trọng này không?” B: “Dạng đầy đủ ______ có thể trang trọng hơn.”',
      options: ['A. can', 'B. did not', 'C. should not', 'D. cannot']
    }
  },
  {
    content: 'Which sentence uses ’s to mean “has”?',
    options: ['A. Mai’s already spoken to her mother.', 'B. Mai’s very patient.', 'C. Mai’s at home.', 'D. Mai’s younger than Nam.'],
    answer: 'A',
    subTypeId: 'eng11-u2-pron-context',
    translation: {
      content: 'Câu nào sử dụng ’s mang nghĩa là “has”?',
      options: [
        'A. Mai’s already spoken to her mother. (Mai has already spoken...)',
        'B. Mai’s very patient. (Mai is...)',
        'C. Mai’s at home. (Mai is...)',
        'D. Mai’s younger than Nam. (Mai is...)'
      ]
    }
  },
  {
    content: 'Which sentence CANNOT normally be contracted using ’ll?',
    options: ['A. I will call you.', 'B. We are ready.', 'C. She will understand.', 'D. They will arrive soon.'],
    answer: 'B',
    subTypeId: 'eng11-u2-pron-context',
    translation: {
      content: 'Câu nào KHÔNG thể viết tắt thông thường bằng cụm ’ll?',
      options: [
        'A. I will call you. -> I’ll',
        'B. We are ready. (Không chứa will -> không dùng ’ll)',
        'C. She will understand. -> She’ll',
        'D. They will arrive soon. -> They’ll'
      ]
    }
  },
  {
    content: 'Choose the most appropriate form for a highly formal school regulation.',
    options: ['A. Students mustn’t enter.', 'B. Students can’t enter.', 'C. Students must not enter.', 'D. Students won’t enter.'],
    answer: 'C',
    subTypeId: 'eng11-u2-pron-context',
    translation: {
      content: 'Chọn dạng phù hợp nhất cho một quy định nhà trường mang tính trang trọng cao:',
      options: [
        'A. Students mustn’t enter. (Viết tắt bớt trang trọng)',
        'B. Students can’t enter. (Viết tắt bớt trang trọng)',
        'C. Students must not enter. (Dạng đầy đủ chuẩn trang trọng)',
        'D. Students won’t enter.'
      ]
    }
  },
  {
    content: 'A: “She’d left before the discussion began.” What does “she’d” mean here?',
    options: ['A. she did', 'B. she would', 'C. she should', 'D. she had'],
    answer: 'D',
    subTypeId: 'eng11-u2-pron-context',
    representationType: 'dialogue',
    translation: {
      content: 'A: “She’d left before the discussion began.” Từ “she’d” ở đây có nghĩa là gì?',
      options: [
        'A. she did',
        'B. she would',
        'C. she should',
        'D. she had (Đi với V3 left trong thì quá khứ hoàn thành: she had)'
      ]
    }
  }
];

const vocabularyRows: Row[] = [
  {
    content: 'A generation ______ may develop when family members of different ages have contrasting values.',
    options: ['A. gap', 'B. space', 'C. hole', 'D. distance away'],
    answer: 'A',
    subTypeId: 'eng11-u2-vocab-meaning',
    translation: {
      content: 'Một ______ thế hệ có thể phát sinh khi các thành viên gia đình ở các độ tuổi khác nhau có những giá trị trái ngược nhau.',
      options: [
        'A. gap (khoảng cách thế hệ / generation gap)',
        'B. space',
        'C. hole',
        'D. distance away'
      ]
    }
  },
  {
    content: 'Honesty and respect are important family ______.',
    options: ['A. attitudes', 'B. values', 'C. behaviours', 'D. arguments'],
    answer: 'B',
    subTypeId: 'eng11-u2-vocab-meaning',
    translation: {
      content: 'Sự trung thực và lòng tôn trọng là những ______ gia đình quan trọng.',
      options: [
        'A. attitudes',
        'B. values (giá trị / family values)',
        'C. behaviours',
        'D. arguments'
      ]
    }
  },
  {
    content: 'The word “conflict” is closest in meaning to:',
    options: ['A. a family meal', 'B. a private room', 'C. a serious disagreement', 'D. a shared hobby'],
    answer: 'C',
    subTypeId: 'eng11-u2-vocab-meaning',
    translation: {
      content: 'Từ “conflict” (xung đột) gần nghĩa nhất với:',
      options: [
        'A. bữa ăn gia đình',
        'B. phòng riêng',
        'C. a serious disagreement (sự bất đồng nghiêm trọng)',
        'D. sở thích chung'
      ]
    }
  },
  {
    content: 'A: “What does privacy mean?” B: “It is the right to keep personal matters ______.”',
    options: ['A. traditional', 'B. confident', 'C. similar', 'D. private'],
    answer: 'D',
    subTypeId: 'eng11-u2-vocab-meaning',
    representationType: 'dialogue',
    translation: {
      content: 'A: “Sự riêng tư (privacy) nghĩa là gì?” B: “Đó là quyền giữ các chuyện cá nhân được ______.”',
      options: [
        'A. traditional',
        'B. confident',
        'C. similar',
        'D. private (riêng tư / riêng bí mật)'
      ]
    }
  },
  {
    content: 'Her positive ______ towards older relatives helps her listen patiently to their stories.',
    options: ['A. attitude', 'B. behaviour', 'C. rule', 'D. conflict'],
    answer: 'A',
    subTypeId: 'eng11-u2-vocab-meaning',
    translation: {
      content: '______ tích cực của cô ấy đối với người thân lớn tuổi giúp cô kiên nhẫn lắng nghe những câu chuyện của họ.',
      options: [
        'A. attitude (thái độ / positive attitude)',
        'B. behaviour',
        'C. rule',
        'D. conflict'
      ]
    }
  },
  {
    content: 'Checking a phone without permission is a type of ______, not merely an opinion.',
    options: ['A. value', 'B. behaviour', 'C. generation', 'D. tradition'],
    answer: 'B',
    subTypeId: 'eng11-u2-vocab-meaning',
    translation: {
      content: 'Tự ý kiểm tra điện thoại khi chưa xin phép là một dạng ______, chứ không chỉ đơn thuần là một ý kiến.',
      options: [
        'A. value',
        'B. behaviour (hành vi / thói quen ứng xử)',
        'C. generation',
        'D. tradition'
      ]
    }
  },
  {
    content: 'Parents and teenagers should try to ______ a compromise that both sides can accept.',
    options: ['A. reach', 'B. touch', 'C. arrive', 'D. catch'],
    answer: 'A',
    subTypeId: 'eng11-u2-vocab-collocation',
    translation: {
      content: 'Cha mẹ và con cái tuổi teen nên cố gắng ______ một thỏa thuận/thỏa hiệp mà cả hai bên đều có thể chấp nhận.',
      options: [
        'A. reach (đạt được / reach a compromise)',
        'B. touch',
        'C. arrive',
        'D. catch'
      ]
    }
  },
  {
    content: 'Family members need to ______ one another’s privacy.',
    options: ['A. follow', 'B. respect', 'C. obey', 'D. perform'],
    answer: 'B',
    subTypeId: 'eng11-u2-vocab-collocation',
    translation: {
      content: 'Các thành viên trong gia đình cần phải ______ sự riêng tư của nhau.',
      options: [
        'A. follow',
        'B. respect (tôn trọng / respect privacy)',
        'C. obey',
        'D. perform'
      ]
    }
  },
  {
    content: 'Calm discussion can help families ______ conflicts before they become serious.',
    options: ['A. refuse', 'B. raise', 'C. resolve', 'D. divide'],
    answer: 'C',
    subTypeId: 'eng11-u2-vocab-collocation',
    translation: {
      content: 'Thảo luận bình tĩnh có thể giúp các gia đình ______ các xung đột trước khi chúng trở nên nghiêm trọng.',
      options: [
        'A. refuse',
        'B. raise',
        'C. resolve (giải quyết / resolve conflicts)',
        'D. divide'
      ]
    }
  },
  {
    content: 'A: “Why did your family meet?” B: “We wanted to ______ clear rules about device use.”',
    options: ['A. do', 'B. take', 'C. catch', 'D. set'],
    answer: 'D',
    subTypeId: 'eng11-u2-vocab-collocation',
    representationType: 'dialogue',
    translation: {
      content: 'A: “Tại sao gia đình cậu lại họp mặt?” B: “Chúng tớ muốn ______ các quy định rõ ràng về việc sử dụng thiết bị.”',
      options: [
        'A. do',
        'B. take',
        'C. catch',
        'D. set (thiết lập quy định / set rules)'
      ]
    }
  },
  {
    content: 'Teenagers should be allowed to ______ their opinions respectfully.',
    options: ['A. express', 'B. reach', 'C. solve', 'D. follow'],
    answer: 'A',
    subTypeId: 'eng11-u2-vocab-collocation',
    translation: {
      content: 'Thanh thiếu niên nên được phép ______ ý kiến của mình một cách tôn trọng.',
      options: [
        'A. express (bày tỏ / express opinions)',
        'B. reach',
        'C. solve',
        'D. follow'
      ]
    }
  },
  {
    content: 'Many families continue to ______ traditions while adapting them to modern life.',
    options: ['A. make', 'B. follow', 'C. reach', 'D. resolve'],
    answer: 'B',
    subTypeId: 'eng11-u2-vocab-collocation',
    translation: {
      content: 'Nhiều gia đình tiếp tục ______ các truyền thống trong khi thích ứng chúng với cuộc sống hiện đại.',
      options: [
        'A. make',
        'B. follow (theo đuổi/giữ gìn / follow traditions)',
        'C. reach',
        'D. resolve'
      ]
    }
  }
];

const grammarRows: Row[] = [
  {
    content: 'I ______ remember to call Grandma tonight; it is very important to me.',
    options: ['A. must', 'B. should not', 'C. do not have to', 'D. must not'],
    answer: 'A',
    subTypeId: 'eng11-u2-grammar-obligation',
    translation: {
      content: 'Tớ ______ nhớ gọi điện cho Bà tối nay; việc đó rất quan trọng đối với tớ.',
      options: [
        'A. must (Nghĩa vụ từ bản thân / bổn phận cá nhân: must)',
        'B. should not',
        'C. do not have to',
        'D. must not'
      ]
    }
  },
  {
    content: 'Students ______ wear their school ID cards because the school rules require it.',
    options: ['A. should', 'B. have to', 'C. mustn’t', 'D. don’t have to'],
    answer: 'B',
    subTypeId: 'eng11-u2-grammar-obligation',
    translation: {
      content: 'Học sinh ______ đeo thẻ học sinh vì nội quy nhà trường bắt buộc.',
      options: [
        'A. should',
        'B. have to (Bắt buộc do luật lệ/nội quy bên ngoài: have to)',
        'C. mustn’t',
        'D. don’t have to'
      ]
    }
  },
  {
    content: 'You look exhausted. You ______ take a short break.',
    options: ['A. have to because of a law', 'B. mustn’t', 'C. should', 'D. don’t have to'],
    answer: 'C',
    subTypeId: 'eng11-u2-grammar-obligation',
    translation: {
      content: 'Trông cậu kiệt sức rồi. Cậu ______ nghỉ ngơi một chút.',
      options: [
        'A. have to because of a law',
        'B. mustn’t',
        'C. should (Lời khuyên nên làm: should)',
        'D. don’t have to'
      ]
    }
  },
  {
    content: 'A: “Do we ______ submit the form today?” B: “Yes, it is the deadline.”',
    options: ['A. should to', 'B. must to', 'C. have', 'D. have to'],
    answer: 'D',
    subTypeId: 'eng11-u2-grammar-obligation',
    representationType: 'dialogue',
    translation: {
      content: 'A: “Chúng ta có ______ nộp đơn hôm nay không?” B: “Có, hôm nay là hạn chót.”',
      options: [
        'A. should to',
        'B. must to',
        'C. have',
        'D. have to (Do we have to + V: hỏi về nghĩa vụ)'
      ]
    }
  },
  {
    content: 'Parents ______ listen before giving advice if they want an open conversation.',
    options: ['A. should', 'B. mustn’t', 'C. don’t have to', 'D. should to'],
    answer: 'A',
    subTypeId: 'eng11-u2-grammar-obligation',
    translation: {
      content: 'Cha mẹ ______ lắng nghe trước khi đưa ra lời khuyên nếu muốn có cuộc trò chuyện cởi mở.',
      options: [
        'A. should (Lời khuyên: should)',
        'B. mustn’t',
        'C. don’t have to',
        'D. should to'
      ]
    }
  },
  {
    content: 'Because the bus service ends early, I ______ leave the club before six.',
    options: ['A. should not', 'B. have to', 'C. mustn’t', 'D. do not have to'],
    answer: 'B',
    subTypeId: 'eng11-u2-grammar-obligation',
    translation: {
      content: 'Vì tuyến xe buýt kết thúc sớm, tớ ______ rời câu lạc bộ trước 6 giờ.',
      options: [
        'A. should not',
        'B. have to (Hoàn cảnh bên ngoài bắt buộc: have to)',
        'C. mustn’t',
        'D. do not have to'
      ]
    }
  },
  {
    content: 'You ______ share your online password with anyone. It is unsafe.',
    options: ['A. don’t have to', 'B. should', 'C. mustn’t', 'D. have to'],
    answer: 'C',
    subTypeId: 'eng11-u2-grammar-negative',
    translation: {
      content: 'Cậu ______ chia sẻ mật khẩu trực tuyến của mình với bất kỳ ai. Điều đó không an toàn.',
      options: [
        'A. don’t have to',
        'B. should',
        'C. mustn’t (Cấm đoán / không được làm: mustn’t)',
        'D. have to'
      ]
    }
  },
  {
    content: 'A: “Do I need to bring food?” B: “No, you ______. Lunch is provided.”',
    options: ['A. must not', 'B. should not', 'C. cannot', 'D. do not have to'],
    answer: 'D',
    subTypeId: 'eng11-u2-grammar-negative',
    representationType: 'dialogue',
    translation: {
      content: 'A: “Tớ có cần mang theo đồ ăn không?” B: “Không, cậu ______. Bữa trưa đã được cung cấp rồi.”',
      options: [
        'A. must not',
        'B. should not',
        'C. cannot',
        'D. do not have to (Không cần thiết phải làm: do not have to)'
      ]
    }
  },
  {
    content: 'You ______ interrupt people while they are explaining their views.',
    options: ['A. should not', 'B. do not have to', 'C. must', 'D. have to'],
    answer: 'A',
    subTypeId: 'eng11-u2-grammar-negative',
    translation: {
      content: 'Cậu ______ ngắt lời người khác khi họ đang giải thích quan điểm của mình.',
      options: [
        'A. should not (Không nên làm: should not)',
        'B. do not have to',
        'C. must',
        'D. have to'
      ]
    }
  },
  {
    content: 'Which sentence means “It is not necessary for Minh to attend”?',
    options: ['A. Minh mustn’t attend.', 'B. Minh doesn’t have to attend.', 'C. Minh shouldn’t attend.', 'D. Minh cannot attend.'],
    answer: 'B',
    subTypeId: 'eng11-u2-grammar-negative',
    translation: {
      content: 'Câu nào có nghĩa là “Minh không cần thiết phải tham dự”?',
      options: [
        'A. Minh mustn’t attend.',
        'B. Minh doesn’t have to attend. (Minh không phải/không cần tham dự)',
        'C. Minh shouldn’t attend.',
        'D. Minh cannot attend.'
      ]
    }
  },
  {
    content: 'Choose the grammatically and semantically correct sentence about obligation.',
    options: ['A. You must to respect the rule.', 'B. You should to explain calmly.', 'C. You must not use this emergency exit except in an emergency.', 'D. You do not have respect others.'],
    answer: 'C',
    subTypeId: 'eng11-u2-grammar-negative',
    translation: {
      content: 'Chọn câu đúng ngữ pháp và ngữ nghĩa về sự bắt buộc/cấm đoán:',
      options: [
        'A. You must to respect the rule. (Sai thừa to)',
        'B. You should to explain calmly. (Sai thừa to)',
        'C. You must not use this emergency exit except in an emergency. (Đúng: Cấm dùng cửa thoát hiểm trừ trường hợp khẩn cấp)',
        'D. You do not have respect others. (Sai thiếu to)'
      ]
    }
  },
  {
    content: 'The museum entry is free, so visitors ______ buy a ticket, but they ______ touch the exhibits.',
    options: ['A. mustn’t / don’t have to', 'B. shouldn’t / have to', 'C. have to / should', 'D. don’t have to / mustn’t'],
    answer: 'D',
    subTypeId: 'eng11-u2-grammar-negative',
    translation: {
      content: 'Vé vào bảo tàng miễn phí, vì vậy du khách ______ mua vé, nhưng họ ______ chạm vào các hiện vật trưng bày.',
      options: [
        'A. mustn’t / don’t have to',
        'B. shouldn’t / have to',
        'C. have to / should',
        'D. don’t have to / mustn’t (Không cần mua vé / Cấm chạm vào hiện vật)'
      ]
    }
  }
];

const passage1: QuestionStimulus = {
  id: 'eng11-stim-u2-reading-1',
  title: 'A family technology agreement',
  content: `When the Tran family first tried to control phone use, they created a list of strict rules. The two teenagers felt that the rules treated them like young children, while their parents believed the limits were necessary. Arguments continued because each side discussed the rules only after someone had broken one.

The family later tried a different process. At a planned meeting, each person described one problem without interrupting the others. The parents were concerned that phones were reducing sleep and conversation. The teenagers explained that they used their devices for homework and to maintain friendships, not only for entertainment.

Instead of setting one limit for every situation, the family agreed on phone-free times and places. No one would use a phone during meals, and devices would charge outside bedrooms at night. However, the teenagers could request extra online time for school projects. The parents also accepted the same meal rule, which made the agreement feel fairer.

They also wrote down reasons for each rule, so a limit would not feel like an unexplained order. This detail helped everyone remember that the purpose was sleep, safety, and shared attention rather than control alone.

The new arrangement did not remove every disagreement. It did, however, give the family a shared method for solving them. They decided to review the agreement once a month and change rules that were not working. The main improvement came not from a perfect set of limits, but from allowing everyone to explain the needs behind their position.`
};

const passage2: QuestionStimulus = {
  id: 'eng11-stim-u2-reading-2',
  title: 'Different memories of the same age',
  content: `Adults sometimes compare teenagers’ lives with their own youth and conclude that young people have become less responsible. Such comparisons can be misleading because memory is selective. People may clearly remember the challenges they overcame while forgetting the help they received or the mistakes they made.

The environment has also changed. A teenager today may need to manage online communication, public social-media profiles, and a large flow of information. Their parents did not face these exact demands at the same age. This does not mean that current teenagers have harder lives in every way. Previous generations may have had fewer educational opportunities, stricter social expectations, or greater financial uncertainty.

Technology can even change the meaning of familiar behaviour: a teenager looking at a screen may be doing homework, receiving support from friends, or avoiding a difficult conversation, and the context matters greatly.

A fair comparison therefore requires curiosity rather than competition. Parents can ask how a new pressure affects their children, and teenagers can ask why an older experience shaped a family value. Both sides may then discover that a disagreement about behaviour is connected to a reasonable concern. A parent’s rule about spending, for example, may come from an earlier period of financial difficulty.

Recognising different contexts does not require families to accept every choice. It simply improves the quality of the discussion. When people examine the experiences behind an opinion, they are more likely to negotiate a practical rule than to dismiss the other generation as careless or old-fashioned.`
};

const passage3: QuestionStimulus = {
  id: 'eng11-stim-u2-reading-3',
  title: 'Reverse mentoring at a community centre',
  content: `A community centre created a reverse-mentoring programme in which teenagers helped older adults use digital services. In return, the older participants shared practical knowledge, such as budgeting, repairing household items, and preparing for job interviews. The organisers hoped that exchanging skills would reduce stereotypes between age groups.

At first, some teenagers assumed that every older learner would need the same basic instructions. They soon discovered wide differences: one participant had never used online banking, while another edited videos on a tablet. Older adults also had to adjust their expectations. A quiet teenager was not necessarily bored or disrespectful; she might simply be concentrating on the task.

The programme asked pairs to set one goal for each meeting and explain rather than take control of the device or activity. This rule slowed the first sessions but increased independence. Participants also discussed online safety. The teenagers contributed current technical knowledge, while older adults often asked careful questions about privacy and long-term consequences.

Attendance remained voluntary, and participants could change partners if their goals or communication styles did not match. This prevented the programme from treating cooperation as something that could simply be forced.

The organisers did not describe one generation as the teacher and the other as the student. Both roles changed throughout each session. By the end, many participants reported greater confidence in their own skills and more patience with people of a different age. The project suggests that direct cooperation can challenge generalisations more effectively than simply telling people not to hold them.`
};

const readingRows: Row[] = [
  {
    content: 'What is the main idea of the first passage?',
    options: ['A. A shared, flexible agreement improved how a family handled phone-use conflicts.', 'B. Teenagers should have unlimited online time.', 'C. Parents should make rules without discussion.', 'D. Phones should never be used for homework.'],
    answer: 'A',
    subTypeId: 'eng11-u2-read-main-detail',
    stimulus: passage1,
    translation: {
      content: 'Ý chính của đoạn văn thứ nhất là gì?',
      options: [
        'A. A shared, flexible agreement improved how a family handled phone-use conflicts. (Một thỏa thuận linh hoạt, dùng chung đã cải thiện cách gia đình xử lý xung đột dùng điện thoại.)',
        'B. Học sinh nên có thời gian dùng mạng không giới hạn.',
        'C. Cha mẹ nên đặt ra quy định mà không cần thảo luận.',
        'D. Điện thoại không bao giờ được dùng để làm bài tập.'
      ]
    }
  },
  {
    content: 'Why did the first set of rules fail?',
    options: ['A. They allowed too much homework.', 'B. The family discussed them mainly after a rule had been broken.', 'C. The parents had no concerns.', 'D. The teenagers did not own phones.'],
    answer: 'B',
    subTypeId: 'eng11-u2-read-main-detail',
    stimulus: passage1,
    translation: {
      content: 'Tại sao bộ quy định đầu tiên lại thất bại?',
      options: [
        'A. Chúng cho phép quá nhiều bài tập về nhà.',
        'B. The family discussed them mainly after a rule had been broken. (Gia đình chủ yếu chỉ thảo luận sau khi quy định đã bị vi phạm.)',
        'C. Cha mẹ không có lo ngại nào.',
        'D. Thanh thiếu niên không có điện thoại.'
      ]
    }
  },
  {
    content: 'Which rule applied to both parents and teenagers?',
    options: ['A. No online school projects', 'B. No devices in the house', 'C. No phone use during meals', 'D. No monthly review'],
    answer: 'C',
    subTypeId: 'eng11-u2-read-main-detail',
    stimulus: passage1,
    translation: {
      content: 'Quy định nào áp dụng cho cả cha mẹ lẫn con cái?',
      options: [
        'A. Không dự án trường học trực tuyến',
        'B. Không có thiết bị nào trong nhà',
        'C. No phone use during meals (Không dùng điện thoại trong bữa ăn)',
        'D. Không đánh giá hằng tháng'
      ]
    }
  },
  {
    content: 'According to the passage, what produced the main improvement?',
    options: ['A. Buying newer phones', 'B. Removing all limits', 'C. Charging phones at school', 'D. Letting everyone explain the needs behind their view'],
    answer: 'D',
    subTypeId: 'eng11-u2-read-main-detail',
    stimulus: passage1,
    translation: {
      content: 'Theo đoạn văn, điều gì tạo ra sự cải thiện chính?',
      options: [
        'A. Mua điện thoại mới hơn',
        'B. Gỡ bỏ mọi giới hạn',
        'C. Sạc điện thoại ở trường',
        'D. Letting everyone explain the needs behind their view (Cho phép mọi người giải thích nhu cầu đằng sau quan điểm của họ)'
      ]
    }
  },
  {
    content: 'What is the main purpose of passage 2?',
    options: ['A. To explain why comparisons between generations should consider different contexts', 'B. To prove that modern teenagers have the hardest lives', 'C. To show that memory is always accurate', 'D. To recommend accepting every choice'],
    answer: 'A',
    subTypeId: 'eng11-u2-read-main-detail',
    stimulus: passage2,
    translation: {
      content: 'Mục đích chính của đoạn văn 2 là gì?',
      options: [
        'A. To explain why comparisons between generations should consider different contexts (Giải thích tại sao việc so sánh giữa các thế hệ nên xem xét các bối cảnh khác nhau)',
        'B. Để chứng minh tuổi teen ngày nay có cuộc sống khó khăn nhất',
        'C. Để chứng minh ký ức luôn chính xác',
        'D. Để khuyên nên chấp nhận mọi lựa chọn'
      ]
    }
  },
  {
    content: 'Which challenge of earlier generations is mentioned?',
    options: ['A. Too many social-media profiles', 'B. Fewer educational opportunities', 'C. Online banking fraud', 'D. Excessive video editing'],
    answer: 'B',
    subTypeId: 'eng11-u2-read-main-detail',
    stimulus: passage2,
    translation: {
      content: 'Thách thức nào của các thế hệ trước được đề cập?',
      options: [
        'A. Quá nhiều hồ sơ mạng xã hội',
        'B. Fewer educational opportunities (Ít cơ hội giáo dục hơn)',
        'C. Lừa đảo ngân hàng trực tuyến',
        'D. Chỉnh sửa video quá nhiều'
      ]
    }
  },
  {
    content: 'The phrase “This does not mean” in passage 2 mainly prevents readers from concluding that:',
    options: ['A. memories can be selective', 'B. parents had no childhood', 'C. teenagers today have harder lives in every way', 'D. online communication exists'],
    answer: 'C',
    subTypeId: 'eng11-u2-read-infer-attitude',
    stimulus: passage2,
    translation: {
      content: 'Cụm từ “This does not mean” trong đoạn 2 chủ yếu ngăn người đọc kết luận rằng:',
      options: [
        'A. ký ức có thể chọn lọc',
        'B. cha mẹ không có tuổi thơ',
        'C. teenagers today have harder lives in every way (thanh thiếu niên ngày nay có cuộc sống khó khăn hơn về mọi mặt)',
        'D. giao tiếp trực tuyến tồn tại'
      ]
    }
  },
  {
    content: 'What can be inferred about the writer’s attitude in passage 2?',
    options: ['A. The writer blames only teenagers.', 'B. The writer wants families to avoid all rules.', 'C. The writer believes older experiences are irrelevant.', 'D. The writer supports curious, balanced discussion rather than competition.'],
    answer: 'D',
    subTypeId: 'eng11-u2-read-infer-attitude',
    stimulus: passage2,
    translation: {
      content: 'Có thể suy ra điều gì về thái độ của tác giả trong đoạn 2?',
      options: [
        'A. Tác giả chỉ đổ lỗi cho thanh thiếu niên.',
        'B. Tác giả muốn các gia đình tránh mọi quy định.',
        'C. Tác giả tin rằng trải nghiệm cũ là không liên quan.',
        'D. The writer supports curious, balanced discussion rather than competition. (Tác giả ủng hộ sự thảo luận tò mò, cân bằng hơn là sự cạnh tranh thắng thua.)'
      ]
    }
  },
  {
    content: 'Why was the programme called reverse mentoring?',
    options: ['A. Teenagers taught some digital skills while older adults also shared expertise.', 'B. Older adults completed all tasks for teenagers.', 'C. Participants met in reverse order.', 'D. The centre stopped all teaching.'],
    answer: 'A',
    subTypeId: 'eng11-u2-read-infer-attitude',
    stimulus: passage3,
    translation: {
      content: 'Tại sao chương trình lại được gọi là "cố vấn ngược" (reverse mentoring)?',
      options: [
        'A. Teenagers taught some digital skills while older adults also shared expertise. (Thanh thiếu niên dạy một số kỹ năng số trong khi người lớn tuổi cũng chia sẻ chuyên môn.)',
        'B. Người lớn tuổi làm tất cả nhiệm vụ cho thanh thiếu niên.',
        'C. Người tham gia gặp nhau theo thứ tự ngược.',
        'D. Trung tâm ngừng dạy học.'
      ]
    }
  },
  {
    content: 'What did participants learn about age groups?',
    options: ['A. Every older adult needed identical lessons.', 'B. Individuals within one generation had very different skills and behaviours.', 'C. Quiet teenagers were always bored.', 'D. Only teenagers understood privacy.'],
    answer: 'B',
    subTypeId: 'eng11-u2-read-infer-attitude',
    stimulus: passage3,
    translation: {
      content: 'Người tham gia đã học được điều gì về các nhóm tuổi?',
      options: [
        'A. Mọi người lớn tuổi đều cần bài học giống hệt nhau.',
        'B. Individuals within one generation had very different skills and behaviours. (Các cá nhân trong cùng một thế hệ có kỹ năng và hành vi rất khác nhau.)',
        'C. Thanh thiếu niên im lặng luôn thấy chán nản.',
        'D. Chỉ có thanh thiếu niên mới hiểu về sự riêng tư.'
      ]
    }
  },
  {
    content: 'Why were pairs asked to explain rather than take control?',
    options: ['A. To make sessions shorter', 'B. To avoid setting goals', 'C. To help the learner become more independent', 'D. To prevent discussion of safety'],
    answer: 'C',
    subTypeId: 'eng11-u2-read-infer-attitude',
    stimulus: passage3,
    translation: {
      content: 'Tại sao các cặp được yêu cầu giải thích thay vì trực tiếp điều khiển thiết bị?',
      options: [
        'A. Để làm các buổi học ngắn hơn',
        'B. Để tránh đặt mục tiêu',
        'C. To help the learner become more independent (Để giúp người học trở nên độc lập hơn)',
        'D. Để ngăn thảo luận về an toàn'
      ]
    }
  },
  {
    content: 'Which conclusion about reverse mentoring is best supported by passage 3?',
    options: ['A. Stereotypes disappear after one conversation.', 'B. Technical knowledge is the only useful knowledge.', 'C. Generations should learn separately.', 'D. Cooperative experience can challenge stereotypes through direct evidence.'],
    answer: 'D',
    subTypeId: 'eng11-u2-read-infer-attitude',
    stimulus: passage3,
    translation: {
      content: 'Kết luận nào về cố vấn ngược được ủng hộ tốt nhất bởi đoạn 3?',
      options: [
        'A. Định kiến biến mất sau một cuộc trò chuyện.',
        'B. Kiến thức kỹ thuật là kiến thức duy nhất có ích.',
        'C. Các thế hệ nên học riêng biệt.',
        'D. Cooperative experience can challenge stereotypes through direct evidence. (Trải nghiệm hợp tác có thể thách thức các định kiến thông qua bằng chứng trực tiếp.)'
      ]
    }
  }
];

const writingRows: Row[] = [
  {
    content: 'Choose the best order: (a) Finally, they agreed on quiet study hours. (b) Lan and her brother often argued about noise. (c) They first explained when each person needed silence.',
    options: ['A. b-c-a', 'B. a-b-c', 'C. c-a-b', 'D. b-a-c'],
    answer: 'A',
    subTypeId: 'eng11-u2-write-order',
    translation: {
      content: 'Chọn thứ tự tốt nhất: (a) Cuối cùng, hai anh em đã đồng ý về giờ học tập yên tĩnh. (b) Lan và anh trai thường cãi nhau về tiếng ồn. (c) Đầu tiên họ giải thích khi nào mỗi người cần sự yên tĩnh.',
      options: ['A. b-c-a', 'B. a-b-c', 'C. c-a-b', 'D. b-a-c']
    }
  },
  {
    content: 'Choose the best topic sentence for a paragraph about solving family disagreements.',
    options: ['A. Some tables are made of wood.', 'B. Respectful communication can turn disagreements into practical solutions.', 'C. Yesterday was Tuesday.', 'D. Therefore, this happened.'],
    answer: 'B',
    subTypeId: 'eng11-u2-write-order',
    translation: {
      content: 'Chọn câu chủ đề tốt nhất cho đoạn văn về giải quyết các bất đồng trong gia đình.',
      options: [
        'A. Một số chiếc bàn làm bằng gỗ.',
        'B. Respectful communication can turn disagreements into practical solutions. (Giao tiếp tôn trọng có thể biến các bất đồng thành những giải pháp thực tế.)',
        'C. Hôm qua là thứ Ba.',
        'D. Do đó, điều này đã xảy ra.'
      ]
    }
  },
  {
    content: 'Choose the connector: “Parents may worry about online safety. ______, teenagers may need the internet for schoolwork.”',
    options: ['A. Therefore', 'B. For example', 'C. However', 'D. As a result'],
    answer: 'C',
    subTypeId: 'eng11-u2-write-order',
    translation: {
      content: 'Chọn từ nối: “Cha mẹ có thể lo lắng về an toàn trực tuyến. ______, thanh thiếu niên có thể cần internet để làm bài tập ở trường.”',
      options: [
        'A. Do đó (Therefore)',
        'B. Ví dụ (For example)',
        'C. However (Tuy nhiên)',
        'D. Kết quả là (As a result)'
      ]
    }
  },
  {
    content: 'A: Arrange the paragraph: (a) As a result, both sides understood the problem better. (b) First, each person described their concern. (c) Then, they asked questions without interrupting.',
    options: ['A. a-b-c', 'B. c-b-a', 'C. b-a-c', 'D. b-c-a'],
    answer: 'D',
    subTypeId: 'eng11-u2-write-order',
    representationType: 'dialogue',
    translation: {
      content: 'A: Sắp xếp đoạn văn: (a) Kết quả là, cả hai bên đều hiểu rõ hơn về vấn đề. (b) Đầu tiên, mỗi người mô tả mối lo ngại của mình. (c) Sau đó, họ đặt câu hỏi mà không ngắt lời nhau.',
      options: ['A. a-b-c', 'B. c-b-a', 'C. b-a-c', 'D. b-c-a']
    }
  },
  {
    content: 'Which sentence does NOT support the topic “Family rules should be reviewed regularly”?',
    options: ['A. My uncle owns a blue bicycle.', 'B. Children’s needs change as they grow.', 'C. A rule may create an unexpected problem.', 'D. Regular discussion helps families adjust unfair rules.'],
    answer: 'A',
    subTypeId: 'eng11-u2-write-order',
    translation: {
      content: 'Câu nào KHÔNG bổ trợ cho chủ đề “Quy định gia đình nên được xem xét lại định kỳ”?',
      options: [
        'A. My uncle owns a blue bicycle. (Chú tớ sở hữu một chiếc xe đạp màu xanh - Không liên quan)',
        'B. Nhu cầu của trẻ em thay đổi khi chúng lớn lên.',
        'C. Một quy định có thể tạo ra một vấn đề không lường trước.',
        'D. Thảo luận định kỳ giúp gia đình điều chỉnh các quy định chưa hợp lý.'
      ]
    }
  },
  {
    content: 'Choose the best concluding sentence for a paragraph presenting two generations’ views and a compromise.',
    options: ['A. The first opinion belonged to the parents.', 'B. This solution respects both safety and growing independence.', 'C. Some teenagers are sixteen.', 'D. Families live in many countries.'],
    answer: 'B',
    subTypeId: 'eng11-u2-write-order',
    translation: {
      content: 'Chọn câu kết luận tốt nhất cho một đoạn văn trình bày quan điểm của hai thế hệ và một sự thỏa hiệp.',
      options: [
        'A. Ý kiến đầu tiên thuộc về cha mẹ.',
        'B. This solution respects both safety and growing independence. (Giải pháp này tôn trọng cả sự an toàn lẫn tính độc lập đang phát triển.)',
        'C. Một số thanh thiếu niên 16 tuổi.',
        'D. Các gia đình sống ở nhiều quốc gia.'
      ]
    }
  },
  {
    content: 'Choose the closest meaning: “It is necessary for students to follow the safety rule.”',
    options: ['A. Students should ignore the safety rule.', 'B. Students do not have to follow it.', 'C. Students have to follow the safety rule.', 'D. Students mustn’t follow it.'],
    answer: 'C',
    subTypeId: 'eng11-u2-write-transform',
    translation: {
      content: 'Chọn câu gần nghĩa nhất: “Học sinh cần thiết phải tuân thủ quy định an toàn.”',
      options: [
        'A. Học sinh nên lờ đi quy định an toàn.',
        'B. Học sinh không phải tuân thủ nó.',
        'C. Students have to follow the safety rule. (Học sinh phải tuân thủ quy định an toàn - Have to = It is necessary to)',
        'D. Học sinh không được phép tuân thủ nó.'
      ]
    }
  },
  {
    content: 'A: “It is not necessary for you to come early.” Which sentence is equivalent?',
    options: ['A. You mustn’t come early.', 'B. You shouldn’t come early.', 'C. You cannot come early.', 'D. You do not have to come early.'],
    answer: 'D',
    subTypeId: 'eng11-u2-write-transform',
    representationType: 'dialogue',
    translation: {
      content: 'A: “Cậu không cần thiết phải đến sớm.” Câu nào tương đương?',
      options: [
        'A. Cậu không được đến sớm.',
        'B. Cậu không nên đến sớm.',
        'C. Cậu không thể đến sớm.',
        'D. You do not have to come early. (Cậu không phải/không cần đến sớm.)'
      ]
    }
  },
  {
    content: 'Choose the closest meaning: “It is advisable to listen before responding.”',
    options: ['A. You should listen before responding.', 'B. You must not listen.', 'C. You do not have to listen.', 'D. You are forbidden to respond.'],
    answer: 'A',
    subTypeId: 'eng11-u2-write-transform',
    translation: {
      content: 'Chọn câu gần nghĩa nhất: “Nên lắng nghe trước khi phản hồi.”',
      options: [
        'A. You should listen before responding. (Cậu nên lắng nghe trước khi phản hồi - Should = It is advisable to)',
        'B. Cậu không được phép lắng nghe.',
        'C. Cậu không cần phải lắng nghe.',
        'D. Cậu bị cấm phản hồi.'
      ]
    }
  },
  {
    content: 'Choose the best combination: “The parents were worried. They listened to their daughter’s explanation.”',
    options: ['A. Because they listened, they were never worried.', 'B. Although the parents were worried, they listened to their daughter’s explanation.', 'C. The parents were worried unless they listened.', 'D. The parents listened so that they became worried.'],
    answer: 'B',
    subTypeId: 'eng11-u2-write-transform',
    translation: {
      content: 'Chọn câu kết hợp tốt nhất: “Cha mẹ đang lo lắng. Họ đã lắng nghe lời giải thích của con gái.”',
      options: [
        'A. Vì họ lắng nghe nên họ không bao giờ lo lắng.',
        'B. Although the parents were worried, they listened to their daughter’s explanation. (Mặc dù cha mẹ lo lắng, họ vẫn lắng nghe lời giải thích của con gái.)',
        'C. Sai cấu trúc.',
        'D. Sai ngữ nghĩa.'
      ]
    }
  },
  {
    content: 'Which revision is most constructive?',
    options: ['A. My parents are old-fashioned and wrong.', 'B. Parents never understand anything.', 'C. My parents and I have different views, so we need to discuss the reasons behind them.', 'D. There is no point in talking.'],
    answer: 'C',
    subTypeId: 'eng11-u2-write-transform',
    translation: {
      content: 'Bản sửa đổi nào mang tính xây dựng nhất?',
      options: [
        'A. Cha mẹ tớ cổ hủ và sai lầm.',
        'B. Cha mẹ chẳng bao giờ hiểu điều gì.',
        'C. My parents and I have different views, so we need to discuss the reasons behind them. (Cha mẹ tớ và tớ có quan điểm khác nhau, vì vậy chúng tớ cần thảo luận về những lý do đằng sau chúng.)',
        'D. Chẳng có ích gì khi nói chuyện.'
      ]
    }
  },
  {
    content: 'Choose the best final sentence for an email proposing a family discussion.',
    options: ['A. Emails use written words.', 'B. I have a family.', 'C. Rules are nouns.', 'D. Could we talk about this together after dinner tonight?'],
    answer: 'D',
    subTypeId: 'eng11-u2-write-transform',
    translation: {
      content: 'Chọn câu kết thúc tốt nhất cho email đề xuất một cuộc thảo luận gia đình.',
      options: [
        'A. Email dùng chữ viết.',
        'B. Tớ có một gia đình.',
        'C. Quy định là danh từ.',
        'D. Could we talk about this together after dinner tonight? (Chúng mình có thể cùng nhau nói về chuyện này sau bữa tối nay được không?)'
      ]
    }
  }
];

const communicationRows: Row[] = [
  {
    content: 'A: “In my view, family rules should apply to everyone.” B: “______ That makes them feel fairer.”',
    options: ['A. I completely agree.', 'B. I refuse to listen.', 'C. That is not a family.', 'D. Rules are words.'],
    answer: 'A',
    subTypeId: 'eng11-u2-comm-opinion',
    representationType: 'dialogue',
    translation: {
      content: 'A: “Theo quan điểm của tớ, quy định gia đình nên áp dụng cho tất cả mọi người.” B: “______ Điều đó làm cho các quy định có vẻ công bằng hơn.”',
      options: [
        'A. I completely agree. (Tớ hoàn toàn đồng ý.)',
        'B. Tớ từ chối lắng nghe.',
        'C. Đó không phải là gia đình.',
        'D. Quy định là các từ.'
      ]
    }
  },
  {
    content: 'A: “Teenagers should never question a family rule.” B: “______ Asking respectfully can help clarify its purpose.”',
    options: ['A. Exactly.', 'B. I’m not sure I agree.', 'C. That is impossible grammar.', 'D. Never speak again.'],
    answer: 'B',
    subTypeId: 'eng11-u2-comm-opinion',
    representationType: 'dialogue',
    translation: {
      content: 'A: “Thanh thiếu niên không bao giờ được thắc mắc về quy định gia đình.” B: “______ Hỏi một cách tôn trọng có thể giúp làm rõ mục đích của quy định.”',
      options: [
        'A. Chính xác.',
        'B. I’m not sure I agree. (Tớ không chắc là tớ đồng ý.)',
        'C. Đó là ngữ pháp không thể.',
        'D. Đừng bao giờ nói nữa.'
      ]
    }
  },
  {
    content: 'Which sentence states an opinion politely?',
    options: ['A. Everyone else is stupid.', 'B. There is only one answer: mine.', 'C. From my perspective, both generations need to listen more carefully.', 'D. Stop disagreeing.'],
    answer: 'C',
    subTypeId: 'eng11-u2-comm-opinion',
    representationType: 'text',
    translation: {
      content: 'Câu nào nêu quan điểm một cách lịch sự?',
      options: [
        'A. Những người khác đều ngốc ngếch.',
        'B. Chỉ có một câu trả lời: của tớ.',
        'C. From my perspective, both generations need to listen more carefully. (Theo góc nhìn của tớ, cả hai thế hệ đều cần lắng nghe cẩn thận hơn.)',
        'D. Thôi bất đồng ý kiến đi.'
      ]
    }
  },
  {
    content: 'A: “Parents worry because they are responsible for safety.” B: “______ teenagers also need chances to make decisions.”',
    options: ['A. That sentence is long, and', 'B. You have no idea because', 'C. Safety does not exist, but', 'D. I see your point, but'],
    answer: 'D',
    subTypeId: 'eng11-u2-comm-opinion',
    representationType: 'dialogue',
    translation: {
      content: 'A: “Cha mẹ lo lắng vì họ chịu trách nhiệm về sự an toàn.” B: “______ thanh thiếu niên cũng cần cơ hội để đưa ra quyết định.”',
      options: [
        'A. Câu đó dài, và',
        'B. Cậu chẳng biết gì cả vì',
        'C. An toàn không tồn tại, nhưng',
        'D. I see your point, but (Tớ hiểu ý cậu, nhưng...)'
      ]
    }
  },
  {
    content: 'Which response disagrees with an idea rather than attacking the speaker?',
    options: ['A. I understand your concern; however, I think the rule is too broad.', 'B. You are completely unreasonable.', 'C. Only an old person would say that.', 'D. Your opinion is ridiculous.'],
    answer: 'A',
    subTypeId: 'eng11-u2-comm-opinion',
    representationType: 'text',
    translation: {
      content: 'Phản hồi nào phản bác một ý kiến thay vì tấn công người nói?',
      options: [
        'A. I understand your concern; however, I think the rule is too broad. (Tớ hiểu sự lo lắng của cậu; tuy nhiên, tớ nghĩ quy định này quá rộng.)',
        'B. Cậu hoàn toàn vô lý.',
        'C. Chỉ có người già mới nói thế.',
        'D. Ý kiến của cậu thật nực cười.'
      ]
    }
  },
  {
    content: 'A: “Young people do not value traditions.” B: “______ Many of us value them but express them differently.”',
    options: ['A. Traditions are old.', 'B. I don’t think that is true for everyone.', 'C. You must stop.', 'D. People are young.'],
    answer: 'B',
    subTypeId: 'eng11-u2-comm-opinion',
    representationType: 'dialogue',
    translation: {
      content: 'A: “Giới trẻ không coi trọng truyền thống.” B: “______ Nhiều người trong chúng tớ coi trọng nhưng thể hiện chúng theo cách khác.”',
      options: [
        'A. Truyền thống đã cũ.',
        'B. I don’t think that is true for everyone. (Tớ không nghĩ điều đó đúng với tất cả mọi người.)',
        'C. Cậu phải dừng lại.',
        'D. Mọi người còn trẻ.'
      ]
    }
  },
  {
    content: 'A: “We need more privacy.” B: “Do you mean you want us to knock before entering?” This response is used to:',
    options: ['A. clarify the speaker’s meaning', 'B. end the conversation', 'C. forbid privacy', 'D. change the topic'],
    answer: 'A',
    subTypeId: 'eng11-u2-comm-compromise',
    representationType: 'dialogue',
    translation: {
      content: 'A: “Chúng con cần sự riêng tư hơn.” B: “Ý con là con muốn bố mẹ gõ cửa trước khi vào à?” Phản hồi này được dùng để:',
      options: [
        'A. clarify the speaker’s meaning (làm rõ ý của người nói)',
        'B. kết thúc cuộc trò chuyện',
        'C. cấm đoán sự riêng tư',
        'D. thay đổi chủ đề'
      ]
    }
  },
  {
    content: 'A: “You want more freedom, and we are worried about safety.” B: “______ agreeing on a later weekend curfew first?”',
    options: ['A. Why did', 'B. How about', 'C. Must we', 'D. You cannot'],
    answer: 'B',
    subTypeId: 'eng11-u2-comm-compromise',
    representationType: 'dialogue',
    translation: {
      content: 'A: “Con muốn tự do hơn, còn bố mẹ lo lắng về sự an toàn.” B: “______ việc thống nhất trước về giờ nghiêm quân/giờ về nhà trễ hơn vào cuối tuần xem sao?”',
      options: [
        'A. Why did',
        'B. How about (How about + V-ing: đề xuất thỏa hiệp)',
        'C. Must we',
        'D. You cannot'
      ]
    }
  },
  {
    content: 'Which sentence asks for clarification most politely?',
    options: ['A. Speak clearly.', 'B. That makes no sense.', 'C. Could you explain what you mean by “responsible use”?', 'D. Do not use that phrase.'],
    answer: 'C',
    subTypeId: 'eng11-u2-comm-compromise',
    representationType: 'text',
    translation: {
      content: 'Câu nào yêu cầu giải thích rõ hơn một cách lịch sự nhất?',
      options: [
        'A. Nói rõ ra.',
        'B. Điều đó chẳng có lý chút nào.',
        'C. Could you explain what you mean by “responsible use”? (Cậu có thể giải thích ý cậu là gì khi nói “sử dụng có trách nhiệm” không?)',
        'D. Đừng dùng cụm từ đó.'
      ]
    }
  },
  {
    content: 'A: “I need quiet to study, but you want to practise music.” B: “______”',
    options: ['A. Music always wins.', 'B. Studying is your problem.', 'C. We cannot discuss it.', 'D. Could we agree on separate times for both activities?'],
    answer: 'D',
    subTypeId: 'eng11-u2-comm-compromise',
    representationType: 'dialogue',
    translation: {
      content: 'A: “Tớ cần sự yên tĩnh để học bài, nhưng cậu lại muốn tập nhạc.” B: “______”',
      options: [
        'A. Âm nhạc luôn thắng.',
        'B. Học tập là việc của cậu.',
        'C. Chúng ta không thể thảo luận.',
        'D. Could we agree on separate times for both activities? (Chúng mình có thể thống nhất khung giờ riêng cho cả hai hoạt động được không?)'
      ]
    }
  },
  {
    content: 'Which proposal is a genuine compromise?',
    options: ['A. Phones stay outside bedrooms on school nights, but weekend use can be discussed.', 'B. Only my preference matters.', 'C. No one explains any concern.', 'D. One side accepts every demand.'],
    answer: 'A',
    subTypeId: 'eng11-u2-comm-compromise',
    representationType: 'text',
    translation: {
      content: 'Đề xuất nào là một sự thỏa hiệp thực sự?',
      options: [
        'A. Phones stay outside bedrooms on school nights, but weekend use can be discussed. (Điện thoại để ngoài phòng ngủ vào các tối đi học, nhưng việc dùng vào cuối tuần có thể thảo luận.)',
        'B. Chỉ có sở thích của tớ là quan trọng.',
        'C. Không ai giải thích sự lo ngại nào.',
        'D. Một bên chấp nhận mọi yêu cầu.'
      ]
    }
  },
  {
    content: 'A: “Could we review this rule after a month?” B: “______ Then we can see whether it works.”',
    options: ['A. Reviews are difficult words.', 'B. That seems reasonable.', 'C. I will never discuss it.', 'D. A month has days.'],
    answer: 'B',
    subTypeId: 'eng11-u2-comm-compromise',
    representationType: 'dialogue',
    translation: {
      content: 'A: “Chúng ta có thể xem xét lại quy định này sau 1 tháng được không?” B: “______ Sau đó chúng ta có thể xem liệu nó có hiệu quả không.”',
      options: [
        'A. Xem xét là các từ khó.',
        'B. That seems reasonable. (Điều đó nghe có vẻ hợp lý đấy.)',
        'C. Tớ sẽ không bao giờ thảo luận.',
        'D. Một tháng có các ngày.'
      ]
    }
  }
];

export const g11EnglishModule2Questions: CourseQuestion[] = [
  ...buildQuestions('pron', 'eng11-qt-u2-pronunciation', 'eng11-u2-language', 'eng11-out-u2-pronunciation', pronunciationRows),
  ...buildQuestions('vocab', 'eng11-qt-u2-vocabulary', 'eng11-u2-language', 'eng11-out-u2-vocabulary', vocabularyRows),
  ...buildQuestions('grammar', 'eng11-qt-u2-grammar', 'eng11-u2-language', 'eng11-out-u2-grammar', grammarRows),
  ...buildQuestions('reading', 'eng11-qt-u2-reading', 'eng11-u2-reading', 'eng11-out-u2-reading', readingRows),
  ...buildQuestions('writing', 'eng11-qt-u2-writing', 'eng11-u2-writing', 'eng11-out-u2-writing', writingRows),
  ...buildQuestions('comm', 'eng11-qt-u2-communication', 'eng11-u2-communication-culture', 'eng11-out-u2-communication', communicationRows)
];
