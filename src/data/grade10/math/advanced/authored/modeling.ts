import { problem, table } from './helpers';

const topic = 'math10-adv-modeling';

export const modelingProblems = [
  problem(topic, {
    content: 'Điểm trung bình của năm bài kiểm tra bằng', correct: '\\dfrac{42}5', distractors: ['8', '\\dfrac{41}5', '9'],
    insight: 'Cộng toàn bộ quan sát rồi chia đúng số lượng quan sát.',
    reasoning: ['Tổng năm điểm là \\(7+8+8+9+10=42\\).', 'Có đúng năm bài kiểm tra.', 'Điểm trung bình là \\(42/5=8{,}4\\).'], tags: ['số trung bình', 'thống kê'],
    stimulus: table('math10-model-mean', 'Kết quả kiểm tra', 'Một học sinh có năm điểm số.', 'Bảng điểm', [{ key: 'test', label: 'Bài' }, { key: 'score', label: 'Điểm' }], [{ test: 1, score: 7 }, { test: 2, score: 8 }, { test: 3, score: 8 }, { test: 4, score: 9 }, { test: 5, score: 10 }])
  }),
  problem(topic, {
    content: 'Trung vị của mẫu \\(2,4,5,7,9,12\\) là', correct: '6', distractors: ['5', '7', '\\dfrac{13}2'],
    insight: 'Mẫu có số phần tử chẵn nên trung vị là trung bình của hai giá trị giữa.',
    reasoning: ['Dữ liệu đã được xếp tăng dần và có sáu phần tử.', 'Hai vị trí giữa là giá trị thứ ba \\(5\\) và thứ tư \\(7\\).', 'Trung vị bằng \\((5+7)/2=6\\).'], tags: ['trung vị', 'mẫu số liệu']
  }),
  problem(topic, {
    content: 'Phương sai của mẫu \\(1,3,5\\), tính theo công thức chia cho \\(n\\), bằng', correct: '\\dfrac83', distractors: ['2', '4', '\\dfrac{16}3'],
    insight: 'Tính độ lệch so với số trung bình rồi lấy trung bình các bình phương độ lệch.',
    reasoning: ['Số trung bình là \\((1+3+5)/3=3\\).', 'Các bình phương độ lệch là \\(4,0,4\\).', 'Phương sai bằng \\((4+0+4)/3=8/3\\).'], tags: ['phương sai', 'độ phân tán'],
    stimulus: table('math10-model-variance', 'Mẫu số liệu nhỏ', 'Ba quan sát cách đều nhau.', 'Giá trị quan sát', [{ key: 'order', label: 'STT' }, { key: 'value', label: 'Giá trị' }], [{ order: 1, value: 1 }, { order: 2, value: 3 }, { order: 3, value: 5 }])
  }),
  problem(topic, {
    content: 'Gieo hai con xúc xắc cân đối. Xác suất tổng số chấm bằng \\(8\\) là', correct: '\\dfrac5{36}', distractors: ['\\dfrac16', '\\dfrac7{36}', '\\dfrac14'],
    insight: 'Liệt kê các cặp có thứ tự trong không gian mẫu gồm 36 kết quả.',
    reasoning: ['Có \\(6\\cdot6=36\\) kết quả đồng khả năng.', 'Các cặp tổng \\(8\\) là \\((2,6),(3,5),(4,4),(5,3),(6,2)\\).', 'Có năm kết quả thuận lợi nên xác suất là \\(5/36\\).'], tags: ['xúc xắc', 'xác suất cổ điển']
  }),
  problem(topic, {
    content: 'Một hộp có \\(4\\) bi đỏ và \\(6\\) bi xanh. Lấy đồng thời \\(2\\) bi. Xác suất lấy cả hai bi đỏ bằng', correct: '\\dfrac2{15}', distractors: ['\\dfrac4{25}', '\\dfrac15', '\\dfrac13'],
    insight: 'Khi lấy đồng thời, dùng tổ hợp thay vì nhân xác suất có thứ tự.',
    reasoning: ['Tổng số cách lấy hai bi là \\(\\binom{10}{2}=45\\).', 'Số cách lấy hai bi đỏ là \\(\\binom42=6\\).', 'Xác suất bằng \\(6/45=2/15\\).'], tags: ['rút bi', 'tổ hợp']
  }),
  problem(topic, {
    content: 'Một cửa hàng bán \\(x\\) sản phẩm khi giá mỗi sản phẩm là \\(100-2x\\) nghìn đồng. Doanh thu lớn nhất, tính theo nghìn đồng, là', correct: '1250', distractors: ['1000', '2000', '2500'],
    insight: 'Doanh thu là tích số lượng và đơn giá, tạo một parabol quay xuống.',
    reasoning: ['Lập \\(R(x)=x(100-2x)=-2x^2+100x\\).', 'Đỉnh parabol có \\(x=-100/(2\\cdot-2)=25\\).', 'Tính \\(R(25)=25\\cdot50=1250\\).'], tags: ['doanh thu', 'parabol']
  }),
  problem(topic, {
    content: 'Một hình chữ nhật có chu vi \\(40\\). Diện tích lớn nhất bằng', correct: '100', distractors: ['80', '160', '400'],
    insight: 'Với tổng hai cạnh cố định, tích lớn nhất khi hai cạnh bằng nhau.',
    reasoning: ['Gọi hai cạnh là \\(x,y>0\\); từ chu vi có \\(x+y=20\\).', 'AM–GM cho \\(xy\\le(20/2)^2\\).', 'Diện tích lớn nhất là \\(100\\), đạt khi hình là hình vuông.'], tags: ['hình chữ nhật', 'tối ưu']
  }),
  problem(topic, {
    content: 'Có \\(60\\) m hàng rào để rào ba cạnh của một khu đất chữ nhật sát sông. Diện tích lớn nhất có thể rào là', correct: '450', distractors: ['225', '600', '900'],
    insight: 'Hai cạnh vuông góc bờ sông dùng cùng một chiều dài, cạnh còn lại dùng phần hàng rào còn lại.',
    reasoning: ['Gọi chiều rộng là \\(x\\), cạnh song song sông là \\(y\\); có \\(2x+y=60\\).', 'Diện tích \\(S=x(60-2x)=-2x^2+60x\\).', 'Đỉnh tại \\(x=15,y=30\\), cho \\(S=450\\).'], tags: ['hàng rào', 'tối ưu thực tế'],
    stimulus: table('math10-model-fence', 'Phân bổ hàng rào', 'Chỉ ba cạnh cần dùng hàng rào vì cạnh thứ tư giáp sông.', 'Các cạnh được rào', [{ key: 'direction', label: 'Loại cạnh' }, { key: 'count', label: 'Số cạnh' }, { key: 'length', label: 'Độ dài mỗi cạnh' }], [{ direction: 'Vuông góc bờ sông', count: 2, length: 'x' }, { direction: 'Song song bờ sông', count: 1, length: 'y' }])
  }),
  problem(topic, {
    content: 'Trộn dung dịch \\(20\\%\\) và \\(50\\%\\) để được \\(10\\) lít dung dịch \\(32\\%\\). Cần bao nhiêu lít dung dịch \\(20\\%\\)?', correct: '6', distractors: ['4', '5', '8'],
    insight: 'Bảo toàn lượng chất tan, không lấy trung bình cộng nồng độ khi thể tích hai phần chưa biết.',
    reasoning: ['Gọi \\(x\\) lít là dung dịch \\(20\\%\\), phần còn lại \\(10-x\\) lít.', 'Lượng chất tan thỏa \\(0{,}2x+0{,}5(10-x)=3{,}2\\).', 'Giải được \\(x=6\\).'], tags: ['pha trộn', 'phương trình'],
    stimulus: table('math10-model-mixture', 'Bài toán pha dung dịch', 'Tổng thể tích sau khi trộn là \\(10\\) lít.', 'Nồng độ', [{ key: 'solution', label: 'Dung dịch' }, { key: 'concentration', label: 'Nồng độ' }], [{ solution: 'Loại A', concentration: '20%' }, { solution: 'Loại B', concentration: '50%' }, { solution: 'Sau trộn', concentration: '32%' }])
  }),
  problem(topic, {
    content: 'Máy A làm một công việc trong \\(6\\) giờ, máy B làm trong \\(3\\) giờ. Hai máy cùng làm thì hoàn thành sau bao nhiêu giờ?', correct: '2', distractors: ['1', '3', '4{,}5'],
    insight: 'Cộng năng suất theo phần công việc mỗi giờ, không cộng hoặc lấy trung bình thời gian.',
    reasoning: ['Năng suất A là \\(1/6\\) công việc mỗi giờ.', 'Năng suất B là \\(1/3\\); tổng là \\(1/2\\).', 'Thời gian hoàn thành là nghịch đảo của năng suất tổng, bằng \\(2\\) giờ.'], tags: ['năng suất', 'công việc chung']
  }),
  problem(topic, {
    content: 'Một xe đi cùng một quãng đường lượt đi với vận tốc \\(40\\text{ km/h}\\) và lượt về với vận tốc \\(60\\text{ km/h}\\). Vận tốc trung bình cả hành trình (km/h) là', correct: '48', distractors: ['50', '52', '24'],
    insight: 'Hai quãng đường bằng nhau nên vận tốc trung bình là trung bình điều hòa.',
    reasoning: ['Gọi mỗi lượt dài \\(d\\); tổng quãng đường là \\(2d\\).', 'Tổng thời gian là \\(d/40+d/60=d/24\\).', 'Vận tốc trung bình bằng \\(2d/(d/24)=48\\) km/h.'], tags: ['vận tốc trung bình', 'trung bình điều hòa']
  }),
  problem(topic, {
    content: 'Một mặt hàng tăng giá \\(20\\%\\), sau đó giảm \\(20\\%\\) trên giá mới. Giá cuối cùng bằng bao nhiêu phần trăm giá ban đầu?', correct: '96\\%', distractors: ['80\\%', '100\\%', '104\\%'],
    insight: 'Hai tỉ lệ phần trăm tác động liên tiếp phải được nhân, không triệt tiêu bằng phép cộng.',
    reasoning: ['Sau lần tăng, hệ số giá là \\(1{,}2\\).', 'Sau lần giảm, nhân tiếp với \\(0{,}8\\).', 'Hệ số cuối là \\(1{,}2\\cdot0{,}8=0{,}96\\), tức \\(96\\%\\).'], tags: ['phần trăm liên tiếp', 'tăng giảm']
  }),
  problem(topic, {
    content: 'Gửi \\(10\\) triệu đồng theo lãi đơn \\(6\\%\\) mỗi năm trong \\(2\\) năm. Tổng tiền nhận được (triệu đồng) là', correct: '11{,}2', distractors: ['10{,}6', '11{,}236', '12'],
    insight: 'Lãi đơn luôn tính trên vốn ban đầu, không nhập lãi vào vốn.',
    reasoning: ['Tiền lãi mỗi năm là \\(10\\cdot0{,}06=0{,}6\\) triệu.', 'Hai năm được \\(1{,}2\\) triệu tiền lãi.', 'Tổng nhận \\(10+1{,}2=11{,}2\\) triệu đồng.'], tags: ['lãi đơn', 'tài chính']
  }),
  problem(topic, {
    content: 'Với \\(x,y\\ge0\\), \\(x+y\\le8\\), \\(2x+y\\le10\\). Giá trị lớn nhất của \\(3x+5y\\) là', correct: '40', distractors: ['36', '45', '50'],
    insight: 'Hàm mục tiêu tuyến tính đạt cực trị tại một đỉnh của miền đa giác.',
    reasoning: ['Các đỉnh miền nghiệm là \\((0,0),(5,0),(2,6),(0,8)\\).', 'Giá trị mục tiêu tương ứng là \\(0,15,36,40\\).', 'Giá trị lớn nhất bằng \\(40\\), đạt tại \\((0,8)\\).'], tags: ['quy hoạch tuyến tính', 'miền nghiệm'],
    stimulus: table('math10-model-linear-program', 'Các đỉnh miền khả thi', 'Đánh giá hàm mục tiêu tại các đỉnh.', 'Bảng kiểm tra', [{ key: 'vertex', label: '(x,y)' }, { key: 'value', label: '3x+5y' }], [{ vertex: '(0,0)', value: 0 }, { vertex: '(5,0)', value: 15 }, { vertex: '(2,6)', value: 36 }, { vertex: '(0,8)', value: 40 }])
  }),
  problem(topic, {
    content: 'Lô hàng có \\(3\\) sản phẩm lỗi và \\(7\\) sản phẩm tốt. Chọn ngẫu nhiên \\(3\\) sản phẩm. Xác suất chọn đúng \\(2\\) sản phẩm lỗi là', correct: '\\dfrac7{40}', distractors: ['\\dfrac3{10}', '\\dfrac7{20}', '\\dfrac{21}{100}'],
    insight: 'Chọn hai lỗi từ ba và một tốt từ bảy, rồi chia cho mọi cách chọn ba sản phẩm.',
    reasoning: ['Số cách chọn bất kỳ là \\(\\binom{10}{3}=120\\).', 'Số cách thuận lợi là \\(\\binom32\\binom71=21\\).', 'Xác suất bằng \\(21/120=7/40\\).'], tags: ['siêu bội', 'kiểm tra chất lượng']
  }),
  problem(topic, {
    content: 'Chọn ngẫu nhiên một trong hai hộp với xác suất như nhau. Hộp A cho bi đỏ với xác suất \\(2/3\\), hộp B cho bi đỏ với xác suất \\(1/4\\). Xác suất lấy được bi đỏ là', correct: '\\dfrac{11}{24}', distractors: ['\\dfrac5{12}', '\\dfrac7{24}', '\\dfrac12'],
    insight: 'Dùng công thức xác suất toàn phần theo hai cách chọn hộp.',
    reasoning: ['Xác suất chọn mỗi hộp bằng \\(1/2\\).', 'Xác suất đỏ là \\((1/2)(2/3)+(1/2)(1/4)\\).', 'Cộng được \\(1/3+1/8=11/24\\).'], tags: ['xác suất toàn phần', 'chọn hộp']
  }),
  problem(topic, {
    content: 'Kỳ vọng số chấm khi gieo một con xúc xắc cân đối là', correct: '\\dfrac72', distractors: ['3', '4', '6'],
    insight: 'Lấy trung bình có trọng số của sáu kết quả đồng xác suất.',
    reasoning: ['Mỗi mặt từ \\(1\\) đến \\(6\\) có xác suất \\(1/6\\).', 'Kỳ vọng bằng \\((1+2+3+4+5+6)/6\\).', 'Tổng là \\(21\\), nên kỳ vọng bằng \\(7/2\\).'], tags: ['kỳ vọng', 'xúc xắc']
  }),
  problem(topic, {
    content: 'Khoảng tứ phân vị của mẫu \\(1,2,3,5,8,13,21,34\\), lấy trung vị cho mỗi nửa mẫu, bằng', correct: '\\dfrac{29}2', distractors: ['13', '15', '\\dfrac{31}2'],
    insight: 'Tính riêng trung vị nửa dưới và nửa trên rồi lấy hiệu.',
    reasoning: ['Nửa dưới \\(1,2,3,5\\) có \\(Q_1=(2+3)/2=5/2\\).', 'Nửa trên \\(8,13,21,34\\) có \\(Q_3=(13+21)/2=17\\).', 'IQR bằng \\(17-5/2=29/2\\).'], tags: ['tứ phân vị', 'IQR'],
    stimulus: table('math10-model-quartile', 'Mẫu đã sắp thứ tự', 'Tám quan sát được chia thành hai nửa bằng nhau.', 'Dữ liệu', [{ key: 'position', label: 'Vị trí' }, { key: 'value', label: 'Giá trị' }], [{ position: 1, value: 1 }, { position: 2, value: 2 }, { position: 3, value: 3 }, { position: 4, value: 5 }, { position: 5, value: 8 }, { position: 6, value: 13 }, { position: 7, value: 21 }, { position: 8, value: 34 }])
  }),
  problem(topic, {
    content: 'Chọn ngẫu nhiên một số trong các bội của \\(2\\) không vượt quá \\(30\\). Xác suất số đó cũng chia hết cho \\(3\\) là', correct: '\\dfrac13', distractors: ['\\dfrac16', '\\dfrac25', '\\dfrac12'],
    insight: 'Không gian mẫu đã bị điều kiện hóa thành tập các bội của hai.',
    reasoning: ['Có \\(\\lfloor30/2\\rfloor=15\\) bội của \\(2\\).', 'Các số vừa chia hết cho \\(2\\) và \\(3\\) là bội của \\(6\\), có \\(5\\) số.', 'Xác suất có điều kiện là \\(5/15=1/3\\).'], tags: ['xác suất có điều kiện', 'chia hết']
  }),
  problem(topic, {
    content: 'Hai linh kiện hoạt động độc lập, mỗi linh kiện có độ tin cậy \\(0{,}9\\). Xác suất cả hai cùng hoạt động là', correct: '0{,}81', distractors: ['0{,}18', '0{,}9', '0{,}99'],
    insight: 'Với hai biến cố độc lập, xác suất giao bằng tích xác suất.',
    reasoning: ['Gọi \\(A,B\\) là biến cố từng linh kiện hoạt động.', 'Độc lập nên \\(P(A\\cap B)=P(A)P(B)\\).', 'Tính \\(0{,}9^2=0{,}81\\).'], tags: ['độc lập', 'độ tin cậy']
  }),
  problem(topic, {
    content: 'Gieo một con xúc xắc cân đối \\(4\\) lần. Xác suất xuất hiện ít nhất một lần mặt \\(6\\) là', correct: '\\dfrac{671}{1296}', distractors: ['\\dfrac{625}{1296}', '\\dfrac16', '\\dfrac23'],
    insight: 'Tính biến cố bù “không xuất hiện mặt 6 trong cả bốn lần”.',
    reasoning: ['Mỗi lần không ra mặt \\(6\\) có xác suất \\(5/6\\).', 'Bốn lần độc lập nên xác suất không có mặt \\(6\\) là \\((5/6)^4=625/1296\\).', 'Lấy bù được \\(1-625/1296=671/1296\\).'], tags: ['biến cố bù', 'nhị thức', 'Olympic']
  }),
  problem(topic, {
    content: 'Với \\(x,y\\) nguyên không âm, \\(2x+y\\le10\\), \\(x+3y\\le12\\). Giá trị lớn nhất của \\(5x+7y\\) là', correct: '36', distractors: ['34', '35', '38'],
    insight: 'Tối ưu liên tục chỉ định vùng cần xét; điều kiện nguyên buộc kiểm tra các điểm lưới lân cận.',
    reasoning: ['Hai đường biên cắt nhau gần \\((18/5,14/5)\\).', 'Kiểm tra các điểm nguyên khả thi lân cận và trên biên: \\((3,3)\\) thỏa cả hai ràng buộc.', 'Tại \\((3,3)\\), hàm mục tiêu bằng \\(15+21=36\\); các điểm biên nguyên kề cho giá trị nhỏ hơn.', 'Do hàm tuyến tính, không có điểm sâu bên trong vượt được điểm biên này.'], tags: ['quy hoạch nguyên', 'hai nguồn lực', 'Olympic'],
    stimulus: table('math10-model-integer-lp', 'Bài toán hai nguồn lực', 'Hai loại sản phẩm dùng lượng tài nguyên khác nhau.', 'Hệ số mô hình', [{ key: 'item', label: 'Đại lượng' }, { key: 'x', label: 'X' }, { key: 'y', label: 'Y' }], [{ item: 'Nguồn lực 1', x: 2, y: 1 }, { item: 'Nguồn lực 2', x: 1, y: 3 }, { item: 'Lợi ích', x: 5, y: 7 }])
  }),
  problem(topic, {
    content: 'Xáo ngẫu nhiên \\(4\\) lá thư vào \\(4\\) phong bì ghi địa chỉ. Kỳ vọng số lá thư được đặt đúng phong bì là', correct: '1', distractors: ['0', '\\dfrac12', '2'],
    insight: 'Dùng tính tuyến tính của kỳ vọng; không cần biết phân phối đầy đủ của số thư đúng.',
    reasoning: ['Đặt \\(I_i=1\\) nếu thư thứ \\(i\\) đúng phong bì, ngược lại bằng \\(0\\).', 'Mỗi thư có xác suất \\(1/4\\) vào đúng phong bì, nên \\(E(I_i)=1/4\\).', 'Tuyến tính kỳ vọng cho \\(E(I_1+\\cdots+I_4)=4\\cdot1/4=1\\).'], tags: ['kỳ vọng chỉ báo', 'hoán vị', 'Olympic']
  }),
  problem(topic, {
    content: 'Chọn ngẫu nhiên \\(3\\) số khác nhau từ \\(\\{2,3,4,5,6\\}\\). Xác suất ba số có thể là độ dài ba cạnh một tam giác là', correct: '\\dfrac7{10}', distractors: ['\\dfrac35', '\\dfrac45', '\\dfrac9{10}'],
    insight: 'Với ba số đã xếp tăng, chỉ cần kiểm tra tổng hai số nhỏ hơn có lớn hơn số lớn nhất hay không.',
    reasoning: ['Tổng số bộ ba là \\(\\binom53=10\\).', 'Ba bộ không tạo tam giác là \\(\\{2,3,5\\},\\{2,3,6\\},\\{2,4,6\\}\\) vì tổng hai cạnh nhỏ không lớn hơn cạnh lớn.', 'Có \\(10-3=7\\) bộ hợp lệ.', 'Xác suất bằng \\(7/10\\).'], tags: ['xác suất hình học rời rạc', 'bất đẳng thức tam giác', 'Olympic']
  })
];
