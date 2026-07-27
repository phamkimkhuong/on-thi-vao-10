import type { CourseQuestion } from '@/data/schema';
import type { PracticeRole, QuestionRepresentationType } from '@/types';
import { g11MathModule5ExpansionQuestions } from './questionsExpansion';
type S={n:number;qt:number;st:string;role:PracticeRole;rep:QuestionRepresentationType;c:string;o:[string,string,string,string];a:'A'|'B'|'C'|'D';d:CourseQuestion['difficulty'];h:boolean};
const q=(n:number,qt:number,st:string,role:PracticeRole,rep:QuestionRepresentationType,c:string,o:S['o'],a:S['a'],d:CourseQuestion['difficulty']='medium',h=false):S=>({n,qt,st,role,rep,c,o,a,d,h});
const specs:S[]=[
q(169,15,'math11-qt15-st-finite','guided','equation','$\\lim_{n\\to\\infty}\\frac1n$ bằng:',['$1$','$0$','$+\\infty$','$-\\infty$'],'B','easy'),
q(170,15,'math11-qt15-st-finite','near_transfer','equation','$\\lim\\frac{2n+1}{n+3}$ bằng:',['$0$','$1$','$2$','$+\\infty$'],'C'),
q(171,15,'math11-qt15-st-finite','representation_switch','text','Giới hạn của dãy $u_n=\\frac{3n^2-n}{n^2+1}$ là:',['$0$','$1$','$3$','$-3$'],'C'),
q(172,15,'math11-qt15-st-finite','misconception_check','equation','$\\lim\\frac{n+1}{n}$ bằng:',['$0$','$1$','$2$','$+\\infty$'],'B','easy'),
q(173,15,'math11-qt15-st-finite','retention','equation','$\\lim\\frac{(-1)^n}{n}$ bằng:',['$0$','$1$','$-1$','Không tồn tại'],'A'),
q(174,15,'math11-qt15-st-finite','mastery_holdout','equation','$\\lim\\frac{5n^2+1}{2n^2-3}$ bằng:',['$0$','$2$','$5$','$\\frac52$'],'D','hard',true),
q(175,15,'math11-qt15-st-infinite','guided','equation','$\\lim\\left(\\frac12\\right)^n$ bằng:',['$1$','$0$','$+\\infty$','Không tồn tại'],'B','easy'),
q(176,15,'math11-qt15-st-infinite','near_transfer','text','Dãy $u_n=n^2$ có giới hạn:',['$0$','$1$','$+\\infty$','$-\\infty$'],'C','easy'),
q(177,15,'math11-qt15-st-infinite','representation_switch','text','Dãy $u_n=-3n+2$ có giới hạn:',['$0$','$+\\infty$','$2$','$-\\infty$'],'D'),
q(178,15,'math11-qt15-st-infinite','near_transfer','equation','Tổng $1+\\frac12+\\frac14+\\cdots$ bằng:',['$2$','$1$','$\\frac32$','$4$'],'A'),
q(179,15,'math11-qt15-st-infinite','misconception_check','equation','Tổng $3+1+\\frac13+\\cdots$ bằng:',['$3$','$4$','$\\frac92$','$6$'],'C'),
q(180,15,'math11-qt15-st-infinite','mastery_holdout','text','Số thập phân vô hạn tuần hoàn $0{,}777\\ldots$ bằng:',['$\\frac7{10}$','$\\frac79$','$\\frac{77}{90}$','$\\frac89$'],'B','hard',true),

q(181,16,'math11-qt16-st-point','guided','equation','$\\lim_{x\\to2}(x^2+1)$ bằng:',['$3$','$4$','$5$','$6$'],'C','easy'),
q(182,16,'math11-qt16-st-point','near_transfer','equation','$\\lim_{x\\to2}\\frac{x^2-4}{x-2}$ bằng:',['$2$','$4$','$0$','Không tồn tại'],'B'),
q(183,16,'math11-qt16-st-point','representation_switch','equation','$\\lim_{x\\to4}\\frac{\\sqrt x-2}{x-4}$ bằng:',['$\\frac12$','$\\frac13$','$\\frac14$','$4$'],'C'),
q(184,16,'math11-qt16-st-point','misconception_check','graph','Tại $x_0$, giới hạn trái bằng 1 và giới hạn phải bằng 2. Giới hạn hai phía:',['Bằng 1','Bằng 2','Bằng 3','Không tồn tại'],'D'),
q(185,16,'math11-qt16-st-point','retention','equation','$\\lim_{x\\to0}\\frac{\\sin x}{x}$ bằng:',['$1$','$0$','$-1$','$+\\infty$'],'A'),
q(186,16,'math11-qt16-st-point','mastery_holdout','equation','$\\lim_{x\\to1}\\frac{x^3-1}{x-1}$ bằng:',['$1$','$2$','$3$','$4$'],'C','hard',true),
q(187,16,'math11-qt16-st-infinity','guided','equation','$\\lim_{x\\to+\\infty}\\frac{3x+1}{x-2}$ bằng:',['$1$','$3$','$-3$','$+\\infty$'],'B'),
q(188,16,'math11-qt16-st-infinity','near_transfer','equation','$\\lim_{x\\to+\\infty}\\frac{2x^2-x}{x^2+1}$ bằng:',['$2$','$1$','$0$','$-2$'],'A'),
q(189,16,'math11-qt16-st-infinity','representation_switch','graph','$\\lim_{x\\to+\\infty}\\frac1x$ bằng:',['$1$','$+\\infty$','$0$','$-\\infty$'],'C','easy'),
q(190,16,'math11-qt16-st-infinity','near_transfer','equation','$\\lim_{x\\to2^+}\\frac1{x-2}$ bằng:',['$0$','$1$','$-\\infty$','$+\\infty$'],'D'),
q(191,16,'math11-qt16-st-infinity','misconception_check','equation','$\\lim_{x\\to2^-}\\frac1{x-2}$ bằng:',['$+\\infty$','$-\\infty$','$0$','$1$'],'B'),
q(192,16,'math11-qt16-st-infinity','mastery_holdout','equation','$\\lim_{x\\to+\\infty}\\frac{x^2+1}{x-1}$ bằng:',['$+\\infty$','$1$','$0$','$-\\infty$'],'A','hard',true),

q(193,17,'math11-qt17-st-point','guided','equation','$f$ liên tục tại $x_0$ khi:',['$f(x_0)=0$','$\\lim_{x\\to x_0}f(x)=f(x_0)$','$f$ tăng tại $x_0$','$f$ có đạo hàm'],'B','easy'),
q(194,17,'math11-qt17-st-point','near_transfer','graph','Hàm đa thức liên tục trên:',['$\\mathbb R$','$[0;+\\infty)$','$(-\\infty;0)$','Tập hữu hạn'],'A','easy'),
q(195,17,'math11-qt17-st-point','representation_switch','equation','Hàm $f(x)=\\frac1{x-2}$ liên tục trên:',['$\\mathbb R$','$[2;+\\infty)$','$(-\\infty;2)$ và $(2;+\\infty)$','Chỉ tại $x=2$'],'C'),
q(196,17,'math11-qt17-st-point','retention','graph','Hàm $f(x)=|x|$ liên tục trên:',['$(0;+\\infty)$','$(-\\infty;0)$','$\\mathbb R\\setminus\\{0\\}$','$\\mathbb R$'],'D','easy'),
q(197,17,'math11-qt17-st-point','misconception_check','equation','Cho $f(x)=x+1$ nếu $x<0$ và $f(x)=2x+1$ nếu $x\\ge0$. Hàm tại 0:',['Liên tục','Gián đoạn','Không xác định','Có giới hạn bằng 0'],'A'),
q(198,17,'math11-qt17-st-point','mastery_holdout','equation','Cho $f(x)=\\frac{x^2-1}{x-1}$ khi $x\\ne1$, $f(1)=a$. Để liên tục tại 1 thì $a=$',['$1$','$2$','$0$','$-2$'],'B','hard',true),
q(199,17,'math11-qt17-st-domain','guided','equation','Hàm $\\sqrt{x-1}$ liên tục trên:',['$\\mathbb R$','$(1;+\\infty)$','$[1;+\\infty)$','$(-\\infty;1]$'],'C'),
q(200,17,'math11-qt17-st-domain','near_transfer','graph','Hàm $\\tan x$ liên tục trên:',['$\\mathbb R$','$[0;2\\pi]$','Chỉ tại 0','Mỗi khoảng không chứa $\\frac\\pi2+k\\pi$'],'D'),
q(201,17,'math11-qt17-st-domain','representation_switch','equation','Thương của hai hàm liên tục liên tục tại nơi:',['Mẫu khác 0','Tử khác 0','Tử bằng mẫu','Cả hai dương'],'A','easy'),
q(202,17,'math11-qt17-st-domain','far_transfer','graph','Nếu $f$ liên tục trên $[a;b]$ và $f(a)f(b)<0$ thì:',['$f$ luôn tăng','Tồn tại $c\\in(a;b)$ sao cho $f(c)=0$','$f$ không có nghiệm','$f(a)=f(b)$'],'B'),
q(203,17,'math11-qt17-st-domain','misconception_check','equation','Cho $f(x)=x^2$ khi $x\\le1$, $f(x)=ax$ khi $x>1$. Liên tục tại 1 khi:',['$a=0$','$a=2$','$a=1$','$a=-1$'],'C'),
q(204,17,'math11-qt17-st-domain','mastery_holdout','equation','Cho $f(x)=\\frac{\\sin x}{x}$ khi $x\\ne0$, $f(0)=a$. Liên tục tại 0 khi:',['$a=0$','$a=-1$','$a=2$','$a=1$'],'D','hard',true)
];
const baseQuestions:CourseQuestion[]=specs.map(s=>({id:`math11-q${s.n}`,courseId:'grade11:math',moduleId:'math11-m5',lessonId:`math11-kntt-l${s.qt}`,subjectId:'math',topicId:'math11-t05',questionTypeId:`math11-qt${s.qt}`,subTypeId:s.st,practiceRole:s.role,representationType:s.rep,isMasteryHoldout:s.h,content:s.c,responseType:'single_choice',validatorType:'choice',outcomeIds:[`out-math11-m5-0${s.qt-14}`],options:s.o,correctAnswer:s.a,difficulty:s.d,sourceType:'manual'}));
export const g11MathModule5Questions=[...baseQuestions,...g11MathModule5ExpansionQuestions];
