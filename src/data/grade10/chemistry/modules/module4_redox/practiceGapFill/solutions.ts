import type { Solution } from '@/types';

const solution = (
  questionId: string,
  finalAnswer: string,
  recognition: string,
  firstMove: string,
  explanation: string,
  commonMistake: string,
  reviewSuggestion: string
): Solution => ({
  id: `${questionId}-solution`,
  questionId,
  recognition: `Dạng bài: ${recognition}`,
  detailedSteps: [
    { order: 1, title: 'Dấu hiệu nhận biết và cách bắt đầu', explanation: firstMove },
    { order: 2, title: 'Áp dụng vào câu hỏi', explanation }
  ],
  finalAnswer,
  commonMistakes: [commonMistake],
  reviewSuggestions: [reviewSuggestion]
});

export const m4GapFillSolutions: Solution[] = [
  solution('chem10-m4-gf001', '0', 'Số oxi hóa của đơn chất', 'Khi nguyên tố tồn tại ở dạng đơn chất, số oxi hóa của mọi nguyên tử bằng 0.', '$Cl_2$ là đơn chất chlorine nên Cl có số oxi hóa 0.', 'Nhầm chỉ số 2 trong công thức với số oxi hóa +2.', 'Ôn các quy tắc số oxi hóa phải gán trước.'),
  solution('chem10-m4-gf002', '+5', 'Số oxi hóa trong hợp chất trung hòa', 'Gán H = +1, O = −2 rồi đặt x cho P; tổng đại số của phân tử trung hòa bằng 0.', '$3(+1)+x+4(-2)=0\Rightarrow x=+5$.', 'Quên nhân số oxi hóa với chỉ số nguyên tử.', 'Luôn viết phương trình tổng số oxi hóa.'),
  solution('chem10-m4-gf003', '+6', 'Số oxi hóa trong ion nhiều nguyên tử', 'Với ion, tổng số oxi hóa bằng điện tích ion, không phải bằng 0.', '$2x+7(-2)=-2\Rightarrow2x=12\Rightarrow x=+6$.', 'Cho tổng bằng 0 dù tiểu phân mang điện 2−.', 'Ghi điện tích ion ở vế phải của phương trình tổng.'),
  solution('chem10-m4-gf004', 'B', 'Ngoại lệ số oxi hóa của hydrogen', 'Dấu hiệu là hydride kim loại: H liên kết với kim loại rất điện dương nên có số oxi hóa −1.', 'Trong NaH, Na là +1; để tổng bằng 0 thì H phải là −1.', 'Luôn gán H = +1 mà không kiểm tra loại hợp chất.', 'Ôn hai ngoại lệ thường gặp: hydride kim loại và peroxide.'),

  solution('chem10-m4-gf005', '2', 'Viết bán quá trình oxi hóa', 'Sn tăng từ +2 lên +4 nên nhường số electron bằng độ tăng số oxi hóa.', 'Độ tăng là 2: $Sn^{2+}\rightarrow Sn^{4+}+2e$.', 'Đặt electron ở vế trái dù đây là quá trình nhường.', 'Ôn: oxi hóa = nhường e = số oxi hóa tăng.'),
  solution('chem10-m4-gf006', '1', 'Viết bán quá trình khử', 'Fe giảm từ +3 xuống +2 nên nhận electron; electron nằm ở vế trái.', '$Fe^{3+}+e\rightarrow Fe^{2+}$, do đó x = 1.', 'Viết 2e vì nhìn thấy số oxi hóa +2 ở sản phẩm.', 'Tính electron từ độ biến thiên, không từ giá trị cuối.'),
  solution('chem10-m4-gf007', 'B', 'Bảo toàn electron giữa hai quá trình', 'Tìm bội chung nhỏ nhất của 3e nhường và 2e nhận.', 'BCNN là 6: cần 2 Al nhường $2\times3=6e$ và 3 $Cu^{2+}$ nhận $3\times2=6e$. Tỉ lệ 2:3.', 'Đảo tỉ lệ hệ số electron thành 3:2.', 'Sau khi nhân, kiểm tra tổng electron hai phía bằng nhau.'),
  solution('chem10-m4-gf008', '6', 'Quy đổi electron theo số mol tiểu phân', 'Đọc bán phản ứng: mỗi mol $Cl_2$ nhận 2 mol electron; sau đó nhân theo số mol đã cho.', '$n_e=3\times2=6$ mol electron.', 'Dùng hệ số 2Cl⁻ để kết luận một mol Cl₂ nhận 4e.', 'Theo dõi electron trên một mol chất đầu của bán phản ứng.'),

  solution('chem10-m4-gf009', 'A', 'Xác định chất oxi hóa', 'Tìm chất chứa nguyên tố giảm số oxi hóa; chất đó nhận electron và là chất oxi hóa.', 'Fe trong $Fe_2O_3$ từ +3 xuống 0, nên $Fe_2O_3$ bị khử và là chất oxi hóa.', 'Gọi Fe sản phẩm là chất oxi hóa vì Fe có trong quá trình khử.', 'Phân biệt chất oxi hóa với chất bị oxi hóa.'),
  solution('chem10-m4-gf010', 'B', 'Xác định chất khử', 'Tìm chất chứa nguyên tố tăng số oxi hóa; chất đó nhường electron và là chất khử.', 'C trong CO từ +2 lên +4 trong CO₂, nên CO bị oxi hóa và là chất khử.', 'Chọn CO₂ vì carbon có số oxi hóa cao hơn.', 'Vai trò thuộc về chất đầu, không phải sản phẩm sau biến đổi.'),
  solution('chem10-m4-gf011', 'B', 'Xác định đồng thời chất oxi hóa–chất khử', 'Lập hai mũi tên số oxi hóa: Cl 0 → −1 và Fe +2 → +3.', '$Cl_2$ nhận electron nên là chất oxi hóa; $Fe^{2+}$ nhường electron nên là chất khử.', 'Đảo vai trò vì nhầm “bị oxi hóa” với “chất oxi hóa”.', 'Dùng cặp nhớ: chất oxi hóa bị khử; chất khử bị oxi hóa.'),
  solution('chem10-m4-gf012', 'C', 'Chất vừa oxi hóa vừa khử', 'Dấu hiệu là cùng một nguyên tố ở cùng mức ban đầu đi tới hai mức cao hơn và thấp hơn.', 'O trong $H_2O_2$ có số oxi hóa −1; một phần xuống −2 trong H₂O, phần khác lên 0 trong O₂. Vì vậy $H_2O_2$ có cả hai vai trò.', 'Chỉ xét một sản phẩm rồi kết luận một vai trò duy nhất.', 'Ôn phản ứng tự oxi hóa–tự khử.'),

  solution('chem10-m4-gf013', '16', 'Tìm hệ số còn thiếu trong phương trình redox', 'Khi phần lớn hệ số đã có, không cần cân bằng lại từ đầu: kiểm tra bảo toàn H hoặc Cl để tìm x.', 'Vế phải có 16 H trong $8H_2O$, nên cần 16 HCl; đồng thời 16 Cl cũng khớp $2KCl+2MnCl_2+5Cl_2$.', 'Chỉ đếm chlorine mà bỏ qua chlorine xuất hiện trong nhiều sản phẩm.', 'Kiểm tra từng nguyên tố sau khi tìm hệ số.'),
  solution('chem10-m4-gf014', '5', 'Cân bằng phản ứng redox đơn giản', 'Xác định N: −3 trong NH₃ lên +2 trong NO; O: 0 xuống −2. Cân bằng electron rồi hoàn tất H và O.', 'Phương trình là $4NH_3+5O_2\rightarrow4NO+6H_2O$, nên hệ số O₂ bằng 5.', 'Cân bằng H và O trước rồi làm sai hệ số electron.', 'Ưu tiên nguyên tố đổi số oxi hóa trước.'),
  solution('chem10-m4-gf015', '10', 'Cân bằng phản ứng kim loại với acid oxi hóa', 'Theo dõi Cu 0 → +2 nhường 2e; N +5 → +4 trong NO₂ nhận 1e, nên tỉ lệ Cu:NO₂ là 1:2.', 'Phương trình cân bằng: $Cu+4HNO_3\rightarrow Cu(NO_3)_2+2NO_2+2H_2O$. Tổng hệ số là $1+4+1+2+2=10$.', 'Không phân biệt nitrate tạo muối với nitrate bị khử.', 'Sau cân bằng electron phải cân bằng tiếp nguyên tố và nhóm còn lại.'),
  solution('chem10-m4-gf016', '4', 'Cân bằng phản ứng tạo halogen', 'Theo dõi Mn +4 → +2 nhận 2e và Cl −1 → 0 nhường electron.', 'Phương trình là $MnO_2+4HCl\rightarrow MnCl_2+Cl_2+2H_2O$, nên hệ số HCl bằng 4.', 'Chỉ dùng 2 HCl để tạo MnCl₂ và quên Cl tạo Cl₂.', 'Kiểm tra cả H, O và tổng chlorine ở bước cuối.'),
  solution('chem10-m4-gf017', 'B', 'Kiểm tra phương trình bằng bảo toàn nguyên tử', 'Khi đề cho một phương trình đã cân bằng, đếm từng nguyên tố trước; tuyệt đối không sửa chỉ số.', 'Phương trình đề xuất có 10 O bên trái nhưng 5 O bên phải. Dạng đúng tối giản là $4P+5O_2\rightarrow2P_2O_5$.', 'Thấy phosphorus đã cân bằng rồi bỏ qua oxygen.', 'Dùng bảng đếm nguyên tử hai vế để kiểm tra.'),
  solution('chem10-m4-gf018', 'A', 'Phát hiện lỗi thay chỉ số khi cân bằng', 'Dấu hiệu là công thức hóa học bị đổi. Chỉ được thay hệ số trước chất, không được thay chỉ số trong chất.', '$H_2O$ và $H_2O_2$ là hai chất khác nhau; thao tác đó đã thay phản ứng cần cân bằng.', 'Coi mọi cách làm số nguyên tử bằng nhau là hợp lệ.', 'Ôn ranh giới giữa hệ số và chỉ số.'),
  solution('chem10-m4-gf019', 'B', 'Kiểm tra phương trình bằng bảng nguyên tử', 'Đọc từng hàng của bảng; chỉ cần một nguyên tố không bảo toàn là phương trình sai.', 'Fe và C đã bằng nhau nhưng O là 9 ở trái và 6 ở phải, nên phương trình chưa cân bằng.', 'Kết luận đúng khi đa số nguyên tố đã cân bằng.', 'Luôn kiểm tra tất cả nguyên tố và điện tích nếu có ion.'),
  solution('chem10-m4-gf020', 'B', 'Quy trình phương pháp electron', 'Tìm phương án giữ đúng chuỗi nguyên nhân: số oxi hóa → electron → hệ số → phần còn lại → kiểm tra.', 'Phương án B là quy trình đầy đủ và không thay đổi công thức chất.', 'Thuộc hệ số mẫu nhưng không hiểu bước bảo toàn electron.', 'Luyện viết tên từng bước trước khi cân bằng phản ứng khó.'),
];
