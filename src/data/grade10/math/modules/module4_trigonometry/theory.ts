import type { QuestionTypeTheoryCheckpoint } from '@/types';

export const math10Qt6Theory: string[] = [
  '**1. Quy ước trong tam giác**\nTrong tam giác $ABC$, các cạnh $a=BC$, $b=CA$, $c=AB$ lần lượt đối diện các góc $A,B,C$. Trước khi dùng công thức phải ghép đúng cạnh với góc đối diện.',
  '**2. Định lý cosin**\n$$a^2=b^2+c^2-2bc\\cos A$$\nCác công thức còn lại thu được bằng hoán vị. Bài toán ngược:\n$$\\cos A=\\frac{b^2+c^2-a^2}{2bc}$$\nDùng tốt cho ba cạnh hoặc hai cạnh và góc xen giữa.',
  '**3. Định lý sin**\n$$\\frac a{\\sin A}=\\frac b{\\sin B}=\\frac c{\\sin C}=2R$$\nDùng tốt khi biết một cặp cạnh–góc đối diện và thêm một cạnh hoặc góc. Luôn kiểm tra tổng ba góc bằng $180^\\circ$.',
  '**4. Trường hợp mơ hồ của định lý sin**\nKhi biết hai cạnh và một góc không xen giữa, phương trình $\\sin B=t$ có thể cho $B$ hoặc $180^\\circ-B$. Phải kiểm tra cả hai khả năng với $A+B<180^\\circ$ và điều kiện cạnh–góc; bài có thể có 0, 1 hoặc 2 tam giác.',
  '**5. Công thức diện tích**\n$$S=\\frac12bc\\sin A=\\frac12ca\\sin B=\\frac12ab\\sin C$$\n$$S=pr=\\frac{abc}{4R}$$\nVới nửa chu vi $p=(a+b+c)/2$:\n$$S=\\sqrt{p(p-a)(p-b)(p-c)}$$',
  '**6. Điều kiện tồn tại tam giác**\nBa cạnh dương tạo thành tam giác khi tổng hai cạnh bất kỳ lớn hơn cạnh còn lại; tương đương $|b-c|<a<b+c$. Kết quả số phải thỏa cạnh lớn hơn đối diện góc lớn hơn.',
  '**7. Chọn công thức theo dữ kiện**\n- SSS: cosin tìm góc; Heron tìm diện tích.\n- SAS: cosin tìm cạnh còn lại.\n- ASA/AAS: tìm góc thứ ba rồi dùng sin.\n- SSA: dùng sin nhưng kiểm tra trường hợp mơ hồ.\nƯu tiên công thức có ít ẩn nhất.',
  '**8. Bài toán đo đạc và chuyển động**\nVẽ sơ đồ, xác định đường chuẩn, góc nâng/hạ và khoảng cách thực; chuyển bài toán thành tam giác. Với hai vật xuất phát cùng điểm, các quãng đường là hai cạnh và góc giữa hướng đi là góc xen giữa.',
  '**9. Làm tròn và kiểm tra**\nGiữ nhiều chữ số trung gian, chỉ làm tròn cuối; đặt máy ở DEG; kiểm tra góc thuộc $(0^\\circ;180^\\circ)$, tổng góc, bất đẳng thức tam giác và đơn vị.',
  '**10. Lỗi cần tránh**\n- Ghép sai cạnh–góc đối diện.\n- Dùng cosin với góc không xen giữa mà không lập đúng công thức.\n- Bỏ nghiệm bù trong trường hợp SSA.\n- Nhầm $S=abc/(4R)$ hoặc $S=pr$.\n- Làm tròn quá sớm.\n- Không trừ chiều cao mắt hoặc không xét miền thực tế.'
];

export const math10Qt19Theory: string[] = [
  '**1. Giá trị lượng giác trên nửa đường tròn**\nVới $0^\\circ\\le\\alpha\\le180^\\circ$, điểm $M(\\cos\\alpha;\\sin\\alpha)$ trên đường tròn đơn vị xác định sin và cos. Khi mẫu khác 0:\n$$\\tan\\alpha=\\frac{\\sin\\alpha}{\\cos\\alpha},\\qquad\\cot\\alpha=\\frac{\\cos\\alpha}{\\sin\\alpha}$$',
  '**2. Miền xác định**\n$\\tan\\alpha$ không xác định khi $\\cos\\alpha=0$, tức $\\alpha=90^\\circ$. $\\cot\\alpha$ không xác định khi $\\sin\\alpha=0$, tức $\\alpha=0^\\circ$ hoặc $180^\\circ$.',
  '**3. Bảng góc đặc biệt**\nVới $0^\\circ,30^\\circ,45^\\circ,60^\\circ,90^\\circ$:\n- $\\sin$: $0,\\frac12,\\frac{\\sqrt2}{2},\\frac{\\sqrt3}{2},1$.\n- $\\cos$: $1,\\frac{\\sqrt3}{2},\\frac{\\sqrt2}{2},\\frac12,0$.\n- $\\tan$: $0,\\frac1{\\sqrt3},1,\\sqrt3$, không xác định.',
  '**4. Dấu trong khoảng $0^\\circ$ đến $180^\\circ$**\n$\\sin\\alpha>0$ với $0^\\circ<\\alpha<180^\\circ$. $\\cos\\alpha$ dương với góc nhọn, bằng 0 tại $90^\\circ$, âm với góc tù. $\\tan\\alpha$ cùng dấu với $\\cos\\alpha$ vì sin dương trong khoảng.',
  '**5. Góc bù**\n$$\\sin(180^\\circ-\\alpha)=\\sin\\alpha$$\n$$\\cos(180^\\circ-\\alpha)=-\\cos\\alpha$$\n$$\\tan(180^\\circ-\\alpha)=-\\tan\\alpha$$\nNhờ đó suy các góc $120^\\circ,135^\\circ,150^\\circ$ từ $60^\\circ,45^\\circ,30^\\circ$.',
  '**6. Các hệ thức cơ bản**\n$$\\sin^2\\alpha+\\cos^2\\alpha=1$$\n$$1+\\tan^2\\alpha=\\frac1{\\cos^2\\alpha}\\quad(\\cos\\alpha\\ne0)$$\n$$1+\\cot^2\\alpha=\\frac1{\\sin^2\\alpha}\\quad(\\sin\\alpha\\ne0)$$',
  '**7. Suy giá trị còn lại**\nTừ $\\sin\\alpha$ suy $\\cos\\alpha=\\pm\\sqrt{1-\\sin^2\\alpha}$; dấu được chọn theo miền góc. Tương tự cho sin từ cos. Không được mặc định lấy căn dương khi góc có thể tù.',
  '**8. Phương trình đơn giản trên $[0^\\circ;180^\\circ]$**\nNếu $\\sin x=\\sin\\alpha$ với $0^\\circ<\\alpha<180^\\circ$, thường có $x=\\alpha$ hoặc $x=180^\\circ-\\alpha$ nếu hai giá trị khác nhau. Với cos, dấu và tính giảm trên đoạn giúp xác định nghiệm duy nhất. Luôn loại điểm làm tan/cot không xác định.',
  '**9. Biểu thức lượng giác**\nĐưa mọi đại lượng về sin, cos khi cần; dùng $\\sin^2+\\cos^2=1$ trước khi thay số. Nếu biết $\\sin x+\\cos x$, bình phương:\n$$(\\sin x+\\cos x)^2=1+2\\sin x\\cos x$$',
  '**10. Lỗi cần tránh**\n- Cho cos góc tù dương.\n- Đổi dấu sin của góc bù.\n- Bấm máy ở RAD.\n- Quên điều kiện xác định của tan/cot.\n- Lấy căn dương mà không xét miền góc.\n- Chỉ lấy một nghiệm của phương trình sin trên đoạn.'
];

export const g10MathModule4TheoryByQuestionTypeId: Record<string, string[]> = {
  'math10-qt6': math10Qt6Theory,
  'math10-qt19': math10Qt19Theory
};

export const g10MathModule4TheoryCheckpointsByQuestionTypeId: Record<
  string,
  QuestionTypeTheoryCheckpoint[]
> = {
  'math10-qt6': [
    {
      id: 'math10-check-qt6-1',
      question: 'Biết hai cạnh và góc xen giữa của một tam giác, nên dùng định lí nào trước?',
      options: ['Định lí cosin', 'Định lí sin', 'Định lí Thales', 'Công thức trung vị'],
      correctAnswer: 'A',
      explanation: 'Bộ dữ kiện SAS cho phép dùng định lí cosin để tính trực tiếp cạnh còn lại.'
    },
    {
      id: 'math10-check-qt6-2',
      question: 'Trường hợp biết hai cạnh và một góc không xen giữa có thể cho',
      options: ['Luôn đúng một tam giác', 'Chỉ hai tam giác', '0, 1 hoặc 2 tam giác', 'Vô số tam giác'],
      correctAnswer: 'C',
      explanation: 'Đây là trường hợp mơ hồ của định lí sin; nghiệm góc bù có thể tạo thêm một tam giác hoặc bị loại.'
    },
    {
      id: 'math10-check-qt6-3',
      question: 'Công thức diện tích liên hệ với bán kính ngoại tiếp $R$ là',
      options: ['$S=abcR$', '$S=\\dfrac{abc}{2R}$', '$S=\\dfrac{abc}{4R}$', '$S=4abcR$'],
      correctAnswer: 'C',
      explanation: 'Công thức chuẩn là $S=\\dfrac{abc}{4R}$.'
    }
  ],
  'math10-qt19': [
    {
      id: 'math10-check-qt19-1',
      question: 'Giá trị $\\cos120^\\circ$ bằng',
      options: ['$\\dfrac12$', '$-\\dfrac12$', '$\\dfrac{\\sqrt3}{2}$', '$-\\dfrac{\\sqrt3}{2}$'],
      correctAnswer: 'B',
      explanation: '$120^\\circ=180^\\circ-60^\\circ$ nên $\\cos120^\\circ=-\\cos60^\\circ=-\\dfrac12$.'
    },
    {
      id: 'math10-check-qt19-2',
      question: 'Giá trị nào không xác định?',
      options: ['$\\sin90^\\circ$', '$\\cos90^\\circ$', '$\\tan90^\\circ$', '$\\sin180^\\circ$'],
      correctAnswer: 'C',
      explanation: '$\\tan\\alpha=\\sin\\alpha/\\cos\\alpha$ và $\\cos90^\\circ=0$.'
    },
    {
      id: 'math10-check-qt19-3',
      question: 'Trên đoạn $[0^\\circ;180^\\circ]$, phương trình $\\sin x=\\dfrac12$ có nghiệm',
      options: ['Chỉ $30^\\circ$', 'Chỉ $150^\\circ$', '$30^\\circ$ và $150^\\circ$', '$60^\\circ$ và $120^\\circ$'],
      correctAnswer: 'C',
      explanation: 'Hai góc bù $30^\\circ$ và $150^\\circ$ có cùng sin bằng $\\dfrac12$.'
    }
  ]
};
