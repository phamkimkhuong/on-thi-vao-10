import { QuestionType, Question, Solution } from '@/types';

export const m6QuestionTypes: QuestionType[] = [
  {
    id: 'chem10-qt26', topicId: 'chem10-t6', name: 'Tốc độ Trung bình', slug: 'toc-do-trung-binh', description: 'Tính biến thiên nồng độ theo thời gian.', exampleQuestionId: 'chem10-q26a', difficulty: 'easy', examFrequency: 'high',
    theory: ['Tốc độ trung bình là độ biến thiên nồng độ trong một khoảng thời gian. Chất đầu giảm nên dùng dấu âm để tốc độ dương; sản phẩm tăng.'],
    recognitionSigns: ['Cho nồng độ ở hai thời điểm.'], solvingSteps: ['Tính ΔC.', 'Tính Δt.', 'Xét dấu, hệ số và đơn vị.'], commonMistakes: ['Quên dấu hoặc đơn vị.']
  },
  {
    id: 'chem10-qt27', topicId: 'chem10-t6', name: 'Đồ thị Nồng độ–Thời gian', slug: 'do-thi-nong-do-thoi-gian', description: 'Đọc xu hướng và độ dốc.', exampleQuestionId: 'chem10-q27a', difficulty: 'medium', examFrequency: 'high',
    theory: ['Chất đầu thường giảm, sản phẩm tăng. Độ lớn độ dốc biểu thị tốc độ tức thời tương đối; đường thường phẳng dần khi chất đầu bị tiêu thụ.'],
    recognitionSigns: ['Cho đồ thị C–t.'], solvingSteps: ['Đọc trục.', 'Xác định đường tăng/giảm.', 'So sánh độ dốc.'], commonMistakes: ['Đồng nhất nồng độ lớn với tốc độ lớn.']
  },
  {
    id: 'chem10-qt28', topicId: 'chem10-t6', name: 'Va chạm & Yếu tố Ảnh hưởng', slug: 'va-cham-yeu-to', description: 'Giải thích các yếu tố làm đổi tốc độ.', exampleQuestionId: 'chem10-q28a', difficulty: 'medium', examFrequency: 'high',
    theory: ['Va chạm hiệu quả cần đủ năng lượng và định hướng phù hợp. Nồng độ/áp suất tăng tần suất va chạm; nhiệt độ tăng tỉ lệ hạt đủ năng lượng; nghiền nhỏ tăng diện tích tiếp xúc.'],
    recognitionSigns: ['So sánh điều kiện phản ứng.'], solvingSteps: ['Xác định yếu tố thay đổi.', 'Liên hệ va chạm hiệu quả.', 'Chỉ kết luận về tốc độ.'], commonMistakes: ['Cho rằng nhanh hơn luôn tạo nhiều sản phẩm hơn.']
  },
  {
    id: 'chem10-qt29', topicId: 'chem10-t6', name: 'Xúc tác & Thiết kế Thí nghiệm', slug: 'xuc-tac-thi-nghiem', description: 'Giải thích xúc tác và kiểm soát biến.', exampleQuestionId: 'chem10-q29a', difficulty: 'medium', examFrequency: 'high',
    theory: ['Xúc tác tạo con đường có năng lượng hoạt hóa thấp hơn, tăng tốc độ nhưng không đổi ΔH. Thí nghiệm công bằng chỉ thay một biến và giữ các biến khác ổn định.'],
    recognitionSigns: ['So sánh có/không xúc tác.'], solvingSteps: ['Xác định biến.', 'Kiểm tra biến kiểm soát.', 'Giải thích bằng năng lượng hoạt hóa.'], commonMistakes: ['Cho rằng xúc tác đổi ΔH hoặc lượng sản phẩm cuối.']
  }
];

export const m6Questions: Question[] = [
  { id: 'chem10-q26a', subjectId: 'chemistry', topicId: 'chem10-t6', questionTypeId: 'chem10-qt26', content: 'Nồng độ A giảm từ 0,80 M xuống 0,50 M trong 10 s. Tốc độ giảm trung bình của A là:\nA. 0,03 M/s\nB. −0,03 M/s\nC. 0,30 M/s\nD. 3,0 M/s', difficulty: 'easy', sourceType: 'manual', correctAnswer: 'A', acceptedAnswers: ['A','a'], validatorType: 'choice' },
  { id: 'chem10-q26b', subjectId: 'chemistry', topicId: 'chem10-t6', questionTypeId: 'chem10-qt26', content: 'Nồng độ sản phẩm tăng 0,24 M trong 12 s. Tốc độ tạo sản phẩm trung bình là:\nA. 2,0 M/s\nB. 0,02 M/s\nC. −0,02 M/s\nD. 0,12 M/s', difficulty: 'easy', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B','b'], validatorType: 'choice' },
  { id: 'chem10-q27a', subjectId: 'chemistry', topicId: 'chem10-t6', questionTypeId: 'chem10-qt27', content: 'Trên đồ thị nồng độ–thời gian, đường nồng độ chất đầu phản ứng thường:\nA. Tăng liên tục.\nB. Giảm và thường phẳng dần.\nC. Luôn nằm ngang.\nD. Tăng rồi giảm ngẫu nhiên.', difficulty: 'easy', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B','b'], validatorType: 'choice' },
  { id: 'chem10-q27b', subjectId: 'chemistry', topicId: 'chem10-t6', questionTypeId: 'chem10-qt27', content: 'Trên cùng đồ thị, đoạn nào biểu thị phản ứng nhanh hơn?\nA. Đoạn có độ dốc theo độ lớn lớn hơn.\nB. Đoạn nằm cao hơn bất kể độ dốc.\nC. Đoạn nằm ngang.\nD. Mọi đoạn như nhau.', difficulty: 'medium', sourceType: 'manual', correctAnswer: 'A', acceptedAnswers: ['A','a'], validatorType: 'choice' },
  { id: 'chem10-q28a', subjectId: 'chemistry', topicId: 'chem10-t6', questionTypeId: 'chem10-qt28', content: 'Bột đá vôi phản ứng với acid nhanh hơn viên đá vôi cùng khối lượng chủ yếu vì:\nA. Bột có khối lượng lớn hơn.\nB. Bột có diện tích tiếp xúc lớn hơn.\nC. Bột làm thay đổi ΔH.\nD. Bột tạo sản phẩm khác.', difficulty: 'easy', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B','b'], validatorType: 'choice' },
  { id: 'chem10-q28b', subjectId: 'chemistry', topicId: 'chem10-t6', questionTypeId: 'chem10-qt28', content: 'Tăng nhiệt độ thường làm phản ứng nhanh hơn vì:\nA. Mọi va chạm đều trở thành hiệu quả.\nB. Tăng tỉ lệ hạt có đủ năng lượng và tăng tần suất va chạm.\nC. Làm ΔH luôn âm.\nD. Luôn tăng lượng sản phẩm cuối cùng.', difficulty: 'medium', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B','b'], validatorType: 'choice' },
  { id: 'chem10-q29a', subjectId: 'chemistry', topicId: 'chem10-t6', questionTypeId: 'chem10-qt29', content: 'Chất xúc tác làm tăng tốc độ chủ yếu bằng cách:\nA. Làm ΔH âm hơn.\nB. Tạo con đường có năng lượng hoạt hóa thấp hơn.\nC. Tăng khối lượng sản phẩm.\nD. Bị tiêu hao hoàn toàn.', difficulty: 'medium', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B','b'], validatorType: 'choice' },
  { id: 'chem10-q29b', subjectId: 'chemistry', topicId: 'chem10-t6', questionTypeId: 'chem10-qt29', content: 'Muốn khảo sát ảnh hưởng của nhiệt độ tới tốc độ viên sủi, thiết kế nào công bằng nhất?\nA. Thay cả nhiệt độ, lượng nước và kích thước viên.\nB. Chỉ thay nhiệt độ; giữ lượng nước, loại và kích thước viên như nhau.\nC. Dùng mỗi nhiệt độ một loại viên khác nhau.\nD. Không cần đo thời gian.', difficulty: 'easy', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B','b'], validatorType: 'choice' },
  // Dữ liệu từ rateHalogenPractice (t6)
  { id: 'chem10-q26c', subjectId: 'chemistry', topicId: 'chem10-t6', questionTypeId: 'chem10-qt26', content: 'Nồng độ A giảm từ 1,00 M xuống 0,70 M trong 15 s. Tốc độ giảm trung bình của A là:\nA. 0,02 M/s\nB. 0,05 M/s\nC. 0,30 M/s\nD. 4,50 M/s', correctAnswer: 'A', difficulty: 'medium', sourceType: 'manual', acceptedAnswers: ['A', 'a'], validatorType: 'choice' },
  { id: 'chem10-q26d', subjectId: 'chemistry', topicId: 'chem10-t6', questionTypeId: 'chem10-qt26', content: 'Nồng độ sản phẩm B tăng từ 0 lên 0,48 M trong 24 s. Tốc độ tạo B trung bình là:\nA. 0,01 M/s\nB. 0,02 M/s\nC. 0,12 M/s\nD. 11,52 M/s', correctAnswer: 'B', difficulty: 'medium', sourceType: 'manual', acceptedAnswers: ['B', 'b'], validatorType: 'choice' },
  { id: 'chem10-q26e', subjectId: 'chemistry', topicId: 'chem10-t6', questionTypeId: 'chem10-qt26', content: 'Với $2A\\rightarrow B$, nếu A bị tiêu thụ với tốc độ trung bình 0,10 M/s thì tốc độ tạo B theo hệ số tỉ lượng là:\nA. 0,05 M/s\nB. 0,10 M/s\nC. 0,20 M/s\nD. 2,00 M/s', correctAnswer: 'A', difficulty: 'hard', sourceType: 'manual', acceptedAnswers: ['A', 'a'], validatorType: 'choice' },
  { id: 'chem10-q27c', subjectId: 'chemistry', topicId: 'chem10-t6', questionTypeId: 'chem10-qt27', content: 'Trên đồ thị nồng độ–thời gian, đường của sản phẩm thường có đặc điểm nào?\nA. Giảm từ giá trị lớn về 0.\nB. Tăng dần từ giá trị ban đầu và thường phẳng dần.\nC. Luôn là đường thẳng đứng.\nD. Không phụ thuộc thời gian.', correctAnswer: 'B', difficulty: 'medium', sourceType: 'manual', acceptedAnswers: ['B', 'b'], validatorType: 'choice' },
  { id: 'chem10-q27d', subjectId: 'chemistry', topicId: 'chem10-t6', questionTypeId: 'chem10-qt27', content: 'Hai tiếp tuyến tại thời điểm $t_1$ và $t_2$ có độ dốc tuyệt đối lần lượt 0,08 và 0,03 M/s. Phản ứng nhanh hơn tại:\nA. $t_1$\nB. $t_2$\nC. Hai thời điểm như nhau\nD. Không thể dựa vào độ dốc', correctAnswer: 'A', difficulty: 'medium', sourceType: 'manual', acceptedAnswers: ['A', 'a'], validatorType: 'choice' },
  { id: 'chem10-q27e', subjectId: 'chemistry', topicId: 'chem10-t6', questionTypeId: 'chem10-qt27', content: 'Đường nồng độ chất đầu trở nên gần như nằm ngang ở cuối thí nghiệm. Diễn giải phù hợp nhất là:\nA. Nồng độ đang thay đổi rất nhanh.\nB. Tốc độ biến thiên nồng độ đã rất nhỏ.\nC. Chất đầu chắc chắn tăng lên.\nD. Đồ thị không chứa thông tin tốc độ.', correctAnswer: 'B', difficulty: 'medium', sourceType: 'manual', acceptedAnswers: ['B', 'b'], validatorType: 'choice' },
  { id: 'chem10-q28c', subjectId: 'chemistry', topicId: 'chem10-t6', questionTypeId: 'chem10-qt28', content: 'Tăng nồng độ chất phản ứng thường làm tốc độ tăng vì:\nA. Giảm số tiểu phân trong một thể tích.\nB. Tăng tần suất va chạm giữa các tiểu phân.\nC. Luôn làm ΔH âm hơn.\nD. Làm mất năng lượng hoạt hóa.', correctAnswer: 'B', difficulty: 'medium', sourceType: 'manual', acceptedAnswers: ['B', 'b'], validatorType: 'choice' },
  { id: 'chem10-q28d', subjectId: 'chemistry', topicId: 'chem10-t6', questionTypeId: 'chem10-qt28', content: 'Tăng áp suất làm phản ứng khí thường nhanh hơn khi nhiệt độ không đổi chủ yếu vì:\nA. Các phân tử khí gần nhau hơn, nồng độ hiệu dụng tăng.\nB. Khối lượng phân tử tăng.\nC. ΔH đổi dấu.\nD. Tạo chất xúc tác mới.', correctAnswer: 'A', difficulty: 'medium', sourceType: 'manual', acceptedAnswers: ['A', 'a'], validatorType: 'choice' },
  { id: 'chem10-q28e', subjectId: 'chemistry', topicId: 'chem10-t6', questionTypeId: 'chem10-qt28', content: 'Hai thí nghiệm dùng cùng khối lượng CaCO₃ và cùng acid; một mẫu dạng bột, một mẫu dạng viên. Mẫu bột phản ứng nhanh hơn nhưng lượng khí cuối bằng nhau. Kết luận đúng là:\nA. Diện tích bề mặt làm tăng tốc độ, không làm đổi lượng chất giới hạn.\nB. Bột tạo thêm vật chất.\nC. Viên không phản ứng.\nD. Tốc độ nhanh luôn cho nhiều sản phẩm hơn.', correctAnswer: 'A', difficulty: 'medium', sourceType: 'manual', acceptedAnswers: ['A', 'a'], validatorType: 'choice' },
  { id: 'chem10-q29c', subjectId: 'chemistry', topicId: 'chem10-t6', questionTypeId: 'chem10-qt29', content: 'Trên giản đồ năng lượng, xúc tác làm thay đổi đại lượng nào?\nA. Enthalpy chất đầu.\nB. Enthalpy sản phẩm.\nC. Năng lượng hoạt hóa của con đường phản ứng.\nD. ΔH của phản ứng.', correctAnswer: 'C', difficulty: 'medium', sourceType: 'manual', acceptedAnswers: ['C', 'c'], validatorType: 'choice' },
  { id: 'chem10-q29d', subjectId: 'chemistry', topicId: 'chem10-t6', questionTypeId: 'chem10-qt29', content: 'Để kiểm tra tác dụng của xúc tác MnO₂ lên sự phân hủy $H_2O_2$, thiết kế nào phù hợp?\nA. Hai mẫu khác cả nhiệt độ và nồng độ.\nB. Hai mẫu giống nhau, chỉ một mẫu thêm lượng MnO₂ xác định.\nC. Chỉ dùng một mẫu có MnO₂.\nD. Đổi đồng thời thể tích và loại chất phản ứng.', correctAnswer: 'B', difficulty: 'medium', sourceType: 'manual', acceptedAnswers: ['B', 'b'], validatorType: 'choice' },
  { id: 'chem10-q29e', subjectId: 'chemistry', topicId: 'chem10-t6', questionTypeId: 'chem10-qt29', content: 'Sau phản ứng, khối lượng chất xúc tác rắn gần như không đổi. Điều này phù hợp với vai trò nào?\nA. Xúc tác không tham gia bất kì bước nào.\nB. Xúc tác có thể tham gia các bước trung gian nhưng được tái sinh sau phản ứng.\nC. Xúc tác trở thành sản phẩm chính.\nD. Xúc tác làm tăng ΔH.', correctAnswer: 'B', difficulty: 'hard', sourceType: 'manual', acceptedAnswers: ['B', 'b'], validatorType: 'choice' }
];

export const m6Solutions: Solution[] = [
  {
    id: 'chem10-s26a', questionId: 'chem10-q26a',
    recognition: 'Dùng tốc độ biến thiên, độ dốc hoặc mô hình va chạm.',
    detailedSteps: [{ order: 1, title: 'Xác định đại lượng hoặc biến', explanation: 'Độ giảm nồng độ là $0{,}80-0{,}50=0{,}30$ M; chia 10 s được 0,03 M/s.' }, { order: 2, title: 'Kết luận', explanation: 'Chọn A.' }],
    finalAnswer: 'A',
    commonMistakes: ['Nhầm nồng độ với tốc độ hoặc thay nhiều biến trong cùng thí nghiệm.'],
    reviewSuggestions: ['Luôn ghi biến độc lập, biến phụ thuộc, biến kiểm soát và đơn vị tốc độ.']
  },
  {
    id: 'chem10-s26b', questionId: 'chem10-q26b',
    recognition: 'Dùng tốc độ biến thiên, độ dốc hoặc mô hình va chạm.',
    detailedSteps: [{ order: 1, title: 'Xác định đại lượng hoặc biến', explanation: '$v=0{,}24/12=0{,}02$ M/s.' }, { order: 2, title: 'Kết luận', explanation: 'Chọn B.' }],
    finalAnswer: 'B',
    commonMistakes: ['Nhầm nồng độ với tốc độ hoặc thay nhiều biến trong cùng thí nghiệm.'],
    reviewSuggestions: ['Luôn ghi biến độc lập, biến phụ thuộc, biến kiểm soát và đơn vị tốc độ.']
  },
  {
    id: 'chem10-s27a', questionId: 'chem10-q27a',
    recognition: 'Dùng tốc độ biến thiên, độ dốc hoặc mô hình va chạm.',
    detailedSteps: [{ order: 1, title: 'Xác định đại lượng hoặc biến', explanation: 'Chất đầu bị tiêu thụ nên nồng độ giảm; khi nồng độ thấp dần, tốc độ thường giảm và đường phẳng dần.' }, { order: 2, title: 'Kết luận', explanation: 'Chọn B.' }],
    finalAnswer: 'B',
    commonMistakes: ['Nhầm nồng độ với tốc độ hoặc thay nhiều biến trong cùng thí nghiệm.'],
    reviewSuggestions: ['Luôn ghi biến độc lập, biến phụ thuộc, biến kiểm soát và đơn vị tốc độ.']
  },
  {
    id: 'chem10-s27b', questionId: 'chem10-q27b',
    recognition: 'Dùng tốc độ biến thiên, độ dốc hoặc mô hình va chạm.',
    detailedSteps: [{ order: 1, title: 'Xác định đại lượng hoặc biến', explanation: 'Độ lớn độ dốc biểu thị mức thay đổi nồng độ mỗi đơn vị thời gian; dốc hơn nghĩa là nhanh hơn.' }, { order: 2, title: 'Kết luận', explanation: 'Chọn A.' }],
    finalAnswer: 'A',
    commonMistakes: ['Nhầm nồng độ với tốc độ hoặc thay nhiều biến trong cùng thí nghiệm.'],
    reviewSuggestions: ['Luôn ghi biến độc lập, biến phụ thuộc, biến kiểm soát và đơn vị tốc độ.']
  },
  {
    id: 'chem10-s28a', questionId: 'chem10-q28a',
    recognition: 'Dùng tốc độ biến thiên, độ dốc hoặc mô hình va chạm.',
    detailedSteps: [{ order: 1, title: 'Xác định đại lượng hoặc biến', explanation: 'Nghiền nhỏ tăng diện tích tiếp xúc, làm số va chạm tại bề mặt mỗi giây tăng.' }, { order: 2, title: 'Kết luận', explanation: 'Chọn B.' }],
    finalAnswer: 'B',
    commonMistakes: ['Nhầm nồng độ với tốc độ hoặc thay nhiều biến trong cùng thí nghiệm.'],
    reviewSuggestions: ['Luôn ghi biến độc lập, biến phụ thuộc, biến kiểm soát và đơn vị tốc độ.']
  },
  {
    id: 'chem10-s28b', questionId: 'chem10-q28b',
    recognition: 'Dùng tốc độ biến thiên, độ dốc hoặc mô hình va chạm.',
    detailedSteps: [{ order: 1, title: 'Xác định đại lượng hoặc biến', explanation: 'Nhiệt độ cao làm hạt chuyển động nhanh hơn và tăng tỉ lệ va chạm vượt năng lượng hoạt hóa.' }, { order: 2, title: 'Kết luận', explanation: 'Chọn B.' }],
    finalAnswer: 'B',
    commonMistakes: ['Nhầm nồng độ với tốc độ hoặc thay nhiều biến trong cùng thí nghiệm.'],
    reviewSuggestions: ['Luôn ghi biến độc lập, biến phụ thuộc, biến kiểm soát và đơn vị tốc độ.']
  },
  {
    id: 'chem10-s29a', questionId: 'chem10-q29a',
    recognition: 'Dùng tốc độ biến thiên, độ dốc hoặc mô hình va chạm.',
    detailedSteps: [{ order: 1, title: 'Xác định đại lượng hoặc biến', explanation: 'Xúc tác cung cấp cơ chế khác có năng lượng hoạt hóa thấp hơn, không đổi ΔH.' }, { order: 2, title: 'Kết luận', explanation: 'Chọn B.' }],
    finalAnswer: 'B',
    commonMistakes: ['Nhầm nồng độ với tốc độ hoặc thay nhiều biến trong cùng thí nghiệm.'],
    reviewSuggestions: ['Luôn ghi biến độc lập, biến phụ thuộc, biến kiểm soát và đơn vị tốc độ.']
  },
  {
    id: 'chem10-s29b', questionId: 'chem10-q29b',
    recognition: 'Dùng tốc độ biến thiên, độ dốc hoặc mô hình va chạm.',
    detailedSteps: [{ order: 1, title: 'Xác định đại lượng hoặc biến', explanation: 'Muốn quy kết ảnh hưởng cho nhiệt độ, chỉ thay nhiệt độ và giữ các yếu tố còn lại cố định.' }, { order: 2, title: 'Kết luận', explanation: 'Chọn B.' }],
    finalAnswer: 'B',
    commonMistakes: ['Nhầm nồng độ với tốc độ hoặc thay nhiều biến trong cùng thí nghiệm.'],
    reviewSuggestions: ['Luôn ghi biến độc lập, biến phụ thuộc, biến kiểm soát và đơn vị tốc độ.']
  },
  // Các câu giải từ rateHalogenPractice (t6)
  ...[
    { id: 'chem10-s26c', qId: 'chem10-q26c', ans: 'A', exp: 'Độ giảm nồng độ là 0,30 M; chia 15 s được 0,020 M/s.' },
    { id: 'chem10-s26d', qId: 'chem10-q26d', ans: 'B', exp: '$v=ΔC/Δt=0,48/24=0,020$ M/s.' },
    { id: 'chem10-s26e', qId: 'chem10-q26e', ans: 'A', exp: 'Hai mol A tạo một mol B nên tốc độ tạo B bằng một nửa tốc độ tiêu thụ A.' },
    { id: 'chem10-s27c', qId: 'chem10-q27c', ans: 'B', exp: 'Sản phẩm được tạo thành nên nồng độ tăng; khi phản ứng chậm dần, độ dốc thường giảm.' },
    { id: 'chem10-s27d', qId: 'chem10-q27d', ans: 'A', exp: 'Độ lớn độ dốc biểu diễn tốc độ tức thời; 0,08 lớn hơn 0,03.' },
    { id: 'chem10-s27e', qId: 'chem10-q27e', ans: 'B', exp: 'Độ dốc gần 0 nghĩa là nồng độ thay đổi rất ít theo thời gian.' },
    { id: 'chem10-s28c', qId: 'chem10-q28c', ans: 'B', exp: 'Nhiều tiểu phân hơn trong cùng thể tích làm số va chạm mỗi đơn vị thời gian tăng.' },
    { id: 'chem10-s28d', qId: 'chem10-q28d', ans: 'A', exp: 'Nén khí làm tăng số tiểu phân trong một đơn vị thể tích và tăng tần suất va chạm.' },
    { id: 'chem10-s28e', qId: 'chem10-q28e', ans: 'A', exp: 'Nghiền nhỏ tăng diện tích tiếp xúc nhưng không thay đổi số mol CaCO₃ ban đầu.' },
    { id: 'chem10-s29c', qId: 'chem10-q29c', ans: 'C', exp: 'Xúc tác tạo con đường phản ứng khác có năng lượng hoạt hóa thấp hơn, không đổi trạng thái đầu–cuối.' },
    { id: 'chem10-s29d', qId: 'chem10-q29d', ans: 'B', exp: 'Muốn quy kết khác biệt cho xúc tác, chỉ yếu tố có/không có MnO₂ được thay đổi.' },
    { id: 'chem10-s29e', qId: 'chem10-q29e', ans: 'B', exp: 'Xúc tác tham gia cơ chế nhưng được hoàn nguyên, nên không bị tiêu hao tổng thể.' }
  ].map(item => ({
    id: item.id,
    questionId: item.qId,
    recognition: 'Dùng tốc độ biến thiên, độ dốc hoặc mô hình va chạm.',
    detailedSteps: [
      { order: 1, title: 'Lập luận trọng tâm', explanation: item.exp },
      { order: 2, title: 'Kết luận', explanation: `Chọn phương án ${item.ans}.` }
    ],
    finalAnswer: item.ans,
    commonMistakes: ['Nhầm nồng độ với tốc độ hoặc thay nhiều biến trong cùng thí nghiệm.'],
    reviewSuggestions: ['Luôn ghi biến độc lập, biến phụ thuộc, biến kiểm soát và đơn vị tốc độ.']
  }))
];
