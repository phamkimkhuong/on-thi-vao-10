import type { Solution } from '@/types';

const make = (questionId: string, explanation: string, finalAnswer: string, commonMistakes: string[], reviewSuggestions: string[]): Solution => ({
  id: 'solution-' + questionId, questionId,
  recognition: 'Theo dõi số oxi hóa và electron trước khi xác định vai trò hoặc đặt hệ số.',
  detailedSteps: [{ order: 1, title: 'Phân tích', explanation, result: finalAnswer }],
  finalAnswer, commonMistakes, reviewSuggestions
});

export const m4AssessmentSolutionsFormB: Solution[] = [
  make('chem10-assess-m4-cp-b-q01', 'Gọi số oxi hóa của N là x: $(+1)+x+3(-2)=0$, suy ra $x=+5$.', 'B', ['Quên nhân −2 với ba nguyên tử O.'], ['Quy tắc xác định số oxi hóa']),
  make('chem10-assess-m4-cp-b-q02', 'Trong peroxide $Na_2O_2$, oxygen có số oxi hóa −1. Kiểm tra: $2(+1)+2(-1)=0$.', 'B', ['Mặc định oxygen luôn là −2.'], ['Ngoại lệ số oxi hóa của oxygen']),
  make('chem10-assess-m4-cp-b-q03', '$Sn^{2+}$ nhường 2 electron và tăng số oxi hóa từ +2 lên +4 nên bị oxi hóa.', 'A', ['Gọi nhường electron là quá trình khử.'], ['Quá trình oxi hóa và quá trình khử']),
  make('chem10-assess-m4-cp-b-q04', 'Oxygen nhận electron, số oxi hóa giảm từ 0 xuống −2; đây là quá trình khử.', 'B', ['Chỉ dựa vào tên oxygen để gọi quá trình oxi hóa.'], ['Quá trình oxi hóa và quá trình khử']),
  make('chem10-assess-m4-cp-b-q05', '$Cu^{2+}$ nhận electron tạo Cu, nên bị khử và đóng vai trò chất oxi hóa.', 'B', ['Gọi Fe bị oxi hóa là chất oxi hóa.'], ['Chất oxi hóa và chất khử']),
  make('chem10-assess-m4-cp-b-q06', 'Na tăng số oxi hóa từ 0 lên +1, nhường electron và là chất khử.', 'A', ['Gọi chất nhường electron là chất oxi hóa.'], ['Chất oxi hóa và chất khử']),
  make('chem10-assess-m4-cp-b-q07', 'Phương trình cân bằng là $Mg+2HCl\\rightarrow MgCl_2+H_2$, nên hệ số HCl bằng 2.', 'B', ['Thay chỉ số của $MgCl_2$.'], ['Cân bằng bằng phương pháp electron']),
  make('chem10-assess-m4-cp-b-q08', 'Phát hiện $Zn^{2+}$ chứng minh Zn đã nhường electron: $Zn\\rightarrow Zn^{2+}+2e$. $Cu^{2+}$ nhận electron tạo Cu đỏ nâu.', 'B', ['Cho rằng lớp Cu đỏ nâu là chất bị oxi hóa.', 'Không sử dụng dữ liệu ion.'], ['Phân tích chứng cứ phản ứng oxi hóa–khử']),
  make('chem10-assess-m4-cp-b-q09', 'K là +1, O là −2: $2(+1)+2x+7(-2)=0$, suy ra $2x=12$ và $x=+6$.', '+6', ['Quên chỉ số 2 của chromium.', 'Quên dấu dương.'], ['Số oxi hóa trong ion và hợp chất']),
  make('chem10-assess-m4-cp-b-q10', 'S giảm từ +6 xuống +4, chênh lệch 2 đơn vị nên mỗi nguyên tử sulfur nhận 2 electron.', '2', ['Cộng hai số oxi hóa thay vì lấy độ giảm.'], ['Số electron nhận–nhường']),
  make('chem10-assess-m4-cp-b-q11', 'Phương trình đã cân bằng theo tỉ lệ $CuO+H_2\\rightarrow Cu+H_2O$. Bốn hệ số đều bằng 1, tổng là 4.', '4', ['Bỏ qua hệ số 1 khi tính tổng.'], ['Cân bằng phản ứng oxi hóa–khử']),
  make('chem10-assess-m4-cp-b-q12', 'Zn nhường 2e, N trong nitrate nhận 3e; bội chung là 6. Phương trình: $3Zn+8HNO_3\\rightarrow3Zn(NO_3)_2+2NO+4H_2O$. Tổng hệ số là 20.', '20', ['Không cân bằng nitrate, H và O sau bước electron.', 'Thay chỉ số công thức.'], ['Cân bằng phản ứng oxi hóa–khử nhiều bước'])
];
