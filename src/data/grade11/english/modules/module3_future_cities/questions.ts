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
const difficulties: CourseQuestion['difficulty'][] = ['easy', 'easy', 'easy', 'easy', 'medium', 'medium', 'medium', 'medium', 'medium', 'hard', 'hard', 'hard'];
const build = (key: string, type: string, lesson: string, outcome: string, rows: Row[]): CourseQuestion[] =>
  rows.map((row, index) => ({
    id: `eng11-q-u3-${key}-${String(index + 1).padStart(2, '0')}`,
    courseId: 'grade11:english', moduleId: 'eng11-m3', lessonId: lesson,
    subjectId: 'english', topicId: 'eng11-topic-u3', questionTypeId: type,
    content: row.content, options: row.options, correctAnswer: row.answer,
    translation: row.translation,
    responseType: 'single_choice', validatorType: 'choice',
    difficulty: difficulties[index], points: 0.25, sourceType: 'manual', outcomeIds: [outcome],
    subTypeId: row.subTypeId, practiceRole: roles[index % 6],
    representationType: row.representationType ?? (index % 4 === 3 ? 'dialogue' : 'text'),
    isMasteryHoldout: index % 6 === 5, stimulus: row.stimulus
  }));

const pronunciationRows: Row[] = [
  {
    content: 'Which phrase contains consonant-to-vowel linking?',
    options: ['A. lives‿in', 'B. smart city', 'C. green roof', 'D. clean street'],
    answer: 'A',
    subTypeId: 'eng11-u3-pron-identify',
    translation: {
      content: 'Cụm từ nào chứa nối âm giữa phụ âm và nguyên âm (consonant-to-vowel linking)?',
      options: ['A. lives‿in (/s/ hoặc /z/ nối sang /ɪ/)', 'B. smart city', 'C. green roof', 'D. clean street']
    }
  },
  {
    content: 'In “cities of the future”, the most likely linking occurs between:',
    options: ['A. the / future', 'B. cities / of', 'C. of / the', 'D. cities / future'],
    answer: 'B',
    subTypeId: 'eng11-u3-pron-identify',
    translation: {
      content: 'Trong cụm “cities of the future”, nối âm nhiều khả năng xảy ra nhất giữa:',
      options: ['A. the / future', 'B. cities / of (phụ âm /z/ ở cuối cities nối sang nguyên âm /ə/ ở đầu of: cities‿of)', 'C. of / the', 'D. cities / future']
    }
  },
  {
    content: 'Choose the correctly marked linking in “turn on the lights”.',
    options: ['A. turn / on', 'B. on‿the', 'C. turn‿on', 'D. the‿lights'],
    answer: 'C',
    subTypeId: 'eng11-u3-pron-identify',
    translation: {
      content: 'Chọn ký hiệu nối âm đúng trong cụm “turn on the lights”:',
      options: ['A. turn / on', 'B. on‿the', 'C. turn‿on (phụ âm /n/ nối sang nguyên âm /ɒ/)', 'D. the‿lights']
    }
  },
  {
    content: 'A: “Where is the link in ‘bus is electric’?” B: “Between ______.”',
    options: ['A. electric and silence', 'B. bus and bus', 'C. is and a consonant', 'D. bus‿is and is‿electric'],
    answer: 'D',
    subTypeId: 'eng11-u3-pron-identify',
    representationType: 'dialogue',
    translation: {
      content: 'A: “Nối âm nằm ở đâu trong cụm ‘bus is electric’?” B: “Ở giữa ______.”',
      options: ['A. electric và khoảng lặng', 'B. bus và bus', 'C. is và một phụ âm', 'D. bus‿is and is‿electric (bắt đầu bằng phụ âm nối sang nguyên âm)']
    }
  },
  {
    content: 'Which word boundary can link in “make it accessible”?',
    options: ['A. make‿it', 'B. it / accessible only after a pause', 'C. make / accessible', 'D. no boundary'],
    answer: 'A',
    subTypeId: 'eng11-u3-pron-identify',
    translation: {
      content: 'Ranh giới từ nào có thể nối âm trong cụm “make it accessible”?',
      options: ['A. make‿it (âm cuối /k/ của make nối sang nguyên âm /ɪ/ của it)', 'B. it / accessible chỉ sau khi dừng', 'C. make / accessible', 'D. không có ranh giới']
    }
  },
  {
    content: 'In “an app for everyone”, which boundary clearly has final-consonant to initial-vowel linking?',
    options: ['A. an / app has vowel-vowel', 'B. for‿everyone', 'C. app / for has consonant-consonant', 'D. everyone / end'],
    answer: 'B',
    subTypeId: 'eng11-u3-pron-identify',
    translation: {
      content: 'Trong cụm “an app for everyone”, ranh giới từ nào thể hiện rõ nối âm phụ âm cuối sang nguyên âm đầu?',
      options: ['A. an / app có nguyên âm-nguyên âm', 'B. for‿everyone (phụ âm /r/ nối sang nguyên âm /e/)', 'C. app / for có phụ âm-phụ âm', 'D. everyone / end']
    }
  },
  {
    content: 'Which pair normally does NOT create consonant-to-vowel linking?',
    options: ['A. move‿in', 'B. plan‿it', 'C. green park', 'D. turn‿off'],
    answer: 'C',
    subTypeId: 'eng11-u3-pron-boundary',
    translation: {
      content: 'Cặp nào thông thường KHÔNG tạo ra nối âm phụ âm sang nguyên âm?',
      options: ['A. move‿in', 'B. plan‿it', 'C. green park (kết thúc phụ âm /n/ gặp phụ âm /p/ ở từ tiếp theo -> phụ âm-phụ âm)', 'D. turn‿off']
    }
  },
  {
    content: 'A: “Should we link across a full stop?” B: “______”',
    options: ['A. Always', 'B. Only because it is written', 'C. Every consonant must link', 'D. Normally no, because the full stop creates a pause.'],
    answer: 'D',
    subTypeId: 'eng11-u3-pron-boundary',
    representationType: 'dialogue',
    translation: {
      content: 'A: “Chúng ta có nên nối âm qua dấu chấm câu không?” B: “______”',
      options: ['A. Luôn luôn', 'B. Chỉ vì nó được viết', 'C. Mọi phụ âm phải nối', 'D. Normally no, because the full stop creates a pause. (Thông thường là không, vì dấu chấm tạo ra một khoảng dừng.)']
    }
  },
  {
    content: 'Why can “make‿it” link although make ends with the letter e?',
    options: ['A. The final spoken sound is /k/.', 'B. Every letter e is a vowel sound.', 'C. It begins with a consonant.', 'D. Make has no final sound.'],
    answer: 'A',
    subTypeId: 'eng11-u3-pron-boundary',
    translation: {
      content: 'Tại sao “make‿it” có thể nối âm mặc dù từ make kết thúc bằng chữ cái e?',
      options: ['A. The final spoken sound is /k/. (Âm đọc/phát âm cuối cùng là phụ âm /k/.)', 'B. Mọi chữ cái e đều là nguyên âm.', 'C. Nó bắt đầu bằng một phụ âm.', 'D. Make không có âm cuối.']
    }
  },
  {
    content: 'Which statement about linking is correct?',
    options: ['A. It depends only on spelling.', 'B. It depends on the actual sounds and absence of a pause.', 'C. It occurs only inside one word.', 'D. It changes the grammatical tense.'],
    answer: 'B',
    subTypeId: 'eng11-u3-pron-boundary',
    translation: {
      content: 'Phát biểu nào về nối âm là đúng?',
      options: ['A. Nó chỉ phụ thuộc vào cách đánh vần.', 'B. It depends on the actual sounds and absence of a pause. (Nó phụ thuộc vào âm phát ra thực tế và việc không có khoảng ngắt nghỉ.)', 'C. Nó chỉ xảy ra bên trong một từ.', 'D. Nó làm thay đổi thì ngữ pháp.']
    }
  },
  {
    content: 'In “a safe and open space”, which boundary is most likely linked?',
    options: ['A. a / safe', 'B. safe / and because e is pronounced', 'C. safe‿and because safe ends in /f/', 'D. open / space'],
    answer: 'C',
    subTypeId: 'eng11-u3-pron-boundary',
    translation: {
      content: 'Trong cụm “a safe and open space”, ranh giới từ nào nhiều khả năng được nối âm nhất?',
      options: ['A. a / safe', 'B. safe / and', 'C. safe‿and because safe ends in /f/ (âm phát ra cuối là phụ âm /f/ nối sang /æ/ trong and)', 'D. open / space']
    }
  },
  {
    content: 'Which marking respects a pause in “The bus stopped. It opened its doors”?',
    options: ['A. stopped‿It', 'B. bus‿stopped', 'C. The‿bus', 'D. no link across stopped. / It, but opened‿its may link'],
    answer: 'D',
    subTypeId: 'eng11-u3-pron-boundary',
    translation: {
      content: 'Cách đánh dấu nào tôn trọng khoảng dừng trong câu “The bus stopped. It opened its doors”?',
      options: ['A. stopped‿It', 'B. bus‿stopped', 'C. The‿bus', 'D. no link across stopped. / It, but opened‿its may link (Không nối âm qua dấu chấm ở stopped. / It, nhưng opened‿its có thể nối âm)']
    }
  }
];

const vocabularyRows: Row[] = [
  {
    content: 'Roads, water systems and power networks are parts of a city’s ______.',
    options: ['A. infrastructure', 'B. prediction', 'C. population alone', 'D. appliance'],
    answer: 'A',
    subTypeId: 'eng11-u3-vocab-meaning',
    translation: {
      content: 'Đường xá, hệ thống cấp nước và mạng lưới điện là các phần thuộc ______ của một thành phố.',
      options: ['A. infrastructure (hạ tầng / cơ sở hạ tầng)', 'B. prediction', 'C. population alone', 'D. appliance']
    }
  },
  {
    content: 'A small device that detects movement, heat or pollution is a ______.',
    options: ['A. pedestrian', 'B. sensor', 'C. resident', 'D. district'],
    answer: 'B',
    subTypeId: 'eng11-u3-vocab-meaning',
    translation: {
      content: 'Một thiết bị nhỏ phát hiện chuyển động, nhiệt độ hoặc ô nhiễm là một ______.',
      options: ['A. pedestrian', 'B. sensor (cảm biến)', 'C. resident', 'D. district']
    }
  },
  {
    content: 'Traffic ______ occurs when too many vehicles use limited road space.',
    options: ['A. privacy', 'B. housing', 'C. congestion', 'D. energy'],
    answer: 'C',
    subTypeId: 'eng11-u3-vocab-meaning',
    translation: {
      content: 'Sự ______ giao thông xảy ra khi quá nhiều phương tiện sử dụng không gian đường bộ có hạn.',
      options: ['A. privacy', 'B. housing', 'C. congestion (ùn tắc / traffic congestion)', 'D. energy']
    }
  },
  {
    content: 'A: “Who is a pedestrian?” B: “A person who is travelling ______.”',
    options: ['A. by train', 'B. by car', 'C. by plane', 'D. on foot'],
    answer: 'D',
    subTypeId: 'eng11-u3-vocab-meaning',
    representationType: 'dialogue',
    translation: {
      content: 'A: “Pedestrian (người đi bộ) là ai?” B: “Là một người đang di chuyển ______.”',
      options: ['A. bằng tàu hỏa', 'B. bằng xe ô tô', 'C. bằng máy bay', 'D. on foot (bằng chân / đi bộ)']
    }
  },
  {
    content: 'Housing described as ______ is reasonably priced for people with ordinary incomes.',
    options: ['A. affordable', 'B. renewable', 'C. congested', 'D. automatic'],
    answer: 'A',
    subTypeId: 'eng11-u3-vocab-meaning',
    translation: {
      content: 'Nhà ở được mô tả là ______ có giá cả hợp lý cho những người có thu nhập bình thường.',
      options: ['A. affordable (vừa túi tiền / giá cả hợp lý)', 'B. renewable', 'C. congested', 'D. automatic']
    }
  },
  {
    content: 'Urban planners decide how land and services should be organised; this process is called city ______.',
    options: ['A. sensing', 'B. planning', 'C. commuting', 'D. emitting'],
    answer: 'B',
    subTypeId: 'eng11-u3-vocab-meaning',
    translation: {
      content: 'Các nhà hoạch định đô thị quyết định cách tổ chức đất đai và các dịch vụ; quá trình này được gọi là ______ thành phố.',
      options: ['A. sensing', 'B. planning (quy hoạch thành phố / city planning)', 'C. commuting', 'D. emitting']
    }
  },
  {
    content: 'Solar and wind power are forms of ______ energy.',
    options: ['A. renewable', 'B. crowded', 'C. public', 'D. vertical'],
    answer: 'A',
    subTypeId: 'eng11-u3-vocab-collocation',
    translation: {
      content: 'Năng lượng mặt trời và năng lượng gió là các dạng năng lượng ______.',
      options: ['A. renewable (tái tạo / renewable energy)', 'B. crowded', 'C. public', 'D. vertical']
    }
  },
  {
    content: 'Reliable ______ transport can reduce the number of private cars.',
    options: ['A. common', 'B. public', 'C. sharedly', 'D. urbanised'],
    answer: 'B',
    subTypeId: 'eng11-u3-vocab-collocation',
    translation: {
      content: 'Giao thông ______ đáng tin cậy có thể làm giảm số lượng xe ô tô cá nhân.',
      options: ['A. common', 'B. public (công cộng / public transport)', 'C. sharedly', 'D. urbanised']
    }
  },
  {
    content: 'Planting trees can help cities ______ carbon emissions and provide shade.',
    options: ['A. raise', 'B. create', 'C. reduce', 'D. consume up'],
    answer: 'C',
    subTypeId: 'eng11-u3-vocab-collocation',
    translation: {
      content: 'Trồng cây có thể giúp các thành phố ______ lượng khí thải carbon và cung cấp bóng mát.',
      options: ['A. raise', 'B. create', 'C. reduce (cắt giảm / reduce carbon emissions)', 'D. consume up']
    }
  },
  {
    content: 'A: “What is the goal of the new metro?” B: “It should ______ traffic congestion.”',
    options: ['A. collect', 'B. develop', 'C. power', 'D. ease'],
    answer: 'D',
    subTypeId: 'eng11-u3-vocab-collocation',
    representationType: 'dialogue',
    translation: {
      content: 'A: “Mục tiêu của tuyến tàu điện ngầm mới là gì?” B: “Nó giúp ______ tình trạng ùn tắc giao thông.”',
      options: ['A. collect', 'B. develop', 'C. power', 'D. ease (làm giảm nhẹ / ease traffic congestion)']
    }
  },
  {
    content: 'Safe parks and accessible services can improve residents’ quality of ______.',
    options: ['A. life', 'B. living only as an adjective', 'C. lively', 'D. lifetime ticket'],
    answer: 'A',
    subTypeId: 'eng11-u3-vocab-collocation',
    translation: {
      content: 'Công viên an toàn và các dịch vụ dễ tiếp cận có thể cải thiện chất lượng ______ của người dân.',
      options: ['A. life (chất lượng cuộc sống / quality of life)', 'B. living', 'C. lively', 'D. lifetime ticket']
    }
  },
  {
    content: 'The city installed air-quality ______ near schools to measure pollution.',
    options: ['A. infrastructures', 'B. sensors', 'C. pedestrians', 'D. congestions'],
    answer: 'B',
    subTypeId: 'eng11-u3-vocab-collocation',
    translation: {
      content: 'Thành phố đã lắp đặt các ______ chất lượng không khí gần các trường học để đo độ ô nhiễm.',
      options: ['A. infrastructures', 'B. sensors (cảm biến / air-quality sensors)', 'C. pedestrians', 'D. congestions']
    }
  }
];

const grammarRows: Row[] = [
  {
    content: 'I ______ the new transport plan is practical.',
    options: ['A. think', 'B. am thinking', 'C. thinking', 'D. am think'],
    answer: 'A',
    subTypeId: 'eng11-u3-grammar-stative',
    translation: {
      content: 'Tớ ______ kế hoạch giao thông mới là thực tế.',
      options: ['A. think (Động từ trạng thái chỉ suy nghĩ/quan điểm: think)', 'B. am thinking', 'C. thinking', 'D. am think']
    }
  },
  {
    content: 'The planning team ______ about several locations for the new station this week.',
    options: ['A. thinks permanently', 'B. is thinking', 'C. thinked', 'D. has think'],
    answer: 'B',
    subTypeId: 'eng11-u3-grammar-stative',
    translation: {
      content: 'Đội ngũ quy hoạch ______ về một số địa điểm cho ga tàu mới trong tuần này.',
      options: ['A. thinks permanently', 'B. is thinking (Động từ chỉ hành động suy nghĩ/cân nhắc tạm thời: is thinking)', 'C. thinked', 'D. has think']
    }
  },
  {
    content: 'The city ______ an efficient bus network.',
    options: ['A. is having now as possession', 'B. having', 'C. has', 'D. have been'],
    answer: 'C',
    subTypeId: 'eng11-u3-grammar-stative',
    translation: {
      content: 'Thành phố ______ một mạng lưới xe buýt hiệu quả.',
      options: ['A. is having now as possession', 'B. having', 'C. has (Chỉ sự sở hữu / trạng thái lâu dài: has)', 'D. have been']
    }
  },
  {
    content: 'A: “Why can’t I call Mai?” B: “She ______ a meeting with the architects now.”',
    options: ['A. has as possession', 'B. have', 'C. is had', 'D. is having'],
    answer: 'D',
    subTypeId: 'eng11-u3-grammar-stative',
    representationType: 'dialogue',
    translation: {
      content: 'A: “Tại sao tớ không gọi được cho Mai?” B: “Bạn ấy ______ một cuộc họp với các kiến trúc sư lúc này.”',
      options: ['A. has as possession', 'B. have', 'C. is had', 'D. is having (Hành động đang diễn ra: is having a meeting)']
    }
  },
  {
    content: 'The engineer ______ the material to check whether it is safe.',
    options: ['A. is feeling', 'B. feels a permanent opinion', 'C. feel', 'D. has feel'],
    answer: 'A',
    subTypeId: 'eng11-u3-grammar-stative',
    translation: {
      content: 'Kỹ sư ______ vật liệu để kiểm tra xem nó có an toàn hay không.',
      options: ['A. is feeling (Hành động chạm/sờ để kiểm tra: is feeling)', 'B. feels a permanent opinion', 'C. feel', 'D. has feel']
    }
  },
  {
    content: 'I ______ what you mean about protecting residents’ data.',
    options: ['A. am seeing', 'B. see', 'C. seeing', 'D. am see'],
    answer: 'B',
    subTypeId: 'eng11-u3-grammar-stative',
    translation: {
      content: 'Tớ ______ ý cậu muốn nói gì về việc bảo vệ dữ liệu của cư dân.',
      options: ['A. am seeing', 'B. see (Động từ trạng thái chỉ sự hiểu ý: see)', 'C. seeing', 'D. am see']
    }
  },
  {
    content: 'The renovated square looks ______ at night.',
    options: ['A. attractively', 'B. attraction', 'C. attractive', 'D. attract'],
    answer: 'C',
    subTypeId: 'eng11-u3-grammar-linking',
    translation: {
      content: 'Quảng trường được cải tạo trông ______ vào ban đêm.',
      options: ['A. attractively', 'B. attraction', 'C. attractive (Động từ liên kết looks đi với tính từ: attractive)', 'D. attract']
    }
  },
  {
    content: 'A: “How does the air near the park smell?” B: “It smells ______.”',
    options: ['A. cleanly', 'B. cleaning', 'C. cleanliness', 'D. clean'],
    answer: 'D',
    subTypeId: 'eng11-u3-grammar-linking',
    representationType: 'dialogue',
    translation: {
      content: 'A: “Không khí gần công viên có mùi như thế nào?” B: “Nó có mùi ______.”',
      options: ['A. cleanly', 'B. cleaning', 'C. cleanliness', 'D. clean (Động từ liên kết smells đi với tính từ: clean)']
    }
  },
  {
    content: 'After the street lights were repaired, the area became ______.',
    options: ['A. safer', 'B. safely', 'C. safety', 'D. save'],
    answer: 'A',
    subTypeId: 'eng11-u3-grammar-linking',
    translation: {
      content: 'Sau khi đèn đường được sửa chữa, khu vực này trở nên ______.',
      options: ['A. safer (Động từ liên kết became đi với tính từ/so sánh hơn: safer)', 'B. safely', 'C. safety', 'D. save']
    }
  },
  {
    content: 'The proposal seems ______, but the council still needs cost estimates.',
    options: ['A. practically', 'B. practical', 'C. practice', 'D. practicality'],
    answer: 'B',
    subTypeId: 'eng11-u3-grammar-linking',
    translation: {
      content: 'Đề xuất có vẻ ______, nhưng hội đồng vẫn cần ước tính chi phí.',
      options: ['A. practically', 'B. practical (Động từ liên kết seems đi với tính từ: practical)', 'C. practice', 'D. practicality']
    }
  },
  {
    content: 'Choose the correct sentence about a temporary action and a state.',
    options: ['A. I am knowing the answer.', 'B. The city is owning the buses.', 'C. We are tasting the new water supply to check its quality.', 'D. The plan is seeming useful.'],
    answer: 'C',
    subTypeId: 'eng11-u3-grammar-linking',
    translation: {
      content: 'Chọn câu đúng kết hợp hành động tạm thời và trạng thái:',
      options: ['A. I am knowing the answer. (Sai vì know là động từ trạng thái)', 'B. The city is owning the buses. (Sai vì own là động từ trạng thái)', 'C. We are tasting the new water supply to check its quality. (Đúng: taste đang nếm thử là hành động tạm thời)', 'D. The plan is seeming useful. (Sai vì seem là động từ trạng thái)']
    }
  },
  {
    content: 'The smart benches feel ______, even after several hours in the sun.',
    options: ['A. comfortably', 'B. comfort', 'C. comforting manner', 'D. comfortable'],
    answer: 'D',
    subTypeId: 'eng11-u3-grammar-linking',
    translation: {
      content: 'Những chiếc ghế thông minh cảm thấy/tạo cảm giác ______, ngay cả sau nhiều giờ dưới ánh nắng mặt trời.',
      options: ['A. comfortably', 'B. comfort', 'C. comforting manner', 'D. comfortable (Động từ liên kết feel đi với tính từ: comfortable)']
    }
  }
];

const passage1: QuestionStimulus = {
  id: 'eng11-stim-u3-reading-1',
  title: 'A quieter street experiment',
  content: `A city district wanted to make one busy shopping street safer and quieter. Instead of permanently closing it to traffic immediately, planners ran a six-month experiment. Private cars could enter only during early delivery hours, while buses, bicycles, emergency vehicles, and people with mobility permits kept access throughout the day.

The district placed temporary seating and trees in several former parking spaces. It also widened pedestrian areas with removable barriers, allowing the design to be changed quickly. Sensors measured noise and vehicle speed, but researchers also interviewed shop workers, delivery drivers, residents, and visitors. This combination mattered because numbers alone could not explain why people avoided or enjoyed particular areas.

After three months, average traffic noise had fallen and more people were staying on the street in the evening. However, some nearby roads had become busier as drivers changed routes. Several small shops also reported difficult deliveries. In response, the district added two loading points and adjusted signal times on surrounding roads.

The experiment shows why temporary projects can be useful. They allow a city to observe consequences before spending heavily on permanent construction. Yet a trial is not automatically fair or successful. Officials still need to identify who receives the benefits, who carries new costs, and whether adjustments solve problems rather than merely moving them elsewhere. The final design will therefore be based on both measured changes and the experiences of different street users. A public report will compare the original goals with the final outcomes and explain why each permanent change was accepted.`
};
const passage2: QuestionStimulus = {
  id: 'eng11-stim-u3-reading-2',
  title: 'When a city builds a digital twin',
  content: `Some cities are developing digital twins: computer models that represent streets, buildings, transport systems, and environmental conditions. Planners can use these models to test possible changes before applying them in the physical city. For example, they may explore how a new tower could affect wind at street level or how closing a road might change bus travel times.

A useful digital twin needs current and reliable information. Sensors, surveys, maps, and service records can all contribute data. More data, however, does not always produce a better decision. Information collected for one purpose may be inaccurate for another, and neighbourhoods with fewer sensors may appear less important simply because less is known about them.

There are also questions about access and responsibility. If only technical specialists can understand the model, residents may struggle to challenge its assumptions. Some cities therefore publish simplified views and invite communities to compare the model with local experience. They also record where each dataset came from and how often it is updated.

A digital twin should be treated as a decision-support tool, not a machine that decides what a city must do. Models can reveal patterns and test scenarios, but they cannot determine social priorities by themselves. Choosing between faster traffic, cleaner air, affordable housing, and public space remains a political and community decision. The technology is most valuable when its limits are visible and its results form one part of a wider public discussion. Regular independent reviews can also reveal hidden errors and unequal effects over time.`
};
const passage3: QuestionStimulus = {
  id: 'eng11-stim-u3-reading-3',
  title: 'Cooling a neighbourhood fairly',
  content: `During increasingly hot summers, one neighbourhood recorded temperatures several degrees higher than nearby areas. It had few mature trees, large paved car parks, and many dark roofs that absorbed heat. Residents living in small upper-floor flats were especially affected because indoor temperatures remained high at night.

The city proposed planting street trees, installing shaded bus stops, and offering support for reflective roofs. At first, officials planned to begin wherever planting was easiest. Community groups argued that this approach would favour wider, wealthier streets and delay help for the hottest blocks. The city then combined temperature maps with information about age, housing conditions, and access to air conditioning.

This revised method identified priority locations, but implementation still required care. Young trees need years to provide full shade and require water during dry periods. Reflective roofs can reduce heat entering a building, yet landlords may not participate unless tenants receive clear protections. Shaded public spaces also need safe routes so that older residents can reach them.

The project illustrates that climate adaptation is not only a technical question. A city can measure heat accurately and still distribute protection unfairly. Effective planning must consider urgency, long-term maintenance, and the people least able to avoid the risk. The neighbourhood will publish annual results, including temperature changes and which households received support, so residents can judge both environmental impact and fairness. They will also survey residents during heatwaves, since lower outdoor readings do not necessarily mean that every home has become comfortable or safe enough.`
};

const readingRows: Row[] = [
  {
    content: 'What is the main purpose of the first passage?',
    options: ['A. To explain how a temporary street trial was measured and adjusted', 'B. To prove all cars should disappear immediately', 'C. To advertise one shopping centre', 'D. To show sensors replace interviews'],
    answer: 'A',
    subTypeId: 'eng11-u3-read-main-detail',
    stimulus: passage1,
    translation: {
      content: 'Mục đích chính của đoạn văn 1 là gì?',
      options: ['A. To explain how a temporary street trial was measured and adjusted (Giải thích cách một cuộc thử nghiệm phố đi bộ/tạm thời được đo lường và điều chỉnh)', 'B. Để chứng minh tất cả ô tô nên biến mất ngay lập tức', 'C. Để quảng cáo cho một trung tâm thương mại', 'D. Để chứng minh các cảm biến thay thế các cuộc phỏng vấn']
    }
  },
  {
    content: 'Why did researchers interview different street users?',
    options: ['A. To replace all traffic data', 'B. To understand experiences that numbers alone could not explain', 'C. To choose shop colours', 'D. To stop emergency access'],
    answer: 'B',
    subTypeId: 'eng11-u3-read-main-detail',
    stimulus: passage1,
    translation: {
      content: 'Tại sao các nhà nghiên cứu lại phỏng vấn những người sử dụng đường khác nhau?',
      options: ['A. Để thay thế tất cả dữ liệu giao thông', 'B. To understand experiences that numbers alone could not explain (Để hiểu những trải nghiệm mà riêng các con số không thể giải thích)', 'C. Để chọn màu sắc cửa hàng', 'D. Để dừng quyền truy cập khẩn cấp']
    }
  },
  {
    content: 'What unintended effect appeared after three months?',
    options: ['A. Buses stopped running', 'B. Trees were removed', 'C. Nearby roads became busier', 'D. Noise increased on the trial street'],
    answer: 'C',
    subTypeId: 'eng11-u3-read-main-detail',
    stimulus: passage1,
    translation: {
      content: 'Tác động ngoài dự kiến nào đã xuất hiện sau 3 tháng?',
      options: ['A. Xe buýt ngừng chạy', 'B. Cây cối bị gỡ bỏ', 'C. Nearby roads became busier (Các con đường lân cận trở nên đông đúc hơn)', 'D. Tiếng ồn tăng lên trên con phố thử nghiệm']
    }
  },
  {
    content: 'What did the district do about delivery difficulties?',
    options: ['A. It ended all deliveries.', 'B. It removed pedestrians.', 'C. It closed nearby roads.', 'D. It added loading points.'],
    answer: 'D',
    subTypeId: 'eng11-u3-read-main-detail',
    stimulus: passage1,
    translation: {
      content: 'Quận đã làm gì về những khó khăn trong việc giao hàng?',
      options: ['A. Nó đã dừng tất cả các đợt giao hàng', 'B. Nó đã gỡ bỏ người đi bộ', 'C. Nó đã đóng các con đường lân cận', 'D. It added loading points. (Nó đã bổ sung thêm các điểm bốc dỡ hàng.)']
    }
  },
  {
    content: 'Which statement best summarises the central message of passage 2?',
    options: ['A. Digital twins help test scenarios but must remain transparent decision-support tools.', 'B. Computer models should make every city decision.', 'C. More data always guarantees fairness.', 'D. Residents should not see technical models.'],
    answer: 'A',
    subTypeId: 'eng11-u3-read-main-detail',
    stimulus: passage2,
    translation: {
      content: 'Phát biểu nào tóm tắt tốt nhất thông điệp trung tâm của đoạn 2?',
      options: ['A. Digital twins help test scenarios but must remain transparent decision-support tools. (Mô hình bản sao số giúp kiểm tra các kịch bản nhưng phải là công cụ hỗ trợ quyết định minh bạch.)', 'B. Mô hình máy tính nên đưa ra mọi quyết định thành phố', 'C. Nhiều dữ liệu hơn luôn đảm bảo sự công bằng', 'D. Cư dân không nên nhìn thấy các mô hình kỹ thuật']
    }
  },
  {
    content: 'Why may neighbourhoods with fewer sensors appear less important?',
    options: ['A. They have no residents.', 'B. The model has less information about them.', 'C. They produce too much wind.', 'D. Their roads are always closed.'],
    answer: 'B',
    subTypeId: 'eng11-u3-read-main-detail',
    stimulus: passage2,
    translation: {
      content: 'Tại sao các khu phố có ít cảm biến hơn lại có vẻ ít quan trọng hơn?',
      options: ['A. Họ không có cư dân nào', 'B. The model has less information about them. (Mô hình có ít thông tin về họ hơn.)', 'C. Chúng tạo ra quá nhiều gió', 'D. Đường của họ luôn bị đóng']
    }
  },
  {
    content: 'The word “its” in “challenge its assumptions” refers to:',
    options: ['A. the physical street', 'B. the public meeting', 'C. the model', 'D. the neighbourhood'],
    answer: 'C',
    subTypeId: 'eng11-u3-read-infer-evidence',
    stimulus: passage2,
    translation: {
      content: 'Từ “its” trong cụm “challenge its assumptions” thay thế cho:',
      options: ['A. con phố thực tế', 'B. cuộc họp công cộng', 'C. the model (mô hình kỹ thuật số)', 'D. khu phố']
    }
  },
  {
    content: 'What can be inferred about the writer’s view of technology in passage 2?',
    options: ['A. It is useless without perfect data.', 'B. It should be kept secret.', 'C. It can choose social priorities objectively.', 'D. It is valuable when combined with transparency and public judgement.'],
    answer: 'D',
    subTypeId: 'eng11-u3-read-infer-evidence',
    stimulus: passage2,
    translation: {
      content: 'Có thể suy ra điều gì về quan điểm của tác giả đối với công nghệ trong đoạn 2?',
      options: ['A. Nó vô ích nếu không có dữ liệu hoàn hảo', 'B. Nó nên được giữ bí mật', 'C. Nó có thể chọn các ưu tiên xã hội một cách khách quan', 'D. It is valuable when combined with transparency and public judgement. (Nó có giá trị khi được kết hợp với sự minh bạch và sự đánh giá của công chúng.)']
    }
  },
  {
    content: 'What caused the neighbourhood to remain unusually hot?',
    options: ['A. Few trees, extensive paving and dark roofs', 'B. Too many shaded bus stops', 'C. Reflective roofs everywhere', 'D. A lack of temperature maps'],
    answer: 'A',
    subTypeId: 'eng11-u3-read-infer-evidence',
    stimulus: passage3,
    translation: {
      content: 'Điều gì đã khiến khu phố vẫn nóng bất thường?',
      options: ['A. Few trees, extensive paving and dark roofs (Ít cây xanh, diện tích lát đường rộng và nhiều mái nhà tối màu)', 'B. Quá nhiều trạm dừng xe buýt có bóng mát', 'C. Mái nhà phản quang ở khắp mọi nơi', 'D. Thiếu bản đồ nhiệt độ']
    }
  },
  {
    content: 'Why did community groups oppose starting wherever planting was easiest?',
    options: ['A. They disliked all trees.', 'B. It could delay help for the hottest, less advantaged blocks.', 'C. They wanted darker roofs.', 'D. It would protect tenants immediately.'],
    answer: 'B',
    subTypeId: 'eng11-u3-read-infer-evidence',
    stimulus: passage3,
    translation: {
      content: 'Tại sao các nhóm cộng đồng phản đối việc bắt đầu ở bất cứ đâu dễ trồng cây nhất?',
      options: ['A. Họ không thích cây xanh', 'B. It could delay help for the hottest, less advantaged blocks. (Nó có thể làm chậm sự trợ giúp cho những dãy nhà nóng nhất, ít lợi thế hơn.)', 'C. Họ muốn mái nhà tối màu hơn', 'D. Nó sẽ bảo vệ người thuê nhà ngay lập tức']
    }
  },
  {
    content: 'Which evidence will help residents evaluate fairness?',
    options: ['A. Only the number of city meetings', 'B. The colour of the maps', 'C. Information about which households received support', 'D. The names of tree species alone'],
    answer: 'C',
    subTypeId: 'eng11-u3-read-infer-evidence',
    stimulus: passage3,
    translation: {
      content: 'Bằng chứng nào sẽ giúp cư dân đánh giá sự công bằng?',
      options: ['A. Chỉ số lượng cuộc họp thành phố', 'B. Màu sắc của các bản đồ', 'C. Information about which households received support (Thông tin về những hộ gia đình nào đã nhận được sự hỗ trợ)', 'D. Chỉ tên các loài cây']
    }
  },
  {
    content: 'Which conclusion is best supported by the cooling project?',
    options: ['A. Accurate measurement automatically creates fair policy.', 'B. Climate adaptation requires only quick construction.', 'C. Landlords always protect tenants voluntarily.', 'D. Technical solutions must be paired with equitable priorities and maintenance.'],
    answer: 'D',
    subTypeId: 'eng11-u3-read-infer-evidence',
    stimulus: passage3,
    translation: {
      content: 'Kết luận nào được ủng hộ tốt nhất bởi dự án làm mát?',
      options: ['A. Đo lường chính xác tự động tạo ra chính sách công bằng', 'B. Thích ứng khí hậu chỉ cần xây dựng nhanh', 'C. Chủ nhà luôn bảo vệ người thuê nhà một cách tự nguyện', 'D. Technical solutions must be paired with equitable priorities and maintenance. (Các giải pháp kỹ thuật phải đi kèm với các ưu tiên công bằng và việc bảo trì.)']
    }
  }
];

const writingRows: Row[] = [
  {
    content: 'Choose the best order: (a) As a result, buses became more reliable. (b) Buses were often delayed by private cars. (c) The city introduced a separate bus lane.',
    options: ['A. b-c-a', 'B. a-b-c', 'C. c-a-b', 'D. b-a-c'],
    answer: 'A',
    subTypeId: 'eng11-u3-write-order',
    translation: {
      content: 'Chọn thứ tự tốt nhất: (a) Kết quả là, xe buýt trở nên đáng tin cậy hơn. (b) Xe buýt thường bị chậm trễ bởi xe ô tô cá nhân. (c) Thành phố đã đưa vào một làn đường xe buýt riêng.',
      options: ['A. b-c-a', 'B. a-b-c', 'C. c-a-b', 'D. b-a-c']
    }
  },
  {
    content: 'Choose the best topic sentence for a paragraph comparing urban cooling solutions.',
    options: ['A. Trees have leaves.', 'B. Cities can reduce heat through several solutions, but each has different costs and timelines.', 'C. Yesterday was hot.', 'D. Therefore, roofs exist.'],
    answer: 'B',
    subTypeId: 'eng11-u3-write-order',
    translation: {
      content: 'Chọn câu chủ đề tốt nhất cho đoạn văn so sánh các giải pháp làm mát đô thị.',
      options: ['A. Cây xanh có lá.', 'B. Cities can reduce heat through several solutions, but each has different costs and timelines. (Các thành phố có thể giảm nhiệt thông qua một số giải pháp, nhưng mỗi giải pháp có chi phí và thời gian khác nhau.)', 'C. Hôm qua trời nóng.', 'D. Do đó, mái nhà tồn tại.']
    }
  },
  {
    content: 'Choose the connector: “Sensors provide useful traffic data. ______, they do not explain every traveller’s experience.”',
    options: ['A. Therefore', 'B. For example', 'C. However', 'D. As a result'],
    answer: 'C',
    subTypeId: 'eng11-u3-write-order',
    translation: {
      content: 'Chọn từ nối: “Các cảm biến cung cấp dữ liệu giao thông hữu ích. ______, chúng không giải thích hết trải nghiệm của mọi người đi đường.”',
      options: ['A. Do đó (Therefore)', 'B. Ví dụ (For example)', 'C. However (Tuy nhiên)', 'D. Kết quả là (As a result)']
    }
  },
  {
    content: 'A: Arrange: (a) Finally, evaluate whether travel times actually fall. (b) First, identify the most congested routes. (c) Next, test adjusted bus frequencies.',
    options: ['A. a-b-c', 'B. c-a-b', 'C. b-a-c', 'D. b-c-a'],
    answer: 'D',
    subTypeId: 'eng11-u3-write-order',
    representationType: 'dialogue',
    translation: {
      content: 'A: Sắp xếp: (a) Cuối cùng, đánh giá xem thời gian di chuyển có thực sự giảm không. (b) Đầu tiên, xác định các tuyến đường bị ùn tắc nhất. (c) Tiếp theo, thử nghiệm tần suất xe buýt được điều chỉnh.',
      options: ['A. a-b-c', 'B. c-a-b', 'C. b-a-c', 'D. b-c-a']
    }
  },
  {
    content: 'Which sentence does NOT support a paragraph about accessible public transport?',
    options: ['A. The station roof is painted blue.', 'B. Step-free entrances help wheelchair users.', 'C. Clear signs help visitors navigate.', 'D. Affordable fares make travel available to more residents.'],
    answer: 'A',
    subTypeId: 'eng11-u3-write-order',
    translation: {
      content: 'Câu nào KHÔNG bổ trợ cho đoạn văn nói về phương tiện giao thông công cộng dễ tiếp cận?',
      options: ['A. The station roof is painted blue. (Mái nhà ga được sơn màu xanh - Không liên quan)', 'B. Lối vào không có bậc thang giúp ích cho người dùng xe lăn.', 'C. Biển chỉ dẫn rõ ràng giúp du khách định hướng.', 'D. Giá vé hợp lý giúp nhiều cư dân có thể đi lại.']
    }
  },
  {
    content: 'Choose the best concluding sentence after discussing benefits and privacy risks of sensors.',
    options: ['A. Sensors are small devices.', 'B. The system is useful only if data collection remains limited, secure and accountable.', 'C. Cities have streets.', 'D. Privacy is spelled with seven letters.'],
    answer: 'B',
    subTypeId: 'eng11-u3-write-order',
    translation: {
      content: 'Chọn câu kết luận tốt nhất sau khi thảo luận về lợi ích và rủi ro quyền riêng tư của các cảm biến.',
      options: ['A. Cảm biến là các thiết bị nhỏ.', 'B. The system is useful only if data collection remains limited, secure and accountable. (Hệ thống chỉ hữu ích nếu việc thu thập dữ liệu được giới hạn, bảo mật và có trách nhiệm giải trình.)', 'C. Các thành phố có đường phố.', 'D. Quyền riêng tư được đánh vần bằng 7 chữ cái.']
    }
  },
  {
    content: 'Choose the best combination: “The city added more buses. Waiting times fell.”',
    options: ['A. Although waiting times fell, no buses existed.', 'B. The city added buses unless time fell.', 'C. The city added more buses, so waiting times fell.', 'D. Waiting times fell because buses were removed.'],
    answer: 'C',
    subTypeId: 'eng11-u3-write-transform',
    translation: {
      content: 'Chọn câu kết hợp tốt nhất: “Thành phố đã bổ sung thêm xe buýt. Thời gian chờ đợi đã giảm.”',
      options: ['A. Mặc dù thời gian chờ giảm nhưng không có xe buýt nào.', 'B. Sai ngữ pháp.', 'C. The city added more buses, so waiting times fell. (Thành phố bổ sung thêm xe buýt, vì vậy thời gian chờ đợi đã giảm.)', 'D. Sai ngữ nghĩa.']
    }
  },
  {
    content: 'A: “The plan is innovative. It may be too expensive for small districts.” Choose the best combination.',
    options: ['A. Because it is innovative, cost is impossible.', 'B. The plan is innovative and therefore free.', 'C. The plan is expensive unless innovative.', 'D. Although the plan is innovative, it may be too expensive for small districts.'],
    answer: 'D',
    subTypeId: 'eng11-u3-write-transform',
    representationType: 'dialogue',
    translation: {
      content: 'A: “Kế hoạch này mang tính đổi mới. Nó có thể quá đắt đối với các quận nhỏ.” Chọn câu kết hợp tốt nhất.',
      options: ['A. Vì nó đổi mới nên chi phí là không thể.', 'B. Kế hoạch này đổi mới nên nó miễn phí.', 'C. Sai cấu trúc.', 'D. Although the plan is innovative, it may be too expensive for small districts. (Mặc dù kế hoạch mang tính đổi mới, nhưng nó có thể quá đắt đối với các quận nhỏ.)']
    }
  },
  {
    content: 'Choose the strongest topic sentence for details about buses, cycle lanes and walkable streets.',
    options: ['A. A balanced transport system offers residents several alternatives to private cars.', 'B. Cars have wheels.', 'C. My bicycle is green.', 'D. Walking uses feet.'],
    answer: 'A',
    subTypeId: 'eng11-u3-write-transform',
    translation: {
      content: 'Chọn câu chủ đề mạnh nhất cho các chi tiết về xe buýt, làn đường cho xe đạp và các con phố đi bộ.',
      options: ['A. A balanced transport system offers residents several alternatives to private cars. (Một hệ thống giao thông cân bằng mang lại cho cư dân một số giải pháp thay thế cho xe ô tô cá nhân.)', 'B. Ô tô có bánh xe.', 'C. Xe đạp của tớ màu xanh.', 'D. Đi bộ dùng chân.']
    }
  },
  {
    content: 'Which revision expresses appropriate uncertainty?',
    options: ['A. The new app will certainly solve every traffic problem.', 'B. The new app may improve route planning if its data are accurate.', 'C. The app always makes cities perfect.', 'D. No evidence is needed.'],
    answer: 'B',
    subTypeId: 'eng11-u3-write-transform',
    translation: {
      content: 'Bản sửa đổi nào thể hiện sự không chắc chắn/dự đoán phù hợp?',
      options: ['A. Ứng dụng mới chắc chắn sẽ giải quyết mọi vấn đề giao thông.', 'B. The new app may improve route planning if its data are accurate. (Ứng dụng mới có thể cải thiện quy hoạch tuyến đường nếu dữ liệu của nó chính xác.)', 'C. Ứng dụng luôn làm thành phố hoàn hảo.', 'D. Không cần bằng chứng.']
    }
  },
  {
    content: 'Choose the clearest revision.',
    options: ['A. There are sensors that are sensing in a sensor way.', 'B. Data is data and it helps.', 'C. Traffic sensors help planners identify where delays occur.', 'D. Smart things are smart.'],
    answer: 'C',
    subTypeId: 'eng11-u3-write-transform',
    translation: {
      content: 'Chọn bản sửa đổi rõ ràng nhất:',
      options: ['A. Lặp từ vô nghĩa.', 'B. Dài dòng.', 'C. Traffic sensors help planners identify where delays occur. (Các cảm biến giao thông giúp các nhà hoạch định xác định vị trí xảy ra sự chậm trễ.)', 'D. Mơ hồ.']
    }
  },
  {
    content: 'Choose the best final sentence for a proposal about a neighbourhood park.',
    options: ['A. Parks contain plants.', 'B. The proposal has four pages.', 'C. The neighbourhood has a name.', 'D. A shaded, accessible park would improve daily life while helping the area manage heat.'],
    answer: 'D',
    subTypeId: 'eng11-u3-write-transform',
    translation: {
      content: 'Chọn câu kết thúc tốt nhất cho đề xuất về một công viên trong khu phố.',
      options: ['A. Công viên chứa cây cối.', 'B. Đề xuất có 4 trang.', 'C. Khu phố có một cái tên.', 'D. A shaded, accessible park would improve daily life while helping the area manage heat. (Một công viên có bóng mát, dễ tiếp cận sẽ cải thiện cuộc sống hằng ngày đồng thời giúp khu vực quản lý cái nóng.)']
    }
  }
];

const communicationRows: Row[] = [
  {
    content: 'A: “Will autonomous buses completely remove congestion?” B: “______ They may help, but travel demand will still matter.”',
    options: ['A. Probably not.', 'B. Absolutely always.', 'C. Congestion is a noun.', 'D. No buses exist.'],
    answer: 'A',
    subTypeId: 'eng11-u3-comm-prediction',
    representationType: 'dialogue',
    translation: {
      content: 'A: “Xe buýt tự hành có hoàn toàn loại bỏ tình trạng ùn tắc không?” B: “______ Chúng có thể giúp ích, nhưng cầu di chuyển vẫn sẽ quan trọng.”',
      options: ['A. Probably not. (Có lẽ là không.)', 'B. Tuyệt đối luôn luôn.', 'C. Ùn tắc là một danh từ.', 'D. Không có xe buýt nào tồn tại.']
    }
  },
  {
    content: 'A: “What might green roofs do?” B: “They ______ reduce indoor heat and manage rainwater.”',
    options: ['A. guarantee to', 'B. could', 'C. always must', 'D. certainly all'],
    answer: 'B',
    subTypeId: 'eng11-u3-comm-prediction',
    representationType: 'dialogue',
    translation: {
      content: 'A: “Mái nhà xanh có thể làm gì?” B: “Chúng ______ giảm nhiệt độ trong nhà và quản lý nước mưa.”',
      options: ['A. đảm bảo sẽ', 'B. could (có thể / khản năng: could)', 'C. luôn luôn phải', 'D. chắc chắn tất cả']
    }
  },
  {
    content: 'Which statement makes a balanced prediction?',
    options: ['A. The system can never fail.', 'B. This technology will make everyone happy.', 'C. The metro is likely to reduce some car trips, although fares will affect use.', 'D. Data guarantees fairness.'],
    answer: 'C',
    subTypeId: 'eng11-u3-comm-prediction',
    representationType: 'text',
    translation: {
      content: 'Phát biểu nào đưa ra dự đoán cân bằng?',
      options: ['A. Hệ thống không bao giờ thất bại.', 'B. Công nghệ này sẽ làm mọi người hạnh phúc.', 'C. The metro is likely to reduce some car trips, although fares will affect use. (Tuyến tàu điện ngầm có khả năng giảm một số chuyến xe ô tô, mặc dù giá vé sẽ ảnh hưởng đến việc sử dụng.)', 'D. Dữ liệu đảm bảo sự công bằng.']
    }
  },
  {
    content: 'A: “The city plans to move every service online.” B: “______ residents without reliable internet may be excluded.”',
    options: ['A. That is perfect because', 'B. It will never matter although', 'C. Digital is a word and', 'D. That could save time, but'],
    answer: 'D',
    subTypeId: 'eng11-u3-comm-prediction',
    representationType: 'dialogue',
    translation: {
      content: 'A: “Thành phố có kế hoạch chuyển mọi dịch vụ lên trực tuyến.” B: “______ những cư dân không có internet ổn định có thể bị loại trừ.”',
      options: ['A. Điều đó thật hoàn hảo vì', 'B. Nó không bao giờ quan trọng mặc dù', 'C. Kỹ thuật số là một từ và', 'D. That could save time, but (Điều đó có thể tiết kiệm thời gian, nhưng...)']
    }
  },
  {
    content: 'Which phrase signals a relatively likely, but not certain, outcome?',
    options: ['A. is likely to', 'B. is guaranteed to', 'C. always', 'D. cannot possibly'],
    answer: 'A',
    subTypeId: 'eng11-u3-comm-prediction',
    representationType: 'text',
    translation: {
      content: 'Cụm từ nào báo hiệu một kết quả tương đối có khả năng xảy ra, nhưng không chắc chắn 100%?',
      options: ['A. is likely to (có khả năng là)', 'B. is guaranteed to (được đảm bảo là)', 'C. luôn luôn', 'D. không thể nào']
    }
  },
  {
    content: 'A: “Could sensors improve waste collection?” B: “______ if the routes are adjusted using reliable data.”',
    options: ['A. It is impossible', 'B. They might', 'C. They always have', 'D. No condition matters'],
    answer: 'B',
    subTypeId: 'eng11-u3-comm-prediction',
    representationType: 'dialogue',
    translation: {
      content: 'A: “Các cảm biến có thể cải thiện việc thu gom rác thải không?” B: “Chúng ______ nếu các tuyến đường được điều chỉnh bằng dữ liệu đáng tin cậy.”',
      options: ['A. Điều đó là không thể', 'B. They might (Chúng có thể / dự đoán có điều kiện)', 'C. Chúng luôn luôn', 'D. Không có điều kiện nào quan trọng']
    }
  },
  {
    content: 'A: “The crossing is dangerous.” B: “______ installing a longer pedestrian signal?”',
    options: ['A. Why don’t we consider', 'B. We must ignore', 'C. It cannot be', 'D. There is no point'],
    answer: 'A',
    subTypeId: 'eng11-u3-comm-proposal',
    representationType: 'dialogue',
    translation: {
      content: 'A: “Lối sang đường này rất nguy hiểm.” B: “______ việc lắp đặt tín hiệu dành cho người đi bộ dài hơn xem sao?”',
      options: ['A. Why don’t we consider (Tại sao chúng ta không xem xét...)', 'B. Chúng ta phải lờ đi', 'C. Nó không thể là', 'D. Chẳng có ích gì']
    }
  },
  {
    content: 'A: “We could introduce an app-only bus ticket.” B: “______ we keep a cash or card option too.”',
    options: ['A. That cannot work unless nobody pays', 'B. That could work if', 'C. Apps are always fair because', 'D. Remove every alternative and'],
    answer: 'B',
    subTypeId: 'eng11-u3-comm-proposal',
    representationType: 'dialogue',
    translation: {
      content: 'A: “Chúng ta có thể đưa ra vé xe buýt chỉ trên ứng dụng.” B: “______ chúng ta cũng giữ tùy chọn tiền mặt hoặc thẻ.”',
      options: ['A. Điều đó không thể hoạt động trừ khi không ai trả tiền', 'B. That could work if (Điều đó có thể hoạt động nếu...)', 'C. Ứng dụng luôn công bằng vì', 'D. Loại bỏ mọi giải pháp thay thế và']
    }
  },
  {
    content: 'Which proposal is the most inclusive?',
    options: ['A. Close the meeting to residents.', 'B. Ask only car owners.', 'C. Test the design with pedestrians, disabled users, drivers and nearby businesses.', 'D. Publish no results.'],
    answer: 'C',
    subTypeId: 'eng11-u3-comm-proposal',
    representationType: 'text',
    translation: {
      content: 'Đề xuất nào mang tính bao trùm/đầy đủ nhất?',
      options: ['A. Đóng cuộc họp với cư dân.', 'B. Chỉ hỏi chủ xe ô tô.', 'C. Test the design with pedestrians, disabled users, drivers and nearby businesses. (Thử nghiệm thiết kế với người đi bộ, người khuyết tật, tài xế và các doanh nghiệp lân cận.)', 'D. Không xuất bản kết quả.']
    }
  },
  {
    content: 'A: “How should we prioritise cooling projects?” B: “______”',
    options: ['A. Use the easiest locations only.', 'B. Avoid measuring heat.', 'C. Choose the wealthiest street.', 'D. We should combine heat data with residents’ vulnerability.'],
    answer: 'D',
    subTypeId: 'eng11-u3-comm-proposal',
    representationType: 'dialogue',
    translation: {
      content: 'A: “Chúng ta nên ưu tiên các dự án làm mát như thế nào?” B: “______”',
      options: ['A. Chỉ sử dụng các vị trí dễ nhất.', 'B. Tránh đo nhiệt độ.', 'C. Chọn con phố giàu có nhất.', 'D. We should combine heat data with residents’ vulnerability. (Chúng ta nên kết hợp dữ liệu nhiệt độ với mức độ dễ bị tổn thương của cư dân.)']
    }
  },
  {
    content: 'Which response constructively adds a condition?',
    options: ['A. I support the plan provided that fares remain affordable.', 'B. The plan is either perfect or useless.', 'C. Do not discuss costs.', 'D. Everyone must agree immediately.'],
    answer: 'A',
    subTypeId: 'eng11-u3-comm-proposal',
    representationType: 'text',
    translation: {
      content: 'Phản hồi nào bổ sung một điều kiện một cách mang tính xây dựng?',
      options: ['A. I support the plan provided that fares remain affordable. (Tớ ủng hộ kế hoạch với điều kiện giá vé vẫn phải chăng.)', 'B. Kế hoạch một là hoàn hảo hai là vô dụng.', 'C. Đừng thảo luận về chi phí.', 'D. Mọi người phải đồng ý ngay lập tức.']
    }
  },
  {
    content: 'A: “Let’s make the street change permanent tomorrow.” B: “______ first, so we can examine effects on nearby roads?”',
    options: ['A. Why wait for no data', 'B. Could we review the trial evidence', 'C. Evidence is unnecessary', 'D. Tomorrow is a day'],
    answer: 'B',
    subTypeId: 'eng11-u3-comm-proposal',
    representationType: 'dialogue',
    translation: {
      content: 'A: “Hãy làm cho sự thay đổi con phố trở thành vĩnh viễn vào ngày mai.” B: “______ trước, để chúng ta có thể kiểm tra tác động đến các con đường lân cận?”',
      options: ['A. Tại sao phải chờ không có dữ liệu', 'B. Could we review the trial evidence (Chúng ta có thể xem lại bằng chứng thử nghiệm trước được không...)', 'C. Bằng chứng là không cần thiết', 'D. Ngày mai là một ngày']
    }
  }
];

export const g11EnglishModule3Questions: CourseQuestion[] = [
  ...build('pron', 'eng11-qt-u3-pronunciation', 'eng11-u3-language', 'eng11-out-u3-pronunciation', pronunciationRows),
  ...build('vocab', 'eng11-qt-u3-vocabulary', 'eng11-u3-language', 'eng11-out-u3-vocabulary', vocabularyRows),
  ...build('grammar', 'eng11-qt-u3-grammar', 'eng11-u3-language', 'eng11-out-u3-grammar', grammarRows),
  ...build('reading', 'eng11-qt-u3-reading', 'eng11-u3-reading', 'eng11-out-u3-reading', readingRows),
  ...build('writing', 'eng11-qt-u3-writing', 'eng11-u3-writing', 'eng11-out-u3-writing', writingRows),
  ...build('comm', 'eng11-qt-u3-communication', 'eng11-u3-communication-culture', 'eng11-out-u3-communication', communicationRows)
];
