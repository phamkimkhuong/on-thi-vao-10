import type { Question } from '@/types';

export const g10MathModule4Questions: Question[] = [
  {
      id: 'math10-q44',
      subjectId: 'math',
      topicId: 'math10-t4',
      questionTypeId: 'math10-qt6',
      content: 'Cho tam giác $ABC$ có các cạnh $a = 6$, $b = 8$, $c = 10$. Tính diện tích tam giác $S$, bán kính đường tròn ngoại tiếp $R$ và bán kính đường tròn nội tiếp $r$ của tam giác đó.',
      difficulty: 'medium',
      sourceType: 'manual',
      correctAnswer: 'S = 24, R = 5, r = 2',
      acceptedAnswers: [
        'S = 24, R = 5, r = 2',
        'S=24, R=5, r=2',
        '24; 5; 2',
        '24, 5, 2',
        '24;5;2'
      ],
      validatorType: 'exact',
      correctFinalAnswer: { S: '24', R: '5', r: '2' },
      acceptedFinalAnswers: [
        { S: '24', R: '5', r: '2' }
      ],
      answerSchema: {
        type: 'single-number',
        fields: [
          { key: 'S', label: 'Diện tích S:', valueType: 'number', placeholder: 'Nhập S' },
          { key: 'R', label: 'Bán kính ngoại tiếp R:', valueType: 'number', placeholder: 'Nhập R' },
          { key: 'r', label: 'Bán kính nội tiếp r:', valueType: 'number', placeholder: 'Nhập r' }
        ],
        proofImageRequired: false,
        autoCheckMode: 'exact'
      }
    },
  {
      id: 'math10-q45',
      subjectId: 'math',
      topicId: 'math10-t4',
      questionTypeId: 'math10-qt6',
      content: 'Cho tam giác $ABC$ có góc $A = 60^\\circ$, các cạnh $b = 5$ và $c = 8$. Tính độ dài cạnh $a$.',
      difficulty: 'easy',
      sourceType: 'manual',
      correctAnswer: '7',
      acceptedAnswers: ['7', 'a = 7', 'a=7'],
      validatorType: 'exact'
    },
  {
      id: 'math10-q46',
      subjectId: 'math',
      topicId: 'math10-t4',
      questionTypeId: 'math10-qt6',
      content: 'Cho tam giác $ABC$ có góc $A = 30^\\circ$, góc $B = 45^\\circ$ và cạnh $a = 4$. Tính độ dài cạnh $b$.',
      difficulty: 'easy',
      sourceType: 'manual',
      correctAnswer: '4\\sqrt{2}',
      acceptedAnswers: ['4\\sqrt{2}', '4\\sqrt{2}', '4*sqrt(2)', '5.66', '5,66', '4 \\sqrt{2}'],
      validatorType: 'exact'
    },
  {
      id: 'math10-q47',
      subjectId: 'math',
      topicId: 'math10-t4',
      questionTypeId: 'math10-qt6',
      content: 'Cho tam giác $ABC$ có các cạnh $a = 13$, $b = 14$, $c = 15$. Tính diện tích tam giác $S$ của tam giác đó.',
      difficulty: 'medium',
      sourceType: 'manual',
      correctAnswer: '84',
      acceptedAnswers: ['84', 'S = 84', 'S=84'],
      validatorType: 'exact'
    },
  {
      id: 'math10-q48',
      subjectId: 'math',
      topicId: 'math10-t4',
      questionTypeId: 'math10-qt6',
      content: 'Cho tam giác $ABC$ có các cạnh $a = 7$, $b = 8$, $c = 5$. Tính bán kính đường tròn nội tiếp $r$ của tam giác đó.',
      difficulty: 'medium',
      sourceType: 'manual',
      correctAnswer: '\\sqrt{3}',
      acceptedAnswers: ['\\sqrt{3}', '\\sqrt{3}', 'sqrt(3)', '1.73', '1,73', '\\sqrt{3}'],
      validatorType: 'exact'
    },
  {
      id: 'math10-q49',
      subjectId: 'math',
      topicId: 'math10-t4',
      questionTypeId: 'math10-qt6',
      content: 'Cho tam giác $ABC$ có các cạnh $a = 5$, $b = 6$, $c = 7$. Tính côsin của góc $A$.',
      difficulty: 'medium',
      sourceType: 'manual',
      correctAnswer: '5/7',
      acceptedAnswers: ['5/7', 'cos A = 5/7', 'cos(A) = 5/7', '0.71', '0,71'],
      validatorType: 'exact'
    },
  {
      id: 'math10-q50',
      subjectId: 'math',
      topicId: 'math10-t4',
      questionTypeId: 'math10-qt6',
      content: 'Từ vị trí $A$ người ta quan sát một ngọn tháp và đo được góc nâng là $30^\\circ$. Đi về phía chân tháp 50m đến vị trí $B$, người ta đo được góc nâng là $60^\\circ$. Tính chiều cao của tháp (làm tròn kết quả đến hàng đơn vị mét).',
      difficulty: 'medium',
      sourceType: 'manual',
      correctAnswer: '43m',
      acceptedAnswers: ['43m', '43', '43 mét', '43 m'],
      validatorType: 'exact'
    },
  {
      id: 'math10-q51',
      subjectId: 'math',
      topicId: 'math10-t4',
      questionTypeId: 'math10-qt6',
      content: 'Cho tam giác $ABC$ có $a = 4$, $b = 5$ và diện tích $S = 5\\sqrt{3}$. Biết góc $C$ là góc tù. Tính độ dài cạnh $c$ của tam giác đó.',
      difficulty: 'hard',
      sourceType: 'manual',
      correctAnswer: '\\sqrt{61}',
      acceptedAnswers: ['\\sqrt{61}', '\\sqrt{61}', 'sqrt(61)', '7.81', '7,81'],
      validatorType: 'exact'
    },
  {
      id: 'math10-q52',
      subjectId: 'math',
      topicId: 'math10-t4',
      questionTypeId: 'math10-qt6',
      content: 'Hai chiếc tàu thủy cùng xuất phát từ vị trí $O$ đi thẳng theo hai hướng tạo với nhau một góc $60^\\circ$. Tàu thứ nhất đi với vận tốc $15\\text{ km/h}$, tàu thứ hai đi với vận tốc $40\\text{ km/h}$. Hỏi sau 2 giờ, khoảng cách giữa hai tàu là bao nhiêu kilômét?',
      difficulty: 'hard',
      sourceType: 'manual',
      correctAnswer: '50',
      acceptedAnswers: ['50', '50km', '50 km', '50 kilômét', '50 kilomet'],
      validatorType: 'exact'
    },
  {
      id: 'math10-q53',
      subjectId: 'math',
      topicId: 'math10-t4',
      questionTypeId: 'math10-qt6',
      content: 'Để đo khoảng cách từ điểm $A$ trên bờ đến hòn đảo nhỏ $C$ ngoài khơi, người ta chọn một điểm $B$ cùng ở trên bờ sao cho khoảng cách $AB = 100\\text{m}$. Đo các góc $\\angle CAB = 80^\\circ$ và $\\angle CBA = 70^\\circ$. Tính khoảng cách $AC$ từ bờ đến đảo (làm tròn kết quả đến hàng đơn vị mét).',
      difficulty: 'hard',
      sourceType: 'manual',
      correctAnswer: '188m',
      acceptedAnswers: ['188m', '188', '188 mét', '188 m'],
      validatorType: 'exact'
    },
  {
      id: 'math10-q82',
      subjectId: 'math',
      topicId: 'math10-t4',
      questionTypeId: 'math10-qt6',
      content: 'Tam giác $ABC$ có $AB=AC=5$ và $\\widehat{A}=60^\\circ$. Tính độ dài cạnh $BC$.',
      difficulty: 'easy',
      sourceType: 'manual',
      correctAnswer: '5',
      acceptedAnswers: ['5', 'BC = 5', 'BC=5'],
      validatorType: 'number',
      correctFinalAnswer: { value: '5' },
      acceptedFinalAnswers: [{ value: '5' }],
      answerSchema: {
        type: 'single-number',
        fields: [{ key: 'value', label: 'Độ dài BC:', valueType: 'number', placeholder: 'Nhập độ dài' }],
        proofImageRequired: false,
        autoCheckMode: 'numeric'
      }
    },
  {
      id: 'math10-q83',
      subjectId: 'math',
      topicId: 'math10-t4',
      questionTypeId: 'math10-qt6',
      content: 'Tam giác $ABC$ có $AB=6$, $AC=8$ và $\\widehat{A}=30^\\circ$. Tính diện tích tam giác $ABC$.',
      difficulty: 'medium',
      sourceType: 'manual',
      correctAnswer: '12',
      acceptedAnswers: ['12', '12 đơn vị diện tích', 'S = 12', 'S=12'],
      validatorType: 'number',
      correctFinalAnswer: { value: '12' },
      acceptedFinalAnswers: [{ value: '12' }],
      answerSchema: {
        type: 'single-number',
        fields: [{ key: 'value', label: 'Diện tích tam giác:', valueType: 'number', placeholder: 'Nhập diện tích' }],
        proofImageRequired: false,
        autoCheckMode: 'numeric'
      }
    }
];
