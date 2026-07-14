import { QuestionType, Question, Solution } from '@/types';

export const m8QuestionTypes: QuestionType[] = [
  {
    id: 'chem10-qt35', topicId: 'chem10-t8', name: 'Tổng hợp Cấu tạo – Tính chất', slug: 'tong-hop-cau-tao-tinh-chat', description: 'Kết nối cấu hình electron, vị trí, liên kết và tính chất.', exampleQuestionId: 'chem10-q35a', difficulty: 'hard', examFrequency: 'high',
    theory: ['Chuỗi suy luận cốt lõi: cấu hình electron → vị trí tuần hoàn → xu hướng nhường/nhận electron → kiểu liên kết → tính chất.'],
    recognitionSigns: ['Một câu hỏi chứa dữ kiện từ nhiều chương cấu tạo.'], solvingSteps: ['Suy cấu hình và vị trí.', 'Dự đoán ion/liên kết.', 'Kiểm tra tính chất hệ quả.'], commonMistakes: ['Trả lời từng dữ kiện rời rạc mà không nối quan hệ nhân–quả.']
  },
  {
    id: 'chem10-qt36', topicId: 'chem10-t8', name: 'Tổng hợp Phản ứng – Năng lượng', slug: 'tong-hop-phan-ung-nang-luong', description: 'Kết nối oxi hóa–khử, hệ số và biến thiên enthalpy.', exampleQuestionId: 'chem10-q36a', difficulty: 'hard', examFrequency: 'high',
    theory: ['Phải cân bằng phản ứng trước khi dùng dữ liệu nhiệt hóa học; số oxi hóa xác định electron và vai trò chất.'],
    recognitionSigns: ['Phản ứng kèm ΔH hoặc dữ liệu liên kết.'], solvingSteps: ['Cân bằng electron.', 'Chuẩn hóa phương trình.', 'Tính và diễn giải dấu ΔH.'], commonMistakes: ['Dùng ΔH trước khi khớp hệ số phản ứng.']
  },
  {
    id: 'chem10-qt37', topicId: 'chem10-t8', name: 'Đọc Dữ liệu & Thiết kế Thí nghiệm', slug: 'du-lieu-thi-nghiem', description: 'Đọc bảng, đồ thị và đánh giá thiết kế kiểm chứng.', exampleQuestionId: 'chem10-q37a', difficulty: 'hard', examFrequency: 'high',
    theory: ['Kết luận phải đúng phạm vi dữ liệu; thí nghiệm công bằng chỉ thay một biến và cần đo lặp.'],
    recognitionSigns: ['Có bảng số liệu, đồ thị hoặc mô tả thí nghiệm.'], solvingSteps: ['Xác định câu hỏi và biến.', 'Đọc xu hướng/ngoại lệ.', 'Chọn kết luận hẹp nhất được hỗ trợ.'], commonMistakes: ['Suy diễn lượng sản phẩm từ dữ liệu tốc độ.']
  },
  {
    id: 'chem10-qt38', topicId: 'chem10-t8', name: 'Đánh giá Tổng hợp Cuối khóa', slug: 'danh-gia-tong-hop-cuoi-khoa', description: 'Câu hỏi tích hợp toàn bộ Hóa học 10 cốt lõi.', exampleQuestionId: 'chem10-q38a', difficulty: 'hard', examFrequency: 'high',
    theory: ['Ưu tiên bảo toàn, cấu tạo–tính chất và bằng chứng thực nghiệm; không giải bằng nhận diện từ khóa đơn lẻ.'],
    recognitionSigns: ['Tình huống có từ ba mạch kiến thức trở lên.'], solvingSteps: ['Tách dữ kiện theo mạch.', 'Xác định quan hệ phụ thuộc.', 'Loại phát biểu sai bản chất.', 'Kiểm tra kết luận.'], commonMistakes: ['Chọn phát biểu có một phần đúng nhưng kết luận vượt dữ kiện.']
  }
];

export const m8Questions: Question[] = [
  { id: 'chem10-q35a', subjectId: 'chemistry', topicId: 'chem10-t8', questionTypeId: 'chem10-qt35', content: 'X có Z=12. Chuỗi suy luận đúng là:\nA. $3s^2$ → chu kì 3, nhóm IIA → dễ tạo $X^{2+}$ → oxide có tính base.\nB. $3p^2$ → nhóm IVA → tạo $X^{4-}$.\nC. $2p^6$ → khí hiếm.\nD. $3s^2$ → phi kim mạnh.', correctAnswer: 'A', difficulty: 'hard', sourceType: 'manual', acceptedAnswers: ['A', 'a'], validatorType: 'choice' },
  { id: 'chem10-q35b', subjectId: 'chemistry', topicId: 'chem10-t8', questionTypeId: 'chem10-qt35', content: 'X có cấu hình ngoài cùng $3s^23p^5$, Y có $3s^1$. Hợp chất giữa X và Y có khả năng nhất là:\nA. Cộng hóa trị không phân cực $XY$.\nB. Ion với tỉ lệ $YX$, gồm $Y^+$ và $X^-$.\nC. Kim loại với tỉ lệ $Y_2X$.\nD. Không thể hình thành.', correctAnswer: 'B', difficulty: 'hard', sourceType: 'manual', acceptedAnswers: ['B', 'b'], validatorType: 'choice' },
  { id: 'chem10-q35c', subjectId: 'chemistry', topicId: 'chem10-t8', questionTypeId: 'chem10-qt35', content: 'Trong cặp NaCl và $Cl_2$, phát biểu đúng là:\nA. Cả hai đều là tinh thể ion.\nB. NaCl có mạng ion; $Cl_2$ gồm phân tử cộng hóa trị không phân cực.\nC. NaCl gồm phân tử riêng lẻ, $Cl_2$ là kim loại.\nD. Cả hai dẫn điện ở trạng thái rắn.', correctAnswer: 'B', difficulty: 'hard', sourceType: 'manual', acceptedAnswers: ['B', 'b'], validatorType: 'choice' },
  { id: 'chem10-q35d', subjectId: 'chemistry', topicId: 'chem10-t8', questionTypeId: 'chem10-qt35', content: 'Vì sao K có tính kim loại mạnh hơn Na?\nA. K có ít lớp electron hơn.\nB. Electron ngoài cùng của K xa hạt nhân và bị che chắn mạnh hơn nên dễ nhường.\nC. K có độ âm điện lớn hơn.\nD. K là halogen.', correctAnswer: 'B', difficulty: 'hard', sourceType: 'manual', acceptedAnswers: ['B', 'b'], validatorType: 'choice' },
  { id: 'chem10-q36a', subjectId: 'chemistry', topicId: 'chem10-t8', questionTypeId: 'chem10-qt36', content: 'Với $2H_2+O_2\\rightarrow2H_2O$, $ΔH=-572$ kJ. Enthalpy cho phản ứng tạo 1 mol nước theo cùng trạng thái là:\nA. −1144 kJ\nB. −572 kJ\nC. −286 kJ\nD. +286 kJ', correctAnswer: 'C', difficulty: 'hard', sourceType: 'manual', acceptedAnswers: ['C', 'c'], validatorType: 'choice' },
  { id: 'chem10-q36b', subjectId: 'chemistry', topicId: 'chem10-t8', questionTypeId: 'chem10-qt36', content: 'Trong $2Mg+O_2\\rightarrow2MgO$, Mg là chất khử và phản ứng tỏa nhiệt. Phát biểu đúng là:\nA. Mg nhận electron và ΔH>0.\nB. Mg nhường electron và ΔH<0.\nC. O nhường electron và ΔH=0.\nD. Không có oxi hóa–khử.', correctAnswer: 'B', difficulty: 'hard', sourceType: 'manual', acceptedAnswers: ['B', 'b'], validatorType: 'choice' },
  { id: 'chem10-q36c', subjectId: 'chemistry', topicId: 'chem10-t8', questionTypeId: 'chem10-qt36', content: 'Khi đảo phản ứng tỏa nhiệt đã cân bằng, thay đổi nào đồng thời đúng?\nA. Vai trò oxi hóa–khử giữ nguyên và ΔH giữ dấu.\nB. Quá trình electron đảo chiều và ΔH đổi dấu.\nC. Chỉ hệ số đổi.\nD. Số oxi hóa biến mất.', correctAnswer: 'B', difficulty: 'hard', sourceType: 'manual', acceptedAnswers: ['B', 'b'], validatorType: 'choice' },
  { id: 'chem10-q36d', subjectId: 'chemistry', topicId: 'chem10-t8', questionTypeId: 'chem10-qt36', content: 'Tính ΔH từ năng lượng liên kết chỉ hợp lí sau khi:\nA. Đếm liên kết theo phương trình đã cân bằng.\nB. Bỏ hệ số.\nC. Chỉ đếm liên kết sản phẩm.\nD. Đổi dấu mọi năng lượng liên kết.', correctAnswer: 'A', difficulty: 'hard', sourceType: 'manual', acceptedAnswers: ['A', 'a'], validatorType: 'choice' },
  { id: 'chem10-q37a', subjectId: 'chemistry', topicId: 'chem10-t8', questionTypeId: 'chem10-qt37', content: 'Một nhóm đo thời gian phản ứng ở 20, 30, 40 °C nhưng đồng thời dùng ba nồng độ acid khác nhau. Kết luận nào đúng?\nA. Đủ chứng minh riêng ảnh hưởng nhiệt độ.\nB. Thiết kế có biến gây nhiễu nên chưa tách được ảnh hưởng nhiệt độ.\nC. Nồng độ không ảnh hưởng tốc độ.\nD. Chỉ cần chọn kết quả nhanh nhất.', correctAnswer: 'B', difficulty: 'hard', sourceType: 'manual', acceptedAnswers: ['B', 'b'], validatorType: 'choice' },
  { id: 'chem10-q37b', subjectId: 'chemistry', topicId: 'chem10-t8', questionTypeId: 'chem10-qt37', content: 'Hai mẫu tạo cùng 0,50 mol khí cuối cùng nhưng thời gian lần lượt 40 s và 80 s. Nhận định được dữ liệu hỗ trợ là:\nA. Mẫu 1 có tốc độ trung bình lớn hơn, lượng sản phẩm cuối bằng nhau.\nB. Mẫu 1 tạo gấp đôi khí.\nC. Mẫu 2 nhanh hơn.\nD. Không có phản ứng.', correctAnswer: 'A', difficulty: 'hard', sourceType: 'manual', acceptedAnswers: ['A', 'a'], validatorType: 'choice' },
  { id: 'chem10-q37c', subjectId: 'chemistry', topicId: 'chem10-t8', questionTypeId: 'chem10-qt37', content: 'Kết quả lặp thời gian phản ứng: 31, 30, 32, 67 s. Việc nên làm là:\nA. Dùng ngay trung bình bốn số.\nB. Kiểm tra lần 67 s và đo lại trước khi xử lí ngoại lệ.\nC. Chỉ giữ 67 s.\nD. Xóa mọi kết quả.', correctAnswer: 'B', difficulty: 'hard', sourceType: 'manual', acceptedAnswers: ['B', 'b'], validatorType: 'choice' },
  { id: 'chem10-q37d', subjectId: 'chemistry', topicId: 'chem10-t8', questionTypeId: 'chem10-qt37', content: 'Để nhận biết ba dung dịch chloride, bromide, iodide, bằng chứng mạnh nhất là:\nA. Chỉ nhìn dung dịch ban đầu.\nB. Thêm $AgNO_3$ trong điều kiện phù hợp và đối chiếu màu kết tủa.\nC. Đo thời gian khuấy.\nD. Đun sôi mọi mẫu.', correctAnswer: 'B', difficulty: 'hard', sourceType: 'manual', acceptedAnswers: ['B', 'b'], validatorType: 'choice' },
  { id: 'chem10-q38a', subjectId: 'chemistry', topicId: 'chem10-t8', questionTypeId: 'chem10-qt38', content: 'Phát biểu tổng hợp nào đúng?\nA. Cấu hình electron không liên quan tính chất.\nB. Vị trí tuần hoàn giúp dự đoán liên kết và phản ứng, nhưng cần kiểm chứng bằng dữ liệu/thí nghiệm.\nC. Mọi dự đoán tuần hoàn đúng tuyệt đối.\nD. Chỉ phương trình đủ chứng minh hiện tượng.', correctAnswer: 'B', difficulty: 'hard', sourceType: 'manual', acceptedAnswers: ['B', 'b'], validatorType: 'choice' },
  { id: 'chem10-q38b', subjectId: 'chemistry', topicId: 'chem10-t8', questionTypeId: 'chem10-qt38', content: 'Chlorine vừa là halogen và tham gia phản ứng redox. Trong $Cl_2+2Br^-\\rightarrow2Cl^-+Br_2$, chuỗi đúng là:\nA. Cl₂ nhận e → chất oxi hóa → Br⁻ bị oxi hóa.\nB. Cl₂ nhường e → chất khử.\nC. Br⁻ nhận e.\nD. Không đổi số oxi hóa.', correctAnswer: 'A', difficulty: 'hard', sourceType: 'manual', acceptedAnswers: ['A', 'a'], validatorType: 'choice' },
  { id: 'chem10-q38c', subjectId: 'chemistry', topicId: 'chem10-t8', questionTypeId: 'chem10-qt38', content: 'Xúc tác làm phản ứng nhanh hơn nhưng không đổi ΔH vì:\nA. Nó thay đổi trạng thái đầu và cuối.\nB. Nó chỉ tạo đường phản ứng có năng lượng hoạt hóa thấp hơn.\nC. Nó tạo thêm sản phẩm vô hạn.\nD. Nó làm mất bảo toàn năng lượng.', correctAnswer: 'B', difficulty: 'hard', sourceType: 'manual', acceptedAnswers: ['B', 'b'], validatorType: 'choice' },
  { id: 'chem10-q38d', subjectId: 'chemistry', topicId: 'chem10-t8', questionTypeId: 'chem10-qt38', content: 'Tiêu chí tốt nhất để kết luận học sinh “làm chủ” Hóa 10 là:\nA. Nhớ nhiều đáp án.\nB. Vừa tính đúng, vừa giải thích bản chất và xử lí được dữ liệu mới.\nC. Xem hết video.\nD. Làm một câu trắc nghiệm đúng.', correctAnswer: 'B', difficulty: 'hard', sourceType: 'manual', acceptedAnswers: ['B', 'b'], validatorType: 'choice' }
];

export const m8Solutions: Solution[] = [
  {
    id: 'chem10-s35a', questionId: 'chem10-q35a',
    recognition: 'Tách dữ kiện theo từng mạch rồi nối chúng bằng quan hệ nhân–quả.',
    detailedSteps: [{ order: 1, title: 'Phân tích tích hợp', explanation: 'Z=12 là Mg, cấu hình ngoài cùng 3s², thuộc chu kì 3 nhóm IIA và thường tạo Mg²⁺; MgO có tính base.' }, { order: 2, title: 'Kết luận', explanation: 'Chọn phương án A.' }],
    finalAnswer: 'A',
    commonMistakes: ['Giải từng mảnh kiến thức nhưng không kiểm tra tính nhất quán của kết luận tổng thể.'],
    reviewSuggestions: ['Vẽ chuỗi cấu tạo → tính chất → phản ứng → bằng chứng trước khi trả lời.']
  },
  {
    id: 'chem10-s35b', questionId: 'chem10-q35b',
    recognition: 'Tách dữ kiện theo từng mạch rồi nối chúng bằng quan hệ nhân–quả.',
    detailedSteps: [{ order: 1, title: 'Phân tích tích hợp', explanation: 'Y dễ nhường 1e, X dễ nhận 1e nên tạo hợp chất ion tỉ lệ 1:1.' }, { order: 2, title: 'Kết luận', explanation: 'Chọn phương án B.' }],
    finalAnswer: 'B',
    commonMistakes: ['Giải từng mảnh kiến thức nhưng không kiểm tra tính nhất quán của kết luận tổng thể.'],
    reviewSuggestions: ['Vẽ chuỗi cấu tạo → tính chất → phản ứng → bằng chứng trước khi trả lời.']
  },
  {
    id: 'chem10-s35c', questionId: 'chem10-q35c',
    recognition: 'Tách dữ kiện theo từng mạch rồi nối chúng bằng quan hệ nhân–quả.',
    detailedSteps: [{ order: 1, title: 'Phân tích tích hợp', explanation: 'NaCl là mạng ion; Cl₂ có liên kết giữa hai nguyên tử giống nhau nên không phân cực.' }, { order: 2, title: 'Kết luận', explanation: 'Chọn phương án B.' }],
    finalAnswer: 'B',
    commonMistakes: ['Giải từng mảnh kiến thức nhưng không kiểm tra tính nhất quán của kết luận tổng thể.'],
    reviewSuggestions: ['Vẽ chuỗi cấu tạo → tính chất → phản ứng → bằng chứng trước khi trả lời.']
  },
  {
    id: 'chem10-s35d', questionId: 'chem10-q35d',
    recognition: 'Tách dữ kiện theo từng mạch rồi nối chúng bằng quan hệ nhân–quả.',
    detailedSteps: [{ order: 1, title: 'Phân tích tích hợp', explanation: 'Đi xuống nhóm IA, bán kính và che chắn tăng làm electron hóa trị dễ bị tách hơn.' }, { order: 2, title: 'Kết luận', explanation: 'Chọn phương án B.' }],
    finalAnswer: 'B',
    commonMistakes: ['Giải từng mảnh kiến thức nhưng không kiểm tra tính nhất quán của kết luận tổng thể.'],
    reviewSuggestions: ['Vẽ chuỗi cấu tạo → tính chất → phản ứng → bằng chứng trước khi trả lời.']
  },
  {
    id: 'chem10-s36a', questionId: 'chem10-q36a',
    recognition: 'Tách dữ kiện theo từng mạch rồi nối chúng bằng quan hệ nhân–quả.',
    detailedSteps: [{ order: 1, title: 'Phân tích tích hợp', explanation: 'Chia toàn bộ phương trình cho 2 thì ΔH cũng chia 2, bằng −286 kJ.' }, { order: 2, title: 'Kết luận', explanation: 'Chọn phương án C.' }],
    finalAnswer: 'C',
    commonMistakes: ['Giải từng mảnh kiến thức nhưng không kiểm tra tính nhất quán của kết luận tổng thể.'],
    reviewSuggestions: ['Vẽ chuỗi cấu tạo → tính chất → phản ứng → bằng chứng trước khi trả lời.']
  },
  {
    id: 'chem10-s36b', questionId: 'chem10-q36b',
    recognition: 'Tách dữ kiện theo từng mạch rồi nối chúng bằng quan hệ nhân–quả.',
    detailedSteps: [{ order: 1, title: 'Phân tích tích hợp', explanation: 'Mg tăng số oxi hóa 0→+2 nên nhường electron; tỏa nhiệt tương ứng ΔH âm.' }, { order: 2, title: 'Kết luận', explanation: 'Chọn phương án B.' }],
    finalAnswer: 'B',
    commonMistakes: ['Giải từng mảnh kiến thức nhưng không kiểm tra tính nhất quán của kết luận tổng thể.'],
    reviewSuggestions: ['Vẽ chuỗi cấu tạo → tính chất → phản ứng → bằng chứng trước khi trả lời.']
  },
  {
    id: 'chem10-s36c', questionId: 'chem10-q36c',
    recognition: 'Tách dữ kiện theo từng mạch rồi nối chúng bằng quan hệ nhân–quả.',
    detailedSteps: [{ order: 1, title: 'Phân tích tích hợp', explanation: 'Đảo phản ứng đảo các quá trình nhường–nhận và biến phản ứng tỏa nhiệt thành thu nhiệt.' }, { order: 2, title: 'Kết luận', explanation: 'Chọn phương án B.' }],
    finalAnswer: 'B',
    commonMistakes: ['Giải từng mảnh kiến thức nhưng không kiểm tra tính nhất quán của kết luận tổng thể.'],
    reviewSuggestions: ['Vẽ chuỗi cấu tạo → tính chất → phản ứng → bằng chứng trước khi trả lời.']
  },
  {
    id: 'chem10-s36d', questionId: 'chem10-q36d',
    recognition: 'Tách dữ kiện theo từng mạch rồi nối chúng bằng quan hệ nhân–quả.',
    detailedSteps: [{ order: 1, title: 'Phân tích tích hợp', explanation: 'Số liên kết bị phá và tạo phụ thuộc trực tiếp hệ số tỉ lượng của phương trình.' }, { order: 2, title: 'Kết luận', explanation: 'Chọn phương án A.' }],
    finalAnswer: 'A',
    commonMistakes: ['Giải từng mảnh kiến thức nhưng không kiểm tra tính nhất quán của kết luận tổng thể.'],
    reviewSuggestions: ['Vẽ chuỗi cấu tạo → tính chất → phản ứng → bằng chứng trước khi trả lời.']
  },
  {
    id: 'chem10-s37a', questionId: 'chem10-q37a',
    recognition: 'Tách dữ kiện theo từng mạch rồi nối chúng bằng quan hệ nhân–quả.',
    detailedSteps: [{ order: 1, title: 'Phân tích tích hợp', explanation: 'Nhiệt độ và nồng độ cùng thay đổi nên không thể quy kết kết quả cho riêng nhiệt độ.' }, { order: 2, title: 'Kết luận', explanation: 'Chọn phương án B.' }],
    finalAnswer: 'B',
    commonMistakes: ['Giải từng mảnh kiến thức nhưng không kiểm tra tính nhất quán của kết luận tổng thể.'],
    reviewSuggestions: ['Vẽ chuỗi cấu tạo → tính chất → phản ứng → bằng chứng trước khi trả lời.']
  },
  {
    id: 'chem10-s37b', questionId: 'chem10-q37b',
    recognition: 'Tách dữ kiện theo từng mạch rồi nối chúng bằng quan hệ nhân–quả.',
    detailedSteps: [{ order: 1, title: 'Phân tích tích hợp', explanation: 'Cùng lượng sản phẩm nhưng mẫu 1 đạt lượng đó trong nửa thời gian nên nhanh hơn.' }, { order: 2, title: 'Kết luận', explanation: 'Chọn phương án A.' }],
    finalAnswer: 'A',
    commonMistakes: ['Giải từng mảnh kiến thức nhưng không kiểm tra tính nhất quán của kết luận tổng thể.'],
    reviewSuggestions: ['Vẽ chuỗi cấu tạo → tính chất → phản ứng → bằng chứng trước khi trả lời.']
  },
  {
    id: 'chem10-s37c', questionId: 'chem10-q37c',
    recognition: 'Tách dữ kiện theo từng mạch rồi nối chúng bằng quan hệ nhân–quả.',
    detailedSteps: [{ order: 1, title: 'Phân tích tích hợp', explanation: '67 s lệch rõ rệt; cần điều tra sai sót và lặp phép đo thay vì tùy tiện loại bỏ.' }, { order: 2, title: 'Kết luận', explanation: 'Chọn phương án B.' }],
    finalAnswer: 'B',
    commonMistakes: ['Giải từng mảnh kiến thức nhưng không kiểm tra tính nhất quán của kết luận tổng thể.'],
    reviewSuggestions: ['Vẽ chuỗi cấu tạo → tính chất → phản ứng → bằng chứng trước khi trả lời.']
  },
  {
    id: 'chem10-s37d', questionId: 'chem10-q37d',
    recognition: 'Tách dữ kiện theo từng mạch rồi nối chúng bằng quan hệ nhân–quả.',
    detailedSteps: [{ order: 1, title: 'Phân tích tích hợp', explanation: 'AgCl, AgBr và AgI cho màu kết tủa đặc trưng, cung cấp bằng chứng hóa học trực tiếp.' }, { order: 2, title: 'Kết luận', explanation: 'Chọn phương án B.' }],
    finalAnswer: 'B',
    commonMistakes: ['Giải từng mảnh kiến thức nhưng không kiểm tra tính nhất quán của kết luận tổng thể.'],
    reviewSuggestions: ['Vẽ chuỗi cấu tạo → tính chất → phản ứng → bằng chứng trước khi trả lời.']
  },
  {
    id: 'chem10-s38a', questionId: 'chem10-q38a',
    recognition: 'Tách dữ kiện theo từng mạch rồi nối chúng bằng quan hệ nhân–quả.',
    detailedSteps: [{ order: 1, title: 'Phân tích tích hợp', explanation: 'Quy luật tuần hoàn tạo dự đoán có cơ sở; bằng chứng thực nghiệm giúp kiểm chứng phạm vi áp dụng.' }, { order: 2, title: 'Kết luận', explanation: 'Chọn phương án B.' }],
    finalAnswer: 'B',
    commonMistakes: ['Giải từng mảnh kiến thức nhưng không kiểm tra tính nhất quán của kết luận tổng thể.'],
    reviewSuggestions: ['Vẽ chuỗi cấu tạo → tính chất → phản ứng → bằng chứng trước khi trả lời.']
  },
  {
    id: 'chem10-s38b', questionId: 'chem10-q38b',
    recognition: 'Tách dữ kiện theo từng mạch rồi nối chúng bằng quan hệ nhân–quả.',
    detailedSteps: [{ order: 1, title: 'Phân tích tích hợp', explanation: 'Cl₂ nhận electron thành Cl⁻; Br⁻ nhường electron thành Br₂.' }, { order: 2, title: 'Kết luận', explanation: 'Chọn phương án A.' }],
    finalAnswer: 'A',
    commonMistakes: ['Giải từng mảnh kiến thức nhưng không kiểm tra tính nhất quán của kết luận tổng thể.'],
    reviewSuggestions: ['Vẽ chuỗi cấu tạo → tính chất → phản ứng → bằng chứng trước khi trả lời.']
  },
  {
    id: 'chem10-s38c', questionId: 'chem10-q38c',
    recognition: 'Tách dữ kiện theo từng mạch rồi nối chúng bằng quan hệ nhân–quả.',
    detailedSteps: [{ order: 1, title: 'Phân tích tích hợp', explanation: 'ΔH phụ thuộc trạng thái đầu–cuối; xúc tác chỉ thay đổi con đường và năng lượng hoạt hóa.' }, { order: 2, title: 'Kết luận', explanation: 'Chọn phương án B.' }],
    finalAnswer: 'B',
    commonMistakes: ['Giải từng mảnh kiến thức nhưng không kiểm tra tính nhất quán của kết luận tổng thể.'],
    reviewSuggestions: ['Vẽ chuỗi cấu tạo → tính chất → phản ứng → bằng chứng trước khi trả lời.']
  },
  {
    id: 'chem10-s38d', questionId: 'chem10-q38d',
    recognition: 'Tách dữ kiện theo từng mạch rồi nối chúng bằng quan hệ nhân–quả.',
    detailedSteps: [{ order: 1, title: 'Phân tích tích hợp', explanation: 'Làm chủ đòi hỏi nhận thức, giải thích, vận dụng và xử lí bằng chứng chứ không chỉ ghi nhớ.' }, { order: 2, title: 'Kết luận', explanation: 'Chọn phương án B.' }],
    finalAnswer: 'B',
    commonMistakes: ['Giải từng mảnh kiến thức nhưng không kiểm tra tính nhất quán của kết luận tổng thể.'],
    reviewSuggestions: ['Vẽ chuỗi cấu tạo → tính chất → phản ứng → bằng chứng trước khi trả lời.']
  }
];
