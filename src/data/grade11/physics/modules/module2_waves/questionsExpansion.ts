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
  holdout?: boolean;
  options?: [string, string, string, string];
  acceptedAnswers?: string[];
  stimulus?: QuestionStimulus;
}

interface ExpansionBank {
  questionTypeId: string;
  lessonId: string;
  outcomeId: string;
  subTypeId: string;
  items: ExpansionItem[];
}

const short = (
  content: string,
  answer: string,
  reasoning: string[],
  difficulty: CourseQuestion['difficulty'],
  representationType: QuestionRepresentationType,
  practiceRole: PracticeRole,
  extra: Pick<ExpansionItem, 'holdout' | 'stimulus' | 'acceptedAnswers'> = {}
): ExpansionItem => ({
  content,
  answer,
  reasoning,
  difficulty,
  representationType,
  practiceRole,
  ...extra
});

const choice = (
  content: string,
  options: [string, string, string, string],
  answer: Choice,
  reasoning: string[],
  difficulty: CourseQuestion['difficulty'],
  representationType: QuestionRepresentationType,
  practiceRole: PracticeRole,
  extra: Pick<ExpansionItem, 'holdout' | 'stimulus'> = {}
): ExpansionItem => ({
  content,
  options,
  answer,
  reasoning,
  difficulty,
  representationType,
  practiceRole,
  ...extra
});

const banks: ExpansionBank[] = [
  {
    questionTypeId: 'phy11-qt07',
    lessonId: 'phy11-kntt-l8',
    outcomeId: 'out-phy11-m2-01',
    subTypeId: 'phy11-qt07-st-space',
    items: [
      short(
        'Từ đồ thị dạng sóng tại một thời điểm, xác định bước sóng theo mét.',
        '2',
        ['Hai đỉnh liên tiếp nằm tại $x=0,5$ m và $x=2,5$ m.', 'Khoảng cách giữa chúng là $\\lambda=2,0$ m.'],
        'medium',
        'graph',
        'representation_switch',
        {
          stimulus: {
            id: 'phy11-m2x-st001',
            title: 'Ảnh dạng sóng theo không gian',
            media: [{
              id: 'phy11-m2x-media001',
              type: 'chart',
              src: '/assets/physics/grade11/wave-ux.svg',
              alt: 'Đồ thị độ dịch chuyển theo vị trí có hai đỉnh liên tiếp tại 0,5 mét và 2,5 mét, biên độ 3 centimét.',
              caption: 'Độ dịch chuyển u theo vị trí x',
              width: 720,
              height: 360
            }]
          },
          acceptedAnswers: ['2', '2.0', '2,0']
        }
      ),
      choice(
        'Trên ảnh sóng, điểm M ở đỉnh và điểm N ở đáy gần nhất. Khoảng cách MN bằng',
        ['$\\lambda/4$', '$\\lambda/2$', '$3\\lambda/4$', '$\\lambda$'],
        'B',
        ['Đỉnh và đáy gần nhất lệch pha $\\pi$.', 'Khoảng cách tương ứng bằng nửa bước sóng.'],
        'medium',
        'diagram',
        'near_transfer'
      ),
      short(
        'Một ảnh sóng cho $u(0)=0$ và đường cong đi lên; đỉnh gần nhất bên phải ở $x=0,30$ m. Tính bước sóng theo mét.',
        '1.2',
        [
          'Từ điểm qua cân bằng đi lên đến đỉnh gần nhất là một phần tư bước sóng.',
          'Do đó $\\lambda/4=0,30$ m.',
          'Suy ra $\\lambda=1,20$ m.'
        ],
        'hard',
        'graph',
        'far_transfer',
        { holdout: true, acceptedAnswers: ['1.2', '1,2', '1.20', '1,20'] }
      )
    ]
  },
  {
    questionTypeId: 'phy11-qt07',
    lessonId: 'phy11-kntt-l8',
    outcomeId: 'out-phy11-m2-01',
    subTypeId: 'phy11-qt07-st-time',
    items: [
      short(
        'Một điểm trên môi trường có các thời điểm đạt cực đại liên tiếp là $0,12$ s và $0,32$ s. Tần số bằng bao nhiêu Hz?',
        '5',
        ['Chu kì là khoảng giữa hai cực đại liên tiếp: $T=0,20$ s.', 'Tính $f=1/T=5$ Hz.'],
        'medium',
        'graph',
        'near_transfer'
      ),
      choice(
        'Đồ thị $u-t$ tại một điểm đi qua cân bằng theo chiều âm ở $t=0$. Biểu thức pha phù hợp nhất là',
        ['$u=A\\cos\\omega t$', '$u=A\\sin\\omega t$', '$u=-A\\sin\\omega t$', '$u=-A\\cos\\omega t$'],
        'C',
        ['Tại $t=0$ cần có $u=0$.', 'Đạo hàm của $-A\\sin\\omega t$ tại 0 âm nên điểm chuyển động theo chiều âm.'],
        'medium',
        'equation',
        'misconception_check'
      ),
      short(
        'Một đồ thị $u-t$ cho thời gian từ đỉnh dương đến lần thứ hai đi qua vị trí cân bằng là $0,45$ s. Tính chu kì theo giây.',
        '0.6',
        [
          'Từ đỉnh dương đến lần qua cân bằng thứ nhất là $T/4$.',
          'Đến lần qua cân bằng thứ hai cần thêm $T/2$, tổng là $3T/4$.',
          'Giải $3T/4=0,45$ s được $T=0,60$ s.'
        ],
        'hard',
        'graph',
        'far_transfer',
        { holdout: true, acceptedAnswers: ['0.6', '0,6', '0.60', '0,60'] }
      )
    ]
  },
  {
    questionTypeId: 'phy11-qt08',
    lessonId: 'phy11-kntt-l9',
    outcomeId: 'out-phy11-m2-02',
    subTypeId: 'phy11-qt08-st-calculation',
    items: [
      short(
        'Sóng truyền với tốc độ $24$ m/s và chu kì $0,20$ s. Bước sóng bằng bao nhiêu mét?',
        '4.8',
        ['Dùng $\\lambda=vT$.', 'Tính $\\lambda=24\\times0,20=4,8$ m.'],
        'medium',
        'equation',
        'near_transfer',
        { acceptedAnswers: ['4.8', '4,8', '4.80', '4,80'] }
      ),
      choice(
        'Một nguồn giữ nguyên tần số khi sóng đi từ môi trường 1 sang môi trường 2, tốc độ giảm 20%. Bước sóng ở môi trường 2',
        ['tăng 20%', 'giảm 20%', 'không đổi', 'giảm 36%'],
        'B',
        ['Tần số do nguồn quyết định nên không đổi khi qua biên.', 'Vì $\\lambda=v/f$, tốc độ giảm 20% làm bước sóng giảm 20%.'],
        'medium',
        'equation',
        'misconception_check'
      ),
      short(
        'Một nguồn tạo 15 đỉnh sóng đi qua điểm M trong $7,0$ s, tính từ đỉnh thứ nhất đến đỉnh thứ 15. Tốc độ sóng là $2,8$ m/s. Tính bước sóng theo mét.',
        '1.4',
        [
          'Từ đỉnh thứ nhất đến đỉnh thứ 15 có 14 chu kì.',
          'Suy ra $T=7,0/14=0,50$ s.',
          'Tính $\\lambda=vT=2,8\\times0,50=1,4$ m.'
        ],
        'hard',
        'table',
        'far_transfer',
        { holdout: true, acceptedAnswers: ['1.4', '1,4', '1.40', '1,40'] }
      )
    ]
  },
  {
    questionTypeId: 'phy11-qt08',
    lessonId: 'phy11-kntt-l9',
    outcomeId: 'out-phy11-m2-02',
    subTypeId: 'phy11-qt08-st-energy',
    items: [
      choice(
        'Một nút bấc nổi trên mặt nước dao động lên xuống nhưng không trôi theo các gợn sóng. Quan sát này cho thấy sóng truyền',
        ['vật chất theo phương truyền', 'năng lượng còn phần tử môi trường dao động cục bộ', 'chỉ pha mà không truyền năng lượng', 'khối lượng của nguồn'],
        'B',
        ['Nút bấc đại diện cho phần tử môi trường và chỉ dao động quanh vị trí cân bằng.', 'Dạng nhiễu loạn và năng lượng lan đi theo sóng.'],
        'medium',
        'diagram',
        'near_transfer'
      ),
      short(
        'Cùng một loại sóng, biên độ tại B bằng $0,60$ lần biên độ tại A. Nếu năng lượng tỉ lệ với bình phương biên độ, tỉ số $W_B/W_A$ bằng bao nhiêu?',
        '0.36',
        ['$W\\propto A^2$.', 'Suy ra $W_B/W_A=(0,60)^2=0,36$.'],
        'medium',
        'equation',
        'representation_switch',
        { acceptedAnswers: ['0.36', '0,36', '0.360', '0,360'] }
      ),
      choice(
        'Hai xung giống nhau truyền ngược chiều trên dây lí tưởng, gặp nhau rồi tách ra. Kết luận đúng là',
        ['Chúng triệt tiêu vĩnh viễn', 'Chúng đổi tần số sau va chạm', 'Trong lúc gặp chúng chồng chất, sau đó tiếp tục truyền với dạng ban đầu', 'Vật chất của hai xung trao đổi vị trí'],
        'C',
        [
          'Nguyên lí chồng chất áp dụng trong thời gian hai xung gặp nhau.',
          'Mỗi xung vẫn là một nghiệm truyền độc lập của môi trường tuyến tính.',
          'Sau khi tách, chúng tiếp tục truyền với dạng gần như ban đầu.'
        ],
        'hard',
        'diagram',
        'far_transfer',
        { holdout: true }
      )
    ]
  },
  {
    questionTypeId: 'phy11-qt12',
    lessonId: 'phy11-kntt-l12',
    outcomeId: 'out-phy11-m2-06',
    subTypeId: 'phy11-qt12-st-path',
    items: [
      choice(
        'Hai nguồn kết hợp cùng pha. Tại M có $d_2-d_1=3\\lambda$. M là điểm',
        ['cực tiểu', 'cực đại', 'không dao động do mất năng lượng', 'chưa thể kết luận'],
        'B',
        ['Nguồn cùng pha cho cực đại khi hiệu đường đi bằng số nguyên lần bước sóng.', '$3\\lambda$ thỏa điều kiện với $k=3$.'],
        'medium',
        'equation',
        'near_transfer'
      ),
      short(
        'Hai nguồn cùng pha có $\\lambda=2,0$ cm. Tại M, $d_2-d_1=7,0$ cm. M cách điều kiện cực tiểu gần nhất bao nhiêu cm về hiệu đường đi?',
        '0',
        ['$7,0/2,0=3,5$.', 'Hiệu đường đi bằng $(3+1/2)\\lambda$ nên M đúng tại cực tiểu.'],
        'medium',
        'equation',
        'misconception_check'
      ),
      choice(
        'Hai nguồn có cùng biên độ nhưng ngược pha. Điều kiện cực đại tại M là',
        ['$|d_2-d_1|=k\\lambda$', '$|d_2-d_1|=(k+1/2)\\lambda$', '$d_1+d_2=k\\lambda$', '$d_1=d_2$ trong mọi trường hợp'],
        'B',
        [
          'Ngược pha ban đầu tạo thêm độ lệch pha $\\pi$.',
          'Muốn hai sóng tới M cùng pha, phần lệch pha do đường đi phải bù $\\pi$.',
          'Do đó hiệu đường đi là nửa nguyên lần bước sóng.'
        ],
        'hard',
        'equation',
        'representation_switch'
      ),
      short(
        'Hai nguồn cùng pha cách nhau $12$ cm, bước sóng $3$ cm. Trên đoạn nối hai nguồn, có bao nhiêu điểm cực đại bên trong đoạn, không tính hai nguồn?',
        '7',
        [
          'Trên đoạn nối nguồn, hiệu đường đi biến thiên từ $-12$ đến $12$ cm.',
          'Cực đại thỏa $\\Delta d=k\\lambda=3k$ cm, với $|k|<4$ vì không tính hai nguồn.',
          'Các giá trị $k=-3,-2,-1,0,1,2,3$ cho 7 điểm.'
        ],
        'hard',
        'diagram',
        'far_transfer'
      ),
      choice(
        'Tại M, hai sóng cùng biên độ có độ lệch pha $2\\pi/3$. Biên độ tổng hợp bằng',
        ['$0$', '$A$', '$\\sqrt2A$', '$2A$'],
        'B',
        [
          'Dùng $A_M=2A|\\cos(\\Delta\\varphi/2)|$.',
          'Thay $\\Delta\\varphi=2\\pi/3$ được $A_M=2A\\cos(\\pi/3)$.',
          'Suy ra $A_M=A$.'
        ],
        'hard',
        'equation',
        'far_transfer',
        { holdout: true }
      ),
      short(
        'Hai nguồn cùng pha, $\\lambda=4$ cm. Tại M có $d_1=18$ cm, $d_2=30$ cm. Bậc cực đại tại M bằng bao nhiêu?',
        '3',
        [
          'Tính hiệu đường đi $|d_2-d_1|=12$ cm.',
          'Với nguồn cùng pha, cực đại thỏa $|d_2-d_1|=k\\lambda$.',
          'Suy ra $k=12/4=3$.'
        ],
        'hard',
        'equation',
        'mastery_holdout',
        { holdout: true }
      )
    ]
  },
  {
    questionTypeId: 'phy11-qt12',
    lessonId: 'phy11-kntt-l14',
    outcomeId: 'out-phy11-m2-06',
    subTypeId: 'phy11-qt12-st-fringe',
    items: [
      short(
        'Trên đoạn nối hai nguồn cùng pha, khoảng cách hai cực đại liên tiếp là $1,25$ cm. Bước sóng bằng bao nhiêu cm?',
        '2.5',
        ['Khoảng cực đại liên tiếp trên đoạn nối nguồn bằng $\\lambda/2$.', 'Suy ra $\\lambda=2\\times1,25=2,5$ cm.'],
        'medium',
        'equation',
        'near_transfer',
        { acceptedAnswers: ['2.5', '2,5', '2.50', '2,50'] }
      ),
      short(
        'Từ bảng vị trí cực đại, tính bước sóng theo cm.',
        '3',
        ['Các hiệu vị trí liên tiếp đều bằng $1,5$ cm.', 'Trên đoạn nối nguồn, khoảng này bằng $\\lambda/2$, nên $\\lambda=3,0$ cm.'],
        'medium',
        'table',
        'representation_switch',
        {
          stimulus: {
            id: 'phy11-m2x-st018',
            dataTable: {
              caption: 'Tọa độ các cực đại liên tiếp trên đoạn nối nguồn',
              columns: [
                { key: 'order', label: 'Cực đại' },
                { key: 'x', label: 'x', unit: 'cm' }
              ],
              rows: [
                { order: 1, x: 2.1 },
                { order: 2, x: 3.6 },
                { order: 3, x: 5.1 },
                { order: 4, x: 6.6 }
              ]
            }
          },
          acceptedAnswers: ['3', '3.0', '3,0']
        }
      ),
      choice(
        'Đo khoảng cách từ cực đại thứ nhất đến cực đại thứ bảy được $9,0$ cm. Bước sóng là',
        ['$1,5$ cm', '$3,0$ cm', '$9,0$ cm', '$18$ cm'],
        'B',
        [
          'Từ cực đại thứ nhất đến thứ bảy có 6 khoảng.',
          'Mỗi khoảng bằng $9,0/6=1,5$ cm.',
          'Vì khoảng cực đại bằng $\\lambda/2$, suy ra $\\lambda=3,0$ cm.'
        ],
        'hard',
        'table',
        'misconception_check'
      ),
      short(
        'Trong cùng môi trường, tăng tần số nguồn từ 20 Hz lên 25 Hz. Khoảng cực đại ban đầu là $2,0$ cm. Khoảng cực đại mới bằng bao nhiêu cm?',
        '1.6',
        [
          'Trong cùng môi trường, tốc độ truyền không đổi nên $\\lambda\\propto1/f$.',
          'Khoảng cực đại cũng tỉ lệ với bước sóng.',
          'Tính $i_2=i_1f_1/f_2=2,0\\times20/25=1,6$ cm.'
        ],
        'hard',
        'equation',
        'far_transfer',
        { acceptedAnswers: ['1.6', '1,6', '1.60', '1,60'] }
      ),
      short(
        'Các khoảng cực đại đo được là $1,48;1,52;1,50;1,49;1,51$ cm. Ước lượng bước sóng theo cm.',
        '3',
        [
          'Tính khoảng trung bình: $\\bar i=(1,48+1,52+1,50+1,49+1,51)/5=1,50$ cm.',
          'Khoảng cực đại liên tiếp bằng $\\lambda/2$.',
          'Suy ra $\\lambda=2\\bar i=3,00$ cm.'
        ],
        'hard',
        'table',
        'far_transfer',
        { holdout: true, acceptedAnswers: ['3', '3.0', '3,0', '3.00', '3,00'] }
      ),
      choice(
        'Khi đo tổng 10 khoảng cực đại thay vì một khoảng, sai số đọc hai đầu gần như không đổi. Lợi ích chính là',
        ['sai số tuyệt đối của thước bằng 0', 'sai số tương đối của khoảng trung bình giảm', 'bước sóng vật lí tăng 10 lần', 'không cần chia kết quả cho 10'],
        'B',
        [
          'Sai số đọc hai đầu không tăng tỉ lệ với tổng chiều dài đo.',
          'Đo tổng nhiều khoảng làm đại lượng đo lớn hơn.',
          'Sau khi chia số khoảng, sai số tương đối của khoảng trung bình giảm.'
        ],
        'hard',
        'experiment',
        'mastery_holdout',
        { holdout: true }
      )
    ]
  },
  {
    questionTypeId: 'phy11-qt13',
    lessonId: 'phy11-kntt-l13',
    outcomeId: 'out-phy11-m2-07',
    subTypeId: 'phy11-qt13-st-fixed',
    items: [
      short(
        'Dây dài $1,2$ m, hai đầu cố định, có 4 bó sóng. Bước sóng bằng bao nhiêu mét?',
        '0.6',
        ['$L=n\\lambda/2$ với $n=4$.', 'Suy ra $\\lambda=2L/n=0,60$ m.'],
        'medium',
        'diagram',
        'near_transfer',
        { acceptedAnswers: ['0.6', '0,6', '0.60', '0,60'] }
      ),
      choice(
        'Dây hai đầu cố định có 5 bụng sóng. Số nút, kể cả hai đầu, bằng',
        ['4', '5', '6', '10'],
        'C',
        ['Mỗi bó có một bụng.', 'Với 5 bó liên tiếp, số nút biên và nút ngăn cách là $5+1=6$.'],
        'medium',
        'diagram',
        'misconception_check'
      ),
      short(
        'Dây dài $0,90$ m, tốc độ sóng $36$ m/s. Tần số của mode có 3 bó sóng bằng bao nhiêu Hz?',
        '60',
        [
          'Với 3 bó, $L=3\\lambda/2$ nên $\\lambda=2L/3=0,60$ m.',
          'Dùng $f=v/\\lambda$.',
          'Tính $f=36/0,60=60$ Hz.'
        ],
        'hard',
        'equation',
        'representation_switch'
      ),
      choice(
        'Giữ chiều dài và lực căng, thay dây bằng dây có khối lượng trên đơn vị dài lớn gấp 4. Tần số cơ bản',
        ['tăng 4 lần', 'tăng 2 lần', 'giảm 2 lần', 'giảm 4 lần'],
        'C',
        [
          'Tốc độ trên dây $v=\\sqrt{F/\\mu}$.',
          'Khi $\\mu$ tăng 4 lần, tốc độ giảm 2 lần.',
          'Vì $f_1=v/(2L)$ nên tần số cơ bản giảm 2 lần.'
        ],
        'hard',
        'equation',
        'far_transfer'
      ),
      short(
        'Hai tần số cộng hưởng liên tiếp của dây hai đầu cố định là 120 Hz và 150 Hz. Tần số cơ bản bằng bao nhiêu Hz?',
        '30',
        [
          'Các tần số riêng của dây hai đầu cố định là $f_n=nf_1$.',
          'Hai mode liên tiếp chênh nhau đúng $f_1$.',
          'Suy ra $f_1=150-120=30$ Hz.'
        ],
        'hard',
        'table',
        'far_transfer',
        { holdout: true }
      ),
      short(
        'Dây dài $1,0$ m, hai đầu cố định, tốc độ sóng $80$ m/s. Có bao nhiêu tần số riêng không vượt quá 200 Hz?',
        '5',
        [
          'Tần số cơ bản $f_1=v/(2L)=40$ Hz.',
          'Các tần số riêng là $f_n=40n$ Hz.',
          'Điều kiện $40n\\le200$ cho $n\\le5$, nên có 5 tần số.'
        ],
        'hard',
        'equation',
        'mastery_holdout',
        { holdout: true }
      )
    ]
  },
  {
    questionTypeId: 'phy11-qt13',
    lessonId: 'phy11-kntt-l13',
    outcomeId: 'out-phy11-m2-07',
    subTypeId: 'phy11-qt13-st-mixed',
    items: [
      choice(
        'Dây một đầu cố định, một đầu tự do ở mode cơ bản có chiều dài bằng',
        ['$\\lambda/4$', '$\\lambda/2$', '$3\\lambda/4$', '$\\lambda$'],
        'A',
        ['Đầu cố định là nút, đầu tự do là bụng.', 'Mode cơ bản chỉ chứa một đoạn nút–bụng dài $\\lambda/4$.'],
        'medium',
        'diagram',
        'near_transfer'
      ),
      short(
        'Dây dài $0,75$ m, một đầu cố định một đầu tự do. Ở mode cơ bản, bước sóng bằng bao nhiêu mét?',
        '3',
        ['$L=\\lambda/4$.', 'Suy ra $\\lambda=4L=3,0$ m.'],
        'medium',
        'equation',
        'representation_switch',
        { acceptedAnswers: ['3', '3.0', '3,0'] }
      ),
      short(
        'Dây một đầu cố định một đầu tự do dài $0,50$ m, tốc độ sóng $40$ m/s. Tần số riêng thấp nhất bằng bao nhiêu Hz?',
        '20',
        [
          'Mode cơ bản thỏa $L=\\lambda/4$ nên $\\lambda=2,0$ m.',
          'Dùng $f=v/\\lambda$.',
          'Tính $f_1=40/2,0=20$ Hz.'
        ],
        'hard',
        'equation',
        'far_transfer'
      ),
      choice(
        'Các tần số riêng của dây một đầu cố định một đầu tự do là',
        ['$f_1,2f_1,3f_1,\\ldots$', '$f_1,3f_1,5f_1,\\ldots$', '$2f_1,4f_1,6f_1,\\ldots$', '$f_1/2,f_1,2f_1,\\ldots$'],
        'B',
        [
          'Điều kiện biên hỗn hợp là $L=(2n+1)\\lambda/4$.',
          'Suy ra tần số tỉ lệ với các số lẻ.',
          'Vì vậy chỉ có $f_1,3f_1,5f_1,\\ldots$.'
        ],
        'hard',
        'equation',
        'misconception_check'
      ),
      short(
        'Một dây biên hỗn hợp có hai tần số riêng liên tiếp là 150 Hz và 210 Hz. Tần số cơ bản bằng bao nhiêu Hz?',
        '30',
        [
          'Hai tần số riêng liên tiếp của biên hỗn hợp hơn kém nhau $2f_1$.',
          'Lập $210-150=2f_1$.',
          'Suy ra $f_1=30$ Hz.'
        ],
        'hard',
        'table',
        'far_transfer',
        { holdout: true }
      ),
      short(
        'Dây một đầu cố định một đầu tự do có $f_1=25$ Hz. Có bao nhiêu tần số riêng không vượt quá 250 Hz?',
        '5',
        [
          'Các tần số riêng là $(2n+1)f_1$: 25, 75, 125, 175, 225, 275, ... Hz.',
          'Giữ các giá trị không vượt quá 250 Hz.',
          'Có 5 tần số thỏa mãn.'
        ],
        'hard',
        'equation',
        'mastery_holdout',
        { holdout: true }
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

export const g11PhysicsModule2ExpansionQuestions: CourseQuestion[] = banks.flatMap(bank =>
  bank.items.map(item => {
    const currentQuestionNumber = questionNumber;
    const id = `phy11-m2x-q${currentQuestionNumber.toString().padStart(3, '0')}`;
    const solutionId = `phy11-m2x-s${currentQuestionNumber.toString().padStart(3, '0')}`;
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
      moduleId: 'phy11-m2',
      lessonId: bank.lessonId,
      topicId: 'phy11-t02',
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
      competency: item.representationType === 'table'
        || item.representationType === 'graph'
        || item.representationType === 'experiment'
        ? 'physical_inquiry'
        : 'physical_application',
      cognitiveLevel: 'application',
      estimatedSeconds: item.difficulty === 'hard' ? 180 : 110,
      practiceRole: item.practiceRole,
      representationType: item.representationType,
      isMasteryHoldout: item.holdout ?? false,
      difficulty: item.difficulty,
      sourceType: 'manual',
      stimulus: item.stimulus
    } as CourseQuestion;
  })
);

export const g11PhysicsModule2ExpansionSolutions: CourseSolution[] = solutionRows.map(row => ({
  id: row.id,
  questionId: row.questionId,
  courseId: 'grade11:physics',
  moduleId: 'phy11-m2',
  recognition: 'Xác định loại biểu diễn sóng, điều kiện biên hoặc điều kiện giao thoa trước khi tính toán.',
  detailedSteps: row.reasoning.map((explanation, index) => ({
    order: index + 1,
    title: index === 0 ? 'Lập mô hình' : index === row.reasoning.length - 1 ? 'Kết luận' : 'Biến đổi',
    explanation
  })),
  finalAnswer: row.answer,
  commonMistakes: ['Đếm sai số khoảng, nhầm điều kiện biên hoặc bỏ qua pha ban đầu của hai nguồn.'],
  reviewSuggestions: [`Ôn lại sơ đồ và điều kiện áp dụng của ${row.questionTypeId}.`]
}));
