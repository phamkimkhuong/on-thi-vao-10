import { QuestionType, Question, Solution } from '@/types';

export const m3QuestionTypes: QuestionType[] = [
  {
    id: 'chem10-qt13', topicId: 'chem10-t3', name: 'Quy tắc Octet & Quá trình tạo Ion', slug: 'octet-tao-ion', description: 'Áp dụng quy tắc octet để giải thích xu hướng nhường/nhận electron.', exampleQuestionId: 'chem10-q13a', difficulty: 'easy', examFrequency: 'high',
    theory: ['Nguyên tử các nguyên tố có xu hướng nhường, nhận hoặc góp chung electron để đạt cấu hình lớp ngoài cùng vững bền như khí hiếm (8 electron, hoặc 2 electron với He). Kim loại dễ nhường e tạo cation; phi kim dễ nhận e tạo anion.'],
    recognitionSigns: ['Viết quá trình tạo ion.', 'Dự đoán ion đơn nguyên tử thường gặp.'], solvingSteps: ['Xác định số electron lớp ngoài cùng.', 'Nếu $\\le 3$: nhường hết để tạo cation mang điện dương.', 'Nếu $\\ge 5$: nhận thêm cho đủ 8 để tạo anion mang điện âm.'], commonMistakes: ['Nhầm dấu của điện tích ion (nhường electron mang điện dương, nhận electron mang điện âm).']
  },
  {
    id: 'chem10-qt14', topicId: 'chem10-t3', name: 'Liên kết Ion & Tinh thể', slug: 'lien-ket-ion-tinh-the', description: 'Nhận diện liên kết ion và giải thích tính chất vật lí của tinh thể ion.', exampleQuestionId: 'chem10-q14a', difficulty: 'medium', examFrequency: 'high',
    theory: ['Liên kết ion được hình thành do lực hút tĩnh điện giữa các ion mang điện tích trái dấu. Tinh thể ion bền vững, có nhiệt độ nóng chảy cao và dẫn điện được ở trạng thái nóng chảy hoặc dung dịch.'],
    recognitionSigns: ['Liên kết giữa kim loại điển hình và phi kim điển hình.', 'Giải thích độ dẫn điện hoặc nhiệt độ nóng chảy của muối.'], solvingSteps: ['Nhận diện hiệu độ âm điện lớn hoặc cặp kim loại–phi kim điển hình.', 'Thiết lập công thức tối giản để trung hòa điện.', 'Liên hệ trạng thái tự do của ion với khả năng dẫn điện.'], commonMistakes: ['Cho rằng tinh thể rắn dẫn điện tốt.']
  },
  {
    id: 'chem10-qt15', topicId: 'chem10-t3', name: 'Liên kết Cộng hóa trị & Công thức Lewis', slug: 'lien-ket-cong-hoa-tri-lewis', description: 'Viết công thức electron, công thức cấu tạo và công thức Lewis.', exampleQuestionId: 'chem10-q15a', difficulty: 'medium', examFrequency: 'high',
    theory: ['Liên kết cộng hóa trị được tạo nên bởi một hoặc nhiều cặp electron dùng chung giữa hai nguyên tử. Công thức electron biểu diễn mọi electron hóa trị; công thức Lewis biểu diễn cặp liên kết bằng gạch và cặp chưa liên kết.'],
    recognitionSigns: ['Yêu cầu đếm cặp electron dùng chung.', 'Yêu cầu nhận diện công thức Lewis.'], solvingSteps: ['Tính tổng electron hóa trị.', 'Đặt liên kết đơn giữa các nguyên tử.', 'Điền các electron còn lại để đạt octet cho các nguyên tử xung quanh rồi đến nguyên tử trung tâm.'], commonMistakes: ['Bỏ quên các cặp electron hóa trị chưa liên kết khi viết công thức Lewis.']
  },
  {
    id: 'chem10-qt16', topicId: 'chem10-t3', name: 'Độ phân cực liên kết & Phân tử', slug: 'phan-cuc-lien-ket-phan-tu', description: 'So sánh độ phân cực liên kết bằng hiệu độ âm điện và dự đoán độ phân cực phân tử.', exampleQuestionId: 'chem10-q16a', difficulty: 'medium', examFrequency: 'high',
    theory: ['Liên kết không phân cực (hiệu độ âm điện < 0,4), cộng hóa trị phân cực (0,4 đến 1,7), ion (> 1,7). Một phân tử chứa liên kết phân cực nhưng có thể không phân cực nếu cấu trúc đối xứng làm các moment liên kết triệt tiêu nhau.'],
    recognitionSigns: ['Cho hiệu độ âm điện.', 'Hỏi về độ phân cực phân tử CO2, H2O, CH4.'], solvingSteps: ['Tính hiệu độ âm điện.', 'Xác định chiều lệch của cặp electron liên kết.', 'Xét hình học phân tử để xem tổng moment có bằng 0 không.'], commonMistakes: ['Kết luận phân tử phân cực chỉ vì nó có liên kết phân cực.']
  },
  {
    id: 'chem10-qt17', topicId: 'chem10-t3', name: 'Tương tác Van der Waals & Liên kết Hydrogen', slug: 'van-der-waals-hydrogen', description: 'Giải thích ảnh hưởng của lực liên phân tử đến nhiệt độ sôi và tính tan.', exampleQuestionId: 'chem10-q17a', difficulty: 'medium', examFrequency: 'high',
    theory: ['Liên kết hydrogen hình thành khi H liên kết với nguyên tố độ âm điện lớn (F, O, N) và bị hút bởi cặp electron tự do của nguyên tố độ âm điện lớn khác. Lực Van der Waals là lực hút yếu giữa các lưỡng cực cảm ứng. Các tương tác này yếu hơn nhiều liên kết hóa học nhưng quyết định tính chất vật lí.'],
    recognitionSigns: ['Nhiệt độ sôi cao bất thường của nước, ethanol.', 'So sánh nhiệt độ sôi của khí hiếm hoặc phân tử không phân cực.'], solvingSteps: ['Xác định phân tử có tạo liên kết hydrogen liên phân tử không.', 'Nếu không, so sánh khối lượng phân tử và kích thước đám mây electron cho lực Van der Waals.', 'Kết luận về xu hướng nhiệt độ sôi.'], commonMistakes: ['Nhầm liên kết cộng hóa trị O–H trong phân tử là liên kết hydrogen.']
  }
];

export const m3Questions: Question[] = [
  { id: 'chem10-q13a', subjectId: 'chemistry', topicId: 'chem10-t3', questionTypeId: 'chem10-qt13', content: 'Nguyên tử Na có cấu hình lớp ngoài cùng $3s^1$. Quá trình tạo ion phù hợp là:\nA. $Na+e\\rightarrow Na^-$\nB. $Na\\rightarrow Na^++e$\nC. $Na\\rightarrow Na^{2+}+2e$\nD. $Na+2e\\rightarrow Na^{2-}$', difficulty: 'easy', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B','b'], validatorType: 'choice' },
  { id: 'chem10-q13b', subjectId: 'chemistry', topicId: 'chem10-t3', questionTypeId: 'chem10-qt13', content: 'Nguyên tử oxygen có 6 electron lớp ngoài cùng. Ion đơn nguyên tử thường gặp phù hợp nhất là:\nA. $O^+$\nB. $O^{2+}$\nC. $O^-$\nD. $O^{2-}$', difficulty: 'easy', sourceType: 'manual', correctAnswer: 'D', acceptedAnswers: ['D','d'], validatorType: 'choice' },
  { id: 'chem10-q14a', subjectId: 'chemistry', topicId: 'chem10-t3', questionTypeId: 'chem10-qt14', content: 'Vì sao NaCl rắn không dẫn điện nhưng NaCl nóng chảy dẫn điện?\nA. Khi nóng chảy xuất hiện electron tự do.\nB. Trong chất rắn ion bị giữ tại nút mạng; khi nóng chảy ion chuyển động được.\nC. NaCl rắn không chứa ion.\nD. Nhiệt biến ion thành nguyên tử.', difficulty: 'medium', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B','b'], validatorType: 'choice' },
  { id: 'chem10-q14b', subjectId: 'chemistry', topicId: 'chem10-t3', questionTypeId: 'chem10-qt14', content: 'Hợp chất tạo bởi $Mg^{2+}$ và $Cl^-$ có công thức tỉ lệ tối giản nào?\nA. MgCl\nB. MgCl$_2$\nC. Mg$_2$Cl\nD. Mg$_2$Cl$_2$', difficulty: 'easy', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B','b'], validatorType: 'choice' },
  { id: 'chem10-q15a', subjectId: 'chemistry', topicId: 'chem10-t3', questionTypeId: 'chem10-qt15', content: 'Trong phân tử $N_2$, hai nguyên tử nitrogen dùng chung bao nhiêu cặp electron?\nA. 1\nB. 2\nC. 3\nD. 4', difficulty: 'easy', sourceType: 'manual', correctAnswer: 'C', acceptedAnswers: ['C','c'], validatorType: 'choice' },
  { id: 'chem10-q15b', subjectId: 'chemistry', topicId: 'chem10-t3', questionTypeId: 'chem10-qt15', content: 'Phát biểu nào đúng về công thức Lewis của $H_2O$?\nA. Oxygen tạo hai liên kết O–H và còn hai cặp electron tự do.\nB. Oxygen tạo một liên kết và không có electron tự do.\nC. Hydrogen tạo liên kết đôi với oxygen.\nD. Phân tử được tạo bởi ion $H^+$ và $O^{2-}$.', difficulty: 'medium', sourceType: 'manual', correctAnswer: 'A', acceptedAnswers: ['A','a'], validatorType: 'choice' },
  { id: 'chem10-q16a', subjectId: 'chemistry', topicId: 'chem10-t3', questionTypeId: 'chem10-qt16', content: 'Phát biểu nào đúng?\nA. Mọi phân tử có liên kết phân cực đều phân cực.\nB. Liên kết có thể phân cực nhưng các moment liên kết trong phân tử đối xứng có thể triệt tiêu.\nC. Độ phân cực không liên quan độ âm điện.\nD. Liên kết giữa hai nguyên tử khác nhau luôn là ion.', difficulty: 'medium', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B','b'], validatorType: 'choice' },
  { id: 'chem10-q16b', subjectId: 'chemistry', topicId: 'chem10-t3', questionTypeId: 'chem10-qt16', content: 'Trong liên kết H–Cl, cặp electron liên kết lệch về Cl chủ yếu vì:\nA. H có nhiều neutron hơn.\nB. Cl có độ âm điện lớn hơn H.\nC. H có bán kính lớn hơn Cl.\nD. Cl luôn tạo ion trong mọi hợp chất.', difficulty: 'easy', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B','b'], validatorType: 'choice' },
  { id: 'chem10-q17a', subjectId: 'chemistry', topicId: 'chem10-t3', questionTypeId: 'chem10-qt17', content: 'Phân biệt nào đúng trong nước lỏng?\nA. O–H trong một phân tử là liên kết hydrogen.\nB. O–H trong phân tử là cộng hóa trị; liên kết hydrogen chủ yếu hút giữa các phân tử nước.\nC. Cả hai đều là liên kết ion.\nD. Không có lực hút giữa các phân tử nước.', difficulty: 'medium', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B','b'], validatorType: 'choice' },
  { id: 'chem10-q17b', subjectId: 'chemistry', topicId: 'chem10-t3', questionTypeId: 'chem10-qt17', content: 'Nước có nhiệt độ sôi cao bất thường so với nhiều phân tử nhỏ tương tự chủ yếu vì:\nA. Liên kết cộng hóa trị O–H bị phá hoàn toàn khi sôi.\nB. Giữa các phân tử nước có mạng liên kết hydrogen tương đối mạnh.\nC. Nước là hợp chất ion.\nD. Oxygen không có electron tự do.', difficulty: 'medium', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B','b'], validatorType: 'choice' },
  // Dữ liệu từ periodicBondPractice (t3)
  { id: 'chem10-q13c', subjectId: 'chemistry', topicId: 'chem10-t3', questionTypeId: 'chem10-qt13', content: 'Cấu hình $Ca$ là $[Ar]4s^2$. Để đạt octet bền vững, nguyên tử Ca có xu hướng nhường 2 electron lớp ngoài cùng tạo ra ion nào?\nA. $Ca^{2+}$\nB. $Ca^{2-}$\nC. $Ca^+$\nD. $Ca^-$', correctAnswer: 'A', difficulty: 'easy', sourceType: 'manual', acceptedAnswers: ['A', 'a'], validatorType: 'choice' },
  { id: 'chem10-q13d', subjectId: 'chemistry', topicId: 'chem10-t3', questionTypeId: 'chem10-qt13', content: 'Nguyên tử Nitrogen có 5 electron hóa trị. Công thức ion nitride phổ biến là:\nA. $N^{5+}$\nB. $N^{3-}$\nC. $N^{2-}$\nD. $N^{5-}$', correctAnswer: 'B', difficulty: 'easy', sourceType: 'manual', acceptedAnswers: ['B', 'b'], validatorType: 'choice' },
  { id: 'chem10-q13e', subjectId: 'chemistry', topicId: 'chem10-t3', questionTypeId: 'chem10-qt13', content: 'Điểm chung về cấu hình electron của $Na^+, Mg^{2+}, F^-$ và $Ne$ là gì?\nA. Đều có 10 electron và cấu hình giống khí hiếm Neon ($1s^22s^22p^6$).\nB. Đều có 12 electron.\nC. Đều mang điện tích dương.\nD. Đều có 8 proton.', correctAnswer: 'A', difficulty: 'medium', sourceType: 'manual', acceptedAnswers: ['A', 'a'], validatorType: 'choice' },
  { id: 'chem10-q14c', subjectId: 'chemistry', topicId: 'chem10-t3', questionTypeId: 'chem10-qt14', content: 'Trong tinh thể $NaCl$, lực liên kết giữ các ion là:\nA. Lực hút tĩnh điện giữa $Na^+$ và $Cl^-$.\nB. Cặp electron dùng chung.\nC. Lực hút kim loại.\nD. Liên kết hydrogen.', correctAnswer: 'A', difficulty: 'easy', sourceType: 'manual', acceptedAnswers: ['A', 'a'], validatorType: 'choice' },
  { id: 'chem10-q14d', subjectId: 'chemistry', topicId: 'chem10-t3', questionTypeId: 'chem10-qt14', content: 'Tính chất vật lí nào sau đây không phải đặc trưng của hợp chất ion điển hình?\nA. Nhiệt độ nóng chảy và nhiệt độ sôi rất cao.\nB. Cứng nhưng giòn.\nC. Dẫn điện tốt ở trạng thái tinh thể rắn.\nD. Dẫn điện khi hòa tan vào nước.', correctAnswer: 'C', difficulty: 'medium', sourceType: 'manual', acceptedAnswers: ['C', 'c'], validatorType: 'choice' },
  { id: 'chem10-q14e', subjectId: 'chemistry', topicId: 'chem10-t3', questionTypeId: 'chem10-qt14', content: 'Hợp chất ion tạo bởi nguyên tố X nhóm IIA và Y nhóm VIIA có công thức chung là:\nA. XY\nB. $XY_2$\nC. $X_2Y$\nD. $X_2Y_7$', correctAnswer: 'B', difficulty: 'medium', sourceType: 'manual', acceptedAnswers: ['B', 'b'], validatorType: 'choice' },
  { id: 'chem10-q15c', subjectId: 'chemistry', topicId: 'chem10-t3', questionTypeId: 'chem10-qt15', content: 'Phân tử $CO_2$ có công thức cấu tạo nào?\nA. O = C = O\nB. O - C - O\nC. O = O = C\nD. O $\\equiv$ C $\\equiv$ O', correctAnswer: 'A', difficulty: 'easy', sourceType: 'manual', acceptedAnswers: ['A', 'a'], validatorType: 'choice' },
  { id: 'chem10-q15d', subjectId: 'chemistry', topicId: 'chem10-t3', questionTypeId: 'chem10-qt15', content: 'Trong công thức Lewis của $NH_3$, nguyên tử nitrogen có bao nhiêu cặp electron chưa liên kết?\nA. 0\nB. 1\nC. 2\nD. 3', correctAnswer: 'B', difficulty: 'medium', sourceType: 'manual', acceptedAnswers: ['B', 'b'], validatorType: 'choice' },
  { id: 'chem10-q15e', subjectId: 'chemistry', topicId: 'chem10-t3', questionTypeId: 'chem10-qt15', content: 'Tổng số electron dùng chung trong phân tử $CH_4$ là:\nA. 2\nB. 4\nC. 8\nD. 12', correctAnswer: 'C', difficulty: 'medium', sourceType: 'manual', acceptedAnswers: ['C', 'c'], validatorType: 'choice' },
  { id: 'chem10-q16c', subjectId: 'chemistry', topicId: 'chem10-t3', questionTypeId: 'chem10-qt16', content: 'Dựa vào hiệu độ âm điện, liên kết trong phân tử nào phân cực nhất?\nA. $H_2$ ($\\Delta\\chi=0$)\nB. $HCl$ ($\\Delta\\chi=0,96$)\nC. $HF$ ($\\Delta\\chi=1,78$)\nD. $CH_4$ ($\\Delta\\chi=0,35$)', correctAnswer: 'C', difficulty: 'medium', sourceType: 'manual', acceptedAnswers: ['C', 'c'], validatorType: 'choice' },
  { id: 'chem10-q16d', subjectId: 'chemistry', topicId: 'chem10-t3', questionTypeId: 'chem10-qt16', content: 'Vì sao phân tử $CO_2$ chứa liên kết cộng hóa trị phân cực nhưng phân tử lại không phân cực?\nA. Vì cấu tạo phân tử thẳng, hai moment liên kết đối nhau triệt tiêu.\nB. Vì oxygen không có độ âm điện.\nC. Vì nó là chất khí.\nD. Vì electron lệch hoàn toàn về carbon.', correctAnswer: 'A', difficulty: 'hard', sourceType: 'manual', acceptedAnswers: ['A', 'a'], validatorType: 'choice' },
  { id: 'chem10-q16e', subjectId: 'chemistry', topicId: 'chem10-t3', questionTypeId: 'chem10-qt16', content: 'Liên kết cộng hóa trị phân cực thường hình thành giữa:\nA. Hai phi kim có độ âm điện khác nhau rõ rệt (hiệu từ 0,4 đến 1,7).\nB. Hai phi kim giống hệt nhau.\nC. Một kim loại mạnh và một phi kim mạnh.\nD. Hai nguyên tử kim loại.', correctAnswer: 'A', difficulty: 'medium', sourceType: 'manual', acceptedAnswers: ['A', 'a'], validatorType: 'choice' },
  { id: 'chem10-q17c', subjectId: 'chemistry', topicId: 'chem10-t3', questionTypeId: 'chem10-qt17', content: 'Nhiệt độ sôi của $HF$ cao hơn $HCl$ chủ yếu vì:\nA. Phân tử khối HF lớn hơn.\nB. HF tạo liên kết hydrogen mạnh giữa các phân tử.\nC. HCl là chất rắn ở nhiệt độ phòng.\nD. HF có liên kết cộng hóa trị phân cực yếu hơn.', correctAnswer: 'B', difficulty: 'medium', sourceType: 'manual', acceptedAnswers: ['B', 'b'], validatorType: 'choice' },
  { id: 'chem10-q17d', subjectId: 'chemistry', topicId: 'chem10-t3', questionTypeId: 'chem10-qt17', content: 'Lực hút tĩnh điện yếu hình thành giữa các lưỡng cực tạm thời hoặc cảm ứng trong phân tử được gọi là:\nA. Liên kết cộng hóa trị.\nB. Lực Van der Waals.\nC. Liên kết hydrogen.\nD. Liên kết ion.', correctAnswer: 'B', difficulty: 'easy', sourceType: 'manual', acceptedAnswers: ['B', 'b'], validatorType: 'choice' },
  { id: 'chem10-q17e', subjectId: 'chemistry', topicId: 'chem10-t3', questionTypeId: 'chem10-qt17', content: 'Khi so sánh nhiệt độ sôi của các khí hiếm $He, Ne, Ar, Kr$, xu hướng tăng dần từ He đến Kr chủ yếu do:\nA. Điện tích hạt nhân tăng.\nB. Lực Van der Waals tăng khi kích thước đám mây electron và khối lượng phân tử tăng.\nC. Liên kết hydrogen mạnh dần.\nD. Trở thành kim loại.', correctAnswer: 'B', difficulty: 'hard', sourceType: 'manual', acceptedAnswers: ['B', 'b'], validatorType: 'choice' }
];

export const m3Solutions: Solution[] = [
  {
    id: 'chem10-s13a', questionId: 'chem10-q13a',
    recognition: 'Phân biệt bản chất liên kết trong phân tử và tương tác giữa các tiểu phân.',
    detailedSteps: [{ order: 1, title: 'Xác định tiểu phân và electron hóa trị', explanation: 'Na có 1 electron ngoài cùng nên nhường 1 electron tạo $Na^+$; nhường electron làm điện tích dương.' }, { order: 2, title: 'Kết luận', explanation: 'Vì vậy chọn B.' }],
    finalAnswer: 'B',
    commonMistakes: ['Đồng nhất quy tắc octet, loại liên kết và lực giữa các phân tử thành một khái niệm.'],
    reviewSuggestions: ['Vẽ rõ electron hóa trị và ghi chú lực đang xét nằm trong hay giữa các phân tử.']
  },
  {
    id: 'chem10-s13b', questionId: 'chem10-q13b',
    recognition: 'Phân biệt bản chất liên kết trong phân tử và tương tác giữa các tiểu phân.',
    detailedSteps: [{ order: 1, title: 'Xác định tiểu phân và electron hóa trị', explanation: 'Oxygen cần nhận thêm 2 electron để đạt lớp ngoài cùng bền, tạo $O^{2-}$.' }, { order: 2, title: 'Kết luận', explanation: 'Vì vậy chọn D.' }],
    finalAnswer: 'D',
    commonMistakes: ['Đồng nhất quy tắc octet, loại liên kết và lực giữa các phân tử thành một khái niệm.'],
    reviewSuggestions: ['Vẽ rõ electron hóa trị và ghi chú lực đang xét nằm trong hay giữa các phân tử.']
  },
  {
    id: 'chem10-s14a', questionId: 'chem10-q14a',
    recognition: 'Phân biệt bản chất liên kết trong phân tử và tương tác giữa các tiểu phân.',
    detailedSteps: [{ order: 1, title: 'Xác định tiểu phân và electron hóa trị', explanation: 'Trong tinh thể rắn, ion bị giữ tại nút mạng; khi nóng chảy, ion chuyển động có hướng dưới điện trường và mang dòng điện.' }, { order: 2, title: 'Kết luận', explanation: 'Vì vậy chọn B.' }],
    finalAnswer: 'B',
    commonMistakes: ['Đồng nhất quy tắc octet, loại liên kết và lực giữa các phân tử thành một khái niệm.'],
    reviewSuggestions: ['Vẽ rõ electron hóa trị và ghi chú lực đang xét nằm trong hay giữa các phân tử.']
  },
  {
    id: 'chem10-s14b', questionId: 'chem10-q14b',
    recognition: 'Phân biệt bản chất liên kết trong phân tử và tương tác giữa các tiểu phân.',
    detailedSteps: [{ order: 1, title: 'Xác định tiểu phân và electron hóa trị', explanation: 'Một $Mg^{2+}$ cần hai $Cl^-$ để tổng điện tích bằng 0, nên tỉ lệ là $MgCl_2$.' }, { order: 2, title: 'Kết luận', explanation: 'Vì vậy chọn B.' }],
    finalAnswer: 'B',
    commonMistakes: ['Đồng nhất quy tắc octet, loại liên kết và lực giữa các phân tử thành một khái niệm.'],
    reviewSuggestions: ['Vẽ rõ electron hóa trị và ghi chú lực đang xét nằm trong hay giữa các phân tử.']
  },
  {
    id: 'chem10-s15a', questionId: 'chem10-q15a',
    recognition: 'Phân biệt bản chất liên kết trong phân tử và tương tác giữa các tiểu phân.',
    detailedSteps: [{ order: 1, title: 'Xác định tiểu phân và electron hóa trị', explanation: 'Mỗi nitrogen cần thêm 3 electron để đạt octet; hai nguyên tử dùng chung 3 cặp, tạo liên kết ba.' }, { order: 2, title: 'Kết luận', explanation: 'Vì vậy chọn C.' }],
    finalAnswer: 'C',
    commonMistakes: ['Đồng nhất quy tắc octet, loại liên kết và lực giữa các phân tử thành một khái niệm.'],
    reviewSuggestions: ['Vẽ rõ electron hóa trị và ghi chú lực đang xét nằm trong hay giữa các phân tử.']
  },
  {
    id: 'chem10-s15b', questionId: 'chem10-q15b',
    recognition: 'Phân biệt bản chất liên kết trong phân tử và tương tác giữa các tiểu phân.',
    detailedSteps: [{ order: 1, title: 'Xác định tiểu phân và electron hóa trị', explanation: 'Oxygen có 6 electron hóa trị, tạo hai liên kết O–H và còn hai cặp electron không liên kết.' }, { order: 2, title: 'Kết luận', explanation: 'Vì vậy chọn A.' }],
    finalAnswer: 'A',
    commonMistakes: ['Đồng nhất quy tắc octet, loại liên kết và lực giữa các phân tử thành một khái niệm.'],
    reviewSuggestions: ['Vẽ rõ electron hóa trị và ghi chú lực đang xét nằm trong hay giữa các phân tử.']
  },
  {
    id: 'chem10-s16a', questionId: 'chem10-q16a',
    recognition: 'Phân biệt bản chất liên kết trong phân tử và tương tác giữa các tiểu phân.',
    detailedSteps: [{ order: 1, title: 'Xác định tiểu phân và electron hóa trị', explanation: 'Độ phân cực phân tử là tổng các moment liên kết; trong cấu trúc đối xứng chúng có thể triệt tiêu.' }, { order: 2, title: 'Kết luận', explanation: 'Vì vậy chọn B.' }],
    finalAnswer: 'B',
    commonMistakes: ['Đồng nhất quy tắc octet, loại liên kết và lực giữa các phân tử thành một khái niệm.'],
    reviewSuggestions: ['Vẽ rõ electron hóa trị và ghi chú lực đang xét nằm trong hay giữa các phân tử.']
  },
  {
    id: 'chem10-s16b', questionId: 'chem10-q16b',
    recognition: 'Phân biệt bản chất liên kết trong phân tử và tương tác giữa các tiểu phân.',
    detailedSteps: [{ order: 1, title: 'Xác định tiểu phân và electron hóa trị', explanation: 'Chlorine có độ âm điện lớn hơn nên hút cặp electron dùng chung lệch về phía Cl.' }, { order: 2, title: 'Kết luận', explanation: 'Vì vậy chọn B.' }],
    finalAnswer: 'B',
    commonMistakes: ['Đồng nhất quy tắc octet, loại liên kết và lực giữa các phân tử thành một khái niệm.'],
    reviewSuggestions: ['Vẽ rõ electron hóa trị và ghi chú lực đang xét nằm trong hay giữa các phân tử.']
  },
  {
    id: 'chem10-s17a', questionId: 'chem10-q17a',
    recognition: 'Phân biệt bản chất liên kết trong phân tử và tương tác giữa các tiểu phân.',
    detailedSteps: [{ order: 1, title: 'Xác định tiểu phân và electron hóa trị', explanation: 'O–H giữ H và O trong cùng phân tử là cộng hóa trị; tương tác hydrogen chủ yếu nối các phân tử với nhau.' }, { order: 2, title: 'Kết luận', explanation: 'Vì vậy chọn B.' }],
    finalAnswer: 'B',
    commonMistakes: ['Đồng nhất quy tắc octet, loại liên kết và lực giữa các phân tử thành một khái niệm.'],
    reviewSuggestions: ['Vẽ rõ electron hóa trị và ghi chú lực đang xét nằm trong hay giữa các phân tử.']
  },
  {
    id: 'chem10-s17b', questionId: 'chem10-q17b',
    recognition: 'Phân biệt bản chất liên kết trong phân tử và tương tác giữa các tiểu phân.',
    detailedSteps: [{ order: 1, title: 'Xác định tiểu phân và electron hóa trị', explanation: 'Khi nước sôi cần thắng một phần mạng liên kết hydrogen giữa các phân tử, nên cần nhiều năng lượng hơn.' }, { order: 2, title: 'Kết luận', explanation: 'Vì vậy chọn B.' }],
    finalAnswer: 'B',
    commonMistakes: ['Đồng nhất quy tắc octet, loại liên kết và lực giữa các phân tử thành một khái niệm.'],
    reviewSuggestions: ['Vẽ rõ electron hóa trị và ghi chú lực đang xét nằm trong hay giữa các phân tử.']
  },
  // Các câu giải từ periodicBondPractice (t3)
  ...[
    { id: 'chem10-s13c', qId: 'chem10-q13c', ans: 'A', exp: 'Ca nhường 2e tạo cation Ca²⁺ tích điện dương.' },
    { id: 'chem10-s13d', qId: 'chem10-q13d', ans: 'B', exp: 'Nitrogen có 5 electron hóa trị, nhận thêm 3 electron tạo anion N³⁻.' },
    { id: 'chem10-s13e', qId: 'chem10-q13e', ans: 'A', exp: 'Cation kim loại và anion phi kim thường tạo ra cấu hình bền dạng 8e ngoài cùng giống khí hiếm gần nhất.' },
    { id: 'chem10-s14c', qId: 'chem10-q14c', ans: 'A', exp: 'Liên kết ion được giữ vững nhờ lực hút tĩnh điện đa hướng giữa cation và anion.' },
    { id: 'chem10-s14d', qId: 'chem10-q14d', ans: 'C', exp: 'Tinh thể ion cứng và định vị ion chặt chẽ, nên tinh thể rắn không dẫn điện.' },
    { id: 'chem10-s14e', qId: 'chem10-q14e', ans: 'B', exp: 'Kim loại hóa trị II cần hai phi kim hóa trị I để đảm bảo tính trung hòa điện của hợp chất.' },
    { id: 'chem10-s15c', qId: 'chem10-q15c', ans: 'A', exp: 'Carbon tạo hai liên kết đôi với hai nguyên tử oxygen để đảm bảo octet cho cả 3 nguyên tử.' },
    { id: 'chem10-s15d', qId: 'chem10-q15d', ans: 'B', exp: 'Nitrogen có 5 electron hóa trị, dùng 3 electron tạo liên kết, còn lại một cặp (2 electron) tự do.' },
    { id: 'chem10-s15e', qId: 'chem10-q15e', ans: 'C', exp: 'Mỗi liên kết đơn C–H gồm 2 electron dùng chung; bốn liên kết chứa tổng cộng 8 electron.' },
    { id: 'chem10-s16c', qId: 'chem10-q16c', ans: 'C', exp: 'Hiệu độ âm điện càng lớn, cặp electron liên kết càng bị hút lệch mạnh về một phía; HF có độ phân cực rất cao.' },
    { id: 'chem10-s16d', qId: 'chem10-q16d', ans: 'A', exp: 'Phân tử thẳng có hai moment vectơ hướng ngược chiều có độ lớn bằng nhau nên triệt tiêu lẫn nhau.' },
    { id: 'chem10-s16e', qId: 'chem10-q16e', ans: 'A', exp: 'Liên kết cộng hóa trị phân cực hình thành giữa hai phi kim có hiệu độ âm điện từ 0,4 đến dưới 1,7.' },
    { id: 'chem10-s17c', qId: 'chem10-q17c', ans: 'B', exp: 'Fluorine có độ âm điện rất lớn, tạo liên kết hydrogen F–H...F mạnh giữa các phân tử HF, đẩy nhiệt độ sôi tăng vọt.' },
    { id: 'chem10-s17d', qId: 'chem10-q17d', ans: 'B', exp: 'Lực Van der Waals liên quan đến tương tác hút tĩnh điện yếu giữa các lưỡng cực tự phát hoặc cảm ứng.' },
    { id: 'chem10-s17e', qId: 'chem10-q17e', ans: 'B', exp: 'Kích thước nguyên tử và số electron tăng từ He đến Kr làm tăng khả năng phân cực đám mây electron, tăng lực Van der Waals.' }
  ].map(item => ({
    id: item.id,
    questionId: item.qId,
    recognition: 'Phân biệt bản chất liên kết trong phân tử và tương tác giữa các tiểu phân.',
    detailedSteps: [
      { order: 1, title: 'Lập luận trọng tâm', explanation: item.exp },
      { order: 2, title: 'Kết luận', explanation: `Chọn phương án ${item.ans}.` }
    ],
    finalAnswer: item.ans,
    commonMistakes: ['Chỉ học thuộc chiều biến đổi hoặc tên liên kết mà không xét nguyên nhân vi mô và cấu trúc.'],
    reviewSuggestions: ['Giải thích lại theo chuỗi: cấu hình/cấu trúc → lực tương tác → tính chất quan sát được.']
  }))
];
