import type { Question, QuestionPracticeMetadata, Solution } from '@/types';

type Spec = {
  id: string;
  subTypeId: string;
  content: string;
  options: [string, string, string, string];
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  difficulty: 'easy' | 'medium' | 'hard';
  reasoning: string;
  mistake: string;
  representationType: QuestionPracticeMetadata['representationType'];
  mediaSrc?: string;
  mediaAlt?: string;
};

const specs: Spec[] = [
  { id:'math10-m3x-q001',subTypeId:'math10-qt23-st1',content:'Giải phương trình $\\sqrt{x^2}=\\sqrt4$.',options:['A. $x=\\pm2$','B. $x=2$','C. $x=-2$','D. Vô nghiệm'],correctAnswer:'A',difficulty:'easy',reasoning:'Bình phương hai vế được $x^2=4$, nên $x=\\pm2$. Cả hai giá trị đều thỏa phương trình ban đầu.',mistake:'Chỉ lấy căn số học x=2 và bỏ nghiệm x=-2.',representationType:'equation' },
  { id:'math10-m3x-q002',subTypeId:'math10-qt23-st1',content:'Tập nghiệm của $\\sqrt{x^2-1}=\\sqrt{2x+2}$ là:',options:['A. $\\{3\\}$','B. $\\{-1;3\\}$','C. $\\{-1\\}$','D. $\\varnothing$'],correctAnswer:'B',difficulty:'easy',reasoning:'Bình phương được $x^2-1=2x+2$, hay $(x-3)(x+1)=0$. Thử lại cho thấy cả $x=-1$ và $x=3$ đều thỏa.',mistake:'Loại x=-1 chỉ vì nghiệm âm dù hai biểu thức dưới căn đều bằng 0.',representationType:'equation' },
  { id:'math10-m3x-q003',subTypeId:'math10-qt23-st1',content:'Giải $\\sqrt{2x^2-5x+3}=\\sqrt{x^2-x+3}$.',options:['A. $x=0$','B. $x=4$','C. $x\\in\\{0;4\\}$','D. Vô nghiệm'],correctAnswer:'C',difficulty:'easy',reasoning:'Bình phương và thu gọn: $x^2-4x=0$, nên x=0 hoặc x=4. Thay lại, hai vế lần lượt có cùng giá trị nên cả hai nghiệm được nhận.',mistake:'Dừng ở bước đặt hai biểu thức dưới căn bằng nhau mà không giải hết phương trình.',representationType:'equation' },
  { id:'math10-m3x-q004',subTypeId:'math10-qt23-st1',content:'Tập nghiệm của $\\sqrt{x^2-4x+4}=\\sqrt{x^2-2x+1}$ là:',options:['A. $\\{1\\}$','B. $\\{2\\}$','C. $\\{-\\frac32\\}$','D. $\\{\\frac32\\}$'],correctAnswer:'D',difficulty:'easy',reasoning:'Bình phương: $x^2-4x+4=x^2-2x+1$, suy ra $x=3/2$. Thay lại, hai biểu thức dưới căn đều bằng 1/4.',mistake:'Rút gọn sai khi hai vế có cùng số hạng x².',representationType:'equation' },
  { id:'math10-m3x-q005',subTypeId:'math10-qt23-st1',content:'Phương trình $\\sqrt{x^2-5x+6}=\\sqrt{x-2}$ có bao nhiêu nghiệm?',options:['A. 2','B. 1','C. 0','D. 3'],correctAnswer:'A',difficulty:'medium',reasoning:'Bình phương được $x^2-6x+8=0$, cho x=2 hoặc x=4. Cả hai đều làm các biểu thức dưới căn không âm và thỏa phương trình.',mistake:'Chỉ kiểm tra điều kiện x≥2 rồi cho rằng phương trình có vô số nghiệm.',representationType:'equation' },
  { id:'math10-m3x-q006',subTypeId:'math10-qt23-st1',content:'Tập nghiệm của $\\sqrt{x^2+3x+2}=\\sqrt{2x+2}$ là:',options:['A. $\\{0\\}$','B. $\\{-1;0\\}$','C. $\\{-1\\}$','D. $\\varnothing$'],correctAnswer:'B',difficulty:'medium',reasoning:'Bình phương cho $x^2+x=0$, nên x=-1 hoặc x=0. Thay lại: tại -1 hai vế bằng 0, tại 0 hai vế bằng √2.',mistake:'Loại nghiệm làm hai biểu thức dưới căn bằng 0.',representationType:'equation' },
  { id:'math10-m3x-q007',subTypeId:'math10-qt23-st1',content:'Giải $\\sqrt{3x^2-2x+1}=\\sqrt{x^2+2x+1}$.',options:['A. $x=0$','B. $x=2$','C. $x\\in\\{0;2\\}$','D. Vô nghiệm'],correctAnswer:'C',difficulty:'medium',reasoning:'Bình phương và thu gọn được $2x^2-4x=0$, tức x=0 hoặc x=2. Hai nghiệm đều thỏa phương trình gốc.',mistake:'Chia hai vế cho x và làm mất nghiệm x=0.',representationType:'equation' },
  { id:'math10-m3x-q008',subTypeId:'math10-qt23-st1',content:'Tập nghiệm của $\\sqrt{x^2-6x+8}=\\sqrt{2-x}$ là:',options:['A. $\\{2;3\\}$','B. $\\{3\\}$','C. $\\varnothing$','D. $\\{2\\}$'],correctAnswer:'D',difficulty:'medium',reasoning:'Bình phương được $(x-2)(x-3)=0$. x=2 thỏa; x=3 làm cả hai biểu thức dưới căn bằng -1 nên không xác định.',mistake:'Nhận cả hai nghiệm của phương trình sau bình phương mà không thử lại.',representationType:'equation' },
  { id:'math10-m3x-q009',subTypeId:'math10-qt23-st1',content:'Phương trình $\\sqrt{(x-m)^2}=\\sqrt4$ có bao nhiêu nghiệm với mỗi $m\\in\\mathbb R$?',options:['A. Luôn có hai nghiệm phân biệt','B. Luôn có một nghiệm','C. Có hai nghiệm khi $m>0$','D. Có thể vô nghiệm'],correctAnswer:'A',difficulty:'medium',reasoning:'Bình phương cho $(x-m)^2=4$, nên $x=m-2$ hoặc $x=m+2$. Hai nghiệm luôn phân biệt và đều thỏa.',mistake:'Cho rằng phải có m≥0 vì trong phương trình xuất hiện căn bậc hai.',representationType:'equation' },
  { id:'math10-m3x-q010',subTypeId:'math10-qt23-st1',content:'Phương trình $\\sqrt{(x-1)^2}=\\sqrt{x+3}$ có bao nhiêu nghiệm?',options:['A. 1','B. 2','C. 0','D. 3'],correctAnswer:'B',difficulty:'hard',reasoning:'Bình phương cho $x^2-3x-2=0$, có hai nghiệm $(3\\pm\\sqrt{17})/2$. Cả hai đều lớn hơn -3 nên x+3 không âm và đều thỏa.',mistake:'Tự thay √((x-1)²) bằng x-1 rồi loại nghiệm nhỏ hơn 1.',representationType:'equation' },
  { id:'math10-m3x-q011',subTypeId:'math10-qt23-st1',content:'Phương trình $\\sqrt{x^2+1}=\\sqrt{mx+1}$ có đúng một nghiệm khi:',options:['A. $m=1$','B. $m=-1$','C. $m=0$','D. Mọi m'],correctAnswer:'C',difficulty:'hard',reasoning:'Bình phương được $x(x-m)=0$, nên các ứng viên là x=0 và x=m; cả hai luôn hợp lệ. Chúng trùng nhau đúng khi m=0, khi đó chỉ có một nghiệm.',mistake:'Dùng biệt thức của một phương trình bậc hai mà không xét hai nghiệm có trùng nhau hay không.',representationType:'equation' },
  { id:'math10-m3x-q012',subTypeId:'math10-qt23-st1',content:'Giải $\\sqrt{x^2+9}=\\sqrt{(x-4)^2+1}$.',options:['A. $x=-1$','B. $x=0$','C. $x=4$','D. $x=1$'],correctAnswer:'D',difficulty:'hard',reasoning:'Bình phương: $x^2+9=x^2-8x+17$, suy ra 8x=8 và x=1. Hai biểu thức dưới căn đều dương tại x=1.',mistake:'Khai triển sai (x-4)² và làm mất số hạng -8x.',representationType:'diagram' },

  { id:'math10-m3x-q013',subTypeId:'math10-qt23-st2',content:'Giải $\\sqrt{x^2+3}=2$.',options:['A. $x=\\pm1$','B. $x=1$','C. $x=-1$','D. Vô nghiệm'],correctAnswer:'A',difficulty:'easy',reasoning:'Bình phương được $x^2+3=4$, nên $x^2=1$ và x=±1. Cả hai nghiệm đều thỏa.',mistake:'Chỉ lấy nghiệm dương sau khi giải x²=1.',representationType:'equation' },
  { id:'math10-m3x-q014',subTypeId:'math10-qt23-st2',content:'Tập nghiệm của $\\sqrt{x^2+5x+6}=x+2$ là:',options:['A. $\\{-3\\}$','B. $\\{-2\\}$','C. $\\{-3;-2\\}$','D. $\\varnothing$'],correctAnswer:'B',difficulty:'easy',reasoning:'Điều kiện x≥-2. Bình phương và rút gọn được x=-2; giá trị này thỏa phương trình ban đầu.',mistake:'Giải nhầm phương trình bậc hai vì không triệt tiêu các số hạng x².',representationType:'equation' },
  { id:'math10-m3x-q015',subTypeId:'math10-qt23-st2',content:'Giải $\\sqrt{2x^2-5x+2}=x-2$.',options:['A. $x=-1$','B. $x\\in\\{-1;2\\}$','C. $x=2$','D. Vô nghiệm'],correctAnswer:'C',difficulty:'easy',reasoning:'Điều kiện x≥2. Bình phương được $(x-2)(x+1)=0$, cho x=2 hoặc -1; chỉ x=2 thỏa điều kiện và phương trình gốc.',mistake:'Nhận x=-1 dù vế phải bằng -3, không thể bằng căn bậc hai.',representationType:'equation' },
  { id:'math10-m3x-q016',subTypeId:'math10-qt23-st2',content:'Tập nghiệm của $\\sqrt{x^2-6x+9}=x-3$ là:',options:['A. $\\mathbb R$','B. $(-\\infty;3]$','C. $\\{3\\}$','D. $[3;+\\infty)$'],correctAnswer:'D',difficulty:'easy',reasoning:'Vế trái là |x-3|. Đẳng thức |x-3|=x-3 đúng khi x-3≥0, tức x≥3.',mistake:'Bình phương thấy hai vế giống nhau rồi kết luận mọi số thực đều là nghiệm.',representationType:'equation' },
  { id:'math10-m3x-q017',subTypeId:'math10-qt23-st2',content:'Tập nghiệm của $\\sqrt{x^2-4x+7}=2$ là:',options:['A. $\\{1;3\\}$','B. $\\{2\\}$','C. $\\{-1;3\\}$','D. $\\varnothing$'],correctAnswer:'A',difficulty:'medium',reasoning:'Bình phương được $x^2-4x+3=0$, nên x=1 hoặc x=3. Hai giá trị đều làm vế căn bằng 2.',mistake:'Nhầm √4 có hai giá trị ±2; căn số học ở vế trái chỉ không âm.',representationType:'equation' },
  { id:'math10-m3x-q018',subTypeId:'math10-qt23-st2',content:'Giải $\\sqrt{x^2+x+1}=x+1$.',options:['A. $x=-1$','B. $x=0$','C. $x\\in\\{-1;0\\}$','D. Vô nghiệm'],correctAnswer:'B',difficulty:'medium',reasoning:'Điều kiện x≥-1. Bình phương rồi triệt tiêu x² cho x=0; thử lại cho hai vế bằng 1.',mistake:'Nhận x=-1 chỉ vì thỏa điều kiện x≥-1 mà chưa giải phương trình.',representationType:'equation' },
  { id:'math10-m3x-q019',subTypeId:'math10-qt23-st2',content:'Tập nghiệm của $\\sqrt{3x^2-10x+8}=x-2$ là:',options:['A. $\\{1\\}$','B. $\\{1;2\\}$','C. $\\{2\\}$','D. $\\varnothing$'],correctAnswer:'C',difficulty:'medium',reasoning:'Điều kiện x≥2. Bình phương được $2(x-1)(x-2)=0$, cho x=1 hoặc x=2; chỉ x=2 hợp lệ.',mistake:'Bỏ điều kiện không âm của vế x-2.',representationType:'equation' },
  { id:'math10-m3x-q020',subTypeId:'math10-qt23-st2',content:'Giải $\\sqrt{2x^2+x-1}=1-x$.',options:['A. $x=\\frac{-3+\\sqrt{17}}2$','B. $x=\\frac{-3-\\sqrt{17}}2$','C. Vô nghiệm','D. $x=\\frac{-3\\pm\\sqrt{17}}2$'],correctAnswer:'D',difficulty:'medium',reasoning:'Điều kiện x≤1. Bình phương được $x^2+3x-2=0$, cho hai nghiệm $(-3±√17)/2$; cả hai đều không vượt quá 1 và thỏa phương trình.',mistake:'Cho rằng phương trình căn chỉ có tối đa một nghiệm.',representationType:'equation' },
  { id:'math10-m3x-q021',subTypeId:'math10-qt23-st2',content:'Phương trình $\\sqrt{x^2-2x+5}=x+1$ có bao nhiêu nghiệm?',options:['A. 1','B. 2','C. 0','D. 3'],correctAnswer:'A',difficulty:'medium',reasoning:'Điều kiện x≥-1. Bình phương cho -2x+5=2x+1, suy ra x=1; nghiệm này thỏa phương trình.',mistake:'Cố dùng công thức nghiệm bậc hai dù các số hạng x² đã triệt tiêu.',representationType:'equation' },
  { id:'math10-m3x-q022',subTypeId:'math10-qt23-st2',content:'Phương trình $\\sqrt{x^2}=x-m$ có đúng một nghiệm khi:',options:['A. $m>0$','B. $m<0$','C. $m=0$','D. Mọi m'],correctAnswer:'B',difficulty:'hard',reasoning:'Ta có |x|=x-m. Nếu m<0, nghiệm duy nhất là x=m/2<0. Nếu m=0 có vô số nghiệm x≥0; nếu m>0 thì vô nghiệm.',mistake:'Thay √(x²) bằng x cho mọi x và kết luận chỉ xét m=0.',representationType:'equation' },
  { id:'math10-m3x-q023',subTypeId:'math10-qt23-st2',content:'Tập nghiệm của $\\sqrt{x^2+4x+4}=x+2$ là:',options:['A. $\\mathbb R$','B. $(-\\infty;-2]$','C. $[-2;+\\infty)$','D. $\\{-2\\}$'],correctAnswer:'C',difficulty:'hard',reasoning:'Vế trái là |x+2|. Đẳng thức |x+2|=x+2 đúng khi x+2≥0, nên x≥-2.',mistake:'Bình phương tạo đẳng thức đúng rồi quên quay lại điều kiện dấu của vế phải.',representationType:'equation' },
  { id:'math10-m3x-q024',subTypeId:'math10-qt23-st2',content:'Giải $\\sqrt{x^2+16}=x+2$.',options:['A. $x=2$','B. $x=4$','C. $x=-3$','D. $x=3$'],correctAnswer:'D',difficulty:'hard',reasoning:'Điều kiện x≥-2. Bình phương: $x^2+16=x^2+4x+4$, suy ra x=3; thử lại cho hai vế bằng 5.',mistake:'Quên số hạng 4x khi bình phương (x+2)².',representationType:'equation' },

  { id:'math10-m3x-q025',subTypeId:'math10-qt23-st3',content:'Điều kiện cần của phương trình $\\sqrt{x^2+1}=2x-1$ là:',options:['A. $x\\ge\\frac12$','B. $x\\le\\frac12$','C. $x\\ne\\frac12$','D. Mọi số thực'],correctAnswer:'A',difficulty:'easy',reasoning:'Vế căn luôn không âm nên cần $2x-1≥0$, tức x≥1/2.',mistake:'Chỉ xét x²+1≥0 và bỏ điều kiện dấu của vế phải.',representationType:'text' },
  { id:'math10-m3x-q026',subTypeId:'math10-qt23-st3',content:'Sau khi bình phương $\\sqrt{2x^2-3x-5}=x-1$, ta được hai ứng viên x=-2 và x=3. Nghiệm của phương trình ban đầu là:',options:['A. $x=-2$','B. $x=3$','C. Cả hai','D. Không có nghiệm'],correctAnswer:'B',difficulty:'easy',reasoning:'Vế phải phải không âm nên x≥1. x=-2 bị loại; x=3 cho hai vế đều bằng 2.',mistake:'Nhận cả hai ứng viên chỉ vì chúng giải phương trình sau bình phương.',representationType:'text' },
  { id:'math10-m3x-q027',subTypeId:'math10-qt23-st3',content:'Phương trình $\\sqrt{x^2-1}=\\sqrt{3-x}$ có tập nghiệm là:',options:['A. $\\{\\frac{-1+\\sqrt{17}}2\\}$','B. $\\{\\frac{-1-\\sqrt{17}}2\\}$','C. $\\{\\frac{-1-\\sqrt{17}}2;\\frac{-1+\\sqrt{17}}2\\}$','D. $\\varnothing$'],correctAnswer:'C',difficulty:'easy',reasoning:'Bình phương được $x^2+x-4=0$, có hai nghiệm $(-1±√17)/2$. Tại cả hai nghiệm, 3-x không âm nên đều thỏa.',mistake:'Loại nghiệm âm mà không kiểm tra trực tiếp biểu thức dưới căn.',representationType:'equation' },
  { id:'math10-m3x-q028',subTypeId:'math10-qt23-st3',content:'Tập nghiệm của $\\sqrt{x^2-4x+4}=2-x$ là:',options:['A. $[2;+\\infty)$','B. $\\mathbb R$','C. $\\{2\\}$','D. $(-\\infty;2]$'],correctAnswer:'D',difficulty:'easy',reasoning:'Vế trái là |x-2|. Với x≤2, |x-2|=2-x; với x>2 hai vế trái dấu. Vậy tập nghiệm là (-∞;2].',mistake:'Cho rằng √((x-2)²)=x-2 thay vì |x-2|.',representationType:'equation' },
  { id:'math10-m3x-q029',subTypeId:'math10-qt23-st3',content:'Phương trình $\\sqrt{x^2+1}=mx$ có đúng một nghiệm khi:',options:['A. $|m|>1$','B. $|m|<1$','C. $m=0$','D. $|m|=1$'],correctAnswer:'A',difficulty:'medium',reasoning:'Bình phương cho $(m^2-1)x^2=1$, cần |m|>1. Trong hai nghiệm đối nhau, điều kiện mx≥0 giữ đúng một nghiệm.',mistake:'Nhận cả hai nghiệm đối nhau mà không xét dấu của mx.',representationType:'equation' },
  { id:'math10-m3x-q030',subTypeId:'math10-qt23-st3',content:'Phương trình $\\sqrt{x^2}=mx+1$ có hai nghiệm phân biệt khi:',options:['A. $|m|>1$','B. $-1<m<1$','C. $m=\\pm1$','D. Mọi m'],correctAnswer:'B',difficulty:'medium',reasoning:'Với x≥0 có nghiệm $x=1/(1-m)$ khi m<1; với x<0 có nghiệm $x=-1/(1+m)$ khi m>-1. Cả hai cùng tồn tại khi -1<m<1.',mistake:'Bình phương ngay rồi không kiểm tra hai nhánh của |x|.',representationType:'equation' },
  { id:'math10-m3x-q031',subTypeId:'math10-qt23-st3',content:'Để x=2 là nghiệm của $\\sqrt{x^2+m}=x+1$ thì m bằng:',options:['A. 1','B. 3','C. 5','D. 9'],correctAnswer:'C',difficulty:'medium',reasoning:'Thay x=2: $\\sqrt{4+m}=3$. Bình phương được 4+m=9 nên m=5.',mistake:'Bình phương 3 thành 6 hoặc quên trừ 4.',representationType:'equation' },
  { id:'math10-m3x-q032',subTypeId:'math10-qt23-st3',content:'Để x=1 là nghiệm của $\\sqrt{x^2-2x+5}=mx$ thì m bằng:',options:['A. -2','B. -1','C. 1','D. 2'],correctAnswer:'D',difficulty:'medium',reasoning:'Thay x=1, vế trái bằng √4=2 và vế phải bằng m, nên m=2.',mistake:'Cho căn của 4 có hai giá trị ±2.',representationType:'equation' },
  { id:'math10-m3x-q033',subTypeId:'math10-qt23-st3',content:'Trên hình, AB=4 km, BC=x km và AC=x+2 km. Giá trị x là:',options:['A. 3 km','B. 2 km','C. 4 km','D. 5 km'],correctAnswer:'A',difficulty:'medium',reasoning:'Tam giác ABC vuông tại B nên $AC=\\sqrt{x^2+16}$. Giải $\\sqrt{x^2+16}=x+2$ được x=3 km.',mistake:'Dùng x+4 cho cạnh huyền thay vì áp dụng định lí Pythagore.',representationType:'diagram',mediaSrc:'/assets/math/grade10/module3-radical-distance.svg',mediaAlt:'Tam giác vuông ABC có AB bằng 4, BC bằng x và AC bằng x cộng 2.' },
  { id:'math10-m3x-q034',subTypeId:'math10-qt23-st3',content:'Một tam giác vuông có hai cạnh góc vuông dài x và 3; cạnh huyền dài hơn cạnh x đúng 1 đơn vị. Tìm x.',options:['A. 3','B. 4','C. 5','D. 6'],correctAnswer:'B',difficulty:'hard',reasoning:'Lập phương trình $\\sqrt{x^2+9}=x+1$. Bình phương được x²+9=x²+2x+1, suy ra x=4.',mistake:'Nhận x âm trong bài toán độ dài hoặc bình phương sai (x+1)².',representationType:'diagram' },
  { id:'math10-m3x-q035',subTypeId:'math10-qt23-st3',content:'Sau khi bình phương $\\sqrt{2x^2-7x}=x-2$, ta được hai ứng viên x=-1 và x=4. Nghiệm đúng là:',options:['A. $x=-1$','B. Cả hai','C. $x=4$','D. Vô nghiệm'],correctAnswer:'C',difficulty:'hard',reasoning:'Điều kiện x-2≥0 cho x≥2, nên x=-1 bị loại. Thay x=4 cho hai vế cùng bằng 2.',mistake:'Chỉ kiểm tra biểu thức dưới căn tại x=-1 mà quên vế phải âm.',representationType:'text' },
  { id:'math10-m3x-q036',subTypeId:'math10-qt23-st3',content:'Tập nghiệm của $\\sqrt{2x^2-7x+6}=3-x$ là:',options:['A. $\\{\\frac{1+\\sqrt{13}}2\\}$','B. $\\{\\frac{1-\\sqrt{13}}2\\}$','C. $\\varnothing$','D. $\\{\\frac{1-\\sqrt{13}}2;\\frac{1+\\sqrt{13}}2\\}$'],correctAnswer:'D',difficulty:'hard',reasoning:'Điều kiện x≤3. Bình phương được $x^2-x-3=0$, cho $x=(1±√13)/2$. Cả hai đều nhỏ hơn 3 và thỏa phương trình ban đầu.',mistake:'Loại nghiệm âm hoặc chỉ giữ nghiệm có dấu cộng trước căn.',representationType:'equation' }
];

const difficultyOverrides: Array<{ id: string; difficulty: Question['difficulty'] }> = [];
const difficultyByQuestionId = new Map(difficultyOverrides.map(item => [item.id, item.difficulty]));
const roles: QuestionPracticeMetadata['practiceRole'][] = ['guided', 'near_transfer', 'representation_switch', 'misconception_check', 'far_transfer', 'retention'];

export const g10MathModule3ExpansionQuestions: Question[] = specs.map(spec => ({
  id: spec.id,
  subjectId: 'math',
  topicId: 'math10-t3',
  questionTypeId: 'math10-qt23',
  content: spec.content,
  responseType: 'single_choice',
  options: spec.options,
  correctAnswer: spec.correctAnswer,
  acceptedAnswers: [spec.correctAnswer],
  validatorType: 'choice',
  difficulty: difficultyByQuestionId.get(spec.id) ?? spec.difficulty,
  sourceType: 'manual',
  outcomeIds: ['MATH10-M3-O06'],
  competency: spec.representationType === 'diagram' ? 'mathematical_modeling' : 'mathematical_problem_solving',
  cognitiveLevel: spec.difficulty === 'easy' ? 'recognition' : 'application',
  ...(spec.mediaSrc ? { media: [{ id:`${spec.id}-media`,type:'diagram' as const,src:spec.mediaSrc,alt:spec.mediaAlt ?? 'Hình minh họa bài toán phương trình chứa căn.',width:720,height:420 }] } : {})
}));

export const g10MathModule3ExpansionSolutions: Solution[] = specs.map(spec => ({
  id: `${spec.id}-solution`,
  questionId: spec.id,
  recognition: spec.subTypeId === 'math10-qt23-st1'
    ? 'Dạng căn bằng căn: bình phương, giải phương trình nhận được và thử lại.'
    : spec.subTypeId === 'math10-qt23-st2'
      ? 'Dạng căn bằng biểu thức bậc nhất: kiểm tra vế phải không âm trước khi bình phương.'
      : 'Dạng điều kiện, tham số hoặc mô hình: tách nghiệm ứng viên khỏi nghiệm thực sự.',
  detailedSteps: [
    { order:1,title:'Biến đổi về phương trình quen thuộc',explanation:spec.reasoning },
    { order:2,title:'Kiểm tra nghiệm',explanation:`Đối chiếu điều kiện dấu và thay lại vào phương trình ban đầu. Vì vậy chọn phương án ${spec.correctAnswer}.`,result:`Chọn ${spec.correctAnswer}.` }
  ],
  finalAnswer: spec.correctAnswer,
  commonMistakes: [spec.mistake],
  reviewSuggestions: ['Sau khi bình phương, luôn coi các nghiệm tìm được là ứng viên cho đến khi đã thử lại.']
}));

const subtypePositions = new Map<string, number>();
export const g10MathModule3ExpansionMetadata: QuestionPracticeMetadata[] = specs.map(spec => {
  const position = subtypePositions.get(spec.subTypeId) ?? 0;
  subtypePositions.set(spec.subTypeId, position + 1);
  const holdout = position >= 10;
  return {
    questionId: spec.id,
    subTypeId: spec.subTypeId,
    practiceRole: holdout ? 'mastery_holdout' : roles[position % roles.length],
    representationType: spec.representationType,
    ...(holdout ? { isMasteryHoldout: true } : {})
  };
});
