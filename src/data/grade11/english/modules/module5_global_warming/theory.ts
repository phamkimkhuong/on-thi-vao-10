import type { TheoryBlock } from '@/data/schema';

type Choice = 'A' | 'B' | 'C' | 'D';
const sourceIds = ['eng11-source-official-program', 'eng11-source-global-success-textbook'];
const block = (
  kind: string, lesson: string, title: string, objectives: string[], paragraphs: string[],
  keyPoints: string[], example: [string, string, string[], string],
  checks: Array<[string, [string, string, string, string], Choice, string]>,
  orderIndex: number, formulas: TheoryBlock['formulas'] = []
): TheoryBlock => ({
  id: `eng11-theory-u5-${kind}`, courseId: 'grade11:english', moduleId: 'eng11-m5',
  lessonIds: kind === 'vocabulary'
    ? ['eng11-u5-getting-started', 'eng11-u5-language']
    : [`eng11-u5-${lesson}`], outcomeIds: [`eng11-out-u5-${kind}`],
  questionTypeIds: [`eng11-qt-u5-${kind}`], sourceIds, title, objectives,
  content: paragraphs.join('\n\n'), formulas, keyPoints,
  workedExamples: [{
    id: `eng11-ex-u5-${kind}`, title: example[0], problem: example[1],
    steps: example[2], answer: example[3]
  }],
  checkpoints: checks.map((item, index) => ({
    id: `eng11-cp-u5-${kind}-${index + 1}`, question: item[0],
    options: item[1], correctAnswer: item[2], explanation: item[3]
  })),
  orderIndex, reviewStatus: 'source_checked'
});

export const g11EnglishModule5Theory: TheoryBlock[] = [
  block('pronunciation', 'language', 'Sentence stress and rhythm',
    ['Nhận biết content words thường mang trọng âm.', 'Hiểu contrastive stress có thể đổi trọng tâm thông tin.'],
    [
      'Trong lời nói tự nhiên, content words như danh từ, động từ chính, tính từ và trạng từ thường được nhấn. Function words như mạo từ, giới từ ngắn, trợ động từ và đại từ thường yếu hơn nếu không mang ý đối lập.',
      'Nhịp tiếng Anh thường hình thành quanh các âm tiết được nhấn. Người nói có thể rút ngắn các âm tiết không nhấn để giữ khoảng tương đối đều giữa các trọng âm, vì vậy không nên đọc mọi từ với lực và độ dài như nhau.',
      'Contrastive stress đưa trọng âm vào từ cần sửa hoặc đối chiếu: “We need LOCAL action” đối lập local với một lựa chọn khác. Trên web, học sinh nhận biết từ cần nhấn qua ngữ cảnh; hệ thống không chấm giọng nói.'
    ],
    ['Content words thường được nhấn.', 'Function words thường yếu nhưng có thể được nhấn để đối lập.', 'Nhịp dựa trên các âm tiết nổi bật.'],
    ['Xác định từ nhấn', 'Which words carry the main information in “Communities reduce carbon emissions”?', ['Xác định danh từ và động từ chính.', 'Nhấn communities, reduce, carbon emissions.'], 'COMMUNITIES – REDUCE – CARBON EMISSIONS'],
    [
      ['Từ nào thường được nhấn?', ['Mạo từ a', 'Danh từ emissions', 'Giới từ of', 'Trợ động từ do'], 'B', 'Danh từ là content word.'],
      ['Trong “We need solar, not coal”, từ nào cần contrastive stress?', ['we', 'need', 'solar', 'not'], 'C', 'Solar được đối lập trực tiếp với coal.']
    ], 1),
  block('vocabulary', 'language', 'Vocabulary: causes, impacts and climate action',
    ['Phân biệt cause, impact, mitigation và adaptation.', 'Dùng đúng từ loại và collocation khí hậu.'],
    [
      'Greenhouse gases giữ nhiệt trong khí quyển. Carbon dioxide emissions phát sinh từ đốt nhiên liệu hóa thạch, thay đổi sử dụng đất và nhiều hoạt động sản xuất; carbon footprint mô tả lượng phát thải gắn với một người, hoạt động hoặc sản phẩm.',
      'Mitigation là giảm nguồn phát thải hoặc tăng hấp thụ carbon; adaptation là điều chỉnh để giảm thiệt hại từ tác động đã hoặc sẽ xảy ra. Renewable energy, energy efficiency và protect carbon sinks thuộc nhóm giải pháp thường gặp.',
      'Các collocation trọng tâm gồm cut/reduce emissions, release greenhouse gases, rising sea levels, extreme weather, switch to renewable energy và cope with climate impacts. Chọn từ phải đúng cả nghĩa lẫn từ loại.'
    ],
    ['reduce/cut emissions', 'renewable energy', 'mitigation khác adaptation', 'climate impacts'],
    ['Phân biệt khái niệm', 'Building a sea wall is mitigation or adaptation?', ['Xác định hành động có giảm phát thải không.', 'Sea wall giảm thiệt hại do nước biển dâng.'], 'adaptation'],
    [
      ['Cụm nào đúng?', ['do emissions', 'reduce emissions', 'make weather', 'take carbon'], 'B', 'Reduce emissions là collocation chuẩn.'],
      ['Solar power là một nguồn năng lượng:', ['renewable', 'exhausted', 'emitted', 'adapted'], 'A', 'Solar power được tái tạo tự nhiên.']
    ], 2),
  block('grammar', 'language', 'Present and past participle clauses',
    ['Rút gọn mệnh đề chủ động bằng V-ing.', 'Rút gọn mệnh đề bị động bằng V3/ed và tránh dangling participles.'],
    [
      'Present participle clause dùng V-ing khi chủ ngữ logic thực hiện hành động: “Burning fossil fuels, power stations release carbon dioxide.” Nó có thể diễn đạt thời gian, nguyên nhân hoặc hành động đồng thời tùy ngữ cảnh.',
      'Past participle clause dùng V3/ed khi chủ ngữ logic nhận tác động: “Powered by solar energy, the building produces fewer emissions.” Có thể mở rộng thành “Because it is powered by solar energy...”.',
      'Chủ ngữ logic của participle clause phải trùng với chủ ngữ mệnh đề chính. “Driving to school, the rain started” sai vì rain không lái xe. Khi quan hệ không rõ, giữ mệnh đề đầy đủ.'
    ],
    ['V-ing → quan hệ chủ động.', 'V3/ed → quan hệ bị động.', 'Kiểm tra chủ ngữ logic.'],
    ['Chọn dạng participle', '___ by stronger storms, the coast needs better protection.', ['Coast nhận tác động.', 'Dùng past participle affected.'], 'Affected'],
    [
      ['___ more trees, the city can absorb more carbon.', ['Planting', 'Planted', 'Plant', 'To planted'], 'A', 'City chủ động thực hiện planting.'],
      ['___ from recycled material, the panels use fewer new resources.', ['Making', 'Make', 'Made', 'To making'], 'C', 'Panels được làm nên dùng past participle.']
    ], 3, [
      { id: 'eng11-form-u5-active-participle', label: 'Active relation', expression: 'V\\text{-}ing\\ clause,\\ main\\ clause', variables: [{ symbol: 'V-ing', meaning: 'Hành động do chủ ngữ chính thực hiện' }], conditions: ['Hai phần có cùng chủ ngữ logic'] },
      { id: 'eng11-form-u5-passive-participle', label: 'Passive relation', expression: 'V_3/ed\\ clause,\\ main\\ clause', variables: [{ symbol: 'V3/ed', meaning: 'Chủ ngữ chính nhận tác động' }], conditions: ['Có thể khôi phục because/when + subject + be + V3/ed'] }
    ]),
  block('reading', 'reading', 'Reading climate evidence and responses',
    ['Phân biệt thời tiết với xu hướng khí hậu.', 'Đánh giá bằng chứng, nguyên nhân và giới hạn giải pháp.'],
    [
      'Văn bản khí hậu thường đi từ observation đến mechanism rồi consequence. Một đợt nóng là sự kiện; chuỗi dữ liệu dài hạn mới giúp đánh giá xu hướng. Hãy ghi nhận phạm vi thời gian, địa điểm và nguồn số liệu.',
      'Correlation không tự động chứng minh causation. Bằng chứng mạnh thường kết hợp đo đạc, cơ chế vật lý, so sánh và nhiều nguồn độc lập. Từ may, can, likely và estimate cho biết mức độ chắc chắn.',
      'Khi đọc về giải pháp, phân biệt mitigation với adaptation, sau đó hỏi ai được bảo vệ, chi phí thuộc về ai, hành động có thể mở rộng hay không và có tạo tác dụng phụ ngoài ý muốn không.'
    ],
    ['Weather khác climate trend.', 'Theo dõi claim–evidence–limit.', 'Đánh giá cả hiệu quả và công bằng.'],
    ['Đánh giá bằng chứng', 'Một ngày lạnh có bác bỏ xu hướng ấm lên dài hạn không?', ['Sự kiện đơn lẻ là weather.', 'Xu hướng khí hậu cần dữ liệu dài hạn.'], 'Không.'],
    [
      ['Chi tiết nào mạnh nhất cho một xu hướng?', ['Một bức ảnh', 'Chuỗi đo nhiều thập kỷ', 'Một ý kiến', 'Một ngày bất thường'], 'B', 'Chuỗi dài hạn phù hợp với khái niệm khí hậu.'],
      ['Từ “may” thường cho biết:', ['Chắc chắn tuyệt đối', 'Khả năng có giới hạn', 'Không có bằng chứng', 'Mệnh lệnh'], 'B', 'May biểu thị khả năng, không phải chắc chắn.']
    ], 4),
  block('writing', 'writing', 'Indirect writing: explaining a climate problem',
    ['Tổ chức problem–cause–impact–response.', 'Dùng bằng chứng với mức khẳng định phù hợp.'],
    [
      'Một đoạn giải thích tốt mở bằng vấn đề có phạm vi rõ, sau đó nêu cơ chế hoặc nguyên nhân, tác động và phản ứng khả thi. Mỗi câu phải đóng vai trò cụ thể thay vì liệt kê khẩu hiệu.',
      'Các từ nối because, therefore, as a result, however, while và by + V-ing giúp thể hiện quan hệ. Không dùng therefore nếu câu sau không phải kết quả logic của câu trước.',
      'Khi dẫn số liệu, nêu nguồn hoặc bối cảnh và tránh biến ước lượng thành sự thật tuyệt đối. Các động từ suggest, indicate, estimate và may phù hợp khi bằng chứng có độ bất định.'
    ],
    ['Problem → cause → impact → response.', 'Dùng connector theo quan hệ thật.', 'Không overclaim bằng chứng.'],
    ['Sắp xếp ý', 'Where should a practical response appear?', ['Giới thiệu vấn đề và nguyên nhân trước.', 'Đặt response sau tác động hoặc bằng chứng.'], 'Sau problem/cause/impact.'],
    [
      ['Connector chỉ kết quả là:', ['However', 'For example', 'Therefore', 'Meanwhile'], 'C', 'Therefore giới thiệu kết quả.'],
      ['Cách viết thận trọng hơn là:', ['proves forever', 'suggests a trend', 'ends all debate', 'guarantees success'], 'B', 'Suggests phản ánh giới hạn bằng chứng.']
    ], 5),
  block('communication', 'communication-culture', 'Discussing climate action responsibly',
    ['Đề xuất và phản hồi lịch sự.', 'So sánh hiệu quả, khả thi và công bằng.'],
    [
      'Đề xuất có thể dùng We could..., Why don’t we...?, It might be more effective to... và One option is to.... Phản hồi tốt nêu điểm đồng ý rồi yêu cầu bằng chứng hoặc làm rõ điều kiện.',
      'Một giải pháp cần được đánh giá theo tác động dự kiến, thời gian, chi phí, khả năng tiếp cận và người chịu rủi ro. Cheapest không luôn đồng nghĩa fairest hoặc most effective.',
      'Tránh false choice giữa hành động cá nhân và thay đổi hệ thống. Học sinh có thể thảo luận cách thói quen, hạ tầng, quy định và đầu tư hỗ trợ lẫn nhau.'
    ],
    ['Đề xuất cụ thể.', 'Yêu cầu evidence và điều kiện.', 'Xem xét trade-offs và fairness.'],
    ['Phản hồi đề xuất', 'How can you question “Let’s ban all cars tomorrow” constructively?', ['Ghi nhận mục tiêu giảm phát thải.', 'Hỏi về giao thông thay thế và người bị ảnh hưởng.'], 'That could cut emissions, but what alternatives would be available to commuters?'],
    [
      ['Lời đề xuất lịch sự là:', ['We could improve bus routes.', 'You are wrong.', 'No discussion.', 'Cars vanish.'], 'A', 'We could... đưa đề xuất mở.'],
      ['Câu hỏi nào đánh giá công bằng?', ['What colour is it?', 'Who bears the cost and who benefits?', 'Is it popular online?', 'Is it the shortest?'], 'B', 'Phân phối chi phí và lợi ích là tiêu chí công bằng.']
    ], 6)
];
