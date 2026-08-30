import { diagram, problem } from './helpers';

const topic = 'math10-adv-coordinate';
const reflection = '/assets/math10-advanced/reflection-path.svg';
const doubleReflection = '/assets/math10-advanced/double-reflection-path.svg';

export const coordinateProblems = [
  problem(topic, {
    content: 'Trung điểm của đoạn nối \\(A(2;-1)\\) và \\(B(6;5)\\) là', correct: '(4;2)', distractors: ['(8;4)', '(2;4)', '(4;3)'],
    insight: 'Lấy trung bình cộng riêng từng cặp tọa độ tương ứng.',
    reasoning: ['Hoành độ trung điểm là \\((2+6)/2=4\\).', 'Tung độ trung điểm là \\((-1+5)/2=2\\).', 'Vậy trung điểm là \\((4;2)\\).'], tags: ['trung điểm', 'tọa độ']
  }),
  problem(topic, {
    content: 'Khoảng cách giữa \\(A(1;2)\\) và \\(B(4;6)\\) bằng', correct: '5', distractors: ['4', '6', '7'],
    insight: 'Hiệu tọa độ tạo hai cạnh góc vuông dài \\(3\\) và \\(4\\).',
    reasoning: ['Hiệu hoành độ là \\(3\\), hiệu tung độ là \\(4\\).', 'Do đó \\(AB^2=3^2+4^2=25\\).', 'Suy ra \\(AB=5\\).'], tags: ['khoảng cách', 'Pythagore']
  }),
  problem(topic, {
    content: 'Cho \\(\\vec u=(2;-1)\\), \\(\\vec v=(3;4)\\). Tích vô hướng \\(\\vec u\\cdot\\vec v\\) bằng', correct: '2', distractors: ['-2', '5', '10'],
    insight: 'Nhân rồi cộng các thành phần cùng vị trí.',
    reasoning: ['Dùng \\(\\vec u\\cdot\\vec v=u_xv_x+u_yv_y\\).', 'Thay tọa độ được \\(2\\cdot3+(-1)\\cdot4\\).', 'Kết quả bằng \\(2\\).'], tags: ['tích vô hướng', 'vectơ']
  }),
  problem(topic, {
    content: 'Hai đường thẳng \\(2x-y+1=0\\) và \\(x+my-3=0\\) vuông góc. Giá trị \\(m\\) bằng', correct: '2', distractors: ['-2', '\\dfrac12', '-\\dfrac12'],
    insight: 'Hai đường vuông góc khi hai vectơ pháp tuyến có tích vô hướng bằng không.',
    reasoning: ['Hai vectơ pháp tuyến là \\((2,-1)\\) và \\((1,m)\\).', 'Điều kiện vuông góc: \\(2\\cdot1+(-1)m=0\\).', 'Suy ra \\(m=2\\).'], tags: ['đường thẳng vuông góc', 'pháp tuyến']
  }),
  problem(topic, {
    content: 'Phương trình đường thẳng qua \\(A(1;2)\\) và nhận \\(\\vec n=(3;-4)\\) làm pháp tuyến là', correct: '3x-4y+5=0', distractors: ['3x-4y-5=0', '4x+3y-10=0', '3x+4y-11=0'],
    insight: 'Dùng dạng điểm–pháp tuyến rồi khai triển.',
    reasoning: ['Phương trình là \\(3(x-1)-4(y-2)=0\\).', 'Khai triển: \\(3x-3-4y+8=0\\).', 'Rút gọn được \\(3x-4y+5=0\\).'], tags: ['phương trình đường thẳng', 'pháp tuyến']
  }),
  problem(topic, {
    content: 'Khoảng cách từ \\(M(2;-1)\\) đến đường thẳng \\(3x+4y-12=0\\) bằng', correct: '2', distractors: ['1', '\\dfrac52', '10'],
    insight: 'Thay tọa độ điểm vào biểu thức đường thẳng rồi chia cho độ dài vectơ pháp tuyến.',
    reasoning: ['Tử số là \\(|3\\cdot2+4(-1)-12|=10\\).', 'Mẫu số là \\(\\sqrt{3^2+4^2}=5\\).', 'Khoảng cách bằng \\(10/5=2\\).'], tags: ['khoảng cách điểm đường', 'tọa độ']
  }),
  problem(topic, {
    content: 'Đường tròn tâm \\(I(2;-3)\\), bán kính \\(5\\), có phương trình', correct: '(x-2)^2+(y+3)^2=25', distractors: ['(x+2)^2+(y-3)^2=25', '(x-2)^2+(y-3)^2=5', 'x^2+y^2=25'],
    insight: 'Phương trình tâm–bán kính dùng hiệu tọa độ với tâm và bình phương bán kính.',
    reasoning: ['Dạng chuẩn là \\((x-a)^2+(y-b)^2=R^2\\).', 'Thay \\(a=2,b=-3,R=5\\).', 'Thu được \\((x-2)^2+(y+3)^2=25\\).'], tags: ['đường tròn', 'tâm bán kính']
  }),
  problem(topic, {
    content: 'Đường thẳng nào tiếp xúc với đường tròn \\(x^2+y^2=25\\) tại điểm \\((5;0)\\)?', correct: 'x=5', distractors: ['y=5', 'x+y=5', '5x+y=25'],
    insight: 'Tiếp tuyến vuông góc với bán kính tại tiếp điểm.',
    reasoning: ['Bán kính từ gốc tọa độ đến \\((5,0)\\) nằm ngang.', 'Tiếp tuyến tại đó phải thẳng đứng.', 'Đường thẳng đứng qua điểm có phương trình \\(x=5\\).'], tags: ['tiếp tuyến đường tròn', 'bán kính']
  }),
  problem(topic, {
    content: 'Tâm đường tròn ngoại tiếp tam giác \\(A(0;0),B(6;0),C(0;8)\\) là', correct: '(3;4)', distractors: ['(2;\\frac83)', '(3;3)', '(6;8)'],
    insight: 'Tam giác vuông tại \\(A\\), nên tâm ngoại tiếp là trung điểm cạnh huyền.',
    reasoning: ['Hai vectơ \\(AB,AC\\) vuông góc nên tam giác vuông tại \\(A\\).', 'Cạnh huyền là \\(BC\\).', 'Trung điểm \\(BC\\) là \\(((6+0)/2,(0+8)/2)=(3,4)\\).'], tags: ['tâm ngoại tiếp', 'tam giác vuông']
  }),
  problem(topic, {
    content: 'Trực tâm của tam giác \\(A(0;0),B(4;0),C(1;3)\\) là', correct: '(1;1)', distractors: ['(1;0)', '(2;1)', '(1;2)'],
    insight: 'Một cạnh nằm ngang làm một đường cao thẳng đứng; giao với đường cao thứ hai rất nhanh.',
    reasoning: ['Vì \\(AB\\) nằm ngang, đường cao qua \\(C\\) là \\(x=1\\).', 'Đường \\(AC\\) có hệ số góc \\(3\\), nên đường cao qua \\(B\\) có hệ số góc \\(-1/3\\).', 'Tại \\(x=1\\), đường cao qua \\(B\\) cho \\(y=1\\), nên \\(H(1,1)\\).'], tags: ['trực tâm', 'hệ số góc']
  }),
  problem(topic, {
    content: 'Diện tích tam giác có các đỉnh \\(A(1;1),B(5;1),C(3;4)\\) bằng', correct: '6', distractors: ['4', '8', '12'],
    insight: 'Cạnh \\(AB\\) nằm ngang nên đọc trực tiếp đáy và chiều cao.',
    reasoning: ['Độ dài đáy \\(AB=4\\).', 'Khoảng cách từ \\(C\\) đến đường \\(y=1\\) bằng \\(3\\).', 'Diện tích là \\(\\tfrac12\\cdot4\\cdot3=6\\).'], tags: ['diện tích tọa độ', 'khoảng cách']
  }),
  problem(topic, {
    content: 'Ba điểm \\(A(1;2),B(3;6),C(m;10)\\) thẳng hàng. Giá trị \\(m\\) bằng', correct: '5', distractors: ['4', '6', '7'],
    insight: 'Hai đoạn liên tiếp phải có cùng hệ số góc.',
    reasoning: ['Đường \\(AB\\) có hệ số góc \\((6-2)/(3-1)=2\\).', 'Phương trình qua \\(A\\) là \\(y-2=2(x-1)\\).', 'Cho \\(y=10\\) được \\(x=5\\), nên \\(m=5\\).'], tags: ['thẳng hàng', 'hệ số góc']
  }),
  problem(topic, {
    content: 'Ảnh của điểm \\(A(3;-2)\\) qua phép đối xứng trục \\(Ox\\) là', correct: '(3;2)', distractors: ['(-3;-2)', '(-3;2)', '(2;3)'],
    insight: 'Đối xứng qua \\(Ox\\) giữ hoành độ và đổi dấu tung độ.',
    reasoning: ['Khoảng cách ngang đến trục không thay đổi.', 'Hoành độ vẫn bằng \\(3\\), tung độ \\(-2\\) đổi thành \\(2\\).', 'Ảnh là \\((3,2)\\).'], tags: ['phép đối xứng', 'trục Ox'],
    stimulus: diagram('math10-coordinate-reflect-x', 'Đối xứng qua trục hoành', 'Điểm và ảnh nằm trên đường vuông góc với \\(Ox\\).', reflection, 'Điểm A và ảnh của A đối xứng qua trục Ox')
  }),
  problem(topic, {
    content: 'Ảnh của \\(B(3;-2)\\) qua đường thẳng \\(y=x\\) là', correct: '(-2;3)', distractors: ['(2;-3)', '(-3;2)', '(3;2)'],
    insight: 'Đối xứng qua \\(y=x\\) hoán đổi hoành độ và tung độ.',
    reasoning: ['Phép đối xứng qua đường phân giác thứ nhất đổi \\((x,y)\\) thành \\((y,x)\\).', 'Hoán đổi \\(3\\) và \\(-2\\).', 'Ảnh nhận được là \\((-2,3)\\).'], tags: ['phép đối xứng', 'đường y=x']
  }),
  problem(topic, {
    content: 'Điểm \\(P\\) chạy trên trục \\(Ox\\). Với \\(A(1;3),B(5;2)\\), giá trị nhỏ nhất của \\(AP+PB\\) bằng', correct: '\\sqrt{41}', distractors: ['5', '\\sqrt{17}', '\\sqrt{45}'],
    insight: 'Phản xạ một đầu mút qua trục để duỗi đường gãy thành đoạn thẳng.',
    reasoning: ['Phản xạ \\(B(5,2)\\) qua \\(Ox\\) thành \\(B′(5,-2)\\).', 'Vì \\(P\\in Ox\\), \\(PB=PB′\\), nên \\(AP+PB\\ge AB′\\).', 'Đường thẳng \\(AB′\\) cắt \\(Ox\\), nên dấu bằng đạt được.', 'Tính \\(AB′=\\sqrt{(5-1)^2+(-2-3)^2}=\\sqrt{41}\\).'], tags: ['phản xạ', 'cực trị đường gãy'],
    stimulus: diagram('math10-coordinate-shortest', 'Duỗi đường gãy qua Ox', 'Hai điểm \\(A(1;3),B(5;2)\\) nằm cùng phía trục \\(Ox\\).', reflection, 'Đường gãy APB được duỗi bằng ảnh B phẩy qua Ox')
  }),
  problem(topic, {
    content: 'Trên đường tròn \\(x^2+y^2=25\\), giá trị lớn nhất của \\(2x-y\\) bằng', correct: '5\\sqrt5', distractors: ['5', '10', '25'],
    insight: 'Biểu thức tuyến tính là tích vô hướng với vectơ \\((2,-1)\\).',
    reasoning: ['Cauchy: \\(|2x-y|\\le\\sqrt{2^2+(-1)^2}\\sqrt{x^2+y^2}\\).', 'Vế phải bằng \\(\\sqrt5\\cdot5=5\\sqrt5\\).', 'Có điểm trên đường tròn cùng hướng với \\((2,-1)\\), nên cận đạt được.'], tags: ['tích vô hướng', 'đường tròn']
  }),
  problem(topic, {
    content: 'Giao điểm của hai đường thẳng \\(x+y=5\\) và \\(2x-y=1\\) là', correct: '(2;3)', distractors: ['(3;2)', '(1;4)', '(4;1)'],
    insight: 'Cộng hai phương trình để khử ngay \\(y\\).',
    reasoning: ['Cộng hai phương trình được \\(3x=6\\).', 'Suy ra \\(x=2\\).', 'Thế vào \\(x+y=5\\) cho \\(y=3\\).'], tags: ['giao hai đường', 'hệ phương trình']
  }),
  problem(topic, {
    content: 'Góc giữa hai vectơ \\(\\vec a=(1;2)\\), \\(\\vec b=(2;-1)\\) bằng', correct: '90^\\circ', distractors: ['0^\\circ', '45^\\circ', '60^\\circ'],
    insight: 'Tích vô hướng bằng không chứng tỏ hai vectơ khác không vuông góc.',
    reasoning: ['Tính \\(\\vec a\\cdot\\vec b=1\\cdot2+2(-1)=0\\).', 'Cả hai vectơ đều khác vectơ không.', 'Do đó góc giữa chúng là \\(90^\\circ\\).'], tags: ['góc giữa vectơ', 'vuông góc']
  }),
  problem(topic, {
    content: 'Quỹ tích điểm \\(M(x;y)\\) cách đều \\(A(-2;0)\\) và \\(B(4;0)\\) có phương trình', correct: 'x=1', distractors: ['y=1', 'x=2', 'x+y=1'],
    insight: 'Quỹ tích là đường trung trực của \\(AB\\).',
    reasoning: ['Đoạn \\(AB\\) nằm ngang và có trung điểm \\((1,0)\\).', 'Đường trung trực vuông góc \\(AB\\), nên thẳng đứng.', 'Đường thẳng đứng qua trung điểm có phương trình \\(x=1\\).'], tags: ['quỹ tích', 'đường trung trực']
  }),
  problem(topic, {
    content: 'Tiếp tuyến của đường tròn \\(x^2+y^2=25\\) tại \\(A(3;4)\\) là', correct: '3x+4y=25', distractors: ['4x+3y=25', '3x-4y=25', 'x+y=7'],
    insight: 'Tiếp tuyến tại \\((x_0,y_0)\\) của đường tròn tâm gốc có dạng \\(x_0x+y_0y=R^2\\).',
    reasoning: ['Bán kính \\(OA=(3,4)\\) là vectơ pháp tuyến của tiếp tuyến.', 'Đường thẳng qua \\(A\\) có dạng \\(3(x-3)+4(y-4)=0\\).', 'Rút gọn thành \\(3x+4y=25\\).'], tags: ['tiếp tuyến', 'đường tròn']
  }),
  problem(topic, {
    content: 'Một đường tròn đi qua \\(A(1;0),B(0;1)\\) và có tâm nằm trên đường thẳng \\(x+y=4\\). Bán kính của đường tròn bằng', correct: '\\sqrt5', distractors: ['2', '\\sqrt2', '3'],
    insight: 'Tâm vừa thuộc đường trung trực của \\(AB\\), vừa thuộc đường thẳng đã cho.',
    reasoning: ['Gọi tâm là \\(I(h,k)\\). Điều kiện \\(IA=IB\\) cho \\((h-1)^2+k^2=h^2+(k-1)^2\\).', 'Rút gọn được \\(h=k\\).', 'Kết hợp \\(h+k=4\\) suy ra \\(I(2,2)\\).', 'Bán kính \\(IA=\\sqrt{(2-1)^2+(2-0)^2}=\\sqrt5\\).'], tags: ['tâm đường tròn', 'quỹ tích', 'Olympic']
  }),
  problem(topic, {
    content: 'Trục đẳng phương của hai đường tròn \\(x^2+y^2-4x=0\\) và \\(x^2+y^2+2y-6=0\\) là', correct: '2x+y-3=0', distractors: ['2x-y+3=0', 'x+2y-3=0', '4x+2y+6=0'],
    insight: 'Lấy hiệu hai phương trình đường tròn để triệt tiêu các hạng bậc hai.',
    reasoning: ['Các điểm trên trục đẳng phương có hai công suất bằng nhau.', 'Trừ hai vế: \\(-4x-2y+6=0\\).', 'Chia \\(-2\\) được \\(2x+y-3=0\\).'], tags: ['trục đẳng phương', 'hai đường tròn', 'Olympic']
  }),
  problem(topic, {
    content: 'Hai điểm \\(A(5;2),B(2;5)\\) ở góc phần tư thứ nhất. \\(P\\) thuộc tia \\(Ox\\), \\(Q\\) thuộc tia \\(Oy\\). Giá trị nhỏ nhất của \\(AP+PQ+QB\\) bằng', correct: '7\\sqrt2', distractors: ['7', '\\sqrt{74}', '9\\sqrt2'],
    insight: 'Hai điểm đổi hướng trên hai trục khác nhau cần hai phép phản xạ liên tiếp.',
    reasoning: ['Phản xạ \\(A\\) qua \\(Ox\\) được \\(A′(5,-2)\\); phản xạ \\(B\\) qua \\(Oy\\) được \\(B′(-2,5)\\).', 'Khi đó tổng đường gãy không nhỏ hơn đoạn thẳng \\(A′B′\\).', 'Đường \\(A′B′\\) cắt lần lượt hai tia dương vì \\(5\\cdot5-2\\cdot2>0\\), nên dấu bằng đạt được.', 'Tính \\(A′B′=\\sqrt{7^2+7^2}=7\\sqrt2\\).'], tags: ['hai phép phản xạ', 'cực trị', 'Olympic'],
    stimulus: diagram('math10-coordinate-double-reflection', 'Đường gãy qua hai trục', 'Đường đi từ \\(A\\) chạm \\(Ox\\) tại \\(P\\), chạm \\(Oy\\) tại \\(Q\\), rồi tới \\(B\\).', doubleReflection, 'Đường gãy A P Q B được duỗi bằng hai phép đối xứng')
  }),
  problem(topic, {
    content: 'Đường thẳng qua \\(A(1;2)\\) cắt hai tia dương \\(Ox,Oy\\) lần lượt tại \\(P,Q\\). Giá trị nhỏ nhất của \\(OP+OQ\\) bằng', correct: '3+2\\sqrt2', distractors: ['3+\\sqrt2', '4', '5'],
    insight: 'Dùng dạng đoạn chắn rồi tối ưu tổng hai đoạn chắn dưới một ràng buộc phân thức.',
    reasoning: ['Đặt \\(OP=a,OQ=b>0\\). Vì đường qua \\(A\\), ta có \\(1/a+2/b=1\\).', 'Suy ra \\(b=2a/(a-1)\\), với \\(a>1\\).', 'Đặt \\(t=a-1>0\\), khi đó \\(a+b=3+t+2/t\\).', 'AM–GM cho \\(t+2/t\\ge2\\sqrt2\\), nên giá trị nhỏ nhất là \\(3+2\\sqrt2\\).'], tags: ['dạng đoạn chắn', 'AM-GM', 'Olympic']
  })
];
