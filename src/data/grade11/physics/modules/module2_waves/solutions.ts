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
    start: 73,
    questionTypeId: 'phy11-qt07',
    recognition: 'Phân biệt đồ thị theo không gian $u-x$ với đồ thị theo thời gian $u-t$, rồi đọc đúng khoảng lặp.',
    commonMistake: 'Nhầm khoảng đỉnh–hõm với một bước sóng hoặc nhầm đồ thị không gian với đồ thị thời gian.',
    answers: ['A', 'C', 'C', 'B', 'B', 'B', 'B', 'C', 'C', 'B', 'C', 'A'],
    work: [
      'Độ dịch chuyển cực đại cho $A=3$ cm; khoảng hai đỉnh liên tiếp cho $\\lambda=0,8$ m.',
      'Từ đỉnh đến hõm gần nhất là $\\lambda/2=25$ cm, nên $\\lambda=50$ cm.',
      'Hai điểm cùng pha gần nhau nhất cách nhau đúng một bước sóng.',
      '$\\lambda=0,70-0,20=0,50$ m, nên $k=2\\pi/\\lambda=4\\pi$ rad/m.',
      '$\\Delta\\varphi=2\\pi\\Delta x/\\lambda=2\\pi/4=\\pi/2$.',
      'Hệ số của $x$ là $k=\\pi/3$ rad/m; $\\lambda=2\\pi/k=6$ m.',
      'Hai đỉnh liên tiếp cách nhau một chu kì: $T=0,50-0,10=0,40$ s.',
      '$T=5$ ms $=0,005$ s nên $f=1/T=200$ Hz.',
      'Từ đỉnh đến vị trí cân bằng gần nhất mất $T/4$, nên $T=0,20$ s.',
      'Biên độ là độ dịch chuyển cực đại tính từ vị trí cân bằng: $A=2,5$ cm.',
      'Hai lần qua vị trí cân bằng ngược chiều cách nhau $T/2=0,15$ s, nên $T=0,30$ s.',
      '$\\omega=20\\pi$ rad/s nên $f=10$ Hz; trong $0,50$ s có $N=ft=5$ dao động.'
    ]
  },
  {
    start: 85,
    questionTypeId: 'phy11-qt08',
    recognition: 'Dùng $v=\\lambda f=\\lambda/T$ và phân biệt sự truyền năng lượng với chuyển dời vật chất.',
    commonMistake: 'Nhầm tốc độ truyền sóng với tốc độ dao động của phần tử môi trường.',
    answers: ['A', 'B', 'A', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'A'],
    work: [
      '$v=\\lambda f=0,50\\times8=4$ m/s.',
      '$\\lambda=v/f=12/3=4$ m.',
      '$f=v/\\lambda=8$ Hz nên $T=1/f=0,125$ s.',
      '$f=N/t=30/6=5$ Hz; $\\lambda=v/f=10/5=2$ m.',
      'Tốc độ do môi trường quyết định và giữ nguyên; $\\lambda=v/f$ nên giảm một nửa.',
      '$v=s/t=5$ m/s; $\\lambda=vT=5\\times0,40=2,0$ m.',
      'Chiếc lá chỉ dao động quanh vị trí cân bằng, không đi theo gợn sóng đến bờ.',
      'Sóng mang năng lượng và trạng thái dao động qua môi trường.',
      'Sự lan truyền trạng thái dao động khác với chuyển dời toàn bộ phần tử nước.',
      'Mỗi phần tử dây dao động cục bộ quanh vị trí cân bằng khi sóng đi qua.',
      'Tốc độ truyền sóng mô tả tốc độ lan truyền trạng thái dao động trong môi trường.',
      'Tương tác đàn hồi giữa các phần tử kế cận truyền năng lượng dọc theo dây.'
    ]
  },
  {
    start: 97,
    questionTypeId: 'phy11-qt09',
    recognition: 'So sánh phương dao động của phần tử với phương truyền và kiểm tra sự tồn tại của môi trường vật chất.',
    commonMistake: 'Phân loại theo hình đường sóng vẽ trên giấy thay vì phương dao động thật của phần tử.',
    answers: ['A', 'B', 'B', 'B', 'B', 'A', 'D', 'A', 'A', 'B', 'B', 'A'],
    work: [
      'Phương dao động vuông góc phương truyền là định nghĩa sóng ngang.',
      'Âm trong không khí lan bằng các vùng nén–dãn dọc phương truyền.',
      'Phần tử dây dao động vuông góc phương truyền nên đây là sóng ngang.',
      'Trong sóng dọc, dao động và các vùng nén–dãn cùng phương truyền.',
      'Tiêu chí phân loại là quan hệ giữa hai phương, không phải biên độ hay tần số.',
      'Đường sin chỉ là ảnh dạng sóng; phải biết hướng chuyển động của phần tử.',
      'Sóng cơ cần môi trường vật chất nên không truyền trong chân không.',
      'Dây căng chịu được biến dạng ngang và truyền được sóng ngang.',
      'Các phần tử trong thép tương tác đàn hồi và truyền trạng thái dao động.',
      'Các vòng lò xo dao động và nén–dãn dọc trục nên mô hình là sóng dọc.',
      'Đặc điểm chung của sóng cơ là cần môi trường vật chất.',
      'Theo mô hình đơn giản, dao động thẳng đứng vuông góc phương truyền ngang nên là sóng ngang.'
    ]
  },
  {
    start: 109,
    questionTypeId: 'phy11-qt10',
    recognition: 'Thu tín hiệu âm bằng micro, đọc nhiều chu kì trên trục thời gian rồi dùng $f=1/T$.',
    commonMistake: 'Nhầm số đỉnh với số khoảng chu kì hoặc bỏ qua thang thời gian của thiết bị.',
    answers: ['A', 'A', 'A', 'A', 'A', 'A', 'C', 'C', 'C', 'C', 'C', 'A'],
    work: [
      'Micro đổi dao động âm thành tín hiệu điện để dao động kí hoặc phần mềm hiển thị.',
      'Chu kì đọc trực tiếp từ khoảng lặp của tín hiệu, rồi $f=1/T$.',
      'Đo nhiều chu kì làm sai số đọc một ô chiếm tỉ lệ nhỏ hơn.',
      'Tín hiệu cắt đỉnh do biên độ vượt thang dọc, nên cần giảm độ nhạy hoặc đầu vào.',
      'Nốt hoặc tần số cài đặt là đại lượng chủ động thay đổi trong phép kiểm tra.',
      'Quy trình phải tạo âm, thu và hiện tín hiệu trước khi đo chu kì.',
      '$T=10\\text{ ms}/5=2$ ms nên $f=1/0,002=500$ Hz.',
      '$T=4\\times0,5=2$ ms, do đó $f=500$ Hz.',
      'Mười một đỉnh tạo mười khoảng chu kì: $T=20/10=2$ ms, $f=500$ Hz.',
      'Giá trị trung tâm $T=2,00$ ms cho $f=1/T=500$ Hz.',
      '$f_{tb}=(498+502)/2=500$ Hz.',
      'Giảm nhiễu và quan sát nhiều chu kì ổn định giúp xác định khoảng lặp tin cậy.'
    ]
  },
  {
    start: 121,
    questionTypeId: 'phy11-qt11',
    recognition: 'Dùng $c=\\lambda f$, thứ tự phổ và đặc trưng bức xạ để chọn ứng dụng phù hợp.',
    commonMistake: 'Sắp xếp tần số cùng chiều với bước sóng hoặc cho rằng sóng điện từ cần môi trường.',
    answers: ['B', 'A', 'C', 'B', 'A', 'B', 'A', 'B', 'A', 'A', 'A', 'A'],
    work: [
      'Trong chân không $c$ không đổi, nên $f=c/\\lambda$ tăng khi $\\lambda$ giảm.',
      'Tần số tăng theo thứ tự vô tuyến, hồng ngoại, nhìn thấy, tử ngoại.',
      'Tử ngoại có tần số cao hơn nên bước sóng ngắn hơn hồng ngoại.',
      '$f=c/\\lambda=3\\times10^8/3=10^8$ Hz.',
      'Ánh sáng nhìn thấy nằm giữa hồng ngoại và tử ngoại.',
      'Mọi sóng điện từ truyền cùng tốc độ $c$ trong chân không.',
      'Điều khiển từ xa thông dụng phát tín hiệu hồng ngoại.',
      'Tia X xuyên mô mềm tốt hơn xương và tạo ảnh tương phản.',
      'Tia tử ngoại được dùng khử khuẩn khi kiểm soát liều và che chắn.',
      'Ba nguyên tắc cơ bản là giảm thời gian, tăng khoảng cách và che chắn.',
      'Phát thanh và nhiều hệ liên lạc không dây dùng miền sóng vô tuyến.',
      'Vật ở nhiệt độ thường phát bức xạ nhiệt mạnh trong miền hồng ngoại.'
    ]
  },
  {
    start: 133,
    questionTypeId: 'phy11-qt12',
    recognition: 'Với hai nguồn cùng pha, cực đại khi $|d_2-d_1|=k\\lambda$ và cực tiểu khi $|d_2-d_1|=(k+1/2)\\lambda$.',
    commonMistake: 'Chỉ kiểm tra cùng tần số mà bỏ qua điều kiện độ lệch pha không đổi.',
    answers: ['A', 'B', 'A', 'B', 'A', 'B', 'C', 'B', 'A', 'B', 'B', 'A'],
    work: [
      '$|d_2-d_1|=2\\lambda$ là bội nguyên của bước sóng nên M là cực đại.',
      '$1,5\\lambda=(1+1/2)\\lambda$ thỏa điều kiện cực tiểu.',
      'Hai nguồn kết hợp phải cùng tần số và có độ lệch pha không đổi theo thời gian.',
      '$5$ cm $=2,5\\lambda$ nên M là cực tiểu.',
      'Trên trung trực $d_1=d_2$, hiệu đường đi bằng 0 nên hai sóng cùng pha tăng cường.',
      'Độ lệch pha ngẫu nhiên làm vị trí tăng cường–triệt tiêu thay đổi, không có hệ ổn định.',
      'Trên đoạn nối nguồn, hai cực đại liên tiếp cách $\\lambda/2$; $\\lambda=2\\times1,5=3$ cm.',
      'Cực đại đến cực tiểu gần nhất trên đoạn nối nguồn cách $\\lambda/4=1$ cm.',
      'Điều kiện cực đại và cực tiểu xen kẽ, nên giữa hai cực đại có một cực tiểu.',
      'Sáu khoảng cực đại dài 9 cm cho khoảng cách $1,5$ cm $=\\lambda/2$, nên $\\lambda=3$ cm.',
      'Trong cùng môi trường $v$ không đổi; $f$ gấp đôi làm $\\lambda$ và khoảng cực đại giảm một nửa.',
      'Đo tổng nhiều khoảng rồi chia giúp giảm tỉ lệ ảnh hưởng của sai số đọc hai đầu.'
    ]
  },
  {
    start: 145,
    questionTypeId: 'phy11-qt13',
    recognition: 'Xác định điều kiện biên rồi dùng $L=n\\lambda/2$ hoặc $L=(2n+1)\\lambda/4$.',
    commonMistake: 'Dùng công thức hai đầu cố định cho trường hợp một đầu tự do hoặc đếm sai nút–bụng.',
    answers: ['B', 'A', 'B', 'B', 'B', 'B', 'A', 'B', 'C', 'B', 'B', 'A'],
    work: [
      'Ba bó sóng nghĩa là $L=3\\lambda/2$, nên $\\lambda=2L/3=0,8$ m.',
      'Hai đầu cố định đều là nút, điều kiện là $L=n\\lambda/2$.',
      'Với 4 bó có 5 nút kể cả hai đầu dây.',
      'Hai nút liên tiếp cách nhau nửa bước sóng.',
      'Mode cơ bản hai đầu cố định có $\\lambda=2L=1,5$ m; $f=v/\\lambda=20$ Hz.',
      'Bụng là vị trí có biên độ dao động cực đại.',
      'Mode cơ bản một đầu nút, một đầu bụng chứa một phần tư bước sóng.',
      'Đầu tự do có độ dịch chuyển cực đại nên là bụng.',
      '$L=\\lambda/4$ nên $\\lambda=4L=2,0$ m.',
      'Các mode cho phép chứa số lẻ phần tư bước sóng: $L=(2n+1)\\lambda/4$.',
      '$f_1=v/(4L)=60/(4\\times0,75)=20$ Hz.',
      'Sóng tới và sóng phản xạ cùng tần số truyền ngược chiều chồng chất tạo sóng dừng.'
    ]
  },
  {
    start: 157,
    questionTypeId: 'phy11-qt14',
    recognition: 'Từ cộng hưởng dùng $\\Delta L=\\lambda/2$; từ độ trễ dùng $v=s/\\Delta t$.',
    commonMistake: 'Dùng một lần đo duy nhất hoặc nhầm mili giây với giây.',
    answers: ['B', 'B', 'C', 'A', 'B', 'A', 'C', 'C', 'A', 'B', 'A', 'A'],
    work: [
      'Hai trạng thái cộng hưởng liên tiếp hơn kém nhau nửa bước sóng.',
      '$\\Delta L=35-18=17$ cm $=\\lambda/2$, nên $\\lambda=34$ cm.',
      '$v=\\lambda f=0,68\\times500=340$ m/s.',
      'Lấy hiệu hai vị trí làm triệt tiêu gần đúng phần hiệu chỉnh đầu ống chung.',
      'Hiệu trung bình là 17,0 cm $=\\lambda/2$, nên $\\lambda=34,0$ cm.',
      'Tai khó xác định đúng điểm âm lượng cực đại, tạo bất định vị trí cộng hưởng.',
      '$v=s/\\Delta t=1,70/0,005=340$ m/s.',
      '$10$ ms $=0,010$ s; $v=3,4/0,010=340$ m/s.',
      'Hai micro và bộ ghi số đo được độ trễ mili giây đủ chính xác.',
      '$v_{tb}=(338+342+341+339)/4=340$ m/s.',
      'Khoảng cách lớn hơn làm độ trễ lớn hơn, nên cùng độ phân giải thời gian cho sai số tương đối nhỏ hơn.',
      'Sai đơn vị, sai độ trễ và nhiệt độ là các nguyên nhân trực tiếp cần kiểm tra trước.'
    ]
  }
];

const pad = (value: number) => value.toString().padStart(3, '0');
const answerLetters = ['A', 'B', 'C', 'D'] as const;

export const g11PhysicsModule2Solutions: CourseSolution[] = groups.flatMap(group =>
  group.answers.map((_answer, index) => ({
    id: `phy11-s${pad(group.start + index)}`,
    questionId: `phy11-q${pad(group.start + index)}`,
    courseId: 'grade11:physics',
    moduleId: 'phy11-m2',
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
    reviewSuggestions: [`Ôn lại hướng giải và dấu hiệu nhận biết của ${group.questionTypeId}.`]
  }))
);
