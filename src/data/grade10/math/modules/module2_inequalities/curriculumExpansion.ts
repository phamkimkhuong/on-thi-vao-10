import type { Question, QuestionPracticeMetadata, Solution } from '@/types';

type ChoiceKey = 'A' | 'B' | 'C' | 'D';
type Representation = QuestionPracticeMetadata['representationType'];

type ExpansionSpec = {
  id: string;
  questionTypeId: 'math10-qt22' | 'math10-qt3';
  subTypeId: string;
  content: string;
  options: [string, string, string, string];
  correctAnswer: ChoiceKey;
  difficulty: 'easy' | 'medium' | 'hard';
  reasoning: string;
  mistake: string;
  representationType: Representation;
  mediaSrc?: string;
  mediaAlt?: string;
};

const specs: ExpansionSpec[] = [
  // Bài 3 — Dạng 1: nhận dạng bất phương trình bậc nhất hai ẩn.
  { id:'math10-m2x-q001',questionTypeId:'math10-qt22',subTypeId:'math10-qt22-st1',content:'Biểu thức nào là bất phương trình bậc nhất hai ẩn?',options:['A. $2x-3y\\le5$','B. $x^2+y<4$','C. $xy\\ge1$','D. $\\dfrac1x+y>0$'],correctAnswer:'A',difficulty:'easy',reasoning:'$2x-3y\\le5$ có dạng $ax+by\\le c$ với $a=2,b=-3$; các phương án còn lại chứa bậc hai, tích hai ẩn hoặc ẩn ở mẫu.',mistake:'Chỉ nhìn thấy hai chữ x, y mà không kiểm tra tính tuyến tính.',representationType:'equation' },
  { id:'math10-m2x-q002',questionTypeId:'math10-qt22',subTypeId:'math10-qt22-st1',content:'Bất phương trình nào dưới đây có dạng $ax+by>c$?',options:['A. $x+y^2>0$','B. $x+7y>0$','C. $x/y>2$','D. $\\sqrt{x}+y>1$'],correctAnswer:'B',difficulty:'easy',reasoning:'Phương án B tuyến tính theo cả x và y, với $a=1,b=7,c=0$.',mistake:'Nhầm căn, lũy thừa hoặc phép chia chứa ẩn là biểu thức bậc nhất.',representationType:'equation' },
  { id:'math10-m2x-q003',questionTypeId:'math10-qt22',subTypeId:'math10-qt22-st1',content:'Với bất phương trình $-4x+y\\ge2$, bộ hệ số $(a;b;c)$ là:',options:['A. $(4;1;2)$','B. $(-4;-1;2)$','C. $(-4;1;2)$','D. $(-4;1;-2)$'],correctAnswer:'C',difficulty:'easy',reasoning:'Đối chiếu trực tiếp với $ax+by\\ge c$ cho $a=-4,b=1,c=2$.',mistake:'Bỏ dấu âm trước hệ số của x.',representationType:'equation' },
  { id:'math10-m2x-q004',questionTypeId:'math10-qt22',subTypeId:'math10-qt22-st1',content:'Biểu thức nào không phải bất phương trình bậc nhất hai ẩn?',options:['A. $x+y<2$','B. $2x-y\\ge0$','C. $-3y\\le5$','D. $xy\\le3$'],correctAnswer:'D',difficulty:'easy',reasoning:'Tích $xy$ làm biểu thức không còn tuyến tính; phương án C vẫn hợp lệ vì hệ số của x có thể bằng 0.',mistake:'Cho rằng cả x và y đều bắt buộc phải xuất hiện với hệ số khác 0.',representationType:'equation' },
  { id:'math10-m2x-q005',questionTypeId:'math10-qt22',subTypeId:'math10-qt22-st1',content:'Vì sao $5x\\le9$ vẫn có thể xem là bất phương trình bậc nhất hai ẩn x, y?',options:['A. Có thể viết $5x+0y\\le9$','B. Vì thiếu y nên tự động đúng','C. Vì 5 và 9 đều dương','D. Chỉ bất phương trình một ẩn mới được phép có dấu ≤'],correctAnswer:'A',difficulty:'medium',reasoning:'Dạng tổng quát cho phép một trong hai hệ số a, b bằng 0, miễn là chúng không đồng thời bằng 0.',mistake:'Hiểu sai điều kiện “a và b không đồng thời bằng 0”.',representationType:'text' },
  { id:'math10-m2x-q006',questionTypeId:'math10-qt22',subTypeId:'math10-qt22-st1',content:'Cách viết đúng dạng tổng quát của $-y<4$ là:',options:['A. $0x+y<4$','B. $0x-y<4$','C. $-x+0y<4$','D. $0x+0y<4$'],correctAnswer:'B',difficulty:'easy',reasoning:'Hệ số của x bằng 0, hệ số của y bằng -1 nên biểu thức là $0x-y<4$.',mistake:'Làm mất dấu âm của y.',representationType:'equation' },
  { id:'math10-m2x-q007',questionTypeId:'math10-qt22',subTypeId:'math10-qt22-st1',content:'Bất phương trình $2x+3y-1>0$ tương đương với:',options:['A. $2x+3y>-1$','B. $2x+3y<1$','C. $2x+3y>1$','D. $2x-3y>1$'],correctAnswer:'C',difficulty:'medium',reasoning:'Chuyển -1 sang vế phải được $2x+3y>1$.',mistake:'Chuyển vế nhưng không đổi dấu của số hạng.',representationType:'equation' },
  { id:'math10-m2x-q008',questionTypeId:'math10-qt22',subTypeId:'math10-qt22-st1',content:'Trường hợp nào không thỏa điều kiện hệ số của bất phương trình bậc nhất hai ẩn?',options:['A. $a=1,b=0$','B. $a=0,b=-2$','C. $a=3,b=4$','D. $a=0,b=0$'],correctAnswer:'D',difficulty:'easy',reasoning:'Nếu $a=b=0$ thì không còn ẩn bậc nhất; điều kiện bắt buộc là a và b không đồng thời bằng 0.',mistake:'Chỉ kiểm tra từng hệ số riêng lẻ.',representationType:'text' },
  { id:'math10-m2x-q009',questionTypeId:'math10-qt22',subTypeId:'math10-qt22-st1',content:'Bất phương trình nào là bất phương trình nghiêm?',options:['A. $3x-y<5$','B. $3x-y\\le5$','C. $3x-y\\ge5$','D. $3x-y=5$'],correctAnswer:'A',difficulty:'easy',reasoning:'Dấu < hoặc > tạo bất phương trình nghiêm; đường biên không thuộc miền nghiệm.',mistake:'Nhầm dấu ≤ là dấu nghiêm vì có kí hiệu <.',representationType:'equation' },
  { id:'math10-m2x-q010',questionTypeId:'math10-qt22',subTypeId:'math10-qt22-st1',content:'Với giá trị nào của m, biểu thức $(m-1)x+(m^2-1)y\\le3$ là bất phương trình bậc nhất hai ẩn?',options:['A. Mọi $m\\in\\mathbb R$','B. $m\\ne1$','C. $m\\ne-1$','D. Chỉ $m=-1$'],correctAnswer:'B',difficulty:'medium',reasoning:'Hai hệ số là $a=m-1$ và $b=(m-1)(m+1)$. Chúng đồng thời bằng 0 chỉ khi $m=1$, nên cần $m\\ne1$.',mistake:'Loại cả m=-1 khi thấy hệ số của y bằng 0, dù hệ số của x vẫn khác 0.',representationType:'equation' },
  { id:'math10-m2x-q011',questionTypeId:'math10-qt22',subTypeId:'math10-qt22-st1',content:'Với giá trị nào của m, $(m^2-4)x+(m-2)y>1$ không còn là bất phương trình bậc nhất hai ẩn?',options:['A. $m=-2$','B. $m=0$','C. $m=2$','D. $m=4$'],correctAnswer:'C',difficulty:'medium',reasoning:'Biểu thức không còn bậc nhất hai ẩn khi cả hai hệ số cùng bằng 0. Điều này xảy ra tại $m=2$; tại $m=-2$ chỉ hệ số của x bằng 0.',mistake:'Chỉ cần thấy một hệ số bằng 0 đã kết luận biểu thức không hợp lệ.',representationType:'equation' },
  { id:'math10-m2x-q012',questionTypeId:'math10-qt22',subTypeId:'math10-qt22-st1',content:'Bất phương trình nào tương đương với $-2x+4y<6$?',options:['A. $x-2y<3$','B. $x+2y>-3$','C. $x-2y<-3$','D. $x-2y>-3$'],correctAnswer:'D',difficulty:'medium',reasoning:'Chia hai vế cho -2 phải đổi chiều dấu: $x-2y>-3$.',mistake:'Chia cho số âm nhưng giữ nguyên chiều bất phương trình.',representationType:'equation' },

  // Bài 3 — Dạng 2: nghiệm của bất phương trình.
  { id:'math10-m2x-q013',questionTypeId:'math10-qt22',subTypeId:'math10-qt22-st2',content:'Cặp số nào là nghiệm của $2x+y\\le3$?',options:['A. $(1;1)$','B. $(2;1)$','C. $(1;2)$','D. $(3;0)$'],correctAnswer:'A',difficulty:'easy',reasoning:'Thay $(1;1)$ được $2\\cdot1+1=3\\le3$; các cặp còn lại cho giá trị lớn hơn 3.',mistake:'Chỉ thay một trong hai tọa độ.',representationType:'equation' },
  { id:'math10-m2x-q014',questionTypeId:'math10-qt22',subTypeId:'math10-qt22-st2',content:'Điểm nào không thuộc miền nghiệm của $x-2y>0$?',options:['A. $(3;1)$','B. $(0;1)$','C. $(5;2)$','D. $(1;0)$'],correctAnswer:'B',difficulty:'easy',reasoning:'Tại $(0;1)$, $x-2y=-2$ không lớn hơn 0.',mistake:'Thay y nhưng quên hệ số -2.',representationType:'equation' },
  { id:'math10-m2x-q015',questionTypeId:'math10-qt22',subTypeId:'math10-qt22-st2',content:'Cặp nào thỏa $3x+y<7$?',options:['A. $(2;2)$','B. $(3;0)$','C. $(1;2)$','D. $(0;7)$'],correctAnswer:'C',difficulty:'easy',reasoning:'Với $(1;2)$ ta có $3+2=5<7$; các phương án A, B, D không thỏa dấu nghiêm.',mistake:'Chấp nhận điểm nằm trên đường biên cho dấu <.',representationType:'equation' },
  { id:'math10-m2x-q016',questionTypeId:'math10-qt22',subTypeId:'math10-qt22-st2',content:'Với $y=1$, điều kiện $x+y\\ge4$ trở thành:',options:['A. $x\\ge4$','B. $x\\le3$','C. $x>3$','D. $x\\ge3$'],correctAnswer:'D',difficulty:'easy',reasoning:'Thay $y=1$: $x+1\\ge4$, suy ra $x\\ge3$.',mistake:'Bỏ dấu bằng khi biến đổi.',representationType:'equation' },
  { id:'math10-m2x-q017',questionTypeId:'math10-qt22',subTypeId:'math10-qt22-st2',content:'Điểm nào nằm trên đường biên và đồng thời là nghiệm của $x+y\\le5$?',options:['A. $(2;3)$','B. $(4;2)$','C. $(1;1)$','D. $(5;1)$'],correctAnswer:'A',difficulty:'medium',reasoning:'$(2;3)$ cho $x+y=5$; dấu ≤ lấy cả đường biên.',mistake:'Cho rằng điểm trên đường biên không bao giờ là nghiệm.',representationType:'equation' },
  { id:'math10-m2x-q018',questionTypeId:'math10-qt22',subTypeId:'math10-qt22-st2',content:'Điểm $M(m;1)$ không thuộc miền nghiệm của $2x-y<1$ khi:',options:['A. $m<1$','B. $m\\ge1$','C. $m>0$','D. $m\\le1$'],correctAnswer:'B',difficulty:'medium',reasoning:'Thay $M(m;1)$ được $2m-1<1$, tức $m<1$. Vì hỏi không thuộc miền nghiệm nên lấy phần bù $m\\ge1$.',mistake:'Giải đúng điều kiện thuộc miền nhưng quên đề hỏi điều kiện không thuộc.',representationType:'equation' },
  { id:'math10-m2x-q019',questionTypeId:'math10-qt22',subTypeId:'math10-qt22-st2',content:'Cho $y=0$. Những giá trị x nào thỏa $x+2y>4$?',options:['A. $x\\ge4$','B. $x<4$','C. $x>4$','D. $x\\le4$'],correctAnswer:'C',difficulty:'easy',reasoning:'Thay $y=0$ được $x>4$.',mistake:'Thêm dấu bằng dù đề dùng dấu >.',representationType:'equation' },
  { id:'math10-m2x-q020',questionTypeId:'math10-qt22',subTypeId:'math10-qt22-st2',content:'Có bao nhiêu cặp số nguyên không âm $(x;y)$ thỏa $x+y\\le2$?',options:['A. 3','B. 4','C. 5','D. 6'],correctAnswer:'D',difficulty:'hard',reasoning:'Các cặp là $(0;0),(0;1),(0;2),(1;0),(1;1),(2;0)$, tổng cộng 6.',mistake:'Chỉ đếm các cặp nằm trên đường $x+y=2$.',representationType:'table' },
  { id:'math10-m2x-q021',questionTypeId:'math10-qt22',subTypeId:'math10-qt22-st2',content:'Gốc tọa độ O là nghiệm của bất phương trình nào?',options:['A. $-x+3y\\le4$','B. $x+y>1$','C. $2x-y<0$','D. $x-2y\\ge5$'],correctAnswer:'A',difficulty:'easy',reasoning:'Thay $(0;0)$ vào A được $0\\le4$; ba phương án còn lại đều sai tại O.',mistake:'Không thay đồng thời x=0 và y=0.',representationType:'equation' },
  { id:'math10-m2x-q022',questionTypeId:'math10-qt22',subTypeId:'math10-qt22-st2',content:'Cặp số nào không thỏa $2x+3y\\ge6$?',options:['A. $(3;0)$','B. $(0;1)$','C. $(0;2)$','D. $(2;1)$'],correctAnswer:'B',difficulty:'easy',reasoning:'Tại $(0;1)$ vế trái bằng 3, nhỏ hơn 6.',mistake:'Nhầm 3y với y+3.',representationType:'equation' },
  { id:'math10-m2x-q023',questionTypeId:'math10-qt22',subTypeId:'math10-qt22-st2',content:'Với $y=2$, bất phương trình $x-y\\le1$ cho điều kiện:',options:['A. $x\\ge3$','B. $x<3$','C. $x\\le3$','D. $x>3$'],correctAnswer:'C',difficulty:'medium',reasoning:'$x-2\\le1$ tương đương $x\\le3$.',mistake:'Đổi chiều bất phương trình dù chỉ cộng cùng một số vào hai vế.',representationType:'equation' },
  { id:'math10-m2x-q024',questionTypeId:'math10-qt22',subTypeId:'math10-qt22-st2',content:'Điểm $M(m;2m-1)$ nằm trên đường biên $3x-y=5$. Giá trị của m là:',options:['A. 1','B. 2','C. 3','D. 4'],correctAnswer:'D',difficulty:'medium',reasoning:'Thay tọa độ M vào đường biên: $3m-(2m-1)=5$, suy ra $m+1=5$ và $m=4$.',mistake:'Bỏ ngoặc khi thay y=2m-1 vào biểu thức có dấu trừ phía trước.',representationType:'equation' },

  // Bài 3 — Dạng 3: đường biên và nửa mặt phẳng nghiệm.
  { id:'math10-m2x-q025',questionTypeId:'math10-qt22',subTypeId:'math10-qt22-st3',content:'Đường biên của $x+y\\le4$ là:',options:['A. $x+y=4$','B. $x+y=0$','C. $x-y=4$','D. $x+y<4$'],correctAnswer:'A',difficulty:'easy',reasoning:'Thay dấu bất phương trình bằng dấu bằng để được đường biên $x+y=4$.',mistake:'Giữ nguyên dấu ≤ khi viết phương trình đường biên.',representationType:'graph',mediaSrc:'/assets/math/grade10/module2-halfplane-x-plus-y-le4.svg',mediaAlt:'Đường thẳng x cộng y bằng bốn và nửa mặt phẳng phía chứa gốc tọa độ được tô màu.' },
  { id:'math10-m2x-q026',questionTypeId:'math10-qt22',subTypeId:'math10-qt22-st3',content:'Khi biểu diễn $x-y>2$, đường biên $x-y=2$ phải vẽ:',options:['A. Nét liền vì có dấu >','B. Nét đứt vì không lấy đường biên','C. Chỉ một đoạn thẳng','D. Không cần vẽ'],correctAnswer:'B',difficulty:'easy',reasoning:'Dấu > là dấu nghiêm nên các điểm trên đường biên không thuộc miền nghiệm.',mistake:'Nhìn kí hiệu > có nét ngang tưởng là phải dùng nét liền.',representationType:'graph' },
  { id:'math10-m2x-q027',questionTypeId:'math10-qt22',subTypeId:'math10-qt22-st3',content:'Gốc O thuộc miền nghiệm của $2x+y\\le6$. Vậy miền nghiệm là:',options:['A. Nửa mặt phẳng không chứa O','B. Chỉ đường thẳng $2x+y=6$','C. Nửa mặt phẳng bờ $2x+y=6$ chứa O, kể cả bờ','D. Toàn mặt phẳng'],correctAnswer:'C',difficulty:'easy',reasoning:'$0\\le6$ đúng nên lấy phía chứa O; dấu ≤ lấy cả đường biên.',mistake:'Gạch bỏ chính phía thỏa điểm thử.',representationType:'graph' },
  { id:'math10-m2x-q028',questionTypeId:'math10-qt22',subTypeId:'math10-qt22-st3',content:'Miền nghiệm của $-2x-4y\\le-8$ được mô tả đúng bởi:',options:['A. Phía chứa O, không kể bờ $x+2y=4$','B. Phía chứa O, kể bờ $x+2y=4$','C. Phía không chứa O, không kể bờ','D. Phía không chứa O, kể bờ'],correctAnswer:'D',difficulty:'medium',reasoning:'Chia cho -2 làm đổi chiều: $x+2y\\ge4$. Gốc O không thỏa và dấu ≥ lấy cả đường biên.',mistake:'Rút gọn bằng số âm nhưng không đổi chiều dấu, dẫn đến tô sai phía.',representationType:'graph' },
  { id:'math10-m2x-q029',questionTypeId:'math10-qt22',subTypeId:'math10-qt22-st3',content:'Điểm thử $M(0;1)$ thỏa $3x-y<0$. Kết luận đúng là:',options:['A. Miền nghiệm là phía chứa M, không kể đường biên','B. Miền nghiệm là phía đối diện M','C. Chỉ M là nghiệm','D. Đường biên thuộc miền nghiệm'],correctAnswer:'A',difficulty:'medium',reasoning:'Thay M được -1<0 nên chọn phía chứa M; dấu < loại đường biên.',mistake:'Dùng O làm điểm thử dù O nằm trên đường $3x-y=0$.',representationType:'graph' },
  { id:'math10-m2x-q030',questionTypeId:'math10-qt22',subTypeId:'math10-qt22-st3',content:'Khi đường biên đi qua O, cách làm phù hợp là:',options:['A. Kết luận O thuộc đúng một phía','B. Chọn điểm thử khác như $(1;0)$ hoặc $(0;1)$','C. Không thể xác định miền nghiệm','D. Luôn chọn phía trên đường thẳng'],correctAnswer:'B',difficulty:'easy',reasoning:'Điểm thử phải không nằm trên đường biên; nếu O nằm trên bờ thì chọn một điểm đơn giản khác.',mistake:'Thay điểm trên đường biên rồi dùng kết quả bằng nhau để chọn phía.',representationType:'text' },
  { id:'math10-m2x-q031',questionTypeId:'math10-qt22',subTypeId:'math10-qt22-st3',content:'Miền nghiệm của $y\\le2$ là:',options:['A. Phía trên đường y=2, không kể bờ','B. Phía trên đường y=2, kể bờ','C. Phía dưới đường y=2, kể bờ','D. Phía dưới đường y=2, không kể bờ'],correctAnswer:'C',difficulty:'easy',reasoning:'Các điểm có tung độ không vượt quá 2 nằm dưới đường ngang y=2; dấu ≤ lấy bờ.',mistake:'Đọc trục tung theo chiều ngược.',representationType:'graph' },
  { id:'math10-m2x-q032',questionTypeId:'math10-qt22',subTypeId:'math10-qt22-st3',content:'Miền nghiệm của $x>-1$ là:',options:['A. Phía trái x=-1, kể bờ','B. Phía trái x=-1, không kể bờ','C. Phía phải x=-1, kể bờ','D. Phía phải x=-1, không kể bờ'],correctAnswer:'D',difficulty:'easy',reasoning:'Hoành độ lớn hơn -1 nằm bên phải đường thẳng đứng x=-1; dấu > loại bờ.',mistake:'Nhầm hoành độ với tung độ.',representationType:'graph',mediaSrc:'/assets/math/grade10/module2-halfplane-x-gt-minus1.svg',mediaAlt:'Đường thẳng đứng x bằng âm một vẽ nét đứt, nửa mặt phẳng bên phải được tô màu.' },
  { id:'math10-m2x-q033',questionTypeId:'math10-qt22',subTypeId:'math10-qt22-st3',content:'Điểm $(1;1)$ thuộc miền $x+y<3$. Điều nào đúng về đường biên?',options:['A. Đường $x+y=3$ không thuộc miền nghiệm','B. Đường $x+y=3$ thuộc miền nghiệm','C. Không có đường biên','D. Đường biên là $x+y=1$'],correctAnswer:'A',difficulty:'medium',reasoning:'Dấu < loại toàn bộ các điểm có $x+y=3$.',mistake:'Suy từ một điểm trong miền rằng đường biên cũng thuộc miền.',representationType:'graph' },
  { id:'math10-m2x-q034',questionTypeId:'math10-qt22',subTypeId:'math10-qt22-st3',content:'Một miền tô chứa O và có bờ là $2x-y=4$ vẽ nét liền. Bất phương trình phù hợp là:',options:['A. $2x-y\\ge4$','B. $2x-y\\le4$','C. $2x-y>4$','D. $2x-y<4$'],correctAnswer:'B',difficulty:'medium',reasoning:'Tại O có $0\\le4$ và nét liền cho biết dùng dấu có bằng.',mistake:'Chọn chiều dấu theo hướng nhìn của đường thẳng thay vì dùng điểm thử.',representationType:'graph' },
  { id:'math10-m2x-q035',questionTypeId:'math10-qt22',subTypeId:'math10-qt22-st3',content:'Nửa mặt phẳng bên trái đường $x=2$, kể cả đường biên, được viết là:',options:['A. $x\\ge2$','B. $y\\le2$','C. $x\\le2$','D. $y\\ge2$'],correctAnswer:'C',difficulty:'easy',reasoning:'Bên trái đường x=2 gồm các điểm có hoành độ không lớn hơn 2.',mistake:'Nhầm đường thẳng đứng x=2 với đường ngang y=2.',representationType:'graph' },
  { id:'math10-m2x-q036',questionTypeId:'math10-qt22',subTypeId:'math10-qt22-st3',content:'Nửa mặt phẳng phía trên đường $y=-1$, không kể đường biên, là:',options:['A. $x>-1$','B. $y\\ge-1$','C. $x<-1$','D. $y>-1$'],correctAnswer:'D',difficulty:'easy',reasoning:'Phía trên có tung độ lớn hơn -1 và không lấy bờ nên dùng dấu >.',mistake:'Dùng ≥ dù đề nói không kể đường biên.',representationType:'graph' },

  // Bài 3 — Dạng 4: đọc hình và mô hình hóa một bất phương trình.
  { id:'math10-m2x-q037',questionTypeId:'math10-qt22',subTypeId:'math10-qt22-st4',content:'Một phòng có tối đa 40 chỗ. Gọi x, y là số học sinh của hai nhóm. Ràng buộc sức chứa là:',options:['A. $x+y\\le40$','B. $x+y\\ge40$','C. $x+y<40$','D. $x-y\\le40$'],correctAnswer:'A',difficulty:'easy',reasoning:'“Tối đa 40” nghĩa là tổng có thể bằng hoặc nhỏ hơn 40.',mistake:'Dịch “tối đa” thành dấu ≥.',representationType:'text' },
  { id:'math10-m2x-q038',questionTypeId:'math10-qt22',subTypeId:'math10-qt22-st4',content:'Vé loại A giá 5 đơn vị, vé loại B giá 8 đơn vị. Doanh thu cần ít nhất 100 đơn vị. Bất phương trình là:',options:['A. $5x+8y\\le100$','B. $5x+8y\\ge100$','C. $8x+5y>100$','D. $x+y\\ge100$'],correctAnswer:'B',difficulty:'easy',reasoning:'Tổng doanh thu là $5x+8y$; “ít nhất 100” cho dấu ≥.',mistake:'Đổi nhầm giá hai loại hoặc chiều dấu.',representationType:'table' },
  { id:'math10-m2x-q039',questionTypeId:'math10-qt22',subTypeId:'math10-qt22-st4',content:'Mỗi sản phẩm A dùng 2 kg nguyên liệu, B dùng 3 kg. Tổng lượng dùng phải nhỏ hơn 200 kg. Mô hình đúng là:',options:['A. $2x+3y\\le200$','B. $3x+2y<200$','C. $2x+3y<200$','D. $x+y<200$'],correctAnswer:'C',difficulty:'easy',reasoning:'Tổng nguyên liệu là $2x+3y$ và từ “nhỏ hơn” yêu cầu dấu nghiêm <.',mistake:'Tự thêm dấu bằng dù đề nói nhỏ hơn.',representationType:'text' },
  { id:'math10-m2x-q040',questionTypeId:'math10-qt22',subTypeId:'math10-qt22-st4',content:'Một khẩu phần A có 4 đơn vị đạm, B có 2 đơn vị. Tổng đạm không quá 12. Bất phương trình nào đúng?',options:['A. $4x+2y\\ge12$','B. $2x+4y\\le12$','C. $4x+2y<12$','D. $4x+2y\\le12$'],correctAnswer:'D',difficulty:'easy',reasoning:'Tổng đạm $4x+2y$ không quá 12 nên dùng ≤.',mistake:'Đổi vị trí hệ số của hai loại khẩu phần.',representationType:'table' },
  { id:'math10-m2x-q041',questionTypeId:'math10-qt22',subTypeId:'math10-qt22-st4',content:'Một hình có đường biên đi qua $(4;0)$, $(0;2)$, vẽ nét liền và miền tô chứa O. Bất phương trình là:',options:['A. $x+2y\\le4$','B. $x+2y\\ge4$','C. $2x+y\\le4$','D. $x+2y<4$'],correctAnswer:'A',difficulty:'medium',reasoning:'Đường qua hai giao điểm có phương trình $x+2y=4$; O thuộc miền và bờ được lấy nên dùng ≤.',mistake:'Đảo hai hệ số khi đọc giao điểm với trục.',representationType:'graph',mediaSrc:'/assets/math/grade10/module2-halfplane-x-plus-2y-le4.svg',mediaAlt:'Nửa mặt phẳng chứa gốc tọa độ, giới hạn bởi một đường thẳng nét liền cắt hai trục.' },
  { id:'math10-m2x-q042',questionTypeId:'math10-qt22',subTypeId:'math10-qt22-st4',content:'Một hình có bờ là đường $x+2y=4$ vẽ nét đứt; miền tô chứa gốc O. Bất phương trình của miền tô là:',options:['A. $x+2y>4$','B. $x+2y<4$','C. $x+2y\\ge4$','D. $2x+y<4$'],correctAnswer:'B',difficulty:'medium',reasoning:'Tại O có $0<4$ nên chọn phía $x+2y<4$; nét đứt xác nhận đường biên không được lấy.',mistake:'Chọn dấu ≤ chỉ vì miền tô nằm cùng phía với gốc tọa độ.',representationType:'graph' },
  { id:'math10-m2x-q043',questionTypeId:'math10-qt22',subTypeId:'math10-qt22-st4',content:'Miền tô nằm phía trên đường $y=2x-1$ và lấy cả đường biên. Cách viết đúng là:',options:['A. $y<2x-1$','B. $y\\le2x-1$','C. $y\\ge2x-1$','D. $y>2x+1$'],correctAnswer:'C',difficulty:'medium',reasoning:'Phía trên tương ứng y lớn hơn giá trị trên đường; lấy bờ nên dùng ≥.',mistake:'Nhầm “phía trên” với dấu ≤.',representationType:'graph',mediaSrc:'/assets/math/grade10/module2-halfplane-y-ge.svg',mediaAlt:'Đường thẳng y bằng hai x trừ một vẽ nét liền, nửa mặt phẳng phía trên được tô màu.' },
  { id:'math10-m2x-q044',questionTypeId:'math10-qt22',subTypeId:'math10-qt22-st4',content:'Một gói cước có phí cố định 20 nghìn, gọi nội mạng x phút giá 5 nghìn/phút và ngoại mạng y phút giá 8 nghìn/phút. Tổng tiền không quá 200 nghìn. Ràng buộc theo x, y là:',options:['A. $5x+8y\\le200$','B. $20x+5y\\le200$','C. $5x+8y\\ge180$','D. $5x+8y\\le180$'],correctAnswer:'D',difficulty:'medium',reasoning:'$20+5x+8y\\le200$ tương đương $5x+8y\\le180$.',mistake:'Quên trừ phí cố định khỏi giới hạn tổng.',representationType:'text' },
  { id:'math10-m2x-q045',questionTypeId:'math10-qt22',subTypeId:'math10-qt22-st4',content:'Một xe chở tối đa 60 người. Gọi x là số người lớn, y là số trẻ em. Điều kiện sức chứa là:',options:['A. $x+y\\le60$','B. $x+y\\ge60$','C. $x-y\\le60$','D. $2x+y\\le60$'],correctAnswer:'A',difficulty:'easy',reasoning:'Mỗi người chiếm một chỗ nên tổng x+y không vượt quá 60.',mistake:'Tự đặt hệ số khác nhau khi đề không cho.',representationType:'text' },
  { id:'math10-m2x-q046',questionTypeId:'math10-qt22',subTypeId:'math10-qt22-st4',content:'Sản phẩm A chiếm ít nhất $\\dfrac23$ tổng số sản phẩm A và B. Với x, y lần lượt là số sản phẩm A, B, điều kiện tương đương là:',options:['A. $x\\le2y$','B. $x\\ge2y$','C. $2x\\ge y$','D. $x+y\\ge2$'],correctAnswer:'B',difficulty:'medium',reasoning:'Ta có $x\\ge\\frac23(x+y)$. Nhân 3 rồi chuyển vế: $3x\\ge2x+2y$, suy ra $x\\ge2y$.',mistake:'Viết ngay x≥(2/3)y và bỏ qua cụm “tổng số sản phẩm”.',representationType:'text' },
  { id:'math10-m2x-q047',questionTypeId:'math10-qt22',subTypeId:'math10-qt22-st4',content:'Hiệu giữa số vé loại A và loại B nhỏ hơn 5. Với x, y tương ứng, điều kiện là:',options:['A. $x+y<5$','B. $y-x<5$','C. $x-y<5$','D. $x-y\\le5$'],correctAnswer:'C',difficulty:'easy',reasoning:'Hiệu theo thứ tự A trừ B là x-y; “nhỏ hơn” dùng dấu <.',mistake:'Đổi thứ tự hiệu hoặc thêm dấu bằng.',representationType:'text' },
  { id:'math10-m2x-q048',questionTypeId:'math10-qt22',subTypeId:'math10-qt22-st4',content:'Một mảnh đất có không quá 10 ha, x ha trồng lúa và y ha trồng ngô. Ràng buộc diện tích chính là:',options:['A. $x+y\\ge10$','B. $x-y\\le10$','C. $2x+y\\le10$','D. $x+y\\le10$'],correctAnswer:'D',difficulty:'easy',reasoning:'Tổng diện tích sử dụng là x+y và không vượt quá 10 ha.',mistake:'Nhầm “không quá” với “ít nhất”.',representationType:'text' },

  // Bài 4 — Dạng 4: lập hệ ràng buộc, chưa yêu cầu tối ưu.
  { id:'math10-m2x-q049',questionTypeId:'math10-qt3',subTypeId:'math10-qt3-st4',content:'Một cửa hàng nhập x máy loại A và y máy loại B. Tổng không quá 100 máy; A dùng 2 đơn vị vốn, B dùng 1 đơn vị vốn và tổng vốn không quá 160. Hệ đúng là:',options:['A. $x\\ge0,y\\ge0,x+y\\le100,2x+y\\le160$','B. $x+y\\ge100,2x+y\\le160$','C. $x+y\\le100,x+2y\\le160$','D. $x+y=100,2x+y=160$'],correctAnswer:'A',difficulty:'easy',reasoning:'Mỗi giới hạn tạo một bất phương trình và số lượng phải không âm.',mistake:'Biến các giới hạn “không quá” thành phương trình bằng.',representationType:'text' },
  { id:'math10-m2x-q050',questionTypeId:'math10-qt3',subTypeId:'math10-qt3-st4',content:'Thực phẩm A cung cấp 3 đạm và 1 vitamin; B cung cấp 1 đạm và 2 vitamin. Cần ít nhất 9 đạm và 8 vitamin. Hệ ràng buộc là:',options:['A. $3x+y\\le9,x+2y\\le8$','B. $3x+y\\ge9,x+2y\\ge8,x,y\\ge0$','C. $x+3y\\ge9,2x+y\\ge8$','D. $3x+y=9,x+2y=8$'],correctAnswer:'B',difficulty:'medium',reasoning:'“Ít nhất” cho cả hai ràng buộc dùng dấu ≥ và lượng thực phẩm không âm.',mistake:'Dùng dấu ≤ theo thói quen của bài toán nguồn lực tối đa.',representationType:'table' },
  { id:'math10-m2x-q051',questionTypeId:'math10-qt3',subTypeId:'math10-qt3-st4',content:'Bãi xe chứa không quá 30 xe và tối đa 80 bánh. Gọi x là ô tô 4 bánh, y là xe máy 2 bánh. Hệ phù hợp là:',options:['A. $x+y\\ge30,4x+2y\\le80$','B. $x+y\\le30,2x+4y\\le80$','C. $x+y\\le30,4x+2y\\le80,x,y\\ge0$','D. $4x+2y=80$'],correctAnswer:'C',difficulty:'medium',reasoning:'Tổng xe là x+y, tổng bánh là 4x+2y; cả hai đều có giới hạn trên.',mistake:'Đảo số bánh của ô tô và xe máy.',representationType:'table' },
  { id:'math10-m2x-q052',questionTypeId:'math10-qt3',subTypeId:'math10-qt3-st4',content:'Một rạp bán x vé thường và y vé VIP. Có ít nhất 20 vé VIP, tổng số vé không vượt 200. Hệ đúng là:',options:['A. $y\\le20,x+y\\le200$','B. $x\\ge20,x+y\\ge200$','C. $y>20,x+y<200$','D. $y\\ge20,x+y\\le200,x,y\\ge0$'],correctAnswer:'D',difficulty:'easy',reasoning:'Ít nhất 20 vé VIP cho $y\\ge20$; sức chứa cho $x+y\\le200$.',mistake:'Gắn điều kiện 20 cho nhầm biến x.',representationType:'text' },
  { id:'math10-m2x-q053',questionTypeId:'math10-qt3',subTypeId:'math10-qt3-st4',content:'Một xưởng phải làm ít nhất 10 sản phẩm A, không quá 20 sản phẩm B và tổng không quá 40. Hệ là:',options:['A. $x\\ge10,y\\le20,x+y\\le40$','B. $x\\le10,y\\ge20,x+y\\le40$','C. $x\\ge10,y\\le20,x+y\\ge40$','D. $x=10,y=20,x+y=40$'],correctAnswer:'A',difficulty:'easy',reasoning:'Dịch lần lượt “ít nhất”, “không quá” và “tổng không quá” thành ≥, ≤, ≤.',mistake:'Coi mọi con số được nêu là giá trị bắt buộc bằng.',representationType:'text' },
  { id:'math10-m2x-q054',questionTypeId:'math10-qt3',subTypeId:'math10-qt3-st4',content:'Nếu x, y là số bàn và ghế được sản xuất thì điều kiện miền xác định thích hợp nhất là:',options:['A. $x,y\\in\\mathbb R$','B. $x,y\\in\\mathbb N, x,y\\ge0$','C. $x,y<0$','D. Chỉ cần $x+y>0$'],correctAnswer:'B',difficulty:'easy',reasoning:'Số lượng sản phẩm là số nguyên không âm.',mistake:'Chỉ thêm điều kiện không âm mà quên tính nguyên của số sản phẩm.',representationType:'text' },
  { id:'math10-m2x-q055',questionTypeId:'math10-qt3',subTypeId:'math10-qt3-st4',content:'Một đội cần thực hiện ít nhất 8 công việc gồm loại A và B, trong đó loại A không quá 5. Hệ chính là:',options:['A. $x+y\\le8,x\\ge5$','B. $x+y>8,y\\le5$','C. $x+y\\ge8,x\\le5,x,y\\ge0$','D. $x+y=8,x=5$'],correctAnswer:'C',difficulty:'medium',reasoning:'Tổng ít nhất 8 cho ≥; số công việc A không quá 5 cho $x\\le5$.',mistake:'Gắn giới hạn của loại A cho biến y.',representationType:'text' },
  { id:'math10-m2x-q056',questionTypeId:'math10-qt3',subTypeId:'math10-qt3-st4',content:'Mua x quyển vở giá 8 nghìn và y cây bút giá 5 nghìn. Có không quá 100 nghìn và phải mua ít nhất 3 món mỗi loại. Hệ là:',options:['A. $8x+5y\\ge100,x,y\\ge3$','B. $8x+5y\\le100,x+y\\ge3$','C. $8x+5y<100,x,y>3$','D. $8x+5y\\le100,x\\ge3,y\\ge3$'],correctAnswer:'D',difficulty:'medium',reasoning:'Ngân sách là giới hạn trên; “mỗi loại” yêu cầu riêng $x\\ge3,y\\ge3$.',mistake:'Hiểu “mỗi loại ít nhất 3” thành tổng hai loại ít nhất 3.',representationType:'table' },
  { id:'math10-m2x-q057',questionTypeId:'math10-qt3',subTypeId:'math10-qt3-st4',content:'Sản phẩm A dùng 2 giờ máy và 1 giờ công; B dùng 1 giờ máy và 3 giờ công. Có tối đa 10 giờ máy, 12 giờ công. Hệ ràng buộc là:',options:['A. $2x+y\\le10,x+3y\\le12,x,y\\ge0$','B. $x+2y\\le10,3x+y\\le12$','C. $2x+y\\ge10,x+3y\\ge12$','D. $2x+y=10,x+3y=12$'],correctAnswer:'A',difficulty:'medium',reasoning:'Cộng mức sử dụng của từng nguồn lực theo từng loại sản phẩm và dùng dấu ≤ cho giới hạn tối đa.',mistake:'Ghép hệ số theo sản phẩm thay vì theo từng nguồn lực.',representationType:'table' },
  { id:'math10-m2x-q058',questionTypeId:'math10-qt3',subTypeId:'math10-qt3-st4',content:'Có 15 ha đất. Lúa dùng 3 đơn vị nước/ha, ngô dùng 2; tổng nước không quá 36. Hệ đúng là:',options:['A. $x+y\\ge15,3x+2y\\le36$','B. $x+y\\le15,3x+2y\\le36,x,y\\ge0$','C. $x+y\\le15,2x+3y\\le36$','D. $x+y=15,3x+2y=36$'],correctAnswer:'B',difficulty:'medium',reasoning:'Diện tích và nước đều là nguồn lực tối đa; hệ số nước của lúa, ngô lần lượt là 3 và 2.',mistake:'Đảo hệ số nước giữa hai loại cây.',representationType:'table' },
  { id:'math10-m2x-q059',questionTypeId:'math10-qt3',subTypeId:'math10-qt3-st4',content:'Gói gọi có tối đa 120 phút. Nội mạng x phút giá 1, ngoại mạng y phút giá 2; tiền không quá 180. Hệ là:',options:['A. $x+y\\ge120,x+2y\\le180$','B. $x+y\\le120,2x+y\\le180$','C. $x+y\\le120,x+2y\\le180,x,y\\ge0$','D. $x+y=120,x+2y=180$'],correctAnswer:'C',difficulty:'medium',reasoning:'Tổng thời lượng và tổng tiền đều không vượt giới hạn tương ứng.',mistake:'Đảo đơn giá nội mạng và ngoại mạng.',representationType:'text' },
  { id:'math10-m2x-q060',questionTypeId:'math10-qt3',subTypeId:'math10-qt3-st4',content:'Một câu lạc bộ có x nữ, y nam; tổng không quá 35 người và số nữ ít nhất 15. Hệ phù hợp là:',options:['A. $x+y\\ge35,x\\le15$','B. $x+y\\le35,y\\ge15$','C. $x+y<35,x>15$','D. $x+y\\le35,x\\ge15,x,y\\in\\mathbb N$'],correctAnswer:'D',difficulty:'easy',reasoning:'Tổng có giới hạn trên, số nữ có giới hạn dưới và số người phải là số nguyên không âm.',mistake:'Gắn điều kiện ít nhất 15 cho số nam.',representationType:'text' }
];

const roleCycle: QuestionPracticeMetadata['practiceRole'][] = [
  'guided',
  'near_transfer',
  'representation_switch',
  'misconception_check',
  'far_transfer',
  'retention'
];

// Các câu cuối mỗi cụm được dùng làm bước chuyển từ nhận biết sang vận dụng.
// Tách riêng bảng này giúp nhìn rõ ma trận 4 dễ – 5 vừa – 3 khó của từng dạng con.
const difficultyOverrides: Array<{ id: string; difficulty: Question['difficulty'] }> = [
  { id: 'math10-m2x-q003', difficulty: 'medium' },
  { id: 'math10-m2x-q006', difficulty: 'medium' },
  { id: 'math10-m2x-q009', difficulty: 'medium' },
  { id: 'math10-m2x-q010', difficulty: 'hard' },
  { id: 'math10-m2x-q011', difficulty: 'hard' },
  { id: 'math10-m2x-q012', difficulty: 'hard' },
  { id: 'math10-m2x-q016', difficulty: 'medium' },
  { id: 'math10-m2x-q019', difficulty: 'medium' },
  { id: 'math10-m2x-q022', difficulty: 'medium' },
  { id: 'math10-m2x-q018', difficulty: 'hard' },
  { id: 'math10-m2x-q024', difficulty: 'hard' },
  { id: 'math10-m2x-q027', difficulty: 'medium' },
  { id: 'math10-m2x-q030', difficulty: 'medium' },
  { id: 'math10-m2x-q031', difficulty: 'medium' },
  { id: 'math10-m2x-q035', difficulty: 'medium' },
  { id: 'math10-m2x-q028', difficulty: 'hard' },
  { id: 'math10-m2x-q033', difficulty: 'hard' },
  { id: 'math10-m2x-q034', difficulty: 'hard' },
  { id: 'math10-m2x-q038', difficulty: 'medium' },
  { id: 'math10-m2x-q039', difficulty: 'medium' },
  { id: 'math10-m2x-q040', difficulty: 'medium' },
  { id: 'math10-m2x-q042', difficulty: 'hard' },
  { id: 'math10-m2x-q044', difficulty: 'hard' },
  { id: 'math10-m2x-q046', difficulty: 'hard' },
  { id: 'math10-m2x-q054', difficulty: 'medium' },
  { id: 'math10-m2x-q057', difficulty: 'hard' },
  { id: 'math10-m2x-q058', difficulty: 'hard' },
  { id: 'math10-m2x-q059', difficulty: 'hard' }
];

const difficultyByQuestionId = new Map(difficultyOverrides.map(item => [item.id, item.difficulty]));

export const g10MathModule2ExpansionQuestions: Question[] = specs.map(spec => ({
  id: spec.id,
  subjectId: 'math',
  topicId: 'math10-t2',
  questionTypeId: spec.questionTypeId,
  content: spec.content,
  responseType: 'single_choice',
  options: spec.options,
  correctAnswer: spec.correctAnswer,
  acceptedAnswers: [spec.correctAnswer],
  validatorType: 'choice',
  difficulty: difficultyByQuestionId.get(spec.id) ?? spec.difficulty,
  sourceType: 'manual',
  outcomeIds: spec.questionTypeId === 'math10-qt22'
    ? ['MATH10-M2-O01', 'MATH10-M2-O04', 'MATH10-M2-O05', 'MATH10-M2-O06']
    : ['MATH10-M2-O02', 'MATH10-M2-O07'],
  competency: spec.representationType === 'text'
    ? 'mathematical_modeling'
    : 'mathematical_problem_solving',
  cognitiveLevel: (difficultyByQuestionId.get(spec.id) ?? spec.difficulty) === 'easy' ? 'recognition' : 'application',
  ...(spec.mediaSrc ? {
    media: [{
      id: `${spec.id}-media`,
      type: 'chart' as const,
      src: spec.mediaSrc,
      alt: spec.mediaAlt ?? 'Hình biểu diễn miền nghiệm trên mặt phẳng tọa độ.',
      width: 720,
      height: 420
    }]
  } : {})
}));

export const g10MathModule2ExpansionSolutions: Solution[] = specs.map(spec => ({
  id: `${spec.id}-solution`,
  questionId: spec.id,
  recognition: spec.questionTypeId === 'math10-qt22'
    ? 'Bất phương trình bậc nhất hai ẩn: đọc đúng dạng, dấu và ý nghĩa hình học.'
    : 'Lập hệ bất phương trình từ nhiều điều kiện đồng thời.',
  detailedSteps: [
    {
      order: 1,
      title: 'Đọc đúng dữ kiện',
      explanation: spec.reasoning,
      result: `Phương án ${spec.correctAnswer} thỏa đầy đủ điều kiện.`
    },
    {
      order: 2,
      title: 'Loại các phương án nhiễu',
      explanation: `Các phương án còn lại mắc lỗi đổi chiều dấu, bỏ điều kiện đường biên, ghép sai hệ số hoặc không còn là biểu thức tuyến tính. ${spec.mistake}`,
      result: `Chọn ${spec.correctAnswer}.`
    }
  ],
  finalAnswer: spec.correctAnswer,
  commonMistakes: [spec.mistake],
  reviewSuggestions: ['Thay lại dữ kiện hoặc một điểm thử vào phương án đã chọn trước khi kết luận.']
}));

const subtypePosition = new Map<string, number>();

export const g10MathModule2ExpansionMetadata: QuestionPracticeMetadata[] = specs.map(spec => {
  const position = subtypePosition.get(spec.subTypeId) ?? 0;
  subtypePosition.set(spec.subTypeId, position + 1);
  const isMasteryHoldout = position >= 10;
  return {
    questionId: spec.id,
    subTypeId: spec.subTypeId,
    practiceRole: isMasteryHoldout ? 'mastery_holdout' : roleCycle[position % roleCycle.length],
    representationType: spec.representationType,
    ...(isMasteryHoldout ? { isMasteryHoldout: true } : {})
  };
});
