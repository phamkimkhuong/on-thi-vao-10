import type { CourseQuestion } from '@/data/schema';
import type { PracticeRole, QuestionRepresentationType } from '@/types';

type ChoiceSpec = {
  number: number;
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
  number: number,
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
  number,
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
  q(49, 'math11-kntt-l5', 'math11-qt05', 'math11-qt05-st-explicit', 'guided', 'equation', 'Cho dãy số $u_n=2n-1$. Giá trị $u_5$ là:', ['$7$', '$9$', '$10$', '$11$'], 'B', 'out-math11-m2-01', 'easy'),
  q(50, 'math11-kntt-l5', 'math11-qt05', 'math11-qt05-st-explicit', 'near_transfer', 'equation', 'Cho $u_n=n^2+1$. Giá trị số hạng thứ tư là:', ['$9$', '$15$', '$17$', '$25$'], 'C', 'out-math11-m2-01', 'easy'),
  q(51, 'math11-kntt-l5', 'math11-qt05', 'math11-qt05-st-explicit', 'representation_switch', 'table', 'Bảng giá trị có $n:1,2,3,4$ tương ứng $u_n:3,6,9,12$. Công thức phù hợp là:', ['$u_n=3n$', '$u_n=n+3$', '$u_n=3^n$', '$u_n=n^2+2$'], 'A', 'out-math11-m2-01'),
  q(52, 'math11-kntt-l5', 'math11-qt05', 'math11-qt05-st-explicit', 'misconception_check', 'equation', 'Cho $u_n=4n-3$. Số 25 là số hạng thứ mấy của dãy?', ['Thứ 5', 'Thứ 6', 'Thứ 7', 'Thứ 8'], 'C', 'out-math11-m2-01'),
  q(53, 'math11-kntt-l5', 'math11-qt05', 'math11-qt05-st-explicit', 'retention', 'table', 'Dãy $1,4,9,16,\\ldots$ được cho theo quy luật $u_n=n^2$. Số hạng tiếp theo là:', ['$20$', '$25$', '$32$', '$36$'], 'B', 'out-math11-m2-01', 'easy'),
  q(54, 'math11-kntt-l5', 'math11-qt05', 'math11-qt05-st-explicit', 'mastery_holdout', 'equation', 'Cho $u_n=(-1)^n n$. Giá trị $u_5$ là:', ['$5$', '$-5$', '$1$', '$-1$'], 'B', 'out-math11-m2-01', 'hard', true),
  q(55, 'math11-kntt-l5', 'math11-qt05', 'math11-qt05-st-recursive', 'guided', 'equation', 'Cho $u_1=2$, $u_{n+1}=u_n+3$. Giá trị $u_4$ là:', ['$8$', '$9$', '$11$', '$14$'], 'C', 'out-math11-m2-01', 'easy'),
  q(56, 'math11-kntt-l5', 'math11-qt05', 'math11-qt05-st-recursive', 'near_transfer', 'table', 'Cho $u_1=1$, $u_2=2$, $u_{n+2}=u_{n+1}+u_n$. Giá trị $u_5$ là:', ['$5$', '$6$', '$8$', '$13$'], 'C', 'out-math11-m2-01'),
  q(57, 'math11-kntt-l5', 'math11-qt05', 'math11-qt05-st-recursive', 'far_transfer', 'equation', 'Với $u_n=\\frac{n}{n+1}$, khẳng định nào đúng?', ['Dãy tăng và bị chặn trên bởi 1', 'Dãy giảm và bị chặn dưới bởi 0', 'Dãy tăng và không bị chặn', 'Dãy không tăng, không giảm'], 'A', 'out-math11-m2-01', 'hard'),
  q(58, 'math11-kntt-l5', 'math11-qt05', 'math11-qt05-st-recursive', 'misconception_check', 'equation', 'Dãy $u_n=5-2n$ có tính chất nào?', ['Tăng', 'Giảm', 'Không đổi', 'Không xác định với $n>2$'], 'B', 'out-math11-m2-01'),
  q(59, 'math11-kntt-l5', 'math11-qt05', 'math11-qt05-st-recursive', 'retention', 'table', 'Cho $u_1=1$, $u_{n+1}=2u_n$. Bốn số hạng đầu là $1,2,4,u_4$. Giá trị $u_4$ bằng:', ['$4$', '$6$', '$7$', '$8$'], 'D', 'out-math11-m2-01', 'easy'),
  q(60, 'math11-kntt-l5', 'math11-qt05', 'math11-qt05-st-recursive', 'mastery_holdout', 'table', 'Dãy $u_n=(-1)^n$ có tính chất nào?', ['Tăng và bị chặn', 'Giảm và bị chặn', 'Không đơn điệu nhưng bị chặn', 'Không đơn điệu và không bị chặn'], 'C', 'out-math11-m2-01', 'hard', true),

  q(61, 'math11-kntt-l6', 'math11-qt06', 'math11-qt06-st-term', 'guided', 'equation', 'Cấp số cộng có $u_1=3$, công sai $d=4$. Giá trị $u_6$ là:', ['$19$', '$20$', '$23$', '$27$'], 'C', 'out-math11-m2-02', 'easy'),
  q(62, 'math11-kntt-l6', 'math11-qt06', 'math11-qt06-st-term', 'near_transfer', 'equation', 'Một cấp số cộng có $u_3=7$, $u_8=22$. Công sai bằng:', ['$2$', '$3$', '$4$', '$5$'], 'B', 'out-math11-m2-02'),
  q(63, 'math11-kntt-l6', 'math11-qt06', 'math11-qt06-st-term', 'representation_switch', 'table', 'Dãy $10,7,4,1,\\ldots$ là cấp số cộng có công sai:', ['$-3$', '$3$', '$-4$', '$4$'], 'A', 'out-math11-m2-02', 'easy'),
  q(64, 'math11-kntt-l6', 'math11-qt06', 'math11-qt06-st-term', 'misconception_check', 'equation', 'Cấp số cộng có $u_1=5$, $d=2$. Số 25 là số hạng thứ mấy?', ['Thứ 9', 'Thứ 10', 'Thứ 11', 'Thứ 12'], 'C', 'out-math11-m2-02'),
  q(65, 'math11-kntt-l6', 'math11-qt06', 'math11-qt06-st-term', 'retention', 'equation', 'Ba số $x,10,16$ theo thứ tự là ba số hạng liên tiếp của một cấp số cộng. Giá trị $x$ là:', ['$2$', '$4$', '$6$', '$8$'], 'B', 'out-math11-m2-02'),
  q(66, 'math11-kntt-l6', 'math11-qt06', 'math11-qt06-st-term', 'mastery_holdout', 'equation', 'Một cấp số cộng có $u_4=14$ và $u_{10}=32$. Số hạng đầu $u_1$ bằng:', ['$2$', '$5$', '$8$', '$11$'], 'B', 'out-math11-m2-02', 'hard', true),
  q(67, 'math11-kntt-l6', 'math11-qt06', 'math11-qt06-st-sum', 'guided', 'equation', 'Cấp số cộng có $u_1=2$, $d=3$. Tổng 10 số hạng đầu là:', ['$145$', '$150$', '$155$', '$160$'], 'C', 'out-math11-m2-02'),
  q(68, 'math11-kntt-l6', 'math11-qt06', 'math11-qt06-st-sum', 'near_transfer', 'equation', 'Tổng $1+2+3+\\cdots+20$ bằng:', ['$190$', '$200$', '$205$', '$210$'], 'D', 'out-math11-m2-02', 'easy'),
  q(69, 'math11-kntt-l6', 'math11-qt06', 'math11-qt06-st-sum', 'representation_switch', 'text', 'Một khán đài có 15 hàng ghế. Hàng đầu có 20 ghế, mỗi hàng sau nhiều hơn hàng trước 2 ghế. Tổng số ghế là:', ['$480$', '$510$', '$525$', '$540$'], 'B', 'out-math11-m2-02'),
  q(70, 'math11-kntt-l6', 'math11-qt06', 'math11-qt06-st-sum', 'misconception_check', 'equation', 'Một cấp số cộng có $u_1=5$, $u_n=41$ và $S_n=230$. Giá trị $n$ là:', ['$8$', '$9$', '$10$', '$11$'], 'C', 'out-math11-m2-02', 'hard'),
  q(71, 'math11-kntt-l6', 'math11-qt06', 'math11-qt06-st-sum', 'far_transfer', 'text', 'Ngày đầu một nhóm trồng 100 cây; mỗi ngày sau trồng nhiều hơn ngày trước 20 cây. Trong 7 ngày nhóm trồng được:', ['$980$ cây', '$1050$ cây', '$1120$ cây', '$1190$ cây'], 'C', 'out-math11-m2-02'),
  q(72, 'math11-kntt-l6', 'math11-qt06', 'math11-qt06-st-sum', 'mastery_holdout', 'equation', 'Tổng các bội dương của 3 không vượt quá 60 bằng:', ['$600$', '$610$', '$620$', '$630$'], 'D', 'out-math11-m2-02', 'hard', true),

  q(73, 'math11-kntt-l7', 'math11-qt07', 'math11-qt07-st-term', 'guided', 'equation', 'Cấp số nhân có $u_1=2$, công bội $q=3$. Giá trị $u_5$ là:', ['$54$', '$81$', '$162$', '$243$'], 'C', 'out-math11-m2-03', 'easy'),
  q(74, 'math11-kntt-l7', 'math11-qt07', 'math11-qt07-st-term', 'representation_switch', 'table', 'Dãy $81,27,9,3,\\ldots$ là cấp số nhân có công bội:', ['$3$', '$\\frac13$', '$-3$', '$-\\frac13$'], 'B', 'out-math11-m2-03', 'easy'),
  q(75, 'math11-kntt-l7', 'math11-qt07', 'math11-qt07-st-term', 'near_transfer', 'equation', 'Cấp số nhân dương có $u_2=6$, $u_5=162$. Số hạng đầu là:', ['$2$', '$3$', '$6$', '$9$'], 'A', 'out-math11-m2-03', 'hard'),
  q(76, 'math11-kntt-l7', 'math11-qt07', 'math11-qt07-st-term', 'misconception_check', 'equation', 'Cấp số nhân có $u_1=5$, $q=-2$. Giá trị $u_4$ là:', ['$40$', '$-20$', '$20$', '$-40$'], 'D', 'out-math11-m2-03'),
  q(77, 'math11-kntt-l7', 'math11-qt07', 'math11-qt07-st-term', 'retention', 'equation', 'Ba số dương $2,x,18$ theo thứ tự là ba số hạng liên tiếp của cấp số nhân. Giá trị $x$ là:', ['$3$', '$4$', '$6$', '$9$'], 'C', 'out-math11-m2-03'),
  q(78, 'math11-kntt-l7', 'math11-qt07', 'math11-qt07-st-term', 'mastery_holdout', 'equation', 'Cấp số nhân dương có $u_3=12$, $u_6=96$. Số hạng đầu là:', ['$2$', '$3$', '$4$', '$6$'], 'B', 'out-math11-m2-03', 'hard', true),
  q(79, 'math11-kntt-l7', 'math11-qt07', 'math11-qt07-st-sum', 'guided', 'equation', 'Cấp số nhân có $u_1=1$, $q=2$. Tổng 5 số hạng đầu là:', ['$15$', '$16$', '$31$', '$32$'], 'C', 'out-math11-m2-03', 'easy'),
  q(80, 'math11-kntt-l7', 'math11-qt07', 'math11-qt07-st-sum', 'near_transfer', 'equation', 'Cấp số nhân có $u_1=3$, $q=3$. Tổng 4 số hạng đầu là:', ['$81$', '$120$', '$121$', '$123$'], 'B', 'out-math11-m2-03'),
  q(81, 'math11-kntt-l7', 'math11-qt07', 'math11-qt07-st-sum', 'representation_switch', 'text', 'Một quần thể có 200 vi khuẩn và tăng gấp đôi sau mỗi chu kì. Sau 5 chu kì, số vi khuẩn là:', ['$3200$', '$5000$', '$6400$', '$12800$'], 'C', 'out-math11-m2-03'),
  q(82, 'math11-kntt-l7', 'math11-qt07', 'math11-qt07-st-sum', 'misconception_check', 'text', 'Một thiết bị trị giá 100 triệu đồng, mỗi năm còn 90% giá trị của năm trước. Sau 3 năm, giá trị còn lại là:', ['$70$ triệu', '$72$ triệu', '$72{,}5$ triệu', '$72{,}9$ triệu'], 'D', 'out-math11-m2-03'),
  q(83, 'math11-kntt-l7', 'math11-qt07', 'math11-qt07-st-sum', 'far_transfer', 'text', 'Một người gửi tin cho 3 người mới ở mỗi vòng; mỗi người nhận lại gửi cho 3 người mới. Tính cả người đầu tiên, tổng số người tham gia đến hết vòng 4 là:', ['$81$', '$108$', '$120$', '$121$'], 'D', 'out-math11-m2-03', 'hard'),
  q(84, 'math11-kntt-l7', 'math11-qt07', 'math11-qt07-st-sum', 'mastery_holdout', 'equation', 'Tổng $2+6+18+\\cdots+1458$ bằng:', ['$2186$', '$2190$', '$4372$', '$4374$'], 'A', 'out-math11-m2-03', 'hard', true)
];

export const g11MathModule2Questions: CourseQuestion[] = specs.map(spec => {
  const suffix = String(spec.number).padStart(3, '0');

  return {
    id: `math11-q${suffix}`,
    courseId: 'grade11:math',
    moduleId: 'math11-m2',
    lessonId: spec.lessonId,
    subjectId: 'math',
    topicId: 'math11-t02',
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
  };
});
