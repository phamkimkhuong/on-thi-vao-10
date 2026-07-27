import type { QuestionType } from '@/types';
import { chem11CarbonylCarboxylicAcidTheoryResources } from './theoryResources';

export const g11ChemistryCarbonylCarboxylicAcidQuestionTypes: QuestionType[] = [
  {
    id:'chem11-qt75',topicId:'chem11-t6',name:'Khái niệm, danh pháp và đồng phân carbonyl',slug:'khai-niem-danh-phap-dong-phan-carbonyl',
    description:'Phân biệt aldehyde–ketone, gọi tên C1–C4, ghép tên thường và liệt kê đồng phân carbonyl đơn giản.',exampleQuestionId:'chem11-car-q001',
    theory:['Hợp chất carbonyl có >C=O; aldehyde có –CHO, ketone có carbonyl liên kết hai gốc hydrocarbon.','Tên aldehyde dùng hậu tố –al và carbon –CHO là C1; ketone dùng –one, ưu tiên vị trí C=O nhỏ nhất.','Formaldehyde=methanal=HCHO; acetaldehyde=ethanal=CH3CHO; acetone=propanone=CH3COCH3.'],
    recognitionSigns:['Có CTCT cần phân loại aldehyde/ketone hoặc loại nhóm chức.','Có tên–công thức C1–C4 cần chuyển đổi.','Có CTPT C3H6O/C4H8O cần liệt kê đồng phân aldehyde–ketone.'],
    solvingSteps:['Khoanh nhóm C=O và xem carbonyl carbon có gắn H hay hai gốc carbon.','Chọn mạch chứa carbonyl, đánh số theo –CHO/C=O rồi ghép hậu tố –al/–one.','Cố định từng khung carbon, đặt nhóm chức hợp lệ và loại cấu tạo trùng.'],
    commonMistakes:['Đồng nhất carbonyl với carboxyl.','Nhầm acetone với acetaldehyde hoặc đánh số aldehyde sai đầu.','Bỏ đồng phân mạch nhánh 2-methylpropanal của C4H8O.'],
    difficulty:'hard',examFrequency:'high',
    subTypes:[
      {id:'chem11-car-st-concept-classification',name:'Khái niệm và phân loại',example:'CH3CHO là aldehyde, CH3COCH3 là ketone.',recognitionSigns:['Có >C=O, –CHO hoặc R–CO–R′.'],targetQuestionCount:4},
      {id:'chem11-car-st-nomenclature-common',name:'Danh pháp và tên thường',example:'CH3COCH3 là propanone/acetone.',recognitionSigns:['Có CTCT hoặc tên C1–C4.'],targetQuestionCount:4},
      {id:'chem11-car-st-isomer-reverse',name:'Đồng phân và chuyển đổi tên–cấu tạo',example:'C4H8O có ba đồng phân aldehyde/ketone mạch hở.',recognitionSigns:['Có CTPT hoặc yêu cầu viết CTCT từ tên.'],targetQuestionCount:4}
    ],
    practiceCoverage:{targetQuestionCount:12,minimumQuestionsPerSubType:4,requiredPracticeRoles:['guided','near_transfer','misconception_check','far_transfer'],requiredRepresentations:['text','diagram','equation'],masteryHoldoutCount:3}
  },
  {
    id:'chem11-qt76',topicId:'chem11-t6',name:'Liên kết carbonyl và tính chất vật lí',slug:'lien-ket-carbonyl-tinh-chat-vat-li',
    description:'Mô tả C=O phân cực–tam giác phẳng và đọc dữ liệu trạng thái, nhiệt độ sôi, độ tan của aldehyde/ketone.',exampleQuestionId:'chem11-car-q013',
    theory:['C=O gồm một sigma và một pi; Oδ−, Cδ+, carbonyl carbon sp2 gần tam giác phẳng.','Carbonyl có tương tác lưỡng cực nên thường sôi cao hơn alkane nhưng thấp hơn alcohol cùng khối lượng gần nhau.','O carbonyl nhận hydrogen bond từ water; chất nhỏ tan tốt, độ tan giảm khi phần hydrocarbon tăng.'],
    recognitionSigns:['Có mô hình C=O, điện tích riêng phần hoặc hình học.','Có bảng nhiệt độ sôi so alkane–carbonyl–alcohol.','Có trạng thái/độ tan theo số carbon hoặc dữ liệu water.'],
    solvingSteps:['Tách thành phần sigma–pi và đánh dấu Cδ+–Oδ−.','Xếp lực liên phân tử: phân tán < lưỡng cực carbonyl < mạng hydrogen bond alcohol.','Đọc bảng rồi cân bằng O nhận hydrogen bond với kích thước phần hydrocarbon kị nước.'],
    commonMistakes:['Coi C=O không phân cực hoặc gồm hai sigma.','Cho carbonyl tự cho hydrogen bond như alcohol.','Kết luận mạch carbon dài hơn làm tan water tốt hơn.'],
    difficulty:'hard',examFrequency:'high',
    subTypes:[
      {id:'chem11-car-st-bond-geometry',name:'Liên kết, phân cực và hình học',example:'C=O có 1σ+1π, carbonyl carbon tam giác phẳng.',recognitionSigns:['Có Cδ+/Oδ−, sp2 hoặc góc liên kết.'],targetQuestionCount:4},
      {id:'chem11-car-st-boiling-state',name:'Trạng thái và nhiệt độ sôi',example:'Propanal sôi giữa propane và propan-1-ol.',recognitionSigns:['Có nhiệt độ sôi/trạng thái hoặc so chất.'],targetQuestionCount:4},
      {id:'chem11-car-st-solubility-data',name:'Độ tan và phân tích dữ liệu',example:'Độ tan giảm khi mạch hydrocarbon tăng.',recognitionSigns:['Có water, bảng/đồ thị hoặc số carbon.'],targetQuestionCount:4}
    ],
    practiceCoverage:{targetQuestionCount:12,minimumQuestionsPerSubType:4,requiredPracticeRoles:['guided','near_transfer','misconception_check','far_transfer'],requiredRepresentations:['diagram','table','text'],masteryHoldoutCount:3}
  },
  {
    id:'chem11-qt77',topicId:'chem11-t6',name:'Phản ứng khử và cộng vào nhóm carbonyl',slug:'phan-ung-khu-cong-nhom-carbonyl',
    description:'Dự đoán alcohol từ NaBH4/LiAlH4, xác định bậc alcohol và viết sản phẩm cộng HCN theo phạm vi SGK.',exampleQuestionId:'chem11-car-q025',
    theory:['R–CHO + [H] → R–CH2OH: aldehyde tạo alcohol bậc I.','R–CO–R′ + [H] → R–CH(OH)–R′: ketone tạo alcohol bậc II.','HCN cộng vào C=O: H vào O tạo –OH, CN vào carbonyl carbon; sản phẩm tăng một carbon.'],
    recognitionSigns:['Có NaBH4/LiAlH4 hoặc ký hiệu [H].','Có yêu cầu xác định alcohol bậc I/II từ aldehyde/ketone.','Có HCN và sản phẩm cyanohydrin.'],
    solvingSteps:['Xác định carbonyl thuộc aldehyde hay ketone.','Giữ nguyên khung carbon, đổi C=O thành CH–OH/CH2OH và kiểm bậc alcohol.','Với HCN, đặt –OH và –CN trên carbonyl carbon, rồi kiểm số carbon tăng một.'],
    commonMistakes:['Khử aldehyde thành alcohol bậc II hoặc ketone thành bậc I.','Cắt mất carbonyl carbon hay loại oxygen hoàn toàn.','Coi HCN là phản ứng thế và không tăng số carbon.'],
    difficulty:'hard',examFrequency:'high',
    subTypes:[
      {id:'chem11-car-st-reduction-aldehyde',name:'Khử aldehyde',example:'CH3CHO→CH3CH2OH.',recognitionSigns:['Có –CHO và [H].'],targetQuestionCount:4},
      {id:'chem11-car-st-reduction-ketone',name:'Khử ketone',example:'CH3COCH3→CH3CHOHCH3.',recognitionSigns:['Có R–CO–R′ và [H].'],targetQuestionCount:4},
      {id:'chem11-car-st-hcn-addition',name:'Cộng HCN',example:'CH3CHO+HCN→CH3CH(OH)CN.',recognitionSigns:['Có HCN, cyanohydrin hoặc tăng một C.'],targetQuestionCount:4}
    ],
    practiceCoverage:{targetQuestionCount:12,minimumQuestionsPerSubType:4,requiredPracticeRoles:['guided','near_transfer','misconception_check','far_transfer'],requiredRepresentations:['equation','diagram','table'],masteryHoldoutCount:3}
  },
  {
    id:'chem11-qt78',topicId:'chem11-t6',name:'Oxi hóa aldehyde và phép thử phân biệt',slug:'oxi-hoa-aldehyde-phep-thu-phan-biet',
    description:'Viết/phân tích phản ứng aldehyde với Tollens, Cu(OH)₂/OH⁻, nước bromine và xử lí tỉ lượng–nhận biết.',exampleQuestionId:'chem11-car-q037',
    theory:['Một nhóm –CHO thông thường khử 2 mol Ag(I) thành 2 mol Ag trong Tollens; ketone đơn giản âm tính.','Aldehyde đun với Cu(OH)2/OH− tạo Cu2O đỏ gạch; ketone đơn giản không cho hiện tượng.','Aldehyde làm mất màu nước bromine do bị oxi hóa thành acid; đây không phải cộng Br2 vào C=O.'],
    recognitionSigns:['Có [Ag(NH3)2]+, gương bạc hoặc số mol Ag.','Có Cu(OH)2/OH−, đun nóng, kết tủa đỏ gạch.','Có nước bromine và yêu cầu phân biệt aldehyde–ketone.'],
    solvingSteps:['Xác định có nhóm –CHO; ketone đơn giản loại trước.','Viết sản phẩm oxi hóa và tỉ lệ 1 –CHO:2 Ag hoặc đối chiếu Cu2O.','Với Br2, mô tả oxi hóa aldehyde thành acid và bromine bị khử/mất màu.'],
    commonMistakes:['Cho acetone tráng bạc/đỏ gạch.','Dùng tỉ lệ một aldehyde tạo một Ag.','Gọi mất màu bromine là phản ứng cộng vào C=O.'],
    difficulty:'hard',examFrequency:'high',
    subTypes:[
      {id:'chem11-car-st-tollens-oxidation',name:'Tollens và tỉ lượng bạc',example:'1 mol CH3CHO tạo 2 mol Ag.',recognitionSigns:['Có Tollens, Ag hoặc carboxylate.'],targetQuestionCount:4},
      {id:'chem11-car-st-cuoh2-oxidation',name:'Cu(OH)₂/OH⁻ và Cu₂O',example:'Ethanal tạo Cu2O đỏ gạch khi đun.',recognitionSigns:['Có Cu(II), kiềm, nhiệt, đỏ gạch.'],targetQuestionCount:4},
      {id:'chem11-car-st-bromine-identification',name:'Nước bromine và nhận biết',example:'Aldehyde làm mất màu Br2(aq), ketone không.',recognitionSigns:['Có Br2(aq), mất màu hoặc phân biệt.'],targetQuestionCount:4}
    ],
    practiceCoverage:{targetQuestionCount:12,minimumQuestionsPerSubType:4,requiredPracticeRoles:['guided','near_transfer','misconception_check','far_transfer'],requiredRepresentations:['equation','experiment','table'],masteryHoldoutCount:3}
  },
  {
    id:'chem11-qt79',topicId:'chem11-t6',name:'Thí nghiệm Tollens, Cu(OH)₂ và iodoform',slug:'thi-nghiem-tollens-cuoh2-iodoform',
    description:'Phân tích quy trình, hiện tượng, an toàn của ba thí nghiệm chính thức và nhận diện motif CH₃CO–.',exampleQuestionId:'chem11-car-q049',
    theory:['Tollens phải pha mới, làm ấm cách thủy; aldehyde tạo lớp Ag kim loại và thuốc thử dư không được lưu.','Với Cu(OH)2/OH−, aldehyde cần đun thích hợp để tạo Cu2O đỏ gạch; khác glycerol tạo dung dịch xanh lam đậm ở thường.','Acetone + I2/NaOH tạo CHI3 kết tủa vàng; phép thử nhận motif CH3CO–, không phải mọi carbonyl.'],
    recognitionSigns:['Có thao tác pha mới/làm ấm và lớp bạc.','Có tạo Cu(OH)2, môi trường kiềm, đun và so glycerol.','Có I2/KI, NaOH, acetone và kết tủa vàng.'],
    solvingSteps:['Sắp xếp đúng thứ tự thuốc thử–mẫu–gia nhiệt và xác định chất bị oxi hóa/khử.','Ghép hiện tượng với sản phẩm Ag, Cu2O hoặc CHI3.','Kiểm tra an toàn: không lửa trực tiếp, không lưu Tollens, làm theo quy trình chất thải.'],
    commonMistakes:['Coi lớp bạc là muối bạc hoặc đun trực tiếp bằng lửa.','Nhầm Cu2O đỏ gạch với phức xanh glycerol.','Cho mọi carbonyl tạo iodoform hoặc mô tả CHI3 màu trắng/khí.'],
    difficulty:'hard',examFrequency:'high',
    subTypes:[
      {id:'chem11-car-st-tollens-experiment',name:'Thí nghiệm tráng bạc',example:'Làm ấm cách thủy, Ag bám thành ống.',recognitionSigns:['Có Tollens mới pha, water bath, silver mirror.'],targetQuestionCount:4},
      {id:'chem11-car-st-cuoh2-experiment',name:'Thí nghiệm Cu(OH)₂/OH⁻',example:'Đun aldehyde tạo Cu2O đỏ gạch.',recognitionSigns:['Có CuSO4/NaOH, nhiệt, Cu2O.'],targetQuestionCount:4},
      {id:'chem11-car-st-iodoform-experiment',name:'Phản ứng và thí nghiệm iodoform',example:'Acetone+I2/OH−→CHI3 vàng.',recognitionSigns:['Có CH3CO–, I2/KI, NaOH, màu vàng.'],targetQuestionCount:4}
    ],
    practiceCoverage:{targetQuestionCount:12,minimumQuestionsPerSubType:4,requiredPracticeRoles:['guided','near_transfer','misconception_check','far_transfer'],requiredRepresentations:['experiment','diagram','table'],masteryHoldoutCount:3}
  },
  {
    id:'chem11-qt80',topicId:'chem11-t6',name:'Ứng dụng, điều chế và bài tổng hợp carbonyl',slug:'ung-dung-dieu-che-tong-hop-carbonyl',
    description:'Liên hệ formaldehyde/acetaldehyde/acetone với ứng dụng–an toàn, viết hai tuyến điều chế và giải bài nhận biết/tổng hợp.',exampleQuestionId:'chem11-car-q061',
    theory:['Formalin là dung dịch formaldehyde, không phải chất tinh khiết; formaldehyde độc/kích ứng và cần hệ kín, thông gió.','Acetone là dung môi dễ bay hơi, dễ cháy; tránh nguồn lửa và xử lí chất thải đúng quy trình.','2CH2=CH2+O2→2CH3CHO; quy trình cumene cho đồng thời phenol và acetone.'],
    recognitionSigns:['Có formalin, bảo quản mẫu, nhựa hoặc acetone làm dung môi.','Có ethylene/O2 tạo ethanal hoặc cumene tạo phenol+acetone.','Có nhiều mẫu cần kết hợp Tollens–iodoform–water hoặc bài tỉ lượng chuỗi.'],
    solvingSteps:['Phân biệt chất tinh khiết–dung dịch thương mại và ghép đúng ứng dụng/rủi ro.','Bảo toàn C/H/O trong tuyến ethylene hoặc nhận khung C3 acetone của cumene.','Lập bảng phản ứng đặc trưng: aldehyde–Tollens, methyl ketone–iodoform, rồi tính theo tỉ lệ.'],
    commonMistakes:['Coi formalin là formaldehyde nguyên chất hoặc acetone vô hại.','Hydrate hóa ethylene thành ethanal hay bỏ acetone khỏi tuyến cumene.','Dùng một phép thử không đủ để phân biệt mọi carbonyl.'],
    difficulty:'hard',examFrequency:'high',
    subTypes:[
      {id:'chem11-car-st-applications-safety',name:'Ứng dụng và an toàn',example:'Formalin bảo quản mẫu nhưng formaldehyde cần kiểm soát phơi nhiễm.',recognitionSigns:['Có formalin, acetone, nhựa, dung môi hoặc an toàn.'],targetQuestionCount:4},
      {id:'chem11-car-st-preparation',name:'Điều chế ethanal và acetone',example:'Ethylene+O2→ethanal; cumene→phenol+acetone.',recognitionSigns:['Có ethylene, oxygen, cumene hoặc hiệu suất.'],targetQuestionCount:4},
      {id:'chem11-car-st-integrated',name:'Nhận biết và bài tổng hợp',example:'Tollens nhận aldehyde; iodoform nhận acetone.',recognitionSigns:['Có hỗn hợp/mẫu, nhiều thuốc thử hoặc chuỗi.'],targetQuestionCount:4}
    ],
    practiceCoverage:{targetQuestionCount:12,minimumQuestionsPerSubType:4,requiredPracticeRoles:['guided','near_transfer','misconception_check','far_transfer'],requiredRepresentations:['table','equation','text'],masteryHoldoutCount:3}
  },
  {
    id:'chem11-qt81',topicId:'chem11-t6',name:'Khái niệm, danh pháp và đồng phân carboxylic acid',slug:'khai-niem-danh-phap-dong-phan-carboxylic-acid',
    description:'Nhận diện –COOH, phân loại acid, gọi tên C1–C5, ghép tên thường và liệt kê đồng phân acid đơn giản.',exampleQuestionId:'chem11-cax-q001',
    theory:['Carboxylic acid chứa nhóm carboxyl –COOH; acid đơn chức thường viết RCOOH.','Tên thay thế: “acid + tên hydrocarbon tương ứng + oic”; carbon –COOH luôn là C1.','Acid no đơn chức mạch hở có CnH2nO2; chỉ tính cấu tạo có –COOH khi đề hỏi đồng phân carboxylic acid.'],
    recognitionSigns:['Có dãy cấu tạo cần tìm nhóm –COOH hoặc số nhóm acid.','Có tên/công thức C1–C5 hoặc tên formic, acetic, oxalic, citric.','Có CTPT C4H8O2/C5H10O2 và giới hạn acid no đơn chức mạch hở.'],
    solvingSteps:['Khoanh –C(=O)OH; không tách thành aldehyde và alcohol.','Chọn mạch dài nhất chứa carbon carboxyl, gán C1 rồi gọi tên acid …oic.','Cố định –COOH, phân bố phần alkyl còn lại theo các khung không trùng; loại ester.'],
    commonMistakes:['Coi mọi carbonyl là acid.','Không tính carbon –COOH khi đếm mạch hoặc đánh số từ đầu xa.','Tính cả ester hay bỏ đồng phân nhánh của C5.'],
    difficulty:'hard',examFrequency:'high',
    subTypes:[
      {id:'chem11-cax-st-concept-formula',name:'Khái niệm, công thức và phân loại',example:'CH3COOH là acid đơn chức; HOOC–COOH là acid hai chức.',recognitionSigns:['Có –COOH, RCOOH, số nhóm chức hoặc công thức tổng quát.'],targetQuestionCount:4},
      {id:'chem11-cax-st-nomenclature-common',name:'Danh pháp C1–C5 và tên thường',example:'CH3COOH là ethanoic/acetic acid.',recognitionSigns:['Có CTCT, tên thay thế hoặc tên thường.'],targetQuestionCount:4},
      {id:'chem11-cax-st-isomer-reverse',name:'Đồng phân và chuyển đổi tên–cấu tạo',example:'C4H8O2 có hai carboxylic acid no đơn chức mạch hở.',recognitionSigns:['Có CTPT, số đồng phân hoặc tên cần viết CTCT.'],targetQuestionCount:4}
    ],
    practiceCoverage:{targetQuestionCount:12,minimumQuestionsPerSubType:4,requiredPracticeRoles:['guided','near_transfer','misconception_check','far_transfer'],requiredRepresentations:['text','diagram','equation'],masteryHoldoutCount:3}
  },
  {
    id:'chem11-qt82',topicId:'chem11-t6',name:'Cấu tạo, tính chất vật lí và sự phân li',slug:'cau-tao-tinh-chat-vat-li-su-phan-li-carboxylic-acid',
    description:'Giải thích hình học –COOH, liên kết hydrogen/dimer, nhiệt độ sôi–độ tan và cân bằng phân li acid yếu.',exampleQuestionId:'chem11-cax-q013',
    theory:['Carbon carboxyl gần sp2, nhóm –COOH gần phẳng; C=O và O–H đều phân cực.','Acid vừa cho vừa nhận hydrogen bond, thường tạo dimer nên sôi cao; acid mạch ngắn tan tốt, độ tan giảm khi mạch C tăng.','RCOOH ⇌ RCOO− + H+; carboxylic acid thông thường là acid yếu, phân li không hoàn toàn.'],
    recognitionSigns:['Có hình dạng, sp2, điện tích riêng phần hoặc sơ đồ dimer.','Có bảng nhiệt độ sôi/độ tan theo số carbon.','Có phương trình phân li, [H+] hoặc so acid yếu với HCl.'],
    solvingSteps:['Đánh dấu carbon carboxyl và hai oxygen; suy ra hình học/phân cực.','Xếp lực tương tác và cân bằng phần –COOH ưa nước với mạch hydrocarbon kị nước.','Viết cân bằng phân li; không thay nồng độ ban đầu bằng [H+] nếu chưa có dữ kiện.'],
    commonMistakes:['Cho carbon carboxyl tứ diện hoặc acid không tạo hydrogen bond.','Kết luận acid sôi thấp hơn alcohol hay tan tăng khi mạch dài.','Coi acetic acid phân li hoàn toàn.'],
    difficulty:'hard',examFrequency:'high',
    subTypes:[
      {id:'chem11-cax-st-structure-hbond',name:'Cấu tạo và liên kết hydrogen',example:'Dimer acid được giữ bởi hai liên kết hydrogen.',recognitionSigns:['Có –COOH, sp2, hình học hoặc dimer.'],targetQuestionCount:4},
      {id:'chem11-cax-st-physical-data',name:'Trạng thái, nhiệt độ sôi và độ tan',example:'Acetic acid sôi cao và tan tốt trong nước.',recognitionSigns:['Có bảng/đồ thị vật lí hoặc so alcohol–acid.'],targetQuestionCount:4},
      {id:'chem11-cax-st-dissociation-data',name:'Phân li acid yếu và dữ liệu',example:'CH3COOH ⇌ CH3COO− + H+.',recognitionSigns:['Có cân bằng ion, [H+], pH hoặc mức độ phân li.'],targetQuestionCount:4}
    ],
    practiceCoverage:{targetQuestionCount:12,minimumQuestionsPerSubType:4,requiredPracticeRoles:['guided','near_transfer','misconception_check','far_transfer'],requiredRepresentations:['diagram','table','equation'],masteryHoldoutCount:3}
  },
  {
    id:'chem11-qt83',topicId:'chem11-t6',name:'Tính acid và phản ứng tạo muối carboxylate',slug:'tinh-acid-phan-ung-tao-muoi-carboxylate',
    description:'Xử lí chỉ thị, Mg, oxide base/base, carbonate và tỉ lượng theo số nhóm –COOH.',exampleQuestionId:'chem11-cax-q025',
    theory:['Dung dịch carboxylic acid làm quỳ tím hóa đỏ; với kim loại trước H tạo carboxylate và H2.','RCOOH + NaOH → RCOONa + H2O; với oxide base cũng tạo muối và nước.','2RCOOH + Na2CO3 → 2RCOONa + CO2 + H2O; hydrogencarbonate có tỉ lệ 1:1.'],
    recognitionSigns:['Có quỳ tím, Mg/Zn và khí H2.','Có NaOH, CuO/CaO hoặc bài trung hòa.','Có Na2CO3/NaHCO3/CaCO3, sủi CO2 hoặc định lượng khí.'],
    solvingSteps:['Đếm số nhóm –COOH và xác định tác nhân.','Viết muối dạng –COO−M; cân bằng điện tích và nguyên tử.','Đổi dữ kiện về mol, dùng tỉ lệ nhóm acid:H2/CO2/OH− rồi kiểm đơn vị.'],
    commonMistakes:['Cho acid yếu không phản ứng với Mg/NaOH/carbonate.','Nhầm khí với Mg là CO2.','Bỏ số nhóm –COOH khi tính tỉ lượng.'],
    difficulty:'hard',examFrequency:'high',
    subTypes:[
      {id:'chem11-cax-st-indicator-metal',name:'Chỉ thị và kim loại',example:'2CH3COOH+Mg→(CH3COO)2Mg+H2.',recognitionSigns:['Có quỳ, Mg/Zn, muối và H2.'],targetQuestionCount:4},
      {id:'chem11-cax-st-base-oxide',name:'Base và oxide base',example:'CH3COOH+NaOH→CH3COONa+H2O.',recognitionSigns:['Có NaOH/KOH/CuO/CaO hoặc trung hòa.'],targetQuestionCount:4},
      {id:'chem11-cax-st-carbonate-stoichiometry',name:'Carbonate và tỉ lượng CO₂',example:'2CH3COOH+Na2CO3→2CH3COONa+CO2+H2O.',recognitionSigns:['Có carbonate/hydrogencarbonate, sủi bọt, thể tích CO2.'],targetQuestionCount:4}
    ],
    practiceCoverage:{targetQuestionCount:12,minimumQuestionsPerSubType:4,requiredPracticeRoles:['guided','near_transfer','misconception_check','far_transfer'],requiredRepresentations:['equation','table','text'],masteryHoldoutCount:3}
  },
  {
    id:'chem11-qt84',topicId:'chem11-t6',name:'Ester hóa và bài toán hiệu suất',slug:'ester-hoa-bai-toan-hieu-suat',
    description:'Viết/gọi tên ester, giải thích cân bằng–xúc tác và tính lượng ester theo chất giới hạn, hiệu suất.',exampleQuestionId:'chem11-cax-q037',
    theory:['RCOOH + R′OH ⇌ RCOOR′ + H2O, H2SO4 đặc, đun nóng.','Tên ester gồm tên alkyl từ alcohol + tên carboxylate từ acid; phản ứng thuận nghịch.','Tính mol ester lí thuyết theo chất giới hạn rồi nhân hiệu suất; xúc tác không làm đổi hằng số cân bằng.'],
    recognitionSigns:['Có acid + alcohol, H2SO4 đặc, nhiệt và ester/water.','Có tên ethyl acetate/methyl formate hoặc yêu cầu truy ngược chất đầu.','Có khối lượng, mol, hiệu suất hoặc biện pháp tăng lượng ester.'],
    solvingSteps:['Tách phần acyl RCOO– và alkyl R′ để viết sản phẩm/tên.','Đổi về mol, dùng tỉ lệ 1:1 cho acid đơn chức–alcohol đơn chức và tìm chất giới hạn.','Tính lí thuyết, áp dụng hiệu suất; với cân bằng phân biệt xúc tác với loại nước/dùng dư.'],
    commonMistakes:['Viết phản ứng một chiều hoặc gọi ngược thứ tự tên ester.','Cho xúc tác tự làm tăng hằng số cân bằng.','Nhân hiệu suất trước khi xác định chất giới hạn.'],
    difficulty:'hard',examFrequency:'high',
    subTypes:[
      {id:'chem11-cax-st-ester-equation-name',name:'Phương trình và tên ester',example:'CH3COOH+C2H5OH⇌CH3COOC2H5+H2O.',recognitionSigns:['Có acid, alcohol, ester hoặc tên cần chuyển đổi.'],targetQuestionCount:4},
      {id:'chem11-cax-st-equilibrium-method',name:'Cân bằng, xúc tác và biện pháp',example:'Loại water hoặc dùng dư một chất giúp tăng lượng ester cân bằng.',recognitionSigns:['Có H2SO4, nhiệt, cân bằng hoặc yêu cầu tăng hiệu suất.'],targetQuestionCount:4},
      {id:'chem11-cax-st-yield-calculation',name:'Tính chất giới hạn và hiệu suất',example:'n ester thực tế=n lí thuyết×H%.',recognitionSigns:['Có mol/khối lượng hai chất đầu và hiệu suất.'],targetQuestionCount:4}
    ],
    practiceCoverage:{targetQuestionCount:12,minimumQuestionsPerSubType:4,requiredPracticeRoles:['guided','near_transfer','misconception_check','far_transfer'],requiredRepresentations:['equation','table','text'],masteryHoldoutCount:3}
  },
  {
    id:'chem11-qt85',topicId:'chem11-t6',name:'Thí nghiệm tính acid và điều chế ethyl acetate',slug:'thi-nghiem-tinh-acid-dieu-che-ethyl-acetate',
    description:'Phân tích thiết kế, hiện tượng, nhận biết khí và an toàn trong thí nghiệm acetic/citric acid và ester hóa.',exampleQuestionId:'chem11-cax-q049',
    theory:['Acid làm quỳ tím đỏ; với Mg sinh H2, với carbonate sinh CO2—cần căn cứ tác nhân/phép thử để phân biệt khí.','Thí nghiệm ethyl acetate dùng ethanol, acetic acid, vài giọt H2SO4 đặc và gia nhiệt cách thủy.','Không ngửi trực tiếp, không dùng lửa trần; làm nguội, tách/quan sát sản phẩm và xử lí chất thải theo quy trình.'],
    recognitionSigns:['Có quỳ, Mg, carbonate và chuỗi ống nghiệm so sánh.','Có ethanol–acetic acid–H2SO4 đặc–water bath.','Có yêu cầu tìm lỗi thao tác, xác định biến hoặc giải thích hiện tượng.'],
    solvingSteps:['Lập bảng mẫu–thuốc thử–hiện tượng–khí/sản phẩm.','Sắp xếp thao tác theo quy trình: trộn có kiểm soát, xúc tác, cách thủy, làm nguội/quan sát.','Loại thao tác ngửi trực tiếp, lửa trần, pipet bằng miệng hoặc xử lí tràn đổ tùy tiện.'],
    commonMistakes:['Chỉ thấy bọt khí đã kết luận H2/CO2.','Đun ester hóa trực tiếp trên lửa.','Đưa ống nghiệm sát mũi để ngửi sản phẩm.'],
    difficulty:'hard',examFrequency:'high',
    subTypes:[
      {id:'chem11-cax-st-acid-experiment',name:'Thí nghiệm chỉ thị–Mg–carbonate',example:'Mg tạo H2; NaHCO3 tạo CO2.',recognitionSigns:['Có sơ đồ nhiều ống nghiệm và hiện tượng khí/màu.'],targetQuestionCount:4},
      {id:'chem11-cax-st-ester-experiment',name:'Thí nghiệm ethyl acetate',example:'Đun cách thủy hỗn hợp ethanol, acetic acid, H2SO4 đặc.',recognitionSigns:['Có lắp dụng cụ, thao tác, mùi ester hoặc lớp sản phẩm.'],targetQuestionCount:4},
      {id:'chem11-cax-st-safety-design',name:'Thiết kế, kiểm soát biến và an toàn',example:'Không dùng lửa trần hay ngửi trực tiếp.',recognitionSigns:['Có lỗi quy trình, PPE, biến thí nghiệm hoặc chất thải.'],targetQuestionCount:4}
    ],
    practiceCoverage:{targetQuestionCount:12,minimumQuestionsPerSubType:4,requiredPracticeRoles:['guided','near_transfer','misconception_check','far_transfer'],requiredRepresentations:['experiment','diagram','table'],masteryHoldoutCount:3}
  },
  {
    id:'chem11-qt86',topicId:'chem11-t6',name:'Điều chế, ứng dụng và bài tổng hợp carboxylic acid',slug:'dieu-che-ung-dung-tong-hop-carboxylic-acid',
    description:'Phân tích lên men giấm, oxi hóa butane, ứng dụng–an toàn và chuỗi nhận biết/tính toán tổng hợp.',exampleQuestionId:'chem11-cax-q061',
    theory:['C2H5OH+O2→CH3COOH+H2O trong lên men giấm; quá trình cần oxygen và vi khuẩn acetic.','2C4H10+5O2→4CH3COOH+2H2O là oxi hóa không hoàn toàn butane có kiểm soát.','Ứng dụng phụ thuộc đúng acid/nồng độ; giấm không phải acetic acid tinh khiết và acid thực phẩm không mặc nhiên an toàn khi đậm đặc.'],
    recognitionSigns:['Có ethanol, oxygen, vi khuẩn acetic hoặc quy trình giấm.','Có butane/O2/xúc tác, hiệu suất acetic acid.','Có formic/acetic/oxalic/citric/benzoic acid, tình huống an toàn hoặc chuỗi nhận biết.'],
    solvingSteps:['Xác định tuyến sinh học hay công nghiệp và viết phương trình bảo toàn C/H/O.','Với tính toán, dùng tỉ lệ 1 ethanol:1 acid hoặc 1 butane:2 acid rồi áp dụng hiệu suất.','Với ứng dụng/nhận biết, lập bảng nhóm chức–phản ứng–rủi ro; chọn chuỗi phép thử đủ phân biệt.'],
    commonMistakes:['Coi lên men giấm là kị khí hoặc đường thành acid trực tiếp một bước.','Dùng tỉ lệ 1 butane:1 acetic acid.','Coi giấm là acid tinh khiết hay mọi acid hữu cơ đều an toàn.'],
    difficulty:'hard',examFrequency:'high',
    subTypes:[
      {id:'chem11-cax-st-preparation',name:'Lên men giấm và oxi hóa alkane',example:'Ethanol+O2→acetic acid; butane cho 2 mol acid/mol.',recognitionSigns:['Có ethanol/butane, O2, vi khuẩn/xúc tác hoặc hiệu suất.'],targetQuestionCount:4},
      {id:'chem11-cax-st-applications-safety',name:'Ứng dụng và an toàn',example:'Citric acid tạo vị chua; benzoic acid/benzoate dùng có kiểm soát.',recognitionSigns:['Có thực phẩm, bảo quản, tẩy cặn, PPE hoặc nồng độ.'],targetQuestionCount:4},
      {id:'chem11-cax-st-integrated',name:'Nhận biết và bài tổng hợp',example:'NaHCO3 nhận acid qua CO2; Tollens nhận aldehyde.',recognitionSigns:['Có nhiều mẫu, nhiều phép thử, chuỗi acid–ester hoặc dữ kiện mol.'],targetQuestionCount:4}
    ],
    practiceCoverage:{targetQuestionCount:12,minimumQuestionsPerSubType:4,requiredPracticeRoles:['guided','near_transfer','misconception_check','far_transfer'],requiredRepresentations:['table','equation','text'],masteryHoldoutCount:3}
  }
];

for (const questionType of g11ChemistryCarbonylCarboxylicAcidQuestionTypes) {
  const resource = chem11CarbonylCarboxylicAcidTheoryResources[questionType.id];
  if (!resource) continue;
  questionType.theory = [...(questionType.theory ?? []), ...resource.theorySupplement];
  questionType.theoryCheckpoints = resource.checkpoints;
}
