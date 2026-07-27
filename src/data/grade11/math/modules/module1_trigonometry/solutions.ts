import type { CourseSolution } from '@/data/schema';

type SolutionSpec = {
  number: number;
  answer: 'A' | 'B' | 'C' | 'D';
  recognition: string;
  calculation: string;
  conclusion: string;
  mistake: string;
  review: string;
};

const s = (
  number: number,
  answer: SolutionSpec['answer'],
  recognition: string,
  calculation: string,
  conclusion: string,
  mistake: string,
  review: string
): SolutionSpec => ({ number, answer, recognition, calculation, conclusion, mistake, review });

const specs: SolutionSpec[] = [
  s(1, 'B', 'Dùng hệ thức $\\sin^2\\alpha+\\cos^2\\alpha=1$ và xét dấu theo góc phần tư.', '$\\cos^2\\alpha=1-\\frac9{25}=\\frac{16}{25}$ nên $|\\cos\\alpha|=\\frac45$.', '$\\alpha$ thuộc góc phần tư II nên $\\cos\\alpha=-\\frac45$.', 'Lấy căn dương mà không xét góc phần tư.', 'Ôn bảng dấu lượng giác trên đường tròn.'),
  s(2, 'A', 'Hai góc cùng tia cuối nếu sai khác một bội của $2\\pi$.', '$\\frac{13\\pi}{6}=2\\pi+\\frac\\pi6$.', 'Góc cần tìm là $\\frac\\pi6$.', 'Trừ $\\pi$ thay vì một vòng $2\\pi$.', 'Ôn số đo tổng quát của góc lượng giác.'),
  s(3, 'B', 'Tách $75^\\circ=45^\\circ+30^\\circ$ rồi dùng công thức cộng.', '$\\cos75^\\circ=\\frac{\\sqrt2}{2}\\frac{\\sqrt3}{2}-\\frac{\\sqrt2}{2}\\frac12$.', 'Suy ra $\\cos75^\\circ=\\frac{\\sqrt6-\\sqrt2}{4}$.', 'Dùng dấu cộng trong công thức cos của tổng.', 'Ôn công thức cộng và các góc đặc biệt.'),
  s(4, 'A', 'Nhận dạng tổng hai cos để dùng công thức tổng thành tích.', '$\\cos a+\\cos b=2\\cos\\frac{a+b}{2}\\cos\\frac{a-b}{2}$.', 'Biểu thức đúng là phương án A.', 'Bỏ hệ số 2 hoặc đổi nhầm cos thành sin.', 'Ôn bốn công thức biến đổi tổng thành tích.'),
  s(5, 'C', 'Hàm tan xác định khi cos của đối số khác 0.', '$\\cos2x\\ne0\\Leftrightarrow2x\\ne\\frac\\pi2+k\\pi$.', 'Vậy $x\\ne\\frac\\pi4+k\\frac\\pi2$, $k\\in\\mathbb Z$.', 'Dùng trực tiếp điểm loại của $\\tan x$ cho $\\tan2x$.', 'Ôn miền xác định của hàm tan.'),
  s(6, 'A', 'Đối chiếu điểm đi qua, tập giá trị, chu kì và chiều biến thiên.', '$\\sin0=0$, hàm sin có tập giá trị $[-1;1]$, chu kì $2\\pi$ và tăng quanh 0.', 'Đồ thị là $y=\\sin x$.', 'Chỉ dựa vào việc đi qua gốc nên nhầm với tan.', 'So sánh bốn đồ thị lượng giác cơ bản.'),
  s(7, 'A', 'Đưa vế phải về một giá trị sin đặc biệt.', '$\\frac12=\\sin\\frac\\pi6$, nên $x=\\frac\\pi6+2k\\pi$ hoặc $x=\\pi-\\frac\\pi6+2k\\pi$.', 'Hai họ nghiệm là $x=\\frac\\pi6+2k\\pi$ hoặc $x=\\frac{5\\pi}{6}+2k\\pi$.', 'Chỉ viết một họ nghiệm.', 'Ôn công thức nghiệm của phương trình sin.'),
  s(8, 'B', 'Đây là phương trình $\\cos u=\\cos\\alpha$ với $u=2x$.', '$2x=\\pm\\frac\\pi3+2k\\pi$.', 'Chia 2 được $x=\\pm\\frac\\pi6+k\\pi$.', 'Quên chia chu kì $2k\\pi$ cho 2.', 'Ôn phương trình cos chứa góc bội.'),
  s(9, 'B', 'Cộng một vòng $2\\pi$ để đưa góc âm về khoảng chuẩn.', '$-\\frac{7\\pi}{6}+2\\pi=\\frac{5\\pi}{6}$.', 'Góc dương nhỏ nhất là $\\frac{5\\pi}{6}$.', 'Đổi dấu góc thay vì cộng $2\\pi$.', 'Ôn góc cùng tia cuối.'),
  s(10, 'A', 'Giảm góc theo modulo $2\\pi=\\frac{8\\pi}{4}$.', '$\\frac{17\\pi}{4}-2\\cdot\\frac{8\\pi}{4}=\\frac\\pi4$.', 'Đại diện trong $[0;2\\pi)$ là $\\frac\\pi4$.', 'Chỉ trừ một lần $2\\pi$ rồi dừng ngoài khoảng.', 'Ôn phép chia lấy dư với góc lượng giác.'),
  s(11, 'D', 'So sánh $\\frac{5\\pi}{3}$ với các mốc phần tư.', '$\\frac{3\\pi}{2}<\\frac{5\\pi}{3}<2\\pi$.', 'Tia cuối nằm ở góc phần tư IV.', 'Nhầm thứ tự $\\frac{3\\pi}{2}$ và $\\frac{5\\pi}{3}$.', 'Ôn các mốc góc phần tư.'),
  s(12, 'C', 'Cộng $2\\pi$ vào góc âm.', '$-\\frac\\pi3+2\\pi=\\frac{5\\pi}{3}$.', 'Góc cùng tia cuối là $\\frac{5\\pi}{3}$.', 'Chọn $\\frac\\pi3$ do bỏ qua hướng quay.', 'Ôn số đo tổng quát $\\alpha+k2\\pi$.'),
  s(13, 'D', 'Trừ các vòng đầy đủ khỏi $\\frac{11\\pi}{2}$.', '$\\frac{11\\pi}{2}-2\\cdot2\\pi=\\frac{3\\pi}{2}$.', 'Góc trong khoảng chuẩn là $\\frac{3\\pi}{2}$.', 'Lấy dư theo $\\pi$ thay vì $2\\pi$.', 'Ôn chuẩn hóa góc lớn.'),
  s(14, 'B', 'Dùng hệ thức cơ bản rồi chọn dấu ở góc phần tư III.', '$\\sin^2\\alpha=1-\\frac{25}{169}=\\frac{144}{169}$.', 'Vì $\\sin\\alpha<0$, suy ra $\\sin\\alpha=-\\frac{12}{13}$.', 'Không xét dấu sau khi lấy căn.', 'Ôn bảng dấu và hệ thức lượng giác cơ bản.'),
  s(15, 'A', 'Cot là nghịch đảo của tan khi hai biểu thức xác định.', '$\\cot\\alpha=\\frac1{\\tan\\alpha}=\\frac1{-3/4}$.', 'Do đó $\\cot\\alpha=-\\frac43$.', 'Giữ nguyên $-\\frac34$ thay vì lấy nghịch đảo.', 'Ôn liên hệ giữa tan và cot.'),
  s(16, 'B', 'Tìm độ lớn của sin và xét dấu ở góc phần tư IV.', '$\\sin^2\\alpha=1-\\frac{144}{169}=\\frac{25}{169}$.', 'Ở phần tư IV, sin âm nên $\\sin\\alpha=-\\frac5{13}$.', 'Chọn sin dương vì cos dương.', 'Ôn dấu lượng giác theo góc phần tư.'),
  s(17, 'B', 'Tan dương ở phần tư III và $|\\tan\\alpha|=1$ cho góc phụ $\\frac\\pi4$.', 'Góc có tia cuối tương ứng $\\frac{5\\pi}{4}$ nên $|\\sin\\alpha|=\\frac{\\sqrt2}{2}$.', 'Ở phần tư III, $\\sin\\alpha=-\\frac{\\sqrt2}{2}$.', 'Cho rằng tan dương thì sin cũng dương.', 'Ôn dấu của sin, cos và tan.'),
  s(18, 'A', 'Dùng hệ thức cơ bản và dấu cos ở phần tư IV.', '$\\cos^2\\alpha=1-\\frac{64}{289}=\\frac{225}{289}$.', 'Cos dương ở phần tư IV nên $\\cos\\alpha=\\frac{15}{17}$.', 'Mang dấu âm của sin sang cos.', 'Ôn bảng dấu lượng giác.'),
  s(19, 'A', 'Tách $75^\\circ=45^\\circ+30^\\circ$.', '$\\sin75^\\circ=\\frac{\\sqrt2}{2}\\frac{\\sqrt3}{2}+\\frac{\\sqrt2}{2}\\frac12$.', 'Suy ra $\\sin75^\\circ=\\frac{\\sqrt6+\\sqrt2}{4}$.', 'Dùng dấu trừ trong công thức sin của tổng.', 'Ôn công thức cộng.'),
  s(20, 'A', 'Dùng công thức cos của hiệu.', '$\\cos15^\\circ=\\cos45^\\circ\\cos30^\\circ+\\sin45^\\circ\\sin30^\\circ$.', 'Kết quả là $\\frac{\\sqrt6+\\sqrt2}{4}$.', 'Dùng dấu trừ theo hình thức $45^\\circ-30^\\circ$.', 'Ôn dấu trong công thức cos hiệu.'),
  s(21, 'C', 'Áp dụng công thức góc đôi của sin.', '$\\sin2a=2\\sin a\\cos a=2\\cdot\\frac35\\cdot\\frac45$.', 'Suy ra $\\sin2a=\\frac{24}{25}$.', 'Quên hệ số 2.', 'Ôn các công thức góc đôi.'),
  s(22, 'B', 'Thay trực tiếp vào công thức đã cho.', '$\\cos2a=2\\left(\\frac35\\right)^2-1=\\frac{18}{25}-\\frac{25}{25}$.', 'Vậy $\\cos2a=-\\frac7{25}$.', 'Tính $2\\cdot3/5$ thay vì bình phương cos.', 'Ôn công thức $\\cos2a$.'),
  s(23, 'C', 'Dùng công thức tan của tổng và kiểm tra mẫu khác 0.', '$\\tan(a+b)=\\frac{1+1/2}{1-1\\cdot1/2}=\\frac{3/2}{1/2}$.', 'Suy ra $\\tan(a+b)=3$.', 'Dùng $1+\\tan a\\tan b$ ở mẫu.', 'Ôn công thức tan tổng.'),
  s(24, 'B', 'Nhận dạng hiệu hai cos.', '$\\cos a-\\cos b=-2\\sin\\frac{a+b}{2}\\sin\\frac{a-b}{2}$.', 'Công thức đúng là phương án B.', 'Bỏ dấu âm phía trước.', 'Ôn biến đổi tổng thành tích.'),
  s(25, 'A', 'Nhận dạng tổng hai sin.', '$\\sin a+\\sin b=2\\sin\\frac{a+b}{2}\\cos\\frac{a-b}{2}$.', 'Công thức đúng là phương án A.', 'Đổi vị trí sin và cos.', 'Ôn biến đổi tổng thành tích.'),
  s(26, 'C', 'Dùng công thức biến đổi tích thành tổng.', '$\\sin(a+b)+\\sin(a-b)=2\\sin a\\cos b$.', 'Vậy $2\\sin a\\cos b=\\sin(a+b)+\\sin(a-b)$.', 'Nhầm với công thức của $2\\cos a\\sin b$.', 'Ôn biến đổi tích thành tổng.'),
  s(27, 'A', 'Dùng công thức tích hai cos.', '$\\cos(a+b)+\\cos(a-b)=2\\cos a\\cos b$.', 'Biểu thức cần tìm là phương án A.', 'Đặt dấu trừ giữa hai cos.', 'Ôn công thức tích thành tổng.'),
  s(28, 'B', 'Áp dụng công thức tổng hai sin với $a=3x$, $b=x$.', '$\\sin3x+\\sin x=2\\sin\\frac{4x}{2}\\cos\\frac{2x}{2}$.', 'Rút gọn được $2\\sin2x\\cos x$.', 'Tính sai nửa tổng hoặc nửa hiệu.', 'Ôn tổng thành tích với đối số đại số.'),
  s(29, 'B', 'Hàm $\\sin(ax)$ có chu kì nhỏ nhất $\\frac{2\\pi}{|a|}$.', 'Với $a=3$, $T=\\frac{2\\pi}{3}$.', 'Chu kì cần tìm là $\\frac{2\\pi}{3}$.', 'Nhân chu kì với 3 thay vì chia.', 'Ôn chu kì của hàm lượng giác hợp.'),
  s(30, 'A', 'Hàm chẵn thỏa $f(-x)=f(x)$.', '$\\cos(-x)=\\cos x$, còn sin, tan và cot là các hàm lẻ.', 'Hàm chẵn là $y=\\cos x$.', 'Nhầm tính đối xứng qua trục tung với qua gốc.', 'Ôn tính chẵn lẻ của bốn hàm lượng giác.'),
  s(31, 'C', 'Tan là thương sin và cos, không bị chặn giữa $-1$ và 1.', 'Trên mỗi khoảng xác định, $\\tan x$ nhận mọi giá trị thực.', 'Tập giá trị là $\\mathbb R$.', 'Gán tập giá trị của sin/cos cho tan.', 'Ôn tập xác định và tập giá trị.'),
  s(32, 'B', 'Cot xác định khi sin của đối số khác 0.', '$\\sin2x\\ne0\\Leftrightarrow2x\\ne k\\pi$.', 'Vậy $x\\ne k\\frac\\pi2$, $k\\in\\mathbb Z$.', 'Dùng điều kiện cos khác 0 như hàm tan.', 'Ôn miền xác định của cot.'),
  s(33, 'D', 'Cả sin và cos có chu kì $2\\pi$; kiểm tra xem $\\pi$ có là chu kì không.', '$f(x+\\pi)=-\\sin x-\\cos x\\ne f(x)$, còn $f(x+2\\pi)=f(x)$.', 'Một chu kì của hàm là $2\\pi$.', 'Cho rằng tổng có chu kì bằng nửa chu kì chung.', 'Ôn cách kiểm tra chu kì của tổng hàm.'),
  s(34, 'B', 'Đồ thị chẵn và đạt cực đại 1 tại gốc là dấu hiệu của cos.', '$\\cos0=1$ và hàm cos có chu kì $2\\pi$.', 'Đồ thị là $y=\\cos x$.', 'Nhầm với sin do cùng tập giá trị.', 'Ôn các điểm đặc trưng của đồ thị sin và cos.'),
  s(35, 'C', 'Hàm tan đi qua gốc, chu kì $\\pi$ và có các tiệm cận đứng đã nêu.', '$\\tan0=0$ và tan không xác định tại $\\frac\\pi2+k\\pi$.', 'Đồ thị là $y=\\tan x$.', 'Nhầm tan với cot vì cùng chu kì.', 'Ôn đồ thị tan và cot.'),
  s(36, 'D', 'Cot giảm trên từng khoảng xác định và bằng 0 tại $\\frac\\pi2+k\\pi$.', '$\\cot x=0$ khi $\\cos x=0$ và $\\sin x\\ne0$.', 'Đồ thị được mô tả là $y=\\cot x$.', 'Nhầm với tan, là hàm tăng.', 'Ôn chiều biến thiên của tan và cot.'),
  s(37, 'A', 'Biên độ 2 loại các hàm hệ số 1; chiều tăng tại gốc xác định dấu.', '$2\\sin0=0$ và đạo hàm/chiều biến thiên quanh 0 là dương.', 'Hàm phù hợp là $y=2\\sin x$.', 'Nhầm hệ số ngoài với hệ số làm đổi chu kì.', 'Ôn ảnh hưởng của hệ số lên đồ thị sin.'),
  s(38, 'C', 'Hàm chẵn gợi ý dạng cos; giá trị tại gốc quyết định dấu.', '$(-\\cos0)=-1$ và $-\\cos x$ vẫn có chu kì $2\\pi$.', 'Đồ thị là $y=-\\cos x$.', 'Chọn $-\\sin x$ dù hàm này lẻ.', 'Ôn phép đối xứng đồ thị qua trục hoành.'),
  s(39, 'B', 'Cos bằng 0 tại các góc lẻ lần $\\frac\\pi2$.', '$x=\\frac\\pi2+k\\pi$, $k\\in\\mathbb Z$.', 'Họ nghiệm đúng là phương án B.', 'Viết chu kì $2\\pi$ và bỏ mất một nửa nghiệm.', 'Ôn nghiệm đặc biệt của cos.'),
  s(40, 'C', 'Đưa $\\sqrt3$ về $\\tan\\frac\\pi3$.', '$\\tan x=\\tan\\frac\\pi3$ nên $x=\\frac\\pi3+k\\pi$.', 'Nghiệm là phương án C.', 'Dùng chu kì $2\\pi$ cho hàm tan.', 'Ôn phương trình tan cơ bản.'),
  s(41, 'A', 'Đưa 1 về $\\cot\\frac\\pi4$.', '$\\cot x=\\cot\\frac\\pi4$ nên $x=\\frac\\pi4+k\\pi$.', 'Nghiệm là phương án A.', 'Dùng chu kì $2\\pi$ cho cot.', 'Ôn phương trình cot cơ bản.'),
  s(42, 'B', 'Sin đạt $-1$ tại đáy của đường tròn lượng giác.', '$x=-\\frac\\pi2+2k\\pi$ tương đương $x=\\frac{3\\pi}{2}+2k\\pi$.', 'Họ nghiệm đúng là phương án B.', 'Dùng $k\\pi$ làm xuất hiện cả nghiệm sin bằng 1.', 'Ôn các giá trị biên của sin.'),
  s(43, 'D', 'Giá trị của cos luôn nằm trong đoạn $[-1;1]$.', 'Số 2 nằm ngoài tập giá trị của hàm cos.', 'Phương trình vô nghiệm, nên có 0 nghiệm.', 'Cố áp dụng công thức nghiệm mà không kiểm tra điều kiện.', 'Ôn tập giá trị của sin và cos.'),
  s(44, 'A', 'Sin bằng 0 khi đối số là một bội của $\\pi$.', '$2x=k\\pi$.', 'Chia 2 được $x=k\\frac\\pi2$.', 'Quên chia hệ số của $x$.', 'Ôn phương trình lượng giác chứa góc bội.'),
  s(45, 'C', 'Đưa 1 về $\\tan\\frac\\pi4$ rồi giải theo đối số $3x$.', '$3x=\\frac\\pi4+k\\pi$.', 'Suy ra $x=\\frac\\pi{12}+k\\frac\\pi3$.', 'Chỉ chia góc đầu mà không chia chu kì.', 'Ôn giải phương trình tan chứa góc bội.'),
  s(46, 'B', 'Cos bằng 1 khi đối số là $2k\\pi$.', '$x-\\frac\\pi4=2k\\pi$.', 'Do đó $x=\\frac\\pi4+2k\\pi$.', 'Dùng chu kì $k\\pi$ hoặc chuyển vế sai dấu.', 'Ôn nghiệm đặc biệt của cos.'),
  s(47, 'A', 'Đặt $u=x+\\frac\\pi6$ và giải $\\sin u=\\frac12$.', '$u=\\frac\\pi6+2k\\pi$ hoặc $u=\\frac{5\\pi}{6}+2k\\pi$.', 'Trừ $\\frac\\pi6$: $x=2k\\pi$ hoặc $x=\\frac{2\\pi}{3}+2k\\pi$.', 'Quên trừ góc dịch ở cả hai họ nghiệm.', 'Ôn phương trình sin có tịnh tiến pha.'),
  s(48, 'D', 'Cos bằng $-1$ khi đối số là $\\pi+2k\\pi$.', '$2x=\\pi+2k\\pi$.', 'Chia 2 được $x=\\frac\\pi2+k\\pi$.', 'Giữ nguyên chu kì $2\\pi$ sau khi chia.', 'Ôn phương trình cos chứa góc bội.')
];

export const g11MathModule1Solutions: CourseSolution[] = specs.map(spec => {
  const suffix = String(spec.number).padStart(3, '0');

  return {
    id: `math11-s${suffix}`,
    courseId: 'grade11:math',
    moduleId: 'math11-m1',
    questionId: `math11-q${suffix}`,
    recognition: spec.recognition,
    detailedSteps: [
      { order: 1, title: 'Lập luận', explanation: spec.calculation },
      { order: 2, title: 'Kết luận', explanation: spec.conclusion }
    ],
    finalAnswer: spec.answer,
    commonMistakes: [spec.mistake],
    reviewSuggestions: [spec.review]
  };
});
