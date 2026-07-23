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
  }
];
