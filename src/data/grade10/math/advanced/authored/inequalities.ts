import { problem } from './helpers';

const topic = 'math10-adv-inequalities';

export const inequalityProblems = [
  problem(topic, {
    content: 'Với \\(x,y>0\\), \\(x+y=10\\). Giá trị nhỏ nhất của \\(x^2+y^2\\) là',
    correct: '50', distractors: ['25', '80', '100'], insight: 'Bình phương tổng không vượt quá hai lần tổng bình phương.',
    reasoning: ['Từ \\((x-y)^2\\ge0\\) suy ra \\(x^2+y^2\\ge2xy\\).', 'Do đó \\((x+y)^2\\le2(x^2+y^2)\\).', 'Suy ra \\(x^2+y^2\\ge50\\), dấu bằng khi \\(x=y=5\\).'], tags: ['Cauchy', 'dấu bằng']
  }),
  problem(topic, {
    content: 'Cho \\(x,y>0\\), \\(x+y=12\\). Giá trị lớn nhất của \\(xy\\) bằng',
    correct: '36', distractors: ['24', '48', '144'], insight: 'Tích lớn nhất khi hai số dương có tổng cố định bằng nhau.',
    reasoning: ['AM–GM cho \\((x+y)/2\\ge\\sqrt{xy}\\).', 'Suy ra \\(xy\\le(12/2)^2=36\\).', 'Dấu bằng đạt tại \\(x=y=6\\).'], tags: ['AM-GM', 'cực đại tích']
  }),
  problem(topic, {
    content: 'Với \\(x,y,z>0\\), \\(x+y+z=9\\). Giá trị lớn nhất của \\(xyz\\) là',
    correct: '27', distractors: ['9', '18', '81'], insight: 'AM–GM ba biến xác định đồng thời cận trên và trường hợp đạt dấu bằng.',
    reasoning: ['Ta có \\((x+y+z)/3\\ge\\sqrt[3]{xyz}\\).', 'Vì tổng bằng \\(9\\), suy ra \\(xyz\\le3^3\\).', 'Dấu bằng khi \\(x=y=z=3\\), nên cực đại là \\(27\\).'], tags: ['AM-GM ba biến', 'cực đại']
  }),
  problem(topic, {
    content: 'Giá trị nhỏ nhất của \\(\\left(x+\\dfrac1x\\right)^2\\), với \\(x>0\\), là',
    correct: '4', distractors: ['1', '2', '8'], insight: 'Đánh giá biểu thức bên trong trước rồi bình phương vì nó luôn dương.',
    reasoning: ['AM–GM cho \\(x+1/x\\ge2\\).', 'Hai vế không âm nên được phép bình phương.', 'Giá trị nhỏ nhất là \\(4\\), đạt tại \\(x=1\\).'], tags: ['AM-GM', 'bình phương']
  }),
  problem(topic, {
    content: 'Ba số thực \\(x,y,z\\) có tổng bằng \\(6\\). Giá trị nhỏ nhất của \\(x^2+y^2+z^2\\) là',
    correct: '12', distractors: ['6', '18', '36'], insight: 'Cauchy vẫn áp dụng cho số thực và dấu bằng khi ba số bằng nhau.',
    reasoning: ['Cauchy: \\((x+y+z)^2\\le3(x^2+y^2+z^2)\\).', 'Thay tổng bằng \\(6\\) được tổng bình phương ít nhất \\(12\\).', 'Dấu bằng tại \\(x=y=z=2\\).'], tags: ['Cauchy', 'ba biến']
  }),
  problem(topic, {
    content: 'Với \\(1\\le x\\le5\\), giá trị lớn nhất của \\((x-1)(5-x)\\) là',
    correct: '4', distractors: ['2', '5', '8'], insight: 'Hai thừa số không âm có tổng cố định bằng \\(4\\).',
    reasoning: ['Đặt \\(a=x-1,b=5-x\\), khi đó \\(a,b\\ge0\\) và \\(a+b=4\\).', 'Tích \\(ab\\le((a+b)/2)^2=4\\).', 'Dấu bằng khi \\(a=b=2\\), tương ứng \\(x=3\\).'], tags: ['đổi biến', 'AM-GM']
  }),
  problem(topic, {
    content: 'Cho \\(x,y>0\\), \\(xy=16\\). Giá trị nhỏ nhất của \\((x+1)(y+1)\\) là',
    correct: '25', distractors: ['17', '24', '32'], insight: 'Khai triển để phần biến đổi duy nhất còn lại là tổng \\(x+y\\).',
    reasoning: ['Có \\((x+1)(y+1)=xy+x+y+1=17+x+y\\).', 'Do \\(xy=16\\), AM–GM cho \\(x+y\\ge8\\).', 'Cực tiểu bằng \\(25\\), đạt tại \\(x=y=4\\).'], tags: ['AM-GM', 'khai triển']
  }),
  problem(topic, {
    content: 'Với \\(x,y>0\\), \\(x+y=6\\). Giá trị nhỏ nhất của \\(\\dfrac{x^2}{y}+\\dfrac{y^2}{x}\\) là',
    correct: '6', distractors: ['3', '12', '18'], insight: 'Quy đồng và biểu diễn tổng lập phương theo tổng–tích để tối ưu theo \\(xy\\).',
    reasoning: ['Biểu thức bằng \\((x^3+y^3)/(xy)\\).', 'Đặt \\(p=xy\\le9\\); tử số \\(=216-18p\\).', 'Biểu thức \\(=216/p-18\\ge24-18=6\\), đạt khi \\(p=9\\).'], tags: ['biểu thức đối xứng', 'AM-GM']
  }),
  problem(topic, {
    content: 'Cho \\(x,y>0\\), \\(x+y=3\\). Giá trị nhỏ nhất của \\(\\dfrac1x+\\dfrac4y\\) là',
    correct: '3', distractors: ['2', '4', '9'], insight: 'Dùng bất đẳng thức Cauchy Engel với các tử số là bình phương \\(1^2,2^2\\).',
    reasoning: ['Cauchy Engel: \\(1/x+4/y\\ge(1+2)^2/(x+y)\\).', 'Thay \\(x+y=3\\) được cận dưới bằng \\(3\\).', 'Dấu bằng khi \\(x:y=1:2\\), tức \\(x=1,y=2\\).'], tags: ['Cauchy Engel', 'phân thức']
  }),
  problem(topic, {
    content: 'Với \\(x,y,z>0\\), giá trị nhỏ nhất của \\(\\dfrac{x}{y+z}+\\dfrac{y}{z+x}+\\dfrac{z}{x+y}\\) là',
    correct: '\\dfrac32', distractors: ['1', '2', '3'], insight: 'Bất đẳng thức Nesbitt được suy ra trực tiếp bằng Cauchy Engel.',
    reasoning: ['Viết tổng dưới dạng \\(\\sum x^2/(xy+xz)\\).', 'Cauchy cho tổng không nhỏ hơn \\((x+y+z)^2/[2(xy+yz+zx)]\\).', 'Vì \\((x+y+z)^2\\ge3(xy+yz+zx)\\), cận dưới là \\(3/2\\).'], tags: ['Nesbitt', 'Cauchy']
  }),
  problem(topic, {
    content: 'Với \\(x+y=5\\), giá trị nhỏ nhất của \\(x^2+4y^2\\) bằng',
    correct: '20', distractors: ['10', '25', '40'], insight: 'Tách tổng tuyến tính thành tích vô hướng phù hợp với các hệ số bình phương.',
    reasoning: ['Cauchy: \\((x+y)^2\\le(x^2+4y^2)(1+1/4)\\).', 'Suy ra \\(x^2+4y^2\\ge25/(5/4)=20\\).', 'Dấu bằng khi \\(x=4y\\); cùng tổng \\(5\\) cho \\((x,y)=(4,1)\\).'], tags: ['Cauchy có trọng số', 'cực trị']
  }),
  problem(topic, {
    content: 'Cho \\(x,y>0\\), \\(xy=12\\). Giá trị nhỏ nhất của \\(x+y\\) là',
    correct: '4\\sqrt3', distractors: ['2\\sqrt3', '6', '12'], insight: 'Tổng nhỏ nhất của hai số dương có tích cố định xảy ra khi chúng bằng nhau.',
    reasoning: ['AM–GM cho \\(x+y\\ge2\\sqrt{xy}\\).', 'Thay \\(xy=12\\) được \\(x+y\\ge2\\sqrt{12}=4\\sqrt3\\).', 'Dấu bằng khi \\(x=y=2\\sqrt3\\).'], tags: ['AM-GM', 'tích cố định']
  }),
  problem(topic, {
    content: 'Với \\(x,y,z>0\\), giá trị nhỏ nhất của \\((x+y+z)\\left(\\dfrac1x+\\dfrac1y+\\dfrac1z\\right)\\) là',
    correct: '9', distractors: ['3', '6', '12'], insight: 'Đây là tích Cauchy giữa ba số và ba nghịch đảo tương ứng.',
    reasoning: ['Cauchy Schwarz cho tích không nhỏ hơn \\((\\sqrt{x/x}+\\sqrt{y/y}+\\sqrt{z/z})^2\\).', 'Tổng trong ngoặc bằng \\(3\\).', 'Cận dưới là \\(9\\), đạt khi \\(x=y=z\\).'], tags: ['Cauchy Schwarz', 'nghịch đảo']
  }),
  problem(topic, {
    content: 'Với \\(x,y>0\\), \\(2x+y=12\\). Giá trị lớn nhất của \\(x^2y\\) là',
    correct: '64', distractors: ['32', '48', '96'], insight: 'Số mũ \\(2,1\\) quyết định tỉ lệ dấu bằng; chia \\(2x\\) thành hai phần bằng nhau.',
    reasoning: ['Viết \\(12=x+x+y\\).', 'AM–GM cho \\(x+x+y\\ge3\\sqrt[3]{x^2y}\\).', 'Suy ra \\(x^2y\\le4^3=64\\), đạt khi \\(x=y=4\\).'], tags: ['AM-GM có trọng số', 'tích lũy thừa']
  }),
  problem(topic, {
    content: 'Với \\(x>0\\), giá trị nhỏ nhất của \\(\\dfrac{x^2+1}{x+1}\\) là',
    correct: '2\\sqrt2-2', distractors: ['\\sqrt2', '2-\\sqrt2', '1'], insight: 'Đổi biến \\(t=x+1>1\\) để biểu thức trở thành \\(t+2/t-2\\).',
    reasoning: ['Chia đa thức: \\((x^2+1)/(x+1)=x-1+2/(x+1)\\).', 'Đặt \\(t=x+1>1\\), biểu thức là \\(t+2/t-2\\).', 'AM–GM cho \\(t+2/t\\ge2\\sqrt2\\), đạt tại \\(t=\\sqrt2\\).'], tags: ['phân thức', 'đổi biến']
  }),
  problem(topic, {
    content: 'Với \\(x,y\\ge2\\), \\(x+y=10\\). Giá trị lớn nhất của \\((x-y)^2\\) là',
    correct: '36', distractors: ['16', '32', '64'], insight: 'Giới hạn dưới của từng biến biến miền thành một đoạn kín; hiệu lớn nhất ở biên.',
    reasoning: ['Từ \\(y=10-x\\) và \\(x,y\\ge2\\), suy ra \\(2\\le x\\le8\\).', 'Khi đó \\(x-y=2x-10\\), nhận giá trị trong \\([-6,6]\\).', 'Bình phương lớn nhất bằng \\(36\\), đạt tại hai đầu đoạn.'], tags: ['điều kiện biên', 'cực đại']
  }),
  problem(topic, {
    content: 'Tam thức \\(x^2-2mx+m+3\\) không âm với mọi \\(x\\in\\mathbb R\\). Độ dài khoảng giá trị của \\(m\\) là',
    correct: '\\sqrt{13}', distractors: ['\\sqrt{12}', '13', '\\dfrac{\\sqrt{13}}2'], insight: 'Tam thức có hệ số đầu dương nên không âm mọi nơi khi và chỉ khi biệt thức không dương.',
    reasoning: ['Điều kiện là \\(\\Delta=4m^2-4m-12\\le0\\).', 'Tương đương \\(m^2-m-3\\le0\\), với hai biên \\((1\\pm\\sqrt{13})/2\\).', 'Khoảng nghiệm có độ dài bằng hiệu hai biên, tức \\(\\sqrt{13}\\).'], tags: ['tam thức không âm', 'tham số']
  }),
  problem(topic, {
    content: 'Với \\(x,y>0\\), giá trị nhỏ nhất của \\(\\dfrac xy+\\dfrac yx\\) là',
    correct: '2', distractors: ['1', '4', '\\sqrt2'], insight: 'Hai số hạng dương có tích bằng \\(1\\).',
    reasoning: ['Đặt \\(a=x/y>0\\), khi đó số hạng còn lại là \\(1/a\\).', 'AM–GM cho \\(a+1/a\\ge2\\).', 'Dấu bằng khi \\(a=1\\), tức \\(x=y\\).'], tags: ['AM-GM', 'tỉ số']
  }),
  problem(topic, {
    content: 'Ba số dương \\(x,y,z\\) có tổng bằng \\(12\\). Giá trị lớn nhất có thể của \\(\\min\\{x,y,z\\}\\) là',
    correct: '4', distractors: ['3', '6', '12'], insight: 'Nếu số nhỏ nhất vượt quá trung bình thì tổng bắt buộc vượt quá dữ kiện.',
    reasoning: ['Gọi \\(t=\\min\\{x,y,z\\}\\), khi đó cả ba số đều ít nhất bằng \\(t\\).', 'Suy ra \\(12=x+y+z\\ge3t\\), nên \\(t\\le4\\).', 'Chọn \\(x=y=z=4\\) đạt được cận này.'], tags: ['nguyên lý trung bình', 'max-min']
  }),
  problem(topic, {
    content: 'Giá trị nhỏ nhất của \\(|x-1|+|x-4|+|x-7|\\) là',
    correct: '6', distractors: ['3', '7', '9'], insight: 'Tổng khoảng cách đến ba điểm đạt nhỏ nhất tại trung vị của ba điểm đó.',
    reasoning: ['Điểm trung vị của \\(1,4,7\\) là \\(4\\).', 'Dịch \\(x\\) khỏi \\(4\\) làm ít nhất hai khoảng cách tăng tổng cộng không ít hơn phần có thể giảm.', 'Tại \\(x=4\\), tổng bằng \\(3+0+3=6\\).'], tags: ['trung vị', 'khoảng cách', 'Olympic']
  }),
  problem(topic, {
    content: 'Với \\(x,y,z>0\\), \\(x+y+z=12\\). Giá trị lớn nhất của \\(xy^2z^3\\) là',
    correct: '6912', distractors: ['3456', '5184', '13824'], insight: 'Dấu bằng của AM–GM có trọng số buộc tỉ lệ \\(x:y:z=1:2:3\\).',
    reasoning: ['Tổng số mũ là \\(6\\); tỉ lệ tối ưu là \\(x:y:z=1:2:3\\).', 'Từ tổng \\(12\\), suy ra \\((x,y,z)=(2,4,6)\\).', 'Thay vào tích được \\(2\\cdot4^2\\cdot6^3=6912\\).'], tags: ['AM-GM có trọng số', 'Olympic']
  }),
  problem(topic, {
    content: 'Với \\(x,y,z>0\\), \\(x+y+z=1\\). Giá trị nhỏ nhất của \\(\\dfrac{x}{1-x}+\\dfrac{y}{1-y}+\\dfrac{z}{1-z}\\) là',
    correct: '\\dfrac32', distractors: ['1', '2', '3'], insight: 'Thay \\(1-x=y+z\\) để nhận ra đúng cấu trúc Nesbitt.',
    reasoning: ['Do tổng bằng \\(1\\), ta có \\(1-x=y+z\\) và tương tự.', 'Biểu thức trở thành \\(\\sum x/(y+z)\\).', 'Áp dụng Nesbitt được cận dưới \\(3/2\\), đạt tại \\(x=y=z=1/3\\).'], tags: ['Nesbitt', 'biến đổi điều kiện', 'Olympic']
  }),
  problem(topic, {
    content: 'Với \\(x^2+y^2=1\\), giá trị lớn nhất của \\(x+y\\) là',
    correct: '\\sqrt2', distractors: ['1', '2', '\\dfrac{\\sqrt2}2'], insight: 'Dùng Cauchy hoặc hiểu hình học: tối ưu tích vô hướng trên đường tròn đơn vị.',
    reasoning: ['Cauchy cho \\((x+y)^2\\le(1^2+1^2)(x^2+y^2)=2\\).', 'Suy ra \\(x+y\\le\\sqrt2\\).', 'Dấu bằng xảy ra khi \\(x=y=1/\\sqrt2\\).'], tags: ['Cauchy', 'đường tròn', 'Olympic']
  }),
  problem(topic, {
    content: 'Với \\(x,y,z>0\\), \\(xyz=1\\). Giá trị nhỏ nhất của \\(\\dfrac{(x+y+z)^2}{xy+yz+zx}\\) là',
    correct: '3', distractors: ['1', '2', '4'], insight: 'Điều kiện tích chỉ bảo đảm điểm dấu bằng tồn tại; cận dưới đến từ \\(x^2+y^2+z^2\\ge xy+yz+zx\\).',
    reasoning: ['Khai triển tử: \\((x+y+z)^2=x^2+y^2+z^2+2q\\), với \\(q=xy+yz+zx\\).', 'Ta có \\(x^2+y^2+z^2\\ge q\\).', 'Vì vậy tỉ số không nhỏ hơn \\(3q/q=3\\).', 'Dấu bằng tại \\(x=y=z=1\\), phù hợp \\(xyz=1\\).'], tags: ['bất đẳng thức ba biến', 'Olympic']
  })
];
