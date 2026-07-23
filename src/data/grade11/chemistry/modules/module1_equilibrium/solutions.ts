import type { Solution } from '@/types';

export const g11ChemistryEquilibriumSolutions: Solution[] = [
  {
    id: 'chem11-eq-s001', questionId: 'chem11-eq-q001',
    recognition: 'Dạng nhận diện phản ứng thuận nghịch: tìm dấu $\\rightleftharpoons$, biểu thị hai chiều xảy ra trong cùng điều kiện.',
    detailedSteps: [
      { order: 1, title: 'Đọc kí hiệu phản ứng', explanation: 'Ba phương trình A, B, D dùng mũi tên một chiều; phương trình C dùng mũi tên thuận nghịch.' },
      { order: 2, title: 'Kết luận', explanation: '$N_2+3H_2\\rightleftharpoons2NH_3$ là phản ứng thuận nghịch.' }
    ],
    finalAnswer: 'C',
    commonMistakes: ['Chọn một phản ứng quen thuộc mà không đọc kí hiệu mũi tên.'],
    reviewSuggestions: ['Ôn dấu hiệu phản ứng thuận nghịch.']
  },
  {
    id: 'chem11-eq-s002', questionId: 'chem11-eq-q002',
    recognition: 'Dạng xác định chiều nghịch: đọc phương trình từ phải sang trái nhưng giữ nguyên công thức và tỉ lệ hệ số.',
    detailedSteps: [
      { order: 1, title: 'Đổi vai trò hai vế', explanation: 'Ở chiều nghịch, HI là chất đầu; $H_2$ và $I_2$ là sản phẩm.' },
      { order: 2, title: 'Giữ tỉ lệ', explanation: 'Chiều nghịch là $2HI\\rightarrow H_2+I_2$.' }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Đảo chiều nhưng làm mất hệ số 2 của HI.'],
    reviewSuggestions: ['Ôn cách đọc chiều thuận và chiều nghịch.']
  },
  {
    id: 'chem11-eq-s003', questionId: 'chem11-eq-q003',
    recognition: 'Dạng kiểm tra định nghĩa: “thuận nghịch” không chỉ là viết được hai phương trình ngược nhau; hai chiều phải xảy ra trong cùng điều kiện của hệ.',
    detailedSteps: [
      { order: 1, title: 'Loại điều kiện không bắt buộc', explanation: 'Hai tốc độ chỉ bằng nhau ở cân bằng, không phải mọi thời điểm; nồng độ cũng không cần bằng nhau.' },
      { order: 2, title: 'Chọn điều kiện bản chất', explanation: 'Hai chiều cùng xảy ra trong cùng điều kiện là đặc trưng cần thiết.' }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Nhầm tính thuận nghịch với trạng thái cân bằng.'],
    reviewSuggestions: ['Phân biệt phản ứng thuận nghịch và trạng thái cân bằng.']
  },
  {
    id: 'chem11-eq-s004', questionId: 'chem11-eq-q004',
    recognition: 'Dạng tình huống: đề mô tả một chất vừa tạo sản phẩm, sản phẩm lại tạo chất ban đầu trong cùng bình và cùng nhiệt độ.',
    detailedSteps: [
      { order: 1, title: 'Nhận diện hai chiều', explanation: '$N_2O_4$ tạo $NO_2$ và $NO_2$ tạo lại $N_2O_4$.' },
      { order: 2, title: 'Kiểm tra điều kiện', explanation: 'Hai chiều diễn ra trong cùng hệ, nên đây là phản ứng thuận nghịch.' }
    ],
    finalAnswer: 'D',
    commonMistakes: ['Cho rằng màu sắc khác nhau khiến hai chiều thành hai phản ứng độc lập.'],
    reviewSuggestions: ['Ôn nhận diện phản ứng thuận nghịch từ mô tả hiện tượng.']
  },
  {
    id: 'chem11-eq-s005', questionId: 'chem11-eq-q005',
    recognition: 'Dạng công thức nền của cân bằng động: cần nhớ đại lượng bằng nhau là tốc độ hai chiều, không phải nồng độ.',
    detailedSteps: [
      { order: 1, title: 'Nêu điều kiện', explanation: 'Tại cân bằng: $v_{thuận}=v_{nghịch}$.' },
      { order: 2, title: 'Loại ngộ nhận', explanation: 'Hai tốc độ thường khác 0 và các nồng độ không nhất thiết bằng nhau.' }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Chọn $v_{thuận}=v_{nghịch}=0$.'],
    reviewSuggestions: ['Ôn định nghĩa cân bằng động.']
  },
  {
    id: 'chem11-eq-s006', questionId: 'chem11-eq-q006',
    recognition: 'Dạng giải thích “vì sao”: câu trả lời phải chứa cả hai ý—hai chiều vẫn xảy ra và tốc độ của chúng bằng nhau.',
    detailedSteps: [
      { order: 1, title: 'Xét cấp vi mô', explanation: 'Các va chạm hiệu quả theo cả chiều thuận và nghịch vẫn diễn ra.' },
      { order: 2, title: 'Xét tốc độ', explanation: 'Hai tốc độ bằng nhau nên biến đổi tổng thể không còn quan sát được.' }
    ],
    finalAnswer: 'C',
    commonMistakes: ['Chỉ nói nồng độ không đổi mà không giải thích cơ chế động.'],
    reviewSuggestions: ['Ôn hai cấp độ vĩ mô và vi mô của cân bằng.']
  },
  {
    id: 'chem11-eq-s007', questionId: 'chem11-eq-q007',
    recognition: 'Dạng chuyển biểu diễn sang cấp vi mô: hãy hình dung các phân tử vẫn va chạm và chuyển hóa theo cả hai chiều.',
    detailedSteps: [
      { order: 1, title: 'Loại trạng thái tĩnh', explanation: 'Phân tử không đứng yên và phản ứng hóa học không dừng.' },
      { order: 2, title: 'Chọn mô tả vi mô', explanation: 'Va chạm tạo sản phẩm và tạo lại chất đầu vẫn xảy ra với tốc độ cân bằng.' }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Đồng nhất sự ổn định vĩ mô với bất động vi mô.'],
    reviewSuggestions: ['Ôn mô hình hạt của cân bằng động.']
  },
  {
    id: 'chem11-eq-s008', questionId: 'chem11-eq-q008',
    recognition: 'Dạng bằng chứng thực nghiệm: dấu đồng vị xuất hiện ở cả hai phía chứng tỏ vật chất vẫn chuyển hóa qua lại.',
    detailedSteps: [
      { order: 1, title: 'Đọc bằng chứng', explanation: 'Dấu ban đầu ở A nhưng sau đó có trong B, nên chiều A sang B vẫn xảy ra.' },
      { order: 2, title: 'Liên hệ cân bằng', explanation: 'Hệ vẫn giữ cân bằng nên chiều B sang A cũng xảy ra; hai chiều không dừng.' }
    ],
    finalAnswer: 'D',
    commonMistakes: ['Suy ra nồng độ A và B bằng nhau từ sự phân bố đồng vị.'],
    reviewSuggestions: ['Ôn cách dùng bằng chứng để chứng minh cân bằng động.']
  },
  {
    id: 'chem11-eq-s009', questionId: 'chem11-eq-q009',
    recognition: 'Dạng sửa ngộ nhận nồng độ: cân bằng yêu cầu các nồng độ ổn định, không yêu cầu các giá trị phải bằng nhau.',
    detailedSteps: [
      { order: 1, title: 'Tách hai khái niệm', explanation: '$0{,}20$ M và $0{,}80$ M khác nhau nhưng mỗi giá trị vẫn có thể ổn định theo thời gian.' },
      { order: 2, title: 'Dùng tiêu chí đúng', explanation: 'Nếu hai tốc độ bằng nhau thì hệ có thể đang cân bằng.' }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Ép hai nồng độ tiến đến trung bình cộng.'],
    reviewSuggestions: ['Ôn “không đổi” khác “bằng nhau”.']
  },
  {
    id: 'chem11-eq-s010', questionId: 'chem11-eq-q010',
    recognition: 'Dạng phân biệt thuật ngữ: “không đổi” mô tả sự phụ thuộc theo thời gian; “bằng nhau” so sánh hai giá trị tại cùng thời điểm.',
    detailedSteps: [
      { order: 1, title: 'Xác định đối tượng so sánh', explanation: 'Không đổi: so một nồng độ ở nhiều thời điểm. Bằng nhau: so nồng độ của hai chất.' },
      { order: 2, title: 'Kết luận', explanation: 'Các nồng độ cân bằng có thể ổn định ở những giá trị khác nhau.' }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Xem hai cụm từ là đồng nghĩa.'],
    reviewSuggestions: ['Ôn cách đọc phát biểu về nồng độ cân bằng.']
  },
  {
    id: 'chem11-eq-s011', questionId: 'chem11-eq-q011',
    recognition: 'Dạng tổng quát hóa: không dùng quan hệ lớn–nhỏ giữa nồng độ để kết luận có cân bằng hay không.',
    detailedSteps: [
      { order: 1, title: 'Kiểm tra tiêu chí', explanation: 'Cân bằng phụ thuộc vào sự ổn định thành phần và sự bằng nhau của hai tốc độ.' },
      { order: 2, title: 'Áp dụng ba hệ', explanation: 'Cả ba quan hệ $[A]=[B]$, $[A]>[B]$, $[A]<[B]$ đều có thể xuất hiện ở cân bằng.' }
    ],
    finalAnswer: 'C',
    commonMistakes: ['Chỉ công nhận trường hợp hai nồng độ bằng nhau.'],
    reviewSuggestions: ['Ôn tiêu chí xác định cân bằng.']
  },
  {
    id: 'chem11-eq-s012', questionId: 'chem11-eq-q012',
    recognition: 'Dạng phản biện: câu trả lời đầy đủ phải sửa cả kết luận “phản ứng dừng” và nêu cơ chế làm nồng độ ổn định.',
    detailedSteps: [
      { order: 1, title: 'Chỉ ra lỗi', explanation: 'Nồng độ không đổi không chứng minh các biến đổi vi mô dừng.' },
      { order: 2, title: 'Thay bằng mô hình đúng', explanation: 'Tốc độ thuận bằng tốc độ nghịch nên lượng chất tạo ra và tiêu thụ trong cùng thời gian cân bằng nhau.' }
    ],
    finalAnswer: 'D',
    commonMistakes: ['Chỉ trả lời “sai” mà không nêu hai tốc độ bằng nhau.'],
    reviewSuggestions: ['Ôn cách giải thích cân bằng ở hai cấp độ.']
  },
  {
    id: 'chem11-eq-s013', questionId: 'chem11-eq-q013',
    recognition: 'Dạng đọc bảng nồng độ–thời gian: tìm hàng đầu tiên mà từ đó các giá trị tiếp tục giữ nguyên ở những lần đo sau.',
    detailedSteps: [
      { order: 1, title: 'So sánh các hàng', explanation: 'Từ 0 đến 30 s, ít nhất một nồng độ còn thay đổi.' },
      { order: 2, title: 'Xác định mốc', explanation: 'Giá trị tại 30 s và 40 s giống nhau cho cả A và B, nên mốc sớm nhất là 30 s.' }
    ],
    finalAnswer: 'C',
    commonMistakes: ['Chọn 40 s vì đó là hàng cuối, thay vì mốc bắt đầu ổn định.'],
    reviewSuggestions: ['Ôn cách tìm mốc ổn định trong bảng dữ liệu.']
  },
  {
    id: 'chem11-eq-s014', questionId: 'chem11-eq-q014',
    recognition: 'Dạng suy luận trực tiếp từ bảng: chỉ kết luận điều dữ liệu thể hiện, không tự thêm điều kiện về tốc độ hay hằng số.',
    detailedSteps: [
      { order: 1, title: 'Đọc dữ kiện', explanation: 'Nồng độ X và Y giữ nguyên theo thời gian.' },
      { order: 2, title: 'Giới hạn kết luận', explanation: 'Dữ kiện trực tiếp cho thấy thành phần vĩ mô ổn định; không cho biết hai nồng độ bằng nhau hay $K=1$.' }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Suy ra hằng số cân bằng bằng 1 khi chưa có biểu thức và số liệu.'],
    reviewSuggestions: ['Ôn phân biệt dữ kiện trực tiếp và suy luận bổ sung.']
  },
  {
    id: 'chem11-eq-s015', questionId: 'chem11-eq-q015',
    recognition: 'Dạng xử lí dữ liệu có sai số: tìm khoảng các giá trị phù hợp với nhau trong giới hạn sai số, rồi dùng ngôn ngữ thận trọng.',
    detailedSteps: [
      { order: 1, title: 'So sánh chênh lệch', explanation: 'Từ 40 đến 50 s, hai giá trị cùng là $0{,}50$ M; trước đó còn thay đổi rõ.' },
      { order: 2, title: 'Kết luận theo bằng chứng', explanation: 'Dữ liệu phù hợp với việc nồng độ ổn định từ khoảng 40 s, không chứng minh tốc độ bằng 0.' }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Dùng từ “chắc chắn” dù số liệu có sai số và số lần đo hữu hạn.'],
    reviewSuggestions: ['Ôn đọc dữ liệu thực nghiệm và mức độ chắc chắn.']
  },
  {
    id: 'chem11-eq-s016', questionId: 'chem11-eq-q016',
    recognition: 'Dạng đánh giá đủ–thiếu dữ kiện: một đại lượng ổn định là dấu hiệu, nhưng chưa tự động chứng minh toàn hệ đạt cân bằng.',
    detailedSteps: [
      { order: 1, title: 'Xác định phần đã biết', explanation: 'Chỉ biết nồng độ A không đổi.' },
      { order: 2, title: 'Xác định phần còn thiếu', explanation: 'Cần thêm dữ liệu về các cấu tử khác hoặc tốc độ hai chiều trước khi khẳng định cân bằng.' }
    ],
    finalAnswer: 'C',
    commonMistakes: ['Khẳng định tuyệt đối từ một chuỗi dữ liệu đơn lẻ.'],
    reviewSuggestions: ['Ôn tiêu chí và bằng chứng của trạng thái cân bằng.']
  },
  {
    id: 'chem11-eq-s017', questionId: 'chem11-eq-q017',
    recognition: 'Dạng đọc đồ thị nồng độ–thời gian: tìm mốc từ đó tất cả đường nồng độ chuyển thành đoạn nằm ngang.',
    detailedSteps: [
      { order: 1, title: 'Đọc trục', explanation: 'Trục ngang là thời gian; đường gạch dọc đánh dấu 30 s.' },
      { order: 2, title: 'Quan sát độ dốc', explanation: 'Sau 30 s, cả A và B đều có độ dốc bằng 0, tức nồng độ ổn định.' }
    ],
    finalAnswer: 'C',
    commonMistakes: ['Chọn thời điểm đường cong bắt đầu thoải hơn nhưng chưa nằm ngang.'],
    reviewSuggestions: ['Ôn ý nghĩa độ dốc trên đồ thị nồng độ–thời gian.']
  },
  {
    id: 'chem11-eq-s018', questionId: 'chem11-eq-q018',
    recognition: 'Dạng đọc giá trị cân bằng trên đồ thị: so độ cao hai đoạn nằm ngang và không nhầm “ổn định” với “bằng nhau”.',
    detailedSteps: [
      { order: 1, title: 'Đọc giá trị', explanation: 'Sau 30 s, A ổn định ở khoảng $0{,}4$ M còn B ổn định ở khoảng $0{,}6$ M.' },
      { order: 2, title: 'Kết luận', explanation: 'Hai nồng độ ổn định nhưng khác nhau.' }
    ],
    finalAnswer: 'D',
    commonMistakes: ['Cho rằng hai đoạn cùng nằm ngang nghĩa là cùng độ cao.'],
    reviewSuggestions: ['Ôn đọc trục tung và giá trị nồng độ.']
  },
  {
    id: 'chem11-eq-s019', questionId: 'chem11-eq-q019',
    recognition: 'Dạng bẫy giao điểm: giao điểm của hai đường nồng độ chỉ nói hai nồng độ bằng nhau tại một lúc, không phải tiêu chí cân bằng.',
    detailedSteps: [
      { order: 1, title: 'Loại mốc giao nhau', explanation: 'Ở 15 s các nồng độ bằng nhau nhưng vẫn còn thay đổi.' },
      { order: 2, title: 'Chọn mốc ổn định', explanation: 'Từ 30 s các đường nằm ngang, phù hợp với trạng thái cân bằng.' }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Chọn giao điểm vì nhớ sai rằng cân bằng nghĩa là nồng độ bằng nhau.'],
    reviewSuggestions: ['Ôn tiêu chí từ đồ thị nồng độ.']
  },
  {
    id: 'chem11-eq-s020', questionId: 'chem11-eq-q020',
    recognition: 'Dạng đánh giá suy luận: tìm phát biểu đi xa hơn dữ liệu đồ thị vĩ mô cho phép.',
    detailedSteps: [
      { order: 1, title: 'Điều đồ thị cho biết', explanation: 'Đoạn nằm ngang cho biết các nồng độ ổn định.' },
      { order: 2, title: 'Điều đồ thị không chứng minh', explanation: 'Nó không chứng minh va chạm hiệu quả ngừng; cân bằng động vẫn có hai chiều phản ứng.' }
    ],
    finalAnswer: 'C',
    commonMistakes: ['Biến đồ thị vĩ mô thành kết luận sai về chuyển động vi mô.'],
    reviewSuggestions: ['Ôn giới hạn của bằng chứng đồ thị.']
  },
  {
    id: 'chem11-eq-s021', questionId: 'chem11-eq-q021',
    recognition: 'Dạng đồ thị tốc độ: tìm mốc hai đường tốc độ gặp nhau và tiếp tục trùng nhau.',
    detailedSteps: [
      { order: 1, title: 'Đọc giao điểm', explanation: 'Hai đường gặp nhau tại vạch 25 s.' },
      { order: 2, title: 'Kiểm tra sau giao điểm', explanation: 'Sau đó hai tốc độ giữ bằng nhau, nên hệ cân bằng từ 25 s.' }
    ],
    finalAnswer: 'C',
    commonMistakes: ['Chọn 50 s vì đó là thời điểm cuối đồ thị.'],
    reviewSuggestions: ['Ôn điều kiện $v_{thuận}=v_{nghịch}$.']
  },
  {
    id: 'chem11-eq-s022', questionId: 'chem11-eq-q022',
    recognition: 'Dạng giải nghĩa giá trị tốc độ dương: bằng nhau nhưng lớn hơn 0 là dấu hiệu trực tiếp của cân bằng động.',
    detailedSteps: [
      { order: 1, title: 'Đọc hai thông tin', explanation: 'Hai tốc độ bằng nhau và đều không bằng 0.' },
      { order: 2, title: 'Diễn giải', explanation: 'Hai chiều vẫn xảy ra với cùng tốc độ nên thành phần tổng thể ổn định.' }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Cho rằng cân bằng bắt buộc hai tốc độ bằng 0.'],
    reviewSuggestions: ['Ôn ý nghĩa vật lí của tốc độ tại cân bằng.']
  },
  {
    id: 'chem11-eq-s023', questionId: 'chem11-eq-q023',
    recognition: 'Dạng suy luận xu hướng tốc độ: khi ban đầu chỉ có chất phản ứng, chiều thuận có điều kiện xảy ra mạnh còn chiều nghịch gần như chưa có sản phẩm để xảy ra.',
    detailedSteps: [
      { order: 1, title: 'Xét lúc đầu', explanation: '$v_{thuận}$ lớn, $v_{nghịch}$ gần 0.' },
      { order: 2, title: 'Xét quá trình tiến tới cân bằng', explanation: 'Chất đầu giảm làm tốc độ thuận giảm; sản phẩm tăng làm tốc độ nghịch tăng cho đến khi bằng nhau.' }
    ],
    finalAnswer: 'D',
    commonMistakes: ['Cho rằng hai tốc độ bằng nhau ngay khi trộn chất.'],
    reviewSuggestions: ['Ôn quá trình hình thành cân bằng động.']
  },
  {
    id: 'chem11-eq-s024', questionId: 'chem11-eq-q024',
    recognition: 'Dạng phân biệt “bằng nhau tức thời” với “trạng thái cân bằng”: trạng thái phải được duy trì, không chỉ xuất hiện tại một điểm đo.',
    detailedSteps: [
      { order: 1, title: 'Đánh giá $t_1$', explanation: 'Hai tốc độ chỉ chạm nhau rồi lại khác nhau, nên hệ chưa duy trì cân bằng.' },
      { order: 2, title: 'Đánh giá $t_2$', explanation: 'Từ $t_2$, hai tốc độ bằng nhau bền vững; đây là mốc cân bằng phù hợp.' }
    ],
    finalAnswer: 'C',
    commonMistakes: ['Chọn giao điểm đầu tiên mà không kiểm tra diễn biến sau đó.'],
    reviewSuggestions: ['Ôn cách nhận diện trạng thái ổn định từ dữ liệu theo thời gian.']
  },
  {
    id: 'chem11-eq-s025', questionId: 'chem11-eq-q025',
    recognition: 'Dạng viết biểu thức $K_C$ tổng quát: sản phẩm đặt ở tử, chất đầu đặt ở mẫu và hệ số tỉ lượng trở thành số mũ.',
    detailedSteps: [
      { order: 1, title: 'Xếp chất theo hai vế', explanation: 'C và D là sản phẩm; A và B là chất đầu.' },
      { order: 2, title: 'Đưa hệ số lên số mũ', explanation: '$K_C=\\dfrac{[C]^c[D]^d}{[A]^a[B]^b}$.' }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Nhân hệ số với nồng độ.', 'Viết nghịch đảo biểu thức.'],
    reviewSuggestions: ['Ôn quy tắc lập biểu thức hằng số cân bằng.']
  },
  {
    id: 'chem11-eq-s026', questionId: 'chem11-eq-q026',
    recognition: 'Dạng lập $K_C$ từ phương trình cụ thể: chú ý hệ số 3 của $H_2$ và hệ số 2 của $NH_3$ phải trở thành số mũ.',
    detailedSteps: [
      { order: 1, title: 'Viết tử và mẫu', explanation: 'Sản phẩm $NH_3$ ở tử; $N_2$, $H_2$ ở mẫu.' },
      { order: 2, title: 'Gắn số mũ', explanation: '$K_C=\\dfrac{[NH_3]^2}{[N_2][H_2]^3}$.' }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Viết $3[H_2]$ thay cho $[H_2]^3$.'],
    reviewSuggestions: ['Ôn vai trò của hệ số trong biểu thức $K_C$.']
  },
  {
    id: 'chem11-eq-s027', questionId: 'chem11-eq-q027',
    recognition: 'Dạng cân bằng dị thể: trước khi viết $K_C$, phải nhận diện trạng thái chất; chất rắn tinh khiết không đưa vào biểu thức.',
    detailedSteps: [
      { order: 1, title: 'Phân loại pha', explanation: '$CaCO_3$ và $CaO$ đều là chất rắn tinh khiết; $CO_2$ là chất khí.' },
      { order: 2, title: 'Viết biểu thức', explanation: 'Loại hai chất rắn khỏi biểu thức, còn $K_C=[CO_2]$.' }
    ],
    finalAnswer: 'C',
    commonMistakes: ['Đưa nồng độ biểu kiến của chất rắn vào tử hoặc mẫu.'],
    reviewSuggestions: ['Ôn cách xử lí chất rắn và chất lỏng tinh khiết.']
  },
  {
    id: 'chem11-eq-s028', questionId: 'chem11-eq-q028',
    recognition: 'Dạng đổi chiều phản ứng: khi viết phản ứng nghịch, vị trí tử–mẫu phải đảo nhưng các số mũ vẫn theo hệ số của phương trình mới.',
    detailedSteps: [
      { order: 1, title: 'Đọc chiều mới', explanation: '$SO_3$ là chất đầu; $SO_2$ và $O_2$ là sản phẩm.' },
      { order: 2, title: 'Lập biểu thức', explanation: '$K_{C,nghịch}=\\dfrac{[SO_2]^2[O_2]}{[SO_3]^2}$, cũng chính là nghịch đảo của $K_{C,thuận}$.' }
    ],
    finalAnswer: 'D',
    commonMistakes: ['Giữ nguyên biểu thức của chiều thuận.', 'Làm mất số mũ 2.'],
    reviewSuggestions: ['Ôn ảnh hưởng của việc đảo chiều phương trình đến $K_C$.']
  },
  {
    id: 'chem11-eq-s029', questionId: 'chem11-eq-q029',
    recognition: 'Dạng tính trực tiếp $K_C$: đề đã cho toàn bộ nồng độ tại cân bằng, nên lập biểu thức rồi thay số.',
    detailedSteps: [
      { order: 1, title: 'Lập biểu thức', explanation: '$K_C=\\dfrac{[HI]^2}{[H_2][I_2]}$.' },
      { order: 2, title: 'Thay nồng độ cân bằng', explanation: '$K_C=\\dfrac{0{,}40^2}{0{,}10\\times0{,}20}=\\dfrac{0{,}16}{0{,}02}=8{,}0$.' }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Quên bình phương $[HI]$.', 'Thay sai vị trí tử và mẫu.'],
    reviewSuggestions: ['Ôn quy trình viết biểu thức trước khi thay số.']
  },
  {
    id: 'chem11-eq-s030', questionId: 'chem11-eq-q030',
    recognition: 'Dạng tính $K_C$ có hệ số 2: dấu hiệu quan trọng là $NO_2$ có hệ số 2 nên nồng độ phải bình phương.',
    detailedSteps: [
      { order: 1, title: 'Lập biểu thức', explanation: '$K_C=\\dfrac{[NO_2]^2}{[N_2O_4]}$.' },
      { order: 2, title: 'Tính', explanation: '$K_C=\\dfrac{0{,}20^2}{0{,}50}=\\dfrac{0{,}04}{0{,}50}=0{,}08$.' }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Tính $2\\times0{,}20$ thay cho $0{,}20^2$.'],
    reviewSuggestions: ['Ôn hệ số tỉ lượng và số mũ.']
  },
  {
    id: 'chem11-eq-s031', questionId: 'chem11-eq-q031',
    recognition: 'Dạng đọc bảng rồi tính $K_C$: chỉ lấy cột nồng độ cân bằng và ghép đúng mỗi giá trị với công thức chất.',
    detailedSteps: [
      { order: 1, title: 'Lập biểu thức', explanation: '$K_C=\\dfrac{[CO_2][H_2]}{[CO][H_2O]}$.' },
      { order: 2, title: 'Thay dữ liệu bảng', explanation: '$K_C=\\dfrac{0{,}60\\times0{,}30}{0{,}40\\times0{,}20}=\\dfrac{0{,}18}{0{,}08}=2{,}25$.' }
    ],
    finalAnswer: 'C',
    commonMistakes: ['Đọc nhầm hàng $H_2O$ và $H_2$.', 'Cộng nồng độ thay vì nhân.'],
    reviewSuggestions: ['Ôn cách chuyển bảng dữ liệu thành biểu thức.']
  },
  {
    id: 'chem11-eq-s032', questionId: 'chem11-eq-q032',
    recognition: 'Dạng tính nhiều lũy thừa: hãy viết biểu thức hoàn chỉnh trước, tính riêng tử và mẫu để tránh bỏ số mũ.',
    detailedSteps: [
      { order: 1, title: 'Lập biểu thức', explanation: '$K_C=\\dfrac{[SO_3]^2}{[SO_2]^2[O_2]}$.' },
      { order: 2, title: 'Tính tử và mẫu', explanation: 'Tử $=0{,}40^2=0{,}16$; mẫu $=0{,}20^2\\times0{,}50=0{,}02$; do đó $K_C=8$.' }
    ],
    finalAnswer: 'D',
    commonMistakes: ['Bình phương $SO_3$ nhưng quên bình phương $SO_2$.'],
    reviewSuggestions: ['Ôn kiểm tra số mũ trước khi bấm máy.']
  },
  {
    id: 'chem11-eq-s033', questionId: 'chem11-eq-q033',
    recognition: 'Dạng diễn giải $K_C$ rất lớn: chỉ kết luận về mức độ ưu thế tương đối của sản phẩm ở cân bằng, không kết luận về tốc độ hoặc chuyển hóa tuyệt đối.',
    detailedSteps: [
      { order: 1, title: 'So với 1', explanation: '$2{,}0\\times10^5\\gg1$.' },
      { order: 2, title: 'Diễn giải đúng', explanation: 'Tỉ số trong biểu thức $K_C$ nghiêng mạnh về phía sản phẩm, nên sản phẩm chiếm ưu thế tương đối.' }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Đồng nhất “ưu thế” với “chuyển hóa hoàn toàn”.', 'Suy ra phản ứng nhanh.'],
    reviewSuggestions: ['Ôn ý nghĩa định tính của độ lớn $K_C$.']
  },
  {
    id: 'chem11-eq-s034', questionId: 'chem11-eq-q034',
    recognition: 'Dạng diễn giải $K_C$ rất nhỏ: giá trị nhỏ hơn 1 nhiều lần cho biết chất đầu ưu thế ở cân bằng.',
    detailedSteps: [
      { order: 1, title: 'So với 1', explanation: '$3{,}0\\times10^{-6}\\ll1$.' },
      { order: 2, title: 'Kết luận có giới hạn', explanation: 'Chất đầu chiếm ưu thế tương đối; sản phẩm vẫn có thể tồn tại với lượng nhỏ.' }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Cho rằng nồng độ sản phẩm bắt buộc bằng 0.'],
    reviewSuggestions: ['Ôn khác biệt giữa “rất ít” và “không có”.']
  },
  {
    id: 'chem11-eq-s035', questionId: 'chem11-eq-q035',
    recognition: 'Dạng kiểm tra tính không đổi của $K_C$: xem hai thí nghiệm có cùng phản ứng và cùng nhiệt độ hay không.',
    detailedSteps: [
      { order: 1, title: 'Xác định yếu tố quyết định', explanation: 'Với phản ứng đã viết, $K_C$ phụ thuộc vào nhiệt độ.' },
      { order: 2, title: 'Phân biệt thành phần và hằng số', explanation: 'Nồng độ ban đầu khác có thể tạo thành phần cân bằng khác, nhưng tỉ số cân bằng vẫn cho cùng $K_C$ ở cùng nhiệt độ.' }
    ],
    finalAnswer: 'C',
    commonMistakes: ['Cho rằng hệ có nhiều chất ban đầu hơn sẽ có $K_C$ lớn hơn.'],
    reviewSuggestions: ['Ôn yếu tố ảnh hưởng đến giá trị hằng số cân bằng.']
  },
  {
    id: 'chem11-eq-s036', questionId: 'chem11-eq-q036',
    recognition: 'Dạng phân biệt nhiệt động học cân bằng với động học: $K_C$ cho biết hệ nghiêng về phía nào, không cho biết mất bao lâu để đạt cân bằng.',
    detailedSteps: [
      { order: 1, title: 'Diễn giải thành phần', explanation: 'X có $K_C\\gg1$ nên sản phẩm ưu thế; Y có $K_C\\ll1$ nên chất đầu ưu thế.' },
      { order: 2, title: 'Giới hạn suy luận', explanation: 'Không có dữ liệu tốc độ hoặc năng lượng hoạt hóa nên không thể so sánh phản ứng nào nhanh hơn.' }
    ],
    finalAnswer: 'D',
    commonMistakes: ['Dùng $K_C$ để xếp hạng tốc độ phản ứng.'],
    reviewSuggestions: ['Ôn phân biệt hằng số cân bằng và tốc độ phản ứng.']
  },
  {
    id: 'chem11-eq-s037', questionId: 'chem11-eq-q037',
    recognition: 'Dạng thêm chất phản ứng: xác định $H_2$ nằm ở vế trái rồi chọn chiều tiêu thụ bớt lượng $H_2$ vừa thêm.',
    detailedSteps: [
      { order: 1, title: 'Xác định tác động', explanation: 'Nồng độ $H_2$ tăng đột ngột.' },
      { order: 2, title: 'Chọn chiều chống lại tác động', explanation: 'Chiều thuận tiêu thụ $H_2$, nên cân bằng chuyển dịch sang phải.' }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Nhớ máy móc “thêm chất thì sang trái” mà không xét chất ở vế nào.'],
    reviewSuggestions: ['Ôn nguyên lí Le Chatelier với thay đổi nồng độ.']
  },
  {
    id: 'chem11-eq-s038', questionId: 'chem11-eq-q038',
    recognition: 'Dạng lấy bớt sản phẩm: hệ có xu hướng tạo lại phần sản phẩm đã bị lấy ra.',
    detailedSteps: [
      { order: 1, title: 'Xác định tác động', explanation: 'Lấy bớt $NH_3$ làm nồng độ sản phẩm giảm.' },
      { order: 2, title: 'Chọn chiều bù lại', explanation: 'Chiều thuận tạo $NH_3$, nên cân bằng chuyển dịch sang phải.' }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Cho rằng lấy sản phẩm khiến phản ứng thuận thiếu sản phẩm nên dừng.'],
    reviewSuggestions: ['Ôn hai trường hợp thêm và lấy bớt chất.']
  },
  {
    id: 'chem11-eq-s039', questionId: 'chem11-eq-q039',
    recognition: 'Dạng thêm sản phẩm: HI nằm ở vế phải, nên hệ chuyển theo chiều nghịch để tiêu thụ HI.',
    detailedSteps: [
      { order: 1, title: 'Xác định chất được thêm', explanation: 'Nồng độ HI tăng.' },
      { order: 2, title: 'Xác định chiều tiêu thụ', explanation: 'Chiều nghịch dùng HI để tạo $H_2$ và $I_2$, nên cân bằng sang trái.' }
    ],
    finalAnswer: 'C',
    commonMistakes: ['Cho rằng thêm bất kì chất nào cũng làm cân bằng sang phải.', 'Cho rằng $K_C$ tăng.'],
    reviewSuggestions: ['Ôn cách xác định chiều từ vị trí của chất trong phương trình.']
  },
  {
    id: 'chem11-eq-s040', questionId: 'chem11-eq-q040',
    recognition: 'Dạng hai tác động đồng thời: phân tích từng tác động riêng, sau đó xem chúng cùng chiều hay đối nghịch.',
    detailedSteps: [
      { order: 1, title: 'Xét lấy bớt nitrogen', explanation: 'Hệ chuyển sang trái để tạo thêm $N_2$.' },
      { order: 2, title: 'Xét thêm ammonia', explanation: 'Hệ cũng chuyển sang trái để tiêu thụ bớt $NH_3$. Hai tác động cùng hướng.' }
    ],
    finalAnswer: 'D',
    commonMistakes: ['Mặc định hai tác động luôn triệt tiêu nhau.', 'Không phân tích từng chất riêng.'],
    reviewSuggestions: ['Ôn quy trình xử lí nhiều tác động nồng độ.']
  },
  {
    id: 'chem11-eq-s041', questionId: 'chem11-eq-q041',
    recognition: 'Dạng tăng áp suất do giảm thể tích: chỉ đếm hệ số của chất khí ở hai vế rồi chọn phía ít mol khí hơn.',
    detailedSteps: [
      { order: 1, title: 'Đếm mol khí', explanation: 'Vế trái có $1+3=4$ mol khí; vế phải có 2 mol khí.' },
      { order: 2, title: 'Chọn phía được ưu tiên', explanation: 'Tăng áp suất ưu tiên phía ít mol khí hơn, nên cân bằng sang phải.' }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Đếm số chất thay vì tổng hệ số khí.', 'Dùng tính tỏa nhiệt khi đề không đổi nhiệt độ.'],
    reviewSuggestions: ['Ôn quy tắc áp suất và số mol khí.']
  },
  {
    id: 'chem11-eq-s042', questionId: 'chem11-eq-q042',
    recognition: 'Dạng áp suất không gây chuyển dịch: tổng hệ số khí hai vế bằng nhau.',
    detailedSteps: [
      { order: 1, title: 'Đếm hai vế', explanation: 'Vế trái có $1+1=2$ mol khí; vế phải có 2 mol khí.' },
      { order: 2, title: 'Kết luận', explanation: 'Nén hệ tác động như nhau lên hai phía nên không ưu tiên chiều nào.' }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Cho rằng tăng áp suất luôn làm cân bằng chuyển dịch.'],
    reviewSuggestions: ['Ôn trường hợp tổng số mol khí bằng nhau.']
  },
  {
    id: 'chem11-eq-s043', questionId: 'chem11-eq-q043',
    recognition: 'Dạng tăng thể tích: áp suất giảm, hệ ưu tiên phía có nhiều mol khí hơn.',
    detailedSteps: [
      { order: 1, title: 'Đếm mol khí', explanation: 'Vế trái có 1 mol khí; vế phải có $1+1=2$ mol khí.' },
      { order: 2, title: 'Áp dụng tác động', explanation: 'Tăng thể tích làm giảm áp suất nên cân bằng chuyển sang phía nhiều mol khí hơn, tức sang phải.' }
    ],
    finalAnswer: 'C',
    commonMistakes: ['Dùng cùng chiều chuyển dịch cho cả tăng và giảm thể tích.'],
    reviewSuggestions: ['Ôn cặp quan hệ: giảm thể tích–tăng áp suất và ngược lại.']
  },
  {
    id: 'chem11-eq-s044', questionId: 'chem11-eq-q044',
    recognition: 'Dạng liên hệ áp suất với hiện tượng màu: trước hết xác định chiều chuyển dịch bằng số mol khí, sau đó nối chiều đó với chất có màu.',
    detailedSteps: [
      { order: 1, title: 'Xác định chiều', explanation: 'Vế trái có 2 mol khí, vế phải có 1 mol khí; nén hệ làm cân bằng sang phải.' },
      { order: 2, title: 'Dự đoán màu', explanation: '$NO_2$ màu nâu bị tiêu thụ để tạo $N_2O_4$ gần như không màu nên màu nâu nhạt dần sau khi hệ tái cân bằng.' }
    ],
    finalAnswer: 'D',
    commonMistakes: ['Chỉ xét màu thay đổi tức thời khi nén mà không xét cân bằng mới.', 'Cho rằng $K_C$ tăng.'],
    reviewSuggestions: ['Ôn cách chuyển từ chiều chuyển dịch sang hiện tượng quan sát.']
  },
  {
    id: 'chem11-eq-s045', questionId: 'chem11-eq-q045',
    recognition: 'Dạng thêm chất rắn tinh khiết: kiểm tra chất đó có xuất hiện trong biểu thức cân bằng hay không.',
    detailedSteps: [
      { order: 1, title: 'Xét trạng thái', explanation: '$CaCO_3$ là chất rắn tinh khiết và pha rắn vẫn tồn tại.' },
      { order: 2, title: 'Kết luận', explanation: 'Tăng lượng chất rắn không làm thay đổi đại lượng trong biểu thức cân bằng nên hệ không chuyển dịch.' }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Áp dụng máy móc “thêm chất đầu thì sang phải” cho chất rắn tinh khiết.'],
    reviewSuggestions: ['Ôn cân bằng dị thể và vai trò của pha tinh khiết.']
  },
  {
    id: 'chem11-eq-s046', questionId: 'chem11-eq-q046',
    recognition: 'Dạng thêm khí trơ ở thể tích không đổi: cần xét áp suất riêng phần hoặc nồng độ của các chất tham gia, không chỉ xét áp suất tổng.',
    detailedSteps: [
      { order: 1, title: 'Xét đại lượng của chất phản ứng', explanation: 'Thể tích và số mol các chất phản ứng không đổi nên nồng độ/áp suất riêng phần của chúng không đổi.' },
      { order: 2, title: 'Kết luận', explanation: 'Khí trơ không có trong phản ứng và không làm hệ lệch khỏi cân bằng, nên không chuyển dịch.' }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Thấy áp suất tổng tăng rồi áp dụng ngay quy tắc phía ít mol khí.'],
    reviewSuggestions: ['Ôn phân biệt áp suất tổng và áp suất riêng phần.']
  },
  {
    id: 'chem11-eq-s047', questionId: 'chem11-eq-q047',
    recognition: 'Dạng phân biệt chuyển dịch với thay đổi $K_C$: trước hết đọc điều kiện nhiệt độ; nếu nhiệt độ giữ nguyên thì các tác động nồng độ/thể tích không đổi $K_C$.',
    detailedSteps: [
      { order: 1, title: 'Đọc điều kiện chung', explanation: 'Cả ba thí nghiệm cùng phản ứng và cùng nhiệt độ.' },
      { order: 2, title: 'Đánh giá từng tác động', explanation: 'Thêm, bớt chất hoặc đổi thể tích có thể làm chuyển dịch thành phần, nhưng không làm đổi $K_C$ ở nhiệt độ đó.' }
    ],
    finalAnswer: 'C',
    commonMistakes: ['Cho rằng cứ cân bằng chuyển dịch thì hằng số phải thay đổi.'],
    reviewSuggestions: ['Ôn yếu tố quyết định giá trị $K_C$.']
  },
  {
    id: 'chem11-eq-s048', questionId: 'chem11-eq-q048',
    recognition: 'Dạng tổng hợp nhiều tác động: xử lí riêng áp suất, nồng độ và $K_C$, không dùng một quy tắc cho cả ba.',
    detailedSteps: [
      { order: 1, title: 'Xét nén hệ', explanation: 'Hai vế đều có 2 mol khí nên nén không làm chuyển dịch.' },
      { order: 2, title: 'Xét thêm chất và hằng số', explanation: 'Thêm $H_2$ làm cân bằng sang phải để tiêu thụ $H_2$; nhiệt độ không đổi nên $K_C$ không đổi.' }
    ],
    finalAnswer: 'D',
    commonMistakes: ['Trộn lẫn quy tắc nồng độ và áp suất.', 'Cho rằng thêm chất làm đổi $K_C$.'],
    reviewSuggestions: ['Ôn bảng quyết định tác động–chiều chuyển dịch–giá trị $K_C$.']
  },
  {
    id: 'chem11-eq-s049', questionId: 'chem11-eq-q049',
    recognition: 'Dạng đổi nhiệt độ có $\\Delta H<0$: chiều thuận là chiều tỏa nhiệt; giảm nhiệt độ ưu tiên chiều tỏa nhiệt.',
    detailedSteps: [
      { order: 1, title: 'Xác định chiều nhiệt', explanation: '$\\Delta H<0$ nên chiều tạo $NH_3$ là chiều tỏa nhiệt.' },
      { order: 2, title: 'Áp dụng Le Chatelier', explanation: 'Giảm nhiệt độ làm hệ chuyển sang chiều tỏa nhiệt, tức sang phải.' }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Cho rằng giảm nhiệt độ luôn làm cân bằng sang trái.'],
    reviewSuggestions: ['Ôn cách xem nhiệt như sản phẩm của chiều tỏa nhiệt.']
  },
  {
    id: 'chem11-eq-s050', questionId: 'chem11-eq-q050',
    recognition: 'Dạng đổi nhiệt độ có $\\Delta H>0$: chiều thuận thu nhiệt nên được ưu tiên khi tăng nhiệt độ.',
    detailedSteps: [
      { order: 1, title: 'Đọc dấu enthalpy', explanation: '$\\Delta H>0$ cho biết chiều phân hủy $CaCO_3$ là chiều thu nhiệt.' },
      { order: 2, title: 'Chọn chiều', explanation: 'Tăng nhiệt độ làm cân bằng sang phải để hấp thụ bớt nhiệt.' }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Cho rằng có chất rắn thì nhiệt độ không thể làm chuyển dịch.'],
    reviewSuggestions: ['Ôn ảnh hưởng nhiệt độ khác với ảnh hưởng lượng chất rắn.']
  },
  {
    id: 'chem11-eq-s051', questionId: 'chem11-eq-q051',
    recognition: 'Dạng vai trò xúc tác: từ khóa cần nhớ là “nhanh hơn”, không phải “nhiều sản phẩm hơn”.',
    detailedSteps: [
      { order: 1, title: 'Xét động học', explanation: 'Xúc tác hạ năng lượng hoạt hóa cho cả chiều thuận và chiều nghịch.' },
      { order: 2, title: 'Xét cân bằng', explanation: 'Hai chiều đều nhanh hơn nên hệ đạt cùng trạng thái cân bằng trong thời gian ngắn hơn.' }
    ],
    finalAnswer: 'C',
    commonMistakes: ['Chỉ tăng tốc độ thuận.', 'Đồng nhất tốc độ với hiệu suất cân bằng.'],
    reviewSuggestions: ['Ôn phân biệt động học và cân bằng.']
  },
  {
    id: 'chem11-eq-s052', questionId: 'chem11-eq-q052',
    recognition: 'Dạng hỏi đại lượng không đổi khi thêm xúc tác: chọn thành phần cân bằng và $K_C$ ở cùng nhiệt độ.',
    detailedSteps: [
      { order: 1, title: 'Loại đại lượng động học', explanation: 'Xúc tác làm thay đổi năng lượng hoạt hóa và tốc độ hai chiều.' },
      { order: 2, title: 'Giữ nguyên đại lượng cân bằng', explanation: 'Xúc tác không đổi vị trí cân bằng hoặc $K_C$.' }
    ],
    finalAnswer: 'D',
    commonMistakes: ['Cho rằng xúc tác làm tăng $K_C$.'],
    reviewSuggestions: ['Ôn bảng tác động của xúc tác.']
  },
  {
    id: 'chem11-eq-s053', questionId: 'chem11-eq-q053',
    recognition: 'Dạng nối nhiệt độ với màu: chiều tạo $N_2O_4$ tỏa nhiệt, nên tăng nhiệt độ ưu tiên chiều tạo $NO_2$ màu nâu.',
    detailedSteps: [
      { order: 1, title: 'Xác định chiều chuyển dịch', explanation: 'Tăng nhiệt độ ưu tiên chiều nghịch thu nhiệt, tạo thêm $NO_2$.' },
      { order: 2, title: 'Suy ra hiện tượng', explanation: '$NO_2$ màu nâu tăng nên màu nâu đậm hơn.' }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Cho rằng tăng nhiệt độ luôn ưu tiên chiều thuận.', 'Gắn màu nâu cho $N_2O_4$.'],
    reviewSuggestions: ['Ôn hệ $NO_2/N_2O_4$ và dấu hiệu màu.']
  },
  {
    id: 'chem11-eq-s054', questionId: 'chem11-eq-q054',
    recognition: 'Dạng so sánh hai hệ có/không xúc tác: so riêng thời gian đạt cân bằng và giá trị cuối.',
    detailedSteps: [
      { order: 1, title: 'So thời gian', explanation: 'Bình có xúc tác đạt cân bằng nhanh hơn.' },
      { order: 2, title: 'So trạng thái cuối', explanation: 'Cùng nhiệt độ và thành phần ban đầu nên hai bình có cùng thành phần cân bằng.' }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Cho rằng bình có xúc tác có nhiều sản phẩm hơn.'],
    reviewSuggestions: ['Ôn tác động của xúc tác lên đồ thị theo thời gian.']
  },
  {
    id: 'chem11-eq-s055', questionId: 'chem11-eq-q055',
    recognition: 'Dạng đánh đổi nhiệt độ công nghiệp: nhiệt độ thấp có lợi cho cân bằng tỏa nhiệt nhưng bất lợi cho tốc độ.',
    detailedSteps: [
      { order: 1, title: 'Xét hiệu suất', explanation: 'Giảm nhiệt độ ưu tiên chiều tạo $NH_3$.' },
      { order: 2, title: 'Xét tốc độ', explanation: 'Nếu nhiệt độ quá thấp, tốc độ phản ứng quá nhỏ nên năng suất theo thời gian không phù hợp.' }
    ],
    finalAnswer: 'C',
    commonMistakes: ['Coi hiệu suất cân bằng là tiêu chí vận hành duy nhất.'],
    reviewSuggestions: ['Ôn khái niệm nhiệt độ thỏa hiệp.']
  },
  {
    id: 'chem11-eq-s056', questionId: 'chem11-eq-q056',
    recognition: 'Dạng chọn phương án sản xuất: tìm phương án vừa giữ nhiệt độ thỏa hiệp vừa dùng xúc tác đúng vai trò.',
    detailedSteps: [
      { order: 1, title: 'Xét nhiệt độ', explanation: 'Nhiệt độ quá cao bất lợi cho cân bằng tỏa nhiệt; quá thấp làm tốc độ chậm.' },
      { order: 2, title: 'Xét xúc tác', explanation: 'Xúc tác tăng tốc độ mà không thay đổi thành phần cân bằng, phù hợp với phương án D.' }
    ],
    finalAnswer: 'D',
    commonMistakes: ['Cho rằng nhiệt độ cao đồng thời tăng hiệu suất cân bằng của phản ứng tỏa nhiệt.'],
    reviewSuggestions: ['Ôn quy trình lựa chọn điều kiện công nghiệp.']
  },
  {
    id: 'chem11-eq-s057', questionId: 'chem11-eq-q057',
    recognition: 'Dạng đọc bảng phương án: loại các cực trị gây tốc độ quá chậm, hiệu suất thấp hoặc chi phí áp suất quá lớn.',
    detailedSteps: [
      { order: 1, title: 'Loại phương án cực đoan', explanation: 'I có nhiệt độ rất thấp và áp suất rất cao; III có nhiệt độ rất cao bất lợi cho cân bằng tỏa nhiệt.' },
      { order: 2, title: 'Chọn thỏa hiệp', explanation: 'II dùng điều kiện vừa phải và xúc tác nên cân bằng hơn giữa hiệu suất, tốc độ và chi phí.' }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Chọn phương án có áp suất cao nhất mà bỏ qua tốc độ và chi phí.'],
    reviewSuggestions: ['Ôn ma trận hiệu suất–tốc độ–chi phí–an toàn.']
  },
  {
    id: 'chem11-eq-s058', questionId: 'chem11-eq-q058',
    recognition: 'Dạng suy nhiệt độ từ $K_C$: với chiều thuận tỏa nhiệt, tăng nhiệt độ làm cân bằng nghiêng bớt về sản phẩm nên $K_C$ giảm.',
    detailedSteps: [
      { order: 1, title: 'Xác định chiều được ưu tiên', explanation: '$T_2>T_1$ nên chiều nghịch thu nhiệt được ưu tiên.' },
      { order: 2, title: 'Nối với hằng số', explanation: 'Sản phẩm kém ưu thế hơn ở nhiệt độ cao nên $K_C$ giảm từ 80 xuống 20.' }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Cho rằng $K_C$ không phụ thuộc nhiệt độ.', 'Dùng xúc tác để giải thích thay đổi $K_C$.'],
    reviewSuggestions: ['Ôn quan hệ định tính giữa nhiệt độ, chiều nhiệt và $K_C$.']
  },
  {
    id: 'chem11-eq-s059', questionId: 'chem11-eq-q059',
    recognition: 'Dạng bảng có cùng giá trị cuối nhưng thời gian khác nhau: dấu hiệu điển hình của xúc tác.',
    detailedSteps: [
      { order: 1, title: 'So trạng thái cuối', explanation: 'Cả hai hệ đều ổn định ở $0{,}62$ M nên vị trí cân bằng không đổi.' },
      { order: 2, title: 'So thời gian', explanation: 'Hệ I ổn định sau 40 s, nhanh hơn hệ II nên phù hợp với hệ có xúc tác.' }
    ],
    finalAnswer: 'C',
    commonMistakes: ['Cho rằng cùng nồng độ cuối thì không thể nhận ra xúc tác.'],
    reviewSuggestions: ['Ôn cách đọc dữ liệu động học và cân bằng trên cùng bảng.']
  },
  {
    id: 'chem11-eq-s060', questionId: 'chem11-eq-q060',
    recognition: 'Dạng tổng hợp điều kiện Haber: đáp án tốt phải đồng thời nói đúng nhiệt độ, áp suất, xúc tác, tách sản phẩm và giới hạn thực tế.',
    detailedSteps: [
      { order: 1, title: 'Đánh giá từng công cụ', explanation: 'Áp suất và tách $NH_3$ hỗ trợ chuyển dịch; xúc tác hỗ trợ tốc độ; nhiệt độ phải thỏa hiệp.' },
      { order: 2, title: 'Kiểm tra tính thực tế', explanation: 'Phương án D còn xét chi phí và an toàn nên đầy đủ hơn các lựa chọn cực đoan.' }
    ],
    finalAnswer: 'D',
    commonMistakes: ['Chọn một yếu tố duy nhất rồi coi là đủ cho quy trình sản xuất.'],
    reviewSuggestions: ['Ôn sơ đồ quyết định điều kiện sản xuất ammonia.']
  },
  {
    id: 'chem11-eq-s061', questionId: 'chem11-eq-q061',
    recognition: 'Dạng hiện tượng khi làm lạnh: nhớ $NO_2$ màu nâu, $N_2O_4$ gần như không màu và chiều tạo $N_2O_4$ tỏa nhiệt.',
    detailedSteps: [
      { order: 1, title: 'Chọn chiều', explanation: 'Làm lạnh ưu tiên chiều tỏa nhiệt tạo $N_2O_4$.' },
      { order: 2, title: 'Đổi sang tín hiệu màu', explanation: '$NO_2$ giảm nên màu nâu nhạt hơn.' }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Gắn màu nâu cho $N_2O_4$.'],
    reviewSuggestions: ['Ôn bảng chất–màu của hệ $NO_2/N_2O_4$.']
  },
  {
    id: 'chem11-eq-s062', questionId: 'chem11-eq-q062',
    recognition: 'Dạng hiện tượng khi làm nóng: tăng nhiệt độ ưu tiên chiều thu nhiệt tạo $NO_2$.',
    detailedSteps: [
      { order: 1, title: 'Xác định chiều', explanation: 'Chiều nghịch $N_2O_4\\rightarrow2NO_2$ là chiều thu nhiệt.' },
      { order: 2, title: 'Kết luận màu', explanation: '$NO_2$ tăng làm màu nâu đậm hơn.' }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Cho rằng nóng làm mọi phản ứng thuận xảy ra nhiều hơn.'],
    reviewSuggestions: ['Ôn cách xác định chiều thu nhiệt.']
  },
  {
    id: 'chem11-eq-s063', questionId: 'chem11-eq-q063',
    recognition: 'Dạng giải mã tín hiệu quan sát: trước khi suy luận phải gắn đúng màu với đúng cấu tử.',
    detailedSteps: [
      { order: 1, title: 'Gắn tín hiệu', explanation: '$NO_2$ là cấu tử tạo màu nâu; $N_2O_4$ gần như không màu.' },
      { order: 2, title: 'Suy thành phần', explanation: 'Màu nâu đậm hơn phản ánh tỉ lệ $NO_2$ tăng.' }
    ],
    finalAnswer: 'C',
    commonMistakes: ['Suy màu đậm nghĩa là tổng lượng khí tăng mà không xét cấu tử màu.'],
    reviewSuggestions: ['Ôn quan hệ giữa tín hiệu vĩ mô và thành phần vi mô.']
  },
  {
    id: 'chem11-eq-s064', questionId: 'chem11-eq-q064',
    recognition: 'Dạng thời điểm ghi số liệu: cụm “cân bằng mới” đòi hỏi chờ đại lượng quan sát ổn định.',
    detailedSteps: [
      { order: 1, title: 'Nhận ra giai đoạn chuyển tiếp', explanation: 'Ngay sau khi đổi bể nhiệt, hệ đang chuyển dịch và màu còn thay đổi.' },
      { order: 2, title: 'Chọn thời điểm đo', explanation: 'Chỉ ghi màu sau khi ổn định để đại diện cho trạng thái cân bằng mới.' }
    ],
    finalAnswer: 'D',
    commonMistakes: ['Cho rằng chờ ổn định nghĩa là phản ứng dừng.'],
    reviewSuggestions: ['Ôn cân bằng động và giai đoạn tái lập cân bằng.']
  },
  {
    id: 'chem11-eq-s065', questionId: 'chem11-eq-q065',
    recognition: 'Dạng an toàn hóa chất khí: ưu tiên hệ kín và loại ngay thao tác mở hoặc ngửi trực tiếp.',
    detailedSteps: [
      { order: 1, title: 'Nhận diện nguy cơ', explanation: '$NO_2$ là khí độc và kích ứng mạnh.' },
      { order: 2, title: 'Chọn kiểm soát', explanation: 'Chỉ quan sát hệ kín dưới giám sát; không mở hoặc ngửi khí.' }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Coi ngửi nhẹ là cách nhận biết an toàn.'],
    reviewSuggestions: ['Ôn nguyên tắc không ngửi trực tiếp hóa chất.']
  },
  {
    id: 'chem11-eq-s066', questionId: 'chem11-eq-q066',
    recognition: 'Dạng kiểm soát biến: nếu khảo sát nhiệt độ thì chỉ nhiệt độ được thay đổi có chủ đích.',
    detailedSteps: [
      { order: 1, title: 'Xác định biến độc lập', explanation: 'Biến cần khảo sát là nhiệt độ.' },
      { order: 2, title: 'Giữ các biến khác', explanation: 'Lượng khí, thể tích và cách quan sát phải giống nhau để so sánh có ý nghĩa.' }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Thay đổi đồng thời lượng khí hoặc mở hệ.'],
    reviewSuggestions: ['Ôn biến độc lập, phụ thuộc và kiểm soát.']
  },
  {
    id: 'chem11-eq-s067', questionId: 'chem11-eq-q067',
    recognition: 'Dạng chứng minh tính thuận nghịch: cần thay điều kiện qua lại và quan sát hệ phục hồi trạng thái tương ứng.',
    detailedSteps: [
      { order: 1, title: 'Tạo chuỗi điều kiện', explanation: 'Lạnh rồi trở lại nhiệt độ ban đầu giúp kiểm tra màu có phục hồi hay không.' },
      { order: 2, title: 'Bổ sung đối chiếu', explanation: 'Làm nóng sau đó cho thấy chiều chuyển dịch ngược lại; mỗi bước đều phải chờ ổn định.' }
    ],
    finalAnswer: 'C',
    commonMistakes: ['Chỉ quan sát một nhiệt độ rồi kết luận thuận nghịch.'],
    reviewSuggestions: ['Ôn cách thiết kế chuỗi thay đổi–phục hồi.']
  },
  {
    id: 'chem11-eq-s068', questionId: 'chem11-eq-q068',
    recognition: 'Dạng đánh giá đề xuất thí nghiệm: kiểm tra đồng thời tính hợp lệ của hệ và an toàn.',
    detailedSteps: [
      { order: 1, title: 'Xét thiết kế', explanation: 'Mở ống làm thay đổi lượng chất và áp suất, nên không còn chỉ khảo sát nhiệt độ.' },
      { order: 2, title: 'Xét an toàn', explanation: 'Mở hệ còn tạo nguy cơ phơi nhiễm $NO_2$ độc, vì vậy không được chấp nhận.' }
    ],
    finalAnswer: 'D',
    commonMistakes: ['Chỉ nêu lỗi dữ liệu mà bỏ qua nguy cơ an toàn.'],
    reviewSuggestions: ['Ôn thứ tự kiểm tra: an toàn → biến thí nghiệm → kết luận.']
  },
  {
    id: 'chem11-eq-s069', questionId: 'chem11-eq-q069',
    recognition: 'Dạng đọc bảng nhiệt độ–màu: chỉ số màu tăng nghĩa là $NO_2$ tăng; nối xu hướng đó với chiều hấp thụ nhiệt.',
    detailedSteps: [
      { order: 1, title: 'Đọc xu hướng', explanation: 'Nhiệt độ tăng từ 10 lên 50 °C thì chỉ số màu tăng từ 22 lên 73.' },
      { order: 2, title: 'Giải thích cân bằng', explanation: '$NO_2$ tăng ở nhiệt độ cao nên chiều tạo $NO_2$ là chiều thu nhiệt.' }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Chỉ đọc số tăng nhưng gắn nhầm cấu tử màu.'],
    reviewSuggestions: ['Ôn chuyển đổi dữ liệu → thành phần → chiều nhiệt.']
  },
  {
    id: 'chem11-eq-s070', questionId: 'chem11-eq-q070',
    recognition: 'Dạng dữ liệu phục hồi: giá trị quay lại gần ban đầu khi điều kiện được phục hồi là bằng chứng của chuyển dịch thuận nghịch.',
    detailedSteps: [
      { order: 1, title: 'So hai lần ở 25 °C', explanation: 'Chỉ số màu đều xấp xỉ 40 trước và sau chu trình.' },
      { order: 2, title: 'Rút kết luận', explanation: 'Hệ không mất chất đáng kể và thiết lập lại trạng thái cân bằng tương ứng khi nhiệt độ được phục hồi.' }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Chỉ nhìn lần làm lạnh mà bỏ qua dữ liệu phục hồi.'],
    reviewSuggestions: ['Ôn bằng chứng về tính thuận nghịch từ chu trình điều kiện.']
  },
  {
    id: 'chem11-eq-s071', questionId: 'chem11-eq-q071',
    recognition: 'Dạng phát hiện biến gây nhiễu: hai mẫu khác lượng khí thì màu có thể khác dù nhiệt độ không phải nguyên nhân duy nhất.',
    detailedSteps: [
      { order: 1, title: 'Liệt kê điểm khác nhau', explanation: 'Hai ống khác cả nhiệt độ lẫn lượng khí ban đầu.' },
      { order: 2, title: 'Đánh giá suy luận', explanation: 'Không thể quy toàn bộ chênh lệch màu cho nhiệt độ khi lượng khí chưa được kiểm soát.' }
    ],
    finalAnswer: 'C',
    commonMistakes: ['Thấy xu hướng phù hợp lí thuyết rồi bỏ qua thiết kế thí nghiệm.'],
    reviewSuggestions: ['Ôn nguyên tắc mỗi lần chỉ thay một biến.']
  },
  {
    id: 'chem11-eq-s072', questionId: 'chem11-eq-q072',
    recognition: 'Dạng phân biệt dữ liệu chuyển tiếp và dữ liệu cân bằng: tìm cột được ghi sau khi đại lượng đã ổn định.',
    detailedSteps: [
      { order: 1, title: 'Đánh giá cột 5 giây', explanation: 'Sau 5 giây, hai hệ có thể vẫn đang chuyển dịch nên chưa đại diện cân bằng.' },
      { order: 2, title: 'Chọn dữ liệu đúng', explanation: 'Các giá trị ổn định mới dùng để so sánh thành phần cân bằng ở hai nhiệt độ.' }
    ],
    finalAnswer: 'D',
    commonMistakes: ['Chọn cùng thời điểm đo thay vì cùng trạng thái cân bằng.'],
    reviewSuggestions: ['Ôn tiêu chí nhận biết trạng thái ổn định từ dữ liệu lặp.']
  },
  {
    id: 'chem11-eq-s073', questionId: 'chem11-eq-q073',
    recognition: 'Dạng nhận diện từ độ dẫn điện: tìm dung dịch tạo nhiều ion chuyển động tự do.',
    detailedSteps: [
      { order: 1, title: 'Xét dạng hạt', explanation: '$NaCl$ tan và phân li thành $Na^+$, $Cl^-$.' },
      { order: 2, title: 'Kết luận dẫn điện', explanation: 'Các ion chuyển động mang điện tích qua dung dịch nên dung dịch $NaCl$ dẫn điện tốt.' }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Chọn chất tan tốt nhưng không tạo ion.'],
    reviewSuggestions: ['Ôn bản chất dòng điện trong dung dịch.']
  },
  {
    id: 'chem11-eq-s074', questionId: 'chem11-eq-q074',
    recognition: 'Dạng phân biệt hòa tan và điện li: tan không đồng nghĩa tạo ion.',
    detailedSteps: [
      { order: 1, title: 'Xét sau khi hòa tan', explanation: 'Saccharose phân tán trong nước chủ yếu dưới dạng phân tử trung hòa.' },
      { order: 2, title: 'Phân loại', explanation: 'Không tạo ion tự do đáng kể nên saccharose là chất không điện li.' }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Cho rằng mọi chất tan trong nước đều điện li.'],
    reviewSuggestions: ['Ôn ba trạng thái: không tan, tan dạng phân tử và tan tạo ion.']
  },
  {
    id: 'chem11-eq-s075', questionId: 'chem11-eq-q075',
    recognition: 'Dạng so sánh chất rắn và dung dịch ion: kiểm tra khả năng chuyển động của hạt mang điện.',
    detailedSteps: [
      { order: 1, title: 'Trong tinh thể', explanation: 'Các ion bị giữ tại vị trí mạng tinh thể nên không dịch chuyển tự do.' },
      { order: 2, title: 'Trong dung dịch', explanation: 'Ion được solvate hóa và có thể chuyển động, nhờ đó dung dịch dẫn điện.' }
    ],
    finalAnswer: 'C',
    commonMistakes: ['Thấy có ion trong tinh thể rồi kết luận chất rắn dẫn điện.'],
    reviewSuggestions: ['Ôn điều kiện hạt mang điện phải chuyển động được.']
  },
  {
    id: 'chem11-eq-s076', questionId: 'chem11-eq-q076',
    recognition: 'Dạng phương trình điện li acid mạnh một nấc: tách thành cation hydrogen và anion tương ứng.',
    detailedSteps: [
      { order: 1, title: 'Xác định ion', explanation: '$HCl$ tạo $H^+$ và $Cl^-$ trong cách biểu diễn đang dùng.' },
      { order: 2, title: 'Kiểm tra', explanation: 'Số nguyên tử và tổng điện tích 0 ở hai vế đều được bảo toàn.' }
    ],
    finalAnswer: 'D',
    commonMistakes: ['Đảo dấu điện tích của $H^+$ và $Cl^-$.'],
    reviewSuggestions: ['Ôn điện tích ion đơn nguyên tử phổ biến.']
  },
  {
    id: 'chem11-eq-s077', questionId: 'chem11-eq-q077',
    recognition: 'Dạng muối có hai anion: chỉ số 2 của chlorine trở thành hệ số 2 trước $Cl^-$.',
    detailedSteps: [
      { order: 1, title: 'Tách ion', explanation: 'Một đơn vị $CaCl_2$ tạo một $Ca^{2+}$ và hai $Cl^-$. ' },
      { order: 2, title: 'Kiểm tra điện tích', explanation: '$+2+2(-1)=0$, khớp chất ban đầu trung hòa.' }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Bỏ hệ số 2 trước chloride.'],
    reviewSuggestions: ['Ôn chuyển chỉ số công thức thành hệ số ion.']
  },
  {
    id: 'chem11-eq-s078', questionId: 'chem11-eq-q078',
    recognition: 'Dạng muối nhiều ion: chuyển đúng cả chỉ số 2 và 3 thành hệ số, giữ nguyên điện tích ion đa nguyên tử.',
    detailedSteps: [
      { order: 1, title: 'Đọc công thức', explanation: '$Al_2(SO_4)_3$ chứa hai ion $Al^{3+}$ và ba ion $SO_4^{2-}$.' },
      { order: 2, title: 'Bảo toàn điện tích', explanation: '$2(+3)+3(-2)=0$, nên phương án B đúng.' }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Đổi điện tích sulfate theo chỉ số trong công thức.'],
    reviewSuggestions: ['Ôn phân biệt chỉ số, hệ số và điện tích.']
  },
  {
    id: 'chem11-eq-s079', questionId: 'chem11-eq-q079',
    recognition: 'Dạng chất điện li yếu: dùng mũi tên thuận nghịch và giữ lại sự tồn tại của phân tử chưa điện li.',
    detailedSteps: [
      { order: 1, title: 'Xác định ion', explanation: 'Acetic acid tạo $H^+$ và $CH_3COO^-$.' },
      { order: 2, title: 'Xác định mức độ', explanation: 'Chất điện li yếu chỉ phân li một phần nên biểu diễn bằng cân bằng.' }
    ],
    finalAnswer: 'C',
    commonMistakes: ['Dùng mũi tên một chiều như chất điện li mạnh.'],
    reviewSuggestions: ['Ôn cách biểu diễn mạnh và yếu.']
  },
  {
    id: 'chem11-eq-s080', questionId: 'chem11-eq-q080',
    recognition: 'Dạng phân biệt hai cặp thuật ngữ: mạnh/yếu là tỉ lệ phân li, đậm/loãng là nồng độ.',
    detailedSteps: [
      { order: 1, title: 'Định nghĩa mạnh/yếu', explanation: 'Nói về mức độ chất tan tạo ion.' },
      { order: 2, title: 'Định nghĩa đậm/loãng', explanation: 'Nói về lượng chất tan trong một thể tích, nên không thể thay thế cho mạnh/yếu.' }
    ],
    finalAnswer: 'D',
    commonMistakes: ['Cho rằng dung dịch loãng thì chất điện li yếu.'],
    reviewSuggestions: ['Ôn bảng hai trục: nồng độ và mức độ điện li.']
  },
  {
    id: 'chem11-eq-s081', questionId: 'chem11-eq-q081',
    recognition: 'Dạng đọc bảng dẫn điện cùng nồng độ: giá trị lớn hơn thường phản ánh nhiều hạt mang điện hơn trong điều kiện so sánh đã kiểm soát.',
    detailedSteps: [
      { order: 1, title: 'So số liệu', explanation: 'Mẫu I có độ dẫn 9,8, lớn nhất trong ba mẫu.' },
      { order: 2, title: 'Suy ra', explanation: 'Ở cùng nồng độ và điều kiện, mẫu I phù hợp với lượng ion tự do lớn nhất.' }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Bỏ qua điều kiện các dung dịch có cùng nồng độ.'],
    reviewSuggestions: ['Ôn giới hạn khi suy luận từ độ dẫn điện.']
  },
  {
    id: 'chem11-eq-s082', questionId: 'chem11-eq-q082',
    recognition: 'Dạng xếp hạng ba mức: điện li mạnh > điện li yếu > không điện li khi cùng nồng độ và điều kiện.',
    detailedSteps: [
      { order: 1, title: 'Phân loại', explanation: 'HCl điện li mạnh; $CH_3COOH$ điện li yếu; glucose không điện li.' },
      { order: 2, title: 'Xếp hạng', explanation: 'Số ion tự do và độ dẫn dự kiến giảm theo thứ tự HCl > acid acetic > glucose.' }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Cho glucose dẫn tốt chỉ vì tan nhiều trong nước.'],
    reviewSuggestions: ['Ôn quan hệ định tính giữa mức độ điện li và độ dẫn.']
  },
  {
    id: 'chem11-eq-s083', questionId: 'chem11-eq-q083',
    recognition: 'Dạng mô hình hạt: nhìn tỉ lệ ion so với phân tử, không dựa vào tổng số hạt vẽ.',
    detailedSteps: [
      { order: 1, title: 'Đọc từng mẫu', explanation: 'X gần như toàn ion; Y còn nhiều phân tử và ít ion; Z chỉ có phân tử.' },
      { order: 2, title: 'Phân loại', explanation: 'Tương ứng X điện li mạnh, Y điện li yếu, Z không điện li.' }
    ],
    finalAnswer: 'C',
    commonMistakes: ['Nhầm “một ít ion” với không điện li hoàn toàn.'],
    reviewSuggestions: ['Ôn ba mô hình hạt điển hình.']
  },
  {
    id: 'chem11-eq-s084', questionId: 'chem11-eq-q084',
    recognition: 'Dạng kiểm tra bảo toàn điện tích: nhân điện tích mỗi ion với hệ số của ion đó.',
    detailedSteps: [
      { order: 1, title: 'Tổng dương', explanation: 'Hai $Al^{3+}$ cho tổng điện tích $+6$.' },
      { order: 2, title: 'Tổng âm', explanation: 'Ba $SO_4^{2-}$ cho tổng điện tích $-6$, bảo toàn điện tích.' }
    ],
    finalAnswer: 'D',
    commonMistakes: ['Cộng điện tích mà không nhân hệ số ion.'],
    reviewSuggestions: ['Ôn phép kiểm tra tổng điện tích sau điện li.']
  },
  {
    id: 'chem11-eq-s085', questionId: 'chem11-eq-q085',
    recognition: 'Dạng xác định vai trò trực tiếp: so $NH_3$ với $NH_4^+$ để thấy chất đã nhận thêm một proton.',
    detailedSteps: [
      { order: 1, title: 'Theo dõi proton', explanation: '$NH_3$ nhận $H^+$ để trở thành $NH_4^+$.' },
      { order: 2, title: 'Gán vai trò', explanation: 'Chất nhận proton là base Brønsted.' }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Cho rằng không có nhóm OH nên $NH_3$ không thể là base.'],
    reviewSuggestions: ['Ôn định nghĩa chất nhận proton.']
  },
  {
    id: 'chem11-eq-s086', questionId: 'chem11-eq-q086',
    recognition: 'Dạng tìm chất cho proton: quan sát chất mất $H^+$ và tạo base liên hợp.',
    detailedSteps: [
      { order: 1, title: 'Theo dõi H', explanation: '$HCl$ chuyển proton cho $H_2O$ và trở thành $Cl^-$.' },
      { order: 2, title: 'Kết luận', explanation: '$HCl$ là chất cho proton nên là acid.' }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Chọn $H_3O^+$ vì sản phẩm có nhiều hydrogen hơn.'],
    reviewSuggestions: ['Ôn cách so công thức trước và sau phản ứng.']
  },
  {
    id: 'chem11-eq-s087', questionId: 'chem11-eq-q087',
    recognition: 'Dạng nhận diện cặp liên hợp: hai công thức phải khác nhau đúng một $H^+$.',
    detailedSteps: [
      { order: 1, title: 'So công thức', explanation: '$NH_4^+$ mất một proton tạo $NH_3$.' },
      { order: 2, title: 'Kết luận cặp', explanation: '$NH_4^+/NH_3$ là một cặp acid–base liên hợp.' }
    ],
    finalAnswer: 'C',
    commonMistakes: ['Ghép hai ion trái dấu nhưng không liên hệ bằng một proton.'],
    reviewSuggestions: ['Ôn phép thử “thêm hoặc bớt đúng một H⁺”.']
  },
  {
    id: 'chem11-eq-s088', questionId: 'chem11-eq-q088',
    recognition: 'Dạng vai trò của nước: nhìn sản phẩm $H_3O^+$ để nhận ra nước đã nhận proton.',
    detailedSteps: [
      { order: 1, title: 'Theo dõi nước', explanation: '$H_2O$ nhận $H^+$ và trở thành $H_3O^+$.' },
      { order: 2, title: 'Gán vai trò', explanation: 'Chất nhận proton là base.' }
    ],
    finalAnswer: 'D',
    commonMistakes: ['Gán nước luôn trung tính nên không có vai trò acid/base.'],
    reviewSuggestions: ['Ôn vai trò phụ thuộc phản ứng của nước.']
  },
  {
    id: 'chem11-eq-s089', questionId: 'chem11-eq-q089',
    recognition: 'Dạng ion nhận proton: so $HCO_3^-$ với $H_2CO_3$ ở phía sản phẩm.',
    detailedSteps: [
      { order: 1, title: 'Xác định biến đổi', explanation: '$HCO_3^-$ nhận một proton để tạo $H_2CO_3$.' },
      { order: 2, title: 'Kết luận', explanation: 'Vì nhận proton nên $HCO_3^-$ là base trong phản ứng này.' }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Dựa vào điện tích âm để gán vai trò mà không theo dõi proton.'],
    reviewSuggestions: ['Ôn cách xác định vai trò từ biến đổi công thức.']
  },
  {
    id: 'chem11-eq-s090', questionId: 'chem11-eq-q090',
    recognition: 'Dạng ion cho proton: $HSO_4^-$ mất H và trở thành $SO_4^{2-}$.',
    detailedSteps: [
      { order: 1, title: 'Theo dõi proton', explanation: '$HSO_4^-$ cho $H^+$ cho nước.' },
      { order: 2, title: 'Gán vai trò', explanation: 'Chất cho proton là acid Brønsted.' }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Cho rằng ion âm luôn là base.'],
    reviewSuggestions: ['Ôn vai trò không được quyết định chỉ bởi dấu điện tích.']
  },
  {
    id: 'chem11-eq-s091', questionId: 'chem11-eq-q091',
    recognition: 'Dạng kiểm tra định nghĩa cặp liên hợp: bỏ hoặc thêm đúng một proton, không thay đổi khung nguyên tử còn lại.',
    detailedSteps: [
      { order: 1, title: 'Nêu tiêu chí', explanation: 'Acid mất một $H^+$ tạo base liên hợp; base nhận một $H^+$ tạo acid liên hợp.' },
      { order: 2, title: 'Chọn dấu hiệu', explanation: 'Vì vậy hai công thức phải khác nhau đúng một proton.' }
    ],
    finalAnswer: 'C',
    commonMistakes: ['Ghép hai chất chỉ vì cùng nằm trong một phản ứng.'],
    reviewSuggestions: ['Ôn sơ đồ acid ⇌ base liên hợp + H⁺.']
  },
  {
    id: 'chem11-eq-s092', questionId: 'chem11-eq-q092',
    recognition: 'Dạng định nghĩa chất lưỡng tính Brønsted: cần có khả năng thực hiện cả hai hành động cho và nhận proton.',
    detailedSteps: [
      { order: 1, title: 'Xét với acid mạnh hơn', explanation: 'Nước có thể nhận proton và đóng vai trò base.' },
      { order: 2, title: 'Xét với base mạnh hơn', explanation: 'Nước có thể cho proton và đóng vai trò acid.' }
    ],
    finalAnswer: 'D',
    commonMistakes: ['Cho rằng nước trung hòa nên không thể là acid hoặc base.'],
    reviewSuggestions: ['Ôn hai phản ứng minh họa vai trò của nước.']
  },
  {
    id: 'chem11-eq-s093', questionId: 'chem11-eq-q093',
    recognition: 'Dạng cùng một chất trong hai phản ứng: không gán nhãn cố định, hãy theo dõi proton riêng từng phương trình.',
    detailedSteps: [
      { order: 1, title: 'Với ammonia', explanation: 'Nước cho proton nên là acid.' },
      { order: 2, title: 'Với HCl', explanation: 'Nước nhận proton nên là base; vai trò phụ thuộc đối tác.' }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Chọn một vai trò của nước rồi áp dụng cho mọi phản ứng.'],
    reviewSuggestions: ['Ôn ý nghĩa “vai trò theo phản ứng đang xét”.']
  },
  {
    id: 'chem11-eq-s094', questionId: 'chem11-eq-q094',
    recognition: 'Dạng tìm đủ hai cặp liên hợp: ghép mỗi chất đầu với sản phẩm khác nó đúng một proton.',
    detailedSteps: [
      { order: 1, title: 'Cặp của bicarbonate', explanation: '$HCO_3^-$ nhận $H^+$ tạo $H_2CO_3$, nên $H_2CO_3/HCO_3^-$ là một cặp.' },
      { order: 2, title: 'Cặp của nước', explanation: '$H_2O$ cho $H^+$ tạo $OH^-$, nên $H_2O/OH^-$ là cặp còn lại.' }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Ghép hai chất cùng vế thay vì theo dấu vết proton.'],
    reviewSuggestions: ['Ôn phương pháp kẻ hai đường nối liên hợp qua phương trình.']
  },
  {
    id: 'chem11-eq-s095', questionId: 'chem11-eq-q095',
    recognition: 'Dạng chứng minh lưỡng tính: đáp án phải đưa ra một lần nhận proton và một lần cho proton.',
    detailedSteps: [
      { order: 1, title: 'Vai trò base', explanation: '$HCO_3^-$ nhận $H^+$ tạo $H_2CO_3$.' },
      { order: 2, title: 'Vai trò acid', explanation: '$HCO_3^-$ cho $H^+$ tạo $CO_3^{2-}$; đủ hai vai trò.' }
    ],
    finalAnswer: 'C',
    commonMistakes: ['Dùng hai phản ứng mà chất đều chỉ nhận proton.'],
    reviewSuggestions: ['Ôn tiêu chí bằng chứng cho chất lưỡng tính.']
  },
  {
    id: 'chem11-eq-s096', questionId: 'chem11-eq-q096',
    recognition: 'Dạng ký hiệu tổng quát: theo dõi proton từ $HB$ sang $A^-$ rồi ghép chất trước–sau.',
    detailedSteps: [
      { order: 1, title: 'Theo dõi cặp của HB', explanation: '$HB$ cho proton và tạo $B^-$, nên $HB/B^-$ là một cặp.' },
      { order: 2, title: 'Theo dõi cặp của A⁻', explanation: '$A^-$ nhận proton tạo $HA$, nên $HA/A^-$ là cặp còn lại.' }
    ],
    finalAnswer: 'D',
    commonMistakes: ['Ghép chất va chạm với nhau thay vì chất trước và sau khi chuyển proton.'],
    reviewSuggestions: ['Ôn sơ đồ chuyển proton tổng quát.']
  },
  {
    id: 'chem11-eq-s097', questionId: 'chem11-eq-q097',
    recognition: 'Dạng nhận diện cân bằng nước: phương trình đúng phải tạo đồng thời $H_3O^+$ và $OH^-$, đồng thời bảo toàn nguyên tử và điện tích.',
    detailedSteps: [
      { order: 1, title: 'Xét chuyển proton', explanation: 'Một phân tử nước cho proton, phân tử còn lại nhận proton.' },
      { order: 2, title: 'Kiểm tra phương trình', explanation: '$2H_2O\\rightleftharpoons H_3O^++OH^-$ bảo toàn H, O và tổng điện tích.' }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Viết sự tự điện li thành phản ứng phân hủy nước không thuận nghịch.'],
    reviewSuggestions: ['Ôn cân bằng tự điện li của nước.']
  },
  {
    id: 'chem11-eq-s098', questionId: 'chem11-eq-q098',
    recognition: 'Dạng phân loại môi trường: trung tính được xác định bằng sự bằng nhau của hai nồng độ ion, không phải bằng việc không có ion.',
    detailedSteps: [
      { order: 1, title: 'Nhắc tiêu chí', explanation: 'Ở môi trường trung tính, $[H^+]=[OH^-]$.' },
      { order: 2, title: 'Loại ngộ nhận', explanation: 'Do nước tự điện li nên cả hai nồng độ đều khác 0.' }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Cho rằng trung tính nghĩa là $[H^+]=[OH^-]=0$.'],
    reviewSuggestions: ['Ôn ý nghĩa hóa học của môi trường trung tính.']
  },
  {
    id: 'chem11-eq-s099', questionId: 'chem11-eq-q099',
    recognition: 'Dạng đổi lũy thừa 10 sang pH: khi $[H^+]=10^{-a}$ M thì pH = a.',
    detailedSteps: [
      { order: 1, title: 'Dùng công thức', explanation: '$pH=-\\lg[H^+]$.' },
      { order: 2, title: 'Thay số', explanation: '$pH=-\\lg(10^{-3})=3$.' }
    ],
    finalAnswer: 'C',
    commonMistakes: ['Bỏ dấu trừ và nhận pH = −3.'],
    reviewSuggestions: ['Ôn logarit thập phân trong Module cầu nối.']
  },
  {
    id: 'chem11-eq-s100', questionId: 'chem11-eq-q100',
    recognition: 'Dạng đổi ngược từ pH sang nồng độ: dùng trực tiếp $[H^+]=10^{-pH}$.',
    detailedSteps: [
      { order: 1, title: 'Viết công thức ngược', explanation: '$[H^+]=10^{-pH}$.' },
      { order: 2, title: 'Thay pH', explanation: 'Với pH = 5, $[H^+]=10^{-5}$ M.' }
    ],
    finalAnswer: 'D',
    commonMistakes: ['Lấy $[H^+]=5$ M hoặc $10^5$ M.'],
    reviewSuggestions: ['Ôn cặp công thức pH và nồng độ ion hydrogen.']
  },
  {
    id: 'chem11-eq-s101', questionId: 'chem11-eq-q101',
    recognition: 'Dạng phân loại trực tiếp từ hai ion: so sánh $[H^+]$ với $[OH^-]$.',
    detailedSteps: [
      { order: 1, title: 'So sánh', explanation: 'Đề cho $[H^+]>[OH^-]$.' },
      { order: 2, title: 'Kết luận', explanation: 'Ion hydrogen chiếm ưu thế nên dung dịch có môi trường acid.' }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Chỉ dựa vào việc có mặt $OH^-$ để kết luận môi trường base.'],
    reviewSuggestions: ['Ôn ba tiêu chí acid–trung tính–base.']
  },
  {
    id: 'chem11-eq-s102', questionId: 'chem11-eq-q102',
    recognition: 'Dạng dùng tích số ion của nước: đã biết một nồng độ ion thì chia $K_w$ cho nồng độ đó.',
    detailedSteps: [
      { order: 1, title: 'Lập quan hệ', explanation: '$K_w=[H^+][OH^-]=10^{-14}$ ở 25 °C.' },
      { order: 2, title: 'Tính ion còn lại', explanation: '$[OH^-]=10^{-14}/10^{-5}=10^{-9}$ M.' }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Nhân hai số mũ hoặc cộng số mũ sai khi thực hiện phép chia.'],
    reviewSuggestions: ['Ôn $K_w$ và quy tắc chia lũy thừa cùng cơ số.']
  },
  {
    id: 'chem11-eq-s103', questionId: 'chem11-eq-q103',
    recognition: 'Dạng acid mạnh một nấc: trước hết suy ra $[H^+]$ bằng nồng độ acid, sau đó mới tính pH.',
    detailedSteps: [
      { order: 1, title: 'Điện li', explanation: 'HCl điện li hoàn toàn theo tỉ lệ 1:1 nên $[H^+]=0,010=10^{-2}$ M.' },
      { order: 2, title: 'Tính pH', explanation: '$pH=-\\lg(10^{-2})=2$.' }
    ],
    finalAnswer: 'C',
    commonMistakes: ['Lấy pH bằng nồng độ mol hoặc lấy $14-2$.'],
    reviewSuggestions: ['Ôn quy trình pH của acid mạnh một nấc.']
  },
  {
    id: 'chem11-eq-s104', questionId: 'chem11-eq-q104',
    recognition: 'Dạng base mạnh: dữ kiện cho $[OH^-]$, vì vậy phải tính pOH trước rồi đổi sang pH.',
    detailedSteps: [
      { order: 1, title: 'Tính pOH', explanation: 'NaOH cho $[OH^-]=10^{-3}$ M nên pOH = 3.' },
      { order: 2, title: 'Đổi sang pH', explanation: 'Ở 25 °C, $pH=14-pOH=11$.' }
    ],
    finalAnswer: 'D',
    commonMistakes: ['Dùng sai công thức $pH=-\\lg[OH^-]$ và chọn pH = 3.'],
    reviewSuggestions: ['Ôn phân biệt pH và pOH.']
  },
  {
    id: 'chem11-eq-s105', questionId: 'chem11-eq-q105',
    recognition: 'Dạng pha loãng kết hợp thang logarit: thể tích tăng 10 lần làm nồng độ acid mạnh giảm 10 lần.',
    detailedSteps: [
      { order: 1, title: 'Theo dõi nồng độ', explanation: 'Pha loãng 10 lần làm $[H^+]$ giảm từ $10^{-2}$ xuống $10^{-3}$ M.' },
      { order: 2, title: 'Đổi sang pH', explanation: '$[H^+]=10^{-3}$ M tương ứng pH = 3.' }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Nhân hoặc chia trực tiếp giá trị pH cho 10.'],
    reviewSuggestions: ['Ôn bản chất logarit của thang pH.']
  },
  {
    id: 'chem11-eq-s106', questionId: 'chem11-eq-q106',
    recognition: 'Dạng base mạnh nhiều nhóm OH: dấu hiệu là công thức có hai $OH^-$ nên phải nhân hệ số trước khi tính pOH.',
    detailedSteps: [
      { order: 1, title: 'Tính nồng độ ion', explanation: '$Ca(OH)_2\\rightarrow Ca^{2+}+2OH^-$ nên $[OH^-]=2\\times5,0\\times10^{-3}=10^{-2}$ M.' },
      { order: 2, title: 'Tính pH', explanation: 'pOH = 2, do đó pH = 14 − 2 = 12 ở 25 °C.' }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Bỏ hệ số 2 của ion hydroxide.'],
    reviewSuggestions: ['Ôn cách lấy hệ số ion từ phương trình điện li.']
  },
  {
    id: 'chem11-eq-s107', questionId: 'chem11-eq-q107',
    recognition: 'Dạng trộn acid–base mạnh: phải tính mol, tìm chất dư rồi chia cho tổng thể tích trước khi lấy logarit.',
    detailedSteps: [
      { order: 1, title: 'Tìm lượng dư', explanation: '$n_{H^+}=0,100\\times0,020=0,002$ mol; $n_{OH^-}=0,001$ mol, nên dư 0,001 mol $H^+$.' },
      { order: 2, title: 'Tính nồng độ và pH', explanation: 'Tổng thể tích 0,200 L nên $[H^+]=0,005$ M; $pH=-\\lg(5\\times10^{-3})\\approx2,30$.' }
    ],
    finalAnswer: 'C',
    commonMistakes: ['So sánh nồng độ thay vì số mol hoặc quên tổng thể tích sau khi trộn.'],
    reviewSuggestions: ['Ôn sơ đồ mol → chất dư → nồng độ dư → pH.']
  },
  {
    id: 'chem11-eq-s108', questionId: 'chem11-eq-q108',
    recognition: 'Dạng so sánh dữ liệu không đồng nhất: đổi mọi mẫu về cùng đại lượng pH hoặc $[H^+]$ rồi mới xếp hạng.',
    detailedSteps: [
      { order: 1, title: 'Quy đổi', explanation: 'X có pH 4; Y có $[H^+]=10^{-14}/10^{-9}=10^{-5}$ M nên pH 5; Z có pH 6.' },
      { order: 2, title: 'Xếp tính acid', explanation: 'pH càng nhỏ thì tính acid càng mạnh, do đó X > Y > Z.' }
    ],
    finalAnswer: 'D',
    commonMistakes: ['So trực tiếp các số mũ hoặc các con số 4, 9, 6 mà không quy đổi.'],
    reviewSuggestions: ['Ôn quy trình chuẩn hóa đại lượng trước khi so sánh.']
  },
  {
    id: 'chem11-eq-s109', questionId: 'chem11-eq-q109',
    recognition: 'Dạng nhận biết môi trường bằng quỳ: acid làm quỳ tím chuyển đỏ, base làm quỳ tím chuyển xanh.',
    detailedSteps: [
      { order: 1, title: 'Xác định môi trường', explanation: 'Đề đã cho dung dịch acid.' },
      { order: 2, title: 'Áp dụng màu quỳ', explanation: 'Quỳ tím chuyển sang màu đỏ trong môi trường acid.' }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Đảo màu acid và base của quỳ tím.'],
    reviewSuggestions: ['Ôn bảng màu định tính của quỳ tím.']
  },
  {
    id: 'chem11-eq-s110', questionId: 'chem11-eq-q110',
    recognition: 'Dạng màu phenolphthalein: chỉ thị này không màu trong acid/trung tính và chuyển hồng trong vùng base phù hợp.',
    detailedSteps: [
      { order: 1, title: 'Nhớ vùng màu', explanation: 'Phenolphthalein bắt đầu chuyển hồng trong vùng pH kiềm.' },
      { order: 2, title: 'Chọn môi trường', explanation: 'Dung dịch base thích hợp là lựa chọn phù hợp.' }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Cho rằng phenolphthalein hồng trong acid.'],
    reviewSuggestions: ['Ôn màu của phenolphthalein theo môi trường.']
  },
  {
    id: 'chem11-eq-s111', questionId: 'chem11-eq-q111',
    recognition: 'Dạng đọc giấy chỉ thị vạn năng: màu cho một ước lượng theo thang chuẩn, không phải phép đo pH chính xác tuyệt đối.',
    detailedSteps: [
      { order: 1, title: 'Đọc tính chất', explanation: 'Màu cam trên thang chỉ thị vạn năng thường biểu thị môi trường acid.' },
      { order: 2, title: 'Nêu giới hạn', explanation: 'Kết quả phụ thuộc so màu nên chỉ ước lượng pH.' }
    ],
    finalAnswer: 'C',
    commonMistakes: ['Gán màu cam cho đúng một pH với độ chính xác không có trong phép thử.'],
    reviewSuggestions: ['Ôn độ phân giải và giới hạn của chỉ thị màu.']
  },
  {
    id: 'chem11-eq-s112', questionId: 'chem11-eq-q112',
    recognition: 'Dạng pH đất: so giá trị đo với khoảng sinh trưởng, không tự động đề xuất liều xử lí khi thiếu dữ liệu đất.',
    detailedSteps: [
      { order: 1, title: 'So khoảng', explanation: 'pH 4,8 thấp hơn khoảng 6,0–7,0 nên đất chua hơn mức phù hợp.' },
      { order: 2, title: 'Ra quyết định có giới hạn', explanation: 'Cần đánh giá thêm trước khi chọn và định lượng biện pháp điều chỉnh.' }
    ],
    finalAnswer: 'D',
    commonMistakes: ['Gọi pH thấp là kiềm hoặc tự đưa liều hóa chất khi đề không có dữ liệu.'],
    reviewSuggestions: ['Ôn cách diễn giải pH trong bối cảnh nông nghiệp.']
  },
  {
    id: 'chem11-eq-s113', questionId: 'chem11-eq-q113',
    recognition: 'Dạng phối hợp hai chỉ thị: đổi từng màu thành một bất đẳng thức rồi lấy phần giao.',
    detailedSteps: [
      { order: 1, title: 'Đổi màu thành khoảng', explanation: 'Methyl orange vàng cho pH > 4,4; phenolphthalein không màu cho pH < 8,2.' },
      { order: 2, title: 'Lấy giao', explanation: 'Hai điều kiện đồng thời cho $4,4<pH<8,2$.' }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Chỉ sử dụng kết quả của một chỉ thị hoặc lấy hợp hai khoảng.'],
    reviewSuggestions: ['Ôn phép lấy giao các điều kiện pH.']
  },
  {
    id: 'chem11-eq-s114', questionId: 'chem11-eq-q114',
    recognition: 'Dạng báo cáo phép so màu: kết quả phải phản ánh đúng độ chính xác giới hạn của giấy chỉ thị.',
    detailedSteps: [
      { order: 1, title: 'Đọc thang màu', explanation: 'Màu xanh lục gần ô pH 7 gợi ý mẫu gần trung tính.' },
      { order: 2, title: 'Báo cáo đúng mức', explanation: 'Nêu pH ước lượng khoảng 7, không thêm chữ số thập phân giả.' }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Báo cáo quá nhiều chữ số có nghĩa từ một phép so màu định tính.'],
    reviewSuggestions: ['Ôn cách ghi kết quả đo phù hợp với dụng cụ.']
  },
  {
    id: 'chem11-eq-s115', questionId: 'chem11-eq-q115',
    recognition: 'Dạng nguyên tắc dùng chỉ thị: mỗi chỉ thị có bảng màu và vùng chuyển màu riêng.',
    detailedSteps: [
      { order: 1, title: 'Loại phát biểu tuyệt đối', explanation: 'Không phải mọi chỉ thị cùng màu và màu không cho pH chính xác tuyệt đối.' },
      { order: 2, title: 'Chọn nguyên tắc đúng', explanation: 'Phải đối chiếu màu với khoảng chuyển màu của đúng chỉ thị.' }
    ],
    finalAnswer: 'C',
    commonMistakes: ['Học thuộc một bảng màu rồi áp dụng cho mọi chỉ thị.'],
    reviewSuggestions: ['Ôn sự khác nhau giữa quỳ, chỉ thị vạn năng và phenolphthalein.']
  },
  {
    id: 'chem11-eq-s116', questionId: 'chem11-eq-q116',
    recognition: 'Dạng so sánh pH thực tiễn: chênh một đơn vị pH tương ứng tỉ số 10 lần về nồng độ ion hydrogen.',
    detailedSteps: [
      { order: 1, title: 'Tính độ lệch', explanation: 'Hai mẫu chênh nhau $5,6-4,6=1,0$ đơn vị pH.' },
      { order: 2, title: 'Suy ra tỉ số', explanation: 'Mẫu có pH thấp hơn có $[H^+]$ lớn hơn $10^1=10$ lần.' }
    ],
    finalAnswer: 'D',
    commonMistakes: ['Cho rằng chênh một đơn vị pH nghĩa là nồng độ chỉ hơn một đơn vị.'],
    reviewSuggestions: ['Ôn ý nghĩa logarit khi so sánh hai pH.']
  },
  {
    id: 'chem11-eq-s117', questionId: 'chem11-eq-q117',
    recognition: 'Dạng chọn mẫu theo khoảng cho phép: kiểm tra từng giá trị với cả cận dưới và cận trên.',
    detailedSteps: [
      { order: 1, title: 'Đối chiếu từng bể', explanation: '6,8 và 7,2 đều nằm trong 6,5–7,5; 8,4 vượt cận trên.' },
      { order: 2, title: 'Chọn tập hợp', explanation: 'Chỉ hai bể A và B phù hợp.' }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Chỉ so với một cận của khoảng thích hợp.'],
    reviewSuggestions: ['Ôn cách đọc khoảng giá trị trong bảng dữ liệu.']
  },
  {
    id: 'chem11-eq-s118', questionId: 'chem11-eq-q118',
    recognition: 'Dạng giao khoảng nâng cao: mỗi màu tạo một điều kiện, đáp án là vùng thỏa mãn đồng thời cả hai.',
    detailedSteps: [
      { order: 1, title: 'Chuyển màu thành điều kiện', explanation: 'Methyl orange vàng: pH > 4,4; bromothymol blue vàng: pH < 6,0.' },
      { order: 2, title: 'Lấy giao', explanation: 'Suy ra $4,4<pH<6,0$.' }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Đảo điều kiện màu hoặc lấy khoảng từ 4,4 trở xuống.'],
    reviewSuggestions: ['Ôn cách biểu diễn giao hai bất đẳng thức trên trục số.']
  },
  {
    id: 'chem11-eq-s119', questionId: 'chem11-eq-q119',
    recognition: 'Dạng chọn mẫu đất từ bảng: tìm giá trị nằm trọn trong khoảng pH sinh trưởng được nêu ở chú thích.',
    detailedSteps: [
      { order: 1, title: 'Đọc khoảng mục tiêu', explanation: 'Cây N phù hợp với pH 5,5–6,5.' },
      { order: 2, title: 'Đối chiếu mẫu', explanation: 'Chỉ mẫu R có pH 6,1 nằm trong khoảng này.' }
    ],
    finalAnswer: 'C',
    commonMistakes: ['Chọn giá trị gần 7 nhất mà bỏ qua khoảng sinh trưởng riêng của loài.'],
    reviewSuggestions: ['Ôn quy trình chọn phương án từ bảng tiêu chuẩn.']
  },
  {
    id: 'chem11-eq-s120', questionId: 'chem11-eq-q120',
    recognition: 'Dạng đánh giá chuỗi dữ liệu môi trường: tách điều dữ liệu trực tiếp chứng minh khỏi giả thuyết nguyên nhân cần kiểm tra thêm.',
    detailedSteps: [
      { order: 1, title: 'Đối chiếu khoảng sống', explanation: 'pH 4,2 và 5,2 đều thấp hơn cận 6,5 nên hai điểm sau xả không phù hợp.' },
      { order: 2, title: 'Đánh giá nguyên nhân', explanation: 'Sự thay đổi sau điểm xả gợi ý mối liên hệ nhưng chưa đủ xác định duy nhất hóa chất hay quan hệ nhân quả; cần thêm mẫu và chỉ tiêu.' }
    ],
    finalAnswer: 'D',
    commonMistakes: ['Từ ba phép đo suy ra chắc chắn một hóa chất cụ thể gây ô nhiễm.'],
    reviewSuggestions: ['Ôn phân biệt bằng chứng quan sát với kết luận nhân quả.']
  },
  {
    id: 'chem11-eq-s121', questionId: 'chem11-eq-q121',
    recognition: 'Dạng chọn cân bằng carbonate–nước: theo dõi proton từ nước sang $CO_3^{2-}$ và kiểm tra điện tích.',
    detailedSteps: [
      { order: 1, title: 'Theo dõi proton', explanation: '$CO_3^{2-}$ nhận một proton từ nước để tạo $HCO_3^-$. Nước mất proton tạo $OH^- $.' },
      { order: 2, title: 'Kiểm tra phương trình', explanation: '$CO_3^{2-}+H_2O\\rightleftharpoons HCO_3^-+OH^-$ bảo toàn nguyên tử và tổng điện tích −2.' }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Cho rằng oxygen trong carbonate tự tách thành ion oxide hoặc hydroxide.'],
    reviewSuggestions: ['Ôn cách theo dõi proton trong cân bằng ion–nước.']
  },
  {
    id: 'chem11-eq-s122', questionId: 'chem11-eq-q122',
    recognition: 'Dạng phân biệt hai giai đoạn: “muối tạo ion” là điện li, còn “ion đã tạo ra phản ứng với nước” là thủy phân.',
    detailedSteps: [
      { order: 1, title: 'Xác định điện li', explanation: 'Khi chất điện li tan, các ion được giải phóng vào dung dịch.' },
      { order: 2, title: 'Xác định cân bằng với nước', explanation: 'Chỉ sau đó một số ion mới nhận hoặc làm chuyển proton với nước.' }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Gộp điện li và thủy phân thành một phương trình duy nhất mà không phân biệt bản chất.'],
    reviewSuggestions: ['Ôn sơ đồ chất điện li → ion → cân bằng ion–nước.']
  },
  {
    id: 'chem11-eq-s123', questionId: 'chem11-eq-q123',
    recognition: 'Dạng suy môi trường từ sản phẩm ion: phương trình tạo $OH^-$ thì dung dịch có xu hướng base.',
    detailedSteps: [
      { order: 1, title: 'Đọc cân bằng', explanation: '$CO_3^{2-}$ nhận proton của nước và làm xuất hiện $OH^- $.' },
      { order: 2, title: 'Kết luận môi trường', explanation: 'Nồng độ $OH^-$ tăng nên dung dịch có xu hướng base.' }
    ],
    finalAnswer: 'C',
    commonMistakes: ['Thấy $HCO_3^-$ có hydrogen rồi kết luận dung dịch acid.'],
    reviewSuggestions: ['Ôn cách dự đoán môi trường từ ion được tạo thêm.']
  },
  {
    id: 'chem11-eq-s124', questionId: 'chem11-eq-q124',
    recognition: 'Dạng kết luận trực tiếp từ $H^+$: nếu cân bằng ion–nước làm tăng $[H^+]$, môi trường có xu hướng acid.',
    detailedSteps: [
      { order: 1, title: 'Đọc dữ kiện', explanation: 'Đề cho biết tương tác của $Al^{3+}$ với nước làm tăng nồng độ $H^+$.' },
      { order: 2, title: 'Suy môi trường', explanation: '$[H^+]$ tăng tương ứng pH giảm và môi trường acid.' }
    ],
    finalAnswer: 'D',
    commonMistakes: ['Cho rằng công thức ion không có H nên không thể làm dung dịch acid.'],
    reviewSuggestions: ['Ôn mô hình ion kim loại hydrat hóa làm chuyển proton.']
  },
  {
    id: 'chem11-eq-s125', questionId: 'chem11-eq-q125',
    recognition: 'Dạng kiểm tra phương trình giản lược: đếm nguyên tử trước, sau đó cộng điện tích mỗi vế.',
    detailedSteps: [
      { order: 1, title: 'Bảo toàn nguyên tử', explanation: 'Phương án A có một Al, hai H và một O ở mỗi vế.' },
      { order: 2, title: 'Bảo toàn điện tích', explanation: 'Vế trái có +3; vế phải có $+2+(+1)=+3$.' }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Chọn phương trình đúng số nguyên tử nhưng sai tổng điện tích.'],
    reviewSuggestions: ['Ôn quy trình kiểm tra nguyên tử và điện tích.']
  },
  {
    id: 'chem11-eq-s126', questionId: 'chem11-eq-q126',
    recognition: 'Dạng đọc bảng tiểu phân tạo thêm: tập trung vào $H^+$ hoặc $OH^-$ để dự đoán chiều thay đổi pH.',
    detailedSteps: [
      { order: 1, title: 'Xác định ion chỉ thị môi trường', explanation: 'Bảng cho biết cân bằng tạo thêm $H^+$.' },
      { order: 2, title: 'Liên hệ pH', explanation: '$[H^+]$ tăng làm pH giảm nên dung dịch có xu hướng acid.' }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Cho rằng tạo $FeOH^{2+}$ đồng nghĩa dung dịch base vì công thức có OH.'],
    reviewSuggestions: ['Ôn cách đọc đầy đủ cả hai sản phẩm của cân bằng.']
  },
  {
    id: 'chem11-eq-s127', questionId: 'chem11-eq-q127',
    recognition: 'Dạng quyết định vận hành: đề đồng thời nêu lợi ích keo tụ và nguy cơ thay đổi pH, nên đáp án phải cân bằng hai yếu tố.',
    detailedSteps: [
      { order: 1, title: 'Xác định hai tác động', explanation: 'Hydroxide aluminium hỗ trợ giữ hạt lơ lửng, còn cân bằng có thể làm tăng $H^+$.' },
      { order: 2, title: 'Chọn kiểm soát', explanation: 'Theo dõi pH và tối ưu liều giúp đạt hiệu quả mà không acid hóa quá mức.' }
    ],
    finalAnswer: 'C',
    commonMistakes: ['Suy luận “có ích” thành “thêm càng nhiều càng tốt”.'],
    reviewSuggestions: ['Ôn tư duy đánh đổi trong ứng dụng hóa học.']
  },
  {
    id: 'chem11-eq-s128', questionId: 'chem11-eq-q128',
    recognition: 'Dạng sửa ngộ nhận về carbonate: $OH^-$ xuất phát từ nước sau khi nước cho proton, không có sẵn trong ion carbonate.',
    detailedSteps: [
      { order: 1, title: 'Theo dõi chất nhận proton', explanation: '$CO_3^{2-}$ nhận $H^+$ để tạo $HCO_3^- $.' },
      { order: 2, title: 'Theo dõi nước', explanation: 'Nước cho proton nên phần còn lại là $OH^-$, làm pH tăng.' }
    ],
    finalAnswer: 'D',
    commonMistakes: ['Tách một nguyên tử oxygen trong $CO_3^{2-}$ thành $OH^-$.'],
    reviewSuggestions: ['Ôn phương trình carbonate với nước.']
  },
  {
    id: 'chem11-eq-s129', questionId: 'chem11-eq-q129',
    recognition: 'Dạng giải thích vi mô: khi ion kim loại không chứa H nhưng làm dung dịch acid, hãy xét nước phối trí quanh ion.',
    detailedSteps: [
      { order: 1, title: 'Xét ion hydrat hóa', explanation: '$Al^{3+}$ có mật độ điện tích lớn và làm phân cực các liên kết O–H của nước phối trí.' },
      { order: 2, title: 'Liên hệ chuyển proton', explanation: 'Liên kết O–H bị phân cực thuận lợi hơn cho việc chuyển proton sang nước xung quanh, làm tăng $H_3O^+$.' }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Cho rằng cation tự biến thành proton hoặc mọi cation đều có cơ chế giống nhau.'],
    reviewSuggestions: ['Ôn mô hình hydrat hóa ở mức giải thích định tính.']
  },
  {
    id: 'chem11-eq-s130', questionId: 'chem11-eq-q130',
    recognition: 'Dạng so sánh bảng pH: dùng mẫu gần trung tính làm đối chứng để kiểm tra quy tắc “mọi cation/anion”.',
    detailedSteps: [
      { order: 1, title: 'Phân loại dữ liệu', explanation: '$AlCl_3$ và $FeCl_3$ có pH thấp; $Na_2CO_3$ có pH cao; $NaCl$ gần 7.' },
      { order: 2, title: 'Đánh giá quy tắc', explanation: 'NaCl bác bỏ suy luận chỉ theo dấu điện tích; bản chất từng ion mới quyết định khả năng tương tác với nước.' }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Từ ba ví dụ suy thành quy tắc mọi cation đều acid, mọi anion đều base.'],
    reviewSuggestions: ['Ôn vai trò của mẫu đối chứng khi diễn giải dữ liệu.']
  },
  {
    id: 'chem11-eq-s131', questionId: 'chem11-eq-q131',
    recognition: 'Dạng dữ liệu kết tủa theo pH: nhận diện xu hướng hiện tượng nhưng không biến tương quan thành kết luận “mọi ion biến mất”.',
    detailedSteps: [
      { order: 1, title: 'Đọc xu hướng', explanation: 'Khi pH tăng, vẩn đục và lượng chất rắn nâu đỏ tăng.' },
      { order: 2, title: 'Giải thích có giới hạn', explanation: 'Xu hướng phù hợp việc hình thành $Fe(OH)_3$ ít tan; dữ liệu không nói tổng iron tăng hay phản ứng hoàn toàn.' }
    ],
    finalAnswer: 'C',
    commonMistakes: ['Cho rằng lượng kết tủa tăng nghĩa là hệ tự sinh thêm nguyên tố iron.'],
    reviewSuggestions: ['Ôn cách mô tả xu hướng trước khi giải thích cơ chế.']
  },
  {
    id: 'chem11-eq-s132', questionId: 'chem11-eq-q132',
    recognition: 'Dạng đánh giá thử nghiệm xử lí nước: cần nêu cả kết quả hỗ trợ cơ chế và những phép kiểm tra còn thiếu.',
    detailedSteps: [
      { order: 1, title: 'Khai thác hai chỉ tiêu', explanation: 'Độ đục giảm hỗ trợ hiệu quả keo tụ; pH giảm phù hợp xu hướng tạo $H^+$ của aluminium hydrat hóa.' },
      { order: 2, title: 'Giới hạn kết luận', explanation: 'Một lần đo không chứng minh loại bỏ mọi chất hay xác định liều tối ưu; cần đối chứng, lặp lại và thêm chỉ tiêu chất lượng.' }
    ],
    finalAnswer: 'D',
    commonMistakes: ['Đồng nhất giảm độ đục với loại bỏ hoàn toàn mọi chất ô nhiễm.'],
    reviewSuggestions: ['Ôn cấu trúc kết luận khoa học: bằng chứng – diễn giải – giới hạn.']
  },
  {
    id: 'chem11-eq-s133', questionId: 'chem11-eq-q133',
    recognition: 'Dạng hỏi nguyên tắc: tìm mối liên hệ giữa dung dịch đã biết nồng độ, thể tích phản ứng và nồng độ cần xác định.',
    detailedSteps: [
      { order: 1, title: 'Xác định dữ kiện chuẩn', explanation: 'Dung dịch chuẩn có nồng độ đã biết và thể tích đã dùng được đo bằng burette.' },
      { order: 2, title: 'Nêu mục đích', explanation: 'Dựa vào phản ứng tỉ lượng để suy ra số mol và nồng độ của chất phân tích chưa biết.' }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Cho rằng mọi phép chuẩn độ bắt buộc tạo dung dịch pH = 7.'],
    reviewSuggestions: ['Ôn sơ đồ dung dịch chuẩn → tỉ lượng → nồng độ chưa biết.']
  },
  {
    id: 'chem11-eq-s134', questionId: 'chem11-eq-q134',
    recognition: 'Dạng chọn dụng cụ theo chức năng: từ khóa “thêm dần” và “thể tích biến đổi chính xác” chỉ burette.',
    detailedSteps: [
      { order: 1, title: 'Xác định yêu cầu', explanation: 'Dung dịch chuẩn phải được cấp từng phần và có thể khóa dòng.' },
      { order: 2, title: 'Chọn dụng cụ', explanation: 'Burette có khóa và thang chia phù hợp để đo thể tích đã cấp.' }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Chọn cốc vì chứa được dung dịch nhưng không cấp thể tích chính xác.'],
    reviewSuggestions: ['Ôn chức năng burette, pipette và bình tam giác.']
  },
  {
    id: 'chem11-eq-s135', questionId: 'chem11-eq-q135',
    recognition: 'Dạng nhận biết điểm kết thúc: cần màu nhạt đầu tiên bền theo quy ước, không phải màu càng đậm càng tốt.',
    detailedSteps: [
      { order: 1, title: 'Quan sát khi lắc', explanation: 'Gần điểm kết thúc, thêm từng giọt và lắc để màu phân bố đều.' },
      { order: 2, title: 'Áp dụng tiêu chí', explanation: 'Dừng khi màu nhạt đầu tiên tồn tại trong khoảng thời gian hướng dẫn.' }
    ],
    finalAnswer: 'C',
    commonMistakes: ['Chuẩn độ quá điểm để đạt màu đậm, làm tăng thể tích ghi nhận.'],
    reviewSuggestions: ['Ôn dấu hiệu điểm kết thúc của chỉ thị.']
  },
  {
    id: 'chem11-eq-s136', questionId: 'chem11-eq-q136',
    recognition: 'Dạng số đọc burette: thể tích đã dùng luôn là số đọc cuối trừ số đọc đầu.',
    detailedSteps: [
      { order: 1, title: 'Viết phép trừ', explanation: '$V_{dùng}=V_{cuối}-V_{đầu}$.' },
      { order: 2, title: 'Thay số', explanation: '$V_{dùng}=24,85-0,20=24,65$ mL.' }
    ],
    finalAnswer: 'D',
    commonMistakes: ['Dùng trực tiếp 24,85 mL vì giả định số đọc đầu luôn bằng 0.'],
    reviewSuggestions: ['Ôn công thức thể tích burette đã cấp.']
  },
  {
    id: 'chem11-eq-s137', questionId: 'chem11-eq-q137',
    recognition: 'Dạng phân biệt khái niệm: “tỉ lượng phản ứng” là điểm tương đương, còn “màu quan sát” là điểm kết thúc.',
    detailedSteps: [
      { order: 1, title: 'Xác định điểm tương đương', explanation: 'Đây là trạng thái số mol phản ứng đúng theo hệ số phương trình.' },
      { order: 2, title: 'Xác định điểm kết thúc', explanation: 'Đây là tín hiệu thực nghiệm dùng để nhận biết gần điểm tương đương; hai điểm không mặc nhiên trùng tuyệt đối.' }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Định nghĩa điểm tương đương bằng màu chỉ thị.'],
    reviewSuggestions: ['Ôn cặp khái niệm equivalence point và endpoint.']
  },
  {
    id: 'chem11-eq-s138', questionId: 'chem11-eq-q138',
    recognition: 'Dạng chuẩn bị burette: sau nước cất phải tráng bằng chính dung dịch sẽ chứa để tránh pha loãng.',
    detailedSteps: [
      { order: 1, title: 'Nhận diện rủi ro', explanation: 'Nước còn bám thành burette sẽ làm thay đổi nồng độ dung dịch chuẩn.' },
      { order: 2, title: 'Thao tác đúng', explanation: 'Tráng bằng ít dung dịch chuẩn để thay thế nước còn lại, sau đó mới nạp chính thức.' }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Lau bên trong burette bằng giấy hoặc tráng bằng dung dịch mẫu.'],
    reviewSuggestions: ['Ôn mục đích của từng bước rửa và tráng.']
  },
  {
    id: 'chem11-eq-s139', questionId: 'chem11-eq-q139',
    recognition: 'Dạng lấy thể tích cố định chính xác: từ khóa “10,00 mL” chỉ pipette bầu đúng dung tích.',
    detailedSteps: [
      { order: 1, title: 'So chức năng', explanation: 'Cốc và bình tam giác chỉ cho thể tích ước lượng; ống nhỏ giọt không định lượng chính xác.' },
      { order: 2, title: 'Chọn dụng cụ định mức', explanation: 'Pipette bầu 10,00 mL chuyển một aliquot cố định với độ chính xác phù hợp.' }
    ],
    finalAnswer: 'C',
    commonMistakes: ['Dùng vạch ước lượng trên bình tam giác để lấy mẫu định lượng.'],
    reviewSuggestions: ['Ôn khái niệm aliquot và pipette bầu.']
  },
  {
    id: 'chem11-eq-s140', questionId: 'chem11-eq-q140',
    recognition: 'Dạng đọc burette: ba dấu hiệu đúng phải đi cùng nhau—ngang mắt, đáy mặt khum và thang tăng xuống dưới.',
    detailedSteps: [
      { order: 1, title: 'Loại sai số thị sai', explanation: 'Đặt mắt ngang mặt khum để đường nhìn vuông góc với thang.' },
      { order: 2, title: 'Đọc đúng quy ước', explanation: 'Với dung dịch trong suốt không màu, đọc đáy mặt khum; số trên burette tăng từ trên xuống.' }
    ],
    finalAnswer: 'D',
    commonMistakes: ['Áp dụng chiều thang của ống đong cho burette.'],
    reviewSuggestions: ['Ôn hình minh họa tư thế đọc burette.']
  },
  {
    id: 'chem11-eq-s141', questionId: 'chem11-eq-q141',
    recognition: 'Dạng sắp xếp quy trình: chuẩn bị dung dịch chuẩn trước, lấy mẫu chính xác, chuẩn độ có kiểm soát rồi mới ghi kết quả.',
    detailedSteps: [
      { order: 1, title: 'Chuẩn bị', explanation: 'Tráng–nạp burette, loại bọt khí; pipette mẫu vào bình tam giác và thêm ít chỉ thị.' },
      { order: 2, title: 'Thực hiện và ghi', explanation: 'Thêm dung dịch chuẩn trong khi lắc, giảm tốc gần điểm kết thúc, dừng đúng tín hiệu rồi đọc burette.' }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Dùng miệng hút pipette hoặc thêm nhanh qua điểm kết thúc.'],
    reviewSuggestions: ['Ôn checklist chuẩn độ an toàn theo trình tự.']
  },
  {
    id: 'chem11-eq-s142', questionId: 'chem11-eq-q142',
    recognition: 'Dạng kiểm tra bảng burette: tính lại từng dòng bằng cùng phép trừ, không tin sẵn cột học sinh đã ghi.',
    detailedSteps: [
      { order: 1, title: 'Kiểm tra hai dòng đầu', explanation: 'Lần 1: $24,90-0,35=24,55$; lần 2: $25,80-1,10=24,70$ mL, đều đúng.' },
      { order: 2, title: 'Phát hiện dòng sai', explanation: 'Lần 3 phải là $24,95-0,20=24,75$ mL, không phải 24,95 mL.' }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Chỉ kiểm tra xem số cuối lớn hơn số đầu mà không tính hiệu.'],
    reviewSuggestions: ['Ôn kiểm tra chéo bảng số liệu burette.']
  },
  {
    id: 'chem11-eq-s143', questionId: 'chem11-eq-q143',
    recognition: 'Dạng phân tích sai số dụng cụ: hỏi chất còn lại trong burette làm thay đổi đại lượng nào trước tiên.',
    detailedSteps: [
      { order: 1, title: 'Xác định chất gây nhiễu', explanation: 'Nước cất còn trong burette trộn với dung dịch chuẩn vừa nạp.' },
      { order: 2, title: 'Suy hệ quả trực tiếp', explanation: 'Dung dịch chuẩn bị pha loãng nên nồng độ thực tế không còn bằng giá trị dự kiến.' }
    ],
    finalAnswer: 'C',
    commonMistakes: ['Cho rằng nước cất không phản ứng nên không thể tạo sai số nồng độ.'],
    reviewSuggestions: ['Ôn phân biệt sai số do phản ứng và sai số do pha loãng.']
  },
  {
    id: 'chem11-eq-s144', questionId: 'chem11-eq-q144',
    recognition: 'Dạng đánh giá độ tin cậy: phương án đúng phải vừa kiểm soát điểm kết thúc vừa có phép đo lặp phù hợp.',
    detailedSteps: [
      { order: 1, title: 'Kiểm soát endpoint', explanation: 'Thêm từng giọt gần điểm kết thúc và chọn màu nhạt bền đầu tiên để tránh quá chuẩn độ.' },
      { order: 2, title: 'Kiểm chứng độ lặp', explanation: 'Lặp lại đến khi có các thể tích phù hợp nhau giúp phát hiện lần đo bất thường.' }
    ],
    finalAnswer: 'D',
    commonMistakes: ['Dùng màu thật đậm hoặc một lần đo duy nhất làm tiêu chuẩn chính xác.'],
    reviewSuggestions: ['Ôn tiêu chí endpoint và phép đo lặp.']
  },
  {
    id: 'chem11-eq-s145', questionId: 'chem11-eq-q145',
    recognition: 'Dạng tính titre trực tiếp: lấy số đọc cuối trừ số đọc đầu, không dùng riêng số đọc cuối.',
    detailedSteps: [
      { order: 1, title: 'Lập phép tính', explanation: '$V_{titre}=V_{cuối}-V_{đầu}$.' },
      { order: 2, title: 'Thay số', explanation: '$24,90-0,30=24,60$ mL.' }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Ghi 24,90 mL vì bỏ qua số đọc đầu.'],
    reviewSuggestions: ['Ôn công thức titre từ burette.']
  },
  {
    id: 'chem11-eq-s146', questionId: 'chem11-eq-q146',
    recognition: 'Dạng hỏi vai trò lần thô: lần này dùng định vị vùng endpoint, không phải dữ liệu chính để lấy trung bình.',
    detailedSteps: [
      { order: 1, title: 'Nhận diện mục đích', explanation: 'Lần thô cho biết gần thể tích nào cần giảm tốc độ thêm dung dịch.' },
      { order: 2, title: 'Phân biệt dữ liệu', explanation: 'Các lần định lượng sau được thực hiện cẩn thận và dùng để chọn kết quả phù hợp.' }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Đưa lần thô vào trung bình chỉ vì nó cũng có một con số.'],
    reviewSuggestions: ['Ôn rough titre và accurate titres.']
  },
  {
    id: 'chem11-eq-s147', questionId: 'chem11-eq-q147',
    recognition: 'Dạng định nghĩa kết quả phù hợp: luôn tìm giới hạn chênh lệch được quy trình hoặc đề bài quy định.',
    detailedSteps: [
      { order: 1, title: 'Thừa nhận biến thiên đo', explanation: 'Các lần đo thực tế không cần giống hệt đến mọi chữ số.' },
      { order: 2, title: 'Áp dụng tiêu chí', explanation: 'Chúng được chấp nhận khi độ chênh nằm trong ngưỡng đã quy định.' }
    ],
    finalAnswer: 'C',
    commonMistakes: ['Đòi hai thể tích bằng nhau tuyệt đối.'],
    reviewSuggestions: ['Ôn ý nghĩa của độ lặp và tiêu chí chấp nhận.']
  },
  {
    id: 'chem11-eq-s148', questionId: 'chem11-eq-q148',
    recognition: 'Dạng trung bình hai titre đã được chấp nhận: cộng hai giá trị rồi chia 2.',
    detailedSteps: [
      { order: 1, title: 'Tính tổng', explanation: '$24,60+24,70=49,30$ mL.' },
      { order: 2, title: 'Tính trung bình', explanation: '$49,30/2=24,65$ mL.' }
    ],
    finalAnswer: 'D',
    commonMistakes: ['Quên chia cho số lần đo hoặc chọn một trong hai giá trị.'],
    reviewSuggestions: ['Ôn trung bình cộng của các titre hợp lệ.']
  },
  {
    id: 'chem11-eq-s149', questionId: 'chem11-eq-q149',
    recognition: 'Dạng điền ô titre trong bảng: tính riêng từng hàng từ số đọc đầu và cuối của chính hàng đó.',
    detailedSteps: [
      { order: 1, title: 'Chọn hàng cần tính', explanation: 'Lần 2 có số đọc đầu 1,15 mL và cuối 25,80 mL.' },
      { order: 2, title: 'Tính hiệu', explanation: '$25,80-1,15=24,65$ mL.' }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Dùng số đọc đầu của lần 1 cho lần 2.'],
    reviewSuggestions: ['Ôn cách đọc bảng theo từng hàng.']
  },
  {
    id: 'chem11-eq-s150', questionId: 'chem11-eq-q150',
    recognition: 'Dạng chọn cặp phù hợp: tính độ chênh tuyệt đối của từng cặp và so với 0,10 mL.',
    detailedSteps: [
      { order: 1, title: 'Tính cặp B', explanation: '$|24,72-24,68|=0,04$ mL.' },
      { order: 2, title: 'So ngưỡng', explanation: '0,04 mL không vượt 0,10 mL; các cặp khác lệch ít nhất 0,25 mL.' }
    ],
    finalAnswer: 'B',
    commonMistakes: ['So từng giá trị với 0,10 thay vì so độ chênh giữa hai giá trị.'],
    reviewSuggestions: ['Ôn độ chênh tuyệt đối.']
  },
  {
    id: 'chem11-eq-s151', questionId: 'chem11-eq-q151',
    recognition: 'Dạng trung bình ba titre: chỉ thực hiện sau khi đề xác nhận cả ba đã được chấp nhận.',
    detailedSteps: [
      { order: 1, title: 'Cộng dữ liệu', explanation: '$24,68+24,72+24,70=74,10$ mL.' },
      { order: 2, title: 'Chia số lần', explanation: '$74,10/3=24,70$ mL.' }
    ],
    finalAnswer: 'C',
    commonMistakes: ['Chọn giá trị giữa mà không kiểm tra, dù trong câu này nó tình cờ bằng trung bình.'],
    reviewSuggestions: ['Ôn cách tính và kiểm tra trung bình.']
  },
  {
    id: 'chem11-eq-s152', questionId: 'chem11-eq-q152',
    recognition: 'Dạng sửa lỗi “số đọc cuối = titre”: dấu hiệu là số đọc đầu khác 0.',
    detailedSteps: [
      { order: 1, title: 'Nhận diện lỗi', explanation: '34,90 mL chỉ là vị trí cuối trên thang, không phải lượng đã cấp.' },
      { order: 2, title: 'Tính lại', explanation: '$34,90-10,20=24,70$ mL.' }
    ],
    finalAnswer: 'D',
    commonMistakes: ['Cho rằng burette bắt buộc phải bắt đầu ở 0,00 mL.'],
    reviewSuggestions: ['Ôn ý nghĩa số đọc và hiệu số.']
  },
  {
    id: 'chem11-eq-s153', questionId: 'chem11-eq-q153',
    recognition: 'Dạng nhận diện giá trị bất thường: so cụm dữ liệu trước khi tính trung bình và tìm lần lệch rõ.',
    detailedSteps: [
      { order: 1, title: 'So độ gần', explanation: '24,40 và 24,42 mL chỉ lệch 0,02 mL; 25,00 mL lệch khoảng 0,6 mL.' },
      { order: 2, title: 'Xử lý có căn cứ', explanation: 'Cần kiểm tra lần 25,00 mL và thao tác; không tự động trung bình hoặc tự sửa số.' }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Cho rằng trung bình sẽ tự khử mọi sai số lớn.'],
    reviewSuggestions: ['Ôn quy trình phát hiện–kiểm tra–xử lý outlier.']
  },
  {
    id: 'chem11-eq-s154', questionId: 'chem11-eq-q154',
    recognition: 'Dạng chọn tập dữ liệu: loại lần thô, tìm cụm nằm trong ngưỡng, rồi mới tính trung bình.',
    detailedSteps: [
      { order: 1, title: 'Chọn lần hợp lệ', explanation: '24,62; 24,66 và 24,64 mL có độ trải 0,04 mL; 25,02 mL tách khỏi cụm, lần 25,30 là lần thô.' },
      { order: 2, title: 'Tính đại diện', explanation: '$(24,62+24,66+24,64)/3=24,64$ mL.' }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Đưa lần thô và lần 25,02 mL vào trung bình.'],
    reviewSuggestions: ['Ôn thứ tự chọn dữ liệu trước, tính sau.']
  },
  {
    id: 'chem11-eq-s155', questionId: 'chem11-eq-q155',
    recognition: 'Dạng kiểm tra logic thang burette: trong một lần cấp liên tục, số đọc cuối phải lớn hơn số đọc đầu vì thang tăng xuống dưới.',
    detailedSteps: [
      { order: 1, title: 'Kiểm tra từng hàng', explanation: 'P, Q và S đều có số đọc cuối lớn hơn đầu.' },
      { order: 2, title: 'Phát hiện bất thường', explanation: 'R ghi từ 25,10 xuống 0,65 mL trong một lần liên tục, trái chiều thang; cần kiểm tra ghi chép hoặc việc nạp lại.' }
    ],
    finalAnswer: 'C',
    commonMistakes: ['Đọc burette như ống đong có thang tăng từ dưới lên.'],
    reviewSuggestions: ['Ôn chiều thang burette và tính nhất quán dữ liệu.']
  },
  {
    id: 'chem11-eq-s156', questionId: 'chem11-eq-q156',
    recognition: 'Dạng báo cáo kết quả: phải nêu trung bình, đơn vị, số lần hợp lệ và mức phân tán với số chữ số phù hợp.',
    detailedSteps: [
      { order: 1, title: 'Tính trung bình và range', explanation: 'Trung bình là 24,65 mL; độ trải là $24,70-24,60=0,10$ mL.' },
      { order: 2, title: 'Chọn cách ghi', explanation: 'Giữ hai chữ số thập phân như dữ liệu burette và nêu ba lần phù hợp, không thêm chữ số giả.' }
    ],
    finalAnswer: 'D',
    commonMistakes: ['Báo cáo 24,6500000 mL để tạo cảm giác chính xác.'],
    reviewSuggestions: ['Ôn chữ số có nghĩa và báo cáo dữ liệu thực nghiệm.']
  },
  {
    id: 'chem11-eq-s157', questionId: 'chem11-eq-q157',
    recognition: 'Dạng chuẩn độ 1:1 cơ bản: HCl và NaOH có số mol bằng nhau tại điểm tương đương.',
    detailedSteps: [
      { order: 1, title: 'Tính mol chuẩn', explanation: '$n_{NaOH}=0,100\\times0,02000=0,00200$ mol.' },
      { order: 2, title: 'Tính nồng độ mẫu', explanation: '$n_{HCl}=0,00200$ mol nên $C_{HCl}=0,00200/0,02500=0,0800$ M.' }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Đảo hai thể tích hoặc không đổi mL sang L khi tính mol.'],
    reviewSuggestions: ['Ôn chuỗi mol chuẩn → mol mẫu → nồng độ.']
  },
  {
    id: 'chem11-eq-s158', questionId: 'chem11-eq-q158',
    recognition: 'Dạng đọc tỉ lệ phương trình: nhìn hệ số 1 trước $H_2SO_4$ và 2 trước NaOH.',
    detailedSteps: [
      { order: 1, title: 'Viết tỉ lệ', explanation: '$n_{H_2SO_4}:n_{NaOH}=1:2$.' },
      { order: 2, title: 'Biểu diễn quan hệ', explanation: 'Do đó $n_{NaOH}=2n_{H_2SO_4}$.' }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Mặc định số mol acid và base bằng nhau.'],
    reviewSuggestions: ['Ôn chuyển hệ số phương trình thành tỉ lệ mol.']
  },
  {
    id: 'chem11-eq-s159', questionId: 'chem11-eq-q159',
    recognition: 'Dạng 1:1 đảo chiều: biết NaOH để tìm HCl, nhưng quan hệ mol vẫn bằng nhau.',
    detailedSteps: [
      { order: 1, title: 'Tính mol NaOH', explanation: '$n=0,150\\times0,01000=0,00150$ mol.' },
      { order: 2, title: 'Tính HCl', explanation: '$n_{HCl}=0,00150$ mol nên $C=0,00150/0,01500=0,100$ M.' }
    ],
    finalAnswer: 'C',
    commonMistakes: ['Nhân nồng độ của một dung dịch với thể tích của dung dịch còn lại.'],
    reviewSuggestions: ['Ôn gắn đúng C và V của cùng một dung dịch.']
  },
  {
    id: 'chem11-eq-s160', questionId: 'chem11-eq-q160',
    recognition: 'Dạng hỏi quy trình: đáp án đúng phải đi qua dữ liệu hợp lệ, số mol và phương trình trước khi tính nồng độ.',
    detailedSteps: [
      { order: 1, title: 'Xử lý thực nghiệm', explanation: 'Chọn titre đại diện từ các lần định lượng phù hợp.' },
      { order: 2, title: 'Xử lý hóa học', explanation: 'Tính mol chuẩn, đổi theo tỉ lượng, tính nồng độ và cuối cùng hiệu chỉnh pha loãng.' }
    ],
    finalAnswer: 'D',
    commonMistakes: ['Nhảy thẳng vào công thức hai nồng độ mà chưa xét hệ số.'],
    reviewSuggestions: ['Ôn flowchart chuẩn độ định lượng.']
  },
  {
    id: 'chem11-eq-s161', questionId: 'chem11-eq-q161',
    recognition: 'Dạng acid hai proton: dấu hiệu $H_2SO_4$ cần 2 mol NaOH cho 1 mol acid.',
    detailedSteps: [
      { order: 1, title: 'Tính mol base và acid', explanation: '$n_{NaOH}=0,150\\times0,02400=0,00360$ mol; $n_{H_2SO_4}=0,00360/2=0,00180$ mol.' },
      { order: 2, title: 'Tính nồng độ', explanation: '$C_{H_2SO_4}=0,00180/0,02000=0,0900$ M.' }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Dùng trực tiếp $C_AV_A=C_BV_B$ và nhận 0,180 M.'],
    reviewSuggestions: ['Ôn hệ số 1:2 trong trung hòa sulfuric acid.']
  },
  {
    id: 'chem11-eq-s162', questionId: 'chem11-eq-q162',
    recognition: 'Dạng base có hai nhóm OH: 1 mol $Ca(OH)_2$ cần 2 mol HCl.',
    detailedSteps: [
      { order: 1, title: 'Tính mol HCl và base', explanation: '$n_{HCl}=0,100\\times0,03000=0,00300$ mol; $n_{Ca(OH)_2}=0,00300/2=0,00150$ mol.' },
      { order: 2, title: 'Tính nồng độ', explanation: '$C=0,00150/0,02500=0,0600$ M.' }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Nhân mol HCl với 2 thay vì chia 2.'],
    reviewSuggestions: ['Ôn viết quan hệ mol trước khi thay số.']
  },
  {
    id: 'chem11-eq-s163', questionId: 'chem11-eq-q163',
    recognition: 'Dạng bảng titre 1:1: tính trung bình các giá trị đã được chấp nhận rồi dùng làm thể tích NaOH.',
    detailedSteps: [
      { order: 1, title: 'Tính titre đại diện', explanation: 'Trung bình $(18,40+18,45+18,42)/3\\approx18,42$ mL.' },
      { order: 2, title: 'Tính nồng độ HCl', explanation: '$n_{NaOH}=0,1000\\times0,01842=0,001842$ mol; $C_{HCl}=0,001842/0,02500\\approx0,0737$ M.' }
    ],
    finalAnswer: 'C',
    commonMistakes: ['Dùng tổng ba titre hoặc chọn tùy ý một lần.'],
    reviewSuggestions: ['Ôn nối bước xử lý số liệu với phép tính hóa học.']
  },
  {
    id: 'chem11-eq-s164', questionId: 'chem11-eq-q164',
    recognition: 'Dạng pha loãng một bước: chuẩn độ cho nồng độ dung dịch sau pha loãng, sau đó mới suy ngược mẫu gốc.',
    detailedSteps: [
      { order: 1, title: 'Tính dung dịch pha loãng', explanation: '$n_{NaOH}=0,100\\times0,02000=0,00200$ mol, nên $C_{HCl,pha\\ loãng}=0,00200/0,02500=0,0800$ M.' },
      { order: 2, title: 'Suy mẫu ban đầu', explanation: '10,00 mL được pha thành 100,0 mL, hệ số pha loãng 10; $C_{gốc}=0,0800\\times10=0,800$ M.' }
    ],
    finalAnswer: 'D',
    commonMistakes: ['Báo 0,0800 M như nồng độ mẫu ban đầu.'],
    reviewSuggestions: ['Ôn hệ số pha loãng $V_{sau}/V_{trước}$.']
  },
  {
    id: 'chem11-eq-s165', questionId: 'chem11-eq-q165',
    recognition: 'Dạng tìm nồng độ base chưa biết từ acid chuẩn 1:1.',
    detailedSteps: [
      { order: 1, title: 'Tính mol acid chuẩn', explanation: '$n_{HCl}=0,120\\times0,01650=0,00198$ mol.' },
      { order: 2, title: 'Tính base', explanation: '$n_{NaOH}=0,00198$ mol; $C=0,00198/0,02000=0,0990$ M.' }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Cho rằng chất nằm trong burette luôn là chất cần tìm.'],
    reviewSuggestions: ['Ôn xác định chất chuẩn và chất phân tích từ dữ kiện.']
  },
  {
    id: 'chem11-eq-s166', questionId: 'chem11-eq-q166',
    recognition: 'Dạng khó gồm hai lớp: tỉ lệ 1:2 của sulfuric acid và hệ số pha loãng 20 lần.',
    detailedSteps: [
      { order: 1, title: 'Tính aliquot pha loãng', explanation: '$n_{NaOH}=0,100\\times0,02400=0,00240$ mol; $n_{H_2SO_4}=0,00120$ mol; $C_{pha\\ loãng}=0,00120/0,02000=0,0600$ M.' },
      { order: 2, title: 'Suy mẫu gốc', explanation: '5,00 mL thành 100,0 mL là pha loãng 20 lần; $C_{gốc}=0,0600\\times20=1,20$ M.' }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Chỉ xử lý hệ số phản ứng hoặc chỉ xử lý pha loãng, không làm cả hai.'],
    reviewSuggestions: ['Ôn sơ đồ hai tầng stoichiometry → dilution.']
  },
  {
    id: 'chem11-eq-s167', questionId: 'chem11-eq-q167',
    recognition: 'Dạng base hai OH kết hợp titre trung bình: HCl và $Ba(OH)_2$ có tỉ lệ mol 2:1.',
    detailedSteps: [
      { order: 1, title: 'Tính mol từ titre', explanation: 'Titre trung bình là 25,00 mL; $n_{HCl}=0,0800\\times0,02500=0,00200$ mol.' },
      { order: 2, title: 'Đổi tỉ lượng và nồng độ', explanation: '$n_{Ba(OH)_2}=0,00200/2=0,00100$ mol; $C=0,00100/0,01000=0,100$ M.' }
    ],
    finalAnswer: 'C',
    commonMistakes: ['Dùng 0,00200 mol trực tiếp làm mol barium hydroxide.'],
    reviewSuggestions: ['Ôn trung hòa base kiềm thổ.']
  },
  {
    id: 'chem11-eq-s168', questionId: 'chem11-eq-q168',
    recognition: 'Dạng tổng hợp dữ liệu và pha loãng: chỉ dùng ba titre đã phân loại hợp lệ, sau đó nhân hệ số pha loãng 5.',
    detailedSteps: [
      { order: 1, title: 'Tính dung dịch pha loãng', explanation: 'Titre trung bình là 20,12 mL; $n_{NaOH}=0,1000\\times0,02012=0,002012$ mol; $C_{HCl,pha\\ loãng}=0,002012/0,02500=0,08048$ M.' },
      { order: 2, title: 'Suy mẫu gốc', explanation: '$C_{gốc}=0,08048\\times5=0,4024$ M, gần 0,402 M.' }
    ],
    finalAnswer: 'D',
    commonMistakes: ['Đưa lần thô/outlier vào trung bình hoặc quên nhân hệ số pha loãng.'],
    reviewSuggestions: ['Ôn pipeline chọn dữ liệu → titre → mol → nồng độ pha loãng → mẫu gốc.']
  }
];
