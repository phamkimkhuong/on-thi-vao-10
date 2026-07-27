import type { QuestionType } from '@/types';
import { chem11OrganicBasicsTheoryResources } from './theoryResources';

export const g11ChemistryOrganicBasicsQuestionTypes: QuestionType[] = [
  {
    id: 'chem11-qt33',
    topicId: 'chem11-t3',
    name: 'Khái niệm và đặc điểm chung của hợp chất hữu cơ',
    slug: 'khai-niem-dac-diem-hop-chat-huu-co',
    description: 'Phân biệt phạm vi hữu cơ–vô cơ và suy luận các xu hướng thành phần, liên kết, vật lí, phản ứng của hợp chất hữu cơ.',
    exampleQuestionId: 'chem11-org-q001',
    theory: [
      'Hợp chất hữu cơ là hợp chất của carbon, trừ một số hợp chất carbon thuộc phạm vi vô cơ như CO, CO₂, H₂CO₃, carbonate, hydrogencarbonate và carbide.',
      'Phần lớn hợp chất hữu cơ phân tử có liên kết cộng hóa trị; thường chứa C, H và có thể có O, N, halogen, S, P.',
      'Nhiều hợp chất hữu cơ ít tan trong nước, tan trong dung môi hữu cơ và phản ứng thường chậm, theo nhiều hướng; đây là xu hướng, không phải quy tắc tuyệt đối.'
    ],
    recognitionSigns: [
      'Đề yêu cầu xác định chất hữu cơ, ngoại lệ carbon hoặc phạm vi hóa học hữu cơ.',
      'Đề hỏi nguyên tố, loại liên kết, độ tan, nhiệt độ sôi hoặc bảng tính chất.',
      'Đề mô tả tốc độ, xúc tác, hiệu suất và số lượng sản phẩm của phản ứng hữu cơ.'
    ],
    solvingSteps: [
      'Kiểm tra chất có carbon và có thuộc nhóm ngoại lệ vô cơ hay không.',
      'Nếu hỏi đặc điểm chung, chọn phát biểu có ngôn ngữ xu hướng như “phần lớn”, “thường”.',
      'Đối chiếu dữ liệu cụ thể trước khi kết luận; không dùng từ tuyệt đối cho mọi hợp chất hữu cơ.'
    ],
    commonMistakes: [
      'Cho mọi hợp chất carbon là hữu cơ.',
      'Cho mọi chất hữu cơ chỉ gồm C, H hoặc đều không tan trong nước.',
      'Cho phản ứng hữu cơ luôn nhanh và tạo một sản phẩm.'
    ],
    difficulty: 'medium',
    examFrequency: 'high',
    subTypes: [
      {
        id: 'chem11-org-st-concept-exceptions',
        name: 'Khái niệm và ngoại lệ',
        example: 'Phân biệt CH₄, CH₃Cl với CO₂ và Na₂CO₃.',
        recognitionSigns: ['Có danh sách hợp chất carbon và yêu cầu chọn hữu cơ/vô cơ.'],
        targetQuestionCount: 4
      },
      {
        id: 'chem11-org-st-general-properties',
        name: 'Thành phần, liên kết và vật lí',
        example: 'Chọn xu hướng liên kết cộng hóa trị và độ tan.',
        recognitionSigns: ['Có nguyên tố, loại liên kết, nhiệt độ sôi hoặc độ tan.'],
        targetQuestionCount: 4
      },
      {
        id: 'chem11-org-st-reaction-scope',
        name: 'Phản ứng và phạm vi nghiên cứu',
        example: 'Đọc dữ liệu phản ứng chậm, nhiều sản phẩm và xác định đối tượng hóa học hữu cơ.',
        recognitionSigns: ['Có điều kiện phản ứng, xúc tác, hiệu suất hoặc câu hỏi về ngành hóa học hữu cơ.'],
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
    id: 'chem11-qt34',
    topicId: 'chem11-t3',
    name: 'Phân loại hydrocarbon và dẫn xuất hydrocarbon',
    slug: 'phan-loai-hydrocarbon-dan-xuat',
    description: 'Dựa vào thành phần nguyên tố và công thức để phân loại hydrocarbon, dẫn xuất hydrocarbon và loại các hợp chất carbon vô cơ.',
    exampleQuestionId: 'chem11-org-q013',
    theory: [
      'Hydrocarbon là hợp chất hữu cơ chỉ chứa carbon và hydrogen.',
      'Dẫn xuất hydrocarbon là hợp chất hữu cơ ngoài C, H còn có nguyên tố khác; một số dẫn xuất có thể không chứa H.',
      'Trước khi phân loại hydrocarbon/dẫn xuất phải loại các hợp chất carbon vô cơ như CO₂ và carbonate.'
    ],
    recognitionSigns: [
      'Đề cho công thức phân tử/cấu tạo và hỏi hydrocarbon hay dẫn xuất.',
      'Đề có O, N, halogen, S hoặc yêu cầu đếm số chất trong từng lớp.',
      'Đề trộn hydrocarbon, dẫn xuất và hợp chất carbon vô cơ trong cùng bảng.'
    ],
    solvingSteps: [
      'Loại các chất thuộc nhóm carbon vô cơ.',
      'Với chất hữu cơ, nếu chỉ có C và H thì là hydrocarbon.',
      'Nếu có nguyên tố khác ngoài C, H thì xếp dẫn xuất và kiểm tra lại nhóm chức nếu được hỏi.'
    ],
    commonMistakes: [
      'Gọi mọi hợp chất hữu cơ là hydrocarbon.',
      'Cho dẫn xuất bắt buộc chứa oxygen.',
      'Xếp CO₂ hoặc carbonate vào dẫn xuất hydrocarbon.'
    ],
    difficulty: 'medium',
    examFrequency: 'high',
    subTypes: [
      {
        id: 'chem11-org-st-hydrocarbon',
        name: 'Nhận diện hydrocarbon',
        example: 'Chọn CH₄, C₂H₄, C₆H₆ từ danh sách.',
        recognitionSigns: ['Công thức chỉ chứa kí hiệu C và H.'],
        targetQuestionCount: 4
      },
      {
        id: 'chem11-org-st-derivative',
        name: 'Nhận diện dẫn xuất',
        example: 'Phân loại C₂H₅OH, CH₃Cl, CH₃NH₂.',
        recognitionSigns: ['Có O, N, halogen, S hoặc nhóm chức.'],
        targetQuestionCount: 4
      },
      {
        id: 'chem11-org-st-mixed-classification',
        name: 'Phân loại hỗn hợp nhiều lớp',
        example: 'Tách hydrocarbon, dẫn xuất và hợp chất carbon vô cơ trong bảng.',
        recognitionSigns: ['Danh sách chứa đồng thời CO₂/carbonate và nhiều hợp chất hữu cơ.'],
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
    id: 'chem11-qt35',
    topicId: 'chem11-t3',
    name: 'Khái niệm và nhận diện nhóm chức cơ bản',
    slug: 'khai-niem-nhan-dien-nhom-chuc',
    description: 'Nhận diện nhóm chức từ công thức cấu tạo và dùng nhóm chức để dự đoán loại hợp chất, đồng thời tránh nhầm các nhóm có nguyên tử giống nhau.',
    exampleQuestionId: 'chem11-org-q025',
    theory: [
      'Nhóm chức là nguyên tử hoặc nhóm nguyên tử gây ra tính chất hóa học đặc trưng của hợp chất hữu cơ.',
      'Một số nhóm cơ bản: halogen –X, hydroxy alcohol –OH, carbonyl >C=O, aldehyde –CHO, carboxyl –COOH, amino –NH₂.',
      'Phải xét môi trường liên kết: –OH alcohol khác –OH phenol và phần –OH trong –COOH.'
    ],
    recognitionSigns: [
      'Đề cho công thức cấu tạo thu gọn và yêu cầu chỉ ra nhóm chức.',
      'Đề yêu cầu ghép –OH, –CHO, >C=O, –COOH, –NH₂, –X với loại hợp chất.',
      'Đề cho nhiều nhóm trong cùng phân tử hoặc yêu cầu giải thích tính chất đặc trưng.'
    ],
    solvingSteps: [
      'Đọc công thức theo từng cụm liên kết, không chỉ tìm một nguyên tử riêng lẻ.',
      'Ưu tiên nhận nhóm lớn đặc trưng như –COOH trước khi tách thành C=O và –OH.',
      'Ghép nhóm chức với loại hợp chất và kiểm tra vị trí liên kết nếu có nguy cơ nhầm.'
    ],
    commonMistakes: [
      'Coi bất kì đoạn công thức nào là nhóm chức.',
      'Hễ thấy –OH là alcohol.',
      'Tách –COOH thành hai nhóm độc lập khi bài hỏi nhóm chức chính.'
    ],
    difficulty: 'medium',
    examFrequency: 'high',
    subTypes: [
      {
        id: 'chem11-org-st-functional-concept',
        name: 'Khái niệm và vai trò nhóm chức',
        example: 'Giải thích vì sao nhóm chức quyết định tính chất đặc trưng.',
        recognitionSigns: ['Hỏi định nghĩa, vai trò hoặc so sánh các chất cùng nhóm chức.'],
        targetQuestionCount: 4
      },
      {
        id: 'chem11-org-st-functional-recognition',
        name: 'Nhận diện nhóm chức từ công thức',
        example: 'Tìm –OH, –CHO, –COOH, –NH₂ trong công thức.',
        recognitionSigns: ['Có công thức cấu tạo hoặc công thức thu gọn.'],
        targetQuestionCount: 4
      },
      {
        id: 'chem11-org-st-functional-multiple',
        name: 'Phân tử đa nhóm và phân biệt nhóm gần giống',
        example: 'Phân tích HO–CH₂–COOH hoặc phân biệt alcohol với carboxylic acid.',
        recognitionSigns: ['Có từ hai heteroatom/nhóm chức hoặc các nhóm chứa –OH, C=O gần nhau.'],
        targetQuestionCount: 4
      }
    ],
    practiceCoverage: {
      targetQuestionCount: 12,
      minimumQuestionsPerSubType: 4,
      requiredPracticeRoles: ['guided', 'near_transfer', 'misconception_check', 'far_transfer'],
      requiredRepresentations: ['text', 'equation', 'diagram'],
      masteryHoldoutCount: 3
    }
  },
  {
    id: 'chem11-qt36',
    topicId: 'chem11-t3',
    name: 'Chưng cất: nguyên tắc, dụng cụ và dữ liệu phân đoạn',
    slug: 'chung-cat-nguyen-tac-dung-cu-du-lieu',
    description: 'Chọn chưng cất theo nhiệt độ sôi, đọc sơ đồ dụng cụ và theo dõi nhiệt độ để thu phân đoạn phù hợp.',
    exampleQuestionId: 'chem11-org-q037',
    theory: [
      'Chưng cất dựa trên sự khác nhau về nhiệt độ sôi/độ bay hơi; cấu tử dễ bay hơi hơn đi vào pha hơi trước và được ngưng tụ.',
      'Bầu nhiệt kế đặt gần nhánh dẫn hơi; nước làm lạnh vào đầu thấp, ra đầu cao của sinh hàn.',
      'Cần theo dõi nhiệt độ và đổi bình hứng theo phân đoạn; nhiệt độ sôi quá gần làm chưng cất thường khó tách tốt.'
    ],
    recognitionSigns: [
      'Đề cho hỗn hợp lỏng đồng nhất và nhiệt độ sôi của các cấu tử.',
      'Đề có sơ đồ bình cầu, nhiệt kế, sinh hàn, bình hứng hoặc chiều nước.',
      'Đề cho bảng nhiệt độ–thời gian, khoảng nhiệt độ hoặc yêu cầu chọn phân đoạn.'
    ],
    solvingSteps: [
      'Xác định chưng cất có phù hợp từ trạng thái và chênh lệch nhiệt độ sôi.',
      'Kiểm tra vị trí nhiệt kế, chiều nước và đường đi của hơi.',
      'Dùng khoảng nhiệt độ ổn định để quyết định thời điểm thu/đổi phân đoạn.'
    ],
    commonMistakes: [
      'Chọn chưng cất theo khối lượng riêng.',
      'Đặt nhiệt kế ngập trong chất lỏng hoặc nối nước sinh hàn từ trên xuống.',
      'Gộp mọi dịch cất vào cùng một bình.'
    ],
    difficulty: 'medium',
    examFrequency: 'high',
    subTypes: [
      {
        id: 'chem11-org-st-distillation-principle',
        name: 'Nguyên tắc và lựa chọn chưng cất',
        example: 'Tách hai chất lỏng có nhiệt độ sôi khác nhau.',
        recognitionSigns: ['Có hỗn hợp lỏng đồng nhất và dữ liệu nhiệt độ sôi.'],
        targetQuestionCount: 4
      },
      {
        id: 'chem11-org-st-distillation-apparatus',
        name: 'Sơ đồ và thao tác chưng cất',
        example: 'Xác định vị trí nhiệt kế và chiều nước sinh hàn.',
        recognitionSigns: ['Có hình/sơ đồ bộ chưng cất hoặc mô tả lắp dụng cụ.'],
        targetQuestionCount: 4
      },
      {
        id: 'chem11-org-st-distillation-data',
        name: 'Dữ liệu và phân đoạn',
        example: 'Đọc plateau nhiệt độ để đổi bình hứng.',
        recognitionSigns: ['Có bảng nhiệt độ–thời gian, thể tích dịch cất hoặc độ tinh khiết.'],
        targetQuestionCount: 4
      }
    ],
    practiceCoverage: {
      targetQuestionCount: 12,
      minimumQuestionsPerSubType: 4,
      requiredPracticeRoles: ['guided', 'near_transfer', 'misconception_check', 'far_transfer'],
      requiredRepresentations: ['diagram', 'table', 'experiment'],
      masteryHoldoutCount: 3
    }
  },
  {
    id: 'chem11-qt37',
    topicId: 'chem11-t3',
    name: 'Chiết lỏng–lỏng: dung môi, phễu chiết và hiệu quả',
    slug: 'chiet-long-long-dung-moi-pheu-chiet',
    description: 'Chọn hai dung môi không trộn lẫn, xác định lớp, vận hành phễu chiết an toàn và so sánh chiến lược chiết.',
    exampleQuestionId: 'chem11-org-q049',
    theory: [
      'Chiết lỏng–lỏng dựa trên sự phân bố khác nhau của chất tan giữa hai dung môi hầu như không trộn lẫn.',
      'Lớp trên/dưới phụ thuộc khối lượng riêng, không phụ thuộc mặc định vào “hữu cơ” hay màu; khi lắc phải xả áp định kì.',
      'Với cùng tổng thể tích dung môi, nhiều lần chiết bằng phần nhỏ thường hiệu quả hơn một lần chiết lớn.'
    ],
    recognitionSigns: [
      'Đề cho hai dung môi, độ tan, hệ số phân bố hoặc tính trộn lẫn.',
      'Đề có phễu chiết, hai lớp, khóa, nút, xả áp hoặc khối lượng riêng.',
      'Đề so sánh một lần/nhiều lần chiết, nhũ tương hoặc dung môi dễ bay hơi.'
    ],
    solvingSteps: [
      'Chọn dung môi không trộn lẫn với pha ban đầu và hòa tan chọn lọc chất cần chiết.',
      'Xác định lớp bằng khối lượng riêng/dữ kiện, rồi xả đúng lớp qua khóa.',
      'Đánh giá hiệu quả qua lượng còn lại sau mỗi lần và kiểm tra an toàn áp suất–cháy.'
    ],
    commonMistakes: [
      'Chọn hai dung môi trộn lẫn hoàn toàn.',
      'Cho lớp hữu cơ luôn ở trên hoặc xác định lớp chỉ bằng màu.',
      'Không xả áp và cho một lần chiết lớn luôn tốt nhất.'
    ],
    difficulty: 'medium',
    examFrequency: 'high',
    subTypes: [
      {
        id: 'chem11-org-st-extraction-solvent',
        name: 'Nguyên tắc và chọn dung môi',
        example: 'Chọn dung môi không trộn với nước nhưng hòa tan tốt chất hữu cơ.',
        recognitionSigns: ['Có bảng độ tan, tính trộn lẫn hoặc hệ số phân bố.'],
        targetQuestionCount: 4
      },
      {
        id: 'chem11-org-st-extraction-funnel',
        name: 'Xác định lớp và thao tác phễu chiết',
        example: 'Dùng khối lượng riêng để xác định lớp và xả áp khi lắc.',
        recognitionSigns: ['Có hai lớp, khóa phễu, nút, khối lượng riêng hoặc sơ đồ.'],
        targetQuestionCount: 4
      },
      {
        id: 'chem11-org-st-extraction-efficiency',
        name: 'Hiệu quả và xử lí tình huống',
        example: 'So sánh ba lần chiết 10 mL với một lần 30 mL.',
        recognitionSigns: ['Có số lần chiết, lượng thu hồi, nhũ tương hoặc dung môi bay hơi.'],
        targetQuestionCount: 4
      }
    ],
    practiceCoverage: {
      targetQuestionCount: 12,
      minimumQuestionsPerSubType: 4,
      requiredPracticeRoles: ['guided', 'near_transfer', 'misconception_check', 'far_transfer'],
      requiredRepresentations: ['diagram', 'table', 'experiment'],
      masteryHoldoutCount: 3
    }
  },
  {
    id: 'chem11-qt38',
    topicId: 'chem11-t3',
    name: 'Kết tinh và lựa chọn phương pháp tách',
    slug: 'ket-tinh-lua-chon-phuong-phap-tach',
    description: 'Dùng dữ liệu độ tan để thiết kế kết tinh, tính lượng tinh thể và lựa chọn chưng cất–chiết–kết tinh trong thực tiễn.',
    exampleQuestionId: 'chem11-org-q061',
    theory: [
      'Kết tinh khai thác độ tan của chất thay đổi theo nhiệt độ: hòa tan nóng bằng lượng dung môi tối thiểu, lọc nóng, làm nguội, lọc–rửa–sấy tinh thể.',
      'Lượng tinh thể lí thuyết bằng lượng chất hòa tan ở nóng trừ lượng còn tan ở lạnh, sau khi quy đổi theo lượng dung môi.',
      'Chọn phương pháp theo tính chất: chưng cất cho khác độ bay hơi, chiết cho phân bố giữa hai pha, kết tinh cho khác độ tan.'
    ],
    recognitionSigns: [
      'Đề có bảng độ tan ở hai nhiệt độ, dung dịch bão hòa hoặc làm nguội.',
      'Đề yêu cầu sắp xếp hòa tan nóng–lọc nóng–làm nguội–lọc tinh thể.',
      'Đề cho nhiều hỗn hợp và yêu cầu chọn chưng cất, chiết hoặc kết tinh.'
    ],
    solvingSteps: [
      'Đánh giá chất cần tinh chế có độ tan tăng rõ khi nóng hay không.',
      'Dùng bảng độ tan để tính lượng còn tan và lượng kết tinh.',
      'Với bài chọn phương pháp, đối chiếu trạng thái hỗn hợp và tính chất phân tách quyết định.'
    ],
    commonMistakes: [
      'Cô cạn hoàn toàn thay vì kết tinh chọn lọc.',
      'Cho làm lạnh thật nhanh luôn tăng độ tinh khiết.',
      'Dùng một phương pháp cho mọi hỗn hợp.'
    ],
    difficulty: 'medium',
    examFrequency: 'high',
    subTypes: [
      {
        id: 'chem11-org-st-crystallization-principle',
        name: 'Nguyên tắc và quy trình kết tinh',
        example: 'Sắp xếp hòa tan nóng, lọc nóng, làm nguội, lọc tinh thể.',
        recognitionSigns: ['Có chất rắn, dung môi nóng/lạnh và tinh thể.'],
        targetQuestionCount: 4
      },
      {
        id: 'chem11-org-st-crystallization-data',
        name: 'Dữ liệu độ tan và lượng tinh thể',
        example: 'Tính lượng tinh thể khi làm nguội dung dịch bão hòa.',
        recognitionSigns: ['Có g chất/100 g nước ở hai nhiệt độ.'],
        targetQuestionCount: 4
      },
      {
        id: 'chem11-org-st-method-selection',
        name: 'Lựa chọn phương pháp trong thực tiễn',
        example: 'Chọn chưng cất tinh dầu, chiết caffeine hoặc kết tinh đường.',
        recognitionSigns: ['Có bối cảnh đời sống và nhiều phương pháp lựa chọn.'],
        targetQuestionCount: 4
      }
    ],
    practiceCoverage: {
      targetQuestionCount: 12,
      minimumQuestionsPerSubType: 4,
      requiredPracticeRoles: ['guided', 'near_transfer', 'misconception_check', 'far_transfer'],
      requiredRepresentations: ['text', 'table', 'experiment'],
      masteryHoldoutCount: 3
    }
  },
  {
    id: 'chem11-qt39',
    topicId: 'chem11-t3',
    name: 'Công thức phân tử, công thức đơn giản nhất và thành phần nguyên tố',
    slug: 'cong-thuc-phan-tu-cong-thuc-don-gian-nhat',
    description: 'Đọc ý nghĩa công thức, rút gọn công thức đơn giản nhất, dùng CTPT = (CTĐGN)n và tính phần trăm khối lượng nguyên tố.',
    exampleQuestionId: 'chem11-org-q073',
    theory: [
      'CTPT cho biết loại và số nguyên tử mỗi nguyên tố trong một phân tử; CTĐGN cho tỉ lệ nguyên tử nguyên tối giản.',
      'CTPT = (CTĐGN)n, với n là số nguyên dương và n = M(CTPT)/M(CTĐGN).',
      '%m(E) = tổng khối lượng nguyên tử E trong một mol chất chia cho phân tử khối rồi nhân 100%.'
    ],
    recognitionSigns: [
      'Đề yêu cầu phân biệt CTPT với CTĐGN hoặc rút gọn chỉ số.',
      'Đề cho CTĐGN và phân tử khối để tìm bội n.',
      'Đề cho công thức rồi yêu cầu thành phần phần trăm khối lượng.'
    ],
    solvingSteps: [
      'Xác định đề hỏi thành phần thực của phân tử hay chỉ tỉ lệ tối giản.',
      'Rút gọn chỉ số bằng ước chung hoặc tính n từ tỉ số phân tử khối.',
      'Kiểm tra tổng phần trăm nguyên tố xấp xỉ 100%.'
    ],
    commonMistakes: [
      'Cho CTPT xác định duy nhất cấu tạo.',
      'Không rút gọn CTĐGN hoặc cho n là số thập phân.',
      'Dùng tỉ lệ số nguyên tử thay cho tỉ lệ khối lượng.'
    ],
    difficulty: 'medium',
    examFrequency: 'high',
    subTypes: [
      {
        id: 'chem11-org-st-formula-meaning',
        name: 'Ý nghĩa và phân biệt hai loại công thức',
        example: 'Phân biệt C₂H₄O₂ và CH₂O.',
        recognitionSigns: ['Có CTPT, CTĐGN hoặc yêu cầu giải thích chỉ số.'],
        targetQuestionCount: 4
      },
      {
        id: 'chem11-org-st-formula-multiple',
        name: 'Quan hệ bội và phân tử khối',
        example: 'CTĐGN CH₂O, M = 180 → CTPT C₆H₁₂O₆.',
        recognitionSigns: ['Có CTĐGN và M hoặc bội n.'],
        targetQuestionCount: 4
      },
      {
        id: 'chem11-org-st-formula-percent',
        name: 'Phần trăm khối lượng từ công thức',
        example: 'Tính %C trong C₂H₆O.',
        recognitionSigns: ['Có công thức và yêu cầu % khối lượng nguyên tố.'],
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
    id: 'chem11-qt40',
    topicId: 'chem11-t3',
    name: 'Lập công thức đơn giản nhất từ dữ liệu thành phần',
    slug: 'lap-cong-thuc-don-gian-nhat-tu-thanh-phan',
    description: 'Chuyển phần trăm hoặc khối lượng nguyên tố thành tỉ lệ mol, xử lí tỉ lệ thập phân và kiểm tra công thức tối giản.',
    exampleQuestionId: 'chem11-org-q085',
    theory: [
      'Có thể giả sử 100 g chất khi đề cho phần trăm, khi đó số gam bằng số phần trăm.',
      'Tính n tương đối bằng m/A, chia mọi giá trị cho số nhỏ nhất rồi nhân đồng loạt nếu xuất hiện 0,5; 0,33; 0,25.',
      'Chỉ số cuối cùng phải là bộ số nguyên dương tối giản và tái tạo gần đúng thành phần đã cho.'
    ],
    recognitionSigns: [
      'Đề cho %C, %H, %O hoặc phần trăm các nguyên tố.',
      'Đề cho khối lượng từng nguyên tố trong một mẫu.',
      'Tỉ lệ mol sau chia có dạng 1 : 1,5 hoặc 1 : 1,33.'
    ],
    solvingSteps: [
      'Đổi phần trăm thành khối lượng quy ước hoặc dùng trực tiếp m/A.',
      'Chia cho số mol nhỏ nhất và nhân toàn bộ tỉ lệ để được số nguyên.',
      'Rút gọn, viết CTĐGN và kiểm tra ngược phần trăm.'
    ],
    commonMistakes: [
      'Dùng phần trăm hoặc gam làm chỉ số.',
      'Làm tròn sớm 1,5 thành 2.',
      'Quên suy ra phần trăm nguyên tố còn lại từ 100%.'
    ],
    difficulty: 'medium',
    examFrequency: 'high',
    subTypes: [
      {
        id: 'chem11-org-st-empirical-percent',
        name: 'Từ phần trăm khối lượng',
        example: '40,0% C; 6,7% H; 53,3% O.',
        recognitionSigns: ['Dữ kiện tính bằng phần trăm.'],
        targetQuestionCount: 4
      },
      {
        id: 'chem11-org-st-empirical-mass',
        name: 'Từ khối lượng nguyên tố',
        example: '2,4 g C; 0,4 g H; 3,2 g O.',
        recognitionSigns: ['Dữ kiện là gam từng nguyên tố.'],
        targetQuestionCount: 4
      },
      {
        id: 'chem11-org-st-empirical-fractional-ratio',
        name: 'Xử lí tỉ lệ phân số và kiểm tra',
        example: 'Tỉ lệ 1 : 1,5 : 1 → 2 : 3 : 2.',
        recognitionSigns: ['Tỉ lệ sau chia chưa gần số nguyên hoặc cần kiểm tra ngược.'],
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
    id: 'chem11-qt41',
    topicId: 'chem11-t3',
    name: 'Phân tích nguyên tố và xác định công thức phân tử',
    slug: 'phan-tich-nguyen-to-xac-dinh-cong-thuc-phan-tu',
    description: 'Dùng sản phẩm cháy để suy ra C, H, dùng hiệu khối lượng cho O khi hợp lệ, rồi kết hợp phân tử khối để lập và kiểm tra CTPT.',
    exampleQuestionId: 'chem11-org-q097',
    theory: [
      'Đốt cháy hoàn toàn: n(C) = n(CO₂), n(H) = 2n(H₂O).',
      'Nếu chất chỉ chứa C, H, O: m(O) = m(mẫu) − m(C) − m(H), rồi n(O) = m(O)/16.',
      'Từ tỉ lệ mol lập CTĐGN, sau đó n = M/M(CTĐGN) để suy ra CTPT.'
    ],
    recognitionSigns: [
      'Đề cho khối lượng hoặc số mol CO₂, H₂O sau đốt cháy.',
      'Đề xác nhận chất chỉ chứa C, H, O và cho khối lượng mẫu.',
      'Đề cung cấp phân tử khối, tỉ khối hơi hoặc dữ kiện tương đương.'
    ],
    solvingSteps: [
      'Quy đổi sản phẩm cháy thành mol C và mol H.',
      'Nếu đủ điều kiện, dùng bảo toàn khối lượng để tìm O; lập tỉ lệ mol tối giản.',
      'Dùng phân tử khối tìm bội n và kiểm tra ngược toàn bộ dữ kiện.'
    ],
    commonMistakes: [
      'Cho n(H) = n(H₂O).',
      'Gán oxygen trong sản phẩm cháy hoàn toàn cho mẫu.',
      'Dùng hiệu khối lượng cho O khi chất có thể chứa nguyên tố khác.'
    ],
    difficulty: 'hard',
    examFrequency: 'high',
    subTypes: [
      {
        id: 'chem11-org-st-combustion-ch',
        name: 'Suy ra carbon và hydrogen từ sản phẩm cháy',
        example: '4,4 g CO₂ và 1,8 g H₂O.',
        recognitionSigns: ['Có CO₂, H₂O sau cháy.'],
        targetQuestionCount: 4
      },
      {
        id: 'chem11-org-st-combustion-cho',
        name: 'Tìm oxygen bằng hiệu khối lượng',
        example: 'Chất chỉ chứa C, H, O và biết khối lượng mẫu.',
        recognitionSigns: ['Có cụm “chỉ chứa C, H, O”.'],
        targetQuestionCount: 4
      },
      {
        id: 'chem11-org-st-molecular-formula-final',
        name: 'Lập và kiểm tra công thức phân tử',
        example: 'CTĐGN CH₂O, M = 60 → C₂H₄O₂.',
        recognitionSigns: ['Có CTĐGN hoặc dữ liệu cháy kèm phân tử khối.'],
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
    id: 'chem11-qt42', topicId: 'chem11-t3',
    name: 'Thuyết cấu tạo và biểu diễn công thức cấu tạo',
    slug: 'thuyet-cau-tao-va-bieu-dien-ctct',
    description: 'Kiểm tra hóa trị, trật tự liên kết, khả năng tạo mạch và chuyển đổi CTCT đầy đủ–thu gọn.',
    exampleQuestionId: 'chem11-org-q109',
    theory: [
      'Nguyên tử liên kết đúng hóa trị và theo trật tự xác định; carbon hóa trị IV.',
      'Carbon tạo mạch thẳng, nhánh, vòng và liên kết đơn/bội; tính chất phụ thuộc cả thành phần lẫn cấu tạo.',
      'CTCT đầy đủ và thu gọn khác mức chi tiết nhưng phải bảo toàn cách nối nguyên tử.'
    ],
    recognitionSigns: ['Có yêu cầu kiểm tra hóa trị.', 'Có CTPT và nhiều cách nối.', 'Có chuyển đổi CTCT đầy đủ–thu gọn.'],
    solvingSteps: ['Kiểm tra tổng liên kết mỗi nguyên tử.', 'Theo dõi cách nối khung carbon và nhóm chức.', 'Đếm lại nguyên tử để khớp CTPT.'],
    commonMistakes: ['Chỉ đếm nguyên tử mà bỏ hóa trị.', 'Cho CTPT quyết định duy nhất cấu tạo.', 'Mất nhóm nguyên tử khi thu gọn.'],
    difficulty: 'medium', examFrequency: 'high',
    subTypes: [
      { id: 'chem11-org-st-structure-theory', name: 'Nội dung thuyết cấu tạo', example: 'Carbon hóa trị IV và liên kết theo trật tự.', recognitionSigns: ['Câu phát biểu đúng/sai về thuyết cấu tạo.'], targetQuestionCount: 4 },
      { id: 'chem11-org-st-structure-validity', name: 'Kiểm tra hóa trị và khung carbon', example: 'Chọn cấu tạo thỏa hóa trị.', recognitionSigns: ['Có nhiều sơ đồ liên kết.'], targetQuestionCount: 4 },
      { id: 'chem11-org-st-structure-representation', name: 'CTCT đầy đủ và thu gọn', example: 'CH₃CH₂OH.', recognitionSigns: ['Yêu cầu chuyển hoặc đọc CTCT.'], targetQuestionCount: 4 }
    ],
    practiceCoverage: { targetQuestionCount: 12, minimumQuestionsPerSubType: 4, requiredPracticeRoles: ['guided','near_transfer','misconception_check','far_transfer'], requiredRepresentations: ['text','diagram','equation'], masteryHoldoutCount: 3 }
  },
  {
    id: 'chem11-qt43', topicId: 'chem11-t3',
    name: 'Chất đồng đẳng và dãy đồng đẳng',
    slug: 'chat-dong-dang-day-dong-dang',
    description: 'Nhận diện cùng kiểu cấu tạo/nhóm chức, chênh CH₂ và suy luận thành viên trong dãy.',
    exampleQuestionId: 'chem11-org-q121',
    theory: [
      'Các chất đồng đẳng có cấu tạo và tính chất hóa học tương tự, CTPT hơn kém một hay nhiều CH₂.',
      'Chênh CH₂ là điều kiện cần nhưng chưa đủ; phải cùng loại cấu tạo hoặc nhóm chức.',
      'Đồng đẳng khác CTPT, khác với đồng phân là cùng CTPT.'
    ],
    recognitionSigns: ['Đề cho cặp CTPT/CTCT.', 'Yêu cầu tìm chất kế tiếp.', 'So sánh đồng đẳng với đồng phân.'],
    solvingSteps: ['So nhóm chức và kiểu liên kết.', 'Tính chênh lệch thành phần.', 'Kết luận cùng dãy rồi suy ra thành viên.'],
    commonMistakes: ['Chỉ thấy chênh CH₂ là kết luận.', 'Bỏ qua nhóm chức.', 'Nhầm với đồng phân.'],
    difficulty: 'medium', examFrequency: 'high',
    subTypes: [
      { id: 'chem11-org-st-homolog-concept', name: 'Khái niệm đồng đẳng', example: 'CH₄ và C₂H₆.', recognitionSigns: ['Hỏi định nghĩa hoặc điều kiện.'], targetQuestionCount: 4 },
      { id: 'chem11-org-st-homolog-pair', name: 'Nhận diện cặp đồng đẳng', example: 'CH₃OH và C₂H₅OH.', recognitionSigns: ['Có nhiều cặp chất.'], targetQuestionCount: 4 },
      { id: 'chem11-org-st-homolog-sequence', name: 'Suy luận dãy đồng đẳng', example: 'Tìm chất sau C₃H₈.', recognitionSigns: ['Có dãy hoặc vị trí thành viên.'], targetQuestionCount: 4 }
    ],
    practiceCoverage: { targetQuestionCount: 12, minimumQuestionsPerSubType: 4, requiredPracticeRoles: ['guided','near_transfer','misconception_check','far_transfer'], requiredRepresentations: ['text','table','equation'], masteryHoldoutCount: 3 }
  },
  {
    id: 'chem11-qt44', topicId: 'chem11-t3',
    name: 'Đồng phân và viết công thức cấu tạo đơn giản',
    slug: 'dong-phan-va-viet-ctct',
    description: 'Phân biệt đồng phân–đồng đẳng–cùng chất và liệt kê không trùng cấu tạo đơn giản.',
    exampleQuestionId: 'chem11-org-q133',
    theory: [
      'Đồng phân có cùng CTPT nhưng khác cách nối nguyên tử.',
      'Viết ngược, xoay hoặc thay kiểu trình bày không tạo đồng phân mới nếu liên kết không đổi.',
      'Liệt kê có hệ thống: đổi khung carbon, sau đó vị trí nhóm/liên kết trong phạm vi yêu cầu và kiểm tra trùng.'
    ],
    recognitionSigns: ['Có cùng CTPT và nhiều CTCT.', 'Hỏi số cấu tạo.', 'Yêu cầu phân biệt cùng chất/đồng đẳng/đồng phân.'],
    solvingSteps: ['Kiểm tra CTPT trước.', 'So bảng liên kết hoặc khung carbon.', 'Liệt kê hệ thống và loại cấu tạo trùng do đối xứng/viết ngược.'],
    commonMistakes: ['Khác CTPT vẫn gọi đồng phân.', 'Đếm hai hướng viết thành hai chất.', 'Bỏ mạch nhánh.'],
    difficulty: 'hard', examFrequency: 'high',
    subTypes: [
      { id: 'chem11-org-st-isomer-concept', name: 'Khái niệm và phân loại quan hệ', example: 'Cùng CTPT, khác CTCT.', recognitionSigns: ['Hỏi định nghĩa hoặc quan hệ.'], targetQuestionCount: 4 },
      { id: 'chem11-org-st-isomer-identify', name: 'Nhận diện cặp đồng phân', example: 'Ethanol và dimethyl ether.', recognitionSigns: ['Có cặp CTCT cụ thể.'], targetQuestionCount: 4 },
      { id: 'chem11-org-st-isomer-enumerate', name: 'Liệt kê cấu tạo đơn giản', example: 'Hai khung carbon của C₄H₁₀.', recognitionSigns: ['Hỏi số hoặc danh sách CTCT.'], targetQuestionCount: 4 }
    ],
    practiceCoverage: { targetQuestionCount: 12, minimumQuestionsPerSubType: 4, requiredPracticeRoles: ['guided','near_transfer','misconception_check','far_transfer'], requiredRepresentations: ['text','diagram','equation'], masteryHoldoutCount: 3 }
  }
];

for (const questionType of g11ChemistryOrganicBasicsQuestionTypes) {
  const resource = chem11OrganicBasicsTheoryResources[questionType.id];
  if (!resource) continue;
  questionType.theory = [...(questionType.theory ?? []), ...resource.theorySupplement];
  questionType.theoryCheckpoints = resource.checkpoints;
}
