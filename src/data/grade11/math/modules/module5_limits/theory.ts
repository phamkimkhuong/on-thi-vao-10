import type { TheoryBlock } from '@/data/schema';
const common={courseId:'grade11:math' as const,moduleId:'math11-m5',sourceIds:['math11-source-official-program','math11-source-kntt-textbook-1'],reviewStatus:'source_checked' as const};
export const math11Module5Theory:TheoryBlock[]=[
  {...common,id:'tb-math11-m5-01',lessonIds:['math11-kntt-l15'],outcomeIds:['out-math11-m5-01'],questionTypeIds:['math11-qt15'],title:'Giới hạn của dãy số',objectives:['Nhận biết trực giác và tính giới hạn hữu hạn, vô cực.','Tính tổng cấp số nhân lùi vô hạn.'],content:[
    'Dãy $(u_n)$ có giới hạn $L$ nếu khi $n$ tăng không giới hạn, $u_n$ tiến gần tùy ý tới $L$. Các giới hạn cơ bản: $1/n^k\\to0$ với $k>0$ và $q^n\\to0$ khi $|q|<1$.',
    'Các phép cộng, trừ, nhân, chia giới hạn được dùng khi các giới hạn thành phần tồn tại và mẫu có giới hạn khác 0. Với phân thức theo $n$, chia tử và mẫu cho lũy thừa bậc cao nhất.',
    'Nếu $|q|<1$, tổng cấp số nhân lùi vô hạn $u_1+u_1q+u_1q^2+\\cdots$ hội tụ. Giới hạn $+\\infty$ hoặc $-\\infty$ mô tả độ lớn tăng không bị chặn cùng dấu.'
  ].join('\n\n'),formulas:[
    {id:'form-math11-m5-01-basic',label:'Giới hạn cơ bản',expression:'\\lim_{n\\to\\infty}\\frac1{n^k}=0,\\quad \\lim_{n\\to\\infty}q^n=0',variables:[{symbol:'k',meaning:'Số thực dương'},{symbol:'q',meaning:'Công bội'}],conditions:['$k>0$','$|q|<1$']},
    {id:'form-math11-m5-01-series',label:'Tổng cấp số nhân lùi vô hạn',expression:'S=\\frac{u_1}{1-q}',variables:[{symbol:'u_1',meaning:'Số hạng đầu'},{symbol:'q',meaning:'Công bội'}],conditions:['$|q|<1$']}
  ],keyPoints:['Chia cho lũy thừa bậc cao nhất khi xử lí phân thức.','$q^n\\to0$ chỉ khi $|q|<1$.','Tổng nhân lùi vô hạn cần $|q|<1$.'],workedExamples:[{id:'ex-math11-m5-01',title:'Giới hạn phân thức',problem:'Tính $\\lim\\frac{2n+1}{n+3}$.',steps:['Chia tử và mẫu cho $n$.','Giới hạn bằng $(2+0)/(1+0)=2$.'],answer:'Giới hạn bằng 2.'}],checkpoints:[{id:'cp-math11-m5-01',question:'$\\lim 1/n$ bằng:',options:['$1$','$0$','$+\\infty$','$-\\infty$'],correctAnswer:'B',explanation:'Nghịch đảo số nguyên dương tiến tới 0.'}],orderIndex:15},
  {...common,id:'tb-math11-m5-02',lessonIds:['math11-kntt-l16'],outcomeIds:['out-math11-m5-02'],questionTypeIds:['math11-qt16'],title:'Giới hạn của hàm số',objectives:['Nhận biết giới hạn tại điểm, một phía và tại vô cực.','Tính giới hạn bằng phép toán và biến đổi đại số.'],content:[
    'Giới hạn $\\lim_{x\\to x_0}f(x)=L$ mô tả giá trị $f(x)$ tiến tới khi $x$ gần $x_0$, không yêu cầu $x=x_0$. Giới hạn hai phía tồn tại khi giới hạn trái và phải bằng nhau.',
    'Nếu thay trực tiếp không tạo dạng vô định, có thể dùng các phép toán giới hạn. Với $0/0$, thường phân tích nhân tử, rút gọn hoặc nhân liên hợp trước khi lấy giới hạn.',
    'Tại vô cực, so sánh bậc cao nhất. Với giới hạn vô cực tại điểm, phải xét dấu của thừa số tiến tới 0 và có thể cần tách hai phía.'
  ].join('\n\n'),formulas:[
    {id:'form-math11-m5-02-sided',label:'Điều kiện giới hạn hai phía',expression:'\\lim_{x\\to x_0}f(x)=L\\Leftrightarrow\\lim_{x\\to x_0^-}f(x)=\\lim_{x\\to x_0^+}f(x)=L',variables:[{symbol:'x_0',meaning:'Điểm tiến tới'}],conditions:['Hai giới hạn một phía tồn tại']},
    {id:'form-math11-m5-02-ratio',label:'Tỉ số đa thức cùng bậc',expression:'\\lim_{x\\to\\pm\\infty}\\frac{a_nx^n+\\cdots}{b_nx^n+\\cdots}=\\frac{a_n}{b_n}',variables:[{symbol:'a_n,b_n',meaning:'Hệ số bậc cao nhất'}],conditions:['$b_n\\ne0$']}
  ],keyPoints:['Giới hạn không phụ thuộc giá trị hàm đúng tại điểm.','Hai giới hạn một phía phải bằng nhau.','Khử dạng $0/0$ trước khi tính.'],workedExamples:[{id:'ex-math11-m5-02',title:'Khử dạng vô định',problem:'Tính $\\lim_{x\\to2}\\frac{x^2-4}{x-2}$.',steps:['Phân tích $x^2-4=(x-2)(x+2)$.','Rút gọn rồi lấy giới hạn $x+2\\to4$.'],answer:'Giới hạn bằng 4.'}],checkpoints:[{id:'cp-math11-m5-02',question:'Nếu giới hạn trái là 1, giới hạn phải là 2 thì giới hạn hai phía:',options:['Bằng 1','Bằng 2','Bằng 3','Không tồn tại'],correctAnswer:'D',explanation:'Hai giới hạn một phía không bằng nhau.'}],orderIndex:16},
  {...common,id:'tb-math11-m5-03',lessonIds:['math11-kntt-l17'],outcomeIds:['out-math11-m5-03'],questionTypeIds:['math11-qt17'],title:'Hàm số liên tục',objectives:['Xét liên tục tại điểm và trên miền.','Nhận biết tính liên tục của hàm sơ cấp và hàm ghép từng đoạn.'],content:[
    'Hàm $f$ liên tục tại $x_0$ khi xác định tại $x_0$, tồn tại giới hạn tại đó và giới hạn bằng $f(x_0)$. Thiếu một trong ba điều kiện thì hàm không liên tục tại điểm.',
    'Hàm đa thức liên tục trên $\\mathbb R$; hàm phân thức, căn thức và lượng giác liên tục trên tập xác định. Tổng, hiệu, tích của các hàm liên tục vẫn liên tục; thương liên tục tại nơi mẫu khác 0.',
    'Với hàm cho từng đoạn, chỉ cần kiểm tra tại các điểm nối bằng hai giới hạn một phía và giá trị hàm. Trên đoạn đóng, tính liên tục còn hỗ trợ nhận biết sự tồn tại nghiệm khi hàm đổi dấu.'
  ].join('\n\n'),formulas:[{id:'form-math11-m5-03-definition',label:'Liên tục tại một điểm',expression:'\\lim_{x\\to x_0}f(x)=f(x_0)',variables:[{symbol:'x_0',meaning:'Điểm thuộc tập xác định'}],conditions:['$f(x_0)$ xác định','Giới hạn tồn tại']}],keyPoints:['Liên tục cần giới hạn bằng giá trị hàm.','Hàm sơ cấp liên tục trên tập xác định.','Hàm từng đoạn phải kiểm tra điểm nối.'],workedExamples:[{id:'ex-math11-m5-03',title:'Tìm tham số liên tục',problem:'Cho $f(x)=(x^2-1)/(x-1)$ khi $x\\ne1$ và $f(1)=a$. Tìm $a$.',steps:['Rút gọn nhánh đầu thành $x+1$.','$\\lim_{x\\to1}f(x)=2$, nên chọn $a=2$.'],answer:'$a=2$.'}],checkpoints:[{id:'cp-math11-m5-03',question:'Hàm $1/x$ liên tục trên:',options:['$\\mathbb R$','$(-\\infty;0)$ và $(0;+\\infty)$','$[0;+\\infty)$','Chỉ tại 0'],correctAnswer:'B',explanation:'Hàm phân thức liên tục trên tập xác định $x\\ne0$.'}],orderIndex:17}
];

math11Module5Theory[0].content += '\n\nQuy trình chọn phương pháp: nhận dạng giới hạn cơ bản; với phân thức thì chuẩn hóa theo lũy thừa bậc cao nhất; với căn thức thì cân nhắc nhân liên hợp; với dãy kẹp giữa hai dãy cùng giới hạn thì dùng định lí kẹp.\n\nTrong bài toán thực tế, trước khi dùng tổng cấp số nhân vô hạn phải xác định đúng số hạng đầu, công bội và kiểm tra $|q|<1$.';
math11Module5Theory[0].workedExamples.push(
  {id:'ex-math11-m5-01-conjugate',title:'Giới hạn có căn thức',problem:'Tính $\\lim_{n\\to\\infty}n(\\sqrt{n^2+1}-n)$.',steps:['Nhân và chia với biểu thức liên hợp $\\sqrt{n^2+1}+n$.','Ta được $\\dfrac{1}{\\sqrt{1+1/n^2}+1}$.','Cho $n\\to\\infty$, mẫu tiến tới 2.'],answer:'Giới hạn bằng $\\dfrac12$.'},
  {id:'ex-math11-m5-01-model',title:'Tổng quãng đường nảy của quả bóng',problem:'Một quả bóng rơi từ độ cao 10 m. Sau mỗi lần chạm đất, bóng nảy lên bằng một nửa độ cao trước đó. Tính tổng quãng đường bóng đi được.',steps:['Lần rơi đầu dài 10 m.','Các quãng đường đi lên có tổng $5+2{,}5+\\cdots=10$ m.','Các quãng đường đi xuống sau lần đầu cũng có tổng 10 m.'],answer:'Tổng quãng đường là 30 m.'}
);
math11Module5Theory[0].checkpoints.push(
  {id:'cp-math11-m5-01-condition',question:'Điều kiện để $q^n\\to0$ khi $n\\to\\infty$ là:',options:['$q>1$','$q<1$','$|q|<1$','$q\\ne1$'],correctAnswer:'C',explanation:'Cần $-1<q<1$.'},
  {id:'cp-math11-m5-01-series',question:'Tổng $3+\\dfrac32+\\dfrac34+\\cdots$ bằng:',options:['$3$','$6$','$9$','$12$'],correctAnswer:'B',explanation:'$S=3/(1-1/2)=6$.'},
  {id:'cp-math11-m5-01-recurrence',question:'Nếu một dãy hội tụ có giới hạn $L$ và $u_{n+1}=(u_n+2)/3$ thì $L$ bằng:',options:['$1$','$2$','$3$','$4$'],correctAnswer:'A',explanation:'$L=(L+2)/3$, suy ra $L=1$.'}
);

math11Module5Theory[1].content += '\n\nThứ tự xử lí hiệu quả: thay trực tiếp để nhận dạng; nếu gặp $0/0$ thì phân tích nhân tử hoặc nhân liên hợp; nếu $x\\to\\pm\\infty$ thì chuẩn hóa theo bậc cao nhất; nếu mẫu tiến tới 0 thì lập bảng dấu và xét từng phía.\n\nGiới hạn đặc biệt $\\lim_{x\\to0}\\dfrac{\\sin x}{x}=1$ có thể kết hợp với phép đổi biến.';
math11Module5Theory[1].workedExamples.push(
  {id:'ex-math11-m5-02-trigonometric',title:'Giới hạn lượng giác',problem:'Tính $\\lim_{x\\to0}\\dfrac{\\sin 3x}{\\sin 5x}$.',steps:['Tách thành $\\dfrac{\\sin 3x}{3x}\\cdot\\dfrac{5x}{\\sin 5x}\\cdot\\dfrac35$.','Hai tỉ số lượng giác đầu tiên đều tiến tới 1.'],answer:'Giới hạn bằng $\\dfrac35$.'},
  {id:'ex-math11-m5-02-conjugate',title:'Khử dạng vô định bằng liên hợp',problem:'Tính $\\lim_{x\\to0}\\dfrac{\\sqrt{1+2x}-\\sqrt{1-x}}{x}$.',steps:['Nhân tử và mẫu với tổng hai căn thức.','Tử số mới là $3x$.','Rút gọn $x$ rồi cho $x\\to0$.'],answer:'Giới hạn bằng $\\dfrac32$.'}
);
math11Module5Theory[1].checkpoints.push(
  {id:'cp-math11-m5-02-sided',question:'$\\lim_{x\\to0}\\dfrac{|x|}{x}$:',options:['Bằng $-1$','Bằng $0$','Bằng $1$','Không tồn tại'],correctAnswer:'D',explanation:'Giới hạn trái bằng $-1$, giới hạn phải bằng 1.'},
  {id:'cp-math11-m5-02-infinity',question:'$\\lim_{x\\to+\\infty}\\dfrac{3x^2-x}{2x^2+1}$ bằng:',options:['$0$','$\\dfrac32$','$2$','$+\\infty$'],correctAnswer:'B',explanation:'Lấy tỉ số hai hệ số bậc cao nhất.'},
  {id:'cp-math11-m5-02-sign',question:'$\\lim_{x\\to2^+}\\dfrac1{x-2}$ bằng:',options:['$-\\infty$','$+\\infty$','$0$','$1$'],correctAnswer:'B',explanation:'Mẫu dương và tiến tới 0.'}
);

math11Module5Theory[2].content += '\n\nVới hàm từng đoạn: xác định điểm nối; tính giới hạn trái và phải; so sánh hai giới hạn; cuối cùng so sánh với giá trị hàm.\n\nNếu $f$ liên tục trên $[a;b]$ và $f(a)f(b)<0$ thì tồn tại ít nhất một $c\\in(a;b)$ sao cho $f(c)=0$. Kết luận này không tự động bảo đảm nghiệm duy nhất.';
math11Module5Theory[2].workedExamples.push(
  {id:'ex-math11-m5-03-extension',title:'Bổ sung giá trị để hàm liên tục',problem:'Đặt $f(x)=\\dfrac{\\sqrt{x+3}-2}{x-1}$ với $x\\ne1$. Chọn $f(1)$ để hàm liên tục tại 1.',steps:['Nhân liên hợp được $f(x)=1/(\\sqrt{x+3}+2)$.','Giới hạn khi $x\\to1$ bằng $1/4$.','Giá trị tại 1 phải bằng giới hạn.'],answer:'Chọn $f(1)=\\dfrac14$.'},
  {id:'ex-math11-m5-03-root',title:'Chứng minh phương trình có nghiệm',problem:'Chứng minh $x^3+x-1=0$ có ít nhất một nghiệm trong $(0;1)$.',steps:['Đặt $f(x)=x^3+x-1$, liên tục trên $[0;1]$.','$f(0)=-1$, $f(1)=1$ nên tích hai giá trị âm.','Áp dụng định lí giá trị trung gian.'],answer:'Có ít nhất một nghiệm thuộc $(0;1)$.'}
);
math11Module5Theory[2].checkpoints.push(
  {id:'cp-math11-m5-03-conditions',question:'Để $f$ liên tục tại $x_0$, cần:',options:['Chỉ $f(x_0)$ xác định','Chỉ giới hạn tồn tại','Chỉ giới hạn bằng 0','Xác định, có giới hạn và giới hạn bằng giá trị hàm'],correctAnswer:'D',explanation:'Đây là đủ ba điều kiện của định nghĩa.'},
  {id:'cp-math11-m5-03-rational',question:'Hàm $\\dfrac{x+1}{x^2-4}$ liên tục tại mọi điểm thỏa:',options:['$x\\ne\\pm2$','$x>2$','$x<2$','$x\\ne0$'],correctAnswer:'A',explanation:'Mẫu phải khác 0.'},
  {id:'cp-math11-m5-03-ivt',question:'Nếu $f$ liên tục trên $[a;b]$ và $f(a)f(b)<0$ thì chắc chắn:',options:['Có đúng một nghiệm','Không có nghiệm','Có ít nhất một nghiệm trong $(a;b)$','Mọi điểm đều là nghiệm'],correctAnswer:'C',explanation:'Định lí giá trị trung gian bảo đảm ít nhất một nghiệm.'}
);
