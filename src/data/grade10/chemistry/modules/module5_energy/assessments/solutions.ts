import type { Solution } from '@/types';

const make = (questionId: string, explanation: string, finalAnswer: string, commonMistakes: string[], reviewSuggestions: string[]): Solution => ({
  id: 'solution-' + questionId, questionId,
  recognition: 'Xác định hệ–môi trường, chiều phản ứng và hệ số trước khi áp dụng công thức enthalpy.',
  detailedSteps: [{ order: 1, title: 'Phân tích', explanation, result: finalAnswer }],
  finalAnswer, commonMistakes, reviewSuggestions
});

export const m5AssessmentSolutions: Solution[] = [
  make('chem10-assess-m5-cp-a-q01', 'Môi trường nóng lên nghĩa là hệ truyền năng lượng ra môi trường; quá trình trong túi chườm tỏa nhiệt.', 'A', ['Chỉ nhìn nhiệt độ tăng rồi gọi hệ thu nhiệt.'], ['Hệ, môi trường và tỏa–thu nhiệt']),
  make('chem10-assess-m5-cp-a-q02', 'Quá trình thu nhiệt nhận năng lượng từ môi trường vào hệ.', 'B', ['Đảo ngược chiều truyền nhiệt.'], ['Hệ, môi trường và tỏa–thu nhiệt']),
  make('chem10-assess-m5-cp-a-q03', '$\\Delta H=H_{sản\\ phẩm}-H_{chất\\ đầu}<0$, nên sản phẩm thấp hơn chất đầu 92 kJ và hệ tỏa nhiệt.', 'C', ['Cho rằng dấu âm nghĩa là hệ hấp thụ nhiệt.'], ['Biến thiên enthalpy và sơ đồ năng lượng']),
  make('chem10-assess-m5-cp-a-q04', 'Đảo chiều phản ứng phải đổi dấu $\\Delta H$. Vì phản ứng thuận có −484 kJ nên phản ứng ngược có +484 kJ.', 'D', ['Đảo phản ứng nhưng giữ nguyên dấu.', 'Chia đôi ΔH dù hệ số không đổi.'], ['Biến đổi phương trình nhiệt hóa học']),
  make('chem10-assess-m5-cp-a-q05', 'Enthalpy tạo thành chuẩn của đơn chất bền ở trạng thái chuẩn bằng 0; $O_2(g)$ thỏa điều kiện này.', 'A', ['Cho rằng mọi chất ở trạng thái chuẩn đều có enthalpy tạo thành bằng 0.'], ['Enthalpy tạo thành chuẩn']),
  make('chem10-assess-m5-cp-a-q06', '$\\Delta H^\\circ=[-394+2(-286)]-[-75+2(0)]=-966+75=-891\\ kJ$.', 'A', ['Bỏ hệ số 2 của nước.', 'Tính chất đầu trừ sản phẩm.'], ['Tính ΔH từ enthalpy tạo thành']),
  make('chem10-assess-m5-cp-a-q07', 'Phá liên kết cần năng lượng, tạo liên kết giải phóng năng lượng; vì vậy $\\Delta H\\approx\\sum E_{phá}-\\sum E_{tạo}$.', 'B', ['Dùng năng lượng tạo trừ phá.', 'Cho rằng phá liên kết giải phóng năng lượng.'], ['Năng lượng liên kết']),
  make('chem10-assess-m5-cp-a-q08', 'Nước và cốc nóng lên chứng tỏ môi trường nhận năng lượng từ quá trình hòa tan. Vì vậy hệ tỏa nhiệt. Chưa đủ dữ kiện nhiệt dung và khối lượng để tính ΔH.', 'A', ['Dùng độ tăng nhiệt 6,5°C như một giá trị năng lượng 6,5 kJ.'], ['Đọc dữ liệu nhiệt độ thí nghiệm']),
  make('chem10-assess-m5-cp-a-q09', '$\\Delta H=H_{sản\\ phẩm}-H_{chất\\ đầu}=100-250=-150\\ kJ$.', '-150', ['Tính 250−100.', 'Bỏ dấu âm.'], ['Biến thiên enthalpy']),
  make('chem10-assess-m5-cp-a-q10', 'Tạo 4 mol $NH_3$ là gấp đôi phương trình đã cho, nên $\\Delta H=2(-92)=-184\\ kJ$.', '-184', ['Nhân hệ số chất nhưng không nhân ΔH.'], ['Tỉ lệ phương trình nhiệt hóa học']),
  make('chem10-assess-m5-cp-a-q11', '$\\Delta H^\\circ=[(-635)+(-394)]-[-1207]=-1029+1207=+178\\ kJ$.', '178', ['Đảo thứ tự sản phẩm và chất đầu.', 'Quên dấu của số âm.'], ['Tính ΔH từ enthalpy tạo thành']),
  make('chem10-assess-m5-cp-a-q12', 'Phá một H–H và một Cl–Cl cần $436+243=679$ kJ; tạo hai H–Cl giải phóng tương ứng $2(431)=862$ kJ. $\\Delta H=679-862=-183\\ kJ$.', '-183', ['Chỉ đếm một liên kết H–Cl.', 'Dùng tạo trừ phá.'], ['Tính ΔH từ năng lượng liên kết'])
];
