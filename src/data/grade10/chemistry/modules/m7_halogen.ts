import { QuestionType, Question, Solution } from '@/types';

export const m7QuestionTypes: QuestionType[] = [
  {
    id: 'chem10-qt30', topicId: 'chem10-t7', name: 'Vị trí & Xu hướng Halogen', slug: 'xu-huong-halogen', description: 'Giải thích cấu hình và xu hướng nhóm VIIA.', exampleQuestionId: 'chem10-q30a', difficulty: 'easy', examFrequency: 'high',
    theory: ['Halogen có lớp ngoài cùng $ns^2np^5$. Đi xuống nhóm, bán kính và nhiệt độ sôi thường tăng, tính oxi hóa giảm.'],
    recognitionSigns: ['So sánh F, Cl, Br, I.'], solvingSteps: ['Xét cấu hình.', 'Xét bán kính.', 'Suy xu hướng.'], commonMistakes: ['Cho rằng mọi tính chất tăng cùng chiều.']
  },
  {
    id: 'chem10-qt31', topicId: 'chem10-t7', name: 'Tính Oxi hóa & Phản ứng Thế', slug: 'the-halogen', description: 'Dự đoán phản ứng halogen–halide.', exampleQuestionId: 'chem10-q31a', difficulty: 'medium', examFrequency: 'high',
    theory: ['Tính oxi hóa giảm $F_2>Cl_2>Br_2>I_2$. Halogen mạnh hơn oxi hóa được halide yếu hơn.'],
    recognitionSigns: ['Halogen gặp muối halide.'], solvingSteps: ['Xếp tính oxi hóa.', 'Chọn chiều phản ứng.', 'Cân bằng electron.'], commonMistakes: ['Đảo chiều phản ứng thế.']
  },
  {
    id: 'chem10-qt32', topicId: 'chem10-t7', name: 'Phản ứng Đặc trưng Halogen', slug: 'phan-ung-halogen', description: 'Phản ứng với H2, nước và kiềm.', exampleQuestionId: 'chem10-q32a', difficulty: 'medium', examFrequency: 'high',
    theory: ['Halogen phản ứng H2 tạo HX. Chlorine với nước tạo HCl và HClO; với kiềm lạnh loãng tạo chloride và hypochlorite.'],
    recognitionSigns: ['Halogen gặp H2, nước, NaOH.'], solvingSteps: ['Xác định điều kiện.', 'Theo dõi số oxi hóa.', 'Cân bằng.'], commonMistakes: ['Bỏ qua điều kiện phản ứng.']
  },
  {
    id: 'chem10-qt33', topicId: 'chem10-t7', name: 'Hydrogen Halide & Acid', slug: 'hydrogen-halide', description: 'So sánh HF, HCl, HBr, HI.', exampleQuestionId: 'chem10-q33a', difficulty: 'medium', examFrequency: 'high',
    theory: ['Liên kết H–F rất bền và HF tạo liên kết hydrogen. Độ mạnh acid trong nước tăng HF < HCl < HBr < HI; tính khử halide tăng từ F− đến I−.'],
    recognitionSigns: ['So sánh HX.'], solvingSteps: ['Xét độ bền H–X.', 'Xét phân li.', 'Xét khả năng nhường electron.'], commonMistakes: ['Suy acid mạnh chỉ từ độ âm điện.']
  },
  {
    id: 'chem10-qt34', topicId: 'chem10-t7', name: 'Nhận biết Ion Halide', slug: 'nhan-biet-halide', description: 'Nhận biết bằng ion bạc.', exampleQuestionId: 'chem10-q34a', difficulty: 'medium', examFrequency: 'high',
    theory: ['AgCl trắng, AgBr vàng nhạt/kem, AgI vàng. Cần kết hợp hiện tượng với phương trình ion và an toàn hóa chất.'],
    recognitionSigns: ['Thêm AgNO3 vào halide.'], solvingSteps: ['Xác định ion.', 'Dự đoán kết tủa.', 'Viết phương trình ion.'], commonMistakes: ['Nhớ màu nhưng nhầm ion.']
  }
];

export const m7Questions: Question[] = [
  { id: 'chem10-q30a', subjectId: 'chemistry', topicId: 'chem10-t7', questionTypeId: 'chem10-qt30', content: 'Cấu hình electron lớp ngoài cùng chung của halogen là:\nA. $ns^1$\nB. $ns^2np^5$\nC. $ns^2np^6$\nD. $ns^2np^3$', difficulty: 'easy', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B','b'], validatorType: 'choice' },
  { id: 'chem10-q30b', subjectId: 'chemistry', topicId: 'chem10-t7', questionTypeId: 'chem10-qt30', content: 'Đi xuống nhóm VIIA từ F đến I, xu hướng chung đúng là:\nA. Tính oxi hóa tăng.\nB. Bán kính giảm.\nC. Tính oxi hóa giảm và nhiệt độ sôi thường tăng.\nD. Mọi chất đều ở thể khí.', difficulty: 'medium', sourceType: 'manual', correctAnswer: 'C', acceptedAnswers: ['C','c'], validatorType: 'choice' },
  { id: 'chem10-q31a', subjectId: 'chemistry', topicId: 'chem10-t7', questionTypeId: 'chem10-qt31', content: 'Phản ứng nào xảy ra?\nA. $Br_2+2Cl^-\\rightarrow2Br^-+Cl_2$\nB. $Cl_2+2Br^-\\rightarrow2Cl^-+Br_2$\nC. $I_2+2Cl^-\\rightarrow2I^-+Cl_2$\nD. Không phản ứng nào.', difficulty: 'medium', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B','b'], validatorType: 'choice' },
  { id: 'chem10-q31b', subjectId: 'chemistry', topicId: 'chem10-t7', questionTypeId: 'chem10-qt31', content: 'Trong phản ứng $Cl_2+2Br^-\\rightarrow2Cl^-+Br_2$, chất oxi hóa là:\nA. $Br^-$\nB. $Cl_2$\nC. $Cl^-$\nD. $Br_2$', difficulty: 'medium', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B','b'], validatorType: 'choice' },
  { id: 'chem10-q32a', subjectId: 'chemistry', topicId: 'chem10-t7', questionTypeId: 'chem10-qt32', content: 'Chlorine tác dụng với nước tạo chủ yếu:\nA. HCl và HClO\nB. HCl và $O_2$\nC. $Cl^-$ duy nhất\nD. NaCl và NaClO', difficulty: 'medium', sourceType: 'manual', correctAnswer: 'A', acceptedAnswers: ['A','a'], validatorType: 'choice' },
  { id: 'chem10-q32b', subjectId: 'chemistry', topicId: 'chem10-t7', questionTypeId: 'chem10-qt32', content: 'Sản phẩm của $Cl_2$ với NaOH lạnh, loãng là:\nA. NaCl và NaClO\nB. Chỉ NaCl\nC. NaCl và $O_2$\nD. HCl và HClO', difficulty: 'medium', sourceType: 'manual', correctAnswer: 'A', acceptedAnswers: ['A','a'], validatorType: 'choice' },
  { id: 'chem10-q33a', subjectId: 'chemistry', topicId: 'chem10-t7', questionTypeId: 'chem10-qt33', content: 'Vì sao HF là acid yếu hơn HCl trong nước?\nA. F không âm điện.\nB. Liên kết H–F rất bền, khó phân li hơn.\nC. HF là hợp chất ion.\nD. HCl có liên kết hydrogen mạnh hơn.', difficulty: 'medium', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B','b'], validatorType: 'choice' },
  { id: 'chem10-q33b', subjectId: 'chemistry', topicId: 'chem10-t7', questionTypeId: 'chem10-qt33', content: 'Thứ tự tăng dần độ mạnh acid trong nước là:\nA. HI < HBr < HCl < HF\nB. HF < HCl < HBr < HI\nC. HCl < HF < HI < HBr\nD. Tất cả bằng nhau', difficulty: 'easy', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B','b'], validatorType: 'choice' },
  { id: 'chem10-q34a', subjectId: 'chemistry', topicId: 'chem10-t7', questionTypeId: 'chem10-qt34', content: 'Thêm $AgNO_3$ vào dung dịch chứa $Cl^-$ thu được:\nA. AgCl kết tủa trắng\nB. AgBr vàng nhạt\nC. AgI vàng\nD. Không hiện tượng', difficulty: 'easy', sourceType: 'manual', correctAnswer: 'A', acceptedAnswers: ['A','a'], validatorType: 'choice' },
  { id: 'chem10-q34b', subjectId: 'chemistry', topicId: 'chem10-t7', questionTypeId: 'chem10-qt34', content: 'Phương trình ion rút gọn nhận biết bromide là:\nA. $Ag^++Br^-\\rightarrow AgBr\\downarrow$\nB. $Ag+Br\\rightarrow AgBr$\nC. $Ag^-+Br^+\\rightarrow AgBr$\nD. $2Ag^++Br_2\\rightarrow2AgBr$', difficulty: 'medium', sourceType: 'manual', correctAnswer: 'A', acceptedAnswers: ['A','a'], validatorType: 'choice' },
  // Dữ liệu từ rateHalogenPractice (t7)
  { id: 'chem10-q30c', subjectId: 'chemistry', topicId: 'chem10-t7', questionTypeId: 'chem10-qt30', content: 'Ở điều kiện thường, trạng thái và màu phù hợp của halogen là:\nA. $F_2$ khí vàng lục, $Cl_2$ khí tím.\nB. $Cl_2$ khí vàng lục, $Br_2$ chất lỏng nâu đỏ, $I_2$ chất rắn tím đen.\nC. Tất cả đều khí không màu.\nD. $I_2$ là chất lỏng vàng.', correctAnswer: 'B', difficulty: 'medium', sourceType: 'manual', acceptedAnswers: ['B', 'b'], validatorType: 'choice' },
  { id: 'chem10-q30d', subjectId: 'chemistry', topicId: 'chem10-t7', questionTypeId: 'chem10-qt30', content: 'Nhiệt độ sôi tăng từ $F_2$ đến $I_2$ chủ yếu vì:\nA. Liên kết cộng hóa trị trong phân tử biến thành ion.\nB. Số electron và khả năng phân cực tăng, làm lực London mạnh hơn.\nC. Độ âm điện tăng xuống nhóm.\nD. Xuất hiện liên kết hydrogen.', correctAnswer: 'B', difficulty: 'medium', sourceType: 'manual', acceptedAnswers: ['B', 'b'], validatorType: 'choice' },
  { id: 'chem10-q30e', subjectId: 'chemistry', topicId: 'chem10-t7', questionTypeId: 'chem10-qt30', content: 'Thứ tự giảm dần tính phi kim (tính oxi hóa) của các halogen là:\nA. $I_2>Br_2>Cl_2>F_2$\nB. $F_2>Cl_2>Br_2>I_2$\nC. $Cl_2>F_2>I_2>Br_2$\nD. Tất cả bằng nhau', correctAnswer: 'B', difficulty: 'medium', sourceType: 'manual', acceptedAnswers: ['B', 'b'], validatorType: 'choice' },
  { id: 'chem10-q31c', subjectId: 'chemistry', topicId: 'chem10-t7', questionTypeId: 'chem10-qt31', content: 'Phản ứng nào xảy ra tự phát theo xu hướng tính oxi hóa?\nA. $Br_2+2Cl^-\\rightarrow2Br^-+Cl_2$\nB. $Cl_2+2I^-\\rightarrow2Cl^-+I_2$\nC. $I_2+2Br^-\\rightarrow2I^-+Br_2$\nD. $Br_2+2F^-\\rightarrow2Br^-+F_2$', correctAnswer: 'B', difficulty: 'medium', sourceType: 'manual', acceptedAnswers: ['B', 'b'], validatorType: 'choice' },
  { id: 'chem10-q31d', subjectId: 'chemistry', topicId: 'chem10-t7', questionTypeId: 'chem10-qt31', content: 'Sục $Br_2$ vào dung dịch NaCl, hiện tượng phản ứng thế đáng kể là:\nA. Tạo $Cl_2$.\nB. Tạo $F_2$.\nC. Không xảy ra vì $Br_2$ yếu hơn $Cl_2$.\nD. Tạo I₂.', correctAnswer: 'C', difficulty: 'medium', sourceType: 'manual', acceptedAnswers: ['C', 'c'], validatorType: 'choice' },
  { id: 'chem10-q31e', subjectId: 'chemistry', topicId: 'chem10-t7', questionTypeId: 'chem10-qt31', content: 'Trong $Cl_2+2I^-\\rightarrow2Cl^-+I_2$, ion $I^-$ đóng vai trò:\nA. Chất oxi hóa vì nhận electron.\nB. Chất khử vì nhường electron.\nC. Chất xúc tác.\nD. Môi trường.', correctAnswer: 'B', difficulty: 'medium', sourceType: 'manual', acceptedAnswers: ['B', 'b'], validatorType: 'choice' },
  { id: 'chem10-q32c', subjectId: 'chemistry', topicId: 'chem10-t7', questionTypeId: 'chem10-qt32', content: 'Trong phản ứng của $Cl_2$ với nước, chlorine đồng thời tạo HCl và HClO. Đây là phản ứng:\nA. Trung hòa.\nB. Tự oxi hóa–tự khử.\nC. Thế kim loại.\nD. Phân hủy nhiệt.', correctAnswer: 'B', difficulty: 'medium', sourceType: 'manual', acceptedAnswers: ['B', 'b'], validatorType: 'choice' },
  { id: 'chem10-q32d', subjectId: 'chemistry', topicId: 'chem10-t7', questionTypeId: 'chem10-qt32', content: 'Phương trình chlorine tác dụng với hydrogen là:\nA. $H_2+Cl_2\\rightarrow2HCl$\nB. $H_2+Cl_2\\rightarrow HCl_2$\nC. $2H_2+Cl_2\\rightarrow2H_2Cl$\nD. $H_2+2Cl\\rightarrow H_2Cl_2$', correctAnswer: 'A', difficulty: 'medium', sourceType: 'manual', acceptedAnswers: ['A', 'a'], validatorType: 'choice' },
  { id: 'chem10-q32e', subjectId: 'chemistry', topicId: 'chem10-t7', questionTypeId: 'chem10-qt32', content: 'Trong phản ứng $Cl_2+2NaOH\\rightarrow NaCl+NaClO+H_2O$ (lạnh, loãng), số oxi hóa của Cl trong hai sản phẩm là:\nA. −1 và +1\nB. 0 và +1\nC. −1 và 0\nD. +1 và +3', correctAnswer: 'A', difficulty: 'medium', sourceType: 'manual', acceptedAnswers: ['A', 'a'], validatorType: 'choice' },
  { id: 'chem10-q33c', subjectId: 'chemistry', topicId: 'chem10-t7', questionTypeId: 'chem10-qt33', content: 'Tính khử của các ion halide nhìn chung tăng theo chiều:\nA. $I^-<Br^-<Cl^-<F^-$\nB. $F^-<Cl^-<Br^-<I^-$\nC. $Cl^-<F^-<I^-<Br^-$\nD. Tất cả bằng nhau', correctAnswer: 'B', difficulty: 'medium', sourceType: 'manual', acceptedAnswers: ['B', 'b'], validatorType: 'choice' },
  { id: 'chem10-q33d', subjectId: 'chemistry', topicId: 'chem10-t7', questionTypeId: 'chem10-qt33', content: 'Chất nào có liên kết hydrogen giữa các phân tử rõ nhất?\nA. HCl\nB. HBr\nC. HI\nD. HF', correctAnswer: 'D', difficulty: 'medium', sourceType: 'manual', acceptedAnswers: ['D', 'd'], validatorType: 'choice' },
  { id: 'chem10-q33e', subjectId: 'chemistry', topicId: 'chem10-t7', questionTypeId: 'chem10-qt33', content: 'Mặc dù liên kết hydrogen làm HF có nhiệt độ sôi cao, HF vẫn là acid yếu hơn HCl trong nước vì:\nA. Liên kết H–F rất bền và khó phân li.\nB. HF không chứa hydrogen.\nC. HCl tạo tinh thể ion.\nD. F có độ âm điện bằng Cl.', correctAnswer: 'A', difficulty: 'hard', sourceType: 'manual', acceptedAnswers: ['A', 'a'], validatorType: 'choice' },
  { id: 'chem10-q34c', subjectId: 'chemistry', topicId: 'chem10-t7', questionTypeId: 'chem10-qt34', content: 'Thêm $AgNO_3$ vào ba dung dịch NaCl, NaBr và NaI. Màu kết tủa tương ứng là:\nA. Trắng, vàng nhạt, vàng.\nB. Vàng, trắng, vàng nhạt.\nC. Cả ba đều trắng.\nD. Không có kết tủa.', correctAnswer: 'A', difficulty: 'medium', sourceType: 'manual', acceptedAnswers: ['A', 'a'], validatorType: 'choice' },
  { id: 'chem10-q34d', subjectId: 'chemistry', topicId: 'chem10-t7', questionTypeId: 'chem10-qt34', content: 'Dung dịch chưa biết tạo kết tủa vàng với $AgNO_3$. Ion có khả năng nhất là:\nA. $Cl^-$\nB. $Br^-$\nC. $I^-$\nD. $F^-$', correctAnswer: 'C', difficulty: 'medium', sourceType: 'manual', acceptedAnswers: ['C', 'c'], validatorType: 'choice' },
  { id: 'chem10-q34e', subjectId: 'chemistry', topicId: 'chem10-t7', questionTypeId: 'chem10-qt34', content: 'Vì sao cần acid hóa mẫu bằng acid nitric thay vì hydrochloric trước phép thử ion halide bằng $AgNO_3$?\nA. HCl cung cấp thêm $Cl^-$ gây kết tủa AgCl và làm sai kết quả.\nB. HNO₃ cung cấp $Br^-$.\nC. HCl hòa tan mọi kết tủa bạc.\nD. Hai acid hoàn toàn tương đương.', correctAnswer: 'A', difficulty: 'hard', sourceType: 'manual', acceptedAnswers: ['A', 'a'], validatorType: 'choice' }
];

export const m7Solutions: Solution[] = [
  {
    id: 'chem10-s30a', questionId: 'chem10-q30a',
    recognition: 'Vận dụng xu hướng nhóm, oxi hóa–khử và hiện tượng thực nghiệm.',
    detailedSteps: [{ order: 1, title: 'Xác định quy luật hoặc phản ứng', explanation: 'Halogen có 7 electron lớp ngoài cùng với cấu hình chung $ns^2np^5$.' }, { order: 2, title: 'Kết luận', explanation: 'Chọn B.' }],
    finalAnswer: 'B',
    commonMistakes: ['Học thuộc phương trình mà không xét xu hướng oxi hóa hoặc điều kiện phản ứng.'],
    reviewSuggestions: ['Nối cấu hình ns²np⁵ → khả năng nhận electron → phản ứng và hiện tượng.']
  },
  {
    id: 'chem10-s30b', questionId: 'chem10-q30b',
    recognition: 'Vận dụng xu hướng nhóm, oxi hóa–khử và hiện tượng thực nghiệm.',
    detailedSteps: [{ order: 1, title: 'Xác định quy luật hoặc phản ứng', explanation: 'Đi xuống nhóm, bán kính và lực phân tán tăng nên nhiệt độ sôi tăng; khả năng hút thêm electron giảm nên tính oxi hóa giảm.' }, { order: 2, title: 'Kết luận', explanation: 'Chọn C.' }],
    finalAnswer: 'C',
    commonMistakes: ['Học thuộc phương trình mà không xét xu hướng oxi hóa hoặc điều kiện phản ứng.'],
    reviewSuggestions: ['Nối cấu hình ns²np⁵ → khả năng nhận electron → phản ứng và hiện tượng.']
  },
  {
    id: 'chem10-s31a', questionId: 'chem10-q31a',
    recognition: 'Vận dụng xu hướng nhóm, oxi hóa–khử và hiện tượng thực nghiệm.',
    detailedSteps: [{ order: 1, title: 'Xác định quy luật hoặc phản ứng', explanation: '$Cl_2$ oxi hóa mạnh hơn $Br_2$, nên oxi hóa $Br^-$ thành $Br_2$.' }, { order: 2, title: 'Kết luận', explanation: 'Chọn B.' }],
    finalAnswer: 'B',
    commonMistakes: ['Học thuộc phương trình mà không xét xu hướng oxi hóa hoặc điều kiện phản ứng.'],
    reviewSuggestions: ['Nối cấu hình ns²np⁵ → khả năng nhận electron → phản ứng và hiện tượng.']
  },
  {
    id: 'chem10-s31b', questionId: 'chem10-q31b',
    recognition: 'Vận dụng xu hướng nhóm, oxi hóa–khử và hiện tượng thực nghiệm.',
    detailedSteps: [{ order: 1, title: 'Xác định quy luật hoặc phản ứng', explanation: '$Cl_2$ nhận electron và bị khử thành $Cl^-$, nên là chất oxi hóa.' }, { order: 2, title: 'Kết luận', explanation: 'Chọn B.' }],
    finalAnswer: 'B',
    commonMistakes: ['Học thuộc phương trình mà không xét xu hướng oxi hóa hoặc điều kiện phản ứng.'],
    reviewSuggestions: ['Nối cấu hình ns²np⁵ → khả năng nhận electron → phản ứng và hiện tượng.']
  },
  {
    id: 'chem10-s32a', questionId: 'chem10-q32a',
    recognition: 'Vận dụng xu hướng nhóm, oxi hóa–khử và hiện tượng thực nghiệm.',
    detailedSteps: [{ order: 1, title: 'Xác định quy luật hoặc phản ứng', explanation: '$Cl_2+H_2O\\rightleftharpoons HCl+HClO$.' }, { order: 2, title: 'Kết luận', explanation: 'Chọn A.' }],
    finalAnswer: 'A',
    commonMistakes: ['Học thuộc phương trình mà không xét xu hướng oxi hóa hoặc điều kiện phản ứng.'],
    reviewSuggestions: ['Nối cấu hình ns²np⁵ → khả năng nhận electron → phản ứng và hiện tượng.']
  },
  {
    id: 'chem10-s32b', questionId: 'chem10-q32b',
    recognition: 'Vận dụng xu hướng nhóm, oxi hóa–khử và hiện tượng thực nghiệm.',
    detailedSteps: [{ order: 1, title: 'Xác định quy luật hoặc phản ứng', explanation: '$Cl_2+2NaOH\\rightarrow NaCl+NaClO+H_2O$ trong điều kiện lạnh, loãng.' }, { order: 2, title: 'Kết luận', explanation: 'Chọn A.' }],
    finalAnswer: 'A',
    commonMistakes: ['Học thuộc phương trình mà không xét xu hướng oxi hóa hoặc điều kiện phản ứng.'],
    reviewSuggestions: ['Nối cấu hình ns²np⁵ → khả năng nhận electron → phản ứng và hiện tượng.']
  },
  {
    id: 'chem10-s33a', questionId: 'chem10-q33a',
    recognition: 'Vận dụng xu hướng nhóm, oxi hóa–khử và hiện tượng thực nghiệm.',
    detailedSteps: [{ order: 1, title: 'Xác định quy luật hoặc phản ứng', explanation: 'Liên kết H–F rất bền nên HF khó phân li trong nước hơn HCl.' }, { order: 2, title: 'Kết luận', explanation: 'Chọn B.' }],
    finalAnswer: 'B',
    commonMistakes: ['Học thuộc phương trình mà không xét xu hướng oxi hóa hoặc điều kiện phản ứng.'],
    reviewSuggestions: ['Nối cấu hình ns²np⁵ → khả năng nhận electron → phản ứng và hiện tượng.']
  },
  {
    id: 'chem10-s33b', questionId: 'chem10-q33b',
    recognition: 'Vận dụng xu hướng nhóm, oxi hóa–khử và hiện tượng thực nghiệm.',
    detailedSteps: [{ order: 1, title: 'Xác định quy luật hoặc phản ứng', explanation: 'Khi liên kết H–X yếu dần từ HF đến HI, khả năng phân li và độ mạnh acid tăng.' }, { order: 2, title: 'Kết luận', explanation: 'Chọn B.' }],
    finalAnswer: 'B',
    commonMistakes: ['Học thuộc phương trình mà không xét xu hướng oxi hóa hoặc điều kiện phản ứng.'],
    reviewSuggestions: ['Nối cấu hình ns²np⁵ → khả năng nhận electron → phản ứng và hiện tượng.']
  },
  {
    id: 'chem10-s34a', questionId: 'chem10-q34a',
    recognition: 'Vận dụng xu hướng nhóm, oxi hóa–khử và hiện tượng thực nghiệm.',
    detailedSteps: [{ order: 1, title: 'Xác định quy luật hoặc phản ứng', explanation: '$Ag^++Cl^-\\rightarrow AgCl\\downarrow$ tạo kết tủa trắng.' }, { order: 2, title: 'Kết luận', explanation: 'Chọn A.' }],
    finalAnswer: 'A',
    commonMistakes: ['Học thuộc phương trình mà không xét xu hướng oxi hóa hoặc điều kiện phản ứng.'],
    reviewSuggestions: ['Nối cấu hình ns²np⁵ → khả năng nhận electron → phản ứng và hiện tượng.']
  },
  {
    id: 'chem10-s34b', questionId: 'chem10-q34b',
    recognition: 'Vận dụng xu hướng nhóm, oxi hóa–khử và hiện tượng thực nghiệm.',
    detailedSteps: [{ order: 1, title: 'Xác định quy luật hoặc phản ứng', explanation: 'Ion bạc kết hợp trực tiếp bromide: $Ag^++Br^-\\rightarrow AgBr\\downarrow$.' }, { order: 2, title: 'Kết luận', explanation: 'Chọn A.' }],
    finalAnswer: 'A',
    commonMistakes: ['Học thuộc phương trình mà không xét xu hướng oxi hóa hoặc điều kiện phản ứng.'],
    reviewSuggestions: ['Nối cấu hình ns²np⁵ → khả năng nhận electron → phản ứng và hiện tượng.']
  },
  // Các câu giải từ rateHalogenPractice (t7)
  ...[
    { id: 'chem10-s30c', qId: 'chem10-q30c', ans: 'B', exp: 'Đây là trạng thái và màu đặc trưng của chlorine, bromine và iodine ở điều kiện thường.' },
    { id: 'chem10-s30d', qId: 'chem10-q30d', ans: 'B', exp: 'Phân tử lớn hơn có đám mây electron dễ phân cực hơn, tăng lực phân tán giữa các phân tử.' },
    { id: 'chem10-s30e', qId: 'chem10-q30e', ans: 'B', exp: 'Khả năng nhận electron giảm dần từ fluorine xuống iodine.' },
    { id: 'chem10-s31c', qId: 'chem10-q31c', ans: 'B', exp: 'Cl₂ oxi hóa mạnh hơn I₂ nên oxi hóa I⁻ thành I₂.' },
    { id: 'chem10-s31d', qId: 'chem10-q31d', ans: 'C', exp: 'Br₂ không đủ mạnh để oxi hóa Cl⁻ thành Cl₂.' },
    { id: 'chem10-s31e', qId: 'chem10-q31e', ans: 'B', exp: 'I⁻ tăng số oxi hóa từ −1 lên 0, nhường electron và là chất khử.' },
    { id: 'chem10-s32c', qId: 'chem10-q32c', ans: 'B', exp: 'Cl từ số oxi hóa 0 vừa giảm xuống −1 trong HCl, vừa tăng lên +1 trong HClO.' },
    { id: 'chem10-s32d', qId: 'chem10-q32d', ans: 'A', exp: 'Mỗi phân tử H₂ và Cl₂ tạo hai phân tử HCl.' },
    { id: 'chem10-s32e', qId: 'chem10-q32e', ans: 'A', exp: 'Cl trong NaCl là −1; Cl trong NaClO là +1.' },
    { id: 'chem10-s33c', qId: 'chem10-q33c', ans: 'B', exp: 'Xuống nhóm, ion halide dễ nhường electron hơn nên tính khử tăng.' },
    { id: 'chem10-s33d', qId: 'chem10-q33d', ans: 'D', exp: 'F có độ âm điện rất lớn và kích thước nhỏ, giúp HF tạo liên kết hydrogen mạnh.' },
    { id: 'chem10-s33e', qId: 'chem10-q33e', ans: 'A', exp: 'Độ mạnh acid hydrohalic phụ thuộc đáng kể vào khả năng phá liên kết H–X; H–F đặc biệt bền.' },
    { id: 'chem10-s34c', qId: 'chem10-q34c', ans: 'A', exp: 'AgCl trắng, AgBr vàng nhạt/kem và AgI vàng.' },
    { id: 'chem10-s34d', qId: 'chem10-q34d', ans: 'C', exp: 'AgI là kết tủa màu vàng; AgCl trắng và AgBr vàng nhạt.' },
    { id: 'chem10-s34e', qId: 'chem10-q34e', ans: 'A', exp: 'Dùng HCl sẽ đưa ion chloride ngoại lai vào mẫu, tạo dương tính giả với Ag⁺.' }
  ].map(item => ({
    id: item.id,
    questionId: item.qId,
    recognition: 'Vận dụng xu hướng nhóm, oxi hóa–khử và hiện tượng thực nghiệm.',
    detailedSteps: [
      { order: 1, title: 'Lập luận trọng tâm', explanation: item.exp },
      { order: 2, title: 'Kết luận', explanation: `Chọn phương án ${item.ans}.` }
    ],
    finalAnswer: item.ans,
    commonMistakes: ['Học thuộc phương trình mà không xét xu hướng oxi hóa hoặc điều kiện phản ứng.'],
    reviewSuggestions: ['Nối cấu hình ns²np⁵ → khả năng nhận electron → phản ứng và hiện tượng.']
  }))
];
