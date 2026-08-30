import { problem } from './helpers';

const topic = 'math10-adv-number-theory';

export const numberTheoryProblems = [
  problem(topic, {
    content: 'Hai chữ số tận cùng của \\(7^{2026}\\) tạo thành số nào?', correct: '49', distractors: ['01', '07', '43'],
    insight: 'Lũy thừa của \\(7\\) theo môđun \\(100\\) có chu kỳ \\(4\\).',
    reasoning: ['Tính \\(7^2\\equiv49\\pmod{100}\\) và \\(7^4\\equiv1\\pmod{100}\\).', 'Vì \\(2026\\equiv2\\pmod4\\), nên \\(7^{2026}\\equiv7^2\\).', 'Số dư là \\(49\\), chính là hai chữ số tận cùng.'], tags: ['đồng dư', 'chữ số tận cùng']
  }),
  problem(topic, {
    content: 'Phương trình \\(3x+5y=31\\) có bao nhiêu cặp nghiệm nguyên dương \\((x,y)\\)?', correct: '2', distractors: ['1', '3', '4'],
    insight: 'Xét phương trình theo môđun \\(3\\) để thu hẹp ngay các giá trị của \\(y\\).',
    reasoning: ['Theo môđun \\(3\\): \\(2y\\equiv1\\), nên \\(y\\equiv2\\pmod3\\).', 'Vì \\(5y<31\\), chỉ có \\(y=2\\) hoặc \\(y=5\\).', 'Hai giá trị lần lượt cho \\(x=7\\) và \\(x=2\\).'], tags: ['phương trình Diophantine', 'đồng dư']
  }),
  problem(topic, {
    content: 'Số ước nguyên dương của \\(N=2^4\\cdot3^2\\cdot5\\) là', correct: '30', distractors: ['24', '28', '40'],
    insight: 'Mỗi ước được xác định độc lập bằng cách chọn số mũ của từng thừa số nguyên tố.',
    reasoning: ['Số mũ của \\(2\\) có \\(5\\) lựa chọn từ \\(0\\) đến \\(4\\).', 'Số mũ của \\(3\\) có \\(3\\) lựa chọn và của \\(5\\) có \\(2\\) lựa chọn.', 'Nhân các lựa chọn: \\(5\\cdot3\\cdot2=30\\).'], tags: ['hàm số ước', 'phân tích nguyên tố']
  }),
  problem(topic, {
    content: 'Hai số nguyên dương \\(a,b\\) có \\(\\gcd(a,b)=12\\), \\(\\operatorname{lcm}(a,b)=420\\). Nếu \\(a=60\\) thì \\(b\\) bằng', correct: '84', distractors: ['72', '96', '120'],
    insight: 'Tích hai số bằng tích ước chung lớn nhất và bội chung nhỏ nhất.',
    reasoning: ['Dùng \\(ab=\\gcd(a,b)\\operatorname{lcm}(a,b)\\).', 'Suy ra \\(60b=12\\cdot420\\).', 'Chia hai vế cho \\(60\\) được \\(b=84\\).'], tags: ['gcd', 'lcm']
  }),
  problem(topic, {
    content: 'Số dư của \\(2^{100}\\) khi chia cho \\(7\\) là', correct: '2', distractors: ['1', '3', '4'],
    insight: 'Theo môđun \\(7\\), \\(2^3\\equiv1\\), nên chỉ cần xét số mũ theo môđun \\(3\\).',
    reasoning: ['Ta có \\(2^3=8\\equiv1\\pmod7\\).', 'Vì \\(100=3\\cdot33+1\\), nên \\(2^{100}\\equiv2\\).', 'Số dư cần tìm là \\(2\\).'], tags: ['lũy thừa môđun', 'chu kỳ']
  }),
  problem(topic, {
    content: 'Số nguyên dương nhỏ nhất chia hết cho cả \\(12\\) và \\(18\\), đồng thời không chia hết cho \\(5\\), là', correct: '36', distractors: ['30', '60', '180'],
    insight: 'Điều kiện chia hết đồng thời được xử lý bằng bội chung nhỏ nhất; sau đó kiểm tra điều kiện loại.',
    reasoning: ['Phân tích \\(12=2^2\\cdot3\\), \\(18=2\\cdot3^2\\).', 'Bội chung nhỏ nhất là \\(2^2\\cdot3^2=36\\).', '\\(36\\) không chia hết cho \\(5\\), nên đây là số nhỏ nhất.'], tags: ['bội chung nhỏ nhất', 'chia hết']
  }),
  problem(topic, {
    content: 'Số nguyên \\(x\\) thỏa \\(0\\le x<15\\), \\(x\\equiv2\\pmod3\\) và \\(x\\equiv3\\pmod5\\) là', correct: '8', distractors: ['2', '11', '13'],
    insight: 'Liệt kê một lớp dư rồi chọn phần tử thỏa lớp dư còn lại là cách CRT nhỏ gọn.',
    reasoning: ['Các số trong đoạn đồng dư \\(2\\) theo môđun \\(3\\) là \\(2,5,8,11,14\\).', 'Chỉ \\(8\\) có số dư \\(3\\) khi chia cho \\(5\\).', 'Vậy nghiệm duy nhất là \\(8\\).'], tags: ['CRT', 'hệ đồng dư']
  }),
  problem(topic, {
    content: 'Số chữ số \\(0\\) liên tiếp ở cuối biểu diễn thập phân của \\(100!\\) là', correct: '24', distractors: ['20', '25', '50'],
    insight: 'Mỗi số \\(0\\) cuối cần một cặp \\(2\\cdot5\\); thừa số \\(5\\) ít hơn nên quyết định.',
    reasoning: ['Đếm số thừa số \\(5\\) trong \\(100!\\).', 'Có \\(\\lfloor100/5\\rfloor+\\lfloor100/25\\rfloor=20+4\\).', 'Do đó có \\(24\\) chữ số \\(0\\) tận cùng.'], tags: ['giai thừa', 'số 0 tận cùng']
  }),
  problem(topic, {
    content: 'Số mũ lớn nhất \\(k\\) để \\(2^k\\mid100!\\) bằng', correct: '97', distractors: ['94', '96', '100'],
    insight: 'Công thức Legendre cộng số bội của mọi lũy thừa của \\(2\\).',
    reasoning: ['Tính \\(v_2(100!)=\\sum_{j\\ge1}\\lfloor100/2^j\\rfloor\\).', 'Các số hạng là \\(50,25,12,6,3,1\\).', 'Tổng bằng \\(97\\).'], tags: ['Legendre', 'giai thừa']
  }),
  problem(topic, {
    content: 'Có bao nhiêu ước chính phương của \\(2^6\\cdot3^5\\cdot5^2\\)?', correct: '24', distractors: ['12', '18', '36'],
    insight: 'Trong một số chính phương, mọi số mũ nguyên tố đều chẵn.',
    reasoning: ['Số mũ của \\(2\\) chọn trong \\(0,2,4,6\\): bốn cách.', 'Số mũ của \\(3\\) có ba cách \\(0,2,4\\); của \\(5\\) có hai cách \\(0,2\\).', 'Nhân lại được \\(4\\cdot3\\cdot2=24\\).'], tags: ['ước chính phương', 'số mũ nguyên tố']
  }),
  problem(topic, {
    content: '\\(\\gcd(2^{30}-1,2^{18}-1)\\) bằng', correct: '63', distractors: ['31', '127', '255'],
    insight: 'Dùng định lý \\(\\gcd(a^m-1,a^n-1)=a^{\\gcd(m,n)}-1\\).',
    reasoning: ['Tính \\(\\gcd(30,18)=6\\).', 'Suy ra ước chung lớn nhất bằng \\(2^6-1\\).', 'Giá trị đó là \\(64-1=63\\).'], tags: ['gcd lũy thừa', 'Euclid']
  }),
  problem(topic, {
    content: 'Số dư của \\(1+2+\\cdots+100\\) khi chia cho \\(7\\) là', correct: '3', distractors: ['0', '1', '5'],
    insight: 'Tính tổng cấp số cộng rồi rút gọn theo môđun.',
    reasoning: ['Tổng bằng \\(100\\cdot101/2=5050\\).', 'Ta có \\(5050=7\\cdot721+3\\).', 'Vì vậy số dư là \\(3\\).'], tags: ['tổng số tự nhiên', 'số dư']
  }),
  problem(topic, {
    content: 'Có bao nhiêu lớp dư \\(x\\pmod{15}\\) thỏa \\(x^2\\equiv1\\pmod{15}\\)?', correct: '4', distractors: ['2', '3', '8'],
    insight: 'Tách môđun \\(15=3\\cdot5\\); mỗi môđun nguyên tố có hai lựa chọn dấu.',
    reasoning: ['Theo môđun \\(3\\), \\(x\\equiv\\pm1\\); theo môđun \\(5\\) cũng \\(x\\equiv\\pm1\\).', 'Hai lựa chọn ở mỗi môđun độc lập.', 'CRT ghép mỗi cặp dấu thành một lớp dư, tổng cộng \\(2\\cdot2=4\\).'], tags: ['đồng dư bậc hai', 'CRT']
  }),
  problem(topic, {
    content: 'Trong các số từ \\(1\\) đến \\(100\\), có bao nhiêu số nguyên tố cùng nhau với \\(30\\)?', correct: '26', distractors: ['24', '27', '30'],
    insight: 'Đếm theo các khối đủ \\(30\\) số rồi xử lý riêng phần dư cuối.',
    reasoning: ['Mỗi khối \\(30\\) số có \\(\\varphi(30)=30(1-1/2)(1-1/3)(1-1/5)=8\\) số phù hợp.', 'Từ \\(1\\) đến \\(90\\) có ba khối, được \\(24\\) số.', 'Trong \\(91\\) đến \\(100\\), chỉ \\(91,97\\) nguyên tố cùng nhau với \\(30\\).', 'Tổng cộng có \\(26\\) số.'], tags: ['hàm Euler', 'đếm theo chu kỳ']
  }),
  problem(topic, {
    content: 'Số nguyên dương nhỏ nhất \\(n\\) thỏa \\(2n\\equiv1\\pmod7\\) và \\(3n\\equiv1\\pmod5\\) là', correct: '32', distractors: ['12', '18', '25'],
    insight: 'Tìm nghịch đảo môđun trước khi ghép hai đồng dư.',
    reasoning: ['Từ \\(2n\\equiv1\\pmod7\\) suy ra \\(n\\equiv4\\pmod7\\).', 'Từ \\(3n\\equiv1\\pmod5\\) suy ra \\(n\\equiv2\\pmod5\\).', 'Dãy \\(4,11,18,25,32,\\ldots\\) cho số đầu tiên đồng dư \\(2\\) môđun \\(5\\) là \\(32\\).'], tags: ['nghịch đảo môđun', 'CRT']
  }),
  problem(topic, {
    content: 'Số bộ số nguyên dương \\((x,y,z)\\) thỏa \\(x+y+z=10\\) là', correct: '36', distractors: ['28', '45', '55'],
    insight: 'Đưa biến dương về biến không âm rồi dùng phương pháp chia kẹo Euler.',
    reasoning: ['Đặt \\(x=u+1,y=v+1,z=w+1\\) với \\(u,v,w\\ge0\\).', 'Khi đó \\(u+v+w=7\\).', 'Số nghiệm là \\(\\binom{7+3-1}{3-1}=\\binom92=36\\).'], tags: ['nghiệm nguyên dương', 'chia kẹo Euler']
  }),
  problem(topic, {
    content: 'Có bao nhiêu cách viết \\(65\\) thành tổng bình phương của hai số nguyên dương không kể thứ tự?', correct: '2', distractors: ['1', '3', '4'],
    insight: 'Chỉ cần thử số bình phương không vượt quá \\(65/2\\) cho số nhỏ hơn.',
    reasoning: ['Giả sử \\(1\\le x\\le y\\), nên \\(x^2\\le65/2\\), tức \\(x\\le5\\).', 'Thử \\(x=1,2,3,4,5\\) cho hai trường hợp \\(1^2+8^2\\) và \\(4^2+7^2\\).', 'Không còn trường hợp nào khác, nên có hai cách.'], tags: ['tổng hai bình phương', 'nghiệm nguyên']
  }),
  problem(topic, {
    content: 'Có bao nhiêu bộ ba Pythagore nguyên thủy \\((a,b,25)\\), với \\(a<b<25\\)?', correct: '1', distractors: ['0', '2', '3'],
    insight: 'Các tam giác vuông cạnh huyền \\(25\\) cần được lọc thêm điều kiện nguyên thủy.',
    reasoning: ['Các cặp cạnh góc vuông nguyên ứng với cạnh huyền \\(25\\) là \\((7,24)\\) và \\((15,20)\\).', 'Bộ \\((15,20,25)\\) có ước chung \\(5\\), không nguyên thủy.', 'Chỉ \\((7,24,25)\\) thỏa, nên có một bộ.'], tags: ['bộ ba Pythagore', 'nguyên thủy']
  }),
  problem(topic, {
    content: 'Số mũ lớn nhất của \\(3\\) trong phân tích nguyên tố của \\(100!\\) là', correct: '48', distractors: ['45', '49', '50'],
    insight: 'Mỗi bội của \\(9,27,81\\) đóng góp thêm các thừa số \\(3\\).',
    reasoning: ['Theo Legendre, số mũ là \\(\\lfloor100/3\\rfloor+\\lfloor100/9\\rfloor+\\lfloor100/27\\rfloor+\\lfloor100/81\\rfloor\\).', 'Các số hạng lần lượt là \\(33,11,3,1\\).', 'Tổng bằng \\(48\\).'], tags: ['Legendre', 'số mũ nguyên tố']
  }),
  problem(topic, {
    content: 'Chữ số khác \\(0\\) cuối cùng của \\(10!\\) là', correct: '8', distractors: ['2', '6', '9'],
    insight: 'Loại các cặp \\(2\\cdot5\\) tạo số không tận cùng rồi xét phần còn lại.',
    reasoning: ['Ta có \\(10!=3\\,628\\,800\\).', 'Bỏ hai chữ số \\(0\\) tận cùng được \\(36\\,288\\).', 'Chữ số khác \\(0\\) cuối cùng là \\(8\\).'], tags: ['giai thừa', 'chữ số cuối khác 0']
  }),
  problem(topic, {
    content: 'Có bao nhiêu số nguyên \\(x\\) thỏa \\(0\\le x<1155\\) và \\(x^2\\equiv1\\pmod{1155}\\)?', correct: '16', distractors: ['4', '8', '32'],
    insight: 'Môđun là tích của bốn số nguyên tố lẻ khác nhau; mỗi thành phần cho hai lựa chọn dấu.',
    reasoning: ['Phân tích \\(1155=3\\cdot5\\cdot7\\cdot11\\).', 'Ở mỗi môđun nguyên tố, nghiệm là \\(x\\equiv1\\) hoặc \\(x\\equiv-1\\).', 'Theo CRT, mỗi bộ bốn dấu tạo đúng một lớp dư.', 'Số lớp dư là \\(2^4=16\\).'], tags: ['CRT', 'đồng dư bậc hai', 'Olympic']
  }),
  problem(topic, {
    content: 'Phương trình \\(\\dfrac1x+\\dfrac1y=\\dfrac16\\) có bao nhiêu cặp nghiệm nguyên dương có thứ tự \\((x,y)\\)?', correct: '9', distractors: ['6', '8', '12'],
    insight: 'Biến đổi Simon đưa phương trình phân thức thành bài toán đếm ước.',
    reasoning: ['Nhân chéo được \\(xy-6x-6y=0\\).', 'Cộng \\(36\\): \\((x-6)(y-6)=36\\).', 'Mỗi ước dương \\(d\\mid36\\) cho một cặp \\(x-6=d,y-6=36/d\\).', 'Số ước dương của \\(36=2^2\\cdot3^2\\) là \\(9\\).'], tags: ['phương trình nghiệm nguyên', 'phân tích nhân tử', 'Olympic']
  }),
  problem(topic, {
    content: 'Số nguyên dương nhỏ nhất \\(n\\) thỏa \\(n\\equiv1\\pmod2\\), \\(n\\equiv2\\pmod3\\), \\(n\\equiv3\\pmod4\\), \\(n\\equiv4\\pmod5\\) là', correct: '59', distractors: ['29', '39', '119'],
    insight: 'Bốn điều kiện đều nói rằng \\(n\\) nhỏ hơn một bội của môđun đúng một đơn vị.',
    reasoning: ['Mỗi đồng dư tương đương \\(n\\equiv-1\\) theo môđun tương ứng.', 'Do đó \\(n+1\\) chia hết cho \\(2,3,4,5\\).', 'Bội chung nhỏ nhất của chúng là \\(60\\).', 'Số dương nhỏ nhất là \\(n=60-1=59\\).'], tags: ['hệ đồng dư', 'lcm', 'Olympic']
  }),
  problem(topic, {
    content: 'Số cặp nguyên dương \\((x,y)\\), với \\(x>y\\), thỏa \\(x^2-y^2=2025\\) là', correct: '7', distractors: ['6', '8', '15'],
    insight: 'Các cặp nghiệm tương ứng với các cặp ước khác nhau của số lẻ \\(2025\\).',
    reasoning: ['Viết \\((x-y)(x+y)=2025=3^4\\cdot5^2\\).', 'Số \\(2025\\) có \\((4+1)(2+1)=15\\) ước dương, nên có \\(8\\) cặp ước không thứ tự.', 'Một cặp là \\((45,45)\\), cho \\(y=0\\) nên bị loại.', 'Còn lại \\(7\\) cặp tạo nghiệm nguyên dương.'], tags: ['hiệu hai bình phương', 'đếm ước', 'Olympic']
  })
];
