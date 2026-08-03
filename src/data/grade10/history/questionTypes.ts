import type { QuestionType } from '@/types';

export const g10HistoryQuestionTypes: QuestionType[] = [
  {
    id: 'g10-his-type-1',
    topicId: 'g10-his-topic-1',
    name: 'Hiện thực lịch sử & Nhận thức lịch sử',
    slug: 'hien-thuc-va-nhan-thuc-lich-su',
    description: 'Phân biệt hiện thực lịch sử khách quan và nhận thức lịch sử mang tính chủ quan của con người.',
    recognitionSigns: [
      'Câu hỏi yêu cầu phân biệt sự kiện diễn ra khách quan và sự ghi chép/đánh giá của nhà sử học',
      'Đề cập tới đối tượng, nhiệm vụ, chức năng của Sử học'
    ],
    solvingSteps: [
      'Bước 1: Đọc kỹ ngữ liệu hoặc khái niệm được đưa ra trong đề bài.',
      'Bước 2: Xác định xem đối tượng là bản thân sự kiện trong quá khứ (Hiện thực) hay là hiểu biết/nghiên cứu của con người (Nhận thức).',
      'Bước 3: Đối chiếu các phương án để chọn kết luận đúng nhất.'
    ],
    commonMistakes: [
      'Nhầm lẫn giữa sự thật lịch sử khách quan với đánh giá cá nhân của nhà nghiên cứu',
      'Cho rằng nhận thức lịch sử là bất biến không thể thay đổi khi có nguồn tư liệu mới'
    ],
    difficulty: 'easy',
    examFrequency: 'high',
    theory: [
      'Hiện thực lịch sử là toàn bộ những gì đã diễn ra trong quá khứ, tồn tại khách quan, độc lập với ý thức con người.',
      'Nhận thức lịch sử là toàn bộ tri thức, hiểu biết của con người về hiện thực lịch sử, được tái hiện qua nghiên cứu và nguồn tư liệu.'
    ]
  },
  {
    id: 'g10-his-type-2',
    topicId: 'g10-his-topic-1',
    name: 'Tri thức lịch sử & Phương pháp khai thác sử liệu',
    slug: 'tri-thuc-lich-su-va-su-lieu',
    description: 'Ứng dụng tri thức lịch sử trong đời sống và quy trình phân loại, xử lý các nguồn sử liệu.',
    recognitionSigns: [
      'Hỏi về các loại hình sử liệu (sử liệu chữ viết, hiện vật, truyền miệng)',
      'Hỏi về ý nghĩa của việc học tập lịch sử suốt đời'
    ],
    solvingSteps: [
      'Bước 1: Phân loại nguồn sử liệu trong đề bài (nguyên gốc hay thứ cấp).',
      'Bước 2: Xác định giá trị thông tin và độ tin cậy của nguồn tư liệu.',
      'Bước 3: Rút ra kết luận hoặc chọn đáp án đúng theo yêu cầu.'
    ],
    commonMistakes: [
      'Coi truyền thuyết hoặc ca dao là sử liệu gốc hoàn toàn chính xác mà không đối chứng',
      'Không phân biệt được sử liệu trực tiếp (gốc) và sử liệu gián tiếp'
    ],
    difficulty: 'easy',
    examFrequency: 'medium',
    theory: [
      'Sử liệu gồm: Sử liệu hiện vật, Sử liệu chữ viết, Sử liệu hình ảnh, Sử liệu truyền miệng...',
      'Sử liệu gốc (trực tiếp) có giá trị lịch sử và độ tin cậy cao nhất.'
    ]
  },
  {
    id: 'g10-his-type-3',
    topicId: 'g10-his-topic-2',
    name: 'Sử học với các lĩnh vực khoa học liên ngành',
    slug: 'su-hoc-voi-cac-nganh-khoa-hoc',
    description: 'Mối quan hệ hỗ trợ hai chiều giữa Sử học với Khoa học Xã hội & Khoa học Tự nhiên.',
    recognitionSigns: [
      'Đề cập tới việc ứng dụng phương pháp Cacbon 14 (C14), ADN, Địa lý, Ngữ văn trong nghiên cứu lịch sử',
      'Hỏi về tính liên ngành của Sử học'
    ],
    solvingSteps: [
      'Bước 1: Phân tích ngành khoa học được phối hợp với Sử học trong câu hỏi.',
      'Bước 2: Xác định vai trò của ngành đó trong việc làm sáng tỏ niên đại, bản chất hay bối cảnh lịch sử.',
      'Bước 3: Lựa chọn đáp án chính xác.'
    ],
    commonMistakes: [
      'Cho rằng Sử học chỉ liên quan tới ngành Văn học hay Địa lý mà không cần Khoa học tự nhiên'
    ],
    difficulty: 'medium',
    examFrequency: 'medium',
    theory: [
      'Sử học là ngành khoa học mang tính liên ngành cao.',
      'Ứng dụng Hóa học (xác định tuổi di vật C14), Sinh học (xem xét ADN), Địa lý (xác định không gian) giúp nâng cao độ chính xác của tri thức lịch sử.'
    ]
  },
  {
    id: 'g10-his-type-4',
    topicId: 'g10-his-topic-2',
    name: 'Sử học với Du lịch & Bảo tồn di sản',
    slug: 'su-hoc-voi-du-lich-di-san',
    description: 'Mối quan hệ giữa phát triển du lịch, bảo tồn di sản văn hóa và vai trò định hướng của Sử học.',
    recognitionSigns: [
      'Hỏi về việc phát triển du lịch lịch sử - di sản',
      'Hỏi về nguyên tắc bảo tồn di sản (giữ nguyên yếu tố gốc)'
    ],
    solvingSteps: [
      'Bước 1: Xác định vai trò của Sử học trong việc nghiên cứu và cung cấp dữ liệu cho du lịch/di sản.',
      'Bước 2: Nắm vững nguyên tắc cốt lõi: Bảo tồn di sản phải đảm bảo tính nguyên gốc và bền vững.',
      'Bước 3: Chọn câu trả lời đúng nhất.'
    ],
    commonMistakes: [
      'Nhầm lẫn giữa việc "làm mới hoàn toàn di sản" với "bảo tồn giữ nguyên yếu tố gốc"'
    ],
    difficulty: 'easy',
    examFrequency: 'high',
    theory: [
      'Di sản văn hóa và thiên nhiên là nguồn lực quan trọng cho phát triển du lịch.',
      'Nguyên tắc hàng đầu trong bảo tồn di sản là phải giữ được tính nguyên gốc.'
    ]
  },
  {
    id: 'g10-his-type-5',
    topicId: 'g10-his-topic-3',
    name: 'Thành tựu các nền văn minh phương Đông cổ - trung đại',
    slug: 'van-minh-phuong-dong-co-trung-dai',
    description: 'Đặc điểm và thành tựu tiêu biểu của văn minh Ai Cập, Ấn Độ, Trung Hoa.',
    recognitionSigns: [
      'Hỏi về Kim tự tháp, Chữ tượng hình, Nho giáo, Phật giáo, Ấn Độ giáo, 4 phát minh lớn Trung Quốc (giấy, in, thuốc súng, la bàn)'
    ],
    solvingSteps: [
      'Bước 1: Xác định văn minh phương Đông cụ thể được nhắc tới (Ai Cập, Ấn Độ hay Trung Hoa).',
      'Bước 2: Đối chiếu với danh mục thành tựu về chữ viết, tôn giáo, kiến trúc, khoa học tự nhiên.',
      'Bước 3: Chọn đáp án tương ứng.'
    ],
    commonMistakes: [
      'Nhầm lẫn giữa chữ tượng hình Ai Cập với chữ Hán Trung Quốc hoặc chữ Phạn Ấn Độ',
      'Nhầm nguồn gốc của các tôn giáo lớn (Phật giáo bắt nguồn từ Ấn Độ, không phải Trung Quốc)'
    ],
    difficulty: 'medium',
    examFrequency: 'high',
    theory: [
      'Văn minh Ai Cập: Kim tự tháp, chữ tượng hình, lịch âm dương, toán học đo đạc.',
      'Văn minh Ấn Độ: Phật giáo, Ấn Độ giáo, sáng tạo ra chữ số 0.',
      'Văn minh Trung Hoa: Nho giáo, chữ Hán, 4 phát minh kỹ thuật lớn (giấy, in, thuốc súng, la bàn).'
    ]
  },
  {
    id: 'g10-his-type-6',
    topicId: 'g10-his-topic-3',
    name: 'Thành tựu các nền văn minh phương Tây cổ - trung đại',
    slug: 'van-minh-phuong-tay-co-trung-dai',
    description: 'Thành tựu nổi bật của văn minh Hy Lạp - La Mã cổ đại và Phong trào Văn hóa Phục hưng.',
    recognitionSigns: [
      'Hỏi về thể chế dân chủ Aten, Đấu trường Colosseum, Đền Parthenon, Hệ chữ cái Latinh, Văn hóa Phục hưng'
    ],
    solvingSteps: [
      'Bước 1: Xác định giai đoạn (Cổ đại Hy Lạp - La Mã hay Trung đại Phục hưng).',
      'Bước 2: Phân tích thành tựu về thể chế chính trị, chữ viết, nghệ thuật kiến trúc.',
      'Bước 3: Chọn phương án chính xác.'
    ],
    commonMistakes: [
      'Cho rằng thể chế dân chủ chủ chốt xuất hiện ở phương Đông thời cổ đại'
    ],
    difficulty: 'medium',
    examFrequency: 'high',
    theory: [
      'Hy Lạp - La Mã cổ đại: Thể chế dân chủ chủ nhà nỗ, chữ cái Latinh, Đấu trường Colosseum, Đền Parthenon, triết học phương Tây.',
      'Văn hóa Phục hưng: Đề cao giá trị con người (Chủ nghĩa nhân văn), chống lại sự thống trị của Giáo hội thời Trung cổ.'
    ]
  },
  {
    id: 'g10-his-type-7',
    topicId: 'g10-his-topic-4',
    name: 'Cách mạng công nghiệp thời kì cận đại (Lần 1 & 2)',
    slug: 'cach-mang-cong-nghiep-can-dai',
    description: 'Bối cảnh, thành tựu và tác động của Cách mạng công nghiệp lần thứ nhất và thứ hai.',
    recognitionSigns: [
      'Hỏi về động cơ hơi nước của James Watt, động cơ đốt trong, dòng điện, dây chuyền sản xuất'
    ],
    solvingSteps: [
      'Bước 1: Phân biệt lần 1 (Anh - Máy hơi nước thế kỷ 18) và lần 2 (Mỹ, Đức - Điện & Động cơ đốt trong thế kỷ 19).',
      'Bước 2: Đánh giá tác động đến kinh tế (năng suất bùng nổ) và xã hội (hình thành giai cấp tư sản và vô sản).',
      'Bước 3: Chọn đáp án đúng.'
    ],
    commonMistakes: [
      'Nhầm máy hơi nước (Lần 1) với động cơ điện (Lần 2)'
    ],
    difficulty: 'medium',
    examFrequency: 'high',
    theory: [
      'Cách mạng công nghiệp lần 1 (thế kỷ XVIII): Khởi nguồn từ Anh, biểu tượng là máy hơi nước James Watt (1784).',
      'Cách mạng công nghiệp lần 2 (cuối XIX - đầu XX): Khởi nguồn từ Mỹ & Đức, biểu tượng là năng lượng điện và động cơ đốt trong.'
    ]
  },
  {
    id: 'g10-his-type-8',
    topicId: 'g10-his-topic-4',
    name: 'Cách mạng công nghiệp thời kì hiện đại (Lần 3 & 4)',
    slug: 'cach-mang-cong-nghiep-hien-dai',
    description: 'Sự phát triển và tác động sâu rộng của Cách mạng công nghiệp lần 3 (CNTT) và lần 4 (AI, Big Data, IoT).',
    recognitionSigns: [
      'Hỏi về máy tính điện tử, Internet, Trí tuệ nhân tạo (AI), Internet vạn vật (IoT), Công nghệ sinh học'
    ],
    solvingSteps: [
      'Bước 1: Xác định thành tựu thuộc Lần 3 (nửa sau thế kỷ XX: Internet, bán dẫn) hay Lần 4 (thế kỷ XXI: AI, IoT, Big Data).',
      'Bước 2: Đánh giá cơ hội và thách thức (chuyển đổi số, tự động hóa, nguy cơ mất việc làm truyền thống).'
    ],
    commonMistakes: [
      'Nhầm lẫn giữa công nghệ máy tính ban đầu (Lần 3) với Trí tuệ nhân tạo thông minh (Lần 4)'
    ],
    difficulty: 'medium',
    examFrequency: 'high',
    theory: [
      'Cách mạng công nghiệp lần 3 (nửa sau thế kỷ XX): Tự động hóa dựa trên máy tính điện tử, Internet và vi mạch.',
      'Cách mạng công nghiệp lần 4 (thế kỷ XXI): Kỷ nguyên số hóa thông minh với Trí tuệ nhân tạo (AI), Big Data, IoT, Robot thông minh.'
    ]
  },
  {
    id: 'g10-his-type-9',
    topicId: 'g10-his-topic-5',
    name: 'Cơ sở hình thành văn minh Đông Nam Á',
    slug: 'co-so-hinh-thanh-van-minh-dong-nam-a',
    description: 'Các yếu tố tự nhiên, xã hội và văn hóa làm nền tảng cho văn minh Đông Nam Á cổ - trung đại.',
    recognitionSigns: [
      'Hỏi về khí hậu nhiệt đới gió mùa, nông nghiệp lúa nước, giao thoa văn hóa Ấn Độ - Trung Hoa'
    ],
    solvingSteps: [
      'Bước 1: Phân tích điều kiện tự nhiên (nhiệt đới gió mùa, sông lớn) ➔ Nông nghiệp lúa nước.',
      'Bước 2: Phân tích yếu tố ngoại lực (tiếp thu Ấn Độ giáo, Phật giáo, Hồi giáo trên nền bản địa).',
      'Bước 3: Chọn đáp án chính xác.'
    ],
    commonMistakes: [
      'Cho rằng văn minh Đông Nam Á hoàn toàn là sản phẩm sao chép từ Ấn Độ hoặc Trung Quốc'
    ],
    difficulty: 'easy',
    examFrequency: 'medium',
    theory: [
      'Nền tảng bản địa: Khí hậu nhiệt đới gió mùa, môi trường sông biển, nông nghiệp trồng lúa nước.',
      'Sự giao thoa: Tiếp thu có chọn lọc các ảnh hưởng văn hóa tôn giáo từ Ấn Độ, Trung Hoa và Hồi giáo.'
    ]
  },
  {
    id: 'g10-his-type-10',
    topicId: 'g10-his-topic-5',
    name: 'Thành tựu tiêu biểu của văn minh Đông Nam Á',
    slug: 'thanh-tuu-van-minh-dong-nam-a',
    description: 'Các công trình kiến trúc, tôn giáo, chữ viết và tác phẩm nghệ thuật đặc sắc của Đông Nam Á.',
    recognitionSigns: [
      'Hỏi về Quần thể Angkor Wat (Campuchia), Đền Borobudur (Indonesia), Chùa Thạt Luổng (Lào)'
    ],
    solvingSteps: [
      'Bước 1: Nắm vững các công trình kiến trúc gắn với các quốc gia cổ Đông Nam Á.',
      'Bước 2: Phân loại ảnh hưởng tôn giáo (Phật giáo hay Ấn Độ giáo) trong công trình đó.',
      'Bước 3: Lựa chọn đáp án đúng.'
    ],
    commonMistakes: [
      'Nhầm lẫn địa điểm của Angkor Wat (Campuchia) với Borobudur (Indonesia)'
    ],
    difficulty: 'medium',
    examFrequency: 'high',
    theory: [
      'Kiến trúc - điêu khắc Đông Nam Á đạt trình độ nghệ thuật rất cao.',
      'Angkor Wat (Campuchia) đại diện cho đỉnh cao kiến trúc Hindu giáo và Phật giáo Khmer.',
      'Borobudur (Indonesia) là quần thể kiến trúc Phật giáo đồ sộ bậc nhất thế giới.'
    ]
  },
  {
    id: 'g10-his-type-11',
    topicId: 'g10-his-topic-6',
    name: 'Các nền văn minh cổ trên đất nước Việt Nam',
    slug: 'cac-nen-van-minh-co-viet-nam',
    description: 'Đặc điểm và thành tựu của Văn minh Văn Lang - Âu Lạc, Chăm-pa và Phù Nam.',
    recognitionSigns: [
      'Hỏi về Trống đồng Đông Sơn, Kỹ thuật đúc đồng, Tháp Chăm, Văn hóa Óc Eo, Thương cảng Óc Eo'
    ],
    solvingSteps: [
      'Bước 1: Xác định nền văn minh được hỏi (Văn Lang - Âu Lạc ở Bắc Bộ, Chăm-pa ở Trung Bộ, Phù Nam ở Nam Bộ).',
      'Bước 2: Đối chiếu thành tựu vật chất và tinh thần đặc trưng của từng vùng.',
      'Bước 3: Chọn đáp án đúng.'
    ],
    commonMistakes: [
      'Nhầm không gian địa lý giữa 3 nền văn minh cổ trên đất nước Việt Nam'
    ],
    difficulty: 'medium',
    examFrequency: 'high',
    theory: [
      'Văn minh Văn Lang - Âu Lạc: Đỉnh cao là đỉnh đúc đồng Đông Sơn, trống đồng, thành Cổ Loa.',
      'Văn minh Chăm-pa: Nổi bật với kiến trúc tháp Chăm (Mỹ Sơn), chữ Chăm cổ.',
      'Văn minh Phù Nam: Văn hóa Óc Eo, thương cảng biển giao thương quốc tế sầm uất.'
    ]
  },
  {
    id: 'g10-his-type-12',
    topicId: 'g10-his-topic-6',
    name: 'Cơ sở & Thành tựu đỉnh cao của Văn minh Đại Việt',
    slug: 'van-minh-dai-viet',
    description: 'Hành trình phát triển và các thành tựu rực rỡ trên các lĩnh vực của Văn minh Đại Việt thời phong kiến.',
    recognitionSigns: [
      'Hỏi về Văn Miếu - Quốc Tử Giám, Luật Hồng Đức, Binh thư yếu lược, Chữ Nôm, Thăng Long'
    ],
    solvingSteps: [
      'Bước 1: Phân tích cơ sở hình thành (kế thừa truyền thống Đông Sơn + tinh thần tự lập tự cường).',
      'Bước 2: Tổng hợp thành tựu: Chính trị (nhà nước pháp quyền phong kiến), Giáo dục (thi cử Nho học), Văn hóa - Nghệ thuật.',
      'Bước 3: Lựa chọn đáp án đúng.'
    ],
    commonMistakes: [
      'Cho rằng Văn minh Đại Việt chỉ sao chép hoàn toàn mô hình phong kiến Trung Hoa mà không có sáng tạo độc lập'
    ],
    difficulty: 'hard',
    examFrequency: 'high',
    theory: [
      'Văn minh Đại Việt phát triển rực rỡ qua các triều đại Lý, Trần, Lê Sơ.',
      'Thành tựu tiêu biểu: Văn Miếu - Quốc Tử Giám (1070 - 1076), Luật Hồng Đức (Bộ luật Quốc triều hình luật thời Lê Sơ), Chữ Nôm, các công trình Báo Thiên, Phổ Minh, Tam Chúc...'
    ]
  },
  {
    id: 'g10-his-type-13',
    topicId: 'g10-his-topic-7',
    name: 'Đời sống vật chất & tinh thần cộng đồng dân tộc Việt Nam',
    slug: 'doi-song-cong-dong-cac-dan-toc',
    description: 'Nét đặc sắc trong đời sống văn hóa, phong tục, lễ hội của 54 dân tộc Việt Nam.',
    recognitionSigns: [
      'Hỏi về nhà sàn, trang phục thổ cẩm, cồng chiêng Tây Nguyên, Hò/Lý Nam Bộ, lễ hội Cầu ngư'
    ],
    solvingSteps: [
      'Bước 1: Xác định khu vực văn hóa (Tây Bắc, Tây Nguyên, Đồng bằng Bắc Bộ, Nam Bộ...).',
      'Bước 2: Phân tích đặc điểm thích ứng với tự nhiên và đời sống tinh thần.',
      'Bước 3: Chọn câu trả lời đúng.'
    ],
    commonMistakes: [
      'Đánh giá thấp vai trò của văn hóa các dân tộc thiểu số trong bức tranh tổng thể văn hóa Việt Nam'
    ],
    difficulty: 'easy',
    examFrequency: 'medium',
    theory: [
      'Cộng đồng 54 dân tộc Việt Nam có nền văn hóa đa dạng, thống nhất trong đa dạng.',
      'Không không gian văn hóa cồng chiêng Tây Nguyên đã được UNESCO công nhận là Kiệt tác di sản truyền khẩu và phi vật thể của nhân loại.'
    ]
  },
  {
    id: 'g10-his-type-14',
    topicId: 'g10-his-topic-7',
    name: 'Khối đại đoàn kết dân tộc trong lịch sử Việt Nam',
    slug: 'khoi-dai-doan-ket-dan-toc',
    description: 'Truyền thống đoàn kết, giữ nước và vai trò chiến lược của khối đại đoàn kết dân tộc.',
    recognitionSigns: [
      'Hỏi về Hội nghị Diên Hồng, truyền thống "Nhiễu điều phủ lấy giá gương", chính sách đoàn kết dân tộc'
    ],
    solvingSteps: [
      'Bước 1: Phân tích nguyên nhân thắng lợi của các cuộc kháng chiến chống ngoại xâm ➔ Sức mạnh đại đoàn kết toàn dân.',
      'Bước 2: Đánh giá vai trò của khối đại đoàn kết trong sự nghiệp xây dựng và bảo vệ Tổ quốc.',
      'Bước 3: Chọn đáp án chính xác.'
    ],
    commonMistakes: [
      'Cho rằng chiến thắng lịch sử chỉ nhờ vào tài quân sự của tướng lĩnh mà quên mất sức mạnh đoàn kết toàn dân'
    ],
    difficulty: 'medium',
    examFrequency: 'high',
    theory: [
      'Đoàn kết là truyền thống quý báu, là nhân tố quyết định mọi thắng lợi của dân tộc Việt Nam trong lịch sử dựng nước và giữ nước.'
    ]
  }
];
