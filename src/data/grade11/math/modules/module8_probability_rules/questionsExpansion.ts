import type {CourseQuestion,CourseSolution} from '@/data/schema';
import type {PracticeRole,QuestionRepresentationType} from '@/types';

type Choice='A'|'B'|'C'|'D';
type Item={content:string;answer:string;reasoning:string;options?:[string,string,string,string]};
type Bank={qt:number;sub:string;items:Item[]};
const roles:PracticeRole[]=['guided','near_transfer','representation_switch','misconception_check','far_transfer','mastery_holdout'];
const reps:QuestionRepresentationType[]=['text','equation','diagram','text','equation','diagram'];
const difficulties:CourseQuestion['difficulty'][]=['easy','medium','medium','medium','hard','hard'];
const m=(content:string,options:[string,string,string,string],answer:Choice,reasoning:string):Item=>({content,options,answer,reasoning});
const s=(content:string,answer:string,reasoning:string):Item=>({content,answer,reasoning});

const banks:Bank[]=[
{qt:28,sub:'events',items:[
  m('Gieo một xúc xắc. $A$: “số chấm chẵn”, $B$: “số chấm lớn hơn 4”. Khi đó $A\\cup B$ là:',['$\\{2,4,6\\}$','$\\{5,6\\}$','$\\{2,4,5,6\\}$','$\\{6\\}$'],'C','$A=\\{2,4,6\\}$, B=\\{5,6\\}$; hợp gồm mọi phần tử thuộc ít nhất một tập.'),
  m('Rút một lá từ bộ bài 52 lá. Biến cố đối của “rút được lá cơ” là:',['Rút được lá đỏ','Rút được lá không phải cơ','Rút được lá rô','Không rút lá nào'],'B','Biến cố đối chứa toàn bộ kết quả không thuộc biến cố ban đầu.'),
  s('Gieo xúc xắc. $A=\\{1,2,3,4\\}$, $B=\\{3,4,5\\}$. Hỏi $A\\cap B$ có bao nhiêu phần tử?','2','$A\\cap B=\\{3,4\\}$.'),
  m('Nếu $A\\subset B$ thì mệnh đề nào đúng?',['$A\\cup B=A$','$A\\cap B=B$','$A\\cup B=B$','$A\\cap B=\\varnothing$'],'C','Mọi phần tử của $A$ đã thuộc $B$.'),
  s('Không gian mẫu có 20 kết quả đồng khả năng, biến cố $A$ có 7 kết quả. Biến cố đối của $A$ có bao nhiêu kết quả?','13','$|\\overline A|=20-7=13$.'),
  m('Ba biến cố $A,B,C$. Biến cố “đúng một trong ba biến cố xảy ra” được mô tả bởi:',['$A\\cup B\\cup C$','Ba phần chỉ thuộc riêng từng biến cố rồi lấy hợp','$A\\cap B\\cap C$','$\\overline A\\cap\\overline B\\cap\\overline C$'],'B','Phải loại các vùng giao; hợp thông thường còn bao gồm trường hợp hai hoặc ba biến cố cùng xảy ra.')
]},
{qt:28,sub:'independent',items:[
  m('Hai biến cố $A,B$ độc lập khi:',['$P(A\\cap B)=0$','$P(A\\cap B)=P(A)P(B)$','$P(A)+P(B)=1$','$A\\cap B=\\varnothing$'],'B','Đây là điều kiện kiểm tra độc lập.'),
  s('$P(A)=0{,}4$, $P(B)=0{,}5$ và $A,B$ độc lập. Tính $P(A\\cap B)$.','0.2','Nhân hai xác suất: $0{,}4\\cdot0{,}5=0{,}2$.'),
  m('$A,B$ xung khắc và đều có xác suất dương. Kết luận đúng là:',['Chúng độc lập','Chúng không độc lập','Luôn có cùng xác suất','Hợp của chúng có xác suất 1'],'B','Xung khắc cho xác suất giao bằng 0, khác tích hai xác suất dương.'),
  m('Hai lần tung cùng một đồng xu cân đối có độc lập không?',['Có','Không vì dùng cùng đồng xu','Chỉ độc lập nếu cả hai lần ngửa','Không đủ dữ liệu trong mọi mô hình'],'A','Kết quả lần tung này không ảnh hưởng phân phối của lần tung kia.'),
  s('$P(A)=0{,}3$, $P(B)=0{,}6$, $P(A\\cap B)=0{,}18$. Tính $P(A\\cup B)$.','0.72','Giao bằng tích nên hai biến cố độc lập; công thức cộng cho $0{,}3+0{,}6-0{,}18=0{,}72$.'),
  m('$A,B$ độc lập, $P(A)=1/2$, $P(A\\cup B)=3/4$. Tính $P(B)$.',['$1/4$','$1/2$','$2/3$','$3/4$'],'B','Đặt $p=P(B)$: $1/2+p-p/2=3/4$, suy ra $p=1/2$.')
]},
{qt:29,sub:'formula',items:[
  m('$P(A)=0{,}45$, $P(B)=0{,}35$, $P(A\\cap B)=0{,}15$. $P(A\\cup B)$ bằng:',['$0{,}65$','$0{,}8$','$0{,}95$','$0{,}1575$'],'A','Áp dụng $P(A\\cup B)=P(A)+P(B)-P(A\\cap B)$.'),
  s('$P(A\\cup B)=0{,}8$, $P(A)=0{,}5$, $P(B)=0{,}4$. Tính $P(A\\cap B)$.','0.1','Chuyển vế công thức cộng: $0{,}5+0{,}4-0{,}8=0{,}1$.'),
  m('Nếu $P(A)=0{,}7$ thì $P(\\overline A)$ bằng:',['$0{,}3$','$0{,}7$','$1{,}7$','$0$'],'A','$P(\\overline A)=1-P(A)$.'),
  m('Khi tính $P(A\\cup B)$, vì sao phải trừ $P(A\\cap B)$?',['Vì phần giao chưa được đếm','Vì phần giao đã bị đếm hai lần','Vì hai biến cố luôn xung khắc','Để kết quả luôn bằng 1'],'B','Phần giao xuất hiện một lần trong $P(A)$ và một lần trong $P(B)$.'),
  s('$A,B$ xung khắc, $P(A)=0{,}28$, $P(B)=0{,}37$. Tính xác suất không biến cố nào xảy ra.','0.35','Hợp có xác suất $0{,}65$; biến cố đối của hợp có xác suất $0{,}35$.'),
  s('$P(A)=2/3$, $P(B)=3/5$, $P(A\\cup B)=5/6$. Tính $P(A\\cap B)$.','13/30','$P(A\\cap B)=2/3+3/5-5/6=13/30$.')
]},
{qt:29,sub:'counting',items:[
  m('Chọn ngẫu nhiên một số từ 1 đến 20. Xác suất số được chọn chia hết cho 2 hoặc 5 là:',['$1/2$','$3/5$','$7/10$','$4/5$'],'B','Có 10 bội của 2, 4 bội của 5 và 2 bội chung của 10: $(10+4-2)/20=3/5$.'),
  s('Gieo hai xúc xắc cân đối. Tính xác suất tổng hai mặt bằng 7 dưới dạng phân số.','1/6','Có 6 cặp thuận lợi trong 36 cặp đồng khả năng.'),
  m('Một lớp có 12 nữ, 8 nam và lớp trưởng là nam. Chọn ngẫu nhiên một học sinh. Xác suất chọn được học sinh nữ hoặc lớp trưởng là:',['$3/5$','$13/20$','$7/10$','$4/5$'],'B','Hai trường hợp xung khắc gồm 12 học sinh nữ và 1 lớp trưởng nam, nên xác suất là $13/20$.'),
  m('Chọn 2 học sinh từ 5 nam và 4 nữ. Xác suất có ít nhất một nữ nên tính thuận lợi nhất bằng:',['Cộng mọi trường hợp trực tiếp','Lấy 1 trừ xác suất chọn cả hai nam','Nhân $4/9$ hai lần','Lấy xác suất chọn hai nữ'],'B','Biến cố đối của “ít nhất một nữ” là “cả hai đều nam”.'),
  s('Chọn 2 học sinh từ 5 nam và 5 nữ. Tính xác suất có ít nhất một nữ dưới dạng phân số.','7/9','$1-\\binom52/\\binom{10}2=1-10/45=7/9$.'),
  s('Từ các chữ số 1,2,3,4,5 chọn ngẫu nhiên một số có hai chữ số khác nhau. Tính xác suất số đó chẵn hoặc lớn hơn 40.','13/20','Có 20 số. Có 8 số chẵn, 8 số lớn hơn 40 và 3 số thuộc cả hai nhóm, nên hợp có $8+8-3=13$ số.')
]},
{qt:30,sub:'independent',items:[
  m('Tung đồng xu cân đối ba lần. Xác suất cả ba lần đều ngửa là:',['$1/2$','$1/4$','$1/8$','$3/8$'],'C','Ba lần độc lập nên xác suất bằng $(1/2)^3$.'),
  s('Một linh kiện đạt chuẩn với xác suất $0{,}9$. Chọn độc lập 2 linh kiện. Tính xác suất cả hai đạt chuẩn.','0.81','$0{,}9^2=0{,}81$.'),
  m('Hai biến cố độc lập có $P(A)=0{,}2$, $P(B)=0{,}3$. Xác suất đúng một biến cố xảy ra là:',['$0{,}06$','$0{,}38$','$0{,}44$','$0{,}5$'],'B','$0{,}2\\cdot0{,}7+0{,}8\\cdot0{,}3=0{,}38$.'),
  m('Rút hai lá liên tiếp không hoàn lại từ một bộ bài. Hai biến cố “lần 1 được Át” và “lần 2 được Át” có độc lập không?',['Có','Không','Chỉ khi lá đầu không phải Át','Luôn xung khắc'],'B','Không hoàn lại làm xác suất ở lần sau phụ thuộc kết quả lần đầu.'),
  s('Một máy hỏng trong ngày với xác suất $0{,}02$, độc lập giữa các ngày. Tính xác suất máy không hỏng trong 5 ngày.','0.9039207968','Xác suất không hỏng mỗi ngày là $0{,}98$; năm ngày là $0{,}98^5$.'),
  s('Ba xạ thủ bắn độc lập, xác suất trúng lần lượt là $0{,}6;0{,}7;0{,}8$. Tính xác suất có ít nhất một người trúng.','0.976','Lấy 1 trừ xác suất cả ba trượt: $1-0{,}4\\cdot0{,}3\\cdot0{,}2=0{,}976$.')
]},
{qt:30,sub:'tree',items:[
  m('Trên một đường đi của sơ đồ cây, xác suất được tính bằng:',['Tổng các xác suất nhánh','Tích các xác suất nhánh','Hiệu các xác suất nhánh','Xác suất nhánh cuối'],'B','Quy tắc nhân áp dụng dọc một đường đi.'),
  s('Hộp có 3 bi đỏ, 2 bi xanh. Rút 2 bi không hoàn lại. Tính xác suất rút đỏ rồi xanh.','3/10','Xác suất theo đường đi là $3/5\\cdot2/4=3/10$.'),
  m('Một biến cố gồm ba đường đi đôi một rời nhau có xác suất $0{,}1;0{,}2;0{,}15$. Xác suất biến cố là:',['$0{,}003$','$0{,}15$','$0{,}3$','$0{,}45$'],'D','Cộng xác suất của các đường đi rời nhau.'),
  m('Trong sơ đồ cây của phép thử không hoàn lại, xác suất trên các nhánh cấp hai có nhất thiết giống nhau không?',['Có','Không','Luôn bằng $1/2$','Luôn bằng xác suất cấp một'],'B','Thành phần của tổng thể thay đổi sau lần chọn đầu.'),
  s('Hộp I được chọn với xác suất $0{,}4$ và cho bi đỏ với xác suất $0{,}7$; hộp II được chọn với xác suất $0{,}6$ và cho bi đỏ với xác suất $0{,}2$. Tính xác suất lấy được bi đỏ.','0.4','Cộng hai đường đi: $0{,}4\\cdot0{,}7+0{,}6\\cdot0{,}2=0{,}4$.'),
  s('Một học sinh biết bài với xác suất $0{,}7$. Nếu biết, xác suất trả lời đúng là $0{,}9$; nếu không biết, xác suất đoán đúng là $0{,}25$. Tính xác suất trả lời đúng.','0.705','$0{,}7\\cdot0{,}9+0{,}3\\cdot0{,}25=0{,}705$.')
]}
];

const solutionData:{number:number;answer:string;reasoning:string}[]=[];
let number=553;
export const g11MathModule8ExpansionQuestions:CourseQuestion[]=banks.flatMap(bank=>bank.items.map((item,index)=>{
  const current=number++;
  solutionData.push({number:current,answer:item.answer,reasoning:item.reasoning});
  return {
    id:`math11-q${current}`,courseId:'grade11:math',moduleId:'math11-m8',
    lessonId:`math11-kntt-l${bank.qt}`,subjectId:'math',topicId:'math11-t08',
    questionTypeId:`math11-qt${bank.qt}`,subTypeId:`math11-qt${bank.qt}-st-${bank.sub}`,
    practiceRole:roles[index],representationType:reps[index],
    isMasteryHoldout:index===5,content:item.content,
    responseType:item.options?'single_choice':'short_answer',
    validatorType:item.options?'choice':'exact',options:item.options,
    acceptedAnswers:item.options?undefined:[item.answer,`$${item.answer}$`,item.answer.replace('.',',')],
    outcomeIds:[`out-math11-m8-0${bank.qt-27}`],correctAnswer:item.answer,
    difficulty:difficulties[index],sourceType:'manual',
    cognitiveLevel:index<1?'understanding':'application',
    estimatedSeconds:index<1?45:index<4?100:180
  } as CourseQuestion;
}));
export const g11MathModule8ExpansionSolutions:CourseSolution[]=solutionData.map(x=>({
  id:`math11-s${x.number}`,courseId:'grade11:math',moduleId:'math11-m8',questionId:`math11-q${x.number}`,
  recognition:'Mô tả biến cố rồi chọn công thức cộng, nhân, biến cố đối hoặc sơ đồ cây.',
  detailedSteps:[{order:1,title:'Phân tích biến cố',explanation:x.reasoning},{order:2,title:'Kết luận',explanation:`Đáp án cần chọn hoặc nhập là ${x.answer}.`}],
  finalAnswer:x.answer,
  commonMistakes:['Nhầm xung khắc với độc lập hoặc bỏ phần giao trong công thức cộng.'],
  reviewSuggestions:['Viết rõ biến cố và kiểm tra kết quả nằm trong đoạn $[0;1]$.']
}));
