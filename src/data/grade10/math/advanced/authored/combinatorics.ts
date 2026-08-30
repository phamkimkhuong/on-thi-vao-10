import { problem } from './helpers';

const topic = 'math10-adv-combinatorics';

export const combinatoricsProblems = [
  problem(topic, {
    content: 'Có bao nhiêu xâu nhị phân độ dài \\(8\\) chứa đúng \\(3\\) chữ số \\(1\\) và không có hai chữ số \\(1\\) kề nhau?', correct: '20', distractors: ['16', '24', '56'],
    insight: 'Chọn vị trí cho các số \\(1\\) sau khi dành trước các khoảng cách bắt buộc.',
    reasoning: ['Ba chữ số \\(1\\) cần hai chữ số \\(0\\) làm vách ngăn bắt buộc.', 'Sau khi ghép các vách, bài toán tương đương chọn \\(3\\) vị trí trong \\(8-3+1=6\\) vị trí.', 'Số cách là \\(\\binom63=20\\).'], tags: ['xâu nhị phân', 'không kề nhau']
  }),
  problem(topic, {
    content: 'Có bao nhiêu cách chia \\(10\\) viên kẹo giống nhau cho \\(3\\) em, mỗi em nhận ít nhất một viên?', correct: '36', distractors: ['28', '45', '66'],
    insight: 'Đây là số nghiệm nguyên dương của một phương trình tổng.',
    reasoning: ['Gọi số kẹo ba em nhận là \\(x,y,z\\ge1\\).', 'Bài toán trở thành \\(x+y+z=10\\).', 'Theo chia kẹo Euler, số nghiệm là \\(\\binom{9}{2}=36\\).'], tags: ['chia kẹo Euler', 'phân phối']
  }),
  problem(topic, {
    content: 'Xếp \\(6\\) học sinh phân biệt thành một hàng. Có bao nhiêu cách để An và Bình không đứng cạnh nhau?', correct: '480', distractors: ['240', '360', '600'],
    insight: 'Lấy tổng số hoán vị trừ số cách ghép hai bạn thành một khối.',
    reasoning: ['Tổng số cách xếp là \\(6!=720\\).', 'Nếu An và Bình cạnh nhau, coi họ là một khối: có \\(5!\\) cách xếp khối và \\(2\\) thứ tự bên trong.', 'Số cách hợp lệ là \\(720-2\\cdot120=480\\).'], tags: ['hoán vị', 'phương pháp bù']
  }),
  problem(topic, {
    content: 'Một lớp có \\(6\\) nam và \\(2\\) nữ. Chọn ban cán sự gồm \\(3\\) người. Có bao nhiêu cách chọn sao cho có ít nhất một nữ?', correct: '36', distractors: ['20', '40', '56'],
    insight: 'Dùng biến cố bù: loại các tổ chỉ gồm học sinh nam.',
    reasoning: ['Tổng số cách chọn ba người từ tám là \\(\\binom83=56\\).', 'Số tổ không có nữ là \\(\\binom63=20\\).', 'Lấy hiệu được \\(56-20=36\\).'], tags: ['tổ hợp', 'ít nhất một']
  }),
  problem(topic, {
    content: 'Từ các chữ số \\(0,1,2,3,4,5\\), lập được bao nhiêu số tự nhiên có \\(5\\) chữ số khác nhau?', correct: '600', distractors: ['360', '480', '720'],
    insight: 'Chữ số đầu tiên không được bằng \\(0\\); các vị trí còn lại là chỉnh hợp.',
    reasoning: ['Chữ số đầu có \\(5\\) lựa chọn từ \\(1\\) đến \\(5\\).', 'Bốn vị trí sau chọn và sắp từ năm chữ số còn lại: \\(P(5,4)=120\\).', 'Tổng số là \\(5\\cdot120=600\\).'], tags: ['lập số', 'chỉnh hợp']
  }),
  problem(topic, {
    content: 'Trên lưới ô vuông, đi từ \\((0,0)\\) đến \\((4,3)\\), mỗi bước chỉ sang phải hoặc lên trên. Có bao nhiêu đường đi?', correct: '35', distractors: ['12', '21', '42'],
    insight: 'Mỗi đường đi là một cách sắp thứ tự bốn bước phải và ba bước lên.',
    reasoning: ['Mọi đường đi gồm đúng \\(7\\) bước.', 'Chọn \\(3\\) trong \\(7\\) vị trí đặt bước lên.', 'Số đường đi là \\(\\binom73=35\\).'], tags: ['đường đi lưới', 'tổ hợp']
  }),
  problem(topic, {
    content: 'Có bao nhiêu cách lát hình chữ nhật \\(2\\times5\\) bằng các domino \\(1\\times2\\)?', correct: '8', distractors: ['5', '10', '16'],
    insight: 'Tách theo viên domino đầu tiên tạo truy hồi Fibonacci.',
    reasoning: ['Gọi \\(a_n\\) là số cách lát bảng \\(2\\times n\\).', 'Cột đầu lát dọc để còn \\(a_{n-1}\\), hoặc hai viên ngang để còn \\(a_{n-2}\\).', 'Với \\(a_1=1,a_2=2\\), suy ra \\(a_5=8\\).'], tags: ['truy hồi', 'lát domino']
  }),
  problem(topic, {
    content: 'Tập \\(\\{1,2,\\ldots,8\\}\\) có bao nhiêu tập con không chứa hai số nguyên liên tiếp?', correct: '55', distractors: ['34', '64', '89'],
    insight: 'Tách theo việc tập con có chứa phần tử lớn nhất hay không để được truy hồi Fibonacci.',
    reasoning: ['Gọi \\(a_n\\) là số tập con hợp lệ của \\(\\{1,\\ldots,n\\}\\).', 'Không chọn \\(n\\) có \\(a_{n-1}\\) cách; chọn \\(n\\) thì không chọn \\(n-1\\), có \\(a_{n-2}\\) cách.', 'Với \\(a_1=2,a_2=3\\), tính được \\(a_8=55\\).'], tags: ['tập con', 'Fibonacci']
  }),
  problem(topic, {
    content: 'Có bao nhiêu cách xếp \\(7\\) người phân biệt quanh một bàn tròn, chỉ xét vị trí tương đối?', correct: '720', distractors: ['120', '840', '5040'],
    insight: 'Cố định một người để loại các phép quay tạo cùng một cách xếp.',
    reasoning: ['Chọn một người làm mốc cố định.', 'Sắp sáu người còn lại vào sáu vị trí tương đối.', 'Có \\(6!=720\\) cách.'], tags: ['hoán vị vòng tròn', 'đối xứng quay']
  }),
  problem(topic, {
    content: 'Xếp \\(7\\) người quanh bàn tròn. Có bao nhiêu cách để hai người cố định A, B không ngồi cạnh nhau?', correct: '480', distractors: ['240', '360', '600'],
    insight: 'Trừ số cách A, B tạo thành một khối trên vòng tròn.',
    reasoning: ['Tổng số cách là \\((7-1)!=720\\).', 'Nếu A, B cạnh nhau, coi là một khối cùng năm người khác: có \\(5!\\) cách vòng tròn và \\(2\\) thứ tự.', 'Số cách cần tìm là \\(720-2\\cdot120=480\\).'], tags: ['vòng tròn', 'khối']
  }),
  problem(topic, {
    content: 'Bốn lá thư khác nhau được bỏ ngẫu nhiên vào bốn phong bì ghi địa chỉ tương ứng. Có bao nhiêu cách để không lá thư nào đúng phong bì?', correct: '9', distractors: ['6', '8', '12'],
    insight: 'Đây là số hoán vị không điểm cố định của bốn phần tử.',
    reasoning: ['Dùng bao hàm–loại trừ: \\(!4=4!-\\binom4113!+\\binom422!-\\binom431!+\\binom440!\\).', 'Tính được \\(24-24+12-4+1\\).', 'Kết quả bằng \\(9\\).'], tags: ['hoán vị rối', 'bao hàm loại trừ']
  }),
  problem(topic, {
    content: 'Một đa giác đều \\(10\\) đỉnh có bao nhiêu đường chéo?', correct: '35', distractors: ['30', '40', '45'],
    insight: 'Mỗi cặp đỉnh tạo một đoạn; loại đúng số cạnh của đa giác.',
    reasoning: ['Có \\(\\binom{10}{2}=45\\) đoạn nối hai đỉnh.', 'Trong đó \\(10\\) đoạn là cạnh.', 'Số đường chéo bằng \\(45-10=35\\).'], tags: ['đếm cặp', 'đa giác']
  }),
  problem(topic, {
    content: 'Trong các số từ \\(1\\) đến \\(100\\), có bao nhiêu số chia hết cho \\(2\\) hoặc \\(3\\)?', correct: '67', distractors: ['66', '68', '83'],
    insight: 'Cộng hai tập rồi trừ phần giao là các bội của \\(6\\).',
    reasoning: ['Có \\(50\\) bội của \\(2\\) và \\(33\\) bội của \\(3\\).', 'Có \\(16\\) bội của \\(6\\) bị đếm hai lần.', 'Theo bao hàm–loại trừ: \\(50+33-16=67\\).'], tags: ['bao hàm loại trừ', 'chia hết']
  }),
  problem(topic, {
    content: 'Có bao nhiêu cách sắp xếp các chữ cái của từ BANANA?', correct: '60', distractors: ['30', '90', '720'],
    insight: 'Chia hoán vị của sáu vị trí cho các hoán vị nội bộ của ba chữ A và hai chữ N.',
    reasoning: ['Từ có \\(6\\) chữ, trong đó A lặp \\(3\\) lần và N lặp \\(2\\) lần.', 'Số hoán vị phân biệt là \\(6!/(3!2!)\\).', 'Tính được \\(60\\).'], tags: ['hoán vị lặp', 'xếp chữ']
  }),
  problem(topic, {
    content: 'Chọn \\(4\\) số từ \\(\\{1,2,\\ldots,10\\}\\) sao cho không có hai số liên tiếp. Có bao nhiêu cách?', correct: '35', distractors: ['20', '42', '70'],
    insight: 'Dịch các vị trí đã chọn để loại khoảng trống bắt buộc giữa chúng.',
    reasoning: ['Nếu \\(1\\le a_1<a_2<a_3<a_4\\le10\\) và không kề, đặt \\(b_i=a_i-(i-1)\\).', 'Khi đó \\(1\\le b_1<b_2<b_3<b_4\\le7\\).', 'Số cách là \\(\\binom74=35\\).'], tags: ['chọn không kề', 'phép dịch']
  }),
  problem(topic, {
    content: 'Phân \\(12\\) quả bóng giống nhau vào \\(4\\) hộp phân biệt, mỗi hộp chứa không quá \\(4\\) quả. Có bao nhiêu cách?', correct: '35', distractors: ['28', '56', '455'],
    insight: 'Dùng bao hàm–loại trừ trên số nghiệm không âm vượt quá giới hạn.',
    reasoning: ['Không giới hạn có \\(\\binom{15}{3}=455\\) nghiệm.', 'Trừ trường hợp một hộp có ít nhất \\(5\\): \\(4\\binom{10}{3}=480\\).', 'Cộng lại trường hợp hai hộp cùng ít nhất \\(5\\): \\(\\binom42\\binom53=60\\).', 'Kết quả \\(455-480+60=35\\).'], tags: ['phân phối bị chặn', 'bao hàm loại trừ']
  }),
  problem(topic, {
    content: 'Tô \\(4\\) đỉnh của một hình vuông bằng \\(3\\) màu có nhãn, hai đỉnh kề nhau phải khác màu. Có bao nhiêu cách?', correct: '18', distractors: ['12', '24', '36'],
    insight: 'Đếm theo màu của đỉnh cuối hoặc dùng đa thức màu của chu trình.',
    reasoning: ['Chọn màu đỉnh đầu có \\(3\\) cách, đỉnh hai có \\(2\\) cách.', 'Nếu đỉnh ba trùng màu đỉnh đầu thì đỉnh bốn có \\(2\\) cách; nếu khác thì đỉnh bốn chỉ có \\(1\\) cách.', 'Với mỗi hai đỉnh đầu, tổng nhánh là \\(1\\cdot2+1\\cdot1=3\\).', 'Số cách là \\(3\\cdot2\\cdot3=18\\).'], tags: ['tô màu đồ thị', 'chu trình']
  }),
  problem(topic, {
    content: 'Trong một nhóm \\(10\\) người, mỗi cặp bắt tay đúng một lần. Tổng số cái bắt tay là', correct: '45', distractors: ['40', '50', '90'],
    insight: 'Mỗi cái bắt tay tương ứng với một cặp người không thứ tự.',
    reasoning: ['Chọn hai người trong mười người để tạo một cái bắt tay.', 'Thứ tự hai người không tạo cái bắt tay mới.', 'Số cặp là \\(\\binom{10}{2}=45\\).'], tags: ['đếm cặp', 'bắt tay']
  }),
  problem(topic, {
    content: 'Chọn ít nhất bao nhiêu số từ \\(\\{1,2,\\ldots,20\\}\\) để chắc chắn có hai số hơn kém nhau \\(10\\)?', correct: '11', distractors: ['10', '12', '20'],
    insight: 'Chia tập thành mười cặp \\((1,11),(2,12),\\ldots,(10,20)\\).',
    reasoning: ['Có đúng \\(10\\) cặp mà hai phần tử chênh nhau \\(10\\).', 'Chọn tối đa một số từ mỗi cặp có thể lấy \\(10\\) số mà chưa thỏa.', 'Khi chọn số thứ \\(11\\), nguyên lý Dirichlet buộc một cặp được chọn cả hai.'], tags: ['Dirichlet', 'ghép cặp']
  }),
  problem(topic, {
    content: 'Tung đồng xu cân đối \\(5\\) lần. Xác suất xuất hiện đúng \\(2\\) mặt ngửa là', correct: '\\dfrac5{16}', distractors: ['\\dfrac14', '\\dfrac38', '\\dfrac12'],
    insight: 'Mỗi dãy năm kết quả đồng khả năng; chọn hai vị trí cho mặt ngửa.',
    reasoning: ['Không gian mẫu có \\(2^5=32\\) dãy.', 'Số dãy có đúng hai mặt ngửa là \\(\\binom52=10\\).', 'Xác suất bằng \\(10/32=5/16\\).'], tags: ['nhị thức', 'xác suất']
  }),
  problem(topic, {
    content: 'Đi từ \\((0,0)\\) đến \\((5,5)\\), mỗi bước sang phải hoặc lên trên. Có bao nhiêu đường đi không qua \\((2,2)\\)?', correct: '132', distractors: ['120', '140', '252'],
    insight: 'Lấy tổng số đường đi trừ tích số đường đi đến và đi khỏi điểm cấm.',
    reasoning: ['Tổng số đường đi là \\(\\binom{10}{5}=252\\).', 'Số đường qua \\((2,2)\\) là \\(\\binom42\\binom63=6\\cdot20=120\\).', 'Số đường tránh điểm đó là \\(252-120=132\\).'], tags: ['đường đi lưới', 'điểm cấm', 'Olympic']
  }),
  problem(topic, {
    content: 'Có \\(12\\) ghế đánh số trên một vòng tròn. Chọn \\(4\\) ghế sao cho không có hai ghế được chọn kề nhau. Có bao nhiêu cách?', correct: '105', distractors: ['70', '126', '210'],
    insight: 'Tách theo việc có chọn ghế số \\(1\\), hoặc dùng công thức chọn không kề trên chu trình.',
    reasoning: ['Không chọn ghế \\(1\\): trên hàng \\(11\\) ghế còn lại có \\(\\binom{11-4+1}{4}=\\binom84=70\\) cách.', 'Chọn ghế \\(1\\): loại ghế \\(2,12\\), rồi chọn \\(3\\) ghế không kề trên hàng \\(9\\) ghế, được \\(\\binom{9-3+1}{3}=\\binom73=35\\).', 'Hai trường hợp rời nhau và phủ hết các cách chọn.', 'Cộng lại được \\(70+35=105\\).'], tags: ['tổ hợp vòng tròn', 'không kề', 'Olympic']
  }),
  problem(topic, {
    content: 'Có bao nhiêu cách đặt \\(5\\) cặp dấu ngoặc để tạo một biểu thức ngoặc đúng?', correct: '42', distractors: ['32', '60', '120'],
    insight: 'Số chuỗi ngoặc đúng với năm cặp là số Catalan thứ năm.',
    reasoning: ['Số Catalan \\(C_n=\\dfrac1{n+1}\\binom{2n}{n}\\).', 'Thay \\(n=5\\): \\(C_5=\\dfrac16\\binom{10}{5}\\).', 'Tính \\(252/6=42\\).'], tags: ['Catalan', 'chuỗi ngoặc', 'Olympic']
  }),
  problem(topic, {
    content: 'Có bao nhiêu hàm toàn ánh từ một tập \\(6\\) phần tử đến một tập \\(3\\) phần tử?', correct: '540', distractors: ['486', '600', '729'],
    insight: 'Lấy tất cả hàm rồi dùng bao hàm–loại trừ các hàm bỏ sót ít nhất một giá trị.',
    reasoning: ['Tổng số hàm là \\(3^6\\).', 'Trừ \\(\\binom31 2^6\\) hàm bỏ một giá trị.', 'Cộng lại \\(\\binom32 1^6\\) hàm bị trừ hai lần.', 'Kết quả \\(729-192+3=540\\).'], tags: ['hàm toàn ánh', 'bao hàm loại trừ', 'Olympic']
  })
];
