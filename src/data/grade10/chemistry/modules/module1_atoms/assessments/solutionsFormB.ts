import type { Solution } from '@/types';

const make = (questionId: string, explanation: string, finalAnswer: string, commonMistakes: string[], reviewSuggestions: string[]): Solution => ({ id: `solution-${questionId}`, questionId, recognition: 'Xác định dữ kiện cốt lõi trước khi tính hoặc suy luận.', detailedSteps: [{ order: 1, title: 'Giải', explanation, result: finalAnswer }], finalAnswer, commonMistakes, reviewSuggestions });

export const m1AssessmentSolutionsFormB: Solution[] = [
  make('chem10-assess-m1-cp-b-q01', 'Nguyên tử trung hòa có e = p = 12; số khối A = 12 + 13 = 25.', 'A', ['Nhầm electron với neutron.'], ['Thành phần và kích thước nguyên tử']),
  make('chem10-assess-m1-cp-b-q02', 'Hai hạt có cùng Z = 12 nên cùng số proton; số khối khác nhau do số neutron khác nhau.', 'C', ['Cho rằng khác số khối là khác nguyên tố.'], ['Nguyên tố và kí hiệu nguyên tử']),
  make('chem10-assess-m1-cp-b-q03', '$\overline A=79\times0,60+81\times0,40=79,8$.', 'B', ['Lấy trung bình cộng.'], ['Đồng vị và nguyên tử khối trung bình']),
  make('chem10-assess-m1-cp-b-q04', 'Tỉ lệ 3 : 1 tương ứng 75% : 25%, vì vậy đồng vị 24 phổ biến khoảng 75%.', 'B', ['Đồng nhất m/z với độ phổ biến.'], ['Đọc dữ liệu phổ khối lượng']),
  make('chem10-assess-m1-cp-b-q05', 'Mô hình hiện đại dùng vùng xác suất; không mô tả electron chạy trên một đường cố định.', 'A', ['Coi orbital là quỹ đạo.'], ['Mô hình Bohr và mô hình hiện đại']),
  make('chem10-assess-m1-cp-b-q06', 'Phân lớp d có 5 orbital, mỗi orbital chứa tối đa 2 electron nên sức chứa là 10.', 'B', ['Nhầm số orbital với sức chứa electron.'], ['Orbital, lớp và phân lớp electron']),
  make('chem10-assess-m1-cp-b-q07', 'Điền đủ 14 electron theo thứ tự mức năng lượng thu được $1s^22s^22p^63s^23p^2$.', 'A', ['Tổng số mũ không bằng Z.'], ['Cấu hình electron']),
  make('chem10-assess-m1-cp-b-q08', 'Lớp ngoài cùng có 3 electron; nguyên tố tương ứng có xu hướng nhường electron và biểu hiện tính kim loại.', 'C', ['Chỉ đếm electron thiếu so với octet rồi kết luận nhận electron.'], ['Cấu hình electron và tính chất nguyên tố']),
  make('chem10-assess-m1-cp-b-q09', 'Số neutron n = A - Z = 39 - 19 = 20.', '20', ['Lấy A làm số neutron.'], ['Nguyên tố và kí hiệu nguyên tử']),
  make('chem10-assess-m1-cp-b-q10', '$\overline A=10\times0,20+11\times0,80=10,8$.', '10,8', ['Lấy trung bình cộng.'], ['Đồng vị và nguyên tử khối trung bình']),
  make('chem10-assess-m1-cp-b-q11', 'Theo quy tắc Hund, ba electron của 3p3 phân bố đơn vào ba orbital p, nên có 3 electron độc thân.', '3', ['Ghép đôi trước khi điền đơn đủ orbital.'], ['Cấu hình electron']),
  make('chem10-assess-m1-cp-b-q12', 'Tổng electron là 2 + 2 + 6 + 2 + 6 = 18; nguyên tử trung hòa có Z = 18.', '18', ['Chỉ lấy electron lớp ngoài cùng.'], ['Cấu hình electron'])
];
