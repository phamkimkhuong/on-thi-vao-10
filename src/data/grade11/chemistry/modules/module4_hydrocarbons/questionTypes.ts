import type { QuestionType } from '@/types';

export const g11ChemistryHydrocarbonsQuestionTypes: QuestionType[] = [
  {
    id:'chem11-qt45',topicId:'chem11-t4',name:'Alkane: khái niệm, công thức, nguồn và đồng phân',
    slug:'alkane-khai-niem-cong-thuc-nguon-dong-phan',
    description:'Nhận diện alkane mạch hở, dùng CnH2n+2, đọc nguồn tự nhiên và viết khung carbon đến C5.',
    exampleQuestionId:'chem11-hc-q001',
    theory:['Alkane là hydrocarbon no mạch hở, CT chung CnH2n+2 (n≥1).','Nguồn chính: khí thiên nhiên, khí đồng hành, dầu mỏ; biogas giàu methane nhưng không tinh khiết.','Từ C4 xuất hiện đồng phân mạch carbon; C4H10 có 2, C5H12 có 3 khung.'],
    recognitionSigns:['Có CTPT cần kiểm công thức alkane.','Có dữ liệu khí thiên nhiên/biogas/dầu mỏ.','Yêu cầu số hoặc CTCT đồng phân mạch.'],
    solvingSteps:['Kiểm mạch hở/no và H=2C+2.','Đối chiếu nguồn/thành phần.','Liệt kê khung từ mạch dài đến nhánh và loại trùng.'],
    commonMistakes:['Áp dụng CnH2n+2 cho mọi hydrocarbon.','Coi biogas là methane tinh khiết.','Đếm cách viết ngược thành đồng phân.'],
    difficulty:'medium',examFrequency:'high',
    subTypes:[
      {id:'chem11-hc-st-alkane-concept',name:'Khái niệm và công thức chung',example:'C4H10 là alkane.',recognitionSigns:['Có CTPT hoặc n.'],targetQuestionCount:4},
      {id:'chem11-hc-st-alkane-source',name:'Nguồn alkane và dữ liệu thành phần',example:'Methane trong biogas.',recognitionSigns:['Có khí thiên nhiên, biogas, dầu mỏ.'],targetQuestionCount:4},
      {id:'chem11-hc-st-alkane-isomer',name:'Đồng phân mạch carbon',example:'C5H12 có ba khung.',recognitionSigns:['Hỏi số/cặp CTCT alkane.'],targetQuestionCount:4}
    ],
    practiceCoverage:{targetQuestionCount:12,minimumQuestionsPerSubType:4,requiredPracticeRoles:['guided','near_transfer','misconception_check','far_transfer'],requiredRepresentations:['text','table','equation'],masteryHoldoutCount:3}
  },
  {
    id:'chem11-qt46',topicId:'chem11-t4',name:'Danh pháp alkane mạch thẳng và mạch nhánh',
    slug:'danh-phap-alkane',
    description:'Đổi tên–công thức alkane C1–C10 và gọi tên mạch nhánh đến 5 carbon theo mạch chính dài nhất, bộ số nhỏ nhất.',
    exampleQuestionId:'chem11-hc-q013',
    theory:['Tên mạch thẳng: meth-, eth-, prop-, but-, pent-, hex-, hept-, oct-, non-, dec- + ane.','Mạch chính là chuỗi C liên tục dài nhất; đánh số từ đầu gần nhánh.','Tên: vị trí–tên nhánh + tên mạch chính; nhánh lặp dùng di-, tri- và ghi đủ vị trí.'],
    recognitionSigns:['Yêu cầu tên từ CTCT.','Yêu cầu CTCT từ tên.','Có nhiều cách chọn mạch/đánh số.'],
    solvingSteps:['Chọn chuỗi liên tục dài nhất.','Đánh số cho bộ vị trí nhỏ nhất.','Xác định nhánh, ghép tên và kiểm tổng carbon.'],
    commonMistakes:['Chọn hàng vẽ ngang làm mạch chính.','Luôn đánh số trái sang phải.','Đếm carbon mạch chính thành nhánh.'],
    difficulty:'medium',examFrequency:'high',
    subTypes:[
      {id:'chem11-hc-st-name-straight',name:'Tên alkane mạch thẳng',example:'C6H14 là hexane.',recognitionSigns:['Không có nhánh.'],targetQuestionCount:4},
      {id:'chem11-hc-st-name-branched',name:'Gọi tên alkane mạch nhánh',example:'2-methylpropane.',recognitionSigns:['CTCT có nhánh.'],targetQuestionCount:4},
      {id:'chem11-hc-st-name-reverse-check',name:'Viết CTCT từ tên và sửa tên sai',example:'2,2-dimethylpropane.',recognitionSigns:['Có tên cho trước hoặc nhiều tên ứng viên.'],targetQuestionCount:4}
    ],
    practiceCoverage:{targetQuestionCount:12,minimumQuestionsPerSubType:4,requiredPracticeRoles:['guided','near_transfer','misconception_check','far_transfer'],requiredRepresentations:['text','diagram','equation'],masteryHoldoutCount:3}
  },
  {
    id:'chem11-qt47',topicId:'chem11-t4',name:'Cấu tạo, hình dạng và tính chất vật lí alkane',
    slug:'cau-tao-hinh-dang-tinh-chat-vat-li-alkane',
    description:'Liên hệ liên kết sigma, tính kém phân cực với hình dạng methane/ethane, độ tan, trạng thái và xu hướng nhiệt độ sôi.',
    exampleQuestionId:'chem11-hc-q025',
    theory:['Alkane chỉ có liên kết sigma C–C, C–H; methane tứ diện, quanh C của ethane gần tứ diện.','Alkane kém phân cực, không tan trong nước, nhẹ hơn nước; tan trong dung môi kém phân cực.','Nhiệt độ sôi thường tăng theo kích thước; cùng CTPT, phân nhánh nhiều thường sôi thấp hơn.'],
    recognitionSigns:['Có mô hình methane/ethane.','Có bảng C1–C6 và nhiệt độ sôi/trạng thái.','So mạch thẳng–nhánh hoặc độ tan.'],
    solvingSteps:['Xác định liên kết và hình học.','Dùng tính phân cực để giải thích độ tan/tỉ khối.','Đọc dữ liệu và không biến xu hướng thành tuyệt đối.'],
    commonMistakes:['Vẽ methane phẳng.','Cho alkane tan tốt trong nước.','Cho phân nhánh luôn tăng nhiệt độ sôi.'],
    difficulty:'medium',examFrequency:'high',
    subTypes:[
      {id:'chem11-hc-st-structure-shape',name:'Liên kết và hình dạng',example:'CH4 tứ diện.',recognitionSigns:['Có sigma/pi hoặc mô hình.'],targetQuestionCount:4},
      {id:'chem11-hc-st-physical-basic',name:'Trạng thái, độ tan, tỉ khối',example:'Hexane không tan, nổi trên nước.',recognitionSigns:['Có nước/dung môi/trạng thái.'],targetQuestionCount:4},
      {id:'chem11-hc-st-boiling-data',name:'Dữ liệu nhiệt độ sôi và phân nhánh',example:'Butane so isobutane.',recognitionSigns:['Có bảng/đồ thị nhiệt độ sôi.'],targetQuestionCount:4}
    ],
    practiceCoverage:{targetQuestionCount:12,minimumQuestionsPerSubType:4,requiredPracticeRoles:['guided','near_transfer','misconception_check','far_transfer'],requiredRepresentations:['diagram','table','text'],masteryHoldoutCount:3}
  },
  {
    id:'chem11-qt48',topicId:'chem11-t4',name:'Phản ứng, ứng dụng và môi trường của alkane',
    slug:'phan-ung-ung-dung-moi-truong-alkane',
    description:'Phản ứng thế, cracking/reforming, cháy hoàn toàn–không hoàn toàn, thí nghiệm hexane, ứng dụng và giảm phát thải.',
    exampleQuestionId:'chem11-hc-q037',
    theory:['Thế halogen cần ánh sáng/đun nóng: R–H + Br2 → R–Br + HBr.','Cracking tạo hydrocarbon nhỏ hơn; reforming đổi khung; cháy hoàn toàn CnH2n+2 tạo nCO2+(n+1)H2O.','Thiếu O2 tạo CO/soot; khí thải cần giảm bằng bảo dưỡng, xúc tác, nhiên liệu sạch và hành vi sử dụng hợp lí.'],
    recognitionSigns:['Có bromine/ánh sáng hoặc thí nghiệm hexane.','Có sơ đồ cracking/reforming.','Có phương trình cháy, khí thải, ứng dụng.'],
    solvingSteps:['Nhận loại phản ứng và điều kiện.','Bảo toàn C,H,halogen/O để cân bằng.','Liên hệ sản phẩm với hiện tượng, an toàn và tác động môi trường.'],
    commonMistakes:['Gọi thế là cộng.','Cracking chỉ tạo alkane.','Cho cháy luôn hoàn toàn và không ảnh hưởng môi trường.'],
    difficulty:'hard',examFrequency:'high',
    subTypes:[
      {id:'chem11-hc-st-substitution-experiment',name:'Thế halogen và thí nghiệm',example:'Hexane + Br2 dưới ánh sáng.',recognitionSigns:['Có bromine, ánh sáng, hiện tượng.'],targetQuestionCount:4},
      {id:'chem11-hc-st-cracking-reforming',name:'Cracking và reforming',example:'C6H14 → C3H8 + C3H6.',recognitionSigns:['Có nhiệt/xúc tác và hydrocarbon nhỏ hơn.'],targetQuestionCount:4},
      {id:'chem11-hc-st-combustion-environment',name:'Cháy, ứng dụng và môi trường',example:'C6H14 cháy và khí thải.',recognitionSigns:['Có O2/CO2/H2O/CO/soot hoặc giao thông.'],targetQuestionCount:4}
    ],
    practiceCoverage:{targetQuestionCount:12,minimumQuestionsPerSubType:4,requiredPracticeRoles:['guided','near_transfer','misconception_check','far_transfer'],requiredRepresentations:['experiment','equation','table'],masteryHoldoutCount:3}
  },
  {
    id:'chem11-qt49',topicId:'chem11-t4',name:'Khái niệm, công thức và danh pháp hydrocarbon không no',slug:'khai-niem-cong-thuc-danh-phap-khong-no',
    description:'Phân biệt alkene/alkyne, dùng công thức chung và gọi tên C2–C5.',exampleQuestionId:'chem11-hc-q049',
    theory:['Alkene một C=C: CnH2n; alkyne một C≡C: CnH2n−2.','Tên mạch chính ưu tiên chỉ số liên kết bội nhỏ nhất, đuôi -ene/-yne.','Tên thường: ethylene, acetylene.'],
    recognitionSigns:['Có CTPT/CTCT liên kết bội.','Có tên hoặc vị trí C=C/C≡C.'],solvingSteps:['Xác định loại liên kết bội.','Chọn mạch chứa liên kết bội và đánh số.','Kiểm CTPT.'],
    commonMistakes:['Áp công thức không xét mạch/vòng.','Ưu tiên nhánh trước liên kết bội.'],difficulty:'medium',examFrequency:'high',
    subTypes:[{id:'chem11-hc-st-unsat-concept',name:'Khái niệm–công thức',example:'C3H6 alkene.',recognitionSigns:['Có CTPT.'],targetQuestionCount:4},{id:'chem11-hc-st-unsat-name-alkene',name:'Danh pháp alkene',example:'but-2-ene.',recognitionSigns:['Có C=C.'],targetQuestionCount:4},{id:'chem11-hc-st-unsat-name-alkyne',name:'Danh pháp alkyne',example:'but-1-yne.',recognitionSigns:['Có C≡C.'],targetQuestionCount:4}],
    practiceCoverage:{targetQuestionCount:12,minimumQuestionsPerSubType:4,requiredPracticeRoles:['guided','near_transfer','misconception_check','far_transfer'],requiredRepresentations:['text','equation','diagram'],masteryHoldoutCount:3}
  },
  {
    id:'chem11-qt50',topicId:'chem11-t4',name:'Cấu tạo, đồng phân hình học và tính chất vật lí',slug:'cau-tao-cis-trans-vat-li',
    description:'Đọc sigma/pi, hình học ethylene/acetylene, điều kiện cis–trans và dữ liệu vật lí.',exampleQuestionId:'chem11-hc-q061',
    theory:['C=C: 1σ+1π, ethylene phẳng; C≡C:1σ+2π, acetylene thẳng.','Cis–trans cần mỗi C của C=C gắn hai nhóm khác nhau.','Alkene/alkyne kém phân cực, ít tan nước.'],
    recognitionSigns:['Có mô hình liên kết.','Có hai cấu hình quanh C=C.','Có bảng nhiệt độ sôi/độ tan.'],solvingSteps:['Đếm sigma/pi.','Kiểm điều kiện cis–trans trên từng C.','Đọc dữ liệu vật lí theo phân cực/kích thước.'],
    commonMistakes:['Cho C=C có 2 sigma.','Mọi alkene đều cis–trans.'],difficulty:'medium',examFrequency:'high',
    subTypes:[{id:'chem11-hc-st-unsat-bond-shape',name:'Liên kết–hình dạng',example:'Acetylene thẳng.',recognitionSigns:['Có sigma/pi.'],targetQuestionCount:4},{id:'chem11-hc-st-cis-trans',name:'Đồng phân hình học',example:'cis/trans-but-2-ene.',recognitionSigns:['Có C=C và nhóm thế.'],targetQuestionCount:4},{id:'chem11-hc-st-unsat-physical',name:'Tính chất vật lí',example:'Không tan trong nước.',recognitionSigns:['Có bảng/độ tan.'],targetQuestionCount:4}],
    practiceCoverage:{targetQuestionCount:12,minimumQuestionsPerSubType:4,requiredPracticeRoles:['guided','near_transfer','misconception_check','far_transfer'],requiredRepresentations:['diagram','table','text'],masteryHoldoutCount:3}
  },
  {
    id:'chem11-qt51',topicId:'chem11-t4',name:'Phản ứng cộng và quy tắc Markovnikov',slug:'phan-ung-cong-markovnikov',
    description:'Cộng H2, Br2, HX, H2O vào alkene/alkyne và xác định sản phẩm chính.',exampleQuestionId:'chem11-hc-q073',
    theory:['Liên kết pi mở khi cộng; C=C cộng 1 đương lượng, C≡C có thể cộng 2.','Br2 mất màu; hydrogen hóa cần xúc tác kim loại.','Cộng HX/H2O vào alkene bất đối xứng theo Markovnikov trong trường hợp chuẩn.'],
    recognitionSigns:['Có H2/Br2/HX/H2O.','Yêu cầu sản phẩm chính hoặc lượng chất cộng.'],solvingSteps:['Xác định số liên kết pi.','Mở pi và gắn hai phần tác nhân.','Với alkene bất đối xứng, áp Markovnikov.'],
    commonMistakes:['Gọi cộng là thế.','Alkyne chỉ cộng 1 mol.','Gắn HX ngẫu nhiên.'],difficulty:'hard',examFrequency:'high',
    subTypes:[{id:'chem11-hc-st-add-h2-br2',name:'Cộng H2 và Br2',example:'CH2=CH2+Br2.',recognitionSigns:['Có H2/Br2.'],targetQuestionCount:4},{id:'chem11-hc-st-add-hx-water',name:'Cộng HX và nước',example:'Propene + HBr.',recognitionSigns:['Có alkene bất đối xứng.'],targetQuestionCount:4},{id:'chem11-hc-st-add-data',name:'Tỉ lượng và suy luận cộng',example:'Mol Br2 bị tiêu thụ.',recognitionSigns:['Có số mol/khối lượng.'],targetQuestionCount:4}],
    practiceCoverage:{targetQuestionCount:12,minimumQuestionsPerSubType:4,requiredPracticeRoles:['guided','near_transfer','misconception_check','far_transfer'],requiredRepresentations:['equation','table','experiment'],masteryHoldoutCount:3}
  },
  {
    id:'chem11-qt52',topicId:'chem11-t4',name:'Trùng hợp, alk-1-yne và phản ứng oxi hóa',slug:'trung-hop-alk1yne-oxi-hoa',
    description:'Viết mắt xích polymer, nhận biết alkyne đầu mạch, KMnO4 và cháy.',exampleQuestionId:'chem11-hc-q085',
    theory:['Ethylene trùng hợp thành –CH2–CH2–.','Alk-1-yne có ≡C–H tạo kết tủa với AgNO3/NH3.','Alkene/alkyne làm mất màu KMnO4 và cháy tạo CO2,H2O.'],
    recognitionSigns:['Có monomer/polymer.','Có AgNO3/NH3.','Có KMnO4 hoặc cháy.'],solvingSteps:['Nhận phản ứng đặc trưng.','Viết biến đổi tại liên kết bội.','Dùng hiện tượng để phân biệt nhưng xét tính chọn lọc.'],
    commonMistakes:['Giữ C=C trong mắt xích.','Mọi alkyne đều kết tủa bạc.'],difficulty:'hard',examFrequency:'high',
    subTypes:[{id:'chem11-hc-st-polymerization',name:'Trùng hợp',example:'PE từ ethylene.',recognitionSigns:['Có monomer/mắt xích.'],targetQuestionCount:4},{id:'chem11-hc-st-terminal-alkyne',name:'Alk-1-yne với bạc',example:'HC≡CH tạo kết tủa.',recognitionSigns:['Có ≡C–H.'],targetQuestionCount:4},{id:'chem11-hc-st-unsat-oxidation',name:'KMnO4 và cháy',example:'Mất màu thuốc tím.',recognitionSigns:['Có KMnO4/O2.'],targetQuestionCount:4}],
    practiceCoverage:{targetQuestionCount:12,minimumQuestionsPerSubType:4,requiredPracticeRoles:['guided','near_transfer','misconception_check','far_transfer'],requiredRepresentations:['equation','experiment','table'],masteryHoldoutCount:3}
  },
  {
    id:'chem11-qt53',topicId:'chem11-t4',name:'Điều chế, thí nghiệm và ứng dụng ethylene–acetylene',slug:'dieu-che-thi-nghiem-ung-dung',
    description:'Dehydration ethanol, CaC2, cracking/methane, quy trình thí nghiệm và ứng dụng.',exampleQuestionId:'chem11-hc-q097',
    theory:['Ethanol --H2SO4 đặc, nhiệt→ ethylene + H2O; CaC2+2H2O→C2H2+Ca(OH)2.','Công nghiệp: cracking tạo alkene; nhiệt phân methane tạo acetylene.','Phải đuổi không khí trước khi đốt khí; ethylene làm polymer/điều hòa quả, acetylene hàn cắt.'],
    recognitionSigns:['Có bộ điều chế khí.','Có ethanol/CaC2/methane.','Có bối cảnh polymer, quả, hàn cắt.'],solvingSteps:['Xác định chất đầu và khí tạo ra.','Kiểm dụng cụ/thu khí/an toàn.','Ghép ứng dụng với tính chất.'],
    commonMistakes:['CaC2 tạo ethylene.','Đốt dòng khí đầu tiên.'],difficulty:'medium',examFrequency:'high',
    subTypes:[{id:'chem11-hc-st-prep-ethylene',name:'Điều chế ethylene',example:'Dehydrate ethanol.',recognitionSigns:['Có ethanol/H2SO4.'],targetQuestionCount:4},{id:'chem11-hc-st-prep-acetylene',name:'Điều chế acetylene',example:'CaC2+H2O.',recognitionSigns:['Có carbide.'],targetQuestionCount:4},{id:'chem11-hc-st-unsat-applications',name:'Ứng dụng và công nghiệp',example:'PE, hàn cắt.',recognitionSigns:['Có bối cảnh thực tế.'],targetQuestionCount:4}],
    practiceCoverage:{targetQuestionCount:12,minimumQuestionsPerSubType:4,requiredPracticeRoles:['guided','near_transfer','misconception_check','far_transfer'],requiredRepresentations:['experiment','equation','table'],masteryHoldoutCount:3}
  },
  {
    id:'chem11-qt54',topicId:'chem11-t4',name:'Khái niệm, công thức và danh pháp arene',slug:'khai-niem-cong-thuc-danh-phap-arene',
    description:'Nhận diện arene, viết/gọi tên benzene, toluene, xylene, styrene, naphthalene và xử lí vị trí o–m–p.',exampleQuestionId:'chem11-hc-q109',
    theory:['Arene là hydrocarbon chứa ít nhất một vòng benzene; CnH2n−6 chỉ áp dụng cho dãy đồng đẳng benzene phù hợp.','Tên thường cần nhớ: C6H6 benzene, C6H5CH3 toluene, C6H4(CH3)2 xylene, C6H5CH=CH2 styrene, C10H8 naphthalene.','Với hai nhóm thế: o = 1,2; m = 1,3; p = 1,4.'],
    recognitionSigns:['Có vòng benzene hoặc CTPT cần phân loại.','Có tên/công thức arene thường gặp.','Có hai nhóm thế và kí hiệu o–m–p.'],
    solvingSteps:['Kiểm tra cấu trúc có vòng benzene.','Đối chiếu công thức–tên và phạm vi công thức chung.','Đánh số vị trí hai nhóm thế, đổi sang o–m–p và loại công thức trùng.'],
    commonMistakes:['Dùng mùi để định nghĩa arene.','Áp CnH2n−6 cho mọi arene.','Nhầm o–m–p hoặc coi xylene chỉ có một đồng phân.'],
    difficulty:'medium',examFrequency:'high',
    subTypes:[
      {id:'chem11-hc-st-arene-concept-formula',name:'Khái niệm và công thức',example:'C7H8 thuộc dãy alkylbenzene.',recognitionSigns:['Có vòng benzene, CTPT hoặc công thức chung.'],targetQuestionCount:4},
      {id:'chem11-hc-st-arene-common-names',name:'Công thức và tên thường gặp',example:'C6H5CH=CH2 là styrene.',recognitionSigns:['Có benzene, toluene, styrene, naphthalene.'],targetQuestionCount:4},
      {id:'chem11-hc-st-arene-omp-isomer',name:'Vị trí o–m–p và đồng phân',example:'1,4-dimethylbenzene là p-xylene.',recognitionSigns:['Có vòng hai nhóm thế, vị trí 1,2/1,3/1,4.'],targetQuestionCount:4}
    ],
    practiceCoverage:{targetQuestionCount:12,minimumQuestionsPerSubType:4,requiredPracticeRoles:['guided','near_transfer','misconception_check','far_transfer'],requiredRepresentations:['text','diagram','equation'],masteryHoldoutCount:3}
  },
  {
    id:'chem11-qt55',topicId:'chem11-t4',name:'Cấu tạo benzene, tính chất vật lí và trạng thái tự nhiên',slug:'cau-tao-vat-li-tu-nhien-arene',
    description:'Giải thích lục giác phẳng, liên kết C–C tương đương; đọc dữ liệu vật lí, nguồn tự nhiên và đánh giá nguy cơ phơi nhiễm.',exampleQuestionId:'chem11-hc-q121',
    theory:['Benzene là lục giác phẳng, góc gần 120°, sáu liên kết C–C tương đương do hệ pi liên hợp.','Phần lớn arene kém phân cực, ít tan trong nước, tan trong dung môi hữu cơ; benzene/toluene/xylene/styrene là chất lỏng, naphthalene là chất rắn ở điều kiện thường.','BTX có trong dầu mỏ; naphthalene và arene đa vòng có trong dầu mỏ, nhựa than đá; nhiều arene có hại khi phơi nhiễm.'],
    recognitionSigns:['Có mô hình hoặc độ dài liên kết benzene.','Có bảng nhiệt độ sôi, nóng chảy, tỉ khối, độ tan.','Có dầu mỏ, nhựa than đá, dung môi hoặc tình huống an toàn.'],
    solvingSteps:['Đọc cấu trúc ở cấp độ hình học và electron.','Tách dữ liệu trạng thái–độ tan–tỉ khối, không suy diễn tuyệt đối.','Liên hệ nguồn/ứng dụng với đường phơi nhiễm và biện pháp kiểm soát.'],
    commonMistakes:['Coi benzene là cyclohexatriene có liên kết xen kẽ khác độ dài.','Cho mọi arene là chất lỏng hoặc tan tốt trong nước.','Cho chất hữu cơ mặc nhiên an toàn.'],
    difficulty:'medium',examFrequency:'high',
    subTypes:[
      {id:'chem11-hc-st-benzene-structure',name:'Cấu tạo và hình dạng benzene',example:'Sáu liên kết C–C tương đương.',recognitionSigns:['Có lục giác, 120°, độ dài liên kết.'],targetQuestionCount:4},
      {id:'chem11-hc-st-arene-physical-data',name:'Dữ liệu tính chất vật lí',example:'Benzene không tan và nổi trên nước.',recognitionSigns:['Có bảng nhiệt độ, tỉ khối, độ tan.'],targetQuestionCount:4},
      {id:'chem11-hc-st-arene-natural-safety',name:'Trạng thái tự nhiên và an toàn',example:'BTX trong dầu mỏ; hạn chế hơi benzene.',recognitionSigns:['Có dầu mỏ, nhựa than đá, phơi nhiễm.'],targetQuestionCount:4}
    ],
    practiceCoverage:{targetQuestionCount:12,minimumQuestionsPerSubType:4,requiredPracticeRoles:['guided','near_transfer','misconception_check','far_transfer'],requiredRepresentations:['diagram','table','text'],masteryHoldoutCount:3}
  },
  {
    id:'chem11-qt56',topicId:'chem11-t4',name:'Phản ứng thế của benzene và toluene',slug:'phan-ung-the-benzene-toluene',
    description:'Halogen hóa, nitro hóa benzene/toluene, điều kiện phản ứng và quy tắc định hướng ortho–para của nhóm methyl.',exampleQuestionId:'chem11-hc-q133',
    theory:['Benzene thế Br/Cl khi có xúc tác halide sắt phù hợp; nitro hóa bằng HNO3 đặc/H2SO4 đặc, kiểm soát nhiệt độ.','Phản ứng thế giữ vòng benzene và thay H trên vòng bằng nhóm mới.','Trong phạm vi chương trình, CH3 hoạt hóa và định hướng thế tiếp theo ưu tiên ortho, para.'],
    recognitionSigns:['Có Br2/Cl2 và xúc tác FeX3.','Có HNO3 đặc/H2SO4 đặc.','Có toluene và yêu cầu vị trí sản phẩm thế.'],
    solvingSteps:['Xác định tác nhân, xúc tác và vị trí phản ứng.','Thay một H vòng bằng Br/Cl/NO2, cân bằng sản phẩm phụ.','Với toluene, ưu tiên o/p và kiểm tra điều kiện để không nhầm thế mạch nhánh.'],
    commonMistakes:['Gọi halogen hóa vòng là phản ứng cộng.','Bỏ H2SO4 trong nitro hóa.','Cho CH3 định hướng meta hoặc không đọc điều kiện.'],
    difficulty:'hard',examFrequency:'high',
    subTypes:[
      {id:'chem11-hc-st-benzene-halogenation',name:'Halogen hóa benzene',example:'C6H6 + Br2 → C6H5Br + HBr.',recognitionSigns:['Có halogen và xúc tác FeX3.'],targetQuestionCount:4},
      {id:'chem11-hc-st-arene-nitration',name:'Nitro hóa benzene và toluene',example:'Benzene tạo nitrobenzene.',recognitionSigns:['Có HNO3 đặc/H2SO4 đặc.'],targetQuestionCount:4},
      {id:'chem11-hc-st-toluene-orientation',name:'Quy tắc thế của toluene',example:'Ưu tiên o-, p-nitrotoluene.',recognitionSigns:['Có CH3 trên vòng và vị trí thế tiếp theo.'],targetQuestionCount:4}
    ],
    practiceCoverage:{targetQuestionCount:12,minimumQuestionsPerSubType:4,requiredPracticeRoles:['guided','near_transfer','misconception_check','far_transfer'],requiredRepresentations:['equation','experiment','diagram'],masteryHoldoutCount:3}
  },
  {
    id:'chem11-qt57',topicId:'chem11-t4',name:'Phản ứng cộng và oxi hóa arene',slug:'phan-ung-cong-oxi-hoa-arene',
    description:'Cộng H2/Cl2 vào benzene, cháy hoàn toàn và oxi hóa mạch nhánh alkyl bằng KMnO4.',exampleQuestionId:'chem11-hc-q145',
    theory:['Benzene cộng 3H2 tạo cyclohexane hoặc cộng 3Cl2 tạo C6H6Cl6 trong điều kiện phù hợp/mạnh.','Cháy CnH2n−6 cho nCO2 và (n−3)H2O trên một mol chất.','KMnO4 đun nóng oxi hóa nhóm alkyl gắn vòng như CH3 của toluene; benzene không cho hiện tượng tương tự trong điều kiện này.'],
    recognitionSigns:['Có H2/Cl2 và điều kiện cộng vào vòng.','Có O2, CO2, H2O hoặc bài toán cháy.','Có KMnO4, đun nóng và benzene/toluene.'],
    solvingSteps:['Phân biệt cộng với thế dựa vào điều kiện và sản phẩm.','Bảo toàn C, H, O để xử lí cháy.','Với KMnO4, tìm mạch nhánh benzylic và dự đoán hiện tượng/sản phẩm.'],
    commonMistakes:['Cho benzene cộng dễ như alkene.','Dùng tỉ lệ cháy của alkane.','Cho benzene và toluene đều làm mất màu KMnO4 như nhau.'],
    difficulty:'hard',examFrequency:'high',
    subTypes:[
      {id:'chem11-hc-st-benzene-addition',name:'Cộng hydrogen và chlorine',example:'C6H6 + 3H2 → C6H12.',recognitionSigns:['Có H2/Cl2, ánh sáng hoặc xúc tác/áp suất.'],targetQuestionCount:4},
      {id:'chem11-hc-st-arene-combustion',name:'Cháy và tỉ lượng',example:'2C6H6 + 15O2 → 12CO2 + 6H2O.',recognitionSigns:['Có O2, CO2, H2O, số mol.'],targetQuestionCount:4},
      {id:'chem11-hc-st-alkylbenzene-oxidation',name:'Oxi hóa mạch nhánh',example:'Toluene + KMnO4, đun nóng.',recognitionSigns:['Có alkylbenzene và KMnO4.'],targetQuestionCount:4}
    ],
    practiceCoverage:{targetQuestionCount:12,minimumQuestionsPerSubType:4,requiredPracticeRoles:['guided','near_transfer','misconception_check','far_transfer'],requiredRepresentations:['equation','table','experiment'],masteryHoldoutCount:3}
  },
  {
    id:'chem11-qt58',topicId:'chem11-t4',name:'Thí nghiệm, điều chế, ứng dụng và an toàn arene',slug:'thi-nghiem-dieu-che-ung-dung-an-toan-arene',
    description:'Phân tích thí nghiệm arene, reforming/nguồn công nghiệp và lựa chọn cách sử dụng bảo vệ sức khỏe–môi trường.',exampleQuestionId:'chem11-hc-q157',
    theory:['Thí nghiệm nitro hóa, cộng chlorine, oxi hóa KMnO4 phải kiểm soát nhiệt, hơi độc/dễ cháy và làm trong hệ phù hợp/tủ hút.','Công nghiệp thu arene từ dầu mỏ, nhựa than đá và reforming hydrocarbon; reforming có thể giữ số carbon, tách H2.','Arene là nguyên liệu/dung môi quan trọng nhưng nhiều chất độc; ưu tiên thay thế, hệ kín, thông gió, PPE và quản lí chất thải.'],
    recognitionSigns:['Có quy trình, hiện tượng hoặc lỗi an toàn thí nghiệm.','Có reforming và phương trình khuyết sản phẩm.','Có bối cảnh dung môi, nguyên liệu, phơi nhiễm hoặc chất thải.'],
    solvingSteps:['Xác định mục tiêu thí nghiệm và nguy cơ trước khi đọc hiện tượng.','Bảo toàn C/H trong sơ đồ reforming và phân biệt với cracking.','Áp dụng thứ bậc kiểm soát nguy cơ: thay thế–kĩ thuật–quy trình–PPE–xử lí chất thải.'],
    commonMistakes:['Ngửi trực tiếp hoặc dùng lửa trần.','Cho reforming luôn bẻ gãy mạch.','Chỉ nêu ứng dụng mà bỏ độc tính và kiểm soát phơi nhiễm.'],
    difficulty:'hard',examFrequency:'medium',
    subTypes:[
      {id:'chem11-hc-st-arene-experiment',name:'Thí nghiệm và hiện tượng',example:'Nitro hóa; KMnO4 với benzene/toluene.',recognitionSigns:['Có dụng cụ, thuốc thử, nhiệt độ, hiện tượng.'],targetQuestionCount:4},
      {id:'chem11-hc-st-arene-industrial',name:'Nguồn và điều chế công nghiệp',example:'C6H12 → C6H6 + 3H2.',recognitionSigns:['Có dầu mỏ, reforming, bảo toàn nguyên tử.'],targetQuestionCount:4},
      {id:'chem11-hc-st-arene-application-safety',name:'Ứng dụng, sức khỏe và môi trường',example:'Thay benzene bằng dung môi ít độc hơn.',recognitionSigns:['Có nơi làm việc, dung môi, hơi độc, chất thải.'],targetQuestionCount:4}
    ],
    practiceCoverage:{targetQuestionCount:12,minimumQuestionsPerSubType:4,requiredPracticeRoles:['guided','near_transfer','misconception_check','far_transfer'],requiredRepresentations:['experiment','equation','table'],masteryHoldoutCount:3}
  }
];
