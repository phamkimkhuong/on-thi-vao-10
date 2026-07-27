import type { QuestionType } from '@/types';
import { chem11NitrogenSulfurTheoryResources } from './theoryResources';

export const g11ChemistryNitrogenSulfurQuestionTypes: QuestionType[] = [
  {
    id: 'chem11-qt15',
    topicId: 'chem11-t2',
    name: 'Trạng thái tự nhiên, cấu tạo và ứng dụng của nitrogen',
    slug: 'trang-thai-cau-tao-ung-dung-nitrogen',
    description: 'Nhận diện dạng tồn tại, giải thích tính trơ tương đối của N₂ và chọn ứng dụng phù hợp cho nitrogen khí hoặc lỏng.',
    exampleQuestionId: 'chem11-ns-q001',
    theory: [
      'Trong tự nhiên, nitrogen tồn tại chủ yếu dưới dạng $N_2$ trong khí quyển và dưới dạng hợp chất trong đất, nước, cơ thể sống.',
      'Phân tử $N_2$ có liên kết ba $N\\equiv N$ rất bền. Muốn phản ứng phải cung cấp đủ năng lượng để phá vỡ hoặc làm suy yếu liên kết này.',
      'Nitrogen khí được dùng tạo môi trường trơ tương đối; nitrogen lỏng được dùng làm lạnh nhanh nhờ nhiệt độ sôi rất thấp.'
    ],
    recognitionSigns: [
      'Đề hỏi nitrogen tồn tại ở đâu hoặc dưới dạng đơn chất/hợp chất nào.',
      'Đề yêu cầu giải thích tính kém hoạt động của N₂ ở nhiệt độ thường.',
      'Đề nêu bảo quản, môi trường trơ, cấp đông hoặc nghiên cứu nhiệt độ thấp.'
    ],
    solvingSteps: [
      'Xác định câu hỏi thuộc trạng thái tự nhiên, cấu tạo–tính trơ hay ứng dụng.',
      'Nối dữ kiện với đặc điểm quyết định: liên kết ba bền, tính trơ tương đối hoặc nhiệt độ sôi rất thấp.',
      'Chọn kết luận đúng phạm vi; không biến “kém hoạt động” thành “không bao giờ phản ứng”.'
    ],
    commonMistakes: [
      'Cho rằng nitrogen tự nhiên chỉ có trong không khí.',
      'Giải thích tính trơ bằng liên kết đơn hoặc bằng việc N₂ không có electron.',
      'Quy mọi ứng dụng của nitrogen lỏng cho tính trơ mà bỏ qua khả năng làm lạnh.'
    ],
    difficulty: 'medium',
    examFrequency: 'high',
    subTypes: [
      {
        id: 'chem11-ns-st-natural',
        name: 'Trạng thái tự nhiên của nitrogen',
        example: 'Phân loại nitrogen tự do trong khí quyển và nitrogen liên kết trong nitrate hoặc protein.',
        recognitionSigns: ['Có dữ kiện về khí quyển, đất, nước hoặc cơ thể sống.'],
        targetQuestionCount: 4
      },
      {
        id: 'chem11-ns-st-bond-inertness',
        name: 'Liên kết ba và tính trơ tương đối',
        example: 'Giải thích vì sao N₂ kém hoạt động ở nhiệt độ thường nhưng phản ứng ở nhiệt độ cao.',
        recognitionSigns: ['Hỏi về công thức Lewis, loại liên kết hoặc năng lượng hoạt hóa.'],
        targetQuestionCount: 4
      },
      {
        id: 'chem11-ns-st-applications',
        name: 'Ứng dụng nitrogen khí và lỏng',
        example: 'Chọn N₂ khí để tạo môi trường trơ hoặc N₂ lỏng để cấp đông nhanh.',
        recognitionSigns: ['Bối cảnh bảo quản, công nghiệp, y sinh hoặc nghiên cứu nhiệt độ thấp.'],
        targetQuestionCount: 4
      }
    ],
    practiceCoverage: {
      targetQuestionCount: 12,
      minimumQuestionsPerSubType: 4,
      requiredPracticeRoles: ['guided', 'near_transfer', 'misconception_check', 'far_transfer'],
      requiredRepresentations: ['text', 'equation'],
      masteryHoldoutCount: 3
    }
  },
  {
    id: 'chem11-qt16',
    topicId: 'chem11-t2',
    name: 'Phản ứng của nitrogen và quá trình tạo nitrate tự nhiên',
    slug: 'phan-ung-nitrogen-tao-nitrate-tu-nhien',
    description: 'Viết, phân tích phản ứng của N₂ với H₂/O₂ và giải thích chuỗi tạo nitrate trong khí quyển khi có sấm sét.',
    exampleQuestionId: 'chem11-ns-q013',
    theory: [
      'Ở nhiệt độ cao và điều kiện thích hợp: $N_2+3H_2\\rightleftharpoons2NH_3$. Nitrogen giảm số oxi hóa từ 0 xuống −3 nên N₂ là chất oxi hóa.',
      'Ở nhiệt độ rất cao: $N_2+O_2\\rightleftharpoons2NO$. Nitrogen tăng số oxi hóa từ 0 lên +2 nên N₂ là chất khử.',
      'Sấm sét cung cấp năng lượng tạo NO; NO bị oxi hóa thành NO₂, tiếp tục tạo nitric acid/nitrate rồi được nước mưa đưa xuống đất.'
    ],
    recognitionSigns: [
      'Đề cho N₂ phản ứng với H₂ hoặc O₂ và yêu cầu phương trình, điều kiện hay vai trò oxi hóa–khử.',
      'Đề mô tả sấm sét, mưa giông, nitrate trong đất hoặc yêu cầu sắp xếp chuỗi chuyển hóa.'
    ],
    solvingSteps: [
      'Viết đúng phương trình và điều kiện phản ứng; không suy diễn phản ứng xảy ra dễ ở nhiệt độ thường.',
      'Xác định số oxi hóa của nitrogen trước và sau phản ứng để kết luận vai trò.',
      'Nếu là bối cảnh sấm sét, lần theo chuỗi $N_2\\rightarrow NO\\rightarrow NO_2\\rightarrow HNO_3/NO_3^-$.'
    ],
    commonMistakes: [
      'Viết sản phẩm trực tiếp là NO₂ khi N₂ phản ứng với O₂ ở nhiệt độ rất cao.',
      'Cho rằng N₂ luôn là chất oxi hóa hoặc luôn là chất khử.',
      'Bỏ qua các chất trung gian và nói sấm sét tạo nitrate trực tiếp.'
    ],
    difficulty: 'medium',
    examFrequency: 'high',
    subTypes: [
      {
        id: 'chem11-ns-st-n2-h2',
        name: 'Phản ứng N₂ với H₂',
        example: 'Viết phương trình tạo NH₃ và xác định vai trò của N₂.',
        recognitionSigns: ['Có nitrogen, hydrogen, ammonia hoặc quy trình Haber.'],
        targetQuestionCount: 4
      },
      {
        id: 'chem11-ns-st-n2-o2',
        name: 'Phản ứng N₂ với O₂',
        example: 'Viết phương trình tạo NO ở nhiệt độ rất cao và phân tích số oxi hóa.',
        recognitionSigns: ['Có nitrogen, oxygen, nhiệt độ rất cao hoặc tia lửa điện.'],
        targetQuestionCount: 4
      },
      {
        id: 'chem11-ns-st-nitrate-rain',
        name: 'Chuỗi tạo nitrate từ sấm sét',
        example: 'Sắp xếp các bước từ N₂ trong không khí đến nitrate trong đất.',
        recognitionSigns: ['Có sấm sét, mưa giông, NOx, nitric acid hoặc nitrate trong đất.'],
        targetQuestionCount: 4
      }
    ],
    practiceCoverage: {
      targetQuestionCount: 12,
      minimumQuestionsPerSubType: 4,
      requiredPracticeRoles: ['guided', 'near_transfer', 'misconception_check', 'far_transfer'],
      requiredRepresentations: ['text', 'equation'],
      masteryHoldoutCount: 3
    }
  },
  {
    id: 'chem11-qt17',
    topicId: 'chem11-t2',
    name: 'Cấu tạo, tính tan và tính base của ammonia',
    slug: 'cau-tao-tinh-tan-tinh-base-ammonia',
    description: 'Biểu diễn cấu tạo NH₃, giải thích hình học và độ tan, viết phương trình minh họa tính base yếu.',
    exampleQuestionId: 'chem11-ns-q025',
    theory: [
      'Trong công thức Lewis của NH₃, nguyên tử N tạo ba liên kết N–H và còn một cặp electron chưa liên kết; phân tử có hình chóp tam giác và phân cực.',
      'NH₃ tan nhiều trong nước nhờ tương tác mạnh với nước, gồm liên kết hydrogen và cân bằng $NH_3+H_2O\\rightleftharpoons NH_4^++OH^-$.',
      'NH₃ là base Brønsted yếu: nhận proton từ nước hoặc acid; phản ứng với acid tạo muối ammonium.'
    ],
    recognitionSigns: [
      'Đề hỏi công thức Lewis, cặp electron chưa liên kết, hình học hoặc tính phân cực của NH₃.',
      'Đề mô tả thí nghiệm vòi phun ammonia, độ tan hoặc dung dịch làm quỳ tím hóa xanh.',
      'Đề yêu cầu viết phản ứng NH₃ với nước hay acid và xác định vai trò acid–base.'
    ],
    solvingSteps: [
      'Xác định vấn đề thuộc cấu tạo, tính tan hay tính base.',
      'Nối cấu tạo phân cực và cặp electron tự do với tính chất được hỏi.',
      'Viết đúng phương trình cân bằng; dùng mũi tên hai chiều với nước và phản ứng tạo muối với acid.'
    ],
    commonMistakes: [
      'Cho NH₃ có hình tam giác phẳng.',
      'Giải thích độ tan chỉ bằng khối lượng hoặc khối lượng riêng.',
      'Viết NH₃ phân li hoàn toàn như một base mạnh chứa sẵn OH⁻.'
    ],
    difficulty: 'medium',
    examFrequency: 'high',
    subTypes: [
      {
        id: 'chem11-ns-st-nh3-structure',
        name: 'Công thức Lewis và hình học NH₃',
        example: 'Xác định cặp electron chưa liên kết và hình chóp tam giác.',
        recognitionSigns: ['Có sơ đồ electron, liên kết N–H hoặc yêu cầu hình học phân tử.'],
        targetQuestionCount: 4
      },
      {
        id: 'chem11-ns-st-nh3-solubility',
        name: 'Tính tan và tính chất vật lí',
        example: 'Giải thích thí nghiệm vòi phun ammonia.',
        recognitionSigns: ['Có nước, độ tan, vòi phun hoặc hiện tượng đổi màu chỉ thị.'],
        targetQuestionCount: 4
      },
      {
        id: 'chem11-ns-st-nh3-base',
        name: 'Tính base của ammonia',
        example: 'Viết phản ứng NH₃ nhận proton từ nước hoặc HCl.',
        recognitionSigns: ['Có acid, nước, quỳ tím, ion NH₄⁺ hoặc muối ammonium.'],
        targetQuestionCount: 4
      }
    ],
    practiceCoverage: {
      targetQuestionCount: 12,
      minimumQuestionsPerSubType: 4,
      requiredPracticeRoles: ['guided', 'near_transfer', 'misconception_check', 'far_transfer'],
      requiredRepresentations: ['text', 'equation', 'experiment'],
      masteryHoldoutCount: 3
    }
  },
  {
    id: 'chem11-qt18',
    topicId: 'chem11-t2',
    name: 'Tính khử, tổng hợp công nghiệp và ứng dụng ammonia',
    slug: 'tinh-khu-tong-hop-ung-dung-ammonia',
    description: 'Phân tích tính khử của NH₃, vận dụng cân bằng–tốc độ cho quy trình Haber và liên hệ ứng dụng, an toàn.',
    exampleQuestionId: 'chem11-ns-q037',
    theory: [
      'Trong NH₃, N có số oxi hóa −3 nên có thể bị oxi hóa lên 0 hoặc số oxi hóa dương; NH₃ thể hiện tính khử.',
      'Phản ứng Haber $N_2+3H_2\\rightleftharpoons2NH_3$ là phản ứng tỏa nhiệt và giảm số mol khí theo chiều thuận. Áp suất cao có lợi; nhiệt độ và xúc tác được chọn để cân bằng hiệu suất với tốc độ.',
      'NH₃ được dùng sản xuất phân bón, nitric acid, làm chất làm lạnh hoặc dung môi trong những hệ phù hợp; khí NH₃ độc, gây kích ứng và cần quy trình an toàn.'
    ],
    recognitionSigns: [
      'Đề cho NH₃ phản ứng với O₂ hoặc oxide kim loại và hỏi vai trò oxi hóa–khử.',
      'Đề cho điều kiện áp suất, nhiệt độ, xúc tác, tách NH₃ hoặc tuần hoàn khí trong quy trình Haber.',
      'Đề yêu cầu ghép tính chất với ứng dụng hay xử lí tình huống rò rỉ NH₃.'
    ],
    solvingSteps: [
      'Nếu là oxi hóa–khử, xác định số oxi hóa N trước và sau rồi cân bằng phương trình.',
      'Nếu là Haber, xét riêng ảnh hưởng đến cân bằng và ảnh hưởng đến tốc độ; không đồng nhất hai khái niệm.',
      'Nếu là ứng dụng, ghép đúng tính chất và luôn xét giới hạn an toàn.'
    ],
    commonMistakes: [
      'Cho NH₃ là chất oxi hóa chỉ vì có nitrogen.',
      'Cho xúc tác làm tăng hiệu suất cân bằng hoặc nhiệt độ càng thấp càng tối ưu tuyệt đối.',
      'Suy diễn độ tan lớn nghĩa là có thể tự xử lí mọi rò rỉ bằng nước.'
    ],
    difficulty: 'medium',
    examFrequency: 'high',
    subTypes: [
      {
        id: 'chem11-ns-st-nh3-reducing',
        name: 'Tính khử của NH₃',
        example: 'Phân tích phản ứng NH₃ với O₂ hoặc CuO.',
        recognitionSigns: ['Có thay đổi số oxi hóa của N từ −3 lên mức cao hơn.'],
        targetQuestionCount: 4
      },
      {
        id: 'chem11-ns-st-haber',
        name: 'Tổng hợp ammonia theo Haber',
        example: 'Giải thích lựa chọn áp suất, nhiệt độ, xúc tác và tách sản phẩm.',
        recognitionSigns: ['Có cân bằng N₂–H₂–NH₃ hoặc dữ kiện dây chuyền công nghiệp.'],
        targetQuestionCount: 4
      },
      {
        id: 'chem11-ns-st-nh3-applications',
        name: 'Ứng dụng và an toàn ammonia',
        example: 'Ghép NH₃ với sản xuất phân bón, chất làm lạnh hoặc biện pháp ứng phó.',
        recognitionSigns: ['Có bối cảnh sản xuất, kho lạnh, rò rỉ hoặc bảo hộ.'],
        targetQuestionCount: 4
      }
    ],
    practiceCoverage: {
      targetQuestionCount: 12,
      minimumQuestionsPerSubType: 4,
      requiredPracticeRoles: ['guided', 'near_transfer', 'misconception_check', 'far_transfer'],
      requiredRepresentations: ['text', 'equation', 'table'],
      masteryHoldoutCount: 3
    }
  },
  {
    id: 'chem11-qt19',
    topicId: 'chem11-t2',
    name: 'Tính chất cơ bản của muối ammonium',
    slug: 'tinh-chat-muoi-ammonium',
    description: 'Nhận diện sự tan–phân li, phản ứng với kiềm và sự nhiệt phân của các muối ammonium.',
    exampleQuestionId: 'chem11-ns-q049',
    theory: [
      'Nhiều muối ammonium tan tốt trong nước và phân li tạo ion $NH_4^+$ cùng anion tương ứng.',
      'Ion ammonium tác dụng với hydroxide: $NH_4^++OH^-\\rightarrow NH_3+H_2O$.',
      'Muối ammonium dễ bị nhiệt phân, nhưng sản phẩm phụ thuộc anion và điều kiện; phải viết theo từng muối cụ thể.'
    ],
    recognitionSigns: [
      'Công thức chứa $NH_4^+$ và đề hỏi sự tan hoặc phương trình phân li.',
      'Đề cho muối ammonium tác dụng với NaOH/Ca(OH)₂ và có khí ammonia.',
      'Đề có kí hiệu đun nóng hoặc yêu cầu sản phẩm nhiệt phân.'
    ],
    solvingSteps: [
      'Xác định ion ammonium và anion trong công thức muối.',
      'Chọn quy tắc tương ứng: phân li, phản ứng ion với OH⁻ hoặc nhiệt phân.',
      'Cân bằng nguyên tử, điện tích và kiểm tra trạng thái/sản phẩm thay vì dùng một công thức chung.'
    ],
    commonMistakes: [
      'Đồng nhất $NH_4^+$ với NH₃.',
      'Cho phản ứng với kiềm tạo H₂.',
      'Cho mọi muối ammonium cùng sản phẩm nhiệt phân.'
    ],
    difficulty: 'medium',
    examFrequency: 'high',
    subTypes: [
      {
        id: 'chem11-ns-st-ammonium-dissociation',
        name: 'Sự tan và phân li',
        example: 'Viết $(NH_4)_2SO_4\\rightarrow2NH_4^++SO_4^{2-}$.',
        recognitionSigns: ['Có dung dịch muối ammonium và yêu cầu ion tạo thành.'],
        targetQuestionCount: 4
      },
      {
        id: 'chem11-ns-st-ammonium-alkali',
        name: 'Phản ứng với kiềm',
        example: 'Viết $NH_4Cl+NaOH\\rightarrow NH_3+NaCl+H_2O$.',
        recognitionSigns: ['Có NH₄⁺, OH⁻, làm ấm và khí NH₃.'],
        targetQuestionCount: 4
      },
      {
        id: 'chem11-ns-st-ammonium-thermal',
        name: 'Nhiệt phân muối ammonium',
        example: 'Phân tích sản phẩm khi đun nóng từng muối cụ thể.',
        recognitionSigns: ['Có kí hiệu nhiệt độ hoặc cụm “đun nóng muối ammonium”.'],
        targetQuestionCount: 4
      }
    ],
    practiceCoverage: {
      targetQuestionCount: 12,
      minimumQuestionsPerSubType: 4,
      requiredPracticeRoles: ['guided', 'near_transfer', 'misconception_check', 'far_transfer'],
      requiredRepresentations: ['text', 'equation'],
      masteryHoldoutCount: 3
    }
  },
  {
    id: 'chem11-qt20',
    topicId: 'chem11-t2',
    name: 'Nhận biết ion ammonium, ứng dụng và an toàn',
    slug: 'nhan-biet-ammonium-ung-dung-an-toan',
    description: 'Thiết kế và đọc kết quả thí nghiệm nhận biết NH₄⁺ trong phân đạm; đánh giá ứng dụng và rủi ro của muối ammonium.',
    exampleQuestionId: 'chem11-ns-q061',
    theory: [
      'Để nhận biết $NH_4^+$: thêm dung dịch kiềm, làm ấm thận trọng; khí NH₃ làm giấy quỳ tím ẩm hóa xanh.',
      'Không nhận biết NH₄⁺ bằng cách ngửi trực tiếp. Cần mẫu trắng/đối chứng và thao tác an toàn khi phân tích thực nghiệm.',
      'Một số muối ammonium dùng làm phân bón; việc bảo quản, gia nhiệt và phối trộn phải theo hướng dẫn vì rủi ro phụ thuộc từng muối.'
    ],
    recognitionSigns: [
      'Đề hỏi thuốc thử, dấu hiệu, phương trình ion hoặc trình tự nhận biết NH₄⁺.',
      'Đề cho bảng hiện tượng của nhiều mẫu phân bón và yêu cầu kết luận.',
      'Đề nêu bảo quản ammonium nitrate, phối trộn phân bón hoặc đánh giá an toàn.'
    ],
    solvingSteps: [
      'Chọn kiềm để chuyển $NH_4^+$ thành NH₃ và làm ấm nếu cần.',
      'Dùng chỉ thị ẩm để xác nhận tính base của khí; ghi cả hiện tượng, phương trình và kết luận.',
      'Trong tình huống ứng dụng, phân biệt lợi ích dinh dưỡng với yêu cầu bảo quản an toàn.'
    ],
    commonMistakes: [
      'Ngửi trực tiếp khí để nhận biết.',
      'Dùng quỳ tím khô hoặc kết luận chỉ từ việc “có khí”.',
      'Cho rằng mọi phân bón ammonium đều có cùng rủi ro và cách xử lí.'
    ],
    difficulty: 'medium',
    examFrequency: 'high',
    subTypes: [
      {
        id: 'chem11-ns-st-ammonium-identification',
        name: 'Nguyên tắc nhận biết NH₄⁺',
        example: 'Chọn NaOH và giấy quỳ tím ẩm.',
        recognitionSigns: ['Hỏi thuốc thử hoặc dấu hiệu đặc trưng của ion ammonium.'],
        targetQuestionCount: 4
      },
      {
        id: 'chem11-ns-st-ammonium-experiment',
        name: 'Quy trình và dữ liệu thí nghiệm',
        example: 'Phân tích bảng hiện tượng khi thử các mẫu phân đạm.',
        recognitionSigns: ['Có thao tác, đối chứng, bảng dữ liệu hoặc yêu cầu sửa thiết kế.'],
        targetQuestionCount: 4
      },
      {
        id: 'chem11-ns-st-ammonium-use-safety',
        name: 'Ứng dụng và an toàn',
        example: 'Đánh giá bảo quản phân ammonium và xử lí tình huống rủi ro.',
        recognitionSigns: ['Có phân bón, kho chứa, nhiệt, nhiễm bẩn hoặc phối trộn.'],
        targetQuestionCount: 4
      }
    ],
    practiceCoverage: {
      targetQuestionCount: 12,
      minimumQuestionsPerSubType: 4,
      requiredPracticeRoles: ['guided', 'near_transfer', 'misconception_check', 'far_transfer'],
      requiredRepresentations: ['text', 'experiment', 'table'],
      masteryHoldoutCount: 3
    }
  },
  {
    id: 'chem11-qt21',
    topicId: 'chem11-t2',
    name: 'Nguồn NOₓ và sự hình thành mưa acid',
    slug: 'nguon-nox-mua-acid',
    description: 'Phân loại nguồn NOₓ, biểu diễn chuỗi tạo nitric acid trong khí quyển và đọc dữ liệu tác động–kiểm soát phát thải.',
    exampleQuestionId: 'chem11-ns-q073',
    theory: [
      'NOₓ phát sinh từ nguồn tự nhiên như sấm sét và nguồn nhân sinh như động cơ, lò đốt nhiệt độ cao.',
      '$NO$ bị oxi hóa thành $NO_2$; $NO_2$ tiếp tục tham gia quá trình với oxygen và nước tạo nitric acid, góp phần gây mưa acid.',
      'Kiểm soát bền vững cần giảm NOₓ tại nguồn; xử lí hậu quả sau khi acid đã hình thành không thay thế kiểm soát phát thải.'
    ],
    recognitionSigns: [
      'Đề nêu động cơ, nhà máy nhiệt điện, lò đốt, sấm sét hoặc cháy rừng.',
      'Đề yêu cầu sắp xếp $NO\\rightarrow NO_2\\rightarrow HNO_3$ hoặc giải thích pH nước mưa giảm.',
      'Đề cho bảng nồng độ NOₓ, pH, mức ăn mòn hay yêu cầu chọn biện pháp giảm phát thải.'
    ],
    solvingSteps: [
      'Xác định nguồn tự nhiên hay nhân sinh và điều kiện nhiệt độ cao tạo NO.',
      'Lần theo chuỗi oxi hóa NO thành NO₂ rồi hình thành acid trong nước khí quyển.',
      'Nếu là dữ liệu/biện pháp, đối chiếu xu hướng và ưu tiên giảm phát thải tại nguồn.'
    ],
    commonMistakes: [
      'Cho mọi NOₓ chỉ do con người hoặc chỉ do tự nhiên.',
      'Viết NO tạo trực tiếp HNO₃ trong một bước.',
      'Đồng nhất mưa acid với nước mưa tự nhiên chứa CO₂.'
    ],
    difficulty: 'medium',
    examFrequency: 'high',
    subTypes: [
      {
        id: 'chem11-ns-st-nox-sources',
        name: 'Nguồn phát sinh NOₓ',
        example: 'Phân loại sấm sét, động cơ và lò đốt.',
        recognitionSigns: ['Có nguồn phát thải hoặc quá trình nhiệt độ cao.'],
        targetQuestionCount: 4
      },
      {
        id: 'chem11-ns-st-acid-rain-chain',
        name: 'Chuỗi tạo mưa acid',
        example: 'Sắp xếp $N_2\\rightarrow NO\\rightarrow NO_2\\rightarrow HNO_3$.',
        recognitionSigns: ['Có NO, NO₂, oxygen, nước mưa hoặc nitric acid.'],
        targetQuestionCount: 4
      },
      {
        id: 'chem11-ns-st-nox-environment',
        name: 'Dữ liệu, tác động và kiểm soát',
        example: 'Đọc xu hướng NOₓ–pH và chọn biện pháp giảm phát thải.',
        recognitionSigns: ['Có bảng số liệu môi trường, ăn mòn, hệ sinh thái hoặc công nghệ kiểm soát.'],
        targetQuestionCount: 4
      }
    ],
    practiceCoverage: {
      targetQuestionCount: 12,
      minimumQuestionsPerSubType: 4,
      requiredPracticeRoles: ['guided', 'near_transfer', 'misconception_check', 'far_transfer'],
      requiredRepresentations: ['text', 'equation', 'table'],
      masteryHoldoutCount: 3
    }
  },
  {
    id: 'chem11-qt22',
    topicId: 'chem11-t2',
    name: 'Cấu tạo và tính acid của nitric acid',
    slug: 'cau-tao-tinh-acid-nitric-acid',
    description: 'Xác định cấu tạo, số oxi hóa +5 của N và viết phản ứng acid của HNO₃ với các chất cơ bản.',
    exampleQuestionId: 'chem11-ns-q085',
    theory: [
      'Nitric acid có công thức $HNO_3$; nitrogen có số oxi hóa +5.',
      'HNO₃ là acid mạnh, phân li gần như hoàn toàn trong nước: $HNO_3\\rightarrow H^++NO_3^-$.',
      'Tính acid được minh họa bằng phản ứng với base, oxide base và carbonate tạo nitrate; cần tách khái niệm này khỏi tính oxi hóa.'
    ],
    recognitionSigns: [
      'Đề hỏi công thức, số oxi hóa của N hoặc ion tạo ra khi HNO₃ phân li.',
      'Đề cho NaOH, CuO, CaCO₃ và yêu cầu sản phẩm/phương trình.',
      'Đề yêu cầu phân biệt phản ứng acid–base với phản ứng oxi hóa–khử.'
    ],
    solvingSteps: [
      'Tính số oxi hóa hoặc viết sự phân li nếu câu hỏi thuộc cấu tạo.',
      'Với tính acid, xác định cation từ base/oxide/carbonate ghép với nitrate.',
      'Cân bằng H, O, điện tích và kiểm tra có hay không sự thay đổi số oxi hóa.'
    ],
    commonMistakes: [
      'Cho N trong HNO₃ có số oxi hóa +3.',
      'Viết nitrate bị phân li tiếp thành N và O.',
      'Gọi mọi phản ứng của HNO₃ là phản ứng oxi hóa–khử.'
    ],
    difficulty: 'medium',
    examFrequency: 'high',
    subTypes: [
      {
        id: 'chem11-ns-st-hno3-structure',
        name: 'Cấu tạo và số oxi hóa',
        example: 'Tính số oxi hóa của N trong HNO₃.',
        recognitionSigns: ['Có công thức HNO₃, cấu tạo hoặc số oxi hóa.'],
        targetQuestionCount: 4
      },
      {
        id: 'chem11-ns-st-hno3-dissociation',
        name: 'Sự phân li và tính acid mạnh',
        example: 'Viết $HNO_3\\rightarrow H^++NO_3^-$.',
        recognitionSigns: ['Có dung dịch, ion, pH định tính hoặc acid mạnh.'],
        targetQuestionCount: 4
      },
      {
        id: 'chem11-ns-st-hno3-acid-reactions',
        name: 'Phản ứng acid với base, oxide và carbonate',
        example: 'Viết phản ứng HNO₃ với NaOH, CuO hoặc CaCO₃.',
        recognitionSigns: ['Có trung hòa, oxide base, carbonate hoặc muối nitrate.'],
        targetQuestionCount: 4
      }
    ],
    practiceCoverage: {
      targetQuestionCount: 12,
      minimumQuestionsPerSubType: 4,
      requiredPracticeRoles: ['guided', 'near_transfer', 'misconception_check', 'far_transfer'],
      requiredRepresentations: ['text', 'equation'],
      masteryHoldoutCount: 3
    }
  },
  {
    id: 'chem11-qt23',
    topicId: 'chem11-t2',
    name: 'Tính oxi hóa mạnh, ứng dụng và an toàn HNO₃',
    slug: 'tinh-oxi-hoa-ung-dung-an-toan-hno3',
    description: 'Phân tích phản ứng oxi hóa–khử của HNO₃, sản phẩm theo điều kiện và vận dụng vào ứng dụng, an toàn.',
    exampleQuestionId: 'chem11-ns-q097',
    theory: [
      'N trong HNO₃ ở số oxi hóa +5 có thể nhận electron nên HNO₃ thể hiện tính oxi hóa mạnh.',
      'Với Cu trong phạm vi bài học: HNO₃ đặc thường cho $NO_2$, HNO₃ loãng thường cho $NO$; không giải phóng H₂.',
      'HNO₃ là acid ăn mòn và chất oxi hóa; ứng dụng, bảo quản, pha loãng phải tuân thủ quy trình an toàn.'
    ],
    recognitionSigns: [
      'Đề cho kim loại với HNO₃ và xuất hiện NO/NO₂ thay vì H₂.',
      'Đề yêu cầu cân bằng, xác định chất oxi hóa hoặc so sánh acid đặc–loãng.',
      'Đề nêu sản xuất phân bón, thuốc nổ, xử lí acid hoặc thao tác pha loãng.'
    ],
    solvingSteps: [
      'Xác định số oxi hóa của kim loại và nitrogen trước–sau phản ứng.',
      'Chọn sản phẩm khử đúng theo điều kiện được cho rồi cân bằng đầy đủ.',
      'Trong ứng dụng/an toàn, liên hệ đúng tính chất và không đưa ra thao tác trái quy trình.'
    ],
    commonMistakes: [
      'Cho kim loại với HNO₃ luôn tạo H₂.',
      'Cho mọi nồng độ HNO₃ đều tạo cùng NO₂.',
      'Rót nước nhanh vào acid đậm đặc khi pha loãng.'
    ],
    difficulty: 'medium',
    examFrequency: 'high',
    subTypes: [
      {
        id: 'chem11-ns-st-hno3-redox-role',
        name: 'Vai trò oxi hóa của HNO₃',
        example: 'Theo dõi N từ +5 xuống +4 hoặc +2.',
        recognitionSigns: ['Có thay đổi số oxi hóa và sản phẩm NOₓ.'],
        targetQuestionCount: 4
      },
      {
        id: 'chem11-ns-st-hno3-metal',
        name: 'Phản ứng với kim loại theo điều kiện',
        example: 'Phân biệt sản phẩm Cu với HNO₃ đặc và loãng.',
        recognitionSigns: ['Có kim loại, nồng độ acid và khí NO/NO₂.'],
        targetQuestionCount: 4
      },
      {
        id: 'chem11-ns-st-hno3-use-safety',
        name: 'Ứng dụng và an toàn nitric acid',
        example: 'Ghép tính chất với sản xuất và chọn thao tác pha loãng an toàn.',
        recognitionSigns: ['Có bối cảnh công nghiệp, nhãn oxi hóa–ăn mòn hoặc sự cố acid.'],
        targetQuestionCount: 4
      }
    ],
    practiceCoverage: {
      targetQuestionCount: 12,
      minimumQuestionsPerSubType: 4,
      requiredPracticeRoles: ['guided', 'near_transfer', 'misconception_check', 'far_transfer'],
      requiredRepresentations: ['text', 'equation', 'table'],
      masteryHoldoutCount: 3
    }
  },
  {
    id: 'chem11-qt24',
    topicId: 'chem11-t2',
    name: 'Phú dưỡng hóa: nguyên nhân, dữ liệu và hệ quả',
    slug: 'phu-duong-hoa-nguyen-nhan-he-qua',
    description: 'Nhận diện nguồn dưỡng chất, giải thích chuỗi suy giảm oxygen và đọc dữ liệu để chọn biện pháp giảm phú dưỡng.',
    exampleQuestionId: 'chem11-ns-q109',
    theory: [
      'Phú dưỡng hóa là sự giàu quá mức dưỡng chất, đặc biệt nitrogen và phosphorus, trong thủy vực.',
      'Dưỡng chất tăng làm tảo phát triển; khi sinh khối chết và bị phân hủy, oxygen hòa tan bị tiêu thụ, có thể gây thiếu oxygen và làm sinh vật chết.',
      'Biện pháp gốc là giảm dưỡng chất từ nước thải, phân bón và dòng chảy mặt; sục khí chỉ hỗ trợ hậu quả thiếu oxygen trong một số tình huống.'
    ],
    recognitionSigns: [
      'Đề nêu phân bón, nước thải, nitrate, phosphate hoặc tảo nở hoa.',
      'Đề cho chuỗi ánh sáng giảm, phân hủy tăng, DO giảm và cá chết.',
      'Đề có bảng nitrate/phosphate/chlorophyll/oxygen hòa tan hoặc yêu cầu chọn biện pháp.'
    ],
    solvingSteps: [
      'Xác định nguồn nitrogen/phosphorus đi vào thủy vực.',
      'Sắp xếp chuỗi sinh thái từ dưỡng chất đến tảo, phân hủy và thiếu oxygen.',
      'Đọc xu hướng dữ liệu rồi chọn biện pháp giảm dưỡng chất tại nguồn.'
    ],
    commonMistakes: [
      'Đồng nhất phú dưỡng với mưa acid.',
      'Cho tảo tăng luôn làm oxygen cao và có lợi lâu dài.',
      'Chỉ xử lí thiếu oxygen mà không giảm nguồn dưỡng chất.'
    ],
    difficulty: 'medium',
    examFrequency: 'high',
    subTypes: [
      {
        id: 'chem11-ns-st-eutrophication-causes',
        name: 'Nguồn và nguyên nhân',
        example: 'Nhận diện phân bón, nước thải giàu nitrate/phosphate.',
        recognitionSigns: ['Có nguồn N, P đi vào hồ, ao hoặc vùng ven biển.'],
        targetQuestionCount: 4
      },
      {
        id: 'chem11-ns-st-eutrophication-effects',
        name: 'Chuỗi hệ quả sinh thái',
        example: 'Sắp xếp tảo nở hoa → phân hủy → DO giảm → cá chết.',
        recognitionSigns: ['Có tảo, độ trong, oxygen hòa tan hoặc sinh vật chết.'],
        targetQuestionCount: 4
      },
      {
        id: 'chem11-ns-st-eutrophication-data',
        name: 'Đọc dữ liệu và giảm thiểu',
        example: 'So sánh hồ theo nitrate, phosphate, chlorophyll và DO.',
        recognitionSigns: ['Có bảng/đồ thị dữ liệu hoặc phương án quản lí lưu vực.'],
        targetQuestionCount: 4
      }
    ],
    practiceCoverage: {
      targetQuestionCount: 12,
      minimumQuestionsPerSubType: 4,
      requiredPracticeRoles: ['guided', 'near_transfer', 'misconception_check', 'far_transfer'],
      requiredRepresentations: ['text', 'table', 'equation'],
      masteryHoldoutCount: 3
    }
  },
  {
    id: 'chem11-qt25',
    topicId: 'chem11-t2',
    name: 'Trạng thái, thù hình, tính chất và ứng dụng của sulfur',
    slug: 'trang-thai-thu-hinh-tinh-chat-ung-dung-sulfur',
    description: 'Nhận diện dạng tồn tại, phân biệt hai dạng thù hình, mô tả tính chất vật lí và liên hệ ứng dụng–an toàn của sulfur.',
    exampleQuestionId: 'chem11-ns-q121',
    theory: [
      'Trong tự nhiên, sulfur tồn tại cả dạng đơn chất và dạng hợp chất, phổ biến trong các khoáng sulfide và sulfate.',
      'Sulfur tà phương và sulfur đơn tà là hai dạng thù hình của cùng nguyên tố; đều gồm các phân tử $S_8$ nhưng khác cấu trúc tinh thể và miền bền.',
      'Sulfur là chất rắn màu vàng, hầu như không tan trong nước; được dùng nhiều để sản xuất sulfuric acid, lưu hóa cao su và một số sản phẩm hóa học.'
    ],
    recognitionSigns: [
      'Đề hỏi sulfur tự do, sulfide, sulfate hoặc dạng tồn tại trong khoáng vật.',
      'Đề so sánh sulfur tà phương–đơn tà, nhiệt độ chuyển dạng hoặc cấu trúc tinh thể.',
      'Đề nêu màu sắc, độ tan, sản xuất sulfuric acid, lưu hóa cao su hoặc sử dụng sulfur an toàn.'
    ],
    solvingSteps: [
      'Xác định câu hỏi thuộc trạng thái tự nhiên, thù hình hay ứng dụng.',
      'Nối dữ kiện với đặc điểm đúng: cùng nguyên tố nhưng khác tinh thể; chất rắn vàng, ít tan trong nước.',
      'Với ứng dụng, chọn phương án phù hợp tính chất và loại bỏ cách dùng gây phát thải SO₂ không kiểm soát.'
    ],
    commonMistakes: [
      'Cho sulfur chỉ tồn tại ở dạng đơn chất.',
      'Coi hai dạng thù hình là hai nguyên tố khác nhau.',
      'Cho sulfur tan tốt trong nước hoặc đốt sulfur tùy ý quanh thực phẩm.'
    ],
    difficulty: 'medium',
    examFrequency: 'high',
    subTypes: [
      {
        id: 'chem11-ns-st-sulfur-natural',
        name: 'Trạng thái tự nhiên của sulfur',
        example: 'Phân loại sulfur tự do và sulfur trong khoáng sulfide/sulfate.',
        recognitionSigns: ['Có mỏ sulfur, khoáng pyrite, gypsum hoặc dạng tồn tại tự nhiên.'],
        targetQuestionCount: 4
      },
      {
        id: 'chem11-ns-st-sulfur-allotropes',
        name: 'Thù hình và tính chất vật lí',
        example: 'So sánh sulfur tà phương với sulfur đơn tà.',
        recognitionSigns: ['Có cấu trúc tinh thể, $S_8$, nhiệt độ hoặc tính chất vật lí.'],
        targetQuestionCount: 4
      },
      {
        id: 'chem11-ns-st-sulfur-applications',
        name: 'Ứng dụng và an toàn',
        example: 'Ghép sulfur với sản xuất H₂SO₄ hoặc lưu hóa cao su.',
        recognitionSigns: ['Có bối cảnh công nghiệp, cao su, bảo quản hoặc đốt sulfur.'],
        targetQuestionCount: 4
      }
    ],
    practiceCoverage: {
      targetQuestionCount: 12,
      minimumQuestionsPerSubType: 4,
      requiredPracticeRoles: ['guided', 'near_transfer', 'misconception_check', 'far_transfer'],
      requiredRepresentations: ['text', 'table', 'diagram'],
      masteryHoldoutCount: 3
    }
  },
  {
    id: 'chem11-qt26',
    topicId: 'chem11-t2',
    name: 'Sulfur vừa có tính oxi hóa vừa có tính khử',
    slug: 'sulfur-tinh-oxi-hoa-tinh-khu',
    description: 'Viết phương trình, theo dõi số oxi hóa và xác định vai trò của sulfur trong phản ứng với kim loại, hydrogen và oxygen.',
    exampleQuestionId: 'chem11-ns-q133',
    theory: [
      'Khi phản ứng với kim loại hoặc hydrogen, sulfur từ số oxi hóa 0 xuống −2 nên nhận electron và là chất oxi hóa.',
      'Khi cháy trong oxygen tạo SO₂, sulfur từ 0 lên +4 nên nhường electron và là chất khử.',
      'Không xác định vai trò theo tên chất; phải so sánh số oxi hóa của sulfur trước và sau phản ứng.'
    ],
    recognitionSigns: [
      'Đề có phương trình giữa sulfur với Fe, Cu, H₂ hoặc O₂.',
      'Đề yêu cầu xác định số oxi hóa, chất oxi hóa, chất khử hoặc quá trình electron.',
      'Đề cho hiện tượng thí nghiệm đốt sulfur hay nung hỗn hợp sulfur–kim loại.'
    ],
    solvingSteps: [
      'Viết hoặc cân bằng đúng phương trình phản ứng.',
      'Xác định số oxi hóa của sulfur trước và sau phản ứng.',
      'Sulfur giảm số oxi hóa thì là chất oxi hóa; tăng số oxi hóa thì là chất khử.'
    ],
    commonMistakes: [
      'Cho sulfur luôn là chất khử.',
      'Nhầm chất nhận electron là chất khử.',
      'Dùng hiện tượng màu sắc thay cho phân tích số oxi hóa.'
    ],
    difficulty: 'medium',
    examFrequency: 'high',
    subTypes: [
      {
        id: 'chem11-ns-st-sulfur-oxidizing',
        name: 'Sulfur là chất oxi hóa',
        example: 'Phân tích $Fe+S\\rightarrow FeS$ hoặc $H_2+S\\rightarrow H_2S$.',
        recognitionSigns: ['Sulfur tạo sulfide có số oxi hóa −2.'],
        targetQuestionCount: 4
      },
      {
        id: 'chem11-ns-st-sulfur-reducing',
        name: 'Sulfur là chất khử',
        example: 'Phân tích $S+O_2\\rightarrow SO_2$.',
        recognitionSigns: ['Sulfur tạo oxide với số oxi hóa dương.'],
        targetQuestionCount: 4
      },
      {
        id: 'chem11-ns-st-sulfur-redox-compare',
        name: 'So sánh và tổng hợp vai trò',
        example: 'Chọn cặp phản ứng chứng minh sulfur có hai vai trò.',
        recognitionSigns: ['Có nhiều phản ứng, bảng số oxi hóa hoặc yêu cầu kết luận tổng hợp.'],
        targetQuestionCount: 4
      }
    ],
    practiceCoverage: {
      targetQuestionCount: 12,
      minimumQuestionsPerSubType: 4,
      requiredPracticeRoles: ['guided', 'near_transfer', 'misconception_check', 'far_transfer'],
      requiredRepresentations: ['equation', 'experiment', 'table'],
      masteryHoldoutCount: 3
    }
  },
  {
    id: 'chem11-qt27',
    topicId: 'chem11-t2',
    name: 'Cấu tạo, tính chất vật lí và tính acidic oxide của SO₂',
    slug: 'cau-tao-vat-li-acidic-oxide-so2',
    description: 'Nhận diện cấu tạo–độc tính của SO₂, viết phản ứng với nước, base, basic oxide và xét sản phẩm theo tỉ lệ base.',
    exampleQuestionId: 'chem11-ns-q145',
    theory: [
      'SO₂ là khí không màu, mùi hắc, độc, tan trong nước; sulfur trong SO₂ có số oxi hóa +4.',
      'SO₂ là acidic oxide: tác dụng với nước thuận nghịch tạo H₂SO₃ và phản ứng với base/basic oxide tạo muối.',
      'Với NaOH, tỉ lệ mol có thể quyết định sản phẩm: $SO_2+NaOH\\rightarrow NaHSO_3$ hoặc $SO_2+2NaOH\\rightarrow Na_2SO_3+H_2O$.'
    ],
    recognitionSigns: [
      'Đề hỏi công thức, số oxi hóa, màu, mùi, độ tan hoặc an toàn với SO₂.',
      'Đề yêu cầu phân loại oxide hay viết phản ứng với nước, CaO, Ca(OH)₂.',
      'Đề cho số mol SO₂ và NaOH hoặc yêu cầu chọn sulfite/bisulfite.'
    ],
    solvingSteps: [
      'Xác định tính chất đang xét: vật lí–an toàn hay acidic oxide.',
      'Viết phương trình phù hợp với tác chất và bảo toàn nguyên tử.',
      'Nếu có NaOH, tính tỉ lệ $n_{NaOH}/n_{SO_2}$ để xác định mức trung hòa.'
    ],
    commonMistakes: [
      'Tính sulfur trong SO₂ là +2.',
      'Coi SO₂ là oxide trung tính.',
      'Mặc định SO₂ với NaOH luôn cho một sản phẩm duy nhất.'
    ],
    difficulty: 'medium',
    examFrequency: 'high',
    subTypes: [
      {
        id: 'chem11-ns-st-so2-structure-physical',
        name: 'Cấu tạo, vật lí và an toàn SO₂',
        example: 'Xác định số oxi hóa +4 và lựa chọn thao tác an toàn.',
        recognitionSigns: ['Có công thức, số oxi hóa, khí mùi hắc hoặc rò rỉ khí.'],
        targetQuestionCount: 4
      },
      {
        id: 'chem11-ns-st-so2-acidic-oxide',
        name: 'Phản ứng acidic oxide',
        example: 'Viết SO₂ phản ứng với nước, CaO hoặc Ca(OH)₂.',
        recognitionSigns: ['Có nước, base, basic oxide và yêu cầu phương trình.'],
        targetQuestionCount: 4
      },
      {
        id: 'chem11-ns-st-so2-base-ratio',
        name: 'Sản phẩm theo tỉ lệ base',
        example: 'Dùng tỉ lệ mol SO₂/NaOH để chọn NaHSO₃ hay Na₂SO₃.',
        recognitionSigns: ['Có số mol hoặc tỉ lệ SO₂ với NaOH/KOH.'],
        targetQuestionCount: 4
      }
    ],
    practiceCoverage: {
      targetQuestionCount: 12,
      minimumQuestionsPerSubType: 4,
      requiredPracticeRoles: ['guided', 'near_transfer', 'misconception_check', 'far_transfer'],
      requiredRepresentations: ['text', 'equation', 'table'],
      masteryHoldoutCount: 3
    }
  },
  {
    id: 'chem11-qt28',
    topicId: 'chem11-t2',
    name: 'Tính oxi hóa–khử, ứng dụng và môi trường của SO₂',
    slug: 'oxi-hoa-khu-ung-dung-moi-truong-so2',
    description: 'Phân tích hai vai trò oxi hóa–khử của SO₂, giải thích ứng dụng có kiểm soát và đánh giá nguồn–tác động–biện pháp giảm phát thải.',
    exampleQuestionId: 'chem11-ns-q157',
    theory: [
      'Sulfur +4 trong SO₂ có thể tăng lên +6 nên SO₂ thường là chất khử; cũng có thể giảm xuống 0 hoặc −2 nên SO₂ có thể là chất oxi hóa.',
      'SO₂ được dùng trong sản xuất sulfuric acid và một số quy trình tẩy màu, bảo quản có kiểm soát; không được suy ra rằng dùng tùy ý là an toàn.',
      'Đốt nhiên liệu chứa sulfur và luyện quặng sulfide phát thải SO₂; giảm sulfur đầu vào và hấp thụ SO₂ bằng vật liệu kiềm là các biện pháp xử lí tại nguồn.'
    ],
    recognitionSigns: [
      'Đề có SO₂ làm mất màu bromine/permanganate hoặc phản ứng với H₂S.',
      'Đề hỏi tẩy màu, bảo quản, sản xuất H₂SO₄ và giới hạn an toàn.',
      'Đề cho khí thải nhà máy, nhiên liệu sulfur, mưa acid, dữ liệu SO₂ hoặc hệ thống scrubber.'
    ],
    solvingSteps: [
      'Với phản ứng oxi hóa–khử, theo dõi sulfur +4 tăng hay giảm để xác định vai trò SO₂.',
      'Với ứng dụng, nối cơ chế hóa học với điều kiện kiểm soát và độc tính.',
      'Với môi trường, xác định nguồn phát thải, chuỗi tạo acid và biện pháp giảm tại nguồn.'
    ],
    commonMistakes: [
      'Cho SO₂ chỉ có tính khử.',
      'Coi tẩy màu bằng SO₂ luôn vĩnh viễn hoặc dùng bảo quản không giới hạn.',
      'Cho ống khói cao là biện pháp loại bỏ SO₂.'
    ],
    difficulty: 'medium',
    examFrequency: 'high',
    subTypes: [
      {
        id: 'chem11-ns-st-so2-redox',
        name: 'Vai trò oxi hóa–khử của SO₂',
        example: 'Phân tích SO₂ với Br₂ hoặc H₂S.',
        recognitionSigns: ['Có thay đổi số oxi hóa của sulfur +4.'],
        targetQuestionCount: 4
      },
      {
        id: 'chem11-ns-st-so2-use-safety',
        name: 'Ứng dụng, tẩy màu và an toàn',
        example: 'Ghép tính khử với tẩy màu và đánh giá giới hạn sử dụng.',
        recognitionSigns: ['Có thực phẩm, vật liệu màu, bảo quản hoặc sản xuất H₂SO₄.'],
        targetQuestionCount: 4
      },
      {
        id: 'chem11-ns-st-so2-environment',
        name: 'Nguồn, mưa acid và kiểm soát phát thải',
        example: 'Đọc dữ liệu SO₂ và chọn khử khí thải bằng đá vôi.',
        recognitionSigns: ['Có nhiên liệu sulfur, luyện quặng, mưa acid hoặc scrubber.'],
        targetQuestionCount: 4
      }
    ],
    practiceCoverage: {
      targetQuestionCount: 12,
      minimumQuestionsPerSubType: 4,
      requiredPracticeRoles: ['guided', 'near_transfer', 'misconception_check', 'far_transfer'],
      requiredRepresentations: ['equation', 'experiment', 'table'],
      masteryHoldoutCount: 3
    }
  },
  {
    id: 'chem11-qt29',
    topicId: 'chem11-t2',
    name: 'Cấu tạo, tính acid và an toàn với H₂SO₄',
    slug: 'cau-tao-tinh-acid-an-toan-h2so4',
    description: 'Nhận diện cấu tạo–vật lí, viết phản ứng của H₂SO₄ loãng và xử lí tình huống pha loãng, bảo quản, sơ cứu.',
    exampleQuestionId: 'chem11-ns-q169',
    theory: [
      'H₂SO₄ là chất lỏng sánh, không màu, nặng hơn nước; sulfur có số oxi hóa +6.',
      'H₂SO₄ loãng thể hiện tính acid mạnh: tác dụng với kim loại đứng trước H, base, basic oxide và một số muối.',
      'Pha loãng phải thêm acid từ từ vào nước; khi acid dính da cần rửa ngay bằng nhiều nước theo quy trình an toàn và tìm hỗ trợ phù hợp.'
    ],
    recognitionSigns: [
      'Đề hỏi công thức, số oxi hóa, trạng thái hoặc khối lượng riêng của H₂SO₄.',
      'Đề có H₂SO₄ loãng với Zn, NaOH, CuO, carbonate hoặc yêu cầu phương trình.',
      'Đề nêu pha loãng, acid bắn, bỏng acid, bảo quản hoặc thao tác phòng thí nghiệm.'
    ],
    solvingSteps: [
      'Xác định đang xét H₂SO₄ loãng hay đặc và loại tính chất cần dùng.',
      'Với phản ứng acid, viết sản phẩm rồi cân bằng nguyên tử và điện tích.',
      'Với an toàn, ưu tiên giảm phơi nhiễm và làm theo quy trình; không tạo thêm phản ứng tỏa nhiệt.'
    ],
    commonMistakes: [
      'Tính sulfur trong H₂SO₄ là +4.',
      'Cho H₂SO₄ loãng với mọi kim loại đều do sulfur +6 oxi hóa.',
      'Rót nước vào acid hoặc tự đổ base đậm đặc lên vùng da bị bỏng.'
    ],
    difficulty: 'medium',
    examFrequency: 'high',
    subTypes: [
      {
        id: 'chem11-ns-st-h2so4-structure-physical',
        name: 'Cấu tạo và tính chất vật lí',
        example: 'Tính số oxi hóa +6 và nhận diện acid đặc nặng hơn nước.',
        recognitionSigns: ['Có công thức H₂SO₄, số oxi hóa, trạng thái, độ nhớt hoặc khối lượng riêng.'],
        targetQuestionCount: 4
      },
      {
        id: 'chem11-ns-st-h2so4-dilute-acid',
        name: 'Tính acid của H₂SO₄ loãng',
        example: 'Viết phản ứng với Zn, NaOH, CuO hoặc carbonate.',
        recognitionSigns: ['Có từ “loãng” và kim loại/base/basic oxide/muối.'],
        targetQuestionCount: 4
      },
      {
        id: 'chem11-ns-st-h2so4-dilution-firstaid',
        name: 'Pha loãng, bảo quản và sơ cứu',
        example: 'Chọn quy tắc acid vào nước và rửa nhiều nước khi dính da.',
        recognitionSigns: ['Có thao tác pha loãng, sự cố tràn đổ hoặc bỏng acid.'],
        targetQuestionCount: 4
      }
    ],
    practiceCoverage: {
      targetQuestionCount: 12,
      minimumQuestionsPerSubType: 4,
      requiredPracticeRoles: ['guided', 'near_transfer', 'misconception_check', 'far_transfer'],
      requiredRepresentations: ['text', 'equation', 'experiment'],
      masteryHoldoutCount: 3
    }
  },
  {
    id: 'chem11-qt30',
    topicId: 'chem11-t2',
    name: 'Tính oxi hóa mạnh, háo nước và thí nghiệm H₂SO₄ đặc',
    slug: 'oxi-hoa-hao-nuoc-thi-nghiem-h2so4-dac',
    description: 'Phân tích phản ứng redox của H₂SO₄ đặc, hiện tượng than hóa chất hữu cơ và thiết kế thí nghiệm an toàn.',
    exampleQuestionId: 'chem11-ns-q181',
    theory: [
      'H₂SO₄ đặc, nóng là chất oxi hóa mạnh; với Cu tạo CuSO₄, SO₂ và H₂O, không tạo H₂.',
      'H₂SO₄ đặc có tính háo nước mạnh, có thể lấy nước khỏi đường và nhiều vật liệu hữu cơ gây than hóa.',
      'Thí nghiệm phải dùng lượng nhỏ, hệ thông gió/hấp thụ khí phù hợp, bảo hộ đầy đủ và tuyệt đối không ngửi SO₂ trực tiếp.'
    ],
    recognitionSigns: [
      'Đề có Cu/C/H₂SO₄ đặc nóng, SO₂ hoặc yêu cầu xác định chất oxi hóa.',
      'Đề mô tả đường, giấy, gạo chuyển đen, phồng lên hoặc tỏa nhiệt.',
      'Đề yêu cầu dự đoán hiện tượng, chọn dụng cụ, xử lí khí dư hoặc đánh giá an toàn.'
    ],
    solvingSteps: [
      'Theo dõi sulfur +6 trong H₂SO₄ và số oxi hóa của chất phản ứng để xác định vai trò.',
      'Với chất hữu cơ, tách hiện tượng háo nước khỏi phản ứng oxi hóa tiếp theo nếu có.',
      'Với thí nghiệm, xác định đồng thời nguy cơ acid ăn mòn, tỏa nhiệt và khí SO₂ độc.'
    ],
    commonMistakes: [
      'Cho Cu với H₂SO₄ đặc tạo H₂.',
      'Bỏ qua hiện tượng thụ động hóa Fe, Al, Cr trong acid đặc nguội.',
      'Ngửi trực tiếp khí hoặc thực hiện thí nghiệm than hóa không có bảo hộ.'
    ],
    difficulty: 'medium',
    examFrequency: 'high',
    subTypes: [
      {
        id: 'chem11-ns-st-h2so4-conc-oxidizing',
        name: 'Tính oxi hóa mạnh',
        example: 'Phân tích Cu + 2H₂SO₄ đặc → CuSO₄ + SO₂ + 2H₂O.',
        recognitionSigns: ['Có acid đặc/nóng, kim loại hoặc phi kim và sản phẩm SO₂.'],
        targetQuestionCount: 4
      },
      {
        id: 'chem11-ns-st-h2so4-dehydrating',
        name: 'Tính háo nước',
        example: 'Giải thích đường chuyển đen và khối carbon phồng lên.',
        recognitionSigns: ['Có carbohydrate, giấy, gạo, than hóa hoặc mất nước.'],
        targetQuestionCount: 4
      },
      {
        id: 'chem11-ns-st-h2so4-experiment-safety',
        name: 'Hiện tượng và an toàn thí nghiệm',
        example: 'Chọn hệ hấp thụ SO₂ và thao tác bảo hộ đúng.',
        recognitionSigns: ['Có sơ đồ thí nghiệm, khí dư, tủ hút, PPE hoặc sự cố.'],
        targetQuestionCount: 4
      }
    ],
    practiceCoverage: {
      targetQuestionCount: 12,
      minimumQuestionsPerSubType: 4,
      requiredPracticeRoles: ['guided', 'near_transfer', 'misconception_check', 'far_transfer'],
      requiredRepresentations: ['equation', 'experiment', 'table'],
      masteryHoldoutCount: 3
    }
  },
  {
    id: 'chem11-qt31',
    topicId: 'chem11-t2',
    name: 'Sản xuất và ứng dụng sulfuric acid',
    slug: 'san-xuat-ung-dung-sulfuric-acid',
    description: 'Sắp xếp phương pháp tiếp xúc, phân tích điều kiện cân bằng–xúc tác, hấp thụ SO₃ và liên hệ ứng dụng–quản lí acid.',
    exampleQuestionId: 'chem11-ns-q193',
    theory: [
      'Phương pháp tiếp xúc gồm tạo SO₂, oxi hóa thuận nghịch SO₂ thành SO₃ với xúc tác V₂O₅ và hấp thụ SO₃ để thu H₂SO₄.',
      'SO₃ được hấp thụ vào H₂SO₄ đặc tạo oleum rồi pha loãng có kiểm soát; không ưu tiên cho SO₃ trực tiếp vào nước vì tạo sương acid.',
      'H₂SO₄ có nhiều ứng dụng trong phân bón, hóa chất, luyện kim và xử lí; acid thải phải được quản lí theo quy trình.'
    ],
    recognitionSigns: [
      'Đề có chuỗi S/FeS₂ → SO₂ → SO₃ → oleum/H₂SO₄.',
      'Đề hỏi V₂O₅, nhiệt độ, cân bằng, hiệu suất hoặc hấp thụ SO₃.',
      'Đề nêu phân bón, acquy, tẩy gỉ, acid thải hoặc dữ liệu sản xuất.'
    ],
    solvingSteps: [
      'Sắp xếp đúng các giai đoạn và viết phương trình của từng giai đoạn.',
      'Tách tác dụng của nhiệt độ, áp suất và xúc tác đối với cân bằng/tốc độ.',
      'Nối ứng dụng với tính chất và luôn kèm yêu cầu kiểm soát an toàn–môi trường.'
    ],
    commonMistakes: [
      'Bỏ qua bước oxi hóa SO₂ hoặc hấp thụ SO₃.',
      'Cho xúc tác làm chuyển dịch cân bằng.',
      'Xả acid thải trực tiếp hoặc cho SO₃ tác dụng trực tiếp với nước như lựa chọn tối ưu.'
    ],
    difficulty: 'medium',
    examFrequency: 'high',
    subTypes: [
      {
        id: 'chem11-ns-st-contact-sequence',
        name: 'Chuỗi phản ứng phương pháp tiếp xúc',
        example: 'Viết S + O₂ → SO₂; 2SO₂ + O₂ ⇌ 2SO₃.',
        recognitionSigns: ['Có yêu cầu sắp xếp giai đoạn hoặc hoàn thành chuỗi chuyển hóa.'],
        targetQuestionCount: 4
      },
      {
        id: 'chem11-ns-st-contact-conditions',
        name: 'Điều kiện, cân bằng và hấp thụ SO₃',
        example: 'Giải thích vai trò V₂O₅ và tạo oleum.',
        recognitionSigns: ['Có xúc tác, nhiệt độ, hiệu suất, cân bằng hoặc sương acid.'],
        targetQuestionCount: 4
      },
      {
        id: 'chem11-ns-st-h2so4-applications',
        name: 'Ứng dụng và quản lí acid',
        example: 'Ghép H₂SO₄ với phân bón và chọn xử lí acid thải đúng.',
        recognitionSigns: ['Có bối cảnh sản xuất, vận chuyển, chất thải hoặc dấu chân môi trường.'],
        targetQuestionCount: 4
      }
    ],
    practiceCoverage: {
      targetQuestionCount: 12,
      minimumQuestionsPerSubType: 4,
      requiredPracticeRoles: ['guided', 'near_transfer', 'misconception_check', 'far_transfer'],
      requiredRepresentations: ['equation', 'diagram', 'table'],
      masteryHoldoutCount: 3
    }
  },
  {
    id: 'chem11-qt32',
    topicId: 'chem11-t2',
    name: 'Muối sulfate và nhận biết ion sulfate',
    slug: 'muoi-sulfate-nhan-biet-ion-sulfate',
    description: 'Nhận diện công thức–ứng dụng của bốn sulfate quan trọng và xây dựng quy trình nhận biết SO₄²⁻ bằng ion Ba²⁺.',
    exampleQuestionId: 'chem11-ns-q205',
    theory: [
      'Các sulfate quan trọng gồm BaSO₄, (NH₄)₂SO₄, CaSO₄ và MgSO₄ với các ứng dụng khác nhau.',
      'Ion sulfate được nhận biết bằng ion Ba²⁺ tạo kết tủa trắng BaSO₄ rất ít tan: $Ba^{2+}+SO_4^{2-}\\rightarrow BaSO_4\\downarrow$.',
      'Cần dùng thuốc thử Ba²⁺ tan và kiểm soát môi trường/ion gây nhiễu; không kết luận chỉ từ một kết tủa trắng bất kỳ.'
    ],
    recognitionSigns: [
      'Đề hỏi công thức, tên hoặc ứng dụng của barium/ammonium/calcium/magnesium sulfate.',
      'Đề yêu cầu thuốc thử, hiện tượng, phương trình ion hoặc phân biệt dung dịch sulfate.',
      'Đề có bảng kết quả mẫu, mẫu trắng, khối lượng BaSO₄ hoặc câu hỏi định lượng đơn giản.'
    ],
    solvingSteps: [
      'Xác định đúng ion và công thức muối sulfate.',
      'Với nhận biết, chọn nguồn Ba²⁺ tan, nêu kết tủa trắng BaSO₄ và viết phương trình ion.',
      'Với dữ liệu/định lượng, kiểm tra mẫu đối chứng và dùng tỉ lệ mol SO₄²⁻ : BaSO₄ = 1 : 1.'
    ],
    commonMistakes: [
      'Cho mọi sulfate đều tan.',
      'Kết luận sulfate từ bất kì kết tủa trắng nào.',
      'Dùng thuốc thử không cung cấp Ba²⁺ hòa tan hiệu quả hoặc bỏ qua ion gây nhiễu.'
    ],
    difficulty: 'medium',
    examFrequency: 'high',
    subTypes: [
      {
        id: 'chem11-ns-st-sulfate-salts',
        name: 'Công thức và ứng dụng sulfate',
        example: 'Ghép BaSO₄, (NH₄)₂SO₄, CaSO₄, MgSO₄ với ứng dụng.',
        recognitionSigns: ['Có tên muối, công thức, phân bón, thạch cao hoặc chất cản quang.'],
        targetQuestionCount: 4
      },
      {
        id: 'chem11-ns-st-sulfate-test',
        name: 'Thuốc thử, hiện tượng và phương trình ion',
        example: 'Dùng BaCl₂ tạo BaSO₄ trắng.',
        recognitionSigns: ['Có Ba²⁺, kết tủa trắng, SO₄²⁻ hoặc yêu cầu phương trình ion.'],
        targetQuestionCount: 4
      },
      {
        id: 'chem11-ns-st-sulfate-data',
        name: 'Dữ liệu thí nghiệm và định lượng',
        example: 'Đọc bảng mẫu và tính sulfate từ lượng BaSO₄.',
        recognitionSigns: ['Có bảng kết quả, mẫu trắng, khối lượng hoặc số mol kết tủa.'],
        targetQuestionCount: 4
      }
    ],
    practiceCoverage: {
      targetQuestionCount: 12,
      minimumQuestionsPerSubType: 4,
      requiredPracticeRoles: ['guided', 'near_transfer', 'misconception_check', 'far_transfer'],
      requiredRepresentations: ['equation', 'experiment', 'table'],
      masteryHoldoutCount: 3
    }
  }
];

for (const questionType of g11ChemistryNitrogenSulfurQuestionTypes) {
  const resource = chem11NitrogenSulfurTheoryResources[questionType.id];
  if (!resource) continue;
  questionType.theory = [...(questionType.theory ?? []), ...resource.theorySupplement];
  questionType.theoryCheckpoints = resource.checkpoints;
}
