import type { Solution } from '@/types';

const solution = (
  questionId: string,
  recognition: string,
  explanation: string,
  finalAnswer: string,
  commonMistakes: string[],
  reviewSuggestions: string[]
): Solution => ({
  id: `solution-${questionId}`,
  questionId,
  recognition,
  detailedSteps: [{ order: 1, title: 'Phân tích', explanation, result: finalAnswer }],
  finalAnswer,
  commonMistakes,
  reviewSuggestions
});

export const m1AssessmentSolutions: Solution[] = [
  solution('chem10-assess-m1-cp-a-q01', 'Dùng tính trung hòa điện và số khối.', 'Nguyên tử trung hòa nên e = p = 15; số khối A = p + n = 31.', 'A', ['Cho rằng số electron bằng số neutron.', 'Nhầm số khối với số neutron.'], ['Thành phần và kích thước nguyên tử']),
  solution('chem10-assess-m1-cp-a-q02', 'Đồng vị được xác định từ số proton và neutron.', 'Các đồng vị thuộc cùng nguyên tố nên có cùng số proton, nhưng khác số neutron và do đó khác số khối.', 'C', ['Dùng số neutron để xác định nguyên tố.', 'Đồng nhất số khối với số hiệu nguyên tử.'], ['Nguyên tố và kí hiệu nguyên tử', 'Đồng vị và nguyên tử khối trung bình']),
  solution('chem10-assess-m1-cp-a-q03', 'Tính trung bình có trọng số.', '$\overline{A}=63\times0,70+65\times0,30=63,6$.', 'B', ['Lấy trung bình cộng 63 và 65.', 'Không đổi phần trăm về dạng thập phân.'], ['Đồng vị và nguyên tử khối trung bình']),
  solution('chem10-assess-m1-cp-a-q04', 'Chiều cao tương đối của đỉnh phản ánh độ phổ biến.', 'Tỉ lệ cường độ 1:4 tương ứng độ phổ biến xấp xỉ 20%:80%; đỉnh m/z = 11 thuộc đồng vị phổ biến hơn.', 'B', ['Coi đỉnh cao hơn là đồng vị nặng hơn theo cùng tỉ lệ.', 'Coi m/z là số proton.'], ['Đọc dữ liệu phổ khối lượng']),
  solution('chem10-assess-m1-cp-a-q05', 'Phân biệt quỹ đạo Bohr với orbital.', 'Orbital là vùng không gian quanh hạt nhân có xác suất tìm thấy electron lớn; nó không phải đường chuyển động xác định.', 'B', ['Xem orbital như đường tròn cố định.'], ['Mô hình Bohr và mô hình hiện đại']),
  solution('chem10-assess-m1-cp-a-q06', 'Nhớ số orbital của phân lớp p.', 'Phân lớp p có 3 orbital; mỗi orbital chứa tối đa 2 electron nên toàn phân lớp chứa tối đa 6 electron.', 'B', ['Nhầm số orbital với số electron tối đa.'], ['Orbital, lớp và phân lớp electron']),
  solution('chem10-assess-m1-cp-a-q07', 'Tổng số electron phải bằng Z.', 'Điền electron theo thứ tự mức năng lượng cho 16 electron thu được $1s^2 2s^2 2p^6 3s^2 3p^4$.', 'A', ['Tổng số mũ không bằng 16.', 'Điền 3p đầy trước khi đủ electron.'], ['Cấu hình electron']),
  solution('chem10-assess-m1-cp-a-q08', 'Xét số electron lớp ngoài cùng.', 'Cấu hình $3s^2 3p^5$ có 7 electron lớp ngoài cùng; nguyên tử có xu hướng nhận thêm 1 electron để đạt cấu hình bền.', 'B', ['Cho rằng nhiều electron hóa trị đồng nghĩa là kim loại.', 'Xem cấu hình 7 electron là đã bão hòa.'], ['Cấu hình electron và tính chất nguyên tố']),
  solution('chem10-assess-m1-cp-a-q09', 'Dùng n = A - Z.', 'Số neutron là $56-26=30$.', '30', ['Lấy 56 làm số neutron.', 'Cộng số khối và số hiệu nguyên tử.'], ['Nguyên tố và kí hiệu nguyên tử']),
  solution('chem10-assess-m1-cp-a-q10', 'Tính trung bình theo độ phổ biến.', '$\overline{A}=35\times0,75+37\times0,25=35,5$.', '35,5', ['Lấy trung bình cộng bằng 36.', 'Dùng 75 và 25 mà không chia 100.'], ['Đồng vị và nguyên tử khối trung bình']),
  solution('chem10-assess-m1-cp-a-q11', 'Áp dụng quy tắc Hund cho 3p4.', 'Ba orbital p được điền đơn trước rồi mới ghép đôi. Với 3p4 còn 2 orbital chứa electron độc thân.', '2', ['Ghép đôi electron ngay từ orbital đầu tiên.', 'Đếm 4 electron ở phân lớp p đều là độc thân.'], ['Cấu hình electron']),
  solution('chem10-assess-m1-cp-a-q12', 'Cộng tổng số electron trong cấu hình.', '$2+2+6+2+6+1=19$ electron. Nguyên tử trung hòa có Z bằng số electron nên Z = 19.', '19', ['Chỉ lấy số electron lớp ngoài cùng.', 'Nhầm số lớp electron với Z.'], ['Cấu hình electron', 'Cấu hình electron và tính chất nguyên tố'])
];
