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
      id: `eng11-q-u7-${key}-${String(index + 1).padStart(2, '0')}`,
      courseId: 'grade11:english', moduleId: 'eng11-m7', lessonId: `eng11-u7-${lesson}`,
      subjectId: 'english', topicId: 'eng11-topic-u7', questionTypeId: `eng11-qt-u7-${key}`,
      content: row.p, options: choices.map((v, i) => `${letters[i]}. ${v}`) as [string, string, string, string],
      correctAnswer: letters[position], responseType: 'single_choice', validatorType: 'choice',
      translation: row.translation,
      difficulty: difficulties[index], points: 0.25, sourceType: 'manual', outcomeIds: [`eng11-out-u7-${key}`],
      subTypeId: `eng11-u7-${key}-${index < 6 ? subTypes[0] : subTypes[1]}`,
      practiceRole: roles[index % 6], representationType: row.representation ?? (index % 4 === 3 ? 'dialogue' : 'text'),
      isMasteryHoldout: index % 6 === 5, stimulus: row.stimulus
    };
  });
const pronunciation: Raw[] = [
  {
    p: 'Which question normally ends with rising intonation?',
    c: 'Are you applying this year?',
    w: ['Where will you study?', 'Why did you choose it?', 'Which course is cheaper?'],
    translation: {
      content: 'Câu hỏi nào thường kết thúc với ngữ điệu lên giọng?',
      options: ['A. Are you applying this year? (Câu hỏi Yes/No thường lên giọng cuối)', 'B. Where will you study?', 'C. Why did you choose it?', 'D. Which course is cheaper?']
    }
  },
  {
    p: 'A neutral Yes/No question generally invites:',
    c: 'confirmation with a rising tone',
    w: ['a content answer with a final fall only', 'no response', 'a list of three items'],
    translation: {
      content: 'Một câu hỏi Yes/No trung tính thường mời gọi:',
      options: ['A. câu trả lời nội dung với xuống giọng ở cuối', 'B. confirmation with a rising tone (sự xác nhận với một tông giọng lên)', 'C. không có phản hồi', 'D. một danh sách gồm 3 mục']
    }
  },
  {
    p: 'How does “Can I visit the campus?” commonly end?',
    c: 'with rising intonation',
    w: ['with compulsory falling intonation', 'without a final pitch', 'with equal stress everywhere'],
    translation: {
      content: 'Câu “Can I visit the campus?” thường kết thúc như thế nào?',
      options: ['A. với ngữ điệu xuống giọng bắt buộc', 'B. không có cao độ ở cuối', 'C. with rising intonation (với ngữ điệu lên giọng)', 'D. với trọng âm bằng nhau ở mọi từ']
    }
  },
  {
    p: 'A: “Is the deadline Friday?” B: “Use a ______ tone for a neutral check.”',
    c: 'rising',
    w: ['falling Wh-', 'flat written', 'silent'],
    representation: 'dialogue',
    translation: {
      content: 'A: “Hạn chót có phải là thứ Sáu không?” B: “Hãy dùng tông giọng ______ cho một sự kiểm tra trung tính.”',
      options: ['A. xuống giọng kiểu Wh-', 'B. bằng phẳng', 'C. câm', 'D. rising (lên giọng)']
    }
  },
  {
    p: 'Which statement about Yes/No intonation is safest?',
    c: 'A rise is common, but context can change the tone.',
    w: ['A rise is mandatory in every situation.', 'All Yes/No questions fall.', 'Intonation depends only on punctuation.'],
    translation: {
      content: 'Phát biểu nào về ngữ điệu câu hỏi Yes/No là an toàn nhất?',
      options: ['A. A rise is common, but context can change the tone. (Lên giọng là phổ biến, nhưng bối cảnh có thể thay đổi tông giọng.)', 'B. Lên giọng là bắt buộc trong mọi tình huống', 'C. Tất cả các câu hỏi Yes/No đều xuống giọng', 'D. Ngữ điệu chỉ phụ thuộc vào dấu câu']
    }
  },
  {
    p: 'A falling Yes/No question may sound more:',
    c: 'definite or checking',
    w: ['like an unfinished list', 'like no question exists', 'grammatically passive'],
    translation: {
      content: 'Một câu hỏi Yes/No xuống giọng có thể nghe có vẻ:',
      options: ['A. giống như một danh sách chưa xong', 'B. definite or checking (chắc chắn hơn hoặc mang tính kiểm tra/đối chiếu)', 'C. như không có câu hỏi nào tồn tại', 'D. mang ngữ pháp bị động']
    }
  },
  {
    p: 'Which question normally ends with falling intonation?',
    c: 'What qualification will you gain?',
    w: ['Have you applied?', 'Can you attend?', 'Is tuition included?'],
    translation: {
      content: 'Câu hỏi nào thường kết thúc bằng ngữ điệu xuống giọng?',
      options: ['A. Have you applied?', 'B. Can you attend?', 'C. What qualification will you gain? (Câu hỏi Wh- thường xuống giọng ở cuối)', 'D. Is tuition included?']
    }
  },
  {
    p: 'A: “Where is the training centre?” B: “A neutral Wh-question usually ______.”',
    c: 'falls at the end',
    w: ['rises like every Yes/No question', 'deletes the Wh-word', 'has no stress'],
    representation: 'dialogue',
    translation: {
      content: 'A: “Trung tâm đào tạo ở đâu?” B: “Một câu hỏi Wh- trung tính thường ______.”',
      options: ['A. lên giọng như mọi câu hỏi Yes/No', 'B. xóa từ Wh-', 'C. không có trọng âm', 'D. falls at the end (xuống giọng ở cuối)']
    }
  },
  {
    p: 'Why do neutral Wh-questions often fall?',
    c: 'They request specific information and sound complete.',
    w: ['They require yes or no.', 'They are statements.', 'Their spelling is longer.'],
    translation: {
      content: 'Tại sao các câu hỏi Wh- trung tính thường xuống giọng?',
      options: ['A. They request specific information and sound complete. (Chúng yêu cầu thông tin cụ thể và nghe hoàn chỉnh.)', 'B. Chúng đòi hỏi yes hoặc no', 'C. Chúng là các câu trần thuật', 'D. Cách đánh vần của chúng dài hơn']
    }
  },
  {
    p: 'A rising tone on “What course?” may signal:',
    c: 'surprise or a request to repeat',
    w: ['that it is no longer a question', 'a guaranteed command', 'past perfect grammar'],
    translation: {
      content: 'Một tông giọng lên ở câu “What course?” có thể ra hiệu:',
      options: ['A. rằng nó không còn là một câu hỏi', 'B. surprise or a request to repeat (sự ngạc nhiên hoặc lời yêu cầu nhắc lại)', 'C. một mệnh lệnh chắc chắn', 'D. ngữ pháp quá khứ hoàn thành']
    }
  },
  {
    p: 'Which pair is matched correctly?',
    c: 'Yes/No—usually rise; Wh—usually fall',
    w: ['Yes/No—always fall; Wh—always rise', 'Both—no tone', 'Both—rise in every context'],
    translation: {
      content: 'Cặp nào được ghép chính xác?',
      options: ['A. Yes/No—luôn xuống; Wh—luôn lên', 'B. Cả hai—không có tông giọng', 'C. Yes/No—usually rise; Wh—usually fall (Yes/No - thường lên; Wh- - thường xuống)', 'D. Cả hai—lên giọng trong mọi bối cảnh']
    }
  },
  {
    p: 'What should determine a final intonation choice?',
    c: 'Question type plus communicative context',
    w: ['Word length only', 'The number of letters', 'A fixed rule without exceptions'],
    translation: {
      content: 'Điều gì nên quyết định việc lựa chọn ngữ điệu cuối câu?',
      options: ['A. Chỉ độ dài từ', 'B. Số lượng chữ cái', 'C. Quy tắc cố định không có ngoại lệ', 'D. Question type plus communicative context (Loại câu hỏi cộng với bối cảnh giao tiếp)']
    }
  }
];
const vocabulary: Raw[] = [
  {
    p: 'A programme leading to an academic university qualification is a:',
    c: 'degree programme',
    w: ['workplace shift', 'school fee', 'career survey'],
    translation: {
      content: 'Một chương trình dẫn đến một bằng cấp đại học hàn lâm là một:',
      options: ['A. degree programme (chương trình cấp bằng/cử nhân)', 'B. workplace shift', 'C. school fee', 'D. career survey']
    }
  },
  {
    p: 'Education focused on practical occupational skills is:',
    c: 'vocational education',
    w: ['general weather', 'tuition prospect', 'academic location'],
    translation: {
      content: 'Giáo dục tập trung vào các kỹ năng nghề nghiệp thực tế là:',
      options: ['A. general weather', 'B. vocational education (giáo dục nghề nghiệp / dạy nghề)', 'C. tuition prospect', 'D. academic location']
    }
  },
  {
    p: 'Training that combines paid workplace experience and study is an:',
    c: 'apprenticeship',
    w: ['admission office', 'application fee', 'entry grade'],
    translation: {
      content: 'Đào tạo kết hợp giữa trải nghiệm làm việc được trả lương và việc học là một:',
      options: ['A. admission office', 'B. application fee', 'C. apprenticeship (chương trình vừa học vừa làm / học nghề)', 'D. entry grade']
    }
  },
  {
    p: 'A: “What are entry requirements?” B: “They are ______.”',
    c: 'conditions applicants must meet',
    w: ['the cost of transport only', 'jobs after retirement', 'optional brochure colours'],
    representation: 'dialogue',
    translation: {
      content: 'A: “Entry requirements (yêu cầu đầu vào) là gì?” B: “Chúng là ______.”',
      options: ['A. chỉ chi phí di chuyển', 'B. công việc sau khi nghỉ hưu', 'C. màu sắc brochure tùy chọn', 'D. conditions applicants must meet (các điều kiện ứng viên phải đáp ứng)']
    }
  },
  {
    p: 'Money charged for teaching by an institution is called:',
    c: 'tuition fees',
    w: ['career prospects', 'qualifications', 'work placements'],
    translation: {
      content: 'Số tiền phải trả cho việc giảng dạy của một cơ sở giáo dục được gọi là:',
      options: ['A. tuition fees (học phí)', 'B. career prospects', 'C. qualifications', 'D. work placements']
    }
  },
  {
    p: 'The possibility of future employment and progress is described as:',
    c: 'career prospects',
    w: ['entry tuition', 'vocational admission', 'application learning'],
    translation: {
      content: 'Khả năng có việc làm và sự tiến thân trong tương lai được mô tả là:',
      options: ['A. entry tuition', 'B. career prospects (triển vọng nghề nghiệp)', 'C. vocational admission', 'D. application learning']
    }
  },
  {
    p: 'Choose the correct collocation for admission.',
    c: 'apply for a course',
    w: ['apply a course into', 'do an application at', 'make course for'],
    translation: {
      content: 'Chọn kết hợp từ (collocation) đúng cho việc đăng ký tuyển sinh:',
      options: ['A. apply a course into', 'B. do an application at', 'C. apply for a course (nộp đơn đăng ký một khóa học)', 'D. make course for']
    }
  },
  {
    p: 'Students must ______ the entry requirements before enrolment.',
    c: 'meet',
    w: ['gain into', 'pay on', 'complete at'],
    translation: {
      content: 'Học sinh phải ______ các yêu cầu đầu vào trước khi nhập học:',
      options: ['A. gain into', 'B. pay on', 'C. complete at', 'D. meet (đáp ứng / meet entry requirements)']
    }
  },
  {
    p: 'After finishing the programme, learners can ______ a recognised qualification.',
    c: 'gain',
    w: ['meet at', 'enrol from', 'apply down'],
    translation: {
      content: 'Sau khi hoàn thành chương trình, người học có thể ______ một bằng cấp/chứng chỉ được công nhận:',
      options: ['A. gain (đạt được / gain a qualification)', 'B. meet at', 'C. enrol from', 'D. apply down']
    }
  },
  {
    p: 'A: “When will you ______ in the course?” B: “After I accept the offer.”',
    c: 'enrol',
    w: ['qualify for at', 'prospect', 'fee'],
    representation: 'dialogue',
    translation: {
      content: 'A: “Khi nào cậu sẽ ______ vào khóa học?” B: “Sau khi tớ chấp nhận lời mời nhập học.”',
      options: ['A. qualify for at', 'B. enrol (đăng ký nhập học / enrol in)', 'C. prospect', 'D. fee']
    }
  },
  {
    p: 'Which phrase describes financial support for study?',
    c: 'receive a scholarship',
    w: ['make an entry', 'do tuition', 'meet a fee'],
    translation: {
      content: 'Cụm từ nào mô tả sự hỗ trợ tài chính cho việc học?',
      options: ['A. make an entry', 'B. do tuition', 'C. receive a scholarship (nhận học bổng)', 'D. meet a fee']
    }
  },
  {
    p: 'A careful learner should ______ before choosing a pathway.',
    c: 'make an informed decision',
    w: ['take a random prospect', 'gain a brochure', 'meet every opinion'],
    translation: {
      content: 'Một người học cẩn thận nên ______ trước khi lựa chọn một con đường học tập:',
      options: ['A. take a random prospect', 'B. gain a brochure', 'C. meet every opinion', 'D. make an informed decision (đưa ra quyết định sáng suốt / dựa trên đủ thông tin)']
    }
  }
];
const grammar: Raw[] = [
  {
    p: 'She admitted ______ the application late.',
    c: 'having submitted',
    w: ['have submitted', 'having submit', 'to submitted'],
    translation: {
      content: 'Cô ấy thừa nhận đã ______ đơn ứng tuyển trễ.',
      options: ['A. having submitted (sau admit + Perfect Gerund biểu thị hành động xảy ra trước: having submitted)', 'B. have submitted', 'C. having submit', 'D. to submitted']
    }
  },
  {
    p: 'Nam regretted ______ the open day.',
    c: 'having missed',
    w: ['have miss', 'having miss', 'to missing'],
    translation: {
      content: 'Nam hối hận vì đã ______ ngày hội mở cửa.',
      options: ['A. have miss', 'B. having missed (sau regret + Perfect Gerund: regret having missed)', 'C. having miss', 'D. to missing']
    }
  },
  {
    p: '______ vocational subjects helped Lan choose a technical course.',
    c: 'Having studied',
    w: ['Have studied', 'Having study', 'To studied'],
    translation: {
      content: 'Việc đã ______ các môn học nghề đã giúp Lan chọn một khóa học kỹ thuật.',
      options: ['A. Have studied', 'B. Having study', 'C. Having studied (Perfect Gerund làm chủ ngữ câu: Having studied)', 'D. To studied']
    }
  },
  {
    p: 'A: “Why is it a perfect gerund?” B: “Because ‘having completed’ acts as ______.”',
    c: 'a noun phrase',
    w: ['the finite verb', 'an adjective only', 'a question word'],
    representation: 'dialogue',
    translation: {
      content: 'A: “Tại sao đó lại là danh động từ hoàn thành?” B: “Bởi vì ‘having completed’ đóng vai trò như ______.”',
      options: ['A. động từ chia thì', 'B. chỉ tính từ', 'C. từ nghi vấn', 'D. a noun phrase (một cụm danh từ)']
    }
  },
  {
    p: 'He denied ______ false information on the form.',
    c: 'having provided',
    w: ['have provide', 'provided having', 'to providing after deny'],
    translation: {
      content: 'Anh ấy phủ nhận đã ______ thông tin sai sự thật trên tờ khai.',
      options: ['A. having provided (sau deny + Perfect Gerund: deny having provided)', 'B. have provide', 'C. provided having', 'D. to providing']
    }
  },
  {
    p: 'Which sentence contains a perfect gerund as object?',
    c: 'Mai remembered having checked the fee.',
    w: ['Having checked the fee, Mai applied.', 'Checked the fee, Mai.', 'Mai has checking the fee.'],
    translation: {
      content: 'Câu nào chứa danh động từ hoàn thành làm tân ngữ?',
      options: ['A. Sai (Having checked... là mệnh đề phân từ hoàn thành làm trạng ngữ)', 'B. Mai remembered having checked the fee. (having checked là danh động từ hoàn thành làm tân ngữ cho remembered)', 'C. Sai cấu trúc', 'D. Sai cấu trúc']
    }
  },
  {
    p: '______ the requirements, Linh prepared the documents.',
    c: 'Having read',
    w: ['Have read', 'Having reading', 'To readed'],
    translation: {
      content: 'Sau khi đã ______ các yêu cầu, Linh đã chuẩn bị các tài liệu.',
      options: ['A. Have read', 'B. Having reading', 'C. Having read (Mệnh đề phân từ hoàn thành: Having read)', 'D. To readed']
    }
  },
  {
    p: 'A: “Which action happened first?” B: “In ‘Having compared, she chose’, ______ happened first.”',
    c: 'comparing',
    w: ['choosing', 'both have no sequence', 'the subject'],
    representation: 'dialogue',
    translation: {
      content: 'A: “Hành động nào xảy ra trước?” B: “Trong câu ‘Having compared, she chose’, hành động ______ xảy ra trước.”',
      options: ['A. choosing', 'B. cả hai không có thứ tự', 'C. chủ ngữ', 'D. comparing (hành động so sánh xảy ra trước hành động chọn)']
    }
  },
  {
    p: '______ enough information, he delayed his decision.',
    c: 'Not having found',
    w: ['Not have find', 'Having not finding', 'To not found'],
    translation: {
      content: 'Vì chưa ______ đủ thông tin, anh ấy đã hoãn quyết định của mình.',
      options: ['A. Not having found (Dạng phủ định của phân từ hoàn thành: Not having found)', 'B. Not have find', 'C. Having not finding', 'D. To not found']
    }
  },
  {
    p: 'Which Unit 7 sentence keeps the same logical subject in both clauses?',
    c: 'Having visited the college, Hoa completed her application.',
    w: ['Having visited the college, the deadline arrived.', 'Having compared, the fees were high.', 'Having applied, there was rain.'],
    translation: {
      content: 'Câu Chuyên đề 7 nào giữ nguyên cùng một chủ ngữ logic ở cả hai mệnh đề?',
      options: ['A. Sai (dangling participle)', 'B. Having visited the college, Hoa completed her application. (Hoa thăm trường, Hoa nộp đơn - cùng chủ ngữ Hoa)', 'C. Sai (dangling participle)', 'D. Sai (dangling participle)']
    }
  },
  {
    p: 'Choose the perfect passive participle form.',
    c: 'Having been offered a scholarship, Minh accepted the place.',
    w: ['Having offered a scholarship, Minh was received.', 'Been having offered, Minh accepted.', 'To having offered, Minh accepted.'],
    translation: {
      content: 'Chọn dạng phân từ hoàn thành bị động (Perfect Passive Participle):',
      options: ['A. Sai (dạng chủ động)', 'B. Sai cấu trúc', 'C. Having been offered a scholarship, Minh accepted the place. (Cấu trúc bị động hoàn thành: Having been + V3)', 'D. Sai cấu trúc']
    }
  },
  {
    p: 'Which sentence correctly distinguishes the two functions?',
    c: 'He regretted having waited, but having compared the routes, he made a choice.',
    w: ['Both phrases are finite verbs.', 'Neither phrase shows earlier time.', 'The first is a participle clause and the second an object.'],
    translation: {
      content: 'Câu nào phân biệt đúng 2 chức năng giữa danh động từ hoàn thành (tân ngữ) và mệnh đề phân từ hoàn thành (trạng ngữ)?',
      options: ['A. Phát biểu sai', 'B. Phát biểu sai', 'C. Phát biểu sai', 'D. He regretted having waited, but having compared the routes, he made a choice. (having waited là tân ngữ; having compared là mệnh đề phân từ chỉ nguyên nhân/thời gian)']
    }
  }
];
const passage1: QuestionStimulus = {
  id: 'eng11-stim-u7-reading-1', title: 'Comparing outcomes without misleading applicants',
  content: `A careers team compared two technology programmes: a three-year college diploma and a two-year apprenticeship. The college reported that 88 percent of graduates were employed, while the apprenticeship provider reported 94 percent. At first, students assumed the second route produced better results.

The adviser examined the definitions behind the figures. The college surveyed graduates twelve months after completion and counted only paid jobs lasting at least six months. The apprenticeship survey occurred three months after training and included learners who stayed temporarily with their training employer. Neither measure was wrong, but the percentages did not describe the same outcome.

Costs also required careful comparison. College students paid tuition but could apply for grants. Apprentices received wages, although pay varied and some travelled long distances to workplaces. The diploma offered a broader academic foundation; the apprenticeship provided more workplace practice. Employers in different roles valued these features differently.

The team created a comparison sheet showing definitions, timing, sample size, fees, support, qualifications and progression routes. Students then added personal priorities such as preferred learning style, location and target occupation. The exercise did not identify one universal winner. Instead, it showed that an informed decision depends on comparable evidence and individual goals. The careers team will update the sheet annually and contact providers when statistics lack clear definitions, helping future applicants distinguish a strong percentage from a genuinely useful comparison. The sheet also links applicants to official contacts so they can verify whether reported outcomes match the occupation and qualification they actually seek.`
};
const passage2: QuestionStimulus = {
  id: 'eng11-stim-u7-reading-2', title: 'A bridge course with hidden barriers',
  content: `A university introduced a foundation course for students who did not yet meet direct entry requirements. The course included academic writing, mathematics and study skills, and successful students could progress to selected degree programmes. Applications increased rapidly after the university advertised the new route.

During the first year, however, completion differed sharply between groups. Many students commuting from outer districts missed early classes because buses were unreliable. Others worked long evening shifts and struggled to attend support sessions. The official fee was lower than a degree fee, but transport, materials and reduced working hours created additional costs.

The university initially offered a time-management workshop. Student representatives argued that planning skills could not solve every structural barrier. In response, the course recorded key lectures, moved tutorials to several time slots, created a travel fund and published a full cost guide. Advisers also checked whether each target degree accepted the foundation qualification.

Completion improved the following year, although the university cautioned that several changes occurred together, so it could not attribute improvement to one measure. Surveys showed that flexible tutorials were especially valued, while the travel fund reached fewer students than expected because its application process was complex. The university simplified the form and scheduled another review. The case demonstrates that creating an entry route is not the same as making it accessible. Institutions must examine who can participate, what support reaches them, and whether progression promises are specific and verifiable. Future reports will compare participation and progression across income and travel groups.`
};
const passage3: QuestionStimulus = {
  id: 'eng11-stim-u7-reading-3', title: 'Testing a gap-year plan',
  content: `Trang wanted to take a gap year before applying for environmental science. She hoped to volunteer, improve English and save money. Her family worried that an unstructured year might delay her education without developing useful skills.

Rather than arguing about the label “gap year,” Trang wrote a plan. She identified a six-month paid job, a local weekend conservation project and an English examination date. She estimated income, transport costs and study time. A careers adviser checked that her intended universities accepted applications from students after a year away and asked how she would document learning.

After three months, the plan needed revision. Overtime at work reduced study time, and the conservation project offered fewer field activities during the rainy season. Trang negotiated a more predictable shift schedule and enrolled in a short data course. She kept evidence of tasks, feedback and reflections instead of assuming participation alone would impress admissions staff.

The family reviewed the plan using agreed criteria: savings, English progress, relevant experience, wellbeing and application deadlines. They did not require every target to be met exactly. They wanted evidence that Trang could notice problems and adjust responsibly. By the end of the year, she had saved less than first estimated but gained clearer knowledge of environmental work and submitted applications on time. The experience suggests that a gap year becomes educational through purposeful design, monitoring and reflection—not simply through the passage of time. Trang will use the same evidence to review her first university semester and revise future goals.`
};
const reading: Raw[] = [
  {
    p: 'Why could the two employment percentages not be compared directly?',
    c: 'The surveys used different timing and definitions.',
    w: ['One provider had no graduates.', 'Percentages cannot describe employment.', 'Both surveys measured identical outcomes.'],
    stimulus: passage1,
    translation: {
      content: 'Tại sao 2 tỷ lệ phần trăm việc làm không thể so sánh trực tiếp với nhau?',
      options: ['A. The surveys used different timing and definitions. (Các cuộc khảo sát sử dụng thời điểm và định nghĩa khác nhau.)', 'B. Một cơ sở không có sinh viên tốt nghiệp', 'C. Tỷ lệ phần trăm không thể mô tả việc làm', 'D. Cả hai khảo sát đều đo lường kết quả giống hệt nhau']
    }
  },
  {
    p: 'What financial advantage did apprentices have?',
    c: 'They received wages during training.',
    w: ['They all travelled free.', 'They paid identical college fees.', 'They automatically received grants.'],
    stimulus: passage1,
    translation: {
      content: 'Lợi thế tài chính nào mà những người học nghề có được?',
      options: ['A. Tất cả họ đều đi lại miễn phí', 'B. They received wages during training. (Họ nhận được lương trong thời gian đào tạo.)', 'C. Họ trả học phí trường cao đẳng giống hệt', 'D. Họ tự động nhận được học bổng']
    }
  },
  {
    p: 'What did the comparison sheet add beyond employment rates?',
    c: 'Definitions, costs, qualifications, progression and personal priorities',
    w: ['Only provider logos', 'A universal ranking', 'Guaranteed job offers'],
    stimulus: passage1,
    translation: {
      content: 'Bảng so sánh đã thêm những gì ngoài tỷ lệ việc làm?',
      options: ['A. Chỉ logo của nhà cung cấp', 'B. Một bảng xếp hạng toàn cầu', 'C. Definitions, costs, qualifications, progression and personal priorities (Các định nghĩa, chi phí, bằng cấp, con đường tiến thân và ưu tiên cá nhân)', 'D. Lời hứa việc làm đảm bảo']
    }
  },
  {
    p: 'What is the central lesson of passage 1?',
    c: 'Useful comparison needs equivalent evidence and learner-specific criteria.',
    w: ['The highest percentage is always best.', 'Academic study suits everyone.', 'Workplace learning has no costs.'],
    stimulus: passage1,
    translation: {
      content: 'Bài học trung tâm của đoạn 1 là gì?',
      options: ['A. Tỷ lệ phần trăm cao nhất luôn là tốt nhất', 'B. Học thuật phù hợp với tất cả mọi người', 'C. Học tại nơi làm việc không có chi phí', 'D. Useful comparison needs equivalent evidence and learner-specific criteria. (Sự so sánh hữu ích cần có bằng chứng tương đương và các tiêu chí riêng cho từng người học.)']
    }
  },
  {
    p: 'Which hidden cost affected foundation students?',
    c: 'Transport, materials and reduced working hours',
    w: ['A compulsory overseas year', 'Buying university buildings', 'Paying employer wages'],
    stimulus: passage2,
    translation: {
      content: 'Chi phí ẩn nào đã ảnh hưởng đến các sinh viên khóa dự bị?',
      options: ['A. Transport, materials and reduced working hours (Phương tiện di chuyển, tài liệu và việc giảm giờ làm việc)', 'B. Một năm bắt buộc ở nước ngoài', 'C. Mua các tòa nhà đại học', 'D. Trả lương cho người sử dụng lao động']
    }
  },
  {
    p: 'Why was a time-management workshop insufficient?',
    c: 'Some barriers came from transport, schedules and costs.',
    w: ['Students refused all planning.', 'The course had no timetable.', 'Study skills never help.'],
    stimulus: passage2,
    translation: {
      content: 'Tại sao buổi hội thảo quản lý thời gian lại không đủ?',
      options: ['A. Sinh viên từ chối mọi kế hoạch', 'B. Some barriers came from transport, schedules and costs. (Một số rào cản đến từ di chuyển, lịch trình và chi phí.)', 'C. Khóa học không có thời khóa biểu', 'D. Kỹ năng học tập không bao giờ giúp ích']
    }
  },
  {
    p: 'Why did the university avoid crediting one measure?',
    c: 'Several changes were introduced together.',
    w: ['Completion did not change.', 'No students answered surveys.', 'The university removed support.'],
    stimulus: passage2,
    translation: {
      content: 'Tại sao trường đại học tránh quy công cho riêng một biện pháp?',
      options: ['A. Tỷ lệ hoàn thành không thay đổi', 'B. Không sinh viên nào trả lời khảo sát', 'C. Several changes were introduced together. (Nhiều thay đổi đã được đưa vào cùng một lúc.)', 'D. Trường đại học gỡ bỏ sự hỗ trợ']
    }
  },
  {
    p: 'Which inference best fits passage 2?',
    c: 'A pathway is accessible only when practical barriers and progression are addressed.',
    w: ['Advertising guarantees participation.', 'Low listed fees equal low total costs.', 'One route must accept every student.'],
    stimulus: passage2,
    translation: {
      content: 'Suy luận nào phù hợp nhất với đoạn 2?',
      options: ['A. Quảng cáo đảm bảo sự tham gia', 'B. Học phí niêm yết thấp nghĩa là tổng chi phí thấp', 'C. Một con đường phải nhận mọi sinh viên', 'D. A pathway is accessible only when practical barriers and progression are addressed. (Một con đường chỉ có thể tiếp cận khi các rào cản thực tế và sự tiến thân được giải quyết.)']
    }
  },
  {
    p: 'How did Trang turn her gap-year idea into a plan?',
    c: 'She set activities, costs, study goals and checks.',
    w: ['She avoided all deadlines.', 'She relied on the label alone.', 'She promised not to revise anything.'],
    stimulus: passage3,
    translation: {
      content: 'Trang đã biến ý tưởng gap-year của mình thành kế hoạch như thế nào?',
      options: ['A. She set activities, costs, study goals and checks. (Bạn ấy đề ra các hoạt động, chi phí, mục tiêu học tập và các đợt kiểm tra.)', 'B. Bạn ấy tránh tất cả hạn chót', 'C. Bạn ấy chỉ dựa vào tên gọi', 'D. Bạn ấy hứa không sửa đổi điều gì']
    }
  },
  {
    p: 'What caused Trang to revise the plan?',
    c: 'Overtime and seasonal limits changed available study and field time.',
    w: ['Universities banned gap years.', 'Her family selected a degree for her.', 'The conservation project closed forever.'],
    stimulus: passage3,
    translation: {
      content: 'Điều gì đã khiến Trang phải sửa đổi kế hoạch?',
      options: ['A. Các trường đại học cấm gap year', 'B. Overtime and seasonal limits changed available study and field time. (Việc làm thêm giờ và các hạn chế theo mùa đã thay đổi thời gian học và thực địa có sẵn.)', 'C. Gia đình bạn ấy chọn một ngành học cho bạn ấy', 'D. Dự án bảo tồn đóng cửa mãi mãi']
    }
  },
  {
    p: 'Why did she keep evidence and reflections?',
    c: 'Participation alone did not demonstrate what she had learned.',
    w: ['Admissions staff requested no information.', 'Evidence replaces all qualifications.', 'Reflection guarantees admission.'],
    stimulus: passage3,
    translation: {
      content: 'Tại sao bạn ấy lại giữ lại bằng chứng và các bản suy ngẫm?',
      options: ['A. Cán bộ tuyển sinh không yêu cầu thông tin', 'B. Bằng chứng thay thế tất cả bằng cấp', 'C. Participation alone did not demonstrate what she had learned. (Chỉ riêng việc tham gia không chứng minh được những gì bạn ấy đã học được.)', 'D. Sự suy ngẫm đảm bảo việc trúng tuyển']
    }
  },
  {
    p: 'What counted as responsible progress for the family?',
    c: 'Monitoring results and adapting when conditions changed',
    w: ['Meeting every estimate exactly', 'Never asking for advice', 'Saving money as the only outcome'],
    stimulus: passage3,
    translation: {
      content: 'Điều gì được gia đình coi là sự tiến bộ có trách nhiệm?',
      options: ['A. Đáp ứng chính xác mọi ước tính', 'B. Không bao giờ hỏi xin lời khuyên', 'C. Tiết kiệm tiền là kết quả duy nhất', 'D. Monitoring results and adapting when conditions changed (Theo dõi kết quả và thích ứng khi các điều kiện thay đổi)']
    }
  }
];
const writing: Raw[] = [
  {
    p: 'Choose the best order: (a) Compare entry, cost and learning model. (b) I am writing about your two offers. (c) Verify the qualification with both providers.',
    c: 'b-a-c',
    w: ['a-c-b', 'c-b-a', 'b-c-a'],
    translation: {
      content: 'Chọn thứ tự tốt nhất: (a) So sánh đầu vào, chi phí và mô hình học tập. (b) Tớ đang viết về 2 lời mời nhập học của cậu. (c) Xác minh bằng cấp với cả hai nhà cung cấp.',
      options: ['A. b-a-c', 'B. a-c-b', 'C. c-b-a', 'D. b-c-a']
    }
  },
  {
    p: 'Which opening best identifies purpose and reader need?',
    c: 'You asked whether the diploma or apprenticeship better supports your goal of becoming a technician.',
    w: ['Education has options.', 'Choose this immediately.', 'Brochures are colourful.'],
    translation: {
      content: 'Mở đầu nào xác định rõ nhất mục đích và nhu cầu của người đọc?',
      options: ['A. Giáo dục có các lựa chọn.', 'B. You asked whether the diploma or apprenticeship better supports your goal of becoming a technician. (Cậu đã hỏi liệu bằng cao đẳng hay chương trình học nghề hỗ trợ tốt hơn mục tiêu trở thành kỹ thuật viên của cậu.)', 'C. Chọn cái này ngay.', 'D. Brochure có nhiều màu sắc.']
    }
  },
  {
    p: 'Choose the connector: “The diploma is broader academically, ______ the apprenticeship offers more workplace practice.”',
    c: 'whereas',
    w: ['therefore', 'because of no cause', 'for example of time'],
    translation: {
      content: 'Chọn từ nối: “Bằng cao đẳng rộng hơn về mặt học thuật, ______ chương trình học nghề cung cấp nhiều thực hành tại nơi làm việc hơn.”',
      options: ['A. vì vậy', 'B. bởi vì', 'C. whereas (trong khi đó)', 'D. ví dụ']
    }
  },
  {
    p: 'A: “What should a comparison use?” B: “______”',
    c: 'The same criteria for both options',
    w: ['Different definitions secretly', 'Only the highest percentage', 'One personal story'],
    representation: 'dialogue',
    translation: {
      content: 'A: “Một sự so sánh nên sử dụng điều gì?” B: “______”',
      options: ['A. Các định nghĩa khác nhau một cách bí mật', 'B. Chỉ tỷ lệ phần trăm cao nhất', 'C. Một câu chuyện cá nhân', 'D. The same criteria for both options (Cùng các tiêu chí cho cả hai lựa chọn)']
    }
  },
  {
    p: 'Which sentence reports evidence cautiously?',
    c: 'The survey suggests stronger short-term employment, but its definition is limited.',
    w: ['The survey proves lifelong success.', 'One number settles every question.', 'Definitions never matter.'],
    translation: {
      content: 'Câu nào báo cáo bằng chứng một cách thận trọng?',
      options: ['A. The survey suggests stronger short-term employment, but its definition is limited. (Cuộc khảo sát cho thấy việc làm ngắn hạn tốt hơn, nhưng định nghĩa của nó bị hạn chế.)', 'B. Cuộc khảo sát chứng minh thành công suốt đời', 'C. Một con số giải quyết mọi câu hỏi', 'D. Các định nghĩa không bao giờ quan trọng']
    }
  },
  {
    p: 'Which detail is least relevant to course choice?',
    c: 'The brochure designer’s favourite food',
    w: ['Entry requirements', 'Total cost', 'Qualification awarded'],
    translation: {
      content: 'Chi tiết nào ít liên quan nhất đến việc lựa chọn khóa học?',
      options: ['A. Yêu cầu đầu vào', 'B. The brochure designer’s favourite food (Món ăn yêu thích của nhà thiết kế brochure - Không liên quan)', 'C. Tổng chi phí', 'D. Bằng cấp được trao']
    }
  },
  {
    p: 'Select the best perfect-gerund transformation.',
    c: 'She regretted having ignored the deadline.',
    w: ['She regretted have ignored.', 'Having ignored, she regretted object.', 'She to regretted ignored.'],
    translation: {
      content: 'Chọn bản chuyển đổi danh động từ hoàn thành tốt nhất:',
      options: ['A. Sai cấu trúc', 'B. Sai cấu trúc', 'C. She regretted having ignored the deadline. (Cô ấy hối hận vì đã phớt lờ hạn chót.)', 'D. Sai cấu trúc']
    }
  },
  {
    p: 'A: “How should I end the advice?” B: “______”',
    c: 'Suggest a verified next step while leaving the decision to the reader.',
    w: ['Order the reader to obey.', 'Claim one path fits all.', 'Omit practical checks.'],
    representation: 'dialogue',
    translation: {
      content: 'A: “Tớ nên kết thúc lời khuyên như thế nào?” B: “______”',
      options: ['A. Ra lệnh cho người đọc tuân theo', 'B. Tuyên bố một con đường phù hợp với tất cả', 'C. Bỏ qua các kiểm tra thực tế', 'D. Suggest a verified next step while leaving the decision to the reader. (Gợi ý một bước tiếp theo đã được xác minh trong khi để quyền quyết định cho người đọc.)']
    }
  },
  {
    p: 'Which topic sentence best introduces fees, travel and lost work hours?',
    c: 'Applicants should compare total costs, not tuition alone.',
    w: ['Fees are numbers.', 'Travel uses roads.', 'Work has hours.'],
    translation: {
      content: 'Câu chủ đề nào giới thiệu tốt nhất về học phí, việc di chuyển và số giờ làm việc bị mất?',
      options: ['A. Applicants should compare total costs, not tuition alone. (Các ứng viên nên so sánh tổng chi phí, chứ không chỉ riêng học phí.)', 'B. Phí là các con số.', 'C. Di chuyển dùng đường xá.', 'D. Công việc có giờ.']
    }
  },
  {
    p: 'Which revision avoids an unfair recommendation?',
    c: 'The course may suit learners who prefer structured academic study.',
    w: ['This is the best course for everyone.', 'All vocational routes are inferior.', 'No personal condition matters.'],
    translation: {
      content: 'Bản sửa đổi nào tránh một lời khuyên không công bằng/phiến diện?',
      options: ['A. Đây là khóa học tốt nhất cho tất cả mọi người', 'B. The course may suit learners who prefer structured academic study. (Khóa học có thể phù hợp với những người học thích học thuật có cấu trúc.)', 'C. Tất cả các con đường học nghề đều kém hơn', 'D. Không có điều kiện cá nhân nào quan trọng']
    }
  },
  {
    p: 'Choose the clearest Unit 7 combination using a perfect participle clause.',
    c: 'Having checked the progression rules, Minh accepted the foundation place.',
    w: ['Checking after accepted having.', 'The rules having Minh accepted.', 'To checked, progression accepted.'],
    translation: {
      content: 'Chọn câu kết hợp Chuyên đề 7 rõ ràng nhất sử dụng mệnh đề phân từ hoàn thành:',
      options: ['A. Sai cấu trúc', 'B. Sai cấu trúc', 'C. Having checked the progression rules, Minh accepted the foundation place. (Sau khi đã kiểm tra các quy tắc tiến thân, Minh đã chấp nhận suất học dự bị.)', 'D. Sai cấu trúc']
    }
  },
  {
    p: 'Which final sentence best supports an informed decision?',
    c: 'Before accepting, ask both providers to confirm costs, support and progression in writing.',
    w: ['Pick the famous name.', 'Ignore unanswered questions.', 'A friend can guarantee your fit.'],
    translation: {
      content: 'Câu kết thúc nào hỗ trợ tốt nhất cho một quyết định sáng suốt?',
      options: ['A. Chọn tên tuổi nổi tiếng', 'B. Lờ đi các câu hỏi chưa được trả lời', 'C. Một người bạn có thể đảm bảo sự phù hợp của bạn', 'D. Before accepting, ask both providers to confirm costs, support and progression in writing. (Trước khi chấp nhận, hãy yêu cầu cả hai cơ sở xác nhận chi phí, sự hỗ trợ và con đường tiến thân bằng văn bản.)']
    }
  }
];
const communication: Raw[] = [
  {
    p: 'Which question should come before giving pathway advice?',
    c: 'What kind of work and learning environment interests you?',
    w: ['Why not copy my choice?', 'Which logo is brightest?', 'Can I decide for you?'],
    translation: {
      content: 'Câu hỏi nào nên có trước khi đưa ra lời khuyên về con đường học tập?',
      options: ['A. What kind of work and learning environment interests you? (Loại hình công việc và môi trường học tập nào làm cậu hứng thú?)', 'B. Tại sao không sao chép lựa chọn của tớ?', 'C. Logo nào sáng nhất?', 'D. Tớ có thể quyết định thay cậu không?']
    }
  },
  {
    p: 'A: “I prefer practical learning.” B: “______”',
    c: 'You could investigate apprenticeships and compare their qualifications.',
    w: ['University is your only option.', 'Practical learning has no value.', 'Do not check providers.'],
    representation: 'dialogue',
    translation: {
      content: 'A: “Tớ thích học thực hành hơn.” B: “______”',
      options: ['A. Đại học là lựa chọn duy nhất của cậu', 'B. You could investigate apprenticeships and compare their qualifications. (Cậu có thể tìm hiểu các chương trình học nghề và so sánh bằng cấp của chúng.)', 'C. Học thực hành không có giá trị', 'D. Đừng kiểm tra các nhà cung cấp']
    }
  },
  {
    p: 'Which question clarifies affordability?',
    c: 'What total costs and financial support apply to you?',
    w: ['Is the campus sign blue?', 'Does the title rhyme?', 'Are all costs identical?'],
    translation: {
      content: 'Câu hỏi nào làm rõ khả năng chi trả tài chính?',
      options: ['A. Biển hiệu trường có màu xanh không?', 'B. Tiêu đề có vần không?', 'C. What total costs and financial support apply to you? (Tổng chi phí và sự hỗ trợ tài chính nào áp dụng cho cậu?)', 'D. Có phải mọi chi phí đều giống hệt nhau không?']
    }
  },
  {
    p: 'A: “This course says 95% employed.” B: “______”',
    c: 'When was that measured, and what counted as employment?',
    w: ['The number proves everything.', 'Definitions are unnecessary.', 'Choose immediately.'],
    representation: 'dialogue',
    translation: {
      content: 'A: “Khóa học này ghi 95% có việc làm.” B: “______”',
      options: ['A. Con số chứng minh mọi thứ', 'B. Các định nghĩa là không cần thiết', 'C. Chọn ngay lập tức', 'D. When was that measured, and what counted as employment? (Con số đó được đo lường khi nào, và điều gì được tính là việc làm?)']
    }
  },
  {
    p: 'Which advice appropriately includes a condition?',
    c: 'A degree may be necessary if your target profession requires one.',
    w: ['Degrees always suit everyone.', 'Requirements never vary.', 'Only rankings matter.'],
    translation: {
      content: 'Lời khuyên nào bao gồm một điều kiện một cách phù hợp?',
      options: ['A. A degree may be necessary if your target profession requires one. (Một bằng cử nhân có thể cần thiết nếu ngành nghề mục tiêu của cậu yêu cầu.)', 'B. Bằng cấp luôn phù hợp với tất cả mọi người', 'C. Các yêu cầu không bao giờ thay đổi', 'D. Chỉ có thứ hạng mới quan trọng']
    }
  },
  {
    p: 'A: “My parents want to choose for me.” B: “______”',
    c: 'Could you discuss your goals and compare options together before you decide?',
    w: ['They must decide alone.', 'Hide all information.', 'Goals are irrelevant.'],
    representation: 'dialogue',
    translation: {
      content: 'A: “Bố mẹ tớ muốn chọn thay tớ.” B: “______”',
      options: ['A. Họ phải quyết định một mình', 'B. Could you discuss your goals and compare options together before you decide? (Cậu có thể thảo luận về các mục tiêu của cậu và cùng so sánh các lựa chọn trước khi quyết định không?)', 'C. Giấu tất cả thông tin', 'D. Các mục tiêu là không liên quan']
    }
  },
  {
    p: 'Which response distinguishes evidence from experience?',
    c: 'My experience was positive, but check current official requirements.',
    w: ['My experience guarantees yours.', 'Official information never changes.', 'One story is complete evidence.'],
    translation: {
      content: 'Phản hồi nào phân biệt giữa bằng chứng khách quan và trải nghiệm cá nhân?',
      options: ['A. Trải nghiệm của tớ đảm bảo cho cậu', 'B. Thông tin chính thức không bao giờ thay đổi', 'C. My experience was positive, but check current official requirements. (Trải nghiệm của tớ rất tích cực, nhưng cậu hãy kiểm tra các yêu cầu chính thức hiện tại.)', 'D. Một câu chuyện là bằng chứng hoàn chỉnh']
    }
  },
  {
    p: 'A: “Should I take a gap year?” B: “______”',
    c: 'What would you aim to achieve, and how would you monitor it?',
    w: ['Time alone makes it educational.', 'No plan is needed.', 'Every gap year is identical.'],
    representation: 'dialogue',
    translation: {
      content: 'A: “Tớ có nên dành 1 năm gap year không?” B: “______”',
      options: ['A. Chỉ riêng thời gian trôi qua làm cho nó có tính giáo dục', 'B. Không cần kế hoạch nào', 'C. Mọi gap year đều giống hệt nhau', 'D. What would you aim to achieve, and how would you monitor it? (Cậu mục tiêu đạt được điều gì, và cậu sẽ theo dõi nó như thế nào?)']
    }
  },
  {
    p: 'Which criterion concerns learning fit?',
    c: 'Preference for classroom study or workplace practice',
    w: ['Provider logo shape', 'Brochure paper', 'Course-name length'],
    translation: {
      content: 'Tiêu chí nào liên quan đến sự phù hợp về cách học?',
      options: ['A. Preference for classroom study or workplace practice (Sự yêu thích đối với việc học trên lớp hay thực hành tại nơi làm việc)', 'B. Hình dáng logo nhà cung cấp', 'C. Giấy in brochure', 'D. Độ dài tên khóa học']
    }
  },
  {
    p: 'A: “The cheaper course must be best.” B: “______”',
    c: 'Let’s compare total cost, quality, support and outcomes.',
    w: ['Listed fee is the only criterion.', 'Quality cannot be checked.', 'Support has no value.'],
    representation: 'dialogue',
    translation: {
      content: 'A: “Khóa học rẻ hơn chắc chắn là tốt nhất.” B: “______”',
      options: ['A. Học phí niêm yết là tiêu chí duy nhất', 'B. Let’s compare total cost, quality, support and outcomes. (Hãy so sánh tổng chi phí, chất lượng, sự hỗ trợ và các kết quả đầu ra.)', 'C. Chất lượng không thể kiểm tra', 'D. Sự hỗ trợ không có giá trị']
    }
  },
  {
    p: 'Which adviser action preserves learner agency?',
    c: 'Help the student rank criteria and verify information, then let them choose.',
    w: ['Submit an application without consent.', 'Choose based on the adviser’s career.', 'Remove alternatives.'],
    translation: {
      content: 'Hành động nào của người tư vấn giữ được quyền tự quyết của người học?',
      options: ['A. Nộp đơn ứng tuyển mà không có sự đồng ý', 'B. Lựa chọn dựa trên sự nghiệp của người tư vấn', 'C. Help the student rank criteria and verify information, then let them choose. (Giúp học sinh xếp hạng các tiêu chí và xác minh thông tin, sau đó để họ tự lựa chọn.)', 'D. Loại bỏ các lựa chọn thay thế']
    }
  },
  {
    p: 'A: “I’m still uncertain.” B: “______”',
    c: 'Let’s list the unanswered questions for each provider’s open day.',
    w: ['Uncertainty means failure.', 'Guess now.', 'Stop gathering evidence.'],
    representation: 'dialogue',
    translation: {
      content: 'A: “Tớ vẫn chưa chắc chắn.” B: “______”',
      options: ['A. Chưa chắc chắn nghĩa là thất bại', 'B. Hãy đoán ngay bây giờ', 'C. Ngừng thu thập bằng chứng', 'D. Let’s list the unanswered questions for each provider’s open day. (Hãy liệt kê các câu hỏi chưa được giải đáp cho ngày hội mở cửa của từng nhà cung cấp.)']
    }
  }
];
export const g11EnglishModule7Questions: CourseQuestion[] = [
  ...build('pronunciation', 'language', pronunciation, ['yes-no', 'wh-context']),
  ...build('vocabulary', 'language', vocabulary, ['meaning-word-form', 'education-collocation']),
  ...build('grammar', 'language', grammar, ['perfect-gerund', 'perfect-participle']),
  ...build('reading', 'reading', reading, ['main-detail', 'infer-evaluate']),
  ...build('writing', 'writing', writing, ['order-cohesion', 'transform-advice']),
  ...build('communication', 'communication-culture', communication, ['ask-advise', 'compare-agency'])
];
