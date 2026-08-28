import { IGrammarLesson } from './englishGrammarData';

export interface IGrammarSentence {
  id: string;
  lessonId: string;
  vietnameseMeaning: string;
  targetSentence: string;
  words: string[];
  scrambledWords: string[];
  grammarTip?: string;
  difficulty?: 'easy' | 'medium' | 'hard';
}

/**
 * Ngân hàng câu ghép câu theo từng bài học cụ thể (Chuẩn hóa đủ 10 câu/bài với đa dạng độ khó & độ dài)
 */
export const GRAMMAR_SENTENCE_DATABASE: Record<string, IGrammarSentence[]> = {
  // ==========================================
  // CHỦ ĐIỂM 01: DANH TỪ, MẠO TỪ & LƯỢNG TỪ
  // ==========================================
  'lesson-1-1': [
    {
      id: 's-1-1-1',
      lessonId: 'lesson-1-1',
      vietnameseMeaning: 'Những đứa trẻ đang chơi đá bóng trong sân trường.',
      targetSentence: 'The children are playing football in the playground.',
      words: ['The children', 'are playing', 'football', 'in the playground', '.'],
      scrambledWords: ['in the playground', 'are playing', 'The children', 'football', '.'],
      grammarTip: 'Số nhiều bất quy tắc: "child" ➔ "children" (không thêm -s).',
      difficulty: 'easy'
    },
    {
      id: 's-1-1-2',
      lessonId: 'lesson-1-1',
      vietnameseMeaning: 'Bạn nên đánh răng ít nhất hai lần mỗi ngày.',
      targetSentence: 'You should brush your teeth twice a day.',
      words: ['You should', 'brush your teeth', 'twice', 'a day', '.'],
      scrambledWords: ['twice', 'You should', 'a day', 'brush your teeth', '.'],
      grammarTip: 'Số nhiều của "tooth" là "teeth".',
      difficulty: 'easy'
    },
    {
      id: 's-1-1-3',
      lessonId: 'lesson-1-1',
      vietnameseMeaning: 'Con mèo đã đuổi theo ba con chuột trong nhà bếp.',
      targetSentence: 'The cat chased three mice in the kitchen.',
      words: ['The cat', 'chased', 'three mice', 'in the kitchen', '.'],
      scrambledWords: ['three mice', 'chased', 'in the kitchen', 'The cat', '.'],
      grammarTip: 'Số nhiều của "mouse" là "mice".',
      difficulty: 'medium'
    },
    {
      id: 's-1-1-4',
      lessonId: 'lesson-1-1',
      vietnameseMeaning: 'Người nông dân nuôi một đàn năm mươi con cừu trên sườn đồi.',
      targetSentence: 'The farmer raises a flock of fifty sheep on the hillside.',
      words: ['The farmer', 'raises', 'a flock of', 'fifty sheep', 'on the hillside', '.'],
      scrambledWords: ['fifty sheep', 'The farmer', 'on the hillside', 'a flock of', 'raises', '.'],
      grammarTip: '"Sheep" giữ nguyên hình thức ở số nhiều (không thêm -s).',
      difficulty: 'medium'
    },
    {
      id: 's-1-1-5',
      lessonId: 'lesson-1-1',
      vietnameseMeaning: 'Hai người cảnh sát đã đến hiện trường ngay lập tức.',
      targetSentence: 'Two policemen arrived at the scene immediately.',
      words: ['Two policemen', 'arrived at', 'the scene', 'immediately', '.'],
      scrambledWords: ['the scene', 'immediately', 'arrived at', 'Two policemen', '.'],
      grammarTip: 'Số nhiều của "policeman" là "policemen".',
      difficulty: 'easy'
    },
    {
      id: 's-1-1-6',
      lessonId: 'lesson-1-1',
      vietnameseMeaning: 'Đôi chân của cậu ấy bị đau sau khi đi bộ hơn mười cây số.',
      targetSentence: 'His feet were aching after walking ten kilometers.',
      words: ['His feet', 'were aching', 'after walking', 'ten kilometers', '.'],
      scrambledWords: ['ten kilometers', 'His feet', 'after walking', 'were aching', '.'],
      grammarTip: 'Số nhiều của "foot" biến đổi thành "feet".',
      difficulty: 'medium'
    },
    {
      id: 's-1-1-7',
      lessonId: 'lesson-1-1',
      vietnameseMeaning: 'Có rất nhiều nữ bác sĩ xuất sắc đang làm việc tại bệnh viện này.',
      targetSentence: 'There are many women doctors working in this hospital.',
      words: ['There are', 'many women doctors', 'working', 'in this hospital', '.'],
      scrambledWords: ['working', 'There are', 'in this hospital', 'many women doctors', '.'],
      grammarTip: 'Danh từ ghép "woman doctor" khi sang số nhiều đổi cả hai từ: "women doctors".',
      difficulty: 'hard'
    },
    {
      id: 's-1-1-8',
      lessonId: 'lesson-1-1',
      vietnameseMeaning: 'Mấy con hươu hoang dã đang uống nước cạnh con suối nhỏ.',
      targetSentence: 'Several wild deer were drinking water by the stream.',
      words: ['Several wild deer', 'were drinking', 'water', 'by the stream', '.'],
      scrambledWords: ['by the stream', 'Several wild deer', 'water', 'were drinking', '.'],
      grammarTip: '"Deer" là danh từ bất biến ở số nhiều (1 deer ➔ many deer).',
      difficulty: 'hard'
    },
    {
      id: 's-1-1-9',
      lessonId: 'lesson-1-1',
      vietnameseMeaning: 'Những chiếc lá vàng rơi đầy trên mặt đất khi mùa thu tới.',
      targetSentence: 'Yellow leaves fall on the ground when autumn arrives.',
      words: ['Yellow leaves', 'fall on the ground', 'when', 'autumn arrives', '.'],
      scrambledWords: ['when', 'autumn arrives', 'Yellow leaves', 'fall on the ground', '.'],
      grammarTip: 'Danh từ kết thúc bằng "f": "leaf" đổi thành "leaves".',
      difficulty: 'medium'
    },
    {
      id: 's-1-1-10',
      lessonId: 'lesson-1-1',
      vietnameseMeaning: 'Những người thợ đã sửa chữa tất cả mái nhà sau trận bão lớn.',
      targetSentence: 'Workers repaired all the roofs after the heavy storm.',
      words: ['Workers repaired', 'all the roofs', 'after', 'the heavy storm', '.'],
      scrambledWords: ['after', 'all the roofs', 'Workers repaired', 'the heavy storm', '.'],
      grammarTip: 'Ngoại lệ: "roof" sang số nhiều chỉ thêm -s thành "roofs" (không biến thành rooves).',
      difficulty: 'hard'
    }
  ],

  'lesson-1-2': [
    {
      id: 's-1-2-1',
      lessonId: 'lesson-1-2',
      vietnameseMeaning: 'Có quá nhiều xe cộ trên đường phố trong giờ cao điểm.',
      targetSentence: 'There is too much traffic on the street during rush hour.',
      words: ['There is', 'too much traffic', 'on the street', 'during rush hour', '.'],
      scrambledWords: ['during rush hour', 'on the street', 'There is', 'too much traffic', '.'],
      grammarTip: '"Traffic" là danh từ không đếm được ➔ dùng "There is" và lượng từ "too much".',
      difficulty: 'easy'
    },
    {
      id: 's-1-2-2',
      lessonId: 'lesson-1-2',
      vietnameseMeaning: 'Cô ấy đã cho tôi vài lời khuyên hữu ích về việc học tập.',
      targetSentence: 'She gave me some useful advice about my study.',
      words: ['She gave me', 'some useful advice', 'about', 'my study', '.'],
      scrambledWords: ['about', 'my study', 'She gave me', 'some useful advice', '.'],
      grammarTip: '"Advice" là danh từ không đếm được ➔ không thêm -s, dùng "some useful advice".',
      difficulty: 'easy'
    },
    {
      id: 's-1-2-3',
      lessonId: 'lesson-1-2',
      vietnameseMeaning: 'Chúng tôi cần thêm thông tin về lịch thi tuyển sinh.',
      targetSentence: 'We need more information about the entrance exam.',
      words: ['We need', 'more information', 'about', 'the entrance exam', '.'],
      scrambledWords: ['the entrance exam', 'We need', 'about', 'more information', '.'],
      grammarTip: '"Information" không đếm được, tuyệt đối không có dạng "informations".',
      difficulty: 'easy'
    },
    {
      id: 's-1-2-4',
      lessonId: 'lesson-1-2',
      vietnameseMeaning: 'Bố tôi đã mua đồ nội thất mới cho căn phòng khách.',
      targetSentence: 'My father bought new furniture for the living room.',
      words: ['My father', 'bought', 'new furniture', 'for the living room', '.'],
      scrambledWords: ['for the living room', 'bought', 'new furniture', 'My father', '.'],
      grammarTip: '"Furniture" luôn là danh từ số ít không đếm được.',
      difficulty: 'medium'
    },
    {
      id: 's-1-2-5',
      lessonId: 'lesson-1-2',
      vietnameseMeaning: 'Cô ấy uống một cốc nước ấm mỗi buổi sáng.',
      targetSentence: 'She drinks a glass of warm water every morning.',
      words: ['She drinks', 'a glass of', 'warm water', 'every morning', '.'],
      scrambledWords: ['every morning', 'a glass of', 'She drinks', 'warm water', '.'],
      grammarTip: 'Đo lường danh từ không đếm được "water": "a glass of water".',
      difficulty: 'easy'
    },
    {
      id: 's-1-2-6',
      lessonId: 'lesson-1-2',
      vietnameseMeaning: 'Thầy giáo đã giao cho chúng tôi rất nhiều bài tập về nhà tối qua.',
      targetSentence: 'The teacher gave us a lot of homework last night.',
      words: ['The teacher', 'gave us', 'a lot of homework', 'last night', '.'],
      scrambledWords: ['last night', 'The teacher', 'a lot of homework', 'gave us', '.'],
      grammarTip: '"Homework" là danh từ không đếm được, không dùng "homeworks".',
      difficulty: 'medium'
    },
    {
      id: 's-1-2-7',
      lessonId: 'lesson-1-2',
      vietnameseMeaning: 'Không khí trong lành ở vùng quê rất tốt cho sức khỏe con người.',
      targetSentence: 'Fresh air in the countryside is very good for health.',
      words: ['Fresh air', 'in the countryside', 'is', 'very good for health', '.'],
      scrambledWords: ['very good for health', 'is', 'in the countryside', 'Fresh air', '.'],
      grammarTip: '"Air" (không khí) là danh từ không đếm được, động từ chia số ít "is".',
      difficulty: 'medium'
    },
    {
      id: 's-1-2-8',
      lessonId: 'lesson-1-2',
      vietnameseMeaning: 'Bà tôi thường cho thêm một ít đường vào tách trà hoa cúc.',
      targetSentence: 'My grandmother adds a little sugar to her herbal tea.',
      words: ['My grandmother', 'adds', 'a little sugar', 'to her herbal tea', '.'],
      scrambledWords: ['to her herbal tea', 'adds', 'My grandmother', 'a little sugar', '.'],
      grammarTip: '"Sugar" không đếm được đi với lượng từ "a little sugar".',
      difficulty: 'hard'
    },
    {
      id: 's-1-2-9',
      lessonId: 'lesson-1-2',
      vietnameseMeaning: 'Bạn có cần thêm thời gian để hoàn thành bài luận tiếng Anh không?',
      targetSentence: 'Do you need more time to complete your English essay?',
      words: ['Do you need', 'more time', 'to complete', 'your English essay', '?'],
      scrambledWords: ['your English essay', 'more time', 'Do you need', 'to complete', '?'],
      grammarTip: '"Time" mang nghĩa thời gian là danh từ không đếm được.',
      difficulty: 'medium'
    },
    {
      id: 's-1-2-10',
      lessonId: 'lesson-1-2',
      vietnameseMeaning: 'Kiến thức và sự kiên trì là hai yếu tố quyết định thành công.',
      targetSentence: 'Knowledge and patience are key factors leading to success.',
      words: ['Knowledge and patience', 'are key factors', 'leading to', 'success', '.'],
      scrambledWords: ['success', 'are key factors', 'Knowledge and patience', 'leading to', '.'],
      grammarTip: 'Hai danh từ trừu tượng không đếm được kết hợp làm chủ ngữ chia "are".',
      difficulty: 'hard'
    }
  ],

  'lesson-1-3': [
    {
      id: 's-1-3-1',
      lessonId: 'lesson-1-3',
      vietnameseMeaning: 'Mẹ tôi đã mua hai ổ bánh mì tại tiệm bánh sáng nay.',
      targetSentence: 'My mother bought two loaves of bread at the bakery.',
      words: ['My mother', 'bought', 'two loaves of bread', 'at the bakery', '.'],
      scrambledWords: ['at the bakery', 'two loaves of bread', 'My mother', 'bought', '.'],
      grammarTip: 'Đơn vị đếm bánh mì: "two loaves of bread" (loaf ➔ loaves).',
      difficulty: 'easy'
    },
    {
      id: 's-1-3-2',
      lessonId: 'lesson-1-3',
      vietnameseMeaning: 'Bạn có thể cho tôi xin một tờ giấy để ghi chú không?',
      targetSentence: 'Can you give me a piece of paper for taking notes?',
      words: ['Can you give me', 'a piece of paper', 'for taking notes', '?'],
      scrambledWords: ['for taking notes', 'a piece of paper', 'Can you give me', '?'],
      grammarTip: '"Paper" là danh từ không đếm được ➔ dùng "a piece of paper".',
      difficulty: 'easy'
    },
    {
      id: 's-1-3-3',
      lessonId: 'lesson-1-3',
      vietnameseMeaning: 'Tin tức xấu đã được phát sóng trên truyền hình tối qua.',
      targetSentence: 'The bad news was broadcast on television last night.',
      words: ['The bad news', 'was broadcast', 'on television', 'last night', '.'],
      scrambledWords: ['last night', 'on television', 'The bad news', 'was broadcast', '.'],
      grammarTip: '"News" có đuôi -s nhưng là danh từ không đếm được ➔ động từ chia số ít "was".',
      difficulty: 'medium'
    },
    {
      id: 's-1-3-4',
      lessonId: 'lesson-1-3',
      vietnameseMeaning: 'Anh ấy đã xếp tất cả hành lý của mình vào cốp xe.',
      targetSentence: 'He put all his luggage into the car trunk.',
      words: ['He put', 'all his luggage', 'into', 'the car trunk', '.'],
      scrambledWords: ['the car trunk', 'all his luggage', 'into', 'He put', '.'],
      grammarTip: '"Luggage" là danh từ tập hợp không đếm được.',
      difficulty: 'medium'
    },
    {
      id: 's-1-3-5',
      lessonId: 'lesson-1-3',
      vietnameseMeaning: 'Chúng tôi gọi ba tách cà phê nóng tại quán cà phê quen thuộc.',
      targetSentence: 'We ordered three cups of hot coffee at the cafe.',
      words: ['We ordered', 'three cups of', 'hot coffee', 'at the cafe', '.'],
      scrambledWords: ['at the cafe', 'hot coffee', 'We ordered', 'three cups of', '.'],
      grammarTip: 'Đơn vị đo lường đồ uống: "three cups of coffee".',
      difficulty: 'easy'
    },
    {
      id: 's-1-3-6',
      lessonId: 'lesson-1-3',
      vietnameseMeaning: 'Người đàn ông mang theo hai chiếc va ly lớn lên máy bay.',
      targetSentence: 'The man carried two large suitcases onto the airplane.',
      words: ['The man', 'carried', 'two large suitcases', 'onto the airplane', '.'],
      scrambledWords: ['onto the airplane', 'The man', 'two large suitcases', 'carried', '.'],
      grammarTip: 'Phân biệt: "Luggage" không đếm được nhưng "suitcase" là danh từ đếm được.',
      difficulty: 'medium'
    },
    {
      id: 's-1-3-7',
      lessonId: 'lesson-1-3',
      vietnameseMeaning: 'Cô ấy cho hai thìa cà phê đường vào ly nước chanh.',
      targetSentence: 'She added two teaspoons of sugar to the lemonade.',
      words: ['She added', 'two teaspoons of', 'sugar', 'to the lemonade', '.'],
      scrambledWords: ['to the lemonade', 'sugar', 'She added', 'two teaspoons of', '.'],
      grammarTip: 'Đơn vị đo lường: "two teaspoons of sugar".',
      difficulty: 'medium'
    },
    {
      id: 's-1-3-8',
      lessonId: 'lesson-1-3',
      vietnameseMeaning: 'Họ đã mua bốn thanh sô cô la ngọt ngào cho bọn trẻ.',
      targetSentence: 'They bought four bars of sweet chocolate for the kids.',
      words: ['They bought', 'four bars of', 'sweet chocolate', 'for the kids', '.'],
      scrambledWords: ['for the kids', 'sweet chocolate', 'four bars of', 'They bought', '.'],
      grammarTip: 'Đơn vị đếm sô cô la: "four bars of chocolate".',
      difficulty: 'hard'
    },
    {
      id: 's-1-3-9',
      lessonId: 'lesson-1-3',
      vietnameseMeaning: 'Vật lý là môn học yêu thích nhất của tôi ở trường cấp hai.',
      targetSentence: 'Physics is my most favorite subject at secondary school.',
      words: ['Physics', 'is', 'my most favorite subject', 'at secondary school', '.'],
      scrambledWords: ['at secondary school', 'is', 'Physics', 'my most favorite subject', '.'],
      grammarTip: 'Tên môn học tận cùng đuôi -ics (Physics, Mathematics) chia động từ số ít "is".',
      difficulty: 'hard'
    },
    {
      id: 's-1-3-10',
      lessonId: 'lesson-1-3',
      vietnameseMeaning: 'Chiếc kéo này quá cùn để cắt mảnh vải dày đó.',
      targetSentence: 'These scissors are too blunt to cut that thick cloth.',
      words: ['These scissors', 'are too blunt', 'to cut', 'that thick cloth', '.'],
      scrambledWords: ['that thick cloth', 'to cut', 'These scissors', 'are too blunt', '.'],
      grammarTip: 'Danh từ gồm 2 bộ phận đối xứng (scissors, trousers, glasses) chia số nhiều "are".',
      difficulty: 'hard'
    }
  ],

  'lesson-1-4': [
    {
      id: 's-1-4-1',
      lessonId: 'lesson-1-4',
      vietnameseMeaning: 'Bố tôi là một người đàn ông trung thực và tốt bụng.',
      targetSentence: 'My father is an honest and kind man.',
      words: ['My father is', 'an honest', 'and', 'kind man', '.'],
      scrambledWords: ['kind man', 'My father is', 'and', 'an honest', '.'],
      grammarTip: '"Honest" bắt đầu bằng âm câm /ɒ/ ➔ Dùng mạo từ "AN": an honest man.',
      difficulty: 'medium'
    },
    {
      id: 's-1-4-2',
      lessonId: 'lesson-1-4',
      vietnameseMeaning: 'Chúng tôi mất một giờ đồng hồ để hoàn thành bài thi.',
      targetSentence: 'It took us an hour to finish the test.',
      words: ['It took us', 'an hour', 'to finish', 'the test', '.'],
      scrambledWords: ['the test', 'to finish', 'It took us', 'an hour', '.'],
      grammarTip: '"Hour" có âm "h" câm ➔ dùng "an hour".',
      difficulty: 'easy'
    },
    {
      id: 's-1-4-3',
      lessonId: 'lesson-1-4',
      vietnameseMeaning: 'Anh ấy đang học tại một trường đại học danh tiếng ở Hà Nội.',
      targetSentence: 'He is studying at a university in Hanoi.',
      words: ['He is studying', 'at a university', 'in Hanoi', '.'],
      scrambledWords: ['in Hanoi', 'He is studying', 'at a university', '.'],
      grammarTip: '"University" bắt đầu bằng phụ âm /j/ ➔ Dùng mạo từ "A": a university.',
      difficulty: 'hard'
    },
    {
      id: 's-1-4-4',
      lessonId: 'lesson-1-4',
      vietnameseMeaning: 'Đây là một cơ hội có một không hai cho tất cả chúng ta.',
      targetSentence: 'This is a unique opportunity for all of us.',
      words: ['This is', 'a unique opportunity', 'for all of us', '.'],
      scrambledWords: ['for all of us', 'a unique opportunity', 'This is', '.'],
      grammarTip: '"Unique" bắt đầu bằng âm bán nguyên âm /j/ ➔ dùng "a unique opportunity".',
      difficulty: 'hard'
    },
    {
      id: 's-1-4-5',
      lessonId: 'lesson-1-4',
      vietnameseMeaning: 'Cô ấy muốn trở thành một bác sĩ giỏi trong tương lai.',
      targetSentence: 'She wants to become a good doctor in the future.',
      words: ['She wants to', 'become a good doctor', 'in the future', '.'],
      scrambledWords: ['become a good doctor', 'in the future', 'She wants to', '.'],
      grammarTip: 'Trước danh từ chỉ nghề nghiệp số ít bắt buộc dùng "a/an": a doctor.',
      difficulty: 'easy'
    },
    {
      id: 's-1-4-6',
      lessonId: 'lesson-1-4',
      vietnameseMeaning: 'Hôm qua tôi đã nhìn thấy một con đại bàng bay trên bầu trời.',
      targetSentence: 'I saw an eagle flying high in the sky yesterday.',
      words: ['I saw', 'an eagle', 'flying high', 'in the sky yesterday', '.'],
      scrambledWords: ['in the sky yesterday', 'flying high', 'I saw', 'an eagle', '.'],
      grammarTip: '"Eagle" bắt đầu bằng nguyên âm /iː/ ➔ dùng "an eagle".',
      difficulty: 'easy'
    },
    {
      id: 's-1-4-7',
      lessonId: 'lesson-1-4',
      vietnameseMeaning: 'Học sinh ở trường chúng tôi phải mặc đồng phục vào các ngày thứ Hai.',
      targetSentence: 'Students wear a uniform on Mondays at our school.',
      words: ['Students wear', 'a uniform', 'on Mondays', 'at our school', '.'],
      scrambledWords: ['at our school', 'on Mondays', 'Students wear', 'a uniform', '.'],
      grammarTip: '"Uniform" bắt đầu bằng âm /j/ ➔ dùng "a uniform" (không dùng an).',
      difficulty: 'medium'
    },
    {
      id: 's-1-4-8',
      lessonId: 'lesson-1-4',
      vietnameseMeaning: 'Cô ấy mua một chiếc ô màu vàng vì trời bắt đầu mưa.',
      targetSentence: 'She bought an umbrella because it started to rain heavily.',
      words: ['She bought', 'an umbrella', 'because', 'it started to rain heavily', '.'],
      scrambledWords: ['because', 'it started to rain heavily', 'She bought', 'an umbrella', '.'],
      grammarTip: '"Umbrella" phát âm bắt đầu bằng nguyên âm /ʌ/ ➔ dùng "an umbrella".',
      difficulty: 'medium'
    },
    {
      id: 's-1-4-9',
      lessonId: 'lesson-1-4',
      vietnameseMeaning: 'Ông Jones là một thành viên danh dự của hội từ thiện này.',
      targetSentence: 'Mr. Jones is an honorary member of this charity organization.',
      words: ['Mr. Jones is', 'an honorary member', 'of this', 'charity organization', '.'],
      scrambledWords: ['charity organization', 'of this', 'Mr. Jones is', 'an honorary member', '.'],
      grammarTip: '"Honorary" có âm "h" câm ➔ dùng "an honorary member".',
      difficulty: 'hard'
    },
    {
      id: 's-1-4-10',
      lessonId: 'lesson-1-4',
      vietnameseMeaning: 'Anh trai tôi vừa gửi một bản CV xin việc đến công ty.',
      targetSentence: 'My brother submitted a CV to that international company.',
      words: ['My brother submitted', 'a CV', 'to that', 'international company', '.'],
      scrambledWords: ['international company', 'to that', 'My brother submitted', 'a CV', '.'],
      grammarTip: '"CV" bắt đầu bằng phụ âm /siː/ ➔ dùng "a CV".',
      difficulty: 'medium'
    }
  ],

  'lesson-1-5': [
    {
      id: 's-1-5-1',
      lessonId: 'lesson-1-5',
      vietnameseMeaning: 'Mặt trời mọc ở hướng đông vào mỗi buổi sáng.',
      targetSentence: 'The sun rises in the east every morning.',
      words: ['The sun', 'rises', 'in the east', 'every morning', '.'],
      scrambledWords: ['every morning', 'in the east', 'The sun', 'rises', '.'],
      grammarTip: 'Vật thể duy nhất trong vũ trụ bắt buộc dùng "THE": the sun, the moon, the earth.',
      difficulty: 'easy'
    },
    {
      id: 's-1-5-2',
      lessonId: 'lesson-1-5',
      vietnameseMeaning: 'Tôi nhìn thấy một con mèo và con mèo đó màu đen.',
      targetSentence: 'I saw a cat and the cat was completely black.',
      words: ['I saw a cat', 'and the cat', 'was completely black', '.'],
      scrambledWords: ['was completely black', 'and the cat', 'I saw a cat', '.'],
      grammarTip: 'Nhắc đến lần đầu dùng "a cat", nhắc lại lần 2 đã xác định dùng "the cat".',
      difficulty: 'medium'
    },
    {
      id: 's-1-5-3',
      lessonId: 'lesson-1-5',
      vietnameseMeaning: 'Cô ấy là học sinh thông minh nhất trong lớp học của chúng tôi.',
      targetSentence: 'She is the most intelligent student in our class.',
      words: ['She is', 'the most intelligent student', 'in our class', '.'],
      scrambledWords: ['in our class', 'the most intelligent student', 'She is', '.'],
      grammarTip: 'Trước tính từ so sánh nhất bắt buộc phải có "THE": the most intelligent.',
      difficulty: 'easy'
    },
    {
      id: 's-1-5-4',
      lessonId: 'lesson-1-5',
      vietnameseMeaning: 'Anh ấy có thể chơi đàn piano rất điêu luyện.',
      targetSentence: 'He can play the piano very skillfully.',
      words: ['He can play', 'the piano', 'very skillfully', '.'],
      scrambledWords: ['very skillfully', 'He can play', 'the piano', '.'],
      grammarTip: 'Trước nhạc cụ bắt buộc dùng "THE": play the piano, play the guitar.',
      difficulty: 'hard'
    },
    {
      id: 's-1-5-5',
      lessonId: 'lesson-1-5',
      vietnameseMeaning: 'Bạn có thể vui lòng đóng giúp tôi chiếc cửa sổ kia không?',
      targetSentence: 'Could you please close the window near the door?',
      words: ['Could you please', 'close the window', 'near the door', '?'],
      scrambledWords: ['near the door', 'Could you please', 'close the window', '?'],
      grammarTip: 'Người nói và người nghe đều biết rõ cửa sổ nào ➔ dùng mạo từ xác định "the window".',
      difficulty: 'medium'
    },
    {
      id: 's-1-5-6',
      lessonId: 'lesson-1-5',
      vietnameseMeaning: 'Trái Đất quay xung quanh Mặt Trời mất khoảng 365 ngày.',
      targetSentence: 'The Earth goes around the Sun in one year.',
      words: ['The Earth', 'goes around', 'the Sun', 'in one year', '.'],
      scrambledWords: ['in one year', 'The Earth', 'the Sun', 'goes around', '.'],
      grammarTip: 'Vật thể độc nhất: "The Earth" và "the Sun".',
      difficulty: 'easy'
    },
    {
      id: 's-1-5-7',
      lessonId: 'lesson-1-5',
      vietnameseMeaning: 'Người nghèo trong thành phố cần nhận được sự giúp đỡ kịp thời.',
      targetSentence: 'The poor in this city need more practical support.',
      words: ['The poor', 'in this city', 'need', 'more practical support', '.'],
      scrambledWords: ['more practical support', 'need', 'in this city', 'The poor', '.'],
      grammarTip: '"The + Tính từ" (The poor) đại diện cho tập hợp nhóm người số nhiều, động từ chia "need".',
      difficulty: 'hard'
    },
    {
      id: 's-1-5-8',
      lessonId: 'lesson-1-5',
      vietnameseMeaning: 'Đó là người đầu tiên đặt chân lên mặt trăng năm 1969.',
      targetSentence: 'He was the first man to walk on the moon in 1969.',
      words: ['He was', 'the first man', 'to walk on the moon', 'in 1969', '.'],
      scrambledWords: ['in 1969', 'to walk on the moon', 'the first man', 'He was', '.'],
      grammarTip: 'Trước số thứ tự bắt buộc dùng "THE": the first man.',
      difficulty: 'medium'
    },
    {
      id: 's-1-5-9',
      lessonId: 'lesson-1-5',
      vietnameseMeaning: 'Tôi đã ăn một chiếc bánh táo và chiếc bánh táo đó rất ngon.',
      targetSentence: 'I ate an apple pie and the pie was delicious.',
      words: ['I ate an apple pie', 'and the pie', 'was delicious', '.'],
      scrambledWords: ['was delicious', 'I ate an apple pie', 'and the pie', '.'],
      grammarTip: 'Lần đầu: an apple pie ➔ Lần hai: the pie.',
      difficulty: 'medium'
    },
    {
      id: 's-1-5-10',
      lessonId: 'lesson-1-5',
      vietnameseMeaning: 'Bạn có thích nghe nhạc phát ra từ chiếc radio cũ này không?',
      targetSentence: 'Do you like listening to the radio in the evening?',
      words: ['Do you like', 'listening to the radio', 'in the evening', '?'],
      scrambledWords: ['in the evening', 'listening to the radio', 'Do you like', '?'],
      grammarTip: 'Cụm cố định: "listen to the radio" và "in the evening".',
      difficulty: 'hard'
    }
  ],

  // ==========================================
  // CHỦ ĐIỂM 02: ĐẠI TỪ & SỞ HỮU
  // ==========================================
  'lesson-2-1': [
    {
      id: 's-2-1-1',
      lessonId: 'lesson-2-1',
      vietnameseMeaning: 'Lan và tôi đã cùng nhau đi đến hiệu sách sau giờ học.',
      targetSentence: 'Lan and I went to the bookstore after school.',
      words: ['Lan and I', 'went to', 'the bookstore', 'after school', '.'],
      scrambledWords: ['after school', 'went to', 'Lan and I', 'the bookstore', '.'],
      grammarTip: 'Vị trí chủ ngữ kết hợp: dùng đại từ chủ ngữ "I" (Lan and I), không dùng "Lan and me".',
      difficulty: 'easy'
    },
    {
      id: 's-2-1-2',
      lessonId: 'lesson-2-1',
      vietnameseMeaning: 'Thầy giáo đã khen ngợi cậu ấy vì sự chăm chỉ trong học tập.',
      targetSentence: 'The teacher praised him for his hard work.',
      words: ['The teacher', 'praised him', 'for his hard work', '.'],
      scrambledWords: ['for his hard work', 'The teacher', 'praised him', '.'],
      grammarTip: 'Đứng sau động từ làm tân ngữ: dùng đại từ tân ngữ "him", không dùng "he".',
      difficulty: 'easy'
    },
    {
      id: 's-2-1-3',
      lessonId: 'lesson-2-1',
      vietnameseMeaning: 'Cô ấy đã mời chúng tôi đến tham dự bữa tiệc sinh nhật.',
      targetSentence: 'She invited us to her birthday party.',
      words: ['She invited us', 'to', 'her birthday party', '.'],
      scrambledWords: ['her birthday party', 'to', 'She invited us', '.'],
      grammarTip: 'Đại từ tân ngữ của "we" là "us".',
      difficulty: 'easy'
    },
    {
      id: 's-2-1-4',
      lessonId: 'lesson-2-1',
      vietnameseMeaning: 'Hãy gửi cho họ những tài liệu quan trọng này trước năm giờ chiều.',
      targetSentence: 'Please send them these important documents before five.',
      words: ['Please send them', 'these important documents', 'before five', '.'],
      scrambledWords: ['before five', 'Please send them', 'these important documents', '.'],
      grammarTip: 'Đại từ tân ngữ của "they" là "them".',
      difficulty: 'medium'
    },
    {
      id: 's-2-1-5',
      lessonId: 'lesson-2-1',
      vietnameseMeaning: 'Bố tôi đã mua cho tôi một chiếc cặp sách mới.',
      targetSentence: 'My father bought me a brand new schoolbag.',
      words: ['My father', 'bought me', 'a brand new schoolbag', '.'],
      scrambledWords: ['a brand new schoolbag', 'My father', 'bought me', '.'],
      grammarTip: 'Cấu trúc tân ngữ gián tiếp: buy + someone + something ➔ "bought me".',
      difficulty: 'medium'
    },
    {
      id: 's-2-1-6',
      lessonId: 'lesson-2-1',
      vietnameseMeaning: 'Họ đã gặp chúng tôi tại rạp chiếu phim vào tối thứ Bảy.',
      targetSentence: 'They met us at the cinema on Saturday evening.',
      words: ['They met us', 'at the cinema', 'on Saturday evening', '.'],
      scrambledWords: ['on Saturday evening', 'They met us', 'at the cinema', '.'],
      grammarTip: 'Chủ ngữ "They" và tân ngữ "us".',
      difficulty: 'medium'
    },
    {
      id: 's-2-1-7',
      lessonId: 'lesson-2-1',
      vietnameseMeaning: 'Cô giáo đã yêu cầu cậu ấy đọc to đoạn văn trước lớp.',
      targetSentence: 'The teacher asked him to read the paragraph aloud.',
      words: ['The teacher asked him', 'to read', 'the paragraph aloud', '.'],
      scrambledWords: ['the paragraph aloud', 'The teacher asked him', 'to read', '.'],
      grammarTip: 'Ask + tân ngữ ("him") + to-V.',
      difficulty: 'medium'
    },
    {
      id: 's-2-1-8',
      lessonId: 'lesson-2-1',
      vietnameseMeaning: 'Bạn có thể giúp tôi giải bài toán khó này không?',
      targetSentence: 'Can you help me solve this difficult math problem?',
      words: ['Can you help me', 'solve', 'this difficult math problem', '?'],
      scrambledWords: ['this difficult math problem', 'Can you help me', 'solve', '?'],
      grammarTip: 'Help + tân ngữ ("me") + V-bare.',
      difficulty: 'hard'
    },
    {
      id: 's-2-1-9',
      lessonId: 'lesson-2-1',
      vietnameseMeaning: 'Tôi nhìn thấy cô ấy đang đợi chuyến xe buýt ở bên kia đường.',
      targetSentence: 'I saw her waiting for the bus across the street.',
      words: ['I saw her', 'waiting for the bus', 'across the street', '.'],
      scrambledWords: ['across the street', 'waiting for the bus', 'I saw her', '.'],
      grammarTip: 'See + tân ngữ ("her") + V-ing.',
      difficulty: 'hard'
    },
    {
      id: 's-2-1-10',
      lessonId: 'lesson-2-1',
      vietnameseMeaning: 'Nam và cậu ấy là đôi bạn thân thiết từ thời thơ ấu.',
      targetSentence: 'Nam and he have been close friends since childhood.',
      words: ['Nam and he', 'have been close friends', 'since childhood', '.'],
      scrambledWords: ['since childhood', 'have been close friends', 'Nam and he', '.'],
      grammarTip: 'Chủ ngữ kép dùng đại từ nhân xưng chủ ngữ: "Nam and he" (không dùng Nam and him).',
      difficulty: 'hard'
    }
  ],

  // ==========================================
  // CHỦ ĐIỂM 03: GIỚI TỪ (IN / ON / AT)
  // ==========================================
  'lesson-3-1': [
    {
      id: 's-3-1-1',
      lessonId: 'lesson-3-1',
      vietnameseMeaning: 'Kỳ thi tuyển sinh sẽ diễn ra vào ngày mười lăm tháng Sáu.',
      targetSentence: 'The entrance exam will take place on June 15th.',
      words: ['The entrance exam', 'will take place', 'on June 15th', '.'],
      scrambledWords: ['on June 15th', 'will take place', 'The entrance exam', '.'],
      grammarTip: 'Ngày tháng cụ thể bắt buộc dùng giới từ "ON": on June 15th.',
      difficulty: 'easy'
    },
    {
      id: 's-3-1-2',
      lessonId: 'lesson-3-1',
      vietnameseMeaning: 'Bố tôi thường uống một tách cà phê vào buổi sáng.',
      targetSentence: 'My father usually drinks coffee in the morning.',
      words: ['My father', 'usually drinks coffee', 'in the morning', '.'],
      scrambledWords: ['in the morning', 'My father', 'usually drinks coffee', '.'],
      grammarTip: 'Các buổi trong ngày dùng giới từ "IN": in the morning.',
      difficulty: 'easy'
    },
    {
      id: 's-3-1-3',
      lessonId: 'lesson-3-1',
      vietnameseMeaning: 'Chúng tôi hẹn gặp nhau lúc bảy giờ ba mươi tối nay.',
      targetSentence: 'We agreed to meet at seven thirty tonight.',
      words: ['We agreed to meet', 'at seven thirty', 'tonight', '.'],
      scrambledWords: ['tonight', 'at seven thirty', 'We agreed to meet', '.'],
      grammarTip: 'Mốc thời gian giờ giấc cụ thể dùng giới từ "AT": at 7:30.',
      difficulty: 'easy'
    },
    {
      id: 's-3-1-4',
      lessonId: 'lesson-3-1',
      vietnameseMeaning: 'Tôi sẽ gặp bạn vào sáng thứ Hai tuần tới.',
      targetSentence: 'I will see you on Monday morning next week.',
      words: ['I will see you', 'on Monday morning', 'next week', '.'],
      scrambledWords: ['next week', 'on Monday morning', 'I will see you', '.'],
      grammarTip: 'Có thứ trong tuần đi kèm buổi ➔ Bắt buộc ưu tiên dùng "ON": on Monday morning.',
      difficulty: 'hard'
    },
    {
      id: 's-3-1-5',
      lessonId: 'lesson-3-1',
      vietnameseMeaning: 'Gia đình tôi thường về quê vào dịp cuối tuần.',
      targetSentence: 'My family often visits our hometown at the weekend.',
      words: ['My family', 'often visits our hometown', 'at the weekend', '.'],
      scrambledWords: ['at the weekend', 'My family', 'often visits our hometown', '.'],
      grammarTip: 'Dịp cuối tuần dùng: "at the weekend" (Anh-Anh) hoặc "on the weekend" (Anh-Mỹ).',
      difficulty: 'medium'
    },
    {
      id: 's-3-1-6',
      lessonId: 'lesson-3-1',
      vietnameseMeaning: 'Việt Nam đã tuyên bố độc lập vào năm 1945.',
      targetSentence: 'Vietnam declared its independence in 1945.',
      words: ['Vietnam declared', 'its independence', 'in 1945', '.'],
      scrambledWords: ['in 1945', 'its independence', 'Vietnam declared', '.'],
      grammarTip: 'Đi với năm dùng giới từ "IN": in 1945.',
      difficulty: 'easy'
    },
    {
      id: 's-3-1-7',
      lessonId: 'lesson-3-1',
      vietnameseMeaning: 'Chúng tôi thường ăn bữa tối gia đình vào lúc nửa đêm giao thừa.',
      targetSentence: 'We have a family dinner at midnight on New Year Eve.',
      words: ['We have', 'a family dinner', 'at midnight', 'on New Year Eve', '.'],
      scrambledWords: ['on New Year Eve', 'a family dinner', 'at midnight', 'We have', '.'],
      grammarTip: 'Lúc nửa đêm dùng "at midnight", ngày lễ tết dùng "on New Year Eve".',
      difficulty: 'hard'
    },
    {
      id: 's-3-1-8',
      lessonId: 'lesson-3-1',
      vietnameseMeaning: 'Mùa hè bắt đầu vào tháng Năm và kết thúc vào tháng Tám.',
      targetSentence: 'Summer begins in May and ends in August.',
      words: ['Summer begins', 'in May', 'and ends', 'in August', '.'],
      scrambledWords: ['in August', 'and ends', 'Summer begins', 'in May', '.'],
      grammarTip: 'Đi với các tháng trong năm dùng giới từ "IN": in May, in August.',
      difficulty: 'medium'
    },
    {
      id: 's-3-1-9',
      lessonId: 'lesson-3-1',
      vietnameseMeaning: 'Anh ấy sinh ra vào một đêm mùa đông lạnh giá năm 2008.',
      targetSentence: 'He was born on a cold winter night in 2008.',
      words: ['He was born', 'on a cold winter night', 'in 2008', '.'],
      scrambledWords: ['in 2008', 'He was born', 'on a cold winter night', '.'],
      grammarTip: 'Có tính từ miêu tả cụ thể một đêm (a cold night) ➔ dùng "ON".',
      difficulty: 'hard'
    },
    {
      id: 's-3-1-10',
      lessonId: 'lesson-3-1',
      vietnameseMeaning: 'Chúng ta nên có mặt tại phòng thi vào lúc bảy giờ sáng.',
      targetSentence: 'We should be present at the exam room at seven.',
      words: ['We should be present', 'at the exam room', 'at seven in the morning', '.'],
      scrambledWords: ['at seven in the morning', 'at the exam room', 'We should be present', '.'],
      grammarTip: 'Giờ giấc dùng "at seven", địa điểm dùng "at the exam room".',
      difficulty: 'medium'
    }
  ]
};

/**
 * Trích xuất đủ 10 câu ghép câu theo bài học.
 * Phân loại theo chủ đề, độ khó và độ dài câu (ngắn, vừa, dài).
 * TUYỆT ĐỐI KHÔNG CÓ BẤT KỲ CÂU NÀO BỊ TRÙNG LẶP.
 */
export const getGrammarSentencesForLesson = (lesson: IGrammarLesson): IGrammarSentence[] => {
  // 1. Kiểm tra trực tiếp ID bài học trong Database
  const direct = GRAMMAR_SENTENCE_DATABASE[lesson.id];
  if (direct && direct.length >= 10) {
    return direct.slice(0, 10);
  }

  // 2. Phân loại theo Chủ điểm để trả về các câu ghép câu đúng chủ đề của bài học
  const match = lesson.id.match(/^lesson-(\d+)-/);
  const topicNum = match ? parseInt(match[1], 10) : 1;

  switch (topicNum) {
    case 1: // Danh từ, Mạo từ & Lượng từ
      return [
        {
          id: `${lesson.id}-s1`,
          lessonId: lesson.id,
          vietnameseMeaning: 'Chúng tôi cần mua một vài cuốn sách ngữ pháp cho năm học mới.',
          targetSentence: 'We need to buy some grammar books for the new school year.',
          words: ['We need to buy', 'some grammar books', 'for the new', 'school year', '.'],
          scrambledWords: ['school year', 'some grammar books', 'for the new', 'We need to buy', '.'],
          grammarTip: 'Sử dụng lượng từ "some" đi với danh từ đếm được số nhiều "books".',
          difficulty: 'easy'
        },
        {
          id: `${lesson.id}-s2`,
          lessonId: lesson.id,
          vietnameseMeaning: 'Có rất nhiều học sinh đang chăm chỉ học bài trong thư viện.',
          targetSentence: 'There are many students studying hard in the library.',
          words: ['There are', 'many students', 'studying hard', 'in the library', '.'],
          scrambledWords: ['studying hard', 'There are', 'in the library', 'many students', '.'],
          grammarTip: '"Many" đi kèm với danh từ đếm được số nhiều "students".',
          difficulty: 'easy'
        },
        {
          id: `${lesson.id}-s3`,
          lessonId: lesson.id,
          vietnameseMeaning: 'Cô ấy không có nhiều thời gian rảnh rỗi vào các ngày trong tuần.',
          targetSentence: 'She does not have much free time on weekdays.',
          words: ['She does not have', 'much free time', 'on weekdays', '.'],
          scrambledWords: ['on weekdays', 'much free time', 'She does not have', '.'],
          grammarTip: '"Much" đi kèm với danh từ không đếm được "time" trong câu phủ định.',
          difficulty: 'medium'
        },
        {
          id: `${lesson.id}-s4`,
          lessonId: lesson.id,
          vietnameseMeaning: 'Mặt trăng chiếu sáng rực rỡ trên bầu trời đêm.',
          targetSentence: 'The moon shines brightly in the night sky.',
          words: ['The moon', 'shines brightly', 'in the night sky', '.'],
          scrambledWords: ['in the night sky', 'The moon', 'shines brightly', '.'],
          grammarTip: 'Vật thể duy nhất dùng mạo từ "THE": The moon, the sky.',
          difficulty: 'easy'
        },
        {
          id: `${lesson.id}-s5`,
          lessonId: lesson.id,
          vietnameseMeaning: 'Cả hai người anh trai của tôi đều là kỹ sư phần mềm tài năng.',
          targetSentence: 'Both of my brothers are talented software engineers.',
          words: ['Both of', 'my brothers', 'are talented', 'software engineers', '.'],
          scrambledWords: ['software engineers', 'Both of', 'are talented', 'my brothers', '.'],
          grammarTip: '"Both of + danh từ số nhiều" đi với động từ số nhiều "are".',
          difficulty: 'medium'
        },
        {
          id: `${lesson.id}-s6`,
          lessonId: lesson.id,
          vietnameseMeaning: 'Chúng tôi vẫn còn một chút thời gian trước khi tàu rời ga.',
          targetSentence: 'We still have a little time before the train departs.',
          words: ['We still have', 'a little time', 'before the train', 'departs', '.'],
          scrambledWords: ['departs', 'a little time', 'before the train', 'We still have', '.'],
          grammarTip: '"A little" đi với danh từ không đếm được "time" mang nghĩa tích cực (còn một ít, đủ dùng).',
          difficulty: 'medium'
        },
        {
          id: `${lesson.id}-s7`,
          lessonId: lesson.id,
          vietnameseMeaning: 'Cậu ấy có rất ít bạn bè thân thiết ở thành phố mới này.',
          targetSentence: 'He has very few close friends in this new city.',
          words: ['He has', 'very few', 'close friends', 'in this new city', '.'],
          scrambledWords: ['in this new city', 'very few', 'He has', 'close friends', '.'],
          grammarTip: '"Few" đi với danh từ đếm được số nhiều "friends" mang nghĩa tiêu cực (rất ít, gần như không có).',
          difficulty: 'medium'
        },
        {
          id: `${lesson.id}-s8`,
          lessonId: lesson.id,
          vietnameseMeaning: 'Bạn có muốn dùng thêm một chút sữa nóng vào cà phê không?',
          targetSentence: 'Would you like some hot milk in your coffee?',
          words: ['Would you like', 'some hot milk', 'in your coffee', '?'],
          scrambledWords: ['in your coffee', 'Would you like', 'some hot milk', '?'],
          grammarTip: 'Lời mời lịch sự dùng "SOME", không dùng "any".',
          difficulty: 'hard'
        },
        {
          id: `${lesson.id}-s9`,
          lessonId: lesson.id,
          vietnameseMeaning: 'Không có bất kỳ học sinh nào vắng mặt trong buổi học hôm nay.',
          targetSentence: 'None of the students was absent from class today.',
          words: ['None of the students', 'was absent', 'from class today', '.'],
          scrambledWords: ['from class today', 'was absent', 'None of the students', '.'],
          grammarTip: '"None of + the + danh từ số nhiều" trong văn viết chuẩn đi với động từ số ít "was".',
          difficulty: 'hard'
        },
        {
          id: `${lesson.id}-s10`,
          lessonId: lesson.id,
          vietnameseMeaning: 'Người đàn ông đã cho tôi một lời khuyên vô cùng quý giá.',
          targetSentence: 'The old man gave me a valuable piece of advice.',
          words: ['The old man', 'gave me', 'a valuable piece of advice', '.'],
          scrambledWords: ['a valuable piece of advice', 'The old man', 'gave me', '.'],
          grammarTip: 'Đếm danh từ không đếm được: "a piece of advice".',
          difficulty: 'hard'
        }
      ];

    case 2: // Đại từ & Sở hữu
      return [
        {
          id: `${lesson.id}-s1`,
          lessonId: lesson.id,
          vietnameseMeaning: 'Cuốn sách này là của tôi, còn cuốn đằng kia là của bạn.',
          targetSentence: 'This book is mine and that one is yours.',
          words: ['This book is mine', 'and', 'that one is yours', '.'],
          scrambledWords: ['that one is yours', 'and', 'This book is mine', '.'],
          grammarTip: 'Đại từ sở hữu "mine" và "yours" đứng độc lập không cần danh từ.',
          difficulty: 'easy'
        },
        {
          id: `${lesson.id}-s2`,
          lessonId: lesson.id,
          vietnameseMeaning: 'Cậu bé đã tự mình chuẩn bị bữa sáng sáng nay.',
          targetSentence: 'The boy prepared breakfast all by himself this morning.',
          words: ['The boy prepared breakfast', 'all by himself', 'this morning', '.'],
          scrambledWords: ['this morning', 'all by himself', 'The boy prepared breakfast', '.'],
          grammarTip: 'Đại từ phản thân: "all by himself" = tự mình làm.',
          difficulty: 'easy'
        },
        {
          id: `${lesson.id}-s3`,
          lessonId: lesson.id,
          vietnameseMeaning: 'Trường học của chúng tôi rộng hơn nhiều so với trường của họ.',
          targetSentence: 'Our school is much larger than theirs.',
          words: ['Our school', 'is much larger', 'than theirs', '.'],
          scrambledWords: ['than theirs', 'Our school', 'is much larger', '.'],
          grammarTip: '"Theirs" = their school (đại từ sở hữu thay thế danh từ đã nhắc).',
          difficulty: 'medium'
        },
        {
          id: `${lesson.id}-s4`,
          lessonId: lesson.id,
          vietnameseMeaning: 'Bọn trẻ đã chơi rất vui vẻ tại công viên giải trí.',
          targetSentence: 'The children enjoyed themselves very much at the park.',
          words: ['The children', 'enjoyed themselves', 'very much', 'at the park', '.'],
          scrambledWords: ['at the park', 'very much', 'The children', 'enjoyed themselves', '.'],
          grammarTip: 'Cấu trúc "enjoy oneself" với chủ ngữ số nhiều "The children" ➔ "themselves".',
          difficulty: 'medium'
        },
        {
          id: `${lesson.id}-s5`,
          lessonId: lesson.id,
          vietnameseMeaning: 'Xin hãy tự nhiên dùng trái cây và nước ngọt trên bàn nhé.',
          targetSentence: 'Please help yourself to some fruits and drinks.',
          words: ['Please help yourself', 'to some fruits', 'and drinks', '.'],
          scrambledWords: ['and drinks', 'to some fruits', 'Please help yourself', '.'],
          grammarTip: 'Thành ngữ mời: "Help yourself to sth".',
          difficulty: 'medium'
        },
        {
          id: `${lesson.id}-s6`,
          lessonId: lesson.id,
          vietnameseMeaning: 'Chị gái tôi đã vô tình tự cắt vào tay khi gọt táo.',
          targetSentence: 'My sister accidentally cut herself while peeling apples.',
          words: ['My sister', 'accidentally cut herself', 'while peeling apples', '.'],
          scrambledWords: ['while peeling apples', 'My sister', 'accidentally cut herself', '.'],
          grammarTip: 'Hành động tự tác động lên mình: "cut herself".',
          difficulty: 'medium'
        },
        {
          id: `${lesson.id}-s7`,
          lessonId: lesson.id,
          vietnameseMeaning: 'Mỗi học sinh đều có điểm mạnh và điểm yếu của riêng mình.',
          targetSentence: 'Each student has strengths and weaknesses of their own.',
          words: ['Each student has', 'strengths and weaknesses', 'of their own', '.'],
          scrambledWords: ['of their own', 'strengths and weaknesses', 'Each student has', '.'],
          grammarTip: 'Cụm sở hữu nhấn mạnh: "of one\'s own".',
          difficulty: 'hard'
        },
        {
          id: `${lesson.id}-s8`,
          lessonId: lesson.id,
          vietnameseMeaning: 'Một số người thích đọc sách, trong khi những người khác thích nghe nhạc.',
          targetSentence: 'Some people like reading books while others prefer music.',
          words: ['Some people like', 'reading books', 'while others', 'prefer music', '.'],
          scrambledWords: ['prefer music', 'while others', 'reading books', 'Some people like', '.'],
          grammarTip: 'Cặp từ phân loại: "Some... while others...".',
          difficulty: 'hard'
        },
        {
          id: `${lesson.id}-s9`,
          lessonId: lesson.id,
          vietnameseMeaning: 'Tôi đã gọi điện nhưng không có ai trả lời ở đầu dây bên kia.',
          targetSentence: 'I made a phone call but nobody answered the phone.',
          words: ['I made a phone call', 'but nobody', 'answered the phone', '.'],
          scrambledWords: ['answered the phone', 'but nobody', 'I made a phone call', '.'],
          grammarTip: 'Đại từ bất định "nobody" mang nghĩa phủ định.',
          difficulty: 'medium'
        },
        {
          id: `${lesson.id}-s10`,
          lessonId: lesson.id,
          vietnameseMeaning: 'Cậu ấy muốn mua thêm một chiếc áo sơ mi màu xanh khác.',
          targetSentence: 'He wants to buy another blue shirt tomorrow.',
          words: ['He wants to buy', 'another blue shirt', 'tomorrow', '.'],
          scrambledWords: ['tomorrow', 'another blue shirt', 'He wants to buy', '.'],
          grammarTip: '"Another + danh từ số ít" (một cái khác cùng loại).',
          difficulty: 'hard'
        }
      ];

    default: // Các chủ điểm khác (3 - 20)
      return [
        {
          id: `${lesson.id}-s1`,
          lessonId: lesson.id,
          vietnameseMeaning: 'Nếu bạn luyện tập mỗi ngày, bạn sẽ tiến bộ vượt bậc.',
          targetSentence: 'If you practice every day, you will make great progress.',
          words: ['If you practice', 'every day', ',', 'you will make', 'great progress', '.'],
          scrambledWords: ['great progress', ',', 'you will make', 'every day', 'If you practice', '.'],
          grammarTip: 'Câu điều kiện loại 1 kết hợp cụm từ cố định: make progress (tiến bộ).',
          difficulty: 'easy'
        },
        {
          id: `${lesson.id}-s2`,
          lessonId: lesson.id,
          vietnameseMeaning: 'Cây cầu lịch sử này được khánh thành cách đây hơn một thế kỷ.',
          targetSentence: 'This historic bridge was opened more than a century ago.',
          words: ['This historic bridge', 'was opened', 'more than', 'a century ago', '.'],
          scrambledWords: ['a century ago', 'This historic bridge', 'more than', 'was opened', '.'],
          grammarTip: 'Bị động quá khứ đơn: S + was/were + V3.',
          difficulty: 'easy'
        },
        {
          id: `${lesson.id}-s3`,
          lessonId: lesson.id,
          vietnameseMeaning: 'Cô giáo hỏi tôi tại sao tôi lại vắng mặt vào ngày hôm trước.',
          targetSentence: 'The teacher asked me why I had been absent the day before.',
          words: ['The teacher asked me', 'why', 'I had been absent', 'the day before', '.'],
          scrambledWords: ['the day before', 'why', 'I had been absent', 'The teacher asked me', '.'],
          grammarTip: 'Câu hỏi gián tiếp lùi thì từ Quá khứ đơn về Quá khứ hoàn thành ("had been").',
          difficulty: 'medium'
        },
        {
          id: `${lesson.id}-s4`,
          lessonId: lesson.id,
          vietnameseMeaning: 'Cô gái vừa đoạt giải nhất cuộc thi là bạn thân của tôi.',
          targetSentence: 'The girl who won the first prize is my close friend.',
          words: ['The girl', 'who won the first prize', 'is', 'my close friend', '.'],
          scrambledWords: ['is', 'who won the first prize', 'my close friend', 'The girl', '.'],
          grammarTip: 'Mệnh đề quan hệ với "who" bổ nghĩa cho "The girl".',
          difficulty: 'medium'
        },
        {
          id: `${lesson.id}-s5`,
          lessonId: lesson.id,
          vietnameseMeaning: 'Mặc dù trời mưa to, tất cả học sinh vẫn đến trường đúng giờ.',
          targetSentence: 'Although it rained heavily, all students arrived at school on time.',
          words: ['Although it rained heavily', ',', 'all students', 'arrived at school', 'on time', '.'],
          scrambledWords: ['arrived at school', 'Although it rained heavily', 'on time', ',', 'all students', '.'],
          grammarTip: 'Liên từ nhượng bộ "Although", mệnh đề chính không dùng "but".',
          difficulty: 'medium'
        },
        {
          id: `${lesson.id}-s6`,
          lessonId: lesson.id,
          vietnameseMeaning: 'Họ đã sống ở thành phố này được hơn mười năm rồi.',
          targetSentence: 'They have lived in this city for more than ten years.',
          words: ['They have lived', 'in this city', 'for more than', 'ten years', '.'],
          scrambledWords: ['ten years', 'for more than', 'They have lived', 'in this city', '.'],
          grammarTip: 'Hiện tại hoàn thành đi với khoảng thời gian: "for more than ten years".',
          difficulty: 'easy'
        },
        {
          id: `${lesson.id}-s7`,
          lessonId: lesson.id,
          vietnameseMeaning: 'Bác sĩ đã khuyên anh ấy nên tập thể dục đều đặn hơn.',
          targetSentence: 'The doctor advised him to do exercise more regularly.',
          words: ['The doctor', 'advised him', 'to do exercise', 'more regularly', '.'],
          scrambledWords: ['more regularly', 'The doctor', 'to do exercise', 'advised him', '.'],
          grammarTip: 'Cấu trúc: advise sb + TO-V (khuyên ai làm gì).',
          difficulty: 'medium'
        },
        {
          id: `${lesson.id}-s8`,
          lessonId: lesson.id,
          vietnameseMeaning: 'Chiếc hộp này quá nặng đến mức cậu bé không thể nhấc lên được.',
          targetSentence: 'This wooden box is too heavy for the little boy to lift.',
          words: ['This wooden box', 'is too heavy', 'for the little boy', 'to lift', '.'],
          scrambledWords: ['to lift', 'This wooden box', 'for the little boy', 'is too heavy', '.'],
          grammarTip: 'Cấu trúc: Too + Adj + (for sb) + TO-V (quá... đến nỗi không thể...).',
          difficulty: 'hard'
        },
        {
          id: `${lesson.id}-s9`,
          lessonId: lesson.id,
          vietnameseMeaning: 'Hôm nay bạn không phải đi học thêm buổi chiều, đúng không?',
          targetSentence: 'You do not have to attend extra classes today, do you?',
          words: ['You do not have to', 'attend extra classes today', ',', 'do you', '?'],
          scrambledWords: ['do you', ',', 'attend extra classes today', 'You do not have to', '?'],
          grammarTip: 'Câu hỏi đuôi: Mệnh đề chính phủ định ("do not have to") ➔ Đuôi khẳng định ("do you").',
          difficulty: 'hard'
        },
        {
          id: `${lesson.id}-s10`,
          lessonId: lesson.id,
          vietnameseMeaning: 'Cô ấy nói tiếng Anh lưu loát đến mức mọi người đều khâm phục.',
          targetSentence: 'She speaks English so fluently that everyone admires her.',
          words: ['She speaks English', 'so fluently', 'that everyone', 'admires her', '.'],
          scrambledWords: ['admires her', 'that everyone', 'She speaks English', 'so fluently', '.'],
          grammarTip: 'Cấu trúc: So + Adv + That + S + V (quá... đến mức mà...).',
          difficulty: 'hard'
        }
      ];
  }
};
