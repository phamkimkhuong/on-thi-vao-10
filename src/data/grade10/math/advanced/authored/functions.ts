import { problem, table } from './helpers';

const topic = 'math10-adv-functions';

export const functionProblems = [
  problem(topic, {
    content: 'Tập xác định của hàm số \\(f(x)=\\dfrac{\\sqrt{2x-1}}{x-3}\\) là',
    correct: '\\left[\\dfrac12;3\\right)\\cup(3;+\\infty)', distractors: ['\\left[\\dfrac12;+\\infty\\right)', '(3;+\\infty)', '\\left(\\dfrac12;3\\right)'],
    insight: 'Điều kiện căn thức và điều kiện mẫu khác không phải được lấy giao.',
    reasoning: ['Căn xác định khi \\(2x-1\\ge0\\), tức \\(x\\ge1/2\\).', 'Mẫu khác không yêu cầu \\(x\\ne3\\).', 'Loại điểm \\(3\\) khỏi nửa khoảng ban đầu để có tập xác định.'],
    tags: ['tập xác định', 'căn thức']
  }),
  problem(topic, {
    content: 'Tập giá trị của \\(y=-2x^2+4x+1\\) trên đoạn \\([0;3]\\) là',
    correct: '[-5;3]', distractors: ['[1;3]', '[-5;1]', '(-\\infty;3]'],
    insight: 'So sánh giá trị tại đỉnh nằm trong đoạn với hai đầu mút.',
    reasoning: ['Viết \\(y=-2(x-1)^2+3\\), nên đỉnh cho giá trị lớn nhất \\(3\\).', 'Tại \\(x=0\\), \\(y=1\\); tại \\(x=3\\), \\(y=-5\\).', 'Hàm liên tục nên nhận mọi giá trị từ \\(-5\\) đến \\(3\\).'],
    tags: ['parabol', 'giá trị lớn nhất nhỏ nhất']
  }),
  problem(topic, {
    content: 'Parabol \\(y=x^2+bx+c\\) có đỉnh \\(I(2;-3)\\). Giá trị \\(b+c\\) bằng',
    correct: '-3', distractors: ['-5', '-1', '3'],
    insight: 'Hoành độ đỉnh xác định hệ số \\(b\\), sau đó tung độ đỉnh xác định \\(c\\).',
    reasoning: ['Hoành độ đỉnh \\(-b/2=2\\), suy ra \\(b=-4\\).', 'Thay \\(x=2,y=-3\\): \\(4-8+c=-3\\), nên \\(c=1\\).', 'Vậy \\(b+c=-3\\).'],
    tags: ['parabol', 'xác định hàm số']
  }),
  problem(topic, {
    content: 'Đồ thị \\(y=x^2-4x+3\\) và đường thẳng \\(y=x-1\\) có bao nhiêu giao điểm?',
    correct: '2', distractors: ['0', '1', '3'],
    insight: 'Số giao điểm là số nghiệm thực phân biệt của phương trình hoành độ giao điểm.',
    reasoning: ['Cho hai biểu thức bằng nhau: \\(x^2-4x+3=x-1\\).', 'Rút gọn thành \\(x^2-5x+4=0\\).', 'Phương trình có hai nghiệm \\(1,4\\), nên có hai giao điểm.'],
    tags: ['giao điểm', 'đồ thị']
  }),
  problem(topic, {
    content: 'Phương trình \\(|x^2-4|=3\\) có bao nhiêu nghiệm thực?',
    correct: '4', distractors: ['1', '2', '3'],
    insight: 'Tách trị tuyệt đối thành hai mức của \\(x^2\\), rồi đếm nghiệm phân biệt.',
    reasoning: ['Ta có \\(x^2-4=3\\) hoặc \\(x^2-4=-3\\).', 'Suy ra \\(x^2=7\\) hoặc \\(x^2=1\\).', 'Mỗi mức dương cho hai nghiệm, tổng cộng bốn nghiệm.'],
    tags: ['giá trị tuyệt đối', 'đếm nghiệm']
  }),
  problem(topic, {
    content: 'Bảng giá trị thuộc một hàm bậc hai \\(f(x)=ax^2+bx+c\\). Giá trị \\(f(3)\\) bằng',
    correct: '10', distractors: ['8', '9', '12'],
    insight: 'Ba điểm xác định hàm bậc hai; ở đây sai phân cấp hai giúp tính nhanh giá trị kế tiếp.',
    reasoning: ['Dãy giá trị tại \\(x=0,1,2\\) là \\(1,2,5\\).', 'Sai phân đầu là \\(1,3\\), nên sai phân cấp hai bằng \\(2\\).', 'Sai phân kế tiếp bằng \\(5\\), do đó \\(f(3)=5+5=10\\).'],
    tags: ['bảng biến thiên rời rạc', 'nội suy'],
    stimulus: table('math10-func-table-1', 'Bảng giá trị hàm bậc hai', 'Các giá trị được đo tại ba hoành độ liên tiếp.', 'Dữ kiện', [{ key: 'x', label: 'x' }, { key: 'fx', label: 'f(x)' }], [{ x: 0, fx: 1 }, { x: 1, fx: 2 }, { x: 2, fx: 5 }])
  }),
  problem(topic, {
    content: 'Hàm \\(f(x)=\\begin{cases}\\dfrac{x^2-1}{x-1}&x\\ne1\\\\a&x=1\\end{cases}\\) liên tục tại \\(x=1\\). Khi đó \\(a\\) bằng',
    correct: '2', distractors: ['0', '1', '-2'],
    insight: 'Rút gọn biểu thức ở nhánh lân cận rồi khớp giá trị giới hạn với giá trị tại điểm.',
    reasoning: ['Với \\(x\\ne1\\), \\((x^2-1)/(x-1)=x+1\\).', 'Khi \\(x\\) tiến đến \\(1\\), giá trị tiến đến \\(2\\).', 'Để không bị đứt tại điểm đó phải chọn \\(a=2\\).'],
    tags: ['hàm từng đoạn', 'liên tục trực quan']
  }),
  problem(topic, {
    content: 'Đường thẳng \\(y=m\\) tiếp xúc với parabol \\(y=x^2-4x+5\\). Giá trị \\(m\\) bằng',
    correct: '1', distractors: ['-1', '4', '5'],
    insight: 'Đường thẳng ngang tiếp xúc tại đỉnh của parabol.',
    reasoning: ['Hoàn thành bình phương: \\(y=(x-2)^2+1\\).', 'Giá trị nhỏ nhất của parabol là \\(1\\) tại \\(x=2\\).', 'Vì vậy đường ngang tiếp xúc có phương trình \\(y=1\\).'],
    tags: ['tiếp xúc', 'đỉnh parabol']
  }),
  problem(topic, {
    content: 'Giá trị lớn nhất của \\(f(x)=x(6-x)\\) trên \\([1;5]\\) bằng',
    correct: '9', distractors: ['5', '8', '10'],
    insight: 'Biến đổi tích thành một parabol quay xuống có đỉnh nằm trong đoạn.',
    reasoning: ['Viết \\(f(x)=-(x-3)^2+9\\).', 'Đỉnh \\(x=3\\) thuộc đoạn \\([1,5]\\).', 'Do đó giá trị lớn nhất là \\(9\\).'],
    tags: ['cực trị', 'hoàn thành bình phương']
  }),
  problem(topic, {
    content: 'Hàm bậc nhất \\(f(x)=ax+b\\), với \\(a>0\\), thỏa \\(f(f(x))=4x+3\\) với mọi \\(x\\). Tính \\(a+b\\).',
    correct: '3', distractors: ['1', '2', '4'],
    insight: 'So sánh hệ số sau khi hợp hai lần hàm bậc nhất.',
    reasoning: ['Ta có \\(f(f(x))=a^2x+b(a+1)\\).', 'So sánh hệ số: \\(a^2=4\\); do \\(a>0\\) nên \\(a=2\\).', 'Từ \\(3b=3\\) được \\(b=1\\), vậy \\(a+b=3\\).'],
    tags: ['hàm hợp', 'hàm bậc nhất']
  }),
  problem(topic, {
    content: 'Phương trình \\(\\sqrt{x+2}=x\\) có bao nhiêu nghiệm thực?',
    correct: '1', distractors: ['0', '2', '3'],
    insight: 'Bình phương chỉ tương đương sau khi thêm điều kiện vế phải không âm.',
    reasoning: ['Điều kiện là \\(x\\ge0\\).', 'Bình phương được \\(x^2-x-2=0\\), có nghiệm \\(2,-1\\).', 'Chỉ \\(x=2\\) thỏa điều kiện ban đầu.'],
    tags: ['phương trình căn', 'nghiệm ngoại lai']
  }),
  problem(topic, {
    content: 'Giá trị nhỏ nhất của \\(|2x-1|+|x+2|\\) là',
    correct: '\\dfrac52', distractors: ['2', '3', '\\dfrac72'],
    insight: 'Chia trục số tại hai điểm đổi dấu; hệ số lớn hơn khiến điểm cân bằng nằm tại \\(x=1/2\\).',
    reasoning: ['Hai mốc đổi dấu là \\(-2\\) và \\(1/2\\).', 'Trên đoạn giữa, biểu thức bằng \\(3-x\\), giảm đến \\(x=1/2\\).', 'Ngoài đoạn biểu thức tăng ra hai phía; giá trị tại \\(1/2\\) là \\(5/2\\).'],
    tags: ['giá trị tuyệt đối', 'cực trị']
  }),
  problem(topic, {
    content: 'Tổng các giá trị \\(m\\) để phương trình \\(x^2-2mx+m+2=0\\) có nghiệm kép bằng',
    correct: '1', distractors: ['-2', '-1', '2'],
    insight: 'Nghiệm kép tương đương biệt thức bằng không; phương trình theo tham số có thể có nhiều nghiệm.',
    reasoning: ['Đặt \\(\\Delta=4m^2-4(m+2)=0\\).', 'Suy ra \\(m^2-m-2=0\\), nên \\(m=2\\) hoặc \\(m=-1\\).', 'Tổng hai giá trị là \\(1\\).'],
    tags: ['tham số', 'nghiệm kép']
  }),
  problem(topic, {
    content: 'Tập giá trị của \\(f(x)=\\dfrac{x^2+1}{x^2+2}\\) là',
    correct: '\\left[\\dfrac12;1\\right)', distractors: ['(0;1)', '\\left(\\dfrac12;1\\right]', '[1;2)'],
    insight: 'Đặt \\(t=x^2\\ge0\\) hoặc viết hàm thành \\(1-1/(x^2+2)\\).',
    reasoning: ['Ta có \\(f(x)=1-1/(x^2+2)\\).', 'Vì \\(x^2+2\\ge2\\), nên \\(0<1/(x^2+2)\\le1/2\\).', 'Suy ra \\(1/2\\le f(x)<1\\), và cận dưới đạt tại \\(x=0\\).'],
    tags: ['tập giá trị', 'phân thức']
  }),
  problem(topic, {
    content: 'Điểm \\(M(x;x^2)\\) chạy trên parabol \\(y=x^2\\). Khoảng cách nhỏ nhất từ \\(M\\) đến \\(A(0;1)\\) bằng',
    correct: '\\dfrac{\\sqrt3}2', distractors: ['\\dfrac12', '1', '\\sqrt3'],
    insight: 'Tối ưu bình phương khoảng cách rồi đặt \\(t=x^2\\ge0\\).',
    reasoning: ['Có \\(AM^2=x^2+(x^2-1)^2\\).', 'Đặt \\(t=x^2\\ge0\\), được \\(AM^2=t^2-t+1=(t-1/2)^2+3/4\\).', 'Giá trị nhỏ nhất của khoảng cách là \\(\\sqrt{3/4}=\\sqrt3/2\\).'],
    tags: ['khoảng cách', 'parabol', 'cực trị']
  }),
  problem(topic, {
    content: 'Hai nghiệm của \\(x^2-mx-1=0\\) đều thuộc khoảng \\((-2;2)\\). Điều kiện của \\(m\\) là',
    correct: '-\\dfrac32<m<\\dfrac32', distractors: ['-2<m<2', 'm>\\dfrac32', 'm< -\\dfrac32'],
    insight: 'Hai nghiệm luôn trái dấu; kiểm tra dấu parabol tại hai đầu khoảng để giữ chúng bên trong.',
    reasoning: ['Tích hai nghiệm bằng \\(-1\\), nên một nghiệm âm và một nghiệm dương.', 'Để nghiệm âm lớn hơn \\(-2\\), cần \\(P(-2)=3+2m>0\\).', 'Để nghiệm dương nhỏ hơn \\(2\\), cần \\(P(2)=3-2m>0\\).', 'Kết hợp được \\(-3/2<m<3/2\\).'],
    tags: ['vị trí nghiệm', 'tham số']
  }),
  problem(topic, {
    content: 'Có bao nhiêu giá trị thực \\(k\\) để phương trình \\(|x-1|+|x+3|=k\\) có đúng một nghiệm?',
    correct: '0', distractors: ['1', '2', '3'],
    insight: 'Tổng khoảng cách đến hai điểm cố định có đoạn đáy nằm ngang, không có mức cắt đúng một điểm.',
    reasoning: ['Giá trị nhỏ nhất bằng khoảng cách giữa \\(-3\\) và \\(1\\), tức \\(4\\).', 'Với \\(k<4\\) không có nghiệm; \\(k=4\\) có cả đoạn \\([-3,1]\\).', 'Với \\(k>4\\), đường mức cắt đồ thị tại hai điểm.', 'Không có giá trị \\(k\\) nào cho đúng một nghiệm.'],
    tags: ['đồ thị trị tuyệt đối', 'số nghiệm']
  }),
  problem(topic, {
    content: 'Đồ thị hai hàm \\(y=x^2+2x\\) và \\(y=-x^2+mx+3\\) tiếp xúc nhau. Có bao nhiêu giá trị thực của \\(m\\)?',
    correct: '0', distractors: ['1', '2', '3'],
    insight: 'Tiếp xúc yêu cầu phương trình giao điểm có nghiệm kép; biệt thức thu được luôn dương.',
    reasoning: ['Phương trình giao điểm là \\(2x^2+(2-m)x-3=0\\).', 'Tiếp xúc cần \\(\\Delta=(2-m)^2+24=0\\).', 'Vế trái luôn dương với mọi \\(m\\) thực, nên không có giá trị nào.'],
    tags: ['tiếp xúc hai parabol', 'biệt thức']
  }),
  problem(topic, {
    content: 'Tập nghiệm của phương trình \\(\\lfloor x\\rfloor+\\lfloor2x\\rfloor=7\\) có độ dài bằng',
    correct: '\\dfrac12', distractors: ['0', '1', '\\dfrac32'],
    insight: 'Tách phần nguyên \\(x=n+r\\), với \\(0\\le r<1\\), để biến phương trình thành điều kiện rời rạc.',
    reasoning: ['Đặt \\(x=n+r\\), \\(n\\in\\mathbb Z,0\\le r<1\\).', 'Phương trình trở thành \\(3n+\\lfloor2r\\rfloor=7\\).', 'Chỉ có \\(n=2,\\lfloor2r\\rfloor=1\\), tức \\(1/2\\le r<1\\).', 'Tập nghiệm là \\([5/2,3)\\), có độ dài \\(1/2\\).'],
    tags: ['hàm phần nguyên', 'Olympic']
  }),
  problem(topic, {
    content: 'Phương trình \\(x^2-2|x|-3=0\\) có bao nhiêu nghiệm thực phân biệt?',
    correct: '2', distractors: ['1', '3', '4'],
    insight: 'Đặt \\(t=|x|\\ge0\\), nhưng mỗi nghiệm dương của \\(t\\) tạo hai nghiệm đối nhau của \\(x\\).',
    reasoning: ['Đặt \\(t=|x|\\), ta có \\(t^2-2t-3=0\\).', 'Phương trình theo \\(t\\) cho \\(t=3\\) hoặc \\(t=-1\\); loại \\(-1\\).', '\\(|x|=3\\) cho \\(x=\\pm3\\).', 'Vậy có hai nghiệm thực phân biệt.'],
    tags: ['ẩn phụ', 'giá trị tuyệt đối', 'Olympic']
  }),
  problem(topic, {
    content: 'Đặt \\(f(x)=|x^2-5|\\). Phương trình \\(f(f(x))=4\\) có bao nhiêu nghiệm thực phân biệt?',
    correct: '8', distractors: ['4', '6', '10'],
    insight: 'Giải từ lớp trị tuyệt đối ngoài vào trong và gom các mức \\(x^2\\) trước khi đếm.',
    reasoning: ['Phương trình tương đương \\(|(x^2-5)^2-5|=4\\).', 'Suy ra \\((x^2-5)^2=9\\) hoặc \\((x^2-5)^2=1\\).', 'Các mức thu được là \\(x^2\\in\\{8,2,6,4\\}\\), đều dương và khác nhau.', 'Mỗi mức cho hai nghiệm đối nhau, tổng cộng tám nghiệm.'],
    tags: ['hàm hợp', 'đếm nghiệm', 'Olympic']
  }),
  problem(topic, {
    content: 'Phương trình \\(|x^2-4x+3|=m\\) có bốn nghiệm thực phân biệt. Điều kiện của \\(m\\) là',
    correct: '0<m<1', distractors: ['m>0', 'm\\ge1', '-1<m<0'],
    insight: 'Hai nhánh \\(q(x)=m\\) và \\(q(x)=-m\\) phải đồng thời cho hai nghiệm, không trùng nhau.',
    reasoning: ['Viết \\(x^2-4x+3=(x-2)^2-1\\).', 'Nhánh bằng \\(m\\) luôn cho hai nghiệm khi \\(m>0\\).', 'Nhánh bằng \\(-m\\) cho hai nghiệm phân biệt khi \\(1-m>0\\).', 'Kết hợp và tránh \\(m=0\\) được \\(0<m<1\\).'],
    tags: ['tham số', 'trị tuyệt đối', 'Olympic']
  }),
  problem(topic, {
    content: 'Với \\(a>0\\), số nghiệm của phương trình \\(|x-a|+|x+a|=2a\\) là',
    correct: 'vô\\ số', distractors: ['0', '1', '2'],
    insight: 'Tổng khoảng cách đến \\(-a\\) và \\(a\\) đạt giá trị nhỏ nhất trên cả đoạn nối hai điểm.',
    reasoning: ['Theo bất đẳng thức tam giác, tổng hai khoảng cách luôn ít nhất \\(2a\\).', 'Dấu bằng xảy ra với mọi \\(x\\in[-a,a]\\).', 'Đoạn này chứa vô số số thực.', 'Vì vậy phương trình có vô số nghiệm.'],
    tags: ['khoảng cách trên trục số', 'Olympic']
  }),
  problem(topic, {
    content: 'Phương trình \\(|x-1|=m(x+2)\\) có đúng hai nghiệm thực phân biệt. Điều kiện của \\(m\\) là',
    correct: '0<m<1', distractors: ['m>0', '-1<m<0', 'm\\ge1'],
    insight: 'Hai nhánh tuyến tính phải đồng thời cho nghiệm nằm đúng miền dấu tương ứng.',
    reasoning: ['Với \\(x\\ge1\\), nghiệm là \\(x=(1+2m)/(1-m)\\), hợp lệ khi \\(0\\le m<1\\).', 'Với \\(x<1\\), nghiệm là \\(x=(1-2m)/(1+m)\\), hợp lệ khi \\(m>0\\) hoặc \\(m<-1\\).', 'Để cả hai nhánh cùng cho nghiệm, cần \\(0<m<1\\).', 'Trong khoảng này hai nghiệm thuộc hai miền khác nhau nên chắc chắn phân biệt.'],
    tags: ['tham số', 'hàm trị tuyệt đối', 'Olympic']
  })
];
