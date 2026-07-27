import type {TheoryBlock,TheoryFormula} from '@/data/schema';
const tb=(n:number,title:string,content:string[],formulas:TheoryFormula[],keys:string[],problem:string,steps:string[],answer:string,cp:string,opts:[string,string,string,string],ca:'A'|'B'|'C'|'D',exp:string):TheoryBlock=>({id:`tb-math11-m7-0${n}`,courseId:'grade11:math',moduleId:'math11-m7',lessonIds:[`math11-kntt-l${21+n}`],outcomeIds:[`out-math11-m7-0${n}`],questionTypeIds:[`math11-qt${21+n}`],sourceIds:['math11-source-official-program','math11-source-kntt-textbook-2'],title,objectives:[`Nhận biết và giải thích ${title.toLowerCase()}.`,'Vận dụng trong tính toán và mô hình không gian đơn giản.'],content:content.join('\n\n'),formulas,keyPoints:keys,workedExamples:[{id:`ex-math11-m7-0${n}`,title:'Ví dụ định hướng',problem,steps,answer}],checkpoints:[{id:`cp-math11-m7-0${n}`,question:cp,options:opts,correctAnswer:ca,explanation:exp}],orderIndex:21+n,reviewStatus:'source_checked'});
const angleFormula:TheoryFormula={id:'form-math11-m7-01-cos',label:'Góc giữa hai đường',expression:'\\cos\\theta=\\frac{|\\vec u\\cdot\\vec v|}{|\\vec u||\\vec v|}',variables:[{symbol:'\\vec u,\\vec v',meaning:'Vectơ chỉ phương của hai đường'}],conditions:['$0^\\circ\\le\\theta\\le90^\\circ$']};
export const math11Module7Theory:TheoryBlock[]=[
tb(1,'Góc giữa hai đường thẳng',[
'Góc giữa hai đường trong không gian là góc giữa hai đường thẳng lần lượt song song với chúng và cùng đi qua một điểm. Góc được chọn trong khoảng từ $0^\\circ$ đến $90^\\circ$.',
'Hai đường vuông góc khi góc giữa chúng bằng $90^\\circ$; chúng có thể cắt nhau hoặc chéo nhau. Có thể chứng minh bằng tích vô hướng, định lí Pythagore hoặc chuyển sang các đường song song cắt nhau.'
],[angleFormula],['Vuông góc không bắt buộc cắt nhau.','Dùng các đường song song qua cùng điểm để xác định góc.','Tích vô hướng bằng 0 cho góc vuông.'],'Trong lập phương, tính góc giữa hai cạnh kề $AB,AD$.',['Hai cạnh cùng nằm trong đáy vuông.','$AB\\perp AD$.'],'Góc bằng $90^\\circ$.','Hai đường chéo nhau có thể vuông góc không?',['Có','Không','Chỉ khi bằng nhau','Chỉ trong mặt phẳng'],'A','Góc được xác định qua các đường song song cùng đi qua một điểm.'),
tb(2,'Đường thẳng vuông góc với mặt phẳng',[
'Đường $d$ vuông góc với mặt phẳng $(P)$ nếu nó vuông góc với mọi đường trong $(P)$. Điều kiện thực hành: $d$ vuông góc với hai đường cắt nhau nằm trong $(P)$.',
'Nếu $d\\perp(P)$ thì mọi đường song song với $d$ cũng vuông góc $(P)$; mọi mặt phẳng chứa $d$ vuông góc $(P)$. Định lí ba đường vuông góc liên hệ một đường trong mặt phẳng với đường xiên và hình chiếu của đường xiên.'
],[{id:'form-math11-m7-02-condition',label:'Điều kiện đường–mặt vuông góc',expression:'d\\perp a,\\ d\\perp b,\\ a,b\\subset(P),\\ a\\cap b\\ne\\varnothing\\Rightarrow d\\perp(P)',variables:[{symbol:'d,a,b',meaning:'Các đường thẳng'}],conditions:['$a,b$ cắt nhau trong $(P)$']}],['Cần hai đường cắt nhau trong mặt phẳng.','Đường vuông góc mặt phẳng vuông góc mọi đường qua chân.','Định lí ba đường vuông góc dùng hình chiếu.'],'Trong hình chóp, $SA\\perp AB$ và $SA\\perp AC$, $AB,AC$ cắt nhau. Kết luận?',['$AB,AC\\subset(ABC)$.','$SA\\perp(ABC)$.'],'$SA\\perp(ABC)$.','Vuông góc với mấy đường cắt nhau trong mặt phẳng là đủ?',['Một','Hai','Ba','Vô số bắt buộc'],'B','Hai đường cắt nhau xác định các phương của mặt phẳng.'),
tb(3,'Phép chiếu vuông góc và góc đường–mặt',[
'Hình chiếu vuông góc của điểm $M$ lên $(P)$ là chân $H$ của đường vuông góc từ $M$ đến $(P)$. Hình chiếu của đường xiên $AB$ là đường qua hình chiếu hai điểm, nếu không suy biến.',
'Góc giữa đường $d$ và mặt phẳng $(P)$ là góc giữa $d$ và hình chiếu vuông góc của nó trên $(P)$, thuộc $[0^\\circ,90^\\circ]$. Góc phẳng nhị diện được dựng trong mặt phẳng vuông góc cạnh nhị diện.'
],[{id:'form-math11-m7-03-angle',label:'Góc đường–mặt trong tam giác vuông',expression:'\\sin\\alpha=\\frac{AH}{AM}',variables:[{symbol:'AH',meaning:'Thành phần vuông góc mặt phẳng'},{symbol:'AM',meaning:'Đoạn xiên'}],conditions:['$H$ là hình chiếu của $M$ trên mặt phẳng']}],['Góc đường–mặt dùng hình chiếu của đường.','Đường vuông góc mặt phẳng tạo góc $90^\\circ$.','Góc nhị diện cần mặt phẳng vuông góc cạnh.'],'$AH\\perp(P)$, $HM$ là hình chiếu của $AM$. Góc giữa $AM$ và $(P)$ là?',['Dùng định nghĩa góc đường–mặt.','Góc cần tìm là $\\widehat{AMH}$.'],'$\\widehat{AMH}$.','Đường vuông góc mặt phẳng tạo với mặt phẳng góc:',['$0^\\circ$','$30^\\circ$','$60^\\circ$','$90^\\circ$'],'D','Hình chiếu suy biến thành một điểm nên góc bằng $90^\\circ$.'),
tb(4,'Hai mặt phẳng vuông góc',[
'Hai mặt phẳng vuông góc khi góc giữa chúng bằng $90^\\circ$. Điều kiện thường dùng: một mặt phẳng chứa một đường thẳng vuông góc với mặt phẳng kia.',
'Nếu $(P)\\perp(Q)$ theo giao tuyến $a$ và một đường trong $(P)$ vuông góc $a$, thì đường đó vuông góc $(Q)$. Lăng trụ đứng có cạnh bên vuông góc đáy; hình hộp chữ nhật và lập phương là các trường hợp đặc biệt.'
],[{id:'form-math11-m7-04-condition',label:'Điều kiện hai mặt phẳng vuông góc',expression:'d\\subset(P),\\ d\\perp(Q)\\Rightarrow(P)\\perp(Q)',variables:[{symbol:'d',meaning:'Đường nằm trong mặt phẳng thứ nhất'}],conditions:['$d\\subset(P)$']}],['Tìm một đường trong mặt phẳng này vuông góc mặt phẳng kia.','Mặt bên lăng trụ đứng vuông góc đáy.','Hai mặt phẳng chỉ có một cặp đường vuông góc chưa đủ.'],'Nếu $SA\\perp(ABC)$ và $SA\\subset(SAB)$ thì:',['Dùng điều kiện hai mặt phẳng vuông góc.','$(SAB)\\perp(ABC)$.'],'Hai mặt phẳng vuông góc.','Cạnh bên lăng trụ đứng có quan hệ với đáy:',['Song song','Vuông góc','Nằm trong đáy','Chéo nhau'],'B','Đó là định nghĩa lăng trụ đứng.'),
tb(5,'Khoảng cách trong không gian',[
'Khoảng cách từ điểm đến đường hoặc mặt phẳng là độ dài đoạn vuông góc. Các khoảng cách giữa hai đối tượng song song được quy về khoảng cách từ một điểm của đối tượng này đến đối tượng kia.',
'Khoảng cách giữa hai đường chéo nhau là độ dài đường vuông góc chung. Trong trường hợp một đường vuông góc với mặt phẳng chứa đường kia, việc dựng đường vuông góc chung được đơn giản hóa.'
],[{id:'form-math11-m7-05-distance',label:'Khoảng cách điểm–mặt',expression:'d(M,(P))=MH',variables:[{symbol:'H',meaning:'Hình chiếu vuông góc của $M$ lên $(P)$'}],conditions:['$MH\\perp(P)$']}],['Khoảng cách là đoạn vuông góc ngắn nhất.','Đối tượng song song: chọn điểm thuận lợi.','Đường chéo nhau cần đường vuông góc chung.'],'$MH\\perp(P)$ và $MH=5$. Tính $d(M,(P))$.',['$H$ là hình chiếu của $M$.','Khoảng cách bằng $MH=5$.'],'Khoảng cách bằng 5.','Khoảng cách từ điểm đến mặt phẳng là độ dài:',['Đoạn bất kỳ','Đoạn vuông góc','Đường xiên dài nhất','Giao tuyến'],'B','Đoạn vuông góc là ngắn nhất.'),
tb(6,'Thể tích',[
'Thể tích lăng trụ và hình hộp bằng diện tích đáy nhân chiều cao. Chiều cao là khoảng cách giữa hai mặt phẳng đáy, không phải luôn là cạnh bên.',
'Thể tích hình chóp bằng một phần ba diện tích đáy nhân chiều cao. Cần xác định đúng chân đường cao và đơn vị khối; hình chóp đều có chân đường cao tại tâm đáy.'
],[{id:'form-math11-m7-06-volume',label:'Công thức thể tích',expression:'V_{\\text{lăng trụ}}=Bh,\\qquad V_{\\text{chóp}}=\\frac13Bh',variables:[{symbol:'B',meaning:'Diện tích đáy'},{symbol:'h',meaning:'Chiều cao'}],conditions:['$B,h>0$']}],['Lăng trụ: $Bh$.','Hình chóp: $Bh/3$.','Chiều cao phải vuông góc đáy.'],'Hình chóp có $B=12$, $h=6$. Tính thể tích.',['Dùng $V=Bh/3$.','$V=12\\cdot6/3=24$.'],'Thể tích bằng 24.','Thể tích lăng trụ có đáy $B$, cao $h$ là:',['$Bh$','$Bh/2$','$Bh/3$','$3Bh$'],'A','Lăng trụ dùng $V=Bh$.')
];

math11Module7Theory[0].content += '\n\nQuy trình tính góc: chọn vectơ chỉ phương hoặc thay hai đường chéo nhau bằng hai đường song song cùng qua một điểm; tính góc nhọn hoặc vuông; kiểm tra kết quả thuộc $[0^\\circ;90^\\circ]$.';
math11Module7Theory[0].workedExamples.push(
  {id:'ex-math11-m7-01-vector',title:'Tính góc bằng tích vô hướng',problem:'Hai đường có vectơ chỉ phương $(1;0;1)$ và $(1;1;0)$. Tính góc giữa chúng.',steps:['Tích vô hướng bằng 1.','Mỗi vectơ có độ dài $\\sqrt2$.','$\\cos\\theta=1/2$.'],answer:'Góc bằng $60^\\circ$.'},
  {id:'ex-math11-m7-01-skew',title:'Góc giữa hai đường chéo nhau',problem:'Trong lập phương, tính góc giữa $AC$ và $A_1B$.',steps:['Chọn vectơ chỉ phương $(1;1;0)$ và $(1;0;-1)$.','Cosin góc bằng $1/(\\sqrt2\\sqrt2)=1/2$.'],answer:'Góc bằng $60^\\circ$.'}
);
math11Module7Theory[0].checkpoints.push(
  {id:'cp-math11-m7-01-dot',question:'Hai vectơ chỉ phương có tích vô hướng bằng 0 thì hai đường:',options:['Song song','Vuông góc','Trùng nhau','Không xác định'],correctAnswer:'B',explanation:'Tích vô hướng bằng 0 cho góc $90^\\circ$.'},
  {id:'cp-math11-m7-01-range',question:'Góc giữa hai đường thẳng trong không gian thuộc:',options:['$[0^\\circ;90^\\circ]$','$[0^\\circ;180^\\circ]$','$(90^\\circ;180^\\circ)$','$\\mathbb R$'],correctAnswer:'A',explanation:'Theo quy ước, lấy góc không tù lớn nhất là $90^\\circ$.'},
  {id:'cp-math11-m7-01-skew',question:'Hai đường chéo nhau có thể vuông góc không?',options:['Có','Không','Chỉ khi cùng độ dài','Chỉ trong mặt phẳng'],correctAnswer:'A',explanation:'Vuông góc được xác định qua hai đường song song tương ứng cùng đi qua một điểm.'}
);

math11Module7Theory[1].content += '\n\nKhi chứng minh đường vuông góc mặt phẳng, phải chỉ rõ hai đường cắt nhau nằm trong mặt phẳng. Định lí ba đường vuông góc được dùng sau khi xác định đúng đường xiên và hình chiếu của nó.';
math11Module7Theory[1].workedExamples.push(
  {id:'ex-math11-m7-02-pyramid',title:'Nhận diện đường cao hình chóp',problem:'$SA\\perp AB$, $SA\\perp AC$ và $AB,AC$ cắt nhau trong đáy. Chứng minh $SA\\perp(ABC)$.',steps:['Hai đường $AB,AC$ cùng thuộc $(ABC)$ và cắt nhau tại $A$.','$SA$ vuông góc với cả hai đường.'],answer:'Theo điều kiện đường–mặt, $SA\\perp(ABC)$.'},
  {id:'ex-math11-m7-02-three-lines',title:'Định lí ba đường vuông góc',problem:'$SA\\perp(ABC)$ và $AB\\perp BC$. Chứng minh $SB\\perp BC$.',steps:['$AB$ là hình chiếu của đường xiên $SB$ lên đáy.','$BC$ nằm trong đáy và vuông góc với hình chiếu $AB$.'],answer:'Theo định lí ba đường vuông góc, $SB\\perp BC$.'}
);
math11Module7Theory[1].checkpoints.push(
  {id:'cp-math11-m7-02-two-lines',question:'Để chứng minh $d\\perp(P)$, cần chứng minh $d$ vuông góc với:',options:['Một đường bất kỳ','Hai đường cắt nhau trong $(P)$','Hai đường song song trong $(P)$','Một điểm trong $(P)$'],correctAnswer:'B',explanation:'Hai đường cắt nhau xác định hai phương của mặt phẳng.'},
  {id:'cp-math11-m7-02-parallel',question:'Nếu $d\\perp(P)$ và $e\\parallel d$ thì:',options:['$e\\parallel(P)$','$e\\perp(P)$','$e\\subset(P)$','Không kết luận'],correctAnswer:'B',explanation:'Đường song song với pháp tuyến cũng vuông góc mặt phẳng.'},
  {id:'cp-math11-m7-02-projection',question:'Định lí ba đường vuông góc liên hệ đường xiên với:',options:['Độ dài cạnh','Hình chiếu của đường xiên','Một mặt phẳng song song','Thể tích'],correctAnswer:'B',explanation:'Phải xác định hình chiếu vuông góc của đường xiên lên mặt phẳng.'}
);

math11Module7Theory[2].content += '\n\nTrong tam giác vuông tạo bởi đường xiên, hình chiếu và thành phần vuông góc, có thể dùng sin, cos hoặc tan. Góc giữa đường và mặt phẳng là góc phụ với góc giữa đường và pháp tuyến.';
math11Module7Theory[2].workedExamples.push(
  {id:'ex-math11-m7-03-triangle',title:'Tính góc đường–mặt',problem:'$AH\\perp(P)$, $AH=3$, $HM=4$. Tính góc giữa $AM$ và $(P)$.',steps:['Hình chiếu của $AM$ là $HM$.','Tam giác $AHM$ vuông tại $H$ và $AM=5$.','$\\sin\\alpha=AH/AM=3/5$.'],answer:'$\\alpha\\approx36{,}87^\\circ$.'},
  {id:'ex-math11-m7-03-normal',title:'Dùng góc với pháp tuyến',problem:'Một đường tạo với pháp tuyến của mặt phẳng góc $25^\\circ$. Tính góc đường–mặt.',steps:['Góc đường–mặt và góc đường–pháp tuyến là hai góc phụ nhau.','Tính $90^\\circ-25^\\circ$.'],answer:'Góc bằng $65^\\circ$.'}
);
math11Module7Theory[2].checkpoints.push(
  {id:'cp-math11-m7-03-parallel',question:'Đường song song mặt phẳng tạo với mặt phẳng góc:',options:['$0^\\circ$','$30^\\circ$','$60^\\circ$','$90^\\circ$'],correctAnswer:'A',explanation:'Đường và hình chiếu của nó song song hoặc trùng phương.'},
  {id:'cp-math11-m7-03-perpendicular',question:'Đường vuông góc mặt phẳng tạo với mặt phẳng góc:',options:['$0^\\circ$','$30^\\circ$','$60^\\circ$','$90^\\circ$'],correctAnswer:'D',explanation:'Đây là trường hợp góc lớn nhất.'},
  {id:'cp-math11-m7-03-complement',question:'Đường tạo với pháp tuyến góc $40^\\circ$ thì tạo với mặt phẳng góc:',options:['$40^\\circ$','$45^\\circ$','$50^\\circ$','$90^\\circ$'],correctAnswer:'C',explanation:'Hai góc phụ nhau.'}
);

math11Module7Theory[3].content += '\n\nMuốn chứng minh hai mặt phẳng vuông góc, cách ngắn nhất thường là tìm một đường nằm trong mặt phẳng thứ nhất và vuông góc mặt phẳng thứ hai. Khi hai mặt phẳng đã vuông góc, có thể khai thác giao tuyến để suy ra đường–mặt vuông góc.';
math11Module7Theory[3].workedExamples.push(
  {id:'ex-math11-m7-04-condition',title:'Chứng minh hai mặt phẳng vuông góc',problem:'$SA\\perp(ABC)$ và $SA\\subset(SAB)$. Chứng minh $(SAB)\\perp(ABC)$.',steps:['Mặt phẳng $(SAB)$ chứa đường $SA$.','$SA$ vuông góc với mặt phẳng $(ABC)$.'],answer:'Theo điều kiện đủ, $(SAB)\\perp(ABC)$.'},
  {id:'ex-math11-m7-04-intersection',title:'Khai thác giao tuyến',problem:'$(P)\\perp(Q)$ theo giao tuyến $a$. Đường $b\\subset(P)$ và $b\\perp a$. Kết luận quan hệ giữa $b$ và $(Q)$.',steps:['Dùng tính chất của hai mặt phẳng vuông góc theo giao tuyến.','$b$ nằm trong một mặt phẳng và vuông góc giao tuyến.'],answer:'$b\\perp(Q)$. '}
);
math11Module7Theory[3].checkpoints.push(
  {id:'cp-math11-m7-04-angle',question:'Góc giữa hai mặt phẳng vuông góc bằng:',options:['$0^\\circ$','$45^\\circ$','$60^\\circ$','$90^\\circ$'],correctAnswer:'D',explanation:'Theo định nghĩa.'},
  {id:'cp-math11-m7-04-line',question:'Nếu $d\\subset(P)$ và $d\\perp(Q)$ thì:',options:['$(P)\\parallel(Q)$','$(P)\\perp(Q)$','$(P)=(Q)$','Không kết luận'],correctAnswer:'B',explanation:'Mặt phẳng chứa một đường vuông góc mặt phẳng kia.'},
  {id:'cp-math11-m7-04-prism',question:'Mặt bên của lăng trụ đứng có quan hệ với đáy:',options:['Song song','Vuông góc','Trùng nhau','Không cố định'],correctAnswer:'B',explanation:'Mặt bên chứa cạnh bên vuông góc đáy.'}
);

math11Module7Theory[4].content += '\n\nChiến lược khoảng cách: quy đối tượng cần tính về khoảng cách điểm–mặt hoặc điểm–đường; dựng đoạn vuông góc; sau đó tìm độ dài bằng tam giác vuông, diện tích hoặc thể tích. Không dùng một đoạn nối tùy ý làm khoảng cách.';
math11Module7Theory[4].workedExamples.push(
  {id:'ex-math11-m7-05-point-plane',title:'Khoảng cách điểm–mặt',problem:'$SA\\perp(ABC)$ và $SA=7$. Tính $d(S,(ABC))$.',steps:['$A$ là hình chiếu vuông góc của $S$ lên đáy.','Khoảng cách bằng độ dài đoạn vuông góc $SA$.'],answer:'Khoảng cách bằng 7.'},
  {id:'ex-math11-m7-05-parallel-planes',title:'Khoảng cách hai mặt phẳng song song',problem:'Một hình hộp chữ nhật cao 8. Tính khoảng cách giữa hai mặt phẳng đáy.',steps:['Hai đáy song song.','Cạnh bên vuông góc với cả hai đáy và dài 8.'],answer:'Khoảng cách bằng 8.'}
);
math11Module7Theory[4].checkpoints.push(
  {id:'cp-math11-m7-05-zero',question:'Nếu $M\\in(P)$ thì $d(M,(P))$ bằng:',options:['$0$','$1$','$MH$','$+\\infty$'],correctAnswer:'A',explanation:'Điểm nằm ngay trên mặt phẳng.'},
  {id:'cp-math11-m7-05-shortest',question:'Đoạn ngắn nhất từ điểm đến mặt phẳng là:',options:['Đoạn xiên bất kỳ','Đoạn vuông góc','Đường chéo','Giao tuyến'],correctAnswer:'B',explanation:'Đây là tính chất cực tiểu của đoạn vuông góc.'},
  {id:'cp-math11-m7-05-skew',question:'Khoảng cách giữa hai đường chéo nhau là độ dài:',options:['Một đường bất kỳ','Đường vuông góc chung','Một hình chiếu bất kỳ','Tổng hai đường'],correctAnswer:'B',explanation:'Theo định nghĩa khoảng cách hai đường chéo nhau.'}
);

math11Module7Theory[5].content += '\n\nTrước khi thay công thức thể tích, phải tính đúng diện tích đáy và chiều cao vuông góc với đáy. Với khối ghép hoặc bài toán thực tế, có thể dùng cộng–trừ thể tích và đổi đơn vị sau cùng.';
math11Module7Theory[5].workedExamples.push(
  {id:'ex-math11-m7-06-prism',title:'Lăng trụ đáy tam giác',problem:'Lăng trụ đứng có đáy là tam giác vuông cạnh góc vuông 3 và 4, chiều cao 10. Tính thể tích.',steps:['Diện tích đáy $B=3\\cdot4/2=6$.','$V=Bh=6\\cdot10$.'],answer:'Thể tích bằng 60.'},
  {id:'ex-math11-m7-06-tetrahedron',title:'Tứ diện vuông',problem:'Tứ diện có ba cạnh đôi một vuông góc tại một đỉnh, dài 3, 4, 5. Tính thể tích.',steps:['Chọn tam giác vuông cạnh 3,4 làm đáy, diện tích bằng 6.','Cạnh còn lại dài 5 là chiều cao.','$V=6\\cdot5/3$.'],answer:'Thể tích bằng 10.'}
);
math11Module7Theory[5].checkpoints.push(
  {id:'cp-math11-m7-06-prism',question:'Lăng trụ có thể tích 72, diện tích đáy 9. Chiều cao bằng:',options:['$6$','$8$','$9$','$12$'],correctAnswer:'B',explanation:'$h=V/B=8$.'},
  {id:'cp-math11-m7-06-pyramid',question:'Chóp có diện tích đáy 15, chiều cao 6. Thể tích bằng:',options:['$30$','$45$','$60$','$90$'],correctAnswer:'A',explanation:'$V=15\\cdot6/3=30$.'},
  {id:'cp-math11-m7-06-ratio',question:'Chóp và lăng trụ cùng đáy, cùng chiều cao. Tỉ số thể tích chóp/lăng trụ là:',options:['$1/3$','$1/2$','$1$','$3$'],correctAnswer:'A',explanation:'Hai công thức lần lượt là $Bh/3$ và $Bh$.'}
);
