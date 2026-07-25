export const math10Qt14Theory: string[] = [
  '**1. Vectơ chỉ phương và pháp tuyến**\nĐường thẳng $d$ có vectơ chỉ phương $\\vec u=(u_1;u_2)\\ne\\vec0$. Một vectơ pháp tuyến vuông góc với $d$ là:\n$$\\vec n=(a;b)\\ne\\vec0$$\nNếu $\\vec n=(a;b)$ thì có thể chọn $\\vec u=(-b;a)$ hoặc $(b;-a)$.',
  '**2. Phương trình tổng quát**\nĐường thẳng qua $M_0(x_0;y_0)$ và có pháp tuyến $(a;b)$:\n$$a(x-x_0)+b(y-y_0)=0$$\nDạng tổng quát $ax+by+c=0$ có pháp tuyến $(a;b)$, với $a^2+b^2>0$. Kiểm tra điểm thuộc đường bằng cách thay tọa độ vào phương trình.',
  '**3. Phương trình tham số**\nĐường qua $M_0(x_0;y_0)$ và có chỉ phương $(u_1;u_2)$:\n$$\\begin{cases}x=x_0+u_1t\\\\y=y_0+u_2t\\end{cases}\\qquad(t\\in\\mathbb R)$$\nMuốn đổi sang tổng quát, dùng một pháp tuyến vuông góc với vectơ chỉ phương.',
  '**4. Lập đường thẳng từ hai điểm**\nVới hai điểm phân biệt $A,B$, lấy $\\vec{AB}$ làm chỉ phương. Nếu $A=B$, dữ kiện chưa xác định một đường duy nhất. Có thể tìm pháp tuyến $(-\\Delta y;\\Delta x)$ rồi dùng dạng điểm–pháp tuyến.',
  '**5. Vị trí tương đối**\nCho $d_i:a_ix+b_iy+c_i=0$.\n- Song song phân biệt: $(a_1;b_1)$ tỉ lệ $(a_2;b_2)$ nhưng bộ ba hệ số không tỉ lệ.\n- Trùng nhau: $(a_1;b_1;c_1)$ tỉ lệ $(a_2;b_2;c_2)$.\n- Cắt nhau: hai pháp tuyến không cùng phương.\n- Vuông góc: $a_1a_2+b_1b_2=0$.',
  '**6. Góc giữa hai đường thẳng**\nGóc nhọn hoặc vuông $\\varphi$ giữa hai đường:\n$$\\cos\\varphi=\\frac{|a_1a_2+b_1b_2|}{\\sqrt{a_1^2+b_1^2}\\sqrt{a_2^2+b_2^2}}$$\nGiá trị tuyệt đối chọn góc không tù giữa hai đường; không nhầm với góc có hướng giữa hai vectơ.',
  '**7. Khoảng cách từ điểm đến đường**\nVới $M(x_0;y_0)$ và $d:ax+by+c=0$:\n$$d(M,d)=\\frac{|ax_0+by_0+c|}{\\sqrt{a^2+b^2}}$$\nPhương trình đường phải ở dạng tổng quát; tử có giá trị tuyệt đối và mẫu là độ dài pháp tuyến.',
  '**8. Khoảng cách giữa hai đường song song**\nTrước tiên chuẩn hóa để hai phương trình có cùng hệ số $a,b$:\n$$d:ax+by+c_1=0,\\qquad d\\prime:ax+by+c_2=0$$\nKhi đó:\n$$d(d,d\\prime)=\\frac{|c_1-c_2|}{\\sqrt{a^2+b^2}}$$',
  '**9. Lỗi cần tránh**\n- Nhầm $(a;b)$ là chỉ phương của $ax+by+c=0$.\n- Kết luận trùng chỉ từ $a_1:b_1=a_2:b_2$.\n- Quên điều kiện hai điểm phân biệt.\n- Bỏ giá trị tuyệt đối hoặc căn ở công thức khoảng cách.\n- So sánh $c_1,c_2$ khi hai phương trình chưa chuẩn hóa.'
];

export const math10Qt15Theory: string[] = [
  '**1. Phương trình chuẩn của đường tròn**\nĐường tròn tâm $I(a;b)$, bán kính $R>0$:\n$$(x-a)^2+(y-b)^2=R^2$$\nDấu tọa độ tâm ngược với dấu nhìn thấy trong ngoặc; vế phải là $R^2$, không phải $R$.',
  '**2. Dạng khai triển**\n$$x^2+y^2+Dx+Ey+F=0$$\nTâm và bán kính:\n$$I\\left(-\\frac D2;-\\frac E2\\right),\\qquad R^2=\\frac{D^2+E^2}{4}-F$$\nĐây là đường tròn thực khi $R^2>0$; bằng 0 là một điểm; âm thì không có đường tròn thực.',
  '**3. Lập phương trình từ dữ kiện**\n- Biết tâm và bán kính: dùng trực tiếp dạng chuẩn.\n- Biết tâm và một điểm $M$: $R=IM$.\n- Biết đường kính $AB$: tâm là trung điểm $AB$, $R=AB/2$.\n- Biết ba điểm không thẳng hàng: thay vào dạng khai triển để tìm $D,E,F$.',
  '**4. Vị trí của điểm**\nSo sánh $IM$ với $R$: $IM<R$ điểm ở trong, $IM=R$ điểm thuộc đường tròn, $IM>R$ điểm ở ngoài. Trước khi viết tiếp tuyến tại $M$, bắt buộc kiểm tra $M$ thuộc đường tròn.',
  '**5. Tiếp tuyến tại một điểm**\nTại $M(x_M;y_M)$ thuộc đường tròn tâm $I(a;b)$, bán kính $IM$ là pháp tuyến của tiếp tuyến:\n$$(x_M-a)(x-x_M)+(y_M-b)(y-y_M)=0$$',
  '**6. Vị trí đường thẳng và đường tròn**\nVới đường thẳng $d$, đặt $h=d(I,d)$:\n- $h>R$: không giao.\n- $h=R$: tiếp xúc.\n- $h<R$: cắt tại hai điểm.\nĐiều kiện tiếp tuyến là khoảng cách từ tâm đến đường bằng bán kính.',
  '**7. Đường tròn tiếp xúc trục tọa độ**\nTâm $I(a;b)$ có khoảng cách đến $Ox$ là $|b|$, đến $Oy$ là $|a|$. Tiếp xúc $Ox$ khi $R=|b|$, tiếp xúc $Oy$ khi $R=|a|$.',
  '**8. Quy trình bài tiếp tuyến**\nXác định tâm; kiểm tra tiếp điểm; lập vectơ $\\vec{IM}$; dùng nó làm pháp tuyến; viết phương trình qua $M$; thay lại $M$ và kiểm tra khoảng cách từ tâm đến đường.',
  '**9. Lỗi cần tránh**\n- Đọc tâm sai dấu.\n- Lấy $R=R^2$.\n- Bỏ điều kiện $R^2>0$.\n- Viết tiếp tuyến tại điểm không thuộc đường tròn.\n- Dùng $\\vec{IM}$ làm chỉ phương thay vì pháp tuyến.\n- Dùng điều kiện $d(I,d)=R$ nhưng quên giá trị tuyệt đối.'
];

export const math10Qt16Theory: string[] = [
  '**1. Nhận dạng nhanh ba đường conic**\nSau khi đưa về dạng chính tắc: hai bình phương cùng dấu và bằng 1 gợi elip; hai bình phương trái dấu gợi hypebol; chỉ một biến bình phương và biến kia bậc nhất gợi parabol. Phải chuẩn hóa vế phải trước khi đọc hệ số.',
  '**2. Elip trục lớn nằm trên $Ox$**\n$$\\frac{x^2}{a^2}+\\frac{y^2}{b^2}=1\\qquad(a>b>0)$$\n$$c^2=a^2-b^2$$\nTâm $O$, đỉnh trục lớn $(\\pm a;0)$, đỉnh trục nhỏ $(0;\\pm b)$, tiêu điểm $(\\pm c;0)$; độ dài trục lớn $2a$, trục nhỏ $2b$, tiêu cự $F_1F_2=2c$, tâm sai $e=c/a$ với $0<e<1$.',
  '**3. Elip trục lớn nằm trên $Oy$**\nNếu mẫu lớn $a^2$ nằm dưới $y^2$, tiêu điểm và đỉnh trục lớn nằm trên $Oy$:\n$$\\frac{x^2}{b^2}+\\frac{y^2}{a^2}=1$$\nKhi đó $F_{1,2}=(0;\\pm c)$, vẫn có $c^2=a^2-b^2$.',
  '**4. Hypebol trục thực nằm trên $Ox$**\n$$\\frac{x^2}{a^2}-\\frac{y^2}{b^2}=1\\qquad(a,b>0)$$\n$$c^2=a^2+b^2$$\nĐỉnh $(\\pm a;0)$, tiêu điểm $(\\pm c;0)$, trục thực dài $2a$, tiêu cự $2c$, tâm sai $e=c/a>1$, tiệm cận $y=\\pm(b/a)x$.',
  '**5. Hypebol trục thực nằm trên $Oy$**\n$$\\frac{y^2}{a^2}-\\frac{x^2}{b^2}=1$$\nSố hạng dương xác định hướng trục thực. Tiêu điểm $(0;\\pm c)$ và tiệm cận $y=\\pm(a/b)x$. Không đọc hướng chỉ theo mẫu số lớn.',
  '**6. Parabol mở sang phải hoặc trái**\n$$y^2=4px$$\nTiêu điểm $F(p;0)$, đường chuẩn $x=-p$. Nếu $p>0$ parabol mở sang phải; nếu $p<0$ mở sang trái. Hệ số trước $x$ là $4p$, không phải tọa độ tiêu điểm.',
  '**7. Parabol mở lên hoặc xuống**\n$$x^2=4py$$\nTiêu điểm $F(0;p)$, đường chuẩn $y=-p$. Dấu của $p$ quyết định mở lên hay xuống.',
  '**8. Quy trình khai thác phương trình**\nChuẩn hóa về vế phải 1 với elip/hypebol; xác định số hạng dương và mẫu lớn; tính $a,b,c$ bằng đúng quan hệ; sau đó mới suy tiêu điểm, trục, tiêu cự, tâm sai. Với parabol, so sánh trực tiếp hệ số với $4p$.',
  '**9. Lỗi cần tránh**\n- Dùng $c^2=a^2-b^2$ cho hypebol.\n- Gọi $c$ là tiêu cự thay vì $F_1F_2=2c$ theo cách dùng trong bài.\n- Mặc định trục nằm trên $Ox$.\n- Lấy mẫu lớn làm $a^2$ của hypebol thay vì xét số hạng dương.\n- Lấy $4p$ làm tọa độ tiêu điểm.\n- Bỏ dấu của $p$ khi xác định hướng parabol.'
];

export const g10MathModule8TheoryByQuestionTypeId: Record<string, string[]> = {
  'math10-qt14': math10Qt14Theory,
  'math10-qt15': math10Qt15Theory,
  'math10-qt16': math10Qt16Theory
};
