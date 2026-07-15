import type { Solution } from '@/types';

const make = (questionId: string, explanation: string, finalAnswer: string, commonMistakes: string[], reviewSuggestions: string[]): Solution => ({
  id: 'solution-' + questionId, questionId,
  recognition: 'Dùng xu hướng nhóm VIIA để dự đoán phản ứng, sau đó đối chiếu hiện tượng thực nghiệm.',
  detailedSteps: [{ order: 1, title: 'Phân tích', explanation, result: finalAnswer }],
  finalAnswer, commonMistakes, reviewSuggestions
});

export const m7AssessmentSolutions: Solution[] = [
  make('chem10-assess-m7-cp-a-q01', 'Đi xuống nhóm, bán kính và che chắn tăng nên khả năng nhận electron giảm; tính oxi hóa giảm từ $F_2$ đến $I_2$.', 'B', ['Cho rằng mọi tính chất đều tăng khi đi xuống nhóm.'], ['Vị trí và xu hướng Halogen']),
  make('chem10-assess-m7-cp-a-q02', 'Ở điều kiện thường, fluorine và chlorine là khí, bromine là chất lỏng, iodine là chất rắn.', 'B', ['Nhầm trạng thái của bromine và iodine.'], ['Tính chất vật lí Halogen']),
  make('chem10-assess-m7-cp-a-q03', '$Cl_2$ oxi hóa mạnh hơn $Br_2$, nên oxi hóa được $Br^-$ thành $Br_2$: $Cl_2+2Br^-\\rightarrow2Cl^-+Br_2$.', 'A', ['Đảo chiều phản ứng thế.', 'Cho rằng halide oxi hóa được halogen mạnh hơn.'], ['Tính oxi hóa và phản ứng thế']),
  make('chem10-assess-m7-cp-a-q04', 'Tính oxi hóa giảm theo thứ tự $F_2>Cl_2>Br_2>I_2$.', 'B', ['Đảo thứ tự với tính khử của ion halide.'], ['Xu hướng tính oxi hóa Halogen']),
  make('chem10-assess-m7-cp-a-q05', 'Chlorine tự oxi hóa–khử trong nước: $Cl_2+H_2O\\rightleftharpoons HCl+HClO$.', 'A', ['Bỏ sản phẩm hypochlorous acid.', 'Nhầm HClO với chloric acid.'], ['Phản ứng của chlorine với nước']),
  make('chem10-assess-m7-cp-a-q06', 'Ở điều kiện lạnh, loãng: $Cl_2+2NaOH\\rightarrow NaCl+NaClO+H_2O$.', 'A', ['Bỏ qua điều kiện và chọn chlorate.', 'Không nhận ra hai muối có số oxi hóa Cl khác nhau.'], ['Phản ứng Halogen với kiềm']),
  make('chem10-assess-m7-cp-a-q07', 'Dù F có độ âm điện lớn, liên kết H–F rất bền nên HF khó phân li hơn HCl trong nước và là acid yếu hơn.', 'A', ['Chỉ dựa vào độ âm điện để xếp độ mạnh acid.'], ['Hydrogen halide và acid']),
  make('chem10-assess-m7-cp-a-q08', '$AgI$ là kết tủa màu vàng; AgCl trắng và AgBr vàng nhạt/kem. Mẫu tạo AgI chứa $I^-$.', 'C', ['Nhầm màu AgBr với AgI.', 'Chỉ nhớ có kết tủa mà không đối chiếu màu.'], ['Nhận biết ion halide']),
  make('chem10-assess-m7-cp-a-q09', 'Số electron lớp ngoài cùng là $2+5=7$.', '7', ['Chỉ lấy số mũ của phân lớp p.'], ['Cấu hình electron Halogen']),
  make('chem10-assess-m7-cp-a-q10', 'Phương trình cân bằng: $Cl_2+2KBr\\rightarrow2KCl+Br_2$. Hệ số KBr là 2.', '2', ['Thay chỉ số trong KBr.', 'Không bảo toàn số nguyên tử halogen.'], ['Cân bằng phản ứng thế Halogen']),
  make('chem10-assess-m7-cp-a-q11', 'AgF tan; AgCl, AgBr và AgI tạo kết tủa. Vì vậy có 3 dung dịch tạo kết tủa halide bạc.', '3', ['Cho rằng AgF cũng kết tủa như các halide bạc còn lại.'], ['Nhận biết ion halide bằng ion bạc']),
  make('chem10-assess-m7-cp-a-q12', '$Cl_2$ không oxi hóa $F^-$, không phản ứng oxi hóa–khử với $Cl^-$, nhưng oxi hóa được $Br^-$ và $I^-$. Có 2 dung dịch phản ứng.', '2', ['Đếm phản ứng với chính chloride.', 'Cho rằng chlorine oxi hóa được fluoride.'], ['Phản ứng thế Halogen'])
];
