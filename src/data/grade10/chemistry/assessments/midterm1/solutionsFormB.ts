import type { Solution } from '@/types';

const solution = (questionId: string, explanation: string, finalAnswer: string, commonMistakes: string[], reviewSuggestions: string[]): Solution => ({
  id: `solution-${questionId}`,
  questionId,
  recognition: 'Xác định dữ kiện, mô hình hóa bằng kiến thức Hóa học 10 và kiểm tra kết quả.',
  detailedSteps: [{ order: 1, title: 'Phân tích và kết luận', explanation, result: finalAnswer }],
  finalAnswer,
  commonMistakes,
  reviewSuggestions
});

export const midterm1SolutionsFormB: Solution[] = [
  solution('chem10-assess-mid1-b-q01', 'Electron mang điện tích âm và phân bố trong lớp vỏ nguyên tử; proton dương và neutron không mang điện nằm trong hạt nhân.', 'C', ['Nhầm electron với proton.'], ['Thành phần nguyên tử']),
  solution('chem10-assess-mid1-b-q02', 'Với $^{32}_{16}S^{2-}$: $p=16$, $n=32-16=16$; anion 2− đã nhận 2 electron nên $e=16+2=18$.', 'B', ['Trừ electron đối với anion.', 'Lấy số khối làm số neutron.'], ['Kí hiệu nguyên tử và ion']),
  solution('chem10-assess-mid1-b-q03', 'Trung bình có trọng số: $\\overline A=63\\times0{,}70+65\\times0{,}30=63{,}6$.', 'B', ['Lấy trung bình cộng 64.', 'Không quy đổi phần trăm.'], ['Đồng vị và nguyên tử khối trung bình']),
  solution('chem10-assess-mid1-b-q04', 'Cường độ đỉnh 80 lớn hơn 20 nên đồng vị tại $m/z=11$ phổ biến hơn; vị trí đỉnh mới thể hiện khối lượng.', 'B', ['Coi đỉnh cao là đồng vị nặng chỉ vì chiều cao.'], ['Đọc phổ khối lượng']),
  solution('chem10-assess-mid1-b-q05', 'Orbital là vùng không gian được mô tả bằng xác suất tìm thấy electron, không phải đường chuyển động cố định.', 'B', ['Đồng nhất orbital với quỹ đạo Bohr.'], ['Mô hình nguyên tử hiện đại']),
  solution('chem10-assess-mid1-b-q06', 'Theo quy tắc Hund, ba electron điền riêng vào ba AO p suy biến với spin song song trước khi ghép đôi.', 'A', ['Ghép đôi trước khi điền đủ AO.', 'Cho quá hai electron vào một AO.'], ['Orbital và quy tắc Hund']),
  solution('chem10-assess-mid1-b-q07', 'Số thứ tự ô nguyên tố chính là số hiệu nguyên tử Z, bằng số proton trong hạt nhân.', 'C', ['Nhầm Z với số khối A.'], ['Cấu tạo bảng tuần hoàn']),
  solution('chem10-assess-mid1-b-q08', 'Lớp lớn nhất là 3 nên thuộc chu kì 3; cấu hình ngoài cùng $3s^1$ cho biết nguyên tố nhóm IA.', 'A', ['Dùng tổng electron làm số chu kì.'], ['Cấu hình electron và vị trí']),
  solution('chem10-assess-mid1-b-q09', 'Đi xuống nhóm IA, mỗi nguyên tố có thêm một lớp electron; che chắn tăng nên bán kính tăng dù điện tích hạt nhân cũng tăng.', 'A', ['Chỉ xét điện tích hạt nhân mà bỏ qua số lớp.'], ['Xu hướng bán kính nguyên tử']),
  solution('chem10-assess-mid1-b-q10', 'Đi xuống nhóm VIIA, bán kính và che chắn tăng nên lực hút electron liên kết giảm; độ âm điện và tính phi kim giảm.', 'D', ['Áp dụng chiều xu hướng trong chu kì cho một nhóm.'], ['Độ âm điện và tính phi kim']),
  solution('chem10-assess-mid1-b-q11', '$Na_2O$ và MgO có tính base, $Al_2O_3$ lưỡng tính, còn $SO_3$ là oxide acid điển hình.', 'D', ['Coi oxide lưỡng tính là acid điển hình.'], ['Tính acid–base của oxide']),
  solution('chem10-assess-mid1-b-q12', 'Mg có hai electron hóa trị và thường nhường cả hai để đạt cấu hình electron bền, tạo $Mg^{2+}$.', 'B', ['Cho rằng ion dương hình thành do nhận electron.'], ['Quy tắc octet và sự hình thành ion']),
  solution('chem10-assess-mid1-b-q13', 'Giòn, nóng chảy cao và dẫn điện khi các ion được giải phóng trong dung dịch là các dấu hiệu điển hình của cấu trúc mạng ion.', 'A', ['Cho rằng dung dịch dẫn điện vì có electron tự do.'], ['Liên kết ion và tinh thể ion']),
  solution('chem10-assess-mid1-b-q14', '$N_2$ có liên kết ba, tương ứng ba cặp electron được dùng chung giữa hai nguyên tử N.', 'C', ['Nhầm ba liên kết với sáu cặp electron.'], ['Liên kết cộng hóa trị']),
  solution('chem10-assess-mid1-b-q15', '$CCl_4$ có cấu trúc đối xứng; các moment C–Cl tổng hợp triệt tiêu dù từng liên kết riêng lẻ phân cực.', 'A', ['Đồng nhất phân cực liên kết với phân cực phân tử.'], ['Phân cực liên kết và phân tử']),
  solution('chem10-assess-mid1-b-q16', 'Các phân tử nước tạo mạng liên kết hydrogen mạnh, cần nhiều năng lượng để tách chúng khi sôi.', 'B', ['Gọi liên kết O–H nội phân tử là liên kết hydrogen.'], ['Liên kết hydrogen và nhiệt độ sôi']),
  solution('chem10-assess-mid1-b-q17', 'Tổng electron bằng tổng các số mũ: $2+2+5=9$.', '9', ['Bỏ sót phân lớp hoặc đọc số lớp thành số electron.'], ['Cấu hình electron']),
  solution('chem10-assess-mid1-b-q18', 'Chlorine có 7 electron lớp ngoài cùng nên thường nhận 1 electron để đạt octet.', '1', ['Cho rằng chlorine nhường 7 electron là thuận lợi hơn.'], ['Cấu hình electron và tính chất nguyên tố']),
  solution('chem10-assess-mid1-b-q19', 'F→Cl: 64→99 tăng; Cl→Br: 99→114 tăng. Có 2 lần tăng, phù hợp xu hướng bán kính tăng xuống nhóm.', '2', ['Đếm ba giá trị thành ba lần tăng.'], ['Đọc dữ liệu bán kính nguyên tử']),
  solution('chem10-assess-mid1-b-q20', '$K_2O$ và CaO có tính base, $Al_2O_3$ lưỡng tính, chỉ $CO_2$ có tính acid điển hình. Có 1 oxide.', '1', ['Tính oxide lưỡng tính là acid điển hình.'], ['Tính acid–base của oxide']),
  solution('chem10-assess-mid1-b-q21', 'Tỉ lệ ion trong $Ca_3N_2$ là 3 ion $Ca^{2+}$ với 2 ion $N^{3-}$; tổng theo một đơn vị công thức là $3+2=5$.', '5', ['Nhân hai chỉ số hoặc chỉ đếm hai loại ion.'], ['Tỉ lệ ion trong hợp chất ion']),
  solution('chem10-assess-mid1-b-q22', '$H_2O$, $NH_3$, HF và $CH_3OH$ tạo liên kết hydrogen đáng kể; $H_2S$ không thỏa điều kiện N–H, O–H hoặc F–H điển hình. Tổng là 4.', '4', ['Cho rằng mọi hydride đều tạo liên kết hydrogen.'], ['Điều kiện hình thành liên kết hydrogen'])
];
