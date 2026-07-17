import { QuestionType } from '@/types';

export const g10BiologyModule2QuestionTypes: QuestionType[] = [
  {
    id: 'bio10-qt21', topicId: 'bio10-t2', name: 'Học thuyết tế bào', slug: 'hoc-thuyet-te-bao',
    description: 'Nhận diện nội dung học thuyết tế bào và vận dụng để giải thích tính thống nhất của thế giới sống.', exampleQuestionId: 'bio10-m2-q001',
    recognitionSigns: ['Đề hỏi đơn vị cấu trúc–chức năng, nguồn gốc tế bào hoặc tính thống nhất sinh giới.', 'Đề đưa một quan sát và yêu cầu xác định nó hỗ trợ nội dung nào của học thuyết tế bào.'],
    solvingSteps: ['Xác định phát biểu thuộc cấu tạo, chức năng hay nguồn gốc tế bào.', 'Đối chiếu ba ý cốt lõi của học thuyết tế bào.', 'Loại phát biểu tuyệt đối hóa kích thước hoặc cho rằng tế bào tự sinh từ vật chất không sống.'],
    commonMistakes: ['Cho rằng cơ thể lớn được tạo bởi tế bào lớn hơn.', 'Đồng nhất virus với tế bào.'], difficulty: 'easy', examFrequency: 'medium'
  },
  {
    id: 'bio10-qt22', topicId: 'bio10-t2', name: 'Cấu trúc tế bào nhân sơ', slug: 'cau-truc-te-bao-nhan-so',
    description: 'Nhận diện vùng nhân, plasmid, ribosome, thành tế bào, vỏ nhầy, roi và giải thích kích thước nhỏ của tế bào nhân sơ.', exampleQuestionId: 'bio10-m2-q005',
    recognitionSigns: ['Đề nêu DNA vòng ở vùng nhân, ribosome nhỏ hoặc không có bào quan có màng.', 'Đề mô tả vi khuẩn và hỏi chức năng của thành, vỏ nhầy, roi, pili hoặc plasmid.'],
    solvingSteps: ['Xác định có nhân được bao bởi màng và bào quan có màng hay không.', 'Nối từng cấu trúc nhân sơ với chức năng trực tiếp.', 'Không suy “không có nhân hoàn chỉnh” thành “không có DNA hay tổ chức bên trong”.'],
    commonMistakes: ['Cho rằng tế bào nhân sơ không có DNA.', 'Nhầm ribosome với bào quan có màng.'], difficulty: 'medium', examFrequency: 'high'
  },
  {
    id: 'bio10-qt23', topicId: 'bio10-t2', name: 'Màng sinh chất, thành tế bào và tế bào chất', slug: 'mang-thanh-te-bao-te-bao-chat',
    description: 'Phân tích mô hình khảm động, tính thấm chọn lọc, vai trò thành tế bào và môi trường tế bào chất.', exampleQuestionId: 'bio10-m2-q009',
    recognitionSigns: ['Đề nhắc lớp kép phospholipid, protein màng, carbohydrate màng hoặc tính thấm chọn lọc.', 'Đề yêu cầu phân biệt màng sinh chất với thành tế bào hoặc giải thích hậu quả tổn thương màng.'],
    solvingSteps: ['Xác định cấu trúc đang hỏi là màng, thành hay tế bào chất.', 'Nối thành phần phân tử với tính chất cơ học, vận chuyển hoặc nhận tín hiệu.', 'Đối chiếu loại tế bào vì thành tế bào có thành phần khác nhau và tế bào động vật không có thành.'],
    commonMistakes: ['Coi màng sinh chất là lớp cứng bất động.', 'Cho rằng mọi tế bào đều có thành cellulose.'], difficulty: 'medium', examFrequency: 'high'
  },
  {
    id: 'bio10-qt24', topicId: 'bio10-t2', name: 'Nhân tế bào và điều khiển hoạt động', slug: 'nhan-te-bao-dieu-khien-hoat-dong',
    description: 'Nhận diện màng nhân, lỗ nhân, chromatin, nucleolus và suy luận vai trò nhân trong biểu hiện thông tin.', exampleQuestionId: 'bio10-m2-q013',
    recognitionSigns: ['Đề nêu màng kép có lỗ, chromatin, nucleolus hoặc trao đổi nhân–tế bào chất.', 'Đề mô tả loại bỏ, thay nhân hoặc tổn thương nhân rồi hỏi hậu quả.'],
    solvingSteps: ['Xác định thành phần nhân được nêu.', 'Nối DNA/chromatin với lưu giữ thông tin, nucleolus với tạo thành phần ribosome, lỗ nhân với trao đổi.', 'Khi suy luận hậu quả, lần theo chuỗi thông tin gene → RNA/protein → hoạt động tế bào.'],
    commonMistakes: ['Cho rằng nhân trực tiếp thực hiện mọi phản ứng trao đổi chất.', 'Nhầm nucleolus là nơi chứa toàn bộ DNA.'], difficulty: 'medium', examFrequency: 'high'
  },
  {
    id: 'bio10-qt3', topicId: 'bio10-t2', name: 'Bào quan và hệ thống nội màng', slug: 'bao-quan-he-thong-noi-mang',
    description: 'Nhận diện bào quan qua cấu trúc–chức năng và phân tích sự phối hợp trong sản xuất, biến đổi, vận chuyển và phân giải.', exampleQuestionId: 'bio10-q3',
    recognitionSigns: ['Đề cung cấp số lớp màng, cấu trúc đặc trưng hoặc chức năng để nhận diện bào quan.', 'Đề yêu cầu xếp đường đi của protein hoặc dự đoán hậu quả khi một bào quan bị tổn thương.'],
    solvingSteps: ['Gạch chân dấu hiệu cấu trúc và chức năng đặc hiệu.', 'Nhận diện bào quan trực tiếp rồi đặt nó vào chuỗi phối hợp với bào quan khác.', 'Kiểm tra loại tế bào để loại các cấu trúc không tồn tại.'],
    commonMistakes: ['Học thuộc mỗi bào quan chỉ có đúng một chức năng.', 'Cho rằng bào quan hoạt động độc lập.'], difficulty: 'medium', examFrequency: 'high'
  },
  {
    id: 'bio10-qt25', topicId: 'bio10-t2', name: 'Tế bào chuyên hóa và cấu trúc thích nghi', slug: 'te-bao-chuyen-hoa-cau-truc-thich-nghi',
    description: 'Suy luận bào quan hoặc cấu trúc phát triển từ chức năng chuyên hóa của tế bào.', exampleQuestionId: 'bio10-m2-q020',
    recognitionSigns: ['Đề mô tả tế bào tiết protein, co cơ, hấp thu, quang hợp hoặc vận chuyển oxygen.', 'Đề hỏi bào quan nào nhiều, cấu trúc nào phát triển hoặc vì sao tế bào mất một cấu trúc.'],
    solvingSteps: ['Xác định nhiệm vụ nổi bật và loại sản phẩm/năng lượng cần thiết.', 'Nối nhiệm vụ với bào quan hoặc hình dạng hỗ trợ trực tiếp.', 'Giải thích theo chuỗi cấu trúc phát triển → quá trình hiệu quả hơn → chức năng chuyên hóa.'],
    commonMistakes: ['Cho rằng mọi tế bào nhân thực có số lượng bào quan giống nhau.', 'Chọn bào quan theo tên quen thuộc thay vì chức năng.'], difficulty: 'medium', examFrequency: 'high'
  },
  {
    id: 'bio10-qt26', topicId: 'bio10-t2', name: 'So sánh các kiểu tế bào', slug: 'so-sanh-cac-kieu-te-bao',
    description: 'So sánh nhân sơ–nhân thực và thực vật–động vật theo tiêu chí cấu trúc, vật chất di truyền và bào quan.', exampleQuestionId: 'bio10-m2-q024',
    recognitionSigns: ['Đề yêu cầu tìm điểm giống, điểm khác hoặc phân loại một tế bào từ tập hợp đặc điểm.', 'Đề đưa bảng tiêu chí về nhân, ribosome, thành tế bào, chloroplast, vacuole hoặc kích thước.'],
    solvingSteps: ['Xác định cặp kiểu tế bào cần so sánh.', 'Lập tiêu chí cố định rồi kiểm tra từng đặc điểm, tránh so sánh lệch tiêu chí.', 'Phân biệt đặc điểm phổ biến với đặc điểm tuyệt đối vì có các ngoại lệ sinh học.'],
    commonMistakes: ['Cho rằng chỉ tế bào thực vật mới có mitochondria.', 'Cho rằng mọi tế bào nhân sơ đều có roi.'], difficulty: 'medium', examFrequency: 'high'
  },
  {
    id: 'bio10-qt27', topicId: 'bio10-t2', name: 'Kính hiển vi và nhận diện ảnh tế bào', slug: 'kinh-hien-vi-nhan-dien-anh-te-bao',
    description: 'Lựa chọn thao tác làm tiêu bản, sử dụng kính, tính kích thước và diễn giải ảnh tế bào.', exampleQuestionId: 'bio10-m2-q028',
    recognitionSigns: ['Đề hỏi thứ tự lấy nét, chuyển vật kính, làm tiêu bản hoặc xử lí sự cố ảnh.', 'Đề cho độ phóng đại, đường kính trường nhìn, thanh tỉ lệ hoặc đặc điểm ảnh để nhận diện tế bào.'],
    solvingSteps: ['Xác định mục tiêu là thao tác, đo kích thước hay nhận diện cấu trúc.', 'Nếu thao tác, bắt đầu bằng vật kính nhỏ và lấy nét an toàn; nếu đo, lập tỉ lệ theo thanh chuẩn.', 'Phân biệt dữ kiện quan sát được với suy luận vượt quá độ phân giải của ảnh.'],
    commonMistakes: ['Bắt đầu bằng vật kính lớn rồi dùng ốc chỉnh thô.', 'Dùng độ phóng đại thay cho thanh tỉ lệ khi kích thước ảnh đã thay đổi.'], difficulty: 'medium', examFrequency: 'high'
  }
];
