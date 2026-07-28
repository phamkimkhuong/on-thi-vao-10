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
    start: 169,
    questionTypeId: 'phy11-qt15',
    recognition: 'Dùng $F=k|q_1q_2|/r^2$, xác định hút–đẩy theo dấu rồi tổng hợp lực theo vector.',
    commonMistake: 'Cộng các độ lớn lực mà không xét phương chiều hoặc quên đổi microcoulomb.',
    answers: ['B', 'B', 'B', 'C', 'B', 'C', 'B', 'B', 'A', 'C', 'B', 'B'],
    work: [
      '$F=9\\times10^9\\cdot2\\times10^{-6}\\cdot3\\times10^{-6}/0,3^2=0,60$ N.',
      'Hai điện tích cùng dấu đẩy nhau.',
      'Hai điện tích trái dấu hút nhau nên lực lên $q_1$ hướng về $q_2$, tức sang phải.',
      '$F\\propto1/r^2$ nên khoảng cách gấp 3 làm lực giảm 9 lần.',
      '$F=9\\times10^9\\cdot10^{-12}/0,1^2=0,90$ N.',
      '$r=\\sqrt{kq^2/F}=\\sqrt{0,1}\\approx0,316$ m.',
      'Ở trung điểm, hai lực có cùng độ lớn và ngược chiều nên hợp lực bằng 0.',
      '$+Q$ đẩy q sang phải và $-Q$ hút q sang phải nên hai lực cùng chiều.',
      'Hai lực ngược chiều cho $F=|0,8-0,3|=0,5$ N.',
      'Hai vector vuông góc cùng độ lớn cho $F_h=\\sqrt{F^2+F^2}=\\sqrt2F$.',
      'Hai lực cùng chiều nên hợp lực bằng $2+5=7$ N.',
      'Lực là đại lượng vector, phải xác định phương và chiều trước khi tổng hợp.'
    ]
  },
  {
    start: 181,
    questionTypeId: 'phy11-qt16',
    recognition: 'Cường độ điện trường đặc trưng cho điện trường; lực lên điện tích thử tuân theo $\\vec F=q\\vec E$.',
    commonMistake: 'Cho rằng cường độ điện trường phụ thuộc điện tích thử hoặc quên đảo chiều lực với q âm.',
    answers: ['B', 'A', 'C', 'A', 'A', 'B', 'B', 'B', 'C', 'A', 'B', 'B'],
    work: [
      'Cường độ điện trường đặc trưng khả năng tác dụng lực tại điểm khảo sát.',
      'Từ $E=F/q$, đơn vị là N/C, tương đương V/m.',
      'Nguồn và vị trí không đổi nên E không đổi; chỉ lực tăng theo q.',
      'Chiều E được định nghĩa theo chiều lực lên điện tích thử dương.',
      'Điện tích nguồn tạo điện trường trong không gian xung quanh.',
      '$E=F/q$ dùng điện tích thử để đo nhưng E do nguồn và vị trí quyết định.',
      '$F=|q|E=2\\times10^{-6}\\cdot3\\times10^4=0,06$ N.',
      'q âm nên lực ngược chiều E, tức hướng sang trái.',
      '$E=F/q=0,12/(3\\times10^{-6})=4\\times10^4$ N/C.',
      'Độ lớn lực lên electron là $F=eE$.',
      'Proton và electron có cùng độ lớn điện tích nhưng trái dấu nên lực bằng nhau và ngược chiều.',
      '$F=|q|E$ nên E gấp 3 làm lực gấp 3.'
    ]
  },
  {
    start: 193,
    questionTypeId: 'phy11-qt17',
    recognition: 'Tính từng điện trường bằng $E=k|Q|/r^2$, xác định chiều theo dấu nguồn rồi cộng vector.',
    commonMistake: 'Xác định chiều điện trường theo điện tích thử hoặc cộng đại số khi các vector không cùng phương.',
    answers: ['C', 'B', 'B', 'B', 'A', 'B', 'A', 'B', 'C', 'B', 'A', 'A'],
    work: [
      '$E=9\\times10^9\\cdot10^{-6}/0,1^2=9\\times10^5$ N/C.',
      'Đường sức và vector E của điện tích dương hướng ra xa nguồn.',
      'Vector E của điện tích âm hướng về nguồn.',
      '$E\\propto1/r^2$ nên r gấp đôi làm E giảm bốn lần.',
      '$E(2r)=E(r)/4=100$ N/C.',
      '$|Q|=Er^2/k=3,6\\times10^5\\cdot0,2^2/(9\\times10^9)=1,6\\,\\mu$C.',
      'Hai điện trường ở trung điểm bằng nhau, ngược chiều nên tổng bằng 0.',
      'Điện trường do $+Q$ hướng ra xa và do $-Q$ hướng vào $-Q$; cả hai sang phải.',
      'Hai vector cùng chiều cho $E=300+500=800$ N/C.',
      '$E=\\sqrt{3^2+4^2}=5$ kN/C.',
      'Hai vector bằng nhau ngược chiều triệt tiêu nhau tại M.',
      'Chiều điện trường thành phần chỉ do dấu điện tích nguồn và vị trí khảo sát quyết định.'
    ]
  },
  {
    start: 205,
    questionTypeId: 'phy11-qt18',
    recognition: 'Dùng quy tắc tiếp tuyến, chiều từ dương sang âm, mật độ đường sức và điều kiện không cắt nhau.',
    commonMistake: 'Cho đường sức cắt nhau hoặc đồng nhất đường sức với mọi quỹ đạo hạt điện.',
    answers: ['A', 'B', 'B', 'A', 'A', 'B', 'A', 'B', 'B', 'A', 'B', 'B'],
    work: [
      'Tiếp tuyến với đường sức tại một điểm cho phương của vector E.',
      'Mật độ đường sức lớn hơn biểu diễn cường độ điện trường lớn hơn.',
      'Đường sức xuất phát từ điện tích dương.',
      'Đường sức kết thúc ở điện tích âm.',
      'Nếu cắt nhau, tại một điểm E sẽ có hai hướng, trái với tính xác định của vector.',
      'Điện tích âm chịu lực ngược chiều E nên gia tốc ngược chiều đường sức.',
      'Điện trường đều được biểu diễn bằng các đường thẳng song song, cùng chiều, cách đều.',
      'Đường sức của lưỡng cực đi từ điện tích dương tới điện tích âm.',
      'Hai đường sức không thể cắt nhau nên hình vẽ không hợp lệ.',
      'Điện tích điểm cô lập tạo trường đối xứng cầu quanh nó.',
      'Đường sức điện tĩnh có hướng và không khép kín.',
      'Quỹ đạo còn phụ thuộc q và vận tốc ban đầu nên không nhất thiết trùng đường sức.'
    ]
  },
  {
    start: 217,
    questionTypeId: 'phy11-qt19',
    recognition: 'Trong điện trường đều dùng $E=|U|/d$, $F=|q|E$ và $A=qEs\\cos\\alpha$.',
    commonMistake: 'Không đổi khoảng cách sang mét hoặc dùng toàn bộ độ dài đường đi thay hình chiếu.',
    answers: ['C', 'B', 'A', 'B', 'B', 'B', 'B', 'B', 'C', 'B', 'A', 'B'],
    work: [
      '$E=U/d=600/0,02=3\\times10^4$ V/m.',
      '$U=Ed=2\\times10^4\\cdot0,005=100$ V.',
      'E không đổi về độ lớn và hướng nên đường sức thẳng song song cách đều.',
      '$E=U/d$ nên d gấp đôi làm E giảm một nửa.',
      'Điện trường hướng từ nơi điện thế cao, bản dương, sang bản âm.',
      '$|U|=Ed=5000\\cdot0,03=150$ V.',
      '$F=|q|E=2\\times10^{-6}\\cdot10^4=0,02$ N.',
      '$q=A/(Es)=20\\times10^{-6}/(500\\cdot0,04)=1\\,\\mu$C.',
      '$\\alpha=90^\\circ$ nên $A=qEs\\cos90^\\circ=0$.',
      'Điện tích âm chịu lực ngược chiều vector E.',
      'Công bằng $qE$ nhân hình chiếu độ dời lên phương điện trường: $qEs\\cos\\alpha$.',
      'Chỉ khi quỹ đạo song song E thì độ dài đường đi bằng hình chiếu cần dùng.'
    ]
  },
  {
    start: 229,
    questionTypeId: 'phy11-qt20',
    recognition: 'Dùng $\\vec a=q\\vec E/m$; tách chuyển động đều theo trục không lực và biến đổi đều theo trục điện trường.',
    commonMistake: 'Cho lực luôn cùng chiều E hoặc trộn chuyển động theo hai trục.',
    answers: ['A', 'A', 'B', 'A', 'B', 'B', 'B', 'B', 'A', 'B', 'A', 'B'],
    work: [
      'Độ lớn gia tốc là $a=F/m=|q|E/m$.',
      'Proton dương chịu lực cùng chiều E nên nhanh dần sang phải.',
      'Electron âm chịu lực ngược E nên nhanh dần sang trái.',
      'Lực cùng chiều chuyển động sinh công dương, làm động năng tăng.',
      '$a=|q|E/m=2\\times10^{-6}\\cdot500/10^{-3}=1$ m/s².',
      '$v=at=4\\cdot3=12$ m/s.',
      'Theo phương ngang chuyển động đều, theo phương dọc nhanh dần xuống nên quỹ đạo parabol.',
      'Electron chịu lực ngược E nên quỹ đạo cong lên.',
      'Không có lực theo phương vận tốc đầu nên thành phần đó là chuyển động thẳng đều.',
      '$a\\propto|q|$ và $y=at^2/2$, nên q gấp đôi làm độ lệch gấp đôi.',
      'Theo phương ngang $x=v_0t$; đi hết L mất $t=L/v_0$.',
      'Chuyển động có vận tốc đầu theo trục y bằng 0 nên $y=at^2/2$.'
    ]
  },
  {
    start: 241,
    questionTypeId: 'phy11-qt21',
    recognition: 'Điện trường tĩnh là trường thế: $A_{12}=W_{t1}-W_{t2}=-\\Delta W_t$.',
    commonMistake: 'Nhầm dấu giữa công lực điện và độ biến thiên thế năng.',
    answers: ['B', 'B', 'A', 'C', 'A', 'B', 'B', 'A', 'B', 'A', 'A', 'A'],
    work: [
      'Công dương 0,20 J bằng độ giảm thế năng, nên thế năng giảm 0,20 J.',
      'Công lực điện tĩnh chỉ phụ thuộc hai vị trí đầu và cuối.',
      'Chuyển động theo lực làm công dương, nên $\\Delta W_t=-A<0$.',
      'Đảo chiều hai điểm làm công đổi dấu: $A_{BA}=5$ mJ.',
      'Khi độ dời cùng E, $\\cos\\alpha=1$ nên $A=qEd$.',
      '$A=qU=2\\times10^{-6}\\cdot100=2\\times10^{-4}$ J.',
      'Theo định nghĩa thế năng, công lực thế bằng số đối của độ biến thiên thế năng.',
      '$W_{t2}=W_{t1}-A=0,50-0,20=0,30$ J.',
      '$A=-\\Delta W_t=-0,08$ J.',
      'Dịch chuyển ngược lực cần công ngoài dương và làm thế năng tăng.',
      'Tính chất trường thế bảo đảm công giữa A và B độc lập đường đi.',
      'Định lí động năng cho $\\Delta W_đ=A>0$, nên động năng tăng.'
    ]
  },
  {
    start: 253,
    questionTypeId: 'phy11-qt22',
    recognition: 'Phân biệt điện thế điểm $V=W/q$ với hiệu điện thế $U_{AB}=V_A-V_B=A_{AB}/q$.',
    commonMistake: 'Đồng nhất điện thế với hiệu điện thế hoặc đảo thứ tự chỉ số của U.',
    answers: ['C', 'A', 'A', 'B', 'A', 'B', 'A', 'A', 'B', 'B', 'A', 'B'],
    work: [
      '$V=W/q=6\\times10^{-3}/(2\\times10^{-6})=3000$ V.',
      'Đơn vị điện thế và hiệu điện thế là volt.',
      'Điện thế cho thế năng trên một đơn vị điện tích, đặc trưng khả năng sinh công.',
      '$W=qV$ nên q âm và V dương cho W âm.',
      'Đổi mốc cộng cùng một hằng số vào mọi điện thế nên hiệu hai điện thế không đổi.',
      'Điện thế gắn với một điểm; hiệu điện thế là chênh lệch giữa hai điểm.',
      'Từ định nghĩa $U_{AB}=A_{AB}/q$, suy ra $A_{AB}=qU_{AB}$.',
      '$U_{AB}=120-50=70$ V.',
      '$U_{AB}=A/q=0,03/0,005=6$ V.',
      'Vector E hướng theo chiều điện thế giảm.',
      'Cùng mặt đẳng thế nghĩa là $V_A=V_B$, nên U bằng 0.',
      '$A=qU=(-2\\times10^{-6})\\cdot100=-2\\times10^{-4}$ J.'
    ]
  },
  {
    start: 265,
    questionTypeId: 'phy11-qt23',
    recognition: 'Dùng $Q=CU$, đọc điện áp định mức và xác định vai trò tích–phóng điện của tụ.',
    commonMistake: 'Cho rằng điện dung của cùng tụ phụ thuộc Q, U hoặc bỏ qua điện áp định mức.',
    answers: ['A', 'A', 'A', 'C', 'B', 'B', 'A', 'A', 'A', 'B', 'A', 'A'],
    work: [
      '$Q=CU=5\\,\\mu\\text F\\cdot12=60\\,\\mu$C.',
      '$C=Q/U=200\\,\\mu\\text C/50=4\\,\\mu$F.',
      'Đơn vị SI của điện dung là farad, kí hiệu F.',
      'Điện dung của tụ lí tưởng do hình học và điện môi quyết định.',
      '$Q=CU$ nên cùng C, U gấp đôi làm Q gấp đôi.',
      '$U=Q/C=0,4\\text{ mC}/20\\,\\mu\\text F=20$ V.',
      'Thông số cho C bằng $100\\,\\mu$F và điện áp định mức 25 V.',
      '24 V vượt định mức 16 V, có thể đánh thủng điện môi và làm hỏng tụ.',
      'Tụ có chức năng cơ bản là tích và phóng điện.',
      'Ở cùng U, $Q\\propto C$ nên C gấp đôi làm Q gấp đôi.',
      'Xả qua điện trở hạn dòng và đo lại điện áp giúp tránh phóng điện nguy hiểm.',
      'Tụ tích năng lượng chậm rồi phóng nhanh để tạo xung sáng mạnh.'
    ]
  }
];

const pad = (value: number) => value.toString().padStart(3, '0');
const answerLetters = ['A', 'B', 'C', 'D'] as const;

export const g11PhysicsModule3Solutions: CourseSolution[] = groups.flatMap(group =>
  group.answers.map((_answer, index) => ({
    id: `phy11-s${pad(group.start + index)}`,
    questionId: `phy11-q${pad(group.start + index)}`,
    courseId: 'grade11:physics',
    moduleId: 'phy11-m3',
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
