import type {TheoryBlock} from '@/data/schema';
export const math11Module8Theory:TheoryBlock[]=[
{id:'tb-math11-m8-01',courseId:'grade11:math',moduleId:'math11-m8',lessonIds:['math11-kntt-l28'],outcomeIds:['out-math11-m8-01'],questionTypeIds:['math11-qt28'],sourceIds:['math11-source-official-program','math11-source-kntt-textbook-2'],title:'Biến cố hợp, giao, đối và độc lập',objectives:['Nhận biết hợp, giao, đối, xung khắc.','Phân biệt xung khắc với độc lập.'],content:[
'Biến cố $A\\cup B$ xảy ra khi ít nhất một trong $A,B$ xảy ra; $A\\cap B$ xảy ra khi cả hai cùng xảy ra. Biến cố đối $\\overline A$ xảy ra khi $A$ không xảy ra.',
'Hai biến cố xung khắc nếu $A\\cap B=\\varnothing$. Hai biến cố độc lập nếu việc xảy ra của biến cố này không làm thay đổi xác suất biến cố kia; về tính toán, $P(A\\cap B)=P(A)P(B)$.',
'Xung khắc và độc lập là hai khái niệm khác nhau. Nếu hai biến cố xung khắc có xác suất dương thì chúng không độc lập.'
].join('\n\n'),formulas:[{id:'form-math11-m8-01-sets',label:'Hợp, giao, đối',expression:'A\\cup B,\\quad A\\cap B,\\quad\\overline A',variables:[{symbol:'A,B',meaning:'Các biến cố'}],conditions:['Các biến cố trong cùng phép thử']},{id:'form-math11-m8-01-independent',label:'Điều kiện độc lập',expression:'P(A\\cap B)=P(A)P(B)',variables:[{symbol:'P',meaning:'Xác suất'}],conditions:['$A,B$ độc lập']}],keyPoints:['Hợp: ít nhất một; giao: đồng thời.','Biến cố đối có xác suất $1-P(A)$.','Xung khắc không đồng nghĩa độc lập.'],workedExamples:[{id:'ex-math11-m8-01',title:'Mô tả giao',problem:'Gieo xúc xắc. $A$: ra số chẵn, $B$: ra số lớn hơn 3. Tìm $A\\cap B$.',steps:['$A=\\{2,4,6\\}$, $B=\\{4,5,6\\}$.','Giao là các phần tử chung.'],answer:'$A\\cap B=\\{4,6\\}$.'}],checkpoints:[{id:'cp-math11-m8-01',question:'$A\\cup B$ xảy ra khi:',options:['Chỉ A','Chỉ B','Ít nhất một trong A, B','Không biến cố nào'],correctAnswer:'C',explanation:'Đây là định nghĩa biến cố hợp.'}],orderIndex:28,reviewStatus:'source_checked'},
{id:'tb-math11-m8-02',courseId:'grade11:math',moduleId:'math11-m8',lessonIds:['math11-kntt-l29'],outcomeIds:['out-math11-m8-02'],questionTypeIds:['math11-qt29'],sourceIds:['math11-source-official-program','math11-source-kntt-textbook-2'],title:'Công thức cộng xác suất',objectives:['Tính xác suất biến cố hợp.','Dùng biến cố đối và tổ hợp trong bài toán đơn giản.'],content:[
'Khi cộng $P(A)$ và $P(B)$, các kết quả thuộc $A\\cap B$ bị đếm hai lần nên phải trừ một lần. Nếu $A,B$ xung khắc thì phần giao bằng 0.',
'Biến cố “ít nhất một” thường thuận lợi khi dùng biến cố đối “không có”. Trong mô hình đồng khả năng, có thể đếm số kết quả thuận lợi bằng quy tắc tổ hợp rồi chia cỡ không gian mẫu.',
'Sau khi tính, cần kiểm tra xác suất trong $[0;1]$ và diễn giải đúng “hoặc” theo nghĩa ít nhất một.'
].join('\n\n'),formulas:[{id:'form-math11-m8-02-addition',label:'Công thức cộng',expression:'P(A\\cup B)=P(A)+P(B)-P(A\\cap B)',variables:[{symbol:'A,B',meaning:'Hai biến cố'}],conditions:['Cùng phép thử']},{id:'form-math11-m8-02-complement',label:'Biến cố đối',expression:'P(\\overline A)=1-P(A)',variables:[{symbol:'\\overline A',meaning:'Biến cố đối của A'}],conditions:[]}],keyPoints:['Luôn trừ phần giao.','Xung khắc thì $P(A\\cap B)=0$.','“Ít nhất một” thường dùng biến cố đối.'],workedExamples:[{id:'ex-math11-m8-02',title:'Dùng công thức cộng',problem:'$P(A)=0{,}5$, $P(B)=0{,}4$, $P(A\\cap B)=0{,}2$. Tính $P(A\\cup B)$.',steps:['Áp dụng công thức cộng.','$0{,}5+0{,}4-0{,}2=0{,}7$.'],answer:'$P(A\\cup B)=0{,}7$.'}],checkpoints:[{id:'cp-math11-m8-02',question:'Nếu A, B xung khắc thì $P(A\\cup B)$ bằng:',options:['$P(A)P(B)$','$P(A)+P(B)$','$P(A)-P(B)$','$0$'],correctAnswer:'B',explanation:'Phần giao bằng 0.'}],orderIndex:29,reviewStatus:'source_checked'},
{id:'tb-math11-m8-03',courseId:'grade11:math',moduleId:'math11-m8',lessonIds:['math11-kntt-l30'],outcomeIds:['out-math11-m8-03'],questionTypeIds:['math11-qt30'],sourceIds:['math11-source-official-program','math11-source-kntt-textbook-2'],title:'Công thức nhân và sơ đồ cây',objectives:['Tính giao của hai biến cố độc lập.','Dùng sơ đồ cây cho phép thử nhiều giai đoạn.'],content:[
'Nếu $A,B$ độc lập, xác suất cả hai cùng xảy ra bằng tích hai xác suất. Công thức này không được dùng chỉ vì hai biến cố “trông khác nhau”; tính độc lập phải được cho hoặc chứng minh.',
'Trong sơ đồ cây, mỗi nhánh biểu diễn một kết quả có điều kiện. Xác suất của một đường đi bằng tích xác suất trên các nhánh; xác suất của biến cố gồm nhiều đường đi rời nhau bằng tổng các tích.',
'Bài toán chọn có hoàn lại thường tạo các lần độc lập; không hoàn lại thường làm xác suất ở lần sau thay đổi.'
].join('\n\n'),formulas:[{id:'form-math11-m8-03-product',label:'Công thức nhân cho biến cố độc lập',expression:'P(A\\cap B)=P(A)P(B)',variables:[{symbol:'A,B',meaning:'Hai biến cố độc lập'}],conditions:['$A,B$ độc lập']},{id:'form-math11-m8-03-tree',label:'Quy tắc đường đi',expression:'P(\\text{đường đi})=p_1p_2\\cdots p_n',variables:[{symbol:'p_i',meaning:'Xác suất nhánh thứ i'}],conditions:['Các xác suất là xác suất theo nhánh tương ứng']}],keyPoints:['Độc lập mới được nhân trực tiếp.','Nhân theo một đường đi, cộng các đường đi phù hợp.','Không hoàn lại thường không độc lập.'],workedExamples:[{id:'ex-math11-m8-03',title:'Hai lần độc lập',problem:'Tung đồng xu cân đối hai lần. Xác suất cả hai lần ngửa?',steps:['Mỗi lần ngửa có xác suất $1/2$ và hai lần độc lập.','Nhân: $1/2\\cdot1/2=1/4$.'],answer:'Xác suất bằng $1/4$.'}],checkpoints:[{id:'cp-math11-m8-03',question:'Trên một đường đi của sơ đồ cây, ta:',options:['Cộng xác suất nhánh','Nhân xác suất nhánh','Lấy hiệu','Lấy lớn nhất'],correctAnswer:'B',explanation:'Quy tắc nhân áp dụng dọc theo đường đi.'}],orderIndex:30,reviewStatus:'source_checked'}
];

math11Module8Theory[1].formulas[1].conditions = [
  '$A$ thuộc không gian mẫu đang xét'
];

math11Module8Theory[0].content += '\n\nNên dịch từng từ khóa sang phép toán tập hợp trước khi tính: “ít nhất một” là hợp, “đồng thời” là giao, “không” là biến cố đối, “đúng một” phải loại các phần giao. Kiểm tra độc lập bằng xác suất, không dựa vào cảm giác.';
math11Module8Theory[0].workedExamples.push(
  {id:'ex-math11-m8-01-sets',title:'Phân tích hợp và giao',problem:'Gieo xúc xắc; $A$ là số chẵn, $B$ là số lớn hơn 4. Tìm $A\\cup B$ và $A\\cap B$.',steps:['$A=\\{2,4,6\\}$, $B=\\{5,6\\}$.','Lấy tất cả phần tử cho hợp và phần tử chung cho giao.'],answer:'$A\\cup B=\\{2,4,5,6\\}$, $A\\cap B=\\{6\\}$.'},
  {id:'ex-math11-m8-01-test',title:'Kiểm tra độc lập',problem:'$P(A)=0{,}3$, $P(B)=0{,}6$, $P(A\\cap B)=0{,}18$. Hai biến cố có độc lập không?',steps:['Tính $P(A)P(B)=0{,}3\\cdot0{,}6=0{,}18$.','So sánh với xác suất giao đã cho.'],answer:'Hai biến cố độc lập.'}
);
math11Module8Theory[0].checkpoints.push(
  {id:'cp-math11-m8-01-union',question:'Từ khóa “ít nhất một” tương ứng với:',options:['Biến cố hợp','Biến cố giao','Biến cố đối','Biến cố rỗng'],correctAnswer:'A',explanation:'Hợp xảy ra khi ít nhất một biến cố xảy ra.'},
  {id:'cp-math11-m8-01-complement',question:'Nếu $P(A)=0{,}35$ thì $P(\\overline A)$ bằng:',options:['$0{,}35$','$0{,}65$','$1{,}35$','$0$'],correctAnswer:'B',explanation:'Lấy $1-0{,}35$.'},
  {id:'cp-math11-m8-01-exclusive',question:'Hai biến cố xung khắc có xác suất dương thì:',options:['Độc lập','Không độc lập','Luôn cùng xác suất','Có hợp bằng 1'],correctAnswer:'B',explanation:'Xác suất giao bằng 0 nhưng tích hai xác suất dương.'}
);

math11Module8Theory[1].content += '\n\nQuy trình dùng công thức cộng: mô tả $A,B$; xác định phần giao; thay công thức; kiểm tra kết quả. Với “ít nhất một”, hãy so sánh cách cộng trực tiếp với cách lấy 1 trừ xác suất không có lần nào xảy ra.';
math11Module8Theory[1].workedExamples.push(
  {id:'ex-math11-m8-02-reverse',title:'Tìm xác suất giao',problem:'$P(A\\cup B)=0{,}8$, $P(A)=0{,}5$, $P(B)=0{,}4$. Tính $P(A\\cap B)$.',steps:['Từ công thức cộng, chuyển vế phần giao.','$P(A\\cap B)=0{,}5+0{,}4-0{,}8$.'],answer:'$P(A\\cap B)=0{,}1$.'},
  {id:'ex-math11-m8-02-complement',title:'Dùng biến cố đối',problem:'Một phép thử độc lập có xác suất thành công $0{,}2$ mỗi lần. Tính xác suất có ít nhất một lần thành công trong 3 lần.',steps:['Biến cố đối là cả ba lần đều thất bại.','Xác suất biến cố đối là $0{,}8^3=0{,}512$.','Lấy 1 trừ xác suất này.'],answer:'Xác suất bằng $0{,}488$.'}
);
math11Module8Theory[1].checkpoints.push(
  {id:'cp-math11-m8-02-intersection',question:'Trong công thức cộng, phần giao bị:',options:['Không đếm','Đếm hai lần','Đếm ba lần','Luôn bằng 1'],correctAnswer:'B',explanation:'Nó có mặt trong cả $P(A)$ và $P(B)$.'},
  {id:'cp-math11-m8-02-exclusive',question:'Nếu $A,B$ xung khắc thì $P(A\\cup B)$ bằng:',options:['$P(A)P(B)$','$P(A)+P(B)$','$P(A)-P(B)$','$0$'],correctAnswer:'B',explanation:'Phần giao bằng 0.'},
  {id:'cp-math11-m8-02-at-least',question:'Biến cố đối của “ít nhất một lần thành công” là:',options:['Đúng một lần thành công','Mọi lần đều thành công','Không lần nào thành công','Hai lần thành công'],correctAnswer:'C',explanation:'Đây là cặp biến cố phủ toàn bộ không gian mẫu và không giao nhau.'}
);

math11Module8Theory[2].content += '\n\nTrong bài nhiều giai đoạn, ghi xác suất có điều kiện trên từng nhánh. Nhân dọc một đường đi và chỉ cộng các đường đi rời nhau cùng tạo nên biến cố cần tìm. Chọn không hoàn lại thường làm mẫu số và xác suất nhánh sau thay đổi.';
math11Module8Theory[2].workedExamples.push(
  {id:'ex-math11-m8-03-without-replacement',title:'Sơ đồ cây không hoàn lại',problem:'Hộp có 3 bi đỏ, 2 bi xanh. Rút 2 bi không hoàn lại. Tính xác suất đỏ rồi xanh.',steps:['Nhánh đầu đỏ có xác suất $3/5$.','Sau khi đã rút đỏ, nhánh xanh có xác suất $2/4$.','Nhân dọc đường đi.'],answer:'Xác suất bằng $3/10$.'},
  {id:'ex-math11-m8-03-total',title:'Cộng các đường đi',problem:'Chọn hộp I với xác suất $0{,}4$, hộp II với xác suất $0{,}6$. Xác suất lấy bi đỏ tương ứng là $0{,}7$ và $0{,}2$. Tính xác suất lấy được bi đỏ.',steps:['Đường qua hộp I có xác suất $0{,}4\\cdot0{,}7$.','Đường qua hộp II có xác suất $0{,}6\\cdot0{,}2$.','Hai đường rời nhau nên cộng lại.'],answer:'Xác suất bằng $0{,}4$.'}
);
math11Module8Theory[2].checkpoints.push(
  {id:'cp-math11-m8-03-path',question:'Trên một đường đi của sơ đồ cây, ta:',options:['Cộng xác suất nhánh','Nhân xác suất nhánh','Lấy hiệu','Lấy trung bình'],correctAnswer:'B',explanation:'Đây là quy tắc nhân theo đường đi.'},
  {id:'cp-math11-m8-03-paths',question:'Các đường đi rời nhau cùng tạo biến cố cần tìm được:',options:['Nhân với nhau','Cộng xác suất','Lấy hiệu','Bỏ qua'],correctAnswer:'B',explanation:'Các đường đi rời nhau là các trường hợp xung khắc.'},
  {id:'cp-math11-m8-03-replacement',question:'Rút không hoàn lại thường làm các lần rút:',options:['Độc lập','Không độc lập','Xung khắc hoàn toàn','Có xác suất bằng nhau'],correctAnswer:'B',explanation:'Thành phần hộp thay đổi sau lần rút trước.'}
);
