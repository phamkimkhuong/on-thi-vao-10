import type {CourseQuestion} from '@/data/schema';import type {PracticeRole,QuestionRepresentationType} from '@/types';
type R=[string,[string,string,string,string],'A'|'B'|'C'|'D'];
const rows:R[]=[
['Biến cố $A\\cup B$ xảy ra khi:',['Chỉ A','Chỉ B','Ít nhất một trong A, B','Cả hai không xảy ra'],'C'],
['Biến cố $A\\cap B$ xảy ra khi:',['Ít nhất một','Cả A và B','Chỉ A','Chỉ B'],'B'],
['Nếu $P(A)=0{,}3$ thì $P(\\overline A)$ bằng:',['$0{,}3$','$0{,}4$','$0{,}5$','$0{,}7$'],'D'],
['Gieo xúc xắc, biến cố ra số chẵn là:',['$\\{1,3,5\\}$','$\\{2,4,6\\}$','$\\{2,3,5\\}$','$\\{4,5,6\\}$'],'B'],
['Gieo xúc xắc, $A$: chẵn, $B$: lớn hơn 3. $A\\cap B$ là:',['$\\{2,4\\}$','$\\{4,5\\}$','$\\{4,6\\}$','$\\{2,6\\}$'],'C'],
['Gieo xúc xắc, biến cố “chẵn hoặc lớn hơn 4” là:',['$\\{2,4,5,6\\}$','$\\{2,4,6\\}$','$\\{5,6\\}$','$\\{1,3,5\\}$'],'A'],
['Hai biến cố xung khắc có giao bằng:',['Không gian mẫu','$\\varnothing$','$A\\cup B$','$\\overline A$'],'B'],
['Hai biến cố độc lập thỏa:',['$P(A\\cup B)=0$','$P(A)=P(B)$','$P(A\\cap B)=P(A)P(B)$','$A\\cap B=\\varnothing$'],'C'],
['Hai biến cố xung khắc có xác suất dương thì:',['Luôn độc lập','Bằng nhau','Đối nhau','Không độc lập'],'D'],
['Tung đồng xu hai lần. “Lần đầu ngửa” và “lần hai ngửa” là:',['Độc lập','Xung khắc','Biến cố đối','Không thể xảy ra cùng'],'A'],
['Gieo xúc xắc. Biến cố “chẵn” và “lẻ” là:',['Độc lập','Xung khắc','Bằng nhau','Cùng xảy ra'],'B'],
['$P(A)=0{,}5$, $P(B)=0{,}4$, $P(A\\cap B)=0{,}2$. A, B:',['Xung khắc','Đối nhau','Độc lập','Không xác định'],'C'],

['$P(A)=0{,}5$, $P(B)=0{,}4$, $P(A\\cap B)=0{,}2$. $P(A\\cup B)$ là:',['$0{,}3$','$0{,}5$','$0{,}7$','$0{,}9$'],'C'],
['A, B xung khắc, $P(A)=0{,}3$, $P(B)=0{,}4$. $P(A\\cup B)$ là:',['$0{,}1$','$0{,}7$','$0{,}12$','$1$'],'B'],
['Nếu $P(A)=0{,}6$ thì $P(\\overline A)$ là:',['$0{,}4$','$0{,}6$','$1{,}6$','$0$'],'A'],
['$P(A\\cup B)=0{,}8$, $P(A)=0{,}5$, $P(B)=0{,}6$. $P(A\\cap B)$ là:',['$0{,}1$','$0{,}2$','$0{,}4$','$0{,}3$'],'D'],
['Tung đồng xu hai lần. Xác suất có ít nhất một lần ngửa:',['$1/4$','$1/2$','$3/4$','$1$'],'C'],
['$P(A\\cup B)=0{,}9$, $P(A)=0{,}7$, $P(B)=0{,}5$. $P(A\\cap B)$ là:',['$0{,}1$','$0{,}3$','$0{,}5$','$0{,}7$'],'B'],
['Hộp có 3 bi đỏ, 7 bi xanh. Lấy một bi, xác suất đỏ:',['$3/10$','$7/10$','$1/3$','$3/7$'],'A'],
['Rút một lá từ bộ 52 lá. Xác suất rút vua hoặc hậu:',['$1/13$','$4/13$','$1/4$','$2/13$'],'D'],
['Gieo xúc xắc. Xác suất ra số chẵn hoặc bội của 3:',['$1/2$','$2/3$','$1/3$','$5/6$'],'B'],
['Hai phép thử độc lập, mỗi lần thành công xác suất $0{,}2$. Xác suất ít nhất một thành công:',['$0{,}2$','$0{,}32$','$0{,}36$','$0{,}4$'],'C'],
['Số cách chọn 2 người từ 5 người là:',['$10$','$20$','$5$','$25$'],'A'],
['Chọn ngẫu nhiên 2 người từ 5 người, trong đó có 2 nữ. Xác suất chọn cả hai nữ:',['$1/5$','$2/5$','$1/2$','$1/10$'],'D'],

['A, B độc lập, $P(A)=0{,}5$, $P(B)=0{,}4$. $P(A\\cap B)$ là:',['$0{,}1$','$0{,}2$','$0{,}4$','$0{,}9$'],'B'],
['Tung đồng xu cân đối hai lần. Xác suất cả hai lần ngửa:',['$1/2$','$1/3$','$1/4$','$1/8$'],'C'],
['Gieo hai xúc xắc. Xác suất cả hai cùng ra 6:',['$1/6$','$1/12$','$1/18$','$1/36$'],'D'],
['Hai biến cố độc lập có xác suất $0{,}8$ và $0{,}8$. Xác suất cả hai xảy ra:',['$0{,}64$','$0{,}8$','$1{,}6$','$0{,}16$'],'A'],
['A, B độc lập, $P(A)=0{,}6$, $P(B)=0{,}5$. Xác suất giao:',['$0{,}1$','$0{,}3$','$0{,}5$','$1{,}1$'],'B'],
['Máy 1 hoạt động xác suất $0{,}9$, máy 2 là $0{,}8$, độc lập. Cả hai hoạt động:',['$0{,}17$','$0{,}7$','$0{,}72$','$0{,}9$'],'C'],
['Một nhánh cây có xác suất $0{,}7$ rồi $0{,}8$. Xác suất đường đi:',['$0{,}56$','$0{,}75$','$1{,}5$','$0{,}1$'],'A'],
['Tung đồng xu rồi xúc xắc. Xác suất ngửa và xúc xắc chẵn:',['$1/4$','$1/3$','$1/2$','$3/4$'],'A'],
['Hộp có 3 đỏ, 2 xanh; lấy có hoàn lại hai lần. Xác suất cả hai đỏ:',['$3/25$','$6/25$','$3/5$','$9/25$'],'D'],
['Hộp có 3 đỏ, 2 xanh; lấy không hoàn lại hai lần. Xác suất cả hai đỏ:',['$1/5$','$3/10$','$2/5$','$9/25$'],'B'],
['Tung đồng xu hai lần. Xác suất đúng một lần ngửa:',['$1/4$','$1/3$','$1/2$','$3/4$'],'C'],
['Hai sản phẩm độc lập, mỗi sản phẩm lỗi xác suất $0{,}1$. Xác suất ít nhất một sản phẩm lỗi:',['$0{,}19$','$0{,}1$','$0{,}2$','$0{,}01$'],'A']
];
const roles:PracticeRole[]=['guided','near_transfer','representation_switch','misconception_check','retention','mastery_holdout','guided','near_transfer','far_transfer','misconception_check','retention','mastery_holdout'];
export const g11MathModule8Questions:CourseQuestion[]=rows.map((x,i)=>{const n=325+i,qt=28+Math.floor(i/12),j=i%12,sub=j<6?['events','formula','independent'][qt-28]:['independent','counting','tree'][qt-28];return{id:`math11-q${n}`,courseId:'grade11:math',moduleId:'math11-m8',lessonId:`math11-kntt-l${qt}`,subjectId:'math',topicId:'math11-t08',questionTypeId:`math11-qt${qt}`,subTypeId:`math11-qt${qt}-st-${sub}`,practiceRole:roles[j],representationType:(j%3===0?(qt===28?'text':'equation'):(qt===29?'text':'diagram')) as QuestionRepresentationType,isMasteryHoldout:j===5||j===11,content:x[0],responseType:'single_choice',validatorType:'choice',outcomeIds:[`out-math11-m8-0${qt-27}`],options:x[1],correctAnswer:x[2],difficulty:j===5||j===11?'hard':j<3?'easy':'medium',sourceType:'manual'};});
