import type { QuestionTypeTheoryCheckpoint } from '@/types';

export const math10Qt4Theory: string[] = [
  '**1. Hàm số bậc hai**\n$$f(x)=ax^2+bx+c\\qquad(a\\ne0)$$\nTập xác định là $\\mathbb R$ và đồ thị là parabol. $a>0$ parabol mở lên; $a<0$ mở xuống.',
  '**2. Đỉnh và trục đối xứng**\nĐặt $\\Delta=b^2-4ac$:\n$$x_I=-\\frac b{2a},\\qquad y_I=f(x_I)=-\\frac{\\Delta}{4a}$$\nĐỉnh $I(x_I;y_I)$ và trục đối xứng $x=x_I$. Dạng đỉnh:\n$$f(x)=a(x-x_I)^2+y_I$$',
  '**3. Chiều biến thiên**\nNếu $a>0$, hàm giảm trên $(-\\infty;x_I)$ và tăng trên $(x_I;+\\infty)$. Nếu $a<0$, chiều biến thiên ngược lại. Đỉnh là điểm đổi chiều.',
  '**4. Giao trục và nghiệm**\nĐồ thị cắt $Oy$ tại $(0;c)$. Giao với $Ox$ là nghiệm của $ax^2+bx+c=0$: hai điểm khi $\\Delta>0$, tiếp xúc khi $\\Delta=0$, không cắt khi $\\Delta<0$. Nếu biết hai nghiệm $x_1,x_2$:\n$$f(x)=a(x-x_1)(x-x_2)$$',
  '**5. Cực trị trên toàn $\\mathbb R$**\n$a>0$: GTNN là $y_I$, không có GTLN. $a<0$: GTLN là $y_I$, không có GTNN. Kết luận này chỉ dành cho toàn trục số.',
  '**6. GTLN/GTNN trên đoạn $[m;n]$**\nTính $f(m),f(n)$ và thêm $f(x_I)$ nếu $x_I\\in[m;n]$; so sánh các giá trị. Nếu đỉnh nằm ngoài đoạn, cực trị đạt tại các đầu mút theo chiều biến thiên.',
  '**7. Xác định parabol từ dữ kiện**\n- Biết đỉnh và một điểm: dùng dạng đỉnh.\n- Biết hai nghiệm và một điểm: dùng dạng tích.\n- Biết ba điểm có hoành độ phân biệt: thay vào dạng tổng quát để lập hệ.\n- Biết trục và hai điều kiện khác: dùng $b=-2ax_I$ rồi giải các hệ số.',
  '**8. Bài chứa tham số trên đoạn**\nVị trí đỉnh phụ thuộc tham số nên thường phải chia trường hợp $x_I<m$, $m\\le x_I\\le n$, $x_I>n$. Sau mỗi trường hợp phải kiểm tra lại điều kiện tham số.',
  '**9. Mô hình thực tế**\nXác định miền có nghĩa của biến trước khi tối ưu: thời gian, chiều dài, số lượng thường không âm và có thể bị chặn. Kết quả đại số ngoài miền thực tế phải loại; đáp án cần đơn vị và mức làm tròn.',
  '**10. Lỗi cần tránh**\n- Thiếu dấu trừ trong $-b/(2a)$.\n- Cho mở lên là có GTLN.\n- Chỉ tính giá trị tại đỉnh khi tối ưu trên đoạn.\n- Không kiểm tra đỉnh thuộc miền.\n- Dùng ba điểm có dữ kiện phụ thuộc khiến hệ không xác định duy nhất.\n- Bỏ miền thực tế.'
];

export const math10Qt18Theory: string[] = [
  '**1. Khái niệm hàm số**\nHàm số gán cho mỗi $x$ thuộc tập xác định $D$ **đúng một** giá trị $y=f(x)$. Một đầu vào không được có hai đầu ra; nhiều đầu vào khác nhau có thể cho cùng đầu ra.',
  '**2. Tập xác định và tập giá trị**\nTập xác định gồm mọi $x$ được phép dùng. Tập giá trị gồm mọi $f(x)$ thực sự nhận được. Trên đồ thị, tập xác định là hình chiếu lên $Ox$, tập giá trị là hình chiếu lên $Oy$, đồng thời phải xét điểm kín/hở.',
  '**3. Điều kiện công thức có nghĩa**\n- Mẫu số: khác 0.\n- Căn bậc chẵn: biểu thức dưới căn $\\ge0$.\n- Căn bậc chẵn ở mẫu: biểu thức dưới căn $>0$.\nNếu có nhiều điều kiện, tập xác định là giao của tất cả điều kiện.',
  '**4. Hàm từng đoạn**\nKhi tính $f(a)$, chọn đúng nhánh chứa $a$, chú ý dấu bằng ở điểm chia. Khi tìm tập xác định hoặc tập giá trị phải xét từng nhánh rồi lấy hợp, không dùng công thức của một nhánh cho toàn bộ.',
  '**5. Đọc giá trị và nghiệm từ đồ thị**\n$f(a)$ là tung độ điểm có hoành độ $a$. Nghiệm $f(x)=k$ là hoành độ giao điểm của đồ thị với đường ngang $y=k$; riêng $f(x)=0$ là giao với $Ox$.',
  '**6. Dấu và biến thiên**\n$f(x)>0$ nơi đồ thị nằm trên $Ox$, $f(x)<0$ nơi nằm dưới. Hàm đồng biến khi x tăng thì y tăng, nghịch biến khi x tăng thì y giảm. Điểm cao/thấp cục bộ không tự động là GTLN/GTNN toàn miền.',
  '**7. Kiểm tra một quan hệ có là hàm số**\nTrên hình, mọi đường thẳng đứng chỉ được cắt đồ thị tại nhiều nhất một điểm. Trên bảng, mỗi đầu vào chỉ có một đầu ra. Nếu một x ứng với hai y khác nhau thì không phải hàm số của x.',
  '**8. Mô hình affine và tỉ lệ**\nHàm affine $y=ax+b$ có tốc độ thay đổi $a$ và giá trị ban đầu $b$. Quan hệ tỉ lệ thuận có dạng $y=ax$ đi qua gốc. Hãy xác định đơn vị, miền thực tế và kiểm tra dữ liệu có cùng tốc độ thay đổi không.',
  '**9. Quy trình giải**\nXác định kiểu biểu diễn; tìm điều kiện/mốc nhánh; tính hoặc đọc đúng trục; giao các điều kiện; kiểm tra đầu mút; đối chiếu tập nền và ý nghĩa thực tế.',
  '**10. Lỗi cần tránh**\n- Nhầm tập xác định với tập giá trị.\n- Dùng điều kiện căn $\\ge0$ khi căn ở mẫu.\n- Quên loại nghiệm làm mẫu bằng 0.\n- Chọn sai nhánh tại điểm có dấu bằng.\n- Đọc hoành độ khi đề hỏi tung độ.\n- Coi một quan hệ có một đầu vào cho hai đầu ra là hàm.'
];

export const math10Qt20Theory: string[] = [
  '**1. Tam thức bậc hai**\nTam thức bậc hai có dạng\n$$f(x)=ax^2+bx+c\\qquad(a\\ne0).$$\nMuốn xét dấu, trước hết tính $\\Delta=b^2-4ac$ và, khi $\\Delta\\ge0$, tìm các nghiệm thực của $f(x)=0$.',
  '**2. Trường hợp $\\Delta<0$**\nTam thức không có nghiệm thực và luôn cùng dấu với hệ số $a$:\n- $a>0\\Rightarrow f(x)>0$ với mọi $x\\in\\mathbb R$;\n- $a<0\\Rightarrow f(x)<0$ với mọi $x\\in\\mathbb R$.',
  '**3. Trường hợp $\\Delta=0$**\nTam thức có nghiệm kép $x_0=-\\dfrac b{2a}$ và\n$$f(x)=a(x-x_0)^2.$$\nNó cùng dấu với $a$ khi $x\\ne x_0$ và bằng $0$ tại $x=x_0$. Vì thế “luôn dương” khác “không âm”.',
  '**4. Trường hợp $\\Delta>0$**\nGọi $x_1<x_2$ là hai nghiệm. Tam thức **cùng dấu với $a$ ở ngoài**, **trái dấu với $a$ ở trong**:\n$$\\begin{array}{c|ccccc}x&(-\\infty;x_1)&x_1&(x_1;x_2)&x_2&(x_2;+\\infty)\\\\ \\hline f(x)&\\operatorname{sgn}(a)&0&-\\operatorname{sgn}(a)&0&\\operatorname{sgn}(a)\\end{array}$$',
  '**5. Cách nhớ có bản chất**\nNếu phân tích được $f(x)=a(x-x_1)(x-x_2)$, ở ngoài hai nghiệm hai thừa số cùng dấu nên tích mang dấu $a$; ở giữa hai nghiệm chúng trái dấu nên tích đổi dấu. Không cần học thuộc bảng dấu rời rạc.',
  '**6. Đọc và lập bảng xét dấu**\nSắp các nghiệm từ nhỏ đến lớn, đặt đúng các mốc trên trục số, ghi $0$ tại nghiệm rồi điền dấu theo $a$. Nghiệm kép không làm đổi dấu; hai nghiệm đơn làm dấu đổi khi đi qua từng nghiệm.',
  '**7. Điều kiện tam thức luôn dương hoặc luôn âm**\nVới đúng tam thức bậc hai ($a\\ne0$):\n$$f(x)>0\\ \\forall x\\Longleftrightarrow a>0,\\Delta<0;$$\n$$f(x)\\ge0\\ \\forall x\\Longleftrightarrow a>0,\\Delta\\le0;$$\n$$f(x)<0\\ \\forall x\\Longleftrightarrow a<0,\\Delta<0;$$\n$$f(x)\\le0\\ \\forall x\\Longleftrightarrow a<0,\\Delta\\le0.$$',
  '**8. Bài chứa tham số**\nHệ số đầu $a$ có thể phụ thuộc tham số. Phải tách trường hợp $a=0$ trước vì biểu thức lúc đó trở thành bậc nhất hoặc hằng, không được tiếp tục áp dụng định lí dấu tam thức bậc hai.',
  '**9. Dấu tại một điểm và trên một khoảng**\nCó thể thay trực tiếp nếu chỉ hỏi $f(x_0)$. Nếu hỏi cả khoảng hoặc nhiều điểm, tìm nghiệm và dùng bảng dấu thường nhanh, ít sai hơn. Tại nghiệm, giá trị bằng $0$, không được kết luận dương hay âm.',
  '**10. Lỗi cần tránh**\n- Chỉ nhìn $a$ mà quên $\\Delta$.\n- Đảo quy tắc “cùng dấu ngoài, trái dấu trong”.\n- Cho nghiệm kép làm đổi dấu.\n- Dùng $\\Delta\\le0$ cho yêu cầu “$>0$”.\n- Quên xét $a=0$ trong bài tham số.\n- Không sắp nghiệm trước khi lập bảng.'
];

export const math10Qt21Theory: string[] = [
  '**1. Bất phương trình bậc hai một ẩn**\nCó dạng\n$$ax^2+bx+c>0,\\quad ax^2+bx+c<0,\\quad ax^2+bx+c\\ge0,\\quad ax^2+bx+c\\le0$$\nvới $a\\ne0$. Tập nghiệm chính là phần trục số nơi tam thức có dấu được yêu cầu.',
  '**2. Quy trình chuẩn**\n(1) Chuyển mọi hạng tử về một vế; (2) tìm nghiệm của tam thức; (3) lập bảng xét dấu; (4) chọn các khoảng đúng dấu; (5) quyết định có lấy mốc hay không. Không “chuyển vế rồi đổi chiều” tùy tiện.',
  '**3. Dấu nghiêm ngặt và không nghiêm ngặt**\nVới $>0$ hoặc $<0$, loại các điểm làm biểu thức bằng $0$. Với $\\ge0$ hoặc $\\le0$, lấy nghiệm của tử/tam thức. Riêng điểm làm mẫu bằng $0$ luôn bị loại, dù bất phương trình có dấu bằng.',
  '**4. Mẫu nghiệm nhanh khi $\\Delta>0$**\nNếu $x_1<x_2$:\n- yêu cầu cùng dấu $a$: lấy $(-\\infty;x_1)\\cup(x_2;+\\infty)$;\n- yêu cầu trái dấu $a$: lấy $(x_1;x_2)$.\nThêm hai đầu mút khi dấu bất phương trình có “$=$”.',
  '**5. Khi $\\Delta\\le0$**\n$\\Delta<0$: tam thức luôn cùng dấu $a$, nên tập nghiệm là $\\mathbb R$ hoặc $\\varnothing$. $\\Delta=0$: phải xét riêng nghiệm kép; chẳng hạn $a(x-x_0)^2>0$ có nghiệm $\\mathbb R\\setminus\\{x_0\\}$.',
  '**6. Bất phương trình tích**\nĐưa về tích các nhân tử, tìm tất cả nghiệm của từng nhân tử, sắp các mốc và lập một bảng dấu chung. Không giải riêng từng nhân tử rồi lấy hợp một cách máy móc vì dấu của tích phụ thuộc số nhân tử âm.',
  '**7. Bất phương trình thương**\nTìm nghiệm tử và điều kiện mẫu khác $0$, rồi lập bảng dấu theo tất cả mốc. Nghiệm của tử có thể được lấy khi có dấu bằng; nghiệm của mẫu không bao giờ được lấy.',
  '**8. Nhân tử lặp và rút gọn**\nNhân tử mũ chẵn không làm đổi dấu khi đi qua nghiệm. Nếu rút gọn nhân tử chung trong phân thức, điều kiện loại của biểu thức ban đầu vẫn phải được giữ lại.',
  '**9. Bài tham số và số nghiệm**\nChuyển yêu cầu về đặc điểm của tập nghiệm: có nghiệm, vô nghiệm, đúng với mọi $x$, chứa một điểm, hoặc bằng một khoảng cho trước. Sau đó dùng $\\Delta$, dấu $a$, vị trí nghiệm và nhớ tách trường hợp suy biến $a=0$.',
  '**10. Bài toán thực tế**\nLập bất phương trình từ điều kiện chiều cao, doanh thu, diện tích hoặc thời gian; giải trên $\\mathbb R$ rồi giao với miền thực tế như $t\\ge0$, chiều dài dương hoặc số lượng nguyên.',
  '**11. Cách viết tập nghiệm**\nDùng ngoặc tròn ở vô cực và điểm bị loại; dùng ngoặc vuông tại nghiệm được lấy. Ví dụ: $x<1$ hoặc $x\\ge3$ được viết $(-\\infty;1)\\cup[3;+\\infty)$.',
  '**12. Lỗi cần tránh**\n- Không đưa về một vế.\n- Chọn trong/ngoài hai nghiệm mà không xét dấu $a$.\n- Lấy nghiệm mẫu.\n- Bỏ mất điểm loại sau rút gọn.\n- Quên nghiệm kép.\n- Quên giao miền thực tế.\n- Chia hai vế cho biểu thức chưa biết dấu.'
];

export const g10MathModule3TheoryByQuestionTypeId: Record<string, string[]> = {
  'math10-qt4': math10Qt4Theory,
  'math10-qt18': math10Qt18Theory,
  'math10-qt20': math10Qt20Theory,
  'math10-qt21': math10Qt21Theory
};

export const g10MathModule3TheoryCheckpointsByQuestionTypeId: Record<
  string,
  QuestionTypeTheoryCheckpoint[]
> = {
  'math10-qt4': [
    {
      id: 'math10-check-qt4-1',
      question: 'Parabol $y=2x^2-4x+1$ có tính chất nào?',
      options: ['Mở xuống và có GTLN', 'Mở lên và có GTNN', 'Mở lên và có GTLN', 'Không có cực trị'],
      correctAnswer: 'B',
      explanation: 'Hệ số $a=2>0$ nên parabol mở lên và đạt GTNN tại đỉnh.'
    },
    {
      id: 'math10-check-qt4-2',
      question: 'Khi tìm GTLN, GTNN của hàm bậc hai trên đoạn $[m;n]$, cần so sánh',
      options: [
        'Chỉ giá trị tại đỉnh',
        'Chỉ hai đầu mút',
        'Hai đầu mút và đỉnh nếu đỉnh thuộc đoạn',
        'Mọi nghiệm của phương trình $f(x)=0$'
      ],
      correctAnswer: 'C',
      explanation: 'Trên đoạn đóng, hai đầu mút luôn là ứng viên; đỉnh chỉ được xét nếu hoành độ đỉnh nằm trong đoạn.'
    },
    {
      id: 'math10-check-qt4-3',
      question: 'Biết parabol có đỉnh $I(p;q)$ và đi qua một điểm khác, dạng nào thuận lợi nhất?',
      options: ['$y=a(x-p)^2+q$', '$y=ax+b$', '$y=a(x-q)^2+p$', '$y=a(x-p)(x-q)$'],
      correctAnswer: 'A',
      explanation: 'Dạng đỉnh dùng trực tiếp tọa độ $I(p;q)$ và chỉ còn hệ số $a$ cần xác định.'
    }
  ],
  'math10-qt18': [
    {
      id: 'math10-check-qt18-1',
      question: 'Điều kiện xác định của biểu thức $\\dfrac1{\\sqrt{x-2}}$ là',
      options: ['$x\\ge2$', '$x>2$', '$x\\ne2$', '$x<2$'],
      correctAnswer: 'B',
      explanation: 'Biểu thức dưới căn phải không âm, đồng thời mẫu phải khác 0, nên $x-2>0$.'
    },
    {
      id: 'math10-check-qt18-2',
      question: 'Một đường cong là đồ thị của hàm số $y=f(x)$ nếu',
      options: [
        'Mọi đường ngang cắt nó không quá một điểm',
        'Mọi đường thẳng đứng cắt nó không quá một điểm',
        'Nó đi qua gốc tọa độ',
        'Nó chỉ nằm phía trên trục hoành'
      ],
      correctAnswer: 'B',
      explanation: 'Mỗi đầu vào x chỉ được ứng với nhiều nhất một đầu ra y, chính là phép thử đường thẳng đứng.'
    },
    {
      id: 'math10-check-qt18-3',
      question: 'Tập xác định của hàm số được đọc trên đồ thị bằng hình chiếu lên',
      options: ['Trục $Oy$', 'Đường $y=x$', 'Trục $Ox$', 'Gốc tọa độ'],
      correctAnswer: 'C',
      explanation: 'Tập xác định gồm các hoành độ xuất hiện trên đồ thị nên được đọc theo hình chiếu lên $Ox$.'
    }
  ],
  'math10-qt20': [
    {
      id: 'math10-check-qt20-1',
      question: 'Nếu tam thức $f(x)=ax^2+bx+c$ có $\\Delta<0$ thì',
      options: ['Luôn cùng dấu với $a$', 'Luôn dương', 'Luôn âm', 'Đổi dấu tại $-b/(2a)$'],
      correctAnswer: 'A',
      explanation: 'Khi không có nghiệm thực, tam thức không đổi dấu và mang dấu của hệ số bậc hai.'
    },
    {
      id: 'math10-check-qt20-2',
      question: 'Khi đi qua nghiệm kép, dấu của tam thức bậc hai',
      options: ['Luôn đổi từ dương sang âm', 'Luôn đổi từ âm sang dương', 'Không đổi', 'Không xác định'],
      correctAnswer: 'C',
      explanation: 'Tại nghiệm kép, đồ thị tiếp xúc trục hoành nên tam thức bằng 0 nhưng không đổi dấu.'
    },
    {
      id: 'math10-check-qt20-3',
      question: 'Điều kiện để tam thức bậc hai dương với mọi $x\\in\\mathbb R$ là',
      options: ['$a>0,\\Delta\\le0$', '$a>0,\\Delta<0$', '$a<0,\\Delta<0$', '$a>0,\\Delta>0$'],
      correctAnswer: 'B',
      explanation: 'Dấu dương nghiêm ngặt không cho phép nghiệm kép, nên cần $a>0$ và $\\Delta<0$.'
    }
  ],
  'math10-qt21': [
    {
      id: 'math10-check-qt21-1',
      question: 'Với bất phương trình $f(x)\\le0$, nghiệm của phương trình $f(x)=0$',
      options: ['Luôn bị loại', 'Được lấy nếu thuộc miền xác định', 'Chỉ lấy khi là nghiệm kép', 'Chỉ lấy khi dương'],
      correctAnswer: 'B',
      explanation: 'Dấu “≤” nhận cả những điểm làm biểu thức bằng 0, miễn điểm đó thuộc miền xác định.'
    },
    {
      id: 'math10-check-qt21-2',
      question: 'Trong bất phương trình phân thức, điểm làm mẫu số bằng 0',
      options: ['Được lấy khi có dấu ≥', 'Luôn bị loại', 'Được lấy nếu tử cũng bằng 0', 'Chỉ loại với dấu nghiêm ngặt'],
      correctAnswer: 'B',
      explanation: 'Phân thức không xác định tại nghiệm của mẫu nên các điểm này luôn bị loại.'
    },
    {
      id: 'math10-check-qt21-3',
      question: 'Vì sao không được tùy ý chia hai vế bất phương trình cho biểu thức chứa ẩn?',
      options: [
        'Vì biểu thức luôn bằng 0',
        'Vì có thể chưa biết dấu để quyết định có đổi chiều hay không',
        'Vì phép chia không dùng cho số thực',
        'Vì sẽ luôn làm mất nghiệm'
      ],
      correctAnswer: 'B',
      explanation: 'Chia cho số âm phải đổi chiều, còn chia cho 0 không hợp lệ; do đó cần biết dấu trước.'
    }
  ]
};
