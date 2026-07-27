import type { CourseSolution } from '@/data/schema';

const answers = 'BCCBACBAACBD BCBBCBCBCABC'.replace(/\s/g, '').split('') as Array<'A' | 'B' | 'C' | 'D'>;
const reasons = [
  '$n=4+6=10$.',
  '$x=(20+30)/2=25$.',
  'Tần số là số quan sát thuộc nhóm.',
  'Nhóm đầu có $1,2,4$; nhóm sau có $5,7,9$.',
  '$10\\in[10;20)$ còn 20 không thuộc nhóm.',
  '$8/40=0{,}2=20\\%$.',
  'Tần số lớn nhất 5 ứng với nhóm $[5;10)$.',
  '$x=25-(5+8+7)=5$.',
  'Trung điểm các nhóm lần lượt là 5, 15 và 25.',
  'Các nhóm chứa lần lượt 2, 3 và 1 giá trị.',
  '$h=3-1=2$.',
  '$2\\cdot5+3\\cdot15=55$.',
  '$\\bar x\\approx(2\\cdot5+3\\cdot15)/5=11$.',
  '$(1\\cdot2+3\\cdot6)/4=5$.',
  'Tần số 9 lớn nhất nên nhóm thứ hai chứa mốt.',
  '$M_o=10+\\frac{8-4}{16-4-6}\\cdot10\\approx16{,}67$.',
  'Bảng nhóm dùng giá trị đại diện thay cho từng dữ liệu gốc.',
  '$(2\\cdot10+5\\cdot20+3\\cdot30)/10=21$.',
  '$M_e=10+\\frac{10-4}{8}\\cdot10=17{,}5$.',
  '$n/4=10$ và $6<10\\le18$, nên $Q_1$ ở nhóm hai.',
  '$M_e=10+\\frac{15-8}{10}\\cdot10=17$.',
  '$Q_3=20+\\frac{30-18}{12}\\cdot10=30$.',
  '$Q_3-Q_1=24-12=12$.',
  '$Q_1=10+\\frac{10-6}{14}\\cdot10\\approx12{,}86$.'
];

export const g11MathModule3Solutions: CourseSolution[] = reasons.map((reason, index) => {
  const number = 85 + index;
  const suffix = String(number).padStart(3, '0');
  return {
    id: `math11-s${suffix}`,
    courseId: 'grade11:math',
    moduleId: 'math11-m3',
    questionId: `math11-q${suffix}`,
    recognition: number <= 96
      ? 'Đọc đúng khoảng nhóm, tần số và giá trị đại diện.'
      : 'Xác định đúng số đặc trưng và nhóm chứa trước khi thay công thức.',
    detailedSteps: [
      { order: 1, title: 'Xử lí dữ liệu', explanation: reason },
      { order: 2, title: 'Kết luận', explanation: `Phương án đúng là ${answers[index]}.` }
    ],
    finalAnswer: answers[index],
    commonMistakes: ['Đọc sai đầu mút nhóm hoặc dùng sai tần số tích lũy.'],
    reviewSuggestions: ['Ôn bảng ghép nhóm và công thức số đặc trưng tương ứng.']
  };
});
