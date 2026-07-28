import type { CourseQuestion, CourseSolution } from '@/data/schema';
import type {
  PracticeRole,
  QuestionRepresentationType,
  QuestionStimulus
} from '@/types';

type Choice = 'A' | 'B' | 'C' | 'D';

interface ExpansionItem {
  content: string;
  answer: string;
  reasoning: string[];
  difficulty: CourseQuestion['difficulty'];
  representationType: QuestionRepresentationType;
  practiceRole: PracticeRole;
  options?: [string, string, string, string];
  acceptedAnswers?: string[];
  stimulus?: QuestionStimulus;
}

interface ExpansionBank {
  questionTypeId: string;
  lessonId: string;
  outcomeId: string;
  subTypeId: string;
  items: [ExpansionItem, ExpansionItem, ExpansionItem];
}

const short = (
  content: string,
  answer: string,
  reasoning: string[],
  difficulty: CourseQuestion['difficulty'],
  representationType: QuestionRepresentationType,
  practiceRole: PracticeRole,
  stimulus?: QuestionStimulus,
  acceptedAnswers?: string[]
): ExpansionItem => ({
  content,
  answer,
  reasoning,
  difficulty,
  representationType,
  practiceRole,
  stimulus,
  acceptedAnswers
});

const choice = (
  content: string,
  options: [string, string, string, string],
  answer: Choice,
  reasoning: string[],
  difficulty: CourseQuestion['difficulty'],
  representationType: QuestionRepresentationType,
  practiceRole: PracticeRole,
  stimulus?: QuestionStimulus
): ExpansionItem => ({
  content,
  options,
  answer,
  reasoning,
  difficulty,
  representationType,
  practiceRole,
  stimulus
});

const banks: ExpansionBank[] = [
  {
    questionTypeId: 'phy11-qt01',
    lessonId: 'phy11-kntt-l2',
    outcomeId: 'out-phy11-m1-01',
    subTypeId: 'phy11-qt01-st-equation',
    items: [
      short(
        'Vật dao động theo $x=-6\\sin(4\\pi t+\\pi/6)$ cm. Chu kì bằng bao nhiêu giây?',
        '0.5',
        ['Hệ số của $t$ cho $\\omega=4\\pi$ rad/s.', 'Tính $T=2\\pi/\\omega=0,5$ s.'],
        'medium',
        'equation',
        'near_transfer',
        undefined,
        ['0.5', '0,5', '0.50', '0,50']
      ),
      choice(
        'Hai dao động $x_1=3\\cos(2\\pi t+\\pi/3)$ cm và $x_2=3\\cos(2\\pi t-2\\pi/3)$ cm có quan hệ pha nào?',
        ['Vuông pha', 'Lệch pha $\\pi/2$', 'Ngược pha', 'Cùng pha'],
        'C',
        ['Tính $\\Delta\\varphi=\\pi/3-(-2\\pi/3)=\\pi$.', 'Hai dao động lệch pha $\\pi$ nên ngược pha.'],
        'medium',
        'equation',
        'misconception_check'
      ),
      short(
        'Vật dao động theo $x=4\\cos(5\\pi t+\\pi/6)$ cm. Tính thời điểm dương nhỏ nhất vật tới biên dương, theo giây.',
        '11/30',
        [
          'Tại biên dương, pha phải bằng $2k\\pi$.',
          'Giải $5\\pi t+\\pi/6=2k\\pi$.',
          'Với $k=1$ thu được thời điểm dương nhỏ nhất $t=11/30$ s.'
        ],
        'hard',
        'equation',
        'far_transfer',
        undefined,
        ['11/30', '0.3666666667', '0,3666666667']
      )
    ]
  },
  {
    questionTypeId: 'phy11-qt01',
    lessonId: 'phy11-kntt-l2',
    outcomeId: 'out-phy11-m1-01',
    subTypeId: 'phy11-qt01-st-graph',
    items: [
      short(
        'Từ đồ thị, tính tần số dao động theo Hz.',
        '0.5',
        ['Hai đỉnh dương liên tiếp cách nhau $T=2$ s.', 'Suy ra $f=1/T=0,5$ Hz.'],
        'medium',
        'graph',
        'representation_switch',
        {
          id: 'phy11-m1x-st004',
          title: 'Đồ thị li độ–thời gian',
          media: [{
            id: 'phy11-m1x-media004',
            type: 'chart',
            src: '/assets/physics/grade11/oscillation-xt.svg',
            alt: 'Đồ thị hình sin có biên độ 4 cm, đi qua vị trí cân bằng theo chiều dương tại 0 giây và lặp lại sau 2 giây.',
            caption: 'Li độ x (cm) theo thời gian t (s)',
            width: 720,
            height: 360
          }]
        },
        ['0.5', '0,5', '0.50', '0,50']
      ),
      choice(
        'Một dao động có các giá trị đo như bảng. Phương trình phù hợp nhất là',
        [
          '$x=2\\cos(2\\pi t)$ cm',
          '$x=2\\sin(2\\pi t)$ cm',
          '$x=2\\cos(\\pi t)$ cm',
          '$x=-2\\cos(2\\pi t)$ cm'
        ],
        'A',
        ['Dữ liệu lặp lại sau $1$ s nên $\\omega=2\\pi$ rad/s.', 'Tại $t=0$, vật ở biên dương nên pha ban đầu bằng 0.'],
        'medium',
        'table',
        'near_transfer',
        {
          id: 'phy11-m1x-st005',
          dataTable: {
            caption: 'Li độ tại các thời điểm',
            columns: [
              { key: 't', label: 't', unit: 's' },
              { key: 'x', label: 'x', unit: 'cm' }
            ],
            rows: [
              { t: 0, x: 2 },
              { t: 0.25, x: 0 },
              { t: 0.5, x: -2 },
              { t: 0.75, x: 0 },
              { t: 1, x: 2 }
            ]
          }
        }
      ),
      short(
        'Hai lần liên tiếp vật qua li độ $x=A/2$ theo cùng chiều cách nhau $0,40$ s. Tính tần số góc theo rad/s, nhập hệ số của $\\pi$.',
        '5',
        [
          'Hai trạng thái có cùng li độ và cùng chiều chuyển động là cùng pha.',
          'Khoảng thời gian giữa hai trạng thái liên tiếp như vậy chính là một chu kì: $T=0,40$ s.',
          'Tính $\\omega=2\\pi/T=5\\pi$ rad/s nên hệ số cần nhập là 5.'
        ],
        'hard',
        'graph',
        'far_transfer'
      )
    ]
  },
  {
    questionTypeId: 'phy11-qt02',
    lessonId: 'phy11-kntt-l3',
    outcomeId: 'out-phy11-m1-02',
    subTypeId: 'phy11-qt02-st-extrema',
    items: [
      short(
        'Dao động có $v_{max}=0,80$ m/s và $a_{max}=3,20$ m/s². Biên độ bằng bao nhiêu mét?',
        '0.2',
        ['$\\omega=a_{max}/v_{max}=4$ rad/s.', '$A=v_{max}/\\omega=0,20$ m.'],
        'medium',
        'equation',
        'near_transfer',
        undefined,
        ['0.2', '0,2', '0.20', '0,20']
      ),
      choice(
        'Nếu biên độ tăng gấp đôi và chu kì giảm một nửa thì gia tốc cực đại thay đổi thế nào?',
        ['Tăng 2 lần', 'Tăng 4 lần', 'Tăng 8 lần', 'Không đổi'],
        'C',
        ['$a_{max}=\\omega^2A$ và $\\omega=2\\pi/T$.', 'A tăng 2 lần, $\\omega$ tăng 2 lần nên $a_{max}$ tăng $2\\times2^2=8$ lần.'],
        'medium',
        'equation',
        'misconception_check'
      ),
      short(
        'Một vật có $v_{max}=60$ cm/s. Khi $|x|=3$ cm, tốc độ là $48$ cm/s. Tính biên độ theo cm.',
        '5',
        [
          'Dùng $v^2=\\omega^2(A^2-x^2)$ và $v_{max}=\\omega A$.',
          'Lập tỉ số $v^2/v_{max}^2=1-x^2/A^2$.',
          'Thay số: $0,64=1-9/A^2$, suy ra $A=5$ cm.'
        ],
        'hard',
        'equation',
        'far_transfer'
      )
    ]
  },
  {
    questionTypeId: 'phy11-qt02',
    lessonId: 'phy11-kntt-l3',
    outcomeId: 'out-phy11-m1-02',
    subTypeId: 'phy11-qt02-st-state',
    items: [
      choice(
        'Tại thời điểm vật có $x<0$, $v>0$ trong dao động điều hòa thì vật đang',
        ['đi từ cân bằng tới biên âm', 'đi từ biên âm về cân bằng', 'đi từ biên dương về cân bằng', 'đứng tại biên âm'],
        'B',
        ['$x<0$ cho biết vật ở phía âm.', '$v>0$ cho biết vật chuyển động theo chiều dương, tức đang về vị trí cân bằng.'],
        'medium',
        'diagram',
        'near_transfer'
      ),
      short(
        'Vật dao động theo $x=5\\cos(4t)$ cm. Tại thời điểm $x=3$ cm và vật chuyển động theo chiều âm, vận tốc bằng bao nhiêu cm/s?',
        '-16',
        ['Tính độ lớn $|v|=\\omega\\sqrt{A^2-x^2}=4\\sqrt{25-9}=16$ cm/s.', 'Vật chuyển động theo chiều âm nên $v=-16$ cm/s.'],
        'medium',
        'equation',
        'representation_switch',
        undefined,
        ['-16', '-16.0', '-16,0']
      ),
      choice(
        'Một vật đi từ $x=A/2$ theo chiều dương đến $x=A/2$ theo chiều âm. Khoảng thời gian ngắn nhất bằng',
        ['$T/12$', '$T/6$', '$T/3$', '$T/2$'],
        'C',
        [
          'Hai trạng thái tương ứng với pha $-\\pi/3$ và $+\\pi/3$.',
          'Độ tăng pha nhỏ nhất là $2\\pi/3$.',
          'Suy ra $\\Delta t=(2\\pi/3)/\\omega=T/3$.'
        ],
        'hard',
        'diagram',
        'far_transfer'
      )
    ]
  },
  {
    questionTypeId: 'phy11-qt03',
    lessonId: 'phy11-kntt-l5',
    outcomeId: 'out-phy11-m1-03',
    subTypeId: 'phy11-qt03-st-state',
    items: [
      short(
        'Con lắc lò xo có $k=80$ N/m, biên độ $5$ cm. Cơ năng bằng bao nhiêu joule?',
        '0.1',
        ['Đổi $A=0,05$ m.', 'Tính $W=\\frac12kA^2=0,10$ J.'],
        'medium',
        'equation',
        'near_transfer',
        undefined,
        ['0.1', '0,1', '0.10', '0,10']
      ),
      choice(
        'Tại vị trí động năng bằng ba lần thế năng, độ lớn li độ bằng',
        ['$A/4$', '$A/2$', '$A/\\sqrt2$', '$\\sqrt3A/2$'],
        'B',
        ['$W=W_đ+W_t=4W_t$.', '$W_t/W=x^2/A^2=1/4$ nên $|x|=A/2$.'],
        'medium',
        'equation',
        'misconception_check'
      ),
      short(
        'Dao động có cơ năng $0,18$ J. Tại li độ $x=A/3$, động năng bằng bao nhiêu joule?',
        '0.16',
        [
          'Tỉ số thế năng là $W_t/W=x^2/A^2=1/9$.',
          'Suy ra $W_đ/W=1-1/9=8/9$.',
          'Tính $W_đ=0,18\\times8/9=0,16$ J.'
        ],
        'hard',
        'equation',
        'far_transfer',
        undefined,
        ['0.16', '0,16', '0.160', '0,160']
      )
    ]
  },
  {
    questionTypeId: 'phy11-qt03',
    lessonId: 'phy11-kntt-l5',
    outcomeId: 'out-phy11-m1-03',
    subTypeId: 'phy11-qt03-st-conservation',
    items: [
      choice(
        'Một đồ thị cho $W_t=0,02$ J tại $x=2$ cm và là parabol qua gốc. Tại $x=4$ cm, thế năng bằng',
        ['$0,04$ J', '$0,06$ J', '$0,08$ J', '$0,16$ J'],
        'C',
        ['$W_t\\propto x^2$.', 'Li độ tăng 2 lần nên thế năng tăng 4 lần: $0,08$ J.'],
        'medium',
        'graph',
        'representation_switch'
      ),
      short(
        'Biên độ giảm 20% do tắt dần chậm. Cơ năng còn lại bằng bao nhiêu phần trăm ban đầu?',
        '64',
        ['$W\\propto A^2$.', 'Biên độ còn $0,8A_0$ nên $W/W_0=0,8^2=0,64=64\\%$.'],
        'medium',
        'equation',
        'near_transfer',
        undefined,
        ['64', '64%', '64.0', '64,0']
      ),
      short(
        'Con lắc lò xo có $m=0,20$ kg, $k=80$ N/m, biên độ $10$ cm. Khi động năng bằng thế năng, tốc độ bằng bao nhiêu m/s?',
        'sqrt2',
        [
          'Tính $\\omega=\\sqrt{k/m}=20$ rad/s.',
          'Khi $W_đ=W_t$, ta có $|x|=A/\\sqrt2$.',
          'Dùng $v=\\omega\\sqrt{A^2-x^2}=\\omega A/\\sqrt2=\\sqrt2$ m/s.',
          'Giá trị đúng là $\\sqrt2$ m/s, không phải 1 m/s.'
        ],
        'hard',
        'equation',
        'far_transfer',
        undefined,
        ['sqrt2', '√2', '1.4142135624', '1,4142135624']
      )
    ]
  },
  {
    questionTypeId: 'phy11-qt05',
    lessonId: 'phy11-kntt-l6',
    outcomeId: 'out-phy11-m1-05',
    subTypeId: 'phy11-qt05-st-condition',
    items: [
      short(
        'Từ đường cong cộng hưởng, ước lượng tần số riêng của hệ theo Hz.',
        '4',
        ['Tần số riêng nằm gần vị trí biên độ cưỡng bức cực đại.', 'Đỉnh đồ thị ở $f=4$ Hz.'],
        'medium',
        'graph',
        'representation_switch',
        {
          id: 'phy11-m1x-st019',
          title: 'Biên độ cưỡng bức theo tần số ngoại lực',
          media: [{
            id: 'phy11-m1x-media019',
            type: 'chart',
            src: '/assets/physics/grade11/resonance-curve.svg',
            alt: 'Đường cong cộng hưởng đạt cực đại tại tần số 4 héc.',
            caption: 'Biên độ A theo tần số kích thích f',
            width: 720,
            height: 360
          }]
        }
      ),
      choice(
        'Hai hệ có cùng tần số riêng. Đường cộng hưởng của hệ P cao và hẹp hơn hệ Q. Kết luận phù hợp là',
        ['P có lực cản lớn hơn Q', 'P có lực cản nhỏ hơn Q', 'P có tần số riêng lớn hơn Q', 'Không thể so sánh lực cản'],
        'B',
        ['Đỉnh cộng hưởng cao và hẹp là dấu hiệu năng lượng mất ít.', 'Vì vậy lực cản của P nhỏ hơn Q.'],
        'medium',
        'graph',
        'misconception_check'
      ),
      choice(
        'Một máy quay từ 600 vòng/phút đến 1200 vòng/phút. Kết cấu đỡ có tần số riêng 15 Hz. Máy có đi qua vùng cộng hưởng không?',
        ['Không, vì tốc độ quay luôn dưới 15 vòng/phút', 'Không, vì tần số kích thích luôn trên 20 Hz', 'Có, khi máy quay khoảng 900 vòng/phút', 'Chỉ có khi máy dừng'],
        'C',
        [
          'Đổi tốc độ quay sang tần số: 600–1200 vòng/phút tương ứng 10–20 Hz.',
          'Tần số riêng 15 Hz nằm trong khoảng vận hành.',
          'Cộng hưởng xảy ra gần $15\\times60=900$ vòng/phút.'
        ],
        'hard',
        'equation',
        'far_transfer'
      )
    ]
  },
  {
    questionTypeId: 'phy11-qt05',
    lessonId: 'phy11-kntt-l6',
    outcomeId: 'out-phy11-m1-05',
    subTypeId: 'phy11-qt05-st-application',
    items: [
      choice(
        'Biện pháp phù hợp nhất để giảm rung cộng hưởng của một bệ máy mà không đổi tốc độ vận hành là',
        ['Tăng biên độ lực kích thích', 'Lắp bộ giảm chấn hoặc thay đổi độ cứng kết cấu', 'Giảm mọi lực cản', 'Làm tần số riêng trùng tần số kích thích'],
        'B',
        ['Cần làm giảm đỉnh cộng hưởng hoặc dịch tần số riêng khỏi tần số kích thích.', 'Bộ giảm chấn và thay đổi độ cứng đều phục vụ mục tiêu đó.'],
        'medium',
        'text',
        'near_transfer'
      ),
      short(
        'Một người đẩy xích đu đúng một lần sau mỗi $2,5$ s và biên độ tăng rõ. Ước lượng tần số riêng của xích đu theo Hz.',
        '0.4',
        ['Kích thích đúng nhịp cộng hưởng nên chu kì riêng xấp xỉ $2,5$ s.', 'Tính $f_0=1/T_0=0,4$ Hz.'],
        'medium',
        'text',
        'representation_switch',
        undefined,
        ['0.4', '0,4', '0.40', '0,40']
      ),
      choice(
        'Một tòa nhà có hai phương án: tăng lực cản nhưng giữ $f_0$, hoặc đổi độ cứng để $f_0$ lệch xa dải kích thích. Nhận định đúng nhất là',
        ['Chỉ phương án tăng lực cản có tác dụng', 'Chỉ phương án đổi độ cứng có tác dụng', 'Cả hai đều có thể giảm đáp ứng cộng hưởng theo cơ chế khác nhau', 'Cả hai đều làm cộng hưởng mạnh hơn'],
        'C',
        [
          'Tăng lực cản làm hạ và làm rộng đỉnh cộng hưởng.',
          'Đổi độ cứng làm thay đổi tần số riêng, giúp tránh trùng dải kích thích.',
          'Hai phương án đều có thể hiệu quả nhưng theo hai cơ chế khác nhau.'
        ],
        'hard',
        'text',
        'far_transfer'
      )
    ]
  }
];

let questionNumber = 1;
let choiceNumber = 0;
const choiceLetters = ['A', 'B', 'C', 'D'] as const;
const solutionRows: Array<{
  id: string;
  questionId: string;
  answer: string;
  reasoning: string[];
  questionTypeId: string;
}> = [];

export const g11PhysicsModule1ExpansionQuestions: CourseQuestion[] = banks.flatMap(bank =>
  bank.items.map((item, itemIndex) => {
    const currentQuestionNumber = questionNumber;
    const id = `phy11-m1x-q${currentQuestionNumber.toString().padStart(3, '0')}`;
    const solutionId = `phy11-m1x-s${currentQuestionNumber.toString().padStart(3, '0')}`;
    questionNumber += 1;
    let finalAnswer = item.answer;
    let finalOptions = item.options;
    if (item.options) {
      const sourceAnswerIndex = choiceLetters.indexOf(item.answer as Choice);
      const targetAnswerIndex = choiceNumber % choiceLetters.length;
      choiceNumber += 1;
      finalOptions = [...item.options] as [string, string, string, string];
      [finalOptions[sourceAnswerIndex], finalOptions[targetAnswerIndex]] = [
        finalOptions[targetAnswerIndex],
        finalOptions[sourceAnswerIndex]
      ];
      finalAnswer = choiceLetters[targetAnswerIndex];
    }
    solutionRows.push({
      id: solutionId,
      questionId: id,
      answer: finalAnswer,
      reasoning: item.reasoning,
      questionTypeId: bank.questionTypeId
    });
    return {
      id,
      subjectId: 'physics',
      courseId: 'grade11:physics',
      moduleId: 'phy11-m1',
      lessonId: bank.lessonId,
      topicId: 'phy11-t01',
      questionTypeId: bank.questionTypeId,
      subTypeId: bank.subTypeId,
      content: item.content,
      options: finalOptions,
      correctAnswer: finalAnswer,
      acceptedAnswers: finalOptions
        ? undefined
        : item.acceptedAnswers ?? [item.answer, item.answer.replace('.', ',')],
      responseType: finalOptions ? 'single_choice' : 'short_answer',
      validatorType: finalOptions ? 'choice' : 'number',
      outcomeIds: [bank.outcomeId],
      competency: item.representationType === 'table' || item.representationType === 'graph'
        ? 'physical_inquiry'
        : 'physical_application',
      cognitiveLevel: 'application',
      estimatedSeconds: item.difficulty === 'hard' ? 180 : 110,
      practiceRole: item.practiceRole,
      representationType: item.representationType,
      isMasteryHoldout: itemIndex === 2,
      difficulty: item.difficulty,
      sourceType: 'manual',
      stimulus: item.stimulus
    } as CourseQuestion;
  })
);

export const g11PhysicsModule1ExpansionSolutions: CourseSolution[] = solutionRows.map(row => ({
  id: row.id,
  questionId: row.questionId,
  courseId: 'grade11:physics',
  moduleId: 'phy11-m1',
  recognition: 'Xác định đúng mô hình dao động, đại lượng đã cho và quan hệ vật lí cần phối hợp.',
  detailedSteps: row.reasoning.map((explanation, index) => ({
    order: index + 1,
    title: index === 0 ? 'Lập mô hình' : index === row.reasoning.length - 1 ? 'Kết luận' : 'Biến đổi',
    explanation
  })),
  finalAnswer: row.answer,
  commonMistakes: ['Thay số trước khi đổi đơn vị hoặc dùng công thức đúng nhưng sai trạng thái pha.'],
  reviewSuggestions: [`Ôn lại dấu hiệu nhận dạng và chuỗi suy luận của ${row.questionTypeId}.`]
}));
