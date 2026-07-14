import type { Question } from '@/types';

export const m1Questions: Question[] = [
  {
    id: 'chem10-q1',
    subjectId: 'chemistry',
    topicId: 'chem10-t1',
    questionTypeId: 'chem10-qt1',
    content: 'Phát biểu nào sau đây về cấu tạo nguyên tử là đúng?\nA. Electron có khối lượng xấp xỉ bằng khối lượng proton.\nB. Hạt nhân chiếm hầu hết thể tích và khối lượng của nguyên tử.\nC. Neutron nằm ở hạt nhân và mang điện tích âm.\nD. Khối lượng nguyên tử tập trung hầu hết ở hạt nhân vì khối lượng electron là vô cùng nhỏ.',
    difficulty: 'easy',
    sourceType: 'manual',
    correctAnswer: 'D',
    acceptedAnswers: ['D', 'd'],
    validatorType: 'choice'
  },
  {
    id: 'chem10-q2',
    subjectId: 'chemistry',
    topicId: 'chem10-t1',
    questionTypeId: 'chem10-qt2',
    content: 'Kí hiệu nguyên tử nào sau đây biểu diễn chính xác nguyên tử Potassium (Kali) có chứa 19 proton, 20 neutron và 19 electron?\nA. $_{19}^{20}\\text{K}$\nB. $_{19}^{39}\\text{K}$\nC. $_{20}^{39}\\text{Ca}$\nD. $_{39}^{19}\\text{K}$',
    difficulty: 'easy',
    sourceType: 'manual',
    correctAnswer: 'B',
    acceptedAnswers: ['B', 'b'],
    validatorType: 'choice'
  },
  {
    id: 'chem10-q3',
    subjectId: 'chemistry',
    topicId: 'chem10-t1',
    questionTypeId: 'chem10-qt3',
    content: 'Phổ khối lượng (MS) của nguyên tố chlorine trong tự nhiên cho thấy hai đồng vị chính có số khối và độ phổ biến như sau: $^{35}\\text{Cl}$ chiếm 75,77% và $^{37}\\text{Cl}$ chiếm 24,23%. Hãy tính nguyên tử khối trung bình của chlorine (làm tròn kết quả đến hai chữ số thập phân).',
    difficulty: 'medium',
    sourceType: 'official_exam',
    correctAnswer: '35.48',
    acceptedAnswers: ['35.48', '35,48'],
    validatorType: 'exact'
  },
  {
    id: 'chem10-q4',
    subjectId: 'chemistry',
    topicId: 'chem10-t1',
    questionTypeId: 'chem10-qt4',
    content: 'Theo mô hình nguyên tử lượng tử hiện đại, orbital nguyên tử (AO) được định nghĩa là gì?\nA. Quỹ đạo tròn hoặc bầu dục xác định mà electron chạy dọc theo đó.\nB. Vùng không gian xung quanh hạt nhân mà tại đó xác suất tìm thấy electron là lớn nhất (khoảng 90%).\nC. Đám mây chứa toàn bộ proton và electron của nguyên tử.\nD. Đường đi chuyển động của electron giống như hành tinh quay quanh Mặt Trời.',
    difficulty: 'medium',
    sourceType: 'manual',
    correctAnswer: 'B',
    acceptedAnswers: ['B', 'b'],
    validatorType: 'choice'
  },
  {
    id: 'chem10-q5',
    subjectId: 'chemistry',
    topicId: 'chem10-t1',
    questionTypeId: 'chem10-qt5',
    content: 'Lớp electron M ($n = 3$) có tối đa bao nhiêu orbital nguyên tử (AO) và chứa tối đa bao nhiêu electron?\nA. 3 orbital, 6 electron\nB. 9 orbital, 18 electron\nC. 4 orbital, 8 electron\nD. 16 orbital, 32 electron',
    difficulty: 'medium',
    sourceType: 'mock_exam',
    correctAnswer: 'B',
    acceptedAnswers: ['B', 'b'],
    validatorType: 'choice'
  },
  {
    id: 'chem10-q6',
    subjectId: 'chemistry',
    topicId: 'chem10-t1',
    questionTypeId: 'chem10-qt6',
    content: 'Nguyên tử chlorine có số hiệu nguyên tử Z = 17. Cấu hình electron và số electron độc thân ở trạng thái cơ bản được biểu diễn đúng là:\nA. $1s^2 2s^2 2p^6 3s^2 3p^5$, có 1 electron độc thân.\nB. $1s^2 2s^2 2p^6 3s^2 3p^5$, không có electron độc thân.\nC. $1s^2 2s^2 2p^6 3s^2 3p^6$, có 1 electron độc thân.\nD. $1s^2 2s^2 2p^6 3s^2 3p^4$, có 2 electron độc thân.',
    difficulty: 'medium',
    sourceType: 'mock_exam',
    correctAnswer: 'A',
    acceptedAnswers: ['A', 'a'],
    validatorType: 'choice'
  },
  {
    id: 'chem10-q7',
    subjectId: 'chemistry',
    topicId: 'chem10-t1',
    questionTypeId: 'chem10-qt7',
    content: 'Một nguyên tử nguyên tố X có cấu hình electron lớp ngoài cùng là $3s^2 3p^4$. Phát biểu nào sau đây về X là đúng?\nA. X là một kim loại mạnh vì có 6 electron lớp ngoài cùng.\nB. X là một phi kim vì có 6 electron lớp ngoài cùng.\nC. X là một khí hiếm trơ về mặt hóa học.\nD. X là một phi kim vì có 4 electron ở phân lớp ngoài cùng.',
    difficulty: 'easy',
    sourceType: 'manual',
    correctAnswer: 'B',
    acceptedAnswers: ['B', 'b'],
    validatorType: 'choice'
  },
  {
    id: 'chem10-q1b', subjectId: 'chemistry', topicId: 'chem10-t1', questionTypeId: 'chem10-qt1',
    content: 'Một nguyên tử trung hòa có 13 proton và 14 neutron. Phát biểu nào đúng?\nA. Nguyên tử có 14 electron và số khối 27.\nB. Nguyên tử có 13 electron và số khối 27.\nC. Nguyên tử có 13 electron và số khối 14.\nD. Nguyên tử có 27 electron và 13 neutron.',
    difficulty: 'easy', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B', 'b'], validatorType: 'choice'
  },
  {
    id: 'chem10-q2b', subjectId: 'chemistry', topicId: 'chem10-t1', questionTypeId: 'chem10-qt2',
    content: 'Hai nguyên tử X và Y lần lượt có (17 proton, 18 neutron) và (17 proton, 20 neutron). Kết luận nào đúng?\nA. X và Y là hai nguyên tố khác nhau vì khác số neutron.\nB. X và Y là đồng vị của cùng một nguyên tố vì cùng số proton.\nC. X và Y có cùng số khối.\nD. X và Y có số electron khác nhau khi đều trung hòa.',
    difficulty: 'easy', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B', 'b'], validatorType: 'choice'
  },
  {
    id: 'chem10-q3b', subjectId: 'chemistry', topicId: 'chem10-t1', questionTypeId: 'chem10-qt3',
    content: 'Phổ khối của một nguyên tố có hai đỉnh tại m/z = 10 và m/z = 11 với cường độ tương đối lần lượt 20% và 80%. Phát biểu nào đúng?\nA. Đồng vị khối lượng 10 phổ biến hơn vì nằm bên trái.\nB. Đồng vị khối lượng 11 chiếm 80% và nguyên tử khối trung bình xấp xỉ 10,8.\nC. Đỉnh cao hơn chứng tỏ đồng vị có điện tích hạt nhân lớn hơn.\nD. Nguyên tử khối trung bình bằng 10,5 vì lấy trung bình cộng.',
    difficulty: 'medium', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B', 'b'], validatorType: 'choice'
  },
  {
    id: 'chem10-q4b', subjectId: 'chemistry', topicId: 'chem10-t1', questionTypeId: 'chem10-qt4',
    content: 'Phát biểu nào mô tả đúng nhất vai trò của mô hình Rutherford–Bohr trong học tập?\nA. Đây là ảnh chụp chính xác đường đi của electron.\nB. Mô hình hoàn toàn vô dụng vì đã có mô hình hiện đại.\nC. Mô hình giúp biểu diễn mức năng lượng và lớp electron một cách trực quan nhưng không mô tả electron chạy trên quỹ đạo xác định trong mô hình hiện đại.\nD. Mô hình chứng minh orbital có dạng đường tròn.',
    difficulty: 'medium', sourceType: 'manual', correctAnswer: 'C', acceptedAnswers: ['C', 'c'], validatorType: 'choice'
  },
  {
    id: 'chem10-q5b', subjectId: 'chemistry', topicId: 'chem10-t1', questionTypeId: 'chem10-qt5',
    content: 'Phân lớp p có bao nhiêu orbital và chứa tối đa bao nhiêu electron?\nA. 1 orbital và 2 electron.\nB. 2 orbital và 4 electron.\nC. 3 orbital và 6 electron.\nD. 6 orbital và 12 electron.',
    difficulty: 'easy', sourceType: 'manual', correctAnswer: 'C', acceptedAnswers: ['C', 'c'], validatorType: 'choice'
  },
  {
    id: 'chem10-q6b', subjectId: 'chemistry', topicId: 'chem10-t1', questionTypeId: 'chem10-qt6',
    content: 'Nguyên tử oxygen có Z = 8. Cấu hình electron nào đúng?\nA. $1s^2 2s^2 2p^4$\nB. $1s^2 2s^2 2p^6$\nC. $1s^2 2s^4 2p^2$\nD. $1s^2 2p^6$',
    difficulty: 'easy', sourceType: 'manual', correctAnswer: 'A', acceptedAnswers: ['A', 'a'], validatorType: 'choice'
  },
  {
    id: 'chem10-q7b', subjectId: 'chemistry', topicId: 'chem10-t1', questionTypeId: 'chem10-qt7',
    content: 'Nguyên tử X có cấu hình electron $1s^2 2s^2 2p^6 3s^1$. Dự đoán nào hợp lí nhất?\nA. X là khí hiếm vì có lớp thứ hai bão hòa.\nB. X có xu hướng nhận thêm 7 electron.\nC. X là kim loại và có xu hướng nhường 1 electron lớp ngoài cùng.\nD. X là phi kim vì chỉ có 1 electron lớp ngoài cùng.',
    difficulty: 'medium', sourceType: 'manual', correctAnswer: 'C', acceptedAnswers: ['C', 'c'], validatorType: 'choice'
  },
  // Dữ liệu từ foundationPractice
  { id: 'chem10-q1c', subjectId: 'chemistry', topicId: 'chem10-t1', questionTypeId: 'chem10-qt1', content: 'Nguyên tử trung hòa X có 15 electron và số khối 31. Số proton và neutron lần lượt là:\nA. 15 và 16\nB. 16 và 15\nC. 15 và 31\nD. 31 và 15', difficulty: 'easy', sourceType: 'manual', correctAnswer: 'A', acceptedAnswers: ['A', 'a'], validatorType: 'choice' },
  { id: 'chem10-q1d', subjectId: 'chemistry', topicId: 'chem10-t1', questionTypeId: 'chem10-qt1', content: 'Phát biểu nào đúng về kích thước nguyên tử?\nA. Hạt nhân chiếm gần toàn bộ thể tích.\nB. Electron tập trung bên trong hạt nhân.\nC. Hạt nhân rất nhỏ so với nguyên tử nhưng chứa gần hết khối lượng.\nD. Neutron quyết định điện tích nguyên tử.', difficulty: 'easy', sourceType: 'manual', correctAnswer: 'C', acceptedAnswers: ['C', 'c'], validatorType: 'choice' },
  { id: 'chem10-q2c', subjectId: 'chemistry', topicId: 'chem10-t1', questionTypeId: 'chem10-qt2', content: 'Nguyên tử $^{40}_{20}Ca$ có số proton, neutron, electron là:\nA. 20, 20, 20\nB. 20, 40, 20\nC. 40, 20, 40\nD. 20, 20, 40', difficulty: 'easy', sourceType: 'manual', correctAnswer: 'A', acceptedAnswers: ['A', 'a'], validatorType: 'choice' },
  { id: 'chem10-q2d', subjectId: 'chemistry', topicId: 'chem10-t1', questionTypeId: 'chem10-qt2', content: 'Hai nguyên tử có cùng Z nhưng khác A. Kết luận đúng là:\nA. Hai ion trái dấu.\nB. Hai đồng vị của cùng nguyên tố.\nC. Hai nguyên tố khác nhau.\nD. Có cùng số neutron.', difficulty: 'easy', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B', 'b'], validatorType: 'choice' },
  { id: 'chem10-q3c', subjectId: 'chemistry', topicId: 'chem10-t1', questionTypeId: 'chem10-qt3', content: 'Nguyên tố X có 60% đồng vị khối lượng 24 và 40% đồng vị khối lượng 26. Nguyên tử khối trung bình là:\nA. 24,0\nB. 24,8\nC. 25,0\nD. 26,0', difficulty: 'easy', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B', 'b'], validatorType: 'choice' },
  { id: 'chem10-q3d', subjectId: 'chemistry', topicId: 'chem10-t1', questionTypeId: 'chem10-qt3', content: 'Trên phổ khối, hai đỉnh tại 79 và 81 có chiều cao gần bằng nhau. Diễn giải phù hợp nhất là:\nA. Hai đồng vị có độ phổ biến gần bằng nhau.\nB. Đồng vị 81 nhẹ hơn.\nC. Nguyên tố có số proton 79 và 81.\nD. Nguyên tử khối chắc chắn bằng 81.', difficulty: 'medium', sourceType: 'manual', correctAnswer: 'A', acceptedAnswers: ['A', 'a'], validatorType: 'choice' },
  { id: 'chem10-q4c', subjectId: 'chemistry', topicId: 'chem10-t1', questionTypeId: 'chem10-qt4', content: 'Điểm khác biệt cốt lõi giữa quỹ đạo Bohr và orbital hiện đại là:\nA. Orbital là vùng xác suất, không phải đường đi xác định.\nB. Orbital chứa proton.\nC. Bohr không có hạt nhân.\nD. Hai khái niệm hoàn toàn giống nhau.', difficulty: 'easy', sourceType: 'manual', correctAnswer: 'A', acceptedAnswers: ['A', 'a'], validatorType: 'choice' },
  { id: 'chem10-q4d', subjectId: 'chemistry', topicId: 'chem10-t1', questionTypeId: 'chem10-qt4', content: 'Khi dùng hình “đám mây electron”, cách hiểu đúng là:\nA. Electron là hơi nước.\nB. Mật độ đám mây biểu diễn xác suất tìm thấy electron.\nC. Đó là ảnh chụp electron đứng yên.\nD. Rìa đám mây là quỹ đạo cứng.', difficulty: 'medium', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B', 'b'], validatorType: 'choice' },
  { id: 'chem10-q5c', subjectId: 'chemistry', topicId: 'chem10-t1', questionTypeId: 'chem10-qt5', content: 'Phân lớp s có số orbital và sức chứa tối đa là:\nA. 1 AO, 2 electron\nB. 2 AO, 4 electron\nC. 3 AO, 6 electron\nD. 5 AO, 10 electron', difficulty: 'easy', sourceType: 'manual', correctAnswer: 'A', acceptedAnswers: ['A', 'a'], validatorType: 'choice' },
  { id: 'chem10-q5d', subjectId: 'chemistry', topicId: 'chem10-t1', questionTypeId: 'chem10-qt5', content: 'Lớp n = 2 gồm các phân lớp nào và chứa tối đa bao nhiêu electron?\nA. 2s; 2 electron\nB. 2s, 2p; 8 electron\nC. 2p, 2d; 10 electron\nD. 2s, 2p, 2d; 18 electron', difficulty: 'easy', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B', 'b'], validatorType: 'choice' },
  { id: 'chem10-q6c', subjectId: 'chemistry', topicId: 'chem10-t1', questionTypeId: 'chem10-qt6', content: 'Cấu hình electron của Na (Z = 11) là:\nA. $1s^22s^22p^63s^1$\nB. $1s^22s^22p^53s^2$\nC. $1s^22s^22p^6$\nD. $1s^22s^22p^63p^1$', difficulty: 'easy', sourceType: 'manual', correctAnswer: 'A', acceptedAnswers: ['A', 'a'], validatorType: 'choice' },
  { id: 'chem10-q6d', subjectId: 'chemistry', topicId: 'chem10-t1', questionTypeId: 'chem10-qt6', content: 'Theo quy tắc Hund, ba electron đầu tiên điền vào ba AO p như thế nào?\nA. Ghép đôi trong một AO trước.\nB. Phân bố độc thân vào ba AO với spin song song trước.\nC. Chỉ điền hai AO.\nD. Mỗi AO chứa ba electron.', difficulty: 'medium', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B', 'b'], validatorType: 'choice' },
  { id: 'chem10-q7c', subjectId: 'chemistry', topicId: 'chem10-t1', questionTypeId: 'chem10-qt7', content: 'Nguyên tử có lớp ngoài cùng $2s^22p^6$ được dự đoán là:\nA. Kim loại kiềm mạnh.\nB. Phi kim hoạt động mạnh.\nC. Khí hiếm tương đối trơ.\nD. Có xu hướng nhận thêm 6 electron.', difficulty: 'easy', sourceType: 'manual', correctAnswer: 'C', acceptedAnswers: ['C', 'c'], validatorType: 'choice' },
  { id: 'chem10-q7d', subjectId: 'chemistry', topicId: 'chem10-t1', questionTypeId: 'chem10-qt7', content: 'X có cấu hình lớp ngoài cùng $3s^23p^5$. Xu hướng tạo ion đơn nguyên tử hợp lí nhất là:\nA. Nhường 5 electron.\nB. Nhận 1 electron tạo $X^-$.\nC. Nhường 2 electron tạo $X^{2+}$.\nD. Không có electron hóa trị.', difficulty: 'medium', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B', 'b'], validatorType: 'choice' },
  { id: "chem10-q1-reinforce-concept", subjectId: 'chemistry', topicId: "chem10-t1", questionTypeId: "chem10-qt1", content: "Phát biểu nào phản ánh đúng trọng tâm của dạng “Thành phần cấu tạo nguyên tử & Các hạt cơ bản (H10-A01)”?\nA. 1. Ba loại hạt cơ bản cấu tạo nên nguyên tử: - Proton (p): Mang điện tích dương ($+1$ hoặc $+1,602 \\cdot 10^{-19}\\text{C}$), khối lượng tương đối $1\\text{ amu}$. Nằm ở hạt nhân. - Neutron (n): Không mang điện ($0$), khối lượng tương đối $1\\text{ amu}$. Nằm ở hạt nhân. - Electron (e): Mang điện tích âm ($-1$ hoặc $-1,602 \\cdot 10^{-19}\\text{C}$), khối lượng tương đối cực nhỏ ($0,00055\\text{ amu}$ $\\approx \\frac{1}{1837}$ khối lượng proton). Chuyển động ở lớp vỏ nguyên tử.\nB. Chỉ cần ghi nhớ đáp án mẫu, không cần xét dữ kiện.\nC. Mọi trường hợp đều cho cùng một kết quả, không có điều kiện áp dụng.\nD. Nội dung này không liên quan đến cấu tạo, tính chất hoặc phản ứng hóa học.", difficulty: 'medium', sourceType: 'manual', correctAnswer: 'A', acceptedAnswers: ['A', 'a'], validatorType: 'choice' },
  { id: "chem10-q1-reinforce-process", subjectId: 'chemistry', topicId: "chem10-t1", questionTypeId: "chem10-qt1", content: "Khi bắt đầu giải dạng “Thành phần cấu tạo nguyên tử & Các hạt cơ bản (H10-A01)”, thao tác nào phù hợp nhất?\nA. Chọn ngay phương án có nhiều công thức nhất.\nB. Bước 1: Nhận diện điện tích hạt nhân $Z$, trong nguyên tử luôn có $P = E = Z$.\nC. Thay đổi chỉ số hóa học để khớp kết quả mong muốn.\nD. Bỏ qua đơn vị, điều kiện và phạm vi dữ kiện.", difficulty: 'medium', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B', 'b'], validatorType: 'choice' },
  { id: "chem10-q1-reinforce-misconception", subjectId: 'chemistry', topicId: "chem10-t1", questionTypeId: "chem10-qt1", content: "Lỗi nào cần đặc biệt tránh khi làm dạng “Thành phần cấu tạo nguyên tử & Các hạt cơ bản (H10-A01)”?\nA. Kiểm tra lại đơn vị và điều kiện áp dụng.\nB. Đối chiếu kết luận với dữ kiện ban đầu.\nC. Cho rằng electron có khối lượng tương đương proton, dẫn đến suy luận sai rằng khối lượng nguyên tử phân bổ đều.\nD. Giải thích mối liên hệ giữa cấu tạo và tính chất.", difficulty: 'hard', sourceType: 'manual', correctAnswer: 'C', acceptedAnswers: ['C', 'c'], validatorType: 'choice' },
  { id: "chem10-q2-reinforce-concept", subjectId: 'chemistry', topicId: "chem10-t1", questionTypeId: "chem10-qt2", content: "Phát biểu nào phản ánh đúng trọng tâm của dạng “Nguyên tố hóa học & Kí hiệu nguyên tử (H10-A02)”?\nA. Chỉ cần ghi nhớ đáp án mẫu, không cần xét dữ kiện.\nB. 1. Nguyên tố hóa học: - Nguyên tố hóa học là tập hợp các nguyên tử có cùng số proton (cùng số điện tích hạt nhân Z). - Số proton là đặc trưng cốt lõi của nguyên tố. Thay đổi số proton sẽ tạo ra nguyên tố mới.\nC. Mọi trường hợp đều cho cùng một kết quả, không có điều kiện áp dụng.\nD. Nội dung này không liên quan đến cấu tạo, tính chất hoặc phản ứng hóa học.", difficulty: 'medium', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B', 'b'], validatorType: 'choice' },
  { id: "chem10-q2-reinforce-process", subjectId: 'chemistry', topicId: "chem10-t1", questionTypeId: "chem10-qt2", content: "Khi bắt đầu giải dạng “Nguyên tố hóa học & Kí hiệu nguyên tử (H10-A02)”, thao tác nào phù hợp nhất?\nA. Chọn ngay phương án có nhiều công thức nhất.\nB. Thay đổi chỉ số hóa học để khớp kết quả mong muốn.\nC. Bước 1: Xác định số hiệu nguyên tử $Z$ từ chỉ số dưới, và số khối $A$ từ chỉ số trên của kí hiệu nguyên tử.\nD. Bỏ qua đơn vị, điều kiện và phạm vi dữ kiện.", difficulty: 'medium', sourceType: 'manual', correctAnswer: 'C', acceptedAnswers: ['C', 'c'], validatorType: 'choice' },
  { id: "chem10-q2-reinforce-misconception", subjectId: 'chemistry', topicId: "chem10-t1", questionTypeId: "chem10-qt2", content: "Lỗi nào cần đặc biệt tránh khi làm dạng “Nguyên tố hóa học & Kí hiệu nguyên tử (H10-A02)”?\nA. Kiểm tra lại đơn vị và điều kiện áp dụng.\nB. Đối chiếu kết luận với dữ kiện ban đầu.\nC. Giải thích mối liên hệ giữa cấu tạo và tính chất.\nD. Nhầm lẫn vị trí của số khối A (chỉ số trên) và số hiệu Z (chỉ số dưới) trong kí hiệu nguyên tử.", difficulty: 'hard', sourceType: 'manual', correctAnswer: 'D', acceptedAnswers: ['D', 'd'], validatorType: 'choice' },
  { id: "chem10-q3-reinforce-concept", subjectId: 'chemistry', topicId: "chem10-t1", questionTypeId: "chem10-qt3", content: "Phát biểu nào phản ánh đúng trọng tâm của dạng “Đồng vị & Nguyên tử khối trung bình (H10-A03)”?\nA. Chỉ cần ghi nhớ đáp án mẫu, không cần xét dữ kiện.\nB. Mọi trường hợp đều cho cùng một kết quả, không có điều kiện áp dụng.\nC. 1. Đồng vị: - Đồng vị là các nguyên tử có cùng số proton (cùng Z) nhưng khác số neutron (dẫn đến khác số khối A). - Ví dụ: Hydrogen có 3 đồng vị: $_{1}^{1}\\text{H}$ (Protium), $_{1}^{2}\\text{H}$ (Deuterium), $_{1}^{3}\\text{H}$ (Tritium).\nD. Nội dung này không liên quan đến cấu tạo, tính chất hoặc phản ứng hóa học.", difficulty: 'medium', sourceType: 'manual', correctAnswer: 'C', acceptedAnswers: ['C', 'c'], validatorType: 'choice' },
  { id: "chem10-q3-reinforce-process", subjectId: 'chemistry', topicId: "chem10-t1", questionTypeId: "chem10-qt3", content: "Khi bắt đầu giải dạng “Đồng vị & Nguyên tử khối trung bình (H10-A03)”, thao tác nào phù hợp nhất?\nA. Chọn ngay phương án có nhiều công thức nhất.\nB. Thay đổi chỉ số hóa học để khớp kết quả mong muốn.\nC. Bỏ qua đơn vị, điều kiện và phạm vi dữ kiện.\nD. Bước 1: Trích xuất các cặp dữ liệu (số khối $A_i$, tỷ lệ phần trăm $x_i\\%$) từ đề bài hoặc từ phổ khối lượng.", difficulty: 'medium', sourceType: 'manual', correctAnswer: 'D', acceptedAnswers: ['D', 'd'], validatorType: 'choice' },
  { id: "chem10-q3-reinforce-misconception", subjectId: 'chemistry', topicId: "chem10-t1", questionTypeId: "chem10-qt3", content: "Lỗi nào cần đặc biệt tránh khi làm dạng “Đồng vị & Nguyên tử khối trung bình (H10-A03)”?\nA. Tính nguyên tử khối trung bình bằng cách lấy trung bình cộng đơn thuần của các số khối đồng vị (không nhân với phần trăm độ phổ biến).\nB. Kiểm tra lại đơn vị và điều kiện áp dụng.\nC. Đối chiếu kết luận với dữ kiện ban đầu.\nD. Giải thích mối liên hệ giữa cấu tạo và tính chất.", difficulty: 'hard', sourceType: 'manual', correctAnswer: 'A', acceptedAnswers: ['A', 'a'], validatorType: 'choice' },
  { id: "chem10-q4-reinforce-concept", subjectId: 'chemistry', topicId: "chem10-t1", questionTypeId: "chem10-qt4", content: "Phát biểu nào phản ánh đúng trọng tâm của dạng “Mô hình nguyên tử Rutherford–Bohr & Hiện đại (H10-A04)”?\nA. Chỉ cần ghi nhớ đáp án mẫu, không cần xét dữ kiện.\nB. Mọi trường hợp đều cho cùng một kết quả, không có điều kiện áp dụng.\nC. Nội dung này không liên quan đến cấu tạo, tính chất hoặc phản ứng hóa học.\nD. 1. Mô hình Rutherford–Bohr: - Mô tả electron chuyển động xung quanh hạt nhân theo những quỹ đạo tròn hoặc bầu dục xác định, giống như các hành tinh quay quanh Mặt Trời. - Năng lượng của electron trên mỗi quỹ đạo là xác định. Khi hấp thụ hay giải phóng năng lượng, electron nhảy giữa các quỹ đạo.", difficulty: 'medium', sourceType: 'manual', correctAnswer: 'D', acceptedAnswers: ['D', 'd'], validatorType: 'choice' },
  { id: "chem10-q4-reinforce-process", subjectId: 'chemistry', topicId: "chem10-t1", questionTypeId: "chem10-qt4", content: "Khi bắt đầu giải dạng “Mô hình nguyên tử Rutherford–Bohr & Hiện đại (H10-A04)”, thao tác nào phù hợp nhất?\nA. Bước 1: Nắm rõ bản chất của mô hình Bohr: quỹ đạo xác định, tính chất cơ học cổ điển.\nB. Chọn ngay phương án có nhiều công thức nhất.\nC. Thay đổi chỉ số hóa học để khớp kết quả mong muốn.\nD. Bỏ qua đơn vị, điều kiện và phạm vi dữ kiện.", difficulty: 'medium', sourceType: 'manual', correctAnswer: 'A', acceptedAnswers: ['A', 'a'], validatorType: 'choice' },
  { id: "chem10-q4-reinforce-misconception", subjectId: 'chemistry', topicId: "chem10-t1", questionTypeId: "chem10-qt4", content: "Lỗi nào cần đặc biệt tránh khi làm dạng “Mô hình nguyên tử Rutherford–Bohr & Hiện đại (H10-A04)”?\nA. Kiểm tra lại đơn vị và điều kiện áp dụng.\nB. Nhầm lẫn orbital là một đường biên giới cứng hoặc đường tròn vật lý mà electron chạy dọc theo đó.\nC. Đối chiếu kết luận với dữ kiện ban đầu.\nD. Giải thích mối liên hệ giữa cấu tạo và tính chất.", difficulty: 'hard', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B', 'b'], validatorType: 'choice' },
  { id: "chem10-q5-reinforce-concept", subjectId: 'chemistry', topicId: "chem10-t1", questionTypeId: "chem10-qt5", content: "Phát biểu nào phản ánh đúng trọng tâm của dạng “Orbital, Lớp và Phân lớp electron (H10-A05)”?\nA. 1. Hình dạng orbital nguyên tử (AO): - AO s: Có dạng hình cầu, đối xứng trong không gian. - AO p: Có dạng hình số 8 nổi (hình quả tạ đôi), gồm 3 orbital định hướng theo 3 trục tọa độ: $p_x, p_y, p_z$.\nB. Chỉ cần ghi nhớ đáp án mẫu, không cần xét dữ kiện.\nC. Mọi trường hợp đều cho cùng một kết quả, không có điều kiện áp dụng.\nD. Nội dung này không liên quan đến cấu tạo, tính chất hoặc phản ứng hóa học.", difficulty: 'medium', sourceType: 'manual', correctAnswer: 'A', acceptedAnswers: ['A', 'a'], validatorType: 'choice' },
  { id: "chem10-q5-reinforce-process", subjectId: 'chemistry', topicId: "chem10-t1", questionTypeId: "chem10-qt5", content: "Khi bắt đầu giải dạng “Orbital, Lớp và Phân lớp electron (H10-A05)”, thao tác nào phù hợp nhất?\nA. Chọn ngay phương án có nhiều công thức nhất.\nB. Bước 1: Xác định số lớp $n$ hoặc phân lớp cần xét.\nC. Thay đổi chỉ số hóa học để khớp kết quả mong muốn.\nD. Bỏ qua đơn vị, điều kiện và phạm vi dữ kiện.", difficulty: 'medium', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B', 'b'], validatorType: 'choice' },
  { id: "chem10-q5-reinforce-misconception", subjectId: 'chemistry', topicId: "chem10-t1", questionTypeId: "chem10-qt5", content: "Lỗi nào cần đặc biệt tránh khi làm dạng “Orbital, Lớp và Phân lớp electron (H10-A05)”?\nA. Kiểm tra lại đơn vị và điều kiện áp dụng.\nB. Đối chiếu kết luận với dữ kiện ban đầu.\nC. Nhầm lẫn lớp electron (ví dụ lớp 3) và phân lớp electron (ví dụ phân lớp 3p).\nD. Giải thích mối liên hệ giữa cấu tạo và tính chất.", difficulty: 'hard', sourceType: 'manual', correctAnswer: 'C', acceptedAnswers: ['C', 'c'], validatorType: 'choice' },
  { id: "chem10-q6-reinforce-concept", subjectId: 'chemistry', topicId: "chem10-t1", questionTypeId: "chem10-qt6", content: "Phát biểu nào phản ánh đúng trọng tâm của dạng “Cấu hình electron & Sơ đồ ô orbital (H10-A06)”?\nA. Chỉ cần ghi nhớ đáp án mẫu, không cần xét dữ kiện.\nB. 1. Các nguyên lí và quy tắc phân bố electron: - Nguyên lí vững bền: Electron điền lần lượt vào các orbital từ mức năng lượng thấp đến cao: $1s \\rightarrow 2s \\rightarrow 2p \\rightarrow 3s \\rightarrow 3p \\rightarrow 4s \\rightarrow 3d...$ - Nguyên lí Pauli: Trong một ô orbital chỉ chứa tối đa 2 electron có chiều tự quay ngược nhau ($\\uparrow\\downarrow$). - Quy tắc Hund: Trong cùng một phân lớp, các electron phân bố sao cho số electron độc thân là tối đa và có chiều tự quay giống nhau ($\\uparrow \\ \\uparrow \\ \\uparrow$).\nC. Mọi trường hợp đều cho cùng một kết quả, không có điều kiện áp dụng.\nD. Nội dung này không liên quan đến cấu tạo, tính chất hoặc phản ứng hóa học.", difficulty: 'medium', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B', 'b'], validatorType: 'choice' },
  { id: "chem10-q6-reinforce-process", subjectId: 'chemistry', topicId: "chem10-t1", questionTypeId: "chem10-qt6", content: "Khi bắt đầu giải dạng “Cấu hình electron & Sơ đồ ô orbital (H10-A06)”, thao tác nào phù hợp nhất?\nA. Chọn ngay phương án có nhiều công thức nhất.\nB. Thay đổi chỉ số hóa học để khớp kết quả mong muốn.\nC. Bước 1: Xác định số electron của nguyên tử (bằng Z) hoặc ion (Z hiệu chỉnh theo điện tích).\nD. Bỏ qua đơn vị, điều kiện và phạm vi dữ kiện.", difficulty: 'medium', sourceType: 'manual', correctAnswer: 'C', acceptedAnswers: ['C', 'c'], validatorType: 'choice' },
  { id: "chem10-q6-reinforce-misconception", subjectId: 'chemistry', topicId: "chem10-t1", questionTypeId: "chem10-qt6", content: "Lỗi nào cần đặc biệt tránh khi làm dạng “Cấu hình electron & Sơ đồ ô orbital (H10-A06)”?\nA. Kiểm tra lại đơn vị và điều kiện áp dụng.\nB. Đối chiếu kết luận với dữ kiện ban đầu.\nC. Giải thích mối liên hệ giữa cấu tạo và tính chất.\nD. Viết cấu hình electron mà không sắp xếp lại các phân lớp theo lớp.", difficulty: 'hard', sourceType: 'manual', correctAnswer: 'D', acceptedAnswers: ['D', 'd'], validatorType: 'choice' },
  { id: "chem10-q7-reinforce-concept", subjectId: 'chemistry', topicId: "chem10-t1", questionTypeId: "chem10-qt7", content: "Phát biểu nào phản ánh đúng trọng tâm của dạng “Cấu hình electron & Tính chất hóa học nguyên tố (H10-A07)”?\nA. Chỉ cần ghi nhớ đáp án mẫu, không cần xét dữ kiện.\nB. Mọi trường hợp đều cho cùng một kết quả, không có điều kiện áp dụng.\nC. 1. Số electron lớp ngoài cùng quyết định tính chất: - 1, 2, 3 e lớp ngoài cùng: Thường là Kim loại (dễ nhường e để đạt octet), trừ H, He và B. - 5, 6, 7 e lớp ngoài cùng: Thường là Phi kim (dễ nhận hoặc dùng chung e để đạt octet). - 8 e lớp ngoài cùng (và He có 2e): Là Khí hiếm (trạng thái cấu hình bền vững, trơ về mặt hóa học). - 4 e lớp ngoài cùng: Có thể là kim loại (nếu ở chu kì lớn như Pb, Sn) hoặc phi kim (nếu ở chu kì nhỏ như C, Si).\nD. Nội dung này không liên quan đến cấu tạo, tính chất hoặc phản ứng hóa học.", difficulty: 'medium', sourceType: 'manual', correctAnswer: 'C', acceptedAnswers: ['C', 'c'], validatorType: 'choice' },
  { id: "chem10-q7-reinforce-process", subjectId: 'chemistry', topicId: "chem10-t1", questionTypeId: "chem10-qt7", content: "Khi bắt đầu giải dạng “Cấu hình electron & Tính chất hóa học nguyên tố (H10-A07)”, thao tác nào phù hợp nhất?\nA. Chọn ngay phương án có nhiều công thức nhất.\nB. Thay đổi chỉ số hóa học để khớp kết quả mong muốn.\nC. Bỏ qua đơn vị, điều kiện và phạm vi dữ kiện.\nD. Bước 1: Viết chính xác cấu hình electron nguyên tử.", difficulty: 'medium', sourceType: 'manual', correctAnswer: 'D', acceptedAnswers: ['D', 'd'], validatorType: 'choice' },
  { id: "chem10-q7-reinforce-misconception", subjectId: 'chemistry', topicId: "chem10-t1", questionTypeId: "chem10-qt7", content: "Lỗi nào cần đặc biệt tránh khi làm dạng “Cấu hình electron & Tính chất hóa học nguyên tố (H10-A07)”?\nA. Đếm nhầm electron ở phân lớp sát ngoài cùng (như d) vào electron lớp ngoài cùng.\nB. Kiểm tra lại đơn vị và điều kiện áp dụng.\nC. Đối chiếu kết luận với dữ kiện ban đầu.\nD. Giải thích mối liên hệ giữa cấu tạo và tính chất.", difficulty: 'hard', sourceType: 'manual', correctAnswer: 'A', acceptedAnswers: ['A', 'a'], validatorType: 'choice' }
];
