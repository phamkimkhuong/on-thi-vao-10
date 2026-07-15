import type { Solution } from '@/types';

const make = (questionId: string, explanation: string, finalAnswer: string, reviewSuggestions: string[]): Solution => ({ id: `solution-${questionId}`, questionId, recognition: 'Phân biệt tương tác trong chất, giữa các hạt và giữa các phân tử.', detailedSteps: [{ order: 1, title: 'Phân tích', explanation, result: finalAnswer }], finalAnswer, commonMistakes: ['Đồng nhất liên kết trong phân tử với lực giữa các phân tử.', 'Kết luận phân tử phân cực chỉ vì có liên kết phân cực.'], reviewSuggestions });

export const m3AssessmentSolutions: Solution[] = [
  make('chem10-assess-m3-cp-a-q01', 'Al nhường 3 electron để đạt cấu hình bền và tạo cation $Al^{3+}$.', 'A', ['Quy tắc octet và sự hình thành ion']),
  make('chem10-assess-m3-cp-a-q02', 'Trong dung dịch, $Na^+$ và $Cl^-$ chuyển động tự do mang điện; trong tinh thể chúng bị cố định tại nút mạng.', 'B', ['Liên kết ion và tinh thể ion']),
  make('chem10-assess-m3-cp-a-q03', 'Nitrogen tạo ba liên kết đơn N–H và còn một cặp electron chưa liên kết.', 'A', ['Liên kết cộng hóa trị và công thức Lewis']),
  make('chem10-assess-m3-cp-a-q04', 'Moment của các liên kết phân cực có thể triệt tiêu trong cấu trúc đối xứng, nên phân tử tổng thể có thể không phân cực.', 'B', ['Phân cực liên kết và phân tử']),
  make('chem10-assess-m3-cp-a-q05', 'HF tạo liên kết hydrogen giữa các phân tử; HCl không tạo mạng tương tác này mạnh như HF.', 'B', ['Liên kết hydrogen và van der Waals']),
  make('chem10-assess-m3-cp-a-q06', 'Trung hòa điện tích cần 2 ion $Al^{3+}$ và 3 ion $O^{2-}$, cho công thức $Al_2O_3$.', 'B', ['Liên kết ion và tinh thể ion']),
  make('chem10-assess-m3-cp-a-q07', '$N_2$ có liên kết ba, tương ứng ba cặp electron dùng chung.', 'C', ['Liên kết cộng hóa trị và công thức Lewis']),
  make('chem10-assess-m3-cp-a-q08', '$NH_3$ và $H_2O$ tạo liên kết hydrogen; mạng liên kết hydrogen của nước đặc biệt mạnh và rộng nên nhiệt độ sôi cao.', 'B', ['Liên kết hydrogen và van der Waals']),
  make('chem10-assess-m3-cp-a-q09', 'Nitrogen có 5 electron hóa trị nên nhận thêm 3 electron để đạt 8 electron lớp ngoài cùng.', '3', ['Quy tắc octet và sự hình thành ion']),
  make('chem10-assess-m3-cp-a-q10', 'Chỉ số 2 trong $CaCl_2$ cho biết tỉ lệ có 2 ion $Cl^-$ cho mỗi ion $Ca^{2+}$.', '2', ['Liên kết ion và tinh thể ion']),
  make('chem10-assess-m3-cp-a-q11', '$O_2$ có liên kết đôi nên có hai cặp electron dùng chung.', '2', ['Liên kết cộng hóa trị và công thức Lewis']),
  make('chem10-assess-m3-cp-a-q12', '$H_2O$, $NH_3$ và HF có H liên kết trực tiếp với O, N hoặc F và có cặp electron tự do; $CH_4$ không thỏa điều kiện. Tổng là 3.', '3', ['Liên kết hydrogen và van der Waals'])
];
