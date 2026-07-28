import type { CourseSolution } from '@/data/schema';

interface SolutionGroup {
  start: number;
  questionTypeId: string;
  recognition: string;
  commonMistake: string;
  answers: string[];
  work: string[];
}

const groups: SolutionGroup[] = [
  {
    start: 277,
    questionTypeId: 'phy11-qt24',
    recognition: 'Ở mức vi mô dùng $I=Sn|q|v$, đổi S sang m² và phân biệt tốc độ trôi với tốc độ tín hiệu.',
    commonMistake: 'Quên đổi mm² hoặc đồng nhất chiều electron với chiều dòng điện quy ước.',
    answers: ['B', 'A', 'B', 'B', 'B', 'B', 'C', 'B', 'C', 'B', 'A', 'B'],
    work: [
      '$I=10^{-6}\\cdot8\\times10^{28}\\cdot1,6\\times10^{-19}\\cdot10^{-4}=1,28$ A.',
      'Trong kim loại, các electron tự do là hạt tải điện linh động.',
      'Electron mang điện âm nên chuyển động có hướng ngược chiều dòng điện quy ước.',
      '$I\\propto S$ khi n, q, v không đổi, nên S gấp đôi làm I gấp đôi.',
      '$I=2\\times10^{-6}\\cdot5\\times10^{28}\\cdot1,6\\times10^{-19}\\cdot2\\times10^{-4}=3,2$ A.',
      'Electron trôi rất chậm; điện trường và tín hiệu trong mạch được thiết lập nhanh hơn nhiều.',
      '$v=I/(Sn e)=1,6/(10^{-6}\\cdot10^{29}\\cdot1,6\\times10^{-19})=10^{-4}$ m/s.',
      '$v=I/(Sne)$ nên S giảm một nửa làm v tăng gấp đôi.',
      '$n=I/(Sev)=3,2/(2\\times10^{-6}\\cdot1,6\\times10^{-19}\\cdot10^{-4})=10^{29}$ m⁻³.',
      'Với I và n không đổi, $v\\propto1/S$ nên dây lớn hơn có v nhỏ hơn.',
      'Cường độ dòng điện biểu thị tốc độ điện lượng có hướng đi qua tiết diện.',
      '$I=Sne v$; n giảm một nửa thì v phải gấp đôi để I giữ nguyên.'
    ]
  },
  {
    start: 289,
    questionTypeId: 'phy11-qt25',
    recognition: 'Dùng $I=\\Delta q/\\Delta t$, $q=It$ và $N=|q|/e$.',
    commonMistake: 'Không đổi phút sang giây hoặc nhân với e khi cần chia cho e.',
    answers: ['D', 'A', 'C', 'A', 'B', 'B', 'B', 'B', 'B', 'B', 'A', 'C'],
    work: [
      '$q=It=2\\cdot5=10$ C.',
      '$I=q/t=12/4=3$ A.',
      '$t=q/I=6/0,5=12$ s.',
      '$1$ A $=1$ C/s theo định nghĩa.',
      '$I=0,25$ A, $t=120$ s nên $q=30$ C.',
      'Độ dốc đồ thị q–t là $I=18/6=3$ A.',
      '$N=q/e=1,6/(1,6\\times10^{-19})=10^{19}$.',
      '$I=Ne/t=5\\times10^{18}\\cdot1,6\\times10^{-19}=0,8$ A.',
      '$N=I/e=1,6/(1,6\\times10^{-19})=10^{19}$ electron mỗi giây.',
      '$I=Ne/t=2\\times10^{19}\\cdot1,6\\times10^{-19}/4=0,8$ A.',
      'Mỗi electron có độ lớn điện tích e nên số hạt là $N=|q|/e$.',
      '$q=It=3,2$ C; $N=3,2/(1,6\\times10^{-19})=2\\times10^{19}$.'
    ]
  },
  {
    start: 301,
    questionTypeId: 'phy11-qt26',
    recognition: 'Với dây đồng chất dùng $R=\\rho l/S$; với nhiệt độ dùng đặc tính R–T trong vùng cho phép.',
    commonMistake: 'Nhầm điện trở với điện trở suất hoặc quên tiết diện tỉ lệ bình phương đường kính.',
    answers: ['B', 'B', 'B', 'A', 'B', 'A', 'A', 'C', 'A', 'B', 'A', 'A'],
    work: [
      '$R=\\rho l/S=1,7\\times10^{-8}\\cdot10/10^{-6}=0,17\\,\\Omega$.',
      '$R\\propto l$ nên chiều dài gấp 3 làm điện trở gấp 3.',
      '$R\\propto1/S$ nên tiết diện gấp đôi làm điện trở giảm một nửa.',
      'Điện trở suất là thuộc tính vật liệu ở điều kiện nhiệt độ xác định.',
      'Đường kính gấp đôi làm tiết diện gấp 4, nên điện trở còn $R_B/4$.',
      'Công thức đúng là $R=\\rho l/S$.',
      'Kim loại có hệ số nhiệt điện trở dương trong vùng thông thường.',
      '$R=R_0(1+\\alpha\\Delta T)=10(1+0,004\\cdot50)=12\\,\\Omega$.',
      'NTC có hệ số nhiệt âm nên R giảm khi T tăng.',
      'Đồ thị dốc xuống nghĩa là R giảm theo T, tương ứng hệ số nhiệt âm.',
      'Thermistor biến đổi điện trở theo nhiệt độ nên dùng làm cảm biến.',
      'Mô hình tuyến tính chỉ được xác nhận trong một miền nhiệt độ hữu hạn.'
    ]
  },
  {
    start: 313,
    questionTypeId: 'phy11-qt27',
    recognition: 'Đọc đúng trục I–U; với vật dẫn Ohm dùng $R=U/I$, hệ số góc I theo U bằng $1/R$.',
    commonMistake: 'Gọi hệ số góc I/U là điện trở hoặc kết luận R không đổi chỉ từ một điểm.',
    answers: ['C', 'B', 'B', 'B', 'A', 'B', 'A', 'B', 'A', 'A', 'A', 'A'],
    work: [
      '$R=U/I=6/0,30=20\\,\\Omega$.',
      'Đồ thị I theo U có $I=U/R$, nên hệ số góc bằng $1/R$.',
      'Độ dốc I/U lớn nghĩa là $1/R$ lớn, nên R nhỏ.',
      'Mỗi cặp cho $U/I=20\\,\\Omega$.',
      'Đường thẳng qua gốc biểu diễn I tỉ lệ thuận U trong vùng khảo sát.',
      'Nếu U là tung độ và I là hoành độ, độ dốc $\\Delta U/\\Delta I=R$.',
      'Dòng tăng làm sợi đốt nóng và điện trở kim loại tăng, khiến đặc tuyến cong.',
      'Tỉ số U/I thay đổi từ 10 sang 18 ohm nên không thể coi R không đổi.',
      'Vật dẫn Ohm có U/I gần như không đổi trong điều kiện khảo sát.',
      'Điện trở tĩnh tại điểm làm việc được tính bằng U/I tại chính điểm đó.',
      'Phải xác định trục, chiều và đơn vị trước khi tính độ dốc hoặc tỉ số.',
      'Đặc tuyến cong, không qua gốc không cho phép mặc định quan hệ Ohm tuyến tính.'
    ]
  },
  {
    start: 325,
    questionTypeId: 'phy11-qt28',
    recognition: 'Trong vùng Ohm và nhiệt độ phù hợp dùng $U=IR$; ngoài vùng đó phải dựa vào đặc tuyến.',
    commonMistake: 'Áp dụng một điện trở không đổi cho mọi linh kiện và mọi nhiệt độ.',
    answers: ['A', 'A', 'B', 'B', 'B', 'A', 'A', 'B', 'A', 'B', 'A', 'A'],
    work: [
      '$I=U/R=10/20=0,5$ A.',
      '$U=IR=0,25\\cdot48=12$ V.',
      '$R=U/I=6/0,20=30\\,\\Omega$.',
      '$I=U/R$ nên cùng R, U gấp 3 làm I gấp 3.',
      '$U=IR=0,05\\cdot100=5$ V.',
      'Định luật Ohm cho đoạn mạch là $I=U/R$.',
      'Giữ nhiệt độ gần như không đổi giúp điện trở kim loại ổn định.',
      'Đặc tuyến cong nghĩa là U/I thay đổi; phải xét từng điểm làm việc.',
      'U/I chính là điện trở tĩnh, nên tỉ số tăng cho thấy R thay đổi.',
      'Nhiều linh kiện phi tuyến nên mệnh đề áp dụng cho mọi linh kiện là sai.',
      'Nhiệt độ sợi đốt tăng làm điện trở kim loại tăng.',
      'Quan hệ I–U tuyến tính qua gốc trong điều kiện cố định là bằng chứng tuân theo Ohm.'
    ]
  },
  {
    start: 337,
    questionTypeId: 'phy11-qt29',
    recognition: 'Với nguồn phát điện dùng $I=\\mathcal E/(R+r)$ và $U=\\mathcal E-Ir=IR$.',
    commonMistake: 'Đồng nhất điện áp cực nguồn với suất điện động khi đang có dòng hoặc bỏ điện trở trong.',
    answers: ['B', 'A', 'A', 'B', 'A', 'B', 'C', 'A', 'C', 'A', 'A', 'A'],
    work: [
      '$I=12/(5+1)=2$ A.',
      '$U=\\mathcal E-Ir=9-2\\cdot1=7$ V.',
      'Tổng điện trở mạch kín là $R+r$, nên $I=\\mathcal E/(R+r)$.',
      '$I=6/(2,5+0,5)=2$ A; $U=IR=5$ V.',
      'Khi phát điện, sụt áp trong là Ir nên $U=\\mathcal E-Ir$.',
      'Mẫu số $R+r$ tăng nên dòng điện giảm.',
      'Hở mạch có I=0, nên $U=\\mathcal E$.',
      'Ngắn mạch có R ngoài bằng 0, nên $I_{nm}=\\mathcal E/r$.',
      '$I_{nm}=1,5/0,5=3$ A.',
      '$H=P_{ngoài}/P_{nguồn}=UI/(\\mathcal EI)=U/\\mathcal E=R/(R+r)$.',
      'R rất lớn làm I rất nhỏ, sụt áp Ir nhỏ và U gần bằng suất điện động.',
      'Điện trở toàn mạch gần r nhỏ nên dòng ngắn mạch lớn, gây tỏa nhiệt nguy hiểm.'
    ]
  },
  {
    start: 349,
    questionTypeId: 'phy11-qt30',
    recognition: 'Dùng $P=UI=I^2R=U^2/R$ và $A=Pt$; phân biệt kW với kWh.',
    commonMistake: 'Nhầm công suất với điện năng hoặc bỏ đổi watt–kilowatt và phút–giờ.',
    answers: ['B', 'C', 'C', 'A', 'B', 'A', 'B', 'C', 'B', 'A', 'A', 'A'],
    work: [
      '$1000$ W $=1$ kW; $A=Pt=1\\cdot2=2$ kWh.',
      '$P=UI=12\\cdot2=24$ W.',
      '$P=I^2R=2^2\\cdot10=40$ W.',
      '$P=A/t=0,6/3=0,2$ kW.',
      '$A=0,060\\text{ kW}\\cdot5\\text{ h}=0,30$ kWh.',
      'Công suất điện tức thời của đoạn mạch là $P=UI$.',
      'Công suất giảm 50 W; trong 150 h tiết kiệm $50\\cdot150=7500$ Wh $=7,5$ kWh.',
      '$P_{max}=UI=220\\cdot10=2200$ W.',
      'kWh là công suất nhân thời gian nên là đơn vị điện năng.',
      'Thông số định mức chỉ đạt trong điều kiện thiết kế, đặc biệt ở điện áp 220 V.',
      'Cùng P, tăng U làm I=P/U giảm; tổn hao $I^2R$ giảm.',
      'Dây và thiết bị bảo vệ phải chịu được dòng làm việc của tải công suất lớn.'
    ]
  },
  {
    start: 361,
    questionTypeId: 'phy11-qt31',
    recognition: 'Mắc ampe kế nối tiếp, vôn kế song song; xử lí $U=\\mathcal E-rI$ bằng tung độ gốc và độ dốc.',
    commonMistake: 'Mắc ampe kế song song nguồn hoặc lấy hệ số góc U–I là r thay vì −r.',
    answers: ['A', 'B', 'A', 'A', 'A', 'A', 'A', 'A', 'B', 'B', 'C', 'A'],
    work: [
      'Ampe kế phải nằm trên nhánh dòng cần đo nên mắc nối tiếp với tải.',
      'Vôn kế đo chênh điện thế nên mắc song song hai cực nguồn.',
      'Biến trở thay đổi tải, tạo nhiều giá trị I và U để dựng đường thẳng.',
      'Điện trở ban đầu lớn hạn chế dòng, bảo vệ nguồn và ampe kế.',
      'Ampe kế có điện trở rất nhỏ; mắc song song nguồn gần như gây ngắn mạch.',
      'Nhiều cặp số liệu cho phép khớp đường và giảm ảnh hưởng sai số ngẫu nhiên.',
      'So với $U=\\mathcal E-rI$, tung độ gốc là 1,50 V và r=0,40 ohm.',
      'Tại I=0, U bằng suất điện động nên tung độ gốc là $\\mathcal E$.',
      'Độ dốc $\\Delta U/\\Delta I=-r$.',
      '$r=-\\Delta U/\\Delta I=-(1,1-1,4)/(0,8-0,2)=0,5\\,\\Omega$.',
      '$\\mathcal E=U+rI=1,4+0,5\\cdot0,2=1,5$ V.',
      'Khớp đường thẳng tốt nhất dùng toàn bộ dữ liệu; tung độ gốc cho E và độ dốc cho −r.'
    ]
  }
];

const pad = (value: number) => value.toString().padStart(3, '0');
const answerLetters = ['A', 'B', 'C', 'D'] as const;

export const g11PhysicsModule4Solutions: CourseSolution[] = groups.flatMap(group =>
  group.answers.map((_answer, index) => ({
    id: `phy11-s${pad(group.start + index)}`,
    questionId: `phy11-q${pad(group.start + index)}`,
    courseId: 'grade11:physics',
    moduleId: 'phy11-m4',
    recognition: group.recognition,
    detailedSteps: [
      { order: 1, title: 'Nhận dạng', explanation: group.recognition },
      { order: 2, title: 'Xử lí và kết luận', explanation: group.work[index] }
    ],
    finalAnswer: answerLetters[(group.start + index - 1) % answerLetters.length],
    commonMistakes: [group.commonMistake],
    reviewSuggestions: [`Ôn lại hướng giải và dấu hiệu nhận biết của ${group.questionTypeId}.`]
  }))
);
