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

export const midterm1SolutionsFormA: Solution[] = [
  solution('chem10-assess-mid1-a-q01', 'Nguyên tử gồm hạt nhân chứa proton, neutron và lớp vỏ chứa electron. Hạt nhân chứa gần hết khối lượng nhưng chỉ chiếm phần rất nhỏ thể tích.', 'C', ['Nhầm khối lượng lớn với thể tích lớn.', 'Cho rằng neutron mang điện.'], ['Thành phần nguyên tử']),
  solution('chem10-assess-mid1-a-q02', 'Với $^{27}_{13}Al^{3+}$: $p=13$, $n=27-13=14$; ion dương 3+ đã mất 3 electron nên $e=13-3=10$.', 'A', ['Lấy số khối làm số neutron.', 'Cộng electron cho cation.'], ['Kí hiệu nguyên tử và ion']),
  solution('chem10-assess-mid1-a-q03', 'Trung bình có trọng số: $\\overline A=35\\times0{,}75+37\\times0{,}25=35{,}5$.', 'B', ['Lấy trung bình cộng 36.', 'Dùng phần trăm nhưng không chia 100.'], ['Đồng vị và nguyên tử khối trung bình']),
  solution('chem10-assess-mid1-a-q04', 'Vị trí đỉnh cho biết khối lượng; cường độ tương đối phản ánh độ phổ biến. Vì 79 lớn hơn 11 nên đồng vị 24 phổ biến hơn.', 'C', ['Coi đỉnh cao hơn là đồng vị nặng hơn.'], ['Đọc phổ khối lượng']),
  solution('chem10-assess-mid1-a-q05', 'Mô hình hiện đại mô tả electron bằng phân bố xác suất trong orbital, không gán cho electron một quỹ đạo xác định như hình ảnh hành tinh.', 'B', ['Đồng nhất orbital với quỹ đạo.'], ['Mô hình nguyên tử hiện đại']),
  solution('chem10-assess-mid1-a-q06', 'Ba AO p suy biến được điền electron độc thân trước. Với 4 electron: một AO ghép đôi và hai AO còn lại mỗi AO một electron.', 'A', ['Ghép đôi electron quá sớm.', 'Cho quá hai electron vào một AO.'], ['Orbital và quy tắc Hund']),
  solution('chem10-assess-mid1-a-q07', 'Số thứ tự chu kì bằng số lớp electron đang được sử dụng trong nguyên tử ở trạng thái cơ bản.', 'B', ['Nhầm chu kì với số electron hóa trị.'], ['Cấu tạo bảng tuần hoàn']),
  solution('chem10-assess-mid1-a-q08', 'Số lớp lớn nhất là 3 nên thuộc chu kì 3; lớp ngoài cùng $3s^23p^5$ có 7 electron nên thuộc nhóm VIIA.', 'C', ['Chỉ nhìn số mũ cuối cùng.', 'Dùng tổng electron làm số chu kì.'], ['Cấu hình electron và vị trí']),
  solution('chem10-assess-mid1-a-q09', 'Trong cùng chu kì, số lớp electron không đổi nhưng điện tích hạt nhân tăng, lực hút electron mạnh hơn nên bán kính nhìn chung giảm.', 'B', ['Dùng quy tắc mũi tên mà không giải thích lực hút hạt nhân.'], ['Xu hướng bán kính nguyên tử']),
  solution('chem10-assess-mid1-a-q10', 'Từ trái sang phải trong chu kì, khả năng nhường electron giảm, khả năng hút electron tăng; vì thế tính kim loại giảm và tính phi kim tăng.', 'B', ['Đảo chiều xu hướng tuần hoàn.'], ['Độ âm điện và tính kim loại–phi kim']),
  solution('chem10-assess-mid1-a-q11', '$Na_2O$ và MgO có tính base; $Al_2O_3$ lưỡng tính; $SiO_2$ có tính acid. Dãy A biểu diễn đúng xu hướng.', 'A', ['Coi mọi oxide kim loại chỉ có tính base.', 'Bỏ qua tính lưỡng tính của alumina.'], ['Oxide, hydroxide và định luật tuần hoàn']),
  solution('chem10-assess-mid1-a-q12', 'Oxygen có 6 electron hóa trị, nhận thêm 2 electron để đạt 8 electron lớp ngoài cùng theo mô hình octet.', 'B', ['Cho rằng tạo ion làm thay đổi proton hoặc neutron.'], ['Quy tắc octet và sự hình thành ion']),
  solution('chem10-assess-mid1-a-q13', 'Các tính chất nhiệt độ nóng chảy cao và chỉ dẫn điện khi ion chuyển động được ở trạng thái nóng chảy là dấu hiệu của mạng tinh thể ion.', 'A', ['Cho rằng tinh thể ion rắn dẫn điện.', 'Coi hợp chất ion gồm các phân tử riêng lẻ.'], ['Liên kết ion và tinh thể ion']),
  solution('chem10-assess-mid1-a-q14', '$CO_2$ có cấu tạo O=C=O. Mỗi liên kết đôi gồm hai cặp electron dùng chung, tổng cộng bốn cặp.', 'C', ['Đếm số liên kết thay vì số cặp electron dùng chung.'], ['Công thức Lewis và liên kết cộng hóa trị']),
  solution('chem10-assess-mid1-a-q15', 'Hai liên kết C=O phân cực nằm thẳng hàng, có moment bằng nhau và ngược chiều; tổng vector bằng 0 nên phân tử không phân cực.', 'B', ['Có liên kết phân cực thì kết luận ngay phân tử phân cực.'], ['Phân cực liên kết và phân tử']),
  solution('chem10-assess-mid1-a-q16', 'Cả ethanol và nước đều có nhóm O–H và cặp electron tự do trên O, cho phép tạo liên kết hydrogen giữa hai loại phân tử.', 'B', ['Gọi liên kết O–H trong phân tử là liên kết hydrogen.'], ['Liên kết hydrogen và lực liên phân tử']),
  solution('chem10-assess-mid1-a-q17', 'Tổng số electron bằng tổng các số mũ: $2+2+6+2=12$.', '12', ['Bỏ sót một phân lớp.', 'Cộng số lớp thay vì số mũ.'], ['Cấu hình electron']),
  solution('chem10-assess-mid1-a-q18', 'Sodium có một electron lớp ngoài cùng nên thường nhường 1 electron để đạt cấu hình bền của khí hiếm gần nhất.', '1', ['Cho rằng sodium nhận 7 electron là xu hướng thông thường.'], ['Cấu hình electron và tính chất nguyên tố']),
  solution('chem10-assess-mid1-a-q19', 'Từ Li sang Na: 152→186 tăng; từ Na sang K: 186→227 tăng. Có 2 lần tăng, phù hợp xu hướng đi xuống nhóm IA.', '2', ['Đếm số giá trị thay vì số lần chuyển.', 'Không đọc đơn vị và chiều dữ liệu.'], ['Đọc dữ liệu bán kính nguyên tử']),
  solution('chem10-assess-mid1-a-q20', '$Na_2O$ và MgO có tính base, $Al_2O_3$ lưỡng tính, chỉ $SO_3$ có tính acid điển hình. Có 1 oxide.', '1', ['Tính oxide lưỡng tính là oxide acid điển hình.'], ['Tính acid–base của oxide']),
  solution('chem10-assess-mid1-a-q21', 'Đơn vị công thức biểu diễn tỉ lệ 2 ion $Al^{3+}$ và 3 ion $O^{2-}$; tổng số ion theo tỉ lệ là $2+3=5$.', '5', ['Chỉ đếm số loại ion.', 'Nhân hai chỉ số.'], ['Tỉ lệ ion trong hợp chất ion']),
  solution('chem10-assess-mid1-a-q22', '$H_2O$, $NH_3$, HF và $CH_3OH$ có H liên kết trực tiếp với N, O hoặc F và có nguyên tử nhận liên kết hydrogen; $CH_4$ không thỏa. Tổng là 4.', '4', ['Cho rằng mọi phân tử chứa H đều tạo liên kết hydrogen đáng kể.'], ['Điều kiện hình thành liên kết hydrogen'])
];
