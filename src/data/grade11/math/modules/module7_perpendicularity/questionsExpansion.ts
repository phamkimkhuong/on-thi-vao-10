import type {CourseQuestion,CourseSolution} from '@/data/schema';
import type {PracticeRole,QuestionRepresentationType} from '@/types';

type Choice='A'|'B'|'C'|'D';
type Item={content:string;answer:string;reasoning:string;options?:[string,string,string,string]};
type Bank={qt:number;sub:string;items:Item[]};
const roles:PracticeRole[]=['guided','near_transfer','representation_switch','misconception_check','far_transfer','mastery_holdout'];
const reps:QuestionRepresentationType[]=['diagram','equation','text','diagram','equation','diagram'];
const difficulties:CourseQuestion['difficulty'][]=['easy','medium','medium','medium','hard','hard'];
const m=(content:string,options:[string,string,string,string],answer:Choice,reasoning:string):Item=>({content,options,answer,reasoning});
const s=(content:string,answer:string,reasoning:string):Item=>({content,answer,reasoning});

const banks:Bank[]=[
{qt:22,sub:'angle',items:[
  m('Trong lập phương $ABCD.A_1B_1C_1D_1$, góc giữa $AB$ và $AC$ bằng:',['$30^\\circ$','$45^\\circ$','$60^\\circ$','$90^\\circ$'],'B','Xét hình vuông $ABCD$, đường chéo tạo với mỗi cạnh một góc $45^\\circ$.'),
  m('Hai đường có vectơ chỉ phương $\\vec u=(1;1;0)$ và $\\vec v=(1;-1;0)$. Góc giữa chúng bằng:',['$0^\\circ$','$30^\\circ$','$60^\\circ$','$90^\\circ$'],'D','$\\vec u\\cdot\\vec v=0$.'),
  s('Hai đường có vectơ chỉ phương $(1;0;1)$ và $(1;1;0)$. Tính góc giữa chúng theo độ.','60','Tích vô hướng bằng 1, mỗi vectơ có độ dài $\\sqrt2$, nên $\\cos\\theta=1/2$.'),
  m('Hai đường chéo nhau có hai vectơ chỉ phương vuông góc. Kết luận đúng là:',['Hai đường song song','Hai đường vuông góc','Hai đường phải cắt nhau','Không xác định được góc'],'B','Hai đường trong không gian vuông góc không bắt buộc phải cắt nhau.'),
  s('Trong lập phương, tính góc giữa $AC$ và $A_1B$.','60','Chọn vectơ chỉ phương $(1;1;0)$ và $(1;0;-1)$; cosin góc bằng $1/2$.'),
  s('Hai đường có vectơ chỉ phương $(1;2;2)$ và $(2;-1;0)$. Tính góc giữa chúng theo độ.','90','Tích vô hướng $1\\cdot2+2(-1)+2\\cdot0=0$.')
]},
{qt:22,sub:'proof',items:[
  m('Trong lập phương, vì $AB\\perp AA_1$ và $CC_1\\parallel AA_1$, suy ra:',['$AB\\parallel CC_1$','$AB\\perp CC_1$','$AB=CC_1$','$AB$ cắt $CC_1$'],'B','Thay $CC_1$ bằng đường song song $AA_1$ để xác định góc giữa hai đường.'),
  m('Cho $a\\parallel a_1$, $b\\parallel b_1$ và $a_1\\perp b_1$. Quan hệ giữa $a,b$ là:',['Song song','Vuông góc','Trùng nhau','Không xác định'],'B','Góc giữa hai đường không đổi khi thay bằng các đường song song tương ứng.'),
  s('Hai vectơ chỉ phương của $a,b$ là $(2;-1;3)$ và $(1;2;0)$. Tính tích vô hướng để kết luận vuông góc.','0','Tích vô hướng là $2-2+0=0$, nên hai đường vuông góc.'),
  m('Phát biểu nào sai?',['Hai đường vuông góc có thể chéo nhau','Hai đường cắt nhau tạo góc vuông thì vuông góc','Hai đường vuông góc luôn đồng phẳng','Tích vô hướng hai vectơ chỉ phương bằng 0 chứng minh được vuông góc'],'C','Hai đường vuông góc trong không gian có thể chéo nhau.'),
  s('Cho tam giác $ABC$ có $AB=3$, $AC=4$, $BC=5$. Tính góc giữa $AB$ và $AC$ theo độ.','90','Vì $AB^2+AC^2=BC^2$, tam giác vuông tại $A$.'),
  m('Muốn chứng minh hai đường chéo nhau $a,b$ vuông góc bằng hình học tổng hợp, cách phù hợp là:',['Chứng minh chúng cắt nhau','Dựng qua một điểm hai đường lần lượt song song với $a,b$ rồi chứng minh vuông góc','Chứng minh chúng cùng thuộc một mặt phẳng','So sánh độ dài hai đường'],'B','Định nghĩa góc giữa hai đường chéo nhau dùng hai đường song song tương ứng cùng qua một điểm.')
]},
{qt:23,sub:'condition',items:[
  m('Trong hình chóp $S.ABCD$, $SA\\perp AB$ và $SA\\perp AD$, với $AB,AD$ cắt nhau trong đáy. Khi đó:',['$SA\\parallel(ABCD)$','$SA\\perp(ABCD)$','$SA\\subset(ABCD)$','Chưa đủ dữ kiện'],'B','Một đường vuông góc với hai đường cắt nhau trong mặt phẳng thì vuông góc mặt phẳng.'),
  m('Nếu $d\\perp(P)$ và $e\\parallel d$ thì:',['$e\\parallel(P)$','$e\\perp(P)$','$e\\subset(P)$','$e$ không thể cắt $(P)$'],'B','Các đường song song với đường vuông góc mặt phẳng cũng vuông góc mặt phẳng.'),
  s('Trong hình chóp $S.ABC$, biết $SA\\perp AB$, $SA\\perp AC$ và $SA=6$. Tính $d(S,(ABC))$.','6','$SA\\perp(ABC)$ nên $A$ là hình chiếu của $S$ lên đáy.'),
  m('Biết $d\\perp a$ với duy nhất một đường $a\\subset(P)$. Có thể kết luận $d\\perp(P)$ không?',['Luôn có','Không, cần thêm một đường cắt $a$ trong $(P)$ cũng vuông góc $d$','Có nếu $d$ dài hơn $a$','Có nếu $a$ đi qua một điểm cố định'],'B','Một đường trong mặt phẳng chưa xác định đủ hai phương của mặt phẳng.'),
  m('Trong tứ diện $SABC$, $SA\\perp AB$, $SA\\perp AC$. Nếu $M,N$ lần lượt thuộc $AB,AC$ thì quan hệ chắc chắn đúng là:',['$SA\\perp MN$','$SA\\perp(ABC)$','$MN\\perp(ABC)$','$SA\\parallel MN$'],'B','$AB$ và $AC$ cắt nhau tại $A$, nên áp dụng điều kiện đường–mặt vuông góc.'),
  s('Cho $AB=AC=5$, $BC=6$ và $SA\\perp AB$, $SA\\perp AC$. Tính khoảng cách từ $S$ đến mặt phẳng $(ABC)$ nếu $SA=8$.','8','Hai quan hệ vuông góc cho $SA\\perp(ABC)$; độ dài đường vuông góc là khoảng cách.')
]},
{qt:23,sub:'three-lines',items:[
  m('$AH\\perp(P)$, $AB$ là đường xiên và $HB$ là hình chiếu của $AB$ lên $(P)$. Nếu $d\\subset(P)$, $d\\perp HB$ thì:',['$d\\parallel AB$','$d\\perp AB$','$d=AB$','$d\\perp AH$ nhưng không liên quan $AB$'],'B','Áp dụng định lí ba đường vuông góc.'),
  m('Trong hình chóp $S.ABC$, $SA\\perp(ABC)$ và $AB\\perp BC$. Theo định lí ba đường vuông góc:',['$SB\\perp BC$','$SC\\perp AB$','$SB\\parallel BC$','$AC\\perp SB$'],'A','$AB$ là hình chiếu của $SB$ lên đáy và $BC\\perp AB$.'),
  s('$SH\\perp(P)$, $SM=13$, $SH=5$. Tính độ dài hình chiếu $HM$ của $SM$ trên $(P)$.','12','Tam giác $SHM$ vuông tại $H$: $HM=\\sqrt{13^2-5^2}=12$.'),
  m('Trong định lí ba đường vuông góc, nếu đường $b$ trong mặt phẳng vuông góc với đường xiên $a$ thì $b$ có vuông góc với hình chiếu $a_1$ không?',['Có','Không','Chỉ khi hai đường song song','Chỉ khi đường xiên vuông góc mặt phẳng'],'A','Định lí có chiều đảo: $b\\perp a$ khi và chỉ khi $b\\perp a_1$ trong cấu hình phù hợp.'),
  s('Cho $SA\\perp(ABC)$, tam giác $ABC$ vuông tại $B$, $SA=4$, $AB=3$. Tính $SB$.','5','Tam giác $SAB$ vuông tại $A$, nên $SB=\\sqrt{4^2+3^2}=5$.'),
  m('Cho $SA\\perp(ABC)$ và $BC\\perp AB$. Đường nào sau đây chắc chắn vuông góc $BC$?',['$SC$','$SB$','$AC$','$SA$ và $SB$'],'D','$SA\\perp BC$ do vuông góc mặt đáy; $SB\\perp BC$ theo ba đường vuông góc.')
]},
{qt:24,sub:'projection',items:[
  m('Trong lập phương $ABCD.A_1B_1C_1D_1$, hình chiếu của $A_1$ lên đáy là:',['$A$','$B$','$C$','$D$'],'A','$AA_1\\perp(ABCD)$.'),
  m('Nếu $AH\\perp(P)$ và $B\\in(P)$ thì hình chiếu của đoạn $AB$ lên $(P)$ là:',['$AH$','$HB$','$AB$','Điểm $H$'],'B','Hai đầu mút chiếu thành $H$ và $B$.'),
  s('$AH\\perp(P)$, $AB=10$, $AH=6$. Tính độ dài hình chiếu của $AB$ lên $(P)$.','8','Hình chiếu là $HB$ và tam giác $AHB$ vuông: $HB=8$.'),
  m('Một đường thẳng vuông góc với mặt phẳng có hình chiếu lên mặt phẳng là:',['Một đường song song','Một điểm','Chính đường đó','Một đoạn có cùng độ dài'],'B','Mọi điểm trên đường chiếu về cùng chân vuông góc.'),
  s('Trong lăng trụ đứng $ABC.A_1B_1C_1$, $AB=5$, $AA_1=12$. Tính độ dài $A_1B$, biết $AB$ là hình chiếu của $A_1B$ lên đáy.','13','Tam giác $A_1AB$ vuông tại $A$ là tam giác $5-12-13$.'),
  m('Cho hình chóp có $SO\\perp(ABCD)$. Hình chiếu của đường $SA$ lên đáy là:',['$SO$','$OA$','$SA$','$AB$'],'B','$S$ chiếu thành $O$, còn $A$ nằm sẵn trên đáy.')
]},
{qt:24,sub:'angle',items:[
  m('$AH\\perp(P)$, $AM$ là đường xiên, $HM$ là hình chiếu. Góc giữa $AM$ và $(P)$ là:',['$\\widehat{HAM}$','$\\widehat{AMH}$','$\\widehat{AHM}$','$90^\\circ$'],'B','Góc đường–mặt là góc giữa đường xiên và hình chiếu.'),
  s('Tam giác $AHM$ vuông tại $H$, $AH=3$, $HM=4$. Tính góc giữa $AM$ và mặt phẳng $(P)$ theo độ.','36.87','$\\tan\\alpha=AH/HM=3/4$, nên $\\alpha\\approx36{,}87^\\circ$.'),
  m('Một đường tạo với pháp tuyến của mặt phẳng góc $30^\\circ$. Góc giữa đường và mặt phẳng bằng:',['$30^\\circ$','$45^\\circ$','$60^\\circ$','$90^\\circ$'],'C','Hai góc phụ nhau.'),
  m('Đường $d$ không nằm trong $(P)$ và $d\\parallel(P)$. Số đo góc giữa $d$ và $(P)$ là:',['$0^\\circ$','$30^\\circ$','$60^\\circ$','$90^\\circ$'],'A','Hình chiếu của $d$ lên mặt phẳng cùng phương với $d$.'),
  s('Hình chóp có $SA\\perp(ABC)$, $SA=AB$. Tính góc giữa $SB$ và đáy theo độ.','45','Hình chiếu của $SB$ là $AB$; tam giác $SAB$ vuông cân.'),
  s('$SH\\perp(P)$, $SM=10$ và góc giữa $SM$ với $(P)$ bằng $30^\\circ$. Tính $SH$.','5','$SH=SM\\sin30^\\circ=5$.')
]},
{qt:25,sub:'condition',items:[
  m('Mặt phẳng $(P)$ chứa một đường thẳng là pháp tuyến của mặt phẳng $(Q)$. Quan hệ giữa hai mặt phẳng là:',['Song song','Vuông góc','Trùng nhau','Không xác định'],'B','Một mặt phẳng chứa đường vuông góc với mặt phẳng kia thì hai mặt phẳng vuông góc.'),
  m('$SA\\perp(ABC)$ và $SA\\subset(SAB)$. Khi đó:',['$(SAB)\\parallel(ABC)$','$(SAB)\\perp(ABC)$','Hai mặt phẳng trùng nhau','Không có giao tuyến'],'B','Mặt phẳng $(SAB)$ chứa đường $SA$ vuông góc đáy.'),
  s('Góc giữa hai mặt phẳng vuông góc bằng bao nhiêu độ?','90','Đây là định nghĩa hai mặt phẳng vuông góc.'),
  m('Hai mặt phẳng chứa một cặp đường thẳng vuông góc thì có chắc vuông góc không?',['Có','Không','Chỉ khi hai đường dài bằng nhau','Chỉ khi hai mặt phẳng song song'],'B','Một cặp đường vuông góc tùy ý chưa đủ; cần một đường vuông góc với cả mặt phẳng kia.'),
  m('$(P)\\cap(Q)=a$, $(P)\\perp(Q)$. Nếu $b\\subset(P)$ và $b\\perp a$ thì:',['$b\\parallel(Q)$','$b\\perp(Q)$','$b\\subset(Q)$','$b=a$'],'B','Tính chất hai mặt phẳng vuông góc theo giao tuyến.'),
  s('Hai mặt phẳng có góc nhị diện $90^\\circ$. Tính cosin góc giữa chúng.','0','$\\cos90^\\circ=0$.')
]},
{qt:25,sub:'solids',items:[
  m('Trong lăng trụ đứng, mặt bên có quan hệ với mặt đáy là:',['Song song','Vuông góc','Trùng nhau','Tạo góc $45^\\circ$'],'B','Mặt bên chứa cạnh bên vuông góc đáy.'),
  m('Trong hình hộp chữ nhật, số mặt phẳng mặt đôi một tạo thành các cặp song song hoặc vuông góc vì:',['Các mặt đều là tam giác','Các cạnh kề đôi một vuông góc','Mọi đường chéo bằng nhau','Thể tích bằng 1'],'B','Ba phương cạnh của hình hộp chữ nhật đôi một vuông góc.'),
  s('Một lăng trụ đứng có cạnh bên dài 7. Tính khoảng cách giữa hai mặt phẳng đáy.','7','Cạnh bên vuông góc hai đáy nên chính là chiều cao.'),
  m('Mệnh đề nào sai về hình chóp đều?',['Chân đường cao là tâm đáy','Các cạnh bên bằng nhau','Mọi mặt bên vuông góc đáy','Các mặt bên là các tam giác cân bằng nhau'],'C','Mặt bên của hình chóp đều không nhất thiết vuông góc đáy.'),
  s('Hình hộp chữ nhật có ba kích thước $3,4,12$. Tính đường chéo không gian.','13','Đường chéo bằng $\\sqrt{3^2+4^2+12^2}=13$.'),
  m('Trong lập phương, hai mặt phẳng $(ABB_1A_1)$ và $(ABCD)$:',['Song song','Vuông góc','Trùng nhau','Tạo góc $60^\\circ$'],'B','Mặt bên chứa $AA_1\\perp(ABCD)$.')
]},
{qt:26,sub:'basic',items:[
  m('$MH\\perp(P)$, $MH=6$. Khoảng cách từ $M$ đến $(P)$ là:',['$3$','$6$','$12$','Không xác định'],'B','Khoảng cách điểm–mặt là độ dài đoạn vuông góc.'),
  s('Tam giác $ABC$ vuông tại $A$, $AB=6$, $AC=8$. Tính khoảng cách từ $A$ đến $BC$.','4.8','Đường cao tới cạnh huyền là $AB\\cdot AC/BC=48/10=4{,}8$.'),
  m('Điểm $M$ nằm trên mặt phẳng $(P)$. Khi đó $d(M,(P))$ bằng:',['$0$','$1$','$MH$','$+\\infty$'],'A','Điểm thuộc mặt phẳng có khoảng cách bằng 0.'),
  m('Đoạn xiên từ $M$ đến $(P)$ có thể ngắn hơn đoạn vuông góc từ $M$ đến $(P)$ không?',['Có','Không','Chỉ khi góc nhỏ','Chỉ trong hình chóp'],'B','Đoạn vuông góc là đoạn ngắn nhất nối điểm với mặt phẳng.'),
  s('$SA\\perp(ABC)$, $SA=9$. Tính $d(S,(ABC))$.','9','$A$ là hình chiếu vuông góc của $S$ lên đáy.'),
  s('Trong hệ trục vuông góc, điểm $M(2;-3;5)$ và mặt phẳng tọa độ $(Oxy)$. Tính khoảng cách từ $M$ đến $(Oxy)$.','5','Khoảng cách tới $(Oxy)$ là trị tuyệt đối tọa độ thứ ba.')
]},
{qt:26,sub:'objects',items:[
  m('Hai mặt phẳng song song cách nhau 5. Khoảng cách từ một điểm bất kỳ của mặt phẳng thứ nhất đến mặt phẳng thứ hai bằng:',['$0$','$5$','$10$','Phụ thuộc điểm'],'B','Khoảng cách giữa hai mặt phẳng song song là không đổi.'),
  s('Trong hình hộp chữ nhật có chiều cao 8, tính khoảng cách giữa hai mặt phẳng đáy.','8','Cạnh bên vuông góc đáy là đoạn vuông góc chung.'),
  m('Khoảng cách giữa hai đường thẳng chéo nhau là độ dài:',['Đoạn nối hai điểm bất kỳ','Đường vuông góc chung','Một trong hai đường','Hình chiếu dài nhất'],'B','Đó là định nghĩa khoảng cách giữa hai đường chéo nhau.'),
  m('Nếu $a\\parallel(P)$ thì khoảng cách giữa $a$ và $(P)$ được tính bằng:',['Khoảng cách từ mọi điểm ngoài $a$','Khoảng cách từ một điểm bất kỳ trên $a$ đến $(P)$','Độ dài của $a$','Luôn bằng 0'],'B','Mọi điểm trên đường song song có cùng khoảng cách tới mặt phẳng.'),
  s('Trong lập phương cạnh 6, tính khoảng cách giữa hai cạnh đối diện $AB$ và $C_1D_1$.','6sqrt2','$AB\\parallel C_1D_1$; đoạn $AD_1$ vuông góc với cả hai đường và có độ dài $6\\sqrt2$.'),
  s('Trong lập phương cạnh 4, tính khoảng cách giữa hai mặt phẳng đối diện $(ABCD)$ và $(A_1B_1C_1D_1)$.','4','Cạnh bên là đoạn vuông góc chung của hai mặt phẳng đáy.')
]},
{qt:27,sub:'prism',items:[
  m('Lăng trụ có diện tích đáy 12 và chiều cao 5. Thể tích bằng:',['$17$','$30$','$60$','$120$'],'C','$V=Bh=12\\cdot5=60$.'),
  s('Lăng trụ có thể tích 96 và diện tích đáy 12. Tính chiều cao.','8','$h=V/B=96/12=8$.'),
  m('Lăng trụ đứng đáy tam giác vuông có hai cạnh góc vuông 3, 4 và chiều cao 10. Thể tích bằng:',['$60$','$120$','$240$','$30$'],'A','Diện tích đáy bằng 6, nên $V=6\\cdot10=60$.'),
  m('Cạnh bên của lăng trụ xiên dài 10 có luôn là chiều cao không?',['Có','Không','Chỉ khi đáy là tam giác','Chỉ khi thể tích nguyên'],'B','Chiều cao phải vuông góc với hai mặt phẳng đáy.'),
  s('Một bể hình hộp chữ nhật dài 5 m, rộng 3 m, chứa 30 m³ nước. Tính chiều cao mực nước.','2','$h=V/(5\\cdot3)=2$ m.'),
  s('Lăng trụ có đáy là lục giác đều cạnh 2 và chiều cao 5. Tính thể tích dưới dạng chứa $\\sqrt3$.','30sqrt3','Diện tích lục giác đều là $6\\cdot(\\sqrt3/4)2^2=6\\sqrt3$; nhân chiều cao được $30\\sqrt3$.')
]},
{qt:27,sub:'pyramid',items:[
  m('Hình chóp có diện tích đáy 18, chiều cao 4. Thể tích bằng:',['$24$','$36$','$72$','$216$'],'A','$V=Bh/3=18\\cdot4/3=24$.'),
  s('Hình chóp có thể tích 40 và chiều cao 5. Tính diện tích đáy.','24','$B=3V/h=120/5=24$.'),
  m('Chóp đáy vuông cạnh 6, chiều cao 4 có thể tích:',['$48$','$72$','$96$','$144$'],'A','$V=6^2\\cdot4/3=48$.'),
  m('Hai hình chóp cùng diện tích đáy, chiều cao hình thứ nhất gấp ba hình thứ hai. Tỉ số thể tích tương ứng là:',['$1$','$2$','$3$','$9$'],'C','Thể tích tỉ lệ thuận với chiều cao khi diện tích đáy không đổi.'),
  s('Một khối chóp có đáy tam giác vuông với hai cạnh góc vuông 6, 8 và chiều cao 9. Tính thể tích.','72','Diện tích đáy là 24; $V=24\\cdot9/3=72$.'),
  s('Một tứ diện có ba cạnh đôi một vuông góc tại một đỉnh, độ dài $3,4,5$. Tính thể tích.','10','$V=abc/6=3\\cdot4\\cdot5/6=10$.')
]}
];

const solutionData:{number:number;answer:string;reasoning:string}[]=[];
let number=481;
export const g11MathModule7ExpansionQuestions:CourseQuestion[]=banks.flatMap(bank=>bank.items.map((item,index)=>{
  const current=number++;
  solutionData.push({number:current,answer:item.answer,reasoning:item.reasoning});
  return {
    id:`math11-q${current}`,courseId:'grade11:math',moduleId:'math11-m7',
    lessonId:`math11-kntt-l${bank.qt}`,subjectId:'math',topicId:'math11-t07',
    questionTypeId:`math11-qt${bank.qt}`,subTypeId:`math11-qt${bank.qt}-st-${bank.sub}`,
    practiceRole:roles[index],representationType:reps[index],
    isMasteryHoldout:index===5,content:item.content,
    responseType:item.options?'single_choice':'short_answer',
    validatorType:item.options?'choice':'exact',options:item.options,
    acceptedAnswers:item.options?undefined:[item.answer,`$${item.answer}$`,item.answer.replace('.',',')],
    outcomeIds:[`out-math11-m7-0${bank.qt-21}`],correctAnswer:item.answer,
    difficulty:difficulties[index],sourceType:'manual',
    cognitiveLevel:index<1?'understanding':'application',
    estimatedSeconds:index<1?45:index<4?100:180
  } as CourseQuestion;
}));
export const g11MathModule7ExpansionSolutions:CourseSolution[]=solutionData.map(x=>({
  id:`math11-s${x.number}`,courseId:'grade11:math',moduleId:'math11-m7',questionId:`math11-q${x.number}`,
  recognition:'Xác định quan hệ vuông góc, hình chiếu, khoảng cách hoặc công thức thể tích phù hợp.',
  detailedSteps:[{order:1,title:'Phân tích cấu hình',explanation:x.reasoning},{order:2,title:'Kết luận',explanation:`Đáp án cần chọn hoặc nhập là ${x.answer}.`}],
  finalAnswer:x.answer,
  commonMistakes:['Suy luận trực tiếp từ hình vẽ hoặc chọn sai đường cao, hình chiếu.'],
  reviewSuggestions:['Vẽ lại cấu hình và ghi rõ định lí được sử dụng.']
}));
