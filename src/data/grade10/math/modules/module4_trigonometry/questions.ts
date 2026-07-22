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
    },
  {
    "id": "math10-m4-q001",
    "subjectId": "math",
    "topicId": "math10-t4",
    "questionTypeId": "math10-qt6",
    "content": "Tam giác có hai cạnh 6, 8 và góc xen giữa $90^\\circ$. Diện tích bằng bao nhiêu?",
    "responseType": "single_choice",
    "difficulty": "easy",
    "sourceType": "manual",
    "options": [
      "A. $24$",
      "B. $48$",
      "C. $14$",
      "D. $12$"
    ],
    "correctAnswer": "A",
    "acceptedAnswers": [
      "A"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m4-q002",
    "subjectId": "math",
    "topicId": "math10-t4",
    "questionTypeId": "math10-qt6",
    "content": "Tam giác có ba cạnh 10, 10, 12. Bán kính đường tròn nội tiếp bằng bao nhiêu?",
    "responseType": "single_choice",
    "difficulty": "hard",
    "sourceType": "manual",
    "options": [
      "A. $4$",
      "B. $3$",
      "C. $6$",
      "D. $8$"
    ],
    "correctAnswer": "B",
    "acceptedAnswers": [
      "B"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m4-q003",
    "subjectId": "math",
    "topicId": "math10-t4",
    "questionTypeId": "math10-qt6",
    "content": "Trong tam giác ABC, $a=8$, $A=30^\\circ$. Bán kính ngoại tiếp R bằng bao nhiêu?",
    "responseType": "single_choice",
    "difficulty": "hard",
    "sourceType": "manual",
    "options": [
      "A. $4$",
      "B. $16$",
      "C. $8$",
      "D. $4\\sqrt3$"
    ],
    "correctAnswer": "C",
    "acceptedAnswers": [
      "C"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m4-q004",
    "subjectId": "math",
    "topicId": "math10-t4",
    "questionTypeId": "math10-qt6",
    "content": "Tam giác có các cạnh 7, 8, 13; góc đối diện cạnh 13 bằng bao nhiêu?",
    "responseType": "single_choice",
    "difficulty": "hard",
    "sourceType": "manual",
    "options": [
      "A. $60^\\circ$",
      "B. $90^\\circ$",
      "C. $150^\\circ$",
      "D. $120^\\circ$"
    ],
    "correctAnswer": "D",
    "acceptedAnswers": [
      "D"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m4-q005",
    "subjectId": "math",
    "topicId": "math10-t4",
    "questionTypeId": "math10-qt6",
    "content": "Tam giác ABC có $A=60^\\circ$, $B=45^\\circ$, $a=\\sqrt6$. Cạnh b bằng bao nhiêu?",
    "responseType": "single_choice",
    "difficulty": "easy",
    "sourceType": "manual",
    "options": [
      "A. $2$",
      "B. $\\sqrt2$",
      "C. $2\\sqrt2$",
      "D. $3$"
    ],
    "correctAnswer": "A",
    "acceptedAnswers": [
      "A"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m4-q006",
    "subjectId": "math",
    "topicId": "math10-t4",
    "questionTypeId": "math10-qt6",
    "content": "Tam giác ABC có $a=b=5$ và $A=50^\\circ$. Góc C bằng bao nhiêu?",
    "responseType": "single_choice",
    "difficulty": "easy",
    "sourceType": "manual",
    "options": [
      "A. $50^\\circ$",
      "B. $80^\\circ$",
      "C. $100^\\circ$",
      "D. $130^\\circ$"
    ],
    "correctAnswer": "B",
    "acceptedAnswers": [
      "B"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m4-q007",
    "subjectId": "math",
    "topicId": "math10-t4",
    "questionTypeId": "math10-qt6",
    "content": "Tam giác có các cạnh 3, 4, 5. Góc đối diện cạnh 5 bằng bao nhiêu?",
    "responseType": "single_choice",
    "difficulty": "medium",
    "sourceType": "manual",
    "options": [
      "A. $30^\\circ$",
      "B. $45^\\circ$",
      "C. $90^\\circ$",
      "D. $60^\\circ$"
    ],
    "correctAnswer": "C",
    "acceptedAnswers": [
      "C"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m4-q008",
    "subjectId": "math",
    "topicId": "math10-t4",
    "questionTypeId": "math10-qt6",
    "content": "Tam giác ABC có $b=6$, $c=8$, $A=60^\\circ$. Cạnh a bằng bao nhiêu?",
    "responseType": "single_choice",
    "difficulty": "medium",
    "sourceType": "manual",
    "options": [
      "A. $10$",
      "B. $2\\sqrt7$",
      "C. $\\sqrt{76}$",
      "D. $2\\sqrt{13}$"
    ],
    "correctAnswer": "D",
    "acceptedAnswers": [
      "D"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m4-q009",
    "subjectId": "math",
    "topicId": "math10-t4",
    "questionTypeId": "math10-qt6",
    "content": "Tam giác ABC có $A=30^\\circ$, $B=60^\\circ$, $c=10$. Cặp $(a;b)$ là gì?",
    "responseType": "single_choice",
    "difficulty": "medium",
    "sourceType": "manual",
    "options": [
      "A. $(5;5\\sqrt3)$",
      "B. $(5\\sqrt3;5)$",
      "C. $(10;10\\sqrt3)$",
      "D. $(5;10)$"
    ],
    "correctAnswer": "A",
    "acceptedAnswers": [
      "A"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m4-q010",
    "subjectId": "math",
    "topicId": "math10-t4",
    "questionTypeId": "math10-qt6",
    "content": "Tam giác có $a=7$, $b=8$, $c=9$. Giá trị $\\cos A$ bằng bao nhiêu?",
    "responseType": "single_choice",
    "difficulty": "medium",
    "sourceType": "manual",
    "options": [
      "A. $\\frac13$",
      "B. $\\frac23$",
      "C. $\\frac12$",
      "D. $-\\frac23$"
    ],
    "correctAnswer": "B",
    "acceptedAnswers": [
      "B"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m4-q011",
    "subjectId": "math",
    "topicId": "math10-t4",
    "questionTypeId": "math10-qt6",
    "content": "Tam giác có $a=6$, $b=8$, $A=30^\\circ$. Có bao nhiêu tam giác thỏa mãn?",
    "responseType": "single_choice",
    "difficulty": "medium",
    "sourceType": "manual",
    "options": [
      "A. $0$",
      "B. $1$",
      "C. $2$",
      "D. $3$"
    ],
    "correctAnswer": "C",
    "acceptedAnswers": [
      "C"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m4-q012",
    "subjectId": "math",
    "topicId": "math10-t4",
    "questionTypeId": "math10-qt6",
    "content": "Tam giác có $a=7$, $b=9$, $C=60^\\circ$. Cạnh c bằng bao nhiêu?",
    "responseType": "single_choice",
    "difficulty": "hard",
    "sourceType": "manual",
    "options": [
      "A. $4$",
      "B. $\\sqrt{193}$",
      "C. $8$",
      "D. $\\sqrt{67}$"
    ],
    "correctAnswer": "D",
    "acceptedAnswers": [
      "D"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m4-q013",
    "subjectId": "math",
    "topicId": "math10-t4",
    "questionTypeId": "math10-qt6",
    "content": "Tam giác có $a=10$, $A=30^\\circ$, $B=120^\\circ$. Chu vi bằng bao nhiêu?",
    "responseType": "single_choice",
    "difficulty": "hard",
    "sourceType": "manual",
    "options": [
      "A. $20+10\\sqrt3$",
      "B. $10+20\\sqrt3$",
      "C. $30$",
      "D. $20+5\\sqrt3$"
    ],
    "correctAnswer": "A",
    "acceptedAnswers": [
      "A"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m4-q014",
    "subjectId": "math",
    "topicId": "math10-t4",
    "questionTypeId": "math10-qt6",
    "content": "Tam giác có ba cạnh 5, 7, 8. Góc đối diện cạnh 8 thuộc loại nào?",
    "responseType": "single_choice",
    "difficulty": "hard",
    "sourceType": "manual",
    "options": [
      "A. Góc vuông",
      "B. Góc nhọn",
      "C. Góc tù",
      "D. Không xác định"
    ],
    "correctAnswer": "B",
    "acceptedAnswers": [
      "B"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m4-q015",
    "subjectId": "math",
    "topicId": "math10-t4",
    "questionTypeId": "math10-qt6",
    "content": "Tam giác ABC có $A=45^\\circ$, $B=75^\\circ$, $a=4\\sqrt2$. Cạnh c bằng bao nhiêu?",
    "responseType": "single_choice",
    "difficulty": "hard",
    "sourceType": "manual",
    "options": [
      "A. $4$",
      "B. $8$",
      "C. $4\\sqrt3$",
      "D. $2\\sqrt6$"
    ],
    "correctAnswer": "C",
    "acceptedAnswers": [
      "C"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m4-q016",
    "subjectId": "math",
    "topicId": "math10-t4",
    "questionTypeId": "math10-qt6",
    "content": "Thang dài 5 m tựa tường, tạo với mặt đất góc $60^\\circ$. Đầu thang cao bao nhiêu?",
    "responseType": "single_choice",
    "difficulty": "easy",
    "sourceType": "manual",
    "options": [
      "A. $\\frac52$",
      "B. $5\\sqrt3$",
      "C. $10$",
      "D. $\\frac{5\\sqrt3}{2}$"
    ],
    "correctAnswer": "D",
    "acceptedAnswers": [
      "D"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m4-q017",
    "subjectId": "math",
    "topicId": "math10-t4",
    "questionTypeId": "math10-qt6",
    "content": "Bóng cây dài 10 m, tia nắng tạo với mặt đất góc $45^\\circ$. Cây cao bao nhiêu?",
    "responseType": "single_choice",
    "difficulty": "easy",
    "sourceType": "manual",
    "options": [
      "A. $10$",
      "B. $5$",
      "C. $10\\sqrt2$",
      "D. $20$"
    ],
    "correctAnswer": "A",
    "acceptedAnswers": [
      "A"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m4-q018",
    "subjectId": "math",
    "topicId": "math10-t4",
    "questionTypeId": "math10-qt6",
    "content": "Hai người đi từ cùng điểm theo hai hướng vuông góc, lần lượt 3 km và 4 km. Khoảng cách giữa họ là bao nhiêu?",
    "responseType": "single_choice",
    "difficulty": "easy",
    "sourceType": "manual",
    "options": [
      "A. $1$",
      "B. $5$",
      "C. $7$",
      "D. $12$"
    ],
    "correctAnswer": "B",
    "acceptedAnswers": [
      "B"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m4-q019",
    "subjectId": "math",
    "topicId": "math10-t4",
    "questionTypeId": "math10-qt6",
    "content": "Hai tàu rời cùng cảng, đi 20 km và 30 km theo hai hướng tạo góc $60^\\circ$. Khoảng cách giữa hai tàu là bao nhiêu?",
    "responseType": "single_choice",
    "difficulty": "medium",
    "sourceType": "manual",
    "options": [
      "A. $10$",
      "B. $50$",
      "C. $10\\sqrt7$",
      "D. $10\\sqrt{13}$"
    ],
    "correctAnswer": "C",
    "acceptedAnswers": [
      "C"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m4-q020",
    "subjectId": "math",
    "topicId": "math10-t4",
    "questionTypeId": "math10-qt6",
    "content": "Đứng cách chân tháp 20 m, góc nâng đến đỉnh là $30^\\circ$. Bỏ qua chiều cao mắt, tháp cao bao nhiêu?",
    "responseType": "single_choice",
    "difficulty": "medium",
    "sourceType": "manual",
    "options": [
      "A. $10$",
      "B. $20\\sqrt3$",
      "C. $40$",
      "D. $\\frac{20\\sqrt3}{3}$"
    ],
    "correctAnswer": "D",
    "acceptedAnswers": [
      "D"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m4-q021",
    "subjectId": "math",
    "topicId": "math10-t4",
    "questionTypeId": "math10-qt6",
    "content": "Trên bờ chọn AB=100 m. Các góc nhìn đến điểm C bên kia sông là $A=B=45^\\circ$. Khoảng cách AC bằng bao nhiêu?",
    "responseType": "single_choice",
    "difficulty": "medium",
    "sourceType": "manual",
    "options": [
      "A. $50\\sqrt2$",
      "B. $100$",
      "C. $100\\sqrt2$",
      "D. $50$"
    ],
    "correctAnswer": "A",
    "acceptedAnswers": [
      "A"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m4-q022",
    "subjectId": "math",
    "topicId": "math10-t4",
    "questionTypeId": "math10-qt6",
    "content": "Một dốc dài 8 m tạo với mặt đất góc $30^\\circ$. Độ cao tăng được là bao nhiêu?",
    "responseType": "single_choice",
    "difficulty": "medium",
    "sourceType": "manual",
    "options": [
      "A. $4\\sqrt3$",
      "B. $4$",
      "C. $8\\sqrt3$",
      "D. $16$"
    ],
    "correctAnswer": "B",
    "acceptedAnswers": [
      "B"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m4-q023",
    "subjectId": "math",
    "topicId": "math10-t4",
    "questionTypeId": "math10-qt6",
    "content": "Hai điểm quan sát thẳng hàng cách nhau 40 m; điểm gần chân tháp có góc nâng 60°, điểm xa có góc nâng 30°. Chiều cao tháp là bao nhiêu?",
    "responseType": "single_choice",
    "difficulty": "hard",
    "sourceType": "manual",
    "options": [
      "A. $40\\sqrt3$",
      "B. $20$",
      "C. $20\\sqrt3$",
      "D. $40$"
    ],
    "correctAnswer": "C",
    "acceptedAnswers": [
      "C"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m4-q024",
    "subjectId": "math",
    "topicId": "math10-t4",
    "questionTypeId": "math10-qt6",
    "content": "Hai xe xuất phát cùng điểm, đi 60 km và 80 km theo hai hướng tạo góc $120^\\circ$. Khoảng cách giữa hai xe là bao nhiêu?",
    "responseType": "single_choice",
    "difficulty": "hard",
    "sourceType": "manual",
    "options": [
      "A. $100$",
      "B. $20\\sqrt{13}$",
      "C. $140$",
      "D. $20\\sqrt{37}$"
    ],
    "correctAnswer": "D",
    "acceptedAnswers": [
      "D"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m4-q025",
    "subjectId": "math",
    "topicId": "math10-t4",
    "questionTypeId": "math10-qt19",
    "content": "Giá trị $\\sin30^\\circ$ bằng bao nhiêu?",
    "responseType": "single_choice",
    "difficulty": "easy",
    "sourceType": "manual",
    "options": [
      "A. $\\frac12$",
      "B. $\\frac{\\sqrt3}{2}$",
      "C. $1$",
      "D. $0$"
    ],
    "correctAnswer": "A",
    "acceptedAnswers": [
      "A"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m4-q026",
    "subjectId": "math",
    "topicId": "math10-t4",
    "questionTypeId": "math10-qt19",
    "content": "Giá trị $\\cos60^\\circ$ bằng bao nhiêu?",
    "responseType": "single_choice",
    "difficulty": "easy",
    "sourceType": "manual",
    "options": [
      "A. $\\frac{\\sqrt3}{2}$",
      "B. $\\frac12$",
      "C. $-\\frac12$",
      "D. $1$"
    ],
    "correctAnswer": "B",
    "acceptedAnswers": [
      "B"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m4-q027",
    "subjectId": "math",
    "topicId": "math10-t4",
    "questionTypeId": "math10-qt19",
    "content": "Giá trị $\\tan45^\\circ$ bằng bao nhiêu?",
    "responseType": "single_choice",
    "difficulty": "easy",
    "sourceType": "manual",
    "options": [
      "A. $0$",
      "B. $\\sqrt3$",
      "C. $1$",
      "D. $\\frac{\\sqrt3}{3}$"
    ],
    "correctAnswer": "C",
    "acceptedAnswers": [
      "C"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m4-q028",
    "subjectId": "math",
    "topicId": "math10-t4",
    "questionTypeId": "math10-qt19",
    "content": "Dấu của $\\cos120^\\circ$ là gì?",
    "responseType": "single_choice",
    "difficulty": "medium",
    "sourceType": "manual",
    "options": [
      "A. Dương",
      "B. Bằng 0",
      "C. Không xác định",
      "D. Âm"
    ],
    "correctAnswer": "D",
    "acceptedAnswers": [
      "D"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m4-q029",
    "subjectId": "math",
    "topicId": "math10-t4",
    "questionTypeId": "math10-qt19",
    "content": "Giá trị $\\sin150^\\circ$ bằng bao nhiêu?",
    "responseType": "single_choice",
    "difficulty": "medium",
    "sourceType": "manual",
    "options": [
      "A. $\\frac12$",
      "B. $-\\frac12$",
      "C. $\\frac{\\sqrt3}{2}$",
      "D. $-\\frac{\\sqrt3}{2}$"
    ],
    "correctAnswer": "A",
    "acceptedAnswers": [
      "A"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m4-q030",
    "subjectId": "math",
    "topicId": "math10-t4",
    "questionTypeId": "math10-qt19",
    "content": "Giá trị $\\cos135^\\circ$ bằng bao nhiêu?",
    "responseType": "single_choice",
    "difficulty": "medium",
    "sourceType": "manual",
    "options": [
      "A. $\\frac{\\sqrt2}{2}$",
      "B. $-\\frac{\\sqrt2}{2}$",
      "C. $-\\frac12$",
      "D. $\\frac12$"
    ],
    "correctAnswer": "B",
    "acceptedAnswers": [
      "B"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m4-q031",
    "subjectId": "math",
    "topicId": "math10-t4",
    "questionTypeId": "math10-qt19",
    "content": "Giá trị $\\tan135^\\circ$ bằng bao nhiêu?",
    "responseType": "single_choice",
    "difficulty": "medium",
    "sourceType": "manual",
    "options": [
      "A. $1$",
      "B. $0$",
      "C. $-1$",
      "D. $\\sqrt3$"
    ],
    "correctAnswer": "C",
    "acceptedAnswers": [
      "C"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m4-q032",
    "subjectId": "math",
    "topicId": "math10-t4",
    "questionTypeId": "math10-qt19",
    "content": "Giá trị $\\sin0^\\circ$ bằng bao nhiêu?",
    "responseType": "single_choice",
    "difficulty": "medium",
    "sourceType": "manual",
    "options": [
      "A. $1$",
      "B. $-1$",
      "C. $\\frac12$",
      "D. $0$"
    ],
    "correctAnswer": "D",
    "acceptedAnswers": [
      "D"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m4-q033",
    "subjectId": "math",
    "topicId": "math10-t4",
    "questionTypeId": "math10-qt19",
    "content": "Giá trị $\\cos180^\\circ$ bằng bao nhiêu?",
    "responseType": "single_choice",
    "difficulty": "hard",
    "sourceType": "manual",
    "options": [
      "A. $-1$",
      "B. $1$",
      "C. $0$",
      "D. $\\frac12$"
    ],
    "correctAnswer": "A",
    "acceptedAnswers": [
      "A"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m4-q034",
    "subjectId": "math",
    "topicId": "math10-t4",
    "questionTypeId": "math10-qt19",
    "content": "Tính $\\sin30^\\circ+\\cos60^\\circ$.",
    "responseType": "single_choice",
    "difficulty": "hard",
    "sourceType": "manual",
    "options": [
      "A. $0$",
      "B. $1$",
      "C. $\\frac12$",
      "D. $\\sqrt3$"
    ],
    "correctAnswer": "B",
    "acceptedAnswers": [
      "B"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m4-q035",
    "subjectId": "math",
    "topicId": "math10-t4",
    "questionTypeId": "math10-qt19",
    "content": "Tính $\\sin^260^\\circ+\\cos^260^\\circ$.",
    "responseType": "single_choice",
    "difficulty": "hard",
    "sourceType": "manual",
    "options": [
      "A. $\\frac12$",
      "B. $\\frac34$",
      "C. $1$",
      "D. $2$"
    ],
    "correctAnswer": "C",
    "acceptedAnswers": [
      "C"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m4-q036",
    "subjectId": "math",
    "topicId": "math10-t4",
    "questionTypeId": "math10-qt19",
    "content": "Giá trị $\\sin120^\\circ$ bằng bao nhiêu?",
    "responseType": "single_choice",
    "difficulty": "hard",
    "sourceType": "manual",
    "options": [
      "A. $-\\frac{\\sqrt3}{2}$",
      "B. $\\frac12$",
      "C. $-\\frac12$",
      "D. $\\frac{\\sqrt3}{2}$"
    ],
    "correctAnswer": "D",
    "acceptedAnswers": [
      "D"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m4-q037",
    "subjectId": "math",
    "topicId": "math10-t4",
    "questionTypeId": "math10-qt19",
    "content": "$\\sin(180^\\circ-\\alpha)$ bằng biểu thức nào?",
    "responseType": "single_choice",
    "difficulty": "easy",
    "sourceType": "manual",
    "options": [
      "A. $\\sin\\alpha$",
      "B. $-\\sin\\alpha$",
      "C. $\\cos\\alpha$",
      "D. $-\\cos\\alpha$"
    ],
    "correctAnswer": "A",
    "acceptedAnswers": [
      "A"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m4-q038",
    "subjectId": "math",
    "topicId": "math10-t4",
    "questionTypeId": "math10-qt19",
    "content": "$\\cos(180^\\circ-\\alpha)$ bằng biểu thức nào?",
    "responseType": "single_choice",
    "difficulty": "easy",
    "sourceType": "manual",
    "options": [
      "A. $\\cos\\alpha$",
      "B. $-\\cos\\alpha$",
      "C. $\\sin\\alpha$",
      "D. $-\\sin\\alpha$"
    ],
    "correctAnswer": "B",
    "acceptedAnswers": [
      "B"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m4-q039",
    "subjectId": "math",
    "topicId": "math10-t4",
    "questionTypeId": "math10-qt19",
    "content": "$\\tan(180^\\circ-\\alpha)$ bằng biểu thức nào?",
    "responseType": "single_choice",
    "difficulty": "easy",
    "sourceType": "manual",
    "options": [
      "A. $\\tan\\alpha$",
      "B. $\\cot\\alpha$",
      "C. $-\\tan\\alpha$",
      "D. $-\\cot\\alpha$"
    ],
    "correctAnswer": "C",
    "acceptedAnswers": [
      "C"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m4-q040",
    "subjectId": "math",
    "topicId": "math10-t4",
    "questionTypeId": "math10-qt19",
    "content": "Cho $\\sin\\alpha=3/5$, $\\alpha$ nhọn. Tính $\\cos\\alpha$.",
    "responseType": "single_choice",
    "difficulty": "medium",
    "sourceType": "manual",
    "options": [
      "A. $-\\frac45$",
      "B. $\\frac35$",
      "C. $\\frac25$",
      "D. $\\frac45$"
    ],
    "correctAnswer": "D",
    "acceptedAnswers": [
      "D"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m4-q041",
    "subjectId": "math",
    "topicId": "math10-t4",
    "questionTypeId": "math10-qt19",
    "content": "Cho $\\cos\\alpha=-5/13$, $90^\\circ<\\alpha<180^\\circ$. Tính $\\sin\\alpha$.",
    "responseType": "single_choice",
    "difficulty": "medium",
    "sourceType": "manual",
    "options": [
      "A. $\\frac{12}{13}$",
      "B. $-\\frac{12}{13}$",
      "C. $\\frac5{13}$",
      "D. $-\\frac5{13}$"
    ],
    "correctAnswer": "A",
    "acceptedAnswers": [
      "A"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m4-q042",
    "subjectId": "math",
    "topicId": "math10-t4",
    "questionTypeId": "math10-qt19",
    "content": "Cho $\\sin\\alpha=3/5$, $\\cos\\alpha=4/5$. Tính $\\tan\\alpha$.",
    "responseType": "single_choice",
    "difficulty": "medium",
    "sourceType": "manual",
    "options": [
      "A. $\\frac43$",
      "B. $\\frac34$",
      "C. $\\frac35$",
      "D. $\\frac45$"
    ],
    "correctAnswer": "B",
    "acceptedAnswers": [
      "B"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m4-q043",
    "subjectId": "math",
    "topicId": "math10-t4",
    "questionTypeId": "math10-qt19",
    "content": "Giá trị $\\sin^2x+\\cos^2x$ bằng bao nhiêu?",
    "responseType": "single_choice",
    "difficulty": "medium",
    "sourceType": "manual",
    "options": [
      "A. $0$",
      "B. $2$",
      "C. $1$",
      "D. $\\sin x+\\cos x$"
    ],
    "correctAnswer": "C",
    "acceptedAnswers": [
      "C"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m4-q044",
    "subjectId": "math",
    "topicId": "math10-t4",
    "questionTypeId": "math10-qt19",
    "content": "Với $\\cos x\\ne0$, $1+\\tan^2x$ bằng gì?",
    "responseType": "single_choice",
    "difficulty": "medium",
    "sourceType": "manual",
    "options": [
      "A. $\\frac1{\\sin^2x}$",
      "B. $\\cos^2x$",
      "C. $1$",
      "D. $\\frac1{\\cos^2x}$"
    ],
    "correctAnswer": "D",
    "acceptedAnswers": [
      "D"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m4-q045",
    "subjectId": "math",
    "topicId": "math10-t4",
    "questionTypeId": "math10-qt19",
    "content": "Tính $\\sin^230^\\circ+\\cos^230^\\circ+\\tan45^\\circ$.",
    "responseType": "single_choice",
    "difficulty": "hard",
    "sourceType": "manual",
    "options": [
      "A. $2$",
      "B. $1$",
      "C. $\\frac32$",
      "D. $3$"
    ],
    "correctAnswer": "A",
    "acceptedAnswers": [
      "A"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m4-q046",
    "subjectId": "math",
    "topicId": "math10-t4",
    "questionTypeId": "math10-qt19",
    "content": "Cho $\\tan\\alpha=-3/4$, $90^\\circ<\\alpha<180^\\circ$. Cặp $(\\sin\\alpha;\\cos\\alpha)$ là gì?",
    "responseType": "single_choice",
    "difficulty": "hard",
    "sourceType": "manual",
    "options": [
      "A. $(-\\frac35;\\frac45)$",
      "B. $(\\frac35;-\\frac45)$",
      "C. $(\\frac35;\\frac45)$",
      "D. $(-\\frac35;-\\frac45)$"
    ],
    "correctAnswer": "B",
    "acceptedAnswers": [
      "B"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m4-q047",
    "subjectId": "math",
    "topicId": "math10-t4",
    "questionTypeId": "math10-qt19",
    "content": "Rút gọn $\\dfrac{\\cos^2x}{1-\\sin^2x}$ khi biểu thức xác định.",
    "responseType": "single_choice",
    "difficulty": "hard",
    "sourceType": "manual",
    "options": [
      "A. $\\cos^2x$",
      "B. $\\sin^2x$",
      "C. $1$",
      "D. $-1$"
    ],
    "correctAnswer": "C",
    "acceptedAnswers": [
      "C"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m4-q048",
    "subjectId": "math",
    "topicId": "math10-t4",
    "questionTypeId": "math10-qt19",
    "content": "Biết $\\sin x+\\cos x=1/2$. Tính $\\sin x\\cos x$.",
    "responseType": "single_choice",
    "difficulty": "hard",
    "sourceType": "manual",
    "options": [
      "A. $\\frac38$",
      "B. $-\\frac34$",
      "C. $\\frac14$",
      "D. $-\\frac38$"
    ],
    "correctAnswer": "D",
    "acceptedAnswers": [
      "D"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m4-q049",
    "subjectId": "math",
    "topicId": "math10-t4",
    "questionTypeId": "math10-qt19",
    "content": "Trong $[0^\\circ;180^\\circ]$, $\\sin x=1/2$ khi nào?",
    "responseType": "single_choice",
    "difficulty": "easy",
    "sourceType": "manual",
    "options": [
      "A. $x=30^\\circ\\text{ hoặc }150^\\circ$",
      "B. $x=30^\\circ$",
      "C. $x=60^\\circ\\text{ hoặc }120^\\circ$",
      "D. $x=45^\\circ\\text{ hoặc }135^\\circ$"
    ],
    "correctAnswer": "A",
    "acceptedAnswers": [
      "A"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m4-q050",
    "subjectId": "math",
    "topicId": "math10-t4",
    "questionTypeId": "math10-qt19",
    "content": "Trong $[0^\\circ;180^\\circ]$, $\\cos x=0$ khi nào?",
    "responseType": "single_choice",
    "difficulty": "easy",
    "sourceType": "manual",
    "options": [
      "A. $x=0^\\circ$",
      "B. $x=90^\\circ$",
      "C. $x=180^\\circ$",
      "D. $x=45^\\circ$"
    ],
    "correctAnswer": "B",
    "acceptedAnswers": [
      "B"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m4-q051",
    "subjectId": "math",
    "topicId": "math10-t4",
    "questionTypeId": "math10-qt19",
    "content": "Trong $[0^\\circ;180^\\circ)$, $\\tan x=1$ khi nào?",
    "responseType": "single_choice",
    "difficulty": "easy",
    "sourceType": "manual",
    "options": [
      "A. $x=135^\\circ$",
      "B. $x=90^\\circ$",
      "C. $x=45^\\circ$",
      "D. $x=30^\\circ$"
    ],
    "correctAnswer": "C",
    "acceptedAnswers": [
      "C"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m4-q052",
    "subjectId": "math",
    "topicId": "math10-t4",
    "questionTypeId": "math10-qt19",
    "content": "Trong $[0^\\circ;180^\\circ]$, $\\cos x=-\\sqrt3/2$ khi nào?",
    "responseType": "single_choice",
    "difficulty": "medium",
    "sourceType": "manual",
    "options": [
      "A. $x=30^\\circ$",
      "B. $x=120^\\circ$",
      "C. $x=60^\\circ$",
      "D. $x=150^\\circ$"
    ],
    "correctAnswer": "D",
    "acceptedAnswers": [
      "D"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m4-q053",
    "subjectId": "math",
    "topicId": "math10-t4",
    "questionTypeId": "math10-qt19",
    "content": "Cho $\\sin\\alpha=4/5$ và α là góc tù. Tính $\\cos\\alpha$.",
    "responseType": "single_choice",
    "difficulty": "medium",
    "sourceType": "manual",
    "options": [
      "A. $-\\frac35$",
      "B. $\\frac35$",
      "C. $-\\frac45$",
      "D. $\\frac15$"
    ],
    "correctAnswer": "A",
    "acceptedAnswers": [
      "A"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m4-q054",
    "subjectId": "math",
    "topicId": "math10-t4",
    "questionTypeId": "math10-qt19",
    "content": "Tính $2\\sin30^\\circ-3\\cos60^\\circ$.",
    "responseType": "single_choice",
    "difficulty": "medium",
    "sourceType": "manual",
    "options": [
      "A. $\\frac12$",
      "B. $-\\frac12$",
      "C. $1$",
      "D. $-1$"
    ],
    "correctAnswer": "B",
    "acceptedAnswers": [
      "B"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m4-q055",
    "subjectId": "math",
    "topicId": "math10-t4",
    "questionTypeId": "math10-qt19",
    "content": "Nếu $\\cos A<0$ với $0^\\circ<A<180^\\circ$, góc A thuộc loại nào?",
    "responseType": "single_choice",
    "difficulty": "medium",
    "sourceType": "manual",
    "options": [
      "A. Góc nhọn",
      "B. Góc vuông",
      "C. Góc tù",
      "D. Không xác định"
    ],
    "correctAnswer": "C",
    "acceptedAnswers": [
      "C"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m4-q056",
    "subjectId": "math",
    "topicId": "math10-t4",
    "questionTypeId": "math10-qt19",
    "content": "Trong $(0^\\circ;180^\\circ)$, $\\tan x=-1$ khi nào?",
    "responseType": "single_choice",
    "difficulty": "medium",
    "sourceType": "manual",
    "options": [
      "A. $x=45^\\circ$",
      "B. $x=90^\\circ$",
      "C. $x=150^\\circ$",
      "D. $x=135^\\circ$"
    ],
    "correctAnswer": "D",
    "acceptedAnswers": [
      "D"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m4-q057",
    "subjectId": "math",
    "topicId": "math10-t4",
    "questionTypeId": "math10-qt19",
    "content": "Trong $[0^\\circ;180^\\circ]$, phương trình $2\\cos x=1$ có nghiệm nào?",
    "responseType": "single_choice",
    "difficulty": "hard",
    "sourceType": "manual",
    "options": [
      "A. $x=60^\\circ$",
      "B. $x=120^\\circ$",
      "C. $x=30^\\circ$",
      "D. $x=60^\\circ\\text{ hoặc }120^\\circ$"
    ],
    "correctAnswer": "A",
    "acceptedAnswers": [
      "A"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m4-q058",
    "subjectId": "math",
    "topicId": "math10-t4",
    "questionTypeId": "math10-qt19",
    "content": "Cho $\\sin\\alpha=12/13$, α tù. Tính $\\tan\\alpha$.",
    "responseType": "single_choice",
    "difficulty": "hard",
    "sourceType": "manual",
    "options": [
      "A. $\\frac{12}{5}$",
      "B. $-\\frac{12}{5}$",
      "C. $-\\frac5{12}$",
      "D. $\\frac5{12}$"
    ],
    "correctAnswer": "B",
    "acceptedAnswers": [
      "B"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m4-q059",
    "subjectId": "math",
    "topicId": "math10-t4",
    "questionTypeId": "math10-qt19",
    "content": "Rút gọn $P=\\dfrac{1-\\cos^2x}{\\sin^2x}$ khi xác định.",
    "responseType": "single_choice",
    "difficulty": "hard",
    "sourceType": "manual",
    "options": [
      "A. $0$",
      "B. $-1$",
      "C. $1$",
      "D. $\\tan^2x$"
    ],
    "correctAnswer": "C",
    "acceptedAnswers": [
      "C"
    ],
    "validatorType": "choice"
  },
  {
    "id": "math10-m4-q060",
    "subjectId": "math",
    "topicId": "math10-t4",
    "questionTypeId": "math10-qt19",
    "content": "Biết $\\cos\\alpha=-8/17$, α tù. Tính $\\sin\\alpha+\\tan\\alpha$.",
    "responseType": "single_choice",
    "difficulty": "hard",
    "sourceType": "manual",
    "options": [
      "A. $\\frac{135}{136}$",
      "B. $\\frac{15}{17}$",
      "C. $-\\frac{15}{8}$",
      "D. $-\\frac{135}{136}$"
    ],
    "correctAnswer": "D",
    "acceptedAnswers": [
      "D"
    ],
    "validatorType": "choice"
  }
];
