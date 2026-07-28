import type { PracticeRole, Question, QuestionPracticeMetadata, QuestionRepresentationType, Solution } from '@/types';

interface ExpansionSeed {
  id: string;
  subTypeId: string;
  content: string;
  difficulty: 'easy' | 'medium' | 'hard';
  correctAnswer: string;
  reasoning: [string, string];
  practiceRole: PracticeRole;
  representationType: QuestionRepresentationType;
  media?: Question['media'];
}

export const g10MathPracticeExpansionSeeds: ExpansionSeed[] = [
  {
    id: 'math10-m8x-q001', subTypeId: 'math10-qt14-st1',
    content: 'Đường thẳng qua $M(1;2)$, có pháp tuyến $(3;-4)$, được viết dạng $3x-4y+c=0$. Tính c.',
    difficulty: 'medium', correctAnswer: '5',
    reasoning: ['Thay $M(1;2)$ vào phương trình: $3-8+c=0$.', 'Suy ra $c=5$.'],
    practiceRole: 'near_transfer', representationType: 'equation'
  },
  {
    id: 'math10-m8x-q002', subTypeId: 'math10-qt14-st1',
    content: 'Đường thẳng qua $A(-2;1)$ và $B(4;4)$ có dạng tối giản $x-2y+c=0$. Tính tổng các hệ số $1-2+c$.',
    difficulty: 'medium', correctAnswer: '3',
    reasoning: ['Thay A hoặc B vào được $-2-2+c=0$, nên $c=4$.', 'Tổng hệ số là $1-2+4=3$.'],
    practiceRole: 'representation_switch', representationType: 'graph'
  },
  {
    id: 'math10-m8x-q003', subTypeId: 'math10-qt14-st1',
    content: 'Đường thẳng qua $(3;-1)$ và song song với $2x-3y+5=0$ có dạng $2x-3y+c=0$. Tính c.',
    difficulty: 'hard', correctAnswer: '-9',
    reasoning: ['Đường song song giữ cùng cặp hệ số pháp tuyến $(2;-3)$.', 'Thay điểm: $2\\cdot3-3(-1)+c=0$, suy ra $c=-9$.'],
    practiceRole: 'far_transfer', representationType: 'equation'
  },
  {
    id: 'math10-m8x-q004', subTypeId: 'math10-qt14-st1',
    content: 'Đường thẳng qua $(2;5)$ và vuông góc với $x+2y-3=0$ có dạng $2x-y+c=0$. Tính c.',
    difficulty: 'medium', correctAnswer: '1',
    reasoning: ['Pháp tuyến $(2;-1)$ của đường mới vuông góc với pháp tuyến $(1;2)$ của đường đã cho.', 'Thay $(2;5)$: $4-5+c=0$, nên $c=1$.'],
    practiceRole: 'retention', representationType: 'diagram'
  },
  {
    id: 'math10-m8x-q005', subTypeId: 'math10-qt14-st1',
    content: 'Điểm $M(t)$ trên đường thẳng $x=1+3t$, $y=-2+4t$ đồng thời thuộc đường $2x-y-8=0$. Tính t.',
    difficulty: 'hard', correctAnswer: '2',
    reasoning: ['Thay biểu thức tham số vào đường thứ hai: $2(1+3t)-(-2+4t)-8=0$.', 'Rút gọn được $2t-4=0$, nên $t=2$.'],
    practiceRole: 'mastery_holdout', representationType: 'graph'
  },
  {
    id: 'math10-m8x-q006', subTypeId: 'math10-qt14-st1',
    content: 'Trong tam giác $A(2;3)$, $B(-1;1)$, $C(5;-3)$, trung tuyến từ A có phương trình $x+c=0$. Tính $|c|$.',
    difficulty: 'easy', correctAnswer: '2',
    reasoning: ['Trung điểm BC là $(2;-1)$.', 'Trung tuyến qua A và trung điểm có phương trình $x=2$, tức $x-2=0$, nên $|c|=2$.'],
    practiceRole: 'misconception_check', representationType: 'diagram'
  },

  {
    id: 'math10-m8x-q007', subTypeId: 'math10-qt14-st3',
    content: 'Tính khoảng cách từ $M(1;2)$ đến đường thẳng $3x+4y-10=0$.',
    difficulty: 'medium', correctAnswer: '0.2',
    reasoning: ['Tử số là $|3+8-10|=1$, mẫu là $\\sqrt{3^2+4^2}=5$.', 'Khoảng cách bằng $1/5=0{,}2$.'],
    practiceRole: 'near_transfer', representationType: 'equation'
  },
  {
    id: 'math10-m8x-q008', subTypeId: 'math10-qt14-st3',
    content: 'Tính khoảng cách giữa hai đường song song $3x+4y-2=0$ và $3x+4y+8=0$.',
    difficulty: 'medium', correctAnswer: '2',
    reasoning: ['Hai phương trình đã có cùng hệ số x, y.', 'Khoảng cách là $|-2-8|/5=2$.'],
    practiceRole: 'representation_switch', representationType: 'graph'
  },
  {
    id: 'math10-m8x-q009', subTypeId: 'math10-qt14-st3',
    content: 'Có bao nhiêu giá trị thực của k để khoảng cách từ O đến đường $3x+4y+k=0$ bằng 2?',
    difficulty: 'hard', correctAnswer: '2',
    reasoning: ['$d(O,d)=|k|/5=2$ nên $|k|=10$.', 'Có hai giá trị $k=10$ và $k=-10$.'],
    practiceRole: 'far_transfer', representationType: 'equation'
  },
  {
    id: 'math10-m8x-q010', subTypeId: 'math10-qt14-st3',
    content: 'Điểm $M(t;0)$ trên trục Ox cách đều hai đường thẳng $x=-2$ và $x=6$. Tính t.',
    difficulty: 'medium', correctAnswer: '2',
    reasoning: ['Điều kiện là $|t+2|=|t-6|$.', 'M nằm trên đường trung trực giữa hai đường, nên $t=(-2+6)/2=2$.'],
    practiceRole: 'retention', representationType: 'diagram'
  },
  {
    id: 'math10-m8x-q011', subTypeId: 'math10-qt14-st3',
    content: 'Tam giác có $A(0;0)$, $B(6;0)$, $C(2;4)$. Tính bình phương khoảng cách từ C đến đường trung tuyến kẻ từ A.',
    difficulty: 'hard', correctAnswer: '7.2',
    reasoning: ['Trung điểm BC là $(4;2)$, nên trung tuyến từ A có phương trình $x-2y=0$.', 'Khoảng cách từ C đến trung tuyến là $6/\\sqrt5$, nên bình phương khoảng cách bằng $36/5=7{,}2$.'],
    practiceRole: 'mastery_holdout', representationType: 'diagram'
  },
  {
    id: 'math10-m8x-q012', subTypeId: 'math10-qt14-st3',
    content: 'Giao điểm của $x+y=4$ và $x-y=2$ cách đường $3x+4y-8=0$ bao nhiêu?',
    difficulty: 'easy', correctAnswer: '1',
    reasoning: ['Giải hệ được giao điểm $(3;1)$.', 'Khoảng cách là $|9+4-8|/5=1$.'],
    practiceRole: 'misconception_check', representationType: 'equation'
  },

  {
    id: 'math10-m8x-q013', subTypeId: 'math10-qt15-st2',
    content: 'Đường tròn tâm $I(2;-3)$ đi qua $M(5;1)$. Tính $R^2$.',
    difficulty: 'medium', correctAnswer: '25',
    reasoning: ['$R^2=IM^2=(5-2)^2+(1+3)^2$.', '$R^2=9+16=25$.'],
    practiceRole: 'near_transfer', representationType: 'equation'
  },
  {
    id: 'math10-m8x-q014', subTypeId: 'math10-qt15-st2',
    content: 'Đường tròn có đường kính $A(-2;1)$, $B(4;5)$, tâm $I(a;b)$. Tính $a+b+R^2$.',
    difficulty: 'medium', correctAnswer: '17',
    reasoning: ['Tâm là trung điểm $(1;3)$ và $R^2=IA^2=3^2+2^2=13$.', '$a+b+R^2=1+3+13=17$.'],
    practiceRole: 'representation_switch', representationType: 'diagram',
    media: [{
      id: 'math10-m8x-q014-media-circle',
      type: 'diagram',
      src: '/assets/math/grade10/module8-circle-diameter.svg',
      alt: 'Đường tròn có A âm hai một và B bốn năm là hai đầu đường kính, tâm I tại một ba.',
      caption: 'Tâm đường tròn là trung điểm của đường kính AB',
      longDescription: 'Đoạn AB đi qua tâm I. Tọa độ I được tính bằng trung bình cộng từng tọa độ tương ứng của A và B.',
      width: 760,
      height: 440
    }]
  },
  {
    id: 'math10-m8x-q015', subTypeId: 'math10-qt15-st2',
    content: 'Đường tròn qua $(0;0)$, $(4;0)$, $(0;6)$ có dạng $x^2+y^2+Dx+Ey+F=0$. Tính $D+E+F$.',
    difficulty: 'hard', correctAnswer: '-10',
    reasoning: ['Thay ba điểm lần lượt được $F=0$, $D=-4$, $E=-6$.', 'Do đó $D+E+F=-10$.'],
    practiceRole: 'far_transfer', representationType: 'equation'
  },
  {
    id: 'math10-m8x-q016', subTypeId: 'math10-qt15-st2',
    content: 'Đường tròn có tâm nằm trên Ox và đi qua $A(1;2)$, $B(5;2)$. Biết tâm có hoành độ dương. Tính hoành độ tâm cộng $R^2$.',
    difficulty: 'medium', correctAnswer: '11',
    reasoning: ['Tâm nằm trên trung trực AB là $x=3$, nên tâm $(3;0)$.', '$R^2=(3-1)^2+(0-2)^2=8$, tổng bằng 11.'],
    practiceRole: 'retention', representationType: 'graph'
  },
  {
    id: 'math10-m8x-q017', subTypeId: 'math10-qt15-st2',
    content: 'Có bao nhiêu đường tròn có tâm trong góc phần tư I, tiếp xúc cả hai trục tọa độ và đi qua điểm $M(6;3)$?',
    difficulty: 'hard', correctAnswer: '2',
    reasoning: ['Đặt tâm $(r;r)$, bán kính r. Điều kiện đi qua M cho $(6-r)^2+(3-r)^2=r^2$.', 'Suy ra $r^2-18r+45=0$, có hai nghiệm dương $r=3,15$, nên có hai đường tròn.'],
    practiceRole: 'mastery_holdout', representationType: 'diagram'
  },
  {
    id: 'math10-m8x-q018', subTypeId: 'math10-qt15-st2',
    content: 'Đường tròn có tâm trên $y=x$ và đi qua $O(0;0)$, $A(2;0)$. Tính tổng hai tọa độ tâm và $R^2$.',
    difficulty: 'easy', correctAnswer: '4',
    reasoning: ['Tâm thuộc trung trực $x=1$ của OA và thuộc $y=x$, nên tâm $(1;1)$.', '$R^2=2$, tổng cần tìm là $1+1+2=4$.'],
    practiceRole: 'misconception_check', representationType: 'graph'
  },

  {
    id: 'math10-m8x-q019', subTypeId: 'math10-qt15-st3',
    content: 'Tiếp tuyến tại $M(5;0)$ của đường tròn $x^2+y^2=25$ có dạng $x+c=0$. Tính c.',
    difficulty: 'medium', correctAnswer: '-5',
    reasoning: ['Bán kính OM nằm ngang nên tiếp tuyến thẳng đứng.', 'Tiếp tuyến là $x=5$, tức $x-5=0$, nên $c=-5$.'],
    practiceRole: 'near_transfer', representationType: 'diagram'
  },
  {
    id: 'math10-m8x-q020', subTypeId: 'math10-qt15-st3',
    content: 'Đường tròn tâm $(2;-1)$, bán kính 3 có tiếp tuyến song song Ox nằm phía trên tâm. Tiếp tuyến có dạng $y=k$. Tính k.',
    difficulty: 'medium', correctAnswer: '2',
    reasoning: ['Tiếp tuyến ngang phía trên cách tung độ tâm 3 đơn vị.', '$k=-1+3=2$.'],
    practiceRole: 'representation_switch', representationType: 'graph'
  },
  {
    id: 'math10-m8x-q021', subTypeId: 'math10-qt15-st3',
    content: 'Điểm P cách tâm I của đường tròn 5 đơn vị, bán kính bằng 3. Hai tiếp tuyến từ P tiếp xúc tại A và B. Tính $PA+PB$.',
    difficulty: 'hard', correctAnswer: '8',
    reasoning: ['$IA\\perp PA$ nên $PA=\\sqrt{PI^2-R^2}=\\sqrt{25-9}=4$.', 'Hai tiếp tuyến xuất phát từ P có độ dài bằng nhau, nên $PA+PB=8$.'],
    practiceRole: 'far_transfer', representationType: 'diagram'
  },
  {
    id: 'math10-m8x-q022', subTypeId: 'math10-qt15-st3',
    content: 'Có bao nhiêu giá trị thực của k để $x+y+k=0$ tiếp xúc với đường tròn tâm O, bán kính $\\sqrt2$?',
    difficulty: 'medium', correctAnswer: '2',
    reasoning: ['Điều kiện tiếp xúc: $|k|/\\sqrt2=\\sqrt2$, nên $|k|=2$.', 'Có hai giá trị $k=2$ và $k=-2$.'],
    practiceRole: 'retention', representationType: 'equation'
  },
  {
    id: 'math10-m8x-q023', subTypeId: 'math10-qt15-st3',
    content: 'Đường thẳng $3x+4y+c=0$ tiếp xúc đường tròn tâm $(1;2)$, bán kính 5. Biết $c>0$. Tính c.',
    difficulty: 'hard', correctAnswer: '14',
    reasoning: ['$|3+8+c|/5=5$, nên $|11+c|=25$.', 'Hai nghiệm là 14 và -36; điều kiện $c>0$ chọn $c=14$.'],
    practiceRole: 'mastery_holdout', representationType: 'equation'
  },
  {
    id: 'math10-m8x-q024', subTypeId: 'math10-qt15-st3',
    content: 'Đường thẳng $3x+4y-20=0$ và đường tròn tâm O, bán kính 4 có bao nhiêu giao điểm?',
    difficulty: 'easy', correctAnswer: '1',
    reasoning: ['Khoảng cách từ O đến đường là $20/5=4$, đúng bằng bán kính.', 'Đường thẳng tiếp xúc đường tròn nên có một giao điểm.'],
    practiceRole: 'misconception_check', representationType: 'graph'
  },

  {
    id: 'math10-m8x-q025', subTypeId: 'math10-qt16-st1',
    content: 'Elip $\\dfrac{x^2}{25}+\\dfrac{y^2}{9}=1$ có tiêu cự $F_1F_2$ bằng bao nhiêu?',
    difficulty: 'medium', correctAnswer: '8',
    reasoning: ['$c^2=25-9=16$ nên $c=4$.', 'Tiêu cự $F_1F_2=2c=8$.'],
    practiceRole: 'near_transfer', representationType: 'equation'
  },
  {
    id: 'math10-m8x-q026', subTypeId: 'math10-qt16-st1',
    content: 'Elip $\\dfrac{x^2}{16}+\\dfrac{y^2}{25}=1$ có giá trị c bằng bao nhiêu?',
    difficulty: 'medium', correctAnswer: '3',
    reasoning: ['Bán trục lớn theo Oy có $a^2=25$, còn $b^2=16$.', '$c=\\sqrt{25-16}=3$.'],
    practiceRole: 'representation_switch', representationType: 'graph'
  },
  {
    id: 'math10-m8x-q027', subTypeId: 'math10-qt16-st1',
    content: 'Elip có hai đỉnh trục lớn $(\\pm6;0)$ và hai tiêu điểm $(\\pm4;0)$. Tính $b^2$.',
    difficulty: 'hard', correctAnswer: '20',
    reasoning: ['$a=6$, $c=4$.', 'Với elip, $b^2=a^2-c^2=36-16=20$.'],
    practiceRole: 'far_transfer', representationType: 'diagram'
  },
  {
    id: 'math10-m8x-q028', subTypeId: 'math10-qt16-st1',
    content: 'Elip có $a=5$, $b=4$. Tổng độ dài trục lớn và trục nhỏ bằng bao nhiêu?',
    difficulty: 'medium', correctAnswer: '18',
    reasoning: ['Trục lớn dài $2a=10$, trục nhỏ dài $2b=8$.', 'Tổng bằng $10+8=18$.'],
    practiceRole: 'retention', representationType: 'diagram'
  },
  {
    id: 'math10-m8x-q029', subTypeId: 'math10-qt16-st1',
    content: 'Elip có tâm sai $e=0{,}6$ và bán trục lớn $a=10$. Tính bán trục nhỏ b.',
    difficulty: 'hard', correctAnswer: '8',
    reasoning: ['$c=ea=6$.', '$b=\\sqrt{a^2-c^2}=\\sqrt{100-36}=8$.'],
    practiceRole: 'mastery_holdout', representationType: 'equation'
  },
  {
    id: 'math10-m8x-q030', subTypeId: 'math10-qt16-st1',
    content: 'Điểm $M(3;y)$ với $y>0$ thuộc elip $\\dfrac{x^2}{25}+\\dfrac{y^2}{16}=1$. Tính y.',
    difficulty: 'easy', correctAnswer: '3.2',
    reasoning: ['$9/25+y^2/16=1$ nên $y^2/16=16/25$.', '$y>0$ nên $y=16/5=3{,}2$.'],
    practiceRole: 'misconception_check', representationType: 'graph'
  },

  {
    id: 'math10-m8x-q031', subTypeId: 'math10-qt16-st2',
    content: 'Hypebol $\\dfrac{x^2}{9}-\\dfrac{y^2}{16}=1$ có tiêu cự $F_1F_2$ bằng bao nhiêu?',
    difficulty: 'medium', correctAnswer: '10',
    reasoning: ['$c^2=9+16=25$ nên $c=5$.', 'Tiêu cự bằng $2c=10$.'],
    practiceRole: 'near_transfer', representationType: 'equation'
  },
  {
    id: 'math10-m8x-q032', subTypeId: 'math10-qt16-st2',
    content: 'Hypebol $\\dfrac{y^2}{4}-\\dfrac{x^2}{5}=1$ có giá trị c bằng bao nhiêu?',
    difficulty: 'medium', correctAnswer: '3',
    reasoning: ['$a^2=4$, $b^2=5$ dù trục thực nằm trên Oy.', '$c=\\sqrt{4+5}=3$.'],
    practiceRole: 'representation_switch', representationType: 'graph'
  },
  {
    id: 'math10-m8x-q033', subTypeId: 'math10-qt16-st2',
    content: 'Hypebol $\\dfrac{x^2}{25}-\\dfrac{y^2}{9}=1$ có hệ số góc dương của đường tiệm cận bằng bao nhiêu?',
    difficulty: 'hard', correctAnswer: '0.6',
    reasoning: ['Tiệm cận có dạng $y=\\pm(b/a)x$.', '$b/a=3/5=0{,}6$.'],
    practiceRole: 'far_transfer', representationType: 'graph'
  },
  {
    id: 'math10-m8x-q034', subTypeId: 'math10-qt16-st2',
    content: 'Hypebol có hai đỉnh $(\\pm4;0)$ và hai tiêu điểm $(\\pm5;0)$. Tính $b^2$.',
    difficulty: 'medium', correctAnswer: '9',
    reasoning: ['$a=4$, $c=5$.', 'Với hypebol, $b^2=c^2-a^2=25-16=9$.'],
    practiceRole: 'retention', representationType: 'diagram'
  },
  {
    id: 'math10-m8x-q035', subTypeId: 'math10-qt16-st2',
    content: 'Hypebol có tâm sai $e=5/3$ và bán trục thực $a=6$. Tính b.',
    difficulty: 'hard', correctAnswer: '8',
    reasoning: ['$c=ea=10$.', '$b=\\sqrt{c^2-a^2}=\\sqrt{100-36}=8$.'],
    practiceRole: 'mastery_holdout', representationType: 'equation'
  },
  {
    id: 'math10-m8x-q036', subTypeId: 'math10-qt16-st2',
    content: 'Điểm $M(3\\sqrt2;y)$ với $y>0$ thuộc hypebol $\\dfrac{x^2}{9}-\\dfrac{y^2}{16}=1$. Tính y.',
    difficulty: 'easy', correctAnswer: '4',
    reasoning: ['$x^2/9=18/9=2$, nên $2-y^2/16=1$.', '$y>0$ nên $y=4$.'],
    practiceRole: 'misconception_check', representationType: 'graph'
  },

  {
    id: 'math10-m8x-q037', subTypeId: 'math10-qt16-st3',
    content: 'Parabol $y^2=16x$ có hoành độ tiêu điểm bằng bao nhiêu?',
    difficulty: 'medium', correctAnswer: '4',
    reasoning: ['So sánh $16=4p$ được $p=4$.', 'Tiêu điểm là $(4;0)$.'],
    practiceRole: 'near_transfer', representationType: 'equation'
  },
  {
    id: 'math10-m8x-q038', subTypeId: 'math10-qt16-st3',
    content: 'Parabol $x^2=-12y$ có đường chuẩn $y=k$. Tính k.',
    difficulty: 'medium', correctAnswer: '3',
    reasoning: ['$4p=-12$ nên $p=-3$.', 'Đường chuẩn là $y=-p=3$.'],
    practiceRole: 'representation_switch', representationType: 'graph'
  },
  {
    id: 'math10-m8x-q039', subTypeId: 'math10-qt16-st3',
    content: 'Parabol có tiêu điểm $F(0;5)$ và đỉnh O. Trong phương trình $x^2=ky$, tính k.',
    difficulty: 'hard', correctAnswer: '20',
    reasoning: ['$p=5$ vì tiêu điểm là $(0;p)$.', 'Phương trình $x^2=4py$ nên $k=20$.'],
    practiceRole: 'far_transfer', representationType: 'diagram'
  },
  {
    id: 'math10-m8x-q040', subTypeId: 'math10-qt16-st3',
    content: 'Parabol có đỉnh O và đường chuẩn $x=-2$. Trong phương trình $y^2=kx$, tính k.',
    difficulty: 'medium', correctAnswer: '8',
    reasoning: ['Đường chuẩn $x=-p=-2$ nên $p=2$.', '$k=4p=8$.'],
    practiceRole: 'retention', representationType: 'diagram'
  },
  {
    id: 'math10-m8x-q041', subTypeId: 'math10-qt16-st3',
    content: 'Đường thẳng $x=2$ cắt parabol $y^2=8x$ tại A và B. Tính độ dài AB.',
    difficulty: 'hard', correctAnswer: '8',
    reasoning: ['Thay $x=2$ được $y^2=16$, nên hai giao điểm có tung độ 4 và -4.', 'Hai điểm cùng hoành độ nên $AB=|4-(-4)|=8$.'],
    practiceRole: 'mastery_holdout', representationType: 'graph'
  },
  {
    id: 'math10-m8x-q042', subTypeId: 'math10-qt16-st3',
    content: 'Parabol $y^2=4px$ đi qua điểm $(9;6)$. Tính p.',
    difficulty: 'easy', correctAnswer: '1',
    reasoning: ['Thay điểm được $36=4p\\cdot9=36p$.', 'Suy ra $p=1$.'],
    practiceRole: 'misconception_check', representationType: 'equation'
  }
];

const questionTypeIdFrom = (subTypeId: string) => subTypeId.replace(/-st\d+$/, '');

export const g10MathModule8QuestionExpansion: Question[] = g10MathPracticeExpansionSeeds.map(seed => ({
  id: seed.id, subjectId: 'math', topicId: 'math10-t8',
  questionTypeId: questionTypeIdFrom(seed.subTypeId), content: seed.content,
  responseType: 'short_answer', difficulty: seed.difficulty, sourceType: 'manual',
  correctAnswer: seed.correctAnswer, acceptedAnswers: [seed.correctAnswer], validatorType: 'number',
  media: seed.media
}));

export const g10MathModule8SolutionExpansion: Solution[] = g10MathPracticeExpansionSeeds.map(seed => ({
  id: seed.id.replace('-q', '-s'), questionId: seed.id,
  recognition: `Dạng mở rộng ${seed.subTypeId}: cần chuẩn hóa phương trình và xác định đúng yếu tố hình học trước khi tính.`,
  detailedSteps: seed.reasoning.map((explanation, index) => ({
    order: index + 1,
    title: index === 0 ? 'Nhận dạng và thiết lập' : 'Tính toán và kiểm tra',
    explanation,
    ...(index === seed.reasoning.length - 1 ? { result: seed.correctAnswer } : {})
  })),
  finalAnswer: seed.correctAnswer,
  commonMistakes: ['Đọc sai dấu, nhầm vectơ pháp tuyến/chỉ phương hoặc dùng sai quan hệ a, b, c của đường conic.'],
  reviewSuggestions: ['Đưa phương trình về dạng chuẩn, kiểm tra hướng trục và đơn vị trước khi thay số.']
}));

export const g10MathModule8PracticeMetadataExpansion: QuestionPracticeMetadata[] =
  g10MathPracticeExpansionSeeds.map(seed => ({
    questionId: seed.id, subTypeId: seed.subTypeId, practiceRole: seed.practiceRole,
    representationType: seed.representationType,
    ...(seed.practiceRole === 'mastery_holdout' ? { isMasteryHoldout: true } : {})
  }));
