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
    const position = index % 4;
    const choices = [...row.w]; choices.splice(position, 0, row.c);
    return {
      id: `eng11-q-u6-${key}-${String(index + 1).padStart(2, '0')}`,
      courseId: 'grade11:english', moduleId: 'eng11-m6', lessonId: `eng11-u6-${lesson}`,
      subjectId: 'english', topicId: 'eng11-topic-u6', questionTypeId: `eng11-qt-u6-${key}`,
      content: row.p, options: choices.map((option, optionIndex) => `${letters[optionIndex]}. ${option}`) as [string, string, string, string],
      correctAnswer: letters[position], responseType: 'single_choice', validatorType: 'choice',
      translation: row.translation,
      difficulty: difficulties[index], points: 0.25, sourceType: 'manual', outcomeIds: [`eng11-out-u6-${key}`],
      subTypeId: `eng11-u6-${key}-${index < 6 ? subTypes[0] : subTypes[1]}`,
      practiceRole: roles[index % 6], representationType: row.representation ?? (index % 4 === 3 ? 'dialogue' : 'text'),
      isMasteryHoldout: index % 6 === 5, stimulus: row.stimulus
    };
  });

const pronunciation: Raw[] = [
  {
    p: 'A neutral complete statement most commonly ends with:',
    c: 'falling intonation',
    w: ['a permanent rise', 'equal pitch on every word', 'no final tone'],
    translation: {
      content: 'Một câu trần thuật hoàn chỉnh trung tính thường kết thúc bằng:',
      options: ['A. falling intonation (ngữ điệu xuống giọng: falling intonation)', 'B. sự lên giọng vĩnh viễn', 'C. cao độ bằng nhau ở mọi từ', 'D. không có tông giọng cuối']
    }
  },
  {
    p: 'Which sentence is most naturally spoken with a final fall?',
    c: 'The museum closes at five.',
    w: ['Are you ready?', 'Really?', 'Could it be open?'],
    translation: {
      content: 'Câu nào thường được nói tự nhiên nhất với một ngữ điệu xuống giọng ở cuối?',
      options: ['A. Are you ready?', 'B. The museum closes at five. (Câu trần thuật kết thúc xuống giọng)', 'C. Really?', 'D. Could it be open?']
    }
  },
  {
    p: 'A firm but polite command commonly has:',
    c: 'falling intonation',
    w: ['rising list intonation only', 'no stressed syllable', 'four final rises'],
    translation: {
      content: 'Một câu lệnh kiên quyết nhưng lịch sự thường có:',
      options: ['A. chỉ ngữ điệu liệt kê lên giọng', 'B. không có âm tiết nhấn trọng âm', 'C. falling intonation (ngữ điệu xuống giọng)', 'D. bốn lần lên giọng cuối']
    }
  },
  {
    p: 'A: “How should ‘Please protect the exhibits’ end?” B: “With a ______ tone.”',
    c: 'falling',
    w: ['list-opening', 'never-ending rising', 'silent'],
    representation: 'dialogue',
    translation: {
      content: 'A: “Câu ‘Please protect the exhibits’ nên kết thúc thế nào?” B: “Với tông giọng ______.”',
      options: ['A. mở đầu danh sách', 'B. lên giọng liên tục', 'C. câm', 'D. falling (xuống giọng)']
    }
  },
  {
    p: 'A final fall in a statement usually signals that:',
    c: 'the message is complete',
    w: ['another list item must follow', 'the speaker forgot the words', 'the sentence is a yes/no question'],
    translation: {
      content: 'Sự xuống giọng ở cuối một câu trần thuật thường ra hiệu rằng:',
      options: ['A. the message is complete (thông điệp đã hoàn thành)', 'B. một mục liệt kê tiếp theo phải nối tiếp', 'C. người nói đã quên từ', 'D. câu là một câu hỏi yes/no']
    }
  },
  {
    p: 'Which interpretation is safest for intonation?',
    c: 'Tone interacts with purpose, attitude and context.',
    w: ['One tone has exactly one meaning always.', 'Spelling fully determines tone.', 'Commands cannot be polite.'],
    translation: {
      content: 'Cách giải thích nào an toàn nhất cho ngữ điệu?',
      options: ['A. Một tông giọng luôn chỉ có chính xác một nghĩa', 'B. Tone interacts with purpose, attitude and context. (Tông giọng tương tác với mục đích, thái độ và bối cảnh.)', 'C. Cách đánh vần hoàn toàn quyết định tông giọng', 'D. Câu lệnh không thể lịch sự']
    }
  },
  {
    p: 'In “We collected maps, tools, and photographs”, the voice usually rises after:',
    c: 'maps',
    w: ['photographs only', 'the final full stop only', 'nothing in any list'],
    translation: {
      content: 'Trong câu “We collected maps, tools, and photographs”, giọng nói thường lên giọng sau:',
      options: ['A. chỉ photographs', 'B. chỉ dấu chấm cuối câu', 'C. maps (từ liệt kê chưa kết thúc danh sách: maps / tools)', 'D. không từ nào trong danh sách']
    }
  },
  {
    p: 'A: “Why does the voice rise on ‘masks’?” B: “To show ______.”',
    c: 'the list is not finished',
    w: ['the statement is false', 'masks are questions', 'the speaker is ending'],
    representation: 'dialogue',
    translation: {
      content: 'A: “Tại sao giọng nói lại lên giọng ở từ ‘masks’?” B: “Để chỉ ra rằng ______.”',
      options: ['A. phát biểu là sai', 'B. masks là các câu hỏi', 'C. người nói đang kết thúc', 'D. the list is not finished (danh sách liệt kê vẫn chưa kết thúc)']
    }
  },
  {
    p: 'The final item in a completed list usually takes:',
    c: 'falling intonation',
    w: ['the same rise as every earlier item', 'no vowel', 'question grammar'],
    translation: {
      content: 'Mục cuối cùng trong một danh sách đã hoàn thành thường có:',
      options: ['A. falling intonation (ngữ điệu xuống giọng để báo hiệu kết thúc danh sách)', 'B. lên giọng giống như mọi mục trước đó', 'C. không có nguyên âm', 'D. ngữ pháp câu hỏi']
    }
  },
  {
    p: 'Which pattern best fits a three-item list?',
    c: 'rise – rise – fall',
    w: ['fall – fall – rise', 'rise – fall – rise', 'flat – flat – rise'],
    translation: {
      content: 'Mô hình nào phù hợp nhất với một danh sách gồm 3 mục?',
      options: ['A. fall – fall – rise', 'B. rise – rise – fall (lên giọng – lên giọng – xuống giọng ở mục cuối)', 'C. rise – fall – rise', 'D. flat – flat – rise']
    }
  },
  {
    p: 'Why might a speaker rise on a normally falling statement?',
    c: 'To signal uncertainty or invite confirmation in context',
    w: ['Because all statements are questions', 'Because nouns require rising tone', 'To delete the final word'],
    translation: {
      content: 'Tại sao người nói có thể lên giọng ở một câu trần thuật vốn thường xuống giọng?',
      options: ['A. Vì tất cả các câu trần thuật đều là câu hỏi', 'B. Vì danh từ đòi hỏi tông giọng lên', 'C. To signal uncertainty or invite confirmation in context (Để thể hiện sự không chắc chắn hoặc mời sự xác nhận)', 'D. Để xóa từ cuối cùng']
    }
  },
  {
    p: 'What should learners do when interpreting intonation?',
    c: 'Combine the pitch pattern with grammar and communicative context.',
    w: ['Use pitch alone in every case.', 'Count letters only.', 'Assume all speakers sound identical.'],
    translation: {
      content: 'Người học nên làm gì khi giải thích ngữ điệu?',
      options: ['A. Chỉ sử dụng cao độ trong mọi trường hợp', 'B. Chỉ đếm chữ cái', 'C. Giả định tất cả người nói âm điệu giống hệt nhau', 'D. Combine the pitch pattern with grammar and communicative context. (Kết hợp mô hình cao độ với ngữ pháp và bối cảnh giao tiếp.)']
    }
  }
];

const vocabulary: Raw[] = [
  {
    p: 'Buildings and objects are examples of ______ heritage.',
    c: 'tangible',
    w: ['intangible only', 'oral-only', 'temporary spoken'],
    translation: {
      content: 'Các tòa nhà và vật thể là những ví dụ về di sản ______.',
      options: ['A. tangible (di sản hữu thể / vật thể)', 'B. intangible only', 'C. oral-only', 'D. temporary spoken']
    }
  },
  {
    p: 'Traditional knowledge and performance are often ______ heritage.',
    c: 'intangible',
    w: ['concrete-only', 'architectural material', 'ticketed'],
    translation: {
      content: 'Tri thức truyền thống và nghệ thuật trình diễn thường là di sản ______.',
      options: ['A. concrete-only', 'B. intangible (di sản phi vật thể / intangible heritage)', 'C. architectural material', 'D. ticketed']
    }
  },
  {
    p: 'A person skilled in a traditional craft is an:',
    c: 'artisan',
    w: ['audience', 'archive building', 'admission'],
    translation: {
      content: 'Người có tay nghề thành thạo trong một nghề thủ công truyền thống là một:',
      options: ['A. audience', 'B. archive building', 'C. artisan (nghệ nhân / artisan)', 'D. admission']
    }
  },
  {
    p: 'A: “What does restoration mean?” B: “It is work to ______.”',
    c: 'return heritage fabric to a defined earlier state',
    w: ['erase all history', 'replace every old part automatically', 'increase ticket prices'],
    representation: 'dialogue',
    translation: {
      content: 'A: “Restoration (trùng tu) có nghĩa là gì?” B: “Đó là công việc nhằm ______.”',
      options: ['A. xóa bỏ mọi lịch sử', 'B. tự động thay thế mọi phần cũ', 'C. tăng giá vé', 'D. return heritage fabric to a defined earlier state (phục hồi cấu trúc di sản về một trạng thái sớm hơn đã được xác định)']
    }
  },
  {
    p: 'A threat to an old structure may be described as:',
    c: 'deterioration',
    w: ['transmission', 'awareness', 'craftsmanship'],
    translation: {
      content: 'Mối đe dọa đối với một công trúc cổ có thể được mô tả là sự:',
      options: ['A. deterioration (sự xuống cấp / hư hại)', 'B. transmission', 'C. awareness', 'D. craftsmanship']
    }
  },
  {
    p: 'The noun for protecting and managing cultural value is:',
    c: 'conservation',
    w: ['conserve adjective', 'conservatively site', 'conservering'],
    translation: {
      content: 'Danh từ chỉ việc bảo tồn và quản lý giá trị văn hóa là:',
      options: ['A. conserve adjective', 'B. conservation (sự bảo tồn / conservation)', 'C. conservatively site', 'D. conservering']
    }
  },
  {
    p: 'Choose the correct heritage collocation.',
    c: 'preserve cultural heritage',
    w: ['do cultural heritage', 'make heritage down', 'take a tradition'],
    translation: {
      content: 'Chọn kết hợp từ (collocation) đúng về di sản:',
      options: ['A. do cultural heritage', 'B. make heritage down', 'C. preserve cultural heritage (bảo tồn di sản văn hóa)', 'D. take a tradition']
    }
  },
  {
    p: 'Skills can be ______ from one generation to the next.',
    c: 'passed down',
    w: ['restored at', 'raised into', 'documented off'],
    translation: {
      content: 'Các kỹ năng có thể được ______ từ thế hệ này sang thế hệ tiếp theo:',
      options: ['A. restored at', 'B. raised into', 'C. documented off', 'D. passed down (truyền lại / passed down)']
    }
  },
  {
    p: 'A campaign can ______ awareness of an endangered tradition.',
    c: 'raise',
    w: ['do', 'pass', 'restore into'],
    translation: {
      content: 'Một chiến dịch có thể ______ nhận thức về một truyền thống đang có nguy cơ mai một:',
      options: ['A. raise (nâng cao: raise awareness)', 'B. do', 'C. pass', 'D. restore into']
    }
  },
  {
    p: 'A: “What should researchers do with oral histories?” B: “They can ______ them with consent.”',
    c: 'document',
    w: ['deteriorate', 'demolish', 'exclude'],
    representation: 'dialogue',
    translation: {
      content: 'A: “Các nhà nghiên cứu nên làm gì với những lịch sử truyền miệng?” B: “Họ có thể ______ chúng nếu được sự đồng ý.”',
      options: ['A. deteriorate', 'B. document (tư liệu hóa / document)', 'C. demolish', 'D. exclude']
    }
  },
  {
    p: 'Local residents should be actively ______ in preservation decisions.',
    c: 'involved',
    w: ['involvingly', 'involvement adjective', 'involve at'],
    translation: {
      content: 'Cư dân địa phương nên được tham gia (be actively ______) một cách chủ động vào các quyết định bảo tồn.',
      options: ['A. involvingly', 'B. involvement adjective', 'C. involved (be involved in: tham gia vào)', 'D. involve at']
    }
  },
  {
    p: 'Which phrase means preventing physical harm to a historic place?',
    c: 'protect the site from damage',
    w: ['pass the site down damage', 'raise the site', 'restore awareness from'],
    translation: {
      content: 'Cụm từ nào có nghĩa là ngăn chặn tác hại vật lý đối với một di tích lịch sử?',
      options: ['A. pass the site down damage', 'B. raise the site', 'C. restore awareness from', 'D. protect the site from damage (bảo vệ di tích khỏi hư hại)']
    }
  }
];
const grammar: Raw[] = [
  {
    p: 'The class visited the archive ______ original maps.',
    c: 'to examine',
    w: ['examining after to purpose', 'examined', 'to examining'],
    translation: {
      content: 'Lớp học đã ghé thăm phòng lưu trữ ______ các bản đồ gốc.',
      options: ['A. to examine (để nghiên cứu/xem xét: To-infinitive chỉ mục đích)', 'B. examining', 'C. examined', 'D. to examining']
    }
  },
  {
    p: 'Volunteers raised funds ______ the damaged roof.',
    c: 'to repair',
    w: ['repairing as infinitive', 'repaired by funds', 'to repaired'],
    translation: {
      content: 'Các tình nguyện viên đã gây quỹ ______ mái nhà bị hư hại.',
      options: ['A. repairing', 'B. to repair (để sửa chữa: To-infinitive chỉ mục đích)', 'C. repaired', 'D. to repaired']
    }
  },
  {
    p: 'The museum added captions ______ access for more visitors.',
    c: 'to improve',
    w: ['improving after infinitive', 'improved', 'to improving'],
    translation: {
      content: 'Bảo tàng đã thêm các phụ đề ______ khả năng tiếp cận cho nhiều khách tham quan hơn.',
      options: ['A. improving', 'B. improved', 'C. to improve (để cải thiện: To-infinitive chỉ mục đích)', 'D. to improving']
    }
  },
  {
    p: 'A: “Why did they interview the artisan?” B: “______ her knowledge.”',
    c: 'To document',
    w: ['Documented by', 'To documenting', 'Documents'],
    representation: 'dialogue',
    translation: {
      content: 'A: “Tại sao họ lại phỏng vấn nghệ nhân?” B: “______ tri thức của cô ấy.”',
      options: ['A. Documented by', 'B. To documenting', 'C. Documents', 'D. To document (Để tư liệu hóa: To-infinitive trả lời cho câu hỏi Why)']
    }
  },
  {
    p: 'It is important ______ community consent.',
    c: 'to obtain',
    w: ['obtaining after infinitive', 'obtained', 'to obtaining'],
    translation: {
      content: 'Điều quan trọng là phải ______ sự đồng ý của cộng đồng.',
      options: ['A. to obtain (sau cấu trúc It is + adj + to-V: to obtain)', 'B. obtaining', 'C. obtained', 'D. to obtaining']
    }
  },
  {
    p: 'Residents were proud ______ their stories.',
    c: 'to share',
    w: ['sharing after infinitive', 'shared', 'to sharing'],
    translation: {
      content: 'Các cư dân cảm thấy tự hào khi được ______ những câu chuyện của họ.',
      options: ['A. sharing', 'B. to share (sau tính từ proud + to-V: proud to share)', 'C. shared', 'D. to sharing']
    }
  },
  {
    p: 'The council approved a plan ______ the old gate.',
    c: 'to restore',
    w: ['restoring only after plan to', 'restored', 'to restoring'],
    translation: {
      content: 'Hội đồng đã phê duyệt một kế hoạch ______ cổng cổ.',
      options: ['A. restoring', 'B. restored', 'C. to restore (bổ nghĩa cho danh từ plan: plan to restore)', 'D. to restoring']
    }
  },
  {
    p: 'A: “Do we have a place ______ the objects safely?” B: “Yes.”',
    c: 'to store',
    w: ['storing after place to', 'stored', 'to storing'],
    representation: 'dialogue',
    translation: {
      content: 'A: “Chúng ta có một nơi ______ các hiện vật an toàn không?” B: “Có.”',
      options: ['A. storing', 'B. stored', 'C. to storing', 'D. to store (bổ nghĩa cho danh từ place: place to store)']
    }
  },
  {
    p: 'She was the first student ______ the master craftsperson.',
    c: 'to interview',
    w: ['interviewing after first', 'interviewed by first', 'to interviewing'],
    translation: {
      content: 'Cô ấy là học sinh đầu tiên ______ nghệ nhân bậc thầy.',
      options: ['A. to interview (sau danh từ đi với the first + to-V: the first student to interview)', 'B. interviewing', 'C. interviewed', 'D. to interviewing']
    }
  },
  {
    p: 'Which sentence uses a noun-modifying infinitive correctly?',
    c: 'We need a method to record the designs accurately.',
    w: ['We need a method recording after to.', 'A method to recorded exists.', 'We need to recording a method.'],
    translation: {
      content: 'Câu nào sử dụng đúng động từ nguyên mẫu bổ nghĩa cho danh từ?',
      options: ['A. Sai cấu trúc', 'B. We need a method to record the designs accurately. (Dùng to-V bổ nghĩa cho danh từ method: a method to record...)', 'C. Sai cấu trúc', 'D. Sai cấu trúc']
    }
  },
  {
    p: 'Choose the correct form after the prepositional phrase “committed to”.',
    c: 'preserving',
    w: ['preserve', 'to preserve', 'preserved always'],
    translation: {
      content: 'Chọn dạng đúng sau cụm giới từ “committed to”:',
      options: ['A. preserve', 'B. to preserve', 'C. preserving (sau giới từ to trong "committed to" + V-ing)', 'D. preserved']
    }
  },
  {
    p: 'Which sentence distinguishes purpose from a prepositional to correctly?',
    c: 'They met to plan the project and committed to consulting residents.',
    w: ['They met planning and committed to consult.', 'They met to planning and committed consult.', 'They met planned and committed to consulted.'],
    translation: {
      content: 'Câu nào phân biệt đúng giữa to chỉ mục đích (to-V) và giới từ to (to + V-ing)?',
      options: ['A. Sai ngữ pháp', 'B. Sai ngữ pháp', 'C. Sai ngữ pháp', 'D. They met to plan the project and committed to consulting residents. (met to plan [to-V chỉ mục đích] & committed to consulting [giới từ to + V-ing])']
    }
  }
];

const passage1: QuestionStimulus = {
  id: 'eng11-stim-u6-reading-1', title: 'A community-controlled song archive',
  content: `A youth club wanted to record traditional songs remembered by older residents. Its first plan was to upload every performance to a public website. At a community meeting, several singers explained that some songs belonged to particular ceremonies, while others could be shared widely. Public access, they said, should not be treated as the default.

The club revised the project with a committee of singers, teachers and local historians. Before each recording, participants selected an access level: public, school-only, community-only, or temporarily closed. They could also choose how their names appeared and whether excerpts could be used in new educational materials. The archive recorded these decisions beside each file.

Young volunteers learned interviewing, audio editing and cataloguing, but community members remained responsible for cultural descriptions. When two accounts of a song’s origin differed, the catalogue preserved both instead of selecting one as the official version. The committee also scheduled annual reviews because permissions and community views might change.

The project produced fewer public recordings than the club originally expected. Nevertheless, it created a more trustworthy collection and encouraged several singers to participate who had initially refused. Success was measured through sound quality, accurate context, community control and use in local teaching—not simply the number of online views. The archive shows that digital preservation is not only copying information. It requires decisions about authority, consent, access, credit and future use if living heritage is to remain meaningful to the people who sustain it. The committee will also train new student archivists each year.`
};
const passage2: QuestionStimulus = {
  id: 'eng11-stim-u6-reading-2', title: 'Managing visitors at an old trading port',
  content: `An old trading port became popular after new transport links reduced travel time. Visitor spending supported guides, food stalls and family guesthouses, but crowded lanes made daily movement difficult for residents. Vibration from large vehicles also threatened fragile structures, and waste increased during holiday weekends.

The town initially considered a single daily visitor limit. Business owners worried that an inflexible cap would remove income even on quiet days. Residents argued that total numbers alone ignored where and when pressure occurred. The heritage office therefore collected hourly footfall, vehicle, waste and building-condition data across different zones.

The resulting plan moved coach parking outside the historic core, introduced timed entry for two narrow buildings, and created resident-only delivery periods. A small visitor fee funded waste collection and structural monitoring. Local guides helped explain why some areas required restrictions rather than presenting the rules as punishment.

After a year, peak crowding declined and cracks in one vulnerable building were no longer increasing, although researchers said longer observation was required. Some stalls near the former coach park lost passing customers, so the town supported a market beside the new walking route. The case demonstrates that heritage tourism has connected benefits and costs. Management must protect physical fabric and residential life while allowing viable local enterprise. Counting arrivals remains useful, but a sound assessment also asks where visitors go, how revenue is distributed, what damage changes, and whether residents retain access to their own neighbourhood. Future reports will include resident surveys alongside structural and economic indicators.`
};
const passage3: QuestionStimulus = {
  id: 'eng11-stim-u6-reading-3', title: 'Teaching a craft without freezing it',
  content: `A weaving cooperative had only six experienced artisans under the age of sixty. It opened weekend classes to pass techniques to teenagers, but early lessons focused on copying one historic pattern exactly. Several learners left because they could not see how the skill connected with their lives.

The artisans redesigned the programme. Beginners still learned fibre preparation, tool care and core weaving structures. After demonstrating these foundations, mentors invited students to create small objects for contemporary use and to explain their design choices. The cooperative documented both traditional patterns and new experiments, clearly labelling their different origins.

Some observers feared that innovation would weaken authenticity. The artisans responded that the craft had always changed with available materials, trade and community needs. In their view, preservation meant maintaining knowledge, standards and cultural relationships rather than producing identical objects forever. They also established rules preventing commercial partners from using community designs without permission or payment.

Attendance and completed products increased, but the cooperative did not rely on those numbers alone. It tracked whether learners could prepare materials independently, explain pattern meanings, follow safety practices and return as peer mentors. Experienced artisans reviewed quality, while students evaluated whether schedules and costs were accessible. The programme suggests that safeguarding living heritage requires continuity and room for responsible change. Transmission succeeds when learners gain real capability and when the people who hold the tradition retain authority over how knowledge is taught, adapted, credited and used. Graduates will help revise future lessons as materials and community needs change.`
};
const reading: Raw[] = [
  {
    p: 'Why did the song archive abandon automatic public access?',
    c: 'Some songs had cultural restrictions and required community decisions.',
    w: ['The club owned no recorder.', 'All singers wanted publicity.', 'Public websites cannot store audio.'],
    stimulus: passage1,
    translation: {
      content: 'Tại sao kho lưu trữ bài hát bỏ việc tự động truy cập công khai?',
      options: ['A. Some songs had cultural restrictions and required community decisions. (Một số bài hát có các hạn chế văn hóa và đòi hỏi sự quyết định của cộng đồng.)', 'B. Câu lạc bộ không sở hữu máy ghi âm', 'C. Tất cả ca sĩ đều muốn quảng bá', 'D. Các trang web công khai không thể lưu trữ âm thanh']
    }
  },
  {
    p: 'What did participants choose before recording?',
    c: 'Access, naming and possible future uses',
    w: ['Only the file colour', 'A compulsory public licence', 'Which account would be deleted'],
    stimulus: passage1,
    translation: {
      content: 'Người tham gia chọn điều gì trước khi ghi âm?',
      options: ['A. Chỉ màu sắc tệp', 'B. Access, naming and possible future uses (Mức độ truy cập, cách ghi tên và các mục đích sử dụng tương lai có thể có)', 'C. Một giấy phép công khai bắt buộc', 'D. Tài khoản nào sẽ bị xóa']
    }
  },
  {
    p: 'Why were two origin accounts preserved?',
    c: 'The archive avoided imposing one official version where memories differed.',
    w: ['The catalogue had no editor.', 'Origins were unimportant.', 'Both accounts were identical.'],
    stimulus: passage1,
    translation: {
      content: 'Tại sao 2 bản kể về nguồn gốc lại được bảo tồn?',
      options: ['A. Danh mục không có người biên tập', 'B. Nguồn gốc không quan trọng', 'C. The archive avoided imposing one official version where memories differed. (Kho lưu trữ tránh việc áp đặt một phiên bản chính thức khi ký ức khác nhau.)', 'D. Cả hai bản kể đều giống hệt nhau']
    }
  },
  {
    p: 'What does passage 1 present as meaningful success?',
    c: 'A trustworthy collection with context, consent and community control',
    w: ['The highest possible view count', 'Publishing every song immediately', 'Removing annual review'],
    stimulus: passage1,
    translation: {
      content: 'Đoạn 1 trình bày điều gì như một thành công có ý nghĩa?',
      options: ['A. Lượt xem cao nhất có thể', 'B. Xuất bản mọi bài hát ngay lập tức', 'C. Gỡ bỏ sự đánh giá hằng năm', 'D. A trustworthy collection with context, consent and community control (Bộ sưu tập đáng tin cậy với bối cảnh, sự đồng ý và sự kiểm soát của cộng đồng)']
    }
  },
  {
    p: 'Why was one fixed visitor cap considered insufficient?',
    c: 'Pressure varied by location and time, and livelihoods could be affected.',
    w: ['Visitor numbers were never counted.', 'Residents wanted unlimited coaches.', 'Buildings could not be monitored.'],
    stimulus: passage2,
    translation: {
      content: 'Tại sao một mức giới hạn khách cố định lại được coi là không đủ?',
      options: ['A. Pressure varied by location and time, and livelihoods could be affected. (Áp lực thay đổi theo vị trí và thời gian, và sinh kế có thể bị ảnh hưởng.)', 'B. Số lượng khách không bao giờ được đếm', 'C. Cư dân muốn xe khách không giới hạn', 'D. Các tòa nhà không thể theo dõi']
    }
  },
  {
    p: 'What funded waste collection and structural monitoring?',
    c: 'A small visitor fee',
    w: ['Song downloads', 'Artisan tuition', 'Private cars inside every lane'],
    stimulus: passage2,
    translation: {
      content: 'Điều gì đã chi trả cho việc thu gom rác thải và theo dõi kết cấu?',
      options: ['A. Tải xuống bài hát', 'B. A small visitor fee (Một khoản phí du khách nhỏ)', 'C. Học phí nghệ nhân', 'D. Ô tô tư nhân bên trong mỗi làn đường']
    }
  },
  {
    p: 'How did the town respond to losses near the old coach park?',
    c: 'It supported a market beside the new walking route.',
    w: ['It returned all coaches to narrow lanes.', 'It closed every stall.', 'It stopped collecting data.'],
    stimulus: passage2,
    translation: {
      content: 'Thị trấn đã phản ứng thế nào trước các tổn thất gần bãi đỗ xe khách cũ?',
      options: ['A. Nó đưa tất cả xe khách trở lại các làn đường hẹp', 'B. Nó đóng cửa mọi gian hàng', 'C. It supported a market beside the new walking route. (Nó hỗ trợ một khu chợ bên cạnh tuyến đường đi bộ mới.)', 'D. Nó ngừng thu thập dữ liệu']
    }
  },
  {
    p: 'Which inference best reflects the port case?',
    c: 'Good tourism management tracks distribution and impact, not arrivals alone.',
    w: ['More arrivals always protect buildings.', 'Restrictions have no economic effects.', 'Residents need no access.'],
    stimulus: passage2,
    translation: {
      content: 'Suy luận nào phản ánh tốt nhất trường hợp thương cảng?',
      options: ['A. Nhiều du khách hơn luôn bảo vệ các tòa nhà', 'B. Các hạn chế không có tác động kinh tế', 'C. Cư dân không cần quyền truy cập', 'D. Good tourism management tracks distribution and impact, not arrivals alone. (Quản lý du lịch tốt theo dõi sự phân bổ và tác động, chứ không chỉ riêng lượng khách đến.)']
    }
  },
  {
    p: 'Why did some learners leave the first weaving course?',
    c: 'Exact copying seemed disconnected from their lives.',
    w: ['No historic patterns existed.', 'Artisans refused to teach tools.', 'Classes allowed too much innovation.'],
    stimulus: passage3,
    translation: {
      content: 'Tại sao một số người học lại bỏ khóa học dệt đầu tiên?',
      options: ['A. Exact copying seemed disconnected from their lives. (Việc sao chép chính xác có vẻ xa rời đời sống của họ.)', 'B. Không có hoa văn lịch sử nào tồn tại', 'C. Các nghệ nhân từ chối dạy công cụ', 'D. Lớp học cho phép quá nhiều sự đổi mới']
    }
  },
  {
    p: 'What remained compulsory after the redesign?',
    c: 'Learning materials, tool care and core structures',
    w: ['Selling every new design', 'Copying one pattern forever', 'Giving designs to partners for free'],
    stimulus: passage3,
    translation: {
      content: 'Điều gì vẫn bắt buộc sau khi thiết kế lại khóa học?',
      options: ['A. Bán mọi thiết kế mới', 'B. Learning materials, tool care and core structures (Học chuẩn bị nguyên liệu, bảo dưỡng công cụ và các cấu trúc dệt cốt lõi)', 'C. Sao chép một hoa văn mãi mãi', 'D. Tặng thiết kế cho đối tác miễn phí']
    }
  },
  {
    p: 'How did artisans define preservation?',
    c: 'Maintaining knowledge, standards and relationships while allowing responsible change',
    w: ['Preventing every change', 'Maximising product numbers only', 'Removing community authority'],
    stimulus: passage3,
    translation: {
      content: 'Các nghệ nhân định nghĩa việc bảo tồn như thế nào?',
      options: ['A. Ngăn chặn mọi sự thay đổi', 'B. Chỉ tối đa hóa số lượng sản phẩm', 'C. Maintaining knowledge, standards and relationships while allowing responsible change (Duy trì tri thức, tiêu chuẩn và các mối quan hệ trong khi cho phép sự thay đổi có trách nhiệm)', 'D. Gỡ bỏ quyền hạn cộng đồng']
    }
  },
  {
    p: 'Which measure shows transmission beyond attendance?',
    c: 'Learners can work independently, explain meaning and become mentors.',
    w: ['The poster received likes.', 'Every object looked identical.', 'The course used a weekend.'],
    stimulus: passage3,
    translation: {
      content: 'Đo lường nào thể hiện sự truyền dạy vượt ra ngoài số lượng tham dự?',
      options: ['A. Áp phích nhận được lượt thích', 'B. Mọi vật thể trông giống hệt nhau', 'C. Khóa học sử dụng một cuối tuần', 'D. Learners can work independently, explain meaning and become mentors. (Người học có thể làm việc độc lập, giải thích ý nghĩa và trở thành người hướng dẫn.)']
    }
  }
];

const writing: Raw[] = [
  {
    p: 'Choose the best order: (a) Moisture is damaging the wall paintings. (b) The temple contains rare nineteenth-century paintings. (c) The proposal will improve drainage and monitor humidity.',
    c: 'b-a-c',
    w: ['a-c-b', 'c-b-a', 'b-c-a'],
    translation: {
      content: 'Chọn thứ tự tốt nhất: (a) Độ ẩm đang làm hỏng các bức tranh tường. (b) Ngôi đền chứa các bức tranh thế kỷ 19 quý hiếm. (c) Đề xuất sẽ cải thiện hệ thống thoát nước và theo dõi độ ẩm.',
      options: ['A. b-a-c', 'B. a-c-b', 'C. c-b-a', 'D. b-c-a']
    }
  },
  {
    p: 'Which is the clearest opening for a heritage project notice?',
    c: 'Applications are open for the community oral-history workshop on 14 March.',
    w: ['Hi, stuff happens!', 'History is old.', 'Come somehow.'],
    translation: {
      content: 'Mở đầu nào rõ ràng nhất cho một thông báo dự án di sản?',
      options: ['A. Chào, nhiều thứ xảy ra!', 'B. Applications are open for the community oral-history workshop on 14 March. (Đơn ứng tuyển hiện đã mở cho buổi hội thảo lịch sử truyền miệng cộng đồng vào ngày 14/3.)', 'C. Lịch sử thì cũ.', 'D. Đến bằng cách nào đó.']
    }
  },
  {
    p: 'Select the connector: “Visitor income supports families. ______, unmanaged crowds can damage the site.”',
    c: 'However',
    w: ['Therefore with no contrast', 'For example of time', 'Because although'],
    translation: {
      content: 'Chọn từ nối: “Thu nhập từ du khách hỗ trợ các gia đình. ______, đám đông không được quản lý có thể làm hỏng di tích.”',
      options: ['A. Vì vậy', 'B. Ví dụ', 'C. However (Tuy nhiên)', 'D. Bởi vì']
    }
  },
  {
    p: 'A: “What belongs after the project purpose?” B: “______”',
    c: 'Participants, schedule, responsibilities and application steps',
    w: ['An unrelated joke', 'A guarantee of permanent success', 'No practical information'],
    representation: 'dialogue',
    translation: {
      content: 'A: “Điều gì nên đi sau mục đích của dự án?” B: “______”',
      options: ['A. Trò đùa không liên quan', 'B. Lời đảm bảo thành công vĩnh viễn', 'C. Không có thông tin thực tế', 'D. Participants, schedule, responsibilities and application steps (Những người tham gia, lịch trình, trách nhiệm và các bước nộp đơn)']
    }
  },
  {
    p: 'Which statement best describes a measurable aim?',
    c: 'The project aims to train twenty learners and assess their skills after six months.',
    w: ['The project will save everything forever.', 'Heritage will become perfect.', 'Everyone will always agree.'],
    translation: {
      content: 'Phát biểu nào mô tả tốt nhất một mục tiêu có thể đo lường được?',
      options: ['A. The project aims to train twenty learners and assess their skills after six months. (Dự án nhằm mục đích đào tạo 20 người học và đánh giá kỹ năng của họ sau 6 tháng.)', 'B. Dự án sẽ cứu mọi thứ mãi mãi', 'C. Di sản sẽ trở nên hoàn hảo', 'D. Mọi người sẽ luôn đồng ý']
    }
  },
  {
    p: 'Which detail is least relevant in a restoration proposal?',
    c: 'The writer’s favourite sports team',
    w: ['Condition survey', 'Community consultation', 'Maintenance plan'],
    translation: {
      content: 'Chi tiết nào ít liên quan nhất trong đề xuất trùng tu?',
      options: ['A. Khảo sát tình trạng', 'B. The writer’s favourite sports team (Đội thể thao yêu thích của người viết - Không liên quan)', 'C. Tham vấn cộng đồng', 'D. Kế hoạch bảo trì']
    }
  },
  {
    p: 'Choose the correct purpose clause.',
    c: 'The team scanned the documents to create backup copies.',
    w: ['The team scanned to creating.', 'Scanned documents, the team to copies.', 'The team to scanned copies.'],
    translation: {
      content: 'Chọn mệnh đề chỉ mục đích đúng:',
      options: ['A. Sai ngữ pháp', 'B. Sai ngữ pháp', 'C. The team scanned the documents to create backup copies. (dùng to-V để chỉ mục đích: to create...)', 'D. Sai ngữ pháp']
    }
  },
  {
    p: 'A: “How should I describe a realistic benefit?” B: “______”',
    c: 'Use “could help” and name the mechanism.',
    w: ['Promise eternal success.', 'Remove all conditions.', 'Use the strongest claim possible.'],
    representation: 'dialogue',
    translation: {
      content: 'A: “Tớ nên mô tả một lợi ích thực tế như thế nào?” B: “______”',
      options: ['A. Hứa hẹn thành công vĩnh cửu', 'B. Gỡ bỏ mọi điều kiện', 'C. Sử dụng khẳng định mạnh nhất có thể', 'D. Use “could help” and name the mechanism. (Sử dụng “có thể giúp” và nêu rõ cơ chế.)']
    }
  },
  {
    p: 'Select the best topic sentence for details about consent, access levels and credit.',
    c: 'A responsible digital archive needs clear community governance.',
    w: ['Files have names.', 'Computers use power.', 'Songs can be short.'],
    translation: {
      content: 'Chọn câu chủ đề tốt nhất cho các chi tiết về sự đồng ý, các mức truy cập và sự ghi nhận công lao:',
      options: ['A. A responsible digital archive needs clear community governance. (Kho lưu trữ kỹ thuật số có trách nhiệm cần có sự quản trị cộng đồng rõ ràng.)', 'B. Các tệp có tên.', 'C. Máy tính dùng điện.', 'D. Các bài hát có thể ngắn.']
    }
  },
  {
    p: 'Which revision gives the community an active role?',
    c: 'Community representatives will approve access rules and review them annually.',
    w: ['Experts will decide without consultation.', 'Residents will be informed after publication.', 'Permission is assumed.'],
    translation: {
      content: 'Bản sửa đổi nào trao cho cộng đồng một vai trò chủ động?',
      options: ['A. Các chuyên gia sẽ quyết định mà không tham vấn', 'B. Community representatives will approve access rules and review them annually. (Đại diện cộng đồng sẽ phê duyệt các quy tắc truy cập và xem xét chúng hằng năm.)', 'C. Cư dân sẽ được thông báo sau khi xuất bản', 'D. Sự cho phép được tự mặc định']
    }
  },
  {
    p: 'Choose the clearest combination.',
    c: 'To reduce vibration near the gate, the town moved coach parking outside the old quarter.',
    w: ['Vibration to moving coach because.', 'The gate moved to coach.', 'Outside because parking vibration.'],
    translation: {
      content: 'Chọn câu kết hợp rõ ràng nhất:',
      options: ['A. Vô nghĩa', 'B. Vô nghĩa', 'C. To reduce vibration near the gate, the town moved coach parking outside the old quarter. (Để giảm sự rung lắc gần cổng, thị trấn đã chuyển bãi đỗ xe khách ra ngoài khu phố cổ.)', 'D. Vô nghĩa']
    }
  },
  {
    p: 'Which final sentence best closes a balanced preservation proposal?',
    c: 'Regular reviews will assess physical condition, community benefit and unintended effects.',
    w: ['Success needs no measurement.', 'The proposal ends here.', 'More visitors prove every goal.'],
    translation: {
      content: 'Câu kết thúc nào khép lại tốt nhất một đề xuất bảo tồn cân bằng?',
      options: ['A. Thành công không cần đo lường', 'B. Đề xuất kết thúc ở đây', 'C. Nhiều khách hơn chứng minh mọi mục tiêu', 'D. Regular reviews will assess physical condition, community benefit and unintended effects. (Các đợt đánh giá thường xuyên sẽ đánh giá tình trạng vật lý, lợi ích cộng đồng và các tác động ngoài dự kiến.)']
    }
  }
];
const communication: Raw[] = [
  {
    p: 'What is the most respectful question before recording a performance?',
    c: 'Would you be comfortable with us recording it, and how may it be used?',
    w: ['We will upload it now.', 'Permission is unnecessary.', 'Who owns the most views?'],
    translation: {
      content: 'Câu hỏi thể hiện sự tôn trọng nhất trước khi ghi âm một màn trình diễn là gì?',
      options: ['A. Would you be comfortable with us recording it, and how may it be used? (Bác/cậu có thoải mái nếu chúng cháu ghi âm không, và nó có thể được sử dụng như thế nào?)', 'B. Chúng tớ sẽ tải nó lên ngay bây giờ', 'C. Sự cho phép là không cần thiết', 'D. Ai sở hữu nhiều lượt xem nhất']
    }
  },
  {
    p: 'A: “The community prefers restricted access.” B: “______”',
    c: 'Let us document that condition and design the archive accordingly.',
    w: ['Public access must override them.', 'Ignore the request.', 'Publish first and ask later.'],
    representation: 'dialogue',
    translation: {
      content: 'A: “Cộng đồng ưu tiên truy cập hạn chế.” B: “______”',
      options: ['A. Truy cập công khai phải đè lên họ', 'B. Let us document that condition and design the archive accordingly. (Hãy ghi lại điều kiện đó và thiết kế kho lưu trữ tương ứng.)', 'C. Lờ đi yêu cầu', 'D. Xuất bản trước và hỏi sau']
    }
  },
  {
    p: 'Which sentence makes a constructive preservation suggestion?',
    c: 'We could invite artisans to co-design the school workshops.',
    w: ['Students should copy without context.', 'Experts should exclude residents.', 'Traditions need no practitioners.'],
    translation: {
      content: 'Câu nào đưa ra gợi ý bảo tồn mang tính xây dựng?',
      options: ['A. Học sinh nên sao chép mà không cần bối cảnh', 'B. Các chuyên gia nên loại trừ cư dân', 'C. We could invite artisans to co-design the school workshops. (Chúng ta có thể mời các nghệ nhân cùng thiết kế các buổi hội thảo ở trường học.)', 'D. Các truyền thống không cần người thực hành']
    }
  },
  {
    p: 'A: “Can we photograph this object?” B: “______”',
    c: 'Please ask the custodian; photography is restricted during the ceremony.',
    w: ['Take it secretly.', 'All objects are public.', 'Rules never apply.'],
    representation: 'dialogue',
    translation: {
      content: 'A: “Chúng tớ có thể chụp ảnh hiện vật này không?” B: “______”',
      options: ['A. Hãy chụp lén', 'B. Tất cả hiện vật đều công khai', 'C. Các quy tắc không bao giờ áp dụng', 'D. Please ask the custodian; photography is restricted during the ceremony. (Vui lòng hỏi người quản lý; việc chụp ảnh bị hạn chế trong lúc diễn ra nghi lễ.)']
    }
  },
  {
    p: 'Which response properly gives credit?',
    c: 'The catalogue names the artisan and follows the agreed wording.',
    w: ['The designer is omitted.', 'The school claims authorship.', 'Credit is replaced with a logo.'],
    translation: {
      content: 'Phản hồi nào ghi nhận công lao một cách đúng đắn?',
      options: ['A. The catalogue names the artisan and follows the agreed wording. (Danh mục ghi rõ tên nghệ nhân và tuân theo diễn đạt đã thỏa thuận.)', 'B. Nhà thiết kế bị bỏ qua', 'C. Trường học nhận tác quyền', 'D. Sự ghi nhận bị thay thế bằng một logo']
    }
  },
  {
    p: 'A: “Tourism revenue increased.” B: “______”',
    c: 'That is useful, but how was it distributed and did site damage change?',
    w: ['Revenue proves every outcome.', 'Residents cannot be stakeholders.', 'Damage is irrelevant.'],
    representation: 'dialogue',
    translation: {
      content: 'A: “Doanh thu du lịch đã tăng.” B: “______”',
      options: ['A. Doanh thu chứng minh mọi kết quả', 'B. That is useful, but how was it distributed and did site damage change? (Điều đó hữu ích, nhưng nó đã được phân bổ thế nào và mức độ hư hại di tích có thay đổi không?)', 'C. Cư dân không thể là bên liên quan', 'D. Hư hại là không liên quan']
    }
  },
  {
    p: 'Which question helps clarify cultural context?',
    c: 'Could you explain when and by whom this practice is traditionally used?',
    w: ['Why is it strange?', 'Can we remove its meaning?', 'Does context matter?'],
    translation: {
      content: 'Câu hỏi nào giúp làm rõ bối cảnh văn hóa?',
      options: ['A. Tại sao nó lạ kỳ vậy?', 'B. Chúng ta có thể gỡ bỏ ý nghĩa của nó không?', 'C. Could you explain when and by whom this practice is traditionally used? (Cậu có thể giải thích tập quán này theo truyền thống được sử dụng khi nào và bởi ai không?)', 'D. Bối cảnh có quan trọng không?']
    }
  },
  {
    p: 'A: “We cannot share this story publicly.” B: “______”',
    c: 'I understand. Would a community-only record be appropriate, or should we not record it?',
    w: ['We will share it anyway.', 'Secrecy proves it is unimportant.', 'Consent can be assumed.'],
    representation: 'dialogue',
    translation: {
      content: 'A: “Chúng tớ không thể chia sẻ câu chuyện này công khai.” B: “______”',
      options: ['A. Chúng tớ sẽ vẫn chia sẻ nó', 'B. Sự bí mật chứng minh nó không quan trọng', 'C. Sự đồng ý có thể tự suy ra', 'D. I understand. Would a community-only record be appropriate, or should we not record it? (Tớ hiểu mà. Liệu một bản ghi chỉ trong nội bộ cộng đồng có phù hợp không, hay chúng tớ không nên ghi âm?)']
    }
  },
  {
    p: 'What is a fair role for outside specialists?',
    c: 'Provide expertise while decisions are made with rights-holders and communities.',
    w: ['Control every cultural decision.', 'Replace local knowledge.', 'Publish without review.'],
    translation: {
      content: 'Vai trò công bằng cho các chuyên gia bên ngoài là gì?',
      options: ['A. Provide expertise while decisions are made with rights-holders and communities. (Cung cấp chuyên môn trong khi các quyết định được đưa ra cùng những người nắm giữ bản quyền và cộng đồng.)', 'B. Kiểm soát mọi quyết định văn hóa', 'C. Thay thế kiến thức địa phương', 'D. Xuất bản mà không qua đánh giá']
    }
  },
  {
    p: 'A: “Innovation destroys authenticity.” B: “______”',
    c: 'Could we ask practitioners which changes maintain core knowledge and standards?',
    w: ['Only outsiders define authenticity.', 'Traditions never changed historically.', 'No evidence is needed.'],
    representation: 'dialogue',
    translation: {
      content: 'A: “Sự đổi mới làm hủy hoại tính xác thực.” B: “______”',
      options: ['A. Chỉ người ngoài mới định nghĩa tính xác thực', 'B. Could we ask practitioners which changes maintain core knowledge and standards? (Chúng ta có thể hỏi những người thực hành xem sự thay đổi nào giữ được tri thức và tiêu chuẩn cốt lõi không?)', 'C. Các truyền thống không bao giờ thay đổi trong lịch sử', 'D. Không cần bằng chứng']
    }
  },
  {
    p: 'Which proposal addresses accessibility?',
    c: 'Offer free local sessions, translated materials and transport support.',
    w: ['Raise every fee.', 'Schedule only during work hours.', 'Remove captions.'],
    translation: {
      content: 'Đề xuất nào giải quyết khả năng tiếp cận?',
      options: ['A. Tăng mọi chi phí', 'B. Lên lịch chỉ trong giờ làm việc', 'C. Offer free local sessions, translated materials and transport support. (Cung cấp các buổi miễn phí địa phương, tài liệu được dịch và hỗ trợ phương tiện di chuyển.)', 'D. Gỡ bỏ phụ đề']
    }
  },
  {
    p: 'A: “How will we know the apprenticeship works?” B: “______”',
    c: 'Assess skills, understanding, continued practice and mentor feedback over time.',
    w: ['Count registrations only.', 'Use one photograph.', 'Assume success before teaching.'],
    representation: 'dialogue',
    translation: {
      content: 'A: “Làm thế nào chúng ta biết chương trình học nghề hoạt động hiệu quả?” B: “______”',
      options: ['A. Chỉ đếm số lượng đăng ký', 'B. Sử dụng một bức ảnh', 'C. Cho rằng thành công trước khi dạy', 'D. Assess skills, understanding, continued practice and mentor feedback over time. (Đánh giá kỹ năng, sự hiểu biết, việc thực hành liên tục và phản hồi từ người hướng dẫn theo thời gian.)']
    }
  }
];

export const g11EnglishModule6Questions: CourseQuestion[] = [
  ...build('pronunciation', 'language', pronunciation, ['statement-command', 'list-intonation']),
  ...build('vocabulary', 'language', vocabulary, ['meaning-word-form', 'heritage-collocation']),
  ...build('grammar', 'language', grammar, ['purpose-adjective', 'noun-modifier']),
  ...build('reading', 'reading', reading, ['main-detail', 'infer-stakeholder']),
  ...build('writing', 'writing', writing, ['order-cohesion', 'transform-proposal']),
  ...build('communication', 'communication-culture', communication, ['request-suggest', 'community-respect'])
];
