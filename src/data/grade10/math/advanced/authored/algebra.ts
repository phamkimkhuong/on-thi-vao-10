import { problem } from './helpers';

const topic = 'math10-adv-algebra';

export const algebraProblems = [
  problem(topic, {
    content: 'Hai số thực \\(x,y\\) thỏa \\(x+y=5\\), \\(xy=6\\). Tính \\(x^3+y^3\\).',
    correct: '35', distractors: ['125', '65', '90'],
    insight: 'Dữ kiện là tổng và tích nên biến đổi biểu thức đối xứng, không cần giải riêng từng ẩn.',
    reasoning: ['Dùng \\(x^3+y^3=(x+y)^3-3xy(x+y)\\).', 'Thay \\(x+y=5,xy=6\\) được \\(125-90\\).', 'Suy ra giá trị cần tìm bằng \\(35\\).'],
    tags: ['Viète', 'biểu thức đối xứng']
  }),
  problem(topic, {
    content: 'Gọi \\(\\alpha,\\beta\\) là hai nghiệm của \\(t^2-7t+10=0\\). Giá trị \\(\\dfrac{1}{\\alpha}+\\dfrac{1}{\\beta}\\) bằng',
    correct: '\\dfrac{7}{10}', distractors: ['\\dfrac{10}{7}', '-\\dfrac{7}{10}', '\\dfrac{3}{10}'],
    insight: 'Tổng nghịch đảo bằng tổng hai nghiệm chia cho tích hai nghiệm.',
    reasoning: ['Theo Viète, \\(\\alpha+\\beta=7\\), \\(\\alpha\\beta=10\\).', 'Biến đổi \\(1/\\alpha+1/\\beta=(\\alpha+\\beta)/(\\alpha\\beta)\\).', 'Thay hai hệ thức Viète để được \\(7/10\\).'],
    tags: ['Viète', 'nghịch đảo']
  }),
  problem(topic, {
    content: 'Đa thức \\(P(t)=t^3-9t^2+23t-15\\) có ba nghiệm \\(x_1,x_2,x_3\\). Tính \\((2-x_1)(2-x_2)(2-x_3)\\).',
    correct: '3', distractors: ['-3', '5', '15'],
    insight: 'Tích được hỏi chính là giá trị của đa thức đơn thức đầu tại \\(t=2\\).',
    reasoning: ['Viết \\(P(t)=(t-x_1)(t-x_2)(t-x_3)\\).', 'Thay \\(t=2\\): tích cần tìm bằng \\(P(2)\\).', 'Tính \\(8-36+46-15=3\\).'],
    tags: ['đa thức', 'định lý nhân tử']
  }),
  problem(topic, {
    content: 'Hai nghiệm \\(u,v\\) của \\(t^2-4t+1=0\\). Không giải phương trình, hãy tính \\(u^3+v^3\\).',
    correct: '52', distractors: ['48', '56', '64'],
    insight: 'Các tổng lũy thừa tuân theo truy hồi do mỗi nghiệm thỏa \\(t^2=4t-1\\).',
    reasoning: ['Đặt \\(S_n=u^n+v^n\\); khi đó \\(S_n=4S_{n-1}-S_{n-2}\\).', 'Có \\(S_0=2,S_1=4\\), nên \\(S_2=14\\).', 'Tính \\(S_3=4\\cdot14-4=52\\).'],
    tags: ['truy hồi', 'tổng lũy thừa']
  }),
  problem(topic, {
    content: 'Biết \\(x+y=10\\) và \\(x^2+y^2=58\\). Tích \\(xy\\) bằng',
    correct: '21', distractors: ['42', '29', '20'],
    insight: 'Bình phương của tổng liên kết trực tiếp với tổng bình phương và tích.',
    reasoning: ['Dùng \\((x+y)^2=x^2+y^2+2xy\\).', 'Suy ra \\(100=58+2xy\\).', 'Giải được \\(xy=21\\).'],
    tags: ['hằng đẳng thức', 'đối xứng']
  }),
  problem(topic, {
    content: 'Với \\(\\alpha,\\beta\\) là nghiệm của \\(t^2-6t+7=0\\), tính \\(\\dfrac\\alpha\\beta+\\dfrac\\beta\\alpha\\).',
    correct: '\\dfrac{22}7', distractors: ['\\dfrac{36}7', '\\dfrac{14}7', '\\dfrac{29}7'],
    insight: 'Quy đồng để đưa tử số về \\((\\alpha+\\beta)^2-2\\alpha\\beta\\).',
    reasoning: ['Theo Viète, tổng bằng \\(6\\), tích bằng \\(7\\).', 'Biểu thức bằng \\((\\alpha^2+\\beta^2)/(\\alpha\\beta)\\).', 'Tử số \\(=36-14=22\\), nên kết quả là \\(22/7\\).'],
    tags: ['Viète', 'phân thức đối xứng']
  }),
  problem(topic, {
    content: 'Có bao nhiêu giá trị thực của \\(m\\) để hai nghiệm của \\(t^2-(m+1)t+m-2=0\\) thỏa \\(x_1^2+x_2^2=13\\)?',
    correct: '2', distractors: ['0', '1', '3'],
    insight: 'Dùng Viète biến điều kiện nghiệm thành phương trình theo tham số rồi kiểm tra biệt thức.',
    reasoning: ['Ta có \\(x_1+x_2=m+1\\), \\(x_1x_2=m-2\\).', 'Điều kiện cho \\((m+1)^2-2(m-2)=13\\), tức \\(m^2=8\\).', 'Cả hai giá trị \\(m=\\pm2\\sqrt2\\) đều cho phương trình có nghiệm thực.'],
    tags: ['tham số', 'Viète']
  }),
  problem(topic, {
    content: 'Ba nghiệm khác \\(0\\) của \\(t^3-6t^2+11t-6=0\\) là \\(a,b,c\\). Tính \\(\\dfrac1a+\\dfrac1b+\\dfrac1c\\).',
    correct: '\\dfrac{11}6', distractors: ['\\dfrac6{11}', '1', '\\dfrac{17}6'],
    insight: 'Tổng nghịch đảo của ba nghiệm bằng tổng các tích đôi chia cho tích ba nghiệm.',
    reasoning: ['Theo Viète: \\(ab+bc+ca=11\\), \\(abc=6\\).', 'Quy đồng tổng nghịch đảo được \\((ab+bc+ca)/(abc)\\).', 'Thay số thu được \\(11/6\\).'],
    tags: ['Viète bậc ba', 'nghịch đảo']
  }),
  problem(topic, {
    content: 'Phần dư khi chia \\(P(x)=x^{2026}+3x^{2025}-2\\) cho \\(x^2-1\\) là',
    correct: '3x-1', distractors: ['3x+1', 'x-2', '4x-2'],
    insight: 'Trong phép chia theo \\(x^2-1\\), có thể thay mọi lũy thừa chẵn bởi \\(1\\) và lẻ bởi \\(x\\).',
    reasoning: ['Theo môđun \\(x^2-1\\), ta có \\(x^2\\equiv1\\).', 'Do đó \\(x^{2026}\\equiv1\\), \\(x^{2025}\\equiv x\\).', 'Suy ra phần dư là \\(1+3x-2=3x-1\\).'],
    tags: ['phần dư đa thức', 'đồng dư']
  }),
  problem(topic, {
    content: 'Đa thức \\(P\\) có bậc không quá \\(2\\), thỏa \\(P(0)=1,P(1)=4,P(2)=11\\). Giá trị \\(P(3)\\) bằng',
    correct: '22', distractors: ['18', '20', '24'],
    insight: 'Dãy giá trị của đa thức bậc hai có sai phân cấp hai không đổi.',
    reasoning: ['Các sai phân cấp một đầu là \\(3\\) và \\(7\\).', 'Sai phân cấp hai bằng \\(4\\), nên sai phân kế tiếp bằng \\(11\\).', 'Vì thế \\(P(3)=11+11=22\\).'],
    tags: ['nội suy', 'sai phân']
  }),
  problem(topic, {
    content: 'Số nghiệm thực của phương trình \\(x^4+4=0\\) là',
    correct: '0', distractors: ['1', '2', '4'],
    insight: 'Nhận ra hằng đẳng thức Sophie Germain hoặc đơn giản dùng tính không âm trên tập thực.',
    reasoning: ['Với mọi \\(x\\in\\mathbb R\\), \\(x^4\\ge0\\).', 'Suy ra \\(x^4+4\\ge4>0\\).', 'Phương trình không có nghiệm thực.'],
    tags: ['đa thức', 'đánh giá dấu']
  }),
  problem(topic, {
    content: 'Giải phương trình \\(\\dfrac{x-1}{x+1}+\\dfrac{x+1}{x-1}=\\dfrac52\\). Phương trình có bao nhiêu nghiệm thực?',
    correct: '2', distractors: ['0', '1', '3'],
    insight: 'Quy đồng sau khi đặt điều kiện \\(x\\ne\\pm1\\), phương trình rút về phương trình theo \\(x^2\\).',
    reasoning: ['Điều kiện: \\(x\\ne\\pm1\\). Vế trái bằng \\(2(x^2+1)/(x^2-1)\\).', 'Giải \\(4(x^2+1)=5(x^2-1)\\) được \\(x^2=9\\).', 'Hai nghiệm \\(x=\\pm3\\) đều thỏa điều kiện.'],
    tags: ['phương trình hữu tỉ', 'điều kiện xác định']
  }),
  problem(topic, {
    content: 'Ba số \\(x,y,z\\) thỏa \\(x+y+z=6\\), \\(xy+yz+zx=11\\), \\(xyz=6\\). Tính \\(x^3+y^3+z^3\\).',
    correct: '36', distractors: ['18', '30', '42'],
    insight: 'Dùng hệ thức Newton cho ba biến thay vì tìm từng số.',
    reasoning: ['Đặt \\(s_1=6,s_2=11,s_3=6\\).', 'Ta có \\(x^3+y^3+z^3=s_1^3-3s_1s_2+3s_3\\).', 'Tính \\(216-198+18=36\\).'],
    tags: ['hệ thức Newton', 'ba biến']
  }),
  problem(topic, {
    content: 'Nếu \\(x-y=4\\) và \\(xy=5\\) thì \\(|x+y|\\) bằng',
    correct: '6', distractors: ['4', '5', '\\sqrt{21}'],
    insight: 'Liên hệ bình phương tổng và hiệu để tránh giải hệ.',
    reasoning: ['Dùng \\((x+y)^2=(x-y)^2+4xy\\).', 'Thay dữ kiện được \\((x+y)^2=16+20=36\\).', 'Do hỏi giá trị tuyệt đối nên \\(|x+y|=6\\).'],
    tags: ['hệ đối xứng', 'giá trị tuyệt đối']
  }),
  problem(topic, {
    content: 'Tổng giá trị tuyệt đối của tất cả nghiệm nguyên của \\(x^3-2x^2-5x+6=0\\) bằng',
    correct: '6', distractors: ['4', '5', '7'],
    insight: 'Dùng định lý nghiệm hữu tỉ rồi phân tích đa thức, không thử các số ngoài ước của hệ số tự do.',
    reasoning: ['Nghiệm nguyên chỉ có thể là ước của \\(6\\).', 'Thử và phân tích được \\((x+2)(x-1)(x-3)=0\\).', 'Tổng cần tìm là \\(2+1+3=6\\).'],
    tags: ['nghiệm nguyên', 'phân tích đa thức']
  }),
  problem(topic, {
    content: 'Tập giá trị của \\(m\\) để phương trình \\(x^2-(m+3)x+2m=0\\) có hai nghiệm dương phân biệt là',
    correct: 'm>0', distractors: ['m\\ge0', 'm>3', 'm<0'],
    insight: 'Hai nghiệm dương cần tổng dương, tích dương và biệt thức dương.',
    reasoning: ['Theo Viète cần \\(m+3>0\\) và \\(2m>0\\), nên \\(m>0\\).', 'Biệt thức bằng \\(m^2-2m+9=(m-1)^2+8>0\\) với mọi \\(m\\).', 'Vậy điều kiện chính xác là \\(m>0\\).'],
    tags: ['tham số', 'dấu của nghiệm']
  }),
  problem(topic, {
    content: 'Hệ \\(x+y+xy=11\\), \\(x^2y+xy^2=30\\) có thể tạo ra những giá trị nào của \\(x+y\\)? Tổng các giá trị đó bằng',
    correct: '11', distractors: ['5', '6', '30'],
    insight: 'Đặt tổng và tích; phương trình thứ hai trở thành tích của hai ẩn phụ.',
    reasoning: ['Đặt \\(S=x+y,P=xy\\). Hệ cho \\(S+P=11,SP=30\\).', 'Do đó \\(S,P\\) là hai nghiệm của \\(t^2-11t+30=0\\), tức \\(5,6\\).', 'Cả hai cách gán đều cho \\(x,y\\) thực; tổng các giá trị của \\(S\\) là \\(11\\).'],
    tags: ['ẩn phụ đối xứng', 'hệ phương trình']
  }),
  problem(topic, {
    content: 'Hai nghiệm \\(a,b\\) của \\(t^2-3t-1=0\\). Tính \\(a^4+b^4\\).',
    correct: '119', distractors: ['99', '109', '129'],
    insight: 'Tạo truy hồi \\(S_n=3S_{n-1}+S_{n-2}\\) từ phương trình đặc trưng.',
    reasoning: ['Đặt \\(S_n=a^n+b^n\\); có \\(S_0=2,S_1=3\\).', 'Từ \\(t^2=3t+1\\), suy ra \\(S_n=3S_{n-1}+S_{n-2}\\).', 'Tính lần lượt \\(S_2=11,S_3=36,S_4=119\\).'],
    tags: ['truy hồi', 'Viète']
  }),
  problem(topic, {
    content: 'Đa thức \\(P\\) bậc không quá \\(3\\) thỏa \\(P(0)=1,P(1)=2,P(2)=5,P(3)=10\\). Tính \\(P(4)\\).',
    correct: '17', distractors: ['15', '16', '18'],
    insight: 'Bốn giá trị xác định duy nhất đa thức bậc không quá ba; sai phân cho thấy đây thực chất là bậc hai.',
    reasoning: ['Dãy \\(1,2,5,10\\) có sai phân đầu \\(1,3,5\\).', 'Sai phân cấp hai đều bằng \\(2\\), nên sai phân đầu tiếp theo là \\(7\\).', 'Suy ra \\(P(4)=10+7=17\\).'],
    tags: ['nội suy', 'đa thức']
  }),
  problem(topic, {
    content: 'Số cặp số nguyên dương \\((x,y)\\) thỏa \\(x^2-y^2=45\\) là',
    correct: '3', distractors: ['2', '4', '6'],
    insight: 'Phân tích hiệu hai bình phương thành hai ước dương cùng tính chẵn lẻ.',
    reasoning: ['Viết \\((x-y)(x+y)=45\\).', 'Các cặp ước dương với thừa số thứ nhất nhỏ hơn là \\((1,45),(3,15),(5,9)\\).', 'Mỗi cặp cho đúng một cặp \\((x,y)\\) nguyên dương, nên có \\(3\\) cặp.'],
    tags: ['hiệu hai bình phương', 'nghiệm nguyên']
  }),
  problem(topic, {
    content: 'Phương trình \\(x^4-5x^3+8x^2-5x+1=0\\) có bao nhiêu nghiệm thực phân biệt?',
    correct: '3', distractors: ['1', '2', '4'],
    insight: 'Hệ số đối xứng cho phép chia \\(x^2\\) và đặt \\(t=x+1/x\\), nhưng phải xử lý riêng \\(|t|=2\\).',
    reasoning: ['Vì \\(x\\ne0\\), chia cho \\(x^2\\) rồi đặt \\(t=x+1/x\\).', 'Thu được \\(t^2-5t+6=0\\), nên \\(t=2\\) hoặc \\(t=3\\).', '\\(t=2\\) cho một nghiệm \\(x=1\\); \\(t=3\\) cho hai nghiệm thực phân biệt.', 'Tổng cộng có \\(3\\) nghiệm thực phân biệt.'],
    tags: ['đa thức nghịch đảo', 'ẩn phụ', 'Olympic']
  }),
  problem(topic, {
    content: 'Hai nghiệm của \\(x^2-5x+m=0\\) đều thuộc khoảng \\((1;4)\\). Điều kiện của \\(m\\) là',
    correct: '4<m<\\dfrac{25}4', distractors: ['m>4', 'm<\\dfrac{25}4', '4\\le m\\le\\dfrac{25}4'],
    insight: 'Dùng vị trí parabol tại hai đầu khoảng và giá trị tại đỉnh để giữ cả hai giao điểm bên trong.',
    reasoning: ['Đỉnh có hoành độ \\(5/2\\) nằm trong \\((1,4)\\).', 'Cần \\(P(1)=P(4)=m-4>0\\) và \\(P(5/2)=m-25/4<0\\).', 'Kết hợp được \\(4<m<25/4\\).'],
    tags: ['vị trí nghiệm', 'parabol', 'Olympic']
  }),
  problem(topic, {
    content: 'Có bao nhiêu giá trị thực của \\(m\\) để phương trình \\(\\dfrac1{x-1}+\\dfrac1{x+1}=m\\) có đúng một nghiệm thực?',
    correct: '1', distractors: ['0', '2', '3'],
    insight: 'Trường hợp hệ số bậc hai bằng không phải được tách trước; dùng biệt thức ngay sẽ bỏ sót.',
    reasoning: ['Điều kiện \\(x\\ne\\pm1\\); quy đồng được \\(mx^2-2x-m=0\\).', 'Nếu \\(m=0\\), phương trình còn \\(-2x=0\\), có đúng một nghiệm hợp lệ.', 'Nếu \\(m\\ne0\\), biệt thức \\(4+4m^2>0\\), có hai nghiệm và không nghiệm nào bằng \\(\\pm1\\).', 'Chỉ có một giá trị tham số là \\(m=0\\).'],
    tags: ['tham số', 'suy biến', 'Olympic']
  }),
  problem(topic, {
    content: 'Đa thức đơn thức đầu bậc \\(4\\) có các nghiệm \\(a,b,1/a,1/b\\). Biết \\(a+b+1/a+1/b=6\\) và \\(ab+1/(ab)=3\\). Hệ số của \\(x^2\\) bằng',
    correct: '\\dfrac{51}5', distractors: ['8', '9', '\\dfrac{41}5'],
    insight: 'Hệ số bậc hai là tổng tích từng cặp; phần còn thiếu được suy ra từ hai điều kiện đối xứng lồng nhau.',
    reasoning: ['Đặt \\(p=ab,s=a+b\\). Điều kiện đầu cho \\(s(p+1)/p=6\\).', 'Từ \\(p+1/p=3\\) suy ra \\((p+1)^2/p=5\\), nên \\(s^2/p=36/5\\).', 'Do đó \\(a/b+b/a=s^2/p-2=26/5\\).', 'Tổng các tích đôi bằng \\(ab+1/(ab)+2+a/b+b/a=51/5\\).'],
    tags: ['đa thức đối xứng', 'hệ số', 'Olympic']
  })
];
