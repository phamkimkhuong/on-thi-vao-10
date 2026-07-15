import type { Solution } from '@/types';

const make = (questionId: string, explanation: string, finalAnswer: string, reviewSuggestions: string[]): Solution => ({ id: `solution-${questionId}`, questionId, recognition: 'Xác định loại liên kết hoặc lực tương tác trước khi suy luận tính chất.', detailedSteps: [{ order: 1, title: 'Phân tích', explanation, result: finalAnswer }], finalAnswer, commonMistakes: ['Nhầm liên kết trong phân tử với lực giữa các phân tử.'], reviewSuggestions });

export const m3AssessmentSolutionsFormB: Solution[] = [
  make('chem10-assess-m3-cp-b-q01', 'Chlorine nhận thêm 1 electron để đạt octet và tạo ion $Cl^-$.', 'B', ['Quy tắc octet và sự hình thành ion']),
  make('chem10-assess-m3-cp-b-q02', 'Hai ion $K^+$ trung hòa điện tích của một ion $O^{2-}$, nên công thức là $K_2O$.', 'B', ['Liên kết ion và tinh thể ion']),
  make('chem10-assess-m3-cp-b-q03', 'Carbon tạo hai liên kết đôi với hai oxygen, cho cấu tạo O=C=O.', 'B', ['Liên kết cộng hóa trị và công thức Lewis']),
  make('chem10-assess-m3-cp-b-q04', 'Cl có độ âm điện lớn hơn H nên cặp electron dùng chung lệch về Cl.', 'A', ['Phân cực liên kết và phân tử']),
  make('chem10-assess-m3-cp-b-q05', 'O–H trong một phân tử là liên kết cộng hóa trị; lực hút O···H giữa các phân tử là liên kết hydrogen.', 'B', ['Liên kết hydrogen và van der Waals']),
  make('chem10-assess-m3-cp-b-q06', 'Ở trạng thái nóng chảy, các ion không còn bị cố định tại nút mạng và có thể mang dòng điện.', 'C', ['Liên kết ion và tinh thể ion']),
  make('chem10-assess-m3-cp-b-q07', '$CH_4$ có bốn liên kết đơn C–H, tương ứng bốn cặp electron dùng chung.', 'B', ['Liên kết cộng hóa trị và công thức Lewis']),
  make('chem10-assess-m3-cp-b-q08', 'Từ He đến Kr, đám mây electron lớn và dễ phân cực hơn nên lực van der Waals tăng, làm nhiệt độ sôi tăng.', 'A', ['Liên kết hydrogen và van der Waals']),
  make('chem10-assess-m3-cp-b-q09', 'Calcium nhường 2 electron lớp ngoài cùng để tạo $Ca^{2+}$.', '2', ['Quy tắc octet và sự hình thành ion']),
  make('chem10-assess-m3-cp-b-q10', 'Chỉ số 2 cho biết mỗi đơn vị công thức có 2 ion chloride.', '2', ['Liên kết ion và tinh thể ion']),
  make('chem10-assess-m3-cp-b-q11', '$N_2$ có liên kết ba nên có 3 cặp electron dùng chung.', '3', ['Liên kết cộng hóa trị và công thức Lewis']),
  make('chem10-assess-m3-cp-b-q12', '$H_2O$, $NH_3$ và HF tạo liên kết hydrogen đáng kể; HCl không được xếp vào nhóm này. Tổng là 3.', '3', ['Liên kết hydrogen và van der Waals'])
];
