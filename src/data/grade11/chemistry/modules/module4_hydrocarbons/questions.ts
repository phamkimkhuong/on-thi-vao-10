import type { Question } from '@/types';

export const g11ChemistryHydrocarbonsQuestions: Question[] = [
  {id:'chem11-hc-q001',subjectId:'chemistry',topicId:'chem11-t4',questionTypeId:'chem11-qt45',content:'Alkane là',responseType:'single_choice',options:['A. hydrocarbon no mạch hở, chỉ chứa liên kết đơn.','B. mọi hydrocarbon no kể cả mạch vòng.','C. hydrocarbon có liên kết đôi.','D. dẫn xuất chứa oxygen.'],correctAnswer:'A',difficulty:'easy',sourceType:'manual',validatorType:'choice',outcomeIds:['chem11-hc-alkane-concept-formula'],subTypeId:'chem11-hc-st-alkane-concept',practiceRole:'guided',representationType:'text',estimatedSeconds:40},
  {id:'chem11-hc-q002',subjectId:'chemistry',topicId:'chem11-t4',questionTypeId:'chem11-qt45',content:'Công thức chung của alkane mạch hở là',responseType:'single_choice',options:['A. CnH2n.','B. CnH2n+2 (n≥1).','C. CnH2n−2.','D. CnHn.'],correctAnswer:'B',difficulty:'easy',sourceType:'manual',validatorType:'choice',outcomeIds:['chem11-hc-alkane-concept-formula'],subTypeId:'chem11-hc-st-alkane-concept',practiceRole:'near_transfer',representationType:'equation',estimatedSeconds:35},
  {id:'chem11-hc-q003',subjectId:'chemistry',topicId:'chem11-t4',questionTypeId:'chem11-qt45',content:'Alkane có 6 carbon có công thức phân tử là',responseType:'single_choice',options:['A. C6H6.','B. C6H12.','C. C6H14.','D. C6H16.'],correctAnswer:'C',difficulty:'easy',sourceType:'manual',validatorType:'choice',outcomeIds:['chem11-hc-alkane-concept-formula'],subTypeId:'chem11-hc-st-alkane-concept',practiceRole:'guided',representationType:'equation',estimatedSeconds:45},
  {id:'chem11-hc-q004',subjectId:'chemistry',topicId:'chem11-t4',questionTypeId:'chem11-qt45',content:'Chất nào không thể là alkane mạch hở?',responseType:'single_choice',options:['A. CH4.','B. C2H6.','C. C4H10.','D. C3H6.'],correctAnswer:'D',difficulty:'easy',sourceType:'manual',validatorType:'choice',outcomeIds:['chem11-hc-alkane-concept-formula'],subTypeId:'chem11-hc-st-alkane-concept',practiceRole:'mastery_holdout',representationType:'table',misconceptionId:'chem11-mis-alkane-formula-all-n',isMasteryHoldout:true,estimatedSeconds:45},
  {id:'chem11-hc-q005',subjectId:'chemistry',topicId:'chem11-t4',questionTypeId:'chem11-qt45',content:'Nguồn tự nhiên quan trọng của alkane là',responseType:'single_choice',options:['A. khí thiên nhiên, khí đồng hành và dầu mỏ.','B. đá vôi tinh khiết.','C. nước biển tinh khiết.','D. quặng sắt.'],correctAnswer:'A',difficulty:'medium',sourceType:'manual',validatorType:'choice',outcomeIds:['chem11-hc-alkane-natural-sources'],subTypeId:'chem11-hc-st-alkane-source',practiceRole:'guided',representationType:'text',estimatedSeconds:45},
  {id:'chem11-hc-q006',subjectId:'chemistry',topicId:'chem11-t4',questionTypeId:'chem11-qt45',content:'Thành phần cháy được chính của biogas thường là',responseType:'single_choice',options:['A. CO2.','B. CH4.','C. N2.','D. O2.'],correctAnswer:'B',difficulty:'medium',sourceType:'manual',validatorType:'choice',outcomeIds:['chem11-hc-alkane-natural-sources'],subTypeId:'chem11-hc-st-alkane-source',practiceRole:'near_transfer',representationType:'table',estimatedSeconds:40},
  {id:'chem11-hc-q007',subjectId:'chemistry',topicId:'chem11-t4',questionTypeId:'chem11-qt45',content:'Nhận xét đúng về biogas là',responseType:'single_choice',options:['A. Luôn là methane 100%.','B. Không chứa methane.','C. Giàu methane nhưng còn CO2, H2S và khí khác tùy nguồn.','D. Là oxygen tinh khiết.'],correctAnswer:'C',difficulty:'medium',sourceType:'manual',validatorType:'choice',outcomeIds:['chem11-hc-alkane-natural-sources'],subTypeId:'chem11-hc-st-alkane-source',practiceRole:'misconception_check',representationType:'text',misconceptionId:'chem11-mis-biogas-pure-methane',estimatedSeconds:50},
  {id:'chem11-hc-q008',subjectId:'chemistry',topicId:'chem11-t4',questionTypeId:'chem11-qt45',content:'Ghép nguồn–đặc điểm nào đúng nhất?',responseType:'single_choice',options:['A. Dầu mỏ – một alkane tinh khiết.','B. Khí thiên nhiên – chủ yếu CO2.','C. Biogas – không cháy.','D. Khí thiên nhiên thường giàu methane; dầu mỏ là hỗn hợp hydrocarbon.'],correctAnswer:'D',difficulty:'medium',sourceType:'manual',validatorType:'choice',outcomeIds:['chem11-hc-alkane-natural-sources'],subTypeId:'chem11-hc-st-alkane-source',practiceRole:'mastery_holdout',representationType:'table',isMasteryHoldout:true,estimatedSeconds:60},
  {id:'chem11-hc-q009',subjectId:'chemistry',topicId:'chem11-t4',questionTypeId:'chem11-qt45',content:'Số đồng phân mạch carbon của C4H10 là',responseType:'single_choice',options:['A. 2.','B. 3.','C. 1.','D. 4.'],correctAnswer:'A',difficulty:'medium',sourceType:'manual',validatorType:'choice',outcomeIds:['chem11-hc-alkane-isomer-formula'],subTypeId:'chem11-hc-st-alkane-isomer',practiceRole:'guided',representationType:'equation',estimatedSeconds:55},
  {id:'chem11-hc-q010',subjectId:'chemistry',topicId:'chem11-t4',questionTypeId:'chem11-qt45',content:'Số khung alkane khác nhau của C5H12 là',responseType:'single_choice',options:['A. 2.','B. 3.','C. 4.','D. 5.'],correctAnswer:'B',difficulty:'hard',sourceType:'manual',validatorType:'choice',outcomeIds:['chem11-hc-alkane-isomer-formula'],subTypeId:'chem11-hc-st-alkane-isomer',practiceRole:'far_transfer',representationType:'table',estimatedSeconds:75},
  {id:'chem11-hc-q011',subjectId:'chemistry',topicId:'chem11-t4',questionTypeId:'chem11-qt45',content:'Propane C3H8 có bao nhiêu đồng phân mạch carbon?',responseType:'single_choice',options:['A. 2.','B. 3.','C. 1.','D. 0.'],correctAnswer:'C',difficulty:'hard',sourceType:'manual',validatorType:'choice',outcomeIds:['chem11-hc-alkane-isomer-formula'],subTypeId:'chem11-hc-st-alkane-isomer',practiceRole:'misconception_check',representationType:'equation',misconceptionId:'chem11-mis-alkane-c3-branched',estimatedSeconds:55},
  {id:'chem11-hc-q012',subjectId:'chemistry',topicId:'chem11-t4',questionTypeId:'chem11-qt45',content:'Bộ ba nào gồm đúng ba đồng phân của C5H12?',responseType:'single_choice',options:['A. Pentane, butane, propane.','B. Pentane, methylbutane, methylpropane.','C. Pentane và hai cách viết ngược của pentane.','D. Pentane, 2-methylbutane và 2,2-dimethylpropane.'],correctAnswer:'D',difficulty:'hard',sourceType:'manual',validatorType:'choice',outcomeIds:['chem11-hc-alkane-isomer-formula'],subTypeId:'chem11-hc-st-alkane-isomer',practiceRole:'mastery_holdout',representationType:'table',misconceptionId:'chem11-mis-isomer-double-count',isMasteryHoldout:true,estimatedSeconds:80},

  {id:'chem11-hc-q013',subjectId:'chemistry',topicId:'chem11-t4',questionTypeId:'chem11-qt46',content:'Tên của CH3CH2CH2CH2CH3 là',responseType:'single_choice',options:['A. pentane.','B. butane.','C. hexane.','D. propane.'],correctAnswer:'A',difficulty:'easy',sourceType:'manual',validatorType:'choice',outcomeIds:['chem11-hc-alkane-naming-straight'],subTypeId:'chem11-hc-st-name-straight',practiceRole:'guided',representationType:'equation',estimatedSeconds:40},
  {id:'chem11-hc-q014',subjectId:'chemistry',topicId:'chem11-t4',questionTypeId:'chem11-qt46',content:'Alkane mạch thẳng có 8 carbon tên là',responseType:'single_choice',options:['A. heptane.','B. octane.','C. nonane.','D. decane.'],correctAnswer:'B',difficulty:'easy',sourceType:'manual',validatorType:'choice',outcomeIds:['chem11-hc-alkane-naming-straight'],subTypeId:'chem11-hc-st-name-straight',practiceRole:'near_transfer',representationType:'text',estimatedSeconds:35},
  {id:'chem11-hc-q015',subjectId:'chemistry',topicId:'chem11-t4',questionTypeId:'chem11-qt46',content:'Công thức của ethane là',responseType:'single_choice',options:['A. CH4.','B. C2H4.','C. C2H6.','D. C3H8.'],correctAnswer:'C',difficulty:'easy',sourceType:'manual',validatorType:'choice',outcomeIds:['chem11-hc-alkane-naming-straight'],subTypeId:'chem11-hc-st-name-straight',practiceRole:'misconception_check',representationType:'equation',misconceptionId:'chem11-mis-alkane-prefix-carbon-count',estimatedSeconds:40},
  {id:'chem11-hc-q016',subjectId:'chemistry',topicId:'chem11-t4',questionTypeId:'chem11-qt46',content:'Tên alkane mạch thẳng C10H22 là',responseType:'single_choice',options:['A. octane.','B. nonane.','C. undecane.','D. decane.'],correctAnswer:'D',difficulty:'easy',sourceType:'manual',validatorType:'choice',outcomeIds:['chem11-hc-alkane-naming-straight'],subTypeId:'chem11-hc-st-name-straight',practiceRole:'mastery_holdout',representationType:'text',isMasteryHoldout:true,estimatedSeconds:45},
  {id:'chem11-hc-q017',subjectId:'chemistry',topicId:'chem11-t4',questionTypeId:'chem11-qt46',content:'Tên thay thế của (CH3)3CH là',responseType:'single_choice',options:['A. 2-methylpropane.','B. methylbutane.','C. 2-methylbutane.','D. butane.'],correctAnswer:'A',difficulty:'medium',sourceType:'manual',validatorType:'choice',outcomeIds:['chem11-hc-alkane-naming-branched'],subTypeId:'chem11-hc-st-name-branched',practiceRole:'guided',representationType:'diagram',estimatedSeconds:55},
  {id:'chem11-hc-q018',subjectId:'chemistry',topicId:'chem11-t4',questionTypeId:'chem11-qt46',content:'Tên của CH3CH(CH3)CH2CH3 là',responseType:'single_choice',options:['A. 3-methylbutane.','B. 2-methylbutane.','C. pentane.','D. 2-ethylpropane.'],correctAnswer:'B',difficulty:'medium',sourceType:'manual',validatorType:'choice',outcomeIds:['chem11-hc-alkane-naming-branched'],subTypeId:'chem11-hc-st-name-branched',practiceRole:'near_transfer',representationType:'diagram',estimatedSeconds:60},
  {id:'chem11-hc-q019',subjectId:'chemistry',topicId:'chem11-t4',questionTypeId:'chem11-qt46',content:'Tên “3-methylbutane” sai chủ yếu vì',responseType:'single_choice',options:['A. không có nhánh methyl.','B. mạch chính có 3 C.','C. phải đánh số từ đầu gần nhánh, được 2-methylbutane.','D. phải gọi pentane.'],correctAnswer:'C',difficulty:'medium',sourceType:'manual',validatorType:'choice',outcomeIds:['chem11-hc-alkane-naming-branched'],subTypeId:'chem11-hc-st-name-branched',practiceRole:'misconception_check',representationType:'text',misconceptionId:'chem11-mis-number-from-left',estimatedSeconds:55},
  {id:'chem11-hc-q020',subjectId:'chemistry',topicId:'chem11-t4',questionTypeId:'chem11-qt46',content:'Tên đúng của C(CH3)4 là',responseType:'single_choice',options:['A. tetramethylmethane.','B. 2-methylbutane.','C. pentane.','D. 2,2-dimethylpropane.'],correctAnswer:'D',difficulty:'medium',sourceType:'manual',validatorType:'choice',outcomeIds:['chem11-hc-alkane-naming-branched'],subTypeId:'chem11-hc-st-name-branched',practiceRole:'mastery_holdout',representationType:'diagram',isMasteryHoldout:true,estimatedSeconds:70},
  {id:'chem11-hc-q021',subjectId:'chemistry',topicId:'chem11-t4',questionTypeId:'chem11-qt46',content:'CTCT phù hợp với 2-methylpropane là',responseType:'single_choice',options:['A. CH3CH(CH3)CH3.','B. CH3CH2CH2CH3.','C. CH3CH2CH3.','D. CH3CH(CH3)CH2CH3.'],correctAnswer:'A',difficulty:'medium',sourceType:'manual',validatorType:'choice',outcomeIds:['chem11-hc-alkane-naming-branched'],subTypeId:'chem11-hc-st-name-reverse-check',practiceRole:'guided',representationType:'equation',estimatedSeconds:55},
  {id:'chem11-hc-q022',subjectId:'chemistry',topicId:'chem11-t4',questionTypeId:'chem11-qt46',content:'CTCT phù hợp với 2-methylbutane là',responseType:'single_choice',options:['A. (CH3)3CH.','B. CH3CH(CH3)CH2CH3.','C. CH3CH2CH2CH2CH3.','D. C(CH3)4.'],correctAnswer:'B',difficulty:'hard',sourceType:'manual',validatorType:'choice',outcomeIds:['chem11-hc-alkane-naming-branched'],subTypeId:'chem11-hc-st-name-reverse-check',practiceRole:'near_transfer',representationType:'equation',estimatedSeconds:65},
  {id:'chem11-hc-q023',subjectId:'chemistry',topicId:'chem11-t4',questionTypeId:'chem11-qt46',content:'Tên “1-methylbutane” cần sửa thành',responseType:'single_choice',options:['A. 2-methylbutane.','B. butane.','C. pentane vì nhánh ở C1 thuộc chuỗi liên tục 5 C.','D. 1-ethylpropane.'],correctAnswer:'C',difficulty:'hard',sourceType:'manual',validatorType:'choice',outcomeIds:['chem11-hc-alkane-naming-branched'],subTypeId:'chem11-hc-st-name-reverse-check',practiceRole:'far_transfer',representationType:'diagram',misconceptionId:'chem11-mis-branch-in-main-chain',estimatedSeconds:75},
  {id:'chem11-hc-q024',subjectId:'chemistry',topicId:'chem11-t4',questionTypeId:'chem11-qt46',content:'Quy trình gọi tên alkane mạch nhánh đúng là',responseType:'single_choice',options:['A. Chọn hàng ngang và đánh số trái sang phải.','B. Chọn mạch nhiều nhánh nhất dù ngắn.','C. Gọi nhánh trước khi chọn mạch.','D. Chọn mạch C liên tục dài nhất, đánh số gần nhánh, gọi vị trí–nhánh–mạch chính.'],correctAnswer:'D',difficulty:'hard',sourceType:'manual',validatorType:'choice',outcomeIds:['chem11-hc-alkane-naming-branched'],subTypeId:'chem11-hc-st-name-reverse-check',practiceRole:'mastery_holdout',representationType:'text',misconceptionId:'chem11-mis-longest-chain-horizontal',isMasteryHoldout:true,estimatedSeconds:70},

  {id:'chem11-hc-q025',subjectId:'chemistry',topicId:'chem11-t4',questionTypeId:'chem11-qt47',content:'Trong alkane chỉ có',responseType:'single_choice',options:['A. liên kết sigma C–C và C–H.','B. liên kết pi.','C. liên kết ion.','D. liên kết hydrogen nội phân tử.'],correctAnswer:'A',difficulty:'easy',sourceType:'manual',validatorType:'choice',outcomeIds:['chem11-hc-alkane-structure-shape'],subTypeId:'chem11-hc-st-structure-shape',practiceRole:'guided',representationType:'text',estimatedSeconds:40},
  {id:'chem11-hc-q026',subjectId:'chemistry',topicId:'chem11-t4',questionTypeId:'chem11-qt47',content:'Hình dạng phân tử methane gần đúng là',responseType:'single_choice',options:['A. vuông phẳng.','B. tứ diện.','C. thẳng.','D. tam giác phẳng.'],correctAnswer:'B',difficulty:'easy',sourceType:'manual',validatorType:'choice',outcomeIds:['chem11-hc-alkane-structure-shape'],subTypeId:'chem11-hc-st-structure-shape',practiceRole:'near_transfer',representationType:'diagram',estimatedSeconds:40},
  {id:'chem11-hc-q027',subjectId:'chemistry',topicId:'chem11-t4',questionTypeId:'chem11-qt47',content:'Phát biểu nào sai về alkane?',responseType:'single_choice',options:['A. Liên kết C–C là sigma.','B. Liên kết C–H kém phân cực.','C. Alkane có liên kết pi C=C.','D. Alkane tương đối kém hoạt động ở điều kiện thường.'],correctAnswer:'C',difficulty:'easy',sourceType:'manual',validatorType:'choice',outcomeIds:['chem11-hc-alkane-structure-shape'],subTypeId:'chem11-hc-st-structure-shape',practiceRole:'misconception_check',representationType:'text',misconceptionId:'chem11-mis-alkane-pi-bond',estimatedSeconds:45},
  {id:'chem11-hc-q028',subjectId:'chemistry',topicId:'chem11-t4',questionTypeId:'chem11-qt47',content:'Mô tả đúng nhất là',responseType:'single_choice',options:['A. CH4 phẳng.','B. Ethane có C=C.','C. Alkane phân cực mạnh.','D. CH4 tứ diện; quanh mỗi C trong ethane có hình học gần tứ diện.'],correctAnswer:'D',difficulty:'easy',sourceType:'manual',validatorType:'choice',outcomeIds:['chem11-hc-alkane-structure-shape'],subTypeId:'chem11-hc-st-structure-shape',practiceRole:'mastery_holdout',representationType:'diagram',misconceptionId:'chem11-mis-methane-planar',isMasteryHoldout:true,estimatedSeconds:55},
  {id:'chem11-hc-q029',subjectId:'chemistry',topicId:'chem11-t4',questionTypeId:'chem11-qt47',content:'Khi trộn hexane với nước, hiện tượng thường là',responseType:'single_choice',options:['A. tách hai lớp, hexane thường ở lớp trên.','B. tạo dung dịch đồng nhất.','C. hexane phản ứng tạo muối.','D. nước bị phân hủy.'],correctAnswer:'A',difficulty:'medium',sourceType:'manual',validatorType:'choice',outcomeIds:['chem11-hc-alkane-physical-properties'],subTypeId:'chem11-hc-st-physical-basic',practiceRole:'guided',representationType:'experiment',estimatedSeconds:50},
  {id:'chem11-hc-q030',subjectId:'chemistry',topicId:'chem11-t4',questionTypeId:'chem11-qt47',content:'Ở điều kiện thường, nhóm alkane C1–C4 chủ yếu ở trạng thái',responseType:'single_choice',options:['A. rắn.','B. khí.','C. lỏng.','D. plasma.'],correctAnswer:'B',difficulty:'medium',sourceType:'manual',validatorType:'choice',outcomeIds:['chem11-hc-alkane-physical-properties'],subTypeId:'chem11-hc-st-physical-basic',practiceRole:'near_transfer',representationType:'table',estimatedSeconds:45},
  {id:'chem11-hc-q031',subjectId:'chemistry',topicId:'chem11-t4',questionTypeId:'chem11-qt47',content:'Alkane hầu như không tan trong nước chủ yếu vì',responseType:'single_choice',options:['A. alkane là ion.','B. alkane nặng hơn nước vô hạn.','C. alkane kém phân cực, còn nước phân cực mạnh.','D. alkane luôn ở thể khí.'],correctAnswer:'C',difficulty:'medium',sourceType:'manual',validatorType:'choice',outcomeIds:['chem11-hc-alkane-physical-properties'],subTypeId:'chem11-hc-st-physical-basic',practiceRole:'misconception_check',representationType:'text',misconceptionId:'chem11-mis-alkane-water-soluble',estimatedSeconds:55},
  {id:'chem11-hc-q032',subjectId:'chemistry',topicId:'chem11-t4',questionTypeId:'chem11-qt47',content:'Nhận xét phù hợp với nhiều alkane lỏng là',responseType:'single_choice',options:['A. tan vô hạn trong nước.','B. dẫn điện mạnh.','C. luôn chìm dưới nước.','D. nhẹ hơn nước và tan tốt hơn trong dung môi kém phân cực.'],correctAnswer:'D',difficulty:'medium',sourceType:'manual',validatorType:'choice',outcomeIds:['chem11-hc-alkane-physical-properties'],subTypeId:'chem11-hc-st-physical-basic',practiceRole:'mastery_holdout',representationType:'experiment',isMasteryHoldout:true,estimatedSeconds:55},
  {id:'chem11-hc-q033',subjectId:'chemistry',topicId:'chem11-t4',questionTypeId:'chem11-qt47',content:'Trong dãy alkane mạch thẳng, nhiệt độ sôi thường',responseType:'single_choice',options:['A. tăng khi số carbon tăng.','B. giảm khi số carbon tăng.','C. không đổi.','D. bằng 0°C.'],correctAnswer:'A',difficulty:'medium',sourceType:'manual',validatorType:'choice',outcomeIds:['chem11-hc-alkane-physical-properties'],subTypeId:'chem11-hc-st-boiling-data',practiceRole:'guided',representationType:'table',estimatedSeconds:45},
  {id:'chem11-hc-q034',subjectId:'chemistry',topicId:'chem11-t4',questionTypeId:'chem11-qt47',content:'Với cùng CTPT C4H10, chất thường có nhiệt độ sôi cao hơn là',responseType:'single_choice',options:['A. 2-methylpropane.','B. n-butane vì mạch thẳng có diện tích tiếp xúc lớn hơn.','C. hai chất luôn bằng nhau.','D. không chất nào sôi.'],correctAnswer:'B',difficulty:'hard',sourceType:'manual',validatorType:'choice',outcomeIds:['chem11-hc-alkane-physical-properties'],subTypeId:'chem11-hc-st-boiling-data',practiceRole:'near_transfer',representationType:'table',estimatedSeconds:65},
  {id:'chem11-hc-q035',subjectId:'chemistry',topicId:'chem11-t4',questionTypeId:'chem11-qt47',content:'Phân nhánh thường làm giảm nhiệt độ sôi của các đồng phân alkane vì',responseType:'single_choice',options:['A. tạo ion.','B. tăng liên kết hydrogen.','C. làm phân tử gọn hơn, giảm diện tích tiếp xúc và lực phân tán hiệu dụng.','D. giảm số carbon.'],correctAnswer:'C',difficulty:'hard',sourceType:'manual',validatorType:'choice',outcomeIds:['chem11-hc-alkane-physical-properties'],subTypeId:'chem11-hc-st-boiling-data',practiceRole:'far_transfer',representationType:'text',misconceptionId:'chem11-mis-alkane-boiling-branch',estimatedSeconds:70},
  {id:'chem11-hc-q036',subjectId:'chemistry',topicId:'chem11-t4',questionTypeId:'chem11-qt47',content:'Bảng cho nhiệt độ sôi tăng từ methane đến hexane và n-pentane sôi cao hơn neopentane. Kết luận đúng là',responseType:'single_choice',options:['A. Chỉ phân tử khối quyết định tuyệt đối.','B. Phân nhánh luôn tăng nhiệt độ sôi.','C. Số C không ảnh hưởng.','D. Kích thước làm tăng lực phân tán, còn phân nhánh có thể làm giảm diện tích tiếp xúc.'],correctAnswer:'D',difficulty:'hard',sourceType:'manual',validatorType:'choice',outcomeIds:['chem11-hc-alkane-physical-properties'],subTypeId:'chem11-hc-st-boiling-data',practiceRole:'mastery_holdout',representationType:'table',isMasteryHoldout:true,estimatedSeconds:75},

  {id:'chem11-hc-q037',subjectId:'chemistry',topicId:'chem11-t4',questionTypeId:'chem11-qt48',content:'Phương trình thế một H của methane bằng bromine dưới ánh sáng là',responseType:'single_choice',options:['A. CH4 + Br2 → CH3Br + HBr.','B. CH4 + Br2 → CH4Br2.','C. CH4 + Br2 → C + 4HBr.','D. CH4 + Br2 → CH3 + BrHBr.'],correctAnswer:'A',difficulty:'easy',sourceType:'manual',validatorType:'choice',outcomeIds:['chem11-hc-alkane-substitution'],subTypeId:'chem11-hc-st-substitution-experiment',practiceRole:'guided',representationType:'equation',estimatedSeconds:50},
  {id:'chem11-hc-q038',subjectId:'chemistry',topicId:'chem11-t4',questionTypeId:'chem11-qt48',content:'Điều kiện thúc đẩy bromine hóa alkane là',responseType:'single_choice',options:['A. bóng tối, lạnh sâu.','B. ánh sáng hoặc đun nóng.','C. chỉ nước.','D. áp suất chân không tuyệt đối.'],correctAnswer:'B',difficulty:'easy',sourceType:'manual',validatorType:'choice',outcomeIds:['chem11-hc-alkane-substitution'],subTypeId:'chem11-hc-st-substitution-experiment',practiceRole:'near_transfer',representationType:'experiment',estimatedSeconds:40},
  {id:'chem11-hc-q039',subjectId:'chemistry',topicId:'chem11-t4',questionTypeId:'chem11-qt48',content:'Bromine hóa alkane được gọi là phản ứng thế vì',responseType:'single_choice',options:['A. Br2 cộng vào C=C.','B. mạch carbon luôn gãy.','C. một H bị thay bởi Br.','D. chỉ tạo CO2.'],correctAnswer:'C',difficulty:'easy',sourceType:'manual',validatorType:'choice',outcomeIds:['chem11-hc-alkane-substitution'],subTypeId:'chem11-hc-st-substitution-experiment',practiceRole:'misconception_check',representationType:'text',misconceptionId:'chem11-mis-substitution-addition',estimatedSeconds:45},
  {id:'chem11-hc-q040',subjectId:'chemistry',topicId:'chem11-t4',questionTypeId:'chem11-qt48',content:'Thí nghiệm hexane với nước bromine cho kết quả phù hợp nhất là',responseType:'single_choice',options:['A. mất màu tức thì trong tối.','B. luôn không phản ứng dù chiếu sáng.','C. tạo kết tủa trắng.','D. ở thường/tối hầu như không đổi; khi chiếu sáng hoặc đun nóng màu bromine giảm do thế.'],correctAnswer:'D',difficulty:'easy',sourceType:'manual',validatorType:'choice',outcomeIds:['chem11-hc-alkane-substitution'],subTypeId:'chem11-hc-st-substitution-experiment',practiceRole:'mastery_holdout',representationType:'experiment',misconceptionId:'chem11-mis-alkane-bromine-dark',isMasteryHoldout:true,estimatedSeconds:60},
  {id:'chem11-hc-q041',subjectId:'chemistry',topicId:'chem11-t4',questionTypeId:'chem11-qt48',content:'Sơ đồ cracking cân bằng là',responseType:'single_choice',options:['A. C6H14 → C3H8 + C3H6.','B. C6H14 → 2C3H8.','C. C6H14 → C6H12 + H.','D. C6H14 → C2H6 + C4H10.'],correctAnswer:'A',difficulty:'medium',sourceType:'manual',validatorType:'choice',outcomeIds:['chem11-hc-alkane-cracking-reforming'],subTypeId:'chem11-hc-st-cracking-reforming',practiceRole:'guided',representationType:'equation',estimatedSeconds:55},
  {id:'chem11-hc-q042',subjectId:'chemistry',topicId:'chem11-t4',questionTypeId:'chem11-qt48',content:'Reforming alkane chủ yếu là',responseType:'single_choice',options:['A. đốt cháy hoàn toàn.','B. chuyển mạch thẳng thành mạch nhánh/vòng mà không đổi đáng kể số C.','C. hòa tan alkane vào nước.','D. cộng bromine.'],correctAnswer:'B',difficulty:'medium',sourceType:'manual',validatorType:'choice',outcomeIds:['chem11-hc-alkane-cracking-reforming'],subTypeId:'chem11-hc-st-cracking-reforming',practiceRole:'near_transfer',representationType:'text',estimatedSeconds:50},
  {id:'chem11-hc-q043',subjectId:'chemistry',topicId:'chem11-t4',questionTypeId:'chem11-qt48',content:'Nhận xét đúng về sản phẩm cracking alkane dài là',responseType:'single_choice',options:['A. chỉ alkane.','B. chỉ hydrogen.','C. thường là hỗn hợp alkane và alkene nhỏ hơn.','D. chỉ CO2 và H2O.'],correctAnswer:'C',difficulty:'medium',sourceType:'manual',validatorType:'choice',outcomeIds:['chem11-hc-alkane-cracking-reforming'],subTypeId:'chem11-hc-st-cracking-reforming',practiceRole:'misconception_check',representationType:'table',misconceptionId:'chem11-mis-cracking-only-alkane',estimatedSeconds:45},
  {id:'chem11-hc-q044',subjectId:'chemistry',topicId:'chem11-t4',questionTypeId:'chem11-qt48',content:'Phân biệt đúng là',responseType:'single_choice',options:['A. Cả hai đều là cháy.','B. Reforming luôn giảm số C.','C. Cracking chỉ đổi hình mạch.','D. Cracking bẻ mạch tạo phân tử nhỏ hơn; reforming chủ yếu sắp xếp lại khung.'],correctAnswer:'D',difficulty:'medium',sourceType:'manual',validatorType:'choice',outcomeIds:['chem11-hc-alkane-cracking-reforming'],subTypeId:'chem11-hc-st-cracking-reforming',practiceRole:'mastery_holdout',representationType:'table',misconceptionId:'chem11-mis-reforming-cracking',isMasteryHoldout:true,estimatedSeconds:60},
  {id:'chem11-hc-q045',subjectId:'chemistry',topicId:'chem11-t4',questionTypeId:'chem11-qt48',content:'Phương trình cháy hoàn toàn hexane cân bằng là',responseType:'single_choice',options:['A. 2C6H14 + 19O2 → 12CO2 + 14H2O.','B. C6H14 + 6O2 → 6CO2 + 7H2O.','C. C6H14 + 19O2 → 6CO2 + 7H2O.','D. 2C6H14 + 12O2 → 12CO + 14H2O.'],correctAnswer:'A',difficulty:'medium',sourceType:'manual',validatorType:'choice',outcomeIds:['chem11-hc-alkane-combustion'],subTypeId:'chem11-hc-st-combustion-environment',practiceRole:'guided',representationType:'equation',estimatedSeconds:70},
  {id:'chem11-hc-q046',subjectId:'chemistry',topicId:'chem11-t4',questionTypeId:'chem11-qt48',content:'Đốt cháy hoàn toàn một alkane, với cùng số mol chất thì',responseType:'single_choice',options:['A. n(H2O)<n(CO2).','B. n(H2O)=n(CO2)+n(alkane).','C. n(H2O)=n(CO2).','D. không tạo nước.'],correctAnswer:'B',difficulty:'hard',sourceType:'manual',validatorType:'choice',outcomeIds:['chem11-hc-alkane-combustion'],subTypeId:'chem11-hc-st-combustion-environment',practiceRole:'near_transfer',representationType:'equation',misconceptionId:'chem11-mis-alkane-water-co2-ratio',estimatedSeconds:70},
  {id:'chem11-hc-q047',subjectId:'chemistry',topicId:'chem11-t4',questionTypeId:'chem11-qt48',content:'Dấu hiệu cháy không hoàn toàn nhiên liệu alkane có thể là',responseType:'single_choice',options:['A. chỉ hơi nước tinh khiết.','B. không có sản phẩm.','C. xuất hiện CO và muội carbon do thiếu oxygen.','D. chỉ nitrogen.'],correctAnswer:'C',difficulty:'hard',sourceType:'manual',validatorType:'choice',outcomeIds:['chem11-hc-alkane-combustion','chem11-hc-alkane-environment-safety'],subTypeId:'chem11-hc-st-combustion-environment',practiceRole:'far_transfer',representationType:'experiment',misconceptionId:'chem11-mis-combustion-always-complete',estimatedSeconds:60},
  {id:'chem11-hc-q048',subjectId:'chemistry',topicId:'chem11-t4',questionTypeId:'chem11-qt48',content:'Gói biện pháp hợp lí nhất để giảm tác động khí thải giao thông là',responseType:'single_choice',options:['A. để máy nổ không tải lâu.','B. bỏ bộ xử lí khí thải.','C. đốt nhiên liệu trong phòng kín.','D. bảo dưỡng động cơ, dùng bộ xúc tác/nhiên liệu phù hợp, hạn chế nổ không tải và ưu tiên giao thông ít phát thải.'],correctAnswer:'D',difficulty:'hard',sourceType:'manual',validatorType:'choice',outcomeIds:['chem11-hc-alkane-applications-production','chem11-hc-alkane-environment-safety'],subTypeId:'chem11-hc-st-combustion-environment',practiceRole:'mastery_holdout',representationType:'table',misconceptionId:'chem11-mis-idling-reduces-emission',isMasteryHoldout:true,estimatedSeconds:70},
{
  id: "chem11-hc-q049",
  subjectId: "chemistry",
  topicId: "chem11-t4",
  questionTypeId: "chem11-qt49",
  content: "Alkene mạch hở có một liên kết đôi có công thức chung là",
  responseType: "single_choice",
  options: [
    "A. CnH2n.",
    "B. CnH2n+2.",
    "C. CnH2n−2.",
    "D. CnHn."
  ],
  correctAnswer: "A",
  difficulty: "easy",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: [
    "chem11-hc-unsat-concept-formula"
  ],
  subTypeId: "chem11-hc-st-unsat-concept",
  practiceRole: "guided",
  representationType: "text",
  estimatedSeconds: 45
},
{
  id: "chem11-hc-q050",
  subjectId: "chemistry",
  topicId: "chem11-t4",
  questionTypeId: "chem11-qt49",
  content: "Alkyne mạch hở có một liên kết ba có công thức chung là",
  responseType: "single_choice",
  options: [
    "A. CnH2n.",
    "B. CnH2n−2.",
    "C. CnH2n+2.",
    "D. CnHn+2."
  ],
  correctAnswer: "B",
  difficulty: "easy",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: [
    "chem11-hc-unsat-concept-formula"
  ],
  subTypeId: "chem11-hc-st-unsat-concept",
  practiceRole: "near_transfer",
  representationType: "equation",
  estimatedSeconds: 45
},
{
  id: "chem11-hc-q051",
  subjectId: "chemistry",
  topicId: "chem11-t4",
  questionTypeId: "chem11-qt49",
  content: "Chất nào là alkene mạch hở một liên kết đôi?",
  responseType: "single_choice",
  options: [
    "A. C3H8.",
    "B. C3H4.",
    "C. C3H6.",
    "D. C3H7Cl."
  ],
  correctAnswer: "C",
  difficulty: "easy",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: [
    "chem11-hc-unsat-concept-formula"
  ],
  subTypeId: "chem11-hc-st-unsat-concept",
  practiceRole: "misconception_check",
  representationType: "diagram",
  estimatedSeconds: 45
},
{
  id: "chem11-hc-q052",
  subjectId: "chemistry",
  topicId: "chem11-t4",
  questionTypeId: "chem11-qt49",
  content: "Nhận xét đúng nhất về C4H8 là",
  responseType: "single_choice",
  options: [
    "A. Chắc chắn là butene.",
    "B. Chắc chắn là alkyne.",
    "C. Chắc chắn là alkane.",
    "D. Có thể là alkene mạch hở hoặc cycloalkane; cần thêm cấu tạo."
  ],
  correctAnswer: "D",
  difficulty: "easy",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: [
    "chem11-hc-unsat-concept-formula"
  ],
  subTypeId: "chem11-hc-st-unsat-concept",
  practiceRole: "mastery_holdout",
  representationType: "text",
  estimatedSeconds: 45,
  isMasteryHoldout: true
},
{
  id: "chem11-hc-q053",
  subjectId: "chemistry",
  topicId: "chem11-t4",
  questionTypeId: "chem11-qt49",
  content: "Tên CH2=CH2 là",
  responseType: "single_choice",
  options: [
    "A. ethene (ethylene).",
    "B. ethane.",
    "C. ethyne.",
    "D. propene."
  ],
  correctAnswer: "A",
  difficulty: "medium",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: [
    "chem11-hc-unsat-naming"
  ],
  subTypeId: "chem11-hc-st-unsat-name-alkene",
  practiceRole: "guided",
  representationType: "diagram",
  estimatedSeconds: 65
},
{
  id: "chem11-hc-q054",
  subjectId: "chemistry",
  topicId: "chem11-t4",
  questionTypeId: "chem11-qt49",
  content: "Tên CH3CH=CHCH3 là",
  responseType: "single_choice",
  options: [
    "A. but-1-ene.",
    "B. but-2-ene.",
    "C. butane.",
    "D. but-2-yne."
  ],
  correctAnswer: "B",
  difficulty: "medium",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: [
    "chem11-hc-unsat-naming"
  ],
  subTypeId: "chem11-hc-st-unsat-name-alkene",
  practiceRole: "near_transfer",
  representationType: "text",
  estimatedSeconds: 65
},
{
  id: "chem11-hc-q055",
  subjectId: "chemistry",
  topicId: "chem11-t4",
  questionTypeId: "chem11-qt49",
  content: "CH2=CHCH2CH3 có tên là",
  responseType: "single_choice",
  options: [
    "A. but-2-ene.",
    "B. 2-methylpropene.",
    "C. but-1-ene.",
    "D. but-1-yne."
  ],
  correctAnswer: "C",
  difficulty: "medium",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: [
    "chem11-hc-unsat-naming"
  ],
  subTypeId: "chem11-hc-st-unsat-name-alkene",
  practiceRole: "misconception_check",
  representationType: "equation",
  estimatedSeconds: 65
},
{
  id: "chem11-hc-q056",
  subjectId: "chemistry",
  topicId: "chem11-t4",
  questionTypeId: "chem11-qt49",
  content: "Quy tắc đánh số đúng cho alkene là",
  responseType: "single_choice",
  options: [
    "A. ưu tiên nhánh trước.",
    "B. luôn trái sang phải.",
    "C. ưu tiên đầu xa liên kết đôi.",
    "D. ưu tiên liên kết đôi có chỉ số nhỏ nhất trước nhánh."
  ],
  correctAnswer: "D",
  difficulty: "medium",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: [
    "chem11-hc-unsat-naming"
  ],
  subTypeId: "chem11-hc-st-unsat-name-alkene",
  practiceRole: "mastery_holdout",
  representationType: "diagram",
  estimatedSeconds: 65,
  isMasteryHoldout: true
},
{
  id: "chem11-hc-q057",
  subjectId: "chemistry",
  topicId: "chem11-t4",
  questionTypeId: "chem11-qt49",
  content: "Tên HC≡CH là",
  responseType: "single_choice",
  options: [
    "A. ethyne (acetylene).",
    "B. ethene.",
    "C. ethane.",
    "D. propyne."
  ],
  correctAnswer: "A",
  difficulty: "medium",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: [
    "chem11-hc-unsat-naming"
  ],
  subTypeId: "chem11-hc-st-unsat-name-alkyne",
  practiceRole: "guided",
  representationType: "equation",
  estimatedSeconds: 65
},
{
  id: "chem11-hc-q058",
  subjectId: "chemistry",
  topicId: "chem11-t4",
  questionTypeId: "chem11-qt49",
  content: "Tên đúng của hydrocarbon có công thức cấu tạo HC≡C–CH(CH3)–CH3 là",
  responseType: "single_choice",
  options: [
    "A. 2-methylbut-3-yne.",
    "B. 3-methylbut-1-yne.",
    "C. 2-methylbut-1-yne.",
    "D. 3-methylbut-3-yne."
  ],
  correctAnswer: "B",
  difficulty: "hard",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: [
    "chem11-hc-unsat-naming"
  ],
  subTypeId: "chem11-hc-st-unsat-name-alkyne",
  practiceRole: "far_transfer",
  representationType: "diagram",
  estimatedSeconds: 80
},
{
  id: "chem11-hc-q059",
  subjectId: "chemistry",
  topicId: "chem11-t4",
  questionTypeId: "chem11-qt49",
  content: "Công thức cấu tạo nào ứng với pent-2-yne?",
  responseType: "single_choice",
  options: [
    "A. HC≡C–CH2–CH2–CH3.",
    "B. CH3–CH2–CH2–C≡CH.",
    "C. CH3–C≡C–CH2–CH3.",
    "D. CH2=CH–CH2–CH2–CH3."
  ],
  correctAnswer: "C",
  difficulty: "hard",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: [
    "chem11-hc-unsat-naming"
  ],
  subTypeId: "chem11-hc-st-unsat-name-alkyne",
  practiceRole: "misconception_check",
  representationType: "text",
  estimatedSeconds: 80
},
{
  id: "chem11-hc-q060",
  subjectId: "chemistry",
  topicId: "chem11-t4",
  questionTypeId: "chem11-qt49",
  content: "Một alkyne X có 5 nguyên tử carbon, liên kết ba ở vị trí số 2 và mạch carbon không phân nhánh. Tên và công thức thu gọn phù hợp là",
  responseType: "single_choice",
  options: [
    "A. pent-1-yne, HC≡C–CH2–CH2–CH3.",
    "B. pent-3-yne, CH3–CH2–C≡C–CH3.",
    "C. 3-methylbut-1-yne, HC≡C–CH(CH3)–CH3.",
    "D. pent-2-yne, CH3–C≡C–CH2–CH3."
  ],
  correctAnswer: "D",
  difficulty: "hard",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: [
    "chem11-hc-unsat-naming"
  ],
  subTypeId: "chem11-hc-st-unsat-name-alkyne",
  practiceRole: "mastery_holdout",
  representationType: "equation",
  estimatedSeconds: 80,
  isMasteryHoldout: true
},
{
  id: "chem11-hc-q061",
  subjectId: "chemistry",
  topicId: "chem11-t4",
  questionTypeId: "chem11-qt50",
  content: "Liên kết đôi C=C gồm",
  responseType: "single_choice",
  options: [
    "A. một sigma và một pi.",
    "B. hai sigma.",
    "C. hai pi.",
    "D. một liên kết ion."
  ],
  correctAnswer: "A",
  difficulty: "easy",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: [
    "chem11-hc-unsat-structure-shape"
  ],
  subTypeId: "chem11-hc-st-unsat-bond-shape",
  practiceRole: "guided",
  representationType: "diagram",
  estimatedSeconds: 45
},
{
  id: "chem11-hc-q062",
  subjectId: "chemistry",
  topicId: "chem11-t4",
  questionTypeId: "chem11-qt50",
  content: "Liên kết ba C≡C gồm",
  responseType: "single_choice",
  options: [
    "A. ba sigma.",
    "B. một sigma và hai pi.",
    "C. hai sigma và một pi.",
    "D. ba pi."
  ],
  correctAnswer: "B",
  difficulty: "easy",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: [
    "chem11-hc-unsat-structure-shape"
  ],
  subTypeId: "chem11-hc-st-unsat-bond-shape",
  practiceRole: "near_transfer",
  representationType: "table",
  estimatedSeconds: 45
},
{
  id: "chem11-hc-q063",
  subjectId: "chemistry",
  topicId: "chem11-t4",
  questionTypeId: "chem11-qt50",
  content: "Hình dạng phân tử acetylene HC≡CH là",
  responseType: "single_choice",
  options: [
    "A. gấp khúc.",
    "B. tứ diện.",
    "C. thẳng.",
    "D. vuông phẳng."
  ],
  correctAnswer: "C",
  difficulty: "easy",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: [
    "chem11-hc-unsat-structure-shape"
  ],
  subTypeId: "chem11-hc-st-unsat-bond-shape",
  practiceRole: "misconception_check",
  representationType: "text",
  estimatedSeconds: 45
},
{
  id: "chem11-hc-q064",
  subjectId: "chemistry",
  topicId: "chem11-t4",
  questionTypeId: "chem11-qt50",
  content: "Mô tả đúng là",
  responseType: "single_choice",
  options: [
    "A. Ethylene thẳng toàn phân tử như acetylene.",
    "B. Acetylene phẳng tam giác.",
    "C. C=C có hai sigma.",
    "D. Ethylene gần phẳng quanh C=C; acetylene thẳng quanh C≡C."
  ],
  correctAnswer: "D",
  difficulty: "easy",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: [
    "chem11-hc-unsat-structure-shape"
  ],
  subTypeId: "chem11-hc-st-unsat-bond-shape",
  practiceRole: "mastery_holdout",
  representationType: "diagram",
  estimatedSeconds: 45,
  isMasteryHoldout: true
},
{
  id: "chem11-hc-q065",
  subjectId: "chemistry",
  topicId: "chem11-t4",
  questionTypeId: "chem11-qt50",
  content: "Chất có đồng phân hình học là",
  responseType: "single_choice",
  options: [
    "A. but-2-ene.",
    "B. ethene.",
    "C. propene.",
    "D. 2-methylpropene."
  ],
  correctAnswer: "A",
  difficulty: "medium",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: [
    "chem11-hc-unsat-geometric-isomer"
  ],
  subTypeId: "chem11-hc-st-cis-trans",
  practiceRole: "guided",
  representationType: "text",
  estimatedSeconds: 65
},
{
  id: "chem11-hc-q066",
  subjectId: "chemistry",
  topicId: "chem11-t4",
  questionTypeId: "chem11-qt50",
  content: "Điều kiện có cis–trans là",
  responseType: "single_choice",
  options: [
    "A. phân tử có carbon.",
    "B. mỗi carbon của C=C gắn hai nhóm khác nhau.",
    "C. có liên kết đơn.",
    "D. có nhóm CH3."
  ],
  correctAnswer: "B",
  difficulty: "medium",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: [
    "chem11-hc-unsat-geometric-isomer"
  ],
  subTypeId: "chem11-hc-st-cis-trans",
  practiceRole: "near_transfer",
  representationType: "diagram",
  estimatedSeconds: 65
},
{
  id: "chem11-hc-q067",
  subjectId: "chemistry",
  topicId: "chem11-t4",
  questionTypeId: "chem11-qt50",
  content: "Propene CH2=CHCH3 không có cis–trans vì",
  responseType: "single_choice",
  options: [
    "A. không có C=C.",
    "B. có ba carbon.",
    "C. carbon CH2 của C=C gắn hai H giống nhau.",
    "D. không có H."
  ],
  correctAnswer: "C",
  difficulty: "medium",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: [
    "chem11-hc-unsat-geometric-isomer"
  ],
  subTypeId: "chem11-hc-st-cis-trans",
  practiceRole: "misconception_check",
  representationType: "table",
  estimatedSeconds: 65
},
{
  id: "chem11-hc-q068",
  subjectId: "chemistry",
  topicId: "chem11-t4",
  questionTypeId: "chem11-qt50",
  content: "Cis và trans không đổi qua lại bằng quay tự do vì",
  responseType: "single_choice",
  options: [
    "A. phân tử không chuyển động.",
    "B. liên kết sigma không quay.",
    "C. không có carbon.",
    "D. liên kết pi cản quay quanh C=C."
  ],
  correctAnswer: "D",
  difficulty: "medium",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: [
    "chem11-hc-unsat-geometric-isomer"
  ],
  subTypeId: "chem11-hc-st-cis-trans",
  practiceRole: "mastery_holdout",
  representationType: "text",
  estimatedSeconds: 65,
  isMasteryHoldout: true
},
{
  id: "chem11-hc-q069",
  subjectId: "chemistry",
  topicId: "chem11-t4",
  questionTypeId: "chem11-qt50",
  content: "Ethylene và acetylene ở điều kiện thường chủ yếu là",
  responseType: "single_choice",
  options: [
    "A. khí.",
    "B. rắn.",
    "C. kim loại.",
    "D. dung dịch nước."
  ],
  correctAnswer: "A",
  difficulty: "medium",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: [
    "chem11-hc-unsat-physical"
  ],
  subTypeId: "chem11-hc-st-unsat-physical",
  practiceRole: "guided",
  representationType: "table",
  estimatedSeconds: 65
},
{
  id: "chem11-hc-q070",
  subjectId: "chemistry",
  topicId: "chem11-t4",
  questionTypeId: "chem11-qt50",
  content: "Nhiệt độ sôi của ethene, propene và but-1-ene lần lượt xấp xỉ −104 °C, −48 °C và −6 °C. Dự đoán hợp lí nhất cho pent-1-ene là",
  responseType: "single_choice",
  options: [
    "A. thấp hơn −104 °C vì phân tử nặng hơn.",
    "B. cao hơn −6 °C vì lực van der Waals tăng theo kích thước phân tử.",
    "C. đúng bằng −6 °C vì cùng là alkene.",
    "D. không thể tồn tại ở trạng thái lỏng."
  ],
  correctAnswer: "B",
  difficulty: "hard",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: [
    "chem11-hc-unsat-physical"
  ],
  subTypeId: "chem11-hc-st-unsat-physical",
  practiceRole: "far_transfer",
  representationType: "text",
  estimatedSeconds: 80
},
{
  id: "chem11-hc-q071",
  subjectId: "chemistry",
  topicId: "chem11-t4",
  questionTypeId: "chem11-qt50",
  content: "Lắc pent-1-ene với nước rồi để yên, quan sát thấy hai lớp và lớp hydrocarbon ở phía trên. Giải thích đúng nhất là",
  responseType: "single_choice",
  options: [
    "A. pent-1-ene phản ứng hết với nước tạo lớp khí.",
    "B. pent-1-ene là chất ion nên tách khỏi nước.",
    "C. pent-1-ene kém phân cực, hầu như không tan và có khối lượng riêng nhỏ hơn nước.",
    "D. mọi hydrocarbon đều có khối lượng riêng lớn hơn nước."
  ],
  correctAnswer: "C",
  difficulty: "hard",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: [
    "chem11-hc-unsat-physical"
  ],
  subTypeId: "chem11-hc-st-unsat-physical",
  practiceRole: "misconception_check",
  representationType: "diagram",
  estimatedSeconds: 80
},
{
  id: "chem11-hc-q072",
  subjectId: "chemistry",
  topicId: "chem11-t4",
  questionTypeId: "chem11-qt50",
  content: "Ba mẫu mất nhãn có dữ liệu: X sôi ở −48 °C; Y sôi ở −6 °C; Z sôi ở 30 °C. Cả ba hầu như không tan trong nước và đều làm mất màu nước bromine. Nếu chúng lần lượt thuộc dãy alkene mạch thẳng C3, C4, C5 thì cách ghép đúng là",
  responseType: "single_choice",
  options: [
    "A. X là C5, Y là C4, Z là C3.",
    "B. X là C4, Y là C3, Z là C5.",
    "C. X là C3, Y là C5, Z là C4.",
    "D. X là C3, Y là C4, Z là C5."
  ],
  correctAnswer: "D",
  difficulty: "hard",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: [
    "chem11-hc-unsat-physical"
  ],
  subTypeId: "chem11-hc-st-unsat-physical",
  practiceRole: "mastery_holdout",
  representationType: "table",
  estimatedSeconds: 80,
  isMasteryHoldout: true
},
{
  id: "chem11-hc-q073",
  subjectId: "chemistry",
  topicId: "chem11-t4",
  questionTypeId: "chem11-qt51",
  content: "Sản phẩm hydrogen hóa hoàn toàn ethylene là",
  responseType: "single_choice",
  options: [
    "A. ethane.",
    "B. ethyne.",
    "C. ethanol.",
    "D. methane."
  ],
  correctAnswer: "A",
  difficulty: "easy",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: [
    "chem11-hc-unsat-addition-basic"
  ],
  subTypeId: "chem11-hc-st-add-h2-br2",
  practiceRole: "guided",
  representationType: "equation",
  estimatedSeconds: 45
},
{
  id: "chem11-hc-q074",
  subjectId: "chemistry",
  topicId: "chem11-t4",
  questionTypeId: "chem11-qt51",
  content: "Ethylene cộng Br2 tạo",
  responseType: "single_choice",
  options: [
    "A. CH3CH2Br.",
    "B. CH2BrCH2Br.",
    "C. CH3Br.",
    "D. C2H5Br."
  ],
  correctAnswer: "B",
  difficulty: "easy",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: [
    "chem11-hc-unsat-addition-basic"
  ],
  subTypeId: "chem11-hc-st-add-h2-br2",
  practiceRole: "near_transfer",
  representationType: "experiment",
  estimatedSeconds: 45
},
{
  id: "chem11-hc-q075",
  subjectId: "chemistry",
  topicId: "chem11-t4",
  questionTypeId: "chem11-qt51",
  content: "Bromine hóa alkene là phản ứng",
  responseType: "single_choice",
  options: [
    "A. thế H.",
    "B. cracking.",
    "C. cộng vào liên kết pi.",
    "D. trùng ngưng."
  ],
  correctAnswer: "C",
  difficulty: "easy",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: [
    "chem11-hc-unsat-addition-basic"
  ],
  subTypeId: "chem11-hc-st-add-h2-br2",
  practiceRole: "misconception_check",
  representationType: "table",
  estimatedSeconds: 45
},
{
  id: "chem11-hc-q076",
  subjectId: "chemistry",
  topicId: "chem11-t4",
  questionTypeId: "chem11-qt51",
  content: "Một mol acetylene cộng H2 hoàn toàn cần tối đa",
  responseType: "single_choice",
  options: [
    "A. 0,5 mol.",
    "B. 1 mol.",
    "C. 3 mol.",
    "D. 2 mol."
  ],
  correctAnswer: "D",
  difficulty: "easy",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: [
    "chem11-hc-unsat-addition-basic"
  ],
  subTypeId: "chem11-hc-st-add-h2-br2",
  practiceRole: "mastery_holdout",
  representationType: "equation",
  estimatedSeconds: 45,
  isMasteryHoldout: true
},
{
  id: "chem11-hc-q077",
  subjectId: "chemistry",
  topicId: "chem11-t4",
  questionTypeId: "chem11-qt51",
  content: "Sản phẩm chính cộng HBr vào propene theo Markovnikov là",
  responseType: "single_choice",
  options: [
    "A. 2-bromopropane.",
    "B. 1-bromopropane.",
    "C. propane.",
    "D. propan-1-ol."
  ],
  correctAnswer: "A",
  difficulty: "medium",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: [
    "chem11-hc-unsat-markovnikov"
  ],
  subTypeId: "chem11-hc-st-add-hx-water",
  practiceRole: "guided",
  representationType: "table",
  estimatedSeconds: 65
},
{
  id: "chem11-hc-q078",
  subjectId: "chemistry",
  topicId: "chem11-t4",
  questionTypeId: "chem11-qt51",
  content: "Hydration propene trong acid cho sản phẩm chính là",
  responseType: "single_choice",
  options: [
    "A. propanal.",
    "B. propan-2-ol.",
    "C. propan-1-ol duy nhất.",
    "D. propane."
  ],
  correctAnswer: "B",
  difficulty: "medium",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: [
    "chem11-hc-unsat-markovnikov"
  ],
  subTypeId: "chem11-hc-st-add-hx-water",
  practiceRole: "near_transfer",
  representationType: "equation",
  estimatedSeconds: 65
},
{
  id: "chem11-hc-q079",
  subjectId: "chemistry",
  topicId: "chem11-t4",
  questionTypeId: "chem11-qt51",
  content: "Quy tắc Markovnikov trong trường hợp chuẩn cho biết",
  responseType: "single_choice",
  options: [
    "A. Br luôn vào carbon đầu mạch.",
    "B. sản phẩm ngẫu nhiên.",
    "C. H ưu tiên vào carbon liên kết đôi đang có nhiều H hơn.",
    "D. không cần xét cấu tạo."
  ],
  correctAnswer: "C",
  difficulty: "medium",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: [
    "chem11-hc-unsat-markovnikov"
  ],
  subTypeId: "chem11-hc-st-add-hx-water",
  practiceRole: "misconception_check",
  representationType: "experiment",
  estimatedSeconds: 65
},
{
  id: "chem11-hc-q080",
  subjectId: "chemistry",
  topicId: "chem11-t4",
  questionTypeId: "chem11-qt51",
  content: "Cộng nước vào alkene thường cần",
  responseType: "single_choice",
  options: [
    "A. chỉ ánh sáng.",
    "B. không điều kiện.",
    "C. AgNO3/NH3.",
    "D. xúc tác acid và điều kiện phù hợp."
  ],
  correctAnswer: "D",
  difficulty: "medium",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: [
    "chem11-hc-unsat-markovnikov"
  ],
  subTypeId: "chem11-hc-st-add-hx-water",
  practiceRole: "mastery_holdout",
  representationType: "table",
  estimatedSeconds: 65,
  isMasteryHoldout: true
},
{
  id: "chem11-hc-q081",
  subjectId: "chemistry",
  topicId: "chem11-t4",
  questionTypeId: "chem11-qt51",
  content: "0,10 mol ethylene làm mất màu tối đa bao nhiêu mol Br2 khi cộng một lần?",
  responseType: "single_choice",
  options: [
    "A. 0,10 mol.",
    "B. 0,20 mol.",
    "C. 0,05 mol.",
    "D. 1,00 mol."
  ],
  correctAnswer: "A",
  difficulty: "medium",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: [
    "chem11-hc-unsat-addition-basic"
  ],
  subTypeId: "chem11-hc-st-add-data",
  practiceRole: "guided",
  representationType: "experiment",
  estimatedSeconds: 65
},
{
  id: "chem11-hc-q082",
  subjectId: "chemistry",
  topicId: "chem11-t4",
  questionTypeId: "chem11-qt51",
  content: "Hỗn hợp gồm ethene và acetylene có tổng số mol 0,15 mol. Hydrogen hóa hoàn toàn hỗn hợp cần 0,20 mol H2. Số mol acetylene là",
  responseType: "single_choice",
  options: [
    "A. 0,10 mol.",
    "B. 0,05 mol.",
    "C. 0,15 mol.",
    "D. 0,20 mol."
  ],
  correctAnswer: "B",
  difficulty: "hard",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: [
    "chem11-hc-unsat-addition-basic"
  ],
  subTypeId: "chem11-hc-st-add-data",
  practiceRole: "far_transfer",
  representationType: "table",
  estimatedSeconds: 80
},
{
  id: "chem11-hc-q083",
  subjectId: "chemistry",
  topicId: "chem11-t4",
  questionTypeId: "chem11-qt51",
  content: "Một hỗn hợp 0,20 mol gồm ethene và acetylene cộng tối đa 0,30 mol Br2. Phần mol acetylene trong hỗn hợp là",
  responseType: "single_choice",
  options: [
    "A. 25%.",
    "B. 40%.",
    "C. 50%.",
    "D. 75%."
  ],
  correctAnswer: "C",
  difficulty: "hard",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: [
    "chem11-hc-unsat-addition-basic"
  ],
  subTypeId: "chem11-hc-st-add-data",
  practiceRole: "misconception_check",
  representationType: "equation",
  estimatedSeconds: 80
},
{
  id: "chem11-hc-q084",
  subjectId: "chemistry",
  topicId: "chem11-t4",
  questionTypeId: "chem11-qt51",
  content: "Hydrocarbon X có công thức C4H6, cộng tối đa 2 mol H2 trên 1 mol X và tạo butane. X còn tạo kết tủa với AgNO3/NH3. Công thức cấu tạo của X là",
  responseType: "single_choice",
  options: [
    "A. CH3–C≡C–CH3.",
    "B. CH2=CH–CH=CH2.",
    "C. cyclobutene.",
    "D. HC≡C–CH2–CH3."
  ],
  correctAnswer: "D",
  difficulty: "hard",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: [
    "chem11-hc-unsat-addition-basic"
  ],
  subTypeId: "chem11-hc-st-add-data",
  practiceRole: "mastery_holdout",
  representationType: "experiment",
  estimatedSeconds: 80,
  isMasteryHoldout: true
},
{
  id: "chem11-hc-q085",
  subjectId: "chemistry",
  topicId: "chem11-t4",
  questionTypeId: "chem11-qt52",
  content: "Mắt xích polyethylene là",
  responseType: "single_choice",
  options: [
    "A. –CH2–CH2–.",
    "B. –CH=CH–.",
    "C. –CH2–CHCl–.",
    "D. –C≡C–."
  ],
  correctAnswer: "A",
  difficulty: "easy",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: [
    "chem11-hc-unsat-polymerization"
  ],
  subTypeId: "chem11-hc-st-polymerization",
  practiceRole: "guided",
  representationType: "equation",
  estimatedSeconds: 45
},
{
  id: "chem11-hc-q086",
  subjectId: "chemistry",
  topicId: "chem11-t4",
  questionTypeId: "chem11-qt52",
  content: "Monomer tạo polypropylene là",
  responseType: "single_choice",
  options: [
    "A. ethylene.",
    "B. propene.",
    "C. acetylene.",
    "D. methane."
  ],
  correctAnswer: "B",
  difficulty: "easy",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: [
    "chem11-hc-unsat-polymerization"
  ],
  subTypeId: "chem11-hc-st-polymerization",
  practiceRole: "near_transfer",
  representationType: "experiment",
  estimatedSeconds: 45
},
{
  id: "chem11-hc-q087",
  subjectId: "chemistry",
  topicId: "chem11-t4",
  questionTypeId: "chem11-qt52",
  content: "Trong trùng hợp alkene, biến đổi chính là",
  responseType: "single_choice",
  options: [
    "A. mất mọi carbon.",
    "B. tạo nước.",
    "C. mở liên kết pi để nối nhiều monomer.",
    "D. giữ nguyên C=C trong mắt xích."
  ],
  correctAnswer: "C",
  difficulty: "easy",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: [
    "chem11-hc-unsat-polymerization"
  ],
  subTypeId: "chem11-hc-st-polymerization",
  practiceRole: "misconception_check",
  representationType: "table",
  estimatedSeconds: 45
},
{
  id: "chem11-hc-q088",
  subjectId: "chemistry",
  topicId: "chem11-t4",
  questionTypeId: "chem11-qt52",
  content: "Phương trình khái quát PE đúng là",
  responseType: "single_choice",
  options: [
    "A. nCH4→(CH4)n.",
    "B. nHC≡CH→(HCCH)n.",
    "C. nCH2=CH2→[CH2=CH2]n.",
    "D. nCH2=CH2→(–CH2–CH2–)n."
  ],
  correctAnswer: "D",
  difficulty: "easy",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: [
    "chem11-hc-unsat-polymerization"
  ],
  subTypeId: "chem11-hc-st-polymerization",
  practiceRole: "mastery_holdout",
  representationType: "equation",
  estimatedSeconds: 45,
  isMasteryHoldout: true
},
{
  id: "chem11-hc-q089",
  subjectId: "chemistry",
  topicId: "chem11-t4",
  questionTypeId: "chem11-qt52",
  content: "Chất phản ứng với AgNO3/NH3 tạo kết tủa là",
  responseType: "single_choice",
  options: [
    "A. HC≡CH.",
    "B. CH3C≡CCH3.",
    "C. CH2=CH2.",
    "D. CH3CH3."
  ],
  correctAnswer: "A",
  difficulty: "medium",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: [
    "chem11-hc-terminal-alkyne-silver"
  ],
  subTypeId: "chem11-hc-st-terminal-alkyne",
  practiceRole: "guided",
  representationType: "table",
  estimatedSeconds: 65
},
{
  id: "chem11-hc-q090",
  subjectId: "chemistry",
  topicId: "chem11-t4",
  questionTypeId: "chem11-qt52",
  content: "Cặp đều là alk-1-yne có thể phản ứng là",
  responseType: "single_choice",
  options: [
    "A. but-2-yne và ethene.",
    "B. ethyne và prop-1-yne.",
    "C. but-2-yne và propane.",
    "D. ethene và propene."
  ],
  correctAnswer: "B",
  difficulty: "medium",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: [
    "chem11-hc-terminal-alkyne-silver"
  ],
  subTypeId: "chem11-hc-st-terminal-alkyne",
  practiceRole: "near_transfer",
  representationType: "equation",
  estimatedSeconds: 65
},
{
  id: "chem11-hc-q091",
  subjectId: "chemistry",
  topicId: "chem11-t4",
  questionTypeId: "chem11-qt52",
  content: "But-2-yne không tạo kết tủa bạc vì",
  responseType: "single_choice",
  options: [
    "A. không có carbon.",
    "B. không có liên kết ba.",
    "C. không có hydrogen gắn trực tiếp carbon đầu liên kết ba.",
    "D. không tan nước."
  ],
  correctAnswer: "C",
  difficulty: "medium",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: [
    "chem11-hc-terminal-alkyne-silver"
  ],
  subTypeId: "chem11-hc-st-terminal-alkyne",
  practiceRole: "misconception_check",
  representationType: "experiment",
  estimatedSeconds: 65
},
{
  id: "chem11-hc-q092",
  subjectId: "chemistry",
  topicId: "chem11-t4",
  questionTypeId: "chem11-qt52",
  content: "Kết luận đúng về thuốc thử AgNO3/NH3 là",
  responseType: "single_choice",
  options: [
    "A. nhận mọi hydrocarbon.",
    "B. nhận mọi alkene.",
    "C. nhận mọi alkyne.",
    "D. chọn lọc alk-1-yne có ≡C–H trong phạm vi bài."
  ],
  correctAnswer: "D",
  difficulty: "medium",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: [
    "chem11-hc-terminal-alkyne-silver"
  ],
  subTypeId: "chem11-hc-st-terminal-alkyne",
  practiceRole: "mastery_holdout",
  representationType: "table",
  estimatedSeconds: 65,
  isMasteryHoldout: true
},
{
  id: "chem11-hc-q093",
  subjectId: "chemistry",
  topicId: "chem11-t4",
  questionTypeId: "chem11-qt52",
  content: "Alkene làm mất màu dung dịch KMnO4 do",
  responseType: "single_choice",
  options: [
    "A. bị oxi hóa tại liên kết đôi.",
    "B. trung hòa acid.",
    "C. tạo ion Na+.",
    "D. không phản ứng."
  ],
  correctAnswer: "A",
  difficulty: "medium",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: [
    "chem11-hc-unsat-oxidation"
  ],
  subTypeId: "chem11-hc-st-unsat-oxidation",
  practiceRole: "guided",
  representationType: "experiment",
  estimatedSeconds: 65
},
{
  id: "chem11-hc-q094",
  subjectId: "chemistry",
  topicId: "chem11-t4",
  questionTypeId: "chem11-qt52",
  content: "Hỗn hợp khí gồm ethane, ethene và ethyne. Trình tự thuốc thử phù hợp để nhận ra riêng ethyne, sau đó ethene, là",
  responseType: "single_choice",
  options: [
    "A. nước bromine trước, rồi AgNO3/NH3; cả hai bước đều cho kết quả riêng biệt hoàn toàn.",
    "B. AgNO3/NH3 để tách ethyne, sau đó nước bromine để nhận ethene; khí còn lại là ethane.",
    "C. nước trước, rồi dung dịch NaCl.",
    "D. AgNO3/NH3 để nhận ethene, sau đó NaOH để nhận ethane."
  ],
  correctAnswer: "B",
  difficulty: "hard",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: [
    "chem11-hc-unsat-oxidation"
  ],
  subTypeId: "chem11-hc-st-unsat-oxidation",
  practiceRole: "far_transfer",
  representationType: "table",
  estimatedSeconds: 80
},
{
  id: "chem11-hc-q095",
  subjectId: "chemistry",
  topicId: "chem11-t4",
  questionTypeId: "chem11-qt52",
  content: "Một học sinh kết luận mẫu khí là ethene chỉ vì khí làm mất màu nước bromine. Cách phản biện đúng nhất là",
  responseType: "single_choice",
  options: [
    "A. kết luận đúng tuyệt đối vì chỉ ethene phản ứng với bromine.",
    "B. kết luận sai vì ethene không phản ứng với bromine.",
    "C. bằng chứng chưa đủ; alkyne cũng làm mất màu bromine, cần thêm phép thử chọn lọc như AgNO3/NH3 nếu nghi alkyne đầu mạch.",
    "D. chỉ cần quan sát màu ngọn lửa là xác định duy nhất mọi hydrocarbon."
  ],
  correctAnswer: "C",
  difficulty: "hard",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: [
    "chem11-hc-unsat-oxidation"
  ],
  subTypeId: "chem11-hc-st-unsat-oxidation",
  practiceRole: "misconception_check",
  representationType: "equation",
  estimatedSeconds: 80
},
{
  id: "chem11-hc-q096",
  subjectId: "chemistry",
  topicId: "chem11-t4",
  questionTypeId: "chem11-qt52",
  content: "Đốt cháy hoàn toàn 0,10 mol một alkene mạch hở thu được 0,30 mol CO2. Số mol H2O tạo thành và công thức phân tử của alkene là",
  responseType: "single_choice",
  options: [
    "A. 0,20 mol và C2H4.",
    "B. 0,30 mol và C2H6.",
    "C. 0,40 mol và C4H8.",
    "D. 0,30 mol và C3H6."
  ],
  correctAnswer: "D",
  difficulty: "hard",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: [
    "chem11-hc-unsat-oxidation"
  ],
  subTypeId: "chem11-hc-st-unsat-oxidation",
  practiceRole: "mastery_holdout",
  representationType: "experiment",
  estimatedSeconds: 80,
  isMasteryHoldout: true
},
{
  id: "chem11-hc-q097",
  subjectId: "chemistry",
  topicId: "chem11-t4",
  questionTypeId: "chem11-qt53",
  content: "Trong phòng thí nghiệm, ethylene được điều chế từ",
  responseType: "single_choice",
  options: [
    "A. dehydrate ethanol.",
    "B. CaC2 và nước.",
    "C. NaCl và nước.",
    "D. methane với nước lạnh."
  ],
  correctAnswer: "A",
  difficulty: "easy",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: [
    "chem11-hc-unsat-preparation-experiment"
  ],
  subTypeId: "chem11-hc-st-prep-ethylene",
  practiceRole: "guided",
  representationType: "experiment",
  estimatedSeconds: 45
},
{
  id: "chem11-hc-q098",
  subjectId: "chemistry",
  topicId: "chem11-t4",
  questionTypeId: "chem11-qt53",
  content: "Chất xúc tác/tác nhân thường dùng khi dehydrate ethanol là",
  responseType: "single_choice",
  options: [
    "A. AgNO3/NH3.",
    "B. H2SO4 đặc và đun nóng.",
    "C. nước bromine.",
    "D. NaCl."
  ],
  correctAnswer: "B",
  difficulty: "easy",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: [
    "chem11-hc-unsat-preparation-experiment"
  ],
  subTypeId: "chem11-hc-st-prep-ethylene",
  practiceRole: "near_transfer",
  representationType: "equation",
  estimatedSeconds: 45
},
{
  id: "chem11-hc-q099",
  subjectId: "chemistry",
  topicId: "chem11-t4",
  questionTypeId: "chem11-qt53",
  content: "Sản phẩm hữu cơ của CH3CH2OH → ? + H2O là",
  responseType: "single_choice",
  options: [
    "A. ethane.",
    "B. acetylene.",
    "C. ethylene.",
    "D. methane."
  ],
  correctAnswer: "C",
  difficulty: "easy",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: [
    "chem11-hc-unsat-preparation-experiment"
  ],
  subTypeId: "chem11-hc-st-prep-ethylene",
  practiceRole: "misconception_check",
  representationType: "table",
  estimatedSeconds: 45
},
{
  id: "chem11-hc-q100",
  subjectId: "chemistry",
  topicId: "chem11-t4",
  questionTypeId: "chem11-qt53",
  content: "Khi thu ethylene rồi thử bromine, hiện tượng phù hợp là",
  responseType: "single_choice",
  options: [
    "A. tạo kim loại.",
    "B. không có khí.",
    "C. bromine đậm hơn.",
    "D. màu bromine giảm do phản ứng cộng."
  ],
  correctAnswer: "D",
  difficulty: "easy",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: [
    "chem11-hc-unsat-preparation-experiment"
  ],
  subTypeId: "chem11-hc-st-prep-ethylene",
  practiceRole: "mastery_holdout",
  representationType: "experiment",
  estimatedSeconds: 45,
  isMasteryHoldout: true
},
{
  id: "chem11-hc-q101",
  subjectId: "chemistry",
  topicId: "chem11-t4",
  questionTypeId: "chem11-qt53",
  content: "Acetylene được điều chế trong phòng thí nghiệm từ",
  responseType: "single_choice",
  options: [
    "A. CaC2 và nước.",
    "B. ethanol và NaCl.",
    "C. CaCO3 và nước.",
    "D. CH4 và Br2."
  ],
  correctAnswer: "A",
  difficulty: "medium",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: [
    "chem11-hc-unsat-preparation-experiment"
  ],
  subTypeId: "chem11-hc-st-prep-acetylene",
  practiceRole: "guided",
  representationType: "table",
  estimatedSeconds: 65
},
{
  id: "chem11-hc-q102",
  subjectId: "chemistry",
  topicId: "chem11-t4",
  questionTypeId: "chem11-qt53",
  content: "Phương trình đúng là",
  responseType: "single_choice",
  options: [
    "A. CaC2+H2O→C2H4+CaO.",
    "B. CaC2+2H2O→C2H2+Ca(OH)2.",
    "C. CaC2+O2→C2H2.",
    "D. CaC2→Ca+C2H2."
  ],
  correctAnswer: "B",
  difficulty: "medium",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: [
    "chem11-hc-unsat-preparation-experiment"
  ],
  subTypeId: "chem11-hc-st-prep-acetylene",
  practiceRole: "near_transfer",
  representationType: "experiment",
  estimatedSeconds: 65
},
{
  id: "chem11-hc-q103",
  subjectId: "chemistry",
  topicId: "chem11-t4",
  questionTypeId: "chem11-qt53",
  content: "Trước khi đốt acetylene vừa điều chế cần",
  responseType: "single_choice",
  options: [
    "A. đốt ngay giọt đầu.",
    "B. bịt kín hệ.",
    "C. đuổi hết không khí trong hệ để tránh hỗn hợp nổ.",
    "D. thêm oxygen vào bình sinh khí."
  ],
  correctAnswer: "C",
  difficulty: "medium",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: [
    "chem11-hc-unsat-preparation-experiment"
  ],
  subTypeId: "chem11-hc-st-prep-acetylene",
  practiceRole: "misconception_check",
  representationType: "equation",
  estimatedSeconds: 65
},
{
  id: "chem11-hc-q104",
  subjectId: "chemistry",
  topicId: "chem11-t4",
  questionTypeId: "chem11-qt53",
  content: "CaC2 với nước không tạo ethylene vì sản phẩm khí đúng là",
  responseType: "single_choice",
  options: [
    "A. C2H4.",
    "B. CH4.",
    "C. C2H6.",
    "D. C2H2."
  ],
  correctAnswer: "D",
  difficulty: "medium",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: [
    "chem11-hc-unsat-preparation-experiment"
  ],
  subTypeId: "chem11-hc-st-prep-acetylene",
  practiceRole: "mastery_holdout",
  representationType: "table",
  estimatedSeconds: 65,
  isMasteryHoldout: true
},
{
  id: "chem11-hc-q105",
  subjectId: "chemistry",
  topicId: "chem11-t4",
  questionTypeId: "chem11-qt53",
  content: "Ứng dụng quan trọng của ethylene là",
  responseType: "single_choice",
  options: [
    "A. nguyên liệu sản xuất polyethylene và nhiều hóa chất.",
    "B. chỉ hàn cắt kim loại.",
    "C. làm đá vôi.",
    "D. chất oxi hóa mạnh."
  ],
  correctAnswer: "A",
  difficulty: "medium",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: [
    "chem11-hc-unsat-applications-industry"
  ],
  subTypeId: "chem11-hc-st-unsat-applications",
  practiceRole: "guided",
  representationType: "equation",
  estimatedSeconds: 65
},
{
  id: "chem11-hc-q106",
  subjectId: "chemistry",
  topicId: "chem11-t4",
  questionTypeId: "chem11-qt53",
  content: "Một cơ sở cần chọn hai khí cho hai mục đích: (1) kích thích quả chín đồng đều ở nồng độ kiểm soát; (2) tạo ngọn lửa nhiệt độ cao để hàn cắt kim loại. Cặp lựa chọn phù hợp lần lượt là",
  responseType: "single_choice",
  options: [
    "A. acetylene và ethylene.",
    "B. ethylene và acetylene.",
    "C. methane và ethane.",
    "D. ethane và propane."
  ],
  correctAnswer: "B",
  difficulty: "hard",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: [
    "chem11-hc-unsat-applications-industry"
  ],
  subTypeId: "chem11-hc-st-unsat-applications",
  practiceRole: "far_transfer",
  representationType: "table",
  estimatedSeconds: 80
},
{
  id: "chem11-hc-q107",
  subjectId: "chemistry",
  topicId: "chem11-t4",
  questionTypeId: "chem11-qt53",
  content: "Trong một phản ứng cracking lí tưởng: C8H18 → C3H6 + X. Nếu phương trình đã cân bằng theo tỉ lệ 1 : 1 : 1 thì X là",
  responseType: "single_choice",
  options: [
    "A. C4H10.",
    "B. C5H10.",
    "C. C5H12.",
    "D. C6H14."
  ],
  correctAnswer: "C",
  difficulty: "hard",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: [
    "chem11-hc-unsat-applications-industry"
  ],
  subTypeId: "chem11-hc-st-unsat-applications",
  practiceRole: "misconception_check",
  representationType: "experiment",
  estimatedSeconds: 80
},
{
  id: "chem11-hc-q108",
  subjectId: "chemistry",
  topicId: "chem11-t4",
  questionTypeId: "chem11-qt53",
  content: "Phương án mô tả đúng đồng thời nguồn điều chế, thao tác an toàn và ứng dụng là",
  responseType: "single_choice",
  options: [
    "A. CaC2 + H2O tạo ethylene; có thể đốt ngay dòng khí đầu tiên; ethylene dùng hàn cắt.",
    "B. Dehydrate ethanol tạo acetylene; acetylene dùng điều hòa quả.",
    "C. Cracking alkane chỉ tạo alkane; mọi khí sinh ra đều được thử cháy ngay.",
    "D. Dehydrate ethanol tạo ethylene; CaC2 + H2O tạo acetylene; phải đuổi không khí trước khi đốt acetylene; ethylene dùng sản xuất polymer, acetylene dùng hàn cắt."
  ],
  correctAnswer: "D",
  difficulty: "hard",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: [
    "chem11-hc-unsat-applications-industry"
  ],
  subTypeId: "chem11-hc-st-unsat-applications",
  practiceRole: "mastery_holdout",
  representationType: "equation",
  estimatedSeconds: 80,
  isMasteryHoldout: true
},
{
  id: "chem11-hc-q109",
  subjectId: "chemistry",
  topicId: "chem11-t4",
  questionTypeId: "chem11-qt54",
  content: "Arene được định nghĩa đúng là",
  responseType: "single_choice",
  options: [
    "A. hydrocarbon chứa ít nhất một vòng benzene.",
    "B. mọi chất hữu cơ có mùi thơm.",
    "C. hydrocarbon chỉ chứa liên kết đơn.",
    "D. mọi hợp chất có sáu carbon."
  ],
  correctAnswer: "A",
  difficulty: "easy",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: ["chem11-hc-arene-concept-formula"],
  subTypeId: "chem11-hc-st-arene-concept-formula",
  practiceRole: "guided",
  representationType: "text",
  estimatedSeconds: 50
},
{
  id: "chem11-hc-q110",
  subjectId: "chemistry",
  topicId: "chem11-t4",
  questionTypeId: "chem11-qt54",
  content: "Công thức nào phù hợp với một đồng đẳng benzene có 7 carbon?",
  responseType: "single_choice",
  options: [
    "A. C7H14.",
    "B. C7H8.",
    "C. C7H16.",
    "D. C7H6."
  ],
  correctAnswer: "B",
  difficulty: "easy",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: ["chem11-hc-arene-concept-formula"],
  subTypeId: "chem11-hc-st-arene-concept-formula",
  practiceRole: "near_transfer",
  representationType: "equation",
  estimatedSeconds: 50
},
{
  id: "chem11-hc-q111",
  subjectId: "chemistry",
  topicId: "chem11-t4",
  questionTypeId: "chem11-qt54",
  content: "Chất nào không phải arene?",
  responseType: "single_choice",
  options: [
    "A. Benzene.",
    "B. Toluene.",
    "C. Cyclohexane.",
    "D. Naphthalene."
  ],
  correctAnswer: "C",
  difficulty: "easy",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: ["chem11-hc-arene-concept-formula"],
  subTypeId: "chem11-hc-st-arene-concept-formula",
  practiceRole: "misconception_check",
  representationType: "diagram",
  estimatedSeconds: 50
},
{
  id: "chem11-hc-q112",
  subjectId: "chemistry",
  topicId: "chem11-t4",
  questionTypeId: "chem11-qt54",
  content: "Nhận định đúng về công thức CnH2n−6 là",
  responseType: "single_choice",
  options: [
    "A. dùng cho mọi arene đa vòng.",
    "B. dùng cho styrene và mọi dẫn xuất benzene.",
    "C. chỉ cần n≥1.",
    "D. dùng cho dãy đồng đẳng benzene phù hợp, không phải mọi arene."
  ],
  correctAnswer: "D",
  difficulty: "easy",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: ["chem11-hc-arene-concept-formula"],
  subTypeId: "chem11-hc-st-arene-concept-formula",
  practiceRole: "mastery_holdout",
  representationType: "text",
  estimatedSeconds: 50,
  isMasteryHoldout: true
},
{
  id: "chem11-hc-q113",
  subjectId: "chemistry",
  topicId: "chem11-t4",
  questionTypeId: "chem11-qt54",
  content: "Công thức phân tử của benzene là",
  responseType: "single_choice",
  options: [
    "A. C6H6.",
    "B. C6H12.",
    "C. C6H14.",
    "D. C6H5OH."
  ],
  correctAnswer: "A",
  difficulty: "medium",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: ["chem11-hc-arene-common-formulas-names"],
  subTypeId: "chem11-hc-st-arene-common-names",
  practiceRole: "guided",
  representationType: "equation",
  estimatedSeconds: 70
},
{
  id: "chem11-hc-q114",
  subjectId: "chemistry",
  topicId: "chem11-t4",
  questionTypeId: "chem11-qt54",
  content: "C6H5CH3 có tên thường là",
  responseType: "single_choice",
  options: [
    "A. Styrene.",
    "B. Toluene.",
    "C. Xylene.",
    "D. Naphthalene."
  ],
  correctAnswer: "B",
  difficulty: "medium",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: ["chem11-hc-arene-common-formulas-names"],
  subTypeId: "chem11-hc-st-arene-common-names",
  practiceRole: "near_transfer",
  representationType: "diagram",
  estimatedSeconds: 70
},
{
  id: "chem11-hc-q115",
  subjectId: "chemistry",
  topicId: "chem11-t4",
  questionTypeId: "chem11-qt54",
  content: "Công thức thu gọn của styrene là",
  responseType: "single_choice",
  options: [
    "A. C6H5CH2CH3.",
    "B. C6H4(CH3)2.",
    "C. C6H5CH=CH2.",
    "D. C10H8."
  ],
  correctAnswer: "C",
  difficulty: "medium",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: ["chem11-hc-arene-common-formulas-names"],
  subTypeId: "chem11-hc-st-arene-common-names",
  practiceRole: "misconception_check",
  representationType: "text",
  estimatedSeconds: 70
},
{
  id: "chem11-hc-q116",
  subjectId: "chemistry",
  topicId: "chem11-t4",
  questionTypeId: "chem11-qt54",
  content: "Cặp tên–công thức đúng là",
  responseType: "single_choice",
  options: [
    "A. naphthalene–C6H6.",
    "B. styrene–C8H10.",
    "C. xylene–C7H8.",
    "D. naphthalene–C10H8."
  ],
  correctAnswer: "D",
  difficulty: "medium",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: ["chem11-hc-arene-common-formulas-names"],
  subTypeId: "chem11-hc-st-arene-common-names",
  practiceRole: "mastery_holdout",
  representationType: "equation",
  estimatedSeconds: 70,
  isMasteryHoldout: true
},
{
  id: "chem11-hc-q117",
  subjectId: "chemistry",
  topicId: "chem11-t4",
  questionTypeId: "chem11-qt54",
  content: "1,2-dimethylbenzene còn gọi là",
  responseType: "single_choice",
  options: [
    "A. o-xylene.",
    "B. m-xylene.",
    "C. p-xylene.",
    "D. ethylbenzene."
  ],
  correctAnswer: "A",
  difficulty: "medium",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: ["chem11-hc-arene-xylene-positions"],
  subTypeId: "chem11-hc-st-arene-omp-isomer",
  practiceRole: "guided",
  representationType: "diagram",
  estimatedSeconds: 70
},
{
  id: "chem11-hc-q118",
  subjectId: "chemistry",
  topicId: "chem11-t4",
  questionTypeId: "chem11-qt54",
  content: "m-Xylene ứng với cách đánh số",
  responseType: "single_choice",
  options: [
    "A. 1,2-dimethylbenzene.",
    "B. 1,3-dimethylbenzene.",
    "C. 1,4-dimethylbenzene.",
    "D. 1,5-dimethylbenzene là cấu tạo khác."
  ],
  correctAnswer: "B",
  difficulty: "hard",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: ["chem11-hc-arene-xylene-positions"],
  subTypeId: "chem11-hc-st-arene-omp-isomer",
  practiceRole: "far_transfer",
  representationType: "text",
  estimatedSeconds: 100
},
{
  id: "chem11-hc-q119",
  subjectId: "chemistry",
  topicId: "chem11-t4",
  questionTypeId: "chem11-qt54",
  content: "Số đồng phân vị trí của xylene C6H4(CH3)2 là",
  responseType: "single_choice",
  options: [
    "A. 1.",
    "B. 2.",
    "C. 3.",
    "D. 4."
  ],
  correctAnswer: "C",
  difficulty: "hard",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: ["chem11-hc-arene-xylene-positions"],
  subTypeId: "chem11-hc-st-arene-omp-isomer",
  practiceRole: "misconception_check",
  representationType: "equation",
  estimatedSeconds: 100
},
{
  id: "chem11-hc-q120",
  subjectId: "chemistry",
  topicId: "chem11-t4",
  questionTypeId: "chem11-qt54",
  content: "Ghép đúng thứ tự o-, m-, p-xylene với vị trí hai nhóm methyl là",
  responseType: "single_choice",
  options: [
    "A. 1,3; 1,2; 1,4.",
    "B. 1,4; 1,3; 1,2.",
    "C. 1,2; 1,4; 1,3.",
    "D. 1,2; 1,3; 1,4."
  ],
  correctAnswer: "D",
  difficulty: "hard",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: ["chem11-hc-arene-xylene-positions"],
  subTypeId: "chem11-hc-st-arene-omp-isomer",
  practiceRole: "mastery_holdout",
  representationType: "diagram",
  estimatedSeconds: 100,
  isMasteryHoldout: true
},
{
  id: "chem11-hc-q121",
  subjectId: "chemistry",
  topicId: "chem11-t4",
  questionTypeId: "chem11-qt55",
  content: "Hình dạng khung carbon của benzene là",
  responseType: "single_choice",
  options: [
    "A. lục giác phẳng, góc liên kết khoảng 120°.",
    "B. lục giác gấp khúc, góc 109,5°.",
    "C. mạch thẳng.",
    "D. tứ diện."
  ],
  correctAnswer: "A",
  difficulty: "easy",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: ["chem11-hc-benzene-structure-shape"],
  subTypeId: "chem11-hc-st-benzene-structure",
  practiceRole: "guided",
  representationType: "diagram",
  estimatedSeconds: 50
},
{
  id: "chem11-hc-q122",
  subjectId: "chemistry",
  topicId: "chem11-t4",
  questionTypeId: "chem11-qt55",
  content: "Đặc điểm đúng của sáu liên kết C–C trong benzene là",
  responseType: "single_choice",
  options: [
    "A. ba liên kết đơn dài và ba liên kết đôi ngắn cố định.",
    "B. sáu liên kết tương đương, có độ dài trung gian.",
    "C. đều là liên kết đơn.",
    "D. đều là liên kết ba."
  ],
  correctAnswer: "B",
  difficulty: "easy",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: ["chem11-hc-benzene-structure-shape"],
  subTypeId: "chem11-hc-st-benzene-structure",
  practiceRole: "near_transfer",
  representationType: "table",
  estimatedSeconds: 50
},
{
  id: "chem11-hc-q123",
  subjectId: "chemistry",
  topicId: "chem11-t4",
  questionTypeId: "chem11-qt55",
  content: "Benzene bền hơn mô hình cyclohexatriene định xứ chủ yếu vì",
  responseType: "single_choice",
  options: [
    "A. không có electron pi.",
    "B. vòng không phẳng.",
    "C. electron pi được liên hợp trên toàn vòng.",
    "D. chứa liên kết ion."
  ],
  correctAnswer: "C",
  difficulty: "easy",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: ["chem11-hc-benzene-structure-shape"],
  subTypeId: "chem11-hc-st-benzene-structure",
  practiceRole: "misconception_check",
  representationType: "text",
  estimatedSeconds: 50
},
{
  id: "chem11-hc-q124",
  subjectId: "chemistry",
  topicId: "chem11-t4",
  questionTypeId: "chem11-qt55",
  content: "Cách biểu diễn vòng lục giác có đường tròn bên trong nhấn mạnh rằng",
  responseType: "single_choice",
  options: [
    "A. benzene có một liên kết đôi duy nhất.",
    "B. electron chỉ ở một carbon.",
    "C. vòng là cyclohexane.",
    "D. electron pi phân bố liên hợp và các liên kết C–C tương đương."
  ],
  correctAnswer: "D",
  difficulty: "easy",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: ["chem11-hc-benzene-structure-shape"],
  subTypeId: "chem11-hc-st-benzene-structure",
  practiceRole: "mastery_holdout",
  representationType: "diagram",
  estimatedSeconds: 50,
  isMasteryHoldout: true
},
{
  id: "chem11-hc-q125",
  subjectId: "chemistry",
  topicId: "chem11-t4",
  questionTypeId: "chem11-qt55",
  content: "Benzene có khối lượng riêng khoảng 0,878 g/mL và hầu như không tan trong nước. Khi trộn rồi để yên, benzene thường",
  responseType: "single_choice",
  options: [
    "A. tạo lớp phía trên nước.",
    "B. tạo lớp phía dưới nước.",
    "C. tan hoàn toàn.",
    "D. phản ứng tạo khí."
  ],
  correctAnswer: "A",
  difficulty: "medium",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: ["chem11-hc-arene-physical-natural"],
  subTypeId: "chem11-hc-st-arene-physical-data",
  practiceRole: "guided",
  representationType: "table",
  estimatedSeconds: 70
},
{
  id: "chem11-hc-q126",
  subjectId: "chemistry",
  topicId: "chem11-t4",
  questionTypeId: "chem11-qt55",
  content: "Naphthalene có nhiệt độ nóng chảy khoảng 80 °C. Ở 25 °C, chất này chủ yếu là",
  responseType: "single_choice",
  options: [
    "A. khí.",
    "B. rắn.",
    "C. lỏng.",
    "D. plasma."
  ],
  correctAnswer: "B",
  difficulty: "medium",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: ["chem11-hc-arene-physical-natural"],
  subTypeId: "chem11-hc-st-arene-physical-data",
  practiceRole: "near_transfer",
  representationType: "text",
  estimatedSeconds: 70
},
{
  id: "chem11-hc-q127",
  subjectId: "chemistry",
  topicId: "chem11-t4",
  questionTypeId: "chem11-qt55",
  content: "Nhiệt độ sôi: benzene 80,1 °C; toluene 110,6 °C; o-xylene 144 °C. Thứ tự tăng đúng là",
  responseType: "single_choice",
  options: [
    "A. o-xylene < toluene < benzene.",
    "B. toluene < benzene < o-xylene.",
    "C. benzene < toluene < o-xylene.",
    "D. cả ba bằng nhau."
  ],
  correctAnswer: "C",
  difficulty: "medium",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: ["chem11-hc-arene-physical-natural"],
  subTypeId: "chem11-hc-st-arene-physical-data",
  practiceRole: "misconception_check",
  representationType: "diagram",
  estimatedSeconds: 70
},
{
  id: "chem11-hc-q128",
  subjectId: "chemistry",
  topicId: "chem11-t4",
  questionTypeId: "chem11-qt55",
  content: "p-Xylene nóng chảy khoảng 13,3 °C, m-xylene −47,4 °C. Ở 0 °C, nhận định đúng là",
  responseType: "single_choice",
  options: [
    "A. cả hai đều rắn.",
    "B. cả hai đều khí.",
    "C. p-xylene lỏng, m-xylene rắn.",
    "D. p-xylene có thể rắn còn m-xylene lỏng."
  ],
  correctAnswer: "D",
  difficulty: "medium",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: ["chem11-hc-arene-physical-natural"],
  subTypeId: "chem11-hc-st-arene-physical-data",
  practiceRole: "mastery_holdout",
  representationType: "table",
  estimatedSeconds: 70,
  isMasteryHoldout: true
},
{
  id: "chem11-hc-q129",
  subjectId: "chemistry",
  topicId: "chem11-t4",
  questionTypeId: "chem11-qt55",
  content: "Nguồn tự nhiên quan trọng của benzene, toluene và xylene là",
  responseType: "single_choice",
  options: [
    "A. dầu mỏ với hàm lượng nhất định.",
    "B. nước biển tinh khiết.",
    "C. không khí sạch.",
    "D. đá vôi."
  ],
  correctAnswer: "A",
  difficulty: "medium",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: ["chem11-hc-arene-applications-safety"],
  subTypeId: "chem11-hc-st-arene-natural-safety",
  practiceRole: "guided",
  representationType: "text",
  estimatedSeconds: 70
},
{
  id: "chem11-hc-q130",
  subjectId: "chemistry",
  topicId: "chem11-t4",
  questionTypeId: "chem11-qt55",
  content: "Xưởng đang dùng benzene làm dung môi trong bể hở. Biện pháp ưu tiên có tính triệt để hơn là",
  responseType: "single_choice",
  options: [
    "A. chỉ phát khẩu trang vải.",
    "B. thay bằng dung môi ít độc hơn và dùng hệ kín/thông gió hút cục bộ.",
    "C. dùng nước hoa che mùi.",
    "D. mở cửa sau khi làm xong."
  ],
  correctAnswer: "B",
  difficulty: "hard",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: ["chem11-hc-arene-applications-safety"],
  subTypeId: "chem11-hc-st-arene-natural-safety",
  practiceRole: "far_transfer",
  representationType: "diagram",
  estimatedSeconds: 100
},
{
  id: "chem11-hc-q131",
  subjectId: "chemistry",
  topicId: "chem11-t4",
  questionTypeId: "chem11-qt55",
  content: "Phát biểu “arene là hợp chất hữu cơ nên an toàn” sai vì",
  responseType: "single_choice",
  options: [
    "A. mọi arene đều là acid mạnh.",
    "B. arene không cháy.",
    "C. nhiều arene độc; nguy cơ phụ thuộc chất, liều, đường và thời gian phơi nhiễm.",
    "D. arene tan hoàn toàn trong nước."
  ],
  correctAnswer: "C",
  difficulty: "hard",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: ["chem11-hc-arene-applications-safety"],
  subTypeId: "chem11-hc-st-arene-natural-safety",
  practiceRole: "misconception_check",
  representationType: "table",
  estimatedSeconds: 100
},
{
  id: "chem11-hc-q132",
  subjectId: "chemistry",
  topicId: "chem11-t4",
  questionTypeId: "chem11-qt55",
  content: "Một can dung môi arene bị đổ trong phòng. Cách xử lí phù hợp nhất là",
  responseType: "single_choice",
  options: [
    "A. xả xuống cống với nhiều nước.",
    "B. dùng lửa đốt cho bay hết.",
    "C. cúi sát để xác định bằng mùi.",
    "D. cô lập nguồn lửa, thông gió phù hợp, dùng vật liệu hấp phụ và thu gom như chất thải nguy hại."
  ],
  correctAnswer: "D",
  difficulty: "hard",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: ["chem11-hc-arene-applications-safety"],
  subTypeId: "chem11-hc-st-arene-natural-safety",
  practiceRole: "mastery_holdout",
  representationType: "text",
  estimatedSeconds: 100,
  isMasteryHoldout: true
},
{
  id: "chem11-hc-q133",
  subjectId: "chemistry",
  topicId: "chem11-t4",
  questionTypeId: "chem11-qt56",
  content: "Benzene tác dụng Br2 có FeBr3 tạo sản phẩm hữu cơ chính là",
  responseType: "single_choice",
  options: [
    "A. bromobenzene.",
    "B. 1,2-dibromocyclohexane.",
    "C. bromoethane.",
    "D. cyclohexane."
  ],
  correctAnswer: "A",
  difficulty: "easy",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: ["chem11-hc-arene-substitution-benzene"],
  subTypeId: "chem11-hc-st-benzene-halogenation",
  practiceRole: "guided",
  representationType: "equation",
  estimatedSeconds: 50
},
{
  id: "chem11-hc-q134",
  subjectId: "chemistry",
  topicId: "chem11-t4",
  questionTypeId: "chem11-qt56",
  content: "Vai trò chính của FeBr3 trong phản ứng brom hóa benzene là",
  responseType: "single_choice",
  options: [
    "A. chất khử.",
    "B. xúc tác hoạt hóa bromine.",
    "C. sản phẩm.",
    "D. dung môi nước."
  ],
  correctAnswer: "B",
  difficulty: "easy",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: ["chem11-hc-arene-substitution-benzene"],
  subTypeId: "chem11-hc-st-benzene-halogenation",
  practiceRole: "near_transfer",
  representationType: "experiment",
  estimatedSeconds: 50
},
{
  id: "chem11-hc-q135",
  subjectId: "chemistry",
  topicId: "chem11-t4",
  questionTypeId: "chem11-qt56",
  content: "Benzene không làm mất màu nước bromine ngay ở điều kiện thường cho thấy",
  responseType: "single_choice",
  options: [
    "A. benzene không có carbon.",
    "B. benzene là alkane.",
    "C. benzene không cộng Br2 dễ như alkene; thế vòng cần điều kiện thích hợp.",
    "D. bromine không có màu."
  ],
  correctAnswer: "C",
  difficulty: "easy",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: ["chem11-hc-arene-substitution-benzene"],
  subTypeId: "chem11-hc-st-benzene-halogenation",
  practiceRole: "misconception_check",
  representationType: "diagram",
  estimatedSeconds: 50
},
{
  id: "chem11-hc-q136",
  subjectId: "chemistry",
  topicId: "chem11-t4",
  questionTypeId: "chem11-qt56",
  content: "Phương trình thế brom đúng là",
  responseType: "single_choice",
  options: [
    "A. C6H6 + Br2 → C6H6Br2.",
    "B. C6H6 + HBr → C6H5Br + H2.",
    "C. C6H6 + Br2 → C6H12.",
    "D. C6H6 + Br2 → C6H5Br + HBr (FeBr3)."
  ],
  correctAnswer: "D",
  difficulty: "easy",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: ["chem11-hc-arene-substitution-benzene"],
  subTypeId: "chem11-hc-st-benzene-halogenation",
  practiceRole: "mastery_holdout",
  representationType: "equation",
  estimatedSeconds: 50,
  isMasteryHoldout: true
},
{
  id: "chem11-hc-q137",
  subjectId: "chemistry",
  topicId: "chem11-t4",
  questionTypeId: "chem11-qt56",
  content: "Hỗn hợp dùng nitro hóa benzene là",
  responseType: "single_choice",
  options: [
    "A. HNO3 đặc và H2SO4 đặc.",
    "B. HCl và NaCl.",
    "C. H2SO4 loãng và nước.",
    "D. NH3 và AgNO3."
  ],
  correctAnswer: "A",
  difficulty: "medium",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: ["chem11-hc-arene-substitution-benzene"],
  subTypeId: "chem11-hc-st-arene-nitration",
  practiceRole: "guided",
  representationType: "experiment",
  estimatedSeconds: 70
},
{
  id: "chem11-hc-q138",
  subjectId: "chemistry",
  topicId: "chem11-t4",
  questionTypeId: "chem11-qt56",
  content: "Sản phẩm hữu cơ của phản ứng nitro hóa một lần benzene là",
  responseType: "single_choice",
  options: [
    "A. aniline.",
    "B. nitrobenzene.",
    "C. phenol.",
    "D. benzoic acid."
  ],
  correctAnswer: "B",
  difficulty: "medium",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: ["chem11-hc-arene-substitution-benzene"],
  subTypeId: "chem11-hc-st-arene-nitration",
  practiceRole: "near_transfer",
  representationType: "diagram",
  estimatedSeconds: 70
},
{
  id: "chem11-hc-q139",
  subjectId: "chemistry",
  topicId: "chem11-t4",
  questionTypeId: "chem11-qt56",
  content: "Thao tác an toàn phù hợp khi nitro hóa benzene quy mô học tập là",
  responseType: "single_choice",
  options: [
    "A. đun trực tiếp bằng đèn cồn.",
    "B. ngửi trực tiếp sản phẩm.",
    "C. kiểm soát nhiệt bằng bể phù hợp, thao tác trong tủ hút và dùng PPE.",
    "D. đổ hỗn hợp acid xuống cống."
  ],
  correctAnswer: "C",
  difficulty: "medium",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: ["chem11-hc-arene-substitution-benzene"],
  subTypeId: "chem11-hc-st-arene-nitration",
  practiceRole: "misconception_check",
  representationType: "equation",
  estimatedSeconds: 70
},
{
  id: "chem11-hc-q140",
  subjectId: "chemistry",
  topicId: "chem11-t4",
  questionTypeId: "chem11-qt56",
  content: "Phương trình nitro hóa benzene cân bằng đúng là",
  responseType: "single_choice",
  options: [
    "A. C6H6 + NO2 → C6H5NO2.",
    "B. C6H6 + HNO3 → C6H6NO3.",
    "C. C6H6 + NH3 → C6H5NH2 + H2.",
    "D. C6H6 + HNO3 → C6H5NO2 + H2O (H2SO4 đặc)."
  ],
  correctAnswer: "D",
  difficulty: "medium",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: ["chem11-hc-arene-substitution-benzene"],
  subTypeId: "chem11-hc-st-arene-nitration",
  practiceRole: "mastery_holdout",
  representationType: "experiment",
  estimatedSeconds: 70,
  isMasteryHoldout: true
},
{
  id: "chem11-hc-q141",
  subjectId: "chemistry",
  topicId: "chem11-t4",
  questionTypeId: "chem11-qt56",
  content: "Khi thế một lần vào vòng toluene, nhóm CH3 định hướng ưu tiên tới vị trí",
  responseType: "single_choice",
  options: [
    "A. ortho và para.",
    "B. chỉ meta.",
    "C. chỉ carbon của nhóm CH3.",
    "D. ngẫu nhiên hoàn toàn."
  ],
  correctAnswer: "A",
  difficulty: "medium",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: ["chem11-hc-arene-substitution-toluene"],
  subTypeId: "chem11-hc-st-toluene-orientation",
  practiceRole: "guided",
  representationType: "diagram",
  estimatedSeconds: 70
},
{
  id: "chem11-hc-q142",
  subjectId: "chemistry",
  topicId: "chem11-t4",
  questionTypeId: "chem11-qt56",
  content: "Nitro hóa toluene một lần tạo hỗn hợp sản phẩm ưu tiên là",
  responseType: "single_choice",
  options: [
    "A. chỉ m-nitrotoluene.",
    "B. o-nitrotoluene và p-nitrotoluene.",
    "C. nitrobenzene và methane.",
    "D. benzoic acid."
  ],
  correctAnswer: "B",
  difficulty: "hard",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: ["chem11-hc-arene-substitution-toluene"],
  subTypeId: "chem11-hc-st-toluene-orientation",
  practiceRole: "far_transfer",
  representationType: "equation",
  estimatedSeconds: 100
},
{
  id: "chem11-hc-q143",
  subjectId: "chemistry",
  topicId: "chem11-t4",
  questionTypeId: "chem11-qt56",
  content: "Một học sinh chọn m-nitrotoluene là sản phẩm ưu tiên duy nhất. Sửa đúng là",
  responseType: "single_choice",
  options: [
    "A. toluene không phản ứng nitro hóa.",
    "B. NO2 luôn thay nhóm CH3.",
    "C. nhóm CH3 định hướng o,p nên meta không phải sản phẩm ưu tiên.",
    "D. phản ứng luôn phá vòng."
  ],
  correctAnswer: "C",
  difficulty: "hard",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: ["chem11-hc-arene-substitution-toluene"],
  subTypeId: "chem11-hc-st-toluene-orientation",
  practiceRole: "misconception_check",
  representationType: "experiment",
  estimatedSeconds: 100
},
{
  id: "chem11-hc-q144",
  subjectId: "chemistry",
  topicId: "chem11-t4",
  questionTypeId: "chem11-qt56",
  content: "Nitro hóa 0,20 mol benzene, hiệu suất tạo nitrobenzene là 80%. Khối lượng nitrobenzene (M=123 g/mol) thu được là",
  responseType: "single_choice",
  options: [
    "A. 12,30 g.",
    "B. 15,68 g.",
    "C. 24,60 g.",
    "D. 19,68 g."
  ],
  correctAnswer: "D",
  difficulty: "hard",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: ["chem11-hc-arene-substitution-toluene"],
  subTypeId: "chem11-hc-st-toluene-orientation",
  practiceRole: "mastery_holdout",
  representationType: "diagram",
  estimatedSeconds: 100,
  isMasteryHoldout: true
},
{
  id: "chem11-hc-q145",
  subjectId: "chemistry",
  topicId: "chem11-t4",
  questionTypeId: "chem11-qt57",
  content: "Hydrogen hóa hoàn toàn 1 mol benzene cần số mol H2 là",
  responseType: "single_choice",
  options: [
    "A. 3 mol.",
    "B. 1 mol.",
    "C. 2 mol.",
    "D. 6 mol."
  ],
  correctAnswer: "A",
  difficulty: "easy",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: ["chem11-hc-benzene-addition"],
  subTypeId: "chem11-hc-st-benzene-addition",
  practiceRole: "guided",
  representationType: "equation",
  estimatedSeconds: 50
},
{
  id: "chem11-hc-q146",
  subjectId: "chemistry",
  topicId: "chem11-t4",
  questionTypeId: "chem11-qt57",
  content: "Benzene cộng chlorine dưới điều kiện phù hợp theo phương trình",
  responseType: "single_choice",
  options: [
    "A. C6H6 + Cl2 → C6H5Cl + HCl.",
    "B. C6H6 + 3Cl2 → C6H6Cl6.",
    "C. C6H6 + 6Cl2 → C6Cl6 + 6HCl.",
    "D. C6H6 không bao giờ phản ứng."
  ],
  correctAnswer: "B",
  difficulty: "easy",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: ["chem11-hc-benzene-addition"],
  subTypeId: "chem11-hc-st-benzene-addition",
  practiceRole: "near_transfer",
  representationType: "table",
  estimatedSeconds: 50
},
{
  id: "chem11-hc-q147",
  subjectId: "chemistry",
  topicId: "chem11-t4",
  questionTypeId: "chem11-qt57",
  content: "So với ethene, phản ứng cộng vào benzene khó hơn chủ yếu vì",
  responseType: "single_choice",
  options: [
    "A. benzene không có electron.",
    "B. benzene là chất ion.",
    "C. phản ứng cộng làm mất hệ thơm bền.",
    "D. benzene không có carbon."
  ],
  correctAnswer: "C",
  difficulty: "easy",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: ["chem11-hc-benzene-addition"],
  subTypeId: "chem11-hc-st-benzene-addition",
  practiceRole: "misconception_check",
  representationType: "experiment",
  estimatedSeconds: 50
},
{
  id: "chem11-hc-q148",
  subjectId: "chemistry",
  topicId: "chem11-t4",
  questionTypeId: "chem11-qt57",
  content: "Dấu hiệu phân biệt phản ứng thế và cộng chlorine của benzene là",
  responseType: "single_choice",
  options: [
    "A. cả hai đều tạo cùng sản phẩm.",
    "B. thế làm mất vòng benzene.",
    "C. cộng luôn tạo HCl.",
    "D. thế tạo C6H5Cl+HCl; cộng tạo C6H6Cl6 và không tách HCl."
  ],
  correctAnswer: "D",
  difficulty: "easy",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: ["chem11-hc-benzene-addition"],
  subTypeId: "chem11-hc-st-benzene-addition",
  practiceRole: "mastery_holdout",
  representationType: "equation",
  estimatedSeconds: 50,
  isMasteryHoldout: true
},
{
  id: "chem11-hc-q149",
  subjectId: "chemistry",
  topicId: "chem11-t4",
  questionTypeId: "chem11-qt57",
  content: "Phương trình cháy benzene cân bằng đúng là",
  responseType: "single_choice",
  options: [
    "A. 2C6H6 + 15O2 → 12CO2 + 6H2O.",
    "B. C6H6 + 6O2 → 6CO2 + 6H2O.",
    "C. C6H6 + 3O2 → 6C + 3H2O.",
    "D. C6H6 + O2 → CO2 + H2O."
  ],
  correctAnswer: "A",
  difficulty: "medium",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: ["chem11-hc-arene-combustion"],
  subTypeId: "chem11-hc-st-arene-combustion",
  practiceRole: "guided",
  representationType: "table",
  estimatedSeconds: 70
},
{
  id: "chem11-hc-q150",
  subjectId: "chemistry",
  topicId: "chem11-t4",
  questionTypeId: "chem11-qt57",
  content: "Đốt hoàn toàn 0,10 mol benzene thu được",
  responseType: "single_choice",
  options: [
    "A. 0,30 mol CO2 và 0,60 mol H2O.",
    "B. 0,60 mol CO2 và 0,30 mol H2O.",
    "C. 0,60 mol CO2 và 0,60 mol H2O.",
    "D. 0,10 mol mỗi sản phẩm."
  ],
  correctAnswer: "B",
  difficulty: "medium",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: ["chem11-hc-arene-combustion"],
  subTypeId: "chem11-hc-st-arene-combustion",
  practiceRole: "near_transfer",
  representationType: "experiment",
  estimatedSeconds: 70
},
{
  id: "chem11-hc-q151",
  subjectId: "chemistry",
  topicId: "chem11-t4",
  questionTypeId: "chem11-qt57",
  content: "Đốt hoàn toàn 0,10 mol toluene C7H8 tạo số mol CO2 và H2O lần lượt là",
  responseType: "single_choice",
  options: [
    "A. 0,40 và 0,70.",
    "B. 0,70 và 0,70.",
    "C. 0,70 và 0,40.",
    "D. 0,35 và 0,20."
  ],
  correctAnswer: "C",
  difficulty: "medium",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: ["chem11-hc-arene-combustion"],
  subTypeId: "chem11-hc-st-arene-combustion",
  practiceRole: "misconception_check",
  representationType: "equation",
  estimatedSeconds: 70
},
{
  id: "chem11-hc-q152",
  subjectId: "chemistry",
  topicId: "chem11-t4",
  questionTypeId: "chem11-qt57",
  content: "Một arene thuộc dãy đồng đẳng benzene khi cháy cho n(CO2):n(H2O)=7:4. Công thức phù hợp là",
  responseType: "single_choice",
  options: [
    "A. C6H6.",
    "B. C8H10.",
    "C. C9H12.",
    "D. C7H8."
  ],
  correctAnswer: "D",
  difficulty: "medium",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: ["chem11-hc-arene-combustion"],
  subTypeId: "chem11-hc-st-arene-combustion",
  practiceRole: "mastery_holdout",
  representationType: "table",
  estimatedSeconds: 70,
  isMasteryHoldout: true
},
{
  id: "chem11-hc-q153",
  subjectId: "chemistry",
  topicId: "chem11-t4",
  questionTypeId: "chem11-qt57",
  content: "Khi đun nóng toluene với dung dịch KMnO4 trong điều kiện phù hợp, phần bị oxi hóa chủ yếu là",
  responseType: "single_choice",
  options: [
    "A. nhóm CH3 gắn vòng.",
    "B. toàn bộ vòng benzene ngay lập tức.",
    "C. chỉ hydrogen trên vòng.",
    "D. ion K+."
  ],
  correctAnswer: "A",
  difficulty: "medium",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: ["chem11-hc-alkylbenzene-oxidation"],
  subTypeId: "chem11-hc-st-alkylbenzene-oxidation",
  practiceRole: "guided",
  representationType: "experiment",
  estimatedSeconds: 70
},
{
  id: "chem11-hc-q154",
  subjectId: "chemistry",
  topicId: "chem11-t4",
  questionTypeId: "chem11-qt57",
  content: "Để phân biệt benzene và toluene bằng KMnO4, cách phù hợp là",
  responseType: "single_choice",
  options: [
    "A. dùng ở lạnh rồi kết luận cả hai phản ứng.",
    "B. đun nóng với KMnO4: toluene làm mất màu/cho biến đổi, benzene không tương tự.",
    "C. chỉ thêm nước.",
    "D. ngửi trực tiếp."
  ],
  correctAnswer: "B",
  difficulty: "hard",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: ["chem11-hc-alkylbenzene-oxidation"],
  subTypeId: "chem11-hc-st-alkylbenzene-oxidation",
  practiceRole: "far_transfer",
  representationType: "equation",
  estimatedSeconds: 100
},
{
  id: "chem11-hc-q155",
  subjectId: "chemistry",
  topicId: "chem11-t4",
  questionTypeId: "chem11-qt57",
  content: "Ethylbenzene C6H5CH2CH3 bị oxi hóa mạnh ở mạch nhánh có thể tạo sản phẩm vòng mang nhóm",
  responseType: "single_choice",
  options: [
    "A. methyl.",
    "B. amino.",
    "C. carboxyl.",
    "D. hydroxyl phenol duy nhất."
  ],
  correctAnswer: "C",
  difficulty: "hard",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: ["chem11-hc-alkylbenzene-oxidation"],
  subTypeId: "chem11-hc-st-alkylbenzene-oxidation",
  practiceRole: "misconception_check",
  representationType: "table",
  estimatedSeconds: 100
},
{
  id: "chem11-hc-q156",
  subjectId: "chemistry",
  topicId: "chem11-t4",
  questionTypeId: "chem11-qt57",
  content: "Hỗn hợp 0,20 mol benzene và toluene khi cháy tạo 1,30 mol CO2. Số mol toluene là",
  responseType: "single_choice",
  options: [
    "A. 0,05.",
    "B. 0,20.",
    "C. 0,15.",
    "D. 0,10."
  ],
  correctAnswer: "D",
  difficulty: "hard",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: ["chem11-hc-alkylbenzene-oxidation"],
  subTypeId: "chem11-hc-st-alkylbenzene-oxidation",
  practiceRole: "mastery_holdout",
  representationType: "experiment",
  estimatedSeconds: 100,
  isMasteryHoldout: true
},
{
  id: "chem11-hc-q157",
  subjectId: "chemistry",
  topicId: "chem11-t4",
  questionTypeId: "chem11-qt58",
  content: "Khi tiến hành thí nghiệm nitro hóa benzene, thao tác phù hợp là",
  responseType: "single_choice",
  options: [
    "A. gia nhiệt kiểm soát bằng bể thích hợp trong tủ hút, có PPE.",
    "B. đun bằng ngọn lửa trần.",
    "C. ngửi trực tiếp sản phẩm.",
    "D. cầm ống nghiệm hướng vào người."
  ],
  correctAnswer: "A",
  difficulty: "easy",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: ["chem11-hc-arene-experiments"],
  subTypeId: "chem11-hc-st-arene-experiment",
  practiceRole: "guided",
  representationType: "experiment",
  estimatedSeconds: 50
},
{
  id: "chem11-hc-q158",
  subjectId: "chemistry",
  topicId: "chem11-t4",
  questionTypeId: "chem11-qt58",
  content: "Sản phẩm nitrobenzene thường được mô tả là",
  responseType: "single_choice",
  options: [
    "A. khí không màu.",
    "B. chất lỏng vàng nhạt, sánh như dầu.",
    "C. kết tủa kim loại.",
    "D. tinh thể muối trắng tan hoàn toàn trong nước."
  ],
  correctAnswer: "B",
  difficulty: "easy",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: ["chem11-hc-arene-experiments"],
  subTypeId: "chem11-hc-st-arene-experiment",
  practiceRole: "near_transfer",
  representationType: "equation",
  estimatedSeconds: 50
},
{
  id: "chem11-hc-q159",
  subjectId: "chemistry",
  topicId: "chem11-t4",
  questionTypeId: "chem11-qt58",
  content: "Trong thí nghiệm KMnO4 có đun nóng với hai mẫu benzene và toluene, mẫu cho sự mất màu/biến đổi rõ là",
  responseType: "single_choice",
  options: [
    "A. cả hai như nhau.",
    "B. benzene.",
    "C. toluene.",
    "D. nước cất."
  ],
  correctAnswer: "C",
  difficulty: "easy",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: ["chem11-hc-arene-experiments"],
  subTypeId: "chem11-hc-st-arene-experiment",
  practiceRole: "misconception_check",
  representationType: "table",
  estimatedSeconds: 50
},
{
  id: "chem11-hc-q160",
  subjectId: "chemistry",
  topicId: "chem11-t4",
  questionTypeId: "chem11-qt58",
  content: "Khi khảo sát phản ứng cộng chlorine vào benzene, yêu cầu an toàn quan trọng là",
  responseType: "single_choice",
  options: [
    "A. dùng thật nhiều chlorine ngoài phòng.",
    "B. ngửi để kiểm tra chlorine.",
    "C. chiếu sáng sát dung môi dễ cháy không che chắn.",
    "D. dùng hệ kín/tủ hút, lượng nhỏ và nguồn sáng–nhiệt được kiểm soát theo quy trình."
  ],
  correctAnswer: "D",
  difficulty: "easy",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: ["chem11-hc-arene-experiments"],
  subTypeId: "chem11-hc-st-arene-experiment",
  practiceRole: "mastery_holdout",
  representationType: "experiment",
  estimatedSeconds: 50,
  isMasteryHoldout: true
},
{
  id: "chem11-hc-q161",
  subjectId: "chemistry",
  topicId: "chem11-t4",
  questionTypeId: "chem11-qt58",
  content: "Nguồn nguyên liệu công nghiệp quan trọng để thu arene là",
  responseType: "single_choice",
  options: [
    "A. phân đoạn dầu mỏ và nguồn hydrocarbon thiên nhiên.",
    "B. nước tinh khiết.",
    "C. đá vôi nguyên chất.",
    "D. muối ăn."
  ],
  correctAnswer: "A",
  difficulty: "medium",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: ["chem11-hc-arene-industrial-preparation"],
  subTypeId: "chem11-hc-st-arene-industrial",
  practiceRole: "guided",
  representationType: "equation",
  estimatedSeconds: 70
},
{
  id: "chem11-hc-q162",
  subjectId: "chemistry",
  topicId: "chem11-t4",
  questionTypeId: "chem11-qt58",
  content: "Phương trình reforming cyclohexane đúng là",
  responseType: "single_choice",
  options: [
    "A. C6H12 → C3H6 + C3H6.",
    "B. C6H12 → C6H6 + 3H2.",
    "C. C6H12 + H2 → C6H14.",
    "D. C6H12 → 6C + 6H2."
  ],
  correctAnswer: "B",
  difficulty: "medium",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: ["chem11-hc-arene-industrial-preparation"],
  subTypeId: "chem11-hc-st-arene-industrial",
  practiceRole: "near_transfer",
  representationType: "table",
  estimatedSeconds: 70
},
{
  id: "chem11-hc-q163",
  subjectId: "chemistry",
  topicId: "chem11-t4",
  questionTypeId: "chem11-qt58",
  content: "Nếu n-hexane reforming thành benzene và chỉ có H2 là sản phẩm phụ, phương trình đúng là",
  responseType: "single_choice",
  options: [
    "A. C6H14 → C6H6 + 3H2.",
    "B. C6H14 → C5H6 + CH4.",
    "C. C6H14 → C6H6 + 4H2.",
    "D. C6H14 → C7H8."
  ],
  correctAnswer: "C",
  difficulty: "medium",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: ["chem11-hc-arene-industrial-preparation"],
  subTypeId: "chem11-hc-st-arene-industrial",
  practiceRole: "misconception_check",
  representationType: "experiment",
  estimatedSeconds: 70
},
{
  id: "chem11-hc-q164",
  subjectId: "chemistry",
  topicId: "chem11-t4",
  questionTypeId: "chem11-qt58",
  content: "Điểm phân biệt reforming tạo arene với cracking là",
  responseType: "single_choice",
  options: [
    "A. reforming luôn tạo chất vô cơ.",
    "B. cracking luôn giữ nguyên khung.",
    "C. cả hai hoàn toàn giống nhau.",
    "D. reforming có thể vòng hóa/dehydrogen hóa và giữ số C; cracking bẻ gãy mạch tạo phân tử nhỏ hơn."
  ],
  correctAnswer: "D",
  difficulty: "medium",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: ["chem11-hc-arene-industrial-preparation"],
  subTypeId: "chem11-hc-st-arene-industrial",
  practiceRole: "mastery_holdout",
  representationType: "equation",
  estimatedSeconds: 70,
  isMasteryHoldout: true
},
{
  id: "chem11-hc-q165",
  subjectId: "chemistry",
  topicId: "chem11-t4",
  questionTypeId: "chem11-qt58",
  content: "Styrene được dùng quan trọng làm nguyên liệu sản xuất",
  responseType: "single_choice",
  options: [
    "A. polystyrene.",
    "B. sodium chloride.",
    "C. calcium carbonate.",
    "D. ammonia."
  ],
  correctAnswer: "A",
  difficulty: "medium",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: ["chem11-hc-arene-applications-safety"],
  subTypeId: "chem11-hc-st-arene-application-safety",
  practiceRole: "guided",
  representationType: "table",
  estimatedSeconds: 70
},
{
  id: "chem11-hc-q166",
  subjectId: "chemistry",
  topicId: "chem11-t4",
  questionTypeId: "chem11-qt58",
  content: "Một quy trình đang dùng benzene làm dung môi vệ sinh trong phòng kín. Cải tiến ưu tiên là",
  responseType: "single_choice",
  options: [
    "A. tăng mùi thơm phòng.",
    "B. thay dung môi ít độc hơn, dùng hệ kín và hút cục bộ; PPE là lớp bổ sung.",
    "C. chỉ đeo khẩu trang vải.",
    "D. làm vào cuối ngày rồi khóa phòng."
  ],
  correctAnswer: "B",
  difficulty: "hard",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: ["chem11-hc-arene-applications-safety"],
  subTypeId: "chem11-hc-st-arene-application-safety",
  practiceRole: "far_transfer",
  representationType: "experiment",
  estimatedSeconds: 100
},
{
  id: "chem11-hc-q167",
  subjectId: "chemistry",
  topicId: "chem11-t4",
  questionTypeId: "chem11-qt58",
  content: "Cách xử lí chất thải chứa arene phù hợp là",
  responseType: "single_choice",
  options: [
    "A. pha loãng rồi xả cống.",
    "B. đốt ngoài trời.",
    "C. thu gom kín, dán nhãn và chuyển xử lí chất thải nguy hại theo quy định.",
    "D. để bay hơi tự nhiên."
  ],
  correctAnswer: "C",
  difficulty: "hard",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: ["chem11-hc-arene-applications-safety"],
  subTypeId: "chem11-hc-st-arene-application-safety",
  practiceRole: "misconception_check",
  representationType: "equation",
  estimatedSeconds: 100
},
{
  id: "chem11-hc-q168",
  subjectId: "chemistry",
  topicId: "chem11-t4",
  questionTypeId: "chem11-qt58",
  content: "Phương án đúng đồng thời về nguồn, điều chế, ứng dụng và an toàn là",
  responseType: "single_choice",
  options: [
    "A. arene chỉ từ than; benzene an toàn trong phòng kín.",
    "B. reforming luôn giảm số C; styrene tạo NaCl.",
    "C. xả dung môi arene xuống cống nếu pha loãng.",
    "D. BTX liên quan dầu mỏ; reforming có thể tạo arene; styrene tạo polymer; cần thay thế/hệ kín/thông gió và quản lí chất thải."
  ],
  correctAnswer: "D",
  difficulty: "hard",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: ["chem11-hc-arene-applications-safety"],
  subTypeId: "chem11-hc-st-arene-application-safety",
  practiceRole: "mastery_holdout",
  representationType: "table",
  estimatedSeconds: 100,
  isMasteryHoldout: true
}
];
