import type { Solution } from '@/types';

const make = (questionId: string, explanation: string, finalAnswer: string, commonMistakes: string[], reviewSuggestions: string[]): Solution => ({
  id: 'solution-' + questionId, questionId,
  recognition: 'Dùng xu hướng nhóm VIIA để dự đoán phản ứng, sau đó đối chiếu hiện tượng thực nghiệm.',
  detailedSteps: [{ order: 1, title: 'Phân tích', explanation, result: finalAnswer }],
  finalAnswer, commonMistakes, reviewSuggestions
});

export const m7AssessmentSolutionsFormB: Solution[] = [
  make('chem10-assess-m7-cp-b-q01', 'Đi xuống nhóm VIIA có thêm lớp electron, nên bán kính nguyên tử tăng dần.', 'A', ['Áp dụng xu hướng trong chu kì cho một nhóm.'], ['Vị trí và xu hướng Halogen']),
  make('chem10-assess-m7-cp-b-q02', 'Iodine là chất rắn ở điều kiện thường; bromine là chất lỏng, fluorine và chlorine là khí.', 'C', ['Nhầm iodine với bromine.'], ['Tính chất vật lí Halogen']),
  make('chem10-assess-m7-cp-b-q03', '$Br_2$ oxi hóa được $I^-$ vì có tính oxi hóa mạnh hơn $I_2$: $Br_2+2I^-\\rightarrow2Br^-+I_2$.', 'A', ['Đảo chiều phản ứng thế.'], ['Tính oxi hóa và phản ứng thế']),
  make('chem10-assess-m7-cp-b-q04', 'Ion halide càng dễ nhường electron khi đi xuống nhóm, nên tính khử tăng $F^-<Cl^-<Br^-<I^-$.', 'B', ['Nhầm thứ tự tính khử của ion với tính oxi hóa của đơn chất.'], ['Tính khử ion halide']),
  make('chem10-assess-m7-cp-b-q05', 'Hydrogen phản ứng với chlorine tạo hydrogen chloride: $H_2+Cl_2\\rightarrow2HCl$.', 'A', ['Nhầm sản phẩm với HClO trong phản ứng chlorine–nước.'], ['Phản ứng Halogen với hydrogen']),
  make('chem10-assess-m7-cp-b-q06', 'Cl trong $Cl_2$ có số oxi hóa 0; một phần giảm xuống −1 trong NaCl, phần khác tăng lên +1 trong NaClO, nên vừa bị oxi hóa vừa bị khử.', 'C', ['Chỉ theo dõi một sản phẩm chứa chlorine.'], ['Phản ứng tự oxi hóa–khử']),
  make('chem10-assess-m7-cp-b-q07', 'Độ bền liên kết H–X giảm khi đi xuống nhóm, nên độ mạnh acid trong nước tăng $HF<HCl<HBr<HI$.', 'B', ['Cho HF mạnh nhất chỉ vì F âm điện nhất.'], ['Hydrogen halide và acid']),
  make('chem10-assess-m7-cp-b-q08', '$AgBr$ có màu vàng nhạt/kem; AgCl trắng và AgI vàng. Mẫu tương ứng chứa $Br^-$.', 'B', ['Nhầm AgBr với AgI.'], ['Nhận biết ion halide']),
  make('chem10-assess-m7-cp-b-q09', 'Halogen có 7 electron hóa trị nên thường nhận thêm 1 electron để đạt 8 electron lớp ngoài cùng.', '1', ['Cho rằng cần nhận 7 electron.'], ['Cấu hình và xu hướng tạo ion']),
  make('chem10-assess-m7-cp-b-q10', 'Phương trình cân bằng: $Br_2+2KI\\rightarrow2KBr+I_2$. Hệ số KI là 2.', '2', ['Thay chỉ số trong KI.', 'Không bảo toàn iodine.'], ['Cân bằng phản ứng thế Halogen']),
  make('chem10-assess-m7-cp-b-q11', 'AgCl màu trắng; AgBr vàng nhạt/kem và AgI vàng. Có 2 kết tủa không màu trắng.', '2', ['Cho rằng cả ba kết tủa cùng màu.'], ['Màu kết tủa halide bạc']),
  make('chem10-assess-m7-cp-b-q12', '$Br_2$ chỉ oxi hóa được $I^-$ trong bốn ion đã cho; không oxi hóa $F^-$, $Cl^-$ hay chính $Br^-$. Có 1 dung dịch phản ứng.', '1', ['Cho rằng bromine oxi hóa được chloride.', 'Tính phản ứng với bromide.'], ['Phản ứng thế Halogen'])
];
