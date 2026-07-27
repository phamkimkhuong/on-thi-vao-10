import type { CourseSolution } from '@/data/schema';
const answers=('BCCBADBCD ACB'.replace(/\s/g,'')+'CBCDACBACDBA'+'BACDABC DABCD'.replace(/\s/g,'')).split('') as Array<'A'|'B'|'C'|'D'>;
const reasons=[
'$1/n\\to0$.','Chia tử mẫu cho $n$ được 2.','Chia cho $n^2$ được 3.','$\\frac{n+1}{n}=1+1/n\\to1$.','$|(-1)^n/n|\\le1/n\\to0$.','Tỉ số hệ số bậc cao nhất là $5/2$.',
'Vì $|1/2|<1$ nên $(1/2)^n\\to0$.','$n^2$ tăng không bị chặn.','$-3n+2\\to-\\infty$.','$S=1/(1-1/2)=2$.','$S=3/(1-1/3)=9/2$.','$0{,}777\\ldots=7/10+7/100+\\cdots=7/9$.',
'Thay $x=2$ được 5.','Rút gọn thành $x+2$, giới hạn bằng 4.','Nhân liên hợp được $1/(\\sqrt x+2)\\to1/4$.','Hai giới hạn một phía khác nhau.','$\\lim_{x\\to0}\\sin x/x=1$.','Rút gọn $x^2+x+1\\to3$.',
'Tỉ số hệ số bậc nhất là 3.','Tỉ số hệ số bậc hai là 2.','$1/x\\to0$.','Khi $x\\to2^+$, mẫu dương tiến tới 0.','Khi $x\\to2^-$, mẫu âm tiến tới 0.','Biểu thức tương đương $x$ khi $x\\to+\\infty$.',
'Dùng định nghĩa liên tục tại điểm.','Mọi hàm đa thức liên tục trên $\\mathbb R$.','Hàm phân thức liên tục khi $x\\ne2$.','$|x|$ liên tục trên $\\mathbb R$.','Hai giới hạn một phía và $f(0)$ đều bằng 1.','$\\lim_{x\\to1}(x+1)=2$ nên $a=2$.',
'Căn thức xác định và liên tục khi $x\\ge1$.','Tan liên tục trên từng khoảng thuộc tập xác định.','Thương liên tục tại nơi mẫu khác 0.','Áp dụng định lí giá trị trung gian.','Hai nhánh có giá trị giới hạn 1 nên $a=1$.','$\\lim_{x\\to0}\\sin x/x=1$ nên $a=1$.'
];
export const g11MathModule5Solutions:CourseSolution[]=reasons.map((r,i)=>{const n=169+i;return{id:`math11-s${n}`,courseId:'grade11:math',moduleId:'math11-m5',questionId:`math11-q${n}`,recognition:'Nhận dạng loại giới hạn hoặc điều kiện liên tục trước khi biến đổi.',detailedSteps:[{order:1,title:'Tính toán',explanation:r},{order:2,title:'Kết luận',explanation:`Phương án đúng là ${answers[i]}.`}],finalAnswer:answers[i],commonMistakes:['Thay trực tiếp vào dạng vô định hoặc bỏ qua giới hạn một phía.'],reviewSuggestions:['Ôn công thức và điều kiện trong khối lý thuyết tương ứng.']};});
