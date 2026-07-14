import type { Question } from '@/types';

export const m0Questions: Question[] = [
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
    content: 'Đốt cháy hoàn toàn $m$ gam kim loại Magnesium (Mg) trong khí Oxygen ($O_2$) dư, thu thu được 8,0 gam hợp chất Magnesium oxide (MgO). Biết khối lượng khí Oxygen tham gia phản ứng là 3,2 gam. Hãy tính giá trị của $m$ (khối lượng kim loại Mg ban đầu).',
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
    id: 'chem10-qintro-object-3',
    subjectId: 'chemistry', topicId: 'chem10-t0', questionTypeId: 'chem10-qt-intro-object',
    content: 'Trong chiếc thìa bằng thép không gỉ, cách gọi nào đúng?\nA. Thìa là chất, thép là vật thể.\nB. Thìa là vật thể, thép không gỉ là chất tạo nên vật thể.\nC. Cả thìa và thép đều là nguyên tố.\nD. Thép chỉ là một biến đổi hóa học.',
    difficulty: 'easy', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B', 'b'], validatorType: 'choice'
  },
  {
    id: 'chem10-qintro-object-4',
    subjectId: 'chemistry', topicId: 'chem10-t0', questionTypeId: 'chem10-qt-intro-object',
    content: 'Câu hỏi nào tập trung vào cấu trúc của chất?\nA. Nước sôi ở nhiệt độ nào?\nB. Phân tử nước gồm các nguyên tử liên kết và sắp xếp ra sao?\nC. Có bao nhiêu mililít nước trong cốc?\nD. Cốc có chiều cao bao nhiêu?',
    difficulty: 'medium', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B', 'b'], validatorType: 'choice'
  },
  {
    id: 'chem10-qintro-inquiry-3',
    subjectId: 'chemistry', topicId: 'chem10-t0', questionTypeId: 'chem10-qt-intro-inquiry',
    content: 'Muốn khảo sát ảnh hưởng của diện tích bề mặt đá vôi đến tốc độ phản ứng với acid, thiết kế nào công bằng nhất?\nA. Đổi cả khối lượng, nhiệt độ và kích thước đá.\nB. Dùng cùng khối lượng đá, cùng acid và nhiệt độ; chỉ thay kích thước hạt.\nC. Chỉ quan sát một mẫu bột đá.\nD. Dùng hai loại acid khác nhau.',
    difficulty: 'medium', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B', 'b'], validatorType: 'choice'
  },
  {
    id: 'chem10-qintro-inquiry-4',
    subjectId: 'chemistry', topicId: 'chem10-t0', questionTypeId: 'chem10-qt-intro-inquiry',
    content: 'Ba lần đo thời gian phản ứng cho kết quả 42 s, 41 s và 88 s. Cách xử lí hợp lí nhất là gì?\nA. Bỏ 88 s ngay mà không kiểm tra.\nB. Chỉ dùng lần 88 s.\nC. Kiểm tra nguyên nhân ngoại lệ, lặp lại phép đo rồi mới quyết định cách xử lí.\nD. Cộng ba số và khẳng định tuyệt đối.',
    difficulty: 'hard', sourceType: 'manual', correctAnswer: 'C', acceptedAnswers: ['C', 'c'], validatorType: 'choice'
  },
  {
    id: 'chem10-q01c',
    subjectId: 'chemistry', topicId: 'chem10-t0', questionTypeId: 'chem10-qt01',
    content: 'Hệ số nguyên tối giản của phương trình $Al+O_2\\rightarrow Al_2O_3$ là:\nA. 2, 1, 1\nB. 4, 3, 2\nC. 2, 3, 1\nD. 1, 1, 1',
    difficulty: 'easy', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B', 'b'], validatorType: 'choice'
  },
  {
    id: 'chem10-q01d',
    subjectId: 'chemistry', topicId: 'chem10-t0', questionTypeId: 'chem10-qt01',
    content: 'Nhiệt phân 25,0 g chất A thu được 14,0 g chất rắn B và khí C. Khối lượng C là:\nA. 9,0 g\nB. 11,0 g\nC. 14,0 g\nD. 39,0 g',
    difficulty: 'easy', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B', 'b'], validatorType: 'choice'
  },
  {
    id: 'chem10-q01e',
    subjectId: 'chemistry', topicId: 'chem10-t0', questionTypeId: 'chem10-qt01',
    content: 'Khi cân bằng phương trình, thao tác nào làm thay đổi bản chất chất?\nA. Đặt hệ số 2 trước $H_2O$.\nB. Đổi $H_2O$ thành $H_2O_2$.\nC. Rút gọn các hệ số cùng chia hết.\nD. Kiểm tra số nguyên tử hai vế.',
    difficulty: 'medium', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B', 'b'], validatorType: 'choice'
  },
  {
    id: 'chem10-q02c',
    subjectId: 'chemistry', topicId: 'chem10-t0', questionTypeId: 'chem10-qt02',
    content: 'Số mol trong 11 g $CO_2$ ($M=44$ g/mol) là:\nA. 0,20 mol\nB. 0,25 mol\nC. 2,5 mol\nD. 4,0 mol',
    difficulty: 'easy', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B', 'b'], validatorType: 'choice'
  },
  {
    id: 'chem10-q02d',
    subjectId: 'chemistry', topicId: 'chem10-t0', questionTypeId: 'chem10-qt02',
    content: 'Khối lượng của 0,30 mol $O_2$ là:\nA. 4,8 g\nB. 9,6 g\nC. 16,0 g\nD. 32,0 g',
    difficulty: 'easy', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B', 'b'], validatorType: 'choice'
  },
  {
    id: 'chem10-q02e',
    subjectId: 'chemistry', topicId: 'chem10-t0', questionTypeId: 'chem10-qt02',
    content: 'Ở 25 °C và 1 bar, 0,20 mol khí có thể tích gần nhất là:\nA. 4,48 L\nB. 4,96 L\nC. 22,40 L\nD. 24,79 L',
    difficulty: 'medium', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B', 'b'], validatorType: 'choice'
  },
  {
    id: 'chem10-q03c',
    subjectId: 'chemistry', topicId: 'chem10-t0', questionTypeId: 'chem10-qt03',
    content: 'Công thức đúng của hợp chất tạo bởi $Al^{3+}$ và $O^{2-}$ là:\nA. AlO\nB. $Al_2O_3$\nC. $Al_3O_2$\nD. $AlO_3$',
    difficulty: 'easy', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B', 'b'], validatorType: 'choice'
  },
  {
    id: 'chem10-q03d',
    subjectId: 'chemistry', topicId: 'chem10-t0', questionTypeId: 'chem10-qt03',
    content: 'Trong $Fe_2O_3$, nếu oxygen có hóa trị II thì iron có hóa trị:\nA. I\nB. II\nC. III\nD. VI',
    difficulty: 'easy', sourceType: 'manual', correctAnswer: 'C', acceptedAnswers: ['C', 'c'], validatorType: 'choice'
  },
  {
    id: 'chem10-q03e',
    subjectId: 'chemistry', topicId: 'chem10-t0', questionTypeId: 'chem10-qt03',
    content: 'Vì sao công thức $Ca_2O_2$ cần viết tối giản thành $CaO$?\nA. Vì phải bỏ nguyên tố oxygen.\nB. Vì tỉ lệ chỉ số 2:2 rút gọn thành 1:1.\nC. Vì Ca và O có cùng nguyên tử khối.\nD. Vì chỉ số luôn phải bằng 1.',
    difficulty: 'medium', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B', 'b'], validatorType: 'choice'
  },
  {
    id: 'chem10-q04c',
    subjectId: 'chemistry', topicId: 'chem10-t0', questionTypeId: 'chem10-qt04',
    content: 'Hòa tan 15 g muối vào 85 g nước. Nồng độ phần trăm của dung dịch là:\nA. 15%\nB. 17,65%\nC. 85%\nD. 100%',
    difficulty: 'easy', sourceType: 'manual', correctAnswer: 'A', acceptedAnswers: ['A', 'a'], validatorType: 'choice'
  },
  {
    id: 'chem10-q04d',
    subjectId: 'chemistry', topicId: 'chem10-t0', questionTypeId: 'chem10-qt04',
    content: 'Dung dịch chứa 0,50 mol chất tan trong 250 mL dung dịch có nồng độ mol là:\nA. 0,125 M\nB. 0,50 M\nC. 2,0 M\nD. 4,0 M',
    difficulty: 'easy', sourceType: 'manual', correctAnswer: 'C', acceptedAnswers: ['C', 'c'], validatorType: 'choice'
  },
  {
    id: 'chem10-q04e',
    subjectId: 'chemistry', topicId: 'chem10-t0', questionTypeId: 'chem10-qt04',
    content: 'Theo $2H_2+O_2\\rightarrow2H_2O$, cho 3 mol $H_2$ và 2 mol $O_2$. Chất giới hạn và số mol nước tối đa là:\nA. $O_2$, 2 mol\nB. $H_2$, 3 mol\nC. $H_2$, 2 mol\nD. $O_2$, 4 mol',
    difficulty: 'hard', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B', 'b'], validatorType: 'choice'
  },
  { id: "chem10-q-intro-object-reinforce-concept", subjectId: 'chemistry', topicId: "chem10-t0", questionTypeId: "chem10-qt-intro-object", content: "Phát biểu nào phản ánh đúng trọng tâm của dạng “Hóa học nghiên cứu điều gì?”?\nA. 1. Đối tượng nghiên cứu của hóa học: Hóa học nghiên cứu thành phần, cấu trúc, tính chất và sự biến đổi của chất. Một câu hỏi hóa học tốt không chỉ hỏi “chất này tên gì?” mà còn tìm mối quan hệ giữa cấu trúc và hành vi của chất.\nB. Chỉ cần ghi nhớ đáp án mẫu, không cần xét dữ kiện.\nC. Mọi trường hợp đều cho cùng một kết quả, không có điều kiện áp dụng.\nD. Nội dung này không liên quan đến cấu tạo, tính chất hoặc phản ứng hóa học.", difficulty: 'medium', sourceType: 'manual', correctAnswer: 'A', acceptedAnswers: ['A', 'a'], validatorType: 'choice' },
  { id: "chem10-q-intro-object-reinforce-process", subjectId: 'chemistry', topicId: "chem10-t0", questionTypeId: "chem10-qt-intro-object", content: "Khi bắt đầu giải dạng “Hóa học nghiên cứu điều gì?”, thao tác nào phù hợp nhất?\nA. Chọn ngay phương án có nhiều công thức nhất.\nB. Bước 1: Xác định đối tượng được nói tới là vật thể hay chất.\nC. Thay đổi chỉ số hóa học để khớp kết quả mong muốn.\nD. Bỏ qua đơn vị, điều kiện và phạm vi dữ kiện.", difficulty: 'medium', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B', 'b'], validatorType: 'choice' },
  { id: "chem10-q-intro-object-reinforce-misconception", subjectId: 'chemistry', topicId: "chem10-t0", questionTypeId: "chem10-qt-intro-object", content: "Lỗi nào cần đặc biệt tránh khi làm dạng “Hóa học nghiên cứu điều gì?”?\nA. Kiểm tra lại đơn vị và điều kiện áp dụng.\nB. Đối chiếu kết luận với dữ kiện ban đầu.\nC. Đồng nhất vật thể với chất tạo nên nó.\nD. Giải thích mối liên hệ giữa cấu tạo và tính chất.", difficulty: 'hard', sourceType: 'manual', correctAnswer: 'C', acceptedAnswers: ['C', 'c'], validatorType: 'choice' },
  { id: "chem10-q-intro-inquiry-reinforce-concept", subjectId: 'chemistry', topicId: "chem10-t0", questionTypeId: "chem10-qt-intro-inquiry", content: "Phát biểu nào phản ánh đúng trọng tâm của dạng “Quan sát, bằng chứng và kết luận”?\nA. Chỉ cần ghi nhớ đáp án mẫu, không cần xét dữ kiện.\nB. 1. Quan sát không phải suy luận: Quan sát là điều đo hoặc ghi nhận trực tiếp, ví dụ “nhiệt độ tăng từ 25 °C lên 31 °C”. Suy luận là cách giải thích dữ kiện, ví dụ “quá trình đã giải phóng nhiệt”. Một suy luận phải dựa trên quan sát nhưng không được viết như thể nó là dữ kiện trực tiếp.\nC. Mọi trường hợp đều cho cùng một kết quả, không có điều kiện áp dụng.\nD. Nội dung này không liên quan đến cấu tạo, tính chất hoặc phản ứng hóa học.", difficulty: 'medium', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B', 'b'], validatorType: 'choice' },
  { id: "chem10-q-intro-inquiry-reinforce-process", subjectId: 'chemistry', topicId: "chem10-t0", questionTypeId: "chem10-qt-intro-inquiry", content: "Khi bắt đầu giải dạng “Quan sát, bằng chứng và kết luận”, thao tác nào phù hợp nhất?\nA. Chọn ngay phương án có nhiều công thức nhất.\nB. Thay đổi chỉ số hóa học để khớp kết quả mong muốn.\nC. Bước 1: Viết chính xác câu hỏi mà thí nghiệm muốn trả lời.\nD. Bỏ qua đơn vị, điều kiện và phạm vi dữ kiện.", difficulty: 'medium', sourceType: 'manual', correctAnswer: 'C', acceptedAnswers: ['C', 'c'], validatorType: 'choice' },
  { id: "chem10-q-intro-inquiry-reinforce-misconception", subjectId: 'chemistry', topicId: "chem10-t0", questionTypeId: "chem10-qt-intro-inquiry", content: "Lỗi nào cần đặc biệt tránh khi làm dạng “Quan sát, bằng chứng và kết luận”?\nA. Kiểm tra lại đơn vị và điều kiện áp dụng.\nB. Đối chiếu kết luận với dữ kiện ban đầu.\nC. Giải thích mối liên hệ giữa cấu tạo và tính chất.\nD. Gọi suy luận là quan sát.", difficulty: 'hard', sourceType: 'manual', correctAnswer: 'D', acceptedAnswers: ['D', 'd'], validatorType: 'choice' },
  { id: "chem10-q01-reinforce-concept", subjectId: 'chemistry', topicId: "chem10-t0", questionTypeId: "chem10-qt01", content: "Phát biểu nào phản ánh đúng trọng tâm của dạng “Cân bằng phương trình & Bảo toàn khối lượng”?\nA. Chỉ cần ghi nhớ đáp án mẫu, không cần xét dữ kiện.\nB. Mọi trường hợp đều cho cùng một kết quả, không có điều kiện áp dụng.\nC. 1. Định luật bảo toàn khối lượng: - Trong một phản ứng hóa học, tổng khối lượng của các chất sản phẩm bằng tổng khối lượng của các chất tham gia phản ứng. - Ví dụ: Với phản ứng $A + B \\rightarrow C + D$, ta luôn có: $m_A + m_B = m_C + m_D$.\nD. Nội dung này không liên quan đến cấu tạo, tính chất hoặc phản ứng hóa học.", difficulty: 'medium', sourceType: 'manual', correctAnswer: 'C', acceptedAnswers: ['C', 'c'], validatorType: 'choice' },
  { id: "chem10-q01-reinforce-process", subjectId: 'chemistry', topicId: "chem10-t0", questionTypeId: "chem10-qt01", content: "Khi bắt đầu giải dạng “Cân bằng phương trình & Bảo toàn khối lượng”, thao tác nào phù hợp nhất?\nA. Chọn ngay phương án có nhiều công thức nhất.\nB. Thay đổi chỉ số hóa học để khớp kết quả mong muốn.\nC. Bỏ qua đơn vị, điều kiện và phạm vi dữ kiện.\nD. Bước 1: Liệt kê số lượng nguyên tử mỗi nguyên tố ở cả hai vế.", difficulty: 'medium', sourceType: 'manual', correctAnswer: 'D', acceptedAnswers: ['D', 'd'], validatorType: 'choice' },
  { id: "chem10-q01-reinforce-misconception", subjectId: 'chemistry', topicId: "chem10-t0", questionTypeId: "chem10-qt01", content: "Lỗi nào cần đặc biệt tránh khi làm dạng “Cân bằng phương trình & Bảo toàn khối lượng”?\nA. Thay đổi các chỉ số dưới trong công thức hóa học khi cân bằng (ví dụ: biến $\\text{O}_2$ thành $\\text{O}_3$ để cân bằng, đây là lỗi sai bản chất nghiêm trọng).\nB. Kiểm tra lại đơn vị và điều kiện áp dụng.\nC. Đối chiếu kết luận với dữ kiện ban đầu.\nD. Giải thích mối liên hệ giữa cấu tạo và tính chất.", difficulty: 'hard', sourceType: 'manual', correctAnswer: 'A', acceptedAnswers: ['A', 'a'], validatorType: 'choice' },
  { id: "chem10-q02-reinforce-concept", subjectId: 'chemistry', topicId: "chem10-t0", questionTypeId: "chem10-qt02", content: "Phát biểu nào phản ánh đúng trọng tâm của dạng “Mol, Khối lượng mol & Thể tích chất khí”?\nA. Chỉ cần ghi nhớ đáp án mẫu, không cần xét dữ kiện.\nB. Mọi trường hợp đều cho cùng một kết quả, không có điều kiện áp dụng.\nC. Nội dung này không liên quan đến cấu tạo, tính chất hoặc phản ứng hóa học.\nD. 1. Khái niệm Mol: - Mol là lượng chất chứa $6,022 \\cdot 10^{23}$ hạt vi mô (nguyên tử hoặc phân tử) của chất đó. Số $N_A = 6,022 \\cdot 10^{23}$ gọi là hằng số Avogadro.", difficulty: 'medium', sourceType: 'manual', correctAnswer: 'D', acceptedAnswers: ['D', 'd'], validatorType: 'choice' },
  { id: "chem10-q02-reinforce-process", subjectId: 'chemistry', topicId: "chem10-t0", questionTypeId: "chem10-qt02", content: "Khi bắt đầu giải dạng “Mol, Khối lượng mol & Thể tích chất khí”, thao tác nào phù hợp nhất?\nA. Bước 1: Tính khối lượng mol (M) của chất bằng cách cộng nguyên tử khối của các nguyên tố trong phân thức.\nB. Chọn ngay phương án có nhiều công thức nhất.\nC. Thay đổi chỉ số hóa học để khớp kết quả mong muốn.\nD. Bỏ qua đơn vị, điều kiện và phạm vi dữ kiện.", difficulty: 'medium', sourceType: 'manual', correctAnswer: 'A', acceptedAnswers: ['A', 'a'], validatorType: 'choice' },
  { id: "chem10-q02-reinforce-misconception", subjectId: 'chemistry', topicId: "chem10-t0", questionTypeId: "chem10-qt02", content: "Lỗi nào cần đặc biệt tránh khi làm dạng “Mol, Khối lượng mol & Thể tích chất khí”?\nA. Kiểm tra lại đơn vị và điều kiện áp dụng.\nB. Vẫn sử dụng hằng số $22,4$ của chương trình cũ thay vì $24,79$ ở điều kiện chuẩn mới.\nC. Đối chiếu kết luận với dữ kiện ban đầu.\nD. Giải thích mối liên hệ giữa cấu tạo và tính chất.", difficulty: 'hard', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B', 'b'], validatorType: 'choice' },
  { id: "chem10-q03-reinforce-concept", subjectId: 'chemistry', topicId: "chem10-t0", questionTypeId: "chem10-qt03", content: "Phát biểu nào phản ánh đúng trọng tâm của dạng “Hóa trị & Công thức hóa học của hợp chất”?\nA. 1. Định nghĩa Hóa trị: - Hóa trị là con số biểu thị khả năng liên kết của nguyên tử nguyên tố này với nguyên tử nguyên tố khác. Quy ước H chọn làm đơn vị (hóa trị I), O có hóa trị II.\nB. Chỉ cần ghi nhớ đáp án mẫu, không cần xét dữ kiện.\nC. Mọi trường hợp đều cho cùng một kết quả, không có điều kiện áp dụng.\nD. Nội dung này không liên quan đến cấu tạo, tính chất hoặc phản ứng hóa học.", difficulty: 'medium', sourceType: 'manual', correctAnswer: 'A', acceptedAnswers: ['A', 'a'], validatorType: 'choice' },
  { id: "chem10-q03-reinforce-process", subjectId: 'chemistry', topicId: "chem10-t0", questionTypeId: "chem10-qt03", content: "Khi bắt đầu giải dạng “Hóa trị & Công thức hóa học của hợp chất”, thao tác nào phù hợp nhất?\nA. Chọn ngay phương án có nhiều công thức nhất.\nB. Bước 1: Viết công thức dạng tổng quát $\\text{A}_x\\text{B}_y$.\nC. Thay đổi chỉ số hóa học để khớp kết quả mong muốn.\nD. Bỏ qua đơn vị, điều kiện và phạm vi dữ kiện.", difficulty: 'medium', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B', 'b'], validatorType: 'choice' },
  { id: "chem10-q03-reinforce-misconception", subjectId: 'chemistry', topicId: "chem10-t0", questionTypeId: "chem10-qt03", content: "Lỗi nào cần đặc biệt tránh khi làm dạng “Hóa trị & Công thức hóa học của hợp chất”?\nA. Kiểm tra lại đơn vị và điều kiện áp dụng.\nB. Đối chiếu kết luận với dữ kiện ban đầu.\nC. Không rút gọn chỉ số xuống tối giản (ví dụ viết $\\text{S}_2\\text{O}_4$ thay vì $\\text{SO}_2$ cho hợp chất Lưu huỳnh hóa trị IV và Oxygen).\nD. Giải thích mối liên hệ giữa cấu tạo và tính chất.", difficulty: 'hard', sourceType: 'manual', correctAnswer: 'C', acceptedAnswers: ['C', 'c'], validatorType: 'choice' },
  { id: "chem10-q04-reinforce-concept", subjectId: 'chemistry', topicId: "chem10-t0", questionTypeId: "chem10-qt04", content: "Phát biểu nào phản ánh đúng trọng tâm của dạng “Nồng độ dung dịch & Phép toán tỉ lệ hóa học”?\nA. Chỉ cần ghi nhớ đáp án mẫu, không cần xét dữ kiện.\nB. 1. Nồng độ phần trăm ($C\\%$): - Biểu thị số gam chất tan có trong 100 gam dung dịch: $C\\% = \\frac{m_{ct}}{m_{dd}} \\cdot 100\\% \\quad (\\text{với } m_{dd} = m_{ct} + m_{dm})$\nC. Mọi trường hợp đều cho cùng một kết quả, không có điều kiện áp dụng.\nD. Nội dung này không liên quan đến cấu tạo, tính chất hoặc phản ứng hóa học.", difficulty: 'medium', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B', 'b'], validatorType: 'choice' },
  { id: "chem10-q04-reinforce-process", subjectId: 'chemistry', topicId: "chem10-t0", questionTypeId: "chem10-qt04", content: "Khi bắt đầu giải dạng “Nồng độ dung dịch & Phép toán tỉ lệ hóa học”, thao tác nào phù hợp nhất?\nA. Chọn ngay phương án có nhiều công thức nhất.\nB. Thay đổi chỉ số hóa học để khớp kết quả mong muốn.\nC. Bước 1: Chuyển đổi tất cả các dữ liệu khối lượng, thể tích về số mol.\nD. Bỏ qua đơn vị, điều kiện và phạm vi dữ kiện.", difficulty: 'medium', sourceType: 'manual', correctAnswer: 'C', acceptedAnswers: ['C', 'c'], validatorType: 'choice' },
  { id: "chem10-q04-reinforce-misconception", subjectId: 'chemistry', topicId: "chem10-t0", questionTypeId: "chem10-qt04", content: "Lỗi nào cần đặc biệt tránh khi làm dạng “Nồng độ dung dịch & Phép toán tỉ lệ hóa học”?\nA. Kiểm tra lại đơn vị và điều kiện áp dụng.\nB. Đối chiếu kết luận với dữ kiện ban đầu.\nC. Giải thích mối liên hệ giữa cấu tạo và tính chất.\nD. Tính sai khối lượng dung dịch ($m_{dd}$), quên cộng khối lượng chất tan vào dung môi nước, hoặc không trừ khối lượng kết tủa, khí thoát ra.", difficulty: 'hard', sourceType: 'manual', correctAnswer: 'D', acceptedAnswers: ['D', 'd'], validatorType: 'choice' }
];
