import type {CourseQuestion,CourseSolution} from '@/data/schema';
import type {PracticeRole,QuestionRepresentationType} from '@/types';

type Choice='A'|'B'|'C'|'D';
type Item={content:string;answer:string;reasoning:string;options?:[string,string,string,string]};
type Bank={qt:number;sub:string;items:Item[]};
const roles:PracticeRole[]=['guided','near_transfer','representation_switch','misconception_check','far_transfer','mastery_holdout'];
const reps:QuestionRepresentationType[]=['table','equation','text','table','equation','text'];
const difficulties:CourseQuestion['difficulty'][]=['easy','medium','medium','medium','hard','hard'];
const m=(content:string,options:[string,string,string,string],answer:Choice,reasoning:string):Item=>({content,options,answer,reasoning});
const s=(content:string,answer:string,reasoning:string):Item=>({content,answer,reasoning});

const banks:Bank[]=[
{qt:5,sub:'explicit',items:[
  m('Cho $u_n=n^2-3n$. Giá trị $u_5$ bằng:',['$5$','$10$','$15$','$25$'],'B','$u_5=25-15=10$.'),
  s('Cho $u_n=4n-7$. Số hạng nào của dãy bằng 45? Nhập chỉ số $n$.','13','Giải $4n-7=45$ được $n=13$.'),
  m('Dãy $2,5,10,17,\\ldots$ phù hợp với công thức nào?',['$u_n=n^2+1$','$u_n=2n+1$','$u_n=n^2-1$','$u_n=2^n+1$'],'A','Thay $n=1,2,3,4$ vào $n^2+1$.'),
  m('Quan sát vài số hạng đầu tăng có đủ để kết luận dãy tăng không?',['Có','Không, phải chứng minh với mọi chỉ số hợp lệ','Chỉ cần ba số hạng','Chỉ cần dãy dương'],'B','Định nghĩa đơn điệu yêu cầu bất đẳng thức đúng với mọi $n$.'),
  s('Cho $u_n=\\dfrac{n}{n+1}$. Tính $100(1-u_{99})$.','1','$1-u_{99}=1-99/100=1/100$.'),
  s('Cho $u_n=n+\\dfrac1n$. Tìm giá trị nhỏ nhất của dãy với $n\\ge1$.','2','$n+1/n\\ge2$, dấu bằng tại $n=1$.')
]},
{qt:5,sub:'recursive',items:[
  m('Cho $u_1=1$, $u_{n+1}=2u_n+1$. Khi đó $u_3$ bằng:',['$3$','$5$','$7$','$9$'],'C','$u_2=3$, $u_3=7$.'),
  s('Cho $u_1=2$, $u_2=3$, $u_{n+2}=u_{n+1}+u_n$. Tính $u_6$.','21','Các số hạng tiếp theo là 5, 8, 13, 21.'),
  m('Cho $u_1=5$, $u_{n+1}=u_n-2$. Dãy số là:',['Tăng','Giảm','Không đổi','Không xác định'],'B','$u_{n+1}-u_n=-2<0$.'),
  m('Hệ thức truy hồi chỉ cho $u_{n+1}=u_n+3$ mà không cho $u_1$ có xác định duy nhất dãy không?',['Có','Không','Chỉ khi $n>3$','Chỉ khi dãy tăng'],'B','Cần số hạng khởi đầu để tính các số hạng tiếp theo.'),
  s('Cho $u_1=0$, $u_{n+1}=\\dfrac{u_n+2}{2}$. Tính $u_4$.','7/4','$u_2=1$, $u_3=3/2$, $u_4=7/4$.'),
  s('Cho $u_1=1$, $u_{n+1}=3u_n+2$. Tính $u_5$.','161','Lần lượt $u_2=5$, $u_3=17$, $u_4=53$, $u_5=161$.')
]},
{qt:6,sub:'term',items:[
  m('Cấp số cộng có $u_1=4$, $d=3$. Số hạng $u_8$ bằng:',['$21$','$24$','$25$','$28$'],'C','$u_8=4+7\\cdot3=25$.'),
  s('Cấp số cộng có $u_3=7$, $u_9=25$. Tính công sai $d$.','3','$u_9-u_3=6d=18$.'),
  m('Ba số $x,10,16$ theo thứ tự lập thành cấp số cộng. $x$ bằng:',['$2$','$4$','$6$','$8$'],'B','$2\\cdot10=x+16$, nên $x=4$.'),
  m('Trong công thức $u_n=u_1+(n-1)d$, thay $(n-1)d$ bằng $nd$ có đúng không?',['Luôn đúng','Sai vì từ $u_1$ đến $u_n$ chỉ có $n-1$ bước','Đúng khi $d>0$','Đúng khi $n$ chẵn'],'B','Có đúng $n-1$ lần cộng công sai.'),
  s('Chèn 4 số vào giữa 2 và 32 để được một cấp số cộng gồm 6 số. Tính công sai.','6','Có 5 khoảng bằng nhau, nên $d=(32-2)/5=6$.'),
  s('Một cấp số cộng thỏa $u_5+u_{15}=40$ và $u_{10}=x$. Tìm $x$.','20','Trong cấp số cộng, các số hạng đối xứng quanh $u_{10}$ có tổng $2u_{10}$.')
]},
{qt:6,sub:'sum',items:[
  m('Cấp số cộng có $u_1=2$, $d=2$. Tổng 20 số hạng đầu bằng:',['$400$','$420$','$440$','$800$'],'B','$u_{20}=40$, nên $S_{20}=20(2+40)/2=420$.'),
  s('Cho cấp số cộng $3,7,11,\\ldots$. Tính $S_{15}$.','465','$u_{15}=3+14\\cdot4=59$; $S_{15}=15(3+59)/2=465$.'),
  m('Một rạp có hàng đầu 18 ghế, mỗi hàng sau hơn hàng trước 2 ghế. Tổng ghế của 10 hàng là:',['$180$','$240$','$270$','$360$'],'C','Hàng 10 có 36 ghế; tổng $10(18+36)/2=270$.'),
  m('Khi đại lượng tăng thêm 5% mỗi năm, có nên mô hình bằng cấp số cộng công sai 5 không?',['Có','Không; đây là tăng theo tỉ lệ nên phù hợp cấp số nhân','Chỉ khi năm đầu bằng 100','Luôn dùng được cả hai'],'B','Tăng phần trăm là nhân với cùng một hệ số, không cộng cùng một lượng.'),
  s('Tìm $n$ biết $1+2+\\cdots+n=210$.','20','Giải $n(n+1)/2=210$ được $n=20$.'),
  s('Một người tiết kiệm tháng đầu 500 nghìn đồng, mỗi tháng sau tăng thêm 50 nghìn đồng. Sau 12 tháng tổng số tiền, tính theo nghìn đồng, là bao nhiêu?','9300','Tháng 12 là 1050; tổng $12(500+1050)/2=9300$.')
]},
{qt:7,sub:'term',items:[
  m('Cấp số nhân có $u_1=3$, $q=2$. Số hạng $u_6$ bằng:',['$48$','$96$','$192$','$64$'],'B','$u_6=3\\cdot2^5=96$.'),
  s('Cấp số nhân có $u_2=6$, $u_5=162$ và $q>0$. Tính $q$.','3','$u_5/u_2=q^3=27$, nên $q=3$.'),
  m('Ba số $2,x,18$ theo thứ tự lập thành cấp số nhân với $x>0$. Khi đó $x$ bằng:',['$4$','$6$','$8$','$9$'],'B','$x^2=2\\cdot18=36$, chọn $x=6$.'),
  m('Cấp số nhân có công bội âm và các số hạng khác 0 thì dấu các số hạng:',['Luôn dương','Luôn âm','Luân phiên','Không thay đổi'],'C','Mỗi bước nhân với số âm làm đổi dấu.'),
  s('Chèn 3 số dương vào giữa 2 và 162 để được cấp số nhân gồm 5 số. Tính công bội dương.','3','$2q^4=162$, nên $q^4=81$ và $q=3$.'),
  s('Cấp số nhân dương có $u_3=12$, $u_7=192$. Tính $u_5$.','48','$u_5^2=u_3u_7=2304$, chọn nghiệm dương $u_5=48$.')
]},
{qt:7,sub:'sum',items:[
  m('Cấp số nhân có $u_1=1$, $q=2$. Tổng 8 số hạng đầu bằng:',['$128$','$255$','$256$','$511$'],'B','$S_8=(1-2^8)/(1-2)=255$.'),
  s('Tính tổng $3+6+12+\\cdots+192$.','381','Đây là cấp số nhân $q=2$, số cuối $3\\cdot2^6=192$, nên có 7 số và tổng 381.'),
  m('Một quần thể ban đầu 1000 cá thể, tăng 20% mỗi năm. Sau 3 năm có:',['$1200$','$1440$','$1728$','$1800$'],'C','$1000\\cdot1{,}2^3=1728$.'),
  m('Một tài sản giảm giá 10% mỗi năm có công bội mô hình là:',['$0{,}1$','$0{,}9$','$1{,}1$','$-0{,}1$'],'B','Sau mỗi năm tài sản còn 90% giá trị trước.'),
  s('Một người gửi 10 triệu đồng, lãi kép 5% mỗi năm. Sau 2 năm số tiền, theo triệu đồng, là bao nhiêu?','11.025','$10\\cdot1{,}05^2=11{,}025$.'),
  s('Tìm $n$ biết $1+3+3^2+\\cdots+3^{n-1}=121$.','5','$S_n=(3^n-1)/2=121$, suy ra $3^n=243=3^5$.')
]}
];

const solutionData:{number:number;answer:string;reasoning:string}[]=[];
let number=673;
export const g11MathModule2ExpansionQuestions:CourseQuestion[]=banks.flatMap(bank=>bank.items.map((item,index)=>{
  const current=number++;
  solutionData.push({number:current,answer:item.answer,reasoning:item.reasoning});
  return {
    id:`math11-q${current}`,courseId:'grade11:math',moduleId:'math11-m2',
    lessonId:`math11-kntt-l${bank.qt}`,subjectId:'math',topicId:'math11-t02',
    questionTypeId:`math11-qt0${bank.qt}`,subTypeId:`math11-qt0${bank.qt}-st-${bank.sub}`,
    practiceRole:roles[index],representationType:reps[index],
    isMasteryHoldout:index===5,content:item.content,
    responseType:item.options?'single_choice':'short_answer',
    validatorType:item.options?'choice':'exact',options:item.options,
    acceptedAnswers:item.options?undefined:[item.answer,`$${item.answer}$`,item.answer.replace('.',',')],
    outcomeIds:[`out-math11-m2-0${bank.qt-4}`],correctAnswer:item.answer,
    difficulty:difficulties[index],sourceType:'manual',
    cognitiveLevel:index<1?'understanding':'application',
    estimatedSeconds:index<1?45:index<4?100:180
  } as CourseQuestion;
}));
export const g11MathModule2ExpansionSolutions:CourseSolution[]=solutionData.map(x=>({
  id:`math11-s${x.number}`,courseId:'grade11:math',moduleId:'math11-m2',questionId:`math11-q${x.number}`,
  recognition:'Nhận dạng dãy tổng quát, truy hồi, cấp số cộng hay cấp số nhân trước khi chọn công thức.',
  detailedSteps:[{order:1,title:'Phân tích dãy số',explanation:x.reasoning},{order:2,title:'Kết luận',explanation:`Đáp án cần chọn hoặc nhập là ${x.answer}.`}],
  finalAnswer:x.answer,
  commonMistakes:['Nhầm chỉ số với giá trị số hạng, dùng $n$ thay $n-1$ hoặc nhầm tăng đều với tăng theo tỉ lệ.'],
  reviewSuggestions:['Viết các số hạng đầu và kiểm tra công sai hoặc công bội trước khi tính.']
}));
