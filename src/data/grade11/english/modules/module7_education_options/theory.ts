import type { TheoryBlock } from '@/data/schema';
type Choice = 'A' | 'B' | 'C' | 'D';
const sourceIds = ['eng11-source-official-program', 'eng11-source-global-success-textbook'];
const block = (
  kind: string, lesson: string, title: string, objectives: string[], paragraphs: string[],
  keyPoints: string[], example: [string, string, string[], string],
  checks: Array<[string, [string, string, string, string], Choice, string]>,
  orderIndex: number, formulas: TheoryBlock['formulas'] = []
): TheoryBlock => ({
  id: `eng11-theory-u7-${kind}`, courseId: 'grade11:english', moduleId: 'eng11-m7',
  lessonIds: kind === 'vocabulary' ? ['eng11-u7-getting-started', 'eng11-u7-language'] : [`eng11-u7-${lesson}`],
  outcomeIds: [`eng11-out-u7-${kind}`], questionTypeIds: [`eng11-qt-u7-${kind}`], sourceIds,
  title, objectives, content: paragraphs.join('\n\n'), formulas, keyPoints,
  workedExamples: [{ id: `eng11-ex-u7-${kind}`, title: example[0], problem: example[1], steps: example[2], answer: example[3] }],
  checkpoints: checks.map((item, index) => ({
    id: `eng11-cp-u7-${kind}-${index + 1}`, question: item[0],
    options: item[1], correctAnswer: item[2], explanation: item[3]
  })),
  orderIndex, reviewStatus: 'source_checked'
});
export const g11EnglishModule7Theory: TheoryBlock[] = [
  block('pronunciation', 'language', 'Intonation in Yes/No and Wh-questions',
    ['Nhận biết rising intonation phổ biến của Yes/No questions.', 'Nhận biết falling intonation phổ biến của Wh-questions.'],
    [
      'Yes/No questions thường dùng rising intonation vì người nói mời xác nhận: “Are you applying this year?” Wh-questions trung tính thường xuống giọng vì yêu cầu một nội dung cụ thể: “Which course interests you?”',
      'Ngữ điệu có thể thay đổi theo dụng ý. Wh-question có rising tone có thể thể hiện bất ngờ, lặp lại hoặc muốn xác nhận; Yes/No question có final fall có thể nghe dứt khoát hoặc mang tính kiểm tra hơn.',
      'Khi làm bài, xác định loại câu hỏi trước rồi đọc bối cảnh để xem có sắc thái đặc biệt không. Nền tảng đánh giá nhận biết đường nét và ý nghĩa, không chấm giọng nói trực tiếp.'
    ],
    ['Yes/No thường rise.', 'Wh-question trung tính thường fall.', 'Context có thể điều chỉnh tone.'],
    ['Chọn tone', 'How does “Have you checked the deadline?” normally end?', ['Đây là Yes/No question.', 'Dùng rising tone trung tính để mời xác nhận.'], 'rising intonation'],
    [
      ['Câu nào thường lên giọng?', ['Are you ready?', 'Where is the college?', 'Why did you leave?', 'Which course starts first?'], 'A', 'Are you ready? là Yes/No question.'],
      ['Wh-question trung tính thường:', ['rise bắt buộc', 'fall', 'không có pitch', 'nhấn mọi từ'], 'B', 'Wh-question thường dùng falling intonation.']
    ], 1),
  block('vocabulary', 'language', 'Vocabulary: pathways, qualifications and admission',
    ['Phân biệt university, vocational education và apprenticeship.', 'Dùng đúng collocation tuyển sinh và bằng cấp.'],
    [
      'A degree programme thường học ở university; vocational education tập trung năng lực nghề; an apprenticeship kết hợp đào tạo với thực hành có giám sát tại nơi làm việc. Foundation course và gap year có mục tiêu khác nhau.',
      'Qualification là văn bằng/chứng chỉ hoặc năng lực được công nhận; entry requirements là điều kiện đầu vào; tuition fees là học phí; scholarship là hỗ trợ tài chính dựa trên tiêu chí; career prospects là triển vọng nghề nghiệp.',
      'Collocation trọng tâm gồm apply for a course, meet entry requirements, gain a qualification, enrol in a programme, complete an apprenticeship, pay tuition fees và make an informed decision.'
    ],
    ['degree/vocational/apprenticeship', 'entry requirements', 'apply for/enrol in', 'career prospects'],
    ['Phân biệt lộ trình', 'Which option combines employment-based training with study?', ['Tìm lựa chọn có workplace training.', 'Apprenticeship phù hợp.'], 'an apprenticeship'],
    [
      ['Cụm nào đúng?', ['meet entry requirements', 'do requirements', 'take tuition down', 'make a qualification at'], 'A', 'Meet entry requirements là đáp ứng điều kiện đầu vào.'],
      ['Tiền trả cho việc học là:', ['career prospects', 'tuition fees', 'entry route', 'qualification skills'], 'B', 'Tuition fees là học phí.']
    ], 2),
  block('grammar', 'language', 'Perfect gerunds and perfect participle clauses',
    ['Dùng perfect gerund như một noun phrase.', 'Dùng perfect participle clause chỉ hành động hoàn tất trước.'],
    [
      'Perfect gerund có dạng having + V3/ed và hoạt động như danh từ: “She regretted having missed the deadline.” Nó có thể làm chủ ngữ hoặc tân ngữ, nhất là sau admit, deny, regret, remember hoặc mention.',
      'Perfect participle clause cũng có dạng having + V3/ed nhưng bổ sung hoàn cảnh cho mệnh đề chính: “Having compared the courses, Mai chose an apprenticeship.” Hành động compare đã hoàn tất trước choose.',
      'Hai cấu trúc khác nhau ở chức năng. Sau Having trong participle clause, chủ ngữ logic phải trùng chủ ngữ mệnh đề chính. Dạng phủ định là not having + V3/ed; quan hệ bị động hoàn thành có thể dùng having been + V3/ed.'
    ],
    ['Form: having + V3/ed.', 'Gerund giữ vị trí danh từ.', 'Participle clause bổ sung hoàn cảnh.', 'Kiểm tra chủ ngữ logic.'],
    ['Phân tích chức năng', 'He denied having copied the application.', ['Sau denied cần object.', 'Having copied là perfect gerund.'], 'perfect gerund'],
    [
      ['She admitted ___ the deadline.', ['having missed', 'have missed', 'having miss', 'to having missed by admit'], 'A', 'Admit nhận perfect gerund having missed.'],
      ['___ all offers, Nam chose the local college.', ['Compare', 'Having compared', 'Compared having', 'To comparing'], 'B', 'Hành động compare hoàn tất trước chose.']
    ], 3, [
      { id: 'eng11-form-u7-perfect-gerund', label: 'Perfect gerund', expression: 'having + V_3/ed', variables: [{ symbol: 'V3/ed', meaning: 'Quá khứ phân từ' }], conditions: ['Cụm giữ chức năng danh từ'] },
      { id: 'eng11-form-u7-perfect-participle', label: 'Perfect participle clause', expression: 'Having + V_3/ed,\\ main\\ clause', variables: [{ symbol: 'main clause', meaning: 'Hành động xảy ra sau' }], conditions: ['Hai phần có cùng chủ ngữ logic'] }
    ]),
  block('reading', 'reading', 'Reading and comparing education options',
    ['Định vị entry requirements, learning model và outcomes.', 'Đánh giá bằng chứng, chi phí và độ phù hợp.'],
    [
      'Văn bản về giáo dục thường có claim về chất lượng hoặc triển vọng. Hãy tìm population, time frame và cách đo outcome: hoàn thành khóa học, việc làm liên quan, mức lương, tiến bộ kỹ năng hay sự hài lòng.',
      'Không so sánh trực tiếp hai tỷ lệ nếu đối tượng hoặc thời điểm khác nhau. “Employed” không nhất thiết là làm đúng ngành; mức phí niêm yết chưa phản ánh học bổng, chi phí đi lại hoặc thu nhập bị mất.',
      'Fit phụ thuộc mục tiêu, cách học, điều kiện tài chính, trách nhiệm gia đình và yêu cầu nghề. Một văn bản đáng tin thường công khai điều kiện, hỗ trợ, giới hạn và bước để người học kiểm chứng thông tin.'
    ],
    ['Claim–evidence–limit.', 'So sánh cùng định nghĩa và thời điểm.', 'Đánh giá fit, cost và access.'],
    ['Đọc tỷ lệ việc làm', '“90% employed” còn thiếu thông tin gì?', ['Cần thời điểm và đối tượng.', 'Cần biết việc làm có liên quan ngành/ổn định không.'], 'Definition, sample and time frame.'],
    [
      ['Chi tiết nào giúp đánh giá outcome?', ['Màu brochure', 'Thời điểm khảo sát việc làm', 'Logo trường', 'Độ dài tên khóa'], 'B', 'Thời điểm quyết định ý nghĩa của tỷ lệ.'],
      ['Fit nên dựa trên:', ['Một bảng xếp hạng', 'Mục tiêu và điều kiện người học cùng bằng chứng', 'Ý kiến duy nhất', 'Tên khóa ngắn'], 'B', 'Độ phù hợp cần nhiều tiêu chí liên quan người học.']
    ], 4),
  block('writing', 'writing', 'Indirect writing: comparing pathways and giving advice',
    ['Tổ chức purpose–criteria–comparison–next step.', 'Dùng lời khuyên có điều kiện, không áp đặt.'],
    [
      'Email hoặc đoạn tư vấn nên mở bằng mục đích và nhu cầu người đọc, nêu tiêu chí so sánh, trình bày ưu/nhược điểm có bằng chứng rồi kết bằng bước kiểm tra hoặc hành động.',
      'Các từ nối both, whereas, however, in contrast, because và therefore phải phản ánh quan hệ thật. So sánh công bằng dùng cùng tiêu chí cho cả hai lựa chọn.',
      'Dùng might suit you if..., you could check..., before deciding... thay cho “You must choose...”. Nếu số liệu chưa đủ, nói rõ giới hạn và đề xuất hỏi nhà trường hoặc người đang học.'
    ],
    ['Purpose → criteria → comparison → next step.', 'Cùng tiêu chí cho các lựa chọn.', 'Advice tôn trọng quyền lựa chọn.'],
    ['Sửa lời khuyên', 'Rewrite “University is always best.”', ['Bỏ khái quát tuyệt đối.', 'Gắn lựa chọn với mục tiêu và evidence.'], 'A degree might suit you if your target career requires it; check entry and cost details first.'],
    [
      ['Connector chỉ đối lập là:', ['because', 'whereas', 'therefore', 'for example'], 'B', 'Whereas dùng so sánh tương phản.'],
      ['Closing phù hợp là:', ['Choose now.', 'Compare the verified requirements before deciding.', 'Ignore the costs.', 'One option fits everyone.'], 'B', 'Bước kiểm chứng hỗ trợ quyết định có thông tin.']
    ], 5),
  block('communication', 'communication-culture', 'Advising without taking over the decision',
    ['Hỏi mục tiêu và điều kiện.', 'Đưa lời khuyên dựa trên tiêu chí và giữ agency.'],
    [
      'Trước khi khuyên, hỏi What kind of work interests you?, How do you prefer to learn? và What financial or location limits matter? Những câu hỏi này giúp tránh lời khuyên chung chung.',
      'Lời khuyên có thể dùng You could..., It may be worth..., Have you considered...? và If..., then... . Phản hồi tốt phân biệt thông tin đã xác minh với kinh nghiệm cá nhân.',
      'Cố vấn không nên quyết định thay. Họ có thể giúp lập danh sách tiêu chí, tìm nguồn đáng tin, chuẩn bị câu hỏi cho open day và đặt thời hạn rà soát.'
    ],
    ['Ask before advising.', 'Nêu evidence và condition.', 'Giữ quyền quyết định của học sinh.'],
    ['Khuyên có điều kiện', 'Respond to “Should I choose an apprenticeship?”', ['Hỏi mục tiêu nghề và cách học.', 'Nêu bước kiểm tra cụ thể.'], 'It may suit you if you prefer workplace learning; check the qualification and employer support.'],
    [
      ['Câu hỏi làm rõ tốt là:', ['Which careers interest you?', 'Why not copy me?', 'Rankings decide everything.', 'Costs never matter.'], 'A', 'Sở thích nghề là tiêu chí đầu vào cho tư vấn.'],
      ['Lời khuyên không áp đặt là:', ['You must obey me.', 'You could compare both offers against your priorities.', 'Only one path has value.', 'Do not ask questions.'], 'B', 'You could... để người học giữ quyền lựa chọn.']
    ], 6)
];
