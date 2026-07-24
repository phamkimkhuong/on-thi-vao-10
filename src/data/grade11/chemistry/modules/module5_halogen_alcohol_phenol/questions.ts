import type { Question } from '@/types';

export const g11ChemistryHalogenAlcoholPhenolQuestions: Question[] = [
{
  id: "chem11-hal-q001",
  subjectId: "chemistry",
  topicId: "chem11-t5",
  questionTypeId: "chem11-qt59",
  content: "Dẫn xuất halogen là hợp chất hữu cơ thu được khi",
  responseType: "single_choice",
  options: [
    "A. thay một hay nhiều H của hydrocarbon bằng halogen.",
    "B. hòa tan hydrocarbon trong nước muối.",
    "C. thay carbon bằng oxygen.",
    "D. trộn hydrocarbon với ion halide."
  ],
  correctAnswer: "A",
  difficulty: "easy",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: ["chem11-hal-concept-classification"],
  subTypeId: "chem11-hal-st-concept-classification",
  practiceRole: "guided",
  representationType: "text",
  estimatedSeconds: 50
},
{
  id: "chem11-hal-q002",
  subjectId: "chemistry",
  topicId: "chem11-t5",
  questionTypeId: "chem11-qt59",
  content: "Chất nào là dẫn xuất halogen?",
  responseType: "single_choice",
  options: [
    "A. C2H5OH.",
    "B. C2H5Cl.",
    "C. NaCl.",
    "D. HBr."
  ],
  correctAnswer: "B",
  difficulty: "easy",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: ["chem11-hal-concept-classification"],
  subTypeId: "chem11-hal-st-concept-classification",
  practiceRole: "near_transfer",
  representationType: "equation",
  estimatedSeconds: 50
},
{
  id: "chem11-hal-q003",
  subjectId: "chemistry",
  topicId: "chem11-t5",
  questionTypeId: "chem11-qt59",
  content: "CH2Cl2 được phân loại theo số nguyên tử halogen là",
  responseType: "single_choice",
  options: [
    "A. dẫn xuất monohalogen.",
    "B. hydrocarbon.",
    "C. dẫn xuất dihalogen.",
    "D. alcohol."
  ],
  correctAnswer: "C",
  difficulty: "easy",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: ["chem11-hal-concept-classification"],
  subTypeId: "chem11-hal-st-concept-classification",
  practiceRole: "misconception_check",
  representationType: "diagram",
  estimatedSeconds: 50
},
{
  id: "chem11-hal-q004",
  subjectId: "chemistry",
  topicId: "chem11-t5",
  questionTypeId: "chem11-qt59",
  content: "Phát biểu đúng về liên kết halogen trong dẫn xuất halogen là",
  responseType: "single_choice",
  options: [
    "A. halogen luôn tồn tại dưới dạng ion tự do.",
    "B. không có liên kết với carbon.",
    "C. chỉ iodine mới tạo dẫn xuất.",
    "D. halogen liên kết cộng hóa trị với carbon trong phân tử hữu cơ."
  ],
  correctAnswer: "D",
  difficulty: "easy",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: ["chem11-hal-concept-classification"],
  subTypeId: "chem11-hal-st-concept-classification",
  practiceRole: "mastery_holdout",
  representationType: "text",
  estimatedSeconds: 50,
  isMasteryHoldout: true
},
{
  id: "chem11-hal-q005",
  subjectId: "chemistry",
  topicId: "chem11-t5",
  questionTypeId: "chem11-qt59",
  content: "Tên thay thế của CH3CH2Cl là",
  responseType: "single_choice",
  options: [
    "A. chloroethane.",
    "B. chloromethane.",
    "C. 2-chloroethane.",
    "D. ethane chloride."
  ],
  correctAnswer: "A",
  difficulty: "medium",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: ["chem11-hal-nomenclature"],
  subTypeId: "chem11-hal-st-substitutive-name",
  practiceRole: "guided",
  representationType: "equation",
  estimatedSeconds: 75
},
{
  id: "chem11-hal-q006",
  subjectId: "chemistry",
  topicId: "chem11-t5",
  questionTypeId: "chem11-qt59",
  content: "Tên thay thế của CH3CHBrCH3 là",
  responseType: "single_choice",
  options: [
    "A. 1-bromopropane.",
    "B. 2-bromopropane.",
    "C. bromobutane.",
    "D. 2-bromoethane."
  ],
  correctAnswer: "B",
  difficulty: "medium",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: ["chem11-hal-nomenclature"],
  subTypeId: "chem11-hal-st-substitutive-name",
  practiceRole: "near_transfer",
  representationType: "diagram",
  estimatedSeconds: 75
},
{
  id: "chem11-hal-q007",
  subjectId: "chemistry",
  topicId: "chem11-t5",
  questionTypeId: "chem11-qt59",
  content: "ClCH2CH2CH3 có tên là",
  responseType: "single_choice",
  options: [
    "A. 3-chloropropane.",
    "B. 2-chloropropane.",
    "C. 1-chloropropane.",
    "D. chlorobutane."
  ],
  correctAnswer: "C",
  difficulty: "medium",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: ["chem11-hal-nomenclature"],
  subTypeId: "chem11-hal-st-substitutive-name",
  practiceRole: "misconception_check",
  representationType: "text",
  estimatedSeconds: 75
},
{
  id: "chem11-hal-q008",
  subjectId: "chemistry",
  topicId: "chem11-t5",
  questionTypeId: "chem11-qt59",
  content: "Tên đúng của CH3CHClCH2CH3 là",
  responseType: "single_choice",
  options: [
    "A. 3-chlorobutane.",
    "B. 1-chlorobutane.",
    "C. 2-chloropropane.",
    "D. 2-chlorobutane."
  ],
  correctAnswer: "D",
  difficulty: "medium",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: ["chem11-hal-nomenclature"],
  subTypeId: "chem11-hal-st-substitutive-name",
  practiceRole: "mastery_holdout",
  representationType: "equation",
  estimatedSeconds: 75,
  isMasteryHoldout: true
},
{
  id: "chem11-hal-q009",
  subjectId: "chemistry",
  topicId: "chem11-t5",
  questionTypeId: "chem11-qt59",
  content: "Chloroform có công thức là",
  responseType: "single_choice",
  options: [
    "A. CHCl3.",
    "B. CH2Cl2.",
    "C. CCl4.",
    "D. CH3Cl."
  ],
  correctAnswer: "A",
  difficulty: "medium",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: ["chem11-hal-common-names"],
  subTypeId: "chem11-hal-st-common-name",
  practiceRole: "guided",
  representationType: "diagram",
  estimatedSeconds: 75
},
{
  id: "chem11-hal-q010",
  subjectId: "chemistry",
  topicId: "chem11-t5",
  questionTypeId: "chem11-qt59",
  content: "X và Y lần lượt thu được khi thay ba và bốn nguyên tử H của methane bằng Cl. Cặp công thức–tên đúng là",
  responseType: "single_choice",
  options: [
    "A. X=CH2Cl2–chloroform; Y=CHCl3–carbon tetrachloride.",
    "B. X=CHCl3–trichloromethane/chloroform; Y=CCl4–tetrachloromethane/carbon tetrachloride.",
    "C. X=CCl4–chloroform; Y=CH3Cl–carbon tetrachloride.",
    "D. X=CH3Cl–methyl chloride; Y=CH2Cl2–chloroform."
  ],
  correctAnswer: "B",
  difficulty: "hard",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: ["chem11-hal-common-names"],
  subTypeId: "chem11-hal-st-common-name",
  practiceRole: "far_transfer",
  representationType: "text",
  estimatedSeconds: 110
},
{
  id: "chem11-hal-q011",
  subjectId: "chemistry",
  topicId: "chem11-t5",
  questionTypeId: "chem11-qt59",
  content: "Phân biệt vinyl chloride và ethyl chloride bằng cấu tạo, phát biểu đúng là",
  responseType: "single_choice",
  options: [
    "A. cả hai đều có công thức CH3CH2Cl.",
    "B. vinyl chloride no còn ethyl chloride có C=C.",
    "C. vinyl chloride là CH2=CHCl có C=C; ethyl chloride là CH3CH2Cl no.",
    "D. cả hai đều là tên của CHCl3."
  ],
  correctAnswer: "C",
  difficulty: "hard",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: ["chem11-hal-common-names"],
  subTypeId: "chem11-hal-st-common-name",
  practiceRole: "misconception_check",
  representationType: "equation",
  estimatedSeconds: 110
},
{
  id: "chem11-hal-q012",
  subjectId: "chemistry",
  topicId: "chem11-t5",
  questionTypeId: "chem11-qt59",
  content: "Một bảng nhãn ghi: (1) methyl chloride, (2) chloroform, (3) vinyl chloride. Bộ công thức nào đúng đồng thời cả ba nhãn?",
  responseType: "single_choice",
  options: [
    "A. (1) CH2Cl2; (2) CCl4; (3) CH3CH2Cl.",
    "B. (1) CHCl3; (2) CH2Cl2; (3) CH3Cl.",
    "C. (1) CH3CH2Cl; (2) CCl4; (3) CH2Cl2.",
    "D. (1) CH3Cl; (2) CHCl3; (3) CH2=CHCl."
  ],
  correctAnswer: "D",
  difficulty: "hard",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: ["chem11-hal-common-names"],
  subTypeId: "chem11-hal-st-common-name",
  practiceRole: "mastery_holdout",
  representationType: "diagram",
  estimatedSeconds: 110,
  isMasteryHoldout: true
},
{
  id: "chem11-hal-q013",
  subjectId: "chemistry",
  topicId: "chem11-t5",
  questionTypeId: "chem11-qt60",
  content: "Số đồng phân cấu tạo monohalogen của C3H7Cl là",
  responseType: "single_choice",
  options: [
    "A. 2.",
    "B. 1.",
    "C. 3.",
    "D. 4."
  ],
  correctAnswer: "A",
  difficulty: "easy",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: ["chem11-hal-structural-isomers"],
  subTypeId: "chem11-hal-st-structural-isomer",
  practiceRole: "guided",
  representationType: "diagram",
  estimatedSeconds: 50
},
{
  id: "chem11-hal-q014",
  subjectId: "chemistry",
  topicId: "chem11-t5",
  questionTypeId: "chem11-qt60",
  content: "Công thức của 2-chloropropane là",
  responseType: "single_choice",
  options: [
    "A. CH3CH2CH2Cl.",
    "B. CH3CHClCH3.",
    "C. CH2ClCH2Cl.",
    "D. CH3CH2Cl."
  ],
  correctAnswer: "B",
  difficulty: "easy",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: ["chem11-hal-structural-isomers"],
  subTypeId: "chem11-hal-st-structural-isomer",
  practiceRole: "near_transfer",
  representationType: "table",
  estimatedSeconds: 50
},
{
  id: "chem11-hal-q015",
  subjectId: "chemistry",
  topicId: "chem11-t5",
  questionTypeId: "chem11-qt60",
  content: "Số đồng phân cấu tạo của C4H9Cl là",
  responseType: "single_choice",
  options: [
    "A. 2.",
    "B. 3.",
    "C. 4.",
    "D. 5."
  ],
  correctAnswer: "C",
  difficulty: "easy",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: ["chem11-hal-structural-isomers"],
  subTypeId: "chem11-hal-st-structural-isomer",
  practiceRole: "misconception_check",
  representationType: "text",
  estimatedSeconds: 50
},
{
  id: "chem11-hal-q016",
  subjectId: "chemistry",
  topicId: "chem11-t5",
  questionTypeId: "chem11-qt60",
  content: "Cặp nào chỉ là hai cách viết của cùng một chất, không phải đồng phân?",
  responseType: "single_choice",
  options: [
    "A. CH3CH2CH2Cl và CH3CHClCH3.",
    "B. (CH3)3CCl và (CH3)2CHCH2Cl.",
    "C. CH3CH2Cl và CH3CH2CH2Cl.",
    "D. ClCH2CH2CH3 và CH3CH2CH2Cl."
  ],
  correctAnswer: "D",
  difficulty: "easy",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: ["chem11-hal-structural-isomers"],
  subTypeId: "chem11-hal-st-structural-isomer",
  practiceRole: "mastery_holdout",
  representationType: "diagram",
  estimatedSeconds: 50,
  isMasteryHoldout: true
},
{
  id: "chem11-hal-q017",
  subjectId: "chemistry",
  topicId: "chem11-t5",
  questionTypeId: "chem11-qt60",
  content: "Đặc điểm thường gặp của nhiều dẫn xuất halogen là",
  responseType: "single_choice",
  options: [
    "A. ít tan trong nước nhưng tan trong dung môi hữu cơ.",
    "B. luôn tan vô hạn trong nước.",
    "C. đều là chất khí.",
    "D. đều nhẹ hơn nước."
  ],
  correctAnswer: "A",
  difficulty: "medium",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: ["chem11-hal-physical-properties"],
  subTypeId: "chem11-hal-st-physical-basic",
  practiceRole: "guided",
  representationType: "table",
  estimatedSeconds: 75
},
{
  id: "chem11-hal-q018",
  subjectId: "chemistry",
  topicId: "chem11-t5",
  questionTypeId: "chem11-qt60",
  content: "CHCl3 có khối lượng riêng khoảng 1,49 g/mL và ít tan trong nước. Khi trộn rồi để yên, CHCl3 tạo",
  responseType: "single_choice",
  options: [
    "A. lớp trên.",
    "B. lớp dưới.",
    "C. dung dịch đồng nhất.",
    "D. kết tủa rắn."
  ],
  correctAnswer: "B",
  difficulty: "medium",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: ["chem11-hal-physical-properties"],
  subTypeId: "chem11-hal-st-physical-basic",
  practiceRole: "near_transfer",
  representationType: "text",
  estimatedSeconds: 75
},
{
  id: "chem11-hal-q019",
  subjectId: "chemistry",
  topicId: "chem11-t5",
  questionTypeId: "chem11-qt60",
  content: "Một dẫn xuất có nhiệt độ nóng chảy −20 °C và sôi 65 °C. Ở 25 °C chất đó chủ yếu là",
  responseType: "single_choice",
  options: [
    "A. rắn.",
    "B. khí.",
    "C. lỏng.",
    "D. plasma."
  ],
  correctAnswer: "C",
  difficulty: "medium",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: ["chem11-hal-physical-properties"],
  subTypeId: "chem11-hal-st-physical-basic",
  practiceRole: "misconception_check",
  representationType: "diagram",
  estimatedSeconds: 75
},
{
  id: "chem11-hal-q020",
  subjectId: "chemistry",
  topicId: "chem11-t5",
  questionTypeId: "chem11-qt60",
  content: "Phát biểu đúng nhất về khối lượng riêng của dẫn xuất halogen là",
  responseType: "single_choice",
  options: [
    "A. tất cả đều nhỏ hơn nước.",
    "B. tất cả đều đúng bằng nước.",
    "C. chỉ chất có iodine mới nặng hơn nước.",
    "D. phải xét từng chất; nhiều dẫn xuất chứa halogen nặng hoặc đa halogen có thể nặng hơn nước."
  ],
  correctAnswer: "D",
  difficulty: "medium",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: ["chem11-hal-physical-properties"],
  subTypeId: "chem11-hal-st-physical-basic",
  practiceRole: "mastery_holdout",
  representationType: "table",
  estimatedSeconds: 75,
  isMasteryHoldout: true
},
{
  id: "chem11-hal-q021",
  subjectId: "chemistry",
  topicId: "chem11-t5",
  questionTypeId: "chem11-qt60",
  content: "Nhiệt độ sôi của CH3Cl, CH3Br, CH3I lần lượt khoảng −24 °C, 4 °C, 42 °C. Xu hướng đúng là",
  responseType: "single_choice",
  options: [
    "A. tăng từ chloride đến iodide.",
    "B. giảm dần.",
    "C. không đổi.",
    "D. chỉ phụ thuộc số carbon nên phải bằng nhau."
  ],
  correctAnswer: "A",
  difficulty: "medium",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: ["chem11-hal-structure-property-data"],
  subTypeId: "chem11-hal-st-physical-data",
  practiceRole: "guided",
  representationType: "text",
  estimatedSeconds: 75
},
{
  id: "chem11-hal-q022",
  subjectId: "chemistry",
  topicId: "chem11-t5",
  questionTypeId: "chem11-qt60",
  content: "Ở 25 °C, dựa vào nhiệt độ sôi trên và giả sử nhiệt độ nóng chảy đều thấp hơn 25 °C, chất ở trạng thái lỏng là",
  responseType: "single_choice",
  options: [
    "A. CH3Cl và CH3Br.",
    "B. CH3I.",
    "C. cả ba.",
    "D. không chất nào."
  ],
  correctAnswer: "B",
  difficulty: "hard",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: ["chem11-hal-structure-property-data"],
  subTypeId: "chem11-hal-st-physical-data",
  practiceRole: "far_transfer",
  representationType: "diagram",
  estimatedSeconds: 110
},
{
  id: "chem11-hal-q023",
  subjectId: "chemistry",
  topicId: "chem11-t5",
  questionTypeId: "chem11-qt60",
  content: "Dữ liệu: CH2Cl2 có d≈1,33; CHCl3 d≈1,49; CCl4 d≈1,59 g/mL. Kết luận phù hợp là",
  responseType: "single_choice",
  options: [
    "A. cả ba nổi trên nước.",
    "B. cả ba tan vô hạn trong nước.",
    "C. nếu không tan đáng kể, cả ba tạo lớp dưới nước.",
    "D. CCl4 nhẹ nhất nên nổi."
  ],
  correctAnswer: "C",
  difficulty: "hard",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: ["chem11-hal-structure-property-data"],
  subTypeId: "chem11-hal-st-physical-data",
  practiceRole: "misconception_check",
  representationType: "table",
  estimatedSeconds: 110
},
{
  id: "chem11-hal-q024",
  subjectId: "chemistry",
  topicId: "chem11-t5",
  questionTypeId: "chem11-qt60",
  content: "Hai chất A và B ít tan trong nước. A có d=0,90, B có d=1,40 g/mL. Sau khi lắc riêng với nước rồi để yên, mô tả đúng là",
  responseType: "single_choice",
  options: [
    "A. cả A và B ở lớp trên.",
    "B. cả A và B ở lớp dưới.",
    "C. A và B đều tan hết.",
    "D. A ở lớp trên, B ở lớp dưới; cần dữ liệu khối lượng riêng chứ không chỉ biết chúng là dẫn xuất halogen."
  ],
  correctAnswer: "D",
  difficulty: "hard",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: ["chem11-hal-structure-property-data"],
  subTypeId: "chem11-hal-st-physical-data",
  practiceRole: "mastery_holdout",
  representationType: "text",
  estimatedSeconds: 110,
  isMasteryHoldout: true
},
{
  id: "chem11-hal-q025",
  subjectId: "chemistry",
  topicId: "chem11-t5",
  questionTypeId: "chem11-qt61",
  content: "C2H5Br tác dụng NaOH trong nước, đun nóng thích hợp, sản phẩm hữu cơ là",
  responseType: "single_choice",
  options: [
    "A. C2H5OH.",
    "B. CH2=CH2.",
    "C. C2H6.",
    "D. CH3CHO."
  ],
  correctAnswer: "A",
  difficulty: "easy",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: ["chem11-hal-substitution-hydroxide"],
  subTypeId: "chem11-hal-st-substitution-oh",
  practiceRole: "guided",
  representationType: "equation",
  estimatedSeconds: 50
},
{
  id: "chem11-hal-q026",
  subjectId: "chemistry",
  topicId: "chem11-t5",
  questionTypeId: "chem11-qt61",
  content: "CH3Cl + NaOH (nước) tạo sản phẩm hữu cơ là",
  responseType: "single_choice",
  options: [
    "A. methane.",
    "B. methanol.",
    "C. ethene.",
    "D. formaldehyde."
  ],
  correctAnswer: "B",
  difficulty: "easy",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: ["chem11-hal-substitution-hydroxide"],
  subTypeId: "chem11-hal-st-substitution-oh",
  practiceRole: "near_transfer",
  representationType: "experiment",
  estimatedSeconds: 50
},
{
  id: "chem11-hal-q027",
  subjectId: "chemistry",
  topicId: "chem11-t5",
  questionTypeId: "chem11-qt61",
  content: "Phản ứng R–Br + OH− → R–OH + Br− thuộc loại",
  responseType: "single_choice",
  options: [
    "A. phản ứng cộng.",
    "B. phản ứng trùng hợp.",
    "C. phản ứng thế.",
    "D. phản ứng cháy."
  ],
  correctAnswer: "C",
  difficulty: "easy",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: ["chem11-hal-substitution-hydroxide"],
  subTypeId: "chem11-hal-st-substitution-oh",
  practiceRole: "misconception_check",
  representationType: "table",
  estimatedSeconds: 50
},
{
  id: "chem11-hal-q028",
  subjectId: "chemistry",
  topicId: "chem11-t5",
  questionTypeId: "chem11-qt61",
  content: "Phương trình ion khái quát đúng cho phản ứng thế là",
  responseType: "single_choice",
  options: [
    "A. R–X + H+ → RH + X+.",
    "B. R–X + X− → R–R.",
    "C. R–X → R+ + X.",
    "D. R–X + OH− → R–OH + X−."
  ],
  correctAnswer: "D",
  difficulty: "easy",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: ["chem11-hal-substitution-hydroxide"],
  subTypeId: "chem11-hal-st-substitution-oh",
  practiceRole: "mastery_holdout",
  representationType: "equation",
  estimatedSeconds: 50,
  isMasteryHoldout: true
},
{
  id: "chem11-hal-q029",
  subjectId: "chemistry",
  topicId: "chem11-t5",
  questionTypeId: "chem11-qt61",
  content: "Trình tự phù hợp để chứng minh ethyl bromide đã thủy phân tạo Br− là",
  responseType: "single_choice",
  options: [
    "A. đun với NaOH, acid hóa phần nước bằng HNO3, rồi thêm AgNO3.",
    "B. thêm AgNO3 trực tiếp vào ethyl bromide khan.",
    "C. thêm HCl rồi NaCl.",
    "D. đốt mẫu và ngửi khí."
  ],
  correctAnswer: "A",
  difficulty: "medium",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: ["chem11-hal-hydrolysis-experiment"],
  subTypeId: "chem11-hal-st-hydrolysis-experiment",
  practiceRole: "guided",
  representationType: "experiment",
  estimatedSeconds: 75
},
{
  id: "chem11-hal-q030",
  subjectId: "chemistry",
  topicId: "chem11-t5",
  questionTypeId: "chem11-qt61",
  content: "Khi thêm AgNO3 vào dung dịch đã thủy phân ethyl bromide và acid hóa đúng, hiện tượng đặc trưng là",
  responseType: "single_choice",
  options: [
    "A. khí màu nâu.",
    "B. kết tủa AgBr vàng nhạt.",
    "C. dung dịch xanh lam.",
    "D. không thể có hiện tượng."
  ],
  correctAnswer: "B",
  difficulty: "medium",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: ["chem11-hal-hydrolysis-experiment"],
  subTypeId: "chem11-hal-st-hydrolysis-experiment",
  practiceRole: "near_transfer",
  representationType: "table",
  estimatedSeconds: 75
},
{
  id: "chem11-hal-q031",
  subjectId: "chemistry",
  topicId: "chem11-t5",
  questionTypeId: "chem11-qt61",
  content: "Mục đích chính của bước acid hóa bằng HNO3 trước AgNO3 là",
  responseType: "single_choice",
  options: [
    "A. tạo thêm ethyl bromide.",
    "B. hòa tan alcohol.",
    "C. trung hòa OH−/loại nhiễu có thể tạo kết tủa với Ag+ mà không thêm ion halide mới.",
    "D. tạo chlorine."
  ],
  correctAnswer: "C",
  difficulty: "medium",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: ["chem11-hal-hydrolysis-experiment"],
  subTypeId: "chem11-hal-st-hydrolysis-experiment",
  practiceRole: "misconception_check",
  representationType: "equation",
  estimatedSeconds: 75
},
{
  id: "chem11-hal-q032",
  subjectId: "chemistry",
  topicId: "chem11-t5",
  questionTypeId: "chem11-qt61",
  content: "Vì sao không nên kết luận thủy phân chỉ bằng cách nhỏ AgNO3 trực tiếp vào lớp ethyl bromide ban đầu?",
  responseType: "single_choice",
  options: [
    "A. AgNO3 luôn không tan trong nước.",
    "B. Br không tồn tại trong phân tử.",
    "C. ethyl bromide là alcohol.",
    "D. Br đang liên kết cộng hóa trị; cần thủy phân giải phóng Br− vào pha nước theo quy trình."
  ],
  correctAnswer: "D",
  difficulty: "medium",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: ["chem11-hal-hydrolysis-experiment"],
  subTypeId: "chem11-hal-st-hydrolysis-experiment",
  practiceRole: "mastery_holdout",
  representationType: "experiment",
  estimatedSeconds: 75,
  isMasteryHoldout: true
},
{
  id: "chem11-hal-q033",
  subjectId: "chemistry",
  topicId: "chem11-t5",
  questionTypeId: "chem11-qt61",
  content: "Thủy phân hoàn toàn 0,10 mol một dẫn xuất monobromide tạo tối đa số mol alcohol là",
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
  outcomeIds: ["chem11-hal-reaction-pathway-selection"],
  subTypeId: "chem11-hal-st-substitution-data",
  practiceRole: "guided",
  representationType: "table",
  estimatedSeconds: 75
},
{
  id: "chem11-hal-q034",
  subjectId: "chemistry",
  topicId: "chem11-t5",
  questionTypeId: "chem11-qt61",
  content: "Thủy phân 0,20 mol bromoethane với hiệu suất 75%. Số mol ethanol thu được là",
  responseType: "single_choice",
  options: [
    "A. 0,05.",
    "B. 0,15.",
    "C. 0,20.",
    "D. 0,27."
  ],
  correctAnswer: "B",
  difficulty: "hard",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: ["chem11-hal-reaction-pathway-selection"],
  subTypeId: "chem11-hal-st-substitution-data",
  practiceRole: "far_transfer",
  representationType: "equation",
  estimatedSeconds: 110
},
{
  id: "chem11-hal-q035",
  subjectId: "chemistry",
  topicId: "chem11-t5",
  questionTypeId: "chem11-qt61",
  content: "Sau thủy phân hoàn toàn một monobromide, lượng Br− tạo 18,8 g AgBr (M=188 g/mol). Số mol monobromide đã phản ứng là",
  responseType: "single_choice",
  options: [
    "A. 0,20.",
    "B. 0,05.",
    "C. 0,10.",
    "D. 1,00."
  ],
  correctAnswer: "C",
  difficulty: "hard",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: ["chem11-hal-reaction-pathway-selection"],
  subTypeId: "chem11-hal-st-substitution-data",
  practiceRole: "misconception_check",
  representationType: "experiment",
  estimatedSeconds: 110
},
{
  id: "chem11-hal-q036",
  subjectId: "chemistry",
  topicId: "chem11-t5",
  questionTypeId: "chem11-qt61",
  content: "Hỗn hợp 0,15 mol chloroethane và bromoethane được thủy phân hoàn toàn. Kết tủa AgCl (M=143,5) và AgBr (M=188) có tổng khối lượng 25,53 g. Số mol bromoethane là",
  responseType: "single_choice",
  options: [
    "A. 0,03.",
    "B. 0,06.",
    "C. 0,12.",
    "D. 0,09."
  ],
  correctAnswer: "D",
  difficulty: "hard",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: ["chem11-hal-reaction-pathway-selection"],
  subTypeId: "chem11-hal-st-substitution-data",
  practiceRole: "mastery_holdout",
  representationType: "table",
  estimatedSeconds: 110,
  isMasteryHoldout: true
},
{
  id: "chem11-hal-q037",
  subjectId: "chemistry",
  topicId: "chem11-t5",
  questionTypeId: "chem11-qt62",
  content: "Bromoethane tác dụng KOH trong alcohol, đun nóng, tạo sản phẩm hữu cơ chính là",
  responseType: "single_choice",
  options: [
    "A. ethene.",
    "B. ethanol.",
    "C. ethane.",
    "D. ethanal."
  ],
  correctAnswer: "A",
  difficulty: "easy",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: ["chem11-hal-elimination-hx"],
  subTypeId: "chem11-hal-st-elimination-basic",
  practiceRole: "guided",
  representationType: "equation",
  estimatedSeconds: 50
},
{
  id: "chem11-hal-q038",
  subjectId: "chemistry",
  topicId: "chem11-t5",
  questionTypeId: "chem11-qt62",
  content: "Trong phản ứng tách HX, H bị tách khỏi",
  responseType: "single_choice",
  options: [
    "A. chính nguyên tử halogen.",
    "B. carbon beta kề carbon mang X.",
    "C. carbon bất kì không cần kề.",
    "D. nhóm hydroxide."
  ],
  correctAnswer: "B",
  difficulty: "easy",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: ["chem11-hal-elimination-hx"],
  subTypeId: "chem11-hal-st-elimination-basic",
  practiceRole: "near_transfer",
  representationType: "diagram",
  estimatedSeconds: 50
},
{
  id: "chem11-hal-q039",
  subjectId: "chemistry",
  topicId: "chem11-t5",
  questionTypeId: "chem11-qt62",
  content: "2-Bromopropane tách HBr tạo",
  responseType: "single_choice",
  options: [
    "A. propane.",
    "B. propan-2-ol.",
    "C. propene.",
    "D. propyne."
  ],
  correctAnswer: "C",
  difficulty: "easy",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: ["chem11-hal-elimination-hx"],
  subTypeId: "chem11-hal-st-elimination-basic",
  practiceRole: "misconception_check",
  representationType: "table",
  estimatedSeconds: 50
},
{
  id: "chem11-hal-q040",
  subjectId: "chemistry",
  topicId: "chem11-t5",
  questionTypeId: "chem11-qt62",
  content: "Điều kiện ưu tiên phản ứng tách trong phạm vi bài học là",
  responseType: "single_choice",
  options: [
    "A. NaOH trong nước lạnh.",
    "B. nước tinh khiết.",
    "C. AgNO3/HNO3.",
    "D. KOH trong alcohol, đun nóng."
  ],
  correctAnswer: "D",
  difficulty: "easy",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: ["chem11-hal-elimination-hx"],
  subTypeId: "chem11-hal-st-elimination-basic",
  practiceRole: "mastery_holdout",
  representationType: "equation",
  estimatedSeconds: 50,
  isMasteryHoldout: true
},
{
  id: "chem11-hal-q041",
  subjectId: "chemistry",
  topicId: "chem11-t5",
  questionTypeId: "chem11-qt62",
  content: "2-Bromobutane tách HBr theo Zaisev cho sản phẩm chính là",
  responseType: "single_choice",
  options: [
    "A. but-2-ene.",
    "B. but-1-ene.",
    "C. butane.",
    "D. butan-2-ol."
  ],
  correctAnswer: "A",
  difficulty: "medium",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: ["chem11-hal-zaitsev-rule"],
  subTypeId: "chem11-hal-st-zaitsev-product",
  practiceRole: "guided",
  representationType: "diagram",
  estimatedSeconds: 75
},
{
  id: "chem11-hal-q042",
  subjectId: "chemistry",
  topicId: "chem11-t5",
  questionTypeId: "chem11-qt62",
  content: "2-Chloropentane tách HCl, alkene chính theo Zaisev là",
  responseType: "single_choice",
  options: [
    "A. pent-1-ene.",
    "B. pent-2-ene.",
    "C. cyclopentane.",
    "D. pentan-2-ol."
  ],
  correctAnswer: "B",
  difficulty: "medium",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: ["chem11-hal-zaitsev-rule"],
  subTypeId: "chem11-hal-st-zaitsev-product",
  practiceRole: "near_transfer",
  representationType: "table",
  estimatedSeconds: 75
},
{
  id: "chem11-hal-q043",
  subjectId: "chemistry",
  topicId: "chem11-t5",
  questionTypeId: "chem11-qt62",
  content: "CH3–CH(CH3)–CHBr–CH3 tách HBr, sản phẩm chính là",
  responseType: "single_choice",
  options: [
    "A. 3-methylbut-1-ene.",
    "B. 2-methylbutane.",
    "C. 2-methylbut-2-ene.",
    "D. 2-methylbutan-2-ol."
  ],
  correctAnswer: "C",
  difficulty: "medium",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: ["chem11-hal-zaitsev-rule"],
  subTypeId: "chem11-hal-st-zaitsev-product",
  practiceRole: "misconception_check",
  representationType: "equation",
  estimatedSeconds: 75
},
{
  id: "chem11-hal-q044",
  subjectId: "chemistry",
  topicId: "chem11-t5",
  questionTypeId: "chem11-qt62",
  content: "Cách dùng quy tắc Zaisev đúng là",
  responseType: "single_choice",
  options: [
    "A. luôn chọn alkene có số carbon ít nhất.",
    "B. luôn chọn nối đôi đầu mạch.",
    "C. chọn bất kì alkene cùng CTPT.",
    "D. chỉ trong các alkene có thể tạo từ alpha–beta, ưu tiên alkene thế nhiều hơn."
  ],
  correctAnswer: "D",
  difficulty: "medium",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: ["chem11-hal-zaitsev-rule"],
  subTypeId: "chem11-hal-st-zaitsev-product",
  practiceRole: "mastery_holdout",
  representationType: "diagram",
  estimatedSeconds: 75,
  isMasteryHoldout: true
},
{
  id: "chem11-hal-q045",
  subjectId: "chemistry",
  topicId: "chem11-t5",
  questionTypeId: "chem11-qt62",
  content: "Để chuyển 1-bromopropane chủ yếu thành propan-1-ol, nên dùng",
  responseType: "single_choice",
  options: [
    "A. NaOH trong nước, điều kiện thích hợp.",
    "B. KOH trong alcohol, đun nóng.",
    "C. H2/Ni.",
    "D. Br2/ánh sáng."
  ],
  correctAnswer: "A",
  difficulty: "medium",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: ["chem11-hal-reaction-pathway-selection"],
  subTypeId: "chem11-hal-st-pathway-selection",
  practiceRole: "guided",
  representationType: "table",
  estimatedSeconds: 75
},
{
  id: "chem11-hal-q046",
  subjectId: "chemistry",
  topicId: "chem11-t5",
  questionTypeId: "chem11-qt62",
  content: "Chuỗi CH2=CH2 → CH3CH2Br → CH2=CH2 dùng lần lượt tác nhân phù hợp là",
  responseType: "single_choice",
  options: [
    "A. H2 rồi NaOH nước.",
    "B. HBr rồi KOH/alcohol, đun nóng.",
    "C. Br2 rồi AgNO3.",
    "D. H2O rồi HCl."
  ],
  correctAnswer: "B",
  difficulty: "hard",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: ["chem11-hal-reaction-pathway-selection"],
  subTypeId: "chem11-hal-st-pathway-selection",
  practiceRole: "far_transfer",
  representationType: "equation",
  estimatedSeconds: 110
},
{
  id: "chem11-hal-q047",
  subjectId: "chemistry",
  topicId: "chem11-t5",
  questionTypeId: "chem11-qt62",
  content: "Dẫn xuất C4H9Br nào khi tách HBr chỉ cho một alkene cấu tạo là 2-methylpropene?",
  responseType: "single_choice",
  options: [
    "A. 1-bromobutane.",
    "B. 2-bromobutane.",
    "C. 2-bromo-2-methylpropane.",
    "D. 1-bromo-2-methylpropane và 2-bromobutane đều chỉ cho sản phẩm đó."
  ],
  correctAnswer: "C",
  difficulty: "hard",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: ["chem11-hal-reaction-pathway-selection"],
  subTypeId: "chem11-hal-st-pathway-selection",
  practiceRole: "misconception_check",
  representationType: "diagram",
  estimatedSeconds: 110
},
{
  id: "chem11-hal-q048",
  subjectId: "chemistry",
  topicId: "chem11-t5",
  questionTypeId: "chem11-qt62",
  content: "Cho 0,20 mol 2-bromobutane phản ứng tách với hiệu suất 80%. Tổng số mol alkene tạo thành và khối lượng KBr (M=119 g/mol) tương ứng là",
  responseType: "single_choice",
  options: [
    "A. 0,20 mol và 23,80 g.",
    "B. 0,16 mol và 23,80 g.",
    "C. 0,20 mol và 19,04 g.",
    "D. 0,16 mol và 19,04 g."
  ],
  correctAnswer: "D",
  difficulty: "hard",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: ["chem11-hal-reaction-pathway-selection"],
  subTypeId: "chem11-hal-st-pathway-selection",
  practiceRole: "mastery_holdout",
  representationType: "table",
  estimatedSeconds: 110,
  isMasteryHoldout: true
},
{
  id: "chem11-hal-q049",
  subjectId: "chemistry",
  topicId: "chem11-t5",
  questionTypeId: "chem11-qt63",
  content: "Vinyl chloride CH2=CHCl là nguyên liệu để sản xuất",
  responseType: "single_choice",
  options: [
    "A. PVC.",
    "B. polyethylene.",
    "C. starch.",
    "D. sodium chloride."
  ],
  correctAnswer: "A",
  difficulty: "easy",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: ["chem11-hal-applications"],
  subTypeId: "chem11-hal-st-applications",
  practiceRole: "guided",
  representationType: "table",
  estimatedSeconds: 50
},
{
  id: "chem11-hal-q050",
  subjectId: "chemistry",
  topicId: "chem11-t5",
  questionTypeId: "chem11-qt63",
  content: "Quan hệ đúng giữa vinyl chloride và PVC là",
  responseType: "single_choice",
  options: [
    "A. cả hai là cùng một phân tử nhỏ.",
    "B. vinyl chloride là monomer, PVC là polymer.",
    "C. PVC là monomer của vinyl chloride.",
    "D. không liên quan."
  ],
  correctAnswer: "B",
  difficulty: "easy",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: ["chem11-hal-applications"],
  subTypeId: "chem11-hal-st-applications",
  practiceRole: "near_transfer",
  representationType: "diagram",
  estimatedSeconds: 50
},
{
  id: "chem11-hal-q051",
  subjectId: "chemistry",
  topicId: "chem11-t5",
  questionTypeId: "chem11-qt63",
  content: "Nhận định đúng về ứng dụng dẫn xuất halogen là",
  responseType: "single_choice",
  options: [
    "A. chỉ dùng làm môi chất lạnh.",
    "B. tất cả đều dùng trực tiếp trong gia đình.",
    "C. có thể làm dung môi/nguyên liệu tổng hợp, polymer, dược chất hoặc môi chất tùy chất.",
    "D. mọi chất đều an toàn như nhau."
  ],
  correctAnswer: "C",
  difficulty: "easy",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: ["chem11-hal-applications"],
  subTypeId: "chem11-hal-st-applications",
  practiceRole: "misconception_check",
  representationType: "text",
  estimatedSeconds: 50
},
{
  id: "chem11-hal-q052",
  subjectId: "chemistry",
  topicId: "chem11-t5",
  questionTypeId: "chem11-qt63",
  content: "Phương án ghép đúng là",
  responseType: "single_choice",
  options: [
    "A. vinyl chloride–muối ăn.",
    "B. PVC–monomer khí.",
    "C. CFC–hoàn toàn vô hại.",
    "D. vinyl chloride–monomer PVC; một số dẫn xuất–dung môi/nguyên liệu hoặc môi chất chuyên dụng."
  ],
  correctAnswer: "D",
  difficulty: "easy",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: ["chem11-hal-applications"],
  subTypeId: "chem11-hal-st-applications",
  practiceRole: "mastery_holdout",
  representationType: "table",
  estimatedSeconds: 50,
  isMasteryHoldout: true
},
{
  id: "chem11-hal-q053",
  subjectId: "chemistry",
  topicId: "chem11-t5",
  questionTypeId: "chem11-qt63",
  content: "CFC có thể đến tầng bình lưu chủ yếu vì",
  responseType: "single_choice",
  options: [
    "A. khá bền trong tầng khí quyển thấp.",
    "B. tan hoàn toàn trong mưa ngay lập tức.",
    "C. phản ứng hết trong máy lạnh.",
    "D. luôn nặng nên chìm xuống đất."
  ],
  correctAnswer: "A",
  difficulty: "medium",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: ["chem11-hal-cfc-safety-responsibility"],
  subTypeId: "chem11-hal-st-cfc-impact",
  practiceRole: "guided",
  representationType: "diagram",
  estimatedSeconds: 75
},
{
  id: "chem11-hal-q054",
  subjectId: "chemistry",
  topicId: "chem11-t5",
  questionTypeId: "chem11-qt63",
  content: "Ở tầng bình lưu, tác nhân khởi đầu giải phóng chlorine hoạt động từ CFC là",
  responseType: "single_choice",
  options: [
    "A. nước muối.",
    "B. bức xạ tử ngoại.",
    "C. oxygen lỏng.",
    "D. nitrogen trong đất."
  ],
  correctAnswer: "B",
  difficulty: "medium",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: ["chem11-hal-cfc-safety-responsibility"],
  subTypeId: "chem11-hal-st-cfc-impact",
  practiceRole: "near_transfer",
  representationType: "text",
  estimatedSeconds: 75
},
{
  id: "chem11-hal-q055",
  subjectId: "chemistry",
  topicId: "chem11-t5",
  questionTypeId: "chem11-qt63",
  content: "Tác hại nổi bật của CFC trong công nghệ làm lạnh truyền thống là",
  responseType: "single_choice",
  options: [
    "A. tạo thêm ozone mặt đất có lợi.",
    "B. làm nước biển ngọt.",
    "C. góp phần suy giảm tầng ozone; nhiều chất còn có tiềm năng làm nóng toàn cầu cao.",
    "D. chỉ làm máy lạnh ồn."
  ],
  correctAnswer: "C",
  difficulty: "medium",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: ["chem11-hal-cfc-safety-responsibility"],
  subTypeId: "chem11-hal-st-cfc-impact",
  practiceRole: "misconception_check",
  representationType: "table",
  estimatedSeconds: 75
},
{
  id: "chem11-hal-q056",
  subjectId: "chemistry",
  topicId: "chem11-t5",
  questionTypeId: "chem11-qt63",
  content: "Chuỗi nguyên nhân đúng nhất là",
  responseType: "single_choice",
  options: [
    "A. CFC→tan trong biển→tạo oxygen.",
    "B. CFC→phản ứng ngay dưới đất→tạo ozone.",
    "C. CFC→biến thành PVC.",
    "D. CFC bền→lên tầng bình lưu→UV giải phóng chlorine→chlorine xúc tác phá hủy ozone."
  ],
  correctAnswer: "D",
  difficulty: "medium",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: ["chem11-hal-cfc-safety-responsibility"],
  subTypeId: "chem11-hal-st-cfc-impact",
  practiceRole: "mastery_holdout",
  representationType: "diagram",
  estimatedSeconds: 75,
  isMasteryHoldout: true
},
{
  id: "chem11-hal-q057",
  subjectId: "chemistry",
  topicId: "chem11-t5",
  questionTypeId: "chem11-qt63",
  content: "Khi bảo dưỡng thiết bị lạnh, cách làm phù hợp là",
  responseType: "single_choice",
  options: [
    "A. thu hồi môi chất bằng thiết bị phù hợp, kiểm tra rò rỉ và chuyển tái chế/xử lí đúng quy định.",
    "B. xả hết môi chất ra không khí.",
    "C. đốt môi chất ngoài trời.",
    "D. trộn với nước rồi xả cống."
  ],
  correctAnswer: "A",
  difficulty: "medium",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: ["chem11-hal-cfc-safety-responsibility"],
  subTypeId: "chem11-hal-st-responsible-use",
  practiceRole: "guided",
  representationType: "text",
  estimatedSeconds: 75
},
{
  id: "chem11-hal-q058",
  subjectId: "chemistry",
  topicId: "chem11-t5",
  questionTypeId: "chem11-qt63",
  content: "Cơ sở dùng dung môi halogen độc trong bể hở. Biện pháp ưu tiên là",
  responseType: "single_choice",
  options: [
    "A. chỉ phát khẩu trang vải.",
    "B. thay chất ít nguy hại hơn nếu khả thi, dùng hệ kín và hút cục bộ; PPE là lớp bổ sung.",
    "C. dùng nước hoa che mùi.",
    "D. tăng ca làm ban đêm."
  ],
  correctAnswer: "B",
  difficulty: "hard",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: ["chem11-hal-cfc-safety-responsibility"],
  subTypeId: "chem11-hal-st-responsible-use",
  practiceRole: "far_transfer",
  representationType: "table",
  estimatedSeconds: 110
},
{
  id: "chem11-hal-q059",
  subjectId: "chemistry",
  topicId: "chem11-t5",
  questionTypeId: "chem11-qt63",
  content: "Cách sử dụng thuốc trừ sâu/diệt cỏ có dẫn xuất halogen phù hợp là",
  responseType: "single_choice",
  options: [
    "A. tăng liều để tác dụng nhanh.",
    "B. trộn nhiều loại không theo hướng dẫn.",
    "C. dùng đúng nhãn, liều, mục đích và thời gian cách ly; dùng PPE, thu gom bao bì đúng quy định.",
    "D. xả phần thừa xuống ao."
  ],
  correctAnswer: "C",
  difficulty: "hard",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: ["chem11-hal-cfc-safety-responsibility"],
  subTypeId: "chem11-hal-st-responsible-use",
  practiceRole: "misconception_check",
  representationType: "diagram",
  estimatedSeconds: 110
},
{
  id: "chem11-hal-q060",
  subjectId: "chemistry",
  topicId: "chem11-t5",
  questionTypeId: "chem11-qt63",
  content: "Một chương trình quản lí môi chất lạnh bền vững nên ưu tiên phương án nào?",
  responseType: "single_choice",
  options: [
    "A. chỉ đổi nhãn thiết bị.",
    "B. xả môi chất cũ rồi nạp loại mới.",
    "C. dùng bất kì chất thay thế nào dù dễ cháy/độc.",
    "D. chọn chất thay thế theo ozone–khí hậu–an toàn, thiết kế hệ kín, kiểm tra rò rỉ, thu hồi và đào tạo kỹ thuật viên."
  ],
  correctAnswer: "D",
  difficulty: "hard",
  sourceType: "manual",
  validatorType: "choice",
  outcomeIds: ["chem11-hal-cfc-safety-responsibility"],
  subTypeId: "chem11-hal-st-responsible-use",
  practiceRole: "mastery_holdout",
  representationType: "text",
  estimatedSeconds: 110,
  isMasteryHoldout: true
},
{
  "id": "chem11-alc-q001",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt64",
  "content": "Alcohol là hợp chất hữu cơ có",
  "responseType": "single_choice",
  "options": [
    "A. nhóm –OH gắn với carbon no.",
    "B. mọi nhóm –OH bất kể vị trí.",
    "C. oxygen luôn ở dạng ion OH−.",
    "D. chỉ một nguyên tử carbon."
  ],
  "correctAnswer": "A",
  "difficulty": "easy",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-alc-concept-formula"
  ],
  "subTypeId": "chem11-alc-st-concept-formula",
  "practiceRole": "guided",
  "representationType": "text",
  "estimatedSeconds": 50
},
{
  "id": "chem11-alc-q002",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt64",
  "content": "Công thức chung của alcohol no, đơn chức, mạch hở là",
  "responseType": "single_choice",
  "options": [
    "A. CnH2nO.",
    "B. CnH2n+2O (n ≥ 1).",
    "C. CnH2n−2O.",
    "D. CnH2n+1O2."
  ],
  "correctAnswer": "B",
  "difficulty": "easy",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-alc-concept-formula"
  ],
  "subTypeId": "chem11-alc-st-concept-formula",
  "practiceRole": "near_transfer",
  "representationType": "equation",
  "estimatedSeconds": 50
},
{
  "id": "chem11-alc-q003",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt64",
  "content": "Chất nào không được xếp là alcohol?",
  "responseType": "single_choice",
  "options": [
    "A. CH3OH.",
    "B. CH3CH2OH.",
    "C. C6H5OH.",
    "D. CH3CH(OH)CH3."
  ],
  "correctAnswer": "C",
  "difficulty": "easy",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-alc-concept-formula"
  ],
  "subTypeId": "chem11-alc-st-concept-formula",
  "practiceRole": "misconception_check",
  "representationType": "diagram",
  "estimatedSeconds": 50
},
{
  "id": "chem11-alc-q004",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt64",
  "content": "Phát biểu chính xác về CnH2n+2O là",
  "responseType": "single_choice",
  "options": [
    "A. mô tả mọi hợp chất chứa oxygen.",
    "B. mô tả mọi alcohol đa chức.",
    "C. mô tả cả phenol.",
    "D. chỉ là công thức chung của alcohol no, đơn chức, mạch hở trong phạm vi đang xét."
  ],
  "correctAnswer": "D",
  "difficulty": "easy",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-alc-concept-formula"
  ],
  "subTypeId": "chem11-alc-st-concept-formula",
  "practiceRole": "mastery_holdout",
  "representationType": "text",
  "isMasteryHoldout": true,
  "estimatedSeconds": 50
},
{
  "id": "chem11-alc-q005",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt64",
  "content": "CH3CH2OH là alcohol",
  "responseType": "single_choice",
  "options": [
    "A. bậc I.",
    "B. bậc II.",
    "C. bậc III.",
    "D. không có bậc."
  ],
  "correctAnswer": "A",
  "difficulty": "medium",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-alc-degree"
  ],
  "subTypeId": "chem11-alc-st-degree",
  "practiceRole": "guided",
  "representationType": "diagram",
  "estimatedSeconds": 70
},
{
  "id": "chem11-alc-q006",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt64",
  "content": "CH3CH(OH)CH3 là alcohol",
  "responseType": "single_choice",
  "options": [
    "A. bậc I.",
    "B. bậc II.",
    "C. bậc III.",
    "D. ba chức."
  ],
  "correctAnswer": "B",
  "difficulty": "medium",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-alc-degree"
  ],
  "subTypeId": "chem11-alc-st-degree",
  "practiceRole": "near_transfer",
  "representationType": "diagram",
  "estimatedSeconds": 70
},
{
  "id": "chem11-alc-q007",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt64",
  "content": "(CH3)3COH là alcohol",
  "responseType": "single_choice",
  "options": [
    "A. bậc I.",
    "B. bậc II.",
    "C. bậc III.",
    "D. ba chức."
  ],
  "correctAnswer": "C",
  "difficulty": "medium",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-alc-degree"
  ],
  "subTypeId": "chem11-alc-st-degree",
  "practiceRole": "misconception_check",
  "representationType": "diagram",
  "estimatedSeconds": 70
},
{
  "id": "chem11-alc-q008",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt64",
  "content": "Với glycerol HOCH2–CHOH–CH2OH, nhận xét đúng là",
  "responseType": "single_choice",
  "options": [
    "A. cả ba nhóm –OH đều bậc III.",
    "B. số ba nhóm –OH làm chất thành alcohol bậc III.",
    "C. cả ba nhóm –OH đều bậc II.",
    "D. hai –OH đầu mạch gắn carbon bậc I, –OH giữa gắn carbon bậc II."
  ],
  "correctAnswer": "D",
  "difficulty": "medium",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-alc-degree",
    "chem11-alc-nomenclature"
  ],
  "subTypeId": "chem11-alc-st-degree",
  "practiceRole": "mastery_holdout",
  "representationType": "diagram",
  "misconceptionId": "chem11-mis-alc-degree-oh-count",
  "isMasteryHoldout": true,
  "estimatedSeconds": 70
},
{
  "id": "chem11-alc-q009",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt64",
  "content": "Tên thay thế của CH3CH2CH2OH là",
  "responseType": "single_choice",
  "options": [
    "A. propan-1-ol.",
    "B. propan-2-ol.",
    "C. ethan-1-ol.",
    "D. propanal."
  ],
  "correctAnswer": "A",
  "difficulty": "medium",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-alc-nomenclature"
  ],
  "subTypeId": "chem11-alc-st-nomenclature",
  "practiceRole": "guided",
  "representationType": "equation",
  "estimatedSeconds": 70
},
{
  "id": "chem11-alc-q010",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt64",
  "content": "Tên đúng của CH3CH(OH)CH2CH3 là",
  "responseType": "single_choice",
  "options": [
    "A. butan-1-ol.",
    "B. butan-2-ol.",
    "C. butan-3-ol.",
    "D. 2-methylpropan-1-ol."
  ],
  "correctAnswer": "B",
  "difficulty": "hard",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-alc-nomenclature"
  ],
  "subTypeId": "chem11-alc-st-nomenclature",
  "practiceRole": "far_transfer",
  "representationType": "diagram",
  "estimatedSeconds": 100
},
{
  "id": "chem11-alc-q011",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt64",
  "content": "Tên thay thế của (CH3)2CHCH2OH là",
  "responseType": "single_choice",
  "options": [
    "A. 1,1-dimethylethanol.",
    "B. butan-2-ol.",
    "C. 2-methylpropan-1-ol.",
    "D. 2-methylpropan-3-ol."
  ],
  "correctAnswer": "C",
  "difficulty": "hard",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-alc-nomenclature"
  ],
  "subTypeId": "chem11-alc-st-nomenclature",
  "practiceRole": "misconception_check",
  "representationType": "diagram",
  "estimatedSeconds": 100
},
{
  "id": "chem11-alc-q012",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt64",
  "content": "Alcohol C5H12O có CTCT CH3CH(CH3)CH2CH2OH được gọi là",
  "responseType": "single_choice",
  "options": [
    "A. 2-methylbutan-4-ol.",
    "B. 1,3-dimethylpropan-1-ol.",
    "C. pentan-1-ol.",
    "D. 3-methylbutan-1-ol."
  ],
  "correctAnswer": "D",
  "difficulty": "hard",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-alc-nomenclature"
  ],
  "subTypeId": "chem11-alc-st-nomenclature",
  "practiceRole": "mastery_holdout",
  "representationType": "diagram",
  "misconceptionId": "chem11-mis-alc-number-branch-first",
  "isMasteryHoldout": true,
  "estimatedSeconds": 100
},
{
  "id": "chem11-alc-q013",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt65",
  "content": "Trong ethanol, liên kết phân cực rõ liên quan trực tiếp nhóm chức là",
  "responseType": "single_choice",
  "options": [
    "A. C–O và O–H.",
    "B. chỉ C–C.",
    "C. liên kết ion Na+–O−.",
    "D. liên kết pi C=C."
  ],
  "correctAnswer": "A",
  "difficulty": "easy",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-alc-structure-shape"
  ],
  "subTypeId": "chem11-alc-st-structure-shape",
  "practiceRole": "guided",
  "representationType": "diagram",
  "estimatedSeconds": 50
},
{
  "id": "chem11-alc-q014",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt65",
  "content": "Hình học cục bộ quanh oxygen trong methanol được mô tả gần đúng là",
  "responseType": "single_choice",
  "options": [
    "A. thẳng tuyệt đối.",
    "B. gấp khúc do oxygen có hai cặp electron không liên kết.",
    "C. tam giác phẳng không có cặp electron riêng.",
    "D. tứ diện đều gồm bốn nguyên tử H."
  ],
  "correctAnswer": "B",
  "difficulty": "easy",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-alc-structure-shape"
  ],
  "subTypeId": "chem11-alc-st-structure-shape",
  "practiceRole": "near_transfer",
  "representationType": "diagram",
  "estimatedSeconds": 50
},
{
  "id": "chem11-alc-q015",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt65",
  "content": "Phát biểu nào sai về nhóm –OH trong ethanol?",
  "responseType": "single_choice",
  "options": [
    "A. O–H là liên kết cộng hóa trị phân cực.",
    "B. Oxygen mang điện tích riêng phần âm.",
    "C. Ethanol chứa sẵn ion OH− tự do.",
    "D. Hydrogen của O–H mang điện tích riêng phần dương."
  ],
  "correctAnswer": "C",
  "difficulty": "easy",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-alc-structure-shape"
  ],
  "subTypeId": "chem11-alc-st-structure-shape",
  "practiceRole": "misconception_check",
  "representationType": "text",
  "misconceptionId": "chem11-mis-alc-oh-ionic",
  "estimatedSeconds": 50
},
{
  "id": "chem11-alc-q016",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt65",
  "content": "Mô hình đúng nhất của ethanol là",
  "responseType": "single_choice",
  "options": [
    "A. mọi nguyên tử nằm trên một đường thẳng.",
    "B. C–O không phân cực.",
    "C. oxygen không có cặp electron riêng.",
    "D. quanh mỗi C gần tứ diện, quanh O gấp khúc và O có cặp electron nhận liên kết hydrogen."
  ],
  "correctAnswer": "D",
  "difficulty": "easy",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-alc-structure-shape",
    "chem11-alc-hydrogen-bond"
  ],
  "subTypeId": "chem11-alc-st-structure-shape",
  "practiceRole": "mastery_holdout",
  "representationType": "diagram",
  "isMasteryHoldout": true,
  "estimatedSeconds": 50
},
{
  "id": "chem11-alc-q017",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt65",
  "content": "Ethanol có nhiệt độ sôi cao hơn ethane chủ yếu vì",
  "responseType": "single_choice",
  "options": [
    "A. các phân tử ethanol tạo liên kết hydrogen với nhau.",
    "B. ethanol là hợp chất ion.",
    "C. ethane có nhiều liên kết hydrogen hơn.",
    "D. ethanol không có lực liên phân tử."
  ],
  "correctAnswer": "A",
  "difficulty": "medium",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-alc-hydrogen-bond"
  ],
  "subTypeId": "chem11-alc-st-hydrogen-bond",
  "practiceRole": "guided",
  "representationType": "text",
  "estimatedSeconds": 70
},
{
  "id": "chem11-alc-q018",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt65",
  "content": "Khi ethanol tan trong water, tương tác quan trọng giúp hòa tan là",
  "responseType": "single_choice",
  "options": [
    "A. liên kết ion giữa C và H.",
    "B. liên kết hydrogen giữa nhóm –OH của ethanol và phân tử water.",
    "C. phá toàn bộ liên kết O–H thành ion.",
    "D. tạo liên kết C=C."
  ],
  "correctAnswer": "B",
  "difficulty": "medium",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-alc-hydrogen-bond"
  ],
  "subTypeId": "chem11-alc-st-hydrogen-bond",
  "practiceRole": "near_transfer",
  "representationType": "diagram",
  "estimatedSeconds": 70
},
{
  "id": "chem11-alc-q019",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt65",
  "content": "Phân biệt đúng giữa O–H và O–H···O là",
  "responseType": "single_choice",
  "options": [
    "A. cả hai đều là liên kết ion.",
    "B. dấu chấm biểu diễn liên kết cộng hóa trị mạnh trong cùng phân tử.",
    "C. O–H là liên kết cộng hóa trị trong phân tử, còn O–H···O biểu diễn liên kết hydrogen giữa các nhóm/phân tử.",
    "D. hai kí hiệu hoàn toàn giống nhau."
  ],
  "correctAnswer": "C",
  "difficulty": "medium",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-alc-hydrogen-bond"
  ],
  "subTypeId": "chem11-alc-st-hydrogen-bond",
  "practiceRole": "misconception_check",
  "representationType": "diagram",
  "misconceptionId": "chem11-mis-hbond-covalent",
  "estimatedSeconds": 70
},
{
  "id": "chem11-alc-q020",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt65",
  "content": "Trong ethanol CH3CH2OH, hydrogen nào là donor liên kết hydrogen điển hình?",
  "responseType": "single_choice",
  "options": [
    "A. mọi H của CH3.",
    "B. mọi H của CH2.",
    "C. không H nào.",
    "D. H liên kết trực tiếp với O."
  ],
  "correctAnswer": "D",
  "difficulty": "medium",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-alc-hydrogen-bond"
  ],
  "subTypeId": "chem11-alc-st-hydrogen-bond",
  "practiceRole": "mastery_holdout",
  "representationType": "diagram",
  "misconceptionId": "chem11-mis-hbond-any-hydrogen",
  "isMasteryHoldout": true,
  "estimatedSeconds": 70
},
{
  "id": "chem11-alc-q021",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt65",
  "content": "Methanol, ethanol và propan-1-ol đều tan tốt hơn pentan-1-ol trong water chủ yếu vì",
  "responseType": "single_choice",
  "options": [
    "A. phần hydrocarbon của các alcohol nhỏ ít lấn át tác dụng ưa nước của –OH hơn.",
    "B. alcohol nhỏ không tạo liên kết hydrogen.",
    "C. pentan-1-ol là ion.",
    "D. số carbon không ảnh hưởng độ tan."
  ],
  "correctAnswer": "A",
  "difficulty": "medium",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-alc-physical-properties"
  ],
  "subTypeId": "chem11-alc-st-physical-data",
  "practiceRole": "guided",
  "representationType": "table",
  "estimatedSeconds": 70
},
{
  "id": "chem11-alc-q022",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt65",
  "content": "Bảng nhiệt độ sôi: methanol 64,7°C; ethanol 78,4°C; propan-1-ol 97,2°C. Dự đoán hợp lí nhất cho butan-1-ol là",
  "responseType": "single_choice",
  "options": [
    "A. thấp hơn 0°C.",
    "B. lớn hơn 97,2°C do lực phân tán tăng trong cùng dãy đồng đẳng.",
    "C. đúng 78,4°C.",
    "D. không thể ở thể lỏng."
  ],
  "correctAnswer": "B",
  "difficulty": "hard",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-alc-physical-properties"
  ],
  "subTypeId": "chem11-alc-st-physical-data",
  "practiceRole": "far_transfer",
  "representationType": "table",
  "estimatedSeconds": 100
},
{
  "id": "chem11-alc-q023",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt65",
  "content": "Ethanol và dimethyl ether cùng CTPT C2H6O nhưng ethanol sôi cao hơn nhiều. Giải thích đúng là",
  "responseType": "single_choice",
  "options": [
    "A. dimethyl ether là ion.",
    "B. ethanol có phân tử khối gấp đôi.",
    "C. ethanol có O–H nên tạo liên kết hydrogen giữa các phân tử; ether không có H gắn O để tự tạo mạng tương tự.",
    "D. ether không có oxygen."
  ],
  "correctAnswer": "C",
  "difficulty": "hard",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-alc-hydrogen-bond",
    "chem11-alc-physical-properties"
  ],
  "subTypeId": "chem11-alc-st-physical-data",
  "practiceRole": "misconception_check",
  "representationType": "table",
  "estimatedSeconds": 100
},
{
  "id": "chem11-alc-q024",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt65",
  "content": "Dữ liệu cho thấy độ tan trong water giảm theo methanol > ethanol > propan-1-ol > butan-1-ol, còn nhiệt độ sôi nhìn chung tăng. Kết luận tốt nhất là",
  "responseType": "single_choice",
  "options": [
    "A. –OH không ảnh hưởng gì.",
    "B. chỉ phân tử khối quyết định cả hai đại lượng.",
    "C. alcohol dài hơn tạo ion mạnh hơn.",
    "D. –OH duy trì liên kết hydrogen, nhưng phần hydrocarbon lớn làm giảm độ tan trong water đồng thời tăng lực phân tán và nhiệt độ sôi."
  ],
  "correctAnswer": "D",
  "difficulty": "hard",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-alc-physical-properties"
  ],
  "subTypeId": "chem11-alc-st-physical-data",
  "practiceRole": "mastery_holdout",
  "representationType": "table",
  "misconceptionId": "chem11-mis-alc-boiling-only-mass",
  "isMasteryHoldout": true,
  "estimatedSeconds": 100
},
{
  "id": "chem11-alc-q025",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt66",
  "content": "Sản phẩm hữu cơ khi ethanol tác dụng với sodium là",
  "responseType": "single_choice",
  "options": [
    "A. sodium ethoxide C2H5ONa.",
    "B. ethene C2H4.",
    "C. ethanal CH3CHO.",
    "D. sodium acetate CH3COONa."
  ],
  "correctAnswer": "A",
  "difficulty": "easy",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-alc-reaction-sodium"
  ],
  "subTypeId": "chem11-alc-st-sodium",
  "practiceRole": "guided",
  "representationType": "equation",
  "estimatedSeconds": 50
},
{
  "id": "chem11-alc-q026",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt66",
  "content": "Phương trình tổng quát cân bằng của monoalcohol với Na là",
  "responseType": "single_choice",
  "options": [
    "A. ROH + Na → RNa + H2O.",
    "B. 2ROH + 2Na → 2RONa + H2.",
    "C. ROH + Na → RONa + H2.",
    "D. 2ROH + Na → 2RONa + H2."
  ],
  "correctAnswer": "B",
  "difficulty": "easy",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-alc-reaction-sodium"
  ],
  "subTypeId": "chem11-alc-st-sodium",
  "practiceRole": "near_transfer",
  "representationType": "equation",
  "estimatedSeconds": 50
},
{
  "id": "chem11-alc-q027",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt66",
  "content": "Trong phản ứng ethanol với Na, nguyên tử H bị thay nằm ở",
  "responseType": "single_choice",
  "options": [
    "A. nhóm CH3.",
    "B. nhóm CH2.",
    "C. liên kết O–H.",
    "D. mọi vị trí như nhau."
  ],
  "correctAnswer": "C",
  "difficulty": "easy",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-alc-reaction-sodium"
  ],
  "subTypeId": "chem11-alc-st-sodium",
  "practiceRole": "misconception_check",
  "representationType": "diagram",
  "misconceptionId": "chem11-mis-na-replaces-carbon-h",
  "estimatedSeconds": 50
},
{
  "id": "chem11-alc-q028",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt66",
  "content": "Cho 0,20 mol ethanol phản ứng hoàn toàn với Na dư. Số mol H2 tạo ra là",
  "responseType": "single_choice",
  "options": [
    "A. 0,20 mol.",
    "B. 0,40 mol.",
    "C. 0,05 mol.",
    "D. 0,10 mol."
  ],
  "correctAnswer": "D",
  "difficulty": "easy",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-alc-reaction-sodium"
  ],
  "subTypeId": "chem11-alc-st-sodium",
  "practiceRole": "mastery_holdout",
  "representationType": "equation",
  "misconceptionId": "chem11-mis-na-one-h2-per-oh",
  "isMasteryHoldout": true,
  "estimatedSeconds": 50
},
{
  "id": "chem11-alc-q029",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt66",
  "content": "Hiện tượng khi thêm glycerol vào Cu(OH)2 mới tạo ở nhiệt độ thường là",
  "responseType": "single_choice",
  "options": [
    "A. kết tủa tan, tạo dung dịch xanh lam đậm.",
    "B. thoát khí H2.",
    "C. xuất hiện kết tủa bạc.",
    "D. dung dịch mất màu hoàn toàn."
  ],
  "correctAnswer": "A",
  "difficulty": "medium",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-alc-polyol-cuoh2"
  ],
  "subTypeId": "chem11-alc-st-polyol-cuoh2",
  "practiceRole": "guided",
  "representationType": "experiment",
  "estimatedSeconds": 70
},
{
  "id": "chem11-alc-q030",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt66",
  "content": "Đặc điểm cấu tạo cần cho phản ứng xanh lam đậm với Cu(OH)2 trong phạm vi bài học là",
  "responseType": "single_choice",
  "options": [
    "A. có đúng một nhóm –OH.",
    "B. có ít nhất hai nhóm –OH gắn trên các carbon kề nhau.",
    "C. có vòng benzene.",
    "D. có liên kết C=C."
  ],
  "correctAnswer": "B",
  "difficulty": "medium",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-alc-polyol-cuoh2"
  ],
  "subTypeId": "chem11-alc-st-polyol-cuoh2",
  "practiceRole": "near_transfer",
  "representationType": "diagram",
  "estimatedSeconds": 70
},
{
  "id": "chem11-alc-q031",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt66",
  "content": "Chất không cho dung dịch xanh lam đậm với Cu(OH)2 ở điều kiện thí nghiệm là",
  "responseType": "single_choice",
  "options": [
    "A. ethylene glycol HOCH2CH2OH.",
    "B. glycerol HOCH2CHOHCH2OH.",
    "C. ethanol C2H5OH.",
    "D. propane-1,2-diol."
  ],
  "correctAnswer": "C",
  "difficulty": "medium",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-alc-polyol-cuoh2"
  ],
  "subTypeId": "chem11-alc-st-polyol-cuoh2",
  "practiceRole": "misconception_check",
  "representationType": "table",
  "misconceptionId": "chem11-mis-any-alc-cuoh2",
  "estimatedSeconds": 70
},
{
  "id": "chem11-alc-q032",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt66",
  "content": "Cặp chất đều cho hiện tượng đặc trưng với Cu(OH)2 là",
  "responseType": "single_choice",
  "options": [
    "A. ethanol và methanol.",
    "B. propan-1-ol và propan-2-ol.",
    "C. ethanol và glycerol.",
    "D. ethylene glycol và glycerol."
  ],
  "correctAnswer": "D",
  "difficulty": "medium",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-alc-polyol-cuoh2"
  ],
  "subTypeId": "chem11-alc-st-polyol-cuoh2",
  "practiceRole": "mastery_holdout",
  "representationType": "table",
  "isMasteryHoldout": true,
  "estimatedSeconds": 70
},
{
  "id": "chem11-alc-q033",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt66",
  "content": "Thứ tự thao tác hợp lí để khảo sát glycerol với Cu(OH)2 là",
  "responseType": "single_choice",
  "options": [
    "A. tạo kết tủa Cu(OH)2 mới từ dung dịch thích hợp, rồi thêm glycerol và lắc.",
    "B. đốt glycerol trước rồi thêm nước.",
    "C. thêm AgNO3 trực tiếp vào glycerol.",
    "D. dùng CuO nung đỏ thay cho Cu(OH)2."
  ],
  "correctAnswer": "A",
  "difficulty": "medium",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-alc-glycerol-experiment"
  ],
  "subTypeId": "chem11-alc-st-glycerol-experiment",
  "practiceRole": "guided",
  "representationType": "experiment",
  "estimatedSeconds": 70
},
{
  "id": "chem11-alc-q034",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt66",
  "content": "Để phân biệt hai mẫu ethanol và glycerol, thuốc thử và dấu hiệu phù hợp nhất là",
  "responseType": "single_choice",
  "options": [
    "A. Na vì cả hai đều không phản ứng.",
    "B. Cu(OH)2 mới tạo: glycerol làm kết tủa tan thành xanh lam đậm, ethanol không.",
    "C. water vì chỉ ethanol tan.",
    "D. quỳ tím vì glycerol làm đỏ quỳ."
  ],
  "correctAnswer": "B",
  "difficulty": "hard",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-alc-polyol-cuoh2",
    "chem11-alc-glycerol-experiment"
  ],
  "subTypeId": "chem11-alc-st-glycerol-experiment",
  "practiceRole": "far_transfer",
  "representationType": "experiment",
  "estimatedSeconds": 100
},
{
  "id": "chem11-alc-q035",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt66",
  "content": "Cho 0,10 mol glycerol phản ứng hoàn toàn với Na dư. Số mol H2 tối đa là",
  "responseType": "single_choice",
  "options": [
    "A. 0,05 mol.",
    "B. 0,10 mol.",
    "C. 0,15 mol.",
    "D. 0,30 mol."
  ],
  "correctAnswer": "C",
  "difficulty": "hard",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-alc-reaction-sodium"
  ],
  "subTypeId": "chem11-alc-st-glycerol-experiment",
  "practiceRole": "misconception_check",
  "representationType": "equation",
  "estimatedSeconds": 100
},
{
  "id": "chem11-alc-q036",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt66",
  "content": "Hỗn hợp 0,20 mol gồm ethanol và glycerol tạo 0,20 mol H2 với Na dư. Số mol glycerol là",
  "responseType": "single_choice",
  "options": [
    "A. 0,20 mol.",
    "B. 0,15 mol.",
    "C. 0,05 mol.",
    "D. 0,10 mol."
  ],
  "correctAnswer": "D",
  "difficulty": "hard",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-alc-reaction-sodium",
    "chem11-alc-polyol-cuoh2"
  ],
  "subTypeId": "chem11-alc-st-glycerol-experiment",
  "practiceRole": "mastery_holdout",
  "representationType": "table",
  "isMasteryHoldout": true,
  "estimatedSeconds": 100
},
{
  "id": "chem11-alc-q037",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt67",
  "content": "Ethanol tách nước nội phân tử với H2SO4 đặc, khoảng 170°C tạo",
  "responseType": "single_choice",
  "options": [
    "A. ethene và water.",
    "B. ethane và oxygen.",
    "C. ethanal và hydrogen.",
    "D. diethyl ether duy nhất ở mọi nhiệt độ."
  ],
  "correctAnswer": "A",
  "difficulty": "easy",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-alc-dehydration-alkene"
  ],
  "subTypeId": "chem11-alc-st-dehydration-alkene",
  "practiceRole": "guided",
  "representationType": "equation",
  "estimatedSeconds": 50
},
{
  "id": "chem11-alc-q038",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt67",
  "content": "Propan-2-ol tách nước nội phân tử tạo alkene là",
  "responseType": "single_choice",
  "options": [
    "A. propane.",
    "B. propene.",
    "C. propyne.",
    "D. ethene."
  ],
  "correctAnswer": "B",
  "difficulty": "easy",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-alc-dehydration-alkene"
  ],
  "subTypeId": "chem11-alc-st-dehydration-alkene",
  "practiceRole": "near_transfer",
  "representationType": "diagram",
  "estimatedSeconds": 50
},
{
  "id": "chem11-alc-q039",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt67",
  "content": "Tách nước tạo alkene được gọi là nội phân tử vì",
  "responseType": "single_choice",
  "options": [
    "A. hai alcohol ghép thành ether.",
    "B. water cộng vào alkene.",
    "C. H và OH bị loại từ cùng một phân tử alcohol.",
    "D. phản ứng luôn tạo hai pha."
  ],
  "correctAnswer": "C",
  "difficulty": "easy",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-alc-dehydration-alkene"
  ],
  "subTypeId": "chem11-alc-st-dehydration-alkene",
  "practiceRole": "misconception_check",
  "representationType": "text",
  "misconceptionId": "chem11-mis-alc-dehydration-always-ether",
  "estimatedSeconds": 50
},
{
  "id": "chem11-alc-q040",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt67",
  "content": "Điều kiện cấu tạo để tạo C=C khi tách nước là",
  "responseType": "single_choice",
  "options": [
    "A. nối đôi ở bất kì hai carbon.",
    "B. chỉ cần có oxygen.",
    "C. carbon beta không cần H.",
    "D. carbon mang –OH phải kề carbon beta có H để loại H và OH."
  ],
  "correctAnswer": "D",
  "difficulty": "easy",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-alc-dehydration-alkene"
  ],
  "subTypeId": "chem11-alc-st-dehydration-alkene",
  "practiceRole": "mastery_holdout",
  "representationType": "diagram",
  "misconceptionId": "chem11-mis-alc-alkene-any-position",
  "isMasteryHoldout": true,
  "estimatedSeconds": 50
},
{
  "id": "chem11-alc-q041",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt67",
  "content": "Hai phân tử ethanol tách một water ở điều kiện phù hợp tạo",
  "responseType": "single_choice",
  "options": [
    "A. diethyl ether C2H5OC2H5.",
    "B. ethene duy nhất.",
    "C. ethyne.",
    "D. acetic acid."
  ],
  "correctAnswer": "A",
  "difficulty": "medium",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-alc-dehydration-ether"
  ],
  "subTypeId": "chem11-alc-st-dehydration-ether",
  "practiceRole": "guided",
  "representationType": "equation",
  "estimatedSeconds": 70
},
{
  "id": "chem11-alc-q042",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt67",
  "content": "Sản phẩm nhỏ bị tách khi tạo ether từ hai alcohol là",
  "responseType": "single_choice",
  "options": [
    "A. H2.",
    "B. H2O.",
    "C. O2.",
    "D. CO2."
  ],
  "correctAnswer": "B",
  "difficulty": "medium",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-alc-dehydration-ether"
  ],
  "subTypeId": "chem11-alc-st-dehydration-ether",
  "practiceRole": "near_transfer",
  "representationType": "equation",
  "estimatedSeconds": 70
},
{
  "id": "chem11-alc-q043",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt67",
  "content": "Nhận xét đúng về tạo diethyl ether từ ethanol là",
  "responseType": "single_choice",
  "options": [
    "A. tách water hoàn toàn bên trong một ethanol.",
    "B. ba ethanol tạo một ether.",
    "C. hai ethanol tham gia tách một water nên là dehydration liên phân tử.",
    "D. carbon bị mất khỏi hệ."
  ],
  "correctAnswer": "C",
  "difficulty": "medium",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-alc-dehydration-ether"
  ],
  "subTypeId": "chem11-alc-st-dehydration-ether",
  "practiceRole": "misconception_check",
  "representationType": "diagram",
  "misconceptionId": "chem11-mis-alc-ether-intramolecular",
  "estimatedSeconds": 70
},
{
  "id": "chem11-alc-q044",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt67",
  "content": "Khi thay đổi nhiệt độ trong hệ ethanol/H2SO4 đặc, cần lưu ý",
  "responseType": "single_choice",
  "options": [
    "A. nhiệt độ không ảnh hưởng sản phẩm.",
    "B. chỉ nồng độ ethanol có ý nghĩa.",
    "C. mọi điều kiện đều chỉ tạo ethene.",
    "D. nhiệt độ thích hợp có thể làm ưu tiên ether hoặc alkene khác nhau."
  ],
  "correctAnswer": "D",
  "difficulty": "medium",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-alc-dehydration-pathway"
  ],
  "subTypeId": "chem11-alc-st-dehydration-ether",
  "practiceRole": "mastery_holdout",
  "representationType": "table",
  "misconceptionId": "chem11-mis-dehydration-temperature-irrelevant",
  "isMasteryHoldout": true,
  "estimatedSeconds": 70
},
{
  "id": "chem11-alc-q045",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt67",
  "content": "Methanol không tách nước nội phân tử tạo alkene vì",
  "responseType": "single_choice",
  "options": [
    "A. chỉ có một carbon, không có carbon beta để hình thành C=C.",
    "B. không có oxygen.",
    "C. methanol là hydrocarbon.",
    "D. methanol không có hydrogen."
  ],
  "correctAnswer": "A",
  "difficulty": "medium",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-alc-dehydration-pathway"
  ],
  "subTypeId": "chem11-alc-st-dehydration-path",
  "practiceRole": "guided",
  "representationType": "diagram",
  "estimatedSeconds": 70
},
{
  "id": "chem11-alc-q046",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt67",
  "content": "Sản phẩm alkene chính khi tách nước butan-2-ol theo Zaisev là",
  "responseType": "single_choice",
  "options": [
    "A. but-1-yne.",
    "B. but-2-ene.",
    "C. butane.",
    "D. ethene."
  ],
  "correctAnswer": "B",
  "difficulty": "hard",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-alc-dehydration-alkene",
    "chem11-alc-dehydration-pathway"
  ],
  "subTypeId": "chem11-alc-st-dehydration-path",
  "practiceRole": "far_transfer",
  "representationType": "diagram",
  "estimatedSeconds": 100
},
{
  "id": "chem11-alc-q047",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt67",
  "content": "Từ 0,20 mol ethanol, phản ứng tạo diethyl ether đạt hiệu suất 75%. Số mol ether thu được là",
  "responseType": "single_choice",
  "options": [
    "A. 0,150 mol.",
    "B. 0,100 mol.",
    "C. 0,075 mol.",
    "D. 0,050 mol."
  ],
  "correctAnswer": "C",
  "difficulty": "hard",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-alc-dehydration-ether"
  ],
  "subTypeId": "chem11-alc-st-dehydration-path",
  "practiceRole": "misconception_check",
  "representationType": "table",
  "estimatedSeconds": 100
},
{
  "id": "chem11-alc-q048",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt67",
  "content": "Chuỗi chuyển hóa bromoethane → ethanol → ethene dùng lần lượt",
  "responseType": "single_choice",
  "options": [
    "A. KOH/alcohol rồi H2O.",
    "B. Na kim loại rồi CuO.",
    "C. Br2/light rồi NaOH.",
    "D. NaOH(aq), đun nóng; sau đó H2SO4 đặc khoảng 170°C."
  ],
  "correctAnswer": "D",
  "difficulty": "hard",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-hal-substitution-hydroxide",
    "chem11-alc-dehydration-alkene"
  ],
  "subTypeId": "chem11-alc-st-dehydration-path",
  "practiceRole": "mastery_holdout",
  "representationType": "equation",
  "isMasteryHoldout": true,
  "estimatedSeconds": 100
},
{
  "id": "chem11-alc-q049",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt68",
  "content": "Ethanol đun nóng với CuO tạo sản phẩm hữu cơ là",
  "responseType": "single_choice",
  "options": [
    "A. ethanal CH3CHO.",
    "B. acetone CH3COCH3.",
    "C. acetic acid duy nhất.",
    "D. ethene."
  ],
  "correctAnswer": "A",
  "difficulty": "easy",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-alc-oxidation-cuo"
  ],
  "subTypeId": "chem11-alc-st-oxidation-cuo",
  "practiceRole": "guided",
  "representationType": "equation",
  "estimatedSeconds": 50
},
{
  "id": "chem11-alc-q050",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt68",
  "content": "Propan-2-ol đun với CuO tạo",
  "responseType": "single_choice",
  "options": [
    "A. propanal.",
    "B. propanone (acetone).",
    "C. propane.",
    "D. propene."
  ],
  "correctAnswer": "B",
  "difficulty": "easy",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-alc-oxidation-cuo"
  ],
  "subTypeId": "chem11-alc-st-oxidation-cuo",
  "practiceRole": "near_transfer",
  "representationType": "equation",
  "estimatedSeconds": 50
},
{
  "id": "chem11-alc-q051",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt68",
  "content": "Quy luật sản phẩm trong phản ứng CuO ở phạm vi bài học là",
  "responseType": "single_choice",
  "options": [
    "A. bậc I và II đều tạo acid.",
    "B. bậc I tạo ketone, bậc II tạo aldehyde.",
    "C. bậc I tạo aldehyde, bậc II tạo ketone.",
    "D. bậc III luôn tạo aldehyde."
  ],
  "correctAnswer": "C",
  "difficulty": "easy",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-alc-oxidation-cuo"
  ],
  "subTypeId": "chem11-alc-st-oxidation-cuo",
  "practiceRole": "misconception_check",
  "representationType": "table",
  "misconceptionId": "chem11-mis-primary-to-ketone",
  "estimatedSeconds": 50
},
{
  "id": "chem11-alc-q052",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt68",
  "content": "(CH3)3COH không phản ứng theo mô hình oxi hóa CuO đơn giản vì",
  "responseType": "single_choice",
  "options": [
    "A. không có oxygen.",
    "B. không có carbon.",
    "C. là alcohol bậc I.",
    "D. carbon mang –OH không có H để loại tạo nhóm carbonyl."
  ],
  "correctAnswer": "D",
  "difficulty": "easy",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-alc-oxidation-cuo"
  ],
  "subTypeId": "chem11-alc-st-oxidation-cuo",
  "practiceRole": "mastery_holdout",
  "representationType": "diagram",
  "misconceptionId": "chem11-mis-tertiary-cuo-aldehyde",
  "isMasteryHoldout": true,
  "estimatedSeconds": 50
},
{
  "id": "chem11-alc-q053",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt68",
  "content": "Phương trình cháy hoàn toàn ethanol cân bằng là",
  "responseType": "single_choice",
  "options": [
    "A. C2H5OH + 3O2 → 2CO2 + 3H2O.",
    "B. C2H5OH + 2O2 → 2CO2 + 3H2O.",
    "C. C2H5OH + O2 → CO2 + H2O.",
    "D. 2C2H5OH + O2 → 4CO + 6H2."
  ],
  "correctAnswer": "A",
  "difficulty": "medium",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-alc-combustion"
  ],
  "subTypeId": "chem11-alc-st-combustion",
  "practiceRole": "guided",
  "representationType": "equation",
  "estimatedSeconds": 70
},
{
  "id": "chem11-alc-q054",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt68",
  "content": "Đốt hoàn toàn 0,10 mol ethanol thu được",
  "responseType": "single_choice",
  "options": [
    "A. 0,10 mol CO2 và 0,10 mol H2O.",
    "B. 0,20 mol CO2 và 0,30 mol H2O.",
    "C. 0,30 mol CO2 và 0,20 mol H2O.",
    "D. 0,20 mol CO2 và 0,20 mol H2O."
  ],
  "correctAnswer": "B",
  "difficulty": "medium",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-alc-combustion"
  ],
  "subTypeId": "chem11-alc-st-combustion",
  "practiceRole": "near_transfer",
  "representationType": "equation",
  "estimatedSeconds": 70
},
{
  "id": "chem11-alc-q055",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt68",
  "content": "Phương trình tổng quát cháy alcohol no đơn chức mạch hở là",
  "responseType": "single_choice",
  "options": [
    "A. CnH2n+2O + nO2 → nCO2 + nH2O.",
    "B. CnH2n+2O + (n+1)O2 → nCO2 + (n+1)H2O.",
    "C. CnH2n+2O + 3n/2 O2 → nCO2 + (n+1)H2O.",
    "D. CnH2n+2O → nC + (n+1)H2."
  ],
  "correctAnswer": "C",
  "difficulty": "medium",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-alc-combustion"
  ],
  "subTypeId": "chem11-alc-st-combustion",
  "practiceRole": "misconception_check",
  "representationType": "equation",
  "estimatedSeconds": 70
},
{
  "id": "chem11-alc-q056",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt68",
  "content": "Khi cân bằng cháy alcohol, cách làm đúng là",
  "responseType": "single_choice",
  "options": [
    "A. bỏ qua O trong alcohol.",
    "B. luôn đặt hệ số O2 bằng số carbon.",
    "C. cho CO2 và H2O bằng nhau.",
    "D. cân C, H trước rồi tính tổng O sản phẩm, trừ O có sẵn trong alcohol để tìm O2."
  ],
  "correctAnswer": "D",
  "difficulty": "medium",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-alc-combustion"
  ],
  "subTypeId": "chem11-alc-st-combustion",
  "practiceRole": "mastery_holdout",
  "representationType": "text",
  "misconceptionId": "chem11-mis-alc-combustion-ignore-oxygen",
  "isMasteryHoldout": true,
  "estimatedSeconds": 70
},
{
  "id": "chem11-alc-q057",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt68",
  "content": "Thao tác an toàn quan trọng khi đốt ethanol là",
  "responseType": "single_choice",
  "options": [
    "A. không rót thêm ethanol khi ngọn lửa còn cháy; phải dập, để nguội rồi mới xử lí.",
    "B. đưa mặt sát ngọn lửa.",
    "C. cầm bình ethanol ngay trên lửa.",
    "D. dập bằng cách thổi mạnh làm chất lỏng bắn ra."
  ],
  "correctAnswer": "A",
  "difficulty": "medium",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-alc-ethanol-combustion-experiment"
  ],
  "subTypeId": "chem11-alc-st-ethanol-experiment",
  "practiceRole": "guided",
  "representationType": "experiment",
  "estimatedSeconds": 70
},
{
  "id": "chem11-alc-q058",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt68",
  "content": "Để chứng minh sản phẩm cháy ethanol có CO2 và H2O, có thể lần lượt dùng",
  "responseType": "single_choice",
  "options": [
    "A. AgNO3 và bromine.",
    "B. nước vôi trong cho CO2 và chất chỉ thị nước khan phù hợp cho H2O.",
    "C. Cu(OH)2 và Na kim loại trong cùng bình cháy.",
    "D. chỉ quan sát màu ngọn lửa là đủ."
  ],
  "correctAnswer": "B",
  "difficulty": "hard",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-alc-ethanol-combustion-experiment"
  ],
  "subTypeId": "chem11-alc-st-ethanol-experiment",
  "practiceRole": "far_transfer",
  "representationType": "experiment",
  "estimatedSeconds": 100
},
{
  "id": "chem11-alc-q059",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt68",
  "content": "Đốt hoàn toàn 0,20 mol hỗn hợp methanol và ethanol thu 0,30 mol CO2. Số mol ethanol là",
  "responseType": "single_choice",
  "options": [
    "A. 0,20 mol.",
    "B. 0,15 mol.",
    "C. 0,10 mol.",
    "D. 0,05 mol."
  ],
  "correctAnswer": "C",
  "difficulty": "hard",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-alc-combustion"
  ],
  "subTypeId": "chem11-alc-st-ethanol-experiment",
  "practiceRole": "misconception_check",
  "representationType": "table",
  "estimatedSeconds": 100
},
{
  "id": "chem11-alc-q060",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt68",
  "content": "Cho 0,10 mol ethanol phản ứng hoàn toàn với CuO dư. Khối lượng chất rắn giảm bao nhiêu, biết mỗi mol ethanol lấy 1 mol O khỏi CuO?",
  "responseType": "single_choice",
  "options": [
    "A. 8,0 g.",
    "B. 6,4 g.",
    "C. 0,8 g.",
    "D. 1,6 g."
  ],
  "correctAnswer": "D",
  "difficulty": "hard",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-alc-oxidation-cuo"
  ],
  "subTypeId": "chem11-alc-st-ethanol-experiment",
  "practiceRole": "mastery_holdout",
  "representationType": "table",
  "isMasteryHoldout": true,
  "estimatedSeconds": 100
},
{
  "id": "chem11-alc-q061",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt69",
  "content": "Một phương pháp công nghiệp điều chế ethanol từ ethylene là",
  "responseType": "single_choice",
  "options": [
    "A. hydrate hóa ethylene bằng water với xúc tác/điều kiện thích hợp.",
    "B. hydrogen hóa hoàn toàn ethylene thành ethane.",
    "C. chlor hóa ethylene ngoài ánh sáng.",
    "D. đốt ethylene hoàn toàn."
  ],
  "correctAnswer": "A",
  "difficulty": "easy",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-alc-ethanol-preparation"
  ],
  "subTypeId": "chem11-alc-st-ethanol-prep",
  "practiceRole": "guided",
  "representationType": "equation",
  "estimatedSeconds": 50
},
{
  "id": "chem11-alc-q062",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt69",
  "content": "Phương trình hydrate hóa ethylene là",
  "responseType": "single_choice",
  "options": [
    "A. C2H4 + H2 → C2H6.",
    "B. C2H4 + H2O → C2H5OH.",
    "C. C2H4 + O2 → 2CO2 + 2H2O.",
    "D. C2H4 → C2H2 + H2."
  ],
  "correctAnswer": "B",
  "difficulty": "easy",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-alc-ethanol-preparation"
  ],
  "subTypeId": "chem11-alc-st-ethanol-prep",
  "practiceRole": "near_transfer",
  "representationType": "equation",
  "estimatedSeconds": 50
},
{
  "id": "chem11-alc-q063",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt69",
  "content": "Phương trình tổng quát lên men glucose tạo ethanol là",
  "responseType": "single_choice",
  "options": [
    "A. C6H12O6 + 6O2 → 6CO2 + 6H2O.",
    "B. C6H12O6 → C6H6 + 3H2O.",
    "C. C6H12O6 → 2C2H5OH + 2CO2.",
    "D. C6H12O6 → 3CH3OH + 3CO."
  ],
  "correctAnswer": "C",
  "difficulty": "easy",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-alc-ethanol-preparation"
  ],
  "subTypeId": "chem11-alc-st-ethanol-prep",
  "practiceRole": "misconception_check",
  "representationType": "equation",
  "estimatedSeconds": 50
},
{
  "id": "chem11-alc-q064",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt69",
  "content": "Điều kiện phù hợp cho lên men ethanol là",
  "responseType": "single_choice",
  "options": [
    "A. đốt nóng với oxygen dư.",
    "B. chiếu tia UV trong chlorine.",
    "C. chỉ cần áp suất rất cao.",
    "D. enzyme/men, nhiệt độ thích hợp và môi trường yếm khí phù hợp."
  ],
  "correctAnswer": "D",
  "difficulty": "easy",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-alc-ethanol-preparation"
  ],
  "subTypeId": "chem11-alc-st-ethanol-prep",
  "practiceRole": "mastery_holdout",
  "representationType": "text",
  "misconceptionId": "chem11-mis-fermentation-oxygen-required",
  "isMasteryHoldout": true,
  "estimatedSeconds": 50
},
{
  "id": "chem11-alc-q065",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt69",
  "content": "Khi nhận diện tuyến sản xuất glycerol từ propylene, nguyên tắc carbon quan trọng là",
  "responseType": "single_choice",
  "options": [
    "A. khung ba carbon của propylene được bảo toàn thành khung ba carbon của glycerol.",
    "B. propylene có hai carbon.",
    "C. glycerol chỉ có một carbon.",
    "D. phải tạo vòng benzene trước."
  ],
  "correctAnswer": "A",
  "difficulty": "medium",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-alc-glycerol-preparation"
  ],
  "subTypeId": "chem11-alc-st-glycerol-prep",
  "practiceRole": "guided",
  "representationType": "diagram",
  "estimatedSeconds": 70
},
{
  "id": "chem11-alc-q066",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt69",
  "content": "Công thức thu gọn của glycerol là",
  "responseType": "single_choice",
  "options": [
    "A. C2H5OH.",
    "B. C3H5(OH)3.",
    "C. CH3OH.",
    "D. C6H5OH."
  ],
  "correctAnswer": "B",
  "difficulty": "medium",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-alc-nomenclature",
    "chem11-alc-glycerol-preparation"
  ],
  "subTypeId": "chem11-alc-st-glycerol-prep",
  "practiceRole": "near_transfer",
  "representationType": "equation",
  "estimatedSeconds": 70
},
{
  "id": "chem11-alc-q067",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt69",
  "content": "Sơ đồ nào hợp lí về số carbon cho tuyến nguyên liệu–sản phẩm?",
  "responseType": "single_choice",
  "options": [
    "A. ethylene C2 → glycerol C3 mà không thêm nguồn C.",
    "B. methane C1 → glycerol C3 trong một bước không thêm C.",
    "C. propylene C3 → các trung gian C3 → glycerol C3.",
    "D. benzene C6 → glycerol C3 mà không có biến đổi khung."
  ],
  "correctAnswer": "C",
  "difficulty": "medium",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-alc-glycerol-preparation"
  ],
  "subTypeId": "chem11-alc-st-glycerol-prep",
  "practiceRole": "misconception_check",
  "representationType": "diagram",
  "estimatedSeconds": 70
},
{
  "id": "chem11-alc-q068",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt69",
  "content": "Ghép ứng dụng phù hợp nhất là",
  "responseType": "single_choice",
  "options": [
    "A. methanol dùng làm đồ uống an toàn.",
    "B. ethanol chỉ có thể làm nhiên liệu.",
    "C. glycerol chỉ dùng để đốt.",
    "D. glycerol có thể làm chất giữ ẩm/nguyên liệu; ethanol dùng làm dung môi, nhiên liệu và nguyên liệu hóa học."
  ],
  "correctAnswer": "D",
  "difficulty": "medium",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-alc-glycerol-preparation",
    "chem11-alc-applications-health"
  ],
  "subTypeId": "chem11-alc-st-glycerol-prep",
  "practiceRole": "mastery_holdout",
  "representationType": "table",
  "isMasteryHoldout": true,
  "estimatedSeconds": 70
},
{
  "id": "chem11-alc-q069",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt69",
  "content": "Nhận xét đúng về methanol là",
  "responseType": "single_choice",
  "options": [
    "A. rất độc, có thể gây tổn thương thị giác và tử vong nên không dùng làm đồ uống.",
    "B. an toàn như water nếu pha loãng.",
    "C. chính là glycerol.",
    "D. không cháy và không có ứng dụng."
  ],
  "correctAnswer": "A",
  "difficulty": "medium",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-alc-applications-health"
  ],
  "subTypeId": "chem11-alc-st-health-safety",
  "practiceRole": "guided",
  "representationType": "text",
  "estimatedSeconds": 70
},
{
  "id": "chem11-alc-q070",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt69",
  "content": "Sau khi sử dụng đồ uống có cồn, lựa chọn có trách nhiệm nhất là",
  "responseType": "single_choice",
  "options": [
    "A. tự lái nếu cảm thấy tỉnh.",
    "B. không lái xe, dùng phương tiện/người lái không uống và tuân thủ quy định.",
    "C. uống cà phê rồi lái ngay.",
    "D. chạy nhanh để về sớm."
  ],
  "correctAnswer": "B",
  "difficulty": "hard",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-alc-applications-health"
  ],
  "subTypeId": "chem11-alc-st-health-safety",
  "practiceRole": "far_transfer",
  "representationType": "text",
  "estimatedSeconds": 100
},
{
  "id": "chem11-alc-q071",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt69",
  "content": "Lên men 180 g glucose, hiệu suất 80%. Khối lượng ethanol thu được là",
  "responseType": "single_choice",
  "options": [
    "A. 92,0 g.",
    "B. 46,0 g.",
    "C. 73,6 g.",
    "D. 144,0 g."
  ],
  "correctAnswer": "C",
  "difficulty": "hard",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-alc-ethanol-preparation"
  ],
  "subTypeId": "chem11-alc-st-health-safety",
  "practiceRole": "misconception_check",
  "representationType": "table",
  "estimatedSeconds": 100
},
{
  "id": "chem11-alc-q072",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt69",
  "content": "Bộ kết luận nào đồng thời đúng?",
  "responseType": "single_choice",
  "options": [
    "A. Ethylene tạo ethanol không cần water; methanol uống được.",
    "B. Lên men là cháy glucose; glycerol có hai carbon.",
    "C. Có thể lái xe nếu uống ít; mọi alcohol có cùng độc tính.",
    "D. Ethanol có thể từ hydrate hóa ethylene hoặc lên men; glycerol có khung C3; methanol không dùng làm đồ uống và không lái xe sau khi uống cồn."
  ],
  "correctAnswer": "D",
  "difficulty": "hard",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-alc-ethanol-preparation",
    "chem11-alc-glycerol-preparation",
    "chem11-alc-applications-health"
  ],
  "subTypeId": "chem11-alc-st-health-safety",
  "practiceRole": "mastery_holdout",
  "representationType": "table",
  "isMasteryHoldout": true,
  "estimatedSeconds": 100
},
{
  "id": "chem11-phe-q001",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt70",
  "content": "Hợp chất phenol là hợp chất có",
  "responseType": "single_choice",
  "options": [
    "A. nhóm –OH gắn trực tiếp với carbon của vòng benzene.",
    "B. nhóm –OH gắn với mọi carbon no.",
    "C. vòng benzene nhưng không cần –OH.",
    "D. ion OH− tự do trong phân tử."
  ],
  "correctAnswer": "A",
  "difficulty": "easy",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-phe-concept-classification"
  ],
  "subTypeId": "chem11-phe-st-concept-classification",
  "practiceRole": "guided",
  "representationType": "text",
  "estimatedSeconds": 50
},
{
  "id": "chem11-phe-q002",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt70",
  "content": "Chất nào thuộc loại phenol?",
  "responseType": "single_choice",
  "options": [
    "A. C6H5CH2OH.",
    "B. C6H5OH.",
    "C. C6H6.",
    "D. C2H5OH."
  ],
  "correctAnswer": "B",
  "difficulty": "easy",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-phe-concept-classification"
  ],
  "subTypeId": "chem11-phe-st-concept-classification",
  "practiceRole": "near_transfer",
  "representationType": "diagram",
  "estimatedSeconds": 50
},
{
  "id": "chem11-phe-q003",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt70",
  "content": "C6H5CH2OH không phải phenol vì",
  "responseType": "single_choice",
  "options": [
    "A. không có oxygen.",
    "B. không có vòng benzene.",
    "C. –OH gắn với carbon CH2 no ở mạch nhánh.",
    "D. chất có hai nhóm –OH."
  ],
  "correctAnswer": "C",
  "difficulty": "easy",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-phe-concept-classification"
  ],
  "subTypeId": "chem11-phe-st-concept-classification",
  "practiceRole": "misconception_check",
  "representationType": "diagram",
  "misconceptionId": "chem11-mis-phe-sidechain-oh",
  "estimatedSeconds": 50
},
{
  "id": "chem11-phe-q004",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt70",
  "content": "Phân loại đúng là",
  "responseType": "single_choice",
  "options": [
    "A. phenol và ethanol đều là phenol.",
    "B. benzyl alcohol là phenol đơn giản nhất.",
    "C. C6H5OH là aromatic alcohol.",
    "D. C6H5OH là phenol, còn C6H5CH2OH là aromatic alcohol."
  ],
  "correctAnswer": "D",
  "difficulty": "easy",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-phe-concept-classification"
  ],
  "subTypeId": "chem11-phe-st-concept-classification",
  "practiceRole": "mastery_holdout",
  "representationType": "table",
  "misconceptionId": "chem11-mis-phe-aromatic-alcohol",
  "isMasteryHoldout": true,
  "estimatedSeconds": 50
},
{
  "id": "chem11-phe-q005",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt70",
  "content": "Công thức phân tử của phenol đơn giản nhất là",
  "responseType": "single_choice",
  "options": [
    "A. C6H6O.",
    "B. C6H12O.",
    "C. C7H8O.",
    "D. C6H6."
  ],
  "correctAnswer": "A",
  "difficulty": "medium",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-phe-nomenclature-formula"
  ],
  "subTypeId": "chem11-phe-st-nomenclature-formula",
  "practiceRole": "guided",
  "representationType": "equation",
  "estimatedSeconds": 75
},
{
  "id": "chem11-phe-q006",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt70",
  "content": "p-Cresol được gọi theo tên thay thế là",
  "responseType": "single_choice",
  "options": [
    "A. 2-methylphenol.",
    "B. 4-methylphenol.",
    "C. 3-methylphenol.",
    "D. phenylmethanol."
  ],
  "correctAnswer": "B",
  "difficulty": "medium",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-phe-nomenclature-formula"
  ],
  "subTypeId": "chem11-phe-st-nomenclature-formula",
  "practiceRole": "near_transfer",
  "representationType": "diagram",
  "estimatedSeconds": 75
},
{
  "id": "chem11-phe-q007",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt70",
  "content": "Hợp chất có hai –OH ở vị trí 1,2 trên vòng benzene được gọi là",
  "responseType": "single_choice",
  "options": [
    "A. benzene-1,4-diol.",
    "B. benzyl alcohol.",
    "C. benzene-1,2-diol (catechol).",
    "D. 2-methylphenol."
  ],
  "correctAnswer": "C",
  "difficulty": "medium",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-phe-nomenclature-formula"
  ],
  "subTypeId": "chem11-phe-st-nomenclature-formula",
  "practiceRole": "misconception_check",
  "representationType": "diagram",
  "estimatedSeconds": 75
},
{
  "id": "chem11-phe-q008",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt70",
  "content": "CTPT chung của các đồng phân cresol (methylphenol) là",
  "responseType": "single_choice",
  "options": [
    "A. C6H6O.",
    "B. C7H6O.",
    "C. C8H10O.",
    "D. C7H8O."
  ],
  "correctAnswer": "D",
  "difficulty": "medium",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-phe-nomenclature-formula"
  ],
  "subTypeId": "chem11-phe-st-nomenclature-formula",
  "practiceRole": "mastery_holdout",
  "representationType": "equation",
  "misconceptionId": "chem11-mis-phe-cresol-formula",
  "isMasteryHoldout": true,
  "estimatedSeconds": 75
},
{
  "id": "chem11-phe-q009",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt70",
  "content": "Mô tả cấu tạo phù hợp nhất của phenol là",
  "responseType": "single_choice",
  "options": [
    "A. nhóm –OH gắn carbon sp2 của vòng benzene gần phẳng.",
    "B. vòng là tứ diện như methane.",
    "C. phenol gồm ion tách rời hoàn toàn.",
    "D. có liên kết C=C kiểu alkene độc lập."
  ],
  "correctAnswer": "A",
  "difficulty": "medium",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-phe-structure-shape"
  ],
  "subTypeId": "chem11-phe-st-structure-influence",
  "practiceRole": "guided",
  "representationType": "diagram",
  "estimatedSeconds": 75
},
{
  "id": "chem11-phe-q010",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt70",
  "content": "Phenol acid hơn ethanol chủ yếu vì",
  "responseType": "single_choice",
  "options": [
    "A. phenol có nhiều H hơn.",
    "B. ion phenoxide sau khi mất H được vòng thơm ổn định tốt hơn ethoxide.",
    "C. ethanol không có oxygen.",
    "D. phenol là acid mạnh phân li hoàn toàn."
  ],
  "correctAnswer": "B",
  "difficulty": "hard",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-phe-structure-shape",
    "chem11-phe-acidity"
  ],
  "subTypeId": "chem11-phe-st-structure-influence",
  "practiceRole": "far_transfer",
  "representationType": "diagram",
  "estimatedSeconds": 105
},
{
  "id": "chem11-phe-q011",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt70",
  "content": "Ảnh hưởng của –OH lên vòng phenol trong phản ứng thế đang học là",
  "responseType": "single_choice",
  "options": [
    "A. khóa hoàn toàn phản ứng của vòng.",
    "B. chỉ hoạt hóa vị trí meta.",
    "C. hoạt hóa vòng, đặc biệt định hướng ortho và para.",
    "D. biến vòng thành cyclohexane."
  ],
  "correctAnswer": "C",
  "difficulty": "hard",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-phe-structure-shape",
    "chem11-phe-ring-activation"
  ],
  "subTypeId": "chem11-phe-st-structure-influence",
  "practiceRole": "misconception_check",
  "representationType": "diagram",
  "misconceptionId": "chem11-mis-phe-oh-deactivates-ring",
  "estimatedSeconds": 105
},
{
  "id": "chem11-phe-q012",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt70",
  "content": "Kết luận tổng hợp đúng về ảnh hưởng tương hỗ là",
  "responseType": "single_choice",
  "options": [
    "A. vòng làm O–H kém phân cực hơn ethanol và –OH làm vòng trơ.",
    "B. không có ảnh hưởng giữa –OH và vòng.",
    "C. phenol phân li hoàn toàn thành ion.",
    "D. vòng làm O–H dễ mất H hơn alcohol, còn –OH hoạt hóa vòng ở ortho/para."
  ],
  "correctAnswer": "D",
  "difficulty": "hard",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-phe-structure-shape",
    "chem11-phe-ring-activation"
  ],
  "subTypeId": "chem11-phe-st-structure-influence",
  "practiceRole": "mastery_holdout",
  "representationType": "table",
  "isMasteryHoldout": true,
  "estimatedSeconds": 105
},
{
  "id": "chem11-phe-q013",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt71",
  "content": "Ở 25°C, phenol tinh khiết thường là",
  "responseType": "single_choice",
  "options": [
    "A. chất rắn không màu vì nhiệt độ này thấp hơn nhiệt độ nóng chảy khoảng 43°C.",
    "B. chất khí.",
    "C. plasma.",
    "D. luôn là dung dịch màu xanh."
  ],
  "correctAnswer": "A",
  "difficulty": "easy",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-phe-physical-properties"
  ],
  "subTypeId": "chem11-phe-st-physical-state",
  "practiceRole": "guided",
  "representationType": "table",
  "estimatedSeconds": 50
},
{
  "id": "chem11-phe-q014",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt71",
  "content": "Độ tan của phenol trong water ở nhiệt độ thường được mô tả là",
  "responseType": "single_choice",
  "options": [
    "A. tan vô hạn.",
    "B. ít tan.",
    "C. hoàn toàn không tan.",
    "D. phản ứng hết thành CO2."
  ],
  "correctAnswer": "B",
  "difficulty": "easy",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-phe-physical-properties"
  ],
  "subTypeId": "chem11-phe-st-physical-state",
  "practiceRole": "near_transfer",
  "representationType": "text",
  "estimatedSeconds": 50
},
{
  "id": "chem11-phe-q015",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt71",
  "content": "Khi đun nóng water chứa phenol, độ tan phenol thường",
  "responseType": "single_choice",
  "options": [
    "A. giảm về 0.",
    "B. không đổi.",
    "C. tăng đáng kể.",
    "D. biến phenol thành benzene."
  ],
  "correctAnswer": "C",
  "difficulty": "easy",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-phe-physical-properties"
  ],
  "subTypeId": "chem11-phe-st-physical-state",
  "practiceRole": "misconception_check",
  "representationType": "table",
  "misconceptionId": "chem11-mis-phe-solubility-temperature",
  "estimatedSeconds": 50
},
{
  "id": "chem11-phe-q016",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt71",
  "content": "Mẫu phenol tinh khiết ở 50°C có xu hướng là",
  "responseType": "single_choice",
  "options": [
    "A. rắn chắc vì 50<43.",
    "B. khí vì 50>181,8.",
    "C. không thể xác định từ nhiệt độ.",
    "D. lỏng vì 50°C cao hơn nhiệt độ nóng chảy nhưng thấp hơn nhiệt độ sôi."
  ],
  "correctAnswer": "D",
  "difficulty": "easy",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-phe-physical-properties"
  ],
  "subTypeId": "chem11-phe-st-physical-state",
  "practiceRole": "mastery_holdout",
  "representationType": "table",
  "isMasteryHoldout": true,
  "estimatedSeconds": 50
},
{
  "id": "chem11-phe-q017",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt71",
  "content": "Phenol có nhiệt độ sôi cao hơn benzene đáng kể chủ yếu do",
  "responseType": "single_choice",
  "options": [
    "A. phenol tạo liên kết hydrogen và có tương tác phân cực mạnh hơn.",
    "B. benzene là chất ion.",
    "C. phenol không có lực phân tán.",
    "D. phenol có ít electron hơn benzene."
  ],
  "correctAnswer": "A",
  "difficulty": "medium",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-phe-physical-properties"
  ],
  "subTypeId": "chem11-phe-st-physical-data",
  "practiceRole": "guided",
  "representationType": "text",
  "estimatedSeconds": 75
},
{
  "id": "chem11-phe-q018",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt71",
  "content": "Dữ liệu độ tan: 25°C khoảng 8,4 g/100 g water; gần 66°C tan vô hạn. Kết luận đúng là",
  "responseType": "single_choice",
  "options": [
    "A. phenol luôn tan vô hạn.",
    "B. độ tan phụ thuộc mạnh vào nhiệt độ.",
    "C. đun nóng làm độ tan giảm.",
    "D. số liệu không liên quan tính tan."
  ],
  "correctAnswer": "B",
  "difficulty": "medium",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-phe-physical-properties"
  ],
  "subTypeId": "chem11-phe-st-physical-data",
  "practiceRole": "near_transfer",
  "representationType": "table",
  "estimatedSeconds": 75
},
{
  "id": "chem11-phe-q019",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt71",
  "content": "Phenol ít tan hơn ethanol trong water dù đều có –OH vì",
  "responseType": "single_choice",
  "options": [
    "A. phenol không có oxygen.",
    "B. ethanol là ion.",
    "C. vòng phenyl kị nước lớn hơn phần ethyl, làm giảm hiệu quả ưa nước của một –OH.",
    "D. phenol không tạo hydrogen bond."
  ],
  "correctAnswer": "C",
  "difficulty": "medium",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-phe-physical-properties"
  ],
  "subTypeId": "chem11-phe-st-physical-data",
  "practiceRole": "misconception_check",
  "representationType": "diagram",
  "estimatedSeconds": 75
},
{
  "id": "chem11-phe-q020",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt71",
  "content": "Bảng cho phenol nóng chảy 43°C, sôi 181,8°C, ít tan ở 25°C nhưng tan tốt khi nóng. Diễn giải tốt nhất là",
  "responseType": "single_choice",
  "options": [
    "A. phenol luôn khí.",
    "B. mọi tính chất chỉ do phân tử khối.",
    "C. phenol là muối ion.",
    "D. liên kết hydrogen làm lực hút mạnh, còn vòng thơm hạn chế tan trong water; nhiệt độ chi phối trạng thái và độ tan."
  ],
  "correctAnswer": "D",
  "difficulty": "medium",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-phe-physical-properties"
  ],
  "subTypeId": "chem11-phe-st-physical-data",
  "practiceRole": "mastery_holdout",
  "representationType": "table",
  "isMasteryHoldout": true,
  "estimatedSeconds": 75
},
{
  "id": "chem11-phe-q021",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt71",
  "content": "Khi thao tác lượng nhỏ phenol trong phòng thí nghiệm, lựa chọn phù hợp là",
  "responseType": "single_choice",
  "options": [
    "A. dùng PPE, thông gió/tủ hút và làm theo hướng dẫn an toàn của cơ sở.",
    "B. cầm tay trần vì phenol là chất sát khuẩn.",
    "C. ngửi trực tiếp để nhận biết.",
    "D. đun trong bình hở sát mặt."
  ],
  "correctAnswer": "A",
  "difficulty": "medium",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-phe-safety-handling"
  ],
  "subTypeId": "chem11-phe-st-safety-handling",
  "practiceRole": "guided",
  "representationType": "text",
  "estimatedSeconds": 75
},
{
  "id": "chem11-phe-q022",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt71",
  "content": "Nếu xảy ra tiếp xúc phenol, hành động đúng nhất là",
  "responseType": "single_choice",
  "options": [
    "A. che lại và tiếp tục thí nghiệm.",
    "B. ngừng tiếp xúc, báo người phụ trách và xử lí theo SDS/quy trình sơ cứu của cơ sở, liên hệ y tế khi cần.",
    "C. trung hòa tùy ý bằng acid đặc.",
    "D. dùng dung môi bất kì không cần hướng dẫn."
  ],
  "correctAnswer": "B",
  "difficulty": "hard",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-phe-safety-handling"
  ],
  "subTypeId": "chem11-phe-st-safety-handling",
  "practiceRole": "far_transfer",
  "representationType": "text",
  "estimatedSeconds": 105
},
{
  "id": "chem11-phe-q023",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt71",
  "content": "Phenol dư sau thí nghiệm phải được",
  "responseType": "single_choice",
  "options": [
    "A. đổ xuống bồn rửa với nhiều water.",
    "B. để bay hơi trong phòng.",
    "C. thu gom vào bình chất thải tương thích, dán nhãn và chuyển xử lí theo quy định.",
    "D. trộn với chất thải bất kì."
  ],
  "correctAnswer": "C",
  "difficulty": "hard",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-phe-safety-handling",
    "chem11-phe-applications-responsibility"
  ],
  "subTypeId": "chem11-phe-st-safety-handling",
  "practiceRole": "misconception_check",
  "representationType": "text",
  "misconceptionId": "chem11-mis-phe-waste-drain",
  "estimatedSeconds": 105
},
{
  "id": "chem11-phe-q024",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt71",
  "content": "Nhận định cân bằng nhất về ứng dụng sát khuẩn của phenol là",
  "responseType": "single_choice",
  "options": [
    "A. sát khuẩn đồng nghĩa hoàn toàn vô độc.",
    "B. có thể bôi phenol đậm đặc trực tiếp lên da.",
    "C. mọi chế phẩm chứa phenol đều giống phenol nguyên chất.",
    "D. tác dụng sát khuẩn chỉ được khai thác ở chế phẩm/nồng độ kiểm soát; phenol nguyên chất vẫn độc và gây bỏng."
  ],
  "correctAnswer": "D",
  "difficulty": "hard",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-phe-safety-handling",
    "chem11-phe-applications-responsibility"
  ],
  "subTypeId": "chem11-phe-st-safety-handling",
  "practiceRole": "mastery_holdout",
  "representationType": "table",
  "misconceptionId": "chem11-mis-phe-antiseptic-harmless",
  "isMasteryHoldout": true,
  "estimatedSeconds": 105
},
{
  "id": "chem11-phe-q025",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt72",
  "content": "Phát biểu đúng về dung dịch phenol là",
  "responseType": "single_choice",
  "options": [
    "A. phenol là acid rất yếu nên dung dịch thường không làm đổi màu quỳ tím.",
    "B. phenol phân li hoàn toàn như HCl.",
    "C. phenol là base mạnh.",
    "D. phenol không thể mất H của –OH."
  ],
  "correctAnswer": "A",
  "difficulty": "easy",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-phe-acidity"
  ],
  "subTypeId": "chem11-phe-st-acidity-compare",
  "practiceRole": "guided",
  "representationType": "text",
  "estimatedSeconds": 50
},
{
  "id": "chem11-phe-q026",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt72",
  "content": "Phenol acid hơn ethanol vì",
  "responseType": "single_choice",
  "options": [
    "A. phenol có nhiều carbon hơn là nguyên nhân duy nhất.",
    "B. ion phenoxide được hệ vòng ổn định hơn ion ethoxide.",
    "C. ethanol không có nhóm –OH.",
    "D. phenol là chất điện li mạnh."
  ],
  "correctAnswer": "B",
  "difficulty": "easy",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-phe-acidity"
  ],
  "subTypeId": "chem11-phe-st-acidity-compare",
  "practiceRole": "near_transfer",
  "representationType": "diagram",
  "estimatedSeconds": 50
},
{
  "id": "chem11-phe-q027",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt72",
  "content": "Thuốc thử thể hiện rõ khác biệt acid giữa phenol và ethanol là",
  "responseType": "single_choice",
  "options": [
    "A. Na vì cả hai đều có thể giải phóng H2.",
    "B. water vì cả hai đều không liên quan.",
    "C. NaOH(aq): phenol tạo phenoxide, ethanol không phản ứng theo mô hình bài học.",
    "D. O2 vì cả hai đều cháy."
  ],
  "correctAnswer": "C",
  "difficulty": "easy",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-phe-acidity",
    "chem11-phe-naoh-carbonate-reactions"
  ],
  "subTypeId": "chem11-phe-st-acidity-compare",
  "practiceRole": "misconception_check",
  "representationType": "table",
  "misconceptionId": "chem11-mis-alcohol-naoh",
  "estimatedSeconds": 50
},
{
  "id": "chem11-phe-q028",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt72",
  "content": "Phát biểu phù hợp nhất là",
  "responseType": "single_choice",
  "options": [
    "A. phenol làm đỏ quỳ mạnh và phản ứng NaHCO3 giải phóng CO2.",
    "B. phenol yếu hơn ethanol.",
    "C. phenol không phản ứng base nào.",
    "D. phenol acid hơn alcohol nhưng không đủ mạnh để dùng NaHCO3 tạo CO2 như carboxylic acid."
  ],
  "correctAnswer": "D",
  "difficulty": "easy",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-phe-acidity",
    "chem11-phe-naoh-carbonate-reactions"
  ],
  "subTypeId": "chem11-phe-st-acidity-compare",
  "practiceRole": "mastery_holdout",
  "representationType": "table",
  "misconceptionId": "chem11-mis-phe-bicarbonate-co2",
  "isMasteryHoldout": true,
  "estimatedSeconds": 50
},
{
  "id": "chem11-phe-q029",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt72",
  "content": "Phương trình phenol với NaOH là",
  "responseType": "single_choice",
  "options": [
    "A. C6H5OH + NaOH → C6H5ONa + H2O.",
    "B. C6H5OH + NaOH → C6H6 + Na2O.",
    "C. C6H5OH + NaOH → C6H5Na + H2O2.",
    "D. Không phản ứng."
  ],
  "correctAnswer": "A",
  "difficulty": "medium",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-phe-naoh-carbonate-reactions"
  ],
  "subTypeId": "chem11-phe-st-base-equations",
  "practiceRole": "guided",
  "representationType": "equation",
  "estimatedSeconds": 75
},
{
  "id": "chem11-phe-q030",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt72",
  "content": "Phương trình cân bằng của phenol với Na kim loại là",
  "responseType": "single_choice",
  "options": [
    "A. C6H5OH + Na → C6H5ONa + H2.",
    "B. 2C6H5OH + 2Na → 2C6H5ONa + H2.",
    "C. C6H5OH + 2Na → C6H5ONa2 + H2.",
    "D. C6H5OH + Na → C6H6 + NaOH."
  ],
  "correctAnswer": "B",
  "difficulty": "medium",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-phe-naoh-carbonate-reactions"
  ],
  "subTypeId": "chem11-phe-st-base-equations",
  "practiceRole": "near_transfer",
  "representationType": "equation",
  "estimatedSeconds": 75
},
{
  "id": "chem11-phe-q031",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt72",
  "content": "Theo thí nghiệm KNTT, cân bằng của phenol với Na2CO3 được biểu diễn là",
  "responseType": "single_choice",
  "options": [
    "A. 2C6H5OH + Na2CO3 → 2C6H5ONa + CO2 + H2O.",
    "B. Không có tương tác nào.",
    "C. C6H5OH + Na2CO3 ⇌ C6H5ONa + NaHCO3.",
    "D. C6H5OH + Na2CO3 → C6H6 + NaOH + CO2."
  ],
  "correctAnswer": "C",
  "difficulty": "medium",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-phe-naoh-carbonate-reactions"
  ],
  "subTypeId": "chem11-phe-st-base-equations",
  "practiceRole": "misconception_check",
  "representationType": "equation",
  "misconceptionId": "chem11-mis-phe-carbonate-co2",
  "estimatedSeconds": 75
},
{
  "id": "chem11-phe-q032",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt72",
  "content": "Cho 0,12 mol phenol tác dụng hoàn toàn với NaOH vừa đủ. Số mol NaOH cần là",
  "responseType": "single_choice",
  "options": [
    "A. 0,06 mol.",
    "B. 0,24 mol.",
    "C. 0,12×40 mol.",
    "D. 0,12 mol."
  ],
  "correctAnswer": "D",
  "difficulty": "medium",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-phe-naoh-carbonate-reactions"
  ],
  "subTypeId": "chem11-phe-st-base-equations",
  "practiceRole": "mastery_holdout",
  "representationType": "equation",
  "isMasteryHoldout": true,
  "estimatedSeconds": 75
},
{
  "id": "chem11-phe-q033",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt72",
  "content": "Khi thêm NaOH vào hệ phenol bão hòa trắng đục, hiện tượng chính là",
  "responseType": "single_choice",
  "options": [
    "A. hệ chuyển trong do tạo sodium phenoxide tan.",
    "B. xuất hiện khí CO2 mạnh.",
    "C. tạo kết tủa trắng tribromophenol.",
    "D. dung dịch hóa đỏ do acid mạnh."
  ],
  "correctAnswer": "A",
  "difficulty": "medium",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-phe-base-experiment"
  ],
  "subTypeId": "chem11-phe-st-base-experiment",
  "practiceRole": "guided",
  "representationType": "experiment",
  "estimatedSeconds": 75
},
{
  "id": "chem11-phe-q034",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt72",
  "content": "Trong thí nghiệm với Na2CO3 theo KNTT, mô tả đúng là",
  "responseType": "single_choice",
  "options": [
    "A. luôn sủi khí dữ dội.",
    "B. hệ có thể chuyển trong do cân bằng tạo phenoxide tan và NaHCO3.",
    "C. tạo picric acid vàng.",
    "D. tạo bromophenol trắng."
  ],
  "correctAnswer": "B",
  "difficulty": "hard",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-phe-base-experiment"
  ],
  "subTypeId": "chem11-phe-st-base-experiment",
  "practiceRole": "far_transfer",
  "representationType": "experiment",
  "estimatedSeconds": 105
},
{
  "id": "chem11-phe-q035",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt72",
  "content": "Để phân biệt ethanol và phenol bằng một thuốc thử, chọn",
  "responseType": "single_choice",
  "options": [
    "A. Na vì cả hai đều có thể phản ứng.",
    "B. quỳ tím vì phenol làm đỏ rõ.",
    "C. NaOH(aq): phenol tan do tạo muối, ethanol không phản ứng.",
    "D. oxygen vì chỉ phenol cháy."
  ],
  "correctAnswer": "C",
  "difficulty": "hard",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-phe-base-experiment"
  ],
  "subTypeId": "chem11-phe-st-base-experiment",
  "practiceRole": "misconception_check",
  "representationType": "experiment",
  "estimatedSeconds": 105
},
{
  "id": "chem11-phe-q036",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt72",
  "content": "Hỗn hợp 0,20 mol phenol và ethanol cần 0,08 mol NaOH để phản ứng hết phần có thể phản ứng. Khi cho toàn bộ hỗn hợp tác dụng Na dư, ethanol chiếm bao nhiêu mol?",
  "responseType": "single_choice",
  "options": [
    "A. 0,08 mol.",
    "B. 0,20 mol.",
    "C. 0,10 mol.",
    "D. 0,12 mol."
  ],
  "correctAnswer": "D",
  "difficulty": "hard",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-phe-naoh-carbonate-reactions",
    "chem11-phe-base-experiment"
  ],
  "subTypeId": "chem11-phe-st-base-experiment",
  "practiceRole": "mastery_holdout",
  "representationType": "table",
  "isMasteryHoldout": true,
  "estimatedSeconds": 105
},
{
  "id": "chem11-phe-q037",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt73",
  "content": "Sản phẩm chính khi phenol tác dụng nước bromine dư là",
  "responseType": "single_choice",
  "options": [
    "A. 2,4,6-tribromophenol.",
    "B. bromocyclohexane.",
    "C. benzyl bromide.",
    "D. 1,2-dibromoethane."
  ],
  "correctAnswer": "A",
  "difficulty": "easy",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-phe-bromination"
  ],
  "subTypeId": "chem11-phe-st-bromination",
  "practiceRole": "guided",
  "representationType": "equation",
  "estimatedSeconds": 50
},
{
  "id": "chem11-phe-q038",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt73",
  "content": "Tỉ lệ mol phenol:Br2 trong phản ứng tạo 2,4,6-tribromophenol là",
  "responseType": "single_choice",
  "options": [
    "A. 1:1.",
    "B. 1:3.",
    "C. 2:1.",
    "D. 3:1."
  ],
  "correctAnswer": "B",
  "difficulty": "easy",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-phe-bromination"
  ],
  "subTypeId": "chem11-phe-st-bromination",
  "practiceRole": "near_transfer",
  "representationType": "equation",
  "estimatedSeconds": 50
},
{
  "id": "chem11-phe-q039",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt73",
  "content": "Cho 0,050 mol phenol phản ứng hoàn toàn với Br2 dư. Khối lượng 2,4,6-tribromophenol (M=331 g/mol) là",
  "responseType": "single_choice",
  "options": [
    "A. 49,65 g.",
    "B. 5,515 g.",
    "C. 16,55 g.",
    "D. 33,10 g."
  ],
  "correctAnswer": "C",
  "difficulty": "easy",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-phe-bromination"
  ],
  "subTypeId": "chem11-phe-st-bromination",
  "practiceRole": "misconception_check",
  "representationType": "table",
  "estimatedSeconds": 50
},
{
  "id": "chem11-phe-q040",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt73",
  "content": "4-Methylphenol tác dụng nước bromine dư chủ yếu thế vào hai vị trí ortho còn H, nên một mol chất tiêu thụ",
  "responseType": "single_choice",
  "options": [
    "A. 3 mol Br2 và mất CH3.",
    "B. 1 mol Br2 ở vị trí meta.",
    "C. 4 mol Br2 cộng vào vòng.",
    "D. 2 mol Br2, tạo 2,6-dibromo-4-methylphenol."
  ],
  "correctAnswer": "D",
  "difficulty": "easy",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-phe-bromination"
  ],
  "subTypeId": "chem11-phe-st-bromination",
  "practiceRole": "mastery_holdout",
  "representationType": "diagram",
  "isMasteryHoldout": true,
  "estimatedSeconds": 50
},
{
  "id": "chem11-phe-q041",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt73",
  "content": "Phenol với HNO3 đặc trong H2SO4 đặc tạo",
  "responseType": "single_choice",
  "options": [
    "A. 2,4,6-trinitrophenol (picric acid).",
    "B. nitrobenzene duy nhất.",
    "C. benzoic acid.",
    "D. cyclohexanol."
  ],
  "correctAnswer": "A",
  "difficulty": "medium",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-phe-nitration"
  ],
  "subTypeId": "chem11-phe-st-nitration",
  "practiceRole": "guided",
  "representationType": "equation",
  "estimatedSeconds": 75
},
{
  "id": "chem11-phe-q042",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt73",
  "content": "Picric acid thu được trong thí nghiệm có đặc điểm",
  "responseType": "single_choice",
  "options": [
    "A. khí không màu.",
    "B. tinh thể màu vàng.",
    "C. kết tủa trắng giống tribromophenol.",
    "D. dung dịch xanh lam."
  ],
  "correctAnswer": "B",
  "difficulty": "medium",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-phe-nitration",
    "chem11-phe-nitration-experiment"
  ],
  "subTypeId": "chem11-phe-st-nitration",
  "practiceRole": "near_transfer",
  "representationType": "experiment",
  "estimatedSeconds": 75
},
{
  "id": "chem11-phe-q043",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt73",
  "content": "Tỉ lệ mol phenol:HNO3 trong phương trình tạo picric acid là",
  "responseType": "single_choice",
  "options": [
    "A. 1:1.",
    "B. 1:2.",
    "C. 1:3.",
    "D. 3:1."
  ],
  "correctAnswer": "C",
  "difficulty": "medium",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-phe-nitration"
  ],
  "subTypeId": "chem11-phe-st-nitration",
  "practiceRole": "misconception_check",
  "representationType": "equation",
  "estimatedSeconds": 75
},
{
  "id": "chem11-phe-q044",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt73",
  "content": "Từ 0,020 mol phenol, giả sử tạo picric acid hoàn toàn (M=229 g/mol), khối lượng sản phẩm là",
  "responseType": "single_choice",
  "options": [
    "A. 13,74 g.",
    "B. 2,29 g.",
    "C. 6,87 g.",
    "D. 4,58 g."
  ],
  "correctAnswer": "D",
  "difficulty": "medium",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-phe-nitration"
  ],
  "subTypeId": "chem11-phe-st-nitration",
  "practiceRole": "mastery_holdout",
  "representationType": "table",
  "isMasteryHoldout": true,
  "estimatedSeconds": 75
},
{
  "id": "chem11-phe-q045",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt73",
  "content": "Hiện tượng đặc trưng khi nhỏ nước bromine vào dung dịch phenol là",
  "responseType": "single_choice",
  "options": [
    "A. nước bromine mất màu và xuất hiện kết tủa trắng, không cần FeBr3.",
    "B. chỉ tách hai lớp không phản ứng.",
    "C. tạo khí H2.",
    "D. tạo tinh thể vàng."
  ],
  "correctAnswer": "A",
  "difficulty": "medium",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-phe-bromine-experiment",
    "chem11-phe-ring-activation"
  ],
  "subTypeId": "chem11-phe-st-substitution-experiment",
  "practiceRole": "guided",
  "representationType": "experiment",
  "estimatedSeconds": 75
},
{
  "id": "chem11-phe-q046",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt73",
  "content": "So với benzene, phenol bromine hóa dễ hơn vì",
  "responseType": "single_choice",
  "options": [
    "A. phenol không có vòng thơm.",
    "B. –OH hoạt hóa vòng; phenol phản ứng nước bromine ở thường còn benzene cần xúc tác/điều kiện.",
    "C. bromine cộng vào O–H.",
    "D. phenol là muối ion."
  ],
  "correctAnswer": "B",
  "difficulty": "hard",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-phe-ring-activation"
  ],
  "subTypeId": "chem11-phe-st-substitution-experiment",
  "practiceRole": "far_transfer",
  "representationType": "table",
  "estimatedSeconds": 105
},
{
  "id": "chem11-phe-q047",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt73",
  "content": "Thao tác phù hợp trong nitrate hóa phenol là",
  "responseType": "single_choice",
  "options": [
    "A. đổ nhanh HNO3 đặc vào hỗn hợp đang nóng.",
    "B. làm ngoài bàn không thông gió.",
    "C. làm nguội, thêm HNO3 đặc từ từ, kiểm soát nhiệt và thao tác trong tủ hút theo hướng dẫn.",
    "D. cạo tinh thể picric acid khô bằng kim loại."
  ],
  "correctAnswer": "C",
  "difficulty": "hard",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-phe-nitration-experiment"
  ],
  "subTypeId": "chem11-phe-st-substitution-experiment",
  "practiceRole": "misconception_check",
  "representationType": "experiment",
  "misconceptionId": "chem11-mis-phe-nitration-add-fast",
  "estimatedSeconds": 105
},
{
  "id": "chem11-phe-q048",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt73",
  "content": "Ghép đúng phản ứng–hiện tượng–điều kiện là",
  "responseType": "single_choice",
  "options": [
    "A. phenol+Br2(aq) cần FeBr3, tạo chất vàng.",
    "B. phenol+HNO3 đặc tạo kết tủa trắng không nguy hiểm.",
    "C. benzene phản ứng nước bromine nhanh hơn phenol.",
    "D. Br2(aq): kết tủa trắng ở thường; HNO3 đặc/H2SO4 đặc: picric acid vàng và phải kiểm soát an toàn."
  ],
  "correctAnswer": "D",
  "difficulty": "hard",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-phe-bromine-experiment",
    "chem11-phe-nitration-experiment",
    "chem11-phe-ring-activation"
  ],
  "subTypeId": "chem11-phe-st-substitution-experiment",
  "practiceRole": "mastery_holdout",
  "representationType": "table",
  "isMasteryHoldout": true,
  "estimatedSeconds": 105
},
{
  "id": "chem11-phe-q049",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt74",
  "content": "Trình tự đúng của quy trình cumene là",
  "responseType": "single_choice",
  "options": [
    "A. oxi hóa cumene thành hydroperoxide rồi phân cắt trong acid.",
    "B. hydrate hóa trực tiếp cumene thành phenol.",
    "C. đốt hoàn toàn cumene.",
    "D. cộng Br2 rồi dùng Na."
  ],
  "correctAnswer": "A",
  "difficulty": "easy",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-phe-preparation"
  ],
  "subTypeId": "chem11-phe-st-preparation",
  "practiceRole": "guided",
  "representationType": "diagram",
  "estimatedSeconds": 50
},
{
  "id": "chem11-phe-q050",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt74",
  "content": "Đồng sản phẩm quan trọng cùng phenol trong quy trình cumene là",
  "responseType": "single_choice",
  "options": [
    "A. methane.",
    "B. acetone.",
    "C. ethylene.",
    "D. glycerol."
  ],
  "correctAnswer": "B",
  "difficulty": "easy",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-phe-preparation"
  ],
  "subTypeId": "chem11-phe-st-preparation",
  "practiceRole": "near_transfer",
  "representationType": "diagram",
  "estimatedSeconds": 50
},
{
  "id": "chem11-phe-q051",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt74",
  "content": "Nhận xét đúng về nguồn nhựa than đá là",
  "responseType": "single_choice",
  "options": [
    "A. nhựa than đá là phenol tinh khiết.",
    "B. có thể dùng trực tiếp làm dược phẩm.",
    "C. là hỗn hợp chứa phenol và nhiều chất khác, cần tách–tinh chế.",
    "D. không chứa hợp chất aromatic."
  ],
  "correctAnswer": "C",
  "difficulty": "easy",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-phe-preparation"
  ],
  "subTypeId": "chem11-phe-st-preparation",
  "practiceRole": "misconception_check",
  "representationType": "text",
  "misconceptionId": "chem11-mis-coaltar-pure",
  "estimatedSeconds": 50
},
{
  "id": "chem11-phe-q052",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt74",
  "content": "Phương trình gộp khối lượng nguyên tử của tuyến cumene phù hợp là",
  "responseType": "single_choice",
  "options": [
    "A. C9H12 + H2O → C6H5OH duy nhất.",
    "B. C9H12 → C6H6O + C2H6O.",
    "C. C9H12 + 3O2 → C6H6O + C3H6O + H2O.",
    "D. C9H12 + O2 → C6H6O + C3H6O."
  ],
  "correctAnswer": "D",
  "difficulty": "easy",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-phe-preparation"
  ],
  "subTypeId": "chem11-phe-st-preparation",
  "practiceRole": "mastery_holdout",
  "representationType": "equation",
  "isMasteryHoldout": true,
  "estimatedSeconds": 50
},
{
  "id": "chem11-phe-q053",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt74",
  "content": "Ứng dụng phù hợp của phenol là nguyên liệu sản xuất",
  "responseType": "single_choice",
  "options": [
    "A. nhựa phenol–formaldehyde/epoxy, phẩm nhuộm, dược và một số hóa chất chức năng.",
    "B. chỉ nước uống.",
    "C. kim loại sodium.",
    "D. oxygen tinh khiết."
  ],
  "correctAnswer": "A",
  "difficulty": "medium",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-phe-applications-responsibility"
  ],
  "subTypeId": "chem11-phe-st-applications-safety",
  "practiceRole": "guided",
  "representationType": "table",
  "estimatedSeconds": 75
},
{
  "id": "chem11-phe-q054",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt74",
  "content": "Cách hiểu đúng về chế phẩm sát khuẩn chứa phenol là",
  "responseType": "single_choice",
  "options": [
    "A. phenol nguyên chất luôn bôi trực tiếp được.",
    "B. hiệu quả và an toàn phụ thuộc nồng độ, công thức, chỉ định và hướng dẫn sử dụng.",
    "C. càng đậm đặc càng an toàn.",
    "D. không cần nhãn cảnh báo."
  ],
  "correctAnswer": "B",
  "difficulty": "medium",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-phe-applications-responsibility"
  ],
  "subTypeId": "chem11-phe-st-applications-safety",
  "practiceRole": "near_transfer",
  "representationType": "text",
  "estimatedSeconds": 75
},
{
  "id": "chem11-phe-q055",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt74",
  "content": "Biện pháp quản lí phenol phù hợp nhất là",
  "responseType": "single_choice",
  "options": [
    "A. xả cống để pha loãng.",
    "B. đốt ngoài trời.",
    "C. giảm thay thế khi có thể, hệ kín/PPE, thu gom dán nhãn và xử lí chất thải nguy hại.",
    "D. lưu chung mọi hóa chất."
  ],
  "correctAnswer": "C",
  "difficulty": "medium",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-phe-applications-responsibility"
  ],
  "subTypeId": "chem11-phe-st-applications-safety",
  "practiceRole": "misconception_check",
  "representationType": "table",
  "estimatedSeconds": 75
},
{
  "id": "chem11-phe-q056",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt74",
  "content": "Đánh giá cân bằng nhất về phenol là",
  "responseType": "single_choice",
  "options": [
    "A. có ứng dụng nên vô hại.",
    "B. độc nên không có giá trị công nghiệp.",
    "C. chỉ cần chú ý khi đun nóng.",
    "D. là nguyên liệu hữu ích nhưng độc/gây bỏng, nên lợi ích chỉ đạt được khi kiểm soát phơi nhiễm và chất thải."
  ],
  "correctAnswer": "D",
  "difficulty": "medium",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-phe-safety-handling",
    "chem11-phe-applications-responsibility"
  ],
  "subTypeId": "chem11-phe-st-applications-safety",
  "practiceRole": "mastery_holdout",
  "representationType": "table",
  "isMasteryHoldout": true,
  "estimatedSeconds": 75
},
{
  "id": "chem11-phe-q057",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt74",
  "content": "Để phân biệt phenol và ethanol bằng một thuốc thử cho dấu hiệu trực quan rõ, chọn",
  "responseType": "single_choice",
  "options": [
    "A. nước bromine: phenol làm mất màu và tạo kết tủa trắng, ethanol không.",
    "B. Na vì cả hai đều giải phóng H2.",
    "C. oxygen vì cả hai đều không cháy.",
    "D. water vì cả hai luôn tách lớp."
  ],
  "correctAnswer": "A",
  "difficulty": "medium",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-phe-bromine-experiment",
    "chem11-phe-base-experiment"
  ],
  "subTypeId": "chem11-phe-st-integrated-identification",
  "practiceRole": "guided",
  "representationType": "experiment",
  "estimatedSeconds": 75
},
{
  "id": "chem11-phe-q058",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt74",
  "content": "Có ba mẫu phenol, ethanol, benzene. Quy trình ít bước hợp lí là",
  "responseType": "single_choice",
  "options": [
    "A. dùng Na cho cả ba là đủ.",
    "B. dùng nước bromine nhận phenol bằng kết tủa trắng; dùng water nhận ethanol trộn lẫn, benzene tách lớp.",
    "C. dùng quỳ tím nhận phenol đỏ mạnh.",
    "D. ngửi từng mẫu."
  ],
  "correctAnswer": "B",
  "difficulty": "hard",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-phe-concept-classification",
    "chem11-phe-bromine-experiment"
  ],
  "subTypeId": "chem11-phe-st-integrated-identification",
  "practiceRole": "far_transfer",
  "representationType": "table",
  "estimatedSeconds": 105
},
{
  "id": "chem11-phe-q059",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt74",
  "content": "Hỗn hợp 0,20 mol phenol và ethanol dùng vừa đủ 0,08 mol NaOH. Nếu cho phần phenol phản ứng hoàn toàn với Br2 dư, số mol Br2 tiêu thụ là",
  "responseType": "single_choice",
  "options": [
    "A. 0,08 mol.",
    "B. 0,16 mol.",
    "C. 0,24 mol.",
    "D. 0,60 mol."
  ],
  "correctAnswer": "C",
  "difficulty": "hard",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-phe-naoh-carbonate-reactions",
    "chem11-phe-bromination"
  ],
  "subTypeId": "chem11-phe-st-integrated-identification",
  "practiceRole": "misconception_check",
  "representationType": "table",
  "estimatedSeconds": 105
},
{
  "id": "chem11-phe-q060",
  "subjectId": "chemistry",
  "topicId": "chem11-t5",
  "questionTypeId": "chem11-qt74",
  "content": "Chuỗi lập luận hoàn chỉnh đúng là",
  "responseType": "single_choice",
  "options": [
    "A. cumene cộng water trực tiếp→phenol; phenol không phản ứng Br2.",
    "B. nhựa than đá là phenol tinh khiết; phenol vô hại.",
    "C. cumene chỉ tạo phenol; chất thải có thể xả cống.",
    "D. cumene→hydroperoxide→phenol+acetone; phenol+3Br2→tribromophenol trắng; sử dụng phải kiểm soát độc tính/chất thải."
  ],
  "correctAnswer": "D",
  "difficulty": "hard",
  "sourceType": "manual",
  "validatorType": "choice",
  "outcomeIds": [
    "chem11-phe-preparation",
    "chem11-phe-bromination",
    "chem11-phe-applications-responsibility"
  ],
  "subTypeId": "chem11-phe-st-integrated-identification",
  "practiceRole": "mastery_holdout",
  "representationType": "diagram",
  "isMasteryHoldout": true,
  "estimatedSeconds": 105
}
];
