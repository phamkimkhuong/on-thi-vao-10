import type {TheoryBlock,TheoryFormula} from '@/data/schema';
const tb=(n:number,title:string,content:string[],formulas:TheoryFormula[],keys:string[],problem:string,steps:string[],answer:string,question:string,options:[string,string,string,string],correct:'A'|'B'|'C'|'D',explanation:string):TheoryBlock=>({id:`tb-math11-m6-0${n}`,courseId:'grade11:math',moduleId:'math11-m6',lessonIds:[`math11-kntt-l${17+n}`],outcomeIds:[`out-math11-m6-0${n}`],questionTypeIds:[`math11-qt${17+n}`],sourceIds:['math11-source-official-program','math11-source-kntt-textbook-2'],title,objectives:[`Nắm định nghĩa, điều kiện và tính chất của ${title.toLowerCase()}.`,'Vận dụng trong tính toán và tình huống phù hợp.'],content:content.join('\n\n'),formulas,keyPoints:keys,workedExamples:[{id:`ex-math11-m6-0${n}`,title:'Ví dụ định hướng',problem,steps,answer}],checkpoints:[{id:`cp-math11-m6-0${n}`,question,options,correctAnswer:correct,explanation}],orderIndex:17+n,reviewStatus:'source_checked'});
export const math11Module6Theory:TheoryBlock[]=[
tb(1,'Lũy thừa với số mũ thực',[
'Với cơ số dương $a$, lũy thừa $a^\\alpha$ được xác định cho mọi số thực $\\alpha$. Với số mũ hữu tỉ $m/n$, lũy thừa liên hệ với căn bậc $n$; điều kiện cơ số cần được xét khi dùng căn.',
'Các quy tắc nhân, chia cùng cơ số và lũy thừa của lũy thừa tiếp tục đúng với số mũ thực khi các biểu thức xác định. Không được biến tổng hai lũy thừa thành một lũy thừa.',
'Mô hình tăng theo tỉ lệ thường có dạng $A=A_0(1+r)^t$; số chu kì nằm ở số mũ.'
],[{id:'form-math11-m6-01-rules',label:'Quy tắc lũy thừa',expression:'a^ma^n=a^{m+n},\\quad \\frac{a^m}{a^n}=a^{m-n},\\quad(a^m)^n=a^{mn}',variables:[{symbol:'a',meaning:'Cơ số dương'},{symbol:'m,n',meaning:'Số thực'}],conditions:['$a>0$']},{id:'form-math11-m6-01-rational',label:'Số mũ hữu tỉ',expression:'a^{m/n}=\\sqrt[n]{a^m}',variables:[{symbol:'m',meaning:'Số nguyên'},{symbol:'n',meaning:'Số nguyên dương'}],conditions:['$a>0$','$n>0$']}],['Cộng số mũ khi nhân cùng cơ số.','Nhân số mũ khi nâng một lũy thừa lên lũy thừa.','Cơ số của lũy thừa số mũ thực phải dương.'],'Rút gọn $2^3\\cdot2^{-1}$.',['Cộng số mũ: $2^{3-1}=2^2$.','Tính được 4.'],'Kết quả bằng 4.','$a^m\\cdot a^n$ bằng:',['$a^{mn}$','$a^{m+n}$','$2a^{m+n}$','$a^{m-n}$'],'B','Nhân cùng cơ số thì cộng số mũ.'),
tb(2,'Lôgarit',[
'$\\log_ab$ là số mũ phải đặt lên cơ số $a$ để được $b$. Điều kiện bắt buộc: $a>0$, $a\\ne1$, $b>0$.',
'Lôgarit biến tích thành tổng, thương thành hiệu và đưa số mũ xuống làm hệ số. Không có công thức tách $\\log_a(x+y)$.',
'Công thức đổi cơ số cho phép tính lôgarit bằng máy tính và chuyển các cơ số khác nhau về cùng một cơ số.'
],[{id:'form-math11-m6-02-definition',label:'Định nghĩa lôgarit',expression:'\\log_ab=\\alpha\\Leftrightarrow a^\\alpha=b',variables:[{symbol:'a',meaning:'Cơ số'},{symbol:'b',meaning:'Đối số'}],conditions:['$a>0$','$a\\ne1$','$b>0$']},{id:'form-math11-m6-02-rules',label:'Tính chất lôgarit',expression:'\\log_a(xy)=\\log_ax+\\log_ay,\\quad\\log_a\\frac{x}{y}=\\log_ax-\\log_ay',variables:[{symbol:'x,y',meaning:'Các số dương'}],conditions:['$x>0$','$y>0$']},{id:'form-math11-m6-02-change',label:'Đổi cơ số',expression:'\\log_ab=\\frac{\\log_cb}{\\log_ca}',variables:[{symbol:'c',meaning:'Cơ số mới'}],conditions:['$c>0$','$c\\ne1$']}],['Đối số lôgarit phải dương.','$\\log_a1=0$, $\\log_aa=1$.','Lôgarit của tích mới tách thành tổng.'],'Tính $\\log_2 8$.',['Giải $2^x=8$.','Vì $2^3=8$, suy ra $x=3$.'],'$\\log_2 8=3$.','$\\log_a1$ bằng:',['$0$','$1$','$a$','Không xác định'],'A','$a^0=1$.'),
tb(3,'Hàm số mũ và hàm số lôgarit',[
'Hàm mũ $y=a^x$ xác định trên $\\mathbb R$, nhận giá trị dương và đi qua $(0;1)$. Hàm lôgarit $y=\\log_ax$ xác định trên $(0;+\\infty)$ và đi qua $(1;0)$.',
'Nếu $a>1$, cả hai hàm tăng; nếu $0<a<1$, cả hai hàm giảm. Hai đồ thị cùng cơ số đối xứng qua đường $y=x$ vì hai hàm ngược nhau.',
'Tăng trưởng, lãi kép và phân rã theo tỉ lệ được mô hình hóa bằng hàm mũ; cần phân biệt số chu kì với thời điểm ban đầu.'
],[{id:'form-math11-m6-03-domains',label:'Miền xác định và tập giá trị',expression:'D_{a^x}=\\mathbb R,\\ T_{a^x}=(0;+\\infty);\\quad D_{\\log_ax}=(0;+\\infty),\\ T_{\\log_ax}=\\mathbb R',variables:[{symbol:'a',meaning:'Cơ số'}],conditions:['$a>0$','$a\\ne1$']},{id:'form-math11-m6-03-growth',label:'Tăng trưởng theo tỉ lệ',expression:'A_n=A_0(1+r)^n',variables:[{symbol:'r',meaning:'Tỉ lệ tăng mỗi chu kì'},{symbol:'n',meaning:'Số chu kì'}],conditions:['$1+r>0$']}],['Hàm mũ luôn dương.','Hàm log chỉ nhận đối số dương.','Cơ số lớn hơn 1: tăng; cơ số giữa 0 và 1: giảm.'],'Tính số tiền sau 2 năm khi gửi 100 triệu, lãi kép 10%/năm.',['Dùng $A=100(1+0{,}1)^2$.','Tính được $121$.'],'Số tiền là 121 triệu đồng.','Đồ thị $y=a^x$ luôn đi qua:',['$(0;0)$','$(0;1)$','$(1;0)$','$(1;1)$'],'B','$a^0=1$.'),
tb(4,'Phương trình và bất phương trình mũ–lôgarit',[
'Phương trình mũ cơ bản $a^x=b$ có nghiệm $x=\\log_ab$ khi $b>0$. Nếu hai vế đưa được về cùng cơ số hợp lệ thì so sánh số mũ.',
'Phương trình lôgarit phải đặt điều kiện đối số dương trước khi biến đổi. Với cùng cơ số, tính đơn ánh cho phép so sánh đối số.',
'Trong bất phương trình, hàm tăng giữ chiều và hàm giảm đổi chiều. Vì vậy cơ số $a>1$ và $0<a<1$ phải được tách rõ.'
],[{id:'form-math11-m6-04-equations',label:'Phương trình cơ bản',expression:'a^x=b\\Leftrightarrow x=\\log_ab;\\qquad\\log_ax=b\\Leftrightarrow x=a^b',variables:[{symbol:'a',meaning:'Cơ số'},{symbol:'b',meaning:'Hằng số'}],conditions:['$a>0$','$a\\ne1$','$b>0$ cho phương trình mũ']},{id:'form-math11-m6-04-order',label:'So sánh cùng cơ số',expression:'a^u>a^v\\Leftrightarrow\\begin{cases}u>v,&a>1\\\\u<v,&0<a<1\\end{cases}',variables:[{symbol:'u,v',meaning:'Biểu thức số mũ'}],conditions:['$a>0$','$a\\ne1$']}],['Đưa về cùng cơ số khi có thể.','Lôgarit luôn cần đối số dương.','Cơ số nhỏ hơn 1 làm đổi chiều bất phương trình.'],'Giải $2^{x+1}=8$.',['Viết $8=2^3$.','$x+1=3$, nên $x=2$.'],'Nghiệm $x=2$.','Nghiệm của $\\log_2x=3$ là:',['$x=3$','$x=5$','$x=6$','$x=8$'],'D','$x=2^3=8$.')
];

math11Module6Theory[0].content += '\n\nKhi rút gọn, nên đưa các căn và lũy thừa về cùng một cơ số rồi thực hiện phép toán trên số mũ. Với số mũ vô tỉ, cơ số phải dương.\n\nTrong mô hình tăng hoặc giảm, số mũ biểu diễn số chu kì đã trôi qua. Cần đổi đơn vị thời gian về đúng độ dài một chu kì trước khi thay số.';
math11Module6Theory[0].workedExamples.push(
  {id:'ex-math11-m6-01-rational',title:'Rút gọn lũy thừa hữu tỉ',problem:'Tính $(\\sqrt[3]{4}\\cdot\\sqrt[4]{8})^{12}$.',steps:['Đưa về cơ số 2: $2^{2/3}\\cdot2^{3/4}$.','Trong ngoặc được $2^{17/12}$.','Nâng lên lũy thừa 12 được $2^{17}$.'],answer:'Giá trị bằng $2^{17}=131072$.'},
  {id:'ex-math11-m6-01-decay',title:'Mô hình chu kì bán rã',problem:'Một mẫu chất ban đầu có 160 mg và chu kì bán rã 2 giờ. Sau 8 giờ còn bao nhiêu?',steps:['Đã trải qua $8/2=4$ chu kì.','Khối lượng còn lại là $160(1/2)^4$.'],answer:'Còn lại 10 mg.'}
);
math11Module6Theory[0].checkpoints.push(
  {id:'cp-math11-m6-01-domain',question:'Để $a^{\\sqrt2}$ được xác định theo lũy thừa số mũ thực, điều kiện là:',options:['$a\\ne0$','$a>0$','$a\\ge0$','$a>1$'],correctAnswer:'B',explanation:'Cơ số phải dương.'},
  {id:'cp-math11-m6-01-value',question:'$81^{3/4}$ bằng:',options:['$9$','$18$','$27$','$64$'],correctAnswer:'C',explanation:'$81=3^4$ nên kết quả là $3^3=27$.'},
  {id:'cp-math11-m6-01-equation',question:'Nghiệm dương của $x^{3/2}=27$ là:',options:['$3$','$6$','$8$','$9$'],correctAnswer:'D',explanation:'$x=27^{2/3}=9$.'}
);

math11Module6Theory[1].content += '\n\nTrước mỗi phép biến đổi, hãy lập bộ lọc điều kiện: cơ số dương và khác 1, mọi đối số dương. Sau khi giải, nghiệm phải được đối chiếu lại với các điều kiện này.\n\nCác tích dạng $\\log_ab\\,\\log_bc$ có thể ghép thành $\\log_ac$.';
math11Module6Theory[1].workedExamples.push(
  {id:'ex-math11-m6-02-chain',title:'Chuỗi đổi cơ số',problem:'Tính $\\log_2 3\\cdot\\log_3 5\\cdot\\log_5 8$.',steps:['Dùng $\\log_ab\\cdot\\log_bc=\\log_ac$.','Biểu thức bằng $\\log_2 8$.'],answer:'Giá trị bằng 3.'},
  {id:'ex-math11-m6-02-equation',title:'Kết hợp hai cơ số lôgarit',problem:'Giải $\\log_2x+\\log_4x=6$.',steps:['Điều kiện $x>0$. Đặt $t=\\log_2x$ thì $\\log_4x=t/2$.','Giải $t+t/2=6$ được $t=4$.','$\\log_2x=4$ nên $x=16$.'],answer:'Nghiệm $x=16$.'}
);
math11Module6Theory[1].checkpoints.push(
  {id:'cp-math11-m6-02-sum',question:'Khẳng định nào đúng với mọi $x,y>0$?',options:['$\\log_a(x+y)=\\log_ax+\\log_ay$','$\\log_a(x+y)=\\log_ax\\cdot\\log_ay$','$\\log_a(x+y)=\\log_a(x/y)$','Không có công thức tách lôgarit của tổng như trên'],correctAnswer:'D',explanation:'Tính chất lôgarit không áp dụng trực tiếp cho tổng.'},
  {id:'cp-math11-m6-02-condition',question:'$\\log_{x-1}(x+1)$ xác định khi:',options:['$x>-1$','$x>1$ và $x\\ne2$','$x>0$','$x\\ne1$'],correctAnswer:'B',explanation:'Cần $x-1>0$, $x-1\\ne1$ và $x+1>0$.'},
  {id:'cp-math11-m6-02-calculate',question:'Nếu $\\log_2a=3$, $\\log_2b=-1$ thì $\\log_4(a^2b)$ bằng:',options:['$2$','$\\dfrac52$','$3$','$5$'],correctAnswer:'B',explanation:'$\\log_2(a^2b)=5$ nên đổi sang cơ số 4 được $5/2$.'}
);

math11Module6Theory[2].content += '\n\nKhi đọc đồ thị, cần theo dõi miền xác định, tập giá trị, giao điểm cố định, tính đơn điệu và phép tịnh tiến. Chẳng hạn $y=a^{x-h}+k$ là đồ thị $y=a^x$ dịch sang phải $h$ đơn vị và lên trên $k$ đơn vị.\n\nNếu cần tìm thời gian trong mô hình thực tế, đưa bất đẳng thức về dạng lũy thừa rồi dùng lôgarit; kết quả số chu kì nguyên phải được làm tròn theo tình huống.';
math11Module6Theory[2].workedExamples.push(
  {id:'ex-math11-m6-03-minimum',title:'Khai thác tính chất hàm mũ',problem:'Tìm giá trị nhỏ nhất của $2^x+2^{-x}$.',steps:['Đặt $t=2^x>0$, biểu thức thành $t+1/t$.','Theo AM-GM, $t+1/t\\ge2$.','Dấu bằng khi $t=1$, tức $x=0$.'],answer:'Giá trị nhỏ nhất là 2.'},
  {id:'ex-math11-m6-03-growth',title:'Tìm số chu kì tăng trưởng',problem:'Một quần thể có 1000 cá thể và tăng 10% mỗi năm. Ít nhất sau bao nhiêu năm đạt 2000?',steps:['Cần $(1{,}1)^n\\ge2$.','Suy ra $n\\ge\\dfrac{\\log2}{\\log1{,}1}\\approx7{,}27$.','Chọn số năm nguyên nhỏ nhất thỏa điều kiện.'],answer:'Ít nhất 8 năm.'}
);
math11Module6Theory[2].checkpoints.push(
  {id:'cp-math11-m6-03-range',question:'Tập giá trị của $y=3^{x^2}$ là:',options:['$(0;+\\infty)$','$[1;+\\infty)$','$(-\\infty;1]$','$\\mathbb R$'],correctAnswer:'B',explanation:'$x^2\\ge0$ nên $3^{x^2}\\ge1$.'},
  {id:'cp-math11-m6-03-decay',question:'Một đại lượng giảm 20% mỗi chu kì thì hệ số nhân là:',options:['$0{,}2$','$1{,}2$','$0{,}8$','$-0{,}2$'],correctAnswer:'C',explanation:'Đại lượng còn 80%, tức 0,8 lần.'},
  {id:'cp-math11-m6-03-ph',question:'Nếu $[H^+]=10^{-5}$ và $\\mathrm{pH}=-\\log_{10}[H^+]$ thì pH bằng:',options:['$-5$','$0$','$1$','$5$'],correctAnswer:'D',explanation:'$-\\log_{10}(10^{-5})=5$.'}
);

math11Module6Theory[3].content += '\n\nVới biểu thức chứa $a^{2x}$ và $a^x$, đặt $t=a^x>0$ để đưa về bài toán đại số. Điều kiện $t>0$ phải được dùng khi chọn nghiệm.\n\nVới bài lôgarit, thứ tự an toàn là: đặt điều kiện; biến đổi và giải; đối chiếu nghiệm; kết luận. Cơ số trong $(0;1)$ làm đảo chiều bất phương trình.';
math11Module6Theory[3].workedExamples.push(
  {id:'ex-math11-m6-04-substitution',title:'Đặt ẩn phụ cho phương trình mũ',problem:'Giải $4^x-5\\cdot2^x+4=0$.',steps:['Đặt $t=2^x>0$, khi đó $4^x=t^2$.','Giải $t^2-5t+4=0$ được $t=1$ hoặc $t=4$.','Suy ra $x=0$ hoặc $x=2$.'],answer:'Tập nghiệm $\\{0;2\\}$.'},
  {id:'ex-math11-m6-04-inequality',title:'Bất phương trình lôgarit có điều kiện',problem:'Giải $\\log_2(x^2-1)\\le3$.',steps:['Điều kiện $x<-1$ hoặc $x>1$.','Vì cơ số lớn hơn 1, suy ra $x^2-1\\le8$.','Giải $x^2\\le9$ rồi giao với điều kiện.'],answer:'Tập nghiệm $[-3;-1)\\cup(1;3]$.'}
);
math11Module6Theory[3].checkpoints.push(
  {id:'cp-math11-m6-04-order',question:'Với $0<a<1$, $a^u>a^v$ tương đương:',options:['$u>v$','$u<v$','$u=v$','$u\\ge v$'],correctAnswer:'B',explanation:'Hàm mũ cơ số thuộc $(0;1)$ nghịch biến.'},
  {id:'cp-math11-m6-04-domain',question:'Điều kiện của $\\log_2(x-1)+\\log_2(x+2)=3$ là:',options:['$x>-2$','$x\\ne1$','$x>1$','$x<1$'],correctAnswer:'C',explanation:'Cả hai đối số phải dương.'},
  {id:'cp-math11-m6-04-quadratic',question:'Nghiệm của $3^{2x}-10\\cdot3^x+9=0$ là:',options:['$x=0$ hoặc $x=2$','$x=1$ hoặc $x=2$','$x=-1$ hoặc $x=1$','$x=0$ hoặc $x=1$'],correctAnswer:'A',explanation:'Đặt $t=3^x$, được $(t-1)(t-9)=0$.'}
);
