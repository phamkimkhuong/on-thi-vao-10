import type { TheoryBlock } from '@/data/schema';

type Choice = 'A' | 'B' | 'C' | 'D';
const sourceIds = ['eng11-source-official-program', 'eng11-source-global-success-textbook'];
const block = (
  kind: string, lesson: string, title: string, objectives: string[], paragraphs: string[],
  keyPoints: string[], example: [string, string, string[], string],
  checks: Array<[string, [string, string, string, string], Choice, string]>,
  orderIndex: number, formulas: TheoryBlock['formulas'] = []
): TheoryBlock => ({
  id: `eng11-theory-u6-${kind}`, courseId: 'grade11:english', moduleId: 'eng11-m6',
  lessonIds: kind === 'vocabulary'
    ? ['eng11-u6-getting-started', 'eng11-u6-language']
    : [`eng11-u6-${lesson}`], outcomeIds: [`eng11-out-u6-${kind}`],
  questionTypeIds: [`eng11-qt-u6-${kind}`], sourceIds, title, objectives,
  content: paragraphs.join('\n\n'), formulas, keyPoints,
  workedExamples: [{ id: `eng11-ex-u6-${kind}`, title: example[0], problem: example[1], steps: example[2], answer: example[3] }],
  checkpoints: checks.map((item, index) => ({
    id: `eng11-cp-u6-${kind}-${index + 1}`, question: item[0],
    options: item[1], correctAnswer: item[2], explanation: item[3]
  })),
  orderIndex, reviewStatus: 'source_checked'
});

export const g11EnglishModule6Theory: TheoryBlock[] = [
  block('pronunciation', 'language', 'Intonation in statements, commands and lists',
    ['Nhận biết falling intonation phổ biến.', 'Nhận biết rising intonation ở mục chưa cuối của danh sách.'],
    [
      'Statements hoàn chỉnh và commands trung tính thường kết thúc bằng falling intonation, cho thấy ý đã khép lại: “The site closes at five.” hoặc “Please keep off the wall.” Sắc thái vẫn phụ thuộc ngữ cảnh và thái độ.',
      'Trong danh sách, các mục chưa cuối thường có rising intonation để báo hiệu còn thông tin; mục cuối thường xuống giọng: “maps, tools, and photographs.”',
      'Ngữ điệu không phải quy tắc cơ học tuyệt đối. Rising tone có thể biểu thị chưa chắc chắn hoặc lời nhắc tiếp tục; trọng tâm bài web là nhận biết ý nghĩa cơ bản, không chấm phát âm.'
    ],
    ['Statement/command hoàn chỉnh thường xuống giọng.', 'Mục chưa cuối trong list thường lên.', 'Mục cuối thường xuống.'],
    ['Đọc danh sách', 'How does the voice usually move in “drums, masks, and costumes”?', ['Hai mục đầu báo hiệu còn tiếp.', 'Mục cuối khép danh sách.'], 'rise, rise, fall'],
    [
      ['Một statement trung tính thường kết thúc:', ['falling', 'rising forever', 'without sound', 'with every word rising'], 'A', 'Falling tone thường báo hiệu ý hoàn chỉnh.'],
      ['Mục cuối của danh sách thường:', ['rise', 'fall', 'disappear', 'be whispered'], 'B', 'Falling tone thường khép danh sách.']
    ], 1),
  block('vocabulary', 'language', 'Vocabulary: heritage values, threats and preservation',
    ['Phân biệt tangible và intangible heritage.', 'Dùng đúng collocation bảo tồn.'],
    [
      'Tangible heritage gồm công trình, hiện vật và cảnh quan vật chất; intangible cultural heritage gồm kỹ năng, tri thức, nghi lễ, nghệ thuật trình diễn và truyền thống sống được cộng đồng công nhận.',
      'Conservation thường nhấn mạnh chăm sóc và quản lý để duy trì giá trị; restoration là can thiệp đưa một phần về trạng thái được xác định; safeguarding thường dùng rộng cho bảo vệ di sản phi vật thể và điều kiện truyền truyền.',
      'Collocation trọng tâm gồm preserve cultural heritage, restore a historic building, pass down knowledge, raise awareness, document oral traditions, protect a site from damage và involve local communities.'
    ],
    ['tangible/intangible heritage', 'preserve/restoration/safeguard', 'pass down knowledge', 'community involvement'],
    ['Phân loại di sản', 'A traditional weaving skill is tangible or intangible heritage?', ['Đây là kỹ năng và tri thức sống.', 'Nó được truyền giữa các thế hệ.'], 'intangible heritage'],
    [
      ['Cụm nào đúng?', ['preserve heritage', 'do heritage', 'make tradition down', 'take restoration'], 'A', 'Preserve heritage là collocation chuẩn.'],
      ['Pass down nghĩa là:', ['phá bỏ', 'truyền lại', 'bán vé', 'đo chiều cao'], 'B', 'Pass down knowledge là truyền kiến thức qua thế hệ.']
    ], 2),
  block('grammar', 'language', 'To-infinitive clauses',
    ['Dùng to-infinitive chỉ mục đích và sau tính từ.', 'Dùng to-infinitive bổ nghĩa danh từ phù hợp.'],
    [
      'To-infinitive clause có thể chỉ mục đích: “The team recorded the song to preserve it.” Chủ ngữ mệnh đề chính thường là người thực hiện hành động trong to-infinitive.',
      'Sau adjective, to-infinitive hoàn thiện ý đánh giá hoặc cảm xúc: “It is important to consult the community”; “Residents were proud to share their knowledge.”',
      'To-infinitive có thể bổ nghĩa danh từ: “a plan to restore the gate”, “the first student to interview the artisan”. Không nhầm với giới từ to trong be committed to preserving, vốn theo sau bằng V-ing.'
    ],
    ['to + base verb chỉ mục đích.', 'adjective + to-infinitive.', 'noun + to-infinitive modifier.', 'Phân biệt infinitive to và prepositional to.'],
    ['Xác định chức năng', 'The museum created a digital archive to improve access.', ['To improve trả lời câu hỏi why.', 'Nó diễn đạt mục đích.'], 'purpose'],
    [
      ['The group met ___ a plan.', ['develop', 'to develop', 'developing after infinitive', 'developed'], 'B', 'To develop diễn đạt mục đích cuộc họp.'],
      ['We are committed to ___ local artisans.', ['support', 'to support', 'supporting', 'supported'], 'C', 'To trong committed to là giới từ nên dùng V-ing.']
    ], 3, [
      { id: 'eng11-form-u6-purpose', label: 'Purpose', expression: 'main\\ clause + to + V', variables: [{ symbol: 'V', meaning: 'Động từ nguyên mẫu chỉ mục đích' }], conditions: ['Chủ ngữ logic phù hợp'] },
      { id: 'eng11-form-u6-modifier', label: 'Noun modifier', expression: 'noun + to + V', variables: [{ symbol: 'noun', meaning: 'Danh từ được bổ nghĩa' }], conditions: ['To-infinitive nêu hành động liên quan đến danh từ'] }
    ]),
  block('reading', 'reading', 'Reading heritage, stakeholders and evidence',
    ['Xác định giá trị và nguy cơ.', 'Đánh giá tiếng nói cộng đồng và tác động dài hạn.'],
    [
      'Văn bản bảo tồn thường có nhiều stakeholders: cộng đồng nắm giữ di sản, nghệ nhân, cư dân, nhà nghiên cứu, cơ quan quản lý, doanh nghiệp và khách tham quan. Hãy xác định quyền lợi, trách nhiệm và bằng chứng của từng bên.',
      'Một biện pháp có thể bảo vệ vật liệu nhưng làm suy yếu thực hành sống; hoặc tăng khách du lịch nhưng gây quá tải. Vì vậy cần phân biệt outputs ngắn hạn với outcomes cho tình trạng di sản và sinh kế cộng đồng.',
      'Các từ according to, suggests, remains uncertain và however giúp định vị bằng chứng và giới hạn. Không suy ra “UNESCO” hoặc lượng khách cao tự động đồng nghĩa mọi vấn đề đã được giải quyết.'
    ],
    ['Xác định value–threat–response.', 'Lập bản đồ stakeholders.', 'Đọc cả benefit, cost và uncertainty.'],
    ['Đánh giá thành công', 'Ticket sales rose, but artisans stopped teaching apprentices. Is preservation clearly successful?', ['Doanh thu chỉ là một output.', 'Truyền nghề đang suy yếu.'], 'Chưa thể kết luận thành công.'],
    [
      ['Ai là stakeholder cốt lõi của một nghề truyền thống?', ['Cộng đồng và nghệ nhân thực hành', 'Chỉ nhà quảng cáo', 'Chỉ khách nước ngoài', 'Không ai'], 'A', 'Người thực hành nắm tri thức và duy trì di sản sống.'],
      ['Chi tiết nào chỉ giới hạn?', ['The project began.', 'Long-term effects remain uncertain.', 'Visitors came.', 'A sign was printed.'], 'B', 'Remain uncertain nêu rõ giới hạn bằng chứng.']
    ], 4),
  block('writing', 'writing', 'Indirect writing: heritage proposals and notices',
    ['Tổ chức value–risk–action–participation.', 'Viết mục tiêu và hành động có thể kiểm chứng.'],
    [
      'Đề xuất bảo tồn nên xác định di sản và giá trị trước, sau đó nêu nguy cơ có bằng chứng, hành động, bên chịu trách nhiệm, nguồn lực và cách cộng đồng tham gia quyết định.',
      'Thông báo hoạt động cần purpose, audience, time/place, preparation và call to action. Tránh lời mời mơ hồ khiến người đọc không biết ai đủ điều kiện hoặc đăng ký thế nào.',
      'Dùng aims to, is designed to và could help để mô tả mục tiêu hợp lý. Không khẳng định một workshop “will save the tradition forever” nếu chưa có bằng chứng dài hạn.'
    ],
    ['Value → risk → action → participation.', 'Nêu trách nhiệm và cách tham gia.', 'Tránh lời hứa tuyệt đối.'],
    ['Sửa overclaim', 'Rewrite “The app will save the craft forever.”', ['Đổi will thành could help.', 'Nêu chức năng cụ thể của app.'], 'The app could help document techniques and connect learners with artisans.'],
    [
      ['Phần nào nên có trong proposal?', ['Community role', 'Màu yêu thích', 'Tin đồn', 'Khẩu hiệu không hành động'], 'A', 'Vai trò cộng đồng quyết định tính khả thi và chính danh.'],
      ['Cách diễn đạt mục tiêu phù hợp là:', ['guarantees survival', 'aims to support transmission', 'solves everything', 'needs no review'], 'B', 'Aims to không biến mục tiêu thành kết quả chắc chắn.']
    ], 5),
  block('communication', 'communication-culture', 'Discussing heritage with community respect',
    ['Hỏi thông tin và đề xuất lịch sự.', 'Ghi nhận consent, credit và lợi ích cộng đồng.'],
    [
      'Câu hỏi phù hợp gồm Could you explain how this practice is used? và Would the community be comfortable with recording it? Hỏi permission trước khi ghi âm, chụp ảnh hoặc công bố tri thức nhạy cảm.',
      'Ghi nguồn không chỉ là tên người cung cấp; cần thỏa thuận cách credit, phạm vi sử dụng, quyền truy cập và khả năng rút lại nếu phù hợp. Không giả định mọi yếu tố văn hóa đều thuộc public domain.',
      'Khi bất đồng, tóm tắt mối quan tâm và đề xuất điều chỉnh: “I understand that public access may create risks. Could we begin with a community-controlled archive?”'
    ],
    ['Ask before recording/sharing.', 'Community consent và credit.', 'Phản hồi bằng cách ghi nhận concern và điều chỉnh.'],
    ['Xin phép', 'What should a student say before recording an artisan?', ['Giải thích mục đích.', 'Hỏi rõ permission và cách sử dụng.'], 'Would you be comfortable with us recording this explanation for the school archive?'],
    [
      ['Câu hỏi tôn trọng là:', ['May we record this, and how may it be used?', 'We will publish everything.', 'Consent is unnecessary.', 'Your knowledge belongs to us.'], 'A', 'Câu hỏi xin phép và làm rõ phạm vi sử dụng.'],
      ['Khi cộng đồng lo ngại, phản hồi tốt là:', ['Ignore them.', 'Let us revise the plan with you.', 'Experts decide alone.', 'Publish first.'], 'B', 'Cùng sửa kế hoạch ghi nhận quyền quyết định của cộng đồng.']
    ], 6)
];
