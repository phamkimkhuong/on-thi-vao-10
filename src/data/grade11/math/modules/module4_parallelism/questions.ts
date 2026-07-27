import type { CourseQuestion } from '@/data/schema';
import type { PracticeRole, QuestionRepresentationType } from '@/types';

export type Module4QuestionSpec = {
  number: number; qt: number; subTypeId: string; role: PracticeRole;
  representation: QuestionRepresentationType; content: string;
  options: [string, string, string, string]; answer: 'A' | 'B' | 'C' | 'D';
  work: string; difficulty: CourseQuestion['difficulty']; holdout: boolean;
};

const q = (
  number: number, qt: number, subTypeId: string, role: PracticeRole,
  representation: QuestionRepresentationType, content: string,
  options: Module4QuestionSpec['options'], answer: Module4QuestionSpec['answer'],
  work: string, difficulty: CourseQuestion['difficulty'] = 'medium', holdout = false
): Module4QuestionSpec => ({ number, qt, subTypeId, role, representation, content, options, answer, work, difficulty, holdout });

export const g11MathModule4QuestionSpecs: Module4QuestionSpec[] = [
  q(109,10,'math11-qt10-st-incidence','guided','text','Dữ kiện nào xác định duy nhất một mặt phẳng?',['Ba điểm bất kỳ','Ba điểm không thẳng hàng','Hai điểm phân biệt','Một điểm và một đường bất kỳ'],'B','Ba điểm phải không thẳng hàng.','easy'),
  q(110,10,'math11-qt10-st-incidence','near_transfer','diagram','Nếu hai điểm phân biệt $A,B$ cùng thuộc mặt phẳng $(P)$ thì:',['$AB\\subset(P)$','$AB\\parallel(P)$','$AB\\perp(P)$','$AB$ chỉ có hai điểm thuộc $(P)$'],'A','Mặt phẳng chứa trọn đường thẳng qua hai điểm của nó.','easy'),
  q(111,10,'math11-qt10-st-incidence','representation_switch','diagram','Một hình tứ diện có bao nhiêu cạnh?',['$4$','$5$','$6$','$8$'],'C','Tứ diện có bốn đỉnh và sáu cặp đỉnh tạo sáu cạnh.','easy'),
  q(112,10,'math11-qt10-st-incidence','misconception_check','diagram','Trong hình chóp $S.ABCD$, mặt phẳng đáy là:',['$(SAB)$','$(SBC)$','$(SCD)$','$(ABCD)$'],'D','Bốn đỉnh $A,B,C,D$ nằm trên mặt phẳng đáy.','easy'),
  q(113,10,'math11-qt10-st-incidence','retention','text','Một đường thẳng $d$ và điểm $A\\notin d$ xác định:',['Không mặt phẳng nào','Một mặt phẳng duy nhất','Hai mặt phẳng','Vô số mặt phẳng'],'B','Một đường và một điểm ngoài đường xác định duy nhất một mặt phẳng.'),
  q(114,10,'math11-qt10-st-incidence','mastery_holdout','text','Hai mặt phẳng phân biệt cùng chứa hai điểm $A,B$ phân biệt. Giao tuyến của chúng là:',['Một điểm','$AB$','Một đoạn thẳng','Không xác định'],'B','Đường thẳng qua hai điểm chung là giao tuyến.','hard',true),
  q(115,10,'math11-qt10-st-intersection','guided','diagram','Trong hình chóp $S.ABCD$, $O=AC\\cap BD$. Giao tuyến của $(SAC)$ và $(SBD)$ là:',['$AC$','$BD$','$SO$','$SD$'],'C','$S$ và $O$ là hai điểm chung của hai mặt phẳng.'),
  q(116,10,'math11-qt10-st-intersection','near_transfer','text','Đường thẳng $d$ có hai điểm phân biệt cùng thuộc $(P)$. Khi đó:',['$d\\subset(P)$','$d\\parallel(P)$','$d$ chỉ cắt $(P)$ tại hai điểm','$d\\perp(P)$'],'A','Một mặt phẳng chứa hai điểm của đường thì chứa cả đường.','easy'),
  q(117,10,'math11-qt10-st-intersection','representation_switch','diagram','Với tứ diện $ABCD$, giao tuyến của $(ABC)$ và $(ABD)$ là:',['$AC$','$AB$','$AD$','$CD$'],'B','$A,B$ là hai điểm chung phân biệt.','easy'),
  q(118,10,'math11-qt10-st-intersection','misconception_check','diagram','Trong hình chóp $S.ABCD$, giao điểm của $SA$ với mặt phẳng đáy là:',['$A$','$S$','$B$','Không có'],'A','$A$ thuộc cả cạnh $SA$ và mặt phẳng đáy.','easy'),
  q(119,10,'math11-qt10-st-intersection','far_transfer','diagram','Trong tứ diện $ABCD$, $(ABC)\\cap(BCD)$ bằng:',['$AB$','$AC$','$BC$','$BD$'],'C','$B,C$ là hai điểm chung.'),
  q(120,10,'math11-qt10-st-intersection','mastery_holdout','diagram','Trong hình chóp $S.ABCD$, $M\\in AB$, $N\\in CD$ và $M\\ne N$. Giao tuyến của $(SMN)$ với $(ABCD)$ là:',['$SM$','$SN$','$SA$','$MN$'],'D','$M,N$ cùng thuộc mặt phẳng $SMN$ và mặt phẳng đáy.','hard',true),

  q(121,11,'math11-qt11-st-position','guided','diagram','Trong tứ diện $ABCD$, hai cạnh đối $AB$ và $CD$ có vị trí:',['Trùng nhau','Cắt nhau','Song song','Chéo nhau'],'D','Hai cạnh đối của tứ diện không đồng phẳng.','easy'),
  q(122,11,'math11-qt11-st-position','near_transfer','diagram','Hai đường $AB$ và $BC$ có vị trí:',['Song song','Cắt nhau tại $B$','Chéo nhau','Trùng nhau'],'B','Hai đường có điểm chung $B$.','easy'),
  q(123,11,'math11-qt11-st-position','representation_switch','text','Hai đường thẳng có vô số điểm chung thì:',['Trùng nhau','Song song','Cắt nhau','Chéo nhau'],'A','Hai đường phân biệt có nhiều nhất một điểm chung.','easy'),
  q(124,11,'math11-qt11-st-position','retention','diagram','Trong hình hộp $ABCD.A\\prime B\\prime C\\prime D\\prime$, $AB$ và $DC$ là:',['Cắt nhau','Chéo nhau','Song song','Vuông góc'],'C','Hai cạnh đối của hình bình hành đáy song song.','easy'),
  q(125,11,'math11-qt11-st-position','misconception_check','text','Dấu hiệu quyết định hai đường thẳng chéo nhau là:',['Không bằng nhau','Không có điểm chung','Không đồng phẳng','Không song song'],'C','Hai đường chéo nhau là hai đường không đồng phẳng.'),
  q(126,11,'math11-qt11-st-position','mastery_holdout','text','Hai đường thẳng phân biệt cùng nằm trong một mặt phẳng và không có điểm chung thì:',['Song song','Chéo nhau','Cắt nhau','Vuông góc'],'A','Trong một mặt phẳng, hai đường phân biệt không cắt nhau thì song song.','hard',true),
  q(127,11,'math11-qt11-st-proof','guided','diagram','Trong tam giác $SAB$, $M,N$ là trung điểm $SA,SB$. Khi đó:',['$MN\\perp AB$','$MN\\parallel AB$','$MN$ cắt $AB$','$MN=AB$'],'B','Đường trung bình của tam giác song song với cạnh còn lại.','easy'),
  q(128,11,'math11-qt11-st-proof','near_transfer','diagram','Trong hình hộp, đường nào song song với $AB$?',['$AA\\prime$','$BC$','$BD$','$C\\prime D\\prime$'],'D','$AB\\parallel CD\\parallel C\\prime D\\prime$.'),
  q(129,11,'math11-qt11-st-proof','representation_switch','text','Nếu hai đường phân biệt $a,b$ cùng song song với $c$ thì:',['$a\\parallel b$','$a$ cắt $b$','$a,b$ chéo nhau','$a=b$'],'A','Áp dụng tính chất bắc cầu của quan hệ song song.','easy'),
  q(130,11,'math11-qt11-st-proof','near_transfer','diagram','Trong tam giác $ABC$, $M,N$ là trung điểm $AB,AC$. Khẳng định đúng là:',['$MN\\parallel AB$','$MN\\parallel AC$','$MN\\parallel BC$','$MN\\perp BC$'],'C','Đường trung bình nối hai trung điểm song song với cạnh thứ ba.'),
  q(131,11,'math11-qt11-st-proof','misconception_check','text','Để kết luận hai đường thẳng song song, ngoài không có điểm chung còn cần:',['Bằng nhau','Đồng phẳng','Cùng độ dài','Cùng cắt một đường'],'B','Song song yêu cầu hai đường đồng phẳng.'),
  q(132,11,'math11-qt11-st-proof','mastery_holdout','diagram','Trong lăng trụ $ABC.A\\prime B\\prime C\\prime$, cặp đường nào song song?',['$AB$ và $BB\\prime$','$AC$ và $BC$','$AA\\prime$ và $AB$','$AA\\prime$ và $CC\\prime$'],'D','Các cạnh bên của lăng trụ song song nhau.','hard',true),

  q(133,12,'math11-qt12-st-condition','guided','text','Nếu $a\\subset(P)$, $d\\parallel a$ và $d\\not\\subset(P)$ thì:',['$d\\perp(P)$','$d\\parallel(P)$','$d\\subset(P)$','$d$ cắt $(P)$'],'B','Đây là điều kiện cơ bản đường song song mặt phẳng.','easy'),
  q(134,12,'math11-qt12-st-condition','near_transfer','diagram','Trong hình chóp $S.ABC$, $M,N$ là trung điểm $SA,SB$. Đường $MN$ song song với:',['$(SAB)$','$(SAC)$','$(ABC)$','$(SBC)$'],'C','$MN\\parallel AB$ với $AB$ nằm trong mặt phẳng đáy.'),
  q(135,12,'math11-qt12-st-condition','representation_switch','text','Nếu $d\\parallel(P)$ thì số điểm chung của $d$ và $(P)$ là:',['$0$','$1$','$2$','Vô số'],'A','Theo định nghĩa, đường song song mặt phẳng không có điểm chung.','easy'),
  q(136,12,'math11-qt12-st-condition','far_transfer','diagram','Nếu $d\\parallel(P)$, $(Q)$ chứa $d$ và $(Q)\\cap(P)=a$ thì:',['$a$ cắt $d$','$a\\perp d$','$a=d$','$a\\parallel d$'],'D','Giao tuyến trong mặt phẳng chứa $d$ phải song song với $d$.'),
  q(137,12,'math11-qt12-st-condition','misconception_check','diagram','Trong hình hộp, $AB$ có quan hệ gì với mặt phẳng $(CDD\\prime C\\prime)$?',['Nằm trong','Song song','Cắt tại $D$','Vuông góc'],'B','$AB\\parallel CD$ và $CD$ nằm trong mặt phẳng đã cho.'),
  q(138,12,'math11-qt12-st-condition','mastery_holdout','diagram','Trong tứ diện $ABCD$, $M,N$ là trung điểm $AB,AC$. Khi đó $MN$ song song với mặt phẳng:',['$(ABC)$','$(ABD)$','$(BCD)$','$(ACD)$'],'C','$MN\\parallel BC$ và $BC\\subset(BCD)$; $MN$ không nằm trong $(BCD)$.','hard',true),
  q(139,12,'math11-qt12-st-application','guided','diagram','Muốn chứng minh $d\\parallel(P)$, cách trực tiếp thường dùng là tìm:',['Điểm $A\\in d\\cap(P)$','Đường $a\\subset(P)$ với $d\\parallel a$','Đường vuông góc $d$','Mặt phẳng chứa $d$'],'B','Một đường chuẩn nằm trong mặt phẳng giúp áp dụng điều kiện song song.','easy'),
  q(140,12,'math11-qt12-st-application','near_transfer','diagram','Trong hình chóp $S.ABC$, $M,N$ là trung điểm $SA,SC$. $MN$ song song với mặt phẳng nào?',['$(ABC)$','$(SAB)$','$(SAC)$','Không mặt phẳng nào'],'A','$MN\\parallel AC$ và $AC$ nằm trong đáy.'),
  q(141,12,'math11-qt12-st-application','representation_switch','text','Khẳng định nào chắc chắn đúng?',['$d\\parallel a$, $a\\subset(P)$ thì luôn $d\\parallel(P)$','$d\\parallel(P)$ thì $d$ không có điểm chung với $(P)$','$d$ không cắt $a\\subset(P)$ thì $d\\parallel(P)$','$d\\parallel(P)$ thì mọi đường trong $(P)$ song song $d$'],'B','Đây là định nghĩa, các phương án khác thiếu điều kiện.'),
  q(142,12,'math11-qt12-st-application','retention','diagram','Nếu $(Q)$ chứa $d\\parallel(P)$ và cắt $(P)$ theo $a$, cặp song song dùng để tìm giao tuyến là:',['$a\\parallel d$','$a\\parallel(P)$','$d\\parallel(Q)$','$a\\parallel(Q)$'],'A','Tính chất mặt phẳng phụ cho $a\\parallel d$.'),
  q(143,12,'math11-qt12-st-application','misconception_check','text','Sai lầm trong suy luận “$d\\parallel a$, suy ra $d\\parallel(P)$” là chưa biết:',['Độ dài $d$','$a\\subset(P)$ và $d\\not\\subset(P)$','Màu của hình','Góc giữa $d,a$'],'B','Hai điều kiện liên thuộc này là bắt buộc.'),
  q(144,12,'math11-qt12-st-application','mastery_holdout','diagram','Trong hình chóp $S.ABCD$ có đáy là hình bình hành. Đường $SA$ song song với mặt phẳng nào sau đây?',['$(ABCD)$','$(SAB)$','$(SAD)$','Không mặt phẳng nào trong ba mặt phẳng trên'],'D','$SA$ cắt đáy tại $A$ và nằm trong hai mặt bên nên không song song ba mặt phẳng đã nêu.','hard',true),

  q(145,13,'math11-qt13-st-planes','guided','text','Nếu $(P)$ chứa hai đường cắt nhau cùng song song với $(Q)$ thì:',['$(P)$ cắt $(Q)$','$(P)\\parallel(Q)$','$(P)=(Q)$','Chưa thể kết luận'],'B','Hai phương cắt nhau xác định phương của mặt phẳng.','easy'),
  q(146,13,'math11-qt13-st-planes','near_transfer','diagram','Trong hình hộp, hai mặt phẳng đáy có quan hệ:',['Song song','Cắt nhau','Trùng nhau','Vuông góc'],'A','Hình hộp là lăng trụ nên hai đáy song song.','easy'),
  q(147,13,'math11-qt13-st-planes','representation_switch','diagram','Nếu $(P)\\parallel(Q)$ và $(R)$ cắt chúng theo $a,b$ thì:',['$a$ cắt $b$','$a=b$','$a\\parallel b$','$a\\perp b$'],'C','Một mặt phẳng cắt hai mặt phẳng song song theo hai giao tuyến song song.'),
  q(148,13,'math11-qt13-st-planes','retention','text','Qua một điểm nằm ngoài mặt phẳng $(P)$ có bao nhiêu mặt phẳng song song với $(P)$?',['$0$','$2$','Vô số','$1$'],'D','Qua điểm ngoài một mặt phẳng có duy nhất mặt phẳng song song với nó.','easy'),
  q(149,13,'math11-qt13-st-planes','misconception_check','diagram','Hai đáy của một lăng trụ là:',['Hai tam giác bất kỳ','Hai đa giác bằng nhau trên hai mặt phẳng song song','Hai hình vuông','Hai đa giác đồng dạng bất kỳ'],'B','Định nghĩa lăng trụ cho hai đáy bằng nhau và song song.'),
  q(150,13,'math11-qt13-st-planes','mastery_holdout','text','Hai mặt phẳng phân biệt cùng song song với mặt phẳng thứ ba thì:',['Song song nhau','Cắt nhau','Vuông góc nhau','Có thể trùng nhau'],'A','Các mặt phẳng phân biệt có cùng phương thì song song.','hard',true),
  q(151,13,'math11-qt13-st-thales','guided','equation','Ba mặt phẳng song song chắn hai cát tuyến: $AB/BC=2/3$, $B\\prime C\\prime=9$. $A\\prime B\\prime$ bằng:',['$4$','$5$','$6$','$8$'],'C','$A\\prime B\\prime=9\\cdot2/3=6$.'),
  q(152,13,'math11-qt13-st-thales','near_transfer','equation','Theo Thalès không gian, $AB=4$, $BC=6$, $A\\prime B\\prime=8$. $B\\prime C\\prime$ bằng:',['$10$','$11$','$9$','$12$'],'D','$4/6=8/B\\prime C\\prime$, suy ra $B\\prime C\\prime=12$.'),
  q(153,13,'math11-qt13-st-thales','representation_switch','diagram','Các cạnh bên của lăng trụ có tính chất:',['Song song và bằng nhau','Cắt nhau tại một điểm','Vuông góc với đáy','Đôi một chéo nhau'],'A','Các cạnh bên là các đoạn song song và bằng nhau.','easy'),
  q(154,13,'math11-qt13-st-thales','retention','diagram','Trong hình hộp, các cặp mặt đối diện:',['Cắt nhau','Song song','Vuông góc','Không xác định'],'B','Các mặt đối diện của hình hộp song song.','easy'),
  q(155,13,'math11-qt13-st-thales','misconception_check','equation','Nếu $AB/BC=3/5$ thì tỉ số tương ứng đúng là:',['$A\\prime B\\prime/B\\prime C\\prime=3/5$','$A\\prime B\\prime/B\\prime C\\prime=5/3$','$A\\prime C\\prime/B\\prime C\\prime=3/5$','$A\\prime B\\prime/A\\prime C\\prime=3/5$'],'A','Phải ghép đúng hai đoạn tương ứng trên hai cát tuyến.'),
  q(156,13,'math11-qt13-st-thales','mastery_holdout','equation','Ba mặt phẳng song song cho $AB=6$, $BC=9$, $A\\prime B\\prime=10$. Khi đó $B\\prime C\\prime$ bằng:',['$12$','$14$','$15$','$18$'],'C','$6/9=10/B\\prime C\\prime$, nên $B\\prime C\\prime=15$.','hard',true),

  q(157,14,'math11-qt14-st-image','guided','diagram','Ảnh $M\\prime$ của $M$ qua phép chiếu song song lên $(P)$ là:',['Điểm bất kỳ trên $(P)$','Giao của $(P)$ với đường qua $M$ song song phương chiếu','Hình chiếu vuông góc bắt buộc','Trung điểm của $M$ và $(P)$'],'B','Dựng đường chiếu qua $M$ theo phương đã chọn.','easy'),
  q(158,14,'math11-qt14-st-image','near_transfer','text','Phép chiếu song song luôn bảo toàn:',['Độ dài','Số đo góc','Tính thẳng hàng','Diện tích'],'C','Ảnh của ba điểm thẳng hàng vẫn thẳng hàng.','easy'),
  q(159,14,'math11-qt14-st-image','misconception_check','text','Tính chất nào không được bảo toàn nói chung?',['Thẳng hàng','Song song','Tỉ số trên một đường','Số đo góc'],'D','Phép chiếu xiên có thể làm thay đổi góc.'),
  q(160,14,'math11-qt14-st-image','representation_switch','diagram','Hình chiếu song song không suy biến của một đường tròn thường là:',['Elip','Tam giác','Đoạn thẳng bắt buộc','Hình vuông'],'A','Đường tròn thường biểu diễn bởi một elip.','easy'),
  q(161,14,'math11-qt14-st-image','retention','text','Ảnh của hai đường thẳng song song qua phép chiếu song song là:',['Luôn cắt nhau','Song song hoặc trùng nhau','Luôn vuông góc','Hai đường chéo nhau'],'B','Phép chiếu bảo toàn phương song song, có thể làm hai ảnh trùng nhau.'),
  q(162,14,'math11-qt14-st-image','mastery_holdout','equation','Nếu $B$ là trung điểm $AC$, ảnh không suy biến là $A\\prime,B\\prime,C\\prime$ thì:',['$A\\prime B\\prime=2B\\prime C\\prime$','$B\\prime=C\\prime$','$A\\prime B\\prime=B\\prime C\\prime$','$A\\prime C\\prime=B\\prime C\\prime$'],'C','Phép chiếu bảo toàn tỉ số trên cùng một đường.','hard',true),
  q(163,14,'math11-qt14-st-representation','guided','diagram','Trong hình biểu diễn của hình hộp, các cạnh song song trong không gian cần được vẽ:',['Song song tương ứng','Vuông góc','Bằng nhau tuyệt đối','Cắt nhau'],'A','Hình biểu diễn phải giữ quan hệ song song.','easy'),
  q(164,14,'math11-qt14-st-representation','near_transfer','diagram','Theo quy ước thông dụng, cạnh bị che khuất được vẽ bằng:',['Nét liền đậm','Nét đứt','Nét đôi','Không vẽ'],'B','Nét đứt giúp thể hiện phần khuất.','easy'),
  q(165,14,'math11-qt14-st-representation','representation_switch','text','Hình biểu diễn hợp lí của đường tròn nằm xiên so với mặt phẳng hình vẽ là:',['Elip','Hình vuông','Tam giác','Một điểm'],'A','Phép chiếu song song của đường tròn thường là elip.'),
  q(166,14,'math11-qt14-st-representation','far_transfer','equation','Trên cùng một đường, $AB/BC=2$. Với ảnh không suy biến, tỉ số $A\\prime B\\prime/B\\prime C\\prime$ là:',['$1/2$','$1$','$3$','$2$'],'D','Tỉ số các đoạn cùng đường được bảo toàn.'),
  q(167,14,'math11-qt14-st-representation','misconception_check','text','Bóng nắng của một khung cửa trên sàn gần với mô hình nào?',['Phép vị tự bắt buộc','Phép chiếu song song','Phép đối xứng tâm','Phép quay'],'B','Các tia nắng được coi gần song song nên tạo phép chiếu song song.'),
  q(168,14,'math11-qt14-st-representation','mastery_holdout','diagram','Hình chiếu song song không suy biến của một hình vuông nói chung là:',['Luôn hình vuông','Luôn hình chữ nhật','Hình thang','Hình bình hành'],'D','Phép chiếu giữ hai cặp cạnh song song nhưng không giữ góc vuông hay độ dài.','hard',true)
];

export const g11MathModule4Questions: CourseQuestion[] = g11MathModule4QuestionSpecs.map(spec => {
  const suffix = String(spec.number).padStart(3, '0');
  const lesson = spec.qt;
  const outcomeNumber = spec.qt - 9;
  return {
    id: `math11-q${suffix}`, courseId: 'grade11:math', moduleId: 'math11-m4',
    lessonId: `math11-kntt-l${lesson}`, subjectId: 'math', topicId: 'math11-t04',
    questionTypeId: `math11-qt${spec.qt}`, subTypeId: spec.subTypeId,
    practiceRole: spec.role, representationType: spec.representation,
    isMasteryHoldout: spec.holdout, content: spec.content,
    responseType: 'single_choice', validatorType: 'choice',
    outcomeIds: [`out-math11-m4-0${outcomeNumber}`], options: spec.options,
    correctAnswer: spec.answer, difficulty: spec.difficulty, sourceType: 'manual'
  };
});
