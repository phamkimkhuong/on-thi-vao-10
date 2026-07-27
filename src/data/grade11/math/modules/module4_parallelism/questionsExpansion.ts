import type {CourseQuestion,CourseSolution} from '@/data/schema';
import type {PracticeRole,QuestionRepresentationType} from '@/types';

type Choice='A'|'B'|'C'|'D';
type Item={content:string;answer:string;reasoning:string;options?:[string,string,string,string]};
type Bank={qt:number;sub:string;items:Item[]};
const roles:PracticeRole[]=['guided','near_transfer','representation_switch','misconception_check','far_transfer','mastery_holdout'];
const reps:QuestionRepresentationType[]=['diagram','text','diagram','text','equation','diagram'];
const difficulties:CourseQuestion['difficulty'][]=['easy','medium','medium','medium','hard','hard'];
const m=(content:string,options:[string,string,string,string],answer:Choice,reasoning:string):Item=>({content,options,answer,reasoning});
const s=(content:string,answer:string,reasoning:string):Item=>({content,answer,reasoning});

const banks:Bank[]=[
{qt:10,sub:'incidence',items:[
  m('Ba điểm nào xác định duy nhất một mặt phẳng?',['Ba điểm bất kỳ','Ba điểm không thẳng hàng','Ba điểm thẳng hàng','Hai điểm và một điểm trùng'],'B','Điều kiện cần là ba điểm phân biệt không thẳng hàng.'),
  m('Nếu hai điểm phân biệt $A,B$ thuộc $(P)$ thì:',['Chỉ đoạn $AB$ thuộc $(P)$','Cả đường thẳng $AB$ thuộc $(P)$','$AB\\parallel(P)$','$AB\\perp(P)$'],'B','Mặt phẳng chứa trọn đường thẳng qua hai điểm của nó.'),
  s('Một tứ diện có bao nhiêu mặt phẳng chứa các mặt tam giác của nó?','4','Tứ diện có bốn mặt tam giác, mỗi mặt nằm trong một mặt phẳng khác nhau.'),
  m('Một đường thẳng và một điểm nằm trên chính đường đó có xác định duy nhất một mặt phẳng không?',['Có','Không','Chỉ trong tứ diện','Chỉ khi đường dài hữu hạn'],'B','Có vô số mặt phẳng chứa cùng một đường thẳng.'),
  m('Hai đường thẳng cắt nhau xác định:',['Không mặt phẳng nào','Đúng một mặt phẳng','Hai mặt phẳng','Vô số mặt phẳng'],'B','Đây là một trong ba cách xác định mặt phẳng.'),
  s('Trong hình chóp $S.ABCD$, giao của mặt phẳng đáy và đường thẳng $SA$ là điểm nào?','A','$A$ thuộc cả $SA$ và mặt phẳng đáy; $S$ nằm ngoài đáy.')
]},
{qt:10,sub:'intersection',items:[
  m('Muốn xác định giao tuyến của hai mặt phẳng phân biệt, thường cần tìm:',['Một điểm chung','Hai điểm chung phân biệt','Hai đường song song','Một điểm ngoài cả hai'],'B','Đường thẳng được xác định bởi hai điểm chung.'),
  m('Trong hình chóp $S.ABCD$, đặt $I=AC\\cap BD$. Đường chung của hai mặt phẳng $(SAC)$ và $(SBD)$ là:',['$SI$','$AB$','$CD$','$AC$'],'A','$S$ và $I$ là hai điểm chung của hai mặt phẳng.'),
  s('Hai mặt phẳng $(ABC)$ và $(ABD)$ với $C,D$ không thuộc $AB$ có giao tuyến là đường nào?','AB','Cả hai mặt phẳng cùng chứa hai điểm phân biệt $A,B$.'),
  m('Chỉ tìm được một điểm chung của hai mặt phẳng thì đã xác định được giao tuyến chưa?',['Đã đủ','Chưa đủ, cần thêm một điểm chung hoặc phương giao tuyến','Luôn song song','Hai mặt phẳng trùng nhau'],'B','Một điểm chưa xác định duy nhất một đường thẳng.'),
  m('Trong tứ diện $ABCD$, $M\\in AC$, $N\\in AD$. Giao tuyến của $(BMN)$ và $(ACD)$ là:',['$AB$','$MN$','$CD$','$BM$'],'B','$M,N$ cùng thuộc hai mặt phẳng.'),
  s('Trong hình chóp $S.ABCD$ có đáy là hình bình hành, gọi $O=AC\\cap BD$. Giao tuyến của $(SAC)$ và $(SBD)$ đi qua $S$ và điểm nào?','O','$O$ nằm trên cả $AC$ lẫn $BD$.')
]},
{qt:11,sub:'position',items:[
  m('Hai đường thẳng song song trong không gian phải:',['Không đồng phẳng','Đồng phẳng và không có điểm chung','Cắt nhau','Vuông góc'],'B','Đồng phẳng là điều kiện phân biệt song song với chéo nhau.'),
  m('Trong tứ diện $ABCD$, hai cạnh đối $AB$ và $CD$ thường có vị trí:',['Cắt nhau','Song song','Chéo nhau','Trùng nhau'],'C','Hai cạnh đối của tứ diện không đồng phẳng.'),
  s('Trong hình hộp, góc giữa hai cạnh song song bằng bao nhiêu độ?','0','Hai đường song song có góc bằng $0^\\circ$.'),
  m('Hai đường không có điểm chung thì chắc chắn song song không?',['Có','Không, có thể chéo nhau','Chỉ khi cùng dài','Chỉ khi nằm trên hình hộp'],'B','Cần kiểm tra thêm tính đồng phẳng.'),
  m('Trong lập phương $ABCD.A_1B_1C_1D_1$, $AB$ và $CC_1$ là:',['Cắt nhau','Song song','Chéo nhau','Trùng nhau'],'C','Hai đường không cắt, không song song và không đồng phẳng.'),
  m('Hai đường phân biệt cùng nằm trong một mặt phẳng và không cắt nhau thì:',['Chéo nhau','Song song','Vuông góc','Không xác định'],'B','Đây là định nghĩa hai đường song song trong một mặt phẳng.')
]},
{qt:11,sub:'proof',items:[
  m('Nếu $a\\parallel c$, $b\\parallel c$ và $a,b$ phân biệt thì:',['$a$ cắt $b$','$a\\parallel b$','$a,b$ chéo nhau','$a\\perp b$'],'B','Dùng tính chất bắc cầu của quan hệ song song.'),
  m('Trong tam giác $SAB$, $SM=MA$ và $SN=NB$. Quan hệ giữa $MN$ và $AB$ là:',['Song song','Vuông góc','Trùng nhau','Cắt nhau'],'A','$M,N$ là hai trung điểm nên $MN$ là đường trung bình.'),
  s('Trong hình hộp, biết $AB\\parallel CD$ và $CD\\parallel C_1D_1$. Quan hệ giữa $AB$ và $C_1D_1$ là gì? Nhập “song song”.','song song','Hai đường phân biệt cùng song song với $CD$.'),
  m('Để chứng minh hai đường chéo nhau là song song chỉ bằng việc chúng không cắt nhau có hợp lệ không?',['Có','Không','Chỉ khi hình vẽ đẹp','Chỉ khi hai đường bằng nhau'],'B','Không cắt còn có thể là chéo nhau; phải chứng minh đồng phẳng hoặc cùng phương.'),
  m('Trong hình chóp $S.ABCD$ có đáy là hình bình hành, $M,N$ là trung điểm $SA,SD$. Cặp đường song song là:',['$MN$ và $AD$','$MN$ và $AB$','$MN$ và $CD$','$MN$ và $BC$'],'A','Trong tam giác $SAD$, $MN$ là đường trung bình.'),
  s('Trong tam giác $SAB$, $M\\in SA$, $N\\in SB$ và $SM/SA=SN/SB=2/3$. Kết luận quan hệ giữa $MN$ và $AB$.','song song','Định lí Thalès đảo cho $MN\\parallel AB$.')
]},
{qt:12,sub:'condition',items:[
  m('Nếu $d\\parallel a$, $a\\subset(P)$ và $d\\not\\subset(P)$ thì:',['$d\\parallel(P)$','$d\\perp(P)$','$d\\subset(P)$','$d$ cắt $(P)$'],'A','Đây là điều kiện đủ đường thẳng song song mặt phẳng.'),
  m('Để chứng minh $d\\parallel(P)$ bằng đường chuẩn $a$, đường $a$ phải:',['Nằm trong $(P)$','Nằm ngoài $(P)$','Vuông góc $(P)$','Cắt $d$'],'A','Đường chuẩn phải là một phương nằm trong mặt phẳng.'),
  s('Nếu một đường thẳng nằm trong mặt phẳng thì có được gọi là song song với mặt phẳng theo định nghĩa không? Nhập “không”.','không','Quan hệ song song đường–mặt yêu cầu không có điểm chung.'),
  m('Chỉ biết $d\\parallel a$ nhưng chưa biết $a$ có thuộc $(P)$ không thì có kết luận $d\\parallel(P)$ được không?',['Có','Không','Chỉ khi $d=a$','Chỉ khi hai đường dài bằng nhau'],'B','Thiếu dữ kiện liên hệ phương của $a$ với mặt phẳng.'),
  m('Trong hình chóp $S.ABC$, $M,N$ là trung điểm $SA,SB$. Đường $MN$ song song với mặt phẳng:',['$(SAB)$','$(ABC)$','$(SMN)$','Không mặt phẳng nào'],'B','$MN\\parallel AB$ với $AB\\subset(ABC)$, và $MN$ không nằm trong đáy.'),
  m('$d\\parallel(P)$ thì số điểm chung của $d$ và $(P)$ là:',['$0$','$1$','$2$','Vô số'],'A','Đường song song mặt phẳng không có điểm chung với mặt phẳng.')
]},
{qt:12,sub:'application',items:[
  m('$d\\parallel(P)$, mặt phẳng $(Q)$ chứa $d$ và cắt $(P)$ theo $a$. Khi đó:',['$a\\parallel d$','$a\\perp d$','$a=d$','$a$ chéo $d$'],'A','Giao tuyến của mặt phẳng phụ với $(P)$ song song đường $d$.'),
  m('Trong tứ diện $SABC$, $M,N$ là trung điểm $SA,SB$. Quan hệ đúng là:',['$MN\\parallel(ABC)$','$MN\\subset(ABC)$','$MN\\perp(ABC)$','$MN$ cắt $(ABC)$'],'A','$MN\\parallel AB$ và nằm ngoài mặt phẳng đáy.'),
  s('Trong tam giác $SAB$, $M,N$ chia $SA,SB$ theo cùng tỉ số từ $S$. Đường $MN$ song song với đường nào?','AB','Định lí Thalès đảo trong tam giác $SAB$.'),
  m('Nếu $d\\parallel(P)$ và $(Q)$ chứa $d$ nhưng $(Q)\\parallel(P)$ thì có giao tuyến để áp dụng tính chất không?',['Có','Không','Luôn giao tại $d$','Giao tại một điểm'],'B','Hai mặt phẳng song song không có giao tuyến.'),
  m('Trong hình chóp $S.ABCD$, đáy là hình bình hành. Vì $AB\\parallel CD$ và $CD\\subset(SCD)$, quan hệ đúng là:',['$AB\\parallel(SCD)$','$AB\\subset(SCD)$','$AB\\perp(SCD)$','$AB$ cắt $SC$'],'A','$AB$ nằm ngoài mặt phẳng $(SCD)$ và song song đường $CD$ thuộc mặt phẳng ấy.'),
  s('Trong tứ diện $ABCD$, $M,N$ là trung điểm $AB,AC$. Đường $MN$ song song với mặt phẳng $(BCD)$ nhờ song song với cạnh nào?','BC','$MN$ là đường trung bình tam giác $ABC$, nên song song $BC\\subset(BCD)$.')
]},
{qt:13,sub:'planes',items:[
  m('Để chứng minh $(P)\\parallel(Q)$, có thể chứng minh $(P)$ chứa:',['Một đường song song $(Q)$','Hai đường cắt nhau cùng song song $(Q)$','Hai điểm ngoài $(Q)$','Một đường vuông góc $(Q)$'],'B','Hai đường cắt nhau xác định hai phương của mặt phẳng.'),
  m('Nếu hai mặt phẳng song song bị cắt bởi mặt phẳng thứ ba thì hai giao tuyến:',['Cắt nhau','Song song','Vuông góc','Trùng trong mọi trường hợp'],'B','Đây là tính chất cơ bản của hai mặt phẳng song song.'),
  s('Hai mặt phẳng song song có bao nhiêu điểm chung?','0','Theo định nghĩa, hai mặt phẳng song song không có điểm chung.'),
  m('Chỉ chứng minh một đường trong $(P)$ song song một đường trong $(Q)$ có đủ để kết luận hai mặt phẳng song song không?',['Có','Không','Chỉ khi hai đường bằng nhau','Chỉ khi hai mặt phẳng có điểm chung'],'B','Một cặp phương song song chưa kiểm soát phương còn lại.'),
  m('Trong hình hộp $ABCD.A_1B_1C_1D_1$, hai mặt phẳng nào song song?',['$(ABCD)$ và $(A_1B_1C_1D_1)$','$(ABB_1A_1)$ và $(ABCD)$','$(ABCD)$ và $(BCC_1B_1)$','$(ABC)$ và $(ABB_1)$'],'A','Hai đáy của hình hộp nằm trên hai mặt phẳng song song.'),
  m('Nếu $(P)\\parallel(Q)$ và đường $d\\subset(P)$ thì quan hệ có thể kết luận là:',['$d\\parallel(Q)$','$d\\perp(Q)$','$d\\subset(Q)$','$d$ cắt $(Q)$'],'A','Mọi đường trong một mặt phẳng song song với mặt phẳng kia đều không có điểm chung với mặt phẳng kia.')
]},
{qt:13,sub:'thales',items:[
  m('Ba mặt phẳng song song chắn hai cát tuyến các đoạn tương ứng $AB,BC$ và $A_1B_1,B_1C_1$. Nếu $AB/BC=2/3$, $B_1C_1=9$ thì $A_1B_1$ bằng:',['$3$','$6$','$9$','$13{,}5$'],'B','$A_1B_1=9\\cdot2/3=6$.'),
  s('Trong lăng trụ, cạnh bên dài 7. Các cạnh bên còn lại dài bao nhiêu?','7','Các cạnh bên của lăng trụ song song và bằng nhau.'),
  m('Mặt bên của lăng trụ là:',['Tam giác','Hình bình hành','Hình tròn','Hình thang bất kỳ'],'B','Hai cạnh bên song song và bằng nhau.'),
  m('Khi dùng Thalès không gian, ghép nhầm các đoạn không tương ứng có cho tỉ lệ đúng không?',['Có','Không','Chỉ khi đoạn bằng nhau','Luôn bằng 1'],'B','Phải ghép các đoạn chắn giữa cùng hai mặt phẳng song song.'),
  s('Ba mặt phẳng song song chắn một cát tuyến các đoạn 4 và 6. Trên cát tuyến khác, đoạn thứ nhất dài 10. Tính đoạn thứ hai.','15','$4/6=10/x$, nên $x=15$.'),
  s('Hình hộp có một mặt đáy là hình bình hành diện tích 20. Mặt đáy đối diện có diện tích bao nhiêu?','20','Hai đáy của hình hộp là hai hình bình hành bằng nhau.')
]},
{qt:14,sub:'image',items:[
  m('Tính chất nào chắc chắn được giữ qua một phép chiếu song song?',['Độ dài đoạn','Số đo góc','Ba điểm thẳng hàng vẫn cho ba ảnh thẳng hàng','Đường tròn vẫn là đường tròn'],'C','Phép chiếu song song bảo toàn tính thẳng hàng.'),
  m('Hai đường thẳng song song không cùng phương chiếu và có ảnh không suy biến. Hai ảnh có thể:',['Luôn vuông góc','Song song hoặc trùng nhau','Luôn cắt nhau','Luôn là hai điểm'],'B','Phép chiếu giữ phương song song; trong một số vị trí hai ảnh có thể trùng.'),
  s('Ba điểm thẳng hàng $A,B,C$ với $AB/BC=2$. Nếu ảnh không suy biến, tỉ số $A_1B_1/B_1C_1$ bằng:','2','Phép chiếu song song bảo toàn tỉ số trên một đường.'),
  m('Phép chiếu song song có luôn bảo toàn số đo góc không?',['Có','Không','Chỉ góc nhọn','Chỉ góc vuông'],'B','Nói chung phép chiếu xiên làm biến dạng góc.'),
  m('Nếu $M$ nằm trên mặt phẳng chiếu $(P)$ thì ảnh của $M$ là:',['Một điểm khác','$M$','Không tồn tại','Vô số điểm'],'B','Đường chiếu qua $M$ cắt mặt phẳng ngay tại $M$.'),
  s('$A,B,C$ thẳng hàng và $AB=3BC$. Qua phép chiếu song song không suy biến, tính $A_1B_1/B_1C_1$.','3','Tỉ số các đoạn cùng nằm trên một đường được bảo toàn.')
]},
{qt:14,sub:'representation',items:[
  m('Trong hình biểu diễn không gian, đường tròn thường được biểu diễn bởi:',['Một đoạn thẳng','Một elip','Một tam giác','Luôn là đường tròn bằng nó'],'B','Phép chiếu song song thường biến đường tròn thành elip.'),
  m('Đoạn bị khuất trong hình biểu diễn thường được vẽ bằng:',['Nét liền đậm','Nét đứt','Không vẽ','Màu đỏ bắt buộc'],'B','Nét đứt là quy ước phổ biến cho cạnh khuất.'),
  s('Một hình bình hành qua phép chiếu song song không suy biến vẫn thuộc loại hình gì? Nhập “hình bình hành”.','hình bình hành','Hai cặp cạnh đối song song vẫn cho hai cặp ảnh song song.'),
  m('Có thể kết luận hai đoạn bằng nhau trên vật thật vẫn bằng nhau trên mọi hình biểu diễn song song không?',['Có','Không','Chỉ khi cùng màu','Chỉ khi là cạnh khuất'],'B','Phép chiếu song song không bảo toàn độ dài nói chung.'),
  m('Khi vẽ hình chóp, đỉnh chóp phải được biểu diễn:',['Luôn nằm trong đa giác đáy','Không trùng tùy ý với một đỉnh đáy và thể hiện các cạnh bên','Bị xóa','Luôn ở tâm đáy'],'B','Hình biểu diễn phải giữ quan hệ liên thuộc cơ bản của đỉnh và đáy.'),
  m('Tính chất nào không nên suy ra chỉ từ hình biểu diễn?',['Ba điểm thẳng hàng đã được kí hiệu','$AB\\parallel CD$ đã được giả thiết','Một góc trông giống $90^\\circ$ nên hai đường vuông góc','Một điểm được ghi thuộc cạnh'],'C','Hình vẽ phối cảnh không bảo toàn góc và không thay thế giả thiết.')
]}
];

const solutionData:{number:number;answer:string;reasoning:string}[]=[];
let number=733;
export const g11MathModule4ExpansionQuestions:CourseQuestion[]=banks.flatMap(bank=>bank.items.map((item,index)=>{
  const current=number++;
  solutionData.push({number:current,answer:item.answer,reasoning:item.reasoning});
  return {
    id:`math11-q${current}`,courseId:'grade11:math',moduleId:'math11-m4',
    lessonId:`math11-kntt-l${bank.qt}`,subjectId:'math',topicId:'math11-t04',
    questionTypeId:`math11-qt${bank.qt}`,subTypeId:`math11-qt${bank.qt}-st-${bank.sub}`,
    practiceRole:roles[index],representationType:reps[index],
    isMasteryHoldout:index===5,content:item.content,
    responseType:item.options?'single_choice':'short_answer',
    validatorType:item.options?'choice':'exact',options:item.options,
    acceptedAnswers:item.options?undefined:[item.answer,`$${item.answer}$`,item.answer.toLowerCase()],
    outcomeIds:[`out-math11-m4-0${bank.qt-9}`],correctAnswer:item.answer,
    difficulty:difficulties[index],sourceType:'manual',
    cognitiveLevel:index<1?'understanding':'application',
    estimatedSeconds:index<1?45:index<4?100:180
  } as CourseQuestion;
}));
export const g11MathModule4ExpansionSolutions:CourseSolution[]=solutionData.map(x=>({
  id:`math11-s${x.number}`,courseId:'grade11:math',moduleId:'math11-m4',questionId:`math11-q${x.number}`,
  recognition:'Xác định quan hệ liên thuộc, giao tuyến, vị trí tương đối hoặc tính chất song song cần dùng.',
  detailedSteps:[{order:1,title:'Lập luận hình học',explanation:x.reasoning},{order:2,title:'Kết luận',explanation:`Đáp án cần chọn hoặc nhập là ${x.answer}.`}],
  finalAnswer:x.answer,
  commonMistakes:['Suy luận theo hình vẽ, bỏ điều kiện đồng phẳng hoặc chỉ chứng minh một cặp phương.'],
  reviewSuggestions:['Ghi rõ mỗi điểm, đường thuộc mặt phẳng nào và định lí song song được áp dụng.']
}));
