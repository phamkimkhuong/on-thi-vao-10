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
    start: 1,
    questionTypeId: 'phy11-qt01',
    recognition: 'Đối chiếu phương trình hoặc chu kì lặp trên đồ thị với các đại lượng đặc trưng của dao động điều hòa.',
    commonMistake: 'Nhầm biên độ với khoảng cách hai biên hoặc nhầm tần số góc với tần số.',
    answers: ['A', 'B', 'B', 'A', 'C', 'A', 'B', 'B', 'B', 'C', 'C', 'C'],
    work: [
      'Dạng chuẩn là $x=A\\cos(\\omega t+\\varphi)$ nên $A=5$ cm và $\\omega=10\\pi$ rad/s.',
      'Biên độ luôn dương. Vì $-4\\cos(5\\pi t)=4\\cos(5\\pi t+\\pi)$ nên $A=4$ cm.',
      '$\\sin$ và $\\cos$ chỉ khác pha; $\\omega=4\\pi$ rad/s nên $f=\\omega/(2\\pi)=2$ Hz.',
      '$T=2\\pi/\\omega=2\\pi/20=\\pi/10$ s.',
      '$f=\\omega/(2\\pi)=2\\pi/(2\\pi)=1$ Hz.',
      '$\\omega=2\\pi/T=5\\pi$ rad/s; ở biên dương lúc đầu nên $\\varphi=0$.',
      'Biên độ bằng nửa khoảng cách giữa hai biên: $A=[4-(-4)]/2=4$ cm.',
      'Khoảng thời gian giữa hai đỉnh cùng loại là một chu kì: $T=0,70-0,20=0,50$ s.',
      'Hai trạng thái cùng li độ và cùng chiều cách nhau một chu kì; $f=1/0,8=1,25$ Hz.',
      'Từ biên đến vị trí cân bằng gần nhất là $T/4$, nên $T=4\\times0,15=0,60$ s.',
      '$x(0)=0$ và $v(0)<0$ phù hợp với $x=-A\\sin(\\omega t)$; $\\omega=2\\pi/T=\\pi$.',
      'Hai lần qua cùng vị trí theo cùng chiều cách nhau $T=0,25$ s, nên $\\omega=2\\pi/T=8\\pi$ rad/s.'
    ]
  },
  {
    start: 13,
    questionTypeId: 'phy11-qt02',
    recognition: 'Dùng $v_{\\max}=\\omega A$, $a=-\\omega^2x$ và $v^2=\\omega^2(A^2-x^2)$.',
    commonMistake: 'Nhầm vị trí đạt cực đại của vận tốc và gia tốc hoặc bỏ dấu âm trong $a=-\\omega^2x$.',
    answers: ['A', 'B', 'C', 'B', 'A', 'B', 'B', 'B', 'A', 'A', 'B', 'A'],
    work: [
      '$v_{\\max}=\\omega A=10\\times6=60$ cm/s.',
      '$a_{\\max}=\\omega^2A=25\\times4=100$ cm/s².',
      'Tại vị trí cân bằng, thế năng nhỏ nhất và độ lớn vận tốc đạt cực đại.',
      '$\\omega=v_{\\max}/A=40/5=8$ rad/s.',
      '$A=a_{\\max}/\\omega^2=3,2/16=0,20$ m.',
      '$a_{\\max}=\\omega^2A$ nên khi $\\omega$ gấp đôi, $a_{\\max}$ gấp bốn.',
      '$a=-\\omega^2x=-25\\times3=-75$ cm/s².',
      '$|v|=\\omega\\sqrt{A^2-x^2}=2\\sqrt{100-36}=16$ cm/s.',
      '$x>0$ nên $a<0$; đồng thời $v>0$ nên vật đang đi xa vị trí cân bằng.',
      'Ở biên dương, $v=0$ và $a=-\\omega^2A$ có giá trị âm cực đại về độ lớn.',
      '$\\omega=|v|/\\sqrt{A^2-x^2}=16/4=4$ rad/s.',
      'Tại $t=\\pi/4$, pha bằng $\\pi/2$: $x=0$, $v=-\\omega A=-8$ cm/s.'
    ]
  },
  {
    start: 25,
    questionTypeId: 'phy11-qt03',
    recognition: 'Dùng $W=\\frac12kA^2$, $W_t=\\frac12kx^2$ và $W_đ=W-W_t$.',
    commonMistake: 'Cho rằng từng dạng động năng hoặc thế năng được bảo toàn thay vì tổng cơ năng.',
    answers: ['A', 'A', 'B', 'B', 'B', 'C', 'B', 'C', 'A', 'C', 'B', 'A'],
    work: [
      '$W=\\frac12kA^2=\\frac12\\cdot100\\cdot0,1^2=0,50$ J.',
      '$W_t=\\frac12kx^2=\\frac12\\cdot80\\cdot0,05^2=0,10$ J.',
      'Tại vị trí cân bằng $x=0$, thế năng nhỏ nhất và động năng cực đại.',
      '$W_đ=W-W_t=0,8-0,3=0,5$ J.',
      '$W_t/W=x^2/A^2=(1/2)^2=1/4$.',
      'Trong mô hình lí tưởng, động năng và thế năng biến thiên nhưng tổng cơ năng không đổi.',
      '$W_đ=W_t$ nên $x^2/A^2=1/2$, suy ra $|x|=A/\\sqrt2=5\\sqrt2$ cm.',
      '$W\\propto A^2$ nên biên độ gấp 3 làm cơ năng gấp 9.',
      '$W=\\frac12m\\omega^2A^2=0,5\\cdot0,2\\cdot100\\cdot0,05^2=0,025$ J.',
      '$W_đ/W=1-x^2/A^2=1-0,6^2=0,64=64\\%$.',
      '$W_t=\\frac12kx^2$ là hàm bậc hai không âm, đồ thị là parabol mở lên.',
      '$W_t=W-W_đ=2-1,5=0,5$ J.'
    ]
  },
  {
    start: 37,
    questionTypeId: 'phy11-qt04',
    recognition: 'Nhận diện sự suy giảm biên độ do lực cản hoặc trạng thái ổn định do ngoại lực tuần hoàn.',
    commonMistake: 'Đồng nhất tần số cưỡng bức với tần số riêng trong mọi trường hợp.',
    answers: ['B', 'B', 'B', 'B', 'C', 'D', 'B', 'C', 'B', 'A', 'B', 'B'],
    work: [
      'Dao động tắt dần có biên độ giảm dần theo thời gian.',
      'Lực cản thực hiện công âm, chuyển cơ năng sang các dạng năng lượng khác.',
      'Các đỉnh giảm dần là dấu hiệu trực tiếp của dao động tắt dần.',
      'Bộ giảm xóc tạo lực cản thích hợp để tiêu hao nhanh năng lượng dao động.',
      'Li độ và vận tốc đổi dấu tuần hoàn; cơ năng mới giảm theo thời gian.',
      'Có lực cản nên cơ năng của dao động tắt dần không được bảo toàn.',
      'Ở trạng thái ổn định, hệ dao động theo tần số của ngoại lực tuần hoàn.',
      'Ngoại lực có tần số 3 Hz nên dao động cưỡng bức ổn định cũng có tần số 3 Hz.',
      'Ngoại lực tuần hoàn bù phần năng lượng mất mát và duy trì dao động.',
      'Biên độ phụ thuộc độ lệch tần số và mức cản của hệ.',
      'Tần số ở trạng thái cưỡng bức ổn định bằng tần số ngoại lực.',
      'Lực kích thích tuần hoàn từ động cơ tạo dao động cưỡng bức của bệ máy.'
    ]
  },
  {
    start: 49,
    questionTypeId: 'phy11-qt05',
    recognition: 'So sánh tần số kích thích với tần số riêng và đánh giá tác động của biên độ cộng hưởng.',
    commonMistake: 'Kết luận có cộng hưởng chỉ vì hệ đang chịu ngoại lực tuần hoàn.',
    answers: ['A', 'C', 'B', 'A', 'B', 'A', 'B', 'B', 'A', 'C', 'A', 'A'],
    work: [
      'Cộng hưởng xảy ra khi tần số ngoại lực bằng hoặc rất gần tần số riêng.',
      'Ngoại lực 4 Hz trùng tần số riêng 4 Hz nên dễ gây cộng hưởng nhất.',
      'Cộng hưởng là trường hợp đặc biệt của dao động cưỡng bức có điều kiện tần số phù hợp.',
      'Đỉnh đường cong cộng hưởng nằm gần tần số riêng của hệ.',
      'Lực cản nhỏ làm năng lượng mất ít, đỉnh cộng hưởng cao và hẹp hơn.',
      'Lực cản lớn làm biên độ cực đại khi cộng hưởng nhỏ hơn.',
      'Đổi nhịp phá điều kiện kích thích tuần hoàn gần tần số riêng của cầu.',
      'Hộp đàn cộng hưởng với dao động của dây, làm âm phát ra mạnh hơn.',
      'Tránh vùng tốc độ gây tần số kích thích gần tần số riêng sẽ hạn chế cộng hưởng.',
      'Cầu rung mạnh có nguy cơ hư hại nên là cộng hưởng có hại.',
      'Bộ giảm chấn hấp thụ năng lượng, làm giảm biên độ rung của tòa nhà.',
      'Đẩy đúng nhịp cung cấp năng lượng thích hợp ở mỗi chu kì nên biên độ tăng.'
    ]
  },
  {
    start: 61,
    questionTypeId: 'phy11-qt06',
    recognition: 'Xác định biến đo, quy trình lặp và cách suy ra chu kì hoặc tần số từ dữ liệu.',
    commonMistake: 'Đo quá ít chu kì hoặc lấy trung bình mà không kiểm tra dữ liệu ngoại lai.',
    answers: ['A', 'B', 'A', 'B', 'B', 'A', 'A', 'A', 'B', 'A', 'B', 'A'],
    work: [
      'Đo nhiều chu kì giữ gần như nguyên sai số bấm giờ nhưng làm sai số tương đối nhỏ hơn.',
      'Khi chỉ khảo sát chiều dài, các yếu tố khác cần được kiểm soát, đặc biệt biên độ phải nhỏ.',
      'Cảm biến vị trí cung cấp trực tiếp dữ liệu li độ theo thời gian.',
      'Quy trình khoa học bắt đầu từ mục tiêu, chọn phép đo, thu thập rồi xử lí dữ liệu.',
      'Muốn xét riêng tác động của biên độ phải giữ các biến còn lại không đổi.',
      'Tốc độ khung hình cho khoảng thời gian giữa hai ảnh liên tiếp.',
      'Thời gian trung bình của 10 dao động là $12,2$ s nên $T=12,2/10=1,22$ s.',
      '$f=N/t=20/30=0,67$ Hz.',
      '$4,00$ s lệch xa ba giá trị quanh $2,00$ s nên cần kiểm tra lỗi đo trước.',
      'Các tỉ số $t/N$ lần lượt xấp xỉ $1,20;1,21;1,20$ s, nên $T\\approx1,20$ s.',
      'Sáu đỉnh tạo năm khoảng chu kì, vì vậy $T=2,5/5=0,50$ s.',
      'Với 20 chu kì, sai số phản xạ chiếm phần nhỏ hơn trong tổng thời gian đo.'
    ]
  }
];

const pad = (value: number) => value.toString().padStart(3, '0');
const answerLetters = ['A', 'B', 'C', 'D'] as const;

export const g11PhysicsModule1Solutions: CourseSolution[] = groups.flatMap(group =>
  group.answers.map((_answer, index) => ({
    id: `phy11-s${pad(group.start + index)}`,
    questionId: `phy11-q${pad(group.start + index)}`,
    courseId: 'grade11:physics',
    moduleId: 'phy11-m1',
    recognition: group.recognition,
    detailedSteps: [
      {
        order: 1,
        title: 'Nhận dạng',
        explanation: group.recognition
      },
      {
        order: 2,
        title: 'Xử lí và kết luận',
        explanation: group.work[index]
      }
    ],
    finalAnswer: answerLetters[(group.start + index - 1) % answerLetters.length],
    commonMistakes: [group.commonMistake],
    reviewSuggestions: ['Ôn lại hướng giải và dấu hiệu nhận biết của dạng bài này.']
  }))
);
