import type { Solution } from '@/types';

export const g11ChemistryNitrogenSulfurSolutions: Solution[] = [
  {
    id: 'chem11-ns-s001', questionId: 'chem11-ns-q001',
    recognition: 'Dạng nhận biết trạng thái tự nhiên: khi đề hỏi khí quyển, nhớ nitrogen tự do tồn tại chủ yếu dưới dạng phân tử hai nguyên tử $N_2$.',
    detailedSteps: [
      { order: 1, title: 'Xác định môi trường', explanation: 'Đề hỏi khí quyển khô, không hỏi hợp chất nitrogen trong đất hay cơ thể.' },
      { order: 2, title: 'Chọn dạng tồn tại chủ yếu', explanation: 'Nitrogen trong không khí chủ yếu là khí $N_2$.' }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Chọn $NO_2$ vì đây cũng là khí chứa nitrogen nhưng chỉ có lượng rất nhỏ.'],
    reviewSuggestions: ['Ôn trạng thái tự do và trạng thái liên kết của nitrogen.']
  },
  {
    id: 'chem11-ns-s002', questionId: 'chem11-ns-q002',
    recognition: 'Dạng phân loại nitrogen tự do–liên kết: tìm chất có nguyên tử N nằm trong ion hoặc phân tử hợp chất.',
    detailedSteps: [
      { order: 1, title: 'Đọc công thức', explanation: '$NO_3^-$ chứa N liên kết với O nên là một ion hợp chất.' },
      { order: 2, title: 'Đối chiếu bối cảnh', explanation: 'Nitrate có thể tồn tại trong đất; các phương án còn lại không phải hợp chất tự nhiên chứa nitrogen.' }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Nhầm $N_2$ là hợp chất vì phân tử có hai nguyên tử.'],
    reviewSuggestions: ['Ôn phân biệt đơn chất và hợp chất.']
  },
  {
    id: 'chem11-ns-s003', questionId: 'chem11-ns-q003',
    recognition: 'Dạng sửa phát biểu tuyệt đối: các từ “chỉ” thường bỏ sót một trong hai dạng tồn tại của nitrogen.',
    detailedSteps: [
      { order: 1, title: 'Liệt kê hai nhóm', explanation: 'Có $N_2$ tự do trong khí quyển và nitrogen liên kết trong nitrate, protein cùng nhiều hợp chất.' },
      { order: 2, title: 'Chọn phát biểu bao quát', explanation: 'Phương án C chứa đủ cả dạng tự do và dạng hợp chất.' }
    ],
    finalAnswer: 'C',
    commonMistakes: ['Đồng nhất nguyên tố nitrogen với riêng đơn chất $N_2$.'],
    reviewSuggestions: ['Phân biệt “nguyên tố nitrogen” và “đơn chất nitrogen”.']
  },
  {
    id: 'chem11-ns-s004', questionId: 'chem11-ns-q004',
    recognition: 'Dạng đọc hai biểu diễn: $N_2$ là đơn chất; $NO_3^-$ là ion chứa nitrogen liên kết.',
    detailedSteps: [
      { order: 1, title: 'Phân loại mẫu không khí', explanation: '$N_2$ gồm một nguyên tố nên là dạng đơn chất, hay nitrogen tự do.' },
      { order: 2, title: 'Phân loại mẫu đất', explanation: '$NO_3^-$ chứa N và O nên nitrogen ở dạng hợp chất; kết luận D ghép đúng hai dữ kiện.' }
    ],
    finalAnswer: 'D',
    commonMistakes: ['Cho rằng ion nitrate là một dạng đơn chất của nitrogen.'],
    reviewSuggestions: ['Luyện đọc công thức để phân loại đơn chất và hợp chất.']
  },
  {
    id: 'chem11-ns-s005', questionId: 'chem11-ns-q005',
    recognition: 'Dạng nhận diện cấu tạo: mỗi nguyên tử N cần dùng chung ba cặp electron để đạt cấu hình bền, tạo liên kết ba.',
    detailedSteps: [
      { order: 1, title: 'Xác định số liên kết', explanation: 'Hai nguyên tử nitrogen trong $N_2$ tạo ba liên kết cộng hóa trị.' },
      { order: 2, title: 'Chọn kí hiệu', explanation: 'Liên kết ba được biểu diễn bằng $N\\equiv N$.' }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Chọn liên kết đơn vì chỉ thấy có hai nguyên tử.'],
    reviewSuggestions: ['Ôn công thức Lewis của $N_2$.']
  },
  {
    id: 'chem11-ns-s006', questionId: 'chem11-ns-q006',
    recognition: 'Dạng giải thích cấu tạo–tính chất: dấu hiệu là câu hỏi “vì sao kém hoạt động”; phải quy về độ bền liên kết $N\\equiv N$.',
    detailedSteps: [
      { order: 1, title: 'Xác định rào cản', explanation: 'Phản ứng của $N_2$ thường cần làm suy yếu hoặc phá liên kết ba rất bền.' },
      { order: 2, title: 'Suy ra điều kiện', explanation: 'Ở nhiệt độ thường, ít va chạm có đủ năng lượng nên $N_2$ kém hoạt động.' }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Giải thích bằng khối lượng phân tử hoặc cho rằng $N_2$ không có electron.'],
    reviewSuggestions: ['Nối độ bền liên kết với năng lượng hoạt hóa.']
  },
  {
    id: 'chem11-ns-s007', questionId: 'chem11-ns-q007',
    recognition: 'Dạng phân biệt “tương đối trơ” với “trơ tuyệt đối”: tìm phương án có giới hạn điều kiện.',
    detailedSteps: [
      { order: 1, title: 'Loại phát biểu tuyệt đối', explanation: '$N_2$ vẫn phản ứng với $H_2$ hoặc $O_2$ trong điều kiện thích hợp, nên A sai.' },
      { order: 2, title: 'Chọn diễn giải đúng', explanation: 'C mô tả đúng: kém hoạt động ở điều kiện thường nhưng không phải hoàn toàn không phản ứng.' }
    ],
    finalAnswer: 'C',
    commonMistakes: ['Diễn giải từ “trơ” thành “không bao giờ phản ứng”.'],
    reviewSuggestions: ['Ghi nhớ mọi nhận xét tính chất đều gắn với điều kiện.']
  },
  {
    id: 'chem11-ns-s008', questionId: 'chem11-ns-q008',
    recognition: 'Dạng liên hệ nhiệt độ–rào cản năng lượng: nhiệt độ không đổi nguyên tố mà làm tăng tỉ lệ va chạm đủ năng lượng.',
    detailedSteps: [
      { order: 1, title: 'Loại biến đổi sai bản chất', explanation: 'Nhiệt độ không làm mất electron, đổi số proton hay bắt buộc tạo liên kết ion.' },
      { order: 2, title: 'Giải thích động học', explanation: 'Nhiệt độ cao làm nhiều tiểu phân vượt rào cản năng lượng liên quan đến liên kết ba bền, nên D đúng.' }
    ],
    finalAnswer: 'D',
    commonMistakes: ['Cho rằng nhiệt độ cao làm thay đổi nguyên tố nitrogen.'],
    reviewSuggestions: ['Ôn mô hình va chạm và năng lượng hoạt hóa từ Hóa học 10.']
  },
  {
    id: 'chem11-ns-s009', questionId: 'chem11-ns-q009',
    recognition: 'Dạng chọn ứng dụng của $N_2$ khí: bối cảnh bao bì và chống oxi hóa gợi đến môi trường trơ tương đối.',
    detailedSteps: [
      { order: 1, title: 'Xác định mục tiêu', explanation: 'Cần hạn chế thực phẩm tiếp xúc với oxygen và giảm phản ứng oxi hóa.' },
      { order: 2, title: 'Ghép tính chất', explanation: '$N_2$ khí tương đối trơ và có thể thay thế phần không khí trong bao bì, nên A đúng.' }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Nhầm $N_2$ khí trong bao bì với nitrogen lỏng dùng cấp đông.'],
    reviewSuggestions: ['Phân biệt ứng dụng của nitrogen khí và nitrogen lỏng.']
  },
  {
    id: 'chem11-ns-s010', questionId: 'chem11-ns-q010',
    recognition: 'Dạng ứng dụng nitrogen lỏng: các từ “bảo quản lạnh”, “lạnh sâu” chỉ ra tính chất quyết định là nhiệt độ sôi rất thấp.',
    detailedSteps: [
      { order: 1, title: 'Nhận diện pha sử dụng', explanation: 'Nitrogen ở trạng thái lỏng được dùng như tác nhân làm lạnh sâu.' },
      { order: 2, title: 'Chọn nguyên nhân', explanation: 'Khi hấp thụ nhiệt và hóa hơi ở nhiệt độ rất thấp, nitrogen tạo môi trường lạnh phù hợp bảo quản mẫu.' }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Chỉ nêu tính trơ mà bỏ qua đặc điểm nhiệt độ.'],
    reviewSuggestions: ['Ôn mối liên hệ giữa trạng thái lỏng, nhiệt độ sôi và làm lạnh.']
  },
  {
    id: 'chem11-ns-s011', questionId: 'chem11-ns-q011',
    recognition: 'Dạng ghép nhu cầu–tính chất: tách hai mục tiêu rồi chọn trạng thái nitrogen tương ứng.',
    detailedSteps: [
      { order: 1, title: 'Xử lí mục tiêu 1', explanation: 'Môi trường bảo vệ khỏi oxygen cần $N_2$ khí nhờ tính trơ tương đối.' },
      { order: 2, title: 'Xử lí mục tiêu 2', explanation: 'Cấp đông nhanh cần $N_2$ lỏng nhờ nhiệt độ rất thấp; phương án C ghép đúng.' }
    ],
    finalAnswer: 'C',
    commonMistakes: ['Dùng cùng một lí do cho cả môi trường trơ và làm lạnh.'],
    reviewSuggestions: ['Lập bảng: N₂ khí–môi trường trơ; N₂ lỏng–làm lạnh sâu.']
  },
  {
    id: 'chem11-ns-s012', questionId: 'chem11-ns-q012',
    recognition: 'Dạng an toàn hóa chất: “không độc” không đồng nghĩa “không nguy hiểm”; xét cả nguy cơ vật lí và thay thế oxygen.',
    detailedSteps: [
      { order: 1, title: 'Xét nguy cơ tiếp xúc', explanation: 'Nitrogen lỏng có nhiệt độ rất thấp nên gây tổn thương hoặc bỏng lạnh.' },
      { order: 2, title: 'Xét nguy cơ trong phòng kín', explanation: 'Khi bay hơi, lượng lớn $N_2$ có thể làm giảm nồng độ oxygen và gây ngạt; D đầy đủ nhất.' }
    ],
    finalAnswer: 'D',
    commonMistakes: ['Chỉ xét độc tính hóa học mà bỏ qua nhiệt độ và nguy cơ thiếu oxygen.'],
    reviewSuggestions: ['Ôn nguyên tắc an toàn khi dùng khí hóa lỏng.']
  },
  {
    id: 'chem11-ns-s013', questionId: 'chem11-ns-q013',
    recognition: 'Dạng viết phương trình tạo ammonia: nhận ra cặp chất $N_2$, $H_2$ và cân bằng theo tỉ lệ 1:3:2.',
    detailedSteps: [
      { order: 1, title: 'Viết sơ đồ', explanation: '$N_2+H_2\\rightarrow NH_3$.' },
      { order: 2, title: 'Cân bằng', explanation: 'Đặt 2 trước $NH_3$, rồi 3 trước $H_2$: $N_2+3H_2\\rightleftharpoons2NH_3$.' }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Thay chỉ số trong công thức thay vì đặt hệ số.'],
    reviewSuggestions: ['Ôn bảo toàn nguyên tử khi cân bằng phương trình.']
  },
  {
    id: 'chem11-ns-s014', questionId: 'chem11-ns-q014',
    recognition: 'Dạng xác định số oxi hóa: trong đơn chất $N_2$, N có số oxi hóa 0; trong $NH_3$, H là +1.',
    detailedSteps: [
      { order: 1, title: 'Tính trong chất đầu', explanation: 'N trong đơn chất $N_2$ có số oxi hóa 0.' },
      { order: 2, title: 'Tính trong sản phẩm', explanation: 'Trong $NH_3$: $x+3(+1)=0$, nên $x=-3$. N giảm từ 0 xuống −3.' }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Lấy số oxi hóa của N trong đơn chất bằng −3.'],
    reviewSuggestions: ['Ôn quy tắc số oxi hóa của đơn chất và hydrogen.']
  },
  {
    id: 'chem11-ns-s015', questionId: 'chem11-ns-q015',
    recognition: 'Dạng xác định vai trò oxi hóa–khử: số oxi hóa giảm nghĩa là nhận electron và chất đó là chất oxi hóa.',
    detailedSteps: [
      { order: 1, title: 'Theo dõi nitrogen', explanation: 'N giảm từ 0 trong $N_2$ xuống −3 trong $NH_3$.' },
      { order: 2, title: 'Kết luận vai trò', explanation: 'N nhận electron nên $N_2$ bị khử và đóng vai trò chất oxi hóa.' }
    ],
    finalAnswer: 'C',
    commonMistakes: ['Nhầm “bị khử” với “chất khử”.'],
    reviewSuggestions: ['Ghi nhớ: chất oxi hóa là chất nhận electron và bị khử.']
  },
  {
    id: 'chem11-ns-s016', questionId: 'chem11-ns-q016',
    recognition: 'Dạng giải thích điều kiện phản ứng: không chỉ nhìn phương trình; phải xét liên kết ba bền và rào cản năng lượng.',
    detailedSteps: [
      { order: 1, title: 'Nhận diện trở ngại', explanation: 'Phản ứng cần hoạt hóa phân tử $N_2$, trong khi liên kết $N\\equiv N$ rất bền.' },
      { order: 2, title: 'Suy ra', explanation: 'Ở nhiệt độ thường, phản ứng không diễn ra nhanh; cần điều kiện thích hợp, nên D đúng.' }
    ],
    finalAnswer: 'D',
    commonMistakes: ['Cho rằng phương trình viết được thì phản ứng sẽ tự xảy ra nhanh ở mọi điều kiện.'],
    reviewSuggestions: ['Liên hệ cấu tạo $N_2$ với điều kiện tổng hợp ammonia.']
  },
  {
    id: 'chem11-ns-s017', questionId: 'chem11-ns-q017',
    recognition: 'Dạng sản phẩm phản ứng $N_2$–$O_2$: ở nhiệt độ rất cao, sản phẩm trực tiếp đầu tiên là nitrogen monoxide $NO$.',
    detailedSteps: [
      { order: 1, title: 'Nhận diện điều kiện', explanation: 'Nhiệt độ rất cao cho phép $N_2$ và $O_2$ phản ứng.' },
      { order: 2, title: 'Viết phương trình', explanation: '$N_2+O_2\\rightleftharpoons2NO$; $NO_2$ hình thành sau khi $NO$ tiếp tục bị oxi hóa.' }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Viết trực tiếp $NO_2$ là sản phẩm đầu tiên.'],
    reviewSuggestions: ['Ôn chuỗi $N_2\\rightarrow NO\\rightarrow NO_2$.']
  },
  {
    id: 'chem11-ns-s018', questionId: 'chem11-ns-q018',
    recognition: 'Dạng số oxi hóa trong oxide: O thường là −2; phân tử $NO$ trung hòa nên N là +2.',
    detailedSteps: [
      { order: 1, title: 'Chất đầu', explanation: 'N trong $N_2$ là đơn chất nên có số oxi hóa 0.' },
      { order: 2, title: 'Sản phẩm', explanation: 'Trong $NO$, $x+(-2)=0$ nên $x=+2$. Nitrogen tăng từ 0 lên +2.' }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Gán N trong NO bằng −2 giống oxygen.'],
    reviewSuggestions: ['Luyện tính số oxi hóa trong phân tử trung hòa.']
  },
  {
    id: 'chem11-ns-s019', questionId: 'chem11-ns-q019',
    recognition: 'Dạng xác định chất khử: nguyên tố tăng số oxi hóa là bị oxi hóa; chất chứa nó đóng vai trò chất khử.',
    detailedSteps: [
      { order: 1, title: 'Theo dõi số oxi hóa', explanation: 'Nitrogen tăng từ 0 trong $N_2$ lên +2 trong $NO$.' },
      { order: 2, title: 'Kết luận', explanation: '$N_2$ nhường electron, bị oxi hóa và là chất khử.' }
    ],
    finalAnswer: 'C',
    commonMistakes: ['Cho rằng oxygen có mặt nên $N_2$ cũng là chất oxi hóa.'],
    reviewSuggestions: ['Không đoán vai trò; luôn dựa vào thay đổi số oxi hóa.']
  },
  {
    id: 'chem11-ns-s020', questionId: 'chem11-ns-q020',
    recognition: 'Dạng so sánh hai phản ứng: lập bảng số oxi hóa của N trong từng sản phẩm trước khi kết luận vai trò.',
    detailedSteps: [
      { order: 1, title: 'Với hydrogen', explanation: 'N: $0\\rightarrow-3$, nên $N_2$ nhận electron và là chất oxi hóa.' },
      { order: 2, title: 'Với oxygen', explanation: 'N: $0\\rightarrow+2$, nên $N_2$ nhường electron và là chất khử. Vì vậy D đúng.' }
    ],
    finalAnswer: 'D',
    commonMistakes: ['Ghi nhớ máy móc một vai trò cố định cho $N_2$.'],
    reviewSuggestions: ['Ôn quy trình xác định vai trò bằng số oxi hóa.']
  },
  {
    id: 'chem11-ns-s021', questionId: 'chem11-ns-q021',
    recognition: 'Dạng sắp xếp chuỗi chuyển hóa tự nhiên: bắt đầu từ $N_2$, sản phẩm trực tiếp ở nhiệt độ cao là $NO$, rồi mới đến $NO_2$ và nitrate.',
    detailedSteps: [
      { order: 1, title: 'Bước năng lượng cao', explanation: 'Tia sét tạo điều kiện cho $N_2+O_2\\rightarrow NO$.' },
      { order: 2, title: 'Các bước sau', explanation: '$NO$ bị oxi hóa thành $NO_2$, tiếp tục tạo acid/nitrate và được mưa đưa xuống đất; chuỗi A đúng.' }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Bỏ qua trung gian và viết $N_2\\rightarrow NO_3^-$ trong một bước.'],
    reviewSuggestions: ['Vẽ sơ đồ chuyển hóa nitrogen trong mưa giông.']
  },
  {
    id: 'chem11-ns-s022', questionId: 'chem11-ns-q022',
    recognition: 'Dạng hoàn thiện chuỗi NOx: sau $NO$, oxygen trong không khí oxi hóa tạo $NO_2$.',
    detailedSteps: [
      { order: 1, title: 'Viết sơ đồ', explanation: '$NO+O_2\\rightarrow NO_2$.' },
      { order: 2, title: 'Cân bằng', explanation: 'Đặt 2 trước $NO$ và $NO_2$: $2NO+O_2\\rightarrow2NO_2$.' }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Tạo công thức không phù hợp như $NO_3$ để cân bằng nhanh.'],
    reviewSuggestions: ['Ôn bảo toàn nguyên tử và công thức các oxide của nitrogen.']
  },
  {
    id: 'chem11-ns-s023', questionId: 'chem11-ns-q023',
    recognition: 'Dạng giải thích vai trò của mưa: phân biệt nguồn năng lượng là tia sét với tác dụng hòa tan–vận chuyển của nước.',
    detailedSteps: [
      { order: 1, title: 'Tách hai vai trò', explanation: 'Tia sét cung cấp năng lượng cho bước tạo NO; nước mưa không trực tiếp phá liên kết $N_2$.' },
      { order: 2, title: 'Kết luận về nước mưa', explanation: 'Nước hòa tan và đưa sản phẩm nitrogen đã bị oxi hóa xuống đất, cuối cùng góp phần cung cấp nitrate.' }
    ],
    finalAnswer: 'C',
    commonMistakes: ['Cho rằng nước mưa là nguồn năng lượng tạo NO.'],
    reviewSuggestions: ['Tách rõ “tạo chất” và “vận chuyển chất” trong chuỗi tự nhiên.']
  },
  {
    id: 'chem11-ns-s024', questionId: 'chem11-ns-q024',
    recognition: 'Dạng suy luận từ dữ liệu: chọn cơ chế phù hợp nhưng tránh khẳng định tuyệt đối vượt quá phép đo.',
    detailedSteps: [
      { order: 1, title: 'Xác định điều dữ liệu cho biết', explanation: 'Phép đo chỉ ghi nhận nitrate trong nước mưa sau giông, không chứng minh mọi nitrate đều có một nguồn duy nhất.' },
      { order: 2, title: 'Chọn cơ chế hợp lí', explanation: 'Tia sét có thể tạo NO, rồi qua NO₂ và các bước oxi hóa tạo sản phẩm được mưa vận chuyển; D vừa đúng cơ chế vừa không tuyệt đối hóa.' }
    ],
    finalAnswer: 'D',
    commonMistakes: ['Dùng một quan sát để khẳng định “toàn bộ” hoặc “trực tiếp”.'],
    reviewSuggestions: ['Ôn cách phân biệt dữ liệu, suy luận và kết luận.']
  },
  {
    id: 'chem11-ns-s025', questionId: 'chem11-ns-q025',
    recognition: 'Dạng đọc công thức Lewis: đếm cặp electron tham gia liên kết và cặp electron còn lại trên N.',
    detailedSteps: [
      { order: 1, title: 'Đếm electron hóa trị', explanation: 'N có 5 electron hóa trị và mỗi H góp 1 electron.' },
      { order: 2, title: 'Phân bố electron', explanation: 'N tạo ba liên kết N–H và còn một cặp electron chưa liên kết.' }
    ],
    finalAnswer: 'A', commonMistakes: ['Bỏ quên cặp electron tự do trên N.'], reviewSuggestions: ['Vẽ công thức Lewis NH₃.']
  },
  {
    id: 'chem11-ns-s026', questionId: 'chem11-ns-q026',
    recognition: 'Dạng nhận diện hình học: ba liên kết và một cặp electron tự do quanh N dẫn đến hình chóp tam giác.',
    detailedSteps: [
      { order: 1, title: 'Xác định miền electron', explanation: 'Quanh N có ba miền liên kết và một miền electron tự do.' },
      { order: 2, title: 'Kết luận hình phân tử', explanation: 'Vị trí nguyên tử tạo hình chóp tam giác.' }
    ],
    finalAnswer: 'B', commonMistakes: ['Nhìn ba H rồi chọn tam giác phẳng.'], reviewSuggestions: ['Phân biệt hình học miền electron và hình học phân tử.']
  },
  {
    id: 'chem11-ns-s027', questionId: 'chem11-ns-q027',
    recognition: 'Dạng cấu tạo–độ phân cực: kiểm tra cả độ phân cực liên kết và tính đối xứng hình học.',
    detailedSteps: [
      { order: 1, title: 'Xét liên kết', explanation: 'Liên kết N–H phân cực do N hút electron mạnh hơn H.' },
      { order: 2, title: 'Xét hình học', explanation: 'Hình chóp không làm các moment triệt tiêu nên NH₃ phân cực.' }
    ],
    finalAnswer: 'C', commonMistakes: ['Cho rằng các liên kết giống nhau luôn làm phân tử không phân cực.'], reviewSuggestions: ['Ôn moment liên kết và tính đối xứng.']
  },
  {
    id: 'chem11-ns-s028', questionId: 'chem11-ns-q028',
    recognition: 'Dạng sửa ngộ nhận hình học: dấu hiệu quyết định là cặp electron chưa liên kết trên nguyên tử trung tâm.',
    detailedSteps: [
      { order: 1, title: 'Chỉ ra dữ kiện bị bỏ sót', explanation: 'Ngoài ba cặp liên kết, N còn một cặp electron tự do.' },
      { order: 2, title: 'Suy ra hình học', explanation: 'Lực đẩy của cặp electron tự do làm NH₃ có hình chóp tam giác, nên D đúng.' }
    ],
    finalAnswer: 'D', commonMistakes: ['Chỉ đếm số nguyên tử H mà không xét electron tự do.'], reviewSuggestions: ['Ôn công thức Lewis trước khi dự đoán hình học.']
  },
  {
    id: 'chem11-ns-s029', questionId: 'chem11-ns-q029',
    recognition: 'Dạng giải thích độ tan: tìm tương tác NH₃–H₂O và cân bằng acid–base, không dựa vào khối lượng.',
    detailedSteps: [
      { order: 1, title: 'Xét cấu tạo', explanation: 'NH₃ là phân tử phân cực và có thể tạo liên kết hydrogen với nước.' },
      { order: 2, title: 'Xét tương tác trong nước', explanation: 'Một phần NH₃ nhận proton tạo NH₄⁺ và OH⁻, góp phần làm NH₃ tan nhiều.' }
    ],
    finalAnswer: 'A', commonMistakes: ['Giải thích độ tan bằng việc NH₃ nhẹ.'], reviewSuggestions: ['Nối tính phân cực với độ tan trong dung môi phân cực.']
  },
  {
    id: 'chem11-ns-s030', questionId: 'chem11-ns-q030',
    recognition: 'Dạng thí nghiệm vòi phun: chuỗi nguyên nhân là tan nhanh → giảm áp suất trong bình → nước bị đẩy vào.',
    detailedSteps: [
      { order: 1, title: 'Theo dõi lượng khí', explanation: 'NH₃ hòa tan rất nhanh làm số tiểu phân khí trong bình giảm.' },
      { order: 2, title: 'So sánh áp suất', explanation: 'Áp suất ngoài lớn hơn đẩy nước vào bình, tạo vòi phun.' }
    ],
    finalAnswer: 'B', commonMistakes: ['Cho rằng NH₃ tự đẩy nước vào bình.'], reviewSuggestions: ['Ôn quan hệ giữa số mol khí và áp suất.']
  },
  {
    id: 'chem11-ns-s031', questionId: 'chem11-ns-q031',
    recognition: 'Dạng chỉ thị ẩm: khí phải hòa tan trong lớp nước rồi tạo môi trường base.',
    detailedSteps: [
      { order: 1, title: 'Hòa tan khí', explanation: 'NH₃ đi vào lớp nước trên giấy quỳ.' },
      { order: 2, title: 'Tạo môi trường base', explanation: 'Cân bằng tạo OH⁻ làm quỳ tím ẩm hóa xanh.' }
    ],
    finalAnswer: 'C', commonMistakes: ['Cho NH₃ là acid vì chứa H.'], reviewSuggestions: ['Ôn tính base của NH₃ trong nước.']
  },
  {
    id: 'chem11-ns-s032', questionId: 'chem11-ns-q032',
    recognition: 'Dạng phân biệt quỳ khô–quỳ ẩm: cần nước để hình thành ion tác động lên chỉ thị.',
    detailedSteps: [
      { order: 1, title: 'Vai trò của nước', explanation: 'Nước hòa tan NH₃ và tham gia cân bằng tạo NH₄⁺, OH⁻.' },
      { order: 2, title: 'Kết luận', explanation: 'Không có lớp nước, tín hiệu màu kém rõ; quỳ ẩm phù hợp hơn.' }
    ],
    finalAnswer: 'D', commonMistakes: ['Cho nước làm mất tính base của NH₃.'], reviewSuggestions: ['Ghi nhớ khí acid/base thường được thử bằng chỉ thị ẩm.']
  },
  {
    id: 'chem11-ns-s033', questionId: 'chem11-ns-q033',
    recognition: 'Dạng viết cân bằng base yếu: NH₃ nhận H⁺ từ nước và phản ứng không hoàn toàn.',
    detailedSteps: [
      { order: 1, title: 'Xác định cặp acid–base', explanation: 'NH₃ nhận proton thành NH₄⁺; H₂O nhường proton thành OH⁻.' },
      { order: 2, title: 'Chọn kí hiệu cân bằng', explanation: '$NH_3+H_2O\\rightleftharpoons NH_4^++OH^-$.' }
    ],
    finalAnswer: 'A', commonMistakes: ['Viết NH₃ tự phân li tạo OH⁻ mà không có nước.'], reviewSuggestions: ['Ôn thuyết Brønsted–Lowry.']
  },
  {
    id: 'chem11-ns-s034', questionId: 'chem11-ns-q034',
    recognition: 'Dạng xác định vai trò Brønsted: theo dõi sự nhận hoặc nhường proton.',
    detailedSteps: [
      { order: 1, title: 'Theo dõi proton', explanation: 'NH₃ nhận H⁺ từ HCl để tạo NH₄⁺.' },
      { order: 2, title: 'Kết luận vai trò', explanation: 'Chất nhận proton là base Brønsted, nên chọn B.' }
    ],
    finalAnswer: 'B', commonMistakes: ['Nhầm nhận proton với nhận electron.'], reviewSuggestions: ['Phân biệt phản ứng acid–base và oxi hóa–khử.']
  },
  {
    id: 'chem11-ns-s035', questionId: 'chem11-ns-q035',
    recognition: 'Dạng phân biệt base yếu–mạnh: xét mức độ tạo ion OH⁻ chứ không chỉ xét khả năng đổi màu chỉ thị.',
    detailedSteps: [
      { order: 1, title: 'Xét cân bằng', explanation: 'NH₃ nhận proton từ nước chỉ một phần.' },
      { order: 2, title: 'So sánh nồng độ', explanation: 'Vì vậy [OH⁻] nhỏ hơn nồng độ hình thức NH₃; C đúng.' }
    ],
    finalAnswer: 'C', commonMistakes: ['Cho mọi dung dịch làm quỳ xanh đều là base mạnh.'], reviewSuggestions: ['Ôn khái niệm chất điện li/base mạnh và yếu.']
  },
  {
    id: 'chem11-ns-s036', questionId: 'chem11-ns-q036',
    recognition: 'Dạng suy luận định tính từ base yếu: không cần tính hằng số, chỉ dùng mức độ phản ứng một phần.',
    detailedSteps: [
      { order: 1, title: 'Xác định bản chất', explanation: 'NH₃ là base yếu nên cân bằng với nước không chuyển hoàn toàn sang phải.' },
      { order: 2, title: 'Suy ra', explanation: 'Số mol OH⁻ tạo ra nhỏ hơn số mol NH₃ ban đầu, nên [OH⁻] < 0,10 M.' }
    ],
    finalAnswer: 'D', commonMistakes: ['Áp dụng công thức base mạnh cho NH₃.'], reviewSuggestions: ['Không đồng nhất nồng độ chất tan với nồng độ OH⁻.']
  },
  {
    id: 'chem11-ns-s037', questionId: 'chem11-ns-q037',
    recognition: 'Dạng số oxi hóa: H trong hợp chất với phi kim thường là +1.',
    detailedSteps: [
      { order: 1, title: 'Lập tổng', explanation: 'NH₃ trung hòa nên $x+3(+1)=0$.' },
      { order: 2, title: 'Giải', explanation: '$x=-3$.' }
    ],
    finalAnswer: 'A', commonMistakes: ['Lấy số oxi hóa N bằng +3 theo chỉ số H.'], reviewSuggestions: ['Ôn quy tắc tổng số oxi hóa.']
  },
  {
    id: 'chem11-ns-s038', questionId: 'chem11-ns-q038',
    recognition: 'Dạng phương trình NH₃ khử oxide kim loại: sản phẩm gồm N₂, kim loại và nước.',
    detailedSteps: [
      { order: 1, title: 'Viết sản phẩm', explanation: '$NH_3+CuO\\rightarrow N_2+Cu+H_2O$.' },
      { order: 2, title: 'Cân bằng', explanation: 'Hệ số đúng là 2:3:1:3:3.' }
    ],
    finalAnswer: 'B', commonMistakes: ['Không bảo toàn H hoặc O.'], reviewSuggestions: ['Kiểm tra từng nguyên tố sau khi cân bằng.']
  },
  {
    id: 'chem11-ns-s039', questionId: 'chem11-ns-q039',
    recognition: 'Dạng xác định chất khử: N trong NH₃ tăng số oxi hóa từ −3 lên 0.',
    detailedSteps: [
      { order: 1, title: 'Theo dõi N', explanation: 'N: −3 trong NH₃ → 0 trong N₂, tức bị oxi hóa.' },
      { order: 2, title: 'Kết luận', explanation: 'Chất bị oxi hóa là chất khử; NH₃ là chất khử.' }
    ],
    finalAnswer: 'C', commonMistakes: ['Nhầm “bị oxi hóa” với “chất oxi hóa”.'], reviewSuggestions: ['Ôn cặp thuật ngữ chất khử–bị oxi hóa.']
  },
  {
    id: 'chem11-ns-s040', questionId: 'chem11-ns-q040',
    recognition: 'Dạng cân bằng phản ứng cháy NH₃ tạo N₂: cân bằng N, H rồi O.',
    detailedSteps: [
      { order: 1, title: 'Cân bằng N và H', explanation: 'Chọn 4NH₃ tạo 2N₂ và 6H₂O.' },
      { order: 2, title: 'Cân bằng O', explanation: '6 O trong nước cần 3O₂, thu được phương trình D.' }
    ],
    finalAnswer: 'D', commonMistakes: ['Dùng phương trình tạo NO dù đề nêu không xúc tác và sản phẩm N₂.'], reviewSuggestions: ['Đọc kĩ sản phẩm và điều kiện trước khi cân bằng.']
  },
  {
    id: 'chem11-ns-s041', questionId: 'chem11-ns-q041',
    recognition: 'Dạng áp suất–cân bằng khí: so tổng hệ số khí hai vế.',
    detailedSteps: [
      { order: 1, title: 'Đếm mol khí', explanation: 'Vế trái có 4 mol khí, vế phải có 2 mol khí.' },
      { order: 2, title: 'Áp dụng Le Chatelier', explanation: 'Tăng áp suất ưu tiên phía ít mol khí, tức chiều tạo NH₃.' }
    ],
    finalAnswer: 'A', commonMistakes: ['So khối lượng mol thay vì số mol khí.'], reviewSuggestions: ['Ôn ảnh hưởng áp suất theo số mol khí.']
  },
  {
    id: 'chem11-ns-s042', questionId: 'chem11-ns-q042',
    recognition: 'Dạng xúc tác–cân bằng: tách tốc độ đạt cân bằng khỏi vị trí cân bằng.',
    detailedSteps: [
      { order: 1, title: 'Xét tốc độ', explanation: 'Xúc tác hạ năng lượng hoạt hóa cho cả hai chiều.' },
      { order: 2, title: 'Xét thành phần cân bằng', explanation: 'Hằng số và vị trí cân bằng không đổi; hệ chỉ đạt cân bằng nhanh hơn.' }
    ],
    finalAnswer: 'B', commonMistakes: ['Cho xúc tác chỉ tăng chiều thuận.'], reviewSuggestions: ['Ôn phân biệt động học và nhiệt động/cân bằng.']
  },
  {
    id: 'chem11-ns-s043', questionId: 'chem11-ns-q043',
    recognition: 'Dạng nhiệt độ thỏa hiệp: nhiệt độ thấp lợi về cân bằng tỏa nhiệt nhưng bất lợi về tốc độ.',
    detailedSteps: [
      { order: 1, title: 'Xét cân bằng', explanation: 'Hạ nhiệt độ ưu tiên chiều tỏa nhiệt tạo NH₃.' },
      { order: 2, title: 'Xét tốc độ', explanation: 'Quá thấp làm phản ứng rất chậm, nên công nghiệp chọn nhiệt độ thỏa hiệp và xúc tác.' }
    ],
    finalAnswer: 'C', commonMistakes: ['Tối ưu một yếu tố mà bỏ qua tốc độ sản xuất.'], reviewSuggestions: ['Luôn xét đồng thời hiệu suất cân bằng và tốc độ.']
  },
  {
    id: 'chem11-ns-s044', questionId: 'chem11-ns-q044',
    recognition: 'Dạng tách sản phẩm–tuần hoàn: loại NH₃ khỏi hệ và tái sử dụng chất đầu.',
    detailedSteps: [
      { order: 1, title: 'Tác động của tách NH₃', explanation: 'Giảm nồng độ sản phẩm làm cân bằng có xu hướng tạo thêm NH₃.' },
      { order: 2, title: 'Tác động của tuần hoàn', explanation: 'N₂, H₂ chưa phản ứng được đưa lại đầu dây chuyền, tăng hiệu quả sử dụng nguyên liệu.' }
    ],
    finalAnswer: 'D', commonMistakes: ['Cho rằng phản ứng trở thành một chiều tuyệt đối.'], reviewSuggestions: ['Ôn ảnh hưởng của việc lấy bớt sản phẩm.']
  },
  {
    id: 'chem11-ns-s045', questionId: 'chem11-ns-q045',
    recognition: 'Dạng ứng dụng làm nguyên liệu: chọn quá trình tiêu thụ NH₃ để tạo sản phẩm hóa học khác.',
    detailedSteps: [
      { order: 1, title: 'Xác định nhóm ứng dụng', explanation: 'NH₃ là nguyên liệu quan trọng cho phân bón và nitric acid.' },
      { order: 2, title: 'Loại phương án sai', explanation: 'NH₃ không phải khí trơ, khí hô hấp hay chất oxi hóa mạnh phổ dụng.' }
    ],
    finalAnswer: 'A', commonMistakes: ['Nhầm ứng dụng NH₃ với N₂.'], reviewSuggestions: ['Lập bảng ứng dụng N₂ và NH₃.']
  },
  {
    id: 'chem11-ns-s046', questionId: 'chem11-ns-q046',
    recognition: 'Dạng ghép nhiều ứng dụng: phân biệt NH₃ với N₂ và không dùng một tính chất giải thích mọi trường hợp.',
    detailedSteps: [
      { order: 1, title: 'Xét I và II', explanation: 'NH₃ dùng sản xuất phân đạm và làm môi chất trong hệ lạnh công nghiệp phù hợp.' },
      { order: 2, title: 'Xét III', explanation: 'Môi trường trơ bảo quản thực phẩm phù hợp hơn với N₂; chọn B.' }
    ],
    finalAnswer: 'B', commonMistakes: ['Đồng nhất ammonia và nitrogen vì đều chứa N.'], reviewSuggestions: ['Ghép từng ứng dụng với tính chất riêng.']
  },
  {
    id: 'chem11-ns-s047', questionId: 'chem11-ns-q047',
    recognition: 'Dạng tình huống an toàn: ưu tiên rời vùng nguy hiểm, cảnh báo và giao xử lí cho người có trách nhiệm.',
    detailedSteps: [
      { order: 1, title: 'Nhận diện nguy cơ', explanation: 'NH₃ độc, gây kích ứng; tiếp cận để ngửi hoặc dùng lửa làm tăng nguy hiểm.' },
      { order: 2, title: 'Chọn hành động', explanation: 'Rời khu vực theo hướng dẫn và báo người phụ trách là phương án đúng.' }
    ],
    finalAnswer: 'C', commonMistakes: ['Tự xử lí vì biết NH₃ tan trong nước.'], reviewSuggestions: ['Tuân thủ quy trình khẩn cấp thay vì ứng biến.']
  },
  {
    id: 'chem11-ns-s048', questionId: 'chem11-ns-q048',
    recognition: 'Dạng tổng hợp quy trình Haber: phương án đúng phải đồng thời xét cân bằng, tốc độ và vận hành dây chuyền.',
    detailedSteps: [
      { order: 1, title: 'Xét điều kiện phản ứng', explanation: 'Áp suất, nhiệt độ thỏa hiệp và xúc tác giải quyết hiệu suất–tốc độ.' },
      { order: 2, title: 'Xét vận hành', explanation: 'Tách NH₃ và tuần hoàn khí chưa phản ứng tăng hiệu quả toàn quy trình; D đầy đủ nhất.' }
    ],
    finalAnswer: 'D', commonMistakes: ['Chọn một yếu tố duy nhất làm điều kiện tối ưu.'], reviewSuggestions: ['Dùng sơ đồ hệ thống thay vì học rời từng điều kiện.']
  },
  {
    id: 'chem11-ns-s049', questionId: 'chem11-ns-q049',
    recognition: 'Dạng nhận diện muối ammonium: tìm hợp chất ion chứa cation $NH_4^+$.',
    detailedSteps: [
      { order: 1, title: 'Tìm cation', explanation: '$NH_4Cl$ gồm $NH_4^+$ và $Cl^-$.' },
      { order: 2, title: 'Phân loại', explanation: 'Đây là muối ammonium; NH₃ là phân tử trung hòa.' }
    ],
    finalAnswer: 'A', commonMistakes: ['Chọn NH₃ vì tên gần giống ammonium.'], reviewSuggestions: ['Ghi nhớ ion ammonium là NH₄⁺.']
  },
  {
    id: 'chem11-ns-s050', questionId: 'chem11-ns-q050',
    recognition: 'Dạng viết phương trình phân li: giữ nguyên các ion đa nguyên tử.',
    detailedSteps: [
      { order: 1, title: 'Xác định ion', explanation: 'Ammonium nitrate gồm $NH_4^+$ và $NO_3^- $.' },
      { order: 2, title: 'Viết phân li', explanation: '$NH_4NO_3\\rightarrow NH_4^++NO_3^-$.' }
    ],
    finalAnswer: 'B', commonMistakes: ['Phá vỡ ion đa nguyên tử thành nguyên tử riêng.'], reviewSuggestions: ['Ôn cách đọc công thức muối.']
  },
  {
    id: 'chem11-ns-s051', questionId: 'chem11-ns-q051',
    recognition: 'Dạng đếm ion từ chỉ số: chỉ số 2 ngoài ngoặc áp dụng cho toàn bộ ion NH₄⁺.',
    detailedSteps: [
      { order: 1, title: 'Đọc chỉ số', explanation: '$(NH_4)_2$ cho hai ion $NH_4^+$.' },
      { order: 2, title: 'Kiểm tra điện tích', explanation: '$2(+1)+(-2)=0$, nên có hai $NH_4^+$ và một $SO_4^{2-}$.' }
    ],
    finalAnswer: 'C', commonMistakes: ['Bỏ chỉ số 2 ngoài ngoặc.'], reviewSuggestions: ['Kiểm tra bảo toàn điện tích khi phân li.']
  },
  {
    id: 'chem11-ns-s052', questionId: 'chem11-ns-q052',
    recognition: 'Dạng phân biệt tiểu phân: nhìn điện tích và số nguyên tử H.',
    detailedSteps: [
      { order: 1, title: 'Đọc kí hiệu', explanation: '$NH_4^+$ có điện tích +1; $NH_3$ không ghi điện tích.' },
      { order: 2, title: 'Kết luận', explanation: '$NH_4^+$ là ion dương còn NH₃ là phân tử trung hòa.' }
    ],
    finalAnswer: 'D', commonMistakes: ['Coi NH₄⁺ và NH₃ là hai cách viết cùng chất.'], reviewSuggestions: ['Phân biệt acid–base liên hợp NH₄⁺/NH₃.']
  },
  {
    id: 'chem11-ns-s053', questionId: 'chem11-ns-q053',
    recognition: 'Dạng phương trình ion lõi: NH₄⁺ nhường proton cho OH⁻.',
    detailedSteps: [
      { order: 1, title: 'Chuyển proton', explanation: '$NH_4^+$ mất H⁺ thành NH₃; OH⁻ nhận H⁺ thành H₂O.' },
      { order: 2, title: 'Viết phương trình', explanation: '$NH_4^++OH^-\\rightarrow NH_3+H_2O$.' }
    ],
    finalAnswer: 'A', commonMistakes: ['Cho sản phẩm khí là H₂.'], reviewSuggestions: ['Ôn phản ứng acid–base của NH₄⁺.']
  },
  {
    id: 'chem11-ns-s054', questionId: 'chem11-ns-q054',
    recognition: 'Dạng chuyển phương trình ion sang phân tử: ghép ion khán giả thành muối tan.',
    detailedSteps: [
      { order: 1, title: 'Dùng phản ứng lõi', explanation: '$NH_4^++OH^-\\rightarrow NH_3+H_2O$.' },
      { order: 2, title: 'Thêm ion khán giả', explanation: '$NH_4Cl+NaOH\\rightarrow NH_3+NaCl+H_2O$.' }
    ],
    finalAnswer: 'B', commonMistakes: ['Giữ NH₄OH là sản phẩm cuối mà không biểu diễn NH₃ thoát ra.'], reviewSuggestions: ['So sánh phương trình phân tử và ion rút gọn.']
  },
  {
    id: 'chem11-ns-s055', questionId: 'chem11-ns-q055',
    recognition: 'Dạng nhận biết hiện tượng: khí NH₃ có tính base khi hòa tan trong lớp nước trên quỳ tím ẩm.',
    detailedSteps: [
      { order: 1, title: 'Xác định khí', explanation: 'Muối ammonium với kiềm giải phóng NH₃.' },
      { order: 2, title: 'Xác định dấu hiệu', explanation: 'NH₃ làm quỳ tím ẩm hóa xanh.' }
    ],
    finalAnswer: 'C', commonMistakes: ['Cho phản ứng sinh H₂ vì có kiềm.'], reviewSuggestions: ['Gắn phương trình ion với dấu hiệu thực nghiệm.']
  },
  {
    id: 'chem11-ns-s056', questionId: 'chem11-ns-q056',
    recognition: 'Dạng cân bằng muối có hai ion NH₄⁺: mỗi công thức $(NH_4)_2SO_4$ tạo hai NH₃.',
    detailedSteps: [
      { order: 1, title: 'Cân bằng nhóm ammonium', explanation: 'Hai $NH_4^+$ cần hai OH⁻ và tạo 2NH₃ + 2H₂O.' },
      { order: 2, title: 'Ghép ion còn lại', explanation: '$Ca^{2+}$ và $SO_4^{2-}$ tạo $CaSO_4$; phương trình D cân bằng.' }
    ],
    finalAnswer: 'D', commonMistakes: ['Chỉ tạo một NH₃ từ hai nhóm NH₄.'], reviewSuggestions: ['Đếm nhóm nguyên tử trước khi cân bằng.']
  },
  {
    id: 'chem11-ns-s057', questionId: 'chem11-ns-q057',
    recognition: 'Dạng nhiệt phân ammonium hydrogencarbonate: sản phẩm quen thuộc là NH₃, CO₂ và H₂O.',
    detailedSteps: [
      { order: 1, title: 'Nhận diện muối', explanation: 'Muối chứa $NH_4^+$ và $HCO_3^-$ dễ phân hủy khi đun.' },
      { order: 2, title: 'Kiểm tra bảo toàn', explanation: '$NH_3+CO_2+H_2O$ bảo toàn N, H, C và O.' }
    ],
    finalAnswer: 'A', commonMistakes: ['Viết sự phân li trong nước thay cho nhiệt phân.'], reviewSuggestions: ['Phân biệt mũi tên nhiệt phân và phân li.']
  },
  {
    id: 'chem11-ns-s058', questionId: 'chem11-ns-q058',
    recognition: 'Dạng nhiệt phân NH₄Cl: trong phạm vi bài học biểu diễn cân bằng tạo NH₃ và HCl.',
    detailedSteps: [
      { order: 1, title: 'Tách acid–base liên hợp', explanation: '$NH_4^+$ có thể chuyển proton cho $Cl^-$ ở điều kiện nhiệt.' },
      { order: 2, title: 'Viết biểu diễn', explanation: '$NH_4Cl\\rightleftharpoons NH_3+HCl$.' }
    ],
    finalAnswer: 'B', commonMistakes: ['Tạo Cl₂ mà không có quá trình oxi hóa phù hợp.'], reviewSuggestions: ['Học sản phẩm theo từng muối cụ thể.']
  },
  {
    id: 'chem11-ns-s059', questionId: 'chem11-ns-q059',
    recognition: 'Dạng kiểm tra quy tắc tổng quát: anion quyết định đáng kể sản phẩm nhiệt phân.',
    detailedSteps: [
      { order: 1, title: 'So sánh ví dụ', explanation: 'NH₄HCO₃ và NH₄Cl không cho cùng bộ sản phẩm.' },
      { order: 2, title: 'Kết luận', explanation: 'Không có một phương trình nhiệt phân duy nhất cho mọi muối ammonium; C đúng.' }
    ],
    finalAnswer: 'C', commonMistakes: ['Học thuộc “muối ammonium tạo NH₃” như quy tắc tuyệt đối.'], reviewSuggestions: ['Luôn đọc anion và điều kiện.']
  },
  {
    id: 'chem11-ns-s060', questionId: 'chem11-ns-q060',
    recognition: 'Dạng tỉ lượng nhiệt phân: lấy hệ số sản phẩm khí chia cho hệ số chất đầu.',
    detailedSteps: [
      { order: 1, title: 'Đọc tỉ lệ', explanation: '1 mol NH₄HCO₃ tạo tổng 3 mol khí theo phương trình đã cho.' },
      { order: 2, title: 'Tính', explanation: '$0{,}10\\times3=0{,}30$ mol khí.' }
    ],
    finalAnswer: 'D', commonMistakes: ['Chỉ đếm một trong ba sản phẩm khí.'], reviewSuggestions: ['Cộng hệ số các sản phẩm được xác định là khí.']
  },
  {
    id: 'chem11-ns-s061', questionId: 'chem11-ns-q061',
    recognition: 'Dạng chọn thuốc thử NH₄⁺: cần ion OH⁻ để chuyển NH₄⁺ thành NH₃.',
    detailedSteps: [
      { order: 1, title: 'Xác định phản ứng cần tạo', explanation: '$NH_4^++OH^-\\rightarrow NH_3+H_2O$.' },
      { order: 2, title: 'Chọn thuốc thử', explanation: 'Dung dịch NaOH cung cấp OH⁻ phù hợp.' }
    ],
    finalAnswer: 'A', commonMistakes: ['Chọn acid làm NH₄⁺ bền hơn thay vì giải phóng NH₃.'], reviewSuggestions: ['Nhớ cặp thuốc thử: muối ammonium + kiềm.']
  },
  {
    id: 'chem11-ns-s062', questionId: 'chem11-ns-q062',
    recognition: 'Dạng xác nhận khí NH₃: dùng giấy quỳ tím ẩm và quan sát hóa xanh.',
    detailedSteps: [
      { order: 1, title: 'Hòa tan khí', explanation: 'NH₃ hòa tan trong lớp nước trên giấy chỉ thị.' },
      { order: 2, title: 'Đổi màu', explanation: 'Môi trường base làm quỳ tím hóa xanh.' }
    ],
    finalAnswer: 'B', commonMistakes: ['Dùng quỳ khô hoặc chọn màu đỏ của acid.'], reviewSuggestions: ['Ghi nhớ chỉ thị phải ẩm.']
  },
  {
    id: 'chem11-ns-s063', questionId: 'chem11-ns-q063',
    recognition: 'Dạng phương trình giải thích phép thử: loại ion khán giả và giữ phản ứng NH₄⁺–OH⁻.',
    detailedSteps: [
      { order: 1, title: 'Xác định tiểu phân phản ứng', explanation: '$NH_4^+$ từ mẫu và OH⁻ từ thuốc thử.' },
      { order: 2, title: 'Viết sản phẩm', explanation: 'Chuyển proton tạo NH₃ và H₂O; phương án C.' }
    ],
    finalAnswer: 'C', commonMistakes: ['Cho rằng có kiềm thì luôn sinh H₂.'], reviewSuggestions: ['Ôn phương trình ion rút gọn.']
  },
  {
    id: 'chem11-ns-s064', questionId: 'chem11-ns-q064',
    recognition: 'Dạng an toàn thực nghiệm: không đưa mũi sát miệng ống nghiệm để nhận biết khí.',
    detailedSteps: [
      { order: 1, title: 'Nhận diện hành vi nguy hiểm', explanation: 'NH₃ gây kích ứng và không được ngửi trực tiếp.' },
      { order: 2, title: 'Chọn cách xác nhận', explanation: 'Dùng lượng nhỏ, kiềm và quỳ tím ẩm theo hướng dẫn; D là thao tác phải loại bỏ.' }
    ],
    finalAnswer: 'D', commonMistakes: ['Coi mùi là phép thử chính thức và an toàn.'], reviewSuggestions: ['Ưu tiên chỉ thị thay cho giác quan trực tiếp.']
  },
  {
    id: 'chem11-ns-s065', questionId: 'chem11-ns-q065',
    recognition: 'Dạng sắp xếp quy trình: chuẩn bị dung dịch mẫu, tạo NH₃, hỗ trợ giải phóng khí rồi xác nhận bằng chỉ thị ẩm.',
    detailedSteps: [
      { order: 1, title: 'Tạo điều kiện phản ứng', explanation: 'Hòa tan mẫu và thêm NaOH để có NH₄⁺ tiếp xúc OH⁻.' },
      { order: 2, title: 'Quan sát an toàn', explanation: 'Làm ấm nhẹ và dùng quỳ tím ẩm; trình tự A đúng.' }
    ],
    finalAnswer: 'A', commonMistakes: ['Đun khô mạnh hoặc ngửi trực tiếp.'], reviewSuggestions: ['Học quy trình theo mục đích từng bước.']
  },
  {
    id: 'chem11-ns-s066', questionId: 'chem11-ns-q066',
    recognition: 'Dạng vai trò thao tác: làm ấm nhẹ hỗ trợ tốc độ giải phóng NH₃, không tạo ion mới.',
    detailedSteps: [
      { order: 1, title: 'Xét phản ứng', explanation: 'NH₄⁺ đã có sẵn và phản ứng với OH⁻ tạo NH₃.' },
      { order: 2, title: 'Xét nhiệt độ', explanation: 'Làm ấm giúp NH₃ thoát ra nhanh hơn để dễ kiểm tra.' }
    ],
    finalAnswer: 'B', commonMistakes: ['Cho nhiệt độ tạo NH₄⁺ mới.'], reviewSuggestions: ['Phân biệt vai trò phản ứng và vai trò hỗ trợ quan sát.']
  },
  {
    id: 'chem11-ns-s067', questionId: 'chem11-ns-q067',
    recognition: 'Dạng đọc bảng hiện tượng: bằng chứng dương cần đồng thời có khí sau khi thêm kiềm và khí thể hiện tính base.',
    detailedSteps: [
      { order: 1, title: 'Đánh giá X', explanation: 'Khí làm quỳ tím ẩm hóa xanh phù hợp với NH₃, nên X có bằng chứng NH₄⁺.' },
      { order: 2, title: 'Đánh giá Y và Z', explanation: 'Không khí hoặc khí không làm quỳ xanh chưa đủ xác nhận NH₄⁺; chọn C.' }
    ],
    finalAnswer: 'C', commonMistakes: ['Kết luận mọi mẫu có khí đều chứa NH₄⁺.'], reviewSuggestions: ['Yêu cầu dấu hiệu đặc trưng, không chỉ dấu hiệu chung.']
  },
  {
    id: 'chem11-ns-s068', questionId: 'chem11-ns-q068',
    recognition: 'Dạng vai trò mẫu trắng: kiểm tra tín hiệu nền từ thuốc thử và dụng cụ.',
    detailedSteps: [
      { order: 1, title: 'Thiết lập đối chứng', explanation: 'Ống nước + NaOH không chứa mẫu cần không cho tín hiệu dương.' },
      { order: 2, title: 'Diễn giải', explanation: 'Nếu mẫu trắng dương, thuốc thử/dụng cụ có thể nhiễm; D đúng.' }
    ],
    finalAnswer: 'D', commonMistakes: ['Cho mẫu trắng dùng để tạo thêm chất cần nhận biết.'], reviewSuggestions: ['Ôn biến kiểm soát và mẫu trắng.']
  },
  {
    id: 'chem11-ns-s069', questionId: 'chem11-ns-q069',
    recognition: 'Dạng ứng dụng phân bón: liên hệ ion ammonium với nguồn nitrogen dinh dưỡng.',
    detailedSteps: [
      { order: 1, title: 'Xác định nguyên tố dinh dưỡng', explanation: 'Muối ammonium chứa nitrogen.' },
      { order: 2, title: 'Chọn phát biểu có giới hạn', explanation: 'Cây có thể chuyển hóa, sử dụng nguồn nitrogen này; vẫn cần đúng liều và điều kiện.' }
    ],
    finalAnswer: 'A', commonMistakes: ['Suy ra phân bón có thể dùng không giới hạn.'], reviewSuggestions: ['Phân biệt lợi ích dinh dưỡng và liều sử dụng.']
  },
  {
    id: 'chem11-ns-s070', questionId: 'chem11-ns-q070',
    recognition: 'Dạng thất thoát phân ammonium: kiềm chuyển NH₄⁺ thành NH₃ dễ bay hơi.',
    detailedSteps: [
      { order: 1, title: 'Viết phản ứng lõi', explanation: '$NH_4^++OH^-\\rightarrow NH_3+H_2O$.' },
      { order: 2, title: 'Suy ra hậu quả', explanation: 'NH₃ thoát ra làm mất nitrogen dự định cung cấp cho đất.' }
    ],
    finalAnswer: 'B', commonMistakes: ['Cho phản ứng với kiềm không ảnh hưởng vì không thấy kết tủa.'], reviewSuggestions: ['Liên hệ phương trình ion với hiện tượng bay hơi.']
  },
  {
    id: 'chem11-ns-s071', questionId: 'chem11-ns-q071',
    recognition: 'Dạng an toàn bảo quản: chọn phương án tuân thủ nhãn, tránh nhiệt, nhiễm bẩn và chất không tương thích.',
    detailedSteps: [
      { order: 1, title: 'Loại hành vi nguy hiểm', explanation: 'Nguồn nhiệt, tia lửa và trộn tùy tiện đều làm tăng rủi ro.' },
      { order: 2, title: 'Chọn nguyên tắc', explanation: 'Bảo quản đúng quy định và tách khỏi chất không tương thích là lựa chọn C.' }
    ],
    finalAnswer: 'C', commonMistakes: ['Cho sản phẩm nông nghiệp mặc nhiên an toàn.'], reviewSuggestions: ['Luôn đọc nhãn an toàn riêng của từng hóa chất.']
  },
  {
    id: 'chem11-ns-s072', questionId: 'chem11-ns-q072',
    recognition: 'Dạng đánh giá lợi ích–rủi ro: phương án đúng phải ghi nhận giá trị sử dụng và điều kiện an toàn.',
    detailedSteps: [
      { order: 1, title: 'Xét lợi ích', explanation: 'Muối ammonium có thể cung cấp nitrogen cho cây.' },
      { order: 2, title: 'Xét điều kiện', explanation: 'Hiệu quả và an toàn phụ thuộc liều, cách dùng, bảo quản và phối trộn; D đầy đủ nhất.' }
    ],
    finalAnswer: 'D', commonMistakes: ['Chọn phát biểu tuyệt đối “càng nhiều càng tốt”.'], reviewSuggestions: ['Đánh giá sản phẩm hóa học theo cả lợi ích và rủi ro.']
  },
  {
    id: 'chem11-ns-s073', questionId: 'chem11-ns-q073',
    recognition: 'Dạng nhận diện nguồn NOₓ nhân sinh: tìm quá trình đốt cháy ở nhiệt độ cao.',
    detailedSteps: [
      { order: 1, title: 'Xét điều kiện tạo NO', explanation: 'Nhiệt độ cao giúp N₂ và O₂ trong không khí phản ứng tạo NO.' },
      { order: 2, title: 'Chọn nguồn', explanation: 'Động cơ và lò đốt là nguồn nhân sinh phổ biến có điều kiện này.' }
    ],
    finalAnswer: 'A', commonMistakes: ['Chọn một quá trình tự nhiên không có nhiệt độ cao.'], reviewSuggestions: ['Phân loại nguồn tự nhiên và nhân sinh của NOₓ.']
  },
  {
    id: 'chem11-ns-s074', questionId: 'chem11-ns-q074',
    recognition: 'Dạng nguồn NO tự nhiên: sấm sét cung cấp năng lượng rất lớn trong thời gian ngắn.',
    detailedSteps: [
      { order: 1, title: 'Nhận diện nguồn năng lượng', explanation: 'Tia sét tạo vùng nhiệt độ rất cao.' },
      { order: 2, title: 'Liên hệ phản ứng', explanation: '$N_2+O_2\\rightarrow2NO$ có thể xảy ra, nên chọn B.' }
    ],
    finalAnswer: 'B', commonMistakes: ['Cho chỉ hoạt động con người mới tạo NO.'], reviewSuggestions: ['Ôn quá trình nitrogen trong mưa giông.']
  },
  {
    id: 'chem11-ns-s075', questionId: 'chem11-ns-q075',
    recognition: 'Dạng chuỗi NOₓ: sản phẩm đầu tiên NO tiếp tục bị oxygen không khí oxi hóa.',
    detailedSteps: [
      { order: 1, title: 'Xác định chất phản ứng tiếp', explanation: 'Không khí còn nhiều O₂.' },
      { order: 2, title: 'Viết chuyển hóa', explanation: '$2NO+O_2\\rightarrow2NO_2$, nên C đúng.' }
    ],
    finalAnswer: 'C', commonMistakes: ['Dừng chuỗi ở NO.'], reviewSuggestions: ['Ghi nhớ chuỗi NO → NO₂.']
  },
  {
    id: 'chem11-ns-s076', questionId: 'chem11-ns-q076',
    recognition: 'Dạng đánh giá phát biểu tuyệt đối: NOₓ có nhiều nhóm nguồn.',
    detailedSteps: [
      { order: 1, title: 'Liệt kê nguồn', explanation: 'Sấm sét là nguồn tự nhiên; động cơ và lò đốt là nguồn nhân sinh.' },
      { order: 2, title: 'Kết luận', explanation: 'Phương án D bao quát cả hai và nêu đúng vai trò nhiệt độ cao.' }
    ],
    finalAnswer: 'D', commonMistakes: ['Chỉ nhớ nguồn giao thông.'], reviewSuggestions: ['Lập bảng nguồn NOₓ theo nguồn gốc.']
  },
  {
    id: 'chem11-ns-s077', questionId: 'chem11-ns-q077',
    recognition: 'Dạng cân bằng phản ứng NO với oxygen: sản phẩm là NO₂.',
    detailedSteps: [
      { order: 1, title: 'Viết sơ đồ', explanation: '$NO+O_2\\rightarrow NO_2$.' },
      { order: 2, title: 'Cân bằng', explanation: 'Đặt 2 trước NO và NO₂: $2NO+O_2\\rightarrow2NO_2$.' }
    ],
    finalAnswer: 'A', commonMistakes: ['Tạo công thức không tồn tại NO₃ để cân bằng.'], reviewSuggestions: ['Kiểm tra bảo toàn N và O.']
  },
  {
    id: 'chem11-ns-s078', questionId: 'chem11-ns-q078',
    recognition: 'Dạng phương trình tổng quát tạo HNO₃ từ NO₂: cần đồng thời oxygen và nước.',
    detailedSteps: [
      { order: 1, title: 'Xác định chất tham gia', explanation: 'NO₂ tiếp xúc O₂ và H₂O trong khí quyển.' },
      { order: 2, title: 'Kiểm tra phương trình', explanation: '$4NO_2+O_2+2H_2O\\rightarrow4HNO_3$ bảo toàn mọi nguyên tố.' }
    ],
    finalAnswer: 'B', commonMistakes: ['Bỏ oxygen hoặc tạo NH₃.'], reviewSuggestions: ['Dùng bảo toàn nguyên tử để kiểm tra phương trình.']
  },
  {
    id: 'chem11-ns-s079', questionId: 'chem11-ns-q079',
    recognition: 'Dạng giải thích mưa acid: trình bày chuỗi nhiều bước, không viết NO tạo acid trực tiếp.',
    detailedSteps: [
      { order: 1, title: 'Oxi hóa NO', explanation: 'NO bị O₂ chuyển thành NO₂.' },
      { order: 2, title: 'Tạo acid', explanation: 'NO₂ tiếp tục tạo HNO₃ trong môi trường khí quyển, làm nước mưa acid hơn.' }
    ],
    finalAnswer: 'C', commonMistakes: ['Bỏ qua NO₂ trung gian.'], reviewSuggestions: ['Vẽ chuỗi NO → NO₂ → HNO₃.']
  },
  {
    id: 'chem11-ns-s080', questionId: 'chem11-ns-q080',
    recognition: 'Dạng sắp xếp chuỗi từ N₂: bắt đầu bằng phản ứng nhiệt độ cao tạo NO.',
    detailedSteps: [
      { order: 1, title: 'Bước đầu', explanation: '$N_2$ tạo NO khi có năng lượng/nhiệt độ rất cao.' },
      { order: 2, title: 'Các bước sau', explanation: 'NO → NO₂ → HNO₃, đúng với phương án D.' }
    ],
    finalAnswer: 'D', commonMistakes: ['Viết N₂ thành nitrate trực tiếp.'], reviewSuggestions: ['Ôn mối liên hệ Bài 4 với Bài 6.']
  },
  {
    id: 'chem11-ns-s081', questionId: 'chem11-ns-q081',
    recognition: 'Dạng đọc bảng tương quan: mô tả đúng xu hướng nhưng không khẳng định nguyên nhân duy nhất.',
    detailedSteps: [
      { order: 1, title: 'So sánh dữ liệu', explanation: 'NOₓ tăng từ 20 lên 70 µg/m³, còn pH giảm từ 5,7 xuống 4,5.' },
      { order: 2, title: 'Giới hạn kết luận', explanation: 'Dữ liệu phù hợp liên hệ NOₓ–độ acid nhưng chưa loại trừ các nguồn acid khác; A đúng.' }
    ],
    finalAnswer: 'A', commonMistakes: ['Biến tương quan hai ngày thành quan hệ nhân quả duy nhất.'], reviewSuggestions: ['Phân biệt tương quan và nguyên nhân.']
  },
  {
    id: 'chem11-ns-s082', questionId: 'chem11-ns-q082',
    recognition: 'Dạng tác động acid lên carbonate: acid làm carbonate chuyển hóa, hòa tan dần.',
    detailedSteps: [
      { order: 1, title: 'Nhận diện vật liệu', explanation: 'Đá vôi chứa chủ yếu CaCO₃.' },
      { order: 2, title: 'Liên hệ tính acid', explanation: 'H⁺ phản ứng với carbonate, gây hòa tan và xuống cấp vật liệu; B đúng.' }
    ],
    finalAnswer: 'B', commonMistakes: ['Coi ăn mòn hóa học là biến đổi vật lí.'], reviewSuggestions: ['Ôn phản ứng acid–carbonate.']
  },
  {
    id: 'chem11-ns-s083', questionId: 'chem11-ns-q083',
    recognition: 'Dạng biện pháp gốc: ưu tiên ngăn chất ô nhiễm hình thành hoặc phát thải.',
    detailedSteps: [
      { order: 1, title: 'Xác định nguyên nhân', explanation: 'NOₓ từ động cơ/lò đốt góp phần tạo acid trong khí quyển.' },
      { order: 2, title: 'Chọn giải pháp', explanation: 'Giảm NOₓ tại nguồn tác động trực tiếp lên nguyên nhân, nên C đúng.' }
    ],
    finalAnswer: 'C', commonMistakes: ['Chỉ xử lí công trình sau khi hư hại.'], reviewSuggestions: ['Phân biệt phòng ngừa nguồn và khắc phục hậu quả.']
  },
  {
    id: 'chem11-ns-s084', questionId: 'chem11-ns-q084',
    recognition: 'Dạng đánh giá gói giải pháp: tách biện pháp nguồn phát thải và biện pháp phục hồi cục bộ.',
    detailedSteps: [
      { order: 1, title: 'Đánh giá giảm NOₓ', explanation: 'Hệ thống trên xe buýt làm giảm nguồn tiền chất tạo acid.' },
      { order: 2, title: 'Đánh giá bón vôi', explanation: 'Bón vôi hỗ trợ trung hòa hồ đã acid hóa nhưng không thay thế kiểm soát phát thải; D đúng.' }
    ],
    finalAnswer: 'D', commonMistakes: ['Cho xử lí hậu quả có thể triệt tiêu nguồn ô nhiễm.'], reviewSuggestions: ['Đánh giá giải pháp theo vị trí trong chuỗi nguyên nhân–hậu quả.']
  },
  {
    id: 'chem11-ns-s085', questionId: 'chem11-ns-q085',
    recognition: 'Dạng tính số oxi hóa: H là +1, O là −2 và tổng trong phân tử bằng 0.',
    detailedSteps: [
      { order: 1, title: 'Lập phương trình', explanation: '$+1+x+3(-2)=0$.' },
      { order: 2, title: 'Giải', explanation: '$x=+5$.' }
    ],
    finalAnswer: 'A', commonMistakes: ['Lấy chỉ số 3 làm số oxi hóa +3.'], reviewSuggestions: ['Ôn quy tắc tổng số oxi hóa.']
  },
  {
    id: 'chem11-ns-s086', questionId: 'chem11-ns-q086',
    recognition: 'Dạng đọc cấu tạo acid oxo: hydrogen acid nằm trong nhóm O–H.',
    detailedSteps: [
      { order: 1, title: 'Nhận diện liên kết', explanation: 'Trong HNO₃, H liên kết với O.' },
      { order: 2, title: 'Kết luận', explanation: 'Proton acid thuộc nhóm O–H, nên chọn B.' }
    ],
    finalAnswer: 'B', commonMistakes: ['Cho H liên kết trực tiếp với N.'], reviewSuggestions: ['Quan sát công thức cấu tạo HNO₃.']
  },
  {
    id: 'chem11-ns-s087', questionId: 'chem11-ns-q087',
    recognition: 'Dạng nhận biết acid mạnh: xét mức độ phân li trong nước.',
    detailedSteps: [
      { order: 1, title: 'Phân loại', explanation: 'HNO₃ thuộc nhóm acid mạnh.' },
      { order: 2, title: 'Mô tả trong nước', explanation: 'HNO₃ phân li gần như hoàn toàn thành H⁺ và NO₃⁻; C đúng.' }
    ],
    finalAnswer: 'C', commonMistakes: ['Cho có tính oxi hóa thì không có tính acid.'], reviewSuggestions: ['Một chất có thể có nhiều tính chất hóa học.']
  },
  {
    id: 'chem11-ns-s088', questionId: 'chem11-ns-q088',
    recognition: 'Dạng tách hai bản chất: acid–base theo proton, oxi hóa–khử theo electron.',
    detailedSteps: [
      { order: 1, title: 'Tính acid', explanation: 'HNO₃ cho proton H⁺ trong phản ứng acid–base.' },
      { order: 2, title: 'Tính oxi hóa', explanation: 'N(+5) có thể nhận electron; D phân biệt đúng hai tính chất.' }
    ],
    finalAnswer: 'D', commonMistakes: ['Dùng “cho H⁺” để định nghĩa chất oxi hóa.'], reviewSuggestions: ['Phân biệt chuyển proton và chuyển electron.']
  },
  {
    id: 'chem11-ns-s089', questionId: 'chem11-ns-q089',
    recognition: 'Dạng phương trình phân li acid mạnh: giữ nguyên ion nitrate.',
    detailedSteps: [
      { order: 1, title: 'Xác định ion', explanation: 'HNO₃ tạo H⁺ và NO₃⁻.' },
      { order: 2, title: 'Viết phương trình', explanation: '$HNO_3\\rightarrow H^++NO_3^-$.' }
    ],
    finalAnswer: 'A', commonMistakes: ['Phá ion nitrate thành ion nguyên tử.'], reviewSuggestions: ['Giữ nguyên ion đa nguyên tử khi phân li.']
  },
  {
    id: 'chem11-ns-s090', questionId: 'chem11-ns-q090',
    recognition: 'Dạng trung hòa acid mạnh–base mạnh: tạo muối nitrate và nước.',
    detailedSteps: [
      { order: 1, title: 'Ghép ion', explanation: 'Na⁺ kết hợp với NO₃⁻ tạo NaNO₃.' },
      { order: 2, title: 'Tạo nước', explanation: 'H⁺ + OH⁻ → H₂O; phương trình B cân bằng.' }
    ],
    finalAnswer: 'B', commonMistakes: ['Tạo nitrite NaNO₂ thay cho nitrate.'], reviewSuggestions: ['Không đổi công thức anion khi viết muối.']
  },
  {
    id: 'chem11-ns-s091', questionId: 'chem11-ns-q091',
    recognition: 'Dạng acid với oxide base: không có thay đổi số oxi hóa.',
    detailedSteps: [
      { order: 1, title: 'Phân loại CuO', explanation: 'CuO là oxide base.' },
      { order: 2, title: 'Kết luận', explanation: 'Acid + oxide base → muối + nước, minh họa tính acid của HNO₃.' }
    ],
    finalAnswer: 'C', commonMistakes: ['Gọi mọi phản ứng có HNO₃ là oxi hóa–khử.'], reviewSuggestions: ['Kiểm tra số oxi hóa trước khi phân loại phản ứng.']
  },
  {
    id: 'chem11-ns-s092', questionId: 'chem11-ns-q092',
    recognition: 'Dạng acid–carbonate: sản phẩm là nitrate, CO₂ và H₂O.',
    detailedSteps: [
      { order: 1, title: 'Viết sản phẩm', explanation: '$Ca(NO_3)_2+CO_2+H_2O$.' },
      { order: 2, title: 'Cân bằng', explanation: 'Cần 2HNO₃ cho một CaCO₃, đúng phương án D.' }
    ],
    finalAnswer: 'D', commonMistakes: ['Viết công thức muối CaNO₃ sai hóa trị.'], reviewSuggestions: ['Ôn lập công thức muối từ điện tích ion.']
  },
  {
    id: 'chem11-ns-s093', questionId: 'chem11-ns-q093',
    recognition: 'Dạng phương trình ion trung hòa: loại Na⁺ và NO₃⁻ là ion khán giả.',
    detailedSteps: [
      { order: 1, title: 'Phân li chất mạnh', explanation: 'HNO₃ và NaOH tạo H⁺, NO₃⁻, Na⁺, OH⁻.' },
      { order: 2, title: 'Rút gọn', explanation: '$H^++OH^-\\rightarrow H_2O$.' }
    ],
    finalAnswer: 'A', commonMistakes: ['Viết NaNO₃ kết tủa dù muối tan.'], reviewSuggestions: ['Ôn cách loại ion khán giả.']
  },
  {
    id: 'chem11-ns-s094', questionId: 'chem11-ns-q094',
    recognition: 'Dạng phân loại bằng số oxi hóa: có khí không đồng nghĩa phản ứng oxi hóa–khử.',
    detailedSteps: [
      { order: 1, title: 'Kiểm tra số oxi hóa', explanation: 'C trong carbonate và CO₂ đều +4; các nguyên tố khác cũng không đổi.' },
      { order: 2, title: 'Kết luận', explanation: 'Đây là phản ứng acid–carbonate, không phải oxi hóa–khử; B đúng.' }
    ],
    finalAnswer: 'B', commonMistakes: ['Thấy CO₂ rồi tự động kết luận oxi hóa–khử.'], reviewSuggestions: ['Luôn kiểm tra số oxi hóa.']
  },
  {
    id: 'chem11-ns-s095', questionId: 'chem11-ns-q095',
    recognition: 'Dạng tỉ lượng acid–carbonate: đọc hệ số HNO₃ : CaCO₃ = 2 : 1.',
    detailedSteps: [
      { order: 1, title: 'Lập tỉ lệ', explanation: '1 mol CaCO₃ cần 2 mol HNO₃.' },
      { order: 2, title: 'Tính', explanation: '$0{,}10\\times2=0{,}20$ mol HNO₃.' }
    ],
    finalAnswer: 'C', commonMistakes: ['Dùng tỉ lệ 1:1.'], reviewSuggestions: ['Dựa vào hệ số phương trình đã cân bằng.']
  },
  {
    id: 'chem11-ns-s096', questionId: 'chem11-ns-q096',
    recognition: 'Dạng khái quát sản phẩm phản ứng acid: cation của chất phản ứng ghép với nitrate.',
    detailedSteps: [
      { order: 1, title: 'Xác định anion acid', explanation: 'HNO₃ cung cấp anion NO₃⁻ cho muối.' },
      { order: 2, title: 'Xác định cation', explanation: 'Cation của base/oxide/carbonate tạo nitrate tương ứng; sản phẩm phụ tùy loại chất, nên D đúng.' }
    ],
    finalAnswer: 'D', commonMistakes: ['Đổi nitrate thành nitrite.'], reviewSuggestions: ['Tách quy tắc tạo muối và sản phẩm phụ.']
  },
  {
    id: 'chem11-ns-s097', questionId: 'chem11-ns-q097',
    recognition: 'Dạng giải thích tính oxi hóa: xét khả năng giảm số oxi hóa của N(+5).',
    detailedSteps: [
      { order: 1, title: 'Xác định trạng thái ban đầu', explanation: 'N trong HNO₃ có số oxi hóa +5, mức cao.' },
      { order: 2, title: 'Suy ra vai trò', explanation: 'N(+5) có thể nhận electron và giảm số oxi hóa, nên HNO₃ có tính oxi hóa mạnh.' }
    ],
    finalAnswer: 'A', commonMistakes: ['Giải thích bằng việc nitrate không có electron.'], reviewSuggestions: ['Nối số oxi hóa cao với khả năng nhận electron.']
  },
  {
    id: 'chem11-ns-s098', questionId: 'chem11-ns-q098',
    recognition: 'Dạng phương trình Cu với HNO₃ đặc: sản phẩm khí đặc trưng là NO₂.',
    detailedSteps: [
      { order: 1, title: 'Chọn sản phẩm', explanation: 'Cu tạo Cu(NO₃)₂; HNO₃ đặc thường bị khử thành NO₂.' },
      { order: 2, title: 'Kiểm tra cân bằng', explanation: '$Cu+4HNO_3\\rightarrow Cu(NO_3)_2+2NO_2+2H_2O$.' }
    ],
    finalAnswer: 'B', commonMistakes: ['Viết H₂ như phản ứng acid thông thường.'], reviewSuggestions: ['Ghi nhớ cặp Cu–HNO₃ đặc–NO₂.']
  },
  {
    id: 'chem11-ns-s099', questionId: 'chem11-ns-q099',
    recognition: 'Dạng xác định chất oxi hóa: tiểu phân chứa nguyên tố giảm số oxi hóa là chất oxi hóa.',
    detailedSteps: [
      { order: 1, title: 'Theo dõi N', explanation: 'N giảm từ +5 trong nitrate xuống +4 trong NO₂.' },
      { order: 2, title: 'Kết luận', explanation: 'HNO₃ nhận electron và oxi hóa Cu, nên C đúng.' }
    ],
    finalAnswer: 'C', commonMistakes: ['Theo dõi Cu mà quên xác định chất nhận electron.'], reviewSuggestions: ['Phân biệt chất bị oxi hóa và chất oxi hóa.']
  },
  {
    id: 'chem11-ns-s100', questionId: 'chem11-ns-q100',
    recognition: 'Dạng ngoại lệ với quy tắc acid thông thường: HNO₃ có tính oxi hóa mạnh.',
    detailedSteps: [
      { order: 1, title: 'Nhận diện chất oxi hóa', explanation: 'N(+5) trong HNO₃ có thể nhận electron từ kim loại.' },
      { order: 2, title: 'Suy ra sản phẩm khử', explanation: 'Thường tạo sản phẩm chứa nitrogen như NOₓ thay vì H₂; D đúng.' }
    ],
    finalAnswer: 'D', commonMistakes: ['Áp dụng “acid + kim loại → H₂” không xét loại acid.'], reviewSuggestions: ['Nhận dạng acid có tính oxi hóa mạnh trước khi viết sản phẩm.']
  },
  {
    id: 'chem11-ns-s101', questionId: 'chem11-ns-q101',
    recognition: 'Dạng Cu với HNO₃ loãng: sản phẩm khí trong phạm vi bài học là NO.',
    detailedSteps: [
      { order: 1, title: 'Chọn sản phẩm', explanation: 'Cu(NO₃)₂, NO và H₂O.' },
      { order: 2, title: 'Kiểm tra hệ số', explanation: '$3Cu+8HNO_3\\rightarrow3Cu(NO_3)_2+2NO+4H_2O$.' }
    ],
    finalAnswer: 'A', commonMistakes: ['Dùng phương trình acid đặc tạo NO₂.'], reviewSuggestions: ['Phân biệt điều kiện đặc và loãng.']
  },
  {
    id: 'chem11-ns-s102', questionId: 'chem11-ns-q102',
    recognition: 'Dạng phân biệt khí theo nồng độ acid: NO₂ nâu đỏ, NO không màu nhưng dễ hóa nâu.',
    detailedSteps: [
      { order: 1, title: 'Acid đặc', explanation: 'Cu với HNO₃ đặc thường tạo NO₂ màu nâu đỏ.' },
      { order: 2, title: 'Acid loãng', explanation: 'Thường tạo NO không màu; NO bị O₂ oxi hóa thành NO₂ ngoài không khí.' }
    ],
    finalAnswer: 'B', commonMistakes: ['Cho NO vốn có màu nâu đỏ.'], reviewSuggestions: ['Gắn công thức khí với màu và điều kiện.']
  },
  {
    id: 'chem11-ns-s103', questionId: 'chem11-ns-q103',
    recognition: 'Dạng sửa quy tắc tuyệt đối: sản phẩm khử của nitrate phụ thuộc điều kiện.',
    detailedSteps: [
      { order: 1, title: 'So sánh ví dụ', explanation: 'Cu với acid đặc cho NO₂, với acid loãng cho NO trong phạm vi đang học.' },
      { order: 2, title: 'Khái quát', explanation: 'Nồng độ, chất khử và điều kiện ảnh hưởng sản phẩm; C đúng.' }
    ],
    finalAnswer: 'C', commonMistakes: ['Học thuộc một sản phẩm NO₂ cho mọi phản ứng.'], reviewSuggestions: ['Luôn đọc nồng độ acid trong đề.']
  },
  {
    id: 'chem11-ns-s104', questionId: 'chem11-ns-q104',
    recognition: 'Dạng tính electron từ độ giảm số oxi hóa: lấy hiệu +5 và +2.',
    detailedSteps: [
      { order: 1, title: 'Tính độ giảm', explanation: '$5-2=3$ đơn vị số oxi hóa.' },
      { order: 2, title: 'Đổi sang electron', explanation: 'Mỗi N nhận 3 electron, nên chọn D.' }
    ],
    finalAnswer: 'D', commonMistakes: ['Lấy số oxi hóa sau cùng +2 làm số electron.'], reviewSuggestions: ['Electron trao đổi bằng độ biến thiên số oxi hóa.']
  },
  {
    id: 'chem11-ns-s105', questionId: 'chem11-ns-q105',
    recognition: 'Dạng ứng dụng HNO₃: tìm quá trình dùng acid làm nguyên liệu hóa học.',
    detailedSteps: [
      { order: 1, title: 'Xác định lĩnh vực', explanation: 'Nitric acid là nguyên liệu sản xuất nitrate và nhiều hóa chất.' },
      { order: 2, title: 'Loại phương án', explanation: 'HNO₃ không phải khí trơ, nước uống hay chất khử phổ dụng.' }
    ],
    finalAnswer: 'A', commonMistakes: ['Nhầm ứng dụng HNO₃ với N₂.'], reviewSuggestions: ['Lập bảng ứng dụng các hợp chất nitrogen.']
  },
  {
    id: 'chem11-ns-s106', questionId: 'chem11-ns-q106',
    recognition: 'Dạng an toàn pha loãng acid: luôn nhận diện quá trình tỏa nhiệt.',
    detailedSteps: [
      { order: 1, title: 'Xét nguy cơ', explanation: 'Pha loãng acid đậm đặc tỏa nhiệt; rót nước vào acid dễ gây sôi cục bộ và bắn tóe.' },
      { order: 2, title: 'Chọn thao tác', explanation: 'Thêm acid từ từ vào nước, khuấy và làm mát theo hướng dẫn; B đúng.' }
    ],
    finalAnswer: 'B', commonMistakes: ['Nhớ ngược thứ tự acid–nước.'], reviewSuggestions: ['Ghi nhớ: thêm acid vào nước, không làm ngược.']
  },
  {
    id: 'chem11-ns-s107', questionId: 'chem11-ns-q107',
    recognition: 'Dạng sự cố phòng thí nghiệm: học sinh không tự xử lí acid oxi hóa mạnh.',
    detailedSteps: [
      { order: 1, title: 'Cô lập bản thân', explanation: 'Lùi khỏi vùng tràn và cảnh báo người xung quanh.' },
      { order: 2, title: 'Báo người phụ trách', explanation: 'Giáo viên/người được đào tạo xử lí theo quy trình và bộ dụng cụ phù hợp; C đúng.' }
    ],
    finalAnswer: 'C', commonMistakes: ['Tự chọn chất trung hòa hoặc dung môi khi chưa được hướng dẫn.'], reviewSuggestions: ['Ưu tiên quy trình ứng phó chính thức.']
  },
  {
    id: 'chem11-ns-s108', questionId: 'chem11-ns-q108',
    recognition: 'Dạng phân loại ba tình huống: xác định bản chất riêng trước khi ghép.',
    detailedSteps: [
      { order: 1, title: 'Phân loại I và II', explanation: 'HNO₃ + NaOH là acid–base; HNO₃ đặc + Cu là oxi hóa–khử.' },
      { order: 2, title: 'Đánh giá III', explanation: 'Pha loãng cần thêm acid vào nước theo quy trình; D đúng đầy đủ.' }
    ],
    finalAnswer: 'D', commonMistakes: ['Gọi mọi tình huống HNO₃ là oxi hóa–khử.'], reviewSuggestions: ['Tách tính acid, tính oxi hóa và an toàn thao tác.']
  },
  {
    id: 'chem11-ns-s109', questionId: 'chem11-ns-q109',
    recognition: 'Dạng định nghĩa phú dưỡng: từ khóa là dư thừa dưỡng chất N và P.',
    detailedSteps: [
      { order: 1, title: 'Xác định chất giới hạn sinh trưởng', explanation: 'Nitrogen và phosphorus là dưỡng chất quan trọng cho tảo, thực vật phù du.' },
      { order: 2, title: 'Kết luận', explanation: 'Khi vào thủy vực quá nhiều, chúng khởi phát phú dưỡng; A đúng.' }
    ],
    finalAnswer: 'A', commonMistakes: ['Cho oxygen tinh khiết là nguyên nhân dinh dưỡng.'], reviewSuggestions: ['Ghi nhớ hai nhóm dưỡng chất N–P.']
  },
  {
    id: 'chem11-ns-s110', questionId: 'chem11-ns-q110',
    recognition: 'Dạng nhận diện nguồn dưỡng chất: tìm nguồn đưa nitrate/phosphate vào nước.',
    detailedSteps: [
      { order: 1, title: 'Xét nguồn nông nghiệp', explanation: 'Dòng chảy có thể cuốn phân bón chứa N, P vào hồ.' },
      { order: 2, title: 'Xét nguồn đô thị', explanation: 'Nước thải chưa xử lí cũng mang dưỡng chất; B đúng.' }
    ],
    finalAnswer: 'B', commonMistakes: ['Chọn ánh sáng là nguồn nitrate/phosphate.'], reviewSuggestions: ['Phân loại nguồn điểm và nguồn phân tán.']
  },
  {
    id: 'chem11-ns-s111', questionId: 'chem11-ns-q111',
    recognition: 'Dạng phân biệt hai hiện tượng môi trường: một bên là dưỡng chất, một bên là acid.',
    detailedSteps: [
      { order: 1, title: 'Định nghĩa phú dưỡng', explanation: 'Dư thừa N, P làm năng suất sinh học/tảo tăng quá mức.' },
      { order: 2, title: 'Định nghĩa mưa acid', explanation: 'Acid hình thành trong khí quyển làm pH mưa giảm; C phân biệt đúng.' }
    ],
    finalAnswer: 'C', commonMistakes: ['Gộp mọi ô nhiễm nước thành mưa acid.'], reviewSuggestions: ['So sánh nguyên nhân và chỉ dấu của từng hiện tượng.']
  },
  {
    id: 'chem11-ns-s112', questionId: 'chem11-ns-q112',
    recognition: 'Dạng giai đoạn đầu phú dưỡng: dư dưỡng chất kích thích tảo tăng trước khi hệ quả thiếu oxygen rõ rệt.',
    detailedSteps: [
      { order: 1, title: 'Xác định phản ứng sinh học đầu tiên', explanation: 'Tảo và thực vật phù du sử dụng dưỡng chất để tăng sinh khối.' },
      { order: 2, title: 'Chọn hiện tượng', explanation: 'Tảo phát triển mạnh là dấu hiệu phù hợp giai đoạn đầu; D đúng.' }
    ],
    finalAnswer: 'D', commonMistakes: ['Đặt cá chết trước khi tảo tăng.'], reviewSuggestions: ['Học phú dưỡng theo trình tự thời gian.']
  },
  {
    id: 'chem11-ns-s113', questionId: 'chem11-ns-q113',
    recognition: 'Dạng sắp xếp chuỗi hệ quả: dưỡng chất → sinh khối → phân hủy → oxygen giảm.',
    detailedSteps: [
      { order: 1, title: 'Từ dưỡng chất đến tảo', explanation: 'N, P dư thừa thúc đẩy tảo phát triển.' },
      { order: 2, title: 'Từ tảo đến thiếu oxygen', explanation: 'Sinh khối chết bị phân hủy, quá trình này tiêu thụ oxygen; A đúng.' }
    ],
    finalAnswer: 'A', commonMistakes: ['Cho oxygen tăng vĩnh viễn vì tảo quang hợp.'], reviewSuggestions: ['Vẽ chuỗi nguyên nhân–hệ quả.']
  },
  {
    id: 'chem11-ns-s114', questionId: 'chem11-ns-q114',
    recognition: 'Dạng cơ chế DO giảm: từ khóa là phân hủy sinh khối.',
    detailedSteps: [
      { order: 1, title: 'Xác định tác nhân', explanation: 'Vi sinh vật phân hủy tảo chết.' },
      { order: 2, title: 'Theo dõi oxygen', explanation: 'Hô hấp/phân hủy tiêu thụ oxygen hòa tan, nên B đúng.' }
    ],
    finalAnswer: 'B', commonMistakes: ['Cho nitrate tự hấp thụ toàn bộ oxygen bằng phản ứng trực tiếp đơn giản.'], reviewSuggestions: ['Liên hệ hóa học với quá trình sinh học.']
  },
  {
    id: 'chem11-ns-s115', questionId: 'chem11-ns-q115',
    recognition: 'Dạng hệ quả trực tiếp với cá: kiểm tra oxygen hòa tan.',
    detailedSteps: [
      { order: 1, title: 'Theo dõi sau tảo suy tàn', explanation: 'Phân hủy lượng lớn sinh khối làm nhu cầu oxygen tăng.' },
      { order: 2, title: 'Suy ra với cá', explanation: 'Oxygen hòa tan thấp gây ngạt và chết; C đúng.' }
    ],
    finalAnswer: 'C', commonMistakes: ['Cho hồ trở thành HNO₃ đậm đặc.'], reviewSuggestions: ['Gắn cá chết sau tảo suy tàn với thiếu DO.']
  },
  {
    id: 'chem11-ns-s116', questionId: 'chem11-ns-q116',
    recognition: 'Dạng biến thiên ngày–đêm: ban đêm không quang hợp nhưng hô hấp vẫn tiếp tục.',
    detailedSteps: [
      { order: 1, title: 'Ban ngày', explanation: 'Quang hợp có thể làm oxygen tăng tạm thời.' },
      { order: 2, title: 'Ban đêm', explanation: 'Quang hợp dừng, còn hô hấp và phân hủy tiêu thụ oxygen nên DO thấp gần sáng; D đúng.' }
    ],
    finalAnswer: 'D', commonMistakes: ['Dùng giá trị ban ngày để kết luận oxygen luôn cao.'], reviewSuggestions: ['Đọc dữ liệu theo chu kì thời gian.']
  },
  {
    id: 'chem11-ns-s117', questionId: 'chem11-ns-q117',
    recognition: 'Dạng so sánh hồ từ nhiều chỉ dấu: dưỡng chất cao, chlorophyll cao và DO đáy thấp cùng chỉ về phú dưỡng.',
    detailedSteps: [
      { order: 1, title: 'Đánh giá hồ X', explanation: 'Nitrate/phosphate và chlorophyll cao cho thấy nhiều dưỡng chất và sinh khối tảo.' },
      { order: 2, title: 'Kiểm tra DO', explanation: 'DO đáy thấp củng cố dấu hiệu phân hủy mạnh; hồ X nguy cơ cao hơn.' }
    ],
    finalAnswer: 'A', commonMistakes: ['Chỉ nhìn một chỉ số riêng lẻ.'], reviewSuggestions: ['Đọc đồng thời dưỡng chất, chlorophyll và DO.']
  },
  {
    id: 'chem11-ns-s118', questionId: 'chem11-ns-q118',
    recognition: 'Dạng giải pháp nguyên nhân gốc: giảm N, P trước khi chúng vào thủy vực.',
    detailedSteps: [
      { order: 1, title: 'Xác định nguồn', explanation: 'Nước thải và dòng chảy phân bón mang dưỡng chất vào hồ.' },
      { order: 2, title: 'Chọn gói kiểm soát', explanation: 'Xử lí nước thải, bón hợp lí và vùng đệm cùng giảm đầu vào N, P; B đúng.' }
    ],
    finalAnswer: 'B', commonMistakes: ['Chỉ xử lí cá chết sau sự cố.'], reviewSuggestions: ['Ưu tiên giảm tải dưỡng chất vào lưu vực.']
  },
  {
    id: 'chem11-ns-s119', questionId: 'chem11-ns-q119',
    recognition: 'Dạng giới hạn biện pháp: sục khí xử lí DO nhưng không loại nguồn dưỡng chất.',
    detailedSteps: [
      { order: 1, title: 'Lợi ích ngắn hạn', explanation: 'Sục khí có thể tăng oxygen hòa tan tạm thời.' },
      { order: 2, title: 'Giới hạn', explanation: 'Nitrate/phosphate và nguồn thải vẫn còn, nên cần kiểm soát dưỡng chất; C đúng.' }
    ],
    finalAnswer: 'C', commonMistakes: ['Cho tăng DO đồng nghĩa loại hết N, P.'], reviewSuggestions: ['Phân biệt xử lí triệu chứng và xử lí nguyên nhân.']
  },
  {
    id: 'chem11-ns-s120', questionId: 'chem11-ns-q120',
    recognition: 'Dạng chuỗi dữ liệu theo thời gian: nitrate tăng trước, tảo tăng sau, oxygen giảm cuối.',
    detailedSteps: [
      { order: 1, title: 'Xếp chuỗi dữ liệu', explanation: 'Mưa cuốn dưỡng chất vào hồ; tảo phản ứng bằng tăng sinh khối.' },
      { order: 2, title: 'Giải thích DO và biện pháp', explanation: 'Hô hấp/phân hủy làm DO giảm; cần kiểm soát nguồn nitrate, nên D đầy đủ nhất.' }
    ],
    finalAnswer: 'D', commonMistakes: ['Chỉ sục khí mà không điều tra nguồn dưỡng chất.'], reviewSuggestions: ['Dùng thứ tự thời gian để kiểm tra quan hệ nguyên nhân.']
  },
  {
    id: 'chem11-ns-s121', questionId: 'chem11-ns-q121',
    recognition: 'Dạng trạng thái tự nhiên: kiểm tra cả sulfur tự do và sulfur liên kết.',
    detailedSteps: [
      { order: 1, title: 'Xét dạng tự do', explanation: 'Có thể gặp sulfur đơn chất, đặc biệt gần một số vùng núi lửa.' },
      { order: 2, title: 'Xét dạng hợp chất', explanation: 'Sulfur còn có trong sulfide, sulfate; vì vậy A bao quát đúng.' }
    ],
    finalAnswer: 'A', commonMistakes: ['Chỉ nhớ mẫu sulfur màu vàng.'], reviewSuggestions: ['Lập bảng sulfur tự do và sulfur liên kết.']
  },
  {
    id: 'chem11-ns-s122', questionId: 'chem11-ns-q122',
    recognition: 'Dạng nhận diện khoáng chứa sulfur: tìm kí hiệu S trong công thức.',
    detailedSteps: [
      { order: 1, title: 'Đọc công thức', explanation: 'FeS₂ chứa sulfide; CaSO₄·2H₂O chứa sulfate.' },
      { order: 2, title: 'Loại phương án', explanation: 'Các nhóm còn lại không đồng thời chứa sulfur; chọn B.' }
    ],
    finalAnswer: 'B', commonMistakes: ['Nhìn tên khoáng mà không đọc công thức.'], reviewSuggestions: ['Ôn kí hiệu sulfide và sulfate.']
  },
  {
    id: 'chem11-ns-s123', questionId: 'chem11-ns-q123',
    recognition: 'Dạng phát hiện ngộ nhận “chỉ có sulfur tự do”.',
    detailedSteps: [
      { order: 1, title: 'Đối chiếu tự nhiên', explanation: 'Sulfur có cả dạng tự do và dạng hợp chất.' },
      { order: 2, title: 'Chọn phát biểu sai', explanation: 'Từ “chỉ” làm C sai tuyệt đối.' }
    ],
    finalAnswer: 'C', commonMistakes: ['Đồng nhất mẫu vật phòng học với mọi dạng tự nhiên.'], reviewSuggestions: ['Chú ý các từ tuyệt đối như “chỉ”, “luôn”.']
  },
  {
    id: 'chem11-ns-s124', questionId: 'chem11-ns-q124',
    recognition: 'Dạng sơ đồ phân loại: S₈ là đơn chất; FeS₂ và sulfate là hợp chất.',
    detailedSteps: [
      { order: 1, title: 'Phân loại S₈', explanation: 'S₈ chỉ gồm nguyên tố sulfur nên là dạng tự do.' },
      { order: 2, title: 'Phân loại khoáng', explanation: 'FeS₂ và CaSO₄·2H₂O chứa sulfur liên kết với nguyên tố khác; D đúng.' }
    ],
    finalAnswer: 'D', commonMistakes: ['Coi mọi chất rắn chứa sulfur là sulfur tự do.'], reviewSuggestions: ['Dùng thành phần nguyên tố để phân loại.']
  },
  {
    id: 'chem11-ns-s125', questionId: 'chem11-ns-q125',
    recognition: 'Dạng so sánh thù hình: tìm điểm cùng thành phần nhưng khác tinh thể.',
    detailedSteps: [
      { order: 1, title: 'Xác định bản chất', explanation: 'Hai dạng đều thuộc cùng nguyên tố sulfur.' },
      { order: 2, title: 'Chọn điểm giống', explanation: 'Trong phạm vi bài học, cả hai thường gồm phân tử S₈; A đúng.' }
    ],
    finalAnswer: 'A', commonMistakes: ['Coi thù hình là nguyên tố khác nhau.'], reviewSuggestions: ['Phân biệt “thành phần” và “cấu trúc tinh thể”.']
  },
  {
    id: 'chem11-ns-s126', questionId: 'chem11-ns-q126',
    recognition: 'Dạng dấu hiệu phân biệt sulfur tà phương–đơn tà.',
    detailedSteps: [
      { order: 1, title: 'Loại khác nguyên tố', explanation: 'Cả hai có cùng số proton và cùng nguyên tố sulfur.' },
      { order: 2, title: 'Nêu khác biệt', explanation: 'Khác cách sắp xếp tinh thể và miền nhiệt độ bền; B đúng.' }
    ],
    finalAnswer: 'B', commonMistakes: ['Gán sự khác nhau cho số proton.'], reviewSuggestions: ['Ôn định nghĩa thù hình.']
  },
  {
    id: 'chem11-ns-s127', questionId: 'chem11-ns-q127',
    recognition: 'Dạng tính chất vật lí cơ bản của sulfur.',
    detailedSteps: [
      { order: 1, title: 'Nhớ trạng thái–màu', explanation: 'Sulfur là chất rắn màu vàng ở điều kiện thường.' },
      { order: 2, title: 'Kiểm tra độ tan', explanation: 'Sulfur hầu như không tan trong nước; C đầy đủ.' }
    ],
    finalAnswer: 'C', commonMistakes: ['Cho sulfur tan tốt trong nước.'], reviewSuggestions: ['Ghi nhớ bộ ba: rắn – vàng – ít tan.']
  },
  {
    id: 'chem11-ns-s128', questionId: 'chem11-ns-q128',
    recognition: 'Dạng đọc miền bền từ bảng nhiệt độ.',
    detailedSteps: [
      { order: 1, title: 'Định vị nhiệt độ', explanation: '25 °C nhỏ hơn 95,5 °C.' },
      { order: 2, title: 'Đối chiếu bảng', explanation: 'Miền dưới 95,5 °C thuộc sulfur tà phương; D đúng.' }
    ],
    finalAnswer: 'D', commonMistakes: ['Chọn dạng có tên xuất hiện sau trong bảng.'], reviewSuggestions: ['Đánh dấu nhiệt độ trên trục trước khi kết luận.']
  },
  {
    id: 'chem11-ns-s129', questionId: 'chem11-ns-q129',
    recognition: 'Dạng ghép nguyên liệu với ứng dụng công nghiệp lớn.',
    detailedSteps: [
      { order: 1, title: 'Nhận diện chuỗi công nghiệp', explanation: 'Sulfur được đốt tạo SO₂, rồi chuyển hóa trong quy trình sản xuất H₂SO₄.' },
      { order: 2, title: 'Chọn ứng dụng', explanation: 'Sản xuất sulfuric acid là ứng dụng tiêu thụ lượng sulfur lớn; A đúng.' }
    ],
    finalAnswer: 'A', commonMistakes: ['Chọn ứng dụng không liên quan tính chất sulfur.'], reviewSuggestions: ['Ghi chuỗi S → SO₂ → SO₃ → H₂SO₄.']
  },
  {
    id: 'chem11-ns-s130', questionId: 'chem11-ns-q130',
    recognition: 'Dạng ứng dụng vật liệu: từ khóa là lưu hóa cao su.',
    detailedSteps: [
      { order: 1, title: 'Nhận cơ chế cấu trúc', explanation: 'Sulfur góp phần tạo liên kết ngang giữa các mạch polymer.' },
      { order: 2, title: 'Suy ra tính chất', explanation: 'Liên kết ngang cải thiện độ bền và đàn hồi; B đúng.' }
    ],
    finalAnswer: 'B', commonMistakes: ['Cho lưu hóa là hòa tan cao su.'], reviewSuggestions: ['Liên hệ cấu trúc mạng với tính cơ học.']
  },
  {
    id: 'chem11-ns-s131', questionId: 'chem11-ns-q131',
    recognition: 'Dạng đánh giá an toàn: đốt sulfur sinh SO₂.',
    detailedSteps: [
      { order: 1, title: 'Xác định sản phẩm', explanation: 'Sulfur cháy trong oxygen tạo SO₂.' },
      { order: 2, title: 'Đánh giá rủi ro', explanation: 'SO₂ độc và kích ứng nên không được sử dụng tùy ý; C đúng.' }
    ],
    finalAnswer: 'C', commonMistakes: ['Đồng nhất “tự nhiên” với “an toàn”.'], reviewSuggestions: ['Luôn xét sản phẩm khi đốt hóa chất.']
  },
  {
    id: 'chem11-ns-s132', questionId: 'chem11-ns-q132',
    recognition: 'Dạng an toàn kho chứa: sulfur cháy được và bụi cần được kiểm soát.',
    detailedSteps: [
      { order: 1, title: 'Nhận diện nguy cơ', explanation: 'Nguồn nhiệt và bụi phân tán làm tăng nguy cơ cháy.' },
      { order: 2, title: 'Chọn kiểm soát', explanation: 'Tránh lửa, hạn chế bụi, thông gió và theo hướng dẫn là gói đầy đủ; D đúng.' }
    ],
    finalAnswer: 'D', commonMistakes: ['Chỉ chú ý sulfur không tan mà bỏ qua nguy cơ cháy.'], reviewSuggestions: ['Phân loại rủi ro cháy, bụi và phát thải khí.']
  },
  {
    id: 'chem11-ns-s133', questionId: 'chem11-ns-q133',
    recognition: 'Dạng sulfur với kim loại: sản phẩm sulfide có S = −2.',
    detailedSteps: [
      { order: 1, title: 'Theo dõi số oxi hóa', explanation: 'S chuyển từ 0 trong đơn chất xuống −2 trong FeS.' },
      { order: 2, title: 'Kết luận vai trò', explanation: 'S nhận electron nên là chất oxi hóa; A đúng.' }
    ],
    finalAnswer: 'A', commonMistakes: ['Nhầm chất nhận electron là chất khử.'], reviewSuggestions: ['Dùng quy tắc: nhận electron → oxi hóa đối tác.']
  },
  {
    id: 'chem11-ns-s134', questionId: 'chem11-ns-q134',
    recognition: 'Dạng sulfur với hydrogen: S⁰ tạo H₂S có S⁻².',
    detailedSteps: [
      { order: 1, title: 'Xác định biến đổi', explanation: 'Sulfur giảm từ 0 xuống −2.' },
      { order: 2, title: 'Gọi tên vai trò', explanation: 'Chất bị khử là chất oxi hóa; B đúng.' }
    ],
    finalAnswer: 'B', commonMistakes: ['Dựa vào tên sulfur thay vì số oxi hóa.'], reviewSuggestions: ['Viết số oxi hóa trên từng chất.']
  },
  {
    id: 'chem11-ns-s135', questionId: 'chem11-ns-q135',
    recognition: 'Dạng tổng electron: mỗi sulfur từ 0 xuống −2 nhận 2 electron.',
    detailedSteps: [
      { order: 1, title: 'Electron mỗi S', explanation: 'Một S nhận 2 electron.' },
      { order: 2, title: 'Nhân hệ số', explanation: 'Ba S nhận 3 × 2 = 6 electron; C đúng.' }
    ],
    finalAnswer: 'C', commonMistakes: ['Không nhân với hệ số 3.'], reviewSuggestions: ['Tách biến đổi mỗi nguyên tử rồi nhân hệ số.']
  },
  {
    id: 'chem11-ns-s136', questionId: 'chem11-ns-q136',
    recognition: 'Dạng thí nghiệm Fe–S: dùng sản phẩm FeS để suy vai trò.',
    detailedSteps: [
      { order: 1, title: 'Xét sản phẩm', explanation: 'Trong FeS, Fe là +2 và S là −2.' },
      { order: 2, title: 'Theo dõi electron', explanation: 'S⁰ nhận electron từ Fe⁰ nên sulfur là chất oxi hóa; D đúng.' }
    ],
    finalAnswer: 'D', commonMistakes: ['Kết luận từ hiện tượng nung nóng mà không xét số oxi hóa.'], reviewSuggestions: ['Hiện tượng chỉ hỗ trợ; số oxi hóa mới quyết định vai trò.']
  },
  {
    id: 'chem11-ns-s137', questionId: 'chem11-ns-q137',
    recognition: 'Dạng sulfur cháy: S⁰ tạo SO₂ có S⁺⁴.',
    detailedSteps: [
      { order: 1, title: 'Theo dõi sulfur', explanation: 'S tăng số oxi hóa từ 0 lên +4.' },
      { order: 2, title: 'Kết luận', explanation: 'S nhường electron nên là chất khử; A đúng.' }
    ],
    finalAnswer: 'A', commonMistakes: ['Gọi oxygen là chất khử.'], reviewSuggestions: ['Tăng số oxi hóa → bị oxi hóa → chất khử.']
  },
  {
    id: 'chem11-ns-s138', questionId: 'chem11-ns-q138',
    recognition: 'Dạng viết bán quá trình oxi hóa của sulfur.',
    detailedSteps: [
      { order: 1, title: 'Tính độ tăng', explanation: 'Từ 0 lên +4 là tăng 4 đơn vị.' },
      { order: 2, title: 'Đặt electron', explanation: 'Quá trình oxi hóa nhường electron: S⁰ → S⁺⁴ + 4e; B đúng.' }
    ],
    finalAnswer: 'B', commonMistakes: ['Đặt electron ở vế trái khi số oxi hóa tăng.'], reviewSuggestions: ['Nhường electron viết ở vế sản phẩm.']
  },
  {
    id: 'chem11-ns-s139', questionId: 'chem11-ns-q139',
    recognition: 'Dạng chuyển hiện tượng thí nghiệm về phương trình S + O₂.',
    detailedSteps: [
      { order: 1, title: 'Nhận diện sản phẩm', explanation: 'Khí mùi hắc là SO₂ trong bối cảnh đốt sulfur.' },
      { order: 2, title: 'Xét vai trò', explanation: 'S tăng 0 → +4 nên là chất khử; C đúng.' }
    ],
    finalAnswer: 'C', commonMistakes: ['Dùng màu ngọn lửa để gọi vai trò redox.'], reviewSuggestions: ['Từ hiện tượng, viết phương trình rồi xét số oxi hóa.']
  },
  {
    id: 'chem11-ns-s140', questionId: 'chem11-ns-q140',
    recognition: 'Dạng chọn bằng chứng quyết định: biến đổi số oxi hóa.',
    detailedSteps: [
      { order: 1, title: 'Loại dấu hiệu phụ', explanation: 'Màu, phát sáng và trạng thái oxygen không định nghĩa chất khử.' },
      { order: 2, title: 'Chọn dấu hiệu redox', explanation: 'S tăng 0 → +4, tức nhường electron; D đúng.' }
    ],
    finalAnswer: 'D', commonMistakes: ['Dùng hiện tượng thay cho tiêu chí electron.'], reviewSuggestions: ['Ưu tiên số oxi hóa khi đề hỏi vai trò.']
  },
  {
    id: 'chem11-ns-s141', questionId: 'chem11-ns-q141',
    recognition: 'Dạng tìm hai phản ứng cho sulfur giảm và tăng số oxi hóa.',
    detailedSteps: [
      { order: 1, title: 'Phản ứng với Fe', explanation: 'S⁰ → S⁻² nên sulfur là chất oxi hóa.' },
      { order: 2, title: 'Phản ứng với O₂', explanation: 'S⁰ → S⁺⁴ nên sulfur là chất khử; cặp A chứng minh hai mặt.' }
    ],
    finalAnswer: 'A', commonMistakes: ['Chọn hai phản ứng cùng cho sulfide.'], reviewSuggestions: ['Tìm một mũi tên đi xuống và một mũi tên đi lên.']
  },
  {
    id: 'chem11-ns-s142', questionId: 'chem11-ns-q142',
    recognition: 'Dạng giải thích bản chất hai mặt của S⁰.',
    detailedSteps: [
      { order: 1, title: 'Xét vị trí số oxi hóa', explanation: 'Số oxi hóa 0 nằm giữa −2 và các số dương phổ biến.' },
      { order: 2, title: 'Suy ra khả năng', explanation: 'S có thể nhận hoặc nhường electron tùy đối tác; B đúng.' }
    ],
    finalAnswer: 'B', commonMistakes: ['Ghi nhớ vai trò theo một phản ứng duy nhất.'], reviewSuggestions: ['Dùng trục số oxi hóa −2 ← 0 → +4/+6.']
  },
  {
    id: 'chem11-ns-s143', questionId: 'chem11-ns-q143',
    recognition: 'Dạng bảng biến đổi: giảm số oxi hóa là nhận electron.',
    detailedSteps: [
      { order: 1, title: 'Phân tích I', explanation: '0 → −2: sulfur bị khử và là chất oxi hóa.' },
      { order: 2, title: 'Phân tích II', explanation: '0 → +4: sulfur bị oxi hóa và là chất khử; C đúng.' }
    ],
    finalAnswer: 'C', commonMistakes: ['Đồng nhất “bị oxi hóa” với “chất oxi hóa”.'], reviewSuggestions: ['Tách thuật ngữ quá trình và vai trò.']
  },
  {
    id: 'chem11-ns-s144', questionId: 'chem11-ns-q144',
    recognition: 'Dạng sửa lập luận sai: không gọi vai trò từ việc chất có mặt trong phản ứng.',
    detailedSteps: [
      { order: 1, title: 'Bác tiêu chí sai', explanation: 'Mọi chất phản ứng đều tham gia nhưng không vì thế đều là chất khử.' },
      { order: 2, title: 'Dùng số oxi hóa', explanation: 'S⁰ → S⁻² là nhận electron, nên sulfur là chất oxi hóa; D đúng.' }
    ],
    finalAnswer: 'D', commonMistakes: ['Gọi vai trò theo tên chất phản ứng.'], reviewSuggestions: ['Luôn viết biến đổi số oxi hóa trước kết luận.']
  },
  {
    id: 'chem11-ns-s145', questionId: 'chem11-ns-q145',
    recognition: 'Dạng tính số oxi hóa trong phân tử trung hòa.',
    detailedSteps: [
      { order: 1, title: 'Đặt số oxi hóa oxygen', explanation: 'Mỗi O thường là −2, hai O tổng −4.' },
      { order: 2, title: 'Bảo toàn tổng', explanation: 'Phân tử trung hòa nên S phải là +4; A đúng.' }
    ],
    finalAnswer: 'A', commonMistakes: ['Lấy chỉ số 2 làm số oxi hóa của sulfur.'], reviewSuggestions: ['Dùng tổng số oxi hóa bằng điện tích phân tử.']
  },
  {
    id: 'chem11-ns-s146', questionId: 'chem11-ns-q146',
    recognition: 'Dạng bộ tính chất vật lí–an toàn của SO₂.',
    detailedSteps: [
      { order: 1, title: 'Nhớ đặc điểm', explanation: 'SO₂ là khí không màu, mùi hắc và tan trong nước.' },
      { order: 2, title: 'Thêm cảnh báo', explanation: 'SO₂ độc, kích ứng; B là mô tả đầy đủ.' }
    ],
    finalAnswer: 'B', commonMistakes: ['Cho khí không màu đồng nghĩa không độc.'], reviewSuggestions: ['Gắn tính chất vật lí với cảnh báo hô hấp.']
  },
  {
    id: 'chem11-ns-s147', questionId: 'chem11-ns-q147',
    recognition: 'Dạng an toàn rò rỉ khí: tuyệt đối không ngửi trực tiếp.',
    detailedSteps: [
      { order: 1, title: 'Nhận diện nguy cơ', explanation: 'SO₂ gây kích ứng và độc khi hít phải.' },
      { order: 2, title: 'Chọn thao tác cấm', explanation: 'Ghé mũi ngửi làm tăng phơi nhiễm; C đúng.' }
    ],
    finalAnswer: 'C', commonMistakes: ['Dùng mùi để nhận biết khí độc.'], reviewSuggestions: ['Ưu tiên báo động, cách ly và quy trình bảo hộ.']
  },
  {
    id: 'chem11-ns-s148', questionId: 'chem11-ns-q148',
    recognition: 'Dạng nhận dạng khí từ tổ hợp dấu hiệu và số oxi hóa.',
    detailedSteps: [
      { order: 1, title: 'Dùng số oxi hóa', explanation: 'Sulfur +4 phù hợp SO₂.' },
      { order: 2, title: 'Kiểm tra tính chất', explanation: 'Khí không màu, mùi hắc, kích ứng cũng khớp SO₂; D đúng.' }
    ],
    finalAnswer: 'D', commonMistakes: ['Chỉ dựa vào một dấu hiệu mùi.'], reviewSuggestions: ['Kết hợp công thức, số oxi hóa và tính chất.']
  },
  {
    id: 'chem11-ns-s149', questionId: 'chem11-ns-q149',
    recognition: 'Dạng SO₂ với nước: acidic oxide tạo sulfurous acid theo cân bằng.',
    detailedSteps: [
      { order: 1, title: 'Xác định acid tương ứng', explanation: 'SO₂ tương ứng với H₂SO₃ trong phạm vi biểu diễn bài học.' },
      { order: 2, title: 'Viết cân bằng', explanation: 'SO₂ + H₂O ⇌ H₂SO₃; A đúng.' }
    ],
    finalAnswer: 'A', commonMistakes: ['Viết trực tiếp H₂SO₄ trong mọi điều kiện.'], reviewSuggestions: ['Phân biệt hòa tan với bước oxi hóa tiếp theo.']
  },
  {
    id: 'chem11-ns-s150', questionId: 'chem11-ns-q150',
    recognition: 'Dạng acidic oxide với basic oxide.',
    detailedSteps: [
      { order: 1, title: 'Phân loại chất', explanation: 'SO₂ là acidic oxide, CaO là basic oxide.' },
      { order: 2, title: 'Ghép sản phẩm', explanation: 'Hai oxide tạo muối CaSO₃; B đúng.' }
    ],
    finalAnswer: 'B', commonMistakes: ['Cho phản ứng tạo hydrogen.'], reviewSuggestions: ['Acidic oxide + basic oxide → muối.']
  },
  {
    id: 'chem11-ns-s151', questionId: 'chem11-ns-q151',
    recognition: 'Dạng SO₂ vừa đủ với calcium hydroxide.',
    detailedSteps: [
      { order: 1, title: 'Xác định muối', explanation: 'Mức trung hòa phù hợp tạo calcium sulfite.' },
      { order: 2, title: 'Cân bằng', explanation: 'SO₂ + Ca(OH)₂ → CaSO₃ + H₂O; C đúng.' }
    ],
    finalAnswer: 'C', commonMistakes: ['Tự đổi sulfite thành sulfate mà không có chất oxi hóa.'], reviewSuggestions: ['Theo dõi số oxi hóa sulfur vẫn là +4.']
  },
  {
    id: 'chem11-ns-s152', questionId: 'chem11-ns-q152',
    recognition: 'Dạng chọn bằng chứng phân loại oxide.',
    detailedSteps: [
      { order: 1, title: 'Tiêu chí acidic oxide', explanation: 'Acidic oxide phản ứng với base tạo muối.' },
      { order: 2, title: 'Đối chiếu thí nghiệm', explanation: 'Tạo sulfite với base bác bỏ oxide trung tính; D đúng.' }
    ],
    finalAnswer: 'D', commonMistakes: ['Dùng trạng thái khí để phân loại oxide.'], reviewSuggestions: ['Phân loại oxide theo phản ứng hóa học.']
  },
  {
    id: 'chem11-ns-s153', questionId: 'chem11-ns-q153',
    recognition: 'Dạng tỉ lệ SO₂ : NaOH = 1 : 1, trung hòa một nấc.',
    detailedSteps: [
      { order: 1, title: 'Tính tỉ lệ base', explanation: 'Mỗi mol SO₂ chỉ nhận một mol NaOH.' },
      { order: 2, title: 'Chọn muối acid', explanation: 'SO₂ + NaOH → NaHSO₃; A đúng.' }
    ],
    finalAnswer: 'A', commonMistakes: ['Mặc định luôn tạo Na₂SO₃.'], reviewSuggestions: ['Ghi hai mốc tỉ lệ 1:1 và 1:2.']
  },
  {
    id: 'chem11-ns-s154', questionId: 'chem11-ns-q154',
    recognition: 'Dạng tỉ lệ SO₂ : NaOH = 1 : 2, trung hòa hoàn toàn.',
    detailedSteps: [
      { order: 1, title: 'Xác định sản phẩm', explanation: 'Hai mol NaOH cho mỗi mol SO₂ tạo muối trung hòa Na₂SO₃.' },
      { order: 2, title: 'Cân bằng', explanation: 'SO₂ + 2NaOH → Na₂SO₃ + H₂O; B đúng.' }
    ],
    finalAnswer: 'B', commonMistakes: ['Thiếu hệ số 2 trước NaOH.'], reviewSuggestions: ['Kiểm tra số Na và H sau cân bằng.']
  },
  {
    id: 'chem11-ns-s155', questionId: 'chem11-ns-q155',
    recognition: 'Dạng hỗn hợp hai muối khi tỉ lệ NaOH/SO₂ nằm giữa 1 và 2.',
    detailedSteps: [
      { order: 1, title: 'Lập hệ', explanation: 'Gọi x, y là mol NaHSO₃, Na₂SO₃: x + y = 0,10 và x + 2y = 0,15.' },
      { order: 2, title: 'Giải hệ', explanation: 'y = 0,05 và x = 0,05; C đúng.' }
    ],
    finalAnswer: 'C', commonMistakes: ['Chọn một muối duy nhất khi tỉ lệ là 1,5.'], reviewSuggestions: ['Dùng bảo toàn SO₂ và NaOH.']
  },
  {
    id: 'chem11-ns-s156', questionId: 'chem11-ns-q156',
    recognition: 'Dạng SO₂ dư, NaOH giới hạn với tỉ lệ NaOH/SO₂ = 0,5.',
    detailedSteps: [
      { order: 1, title: 'Xác định chất giới hạn', explanation: '0,10 mol NaOH chỉ chuyển tối đa 0,10 mol SO₂ thành NaHSO₃.' },
      { order: 2, title: 'Kết luận', explanation: 'Tạo 0,10 mol NaHSO₃, còn SO₂ dư nếu không có tác chất khác; D đúng.' }
    ],
    finalAnswer: 'D', commonMistakes: ['Dùng toàn bộ 0,20 mol SO₂ để tạo muối khi thiếu NaOH.'], reviewSuggestions: ['Kiểm tra chất giới hạn trước khi chọn sản phẩm.']
  },
  {
    id: 'chem11-ns-s157', questionId: 'chem11-ns-q157',
    recognition: 'Dạng SO₂ làm mất màu bromine: sulfur +4 bị oxi hóa lên +6.',
    detailedSteps: [
      { order: 1, title: 'Theo dõi sulfur', explanation: 'S trong SO₂ từ +4 lên +6 trong H₂SO₄.' },
      { order: 2, title: 'Kết luận vai trò', explanation: 'SO₂ nhường electron nên là chất khử; A đúng.' }
    ],
    finalAnswer: 'A', commonMistakes: ['Gọi chất bị oxi hóa là chất oxi hóa.'], reviewSuggestions: ['Tách “bị oxi hóa” và “chất khử”.']
  },
  {
    id: 'chem11-ns-s158', questionId: 'chem11-ns-q158',
    recognition: 'Dạng SO₂ với H₂S: sulfur trong SO₂ giảm +4 → 0.',
    detailedSteps: [
      { order: 1, title: 'Xét sulfur của SO₂', explanation: 'Sulfur +4 nhận electron và tạo S⁰.' },
      { order: 2, title: 'Gọi vai trò', explanation: 'SO₂ bị khử nên là chất oxi hóa; B đúng.' }
    ],
    finalAnswer: 'B', commonMistakes: ['Chỉ nhớ SO₂ thường có tính khử.'], reviewSuggestions: ['Theo dõi đúng nguyên tử sulfur thuộc từng chất.']
  },
  {
    id: 'chem11-ns-s159', questionId: 'chem11-ns-q159',
    recognition: 'Dạng giải thích hai mặt redox của mức +4 trung gian.',
    detailedSteps: [
      { order: 1, title: 'Xét chiều tăng', explanation: 'S +4 có thể tăng lên +6, khi đó SO₂ là chất khử.' },
      { order: 2, title: 'Xét chiều giảm', explanation: 'S +4 có thể giảm xuống 0 hoặc −2, khi đó SO₂ là chất oxi hóa; C đúng.' }
    ],
    finalAnswer: 'C', commonMistakes: ['Cho SO₂ chỉ có tính khử.'], reviewSuggestions: ['Vẽ trục −2/0 ← +4 → +6.']
  },
  {
    id: 'chem11-ns-s160', questionId: 'chem11-ns-q160',
    recognition: 'Dạng thí nghiệm bromine: hiện tượng phải được xác nhận bằng biến đổi số oxi hóa.',
    detailedSteps: [
      { order: 1, title: 'Không dừng ở màu', explanation: 'Mất màu là quan sát, chưa tự nó gọi được vai trò.' },
      { order: 2, title: 'Dùng electron', explanation: 'S +4 → +6 là nhường electron nên SO₂ là chất khử; D đúng.' }
    ],
    finalAnswer: 'D', commonMistakes: ['Cho màu nhạt chỉ do pha loãng.'], reviewSuggestions: ['Nối hiện tượng với phương trình redox.']
  },
  {
    id: 'chem11-ns-s161', questionId: 'chem11-ns-q161',
    recognition: 'Dạng ứng dụng công nghiệp của SO₂.',
    detailedSteps: [
      { order: 1, title: 'Nhớ chuỗi chuyển hóa', explanation: 'SO₂ được oxi hóa thành SO₃ trong quy trình tiếp xúc.' },
      { order: 2, title: 'Xác định sản phẩm cuối', explanation: 'Chuỗi hướng tới sản xuất sulfuric acid; A đúng.' }
    ],
    finalAnswer: 'A', commonMistakes: ['Nhầm SO₂ với nitrogen hoặc chlorine.'], reviewSuggestions: ['Ghi chuỗi S → SO₂ → SO₃ → H₂SO₄.']
  },
  {
    id: 'chem11-ns-s162', questionId: 'chem11-ns-q162',
    recognition: 'Dạng cơ chế tẩy màu SO₂: tính khử và khả năng màu xuất hiện lại.',
    detailedSteps: [
      { order: 1, title: 'Xác định cơ chế', explanation: 'SO₂ có thể khử một số chất màu.' },
      { order: 2, title: 'Đánh giá độ bền', explanation: 'Sản phẩm khử có thể bị oxi hóa lại nên màu có thể trở lại; B đúng.' }
    ],
    finalAnswer: 'B', commonMistakes: ['Đồng nhất với tẩy màu oxi hóa của chlorine.'], reviewSuggestions: ['So sánh cơ chế khử và oxi hóa.']
  },
  {
    id: 'chem11-ns-s163', questionId: 'chem11-ns-q163',
    recognition: 'Dạng ứng dụng đi kèm giới hạn an toàn.',
    detailedSteps: [
      { order: 1, title: 'Nhận lợi ích', explanation: 'SO₂ có thể ức chế vi sinh vật hoặc quá trình oxi hóa trong một số ứng dụng.' },
      { order: 2, title: 'Áp điều kiện', explanation: 'Vì SO₂ độc và kích ứng, chỉ được dùng đúng quy định và giới hạn; C đúng.' }
    ],
    finalAnswer: 'C', commonMistakes: ['Suy từ “có ứng dụng” sang “dùng bao nhiêu cũng được”.'], reviewSuggestions: ['Mọi ứng dụng thực phẩm phải gắn liều lượng và quy định.']
  },
  {
    id: 'chem11-ns-s164', questionId: 'chem11-ns-q164',
    recognition: 'Dạng phân biệt SO₂/CO₂ bằng tính khử, tránh thuốc thử acid–base chung.',
    detailedSteps: [
      { order: 1, title: 'Loại thuốc thử không đặc hiệu', explanation: 'Cả hai đều là acidic oxide nên các thử nghiệm base đơn giản dễ không phân biệt.' },
      { order: 2, title: 'Chọn phản ứng redox', explanation: 'SO₂ khử Br₂ làm mất màu, CO₂ không; D đúng.' }
    ],
    finalAnswer: 'D', commonMistakes: ['Dùng quỳ hoặc NaOH cho cả hai khí.'], reviewSuggestions: ['Chọn tính chất riêng thay vì tính chất chung.']
  },
  {
    id: 'chem11-ns-s165', questionId: 'chem11-ns-q165',
    recognition: 'Dạng nguồn phát thải SO₂ do con người.',
    detailedSteps: [
      { order: 1, title: 'Tìm sulfur đầu vào', explanation: 'Nhiên liệu chứa sulfur và quặng sulfide đều mang sulfur.' },
      { order: 2, title: 'Theo dõi khi oxi hóa', explanation: 'Đốt/luyện quặng có thể chuyển sulfur thành SO₂; A đúng.' }
    ],
    finalAnswer: 'A', commonMistakes: ['Chọn quá trình không chứa sulfur.'], reviewSuggestions: ['Truy nguồn từ nguyên liệu chứa S.']
  },
  {
    id: 'chem11-ns-s166', questionId: 'chem11-ns-q166',
    recognition: 'Dạng chuỗi mưa acid: không dừng ở việc SO₂ hòa tan.',
    detailedSteps: [
      { order: 1, title: 'Bước hòa tan', explanation: 'SO₂ hòa tan góp phần tạo môi trường acid.' },
      { order: 2, title: 'Bước oxi hóa', explanation: 'SO₂ còn có thể bị oxi hóa thành sulfuric acid, làm mưa acid mạnh hơn; B đúng.' }
    ],
    finalAnswer: 'B', commonMistakes: ['Bỏ qua oxi hóa khí quyển.'], reviewSuggestions: ['Học chuỗi nguồn SO₂ → acid trong khí quyển → lắng đọng.']
  },
  {
    id: 'chem11-ns-s167', questionId: 'chem11-ns-q167',
    recognition: 'Dạng kiểm soát tại nguồn: giảm sulfur và hấp thụ SO₂ bằng chất kiềm.',
    detailedSteps: [
      { order: 1, title: 'Giảm hình thành', explanation: 'Nhiên liệu ít sulfur làm giảm lượng SO₂ sinh ra.' },
      { order: 2, title: 'Xử lí khí đã sinh', explanation: 'Đá vôi/vôi hấp thụ acidic oxide SO₂; C là gói xử lí gốc.' }
    ],
    finalAnswer: 'C', commonMistakes: ['Coi phát tán cao hơn là loại bỏ chất ô nhiễm.'], reviewSuggestions: ['Phân biệt giảm phát thải và chuyển nơi phát tán.']
  },
  {
    id: 'chem11-ns-s168', questionId: 'chem11-ns-q168',
    recognition: 'Dạng tích hợp dữ liệu vận hành: đánh giá từng biện pháp theo lượng phát thải thực.',
    detailedSteps: [
      { order: 1, title: 'Đọc hai mức giảm', explanation: 'Nhiên liệu ít sulfur giảm đầu vào; hấp thụ đá vôi tiếp tục loại phần lớn SO₂ còn lại.' },
      { order: 2, title: 'So với ống khói', explanation: 'Ống khói cao không giảm tổng lượng, nên phối hợp hai biện pháp xử lí mới tốt hơn; D đúng.' }
    ],
    finalAnswer: 'D', commonMistakes: ['Nhầm nồng độ cục bộ thấp với tổng phát thải thấp.'], reviewSuggestions: ['Đánh giá biện pháp bằng khối lượng chất ô nhiễm, không chỉ độ cao phát tán.']
  },
  {
    id: 'chem11-ns-s169', questionId: 'chem11-ns-q169',
    recognition: 'Dạng số oxi hóa trong phân tử trung hòa H₂SO₄.',
    detailedSteps: [
      { order: 1, title: 'Đặt số oxi hóa quen thuộc', explanation: 'H là +1, O là −2.' },
      { order: 2, title: 'Lập tổng', explanation: '2(+1) + x + 4(−2) = 0 nên x = +6; A đúng.' }
    ],
    finalAnswer: 'A', commonMistakes: ['Gán +4 từ SO₂ sang H₂SO₄.'], reviewSuggestions: ['Luôn tính lại từ công thức.']
  },
  {
    id: 'chem11-ns-s170', questionId: 'chem11-ns-q170',
    recognition: 'Dạng tính chất vật lí cơ bản của H₂SO₄ đặc.',
    detailedSteps: [
      { order: 1, title: 'Nhớ trạng thái', explanation: 'H₂SO₄ đặc tinh khiết là chất lỏng không màu, sánh.' },
      { order: 2, title: 'So sánh khối lượng riêng', explanation: 'Acid đặc nặng hơn nước; B đầy đủ.' }
    ],
    finalAnswer: 'B', commonMistakes: ['Cho acid đặc nhẹ hơn nước.'], reviewSuggestions: ['Ghi bộ ba: lỏng – sánh – nặng hơn nước.']
  },
  {
    id: 'chem11-ns-s171', questionId: 'chem11-ns-q171',
    recognition: 'Dạng tìm phát biểu sai bằng số oxi hóa sulfur.',
    detailedSteps: [
      { order: 1, title: 'Kiểm tra số oxi hóa', explanation: 'Sulfur trong H₂SO₄ là +6.' },
      { order: 2, title: 'Chọn mệnh đề', explanation: 'Phát biểu +4 là sai; C đúng đáp án.' }
    ],
    finalAnswer: 'C', commonMistakes: ['Nhầm H₂SO₄ với SO₂.'], reviewSuggestions: ['Phân biệt S(+4) trong SO₂ và S(+6) trong H₂SO₄.']
  },
  {
    id: 'chem11-ns-s172', questionId: 'chem11-ns-q172',
    recognition: 'Dạng đọc dữ liệu vật lí để suy ra rủi ro pha loãng.',
    detailedSteps: [
      { order: 1, title: 'Dùng dữ kiện nhiệt', explanation: 'Hòa tan tỏa nhiệt lớn có thể làm lớp chất lỏng nóng và sôi cục bộ.' },
      { order: 2, title: 'Kết luận thao tác', explanation: 'Phải kiểm soát tốc độ và làm mát; D đúng.' }
    ],
    finalAnswer: 'D', commonMistakes: ['Chỉ dùng khối lượng riêng để quyết định an toàn.'], reviewSuggestions: ['Ưu tiên nhiệt hòa tan khi giải thích quy tắc pha.']
  },
  {
    id: 'chem11-ns-s173', questionId: 'chem11-ns-q173',
    recognition: 'Dạng H₂SO₄ loãng với kim loại đứng trước hydrogen.',
    detailedSteps: [
      { order: 1, title: 'Xác định sản phẩm', explanation: 'Zn tạo Zn²⁺, H⁺ bị khử thành H₂.' },
      { order: 2, title: 'Viết phương trình', explanation: 'Zn + H₂SO₄ → ZnSO₄ + H₂; A đúng.' }
    ],
    finalAnswer: 'A', commonMistakes: ['Dùng sản phẩm SO₂ của acid đặc.'], reviewSuggestions: ['Khoanh từ “loãng” trước khi chọn cơ chế.']
  },
  {
    id: 'chem11-ns-s174', questionId: 'chem11-ns-q174',
    recognition: 'Dạng trung hòa acid hai nấc bằng base mạnh.',
    detailedSteps: [
      { order: 1, title: 'Viết phương trình', explanation: 'H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O.' },
      { order: 2, title: 'Đọc hệ số', explanation: 'Một mol acid cần hai mol NaOH; B đúng.' }
    ],
    finalAnswer: 'B', commonMistakes: ['Chỉ trung hòa một proton nhưng gọi là hoàn toàn.'], reviewSuggestions: ['Phân biệt muối acid và muối trung hòa.']
  },
  {
    id: 'chem11-ns-s175', questionId: 'chem11-ns-q175',
    recognition: 'Dạng acid với basic oxide.',
    detailedSteps: [
      { order: 1, title: 'Phân loại CuO', explanation: 'CuO là basic oxide.' },
      { order: 2, title: 'Ghép sản phẩm', explanation: 'Acid + basic oxide tạo muối CuSO₄ và nước; C đúng.' }
    ],
    finalAnswer: 'C', commonMistakes: ['Cho CuO giải phóng H₂.'], reviewSuggestions: ['Acid + basic oxide → muối + nước.']
  },
  {
    id: 'chem11-ns-s176', questionId: 'chem11-ns-q176',
    recognition: 'Dạng acid với carbonate: dấu hiệu là khí CO₂.',
    detailedSteps: [
      { order: 1, title: 'Nhận sản phẩm trung gian', explanation: 'Carbonate gặp acid tạo H₂CO₃.' },
      { order: 2, title: 'Phân hủy acid yếu', explanation: 'H₂CO₃ tạo CO₂ và H₂O; cùng Na₂SO₄ nên D đúng.' }
    ],
    finalAnswer: 'D', commonMistakes: ['Nhầm khí CO₂ với H₂.'], reviewSuggestions: ['Carbonate + acid → muối + CO₂ + H₂O.']
  },
  {
    id: 'chem11-ns-s177', questionId: 'chem11-ns-q177',
    recognition: 'Dạng quy trình pha loãng: acid vào nước.',
    detailedSteps: [
      { order: 1, title: 'Xét phân tán nhiệt', explanation: 'Lượng nước lớn hấp thụ và phân tán nhiệt tốt hơn.' },
      { order: 2, title: 'Chọn thao tác', explanation: 'Thêm acid từ từ, khuấy và làm mát; A đúng.' }
    ],
    finalAnswer: 'A', commonMistakes: ['Nhớ đảo chiều quy tắc.'], reviewSuggestions: ['Dùng câu nhắc “acid vào nước”.']
  },
  {
    id: 'chem11-ns-s178', questionId: 'chem11-ns-q178',
    recognition: 'Dạng sơ cứu bỏng acid: ưu tiên giảm nồng độ và thời gian tiếp xúc.',
    detailedSteps: [
      { order: 1, title: 'Loại bỏ phơi nhiễm', explanation: 'Ngừng tiếp xúc và loại bỏ đồ nhiễm bẩn theo quy trình.' },
      { order: 2, title: 'Rửa và hỗ trợ', explanation: 'Rửa ngay bằng nhiều nước, sau đó tìm hỗ trợ y tế; B đúng.' }
    ],
    finalAnswer: 'B', commonMistakes: ['Đổ base đặc lên da gây thêm nhiệt và tổn thương.'], reviewSuggestions: ['Sơ cứu hóa chất phải theo quy trình, không tự trung hòa mạnh.']
  },
  {
    id: 'chem11-ns-s179', questionId: 'chem11-ns-q179',
    recognition: 'Dạng giải thích cơ chế bắn acid khi pha sai.',
    detailedSteps: [
      { order: 1, title: 'Xét lớp nước nhỏ', explanation: 'Nước trên acid nhận nhiệt rất nhanh.' },
      { order: 2, title: 'Suy ra nguy cơ', explanation: 'Nước có thể sôi cục bộ và cuốn acid bắn ra; C đúng.' }
    ],
    finalAnswer: 'C', commonMistakes: ['Giải thích bằng phản ứng tạo hydrogen.'], reviewSuggestions: ['Liên hệ nhiệt hòa tan với tốc độ truyền nhiệt.']
  },
  {
    id: 'chem11-ns-s180', questionId: 'chem11-ns-q180',
    recognition: 'Dạng tích hợp sự cố và pha loãng: tách xử lí chai nứt khỏi thao tác pha.',
    detailedSteps: [
      { order: 1, title: 'Xử lí chai nứt', explanation: 'Báo người phụ trách, cô lập và dùng quy trình sự cố; không tự vận chuyển nguy hiểm.' },
      { order: 2, title: 'Pha khi được phép', explanation: 'Dùng PPE, thêm acid vào nước và làm mát; D đúng.' }
    ],
    finalAnswer: 'D', commonMistakes: ['Tự pha loãng ngay trong chai hỏng.'], reviewSuggestions: ['Ưu tiên kiểm soát hiện trường trước thao tác hóa học.']
  },
  {
    id: 'chem11-ns-s181', questionId: 'chem11-ns-q181',
    recognition: 'Dạng Cu với H₂SO₄ đặc nóng: sản phẩm khử là SO₂.',
    detailedSteps: [
      { order: 1, title: 'Xác định redox', explanation: 'Cu⁰ lên Cu²⁺; S(+6) xuống S(+4) trong SO₂.' },
      { order: 2, title: 'Cân bằng', explanation: 'Cu + 2H₂SO₄ → CuSO₄ + SO₂ + 2H₂O; A đúng.' }
    ],
    finalAnswer: 'A', commonMistakes: ['Viết H₂ như acid loãng.'], reviewSuggestions: ['Gắn “đặc, nóng” với sản phẩm SO₂.']
  },
  {
    id: 'chem11-ns-s182', questionId: 'chem11-ns-q182',
    recognition: 'Dạng theo dõi sulfur trong chất oxi hóa H₂SO₄.',
    detailedSteps: [
      { order: 1, title: 'Số oxi hóa ban đầu', explanation: 'S trong H₂SO₄ là +6.' },
      { order: 2, title: 'Sản phẩm khử', explanation: 'S trong SO₂ là +4; biến đổi +6 → +4, B đúng.' }
    ],
    finalAnswer: 'B', commonMistakes: ['Theo dõi sulfur trong sulfate không bị khử.'], reviewSuggestions: ['Tách H₂SO₄ tạo sulfate và H₂SO₄ bị khử.']
  },
  {
    id: 'chem11-ns-s183', questionId: 'chem11-ns-q183',
    recognition: 'Dạng nhận sản phẩm khí của H₂SO₄ đặc với Cu.',
    detailedSteps: [
      { order: 1, title: 'Loại H₂', explanation: 'Acid đặc oxi hóa mạnh không cho H₂ trong phản ứng này.' },
      { order: 2, title: 'Chọn sản phẩm', explanation: 'Sulfur +6 bị khử thành SO₂; C đúng.' }
    ],
    finalAnswer: 'C', commonMistakes: ['Áp dụng máy móc kim loại + acid → H₂.'], reviewSuggestions: ['Luôn phân biệt acid loãng và đặc nóng.']
  },
  {
    id: 'chem11-ns-s184', questionId: 'chem11-ns-q184',
    recognition: 'Dạng ngoại lệ kim loại với H₂SO₄ đặc nguội: thụ động hóa.',
    detailedSteps: [
      { order: 1, title: 'Nhận nhóm kim loại', explanation: 'Fe, Al, Cr là nhóm thường được nêu trong hiện tượng thụ động.' },
      { order: 2, title: 'Gắn điều kiện', explanation: 'Trong H₂SO₄ đặc, nguội và điều kiện thích hợp, chúng bị thụ động; D đúng.' }
    ],
    finalAnswer: 'D', commonMistakes: ['Cho acid oxi hóa mạnh phản ứng mãnh liệt với mọi kim loại.'], reviewSuggestions: ['Học ngoại lệ kèm điều kiện “đặc, nguội”.']
  },
  {
    id: 'chem11-ns-s185', questionId: 'chem11-ns-q185',
    recognition: 'Dạng thí nghiệm đường–H₂SO₄ đặc: than hóa và tỏa nhiệt.',
    detailedSteps: [
      { order: 1, title: 'Xét tính háo nước', explanation: 'Acid lấy nước khỏi carbohydrate, để lại carbon.' },
      { order: 2, title: 'Dự đoán hiện tượng', explanation: 'Khối đen, nóng và có thể phồng lên; A đúng.' }
    ],
    finalAnswer: 'A', commonMistakes: ['Cho không có biến đổi vì đường không phải kim loại.'], reviewSuggestions: ['Nhận dạng bằng từ “đường/giấy/gạo”.']
  },
  {
    id: 'chem11-ns-s186', questionId: 'chem11-ns-q186',
    recognition: 'Dạng xác định chất đen sau quá trình tách nước khỏi đường.',
    detailedSteps: [
      { order: 1, title: 'Xét thành phần đường', explanation: 'Đường chứa C, H, O.' },
      { order: 2, title: 'Loại H và O', explanation: 'Khi H và O bị lấy theo tỉ lệ tạo nước, phần giàu carbon màu đen còn lại; B đúng.' }
    ],
    finalAnswer: 'B', commonMistakes: ['Cho chất đen là sulfur.'], reviewSuggestions: ['Liên hệ than hóa với carbon.']
  },
  {
    id: 'chem11-ns-s187', questionId: 'chem11-ns-q187',
    recognition: 'Dạng giải thích bản chất hóa học của tính háo nước.',
    detailedSteps: [
      { order: 1, title: 'Không dùng màu acid', explanation: 'H₂SO₄ không cung cấp màu đen cho giấy.' },
      { order: 2, title: 'Mô tả tách nước', explanation: 'Acid lấy H và O khỏi chất hữu cơ, để lại vật liệu giàu carbon; C đúng.' }
    ],
    finalAnswer: 'C', commonMistakes: ['Gọi hiện tượng là cháy hoàn toàn.'], reviewSuggestions: ['Phân biệt than hóa với cháy tạo CO₂.']
  },
  {
    id: 'chem11-ns-s188', questionId: 'chem11-ns-q188',
    recognition: 'Dạng phân biệt hút ẩm và háo nước qua mức biến đổi hóa học.',
    detailedSteps: [
      { order: 1, title: 'Hút ẩm', explanation: 'Là thu nhận hơi nước có sẵn từ môi trường.' },
      { order: 2, title: 'Háo nước', explanation: 'Có thể tách H và O khỏi hợp chất, gây biến đổi hóa học; D đúng.' }
    ],
    finalAnswer: 'D', commonMistakes: ['Đồng nhất hai thuật ngữ.'], reviewSuggestions: ['Hỏi: nước có sẵn hay được tạo ra từ chất?']
  },
  {
    id: 'chem11-ns-s189', questionId: 'chem11-ns-q189',
    recognition: 'Dạng thiết kế thí nghiệm có acid ăn mòn, nhiệt và SO₂ độc.',
    detailedSteps: [
      { order: 1, title: 'Liệt kê nguy cơ', explanation: 'Acid đặc ăn mòn, đun nóng và SO₂ gây độc.' },
      { order: 2, title: 'Chọn kiểm soát', explanation: 'Lượng nhỏ, tủ hút/hệ phù hợp, PPE và hấp thụ khí dư là đầy đủ; A đúng.' }
    ],
    finalAnswer: 'A', commonMistakes: ['Chỉ đeo găng nhưng bỏ qua khí SO₂.'], reviewSuggestions: ['Kiểm soát nguồn, đường truyền và người thực hiện.']
  },
  {
    id: 'chem11-ns-s190', questionId: 'chem11-ns-q190',
    recognition: 'Dạng xử lí khí SO₂ acidic oxide bằng dung dịch kiềm.',
    detailedSteps: [
      { order: 1, title: 'Phân loại khí', explanation: 'SO₂ là acidic oxide.' },
      { order: 2, title: 'Chọn chất hấp thụ', explanation: 'NaOH phản ứng giữ SO₂ dưới dạng sulfite/bisulfite; B đúng.' }
    ],
    finalAnswer: 'B', commonMistakes: ['Dùng dung dịch acid để hấp thụ acidic oxide.'], reviewSuggestions: ['Nối lại kiến thức Bài 7 về SO₂ với base.']
  },
  {
    id: 'chem11-ns-s191', questionId: 'chem11-ns-q191',
    recognition: 'Dạng thao tác cấm với khí độc.',
    detailedSteps: [
      { order: 1, title: 'Nhận nguy cơ', explanation: 'SO₂ gây kích ứng mắt và hô hấp.' },
      { order: 2, title: 'Chọn thao tác cấm', explanation: 'Ngửi trực tiếp làm tăng phơi nhiễm; C đúng.' }
    ],
    finalAnswer: 'C', commonMistakes: ['Coi mùi là thuốc thử an toàn.'], reviewSuggestions: ['Dùng phép thử hóa học trong hệ kín.']
  },
  {
    id: 'chem11-ns-s192', questionId: 'chem11-ns-q192',
    recognition: 'Dạng ghép hiện tượng với hai tính chất khác nhau của acid đặc.',
    detailedSteps: [
      { order: 1, title: 'Mẫu Cu', explanation: 'Cu bị oxi hóa, acid bị khử tạo SO₂: tính oxi hóa mạnh.' },
      { order: 2, title: 'Mẫu đường', explanation: 'Đường bị lấy nước và than hóa: tính háo nước; D đúng.' }
    ],
    finalAnswer: 'D', commonMistakes: ['Gộp cả hai hiện tượng thành tính acid.'], reviewSuggestions: ['Mỗi hiện tượng phải nối với biến đổi hóa học cụ thể.']
  },
  {
    id: 'chem11-ns-s193', questionId: 'chem11-ns-q193',
    recognition: 'Dạng sơ đồ phương pháp tiếp xúc theo thứ tự vật chất.',
    detailedSteps: [
      { order: 1, title: 'Tạo oxide đầu', explanation: 'Đốt sulfur/quặng tạo SO₂.' },
      { order: 2, title: 'Oxi hóa và hấp thụ', explanation: 'SO₂ → SO₃, sau đó hấp thụ để thu acid; A đúng.' }
    ],
    finalAnswer: 'A', commonMistakes: ['Đảo SO₂ và SO₃.'], reviewSuggestions: ['Học chuỗi theo số oxi hóa +4 → +6.']
  },
  {
    id: 'chem11-ns-s194', questionId: 'chem11-ns-q194',
    recognition: 'Dạng phương trình trung tâm của tháp tiếp xúc.',
    detailedSteps: [
      { order: 1, title: 'Xác định chất', explanation: 'SO₂ được oxi hóa bởi O₂ thành SO₃.' },
      { order: 2, title: 'Cân bằng', explanation: '2SO₂ + O₂ ⇌ 2SO₃; B đúng.' }
    ],
    finalAnswer: 'B', commonMistakes: ['Viết phản ứng một chiều tuyệt đối.'], reviewSuggestions: ['Nhớ đây là phản ứng thuận nghịch.']
  },
  {
    id: 'chem11-ns-s195', questionId: 'chem11-ns-q195',
    recognition: 'Dạng nhận diện nguyên liệu có sulfur để tạo SO₂.',
    detailedSteps: [
      { order: 1, title: 'Tìm nguồn S', explanation: 'Sulfur đơn chất và quặng sulfide đều chứa sulfur.' },
      { order: 2, title: 'Xét quá trình đốt', explanation: 'Oxi hóa chúng có thể tạo SO₂; C đúng.' }
    ],
    finalAnswer: 'C', commonMistakes: ['Chọn chất không chứa sulfur.'], reviewSuggestions: ['Truy nguyên tố sulfur từ nguyên liệu.']
  },
  {
    id: 'chem11-ns-s196', questionId: 'chem11-ns-q196',
    recognition: 'Dạng điền chất trung gian trong chuỗi S → SO₂ → SO₃.',
    detailedSteps: [
      { order: 1, title: 'Bước đốt sulfur', explanation: 'S + O₂ tạo SO₂ nên X là SO₂.' },
      { order: 2, title: 'Bước xúc tác', explanation: 'SO₂ tiếp tục oxi hóa thành SO₃ nên Y là SO₃; D đúng.' }
    ],
    finalAnswer: 'D', commonMistakes: ['Đảo thứ tự hai oxide.'], reviewSuggestions: ['Theo dõi số oxygen tăng từ 2 lên 3.']
  },
  {
    id: 'chem11-ns-s197', questionId: 'chem11-ns-q197',
    recognition: 'Dạng vai trò xúc tác trong cân bằng.',
    detailedSteps: [
      { order: 1, title: 'Xét tốc độ', explanation: 'V₂O₅ hạ năng lượng hoạt hóa, làm tăng tốc độ hai chiều.' },
      { order: 2, title: 'Xét cân bằng', explanation: 'Xúc tác không đổi K hay vị trí cân bằng; A đúng.' }
    ],
    finalAnswer: 'A', commonMistakes: ['Cho xúc tác làm tăng hiệu suất cân bằng.'], reviewSuggestions: ['Tách “đạt nhanh hơn” khỏi “cân bằng nằm ở đâu”.']
  },
  {
    id: 'chem11-ns-s198', questionId: 'chem11-ns-q198',
    recognition: 'Dạng hấp thụ SO₃ trong quy trình tiếp xúc.',
    detailedSteps: [
      { order: 1, title: 'Chọn môi trường hấp thụ', explanation: 'SO₃ được đưa vào H₂SO₄ đặc.' },
      { order: 2, title: 'Gọi sản phẩm', explanation: 'Sản phẩm là oleum, sau đó pha loãng có kiểm soát; B đúng.' }
    ],
    finalAnswer: 'B', commonMistakes: ['Nhầm oleum với H₂S.'], reviewSuggestions: ['Nhớ oleum là bước trung gian hấp thụ SO₃.']
  },
  {
    id: 'chem11-ns-s199', questionId: 'chem11-ns-q199',
    recognition: 'Dạng dữ liệu vận hành xúc tác: bụi và tạp chất làm giảm hoạt tính.',
    detailedSteps: [
      { order: 1, title: 'Xác định nguyên nhân', explanation: 'Bụi/tạp chất che phủ hoặc đầu độc xúc tác.' },
      { order: 2, title: 'Chọn biện pháp', explanation: 'Làm sạch và làm khô khí trước tháp xúc tác; C đúng.' }
    ],
    finalAnswer: 'C', commonMistakes: ['Thêm xúc tác mà không xử lí dòng khí.'], reviewSuggestions: ['Bảo vệ xúc tác bắt đầu từ tiền xử lí nguyên liệu.']
  },
  {
    id: 'chem11-ns-s200', questionId: 'chem11-ns-q200',
    recognition: 'Dạng giải thích vì sao không hấp thụ SO₃ trực tiếp vào nước.',
    detailedSteps: [
      { order: 1, title: 'Xét cường độ phản ứng', explanation: 'SO₃ phản ứng mạnh với nước và tỏa nhiệt.' },
      { order: 2, title: 'Xét khả năng thu hồi', explanation: 'Sương acid khó hấp thụ; tạo oleum rồi pha loãng kiểm soát tốt hơn; D đúng.' }
    ],
    finalAnswer: 'D', commonMistakes: ['Cho SO₃ không phản ứng với nước.'], reviewSuggestions: ['Phân biệt khả năng phản ứng và hiệu quả công nghệ.']
  },
  {
    id: 'chem11-ns-s201', questionId: 'chem11-ns-q201',
    recognition: 'Dạng ứng dụng quy mô lớn của sulfuric acid.',
    detailedSteps: [
      { order: 1, title: 'Nhận ngành sử dụng', explanation: 'H₂SO₄ là hóa chất cơ bản trong nhiều chuỗi sản xuất.' },
      { order: 2, title: 'Chọn ví dụ lớn', explanation: 'Sản xuất phân bón và hóa chất dùng lượng lớn H₂SO₄; A đúng.' }
    ],
    finalAnswer: 'A', commonMistakes: ['Chọn ứng dụng tiêu dùng trực tiếp.'], reviewSuggestions: ['Gắn H₂SO₄ với công nghiệp hóa chất cơ bản.']
  },
  {
    id: 'chem11-ns-s202', questionId: 'chem11-ns-q202',
    recognition: 'Dạng ứng dụng điện hóa: từ khóa acquy chì–acid.',
    detailedSteps: [
      { order: 1, title: 'Nhận hệ acquy', explanation: 'Dung dịch H₂SO₄ dẫn ion và tham gia cân bằng phản ứng điện cực.' },
      { order: 2, title: 'Gọi vai trò', explanation: 'Đó là chất điện li tham gia hệ điện hóa; B đúng.' }
    ],
    finalAnswer: 'B', commonMistakes: ['Coi acid chỉ là chất tạo màu.'], reviewSuggestions: ['Liên hệ dung dịch điện li với dòng điện trong acquy.']
  },
  {
    id: 'chem11-ns-s203', questionId: 'chem11-ns-q203',
    recognition: 'Dạng quản lí acid thải: không tự ý xả hay trộn.',
    detailedSteps: [
      { order: 1, title: 'Nhận diện nguy cơ', explanation: 'Acid thải ăn mòn và có thể phản ứng với chất thải khác.' },
      { order: 2, title: 'Chọn quản lí', explanation: 'Cô lập, nhận diện và xử lí theo quy trình; C đúng.' }
    ],
    finalAnswer: 'C', commonMistakes: ['Cho pha loãng rồi xả là đủ.'], reviewSuggestions: ['Phân biệt xử lí có kiểm soát với pha loãng ô nhiễm.']
  },
  {
    id: 'chem11-ns-s204', questionId: 'chem11-ns-q204',
    recognition: 'Dạng đánh giá hệ thống nhiều biện pháp trong nhà máy.',
    detailedSteps: [
      { order: 1, title: 'Đánh giá từng biện pháp', explanation: 'Giảm thất thoát tiết kiệm S; làm sạch bảo vệ xúc tác; thu hồi nhiệt tiết kiệm năng lượng.' },
      { order: 2, title: 'Kết luận tổng hợp', explanation: 'Xử lí sương acid giảm phát thải, nên D là đánh giá đầy đủ.' }
    ],
    finalAnswer: 'D', commonMistakes: ['Chỉ nhìn hiệu suất sản phẩm mà bỏ qua môi trường.'], reviewSuggestions: ['Đánh giá theo nguyên liệu, năng lượng, xúc tác và phát thải.']
  },
  {
    id: 'chem11-ns-s205', questionId: 'chem11-ns-q205',
    recognition: 'Dạng lập công thức muối từ NH₄⁺ và SO₄²⁻.',
    detailedSteps: [
      { order: 1, title: 'Xét điện tích', explanation: 'NH₄⁺ là +1, sulfate là −2.' },
      { order: 2, title: 'Trung hòa điện tích', explanation: 'Cần hai NH₄⁺ cho một SO₄²⁻: (NH₄)₂SO₄; A đúng.' }
    ],
    finalAnswer: 'A', commonMistakes: ['Bỏ ngoặc quanh NH₄.'], reviewSuggestions: ['Kiểm tra tổng điện tích công thức muối.']
  },
  {
    id: 'chem11-ns-s206', questionId: 'chem11-ns-q206',
    recognition: 'Dạng ghép sulfate ít tan với ứng dụng cản quang.',
    detailedSteps: [
      { order: 1, title: 'Nhận tính tan', explanation: 'BaSO₄ rất ít tan trong nước.' },
      { order: 2, title: 'Ghép ứng dụng', explanation: 'Độ ít tan cho phép dùng làm chất cản quang theo chỉ định chuyên môn; B đúng.' }
    ],
    finalAnswer: 'B', commonMistakes: ['Đồng nhất BaSO₄ với các muối barium tan.'], reviewSuggestions: ['Ứng dụng phụ thuộc mạnh vào độ tan.']
  },
  {
    id: 'chem11-ns-s207', questionId: 'chem11-ns-q207',
    recognition: 'Dạng ứng dụng của calcium sulfate.',
    detailedSteps: [
      { order: 1, title: 'Nhận khoáng/vật liệu', explanation: 'Các dạng hydrate của CaSO₄ liên quan thạch cao.' },
      { order: 2, title: 'Chọn ứng dụng', explanation: 'Thạch cao dùng trong vật liệu xây dựng và nhiều lĩnh vực; C đúng.' }
    ],
    finalAnswer: 'C', commonMistakes: ['Nhầm CaSO₄ với khí SO₂.'], reviewSuggestions: ['Ghép CaSO₄ với thạch cao.']
  },
  {
    id: 'chem11-ns-s208', questionId: 'chem11-ns-q208',
    recognition: 'Dạng bảng ghép nhiều muối sulfate với ứng dụng.',
    detailedSteps: [
      { order: 1, title: 'Kiểm tra từng muối', explanation: '(NH₄)₂SO₄ là phân bón; CaSO₄ liên quan thạch cao; BaSO₄ là chất cản quang.' },
      { order: 2, title: 'Chọn hàng đủ đúng', explanation: 'Chỉ phương án D ghép đúng cả ba.' }
    ],
    finalAnswer: 'D', commonMistakes: ['Đổi ứng dụng của BaSO₄ và ammonium sulfate.'], reviewSuggestions: ['Lập flashcard công thức – tính tan – ứng dụng.']
  },
  {
    id: 'chem11-ns-s209', questionId: 'chem11-ns-q209',
    recognition: 'Dạng chọn thuốc thử sulfate: cần ion Ba²⁺ hòa tan.',
    detailedSteps: [
      { order: 1, title: 'Xác định phản ứng', explanation: 'SO₄²⁻ tạo BaSO₄ rất ít tan với Ba²⁺.' },
      { order: 2, title: 'Chọn nguồn ion', explanation: 'Dung dịch BaCl₂ cung cấp Ba²⁺ hiệu quả; A đúng.' }
    ],
    finalAnswer: 'A', commonMistakes: ['Chọn chất barium không tan.'], reviewSuggestions: ['Thuốc thử phải đưa ion cần thiết vào dung dịch.']
  },
  {
    id: 'chem11-ns-s210', questionId: 'chem11-ns-q210',
    recognition: 'Dạng phương trình ion rút gọn của kết tủa sulfate.',
    detailedSteps: [
      { order: 1, title: 'Viết ion tham gia', explanation: 'Ba²⁺ và SO₄²⁻ là hai ion tạo chất ít tan.' },
      { order: 2, title: 'Ghép điện tích', explanation: 'Tỉ lệ 1:1 tạo BaSO₄↓; B đúng.' }
    ],
    finalAnswer: 'B', commonMistakes: ['Viết Ba⁺ hoặc quên điện tích sulfate.'], reviewSuggestions: ['Kiểm tra điện tích hai ion triệt tiêu.']
  },
  {
    id: 'chem11-ns-s211', questionId: 'chem11-ns-q211',
    recognition: 'Dạng hiện tượng nhận biết sulfate.',
    detailedSteps: [
      { order: 1, title: 'Xác định sản phẩm', explanation: 'Ba²⁺ + SO₄²⁻ tạo BaSO₄.' },
      { order: 2, title: 'Mô tả hiện tượng', explanation: 'BaSO₄ là kết tủa trắng rất ít tan; C đúng.' }
    ],
    finalAnswer: 'C', commonMistakes: ['Cho phản ứng giải phóng khí.'], reviewSuggestions: ['Ghi rõ màu và trạng thái kết tủa.']
  },
  {
    id: 'chem11-ns-s212', questionId: 'chem11-ns-q212',
    recognition: 'Dạng độ tin cậy phép thử: kết tủa trắng chưa đủ nếu không kiểm soát nhiễu.',
    detailedSteps: [
      { order: 1, title: 'Xét tính đặc hiệu', explanation: 'Một số ion khác có thể tạo kết tủa với Ba²⁺ trong điều kiện không phù hợp.' },
      { order: 2, title: 'Bổ sung kiểm soát', explanation: 'Cần nguồn Ba²⁺ tan, môi trường và đối chứng phù hợp; D đúng.' }
    ],
    finalAnswer: 'D', commonMistakes: ['Kết luận từ một dấu hiệu màu duy nhất.'], reviewSuggestions: ['Mọi phép nhận biết cần thuốc thử, môi trường và đối chứng.']
  },
  {
    id: 'chem11-ns-s213', questionId: 'chem11-ns-q213',
    recognition: 'Dạng đọc bảng mẫu thử và mẫu trắng.',
    detailedSteps: [
      { order: 1, title: 'Đọc mẫu trắng', explanation: 'Không kết tủa cho thấy thuốc thử/thiết bị không tự tạo dấu hiệu nền đáng kể.' },
      { order: 2, title: 'Đọc mẫu X', explanation: 'Kết tủa trắng bền trong điều kiện phù hợp ủng hộ sulfate nhưng vẫn cần xét nhiễu; A đúng.' }
    ],
    finalAnswer: 'A', commonMistakes: ['Dùng từ “chắc chắn” khi dữ liệu còn giới hạn.'], reviewSuggestions: ['Phân biệt dữ liệu ủng hộ với chứng minh tuyệt đối.']
  },
  {
    id: 'chem11-ns-s214', questionId: 'chem11-ns-q214',
    recognition: 'Dạng tính khối lượng kết tủa từ số mol.',
    detailedSteps: [
      { order: 1, title: 'Dùng công thức', explanation: 'm = nM.' },
      { order: 2, title: 'Thay số', explanation: 'm = 0,010 × 233 = 2,33 g; B đúng.' }
    ],
    finalAnswer: 'B', commonMistakes: ['Sai vị trí dấu phẩy thập phân.'], reviewSuggestions: ['Ước lượng: 1% của 233 g là 2,33 g.']
  },
  {
    id: 'chem11-ns-s215', questionId: 'chem11-ns-q215',
    recognition: 'Dạng ion gây nhiễu: phải cải tiến thiết kế thay vì kết luận vội.',
    detailedSteps: [
      { order: 1, title: 'Nhận vấn đề', explanation: 'Hai mẫu cùng kết tủa cho thấy phép thử ban đầu chưa đủ đặc hiệu.' },
      { order: 2, title: 'Thiết kế xác nhận', explanation: 'Kiểm soát môi trường, mẫu trắng và thuốc thử bổ sung trước kết luận; C đúng.' }
    ],
    finalAnswer: 'C', commonMistakes: ['Cho mọi kết tủa với Ba²⁺ đều là BaSO₄.'], reviewSuggestions: ['Xây quy trình loại nhiễu theo từng giả thuyết.']
  },
  {
    id: 'chem11-ns-s216', questionId: 'chem11-ns-q216',
    recognition: 'Dạng tích hợp hai phép thử ion của cùng muối.',
    detailedSteps: [
      { order: 1, title: 'Phần thử ammonium', explanation: 'Base giải phóng NH₃ và chỉ thị ẩm xác nhận NH₄⁺ theo quy trình.' },
      { order: 2, title: 'Phần thử sulfate', explanation: 'Ba²⁺ tạo BaSO₄ trắng xác nhận SO₄²⁻; hai kết quả phù hợp (NH₄)₂SO₄, D đúng.' }
    ],
    finalAnswer: 'D', commonMistakes: ['Dùng một phần mẫu cho cả hai phép thử gây lẫn thuốc thử.'], reviewSuggestions: ['Chia mẫu để các phép thử độc lập.']
  }
];
