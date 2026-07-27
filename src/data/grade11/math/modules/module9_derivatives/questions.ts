import type { CourseQuestion } from '@/data/schema';
import type { PracticeRole, QuestionRepresentationType } from '@/types';

type QuestionRow = [
  string,
  [string, string, string, string],
  'A' | 'B' | 'C' | 'D'
];

const rows: QuestionRow[] = [
  [
    'Công thức định nghĩa đạo hàm của $f$ tại $x_0$ là:',
    [
      '$\\lim\\limits_{x\\to x_0}\\dfrac{f(x)}{x}$',
      '$\\lim\\limits_{x\\to x_0}\\dfrac{f(x)-f(x_0)}{x-x_0}$',
      '$f(x_0)$',
      '$\\dfrac{f(x)-f(x_0)}{x-x_0}$ không cần giới hạn'
    ],
    'B'
  ],
  [
    'Dạng số gia của đạo hàm tại $x_0$ là:',
    [
      '$\\lim\\limits_{h\\to0}\\dfrac{f(x_0+h)-f(x_0)}h$',
      '$\\lim\\limits_{h\\to0}\\dfrac{f(x_0+h)}h$',
      '$\\lim\\limits_{h\\to0}\\dfrac{f(h)-f(0)}{x_0}$',
      '$f(x_0+h)-f(x_0)$'
    ],
    'A'
  ],
  [
    'Dùng định nghĩa, đạo hàm của $f(x)=x^2$ tại $x_0=2$ bằng:',
    ['$2$', '$3$', '$4$', '$5$'],
    'C'
  ],
  [
    'Đạo hàm của hàm số $f(x)=3x+1$ tại mọi điểm bằng:',
    ['$0$', '$1$', '$2$', '$3$'],
    'D'
  ],
  [
    'Đạo hàm của hàm hằng $f(x)=5$ bằng:',
    ['$5$', '$0$', '$1$', '$x$'],
    'B'
  ],
  [
    'Hàm số $f(x)=|x|$ tại $x=0$:',
    [
      'Có đạo hàm bằng $-1$',
      'Có đạo hàm bằng $0$',
      'Có đạo hàm bằng $1$',
      'Không có đạo hàm'
    ],
    'D'
  ],
  [
    'Hệ số góc tiếp tuyến của đồ thị $y=x^2$ tại điểm có hoành độ 1 là:',
    ['$0$', '$1$', '$2$', '$3$'],
    'C'
  ],
  [
    'Tiếp tuyến của $y=f(x)$ tại $M(x_0;f(x_0))$ có phương trình:',
    [
      '$y-f(x_0)=f^{\\prime}(x_0)(x-x_0)$',
      '$y=f(x_0)x$',
      '$y-f(x_0)=x-x_0$',
      '$y=f^{\\prime}(x_0)$'
    ],
    'A'
  ],
  [
    'Tiếp tuyến của đồ thị $y=x^2$ tại điểm có hoành độ 1 là:',
    ['$y=x+1$', '$y=2x-1$', '$y=2x+1$', '$y=x-1$'],
    'B'
  ],
  [
    'Một vật có tọa độ $s(t)=t^2$. Vận tốc tức thời tại $t=3$ là:',
    ['$3$', '$5$', '$9$', '$6$'],
    'D'
  ],
  [
    'Giới hạn nào sau đây nhận biết số $e$?',
    [
      '$\\lim\\limits_{n\\to\\infty}\\left(1-\\dfrac1n\\right)^n$',
      '$\\lim\\limits_{n\\to\\infty}\\left(1+\\dfrac1n\\right)$',
      '$\\lim\\limits_{n\\to\\infty}\\left(1+\\dfrac1n\\right)^n$',
      '$\\lim\\limits_{n\\to\\infty}\\dfrac1n$'
    ],
    'C'
  ],
  [
    'Tiếp tuyến của đồ thị $y=\\dfrac1x$ tại điểm $(1;1)$ là:',
    ['$y=-x+2$', '$y=x$', '$y=-x$', '$y=x+2$'],
    'A'
  ],

  [
    'Đạo hàm của $y=x^5$ là:',
    ['$x^4$', '$5x^4$', '$5x$', '$x^6$'],
    'B'
  ],
  [
    'Với $x>0$, đạo hàm của $y=\\sqrt{x}$ là:',
    ['$\\dfrac1{\\sqrt{x}}$', '$2\\sqrt{x}$', '$\\dfrac1{2\\sqrt{x}}$', '$\\sqrt{x}$'],
    'C'
  ],
  [
    'Đạo hàm của $y=\\sin x$ là:',
    ['$\\cos x$', '$-\\cos x$', '$\\sin x$', '$-\\sin x$'],
    'A'
  ],
  [
    'Đạo hàm của $y=\\cos x$ là:',
    ['$\\cos x$', '$-\\cos x$', '$\\sin x$', '$-\\sin x$'],
    'D'
  ],
  [
    'Đạo hàm của $y=e^x$ là:',
    ['$xe^{x-1}$', '$e^x$', '$e^{x-1}$', '$xe^x$'],
    'B'
  ],
  [
    'Với $x>0$, đạo hàm của $y=\\ln x$ là:',
    ['$\\ln x$', '$x$', '$\\dfrac1x$', '$e^x$'],
    'C'
  ],
  [
    'Đạo hàm của $y=x^2\\sin x$ là:',
    [
      '$2x\\sin x+x^2\\cos x$',
      '$2x\\cos x$',
      '$x^2\\cos x$',
      '$2x\\sin x-x^2\\cos x$'
    ],
    'A'
  ],
  [
    'Đạo hàm của $y=\\dfrac1x$ là:',
    ['$\\dfrac1{x^2}$', '$x$', '$-\\dfrac1x$', '$-\\dfrac1{x^2}$'],
    'D'
  ],
  [
    'Đạo hàm của $y=(2x+1)^3$ là:',
    ['$3(2x+1)^2$', '$6(2x+1)^2$', '$6(2x+1)$', '$(2x+1)^2$'],
    'B'
  ],
  [
    'Đạo hàm của $y=2^x$ là:',
    ['$x2^{x-1}$', '$2^x$', '$2^x\\ln2$', '$\\dfrac{2^x}{\\ln2}$'],
    'C'
  ],
  [
    'Với $x>0$, đạo hàm của $y=\\log_3x$ là:',
    ['$\\dfrac1{x\\ln3}$', '$\\dfrac{\\ln3}{x}$', '$\\dfrac1x$', '$3^x$'],
    'A'
  ],
  [
    'Tại các điểm xác định, đạo hàm của $y=\\tan x$ là:',
    ['$\\sin^2x$', '$-\\dfrac1{\\cos^2x}$', '$\\cos^2x$', '$\\dfrac1{\\cos^2x}$'],
    'D'
  ],

  [
    'Đạo hàm cấp hai của $f$ được định nghĩa bởi:',
    ['$f^{\\prime\\prime}=(f^{\\prime})^2$', '$f^{\\prime\\prime}=(f^{\\prime})^{\\prime}$', '$f^{\\prime\\prime}=2f^{\\prime}$', '$f^{\\prime\\prime}=f/2$'],
    'B'
  ],
  [
    'Nếu $f(x)=x^3$ thì $f^{\\prime\\prime}(x)$ bằng:',
    ['$6x$', '$3x^2$', '$6$', '$x$'],
    'A'
  ],
  [
    'Nếu $f(x)=\\sin x$ thì $f^{\\prime\\prime}(x)$ bằng:',
    ['$\\cos x$', '$-\\cos x$', '$-\\sin x$', '$\\sin x$'],
    'C'
  ],
  [
    'Nếu $f(x)=e^x$ thì $f^{\\prime\\prime}(x)$ bằng:',
    ['$xe^x$', '$e^{2x}$', '$2e^x$', '$e^x$'],
    'D'
  ],
  [
    'Nếu $f(x)=x^4$ thì $f^{\\prime\\prime}(x)$ bằng:',
    ['$4x^3$', '$12x^2$', '$12x$', '$4x^2$'],
    'B'
  ],
  [
    'Với $x>0$, nếu $f(x)=\\ln x$ thì $f^{\\prime\\prime}(x)$ bằng:',
    ['$-\\dfrac1{x^2}$', '$\\dfrac1{x^2}$', '$\\dfrac1x$', '$-\\dfrac1x$'],
    'A'
  ],
  [
    'Một vật có tọa độ $s(t)=t^3$. Gia tốc tại $t=2$ bằng:',
    ['$6$', '$8$', '$12$', '$24$'],
    'C'
  ],
  [
    'Một vật có vận tốc $v(t)=2t^2-3t$. Gia tốc tại $t=2$ bằng:',
    ['$1$', '$3$', '$4$', '$5$'],
    'D'
  ],
  [
    'Nếu tọa độ đo bằng mét và thời gian đo bằng giây thì đơn vị gia tốc là:',
    ['m/s', 'm/s$^2$', 'm$^2$/s', 's/m$^2$'],
    'B'
  ],
  [
    'Một vật có tọa độ $s(t)=5t^2$. Gia tốc của vật bằng:',
    ['$10$', '$5t$', '$10t$', '$5$'],
    'A'
  ],
  [
    'Nếu $f(x)=(2x+1)^3$ thì $f^{\\prime\\prime}(x)$ bằng:',
    ['$12(2x+1)$', '$24$', '$24(2x+1)$', '$6(2x+1)^2$'],
    'C'
  ],
  [
    'Nếu $f(x)=x^4-2x^2$ thì $f^{\\prime\\prime}(x)$ bằng:',
    ['$4x^3-4x$', '$12x^2$', '$12x^2+4$', '$12x^2-4$'],
    'D'
  ]
];

const roles: PracticeRole[] = [
  'guided',
  'near_transfer',
  'representation_switch',
  'misconception_check',
  'retention',
  'mastery_holdout',
  'guided',
  'near_transfer',
  'far_transfer',
  'misconception_check',
  'retention',
  'mastery_holdout'
];

const subTypeIds = [
  ['definition', 'meaning'],
  ['elementary', 'rules'],
  ['second', 'mechanics']
] as const;

export const g11MathModule9Questions: CourseQuestion[] = rows.map((row, index) => {
  const number = 361 + index;
  const questionTypeNumber = 31 + Math.floor(index / 12);
  const position = index % 12;
  const questionTypeIndex = questionTypeNumber - 31;
  const subType = subTypeIds[questionTypeIndex][position < 6 ? 0 : 1];
  const representationType: QuestionRepresentationType =
    position === 3 || position === 9 ? 'text' : 'equation';

  return {
    id: `math11-q${number}`,
    courseId: 'grade11:math',
    moduleId: 'math11-m9',
    lessonId: `math11-kntt-l${questionTypeNumber}`,
    subjectId: 'math',
    topicId: 'math11-t09',
    questionTypeId: `math11-qt${questionTypeNumber}`,
    subTypeId: `math11-qt${questionTypeNumber}-st-${subType}`,
    practiceRole: roles[position],
    representationType,
    isMasteryHoldout: position === 5 || position === 11,
    content: row[0],
    responseType: 'single_choice',
    validatorType: 'choice',
    outcomeIds: [`out-math11-m9-0${questionTypeNumber - 30}`],
    options: row[1],
    correctAnswer: row[2],
    difficulty:
      position === 5 || position === 11
        ? 'hard'
        : position < 3
          ? 'easy'
          : 'medium',
    sourceType: 'manual'
  };
});
