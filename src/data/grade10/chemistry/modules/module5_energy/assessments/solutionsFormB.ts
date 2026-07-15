import type { Solution } from '@/types';

const make = (questionId: string, explanation: string, finalAnswer: string, commonMistakes: string[], reviewSuggestions: string[]): Solution => ({
  id: 'solution-' + questionId, questionId,
  recognition: 'Xác định hệ–môi trường, chiều phản ứng và hệ số trước khi áp dụng công thức enthalpy.',
  detailedSteps: [{ order: 1, title: 'Phân tích', explanation, result: finalAnswer }],
  finalAnswer, commonMistakes, reviewSuggestions
});

export const m5AssessmentSolutionsFormB: Solution[] = [
  make('chem10-assess-m5-cp-b-q01', 'Môi trường lạnh đi vì truyền năng lượng vào hệ; quá trình trong túi chườm là thu nhiệt.', 'B', ['Cho rằng cảm giác lạnh nghĩa là hệ tỏa lạnh.'], ['Hệ, môi trường và tỏa–thu nhiệt']),
  make('chem10-assess-m5-cp-b-q02', 'Quá trình tỏa nhiệt truyền năng lượng từ hệ ra môi trường.', 'A', ['Đảo ngược chiều truyền năng lượng.'], ['Hệ, môi trường và tỏa–thu nhiệt']),
  make('chem10-assess-m5-cp-b-q03', '$\\Delta H>0$ nghĩa là sản phẩm có enthalpy cao hơn chất đầu 180 kJ và hệ hấp thụ nhiệt.', 'A', ['Cho rằng ΔH dương là tỏa nhiệt.'], ['Biến thiên enthalpy và sơ đồ năng lượng']),
  make('chem10-assess-m5-cp-b-q04', 'Phản ứng ngược đổi dấu ΔH: từ +484 kJ thành −484 kJ.', 'A', ['Giữ nguyên dấu khi đảo chiều.'], ['Biến đổi phương trình nhiệt hóa học']),
  make('chem10-assess-m5-cp-b-q05', '$N_2(g)$ là dạng đơn chất bền của nitrogen ở trạng thái chuẩn nên $\\Delta_fH^\\circ=0$.', 'C', ['Cho rằng mọi chất khí đều có ΔfH° bằng 0.'], ['Enthalpy tạo thành chuẩn']),
  make('chem10-assess-m5-cp-b-q06', '$\\Delta H^\\circ=(-394)-[(-111)+\\frac12(0)]=-283\\ kJ$.', 'B', ['Bỏ dấu âm của CO.', 'Tính chất đầu trừ sản phẩm.'], ['Tính ΔH từ enthalpy tạo thành']),
  make('chem10-assess-m5-cp-b-q07', 'Ước tính theo $\\Delta H\\approx\\sum E_{liên\\ kết\\ bị\\ phá}-\\sum E_{liên\\ kết\\ được\\ tạo}$.', 'B', ['Đảo thứ tự tạo và phá.'], ['Năng lượng liên kết']),
  make('chem10-assess-m5-cp-b-q08', 'Nhiệt độ môi trường giảm chứng tỏ hệ hấp thụ năng lượng từ môi trường, nên quá trình hòa tan thu nhiệt. Dữ liệu chưa đủ để gán trực tiếp 5,5°C thành kJ.', 'B', ['Coi độ giảm nhiệt độ là ΔH.', 'Gọi quá trình tỏa nhiệt vì có sự thay đổi nhiệt độ.'], ['Đọc dữ liệu nhiệt độ thí nghiệm']),
  make('chem10-assess-m5-cp-b-q09', '$\\Delta H=300-120=+180\\ kJ$.', '180', ['Tính 120−300.', 'Bỏ ý nghĩa dấu dương.'], ['Biến thiên enthalpy']),
  make('chem10-assess-m5-cp-b-q10', 'Tạo 4 mol $SO_3$ gấp đôi lượng trong phương trình, nên $\\Delta H=2(-198)=-396\\ kJ$.', '-396', ['Không nhân ΔH khi nhân phương trình.'], ['Tỉ lệ phương trình nhiệt hóa học']),
  make('chem10-assess-m5-cp-b-q11', '$\\Delta H^\\circ=(-1207)-[(-635)+(-394)]=-1207+1029=-178\\ kJ$.', '-178', ['Đảo sản phẩm và chất đầu.', 'Xử lí sai dấu âm.'], ['Tính ΔH từ enthalpy tạo thành']),
  make('chem10-assess-m5-cp-b-q12', 'Phá H–H và Br–Br cần $436+193=629$ kJ; tạo hai H–Br tương ứng $2(366)=732$ kJ. $\\Delta H=629-732=-103\\ kJ$.', '-103', ['Đếm thiếu liên kết sản phẩm.', 'Dùng tạo trừ phá.'], ['Tính ΔH từ năng lượng liên kết'])
];
