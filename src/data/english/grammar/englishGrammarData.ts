export interface IGrammarPillBox {
  from: string;
  to: string;
  note?: string;
}

export type SegmentType = 'text' | 'pill' | 'badge' | 'box' | 'bold';

export interface IGrammarSegment {
  type: SegmentType;
  content?: string;
  box?: IGrammarPillBox;
}

export interface IGrammarRow {
  segments: IGrammarSegment[];
}

export interface IGrammarBlock {
  blockNumber: string; // "01", "02", "03"
  type: 'rule' | 'exception' | 'highlight' | 'formula';
  badgeTitle: string; // "CÔNG THỨC & QUY TẮC" | "BẤT QUY TẮC CẦN NHỚ" | "ĐIỂM NHẤN KIẾN THỨC"
  title: string;
  rows?: IGrammarRow[];
  pillBoxes?: IGrammarPillBox[];
}

export interface IGrammarLesson {
  id: string;
  lessonNumber: string; // "1.1", "1.2"
  title: string;
  heroBadge?: string;
  blocks: IGrammarBlock[];
}

export interface IGrammarTopic {
  id: string;
  topicNumber: string; // "01", "02"
  title: string;
  lessonCount: number;
  lessons: IGrammarLesson[];
}

export const ENGLISH_GRAMMAR_TOPICS: IGrammarTopic[] = [
  {
    id: 'topic-01',
    topicNumber: '01',
    title: 'Danh từ',
    lessonCount: 10,
    lessons: [
      {
        id: 'lesson-1-1',
        lessonNumber: '1.1',
        title: 'Danh từ số ít và Danh từ số nhiều',
        heroBadge: 'TRỌNG TÂM NGỮ PHÁP · BÀI GIẢNG CHI TIẾT',
        blocks: [
          {
            blockNumber: '01',
            type: 'rule',
            badgeTitle: 'CÔNG THỨC & QUY TẮC',
            title: 'Quy tắc biến đổi danh từ số ít sang số nhiều',
            rows: [
              {
                segments: [
                  { type: 'text', content: 'Thông thường: Thêm ' },
                  { type: 'pill', content: '-s' },
                  { type: 'text', content: ' (ví dụ: ' },
                  { type: 'box', box: { from: 'apple', to: 'apples' } },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: 'Tận cùng là ' },
                  { type: 'pill', content: '-s, -ss, -sh, -ch, -x, -o' },
                  { type: 'text', content: ': Thêm ' },
                  { type: 'pill', content: '-es' },
                  { type: 'text', content: ' (ví dụ: ' },
                  { type: 'box', box: { from: 'bus', to: 'buses' } },
                  { type: 'text', content: ', ' },
                  { type: 'box', box: { from: 'box', to: 'boxes' } },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: 'Phụ âm + ' },
                  { type: 'pill', content: '-y' },
                  { type: 'text', content: ': Đổi thành ' },
                  { type: 'pill', content: '-ies' },
                  { type: 'text', content: ' (ví dụ: ' },
                  { type: 'box', box: { from: 'company', to: 'companies' } },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: 'Tận cùng ' },
                  { type: 'pill', content: '-f / -fe' },
                  { type: 'text', content: ': Đổi thành ' },
                  { type: 'pill', content: '-ves' },
                  { type: 'text', content: ' (ví dụ: ' },
                  { type: 'box', box: { from: 'shelf', to: 'shelves' } },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          },
          {
            blockNumber: '02',
            type: 'exception',
            badgeTitle: 'BẤT QUY TẮC CẦN NHỚ',
            title: 'Danh từ số nhiều bất quy tắc',
            pillBoxes: [
              { from: 'man', to: 'men' },
              { from: 'woman', to: 'women' },
              { from: 'person', to: 'people' },
              { from: 'child', to: 'children' },
              { from: 'foot', to: 'feet' },
              { from: 'tooth', to: 'teeth' },
              { from: 'mouse', to: 'mice' }
            ]
          },
          {
            blockNumber: '03',
            type: 'rule',
            badgeTitle: 'CÔNG THỨC & QUY TẮC',
            title: 'Quy tắc hòa hợp Chủ ngữ - Động từ',
            rows: [
              {
                segments: [
                  { type: 'text', content: 'Danh từ số ít đi với động từ số ít (thêm ' },
                  { type: 'pill', content: '-s/-es' },
                  { type: 'text', content: ' hoặc dùng ' },
                  { type: 'pill', content: 'is/was/has' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: 'Danh từ số nhiều đi với động từ số nhiều (nguyên mẫu hoặc dùng ' },
                  { type: 'pill', content: 'are/were/have' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: 'Các danh từ luôn ở dạng số nhiều: ' },
                  { type: 'pill', content: 'clothes, jeans, glasses, scissors' },
                  { type: 'text', content: ' (hoặc dùng với ' },
                  { type: 'pill', content: 'a pair of...' },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'lesson-1-2',
        lessonNumber: '1.2',
        title: 'Danh từ đếm được và Danh từ không đếm được',
        heroBadge: 'TRỌNG TÂM NGỮ PHÁP · BÀI GIẢNG CHI TIẾT',
        blocks: [
          {
            blockNumber: '01',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: 'Danh từ đếm được (Countable Nouns)',
            rows: [
              {
                segments: [
                  { type: 'text', content: 'Chỉ sự vật có thể đếm trực tiếp bằng số lượng (' },
                  { type: 'pill', content: 'carrot, potato, onion' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: 'Ở dạng ' },
                  { type: 'badge', content: 'Số ít' },
                  { type: 'text', content: ': Bắt buộc phải có mạo từ hoặc từ chỉ định phía trước như ' },
                  { type: 'pill', content: 'a, an, the, this, that' },
                  { type: 'text', content: ' (ví dụ: ' },
                  { type: 'pill', content: 'a market, an onion' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: 'Ở dạng ' },
                  { type: 'badge', content: 'Số nhiều' },
                  { type: 'text', content: ': Thêm ' },
                  { type: 'pill', content: '-s/-es' },
                  { type: 'text', content: ', có thể đi kèm với ' },
                  { type: 'pill', content: 'some, many, these, those' },
                  { type: 'text', content: ' hoặc số đếm.' }
                ]
              }
            ]
          },
          {
            blockNumber: '02',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: 'Danh từ không đếm được (Uncountable Nouns)',
            rows: [
              {
                segments: [
                  { type: 'text', content: 'Chỉ chất lỏng, thực phẩm, chất liệu, khái niệm trừu tượng (' },
                  { type: 'pill', content: 'water, oil, tea, metal, plastic, love, education' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Quy tắc quan trọng:' },
                  { type: 'text', content: ' KHÔNG thêm ' },
                  { type: 'pill', content: '-s/-es' },
                  { type: 'text', content: ', KHÔNG dùng mạo từ ' },
                  { type: 'pill', content: 'a/an' },
                  { type: 'text', content: ' trực tiếp phía trước.' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: 'Thường đi kèm với lượng từ như ' },
                  { type: 'pill', content: 'some, much, a lot of' },
                  { type: 'text', content: ' .' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Sự hòa hợp Chủ ngữ - Động từ:' },
                  { type: 'text', content: ' Danh từ không đếm được luôn đóng vai trò là chủ ngữ số ít, đi với động từ số ít (' },
                  { type: 'pill', content: 'is, was, has, V-s/es' },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          },
          {
            blockNumber: '03',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: 'Nhóm danh từ không đếm được hay gặp nhất trong đề thi',
            rows: [
              {
                segments: [
                  { type: 'pill', content: 'information' },
                  { type: 'text', content: ' (thông tin), ' },
                  { type: 'pill', content: 'advice' },
                  { type: 'text', content: ' (lời khuyên), ' },
                  { type: 'pill', content: 'furniture' },
                  { type: 'text', content: ' (nội thất), ' },
                  { type: 'pill', content: 'luggage / baggage' },
                  { type: 'text', content: ' (hành lý), ' },
                  { type: 'pill', content: 'equipment' },
                  { type: 'text', content: ' (thiết bị), ' },
                  { type: 'pill', content: 'money' },
                  { type: 'text', content: ' (tiền bạc), ' },
                  { type: 'pill', content: 'paper' },
                  { type: 'text', content: ' (giấy - chất liệu).' }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'lesson-1-3',
        lessonNumber: '1.3',
        title: 'Danh từ đếm được và Danh từ không đếm được (Phần 2)',
        heroBadge: 'TRỌNG TÂM NGỮ PHÁP · BÀI GIẢNG CHI TIẾT',
        blocks: [
          {
            blockNumber: '01',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: 'Danh từ mang cả hai nét nghĩa (Countable & Uncountable)',
            rows: [
              {
                segments: [
                  { type: 'pill', content: 'Coffee / Tea' },
                  { type: 'text', content: ' : Không đếm được khi chỉ chất lỏng nói chung ( ' },
                  { type: 'pill', content: 'Tea comes from China' },
                  { type: 'text', content: ' ), nhưng đếm được khi chỉ một hoặc nhiều tách/ly đồ uống ( ' },
                  { type: 'pill', content: 'three teas, please' },
                  { type: 'text', content: ' = 3 tách trà).' }
                ]
              },
              {
                segments: [
                  { type: 'pill', content: 'Paper' },
                  { type: 'text', content: ' : Không đếm được khi chỉ chất liệu giấy ( ' },
                  { type: 'pill', content: 'made of paper' },
                  { type: 'text', content: ' ), nhưng đếm được khi chỉ một tờ báo / bài báo ( ' },
                  { type: 'pill', content: 'buy a paper' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'pill', content: 'Chicken' },
                  { type: 'text', content: ' : Không đếm được khi là món ăn ( ' },
                  { type: 'pill', content: 'eat chicken' },
                  { type: 'text', content: ' ), nhưng đếm được khi là con vật cụ thể ( ' },
                  { type: 'pill', content: 'raise chickens' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'pill', content: 'Tên ngôn ngữ / Quốc tịch' },
                  { type: 'text', content: ' : ' },
                  { type: 'pill', content: 'speak Russian' },
                  { type: 'text', content: ' (tiếng Nga - không đếm được) vs. ' },
                  { type: 'pill', content: 'four Russians' },
                  { type: 'text', content: ' (4 người Nga - danh từ số nhiều đếm được).' }
                ]
              }
            ]
          },
          {
            blockNumber: '02',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: 'Cách đếm danh từ không đếm được (Partitives - Cụm từ định lượng)',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'Đơn vị (Units):' },
                  { type: 'pill', content: 'a piece of' },
                  { type: 'text', content: ' (furniture/luggage/paper/advice), ' },
                  { type: 'pill', content: 'a bit of' },
                  { type: 'text', content: ' (information), ' },
                  { type: 'pill', content: 'a slice of' },
                  { type: 'text', content: ' (bread/toast/cake), ' },
                  { type: 'pill', content: 'a loaf of' },
                  { type: 'text', content: ' (bread - số nhiều: ' },
                  { type: 'pill', content: 'loaves of bread' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Vật chứa (Containers):' },
                  { type: 'pill', content: 'a cup of' },
                  { type: 'text', content: ' (coffee/tea), ' },
                  { type: 'pill', content: 'a bottle of' },
                  { type: 'text', content: ' (water), ' },
                  { type: 'pill', content: 'a carton of' },
                  { type: 'text', content: ' (milk/juice), ' },
                  { type: 'pill', content: 'a box of' },
                  { type: 'text', content: ' (chocolates), ' },
                  { type: 'pill', content: 'a can/tin of' },
                  { type: 'text', content: ' (soup).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Đo lường (Measurements):' },
                  { type: 'pill', content: 'a litre of' },
                  { type: 'text', content: ' (milk), ' },
                  { type: 'pill', content: 'a kilo of' },
                  { type: 'text', content: ' (sugar), ' },
                  { type: 'pill', content: 'six metres of' },
                  { type: 'text', content: ' (cotton).' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: 'Để đếm danh từ không đếm được, chúng ta biến đổi số lượng thông qua ' },
                  { type: 'bold', content: 'đơn vị đo lường hoặc vật chứa' },
                  { type: 'text', content: ' đứng trước cụm ' },
                  { type: 'pill', content: 'of' },
                  { type: 'text', content: ', danh từ không đếm được phía sau vẫn giữ nguyên:' }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'lesson-1-4',
        lessonNumber: '1.4',
        title: 'Mạo từ bất định (A / An)',
        heroBadge: 'TRỌNG TÂM NGỮ PHÁP · BÀI GIẢNG CHI TIẾT',
        blocks: [
          {
            blockNumber: '01',
            type: 'rule',
            badgeTitle: 'CÔNG THỨC & QUY TẮC',
            title: 'Quy tắc lựa chọn "A" hay "AN" theo Phiên âm',
            rows: [
              {
                segments: [
                  { type: 'text', content: 'Dùng ' },
                  { type: 'badge', content: 'A' },
                  { type: 'text', content: ' trước từ bắt đầu bằng một ' },
                  { type: 'badge', content: 'phụ âm' },
                  { type: 'text', content: ' (ví dụ: ' },
                  { type: 'pill', content: 'a cake, a hat, a manager' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: 'Dùng ' },
                  { type: 'badge', content: 'A' },
                  { type: 'text', content: ' trước các từ bắt đầu bằng chữ cái ' },
                  { type: 'pill', content: 'u' },
                  { type: 'text', content: ' hoặc ' },
                  { type: 'pill', content: 'eu' },
                  { type: 'text', content: ' nhưng được phát âm là bán nguyên âm ' },
                  { type: 'badge', content: '/ju:/' },
                  { type: 'text', content: ' (ví dụ: ' },
                  { type: 'pill', content: 'a uniform, a European company, a university' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: 'Dùng ' },
                  { type: 'badge', content: 'AN' },
                  { type: 'text', content: ' trước từ bắt đầu bằng một ' },
                  { type: 'badge', content: 'nguyên âm' },
                  { type: 'text', content: ' (/æ/, /e/, /ɪ/, /ɒ/, /ʌ/...) (ví dụ: ' },
                  { type: 'pill', content: 'an apple, an architect, an interesting idea' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: 'Dùng ' },
                  { type: 'badge', content: 'AN' },
                  { type: 'text', content: ' trước các từ bắt đầu bằng ' },
                  { type: 'badge', content: 'âm "h" câm' },
                  { type: 'text', content: ' (ví dụ: ' },
                  { type: 'pill', content: 'an hour, an honest employee' },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          },
          {
            blockNumber: '02',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: 'Các ngữ cảnh thường gặp trong bài thi',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'Chỉ nghề nghiệp, chức danh:' },
                  { type: 'pill', content: 'She is a doctor; He works as an architect.' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Cấu trúc miêu tả tính chất:' },
                  { type: 'pill', content: 'a / an + Tính từ + Danh từ số ít' },
                  { type: 'text', content: ' (ví dụ: ' },
                  { type: 'pill', content: 'an urgent message, a reliable service' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Chỉ tần suất, tỉ lệ đo lường (nghĩa là "mỗi / mỗi một"):' },
                  { type: 'pill', content: 'twice a week, once a month, 80 kilometers an hour' },
                  { type: 'text', content: ' .' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Đi với số đếm hoặc phân số:' },
                  { type: 'pill', content: 'a hundred, a thousand, a million, one and a half' },
                  { type: 'text', content: ' .' }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'lesson-1-5',
        lessonNumber: '1.5',
        title: 'Phân biệt Mạo từ xác định (The) và Mạo từ bất định (A / An)',
        heroBadge: 'TRỌNG TÂM NGỮ PHÁP · BÀI GIẢNG CHI TIẾT',
        blocks: [
          {
            blockNumber: '01',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: 'Khi nào sử dụng Mạo từ xác định "THE"',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'Vật thể duy nhất hoặc đối tượng duy nhất trong ngữ cảnh:' },
                  { type: 'pill', content: 'the sun, the CEO, the manager, the front door' },
                  { type: 'text', content: ' .' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Đối tượng được xác định rõ ràng bởi cụm giới từ hoặc mệnh đề theo sau:' },
                  { type: 'text', content: ' Khi danh từ đi kèm cụm bổ nghĩa chỉ rõ "cái nào, người nào" (ví dụ: ' },
                  { type: 'pill', content: 'the report on the desk, the restaurant in Dean Street' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Đi với từ chỉ thứ tự hoặc so sánh nhất:' },
                  { type: 'pill', content: 'the first, the last, the only, the best, the most important' },
                  { type: 'text', content: ' .' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Quy tắc nhắc lại lần thứ hai:' },
                  { type: 'text', content: ' Khi đối tượng đã được nhắc đến ở câu trước bằng ' },
                  { type: 'pill', content: 'a/an' },
                  { type: 'text', content: ' , sang câu sau người nghe đã biết rõ đối tượng đó là gì nên bắt buộc dùng ' },
                  { type: 'pill', content: 'the' },
                  { type: 'text', content: ' (ví dụ: I bought ' },
                  { type: 'badge', content: 'a' },
                  { type: 'text', content: ' new coat... ' },
                  { type: 'badge', content: 'The' },
                  { type: 'text', content: ' coat is really warm.).' }
                ]
              }
            ]
          },
          {
            blockNumber: '02',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: 'Khi nào sử dụng Mạo từ bất định "A / AN"',
            rows: [
              {
                segments: [
                  { type: 'text', content: 'Khi nhắc đến một đối tượng lần đầu tiên và chưa xác định rõ người nghe đang nói tới ai/cái gì (' },
                  { type: 'pill', content: 'a bus, an accountant' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: 'Khi mang ý nghĩa "bất kỳ đối tượng nào thuộc nhóm đó" (' },
                  { type: 'pill', content: 'need a replacement part' },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'lesson-1-6',
        lessonNumber: '1.6',
        title: 'Quy tắc sử dụng Mạo từ với Danh từ riêng và Cụm từ cố định',
        heroBadge: 'TRỌNG TÂM NGỮ PHÁP · BÀI GIẢNG CHI TIẾT',
        blocks: [
          {
            blockNumber: '01',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: 'Các trường hợp BẮT BUỘC dùng "THE"',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'Các buổi trong ngày:' },
                  { type: 'pill', content: 'in the morning, in the afternoon, in the evening' },
                  { type: 'text', content: ' (Ngoại trừ: ' },
                  { type: 'pill', content: 'at night, at midday' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Nhạc cụ:' },
                  { type: 'pill', content: 'play the piano, play the guitar' },
                  { type: 'text', content: ' .' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Tên tờ báo, mạng Internet:' },
                  { type: 'pill', content: 'The New York Times, on the Internet' },
                  { type: 'text', content: ' (Ngoại trừ: ' },
                  { type: 'pill', content: 'watch TV' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Địa điểm công cộng, khách sạn, bảo tàng, rạp hát:' },
                  { type: 'pill', content: 'the bank, the post office, the Savoy Hotel, the Louvre Museum' },
                  { type: 'text', content: ' .' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Phương hướng, vị trí:' },
                  { type: 'pill', content: 'in the north/south, on the left/right, on the coast' },
                  { type: 'text', content: ' .' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Tên quốc gia có số nhiều hoặc chứa "United/Republic/Kingdom":' },
                  { type: 'pill', content: 'the United States, the United Kingdom, the Netherlands' },
                  { type: 'text', content: ' .' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Đại dương, biển, sông ngòi, dãy núi:' },
                  { type: 'pill', content: 'the Pacific Ocean, the Thames, the Himalayas' },
                  { type: 'text', content: ' .' }
                ]
              }
            ]
          },
          {
            blockNumber: '02',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: 'Các trường hợp KHÔNG DÙNG mạo từ (Không thêm a/an/the)',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'Thứ, ngày, tháng, bữa ăn:' },
                  { type: 'pill', content: 'on Monday, in July, have lunch/dinner' },
                  { type: 'text', content: ' .' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Môn thể thao:' },
                  { type: 'pill', content: 'play football, play tennis' },
                  { type: 'text', content: ' .' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Phương tiện đi lại / Liên lạc đi với "by":' },
                  { type: 'pill', content: 'by train, by bus, by email, by phone' },
                  { type: 'text', content: ' .' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Tên đường phố, công viên, quảng trường:' },
                  { type: 'pill', content: 'Oxford Street, Times Square, Central Park' },
                  { type: 'text', content: ' .' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Tên sân bay, ga tàu:' },
                  { type: 'pill', content: 'Manchester Airport, Penn Station' },
                  { type: 'text', content: ' .' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Tên quốc gia thông thường, thành phố, châu lục:' },
                  { type: 'pill', content: 'Japan, France, Tokyo, Asia' },
                  { type: 'text', content: ' .' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Ngọn núi đơn lẻ, hồ nước đơn lẻ:' },
                  { type: 'pill', content: 'Mount Everest, Lake Ontario' },
                  { type: 'text', content: ' .' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Cụm từ nơi chốn quen thuộc:' },
                  { type: 'pill', content: 'at work, at home, in bed' },
                  { type: 'text', content: ' .' }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'lesson-1-7',
        lessonNumber: '1.7',
        title: 'Cách sử dụng Some và Any',
        heroBadge: 'TRỌNG TÂM NGỮ PHÁP · BÀI GIẢNG CHI TIẾT',
        blocks: [
          {
            blockNumber: '01',
            type: 'rule',
            badgeTitle: 'CÔNG THỨC & QUY TẮC',
            title: 'Quy tắc sử dụng SOME',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'Câu khẳng định (Positive sentences):' },
                  { type: 'text', content: ' Dùng để chỉ một lượng không xác định (ví dụ: ' },
                  { type: 'pill', content: 'We have received some feedback; I need some work done' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Lời đề nghị, mời mọc lịch sự (Offers):' },
                  { type: 'text', content: ' Thường bắt đầu bằng ' },
                  { type: 'pill', content: 'Would you like...? / Do you want...?' },
                  { type: 'text', content: ' (ví dụ: ' },
                  { type: 'pill', content: 'Would you like some coffee?' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Lời yêu cầu, xin phép lịch sự (Requests):' },
                  { type: 'text', content: ' Thường bắt đầu bằng ' },
                  { type: 'pill', content: 'Can I have...? / Could you give me...?' },
                  { type: 'text', content: ' (ví dụ: ' },
                  { type: 'pill', content: 'Can I have some information?' },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          },
          {
            blockNumber: '02',
            type: 'rule',
            badgeTitle: 'CÔNG THỨC & QUY TẮC',
            title: 'Quy tắc sử dụng ANY',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'Câu phủ định (Negative sentences):' },
                  { type: 'text', content: ' Khi trong câu xuất hiện ' },
                  { type: 'pill', content: "not, n't, hardly, never" },
                  { type: 'text', content: ' (ví dụ: ' },
                  { type: 'pill', content: "We don't have any vacancies; There isn't any milk left" },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Câu hỏi nghi vấn thông thường (General questions):' },
                  { type: 'text', content: ' Dùng để hỏi xem có đối tượng nào hay không (ví dụ: ' },
                  { type: 'pill', content: 'Do you have any questions? Is there any sugar?' },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'lesson-1-8',
        lessonNumber: '1.8',
        title: 'Cách sử dụng Much, Many và A lot of',
        heroBadge: 'TRỌNG TÂM NGỮ PHÁP · BÀI GIẢNG CHI TIẾT',
        blocks: [
          {
            blockNumber: '01',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: 'Phân biệt theo loại Danh từ đi kèm',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'MANY + Danh từ đếm được số nhiều:' },
                  { type: 'text', content: ' Dùng để chỉ số lượng người hoặc vật đếm được (ví dụ: ' },
                  { type: 'pill', content: 'many applications, many clients, many products' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'MUCH + Danh từ không đếm được:' },
                  { type: 'text', content: ' Dùng để chỉ lượng thời gian, tiền bạc, vật chất, thông tin... (ví dụ: ' },
                  { type: 'pill', content: 'much time, much experience, much money' },
                  { type: 'text', content: ' ). Thường được dùng nhiều nhất trong câu phủ định và câu nghi vấn.' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'A LOT OF + Danh từ số nhiều HOẶC Danh từ không đếm được:' },
                  { type: 'text', content: ' Dùng rất linh hoạt cho cả hai loại danh từ, đặc biệt ưa chuộng trong câu khẳng định (ví dụ: ' },
                  { type: 'pill', content: 'a lot of friends, a lot of information' },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          },
          {
            blockNumber: '02',
            type: 'rule',
            badgeTitle: 'CÔNG THỨC & QUY TẮC',
            title: 'Cấu trúc câu hỏi số lượng và giá cả',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'How many + Danh từ đếm được số nhiều:' },
                  { type: 'text', content: ' Dùng để hỏi có bao nhiêu người/vật (ví dụ: ' },
                  { type: 'pill', content: 'How many attendees are there?' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'How much + Danh từ không đếm được:' },
                  { type: 'text', content: ' Dùng để hỏi về lượng (ví dụ: ' },
                  { type: 'pill', content: 'How much sugar / budget is left?' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'How much + be / cost:' },
                  { type: 'text', content: ' Dùng để hỏi giá tiền (ví dụ: ' },
                  { type: 'pill', content: 'How much does it cost? How much is the ticket?' },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          },
          {
            blockNumber: '03',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: 'Dùng độc lập không có danh từ theo sau',
            rows: [
              {
                segments: [
                  { type: 'pill', content: 'much / many' },
                  { type: 'text', content: ' có thể đứng một mình làm đại từ khi ngữ cảnh đã rõ (ví dụ: ' },
                  { type: 'pill', content: "I don't have many; It doesn't cost much" },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: 'Khi không có danh từ phía sau, ta dùng ' },
                  { type: 'badge', content: 'a lot' },
                  { type: 'text', content: ' và tuyệt đối ' },
                  { type: 'badge', content: 'không thêm "of"' },
                  { type: 'text', content: ' (ví dụ: ' },
                  { type: 'pill', content: 'We learned a lot' },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'lesson-1-9',
        lessonNumber: '1.9',
        title: 'A little, A few, Too much, Too many và Not enough',
        heroBadge: 'TRỌNG TÂM NGỮ PHÁP · BÀI GIẢNG CHI TIẾT',
        blocks: [
          {
            blockNumber: '01',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: 'Phân biệt A little và A few (Một ít / Một vài - Đủ dùng)',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'A little + Danh từ không đếm được:' },
                  { type: 'text', content: ' Dùng để chỉ một lượng nhỏ (ví dụ: ' },
                  { type: 'pill', content: 'a little time, a little help, a little information' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'A few + Danh từ đếm được số nhiều:' },
                  { type: 'text', content: ' Dùng để chỉ một số lượng nhỏ vài cá thể (ví dụ: ' },
                  { type: 'pill', content: 'a few days, a few clients, a few chairs' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: 'Cả hai từ trên đều có thể đứng độc lập khi danh từ phía sau đã rõ ràng (ví dụ: ' },
                  { type: 'pill', content: 'Need any milk? - Just a little, please' },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          },
          {
            blockNumber: '02',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: 'Phân biệt Too much và Too many (Quá nhiều - Mang nét nghĩa tiêu cực, vượt mức cần thiết)',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'Too much + Danh từ không đếm được:' },
                  { type: 'text', content: ' (ví dụ: ' },
                  { type: 'pill', content: 'too much money, too much paperwork, too much noise' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Too many + Danh từ đếm được số nhiều:' },
                  { type: 'text', content: ' (ví dụ: ' },
                  { type: 'pill', content: 'too many complaints, too many errors, too many people' },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          },
          {
            blockNumber: '03',
            type: 'rule',
            badgeTitle: 'CÔNG THỨC & QUY TẮC',
            title: 'Cấu trúc Not enough (Không đủ - Thiếu hụt)',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'Not enough + Danh từ số nhiều HOẶC Danh từ không đếm được:' },
                  { type: 'text', content: ' Dùng linh hoạt cho cả hai nhóm danh từ khi muốn diễn tả sự thiếu hụt so với nhu cầu (ví dụ: ' },
                  { type: 'pill', content: 'not enough budget, not enough tables' },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'lesson-1-10',
        lessonNumber: '1.10',
        title: 'All, Most, Some, No / None và Both',
        heroBadge: 'TRỌNG TÂM NGỮ PHÁP · BÀI GIẢNG CHI TIẾT',
        blocks: [
          {
            blockNumber: '01',
            type: 'exception',
            badgeTitle: 'BẤT QUY TẮC CẦN NHỚ',
            title: 'Phân loại và Khả năng kết hợp Danh từ',
            rows: [
              {
                segments: [
                  { type: 'pill', content: 'All' },
                  { type: 'text', content: ' (Tất cả), ' },
                  { type: 'pill', content: 'Most' },
                  { type: 'text', content: ' (Hầu hết), ' },
                  { type: 'pill', content: 'Some' },
                  { type: 'text', content: ' (Một vài), ' },
                  { type: 'pill', content: 'No / None' },
                  { type: 'text', content: ' (Không): Kết hợp được với cả ' },
                  { type: 'badge', content: 'danh từ số nhiều' },
                  { type: 'text', content: ' và ' },
                  { type: 'badge', content: 'danh từ không đếm được' },
                  { type: 'text', content: ' .' }
                ]
              },
              {
                segments: [
                  { type: 'pill', content: 'Both' },
                  { type: 'text', content: ' (Cả hai): Chỉ dùng cho đúng ' },
                  { type: 'badge', content: '2 đối tượng' },
                  { type: 'text', content: ' và luôn luôn đi với ' },
                  { type: 'badge', content: 'danh từ đếm được số nhiều' },
                  { type: 'text', content: ' .' }
                ]
              }
            ]
          },
          {
            blockNumber: '02',
            type: 'rule',
            badgeTitle: 'CÔNG THỨC & QUY TẮC',
            title: 'Cấu trúc có "OF" và KHÔNG có "OF"',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'Nói chung chung (General):' },
                  { type: 'text', content: ' Dùng trực tiếp ' },
                  { type: 'pill', content: 'Lượng từ + Danh từ' },
                  { type: 'text', content: ' (ví dụ: ' },
                  { type: 'pill', content: 'Most employees, All fruit, No money' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Chỉ đối tượng cụ thể (Specific):' },
                  { type: 'text', content: ' Dùng ' },
                  { type: 'pill', content: 'Lượng từ + OF + the / these / my + Danh từ' },
                  { type: 'text', content: ' (ví dụ: ' },
                  { type: 'pill', content: 'Most of the staff, Some of these products' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Lưu ý:' },
                  { type: 'text', content: ' ' },
                  { type: 'pill', content: 'All (of) the' },
                  { type: 'text', content: ' và ' },
                  { type: 'pill', content: 'Both (of) the' },
                  { type: 'text', content: ' có thể có hoặc không có "of", nhưng ' },
                  { type: 'pill', content: 'some of, most of, none of' },
                  { type: 'text', content: ' ' },
                  { type: 'badge', content: 'bắt buộc phải có "of"' },
                  { type: 'text', content: ' khi đứng trước ' },
                  { type: 'pill', content: 'the/these/my' },
                  { type: 'text', content: ' .' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Phân biệt No và None:' },
                  { type: 'text', content: ' ' },
                  { type: 'pill', content: 'No + Danh từ' },
                  { type: 'text', content: ' (ví dụ: ' },
                  { type: 'pill', content: 'no reason' },
                  { type: 'text', content: ' ), trong khi ' },
                  { type: 'pill', content: 'None + of + the + Danh từ' },
                  { type: 'text', content: ' hoặc đứng độc lập làm đại từ.' }
                ]
              }
            ]
          },
          {
            blockNumber: '03',
            type: 'rule',
            badgeTitle: 'CÔNG THỨC & QUY TẮC',
            title: 'Sự hòa hợp Chủ ngữ - Động từ',
            rows: [
              {
                segments: [
                  { type: 'text', content: 'Lượng từ + of + Danh từ số nhiều ➔ ' },
                  { type: 'badge', content: 'Động từ số nhiều' },
                  { type: 'text', content: ' ( ' },
                  { type: 'pill', content: 'are, were, have, V-nguyên thể' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: 'Lượng từ + of + Danh từ không đếm được ➔ ' },
                  { type: 'badge', content: 'Động từ số ít' },
                  { type: 'text', content: ' ( ' },
                  { type: 'pill', content: 'is, was, has, V-s/es' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'pill', content: 'No / None' },
                  { type: 'text', content: ' mang nghĩa phủ định sẵn nên động từ đi sau chia ở dạng khẳng định.' }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'topic-02',
    topicNumber: '02',
    title: 'Đại từ và sở hữu',
    lessonCount: 7,
    lessons: [
      {
        id: 'lesson-2-1',
        lessonNumber: '2.1',
        title: 'Đại từ Nhân xưng làm Chủ ngữ và Tân ngữ (Subject & Object Pronouns)',
        heroBadge: 'TRỌNG TÂM NGỮ PHÁP · BÀI GIẢNG CHI TIẾT',
        blocks: [
          {
            blockNumber: '01',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: 'Hệ thống Đại từ nhân xưng',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'Chủ ngữ (Subject Pronouns):' },
                  { type: 'pill', content: 'I, you, he, she, it, we, they' },
                  { type: 'text', content: ' .' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Tân ngữ (Object Pronouns):' },
                  { type: 'pill', content: 'me, you, him, her, it, us, them' },
                  { type: 'text', content: ' .' }
                ]
              }
            ]
          },
          {
            blockNumber: '02',
            type: 'rule',
            badgeTitle: 'CÔNG THỨC & QUY TẮC',
            title: 'Quy tắc xác định vị trí trong câu',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'Đại từ làm Chủ ngữ:' },
                  { type: 'text', content: ' Luôn đứng ' },
                  { type: 'badge', content: 'trước động từ chính' },
                  { type: 'text', content: ' để làm chủ thể thực hiện hành động (ví dụ: ' },
                  { type: 'badge', content: 'She' },
                  { type: 'pill', content: 'approved the project;' },
                  { type: 'badge', content: 'They' },
                  { type: 'pill', content: 'arrived early' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Đại từ làm Tân ngữ:' },
                  { type: 'text', content: ' Đứng ' },
                  { type: 'badge', content: 'sau ngoại động từ' },
                  { type: 'text', content: ' để làm đối tượng tiếp nhận hành động (ví dụ: ' },
                  { type: 'pill', content: 'The manager called' },
                  { type: 'badge', content: 'him' },
                  { type: 'text', content: ' ; ' },
                  { type: 'pill', content: 'I like' },
                  { type: 'badge', content: 'her' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: 'Đứng ' },
                  { type: 'badge', content: 'sau các giới từ' },
                  { type: 'text', content: ' như ' },
                  { type: 'pill', content: 'to, for, with, about, of, near, between...' },
                  { type: 'text', content: ' (ví dụ: ' },
                  { type: 'pill', content: 'Send the email to' },
                  { type: 'badge', content: 'them' },
                  { type: 'text', content: ' ; ' },
                  { type: 'pill', content: 'Come with' },
                  { type: 'badge', content: 'us' },
                  { type: 'text', content: ' ; ' },
                  { type: 'pill', content: 'Both of' },
                  { type: 'badge', content: 'them' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: 'Đứng sau động từ ' },
                  { type: 'pill', content: 'to be' },
                  { type: 'text', content: ' trong văn phong đối thoại xác định người (ví dụ: ' },
                  { type: 'pill', content: "It's" },
                  { type: 'badge', content: 'me' },
                  { type: 'text', content: ' ; ' },
                  { type: 'pill', content: "That's" },
                  { type: 'badge', content: 'us' },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'lesson-2-2',
        lessonNumber: '2.2',
        title: 'Sở hữu cách của Danh từ (Possessive Forms of Nouns)',
        heroBadge: 'TRỌNG TÂM NGỮ PHÁP · BÀI GIẢNG CHI TIẾT',
        blocks: [
          {
            blockNumber: '01',
            type: 'rule',
            badgeTitle: 'CÔNG THỨC & QUY TẮC',
            title: "Quy tắc thêm dấu sở hữu cách ('s hoặc ')",
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'Danh từ số ít:' },
                  { type: 'text', content: ' Thêm ' },
                  { type: 'badge', content: "'s" },
                  { type: 'text', content: ' sau danh từ (kể cả tên riêng kết thúc bằng -s) (ví dụ: ' },
                  { type: 'pill', content: "the manager's desk, James's presentation" },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Danh từ số nhiều có đuôi "-s":' },
                  { type: 'text', content: ' Chỉ thêm ' },
                  { type: 'badge', content: "dấu phẩy trên (')" },
                  { type: 'text', content: ' sau chữ s (ví dụ: ' },
                  { type: 'pill', content: "the employees' feedback, parents' house" },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Danh từ số nhiều bất quy tắc (không tận cùng bằng "-s"):' },
                  { type: 'text', content: ' Thêm ' },
                  { type: 'badge', content: "'s" },
                  { type: 'text', content: ' bình thường (ví dụ: ' },
                  { type: 'pill', content: "children's books, men's clothing, people's choices" },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          },
          {
            blockNumber: '02',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: 'Sở hữu cách đứng độc lập (không kèm danh từ theo sau)',
            rows: [
              {
                segments: [
                  { type: 'text', content: 'Khi danh từ bị sở hữu đã được đề cập rõ ràng phía trước để tránh lặp từ (ví dụ: ' },
                  { type: 'pill', content: "Whose badge is this? - It's Amanda's" },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: 'Khi chỉ địa điểm làm việc, phòng khám, cửa hàng (ví dụ: ' },
                  { type: 'pill', content: "the doctor's, the chemist's" },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          },
          {
            blockNumber: '03',
            type: 'rule',
            badgeTitle: 'CÔNG THỨC & QUY TẮC',
            title: 'Phân biệt Sở hữu cách (\'s) và cấu trúc "of + Danh từ"',
            rows: [
              {
                segments: [
                  { type: 'text', content: 'Dùng ' },
                  { type: 'badge', content: "'s / '" },
                  { type: 'text', content: ' cho người và động vật (ví dụ: ' },
                  { type: 'pill', content: "Mr. Miller's office" },
                  { type: 'text', content: ' , không nói ' },
                  { type: 'pill', content: 'the office of Mr. Miller' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: 'Dùng cấu trúc ' },
                  { type: 'badge', content: 'of + Danh từ' },
                  { type: 'text', content: ' cho đồ vật, địa điểm, sự việc (ví dụ: ' },
                  { type: 'pill', content: 'the end of the hallway, the center of Madrid, the size of the screen' },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'lesson-2-3',
        lessonNumber: '2.3',
        title: 'Tính từ sở hữu và Đại từ sở hữu (Possessive Adjectives & Pronouns)',
        heroBadge: 'TRỌNG TÂM NGỮ PHÁP · BÀI GIẢNG CHI TIẾT',
        blocks: [
          {
            blockNumber: '01',
            type: 'exception',
            badgeTitle: 'BẤT QUY TẮC CẦN NHỚ',
            title: 'Bảng phân loại Đại từ & Tính từ sở hữu',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'Tính từ sở hữu (Possessive Adjectives):' },
                  { type: 'pill', content: 'my, your, his, her, its, our, their' },
                  { type: 'text', content: ' .' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Đại từ sở hữu (Possessive Pronouns):' },
                  { type: 'pill', content: 'mine, yours, his, hers, ours, theirs' },
                  { type: 'text', content: ' .' }
                ]
              }
            ]
          },
          {
            blockNumber: '02',
            type: 'rule',
            badgeTitle: 'CÔNG THỨC & QUY TẮC',
            title: 'Quy tắc xác định vị trí và chức năng',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'Tính từ sở hữu:' },
                  { type: 'text', content: ' Luôn đứng ' },
                  { type: 'badge', content: 'trước danh từ' },
                  { type: 'text', content: ' để bổ nghĩa và chỉ quyền sở hữu (Công thức: ' },
                  { type: 'badge', content: 'TTSH + Danh từ' },
                  { type: 'text', content: ' ). Ví dụ: ' },
                  { type: 'badge', content: 'their' },
                  { type: 'pill', content: 'proposal,' },
                  { type: 'badge', content: 'her' },
                  { type: 'pill', content: 'presentation' },
                  { type: 'text', content: ' .' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Đại từ sở hữu:' },
                  { type: 'text', content: ' Đứng ' },
                  { type: 'badge', content: 'độc lập một mình' },
                  { type: 'text', content: ' (không có danh từ theo sau) để thay thế cho cả cụm [Tính từ sở hữu + Danh từ] nhằm tránh lặp từ đã nêu phía trước (Ví dụ: ' },
                  { type: 'pill', content: 'Your laptop is fast, but' },
                  { type: 'badge', content: 'mine' },
                  { type: 'pill', content: 'is slow ➔ mine = my laptop' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Từ để hỏi về sở hữu:' },
                  { type: 'pill', content: 'Whose + Danh từ' },
                  { type: 'text', content: ' (Ví dụ: ' },
                  { type: 'pill', content: 'Whose phone is this?' },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          },
          {
            blockNumber: '03',
            type: 'highlight',
            badgeTitle: 'CẢNH BÁO BẪY ĐỀ THI',
            title: 'Lưu ý tránh bẫy đề thi',
            rows: [
              {
                segments: [
                  { type: 'text', content: 'Phân biệt ' },
                  { type: 'badge', content: 'its' },
                  { type: 'text', content: ' (tính từ sở hữu: ' },
                  { type: 'pill', content: 'của nó' },
                  { type: 'text', content: ' ) và ' },
                  { type: 'badge', content: "it's" },
                  { type: 'text', content: ' (viết tắt của ' },
                  { type: 'pill', content: 'it is / it has' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: 'Tuyệt đối ' },
                  { type: 'badge', content: "không thêm dấu phẩy sở hữu (')" },
                  { type: 'text', content: ' vào các đại từ sở hữu (viết đúng: ' },
                  { type: 'pill', content: 'hers, theirs, yours' },
                  { type: 'text', content: ' ; không viết ' },
                  { type: 'pill', content: "her's, their's" },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'lesson-2-4',
        lessonNumber: '2.4',
        title: 'Đại từ và Tính từ chỉ định (This, That, These, Those)',
        heroBadge: 'TRỌNG TÂM NGỮ PHÁP · BÀI GIẢNG CHI TIẾT',
        blocks: [
          {
            blockNumber: '01',
            type: 'exception',
            badgeTitle: 'BẤT QUY TẮC CẦN NHỚ',
            title: 'Phân loại theo Số lượng và Khoảng cách',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'Dành cho Danh từ Số ít / Đại từ số ít (Đi với Động từ số ít):' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'THIS (Cái này / Người này):' },
                  { type: 'text', content: ' Chỉ đối tượng ở gần người nói về không gian hoặc thời điểm hiện tại/sắp tới (ví dụ: ' },
                  { type: 'pill', content: 'this report, this morning' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'THAT (Cái kia / Người kia):' },
                  { type: 'text', content: ' Chỉ đối tượng ở xa người nói về không gian hoặc sự việc đã qua trong quá khứ (ví dụ: ' },
                  { type: 'pill', content: 'that building over there, that meeting yesterday' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Dành cho Danh từ Số nhiều / Đại từ số nhiều (Đi với Động từ số nhiều):' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'THESE (Những cái này / Những người này):' },
                  { type: 'text', content: ' Chỉ nhiều đối tượng ở gần hoặc hiện tại (ví dụ: ' },
                  { type: 'pill', content: 'these documents, these days' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'THOSE (Những cái kia / Những người kia):' },
                  { type: 'text', content: ' Chỉ nhiều đối tượng ở xa hoặc trong quá khứ (ví dụ: ' },
                  { type: 'pill', content: 'those files on the top shelf, in those days' },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          },
          {
            blockNumber: '02',
            type: 'exception',
            badgeTitle: 'BẤT QUY TẮC CẦN NHỚ',
            title: 'Ứng dụng đặc biệt trong giao tiếp và đề thi',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'Giới thiệu người:' },
                  { type: 'pill', content: 'Peter, this is Jane.' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Giao tiếp qua điện thoại:' },
                  { type: 'text', content: ' Tự giới thiệu bản thân dùng ' },
                  { type: 'pill', content: '"This is [Name] speaking"' },
                  { type: 'text', content: ' ; hỏi người ở đầu dây bên kia dùng ' },
                  { type: 'pill', content: '"Is that [Name]?"' },
                  { type: 'text', content: ' .' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Cấu trúc phổ biến:' },
                  { type: 'pill', content: 'Those who...' },
                  { type: 'text', content: ' (Những người mà...).' }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'lesson-2-5',
        lessonNumber: '2.5',
        title: 'Đại từ phản thân (Reflexive Pronouns) và Cụm từ Each other',
        heroBadge: 'TRỌNG TÂM NGỮ PHÁP · BÀI GIẢNG CHI TIẾT',
        blocks: [
          {
            blockNumber: '01',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: 'Hệ thống Đại từ phản thân',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'Số ít:' },
                  { type: 'pill', content: 'myself, yourself, himself, herself, itself' },
                  { type: 'text', content: ' .' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Số nhiều:' },
                  { type: 'pill', content: 'yourselves, ourselves, themselves' },
                  { type: 'text', content: ' .' }
                ]
              }
            ]
          },
          {
            blockNumber: '02',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: 'Các trường hợp sử dụng Đại từ phản thân',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'Khi Chủ ngữ và Tân ngữ là cùng một người/vật:' },
                  { type: 'text', content: ' Hành động tác động ngược lại chính bản thân chủ thể (ví dụ: ' },
                  { type: 'pill', content: 'Daniel painted' },
                  { type: 'badge', content: 'himself' },
                  { type: 'text', content: ' ; ' },
                  { type: 'pill', content: 'The machine turns' },
                  { type: 'badge', content: 'itself' },
                  { type: 'badge', content: 'off' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Cấu trúc "by + Đại từ phản thân" (= alone / without help):' },
                  { type: 'text', content: ' Diễn tả hành động tự mình làm mà không cần người khác giúp đỡ (ví dụ: ' },
                  { type: 'pill', content: 'She finished the report' },
                  { type: 'badge', content: 'by herself' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Nhấn mạnh chủ ngữ (Emphatic pronoun):' },
                  { type: 'text', content: ' Đứng ngay sau chủ ngữ hoặc ở cuối câu để nhấn mạnh chính đối tượng đó đích thân làm (ví dụ: ' },
                  { type: 'pill', content: 'The director' },
                  { type: 'badge', content: 'himself' },
                  { type: 'pill', content: 'attended the meeting' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Các cụm cố định thông dụng:' },
                  { type: 'pill', content: 'help yourself to...' },
                  { type: 'text', content: ' (cứ tự nhiên dùng...), ' },
                  { type: 'pill', content: 'enjoy oneself' },
                  { type: 'text', content: ' (vui vẻ).' }
                ]
              }
            ]
          },
          {
            blockNumber: '03',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: 'Phân biệt với "EACH OTHER" (Lẫn nhau)',
            rows: [
              {
                segments: [
                  { type: 'text', content: 'Dùng ' },
                  { type: 'pill', content: 'each other' },
                  { type: 'text', content: ' khi có ' },
                  { type: 'badge', content: 'tác động qua lại giữa hai hoặc nhiều đối tượng' },
                  { type: 'text', content: ' (A tác động lên B và B tác động lên A) (ví dụ: ' },
                  { type: 'pill', content: 'They call' },
                  { type: 'badge', content: 'each other' },
                  { type: 'pill', content: 'every day; The two firms support' },
                  { type: 'badge', content: 'each other' },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'lesson-2-6',
        lessonNumber: '2.6',
        title: 'Đại từ bất định (Indefinite Pronouns)',
        heroBadge: 'TRỌNG TÂM NGỮ PHÁP · BÀI GIẢNG CHI TIẾT',
        blocks: [
          {
            blockNumber: '01',
            type: 'exception',
            badgeTitle: 'BẤT QUY TẮC CẦN NHỚ',
            title: 'Bảng phân loại Đại từ bất định',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'Chỉ Người:' },
                  { type: 'pill', content: 'someone/somebody, anyone/anybody, everyone/everybody, no one/nobody' },
                  { type: 'text', content: ' .' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Chỉ Vật:' },
                  { type: 'pill', content: 'something, anything, everything, nothing' },
                  { type: 'text', content: ' .' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Chỉ Nơi chốn:' },
                  { type: 'pill', content: 'somewhere, anywhere, everywhere, nowhere' },
                  { type: 'text', content: ' .' }
                ]
              }
            ]
          },
          {
            blockNumber: '02',
            type: 'rule',
            badgeTitle: 'CÔNG THỨC & QUY TẮC',
            title: 'Quy tắc hòa hợp Chủ ngữ - Động từ (QUAN TRỌNG NHẤT)',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'TẤT CẢ' },
                  { type: 'text', content: ' các đại từ bất định khi làm chủ ngữ trong câu đều luôn đi với ' },
                  { type: 'badge', content: 'ĐỘNG TỪ SỐ ÍT' },
                  { type: 'text', content: ' ( ' },
                  { type: 'pill', content: 'is, was, has, V-s/es' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: 'Ví dụ: ' },
                  { type: 'pill', content: 'Everybody' },
                  { type: 'badge', content: 'makes' },
                  { type: 'pill', content: 'mistakes' },
                  { type: 'text', content: ' ; ' },
                  { type: 'pill', content: 'Everything' },
                  { type: 'badge', content: 'is' },
                  { type: 'pill', content: 'ready' },
                  { type: 'text', content: ' ; ' },
                  { type: 'pill', content: 'Nobody' },
                  { type: 'badge', content: 'knows' },
                  { type: 'pill', content: 'the answer' },
                  { type: 'text', content: ' .' }
                ]
              }
            ]
          },
          {
            blockNumber: '03',
            type: 'rule',
            badgeTitle: 'CÔNG THỨC & QUY TẮC',
            title: 'Quy tắc sử dụng theo loại câu',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'Nhóm Some- (someone, something, somewhere):' },
                  { type: 'text', content: ' Dùng trong câu ' },
                  { type: 'badge', content: 'khẳng định' },
                  { type: 'text', content: ' , hoặc câu hỏi là ' },
                  { type: 'badge', content: 'lời mời / đề nghị / yêu cầu lịch sự' },
                  { type: 'text', content: ' (ví dụ: ' },
                  { type: 'pill', content: 'Would you like something to eat?' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Nhóm Any- (anyone, anything, anywhere):' },
                  { type: 'text', content: ' Dùng trong câu ' },
                  { type: 'badge', content: 'phủ định' },
                  { type: 'text', content: ' (có ' },
                  { type: 'pill', content: 'not' },
                  { type: 'text', content: ' ) và ' },
                  { type: 'badge', content: 'câu hỏi nghi vấn thông thường' },
                  { type: 'text', content: ' (ví dụ: ' },
                  { type: 'pill', content: 'Did you see anyone?' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Nhóm No- (no one, nothing, nowhere):' },
                  { type: 'text', content: ' Bản thân từ đã mang nghĩa phủ định, nên động từ theo sau phải ở dạng ' },
                  { type: 'badge', content: 'khẳng định' },
                  { type: 'text', content: ' (Tuyệt đối không dùng phủ định kép: ' },
                  { type: 'pill', content: 'Nobody was there' },
                  { type: 'text', content: ' , không dùng ' },
                  { type: 'pill', content: "Nobody wasn't there" },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'lesson-2-7',
        lessonNumber: '2.7',
        title: 'Đại từ thay thế One, Ones và Cụm từ Another one',
        heroBadge: 'TRỌNG TÂM NGỮ PHÁP · BÀI GIẢNG CHI TIẾT',
        blocks: [
          {
            blockNumber: '01',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: 'Phân biệt ONE và ONES',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'ONE:' },
                  { type: 'text', content: ' Thay thế cho một ' },
                  { type: 'badge', content: 'danh từ đếm được số ít' },
                  { type: 'text', content: ' . Cấu trúc: ' },
                  { type: 'pill', content: 'a / an / the / this / that + (Tính từ) + ONE' },
                  { type: 'text', content: ' (ví dụ: ' },
                  { type: 'pill', content: "I don't like this laptop; I prefer the lighter" },
                  { type: 'badge', content: 'one' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'ONES:' },
                  { type: 'text', content: ' Thay thế cho ' },
                  { type: 'badge', content: 'danh từ đếm được số nhiều' },
                  { type: 'text', content: ' . Cấu trúc: ' },
                  { type: 'pill', content: 'the / these / those / some + (Tính từ) + ONES' },
                  { type: 'text', content: ' (ví dụ: ' },
                  { type: 'pill', content: 'These monitors are old, but those' },
                  { type: 'badge', content: 'ones' },
                  { type: 'pill', content: 'are new' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Từ để hỏi:' },
                  { type: 'text', content: ' Dùng ' },
                  { type: 'pill', content: 'Which one?' },
                  { type: 'text', content: ' (chọn 1 cái) hoặc ' },
                  { type: 'pill', content: 'Which ones?' },
                  { type: 'text', content: ' (chọn nhiều cái).' }
                ]
              }
            ]
          },
          {
            blockNumber: '02',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: 'Cụm từ "ANOTHER ONE"',
            rows: [
              {
                segments: [
                  { type: 'text', content: 'Dùng để chỉ ' },
                  { type: 'badge', content: 'thêm một cái nữa' },
                  { type: 'text', content: ' (an extra thing) (ví dụ: ' },
                  { type: 'pill', content: 'Can I get' },
                  { type: 'badge', content: 'another one' },
                  { type: 'pill', content: '?' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: 'Dùng để chỉ ' },
                  { type: 'badge', content: 'một cái khác' },
                  { type: 'text', content: ' thay thế (a different thing) (ví dụ: ' },
                  { type: 'pill', content: 'This device is faulty; please provide' },
                  { type: 'badge', content: 'another one' },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'topic-03',
    topicNumber: '03',
    title: 'Giới từ',
    lessonCount: 7,
    lessons: [
      {
        id: 'lesson-3-1',
        lessonNumber: '3.1',
        title: 'Giới từ chỉ nơi chốn (Prepositions of Place - Phần 1)',
        heroBadge: 'TRỌNG TÂM NGỮ PHÁP · BÀI GIẢNG CHI TIẾT',
        blocks: [
          {
            blockNumber: '01',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: 'Ba giới từ cốt lõi: AT - IN - ON',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'AT (Tại một điểm cụ thể / Nơi chốn công cộng / Nơi làm việc):' },
                  { type: 'pill', content: 'at the door, at her desk, at the top of the page, at work, at the office, at the station' },
                  { type: 'text', content: ' .' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'IN (Bên trong không gian kín / Thành phố / Quốc gia / Châu lục):' },
                  { type: 'pill', content: 'in the cupboard, in the room, in the building, in Tokyo, in France, in Europe' },
                  { type: 'text', content: ' .' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'ON (Trên bề mặt tiếp xúc):' },
                  { type: 'pill', content: 'on the desk, on the wall, on the second floor, on the screen' },
                  { type: 'text', content: ' .' }
                ]
              }
            ]
          },
          {
            blockNumber: '02',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: 'Các giới từ chỉ vị trí tương đối thông dụng',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'Above (Phía trên - không tiếp xúc bề mặt):' },
                  { type: 'text', content: ' Vị trí cao hơn một vật khác (ví dụ: ' },
                  { type: 'pill', content: 'a poster above the desk' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Under (Ở dưới / Bị che phủ):' },
                  { type: 'text', content: ' Ngay bên dưới một vật khác (ví dụ: ' },
                  { type: 'pill', content: 'under the desk, under the bed' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Below (Thấp hơn về vị trí):' },
                  { type: 'text', content: ' Thấp hơn một mốc tham chiếu (ví dụ: ' },
                  { type: 'pill', content: 'below the stairs, below the clock' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Next to / Beside / By (Ngay bên cạnh):' },
                  { type: 'text', content: ' Tiếp giáp một bên (ví dụ: ' },
                  { type: 'pill', content: 'next to the door, beside the printer' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Near (Gần):' },
                  { type: 'text', content: ' Khoảng cách không xa, không đi kèm "to" (ví dụ: ' },
                  { type: 'pill', content: 'near the station' },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'lesson-3-2',
        lessonNumber: '3.2',
        title: 'Giới từ chỉ vị trí và Bố cục không gian (Prepositions of Place - Phần 2)',
        heroBadge: 'TRỌNG TÂM NGỮ PHÁP · BÀI GIẢNG CHI TIẾT',
        blocks: [
          {
            blockNumber: '01',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: 'Nhóm giới từ chỉ vị trí tương quan',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'In front of (Ở phía trước):' },
                  { type: 'pill', content: 'There is a fountain in front of the building.' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Behind (Ở phía sau):' },
                  { type: 'text', content: ' Đối nghĩa với ' },
                  { type: 'pill', content: 'in front of' },
                  { type: 'text', content: ' (ví dụ: ' },
                  { type: 'pill', content: 'The parking lot is behind the office' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Opposite (Đối diện):' },
                  { type: 'text', content: ' Chỉ hai đối tượng đối mặt nhau hoặc ở hai bên đường. ' },
                  { type: 'badge', content: 'Bẫy đề thi:' },
                  { type: 'text', content: ' Dùng trực tiếp ' },
                  { type: 'pill', content: 'opposite + Noun' },
                  { type: 'text', content: ' , ' },
                  { type: 'badge', content: 'không dùng' },
                  { type: 'pill', content: 'opposite to' },
                  { type: 'text', content: ' .' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Between ... and ... (Ở giữa hai đối tượng):' },
                  { type: 'text', content: ' Luôn đi kèm cặp liên từ ' },
                  { type: 'badge', content: 'and' },
                  { type: 'text', content: ' (ví dụ: ' },
                  { type: 'pill', content: 'between Room A and Room B' },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          },
          {
            blockNumber: '02',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: 'Cụm từ cố định miêu tả bố cục / vị trí trong phòng',
            rows: [
              {
                segments: [
                  { type: 'pill', content: 'at the front / at the back' },
                  { type: 'text', content: ' : ở phía trước / ở phía sau (của hội trường, khán phòng).' }
                ]
              },
              {
                segments: [
                  { type: 'pill', content: 'on the left / on the right' },
                  { type: 'text', content: ' : ở phía bên tay trái / bên tay phải.' }
                ]
              },
              {
                segments: [
                  { type: 'pill', content: 'in the centre / in the middle' },
                  { type: 'text', content: ' : ở chính giữa / ở vị trí trung tâm.' }
                ]
              },
              {
                segments: [
                  { type: 'pill', content: 'at the top / at the bottom' },
                  { type: 'text', content: ' : ở trên đỉnh, đầu trang / ở dưới đáy trang, chân sơ đồ.' }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'lesson-3-3',
        lessonNumber: '3.3',
        title: 'Giới từ chỉ sự chuyển động (Prepositions of Movement)',
        heroBadge: 'TRỌNG TÂM NGỮ PHÁP · BÀI GIẢNG CHI TIẾT',
        blocks: [
          {
            blockNumber: '01',
            type: 'highlight',
            badgeTitle: 'ĐIỂN NHẤN KIẾN THỨC',
            title: 'Nhóm giới từ chỉ quỹ đạo di chuyển trong không gian',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'Along (Dọc theo):' },
                  { type: 'text', content: ' Di chuyển song song theo chiều dài của con đường, hành lang, bờ sông (ví dụ: ' },
                  { type: 'pill', content: 'walk along the path / corridor' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Through (Xuyên qua):' },
                  { type: 'text', content: ' Chuyển động đi xuyên qua một không gian 3 chiều kín, cửa ra vào, cổng kiểm soát hoặc đường hầm (ví dụ: ' },
                  { type: 'pill', content: 'go through the gate, go through the tunnel' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Across / Over (Băng qua / Vượt qua):' },
                  { type: 'text', content: ' Đi từ bờ bên này sang bờ bên kia của đường phố hoặc cây cầu (ví dụ: ' },
                  { type: 'pill', content: 'walk across the street, go over the bridge' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Past (Đi ngang qua):' },
                  { type: 'text', content: ' Vượt qua một mốc địa điểm trên đường đi (ví dụ: ' },
                  { type: 'pill', content: 'go past the post office' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Round / Around (Vòng quanh):' },
                  { type: 'text', content: ' Chuyển động vòng quanh một vật thể (ví dụ: ' },
                  { type: 'pill', content: 'walk around the building' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'From ... To ... (Từ... đến...):' },
                  { type: 'text', content: ' Điểm xuất phát đến điểm đích (ví dụ: ' },
                  { type: 'pill', content: 'travel from Tokyo to London' },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          },
          {
            blockNumber: '02',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: 'Nhóm giới từ Vào - Ra / Lên - Xuống bề mặt',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'Into / Out of:' },
                  { type: 'text', content: ' Chuyển động đi vào bên trong / ra khỏi một không gian kín ( ' },
                  { type: 'pill', content: 'go into the room, take out of the bag' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Onto / Off:' },
                  { type: 'text', content: ' Chuyển động nhảy/bước lên trên bề mặt / rơi, rời khỏi bề mặt ( ' },
                  { type: 'pill', content: 'jump onto the stage, fall off the desk' },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          },
          {
            blockNumber: '03',
            type: 'highlight',
            badgeTitle: 'CẢNH BÁO BẪY ĐỀ THI',
            title: 'Quy tắc đặc biệt với Phương tiện giao thông',
            rows: [
              {
                segments: [
                  { type: 'text', content: 'Ô tô, taxi: Dùng ' },
                  { type: 'badge', content: 'get into / get out of' },
                  { type: 'text', content: ' ( ' },
                  { type: 'pill', content: 'get into a car / taxi' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: 'Xe buýt, tàu hỏa, máy bay, tàu thủy, xe máy: Dùng ' },
                  { type: 'badge', content: 'get on / get off' },
                  { type: 'text', content: ' ( ' },
                  { type: 'pill', content: 'get on the bus, get off the train / plane' },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'lesson-3-4',
        lessonNumber: '3.4',
        title: 'Giới từ chỉ thời gian (Prepositions of Time - Phần 1)',
        heroBadge: 'TRỌNG TÂM NGỮ PHÁP · BÀI GIẢNG CHI TIẾT',
        blocks: [
          {
            blockNumber: '01',
            type: 'rule',
            badgeTitle: 'CÔNG THỨC & QUY TẮC',
            title: 'Bộ ba quy tắc vàng: AT - IN - ON',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'AT (Thời điểm chính xác & Ngắn):' },
                  { type: 'text', content: ' Giờ giấc cụ thể ( ' },
                  { type: 'pill', content: 'at 6.00, at 9:30 AM' },
                  { type: 'text', content: ' ), bữa ăn ( ' },
                  { type: 'pill', content: 'at lunchtime' },
                  { type: 'text', content: ' ), các dịp lễ/cuối tuần ( ' },
                  { type: 'pill', content: 'at the weekend, at Christmas' },
                  { type: 'text', content: ' ), buổi đêm ( ' },
                  { type: 'pill', content: 'at night' },
                  { type: 'text', content: ' - KHÔNG dùng ' },
                  { type: 'pill', content: 'in the night' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'ON (Ngày & Thứ):' },
                  { type: 'text', content: ' Các thứ trong tuần ( ' },
                  { type: 'pill', content: 'on Monday, on Thursday afternoon' },
                  { type: 'text', content: ' ), ngày tháng cụ thể ( ' },
                  { type: 'pill', content: 'on 5 May, on October 15' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'IN (Khoảng thời gian dài & Buổi trong ngày):' },
                  { type: 'text', content: ' Các buổi trong ngày ( ' },
                  { type: 'pill', content: 'in the morning, in the afternoon, in the evening' },
                  { type: 'text', content: ' ), tháng, mùa, năm, thế kỷ ( ' },
                  { type: 'pill', content: 'in May, in summer, in 2024, in the 21st century' },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          },
          {
            blockNumber: '02',
            type: 'highlight',
            badgeTitle: 'CẢNH BÁO BẪY ĐỀ THI',
            title: 'Trường hợp KHÔNG DÙNG giới từ (Zero Preposition)',
            rows: [
              {
                segments: [
                  { type: 'text', content: 'Tuyệt đối không dùng ' },
                  { type: 'pill', content: 'at, in, on' },
                  { type: 'text', content: ' trước các từ chỉ định: ' },
                  { type: 'bold', content: 'this, last, next, every' },
                  { type: 'text', content: ' (ví dụ: ' },
                  { type: 'pill', content: 'next Tuesday, last month, every morning' },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          },
          {
            blockNumber: '03',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: 'Các giới từ thời gian mở rộng',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'In + khoảng thời gian:' },
                  { type: 'text', content: ' Diễn tả hành động xảy ra sau bao lâu nữa trong tương lai (ví dụ: ' },
                  { type: 'pill', content: 'in five days' },
                  { type: 'text', content: ' = 5 ngày nữa).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Until (Cho đến khi):' },
                  { type: 'text', content: ' Chỉ một hành động kéo dài liên tục đến một mốc thời gian thì chấm dứt (ví dụ: ' },
                  { type: 'pill', content: 'continues until 27 May' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'From ... to / until ...:' },
                  { type: 'text', content: ' Kéo dài từ mốc thời gian này đến mốc thời gian khác.' }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'lesson-3-5',
        lessonNumber: '3.5',
        title: 'Giới từ chỉ thời gian (Prepositions of Time - Phần 2)',
        heroBadge: 'TRỌNG TÂM NGỮ PHÁP · BÀI GIẢNG CHI TIẾT',
        blocks: [
          {
            blockNumber: '01',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: 'Nhóm Before (Trước) và After (Sau)',
            rows: [
              {
                segments: [
                  { type: 'text', content: 'Dùng với ' },
                  { type: 'badge', content: 'mốc giờ cụ thể:' },
                  { type: 'pill', content: 'before 5:00 PM, after 9:30 AM' },
                  { type: 'text', content: ' .' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: 'Dùng với ' },
                  { type: 'badge', content: 'sự kiện / hoàn cảnh:' },
                  { type: 'pill', content: 'before the film, after work, after dinner' },
                  { type: 'text', content: ' .' }
                ]
              }
            ]
          },
          {
            blockNumber: '02',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: 'Phân biệt bộ ba cực kỳ quan trọng trong đề thi: BY - FOR - DURING',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'BY + Mốc thời gian (Deadline / Hạn chót):' },
                  { type: 'text', content: ' Mang nghĩa là "muộn nhất vào lúc..." hoặc "trước một thời điểm nào đó" (ví dụ: ' },
                  { type: 'pill', content: 'by Friday, by 30 April, by the end of the month' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'FOR + Khoảng thời gian (Duration):' },
                  { type: 'text', content: ' Diễn tả một hành động kéo dài suốt một khoảng thời gian bao lâu, thường đi kèm ' },
                  { type: 'badge', content: 'số lượng thời gian cụ thể' },
                  { type: 'text', content: ' (ví dụ: ' },
                  { type: 'pill', content: 'for an hour, for two days, for three weeks, for five years' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'DURING + Danh từ chỉ sự kiện / Giai đoạn (Event):' },
                  { type: 'text', content: ' Diễn tả hành động diễn ra "trong suốt sự kiện hoặc quá trình" nào đó (ví dụ: ' },
                  { type: 'pill', content: 'during the flight, during the meeting, during the presentation, during the winter' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Bẫy đề thi:' },
                  { type: 'text', content: ' Tuyệt đối KHÔNG dùng ' },
                  { type: 'pill', content: 'during' },
                  { type: 'text', content: ' đi kèm khoảng thời gian có số đếm (dùng ' },
                  { type: 'pill', content: 'for two weeks' },
                  { type: 'text', content: ' , KHÔNG dùng ' },
                  { type: 'pill', content: 'during two weeks' },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'lesson-3-6',
        lessonNumber: '3.6',
        title: 'Giới từ với các nét nghĩa mở rộng (By, With, As, Like)',
        heroBadge: 'TRỌNG TÂM NGỮ PHÁP · BÀI GIẢNG CHI TIẾT',
        blocks: [
          {
            blockNumber: '01',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: 'Giới từ BY',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'Phương tiện đi lại:' },
                  { type: 'pill', content: 'by bus, by train, by car, by plane' },
                  { type: 'text', content: ' . ' },
                  { type: 'badge', content: 'Lưu ý ngoại lệ:' },
                  { type: 'text', content: ' Đi bộ dùng ' },
                  { type: 'badge', content: 'on foot' },
                  { type: 'text', content: ' (KHÔNG dùng ' },
                  { type: 'pill', content: 'by foot' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Phương thức liên lạc / Thanh toán:' },
                  { type: 'pill', content: 'by email, by phone, by credit card' },
                  { type: 'text', content: ' (nhưng thanh toán tiền mặt dùng ' },
                  { type: 'pill', content: 'in cash / by cash' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Tác nhân trong câu bị động / Tác giả:' },
                  { type: 'pill', content: 'written by Shakespeare, designed by our team' },
                  { type: 'text', content: ' .' }
                ]
              }
            ]
          },
          {
            blockNumber: '02',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: 'Giới từ WITH',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'Nghĩa là "cùng với" (Đồng hành):' },
                  { type: 'pill', content: 'go with colleagues, meet with clients' },
                  { type: 'text', content: ' .' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Chỉ công cụ / Phương tiện thực hiện hành động:' },
                  { type: 'pill', content: 'cut with scissors, write with a pen, push open with his foot' },
                  { type: 'text', content: ' .' }
                ]
              }
            ]
          },
          {
            blockNumber: '03',
            type: 'highlight',
            badgeTitle: 'CẢNH BÁO BẪY ĐỀ THI',
            title: 'Phân biệt AS và LIKE (Bẫy đề thi kinh điển)',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'AS (Với tư cách là / Vai trò / Chức danh thực tế):' },
                  { type: 'text', content: ' Dùng khi nói về nghề nghiệp thật sự hoặc công năng chính thức (cấu trúc: ' },
                  { type: 'pill', content: 'work as a manager, serve as a guideline' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'LIKE (Giống như - So sánh tương đồng):' },
                  { type: 'text', content: ' Mang nghĩa là "tương tự như", dùng để so sánh hình thức, vẻ bề ngoài chứ không phải bản chất thật (ví dụ: ' },
                  { type: 'pill', content: 'looks like a new car, smells like coffee' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Lưu ý:' },
                  { type: 'text', content: ' Tuyệt đối KHÔNG dùng ' },
                  { type: 'pill', content: 'like' },
                  { type: 'text', content: ' để chỉ nghề nghiệp (dùng ' },
                  { type: 'pill', content: 'works as a builder' },
                  { type: 'text', content: ' , không dùng ' },
                  { type: 'pill', content: 'works like a builder' },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'lesson-3-7',
        lessonNumber: '3.7',
        title: 'Các cụm giới từ cố định thông dụng (Common Phrases with Prepositions)',
        heroBadge: 'TRỌNG TÂM NGỮ PHÁP · BÀI GIẢNG CHI TIẾT',
        blocks: [
          {
            blockNumber: '01',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: 'Cụm giới từ chỉ Nơi chốn & Mục đích',
            rows: [
              {
                segments: [
                  { type: 'pill', content: 'at home, at work, at school' },
                  { type: 'text', content: ' (Lưu ý: ' },
                  { type: 'pill', content: 'go home' },
                  { type: 'text', content: ' không dùng giới từ ' },
                  { type: 'pill', content: 'to' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'pill', content: 'on business' },
                  { type: 'text', content: ' (đi công tác), ' },
                  { type: 'pill', content: 'on holiday' },
                  { type: 'text', content: ' (đi nghỉ mát).' }
                ]
              }
            ]
          },
          {
            blockNumber: '02',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: 'Cụm giới từ chỉ Thời gian & Tình huống',
            rows: [
              {
                segments: [
                  { type: 'pill', content: 'at first' },
                  { type: 'text', content: ' (ban đầu), ' },
                  { type: 'pill', content: 'at last' },
                  { type: 'text', content: ' (cuối cùng), ' },
                  { type: 'pill', content: 'at once' },
                  { type: 'text', content: ' (ngay lập tức), ' },
                  { type: 'pill', content: 'at the same time' },
                  { type: 'text', content: ' (đồng thời).' }
                ]
              },
              {
                segments: [
                  { type: 'pill', content: 'in a hurry' },
                  { type: 'text', content: ' (vội vã), ' },
                  { type: 'pill', content: 'in the end' },
                  { type: 'text', content: ' (rốt cuộc, kết cục).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Phân biệt ON TIME và IN TIME:' },
                  { type: 'text', content: ' ' },
                  { type: 'pill', content: 'on time' },
                  { type: 'text', content: ' = đúng giờ theo lịch trình ấn định; ' },
                  { type: 'pill', content: 'in time (for)' },
                  { type: 'text', content: ' = vừa kịp lúc để làm điều gì trước khi quá muộn.' }
                ]
              }
            ]
          },
          {
            blockNumber: '03',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: 'Các cụm giới từ chỉ Trạng thái & Tính chất khác',
            rows: [
              {
                segments: [
                  { type: 'pill', content: 'by chance' },
                  { type: 'text', content: ' (tình cờ), ' },
                  { type: 'pill', content: 'by mistake' },
                  { type: 'text', content: ' (do sơ suất, nhầm lẫn).' }
                ]
              },
              {
                segments: [
                  { type: 'pill', content: 'in public' },
                  { type: 'text', content: ' (ở nơi công cộng), ' },
                  { type: 'pill', content: 'in private' },
                  { type: 'text', content: ' (riêng tư, kín đáo).' }
                ]
              },
              {
                segments: [
                  { type: 'pill', content: 'on purpose' },
                  { type: 'text', content: ' (cố ý, có chủ đích), ' },
                  { type: 'pill', content: 'on fire' },
                  { type: 'text', content: ' (bị bốc cháy).' }
                ]
              },
              {
                segments: [
                  { type: 'pill', content: 'for sale' },
                  { type: 'text', content: ' (đang được rao bán).' }
                ]
              },
              {
                segments: [
                  { type: 'pill', content: 'out of order' },
                  { type: 'text', content: ' (bị hỏng hóc, ngưng hoạt động - dùng cho máy móc/thiết bị).' }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'topic-04',
    topicNumber: '04',
    title: 'Tính từ & Trạng từ',
    lessonCount: 10,
    lessons: [
      {
        id: 'lesson-4-1',
        lessonNumber: '4.1',
        title: 'Tính từ - Vị trí và Trật tự của Tính từ',
        heroBadge: 'TRỌNG TÂM NGỮ PHÁP · BÀI GIẢNG CHI TIẾT',
        blocks: [
          {
            blockNumber: '01',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: 'Đặc điểm hình thái của Tính từ',
            rows: [
              {
                segments: [
                  { type: 'text', content: 'Tính từ ' },
                  { type: 'badge', content: 'KHÔNG bao giờ có dạng số nhiều' },
                  { type: 'text', content: ' (không thêm ' },
                  { type: 'pill', content: '-s/-es' },
                  { type: 'text', content: ' ), ngay cả khi đứng trước danh từ số nhiều (ví dụ: ' },
                  { type: 'pill', content: 'two blue dresses' },
                  { type: 'text', content: ' , KHÔNG dùng ' },
                  { type: 'pill', content: 'two blues dresses' },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          },
          {
            blockNumber: '02',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: 'Vị trí đứng của Tính từ',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'Đứng TRƯỚC Danh từ:' },
                  { type: 'text', content: ' Bổ nghĩa trực tiếp cho danh từ (ví dụ: ' },
                  { type: 'pill', content: 'an innovative design, important documents' },
                  { type: 'text', content: ' ). Giữa hai tính từ đứng trước danh từ thường không dùng ' },
                  { type: 'pill', content: 'and' },
                  { type: 'text', content: ' .' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Đứng SAU Động từ nối (Linking Verbs):' },
                  { type: 'text', content: ' Đi sau các động từ như ' },
                  { type: 'pill', content: 'be, seem, look, appear, feel, taste, sound, become' },
                  { type: 'text', content: ' (ví dụ: ' },
                  { type: 'pill', content: 'The proposal looks promising; The candidate seems confident' },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          },
          {
            blockNumber: '03',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: 'Trật tự cơ bản khi có nhiều Tính từ trước Danh từ',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'Ý kiến/Đánh giá (Opinion):' },
                  { type: 'pill', content: 'beautiful, nice, fantastic, expensive' },
                  { type: 'text', content: ' ➔ đứng TRƯỚC các tính từ khác.' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Kích thước / Hình dáng / Màu sắc (Size / Shape / Colour):' },
                  { type: 'pill', content: 'large, square, brown' },
                  { type: 'text', content: ' .' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Nguồn gốc / Quốc tịch (Nationality/Origin):' },
                  { type: 'pill', content: 'Italian, French, Japanese' },
                  { type: 'text', content: ' .' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Chất liệu (Material):' },
                  { type: 'pill', content: 'leather, silk, cotton, wooden' },
                  { type: 'text', content: ' ➔ luôn đứng NGAY SÁT danh từ.' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: 'Ví dụ chuẩn: ' },
                  { type: 'pill', content: 'a luxurious Italian car' },
                  { type: 'text', content: ' (Ý kiến ➔ Quốc tịch), ' },
                  { type: 'pill', content: 'a red leather chair' },
                  { type: 'text', content: ' (Màu sắc ➔ Chất liệu).' }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'lesson-4-2',
        lessonNumber: '4.2',
        title: 'Phân biệt Tính từ đuôi -ED và Tính từ đuôi -ING',
        heroBadge: 'TRỌNG TÂM NGỮ PHÁP · BÀI GIẢNG CHI TIẾT',
        blocks: [
          {
            blockNumber: '01',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: 'Tính từ đuôi -ED (Our Feelings / Bị tác động)',
            rows: [
              {
                segments: [
                  { type: 'text', content: 'Dùng để diễn tả cảm xúc, tâm trạng của con người (hoặc động vật) khi nhận sự tác động từ bên ngoài (ví dụ: ' },
                  { type: 'pill', content: 'excited, interested, bored, pleased, surprised, satisfied' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: 'Thường đi theo cấu trúc: ' },
                  { type: 'pill', content: 'Chủ ngữ (người) + be / linking verb + Adj-ed + (giới từ: in, with, by, at...)' },
                  { type: 'text', content: ' .' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: 'Ví dụ: ' },
                  { type: 'pill', content: 'We are interested in your proposal; She felt tired after the trip.' }
                ]
              }
            ]
          },
          {
            blockNumber: '02',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: 'Tính từ đuôi -ING (The Thing Causing Feelings / Bản chất sự vật)',
            rows: [
              {
                segments: [
                  { type: 'text', content: 'Dùng để miêu tả đặc điểm, bản chất vốn có của sự vật, sự việc hoặc hiện tượng gây ra cảm xúc cho người khác (ví dụ: ' },
                  { type: 'pill', content: 'exciting, interesting, boring, surprising, tiring, satisfying' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: 'Thường đứng trước danh từ để bổ nghĩa ( ' },
                  { type: 'pill', content: 'an exciting match, a tiring process' },
                  { type: 'text', content: ' ) hoặc đứng sau động từ to-be khi chủ ngữ là sự vật/sự việc ( ' },
                  { type: 'pill', content: 'The presentation was interesting' },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          },
          {
            blockNumber: '03',
            type: 'rule',
            badgeTitle: 'CÔNG THỨC & QUY TẮC',
            title: 'Quy tắc ghi nhớ nhanh',
            rows: [
              {
                segments: [
                  { type: 'text', content: 'Người cảm thấy thế nào ➔ Dùng đuôi ' },
                  { type: 'badge', content: '-ED' },
                  { type: 'text', content: ' .' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: 'Sự vật/sự việc có tính chất gì ➔ Dùng đuôi ' },
                  { type: 'badge', content: '-ING' },
                  { type: 'text', content: ' .' }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'lesson-4-3',
        lessonNumber: '4.3',
        title: 'Phân loại và Cách thành lập Trạng từ (Adverbs)',
        heroBadge: 'TRỌNG TÂM NGỮ PHÁP · BÀI GIẢNG CHI TIẾT',
        blocks: [
          {
            blockNumber: '01',
            type: 'rule',
            badgeTitle: 'CÔNG THỨC & QUY TẮC',
            title: 'Quy tắc thành lập Trạng từ chỉ cách thức thông thường',
            rows: [
              {
                segments: [
                  { type: 'text', content: 'Cấu trúc chung: ' },
                  { type: 'badge', content: 'Tính từ + -ly = Trạng từ' },
                  { type: 'text', content: ' (ví dụ: ' },
                  { type: 'pill', content: 'careful ➔ carefully' },
                  { type: 'text', content: ' , ' },
                  { type: 'pill', content: 'slow ➔ slowly' },
                  { type: 'text', content: ' , ' },
                  { type: 'pill', content: 'perfect ➔ perfectly' },
                  { type: 'text', content: ' , ' },
                  { type: 'pill', content: 'bad ➔ badly' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: 'Tính từ tận cùng bằng ' },
                  { type: 'pill', content: '-y' },
                  { type: 'text', content: ' : Đổi thành ' },
                  { type: 'pill', content: '-ily' },
                  { type: 'text', content: ' (ví dụ: ' },
                  { type: 'pill', content: 'easy ➔ easily' },
                  { type: 'text', content: ' , ' },
                  { type: 'pill', content: 'happy ➔ happily' },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          },
          {
            blockNumber: '02',
            type: 'highlight',
            badgeTitle: 'CẢNH BÁO BẪY ĐỀ THI',
            title: 'Tính từ tận cùng bằng -ly (Bẫy thường gặp)',
            rows: [
              {
                segments: [
                  { type: 'text', content: 'Một số từ có đuôi ' },
                  { type: 'pill', content: '-ly' },
                  { type: 'text', content: ' nhưng thực chất là ' },
                  { type: 'badge', content: 'Tính từ' },
                  { type: 'text', content: ' , không phải trạng từ: ' },
                  { type: 'pill', content: 'friendly, lovely, costly, timely, orderly, lonely' },
                  { type: 'text', content: ' .' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: 'Để diễn đạt trạng từ cho các từ này, ta dùng cụm: ' },
                  { type: 'pill', content: 'in a friendly / timely manner (way)' },
                  { type: 'text', content: ' .' }
                ]
              }
            ]
          },
          {
            blockNumber: '03',
            type: 'exception',
            badgeTitle: 'BẤT QUY TẮC CẦN NHỚ',
            title: 'Trạng từ bất quy tắc (Không thêm đuôi -ly)',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'Giữ nguyên hình thức cho cả Tính từ và Trạng từ:' },
                  { type: 'pill', content: 'fast, hard, late, early' },
                  { type: 'text', content: ' (Tuyệt đối KHÔNG tồn tại từ ' },
                  { type: 'pill', content: 'fastly' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Lưu ý nghĩa:' },
                  { type: 'pill', content: 'hard' },
                  { type: 'text', content: ' (chăm chỉ, vất vả) khác ' },
                  { type: 'pill', content: 'hardly' },
                  { type: 'text', content: ' (hầu như không); ' },
                  { type: 'pill', content: 'late' },
                  { type: 'text', content: ' (muộn, trễ) khác ' },
                  { type: 'pill', content: 'lately' },
                  { type: 'text', content: ' (gần đây).' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: 'Cặp từ ' },
                  { type: 'pill', content: 'Good ➔ Well' },
                  { type: 'text', content: ' : ' },
                  { type: 'pill', content: 'Good' },
                  { type: 'text', content: ' là tính từ, còn ' },
                  { type: 'pill', content: 'Well' },
                  { type: 'text', content: ' là trạng từ bổ nghĩa cho hành động (ví dụ: ' },
                  { type: 'pill', content: 'She performs well' },
                  { type: 'text', content: ' , KHÔNG dùng ' },
                  { type: 'pill', content: 'performs good' },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'lesson-4-4',
        lessonNumber: '4.4',
        title: 'Trật tự và Vị trí của Trạng từ trong câu (Adverb Word Order)',
        heroBadge: 'TRỌNG TÂM NGỮ PHÁP · BÀI GIẢNG CHI TIẾT',
        blocks: [
          {
            blockNumber: '01',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: 'Vị trí 1: Trạng từ chỉ cách thức (Adverbs of Manner - carefully, quickly, well, smoothly)',
            rows: [
              {
                segments: [
                  { type: 'text', content: 'Đứng ' },
                  { type: 'badge', content: 'sau động từ' },
                  { type: 'text', content: ' nếu câu không có tân ngữ (ví dụ: ' },
                  { type: 'pill', content: 'The machine runs smoothly' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: 'Đứng ' },
                  { type: 'badge', content: 'sau tân ngữ' },
                  { type: 'text', content: ' nếu câu có cấu trúc Chủ ngữ + Động từ + Tân ngữ + Trạng từ (ví dụ: ' },
                  { type: 'pill', content: 'He plays football well' },
                  { type: 'text', content: ' ). ' },
                  { type: 'badge', content: 'Tuyệt đối KHÔNG chen trạng từ vào giữa động từ và tân ngữ' },
                  { type: 'text', content: ' (KHÔNG dùng ' },
                  { type: 'pill', content: 'He plays well football' },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          },
          {
            blockNumber: '02',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: 'Vị trí 2: Trạng từ chỉ tần suất (Adverbs of Frequency - always, usually, often, rarely, never)',
            rows: [
              {
                segments: [
                  { type: 'text', content: 'Đứng ' },
                  { type: 'badge', content: 'TRƯỚC động từ thường' },
                  { type: 'text', content: ' (ví dụ: ' },
                  { type: 'pill', content: 'We rarely attend seminars; She never eats fast food' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: 'Đứng ' },
                  { type: 'badge', content: 'SAU động từ to-be' },
                  { type: 'text', content: ' (ví dụ: ' },
                  { type: 'pill', content: 'He is always punctual' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: 'Đứng ' },
                  { type: 'badge', content: 'GIỮA trợ động từ / động từ khiếm khuyết và động từ chính' },
                  { type: 'text', content: ' theo công thức Auxiliary/Modal + Adv + Main Verb (ví dụ: ' },
                  { type: 'pill', content: 'You can easily access; We have already submitted the file' },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          },
          {
            blockNumber: '03',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: 'Vị trí 3: Trạng từ chỉ thời gian và nơi chốn',
            rows: [
              {
                segments: [
                  { type: 'text', content: 'Thường được đặt ở ' },
                  { type: 'badge', content: 'cuối câu' },
                  { type: 'text', content: ' (ví dụ: ' },
                  { type: 'pill', content: 'We hold meetings twice a month; She worked at the office yesterday' },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'lesson-4-5',
        lessonNumber: '4.5',
        title: 'Cấu trúc So sánh hơn của Tính từ (Comparative Adjectives)',
        heroBadge: 'TRỌNG TÂM NGỮ PHÁP · BÀI GIẢNG CHI TIẾT',
        blocks: [
          {
            blockNumber: '01',
            type: 'rule',
            badgeTitle: 'CÔNG THỨC & QUY TẮC',
            title: 'Quy tắc biến đổi Tính từ so sánh hơn',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'Tính từ ngắn (1 âm tiết, hoặc 2 âm tiết tận cùng bằng' },
                  { type: 'pill', content: '-y' },
                  { type: 'badge', content: '):' },
                  { type: 'text', content: ' Thêm đuôi ' },
                  { type: 'badge', content: '-er' },
                  { type: 'text', content: ' vào sau tính từ:' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: 'Thông thường: ' },
                  { type: 'pill', content: 'fast ➔ faster' },
                  { type: 'text', content: ' , ' },
                  { type: 'pill', content: 'small ➔ smaller' },
                  { type: 'text', content: ' , ' },
                  { type: 'pill', content: 'new ➔ newer' },
                  { type: 'text', content: ' .' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: 'Tận cùng là ' },
                  { type: 'pill', content: '-e' },
                  { type: 'text', content: ' : Chỉ thêm ' },
                  { type: 'pill', content: '-r' },
                  { type: 'text', content: ' ( ' },
                  { type: 'pill', content: 'late ➔ later' },
                  { type: 'text', content: ' , ' },
                  { type: 'pill', content: 'wide ➔ wider' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: '1 nguyên âm kẹp giữa 2 phụ âm: Gấp đôi phụ âm cuối rồi thêm ' },
                  { type: 'badge', content: '-er' },
                  { type: 'text', content: ' ( ' },
                  { type: 'pill', content: 'big ➔ bigger' },
                  { type: 'text', content: ' , ' },
                  { type: 'pill', content: 'hot ➔ hotter' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: 'Tận cùng là ' },
                  { type: 'pill', content: '-y' },
                  { type: 'text', content: ' : Đổi ' },
                  { type: 'pill', content: 'y ➔ i' },
                  { type: 'text', content: ' rồi thêm ' },
                  { type: 'badge', content: '-er' },
                  { type: 'text', content: ' ( ' },
                  { type: 'pill', content: 'easy ➔ easier' },
                  { type: 'text', content: ' , ' },
                  { type: 'pill', content: 'friendly ➔ friendlier' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Tính từ dài (từ 2 âm tiết trở lên không tận cùng bằng -y):' },
                  { type: 'text', content: ' Thêm ' },
                  { type: 'badge', content: 'MORE' },
                  { type: 'text', content: ' phía trước tính từ nguyên thể (ví dụ: ' },
                  { type: 'pill', content: 'more useful, more expensive, more modern, more reliable' },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          },
          {
            blockNumber: '02',
            type: 'highlight',
            badgeTitle: 'CẢNH BÁO BẪY ĐỀ THI',
            title: 'Các bẫy ngữ pháp kinh điển cần tránh',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'Không dùng so sánh kép:' },
                  { type: 'text', content: ' Tuyệt đối không viết ' },
                  { type: 'pill', content: 'more faster' },
                  { type: 'text', content: ' hay ' },
                  { type: 'pill', content: 'more taller' },
                  { type: 'text', content: ' (chỉ dùng ' },
                  { type: 'pill', content: 'faster, taller' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Không thêm đuôi -er cho tính từ dài:' },
                  { type: 'text', content: ' Không dùng ' },
                  { type: 'pill', content: 'usefuler' },
                  { type: 'text', content: ' hay ' },
                  { type: 'pill', content: 'expensiver' },
                  { type: 'text', content: ' .' }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'lesson-4-6',
        lessonNumber: '4.6',
        title: 'Tính từ So sánh hơn (Phần 2) - Bất quy tắc, So sánh kém và So sánh không có Than',
        heroBadge: 'TRỌNG TÂM NGỮ PHÁP · BÀI GIẢNG CHI TIẾT',
        blocks: [
          {
            blockNumber: '01',
            type: 'exception',
            badgeTitle: 'BẤT QUY TẮC CẦN NHỚ',
            title: 'Tính từ so sánh bất quy tắc (Irregular Comparatives)',
            rows: [
              {
                segments: [
                  { type: 'pill', content: 'good / well ➔ better' },
                  { type: 'text', content: ' (tốt hơn, khỏe hơn; tuyệt đối KHÔNG dùng ' },
                  { type: 'pill', content: 'more good' },
                  { type: 'text', content: ' hoặc ' },
                  { type: 'pill', content: 'gooder' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'pill', content: 'bad ➔ worse' },
                  { type: 'text', content: ' (tệ hơn, xấu hơn; tuyệt đối KHÔNG dùng ' },
                  { type: 'pill', content: 'badder' },
                  { type: 'text', content: ' hoặc ' },
                  { type: 'pill', content: 'more bad' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'pill', content: 'far ➔ farther / further' },
                  { type: 'text', content: ' (xa hơn; ' },
                  { type: 'pill', content: 'further' },
                  { type: 'text', content: ' còn có nghĩa là "sâu hơn, thêm vào").' }
                ]
              }
            ]
          },
          {
            blockNumber: '02',
            type: 'rule',
            badgeTitle: 'CÔNG THỨC & QUY TẮC',
            title: 'Cấu trúc So sánh kém với "LESS" (Ít hơn, kém hơn)',
            rows: [
              {
                segments: [
                  { type: 'text', content: 'Công thức: ' },
                  { type: 'badge', content: 'LESS + Tính từ dài (từ 2 âm tiết trở lên) + (THAN)' },
                  { type: 'text', content: ' (ví dụ: ' },
                  { type: 'pill', content: 'less expensive, less complicated, less competitive' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Lưu ý quan trọng:' },
                  { type: 'text', content: ' KHÔNG dùng ' },
                  { type: 'pill', content: 'less' },
                  { type: 'text', content: ' với tính từ ngắn 1 âm tiết (không nói ' },
                  { type: 'pill', content: 'less old' },
                  { type: 'text', content: ' mà dùng ' },
                  { type: 'pill', content: 'younger' },
                  { type: 'text', content: ' ; không nói ' },
                  { type: 'pill', content: 'less fast' },
                  { type: 'text', content: ' mà dùng ' },
                  { type: 'pill', content: 'slower' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: 'Tuyệt đối không kết hợp ' },
                  { type: 'pill', content: 'more / less' },
                  { type: 'text', content: ' với từ vốn đã ở dạng so sánh hơn (không dùng ' },
                  { type: 'pill', content: 'more better, more friendlier' },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          },
          {
            blockNumber: '03',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: 'So sánh hơn KHÔNG cần "THAN" (Comparatives without than)',
            rows: [
              {
                segments: [
                  { type: 'text', content: 'Được dùng khi đối tượng so sánh thứ hai đã được nêu rõ ở vế trước hoặc ngầm hiểu trong ngữ cảnh (ví dụ: ' },
                  { type: 'pill', content: 'The first report was good, but the second was better' },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'lesson-4-7',
        lessonNumber: '4.7',
        title: 'Cấu trúc So sánh nhất của Tính từ (Superlative Adjectives)',
        heroBadge: 'TRỌNG TÂM NGỮ PHÁP · BÀI GIẢNG CHI TIẾT',
        blocks: [
          {
            blockNumber: '01',
            type: 'rule',
            badgeTitle: 'CÔNG THỨC & QUY TẮC',
            title: 'Quy tắc thành lập Tính từ So sánh nhất',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'Tính từ ngắn (1 âm tiết, hoặc 2 âm tiết tận cùng bằng' },
                  { type: 'pill', content: '-y' },
                  { type: 'badge', content: '):' },
                  { type: 'text', content: ' Thêm đuôi ' },
                  { type: 'badge', content: '-est' },
                  { type: 'text', content: ' :' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: 'Thông thường: ' },
                  { type: 'pill', content: 'fast ➔ fastest' },
                  { type: 'text', content: ' , ' },
                  { type: 'pill', content: 'small ➔ smallest' },
                  { type: 'text', content: ' , ' },
                  { type: 'pill', content: 'high ➔ highest' },
                  { type: 'text', content: ' .' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: 'Tận cùng là ' },
                  { type: 'pill', content: '-e' },
                  { type: 'text', content: ' : Chỉ thêm ' },
                  { type: 'pill', content: '-st' },
                  { type: 'text', content: ' ( ' },
                  { type: 'pill', content: 'late ➔ latest' },
                  { type: 'text', content: ' , ' },
                  { type: 'pill', content: 'nice ➔ nicest' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: '1 nguyên âm kẹp giữa 2 phụ âm: Gấp đôi phụ âm cuối rồi thêm ' },
                  { type: 'badge', content: '-est' },
                  { type: 'text', content: ' ( ' },
                  { type: 'pill', content: 'big ➔ biggest' },
                  { type: 'text', content: ' , ' },
                  { type: 'pill', content: 'hot ➔ hottest' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: 'Tận cùng là ' },
                  { type: 'pill', content: '-y' },
                  { type: 'text', content: ' : Đổi ' },
                  { type: 'pill', content: 'y ➔ i' },
                  { type: 'text', content: ' rồi thêm ' },
                  { type: 'badge', content: '-est' },
                  { type: 'text', content: ' ( ' },
                  { type: 'pill', content: 'early ➔ earliest' },
                  { type: 'text', content: ' , ' },
                  { type: 'pill', content: 'happy ➔ happiest' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Tính từ dài (từ 2 âm tiết trở lên không tận cùng bằng -y):' },
                  { type: 'text', content: ' Dùng ' },
                  { type: 'badge', content: 'THE MOST + Tính từ' },
                  { type: 'text', content: ' (ví dụ: ' },
                  { type: 'pill', content: 'the most reliable, the most expensive, the most efficient' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'So sánh kém nhất:' },
                  { type: 'text', content: ' Dùng ' },
                  { type: 'badge', content: 'THE LEAST + Tính từ dài' },
                  { type: 'text', content: ' (ví dụ: ' },
                  { type: 'pill', content: 'the least expensive' },
                  { type: 'text', content: ' - ít tốn kém nhất).' }
                ]
              }
            ]
          },
          {
            blockNumber: '02',
            type: 'exception',
            badgeTitle: 'BẤT QUY TẮC CẦN NHỚ',
            title: 'Tính từ so sánh nhất bất quy tắc',
            rows: [
              {
                segments: [
                  { type: 'pill', content: 'good / well ➔ the best' },
                  { type: 'text', content: ' (tuyệt đối KHÔNG dùng ' },
                  { type: 'pill', content: 'the most good' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'pill', content: 'bad ➔ the worst' },
                  { type: 'text', content: ' (tuyệt đối KHÔNG dùng ' },
                  { type: 'pill', content: 'the baddest' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'pill', content: 'far ➔ the farthest / furthest' },
                  { type: 'text', content: ' .' }
                ]
              }
            ]
          },
          {
            blockNumber: '03',
            type: 'rule',
            badgeTitle: 'CÔNG THỨC & QUY TẮC',
            title: 'Quy tắc dùng giới từ sau So sánh nhất',
            rows: [
              {
                segments: [
                  { type: 'text', content: 'Dùng ' },
                  { type: 'badge', content: 'IN' },
                  { type: 'text', content: ' trước danh từ chỉ nơi chốn, tổ chức, tập thể (ví dụ: ' },
                  { type: 'pill', content: 'in the world, in the company, in the department' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: 'Dùng cấu trúc thì Hiện tại hoàn thành với ' },
                  { type: 'badge', content: 'ever' },
                  { type: 'text', content: ' (ví dụ: ' },
                  { type: 'pill', content: 'the best seminar I have' },
                  { type: 'badge', content: 'ever' },
                  { type: 'pill', content: 'attended' },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'lesson-4-8',
        lessonNumber: '4.8',
        title: 'Cấu trúc So sánh không bằng (not as... as) và Cấu trúc Giống nhau (the same... as)',
        heroBadge: 'TRỌNG TÂM NGỮ PHÁP · BÀI GIẢNG CHI TIẾT',
        blocks: [
          {
            blockNumber: '01',
            type: 'rule',
            badgeTitle: 'CÔNG THỨC & QUY TẮC',
            title: 'Cấu trúc So sánh không bằng: not as + Adj / Adv + as',
            rows: [
              {
                segments: [
                  { type: 'text', content: 'Dùng để diễn tả một đối tượng kém hơn đối tượng kia về một đặc tính nào đó (tương đương với cấu trúc ' },
                  { type: 'pill', content: 'less than' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Quy tắc bất biến:' },
                  { type: 'text', content: ' Từ đứng giữa cặp ' },
                  { type: 'pill', content: 'as... as' },
                  { type: 'text', content: ' luôn ở ' },
                  { type: 'badge', content: 'dạng nguyên thể' },
                  { type: 'text', content: ' (tuyệt đối không thêm ' },
                  { type: 'pill', content: '-er' },
                  { type: 'text', content: ' , không thêm ' },
                  { type: 'pill', content: 'more' },
                  { type: 'text', content: ' hay ' },
                  { type: 'pill', content: 'less' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: 'Đi sau động từ to-be hoặc linking verb ➔ Dùng ' },
                  { type: 'badge', content: 'Tính từ nguyên thể' },
                  { type: 'text', content: ' (ví dụ: ' },
                  { type: 'pill', content: "The white jeans aren't as expensive as the blue ones" },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: 'Đi sau động từ thường ➔ Dùng ' },
                  { type: 'badge', content: 'Trạng từ nguyên thể' },
                  { type: 'text', content: ' (ví dụ: ' },
                  { type: 'pill', content: "He doesn't work as efficiently as his colleagues" },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          },
          {
            blockNumber: '02',
            type: 'rule',
            badgeTitle: 'CÔNG THỨC & QUY TẮC',
            title: 'Cấu trúc Giống nhau: the same (+ Noun) + as',
            rows: [
              {
                segments: [
                  { type: 'text', content: 'Dùng để chỉ sự giống nhau hoặc tương đương giữa hai đối tượng.' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Quy tắc quan trọng:' },
                  { type: 'text', content: ' Đứng sau ' },
                  { type: 'pill', content: 'the same' },
                  { type: 'text', content: ' bắt buộc phải là một ' },
                  { type: 'badge', content: 'DANH TỪ' },
                  { type: 'text', content: ' (hoặc đại từ), KHÔNG được dùng tính từ trực tiếp (ví dụ: ' },
                  { type: 'pill', content: 'the same price' },
                  { type: 'text', content: ' [đúng], KHÔNG dùng ' },
                  { type: 'pill', content: 'the same expensive' },
                  { type: 'text', content: ' [sai]).' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: 'Các cặp chuyển đổi thông dụng: ' },
                  { type: 'pill', content: 'expensive/cheap ➔ price' },
                  { type: 'text', content: ' , ' },
                  { type: 'pill', content: 'big/small ➔ size' },
                  { type: 'text', content: ' , ' },
                  { type: 'pill', content: 'heavy/light ➔ weight' },
                  { type: 'text', content: ' , ' },
                  { type: 'pill', content: 'old ➔ age' },
                  { type: 'text', content: ' .' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: 'Có thể đi trực tiếp với đại từ sở hữu/đại từ chỉ định: ' },
                  { type: 'pill', content: 'the same as mine, exactly the same as that one' },
                  { type: 'text', content: ' .' }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'lesson-4-9',
        lessonNumber: '4.9',
        title: 'Cấu trúc Too và Enough',
        heroBadge: 'TRỌNG TÂM NGỮ PHÁP · BÀI GIẢNG CHI TIẾT',
        blocks: [
          {
            blockNumber: '01',
            type: 'rule',
            badgeTitle: 'CÔNG THỨC & QUY TẮC',
            title: 'Cấu trúc với "TOO" (Quá... đến mức không thể làm gì)',
            rows: [
              {
                segments: [
                  { type: 'text', content: 'Mang nét nghĩa tiêu cực, vượt quá giới hạn mong muốn hoặc khả năng cho phép.' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: 'Công thức: ' },
                  { type: 'badge', content: 'TOO + Tính từ / Trạng từ (+ for somebody) + TO-V' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: 'Ví dụ: ' },
                  { type: 'pill', content: 'The jacket is too big; He drives too fast; The task is too difficult for us to finish today.' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Phân biệt với Very:' },
                  { type: 'text', content: ' ' },
                  { type: 'pill', content: 'very' },
                  { type: 'text', content: ' chỉ đơn thuần là "rất" (thực tế), còn ' },
                  { type: 'pill', content: 'too' },
                  { type: 'text', content: ' mang nghĩa "quá mức dẫn đến hệ quả không tốt".' }
                ]
              }
            ]
          },
          {
            blockNumber: '02',
            type: 'rule',
            badgeTitle: 'CÔNG THỨC & QUY TẮC',
            title: 'Cấu trúc với "ENOUGH" (Đủ... để làm gì)',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'Đi với Tính từ / Trạng từ:' },
                  { type: 'text', content: ' Bắt buộc phải đứng ' },
                  { type: 'badge', content: 'SAU' },
                  { type: 'text', content: ' tính từ hoặc trạng từ: ' },
                  { type: 'badge', content: 'Tính từ / Trạng từ + ENOUGH (+ TO-V)' },
                  { type: 'text', content: ' (ví dụ: ' },
                  { type: 'pill', content: 'experienced enough, big enough, clearly enough' },
                  { type: 'text', content: ' ; tuyệt đối KHÔNG dùng ' },
                  { type: 'pill', content: 'enough big' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Đi với Danh từ:' },
                  { type: 'text', content: ' Bắt buộc phải đứng ' },
                  { type: 'badge', content: 'TRƯỚC' },
                  { type: 'text', content: ' danh từ: ' },
                  { type: 'badge', content: 'ENOUGH + Danh từ số nhiều / Không đếm được (+ TO-V)' },
                  { type: 'text', content: ' (ví dụ: ' },
                  { type: 'pill', content: 'enough money, enough chairs' },
                  { type: 'text', content: ' ; KHÔNG dùng ' },
                  { type: 'pill', content: 'chairs enough' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Phủ định:' },
                  { type: 'text', content: ' ' },
                  { type: 'pill', content: 'not + Adj + enough + to-V' },
                  { type: 'text', content: ' (ví dụ: ' },
                  { type: 'pill', content: "isn't old enough to vote" },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'lesson-4-10',
        lessonNumber: '4.10',
        title: 'Trạng từ chỉ mức độ (Adverbs of Degree)',
        heroBadge: 'TRỌNG TÂM NGỮ PHÁP · BÀI GIẢNG CHI TIẾT',
        blocks: [
          {
            blockNumber: '01',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: '1. Bổ nghĩa cho Tính từ và Trạng từ thông thường',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'Nhóm tăng cường mức độ mạnh (Stronger):' },
                  { type: 'pill', content: 'very, really, extremely' },
                  { type: 'text', content: ' (ví dụ: ' },
                  { type: 'pill', content: 'extremely helpful, very fast, really beautiful' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Nhóm giảm nhẹ mức độ (Weaker):' },
                  { type: 'pill', content: 'quite, fairly' },
                  { type: 'text', content: ' (ví dụ: ' },
                  { type: 'pill', content: 'quite expensive, fairly well' },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          },
          {
            blockNumber: '02',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: '2. Bổ nghĩa cho Tính từ So sánh hơn (Trọng điểm thi đề thi)',
            rows: [
              {
                segments: [
                  { type: 'text', content: 'Để nhấn mạnh mức độ chênh lệch (đứng ngay trước ' },
                  { type: 'pill', content: 'Adj-er' },
                  { type: 'text', content: ' hoặc ' },
                  { type: 'pill', content: 'more + Adj' },
                  { type: 'text', content: ' ):' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Chênh lệch lớn:' },
                  { type: 'badge', content: 'much, a lot, far' },
                  { type: 'text', content: ' (ngoài ra còn có ' },
                  { type: 'pill', content: 'significantly, substantially' },
                  { type: 'text', content: ' ). Ví dụ: ' },
                  { type: 'pill', content: 'much larger, a lot more expensive, far better' },
                  { type: 'text', content: ' .' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Chênh lệch nhỏ:' },
                  { type: 'badge', content: 'a little, a bit' },
                  { type: 'text', content: ' (hoặc ' },
                  { type: 'pill', content: 'slightly' },
                  { type: 'text', content: ' ). Ví dụ: ' },
                  { type: 'pill', content: 'a little taller, a bit more expensive' },
                  { type: 'text', content: ' .' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Cấm kỵ cần nhớ:' },
                  { type: 'text', content: ' KHÔNG dùng ' },
                  { type: 'pill', content: 'very' },
                  { type: 'text', content: ' để bổ nghĩa cho tính từ so sánh hơn (không nói ' },
                  { type: 'pill', content: 'very faster' },
                  { type: 'text', content: ' ❌ ➔ phải dùng ' },
                  { type: 'pill', content: 'much faster' },
                  { type: 'text', content: ' ✔️).' }
                ]
              }
            ]
          },
          {
            blockNumber: '03',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: '3. Bổ nghĩa cho Động từ (With verbs)',
            rows: [
              {
                segments: [
                  { type: 'text', content: 'Các từ như ' },
                  { type: 'pill', content: 'very much, a lot, a little, a bit' },
                  { type: 'text', content: ' thường đứng ở ' },
                  { type: 'badge', content: 'cuối câu' },
                  { type: 'text', content: ' , sau động từ và tân ngữ theo cấu trúc Chủ ngữ + Động từ + Tân ngữ + Trạng từ chỉ mức độ (ví dụ: ' },
                  { type: 'pill', content: 'We appreciated their help very much' },
                  { type: 'text', content: ' , KHÔNG dùng ' },
                  { type: 'pill', content: 'We appreciated very much their help' },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'topic-05',
    topicNumber: '05',
    title: 'Thì hiện tại',
    lessonCount: 9,
    lessons: [
      {
        id: 'lesson-5-1',
        lessonNumber: '5.1',
        title: 'Thì Hiện tại đơn của Động từ To Be (am / is / are)',
        heroBadge: 'TRỌNG TÂM NGỮ PHÁP · BÀI GIẢNG CHI TIẾT',
        blocks: [
          {
            blockNumber: '01',
            type: 'rule',
            badgeTitle: 'CÔNG THỨC & QUY TẮC',
            title: '1. Quy tắc chia theo Ngôi Chủ ngữ (Subject - Verb Agreement)',
            rows: [
              {
                segments: [
                  { type: 'text', content: 'I ➔ am (Dạng rút gọn: ' },
                  { type: 'pill', content: "I'm" },
                  { type: 'text', content: ' ; Phủ định: ' },
                  { type: 'pill', content: "I am not / I'm not" },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: 'He / She / It / Danh từ số ít / Danh từ không đếm được ➔ is (Dạng rút gọn: ' },
                  { type: 'pill', content: "He's, She's, It's" },
                  { type: 'text', content: ' ; Phủ định: ' },
                  { type: 'pill', content: "is not / isn't" },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: 'You / We / They / Danh từ số nhiều ➔ are (Dạng rút gọn: ' },
                  { type: 'pill', content: "You're, We're, They're" },
                  { type: 'text', content: ' ; Phủ định: ' },
                  { type: 'pill', content: "are not / aren't" },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          },
          {
            blockNumber: '02',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: '2. Chức năng sử dụng phổ biến trong bài thi đề thi',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'Miêu tả nghề nghiệp, chức vụ hoặc bản chất:' },
                  { type: 'pill', content: 'Be + Noun' },
                  { type: 'text', content: ' (ví dụ: ' },
                  { type: 'pill', content: 'He is an experienced engineer; This is our head office' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Miêu tả tính chất, trạng thái:' },
                  { type: 'pill', content: 'Be + Adjective' },
                  { type: 'text', content: ' (ví dụ: ' },
                  { type: 'pill', content: 'The report is accurate; The staff are enthusiastic' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Chỉ vị trí hoặc thời gian:' },
                  { type: 'pill', content: 'Be + Cụm giới từ' },
                  { type: 'text', content: ' (ví dụ: ' },
                  { type: 'pill', content: 'The factory is near the airport; The meeting is at 2:00 PM' },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          },
          {
            blockNumber: '03',
            type: 'highlight',
            badgeTitle: 'CẢNH BÁO BẪY ĐỀ THI',
            title: '3. Lỗi bẫy cần tuyệt đối tránh',
            rows: [
              {
                segments: [
                  { type: 'text', content: 'Không dùng ' },
                  { type: 'pill', content: 'have' },
                  { type: 'text', content: ' thay cho ' },
                  { type: 'pill', content: 'be' },
                  { type: 'text', content: ' khi chỉ trạng thái hay tuổi tác (dùng ' },
                  { type: 'pill', content: 'He is 30 years old' },
                  { type: 'text', content: ' , không dùng ' },
                  { type: 'pill', content: 'He has 30 years old' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: 'Không được thiếu động từ ' },
                  { type: 'pill', content: 'to be' },
                  { type: 'text', content: ' trong câu phủ định (dùng ' },
                  { type: 'pill', content: "He isn't married" },
                  { type: 'text', content: ' , không viết ' },
                  { type: 'pill', content: 'He not married' },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'lesson-5-2',
        lessonNumber: '5.2',
        title: 'Câu hỏi và Câu trả lời ngắn với Động từ To Be (Questions with Be)',
        heroBadge: 'TRỌNG TÂM NGỮ PHÁP · BÀI GIẢNG CHI TIẾT',
        blocks: [
          {
            blockNumber: '01',
            type: 'rule',
            badgeTitle: 'CÔNG THỨC & QUY TẮC',
            title: '1. Cấu trúc Câu hỏi Yes / No với To Be',
            rows: [
              {
                segments: [
                  { type: 'text', content: 'Đảo động từ ' },
                  { type: 'pill', content: 'to be' },
                  { type: 'text', content: ' lên đầu câu trước chủ ngữ: Am / Is / Are + S + Danh từ / Tính từ / Giới từ?' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: '(Ví dụ: ' },
                  { type: 'pill', content: 'Is she the new manager? Are you ready? Is the file on the desk?' },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          },
          {
            blockNumber: '02',
            type: 'rule',
            badgeTitle: 'CÔNG THỨC & QUY TẮC',
            title: '2. Cấu trúc Câu hỏi có từ để hỏi (Wh- Questions)',
            rows: [
              {
                segments: [
                  { type: 'text', content: 'Từ để hỏi (What / Where / Who / How / When) + am / is / are + S + ...?' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: '(Ví dụ: ' },
                  { type: 'pill', content: 'Where is the meeting room? Who are the clients? What is your phone number?' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Lưu ý:' },
                  { type: 'text', content: ' Trong câu hỏi trực tiếp, động từ ' },
                  { type: 'pill', content: 'to be' },
                  { type: 'text', content: ' luôn đứng ' },
                  { type: 'badge', content: 'trước' },
                  { type: 'text', content: ' chủ ngữ (không dùng: ' },
                  { type: 'pill', content: 'What your name is?' },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          },
          {
            blockNumber: '03',
            type: 'rule',
            badgeTitle: 'CÔNG THỨC & QUY TẮC',
            title: '3. Quy tắc Câu trả lời ngắn (Short Answers)',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'Câu trả lời khẳng định:' },
                  { type: 'text', content: ' Yes, S + be ➔ ' },
                  { type: 'badge', content: 'TUYỆT ĐỐI KHÔNG VIẾT TẮT' },
                  { type: 'text', content: ' (Dùng: ' },
                  { type: 'pill', content: 'Yes, they are / Yes, it is' },
                  { type: 'text', content: ' ; KHÔNG dùng: ' },
                  { type: 'pill', content: "Yes, they're" },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Câu trả lời phủ định:' },
                  { type: 'text', content: ' No, S + be + not ➔ Thường dùng dạng viết tắt (Dùng: ' },
                  { type: 'pill', content: "No, he isn't / No, he's not" },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Dùng đại từ thay thế:' },
                  { type: 'text', content: ' Trong câu trả lời ngắn, bắt buộc thay danh từ bằng đại từ nhân xưng tương ứng ( ' },
                  { type: 'pill', content: 'it, they, he, she...' },
                  { type: 'text', content: ' ), không lặp lại danh từ gốc (Ví dụ: ' },
                  { type: 'pill', content: 'Is the office open? ➔ Yes, it is' },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'lesson-5-3',
        lessonNumber: '5.3',
        title: 'Thì Hiện tại đơn với Động từ thường (Present Simple)',
        heroBadge: 'TRỌNG TÂM NGỮ PHÁP · BÀI GIẢNG CHI TIẾT',
        blocks: [
          {
            blockNumber: '01',
            type: 'rule',
            badgeTitle: 'CÔNG THỨC & QUY TẮC',
            title: '1. Thể khẳng định (Positive Form) & Quy tắc biến đổi đuôi',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'Chủ ngữ số nhiều' },
                  { type: 'text', content: ' ( ' },
                  { type: 'pill', content: 'I / You / We / They / Danh từ số nhiều' },
                  { type: 'text', content: ' ): Động từ giữ ' },
                  { type: 'badge', content: 'nguyên mẫu (V-inf)' },
                  { type: 'text', content: ' (ví dụ: ' },
                  { type: 'pill', content: 'They live in Tokyo; We agree with you' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Chủ ngữ số ít' },
                  { type: 'text', content: ' ( ' },
                  { type: 'pill', content: 'He / She / It / Danh từ số ít / Danh từ không đếm được' },
                  { type: 'text', content: ' ): Động từ phải thêm ' },
                  { type: 'badge', content: '-s hoặc -es' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: 'Thông thường: Thêm ' },
                  { type: 'pill', content: '-s' },
                  { type: 'text', content: ' ( ' },
                  { type: 'pill', content: 'works, likes, prefers' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: 'Tận cùng là ' },
                  { type: 'pill', content: '-o, -ch, -sh, -ss, -x, -z' },
                  { type: 'text', content: ' : Thêm ' },
                  { type: 'pill', content: '-es' },
                  { type: 'text', content: ' ( ' },
                  { type: 'pill', content: 'teaches, washes, fixes, goes' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: 'Phụ âm + ' },
                  { type: 'pill', content: '-y' },
                  { type: 'text', content: ' : Đổi thành ' },
                  { type: 'pill', content: '-ies' },
                  { type: 'text', content: ' ( ' },
                  { type: 'pill', content: 'carry ➔ carries' },
                  { type: 'text', content: ' , ' },
                  { type: 'pill', content: 'fly ➔ flies' },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          },
          {
            blockNumber: '02',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: '2. Thể phủ định (Negative Form)',
            rows: [
              {
                segments: [
                  { type: 'pill', content: 'I / You / We / They / N số nhiều' },
                  { type: 'text', content: ' + ' },
                  { type: 'badge', content: "do not (don't) + V-nguyên mẫu" }
                ]
              },
              {
                segments: [
                  { type: 'pill', content: 'He / She / It / N số ít' },
                  { type: 'text', content: ' + ' },
                  { type: 'badge', content: "does not (doesn't) + V-nguyên mẫu" }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Lưu ý kinh điển:' },
                  { type: 'text', content: ' Sau ' },
                  { type: 'pill', content: "doesn't / don't" },
                  { type: 'text', content: ' , động từ chính luôn trở về dạng ' },
                  { type: 'badge', content: 'nguyên mẫu không chia' },
                  { type: 'text', content: ' (ví dụ: ' },
                  { type: 'pill', content: "He doesn't like" },
                  { type: 'text', content: ' , KHÔNG viết ' },
                  { type: 'pill', content: "He doesn't likes" },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          },
          {
            blockNumber: '03',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: '3. Nhóm động từ chỉ trạng thái/suy nghĩ (Stative Verbs)',
            rows: [
              {
                segments: [
                  { type: 'text', content: 'Các động từ chỉ quan điểm, cảm xúc như ' },
                  { type: 'pill', content: 'agree, believe, know, understand, prefer, want, need' },
                  { type: 'text', content: ' luôn được ưu tiên chia ở thì Hiện tại đơn thay vì thì Tiếp diễn.' }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'lesson-5-4',
        lessonNumber: '5.4',
        title: 'Câu hỏi, Thói quen định kỳ và Vị trí của Trạng từ chỉ tần suất (Present Simple 2)',
        heroBadge: 'TRỌNG TÂM NGỮ PHÁP · BÀI GIẢNG CHI TIẾT',
        blocks: [
          {
            blockNumber: '01',
            type: 'rule',
            badgeTitle: 'CÔNG THỨC & QUY TẮC',
            title: '1. Cấu trúc Câu hỏi và Câu trả lời ngắn (Questions & Short Answers)',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'Câu hỏi Yes/No:' },
                  { type: 'text', content: ' Do / Does + S + V-nguyên mẫu...? ➔ Trả lời: ' },
                  { type: 'pill', content: 'Yes, S + do/does' },
                  { type: 'text', content: ' hoặc ' },
                  { type: 'pill', content: "No, S + don't/doesn't" },
                  { type: 'text', content: ' .' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Câu hỏi có từ để hỏi (Wh- questions):' },
                  { type: 'text', content: ' Wh-word + do / does + S + V-nguyên mẫu...? (Ví dụ: ' },
                  { type: 'pill', content: 'How often does the bus come? When do you finish work?' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Quy tắc bất biến:' },
                  { type: 'text', content: ' Khi câu đã xuất hiện trợ động từ ' },
                  { type: 'pill', content: 'Do / Does' },
                  { type: 'text', content: ' , động từ chính ' },
                  { type: 'badge', content: 'bắt buộc phải giữ nguyên mẫu' },
                  { type: 'text', content: ' (KHÔNG thêm ' },
                  { type: 'pill', content: '-s/-es' },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          },
          {
            blockNumber: '02',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: '2. Diễn tả Hoạt động định kỳ (Habits & Routines)',
            rows: [
              {
                segments: [
                  { type: 'text', content: 'Thường kết hợp với các cụm từ thời gian: ' },
                  { type: 'pill', content: 'every day/month, on Mondays, at weekends, once a week/year' },
                  { type: 'text', content: ' (thường đứng ở cuối câu hoặc đầu câu).' }
                ]
              }
            ]
          },
          {
            blockNumber: '03',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: '3. Vị trí vàng của Trạng từ chỉ tần suất (Adverbs of Frequency - always, usually, often, sometimes, never)',
            rows: [
              {
                segments: [
                  { type: 'text', content: 'Đứng ' },
                  { type: 'badge', content: 'TRƯỚC' },
                  { type: 'text', content: ' động từ thường: S + Adv + V-thường (Ví dụ: ' },
                  { type: 'pill', content: 'We usually start work at 8:00' },
                  { type: 'text', content: ' ; ' },
                  { type: 'pill', content: 'He never arrives late' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: 'Đứng ' },
                  { type: 'badge', content: 'SAU' },
                  { type: 'text', content: ' động từ To Be: S + be + Adv (Ví dụ: ' },
                  { type: 'pill', content: 'She is always helpful' },
                  { type: 'text', content: ' ; ' },
                  { type: 'pill', content: 'The servers are often busy' },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'lesson-5-5',
        lessonNumber: '5.5',
        title: 'Thì Hiện tại tiếp diễn (Present Continuous 1)',
        heroBadge: 'TRỌNG TÂM NGỮ PHÁP · BÀI GIẢNG CHI TIẾT',
        blocks: [
          {
            blockNumber: '01',
            type: 'rule',
            badgeTitle: 'CÔNG THỨC & QUY TẮC',
            title: '1. Cấu trúc ngữ pháp (Form)',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'Khẳng định:' },
                  { type: 'text', content: ' S + am / is / are + V-ing (Ví dụ: ' },
                  { type: 'pill', content: 'I am preparing the report; They are conducting a survey' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Phủ định:' },
                  { type: 'text', content: ' S + am / is / are + not + V-ing (Ví dụ: ' },
                  { type: 'pill', content: 'The printer is not working properly' },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          },
          {
            blockNumber: '02',
            type: 'rule',
            badgeTitle: 'CÔNG THỨC & QUY TẮC',
            title: '2. Quy tắc chính tả khi thêm đuôi -ing',
            rows: [
              {
                segments: [
                  { type: 'text', content: 'Động từ tận cùng bằng chữ "e" câm ➔ ' },
                  { type: 'badge', content: 'Bỏ "e" rồi thêm -ing' },
                  { type: 'text', content: ' ( ' },
                  { type: 'pill', content: 'take ➔ taking' },
                  { type: 'text', content: ' , ' },
                  { type: 'pill', content: 'write ➔ writing' },
                  { type: 'text', content: ' , ' },
                  { type: 'pill', content: 'use ➔ using' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: 'Động từ tận cùng bằng "-ie" ➔ ' },
                  { type: 'badge', content: 'Đổi "-ie" thành "-y" rồi thêm -ing' },
                  { type: 'text', content: ' ( ' },
                  { type: 'pill', content: 'lie ➔ lying' },
                  { type: 'text', content: ' , ' },
                  { type: 'pill', content: 'die ➔ dying' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: 'Động từ 1 âm tiết (hoặc trọng âm rơi vào âm tiết cuối) có 1 nguyên âm kẹp giữa 2 phụ âm ➔ ' },
                  { type: 'badge', content: 'Gấp đôi phụ âm cuối' },
                  { type: 'text', content: ' ( ' },
                  { type: 'pill', content: 'plan ➔ planning' },
                  { type: 'text', content: ' , ' },
                  { type: 'pill', content: 'swim ➔ swimming' },
                  { type: 'text', content: ' , ' },
                  { type: 'pill', content: 'run ➔ running' },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          },
          {
            blockNumber: '03',
            type: 'rule',
            badgeTitle: 'CÔNG THỨC & QUY TẮC',
            title: '3. Ngữ cảnh sử dụng và Dấu hiệu nhận biết trong đề thi',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'Hành động đang diễn ra ngay lúc nói:' },
                  { type: 'text', content: ' Thường đi cùng ' },
                  { type: 'pill', content: 'now, right now, at the moment, currently' },
                  { type: 'text', content: ' .' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Sự việc mang tính chất tạm thời (xảy ra xung quanh thời điểm hiện tại):' },
                  { type: 'text', content: ' Thường đi cùng ' },
                  { type: 'pill', content: 'today, this week, this month, this year' },
                  { type: 'text', content: ' (Ví dụ: ' },
                  { type: 'pill', content: 'We are staying at a hotel this week' },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'lesson-5-6',
        lessonNumber: '5.6',
        title: 'Câu hỏi, Câu trả lời ngắn và Miêu tả hành động trong hình ảnh (Present Continuous 2)',
        heroBadge: 'TRỌNG TÂM NGỮ PHÁP · BÀI GIẢNG CHI TIẾT',
        blocks: [
          {
            blockNumber: '01',
            type: 'rule',
            badgeTitle: 'CÔNG THỨC & QUY TẮC',
            title: '1. Cấu trúc Câu hỏi thì Hiện tại tiếp diễn (Question Form & Word Order)',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'Câu hỏi Yes/No:' },
                  { type: 'text', content: ' Am / Is / Are + S + V-ing...?' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Câu hỏi có từ để hỏi:' },
                  { type: 'text', content: ' Wh-word + am / is / are + S + V-ing...? (Ví dụ: ' },
                  { type: 'pill', content: 'Where is he going? Why are they running?' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Trật tự từ vàng:' },
                  { type: 'text', content: ' Trợ động từ ' },
                  { type: 'pill', content: 'to be' },
                  { type: 'text', content: ' luôn đứng ' },
                  { type: 'badge', content: 'TRƯỚC' },
                  { type: 'text', content: ' chủ ngữ, còn động từ đuôi ' },
                  { type: 'badge', content: '-ing' },
                  { type: 'text', content: ' luôn đứng ' },
                  { type: 'badge', content: 'SAU' },
                  { type: 'text', content: ' chủ ngữ (Tuyệt đối không dùng: ' },
                  { type: 'pill', content: 'Are waiting you for me?' },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          },
          {
            blockNumber: '02',
            type: 'rule',
            badgeTitle: 'CÔNG THỨC & QUY TẮC',
            title: '2. Quy tắc cho Câu trả lời ngắn (Short Answers)',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'Khẳng định:' },
                  { type: 'text', content: ' Yes, S + am / is / are ➔ ' },
                  { type: 'badge', content: 'TUYỆT ĐỐI KHÔNG ĐƯỢC VIẾT TẮT' },
                  { type: 'text', content: ' (Dùng: ' },
                  { type: 'pill', content: 'Yes, she is' },
                  { type: 'text', content: ' ; KHÔNG dùng: ' },
                  { type: 'pill', content: "Yes, she's" },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Phủ định:' },
                  { type: 'text', content: " No, S + am not / isn't / aren't (Ví dụ: " },
                  { type: 'pill', content: "No, they aren't" },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Không lặp lại động từ V-ing chính:' },
                  { type: 'text', content: ' Trong câu trả lời ngắn chuẩn mực, ta chỉ dừng lại ở trợ động từ ' },
                  { type: 'pill', content: 'to be' },
                  { type: 'text', content: ' (Dùng: ' },
                  { type: 'pill', content: 'Yes, he is' },
                  { type: 'text', content: ' ; KHÔNG dùng: ' },
                  { type: 'pill', content: 'Yes, he is phoning' },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          },
          {
            blockNumber: '03',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: '3. Ứng dụng miêu tả hành động trong hình ảnh/tài liệu',
            rows: [
              {
                segments: [
                  { type: 'text', content: 'Dùng để mô tả trực tiếp những gì các nhân vật đang thực hiện trong hình ảnh quảng cáo hoặc tài liệu hướng dẫn (Ví dụ: ' },
                  { type: 'pill', content: 'In this photograph, the engineers are inspecting the device' },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'lesson-5-7',
        lessonNumber: '5.7',
        title: 'Phân biệt Thì Hiện tại đơn và Hiện tại tiếp diễn (Present Simple vs. Present Continuous)',
        heroBadge: 'TRỌNG TÂM NGỮ PHÁP · BÀI GIẢNG CHI TIẾT',
        blocks: [
          {
            blockNumber: '01',
            type: 'rule',
            badgeTitle: 'CÔNG THỨC & QUY TẮC',
            title: '1. Tính chất Sự việc & Dấu hiệu Thời gian',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'Hiện tại đơn:' },
                  { type: 'text', content: ' Diễn tả hành động có tính lặp đi lặp lại, thói quen định kỳ hoặc sự việc cố định lâu dài. Dấu hiệu: ' },
                  { type: 'pill', content: 'always, usually, often, every day/month, once a week' },
                  { type: 'text', content: ' .' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Hiện tại tiếp diễn:' },
                  { type: 'text', content: ' Diễn tả hành động đang diễn ra ngay tại thời điểm nói hoặc tình huống mang tính chất tạm thời. Dấu hiệu: ' },
                  { type: 'pill', content: 'now, right now, at the moment, currently, today, this week/month' },
                  { type: 'text', content: ' .' }
                ]
              }
            ]
          },
          {
            blockNumber: '02',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: '2. Nhóm Động từ chỉ Trạng thái KHÔNG chia thì Tiếp diễn (Stative Verbs)',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'Ý muốn / Cảm xúc:' },
                  { type: 'pill', content: 'need, want, prefer, like, love, hate' },
                  { type: 'text', content: ' .' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Nhận thức / Suy nghĩ:' },
                  { type: 'pill', content: 'know, understand, believe, agree, remember, mean' },
                  { type: 'text', content: ' .' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Sở hữu / Đo lường:' },
                  { type: 'pill', content: 'belong to, own, contain, cost' },
                  { type: 'text', content: ' .' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Giác quan:' },
                  { type: 'pill', content: 'hear, see, smell, taste' },
                  { type: 'text', content: ' .' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: 'Các động từ chỉ trạng thái dưới đây luôn được ưu tiên chia ở thì ' },
                  { type: 'badge', content: 'Hiện tại đơn' },
                  { type: 'text', content: ' (ngay cả khi có dấu hiệu như ' },
                  { type: 'pill', content: 'now' },
                  { type: 'text', content: ' hay ' },
                  { type: 'pill', content: 'at the moment' },
                  { type: 'text', content: ' ):' }
                ]
              }
            ]
          },
          {
            blockNumber: '03',
            type: 'exception',
            badgeTitle: 'BẤT QUY TẮC CẦN NHỚ',
            title: '3. Trường hợp đặc biệt của động từ "Think"',
            rows: [
              {
                segments: [
                  { type: 'text', content: 'Mang nghĩa nêu ' },
                  { type: 'badge', content: 'quan điểm/ý kiến' },
                  { type: 'text', content: ' (= ' },
                  { type: 'pill', content: 'believe / have an opinion' },
                  { type: 'text', content: ' ) ➔ Dùng Hiện tại đơn (Ví dụ: ' },
                  { type: 'pill', content: 'What do you think of the proposal?' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: 'Mang nghĩa ' },
                  { type: 'badge', content: 'đang suy nghĩ, cân nhắc' },
                  { type: 'text', content: ' trong đầu ➔ Dùng Hiện tại tiếp diễn (Ví dụ: ' },
                  { type: 'pill', content: 'I am thinking about the contract offer' },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'lesson-5-8',
        lessonNumber: '5.8',
        title: 'Cấu trúc Have got / Has got',
        heroBadge: 'TRỌNG TÂM NGỮ PHÁP · BÀI GIẢNG CHI TIẾT',
        blocks: [
          {
            blockNumber: '01',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: '1. Thể Khẳng định & Dạng viết tắt',
            rows: [
              {
                segments: [
                  { type: 'pill', content: 'I / You / We / They / Danh từ số nhiều' },
                  { type: 'text', content: ' + ' },
                  { type: 'badge', content: "have got ('ve got)" },
                  { type: 'text', content: ' (Ví dụ: ' },
                  { type: 'pill', content: "They've got a modern office" },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'pill', content: 'He / She / It / Danh từ số ít' },
                  { type: 'text', content: ' + ' },
                  { type: 'badge', content: "has got ('s got)" },
                  { type: 'text', content: ' (Ví dụ: ' },
                  { type: 'pill', content: "She's got two meetings today" },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          },
          {
            blockNumber: '02',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: '2. Thể Phủ định',
            rows: [
              {
                segments: [
                  { type: 'pill', content: "haven't got (have not got)" },
                  { type: 'text', content: ' / ' },
                  { type: 'pill', content: "hasn't got (has not got)" },
                  { type: 'text', content: ' (Ví dụ: ' },
                  { type: 'pill', content: "We haven't got any spare parts left" },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          },
          {
            blockNumber: '03',
            type: 'rule',
            badgeTitle: 'CÔNG THỨC & QUY TẮC',
            title: '3. Cấu trúc Câu hỏi và Câu trả lời ngắn (Questions & Short Answers)',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'Câu hỏi Yes/No:' },
                  { type: 'text', content: ' Have / Has + S + got + ...? (Ví dụ: ' },
                  { type: 'pill', content: 'Have you got a pen? Has he got the report?' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Câu hỏi Wh- :' },
                  { type: 'text', content: ' Wh-word + have / has + S + got?' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Quy tắc Câu trả lời ngắn:' },
                  { type: 'text', content: " Yes, S + have/has hoặc No, S + haven't/hasn't. " },
                  { type: 'badge', content: 'Lưu ý:' },
                  { type: 'text', content: ' ' },
                  { type: 'badge', content: 'TUYỆT ĐỐI KHÔNG dùng "got" trong câu trả lời ngắn' },
                  { type: 'text', content: ' (Dùng: ' },
                  { type: 'pill', content: 'Yes, I have' },
                  { type: 'text', content: ' ; KHÔNG dùng: ' },
                  { type: 'pill', content: 'Yes, I have got' },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          },
          {
            blockNumber: '04',
            type: 'highlight',
            badgeTitle: 'CẢNH BÁO BẪY ĐỀ THI',
            title: '4. Lưu ý lỗi sai thường gặp',
            rows: [
              {
                segments: [
                  { type: 'text', content: 'Không dùng trợ động từ ' },
                  { type: 'pill', content: 'do/does' },
                  { type: 'text', content: ' kết hợp với ' },
                  { type: 'pill', content: 'have got' },
                  { type: 'text', content: ' (Không dùng: ' },
                  { type: 'pill', content: 'Do you have got...?' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: 'Không được bỏ quên ' },
                  { type: 'pill', content: 'have/has' },
                  { type: 'text', content: ' (Không dùng: ' },
                  { type: 'pill', content: 'He got a good job' },
                  { type: 'text', content: ' để chỉ sự sở hữu ở hiện tại, phải dùng: ' },
                  { type: 'pill', content: "He's got a good job" },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'lesson-5-9',
        lessonNumber: '5.9',
        title: 'Cách sử dụng Động từ HAVE',
        heroBadge: 'TRỌNG TÂM NGỮ PHÁP · BÀI GIẢNG CHI TIẾT',
        blocks: [
          {
            blockNumber: '01',
            type: 'rule',
            badgeTitle: 'CÔNG THỨC & QUY TẮC',
            title: '1. Cấu trúc thì Hiện tại đơn của HAVE',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'Khẳng định:' },
                  { type: 'text', content: ' ' },
                  { type: 'pill', content: 'I / You / We / They / N số nhiều' },
                  { type: 'text', content: ' + ' },
                  { type: 'badge', content: 'have' },
                  { type: 'text', content: ' ; ' },
                  { type: 'pill', content: 'He / She / It / N số ít' },
                  { type: 'text', content: ' + ' },
                  { type: 'badge', content: 'has' },
                  { type: 'text', content: ' .' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Phủ định:' },
                  { type: 'text', content: " S + don't / doesn't + have (Sau trợ động từ luôn là " },
                  { type: 'pill', content: 'have' },
                  { type: 'text', content: ' nguyên mẫu).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Câu hỏi & Trả lời ngắn:' },
                  { type: 'text', content: ' Do / Does + S + have...? ➔ ' },
                  { type: 'pill', content: 'Yes, S + do/does' },
                  { type: 'text', content: ' hoặc ' },
                  { type: 'pill', content: "No, S + don't/doesn't" },
                  { type: 'text', content: ' .' }
                ]
              }
            ]
          },
          {
            blockNumber: '02',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: '2. Phân biệt theo Ý nghĩa & Cách chia thì',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'Nét nghĩa 1: SỞ HỮU (Possession) / Đặc điểm / Mối quan hệ:' },
                  { type: 'text', content: ' Mang nghĩa "có tài sản, có chi nhánh, có kinh nghiệm...". ➔ Quy tắc vàng: ' },
                  { type: 'badge', content: 'TUYỆT ĐỐI KHÔNG CHIA Ở THÌ TIẾP DIỄN' },
                  { type: 'text', content: ' (Ví dụ: ' },
                  { type: 'pill', content: 'Our firm has five branches' },
                  { type: 'text', content: ' ; KHÔNG dùng ' },
                  { type: 'pill', content: 'is having five branches' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Nét nghĩa 2: HÀNH ĐỘNG / TRẢI NGHIỆM (Activities & Events):' },
                  { type: 'text', content: ' Đi trong các cụm hành động như ' },
                  { type: 'pill', content: 'have a meeting' },
                  { type: 'text', content: ' (họp), ' },
                  { type: 'pill', content: 'have lunch/dinner' },
                  { type: 'text', content: ' (ăn trưa/tối), ' },
                  { type: 'pill', content: 'have a discussion' },
                  { type: 'text', content: ' (thảo luận), ' },
                  { type: 'pill', content: 'have a break/holiday' },
                  { type: 'text', content: ' (nghỉ ngơi). ➔ Quy tắc: ' },
                  { type: 'badge', content: 'ĐƯỢC PHÉP CHIA Ở THÌ TIẾP DIỄN' },
                  { type: 'text', content: ' khi hành động đang diễn ra (Ví dụ: ' },
                  { type: 'pill', content: 'The board is having a meeting right now' },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'topic-06',
    topicNumber: '06',
    title: 'Thì quá khứ',
    lessonCount: 6,
    lessons: [
      {
        id: 'lesson-6-1',
        lessonNumber: '6.1',
        title: 'Thì Quá khứ đơn của động từ TO-BE (Was / Were)',
        heroBadge: 'TRỌNG TÂM NGỮ PHÁP · BÀI GIẢNG CHI TIẾT',
        blocks: [
          {
            blockNumber: '01',
            type: 'rule',
            badgeTitle: 'CÔNG THỨC & QUY TẮC',
            title: 'Quy tắc hòa hợp Chủ ngữ với WAS và WERE',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'WAS:' },
                  { type: 'text', content: ' Đi với các chủ ngữ số ít bao gồm ' },
                  { type: 'pill', content: 'I, He, She, It' },
                  { type: 'text', content: ' , danh từ số ít ( ' },
                  { type: 'pill', content: 'the manager, the report' },
                  { type: 'text', content: ' ) và danh từ không đếm được ( ' },
                  { type: 'pill', content: 'advice, information, equipment' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'WERE:' },
                  { type: 'text', content: ' Đi với các chủ ngữ số nhiều bao gồm ' },
                  { type: 'pill', content: 'We, You, They' },
                  { type: 'text', content: ' và danh từ đếm được số nhiều ( ' },
                  { type: 'pill', content: 'employees, products, attendees' },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          },
          {
            blockNumber: '02',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: 'Các dạng thức câu',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'Khẳng định:' },
                  { type: 'text', content: ' S + was / were + Adj / Noun / Cụm giới từ (ví dụ: ' },
                  { type: 'pill', content: 'He was British; They were film stars' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Phủ định:' },
                  { type: 'text', content: " S + was not (wasn't) / were not (weren't) (ví dụ: " },
                  { type: 'pill', content: "It wasn't expensive; They weren't American" },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Nghi vấn:' },
                  { type: 'text', content: ' (Wh-) + Was / Were + S + ...? (ví dụ: ' },
                  { type: 'pill', content: 'Was he in the office yesterday? Where were you?' },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          },
          {
            blockNumber: '03',
            type: 'rule',
            badgeTitle: 'CÔNG THỨC & QUY TẮC',
            title: 'Dấu hiệu thời gian quá khứ nhận biết trong đề thi',
            rows: [
              {
                segments: [
                  { type: 'pill', content: 'yesterday, last week / month / year, in + mốc năm quá khứ (in 2020), ago (two days ago), formerly, previously' },
                  { type: 'text', content: ' .' }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'lesson-6-2',
        lessonNumber: '6.2',
        title: 'Thì Quá khứ đơn (Past Simple) - Động từ thường và Thể khẳng định',
        heroBadge: 'TRỌNG TÂM NGỮ PHÁP · BÀI GIẢNG CHI TIẾT',
        blocks: [
          {
            blockNumber: '01',
            type: 'rule',
            badgeTitle: 'CÔNG THỨC & QUY TẮC',
            title: 'Quy tắc biến đổi Động từ có quy tắc (Regular verbs - Thêm -ed)',
            rows: [
              {
                segments: [
                  { type: 'text', content: 'Thông thường: Thêm ' },
                  { type: 'pill', content: '-ed' },
                  { type: 'text', content: ' (ví dụ: ' },
                  { type: 'pill', content: 'watch ➔ watched' },
                  { type: 'text', content: ' , ' },
                  { type: 'pill', content: 'finish ➔ finished' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: 'Tận cùng là ' },
                  { type: 'pill', content: '-e' },
                  { type: 'text', content: ' : Chỉ cần thêm ' },
                  { type: 'pill', content: '-d' },
                  { type: 'text', content: ' (ví dụ: ' },
                  { type: 'pill', content: 'live ➔ lived' },
                  { type: 'text', content: ' , ' },
                  { type: 'pill', content: 'finalize ➔ finalized' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: '1 nguyên âm kẹp giữa 2 phụ âm (hoặc tận cùng là 1 phụ âm): Gấp đôi phụ âm cuối rồi thêm ' },
                  { type: 'pill', content: '-ed' },
                  { type: 'text', content: ' (ví dụ: ' },
                  { type: 'pill', content: 'stop ➔ stopped' },
                  { type: 'text', content: ' , ' },
                  { type: 'pill', content: 'plan ➔ planned' },
                  { type: 'text', content: ' , ' },
                  { type: 'pill', content: 'travel ➔ travelled' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: 'Phụ âm + ' },
                  { type: 'pill', content: '-y' },
                  { type: 'text', content: ' : Đổi ' },
                  { type: 'pill', content: '-y' },
                  { type: 'text', content: ' thành ' },
                  { type: 'pill', content: '-ied' },
                  { type: 'text', content: ' (ví dụ: ' },
                  { type: 'pill', content: 'study ➔ studied' },
                  { type: 'text', content: ' , ' },
                  { type: 'pill', content: 'carry ➔ carried' },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          },
          {
            blockNumber: '02',
            type: 'exception',
            badgeTitle: 'BẤT QUY TẮC CẦN NHỚ',
            title: 'Động từ bất quy tắc (Irregular verbs - Không thêm -ed)',
            rows: [
              {
                segments: [
                  { type: 'text', content: 'Cần ghi nhớ dạng cột 2 (V2) của các động từ thông dụng:' }
                ]
              },
              {
                segments: [
                  { type: 'pill', content: 'make ➔ made' },
                  { type: 'text', content: ' , ' },
                  { type: 'pill', content: 'win ➔ won' },
                  { type: 'text', content: ' , ' },
                  { type: 'pill', content: 'take ➔ took' },
                  { type: 'text', content: ' , ' },
                  { type: 'pill', content: 'buy ➔ bought' },
                  { type: 'text', content: ' , ' },
                  { type: 'pill', content: 'go ➔ went' },
                  { type: 'text', content: ' , ' },
                  { type: 'pill', content: 'leave ➔ left' },
                  { type: 'text', content: ' , ' },
                  { type: 'pill', content: 'see ➔ saw' },
                  { type: 'text', content: ' , ' },
                  { type: 'pill', content: 'tell ➔ told' },
                  { type: 'text', content: ' , ' },
                  { type: 'pill', content: 'do ➔ did' },
                  { type: 'text', content: ' , ' },
                  { type: 'pill', content: 'have ➔ had' },
                  { type: 'text', content: ' .' }
                ]
              }
            ]
          },
          {
            blockNumber: '03',
            type: 'rule',
            badgeTitle: 'CÔNG THỨC & QUY TẮC',
            title: 'Dấu hiệu thời gian quá khứ đặc trưng',
            rows: [
              {
                segments: [
                  { type: 'pill', content: 'yesterday, last week / month / year, in + năm quá khứ (in 2006), ago (two days ago), when + mệnh đề quá khứ đơn' },
                  { type: 'text', content: ' .' }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'lesson-6-3',
        lessonNumber: '6.3',
        title: 'Thì Quá khứ đơn (Phần 2) - Thể Phủ định, Thể Nghi vấn và Diễn tả chuỗi hành động',
        heroBadge: 'TRỌNG TÂM NGỮ PHÁP · BÀI GIẢNG CHI TIẾT',
        blocks: [
          {
            blockNumber: '01',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: 'Thể Phủ định (Negative)',
            rows: [
              {
                segments: [
                  { type: 'text', content: 'Cấu trúc: ' },
                  { type: 'badge', content: "S + did not (didn't) + Động từ nguyên thể (V-infinitive)" }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Quy tắc vàng:' },
                  { type: 'text', content: ' Khi đã mượn trợ động từ ' },
                  { type: 'pill', content: "did not / didn't" },
                  { type: 'text', content: ' , động từ chính phía sau bắt buộc phải giữ ở ' },
                  { type: 'badge', content: 'dạng nguyên mẫu không chia' },
                  { type: 'text', content: ' (không thêm -ed, không lùi về V2).' }
                ]
              }
            ]
          },
          {
            blockNumber: '02',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: 'Thể Nghi vấn (Questions)',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'Yes/No Question:' },
                  { type: 'text', content: " Did + S + V-nguyên thể...? ➔ Yes, S + did. / No, S + didn't." }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Wh-question:' },
                  { type: 'text', content: ' Từ để hỏi (What/Where/When/How much...) + did + S + V-nguyên thể...?' }
                ]
              }
            ]
          },
          {
            blockNumber: '03',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: 'Diễn tả chuỗi sự kiện và các liên từ thời gian trong quá khứ',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'Chuỗi hành động liên tiếp:' },
                  { type: 'text', content: ' Dùng thì quá khứ đơn liệt kê các hành động xảy ra nối tiếp nhau, thường đi kèm trạng từ ' },
                  { type: 'badge', content: 'then' },
                  { type: 'text', content: ' (sau đó) (ví dụ: ' },
                  { type: 'pill', content: 'We arrived at the hotel and then went to the meeting' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Khoảng thời gian bắt đầu và kết thúc:' },
                  { type: 'text', content: ' Cấu trúc ' },
                  { type: 'badge', content: 'from [thời gian] to [thời gian]' },
                  { type: 'text', content: ' (ví dụ: ' },
                  { type: 'pill', content: 'lived from 1931 to 1955' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Độ dài thời gian của hành động đã hoàn tất:' },
                  { type: 'text', content: ' Dùng ' },
                  { type: 'badge', content: 'for + khoảng thời gian' },
                  { type: 'text', content: ' trong câu quá khứ đơn (ví dụ: ' },
                  { type: 'pill', content: 'stayed for two weeks last summer' },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'lesson-6-4',
        lessonNumber: '6.4',
        title: 'Thì Quá khứ tiếp diễn (Past Continuous)',
        heroBadge: 'TRỌNG TÂM NGỮ PHÁP · BÀI GIẢNG CHI TIẾT',
        blocks: [
          {
            blockNumber: '01',
            type: 'rule',
            badgeTitle: 'CÔNG THỨC & QUY TẮC',
            title: 'Cấu trúc ngữ pháp (Form)',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'Khẳng định:' },
                  { type: 'text', content: ' S + was / were + V-ing ( ' },
                  { type: 'pill', content: 'was' },
                  { type: 'text', content: ' đi với ' },
                  { type: 'pill', content: 'I, He, She, It, Danh từ số ít/không đếm được' },
                  { type: 'text', content: ' ; ' },
                  { type: 'pill', content: 'were' },
                  { type: 'text', content: ' đi với ' },
                  { type: 'pill', content: 'We, You, They, Danh từ số nhiều' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Phủ định:' },
                  { type: 'text', content: " S + was not (wasn't) / were not (weren't) + V-ing ." }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Nghi vấn:' },
                  { type: 'text', content: ' (Wh-) + was / were + S + V-ing...? (ví dụ: ' },
                  { type: 'pill', content: 'What were you doing at nine yesterday?' },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          },
          {
            blockNumber: '02',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: 'Các ngữ cảnh sử dụng chính trong đề thi',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'Hành động đang diễn ra tại một thời điểm xác định trong quá khứ:' },
                  { type: 'text', content: ' Có mốc giờ hoặc thời điểm cụ thể (ví dụ: ' },
                  { type: 'pill', content: 'at 10:00 AM yesterday, at this time last year' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Hành động đang diễn ra thì có hành động khác xen vào (Interrupted actions):' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: 'Hành động đang diễn ra (kéo dài) ➔ chia ' },
                  { type: 'badge', content: 'Quá khứ tiếp diễn' },
                  { type: 'text', content: ' (thường đi sau ' },
                  { type: 'pill', content: 'While / When' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: 'Hành động xen ngang (ngắn) ➔ chia ' },
                  { type: 'badge', content: 'Quá khứ đơn' },
                  { type: 'text', content: ' (thường đi sau ' },
                  { type: 'pill', content: 'When' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Miêu tả bối cảnh / Tình huống tạm thời trong quá khứ.' }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'lesson-6-5',
        lessonNumber: '6.5',
        title: 'Phân biệt Quá khứ đơn (Past Simple) và Quá khứ tiếp diễn (Past Continuous)',
        heroBadge: 'TRỌNG TÂM NGỮ PHÁP · BÀI GIẢNG CHI TIẾT',
        blocks: [
          {
            blockNumber: '01',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: 'Phân biệt bản chất hành động',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'Quá khứ đơn (Past Simple - V2/-ed):' },
                  { type: 'text', content: ' Diễn tả một hoặc chuỗi hành động ' },
                  { type: 'badge', content: 'đã hoàn tất trọn vẹn' },
                  { type: 'text', content: ' , xảy ra nối tiếp nhau (hành động trước xong rồi mới đến hành động sau) (ví dụ: ' },
                  { type: 'pill', content: 'We arrived at the hotel and went to our room' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Quá khứ tiếp diễn (Past Continuous - was/were + V-ing):' },
                  { type: 'text', content: ' Diễn tả hành động ' },
                  { type: 'badge', content: 'chưa hoàn tất, đang diễn tiến' },
                  { type: 'text', content: ' tại một thời điểm hoặc đóng vai trò làm bối cảnh nền cho sự việc khác (ví dụ: ' },
                  { type: 'pill', content: 'The maid was cleaning the room when we arrived' },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          },
          {
            blockNumber: '02',
            type: 'rule',
            badgeTitle: 'CÔNG THỨC & QUY TẮC',
            title: 'So sánh hai cấu trúc kinh điển',
            rows: [
              {
                segments: [
                  { type: 'pill', content: 'When A arrived, we started the meeting:' },
                  { type: 'text', content: ' Khi A đến nơi, chúng tôi bắt đầu cuộc họp (chuỗi hành động nối tiếp ➔ cả 2 đều chia ' },
                  { type: 'badge', content: 'Quá khứ đơn' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'pill', content: 'When A arrived, we were discussing the budget:' },
                  { type: 'text', content: ' Khi A đến nơi thì chúng tôi đang thảo luận ngân sách dở dang (hành động ngắn chen ngang chia ' },
                  { type: 'badge', content: 'Quá khứ đơn' },
                  { type: 'text', content: ' , hành động dài đang diễn ra chia ' },
                  { type: 'badge', content: 'Quá khứ tiếp diễn' },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          },
          {
            blockNumber: '03',
            type: 'rule',
            badgeTitle: 'CÔNG THỨC & QUY TẮC',
            title: 'Quy tắc phân biệt WHEN và WHILE',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'WHEN:' },
                  { type: 'text', content: ' Có thể đứng trước cả Quá khứ đơn (hành động ngắn xen vào: ' },
                  { type: 'pill', content: 'When the phone rang' },
                  { type: 'text', content: ' ) hoặc Quá khứ tiếp diễn ( ' },
                  { type: 'pill', content: 'When I was working' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'WHILE:' },
                  { type: 'text', content: ' Chỉ đứng trước hành động kéo dài / ' },
                  { type: 'badge', content: 'Quá khứ tiếp diễn' },
                  { type: 'text', content: ' ( ' },
                  { type: 'pill', content: 'While I was having breakfast' },
                  { type: 'text', content: ' ). Tuyệt đối ' },
                  { type: 'badge', content: 'KHÔNG dùng While' },
                  { type: 'text', content: ' trước hành động ngắn chia Quá khứ đơn (không dùng: ' },
                  { type: 'pill', content: 'While the post came' },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'lesson-6-6',
        lessonNumber: '6.6',
        title: 'Cấu trúc USED TO (Đã từng / Thói quen trong quá khứ)',
        heroBadge: 'TRỌNG TÂM NGỮ PHÁP · BÀI GIẢNG CHI TIẾT',
        blocks: [
          {
            blockNumber: '01',
            type: 'rule',
            badgeTitle: 'CÔNG THỨC & QUY TẮC',
            title: 'Cấu trúc ngữ pháp (Form)',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'Khẳng định:' },
                  { type: 'text', content: ' ' },
                  { type: 'badge', content: 'S + used to + V-nguyên thể (infinitive)' },
                  { type: 'text', content: ' (áp dụng chung cho mọi ngôi chủ ngữ: ' },
                  { type: 'pill', content: 'I/He/She/We/They used to work...' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Phủ định:' },
                  { type: 'text', content: " S + did not (didn't) " },
                  { type: 'badge', content: 'use to' },
                  { type: 'text', content: ' + V-nguyên thể (chú ý: khi có trợ động từ ' },
                  { type: 'pill', content: "didn't" },
                  { type: 'text', content: ' thì ' },
                  { type: 'pill', content: 'use' },
                  { type: 'text', content: " bỏ chữ 'd')." }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Nghi vấn:' },
                  { type: 'text', content: ' Did + S + ' },
                  { type: 'badge', content: 'use to' },
                  { type: 'text', content: " + V-nguyên thể...? ➔ Yes, S did. / No, S didn't." }
                ]
              }
            ]
          },
          {
            blockNumber: '02',
            type: 'highlight',
            badgeTitle: 'CẢNH BÁO BẪY ĐỀ THI',
            title: 'Lưu ý quan trọng về thì hiện tại',
            rows: [
              {
                segments: [
                  { type: 'text', content: 'Cấu trúc này ' },
                  { type: 'badge', content: 'KHÔNG có dạng hiện tại' },
                  { type: 'text', content: ' (không dùng ' },
                  { type: 'pill', content: 'I use to work...' },
                  { type: 'text', content: ' ). Nếu muốn diễn tả thói quen ở hiện tại, bắt buộc phải dùng thì Hiện tại đơn kết hợp trạng từ tần suất như ' },
                  { type: 'pill', content: 'usually, often, regularly' },
                  { type: 'text', content: ' (ví dụ: ' },
                  { type: 'pill', content: 'I usually take the bus' },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          },
          {
            blockNumber: '03',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: 'Phân biệt USED TO và QUÁ KHỨ ĐƠN (Các trường hợp KHÔNG dùng Used to)',
            rows: [
              {
                segments: [
                  { type: 'text', content: 'Hành động chỉ diễn ra ' },
                  { type: 'badge', content: 'một lần duy nhất' },
                  { type: 'text', content: ' trong quá khứ ➔ Dùng Quá khứ đơn (ví dụ: ' },
                  { type: 'pill', content: 'I attended a workshop last week' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: 'Hành động lặp lại có kèm ' },
                  { type: 'badge', content: 'số lần cụ thể' },
                  { type: 'text', content: ' ➔ Dùng Quá khứ đơn (ví dụ: ' },
                  { type: 'pill', content: 'I called him twice yesterday' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: 'Hành động đi kèm ' },
                  { type: 'badge', content: 'khoảng thời gian xác định với "for"' },
                  { type: 'text', content: ' ➔ Dùng Quá khứ đơn (ví dụ: ' },
                  { type: 'pill', content: 'He lived abroad for two years' },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'topic-07',
    topicNumber: '07',
    title: 'Thì hiện tại hoàn thành',
    lessonCount: 7,
    lessons: [
      {
        id: 'lesson-7-1',
        lessonNumber: '7.1',
        title: 'Thì Hiện tại hoàn thành diễn tả Trải nghiệm (Present Perfect for Past Experiences)',
        heroBadge: 'TRỌNG TÂM NGỮ PHÁP · BÀI GIẢNG CHI TIẾT',
        blocks: [
          {
            blockNumber: '01',
            type: 'rule',
            badgeTitle: 'CÔNG THỨC & QUY TẮC',
            title: 'Công thức cơ bản',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'Khẳng định:' },
                  { type: 'text', content: ' S + have / has + V3/V-ed (ví dụ: ' },
                  { type: 'pill', content: 'She has travelled a lot' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Phủ định:' },
                  { type: 'text', content: ' S + have / has + not + V3/V-ed ( ' },
                  { type: 'pill', content: "haven't / hasn't" },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Nghi vấn:' },
                  { type: 'text', content: ' Have / Has + S + V3/V-ed? (ví dụ: ' },
                  { type: 'pill', content: 'Have you visited the branch?' },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          },
          {
            blockNumber: '02',
            type: 'rule',
            badgeTitle: 'CÔNG THỨC & QUY TẮC',
            title: 'Dấu hiệu nhận biết trải nghiệm trong đề thi',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'Từ chỉ số lần & thời điểm:' },
                  { type: 'text', content: ' ' },
                  { type: 'pill', content: 'before' },
                  { type: 'text', content: ' (trước đây), ' },
                  { type: 'pill', content: 'once' },
                  { type: 'text', content: ' (một lần), ' },
                  { type: 'pill', content: 'twice' },
                  { type: 'text', content: ' (hai lần), ' },
                  { type: 'pill', content: 'several times / many times' },
                  { type: 'text', content: ' (nhiều lần).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'EVER (đã từng):' },
                  { type: 'text', content: ' Thường dùng trong câu hỏi nghi vấn để hỏi ai đó đã từng làm gì trong đời chưa.' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'NEVER (chưa bao giờ):' },
                  { type: 'text', content: ' Dùng trong câu mang nghĩa phủ định, thể hiện việc chưa từng trải qua.' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Vị trí của EVER / NEVER:' },
                  { type: 'text', content: ' Bắt buộc đứng ' },
                  { type: 'badge', content: 'ngay trước động từ phân từ 2 (V3/V-ed)' },
                  { type: 'text', content: ' : ' },
                  { type: 'badge', content: 'have/has + ever/never + V3/V-ed' },
                  { type: 'text', content: ' .' }
                ]
              }
            ]
          },
          {
            blockNumber: '03',
            type: 'rule',
            badgeTitle: 'CÔNG THỨC & QUY TẮC',
            title: 'Kết hợp với Cấu trúc So sánh nhất',
            rows: [
              {
                segments: [
                  { type: 'text', content: 'Mệnh đề hiện tại hoàn thành thường đi sau cấu trúc so sánh nhất để nhấn mạnh trải nghiệm đỉnh điểm:' }
                ]
              },
              {
                segments: [
                  { type: 'pill', content: 'This is the best / most effective [Noun] + S + have/has ever + V3/V-ed' },
                  { type: 'text', content: ' .' }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'lesson-7-2',
        lessonNumber: '7.2',
        title: 'Thì Hiện tại hoàn thành diễn tả Hành động quá khứ để lại kết quả ở Hiện tại (Present Perfect with Present Results)',
        heroBadge: 'TRỌNG TÂM NGỮ PHÁP · BÀI GIẢNG CHI TIẾT',
        blocks: [
          {
            blockNumber: '01',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: 'Các trường hợp áp dụng cốt lõi',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'Hành động quá khứ dẫn đến tình trạng hiện tại:' },
                  { type: 'text', content: ' ' },
                  { type: 'pill', content: 'I have lost my key' },
                  { type: 'text', content: ' (Quá khứ: làm mất chìa khóa ➔ Hiện tại: không vào được nhà). / ' },
                  { type: 'pill', content: 'The server has crashed' },
                  { type: 'text', content: ' (Hệ thống vừa sập ➔ Hiện tại: không truy cập được web).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Thông báo thông tin / Tin tức mới (Announcing News):' },
                  { type: 'text', content: ' Dùng Hiện tại hoàn thành để đưa tin mới (ví dụ: ' },
                  { type: 'pill', content: 'The director has approved the proposal' },
                  { type: 'text', content: ' ). Khi đi vào chi tiết có mốc thời gian cụ thể ( ' },
                  { type: 'pill', content: 'yesterday, last night' },
                  { type: 'text', content: ' ), ta mới chuyển sang Quá khứ đơn.' }
                ]
              }
            ]
          },
          {
            blockNumber: '02',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: 'Phân biệt HAVE BEEN TO và HAVE GONE TO',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'Have / Has been to:' },
                  { type: 'text', content: ' Đã từng đến một địa điểm nào đó và ' },
                  { type: 'badge', content: 'đã quay trở về' },
                  { type: 'text', content: ' hiện tại (ví dụ: ' },
                  { type: 'pill', content: 'He has been to Tokyo three times' },
                  { type: 'text', content: ' - Hiện tại anh ấy không ở Tokyo).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Have / Has gone to:' },
                  { type: 'text', content: ' Đã đi đến một địa điểm nào đó và ' },
                  { type: 'badge', content: 'hiện tại vẫn đang ở đó, chưa về' },
                  { type: 'text', content: ' (ví dụ: ' },
                  { type: 'pill', content: 'She has gone to Paris' },
                  { type: 'text', content: ' - Hiện tại cô ấy đang ở Paris).' }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'lesson-7-3',
        lessonNumber: '7.3',
        title: 'Just, Already và Yet',
        heroBadge: 'TRỌNG TÂM NGỮ PHÁP · BÀI GIẢNG CHI TIẾT',
        blocks: [
          {
            blockNumber: '01',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: '1. JUST (Vừa mới)',
            rows: [
              {
                segments: [
                  { type: 'text', content: 'Diễn tả một hành động vừa mới xảy ra cách thời điểm nói một khoảng thời gian rất ngắn.' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Vị trí:' },
                  { type: 'text', content: ' Đứng ở giữa trợ động từ ' },
                  { type: 'pill', content: 'have/has' },
                  { type: 'text', content: ' và ' },
                  { type: 'pill', content: 'V3/V-ed' },
                  { type: 'text', content: ' (Cấu trúc: ' },
                  { type: 'badge', content: 'have/has + JUST + V3/V-ed' },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          },
          {
            blockNumber: '02',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: '2. ALREADY (Đã... rồi)',
            rows: [
              {
                segments: [
                  { type: 'text', content: 'Diễn tả hành động đã hoàn tất sớm hơn dự kiến.' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Loại câu:' },
                  { type: 'text', content: ' Dùng trong ' },
                  { type: 'badge', content: 'câu khẳng định' },
                  { type: 'text', content: ' .' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Vị trí:' },
                  { type: 'text', content: ' Thường đứng giữa ' },
                  { type: 'pill', content: 'have/has' },
                  { type: 'text', content: ' và ' },
                  { type: 'pill', content: 'V3/V-ed' },
                  { type: 'text', content: ' (Cấu trúc: ' },
                  { type: 'badge', content: 'have/has + ALREADY + V3/V-ed' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Lưu ý:' },
                  { type: 'text', content: ' Không dùng ' },
                  { type: 'pill', content: 'already' },
                  { type: 'text', content: ' trong câu phủ định.' }
                ]
              }
            ]
          },
          {
            blockNumber: '03',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: '3. YET (Chưa / Đã... chưa?)',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'Loại câu:' },
                  { type: 'text', content: ' Dùng trong ' },
                  { type: 'badge', content: 'câu phủ định' },
                  { type: 'text', content: ' (mang nghĩa "vẫn chưa") và ' },
                  { type: 'badge', content: 'câu hỏi nghi vấn' },
                  { type: 'text', content: ' (mang nghĩa "đã... chưa?").' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Vị trí:' },
                  { type: 'text', content: ' Luôn đứng ở ' },
                  { type: 'badge', content: 'cuối câu hoặc cuối mệnh đề' },
                  { type: 'text', content: ' (Cấu trúc: ' },
                  { type: 'pill', content: "haven't/hasn't + V3..." },
                  { type: 'badge', content: 'YET' },
                  { type: 'text', content: ' hoặc ' },
                  { type: 'pill', content: 'Have/Has + S + V3...' },
                  { type: 'badge', content: 'YET?' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Lưu ý:' },
                  { type: 'text', content: ' Không dùng ' },
                  { type: 'pill', content: 'yet' },
                  { type: 'text', content: ' ở cuối câu khẳng định thông thường.' }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'lesson-7-4',
        lessonNumber: '7.4',
        title: 'Cách sử dụng For, Since và Các cụm từ chỉ thời gian chưa kết thúc',
        heroBadge: 'TRỌNG TÂM NGỮ PHÁP · BÀI GIẢNG CHI TIẾT',
        blocks: [
          {
            blockNumber: '01',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: '1. Phân biệt FOR và SINCE',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'FOR + Khoảng thời gian (a period of time):' },
                  { type: 'text', content: ' Dùng khi muốn nói hành động đã kéo dài được bao lâu (ví dụ: ' },
                  { type: 'pill', content: 'for five years, for two weeks, for a long time, for many months' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'SINCE + Mốc thời gian / Mệnh đề quá khứ (a point in time / event):' },
                  { type: 'text', content: ' Dùng khi muốn chỉ thời điểm hoặc sự kiện hành động bắt đầu (ví dụ: ' },
                  { type: 'pill', content: "since 2010, since last Monday, since five o'clock, since she joined the company" },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          },
          {
            blockNumber: '02',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: '2. Cụm từ chỉ khoảng thời gian chưa kết thúc (Unfinished Time)',
            rows: [
              {
                segments: [
                  { type: 'text', content: 'Các từ chỉ thời gian như ' },
                  { type: 'pill', content: 'today, this morning, this week, this year' },
                  { type: 'text', content: ' được dùng với thì Hiện tại hoàn thành khi khoảng thời gian đó ' },
                  { type: 'badge', content: 'vẫn đang diễn ra' },
                  { type: 'text', content: ' tại thời điểm nói.' }
                ]
              }
            ]
          },
          {
            blockNumber: '03',
            type: 'highlight',
            badgeTitle: 'CẢNH BÁO BẪY ĐỀ THI',
            title: '3. Bẫy ngữ pháp đề thi cần lưu ý',
            rows: [
              {
                segments: [
                  { type: 'text', content: 'Không dùng thì Hiện tại đơn với ' },
                  { type: 'pill', content: 'for/since' },
                  { type: 'text', content: ' để chỉ hành động kéo dài tới hiện tại (phải dùng Hiện tại hoàn thành: ' },
                  { type: 'pill', content: 'I have worked here for 5 years' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: 'Câu hỏi bắt đầu bằng ' },
                  { type: 'badge', content: 'When' },
                  { type: 'text', content: ' hoặc ' },
                  { type: 'badge', content: 'What time' },
                  { type: 'text', content: ' luôn hỏi về mốc thời gian cụ thể trong quá khứ, do đó ' },
                  { type: 'badge', content: 'bắt buộc chia Quá khứ đơn' },
                  { type: 'text', content: ' ( ' },
                  { type: 'pill', content: 'When did you arrive?' },
                  { type: 'text', content: ' , KHÔNG dùng ' },
                  { type: 'pill', content: 'When have you arrived?' },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'lesson-7-5',
        lessonNumber: '7.5',
        title: 'Phân biệt Thì Hiện tại hoàn thành và Quá khứ đơn (Present Perfect vs. Past Simple)',
        heroBadge: 'TRỌNG TÂM NGỮ PHÁP · BÀI GIẢNG CHI TIẾT',
        blocks: [
          {
            blockNumber: '01',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: '1. Thì Quá khứ đơn (Past Simple)',
            rows: [
              {
                segments: [
                  { type: 'text', content: 'Diễn tả hành động ' },
                  { type: 'badge', content: 'đã hoàn tất hoàn toàn trong quá khứ' },
                  { type: 'text', content: ' và không còn tiếp diễn hay ảnh hưởng đến hiện tại.' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Dấu hiệu thời gian đã kết thúc (Definite Past Time):' },
                  { type: 'text', content: ' ' },
                  { type: 'pill', content: 'yesterday, last week/month/year, ... ago, in + năm quá khứ (in 2015), when I was a child' },
                  { type: 'text', content: ' .' }
                ]
              }
            ]
          },
          {
            blockNumber: '02',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: '2. Thì Hiện tại hoàn thành (Present Perfect)',
            rows: [
              {
                segments: [
                  { type: 'text', content: 'Diễn tả hành động bắt đầu trong quá khứ và ' },
                  { type: 'badge', content: 'vẫn đang tiếp tục ở hiện tại' },
                  { type: 'text', content: ' , hoặc trải nghiệm đã từng làm tính đến nay mà không nêu thời gian cụ thể.' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Dấu hiệu thời gian (Unfinished Time / Experience):' },
                  { type: 'text', content: ' ' },
                  { type: 'pill', content: 'already, just, yet, ever, never, since, for (kéo dài tới nay), so far, this week/month/year (chưa kết thúc)' },
                  { type: 'text', content: ' .' }
                ]
              }
            ]
          },
          {
            blockNumber: '03',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: '3. So sánh ý nghĩa khi cùng dùng "FOR"',
            rows: [
              {
                segments: [
                  { type: 'pill', content: 'He worked here for two years.' },
                  { type: 'text', content: ' ➔ Hành động đã chấm dứt (Hiện tại anh ấy không còn làm việc ở đây nữa).' }
                ]
              },
              {
                segments: [
                  { type: 'pill', content: 'He has worked here for two years.' },
                  { type: 'text', content: ' ➔ Hành động vẫn đang tiếp diễn (Hiện tại anh ấy vẫn đang làm việc ở đây).' }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'lesson-7-6',
        lessonNumber: '7.6',
        title: 'Thì Hiện tại hoàn thành tiếp diễn (Present Perfect Continuous)',
        heroBadge: 'TRỌNG TÂM NGỮ PHÁP · BÀI GIẢNG CHI TIẾT',
        blocks: [
          {
            blockNumber: '01',
            type: 'rule',
            badgeTitle: 'CÔNG THỨC & QUY TẮC',
            title: 'Công thức cơ bản',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'Khẳng định:' },
                  { type: 'text', content: ' S + have / has + been + V-ing (ví dụ: ' },
                  { type: 'pill', content: 'They have been running for two hours' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Phủ định:' },
                  { type: 'text', content: ' S + have / has + not + been + V-ing ( ' },
                  { type: 'pill', content: "haven't / hasn't been + V-ing" },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Nghi vấn:' },
                  { type: 'text', content: ' Have / Has + S + been + V-ing? (ví dụ: ' },
                  { type: 'pill', content: 'How long have you been waiting?' },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          },
          {
            blockNumber: '02',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: 'Các trường hợp sử dụng trọng tâm trong đề thi',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'Nhấn mạnh thời lượng kéo dài:' },
                  { type: 'text', content: ' Thường xuyên đi kèm với ' },
                  { type: 'pill', content: 'for' },
                  { type: 'text', content: ' (khoảng thời gian), ' },
                  { type: 'pill', content: 'since' },
                  { type: 'text', content: ' (mốc thời gian), ' },
                  { type: 'pill', content: 'all day, all morning, all week' },
                  { type: 'text', content: ' (ví dụ: ' },
                  { type: 'pill', content: "I've been working on this report all morning" },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Giải thích cho một hiện trạng/kết quả ở hiện tại:' },
                  { type: 'text', content: ' Hành động vừa mới diễn ra liên tục để lại dấu hiệu nhìn thấy được ở hiện tại (ví dụ: ' },
                  { type: 'pill', content: 'They look tired because they have been working overtime' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Hành động mang tính chất tạm thời:' },
                  { type: 'text', content: ' Diễn tả một tình trạng tạm thời kéo dài trong một khoảng thời gian (ví dụ: ' },
                  { type: 'pill', content: "I've been living here for five months" },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'lesson-7-7',
        lessonNumber: '7.7',
        title: 'Phân biệt Thì Hiện tại hoàn thành và Hiện tại hoàn thành tiếp diễn (Present Perfect vs. Present Perfect Continuous)',
        heroBadge: 'TRỌNG TÂM NGỮ PHÁP · BÀI GIẢNG CHI TIẾT',
        blocks: [
          {
            blockNumber: '01',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: '1. Trọng tâm: KẾT QUẢ vs. QUÁ TRÌNH',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'Hiện tại hoàn thành (Present Perfect Simple):' },
                  { type: 'text', content: ' Nhấn mạnh vào ' },
                  { type: 'badge', content: 'kết quả' },
                  { type: 'text', content: ' hoặc ' },
                  { type: 'badge', content: 'số lượng / số lần hoàn thành' },
                  { type: 'text', content: ' (Trả lời câu hỏi: ' },
                  { type: 'pill', content: 'How much? How many? How many times?' },
                  { type: 'text', content: ' ). Ví dụ: ' },
                  { type: 'pill', content: "I've written three reports today; We've visited the factory twice." }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Hiện tại hoàn thành tiếp diễn (Present Perfect Continuous):' },
                  { type: 'text', content: ' Nhấn mạnh vào ' },
                  { type: 'badge', content: 'quá trình liên tục' },
                  { type: 'text', content: ' và ' },
                  { type: 'badge', content: 'thời lượng hành động' },
                  { type: 'text', content: ' (Trả lời câu hỏi: ' },
                  { type: 'pill', content: 'How long?' },
                  { type: 'text', content: ' ). Ví dụ: ' },
                  { type: 'pill', content: "I've been writing reports all morning." }
                ]
              }
            ]
          },
          {
            blockNumber: '02',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: '2. Tính chất Tình huống',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'Đơn:' },
                  { type: 'text', content: ' Dùng cho các sự việc mang tính chất cố định, lâu dài ( ' },
                  { type: 'pill', content: 'The building has stood here for a century' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Tiếp diễn:' },
                  { type: 'text', content: ' Dùng cho các tình huống mang tính chất tạm thời ( ' },
                  { type: 'pill', content: "I've been staying at this hotel for two days" },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          },
          {
            blockNumber: '03',
            type: 'highlight',
            badgeTitle: 'CẢNH BÁO BẪY ĐỀ THI',
            title: '3. Động từ chỉ trạng thái (Stative Verbs) - Bẫy đề thi kinh điển',
            rows: [
              {
                segments: [
                  { type: 'text', content: 'Các động từ chỉ nhận thức, cảm xúc, sở hữu hoặc trạng thái như: ' },
                  { type: 'pill', content: 'know, understand, want, believe, like, be' },
                  { type: 'text', content: ' ' },
                  { type: 'badge', content: 'tuyệt đối KHÔNG chia ở dạng tiếp diễn' },
                  { type: 'text', content: ' , mà bắt buộc phải dùng thì ' },
                  { type: 'badge', content: 'Hiện tại hoàn thành đơn' },
                  { type: 'text', content: ' (ví dụ: ' },
                  { type: 'pill', content: 'has known' },
                  { type: 'text', content: ' - ĐÚNG; ' },
                  { type: 'pill', content: 'has been knowing' },
                  { type: 'text', content: ' - SAI).' }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'topic-08',
    topicNumber: '08',
    title: 'Thì tương lai',
    lessonCount: 4,
    lessons: [
      {
        id: 'lesson-8-1',
        lessonNumber: '8.1',
        title: 'Thì tương lai gần với "Be going to"',
        heroBadge: 'TRỌNG TÂM NGỮ PHÁP · BÀI GIẢNG CHI TIẾT',
        blocks: [
          {
            blockNumber: '01',
            type: 'rule',
            badgeTitle: 'CÔNG THỨC & QUY TẮC',
            title: 'Cấu trúc ngữ pháp (Form)',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'Thể khẳng định:' },
                  { type: 'text', content: ' S + am / is / are + going to + V (nguyên mẫu)' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Thể phủ định:' },
                  { type: 'text', content: ' S + am / is / are + not + going to + V (nguyên mẫu)' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Thể nghi vấn:' },
                  { type: 'text', content: ' Am / Is / Are + S + going to + V (nguyên mẫu)?' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Câu trả lời ngắn:' },
                  { type: 'text', content: ' ' },
                  { type: 'pill', content: "Yes, S + am/is/are. / No, S + am not/isn't/aren't." }
                ]
              }
            ]
          },
          {
            blockNumber: '02',
            type: 'rule',
            badgeTitle: 'CÔNG THỨC & QUY TẮC',
            title: 'Cách sử dụng chính (Uses)',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'Kế hoạch, dự định tương lai (Future plans / intentions):' },
                  { type: 'text', content: ' Dùng để diễn tả một hành động đã được dự tính hoặc quyết định từ trước thời điểm nói (thường đi kèm các trạng từ như ' },
                  { type: 'pill', content: 'tomorrow, next week, this afternoon' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Dự đoán dựa trên bằng chứng ở hiện tại (Predictions based on present evidence):' },
                  { type: 'text', content: ' Khi có dấu hiệu thực tế ngay lúc nói báo hiệu một sự việc sắp sửa xảy ra (ví dụ: nhìn tình trạng kẹt xe ➔ dự đoán sẽ bị trễ).' }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'lesson-8-2',
        lessonNumber: '8.2',
        title: 'Thì tương lai đơn với "Will" và "Shall"',
        heroBadge: 'TRỌNG TÂM NGỮ PHÁP · BÀI GIẢNG CHI TIẾT',
        blocks: [
          {
            blockNumber: '01',
            type: 'rule',
            badgeTitle: 'CÔNG THỨC & QUY TẮC',
            title: 'Cấu trúc ngữ pháp (Form)',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'Thể khẳng định:' },
                  { type: 'text', content: " S + will ('ll) + V (nguyên mẫu) (dùng chung cho mọi ngôi chủ ngữ)." }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Thể phủ định:' },
                  { type: 'text', content: " S + will not (won't) + V (nguyên mẫu) ." }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Thể nghi vấn:' },
                  { type: 'text', content: ' Will + S + V (nguyên mẫu)?' }
                ]
              }
            ]
          },
          {
            blockNumber: '02',
            type: 'rule',
            badgeTitle: 'CÔNG THỨC & QUY TẮC',
            title: 'Cách sử dụng chính (Uses)',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'Sự thật hiển nhiên hoặc Dự đoán trong tương lai (Predictions / Certain future):' },
                  { type: 'text', content: ' Thường đi kèm với các cụm như ' },
                  { type: 'pill', content: 'I think, I believe' },
                  { type: 'text', content: ' hoặc trạng từ ' },
                  { type: 'pill', content: 'probably' },
                  { type: 'text', content: ' (có lẽ), ' },
                  { type: 'pill', content: 'definitely' },
                  { type: 'text', content: ' (chắc chắn). Lưu ý vị trí trạng từ: ' },
                  { type: 'badge', content: 'will probably + V' },
                  { type: 'text', content: ' nhưng ' },
                  { type: 'badge', content: "definitely won't + V" },
                  { type: 'text', content: ' .' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Quyết định đưa ra ngay tại thời điểm nói (Instant decisions):' },
                  { type: 'text', content: ' Quyết định tức thì, không có kế hoạch từ trước (ví dụ: ' },
                  { type: 'pill', content: "Mr. Lee is out? I'll call him later" },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Lời hứa (Promises), Lời đề nghị giúp đỡ (Offers), Lời cảnh báo (Warnings):' },
                  { type: 'text', content: ' (ví dụ: ' },
                  { type: 'pill', content: 'We will deliver on time; Finish the report or you will face penalties' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Cấu trúc với SHALL:' },
                  { type: 'text', content: ' Dùng trong câu hỏi với chủ ngữ ' },
                  { type: 'pill', content: 'I' },
                  { type: 'text', content: ' hoặc ' },
                  { type: 'pill', content: 'We' },
                  { type: 'text', content: ' để đưa ra lời đề nghị giúp đỡ hoặc gợi ý lịch sự ( ' },
                  { type: 'pill', content: 'Shall I...? / Shall we...?' },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'lesson-8-3',
        lessonNumber: '8.3',
        title: 'Cách dùng Thì Hiện tại tiếp diễn và Hiện tại đơn để chỉ Tương lai',
        heroBadge: 'TRỌNG TÂM NGỮ PHÁP · BÀI GIẢNG CHI TIẾT',
        blocks: [
          {
            blockNumber: '01',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: '1. Thì Hiện tại tiếp diễn (Present Continuous - am/is/are + V-ing)',
            rows: [
              {
                segments: [
                  { type: 'text', content: 'Dùng để diễn tả các ' },
                  { type: 'badge', content: 'kế hoạch, lịch hẹn cá nhân hoặc sự kiện đã được thu xếp, ấn định thời gian cụ thể' },
                  { type: 'text', content: ' từ trước (Personal arrangements).' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: 'Thường đi kèm mốc thời gian rõ ràng trong tương lai: ' },
                  { type: 'pill', content: 'tomorrow, next week, this Friday' },
                  { type: 'text', content: ' (ví dụ: ' },
                  { type: 'pill', content: "I'm giving a presentation next Wednesday; We are meeting the client at two o'clock" },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          },
          {
            blockNumber: '02',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: '2. Thì Hiện tại đơn (Present Simple - V-s/es) chỉ tương lai',
            rows: [
              {
                segments: [
                  { type: 'text', content: 'Dùng để diễn tả các sự kiện diễn ra theo ' },
                  { type: 'badge', content: 'lịch trình, thời khóa biểu, lịch tàu xe, máy bay hoặc chương trình công tác chính thức' },
                  { type: 'text', content: ' (Timetables / Official programmes).' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: 'Các động từ hay gặp: ' },
                  { type: 'pill', content: 'start, begin, finish, leave, depart, arrive, open, close' },
                  { type: 'text', content: ' (ví dụ: ' },
                  { type: 'pill', content: 'The train leaves at 10.25; The conference begins on Monday' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Lưu ý:' },
                  { type: 'text', content: ' Không dùng thì Hiện tại đơn cho các cuộc hẹn hoặc sắp xếp cá nhân.' }
                ]
              }
            ]
          },
          {
            blockNumber: '03',
            type: 'highlight',
            badgeTitle: 'CẢNH BÁO BẪY ĐỀ THI',
            title: '3. Mệnh đề trạng ngữ chỉ thời gian (Time Clauses - Bẫy đề thi kinh điển)',
            rows: [
              {
                segments: [
                  { type: 'text', content: 'Trong các mệnh đề bắt đầu bằng liên từ thời gian như ' },
                  { type: 'pill', content: 'when, as soon as, before, after, until' },
                  { type: 'text', content: ' : ' },
                  { type: 'badge', content: 'BẮT BUỘC dùng Thì Hiện tại đơn' },
                  { type: 'text', content: ' để chỉ hành động tương lai, TUYỆT ĐỐI ' },
                  { type: 'badge', content: 'KHÔNG dùng "will"' },
                  { type: 'text', content: ' .' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: 'Công thức: ' },
                  { type: 'pill', content: 'Mệnh đề chính (will + V) + when / as soon as / before / after + S + V (hiện tại đơn)' },
                  { type: 'text', content: ' .' }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'lesson-8-4',
        lessonNumber: '8.4',
        title: 'So sánh các dạng thức diễn đạt Tương lai (Will vs. Be going to vs. Present Continuous)',
        heroBadge: 'TRỌNG TÂM NGỮ PHÁP · BÀI GIẢNG CHI TIẾT',
        blocks: [
          {
            blockNumber: '01',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: '1. Dự đoán sự việc trong tương lai (Predictions)',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'WILL:' },
                  { type: 'text', content: ' Dự đoán dựa trên ý kiến chủ quan, cảm nghĩ hoặc niềm tin cá nhân, không có bằng chứng trực quan lúc nói (thường đi với ' },
                  { type: 'pill', content: 'I think, I believe, probably, hope' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'BE GOING TO:' },
                  { type: 'text', content: ' Dự đoán có căn cứ, dấu hiệu thực tế rõ ràng ở hiện tại mà mắt thấy tai nghe (ví dụ: mây đen ➔ trời sắp mưa; số liệu sụt giảm ➔ sắp cắt giảm chi phí).' }
                ]
              }
            ]
          },
          {
            blockNumber: '02',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: '2. Kế hoạch và Dự định (Plans vs. Arrangements)',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'BE GOING TO:' },
                  { type: 'text', content: ' Diễn tả một ý định, kế hoạch đã nảy sinh trong đầu nhưng chưa được thu xếp, ấn định thời gian cụ thể hoặc chưa hẹn với ai (Intention / Plan).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'PRESENT CONTINUOUS (Hiện tại tiếp diễn):' },
                  { type: 'text', content: ' Diễn tả một lịch hẹn, kế hoạch đã được thu xếp xong xuôi, có ấn định ngày giờ hoặc đã chốt lịch hẹn với người khác (Arrangement / Appointment). Khi hỏi về kế hoạch tối nay hoặc cuối tuần, người bản xứ ưu tiên dùng Hiện tại tiếp diễn: ' },
                  { type: 'pill', content: 'Are you doing anything tonight?' },
                  { type: 'text', content: ' .' }
                ]
              }
            ]
          },
          {
            blockNumber: '03',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: '3. Quyết định tức thì tại thời điểm nói (Immediate Decisions)',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'WILL:' },
                  { type: 'text', content: ' BẮT BUỘC dùng ' },
                  { type: 'pill', content: 'will' },
                  { type: 'text', content: ' khi quyết định được đưa ra ngay lập tức tại thời điểm nói khi đối mặt với một tình huống phát sinh bất ngờ (TUYỆT ĐỐI KHÔNG dùng ' },
                  { type: 'pill', content: 'present simple' },
                  { type: 'text', content: ' hay ' },
                  { type: 'pill', content: 'be going to' },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'topic-09',
    topicNumber: '09',
    title: 'Động từ khiếm khuyết',
    lessonCount: 8,
    lessons: [
      {
        id: 'lesson-9-1',
        lessonNumber: '9.1',
        title: 'Động từ khiếm khuyết Can và Can\'t',
        heroBadge: 'TRỌNG TÂM NGỮ PHÁP · BÀI GIẢNG CHI TIẾT',
        blocks: [
          {
            blockNumber: '01',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: 'Đặc trưng ngữ pháp cốt lõi của Can / Can\'t',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'Sau Can / Can\'t luôn là Động từ nguyên mẫu không "to" (Bare Infinitive):' },
                  { type: 'text', content: ' Tuyệt đối không dùng ' },
                  { type: 'pill', content: 'to-V' },
                  { type: 'text', content: ' , ' },
                  { type: 'pill', content: 'V-ing' },
                  { type: 'text', content: ' hay ' },
                  { type: 'pill', content: 'V-ed' },
                  { type: 'text', content: ' (ví dụ: ' },
                  { type: 'pill', content: 'can run, can submit' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Không biến đổi theo chủ ngữ:' },
                  { type: 'text', content: ' Không thêm ' },
                  { type: 'pill', content: '-s/-es' },
                  { type: 'text', content: ' khi đi với chủ ngữ ngôi thứ ba số ít ( ' },
                  { type: 'pill', content: 'he/she/it can' },
                  { type: 'text', content: ' , không dùng ' },
                  { type: 'pill', content: 'cans' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Không mượn trợ động từ do/does/don\'t/doesn\'t:' },
                  { type: 'text', content: ' Phủ định trực tiếp là ' },
                  { type: 'pill', content: "cannot (can't)" },
                  { type: 'text', content: ' và đảo ngữ trực tiếp trong câu hỏi ' },
                  { type: 'pill', content: 'Can you...?' },
                  { type: 'text', content: ' .' }
                ]
              }
            ]
          },
          {
            blockNumber: '02',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: 'Các chức năng thường gặp trong bài thi đề thi',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'Diễn tả khả năng, năng lực (Ability):' },
                  { type: 'text', content: ' Năng lực làm được việc gì ở hiện tại (ví dụ: ' },
                  { type: 'pill', content: 'can speak Spanish, can manage a team' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Diễn tả sự cho phép hoặc khả năng có thể xảy ra (Permission / Possibility):' },
                  { type: 'text', content: ' Được phép làm gì hoặc có thể làm gì (ví dụ: ' },
                  { type: 'pill', content: 'You can use this software; Guests cannot enter without a badge' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Sắp xếp lịch hẹn / Đưa ra yêu cầu (Arrangements / Requests):' },
                  { type: 'text', content: ' (ví dụ: ' },
                  { type: 'pill', content: 'The manager can see you at ten; Can you send me the file?' },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'lesson-9-2',
        lessonNumber: '9.2',
        title: 'Could và Will be able to',
        heroBadge: 'TRỌNG TÂM NGỮ PHÁP · BÀI GIẢNG CHI TIẾT',
        blocks: [
          {
            blockNumber: '01',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: '1. Khả năng trong Quá khứ: COULD / COULDN\'T + V-nguyên mẫu (Bare Infinitive)',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'Diễn tả năng lực hoặc khả năng xảy ra trong quá khứ (Past Ability / Possibility):' },
                  { type: 'text', content: ' Diễn tả một khả năng chung trong quá khứ (ví dụ: ' },
                  { type: 'pill', content: "Mozart could write music when he was young; We couldn't finish the report yesterday" },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Dấu hiệu nhận biết:' },
                  { type: 'text', content: ' Các mốc thời gian quá khứ như ' },
                  { type: 'pill', content: 'yesterday, last year, years ago, when I was...' },
                  { type: 'text', content: ' .' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Cấu trúc câu hỏi:' },
                  { type: 'text', content: ' ' },
                  { type: 'pill', content: 'Could + S + V-bare?' },
                  { type: 'text', content: ' (ví dụ: ' },
                  { type: 'pill', content: 'Could you contact the supplier yesterday?' },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          },
          {
            blockNumber: '02',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: '2. Khả năng trong Tương lai: WILL / WON\'T BE ABLE TO + V-nguyên mẫu',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'Diễn tả khả năng trong tương lai (Future Ability / Possibility):' },
                  { type: 'text', content: ' Vì ' },
                  { type: 'pill', content: 'can' },
                  { type: 'text', content: ' không có dạng tương lai nên ta dùng cụm tương đương ' },
                  { type: 'pill', content: 'will be able to' },
                  { type: 'text', content: ' (ví dụ: ' },
                  { type: 'pill', content: "Karen will be able to speak Russian next year; I won't be able to attend tomorrow" },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Dấu hiệu nhận biết:' },
                  { type: 'text', content: ' Các trạng từ tương lai như ' },
                  { type: 'pill', content: 'tomorrow, next week, in the future, once / after...' },
                  { type: 'text', content: ' .' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Cấu trúc câu hỏi:' },
                  { type: 'text', content: ' ' },
                  { type: 'pill', content: 'Will + S + be able to + V-bare?' }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'lesson-9-3',
        lessonNumber: '9.3',
        title: 'Can, Could và May (Xin phép và Đưa ra yêu cầu)',
        heroBadge: 'TRỌNG TÂM NGỮ PHÁP · BÀI GIẢNG CHI TIẾT',
        blocks: [
          {
            blockNumber: '01',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: '1. Xin phép (Asking for Permission)',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'Thân mật (Informal):' },
                  { type: 'text', content: ' ' },
                  { type: 'pill', content: 'Can I / Can we + V-bare...?' },
                  { type: 'text', content: ' (ví dụ: ' },
                  { type: 'pill', content: 'Can I use your pen?' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Trang trọng, lịch sự (Formal / Polite):' },
                  { type: 'text', content: ' ' },
                  { type: 'pill', content: 'Could I / May I + V-bare...?' },
                  { type: 'text', content: ' (ví dụ: ' },
                  { type: 'pill', content: 'Could I borrow this file? May I make a suggestion?' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Văn bản thông báo hoặc quy định chính thức (Formal Rules):' },
                  { type: 'text', content: ' Thường dùng ' },
                  { type: 'pill', content: 'may / may not' },
                  { type: 'text', content: ' (ví dụ: ' },
                  { type: 'pill', content: 'Candidates may not use mobile phones during the test; You may begin now' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Cách hồi đáp:' },
                  { type: 'text', content: ' Đồng ý ( ' },
                  { type: 'pill', content: 'Yes, of course; Certainly; Yes, you may' },
                  { type: 'text', content: ' ) hoặc Từ chối lịch sự ( ' },
                  { type: 'pill', content: "I'm afraid not; I'm sorry, you can't" },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          },
          {
            blockNumber: '02',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: '2. Đưa ra yêu cầu / Nhờ vả ai đó (Making a Request)',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'Thân mật:' },
                  { type: 'text', content: ' ' },
                  { type: 'pill', content: 'Can you + V-bare...?' },
                  { type: 'text', content: ' (ví dụ: ' },
                  { type: 'pill', content: 'Can you help me with these boxes?' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Trang trọng, lịch sự:' },
                  { type: 'text', content: ' ' },
                  { type: 'pill', content: 'Could you (+ please) + V-bare...?' },
                  { type: 'text', content: ' (ví dụ: ' },
                  { type: 'pill', content: 'Could you please email me the report?' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Lưu ý:' },
                  { type: 'text', content: ' Không dùng "May you" để đưa ra yêu cầu nhờ vả.' }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'lesson-9-4',
        lessonNumber: '9.4',
        title: 'Cấu trúc Have to và Need to',
        heroBadge: 'TRỌNG TÂM NGỮ PHÁP · BÀI GIẢNG CHI TIẾT',
        blocks: [
          {
            blockNumber: '01',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: '1. Đặc điểm hình thức (Form)',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'Khẳng định:' },
                  { type: 'text', content: ' Chủ ngữ số nhiều / I / You / We / They ➔ ' },
                  { type: 'pill', content: 'have to / need to + V-bare' },
                  { type: 'text', content: ' . Chủ ngữ số ít (He / She / It) ➔ ' },
                  { type: 'pill', content: 'has to / needs to + V-bare' },
                  { type: 'text', content: ' .' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Phủ định:' },
                  { type: 'text', content: ' Dùng trợ động từ ' },
                  { type: 'pill', content: "don't have to / don't need to" },
                  { type: 'text', content: ' (số nhiều) hoặc ' },
                  { type: 'pill', content: "doesn't have to / doesn't need to" },
                  { type: 'text', content: ' (số ít) + ' },
                  { type: 'pill', content: 'V-bare' },
                  { type: 'text', content: ' .' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Nghi vấn:' },
                  { type: 'text', content: ' Mượn trợ động từ ' },
                  { type: 'pill', content: 'Do / Does + S + have to / need to + V-bare?' }
                ]
              }
            ]
          },
          {
            blockNumber: '02',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: '2. Ý nghĩa và Ngữ cảnh ứng dụng',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'Have to + V-bare:' },
                  { type: 'text', content: ' Diễn tả sự bắt buộc mang tính khách quan do luật pháp, quy định công ty hoặc tình huống bắt buộc (ví dụ: ' },
                  { type: 'pill', content: 'Employees have to wear safety helmets; Cars have to stop at the red light' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Need to + V-bare:' },
                  { type: 'text', content: ' Diễn tả sự cần thiết xuất phát từ nhu cầu thực tế hoặc một giải pháp hợp lý (ví dụ: ' },
                  { type: 'pill', content: 'I need to improve my skills; She needs to call the client' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: "Don't have to / Don't need to:" },
                  { type: 'text', content: ' Mang nghĩa ' },
                  { type: 'badge', content: '"không cần thiết / không bắt buộc phải làm"' },
                  { type: 'text', content: ' (ví dụ: ' },
                  { type: 'pill', content: "You don't have to pay today ➔ việc trả tiền là không bắt buộc" },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Lưu ý cấu trúc mở rộng:' },
                  { type: 'text', content: ' ' },
                  { type: 'pill', content: "needn't + V-bare" },
                  { type: 'text', content: ' (không có "to") mang nghĩa tương đương với ' },
                  { type: 'pill', content: "don't need to" },
                  { type: 'text', content: ' .' }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'lesson-9-5',
        lessonNumber: '9.5',
        title: 'Cấu trúc Must và Mustn\'t',
        heroBadge: 'TRỌNG TÂM NGỮ PHÁP · BÀI GIẢNG CHI TIẾT',
        blocks: [
          {
            blockNumber: '01',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: '1. Đặc điểm hình thức của MUST',
            rows: [
              {
                segments: [
                  { type: 'text', content: 'Sau ' },
                  { type: 'badge', content: "Must / Must not (Mustn't)" },
                  { type: 'text', content: ' luôn luôn là ' },
                  { type: 'badge', content: 'Động từ nguyên mẫu không "to" (Bare Infinitive)' },
                  { type: 'text', content: ' .' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: 'Không thêm ' },
                  { type: 'pill', content: '-s/-es' },
                  { type: 'text', content: ' dù chủ ngữ là ngôi thứ ba số ít ( ' },
                  { type: 'pill', content: 'He must attend' },
                  { type: 'text', content: ' , không dùng ' },
                  { type: 'pill', content: 'musts' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: 'Tuyệt đối không dùng ' },
                  { type: 'pill', content: 'to-V' },
                  { type: 'text', content: ' sau ' },
                  { type: 'pill', content: 'must' },
                  { type: 'text', content: ' (không dùng ' },
                  { type: 'pill', content: 'must to go' },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          },
          {
            blockNumber: '02',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: '2. Ý nghĩa và Ứng dụng trong bài thi đề thi',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'MUST (Phải làm gì):' },
                  { type: 'text', content: ' Diễn tả tính cấp bách, cần thiết theo ý kiến người nói, hoặc dùng trong các thông báo, quy tắc, hướng dẫn trang trọng (ví dụ: ' },
                  { type: 'pill', content: 'Passengers must fasten seat belts; Candidates must answer all questions' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: "MUST NOT / MUSTN'T (CẤM / Không được phép làm gì):" },
                  { type: 'text', content: ' Diễn tả sự cấm đoán tuyệt đối theo luật lệ, quy định (ví dụ: ' },
                  { type: 'pill', content: 'Visitors must not smoke; Employees must not disclose confidential data' },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          },
          {
            blockNumber: '03',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: "3. Phân biệt then chốt giữa MUSTN'T và DON'T HAVE TO",
            rows: [
              {
                segments: [
                  { type: 'badge', content: "Mustn't:" },
                  { type: 'text', content: ' CẤM LÀM (Nếu làm là sai luật hoặc vi phạm quy định).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: "Don't have to:" },
                  { type: 'text', content: ' KHÔNG BẮT BUỘC / KHÔNG CẦN THIẾT (Có thể làm hoặc không làm tùy ý).' }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'lesson-9-6',
        lessonNumber: '9.6',
        title: 'Had to và Will have to (Dạng Quá khứ và Tương lai của Must / Have to)',
        heroBadge: 'TRỌNG TÂM NGỮ PHÁP · BÀI GIẢNG CHI TIẾT',
        blocks: [
          {
            blockNumber: '01',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: '1. Sự bắt buộc trong Quá khứ: HAD TO / DIDN\'T HAVE TO + V-nguyên mẫu (Bare Infinitive)',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'Khẳng định:' },
                  { type: 'text', content: ' ' },
                  { type: 'pill', content: 'Had to + V-bare' },
                  { type: 'text', content: ' (đã phải làm gì trong quá khứ do tình thế hoặc quy định - ví dụ: ' },
                  { type: 'pill', content: 'They had to get visas last year; She had to travel to the USA' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Phủ định:' },
                  { type: 'text', content: ' ' },
                  { type: 'pill', content: "Did not (Didn't) have to + V-bare" },
                  { type: 'text', content: ' (đã không phải / không cần thiết phải làm gì - ví dụ: ' },
                  { type: 'pill', content: "We didn't have to show our IDs" },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Nghi vấn:' },
                  { type: 'text', content: ' ' },
                  { type: 'pill', content: 'Did + S + have to + V-bare?' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Dấu hiệu thời gian:' },
                  { type: 'text', content: ' ' },
                  { type: 'pill', content: 'yesterday, last month, two years ago, in 2020...' }
                ]
              }
            ]
          },
          {
            blockNumber: '02',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: '2. Sự bắt buộc trong Tương lai: WILL HAVE TO / WON\'T HAVE TO + V-nguyên mẫu',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'Khẳng định:' },
                  { type: 'text', content: ' ' },
                  { type: 'pill', content: 'Will have to + V-bare' },
                  { type: 'text', content: ' (sẽ phải làm gì trong tương lai - ví dụ: ' },
                  { type: 'pill', content: 'We will have to pay more taxes next year' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Phủ định:' },
                  { type: 'text', content: ' ' },
                  { type: 'pill', content: "Will not (Won't) have to + V-bare" },
                  { type: 'text', content: ' (sẽ không phải làm gì - ví dụ: ' },
                  { type: 'pill', content: "You won't have to wait long" },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Nghi vấn:' },
                  { type: 'text', content: ' ' },
                  { type: 'pill', content: 'Will + S + have to + V-bare?' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Dấu hiệu thời gian:' },
                  { type: 'text', content: ' ' },
                  { type: 'pill', content: 'tomorrow, next week, in the future, soon...' }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'lesson-9-7',
        lessonNumber: '9.7',
        title: 'Cách đưa ra lời khuyên và khuyến nghị với Should, Ought to và Must',
        heroBadge: 'TRỌNG TÂM NGỮ PHÁP · BÀI GIẢNG CHI TIẾT',
        blocks: [
          {
            blockNumber: '01',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: '1. Đưa ra lời khuyên thông thường: SHOULD và OUGHT TO',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'Ý nghĩa:' },
                  { type: 'text', content: ' Diễn tả lời khuyên rằng một hành động nào đó là một ý tưởng hay, nên làm (ví dụ: ' },
                  { type: 'pill', content: 'You should wear a suit; You ought to check the file' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Quy tắc hình thức:' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Should + V-nguyên mẫu (Bare Infinitive):' },
                  { type: 'text', content: ' Tuyệt đối KHÔNG có "to" ( ' },
                  { type: 'pill', content: 'You should contact' },
                  { type: 'text', content: ' , không dùng ' },
                  { type: 'pill', content: 'should to contact' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Ought TO + V-nguyên mẫu:' },
                  { type: 'text', content: ' Bắt buộc phải có giới từ "to" đi kèm ( ' },
                  { type: 'pill', content: 'You ought to find out' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Khuyên không nên làm:' },
                  { type: 'text', content: ' Thường dùng ' },
                  { type: 'pill', content: "shouldn't + V-bare" },
                  { type: 'text', content: ' (ví dụ: ' },
                  { type: 'pill', content: "You shouldn't send sensitive data over public Wi-Fi" },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Hỏi xin lời khuyên:' },
                  { type: 'text', content: ' Dùng ' },
                  { type: 'pill', content: 'Should I / Should we + V-bare?' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Cụm diễn đạt tự nhiên:' },
                  { type: 'text', content: ' ' },
                  { type: 'pill', content: "I think you should... / I don't think you should..." }
                ]
              }
            ]
          },
          {
            blockNumber: '02',
            type: 'highlight',
            badgeTitle: 'ĐIỂN NHẤN KIẾN THỨC',
            title: '2. Đưa ra lời khuyên / khuyến nghị mạnh mẽ: (REALLY) MUST',
            rows: [
              {
                segments: [
                  { type: 'text', content: 'Dùng ' },
                  { type: 'pill', content: '(really) must + V-bare' },
                  { type: 'text', content: ' khi muốn nhấn mạnh một lời khuyên chân thành, cực kỳ nhiệt tình hoặc đề xuất điều gì đó rất đáng trải nghiệm (mạnh hơn ' },
                  { type: 'pill', content: 'should' },
                  { type: 'text', content: ' ) (ví dụ: ' },
                  { type: 'pill', content: 'You really must try this new project management app' },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'lesson-9-8',
        lessonNumber: '9.8',
        title: 'Các động từ khiếm khuyết phỏng đoán Might, May, Must be và Can\'t be',
        heroBadge: 'TRỌNG TÂM NGỮ PHÁP · BÀI GIẢNG CHI TIẾT',
        blocks: [
          {
            blockNumber: '01',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: '1. Phỏng đoán không chắc chắn (~50%): MIGHT (NOT) và MAY (NOT)',
            rows: [
              {
                segments: [
                  { type: 'text', content: 'Dùng khi người nói dự đoán một sự việc có thể xảy ra nhưng ' },
                  { type: 'badge', content: 'không chắc chắn' },
                  { type: 'text', content: ' (ví dụ: ' },
                  { type: 'pill', content: 'The package might arrive tomorrow; Mr. Clement may be in a meeting' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'May not / Might not + V-bare:' },
                  { type: 'text', content: ' Có thể sẽ không... (ví dụ: ' },
                  { type: 'pill', content: 'The order may not arrive on time' },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          },
          {
            blockNumber: '02',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: '2. Phỏng đoán gần như chắc chắn là ĐÚNG (Logical Deduction - True): MUST BE / MUST + V-bare',
            rows: [
              {
                segments: [
                  { type: 'text', content: 'Dùng khi người nói ' },
                  { type: 'badge', content: 'gần như chắc chắn 100%' },
                  { type: 'text', content: ' một điều gì đó là đúng dựa trên các căn cứ hoặc bằng chứng rất rõ ràng (mang nghĩa: ' },
                  { type: 'pill', content: 'Chắc hẳn là / Chắc chắn là' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: 'Ví dụ: ' },
                  { type: 'pill', content: 'You worked for 12 hours straight without rest; you' },
                  { type: 'text', content: ' ' },
                  { type: 'badge', content: 'must be' },
                  { type: 'text', content: ' ' },
                  { type: 'pill', content: 'exhausted.' }
                ]
              }
            ]
          },
          {
            blockNumber: '03',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: '3. Phỏng đoán gần như chắc chắn là SAI/KHÔNG THỂ (Logical Deduction - Impossible): CAN\'T BE / CAN\'T + V-bare',
            rows: [
              {
                segments: [
                  { type: 'text', content: 'Dùng khi có bằng chứng chứng minh một điều gì đó ' },
                  { type: 'badge', content: 'chắc chắn không thể xảy ra hoặc không có thực' },
                  { type: 'text', content: ' (mang nghĩa: ' },
                  { type: 'pill', content: 'Chắc chắn không thể là' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: 'Ví dụ: ' },
                  { type: 'pill', content: 'This watch was only $5, so it' },
                  { type: 'text', content: ' ' },
                  { type: 'badge', content: "can't be" },
                  { type: 'text', content: ' ' },
                  { type: 'pill', content: 'genuine gold.' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Lưu ý:' },
                  { type: 'text', content: ' Không dùng ' },
                  { type: 'pill', content: 'must not' },
                  { type: 'text', content: ' để suy đoán điều không thể, mà bắt buộc phải dùng ' },
                  { type: 'badge', content: "can't be" },
                  { type: 'text', content: ' .' }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'topic-10',
    topicNumber: '10',
    title: 'Câu điều kiện',
    lessonCount: 3,
    lessons: [
      {
        id: 'lesson-10-1',
        lessonNumber: '10.1',
        title: 'Câu điều kiện ở hiện tại (Present Conditions / Câu điều kiện loại 0)',
        heroBadge: 'TRỌNG TÂM NGỮ PHÁP · BÀI GIẢNG CHI TIẾT',
        blocks: [
          {
            blockNumber: '01',
            type: 'rule',
            badgeTitle: 'CÔNG THỨC & QUY TẮC',
            title: 'Cấu trúc ngữ pháp cơ bản',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'Diễn tả quy luật, thói quen hoặc sự thật hiển nhiên:' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: 'If / When + S + V (Hiện tại đơn), S + V (Hiện tại đơn) (ví dụ: ' },
                  { type: 'pill', content: 'If you turn the key, the engine starts; When I go to bed late, I feel tired' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Đưa ra chỉ dẫn, mệnh lệnh hoặc lời khuyên (Rất hay gặp trong đề thi):' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: 'If / When + S + V (Hiện tại đơn), (Please) + V-nguyên mẫu (ví dụ: ' },
                  { type: 'pill', content: 'If you need assistance, please call reception; If it rains, take an umbrella' },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          },
          {
            blockNumber: '02',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: 'Vị trí dấu phẩy',
            rows: [
              {
                segments: [
                  { type: 'text', content: 'Nếu mệnh đề ' },
                  { type: 'pill', content: 'If / When' },
                  { type: 'text', content: ' đứng ở đầu câu ➔ Bắt buộc có dấu phẩy ( ' },
                  { type: 'pill', content: ',' },
                  { type: 'text', content: ' ) ngăn cách hai mệnh đề.' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: 'Nếu mệnh đề chính/kết quả đứng trước ➔ KHÔNG cần dấu phẩy (ví dụ: ' },
                  { type: 'pill', content: 'The lights come on if you put the card in' },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          },
          {
            blockNumber: '03',
            type: 'highlight',
            badgeTitle: 'CẢNH BÁO BẪY ĐỀ THI',
            title: 'Các bẫy đề thi cần lưu ý',
            rows: [
              {
                segments: [
                  { type: 'text', content: 'Trong mệnh đề mệnh lệnh đưa ra chỉ dẫn, dùng trực tiếp ' },
                  { type: 'badge', content: 'động từ nguyên mẫu' },
                  { type: 'text', content: ' (không dùng ' },
                  { type: 'pill', content: 'to-V' },
                  { type: 'text', content: ' sau ' },
                  { type: 'pill', content: 'please' },
                  { type: 'text', content: ' và không lặp lại chủ ngữ ' },
                  { type: 'pill', content: 'you' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: 'Luôn chú ý chia động từ ở ' },
                  { type: 'badge', content: 'thì Hiện tại đơn' },
                  { type: 'text', content: ' theo đúng chủ ngữ số ít / số nhiều trong mệnh đề điều kiện.' }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'lesson-10-2',
        lessonNumber: '10.2',
        title: 'Câu điều kiện loại 1 (First Conditional)',
        heroBadge: 'TRỌNG TÂM NGỮ PHÁP · BÀI GIẢNG CHI TIẾT',
        blocks: [
          {
            blockNumber: '01',
            type: 'rule',
            badgeTitle: 'CÔNG THỨC & QUY TẮC',
            title: 'Cấu trúc chuẩn của Câu điều kiện loại 1',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'Mệnh đề điều kiện (If / When / As soon as):' },
                  { type: 'text', content: ' ' },
                  { type: 'pill', content: 'S + V (Thì Hiện tại đơn)' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Mệnh đề kết quả (Mệnh đề chính):' },
                  { type: 'text', content: ' ' },
                  { type: 'pill', content: "S + will / won't + V (Nguyên mẫu không to)" }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Ví dụ:' },
                  { type: 'text', content: ' ' },
                  { type: 'pill', content: 'If you give me the data, I will prepare the report; Jane will start work when she finishes the course.' }
                ]
              }
            ]
          },
          {
            blockNumber: '02',
            type: 'highlight',
            badgeTitle: 'CẢNH BÁO BẪY ĐỀ THI',
            title: 'BẪY KINH ĐIỂN TRONG ĐỀ THI CẦN TRÁNH',
            rows: [
              {
                segments: [
                  { type: 'text', content: 'Trong mệnh đề chứa liên từ điều kiện hoặc thời gian ( ' },
                  { type: 'pill', content: 'If, When, As soon as, Until' },
                  { type: 'text', content: ' ), ' },
                  { type: 'badge', content: 'TUYỆT ĐỐI KHÔNG dùng thì tương lai (will / won\'t)' },
                  { type: 'text', content: ' . Dù hành động có xảy ra trong tương lai thì vẫn bắt buộc phải chia ở ' },
                  { type: 'badge', content: 'thì Hiện tại đơn' },
                  { type: 'text', content: ' .' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: 'Cần chú ý chia động từ số ít (thêm ' },
                  { type: 'pill', content: '-s/-es' },
                  { type: 'text', content: ' ) trong mệnh đề ' },
                  { type: 'pill', content: 'If' },
                  { type: 'text', content: ' khi chủ ngữ là ngôi thứ ba số ít ( ' },
                  { type: 'pill', content: 'he, she, it, danh từ số ít' },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'lesson-10-3',
        lessonNumber: '10.3',
        title: 'Câu điều kiện loại 2 (Second Conditional)',
        heroBadge: 'TRỌNG TÂM NGỮ PHÁP · BÀI GIẢNG CHI TIẾT',
        blocks: [
          {
            blockNumber: '01',
            type: 'rule',
            badgeTitle: 'CÔNG THỨC & QUY TẮC',
            title: 'Cấu trúc chuẩn của Câu điều kiện loại 2',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'Mệnh đề điều kiện (Mệnh đề If):' },
                  { type: 'text', content: ' ' },
                  { type: 'pill', content: 'S + V (Thì Quá khứ đơn - Past Simple)' },
                  { type: 'text', content: ' . ' },
                  { type: 'badge', content: 'Lưu ý:' },
                  { type: 'text', content: ' Động từ to-be trong văn viết trang trọng và chuẩn bài thi luôn ưu tiên dùng ' },
                  { type: 'badge', content: 'were' },
                  { type: 'text', content: ' cho tất cả các chủ ngữ (kể cả ' },
                  { type: 'pill', content: 'I, he, she, it' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Mệnh đề kết quả (Mệnh đề chính):' },
                  { type: 'text', content: ' ' },
                  { type: 'pill', content: "S + would / wouldn't + V (Nguyên mẫu không to)" },
                  { type: 'text', content: ' (hoặc có thể dùng ' },
                  { type: 'pill', content: 'could / might + V-inf' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Ví dụ:' },
                  { type: 'text', content: ' ' },
                  { type: 'pill', content: "If I had lots of money, I would stay at that luxury hotel; If Carla got the job, she wouldn't live here." }
                ]
              }
            ]
          },
          {
            blockNumber: '02',
            type: 'rule',
            badgeTitle: 'CÔNG THỨC & QUY TẮC',
            title: 'Cấu trúc đưa ra lời khuyên',
            rows: [
              {
                segments: [
                  { type: 'pill', content: 'If I were you, I would + V-inf...' },
                  { type: 'text', content: ' (Nếu tôi là bạn, tôi sẽ làm gì...).' }
                ]
              }
            ]
          },
          {
            blockNumber: '03',
            type: 'rule',
            badgeTitle: 'CÔNG THỨC & QUY TẮC',
            title: 'Dấu hiệu nhận biết nhanh trong đề thi',
            rows: [
              {
                segments: [
                  { type: 'text', content: 'Nếu mệnh đề chính chứa ' },
                  { type: 'pill', content: "would / wouldn't + V-inf" },
                  { type: 'text', content: ' ➔ Mệnh đề ' },
                  { type: 'pill', content: 'If' },
                  { type: 'text', content: ' chia ở ' },
                  { type: 'badge', content: 'Quá khứ đơn (V2/V-ed / were)' },
                  { type: 'text', content: ' .' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: 'Nếu mệnh đề ' },
                  { type: 'pill', content: 'If' },
                  { type: 'text', content: ' chia ở ' },
                  { type: 'badge', content: 'Quá khứ đơn' },
                  { type: 'text', content: ' ➔ Mệnh đề chính chọn ' },
                  { type: 'badge', content: 'would + V-inf' },
                  { type: 'text', content: ' .' }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'topic-11',
    topicNumber: '11',
    title: 'Trật tự từ & Cấu trúc câu',
    lessonCount: 5,
    lessons: [
      {
        id: 'lesson-11-1',
        lessonNumber: '11.1',
        title: 'Trật tự từ trong câu khẳng định (Word Order in Statements)',
        heroBadge: 'TRỌNG TÂM NGỮ PHÁP · BÀI GIẢNG CHI TIẾT',
        blocks: [
          {
            blockNumber: '01',
            type: 'rule',
            badgeTitle: 'CÔNG THỨC & QUY TẮC',
            title: 'Cấu trúc câu chuẩn trong tiếng Anh',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'Chủ ngữ (S) + Động từ (V) + Tân ngữ (O):' },
                  { type: 'text', content: ' Trong câu trần thuật, Chủ ngữ luôn đứng TRƯỚC Động từ (ví dụ: ' },
                  { type: 'pill', content: 'Paul is reading a magazine' },
                  { type: 'text', content: ' - KHÔNG viết: ' },
                  { type: 'pill', content: 'Is reading Paul a magazine' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Nội động từ (Intransitive Verbs):' },
                  { type: 'text', content: ' Các động từ như ' },
                  { type: 'pill', content: 'arrive, land, wait, happen, rain' },
                  { type: 'text', content: ' không cần tân ngữ theo sau (ví dụ: ' },
                  { type: 'pill', content: 'The taxi is waiting; The plane landed safely' },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          },
          {
            blockNumber: '02',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: 'Động từ nối (Linking Verbs) + Tính từ',
            rows: [
              {
                segments: [
                  { type: 'text', content: 'Sau các động từ chỉ cảm giác hoặc trạng thái như ' },
                  { type: 'pill', content: 'be, look, seem, appear, taste, smell, feel, become' },
                  { type: 'text', content: ' , ta sử dụng ' },
                  { type: 'badge', content: 'Tính từ (Adjective)' },
                  { type: 'text', content: ' để bổ nghĩa cho chủ ngữ, KHÔNG dùng trạng từ (ví dụ: ' },
                  { type: 'pill', content: 'The design looks attractive; The system seems efficient' },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          },
          {
            blockNumber: '03',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: 'Danh động từ (Gerund - V-ing) làm Chủ ngữ',
            rows: [
              {
                segments: [
                  { type: 'text', content: 'Khi một hành động đứng đầu câu làm chủ ngữ, ta dùng dạng ' },
                  { type: 'badge', content: 'V-ing' },
                  { type: 'text', content: ' và động từ chính theo sau luôn chia ở dạng ' },
                  { type: 'badge', content: 'số ít' },
                  { type: 'text', content: ' (ví dụ: ' },
                  { type: 'pill', content: 'Driving in fog is dangerous' },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          },
          {
            blockNumber: '04',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: 'Trật tự các Trạng từ bổ nghĩa',
            rows: [
              {
                segments: [
                  { type: 'text', content: 'Khi trong câu có nhiều trạng từ, trật tự chuẩn thông thường là: ' },
                  { type: 'badge', content: 'Cách thức (Manner) ➔ Nơi chốn (Place) ➔ Thời gian (Time)' },
                  { type: 'text', content: ' (ví dụ: ' },
                  { type: 'pill', content: 'He played' },
                  { type: 'text', content: ' ' },
                  { type: 'badge', content: 'well' },
                  { type: 'text', content: ' ' },
                  { type: 'pill', content: 'at the game on Saturday' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: 'Tân ngữ luôn đi liền sau ngoại động từ trước khi đến trạng từ cách thức ( ' },
                  { type: 'pill', content: 'S + V + O + Adv' },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'lesson-11-2',
        lessonNumber: '11.2',
        title: 'Trật tự từ trong Câu hỏi và Câu mệnh lệnh (Questions and Imperatives)',
        heroBadge: 'TRỌNG TÂM NGỮ PHÁP · BÀI GIẢNG CHI TIẾT',
        blocks: [
          {
            blockNumber: '01',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: 'Trật tự từ trong Câu hỏi (Question Forms)',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'Với động từ To-be:' },
                  { type: 'text', content: ' ' },
                  { type: 'pill', content: 'Be + Chủ ngữ + Tính từ / Cụm giới từ?' },
                  { type: 'text', content: ' (ví dụ: ' },
                  { type: 'pill', content: 'Are you available? Was the flight delayed?' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Với Trợ động từ / Động từ khuyết thiếu:' },
                  { type: 'text', content: ' Trợ động từ (Do / Does / Did) HOẶC Modal Verb (Can / Could / Should / Will) + Chủ ngữ + Động từ nguyên mẫu (V-inf)? (ví dụ: ' },
                  { type: 'pill', content: 'Did you receive the email? Can she speak French?' },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          },
          {
            blockNumber: '02',
            type: 'rule',
            badgeTitle: 'CÔNG THỨC & QUY TẮC',
            title: 'Cấu trúc Câu mệnh lệnh / Chỉ dẫn công việc (Imperatives)',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'Câu mệnh lệnh khẳng định:' },
                  { type: 'text', content: ' Bắt đầu trực tiếp bằng ' },
                  { type: 'badge', content: 'Động từ nguyên mẫu (V-inf)' },
                  { type: 'text', content: ' (hoặc ' },
                  { type: 'pill', content: 'Please + V-inf' },
                  { type: 'text', content: ' ) để đưa ra yêu cầu, chỉ dẫn hoặc lời mời lịch sự (ví dụ: ' },
                  { type: 'pill', content: 'Take a seat; Please review the draft' },
                  { type: 'text', content: ' ). Tuyệt đối không thêm chủ ngữ ' },
                  { type: 'pill', content: 'you' },
                  { type: 'text', content: ' .' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Câu mệnh lệnh phủ định:' },
                  { type: 'text', content: ' Dùng ' },
                  { type: 'badge', content: "Don't + V-nguyên mẫu" },
                  { type: 'text', content: ' (hoặc ' },
                  { type: 'pill', content: 'Please do not + V-inf' },
                  { type: 'text', content: ' ) để nhắc nhở, cảnh báo (ví dụ: ' },
                  { type: 'pill', content: "Don't forget your badge; Please do not disclose passwords" },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          },
          {
            blockNumber: '03',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: 'Biển báo, bảng cấm nơi công cộng (Public Signs)',
            rows: [
              {
                segments: [
                  { type: 'text', content: 'Trên các bảng thông báo hoặc biển cấm quy chuẩn, ta dùng cấu trúc ' },
                  { type: 'badge', content: 'No + V-ing' },
                  { type: 'text', content: ' thay vì dùng câu mệnh lệnh (ví dụ: ' },
                  { type: 'pill', content: 'No smoking, No parking, No trespassing' },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'lesson-11-3',
        lessonNumber: '11.3',
        title: 'Động từ có hai tân ngữ (Verbs with Two Objects)',
        heroBadge: 'TRỌNG TÂM NGỮ PHÁP · BÀI GIẢNG CHI TIẾT',
        blocks: [
          {
            blockNumber: '01',
            type: 'rule',
            badgeTitle: 'CÔNG THỨC & QUY TẮC',
            title: 'Hai cấu trúc chuyển đổi chuẩn',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'Cấu trúc 1 (Người trước - Vật sau):' },
                  { type: 'text', content: ' ' },
                  { type: 'pill', content: 'S + V + Tân ngữ (Người) + Tân ngữ (Vật)' },
                  { type: 'text', content: ' ➔ Tuyệt đối ' },
                  { type: 'badge', content: 'KHÔNG dùng giới từ to/for' },
                  { type: 'text', content: ' khi tân ngữ chỉ người đứng ngay sau động từ (ví dụ: ' },
                  { type: 'pill', content: 'Harry sent Sally some flowers; The firm offered him a job' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Cấu trúc 2 (Vật trước - Người sau):' },
                  { type: 'text', content: ' ' },
                  { type: 'pill', content: 'S + V + Tân ngữ (Vật) + TO / FOR + Tân ngữ (Người)' },
                  { type: 'text', content: ' ➔ Khi tân ngữ chỉ vật đứng trước, bắt buộc phải có giới từ ' },
                  { type: 'pill', content: 'to' },
                  { type: 'text', content: ' hoặc ' },
                  { type: 'pill', content: 'for' },
                  { type: 'text', content: ' trước tân ngữ chỉ người.' }
                ]
              }
            ]
          },
          {
            blockNumber: '02',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: 'Phân biệt giới từ TO và FOR',
            rows: [
              {
                segments: [
                  { type: 'text', content: 'Dùng ' },
                  { type: 'badge', content: 'TO' },
                  { type: 'text', content: ' với các động từ có tính chuyển giao: ' },
                  { type: 'pill', content: 'send, give, lend, offer, pay, show, teach, tell, write' },
                  { type: 'text', content: ' (ví dụ: ' },
                  { type: 'pill', content: 'sent the report' },
                  { type: 'text', content: ' ' },
                  { type: 'badge', content: 'to' },
                  { type: 'text', content: ' ' },
                  { type: 'pill', content: 'the manager' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: 'Dùng ' },
                  { type: 'badge', content: 'FOR' },
                  { type: 'text', content: ' với các động từ có tính làm hộ/chuẩn bị: ' },
                  { type: 'pill', content: 'buy, make' },
                  { type: 'text', content: ' (ví dụ: ' },
                  { type: 'pill', content: 'bought new computers' },
                  { type: 'text', content: ' ' },
                  { type: 'badge', content: 'for' },
                  { type: 'text', content: ' ' },
                  { type: 'pill', content: 'the staff' },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          },
          {
            blockNumber: '03',
            type: 'highlight',
            badgeTitle: 'CẢNH BÁO BẪY ĐỀ THI',
            title: 'BẪY ĐỀ THI ĐẶC BIỆT CẦN NHỚ',
            rows: [
              {
                segments: [
                  { type: 'text', content: 'Các động từ như ' },
                  { type: 'pill', content: 'explain, describe, introduce, suggest' },
                  { type: 'text', content: ' ' },
                  { type: 'badge', content: 'BẮT BUỘC' },
                  { type: 'text', content: ' phải đi theo mẫu: ' },
                  { type: 'pill', content: 'explain / describe + Vật + TO + Người' },
                  { type: 'text', content: ' (Tuyệt đối không dùng ' },
                  { type: 'pill', content: 'explain me something' },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'lesson-11-4',
        lessonNumber: '11.4',
        title: 'Cấu trúc There + Be (Diễn tả sự tồn tại / hiện diện)',
        heroBadge: 'TRỌNG TÂM NGỮ PHÁP · BÀI GIẢNG CHI TIẾT',
        blocks: [
          {
            blockNumber: '01',
            type: 'rule',
            badgeTitle: 'CÔNG THỨC & QUY TẮC',
            title: 'Sự hòa hợp giữa "Be" và Danh từ theo sau',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'There is / was / has been:' },
                  { type: 'text', content: ' Đi với ' },
                  { type: 'badge', content: 'Danh từ đếm được số ít' },
                  { type: 'text', content: ' hoặc ' },
                  { type: 'badge', content: 'Danh từ không đếm được' },
                  { type: 'text', content: ' (ví dụ: ' },
                  { type: 'pill', content: 'There is a problem; There was water on the floor; There has been an accident' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'There are / were / have been:' },
                  { type: 'text', content: ' Đi với ' },
                  { type: 'badge', content: 'Danh từ đếm được số nhiều' },
                  { type: 'text', content: ' (ví dụ: ' },
                  { type: 'pill', content: 'There are several options; There were many clients; There have been changes' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Khi liệt kê một chuỗi danh từ:' },
                  { type: 'text', content: ' Động từ ' },
                  { type: 'pill', content: 'be' },
                  { type: 'text', content: ' hòa hợp trực tiếp với ' },
                  { type: 'badge', content: 'danh từ đầu tiên' },
                  { type: 'text', content: ' đứng ngay sau nó (ví dụ: ' },
                  { type: 'pill', content: 'There' },
                  { type: 'text', content: ' ' },
                  { type: 'badge', content: 'is' },
                  { type: 'text', content: ' ' },
                  { type: 'pill', content: 'a laptop, a notebook and two pens on the table' },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          },
          {
            blockNumber: '02',
            type: 'rule',
            badgeTitle: 'CÔNG THỨC & QUY TẮC',
            title: 'Cấu trúc ở tương lai và Động từ khuyết thiếu',
            rows: [
              {
                segments: [
                  { type: 'pill', content: 'There will be... / There is going to be...' },
                  { type: 'text', content: ' (Sẽ có...).' }
                ]
              },
              {
                segments: [
                  { type: 'pill', content: 'There must be / should be...' },
                  { type: 'text', content: ' (Chắc hẳn là có / Nên có...).' }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'lesson-11-5',
        lessonNumber: '11.5',
        title: 'Cách sử dụng Đại từ và Chủ ngữ giả "IT" (It as a Subject/Object)',
        heroBadge: 'TRỌNG TÂM NGỮ PHÁP · BÀI GIẢNG CHI TIẾT',
        blocks: [
          {
            blockNumber: '01',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: '"IT" làm Đại từ thay thế (Subject / Object Pronoun)',
            rows: [
              {
                segments: [
                  { type: 'text', content: 'Dùng để thay thế cho một danh từ số ít hoặc sự việc cụ thể đã được đề cập trước đó nhằm tránh lặp từ (ví dụ: ' },
                  { type: 'pill', content: 'There was a storm last night. It damaged the roof; The kids played in the snow and enjoyed it' },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          },
          {
            blockNumber: '02',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: '"IT" làm Chủ ngữ giả (Dummy / Empty Subject)',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'Chỉ Thời gian, Ngày tháng, Thời tiết, Khoảng cách:' },
                  { type: 'text', content: ' ' },
                  { type: 'pill', content: "It is ten o'clock; It's Monday; It is raining; It is five kilometers to the station." }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Cấu trúc tiêu tốn thời gian:' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: 'It takes / took + (ai đó) + thời gian + TO + V-nguyên mẫu (ví dụ: ' },
                  { type: 'pill', content: 'It takes about an hour to get to the airport; It took a long time to clear the roads' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Cấu trúc đánh giá / nhận định (Rất hay gặp trong đề thi):' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: 'It + be + TÍNH TỪ + TO-V (ví dụ: ' },
                  { type: 'pill', content: 'It is easy to find the office; It is essential to submit reports on time' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: 'It + be + CỤM DANH TỪ + TO-V (ví dụ: ' },
                  { type: 'pill', content: 'It was a mistake to accept this job; It is a pleasure to meet you' },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          },
          {
            blockNumber: '03',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: 'Phân biệt IT và THERE',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'There + be:' },
                  { type: 'text', content: ' Dùng để giới thiệu sự xuất hiện/tồn tại của một sự vật hoặc người mới (ví dụ: ' },
                  { type: 'pill', content: 'There is a visitor at the door' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'It + be:' },
                  { type: 'text', content: ' Dùng để cung cấp thông tin chi tiết hơn về đối tượng vừa được nhắc tới (ví dụ: ' },
                  { type: 'pill', content: 'It is the courier' },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'topic-12',
    topicNumber: '12',
    title: 'Câu hỏi',
    lessonCount: 6,
    lessons: [
      {
        id: 'lesson-12-1',
        lessonNumber: '12.1',
        title: 'Câu hỏi Yes/No và Câu trả lời ngắn (Yes/No Questions & Short Answers)',
        heroBadge: 'TRỌNG TÂM NGỮ PHÁP · BÀI GIẢNG CHI TIẾT',
        blocks: [
          {
            blockNumber: '01',
            type: 'rule',
            badgeTitle: 'CÔNG THỨC & QUY TẮC',
            title: 'Quy tắc đảo Trợ động từ (Subject - Auxiliary Inversion)',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'Động từ To-be:' },
                  { type: 'text', content: ' Đảo ' },
                  { type: 'pill', content: 'Be (Am/Is/Are/Was/Were)' },
                  { type: 'text', content: ' lên trước chủ ngữ (ví dụ: ' },
                  { type: 'pill', content: 'Is it cold? Was the meeting useful?' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Động từ khuyết thiếu (Modal Verbs):' },
                  { type: 'text', content: ' Đảo ' },
                  { type: 'pill', content: 'Can/Will/Should/May' },
                  { type: 'text', content: ' lên trước chủ ngữ + ' },
                  { type: 'badge', content: 'V-nguyên thể không chia' },
                  { type: 'text', content: ' (ví dụ: ' },
                  { type: 'pill', content: 'Can you attend? Will they arrive on time?' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Thì Hiện tại đơn & Quá khứ đơn:' },
                  { type: 'text', content: ' Đưa ' },
                  { type: 'pill', content: 'Do / Does / Did' },
                  { type: 'text', content: ' lên trước chủ ngữ + ' },
                  { type: 'badge', content: 'V-nguyên thể' },
                  { type: 'text', content: ' (ví dụ: ' },
                  { type: 'pill', content: 'Does Chris work here? Did she sign the contract?' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Thì Hoàn thành:' },
                  { type: 'text', content: ' Đưa ' },
                  { type: 'pill', content: 'Have / Has / Had' },
                  { type: 'text', content: ' lên trước chủ ngữ + ' },
                  { type: 'badge', content: 'V3/V-ed' },
                  { type: 'text', content: ' (ví dụ: ' },
                  { type: 'pill', content: 'Have you seen the memo? Has he finished?' },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          },
          {
            blockNumber: '02',
            type: 'rule',
            badgeTitle: 'CÔNG THỨC & QUY TẮC',
            title: 'Quy tắc trong Câu trả lời ngắn (Short Answers)',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'Khẳng định:' },
                  { type: 'text', content: ' ' },
                  { type: 'pill', content: 'Yes, S + Trợ động từ' },
                  { type: 'text', content: ' (ví dụ: ' },
                  { type: 'pill', content: 'Yes, I am; Yes, he does; Yes, they have' },
                  { type: 'text', content: ' ). ' },
                  { type: 'badge', content: 'LƯU Ý:' },
                  { type: 'text', content: ' TUYỆT ĐỐI KHÔNG viết tắt trong câu trả lời ngắn khẳng định (KHÔNG dùng ' },
                  { type: 'pill', content: "Yes, I'm" },
                  { type: 'text', content: ' hay ' },
                  { type: 'pill', content: "Yes, she's" },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Phủ định:' },
                  { type: 'text', content: ' ' },
                  { type: 'pill', content: 'No, S + Trợ động từ + not' },
                  { type: 'text', content: ' (ví dụ: ' },
                  { type: 'pill', content: "No, I'm not; No, she doesn't; No, they haven't" },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: 'KHÔNG lặp lại động từ chính trong câu trả lời ngắn (Dùng ' },
                  { type: 'pill', content: 'Yes, I do' },
                  { type: 'text', content: ' thay vì ' },
                  { type: 'pill', content: 'Yes, I like' },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'lesson-12-2',
        lessonNumber: '12.2',
        title: 'Câu hỏi có từ để hỏi (Wh- Questions)',
        heroBadge: 'TRỌNG TÂM NGỮ PHÁP · BÀI GIẢNG CHI TIẾT',
        blocks: [
          {
            blockNumber: '01',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: 'Chức năng của các từ để hỏi thường gặp',
            rows: [
              {
                segments: [
                  { type: 'pill', content: 'Who' },
                  { type: 'text', content: ' : Hỏi về người (Ai).' }
                ]
              },
              {
                segments: [
                  { type: 'pill', content: 'What' },
                  { type: 'text', content: ' : Hỏi về sự vật, sự việc, hành động (Cái gì).' }
                ]
              },
              {
                segments: [
                  { type: 'pill', content: 'When / What time' },
                  { type: 'text', content: ' : Hỏi về thời gian, thời điểm (Khi nào / Mấy giờ).' }
                ]
              },
              {
                segments: [
                  { type: 'pill', content: 'Where' },
                  { type: 'text', content: ' : Hỏi về địa điểm, nơi chốn (Ở đâu).' }
                ]
              },
              {
                segments: [
                  { type: 'pill', content: 'Why' },
                  { type: 'text', content: ' : Hỏi về nguyên nhân, lý do (Tại sao).' }
                ]
              },
              {
                segments: [
                  { type: 'pill', content: 'How / How often / How long' },
                  { type: 'text', content: ' : Hỏi về cách thức, tần suất, khoảng thời gian (Như thế nào / Bao lâu một lần / Bao lâu).' }
                ]
              },
              {
                segments: [
                  { type: 'pill', content: 'Which' },
                  { type: 'text', content: ' : Hỏi về sự lựa chọn trong một nhóm cụ thể (Cái nào / Người nào).' }
                ]
              },
              {
                segments: [
                  { type: 'pill', content: 'Whose' },
                  { type: 'text', content: ' : Hỏi về quyền sở hữu (Của ai).' }
                ]
              }
            ]
          },
          {
            blockNumber: '02',
            type: 'rule',
            badgeTitle: 'CÔNG THỨC & QUY TẮC',
            title: 'Cấu trúc chuẩn và Quy tắc đảo ngữ (Inversion)',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'Wh- word + Trợ động từ (Do/Does/Did/Have/Has) + S + Động từ chính...?' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Wh- word + Động từ to-be (Is/Are/Was/Were) + S...?' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Wh- word + Động từ khuyết thiếu (Can/Will/Should) + S + V-nguyên thể...?' }
                ]
              }
            ]
          },
          {
            blockNumber: '03',
            type: 'highlight',
            badgeTitle: 'CẢNH BÁO BẪY ĐỀ THI',
            title: 'LỖI SAI KINH ĐIỂN CẦN TRÁNH',
            rows: [
              {
                segments: [
                  { type: 'text', content: 'Trong câu hỏi Wh-, trợ động từ hoặc động từ to-be ' },
                  { type: 'badge', content: 'BẮT BUỘC phải đứng trước chủ ngữ' },
                  { type: 'text', content: ' (ví dụ: ' },
                  { type: 'pill', content: 'Where do you live?' },
                  { type: 'text', content: ' — KHÔNG dùng ' },
                  { type: 'pill', content: 'Where you live?' },
                  { type: 'text', content: ' ; ' },
                  { type: 'pill', content: 'When will they arrive?' },
                  { type: 'text', content: ' — KHÔNG dùng ' },
                  { type: 'pill', content: 'When they will arrive?' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: 'Khi đã có trợ động từ ' },
                  { type: 'pill', content: 'do/does/did' },
                  { type: 'text', content: ' , động từ chính luôn ở dạng ' },
                  { type: 'badge', content: 'nguyên mẫu không chia' },
                  { type: 'text', content: ' .' }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'lesson-12-3',
        lessonNumber: '12.3',
        title: 'Who, When, Where và Why',
        heroBadge: 'TRỌNG TÂM NGỮ PHÁP · BÀI GIẢNG CHI TIẾT',
        blocks: [
          {
            blockNumber: '01',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: 'Chức năng của 4 từ để hỏi chính',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'Who:' },
                  { type: 'text', content: ' Hỏi về người (Ai / Người nào) ➔ ' },
                  { type: 'pill', content: 'Who approved the budget?' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'When:' },
                  { type: 'text', content: ' Hỏi về thời gian, thời điểm (Khi nào) ➔ ' },
                  { type: 'pill', content: 'When did the shipment arrive?' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Where:' },
                  { type: 'text', content: ' Hỏi về địa điểm, nơi chốn (Ở đâu) ➔ ' },
                  { type: 'pill', content: 'Where is the file stored?' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Why:' },
                  { type: 'text', content: ' Hỏi về nguyên nhân, lý do (Tại sao) ➔ ' },
                  { type: 'pill', content: 'Why was the flight cancelled?' }
                ]
              }
            ]
          },
          {
            blockNumber: '02',
            type: 'rule',
            badgeTitle: 'CÔNG THỨC & QUY TẮC',
            title: 'Quy tắc ngữ pháp quan trọng',
            rows: [
              {
                segments: [
                  { type: 'text', content: 'Sau ' },
                  { type: 'pill', content: 'Who, When, Where, Why' },
                  { type: 'text', content: ' bắt buộc phải là ' },
                  { type: 'badge', content: 'Động từ hoặc Trợ động từ' },
                  { type: 'text', content: ' , TUYỆT ĐỐI KHÔNG đặt danh từ liền ngay sau (ví dụ: ' },
                  { type: 'pill', content: 'Where does he work?' },
                  { type: 'text', content: ' — KHÔNG dùng ' },
                  { type: 'pill', content: 'Where place he works?' },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          },
          {
            blockNumber: '03',
            type: 'rule',
            badgeTitle: 'CÔNG THỨC & QUY TẮC',
            title: 'Cấu trúc Câu hỏi có Giới từ ở cuối câu (Wh- Questions + Prepositions)',
            rows: [
              {
                segments: [
                  { type: 'text', content: 'Nếu động từ trong câu đi kèm với một giới từ cố định ( ' },
                  { type: 'pill', content: 'speak with, wait for, apply for, work on, talk about' },
                  { type: 'text', content: ' ), giới từ đó sẽ được ' },
                  { type: 'badge', content: 'đặt ở cuối câu hỏi Wh-' },
                  { type: 'text', content: ' .' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Ví dụ:' },
                  { type: 'text', content: ' Who did you speak ' },
                  { type: 'badge', content: 'with' },
                  { type: 'text', content: ' ? / What project are you working ' },
                  { type: 'badge', content: 'on' },
                  { type: 'text', content: ' ? / Who is the client waiting ' },
                  { type: 'badge', content: 'for' },
                  { type: 'text', content: ' ?' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Lưu ý:' },
                  { type: 'text', content: ' Với ' },
                  { type: 'pill', content: 'Where' },
                  { type: 'text', content: ' và ' },
                  { type: 'pill', content: 'When' },
                  { type: 'text', content: ' , thông thường ta không đặt giới từ ở cuối câu (ví dụ: ' },
                  { type: 'pill', content: 'Where are you going?' },
                  { type: 'text', content: ' — ngoại trừ câu cửa miệng quen thuộc ' },
                  { type: 'pill', content: 'Where are you from?' },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'lesson-12-4',
        lessonNumber: '12.4',
        title: 'What, Which và Whose',
        heroBadge: 'TRỌNG TÂM NGỮ PHÁP · BÀI GIẢNG CHI TIẾT',
        blocks: [
          {
            blockNumber: '01',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: 'Phân biệt WHAT và WHICH',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'WHAT (Cái gì):' },
                  { type: 'text', content: ' Dùng khi hỏi chung chung, mở rộng, không giới hạn phạm vi các phương án lựa chọn (ví dụ: ' },
                  { type: 'pill', content: 'What is the company policy? What do you do?' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'WHICH (Cái nào / Người nào):' },
                  { type: 'text', content: ' Dùng khi có ' },
                  { type: 'badge', content: 'sự lựa chọn trong một phạm vi giới hạn cụ thể' },
                  { type: 'text', content: ' (ví dụ: ' },
                  { type: 'pill', content: 'Which of the two proposals do you prefer? Which flight do you want, morning or afternoon?' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Lưu ý đặc biệt:' },
                  { type: 'text', content: ' ' },
                  { type: 'badge', content: 'Which' },
                  { type: 'text', content: ' có thể đi kèm danh từ chỉ người để hỏi về lựa chọn ( ' },
                  { type: 'pill', content: 'Which applicant / Which candidate' },
                  { type: 'text', content: ' ), nhưng ' },
                  { type: 'badge', content: 'What' },
                  { type: 'text', content: ' thì tuyệt đối không.' }
                ]
              }
            ]
          },
          {
            blockNumber: '02',
            type: 'rule',
            badgeTitle: 'CÔNG THỨC & QUY TẮC',
            title: 'Các cấu trúc thông dụng với WHAT',
            rows: [
              {
                segments: [
                  { type: 'text', content: 'Hỏi về nghề nghiệp: ' },
                  { type: 'pill', content: 'What does + S + do?' },
                  { type: 'text', content: ' (ví dụ: ' },
                  { type: 'pill', content: 'What does Mr. Tanaka do? ➔ He is an engineer.' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: 'Hỏi về đặc điểm, tính chất: ' },
                  { type: 'pill', content: 'What + be + S + like?' },
                  { type: 'text', content: ' (ví dụ: ' },
                  { type: 'pill', content: 'What is the new software like?' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: 'Hỏi về chủng loại: ' },
                  { type: 'pill', content: 'What kind / type of + N...?' }
                ]
              }
            ]
          },
          {
            blockNumber: '03',
            type: 'highlight',
            badgeTitle: 'CẢNH BÁO BẪY ĐỀ THI',
            title: "Phân biệt WHOSE và WHO'S (Bẫy phát âm & ngữ pháp)",
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'WHOSE (Của ai):' },
                  { type: 'text', content: ' Đại từ/Tính từ nghi vấn hỏi về ' },
                  { type: 'badge', content: 'quyền sở hữu' },
                  { type: 'text', content: ' , thường đứng trước danh từ hoặc đứng độc lập (ví dụ: ' },
                  { type: 'pill', content: 'Whose signature is this? Whose is this briefcase?' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: "WHO'S:" },
                  { type: 'text', content: ' Là dạng viết tắt của ' },
                  { type: 'badge', content: 'Who is' },
                  { type: 'text', content: ' hoặc ' },
                  { type: 'badge', content: 'Who has' },
                  { type: 'text', content: ' (ví dụ: ' },
                  { type: 'pill', content: "Who's in charge of the event? = Who is...; Who's seen the file? = Who has..." },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'lesson-12-5',
        lessonNumber: '12.5',
        title: 'Từ để hỏi HOW và cấu trúc HOW + Tính từ / Trạng từ',
        heroBadge: 'TRỌNG TÂM NGỮ PHÁP · BÀI GIẢNG CHI TIẾT',
        blocks: [
          {
            blockNumber: '01',
            type: 'rule',
            badgeTitle: 'CÔNG THỨC & QUY TẮC',
            title: 'Cách dùng cơ bản của HOW đứng độc lập',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'Hỏi về phương thức, cách thức làm việc (Manner / Method):' },
                  { type: 'text', content: ' ' },
                  { type: 'pill', content: 'How do I submit the form? How can we access the network?' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Hỏi về tiến độ, cảm nhận hoặc ý kiến đánh giá:' },
                  { type: 'text', content: ' ' },
                  { type: 'pill', content: 'How was the business conference? How did the client meeting go?' }
                ]
              }
            ]
          },
          {
            blockNumber: '02',
            type: 'rule',
            badgeTitle: 'CÔNG THỨC & QUY TẮC',
            title: 'Cấu trúc mở rộng HOW + Tính từ / Trạng từ (Adjective / Adverb)',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'How long:' },
                  { type: 'text', content: ' Hỏi về ' },
                  { type: 'pill', content: 'khoảng thời gian' },
                  { type: 'text', content: ' (bao lâu) hoặc ' },
                  { type: 'pill', content: 'chiều dài' },
                  { type: 'text', content: ' (ví dụ: ' },
                  { type: 'pill', content: 'How long will the presentation last?' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'How often:' },
                  { type: 'text', content: ' Hỏi về ' },
                  { type: 'pill', content: 'tần suất' },
                  { type: 'text', content: ' (bao lâu một lần) (ví dụ: ' },
                  { type: 'pill', content: 'How often do you backup the files?' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'How far:' },
                  { type: 'text', content: ' Hỏi về ' },
                  { type: 'pill', content: 'khoảng cách địa lý' },
                  { type: 'text', content: ' (bao xa) (ví dụ: ' },
                  { type: 'pill', content: 'How far is the branch from here?' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'How much:' },
                  { type: 'text', content: ' Hỏi về ' },
                  { type: 'pill', content: 'giá cả, chi phí' },
                  { type: 'text', content: ' hoặc ' },
                  { type: 'pill', content: 'lượng không đếm được' },
                  { type: 'text', content: ' (ví dụ: ' },
                  { type: 'pill', content: 'How much is the registration fee?' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'How many:' },
                  { type: 'text', content: ' Hỏi về ' },
                  { type: 'pill', content: 'số lượng đếm được' },
                  { type: 'text', content: ' (ví dụ: ' },
                  { type: 'pill', content: 'How many attendees are there?' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'How fast / quickly:' },
                  { type: 'text', content: ' Hỏi về ' },
                  { type: 'pill', content: 'tốc độ, độ nhanh chóng' },
                  { type: 'text', content: ' (ví dụ: ' },
                  { type: 'pill', content: 'How quickly can they deliver the parts?' },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'lesson-12-6',
        lessonNumber: '12.6',
        title: 'Câu hỏi cho Chủ ngữ và Câu hỏi cho Tân ngữ (Subject and Object Questions)',
        heroBadge: 'TRỌNG TÂM NGỮ PHÁP · BÀI GIẢNG CHI TIẾT',
        blocks: [
          {
            blockNumber: '01',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: '1. Câu hỏi cho Chủ ngữ (Subject Questions)',
            rows: [
              {
                segments: [
                  { type: 'text', content: 'Từ để hỏi ( ' },
                  { type: 'pill', content: 'Who, What, Which, Whose' },
                  { type: 'text', content: ' ) đóng vai trò là ' },
                  { type: 'badge', content: 'chủ ngữ' },
                  { type: 'text', content: ' của câu.' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Cấu trúc:' },
                  { type: 'text', content: ' ' },
                  { type: 'pill', content: 'Wh- word (Subject) + Động từ (đã chia theo thì) + Tân ngữ...?' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Quy tắc then chốt:' },
                  { type: 'text', content: ' ' },
                  { type: 'badge', content: 'TUYỆT ĐỐI KHÔNG dùng trợ động từ (do / does / did)' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: 'Sau ' },
                  { type: 'pill', content: 'Who / What / Whose' },
                  { type: 'text', content: ' ở hiện tại đơn, động từ mặc định chia ở ' },
                  { type: 'badge', content: 'ngôi thứ ba số ít' },
                  { type: 'text', content: ' (thêm ' },
                  { type: 'pill', content: '-s/-es' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Ví dụ:' },
                  { type: 'text', content: ' ' },
                  { type: 'pill', content: 'Who prepared the report?' },
                  { type: 'text', content: ' (KHÔNG dùng ' },
                  { type: 'pill', content: 'Who did prepare...' },
                  { type: 'text', content: ' ); ' },
                  { type: 'pill', content: 'What happened?' },
                  { type: 'text', content: ' ; ' },
                  { type: 'pill', content: 'Who lives here?' }
                ]
              }
            ]
          },
          {
            blockNumber: '02',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: '2. Câu hỏi cho Tân ngữ (Object Questions)',
            rows: [
              {
                segments: [
                  { type: 'text', content: 'Từ để hỏi đóng vai trò là ' },
                  { type: 'badge', content: 'tân ngữ' },
                  { type: 'text', content: ' của hành động do chủ ngữ phía sau thực hiện.' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Cấu trúc:' },
                  { type: 'text', content: ' ' },
                  { type: 'pill', content: 'Wh- word (Object) + Trợ động từ (do/does/did/modal) + S + V-nguyên thể...?' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Quy tắc then chốt:' },
                  { type: 'text', content: ' ' },
                  { type: 'badge', content: 'BẮT BUỘC phải có trợ động từ' },
                  { type: 'text', content: ' đứng trước chủ ngữ.' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Ví dụ:' },
                  { type: 'text', content: ' ' },
                  { type: 'pill', content: 'Who did you meet yesterday?' },
                  { type: 'text', content: ' ; ' },
                  { type: 'pill', content: 'What does this word mean?' },
                  { type: 'text', content: ' (KHÔNG dùng ' },
                  { type: 'pill', content: 'What means this word?' },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'topic-13',
    topicNumber: '13',
    title: 'V-ing & To-V',
    lessonCount: 3,
    lessons: [
      {
        id: 'lesson-13-1',
        lessonNumber: '13.1',
        title: 'Động từ theo sau bởi V-ing (Danh động từ - Gerunds)',
        heroBadge: 'TRỌNG TÂM NGỮ PHÁP · BÀI GIẢNG CHI TIẾT',
        blocks: [
          {
            blockNumber: '01',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: 'Nhóm động từ bắt buộc đi kèm V-ing',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'Ý kiến / Đề xuất / Cân nhắc:' },
                  { type: 'text', content: ' ' },
                  { type: 'pill', content: 'suggest' },
                  { type: 'text', content: ' (gợi ý), ' },
                  { type: 'pill', content: 'consider' },
                  { type: 'text', content: ' (cân nhắc), ' },
                  { type: 'pill', content: 'recommend' },
                  { type: 'text', content: ' (khuyên/đề xuất), ' },
                  { type: 'pill', content: 'imagine' },
                  { type: 'text', content: ' (tưởng tượng).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Sở thích / Cảm xúc:' },
                  { type: 'text', content: ' ' },
                  { type: 'pill', content: 'enjoy' },
                  { type: 'text', content: ' (thích thú), ' },
                  { type: 'pill', content: 'dislike' },
                  { type: 'text', content: ' (không thích), ' },
                  { type: 'pill', content: 'mind / not mind' },
                  { type: 'text', content: ' (ngại / phiền lòng).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Tiến trình hành động:' },
                  { type: 'text', content: ' ' },
                  { type: 'pill', content: 'finish' },
                  { type: 'text', content: ' (hoàn thành), ' },
                  { type: 'pill', content: 'delay / postpone' },
                  { type: 'text', content: ' (trì hoãn), ' },
                  { type: 'pill', content: 'stop' },
                  { type: 'text', content: ' (dừng hẳn), ' },
                  { type: 'pill', content: 'avoid' },
                  { type: 'text', content: ' (tránh né), ' },
                  { type: 'pill', content: 'miss' },
                  { type: 'text', content: ' (bỏ lỡ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Lưu ý:' },
                  { type: 'text', content: ' Các động từ như ' },
                  { type: 'pill', content: 'begin, start, continue' },
                  { type: 'text', content: ' có thể đi với cả ' },
                  { type: 'pill', content: 'V-ing' },
                  { type: 'text', content: ' hoặc ' },
                  { type: 'pill', content: 'to-V' },
                  { type: 'text', content: ' mà không thay đổi ý nghĩa.' }
                ]
              }
            ]
          },
          {
            blockNumber: '02',
            type: 'rule',
            badgeTitle: 'CÔNG THỨC & QUY TẮC',
            title: 'Cấu trúc Động từ + Giới từ + V-ing',
            rows: [
              {
                segments: [
                  { type: 'text', content: 'Quy tắc chung: Đứng ngay sau mọi giới từ ( ' },
                  { type: 'pill', content: 'about, of, in, on, for, without...' },
                  { type: 'text', content: ' ), động từ bắt buộc phải chia ở dạng ' },
                  { type: 'badge', content: 'V-ing' },
                  { type: 'text', content: ' .' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: 'Các cụm thông dụng: ' },
                  { type: 'pill', content: 'think of / think about doing' },
                  { type: 'text', content: ' (nghĩ đến việc...), ' },
                  { type: 'pill', content: 'talk about doing' },
                  { type: 'text', content: ' (thảo luận về việc...), ' },
                  { type: 'pill', content: 'give up doing' },
                  { type: 'text', content: ' (từ bỏ làm gì...).' }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'lesson-13-2',
        lessonNumber: '13.2',
        title: 'Động từ theo sau bởi Động từ nguyên mẫu (Verb + Infinitive)',
        heroBadge: 'TRỌNG TÂM NGỮ PHÁP · BÀI GIẢNG CHI TIẾT',
        blocks: [
          {
            blockNumber: '01',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: 'Nhóm động từ theo sau bởi "TO + V-nguyên mẫu"',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'Kế hoạch / Quyết định / Ý định:' },
                  { type: 'text', content: ' ' },
                  { type: 'pill', content: 'plan' },
                  { type: 'text', content: ' (lên kế hoạch), ' },
                  { type: 'pill', content: 'decide' },
                  { type: 'text', content: ' (quyết định), ' },
                  { type: 'pill', content: 'choose' },
                  { type: 'text', content: ' (chọn lựa), ' },
                  { type: 'pill', content: 'arrange' },
                  { type: 'text', content: ' (sắp xếp), ' },
                  { type: 'pill', content: 'agree' },
                  { type: 'text', content: ' (đồng ý).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Kỳ vọng / Mong muốn:' },
                  { type: 'text', content: ' ' },
                  { type: 'pill', content: 'expect' },
                  { type: 'text', content: ' (kỳ vọng), ' },
                  { type: 'pill', content: 'want' },
                  { type: 'text', content: ' (muốn), ' },
                  { type: 'pill', content: 'hope' },
                  { type: 'text', content: ' (hy vọng), ' },
                  { type: 'pill', content: 'deserve' },
                  { type: 'text', content: ' (xứng đáng).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Khả năng / Lời hứa / Từ chối:' },
                  { type: 'text', content: ' ' },
                  { type: 'pill', content: "can / can't afford" },
                  { type: 'text', content: ' (đủ/không đủ khả năng chi trả), ' },
                  { type: 'pill', content: 'promise' },
                  { type: 'text', content: ' (hứa), ' },
                  { type: 'pill', content: 'refuse' },
                  { type: 'text', content: ' (từ chối), ' },
                  { type: 'pill', content: 'offer' },
                  { type: 'text', content: ' (đề nghị giúp).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Cấu trúc với "would":' },
                  { type: 'text', content: ' ' },
                  { type: 'pill', content: 'would like / would love / would prefer + to-V' },
                  { type: 'text', content: ' (ví dụ: ' },
                  { type: 'pill', content: 'I would like to make a reservation' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Lưu ý đặc biệt với "help":' },
                  { type: 'text', content: ' Có thể đi với cả ' },
                  { type: 'pill', content: 'to-V' },
                  { type: 'text', content: ' hoặc ' },
                  { type: 'pill', content: 'V-nguyên mẫu không to' },
                  { type: 'text', content: ' (ví dụ: ' },
                  { type: 'pill', content: 'help to carry' },
                  { type: 'text', content: ' hoặc ' },
                  { type: 'pill', content: 'help carry' },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          },
          {
            blockNumber: '02',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: 'Nhóm động từ theo sau bởi "V-nguyên mẫu không to"',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'Động từ khuyết thiếu (Modal verbs):' },
                  { type: 'text', content: ' ' },
                  { type: 'pill', content: 'can, could, should, must, may, might, will' },
                  { type: 'text', content: ' (ví dụ: ' },
                  { type: 'pill', content: 'We should send an email; You must attend' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Cấu trúc đề xuất / rủ rê:' },
                  { type: 'text', content: ' ' },
                  { type: 'pill', content: "Let's + V-nguyên thể" },
                  { type: 'text', content: ' (ví dụ: ' },
                  { type: 'pill', content: "Let's discuss the project" },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'lesson-13-3',
        lessonNumber: '13.3',
        title: 'Cấu trúc Động từ + Tân ngữ + Động từ nguyên mẫu (Verb + Object + Infinitive) và Động từ sai khiến Make & Let',
        heroBadge: 'TRỌNG TÂM NGỮ PHÁP · BÀI GIẢNG CHI TIẾT',
        blocks: [
          {
            blockNumber: '01',
            type: 'rule',
            badgeTitle: 'CÔNG THỨC & QUY TẮC',
            title: 'Cấu trúc Verb + Tân ngữ + TO-V',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'Nhóm động từ bắt buộc có tân ngữ trước to-V:' },
                  { type: 'text', content: ' ' },
                  { type: 'pill', content: 'advise' },
                  { type: 'text', content: ' (khuyên), ' },
                  { type: 'pill', content: 'allow / permit' },
                  { type: 'text', content: ' (cho phép), ' },
                  { type: 'pill', content: 'tell / remind' },
                  { type: 'text', content: ' (bảo/nhắc nhở), ' },
                  { type: 'pill', content: 'encourage' },
                  { type: 'text', content: ' (khuyến khích), ' },
                  { type: 'pill', content: 'warn' },
                  { type: 'text', content: ' (cảnh báo), ' },
                  { type: 'pill', content: 'invite' },
                  { type: 'text', content: ' (mời), ' },
                  { type: 'pill', content: 'teach / train' },
                  { type: 'text', content: ' (dạy/đào tạo), ' },
                  { type: 'pill', content: 'order' },
                  { type: 'text', content: ' (ra lệnh).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Nhóm động từ có thể có hoặc không có tân ngữ:' },
                  { type: 'text', content: ' ' },
                  { type: 'pill', content: 'want, would like, ask, expect, need, help' },
                  { type: 'text', content: ' (ví dụ: ' },
                  { type: 'pill', content: 'She wants to leave' },
                  { type: 'text', content: ' vs ' },
                  { type: 'pill', content: 'She wants him to leave' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Dạng phủ định:' },
                  { type: 'text', content: ' Verb + Tân ngữ + ' },
                  { type: 'badge', content: 'NOT + TO-V' },
                  { type: 'text', content: ' (ví dụ: The doctor advised him ' },
                  { type: 'badge', content: 'not to smoke' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Lưu ý:' },
                  { type: 'text', content: ' Không dùng mệnh đề ' },
                  { type: 'pill', content: 'that' },
                  { type: 'text', content: ' sau các động từ như ' },
                  { type: 'pill', content: 'want, tell, advise' },
                  { type: 'text', content: ' trong cấu trúc này.' }
                ]
              }
            ]
          },
          {
            blockNumber: '02',
            type: 'rule',
            badgeTitle: 'CÔNG THỨC & QUY TẮC',
            title: 'Cấu trúc Sai khiến & Cho phép với MAKE và LET',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'MAKE + Tân ngữ + V-nguyên mẫu (KHÔNG TO):' },
                  { type: 'text', content: ' Ép buộc hoặc khiến ai đó làm gì (ví dụ: ' },
                  { type: 'pill', content: 'The software bug made the system freeze; The boss made us work late' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'LET + Tân ngữ + V-nguyên mẫu (KHÔNG TO):' },
                  { type: 'text', content: ' Cho phép ai làm gì (= ' },
                  { type: 'pill', content: 'allow/permit + Tân ngữ + to-V' },
                  { type: 'text', content: ' ) (ví dụ: ' },
                  { type: 'pill', content: 'They let employees leave early' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Bẫy Đề thi:' },
                  { type: 'text', content: ' Tuyệt đối ' },
                  { type: 'badge', content: 'KHÔNG dùng to-V' },
                  { type: 'text', content: ' sau ' },
                  { type: 'pill', content: 'make' },
                  { type: 'text', content: ' và ' },
                  { type: 'pill', content: 'let' },
                  { type: 'text', content: ' ở thể chủ động.' }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'topic-14',
    topicNumber: '14',
    title: 'Câu tường thuật',
    lessonCount: 3,
    lessons: [
      {
        id: 'lesson-14-1',
        lessonNumber: '14.1',
        title: 'Câu tường thuật gián tiếp (Reported Statements)',
        heroBadge: 'TRỌNG TÂM NGỮ PHÁP · BÀI GIẢNG CHI TIẾT',
        blocks: [
          {
            blockNumber: '01',
            type: 'rule',
            badgeTitle: 'CÔNG THỨC & QUY TẮC',
            title: 'Quy tắc Lùi thì chuẩn trong câu gián tiếp',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'Hiện tại đơn ➔ Quá khứ đơn:' },
                  { type: 'text', content: ' ' },
                  { type: 'pill', content: 'am/is/are ➔ was/were' },
                  { type: 'text', content: ' ; ' },
                  { type: 'pill', content: 'V(s/es) ➔ V2/V-ed' },
                  { type: 'text', content: ' (ví dụ: ' },
                  { type: 'pill', content: '"I work here" ➔ He said that he worked there' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Hiện tại tiếp diễn ➔ Quá khứ tiếp diễn:' },
                  { type: 'text', content: ' ' },
                  { type: 'pill', content: 'am/is/are + V-ing ➔ was/were + V-ing' },
                  { type: 'text', content: ' .' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Hiện tại hoàn thành ➔ Quá khứ hoàn thành:' },
                  { type: 'text', content: ' ' },
                  { type: 'pill', content: 'have/has + V3 ➔ had + V3' },
                  { type: 'text', content: ' .' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Quá khứ đơn ➔ Quá khứ hoàn thành:' },
                  { type: 'text', content: ' ' },
                  { type: 'pill', content: 'V2 /V-ed ➔ had + V3' },
                  { type: 'text', content: ' .' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Động từ khuyết thiếu (Modal verbs):' }
                ]
              },
              {
                segments: [
                  { type: 'pill', content: 'will ➔ would' }
                ]
              },
              {
                segments: [
                  { type: 'pill', content: 'can ➔ could' }
                ]
              },
              {
                segments: [
                  { type: 'pill', content: 'must ➔ had to / must' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: '(Lưu ý: could, should, would, might giữ nguyên).' }
                ]
              }
            ]
          },
          {
            blockNumber: '02',
            type: 'rule',
            badgeTitle: 'CÔNG THỨC & QUY TẮC',
            title: 'Biến đổi Đại từ và Tính từ sở hữu',
            rows: [
              {
                segments: [
                  { type: 'text', content: 'Đổi theo chủ ngữ của mệnh đề tường thuật: ' },
                  { type: 'pill', content: 'I ➔ he/she' },
                  { type: 'text', content: ' , ' },
                  { type: 'pill', content: 'me ➔ him/her' },
                  { type: 'text', content: ' , ' },
                  { type: 'pill', content: 'my ➔ his/her' },
                  { type: 'text', content: ' , ' },
                  { type: 'pill', content: 'we ➔ they' },
                  { type: 'text', content: ' , ' },
                  { type: 'pill', content: 'our ➔ their' },
                  { type: 'text', content: ' .' }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'lesson-14-2',
        lessonNumber: '14.2',
        title: 'Cách phân biệt Say, Tell, Ask và Advise',
        heroBadge: 'TRỌNG TÂM NGỮ PHÁP · BÀI GIẢNG CHI TIẾT',
        blocks: [
          {
            blockNumber: '01',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: 'Phân biệt SAY và TELL (Thuật lại lời nói / thông tin)',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'SAY:' },
                  { type: 'text', content: ' Dùng cấu trúc ' },
                  { type: 'pill', content: 'say (that) + Mệnh đề' },
                  { type: 'text', content: ' HOẶC ' },
                  { type: 'pill', content: 'say TO somebody that...' },
                  { type: 'text', content: ' . ' },
                  { type: 'badge', content: 'Lưu ý:' },
                  { type: 'text', content: ' Tuyệt đối KHÔNG dùng ' },
                  { type: 'pill', content: 'say somebody that' },
                  { type: 'text', content: ' (ví dụ: Đúng: ' },
                  { type: 'pill', content: 'He said that he was busy' },
                  { type: 'text', content: ' ; Sai: ' },
                  { type: 'pill', content: 'He said me that...' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'TELL:' },
                  { type: 'text', content: ' Bắt buộc phải có tân ngữ chỉ người theo sau: ' },
                  { type: 'pill', content: 'tell + Tân ngữ (Somebody) + (that) + Mệnh đề' },
                  { type: 'text', content: ' . ' },
                  { type: 'badge', content: 'Lưu ý:' },
                  { type: 'text', content: ' Tuyệt đối KHÔNG dùng ' },
                  { type: 'pill', content: 'tell that...' },
                  { type: 'text', content: ' hoặc ' },
                  { type: 'pill', content: 'tell to somebody that...' },
                  { type: 'text', content: ' (ví dụ: Đúng: ' },
                  { type: 'pill', content: 'He told me that...' },
                  { type: 'text', content: ' ; Sai: ' },
                  { type: 'pill', content: 'He told that...' },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          },
          {
            blockNumber: '02',
            type: 'rule',
            badgeTitle: 'CÔNG THỨC & QUY TẮC',
            title: 'Cấu trúc tường thuật Yêu cầu, Mệnh lệnh và Lời khuyên',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'TELL + Tân ngữ + (not) TO-V:' },
                  { type: 'text', content: ' Tường thuật chỉ dẫn, mệnh lệnh (ví dụ: ' },
                  { type: 'pill', content: 'The manager told us to submit the report' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'ASK + Tân ngữ + (not) TO-V:' },
                  { type: 'text', content: ' Tường thuật lời yêu cầu lịch sự, nhờ vả (ví dụ: ' },
                  { type: 'pill', content: 'She asked him to send the file' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'ADVISE + Tân ngữ + (not) TO-V:' },
                  { type: 'text', content: ' Tường thuật lời khuyên (ví dụ: ' },
                  { type: 'pill', content: 'The doctor advised him not to smoke' },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'lesson-14-3',
        lessonNumber: '14.3',
        title: 'Câu hỏi gián tiếp (Indirect Questions)',
        heroBadge: 'TRỌNG TÂM NGỮ PHÁP · BÀI GIẢNG CHI TIẾT',
        blocks: [
          {
            blockNumber: '01',
            type: 'rule',
            badgeTitle: 'CÔNG THỨC & QUY TẮC',
            title: 'QUY TẮC TRẬT TỰ TỪ CỐT LÕI',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'Với câu hỏi có từ để hỏi (Wh-questions):' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: 'Cụm mở đầu + Từ để hỏi (What / Where / When / How...) + S + V' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: '(ví dụ: Trực tiếp: ' },
                  { type: 'pill', content: 'Where is the station?' },
                  { type: 'text', content: ' ➔ Gián tiếp: Could you tell me where ' },
                  { type: 'badge', content: 'the station is' },
                  { type: 'text', content: ' ? ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Với trợ động từ Do / Does / Did:' },
                  { type: 'text', content: ' Bỏ ' },
                  { type: 'pill', content: 'do/does/did' },
                  { type: 'text', content: ' và chia động từ trực tiếp theo chủ ngữ và thì của câu (ví dụ: Do you know where he ' },
                  { type: 'badge', content: 'lives' },
                  { type: 'text', content: ' ? ; I want to know what they ' },
                  { type: 'badge', content: 'discussed' },
                  { type: 'text', content: ' .).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Với câu hỏi Yes/No (Không có từ để hỏi Wh-):' },
                  { type: 'text', content: ' Dùng liên từ ' },
                  { type: 'badge', content: 'IF' },
                  { type: 'text', content: ' hoặc ' },
                  { type: 'badge', content: 'WHETHER' },
                  { type: 'text', content: ' :' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: 'Cụm mở đầu + If / Whether + S + V (ví dụ: Do you know ' },
                  { type: 'badge', content: 'if/whether' },
                  { type: 'text', content: ' the manager will attend? ).' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: 'Trong câu hỏi gián tiếp, mệnh đề theo sau từ để hỏi ' },
                  { type: 'badge', content: 'trở về trật tự của một câu khẳng định (Chủ ngữ + Động từ)' },
                  { type: 'text', content: '. Tuyệt đối KHÔNG đảo trợ động từ hay động từ to-be lên trước chủ ngữ.' }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'topic-15',
    topicNumber: '15',
    title: 'Mệnh đề quan hệ',
    lessonCount: 3,
    lessons: [
      {
        id: 'lesson-15-1',
        lessonNumber: '15.1',
        title: 'Mệnh đề quan hệ và Đại từ quan hệ (Who, Which, That)',
        heroBadge: 'TRỌNG TÂM NGỮ PHÁP · BÀI GIẢNG CHI TIẾT',
        blocks: [
          {
            blockNumber: '01',
            type: 'rule',
            badgeTitle: 'BẮT QUY TẮC CẦN NHỚ',
            title: 'Phân loại Đại từ quan hệ cơ bản',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'WHO:' },
                  { type: 'text', content: ' Dùng để thay thế cho danh từ chỉ ' },
                  { type: 'badge', content: 'NGƯỜI' },
                  { type: 'text', content: ' , đóng vai trò làm chủ ngữ hoặc tân ngữ trong mệnh đề quan hệ (theo sau thường là động từ hoặc cụm S-V) (ví dụ: ' },
                  { type: 'pill', content: 'the architect who designed the building' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'WHICH:' },
                  { type: 'text', content: ' Dùng để thay thế cho danh từ chỉ ' },
                  { type: 'badge', content: 'ĐỒ VẬT, CON VẬT, SỰ VIỆC' },
                  { type: 'text', content: ' (ví dụ: ' },
                  { type: 'pill', content: 'the report which contains the annual budget' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'THAT:' },
                  { type: 'text', content: ' Có thể thay thế cho cả ' },
                  { type: 'pill', content: 'who' },
                  { type: 'text', content: ' (chỉ người) và ' },
                  { type: 'pill', content: 'which' },
                  { type: 'text', content: ' (chỉ vật) trong mệnh đề quan hệ xác định (ví dụ: ' },
                  { type: 'pill', content: 'the employee that worked late; the device that was upgraded' },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          },
          {
            blockNumber: '02',
            type: 'highlight',
            badgeTitle: 'CẢNH BÁO BẪY ĐỀ THI',
            title: 'BẪY KINH ĐIỂN CẦN TRÁNH TRONG ĐỀ THI',
            rows: [
              {
                segments: [
                  { type: 'text', content: 'Đại từ quan hệ ( ' },
                  { type: 'pill', content: 'who / which / that' },
                  { type: 'text', content: ' ) đã trực tiếp thay thế cho chủ ngữ hoặc tân ngữ của mệnh đề quan hệ, vì vậy ' },
                  { type: 'badge', content: 'TUYỆT ĐỐI KHÔNG lặp lại đại từ nhân xưng' },
                  { type: 'text', content: ' (như ' },
                  { type: 'pill', content: 'he, she, it, they' },
                  { type: 'text', content: ' ) ngay sau đại từ quan hệ (ví dụ: viết ' },
                  { type: 'pill', content: 'the man who lives next door' },
                  { type: 'text', content: ' , KHÔNG viết ' },
                  { type: 'pill', content: 'the man who he lives next door' },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'lesson-15-2',
        lessonNumber: '15.2',
        title: 'Đại từ quan hệ làm Chủ ngữ vs. Tân ngữ và Quy tắc Lược bỏ Đại từ quan hệ',
        heroBadge: 'TRỌNG TÂM NGỮ PHÁP · BÀI GIẢNG CHI TIẾT',
        blocks: [
          {
            blockNumber: '01',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: 'Đại từ quan hệ làm CHỦ NGỮ (Subject)',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'Cấu trúc:' },
                  { type: 'text', content: ' ' },
                  { type: 'pill', content: 'Danh từ + WHO / WHICH / THAT + Động từ (V) + ...' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Ví dụ:' },
                  { type: 'text', content: ' Basildon Park is a house ' },
                  { type: 'badge', content: 'which often appears' },
                  { type: 'text', content: ' in films; The manager ' },
                  { type: 'badge', content: 'who approved' },
                  { type: 'text', content: ' the proposal.' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Quy tắc quan trọng:' },
                  { type: 'text', content: ' Khi đại từ quan hệ làm chủ ngữ, ' },
                  { type: 'badge', content: 'BẮT BUỘC phải xuất hiện' },
                  { type: 'text', content: ' đại từ quan hệ ( ' },
                  { type: 'pill', content: 'who/which/that' },
                  { type: 'text', content: ' ) trước động từ, tuyệt đối KHÔNG được tự ý bỏ trống.' }
                ]
              }
            ]
          },
          {
            blockNumber: '02',
            type: 'rule',
            badgeTitle: 'CÔNG THỨC & QUY TẮC',
            title: 'Đại từ quan hệ làm TÂN NGỮ (Object) & Quy tắc Lược bỏ',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'Cấu trúc:' },
                  { type: 'text', content: ' ' },
                  { type: 'pill', content: 'Danh từ + (WHO / WHOM / WHICH / THAT) + Chủ ngữ (S) + Động từ (V)' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Ví dụ:' },
                  { type: 'text', content: ' The house ' },
                  { type: 'badge', content: '(which) they used' },
                  { type: 'text', content: ' in the film; The teacher ' },
                  { type: 'badge', content: '(who) I like most' },
                  { type: 'text', content: ' .' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Quy tắc lược bỏ:' },
                  { type: 'text', content: ' Khi đại từ quan hệ đóng vai trò làm tân ngữ cho động từ phía sau, ta ' },
                  { type: 'badge', content: 'HOÀN TOÀN CÓ THỂ LƯỢC BỎ' },
                  { type: 'text', content: ' đại từ quan hệ mà câu vẫn đúng ngữ pháp (ví dụ: ' },
                  { type: 'pill', content: 'The report we reviewed yesterday was helpful' },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          },
          {
            blockNumber: '03',
            type: 'highlight',
            badgeTitle: 'CẢNH BÁO BẪY ĐỀ THI',
            title: 'BẪY THƯỜNG GẶP TRONG ĐỀ THI',
            rows: [
              {
                segments: [
                  { type: 'text', content: 'Khi đại từ quan hệ làm tân ngữ (dù có mặt hay bị lược bỏ), ' },
                  { type: 'badge', content: 'TUYỆT ĐỐI KHÔNG lặp lại tân ngữ' },
                  { type: 'text', content: ' phía sau (ví dụ: viết ' },
                  { type: 'pill', content: 'The house they used in the film was called...' },
                  { type: 'text', content: ' , KHÔNG viết The house they used ' },
                  { type: 'badge', content: 'it' },
                  { type: 'text', content: ' in the film... ).' }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'lesson-15-3',
        lessonNumber: '15.3',
        title: 'Giới từ trong Mệnh đề quan hệ, Trạng từ quan hệ (Where, When, Why) và Đại từ Which thay thế cho cả mệnh đề',
        heroBadge: 'TRỌNG TÂM NGỮ PHÁP · BÀI GIẢNG CHI TIẾT',
        blocks: [
          {
            blockNumber: '01',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: 'Trạng từ quan hệ (Relative Adverbs: Where, When, Why)',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'WHERE (= in/at/on which):' },
                  { type: 'text', content: ' Bổ nghĩa cho danh từ chỉ ' },
                  { type: 'badge', content: 'NƠI CHỐN' },
                  { type: 'text', content: ' , theo sau là một mệnh đề hoàn chỉnh ( ' },
                  { type: 'pill', content: 'S + V + O' },
                  { type: 'text', content: ' ) (ví dụ: That\'s the building ' },
                  { type: 'badge', content: 'where' },
                  { type: 'text', content: ' we work ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'WHEN (= in/at/on which):' },
                  { type: 'text', content: ' Bổ nghĩa cho danh từ chỉ ' },
                  { type: 'badge', content: 'THỜI GIAN, NGÀY, NĂM' },
                  { type: 'text', content: ' (ví dụ: the day ' },
                  { type: 'badge', content: 'when' },
                  { type: 'text', content: ' I passed the exam ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'WHY (= for which):' },
                  { type: 'text', content: ' Bổ nghĩa cho danh từ chỉ ' },
                  { type: 'badge', content: 'LÝ DO' },
                  { type: 'text', content: ' , thường đứng ngay sau cụm ' },
                  { type: 'pill', content: 'the reason' },
                  { type: 'text', content: ' (ví dụ: the reason ' },
                  { type: 'badge', content: 'why' },
                  { type: 'text', content: ' he resigned ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'BẪY ĐỀ THI CẦN TRÁNH:' },
                  { type: 'text', content: ' Khi đã sử dụng ' },
                  { type: 'pill', content: 'where' },
                  { type: 'text', content: ' hoặc ' },
                  { type: 'pill', content: 'when' },
                  { type: 'text', content: ' , ' },
                  { type: 'badge', content: 'TUYỆT ĐỐI KHÔNG lặp lại giới từ' },
                  { type: 'text', content: ' chỉ nơi chốn/thời gian ở cuối mệnh đề (ví dụ: viết ' },
                  { type: 'pill', content: 'the house where we lived' },
                  { type: 'text', content: ' , KHÔNG viết the house where we lived ' },
                  { type: 'badge', content: 'in' },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          },
          {
            blockNumber: '02',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: 'Giới từ trong Mệnh đề quan hệ',
            rows: [
              {
                segments: [
                  { type: 'text', content: 'Trong văn phong trang trọng của bài thi, giới từ có thể được đảo lên đứng trước đại từ quan hệ ( ' },
                  { type: 'pill', content: 'with whom, for which, in which, about whom' },
                  { type: 'text', content: ' ). Tuyệt đối không đặt giới từ trước ' },
                  { type: 'pill', content: 'that' },
                  { type: 'text', content: ' hoặc ' },
                  { type: 'pill', content: 'who' },
                  { type: 'text', content: ' .' }
                ]
              }
            ]
          },
          {
            blockNumber: '03',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: 'Đại từ WHICH thay thế cho cả mệnh đề đứng trước',
            rows: [
              {
                segments: [
                  { type: 'pill', content: 'Which' },
                  { type: 'text', content: ' có thể đứng sau dấu phẩy ( ' },
                  { type: 'pill', content: ',' },
                  { type: 'text', content: ' ) để bổ nghĩa hoặc đưa ra lời nhận xét/kết quả cho ' },
                  { type: 'badge', content: 'toàn bộ sự việc của mệnh đề phía trước' },
                  { type: 'text', content: ' (ví dụ: Sales increased by 20%, ' },
                  { type: 'badge', content: 'which' },
                  { type: 'text', content: ' was amazing ).' }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'topic-16',
    topicNumber: '16',
    title: 'Liên từ',
    lessonCount: 4,
    lessons: [
      {
        id: 'lesson-16-1',
        lessonNumber: '16.1',
        title: 'Liên từ kết hợp And, But, Or và Liên từ tương quan Both... and, Either... or',
        heroBadge: 'TRỌNG TÂM NGỮ PHÁP · BÀI GIẢNG CHI TIẾT',
        blocks: [
          {
            blockNumber: '01',
            type: 'rule',
            badgeTitle: 'CÔNG THỨC & QUY TẮC',
            title: 'Bộ 3 Liên Từ Kết Hợp Đơn (And, But, Or)',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'AND (Và - Bổ sung & Tiếp nối):' },
                  { type: 'text', content: ' Bổ sung thêm thông tin có tính chất tương đồng hoặc tiếp nối hành động. Có thể lược bỏ chủ ngữ trùng lặp ở vế sau (VÍ DỤ CHUẨN: ' },
                  { type: 'pill', content: 'I made a cake and baked cookies.' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'BUT (Nhưng - Tương phản & Đối lập):' },
                  { type: 'text', content: ' Nối hai ý kiến, hai vế câu mang tính chất trái ngược, tương phản về ngữ nghĩa (VÍ DỤ CHUẨN: The product is high quality, ' },
                  { type: 'badge', content: 'but' },
                  { type: 'text', content: ' it is expensive. ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'OR (Hoặc - Lựa chọn phương án):' },
                  { type: 'text', content: ' Đưa ra sự lựa chọn giữa hai hay nhiều phương án, hành động hoặc đối tượng khác nhau (VÍ DỤ CHUẨN: Would you like tea ' },
                  { type: 'badge', content: 'or' },
                  { type: 'text', content: ' coffee? ).' }
                ]
              }
            ]
          },
          {
            blockNumber: '02',
            type: 'rule',
            badgeTitle: 'CẶP TỪ CỐ ĐỊNH TRONG ĐỀ THI',
            title: 'Cặp Liên Từ Tương Quan Cố Định (Both... and, Either... or)',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'BOTH + A + AND + B (Cả A và B - Bao gồm cả 2):' },
                  { type: 'text', content: ' Dùng để nhấn mạnh cả hai đối tượng hoặc hai hành động cùng diễn ra đồng thời (ví dụ: both French ' },
                  { type: 'badge', content: 'and' },
                  { type: 'text', content: ' Japanese ; both in the morning ' },
                  { type: 'badge', content: 'and' },
                  { type: 'text', content: ' in the afternoon ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'EITHER + A + OR + B (Hoặc A hoặc B - Chọn 1 trong 2):' },
                  { type: 'text', content: ' Dùng để nhấn mạnh sự lựa chọn một trong hai đối tượng hoặc hai phương án (ví dụ: either call us ' },
                  { type: 'badge', content: 'or' },
                  { type: 'text', content: ' send an email ; either today ' },
                  { type: 'badge', content: 'or' },
                  { type: 'text', content: ' tomorrow ).' }
                ]
              }
            ]
          },
          {
            blockNumber: '03',
            type: 'highlight',
            badgeTitle: 'CẢNH BÁO BẪY ĐỀ THI',
            title: 'Quy Tắc Cấu Trúc Song Hành (Parallel Structure)',
            rows: [
              {
                segments: [
                  { type: 'text', content: 'Các thành phần đứng sau both / and hoặc either / or ' },
                  { type: 'badge', content: 'BẮT BUỘC' },
                  { type: 'text', content: ' phải có cùng dạng từ loại hoặc dạng ngữ pháp: Danh từ ↔ Danh từ (students & teachers); Tính từ ↔ Tính từ (fast & reliable); Động từ ↔ Động từ (call or send).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'BẪY ĐỀ THI KINH ĐIỂN CẦN TRÁNH:' },
                  { type: 'text', content: ' Tuyệt đối KHÔNG ghép lệch dạng từ loại (❌ SAI: both fast (Tính từ) and reliably (Trạng từ) | ✔️ ĐÚNG: both fast (Tính từ) and reliable (Tính từ)).' }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'lesson-16-2',
        lessonNumber: '16.2',
        title: 'Liên từ chỉ Nguyên nhân, Kết quả và Mục đích (Because, So, So that)',
        heroBadge: 'TRỌNG TÂM NGỮ PHÁP · BÀI GIẢNG CHI TIẾT',
        blocks: [
          {
            blockNumber: '01',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: '1. Nhóm chỉ Nguyên nhân (Cause & Reason)',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'BECAUSE + Mệnh đề (S + V):' },
                  { type: 'text', content: ' Dùng để giải thích lý do tại sao sự việc xảy ra (ví dụ: ' },
                  { type: 'pill', content: 'All trains are late because it is snowing' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'BECAUSE OF + Cụm danh từ / V-ing:' },
                  { type: 'text', content: ' Mang nghĩa "bởi vì", nhưng theo sau tuyệt đối không được là mệnh đề (ví dụ: ' },
                  { type: 'pill', content: 'All trains are late because of the snow' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Lưu ý:' },
                  { type: 'text', content: ' Khi đứng đầu câu, sau mệnh đề/cụm ' },
                  { type: 'pill', content: 'Because / Because of' },
                  { type: 'text', content: ' phải có dấu phẩy ngăn cách.' }
                ]
              }
            ]
          },
          {
            blockNumber: '02',
            type: 'highlight',
            badgeTitle: 'ĐIỂN NHẤN KIẾN THỨC',
            title: '2. Nhóm chỉ Kết quả (Result)',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'SO + Mệnh đề (S + V):' },
                  { type: 'text', content: ' Mang nghĩa "vì vậy / do đó", diễn tả kết quả logic bắt nguồn từ mệnh đề đứng trước (ví dụ: ' },
                  { type: 'pill', content: "She didn't prepare well, so she failed" },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          },
          {
            blockNumber: '03',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: '3. Nhóm chỉ Mục đích (Purpose)',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'SO THAT + Mệnh đề (S + can / could / will / would + V):' },
                  { type: 'text', content: ' Mang nghĩa "để mà", theo sau là mệnh đề thường có trợ động từ khuyết thiếu (ví dụ: ' },
                  { type: 'pill', content: 'He works hard so that he can buy a house' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'TO + V-nguyên mẫu (Infinitive of purpose):' },
                  { type: 'text', content: ' Dùng để rút gọn chỉ mục đích khi hai hành động có cùng chủ ngữ (ví dụ: ' },
                  { type: 'pill', content: 'He works hard to buy a house' },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'lesson-16-3',
        lessonNumber: '16.3',
        title: 'Liên từ chỉ thời gian (Linking words for time: When, Before, After, Until, While, As soon as)',
        heroBadge: 'TRỌNG TÂM NGỮ PHÁP · BÀI GIẢNG CHI TIẾT',
        blocks: [
          {
            blockNumber: '01',
            type: 'highlight',
            badgeTitle: 'CẢNH BÁO BẪY ĐỀ THI',
            title: '1. Phân biệt WHILE và DURING (Bẫy kinh điển trong bài thi)',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'WHILE + Mệnh đề (S + V):' },
                  { type: 'text', content: ' Mang nghĩa "trong khi / trong lúc" hành động đang diễn ra (ví dụ: ' },
                  { type: 'pill', content: 'while I was attending the meeting' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'DURING + Cụm danh từ:' },
                  { type: 'text', content: ' Mang nghĩa "trong suốt khoảng thời gian / sự kiện nào đó" và theo sau tuyệt đối không có động từ chia thì (ví dụ: ' },
                  { type: 'pill', content: 'during the meeting, during the summer' },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          },
          {
            blockNumber: '02',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: '2. Ý nghĩa các liên từ thời gian thông dụng',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'When:' },
                  { type: 'text', content: ' Khi nào / Vào thời điểm.' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'As soon as:' },
                  { type: 'text', content: ' Ngay khi (hành động tiếp nối ngay lập tức).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Before / After:' },
                  { type: 'text', content: ' Trước khi / Sau khi (thứ tự thời gian).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Until:' },
                  { type: 'text', content: ' Cho đến khi (hành động kéo dài liên tục tới mốc thời gian đó).' }
                ]
              }
            ]
          },
          {
            blockNumber: '03',
            type: 'rule',
            badgeTitle: 'CÔNG THỨC & QUY TẮC',
            title: '3. QUY TẮC HÒA HỢP THÌ TRONG TƯƠNG LAI',
            rows: [
              {
                segments: [
                  { type: 'text', content: 'Khi mệnh đề chính diễn tả hành động trong tương lai ( ' },
                  { type: 'pill', content: 'will + V-inf' },
                  { type: 'text', content: ' ), thì mệnh đề trạng ngữ chỉ thời gian (bắt đầu bằng ' },
                  { type: 'pill', content: 'when, before, after, until, as soon as' },
                  { type: 'text', content: ' ) ' },
                  { type: 'badge', content: 'TUYỆT ĐỐI KHÔNG DÙNG "will"' },
                  { type: 'text', content: ' mà bắt buộc phải chia ở ' },
                  { type: 'badge', content: 'thì Hiện tại đơn' },
                  { type: 'text', content: ' .' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Ví dụ:' },
                  { type: 'text', content: ' ' },
                  { type: 'pill', content: 'They will call us as soon as they receive (NOT will receive) the report.' }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'lesson-16-4',
        lessonNumber: '16.4',
        title: 'Từ nối chỉ trình tự sự việc và quy trình hướng dẫn (Linking words for stories and instructions)',
        heroBadge: 'TRỌNG TÂM NGỮ PHÁP · BÀI GIẢNG CHI TIẾT',
        blocks: [
          {
            blockNumber: '01',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: '1. Từ nối chỉ trình tự các bước & Quy trình hướng dẫn (Instructions)',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'Bước mở đầu:' },
                  { type: 'text', content: ' Dùng ' },
                  { type: 'pill', content: 'First / Firstly' },
                  { type: 'text', content: ' (Đầu tiên).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Các bước tiếp nối:' },
                  { type: 'text', content: ' Dùng ' },
                  { type: 'pill', content: 'Then / Next / After that' },
                  { type: 'text', content: ' (Sau đó, tiếp theo).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Bước cuối cùng của một quy trình:' },
                  { type: 'text', content: ' Dùng ' },
                  { type: 'badge', content: 'Finally' },
                  { type: 'text', content: ' (Cuối cùng - ' },
                  { type: 'badge', content: 'Lưu ý:' },
                  { type: 'text', content: ' Không dùng "in the end" cho bước hướng dẫn kỹ thuật).' }
                ]
              }
            ]
          },
          {
            blockNumber: '02',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: '2. Từ nối kể lại sự việc trong quá khứ (Narrative / Stories)',
            rows: [
              {
                segments: [
                  { type: 'text', content: 'Dùng ' },
                  { type: 'badge', content: 'In the end' },
                  { type: 'text', content: ' (Rốt cuộc, kết quả cuối cùng là) để diễn tả kết cục sau một khoảng thời gian dài hoặc sau nhiều biến cố (ví dụ: ' },
                  { type: 'pill', content: 'In the end, the contract was signed' },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          },
          {
            blockNumber: '03',
            type: 'rule',
            badgeTitle: 'CÔNG THỨC & QUY TẮC',
            title: '3. CẤU TRÚC RÚT GỌN KINH ĐIỂN TRONG ĐỀ THI',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'BEFORE + V-ing:' },
                  { type: 'text', content: ' Trước khi làm gì (ví dụ: ' },
                  { type: 'pill', content: 'Check the manual before operating the machine' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'AFTER + V-ing:' },
                  { type: 'text', content: ' Sau khi làm gì (ví dụ: ' },
                  { type: 'pill', content: 'He left after signing the agreement' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Bẫy Đề thi:' },
                  { type: 'text', content: ' Sau ' },
                  { type: 'pill', content: 'before' },
                  { type: 'text', content: ' và ' },
                  { type: 'pill', content: 'after' },
                  { type: 'text', content: ' khi rút gọn cùng chủ ngữ, động từ bắt buộc chia ở dạng ' },
                  { type: 'badge', content: 'V-ing' },
                  { type: 'text', content: ' (tuyệt đối không dùng to-V hay động từ nguyên mẫu không chia).' }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'topic-17',
    topicNumber: '17',
    title: 'Thể bị động',
    lessonCount: 3,
    lessons: [
      {
        id: 'lesson-17-1',
        lessonNumber: '17.1',
        title: 'Câu bị động ở thì Hiện tại đơn và Quá khứ đơn (Passive Voice)',
        heroBadge: 'TRỌNG TÂM NGỮ PHÁP · BÀI GIẢNG CHI TIẾT',
        blocks: [
          {
            blockNumber: '01',
            type: 'rule',
            badgeTitle: 'CÔNG THỨC & QUY TẮC',
            title: 'Công thức chuẩn của Thể bị động',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'Hiện tại đơn (Present Simple Passive):' }
                ]
              },
              {
                segments: [
                  { type: 'pill', content: 'S + am / is / are + V3 / V-ed (+ by O)' },
                  { type: 'text', content: ' (ví dụ: ' },
                  { type: 'pill', content: 'Cheese is made from milk; Smoking is not allowed' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Quá khứ đơn (Past Simple Passive):' }
                ]
              },
              {
                segments: [
                  { type: 'pill', content: 'S + was / were + V3 / V-ed (+ by O)' },
                  { type: 'text', content: ' (ví dụ: ' },
                  { type: 'pill', content: 'The bridge was designed in 1992; Were the letters delivered yesterday?' },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          },
          {
            blockNumber: '02',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: 'Mẹo nhận biết câu bị động trong đề thi trắc nghiệm',
            rows: [
              {
                segments: [
                  { type: 'text', content: 'Chủ ngữ là đối tượng ' },
                  { type: 'badge', content: 'bị tác động' },
                  { type: 'text', content: ' (không tự thực hiện hành động).' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: 'Phía sau chỗ trống ' },
                  { type: 'badge', content: 'không có tân ngữ' },
                  { type: 'text', content: ' trực tiếp mà thường đi kèm cụm giới từ chỉ tác nhân hoặc thời gian/địa điểm (như ' },
                  { type: 'pill', content: 'by, in, at, on, to...' },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'lesson-17-2',
        lessonNumber: '17.2',
        title: 'Câu bị động ở thì Hiện tại hoàn thành và với Động từ khuyết thiếu (Passive Voice - Part 2)',
        heroBadge: 'TRỌNG TÂM NGỮ PHÁP · BÀI GIẢNG CHI TIẾT',
        blocks: [
          {
            blockNumber: '01',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: 'Bị động ở thì Hiện tại hoàn thành (Present Perfect Passive)',
            rows: [
              {
                segments: [
                  { type: 'text', content: 'Dùng để diễn tả một hành động vừa mới được hoàn tất, hoặc đã được thực hiện kéo dài từ quá khứ đến nay mà không nêu rõ thời gian cụ thể (thường đi kèm với ' },
                  { type: 'pill', content: 'since, for, already, yet, recently, just' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Công thức khẳng định:' },
                  { type: 'text', content: ' ' },
                  { type: 'pill', content: 'S + has / have + been + V3 / V-ed' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Công thức phủ định:' },
                  { type: 'text', content: ' ' },
                  { type: 'pill', content: "S + hasn't / haven't + been + V3 / V-ed" },
                  { type: 'text', content: ' (thường có ' },
                  { type: 'pill', content: 'yet' },
                  { type: 'text', content: ' ở cuối).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Công thức nghi vấn:' },
                  { type: 'text', content: ' ' },
                  { type: 'pill', content: 'Has / Have + S + been + V3 / V-ed?' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Ví dụ:' },
                  { type: 'text', content: ' ' },
                  { type: 'pill', content: "A new branch has been opened; The computers haven't been fixed yet." }
                ]
              }
            ]
          },
          {
            blockNumber: '02',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: 'Bị động với Động từ khuyết thiếu (Modal Verbs Passive)',
            rows: [
              {
                segments: [
                  { type: 'text', content: 'Dùng để diễn đạt yêu cầu, quy định bắt buộc, khả năng hoặc kế hoạch tương lai (đi với ' },
                  { type: 'pill', content: 'can, could, must, should, will, may, have to' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Công thức chuẩn:' },
                  { type: 'text', content: ' S + Modal Verb + ' },
                  { type: 'badge', content: 'be + V3 / V-ed' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Ví dụ:' },
                  { type: 'text', content: ' ' },
                  { type: 'pill', content: 'Mobile phones must be switched off; The report will be sent tomorrow.' }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'lesson-17-3',
        lessonNumber: '17.3',
        title: 'Cấu trúc Thể nhờ bảo/thuê dịch vụ (Have / Get something done)',
        heroBadge: 'TRỌNG TÂM NGỮ PHÁP · BÀI GIẢNG CHI TIẾT',
        blocks: [
          {
            blockNumber: '01',
            type: 'rule',
            badgeTitle: 'CÔNG THỨC & QUY TẮC',
            title: 'Công thức chuẩn của Thể nhờ bảo (Causative Form)',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'Cấu trúc với HAVE:' },
                  { type: 'text', content: ' S + ' },
                  { type: 'badge', content: 'HAVE' },
                  { type: 'text', content: ' (chia theo thì) + ' },
                  { type: 'badge', content: 'Tân ngữ chỉ vật (Something) + V3 / V-ed' },
                  { type: 'text', content: ' (+ by O) (ví dụ: ' },
                  { type: 'pill', content: 'I have my car serviced every six months; Carol had her house painted' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Cấu trúc tương đương với GET:' },
                  { type: 'text', content: ' S + ' },
                  { type: 'badge', content: 'GET' },
                  { type: 'text', content: ' (chia theo thì) + ' },
                  { type: 'badge', content: 'Tân ngữ chỉ vật (Something) + V3 / V-ed' },
                  { type: 'text', content: ' (ví dụ: ' },
                  { type: 'pill', content: "Don't forget to get the report printed; We will get the air conditioner fixed" },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          },
          {
            blockNumber: '02',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: 'Áp dụng với Động từ khuyết thiếu và Câu hỏi',
            rows: [
              {
                segments: [
                  { type: 'text', content: 'Đi với modal verbs: ' },
                  { type: 'pill', content: 'must/should/will have something done' },
                  { type: 'text', content: ' (ví dụ: ' },
                  { type: 'pill', content: 'We must have the windows cleaned soon' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: 'Trong câu hỏi: ' },
                  { type: 'pill', content: 'Did you have the documents translated?' }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'topic-18',
    topicNumber: '18',
    title: 'Từ đi cùng (Collocations)',
    lessonCount: 6,
    lessons: [
      {
        id: 'lesson-18-1',
        lessonNumber: '18.1',
        title: 'Cụm từ cố định / Sự kết hợp từ tự nhiên (Collocations)',
        heroBadge: 'TRỌNG TÂM NGỮ PHÁP · BÀI GIẢNG CHI TIẾT',
        blocks: [
          {
            blockNumber: '01',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: 'Động từ + Danh từ (Verb + Noun)',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'MAKE:' },
                  { type: 'text', content: ' ' },
                  { type: 'pill', content: 'make a mistake' },
                  { type: 'text', content: ' (phạm sai lầm), ' },
                  { type: 'pill', content: 'make a decision' },
                  { type: 'text', content: ' (ra quyết định), ' },
                  { type: 'pill', content: 'make a reservation' },
                  { type: 'text', content: ' (đặt chỗ), ' },
                  { type: 'pill', content: 'make a phone call' },
                  { type: 'text', content: ' (gọi điện thoại), ' },
                  { type: 'pill', content: 'make an appointment' },
                  { type: 'text', content: ' (hẹn gặp).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'DO:' },
                  { type: 'text', content: ' ' },
                  { type: 'pill', content: 'do business with' },
                  { type: 'text', content: ' (làm ăn/kinh doanh với), ' },
                  { type: 'pill', content: 'do research' },
                  { type: 'text', content: ' (nghiên cứu), ' },
                  { type: 'pill', content: 'do a favor' },
                  { type: 'text', content: ' (giúp đỡ), ' },
                  { type: 'pill', content: 'do the cleaning / dishes' },
                  { type: 'text', content: ' (dọn dẹp).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'TAKE:' },
                  { type: 'text', content: ' ' },
                  { type: 'pill', content: 'take part in' },
                  { type: 'text', content: ' (tham gia = participate in), ' },
                  { type: 'pill', content: 'take care of' },
                  { type: 'text', content: ' (chăm sóc/xử lý), ' },
                  { type: 'pill', content: 'take notes' },
                  { type: 'text', content: ' (ghi chép), ' },
                  { type: 'pill', content: 'take an exam / test' },
                  { type: 'text', content: ' (làm bài thi).' }
                ]
              }
            ]
          },
          {
            blockNumber: '02',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: 'Tính từ + Danh từ (Adjective + Noun)',
            rows: [
              {
                segments: [
                  { type: 'pill', content: 'heavy rain' },
                  { type: 'text', content: ' (mưa lớn - KHÔNG dùng ' },
                  { type: 'pill', content: 'strong rain' },
                  { type: 'text', content: ' ), ' },
                  { type: 'pill', content: 'heavy traffic' },
                  { type: 'text', content: ' (giao thông đông đúc), ' },
                  { type: 'pill', content: 'smart clothes / suit' },
                  { type: 'text', content: ' (trang phục lịch sự), ' },
                  { type: 'pill', content: 'a hard worker' },
                  { type: 'text', content: ' (người làm việc chăm chỉ).' }
                ]
              }
            ]
          },
          {
            blockNumber: '03',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: 'Tính từ + Giới từ (Adjective + Preposition)',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'Cảm xúc:' },
                  { type: 'text', content: ' ' },
                  { type: 'pill', content: 'interested in' },
                  { type: 'text', content: ' (hứng thú/quan tâm), ' },
                  { type: 'pill', content: 'pleased with / satisfied with' },
                  { type: 'text', content: ' (hài lòng với), ' },
                  { type: 'pill', content: 'worried about' },
                  { type: 'text', content: ' (lo lắng về), ' },
                  { type: 'pill', content: 'excited about' },
                  { type: 'text', content: ' (hào hứng về).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Năng lực / Bản chất:' },
                  { type: 'text', content: ' ' },
                  { type: 'pill', content: 'good at / bad at' },
                  { type: 'text', content: ' (giỏi/dở về việc gì), ' },
                  { type: 'pill', content: 'famous for' },
                  { type: 'text', content: ' (nổi tiếng vì cái gì), ' },
                  { type: 'pill', content: 'different from' },
                  { type: 'text', content: ' (khác biệt so với), ' },
                  { type: 'pill', content: 'kind / nice to' },
                  { type: 'text', content: ' (tử tế với ai).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Quy tắc:' },
                  { type: 'text', content: ' Sau giới từ luôn là ' },
                  { type: 'badge', content: 'Danh từ' },
                  { type: 'text', content: ' hoặc động từ đuôi ' },
                  { type: 'badge', content: '-ing' },
                  { type: 'text', content: ' .' }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'lesson-18-2',
        lessonNumber: '18.2',
        title: 'Động từ đi kèm Giới từ (Verb + Preposition)',
        heroBadge: 'TRỌNG TÂM NGỮ PHÁP · BÀI GIẢNG CHI TIẾT',
        blocks: [
          {
            blockNumber: '01',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: 'Các cặp Động từ + Giới từ hay gặp nhất trong đề thi',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'Verb + FOR:' },
                  { type: 'text', content: ' ' },
                  { type: 'pill', content: 'apply for' },
                  { type: 'text', content: ' (ứng tuyển vị trí nào), ' },
                  { type: 'pill', content: 'look for' },
                  { type: 'text', content: ' (tìm kiếm), ' },
                  { type: 'pill', content: 'pay for' },
                  { type: 'text', content: ' (thanh toán cho), ' },
                  { type: 'pill', content: 'wait for' },
                  { type: 'text', content: ' (chờ đợi), ' },
                  { type: 'pill', content: 'work for' },
                  { type: 'text', content: ' (làm việc cho ai/công ty nào).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Verb + TO:' },
                  { type: 'text', content: ' ' },
                  { type: 'pill', content: 'speak / talk to' },
                  { type: 'text', content: ' (nói chuyện với), ' },
                  { type: 'pill', content: 'listen to' },
                  { type: 'text', content: ' (lắng nghe), ' },
                  { type: 'pill', content: 'belong to' },
                  { type: 'text', content: ' (thuộc về), ' },
                  { type: 'pill', content: 'explain to' },
                  { type: 'text', content: ' (giải thích cho ai).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Verb + ABOUT:' },
                  { type: 'text', content: ' ' },
                  { type: 'pill', content: 'complain about' },
                  { type: 'text', content: ' (phàn nàn về điều gì), ' },
                  { type: 'pill', content: 'talk / think about' },
                  { type: 'text', content: ' (thảo luận/nghĩ về).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Verb + ON / IN / AT / WITH:' },
                  { type: 'text', content: ' ' },
                  { type: 'pill', content: 'depend on' },
                  { type: 'text', content: ' (phụ thuộc vào), ' },
                  { type: 'pill', content: 'succeed in (+ V-ing)' },
                  { type: 'text', content: ' (thành công trong việc gì), ' },
                  { type: 'pill', content: 'arrive at' },
                  { type: 'text', content: ' (đến địa điểm tòa nhà/ga tàu), ' },
                  { type: 'pill', content: 'arrive in' },
                  { type: 'text', content: ' (đến thành phố/quốc gia), ' },
                  { type: 'pill', content: 'agree with' },
                  { type: 'text', content: ' (đồng ý với ai/điều gì).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Cấu trúc phối hợp:' },
                  { type: 'text', content: ' ' },
                  { type: 'pill', content: 'complain TO somebody ABOUT something' },
                  { type: 'text', content: ' (phàn nàn với ai về việc gì).' }
                ]
              }
            ]
          },
          {
            blockNumber: '02',
            type: 'highlight',
            badgeTitle: 'CẢNH BÁO BẪY ĐỀ THI',
            title: 'BẪY KINH ĐIỂN CẦN TRÁNH',
            rows: [
              {
                segments: [
                  { type: 'text', content: 'Động từ ' },
                  { type: 'badge', content: 'discuss' },
                  { type: 'text', content: ' là ngoại động từ ➔ Dùng trực tiếp ' },
                  { type: 'pill', content: 'discuss something' },
                  { type: 'text', content: ' ( ' },
                  { type: 'badge', content: 'TUYỆT ĐỐI KHÔNG dùng' },
                  { type: 'text', content: ' ' },
                  { type: 'pill', content: 'discuss about' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: 'Các động từ như ' },
                  { type: 'badge', content: 'call, phone, contact, answer, thank' },
                  { type: 'text', content: ' đi trực tiếp với tân ngữ ( ' },
                  { type: 'badge', content: 'KHÔNG dùng' },
                  { type: 'text', content: ' ' },
                  { type: 'pill', content: 'call to, contact to, answer to' },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'lesson-18-3',
        lessonNumber: '18.3',
        title: 'Động từ đi kèm Giới từ (Phần 2) - Phân loại theo ngữ cảnh và Cấu trúc Động từ + Tân ngữ + Giới từ',
        heroBadge: 'TRỌNG TÂM NGỮ PHÁP · BÀI GIẢNG CHI TIẾT',
        blocks: [
          {
            blockNumber: '01',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: 'Giới từ thay đổi theo loại Tân ngữ (Object)',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'ARRIVE:' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: '- ' },
                  { type: 'pill', content: 'arrive IN:' },
                  { type: 'text', content: ' Đi với thành phố, quốc gia (ví dụ: ' },
                  { type: 'pill', content: 'arrive in Singapore, arrive in England' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: '- ' },
                  { type: 'pill', content: 'arrive AT:' },
                  { type: 'text', content: ' Đi với địa điểm cụ thể như tòa nhà, sân bay, ga tàu, khách sạn (ví dụ: ' },
                  { type: 'pill', content: 'arrive at the airport, arrive at the station' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'PAY:' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: '- pay + người / hóa đơn (KHÔNG dùng giới từ): ' },
                  { type: 'pill', content: 'pay the waiter, pay the bill' },
                  { type: 'text', content: ' .' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: '- pay FOR + hàng hóa/dịch vụ: ' },
                  { type: 'pill', content: 'pay for the tickets, pay for dinner' },
                  { type: 'text', content: ' .' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'STAY:' },
                  { type: 'text', content: ' ' },
                  { type: 'pill', content: 'stay at/in + địa điểm' },
                  { type: 'text', content: ' (khách sạn...) vs. ' },
                  { type: 'pill', content: 'stay with + người' },
                  { type: 'text', content: ' .' }
                ]
              }
            ]
          },
          {
            blockNumber: '02',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: 'Cụm động từ thay đổi nghĩa theo Giới từ (Cụm với LOOK)',
            rows: [
              {
                segments: [
                  { type: 'pill', content: 'look at:' },
                  { type: 'text', content: ' nhìn vào đối tượng cụ thể ( ' },
                  { type: 'pill', content: 'look at the screen' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'pill', content: 'look for:' },
                  { type: 'text', content: ' tìm kiếm cái gì (= ' },
                  { type: 'pill', content: 'search for' },
                  { type: 'text', content: ' ) ( ' },
                  { type: 'pill', content: "look for Dr. Watson's office" },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'pill', content: 'look after:' },
                  { type: 'text', content: ' chăm sóc, trông nom, phụ trách (= ' },
                  { type: 'pill', content: 'take care of' },
                  { type: 'text', content: ' ) ( ' },
                  { type: 'pill', content: 'look after client accounts' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'pill', content: 'look like:' },
                  { type: 'text', content: ' trông giống như ai/cái gì.' }
                ]
              }
            ]
          },
          {
            blockNumber: '03',
            type: 'rule',
            badgeTitle: 'CÔNG THỨC & QUY TẮC',
            title: 'Cấu trúc Động từ + Tân ngữ + Giới từ (Verb + Object + Preposition)',
            rows: [
              {
                segments: [
                  { type: 'pill', content: 'thank somebody FOR something:' },
                  { type: 'text', content: ' cảm ơn ai vì điều gì.' }
                ]
              },
              {
                segments: [
                  { type: 'pill', content: 'ask somebody FOR something:' },
                  { type: 'text', content: ' xin / yêu cầu ai điều gì.' }
                ]
              },
              {
                segments: [
                  { type: 'pill', content: 'invite somebody TO something:' },
                  { type: 'text', content: ' mời ai đến sự kiện/địa điểm nào.' }
                ]
              },
              {
                segments: [
                  { type: 'pill', content: 'tell somebody ABOUT something:' },
                  { type: 'text', content: ' nói/kể với ai về chuyện gì.' }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'lesson-18-4',
        lessonNumber: '18.4',
        title: 'Cụm động từ (Phrasal Verbs)',
        heroBadge: 'TRỌNG TÂM NGỮ PHÁP · BÀI GIẢNG CHI TIẾT',
        blocks: [
          {
            blockNumber: '01',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: 'Các Cụm động từ có Tân ngữ phổ biến trong đề thi',
            rows: [
              {
                segments: [
                  { type: 'pill', content: 'fill in / fill out:' },
                  { type: 'text', content: ' điền vào biểu mẫu, đơn từ ( ' },
                  { type: 'pill', content: 'fill in the application form' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'pill', content: 'find out:' },
                  { type: 'text', content: ' tìm ra, khám phá thông tin ( ' },
                  { type: 'pill', content: 'find out the facts' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'pill', content: 'look up:' },
                  { type: 'text', content: ' tra cứu (từ điển, danh bạ, tài liệu) ( ' },
                  { type: 'pill', content: 'look up the phone number' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'pill', content: 'pick somebody up:' },
                  { type: 'text', content: ' đón ai đó ( ' },
                  { type: 'pill', content: 'pick the client up at the station' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'pill', content: 'turn on / turn off:' },
                  { type: 'text', content: ' bật / tắt thiết bị điện tử.' }
                ]
              },
              {
                segments: [
                  { type: 'pill', content: 'turn down:' },
                  { type: 'text', content: ' giảm âm lượng hoặc từ chối đề xuất/lời mời.' }
                ]
              },
              {
                segments: [
                  { type: 'pill', content: 'write down:' },
                  { type: 'text', content: ' ghi chép lại thông tin ra giấy ( ' },
                  { type: 'pill', content: 'write down the message' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'pill', content: 'give up:' },
                  { type: 'text', content: ' từ bỏ một thói quen hoặc công việc.' }
                ]
              },
              {
                segments: [
                  { type: 'pill', content: 'bring / give back:' },
                  { type: 'text', content: ' hoàn trả lại đồ vật.' }
                ]
              }
            ]
          },
          {
            blockNumber: '02',
            type: 'highlight',
            badgeTitle: 'CẢNH BÁO BẪY ĐỀ THI',
            title: 'QUY TẮC VỊ TRÍ ĐẠI TỪ TÂN NGỮ (BẪY CẦN NHỚ)',
            rows: [
              {
                segments: [
                  { type: 'text', content: 'Nếu tân ngữ là ' },
                  { type: 'badge', content: 'Danh từ' },
                  { type: 'text', content: ' , có thể đứng sau hoặc đứng giữa cụm động từ (ví dụ: turn on the lights HOẶC turn the lights on ).' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: 'Nếu tân ngữ là ' },
                  { type: 'badge', content: 'Đại từ nhân xưng (it, them, him, her, me, us)' },
                  { type: 'text', content: ' , đại từ ' },
                  { type: 'badge', content: 'BẮT BUỘC phải đứng ở GIỮA' },
                  { type: 'text', content: ' động từ và tiểu từ.' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Ví dụ:' },
                  { type: 'text', content: ' ' },
                  { type: 'badge', content: 'turn it off' },
                  { type: 'text', content: ' (ĐÚNG) - turn off it (SAI); ' },
                  { type: 'badge', content: 'pick them up' },
                  { type: 'text', content: ' (ĐÚNG) - pick up them (SAI).' }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'lesson-18-5',
        lessonNumber: '18.5',
        title: 'Các cặp Động từ dễ gây nhầm lẫn (Confusing Verbs)',
        heroBadge: 'TRỌNG TÂM NGỮ PHÁP · BÀI GIẢNG CHI TIẾT',
        blocks: [
          {
            blockNumber: '01',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: '1. Phân biệt BRING / COME và TAKE / GO',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'Bring / Come:' },
                  { type: 'text', content: ' Di chuyển ' },
                  { type: 'badge', content: 'hướng về phía người nói' },
                  { type: 'text', content: ' hoặc ' },
                  { type: 'badge', content: 'đi cùng với người nói' },
                  { type: 'text', content: ' (ví dụ: ' },
                  { type: 'pill', content: 'Please bring the documents to my desk; Are you coming to lunch with us?' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Take / Go:' },
                  { type: 'text', content: ' Di chuyển ' },
                  { type: 'badge', content: 'rời xa người nói' },
                  { type: 'text', content: ' hoặc ' },
                  { type: 'badge', content: 'đi mà không có người nói' },
                  { type: 'text', content: ' (ví dụ: ' },
                  { type: 'pill', content: 'Please take these boxes to the warehouse; Are you going to the conference alone?' },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          },
          {
            blockNumber: '02',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: '2. Phân biệt LIVE và STAY',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'Live:' },
                  { type: 'text', content: ' Chỉ sự sinh sống mang tính chất ' },
                  { type: 'badge', content: 'lâu dài, ổn định, định cư' },
                  { type: 'text', content: ' (ví dụ: ' },
                  { type: 'pill', content: 'He has lived in Tokyo for ten years' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Stay:' },
                  { type: 'text', content: ' Chỉ sự lưu trú mang tính chất ' },
                  { type: 'badge', content: 'tạm thời, ngắn hạn' },
                  { type: 'text', content: ' (như đi công tác, du lịch, ở khách sạn) (ví dụ: ' },
                  { type: 'pill', content: 'stay at a hotel during the business trip' },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          },
          {
            blockNumber: '03',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: '3. Phân biệt DO THE + V-ing và GO + V-ing',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'Do the + V-ing:' },
                  { type: 'text', content: ' Dùng cho công việc nhiệm vụ, dọn dẹp, nội trợ ( ' },
                  { type: 'pill', content: 'do the cleaning, do the cooking, do the shopping' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Go + V-ing:' },
                  { type: 'text', content: ' Dùng cho các hoạt động thể thao, giải trí, ngoài trời ( ' },
                  { type: 'pill', content: 'go hiking, go swimming, go camping' },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'lesson-18-6',
        lessonNumber: '18.6',
        title: 'Phân biệt Make - Do và Have - Take',
        heroBadge: 'TRỌNG TÂM NGỮ PHÁP · BÀI GIẢNG CHI TIẾT',
        blocks: [
          {
            blockNumber: '01',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: '1. Phân biệt MAKE và DO',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'MAKE (Tạo ra cái mới, sản xuất, lên kế hoạch, sắp xếp):' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: '- Kế hoạch / Lịch hẹn / Ý tưởng: ' },
                  { type: 'pill', content: 'make an appointment' },
                  { type: 'text', content: ' (hẹn gặp), ' },
                  { type: 'pill', content: 'make an arrangement' },
                  { type: 'text', content: ' (sắp xếp), ' },
                  { type: 'pill', content: 'make a decision' },
                  { type: 'text', content: ' (ra quyết định), ' },
                  { type: 'pill', content: 'make a suggestion / plan' },
                  { type: 'text', content: ' (đưa ra gợi ý/kế hoạch).' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: '- Thao tác / Giao tiếp: ' },
                  { type: 'pill', content: 'make a copy' },
                  { type: 'text', content: ' (sao chép tài liệu), ' },
                  { type: 'pill', content: 'make a phone call' },
                  { type: 'text', content: ' (gọi điện thoại), ' },
                  { type: 'pill', content: 'make a mistake' },
                  { type: 'text', content: ' (phạm sai lầm).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'DO (Nhiệm vụ, công việc thực hiện, báo cáo, nghiên cứu):' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: ' ' },
                  { type: 'pill', content: 'do a report / paper' },
                  { type: 'text', content: ' (làm báo cáo), ' },
                  { type: 'pill', content: 'do research' },
                  { type: 'text', content: ' (nghiên cứu), ' },
                  { type: 'pill', content: 'do business with' },
                  { type: 'text', content: ' (hợp tác kinh doanh), ' },
                  { type: 'pill', content: 'do an exercise / test' },
                  { type: 'text', content: ' (làm bài kiểm tra), ' },
                  { type: 'pill', content: 'do the cleaning' },
                  { type: 'text', content: ' (dọn dẹp).' }
                ]
              }
            ]
          },
          {
            blockNumber: '02',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: '2. Phân biệt HAVE và TAKE',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'Dùng được cả HAVE hoặc TAKE (Nghĩa tương đương):' },
                  { type: 'text', content: ' ' },
                  { type: 'pill', content: 'have / take a break' },
                  { type: 'text', content: ' (nghỉ giải lao), ' },
                  { type: 'pill', content: 'have / take a seat' },
                  { type: 'text', content: ' (ngồi xuống), ' },
                  { type: 'pill', content: 'have / take a rest / vacation' },
                  { type: 'text', content: ' .' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'CHỈ DÙNG VỚI TAKE:' },
                  { type: 'text', content: ' ' },
                  { type: 'pill', content: 'take a message' },
                  { type: 'text', content: ' (ghi lại lời nhắn), ' },
                  { type: 'pill', content: 'take notes' },
                  { type: 'text', content: ' (ghi chép), ' },
                  { type: 'pill', content: 'take care of' },
                  { type: 'text', content: ' (chăm sóc/xử lý việc), ' },
                  { type: 'pill', content: 'take part in' },
                  { type: 'text', content: ' (tham gia), ' },
                  { type: 'pill', content: 'take photos' },
                  { type: 'text', content: ' (chụp ảnh), ' },
                  { type: 'pill', content: 'take + [khoảng thời gian]' },
                  { type: 'text', content: ' (mất bao lâu: ' },
                  { type: 'pill', content: 'It takes three days' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'CHỈ DÙNG VỚI HAVE:' },
                  { type: 'text', content: ' ' },
                  { type: 'pill', content: 'have a meeting' },
                  { type: 'text', content: ' (tổ chức cuộc họp), ' },
                  { type: 'pill', content: 'have breakfast/lunch' },
                  { type: 'text', content: ' (dùng bữa).' }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'topic-19',
    topicNumber: '19',
    title: 'Cấu tạo từ',
    lessonCount: 3,
    lessons: [
      {
        id: 'lesson-19-1',
        lessonNumber: '19.1',
        title: 'Cấu tạo Danh từ (Forming Nouns / Suffixes)',
        heroBadge: 'TRỌNG TÂM NGỮ PHÁP · BÀI GIẢNG CHI TIẾT',
        blocks: [
          {
            blockNumber: '01',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: 'Hậu tố Danh từ chỉ Người và Nghề nghiệp',
            rows: [
              {
                segments: [
                  { type: 'badge', content: '-er / -or:' },
                  { type: 'text', content: ' ' },
                  { type: 'pill', content: 'manager, supervisor, instructor, director, visitor, employer' },
                  { type: 'text', content: ' .' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: '-ant / -ent:' },
                  { type: 'text', content: ' ' },
                  { type: 'pill', content: 'assistant, applicant, accountant, student, resident' },
                  { type: 'text', content: ' .' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: '-ist:' },
                  { type: 'text', content: ' ' },
                  { type: 'pill', content: 'specialist, receptionist, journalist, artist' },
                  { type: 'text', content: ' .' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Lưu ý:' },
                  { type: 'text', content: ' Một số từ tận cùng là ' },
                  { type: 'pill', content: '-er' },
                  { type: 'text', content: ' nhưng chỉ đồ vật: ' },
                  { type: 'pill', content: 'photocopier' },
                  { type: 'text', content: ' (máy photocopy), ' },
                  { type: 'pill', content: 'cooker' },
                  { type: 'text', content: ' (bếp nấu).' }
                ]
              }
            ]
          },
          {
            blockNumber: '02',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: 'Hậu tố Danh từ tạo từ Động từ (Chỉ hành động / Khái niệm)',
            rows: [
              {
                segments: [
                  { type: 'badge', content: '-ment:' },
                  { type: 'text', content: ' ' },
                  { type: 'pill', content: 'agreement, development, management, payment, movement, government' },
                  { type: 'text', content: ' .' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: '-(t)ion / -ation / -sion:' },
                  { type: 'text', content: ' ' },
                  { type: 'pill', content: 'decision, discussion, production, information, invitation, communication, education' },
                  { type: 'text', content: ' .' }
                ]
              }
            ]
          },
          {
            blockNumber: '03',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: 'Hậu tố Danh từ tạo từ Tính từ (Chỉ tính chất / Trạng thái)',
            rows: [
              {
                segments: [
                  { type: 'badge', content: '-ness:' },
                  { type: 'text', content: ' ' },
                  { type: 'pill', content: 'illness, darkness, happiness, awareness' },
                  { type: 'text', content: ' .' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: '-ity:' },
                  { type: 'text', content: ' ' },
                  { type: 'pill', content: 'ability, activity, nationality, responsibility, availability' },
                  { type: 'text', content: ' .' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: '-ance / -ence:' },
                  { type: 'text', content: ' ' },
                  { type: 'pill', content: 'importance, distance, difference, experience, attendance, independence' },
                  { type: 'text', content: ' .' }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'lesson-19-2',
        lessonNumber: '19.2',
        title: 'Cấu tạo Tính từ (Forming Adjectives / Suffixes & Prefixes)',
        heroBadge: 'TRỌNG TÂM NGỮ PHÁP · BÀI GIẢNG CHI TIẾT',
        blocks: [
          {
            blockNumber: '01',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: 'Các Hậu tố (Suffixes) cấu tạo Tính từ thường gặp',
            rows: [
              {
                segments: [
                  { type: 'badge', content: '-ful / -less:' },
                  { type: 'text', content: ' ' },
                  { type: 'pill', content: 'useful' },
                  { type: 'text', content: ' (hữu ích) ↔ ' },
                  { type: 'pill', content: 'useless' },
                  { type: 'text', content: ' (vô dụng), ' },
                  { type: 'pill', content: 'careful' },
                  { type: 'text', content: ' (cẩn thận) ↔ ' },
                  { type: 'pill', content: 'careless' },
                  { type: 'text', content: ' (bất cẩn), ' },
                  { type: 'pill', content: 'helpful, painful' },
                  { type: 'text', content: ' .' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: '-able / -ible:' },
                  { type: 'text', content: ' ' },
                  { type: 'pill', content: 'comfortable, fashionable, reliable, suitable, flexible' },
                  { type: 'text', content: ' .' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: '-ive:' },
                  { type: 'text', content: ' ' },
                  { type: 'pill', content: 'active, attractive, expensive, competitive, effective, productive' },
                  { type: 'text', content: ' .' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: '-al:' },
                  { type: 'text', content: ' ' },
                  { type: 'pill', content: 'central, musical, national, professional, financial, traditional' },
                  { type: 'text', content: ' .' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: '-ous:' },
                  { type: 'text', content: ' ' },
                  { type: 'pill', content: 'famous, dangerous, continuous, ambitious' },
                  { type: 'text', content: ' .' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: '-y:' },
                  { type: 'text', content: ' ' },
                  { type: 'pill', content: 'healthy, rainy, windy, wealthy, dirty' },
                  { type: 'text', content: ' .' }
                ]
              }
            ]
          },
          {
            blockNumber: '02',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: 'Tiền tố (Prefixes) mang nghĩa phủ định (Không... / Trái ngược)',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'un-:' },
                  { type: 'text', content: ' ' },
                  { type: 'pill', content: 'uncomfortable, unhappy, unhealthy, unhelpful, unusual, unavailable' },
                  { type: 'text', content: ' .' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'in-:' },
                  { type: 'text', content: ' ' },
                  { type: 'pill', content: 'incomplete, incorrect, inexpensive, informal, inefficient' },
                  { type: 'text', content: ' .' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'im- (đặc biệt đứng trước âm /p/ hoặc /m/):' },
                  { type: 'text', content: ' ' },
                  { type: 'pill', content: 'impossible, impolite, impatient, imperfect' },
                  { type: 'text', content: ' .' }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'lesson-19-3',
        lessonNumber: '19.3',
        title: 'Danh từ ghép và Tính từ ghép (Compound Nouns & Compound Adjectives)',
        heroBadge: 'TRỌNG TÂM NGỮ PHÁP · BÀI GIẢNG CHI TIẾT',
        blocks: [
          {
            blockNumber: '01',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: 'Danh từ ghép (Compound Nouns)',
            rows: [
              {
                segments: [
                  { type: 'text', content: 'Được tạo thành từ hai hay nhiều từ kết hợp lại để chỉ một khái niệm/đối tượng hoàn chỉnh.' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Các mô hình thường gặp:' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: '- Danh từ + Danh từ: ' },
                  { type: 'pill', content: 'credit card' },
                  { type: 'text', content: ' (thẻ tín dụng), ' },
                  { type: 'pill', content: 'customer service' },
                  { type: 'text', content: ' (dịch vụ khách hàng), ' },
                  { type: 'pill', content: 'traffic jam' },
                  { type: 'text', content: ' (kẹt xe), ' },
                  { type: 'pill', content: 'furniture shop' },
                  { type: 'text', content: ' .' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: '- V-ing + Danh từ: ' },
                  { type: 'pill', content: 'boarding pass' },
                  { type: 'text', content: ' (thẻ lên máy bay), ' },
                  { type: 'pill', content: 'shopping centre' },
                  { type: 'text', content: ' , ' },
                  { type: 'pill', content: 'swimming pool' },
                  { type: 'text', content: ' , ' },
                  { type: 'pill', content: 'dining room' },
                  { type: 'text', content: ' .' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: '- Danh từ + Danh từ chỉ người (-er): ' },
                  { type: 'pill', content: 'taxi driver' },
                  { type: 'text', content: ' , ' },
                  { type: 'pill', content: 'dishwasher' },
                  { type: 'text', content: ' .' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Quy tắc quan trọng:' },
                  { type: 'text', content: ' Danh từ đứng trước đóng vai trò như một từ bổ nghĩa nên thường ở dạng ' },
                  { type: 'badge', content: 'SỐ ÍT' },
                  { type: 'text', content: ' (ví dụ: dùng ' },
                  { type: 'pill', content: 'car park' },
                  { type: 'text', content: ' , ' },
                  { type: 'pill', content: 'customer service' },
                  { type: 'text', content: ' ; không dùng *customers service).' }
                ]
              }
            ]
          },
          {
            blockNumber: '02',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: 'Tính từ ghép (Compound Adjectives)',
            rows: [
              {
                segments: [
                  { type: 'text', content: 'Thường có ' },
                  { type: 'badge', content: 'dấu gạch nối (-)' },
                  { type: 'text', content: ' khi đứng trước danh từ để bổ nghĩa.' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Các mô hình thường gặp:' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: '- Số đếm/Đo lường + Danh từ: ' },
                  { type: 'pill', content: 'a two-day workshop' },
                  { type: 'text', content: ' (hội thảo 2 ngày), ' },
                  { type: 'pill', content: 'a three-hour exam' },
                  { type: 'text', content: ' , ' },
                  { type: 'pill', content: 'a 50-dollar voucher' },
                  { type: 'text', content: ' .' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: '- Tính từ + Danh từ: ' },
                  { type: 'pill', content: 'high-quality products' },
                  { type: 'text', content: ' , ' },
                  { type: 'pill', content: 'high-speed train' },
                  { type: 'text', content: ' , ' },
                  { type: 'pill', content: 'full-time job' },
                  { type: 'text', content: ' .' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: '- Trạng từ + Quá khứ phân từ (V3/V-ed): ' },
                  { type: 'pill', content: 'well-known author' },
                  { type: 'text', content: ' , ' },
                  { type: 'pill', content: 'well-paid position' },
                  { type: 'text', content: ' .' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'BẪY KINH ĐIỂN:' },
                  { type: 'text', content: ' Danh từ nằm trong cụm tính từ ghép đo lường ' },
                  { type: 'badge', content: 'LUÔN Ở DẠNG SỐ ÍT' },
                  { type: 'text', content: ' , tuyệt đối không thêm ' },
                  { type: 'pill', content: '-s' },
                  { type: 'text', content: ' (ví dụ: dùng ' },
                  { type: 'pill', content: 'a three-hour meeting' },
                  { type: 'text', content: ' , KHÔNG dùng *a three-hours meeting).' }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'topic-20',
    topicNumber: '20',
    title: 'Văn phạm giao tiếp',
    lessonCount: 3,
    lessons: [
      {
        id: 'lesson-20-1',
        lessonNumber: '20.1',
        title: 'Câu hỏi đuôi (Question Tags)',
        heroBadge: 'TRỌNG TÂM NGỮ PHÁP · BÀI GIẢNG CHI TIẾT',
        blocks: [
          {
            blockNumber: '01',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: 'Nguyên tắc Trái dấu (Khẳng định ↔ Phủ định)',
            rows: [
              {
                segments: [
                  { type: 'text', content: 'Mệnh đề chính ' },
                  { type: 'badge', content: 'Khẳng định (+)' },
                  { type: 'text', content: ' ➔ Phần đuôi ' },
                  { type: 'badge', content: 'Phủ định (-)' },
                  { type: 'text', content: ' (ví dụ: The report is ready, ' },
                  { type: 'badge', content: "isn't it" },
                  { type: 'text', content: ' ?; Cats eat meat, ' },
                  { type: 'badge', content: "don't they" },
                  { type: 'text', content: ' ? ).' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: 'Mệnh đề chính ' },
                  { type: 'badge', content: 'Phủ định (-)' },
                  { type: 'text', content: ' ➔ Phần đuôi ' },
                  { type: 'badge', content: 'Khẳng định (+)' },
                  { type: 'text', content: ' (ví dụ: He didn\'t call, ' },
                  { type: 'badge', content: 'did he' },
                  { type: 'text', content: ' ?; Mr. Connors doesn\'t work here, ' },
                  { type: 'badge', content: 'does he' },
                  { type: 'text', content: ' ? ).' }
                ]
              }
            ]
          },
          {
            blockNumber: '02',
            type: 'rule',
            badgeTitle: 'CÔNG THỨC & QUY TẮC',
            title: 'Quy tắc hòa hợp Thì và Trợ động từ',
            rows: [
              {
                segments: [
                  { type: 'text', content: 'Phần đuôi phải sử dụng đúng trợ động từ tương ứng với thì của mệnh đề chính ( ' },
                  { type: 'pill', content: 'do/does/did, am/is/are/was/were, have/has, will, can, should...' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: 'Chủ ngữ ở phần đuôi ' },
                  { type: 'badge', content: 'bắt buộc là đại từ nhân xưng' },
                  { type: 'text', content: ' ( ' },
                  { type: 'pill', content: 'I, you, he, she, it, we, they' },
                  { type: 'text', content: ' ) hoặc đại từ ' },
                  { type: 'pill', content: 'there' },
                  { type: 'text', content: ' .' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: 'Phần đuôi ở thể phủ định luôn luôn phải viết ở ' },
                  { type: 'badge', content: 'dạng rút gọn' },
                  { type: 'text', content: ' ( ' },
                  { type: 'pill', content: "isn't, aren't, don't, didn't, won't, can't..." },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          },
          {
            blockNumber: '03',
            type: 'rule',
            badgeTitle: 'BẮT QUY TẮC CẦN NHỚ',
            title: 'Các trường hợp đặc biệt trong đề thi',
            rows: [
              {
                segments: [
                  { type: 'pill', content: 'I am...' },
                  { type: 'text', content: ' ➔ Phần đuôi là ' },
                  { type: 'badge', content: "aren't I?" },
                  { type: 'text', content: ' (tuyệt đối không dùng *amn\'t I).' }
                ]
              },
              {
                segments: [
                  { type: 'pill', content: 'There is / There are...' },
                  { type: 'text', content: ' ➔ Phần đuôi giữ nguyên ' },
                  { type: 'badge', content: 'there' },
                  { type: 'text', content: ' ( ' },
                  { type: 'pill', content: "isn't there? / aren't there?" },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'lesson-20-2',
        lessonNumber: '20.2',
        title: 'Cấu trúc đồng tình với Too, So, Either và Neither',
        heroBadge: 'TRỌNG TÂM NGỮ PHÁP · BÀI GIẢNG CHI TIẾT',
        blocks: [
          {
            blockNumber: '01',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: 'Đồng tình với câu Khẳng định (+): "Ai đó cũng làm vậy / cũng như thế"',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'Dùng TOO (đứng ở cuối câu):' },
                  { type: 'text', content: ' ' },
                  { type: 'pill', content: 'S + Trợ động từ (+), TOO' },
                  { type: 'text', content: ' (ví dụ: ' },
                  { type: 'pill', content: "I'm cold ➔ I am, too" },
                  { type: 'text', content: ' ; ' },
                  { type: 'pill', content: 'Sophie passed ➔ Nat did, too' },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Dùng SO (đảo ngữ, đứng đầu câu):' },
                  { type: 'text', content: ' ' },
                  { type: 'pill', content: 'SO + Trợ động từ (+) + S' },
                  { type: 'text', content: ' (ví dụ: ' },
                  { type: 'pill', content: "I'm cold ➔ So am I" },
                  { type: 'text', content: ' ; ' },
                  { type: 'pill', content: 'We love skiing ➔ So do we' },
                  { type: 'text', content: ' ; ' },
                  { type: 'pill', content: 'He went there ➔ So did she' },
                  { type: 'text', content: ' ; ' },
                  { type: 'pill', content: "I've got an offer ➔ So have I" },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          },
          {
            blockNumber: '02',
            type: 'highlight',
            badgeTitle: 'ĐIỂM NHẤN KIẾN THỨC',
            title: 'Đồng tình với câu Phủ định (-): "Ai đó cũng không..."',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'Dùng EITHER (đứng ở cuối câu phủ định):' },
                  { type: 'text', content: ' ' },
                  { type: 'pill', content: 'S + Trợ động từ (-) + EITHER' },
                  { type: 'text', content: ' (ví dụ: ' },
                  { type: 'pill', content: "I'm not leaving ➔ I'm not either" },
                  { type: 'text', content: ' ; ' },
                  { type: 'pill', content: "Mum doesn't like it ➔ I don't either" },
                  { type: 'text', content: ' ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Dùng NEITHER (đảo ngữ, đứng đầu câu):' },
                  { type: 'text', content: ' ' },
                  { type: 'pill', content: 'NEITHER + Trợ động từ (+) + S' },
                  { type: 'text', content: ' (ví dụ: ' },
                  { type: 'pill', content: "I don't like it ➔ Neither do I" },
                  { type: 'text', content: ' ; ' },
                  { type: 'pill', content: "She can't swim ➔ Neither can he" },
                  { type: 'text', content: ' ; ' },
                  { type: 'pill', content: "We've never been ➔ Neither have we" },
                  { type: 'text', content: ' ).' }
                ]
              }
            ]
          },
          {
            blockNumber: '03',
            type: 'highlight',
            badgeTitle: 'CẢNH BÁO BẪY ĐỀ THI',
            title: 'BẪY CẦN TRÁNH',
            rows: [
              {
                segments: [
                  { type: 'text', content: 'Sau ' },
                  { type: 'pill', content: 'So' },
                  { type: 'text', content: ' và ' },
                  { type: 'pill', content: 'Neither' },
                  { type: 'text', content: ' bắt buộc phải ' },
                  { type: 'badge', content: 'đảo trợ động từ lên trước chủ ngữ' },
                  { type: 'text', content: ' (dùng ' },
                  { type: 'pill', content: 'So did I' },
                  { type: 'text', content: ' , KHÔNG dùng "So I did").' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: 'Sau ' },
                  { type: 'pill', content: 'Neither' },
                  { type: 'text', content: ' , trợ động từ phải ở dạng ' },
                  { type: 'badge', content: 'khẳng định' },
                  { type: 'text', content: ' vì ' },
                  { type: 'pill', content: 'Neither' },
                  { type: 'text', content: ' đã mang nghĩa phủ định (dùng ' },
                  { type: 'pill', content: 'Neither do I' },
                  { type: 'text', content: ' , KHÔNG dùng "Neither don\'t I").' }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'lesson-20-3',
        lessonNumber: '20.3',
        title: 'Câu cảm thán và Cách biểu đạt cảm xúc (Expressing surprise, shock, pleasure...)',
        heroBadge: 'TRỌNG TÂM NGỮ PHÁP · BÀI GIẢNG CHI TIẾT',
        blocks: [
          {
            blockNumber: '01',
            type: 'rule',
            badgeTitle: 'CÔNG THỨC & QUY TẮC',
            title: 'Cấu trúc Cảm thán với HOW và THAT\'S',
            rows: [
              {
                segments: [
                  { type: 'badge', content: "HOW + Tính từ!" },
                  { type: 'text', content: ' hoặc ' },
                  { type: 'badge', content: "THAT'S + Tính từ!" },
                  { type: 'text', content: ' (Chỉ đi với tính từ đứng một mình, không có danh từ theo sau).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Tích cực (Khen ngợi, vui mừng):' },
                  { type: 'text', content: ' ' },
                  { type: 'pill', content: "That's wonderful! / That's fantastic! / That's great! / How amazing!" }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Tiêu cực (Chia buồn, khó chịu):' },
                  { type: 'text', content: ' ' },
                  { type: 'pill', content: "That's awful! / That's terrible! / That's horrible! / How strange! / How unfortunate!" }
                ]
              }
            ]
          },
          {
            blockNumber: '02',
            type: 'rule',
            badgeTitle: 'CÔNG THỨC & QUY TẮC',
            title: 'Cấu trúc Cảm thán với WHAT',
            rows: [
              {
                segments: [
                  { type: 'badge', content: 'WHAT + a / an (+ Tính từ) + DANH TỪ đếm được số ít!' },
                  { type: 'text', content: ' (Bắt buộc phải có danh từ).' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Tích cực:' },
                  { type: 'text', content: ' ' },
                  { type: 'pill', content: 'What a (lovely) surprise! / What a (fantastic) idea! / What a wonderful day!' }
                ]
              },
              {
                segments: [
                  { type: 'badge', content: 'Tiêu cực:' },
                  { type: 'text', content: ' ' },
                  { type: 'pill', content: 'What a pity!' },
                  { type: 'text', content: ' (Thật đáng tiếc!), ' },
                  { type: 'pill', content: 'What a shame! / What a pain! / What a waste of time / money!' }
                ]
              }
            ]
          },
          {
            blockNumber: '03',
            type: 'highlight',
            badgeTitle: 'CẢNH BÁO BẪY ĐỀ THI',
            title: 'BẪY KINH ĐIỂN CẦN LƯU Ý',
            rows: [
              {
                segments: [
                  { type: 'text', content: 'Sau ' },
                  { type: 'pill', content: 'What' },
                  { type: 'text', content: ' bắt buộc phải có ' },
                  { type: 'badge', content: 'danh từ' },
                  { type: 'text', content: ' ( ' },
                  { type: 'pill', content: 'What a fantastic plan!' },
                  { type: 'text', content: ' ). Tuyệt đối ' },
                  { type: 'badge', content: 'KHÔNG' },
                  { type: 'text', content: ' dùng ' },
                  { type: 'pill', content: 'What + tính từ đứng một mình' },
                  { type: 'text', content: ' (dùng ' },
                  { type: 'pill', content: 'How fantastic!' },
                  { type: 'text', content: ' hoặc ' },
                  { type: 'pill', content: "That's fantastic!" },
                  { type: 'text', content: ' , KHÔNG dùng "What fantastic!").' }
                ]
              },
              {
                segments: [
                  { type: 'text', content: 'Từ cảm thán ' },
                  { type: 'badge', content: 'Wow!' },
                  { type: 'text', content: ' chỉ dùng khi đón nhận tin tốt hoặc khen ngợi; không dùng ' },
                  { type: 'pill', content: 'Wow!' },
                  { type: 'text', content: ' cho tin buồn hay tai nạn.' }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
];

export const ENGLISH_10_GRAMMAR_TOPICS = ENGLISH_GRAMMAR_TOPICS;
