import type { CourseQuestion } from '@/data/schema';
import type {
  AssessmentCognitiveLevel,
  PracticeRole,
  QuestionRepresentationType
} from '@/types';

type Difficulty = CourseQuestion['difficulty'];
type Choice = 'A' | 'B' | 'C' | 'D';

export type Math11ExpansionSolutionData = {
  number: number;
  answer: string;
  reasoning: string;
  result: string;
  questionTypeNumber: number;
};

export const g11MathModule5ExpansionSolutionData: Math11ExpansionSolutionData[] = [];

const base = (
  number: number,
  questionTypeNumber: number,
  subType: string,
  role: PracticeRole,
  representationType: QuestionRepresentationType,
  difficulty: Difficulty,
  cognitiveLevel: AssessmentCognitiveLevel,
  content: string,
  answer: string,
  reasoning: string,
  result: string
): CourseQuestion => {
  g11MathModule5ExpansionSolutionData.push({
    number,
    answer,
    reasoning,
    result,
    questionTypeNumber
  });
  return {
    id: `math11-q${number}`,
    courseId: 'grade11:math',
    moduleId: 'math11-m5',
    lessonId: `math11-kntt-l${questionTypeNumber}`,
    subjectId: 'math',
    topicId: 'math11-t05',
    questionTypeId: `math11-qt${questionTypeNumber}`,
    subTypeId: `math11-qt${questionTypeNumber}-st-${subType}`,
    practiceRole: role,
    representationType,
    isMasteryHoldout: role === 'mastery_holdout',
    content,
    responseType: 'short_answer',
    validatorType: 'exact',
    outcomeIds: [`out-math11-m5-0${questionTypeNumber - 14}`],
    correctAnswer: answer,
    difficulty,
    sourceType: 'manual',
    cognitiveLevel,
    estimatedSeconds: difficulty === 'hard' ? 150 : difficulty === 'medium' ? 90 : 45
  };
};

const mc = (
  number: number,
  qt: number,
  subType: string,
  role: PracticeRole,
  representation: QuestionRepresentationType,
  difficulty: Difficulty,
  cognitive: AssessmentCognitiveLevel,
  content: string,
  options: [string, string, string, string],
  answer: Choice,
  reasoning: string,
  result: string
): CourseQuestion => ({
  ...base(number, qt, subType, role, representation, difficulty, cognitive, content, answer, reasoning, result),
  responseType: 'single_choice',
  validatorType: 'choice',
  options
});

const short = (
  number: number,
  qt: number,
  subType: string,
  role: PracticeRole,
  representation: QuestionRepresentationType,
  difficulty: Difficulty,
  content: string,
  answer: string,
  acceptedAnswers: string[],
  reasoning: string
): CourseQuestion => ({
  ...base(number, qt, subType, role, representation, difficulty, 'application', content, answer, reasoning, answer),
  responseType: 'short_answer',
  validatorType: 'exact',
  acceptedAnswers
});

const tf = (
  number: number,
  qt: number,
  subType: string,
  role: PracticeRole,
  difficulty: Difficulty,
  content: string,
  labels: [string, string, string, string],
  values: ['Đ' | 'S', 'Đ' | 'S', 'Đ' | 'S', 'Đ' | 'S'],
  reasoning: string
): CourseQuestion => {
  const answer = `a:${values[0]}|b:${values[1]}|c:${values[2]}|d:${values[3]}`;
  return {
    ...base(number, qt, subType, role, 'text', difficulty, 'application', content, answer, reasoning, answer),
    responseType: 'true_false_cluster',
    validatorType: 'exact',
    answerSchema: {
      type: 'true-false-cluster',
      proofImageRequired: false,
      autoCheckMode: 'exact',
      scoringMode: 'per_field',
      fields: labels.map((label, index) => ({
        key: ['a', 'b', 'c', 'd'][index],
        label,
        valueType: 'choice' as const,
        required: true
      }))
    },
    correctFinalAnswer: { a: values[0], b: values[1], c: values[2], d: values[3] }
  };
};

export const g11MathModule5ExpansionQuestions: CourseQuestion[] = [
  mc(397,15,'finite','guided','equation','easy','understanding',
    'Tính $\\lim\\limits_{n\\to\\infty}\\dfrac{3n^2-n}{n^2+2}$.',
    ['$0$','$1$','$3$','$+\\infty$'],'C',
    'Chia tử và mẫu cho $n^2$; các hạng chứa $1/n$, $1/n^2$ tiến tới 0.','$3$'),
  short(398,15,'finite','near_transfer','equation','medium',
    'Tính $\\lim\\limits_{n\\to\\infty}n(\\sqrt{n^2+1}-n)$.','0.5',
    ['0.5','0,5','1/2','$1/2$'],
    'Nhân liên hợp: $n(\\sqrt{n^2+1}-n)=\\dfrac{n}{\\sqrt{n^2+1}+n}=\\dfrac1{\\sqrt{1+1/n^2}+1}\\to\\frac12$.'),
  mc(399,15,'finite','representation_switch','equation','medium','application',
    'Dùng định lí kẹp, giới hạn của dãy $u_n=\\dfrac{\\sin n}{n}$ bằng:',
    ['$-1$','$0$','$1$','Không tồn tại'],'B',
    'Vì $|\\sin n|\\le1$ nên $|u_n|\\le1/n\\to0$.','$0$'),
  tf(400,15,'finite','misconception_check','medium',
    'Xét dãy $u_n=\\dfrac{2n-1}{n+1}$. Chọn Đúng hoặc Sai.',
    ['$\\lim u_n=2$.','Dãy $(u_n)$ tăng.','$u_1=\\frac12$.','Có số hạng của dãy bằng 2.'],
    ['Đ','Đ','Đ','S'],
    'Viết $u_n=2-\\dfrac3{n+1}$: dãy tăng, luôn nhỏ hơn 2, có $u_1=1/2$ và tiến tới 2.'),
  short(401,15,'finite','far_transfer','equation','hard',
    'Cho $u_1=4$, $u_{n+1}=\\dfrac{u_n+2}{3}$. Biết dãy hội tụ, hãy tìm giới hạn.','1',
    ['1','1.0','1,0'],
    'Gọi giới hạn là $L$. Chuyển giới hạn qua hệ thức truy hồi: $L=(L+2)/3$, suy ra $L=1$.'),
  short(402,15,'finite','mastery_holdout','equation','hard',
    'Tính $\\lim\\limits_{n\\to\\infty}(\\sqrt{4n^2+3n}-2n)$.','0.75',
    ['0.75','0,75','3/4','$3/4$'],
    'Nhân liên hợp rồi chia cho $n$: biểu thức bằng $\\dfrac{3}{\\sqrt{4+3/n}+2}\\to\\dfrac34$.'),

  mc(403,15,'infinite','guided','equation','easy','application',
    'Tổng $6-2+\\dfrac23-\\dfrac29+\\cdots$ bằng:',
    ['$3$','$\\frac92$','$6$','$9$'],'B',
    'Đây là cấp số nhân lùi vô hạn với $u_1=6$, $q=-1/3$.','$\\frac92$'),
  short(404,15,'infinite','near_transfer','text','medium',
    'Viết số thập phân vô hạn tuần hoàn $0{,}272727\\ldots$ dưới dạng phân số tối giản.','3/11',
    ['3/11','$3/11$','0.272727'],
    'Đặt $x=0{,}272727\\ldots$; khi đó $100x-x=27$, nên $x=27/99=3/11$.'),
  mc(405,15,'infinite','representation_switch','equation','medium','understanding',
    'Dãy $u_n=(-2)^n$ có giới hạn nào?',
    ['$0$','$+\\infty$','$-\\infty$','Không có giới hạn'],'D',
    'Độ lớn tăng nhưng dấu luân phiên, nên dãy không tiến tới một giá trị hay một vô cực cùng dấu.','Không có giới hạn'),
  tf(406,15,'infinite','misconception_check','medium',
    'Xét chuỗi $1-\\frac12+\\frac14-\\frac18+\\cdots$. Chọn Đúng hoặc Sai.',
    ['Chuỗi hội tụ.','Công bội bằng $-\\frac12$.','Tổng bằng $\\frac23$.','Dãy các tổng riêng tăng.'],
    ['Đ','Đ','Đ','S'],
    'Chuỗi hình học có $q=-1/2$, tổng $1/(1+1/2)=2/3$; các tổng riêng dao động quanh giới hạn nên không tăng.'),
  short(407,15,'infinite','far_transfer','text','hard',
    'Một quả bóng rơi từ độ cao 10 m; sau mỗi lần chạm đất, nó nảy lên bằng một nửa độ cao trước. Tổng quãng đường chuyển động đến khi dừng là bao nhiêu mét?','30',
    ['30','30 m','30.0','30,0'],
    'Ngoài 10 m rơi đầu, mỗi độ cao nảy được đi hai lần: $10+2(5+2{,}5+\\cdots)=10+2\\cdot10=30$.'),
  short(408,15,'infinite','mastery_holdout','text','hard',
    'Một dãy hình có diện tích lần lượt là $64,16,4,1,\\ldots$. Tổng diện tích của vô hạn hình bằng bao nhiêu?','256/3',
    ['256/3','$256/3$','85.333333'],
    'Các diện tích tạo cấp số nhân với $u_1=64$, $q=1/4$; tổng là $64/(1-1/4)=256/3$.'),

  mc(409,16,'point','guided','equation','easy','application',
    'Tính $\\lim\\limits_{x\\to2}\\dfrac{x^3-8}{x-2}$.',
    ['$4$','$8$','$12$','$16$'],'C',
    'Phân tích $x^3-8=(x-2)(x^2+2x+4)$ rồi thay $x=2$.','$12$'),
  short(410,16,'point','near_transfer','equation','medium',
    'Tính $\\lim\\limits_{x\\to4}\\dfrac{\\sqrt{x+5}-3}{x-4}$.','1/6',
    ['1/6','$1/6$','0.1666667'],
    'Nhân liên hợp, rút gọn thành $1/(\\sqrt{x+5}+3)$ rồi cho $x\\to4$.'),
  mc(411,16,'point','representation_switch','graph','medium','understanding',
    'Giới hạn $\\lim\\limits_{x\\to0}\\dfrac{|x|}{x}$:',
    ['$-1$','$0$','$1$','Không tồn tại'],'D',
    'Giới hạn trái bằng $-1$ còn giới hạn phải bằng 1.','Không tồn tại'),
  tf(412,16,'point','misconception_check','medium',
    'Cho $f(x)=\\dfrac{x^2-1}{x-1}$ với $x\\ne1$. Chọn Đúng hoặc Sai.',
    ['$\\lim_{x\\to1}f(x)=2$.','$f(1)$ đang được xác định.','Có thể bổ sung $f(1)=2$ để hàm liên tục.','Hai giới hạn một phía tại 1 bằng nhau.'],
    ['Đ','S','Đ','Đ'],
    'Với $x\\ne1$, $f(x)=x+1$; giới hạn hai phía bằng 2 nhưng hàm ban đầu chưa có giá trị tại 1.'),
  short(413,16,'point','far_transfer','equation','hard',
    'Tính $\\lim\\limits_{x\\to0}\\dfrac{\\sin3x}{\\sin5x}$.','3/5',
    ['3/5','$3/5$','0.6','0,6'],
    'Tách thành $\\dfrac{\\sin3x}{3x}\\cdot\\dfrac{5x}{\\sin5x}\\cdot\\dfrac35$; hai giới hạn đặc biệt bằng 1.'),
  short(414,16,'point','mastery_holdout','equation','hard',
    'Tính $\\lim\\limits_{x\\to0}\\dfrac{\\sqrt{1+2x}-\\sqrt{1-x}}{x}$.','3/2',
    ['3/2','$3/2$','1.5','1,5'],
    'Nhân liên hợp: tử sau rút gọn là $3x$, mẫu còn $x(\\sqrt{1+2x}+\\sqrt{1-x})$, giới hạn bằng $3/2$.'),

  mc(415,16,'infinity','guided','equation','easy','application',
    'Tính $\\lim\\limits_{x\\to+\\infty}\\dfrac{2x^2-x}{x^2+1}$.',
    ['$0$','$1$','$2$','$+\\infty$'],'C',
    'Chia tử và mẫu cho $x^2$, lấy tỉ số hệ số bậc cao nhất.','$2$'),
  short(416,16,'infinity','near_transfer','equation','medium',
    'Tính $\\lim\\limits_{x\\to+\\infty}(\\sqrt{x^2+3x}-x)$.','3/2',
    ['3/2','$3/2$','1.5','1,5'],
    'Nhân liên hợp rồi chia cả tử và mẫu cho $x$: được $3/(\\sqrt{1+3/x}+1)\\to3/2$.'),
  mc(417,16,'infinity','representation_switch','graph','medium','understanding',
    'Tính $\\lim\\limits_{x\\to-\\infty}\\dfrac{\\sqrt{x^2+1}}{x}$.',
    ['$-1$','$0$','$1$','$+\\infty$'],'A',
    'Vì $\\sqrt{x^2}=|x|=-x$ khi $x<0$, tỉ số tiến tới $-1$.','$-1$'),
  tf(418,16,'infinity','misconception_check','medium',
    'Cho $f(x)=\\dfrac{3x+1}{x-2}$. Chọn Đúng hoặc Sai.',
    ['$\\lim_{x\\to+\\infty}f(x)=3$.','$\\lim_{x\\to-\\infty}f(x)=3$.','$\\lim_{x\\to2^+}f(x)=+\\infty$.','$\\lim_{x\\to2^-}f(x)=+\\infty$.'],
    ['Đ','Đ','Đ','S'],
    'Tại vô cực lấy tỉ số hệ số bằng 3; gần 2 tử dương, mẫu đổi dấu nên giới hạn trái là $-\\infty$.'),
  short(419,16,'infinity','far_transfer','equation','hard',
    'Tính $\\lim\\limits_{x\\to+\\infty}(\\sqrt{4x^2+x}-2x)$.','1/4',
    ['1/4','$1/4$','0.25','0,25'],
    'Nhân liên hợp rồi chia cho $x$: biểu thức thành $1/(\\sqrt{4+1/x}+2)\\to1/4$.'),
  short(420,16,'infinity','mastery_holdout','equation','hard',
    'Tính $\\lim\\limits_{x\\to+\\infty}x(\\sqrt{x^2+1}-x)$.','1/2',
    ['1/2','$1/2$','0.5','0,5'],
    'Nhân liên hợp được $x/(\\sqrt{x^2+1}+x)=1/(\\sqrt{1+1/x^2}+1)\\to1/2$.'),

  mc(421,17,'point','guided','equation','easy','application',
    'Cho $f(x)=x+a$ khi $x<1$ và $f(x)=x^2$ khi $x\\ge1$. Hàm liên tục tại 1 khi:',
    ['$a=-1$','$a=0$','$a=1$','$a=2$'],'B',
    'Giới hạn trái là $1+a$, còn giá trị và giới hạn phải bằng 1; suy ra $a=0$.','$a=0$'),
  short(422,17,'point','near_transfer','equation','medium',
    'Bổ sung giá trị nào tại $x=2$ để hàm $f(x)=\\dfrac{x^2-4}{x-2}$ liên tục?','4',
    ['4','4.0','4,0'],
    'Rút gọn $f(x)=x+2$ khi $x\\ne2$; giới hạn tại 2 bằng 4.'),
  mc(423,17,'point','representation_switch','graph','medium','understanding',
    'Hàm $f(x)=\\dfrac{x+1}{x^2-4}$ gián đoạn tại:',
    ['$x=-1$','$x=0$','$x=-2$ và $x=2$','Mọi số thực'],'C',
    'Mẫu bằng 0 tại $x=\\pm2$; hàm phân thức liên tục ở các điểm còn lại.','$x=\\pm2$'),
  tf(424,17,'point','misconception_check','medium',
    'Cho $f(x)=\\dfrac{x^2-4}{x-2}$ khi $x\\ne2$ và $f(2)=4$. Chọn Đúng hoặc Sai.',
    ['Hàm xác định tại 2.','$\\lim_{x\\to2}f(x)=4$.','Hàm liên tục tại 2.','Đạo hàm của hàm tại 2 bằng 0.'],
    ['Đ','Đ','Đ','S'],
    'Sau khi lấp điểm khuyết, hàm trùng với $x+2$ nên liên tục và có đạo hàm tại 2 bằng 1.'),
  short(425,17,'point','far_transfer','equation','hard',
    'Cho $f(x)=\\dfrac{x^2+ax-2}{x-1}$ khi $x\\ne1$ và $f(1)=3$. Tìm $a$ để hàm liên tục tại 1.','1',
    ['1','1.0','1,0'],
    'Muốn giới hạn hữu hạn cần tử bằng 0 tại 1: $a-1=0$. Với $a=1$, tử là $(x-1)(x+2)$ và giới hạn bằng 3.'),
  short(426,17,'point','mastery_holdout','equation','hard',
    'Cho $f(x)=\\dfrac{\\sqrt{x+3}-2}{x-1}$ khi $x\\ne1$. Phải đặt $f(1)$ bằng bao nhiêu để hàm liên tục?','1/4',
    ['1/4','$1/4$','0.25','0,25'],
    'Nhân liên hợp, với $x\\ne1$ có $f(x)=1/(\\sqrt{x+3}+2)$; giới hạn tại 1 bằng $1/4$.'),

  mc(427,17,'domain','guided','equation','easy','understanding',
    'Hàm $f(x)=\\sqrt{\\dfrac{x-1}{x+2}}$ liên tục trên:',
    ['$(-2;1)$','$(-\\infty;-2)\\cup[1;+\\infty)$','$[-2;1]$','$\\mathbb R$'],'B',
    'Giải $(x-1)/(x+2)\\ge0$ và loại $x=-2$; hàm căn liên tục trên tập xác định.','$(-\\infty;-2)\\cup[1;+\\infty)$'),
  short(428,17,'domain','near_transfer','equation','medium',
    'Hàm $f(x)=\\dfrac{x+1}{x^2-4}$ có bao nhiêu điểm gián đoạn trên $\\mathbb R$?','2',
    ['2','2.0','2,0'],
    'Mẫu bằng 0 tại hai điểm phân biệt $x=-2$ và $x=2$.'),
  mc(429,17,'domain','representation_switch','graph','medium','application',
    'Dùng định lí giá trị trung gian, phương trình $x^3+x-1=0$ chắc chắn có nghiệm trong:',
    ['$(-2;-1)$','$(-1;0)$','$(0;1)$','$(1;2)$'],'C',
    'Hàm đa thức liên tục; $f(0)=-1$, $f(1)=1$ trái dấu.','$(0;1)$'),
  tf(430,17,'domain','misconception_check','medium',
    'Chọn Đúng hoặc Sai về tính liên tục.',
    ['Mọi đa thức liên tục trên $\\mathbb R$.','Thương hai hàm liên tục luôn liên tục tại mọi điểm.','$\\tan x$ liên tục trên từng khoảng thuộc tập xác định.','Hàm liên tục tại $x_0$ thì xác định tại $x_0$.'],
    ['Đ','S','Đ','Đ'],
    'Thương chỉ liên tục nơi mẫu khác 0; các phát biểu còn lại là tính chất hoặc hệ quả trực tiếp.'),
  {
    ...short(431,17,'domain','far_transfer','table','hard',
      'Bảng cho giá trị của một hàm liên tục. Có bao nhiêu khoảng liên tiếp trong bảng chắc chắn chứa ít nhất một nghiệm của $f(x)=0$?','4',
      ['4','4.0','4,0'],
      'Giá trị đổi dấu trên cả bốn khoảng $(-2,-1)$, $(-1,0)$, $(0,1)$ và $(1,2)$; mỗi khoảng có ít nhất một nghiệm.'),
    stimulus: {
      id: 'math11-st431',
      title: 'Bảng dấu rời rạc của hàm liên tục',
      dataTable: {
        caption: 'Giá trị tại năm mốc',
        columns: [{ key: 'x', label: '$x$' }, { key: 'fx', label: '$f(x)$' }],
        rows: [{ x: -2, fx: 3 }, { x: -1, fx: -1 }, { x: 0, fx: 2 }, { x: 1, fx: -4 }, { x: 2, fx: 5 }]
      }
    }
  },
  short(432,17,'domain','mastery_holdout','equation','hard',
    'Tìm $a+b$ để $\\dfrac{x^2+ax+b}{x^2-1}$ có thể được bổ sung giá trị và trở thành hàm liên tục tại cả $x=1$ và $x=-1$.','-1',
    ['-1','-1.0','-1,0'],
    'Tử phải bằng 0 tại cả $1$ và $-1$: $1+a+b=0$, $1-a+b=0$. Suy ra $a=0$, $b=-1$, nên $a+b=-1$.')
];
