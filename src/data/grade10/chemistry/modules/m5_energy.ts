import { QuestionType, Question, Solution } from '@/types';

export const m5QuestionTypes: QuestionType[] = [
  {
    id: 'chem10-qt22', topicId: 'chem10-t5', name: 'Hệ, Môi trường & Tỏa–Thu nhiệt', slug: 'he-moi-truong-toa-thu-nhiet', description: 'Nhận diện hướng truyền năng lượng trong phản ứng.', exampleQuestionId: 'chem10-q22a', difficulty: 'easy', examFrequency: 'high',
    theory: ['Hệ là phần đang nghiên cứu; phần còn lại là môi trường. Phản ứng tỏa nhiệt truyền năng lượng từ hệ ra môi trường; phản ứng thu nhiệt nhận năng lượng từ môi trường.'],
    recognitionSigns: ['Nhiệt độ môi trường tăng/giảm.', 'Yêu cầu phân loại tỏa hoặc thu nhiệt.'], solvingSteps: ['Chọn ranh giới hệ.', 'Xác định hướng truyền nhiệt.', 'Kết luận tỏa hay thu nhiệt.'], commonMistakes: ['Đồng nhất nhiệt độ của hệ với nhiệt độ môi trường.']
  },
  {
    id: 'chem10-qt23', topicId: 'chem10-t5', name: 'Biến thiên Enthalpy & Sơ đồ Năng lượng', slug: 'bien-thien-enthalpy-so-do', description: 'Đọc và biểu diễn dấu ΔH.', exampleQuestionId: 'chem10-q23a', difficulty: 'medium', examFrequency: 'high',
    theory: ['$\\Delta H=H_{sản phẩm}-H_{chất đầu}$. Tỏa nhiệt: ΔH < 0, sản phẩm thấp năng lượng hơn. Thu nhiệt: ΔH > 0. Đảo chiều phản ứng phải đổi dấu ΔH; nhân phương trình phải nhân ΔH.'],
    recognitionSigns: ['Cho sơ đồ mức năng lượng.', 'Đổi chiều hoặc nhân hệ số phương trình nhiệt hóa học.'], solvingSteps: ['So sánh mức năng lượng.', 'Tính sản phẩm trừ chất đầu.', 'Kiểm tra chiều và hệ số.'], commonMistakes: ['Đảo phản ứng nhưng giữ nguyên dấu.', 'Nhân hệ số mà không nhân ΔH.']
  },
  {
    id: 'chem10-qt24', topicId: 'chem10-t5', name: 'Enthalpy Tạo thành & ΔH Phản ứng', slug: 'enthalpy-tao-thanh', description: 'Tính ΔH từ dữ liệu tạo thành chuẩn.', exampleQuestionId: 'chem10-q24a', difficulty: 'medium', examFrequency: 'high',
    theory: ['$\\Delta H^\\circ_{phản ứng}=\\sum \\nu\\Delta_fH^\\circ(sản phẩm)-\\sum \\nu\\Delta_fH^\\circ(chất đầu)$. Enthalpy tạo thành chuẩn của đơn chất bền ở trạng thái chuẩn bằng 0.'],
    recognitionSigns: ['Cho bảng ΔfH°.', 'Yêu cầu tính nhiệt phản ứng.'], solvingSteps: ['Cân bằng phương trình.', 'Nhân mỗi giá trị với hệ số.', 'Lấy tổng sản phẩm trừ tổng chất đầu.'], commonMistakes: ['Bỏ hệ số.', 'Đảo thứ tự chất đầu và sản phẩm.']
  },
  {
    id: 'chem10-qt25', topicId: 'chem10-t5', name: 'Năng lượng Liên kết & ΔH', slug: 'nang-luong-lien-ket', description: 'Ước tính ΔH bằng liên kết bị phá và được tạo.', exampleQuestionId: 'chem10-q25a', difficulty: 'medium', examFrequency: 'high',
    theory: ['$\\Delta H\\approx\\sum E(liên kết bị phá)-\\sum E(liên kết được tạo)$. Phá liên kết cần năng lượng; tạo liên kết giải phóng năng lượng. Giá trị năng lượng liên kết thường là trung bình nên kết quả là gần đúng.'],
    recognitionSigns: ['Cho bảng năng lượng liên kết.', 'Phản ứng ở pha khí với cấu tạo liên kết rõ.'], solvingSteps: ['Đếm liên kết bị phá.', 'Đếm liên kết được tạo.', 'Tính phá trừ tạo và xét dấu.'], commonMistakes: ['Dùng tạo trừ phá.', 'Đếm sai số liên kết theo hệ số.']
  }
];

export const m5Questions: Question[] = [
  { id: 'chem10-q22a', subjectId: 'chemistry', topicId: 'chem10-t5', questionTypeId: 'chem10-qt22', content: 'Khi một phản ứng làm cốc chứa ấm lên, nhận định phù hợp nhất là:\nA. Hệ đã nhận nhiệt từ môi trường.\nB. Hệ truyền năng lượng ra môi trường; phản ứng tỏa nhiệt.\nC. Không có trao đổi năng lượng.\nD. Phản ứng chắc chắn thu nhiệt.', difficulty: 'easy', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B','b'], validatorType: 'choice' },
  { id: 'chem10-q22b', subjectId: 'chemistry', topicId: 'chem10-t5', questionTypeId: 'chem10-qt22', content: 'Quá trình phân hủy cần cung cấp nhiệt liên tục được phân loại là:\nA. Thu nhiệt vì hệ nhận năng lượng.\nB. Tỏa nhiệt vì môi trường nóng.\nC. Không đổi năng lượng.\nD. Luôn có ΔH = 0.', difficulty: 'easy', sourceType: 'manual', correctAnswer: 'A', acceptedAnswers: ['A','a'], validatorType: 'choice' },
  { id: 'chem10-q23a', subjectId: 'chemistry', topicId: 'chem10-t5', questionTypeId: 'chem10-qt23', content: 'Một phản ứng có $H_{sản phẩm}=120$ kJ và $H_{chất đầu}=200$ kJ. ΔH và loại phản ứng là:\nA. +80 kJ, thu nhiệt.\nB. −80 kJ, tỏa nhiệt.\nC. +320 kJ, thu nhiệt.\nD. −320 kJ, tỏa nhiệt.', difficulty: 'easy', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B','b'], validatorType: 'choice' },
  { id: 'chem10-q23b', subjectId: 'chemistry', topicId: 'chem10-t5', questionTypeId: 'chem10-qt23', content: 'Nếu $A\\rightarrow B$ có ΔH = −50 kJ thì $2B\\rightarrow2A$ có ΔH bằng:\nA. −50 kJ\nB. +50 kJ\nC. +100 kJ\nD. −100 kJ', difficulty: 'medium', sourceType: 'manual', correctAnswer: 'C', acceptedAnswers: ['C','c'], validatorType: 'choice' },
  { id: 'chem10-q24a', subjectId: 'chemistry', topicId: 'chem10-t5', questionTypeId: 'chem10-qt24', content: 'Cho phản ứng $C+O_2\\rightarrow CO_2$, biết $\\Delta_fH^\\circ(CO_2)=-394$ kJ/mol, còn C và $O_2$ ở trạng thái chuẩn có ΔfH° = 0. ΔH phản ứng là:\nA. −394 kJ\nB. +394 kJ\nC. 0\nD. −788 kJ', difficulty: 'medium', sourceType: 'manual', correctAnswer: 'A', acceptedAnswers: ['A','a'], validatorType: 'choice' },
  { id: 'chem10-q24b', subjectId: 'chemistry', topicId: 'chem10-t5', questionTypeId: 'chem10-qt24', content: 'Trong công thức tính ΔH từ enthalpy tạo thành, thao tác đúng là:\nA. Tổng chất đầu trừ tổng sản phẩm.\nB. Tổng sản phẩm trừ tổng chất đầu, có nhân hệ số.\nC. Cộng tất cả giá trị không xét hệ số.\nD. Chỉ dùng chất có ΔfH° âm.', difficulty: 'easy', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B','b'], validatorType: 'choice' },
  { id: 'chem10-q25a', subjectId: 'chemistry', topicId: 'chem10-t5', questionTypeId: 'chem10-qt25', content: 'Phát biểu nào đúng về năng lượng liên kết?\nA. Phá liên kết giải phóng năng lượng.\nB. Tạo liên kết luôn cần hấp thụ năng lượng.\nC. Phá liên kết cần năng lượng; tạo liên kết giải phóng năng lượng.\nD. Cả hai quá trình luôn có ΔH = 0.', difficulty: 'easy', sourceType: 'manual', correctAnswer: 'C', acceptedAnswers: ['C','c'], validatorType: 'choice' },
  { id: 'chem10-q25b', subjectId: 'chemistry', topicId: 'chem10-t5', questionTypeId: 'chem10-qt25', content: 'Một phản ứng cần 500 kJ để phá các liên kết và giải phóng 650 kJ khi tạo liên kết mới. ΔH gần đúng là:\nA. +1150 kJ\nB. −1150 kJ\nC. +150 kJ\nD. −150 kJ', difficulty: 'medium', sourceType: 'manual', correctAnswer: 'D', acceptedAnswers: ['D','d'], validatorType: 'choice' },
  // Dữ liệu từ redoxEnergyPractice (t5)
  { id: 'chem10-q22c', subjectId: 'chemistry', topicId: 'chem10-t5', questionTypeId: 'chem10-qt22', content: 'Khi hòa tan $NH_4NO_3$ vào nước, cốc trở nên lạnh. Nếu hệ là quá trình hòa tan, kết luận đúng là:\nA. Hệ tỏa nhiệt, $ΔH<0$.\nB. Hệ thu nhiệt từ môi trường, $ΔH>0$.\nC. Môi trường thu nhiệt từ hệ.\nD. Không có trao đổi năng lượng.', correctAnswer: 'B', difficulty: 'medium', sourceType: 'manual', acceptedAnswers: ['B', 'b'], validatorType: 'choice' },
  { id: 'chem10-q22d', subjectId: 'chemistry', topicId: 'chem10-t5', questionTypeId: 'chem10-qt22', content: 'Phản ứng cháy làm nhiệt độ môi trường tăng. Hướng truyền năng lượng là:\nA. Từ môi trường vào hệ.\nB. Từ hệ ra môi trường.\nC. Không truyền năng lượng.\nD. Chỉ truyền vật chất.', correctAnswer: 'B', difficulty: 'medium', sourceType: 'manual', acceptedAnswers: ['B', 'b'], validatorType: 'choice' },
  { id: 'chem10-q22e', subjectId: 'chemistry', topicId: 'chem10-t5', questionTypeId: 'chem10-qt22', content: 'Trong một thí nghiệm, dung dịch phản ứng là hệ, cốc và không khí xung quanh là môi trường. Nhiệt độ dung dịch tăng. Suy luận phù hợp nhất là:\nA. Quá trình trong hệ có xu hướng tỏa nhiệt.\nB. Hệ chắc chắn thu nhiệt.\nC. ΔH chắc chắn bằng 0.\nD. Không thể có phản ứng.', correctAnswer: 'A', difficulty: 'medium', sourceType: 'manual', acceptedAnswers: ['A', 'a'], validatorType: 'choice' },
  { id: 'chem10-q23c', subjectId: 'chemistry', topicId: 'chem10-t5', questionTypeId: 'chem10-qt23', content: 'Phản ứng có $ΔH=-92$ kJ. Khi viết phản ứng theo chiều ngược lại, $ΔH$ là:\nA. −92 kJ\nB. +92 kJ\nC. 0 kJ\nD. −184 kJ', correctAnswer: 'B', difficulty: 'medium', sourceType: 'manual', acceptedAnswers: ['B', 'b'], validatorType: 'choice' },
  { id: 'chem10-q23d', subjectId: 'chemistry', topicId: 'chem10-t5', questionTypeId: 'chem10-qt23', content: 'Nếu nhân toàn bộ phương trình nhiệt hóa học với 2 thì:\nA. ΔH không đổi.\nB. ΔH chia 2.\nC. ΔH nhân 2.\nD. Chỉ đổi dấu ΔH.', correctAnswer: 'C', difficulty: 'medium', sourceType: 'manual', acceptedAnswers: ['C', 'c'], validatorType: 'choice' },
  { id: 'chem10-q23e', subjectId: 'chemistry', topicId: 'chem10-t5', questionTypeId: 'chem10-qt23', content: 'Trên sơ đồ năng lượng, sản phẩm nằm cao hơn chất đầu 125 kJ. Kết luận là:\nA. Phản ứng tỏa nhiệt, $ΔH=-125$ kJ.\nB. Phản ứng thu nhiệt, $ΔH=+125$ kJ.\nC. $ΔH=0$.\nD. Không thể xác định dấu.', correctAnswer: 'B', difficulty: 'medium', sourceType: 'manual', acceptedAnswers: ['B', 'b'], validatorType: 'choice' },
  { id: 'chem10-q24c', subjectId: 'chemistry', topicId: 'chem10-t5', questionTypeId: 'chem10-qt24', content: 'Cho $Δ_fH^°(CO_2)=-393,5$ kJ/mol, $Δ_fH^°(H_2O(l))=-285,8$ kJ/mol, $Δ_fH^°(CH_4)=-74,8$ kJ/mol và $Δ_fH^°(O_2)=0$. $ΔH$ của $CH_4+2O_2\\rightarrow CO_2+2H_2O(l)$ gần nhất là:\nA. −890,3 kJ\nB. −604,5 kJ\nC. +890,3 kJ\nD. −74,8 kJ', correctAnswer: 'A', difficulty: 'hard', sourceType: 'manual', acceptedAnswers: ['A', 'a'], validatorType: 'choice' },
  { id: 'chem10-q24d', subjectId: 'chemistry', topicId: 'chem10-t5', questionTypeId: 'chem10-qt24', content: 'Trong phép tính từ enthalpy tạo thành, biểu thức tổng quát đúng là:\nA. Tổng chất đầu − tổng sản phẩm.\nB. Tổng hệ số × $Δ_fH°$ của sản phẩm − tổng tương ứng của chất đầu.\nC. Chỉ cộng các giá trị âm.\nD. Không dùng hệ số phương trình.', correctAnswer: 'B', difficulty: 'medium', sourceType: 'manual', acceptedAnswers: ['B', 'b'], validatorType: 'choice' },
  { id: 'chem10-q24e', subjectId: 'chemistry', topicId: 'chem10-t5', questionTypeId: 'chem10-qt24', content: 'Vì sao $Δ_fH^°$ của $O_2(g)$ ở trạng thái chuẩn bằng 0?\nA. O₂ không có liên kết.\nB. Theo quy ước, enthalpy tạo thành chuẩn của đơn chất bền ở trạng thái chuẩn bằng 0.\nC. O₂ không phản ứng.\nD. O₂ không có năng lượng.', correctAnswer: 'B', difficulty: 'medium', sourceType: 'manual', acceptedAnswers: ['B', 'b'], validatorType: 'choice' },
  { id: 'chem10-q25c', subjectId: 'chemistry', topicId: 'chem10-t5', questionTypeId: 'chem10-qt25', content: 'Ước tính $ΔH$ của $H_2+Cl_2\\rightarrow2HCl$ với $E(H-H)=436$, $E(Cl-Cl)=243$, $E(H-Cl)=431$ kJ/mol.\nA. −183 kJ\nB. +183 kJ\nC. −614 kJ\nD. +862 kJ', correctAnswer: 'A', difficulty: 'hard', sourceType: 'manual', acceptedAnswers: ['A', 'a'], validatorType: 'choice' },
  { id: 'chem10-q25d', subjectId: 'chemistry', topicId: 'chem10-t5', questionTypeId: 'chem10-qt25', content: 'Mệnh đề đúng về năng lượng liên kết là:\nA. Phá liên kết giải phóng năng lượng.\nB. Tạo liên kết luôn cần hấp thụ năng lượng.\nC. Phá liên kết cần năng lượng, tạo liên kết giải phóng năng lượng.\nD. Cả hai quá trình đều không đổi năng lượng.', correctAnswer: 'C', difficulty: 'medium', sourceType: 'manual', acceptedAnswers: ['C', 'c'], validatorType: 'choice' },
  { id: 'chem10-q25e', subjectId: 'chemistry', topicId: 'chem10-t5', questionTypeId: 'chem10-qt25', content: 'Công thức ước tính enthalpy phản ứng từ năng lượng liên kết là:\nA. $ΣE_{tạo}-ΣE_{phá}$\nB. $ΣE_{phá}-ΣE_{tạo}$\nC. $ΣE_{phá}+ΣE_{tạo}$\nD. Chỉ dùng năng lượng liên kết sản phẩm.', correctAnswer: 'B', difficulty: 'medium', sourceType: 'manual', acceptedAnswers: ['B', 'b'], validatorType: 'choice' }
];

export const m5Solutions: Solution[] = [
  {
    id: 'chem10-s22a', questionId: 'chem10-q22a',
    recognition: 'Xác định hướng truyền năng lượng và áp dụng đúng quy ước dấu.',
    detailedSteps: [{ order: 1, title: 'Thiết lập quan hệ năng lượng', explanation: 'Cốc là môi trường quanh hệ phản ứng. Cốc ấm lên chứng tỏ hệ truyền năng lượng ra ngoài, nên phản ứng tỏa nhiệt.' }, { order: 2, title: 'Kết luận', explanation: 'Chọn phương án B.' }],
    finalAnswer: 'B',
    commonMistakes: ['Đảo dấu ΔH, bỏ hệ số hoặc nhầm phá liên kết với tạo liên kết.'],
    reviewSuggestions: ['Vẽ mức năng lượng chất đầu và sản phẩm trước khi thay công thức.']
  },
  {
    id: 'chem10-s22b', questionId: 'chem10-q22b',
    recognition: 'Xác định hướng truyền năng lượng và áp dụng đúng quy ước dấu.',
    detailedSteps: [{ order: 1, title: 'Thiết lập quan hệ năng lượng', explanation: 'Hệ phải nhận năng lượng từ môi trường để tiếp tục phân hủy, nên đây là quá trình thu nhiệt.' }, { order: 2, title: 'Kết luận', explanation: 'Chọn phương án A.' }],
    finalAnswer: 'A',
    commonMistakes: ['Đảo dấu ΔH, bỏ hệ số hoặc nhầm phá liên kết với tạo liên kết.'],
    reviewSuggestions: ['Vẽ mức năng lượng chất đầu và sản phẩm trước khi thay công thức.']
  },
  {
    id: 'chem10-s23a', questionId: 'chem10-q23a',
    recognition: 'Xác định hướng truyền năng lượng và áp dụng đúng quy ước dấu.',
    detailedSteps: [{ order: 1, title: 'Thiết lập quan hệ năng lượng', explanation: '$\\Delta H=120-200=-80$ kJ; dấu âm cho biết hệ giảm enthalpy và tỏa nhiệt.' }, { order: 2, title: 'Kết luận', explanation: 'Chọn phương án B.' }],
    finalAnswer: 'B',
    commonMistakes: ['Đảo dấu ΔH, bỏ hệ số hoặc nhầm phá liên kết với tạo liên kết.'],
    reviewSuggestions: ['Vẽ mức năng lượng chất đầu và sản phẩm trước khi thay công thức.']
  },
  {
    id: 'chem10-s23b', questionId: 'chem10-q23b',
    recognition: 'Xác định hướng truyền năng lượng và áp dụng đúng quy ước dấu.',
    detailedSteps: [{ order: 1, title: 'Thiết lập quan hệ năng lượng', explanation: 'Đảo chiều đổi dấu thành +50 kJ; nhân phương trình hai lần làm ΔH thành +100 kJ.' }, { order: 2, title: 'Kết luận', explanation: 'Chọn phương án C.' }],
    finalAnswer: 'C',
    commonMistakes: ['Đảo dấu ΔH, bỏ hệ số hoặc nhầm phá liên kết với tạo liên kết.'],
    reviewSuggestions: ['Vẽ mức năng lượng chất đầu và sản phẩm trước khi thay công thức.']
  },
  {
    id: 'chem10-s24a', questionId: 'chem10-q24a',
    recognition: 'Xác định hướng truyền năng lượng và áp dụng đúng quy ước dấu.',
    detailedSteps: [{ order: 1, title: 'Thiết lập quan hệ năng lượng', explanation: '$\\Delta H=(-394)-[0+0]=-394$ kJ.' }, { order: 2, title: 'Kết luận', explanation: 'Chọn phương án A.' }],
    finalAnswer: 'A',
    commonMistakes: ['Đảo dấu ΔH, bỏ hệ số hoặc nhầm phá liên kết với tạo liên kết.'],
    reviewSuggestions: ['Vẽ mức năng lượng chất đầu và sản phẩm trước khi thay công thức.']
  },
  {
    id: 'chem10-s24b', questionId: 'chem10-q24b',
    recognition: 'Xác định hướng truyền năng lượng và áp dụng đúng quy ước dấu.',
    detailedSteps: [{ order: 1, title: 'Thiết lập quan hệ năng lượng', explanation: 'Phải lấy tổng hệ số nhân ΔfH° của sản phẩm trừ tổng tương ứng của chất đầu.' }, { order: 2, title: 'Kết luận', explanation: 'Chọn phương án B.' }],
    finalAnswer: 'B',
    commonMistakes: ['Đảo dấu ΔH, bỏ hệ số hoặc nhầm phá liên kết với tạo liên kết.'],
    reviewSuggestions: ['Vẽ mức năng lượng chất đầu và sản phẩm trước khi thay công thức.']
  },
  {
    id: 'chem10-s25a', questionId: 'chem10-q25a',
    recognition: 'Xác định hướng truyền năng lượng và áp dụng đúng quy ước dấu.',
    detailedSteps: [{ order: 1, title: 'Thiết lập quan hệ năng lượng', explanation: 'Phá liên kết phải thắng lực hút nên cần năng lượng; tạo liên kết chuyển hệ về trạng thái bền hơn và giải phóng năng lượng.' }, { order: 2, title: 'Kết luận', explanation: 'Chọn phương án C.' }],
    finalAnswer: 'C',
    commonMistakes: ['Đảo dấu ΔH, bỏ hệ số hoặc nhầm phá liên kết với tạo liên kết.'],
    reviewSuggestions: ['Vẽ mức năng lượng chất đầu và sản phẩm trước khi thay công thức.']
  },
  {
    id: 'chem10-s25b', questionId: 'chem10-q25b',
    recognition: 'Xác định hướng truyền năng lượng và áp dụng đúng quy ước dấu.',
    detailedSteps: [{ order: 1, title: 'Thiết lập quan hệ năng lượng', explanation: '$\\Delta H\\approx500-650=-150$ kJ, nên phản ứng tỏa nhiệt.' }, { order: 2, title: 'Kết luận', explanation: 'Chọn phương án D.' }],
    finalAnswer: 'D',
    commonMistakes: ['Đảo dấu ΔH, bỏ hệ số hoặc nhầm phá liên kết với tạo liên kết.'],
    reviewSuggestions: ['Vẽ mức năng lượng chất đầu và sản phẩm trước khi thay công thức.']
  },
  // Các câu giải từ redoxEnergyPractice (t5)
  ...[
    { id: 'chem10-s22c', qId: 'chem10-q22c', ans: 'B', exp: 'Cốc lạnh cho thấy năng lượng truyền từ môi trường vào hệ; hệ thu nhiệt nên ΔH dương.' },
    { id: 'chem10-s22d', qId: 'chem10-q22d', ans: 'B', exp: 'Phản ứng cháy tỏa nhiệt; hệ mất năng lượng dưới dạng nhiệt cho môi trường.' },
    { id: 'chem10-s22e', qId: 'chem10-q22e', ans: 'A', exp: 'Nhiệt độ tăng là bằng chứng hệ giải phóng năng lượng, dù phép đo chính xác còn cần kiểm soát thất thoát nhiệt.' },
    { id: 'chem10-s23c', qId: 'chem10-q23c', ans: 'B', exp: 'Đảo chiều phản ứng phải đổi dấu biến thiên enthalpy.' },
    { id: 'chem10-s23d', qId: 'chem10-q23d', ans: 'C', exp: 'Enthalpy là đại lượng phụ thuộc lượng chất; nhân hệ số phản ứng bao nhiêu lần thì ΔH nhân bấy nhiêu lần.' },
    { id: 'chem10-s23e', qId: 'chem10-q23e', ans: 'B', exp: 'Sản phẩm có enthalpy cao hơn chất đầu nên hệ đã hấp thụ 125 kJ.' },
    { id: 'chem10-s24c', qId: 'chem10-q24c', ans: 'A', exp: '$ΔH=[-393,5+2(-285,8)]-[-74,8+0]=-890,3$ kJ.' },
    { id: 'chem10-s24d', qId: 'chem10-q24d', ans: 'B', exp: 'Cần nhân mỗi enthalpy tạo thành với hệ số tỉ lượng rồi lấy tổng sản phẩm trừ tổng chất đầu.' },
    { id: 'chem10-s24e', qId: 'chem10-q24e', ans: 'B', exp: 'Đây là mốc quy ước, không có nghĩa đơn chất không chứa năng lượng.' },
    { id: 'chem10-s25c', qId: 'chem10-q25c', ans: 'A', exp: 'Phá: 436+243=679; tạo: 2×431=862; $ΔH=679-862=-183$ kJ.' },
    { id: 'chem10-s25d', qId: 'chem10-q25d', ans: 'C', exp: 'Tách các nguyên tử đang hút nhau cần cung cấp năng lượng; khi hình thành liên kết, hệ hạ năng lượng và giải phóng năng lượng.' },
    { id: 'chem10-s25e', qId: 'chem10-q25e', ans: 'B', exp: 'Năng lượng hấp thụ để phá liên kết trừ năng lượng giải phóng khi tạo liên kết cho ΔH ước tính.' }
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
