import type {CourseSolution} from '@/data/schema';import {g11MathModule6ExpansionSolutions} from './solutionsExpansion';
const answers=('BCD ACB DACBDA'.replace(/\s/g,'')+'CBADCB CADBCA'.replace(/\s/g,'')+'ACBDC BDCABCD'.replace(/\s/g,'')+'BCADCB ADCBAD'.replace(/\s/g,'')).split('') as Array<'A'|'B'|'C'|'D'>;
const reasons=[
'$2^{3+4}=2^7$.','$a^{5-2}=a^3$.','$(a^2)^3=a^6$.','$16^{1/2}=\\sqrt{16}=4$.','$27^{2/3}=(\\sqrt[3]{27})^2=9$.','$8^{-2/3}=1/(\\sqrt[3]8)^2=1/4$.',
'$\\sqrt[3]{x^2}=x^{2/3}$.','$a^{1/2+1/2}=a$.','Đảo rồi lấy căn: $(9/4)^{1/2}=3/2$.','$100(1{,}1)^2=121$.','$200(0{,}8)^3=102{,}4$.','$16^{3/4}=(\\sqrt[4]{16})^3=8$.',
'Vì $2^3=8$ nên lôgarit bằng 3.','$10^{-2}=0{,}01$.','$a^0=1$.','$a^1=a$.','Cơ số dương khác 1 và đối số dương.','$3^{-3}=1/27$.',
'$\\log_2 8+\\log_2 4=3+2=5$.','$\\log_5 25=2$.','$2\\log_23=\\log_29$.','$\\log_28=\\ln8/\\ln2$.','$\\log_2(4x)=5$ nên $x=8$.','$\\log_3(12/4)=\\log_33=1$.',
'Hàm mũ xác định trên $\\mathbb R$.','Hàm mũ luôn nhận giá trị dương.','Lôgarit xác định khi $x>0$.','Cơ số lớn hơn 1 cho hàm tăng.','Cơ số giữa 0 và 1 cho hàm giảm.','Hai hàm ngược nhau nên đồ thị đối xứng qua $y=x$.',
'$100(1{,}1)^3=133{,}1$.','$500\\cdot2^4=8000$.','$100(0{,}8)^2=64$.','Lãi kép dùng $P(1+r)^n$.','$-\\log_{10}10^{-3}=3$.','$1000(1{,}05)^2=1102{,}5$.',
'$8=2^3$ nên $x=3$.','$9=3^2$ nên $x-1=2$, $x=3$.','$125=5^3$ nên $2x=3$.','$x=2^4=16$.','$x-1=3^2=9$, nên $x=10$.','$2^{2x}=2^3$ nên $x=3/2$.',
'Cơ số 2 tăng nên $x>3$.','Cơ số $1/2$ giảm nên $x<2$.','Điều kiện $x>0$ và $x<8$.','Hàm log cơ số $1/2$ giảm: $0<x<1/2$.','$x+1=3$ nên $x=2$.','Điều kiện và tính tăng cho $x-1\\ge4$, tức $x\\ge5$.'
];
const baseSolutions:CourseSolution[]=reasons.map((r,i)=>{const n=205+i;return{id:`math11-s${n}`,courseId:'grade11:math',moduleId:'math11-m6',questionId:`math11-q${n}`,recognition:'Kiểm tra điều kiện rồi áp dụng quy tắc lũy thừa, lôgarit hoặc tính đơn điệu.',detailedSteps:[{order:1,title:'Biến đổi',explanation:r},{order:2,title:'Kết luận',explanation:`Phương án đúng là ${answers[i]}.`}],finalAnswer:answers[i],commonMistakes:['Bỏ điều kiện đối số dương hoặc dùng sai chiều đơn điệu của cơ số.'],reviewSuggestions:['Ôn định nghĩa và công thức của bài tương ứng.']};});
export const g11MathModule6Solutions=[...baseSolutions,...g11MathModule6ExpansionSolutions];
