import type {
  AssessmentCognitiveLevel,
  AssessmentCompetency,
  Question,
  Solution,
  StructuredAnswer
} from '@/types';

type TopicId =
  | 'math10-t1'
  | 'math10-t2'
  | 'math10-t3'
  | 'math10-t4'
  | 'math10-t5'
  | 'math10-t6'
  | 'math10-t7';

type CommonSeed = {
  id: string;
  topicId: TopicId;
  questionTypeId: string;
  content: string;
  difficulty: 'easy' | 'medium' | 'hard';
  outcomeIds: string[];
  competency: AssessmentCompetency;
  cognitiveLevel: AssessmentCognitiveLevel;
  variantGroupId: string;
  recognition: string;
  mistake: string;
  review: string;
};

type McqSeed = CommonSeed & {
  kind: 'mcq';
  options: [string, string, string, string];
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  reasoning: string[];
};

type ShortSeed = CommonSeed & {
  kind: 'short';
  correctAnswer: string;
  acceptedAnswers: string[];
  reasoning: string[];
};

type TrueFalseSeed = CommonSeed & {
  kind: 'true_false';
  statements: [string, string, string, string];
  correct: { a: 'Đ' | 'S'; b: 'Đ' | 'S'; c: 'Đ' | 'S'; d: 'Đ' | 'S' };
  analyses: [string, string, string, string];
};

type Seed = McqSeed | ShortSeed | TrueFalseSeed;

const mcq = (seed: Omit<McqSeed, 'kind'>): McqSeed => ({ kind: 'mcq', ...seed });
const short = (seed: Omit<ShortSeed, 'kind'>): ShortSeed => ({ kind: 'short', ...seed });
const tf = (seed: Omit<TrueFalseSeed, 'kind'>): TrueFalseSeed => ({ kind: 'true_false', ...seed });

export const g10MathMidtermExpansionSeeds: Seed[] = [
  // Giữa học kỳ I – Mã A: 8 câu nhiều lựa chọn bổ sung.
  mcq({ id: 'mock-math10-q75', topicId: 'math10-t1', questionTypeId: 'math10-qt17', content: 'Phủ định của mệnh đề $P:\\ \\forall x\\in\\mathbb{R},\\ x^2+1>0$ là:', options: ['A. $\\forall x\\in\\mathbb{R},\\ x^2+1\\le0$', 'B. $\\exists x\\in\\mathbb{R},\\ x^2+1\\le0$', 'C. $\\exists x\\in\\mathbb{R},\\ x^2+1<0$', 'D. $\\forall x\\in\\mathbb{R},\\ x^2+1<0$'], correctAnswer: 'B', difficulty: 'easy', outcomeIds: ['MATH10-M1-O01'], competency: 'mathematical_reasoning', cognitiveLevel: 'understanding', variantGroupId: 'math10-mid1-negation-02', recognition: 'Phủ định mệnh đề có lượng từ “với mọi”.', reasoning: ['Đổi lượng từ $\\forall$ thành $\\exists$.', 'Phủ định quan hệ $x^2+1>0$ là $x^2+1\\le0$. Vì vậy mệnh đề phủ định trùng với phương án B.'], mistake: 'Chỉ đổi dấu bất đẳng thức nhưng không đổi lượng từ.', review: 'Ôn quy tắc phủ định $\\forall\\leftrightarrow\\exists$ và $>\\leftrightarrow\\le$.' }),
  mcq({ id: 'mock-math10-q76', topicId: 'math10-t1', questionTypeId: 'math10-qt1', content: 'Cho $A=(-3;4]$ và $B=[1;6)$. Khi đó $A\\cup B$ bằng:', options: ['A. $(-3;6)$', 'B. $[-3;6)$', 'C. $(-3;6]$', 'D. $[1;4]$'], correctAnswer: 'A', difficulty: 'easy', outcomeIds: ['MATH10-M1-O02'], competency: 'mathematical_reasoning', cognitiveLevel: 'understanding', variantGroupId: 'math10-mid1-set-operation-02', recognition: 'Phép hợp của hai khoảng giao nhau.', reasoning: ['Hai khoảng giao nhau trên đoạn $[1;4]$, nên hợp kéo dài từ cận trái nhỏ nhất $-3$ đến cận phải lớn nhất $6$.', 'Cả $-3$ và $6$ đều không thuộc các tập đã cho, vì vậy hai đầu mút đều dùng ngoặc tròn: $(-3;6)$.'], mistake: 'Đưa một đầu mút không thuộc tập vào kết quả.', review: 'Vẽ khoảng trên trục số và kiểm tra riêng từng đầu mút.' }),
  mcq({ id: 'mock-math10-q77', topicId: 'math10-t2', questionTypeId: 'math10-qt3', content: 'Miền nghiệm của bất phương trình $x-2y\\le4$ là nửa mặt phẳng:', options: ['A. Có bờ $x-2y=4$ và chứa điểm $O(0;0)$', 'B. Có bờ $x-2y=4$ và không chứa điểm $O(0;0)$', 'C. Có bờ $x-2y=4$ nhưng không chứa đường bờ', 'D. Có bờ $x+2y=4$ và chứa điểm $O(0;0)$'], correctAnswer: 'A', difficulty: 'easy', outcomeIds: ['MATH10-M2-O01'], competency: 'mathematical_reasoning', cognitiveLevel: 'understanding', variantGroupId: 'math10-mid1-half-plane-02', recognition: 'Xác định nửa mặt phẳng nghiệm bằng điểm thử.', reasoning: ['Dấu $\\le$ cho biết đường thẳng $x-2y=4$ được lấy làm bờ và thuộc miền nghiệm.', 'Thay $O(0;0)$ vào vế trái được $0\\le4$, đúng; do đó chọn nửa mặt phẳng chứa O.'], mistake: 'Thấy dấu “nhỏ hơn” rồi chọn phía dưới mà không dùng điểm thử.', review: 'Luôn kiểm tra một điểm không nằm trên đường bờ, thường là gốc O.' }),
  mcq({ id: 'mock-math10-q78', topicId: 'math10-t3', questionTypeId: 'math10-qt18', content: 'Tập xác định của hàm số $f(x)=\\dfrac{\\sqrt{2x-1}}{x-3}$ là:', options: ['A. $[\\frac12;+\\infty)$', 'B. $(\\frac12;3)\\cup(3;+\\infty)$', 'C. $[\\frac12;3)\\cup(3;+\\infty)$', 'D. $(-\\infty;3)\\cup(3;+\\infty)$'], correctAnswer: 'C', difficulty: 'medium', outcomeIds: ['MATH10-M3-O01'], competency: 'mathematical_problem_solving', cognitiveLevel: 'application', variantGroupId: 'math10-mid1-domain-02', recognition: 'Tìm tập xác định có đồng thời căn bậc hai và mẫu số.', reasoning: ['Điều kiện căn thức: $2x-1\\ge0\\Leftrightarrow x\\ge\\frac12$.', 'Điều kiện mẫu khác 0: $x\\ne3$. Giao hai điều kiện là $[\\frac12;3)\\cup(3;+\\infty)$.'], mistake: 'Chỉ xét điều kiện căn thức mà quên loại giá trị làm mẫu bằng 0.', review: 'Liệt kê tất cả điều kiện xác định rồi lấy giao.' }),
  mcq({ id: 'mock-math10-q79', topicId: 'math10-t3', questionTypeId: 'math10-qt4', content: 'Trục đối xứng của parabol $y=2x^2-8x+5$ là đường thẳng:', options: ['A. $x=-2$', 'B. $x=2$', 'C. $x=4$', 'D. $y=2$'], correctAnswer: 'B', difficulty: 'easy', outcomeIds: ['MATH10-M3-O02'], competency: 'mathematical_reasoning', cognitiveLevel: 'application', variantGroupId: 'math10-mid1-parabola-axis-02', recognition: 'Tìm trục đối xứng của đồ thị hàm bậc hai.', reasoning: ['Với $y=ax^2+bx+c$, trục đối xứng có phương trình $x=-\\dfrac{b}{2a}$.', 'Ở đây $a=2,b=-8$, nên $x=-\\dfrac{-8}{2\\cdot2}=2$.'], mistake: 'Quên dấu trừ trong công thức $-b/(2a)$.', review: 'Ôn công thức tọa độ đỉnh và trục đối xứng của parabol.' }),
  mcq({ id: 'mock-math10-q80', topicId: 'math10-t4', questionTypeId: 'math10-qt19', content: 'Giá trị của $\\cos120^\\circ$ bằng:', options: ['A. $\\frac12$', 'B. $-\\frac12$', 'C. $\\frac{\\sqrt3}{2}$', 'D. $-\\frac{\\sqrt3}{2}$'], correctAnswer: 'B', difficulty: 'easy', outcomeIds: ['MATH10-M4-O01'], competency: 'mathematical_reasoning', cognitiveLevel: 'recognition', variantGroupId: 'math10-mid1-trig-value-02', recognition: 'Giá trị lượng giác của góc bù.', reasoning: ['$120^\\circ=180^\\circ-60^\\circ$ nên $\\cos120^\\circ=-\\cos60^\\circ$.', 'Vì $\\cos60^\\circ=\\frac12$, kết quả là $-\\frac12$.'], mistake: 'Bỏ dấu âm của côsin trong góc phần tư II.', review: 'Ôn dấu của sin, cos trên nửa đường tròn lượng giác.' }),
  mcq({ id: 'mock-math10-q81', topicId: 'math10-t4', questionTypeId: 'math10-qt6', content: 'Tam giác có hai cạnh dài $5$, $7$ và góc xen giữa bằng $60^\\circ$. Bình phương độ dài cạnh đối diện góc $60^\\circ$ bằng:', options: ['A. $24$', 'B. $39$', 'C. $49$', 'D. $74$'], correctAnswer: 'B', difficulty: 'medium', outcomeIds: ['MATH10-M4-O02'], competency: 'mathematical_problem_solving', cognitiveLevel: 'application', variantGroupId: 'math10-mid1-cosine-law-02', recognition: 'Biết hai cạnh và góc xen giữa nên dùng định lí cosin.', reasoning: ['Đặt cạnh cần tìm là $c$. Định lí cosin cho $c^2=5^2+7^2-2\\cdot5\\cdot7\\cos60^\\circ$.', 'Thay $\\cos60^\\circ=\\frac12$: $c^2=25+49-35=39$.'], mistake: 'Cộng hạng tử $2ab\\cos C$ thay vì trừ.', review: 'Ghi đúng định lí $c^2=a^2+b^2-2ab\\cos C$ trước khi thay số.' }),
  mcq({ id: 'mock-math10-q82', topicId: 'math10-t5', questionTypeId: 'math10-qt5', content: 'Trung điểm của đoạn thẳng nối $A(-2;1)$ và $B(4;5)$ có tọa độ:', options: ['A. $(1;3)$', 'B. $(2;3)$', 'C. $(1;2)$', 'D. $(-3;1)$'], correctAnswer: 'A', difficulty: 'easy', outcomeIds: ['MATH10-M5-O02'], competency: 'mathematical_reasoning', cognitiveLevel: 'application', variantGroupId: 'math10-mid1-midpoint-02', recognition: 'Tính tọa độ trung điểm của đoạn thẳng.', reasoning: ['Hoành độ trung điểm là $(-2+4)/2=1$.', 'Tung độ trung điểm là $(1+5)/2=3$, nên trung điểm là $(1;3)$.'], mistake: 'Lấy hiệu hai tọa độ như khi lập vectơ.', review: 'Ôn công thức trung điểm bằng trung bình cộng từng tọa độ.' }),

  // Giữa học kỳ I – Mã A: 2 cụm Đúng/Sai và 2 câu trả lời ngắn bổ sung.
  tf({ id: 'mock-math10-q83', topicId: 'math10-t3', questionTypeId: 'math10-qt4', content: 'Cho hàm số $f(x)=x^2-4x+3$. Xét tính đúng sai của các phát biểu sau:', statements: ['a) Trục đối xứng của đồ thị là $x=2$.', 'b) Đỉnh của parabol là $I(2;-1)$.', 'c) Phương trình $f(x)=0$ có hai nghiệm $1$ và $3$.', 'd) Giá trị lớn nhất của $f(x)$ trên đoạn $[0;4]$ bằng $4$.'], correct: { a: 'Đ', b: 'Đ', c: 'Đ', d: 'S' }, analyses: ['$x=-b/(2a)=4/2=2$, nên a đúng.', '$f(2)=4-8+3=-1$, nên đỉnh là $I(2;-1)$ và b đúng.', '$x^2-4x+3=(x-1)(x-3)$, nên hai nghiệm là 1 và 3; c đúng.', 'Parabol mở lên; trên $[0;4]$, $f(0)=f(4)=3$ và giá trị nhỏ nhất là $-1$. Giá trị lớn nhất bằng 3, không phải 4; d sai.'], difficulty: 'hard', outcomeIds: ['MATH10-M3-O02', 'MATH10-M3-O03'], competency: 'mathematical_reasoning', cognitiveLevel: 'application', variantGroupId: 'math10-mid1-parabola-cluster-02', recognition: 'Đọc đồng thời trục, đỉnh, nghiệm và cực trị của parabol.', mistake: 'Chỉ xét giá trị tại đỉnh khi tìm giá trị lớn nhất trên một đoạn.', review: 'Ôn cách khảo sát parabol và so sánh giá trị tại đỉnh với hai đầu mút.' }),
  tf({ id: 'mock-math10-q84', topicId: 'math10-t5', questionTypeId: 'math10-qt7', content: 'Cho $\\vec a=(2;-1)$ và $\\vec b=(1;2)$. Xét tính đúng sai của các phát biểu sau:', statements: ['a) $\\vec a\\cdot\\vec b=0$.', 'b) $|\\vec a|=|\\vec b|=\\sqrt5$.', 'c) $\\vec a+\\vec b=(3;1)$.', 'd) Côsin của góc giữa $\\vec a$ và $\\vec b$ bằng $1$.'], correct: { a: 'Đ', b: 'Đ', c: 'Đ', d: 'S' }, analyses: ['$\\vec a\\cdot\\vec b=2\\cdot1+(-1)\\cdot2=0$, nên a đúng.', '$|\\vec a|=\\sqrt{2^2+(-1)^2}=\\sqrt5$ và $|\\vec b|=\\sqrt{1^2+2^2}=\\sqrt5$, nên b đúng.', 'Cộng theo tọa độ được $(2+1;-1+2)=(3;1)$, nên c đúng.', 'Do tích vô hướng bằng 0 và hai vectơ khác 0, chúng vuông góc; côsin góc giữa chúng bằng 0, không phải 1.'], difficulty: 'medium', outcomeIds: ['MATH10-M5-O01', 'MATH10-M5-O03'], competency: 'mathematical_reasoning', cognitiveLevel: 'application', variantGroupId: 'math10-mid1-vector-cluster-02', recognition: 'Tính toán tọa độ, độ dài và tích vô hướng của hai vectơ.', mistake: 'Kết luận hai vectơ cùng hướng khi thấy chúng có cùng độ dài.', review: 'Ôn công thức tích vô hướng và điều kiện vuông góc.' }),
  short({ id: 'mock-math10-q85', topicId: 'math10-t2', questionTypeId: 'math10-qt3', content: 'Tìm giá trị lớn nhất của $F=3x+2y$ trên miền nghiệm $x\\ge0$, $y\\ge0$, $x+y\\le8$, $2x+y\\le12$. Chỉ nhập giá trị lớn nhất.', correctAnswer: '20', acceptedAnswers: ['20', '20.0', '20,0'], difficulty: 'hard', outcomeIds: ['MATH10-M2-O02', 'MATH10-M2-O03'], competency: 'mathematical_modeling', cognitiveLevel: 'application', variantGroupId: 'math10-mid1-linear-programming-short-02', recognition: 'Tối ưu hàm tuyến tính trên miền đa giác.', reasoning: ['Các đỉnh của miền nghiệm là $(0;0)$, $(0;8)$, giao của $x+y=8$ và $2x+y=12$ là $(4;4)$, cùng với $(6;0)$.', 'Tính $F$ tại các đỉnh lần lượt được $0,16,20,18$. Giá trị lớn nhất là $20$ tại $(4;4)$.'], mistake: 'Chỉ kiểm tra các giao điểm với trục mà bỏ giao điểm của hai đường biên.', review: 'Vẽ miền nghiệm, liệt kê đủ các đỉnh rồi tính hàm mục tiêu tại từng đỉnh.' }),
  short({ id: 'mock-math10-q86', topicId: 'math10-t4', questionTypeId: 'math10-qt6', content: 'Tam giác có hai cạnh dài $7$ và $8$, góc xen giữa bằng $60^\\circ$. Tính bình phương độ dài cạnh đối diện góc $60^\\circ$.', correctAnswer: '57', acceptedAnswers: ['57', '57.0', '57,0'], difficulty: 'medium', outcomeIds: ['MATH10-M4-O02'], competency: 'mathematical_problem_solving', cognitiveLevel: 'application', variantGroupId: 'math10-mid1-cosine-law-short-02', recognition: 'Áp dụng định lí cosin khi biết hai cạnh và góc xen giữa.', reasoning: ['Theo định lí cosin, $c^2=7^2+8^2-2\\cdot7\\cdot8\\cos60^\\circ$.', 'Vì $\\cos60^\\circ=1/2$, ta có $c^2=49+64-56=57$.'], mistake: 'Trả lời $\\sqrt{57}$ dù câu hỏi yêu cầu bình phương độ dài.', review: 'Đọc đúng đại lượng cần trả lời trước khi thực hiện bước khai căn.' }),

  // Giữa học kỳ I – Mã B: các câu song song, tương đương độ khó với Mã A.
  mcq({ id: 'mock-math10-q87', topicId: 'math10-t1', questionTypeId: 'math10-qt17', content: 'Phủ định của mệnh đề $P:\\ \\exists x\\in\\mathbb{R},\\ x^2-3x+2=0$ là:', options: ['A. $\\forall x\\in\\mathbb{R},\\ x^2-3x+2\\ne0$', 'B. $\\exists x\\in\\mathbb{R},\\ x^2-3x+2\\ne0$', 'C. $\\forall x\\in\\mathbb{R},\\ x^2-3x+2=0$', 'D. $\\exists x\\in\\mathbb{R},\\ x^2-3x+2>0$'], correctAnswer: 'A', difficulty: 'easy', outcomeIds: ['MATH10-M1-O01'], competency: 'mathematical_reasoning', cognitiveLevel: 'understanding', variantGroupId: 'math10-mid1-negation-02', recognition: 'Phủ định mệnh đề có lượng từ “tồn tại”.', reasoning: ['Đổi lượng từ $\\exists$ thành $\\forall$.', 'Phủ định quan hệ “bằng 0” là “khác 0”, nên chọn A.'], mistake: 'Đổi dấu bằng nhưng giữ nguyên lượng từ tồn tại.', review: 'Ôn quy tắc phủ định lượng từ và các quan hệ bằng–khác.' }),
  mcq({ id: 'mock-math10-q88', topicId: 'math10-t1', questionTypeId: 'math10-qt1', content: 'Cho $A=[-2;3)$ và $B=(0;5]$. Khi đó $A\\cap B$ bằng:', options: ['A. $[0;3)$', 'B. $(0;3)$', 'C. $(0;3]$', 'D. $[-2;5]$'], correctAnswer: 'B', difficulty: 'easy', outcomeIds: ['MATH10-M1-O02'], competency: 'mathematical_reasoning', cognitiveLevel: 'understanding', variantGroupId: 'math10-mid1-set-operation-02', recognition: 'Phép giao của hai khoảng.', reasoning: ['Phần chung gồm các số lớn hơn 0 và nhỏ hơn 3.', 'Điểm 0 bị loại bởi B, điểm 3 bị loại bởi A, nên giao là $(0;3)$.'], mistake: 'Không kiểm tra trạng thái đóng/mở của hai đầu mút.', review: 'Vẽ cả hai khoảng trên cùng một trục số.' }),
  mcq({ id: 'mock-math10-q89', topicId: 'math10-t2', questionTypeId: 'math10-qt3', content: 'Điểm nào sau đây thuộc miền nghiệm của bất phương trình $2x+y>3$?', options: ['A. $(0;0)$', 'B. $(1;1)$', 'C. $(2;0)$', 'D. $(-1;5)$'], correctAnswer: 'C', difficulty: 'easy', outcomeIds: ['MATH10-M2-O01'], competency: 'mathematical_reasoning', cognitiveLevel: 'application', variantGroupId: 'math10-mid1-half-plane-02', recognition: 'Kiểm tra điểm thuộc miền nghiệm bằng phép thế.', reasoning: ['Thay từng tọa độ vào $2x+y$.', 'A cho $0$, B cho $3$, D cho $3$, đều không lớn hơn 3. Với C, $2\\cdot2+0=4>3$, nên C là điểm duy nhất thỏa mãn.'], mistake: 'Nhầm dấu $>$ với $\\ge$ và nhận cả điểm nằm trên đường biên.', review: 'Thay lần lượt từng điểm và chú ý bất phương trình nghiêm ngặt không chứa đường biên.' }),
  mcq({ id: 'mock-math10-q90', topicId: 'math10-t3', questionTypeId: 'math10-qt18', content: 'Tập xác định của hàm số $f(x)=\\dfrac{\\sqrt{x+2}}{x-1}$ là:', options: ['A. $[-2;+\\infty)$', 'B. $[-2;1)\\cup(1;+\\infty)$', 'C. $(-2;1)\\cup(1;+\\infty)$', 'D. $(-\\infty;1)\\cup(1;+\\infty)$'], correctAnswer: 'B', difficulty: 'medium', outcomeIds: ['MATH10-M3-O01'], competency: 'mathematical_problem_solving', cognitiveLevel: 'application', variantGroupId: 'math10-mid1-domain-02', recognition: 'Tìm tập xác định có căn thức và mẫu số.', reasoning: ['$x+2\\ge0$ cho $x\\ge-2$.', '$x-1\\ne0$ cho $x\\ne1$. Lấy giao được $[-2;1)\\cup(1;+\\infty)$.'], mistake: 'Loại luôn điểm $x=-2$ dù căn thức bằng 0 vẫn xác định.', review: 'Phân biệt điều kiện biểu thức dưới căn “không âm” với mẫu “khác 0”.' }),
  mcq({ id: 'mock-math10-q91', topicId: 'math10-t3', questionTypeId: 'math10-qt4', content: 'Trục đối xứng của parabol $y=-x^2+6x-5$ là đường thẳng:', options: ['A. $x=-3$', 'B. $x=3$', 'C. $x=5$', 'D. $y=3$'], correctAnswer: 'B', difficulty: 'easy', outcomeIds: ['MATH10-M3-O02'], competency: 'mathematical_reasoning', cognitiveLevel: 'application', variantGroupId: 'math10-mid1-parabola-axis-02', recognition: 'Tìm trục đối xứng của parabol.', reasoning: ['$a=-1,b=6$ nên $x=-b/(2a)=-6/(-2)=3$.', 'Trục đối xứng là đường thẳng đứng $x=3$.'], mistake: 'Viết $y=3$ thay cho $x=3$.', review: 'Phân biệt hoành độ đỉnh với phương trình trục đối xứng.' }),
  mcq({ id: 'mock-math10-q92', topicId: 'math10-t4', questionTypeId: 'math10-qt19', content: 'Giá trị của $\\sin150^\\circ$ bằng:', options: ['A. $-\\frac12$', 'B. $\\frac12$', 'C. $-\\frac{\\sqrt3}{2}$', 'D. $\\frac{\\sqrt3}{2}$'], correctAnswer: 'B', difficulty: 'easy', outcomeIds: ['MATH10-M4-O01'], competency: 'mathematical_reasoning', cognitiveLevel: 'recognition', variantGroupId: 'math10-mid1-trig-value-02', recognition: 'Giá trị sin của góc bù.', reasoning: ['$150^\\circ=180^\\circ-30^\\circ$ và $\\sin(180^\\circ-\\alpha)=\\sin\\alpha$.', 'Do đó $\\sin150^\\circ=\\sin30^\\circ=1/2$.'], mistake: 'Gán dấu âm cho sin ở góc phần tư II.', review: 'Ôn dấu lượng giác và công thức góc bù.' }),
  mcq({ id: 'mock-math10-q93', topicId: 'math10-t4', questionTypeId: 'math10-qt6', content: 'Tam giác có hai cạnh dài $6$, $8$ và góc xen giữa bằng $60^\\circ$. Bình phương độ dài cạnh đối diện góc $60^\\circ$ bằng:', options: ['A. $28$', 'B. $48$', 'C. $52$', 'D. $100$'], correctAnswer: 'C', difficulty: 'medium', outcomeIds: ['MATH10-M4-O02'], competency: 'mathematical_problem_solving', cognitiveLevel: 'application', variantGroupId: 'math10-mid1-cosine-law-02', recognition: 'Dùng định lí cosin cho hai cạnh và góc xen giữa.', reasoning: ['$c^2=6^2+8^2-2\\cdot6\\cdot8\\cos60^\\circ$.', 'Thay $\\cos60^\\circ=1/2$ được $c^2=36+64-48=52$.'], mistake: 'Tính $2\\cdot6\\cdot8\\cdot1/2$ thành 96.', review: 'Tách phép tính hạng tử $2ab\\cos C$ thành một dòng riêng.' }),
  mcq({ id: 'mock-math10-q94', topicId: 'math10-t5', questionTypeId: 'math10-qt5', content: 'Trung điểm của đoạn thẳng nối $A(1;-3)$ và $B(5;1)$ có tọa độ:', options: ['A. $(2;-1)$', 'B. $(3;-1)$', 'C. $(3;2)$', 'D. $(4;-2)$'], correctAnswer: 'B', difficulty: 'easy', outcomeIds: ['MATH10-M5-O02'], competency: 'mathematical_reasoning', cognitiveLevel: 'application', variantGroupId: 'math10-mid1-midpoint-02', recognition: 'Tính tọa độ trung điểm.', reasoning: ['Hoành độ là $(1+5)/2=3$.', 'Tung độ là $(-3+1)/2=-1$, nên trung điểm là $(3;-1)$.'], mistake: 'Quên dấu âm khi cộng tung độ.', review: 'Đặt ngoặc khi cộng các tọa độ âm.' }),
  tf({ id: 'mock-math10-q95', topicId: 'math10-t3', questionTypeId: 'math10-qt4', content: 'Cho hàm số $f(x)=-x^2+6x-5$. Xét tính đúng sai của các phát biểu sau:', statements: ['a) Trục đối xứng của đồ thị là $x=3$.', 'b) Đỉnh của parabol là $I(3;4)$.', 'c) Phương trình $f(x)=0$ có hai nghiệm $1$ và $5$.', 'd) Giá trị lớn nhất của $f(x)$ trên đoạn $[0;6]$ bằng $5$.'], correct: { a: 'Đ', b: 'Đ', c: 'Đ', d: 'S' }, analyses: ['$x=-6/[2(-1)]=3$, nên a đúng.', '$f(3)=-9+18-5=4$, nên đỉnh là $I(3;4)$ và b đúng.', '$-x^2+6x-5=-(x-1)(x-5)$, nên hai nghiệm là 1 và 5; c đúng.', 'Parabol mở xuống và đỉnh nằm trong đoạn, nên giá trị lớn nhất là $f(3)=4$, không phải 5; d sai.'], difficulty: 'hard', outcomeIds: ['MATH10-M3-O02', 'MATH10-M3-O03'], competency: 'mathematical_reasoning', cognitiveLevel: 'application', variantGroupId: 'math10-mid1-parabola-cluster-02', recognition: 'Đọc các đặc trưng và cực trị của parabol.', mistake: 'Lấy một nghiệm của phương trình làm giá trị lớn nhất.', review: 'Ôn vai trò của đỉnh đối với parabol mở xuống.' }),
  tf({ id: 'mock-math10-q96', topicId: 'math10-t5', questionTypeId: 'math10-qt7', content: 'Cho $\\vec a=(1;3)$ và $\\vec b=(3;-1)$. Xét tính đúng sai của các phát biểu sau:', statements: ['a) $\\vec a\\cdot\\vec b=0$.', 'b) $|\\vec a|=|\\vec b|=\\sqrt{10}$.', 'c) $\\vec a+\\vec b=(4;2)$.', 'd) Côsin của góc giữa $\\vec a$ và $\\vec b$ bằng $-1$.'], correct: { a: 'Đ', b: 'Đ', c: 'Đ', d: 'S' }, analyses: ['$1\\cdot3+3\\cdot(-1)=0$, nên a đúng.', 'Hai độ dài lần lượt là $\\sqrt{1^2+3^2}$ và $\\sqrt{3^2+(-1)^2}$, đều bằng $\\sqrt{10}$.', 'Cộng tọa độ được $(1+3;3-1)=(4;2)$, nên c đúng.', 'Tích vô hướng bằng 0 nên hai vectơ vuông góc và côsin bằng 0, không phải $-1$.'], difficulty: 'medium', outcomeIds: ['MATH10-M5-O01', 'MATH10-M5-O03'], competency: 'mathematical_reasoning', cognitiveLevel: 'application', variantGroupId: 'math10-mid1-vector-cluster-02', recognition: 'Liên hệ tích vô hướng với góc giữa hai vectơ.', mistake: 'Cho rằng hai vectơ đối nhau chỉ vì một tọa độ trái dấu.', review: 'Ôn điều kiện cùng phương, ngược hướng và vuông góc.' }),
  short({ id: 'mock-math10-q97', topicId: 'math10-t2', questionTypeId: 'math10-qt3', content: 'Tìm giá trị lớn nhất của $F=2x+5y$ trên miền nghiệm $x\\ge0$, $y\\ge0$, $x+y\\le7$, $x+2y\\le10$. Chỉ nhập giá trị lớn nhất.', correctAnswer: '25', acceptedAnswers: ['25', '25.0', '25,0'], difficulty: 'hard', outcomeIds: ['MATH10-M2-O02', 'MATH10-M2-O03'], competency: 'mathematical_modeling', cognitiveLevel: 'application', variantGroupId: 'math10-mid1-linear-programming-short-02', recognition: 'Tối ưu hàm tuyến tính trên miền nghiệm.', reasoning: ['Các đỉnh là $(0;0)$, $(7;0)$, giao của $x+y=7$ và $x+2y=10$ là $(4;3)$, cùng với $(0;5)$.', 'Giá trị $F$ tương ứng là $0,14,23,25$. Vậy giá trị lớn nhất bằng $25$ tại $(0;5)$.'], mistake: 'Mặc định giao điểm hai đường biên luôn cho giá trị lớn nhất.', review: 'Tính hàm mục tiêu tại tất cả các đỉnh khả thi.' }),
  short({ id: 'mock-math10-q98', topicId: 'math10-t4', questionTypeId: 'math10-qt6', content: 'Tam giác có hai cạnh dài $5$ và $9$, góc xen giữa bằng $60^\\circ$. Tính bình phương độ dài cạnh đối diện góc $60^\\circ$.', correctAnswer: '61', acceptedAnswers: ['61', '61.0', '61,0'], difficulty: 'medium', outcomeIds: ['MATH10-M4-O02'], competency: 'mathematical_problem_solving', cognitiveLevel: 'application', variantGroupId: 'math10-mid1-cosine-law-short-02', recognition: 'Áp dụng định lí cosin.', reasoning: ['$c^2=5^2+9^2-2\\cdot5\\cdot9\\cos60^\\circ$.', 'Suy ra $c^2=25+81-45=61$.'], mistake: 'Khai căn dù đề chỉ yêu cầu bình phương độ dài.', review: 'Xác định rõ đề hỏi $c$ hay $c^2$.' }),

  // Giữa học kỳ II – Mã A: 8 câu nhiều lựa chọn bổ sung.
  mcq({ id: 'math10-assess-mid2-a-q11', topicId: 'math10-t6', questionTypeId: 'math10-qt8', content: 'Một cửa hàng có 5 loại vở và 4 loại bút. Học sinh chỉ mua một loại vở hoặc một loại bút. Có bao nhiêu cách chọn?', options: ['A. 9', 'B. 20', 'C. 5', 'D. 4'], correctAnswer: 'A', difficulty: 'easy', outcomeIds: ['MATH10-M6-O01'], competency: 'mathematical_reasoning', cognitiveLevel: 'understanding', variantGroupId: 'math10-mid2-sum-rule-02', recognition: 'Hai phương án lựa chọn loại trừ nhau nên dùng quy tắc cộng.', reasoning: ['Chọn vở có 5 cách; chọn bút có 4 cách.', 'Vì chỉ chọn một trong hai loại, tổng số cách là $5+4=9$.'], mistake: 'Dùng quy tắc nhân dù không chọn đồng thời cả vở và bút.', review: 'Phân biệt tình huống “hoặc” với tình huống nhiều công đoạn liên tiếp.' }),
  mcq({ id: 'math10-assess-mid2-a-q12', topicId: 'math10-t6', questionTypeId: 'math10-qt9', content: 'Từ 7 học sinh, chọn và xếp 3 học sinh vào ba vị trí khác nhau. Số cách là:', options: ['A. 35', 'B. 105', 'C. 210', 'D. 343'], correctAnswer: 'C', difficulty: 'medium', outcomeIds: ['MATH10-M6-O02'], competency: 'mathematical_problem_solving', cognitiveLevel: 'application', variantGroupId: 'math10-mid2-arrangement-02', recognition: 'Chọn có xét thứ tự nên dùng chỉnh hợp.', reasoning: ['Ba vị trí khác nhau làm thứ tự học sinh có ý nghĩa.', '$A_7^3=7\\cdot6\\cdot5=210$.'], mistake: 'Dùng tổ hợp $C_7^3$ và bỏ qua thứ tự.', review: 'Tìm từ khóa “vị trí khác nhau”, “xếp” hoặc “chức vụ”.' }),
  mcq({ id: 'math10-assess-mid2-a-q13', topicId: 'math10-t6', questionTypeId: 'math10-qt10', content: 'Hệ số của $x^3$ trong khai triển $(1+x)^6$ là:', options: ['A. 15', 'B. 20', 'C. 30', 'D. 60'], correctAnswer: 'B', difficulty: 'medium', outcomeIds: ['MATH10-M6-O03'], competency: 'mathematical_reasoning', cognitiveLevel: 'application', variantGroupId: 'math10-mid2-newton-mcq-02', recognition: 'Đọc hệ số từ khai triển nhị thức Newton.', reasoning: ['Số hạng chứa $x^3$ có hệ số $C_6^3$.', '$C_6^3=6\\cdot5\\cdot4/(3\\cdot2\\cdot1)=20$.'], mistake: 'Lấy $6^3$ hoặc $C_6^2$.', review: 'Ôn số hạng tổng quát $C_n^k a^{n-k}b^k$.' }),
  mcq({ id: 'math10-assess-mid2-a-q14', topicId: 'math10-t7', questionTypeId: 'math10-qt11', content: 'Số trung bình của mẫu $4,6,7,9,9$ bằng:', options: ['A. 6', 'B. 7', 'C. 7,5', 'D. 9'], correctAnswer: 'B', difficulty: 'easy', outcomeIds: ['MATH10-M7-O01'], competency: 'mathematical_modeling', cognitiveLevel: 'application', variantGroupId: 'math10-mid2-central-tendency-02', recognition: 'Tính số trung bình cộng của mẫu số liệu.', reasoning: ['Tổng các giá trị là $4+6+7+9+9=35$.', 'Có 5 quan sát nên số trung bình là $35/5=7$.'], mistake: 'Chia cho số giá trị phân biệt thay vì số quan sát.', review: 'Đếm cả các giá trị lặp khi xác định cỡ mẫu.' }),
  mcq({ id: 'math10-assess-mid2-a-q15', topicId: 'math10-t7', questionTypeId: 'math10-qt12', content: 'Khoảng tứ phân vị của mẫu $1,2,3,4,5,6,7$ bằng:', options: ['A. 2', 'B. 3', 'C. 4', 'D. 6'], correctAnswer: 'C', difficulty: 'medium', outcomeIds: ['MATH10-M7-O02'], competency: 'mathematical_reasoning', cognitiveLevel: 'application', variantGroupId: 'math10-mid2-iqr-02', recognition: 'Tính $Q_1,Q_3$ rồi lấy hiệu.', reasoning: ['Trung vị là 4; nửa dưới $1,2,3$ có $Q_1=2$, nửa trên $5,6,7$ có $Q_3=6$.', '$IQR=Q_3-Q_1=6-2=4$.'], mistake: 'Dùng khoảng biến thiên $7-1$ thay cho khoảng tứ phân vị.', review: 'Tách mẫu thành hai nửa sau khi xác định trung vị.' }),
  mcq({ id: 'math10-assess-mid2-a-q16', topicId: 'math10-t7', questionTypeId: 'math10-qt13', content: 'Một hộp có 4 bi đỏ và 3 bi xanh. Lấy đồng thời 2 bi. Xác suất lấy được 2 bi đỏ là:', options: ['A. $\\frac17$', 'B. $\\frac27$', 'C. $\\frac37$', 'D. $\\frac47$'], correctAnswer: 'B', difficulty: 'medium', outcomeIds: ['MATH10-M7-O03'], competency: 'mathematical_problem_solving', cognitiveLevel: 'application', variantGroupId: 'math10-mid2-probability-pair-02', recognition: 'Xác suất chọn đồng thời hai phần tử không xét thứ tự.', reasoning: ['Số cách lấy 2 bi bất kỳ là $C_7^2=21$.', 'Số cách lấy 2 bi đỏ là $C_4^2=6$, nên xác suất bằng $6/21=2/7$.'], mistake: 'Nhân $4/7$ với $4/7$ như lấy có hoàn lại.', review: 'Với phép lấy đồng thời, dùng tổ hợp cho cả biến cố và không gian mẫu.' }),
  mcq({ id: 'math10-assess-mid2-a-q17', topicId: 'math10-t6', questionTypeId: 'math10-qt8', content: 'Từ các chữ số $0,1,2,3,4$, lập được bao nhiêu số chẵn có ba chữ số khác nhau?', options: ['A. 24', 'B. 30', 'C. 36', 'D. 48'], correctAnswer: 'B', difficulty: 'hard', outcomeIds: ['MATH10-M6-O01', 'MATH10-M6-O02'], competency: 'mathematical_problem_solving', cognitiveLevel: 'application', variantGroupId: 'math10-mid2-counting-constraint-02', recognition: 'Bài đếm có điều kiện chữ số đầu và chữ số tận cùng.', reasoning: ['Tận cùng 0: hàng trăm có 4 cách, hàng chục 3 cách, được 12 số.', 'Tận cùng 2 hoặc 4: có 2 cách chọn hàng đơn vị; hàng trăm có 3 cách khác 0 và khác hàng đơn vị; hàng chục có 3 cách. Được $2\\cdot3\\cdot3=18$ số. Tổng $12+18=30$.'], mistake: 'Cho chữ số hàng trăm bằng 0 hoặc không tách trường hợp tận cùng 0.', review: 'Với số tự nhiên có chữ số 0, luôn xử lí riêng vị trí đầu tiên.' }),
  mcq({ id: 'math10-assess-mid2-a-q18', topicId: 'math10-t7', questionTypeId: 'math10-qt12', content: 'Phương sai của mẫu số liệu $1,3,5$ bằng:', options: ['A. $2$', 'B. $\\frac83$', 'C. $3$', 'D. $\\sqrt{\\frac83}$'], correctAnswer: 'B', difficulty: 'hard', outcomeIds: ['MATH10-M7-O02'], competency: 'mathematical_modeling', cognitiveLevel: 'application', variantGroupId: 'math10-mid2-variance-02', recognition: 'Tính phương sai từ độ lệch so với số trung bình.', reasoning: ['Số trung bình là $(1+3+5)/3=3$.', 'Phương sai là $[(1-3)^2+(3-3)^2+(5-3)^2]/3=(4+0+4)/3=8/3$.'], mistake: 'Lấy căn kết quả và trả lời độ lệch chuẩn.', review: 'Phân biệt phương sai $s^2$ với độ lệch chuẩn $s$.' }),
  tf({ id: 'math10-assess-mid2-a-q19', topicId: 'math10-t6', questionTypeId: 'math10-qt9', content: 'Xét việc chọn và sắp xếp các phần tử từ một tập có 5 phần tử. Đánh giá các phát biểu:', statements: ['a) Số cách chọn 2 phần tử không xét thứ tự là 10.', 'b) Số cách chọn và xếp 2 phần tử vào hai vị trí là 20.', 'c) Số hoán vị của 5 phần tử là 120.', 'd) $C_5^2=A_5^2$.'], correct: { a: 'Đ', b: 'Đ', c: 'Đ', d: 'S' }, analyses: ['$C_5^2=5\\cdot4/2=10$, nên a đúng.', '$A_5^2=5\\cdot4=20$, nên b đúng.', '$5!=120$, nên c đúng.', '$C_5^2=10$ còn $A_5^2=20$, vì chỉnh hợp có xét thứ tự; d sai.'], difficulty: 'medium', outcomeIds: ['MATH10-M6-O02'], competency: 'mathematical_reasoning', cognitiveLevel: 'application', variantGroupId: 'math10-mid2-combinatorics-cluster-02', recognition: 'Phân biệt tổ hợp, chỉnh hợp và hoán vị.', mistake: 'Dùng cùng một công thức cho bài toán có xét và không xét thứ tự.', review: 'Xác định thứ tự có tạo ra kết quả mới hay không trước khi chọn công thức.' }),
  tf({ id: 'math10-assess-mid2-a-q20', topicId: 'math10-t7', questionTypeId: 'math10-qt13', content: 'Một hộp có 3 bi đỏ và 2 bi xanh; lấy đồng thời 2 bi. Đánh giá các phát biểu:', statements: ['a) Không gian mẫu có 10 cách lấy.', 'b) Xác suất lấy hai bi đỏ bằng $\\frac3{10}$.', 'c) Xác suất lấy một bi mỗi màu bằng $\\frac35$.', 'd) Xác suất lấy hai bi xanh bằng $\\frac15$.'], correct: { a: 'Đ', b: 'Đ', c: 'Đ', d: 'S' }, analyses: ['Có $C_5^2=10$ cặp bi, nên a đúng.', 'Có $C_3^2=3$ cặp đỏ, xác suất $3/10$; b đúng.', 'Có $3\\cdot2=6$ cặp một đỏ một xanh, xác suất $6/10=3/5$; c đúng.', 'Có $C_2^2=1$ cặp xanh, xác suất $1/10$, không phải $1/5$; d sai.'], difficulty: 'hard', outcomeIds: ['MATH10-M7-O03'], competency: 'mathematical_problem_solving', cognitiveLevel: 'application', variantGroupId: 'math10-mid2-probability-cluster-02', recognition: 'Đếm biến cố khi lấy đồng thời hai bi.', mistake: 'Dùng mẫu số 25 như hai lần lấy độc lập có hoàn lại.', review: 'Mô hình hóa phép lấy đồng thời bằng các tổ hợp.' }),
  short({ id: 'math10-assess-mid2-a-q21', topicId: 'math10-t6', questionTypeId: 'math10-qt9', content: 'Một lớp có 5 học sinh nữ và 4 học sinh nam. Có bao nhiêu cách chọn ban 5 người gồm đúng 2 nữ và 3 nam?', correctAnswer: '40', acceptedAnswers: ['40', '40 cách'], difficulty: 'hard', outcomeIds: ['MATH10-M6-O02'], competency: 'mathematical_problem_solving', cognitiveLevel: 'application', variantGroupId: 'math10-mid2-combination-short-02', recognition: 'Chọn độc lập số người từ hai nhóm với số lượng đã ấn định.', reasoning: ['Chọn 2 trong 5 nữ có $C_5^2=10$ cách.', 'Chọn 3 trong 4 nam có $C_4^3=4$ cách. Theo quy tắc nhân có $10\\cdot4=40$ cách.'], mistake: 'Dùng $C_9^5$ nên đếm cả các ban không đúng cơ cấu.', review: 'Tách từng nhóm theo điều kiện rồi nhân số cách.' }),
  short({ id: 'math10-assess-mid2-a-q22', topicId: 'math10-t7', questionTypeId: 'math10-qt13', content: 'Gieo hai xúc xắc cân đối. Xác suất để tổng số chấm bằng 9 là bao nhiêu?', correctAnswer: '1/9', acceptedAnswers: ['1/9', '0.111111', '0,111111'], difficulty: 'hard', outcomeIds: ['MATH10-M7-O03'], competency: 'mathematical_problem_solving', cognitiveLevel: 'application', variantGroupId: 'math10-mid2-dice-short-02', recognition: 'Đếm các cặp có thứ tự trong không gian mẫu hai xúc xắc.', reasoning: ['Không gian mẫu có $6\\cdot6=36$ kết quả đồng khả năng.', 'Tổng bằng 9 ở các cặp $(3,6),(4,5),(5,4),(6,3)$: có 4 kết quả. Xác suất là $4/36=1/9$.'], mistake: 'Gộp $(3,6)$ và $(6,3)$ thành một kết quả.', review: 'Liệt kê cặp có thứ tự hoặc lập bảng tổng hai xúc xắc.' }),

  // Giữa học kỳ II – Mã B: các câu song song.
  mcq({ id: 'math10-assess-mid2-b-q11', topicId: 'math10-t6', questionTypeId: 'math10-qt8', content: 'Một bữa ăn gồm một món chính trong 6 món và một đồ uống trong 3 loại. Có bao nhiêu cách chọn bữa ăn?', options: ['A. 9', 'B. 12', 'C. 18', 'D. 36'], correctAnswer: 'C', difficulty: 'easy', outcomeIds: ['MATH10-M6-O01'], competency: 'mathematical_reasoning', cognitiveLevel: 'understanding', variantGroupId: 'math10-mid2-sum-rule-02', recognition: 'Hai công đoạn liên tiếp nên dùng quy tắc nhân.', reasoning: ['Món chính có 6 cách và với mỗi món chính có 3 cách chọn đồ uống.', 'Tổng số bữa ăn là $6\\cdot3=18$.'], mistake: 'Dùng quy tắc cộng vì thấy hai nhóm lựa chọn.', review: 'Nếu kết quả cuối cùng cần một lựa chọn từ mỗi nhóm, dùng quy tắc nhân.' }),
  mcq({ id: 'math10-assess-mid2-b-q12', topicId: 'math10-t6', questionTypeId: 'math10-qt9', content: 'Từ 6 vận động viên, chọn và xếp 4 người vào bốn làn chạy khác nhau. Số cách là:', options: ['A. 15', 'B. 120', 'C. 360', 'D. 1296'], correctAnswer: 'C', difficulty: 'medium', outcomeIds: ['MATH10-M6-O02'], competency: 'mathematical_problem_solving', cognitiveLevel: 'application', variantGroupId: 'math10-mid2-arrangement-02', recognition: 'Chọn có xét thứ tự vào các vị trí phân biệt.', reasoning: ['Bốn làn chạy khác nhau nên thứ tự phân công có ý nghĩa.', '$A_6^4=6\\cdot5\\cdot4\\cdot3=360$.'], mistake: 'Dùng $C_6^4$ vì chỉ chú ý từ “chọn”.', review: 'Xem các vị trí sau khi chọn có phân biệt hay không.' }),
  mcq({ id: 'math10-assess-mid2-b-q13', topicId: 'math10-t6', questionTypeId: 'math10-qt10', content: 'Hệ số của $x^2$ trong khai triển $(2+x)^5$ là:', options: ['A. 40', 'B. 80', 'C. 120', 'D. 160'], correctAnswer: 'B', difficulty: 'medium', outcomeIds: ['MATH10-M6-O03'], competency: 'mathematical_reasoning', cognitiveLevel: 'application', variantGroupId: 'math10-mid2-newton-mcq-02', recognition: 'Tìm hệ số số hạng trong nhị thức Newton.', reasoning: ['Số hạng chứa $x^2$ là $C_5^2\\,2^{5-2}x^2$.', 'Hệ số bằng $10\\cdot8=80$.'], mistake: 'Dùng $2^2$ thay cho $2^{5-2}$.', review: 'Theo dõi đồng thời số mũ của hai hạng trong số hạng tổng quát.' }),
  mcq({ id: 'math10-assess-mid2-b-q14', topicId: 'math10-t7', questionTypeId: 'math10-qt11', content: 'Trung vị của mẫu $3,4,8,9,10$ bằng:', options: ['A. 4', 'B. 6', 'C. 8', 'D. 9'], correctAnswer: 'C', difficulty: 'easy', outcomeIds: ['MATH10-M7-O01'], competency: 'mathematical_modeling', cognitiveLevel: 'application', variantGroupId: 'math10-mid2-central-tendency-02', recognition: 'Tìm trung vị của mẫu có số quan sát lẻ.', reasoning: ['Mẫu đã được sắp tăng và có 5 quan sát.', 'Vị trí giữa là vị trí thứ 3, có giá trị 8.'], mistake: 'Tính số trung bình thay cho trung vị.', review: 'Sau khi sắp xếp, xác định một hoặc hai vị trí giữa.' }),
  mcq({ id: 'math10-assess-mid2-b-q15', topicId: 'math10-t7', questionTypeId: 'math10-qt12', content: 'Khoảng tứ phân vị của mẫu $2,4,6,8,10,12,14,16$ bằng:', options: ['A. 6', 'B. 8', 'C. 10', 'D. 14'], correctAnswer: 'B', difficulty: 'medium', outcomeIds: ['MATH10-M7-O02'], competency: 'mathematical_reasoning', cognitiveLevel: 'application', variantGroupId: 'math10-mid2-iqr-02', recognition: 'Tìm khoảng tứ phân vị của mẫu có số quan sát chẵn.', reasoning: ['Nửa dưới $2,4,6,8$ có $Q_1=(4+6)/2=5$; nửa trên $10,12,14,16$ có $Q_3=(12+14)/2=13$.', '$IQR=13-5=8$.'], mistake: 'Tính $Q_1=4,Q_3=14$ do chọn sai vị trí giữa của mỗi nửa.', review: 'Tính trung vị riêng cho từng nửa dữ liệu.' }),
  mcq({ id: 'math10-assess-mid2-b-q16', topicId: 'math10-t7', questionTypeId: 'math10-qt13', content: 'Một hộp có 5 bi trắng và 2 bi đen. Lấy đồng thời 2 bi. Xác suất lấy được 2 bi trắng là:', options: ['A. $\\frac5{21}$', 'B. $\\frac{10}{21}$', 'C. $\\frac57$', 'D. $\\frac23$'], correctAnswer: 'B', difficulty: 'medium', outcomeIds: ['MATH10-M7-O03'], competency: 'mathematical_problem_solving', cognitiveLevel: 'application', variantGroupId: 'math10-mid2-probability-pair-02', recognition: 'Xác suất chọn hai phần tử cùng loại không xét thứ tự.', reasoning: ['Có $C_7^2=21$ cách lấy 2 bi.', 'Có $C_5^2=10$ cách lấy 2 bi trắng, nên xác suất là $10/21$.'], mistake: 'Lấy $5/7$ làm xác suất dù đề yêu cầu hai bi.', review: 'Đếm số cặp thuận lợi và tổng số cặp.' }),
  mcq({ id: 'math10-assess-mid2-b-q17', topicId: 'math10-t6', questionTypeId: 'math10-qt8', content: 'Từ các chữ số $0,1,2,3,4$, lập được bao nhiêu số lẻ có ba chữ số khác nhau?', options: ['A. 12', 'B. 18', 'C. 24', 'D. 30'], correctAnswer: 'B', difficulty: 'hard', outcomeIds: ['MATH10-M6-O01', 'MATH10-M6-O02'], competency: 'mathematical_problem_solving', cognitiveLevel: 'application', variantGroupId: 'math10-mid2-counting-constraint-02', recognition: 'Đếm số có điều kiện chẵn/lẻ và chữ số đầu khác 0.', reasoning: ['Hàng đơn vị có 2 cách chọn: 1 hoặc 3.', 'Sau khi chọn hàng đơn vị, hàng trăm có 3 cách khác 0 và khác hàng đơn vị; hàng chục còn 3 cách. Tổng $2\\cdot3\\cdot3=18$.'], mistake: 'Cho hàng trăm bằng 0.', review: 'Xếp thứ tự chọn các vị trí có ràng buộc mạnh trước.' }),
  mcq({ id: 'math10-assess-mid2-b-q18', topicId: 'math10-t7', questionTypeId: 'math10-qt12', content: 'Phương sai của mẫu số liệu $0,2,4$ bằng:', options: ['A. $2$', 'B. $\\frac83$', 'C. $4$', 'D. $\\sqrt{\\frac83}$'], correctAnswer: 'B', difficulty: 'hard', outcomeIds: ['MATH10-M7-O02'], competency: 'mathematical_modeling', cognitiveLevel: 'application', variantGroupId: 'math10-mid2-variance-02', recognition: 'Tính phương sai của mẫu nhỏ.', reasoning: ['Số trung bình là 2.', 'Phương sai bằng $[(0-2)^2+(2-2)^2+(4-2)^2]/3=8/3$.'], mistake: 'Chia cho 2 theo công thức phương sai mẫu hiệu chỉnh ngoài phạm vi bài học.', review: 'Dùng đúng công thức phương sai trong chương trình phổ thông.' }),
  tf({ id: 'math10-assess-mid2-b-q19', topicId: 'math10-t6', questionTypeId: 'math10-qt9', content: 'Xét việc chọn và sắp xếp các phần tử từ một tập có 6 phần tử. Đánh giá các phát biểu:', statements: ['a) Số cách chọn 2 phần tử không xét thứ tự là 15.', 'b) Số cách chọn và xếp 2 phần tử vào hai vị trí là 30.', 'c) Số hoán vị của 6 phần tử là 720.', 'd) $C_6^2=A_6^2$.'], correct: { a: 'Đ', b: 'Đ', c: 'Đ', d: 'S' }, analyses: ['$C_6^2=6\\cdot5/2=15$, nên a đúng.', '$A_6^2=6\\cdot5=30$, nên b đúng.', '$6!=720$, nên c đúng.', '$15\\ne30$; tổ hợp không xét thứ tự còn chỉnh hợp có xét thứ tự, nên d sai.'], difficulty: 'medium', outcomeIds: ['MATH10-M6-O02'], competency: 'mathematical_reasoning', cognitiveLevel: 'application', variantGroupId: 'math10-mid2-combinatorics-cluster-02', recognition: 'So sánh các mô hình đếm cơ bản.', mistake: 'Không phân biệt thứ tự có ý nghĩa hay không.', review: 'Gắn mỗi công thức với một câu hỏi nhận diện cụ thể.' }),
  tf({ id: 'math10-assess-mid2-b-q20', topicId: 'math10-t7', questionTypeId: 'math10-qt13', content: 'Một hộp có 4 bi trắng và 1 bi đen; lấy đồng thời 2 bi. Đánh giá các phát biểu:', statements: ['a) Không gian mẫu có 10 cách lấy.', 'b) Xác suất lấy hai bi trắng bằng $\\frac35$.', 'c) Xác suất lấy một bi mỗi màu bằng $\\frac25$.', 'd) Xác suất lấy ít nhất một bi đen bằng $\\frac15$.'], correct: { a: 'Đ', b: 'Đ', c: 'Đ', d: 'S' }, analyses: ['Có $C_5^2=10$ cặp, nên a đúng.', 'Có $C_4^2=6$ cặp trắng, xác suất $6/10=3/5$; b đúng.', 'Có $4\\cdot1=4$ cặp một trắng một đen, xác suất $4/10=2/5$; c đúng.', 'Chỉ có một bi đen nên “ít nhất một bi đen” chính là “một bi mỗi màu”, xác suất $2/5$, không phải $1/5$; d sai.'], difficulty: 'hard', outcomeIds: ['MATH10-M7-O03'], competency: 'mathematical_problem_solving', cognitiveLevel: 'application', variantGroupId: 'math10-mid2-probability-cluster-02', recognition: 'Đếm biến cố bù và biến cố có ít nhất một phần tử.', mistake: 'Lấy tỉ lệ bi đen trong hộp làm xác suất của biến cố lấy hai bi.', review: 'Biểu diễn biến cố bằng số cặp thuận lợi.' }),
  short({ id: 'math10-assess-mid2-b-q21', topicId: 'math10-t6', questionTypeId: 'math10-qt9', content: 'Một nhóm có 4 nữ và 3 nam. Có bao nhiêu cách chọn 3 người gồm đúng 1 nữ và 2 nam?', correctAnswer: '12', acceptedAnswers: ['12', '12 cách'], difficulty: 'hard', outcomeIds: ['MATH10-M6-O02'], competency: 'mathematical_problem_solving', cognitiveLevel: 'application', variantGroupId: 'math10-mid2-combination-short-02', recognition: 'Chọn theo cơ cấu từ hai nhóm.', reasoning: ['Chọn 1 trong 4 nữ có $C_4^1=4$ cách.', 'Chọn 2 trong 3 nam có $C_3^2=3$ cách. Tổng số nhóm là $4\\cdot3=12$.'], mistake: 'Dùng $C_7^3$ và không áp dụng điều kiện cơ cấu.', review: 'Tách biến cố chọn theo từng nhóm rồi dùng quy tắc nhân.' }),
  short({ id: 'math10-assess-mid2-b-q22', topicId: 'math10-t7', questionTypeId: 'math10-qt13', content: 'Gieo hai xúc xắc cân đối. Xác suất để tổng số chấm bằng 10 là bao nhiêu?', correctAnswer: '1/12', acceptedAnswers: ['1/12', '0.083333', '0,083333'], difficulty: 'hard', outcomeIds: ['MATH10-M7-O03'], competency: 'mathematical_problem_solving', cognitiveLevel: 'application', variantGroupId: 'math10-mid2-dice-short-02', recognition: 'Đếm các cặp có thứ tự cho tổng xác định.', reasoning: ['Có 36 kết quả đồng khả năng.', 'Tổng bằng 10 ở $(4,6),(5,5),(6,4)$, có 3 kết quả. Xác suất $3/36=1/12$.'], mistake: 'Bỏ trường hợp hai xúc xắc cùng ra 5.', review: 'Liệt kê có hệ thống các cặp từ giá trị nhỏ đến lớn.' })
];

const answerText = (answer: TrueFalseSeed['correct']) =>
  `a: ${answer.a}; b: ${answer.b}; c: ${answer.c}; d: ${answer.d}`;

const acceptedTrueFalse = (answer: TrueFalseSeed['correct']): StructuredAnswer[] => [
  answer,
  { a: answer.a.toLowerCase(), b: answer.b.toLowerCase(), c: answer.c.toLowerCase(), d: answer.d.toLowerCase() },
  {
    a: answer.a === 'Đ' ? 'D' : 'S',
    b: answer.b === 'Đ' ? 'D' : 'S',
    c: answer.c === 'Đ' ? 'D' : 'S',
    d: answer.d === 'Đ' ? 'D' : 'S'
  }
];

const pointsFor = (seed: Seed) => seed.kind === 'mcq' ? 0.25 : seed.kind === 'true_false' ? 1 : 0.5;

const toQuestion = (seed: Seed): Question => {
  const common = {
    id: seed.id,
    subjectId: 'math' as const,
    topicId: seed.topicId,
    questionTypeId: seed.questionTypeId,
    content: seed.content,
    difficulty: seed.difficulty,
    sourceType: 'mock_exam' as const,
    points: pointsFor(seed),
    outcomeIds: seed.outcomeIds,
    competency: seed.competency,
    cognitiveLevel: seed.cognitiveLevel,
    variantGroupId: seed.variantGroupId
  };

  if (seed.kind === 'mcq') {
    return {
      ...common,
      responseType: 'single_choice',
      options: seed.options,
      correctAnswer: seed.correctAnswer,
      acceptedAnswers: [seed.correctAnswer, seed.correctAnswer.toLowerCase()],
      validatorType: 'choice'
    };
  }

  if (seed.kind === 'short') {
    return {
      ...common,
      responseType: 'short_answer',
      correctAnswer: seed.correctAnswer,
      acceptedAnswers: seed.acceptedAnswers,
      validatorType: 'number'
    };
  }

  const correctAnswer = answerText(seed.correct);
  return {
    ...common,
    responseType: 'true_false_cluster',
    correctAnswer,
    validatorType: 'exact',
    answerSchema: {
      type: 'true-false-cluster',
      proofImageRequired: false,
      autoCheckMode: 'exact',
      fields: (['a', 'b', 'c', 'd'] as const).map((key, index) => ({
        key,
        label: seed.statements[index],
        valueType: 'choice',
        placeholder: 'Đ hoặc S',
        hint: 'Chọn Đúng hoặc Sai'
      }))
    },
    correctFinalAnswer: seed.correct,
    acceptedFinalAnswers: acceptedTrueFalse(seed.correct)
  };
};

const toSolution = (seed: Seed): Solution => {
  const finalAnswer = seed.kind === 'true_false' ? answerText(seed.correct) : seed.correctAnswer;
  const detailedSteps = seed.kind === 'true_false'
    ? seed.analyses.map((explanation, index) => ({
        order: index + 1,
        title: `Phân tích phát biểu ${String.fromCharCode(97 + index)}`,
        explanation,
        result: `${String.fromCharCode(97 + index)}) ${seed.correct[String.fromCharCode(97 + index) as keyof typeof seed.correct]}`
      }))
    : [
        ...seed.reasoning.map((explanation, index) => ({
          order: index + 1,
          title: index === 0 ? 'Chọn phương pháp và xử lí dữ kiện' : 'Tính toán và rút gọn',
          explanation
        })),
        {
          order: seed.reasoning.length + 1,
          title: 'Đối chiếu và kết luận',
          explanation: seed.kind === 'mcq'
            ? `Kết quả khớp với phương án ${seed.correctAnswer}.`
            : `Giá trị cần nhập là ${seed.correctAnswer}.`,
          result: finalAnswer
        }
      ];

  return {
    id: seed.id.replace('-q', '-s'),
    questionId: seed.id,
    recognition: seed.recognition,
    detailedSteps,
    finalAnswer,
    commonMistakes: [seed.mistake],
    reviewSuggestions: [seed.review]
  };
};

export const g10MathMidtermExpansionQuestions: Question[] = g10MathMidtermExpansionSeeds.map(toQuestion);
export const g10MathMidtermExpansionSolutions: Solution[] = g10MathMidtermExpansionSeeds.map(toSolution);
