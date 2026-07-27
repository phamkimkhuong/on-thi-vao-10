import type { CourseSolution } from '@/data/schema';

const answers = (
  'BACDBDCABDCA' +
  'BCADBCADBCAD' +
  'BACDBACDBACD'
).split('') as Array<'A' | 'B' | 'C' | 'D'>;

const reasonings = [
  'Theo định nghĩa, phải lấy giới hạn của $\\dfrac{f(x)-f(x_0)}{x-x_0}$ khi $x\\to x_0$.',
  'Đặt $h=x-x_0$ thì $x=x_0+h$ và tỉ số biến thiên là $\\dfrac{f(x_0+h)-f(x_0)}h$.',
  '$\\dfrac{(2+h)^2-2^2}{h}=4+h$ với $h\\ne0$; cho $h\\to0$ được 4.',
  '$\\dfrac{3(x_0+h)+1-(3x_0+1)}h=3$, nên đạo hàm tại mọi điểm bằng 3.',
  'Tử số của tỉ số biến thiên là $5-5=0$, do đó đạo hàm của hàm hằng bằng 0.',
  'Đạo hàm bên trái của $|x|$ tại 0 bằng $-1$, bên phải bằng 1; hai giá trị không bằng nhau.',
  '$y^{\\prime}=2x$, nên tại $x=1$ hệ số góc tiếp tuyến là $2$.',
  'Tiếp tuyến qua $M(x_0;f(x_0))$ và có hệ số góc $f^{\\prime}(x_0)$ nên dùng dạng điểm–hệ số góc.',
  'Tại $x_0=1$, ta có $y_0=1$, $f^{\\prime}(1)=2$; vì vậy $y-1=2(x-1)$ hay $y=2x-1$.',
  'Vận tốc tức thời là $v(t)=s^{\\prime}(t)=2t$; thay $t=3$ được $v(3)=6$.',
  'Một giới hạn nhận biết số tự nhiên $e$ là $\\lim\\limits_{n\\to\\infty}(1+1/n)^n$.',
  'Với $f(x)=1/x$, $f^{\\prime}(x)=-1/x^2$. Tại $(1;1)$: $y-1=-(x-1)$, nên $y=-x+2$.',

  'Áp dụng $(x^n)^{\\prime}=nx^{n-1}$ với $n=5$ được $5x^4$.',
  'Viết $\\sqrt{x}=x^{1/2}$ rồi lấy đạo hàm: $\\frac12x^{-1/2}=\\dfrac1{2\\sqrt{x}}$.',
  'Công thức đạo hàm lượng giác cơ bản cho $(\\sin x)^{\\prime}=\\cos x$.',
  'Công thức đạo hàm lượng giác cơ bản cho $(\\cos x)^{\\prime}=-\\sin x$.',
  'Hàm mũ cơ số $e$ giữ nguyên dạng khi lấy đạo hàm: $(e^x)^{\\prime}=e^x$.',
  'Trên miền $x>0$, công thức cơ bản là $(\\ln x)^{\\prime}=1/x$.',
  'Dùng quy tắc tích: $(x^2\\sin x)^{\\prime}=2x\\sin x+x^2\\cos x$.',
  'Viết $1/x=x^{-1}$ rồi lấy đạo hàm được $-x^{-2}=-1/x^2$.',
  'Dùng quy tắc hàm hợp: $3(2x+1)^2$ nhân với đạo hàm hàm trong bằng 2, được $6(2x+1)^2$.',
  'Với $a>0$, $(a^x)^{\\prime}=a^x\\ln a$; thay $a=2$ được $2^x\\ln2$.',
  'Công thức $(\\log_ax)^{\\prime}=1/(x\\ln a)$ cho kết quả $1/(x\\ln3)$.',
  'Tại các điểm $\\cos x\\ne0$, công thức là $(\\tan x)^{\\prime}=1/\\cos^2x$.',

  'Theo định nghĩa, đạo hàm cấp hai là đạo hàm của đạo hàm cấp một: $f^{\\prime\\prime}=(f^{\\prime})^{\\prime}$.',
  '$f^{\\prime}(x)=3x^2$ và lấy đạo hàm lần nữa được $f^{\\prime\\prime}(x)=6x$.',
  '$f^{\\prime}(x)=\\cos x$, do đó $f^{\\prime\\prime}(x)=-\\sin x$.',
  'Đạo hàm của $e^x$ vẫn là $e^x$ ở cả lần thứ nhất và lần thứ hai.',
  '$f^{\\prime}(x)=4x^3$, nên $f^{\\prime\\prime}(x)=12x^2$.',
  '$f^{\\prime}(x)=1/x=x^{-1}$, nên $f^{\\prime\\prime}(x)=-x^{-2}=-1/x^2$.',
  '$v(t)=s^{\\prime}(t)=3t^2$ và $a(t)=v^{\\prime}(t)=6t$; thay $t=2$ được 12.',
  '$a(t)=v^{\\prime}(t)=4t-3$; tại $t=2$, $a(2)=8-3=5$.',
  'Gia tốc là độ biến thiên vận tốc theo thời gian nên có đơn vị $\\mathrm{m/s^2}$.',
  '$v(t)=s^{\\prime}(t)=10t$ và $a(t)=v^{\\prime}(t)=10$.',
  '$f^{\\prime}(x)=6(2x+1)^2$; lấy đạo hàm lần nữa được $f^{\\prime\\prime}(x)=24(2x+1)$.',
  '$f^{\\prime}(x)=4x^3-4x$; lấy đạo hàm lần nữa được $f^{\\prime\\prime}(x)=12x^2-4$.'
];

const results = [
  'định nghĩa theo giới hạn',
  'dạng số gia',
  '$4$',
  '$3$',
  '$0$',
  'không có đạo hàm',
  '$2$',
  '$y-f(x_0)=f^{\\prime}(x_0)(x-x_0)$',
  '$y=2x-1$',
  '$6$',
  '$\\lim\\limits_{n\\to\\infty}(1+1/n)^n$',
  '$y=-x+2$',
  '$5x^4$',
  '$1/(2\\sqrt{x})$',
  '$\\cos x$',
  '$-\\sin x$',
  '$e^x$',
  '$1/x$',
  '$2x\\sin x+x^2\\cos x$',
  '$-1/x^2$',
  '$6(2x+1)^2$',
  '$2^x\\ln2$',
  '$1/(x\\ln3)$',
  '$1/\\cos^2x$',
  '$(f^{\\prime})^{\\prime}$',
  '$6x$',
  '$-\\sin x$',
  '$e^x$',
  '$12x^2$',
  '$-1/x^2$',
  '$12$',
  '$5$',
  '$\\mathrm{m/s^2}$',
  '$10$',
  '$24(2x+1)$',
  '$12x^2-4$'
];

export const g11MathModule9Solutions: CourseSolution[] = reasonings.map(
  (reasoning, index) => {
    const number = 361 + index;
    const questionTypeNumber = 31 + Math.floor(index / 12);

    return {
      id: `math11-s${number}`,
      courseId: 'grade11:math',
      moduleId: 'math11-m9',
      questionId: `math11-q${number}`,
      recognition:
        questionTypeNumber === 31
          ? 'Nhận dạng yêu cầu dùng định nghĩa, ý nghĩa hình học hoặc tốc độ biến thiên tức thời.'
          : questionTypeNumber === 32
            ? 'Nhận dạng hàm sơ cấp và phép toán ngoài cùng trước khi chọn quy tắc đạo hàm.'
            : 'Xác định cần lấy đạo hàm lần thứ hai hoặc chuyển từ tọa độ, vận tốc sang gia tốc.',
      detailedSteps: [
        {
          order: 1,
          title: 'Áp dụng kiến thức',
          explanation: reasoning
        },
        {
          order: 2,
          title: 'Đối chiếu phương án',
          explanation: `Kết quả là ${results[index]}, tương ứng phương án ${answers[index]}.`
        }
      ],
      finalAnswer: answers[index],
      commonMistakes: [
        questionTypeNumber === 31
          ? 'Bỏ giới hạn trong định nghĩa hoặc thiếu tọa độ tiếp điểm khi viết tiếp tuyến.'
          : questionTypeNumber === 32
            ? 'Nhầm quy tắc tích, thương hoặc quên nhân đạo hàm của hàm bên trong.'
            : 'Nhầm $f^{\\prime\\prime}$ với $(f^{\\prime})^2$ hoặc lấy sai số lần đạo hàm.'
      ],
      reviewSuggestions: [
        questionTypeNumber === 31
          ? 'Ôn tỉ số biến thiên, giới hạn, hệ số góc và phương trình đường thẳng.'
          : questionTypeNumber === 32
            ? 'Ôn bảng đạo hàm cơ bản và luyện nhận dạng cấu trúc hàm số.'
            : 'Viết riêng từng dòng $f^{\\prime}$, $f^{\\prime\\prime}$ hoặc $s$, $v$, $a$ để tránh nhầm.'
      ]
    };
  }
);
