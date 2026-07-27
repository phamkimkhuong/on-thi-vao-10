import type {CourseQuestion,CourseSolution} from '@/data/schema';
import type {PracticeRole,QuestionRepresentationType} from '@/types';

type Choice='A'|'B'|'C'|'D';
type Item={content:string;answer:string;reasoning:string;options?:[string,string,string,string]};
type Bank={qt:number;sub:string;items:Item[]};
const roles:PracticeRole[]=['guided','near_transfer','representation_switch','misconception_check','far_transfer','mastery_holdout'];
const reps:QuestionRepresentationType[]=['table','equation','text','table','equation','table'];
const difficulties:CourseQuestion['difficulty'][]=['easy','medium','medium','medium','hard','hard'];
const m=(content:string,options:[string,string,string,string],answer:Choice,reasoning:string):Item=>({content,options,answer,reasoning});
const s=(content:string,answer:string,reasoning:string):Item=>({content,answer,reasoning});

const banks:Bank[]=[
{qt:8,sub:'read',items:[
  m('Bảng tần số có các tần số $4,6,10$. Cỡ mẫu bằng:',['$10$','$16$','$20$','$24$'],'C','Cộng tất cả tần số: $4+6+10=20$.'),
  s('Một nhóm có tần số 12 trong mẫu gồm 40 quan sát. Tính tần số tương đối dưới dạng thập phân.','0.3','$f=12/40=0{,}3$.'),
  m('Với các nhóm $[0;10)$, $[10;20)$, $[20;30)$, giá trị 20 thuộc nhóm:',['$[0;10)$','$[10;20)$','$[20;30)$','Cả hai nhóm cuối'],'C','Khoảng nhận đầu mút trái và loại đầu mút phải.'),
  m('Có thể cộng các tần số tương đối rồi nhận kết quả khác 1 không?',['Có','Không, tổng phải bằng 1 nếu bảng đầy đủ','Chỉ khi có 2 nhóm','Chỉ khi tần số nguyên'],'B','Các nhóm đầy đủ và không giao nhau chia toàn bộ mẫu.'),
  s('Bảng có tần số các nhóm lần lượt $3,7,9,6$. Tần số tích lũy đến hết nhóm thứ ba bằng bao nhiêu?','19','$3+7+9=19$.'),
  s('Một bảng có cỡ mẫu 50. Ba nhóm đầu có tần số $8,12,15$; nhóm cuối chiếm toàn bộ phần còn lại. Tính tần số nhóm cuối.','15','$50-(8+12+15)=15$.')
]},
{qt:8,sub:'group',items:[
  m('Giá trị đại diện của nhóm $[22;30)$ là:',['$22$','$24$','$26$','$30$'],'C','Lấy trung điểm $(22+30)/2=26$.'),
  s('Độ dài của nhóm $[12;18)$ bằng:','6','$18-12=6$.'),
  m('Dữ liệu $5,8,10,14,19$ được ghép vào $[0;10)$ và $[10;20)$. Tần số hai nhóm là:',['$1,4$','$2,3$','$3,2$','$4,1$'],'B','5 và 8 thuộc nhóm đầu; 10,14,19 thuộc nhóm sau.'),
  m('Khi tính giá trị đại diện của $[a;b)$, dùng cận trên $b$ có đúng không?',['Có','Không, phải dùng trung điểm $(a+b)/2$','Chỉ đúng khi $a=0$','Chỉ đúng với tần số lớn nhất'],'B','Cận trên không đại diện cho vị trí giữa nhóm.'),
  s('Các nhóm liên tiếp có cùng độ dài 5, bắt đầu từ $[0;5)$. Viết cận dưới của nhóm thứ sáu.','25','Nhóm thứ sáu là $[25;30)$.'),
  s('Ghép dữ liệu nguyên từ 0 đến 29 vào ba nhóm $[0;10)$, $[10;20)$, $[20;30)$. Nếu mỗi số xuất hiện một lần, tính tổng các giá trị đại diện nhân tần số.','450','Mỗi nhóm có tần số 10 và đại diện 5,15,25; tổng là $10(5+15+25)=450$.')
]},
{qt:9,sub:'mean-mode',items:[
  m('Ba nhóm có giá trị đại diện $5,15,25$ và tần số $2,3,5$. Số trung bình xấp xỉ bằng:',['$15$','$18$','$20$','$22$'],'B','Trung bình có trọng số là $(10+45+125)/10=18$.'),
  s('Hai nhóm có đại diện 10 và 20, tần số tương ứng 3 và 7. Tính số trung bình xấp xỉ.','17','$(3\\cdot10+7\\cdot20)/10=17$.'),
  m('Nhóm chứa mốt trước hết được nhận biết là nhóm:',['Có cận dưới nhỏ nhất','Có tần số lớn nhất','Có độ dài lớn nhất','Chứa số trung bình'],'B','Nhóm mốt là nhóm đạt tần số cực đại.'),
  m('Khi tính số trung bình ghép nhóm, dùng cận trên thay cho trung điểm nhóm sẽ:', ['Luôn đúng','Có thể làm sai ước lượng','Chỉ đổi đơn vị','Không ảnh hưởng nếu tần số khác nhau'],'B','Công thức yêu cầu giá trị đại diện là trung điểm.'),
  s('Các nhóm có đại diện $5,15,25$ và tần số $4,x,2$. Biết số trung bình xấp xỉ 12. Tìm $x$.','9','Giải $(20+15x+50)/(6+x)=12$ được $x=9$.'),
  s('Nhóm mốt là $[10;20)$, có tần số 8; hai nhóm kề có tần số 5 và 3. Ước lượng mốt.','13.75','$M_o=10+\\frac{8-5}{2\\cdot8-5-3}\\cdot10=13{,}75$.')
]},
{qt:9,sub:'median-quartile',items:[
  m('Để tìm nhóm chứa trung vị của mẫu cỡ $n$, cần xác định vị trí:',['$n/4$','$n/2$','$3n/4$','$n$'],'B','Trung vị chia mẫu thành hai nửa.'),
  s('Các nhóm $[0;10)$, $[10;20)$, $[20;30)$ có tần số $4,8,8$. Ước lượng trung vị.','17.5','$n=20$, vị trí 10 nằm ở nhóm thứ hai; $M_e=10+(10-4)10/8=17{,}5$.'),
  m('Tứ phân vị thứ nhất $Q_1$ gắn với vị trí:',['$n/4$','$n/2$','$3n/4$','$n$'],'A','$Q_1$ chia khoảng 25% số liệu phía dưới.'),
  m('Khi xác định nhóm chứa trung vị, dùng tần số riêng thay cho tần số tích lũy có đúng không?',['Có','Không','Chỉ khi hai nhóm','Chỉ khi cỡ mẫu lẻ'],'B','Phải biết số quan sát đã tích lũy đến từng nhóm.'),
  s('Các nhóm $[0;10)$, $[10;20)$, $[20;30)$ có tần số $5,10,5$. Ước lượng $Q_1$.','10','$n/4=5$; nội suy ở ranh giới cho $Q_1=10$.'),
  s('Một mẫu ghép nhóm có $Q_1=12$, $Q_3=28$. Tính khoảng tứ phân vị.','16','$\\Delta_Q=Q_3-Q_1=28-12=16$.')
]}
];

const solutionData:{number:number;answer:string;reasoning:string}[]=[];
let number=709;
export const g11MathModule3ExpansionQuestions:CourseQuestion[]=banks.flatMap(bank=>bank.items.map((item,index)=>{
  const current=number++;
  solutionData.push({number:current,answer:item.answer,reasoning:item.reasoning});
  return {
    id:`math11-q${current}`,courseId:'grade11:math',moduleId:'math11-m3',
    lessonId:`math11-kntt-l${bank.qt}`,subjectId:'math',topicId:'math11-t03',
    questionTypeId:`math11-qt0${bank.qt}`,subTypeId:`math11-qt0${bank.qt}-st-${bank.sub}`,
    practiceRole:roles[index],representationType:reps[index],
    isMasteryHoldout:index===5,content:item.content,
    responseType:item.options?'single_choice':'short_answer',
    validatorType:item.options?'choice':'exact',options:item.options,
    acceptedAnswers:item.options?undefined:[item.answer,`$${item.answer}$`,item.answer.replace('.',',')],
    outcomeIds:[`out-math11-m3-0${bank.qt-7}`],correctAnswer:item.answer,
    difficulty:difficulties[index],sourceType:'manual',
    cognitiveLevel:index<1?'understanding':'application',
    estimatedSeconds:index<1?45:index<4?100:180
  } as CourseQuestion;
}));
export const g11MathModule3ExpansionSolutions:CourseSolution[]=solutionData.map(x=>({
  id:`math11-s${x.number}`,courseId:'grade11:math',moduleId:'math11-m3',questionId:`math11-q${x.number}`,
  recognition:'Xác định cỡ mẫu, giá trị đại diện, tần số tích lũy và số đặc trưng cần ước lượng.',
  detailedSteps:[{order:1,title:'Đọc và tính từ bảng',explanation:x.reasoning},{order:2,title:'Kết luận',explanation:`Đáp án cần chọn hoặc nhập là ${x.answer}.`}],
  finalAnswer:x.answer,
  commonMistakes:['Xếp sai đầu mút nhóm, dùng cận thay trung điểm hoặc nhầm tần số riêng với tích lũy.'],
  reviewSuggestions:['Lập thêm cột giá trị đại diện và tần số tích lũy trước khi tính.']
}));
