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
    id: `eng11-q-u4-${key}-${String(index + 1).padStart(2, '0')}`,
    courseId: 'grade11:english', moduleId: 'eng11-m4', lessonId: lesson,
    subjectId: 'english', topicId: 'eng11-topic-u4', questionTypeId: type,
    content: row.content, options: row.options, correctAnswer: row.answer,
    translation: row.translation,
    responseType: 'single_choice', validatorType: 'choice', difficulty: difficulties[index],
    points: 0.25, sourceType: 'manual', outcomeIds: [outcome], subTypeId: row.subTypeId,
    practiceRole: roles[index % 6], representationType: row.representationType ?? (index % 4 === 3 ? 'dialogue' : 'text'),
    isMasteryHoldout: index % 6 === 5, stimulus: row.stimulus
  }));

const pronunciationRows: Row[] = [
  {
    content: 'Vowel elision most commonly affects a vowel that is:',
    options: ['A. unstressed', 'B. the main stressed vowel', 'C. written in capitals', 'D. at the start of every sentence'],
    answer: 'A',
    subTypeId: 'eng11-u4-pron-word',
    translation: {
      content: 'Hiện tượng nuốt nguyên âm (vowel elision) thường ảnh hưởng nhất đến một nguyên âm:',
      options: ['A. unstressed (không mang trọng âm)', 'B. nguyên âm mang trọng âm chính', 'C. được viết hoa', 'D. ở đầu mọi câu']
    }
  },
  {
    content: 'Which word is commonly pronounced with a reduced middle vowel and fewer syllables than its spelling may suggest?',
    options: ['A. see', 'B. family', 'C. go', 'D. tea'],
    answer: 'B',
    subTypeId: 'eng11-u4-pron-word',
    translation: {
      content: 'Từ nào thường được phát âm với nguyên âm giữa bị giảm/nuốt âm và có ít âm tiết hơn so với cách đánh vần?',
      options: ['A. see', 'B. family (thường phát âm là /ˈfæm.li/ thay vì /ˈfæm.əl.i/)', 'C. go', 'D. tea']
    }
  },
  {
    content: 'In a common pronunciation of “history”, which kind of sound may be elided?',
    options: ['A. The stressed first vowel', 'B. The final consonant', 'C. An unstressed middle vowel', 'D. Every vowel'],
    answer: 'C',
    subTypeId: 'eng11-u4-pron-word',
    translation: {
      content: 'Trong cách phát âm phổ biến của từ “history”, âm nào có thể bị nuốt?',
      options: ['A. Nguyên âm đầu tiên mang trọng âm', 'B. Phụ âm cuối', 'C. An unstressed middle vowel (Một nguyên âm giữa không mang trọng âm: /ˈhɪs.tri/)', 'D. Mọi nguyên âm']
    }
  },
  {
    content: 'A: “Why can ‘comfortable’ sound shorter than it looks?” B: “Because ______.”',
    options: ['A. every consonant is silent', 'B. stress disappears', 'C. spelling changes', 'D. an unstressed vowel may be elided'],
    answer: 'D',
    subTypeId: 'eng11-u4-pron-word',
    representationType: 'dialogue',
    translation: {
      content: 'A: “Tại sao từ ‘comfortable’ có vẻ đọc ngắn hơn so với cách viết của nó?” B: “Bởi vì ______.”',
      options: ['A. mọi phụ âm đều là âm câm', 'B. trọng âm biến mất', 'C. cách đánh vần thay đổi', 'D. an unstressed vowel may be elided (một nguyên âm không mang trọng âm có thể bị nuốt: /ˈkʌmf.tə.bəl/)']
    }
  },
  {
    content: 'Which word is a common example used when teaching vowel elision?',
    options: ['A. different', 'B. ASEAN', 'C. state', 'D. trade'],
    answer: 'A',
    subTypeId: 'eng11-u4-pron-word',
    translation: {
      content: 'Từ nào là ví dụ phổ biến được dùng khi dạy về hiện tượng nuốt nguyên âm?',
      options: ['A. different (phát âm là /ˈdɪf.rənt/ với 2 âm tiết)', 'B. ASEAN', 'C. state', 'D. trade']
    }
  },
  {
    content: 'The natural pronunciation of “camera” in many accents may:',
    options: ['A. add two stressed vowels', 'B. reduce an unstressed middle vowel', 'C. remove the first consonant', 'D. turn every sound into /a/'],
    answer: 'B',
    subTypeId: 'eng11-u4-pron-word',
    translation: {
      content: 'Phát âm tự nhiên của từ “camera” trong nhiều chất giọng có thể:',
      options: ['A. thêm 2 nguyên âm mang trọng âm', 'B. reduce an unstressed middle vowel (giảm/nuốt một nguyên âm giữa không mang trọng âm: /ˈkæm.rə/)', 'C. xóa bỏ phụ âm đầu tiên', 'D. biến mọi âm thành /a/']
    }
  },
  {
    content: 'Which statement about elision is correct?',
    options: ['A. Speakers may delete any vowel they choose.', 'B. It depends only on the number of letters.', 'C. It is a recognised feature of particular natural pronunciations.', 'D. It occurs only in writing.'],
    answer: 'C',
    subTypeId: 'eng11-u4-pron-principle',
    translation: {
      content: 'Phát biểu nào về hiện tượng nuốt âm (elision) là đúng?',
      options: ['A. Người nói có thể xóa bất kỳ nguyên âm nào họ chọn.', 'B. Nó chỉ phụ thuộc vào số lượng chữ cái.', 'C. It is a recognised feature of particular natural pronunciations. (Nó là một đặc trưng được công nhận của một số cách phát âm tự nhiên.)', 'D. Nó chỉ xảy ra trong văn viết.']
    }
  },
  {
    content: 'A: “Should I pronounce every written vowel as a full syllable?” B: “______”',
    options: ['A. Yes, spelling always equals sound.', 'B. Only in long words.', 'C. Every vowel is stressed.', 'D. No. Check the standard pronunciation because weak vowels may be reduced or elided.'],
    answer: 'D',
    subTypeId: 'eng11-u4-pron-principle',
    representationType: 'dialogue',
    translation: {
      content: 'A: “Tớ có nên phát âm mọi nguyên âm được viết thành một âm tiết đầy đủ không?” B: “______”',
      options: ['A. Có, cách đánh vần luôn bằng âm thanh.', 'B. Chỉ trong các từ dài.', 'C. Mọi nguyên âm đều mang trọng âm.', 'D. No. Check the standard pronunciation because weak vowels may be reduced or elided. (Không. Hãy kiểm tra phát âm chuẩn vì các nguyên âm yếu có thể bị giảm hoặc nuốt âm.)']
    }
  },
  {
    content: 'Why is stress important when learning elision?',
    options: ['A. Unstressed vowels are more likely to be weakened or omitted.', 'B. Stressed vowels are always deleted.', 'C. Stress changes spelling.', 'D. Stress removes all consonants.'],
    answer: 'A',
    subTypeId: 'eng11-u4-pron-principle',
    translation: {
      content: 'Tại sao trọng âm lại quan trọng khi học về hiện tượng nuốt âm?',
      options: ['A. Unstressed vowels are more likely to be weakened or omitted. (Các nguyên âm không mang trọng âm có nhiều khả năng bị làm yếu hoặc bỏ qua.)', 'B. Các nguyên âm mang trọng âm luôn bị xóa.', 'C. Trọng âm làm thay đổi cách đánh vần.', 'D. Trọng âm xóa bỏ mọi phụ âm.']
    }
  },
  {
    content: 'Which learning strategy is most reliable?',
    options: ['A. Delete every schwa symbol.', 'B. Listen to a trusted pronunciation and note syllables and stress.', 'C. Count letters only.', 'D. Invent a shorter pronunciation.'],
    answer: 'B',
    subTypeId: 'eng11-u4-pron-principle',
    translation: {
      content: 'Chiến lược học tập nào là đáng tin cậy nhất?',
      options: ['A. Xóa mọi ký hiệu schwa.', 'B. Listen to a trusted pronunciation and note syllables and stress. (Lắng nghe phát âm uy tín và ghi chú âm tiết cũng như trọng âm.)', 'C. Chỉ đếm chữ cái.', 'D. Tự chế ra cách phát âm ngắn hơn.']
    }
  },
  {
    content: 'Elision can make two consonants:',
    options: ['A. disappear from spelling', 'B. become vowels', 'C. occur next to each other in pronunciation', 'D. receive sentence stress'],
    answer: 'C',
    subTypeId: 'eng11-u4-pron-principle',
    translation: {
      content: 'Hiện tượng nuốt âm có thể khiến hai phụ âm:',
      options: ['A. biến mất khỏi cách đánh vần', 'B. trở thành nguyên âm', 'C. occur next to each other in pronunciation (kế tiếp nhau/đứng cạnh nhau trong phát âm)', 'D. nhận trọng âm câu']
    }
  },
  {
    content: 'Which conclusion is safest?',
    options: ['A. All speakers elide exactly the same sounds.', 'B. Elision is incorrect speech.', 'C. Every long word must lose a vowel.', 'D. Accepted pronunciations may vary, so learners should recognise common forms rather than delete sounds freely.'],
    answer: 'D',
    subTypeId: 'eng11-u4-pron-principle',
    translation: {
      content: 'Kết luận nào là an toàn nhất?',
      options: ['A. Tất cả người nói đều nuốt chính xác cùng một âm.', 'B. Nuốt âm là lời nói không chính xác.', 'C. Mọi từ dài phải mất một nguyên âm.', 'D. Accepted pronunciations may vary, so learners should recognise common forms rather than delete sounds freely. (Các phát âm được chấp nhận có thể khác nhau, vì vậy người học nên nhận biết các dạng phổ biến thay vì tự ý xóa âm.)']
    }
  }
];

const vocabularyRows: Row[] = [
  {
    content: 'A country that officially belongs to an organisation is a member ______.',
    options: ['A. state', 'B. station', 'C. statement', 'D. status'],
    answer: 'A',
    subTypeId: 'eng11-u4-vocab-meaning',
    translation: {
      content: 'Một quốc gia chính thức thuộc về một tổ chức là một quốc gia thành viên (member ______ formulation).',
      options: ['A. state (member state - quốc gia thành viên)', 'B. station', 'C. statement', 'D. status']
    }
  },
  {
    content: 'Cultural ______ refers to the presence of many different traditions and ways of life.',
    options: ['A. identity only', 'B. diversity', 'C. participation', 'D. summit'],
    answer: 'B',
    subTypeId: 'eng11-u4-vocab-meaning',
    translation: {
      content: 'Sự đa dạng văn hóa (Cultural ______) đề cập đến sự hiện diện của nhiều truyền thống và lối sống khác nhau.',
      options: ['A. identity only', 'B. diversity (cultural diversity - sự đa dạng văn hóa)', 'C. participation', 'D. summit']
    }
  },
  {
    content: 'The noun referring to a person who joins an activity is ______.',
    options: ['A. participation', 'B. participate', 'C. participant', 'D. participatory event'],
    answer: 'C',
    subTypeId: 'eng11-u4-vocab-meaning',
    translation: {
      content: 'Danh từ chỉ một người tham gia vào một hoạt động là ______.',
      options: ['A. participation', 'B. participate', 'C. participant (người tham gia)', 'D. participatory event']
    }
  },
  {
    content: 'A: “What is cultural identity?” B: “It is the sense of ______ shared by a cultural group.”',
    options: ['A. trading', 'B. competing', 'C. travelling', 'D. who they are'],
    answer: 'D',
    subTypeId: 'eng11-u4-vocab-meaning',
    representationType: 'dialogue',
    translation: {
      content: 'A: “Bản sắc văn hóa (cultural identity) là gì?” B: “Đó là ý thức về ______ được chia sẻ bởi một nhóm văn hóa.”',
      options: ['A. giao thương', 'B. cạnh tranh', 'C. du lịch', 'D. who they are (họ là ai / bản sắc nhóm)']
    }
  },
  {
    content: 'A formal meeting of national leaders is often called a ______.',
    options: ['A. summit', 'B. participant', 'C. tie', 'D. diversity'],
    answer: 'A',
    subTypeId: 'eng11-u4-vocab-meaning',
    translation: {
      content: 'Một cuộc họp chính thức của các lãnh đạo quốc gia thường được gọi là một ______.',
      options: ['A. summit (hội nghị thượng đỉnh)', 'B. participant', 'C. tie', 'D. diversity']
    }
  },
  {
    content: 'The correct noun form in “Youth ______ is essential” is:',
    options: ['A. participate', 'B. participation', 'C. participant people', 'D. participatingly'],
    answer: 'B',
    subTypeId: 'eng11-u4-vocab-meaning',
    translation: {
      content: 'Dạng danh từ đúng trong câu “Sự tham gia của thanh niên (Youth ______) là thiết yếu” là:',
      options: ['A. participate', 'B. participation (sự tham gia / youth participation)', 'C. participant people', 'D. participatingly']
    }
  },
  {
    content: 'Educational exchanges can ______ cooperation among ASEAN students.',
    options: ['A. promote', 'B. do', 'C. make up', 'D. catch'],
    answer: 'A',
    subTypeId: 'eng11-u4-vocab-collocation',
    translation: {
      content: 'Các đợt trao đổi giáo dục có thể ______ sự hợp tác giữa các sinh viên ASEAN.',
      options: ['A. promote (thúc đẩy / promote cooperation)', 'B. do', 'C. make up', 'D. catch']
    }
  },
  {
    content: 'Joint projects can help neighbouring countries ______ ties.',
    options: ['A. harden', 'B. strengthen', 'C. lift', 'D. widen up'],
    answer: 'B',
    subTypeId: 'eng11-u4-vocab-collocation',
    translation: {
      content: 'Các dự án chung có thể giúp các nước láng giềng ______ các mối quan hệ.',
      options: ['A. harden', 'B. strengthen (củng cố / strengthen ties)', 'C. lift', 'D. widen up']
    }
  },
  {
    content: 'Viet Nam will ______ a regional youth forum next month.',
    options: ['A. take', 'B. participate the', 'C. host', 'D. exchange'],
    answer: 'C',
    subTypeId: 'eng11-u4-vocab-collocation',
    translation: {
      content: 'Việt Nam sẽ ______ một diễn đàn thanh niên khu vực vào tháng tới.',
      options: ['A. take', 'B. participate the', 'C. host (đăng cai / làm chủ nhà: host)', 'D. exchange']
    }
  },
  {
    content: 'A: “Would you like to ______ in the ASEAN quiz?” B: “Yes, please.”',
    options: ['A. promote', 'B. host to', 'C. strengthen', 'D. participate'],
    answer: 'D',
    subTypeId: 'eng11-u4-vocab-collocation',
    representationType: 'dialogue',
    translation: {
      content: 'A: “Cậu có muốn ______ vào cuộc thi đố vui ASEAN không?” B: “Có, tớ rất muốn.”',
      options: ['A. promote', 'B. host to', 'C. strengthen', 'D. participate (participate in - tham gia vào)']
    }
  },
  {
    content: 'Delegates met to ______ ideas about sustainable tourism.',
    options: ['A. exchange', 'B. resolve in', 'C. identify as', 'D. preserve from'],
    answer: 'A',
    subTypeId: 'eng11-u4-vocab-collocation',
    translation: {
      content: 'Các đại biểu đã gặp nhau để ______ các ý tưởng về du lịch bền vững.',
      options: ['A. exchange (trao đổi / exchange ideas)', 'B. resolve in', 'C. identify as', 'D. preserve from']
    }
  },
  {
    content: 'Regional programmes can support economic ______ while protecting communities.',
    options: ['A. grow', 'B. growth', 'C. grown', 'D. growingly'],
    answer: 'B',
    subTypeId: 'eng11-u4-vocab-collocation',
    translation: {
      content: 'Các chương trình khu vực có thể hỗ trợ sự ______ kinh tế trong khi bảo vệ các cộng đồng.',
      options: ['A. grow', 'B. growth (sự tăng trưởng / economic growth)', 'C. grown', 'D. growingly']
    }
  }
];

const grammarRows: Row[] = [
  {
    content: '______ about neighbouring countries broadens students’ perspectives.',
    options: ['A. Learning', 'B. Learn', 'C. Learned', 'D. To learning'],
    answer: 'A',
    subTypeId: 'eng11-u4-grammar-subject',
    translation: {
      content: '______ về các nước láng giềng mở rộng góc nhìn của học sinh.',
      options: ['A. Learning (Danh động từ làm chủ ngữ: Learning)', 'B. Learn', 'C. Learned', 'D. To learning']
    }
  },
  {
    content: 'Joining regional projects ______ students practise teamwork.',
    options: ['A. help', 'B. helps', 'C. helping', 'D. have helped always'],
    answer: 'B',
    subTypeId: 'eng11-u4-grammar-subject',
    translation: {
      content: 'Tham gia vào các dự án khu vực ______ học sinh rèn luyện làm việc nhóm.',
      options: ['A. help', 'B. helps (Chủ ngữ danh động từ "Joining..." là số ít -> chia động từ số ít: helps)', 'C. helping', 'D. have helped always']
    }
  },
  {
    content: '______ cultural diversity requires listening to different communities.',
    options: ['A. Preserve', 'B. To preserving', 'C. Preserving', 'D. Preserved'],
    answer: 'C',
    subTypeId: 'eng11-u4-grammar-subject',
    translation: {
      content: '______ sự đa dạng văn hóa đòi hỏi phải lắng nghe các cộng đồng khác nhau.',
      options: ['A. Preserve', 'B. To preserving', 'C. Preserving (Danh động từ làm chủ ngữ: Preserving)', 'D. Preserved']
    }
  },
  {
    content: 'A: “What develops confidence?” B: “______ presentations in an international group does.”',
    options: ['A. Give', 'B. Gave', 'C. To giving', 'D. Giving'],
    answer: 'D',
    subTypeId: 'eng11-u4-grammar-subject',
    representationType: 'dialogue',
    translation: {
      content: 'A: “Điều gì phát triển sự tự tin?” B: “______ bài thuyết trình trong một nhóm quốc tế.”',
      options: ['A. Give', 'B. Gave', 'C. To giving', 'D. Giving (Danh động từ làm chủ ngữ: Giving presentations)']
    }
  },
  {
    content: 'Working with people from different backgrounds ______ patience.',
    options: ['A. develops', 'B. develop', 'C. developing', 'D. have developed'],
    answer: 'A',
    subTypeId: 'eng11-u4-grammar-subject',
    translation: {
      content: 'Làm việc với những người đến từ các nền tảng khác nhau ______ sự kiên nhẫn.',
      options: ['A. develops (Chủ ngữ V-ing "Working..." -> chia số ít: develops)', 'B. develop', 'C. developing', 'D. have developed']
    }
  },
  {
    content: 'Which sentence correctly uses a gerund as subject?',
    options: ['A. Exchange ideas is useful.', 'B. Exchanging ideas is useful.', 'C. Exchanged ideas are gerund.', 'D. To exchanging is useful.'],
    answer: 'B',
    subTypeId: 'eng11-u4-grammar-subject',
    translation: {
      content: 'Câu nào sử dụng đúng danh động từ làm chủ ngữ?',
      options: ['A. Exchange ideas is useful.', 'B. Exchanging ideas is useful. (Việc trao đổi ý kiến là hữu ích.)', 'C. Exchanged ideas are gerund.', 'D. To exchanging is useful.']
    }
  },
  {
    content: 'The students enjoy ______ with their partners online.',
    options: ['A. communicating', 'B. communicate', 'C. to communicating', 'D. communicated'],
    answer: 'A',
    subTypeId: 'eng11-u4-grammar-object',
    translation: {
      content: 'Các học sinh thích ______ với các đối tác của họ trực tuyến.',
      options: ['A. communicating (sau enjoy + V-ing: enjoy communicating)', 'B. communicate', 'C. to communicating', 'D. communicated']
    }
  },
  {
    content: 'A: “What did the committee suggest?” B: “They suggested ______ the event in Da Nang.”',
    options: ['A. host', 'B. hosting', 'C. to host after suggest', 'D. hosted'],
    answer: 'B',
    subTypeId: 'eng11-u4-grammar-object',
    representationType: 'dialogue',
    translation: {
      content: 'A: “Ủy ban đã đề xuất điều gì?” B: “Họ đã đề xuất ______ sự kiện tại Đà Nẵng.”',
      options: ['A. host', 'B. hosting (sau suggest + V-ing: suggest hosting)', 'C. to host after suggest', 'D. hosted']
    }
  },
  {
    content: 'We are interested in ______ more about ASEAN history.',
    options: ['A. learn', 'B. to learn after in', 'C. learning', 'D. learned'],
    answer: 'C',
    subTypeId: 'eng11-u4-grammar-object',
    translation: {
      content: 'Chúng tớ có hứng thú với việc ______ nhiều hơn về lịch sử ASEAN.',
      options: ['A. learn', 'B. to learn after in', 'C. learning (sau giới từ in + V-ing: in learning)', 'D. learned']
    }
  },
  {
    content: 'Please avoid ______ unsupported claims about an entire culture.',
    options: ['A. make', 'B. to making', 'C. made', 'D. making'],
    answer: 'D',
    subTypeId: 'eng11-u4-grammar-object',
    translation: {
      content: 'Xin vui lòng tránh ______ những khẳng định vô cớ về toàn bộ một nền văn hóa.',
      options: ['A. make', 'B. to making', 'C. made', 'D. making (sau avoid + V-ing: avoid making)']
    }
  },
  {
    content: 'Choose the correct sentence.',
    options: ['A. We look forward to meeting the delegates.', 'B. We look forward to meet the delegates.', 'C. We enjoy to exchange ideas.', 'D. We suggested to organising a forum.'],
    answer: 'A',
    subTypeId: 'eng11-u4-grammar-object',
    translation: {
      content: 'Chọn câu đúng:',
      options: ['A. We look forward to meeting the delegates. (look forward to + V-ing)', 'B. Sai (thiếu V-ing)', 'C. Sai (enjoy + to-V)', 'D. Sai (suggest + to-V)']
    }
  },
  {
    content: 'After ______ the application, candidates should check their email.',
    options: ['A. submit', 'B. submitting', 'C. submitted', 'D. to submitting'],
    answer: 'B',
    subTypeId: 'eng11-u4-grammar-object',
    translation: {
      content: 'Sau khi ______ đơn ứng tuyển, các ứng viên nên kiểm tra email của mình.',
      options: ['A. submit', 'B. submitting (sau giới từ After + V-ing: After submitting)', 'C. submitted', 'D. to submitting']
    }
  }
];

const passage1: QuestionStimulus = {
  id: 'eng11-stim-u4-reading-1',
  title: 'A regional student research network',
  content: `Four secondary schools in different ASEAN countries created a shared research network on urban water use. Each school selected a local question rather than following one identical experiment. Students in Viet Nam examined household water-saving habits, while other teams studied school leaks, rainwater collection, and public information campaigns.

The network provided a common method for recording observations so results could be compared. Teachers also organised monthly online meetings where students explained their choices and questioned one another’s conclusions. English was the working language, but participants could prepare key ideas in their first language before meetings. Short written summaries and captions helped students who needed more time to process spoken discussion.

At the end of the first term, teams exchanged data and identified patterns. They did not combine every number into a single regional average because the local conditions were too different. Instead, each team described which findings could transfer to another location and which depended on climate, infrastructure, or community behaviour.

The project’s value was not limited to producing a final report. Students learned that regional cooperation requires both shared standards and respect for local context. The organisers also reviewed participation data. They found that confident speakers dominated early meetings, so later sessions assigned rotating roles for presenting, questioning, and summarising. This adjustment gave more students a visible contribution and improved the quality of the comparison. In the next term, mixed-school teams will test one another's recommendations and document which adaptations are necessary before an idea can work elsewhere successfully.`
};
const passage2: QuestionStimulus = {
  id: 'eng11-stim-u4-reading-2',
  title: 'Cooperation on seasonal smoke',
  content: `Seasonal smoke can cross national borders, affecting air quality far from the fires that produced it. Because wind carries pollution across the region, action by a single city or country may be insufficient. Monitoring, prevention, emergency response, and public communication all require cooperation.

A group of neighbouring provinces began sharing satellite observations and ground-level sensor readings through a common platform. The system allowed local agencies to compare conditions and issue health advice using consistent categories. However, technical sharing was only one part of the programme. Fire risk was linked to land management, farming practices, weather, and economic pressure, so prevention teams worked with local communities rather than treating every fire as the same problem.

The partners also agreed to publish uncertainty ranges. Satellite images can identify likely fire locations, but clouds may block observations, and a sensor can fail or represent only one small area. Reporting uncertainty prevented officials from presenting estimates as exact facts. It also helped emergency teams decide when they needed additional checks.

Regional cooperation did not remove disagreements about responsibility or cost. It did create faster communication and a shared base of evidence. The programme shows that environmental problems crossing borders need institutions that can exchange data, compare methods, and learn from local knowledge. Trust grows not simply from collecting more information, but from explaining how the information was produced and how decisions will affect different communities. Future meetings will include farmers, health workers, scientists, and local officials so that technical evidence can inform practical, realistic action.`
};
const passage3: QuestionStimulus = {
  id: 'eng11-stim-u4-reading-3',
  title: 'Designing a cultural festival with communities',
  content: `A city planned an ASEAN cultural festival to introduce residents to music, food, crafts, and stories from across the region. The first proposal gave each participating country a small stage and asked organisers to produce short performances. Community associations welcomed the event but worried that reducing cultures to colourful shows could reinforce stereotypes.

The city changed the planning process. Instead of asking communities only to perform, it invited them to help select themes, explain context, and decide how activities would be presented. Some groups organised workshops where visitors learned a technique and discussed its history. Others created conversations about how traditions change when people migrate or when younger generations reinterpret them.

Payment and access also became part of the design. Performers and advisers received fees, translated materials were provided, and several events were scheduled outside working hours. The city reserved free spaces for school groups but avoided describing any participant as an official representative of an entire national culture.

After the festival, visitors completed surveys and community partners held a separate review. Attendance was high, yet organisers did not treat numbers alone as proof of meaningful exchange. They examined whether visitors stayed for discussion, whether partners felt accurately represented, and whether future cooperation had begun. The festival became less a display of fixed traditions and more a platform where residents could encounter cultural knowledge while recognising diversity within every country. Partners later proposed year-round school visits and community exchanges, allowing relationships formed during the event to continue through smaller joint projects.`
};

const readingRows: Row[] = [
  {
    content: 'What is the main idea of passage 1?',
    options: ['A. Regional research works best when shared methods are balanced with local context and inclusive participation.', 'B. Every school must conduct an identical experiment.', 'C. Only confident English speakers can do research.', 'D. Regional averages are always accurate.'],
    answer: 'A',
    subTypeId: 'eng11-u4-read-main-detail',
    stimulus: passage1,
    translation: {
      content: 'Ý chính của đoạn văn 1 là gì?',
      options: [
        'A. Regional research works best when shared methods are balanced with local context and inclusive participation. (Nghiên cứu khu vực đạt hiệu quả tốt nhất khi các phương pháp dùng chung được cân bằng với bối cảnh địa phương và sự tham gia bao trùm.)',
        'B. Mọi trường học phải tiến hành thử nghiệm giống hệt nhau.',
        'C. Chỉ những người nói tiếng Anh tự tin mới có thể làm nghiên cứu.',
        'D. Các mức trung bình khu vực luôn chính xác.'
      ]
    }
  },
  {
    content: 'Why did the network provide a common recording method?',
    options: ['A. To remove local questions', 'B. To make results comparable', 'C. To replace teachers', 'D. To create one compulsory average'],
    answer: 'B',
    subTypeId: 'eng11-u4-read-main-detail',
    stimulus: passage1,
    translation: {
      content: 'Tại sao mạng lưới lại cung cấp phương pháp ghi chép chung?',
      options: ['A. Để gỡ bỏ các câu hỏi địa phương', 'B. To make results comparable (Để làm cho các kết quả có thể so sánh được với nhau)', 'C. Để thay thế giáo viên', 'D. Để tạo ra một mức trung bình bắt buộc']
    }
  },
  {
    content: 'Why were results not combined into one regional average?',
    options: ['A. Students collected no data.', 'B. Meetings were cancelled.', 'C. Local conditions differed too much.', 'D. Every result was identical.'],
    answer: 'C',
    subTypeId: 'eng11-u4-read-main-detail',
    stimulus: passage1,
    translation: {
      content: 'Tại sao các kết quả không được gộp lại thành một mức trung bình khu vực?',
      options: ['A. Học sinh không thu thập dữ liệu.', 'B. Các cuộc họp bị hủy.', 'C. Local conditions differed too much. (Các điều kiện địa phương khác nhau quá nhiều.)', 'D. Mọi kết quả đều giống hệt nhau.']
    }
  },
  {
    content: 'What change improved participation in later meetings?',
    options: ['A. Removing questions', 'B. Ending summaries', 'C. Allowing only teachers to speak', 'D. Rotating presentation, questioning and summarising roles'],
    answer: 'D',
    subTypeId: 'eng11-u4-read-main-detail',
    stimulus: passage1,
    translation: {
      content: 'Thay đổi nào đã cải thiện sự tham gia trong các cuộc họp sau này?',
      options: ['A. Gỡ bỏ các câu hỏi', 'B. Kết thúc các bản tóm tắt', 'C. Chỉ cho phép giáo viên phát biểu', 'D. Rotating presentation, questioning and summarising roles (Luân phiên các vai trò thuyết trình, đặt câu hỏi và tóm tắt)']
    }
  },
  {
    content: 'What is the central purpose of passage 2?',
    options: ['A. To explain why cross-border smoke requires transparent regional cooperation and local knowledge', 'B. To prove sensors never fail', 'C. To blame one province for every fire', 'D. To argue uncertainty should be hidden'],
    answer: 'A',
    subTypeId: 'eng11-u4-read-main-detail',
    stimulus: passage2,
    translation: {
      content: 'Mục đích trung tâm của đoạn văn 2 là gì?',
      options: [
        'A. To explain why cross-border smoke requires transparent regional cooperation and local knowledge (Giải thích tại sao khói bụi xuyên biên giới đòi hỏi sự hợp tác khu vực minh bạch và kiến thức địa phương)',
        'B. Để chứng minh các cảm biến không bao giờ hỏng',
        'C. Đổ lỗi cho một tỉnh về mọi vụ cháy',
        'D. Tranh luận rằng sự không chắc chắn nên được giấu đi'
      ]
    }
  },
  {
    content: 'What did the common platform allow agencies to do?',
    options: ['A. Control the wind', 'B. Compare conditions and use consistent health categories', 'C. Eliminate all fires', 'D. Replace local communities'],
    answer: 'B',
    subTypeId: 'eng11-u4-read-main-detail',
    stimulus: passage2,
    translation: {
      content: 'Nền tảng chung cho phép các cơ quan làm gì?',
      options: ['A. Kiểm soát gió', 'B. Compare conditions and use consistent health categories (So sánh các điều kiện và sử dụng các danh mục sức khỏe nhất quán)', 'C. Loại bỏ tất cả các vụ cháy', 'D. Thay thế các cộng đồng địa phương']
    }
  },
  {
    content: 'Why did partners publish uncertainty ranges?',
    options: ['A. To make reports longer', 'B. To avoid collecting data', 'C. To show that observations and estimates had limits', 'D. To claim exact certainty'],
    answer: 'C',
    subTypeId: 'eng11-u4-read-infer-fairness',
    stimulus: passage2,
    translation: {
      content: 'Tại sao các đối tác lại công bố các khoảng không chắc chắn?',
      options: ['A. Để làm báo cáo dài hơn', 'B. Để tránh thu thập dữ liệu', 'C. To show that observations and estimates had limits (Để chỉ ra rằng các quan sát và ước tính có những giới hạn)', 'D. Để tuyên bố sự chắc chắn tuyệt đối']
    }
  },
  {
    content: 'What can be inferred about trust from passage 2?',
    options: ['A. It results automatically from more sensors.', 'B. It requires no explanation.', 'C. It grows only after disagreements disappear.', 'D. It is supported by transparency about evidence and impacts.'],
    answer: 'D',
    subTypeId: 'eng11-u4-read-infer-fairness',
    stimulus: passage2,
    translation: {
      content: 'Có thể suy ra điều gì về sự tin tưởng từ đoạn 2?',
      options: ['A. Nó tự động đến từ nhiều cảm biến hơn.', 'B. Nó không cần giải thích.', 'C. Nó chỉ phát triển sau khi bất đồng biến mất.', 'D. It is supported by transparency about evidence and impacts. (Nó được ủng hộ bởi sự minh bạch về bằng chứng và các tác động.)']
    }
  },
  {
    content: 'Why were community associations concerned about the first festival proposal?',
    options: ['A. Short colourful performances could reinforce stereotypes.', 'B. The city offered too many discussions.', 'C. Every event was free.', 'D. Communities controlled all themes.'],
    answer: 'A',
    subTypeId: 'eng11-u4-read-infer-fairness',
    stimulus: passage3,
    translation: {
      content: 'Tại sao các hiệp hội cộng đồng lại lo ngại về đề xuất lễ hội đầu tiên?',
      options: [
        'A. Short colourful performances could reinforce stereotypes. (Các màn trình diễn ngắn đầy màu sắc có thể củng cố các định kiến.)',
        'B. Thành phố đưa ra quá nhiều cuộc thảo luận.',
        'C. Mọi sự kiện đều miễn phí.',
        'D. Các cộng đồng kiểm soát tất cả các chủ đề.'
      ]
    }
  },
  {
    content: 'How did the revised process give communities more agency?',
    options: ['A. It asked them only to perform.', 'B. It involved them in selecting themes and explaining context.', 'C. It removed their advisers.', 'D. It cancelled workshops.'],
    answer: 'B',
    subTypeId: 'eng11-u4-read-infer-fairness',
    stimulus: passage3,
    translation: {
      content: 'Quy trình được sửa đổi đã trao cho các cộng đồng nhiều quyền chủ động hơn như thế nào?',
      options: ['A. Nó chỉ yêu cầu họ biểu diễn.', 'B. It involved them in selecting themes and explaining context. (Nó lôi cuốn họ vào việc chọn chủ đề và giải thích bối cảnh.)', 'C. Nó gỡ bỏ các cố vấn của họ.', 'D. Nó hủy bỏ các buổi hội thảo.']
    }
  },
  {
    content: 'Why did organisers avoid calling one participant an official representative of an entire culture?',
    options: ['A. No countries took part.', 'B. The event had no audience.', 'C. Cultures contain internal diversity and one person cannot represent everyone.', 'D. Only officials may cook food.'],
    answer: 'C',
    subTypeId: 'eng11-u4-read-infer-fairness',
    stimulus: passage3,
    translation: {
      content: 'Tại sao ban tổ chức lại tránh gọi một người tham gia là đại diện chính thức của toàn bộ một nền văn hóa?',
      options: ['A. Không quốc gia nào tham gia.', 'B. Sự kiện không có khán giả.', 'C. Cultures contain internal diversity and one person cannot represent everyone. (Các nền văn hóa chứa đựng sự đa dạng bên trong và một người không thể đại diện cho tất cả mọi người.)', 'D. Chỉ có quan chức mới được nấu ăn.']
    }
  },
  {
    content: 'Which evidence went beyond attendance numbers?',
    options: ['A. Stage colour', 'B. Ticket shape', 'C. Event length only', 'D. Whether partners felt accurately represented and new cooperation began'],
    answer: 'D',
    subTypeId: 'eng11-u4-read-infer-fairness',
    stimulus: passage3,
    translation: {
      content: 'Bằng chứng nào vượt ra ngoài số lượng người tham dự?',
      options: ['A. Màu sắc sân khấu', 'B. Hình dáng vé', 'C. Chỉ độ dài sự kiện', 'D. Whether partners felt accurately represented and new cooperation began (Liệu các đối tác có cảm thấy được đại diện một cách chính xác và sự hợp tác mới có bắt đầu không)']
    }
  }
];

const writingRows: Row[] = [
  {
    content: 'Choose the best order for a notice: (a) Register through the school portal by 12 September. (b) Our school will host an ASEAN youth discussion on 20 September. (c) Students in Grades 10–12 are invited to apply.',
    options: ['A. b-c-a', 'B. a-b-c', 'C. c-a-b', 'D. b-a-c'],
    answer: 'A',
    subTypeId: 'eng11-u4-write-order',
    translation: {
      content: 'Chọn thứ tự tốt nhất cho một thông báo: (a) Đăng ký qua cổng thông tin nhà trường trước 12/9. (b) Trường chúng ta sẽ đăng cai cuộc thảo luận thanh niên ASEAN vào 20/9. (c) Học sinh khối 10–12 được mời nộp đơn.',
      options: ['A. b-c-a', 'B. a-b-c', 'C. c-a-b', 'D. b-a-c']
    }
  },
  {
    content: 'Choose the best opening sentence for a formal programme announcement.',
    options: ['A. Hi guys, something cool!', 'B. Applications are now open for the 2026 ASEAN Student Research Exchange.', 'C. Anyway, you know.', 'D. This and that will happen.'],
    answer: 'B',
    subTypeId: 'eng11-u4-write-order',
    translation: {
      content: 'Chọn câu mở đầu tốt nhất cho một thông báo chương trình trang trọng.',
      options: [
        'A. Chào mọi người, điều gì đó thật ngầu!',
        'B. Applications are now open for the 2026 ASEAN Student Research Exchange. (Đơn ứng tuyển hiện đã mở cho Chương trình Trao đổi Nghiên cứu Sinh viên ASEAN 2026.)',
        'C. Dù sao thì bạn biết đấy.',
        'D. Điều này và điều kia sẽ xảy ra.'
      ]
    }
  },
  {
    content: 'Choose the connector: “The forum uses English as its working language. ______, translated summaries will be available.”',
    options: ['A. Therefore it excludes everyone', 'B. For example of contrast', 'C. However', 'D. Because no language exists'],
    answer: 'C',
    subTypeId: 'eng11-u4-write-order',
    translation: {
      content: 'Chọn từ nối: “Diễn đàn sử dụng tiếng Anh làm ngôn ngữ làm việc. ______, các bản tóm tắt dịch thuật sẽ sẵn có.”',
      options: ['A. Vì vậy nó loại trừ tất cả mọi người', 'B. Ví dụ về sự tương phản', 'C. However (Tuy nhiên)', 'D. Vì không có ngôn ngữ nào tồn tại']
    }
  },
  {
    content: 'A: Arrange an invitation: (a) Please let us know by Friday whether you can attend. (b) We are organising a cultural exchange on 8 October. (c) We would be delighted if your club could present a workshop.',
    options: ['A. a-c-b', 'B. c-a-b', 'C. b-a-c', 'D. b-c-a'],
    answer: 'D',
    subTypeId: 'eng11-u4-write-order',
    representationType: 'dialogue',
    translation: {
      content: 'A: Sắp xếp lời mời: (a) Vui lòng cho chúng tớ biết trước thứ Sáu liệu cậu có thể tham dự không. (b) Chúng tớ đang tổ chức một đợt trao đổi văn hóa vào 8/10. (c) Chúng tớ rất vui mừng nếu câu lạc bộ của cậu có thể trình bày một buổi hội thảo.',
      options: ['A. a-c-b', 'B. c-a-b', 'C. b-a-c', 'D. b-c-a']
    }
  },
  {
    content: 'Which detail is least relevant in a notice about joining a youth forum?',
    options: ['A. The organiser’s favourite colour', 'B. Eligibility', 'C. Application deadline', 'D. Contact information'],
    answer: 'A',
    subTypeId: 'eng11-u4-write-order',
    translation: {
      content: 'Chi tiết nào ít liên quan nhất trong thông báo về việc tham gia diễn đàn thanh niên?',
      options: ['A. The organiser’s favourite colour (Màu sắc yêu thích của ban tổ chức - Không liên quan)', 'B. Đủ điều kiện tham gia', 'C. Hạn chót nộp đơn', 'D. Thông tin liên hệ']
    }
  },
  {
    content: 'Choose the best closing line for an application invitation.',
    options: ['A. Programmes are things.', 'B. Submit your form by 5 p.m. on 30 August; selected applicants will be contacted by email.', 'C. Time exists.', 'D. Maybe do something.'],
    answer: 'B',
    subTypeId: 'eng11-u4-write-order',
    translation: {
      content: 'Chọn câu kết thúc tốt nhất cho một lời mời nộp đơn.',
      options: [
        'A. Các chương trình là mọi thứ.',
        'B. Submit your form by 5 p.m. on 30 August; selected applicants will be contacted by email. (Nộp đơn của bạn trước 5 giờ chiều ngày 30/8; các ứng viên được chọn sẽ được liên hệ qua email.)',
        'C. Thời gian tồn tại.',
        'D. Có thể làm điều gì đó.'
      ]
    }
  },
  {
    content: 'Choose the closest meaning: “Learning about regional cultures is valuable.”',
    options: ['A. Learn about cultures was value.', 'B. To learning is valuable.', 'C. It is valuable to learn about regional cultures.', 'D. Cultures avoid learning.'],
    answer: 'C',
    subTypeId: 'eng11-u4-write-transform',
    translation: {
      content: 'Chọn câu gần nghĩa nhất: “Học hỏi về các nền văn hóa khu vực là có giá trị.”',
      options: ['A. Sai ngữ pháp.', 'B. Sai ngữ pháp.', 'C. It is valuable to learn about regional cultures. (It is + adj + to-V = V-ing is + adj)', 'D. Sai ngữ nghĩa.']
    }
  },
  {
    content: 'A: “They are interested in joining the exchange.” Which sentence keeps the meaning?',
    options: ['A. They avoid the exchange.', 'B. Joining is forbidden.', 'C. They joined unwillingly.', 'D. They have an interest in taking part in the exchange.'],
    answer: 'D',
    subTypeId: 'eng11-u4-write-transform',
    representationType: 'dialogue',
    translation: {
      content: 'A: “Họ có hứng thú tham gia chương trình trao đổi.” Câu nào giữ nguyên nghĩa?',
      options: ['A. Họ tránh chương trình trao đổi.', 'B. Việc tham gia bị cấm.', 'C. Họ tham gia một cách miễn cưỡng.', 'D. They have an interest in taking part in the exchange. (Họ có mối quan tâm/hứng thú đối với việc tham gia vào đợt trao đổi.)']
    }
  },
  {
    content: 'Choose the best topic sentence for details about student exchanges, joint research and volunteer work.',
    options: ['A. Young people can contribute to regional cooperation in several practical ways.', 'B. Students carry bags.', 'C. Research has letters.', 'D. Volunteering is a long word.'],
    answer: 'A',
    subTypeId: 'eng11-u4-write-transform',
    translation: {
      content: 'Chọn câu chủ đề tốt nhất cho các chi tiết về trao đổi sinh viên, nghiên cứu chung và công việc tình nguyện.',
      options: [
        'A. Young people can contribute to regional cooperation in several practical ways. (Giới trẻ có thể đóng góp vào sự hợp tác khu vực theo một số cách thực tế.)',
        'B. Học sinh mang cặp sách.',
        'C. Nghiên cứu có các chữ cái.',
        'D. Tình nguyện là một từ dài.'
      ]
    }
  },
  {
    content: 'Which revision avoids overclaiming?',
    options: ['A. The programme has solved every regional problem.', 'B. The programme aims to strengthen communication among participating students.', 'C. One meeting guarantees permanent peace.', 'D. All participants always agree.'],
    answer: 'B',
    subTypeId: 'eng11-u4-write-transform',
    translation: {
      content: 'Bản sửa đổi nào tránh việc tuyên bố quá lời?',
      options: [
        'A. Chương trình đã giải quyết mọi vấn đề khu vực.',
        'B. The programme aims to strengthen communication among participating students. (Chương trình nhằm mục đích tăng cường sự giao tiếp giữa các học sinh tham gia.)',
        'C. Một cuộc họp đảm bảo hòa bình vĩnh viễn.',
        'D. Tất cả người tham gia luôn đồng ý.'
      ]
    }
  },
  {
    content: 'Choose the clearest combination: “Students exchange local data. They identify shared challenges.”',
    options: ['A. Students exchange because challenges data.', 'B. Shared challenges are exchange.', 'C. By exchanging local data, students can identify shared challenges.', 'D. Data identifies students always.'],
    answer: 'C',
    subTypeId: 'eng11-u4-write-transform',
    translation: {
      content: 'Chọn câu kết hợp rõ ràng nhất: “Học sinh trao đổi dữ liệu địa phương. Họ xác định các thách thức chung.”',
      options: ['A. Lỗi cấu trúc.', 'B. Lỗi cấu trúc.', 'C. By exchanging local data, students can identify shared challenges. (Bằng cách trao đổi dữ liệu địa phương, học sinh có thể xác định các thách thức chung.)', 'D. Lỗi cấu trúc.']
    }
  },
  {
    content: 'Choose the best final sentence for a report on an ASEAN school project.',
    options: ['A. ASEAN is an acronym.', 'B. The report has paragraphs.', 'C. Schools are buildings.', 'D. The project created a useful network that can support future student collaboration.'],
    answer: 'D',
    subTypeId: 'eng11-u4-write-transform',
    translation: {
      content: 'Chọn câu kết thúc tốt nhất cho một báo cáo về dự án trường học ASEAN.',
      options: [
        'A. ASEAN là một từ viết tắt.',
        'B. Báo cáo có các đoạn văn.',
        'C. Trường học là các tòa nhà.',
        'D. The project created a useful network that can support future student collaboration. (Dự án đã tạo ra một mạng lưới hữu ích có thể hỗ trợ sự hợp tác của học sinh trong tương lai.)'
      ]
    }
  }
];

const communicationRows: Row[] = [
  {
    content: 'A: “Would you like to join our ASEAN culture quiz?” B: “______”',
    options: ['A. I’d love to. When is it?', 'B. Culture is a noun.', 'C. You must not ask.', 'D. I joined tomorrow.'],
    answer: 'A',
    subTypeId: 'eng11-u4-comm-invite-info',
    representationType: 'dialogue',
    translation: {
      content: 'A: “Cậu có muốn tham gia cuộc thi đố vui văn hóa ASEAN của chúng tớ không?” B: “______”',
      options: ['A. I’d love to. When is it? (Tớ rất thích. Khi nào diễn ra vậy?)', 'B. Văn hóa là một danh từ.', 'C. Cậu không được hỏi.', 'D. Tớ đã tham gia vào ngày mai.']
    }
  },
  {
    content: 'A: “Could you tell me who is eligible for the exchange?” B: “______”',
    options: ['A. Eligibility is long.', 'B. It is open to students aged sixteen to eighteen.', 'C. I refuse all information.', 'D. The exchange is a verb.'],
    answer: 'B',
    subTypeId: 'eng11-u4-comm-invite-info',
    representationType: 'dialogue',
    translation: {
      content: 'A: “Cậu có thể cho tớ biết ai đủ điều kiện tham gia đợt trao đổi không?” B: “______”',
      options: ['A. Đủ điều kiện là một từ dài.', 'B. It is open to students aged sixteen to eighteen. (Chương trình mở rộng cho các học sinh từ 16 đến 18 tuổi.)', 'C. Tớ từ chối mọi thông tin.', 'D. Đổi là một động từ.']
    }
  },
  {
    content: 'Which is the most formal invitation?',
    options: ['A. Come if you want.', 'B. You must show up.', 'C. We would be delighted if your school could nominate two participants.', 'D. Get here now.'],
    answer: 'C',
    subTypeId: 'eng11-u4-comm-invite-info',
    representationType: 'text',
    translation: {
      content: 'Lời mời nào là trang trọng nhất?',
      options: [
        'A. Đến nếu cậu muốn.',
        'B. Cậu phải có mặt.',
        'C. We would be delighted if your school could nominate two participants. (Chúng tớ rất vui mừng nếu trường của bạn có thể đề cử 2 người tham gia.)',
        'D. Đến đây ngay.'
      ]
    }
  },
  {
    content: 'A: “I’m interested in the forum.” B: “______”',
    options: ['A. Interest is personal.', 'B. Forums have chairs.', 'C. Do not ask.', 'D. Shall I send you the programme and application link?'],
    answer: 'D',
    subTypeId: 'eng11-u4-comm-invite-info',
    representationType: 'dialogue',
    translation: {
      content: 'A: “Tớ quan tâm đến diễn đàn này.” B: “______”',
      options: ['A. Sự quan tâm là cá nhân.', 'B. Diễn đàn có ghế.', 'C. Đừng hỏi.', 'D. Shall I send you the programme and application link? (Tớ gửi cho cậu chương trình và đường link nộp đơn nhé?)']
    }
  },
  {
    content: 'Which question appropriately asks about accessibility?',
    options: ['A. Will interpretation or translated materials be available?', 'B. Why is every language difficult?', 'C. Must everyone speak perfectly?', 'D. Can we ignore participants’ needs?'],
    answer: 'A',
    subTypeId: 'eng11-u4-comm-invite-info',
    representationType: 'text',
    translation: {
      content: 'Câu hỏi nào hỏi về khả năng tiếp cận một cách phù hợp?',
      options: ['A. Will interpretation or translated materials be available? (Liệu dịch thuật trực tiếp hoặc tài liệu được dịch có sẵn có không?)', 'B. Tại sao ngôn ngữ nào cũng khó?', 'C. Có phải mọi người phải nói hoàn hảo không?', 'D. Chúng ta có thể lờ đi nhu cầu của người tham gia không?']
    }
  },
  {
    content: 'A: “Thank you for the invitation, but I have an exam that day.” B: “______”',
    options: ['A. Exams are always wrong.', 'B. I understand. We can share the recorded public session afterwards.', 'C. You have to attend anyway.', 'D. No response is possible.'],
    answer: 'B',
    subTypeId: 'eng11-u4-comm-invite-info',
    representationType: 'dialogue',
    translation: {
      content: 'A: “Cảm ơn vì lời mời, nhưng tớ có một kỳ thi vào ngày hôm đó.” B: “______”',
      options: ['A. Kỳ thi luôn luôn sai.', 'B. I understand. We can share the recorded public session afterwards. (Tớ hiểu mà. Chúng tớ có thể chia sẻ buổi ghi hình công khai sau đó.)', 'C. Cậu vẫn phải tham dự.', 'D. Không có phản hồi nào có thể.']
    }
  },
  {
    content: 'A: “Everyone from that country must follow the same tradition.” B: “______”',
    options: ['A. I’m not sure that is fair; practices can vary among communities and individuals.', 'B. Yes, stereotypes are always accurate.', 'C. No one needs context.', 'D. One person represents millions.'],
    answer: 'A',
    subTypeId: 'eng11-u4-comm-cultural',
    representationType: 'dialogue',
    translation: {
      content: 'A: “Mọi người đến từ quốc gia đó phải tuân theo cùng một truyền thống.” B: “______”',
      options: [
        'A. I’m not sure that is fair; practices can vary among communities and individuals. (Tớ không chắc điều đó là công bằng; các tập quán có thể khác nhau giữa các cộng đồng và cá nhân.)',
        'B. Có, các định kiến luôn chính xác.',
        'C. Không ai cần bối cảnh.',
        'D. Một người đại diện cho hàng triệu người.'
      ]
    }
  },
  {
    content: 'A: “I don’t understand this custom.” B: “______”',
    options: ['A. Guess its meaning.', 'B. Let’s ask the participants how they understand it in their community.', 'C. Call it strange.', 'D. Avoid listening.'],
    answer: 'B',
    subTypeId: 'eng11-u4-comm-cultural',
    representationType: 'dialogue',
    translation: {
      content: 'A: “Tớ không hiểu phong tục này.” B: “______”',
      options: ['A. Đoán ý nghĩa của nó đi.', 'B. Let’s ask the participants how they understand it in their community. (Hãy hỏi các người tham gia xem họ hiểu nó như thế nào trong cộng đồng của họ xem sao.)', 'C. Gọi nó là lạ kỳ đi.', 'D. Tránh lắng nghe.']
    }
  },
  {
    content: 'Which sentence uses appropriately cautious cultural language?',
    options: ['A. All families behave identically.', 'B. People there never change.', 'C. In some communities, this practice is associated with welcoming guests.', 'D. This custom has one meaning everywhere.'],
    answer: 'C',
    subTypeId: 'eng11-u4-comm-cultural',
    representationType: 'text',
    translation: {
      content: 'Câu nào sử dụng ngôn ngữ văn hóa thận trọng phù hợp?',
      options: ['A. Tất cả các gia đình đều cư xử giống hệt nhau.', 'B. Mọi người ở đó không bao giờ thay đổi.', 'C. In some communities, this practice is associated with welcoming guests. (Ở một số cộng đồng, tập quán này gắn liền với việc đón tiếp khách.)', 'D. Phong tục này có một nghĩa ở khắp mọi nơi.']
    }
  },
  {
    content: 'A: “Your presentation was different from what I expected.” B: “______”',
    options: ['A. Expectations are facts.', 'B. You should keep the stereotype.', 'C. Difference needs no explanation.', 'D. Which part surprised you? I’d be happy to discuss it.'],
    answer: 'D',
    subTypeId: 'eng11-u4-comm-cultural',
    representationType: 'dialogue',
    translation: {
      content: 'A: “Bài thuyết trình của cậu khác với những gì tớ kỳ vọng.” B: “______”',
      options: ['A. Kỳ vọng là sự thật.', 'B. Cậu nên giữ định kiến.', 'C. Khác biệt không cần giải thích.', 'D. Which part surprised you? I’d be happy to discuss it. (Phần nào làm cậu bất ngờ vậy? Tớ rất sẵn lòng thảo luận về nó.)']
    }
  },
  {
    content: 'Which response shows respect during a cultural workshop?',
    options: ['A. Could you explain the history of this technique before we try it?', 'B. This is obviously simple and unimportant.', 'C. I already know what everyone thinks.', 'D. Context is unnecessary.'],
    answer: 'A',
    subTypeId: 'eng11-u4-comm-cultural',
    representationType: 'text',
    translation: {
      content: 'Phản hồi nào thể hiện sự tôn trọng trong một buổi hội thảo văn hóa?',
      options: ['A. Could you explain the history of this technique before we try it? (Cậu có thể giải thích lịch sử của kỹ thuật này trước khi chúng tớ thử không?)', 'B. Điều này rõ ràng đơn giản và không quan trọng.', 'C. Tớ đã biết mọi người nghĩ gì.', 'D. Bối cảnh là không cần thiết.']
    }
  },
  {
    content: 'A: “How was your exchange experience?” B: “______”',
    options: ['A. Every exchange is exactly alike.', 'B. I learned a lot, especially from comparing our different school routines.', 'C. Countries have borders.', 'D. Experience is uncountable.'],
    answer: 'B',
    subTypeId: 'eng11-u4-comm-cultural',
    representationType: 'dialogue',
    translation: {
      content: 'A: “Trải nghiệm trao đổi của cậu như thế nào?” B: “______”',
      options: ['A. Mọi cuộc trao đổi đều giống hệt nhau.', 'B. I learned a lot, especially from comparing our different school routines. (Tớ đã học được rất nhiều, đặc biệt là từ việc so sánh các thời gian biểu ở trường khác nhau của chúng tớ.)', 'C. Các quốc gia có biên giới.', 'D. Trải nghiệm là không đếm được.']
    }
  }
];

export const g11EnglishModule4Questions: CourseQuestion[] = [
  ...build('pron', 'eng11-qt-u4-pronunciation', 'eng11-u4-language', 'eng11-out-u4-pronunciation', pronunciationRows),
  ...build('vocab', 'eng11-qt-u4-vocabulary', 'eng11-u4-language', 'eng11-out-u4-vocabulary', vocabularyRows),
  ...build('grammar', 'eng11-qt-u4-grammar', 'eng11-u4-language', 'eng11-out-u4-grammar', grammarRows),
  ...build('reading', 'eng11-qt-u4-reading', 'eng11-u4-reading', 'eng11-out-u4-reading', readingRows),
  ...build('writing', 'eng11-qt-u4-writing', 'eng11-u4-writing', 'eng11-out-u4-writing', writingRows),
  ...build('comm', 'eng11-qt-u4-communication', 'eng11-u4-communication-culture', 'eng11-out-u4-communication', communicationRows)
];
