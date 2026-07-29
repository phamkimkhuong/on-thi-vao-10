import type {
  AssessmentCognitiveLevel,
  Question,
  Solution,
  StructuredAnswer
} from '@/types';
import { m1AssessmentQuestions, m1AssessmentSolutions } from '../modules/module1_atoms/assessments';
import { m2AssessmentQuestions, m2AssessmentSolutions } from '../modules/module2_periodic/assessments';
import { m3AssessmentQuestions, m3AssessmentSolutions } from '../modules/module3_bond/assessments';
import { m4AssessmentQuestions, m4AssessmentSolutions } from '../modules/module4_redox/assessments';
import { m5AssessmentQuestions, m5AssessmentSolutions } from '../modules/module5_energy/assessments';

type FormCode = 'a' | 'b';
type Difficulty = Question['difficulty'];
type TrueFalseAnswer = { a: 'Đ' | 'S'; b: 'Đ' | 'S'; c: 'Đ' | 'S'; d: 'Đ' | 'S' };

type ClonePlan = {
  prefix: 'chem10-assess-final1-a' | 'chem10-assess-final1-b' | 'chem10-assess-mid2-a' | 'chem10-assess-mid2-b';
  form: FormCode;
  moduleNumbers: number[];
  mcqPositions: number[];
  shortPositions: number[];
};

export const g10ChemistryPeriodicClonePlans: ClonePlan[] = [
  { prefix: 'chem10-assess-final1-a', form: 'a', moduleNumbers: [1, 2, 3], mcqPositions: [1, 2, 3, 4], shortPositions: [9, 10] },
  { prefix: 'chem10-assess-final1-b', form: 'b', moduleNumbers: [1, 2, 3], mcqPositions: [1, 2, 3, 4], shortPositions: [9, 10] },
  { prefix: 'chem10-assess-mid2-a', form: 'a', moduleNumbers: [4, 5], mcqPositions: [1, 2, 3, 4, 5, 6], shortPositions: [9, 10, 11] },
  { prefix: 'chem10-assess-mid2-b', form: 'b', moduleNumbers: [4, 5], mcqPositions: [1, 2, 3, 4, 5, 6], shortPositions: [9, 10, 11] }
];

type TrueFalseSeed = {
  id: string;
  topicId: string;
  questionTypeId: string;
  content: string;
  statements: [string, string, string, string];
  correct: TrueFalseAnswer;
  analyses: [string, string, string, string];
  difficulty: Difficulty;
  outcomeIds: string[];
  recognition: string;
  mistake: string;
  review: string;
  variantGroupId: string;
};

const tfSeed = (seed: TrueFalseSeed) => seed;

export const g10ChemistryPeriodicTrueFalseSeeds: TrueFalseSeed[] = [
  // Cuối học kỳ I – Mã A.
  tfSeed({
    id: 'chem10-assess-final1-a-q13', topicId: 'chem10-t1', questionTypeId: 'chem10-qt2',
    content: 'Cho nguyên tử $^{23}_{11}Na$ và ion $Na^+$. Đánh giá các phát biểu sau:',
    statements: ['a) Nguyên tử sodium có 11 proton.', 'b) Nguyên tử sodium có 12 neutron.', 'c) Ion $Na^+$ có 12 electron.', 'd) Số khối bằng tổng số proton và neutron.'],
    correct: { a: 'Đ', b: 'Đ', c: 'S', d: 'Đ' },
    analyses: ['Số hiệu nguyên tử $Z=11$ nên có 11 proton.', 'Số neutron là $23-11=12$.', '$Na^+$ đã mất một electron nên còn 10 electron, không phải 12.', 'Theo định nghĩa, $A=Z+N$, tức số khối bằng tổng proton và neutron.'],
    difficulty: 'easy', outcomeIds: ['chem10-atom-symbol'], recognition: 'Đọc kí hiệu nguyên tử và điều chỉnh số electron theo điện tích ion.',
    mistake: 'Lấy số khối làm số neutron hoặc cộng electron cho cation.', review: 'Kí hiệu nguyên tử và ion', variantGroupId: 'chem10-final1-atom-cluster-01'
  }),
  tfSeed({
    id: 'chem10-assess-final1-a-q14', topicId: 'chem10-t2', questionTypeId: 'chem10-qt9',
    content: 'Nguyên tử X có cấu hình electron $1s^22s^22p^63s^1$. Đánh giá các phát biểu:',
    statements: ['a) X thuộc chu kì 3.', 'b) X thuộc nhóm IA.', 'c) X có tính kim loại.', 'd) Bán kính nguyên tử X nhỏ hơn bán kính Mg.'],
    correct: { a: 'Đ', b: 'Đ', c: 'Đ', d: 'S' },
    analyses: ['Số lớp electron lớn nhất là 3 nên X thuộc chu kì 3.', 'Lớp ngoài cùng $3s^1$ cho biết X thuộc nhóm IA.', 'Nguyên tố nhóm IA có xu hướng nhường một electron nên có tính kim loại.', 'Trong cùng chu kì, bán kính giảm từ trái sang phải; Na đứng trước Mg nên bán kính Na lớn hơn Mg.'],
    difficulty: 'medium', outcomeIds: ['chem10-periodic-position', 'chem10-periodic-radius'], recognition: 'Suy vị trí và tính chất tuần hoàn từ cấu hình electron.',
    mistake: 'Đảo chiều biến đổi bán kính trong một chu kì.', review: 'Vị trí và xu hướng tuần hoàn', variantGroupId: 'chem10-final1-periodic-cluster-01'
  }),
  tfSeed({
    id: 'chem10-assess-final1-a-q15', topicId: 'chem10-t3', questionTypeId: 'chem10-qt14',
    content: 'Xét sự hình thành và tính chất của magnesium chloride $MgCl_2$. Đánh giá các phát biểu:',
    statements: ['a) Mg thường nhường 2 electron tạo $Mg^{2+}$.', 'b) Mỗi nguyên tử Cl nhận 1 electron tạo $Cl^-$.', 'c) Tỉ lệ ion $Mg^{2+}:Cl^-$ là $1:2$.', 'd) $MgCl_2$ rắn dẫn điện tốt ở điều kiện thường.'],
    correct: { a: 'Đ', b: 'Đ', c: 'Đ', d: 'S' },
    analyses: ['Mg có hai electron hóa trị và có xu hướng nhường cả hai.', 'Cl cần nhận một electron để đạt cấu hình bền.', 'Trung hòa điện tích cần một $Mg^{2+}$ và hai $Cl^-$.', 'Ở trạng thái rắn, các ion bị giữ tại nút mạng nên không dẫn điện tốt.'],
    difficulty: 'medium', outcomeIds: ['chem10-bond-octet-ion', 'chem10-bond-ionic'], recognition: 'Liên hệ quy tắc octet, điện tích ion và tính chất tinh thể ion.',
    mistake: 'Cho rằng hợp chất ion dẫn điện ở mọi trạng thái.', review: 'Liên kết ion và tinh thể ion', variantGroupId: 'chem10-final1-ionic-cluster-01'
  }),
  tfSeed({
    id: 'chem10-assess-final1-a-q16', topicId: 'chem10-t3', questionTypeId: 'chem10-qt15',
    content: 'Xét phân tử $CO_2$ có cấu tạo Lewis O=C=O. Đánh giá các phát biểu:',
    statements: ['a) Phân tử có hai liên kết đôi C=O.', 'b) Tổng cộng có hai liên kết $\\sigma$ và hai liên kết $\\pi$.', 'c) Phân tử có dạng thẳng.', 'd) Phân tử $CO_2$ phân cực mạnh.'],
    correct: { a: 'Đ', b: 'Đ', c: 'Đ', d: 'S' },
    analyses: ['Mỗi nguyên tử O tạo một liên kết đôi với C.', 'Mỗi liên kết đôi gồm một $\\sigma$ và một $\\pi$.', 'Hai miền liên kết quanh C sắp xếp thẳng hàng.', 'Hai moment liên kết bằng nhau và ngược chiều nên triệt tiêu; phân tử không phân cực.'],
    difficulty: 'hard', outcomeIds: ['chem10-bond-covalent', 'chem10-bond-polarity'], recognition: 'Kết nối Lewis, loại liên kết và hình học phân tử.',
    mistake: 'Thấy liên kết phân cực rồi kết luận ngay phân tử phân cực.', review: 'Liên kết cộng hóa trị và moment lưỡng cực', variantGroupId: 'chem10-final1-covalent-cluster-01'
  }),

  // Cuối học kỳ I – Mã B.
  tfSeed({
    id: 'chem10-assess-final1-b-q13', topicId: 'chem10-t1', questionTypeId: 'chem10-qt2',
    content: 'Cho nguyên tử $^{27}_{13}Al$ và ion $Al^{3+}$. Đánh giá các phát biểu sau:',
    statements: ['a) Nguyên tử aluminium có 13 proton.', 'b) Nguyên tử aluminium có 14 neutron.', 'c) Ion $Al^{3+}$ có 16 electron.', 'd) Điện tích hạt nhân của aluminium là $+13$.'],
    correct: { a: 'Đ', b: 'Đ', c: 'S', d: 'Đ' },
    analyses: ['$Z=13$ nên có 13 proton.', '$N=A-Z=27-13=14$.', '$Al^{3+}$ đã mất 3 electron nên còn 10 electron.', 'Điện tích hạt nhân tính theo điện tích nguyên tố là $+13$.'],
    difficulty: 'easy', outcomeIds: ['chem10-atom-symbol'], recognition: 'Đọc số hiệu nguyên tử, số khối và điện tích ion.',
    mistake: 'Cộng electron khi tạo cation.', review: 'Kí hiệu nguyên tử và ion', variantGroupId: 'chem10-final1-atom-cluster-01'
  }),
  tfSeed({
    id: 'chem10-assess-final1-b-q14', topicId: 'chem10-t2', questionTypeId: 'chem10-qt9',
    content: 'Nguyên tử Y có cấu hình electron $1s^22s^22p^63s^23p^5$. Đánh giá các phát biểu:',
    statements: ['a) Y thuộc chu kì 3.', 'b) Y thuộc nhóm VIIA.', 'c) Y có tính phi kim.', 'd) Độ âm điện của Y nhỏ hơn của sulfur.'],
    correct: { a: 'Đ', b: 'Đ', c: 'Đ', d: 'S' },
    analyses: ['Có ba lớp electron nên Y thuộc chu kì 3.', 'Bảy electron hóa trị cho vị trí nhóm VIIA.', 'Nguyên tố gần đạt octet và có xu hướng nhận electron nên là phi kim.', 'Trong chu kì 3, độ âm điện tăng từ trái sang phải; chlorine đứng sau sulfur nên lớn hơn sulfur.'],
    difficulty: 'medium', outcomeIds: ['chem10-periodic-position', 'chem10-periodic-character'], recognition: 'Suy vị trí và tính chất từ cấu hình electron.',
    mistake: 'Đảo chiều xu hướng độ âm điện.', review: 'Độ âm điện và tính phi kim', variantGroupId: 'chem10-final1-periodic-cluster-01'
  }),
  tfSeed({
    id: 'chem10-assess-final1-b-q15', topicId: 'chem10-t3', questionTypeId: 'chem10-qt14',
    content: 'Xét sự hình thành và tính chất của sodium oxide $Na_2O$. Đánh giá các phát biểu:',
    statements: ['a) Mỗi Na nhường 1 electron tạo $Na^+$.', 'b) O nhận 2 electron tạo $O^{2-}$.', 'c) Tỉ lệ ion $Na^+:O^{2-}$ là $2:1$.', 'd) $Na_2O$ nóng chảy không dẫn điện.'],
    correct: { a: 'Đ', b: 'Đ', c: 'Đ', d: 'S' },
    analyses: ['Na có một electron hóa trị nên thường nhường một electron.', 'O nhận hai electron để đạt octet.', 'Hai ion $Na^+$ cân bằng điện tích với một $O^{2-}$.', 'Ở trạng thái nóng chảy, ion chuyển động tự do nên chất dẫn điện.'],
    difficulty: 'medium', outcomeIds: ['chem10-bond-octet-ion', 'chem10-bond-ionic'], recognition: 'Xác định ion, tỉ lệ điện tích và khả năng dẫn điện.',
    mistake: 'Nhầm tính dẫn điện của chất ion rắn và nóng chảy.', review: 'Tinh thể ion', variantGroupId: 'chem10-final1-ionic-cluster-01'
  }),
  tfSeed({
    id: 'chem10-assess-final1-b-q16', topicId: 'chem10-t3', questionTypeId: 'chem10-qt15',
    content: 'Xét phân tử $NH_3$. Đánh giá các phát biểu:',
    statements: ['a) N tạo ba liên kết đơn N–H.', 'b) Trên N còn một cặp electron chưa liên kết.', 'c) Giữa các phân tử $NH_3$ có thể hình thành liên kết hydrogen.', 'd) Liên kết N–H là liên kết ion.'],
    correct: { a: 'Đ', b: 'Đ', c: 'Đ', d: 'S' },
    analyses: ['N dùng ba electron độc thân tạo ba liên kết đơn với H.', 'Sau khi tạo ba liên kết, N còn một cặp electron tự do.', 'N–H phân cực và N có cặp electron tự do nên các phân tử có thể tạo liên kết hydrogen.', 'N–H là liên kết cộng hóa trị phân cực, không phải liên kết ion.'],
    difficulty: 'hard', outcomeIds: ['chem10-bond-covalent', 'chem10-bond-intermolecular'], recognition: 'Đọc Lewis và nhận diện liên kết hydrogen.',
    mistake: 'Gọi mọi liên kết với nguyên tử có độ âm điện lớn là liên kết ion.', review: 'Lewis và liên kết hydrogen', variantGroupId: 'chem10-final1-covalent-cluster-01'
  }),

  // Giữa học kỳ II – Mã A.
  tfSeed({
    id: 'chem10-assess-mid2-a-q13', topicId: 'chem10-t4', questionTypeId: 'chem10-qt18',
    content: 'Xét phản ứng $Fe_2O_3+3CO\\rightarrow2Fe+3CO_2$. Đánh giá các phát biểu:',
    statements: ['a) Fe giảm số oxi hóa từ +3 xuống 0.', 'b) Carbon trong CO tăng số oxi hóa từ +2 lên +4.', 'c) CO là chất khử.', 'd) Tổng hệ số tối giản của phương trình bằng 8.'],
    correct: { a: 'Đ', b: 'Đ', c: 'Đ', d: 'S' },
    analyses: ['Fe(+3) nhận electron tạo Fe(0), nên bị khử.', 'C(+2) nhường electron thành C(+4), nên bị oxi hóa.', 'CO chứa nguyên tố bị oxi hóa nên đóng vai trò chất khử.', 'Tổng hệ số là $1+3+2+3=9$, không phải 8.'],
    difficulty: 'easy', outcomeIds: ['chem10-redox-oxidation-number', 'chem10-redox-agents'], recognition: 'Theo dõi số oxi hóa để xác định quá trình và vai trò.',
    mistake: 'Nhầm chất bị khử là chất khử.', review: 'Số oxi hóa và chất oxi hóa–khử', variantGroupId: 'chem10-mid2-redox-cluster-01'
  }),
  tfSeed({
    id: 'chem10-assess-mid2-a-q14', topicId: 'chem10-t4', questionTypeId: 'chem10-qt21',
    content: 'Cân bằng phản ứng $H_2S+O_2\\rightarrow SO_2+H_2O$. Đánh giá các phát biểu:',
    statements: ['a) S trong $H_2S$ có số oxi hóa −2.', 'b) $H_2S$ là chất khử.', 'c) $O_2$ là chất oxi hóa.', 'd) Hệ số tối giản của $O_2$ bằng 2.'],
    correct: { a: 'Đ', b: 'Đ', c: 'Đ', d: 'S' },
    analyses: ['Trong hợp chất với H, sulfur có số oxi hóa −2.', 'S tăng từ −2 lên +4 nên $H_2S$ bị oxi hóa và là chất khử.', 'O giảm từ 0 xuống −2 nên $O_2$ là chất oxi hóa.', 'Phương trình cân bằng là $2H_2S+3O_2\\to2SO_2+2H_2O$, hệ số $O_2$ bằng 3.'],
    difficulty: 'medium', outcomeIds: ['chem10-redox-process', 'chem10-redox-balance'], recognition: 'Cân bằng electron và kiểm tra hệ số tối giản.',
    mistake: 'Cân bằng nguyên tử mà không bảo toàn electron.', review: 'Phương pháp thăng bằng electron', variantGroupId: 'chem10-mid2-balance-cluster-01'
  }),
  tfSeed({
    id: 'chem10-assess-mid2-a-q15', topicId: 'chem10-t5', questionTypeId: 'chem10-qt22',
    content: 'Phản ứng $N_2+3H_2\\rightarrow2NH_3$ có $\\Delta H=-92\\,kJ$. Đánh giá các phát biểu:',
    statements: ['a) Phản ứng thuận tỏa nhiệt.', 'b) Sản phẩm thấp hơn chất đầu 92 kJ về enthalpy.', 'c) Phản ứng nghịch có $\\Delta H=+92\\,kJ$.', 'd) Tạo 1 mol $NH_3$ theo phản ứng giải phóng 92 kJ.'],
    correct: { a: 'Đ', b: 'Đ', c: 'Đ', d: 'S' },
    analyses: ['$\\Delta H<0$ nên phản ứng thuận tỏa nhiệt.', '$H_{sp}-H_{cđ}=-92$ kJ nên sản phẩm thấp hơn 92 kJ.', 'Đảo chiều phản ứng làm đổi dấu $\\Delta H$.', '92 kJ ứng với 2 mol $NH_3$; 1 mol chỉ giải phóng 46 kJ.'],
    difficulty: 'medium', outcomeIds: ['chem10-energy-system', 'chem10-energy-enthalpy'], recognition: 'Giải thích dấu, chiều và hệ số tỉ lượng của enthalpy phản ứng.',
    mistake: 'Không chia năng lượng theo hệ số mol sản phẩm.', review: 'Ý nghĩa và quy đổi ΔH', variantGroupId: 'chem10-mid2-enthalpy-cluster-01'
  }),
  tfSeed({
    id: 'chem10-assess-mid2-a-q16', topicId: 'chem10-t5', questionTypeId: 'chem10-qt25',
    content: 'Cho $E_{H-H}=436$, $E_{Cl-Cl}=243$, $E_{H-Cl}=431$ kJ/mol. Xét phản ứng $H_2+Cl_2\\rightarrow2HCl$.',
    statements: ['a) Năng lượng phá liên kết là 679 kJ.', 'b) Năng lượng tạo liên kết là 862 kJ.', 'c) $\\Delta H$ xấp xỉ −183 kJ.', 'd) Phản ứng là phản ứng thu nhiệt.'],
    correct: { a: 'Đ', b: 'Đ', c: 'Đ', d: 'S' },
    analyses: ['Phá một H–H và một Cl–Cl cần $436+243=679$ kJ.', 'Tạo hai H–Cl giải phóng năng lượng có độ lớn $2\\cdot431=862$ kJ.', '$\\Delta H=679-862=-183$ kJ.', '$\\Delta H<0$ nên phản ứng tỏa nhiệt.'],
    difficulty: 'hard', outcomeIds: ['chem10-energy-bond'], recognition: 'Tính ΔH bằng năng lượng liên kết phá trừ năng lượng liên kết tạo.',
    mistake: 'Đảo thứ tự “phá trừ tạo”.', review: 'Năng lượng liên kết', variantGroupId: 'chem10-mid2-bond-energy-cluster-01'
  }),

  // Giữa học kỳ II – Mã B.
  tfSeed({
    id: 'chem10-assess-mid2-b-q13', topicId: 'chem10-t4', questionTypeId: 'chem10-qt18',
    content: 'Xét phản ứng $CuO+H_2\\rightarrow Cu+H_2O$. Đánh giá các phát biểu:',
    statements: ['a) Cu giảm số oxi hóa từ +2 xuống 0.', 'b) H tăng số oxi hóa từ 0 lên +1.', 'c) $H_2$ là chất khử.', 'd) CuO là chất khử.'],
    correct: { a: 'Đ', b: 'Đ', c: 'Đ', d: 'S' },
    analyses: ['Cu(+2) nhận electron tạo Cu(0).', 'H(0) nhường electron tạo H(+1) trong nước.', '$H_2$ bị oxi hóa nên là chất khử.', 'CuO chứa Cu bị khử nên CuO là chất oxi hóa.'],
    difficulty: 'easy', outcomeIds: ['chem10-redox-oxidation-number', 'chem10-redox-agents'], recognition: 'Dựa vào biến đổi số oxi hóa để xác định vai trò.',
    mistake: 'Đồng nhất chất chứa oxygen với chất khử.', review: 'Chất oxi hóa và chất khử', variantGroupId: 'chem10-mid2-redox-cluster-01'
  }),
  tfSeed({
    id: 'chem10-assess-mid2-b-q14', topicId: 'chem10-t4', questionTypeId: 'chem10-qt21',
    content: 'Cân bằng phản ứng $NH_3+O_2\\rightarrow N_2+H_2O$. Đánh giá các phát biểu:',
    statements: ['a) N trong $NH_3$ có số oxi hóa −3.', 'b) $NH_3$ là chất khử.', 'c) $O_2$ là chất oxi hóa.', 'd) Phương trình tối giản có hệ số $NH_3$ bằng 2.'],
    correct: { a: 'Đ', b: 'Đ', c: 'Đ', d: 'S' },
    analyses: ['Trong $NH_3$, H có +1 nên N có −3.', 'N tăng từ −3 lên 0 nên $NH_3$ là chất khử.', 'O giảm từ 0 xuống −2 nên $O_2$ là chất oxi hóa.', 'Phương trình là $4NH_3+3O_2\\to2N_2+6H_2O$, hệ số $NH_3$ bằng 4.'],
    difficulty: 'medium', outcomeIds: ['chem10-redox-process', 'chem10-redox-balance'], recognition: 'Cân bằng phản ứng oxi hóa–khử bằng electron.',
    mistake: 'Rút gọn hệ số khi các hệ số không có ước chung.', review: 'Cân bằng electron', variantGroupId: 'chem10-mid2-balance-cluster-01'
  }),
  tfSeed({
    id: 'chem10-assess-mid2-b-q15', topicId: 'chem10-t5', questionTypeId: 'chem10-qt22',
    content: 'Phản ứng $2SO_2+O_2\\rightarrow2SO_3$ có $\\Delta H=-198\\,kJ$. Đánh giá các phát biểu:',
    statements: ['a) Phản ứng thuận tỏa nhiệt.', 'b) Phản ứng nghịch có $\\Delta H=+198\\,kJ$.', 'c) Tạo 1 mol $SO_3$ giải phóng 99 kJ.', 'd) Tạo 4 mol $SO_3$ giải phóng 198 kJ.'],
    correct: { a: 'Đ', b: 'Đ', c: 'Đ', d: 'S' },
    analyses: ['$\\Delta H<0$ nên phản ứng thuận tỏa nhiệt.', 'Đảo chiều làm đổi dấu enthalpy.', '198 kJ ứng với 2 mol $SO_3$, nên 1 mol ứng với 99 kJ.', '4 mol gấp đôi phương trình nên giải phóng 396 kJ.'],
    difficulty: 'medium', outcomeIds: ['chem10-energy-system', 'chem10-energy-enthalpy'], recognition: 'Quy đổi enthalpy theo chiều và hệ số phản ứng.',
    mistake: 'Không nhân enthalpy khi nhân hệ số phương trình.', review: 'Quy đổi ΔH', variantGroupId: 'chem10-mid2-enthalpy-cluster-01'
  }),
  tfSeed({
    id: 'chem10-assess-mid2-b-q16', topicId: 'chem10-t5', questionTypeId: 'chem10-qt25',
    content: 'Cho $E_{N\\equiv N}=945$, $E_{H-H}=436$, $E_{N-H}=391$ kJ/mol. Xét $N_2+3H_2\\rightarrow2NH_3$.',
    statements: ['a) Tổng năng lượng phá liên kết là 2253 kJ.', 'b) Có 6 liên kết N–H được tạo thành.', 'c) Năng lượng tạo liên kết có độ lớn 2346 kJ.', 'd) $\\Delta H$ xấp xỉ +93 kJ.'],
    correct: { a: 'Đ', b: 'Đ', c: 'Đ', d: 'S' },
    analyses: ['Phá một N≡N và ba H–H cần $945+3\\cdot436=2253$ kJ.', 'Hai phân tử $NH_3$ chứa tổng cộng 6 liên kết N–H.', 'Độ lớn năng lượng tạo là $6\\cdot391=2346$ kJ.', '$\\Delta H=2253-2346=-93$ kJ, không phải +93 kJ.'],
    difficulty: 'hard', outcomeIds: ['chem10-energy-bond'], recognition: 'Đếm liên kết và tính năng lượng phá–tạo.',
    mistake: 'Chỉ đếm ba liên kết N–H cho hai phân tử ammonia.', review: 'Năng lượng liên kết', variantGroupId: 'chem10-mid2-bond-energy-cluster-01'
  }),

  // Cuối học kỳ II – Mã A.
  tfSeed({
    id: 'chem10-assess-final2-a-tf01', topicId: 'chem10-t4', questionTypeId: 'chem10-qt21',
    content: 'Xét phản ứng $2Al+Fe_2O_3\\rightarrow Al_2O_3+2Fe$. Đánh giá các phát biểu:',
    statements: ['a) Al tăng số oxi hóa từ 0 lên +3.', 'b) Fe giảm số oxi hóa từ +3 xuống 0.', 'c) Al là chất khử.', 'd) Mỗi mol $Fe_2O_3$ nhận 3 mol electron.'],
    correct: { a: 'Đ', b: 'Đ', c: 'Đ', d: 'S' },
    analyses: ['Al nhường electron và tăng từ 0 lên +3.', 'Fe(+3) nhận electron tạo Fe(0).', 'Chất nhường electron là chất khử, nên Al là chất khử.', 'Hai Fe(+3) nhận tổng cộng 6 mol electron cho mỗi mol $Fe_2O_3$.'],
    difficulty: 'easy', outcomeIds: ['chem10-redox-balance'], recognition: 'Theo dõi electron trong phản ứng nhiệt nhôm.',
    mistake: 'Chỉ tính electron cho một nguyên tử Fe.', review: 'Bảo toàn electron', variantGroupId: 'chem10-final2-redox-tf-01'
  }),
  tfSeed({
    id: 'chem10-assess-final2-a-tf02', topicId: 'chem10-t5', questionTypeId: 'chem10-qt24',
    content: 'Cho $\\Delta_fH^\\circ(CO_2)=-393{,}5$ và $\\Delta_fH^\\circ(CO)=-110{,}5$ kJ/mol; $\\Delta_fH^\\circ(O_2)=0$. Xét $2CO+O_2\\to2CO_2$.',
    statements: ['a) Tổng enthalpy tạo thành của sản phẩm là −787,0 kJ.', 'b) Tổng enthalpy tạo thành của chất đầu là −221,0 kJ.', 'c) $\\Delta_rH^\\circ=-566,0$ kJ.', 'd) Phản ứng là thu nhiệt.'],
    correct: { a: 'Đ', b: 'Đ', c: 'Đ', d: 'S' },
    analyses: ['$2(-393{,}5)=-787{,}0$ kJ.', '$2(-110{,}5)+0=-221{,}0$ kJ.', '$\\Delta H=-787-(-221)=-566$ kJ.', '$\\Delta H<0$ nên phản ứng tỏa nhiệt.'],
    difficulty: 'medium', outcomeIds: ['chem10-energy-formation'], recognition: 'Tính enthalpy phản ứng từ enthalpy tạo thành chuẩn.',
    mistake: 'Lấy chất đầu trừ sản phẩm.', review: 'Công thức ΔH tạo thành', variantGroupId: 'chem10-final2-energy-tf-01'
  }),
  tfSeed({
    id: 'chem10-assess-final2-a-tf03', topicId: 'chem10-t6', questionTypeId: 'chem10-qt28',
    content: 'Xét phản ứng giữa zinc và dung dịch HCl. Đánh giá các phát biểu:',
    statements: ['a) Nghiền nhỏ zinc thường làm phản ứng nhanh hơn.', 'b) Tăng nồng độ HCl thường làm số va chạm tăng.', 'c) Tăng nhiệt độ làm mọi va chạm đều hiệu quả.', 'd) Chất xúc tác tạo con đường có năng lượng hoạt hóa thấp hơn.'],
    correct: { a: 'Đ', b: 'Đ', c: 'S', d: 'Đ' },
    analyses: ['Nghiền nhỏ làm tăng diện tích tiếp xúc.', 'Nồng độ cao làm tăng tần suất va chạm.', 'Tăng nhiệt độ chỉ làm tăng tỉ lệ va chạm đủ năng lượng, không biến mọi va chạm thành hiệu quả.', 'Xúc tác cung cấp cơ chế phản ứng có năng lượng hoạt hóa thấp hơn.'],
    difficulty: 'medium', outcomeIds: ['chem10-rate-factors', 'chem10-rate-catalyst'], recognition: 'Giải thích yếu tố tốc độ bằng thuyết va chạm.',
    mistake: 'Cho rằng mọi va chạm đều tạo sản phẩm.', review: 'Các yếu tố ảnh hưởng tốc độ', variantGroupId: 'chem10-final2-rate-tf-01'
  }),
  tfSeed({
    id: 'chem10-assess-final2-a-tf04', topicId: 'chem10-t7', questionTypeId: 'chem10-qt34',
    content: 'Xét chlorine và các ion halide. Đánh giá các phát biểu:',
    statements: ['a) $Cl_2$ oxi hóa được $Br^-$ thành $Br_2$.', 'b) $Cl_2$ oxi hóa được $I^-$ thành $I_2$.', 'c) Dung dịch $AgNO_3$ tạo kết tủa trắng với $Cl^-$.', 'd) HF là acid mạnh hơn HCl trong nước.'],
    correct: { a: 'Đ', b: 'Đ', c: 'Đ', d: 'S' },
    analyses: ['Tính oxi hóa giảm từ Cl₂ xuống Br₂ nên Cl₂ oxi hóa được Br⁻.', 'Cl₂ cũng oxi hóa được I⁻.', 'AgCl là kết tủa trắng.', 'Liên kết H–F rất bền nên HF là acid yếu hơn HCl trong nước.'],
    difficulty: 'hard', outcomeIds: ['chem10-halogen-oxidizing', 'chem10-halogen-identification', 'chem10-halogen-hydrogen'], recognition: 'Kết hợp xu hướng oxi hóa, nhận biết halide và độ mạnh acid.',
    mistake: 'Suy độ mạnh acid chỉ từ độ âm điện.', review: 'Halogen và hydrogen halide', variantGroupId: 'chem10-final2-halogen-tf-01'
  }),

  // Cuối học kỳ II – Mã B.
  tfSeed({
    id: 'chem10-assess-final2-b-tf01', topicId: 'chem10-t4', questionTypeId: 'chem10-qt21',
    content: 'Xét phản ứng $Zn+CuSO_4\\rightarrow ZnSO_4+Cu$. Đánh giá các phát biểu:',
    statements: ['a) Zn tăng số oxi hóa từ 0 lên +2.', 'b) Cu giảm số oxi hóa từ +2 xuống 0.', 'c) $Cu^{2+}$ là chất oxi hóa.', 'd) Mỗi mol Zn nhận 2 mol electron.'],
    correct: { a: 'Đ', b: 'Đ', c: 'Đ', d: 'S' },
    analyses: ['Zn nhường 2 electron và tăng lên +2.', '$Cu^{2+}$ nhận 2 electron tạo Cu.', 'Chất nhận electron là chất oxi hóa.', 'Zn nhường, không nhận, 2 mol electron trên mỗi mol Zn.'],
    difficulty: 'easy', outcomeIds: ['chem10-redox-process', 'chem10-redox-agents'], recognition: 'Nhận diện quá trình nhường–nhận electron.',
    mistake: 'Đảo vai trò chất oxi hóa và chất khử.', review: 'Quá trình oxi hóa–khử', variantGroupId: 'chem10-final2-redox-tf-01'
  }),
  tfSeed({
    id: 'chem10-assess-final2-b-tf02', topicId: 'chem10-t5', questionTypeId: 'chem10-qt24',
    content: 'Cho $\\Delta_fH^\\circ(H_2O(l))=-285{,}8$ kJ/mol; $\\Delta_fH^\\circ(H_2)=\\Delta_fH^\\circ(O_2)=0$. Xét $2H_2+O_2\\to2H_2O(l)$.',
    statements: ['a) Tổng enthalpy tạo thành của sản phẩm là −571,6 kJ.', 'b) Tổng enthalpy tạo thành của chất đầu bằng 0.', 'c) $\\Delta_rH^\\circ=-571,6$ kJ.', 'd) Tạo 1 mol nước giải phóng 571,6 kJ.'],
    correct: { a: 'Đ', b: 'Đ', c: 'Đ', d: 'S' },
    analyses: ['$2(-285{,}8)=-571{,}6$ kJ.', 'Các đơn chất bền có enthalpy tạo thành chuẩn bằng 0.', '$\\Delta H=-571{,}6-0=-571{,}6$ kJ.', 'Giá trị trên ứng với 2 mol nước; 1 mol giải phóng 285,8 kJ.'],
    difficulty: 'medium', outcomeIds: ['chem10-energy-formation'], recognition: 'Tính và quy đổi enthalpy phản ứng.',
    mistake: 'Không chia theo hệ số tỉ lượng.', review: 'Enthalpy tạo thành chuẩn', variantGroupId: 'chem10-final2-energy-tf-01'
  }),
  tfSeed({
    id: 'chem10-assess-final2-b-tf03', topicId: 'chem10-t6', questionTypeId: 'chem10-qt28',
    content: 'Xét các yếu tố ảnh hưởng đến tốc độ phản ứng. Đánh giá các phát biểu:',
    statements: ['a) Tăng diện tích bề mặt chất rắn thường làm phản ứng nhanh hơn.', 'b) Giảm nồng độ chất phản ứng thường làm tần suất va chạm giảm.', 'c) Chất xúc tác làm thay đổi $\\Delta H$ của phản ứng.', 'd) Tăng nhiệt độ thường làm tăng tỉ lệ va chạm hiệu quả.'],
    correct: { a: 'Đ', b: 'Đ', c: 'S', d: 'Đ' },
    analyses: ['Bề mặt lớn hơn tạo nhiều vị trí va chạm hơn.', 'Nồng độ thấp hơn làm số tiểu phân trong một đơn vị thể tích giảm.', 'Xúc tác không làm thay đổi enthalpy đầu–cuối của phản ứng.', 'Nhiệt độ cao làm nhiều tiểu phân vượt năng lượng hoạt hóa hơn.'],
    difficulty: 'medium', outcomeIds: ['chem10-rate-factors', 'chem10-rate-catalyst'], recognition: 'Phân biệt tác động động học và nhiệt động học.',
    mistake: 'Cho rằng xúc tác làm phản ứng tỏa nhiệt hơn.', review: 'Tốc độ và xúc tác', variantGroupId: 'chem10-final2-rate-tf-01'
  }),
  tfSeed({
    id: 'chem10-assess-final2-b-tf04', topicId: 'chem10-t7', questionTypeId: 'chem10-qt34',
    content: 'Xét bromine và các hợp chất halogen. Đánh giá các phát biểu:',
    statements: ['a) $Br_2$ oxi hóa được $I^-$ thành $I_2$.', 'b) $Br_2$ oxi hóa được $Cl^-$ thành $Cl_2$.', 'c) AgBr là kết tủa màu vàng nhạt/kem.', 'd) HCl phân li trong nước mạnh hơn HF.'],
    correct: { a: 'Đ', b: 'S', c: 'Đ', d: 'Đ' },
    analyses: ['Br₂ có tính oxi hóa mạnh hơn I₂ nên oxi hóa được I⁻.', 'Br₂ yếu hơn Cl₂ nên không oxi hóa được Cl⁻.', 'AgBr có màu vàng nhạt hoặc kem.', 'Liên kết H–Cl kém bền hơn H–F nên HCl là acid mạnh hơn trong nước.'],
    difficulty: 'hard', outcomeIds: ['chem10-halogen-oxidizing', 'chem10-halogen-identification', 'chem10-halogen-hydrogen'], recognition: 'Dùng thứ tự tính oxi hóa và đặc điểm kết tủa halide.',
    mistake: 'Cho rằng mọi halogen đều oxi hóa được mọi ion halide khác.', review: 'Dãy halogen', variantGroupId: 'chem10-final2-halogen-tf-01'
  })
];

type ShortSeed = {
  id: string;
  topicId: string;
  questionTypeId: string;
  content: string;
  correctAnswer: string;
  acceptedAnswers: string[];
  outcomeIds: string[];
  reasoning: string[];
  mistake: string;
  review: string;
  variantGroupId: string;
};

export const g10ChemistryFinal2ExtraShortSeeds: ShortSeed[] = [
  {
    id: 'chem10-assess-final2-a-extra-short01', topicId: 'chem10-t7', questionTypeId: 'chem10-qt32',
    content: 'Cho $0{,}20$ mol $Cl_2$ phản ứng vừa đủ với dung dịch KI dư. Tính số mol $I_2$ tạo thành.',
    correctAnswer: '0.2', acceptedAnswers: ['0.2', '0,2'], outcomeIds: ['chem10-halogen-reactions'],
    reasoning: ['$Cl_2+2I^-\\rightarrow2Cl^-+I_2$.', 'Tỉ lệ mol $Cl_2:I_2=1:1$, nên $n(I_2)=0{,}20$ mol.'],
    mistake: 'Dùng tỉ lệ 1:2 giữa chlorine và iodine.', review: 'Phản ứng thế halogen', variantGroupId: 'chem10-final2-halogen-short-extra-01'
  },
  {
    id: 'chem10-assess-final2-b-extra-short01', topicId: 'chem10-t7', questionTypeId: 'chem10-qt32',
    content: 'Cho $0{,}15$ mol $Br_2$ phản ứng vừa đủ với dung dịch NaI dư. Tính số mol $I_2$ tạo thành.',
    correctAnswer: '0.15', acceptedAnswers: ['0.15', '0,15'], outcomeIds: ['chem10-halogen-reactions'],
    reasoning: ['$Br_2+2I^-\\rightarrow2Br^-+I_2$.', 'Tỉ lệ mol $Br_2:I_2=1:1$, nên $n(I_2)=0{,}15$ mol.'],
    mistake: 'Nhân đôi số mol iodine vì hệ số của ion iodide bằng 2.', review: 'Phản ứng thế halogen', variantGroupId: 'chem10-final2-halogen-short-extra-01'
  }
];

const allSourceQuestions = [
  ...m1AssessmentQuestions,
  ...m2AssessmentQuestions,
  ...m3AssessmentQuestions,
  ...m4AssessmentQuestions,
  ...m5AssessmentQuestions
];
const allSourceSolutions = [
  ...m1AssessmentSolutions,
  ...m2AssessmentSolutions,
  ...m3AssessmentSolutions,
  ...m4AssessmentSolutions,
  ...m5AssessmentSolutions
];
const sourceQuestionById = new Map(allSourceQuestions.map(question => [question.id, question]));
const sourceSolutionByQuestionId = new Map(allSourceSolutions.map(solution => [solution.questionId, solution]));

const answerPattern = ['A', 'B', 'C', 'D'] as const;
const mcqDifficulties: Difficulty[] = ['easy', 'easy', 'easy', 'easy', 'medium', 'medium', 'medium', 'medium', 'medium', 'medium', 'hard', 'hard'];
const shortDifficulties: Difficulty[] = ['easy', 'medium', 'medium', 'medium', 'medium', 'hard'];

const sourceId = (moduleNumber: number, form: FormCode, position: number) =>
  `chem10-assess-m${moduleNumber}-cp-${form}-q${String(position).padStart(2, '0')}`;

const stripOptionLabel = (option: string) => option.replace(/^[A-D]\.\s*/, '');

export const rebalanceChemistryChoice = (
  question: Question,
  targetAnswer: 'A' | 'B' | 'C' | 'D'
): Question => {
  if (!question.options || !['A', 'B', 'C', 'D'].includes(question.correctAnswer)) return question;
  const correctIndex = question.correctAnswer.charCodeAt(0) - 65;
  const correctOption = stripOptionLabel(question.options[correctIndex]);
  const wrongOptions = question.options
    .filter((_, index) => index !== correctIndex)
    .map(stripOptionLabel);
  const targetIndex = targetAnswer.charCodeAt(0) - 65;
  const reordered: string[] = [];
  let wrongIndex = 0;
  for (let index = 0; index < 4; index += 1) {
    reordered.push(index === targetIndex ? correctOption : wrongOptions[wrongIndex++]);
  }
  return {
    ...question,
    options: reordered.map((option, index) => `${String.fromCharCode(65 + index)}. ${option}`),
    correctAnswer: targetAnswer,
    acceptedAnswers: [targetAnswer, targetAnswer.toLowerCase()],
    validatorType: 'choice',
    responseType: 'single_choice'
  };
};

const cognitiveFor = (difficulty: Difficulty): AssessmentCognitiveLevel =>
  difficulty === 'easy' ? 'recognition' : difficulty === 'medium' ? 'understanding' : 'application';

const cloneSourceQuestion = (
  source: Question,
  id: string,
  section: 'mcq' | 'short',
  index: number
): Question => {
  const difficulty = section === 'mcq' ? mcqDifficulties[index] : shortDifficulties[index];
  const common = {
    ...source,
    id,
    sourceType: 'mock_exam' as const,
    difficulty,
    cognitiveLevel: cognitiveFor(difficulty),
    points: section === 'mcq' ? 0.25 : 0.5
  };
  if (section === 'mcq') return rebalanceChemistryChoice(common, answerPattern[index % 4]);
  return { ...common, responseType: 'short_answer' };
};

const cloneSourceSolution = (sourceQuestionId: string, question: Question): Solution => {
  const source = sourceSolutionByQuestionId.get(sourceQuestionId);
  const explanation = source?.detailedSteps.map(step => step.explanation).join(' ') || 'Áp dụng trực tiếp kiến thức và dữ kiện của câu hỏi.';
  return {
    id: `solution-${question.id}`,
    questionId: question.id,
    recognition: source?.recognition || 'Xác định dạng bài, dữ kiện và đại lượng cần tìm.',
    detailedSteps: [
      { order: 1, title: 'Nhận dạng', explanation: source?.recognition || 'Xác định kiến thức Hóa học cần sử dụng.' },
      { order: 2, title: 'Phân tích và tính toán', explanation },
      { order: 3, title: 'Kiểm tra và kết luận', explanation: `Đáp án cuối cùng là ${question.correctAnswer}.`, result: question.correctAnswer }
    ],
    finalAnswer: question.correctAnswer,
    commonMistakes: source?.commonMistakes?.length ? source.commonMistakes : ['Bỏ qua điều kiện hoặc hệ số trong dữ kiện.'],
    reviewSuggestions: source?.reviewSuggestions?.length ? source.reviewSuggestions : ['Ôn lại dạng bài tương ứng.']
  };
};

const clonedQuestions: Question[] = [];
const clonedSolutions: Solution[] = [];

for (const plan of g10ChemistryPeriodicClonePlans) {
  let mcqIndex = 0;
  for (const moduleNumber of plan.moduleNumbers) {
    for (const position of plan.mcqPositions) {
      const sourceQuestionId = sourceId(moduleNumber, plan.form, position);
      const source = sourceQuestionById.get(sourceQuestionId);
      if (!source) throw new Error(`Không tìm thấy câu nguồn ${sourceQuestionId}.`);
      const id = `${plan.prefix}-q${String(mcqIndex + 1).padStart(2, '0')}`;
      const question = cloneSourceQuestion(source, id, 'mcq', mcqIndex);
      clonedQuestions.push(question);
      clonedSolutions.push(cloneSourceSolution(sourceQuestionId, question));
      mcqIndex += 1;
    }
  }

  let shortIndex = 0;
  for (const moduleNumber of plan.moduleNumbers) {
    for (const position of plan.shortPositions) {
      const sourceQuestionId = sourceId(moduleNumber, plan.form, position);
      const source = sourceQuestionById.get(sourceQuestionId);
      if (!source) throw new Error(`Không tìm thấy câu nguồn ${sourceQuestionId}.`);
      const id = `${plan.prefix}-q${String(shortIndex + 17).padStart(2, '0')}`;
      const question = cloneSourceQuestion(source, id, 'short', shortIndex);
      clonedQuestions.push(question);
      clonedSolutions.push(cloneSourceSolution(sourceQuestionId, question));
      shortIndex += 1;
    }
  }
}

const answerText = (answer: TrueFalseAnswer) =>
  `a: ${answer.a}; b: ${answer.b}; c: ${answer.c}; d: ${answer.d}`;

const acceptedTrueFalse = (answer: TrueFalseAnswer): StructuredAnswer[] => [
  answer,
  { a: answer.a.toLowerCase(), b: answer.b.toLowerCase(), c: answer.c.toLowerCase(), d: answer.d.toLowerCase() },
  {
    a: answer.a === 'Đ' ? 'D' : 'S',
    b: answer.b === 'Đ' ? 'D' : 'S',
    c: answer.c === 'Đ' ? 'D' : 'S',
    d: answer.d === 'Đ' ? 'D' : 'S'
  }
];

const trueFalseQuestions: Question[] = g10ChemistryPeriodicTrueFalseSeeds.map(seed => ({
  id: seed.id,
  subjectId: 'chemistry',
  topicId: seed.topicId,
  questionTypeId: seed.questionTypeId,
  content: seed.content,
  difficulty: seed.difficulty,
  sourceType: 'mock_exam',
  responseType: 'true_false_cluster',
  points: 1,
  outcomeIds: seed.outcomeIds,
  competency: seed.difficulty === 'hard' ? 'chemical_application' : 'chemical_cognition',
  cognitiveLevel: cognitiveFor(seed.difficulty),
  variantGroupId: seed.variantGroupId,
  correctAnswer: answerText(seed.correct),
  validatorType: 'exact',
  answerSchema: {
    type: 'true-false-cluster',
    proofImageRequired: false,
    autoCheckMode: 'exact',
    fields: (['a', 'b', 'c', 'd'] as const).map((key, index) => ({
      key,
      label: seed.statements[index],
      valueType: 'choice',
      placeholder: 'Đ hoặc S',
      hint: 'Chọn Đúng hoặc Sai'
    }))
  },
  correctFinalAnswer: seed.correct,
  acceptedFinalAnswers: acceptedTrueFalse(seed.correct)
}));

const trueFalseSolutions: Solution[] = g10ChemistryPeriodicTrueFalseSeeds.map(seed => ({
  id: `solution-${seed.id}`,
  questionId: seed.id,
  recognition: seed.recognition,
  detailedSteps: seed.analyses.map((explanation, index) => ({
    order: index + 1,
    title: `Phân tích phát biểu ${String.fromCharCode(97 + index)}`,
    explanation,
    result: `${String.fromCharCode(97 + index)}) ${seed.correct[String.fromCharCode(97 + index) as keyof TrueFalseAnswer]}`
  })),
  finalAnswer: answerText(seed.correct),
  commonMistakes: [seed.mistake],
  reviewSuggestions: [seed.review]
}));

const extraShortQuestions: Question[] = g10ChemistryFinal2ExtraShortSeeds.map(seed => ({
  id: seed.id,
  subjectId: 'chemistry',
  topicId: seed.topicId,
  questionTypeId: seed.questionTypeId,
  content: seed.content,
  difficulty: 'hard',
  sourceType: 'mock_exam',
  responseType: 'short_answer',
  points: 0.5,
  outcomeIds: seed.outcomeIds,
  competency: 'chemical_application',
  cognitiveLevel: 'application',
  variantGroupId: seed.variantGroupId,
  correctAnswer: seed.correctAnswer,
  acceptedAnswers: seed.acceptedAnswers,
  validatorType: 'number'
}));

const extraShortSolutions: Solution[] = g10ChemistryFinal2ExtraShortSeeds.map(seed => ({
  id: `solution-${seed.id}`,
  questionId: seed.id,
  recognition: 'Bài toán tỉ lượng phản ứng thế giữa halogen và ion halide.',
  detailedSteps: [
    ...seed.reasoning.map((explanation, index) => ({
      order: index + 1,
      title: index === 0 ? 'Lập phương trình ion' : 'Dùng tỉ lệ mol',
      explanation
    })),
    { order: seed.reasoning.length + 1, title: 'Kết luận', explanation: `Giá trị cần nhập là ${seed.correctAnswer}.`, result: seed.correctAnswer }
  ],
  finalAnswer: seed.correctAnswer,
  commonMistakes: [seed.mistake],
  reviewSuggestions: [seed.review]
}));

export const g10ChemistryPeriodicAutoQuestions: Question[] = [
  ...clonedQuestions,
  ...trueFalseQuestions,
  ...extraShortQuestions
];

export const g10ChemistryPeriodicAutoSolutions: Solution[] = [
  ...clonedSolutions,
  ...trueFalseSolutions,
  ...extraShortSolutions
];
