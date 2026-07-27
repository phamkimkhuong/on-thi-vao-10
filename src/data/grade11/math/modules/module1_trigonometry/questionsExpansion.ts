import type {CourseQuestion,CourseSolution} from '@/data/schema';
import type {PracticeRole,QuestionRepresentationType} from '@/types';

type Choice='A'|'B'|'C'|'D';
type Item={content:string;answer:string;reasoning:string;options?:[string,string,string,string]};
type Bank={qt:number;sub:string;items:Item[]};
const roles:PracticeRole[]=['guided','near_transfer','representation_switch','misconception_check','far_transfer','mastery_holdout'];
const reps:QuestionRepresentationType[]=['diagram','equation','text','diagram','equation','graph'];
const difficulties:CourseQuestion['difficulty'][]=['easy','medium','medium','medium','hard','hard'];
const m=(content:string,options:[string,string,string,string],answer:Choice,reasoning:string):Item=>({content,options,answer,reasoning});
const s=(content:string,answer:string,reasoning:string):Item=>({content,answer,reasoning});

const banks:Bank[]=[
{qt:1,sub:'angle',items:[
  m('Góc $13\\pi/6$ cùng tia cuối với góc nào trong $[0;2\\pi)$?',['$\\pi/6$','$5\\pi/6$','$7\\pi/6$','$11\\pi/6$'],'A','Trừ $2\\pi=12\\pi/6$.'),
  s('Đổi góc $225^\\circ$ sang radian. Nhập hệ số của $\\pi$.','5/4','$225^\\circ\\cdot\\pi/180^\\circ=5\\pi/4$.'),
  m('Tia cuối của góc $-2\\pi/3$ nằm ở góc phần tư:',['I','II','III','IV'],'C','Góc cùng tia cuối trong $[0,2\\pi)$ là $4\\pi/3$.'),
  m('Hai góc cùng tia đầu và có số đo hơn kém nhau $\\pi$ có cùng tia cuối không?',['Luôn có','Không; hai tia cuối đối nhau','Chỉ khi góc dương','Chỉ khi đo bằng độ'],'B','Các góc cùng tia cuối hơn kém nhau bội của $2\\pi$.'),
  s('Một bánh xe bán kính 30 cm quay góc $5\\pi/6$. Tính độ dài cung mà một điểm trên vành đi được, theo cm và bỏ đơn vị.','25pi','$s=r\\alpha=30\\cdot5\\pi/6=25\\pi$.'),
  s('Tìm góc dương nhỏ nhất cùng tia cuối với $-17\\pi/6$. Nhập hệ số của $\\pi$.','7/6','Cộng $4\\pi=24\\pi/6$ được $7\\pi/6$.')
]},
{qt:1,sub:'values',items:[
  m('Biết $\\sin\\alpha=3/5$ và $\\alpha$ thuộc góc phần tư II. Khi đó $\\cos\\alpha$ bằng:',['$4/5$','$-4/5$','$3/4$','$-3/4$'],'B','$\\cos^2\\alpha=1-9/25=16/25$ và cos âm ở góc phần tư II.'),
  s('Biết $\\cos\\alpha=-5/13$, $\\alpha$ thuộc góc phần tư III. Tính $\\tan\\alpha$.','12/5','Sin âm và có độ lớn $12/13$; thương sin/cos bằng $12/5$.'),
  m('Giá trị $\\sin(7\\pi/6)$ là:',['$1/2$','$-1/2$','$\\sqrt3/2$','$-\\sqrt3/2$'],'B','Góc phụ $\\pi/6$ và nằm ở góc phần tư III.'),
  m('Nếu $\\tan\\alpha=-2$ thì $\\tan^2\\alpha+1$ bằng:',['$3$','$4$','$5$','$6$'],'C','Dùng $1+\\tan^2\\alpha=1+4=5$.'),
  s('Biết $\\sin\\alpha+\\cos\\alpha=1/2$. Tính $\\sin2\\alpha$.','-3/4','Bình phương: $1+\\sin2\\alpha=1/4$, suy ra $\\sin2\\alpha=-3/4$.'),
  s('Biết $\\tan\\alpha=3/4$ và $\\alpha$ thuộc góc phần tư III. Tính $\\sin\\alpha+\\cos\\alpha$.','-7/5','Tam giác chuẩn có độ lớn sin $3/5$, cos $4/5$; cả hai âm ở góc phần tư III.')
]},
{qt:2,sub:'addition',items:[
  m('$\\sin75^\\circ$ bằng:',['$(\\sqrt6-\\sqrt2)/4$','$(\\sqrt6+\\sqrt2)/4$','$\\sqrt3/2$','$1/2$'],'B','Dùng $75^\\circ=45^\\circ+30^\\circ$.'),
  s('Tính $\\cos15^\\circ$. Nhập biểu thức dạng $(\\sqrt6+\\sqrt2)/4$ không có dấu đôla.','(sqrt6+sqrt2)/4','$\\cos(45^\\circ-30^\\circ)=(\\sqrt6+\\sqrt2)/4$.'),
  m('Nếu $\\sin x=3/5$, $\\cos x=4/5$ thì $\\sin2x$ bằng:',['$7/25$','$12/25$','$24/25$','$1$'],'C','$\\sin2x=2\\sin x\\cos x=24/25$.'),
  m('Công thức đúng của $\\cos(a-b)$ là:',['$\\cos a\\cos b-\\sin a\\sin b$','$\\cos a\\cos b+\\sin a\\sin b$','$\\sin a\\cos b-\\cos a\\sin b$','$\\sin a\\sin b+\\cos a\\cos b$ chỉ khi $a=b$'],'B','Cos của hiệu có dấu cộng giữa hai tích.'),
  s('Biết $\\sin x=5/13$, $\\cos x=12/13$. Tính $\\cos2x$.','119/169','$\\cos2x=\\cos^2x-\\sin^2x=(144-25)/169$.'),
  s('Tính chính xác $\\tan75^\\circ$.','2+sqrt3','Dùng công thức tan của tổng $45^\\circ+30^\\circ$, rút gọn được $2+\\sqrt3$.')
]},
{qt:2,sub:'product-sum',items:[
  m('$\\cos5x+\\cos3x$ bằng:',['$2\\cos4x\\cos x$','$2\\cos8x\\cos2x$','$\\cos8x+\\cos2x$','$2\\sin4x\\sin x$'],'A','Dùng tổng thành tích với nửa tổng $4x$, nửa hiệu $x$.'),
  s('Rút gọn $2\\sin5x\\cos2x$ thành tổng.','sin7x+sin3x','$2\\sin a\\cos b=\\sin(a+b)+\\sin(a-b)$.'),
  m('$\\sin a-\\sin b$ bằng:',['$2\\cos\\frac{a+b}2\\sin\\frac{a-b}2$','$2\\sin\\frac{a+b}2\\cos\\frac{a-b}2$','$2\\cos\\frac{a-b}2\\sin\\frac{a+b}2$','$\\sin(a-b)$'],'A','Đây là công thức biến đổi hiệu hai sin thành tích.'),
  m('Khi đổi $\\cos a\\cos b$ thành tổng, hệ số phía trước là:',['$2$','$1$','$1/2$','$-1/2$'],'C','$\\cos a\\cos b=[\\cos(a+b)+\\cos(a-b)]/2$.'),
  s('Tính $8\\sin10^\\circ\\sin50^\\circ\\sin70^\\circ$.','1','Dùng biến đổi tích thành tổng liên tiếp thu được giá trị bằng 1.'),
  s('Rút gọn $\\dfrac{\\sin3x+\\sin x}{\\cos3x+\\cos x}$ với mẫu khác 0.','tan2x','Tử bằng $2\\sin2x\\cos x$, mẫu bằng $2\\cos2x\\cos x$; thương là $\\tan2x$.')
]},
{qt:3,sub:'properties',items:[
  m('Chu kì nhỏ nhất của $y=\\sin(3x)$ là:',['$2\\pi$','$2\\pi/3$','$\\pi/3$','$3\\pi$'],'B','Với $\\sin(ax)$, chu kì là $2\\pi/|a|$.'),
  s('Chu kì nhỏ nhất của $y=\\tan(2x)$ là bao nhiêu theo hệ số của $\\pi$?','1/2','Chu kì của $\\tan(ax)$ là $\\pi/|a|=\\pi/2$.'),
  m('Tập giá trị của $y=2\\cos x-1$ là:',['$[-1;1]$','$[-3;1]$','$[-2;2]$','$(-\\infty;+\\infty)$'],'B','Vì $\\cos x\\in[-1,1]$, nhân 2 rồi trừ 1.'),
  m('Khẳng định nào sai?',['$\\sin x$ là hàm lẻ','$\\cos x$ là hàm chẵn','$\\tan x$ có tập giá trị $\\mathbb R$','$\\cot x$ xác định với mọi $x\\in\\mathbb R$'],'D','$\\cot x$ không xác định tại $x=k\\pi$.'),
  s('Trên $[0;2\\pi]$, hàm $y=\\sin x$ đạt giá trị nhỏ nhất tại $x=k\\pi/2$. Tìm $k$.','3','Giá trị nhỏ nhất $-1$ đạt tại $x=3\\pi/2$.'),
  s('Tìm số điểm không xác định của $y=\\tan(2x)$ trên đoạn $[0;2\\pi]$.','4','$2x=\\pi/2+k\\pi$, tức $x=\\pi/4+k\\pi/2$; có bốn giá trị trong đoạn.')
]},
{qt:3,sub:'graph',items:[
  m('Đồ thị $y=\\cos x$ đi qua điểm nào?',['$(0;0)$','$(0;1)$','$(\\pi/2;1)$','$(\\pi;-1/2)$'],'B','$\\cos0=1$.'),
  s('Biên độ của đồ thị $y=3\\sin x-2$ bằng:','3','Hệ số tuyệt đối trước sin là biên độ.'),
  m('Đồ thị tuần hoàn có giá trị lớn nhất 4, nhỏ nhất $-2$. Đường trung bình của đồ thị là:',['$y=1$','$y=2$','$y=3$','$y=-1$'],'A','Trung bình của 4 và $-2$ là 1.'),
  m('Đồ thị $y=\\sin x$ có đối xứng qua trục $Oy$ không?',['Có vì hàm chẵn','Không; đồ thị đối xứng qua gốc tọa độ','Có vì tuần hoàn','Chỉ trên một chu kì'],'B','Sin là hàm lẻ.'),
  s('Đồ thị $y=a\\sin x$ có giá trị lớn nhất 5 và $a<0$. Tìm $a$.','-5','Giá trị lớn nhất bằng $|a|=5$ và điều kiện cho $a=-5$.'),
  s('Một đồ thị dạng $y=A\\cos(2x)+d$ có giá trị lớn nhất 7 và nhỏ nhất 1, với $A>0$. Tính $A+d$.','7','$A=(7-1)/2=3$, $d=(7+1)/2=4$, nên tổng bằng 7.')
]},
{qt:4,sub:'basic',items:[
  m('Nghiệm tổng quát của $\\cos x=0$ là:',['$x=k\\pi$','$x=\\pi/2+k\\pi$','$x=\\pi/2+2k\\pi$','$x=\\pi+2k\\pi$'],'B','Cos bằng 0 tại các bội lẻ của $\\pi/2$.'),
  s('Số nghiệm của $\\sin x=1/2$ trên $[0;2\\pi]$ là:','2','Hai nghiệm là $\\pi/6$ và $5\\pi/6$.'),
  m('Phương trình $\\sin x=2$ có:',['Một nghiệm','Hai nghiệm','Vô số nghiệm','Không có nghiệm'],'D','Giá trị sin thuộc $[-1,1]$.'),
  m('Nghiệm của $\\tan x=-1$ là:',['$x=-\\pi/4+k\\pi$','$x=\\pi/4+k\\pi$','$x=-\\pi/4+2k\\pi$','$x=3\\pi/4+2k\\pi$'],'A','Tan có chu kì $\\pi$.'),
  s('Tính tổng các nghiệm của $\\cos x=1/2$ trên $[0;2\\pi]$.','2pi','Hai nghiệm là $\\pi/3$ và $5\\pi/3$.'),
  s('Số nghiệm của $\\sin x=\\cos x$ trên đoạn $[-2\\pi;2\\pi]$ là:','4','Tương đương $\\tan x=1$, $x=\\pi/4+k\\pi$; có bốn số nguyên $k$ phù hợp.')
]},
{qt:4,sub:'transformed',items:[
  m('Nghiệm của $\\sin(2x)=0$ là:',['$x=k\\pi$','$x=k\\pi/2$','$x=\\pi/2+k\\pi$','$x=2k\\pi$'],'B','$2x=k\\pi$.'),
  s('Số nghiệm của $\\cos(2x)=\\cos(\\pi/3)$ trên $[0;2\\pi)$ là:','4','Trong khoảng của $2x$ dài $4\\pi$, phương trình cos có bốn nghiệm.'),
  m('$2\\sin x-1=0$ tương đương:',['$\\sin x=2$','$\\sin x=1/2$','$\\cos x=1/2$','$\\tan x=1$'],'B','Chuyển vế rồi chia 2.'),
  m('Khi giải $\\sin(3x)=\\sin\\alpha$, sau khi tìm các họ nghiệm theo $3x$, cần:',['Giữ nguyên','Chia toàn bộ phương trình cho 3','Nhân thêm 3','Chỉ lấy một họ nghiệm'],'B','Phải giải tiếp biến trung gian để tìm $x$.'),
  s('Tính tổng các nghiệm của $\\cos(2x)=0$ trên $[0;\\pi]$.','pi','Nghiệm là $\\pi/4$ và $3\\pi/4$, tổng bằng $\\pi$.'),
  s('Số nghiệm của phương trình $2\\cos^2x-3\\cos x+1=0$ trên $[0;2\\pi)$ là:','3','Đặt $t=\\cos x$: $(2t-1)(t-1)=0$. Cos bằng $1/2$ cho hai nghiệm, cos bằng 1 cho một nghiệm.')
]}
];

const solutionData:{number:number;answer:string;reasoning:string}[]=[];
let number=625;
export const g11MathModule1ExpansionQuestions:CourseQuestion[]=banks.flatMap(bank=>bank.items.map((item,index)=>{
  const current=number++;
  solutionData.push({number:current,answer:item.answer,reasoning:item.reasoning});
  return {
    id:`math11-q${current}`,courseId:'grade11:math',moduleId:'math11-m1',
    lessonId:`math11-kntt-l${bank.qt}`,subjectId:'math',topicId:'math11-t01',
    questionTypeId:`math11-qt0${bank.qt}`,subTypeId:`math11-qt0${bank.qt}-st-${bank.sub}`,
    practiceRole:roles[index],representationType:reps[index],
    isMasteryHoldout:index===5,content:item.content,
    responseType:item.options?'single_choice':'short_answer',
    validatorType:item.options?'choice':'exact',options:item.options,
    acceptedAnswers:item.options?undefined:[item.answer,`$${item.answer}$`,item.answer.replace('.',',')],
    outcomeIds:[`out-math11-m1-0${bank.qt}`],correctAnswer:item.answer,
    difficulty:difficulties[index],sourceType:'manual',
    cognitiveLevel:index<1?'understanding':'application',
    estimatedSeconds:index<1?45:index<4?100:180
  } as CourseQuestion;
}));
export const g11MathModule1ExpansionSolutions:CourseSolution[]=solutionData.map(x=>({
  id:`math11-s${x.number}`,courseId:'grade11:math',moduleId:'math11-m1',questionId:`math11-q${x.number}`,
  recognition:'Nhận dạng góc, công thức biến đổi, tính chất đồ thị hoặc dạng phương trình lượng giác.',
  detailedSteps:[{order:1,title:'Biến đổi lượng giác',explanation:x.reasoning},{order:2,title:'Kết luận',explanation:`Đáp án cần chọn hoặc nhập là ${x.answer}.`}],
  finalAnswer:x.answer,
  commonMistakes:['Sai dấu theo góc phần tư, quên chu kì hoặc thiếu một họ nghiệm.'],
  reviewSuggestions:['Đối chiếu với đường tròn lượng giác và kiểm tra nghiệm trong miền yêu cầu.']
}));
