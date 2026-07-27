import type { CourseQuestion } from '@/data/schema';
import type { PracticeRole, QuestionRepresentationType } from '@/types';

type ChoiceSpec = {
  id: string;
  lessonId: string;
  questionTypeId: string;
  subTypeId: string;
  practiceRole: PracticeRole;
  representationType: QuestionRepresentationType;
  content: string;
  options: [string, string, string, string];
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  outcomeId: string;
  difficulty?: CourseQuestion['difficulty'];
  isMasteryHoldout?: boolean;
};

const q = (
  id: string,
  lessonId: string,
  questionTypeId: string,
  subTypeId: string,
  practiceRole: PracticeRole,
  representationType: QuestionRepresentationType,
  content: string,
  options: ChoiceSpec['options'],
  correctAnswer: ChoiceSpec['correctAnswer'],
  outcomeId: string,
  difficulty: CourseQuestion['difficulty'] = 'medium',
  isMasteryHoldout = false
): ChoiceSpec => ({
  id,
  lessonId,
  questionTypeId,
  subTypeId,
  practiceRole,
  representationType,
  content,
  options,
  correctAnswer,
  outcomeId,
  difficulty,
  isMasteryHoldout
});

const specs: ChoiceSpec[] = [
  q('math11-q001', 'math11-kntt-l1', 'math11-qt01', 'math11-qt01-st-values', 'guided', 'equation', 'Cho $\\sin\\alpha=\\frac35$ với $\\frac\\pi2<\\alpha<\\pi$. Giá trị của $\\cos\\alpha$ là:', ['$\\frac45$', '$-\\frac45$', '$\\frac{16}{25}$', '$-\\frac{16}{25}$'], 'B', 'out-math11-m1-01', 'easy'),
  q('math11-q002', 'math11-kntt-l1', 'math11-qt01', 'math11-qt01-st-angle', 'near_transfer', 'diagram', 'Trên đường tròn lượng giác, góc $\\frac{13\\pi}{6}$ có cùng tia cuối với góc nào?', ['$\\frac\\pi6$', '$\\frac{5\\pi}{6}$', '$\\frac{7\\pi}{6}$', '$\\frac{11\\pi}{6}$'], 'A', 'out-math11-m1-01', 'easy'),
  q('math11-q009', 'math11-kntt-l1', 'math11-qt01', 'math11-qt01-st-angle', 'representation_switch', 'diagram', 'Góc $-\\frac{7\\pi}{6}$ có cùng tia cuối với góc dương nhỏ nhất nào?', ['$\\frac\\pi6$', '$\\frac{5\\pi}{6}$', '$\\frac{7\\pi}{6}$', '$\\frac{11\\pi}{6}$'], 'B', 'out-math11-m1-01', 'easy'),
  q('math11-q010', 'math11-kntt-l1', 'math11-qt01', 'math11-qt01-st-angle', 'misconception_check', 'equation', 'Rút gọn $\\frac{17\\pi}{4}$ theo modulo $2\\pi$ về góc thuộc $[0;2\\pi)$:', ['$\\frac\\pi4$', '$\\frac{3\\pi}{4}$', '$\\frac{5\\pi}{4}$', '$\\frac{7\\pi}{4}$'], 'A', 'out-math11-m1-01', 'easy'),
  q('math11-q011', 'math11-kntt-l1', 'math11-qt01', 'math11-qt01-st-angle', 'far_transfer', 'diagram', 'Tia cuối của góc $\\frac{5\\pi}{3}$ nằm trong góc phần tư nào?', ['I', 'II', 'III', 'IV'], 'D', 'out-math11-m1-01', 'easy'),
  q('math11-q012', 'math11-kntt-l1', 'math11-qt01', 'math11-qt01-st-angle', 'retention', 'equation', 'Trong các góc sau, góc nào cùng tia cuối với $-\\frac\\pi3$?', ['$\\frac\\pi3$', '$\\frac{2\\pi}{3}$', '$\\frac{5\\pi}{3}$', '$\\frac{4\\pi}{3}$'], 'C', 'out-math11-m1-01', 'easy'),
  q('math11-q013', 'math11-kntt-l1', 'math11-qt01', 'math11-qt01-st-angle', 'mastery_holdout', 'diagram', 'Góc $\\frac{11\\pi}{2}$ có cùng tia cuối với góc nào thuộc $[0;2\\pi)$?', ['$0$', '$\\frac\\pi2$', '$\\pi$', '$\\frac{3\\pi}{2}$'], 'D', 'out-math11-m1-01', 'medium', true),
  q('math11-q014', 'math11-kntt-l1', 'math11-qt01', 'math11-qt01-st-values', 'near_transfer', 'equation', 'Cho $\\cos\\alpha=-\\frac5{13}$ và $\\pi<\\alpha<\\frac{3\\pi}{2}$. Tính $\\sin\\alpha$.', ['$\\frac{12}{13}$', '$-\\frac{12}{13}$', '$\\frac8{13}$', '$-\\frac8{13}$'], 'B', 'out-math11-m1-01'),
  q('math11-q015', 'math11-kntt-l1', 'math11-qt01', 'math11-qt01-st-values', 'misconception_check', 'equation', 'Biết $\\tan\\alpha=-\\frac34$. Giá trị của $\\cot\\alpha$ là:', ['$-\\frac43$', '$\\frac43$', '$-\\frac34$', '$\\frac34$'], 'A', 'out-math11-m1-01', 'easy'),
  q('math11-q016', 'math11-kntt-l1', 'math11-qt01', 'math11-qt01-st-values', 'representation_switch', 'diagram', 'Cho $\\cos\\alpha=\\frac{12}{13}$ và $\\frac{3\\pi}{2}<\\alpha<2\\pi$. Tính $\\sin\\alpha$.', ['$\\frac5{13}$', '$-\\frac5{13}$', '$\\frac{12}{13}$', '$-\\frac{12}{13}$'], 'B', 'out-math11-m1-01'),
  q('math11-q017', 'math11-kntt-l1', 'math11-qt01', 'math11-qt01-st-values', 'retention', 'equation', 'Cho $\\tan\\alpha=1$ và $\\pi<\\alpha<\\frac{3\\pi}{2}$. Tính $\\sin\\alpha$.', ['$\\frac{\\sqrt2}{2}$', '$-\\frac{\\sqrt2}{2}$', '$1$', '$-1$'], 'B', 'out-math11-m1-01'),
  q('math11-q018', 'math11-kntt-l1', 'math11-qt01', 'math11-qt01-st-values', 'mastery_holdout', 'equation', 'Cho $\\sin\\alpha=-\\frac8{17}$ và $\\frac{3\\pi}{2}<\\alpha<2\\pi$. Tính $\\cos\\alpha$.', ['$\\frac{15}{17}$', '$-\\frac{15}{17}$', '$\\frac9{17}$', '$-\\frac9{17}$'], 'A', 'out-math11-m1-01', 'hard', true),

  q('math11-q003', 'math11-kntt-l2', 'math11-qt02', 'math11-qt02-st-addition', 'guided', 'equation', 'Giá trị chính xác của $\\cos75^\\circ$ là:', ['$\\frac{\\sqrt6+\\sqrt2}{4}$', '$\\frac{\\sqrt6-\\sqrt2}{4}$', '$\\frac{\\sqrt3-1}{2}$', '$\\frac{\\sqrt2-1}{2}$'], 'B', 'out-math11-m1-02', 'easy'),
  q('math11-q019', 'math11-kntt-l2', 'math11-qt02', 'math11-qt02-st-addition', 'near_transfer', 'equation', 'Giá trị chính xác của $\\sin75^\\circ$ là:', ['$\\frac{\\sqrt6+\\sqrt2}{4}$', '$\\frac{\\sqrt6-\\sqrt2}{4}$', '$\\frac{\\sqrt3+1}{2}$', '$\\frac{\\sqrt2+1}{2}$'], 'A', 'out-math11-m1-02', 'easy'),
  q('math11-q020', 'math11-kntt-l2', 'math11-qt02', 'math11-qt02-st-addition', 'representation_switch', 'text', 'Từ $15^\\circ=45^\\circ-30^\\circ$, giá trị $\\cos15^\\circ$ bằng:', ['$\\frac{\\sqrt6+\\sqrt2}{4}$', '$\\frac{\\sqrt6-\\sqrt2}{4}$', '$\\frac{\\sqrt3}{2}$', '$\\frac12$'], 'A', 'out-math11-m1-02', 'easy'),
  q('math11-q021', 'math11-kntt-l2', 'math11-qt02', 'math11-qt02-st-addition', 'misconception_check', 'equation', 'Biết $\\sin a=\\frac35$, $\\cos a=\\frac45$. Tính $\\sin2a$.', ['$\\frac7{25}$', '$\\frac{12}{25}$', '$\\frac{24}{25}$', '$1$'], 'C', 'out-math11-m1-02'),
  q('math11-q022', 'math11-kntt-l2', 'math11-qt02', 'math11-qt02-st-addition', 'retention', 'equation', 'Biết $\\cos a=\\frac35$. Giá trị $\\cos2a=2\\cos^2a-1$ bằng:', ['$\\frac7{25}$', '$-\\frac7{25}$', '$\\frac{16}{25}$', '$-\\frac{16}{25}$'], 'B', 'out-math11-m1-02'),
  q('math11-q023', 'math11-kntt-l2', 'math11-qt02', 'math11-qt02-st-addition', 'mastery_holdout', 'equation', 'Cho $\\tan a=1$, $\\tan b=\\frac12$ và $a+b$ xác định. Tính $\\tan(a+b)$.', ['$1$', '$2$', '$3$', '$\\frac32$'], 'C', 'out-math11-m1-02', 'hard', true),
  q('math11-q004', 'math11-kntt-l2', 'math11-qt02', 'math11-qt02-st-product-sum', 'near_transfer', 'text', 'Biểu thức $\\cos a+\\cos b$ được biến đổi đúng thành:', ['$2\\cos\\frac{a+b}{2}\\cos\\frac{a-b}{2}$', '$2\\sin\\frac{a+b}{2}\\cos\\frac{a-b}{2}$', '$2\\cos\\frac{a+b}{2}\\sin\\frac{a-b}{2}$', '$\\cos(a+b)\\cos(a-b)$'], 'A', 'out-math11-m1-02'),
  q('math11-q024', 'math11-kntt-l2', 'math11-qt02', 'math11-qt02-st-product-sum', 'guided', 'equation', 'Công thức đúng của $\\cos a-\\cos b$ là:', ['$2\\sin\\frac{a+b}{2}\\sin\\frac{a-b}{2}$', '$-2\\sin\\frac{a+b}{2}\\sin\\frac{a-b}{2}$', '$2\\cos\\frac{a+b}{2}\\cos\\frac{a-b}{2}$', '$-2\\cos\\frac{a+b}{2}\\cos\\frac{a-b}{2}$'], 'B', 'out-math11-m1-02'),
  q('math11-q025', 'math11-kntt-l2', 'math11-qt02', 'math11-qt02-st-product-sum', 'misconception_check', 'equation', 'Biến đổi $\\sin a+\\sin b$ thành tích:', ['$2\\sin\\frac{a+b}{2}\\cos\\frac{a-b}{2}$', '$2\\cos\\frac{a+b}{2}\\sin\\frac{a-b}{2}$', '$2\\sin\\frac{a-b}{2}\\cos\\frac{a+b}{2}$', '$\\sin(a+b)$'], 'A', 'out-math11-m1-02'),
  q('math11-q026', 'math11-kntt-l2', 'math11-qt02', 'math11-qt02-st-product-sum', 'representation_switch', 'text', 'Tích $2\\sin a\\cos b$ bằng:', ['$\\cos(a-b)-\\cos(a+b)$', '$\\sin(a+b)-\\sin(a-b)$', '$\\sin(a+b)+\\sin(a-b)$', '$\\cos(a+b)+\\cos(a-b)$'], 'C', 'out-math11-m1-02'),
  q('math11-q027', 'math11-kntt-l2', 'math11-qt02', 'math11-qt02-st-product-sum', 'far_transfer', 'equation', 'Tích $2\\cos a\\cos b$ bằng:', ['$\\cos(a+b)+\\cos(a-b)$', '$\\cos(a+b)-\\cos(a-b)$', '$\\sin(a+b)+\\sin(a-b)$', '$\\sin(a+b)-\\sin(a-b)$'], 'A', 'out-math11-m1-02'),
  q('math11-q028', 'math11-kntt-l2', 'math11-qt02', 'math11-qt02-st-product-sum', 'mastery_holdout', 'equation', 'Rút gọn $\\sin3x+\\sin x$:', ['$2\\sin x\\cos2x$', '$2\\sin2x\\cos x$', '$2\\cos2x\\cos x$', '$\\sin4x$'], 'B', 'out-math11-m1-02', 'hard', true),

  q('math11-q005', 'math11-kntt-l3', 'math11-qt03', 'math11-qt03-st-properties', 'guided', 'equation', 'Tập xác định của hàm số $y=\\tan(2x)$ là:', ['$\\mathbb R$', '$\\mathbb R\\setminus\\{k\\pi\\}$', '$\\mathbb R\\setminus\\left\\{\\frac\\pi4+k\\frac\\pi2\\right\\}$', '$\\mathbb R\\setminus\\left\\{\\frac\\pi2+k\\pi\\right\\}$'], 'C', 'out-math11-m1-03'),
  q('math11-q029', 'math11-kntt-l3', 'math11-qt03', 'math11-qt03-st-properties', 'near_transfer', 'equation', 'Chu kì nhỏ nhất của hàm số $y=\\sin(3x)$ là:', ['$\\frac\\pi3$', '$\\frac{2\\pi}{3}$', '$3\\pi$', '$6\\pi$'], 'B', 'out-math11-m1-03'),
  q('math11-q030', 'math11-kntt-l3', 'math11-qt03', 'math11-qt03-st-properties', 'misconception_check', 'text', 'Hàm số nào sau đây là hàm chẵn?', ['$y=\\cos x$', '$y=\\sin x$', '$y=\\tan x$', '$y=\\cot x$'], 'A', 'out-math11-m1-03', 'easy'),
  q('math11-q031', 'math11-kntt-l3', 'math11-qt03', 'math11-qt03-st-properties', 'representation_switch', 'graph', 'Tập giá trị của hàm số $y=\\tan x$ là:', ['$[-1;1]$', '$[0;+\\infty)$', '$\\mathbb R$', '$(-1;1)$'], 'C', 'out-math11-m1-03', 'easy'),
  q('math11-q032', 'math11-kntt-l3', 'math11-qt03', 'math11-qt03-st-properties', 'far_transfer', 'equation', 'Tập xác định của $y=\\cot(2x)$ là:', ['$\\mathbb R\\setminus\\{k\\pi\\}$', '$\\mathbb R\\setminus\\left\\{k\\frac\\pi2\\right\\}$', '$\\mathbb R\\setminus\\left\\{\\frac\\pi4+k\\frac\\pi2\\right\\}$', '$\\mathbb R$'], 'B', 'out-math11-m1-03'),
  q('math11-q033', 'math11-kntt-l3', 'math11-qt03', 'math11-qt03-st-properties', 'mastery_holdout', 'equation', 'Một chu kì của hàm $y=\\sin x+\\cos x$ là:', ['$\\frac\\pi2$', '$\\pi$', '$4\\pi$', '$2\\pi$'], 'D', 'out-math11-m1-03', 'hard', true),
  q('math11-q006', 'math11-kntt-l3', 'math11-qt03', 'math11-qt03-st-graph', 'representation_switch', 'graph', 'Một đồ thị đi qua gốc tọa độ, có tập giá trị $[-1;1]$, chu kì $2\\pi$ và tăng tại $x=0$. Đó là đồ thị của:', ['$y=\\sin x$', '$y=\\cos x$', '$y=\\tan x$', '$y=\\cot x$'], 'A', 'out-math11-m1-03'),
  q('math11-q034', 'math11-kntt-l3', 'math11-qt03', 'math11-qt03-st-graph', 'guided', 'graph', 'Đồ thị chẵn, có giá trị lớn nhất bằng 1 tại $x=0$ và chu kì $2\\pi$ là đồ thị của:', ['$y=\\sin x$', '$y=\\cos x$', '$y=\\tan x$', '$y=\\cot x$'], 'B', 'out-math11-m1-03', 'easy'),
  q('math11-q035', 'math11-kntt-l3', 'math11-qt03', 'math11-qt03-st-graph', 'near_transfer', 'graph', 'Đồ thị có chu kì $\\pi$, đi qua gốc tọa độ và có tiệm cận đứng $x=\\frac\\pi2+k\\pi$ là:', ['$y=\\sin x$', '$y=\\cos x$', '$y=\\tan x$', '$y=\\cot x$'], 'C', 'out-math11-m1-03'),
  q('math11-q036', 'math11-kntt-l3', 'math11-qt03', 'math11-qt03-st-graph', 'misconception_check', 'graph', 'Đồ thị giảm trên từng khoảng xác định, có nghiệm $x=\\frac\\pi2+k\\pi$ và chu kì $\\pi$ là:', ['$y=\\sin x$', '$y=\\cos x$', '$y=\\tan x$', '$y=\\cot x$'], 'D', 'out-math11-m1-03'),
  q('math11-q037', 'math11-kntt-l3', 'math11-qt03', 'math11-qt03-st-graph', 'far_transfer', 'graph', 'Đồ thị hình sin có biên độ 2, chu kì $2\\pi$, đi qua gốc và tăng tại gốc biểu diễn hàm:', ['$y=2\\sin x$', '$y=2\\cos x$', '$y=\\sin2x$', '$y=-2\\sin x$'], 'A', 'out-math11-m1-03'),
  q('math11-q038', 'math11-kntt-l3', 'math11-qt03', 'math11-qt03-st-graph', 'mastery_holdout', 'graph', 'Đồ thị chẵn, chu kì $2\\pi$ và nhận giá trị $-1$ tại $x=0$ là đồ thị của:', ['$y=\\sin x$', '$y=\\cos x$', '$y=-\\cos x$', '$y=-\\sin x$'], 'C', 'out-math11-m1-03', 'hard', true),

  q('math11-q007', 'math11-kntt-l4', 'math11-qt04', 'math11-qt04-st-basic', 'guided', 'equation', 'Nghiệm của phương trình $\\sin x=\\frac12$ là:', ['$x=\\frac\\pi6+2k\\pi$ hoặc $x=\\frac{5\\pi}{6}+2k\\pi$', '$x=\\pm\\frac\\pi6+2k\\pi$', '$x=\\frac\\pi6+k\\pi$', '$x=\\frac{5\\pi}{6}+k\\pi$'], 'A', 'out-math11-m1-04', 'easy'),
  q('math11-q039', 'math11-kntt-l4', 'math11-qt04', 'math11-qt04-st-basic', 'near_transfer', 'equation', 'Nghiệm của phương trình $\\cos x=0$ là:', ['$x=k\\pi$', '$x=\\frac\\pi2+k\\pi$', '$x=\\frac\\pi2+2k\\pi$', '$x=\\pi+2k\\pi$'], 'B', 'out-math11-m1-04', 'easy'),
  q('math11-q040', 'math11-kntt-l4', 'math11-qt04', 'math11-qt04-st-basic', 'representation_switch', 'graph', 'Nghiệm của phương trình $\\tan x=\\sqrt3$ là:', ['$x=\\frac\\pi6+k\\pi$', '$x=\\frac\\pi3+2k\\pi$', '$x=\\frac\\pi3+k\\pi$', '$x=\\frac{2\\pi}{3}+k\\pi$'], 'C', 'out-math11-m1-04'),
  q('math11-q041', 'math11-kntt-l4', 'math11-qt04', 'math11-qt04-st-basic', 'misconception_check', 'equation', 'Nghiệm của phương trình $\\cot x=1$ là:', ['$x=\\frac\\pi4+k\\pi$', '$x=\\frac\\pi4+2k\\pi$', '$x=-\\frac\\pi4+k\\pi$', '$x=\\frac{3\\pi}{4}+k\\pi$'], 'A', 'out-math11-m1-04'),
  q('math11-q042', 'math11-kntt-l4', 'math11-qt04', 'math11-qt04-st-basic', 'retention', 'equation', 'Nghiệm của phương trình $\\sin x=-1$ là:', ['$x=\\frac\\pi2+2k\\pi$', '$x=-\\frac\\pi2+2k\\pi$', '$x=-\\frac\\pi2+k\\pi$', '$x=\\pi+2k\\pi$'], 'B', 'out-math11-m1-04'),
  q('math11-q043', 'math11-kntt-l4', 'math11-qt04', 'math11-qt04-st-basic', 'mastery_holdout', 'graph', 'Số nghiệm của phương trình $\\cos x=2$ trên $\\mathbb R$ là:', ['$1$', '$2$', 'Vô số', '$0$'], 'D', 'out-math11-m1-04', 'hard', true),
  q('math11-q008', 'math11-kntt-l4', 'math11-qt04', 'math11-qt04-st-transformed', 'near_transfer', 'equation', 'Nghiệm của $\\cos(2x)=\\cos\\frac\\pi3$ là:', ['$x=\\pm\\frac\\pi3+2k\\pi$', '$x=\\pm\\frac\\pi6+k\\pi$', '$x=\\frac\\pi6+2k\\pi$', '$x=\\frac\\pi3+k\\pi$'], 'B', 'out-math11-m1-04'),
  q('math11-q044', 'math11-kntt-l4', 'math11-qt04', 'math11-qt04-st-transformed', 'guided', 'equation', 'Nghiệm của phương trình $\\sin(2x)=0$ là:', ['$x=k\\frac\\pi2$', '$x=k\\pi$', '$x=2k\\pi$', '$x=\\frac\\pi2+k\\pi$'], 'A', 'out-math11-m1-04', 'easy'),
  q('math11-q045', 'math11-kntt-l4', 'math11-qt04', 'math11-qt04-st-transformed', 'misconception_check', 'equation', 'Nghiệm của phương trình $\\tan(3x)=1$ là:', ['$x=\\frac\\pi4+k\\pi$', '$x=\\frac\\pi{12}+k\\pi$', '$x=\\frac\\pi{12}+k\\frac\\pi3$', '$x=\\frac\\pi3+k\\frac\\pi4$'], 'C', 'out-math11-m1-04'),
  q('math11-q046', 'math11-kntt-l4', 'math11-qt04', 'math11-qt04-st-transformed', 'representation_switch', 'graph', 'Nghiệm của phương trình $\\cos\\left(x-\\frac\\pi4\\right)=1$ là:', ['$x=\\frac\\pi4+k\\pi$', '$x=\\frac\\pi4+2k\\pi$', '$x=-\\frac\\pi4+2k\\pi$', '$x=2k\\pi$'], 'B', 'out-math11-m1-04'),
  q('math11-q047', 'math11-kntt-l4', 'math11-qt04', 'math11-qt04-st-transformed', 'far_transfer', 'equation', 'Nghiệm của $\\sin\\left(x+\\frac\\pi6\\right)=\\frac12$ là:', ['$x=2k\\pi$ hoặc $x=\\frac{2\\pi}{3}+2k\\pi$', '$x=\\frac\\pi6+2k\\pi$ hoặc $x=\\frac{5\\pi}{6}+2k\\pi$', '$x=k\\pi$', '$x=\\pm\\frac\\pi6+k\\pi$'], 'A', 'out-math11-m1-04', 'hard'),
  q('math11-q048', 'math11-kntt-l4', 'math11-qt04', 'math11-qt04-st-transformed', 'mastery_holdout', 'equation', 'Nghiệm của phương trình $\\cos(2x)=-1$ là:', ['$x=\\pi+2k\\pi$', '$x=\\frac\\pi2+2k\\pi$', '$x=\\pi+k\\pi$', '$x=\\frac\\pi2+k\\pi$'], 'D', 'out-math11-m1-04', 'hard', true)
];

export const g11MathModule1Questions: CourseQuestion[] = specs.map(spec => ({
  id: spec.id,
  courseId: 'grade11:math',
  moduleId: 'math11-m1',
  lessonId: spec.lessonId,
  subjectId: 'math',
  topicId: 'math11-t01',
  questionTypeId: spec.questionTypeId,
  subTypeId: spec.subTypeId,
  practiceRole: spec.practiceRole,
  representationType: spec.representationType,
  isMasteryHoldout: spec.isMasteryHoldout,
  content: spec.content,
  responseType: 'single_choice',
  validatorType: 'choice',
  outcomeIds: [spec.outcomeId],
  options: spec.options,
  correctAnswer: spec.correctAnswer,
  difficulty: spec.difficulty ?? 'medium',
  sourceType: 'manual'
}));
