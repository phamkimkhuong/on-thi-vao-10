import type { QuestionType } from '@/types';
import { chem11HalogenAlcoholPhenolTheoryResources } from './theoryResources';

export const g11ChemistryHalogenAlcoholPhenolQuestionTypes: QuestionType[] = [
  {
    id:'chem11-qt59',topicId:'chem11-t5',name:'Khái niệm, công thức và danh pháp dẫn xuất halogen',slug:'khai-niem-cong-thuc-danh-phap-dan-xuat-halogen',
    description:'Nhận diện dẫn xuất halogen, gọi tên thay thế C1–C5 và ghép tên thường với công thức các chất quen thuộc.',exampleQuestionId:'chem11-hal-q001',
    theory:['Dẫn xuất halogen hình thành khi thay một hay nhiều H của hydrocarbon bằng F, Cl, Br hoặc I.','Danh pháp thay thế dùng tiền tố fluoro-, chloro-, bromo-, iodo- kèm vị trí trên mạch chính.','Tên thường cần nhận biết: methyl/ethyl chloride, chloroform CHCl3, carbon tetrachloride CCl4, vinyl chloride CH2=CHCl.'],
    recognitionSigns:['Có CTPT/CTCT cần xác định có halogen liên kết với carbon.','Có yêu cầu đổi tên–công thức C1–C5.','Có tên thường như chloroform, vinyl chloride.'],
    solvingSteps:['Xác định gốc hydrocarbon và số/loại halogen.','Chọn mạch chính, đánh số cho bộ vị trí nhỏ nhất và ghép tiền tố.','Kiểm tổng carbon, hóa trị và phân biệt tên thường với tên thay thế.'],
    commonMistakes:['Coi ion halide tự do là dẫn xuất halogen.','Dùng halogen làm hậu tố hoặc đánh số sai chiều.','Nhầm CHCl3 với CH2Cl2, vinyl chloride với ethyl chloride.'],
    difficulty:'medium',examFrequency:'high',
    subTypes:[
      {id:'chem11-hal-st-concept-classification',name:'Khái niệm và phân loại',example:'CH3Cl là dẫn xuất halogen.',recognitionSigns:['Có liên kết C–F/Cl/Br/I.'],targetQuestionCount:4},
      {id:'chem11-hal-st-substitutive-name',name:'Danh pháp thay thế C1–C5',example:'2-bromopropane.',recognitionSigns:['Có CTCT và vị trí halogen.'],targetQuestionCount:4},
      {id:'chem11-hal-st-common-name',name:'Tên thường và công thức quen thuộc',example:'CHCl3 là chloroform.',recognitionSigns:['Có methyl/ethyl/vinyl chloride, chloroform.'],targetQuestionCount:4}
    ],
    practiceCoverage:{targetQuestionCount:12,minimumQuestionsPerSubType:4,requiredPracticeRoles:['guided','near_transfer','misconception_check','far_transfer'],requiredRepresentations:['text','equation','diagram'],masteryHoldoutCount:3}
  },
  {
    id:'chem11-qt60',topicId:'chem11-t5',name:'Đồng phân và tính chất vật lí dẫn xuất halogen',slug:'dong-phan-tinh-chat-vat-li-dan-xuat-halogen',
    description:'Liệt kê đồng phân monohalogen đơn giản và đọc dữ liệu nhiệt độ sôi, trạng thái, độ tan, khối lượng riêng.',exampleQuestionId:'chem11-hal-q013',
    theory:['Đồng phân có thể khác mạch carbon hoặc vị trí halogen; công thức đảo chiều không tạo chất mới.','Nhiều dẫn xuất halogen ít tan trong nước nhưng tan trong dung môi hữu cơ; trạng thái và tỉ khối không giống nhau cho mọi chất.','Nhiệt độ sôi chịu ảnh hưởng của khối lượng, độ phân cực, khả năng phân cực hóa và hình dạng phân tử.'],
    recognitionSigns:['Hỏi số/CTCT đồng phân của dẫn xuất C1–C5.','Có bảng nhiệt độ sôi, khối lượng riêng, độ tan.','Yêu cầu suy trạng thái hoặc phân lớp với nước.'],
    solvingSteps:['Cố định từng khung carbon không trùng.','Đặt halogen vào các vị trí không tương đương và loại cách viết đảo/quay.','Đọc đúng đại lượng, so với nhiệt độ môi trường hoặc d=1 của nước rồi kết luận.'],
    commonMistakes:['Đếm cùng một cấu tạo hai lần.','Chỉ xét vị trí mà bỏ đồng phân mạch.','Cho mọi chất tan tốt hoặc đều nhẹ hơn nước.'],
    difficulty:'hard',examFrequency:'high',
    subTypes:[
      {id:'chem11-hal-st-structural-isomer',name:'Đồng phân cấu tạo',example:'C3H7Cl có hai đồng phân.',recognitionSigns:['Có CTPT và yêu cầu số/công thức.'],targetQuestionCount:4},
      {id:'chem11-hal-st-physical-basic',name:'Trạng thái, độ tan, tỉ khối',example:'CHCl3 ít tan và nặng hơn nước.',recognitionSigns:['Có nước, lớp chất, trạng thái.'],targetQuestionCount:4},
      {id:'chem11-hal-st-physical-data',name:'Dữ liệu và xu hướng vật lí',example:'So nhiệt độ sôi CH3Cl/CH3Br/CH3I.',recognitionSigns:['Có bảng hoặc đồ thị.'],targetQuestionCount:4}
    ],
    practiceCoverage:{targetQuestionCount:12,minimumQuestionsPerSubType:4,requiredPracticeRoles:['guided','near_transfer','misconception_check','far_transfer'],requiredRepresentations:['diagram','table','text'],masteryHoldoutCount:3}
  },
  {
    id:'chem11-qt61',topicId:'chem11-t5',name:'Phản ứng thế OH⁻ và thí nghiệm thủy phân',slug:'phan-ung-the-oh-thuy-phan-dan-xuat-halogen',
    description:'Viết phản ứng thế tạo alcohol, xử lí tỉ lượng và phân tích thí nghiệm thủy phân ethyl bromide/chloride.',exampleQuestionId:'chem11-hal-q025',
    theory:['Trong mô hình lớp 11: R–X + OH− (môi trường nước, điều kiện phù hợp) → R–OH + X−.','Thủy phân ethyl bromide tạo ethanol và Br−; acid hóa phần nước bằng HNO3 rồi thêm AgNO3 tạo AgBr vàng nhạt.','Phải phân biệt thử ion halide sau thủy phân với việc thêm AgNO3 trực tiếp vào chất hữu cơ.'],
    recognitionSigns:['Có NaOH/KOH trong nước và dẫn xuất halogen.','Có ethyl bromide/chloride, đun nóng, tách lớp hoặc thử AgNO3.','Có số mol hydroxide, alcohol hoặc kết tủa AgX.'],
    solvingSteps:['Nhận điều kiện nước để chọn thế, thay X bằng OH.','Cân bằng tỉ lệ 1:1 và theo dõi X thành ion halide.','Với thí nghiệm, sắp xếp thủy phân→acid hóa HNO3→AgNO3 và giải thích kết tủa.'],
    commonMistakes:['Chọn phản ứng tách dù dùng base nước.','Giữ X trong alcohol hoặc sai tỉ lệ mol.','Thêm AgNO3 trực tiếp/không acid hóa nên kết luận không đáng tin cậy.'],
    difficulty:'hard',examFrequency:'high',
    subTypes:[
      {id:'chem11-hal-st-substitution-oh',name:'Viết phản ứng thế tạo alcohol',example:'C2H5Br+NaOH→C2H5OH+NaBr.',recognitionSigns:['Có OH− nước.'],targetQuestionCount:4},
      {id:'chem11-hal-st-hydrolysis-experiment',name:'Quy trình và hiện tượng thí nghiệm',example:'AgBr vàng nhạt sau thủy phân.',recognitionSigns:['Có đun, HNO3, AgNO3.'],targetQuestionCount:4},
      {id:'chem11-hal-st-substitution-data',name:'Tỉ lượng và suy luận thủy phân',example:'Mol RBr bằng mol alcohol/Br−.',recognitionSigns:['Có mol, khối lượng, hiệu suất, AgX.'],targetQuestionCount:4}
    ],
    practiceCoverage:{targetQuestionCount:12,minimumQuestionsPerSubType:4,requiredPracticeRoles:['guided','near_transfer','misconception_check','far_transfer'],requiredRepresentations:['equation','experiment','table'],masteryHoldoutCount:3}
  },
  {
    id:'chem11-qt62',topicId:'chem11-t5',name:'Phản ứng tách HX và quy tắc Zaisev',slug:'phan-ung-tach-hx-quy-tac-zaisev',
    description:'Xác định carbon alpha–beta, viết alkene và dự đoán sản phẩm chính theo Zaisev; lựa chọn thế hay tách theo điều kiện.',exampleQuestionId:'chem11-hal-q037',
    theory:['Base trong alcohol, đun nóng ưu tiên tách HX: X rời carbon alpha, H rời carbon beta, tạo C=C.','Chỉ carbon beta có H mới tham gia tạo nối đôi với carbon alpha.','Khi có nhiều alkene, quy tắc Zaisev ưu tiên sản phẩm có nối đôi thế nhiều hơn trong trường hợp đơn giản.'],
    recognitionSigns:['Có KOH/NaOH trong alcohol và nhiệt.','Có nhiều carbon kề carbon mang X.','Hỏi sản phẩm chính hoặc so điều kiện nước–alcohol.'],
    solvingSteps:['Đánh dấu carbon alpha mang X và các carbon beta kề bên có H.','Vẽ mọi C=C hợp lệ giữa alpha–beta và loại cấu tạo trùng.','So mức độ thế của nối đôi theo Zaisev; kiểm công thức và điều kiện.'],
    commonMistakes:['Tách H cùng carbon với X.','Tạo C=C ở vị trí không kề carbon mang X.','Chọn alkene đầu mạch mặc định hoặc bỏ qua dung môi.'],
    difficulty:'hard',examFrequency:'high',
    subTypes:[
      {id:'chem11-hal-st-elimination-basic',name:'Tách HX cơ bản',example:'C2H5Br→CH2=CH2.',recognitionSigns:['Có base alcohol, đun nóng.'],targetQuestionCount:4},
      {id:'chem11-hal-st-zaitsev-product',name:'Sản phẩm chính theo Zaisev',example:'2-bromobutane ưu tiên but-2-ene.',recognitionSigns:['Có hai carbon beta.'],targetQuestionCount:4},
      {id:'chem11-hal-st-pathway-selection',name:'Chọn thế/tách và chuỗi phản ứng',example:'Base nước→alcohol; base alcohol→alkene.',recognitionSigns:['So dung môi/nhiệt hoặc yêu cầu chuỗi.'],targetQuestionCount:4}
    ],
    practiceCoverage:{targetQuestionCount:12,minimumQuestionsPerSubType:4,requiredPracticeRoles:['guided','near_transfer','misconception_check','far_transfer'],requiredRepresentations:['equation','diagram','table'],masteryHoldoutCount:3}
  },
  {
    id:'chem11-qt63',topicId:'chem11-t5',name:'Ứng dụng, CFC và sử dụng dẫn xuất halogen có trách nhiệm',slug:'ung-dung-cfc-an-toan-dan-xuat-halogen',
    description:'Ghép chất–ứng dụng, phân biệt monomer/polymer, giải thích tác hại CFC và lựa chọn kiểm soát rò rỉ/lạm dụng hóa chất.',exampleQuestionId:'chem11-hal-q049',
    theory:['Dẫn xuất halogen dùng làm nguyên liệu tổng hợp, monomer polymer, dung môi, dược chất, môi chất lạnh và nhiều sản phẩm chuyên dụng.','Vinyl chloride CH2=CHCl là monomer; PVC là polymer –CH2–CHCl–.','CFC bền có thể lên tầng bình lưu, UV giải phóng chlorine phá hủy ozone; cần thay thế phù hợp, kiểm soát rò rỉ, thu hồi/xử lí môi chất và dùng hóa chất đúng hướng dẫn.'],
    recognitionSigns:['Có chất–ứng dụng hoặc monomer–polymer.','Có CFC, ozone, tia UV, môi chất lạnh.','Có tình huống sửa máy lạnh, thuốc trừ sâu/diệt cỏ, bao bì/chất thải.'],
    solvingSteps:['Xác định chất, tính chất và vai trò trong quy trình.','Với CFC, nối chuỗi bền→lên cao→UV→Cl radical→mất ozone/ảnh hưởng khí hậu.','Chọn biện pháp theo thứ bậc: thay thế–kín/rò rỉ–thu hồi–quy trình/PPE–xử lí chất thải.'],
    commonMistakes:['Coi PVC là monomer hoặc dẫn xuất chỉ có một ứng dụng.','Cho CFC trơ nên vô hại.','Xả môi chất/bao bì hóa chất hoặc tăng liều tùy ý.'],
    difficulty:'hard',examFrequency:'medium',
    subTypes:[
      {id:'chem11-hal-st-applications',name:'Ứng dụng và vật liệu',example:'Vinyl chloride tạo PVC.',recognitionSigns:['Có dung môi, polymer, dược, làm lạnh.'],targetQuestionCount:4},
      {id:'chem11-hal-st-cfc-impact',name:'CFC và môi trường',example:'Cl radical xúc tác phá hủy ozone.',recognitionSigns:['Có CFC, UV, ozone, GWP.'],targetQuestionCount:4},
      {id:'chem11-hal-st-responsible-use',name:'Sử dụng và xử lí có trách nhiệm',example:'Thu hồi môi chất lạnh, dùng thuốc đúng nhãn.',recognitionSigns:['Có rò rỉ, sửa chữa, nông nghiệp, chất thải.'],targetQuestionCount:4}
    ],
    practiceCoverage:{targetQuestionCount:12,minimumQuestionsPerSubType:4,requiredPracticeRoles:['guided','near_transfer','misconception_check','far_transfer'],requiredRepresentations:['table','diagram','text'],masteryHoldoutCount:3}
  },
  {
    id:'chem11-qt64',topicId:'chem11-t5',name:'Khái niệm, bậc và danh pháp alcohol',slug:'khai-niem-bac-danh-phap-alcohol',
    description:'Nhận diện alcohol, vận dụng công thức alcohol no đơn chức mạch hở, xác định bậc và gọi tên alcohol C1–C5.',exampleQuestionId:'chem11-alc-q001',
    theory:['Alcohol có nhóm –OH gắn với carbon no; phenol không thuộc alcohol.','CnH2n+2O chỉ áp dụng cho alcohol no, đơn chức, mạch hở.','Bậc alcohol là bậc của carbon mang –OH; khi gọi tên phải ưu tiên số chỉ vị trí –OH nhỏ nhất.'],
    recognitionSigns:['Có nhóm –OH cần phân loại alcohol/phenol.','Có CTCT cần xác định carbon mang –OH liên kết trực tiếp với bao nhiêu carbon.','Có CTCT C1–C5 cần chọn mạch chứa –OH, đánh số và gọi tên.'],
    solvingSteps:['Xác định –OH có gắn trực tiếp với carbon no hay không.','Đếm carbon kề trực tiếp carbon mang –OH để xác định bậc.','Chọn mạch chính chứa –OH, đánh số ưu tiên –OH rồi ghép tên nhánh–alkan–vị trí–ol.'],
    commonMistakes:['Coi mọi chất có –OH là alcohol.','Dùng số nhóm –OH để xác định bậc.','Đánh số ưu tiên nhánh trước –OH hoặc áp dụng CnH2n+2O cho mọi alcohol.'],
    difficulty:'medium',examFrequency:'high',
    subTypes:[
      {id:'chem11-alc-st-concept-formula',name:'Khái niệm và công thức',example:'C2H5OH là alcohol no, đơn chức, mạch hở.',recognitionSigns:['Có nhóm –OH hoặc CTPT CnH2n+2O.'],targetQuestionCount:4},
      {id:'chem11-alc-st-degree',name:'Xác định bậc alcohol',example:'CH3CHOHCH3 là alcohol bậc II.',recognitionSigns:['Có carbon mang –OH và các carbon kề.'],targetQuestionCount:4},
      {id:'chem11-alc-st-nomenclature',name:'Công thức và danh pháp C1–C5',example:'(CH3)2CHCH2OH là 2-methylpropan-1-ol.',recognitionSigns:['Có CTCT hoặc tên cần chuyển đổi.'],targetQuestionCount:4}
    ],
    practiceCoverage:{targetQuestionCount:12,minimumQuestionsPerSubType:4,requiredPracticeRoles:['guided','near_transfer','misconception_check','far_transfer'],requiredRepresentations:['text','diagram','equation'],masteryHoldoutCount:3}
  },
  {
    id:'chem11-qt65',topicId:'chem11-t5',name:'Cấu tạo, liên kết hydrogen và tính chất vật lí alcohol',slug:'cau-tao-lien-ket-hydrogen-tinh-chat-vat-li-alcohol',
    description:'Giải thích liên kết phân cực, liên kết hydrogen và đọc dữ liệu nhiệt độ sôi–độ tan của alcohol.',exampleQuestionId:'chem11-alc-q013',
    theory:['Liên kết C–O và O–H phân cực; quanh O có hình gấp khúc do hai cặp electron không liên kết.','Alcohol tạo liên kết hydrogen giữa các phân tử và với nước; đây không phải liên kết O–H cộng hóa trị.','Mạch hydrocarbon dài hơn làm độ tan trong nước giảm; liên kết hydrogen làm nhiệt độ sôi alcohol cao hơn chất tương đương không tạo liên kết này.'],
    recognitionSigns:['Có mô hình methanol/ethanol hoặc điện tích riêng phần.','So alcohol với hydrocarbon/ether cùng khối lượng gần nhau.','Có bảng nhiệt độ sôi, độ tan hoặc dãy đồng đẳng.'],
    solvingSteps:['Đánh dấu Oδ−, Hδ+ của nhóm O–H và cặp electron trên O.','Xác định tương tác giữa các phân tử hoặc alcohol–water.','Kết hợp lực liên phân tử với kích thước phần hydrocarbon rồi đọc đúng dữ liệu để kết luận.'],
    commonMistakes:['Coi –OH là ion OH− có sẵn.','Đồng nhất liên kết hydrogen với O–H cộng hóa trị.','Kết luận mọi alcohol tan vô hạn hoặc nhiệt độ sôi chỉ do phân tử khối.'],
    difficulty:'hard',examFrequency:'high',
    subTypes:[
      {id:'chem11-alc-st-structure-shape',name:'Liên kết và hình dạng',example:'Quanh O của ethanol có dạng gấp khúc.',recognitionSigns:['Có C–O, O–H, mô hình phân tử.'],targetQuestionCount:4},
      {id:'chem11-alc-st-hydrogen-bond',name:'Liên kết hydrogen',example:'Ethanol tạo liên kết hydrogen với water.',recognitionSigns:['Có O–H···O hoặc so lực liên phân tử.'],targetQuestionCount:4},
      {id:'chem11-alc-st-physical-data',name:'Dữ liệu và xu hướng vật lí',example:'Độ tan giảm khi mạch carbon dài.',recognitionSigns:['Có bảng/đồ thị nhiệt độ sôi, độ tan.'],targetQuestionCount:4}
    ],
    practiceCoverage:{targetQuestionCount:12,minimumQuestionsPerSubType:4,requiredPracticeRoles:['guided','near_transfer','misconception_check','far_transfer'],requiredRepresentations:['diagram','table','text'],masteryHoldoutCount:3}
  },
  {
    id:'chem11-qt66',topicId:'chem11-t5',name:'Phản ứng với sodium và nhận biết polyalcohol',slug:'alcohol-sodium-polyalcohol-cuoh2',
    description:'Viết phản ứng alcohol với Na, tính theo số nhóm –OH và phân tích thí nghiệm glycerol hòa tan Cu(OH)₂.',exampleQuestionId:'chem11-alc-q025',
    theory:['2ROH + 2Na → 2RONa + H2; Na thay H của O–H nên hai mol nhóm –OH tạo một mol H2.','Polyalcohol có các nhóm –OH kề nhau như ethylene glycol, glycerol hòa tan Cu(OH)2 mới tạo thành dung dịch xanh lam đậm.','Alcohol đơn chức như ethanol không cho hiện tượng xanh lam đậm đặc trưng này.'],
    recognitionSigns:['Có Na và alcohol, hỏi alkoxide/H2.','Có nhiều nhóm –OH cần tính tổng mol OH.','Có CuSO4–NaOH–glycerol hoặc yêu cầu phân biệt monoalcohol/polyalcohol.'],
    solvingSteps:['Đếm tổng số nhóm –OH có thể phản ứng và viết tỉ lệ 2OH:1H2.','Với Cu(OH)2, kiểm tra ít nhất hai –OH ở carbon kề nhau.','Trong thí nghiệm, tạo Cu(OH)2 mới rồi thêm mẫu; mô tả kết tủa tan và màu dung dịch.'],
    commonMistakes:['Cho Na thế H trên carbon.','Dùng tỉ lệ 1OH:1H2.','Cho mọi alcohol phản ứng với Cu(OH)2 hoặc mô tả tạo khí H2 trong thí nghiệm glycerol.'],
    difficulty:'hard',examFrequency:'high',
    subTypes:[
      {id:'chem11-alc-st-sodium',name:'Alcohol tác dụng sodium',example:'2C2H5OH+2Na→2C2H5ONa+H2.',recognitionSigns:['Có Na, alkoxide hoặc H2.'],targetQuestionCount:4},
      {id:'chem11-alc-st-polyol-cuoh2',name:'Polyalcohol với Cu(OH)₂',example:'Glycerol hòa tan Cu(OH)2 tạo xanh lam đậm.',recognitionSigns:['Có các –OH kề nhau và Cu(OH)2.'],targetQuestionCount:4},
      {id:'chem11-alc-st-glycerol-experiment',name:'Thí nghiệm và tỉ lượng tổng hợp',example:'Tạo Cu(OH)2 mới rồi thêm glycerol.',recognitionSigns:['Có quy trình, hiện tượng hoặc dữ kiện mol nhiều –OH.'],targetQuestionCount:4}
    ],
    practiceCoverage:{targetQuestionCount:12,minimumQuestionsPerSubType:4,requiredPracticeRoles:['guided','near_transfer','misconception_check','far_transfer'],requiredRepresentations:['equation','experiment','table'],masteryHoldoutCount:3}
  },
  {
    id:'chem11-qt67',topicId:'chem11-t5',name:'Dehydration alcohol tạo alkene và ether',slug:'dehydration-alcohol-alkene-ether',
    description:'Phân biệt tách nước nội phân tử tạo alkene với liên phân tử tạo ether; chọn sản phẩm và xử lí chuỗi/tỉ lượng.',exampleQuestionId:'chem11-alc-q037',
    theory:['Tách nước nội phân tử tạo C=C giữa carbon mang –OH và carbon beta có H; sản phẩm chính theo Zaisev ở trường hợp đơn giản.','Hai phân tử alcohol thích hợp tách một H2O tạo ether R–O–R.','Cấu tạo alcohol và nhiệt độ quyết định hướng ưu tiên; methanol không thể tạo alkene một carbon.'],
    recognitionSigns:['Có H2SO4 đặc và nhiệt độ, hỏi alkene/ether.','Có carbon alpha–beta hoặc nhiều alkene có thể tạo.','Có chuỗi chuyển hóa hay hiệu suất tách nước.'],
    solvingSteps:['Xác định phản ứng nội hay liên phân tử từ sản phẩm/điều kiện.','Đánh dấu carbon mang –OH và carbon beta có H; liệt kê C=C hợp lệ.','Cân bằng nước, kiểm số carbon và dùng tỉ lệ mol/hiệu suất nếu có.'],
    commonMistakes:['Cho mọi tách nước đều tạo ether.','Đặt nối đôi ở vị trí không kề carbon mang –OH.','Bỏ qua nhiệt độ hoặc cho methanol tạo methene.'],
    difficulty:'hard',examFrequency:'high',
    subTypes:[
      {id:'chem11-alc-st-dehydration-alkene',name:'Tạo alkene',example:'Ethanol→ethene+H2O.',recognitionSigns:['Tách nội phân tử, nhiệt độ cao.'],targetQuestionCount:4},
      {id:'chem11-alc-st-dehydration-ether',name:'Tạo ether',example:'2 ethanol→diethyl ether+H2O.',recognitionSigns:['Tách liên phân tử, nhiệt độ phù hợp.'],targetQuestionCount:4},
      {id:'chem11-alc-st-dehydration-path',name:'Chọn hướng, chuỗi và tỉ lượng',example:'2-butanol ưu tiên but-2-ene.',recognitionSigns:['Có nhiều sản phẩm/điều kiện/hiệu suất.'],targetQuestionCount:4}
    ],
    practiceCoverage:{targetQuestionCount:12,minimumQuestionsPerSubType:4,requiredPracticeRoles:['guided','near_transfer','misconception_check','far_transfer'],requiredRepresentations:['equation','diagram','table'],masteryHoldoutCount:3}
  },
  {
    id:'chem11-qt68',topicId:'chem11-t5',name:'Oxi hóa bằng CuO, phản ứng cháy và thí nghiệm ethanol',slug:'oxi-hoa-cuo-chay-thi-nghiem-ethanol',
    description:'Phân loại sản phẩm oxi hóa alcohol bậc I/II, cân bằng–tính toán phản ứng cháy và phân tích thí nghiệm ethanol.',exampleQuestionId:'chem11-alc-q049',
    theory:['Alcohol bậc I + CuO tạo aldehyde; bậc II tạo ketone; bậc III không phản ứng theo mô hình CuO đơn giản.','CnH2n+2O + 3n/2 O2 → nCO2 + (n+1)H2O.','Đốt ethanol phải tránh rót thêm khi đang cháy; sản phẩm hoàn toàn gồm CO2, H2O và phản ứng tỏa nhiệt.'],
    recognitionSigns:['Có CuO đen đun nóng và alcohol bậc I/II/III.','Có CO2, H2O, O2 hoặc hỗn hợp methanol–ethanol.','Có mô tả đốt ethanol, nhận biết sản phẩm hoặc thao tác an toàn.'],
    solvingSteps:['Xác định bậc từ carbon mang –OH rồi chọn aldehyde/ketone/không phản ứng.','Cân bằng C, H rồi O; lập tỉ lệ mol và giải dữ kiện.','Với thí nghiệm, xác định bằng chứng CO2/H2O và loại thao tác gây cháy lan.'],
    commonMistakes:['Cho alcohol bậc I tạo ketone hoặc bậc III tạo aldehyde.','Quên oxygen có sẵn trong alcohol.','Cho cháy ethanol chỉ tạo CO2 hoặc rót nhiên liệu khi ngọn lửa còn cháy.'],
    difficulty:'hard',examFrequency:'high',
    subTypes:[
      {id:'chem11-alc-st-oxidation-cuo',name:'Oxi hóa alcohol bằng CuO',example:'CH3CH2OH+CuO→CH3CHO+Cu+H2O.',recognitionSigns:['Có CuO, bậc alcohol, aldehyde/ketone.'],targetQuestionCount:4},
      {id:'chem11-alc-st-combustion',name:'Cân bằng và tính toán cháy',example:'C2H5OH+3O2→2CO2+3H2O.',recognitionSigns:['Có O2, CO2, H2O, số mol.'],targetQuestionCount:4},
      {id:'chem11-alc-st-ethanol-experiment',name:'Thí nghiệm và bài toán tổng hợp',example:'Nhận CO2 bằng nước vôi, H2O bằng chất chỉ thị thích hợp.',recognitionSigns:['Có quy trình an toàn, dữ liệu hỗn hợp hoặc biến đổi CuO.'],targetQuestionCount:4}
    ],
    practiceCoverage:{targetQuestionCount:12,minimumQuestionsPerSubType:4,requiredPracticeRoles:['guided','near_transfer','misconception_check','far_transfer'],requiredRepresentations:['equation','experiment','table'],masteryHoldoutCount:3}
  },
  {
    id:'chem11-qt69',topicId:'chem11-t5',name:'Điều chế, ứng dụng và trách nhiệm sức khỏe',slug:'dieu-che-ung-dung-suc-khoe-alcohol',
    description:'Viết hai con đường điều chế ethanol, nhận diện tuyến glycerol từ propylene và giải quyết tình huống sử dụng alcohol an toàn.',exampleQuestionId:'chem11-alc-q061',
    theory:['Ethanol được điều chế bằng hydrate hóa ethylene hoặc lên men glucose/tinh bột trong điều kiện thích hợp.','Glycerol có khung ba carbon và có thể được sản xuất công nghiệp từ propylene theo tuyến nhiều bước ở mức nhận diện.','Methanol rất độc; đồ uống có cồn ảnh hưởng sức khỏe, phản xạ và phán đoán nên không lái xe sau khi uống.'],
    recognitionSigns:['Có ethylene+water hoặc glucose lên men.','Có propylene và sản phẩm glycerol C3H5(OH)3.','Có methanol/ethanol, đồ uống có cồn, lái xe hoặc đánh giá lợi ích–rủi ro.'],
    solvingSteps:['Chọn hydrate hóa hay lên men theo nguyên liệu và viết phương trình đúng.','Bảo toàn khung carbon, dùng hiệu suất nếu có.','Phân biệt ứng dụng kỹ thuật với an toàn tiêu dùng; chọn hành vi giảm rủi ro và có trách nhiệm.'],
    commonMistakes:['Cho lên men cần nhiều oxygen như phản ứng cháy.','Cho ethylene tự thành ethanol không cần water.','Coi methanol uống được hoặc cho uống ít luôn bảo đảm lái xe an toàn.'],
    difficulty:'hard',examFrequency:'high',
    subTypes:[
      {id:'chem11-alc-st-ethanol-prep',name:'Điều chế ethanol',example:'C6H12O6→2C2H5OH+2CO2.',recognitionSigns:['Có ethylene, glucose/tinh bột, lên men.'],targetQuestionCount:4},
      {id:'chem11-alc-st-glycerol-prep',name:'Glycerol và ứng dụng',example:'Glycerol có ba carbon và ba nhóm –OH.',recognitionSigns:['Có propylene, glycerol, chất giữ ẩm.'],targetQuestionCount:4},
      {id:'chem11-alc-st-health-safety',name:'Sức khỏe và sử dụng có trách nhiệm',example:'Không dùng methanol làm đồ uống; không lái xe sau khi uống.',recognitionSigns:['Có độc tính, đồ uống, hành vi cộng đồng.'],targetQuestionCount:4}
    ],
    practiceCoverage:{targetQuestionCount:12,minimumQuestionsPerSubType:4,requiredPracticeRoles:['guided','near_transfer','misconception_check','far_transfer'],requiredRepresentations:['equation','table','text'],masteryHoldoutCount:3}
  },
  {
    id:'chem11-qt70',topicId:'chem11-t5',name:'Khái niệm, danh pháp và cấu tạo phenol',slug:'khai-niem-danh-phap-cau-tao-phenol',
    description:'Phân biệt phenol với alcohol thơm, gọi tên phenol đơn giản và giải thích ảnh hưởng tương hỗ giữa –OH với vòng benzene.',exampleQuestionId:'chem11-phe-q001',
    theory:['Phenol có –OH gắn trực tiếp với carbon vòng benzene; benzyl alcohol C6H5CH2OH không phải phenol.','Carbon mang –OH được đánh số 1; o-, m-, p-cresol tương ứng 2-, 3-, 4-methylphenol.','Vòng benzene làm O–H phân cực hơn alcohol, còn –OH hoạt hóa vòng và định hướng ortho/para.'],
    recognitionSigns:['Có CTCT cần kiểm tra –OH gắn trực tiếp vòng hay ở mạch nhánh.','Có tên cresol/dihydroxybenzene hoặc vị trí nhóm thế so với –OH.','Có câu hỏi về hình dạng, phân cực O–H và độ hoạt động của vòng.'],
    solvingSteps:['Khoanh carbon liên kết trực tiếp với O của –OH.','Lấy carbon mang –OH làm số 1, xác định vị trí nhóm thế và ghép tên.','Tách hai chiều ảnh hưởng: vòng→O–H và –OH→vị trí ortho/para của vòng.'],
    commonMistakes:['Gọi phenol là aromatic alcohol.','Xếp benzyl alcohol vào phenol hoặc đánh số không ưu tiên –OH.','Cho –OH làm vòng kém phản ứng hoặc coi phenol chứa sẵn ion.'],
    difficulty:'hard',examFrequency:'high',
    subTypes:[
      {id:'chem11-phe-st-concept-classification',name:'Khái niệm và phân loại',example:'C6H5OH là phenol; C6H5CH2OH là alcohol.',recognitionSigns:['Có –OH và vòng benzene.'],targetQuestionCount:4},
      {id:'chem11-phe-st-nomenclature-formula',name:'Công thức và danh pháp',example:'p-cresol là 4-methylphenol.',recognitionSigns:['Có o-/m-/p-, cresol hoặc nhiều –OH.'],targetQuestionCount:4},
      {id:'chem11-phe-st-structure-influence',name:'Cấu tạo và ảnh hưởng tương hỗ',example:'–OH hoạt hóa vị trí ortho/para.',recognitionSigns:['Có phân cực O–H, hình phẳng hoặc độ hoạt động vòng.'],targetQuestionCount:4}
    ],
    practiceCoverage:{targetQuestionCount:12,minimumQuestionsPerSubType:4,requiredPracticeRoles:['guided','near_transfer','misconception_check','far_transfer'],requiredRepresentations:['diagram','text','table'],masteryHoldoutCount:3}
  },
  {
    id:'chem11-qt71',topicId:'chem11-t5',name:'Tính chất vật lí, dữ liệu và an toàn phenol',slug:'tinh-chat-vat-li-du-lieu-an-toan-phenol',
    description:'Đọc dữ liệu trạng thái–nóng chảy–độ tan, giải thích vai trò cấu trúc/liên kết hydrogen và lựa chọn thao tác phenol an toàn.',exampleQuestionId:'chem11-phe-q013',
    theory:['Phenol tinh khiết là chất rắn không màu dưới khoảng 43°C, sôi khoảng 181,8°C và ít tan trong water ở nhiệt độ thường.','Độ tan tăng mạnh khi nhiệt độ tăng; phenol tạo liên kết hydrogen nhưng vòng thơm lớn làm giảm tính ưa nước.','Phenol độc và gây bỏng; cần PPE, tránh tiếp xúc, làm theo SDS và thu gom chất thải đúng quy trình.'],
    recognitionSigns:['Có số liệu nhiệt độ nóng chảy/sôi hoặc nhiệt độ môi trường.','Có bảng độ tan theo nhiệt độ hay so phenol với ethanol/benzene.','Có tình huống tràn đổ, dính da, đun phenol hoặc thải bỏ.'],
    solvingSteps:['So nhiệt độ môi trường với nhiệt độ nóng chảy để suy trạng thái.','Kết hợp –OH tạo liên kết hydrogen với phần vòng thơm kị nước và đọc đúng chiều dữ liệu.','Ưu tiên loại bỏ nguồn phơi nhiễm, PPE/quy trình/SDS và hỗ trợ y tế thay vì tự ứng biến.'],
    commonMistakes:['Cho phenol luôn lỏng hoặc tan vô hạn ở nhiệt độ thường.','Chỉ xét –OH mà bỏ phần vòng thơm.','Suy từ ứng dụng sát khuẩn rằng phenol đậm đặc vô hại.'],
    difficulty:'hard',examFrequency:'high',
    subTypes:[
      {id:'chem11-phe-st-physical-state',name:'Trạng thái và độ tan',example:'Phenol rắn dưới khoảng 43°C và ít tan ở 25°C.',recognitionSigns:['Có nhiệt độ, trạng thái, độ tan.'],targetQuestionCount:4},
      {id:'chem11-phe-st-physical-data',name:'Phân tích dữ liệu vật lí',example:'Độ tan tăng khi đun nóng.',recognitionSigns:['Có bảng/đồ thị hoặc so sánh chất.'],targetQuestionCount:4},
      {id:'chem11-phe-st-safety-handling',name:'An toàn và xử lí tình huống',example:'Dùng PPE, SDS và thu gom chất thải nguy hại.',recognitionSigns:['Có tiếp xúc, tràn đổ, đun hoặc chất thải.'],targetQuestionCount:4}
    ],
    practiceCoverage:{targetQuestionCount:12,minimumQuestionsPerSubType:4,requiredPracticeRoles:['guided','near_transfer','misconception_check','far_transfer'],requiredRepresentations:['table','diagram','text'],masteryHoldoutCount:3}
  },
  {
    id:'chem11-qt72',topicId:'chem11-t5',name:'Tính acid và thí nghiệm phenol với base',slug:'tinh-acid-thi-nghiem-phenol-base',
    description:'Giải thích tính acid yếu, viết phản ứng với Na/NaOH/Na₂CO₃, xử lí tỉ lượng và phân tích thí nghiệm dung dịch chuyển trong.',exampleQuestionId:'chem11-phe-q025',
    theory:['Phenol acid hơn alcohol do phenoxide được ổn định bởi vòng, nhưng vẫn rất yếu nên dung dịch thường không đổi màu quỳ tím.','Phenol phản ứng với Na và NaOH; theo KNTT, cân bằng với Na2CO3 tạo sodium phenoxide và NaHCO3, không mô tả giải phóng CO2.','Phenol ít tan tạo hệ trắng đục; chuyển thành sodium phenoxide tan làm hệ trong khi thêm base.'],
    recognitionSigns:['Có so sánh phenol–ethanol hoặc quỳ tím.','Có Na, NaOH, Na2CO3/NaHCO3 và phenol.','Có mô tả hai ống nghiệm phenol trắng đục chuyển trong.'],
    solvingSteps:['Xác định acid–base và viết phenoxide C6H5O−.','Dùng tỉ lệ 1 mol phenol:1 mol NaOH/Na2CO3 hoặc 2 mol phenol:1 mol H2 với Na.','Giải thích hiện tượng bằng độ tan của phenol và muối phenoxide, không gọi là tẩy màu.'],
    commonMistakes:['Coi phenol là acid mạnh làm đỏ quỳ.','Cho ethanol phản ứng NaOH hoặc phenol phản ứng NaHCO3 sinh CO2.','Mô tả Na2CO3 bắt buộc sủi khí thay vì tạo NaHCO3 theo bài học.'],
    difficulty:'hard',examFrequency:'high',
    subTypes:[
      {id:'chem11-phe-st-acidity-compare',name:'Tính acid và so sánh',example:'Phenol acid hơn ethanol nhưng yếu hơn carbonic acid nấc một.',recognitionSigns:['Có quỳ, phenoxide, so acid.'],targetQuestionCount:4},
      {id:'chem11-phe-st-base-equations',name:'Phương trình và tỉ lượng với base',example:'C6H5OH+NaOH→C6H5ONa+H2O.',recognitionSigns:['Có Na/NaOH/Na2CO3 và số mol.'],targetQuestionCount:4},
      {id:'chem11-phe-st-base-experiment',name:'Thí nghiệm và phân biệt',example:'Hệ trắng đục chuyển trong do tạo phenoxide tan.',recognitionSigns:['Có ống nghiệm, hiện tượng hoặc nhận biết.'],targetQuestionCount:4}
    ],
    practiceCoverage:{targetQuestionCount:12,minimumQuestionsPerSubType:4,requiredPracticeRoles:['guided','near_transfer','misconception_check','far_transfer'],requiredRepresentations:['equation','experiment','table'],masteryHoldoutCount:3}
  },
  {
    id:'chem11-qt73',topicId:'chem11-t5',name:'Phản ứng thế vòng và thí nghiệm phenol',slug:'phan-ung-the-vong-thi-nghiem-phenol',
    description:'Viết bromine hóa/nitrate hóa phenol, tính sản phẩm, giải thích hoạt hóa vòng và phân tích quy trình–an toàn thí nghiệm.',exampleQuestionId:'chem11-phe-q037',
    theory:['Phenol + 3Br2(aq) → 2,4,6-tribromophenol trắng + 3HBr; phản ứng xảy ra ở thường, không cần FeBr3.','Phenol với HNO3 đặc/H2SO4 đặc tạo 2,4,6-trinitrophenol (picric acid), tinh thể vàng.','–OH hoạt hóa vòng và định hướng ortho/para; nitrate hóa dùng acid đặc phải làm lạnh, thêm từ từ và thao tác trong tủ hút.'],
    recognitionSigns:['Có nước bromine, mất màu và kết tủa trắng.','Có HNO3 đặc/H2SO4 đặc, picric acid hoặc tinh thể vàng.','Có so sánh benzene–phenol, vị trí 2,4,6 hoặc quy trình thí nghiệm.'],
    solvingSteps:['Đánh dấu vị trí ortho/para còn H rồi đặt Br/NO2.','Cân bằng số mol tác nhân theo số H bị thế và tính khối lượng sản phẩm nếu có.','Đối chiếu hiện tượng, điều kiện và các bước kiểm soát nhiệt/hơi acid.'],
    commonMistakes:['Chỉ tạo monobromophenol hoặc coi phản ứng là cộng.','Nhầm màu trắng tribromophenol với màu vàng picric acid.','Đổ acid nhanh vào hỗn hợp nóng hoặc cho phenol cần FeBr3 như benzene.'],
    difficulty:'hard',examFrequency:'high',
    subTypes:[
      {id:'chem11-phe-st-bromination',name:'Bromine hóa và tỉ lượng',example:'1 mol phenol dùng 3 mol Br2.',recognitionSigns:['Có Br2(aq), 2,4,6-tribromophenol.'],targetQuestionCount:4},
      {id:'chem11-phe-st-nitration',name:'Nitrate hóa và picric acid',example:'Phenol→2,4,6-trinitrophenol.',recognitionSigns:['Có HNO3 đặc/H2SO4 đặc, tinh thể vàng.'],targetQuestionCount:4},
      {id:'chem11-phe-st-substitution-experiment',name:'Thí nghiệm và hoạt hóa vòng',example:'Phenol thế dễ hơn benzene do –OH hoạt hóa vòng.',recognitionSigns:['Có quy trình, hiện tượng, an toàn hoặc so sánh.'],targetQuestionCount:4}
    ],
    practiceCoverage:{targetQuestionCount:12,minimumQuestionsPerSubType:4,requiredPracticeRoles:['guided','near_transfer','misconception_check','far_transfer'],requiredRepresentations:['equation','experiment','diagram'],masteryHoldoutCount:3}
  },
  {
    id:'chem11-qt74',topicId:'chem11-t5',name:'Điều chế, ứng dụng và tổng hợp nhận biết phenol',slug:'dieu-che-ung-dung-tong-hop-phenol',
    description:'Nhận diện quy trình cumene/nhựa than đá, ghép ứng dụng–rủi ro và giải bài tổng hợp phân biệt, chuỗi chuyển hóa, dữ liệu phenol.',exampleQuestionId:'chem11-phe-q049',
    theory:['Quy trình cumene gồm oxi hóa cumene thành hydroperoxide rồi phân cắt acid tạo phenol và acetone.','Nhựa than đá là hỗn hợp nguồn phenol cần tách–tinh chế; phenol dùng sản xuất nhựa, phẩm nhuộm, dược, chất sát khuẩn và hóa chất khác.','Ứng dụng không đồng nghĩa an toàn tiếp xúc; phải kiểm soát nồng độ, PPE và chất thải.'],
    recognitionSigns:['Có cumene, hydroperoxide, acetone hoặc nhựa than đá.','Có bảng ghép sản phẩm–ứng dụng–nguy cơ.','Có yêu cầu phân biệt phenol/alcohol/benzene hay chuỗi chuyển hóa tổng hợp.'],
    solvingSteps:['Bảo toàn khung carbon và nhận đồng sản phẩm acetone trong tuyến cumene.','Ghép tính chất với ứng dụng nhưng kiểm tra độc tính/quy trình sử dụng.','Với bài tổng hợp, lập bảng phản ứng NaOH–Br2–Na rồi chọn phép thử ít bước và tính tỉ lượng.'],
    commonMistakes:['Cho cumene hydrate hóa trực tiếp hoặc chỉ tạo phenol.','Coi nhựa than đá là phenol tinh khiết.','Dùng phenol đậm đặc trực tiếp hoặc đổ chất thải xuống cống.'],
    difficulty:'hard',examFrequency:'medium',
    subTypes:[
      {id:'chem11-phe-st-preparation',name:'Điều chế phenol',example:'Cumene→hydroperoxide→phenol+acetone.',recognitionSigns:['Có cumene/O2/acid hoặc nhựa than đá.'],targetQuestionCount:4},
      {id:'chem11-phe-st-applications-safety',name:'Ứng dụng và trách nhiệm',example:'Nguyên liệu nhựa nhưng phải kiểm soát độc tính.',recognitionSigns:['Có sản phẩm, nghề nghiệp, sức khỏe/môi trường.'],targetQuestionCount:4},
      {id:'chem11-phe-st-integrated-identification',name:'Nhận biết và bài tổng hợp',example:'NaOH hoặc Br2 phân biệt phenol với alcohol.',recognitionSigns:['Có nhiều chất, chuỗi phản ứng hoặc dữ liệu hỗn hợp.'],targetQuestionCount:4}
    ],
    practiceCoverage:{targetQuestionCount:12,minimumQuestionsPerSubType:4,requiredPracticeRoles:['guided','near_transfer','misconception_check','far_transfer'],requiredRepresentations:['diagram','table','text'],masteryHoldoutCount:3}
  }
];

for (const questionType of g11ChemistryHalogenAlcoholPhenolQuestionTypes) {
  const resource = chem11HalogenAlcoholPhenolTheoryResources[questionType.id];
  if (!resource) continue;
  questionType.theory = [...(questionType.theory ?? []), ...resource.theorySupplement];
  questionType.theoryCheckpoints = resource.checkpoints;
}
