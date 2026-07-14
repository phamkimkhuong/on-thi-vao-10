import { QuestionType, Question, Solution } from '@/types';

export const m4QuestionTypes: QuestionType[] = [
  {
    id: 'chem10-qt18', topicId: 'chem10-t4', name: 'Số oxi hóa', slug: 'so-oxi-hoa', description: 'Xác định số oxi hóa của nguyên tố trong hợp chất và ion.', exampleQuestionId: 'chem10-q18a', difficulty: 'easy', examFrequency: 'high', theory: ['Số oxi hóa là điện tích giả định của nguyên tử nếu liên kết trong phân tử là hoàn toàn ion. Quy tắc xác định: Đơn chất = 0; H = +1 (hầu hết), O = −2 (hầu hết), kim loại kiềm = +1, kiềm thổ = +2, Al = +3; Tổng trong phân tử trung hòa = 0; Tổng trong ion đa nguyên tử = điện tích ion.'], recognitionSigns: ['Yêu cầu tìm số oxi hóa của một nguyên tố.', 'Cho công thức chất hoặc ion.'], solvingSteps: ['Đặt ẩn x cho số oxi hóa cần tìm.', 'Thay các số oxi hóa đã biết theo quy tắc.', 'Lập phương trình tổng bằng 0 hoặc bằng điện tích ion và giải x.'], commonMistakes: ['Nhầm dấu (+) và (−).', 'Quên nhân hệ số chỉ số nguyên tử.']
  },
  {
    id: 'chem10-qt19', topicId: 'chem10-t4', name: 'Quá trình Oxi hóa & Quá trình Khử', slug: 'qua-trinh-oxi-hoa-khu', description: 'Phân biệt quá trình nhường và nhận electron.', exampleQuestionId: 'chem10-q19a', difficulty: 'easy', examFrequency: 'high', theory: ['Quá trình oxi hóa (sự oxi hóa) là quá trình nhường electron (làm tăng số oxi hóa). Quá trình khử (sự khử) là quá trình nhận electron (làm giảm số oxi hóa).'], recognitionSigns: ['Viết bán phản ứng electron.', 'Yêu cầu gọi tên quá trình.'], solvingSteps: ['Xác định số oxi hóa trước và sau.', 'Tính số electron chênh lệch.', 'Viết e ở vế có số oxi hóa cao hơn.', 'Gọi tên: nhường e là oxi hóa; nhận e là khử.'], commonMistakes: ['Gọi quá trình nhường electron là quá trình khử.']
  },
  {
    id: 'chem10-qt20', topicId: 'chem10-t4', name: 'Chất Oxi hóa & Chất khử', slug: 'chat-oxi-hoa-chat-khu', description: 'Xác định vai trò của các chất trong phản ứng redox.', exampleQuestionId: 'chem10-q20a', difficulty: 'medium', examFrequency: 'high', theory: ['Chất oxi hóa nhận electron và bị khử. Chất khử nhường electron và bị oxi hóa. Tên gọi mô tả tác dụng của chất lên chất khác, không phải quá trình nó tự trải qua.'], recognitionSigns: ['Yêu cầu chỉ ra chất oxi hóa/chất khử.', 'Cho phản ứng có số oxi hóa thay đổi.'], solvingSteps: ['Theo dõi nguyên tố thay đổi trong từng chất.', 'Chất chứa nguyên tố giảm số oxi hóa là chất oxi hóa.', 'Chất chứa nguyên tố tăng số oxi hóa là chất khử.'], commonMistakes: ['Gọi chất bị oxi hóa là chất oxi hóa.']
  },
  {
    id: 'chem10-qt21', topicId: 'chem10-t4', name: 'Cân bằng bằng Phương pháp Electron', slug: 'can-bang-phuong-phap-electron', description: 'Cân bằng hệ số dựa trên bảo toàn electron.', exampleQuestionId: 'chem10-q21a', difficulty: 'medium', examFrequency: 'high', theory: ['Tổng electron chất khử nhường bằng tổng electron chất oxi hóa nhận. Sau khi cân bằng nguyên tố thay đổi số oxi hóa, tiếp tục cân bằng các nguyên tố còn lại và kiểm tra toàn phương trình.'], recognitionSigns: ['Phản ứng có nguyên tố đổi số oxi hóa.', 'Yêu cầu cân bằng theo electron.'], solvingSteps: ['Xác định số oxi hóa thay đổi.', 'Viết quá trình nhường và nhận electron.', 'Nhân hệ số để bảo toàn electron.', 'Đặt hệ số và cân bằng phần còn lại.', 'Kiểm tra nguyên tử.'], commonMistakes: ['Thay chỉ số trong công thức.', 'Bảo toàn electron nhưng quên kiểm tra nguyên tử khác.']
  }
];

export const m4Questions: Question[] = [
  { id: 'chem10-q18a', subjectId: 'chemistry', topicId: 'chem10-t4', questionTypeId: 'chem10-qt18', content: 'Số oxi hóa của sulfur trong $H_2SO_4$ là:\nA. +4\nB. +6\nC. −2\nD. 0', difficulty: 'easy', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B','b'], validatorType: 'choice' },
  { id: 'chem10-q18b', subjectId: 'chemistry', topicId: 'chem10-t4', questionTypeId: 'chem10-qt18', content: 'Số oxi hóa của manganese trong ion $MnO_4^-$ là:\nA. +7\nB. +6\nC. +4\nD. −1', difficulty: 'medium', sourceType: 'manual', correctAnswer: 'A', acceptedAnswers: ['A','a'], validatorType: 'choice' },
  { id: 'chem10-q19a', subjectId: 'chemistry', topicId: 'chem10-t4', questionTypeId: 'chem10-qt19', content: 'Quá trình $Fe^{2+}\\rightarrow Fe^{3+}+e$ là:\nA. Quá trình khử vì nhận electron.\nB. Quá trình oxi hóa vì nhường electron.\nC. Không phải redox.\nD. Quá trình tạo kết tủa.', difficulty: 'easy', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B','b'], validatorType: 'choice' },
  { id: 'chem10-q19b', subjectId: 'chemistry', topicId: 'chem10-t4', questionTypeId: 'chem10-qt19', content: 'Trong quá trình $Cl_2+2e\\rightarrow2Cl^-$, chlorine đã:\nA. Nhường electron và bị oxi hóa.\nB. Nhận electron và bị khử.\nC. Giữ nguyên số oxi hóa.\nD. Nhận proton.', difficulty: 'easy', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B','b'], validatorType: 'choice' },
  { id: 'chem10-q20a', subjectId: 'chemistry', topicId: 'chem10-t4', questionTypeId: 'chem10-qt20', content: 'Trong phản ứng $Zn+CuSO_4\\rightarrow ZnSO_4+Cu$, chất khử là:\nA. Zn\nB. $Cu^{2+}$ trong $CuSO_4$\nC. $SO_4^{2-}$\nD. Cu', difficulty: 'medium', sourceType: 'manual', correctAnswer: 'A', acceptedAnswers: ['A','a'], validatorType: 'choice' },
  { id: 'chem10-q20b', subjectId: 'chemistry', topicId: 'chem10-t4', questionTypeId: 'chem10-qt20', content: 'Trong phản ứng trên, $Cu^{2+}$ là chất oxi hóa vì:\nA. Nhường electron và tăng số oxi hóa.\nB. Nhận electron và bị khử thành Cu.\nC. Không thay đổi.\nD. Cung cấp oxygen.', difficulty: 'medium', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B','b'], validatorType: 'choice' },
  { id: 'chem10-q21a', subjectId: 'chemistry', topicId: 'chem10-t4', questionTypeId: 'chem10-qt21', content: 'Hệ số tối giản của $Al$ và $O_2$ trong phản ứng $Al+O_2\\rightarrow Al_2O_3$ lần lượt là:\nA. 2 và 1\nB. 4 và 3\nC. 3 và 2\nD. 2 và 3', difficulty: 'medium', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B','b'], validatorType: 'choice' },
  { id: 'chem10-q21b', subjectId: 'chemistry', topicId: 'chem10-t4', questionTypeId: 'chem10-qt21', content: 'Trong phản ứng $Fe_2O_3+CO\\rightarrow Fe+CO_2$, phương trình cân bằng đúng là:\nA. $Fe_2O_3+CO\\rightarrow2Fe+CO_2$\nB. $Fe_2O_3+3CO\\rightarrow2Fe+3CO_2$\nC. $2Fe_2O_3+CO\\rightarrow4Fe+CO_2$\nD. $Fe_2O_3+2CO\\rightarrow2Fe+2CO_2$', difficulty: 'medium', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B','b'], validatorType: 'choice' },
  // Dữ liệu từ redoxEnergyPractice (t4)
  { id: 'chem10-q18c', subjectId: 'chemistry', topicId: 'chem10-t4', questionTypeId: 'chem10-qt18', content: 'Số oxi hóa của sulfur trong $H_2SO_4$ là:\nA. +2\nB. +4\nC. +6\nD. −2', correctAnswer: 'C', difficulty: 'medium', sourceType: 'manual', acceptedAnswers: ['C', 'c'], validatorType: 'choice' },
  { id: 'chem10-q18d', subjectId: 'chemistry', topicId: 'chem10-t4', questionTypeId: 'chem10-qt18', content: 'Số oxi hóa của nitrogen trong ion $NO_3^-$ là:\nA. +3\nB. +5\nC. −3\nD. −5', correctAnswer: 'B', difficulty: 'medium', sourceType: 'manual', acceptedAnswers: ['B', 'b'], validatorType: 'choice' },
  { id: 'chem10-q18e', subjectId: 'chemistry', topicId: 'chem10-t4', questionTypeId: 'chem10-qt18', content: 'Trong $H_2O_2$, số oxi hóa của oxygen là:\nA. −2\nB. −1\nC. 0\nD. +1', correctAnswer: 'B', difficulty: 'hard', sourceType: 'manual', acceptedAnswers: ['B', 'b'], validatorType: 'choice' },
  { id: 'chem10-q19c', subjectId: 'chemistry', topicId: 'chem10-t4', questionTypeId: 'chem10-qt19', content: 'Quá trình $Fe^{2+}\\rightarrow Fe^{3+}+e$ là:\nA. Oxi hóa vì nhường electron.\nB. Khử vì nhường electron.\nC. Oxi hóa vì nhận electron.\nD. Không phải oxi hóa–khử.', correctAnswer: 'A', difficulty: 'medium', sourceType: 'manual', acceptedAnswers: ['A', 'a'], validatorType: 'choice' },
  { id: 'chem10-q19d', subjectId: 'chemistry', topicId: 'chem10-t4', questionTypeId: 'chem10-qt19', content: 'Quá trình $Cl_2+2e\\rightarrow2Cl^-$ là:\nA. Oxi hóa.\nB. Khử.\nC. Phân li acid.\nD. Trung hòa.', correctAnswer: 'B', difficulty: 'medium', sourceType: 'manual', acceptedAnswers: ['B', 'b'], validatorType: 'choice' },
  { id: 'chem10-q19e', subjectId: 'chemistry', topicId: 'chem10-t4', questionTypeId: 'chem10-qt19', content: 'Trong phản ứng $2Mg+O_2\\rightarrow2MgO$, phát biểu đúng là:\nA. Mg nhận electron và bị khử.\nB. O tăng số oxi hóa.\nC. Mg nhường electron, O nhận electron.\nD. Không có sự chuyển electron.', correctAnswer: 'C', difficulty: 'medium', sourceType: 'manual', acceptedAnswers: ['C', 'c'], validatorType: 'choice' },
  { id: 'chem10-q20c', subjectId: 'chemistry', topicId: 'chem10-t4', questionTypeId: 'chem10-qt20', content: 'Trong $Zn+Cu^{2+}\\rightarrow Zn^{2+}+Cu$, chất khử là:\nA. Zn\nB. $Cu^{2+}$\nC. $Zn^{2+}$\nD. Cu', correctAnswer: 'A', difficulty: 'medium', sourceType: 'manual', acceptedAnswers: ['A', 'a'], validatorType: 'choice' },
  { id: 'chem10-q20d', subjectId: 'chemistry', topicId: 'chem10-t4', questionTypeId: 'chem10-qt20', content: 'Trong $2Fe^{2+}+Cl_2\\rightarrow2Fe^{3+}+2Cl^-$, chất oxi hóa là:\nA. $Fe^{2+}$\nB. $Cl_2$\nC. $Fe^{3+}$\nD. $Cl^-$', correctAnswer: 'B', difficulty: 'medium', sourceType: 'manual', acceptedAnswers: ['B', 'b'], validatorType: 'choice' },
  { id: 'chem10-q20e', subjectId: 'chemistry', topicId: 'chem10-t4', questionTypeId: 'chem10-qt20', content: 'Mệnh đề nào luôn đúng?\nA. Chất oxi hóa bị oxi hóa.\nB. Chất khử nhận electron.\nC. Chất oxi hóa nhận electron và bị khử.\nD. Chất khử luôn chứa oxygen.', correctAnswer: 'C', difficulty: 'medium', sourceType: 'manual', acceptedAnswers: ['C', 'c'], validatorType: 'choice' },
  { id: 'chem10-q21c', subjectId: 'chemistry', topicId: 'chem10-t4', questionTypeId: 'chem10-qt21', content: 'Hệ số nguyên tối giản của $Fe^{2+}+MnO_4^-+H^+\\rightarrow Fe^{3+}+Mn^{2+}+H_2O$ là:\nA. 1,1,8,1,1,4\nB. 5,1,8,5,1,4\nC. 5,2,8,5,2,4\nD. 1,5,8,1,5,4', correctAnswer: 'B', difficulty: 'hard', sourceType: 'manual', acceptedAnswers: ['B', 'b'], validatorType: 'choice' },
  { id: 'chem10-q21d', subjectId: 'chemistry', topicId: 'chem10-t4', questionTypeId: 'chem10-qt21', content: 'Cân bằng $Al+HCl\\rightarrow AlCl_3+H_2$. Tổng hệ số nguyên tối giản là:\nA. 8\nB. 10\nC. 13\nD. 16', correctAnswer: 'C', difficulty: 'medium', sourceType: 'manual', acceptedAnswers: ['C', 'c'], validatorType: 'choice' },
  { id: 'chem10-q21e', subjectId: 'chemistry', topicId: 'chem10-t4', questionTypeId: 'chem10-qt21', content: 'Trong phương pháp thăng bằng electron, sau khi viết các quá trình nhường–nhận electron cần làm gì trước?\nA. Đổi chỉ số trong công thức.\nB. Nhân hệ số để tổng electron nhường bằng tổng electron nhận.\nC. Cân bằng H trước trong mọi trường hợp.\nD. Bỏ qua nguyên tố đổi số oxi hóa.', correctAnswer: 'B', difficulty: 'medium', sourceType: 'manual', acceptedAnswers: ['B', 'b'], validatorType: 'choice' }
];

export const m4Solutions: Solution[] = [
  {
    id: 'chem10-s18a', questionId: 'chem10-q18a',
    recognition: 'Theo dõi số oxi hóa và electron nhường–nhận.',
    detailedSteps: [{ order: 1, title: 'Xác định thay đổi', explanation: 'Gọi số oxi hóa của S là x: $2(+1)+x+4(-2)=0$, suy ra $x=+6$.' }, { order: 2, title: 'Kết luận', explanation: 'Chọn phương án B.' }],
    finalAnswer: 'B',
    commonMistakes: ['Đảo chất oxi hóa với chất bị oxi hóa hoặc thay chỉ số khi cân bằng.'],
    reviewSuggestions: ['Ghi cạnh nguyên tố: số oxi hóa trước → sau, rồi mới viết electron và đặt hệ số.']
  },
  {
    id: 'chem10-s18b', questionId: 'chem10-q18b',
    recognition: 'Theo dõi số oxi hóa và electron nhường–nhận.',
    detailedSteps: [{ order: 1, title: 'Xác định thay đổi', explanation: 'Trong $MnO_4^-$: $x+4(-2)=-1$, nên $x=+7$.' }, { order: 2, title: 'Kết luận', explanation: 'Chọn phương án A.' }],
    finalAnswer: 'A',
    commonMistakes: ['Đảo chất oxi hóa với chất bị oxi hóa hoặc thay chỉ số khi cân bằng.'],
    reviewSuggestions: ['Ghi cạnh nguyên tố: số oxi hóa trước → sau, rồi mới viết electron và đặt hệ số.']
  },
  {
    id: 'chem10-s19a', questionId: 'chem10-q19a',
    recognition: 'Theo dõi số oxi hóa và electron nhường–nhận.',
    detailedSteps: [{ order: 1, title: 'Xác định thay đổi', explanation: '$Fe^{2+}$ nhường 1e, số oxi hóa tăng từ +2 lên +3 nên đây là oxi hóa.' }, { order: 2, title: 'Kết luận', explanation: 'Chọn phương án B.' }],
    finalAnswer: 'B',
    commonMistakes: ['Đảo chất oxi hóa với chất bị oxi hóa hoặc thay chỉ số khi cân bằng.'],
    reviewSuggestions: ['Ghi cạnh nguyên tố: số oxi hóa trước → sau, rồi mới viết electron và đặt hệ số.']
  },
  {
    id: 'chem10-s19b', questionId: 'chem10-q19b',
    recognition: 'Theo dõi số oxi hóa và electron nhường–nhận.',
    detailedSteps: [{ order: 1, title: 'Xác định thay đổi', explanation: 'Chlorine từ 0 xuống −1 và nhận electron, nên xảy ra quá trình khử.' }, { order: 2, title: 'Kết luận', explanation: 'Chọn phương án B.' }],
    finalAnswer: 'B',
    commonMistakes: ['Đảo chất oxi hóa với chất bị oxi hóa hoặc thay chỉ số khi cân bằng.'],
    reviewSuggestions: ['Ghi cạnh nguyên tố: số oxi hóa trước → sau, rồi mới viết electron và đặt hệ số.']
  },
  {
    id: 'chem10-s20a', questionId: 'chem10-q20a',
    recognition: 'Theo dõi số oxi hóa và electron nhường–nhận.',
    detailedSteps: [{ order: 1, title: 'Xác định thay đổi', explanation: 'Zn từ 0 lên +2, nhường electron và bị oxi hóa; vì vậy Zn là chất khử.' }, { order: 2, title: 'Kết luận', explanation: 'Chọn phương án A.' }],
    finalAnswer: 'A',
    commonMistakes: ['Đảo chất oxi hóa với chất bị oxi hóa hoặc thay chỉ số khi cân bằng.'],
    reviewSuggestions: ['Ghi cạnh nguyên tố: số oxi hóa trước → sau, rồi mới viết electron và đặt hệ số.']
  },
  {
    id: 'chem10-s20b', questionId: 'chem10-q20b',
    recognition: 'Theo dõi số oxi hóa và electron nhường–nhận.',
    detailedSteps: [{ order: 1, title: 'Xác định thay đổi', explanation: '$Cu^{2+}$ nhận electron, giảm số oxi hóa xuống 0 và bị khử; nó là chất oxi hóa.' }, { order: 2, title: 'Kết luận', explanation: 'Chọn phương án B.' }],
    finalAnswer: 'B',
    commonMistakes: ['Đảo chất oxi hóa với chất bị oxi hóa hoặc thay chỉ số khi cân bằng.'],
    reviewSuggestions: ['Ghi cạnh nguyên tố: số oxi hóa trước → sau, rồi mới viết electron và đặt hệ số.']
  },
  {
    id: 'chem10-s21a', questionId: 'chem10-q21a',
    recognition: 'Theo dõi số oxi hóa và electron nhường–nhận.',
    detailedSteps: [{ order: 1, title: 'Xác định thay đổi', explanation: 'Al nhường 3e, O nhận 2e; bội chung 6 dẫn đến $4Al+3O_2\\rightarrow2Al_2O_3$.' }, { order: 2, title: 'Kết luận', explanation: 'Chọn phương án B.' }],
    finalAnswer: 'B',
    commonMistakes: ['Đảo chất oxi hóa với chất bị oxi hóa hoặc thay chỉ số khi cân bằng.'],
    reviewSuggestions: ['Ghi cạnh nguyên tố: số oxi hóa trước → sau, rồi mới viết electron và đặt hệ số.']
  },
  {
    id: 'chem10-s21b', questionId: 'chem10-q21b',
    recognition: 'Theo dõi số oxi hóa và electron nhường–nhận.',
    detailedSteps: [{ order: 1, title: 'Xác định thay đổi', explanation: 'Hai Fe được cân bằng bằng 2Fe; ba oxygen trong oxide cần 3CO để tạo 3CO2: $Fe_2O_3+3CO\\rightarrow2Fe+3CO_2$.' }, { order: 2, title: 'Kết luận', explanation: 'Chọn phương án B.' }],
    finalAnswer: 'B',
    commonMistakes: ['Đảo chất oxi hóa với chất bị oxi hóa hoặc thay chỉ số khi cân bằng.'],
    reviewSuggestions: ['Ghi cạnh nguyên tố: số oxi hóa trước → sau, rồi mới viết electron và đặt hệ số.']
  },
  // Các câu giải từ redoxEnergyPractice (t4)
  ...[
    { id: 'chem10-s18c', qId: 'chem10-q18c', ans: 'C', exp: '$2(+1)+x+4(-2)=0$, suy ra $x=+6$.' },
    { id: 'chem10-s18d', qId: 'chem10-q18d', ans: 'B', exp: '$x+3(-2)=-1$, do đó $x=+5$.' },
    { id: 'chem10-s18e', qId: 'chem10-q18e', ans: 'B', exp: 'Peroxide là ngoại lệ: oxygen có số oxi hóa −1; kiểm tra $2(+1)+2(-1)=0$.' },
    { id: 'chem10-s19c', qId: 'chem10-q19c', ans: 'A', exp: 'Fe²⁺ nhường một electron, số oxi hóa tăng từ +2 lên +3 nên bị oxi hóa.' },
    { id: 'chem10-s19d', qId: 'chem10-q19d', ans: 'B', exp: 'Chlorine nhận electron, số oxi hóa giảm từ 0 xuống −1 nên bị khử.' },
    { id: 'chem10-s19e', qId: 'chem10-q19e', ans: 'C', exp: 'Mg: 0 → +2 là nhường electron; O: 0 → −2 là nhận electron.' },
    { id: 'chem10-s20c', qId: 'chem10-q20c', ans: 'A', exp: 'Zn nhường electron và bị oxi hóa, nên Zn là chất khử.' },
    { id: 'chem10-s20d', qId: 'chem10-q20d', ans: 'B', exp: 'Cl₂ nhận electron và bị khử thành Cl⁻, nên là chất oxi hóa.' },
    { id: 'chem10-s20e', qId: 'chem10-q20e', ans: 'C', exp: 'Chất oxi hóa gây oxi hóa chất khác bằng cách nhận electron; bản thân nó bị khử.' },
    { id: 'chem10-s21c', qId: 'chem10-q21c', ans: 'B', exp: 'Mn(+7) nhận 5e, mỗi Fe²⁺ nhường 1e; sau đó cân bằng O bằng 4H₂O và H bằng 8H⁺.' },
    { id: 'chem10-s21d', qId: 'chem10-q21d', ans: 'C', exp: 'Phương trình $2Al+6HCl\\rightarrow2AlCl_3+3H_2$ có tổng hệ số 13.' },
    { id: 'chem10-s21e', qId: 'chem10-q21e', ans: 'B', exp: 'Bảo toàn electron là bước trung tâm; chỉ đặt hệ số, không thay chỉ số hóa học.' }
  ].map(item => ({
    id: item.id,
    questionId: item.qId,
    recognition: 'Xác định đại lượng thay đổi, áp dụng đúng quy ước dấu và bảo toàn trước khi tính.',
    detailedSteps: [
      { order: 1, title: 'Lập luận trọng tâm', explanation: item.exp },
      { order: 2, title: 'Kết luận', explanation: `Chọn phương án ${item.ans}.` }
    ],
    finalAnswer: item.ans,
    commonMistakes: ['Đảo chiều nhường–nhận electron, đổi chỉ số công thức, hoặc dùng sai dấu và hệ số của ΔH.'],
    reviewSuggestions: ['Viết riêng quá trình electron hoặc sơ đồ mức năng lượng trước khi thay số.']
  }))
];
