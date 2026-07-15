import type { Solution } from '@/types';

const make = (questionId: string, explanation: string, finalAnswer: string, commonMistakes: string[], reviewSuggestions: string[]): Solution => ({
  id: 'solution-' + questionId, questionId,
  recognition: 'Theo dõi số oxi hóa và electron trước khi xác định vai trò hoặc đặt hệ số.',
  detailedSteps: [{ order: 1, title: 'Phân tích', explanation, result: finalAnswer }],
  finalAnswer, commonMistakes, reviewSuggestions
});

export const m4AssessmentSolutions: Solution[] = [
  make('chem10-assess-m4-cp-a-q01', 'Gọi số oxi hóa của S là x: $2(+1)+x+4(-2)=0$, suy ra $x=+6$.', 'B', ['Quên nhân −2 với bốn nguyên tử O.'], ['Quy tắc xác định số oxi hóa']),
  make('chem10-assess-m4-cp-a-q02', 'Trong peroxide, oxygen là ngoại lệ có số oxi hóa −1. Kiểm tra: $2(+1)+2(-1)=0$.', 'B', ['Mặc định oxygen luôn có số oxi hóa −2.'], ['Ngoại lệ số oxi hóa của oxygen']),
  make('chem10-assess-m4-cp-a-q03', '$Fe^{2+}$ nhường một electron, số oxi hóa tăng từ +2 lên +3 nên đây là quá trình oxi hóa.', 'A', ['Gọi nhường electron là quá trình khử.'], ['Quá trình oxi hóa và quá trình khử']),
  make('chem10-assess-m4-cp-a-q04', 'Mỗi Cl nhận một electron, số oxi hóa giảm từ 0 xuống −1; nhận electron là quá trình khử.', 'B', ['Gọi chất nhận electron là bị oxi hóa.'], ['Quá trình oxi hóa và quá trình khử']),
  make('chem10-assess-m4-cp-a-q05', '$Cu^{2+}$ nhận electron và giảm từ +2 xuống 0 nên bị khử; chất bị khử là chất oxi hóa.', 'B', ['Gọi Zn bị oxi hóa là chất oxi hóa.'], ['Chất oxi hóa và chất khử']),
  make('chem10-assess-m4-cp-a-q06', 'Mg tăng số oxi hóa từ 0 lên +2 và nhường electron, vì vậy Mg là chất khử.', 'A', ['Gọi chất nhường electron là chất oxi hóa.'], ['Chất oxi hóa và chất khử']),
  make('chem10-assess-m4-cp-a-q07', 'Bảo toàn electron cho $2Al\\rightarrow2Al^{3+}+6e$ và $6H^++6e\\rightarrow3H_2$. Phương trình là $2Al+6HCl\\rightarrow2AlCl_3+3H_2$.', 'C', ['Thay chỉ số trong $AlCl_3$.', 'Không kiểm tra chlorine và hydrogen.'], ['Cân bằng bằng phương pháp electron']),
  make('chem10-assess-m4-cp-a-q08', 'Sự xuất hiện $Fe^{2+}$ chứng tỏ Fe kim loại đã nhường electron: $Fe\\rightarrow Fe^{2+}+2e$. Đồng thời $Cu^{2+}$ nhận electron tạo lớp Cu đỏ nâu.', 'B', ['Chỉ nhìn lớp Cu và kết luận Cu bị oxi hóa.', 'Bỏ qua chứng cứ ion trong dung dịch.'], ['Phân tích chứng cứ phản ứng oxi hóa–khử']),
  make('chem10-assess-m4-cp-a-q09', 'K có số oxi hóa +1, O là −2: $(+1)+x+4(-2)=0$, do đó $x=+7$.', '+7', ['Quên dấu dương.', 'Không nhân số oxi hóa oxygen với chỉ số 4.'], ['Số oxi hóa trong hợp chất']),
  make('chem10-assess-m4-cp-a-q10', 'Số oxi hóa giảm từ +5 xuống +2, chênh lệch 3 đơn vị; mỗi N nhận 3 electron.', '3', ['Lấy 5+2 thay vì hiệu 5−2.'], ['Số electron nhận–nhường']),
  make('chem10-assess-m4-cp-a-q11', 'Phương trình cân bằng là $Fe_2O_3+3CO\\rightarrow2Fe+3CO_2$. Tổng hệ số $1+3+2+3=9$.', '9', ['Không tính hệ số 1.', 'Chỉ cân bằng Fe mà không kiểm tra C và O.'], ['Cân bằng phản ứng oxi hóa–khử']),
  make('chem10-assess-m4-cp-a-q12', 'Cu nhường 2e, N trong nitrate nhận 3e; bội chung là 6. Hoàn tất cân bằng được $3Cu+8HNO_3\\rightarrow3Cu(NO_3)_2+2NO+4H_2O$. Tổng là 20.', '20', ['Bảo toàn electron nhưng không cân bằng H và O.', 'Thay chỉ số trong nitrate.'], ['Cân bằng phản ứng oxi hóa–khử nhiều bước'])
];
