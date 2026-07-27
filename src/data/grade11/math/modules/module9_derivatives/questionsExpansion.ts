import type {CourseQuestion,CourseSolution} from '@/data/schema';
import type {PracticeRole,QuestionRepresentationType} from '@/types';

type Choice='A'|'B'|'C'|'D';
type Item={content:string;answer:string;reasoning:string;options?:[string,string,string,string]};
type Bank={qt:number;sub:string;items:Item[]};
const roles:PracticeRole[]=['guided','near_transfer','representation_switch','misconception_check','far_transfer','mastery_holdout'];
const reps:QuestionRepresentationType[]=['equation','text','equation','text','equation','text'];
const difficulties:CourseQuestion['difficulty'][]=['easy','medium','medium','medium','hard','hard'];
const m=(content:string,options:[string,string,string,string],answer:Choice,reasoning:string):Item=>({content,options,answer,reasoning});
const s=(content:string,answer:string,reasoning:string):Item=>({content,answer,reasoning});

const banks:Bank[]=[
{qt:31,sub:'definition',items:[
  m('Dùng định nghĩa, đạo hàm của $f(x)=x^2$ tại $x_0=3$ bằng:',['$3$','$6$','$9$','$12$'],'B','$[(3+h)^2-9]/h=6+h\\to6$.'),
  s('Dùng định nghĩa tính $f^{\\prime}(1)$ với $f(x)=x^3$.','3','$[(1+h)^3-1]/h=3+3h+h^2\\to3$.'),
  m('Hàm $f(x)=|x|$ tại $x=0$:',['Có đạo hàm bằng 0','Có đạo hàm bằng 1','Không có đạo hàm','Có đạo hàm bằng $-1$'],'C','Đạo hàm trái bằng $-1$, đạo hàm phải bằng 1.'),
  m('Hàm liên tục tại $x_0$ thì có chắc có đạo hàm tại $x_0$ không?',['Có','Không','Chỉ với hàm bậc nhất','Chỉ khi $f(x_0)=0$'],'B','$|x|$ liên tục tại 0 nhưng không khả vi tại đó.'),
  s('Cho $f(x)=x^2+2x$. Tính giới hạn $\\lim\\limits_{h\\to0}\\dfrac{f(2+h)-f(2)}h$.','6','Giới hạn chính là $f^{\\prime}(2)$; $f^{\\prime}(x)=2x+2$.'),
  s('Cho $f(x)=\\sqrt{x}$. Dùng định nghĩa tính $f^{\\prime}(4)$.','1/4','Nhân liên hợp: tỉ số bằng $1/(\\sqrt{4+h}+2)\\to1/4$.')
]},
{qt:31,sub:'meaning',items:[
  m('Nếu $f^{\\prime}(2)=-3$ thì hệ số góc tiếp tuyến tại điểm có hoành độ 2 là:',['$-3$','$-2$','$2$','$3$'],'A','Đạo hàm tại tiếp điểm chính là hệ số góc tiếp tuyến.'),
  s('Viết tiếp tuyến của $y=x^2+1$ tại điểm có hoành độ $x_0=1$ dưới dạng $y=ax+b$. Nhập $a+b$.','2','Tiếp điểm $(1,2)$, hệ số góc 2; $y-2=2(x-1)$ nên tiếp tuyến là $y=2x$ và $a+b=2$.'),
  m('Vật chuyển động có tọa độ $s(t)=t^2-3t$. Vận tốc tại $t=2$ bằng:',['$-1$','$0$','$1$','$4$'],'C','$v(t)=s^{\\prime}(t)=2t-3$, nên $v(2)=1$.'),
  m('Nếu $f^{\\prime}(x_0)=0$ thì tiếp tuyến tại điểm đó:',['Song song $Oy$','Song song $Ox$','Luôn đi qua gốc tọa độ','Không tồn tại'],'B','Hệ số góc bằng 0.'),
  s('Tiếp tuyến của $y=x^3-2x$ tại điểm có hoành độ 1 có hệ số góc bằng bao nhiêu?','1','$f^{\\prime}(x)=3x^2-2$, nên $f^{\\prime}(1)=1$.'),
  s('Tìm hoành độ dương của điểm trên đồ thị $y=x^2$ mà tiếp tuyến song song với đường $y=6x-1$.','3','Tiếp tuyến song song có hệ số góc 6; giải $2x=6$ được $x=3$.')
]},
{qt:32,sub:'elementary',items:[
  m('Đạo hàm của $y=3x^4-2x+5$ là:',['$12x^3-2$','$12x^3+5$','$3x^3-2$','$4x^3-2$'],'A','Lấy đạo hàm từng hạng tử.'),
  s('Tính $y^{\\prime}(\\pi/2)$ với $y=\\sin x+\\cos x$.','-1','$y^{\\prime}=\\cos x-\\sin x$, thay $x=\\pi/2$ được $-1$.'),
  m('Đạo hàm của $y=e^x+\\ln x$ là:',['$e^x+1/x$','$xe^{x-1}+1/x$','$e^x+\\ln x$','$e^x+x$'],'A','Dùng hai công thức đạo hàm sơ cấp.'),
  m('Đạo hàm của $\\cos x$ là:',['$\\sin x$','$-\\sin x$','$\\cos x$','$-\\cos x$'],'B','Công thức cơ bản có dấu trừ.'),
  s('Tính đạo hàm của $y=\\sqrt{x}+1/x$ tại $x=4$.','3/16','$y^{\\prime}=1/(2\\sqrt{x})-1/x^2$; tại 4 được $1/4-1/16=3/16$.'),
  s('Tính $y^{\\prime}(1)$ với $y=2^x+\\log_2x$.','2ln2+1/ln2','$y^{\\prime}=2^x\\ln2+1/(x\\ln2)$; thay $x=1$.')
]},
{qt:32,sub:'rules',items:[
  m('Đạo hàm của $y=x^2e^x$ là:',['$2xe^x$','$x^2e^x$','$e^x(x^2+2x)$','$e^x(x+2)$'],'C','Dùng quy tắc tích.'),
  s('Tính đạo hàm của $y=(x^2+1)^3$ tại $x=1$.','24','$y^{\\prime}=3(x^2+1)^2\\cdot2x$; tại 1 bằng 24.'),
  m('Đạo hàm của $y=\\dfrac{x+1}{x-1}$ là:',['$2/(x-1)^2$','$-2/(x-1)^2$','$1$','$1/(x-1)$'],'B','Quy tắc thương cho tử $(x-1)-(x+1)=-2$.'),
  m('Sai lầm trong phép tính $(uv)^{\\prime}=u^{\\prime}v^{\\prime}$ là:',['Thiếu $u+v$','Đã nhầm quy tắc tích; đúng là $u^{\\prime}v+uv^{\\prime}$','Thiếu mẫu bình phương','Không có sai lầm'],'B','Đạo hàm tích không phải tích hai đạo hàm.'),
  s('Tính $y^{\\prime}(0)$ với $y=e^{x^2+3x}$.','3','$y^{\\prime}=e^{x^2+3x}(2x+3)$; tại 0 bằng 3.'),
  s('Tính đạo hàm của $y=\\ln(1+x^2)$ tại $x=1$.','1','$y^{\\prime}=2x/(1+x^2)$; tại 1 bằng 1.')
]},
{qt:33,sub:'second',items:[
  m('Với $f(x)=2x^4-x^2$, đạo hàm cấp hai $f^{\\prime\\prime}(x)$ bằng:',['$8x^3-2x$','$24x^2-2$','$16x^2-2$','$24x-2$'],'B','$f^{\\prime}=8x^3-2x$, rồi $f^{\\prime\\prime}=24x^2-2$.'),
  s('Tính $f^{\\prime\\prime}(0)$ với $f(x)=\\cos x$.','-1','$f^{\\prime}=-\\sin x$, $f^{\\prime\\prime}=-\\cos x$.'),
  m('Đạo hàm cấp hai của $e^{2x}$ là:',['$2e^{2x}$','$4e^{2x}$','$e^{2x}$','$4e^x$'],'B','Mỗi lần đạo hàm sinh thêm hệ số 2.'),
  m('$f^{\\prime\\prime}$ có phải là $(f^{\\prime})^2$ không?',['Luôn đúng','Không; đó là đạo hàm của $f^{\\prime}$','Đúng với mọi đa thức','Chỉ sai với hàm lượng giác'],'B','Đạo hàm cấp hai là phép lấy đạo hàm lần thứ hai.'),
  s('Tính $f^{\\prime\\prime}(1)$ với $f(x)=xe^x$.','3e','$f^{\\prime}=e^x(1+x)$, $f^{\\prime\\prime}=e^x(x+2)$; tại 1 bằng $3e$.'),
  s('Tính $f^{\\prime\\prime}(1)$ với $f(x)=\\ln x$.','-1','$f^{\\prime}=1/x$, $f^{\\prime\\prime}=-1/x^2$, tại 1 bằng $-1$.')
]},
{qt:33,sub:'mechanics',items:[
  m('Vật có $s(t)=t^3-2t^2$. Gia tốc $a(t)$ là:',['$3t^2-4t$','$6t-4$','$6t$','$t^3-2t^2$'],'B','$v=3t^2-4t$, rồi $a=6t-4$.'),
  s('Vật có $s(t)=2t^3-3t^2+t$. Tính gia tốc tại $t=2$.','18','$v=6t^2-6t+1$, $a=12t-6$, nên $a(2)=18$.'),
  m('Nếu đề cho trực tiếp vận tốc $v(t)$, để tìm gia tốc cần:',['Lấy đạo hàm một lần','Lấy đạo hàm hai lần','Bình phương vận tốc','Lấy nguyên hàm'],'A','$a(t)=v^{\\prime}(t)$.'),
  m('Đơn vị của gia tốc khi quãng đường tính bằng mét, thời gian bằng giây là:',['m','$\\mathrm{m/s}$','$\\mathrm{m/s^2}$','$\\mathrm{s/m}$'],'C','Gia tốc là độ dài chia bình phương thời gian.'),
  s('Một vật có vận tốc $v(t)=t^3-6t^2+9t$. Tính gia tốc tại $t=2$.','-3','$a(t)=3t^2-12t+9$, nên $a(2)=-3$.'),
  s('Vật có $s(t)=t^4-4t^3+6t^2$. Tính gia tốc tại $t=1$.','0','$a(t)=12t^2-24t+12=12(t-1)^2$, nên $a(1)=0$.')
]}
];

const solutionData:{number:number;answer:string;reasoning:string}[]=[];
let number=589;
export const g11MathModule9ExpansionQuestions:CourseQuestion[]=banks.flatMap(bank=>bank.items.map((item,index)=>{
  const current=number++;
  solutionData.push({number:current,answer:item.answer,reasoning:item.reasoning});
  return {
    id:`math11-q${current}`,courseId:'grade11:math',moduleId:'math11-m9',
    lessonId:`math11-kntt-l${bank.qt}`,subjectId:'math',topicId:'math11-t09',
    questionTypeId:`math11-qt${bank.qt}`,subTypeId:`math11-qt${bank.qt}-st-${bank.sub}`,
    practiceRole:roles[index],representationType:reps[index],
    isMasteryHoldout:index===5,content:item.content,
    responseType:item.options?'single_choice':'short_answer',
    validatorType:item.options?'choice':'exact',options:item.options,
    acceptedAnswers:item.options?undefined:[item.answer,`$${item.answer}$`,item.answer.replace('.',',')],
    outcomeIds:[`out-math11-m9-0${bank.qt-30}`],correctAnswer:item.answer,
    difficulty:difficulties[index],sourceType:'manual',
    cognitiveLevel:index<1?'understanding':'application',
    estimatedSeconds:index<1?45:index<4?100:180
  } as CourseQuestion;
}));
export const g11MathModule9ExpansionSolutions:CourseSolution[]=solutionData.map(x=>({
  id:`math11-s${x.number}`,courseId:'grade11:math',moduleId:'math11-m9',questionId:`math11-q${x.number}`,
  recognition:'Xác định đang dùng định nghĩa, ý nghĩa hình học, quy tắc đạo hàm hay đạo hàm cấp hai.',
  detailedSteps:[{order:1,title:'Tính đạo hàm',explanation:x.reasoning},{order:2,title:'Kết luận',explanation:`Đáp án cần chọn hoặc nhập là ${x.answer}.`}],
  finalAnswer:x.answer,
  commonMistakes:['Bỏ đạo hàm hàm trong, dùng sai quy tắc tích hoặc nhầm đạo hàm cấp hai với bình phương.'],
  reviewSuggestions:['Viết riêng từng lần đạo hàm và kiểm tra điều kiện xác định.']
}));
