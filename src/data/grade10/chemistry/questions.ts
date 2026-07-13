import { Question } from '@/types';

export const g10ChemistryQuestions: Question[] = [
  {
    id: 'chem10-q-intro-object-1', subjectId: 'chemistry', topicId: 'chem10-t0', questionTypeId: 'chem10-qt-intro-object',
    content: 'Trong phát biểu “Một chai nước khoáng gồm vỏ chai bằng nhựa và phần nước chứa các chất khoáng hòa tan”, cách phân loại nào đúng?\nA. Chai nước khoáng, nhựa và nước đều là vật thể.\nB. Chai nước khoáng là vật thể; nhựa, nước và các chất khoáng là những chất.\nC. Nhựa là vật thể; chai nước khoáng và nước là những chất.\nD. Chỉ những chất khoáng mới thuộc phạm vi nghiên cứu của hóa học.',
    difficulty: 'easy', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B', 'b'], validatorType: 'choice'
  },
  {
    id: 'chem10-q-intro-object-2', subjectId: 'chemistry', topicId: 'chem10-t0', questionTypeId: 'chem10-qt-intro-object',
    content: 'Khi viên sủi được thả vào nước, học sinh ghi: “Có nhiều bọt khí thoát ra; các tiểu phân trong viên sủi đã phản ứng và tạo thành chất khí.” Phần nào là quan sát trực tiếp?\nA. Có nhiều bọt khí thoát ra.\nB. Các tiểu phân đã phản ứng.\nC. Một chất khí mới chắc chắn đã được tạo thành.\nD. Cả ba ý đều là quan sát trực tiếp.',
    difficulty: 'easy', sourceType: 'manual', correctAnswer: 'A', acceptedAnswers: ['A', 'a'], validatorType: 'choice'
  },
  {
    id: 'chem10-q-intro-inquiry-1', subjectId: 'chemistry', topicId: 'chem10-t0', questionTypeId: 'chem10-qt-intro-inquiry',
    content: 'Một học sinh khảo sát ảnh hưởng của nhiệt độ nước đến thời gian viên sủi phản ứng hết. Em dùng các cốc nước ở 10 °C, 30 °C và 50 °C, giữ nguyên lượng nước và loại viên sủi. Biến phụ thuộc trong thí nghiệm là gì?\nA. Nhiệt độ nước.\nB. Thời gian viên sủi phản ứng hết.\nC. Lượng nước trong mỗi cốc.\nD. Loại viên sủi.',
    difficulty: 'easy', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B', 'b'], validatorType: 'choice'
  },
  {
    id: 'chem10-q-intro-inquiry-2', subjectId: 'chemistry', topicId: 'chem10-t0', questionTypeId: 'chem10-qt-intro-inquiry',
    content: 'Trong thí nghiệm trên, viên sủi phản ứng hết nhanh nhất ở 50 °C. Kết luận nào phù hợp nhất với dữ liệu?\nA. Nhiệt độ cao làm phản ứng nhanh hơn trong phạm vi điều kiện đã khảo sát.\nB. Nước 50 °C luôn tạo ra nhiều sản phẩm hơn nước 10 °C.\nC. Mọi phản ứng hóa học đều nhanh nhất ở đúng 50 °C.\nD. Nhiệt độ là yếu tố duy nhất ảnh hưởng đến mọi phản ứng.',
    difficulty: 'medium', sourceType: 'manual', correctAnswer: 'A', acceptedAnswers: ['A', 'a'], validatorType: 'choice'
  },
  {
    id: 'chem10-q01',
    subjectId: 'chemistry',
    topicId: 'chem10-t0',
    questionTypeId: 'chem10-qt01',
    content: 'Đốt cháy hoàn toàn $m$ gam kim loại Magnesium (Mg) trong khí Oxygen ($O_2$) dư, thu được 8,0 gam hợp chất Magnesium oxide (MgO). Biết khối lượng khí Oxygen tham gia phản ứng là 3,2 gam. Hãy tính giá trị của $m$ (khối lượng kim loại Mg ban đầu).',
    difficulty: 'easy',
    sourceType: 'manual',
    correctAnswer: '4.8',
    acceptedAnswers: ['4.8', '4,8'],
    validatorType: 'number'
  },
  {
    id: 'chem10-q02',
    subjectId: 'chemistry',
    topicId: 'chem10-t0',
    questionTypeId: 'chem10-qt02',
    content: 'Hãy tính thể tích khí Oxygen ($O_2$) đo ở điều kiện chuẩn (đkc: 25 °C, 1 bar) tương ứng với lượng chất là 0,4 mol.',
    difficulty: 'easy',
    sourceType: 'manual',
    correctAnswer: '9.916',
    acceptedAnswers: ['9.916', '9,916'],
    validatorType: 'number'
  },
  {
    id: 'chem10-q03',
    subjectId: 'chemistry',
    topicId: 'chem10-t0',
    questionTypeId: 'chem10-qt03',
    content: 'Hợp chất X được tạo bởi nguyên tố Phosphorus (hóa trị V) và Oxygen (hóa trị II). Công thức hóa học viết đúng của hợp chất X theo quy tắc hóa trị là:\nA. PO\nB. P2O5\nC. P5O2\nD. PO5',
    difficulty: 'easy',
    sourceType: 'manual',
    correctAnswer: 'B',
    acceptedAnswers: ['B', 'b'],
    validatorType: 'choice'
  },
  {
    id: 'chem10-q04',
    subjectId: 'chemistry',
    topicId: 'chem10-t0',
    questionTypeId: 'chem10-qt04',
    content: 'Cho 0,1 mol kim loại Iron (Fe) tác dụng với dung dịch chứa 0,3 mol Acid hydrochloric (HCl) theo phương trình phản ứng: Fe + 2HCl -> FeCl2 + H2. Sau khi phản ứng hoàn toàn, số mol khí Hydrogen (H2) sinh ra là bao nhiêu?',
    difficulty: 'easy',
    sourceType: 'manual',
    correctAnswer: '0.1',
    acceptedAnswers: ['0.1', '0,1'],
    validatorType: 'number'
  },
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
  { id: 'chem10-q8a', subjectId: 'chemistry', topicId: 'chem10-t2', questionTypeId: 'chem10-qt8', content: 'Các nguyên tố thuộc cùng một chu kì có đặc điểm chung nào?\nA. Cùng số proton.\nB. Cùng số lớp electron.\nC. Cùng số electron lớp ngoài cùng.\nD. Cùng tính kim loại.', difficulty: 'easy', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B','b'], validatorType: 'choice' },
  { id: 'chem10-q8b', subjectId: 'chemistry', topicId: 'chem10-t2', questionTypeId: 'chem10-qt8', content: 'Ô nguyên tố có số thứ tự 12 cho biết nguyên tử trung hòa của nguyên tố đó có bao nhiêu proton và electron?\nA. 12 proton, 12 electron.\nB. 12 proton, 24 electron.\nC. 24 proton, 12 electron.\nD. Không xác định được.', difficulty: 'easy', sourceType: 'manual', correctAnswer: 'A', acceptedAnswers: ['A','a'], validatorType: 'choice' },
  { id: 'chem10-q9a', subjectId: 'chemistry', topicId: 'chem10-t2', questionTypeId: 'chem10-qt9', content: 'Nguyên tử X có cấu hình $1s^2 2s^2 2p^6 3s^2$. X thuộc vị trí nào?\nA. Chu kì 2, nhóm IIA.\nB. Chu kì 3, nhóm IIA.\nC. Chu kì 3, nhóm IIIA.\nD. Chu kì 2, nhóm VIIIA.', difficulty: 'medium', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B','b'], validatorType: 'choice' },
  { id: 'chem10-q9b', subjectId: 'chemistry', topicId: 'chem10-t2', questionTypeId: 'chem10-qt9', content: 'Nguyên tố nhóm VIIA ở chu kì 3 có cấu hình electron lớp ngoài cùng nào?\nA. $3s^1$\nB. $3s^2 3p^5$\nC. $2s^2 2p^5$\nD. $3s^2 3p^6$', difficulty: 'medium', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B','b'], validatorType: 'choice' },
  { id: 'chem10-q10a', subjectId: 'chemistry', topicId: 'chem10-t2', questionTypeId: 'chem10-qt10', content: 'Trong chu kì 3, bán kính nguyên tử nhìn chung giảm từ Na đến Cl chủ yếu vì sao?\nA. Số lớp electron giảm dần.\nB. Điện tích hạt nhân tăng trong khi số lớp electron không đổi.\nC. Số neutron giảm.\nD. Electron lớp ngoài cùng biến mất.', difficulty: 'medium', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B','b'], validatorType: 'choice' },
  { id: 'chem10-q10b', subjectId: 'chemistry', topicId: 'chem10-t2', questionTypeId: 'chem10-qt10', content: 'Sắp xếp bán kính nguyên tử Li, Na, K theo chiều tăng dần.\nA. K < Na < Li.\nB. Li < Na < K.\nC. Na < Li < K.\nD. Li < K < Na.', difficulty: 'easy', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B','b'], validatorType: 'choice' },
  { id: 'chem10-q11a', subjectId: 'chemistry', topicId: 'chem10-t2', questionTypeId: 'chem10-qt11', content: 'Trong chu kì 3, phát biểu nào phù hợp với xu hướng chung từ Na đến Cl?\nA. Tính kim loại tăng, độ âm điện giảm.\nB. Tính kim loại giảm, tính phi kim và độ âm điện tăng.\nC. Cả tính kim loại và phi kim đều tăng.\nD. Không có quy luật.', difficulty: 'medium', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B','b'], validatorType: 'choice' },
  { id: 'chem10-q11b', subjectId: 'chemistry', topicId: 'chem10-t2', questionTypeId: 'chem10-qt11', content: 'Trong nhóm IA, nguyên tố nào có tính kim loại mạnh hơn theo xu hướng tuần hoàn?\nA. Li mạnh hơn K vì nhỏ hơn.\nB. K mạnh hơn Li vì electron ngoài cùng xa hạt nhân và dễ nhường hơn.\nC. Li và K như nhau.\nD. Không thể so sánh.', difficulty: 'medium', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B','b'], validatorType: 'choice' },
  { id: 'chem10-q12a', subjectId: 'chemistry', topicId: 'chem10-t2', questionTypeId: 'chem10-qt12', content: 'Trong chu kì 3, xu hướng tính chất oxide cao nhất từ Na sang Cl nhìn chung là gì?\nA. Acid → base.\nB. Base → lưỡng tính → acid.\nC. Tất cả đều trung tính.\nD. Tất cả đều là base mạnh.', difficulty: 'medium', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B','b'], validatorType: 'choice' },
  { id: 'chem10-q12b', subjectId: 'chemistry', topicId: 'chem10-t2', questionTypeId: 'chem10-qt12', content: 'Nội dung cốt lõi của định luật tuần hoàn là gì?\nA. Tính chất biến đổi ngẫu nhiên theo khối lượng nguyên tử.\nB. Tính chất các nguyên tố và hợp chất biến đổi tuần hoàn theo chiều tăng điện tích hạt nhân.\nC. Mọi nguyên tố trong một chu kì có tính chất giống nhau.\nD. Chỉ bán kính nguyên tử có tính tuần hoàn.', difficulty: 'easy', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B','b'], validatorType: 'choice' }
  ,{ id: 'chem10-q13a', subjectId: 'chemistry', topicId: 'chem10-t3', questionTypeId: 'chem10-qt13', content: 'Nguyên tử Na có cấu hình lớp ngoài cùng $3s^1$. Quá trình tạo ion phù hợp là:\nA. $Na+e\\rightarrow Na^-$\nB. $Na\\rightarrow Na^++e$\nC. $Na\\rightarrow Na^{2+}+2e$\nD. $Na+2e\\rightarrow Na^{2-}$', difficulty: 'easy', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B','b'], validatorType: 'choice' }
  ,{ id: 'chem10-q13b', subjectId: 'chemistry', topicId: 'chem10-t3', questionTypeId: 'chem10-qt13', content: 'Nguyên tử oxygen có 6 electron lớp ngoài cùng. Ion đơn nguyên tử thường gặp phù hợp nhất là:\nA. $O^+$\nB. $O^{2+}$\nC. $O^-$\nD. $O^{2-}$', difficulty: 'easy', sourceType: 'manual', correctAnswer: 'D', acceptedAnswers: ['D','d'], validatorType: 'choice' }
  ,{ id: 'chem10-q14a', subjectId: 'chemistry', topicId: 'chem10-t3', questionTypeId: 'chem10-qt14', content: 'Vì sao NaCl rắn không dẫn điện nhưng NaCl nóng chảy dẫn điện?\nA. Khi nóng chảy xuất hiện electron tự do.\nB. Trong chất rắn ion bị giữ tại nút mạng; khi nóng chảy ion chuyển động được.\nC. NaCl rắn không chứa ion.\nD. Nhiệt biến ion thành nguyên tử.', difficulty: 'medium', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B','b'], validatorType: 'choice' }
  ,{ id: 'chem10-q14b', subjectId: 'chemistry', topicId: 'chem10-t3', questionTypeId: 'chem10-qt14', content: 'Hợp chất tạo bởi $Mg^{2+}$ và $Cl^-$ có công thức tỉ lệ tối giản nào?\nA. MgCl\nB. MgCl$_2$\nC. Mg$_2$Cl\nD. Mg$_2$Cl$_2$', difficulty: 'easy', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B','b'], validatorType: 'choice' }
  ,{ id: 'chem10-q15a', subjectId: 'chemistry', topicId: 'chem10-t3', questionTypeId: 'chem10-qt15', content: 'Trong phân tử $N_2$, hai nguyên tử nitrogen dùng chung bao nhiêu cặp electron?\nA. 1\nB. 2\nC. 3\nD. 4', difficulty: 'easy', sourceType: 'manual', correctAnswer: 'C', acceptedAnswers: ['C','c'], validatorType: 'choice' }
  ,{ id: 'chem10-q15b', subjectId: 'chemistry', topicId: 'chem10-t3', questionTypeId: 'chem10-qt15', content: 'Phát biểu nào đúng về công thức Lewis của $H_2O$?\nA. Oxygen tạo hai liên kết O–H và còn hai cặp electron tự do.\nB. Oxygen tạo một liên kết và không có electron tự do.\nC. Hydrogen tạo liên kết đôi với oxygen.\nD. Phân tử được tạo bởi ion $H^+$ và $O^{2-}$.', difficulty: 'medium', sourceType: 'manual', correctAnswer: 'A', acceptedAnswers: ['A','a'], validatorType: 'choice' }
  ,{ id: 'chem10-q16a', subjectId: 'chemistry', topicId: 'chem10-t3', questionTypeId: 'chem10-qt16', content: 'Phát biểu nào đúng?\nA. Mọi phân tử có liên kết phân cực đều phân cực.\nB. Liên kết có thể phân cực nhưng các moment liên kết trong phân tử đối xứng có thể triệt tiêu.\nC. Độ phân cực không liên quan độ âm điện.\nD. Liên kết giữa hai nguyên tử khác nhau luôn là ion.', difficulty: 'medium', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B','b'], validatorType: 'choice' }
  ,{ id: 'chem10-q16b', subjectId: 'chemistry', topicId: 'chem10-t3', questionTypeId: 'chem10-qt16', content: 'Trong liên kết H–Cl, cặp electron liên kết lệch về Cl chủ yếu vì:\nA. H có nhiều neutron hơn.\nB. Cl có độ âm điện lớn hơn H.\nC. H có bán kính lớn hơn Cl.\nD. Cl luôn tạo ion trong mọi hợp chất.', difficulty: 'easy', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B','b'], validatorType: 'choice' }
  ,{ id: 'chem10-q17a', subjectId: 'chemistry', topicId: 'chem10-t3', questionTypeId: 'chem10-qt17', content: 'Phân biệt nào đúng trong nước lỏng?\nA. O–H trong một phân tử là liên kết hydrogen.\nB. O–H trong phân tử là cộng hóa trị; liên kết hydrogen chủ yếu hút giữa các phân tử nước.\nC. Cả hai đều là liên kết ion.\nD. Không có lực hút giữa các phân tử nước.', difficulty: 'medium', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B','b'], validatorType: 'choice' }
  ,{ id: 'chem10-q17b', subjectId: 'chemistry', topicId: 'chem10-t3', questionTypeId: 'chem10-qt17', content: 'Nước có nhiệt độ sôi cao bất thường so với nhiều phân tử nhỏ tương tự chủ yếu vì:\nA. Liên kết cộng hóa trị O–H bị phá hoàn toàn khi sôi.\nB. Giữa các phân tử nước có mạng liên kết hydrogen tương đối mạnh.\nC. Nước là hợp chất ion.\nD. Oxygen không có electron tự do.', difficulty: 'medium', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B','b'], validatorType: 'choice' }
  ,{ id: 'chem10-q18a', subjectId: 'chemistry', topicId: 'chem10-t4', questionTypeId: 'chem10-qt18', content: 'Số oxi hóa của sulfur trong $H_2SO_4$ là:\nA. +4\nB. +6\nC. −2\nD. 0', difficulty: 'easy', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B','b'], validatorType: 'choice' }
  ,{ id: 'chem10-q18b', subjectId: 'chemistry', topicId: 'chem10-t4', questionTypeId: 'chem10-qt18', content: 'Số oxi hóa của manganese trong ion $MnO_4^-$ là:\nA. +7\nB. +6\nC. +4\nD. −1', difficulty: 'medium', sourceType: 'manual', correctAnswer: 'A', acceptedAnswers: ['A','a'], validatorType: 'choice' }
  ,{ id: 'chem10-q19a', subjectId: 'chemistry', topicId: 'chem10-t4', questionTypeId: 'chem10-qt19', content: 'Quá trình $Fe^{2+}\\rightarrow Fe^{3+}+e$ là:\nA. Quá trình khử vì nhận electron.\nB. Quá trình oxi hóa vì nhường electron.\nC. Không phải redox.\nD. Quá trình tạo kết tủa.', difficulty: 'easy', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B','b'], validatorType: 'choice' }
  ,{ id: 'chem10-q19b', subjectId: 'chemistry', topicId: 'chem10-t4', questionTypeId: 'chem10-qt19', content: 'Trong quá trình $Cl_2+2e\\rightarrow2Cl^-$, chlorine đã:\nA. Nhường electron và bị oxi hóa.\nB. Nhận electron và bị khử.\nC. Giữ nguyên số oxi hóa.\nD. Nhận proton.', difficulty: 'easy', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B','b'], validatorType: 'choice' }
  ,{ id: 'chem10-q20a', subjectId: 'chemistry', topicId: 'chem10-t4', questionTypeId: 'chem10-qt20', content: 'Trong phản ứng $Zn+CuSO_4\\rightarrow ZnSO_4+Cu$, chất khử là:\nA. Zn\nB. $Cu^{2+}$ trong $CuSO_4$\nC. $SO_4^{2-}$\nD. Cu', difficulty: 'medium', sourceType: 'manual', correctAnswer: 'A', acceptedAnswers: ['A','a'], validatorType: 'choice' }
  ,{ id: 'chem10-q20b', subjectId: 'chemistry', topicId: 'chem10-t4', questionTypeId: 'chem10-qt20', content: 'Trong phản ứng trên, $Cu^{2+}$ là chất oxi hóa vì:\nA. Nhường electron và tăng số oxi hóa.\nB. Nhận electron và bị khử thành Cu.\nC. Không thay đổi.\nD. Cung cấp oxygen.', difficulty: 'medium', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B','b'], validatorType: 'choice' }
  ,{ id: 'chem10-q21a', subjectId: 'chemistry', topicId: 'chem10-t4', questionTypeId: 'chem10-qt21', content: 'Hệ số tối giản của $Al$ và $O_2$ trong phản ứng $Al+O_2\\rightarrow Al_2O_3$ lần lượt là:\nA. 2 và 1\nB. 4 và 3\nC. 3 và 2\nD. 2 và 3', difficulty: 'medium', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B','b'], validatorType: 'choice' }
  ,{ id: 'chem10-q21b', subjectId: 'chemistry', topicId: 'chem10-t4', questionTypeId: 'chem10-qt21', content: 'Trong phản ứng $Fe_2O_3+CO\\rightarrow Fe+CO_2$, phương trình cân bằng đúng là:\nA. $Fe_2O_3+CO\\rightarrow2Fe+CO_2$\nB. $Fe_2O_3+3CO\\rightarrow2Fe+3CO_2$\nC. $2Fe_2O_3+CO\\rightarrow4Fe+CO_2$\nD. $Fe_2O_3+2CO\\rightarrow2Fe+2CO_2$', difficulty: 'medium', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B','b'], validatorType: 'choice' }
  ,{ id: 'chem10-q22a', subjectId: 'chemistry', topicId: 'chem10-t5', questionTypeId: 'chem10-qt22', content: 'Khi một phản ứng làm cốc chứa ấm lên, nhận định phù hợp nhất là:\nA. Hệ đã nhận nhiệt từ môi trường.\nB. Hệ truyền năng lượng ra môi trường; phản ứng tỏa nhiệt.\nC. Không có trao đổi năng lượng.\nD. Phản ứng chắc chắn thu nhiệt.', difficulty: 'easy', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B','b'], validatorType: 'choice' }
  ,{ id: 'chem10-q22b', subjectId: 'chemistry', topicId: 'chem10-t5', questionTypeId: 'chem10-qt22', content: 'Quá trình phân hủy cần cung cấp nhiệt liên tục được phân loại là:\nA. Thu nhiệt vì hệ nhận năng lượng.\nB. Tỏa nhiệt vì môi trường nóng.\nC. Không đổi năng lượng.\nD. Luôn có ΔH = 0.', difficulty: 'easy', sourceType: 'manual', correctAnswer: 'A', acceptedAnswers: ['A','a'], validatorType: 'choice' }
  ,{ id: 'chem10-q23a', subjectId: 'chemistry', topicId: 'chem10-t5', questionTypeId: 'chem10-qt23', content: 'Một phản ứng có $H_{sản phẩm}=120$ kJ và $H_{chất đầu}=200$ kJ. ΔH và loại phản ứng là:\nA. +80 kJ, thu nhiệt.\nB. −80 kJ, tỏa nhiệt.\nC. +320 kJ, thu nhiệt.\nD. −320 kJ, tỏa nhiệt.', difficulty: 'easy', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B','b'], validatorType: 'choice' }
  ,{ id: 'chem10-q23b', subjectId: 'chemistry', topicId: 'chem10-t5', questionTypeId: 'chem10-qt23', content: 'Nếu $A\\rightarrow B$ có ΔH = −50 kJ thì $2B\\rightarrow2A$ có ΔH bằng:\nA. −50 kJ\nB. +50 kJ\nC. +100 kJ\nD. −100 kJ', difficulty: 'medium', sourceType: 'manual', correctAnswer: 'C', acceptedAnswers: ['C','c'], validatorType: 'choice' }
  ,{ id: 'chem10-q24a', subjectId: 'chemistry', topicId: 'chem10-t5', questionTypeId: 'chem10-qt24', content: 'Cho phản ứng $C+O_2\\rightarrow CO_2$, biết $\\Delta_fH^\\circ(CO_2)=-394$ kJ/mol, còn C và $O_2$ ở trạng thái chuẩn có ΔfH° = 0. ΔH phản ứng là:\nA. −394 kJ\nB. +394 kJ\nC. 0\nD. −788 kJ', difficulty: 'medium', sourceType: 'manual', correctAnswer: 'A', acceptedAnswers: ['A','a'], validatorType: 'choice' }
  ,{ id: 'chem10-q24b', subjectId: 'chemistry', topicId: 'chem10-t5', questionTypeId: 'chem10-qt24', content: 'Trong công thức tính ΔH từ enthalpy tạo thành, thao tác đúng là:\nA. Tổng chất đầu trừ tổng sản phẩm.\nB. Tổng sản phẩm trừ tổng chất đầu, có nhân hệ số.\nC. Cộng tất cả giá trị không xét hệ số.\nD. Chỉ dùng chất có ΔfH° âm.', difficulty: 'easy', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B','b'], validatorType: 'choice' }
  ,{ id: 'chem10-q25a', subjectId: 'chemistry', topicId: 'chem10-t5', questionTypeId: 'chem10-qt25', content: 'Phát biểu nào đúng về năng lượng liên kết?\nA. Phá liên kết giải phóng năng lượng.\nB. Tạo liên kết luôn cần hấp thụ năng lượng.\nC. Phá liên kết cần năng lượng; tạo liên kết giải phóng năng lượng.\nD. Cả hai quá trình luôn có ΔH = 0.', difficulty: 'easy', sourceType: 'manual', correctAnswer: 'C', acceptedAnswers: ['C','c'], validatorType: 'choice' }
  ,{ id: 'chem10-q25b', subjectId: 'chemistry', topicId: 'chem10-t5', questionTypeId: 'chem10-qt25', content: 'Một phản ứng cần 500 kJ để phá các liên kết và giải phóng 650 kJ khi tạo liên kết mới. ΔH gần đúng là:\nA. +1150 kJ\nB. −1150 kJ\nC. +150 kJ\nD. −150 kJ', difficulty: 'medium', sourceType: 'manual', correctAnswer: 'D', acceptedAnswers: ['D','d'], validatorType: 'choice' }
  ,{ id: 'chem10-q26a', subjectId: 'chemistry', topicId: 'chem10-t6', questionTypeId: 'chem10-qt26', content: 'Nồng độ A giảm từ 0,80 M xuống 0,50 M trong 10 s. Tốc độ giảm trung bình của A là:\nA. 0,03 M/s\nB. −0,03 M/s\nC. 0,30 M/s\nD. 3,0 M/s', difficulty: 'easy', sourceType: 'manual', correctAnswer: 'A', acceptedAnswers: ['A','a'], validatorType: 'choice' }
  ,{ id: 'chem10-q26b', subjectId: 'chemistry', topicId: 'chem10-t6', questionTypeId: 'chem10-qt26', content: 'Nồng độ sản phẩm tăng 0,24 M trong 12 s. Tốc độ tạo sản phẩm trung bình là:\nA. 2,0 M/s\nB. 0,02 M/s\nC. −0,02 M/s\nD. 0,12 M/s', difficulty: 'easy', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B','b'], validatorType: 'choice' }
  ,{ id: 'chem10-q27a', subjectId: 'chemistry', topicId: 'chem10-t6', questionTypeId: 'chem10-qt27', content: 'Trên đồ thị nồng độ–thời gian, đường nồng độ chất đầu phản ứng thường:\nA. Tăng liên tục.\nB. Giảm và thường phẳng dần.\nC. Luôn nằm ngang.\nD. Tăng rồi giảm ngẫu nhiên.', difficulty: 'easy', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B','b'], validatorType: 'choice' }
  ,{ id: 'chem10-q27b', subjectId: 'chemistry', topicId: 'chem10-t6', questionTypeId: 'chem10-qt27', content: 'Trên cùng đồ thị, đoạn nào biểu thị phản ứng nhanh hơn?\nA. Đoạn có độ dốc theo độ lớn lớn hơn.\nB. Đoạn nằm cao hơn bất kể độ dốc.\nC. Đoạn nằm ngang.\nD. Mọi đoạn như nhau.', difficulty: 'medium', sourceType: 'manual', correctAnswer: 'A', acceptedAnswers: ['A','a'], validatorType: 'choice' }
  ,{ id: 'chem10-q28a', subjectId: 'chemistry', topicId: 'chem10-t6', questionTypeId: 'chem10-qt28', content: 'Bột đá vôi phản ứng với acid nhanh hơn viên đá vôi cùng khối lượng chủ yếu vì:\nA. Bột có khối lượng lớn hơn.\nB. Bột có diện tích tiếp xúc lớn hơn.\nC. Bột làm thay đổi ΔH.\nD. Bột tạo sản phẩm khác.', difficulty: 'easy', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B','b'], validatorType: 'choice' }
  ,{ id: 'chem10-q28b', subjectId: 'chemistry', topicId: 'chem10-t6', questionTypeId: 'chem10-qt28', content: 'Tăng nhiệt độ thường làm phản ứng nhanh hơn vì:\nA. Mọi va chạm đều trở thành hiệu quả.\nB. Tăng tỉ lệ hạt có đủ năng lượng và tăng tần suất va chạm.\nC. Làm ΔH luôn âm.\nD. Luôn tăng lượng sản phẩm cuối cùng.', difficulty: 'medium', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B','b'], validatorType: 'choice' }
  ,{ id: 'chem10-q29a', subjectId: 'chemistry', topicId: 'chem10-t6', questionTypeId: 'chem10-qt29', content: 'Chất xúc tác làm tăng tốc độ chủ yếu bằng cách:\nA. Làm ΔH âm hơn.\nB. Tạo con đường có năng lượng hoạt hóa thấp hơn.\nC. Tăng khối lượng sản phẩm.\nD. Bị tiêu hao hoàn toàn.', difficulty: 'medium', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B','b'], validatorType: 'choice' }
  ,{ id: 'chem10-q29b', subjectId: 'chemistry', topicId: 'chem10-t6', questionTypeId: 'chem10-qt29', content: 'Muốn khảo sát ảnh hưởng của nhiệt độ tới tốc độ viên sủi, thiết kế nào công bằng nhất?\nA. Thay cả nhiệt độ, lượng nước và kích thước viên.\nB. Chỉ thay nhiệt độ; giữ lượng nước, loại và kích thước viên như nhau.\nC. Dùng mỗi nhiệt độ một loại viên khác nhau.\nD. Không cần đo thời gian.', difficulty: 'easy', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B','b'], validatorType: 'choice' }
  ,{ id: 'chem10-q30a', subjectId: 'chemistry', topicId: 'chem10-t7', questionTypeId: 'chem10-qt30', content: 'Cấu hình electron lớp ngoài cùng chung của halogen là:\nA. $ns^1$\nB. $ns^2np^5$\nC. $ns^2np^6$\nD. $ns^2np^3$', difficulty: 'easy', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B','b'], validatorType: 'choice' }
  ,{ id: 'chem10-q30b', subjectId: 'chemistry', topicId: 'chem10-t7', questionTypeId: 'chem10-qt30', content: 'Đi xuống nhóm VIIA từ F đến I, xu hướng chung đúng là:\nA. Tính oxi hóa tăng.\nB. Bán kính giảm.\nC. Tính oxi hóa giảm và nhiệt độ sôi thường tăng.\nD. Mọi chất đều ở thể khí.', difficulty: 'medium', sourceType: 'manual', correctAnswer: 'C', acceptedAnswers: ['C','c'], validatorType: 'choice' }
  ,{ id: 'chem10-q31a', subjectId: 'chemistry', topicId: 'chem10-t7', questionTypeId: 'chem10-qt31', content: 'Phản ứng nào xảy ra?\nA. $Br_2+2Cl^-\\rightarrow2Br^-+Cl_2$\nB. $Cl_2+2Br^-\\rightarrow2Cl^-+Br_2$\nC. $I_2+2Cl^-\\rightarrow2I^-+Cl_2$\nD. Không phản ứng nào.', difficulty: 'medium', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B','b'], validatorType: 'choice' }
  ,{ id: 'chem10-q31b', subjectId: 'chemistry', topicId: 'chem10-t7', questionTypeId: 'chem10-qt31', content: 'Trong phản ứng $Cl_2+2Br^-\\rightarrow2Cl^-+Br_2$, chất oxi hóa là:\nA. $Br^-$\nB. $Cl_2$\nC. $Cl^-$\nD. $Br_2$', difficulty: 'medium', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B','b'], validatorType: 'choice' }
  ,{ id: 'chem10-q32a', subjectId: 'chemistry', topicId: 'chem10-t7', questionTypeId: 'chem10-qt32', content: 'Chlorine tác dụng với nước tạo chủ yếu:\nA. HCl và HClO\nB. HCl và $O_2$\nC. $Cl^-$ duy nhất\nD. NaCl và NaClO', difficulty: 'medium', sourceType: 'manual', correctAnswer: 'A', acceptedAnswers: ['A','a'], validatorType: 'choice' }
  ,{ id: 'chem10-q32b', subjectId: 'chemistry', topicId: 'chem10-t7', questionTypeId: 'chem10-qt32', content: 'Sản phẩm của $Cl_2$ với NaOH lạnh, loãng là:\nA. NaCl và NaClO\nB. Chỉ NaCl\nC. NaCl và $O_2$\nD. HCl và HClO', difficulty: 'medium', sourceType: 'manual', correctAnswer: 'A', acceptedAnswers: ['A','a'], validatorType: 'choice' }
  ,{ id: 'chem10-q33a', subjectId: 'chemistry', topicId: 'chem10-t7', questionTypeId: 'chem10-qt33', content: 'Vì sao HF là acid yếu hơn HCl trong nước?\nA. F không âm điện.\nB. Liên kết H–F rất bền, khó phân li hơn.\nC. HF là hợp chất ion.\nD. HCl có liên kết hydrogen mạnh hơn.', difficulty: 'medium', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B','b'], validatorType: 'choice' }
  ,{ id: 'chem10-q33b', subjectId: 'chemistry', topicId: 'chem10-t7', questionTypeId: 'chem10-qt33', content: 'Thứ tự tăng dần độ mạnh acid trong nước là:\nA. HI < HBr < HCl < HF\nB. HF < HCl < HBr < HI\nC. HCl < HF < HI < HBr\nD. Tất cả bằng nhau', difficulty: 'easy', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B','b'], validatorType: 'choice' }
  ,{ id: 'chem10-q34a', subjectId: 'chemistry', topicId: 'chem10-t7', questionTypeId: 'chem10-qt34', content: 'Thêm $AgNO_3$ vào dung dịch chứa $Cl^-$ thu được:\nA. AgCl kết tủa trắng\nB. AgBr vàng nhạt\nC. AgI vàng\nD. Không hiện tượng', difficulty: 'easy', sourceType: 'manual', correctAnswer: 'A', acceptedAnswers: ['A','a'], validatorType: 'choice' }
  ,{ id: 'chem10-q34b', subjectId: 'chemistry', topicId: 'chem10-t7', questionTypeId: 'chem10-qt34', content: 'Phương trình ion rút gọn nhận biết bromide là:\nA. $Ag^++Br^-\\rightarrow AgBr\\downarrow$\nB. $Ag+Br\\rightarrow AgBr$\nC. $Ag^-+Br^+\\rightarrow AgBr$\nD. $2Ag^++Br_2\\rightarrow2AgBr$', difficulty: 'medium', sourceType: 'manual', correctAnswer: 'A', acceptedAnswers: ['A','a'], validatorType: 'choice' }
];
