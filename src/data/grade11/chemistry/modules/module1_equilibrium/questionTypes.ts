import type { QuestionType } from '@/types';
import {
  chem11Qt01Theory,
  chem11Qt02Theory,
  chem11Qt03Theory,
  chem11Qt04Theory,
  chem11Qt05Theory,
  chem11Qt06Theory,
  chem11Qt07Theory,
  chem11Qt08Theory,
  chem11Qt09Theory,
  chem11Qt10Theory,
  chem11Qt11Theory,
  chem11Qt12Theory,
  chem11Qt13Theory,
  chem11Qt14Theory
} from './theory';
import { chem11EquilibriumTheoryCheckpoints } from './theoryCheckpoints';

export const g11ChemistryEquilibriumQuestionTypes: QuestionType[] = [
  {
    id: 'chem11-qt01',
    topicId: 'chem11-t1',
    name: 'Phản ứng thuận nghịch và cân bằng động',
    slug: 'phan-ung-thuan-nghich-can-bang-dong',
    description: 'Nhận diện phản ứng thuận nghịch và giải thích đúng trạng thái cân bằng ở cấp độ vĩ mô, vi mô.',
    exampleQuestionId: 'chem11-eq-q001',
    theory: chem11Qt01Theory,
    recognitionSigns: [
      'Phương trình có dấu $\\rightleftharpoons$ hoặc đề mô tả hai chiều phản ứng.',
      'Đề hỏi phản ứng có dừng hay không, tốc độ hai chiều hoặc nồng độ ở trạng thái cân bằng.'
    ],
    solvingSteps: [
      'Xác định hệ đang xét có phản ứng theo hai chiều trong cùng điều kiện hay không.',
      'Tách cấp độ vĩ mô: thành phần hệ ổn định; và vi mô: hai chiều vẫn diễn ra.',
      'Kết luận cân bằng khi $v_{thuận}=v_{nghịch}$, không suy diễn các nồng độ phải bằng nhau.'
    ],
    commonMistakes: [
      'Cho rằng ở cân bằng cả hai phản ứng đều dừng.',
      'Cho rằng nồng độ chất đầu và sản phẩm phải bằng nhau.',
      'Nhầm phản ứng thuận nghịch với hai phản ứng xảy ra ở hai điều kiện khác nhau.'
    ],
    difficulty: 'easy',
    examFrequency: 'high',
    subTypes: [
      {
        id: 'chem11-eq-st-reversible',
        name: 'Nhận diện và biểu diễn phản ứng thuận nghịch',
        example: 'Phân biệt $N_2+3H_2\\rightleftharpoons2NH_3$ với phản ứng cháy hoàn toàn.',
        recognitionSigns: ['Có hai chiều xảy ra trong cùng điều kiện hoặc dấu hai chiều.'],
        targetQuestionCount: 4
      },
      {
        id: 'chem11-eq-st-dynamic',
        name: 'Giải thích bản chất cân bằng động',
        example: 'Giải thích vì sao thành phần hệ không đổi nhưng phản ứng chưa dừng.',
        recognitionSigns: ['Hỏi về tốc độ thuận, tốc độ nghịch và trạng thái vi mô.'],
        targetQuestionCount: 4
      },
      {
        id: 'chem11-eq-st-concentration',
        name: 'Phân biệt ổn định nồng độ với bằng nhau về nồng độ',
        example: 'Đánh giá phát biểu “ở cân bằng, mọi chất có nồng độ bằng nhau”.',
        recognitionSigns: ['So sánh nồng độ các chất ở trạng thái cân bằng.'],
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
    id: 'chem11-qt02',
    topicId: 'chem11-t1',
    name: 'Đọc bảng và đồ thị cân bằng',
    slug: 'doc-bang-do-thi-can-bang',
    description: 'Xác định thời điểm hệ đạt cân bằng từ dữ liệu nồng độ–thời gian hoặc tốc độ–thời gian và giải thích bằng chứng.',
    exampleQuestionId: 'chem11-eq-q013',
    theory: chem11Qt02Theory,
    recognitionSigns: [
      'Đề cho bảng hoặc đồ thị theo thời gian.',
      'Yêu cầu xác định thời điểm cân bằng hoặc chọn bằng chứng cho cân bằng động.'
    ],
    solvingSteps: [
      'Đọc đúng trục, đơn vị và đại lượng: nồng độ hay tốc độ.',
      'Tìm thời điểm các nồng độ ổn định hoặc hai tốc độ bằng nhau.',
      'Dùng dữ liệu để kết luận, không dựa vào cảm giác đường cong “gần phẳng”.'
    ],
    commonMistakes: [
      'Chọn thời điểm hai đường nồng độ cắt nhau.',
      'Nhầm điều kiện hai tốc độ bằng nhau thành hai nồng độ bằng nhau.',
      'Kết luận phản ứng dừng khi đồ thị nồng độ nằm ngang.'
    ],
    difficulty: 'medium',
    examFrequency: 'high',
    subTypes: [
      {
        id: 'chem11-eq-st-table',
        name: 'Xác định cân bằng từ bảng nồng độ–thời gian',
        example: 'Tìm thời điểm từ đó các nồng độ liên tiếp không đổi.',
        recognitionSigns: ['Dữ liệu được cho dưới dạng các hàng thời gian và nồng độ.'],
        targetQuestionCount: 4
      },
      {
        id: 'chem11-eq-st-concentration-graph',
        name: 'Đọc đồ thị nồng độ–thời gian',
        example: 'Nhận diện đoạn nằm ngang của các đường nồng độ.',
        recognitionSigns: ['Trục tung là nồng độ, trục hoành là thời gian.'],
        targetQuestionCount: 4
      },
      {
        id: 'chem11-eq-st-rate-graph',
        name: 'Đọc đồ thị tốc độ thuận–nghịch',
        example: 'Tìm thời điểm $v_{thuận}=v_{nghịch}$.',
        recognitionSigns: ['Có hai đường tốc độ thuận và tốc độ nghịch.'],
        targetQuestionCount: 4
      }
    ],
    practiceCoverage: {
      targetQuestionCount: 12,
      minimumQuestionsPerSubType: 4,
      requiredPracticeRoles: ['guided', 'near_transfer', 'representation_switch', 'far_transfer'],
      requiredRepresentations: ['table', 'graph', 'text'],
      masteryHoldoutCount: 3
    }
  },
  {
    id: 'chem11-qt03',
    topicId: 'chem11-t1',
    name: 'Viết, tính và diễn giải hằng số cân bằng Kc',
    slug: 'viet-tinh-dien-giai-hang-so-can-bang-kc',
    description: 'Thiết lập biểu thức $K_C$, tính từ nồng độ cân bằng và diễn giải định tính mức độ ưu thế của chất đầu hoặc sản phẩm.',
    exampleQuestionId: 'chem11-eq-q025',
    theory: chem11Qt03Theory,
    recognitionSigns: [
      'Đề cho phương trình thuận nghịch và yêu cầu viết biểu thức hoặc tính $K_C$.',
      'Đề cho nồng độ ở cân bằng hoặc bảng thành phần cân bằng.',
      'Đề yêu cầu diễn giải $K_C$ lớn, nhỏ hoặc so sánh mức độ ưu thế ở cân bằng.'
    ],
    solvingSteps: [
      'Cân bằng phương trình và xác định trạng thái của từng chất.',
      'Viết sản phẩm ở tử, chất đầu ở mẫu; dùng hệ số làm số mũ và bỏ pha tinh khiết.',
      'Chỉ thay nồng độ cân bằng, tính lũy thừa trước rồi kiểm tra lại biểu thức.',
      'Nếu câu hỏi định tính, kết luận về thành phần cân bằng; không suy ra tốc độ phản ứng.'
    ],
    commonMistakes: [
      'Nhân nồng độ với hệ số thay vì dùng hệ số làm số mũ.',
      'Đưa chất rắn hoặc chất lỏng tinh khiết vào biểu thức.',
      'Thay nồng độ ban đầu vào biểu thức $K_C$.',
      'Cho rằng $K_C$ lớn nghĩa là phản ứng xảy ra nhanh.'
    ],
    difficulty: 'medium',
    examFrequency: 'high',
    subTypes: [
      {
        id: 'chem11-eq-st-kc-expression',
        name: 'Viết biểu thức Kc',
        example: 'Viết $K_C$ cho $N_2+3H_2\\rightleftharpoons2NH_3$.',
        recognitionSigns: ['Cho phương trình và yêu cầu lập biểu thức hằng số cân bằng.'],
        targetQuestionCount: 4
      },
      {
        id: 'chem11-eq-st-kc-calculation',
        name: 'Tính Kc từ nồng độ cân bằng',
        example: 'Thay các nồng độ cân bằng vào biểu thức đã lập.',
        recognitionSigns: ['Có cụm “ở trạng thái cân bằng” kèm các nồng độ.'],
        targetQuestionCount: 4
      },
      {
        id: 'chem11-eq-st-kc-meaning',
        name: 'Diễn giải giá trị Kc',
        example: 'Giải thích ý nghĩa của $K_C=2{,}0\\times10^5$.',
        recognitionSigns: ['Yêu cầu nhận xét thành phần cân bằng hoặc ý nghĩa $K_C$ lớn/nhỏ.'],
        targetQuestionCount: 4
      }
    ],
    practiceCoverage: {
      targetQuestionCount: 12,
      minimumQuestionsPerSubType: 4,
      requiredPracticeRoles: ['guided', 'near_transfer', 'representation_switch', 'misconception_check', 'far_transfer'],
      requiredRepresentations: ['equation', 'table', 'text'],
      masteryHoldoutCount: 3
    }
  },
  {
    id: 'chem11-qt04',
    topicId: 'chem11-t1',
    name: 'Chuyển dịch cân bằng theo nồng độ và áp suất',
    slug: 'chuyen-dich-can-bang-nong-do-ap-suat',
    description: 'Vận dụng nguyên lí Le Chatelier để dự đoán và giải thích chiều chuyển dịch khi thay đổi nồng độ, áp suất hoặc thể tích.',
    exampleQuestionId: 'chem11-eq-q037',
    theory: chem11Qt04Theory,
    recognitionSigns: [
      'Đề có các động từ thêm, bớt, lấy ra hoặc thay đổi nồng độ một chất.',
      'Đề thay đổi áp suất/thể tích của một hệ có chất khí.',
      'Đề hỏi cân bằng có chuyển dịch hay không và giá trị $K_C$ có đổi không.'
    ],
    solvingSteps: [
      'Viết và cân bằng phương trình; xác định chất hoặc đại lượng bị tác động.',
      'Nếu đổi nồng độ, xác định chiều nào tiêu thụ hoặc tạo thêm chất bị thay đổi.',
      'Nếu đổi áp suất/thể tích, chỉ đếm hệ số của các chất khí ở mỗi vế.',
      'Kết luận chiều chuyển dịch và tách riêng kết luận về $K_C$: ở cùng nhiệt độ, $K_C$ không đổi.'
    ],
    commonMistakes: [
      'Học thuộc “thêm chất dịch sang phía đối diện” nhưng không xét chất nằm ở vế nào.',
      'Cho rằng tăng áp suất luôn làm cân bằng chuyển dịch.',
      'Đếm cả chất rắn hoặc chất lỏng khi so sánh số mol khí.',
      'Cho rằng thành phần cân bằng thay đổi đồng nghĩa $K_C$ thay đổi.'
    ],
    difficulty: 'medium',
    examFrequency: 'high',
    subTypes: [
      {
        id: 'chem11-eq-st-shift-concentration',
        name: 'Thay đổi nồng độ',
        example: 'Thêm $H_2$ vào $N_2+3H_2\\rightleftharpoons2NH_3$.',
        recognitionSigns: ['Thêm/bớt một chất hoặc thay đổi trực tiếp nồng độ.'],
        targetQuestionCount: 4
      },
      {
        id: 'chem11-eq-st-shift-pressure',
        name: 'Thay đổi áp suất hoặc thể tích',
        example: 'Giảm thể tích hệ khí và so sánh tổng hệ số khí hai vế.',
        recognitionSigns: ['Nén, giãn, tăng/giảm áp suất hoặc thể tích bình.'],
        targetQuestionCount: 4
      },
      {
        id: 'chem11-eq-st-shift-no-effect',
        name: 'Trường hợp không chuyển dịch và Kc không đổi',
        example: 'Nén hệ có tổng số mol khí hai vế bằng nhau.',
        recognitionSigns: ['Hai vế có cùng số mol khí, thêm chất rắn hoặc hỏi $K_C$ ở cùng nhiệt độ.'],
        targetQuestionCount: 4
      }
    ],
    practiceCoverage: {
      targetQuestionCount: 12,
      minimumQuestionsPerSubType: 4,
      requiredPracticeRoles: ['guided', 'near_transfer', 'representation_switch', 'misconception_check', 'far_transfer'],
      requiredRepresentations: ['equation', 'table', 'text'],
      masteryHoldoutCount: 3
    }
  },
  {
    id: 'chem11-qt05',
    topicId: 'chem11-t1',
    name: 'Nhiệt độ, xúc tác và điều kiện sản xuất',
    slug: 'nhiet-do-xuc-tac-dieu-kien-san-xuat',
    description: 'Dự đoán ảnh hưởng của nhiệt độ, phân biệt vai trò xúc tác và đánh giá sự thỏa hiệp khi chọn điều kiện sản xuất.',
    exampleQuestionId: 'chem11-eq-q049',
    theory: chem11Qt05Theory,
    recognitionSigns: [
      'Đề cho $\\Delta H$, nói phản ứng tỏa nhiệt/thu nhiệt hoặc thay đổi nhiệt độ.',
      'Đề thêm xúc tác và hỏi tốc độ, thời gian đạt cân bằng, hiệu suất hoặc $K_C$.',
      'Đề yêu cầu chọn điều kiện sản xuất thay vì chỉ hỏi chiều chuyển dịch.'
    ],
    solvingSteps: [
      'Xác định chiều thuận là tỏa nhiệt hay thu nhiệt từ dấu $\\Delta H$.',
      'Nếu đổi nhiệt độ, chọn chiều hấp thụ bớt tác động nhiệt; nếu thêm xúc tác, tách tốc độ khỏi vị trí cân bằng.',
      'Với bài sản xuất, đánh giá riêng hiệu suất, tốc độ, năng lượng, an toàn và chi phí.',
      'Kết luận đúng phạm vi: chỉ nhiệt độ trong các tác động đang xét làm thay đổi $K_C$.'
    ],
    commonMistakes: [
      'Cho rằng tăng nhiệt độ luôn làm cân bằng sang phải.',
      'Cho rằng xúc tác làm tăng hiệu suất hoặc $K_C$.',
      'Chỉ tối đa hóa hiệu suất cân bằng mà bỏ qua tốc độ và an toàn.',
      'Không phân biệt hiệu ứng tức thời với trạng thái cân bằng mới.'
    ],
    difficulty: 'medium',
    examFrequency: 'high',
    subTypes: [
      {
        id: 'chem11-eq-st-shift-temperature',
        name: 'Chuyển dịch và Kc khi đổi nhiệt độ',
        example: 'Dùng dấu $\\Delta H$ để xác định chiều chuyển dịch khi tăng nhiệt độ.',
        recognitionSigns: ['Có nhiệt độ, $\\Delta H$ hoặc từ khóa tỏa nhiệt/thu nhiệt.'],
        targetQuestionCount: 4
      },
      {
        id: 'chem11-eq-st-catalyst',
        name: 'Vai trò của chất xúc tác',
        example: 'So sánh thời gian đạt cân bằng và thành phần cân bằng khi có xúc tác.',
        recognitionSigns: ['Đề nhắc xúc tác, năng lượng hoạt hóa hoặc thời gian đạt cân bằng.'],
        targetQuestionCount: 4
      },
      {
        id: 'chem11-eq-st-industry-tradeoff',
        name: 'Đánh đổi trong sản xuất hóa học',
        example: 'Chọn nhiệt độ, áp suất và xúc tác phù hợp cho quá trình Haber.',
        recognitionSigns: ['Có bối cảnh nhà máy, hiệu suất, tốc độ, chi phí hoặc an toàn.'],
        targetQuestionCount: 4
      }
    ],
    practiceCoverage: {
      targetQuestionCount: 12,
      minimumQuestionsPerSubType: 4,
      requiredPracticeRoles: ['guided', 'near_transfer', 'representation_switch', 'misconception_check', 'far_transfer'],
      requiredRepresentations: ['equation', 'table', 'text'],
      masteryHoldoutCount: 3
    }
  },
  {
    id: 'chem11-qt06',
    topicId: 'chem11-t1',
    name: 'Phân tích thí nghiệm cân bằng NO₂/N₂O₄',
    slug: 'phan-tich-thi-nghiem-can-bang-no2-n2o4',
    description: 'Đọc hiện tượng, thiết kế biến kiểm soát, xử lí dữ liệu và thực hành an toàn với hệ kín $2NO_2\\rightleftharpoons N_2O_4$.',
    exampleQuestionId: 'chem11-eq-q061',
    theory: chem11Qt06Theory,
    recognitionSigns: [
      'Đề mô tả ống kín chứa khí nâu, bể nước nóng/lạnh hoặc hệ $NO_2/N_2O_4$.',
      'Đề yêu cầu xác định biến độc lập, biến kiểm soát, kết luận hoặc lỗi an toàn.',
      'Đề cho bảng nhiệt độ–mức màu hoặc chuỗi quan sát thuận nghịch.'
    ],
    solvingSteps: [
      'Gắn màu nâu với $NO_2$ và gần như không màu với $N_2O_4$.',
      'Xác định chiều chuyển dịch từ thay đổi màu, rồi kiểm tra với tính tỏa nhiệt của chiều tạo $N_2O_4$.',
      'Khi phân tích thiết kế, tách biến nhiệt độ khỏi thời gian chờ, lượng khí, thể tích và điều kiện quan sát.',
      'Kiểm tra an toàn hệ kín và chỉ kết luận từ dữ liệu sau khi hệ đã ổn định.'
    ],
    commonMistakes: [
      'Gắn màu nâu cho $N_2O_4$.',
      'Đọc màu ngay lập tức rồi coi đó là cân bằng mới.',
      'Thay đổi đồng thời nhiệt độ và lượng khí giữa các mẫu.',
      'Đề xuất mở ống hoặc ngửi khí để nhận biết.'
    ],
    difficulty: 'medium',
    examFrequency: 'medium',
    subTypes: [
      {
        id: 'chem11-eq-st-no2-observation',
        name: 'Giải thích hiện tượng màu',
        example: 'Giải thích màu nâu nhạt khi làm lạnh ống kín.',
        recognitionSigns: ['Mô tả màu nâu đậm/nhạt khi nóng hoặc lạnh.'],
        targetQuestionCount: 4
      },
      {
        id: 'chem11-eq-st-no2-design-safety',
        name: 'Thiết kế và an toàn thí nghiệm',
        example: 'Chọn biến kiểm soát và thao tác an toàn cho hệ kín.',
        recognitionSigns: ['Hỏi biến thí nghiệm, quy trình, đối chứng hoặc an toàn.'],
        targetQuestionCount: 4
      },
      {
        id: 'chem11-eq-st-no2-data',
        name: 'Đọc dữ liệu và đánh giá kết luận',
        example: 'Dùng bảng nhiệt độ–chỉ số màu để suy ra chiều thu nhiệt.',
        recognitionSigns: ['Có bảng số liệu, chuỗi đo hoặc yêu cầu đánh giá độ tin cậy.'],
        targetQuestionCount: 4
      }
    ],
    practiceCoverage: {
      targetQuestionCount: 12,
      minimumQuestionsPerSubType: 4,
      requiredPracticeRoles: ['guided', 'near_transfer', 'representation_switch', 'misconception_check', 'far_transfer'],
      requiredRepresentations: ['experiment', 'table', 'text'],
      masteryHoldoutCount: 3
    }
  },
  {
    id: 'chem11-qt07',
    topicId: 'chem11-t1',
    name: 'Sự điện li và phương trình điện li',
    slug: 'su-dien-li-phuong-trinh-dien-li',
    description: 'Nhận diện chất điện li, viết phương trình điện li và phân biệt điện li mạnh/yếu với đậm đặc/loãng.',
    exampleQuestionId: 'chem11-eq-q073',
    theory: chem11Qt07Theory,
    recognitionSigns: [
      'Đề cho thí nghiệm bóng đèn, độ dẫn điện hoặc mô tả ion trong dung dịch.',
      'Đề yêu cầu viết quá trình tạo ion và kiểm tra hệ số/điện tích.',
      'Đề so sánh điện li mạnh/yếu với nồng độ dung dịch.'
    ],
    solvingSteps: [
      'Xác định chất có tạo ion tự do trong dung dịch hay không.',
      'Nếu viết phương trình, tách đúng ion, đặt hệ số và kiểm tra tổng điện tích.',
      'Chọn mũi tên phù hợp với mức độ điện li trong phạm vi đang học.',
      'Khi so sánh độ dẫn điện, kiểm tra đồng thời nồng độ, số ion và mức độ điện li.'
    ],
    commonMistakes: [
      'Cho rằng mọi chất tan đều điện li.',
      'Viết sai hệ số hoặc không bảo toàn điện tích.',
      'Đồng nhất chất điện li mạnh với dung dịch đậm đặc.',
      'Cho rằng tinh thể ion rắn luôn dẫn điện.'
    ],
    difficulty: 'medium',
    examFrequency: 'high',
    subTypes: [
      {
        id: 'chem11-aq-st-electrolyte-evidence',
        name: 'Nhận diện chất điện li từ bằng chứng',
        example: 'Dùng dữ liệu dẫn điện để phân biệt dung dịch muối và dung dịch đường.',
        recognitionSigns: ['Có bóng đèn, dòng điện, ion tự do hoặc mô hình hạt.'],
        targetQuestionCount: 4
      },
      {
        id: 'chem11-aq-st-dissociation-equation',
        name: 'Viết và kiểm tra phương trình điện li',
        example: 'Viết $CaCl_2\\rightarrow Ca^{2+}+2Cl^-$.',
        recognitionSigns: ['Yêu cầu tách ion, đặt hệ số hoặc kiểm tra điện tích.'],
        targetQuestionCount: 4
      },
      {
        id: 'chem11-aq-st-strong-weak',
        name: 'Điện li mạnh/yếu và dữ liệu hạt',
        example: 'Phân biệt HCl loãng với acid acetic đậm đặc theo mức độ điện li.',
        recognitionSigns: ['Có từ mạnh/yếu, hoàn toàn/một phần, phân tử chưa điện li hoặc độ dẫn điện.'],
        targetQuestionCount: 4
      }
    ],
    practiceCoverage: {
      targetQuestionCount: 12,
      minimumQuestionsPerSubType: 4,
      requiredPracticeRoles: ['guided', 'near_transfer', 'representation_switch', 'misconception_check', 'far_transfer'],
      requiredRepresentations: ['experiment', 'equation', 'table', 'text'],
      masteryHoldoutCount: 3
    }
  },
  {
    id: 'chem11-qt08',
    topicId: 'chem11-t1',
    name: 'Acid–base theo Brønsted–Lowry',
    slug: 'acid-base-bronsted-lowry',
    description: 'Xác định chất cho/nhận proton, cặp liên hợp và vai trò lưỡng tính trong phản ứng cụ thể.',
    exampleQuestionId: 'chem11-eq-q085',
    theory: chem11Qt08Theory,
    recognitionSigns: [
      'Phương trình có sự chuyển proton giữa hai chất.',
      'Đề hỏi chất nào cho/nhận $H^+$ hoặc yêu cầu ghép cặp liên hợp.',
      'Một chất xuất hiện với vai trò khác nhau trong hai phản ứng.'
    ],
    solvingSteps: [
      'So công thức trước và sau để theo dõi proton được chuyển từ chất nào sang chất nào.',
      'Chất mất một proton là acid; chất nhận một proton là base.',
      'Ghép mỗi chất với sản phẩm khác nó đúng một proton để tìm cặp liên hợp.',
      'Nếu xét lưỡng tính, đưa ra hai phản ứng riêng chứng minh khả năng cho và nhận proton.'
    ],
    commonMistakes: [
      'Cứ có H là acid hoặc có OH là base.',
      'Ghép hai chất không khác nhau đúng một proton.',
      'Gán vai trò acid/base cố định cho một chất.',
      'Nhầm điện tích thay đổi với số proton chuyển.'
    ],
    difficulty: 'medium',
    examFrequency: 'high',
    subTypes: [
      {
        id: 'chem11-aq-st-bronsted-role',
        name: 'Xác định acid và base',
        example: 'Trong $NH_3+H_2O\\rightleftharpoons NH_4^++OH^-$, $NH_3$ nhận proton nên là base.',
        recognitionSigns: ['Hỏi chất cho hoặc nhận proton trong một phương trình.'],
        targetQuestionCount: 4
      },
      {
        id: 'chem11-aq-st-conjugate-pair',
        name: 'Xác định cặp liên hợp',
        example: 'Ghép $NH_4^+/NH_3$ vì hai chất khác nhau một proton.',
        recognitionSigns: ['Hỏi cặp acid–base liên hợp hoặc sản phẩm sau khi cho/nhận proton.'],
        targetQuestionCount: 4
      },
      {
        id: 'chem11-aq-st-amphiprotic',
        name: 'Vai trò phụ thuộc phản ứng và chất lưỡng tính',
        example: 'Chứng minh $HCO_3^-$ vừa nhận vừa cho proton.',
        recognitionSigns: ['Cho hai phản ứng khác nhau của cùng một chất hoặc hỏi tính lưỡng tính.'],
        targetQuestionCount: 4
      }
    ],
    practiceCoverage: {
      targetQuestionCount: 12,
      minimumQuestionsPerSubType: 4,
      requiredPracticeRoles: ['guided', 'near_transfer', 'representation_switch', 'misconception_check', 'far_transfer'],
      requiredRepresentations: ['equation', 'table', 'text'],
      masteryHoldoutCount: 3
    }
  },
  {
    id: 'chem11-qt09',
    topicId: 'chem11-t1',
    name: 'Cân bằng nước và tính pH',
    slug: 'can-bang-nuoc-tinh-ph',
    description: 'Dùng tích số ion của nước, chuyển đổi pH và tính pH của acid/base mạnh trong các tình huống đơn giản.',
    exampleQuestionId: 'chem11-eq-q097',
    theory: chem11Qt09Theory,
    recognitionSigns: [
      'Đề cho $[H^+]$, $[OH^-]$, $K_w$, pH hoặc pOH.',
      'Đề yêu cầu phân loại môi trường acid, base, trung tính.',
      'Đề cho acid/base mạnh, phép pha loãng hoặc trộn hai dung dịch.'
    ],
    solvingSteps: [
      'Xác định đại lượng ban đầu và điều kiện nhiệt độ; trong bộ câu hỏi này dùng $K_w=10^{-14}$ ở 25 °C.',
      'Tính nồng độ ion sau điện li, pha loãng hoặc phản ứng trung hòa; luôn xét hệ số và tổng thể tích.',
      'Dùng $K_w$, pH hoặc pOH để chuyển sang đại lượng cần tìm.',
      'Kiểm tra chiều hợp lí: môi trường acid phải có pH < 7, base có pH > 7 ở 25 °C.'
    ],
    commonMistakes: [
      'Cho rằng nước trung tính không có ion.',
      'Bỏ dấu trừ hoặc coi thang pH là tuyến tính.',
      'Thay trực tiếp $[OH^-]$ vào công thức tính pH.',
      'Bỏ hệ số tạo $OH^-$ hoặc không cộng thể tích sau khi trộn.'
    ],
    difficulty: 'medium',
    examFrequency: 'high',
    subTypes: [
      {
        id: 'chem11-aq-st-water-equilibrium',
        name: 'Cân bằng nước và phân loại môi trường',
        example: 'Dùng $K_w$ để tìm $[OH^-]$ và kết luận môi trường.',
        recognitionSigns: ['Có $K_w$, đồng thời xuất hiện $[H^+]$ và $[OH^-]$ hoặc yêu cầu phân loại môi trường.'],
        targetQuestionCount: 4
      },
      {
        id: 'chem11-aq-st-ph-conversion',
        name: 'Chuyển đổi pH và nồng độ ion hydrogen',
        example: 'Từ $[H^+]=10^{-3}$ M suy ra pH = 3.',
        recognitionSigns: ['Cho trực tiếp pH hoặc $[H^+]$ và yêu cầu đổi qua lại.'],
        targetQuestionCount: 4
      },
      {
        id: 'chem11-aq-st-ph-simple-solution',
        name: 'pH của acid/base mạnh đơn giản',
        example: 'Tính pH dung dịch $Ca(OH)_2$ sau khi xét hệ số tạo $OH^-$.',
        recognitionSigns: ['Có nồng độ acid/base mạnh, pha loãng hoặc trộn trung hòa.'],
        targetQuestionCount: 4
      }
    ],
    practiceCoverage: {
      targetQuestionCount: 12,
      minimumQuestionsPerSubType: 4,
      requiredPracticeRoles: ['guided', 'near_transfer', 'representation_switch', 'misconception_check', 'far_transfer'],
      requiredRepresentations: ['equation', 'table', 'text'],
      masteryHoldoutCount: 3
    }
  },
  {
    id: 'chem11-qt10',
    topicId: 'chem11-t1',
    name: 'Chất chỉ thị và pH trong thực tiễn',
    slug: 'chat-chi-thi-ph-thuc-tien',
    description: 'Đọc màu chỉ thị theo khoảng chuyển màu và vận dụng dữ liệu pH trong đất, nước, sức khỏe hoặc sinh trưởng sinh vật.',
    exampleQuestionId: 'chem11-eq-q109',
    theory: chem11Qt10Theory,
    recognitionSigns: [
      'Đề cho màu của quỳ, phenolphthalein, methyl orange hoặc chỉ thị vạn năng.',
      'Đề kèm bảng khoảng chuyển màu và yêu cầu suy ra khoảng pH.',
      'Đề cho pH của đất, nước, thực phẩm hoặc môi trường sống và yêu cầu ra quyết định.'
    ],
    solvingSteps: [
      'Xác định đúng chỉ thị và tra riêng khoảng chuyển màu của chỉ thị đó.',
      'Chuyển từng màu quan sát thành điều kiện hoặc khoảng pH.',
      'Nếu có nhiều phép thử, lấy giao các khoảng thay vì chọn một giá trị tùy ý.',
      'Trong bối cảnh thực tế, so dữ liệu với khoảng phù hợp và diễn giải chênh lệch pH theo thang logarit.'
    ],
    commonMistakes: [
      'Gán một màu cho một giá trị pH chính xác tuyệt đối.',
      'Dùng bảng màu của chỉ thị này để đọc chỉ thị khác.',
      'Không lấy giao khi có hai phép thử.',
      'Coi chênh lệch pH là chênh lệch tuyến tính.'
    ],
    difficulty: 'medium',
    examFrequency: 'high',
    subTypes: [
      {
        id: 'chem11-aq-st-indicator',
        name: 'Đọc và phối hợp chất chỉ thị',
        example: 'Từ methyl orange màu vàng và phenolphthalein không màu suy ra một khoảng pH.',
        recognitionSigns: ['Có tên chỉ thị, màu quan sát hoặc bảng chuyển màu.'],
        targetQuestionCount: 6
      },
      {
        id: 'chem11-aq-st-ph-context',
        name: 'Đọc dữ liệu pH thực tiễn',
        example: 'Chọn mẫu nước phù hợp cho sinh vật từ khoảng pH chịu đựng.',
        recognitionSigns: ['Có bảng pH đất/nước/sức khỏe và yêu cầu giải thích hoặc ra quyết định.'],
        targetQuestionCount: 6
      }
    ],
    practiceCoverage: {
      targetQuestionCount: 12,
      minimumQuestionsPerSubType: 4,
      requiredPracticeRoles: ['guided', 'near_transfer', 'representation_switch', 'misconception_check', 'far_transfer'],
      requiredRepresentations: ['experiment', 'table', 'text'],
      masteryHoldoutCount: 3
    }
  },
  {
    id: 'chem11-qt11',
    topicId: 'chem11-t1',
    name: 'Cân bằng ion trong nước và ứng dụng',
    slug: 'can-bang-ion-trong-nuoc-ung-dung',
    description: 'Biểu diễn cân bằng của Al³⁺, Fe³⁺, CO₃²⁻ với nước, dự đoán môi trường và giải thích dữ liệu hoặc hiện tượng thực tiễn.',
    exampleQuestionId: 'chem11-eq-q121',
    theory: chem11Qt11Theory,
    recognitionSigns: [
      'Đề có các ion $Al^{3+}$, $Fe^{3+}$ hoặc $CO_3^{2-}$ trong nước.',
      'Đề hỏi môi trường acid/base dù công thức muối không chứa sẵn $H^+$ hoặc $OH^-$.',
      'Có hiện tượng keo tụ, kết tủa hydroxide, xử lí nước hoặc bảng pH sau khi thêm muối.'
    ],
    solvingSteps: [
      'Tách rõ bước điện li của chất tan và bước ion tương tác với nước.',
      'Xác định ion nhận hay làm nước chuyển proton, rồi viết cân bằng giản lược bảo toàn nguyên tử và điện tích.',
      'Dựa vào $H^+$ hoặc $OH^-$ được tạo ra để dự đoán xu hướng môi trường.',
      'Khi xử lí dữ liệu thực tiễn, nêu điều dữ liệu hỗ trợ và giới hạn của kết luận; không mặc định thủy phân hoàn toàn.'
    ],
    commonMistakes: [
      'Đồng nhất điện li với thủy phân ion.',
      'Suy ra vai trò acid/base chỉ từ dấu điện tích.',
      'Viết mũi tên một chiều và cho rằng ion bị tiêu thụ hoàn toàn.',
      'Cho rằng oxygen trong $CO_3^{2-}$ tự tách ra thành $OH^-$.'
    ],
    difficulty: 'medium',
    examFrequency: 'medium',
    subTypes: [
      {
        id: 'chem11-aq-st-hydrolysis-representation',
        name: 'Biểu diễn và giải thích cân bằng ion–nước',
        example: 'Viết $CO_3^{2-}+H_2O\\rightleftharpoons HCO_3^-+OH^-$.',
        recognitionSigns: ['Yêu cầu viết/chọn phương trình, theo dõi proton hoặc phân biệt điện li với thủy phân.'],
        targetQuestionCount: 4
      },
      {
        id: 'chem11-aq-st-hydrolysis-environment',
        name: 'Dự đoán môi trường và hiện tượng',
        example: 'Từ cân bằng của $Fe^{3+}$ với nước suy ra dung dịch có xu hướng acid.',
        recognitionSigns: ['Hỏi môi trường, pH tương đối hoặc sự xuất hiện hydroxide/kết tủa.'],
        targetQuestionCount: 4
      },
      {
        id: 'chem11-aq-st-hydrolysis-context',
        name: 'Dữ liệu và ứng dụng thực tiễn',
        example: 'Phân tích sự thay đổi độ đục và pH khi dùng muối aluminium trong xử lí nước.',
        recognitionSigns: ['Có bảng số liệu, quy trình xử lí nước, keo tụ hoặc yêu cầu đánh giá kết luận.'],
        targetQuestionCount: 4
      }
    ],
    practiceCoverage: {
      targetQuestionCount: 12,
      minimumQuestionsPerSubType: 4,
      requiredPracticeRoles: ['guided', 'near_transfer', 'representation_switch', 'misconception_check', 'far_transfer'],
      requiredRepresentations: ['equation', 'table', 'text', 'experiment'],
      masteryHoldoutCount: 3
    }
  },
  {
    id: 'chem11-qt12',
    topicId: 'chem11-t1',
    name: 'Nguyên tắc và thao tác chuẩn độ acid–base',
    slug: 'nguyen-tac-thao-tac-chuan-do-acid-base',
    description: 'Nhận diện vai trò dung dịch, phân biệt điểm tương đương–điểm kết thúc và thực hiện đúng thao tác với burette, pipette và chỉ thị.',
    exampleQuestionId: 'chem11-eq-q133',
    theory: chem11Qt12Theory,
    recognitionSigns: [
      'Đề hỏi dung dịch chuẩn, chất phân tích, điểm tương đương hoặc điểm kết thúc.',
      'Có burette, pipette bầu, bình tam giác, chỉ thị và quy trình rửa–tráng–chuẩn độ.',
      'Có số đọc đầu/cuối trên burette hoặc yêu cầu phát hiện lỗi thao tác.'
    ],
    solvingSteps: [
      'Xác định chất đã biết nồng độ, chất cần tìm và phản ứng tỉ lượng dùng trong phép chuẩn độ.',
      'Phân biệt trạng thái hóa học tại điểm tương đương với tín hiệu quan sát tại điểm kết thúc.',
      'Kiểm tra dụng cụ đúng chức năng, cách rửa/tráng, bọt khí, tư thế đọc và lượng chỉ thị.',
      'Nếu có số đọc burette, tính $V_{dùng}=V_{cuối}-V_{đầu}$ rồi kiểm tra số chữ số và đơn vị.'
    ],
    commonMistakes: [
      'Đồng nhất tuyệt đối điểm kết thúc với điểm tương đương.',
      'Dùng số đọc cuối làm thể tích đã dùng.',
      'Để nước trong burette hoặc pipette làm pha loãng dung dịch.',
      'Đọc lệch mắt, quên chiều thang burette hoặc thêm quá nhiều chỉ thị.'
    ],
    difficulty: 'medium',
    examFrequency: 'high',
    subTypes: [
      {
        id: 'chem11-aq-st-titration-principle',
        name: 'Vai trò dung dịch và nguyên tắc chuẩn độ',
        example: 'Phân biệt dung dịch chuẩn trong burette với chất phân tích trong bình tam giác.',
        recognitionSigns: ['Hỏi mục đích, chất chuẩn, chất phân tích, tỉ lượng hoặc trình tự tổng quát.'],
        targetQuestionCount: 4
      },
      {
        id: 'chem11-aq-st-titration-endpoint',
        name: 'Điểm kết thúc và đọc thể tích burette',
        example: 'Tính thể tích dùng từ số đọc đầu và cuối, đồng thời nhận diện màu bền đầu tiên.',
        recognitionSigns: ['Có màu chỉ thị, điểm tương đương/điểm kết thúc hoặc số đọc burette.'],
        targetQuestionCount: 4
      },
      {
        id: 'chem11-aq-st-titration-apparatus',
        name: 'Dụng cụ, quy trình và lỗi thao tác',
        example: 'Chọn pipette bầu để lấy mẫu và tráng burette bằng dung dịch chuẩn.',
        recognitionSigns: ['Hỏi dụng cụ, rửa–tráng, bọt khí, mặt khum, thứ tự thao tác hoặc an toàn.'],
        targetQuestionCount: 4
      }
    ],
    practiceCoverage: {
      targetQuestionCount: 12,
      minimumQuestionsPerSubType: 4,
      requiredPracticeRoles: ['guided', 'near_transfer', 'representation_switch', 'misconception_check', 'far_transfer'],
      requiredRepresentations: ['experiment', 'table', 'text'],
      masteryHoldoutCount: 3
    }
  },
  {
    id: 'chem11-qt13',
    topicId: 'chem11-t1',
    name: 'Xử lý số liệu chuẩn độ',
    slug: 'xu-ly-so-lieu-chuan-do',
    description: 'Tính titre, chọn các lần đo phù hợp, nhận diện số liệu bất thường và báo cáo kết quả với độ chính xác hợp lí.',
    exampleQuestionId: 'chem11-eq-q145',
    theory: chem11Qt13Theory,
    recognitionSigns: [
      'Có bảng số đọc đầu–cuối, titre hoặc nhiều lần chuẩn độ.',
      'Đề cho tiêu chí chênh lệch tối đa và yêu cầu chọn các lần phù hợp.',
      'Đề hỏi giá trị trung bình, ngoại lệ, độ lặp hoặc cách báo cáo kết quả.'
    ],
    solvingSteps: [
      'Tính lại titre của từng lần bằng $V_{cuối}-V_{đầu}$ trước khi tin cột đã ghi.',
      'Tách lần thô và kiểm tra từng lần định lượng theo tiêu chí phù hợp của đề.',
      'Chỉ tính trung bình trên tập dữ liệu đã được chấp nhận; không loại ngoại lệ nếu chưa có căn cứ.',
      'Báo cáo giá trị, đơn vị, số lần đo và mức độ phân tán với số chữ số hợp lí.'
    ],
    commonMistakes: [
      'Dùng số đọc cuối thay cho titre.',
      'Đưa lần thô hoặc giá trị bất thường vào trung bình.',
      'Đòi các lần hợp lệ phải giống hệt nhau.',
      'Báo cáo quá nhiều chữ số thập phân.'
    ],
    difficulty: 'medium',
    examFrequency: 'high',
    subTypes: [
      {
        id: 'chem11-aq-st-titration-titre',
        name: 'Tính và kiểm tra titre',
        example: 'Từ số đọc đầu 0,30 mL và cuối 24,90 mL suy ra titre 24,60 mL.',
        recognitionSigns: ['Có số đọc đầu/cuối hoặc một ô titre còn thiếu/sai.'],
        targetQuestionCount: 4
      },
      {
        id: 'chem11-aq-st-titration-concordant',
        name: 'Chọn kết quả phù hợp và xử lý bất thường',
        example: 'Loại lần thô, dùng tiêu chí chênh lệch để chọn nhóm titre phù hợp.',
        recognitionSigns: ['Có nhiều lần đo, tiêu chí chấp nhận, rough titre hoặc outlier.'],
        targetQuestionCount: 4
      },
      {
        id: 'chem11-aq-st-titration-report',
        name: 'Tính trung bình và đánh giá độ lặp',
        example: 'Tính trung bình các titre được chấp nhận và báo cáo đúng chữ số.',
        recognitionSigns: ['Hỏi giá trị đại diện, range, độ lặp, cách báo cáo hoặc kết luận từ bảng.'],
        targetQuestionCount: 4
      }
    ],
    practiceCoverage: {
      targetQuestionCount: 12,
      minimumQuestionsPerSubType: 4,
      requiredPracticeRoles: ['guided', 'near_transfer', 'representation_switch', 'misconception_check', 'far_transfer'],
      requiredRepresentations: ['experiment', 'table', 'text'],
      masteryHoldoutCount: 3
    }
  },
  {
    id: 'chem11-qt14',
    topicId: 'chem11-t1',
    name: 'Tính nồng độ từ chuẩn độ',
    slug: 'tinh-nong-do-tu-chuan-do',
    description: 'Dùng titre đại diện, số mol và tỉ lệ phương trình để tính nồng độ; xử lý hệ số khác 1:1, pha loãng và bảng số liệu.',
    exampleQuestionId: 'chem11-eq-q157',
    theory: chem11Qt14Theory,
    recognitionSigns: [
      'Đề cho nồng độ dung dịch chuẩn, titre và thể tích mẫu cần tìm nồng độ.',
      'Phương trình có hệ số 1:2 hoặc ion acid/base cho nhiều $H^+$/$OH^-$.',
      'Có bảng nhiều titre, bước chọn trung bình hoặc quá trình pha loãng trước khi lấy aliquot.'
    ],
    solvingSteps: [
      'Chọn titre đại diện hợp lệ và đổi thể tích sang lít khi tính mol.',
      'Tính mol dung dịch chuẩn bằng $n=CV$.',
      'Viết quan hệ mol từ phương trình đã cân bằng rồi tìm mol chất phân tích.',
      'Chia cho thể tích aliquot để tìm nồng độ và hiệu chỉnh hệ số pha loãng nếu có; kiểm tra đơn vị và độ lớn.'
    ],
    commonMistakes: [
      'Dùng $C_1V_1=C_2V_2$ cho mọi hệ số phản ứng.',
      'Đảo tỉ lệ mol acid–base.',
      'Dùng titre thô hoặc số đọc cuối thay cho titre đại diện.',
      'Quên hệ số pha loãng hoặc áp dụng hệ số theo chiều ngược.'
    ],
    difficulty: 'medium',
    examFrequency: 'high',
    subTypes: [
      {
        id: 'chem11-aq-st-titration-calc-one-one',
        name: 'Chuẩn độ tỉ lệ 1:1',
        example: 'Tính nồng độ HCl từ titre NaOH chuẩn trong phản ứng $HCl+NaOH\\rightarrow NaCl+H_2O$.',
        recognitionSigns: ['Acid một nấc và base một nấc phản ứng theo tỉ lệ mol 1:1.'],
        targetQuestionCount: 4
      },
      {
        id: 'chem11-aq-st-titration-calc-stoich',
        name: 'Chuẩn độ có hệ số khác 1:1',
        example: 'Dùng $n_{NaOH}=2n_{H_2SO_4}$ hoặc $n_{HCl}=2n_{Ca(OH)_2}$.',
        recognitionSigns: ['Phương trình có hệ số acid/base khác nhau hoặc chất cho/nhận nhiều proton.'],
        targetQuestionCount: 4
      },
      {
        id: 'chem11-aq-st-titration-calc-multistep',
        name: 'Bảng titre, aliquot và pha loãng',
        example: 'Chọn titre phù hợp, tính nồng độ dung dịch đã pha loãng rồi suy mẫu gốc.',
        recognitionSigns: ['Có nhiều lần đo, bảng dữ liệu, bình định mức, aliquot hoặc hệ số pha loãng.'],
        targetQuestionCount: 4
      }
    ],
    practiceCoverage: {
      targetQuestionCount: 12,
      minimumQuestionsPerSubType: 4,
      requiredPracticeRoles: ['guided', 'near_transfer', 'representation_switch', 'misconception_check', 'far_transfer'],
      requiredRepresentations: ['equation', 'table', 'text'],
      masteryHoldoutCount: 3
    }
  }
];

for (const questionType of g11ChemistryEquilibriumQuestionTypes) {
  const checkpoints = chem11EquilibriumTheoryCheckpoints[questionType.id];
  if (!checkpoints) continue;
  questionType.theoryCheckpoints = checkpoints;
}
