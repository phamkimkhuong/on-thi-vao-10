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
      id: `eng11-q-u10-${key}-${String(i + 1).padStart(2, '0')}`,
      courseId: 'grade11:english', moduleId: 'eng11-m10', lessonId: `eng11-u10-${lesson}`,
      subjectId: 'english', topicId: 'eng11-topic-u10', questionTypeId: `eng11-qt-u10-${key}`,
      content: r.p, options: o.map((v, j) => `${letters[j]}. ${v}`) as [string, string, string, string],
      correctAnswer: letters[pos], responseType: 'single_choice', validatorType: 'choice',
      translation: r.translation,
      difficulty: difficulties[i], points: 0.25, sourceType: 'manual', outcomeIds: [`eng11-out-u10-${key}`],
      subTypeId: `eng11-u10-${key}-${i < 6 ? subs[0] : subs[1]}`,
      practiceRole: roles[i % 6], representationType: r.representation ?? (i % 4 === 3 ? 'dialogue' : 'text'),
      isMasteryHoldout: i % 6 === 5, stimulus: r.stimulus
    };
  });
const pronunciation: Raw[] = [
  {
    p: 'Choose the correct tag: “The wetland is recovering, ______?”',
    c: 'isn’t it',
    w: ['doesn’t it', 'is it', 'aren’t they'],
    translation: {
      content: 'Chọn câu hỏi đuôi (tag question) đúng: “The wetland is recovering, ______?”',
      options: ['A. isn’t it (Mệnh đề khẳng định động từ is -> đuôi phủ định isn’t it)', 'B. doesn’t it', 'C. is it', 'D. aren’t they']
    }
  },
  {
    p: '“Birds migrate, ______?”',
    c: 'don’t they',
    w: ['aren’t birds', 'do it', 'isn’t they'],
    translation: {
      content: 'Chọn câu hỏi đuôi đúng: “Birds migrate, ______?”',
      options: ['A. aren’t birds', 'B. don’t they (Mệnh đề khẳng định V thường -> đuôi dùng trợ động từ don’t they)', 'C. do it', 'D. isn’t they']
    }
  },
  {
    p: 'A negative statement normally takes a:',
    c: 'positive tag',
    w: ['negative tag only', 'choice question', 'compound noun'],
    translation: {
      content: 'Một mệnh đề phủ định thường đi kèm với một câu hỏi đuôi:',
      options: ['A. câu hỏi đuôi phủ định', 'B. câu hỏi lựa chọn', 'C. positive tag (câu hỏi đuôi khẳng định)', 'D. danh từ ghép']
    }
  },
  {
    p: 'A: “The water isn’t clean, ______?” B: “Is it.”',
    c: 'is it',
    w: ['isn’t it', 'does it', 'wasn’t water'],
    representation: 'dialogue',
    translation: {
      content: 'A: “The water isn’t clean, ______?” B: “Is it.”',
      options: ['A. isn’t it', 'B. does it', 'C. wasn’t water', 'D. is it (Mệnh đề phủ định isn’t -> đuôi khẳng định is it)']
    }
  },
  {
    p: 'Which tag matches “We can restore it”?',
    c: 'can’t we',
    w: ['don’t we', 'can it', 'aren’t us'],
    translation: {
      content: 'Câu hỏi đuôi nào phù hợp với câu “We can restore it”?',
      options: ['A. can’t we (Mệnh đề dùng can -> đuôi phủ định dùng can’t we)', 'B. don’t we', 'C. can it', 'D. aren’t us']
    }
  },
  {
    p: 'Which special tag commonly follows “Let’s monitor the stream”?',
    c: 'shall we',
    w: ['will it', 'do they', 'aren’t we'],
    translation: {
      content: 'Câu hỏi đuôi đặc biệt nào thường đi sau câu rủ “Let’s monitor the stream”?',
      options: ['A. will it', 'B. shall we (Cấu trúc rủ rê Let’s + V -> đuôi mặc định là shall we)', 'C. do they', 'D. aren’t we']
    }
  },
  {
    p: 'A rising tag usually shows:',
    c: 'genuine uncertainty or a real request for confirmation',
    w: ['complete certainty', 'a list ending', 'compound spelling'],
    translation: {
      content: 'Một câu hỏi đuôi lên giọng ở cuối (rising tag) thường thể hiện:',
      options: ['A. sự chắc chắn hoàn toàn', 'B. sự kết thúc danh sách', 'C. genuine uncertainty or a real request for confirmation (sự chưa chắc chắn hoặc hỏi để xác nhận lại)', 'D. cách đánh vần từ ghép']
    }
  },
  {
    p: 'A: “You measured the site, didn’t you ↗?” The rise suggests ______.',
    c: 'the speaker really wants confirmation',
    w: ['the speaker expects agreement only', 'the sentence is a command', 'measurement is impossible'],
    representation: 'dialogue',
    translation: {
      content: 'A: “You measured the site, didn’t you ↗?” Ngữ điệu lên giọng gợi ý rằng ______.',
      options: ['A. người nói chỉ mong đợi sự đồng ý', 'B. câu này là một mệnh lệnh', 'C. việc đo đạc là không thể', 'D. the speaker really wants confirmation (người nói thực sự muốn được xác nhận thông tin)']
    }
  },
  {
    p: 'A falling tag commonly suggests:',
    c: 'the speaker expects agreement',
    w: ['the speaker knows nothing', 'another list item follows', 'the main statement is false'],
    translation: {
      content: 'Một câu hỏi đuôi xuống giọng ở cuối (falling tag) thường gợi ý rằng:',
      options: ['A. the speaker expects agreement (người nói mong đợi sự đồng ý từ người nghe)', 'B. người nói không biết gì', 'C. mục danh sách khác theo sau', 'D. mệnh đề chính là sai']
    }
  },
  {
    p: 'Which interpretation fits “This habitat matters, doesn’t it ↘?”',
    c: 'The speaker presents a view and invites agreement.',
    w: ['The speaker asks for unknown factual data.', 'The tag reverses the statement.', 'The speaker lists alternatives.'],
    translation: {
      content: 'Cách diễn giải nào phù hợp với câu “This habitat matters, doesn’t it ↘?” (xuống giọng ở đuôi)',
      options: ['A. Người nói hỏi thông tin thực tế chưa biết', 'B. The speaker presents a view and invites agreement. (Người nói đưa ra quan điểm và chờ đợi sự đồng tình.)', 'C. Đuôi làm đảo ngược mệnh đề', 'D. Người nói liệt kê các phương án']
    }
  },
  {
    p: 'Why can the same tag use different tones?',
    c: 'The speaker’s certainty and communicative purpose differ.',
    w: ['The auxiliary changes spelling.', 'The subject disappears.', 'All ecosystems sound different.'],
    translation: {
      content: 'Tại sao cùng một câu hỏi đuôi lại có thể sử dụng các tông giọng khác nhau?',
      options: ['A. Trợ động từ thay đổi cách đánh vần', 'B. Chủ ngữ biến mất', 'C. The speaker’s certainty and communicative purpose differ. (Độ chắc chắn và mục đích giao tiếp của người nói khác nhau.)', 'D. Mọi hệ sinh thái có âm thanh khác nhau']
    }
  },
  {
    p: 'What should learners check first?',
    c: 'Statement polarity, auxiliary, subject pronoun and intended certainty',
    w: ['The longest word only', 'The final noun only', 'A fixed rising tone'],
    translation: {
      content: 'Người học nên kiểm tra điều gì đầu tiên khi làm câu hỏi đuôi?',
      options: ['A. Chỉ từ dài nhất', 'B. Chỉ danh từ cuối cùng', 'C. Ngữ điệu lên giọng cố định', 'D. Statement polarity, auxiliary, subject pronoun and intended certainty (Thể khẳng định/phủ định, trợ động từ, đại từ nhân xưng và độ chắc chắn)']
    }
  }
];
const vocabulary: Raw[] = [
  {
    p: 'Living and non-living components interacting form an:',
    c: 'ecosystem',
    w: ['individual only', 'single habitat word', 'compound spelling'],
    translation: {
      content: 'Các thành phần sống và không sống tương tác với nhau tạo thành một:',
      options: ['A. ecosystem (hệ sinh thái)', 'B. individual only', 'C. single habitat word', 'D. compound spelling']
    }
  },
  {
    p: 'The natural place where a species lives is its:',
    c: 'habitat',
    w: ['consumer', 'biodiversity', 'food web role'],
    translation: {
      content: 'Nơi tự nhiên mà một loài sinh sống là:',
      options: ['A. consumer', 'B. habitat (môi trường sống / sinh cảnh)', 'C. biodiversity', 'D. food web role']
    }
  },
  {
    p: 'The variety of genes, species and ecosystems is:',
    c: 'biodiversity',
    w: ['decomposition', 'migration tag', 'restoration fee'],
    translation: {
      content: 'Sự đa dạng của các gen, loài và hệ sinh thái là:',
      options: ['A. decomposition', 'B. migration tag', 'C. biodiversity (đa dạng sinh học)', 'D. restoration fee']
    }
  },
  {
    p: 'A: “What is a food web?” B: “It shows ______.”',
    c: 'interconnected feeding relationships',
    w: ['one isolated animal', 'only non-living factors', 'a visitor route'],
    representation: 'dialogue',
    translation: {
      content: 'A: “Food web (lưới thức ăn) là gì?” B: “Nó thể hiện ______.”',
      options: ['A. một động vật cô lập', 'B. chỉ các yếu tố vô sinh', 'C. một tuyến đường cho du khách', 'D. interconnected feeding relationships (các mối quan hệ dinh dưỡng/ăn uống nối tiếp nhau)']
    }
  },
  {
    p: 'An organism that breaks down dead matter is a:',
    c: 'decomposer',
    w: ['producer only', 'habitat', 'corridor'],
    translation: {
      content: 'Một sinh vật phân hủy vật chất đã chết là một:',
      options: ['A. decomposer (sinh vật phân hủy)', 'B. producer only', 'C. habitat', 'D. corridor']
    }
  },
  {
    p: 'A species with a disproportionately large ecological effect is a:',
    c: 'keystone species',
    w: ['headline species', 'food service', 'water tag'],
    translation: {
      content: 'Một loài có tác động sinh thái lớn một cách vượt trội là một:',
      options: ['A. headline species', 'B. keystone species (loài khóa chủ / loài đóng vai trò then chốt)', 'C. food service', 'D. water tag']
    }
  },
  {
    p: 'Choose the correct restoration collocation.',
    c: 'restore habitat',
    w: ['do habitat', 'make biodiversity down', 'take a food web'],
    translation: {
      content: 'Chọn kết hợp từ (collocation) đúng về khôi phục môi trường:',
      options: ['A. do habitat', 'B. make biodiversity down', 'C. restore habitat (khôi phục môi trường sống)', 'D. take a food web']
    }
  },
  {
    p: 'Scientists ______ a population to detect change.',
    c: 'monitor',
    w: ['restore into', 'disrupt at', 'provide on'],
    translation: {
      content: 'Các nhà khoa học ______ một quần thể để phát hiện sự thay đổi:',
      options: ['A. restore into', 'B. disrupt at', 'C. provide on', 'D. monitor (theo dõi / giám sát)']
    }
  },
  {
    p: 'Roads may ______ ecological connectivity.',
    c: 'disrupt',
    w: ['conserve from', 'monitor into', 'provide at'],
    translation: {
      content: 'Các con đường có thể ______ tính kết nối sinh thái:',
      options: ['A. disrupt (gây gián đoạn / làm gián đoạn)', 'B. conserve from', 'C. monitor into', 'D. provide at']
    }
  },
  {
    p: 'A: “How can corridors help?” B: “They can ______ connectivity.”',
    c: 'improve',
    w: ['decompose', 'invade', 'consume'],
    representation: 'dialogue',
    translation: {
      content: 'A: “Các hành lang sinh thái có thể giúp ích gì?” B: “Chúng có thể ______ tính kết nối.”',
      options: ['A. decompose', 'B. improve (cải thiện / improve connectivity)', 'C. invade', 'D. consume']
    }
  },
  {
    p: 'Wetlands can ______ ecosystem services such as flood storage.',
    c: 'provide',
    w: ['break', 'tag', 'compound'],
    translation: {
      content: 'Đất ngập nước có thể ______ các dịch vụ hệ sinh thái như trữ nước lũ:',
      options: ['A. break', 'B. tag', 'C. provide (cung cấp / provide ecosystem services)', 'D. compound']
    }
  },
  {
    p: 'Management may be needed to ______ invasive species.',
    c: 'control',
    w: ['produce a tag', 'food-web from', 'biodiversity into'],
    translation: {
      content: 'Sự quản lý có thể cần thiết để ______ các loài xâm hại:',
      options: ['A. produce a tag', 'B. food-web from', 'C. biodiversity into', 'D. control (kiểm soát / control invasive species)']
    }
  }
];
const grammar: Raw[] = [
  {
    p: 'Which is a compound noun?',
    c: 'food web',
    w: ['web is complex', 'feed quickly', 'very diverse'],
    translation: {
      content: 'Từ nào dưới đây là một danh từ ghép (compound noun)?',
      options: ['A. food web (danh từ ghép: Noun + Noun)', 'B. web is complex', 'C. feed quickly', 'D. very diverse']
    }
  },
  {
    p: 'In “wildlife corridor”, the head noun is:',
    c: 'corridor',
    w: ['wildlife', 'wild', 'life only'],
    translation: {
      content: 'Trong cụm danh từ ghép “wildlife corridor”, danh từ chính (head noun) là:',
      options: ['A. wildlife', 'B. corridor (danh từ chính đứng sau bổ nghĩa cho toàn cụm)', 'C. wild', 'D. life']
    }
  },
  {
    p: 'What kind of thing is a “river bank”?',
    c: 'a type of bank',
    w: ['a type of river only', 'a verb phrase', 'an adjective'],
    translation: {
      content: '“River bank” (bờ sông) thuộc loại đối tượng nào?',
      options: ['A. một loại sông', 'B. một cụm động từ', 'C. a type of bank (một loại bờ - danh từ chính là bank)', 'D. một tính từ']
    }
  },
  {
    p: 'A: “Where is plural marked in food web?” B: “On ______.”',
    c: 'web: food webs',
    w: ['food: foods web', 'both always', 'neither'],
    representation: 'dialogue',
    translation: {
      content: 'A: “Dạng số nhiều được đánh dấu ở đâu trong food web?” B: “Ở ______.”',
      options: ['A. foods web', 'B. cả hai từ', 'C. không ở đâu', 'D. web: food webs (thêm số nhiều ở danh từ chính web)']
    }
  },
  {
    p: 'Which plural is correct?',
    c: 'wildlife corridors',
    w: ['wildlives corridor', 'wildlifes corridors', 'wildlife corridor-es'],
    translation: {
      content: 'Dạng số nhiều nào dưới đây là đúng của cụm “wildlife corridor”?',
      options: ['A. wildlife corridors (thêm -s vào danh từ chính corridor)', 'B. wildlives corridor', 'C. wildlifes corridors', 'D. wildlife corridor-es']
    }
  },
  {
    p: 'In “ecosystem service”, ecosystem functions mainly as:',
    c: 'a modifier of service',
    w: ['the plural marker', 'a finite verb', 'a tag question'],
    translation: {
      content: 'Trong cụm “ecosystem service”, từ "ecosystem" đóng vai trò chủ yếu là:',
      options: ['A. bộ đánh dấu số nhiều', 'B. a modifier of service (từ đóng vai trò bổ nghĩa cho danh từ chính service)', 'C. một động từ chia', 'D. một câu hỏi đuôi']
    }
  },
  {
    p: 'Which spelling is standard?',
    c: 'food chain',
    w: ['foodchain in every dictionary', 'food-chain compulsory', 'foods chain'],
    translation: {
      content: 'Cách viết nào là tiêu chuẩn nhất?',
      options: ['A. foodchain trong mọi từ điển', 'B. bắt buộc có gạch nối food-chain', 'C. food chain (viết tách rời 2 từ)', 'D. foods chain']
    }
  },
  {
    p: 'A: “Is ‘wildlife’ open or closed?” B: “It is normally ______.”',
    c: 'closed',
    w: ['open as wild life', 'hyphenated always', 'a phrase only'],
    representation: 'dialogue',
    translation: {
      content: 'A: “Từ ‘wildlife’ viết tách (open) hay viết liền (closed)?” B: “Nó thường là ______.”',
      options: ['A. viết tách wild life', 'B. luôn có dấu gạch nối', 'C. chỉ là một cụm từ', 'D. closed (viết liền thành 1 từ duy nhất: wildlife)']
    }
  },
  {
    p: 'Which compound is commonly hyphenated in this context?',
    c: 'decision-making',
    w: ['food web', 'wildlife', 'river bank'],
    translation: {
      content: 'Danh từ ghép nào thường có dấu gạch nối trong ngữ cảnh này?',
      options: ['A. decision-making (danh từ ghép có gạch nối)', 'B. food web', 'C. wildlife', 'D. river bank']
    }
  },
  {
    p: 'Why should learners check a dictionary?',
    c: 'Compound spelling is conventional and not fully predictable.',
    w: ['Every compound is closed.', 'Meaning never matters.', 'Plural always goes first.'],
    translation: {
      content: 'Tại sao người học nên kiểm tra từ điển khi viết danh từ ghép?',
      options: ['A. Mọi danh từ ghép đều viết liền', 'B. Compound spelling is conventional and not fully predictable. (Cách viết danh từ ghép theo quy ước và không hoàn toàn đoán trước được.)', 'C. Ý nghĩa không bao giờ quan trọng', 'D. Dạng số nhiều luôn đứng ở từ đầu tiên']
    }
  },
  {
    p: 'Which compound has “loss” as its head?',
    c: 'habitat loss',
    w: ['loss habitat interpreted the same', 'habitat losing', 'lost habitat adjective'],
    translation: {
      content: 'Cụm danh từ ghép nào có “loss” làm danh từ chính?',
      options: ['A. loss habitat', 'B. habitat losing', 'C. habitat loss (sự mất môi trường sống - head noun là loss)', 'D. lost habitat']
    }
  },
  {
    p: 'Which statement is correct?',
    c: 'A compound noun can have a specialised meaning and several spelling patterns.',
    w: ['All compounds are literal and closed.', 'Every first noun takes plural.', 'Compounds cannot contain V-ing.'],
    translation: {
      content: 'Phát biểu nào sau đây là đúng về danh từ ghép?',
      options: ['A. Tất cả danh từ ghép đều theo nghĩa đen và viết liền', 'B. Mọi danh từ đầu tiên đều nhận dạng số nhiều', 'C. Danh từ ghép không thể chứa dạng V-ing', 'D. A compound noun can have a specialised meaning and several spelling patterns. (Danh từ ghép có thể mang ý nghĩa chuyên biệt và có các dạng cách viết khác nhau.)']
    }
  }
];
const passage1: QuestionStimulus = {
  id: 'eng11-stim-u10-reading-1', title: 'A corridor measured beyond tree planting',
  content: `A farming district created a wildlife corridor between two forest patches. The first plan measured success by the number of trees planted. Ecologists and farmers argued that planting totals did not show whether animals could move safely or whether the trees survived.

The revised project mapped existing vegetation, roads, streams and land use. Farmers identified places where fencing or crop schedules could affect movement. The corridor used native trees and shrubs, but also retained open areas needed by some species. Small crossings were added under two busy roads.

Monitoring combined camera traps, bird surveys, plant survival and roadkill records. After two years, several mammals appeared in both forest patches more often, and roadkill declined near the crossings. However, some planted sections had low survival during a dry season, and an invasive shrub spread along one edge.

The team replaced failed planting methods, controlled the shrub and compensated participating farmers for agreed land-management changes. It avoided claiming that connectivity was fully restored because genetic exchange and long-term population effects remained unknown. Future monitoring will compare corridor and non-corridor areas and record maintenance costs. Surveys will also ask farmers whether compensation arrives on time and whether management rules remain practical during different seasons. If conflict grows, the agreement allows boundaries and schedules to be reviewed rather than abandoning monitoring. The project demonstrates that a wildlife corridor is a functioning landscape, not simply a line of trees. Success depends on habitat quality, movement, survival, neighbouring livelihoods and continued adjustment based on multiple indicators.`
};
const passage2: QuestionStimulus = {
  id: 'eng11-stim-u10-reading-2', title: 'Reintroducing a predator carefully',
  content: `A reserve considered reintroducing a native predator that had disappeared decades earlier. Supporters expected it to limit an overabundant herbivore and reduce damage to young trees. Livestock owners worried that animals near the reserve might also be attacked.

Before release, researchers estimated prey numbers, mapped habitat and studied causes of the predator’s earlier disappearance. The reserve improved livestock fencing with willing farmers and created a verified compensation process. It also set conditions that could pause or reverse the programme if mortality, conflict or prey decline crossed agreed thresholds.

Six animals were released with tracking collars. During the first year, most remained inside suitable habitat, but one repeatedly approached farms and was relocated. Browsing pressure fell in several monitored plots, while tree recovery differed by soil and rainfall. Researchers warned that the small sample and short period could not establish a complete food-web effect.

Community meetings reviewed tracking summaries, livestock reports and vegetation data. Participants disagreed about acceptable risk, but the public criteria made decisions more transparent. The reserve planned a staged release rather than rapid expansion. Independent reviewers would audit compensation claims and animal-welfare records before any second release. Researchers would also compare vegetation inside and outside predator ranges to reduce the risk of attributing every change to reintroduction. The case shows that reintroduction is not achieved at the moment animals are released. It requires preparation, conflict mitigation, welfare monitoring, ecological evidence and rules for changing course. Expected benefits may take years, while costs can appear quickly and may be distributed unevenly.`
};
const passage3: QuestionStimulus = {
  id: 'eng11-stim-u10-reading-3', title: 'A seagrass restoration experiment',
  content: `A coastal community noticed that seagrass beds had declined near boat routes. Seagrass provides nursery habitat, stores carbon and stabilises sediment, but it can be damaged by anchors, poor water quality and repeated disturbance. A volunteer group proposed planting shoots across the entire bay.

Marine scientists recommended a smaller experiment first. They tested water clarity, current speed and sediment at several sites, then transplanted small plots using two methods. Fishers contributed knowledge about seasonal currents and areas where boats sought shelter. Temporary no-anchor markers protected the plots while leaving an emergency route open.

After eighteen months, survival was high at two sites and poor at a third where water remained cloudy. Juvenile fish were more frequent near surviving plots, but researchers could not yet separate the effect of seagrass from differences already present between sites. Carbon storage had not been measured directly.

The group expanded only the successful methods and worked upstream on sources of muddy runoff. It also surveyed whether markers affected fishing access and adjusted one boundary. Reports included failed plots rather than presenting only favourable photographs. Volunteers received the same monitoring protocol so observations from different months could be compared. The team stored photographs with dates and fixed locations, while scientists checked a sample of species records. Long-term evaluation will compare vegetation cover, water quality, fish communities, maintenance and local access. The experiment illustrates why ecological restoration needs both site conditions and social design. Planting can fail if the causes of decline continue, and visible growth alone does not establish every claimed ecosystem service.`
};
const reading: Raw[] = [
  {
    p: 'Why was tree count an insufficient corridor measure?',
    c: 'It did not show survival, movement or safety.',
    w: ['No trees were planted.', 'Farmers opposed all vegetation.', 'Animals never use corridors.'],
    stimulus: passage1,
    translation: {
      content: 'Tại sao việc đếm số cây trồng lại là một thước đo hành lang sinh thái không đầy đủ?',
      options: ['A. It did not show survival, movement or safety. (Nó không thể hiện sự sống sót, sự di chuyển hay độ an toàn.)', 'B. Không có cây nào được trồng', 'C. Nông dân phản đối mọi thảm thực vật', 'D. Động vật không bao giờ sử dụng hành lang']
    }
  },
  {
    p: 'What local knowledge did farmers contribute?',
    c: 'Where fencing, crops and land use affected movement',
    w: ['Predator genetics', 'Ocean currents', 'School surveys'],
    stimulus: passage1,
    translation: {
      content: 'Kiến thức địa phương nào mà người nông dân đã đóng góp?',
      options: ['A. Di truyền học của loài săn mồi', 'B. Where fencing, crops and land use affected movement (Nơi mà hàng rào, cây trồng và việc sử dụng đất ảnh hưởng đến sự di chuyển)', 'C. Các dòng hải lưu', 'D. Các khảo sát trường học']
    }
  },
  {
    p: 'Which problem appeared after planting?',
    c: 'Low survival in dry sections and an invasive shrub',
    w: ['Every crossing failed.', 'Roadkill rose everywhere.', 'All farmers withdrew.'],
    stimulus: passage1,
    translation: {
      content: 'Vấn đề nào xuất hiện sau khi trồng cây?',
      options: ['A. Mọi vị trí băng qua đường đều thất bại', 'B. Số vụ động vật bị xe tông tăng ở mọi nơi', 'C. Low survival in dry sections and an invasive shrub (Tỷ lệ sống sót thấp ở các đoạn khô hạn và một loài bụi rậm xâm hại)', 'D. Tất cả nông dân đều rút lui']
    }
  },
  {
    p: 'Why did the team avoid claiming full restoration?',
    c: 'Long-term population and genetic effects were unknown.',
    w: ['No monitoring existed.', 'All indicators declined.', 'Connectivity has no meaning.'],
    stimulus: passage1,
    translation: {
      content: 'Tại sao nhóm nghiên cứu tránh tuyên bố khôi phục hoàn toàn?',
      options: ['A. Không có sự giám sát nào tồn tại', 'B. Tất cả các chỉ số đều giảm', 'C. Khái niệm tính kết nối không có ý nghĩa', 'D. Long-term population and genetic effects were unknown. (Các tác động lâu dài về quần thể và di truyền chưa được biết rõ.)']
    }
  },
  {
    p: 'What benefit was expected from predator return?',
    c: 'Reduced herbivore pressure on young trees',
    w: ['More road traffic', 'Less habitat mapping', 'Guaranteed livestock growth'],
    stimulus: passage2,
    translation: {
      content: 'Lợi ích nào được kỳ vọng từ sự trở lại của loài săn mồi?',
      options: ['A. Reduced herbivore pressure on young trees (Giảm áp lực của loài ăn cỏ lên các cây non)', 'B. Tăng giao thông đường bộ', 'C. Giảm bản đồ môi trường sống', 'D. Đảm bảo gia súc tăng trưởng']
    }
  },
  {
    p: 'What made the programme adaptive?',
    c: 'Pre-agreed thresholds could pause or reverse action.',
    w: ['Every release was permanent.', 'Data remained private.', 'Conflict had no response.'],
    stimulus: passage2,
    translation: {
      content: 'Điều gì đã làm cho chương trình mang tính thích ứng (adaptive)?',
      options: ['A. Mọi đợt thả động vật đều vĩnh viễn', 'B. Pre-agreed thresholds could pause or reverse action. (Các ngưỡng được thỏa thuận trước có thể tạm dừng hoặc đảo ngược hành động.)', 'C. Dữ liệu được giữ riêng tư', 'D. Xung đột không có sự phản hồi']
    }
  },
  {
    p: 'Why was one predator relocated?',
    c: 'It repeatedly approached farms.',
    w: ['Its collar failed once.', 'Trees recovered too fast.', 'Prey numbers increased.'],
    stimulus: passage2,
    translation: {
      content: 'Tại sao một cá thể săn mồi lại bị di dời địa điểm?',
      options: ['A. Vòng định vị của nó bị hỏng một lần', 'B. Cây cối phục hồi quá nhanh', 'C. It repeatedly approached farms. (Nó liên tục tiến lại gần các trang trại.)', 'D. Số lượng con mồi tăng lên']
    }
  },
  {
    p: 'Which limitation constrained ecological conclusions?',
    c: 'A small sample and short monitoring period',
    w: ['No animals were released.', 'Vegetation was never measured.', 'Farmers had no concerns.'],
    stimulus: passage2,
    translation: {
      content: 'Hạn chế nào đã thu hẹp các kết luận sinh thái?',
      options: ['A. Không có động vật nào được thả', 'B. Thảm thực vật không bao giờ được đo lường', 'C. Nông dân không có mối quan tâm nào', 'D. A small sample and short monitoring period (Mẫu nhỏ và thời gian theo dõi ngắn)']
    }
  },
  {
    p: 'Why did scientists propose a small seagrass experiment?',
    c: 'Site conditions could strongly affect survival.',
    w: ['Seagrass has no habitat role.', 'The bay had perfect water quality.', 'Volunteers rejected monitoring.'],
    stimulus: passage3,
    translation: {
      content: 'Tại sao các nhà khoa học đề xuất một thử nghiệm cỏ biển quy mô nhỏ?',
      options: ['A. Site conditions could strongly affect survival. (Các điều kiện địa điểm có thể ảnh hưởng mạnh mẽ đến sự sống sót.)', 'B. Cỏ biển không có vai trò môi trường sống', 'C. Vịnh có chất lượng nước hoàn hảo', 'D. Tình nguyện viên từ chối theo dõi']
    }
  },
  {
    p: 'What caused poor survival at one site?',
    c: 'Persistently cloudy water',
    w: ['Too many juvenile fish', 'Emergency access', 'High carbon measurements'],
    stimulus: passage3,
    translation: {
      content: 'Điều gì đã gây ra tỷ lệ sống sót kém ở một địa điểm?',
      options: ['A. Quá nhiều cá non', 'B. Persistently cloudy water (Nước liên tục đục)', 'C. Lối đi khẩn cấp', 'D. Đo lường carbon cao']
    }
  },
  {
    p: 'Why could more juvenile fish not be attributed fully to seagrass?',
    c: 'Sites may have differed before restoration.',
    w: ['Fish were not observed.', 'Every plot failed.', 'Carbon was measured directly.'],
    stimulus: passage3,
    translation: {
      content: 'Tại sao việc có nhiều cá non hơn không thể quy hoàn toàn cho cỏ biển?',
      options: ['A. Cá không được quan sát', 'B. Mọi ô thử nghiệm đều thất bại', 'C. Sites may have differed before restoration. (Các địa điểm có thể đã khác nhau từ trước khi khôi phục.)', 'D. Carbon được đo lường trực tiếp']
    }
  },
  {
    p: 'What broader lesson does passage 3 support?',
    c: 'Restoration must address original pressures and track ecological and social outcomes.',
    w: ['Planting alone proves every service.', 'Failed plots should be hidden.', 'Local access never matters.'],
    stimulus: passage3,
    translation: {
      content: 'Bài học rộng lớn hơn nào mà đoạn 3 ủng hộ?',
      options: ['A. Chỉ riêng việc trồng chứng minh mọi dịch vụ', 'B. Các ô thất bại nên được giấu đi', 'C. Khả năng tiếp cận của địa phương không bao giờ quan trọng', 'D. Restoration must address original pressures and track ecological and social outcomes. (Khôi phục phải giải quyết các áp lực ban đầu và theo dõi các kết quả sinh thái lẫn xã hội.)']
    }
  }
];
const writing: Raw[] = [
  {
    p: 'Choose the best order: (a) explain the mechanism; (b) state habitat loss; (c) propose monitored restoration.',
    c: 'b-a-c',
    w: ['a-c-b', 'c-b-a', 'b-c-a'],
    translation: {
      content: 'Chọn thứ tự bài viết tốt nhất: (a) giải thích cơ chế; (b) nêu sự mất môi trường sống; (c) đề xuất khôi phục có giám sát.',
      options: ['A. b-a-c', 'B. a-c-b', 'C. c-b-a', 'D. b-c-a']
    }
  },
  {
    p: 'Which opening defines a clear ecological problem?',
    c: 'Seagrass cover declined by 30% in monitored boat-route plots over five years.',
    w: ['Nature is important.', 'Everything is collapsing.', 'Plants are green.'],
    translation: {
      content: 'Mở đầu nào định nghĩa một vấn đề sinh thái rõ ràng?',
      options: ['A. Thiên nhiên thì quan trọng.', 'B. Seagrass cover declined by 30% in monitored boat-route plots over five years. (Độ che phủ cỏ biển giảm 30% ở các ô tuyến đường thuyền được giám sát trong 5 năm.)', 'C. Mọi thứ đang sụp đổ.', 'D. Cây cối có màu xanh.']
    }
  },
  {
    p: 'Choose the connector: “Planting survival improved. ______, water quality remained poor.”',
    c: 'However',
    w: ['Therefore', 'Because of', 'In addition only'],
    translation: {
      content: 'Chọn từ nối: “Tỷ lệ sống sót của cây trồng đã cải thiện. ______, chất lượng nước vẫn ở mức kém.”',
      options: ['A. Vì vậy', 'B. Bởi vì', 'C. However (Tuy nhiên)', 'D. Hơn nữa']
    }
  },
  {
    p: 'A: “What should follow a mechanism?” B: “______”',
    c: 'Evidence and a response addressing the cause',
    w: ['An unrelated species list', 'A guarantee', 'No indicator'],
    representation: 'dialogue',
    translation: {
      content: 'A: “Điều gì nên đi sau một cơ chế?” B: “______”',
      options: ['A. Một danh sách loài không liên quan', 'B. Một sự đảm bảo', 'C. Không có chỉ số nào', 'D. Evidence and a response addressing the cause (Bằng chứng và một phản hồi giải quyết nguyên nhân gốc rễ)']
    }
  },
  {
    p: 'Which sentence uses a compound noun correctly?',
    c: 'The restoration plan includes water-quality monitoring.',
    w: ['The restoration plans includes waters quality.', 'Water qualities monitoring is verb.', 'The plan restorationly.'],
    translation: {
      content: 'Câu nào sử dụng danh từ ghép đúng cách?',
      options: ['A. The restoration plan includes water-quality monitoring. (Kế hoạch khôi phục bao gồm việc giám sát chất lượng nước.)', 'B. Sai (dùng waters quality)', 'C. Sai (dùng qualities monitoring)', 'D. Sai cấu trúc']
    }
  },
  {
    p: 'Which detail is least relevant to an ecosystem restoration proposal?',
    c: 'The report designer’s favourite animal',
    w: ['Baseline', 'Maintenance owner', 'Review trigger'],
    translation: {
      content: 'Chi tiết nào ít liên quan nhất đến đề xuất khôi phục hệ sinh thái?',
      options: ['A. Dữ liệu nền', 'B. The report designer’s favourite animal (Động vật yêu thích của người thiết kế báo cáo - Không liên quan)', 'C. Người chịu trách nhiệm bảo trì', 'D. Cần gạt/kích hoạt xem xét']
    }
  },
  {
    p: 'Choose the cautious evidence statement.',
    c: 'Camera records suggest increased use of the corridor by two species.',
    w: ['Two photos prove full recovery.', 'The corridor guarantees genetic exchange.', 'Monitoring is unnecessary.'],
    translation: {
      content: 'Chọn phát biểu bằng chứng mang tính cẩn trọng:',
      options: ['A. Hai bức ảnh chứng minh sự phục hồi hoàn toàn', 'B. Hành hành sinh thái đảm bảo sự trao đổi gen', 'C. Camera records suggest increased use of the corridor by two species. (Ghi chép từ camera gợi ý việc tăng cường sử dụng hành lang của 2 loài.)', 'D. Sự giám sát là không cần thiết']
    }
  },
  {
    p: 'A: “How do I pluralise wildlife corridor?” B: “______”',
    c: 'wildlife corridors',
    w: ['wildlives corridor', 'wildlifes corridors', 'wildlife corridor-es'],
    representation: 'dialogue',
    translation: {
      content: 'A: “Tôi tạo dạng số nhiều cho wildlife corridor như thế nào?” B: “______”',
      options: ['A. wildlives corridor', 'B. wildlifes corridors', 'C. wildlife corridor-es', 'D. wildlife corridors (thêm -s vào danh từ chính corridor)']
    }
  },
  {
    p: 'Which topic sentence fits survival, movement and roadkill indicators?',
    c: 'Corridor performance should be assessed with multiple ecological measures.',
    w: ['Trees are counted.', 'Roads exist.', 'Animals move.'],
    translation: {
      content: 'Câu chủ đề nào phù hợp với các chỉ số sống sót, di chuyển và xe tông động vật?',
      options: ['A. Corridor performance should be assessed with multiple ecological measures. (Hiệu suất của hành lang nên được đánh giá bằng nhiều thước đo sinh thái.)', 'B. Cây cối được đếm.', 'C. Các con đường tồn tại.', 'D. Động vật di chuyển.']
    }
  },
  {
    p: 'Which ecosystem-proposal revision avoids overclaiming?',
    c: 'The pilot may improve habitat connectivity if crossings and vegetation are maintained.',
    w: ['The pilot restores every population forever.', 'One year proves all effects.', 'Maintenance cannot matter.'],
    translation: {
      content: 'Bản sửa đổi đề xuất hệ sinh thái nào tránh việc tuyên bố quá lời?',
      options: ['A. Dự án thí điểm khôi phục mọi quần thể mãi mãi', 'B. The pilot may improve habitat connectivity if crossings and vegetation are maintained. (Dự án thí điểm có thể cải thiện tính kết nối môi trường sống nếu các điểm băng qua và thảm thực vật được bảo trì.)', 'C. Một năm chứng minh mọi tác động', 'D. Việc bảo trì không quan trọng']
    }
  },
  {
    p: 'Choose the clearest cause–response combination.',
    c: 'Because muddy runoff reduced light, the project addressed upstream erosion.',
    w: ['Runoff although light therefore.', 'Erosion because project.', 'Because of runoff reduced, so erosion.'],
    translation: {
      content: 'Chọn sự kết hợp nguyên nhân - phản hồi rõ ràng nhất:',
      options: ['A. Vô nghĩa', 'B. Vô nghĩa', 'C. Because muddy runoff reduced light, the project addressed upstream erosion. (Bởi vì dòng chảy bùn đục làm giảm ánh sáng, dự án đã giải quyết xói mòn thượng nguồn.)', 'D. Vô nghĩa']
    }
  },
  {
    p: 'Which final sentence best closes an adaptive proposal?',
    c: 'Annual reviews will compare indicators and trigger changes if thresholds are missed.',
    w: ['Success is guaranteed.', 'Only photos will be used.', 'The proposal ends.'],
    translation: {
      content: 'Câu kết thúc nào khép lại tốt nhất một bài đề xuất thích ứng (adaptive proposal)?',
      options: ['A. Thành công được đảm bảo', 'B. Chỉ các bức ảnh mới được sử dụng', 'C. Đề xuất kết thúc', 'D. Annual reviews will compare indicators and trigger changes if thresholds are missed. (Các đánh giá hàng năm sẽ so sánh các chỉ số và kích hoạt các thay đổi nếu các ngưỡng bị bỏ lỡ.)']
    }
  }
];
const communication: Raw[] = [
  {
    p: 'Which question asks for ecological evidence?',
    c: 'Which indicators show that food-web function improved?',
    w: ['Is the logo attractive?', 'Who speaks loudest?', 'Is the title short?'],
    translation: {
      content: 'Câu hỏi nào yêu cầu bằng chứng sinh thái?',
      options: ['A. Which indicators show that food-web function improved? (Những chỉ số nào cho thấy chức năng của lưới thức ăn đã cải thiện?)', 'B. Logo có hấp dẫn không?', 'C. Ai nói to nhất?', 'D. Tiêu đề có ngắn không?']
    }
  },
  {
    p: 'A: “Let’s plant everywhere.” B: “______”',
    c: 'Could we test site conditions and survival in a pilot first?',
    w: ['Monitoring is unnecessary.', 'Every site is identical.', 'Planting guarantees success.'],
    representation: 'dialogue',
    translation: {
      content: 'A: “Hãy trồng ở khắp mọi nơi.” B: “______”',
      options: ['A. Sự giám sát là không cần thiết', 'B. Could we test site conditions and survival in a pilot first? (Chúng ta có thể thử nghiệm các điều kiện địa điểm và sự sống sót trong một đợt thí điểm trước không?)', 'C. Mọi địa điểm đều giống hệt nhau', 'D. Việc trồng đảm bảo thành công']
    }
  },
  {
    p: 'Which proposal includes adaptive management?',
    c: 'Set thresholds, monitor results and revise the method.',
    w: ['Never change the plan.', 'Hide failed plots.', 'Use no baseline.'],
    translation: {
      content: 'Đề xuất nào bao gồm quản lý thích ứng (adaptive management)?',
      options: ['A. Không bao giờ thay đổi kế hoạch', 'B. Giấu đi các ô thử nghiệm thất bại', 'C. Set thresholds, monitor results and revise the method. (Thiết lập các ngưỡng, giám sát kết quả và sửa đổi phương pháp.)', 'D. Không sử dụng dữ liệu nền']
    }
  },
  {
    p: 'A: “Farmers are worried about access.” B: “______”',
    c: 'Let’s map essential routes and include them in the design review.',
    w: ['Livelihoods are irrelevant.', 'Decide before consultation.', 'Remove all feedback.'],
    representation: 'dialogue',
    translation: {
      content: 'A: “Nông dân lo lắng về khả năng tiếp cận.” B: “______”',
      options: ['A. Kế sinh nhai không liên quan', 'B. Quyết định trước khi tham vấn', 'C. Xóa bỏ tất cả phản hồi', 'D. Let’s map essential routes and include them in the design review. (Hãy lập bản đồ các tuyến đường thiết yếu và đưa chúng vào đợt xem xét thiết kế.)']
    }
  },
  {
    p: 'Which statement identifies a trade-off?',
    c: 'A closure may protect nesting sites but reduce seasonal fishing access.',
    w: ['Every action has only benefits.', 'Access and habitat never interact.', 'Trade-offs are spelling.'],
    translation: {
      content: 'Phát biểu nào xác định một sự đánh đổi (trade-off)?',
      options: ['A. A closure may protect nesting sites but reduce seasonal fishing access. (Việc đóng cửa có thể bảo vệ các khu vực làm tổ nhưng làm giảm quyền tiếp cận đánh bắt cá theo mùa.)', 'B. Mọi hành động chỉ có lợi ích', 'C. Khả năng tiếp cận và môi trường sống không bao giờ tương tác', 'D. Sự đánh đổi là cách đánh vần']
    }
  },
  {
    p: 'A: “One species increased.” B: “______”',
    c: 'That is encouraging, but what happened to diversity and ecosystem function?',
    w: ['Full recovery is proven.', 'No other indicator matters.', 'Stop monitoring.'],
    representation: 'dialogue',
    translation: {
      content: 'A: “Một loài đã gia tăng số lượng.” B: “______”',
      options: ['A. Sự phục hồi hoàn toàn được chứng minh', 'B. That is encouraging, but what happened to diversity and ecosystem function? (Điều đó thật khích lệ, nhưng điều gì đã xảy ra với sự đa dạng và chức năng hệ sinh thái?)', 'C. Không có chỉ số nào khác quan trọng', 'D. Dừng việc giám sát']
    }
  },
  {
    p: 'What makes consultation meaningful?',
    c: 'Stakeholders can influence choices and review outcomes.',
    w: ['They receive a final notice only.', 'Data is withheld.', 'The plan cannot change.'],
    translation: {
      content: 'Điều gì làm cho cuộc tham vấn trở nên có ý nghĩa?',
      options: ['A. Họ chỉ nhận được thông báo cuối cùng', 'B. Dữ liệu bị từ chối chia sẻ', 'C. Stakeholders can influence choices and review outcomes. (Các bên liên quan có thể ảnh hưởng đến các lựa chọn và xem xét kết quả.)', 'D. Kế hoạch không thể thay đổi']
    }
  },
  {
    p: 'A: “Why include local fishers?” B: “______”',
    c: 'They hold place-based knowledge and are affected by access decisions.',
    w: ['Only scientists observe change.', 'Rights do not matter.', 'Fishing has no ecosystem link.'],
    representation: 'dialogue',
    translation: {
      content: 'A: “Tại sao nên bao gồm các ngư dân địa phương?” B: “______”',
      options: ['A. Chỉ có các nhà khoa học mới quan sát sự thay đổi', 'B. Quyền lợi không quan trọng', 'C. Việc đánh bắt cá không liên quan đến hệ sinh thái', 'D. They hold place-based knowledge and are affected by access decisions. (Họ nắm giữ kiến thức địa phương và bị ảnh hưởng bởi các quyết định tiếp cận.)']
    }
  },
  {
    p: 'Which question reveals uncertainty?',
    c: 'What effects remain unmeasured or may take longer to appear?',
    w: ['Can we guarantee everything?', 'Why report only success?', 'Is uncertainty forbidden?'],
    translation: {
      content: 'Câu hỏi nào thể hiện sự không chắc chắn (uncertainty)?',
      options: ['A. What effects remain unmeasured or may take longer to appear? (Những tác động nào chưa được đo lường hoặc có thể mất nhiều thời gian hơn để xuất hiện?)', 'B. Chúng ta có thể đảm bảo mọi thứ không?', 'C. Tại sao chỉ báo cáo thành công?', 'D. Sự không chắc chắn có bị cấm không?']
    }
  },
  {
    p: 'A: “The pilot failed at one site.” B: “______”',
    c: 'Let’s compare conditions and report the failure before redesigning.',
    w: ['Hide it.', 'Expand the same method everywhere.', 'Delete the baseline.'],
    representation: 'dialogue',
    translation: {
      content: 'A: “Dự án thí điểm đã thất bại ở một địa điểm.” B: “______”',
      options: ['A. Giấu nó đi', 'B. Let’s compare conditions and report the failure before redesigning. (Hãy so sánh các điều kiện và báo cáo sự thất bại trước khi thiết kế lại.)', 'C. Mở rộng cùng một phương pháp ở mọi nơi', 'D. Xóa dữ liệu nền']
    }
  },
  {
    p: 'Which response balances science and distribution?',
    c: 'Compare ecological benefit with who bears cost and how harm can be reduced.',
    w: ['Choose ecology with no social data.', 'Choose popularity only.', 'Assume equal impacts.'],
    translation: {
      content: 'Phản hồi nào cân bằng giữa khoa học và sự phân bổ lợi ích/chi phí?',
      options: ['A. Chọn sinh thái mà không có dữ liệu xã hội', 'B. Chỉ chọn sự phổ biến', 'C. Compare ecological benefit with who bears cost and how harm can be reduced. (So sánh lợi ích sinh thái với ai chịu chi phí và cách giảm thiểu tác hại.)', 'D. Cho rằng tác động là như nhau']
    }
  },
  {
    p: 'A: “When should the plan change?” B: “______”',
    c: 'When monitored thresholds or unexpected harms indicate revision is needed.',
    w: ['Never.', 'Only after all damage is permanent.', 'Whenever a slogan changes.'],
    representation: 'dialogue',
    translation: {
      content: 'A: “Khi nào kế hoạch nên thay đổi?” B: “______”',
      options: ['A. Không bao giờ', 'B. Chỉ sau khi mọi thiệt hại trở thành vĩnh viễn', 'C. Bất cứ khi nào khẩu hiệu thay đổi', 'D. When monitored thresholds or unexpected harms indicate revision is needed. (Khi các ngưỡng được giám sát hoặc các tác hại bất ngờ cho thấy cần phải sửa đổi.)']
    }
  }
];
export const g11EnglishModule10Questions:CourseQuestion[]=[
  ...build('pronunciation','language',pronunciation,['form','meaning-tone']),...build('vocabulary','language',vocabulary,['meaning-word-form','ecosystem-collocation']),
  ...build('grammar','language',grammar,['formation-head','meaning-spelling']),...build('reading','reading',reading,['main-detail','infer-evaluate']),
  ...build('writing','writing',writing,['order-cohesion','transform-evidence']),...build('communication','communication-culture',communication,['ask-suggest','stakeholder-tradeoff'])
];
