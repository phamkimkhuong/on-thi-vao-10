import type { CourseQuestion, CourseSolution } from '@/data/schema';
import type {
  AssessmentBlueprint,
  AssessmentCompetency,
  MockExam
} from '@/types';

type Choice = 'A' | 'B' | 'C' | 'D';

interface AssessmentSeed {
  questionType: number;
  content: string;
  answer: string;
  explanation: string;
  options?: [string, string, string, string];
  acceptedAnswers?: string[];
}

interface ModuleAssessmentSpec {
  module: 1 | 2 | 3 | 4;
  title: string;
  semester: 1 | 2;
  seeds: AssessmentSeed[];
}

const createdAt = '2026-07-28T00:00:00.000Z';
const letters: Choice[] = ['A', 'B', 'C', 'D'];

const questionTypeMetadata: Record<
  number,
  { module: 1 | 2 | 3 | 4; lesson: number; outcome: number; competency?: AssessmentCompetency }
> = {
  1: { module: 1, lesson: 2, outcome: 1 },
  2: { module: 1, lesson: 3, outcome: 2 },
  3: { module: 1, lesson: 5, outcome: 3 },
  4: { module: 1, lesson: 6, outcome: 4 },
  5: { module: 1, lesson: 6, outcome: 5, competency: 'physical_application' },
  6: { module: 1, lesson: 1, outcome: 6, competency: 'physical_inquiry' },
  7: { module: 2, lesson: 8, outcome: 1, competency: 'physical_inquiry' },
  8: { module: 2, lesson: 8, outcome: 2, competency: 'physical_application' },
  9: { module: 2, lesson: 9, outcome: 3 },
  10: { module: 2, lesson: 10, outcome: 4, competency: 'physical_inquiry' },
  11: { module: 2, lesson: 11, outcome: 5, competency: 'physical_application' },
  12: { module: 2, lesson: 12, outcome: 6, competency: 'physical_application' },
  13: { module: 2, lesson: 13, outcome: 7, competency: 'physical_application' },
  14: { module: 2, lesson: 15, outcome: 8, competency: 'physical_inquiry' },
  15: { module: 3, lesson: 16, outcome: 1, competency: 'physical_application' },
  16: { module: 3, lesson: 17, outcome: 2 },
  17: { module: 3, lesson: 17, outcome: 3, competency: 'physical_application' },
  18: { module: 3, lesson: 17, outcome: 4, competency: 'physical_inquiry' },
  19: { module: 3, lesson: 18, outcome: 5, competency: 'physical_application' },
  20: { module: 3, lesson: 18, outcome: 6, competency: 'physical_application' },
  21: { module: 3, lesson: 19, outcome: 7, competency: 'physical_application' },
  22: { module: 3, lesson: 20, outcome: 8, competency: 'physical_application' },
  23: { module: 3, lesson: 21, outcome: 9, competency: 'physical_application' },
  24: { module: 4, lesson: 22, outcome: 1, competency: 'physical_application' },
  25: { module: 4, lesson: 22, outcome: 2, competency: 'physical_application' },
  26: { module: 4, lesson: 23, outcome: 3, competency: 'physical_application' },
  27: { module: 4, lesson: 23, outcome: 4, competency: 'physical_inquiry' },
  28: { module: 4, lesson: 23, outcome: 5, competency: 'physical_application' },
  29: { module: 4, lesson: 24, outcome: 6, competency: 'physical_application' },
  30: { module: 4, lesson: 25, outcome: 7, competency: 'physical_application' },
  31: { module: 4, lesson: 26, outcome: 8, competency: 'physical_inquiry' }
};

const moduleSpecs: ModuleAssessmentSpec[] = [
  {
    module: 1,
    title: 'Chương I – Dao động',
    semester: 1,
    seeds: [
      {
        questionType: 1,
        content: 'Một vật dao động theo $x=8\\cos(4\\pi t-\\pi/6)$ (cm). Tần số dao động bằng',
        options: ['$1$ Hz', '$2$ Hz', '$4$ Hz', '$8$ Hz'],
        answer: 'B',
        explanation: '$f=\\omega/(2\\pi)=4\\pi/(2\\pi)=2$ Hz.'
      },
      {
        questionType: 2,
        content: 'Vật dao động điều hòa có $A=6$ cm và $\\omega=5$ rad/s. Tốc độ cực đại bằng',
        options: ['$0,12$ m/s', '$0,30$ m/s', '$1,20$ m/s', '$3,00$ m/s'],
        answer: 'B',
        explanation: '$v_{\\max}=\\omega A=5\\cdot0,06=0,30$ m/s.'
      },
      {
        questionType: 4,
        content: 'Trong dao động tắt dần, biên độ giảm theo thời gian chủ yếu vì',
        options: ['tần số riêng tăng dần', 'khối lượng vật giảm dần', 'cơ năng bị tiêu hao bởi lực cản', 'ngoại lực tuần hoàn sinh công dương'],
        answer: 'C',
        explanation: 'Lực cản thực hiện công âm, làm cơ năng và biên độ của hệ giảm dần.'
      },
      {
        questionType: 6,
        content: 'Để giảm ảnh hưởng của thời gian phản xạ khi đo chu kì con lắc, phương án phù hợp nhất là',
        options: ['đo một dao động duy nhất', 'đo thời gian nhiều dao động rồi chia cho số dao động', 'chỉ đo khi biên độ lớn', 'dùng một kết quả và bỏ qua sai số'],
        answer: 'B',
        explanation: 'Đo nhiều chu kì làm sai số phản xạ chiếm tỉ lệ nhỏ hơn trong tổng thời gian.'
      },
      {
        questionType: 3,
        content: 'Vật có $m=0,25$ kg, $\\omega=8$ rad/s và $A=5$ cm. Cơ năng dao động bằng',
        options: ['$0,002$ J', '$0,010$ J', '$0,020$ J', '$0,080$ J'],
        answer: 'C',
        explanation: '$W=\\tfrac12m\\omega^2A^2=\\tfrac12\\cdot0,25\\cdot64\\cdot0,05^2=0,020$ J.'
      },
      {
        questionType: 5,
        content: 'Một hệ có tần số riêng $3,2$ Hz chịu ngoại lực tuần hoàn. Cộng hưởng mạnh nhất khi tần số ngoại lực gần',
        options: ['$3,2$ Hz', '$1,6$ Hz', '$6,4$ Hz', '$10,2$ Hz'],
        answer: 'A',
        explanation: 'Điều kiện cộng hưởng là tần số cưỡng bức xấp xỉ tần số riêng của hệ.'
      },
      {
        questionType: 1,
        content: 'Hai lần liên tiếp vật qua cùng một li độ theo cùng chiều cách nhau $0,40$ s. Tần số dao động là',
        options: ['$0,40$ Hz', '$1,25$ Hz', '$2,50$ Hz', '$5,00$ Hz'],
        answer: 'C',
        explanation: 'Hai trạng thái lặp đúng li độ và chiều chuyển động cách nhau một chu kì: $T=0,40$ s, nên $f=2,50$ Hz.'
      },
      {
        questionType: 2,
        content: 'Vật dao động với $A=10$ cm, $\\omega=4$ rad/s. Tại $x=6$ cm, độ lớn vận tốc là',
        options: ['$16$ cm/s', '$20$ cm/s', '$24$ cm/s', '$32$ cm/s'],
        answer: 'D',
        explanation: '$|v|=\\omega\\sqrt{A^2-x^2}=4\\sqrt{10^2-6^2}=32$ cm/s.'
      },
      {
        questionType: 3,
        content: 'Cơ năng của hệ dao động là $0,72$ J, tại một thời điểm thế năng bằng $0,18$ J. Nhập động năng tại thời điểm đó theo đơn vị J.',
        answer: '0.54',
        acceptedAnswers: ['0.54', '0,54'],
        explanation: '$W_đ=W-W_t=0,72-0,18=0,54$ J.'
      },
      {
        questionType: 4,
        content: 'Biên độ của một dao động tắt dần giảm từ $6$ cm xuống $3$ cm. Nhập phần trăm cơ năng còn lại so với ban đầu.',
        answer: '25',
        acceptedAnswers: ['25', '25.0', '25,0'],
        explanation: 'Với cùng hệ dao động, $W\\propto A^2$ nên $W_2/W_1=(3/6)^2=0,25$, tức $25\\%$.'
      },
      {
        questionType: 5,
        content: 'Một bộ phận máy có tần số riêng $2,4$ Hz. Nhập tốc độ quay của nguồn kích thích, theo vòng/phút, có nguy cơ gây cộng hưởng lớn nhất.',
        answer: '144',
        acceptedAnswers: ['144', '144.0', '144,0'],
        explanation: 'Cộng hưởng khi $f=2,4$ vòng/s; đổi ra vòng/phút: $n=2,4\\cdot60=144$.'
      },
      {
        questionType: 6,
        content: 'Ba lần đo thời gian của $15$ dao động cho $18,30$ s; $18,00$ s; $18,15$ s. Nhập chu kì trung bình theo giây, làm tròn đến hai chữ số thập phân.',
        answer: '1.21',
        acceptedAnswers: ['1.21', '1,21'],
        explanation: '$\\bar t=(18,30+18,00+18,15)/3=18,15$ s; $\\bar T=18,15/15=1,21$ s.'
      }
    ]
  },
  {
    module: 2,
    title: 'Chương II – Sóng',
    semester: 1,
    seeds: [
      {
        questionType: 7,
        content: 'Trên ảnh chụp sóng tại một thời điểm, khoảng cách giữa hai đỉnh liên tiếp là $0,80$ m. Bước sóng bằng',
        options: ['$0,40$ m', '$0,80$ m', '$1,60$ m', '$2,40$ m'],
        answer: 'B',
        explanation: 'Khoảng cách giữa hai điểm gần nhau nhất dao động cùng pha là một bước sóng: $\\lambda=0,80$ m.'
      },
      {
        questionType: 9,
        content: 'Sóng âm truyền trong không khí là',
        options: ['sóng ngang điện từ', 'sóng ngang cơ học', 'sóng dọc cơ học', 'sóng dọc điện từ'],
        answer: 'C',
        explanation: 'Trong không khí, các phần tử môi trường dao động theo phương truyền sóng nên âm là sóng dọc cơ học.'
      },
      {
        questionType: 11,
        content: 'Miền sóng điện từ có bước sóng dài hơn ánh sáng nhìn thấy nhưng ngắn hơn vi ba là',
        options: ['tia gamma', 'tia X', 'tia tử ngoại', 'tia hồng ngoại'],
        answer: 'D',
        explanation: 'Theo chiều bước sóng tăng: tử ngoại – ánh sáng nhìn thấy – hồng ngoại – vi ba.'
      },
      {
        questionType: 10,
        content: 'Trên màn hình đo âm, $5$ chu kì chiếm khoảng thời gian $10$ ms. Tần số âm bằng',
        options: ['$50$ Hz', '$200$ Hz', '$500$ Hz', '$2000$ Hz'],
        answer: 'C',
        explanation: '$T=10\\text{ ms}/5=2\\text{ ms}$ nên $f=1/T=500$ Hz.'
      },
      {
        questionType: 8,
        content: 'Sóng có bước sóng $0,75$ m và tần số $40$ Hz. Tốc độ truyền sóng bằng',
        options: ['$18,75$ m/s', '$30$ m/s', '$40,75$ m/s', '$53,3$ m/s'],
        answer: 'B',
        explanation: '$v=\\lambda f=0,75\\cdot40=30$ m/s.'
      },
      {
        questionType: 12,
        content: 'Hai nguồn kết hợp cùng pha. Tại điểm có hiệu đường đi bằng $3\\lambda$, hai sóng gặp nhau',
        options: ['tăng cường cực đại', 'triệt tiêu hoàn toàn', 'lệch pha $\\pi/2$', 'không thể giao thoa'],
        answer: 'A',
        explanation: 'Hai nguồn cùng pha cho cực đại khi hiệu đường đi bằng số nguyên lần bước sóng.'
      },
      {
        questionType: 13,
        content: 'Dây dài $1,20$ m, hai đầu cố định, đang có sóng dừng với $3$ bụng. Bước sóng bằng',
        options: ['$0,40$ m', '$0,60$ m', '$0,80$ m', '$1,20$ m'],
        answer: 'C',
        explanation: '$L=3\\lambda/2$ nên $\\lambda=2L/3=0,80$ m.'
      },
      {
        questionType: 14,
        content: 'Trong phép đo tốc độ âm, hai micro cách nhau $6,00$ m ghi được độ trễ $17,5$ ms. Giá trị gần đúng của tốc độ âm là',
        options: ['$105$ m/s', '$210$ m/s', '$343$ m/s', '$600$ m/s'],
        answer: 'C',
        explanation: '$v=d/\\Delta t=6,00/0,0175\\approx343$ m/s.'
      },
      {
        questionType: 11,
        content: 'Một sóng điện từ trong chân không có bước sóng $0,60$ m. Lấy $c=3,0\\times10^8$ m/s. Nhập tần số theo đơn vị Hz.',
        answer: '500000000',
        acceptedAnswers: ['500000000', '5e8', '5E8'],
        explanation: '$f=c/\\lambda=3,0\\times10^8/0,60=5,0\\times10^8$ Hz.'
      },
      {
        questionType: 12,
        content: 'Hai nguồn cùng pha tạo sóng có $\\lambda=0,60$ cm. Một điểm có hiệu đường đi $1,80$ cm. Nhập bậc cực đại giao thoa tại điểm đó.',
        answer: '3',
        acceptedAnswers: ['3', '3.0', '3,0'],
        explanation: '$k=\\Delta d/\\lambda=1,80/0,60=3$.'
      },
      {
        questionType: 13,
        content: 'Dây dài $0,90$ m, hai đầu cố định, có tần số cơ bản $100$ Hz. Nhập tốc độ truyền sóng trên dây theo m/s.',
        answer: '180',
        acceptedAnswers: ['180', '180.0', '180,0'],
        explanation: 'Ở họa âm cơ bản $\\lambda_1=2L=1,80$ m, nên $v=f_1\\lambda_1=180$ m/s.'
      },
      {
        questionType: 8,
        content: 'Hai điểm trên phương truyền sóng cách nhau $0,35$ m; bước sóng là $1,40$ m. Nhập độ lệch pha giữa hai điểm theo radian, làm tròn đến hai chữ số thập phân.',
        answer: '1.57',
        acceptedAnswers: ['1.57', '1,57'],
        explanation: '$\\Delta\\varphi=2\\pi\\Delta x/\\lambda=2\\pi\\cdot0,35/1,40=\\pi/2\\approx1,57$ rad.'
      }
    ]
  },
  {
    module: 3,
    title: 'Chương III – Điện trường',
    semester: 2,
    seeds: [
      {
        questionType: 15,
        content: 'Hai điện tích $2\\,\\mu$C và $-3\\,\\mu$C cách nhau $0,30$ m trong chân không. Độ lớn lực Coulomb là',
        options: ['$0,06$ N', '$0,20$ N', '$0,60$ N', '$1,80$ N'],
        answer: 'C',
        explanation: '$F=k|q_1q_2|/r^2=9\\times10^9\\cdot6\\times10^{-12}/0,30^2=0,60$ N; lực là lực hút.'
      },
      {
        questionType: 16,
        content: 'Chiều của vector cường độ điện trường tại một điểm được quy ước là chiều',
        options: ['lực điện tác dụng lên điện tích thử dương', 'lực điện tác dụng lên electron', 'chuyển động của mọi điện tích', 'từ điện thế thấp đến điện thế cao trong mọi trường hợp'],
        answer: 'A',
        explanation: 'Theo định nghĩa, $\\vec E$ cùng chiều lực điện tác dụng lên điện tích thử dương.'
      },
      {
        questionType: 18,
        content: 'Tính chất nào đúng đối với các đường sức điện?',
        options: ['Có thể cắt nhau tại nơi điện trường mạnh', 'Luôn là các đường tròn kín', 'Không bao giờ cắt nhau', 'Luôn song song và cách đều'],
        answer: 'C',
        explanation: 'Tại mỗi điểm, vector điện trường có một hướng xác định nên hai đường sức không thể cắt nhau.'
      },
      {
        questionType: 23,
        content: 'Tụ điện có điện dung $4\\,\\mu$F được mắc vào hiệu điện thế $12$ V. Điện tích của tụ là',
        options: ['$3\\,\\mu$C', '$16\\,\\mu$C', '$36\\,\\mu$C', '$48\\,\\mu$C'],
        answer: 'D',
        explanation: '$Q=CU=4\\cdot12=48\\,\\mu$C.'
      },
      {
        questionType: 17,
        content: 'Điện tích điểm $5$ nC gây ra điện trường tại điểm cách nó $0,30$ m có độ lớn',
        options: ['$50$ N/C', '$150$ N/C', '$500$ N/C', '$1500$ N/C'],
        answer: 'C',
        explanation: '$E=k|q|/r^2=9\\times10^9\\cdot5\\times10^{-9}/0,30^2=500$ N/C.'
      },
      {
        questionType: 19,
        content: 'Giữa hai bản phẳng song song cách nhau $1,5$ cm có hiệu điện thế $900$ V. Cường độ điện trường đều bằng',
        options: ['$600$ V/m', '$6000$ V/m', '$60000$ V/m', '$135000$ V/m'],
        answer: 'C',
        explanation: '$E=U/d=900/0,015=60000$ V/m.'
      },
      {
        questionType: 21,
        content: 'Khi điện tích dịch chuyển, thế năng điện giảm $4$ mJ. Công của lực điện bằng',
        options: ['$-4$ mJ', '$0$ mJ', '$2$ mJ', '$4$ mJ'],
        answer: 'D',
        explanation: '$A=-\\Delta W_t$; thế năng giảm $4$ mJ nên lực điện thực hiện công $4$ mJ.'
      },
      {
        questionType: 22,
        content: 'Điện tích $2\\,\\mu$C dịch chuyển từ A đến B với $U_{AB}=120$ V. Công của lực điện là',
        options: ['$60\\,\\mu$J', '$120\\,\\mu$J', '$240\\,\\mu$J', '$480\\,\\mu$J'],
        answer: 'C',
        explanation: '$A_{AB}=qU_{AB}=2\\times10^{-6}\\cdot120=240\\,\\mu$J.'
      },
      {
        questionType: 20,
        content: 'Một electron ban đầu đứng yên được tăng tốc qua hiệu điện thế $200$ V. Nhập động năng thu được theo đơn vị eV.',
        answer: '200',
        acceptedAnswers: ['200', '200.0', '200,0'],
        explanation: 'Điện tích có độ lớn một điện tích nguyên tố nhận năng lượng $eU$, tương ứng $200$ eV.'
      },
      {
        questionType: 23,
        content: 'Tụ điện $6\\,\\mu$F được nạp đến $50$ V. Nhập độ lớn điện tích trên mỗi bản theo đơn vị $\\mu$C.',
        answer: '300',
        acceptedAnswers: ['300', '300.0', '300,0'],
        explanation: '$Q=CU=6\\cdot50=300\\,\\mu$C.'
      },
      {
        questionType: 15,
        content: 'Lực giữa hai điện tích trong chân không là $1,6$ N. Giữ nguyên điện tích, tăng khoảng cách gấp đôi và đặt hệ trong môi trường có hằng số điện môi $2$. Nhập lực mới theo N.',
        answer: '0.2',
        acceptedAnswers: ['0.2', '0,2', '0.20', '0,20'],
        explanation: '$F\\propto1/(\\varepsilon r^2)$ nên $F_2=1,6/(2\\cdot2^2)=0,20$ N.'
      },
      {
        questionType: 17,
        content: 'Hai điện tích dương $q$ và $4q$ cách nhau $30$ cm. Điểm có cường độ điện trường tổng hợp bằng không nằm giữa hai điện tích. Nhập khoảng cách từ điểm đó đến điện tích $q$ theo cm.',
        answer: '10',
        acceptedAnswers: ['10', '10.0', '10,0'],
        explanation: '$kq/x^2=k4q/(30-x)^2$ nên $(30-x)=2x$, suy ra $x=10$ cm.'
      }
    ]
  },
  {
    module: 4,
    title: 'Chương IV – Dòng điện và mạch điện',
    semester: 2,
    seeds: [
      {
        questionType: 25,
        content: 'Dòng điện không đổi $0,40$ A chạy qua dây trong $30$ s. Điện lượng chuyển qua tiết diện dây là',
        options: ['$0,013$ C', '$12$ C', '$30,4$ C', '$75$ C'],
        answer: 'B',
        explanation: '$q=It=0,40\\cdot30=12$ C.'
      },
      {
        questionType: 28,
        content: 'Đặt hiệu điện thế $12$ V vào điện trở $6\\,\\Omega$. Cường độ dòng điện bằng',
        options: ['$0,5$ A', '$2$ A', '$6$ A', '$72$ A'],
        answer: 'B',
        explanation: '$I=U/R=12/6=2$ A.'
      },
      {
        questionType: 26,
        content: 'Một dây dẫn đồng chất được kéo dài gấp đôi nhưng tiết diện vẫn giữ nguyên. Điện trở của dây',
        options: ['giảm hai lần', 'không đổi', 'tăng hai lần', 'tăng bốn lần'],
        answer: 'C',
        explanation: '$R=\\rho l/S$; khi $l$ tăng gấp đôi còn $\\rho,S$ không đổi thì $R$ tăng gấp đôi.'
      },
      {
        questionType: 30,
        content: 'Thiết bị dùng ở $220$ V và có dòng điện $0,50$ A. Công suất điện của thiết bị là',
        options: ['$44$ W', '$110$ W', '$220$ W', '$440$ W'],
        answer: 'B',
        explanation: '$P=UI=220\\cdot0,50=110$ W.'
      },
      {
        questionType: 27,
        content: 'Một vật dẫn có các cặp số liệu $(U;I)$ là $(2\\text{ V};0,10\\text{ A})$ và $(4\\text{ V};0,20\\text{ A})$. Điện trở của vật dẫn là',
        options: ['$5\\,\\Omega$', '$10\\,\\Omega$', '$20\\,\\Omega$', '$40\\,\\Omega$'],
        answer: 'C',
        explanation: 'Tỉ số $U/I$ không đổi và bằng $2/0,10=20\\,\\Omega$.'
      },
      {
        questionType: 29,
        content: 'Nguồn có suất điện động $12$ V, điện trở trong $1\\,\\Omega$ nối với tải $5\\,\\Omega$. Hiệu điện thế hai cực nguồn khi đó là',
        options: ['$2$ V', '$5$ V', '$10$ V', '$12$ V'],
        answer: 'C',
        explanation: '$I=\\mathcal E/(R+r)=12/6=2$ A; $U=IR=10$ V.'
      },
      {
        questionType: 24,
        content: 'Dây có mật độ electron tự do $8,5\\times10^{28}$ m$^{-3}$, tiết diện $1,0$ mm$^2$, tốc độ trôi $5,0\\times10^{-5}$ m/s. Lấy $e=1,6\\times10^{-19}$ C. Cường độ dòng điện gần nhất là',
        options: ['$0,068$ A', '$0,68$ A', '$6,8$ A', '$68$ A'],
        answer: 'B',
        explanation: '$I=neSv=8,5\\times10^{28}\\cdot1,6\\times10^{-19}\\cdot10^{-6}\\cdot5,0\\times10^{-5}=0,68$ A.'
      },
      {
        questionType: 31,
        content: 'Đồ thị thực nghiệm của một nguồn có phương trình $U=1,6-0,4I$ (V). Suất điện động và điện trở trong lần lượt là',
        options: ['$0,4$ V và $1,6\\,\\Omega$', '$1,2$ V và $0,4\\,\\Omega$', '$1,6$ V và $0,4\\,\\Omega$', '$1,6$ V và $2,5\\,\\Omega$'],
        answer: 'C',
        explanation: 'So sánh với $U=\\mathcal E-rI$ suy ra $\\mathcal E=1,6$ V và $r=0,4\\,\\Omega$.'
      },
      {
        questionType: 26,
        content: 'Dây kim loại có $\\rho=1,7\\times10^{-8}\\,\\Omega$m, dài $10$ m và tiết diện $1,0$ mm$^2$. Nhập điện trở của dây theo $\\Omega$.',
        answer: '0.17',
        acceptedAnswers: ['0.17', '0,17'],
        explanation: '$R=\\rho l/S=1,7\\times10^{-8}\\cdot10/10^{-6}=0,17\\,\\Omega$.'
      },
      {
        questionType: 30,
        content: 'Một thiết bị công suất $1,2$ kW hoạt động trong $45$ phút. Nhập điện năng tiêu thụ theo kWh.',
        answer: '0.9',
        acceptedAnswers: ['0.9', '0,9', '0.90', '0,90'],
        explanation: '$A=Pt=1,2\\cdot(45/60)=0,90$ kWh.'
      },
      {
        questionType: 29,
        content: 'Nguồn có suất điện động $9$ V và điện trở trong $1\\,\\Omega$. Nhập công suất cực đại mà nguồn truyền cho biến trở tải theo W.',
        answer: '20.25',
        acceptedAnswers: ['20.25', '20,25'],
        explanation: 'Công suất tải cực đại khi $R=r$; $P_{\\max}=\\mathcal E^2/(4r)=81/4=20,25$ W.'
      },
      {
        questionType: 31,
        content: 'Khi đo một nguồn, thu được $(I_1;U_1)=(0,20\\text{ A};1,42\\text{ V})$ và $(I_2;U_2)=(0,80\\text{ A};1,18\\text{ V})$. Nhập điện trở trong của nguồn theo $\\Omega$.',
        answer: '0.4',
        acceptedAnswers: ['0.4', '0,4', '0.40', '0,40'],
        explanation: 'Từ $U=\\mathcal E-rI$, $r=(U_1-U_2)/(I_2-I_1)=0,24/0,60=0,40\\,\\Omega$.'
      }
    ]
  }
];

const outcomeId = (module: number, outcome: number) =>
  `out-phy11-m${module}-${String(outcome).padStart(2, '0')}`;
const questionId = (module: number, index: number) =>
  `phy11-assess-m${module}-q${String(index + 1).padStart(2, '0')}`;
const assessmentAnswer = (seed: AssessmentSeed, index: number) =>
  seed.options ? letters[index % letters.length] : seed.answer;
const assessmentOptions = (seed: AssessmentSeed, index: number) => {
  if (!seed.options) return undefined;
  const options = [...seed.options] as [string, string, string, string];
  const originalIndex = letters.indexOf(seed.answer as Choice);
  const balancedIndex = index % letters.length;
  [options[originalIndex], options[balancedIndex]] = [
    options[balancedIndex],
    options[originalIndex]
  ];
  return options;
};
const assessmentDifficulty = (index: number) =>
  index < 4 ? 'easy' as const : index < 10 ? 'medium' as const : 'hard' as const;
const assessmentCompetency = (seed: AssessmentSeed, index: number) =>
  questionTypeMetadata[seed.questionType].competency ??
  (assessmentDifficulty(index) === 'easy'
    ? 'physical_cognition' as const
    : 'physical_application' as const);
const competencyWeights = (
  spec: ModuleAssessmentSpec
): AssessmentBlueprint['competencyWeights'] => {
  const points: Partial<Record<AssessmentCompetency, number>> = {};
  for (const [index, seed] of spec.seeds.entries()) {
    const competency = assessmentCompetency(seed, index);
    points[competency] = (points[competency] ?? 0) + (seed.options ? 0.5 : 1.5);
  }
  return Object.fromEntries(
    Object.entries(points).map(([competency, value]) => [competency, value / 10])
  );
};

const checkpointQuestions: CourseQuestion[] = moduleSpecs.flatMap(spec =>
  spec.seeds.map((seed, index) => {
    const metadata = questionTypeMetadata[seed.questionType];
    const isChoice = Boolean(seed.options);
    const difficulty = assessmentDifficulty(index);
    const answer = assessmentAnswer(seed, index);
    return {
      id: questionId(spec.module, index),
      subjectId: 'physics',
      courseId: 'grade11:physics',
      moduleId: `phy11-m${spec.module}`,
      lessonId: `phy11-kntt-l${metadata.lesson}`,
      topicId: `phy11-t0${spec.module}`,
      questionTypeId: `phy11-qt${String(seed.questionType).padStart(2, '0')}`,
      content: seed.content,
      options: assessmentOptions(seed, index),
      correctAnswer: answer,
      acceptedAnswers: isChoice
        ? [answer, answer.toLowerCase()]
        : seed.acceptedAnswers ?? [seed.answer, seed.answer.replace('.', ',')],
      responseType: isChoice ? 'single_choice' : 'short_answer',
      validatorType: isChoice ? 'choice' : 'number',
      points: isChoice ? 0.5 : 1.5,
      outcomeIds: [outcomeId(spec.module, metadata.outcome)],
      competency: assessmentCompetency(seed, index),
      cognitiveLevel:
        difficulty === 'easy'
          ? 'recognition'
          : difficulty === 'medium'
            ? 'understanding'
            : 'application',
      estimatedSeconds: isChoice ? (difficulty === 'easy' ? 60 : 90) : difficulty === 'hard' ? 240 : 150,
      difficulty,
      sourceType: 'mock_exam',
      variantGroupId: `phy11-assess-m${spec.module}-qt${String(seed.questionType).padStart(2, '0')}`
    };
  })
);

const checkpointSolutions: CourseSolution[] = moduleSpecs.flatMap(spec =>
  spec.seeds.map((seed, index) => {
    const metadata = questionTypeMetadata[seed.questionType];
    const id = questionId(spec.module, index);
    const answer = assessmentAnswer(seed, index);
    return {
      id: `solution-${id}`,
      questionId: id,
      courseId: 'grade11:physics',
      moduleId: `phy11-m${spec.module}`,
      recognition: `Nhận diện dữ kiện và mô hình thuộc dạng phy11-qt${String(seed.questionType).padStart(2, '0')}.`,
      detailedSteps: [
        {
          order: 1,
          title: 'Chọn mô hình',
          explanation: 'Xác định đại lượng đã cho, đại lượng cần tìm và thống nhất đơn vị trước khi tính hoặc đối chiếu.'
        },
        {
          order: 2,
          title: 'Lập luận và tính toán',
          explanation: seed.explanation,
          result: answer
        }
      ],
      finalAnswer: answer,
      commonMistakes: [
        'Thay số khi chưa đổi đơn vị hoặc dùng công thức ngoài điều kiện áp dụng.',
        'Không kiểm tra dấu, chiều hoặc bậc độ lớn của kết quả.'
      ],
      reviewSuggestions: [
        `Ôn lại chuẩn đầu ra ${outcomeId(spec.module, metadata.outcome)}.`,
        `Xem lại phần lý thuyết và ví dụ của phy11-qt${String(seed.questionType).padStart(2, '0')}.`
      ]
    };
  })
);

const checkpointBlueprints: AssessmentBlueprint[] = moduleSpecs.map(spec => ({
  id: `phy11-blueprint-m${spec.module}-checkpoint-v1`,
  subjectId: 'physics',
  title: `Ma trận kiểm tra ${spec.title}`,
  kind: 'module_checkpoint',
  focus: 'mixed',
  difficultyBand: 'standard',
  targetScoreRange: { min: 5, max: 8 },
  semester: spec.semester,
  seriesOrder: spec.module,
  duration: 35,
  totalPoints: 10,
  scopeTopicIds: [`phy11-t0${spec.module}`],
  topicWeights: { [`phy11-t0${spec.module}`]: 1 },
  outcomeIds: [
    ...new Set(
      spec.seeds.map(seed => {
        const metadata = questionTypeMetadata[seed.questionType];
        return outcomeId(spec.module, metadata.outcome);
      })
    )
  ],
  competencyWeights: competencyWeights(spec),
  difficultyWeights: {
    easy: 4 / 12,
    medium: 6 / 12,
    hard: 2 / 12
  },
  sections: [
    {
      id: `phy11-m${spec.module}-mcq`,
      title: 'Phần I – Trắc nghiệm nhiều lựa chọn',
      itemCount: 8,
      points: 4,
      responseType: 'multiple_choice'
    },
    {
      id: `phy11-m${spec.module}-short`,
      title: 'Phần II – Trả lời ngắn',
      itemCount: 4,
      points: 6,
      responseType: 'short_answer'
    }
  ]
}));

const checkpointExams: MockExam[] = moduleSpecs.map(spec => ({
  id: `phy11-exam-m${spec.module}-checkpoint-a`,
  subjectId: 'physics',
  title: `Kiểm tra ${spec.title} · Mã A`,
  duration: 35,
  questionIds: spec.seeds.map((_, index) => questionId(spec.module, index)),
  createdAt,
  kind: 'module_checkpoint',
  focus: 'mixed',
  difficultyBand: 'standard',
  targetScoreRange: { min: 5, max: 8 },
  parallelFormGroup: `phy11-m${spec.module}-checkpoint`,
  seriesOrder: spec.module,
  semester: spec.semester,
  scopeTopicIds: [`phy11-t0${spec.module}`],
  totalPoints: 10,
  formCode: 'A',
  instructions: [
    'Bài gồm 8 câu trắc nghiệm nhiều lựa chọn (4,0 điểm) và 4 câu trả lời ngắn (6,0 điểm).',
    'Đổi đơn vị về hệ phù hợp trước khi thay số; chỉ nhập giá trị số ở câu trả lời ngắn.',
    'Lời giải được mở sau khi nộp bài để bảo đảm kết quả phản ánh đúng năng lực hiện tại.'
  ],
  resultReleasePolicy: 'after_submit',
  blueprintId: `phy11-blueprint-m${spec.module}-checkpoint-v1`,
  assessmentVersion: '1.0.0'
}));

interface SemesterAssessmentSpec {
  id: 'mid1' | 'final1' | 'mid2' | 'final2';
  title: string;
  kind: 'midterm' | 'final';
  semester: 1 | 2;
  duration: number;
  seriesOrder: number;
  answerOffset: number;
  topicWeights: Record<string, number>;
  seeds: AssessmentSeed[];
}

const semesterSpecs: SemesterAssessmentSpec[] = [
  {
    id: 'mid1',
    title: 'Giữa học kỳ I – Vật lí 11',
    kind: 'midterm',
    semester: 1,
    duration: 45,
    seriesOrder: 1,
    answerOffset: 0,
    topicWeights: { 'phy11-t01': 1 },
    seeds: [
      {
        questionType: 1,
        content: 'Vật dao động theo $x=7\\cos(10\\pi t+\\pi/4)$ (cm). Chu kì dao động bằng',
        options: ['$0,10$ s', '$0,15$ s', '$0,20$ s', '$0,40$ s'],
        answer: 'C',
        explanation: '$T=2\\pi/\\omega=2\\pi/(10\\pi)=0,20$ s.'
      },
      {
        questionType: 2,
        content: 'Dao động có $A=4$ cm và $\\omega=6$ rad/s. Gia tốc cực đại bằng',
        options: ['$0,24$ m/s$^2$', '$1,44$ m/s$^2$', '$2,40$ m/s$^2$', '$14,4$ m/s$^2$'],
        answer: 'B',
        explanation: '$a_{\\max}=\\omega^2A=36\\cdot0,04=1,44$ m/s$^2$.'
      },
      {
        questionType: 3,
        content: 'Ở vị trí cân bằng của dao động điều hòa lí tưởng, đại lượng bằng không là',
        options: ['thế năng', 'động năng', 'cơ năng', 'tốc độ'],
        answer: 'A',
        explanation: 'Tại vị trí cân bằng $x=0$ nên thế năng bằng không, còn động năng đạt cực đại.'
      },
      {
        questionType: 4,
        content: 'Khi lực cản của môi trường tăng, dao động tắt dần của cùng một hệ thường',
        options: ['có biên độ không đổi', 'tăng cơ năng', 'tắt chậm hơn', 'tắt nhanh hơn'],
        answer: 'D',
        explanation: 'Lực cản lớn làm cơ năng tiêu hao nhanh hơn, vì vậy biên độ giảm nhanh hơn.'
      },
      {
        questionType: 6,
        content: 'Một nhóm đo được $25$ dao động trong $30,0$ s. Chu kì gần nhất là',
        options: ['$0,83$ s', '$1,00$ s', '$1,20$ s', '$1,25$ s'],
        answer: 'C',
        explanation: '$T=t/N=30,0/25=1,20$ s.'
      },
      {
        questionType: 5,
        content: 'Biên độ dao động cưỡng bức đạt cực đại khi',
        options: ['lực cản bằng không trong mọi trường hợp', 'tần số ngoại lực gần tần số riêng', 'ngoại lực có tần số bằng không', 'biên độ ngoại lực nhỏ nhất'],
        answer: 'B',
        explanation: 'Cộng hưởng xảy ra khi tần số của ngoại lực gần bằng tần số riêng của hệ.'
      },
      {
        questionType: 1,
        content: 'Vật có $A=5$ cm, $T=1$ s; lúc $t=0$ qua vị trí cân bằng theo chiều dương. Phương trình phù hợp là',
        options: ['$x=5\\sin(2\\pi t)$', '$x=-5\\sin(2\\pi t)$', '$x=5\\cos(2\\pi t)$', '$x=-5\\cos(2\\pi t)$'],
        answer: 'A',
        explanation: '$x(0)=0$, $v(0)>0$ và $\\omega=2\\pi/T=2\\pi$ nên $x=5\\sin(2\\pi t)$.'
      },
      {
        questionType: 2,
        content: 'Vật dao động với $A=13$ cm, $\\omega=3$ rad/s. Tại $x=5$ cm, tốc độ bằng',
        options: ['$15$ cm/s', '$24$ cm/s', '$30$ cm/s', '$36$ cm/s'],
        answer: 'D',
        explanation: '$|v|=\\omega\\sqrt{A^2-x^2}=3\\sqrt{13^2-5^2}=36$ cm/s.'
      },
      {
        questionType: 3,
        content: 'Khi vật ở li độ $x=A/2$, tỉ số thế năng so với cơ năng là',
        options: ['$1/2$', '$1/4$', '$3/4$', '$1/8$'],
        answer: 'B',
        explanation: '$W_t/W=x^2/A^2=(1/2)^2=1/4$.'
      },
      {
        questionType: 4,
        content: 'Ở trạng thái ổn định, tần số của dao động cưỡng bức bằng',
        options: ['tần số riêng của hệ trong mọi trường hợp', 'hiệu hai tần số', 'tần số của ngoại lực', 'hai lần tần số ngoại lực'],
        answer: 'C',
        explanation: 'Dao động cưỡng bức ổn định có tần số bằng tần số của ngoại lực tuần hoàn.'
      },
      {
        questionType: 5,
        content: 'Biện pháp trực tiếp để hạn chế cộng hưởng có hại ở máy quay là',
        options: ['luôn tăng khối lượng máy', 'tránh vận hành lâu gần tốc độ cộng hưởng', 'giảm mọi lực cản', 'làm tần số riêng bằng tần số kích thích'],
        answer: 'B',
        explanation: 'Cần dịch tần số kích thích hoặc tần số riêng ra xa nhau và tránh lưu lại lâu trong vùng cộng hưởng.'
      },
      {
        questionType: 6,
        content: 'Thời gian của $10$ dao động qua ba lần đo là $8,1$ s; $8,0$ s; $8,2$ s. Chu kì trung bình bằng',
        options: ['$0,81$ s', '$1,23$ s', '$8,10$ s', '$24,3$ s'],
        answer: 'A',
        explanation: '$\\bar t=8,1$ s cho $10$ dao động nên $\\bar T=0,81$ s.'
      },
      {
        questionType: 2,
        content: 'Trong dao động điều hòa, vector gia tốc luôn',
        options: ['cùng chiều vận tốc', 'hướng ra xa vị trí cân bằng', 'vuông góc với li độ', 'ngược hướng với vector li độ'],
        answer: 'D',
        explanation: '$a=-\\omega^2x$ nên gia tốc luôn hướng về vị trí cân bằng và ngược hướng li độ.'
      },
      {
        questionType: 3,
        content: 'Con lắc lò xo có $k=200$ N/m, $A=10$ cm. Tại $x=6$ cm, động năng bằng',
        options: ['$0,16$ J', '$0,36$ J', '$0,64$ J', '$1,00$ J'],
        answer: 'C',
        explanation: '$W_đ=\\tfrac12k(A^2-x^2)=100(0,10^2-0,06^2)=0,64$ J.'
      },
      {
        questionType: 2,
        content: 'Vật có $A=5$ cm; tại $|x|=3$ cm thì $|v|=16$ cm/s. Nhập tần số góc theo rad/s.',
        answer: '4',
        acceptedAnswers: ['4', '4.0', '4,0'],
        explanation: '$\\omega=|v|/\\sqrt{A^2-x^2}=16/\\sqrt{25-9}=4$ rad/s.'
      },
      {
        questionType: 6,
        content: 'Thời gian của $20$ dao động được đo là $24,2$ s; $24,0$ s; $36,0$ s. Sau khi kiểm tra và loại giá trị ngoại lai rõ ràng, nhập chu kì trung bình theo giây, làm tròn hai chữ số.',
        answer: '1.21',
        acceptedAnswers: ['1.21', '1,21'],
        explanation: 'Loại $36,0$ s; thời gian trung bình còn lại là $24,1$ s, nên $T=24,1/20=1,205\\approx1,21$ s.'
      }
    ]
  },
  {
    id: 'final1',
    title: 'Cuối học kỳ I – Vật lí 11',
    kind: 'final',
    semester: 1,
    duration: 60,
    seriesOrder: 2,
    answerOffset: 2,
    topicWeights: { 'phy11-t01': 0.45, 'phy11-t02': 0.55 },
    seeds: [
      {
        questionType: 1,
        content: 'Dao động $x=4\\cos(6\\pi t)$ (cm) có tần số bằng',
        options: ['$1,5$ Hz', '$3$ Hz', '$6$ Hz', '$12$ Hz'],
        answer: 'B',
        explanation: '$f=\\omega/(2\\pi)=6\\pi/(2\\pi)=3$ Hz.'
      },
      {
        questionType: 2,
        content: 'Khi vật dao động điều hòa có li độ dương thì gia tốc',
        options: ['dương', 'âm', 'bằng không ở mọi vị trí', 'luôn cùng chiều vận tốc'],
        answer: 'B',
        explanation: '$a=-\\omega^2x$ nên $x>0$ thì $a<0$.'
      },
      {
        questionType: 3,
        content: 'Giữ nguyên khối lượng và tần số góc, tăng biên độ gấp đôi thì cơ năng',
        options: ['tăng 2 lần', 'tăng 4 lần', 'giảm 2 lần', 'không đổi'],
        answer: 'B',
        explanation: '$W=\\tfrac12m\\omega^2A^2$ nên $A$ gấp đôi làm $W$ gấp bốn.'
      },
      {
        questionType: 4,
        content: 'Đồ thị biên độ giảm dần theo thời gian là dấu hiệu của',
        options: ['dao động điều hòa lí tưởng', 'chuyển động thẳng đều', 'dao động tắt dần', 'cộng hưởng không ma sát'],
        answer: 'C',
        explanation: 'Biên độ giảm do năng lượng bị tiêu hao là đặc trưng của dao động tắt dần.'
      },
      {
        questionType: 5,
        content: 'Đẩy xích đu đúng nhịp chuyển động làm biên độ tăng là ứng dụng của',
        options: ['giao thoa', 'cộng hưởng', 'phản xạ', 'khúc xạ'],
        answer: 'B',
        explanation: 'Ngoại lực tuần hoàn gần tần số riêng truyền năng lượng hiệu quả, tạo cộng hưởng.'
      },
      {
        questionType: 6,
        content: 'Khảo sát ảnh hưởng của chiều dài đến chu kì con lắc đơn, đại lượng cần chủ động thay đổi là',
        options: ['khối lượng quả nặng', 'gia tốc trọng trường', 'chiều dài dây', 'loại đồng hồ'],
        answer: 'C',
        explanation: 'Chiều dài là biến độc lập; các yếu tố khác cần được giữ ổn định.'
      },
      {
        questionType: 7,
        content: 'Khoảng cách giữa một đỉnh sóng và hõm kế tiếp là $0,45$ m. Bước sóng bằng',
        options: ['$0,225$ m', '$0,45$ m', '$0,90$ m', '$1,80$ m'],
        answer: 'C',
        explanation: 'Đỉnh và hõm gần nhất cách nhau $\\lambda/2$, nên $\\lambda=0,90$ m.'
      },
      {
        questionType: 8,
        content: 'Sóng truyền với tốc độ $24$ m/s và tần số $8$ Hz. Bước sóng bằng',
        options: ['$2$ m', '$3$ m', '$8$ m', '$192$ m'],
        answer: 'B',
        explanation: '$\\lambda=v/f=24/8=3$ m.'
      },
      {
        questionType: 9,
        content: 'Sóng truyền trên dây căng, phương dao động vuông góc phương truyền sóng, là',
        options: ['sóng ngang', 'sóng dọc', 'sóng điện từ duy nhất', 'dao động cưỡng bức'],
        answer: 'A',
        explanation: 'Sóng ngang có phương dao động vuông góc với phương truyền sóng.'
      },
      {
        questionType: 10,
        content: 'Tín hiệu micro có $12$ chu kì trong $24$ ms. Tần số âm bằng',
        options: ['$250$ Hz', '$500$ Hz', '$1000$ Hz', '$2000$ Hz'],
        answer: 'B',
        explanation: '$T=24\\text{ ms}/12=2\\text{ ms}$ nên $f=500$ Hz.'
      },
      {
        questionType: 11,
        content: 'Trong chân không, sóng điện từ có tần số càng lớn thì',
        options: ['tốc độ càng nhỏ', 'bước sóng càng lớn', 'bước sóng càng nhỏ', 'không mang năng lượng'],
        answer: 'C',
        explanation: '$c=\\lambda f$ không đổi nên $f$ tăng thì $\\lambda$ giảm.'
      },
      {
        questionType: 12,
        content: 'Hai nguồn kết hợp cùng pha tạo cực tiểu tại điểm có hiệu đường đi',
        options: ['$k\\lambda$', '$(k+1/2)\\lambda$', '$2k\\lambda$', '$\\lambda/4$ với mọi $k$'],
        answer: 'B',
        explanation: 'Với hai nguồn cùng pha, cực tiểu khi $\\Delta d=(k+1/2)\\lambda$.'
      },
      {
        questionType: 13,
        content: 'Dây có hai đầu cố định, xuất hiện $4$ bụng sóng trên chiều dài $L$. Quan hệ đúng là',
        options: ['$L=\\lambda$', '$L=3\\lambda/2$', '$L=2\\lambda$', '$L=4\\lambda$'],
        answer: 'C',
        explanation: '$L=n\\lambda/2$; với $n=4$ bụng thì $L=2\\lambda$.'
      },
      {
        questionType: 14,
        content: 'Một tiếng vang trở lại sau $0,50$ s từ vách đá cách người nghe $85$ m. Tốc độ âm tính được là',
        options: ['$170$ m/s', '$255$ m/s', '$340$ m/s', '$680$ m/s'],
        answer: 'C',
        explanation: 'Âm đi và về quãng đường $2d=170$ m, nên $v=170/0,50=340$ m/s.'
      },
      {
        questionType: 3,
        content: 'Tại một vị trí, động năng bằng ba lần thế năng. Nhập độ lớn li độ theo phần trăm biên độ.',
        answer: '50',
        acceptedAnswers: ['50', '50.0', '50,0'],
        explanation: '$W=4W_t$ nên $x^2/A^2=W_t/W=1/4$, suy ra $|x|/A=1/2=50\\%$.'
      },
      {
        questionType: 13,
        content: 'Dây dài $1,00$ m, hai đầu cố định, có hai tần số cộng hưởng liên tiếp $170$ Hz và $255$ Hz. Nhập tốc độ truyền sóng theo m/s.',
        answer: '170',
        acceptedAnswers: ['170', '170.0', '170,0'],
        explanation: 'Khoảng hai tần số liên tiếp là $f_1=85$ Hz; $v=2Lf_1=2\\cdot1,00\\cdot85=170$ m/s.'
      }
    ]
  },
  {
    id: 'mid2',
    title: 'Giữa học kỳ II – Vật lí 11',
    kind: 'midterm',
    semester: 2,
    duration: 45,
    seriesOrder: 3,
    answerOffset: 0,
    topicWeights: { 'phy11-t03': 1 },
    seeds: [
      {
        questionType: 15,
        content: 'Trong thí nghiệm, hai viên bi nhỏ đều được tích điện dương. Khi đưa chúng lại gần nhau, hai viên bi sẽ',
        options: ['hút nhau', 'đẩy nhau', 'không tương tác', 'luôn quay tròn'],
        answer: 'B',
        explanation: 'Các điện tích cùng dấu đẩy nhau, trái dấu hút nhau.'
      },
      {
        questionType: 16,
        content: 'Điện tích thử $5\\,\\mu$C chịu lực điện $2,0\\times10^{-4}$ N. Cường độ điện trường bằng',
        options: ['$10$ N/C', '$20$ N/C', '$40$ N/C', '$100$ N/C'],
        answer: 'C',
        explanation: '$E=F/q=2,0\\times10^{-4}/(5\\times10^{-6})=40$ N/C.'
      },
      {
        questionType: 18,
        content: 'Trên hình đường sức, vùng có các đường sức mau hơn biểu diễn điện trường',
        options: ['yếu hơn', 'mạnh hơn', 'bằng không', 'đổi chiều liên tục'],
        answer: 'B',
        explanation: 'Mật độ đường sức lớn hơn biểu thị cường độ điện trường lớn hơn.'
      },
      {
        questionType: 22,
        content: 'Điện thế tại một điểm được xác định bởi',
        options: ['$V=W/q$', '$V=q/W$', '$V=Fq$', '$V=Ed^2$'],
        answer: 'A',
        explanation: 'Điện thế đặc trưng cho thế năng trên một đơn vị điện tích: $V=W/q$.'
      },
      {
        questionType: 23,
        content: 'Đơn vị của điện dung là',
        options: ['volt', 'coulomb', 'farad', 'joule'],
        answer: 'C',
        explanation: 'Đơn vị SI của điện dung là farad, kí hiệu F.'
      },
      {
        questionType: 17,
        content: 'Điện tích $2$ nC gây ra điện trường tại điểm cách nó $20$ cm có độ lớn',
        options: ['$45$ N/C', '$180$ N/C', '$450$ N/C', '$900$ N/C'],
        answer: 'C',
        explanation: '$E=kq/r^2=9\\times10^9\\cdot2\\times10^{-9}/0,20^2=450$ N/C.'
      },
      {
        questionType: 19,
        content: 'Điện trường đều $E=2,0\\times10^4$ V/m tồn tại giữa hai điểm cách nhau $3,0$ cm theo phương đường sức. Độ lớn hiệu điện thế là',
        options: ['$60$ V', '$200$ V', '$600$ V', '$6000$ V'],
        answer: 'C',
        explanation: '$U=Ed=2,0\\times10^4\\cdot0,030=600$ V.'
      },
      {
        questionType: 20,
        content: 'Một proton được thả trong điện trường đều. Nếu bỏ qua trọng lực, proton ban đầu tăng tốc',
        options: ['ngược chiều đường sức', 'theo chiều đường sức', 'vuông góc đường sức', 'không có gia tốc'],
        answer: 'B',
        explanation: 'Proton mang điện dương nên lực điện và gia tốc cùng chiều điện trường.'
      },
      {
        questionType: 21,
        content: 'Trong điện trường tĩnh, công của lực điện khi điện tích đi từ A đến B',
        options: ['phụ thuộc hình dạng đường đi', 'chỉ phụ thuộc A và B', 'luôn bằng không', 'chỉ phụ thuộc thời gian'],
        answer: 'B',
        explanation: 'Lực điện tĩnh là lực thế nên công không phụ thuộc đường đi.'
      },
      {
        questionType: 15,
        content: 'Muốn tìm lực điện tổng hợp tác dụng lên một điện tích do nhiều điện tích khác gây ra, cần',
        options: ['cộng đại số mọi độ lớn', 'lấy lực lớn nhất', 'cộng vector các lực thành phần', 'nhân các lực thành phần'],
        answer: 'C',
        explanation: 'Áp dụng nguyên lí chồng chất: lực tổng hợp là tổng vector các lực Coulomb thành phần.'
      },
      {
        questionType: 22,
        content: 'Điện tích $q=-2\\,\\mu$C dịch chuyển qua hiệu điện thế $U_{AB}=50$ V. Công lực điện $A_{AB}$ bằng',
        options: ['$-100\\,\\mu$J', '$-25\\,\\mu$J', '$25\\,\\mu$J', '$100\\,\\mu$J'],
        answer: 'A',
        explanation: '$A_{AB}=qU_{AB}=-2\\times10^{-6}\\cdot50=-100\\,\\mu$J.'
      },
      {
        questionType: 23,
        content: 'Tụ điện $10\\,\\mu$F được nạp đến $20$ V. Năng lượng điện trường của tụ là',
        options: ['$0,2$ mJ', '$1$ mJ', '$2$ mJ', '$4$ mJ'],
        answer: 'C',
        explanation: '$W=\\tfrac12CU^2=\\tfrac12\\cdot10^{-5}\\cdot20^2=2\\times10^{-3}$ J $=2$ mJ.'
      },
      {
        questionType: 18,
        content: 'Trong điện trường tĩnh, đường sức điện tại mỗi điểm',
        options: ['tiếp tuyến với vector cường độ điện trường', 'vuông góc vector điện trường', 'luôn là đường tròn', 'không có chiều xác định'],
        answer: 'A',
        explanation: 'Tiếp tuyến của đường sức tại mỗi điểm cho phương của vector cường độ điện trường.'
      },
      {
        questionType: 20,
        content: 'Hạt tích điện bay ban đầu vuông góc với điện trường đều. Bỏ qua trọng lực, quỹ đạo trong vùng điện trường là',
        options: ['đường thẳng đều', 'đường tròn', 'parabol', 'hyperbol'],
        answer: 'C',
        explanation: 'Chuyển động đều theo phương ban đầu và nhanh dần đều theo phương lực tạo quỹ đạo parabol.'
      },
      {
        questionType: 17,
        content: 'Hai điện tích dương $q$ và $9q$ cách nhau $40$ cm. Nhập khoảng cách từ điện tích $q$ đến điểm nằm giữa hai điện tích mà điện trường tổng hợp bằng không, theo cm.',
        answer: '10',
        acceptedAnswers: ['10', '10.0', '10,0'],
        explanation: '$q/x^2=9q/(40-x)^2$ nên $40-x=3x$, suy ra $x=10$ cm.'
      },
      {
        questionType: 23,
        content: 'Tụ điện $8\\,\\mu$F được nạp đến $100$ V. Nhập năng lượng của tụ theo J.',
        answer: '0.04',
        acceptedAnswers: ['0.04', '0,04'],
        explanation: '$W=\\tfrac12CU^2=\\tfrac12\\cdot8\\times10^{-6}\\cdot100^2=0,04$ J.'
      }
    ]
  },
  {
    id: 'final2',
    title: 'Cuối học kỳ II – Vật lí 11',
    kind: 'final',
    semester: 2,
    duration: 60,
    seriesOrder: 4,
    answerOffset: 2,
    topicWeights: { 'phy11-t03': 0.45, 'phy11-t04': 0.55 },
    seeds: [
      {
        questionType: 15,
        content: 'Hai điện tích $1\\,\\mu$C và $4\\,\\mu$C cách nhau $0,20$ m trong chân không. Lực Coulomb có độ lớn',
        options: ['$0,09$ N', '$0,45$ N', '$0,90$ N', '$9,0$ N'],
        answer: 'C',
        explanation: '$F=9\\times10^9\\cdot4\\times10^{-12}/0,20^2=0,90$ N.'
      },
      {
        questionType: 17,
        content: 'Cường độ điện trường do điện tích điểm gây ra giảm bao nhiêu lần khi khoảng cách tăng gấp ba?',
        options: ['3 lần', '6 lần', '9 lần', '27 lần'],
        answer: 'C',
        explanation: '$E\\propto1/r^2$ nên khoảng cách gấp ba làm cường độ giảm chín lần.'
      },
      {
        questionType: 19,
        content: 'Hai bản tụ cách nhau $2,0$ mm, hiệu điện thế $400$ V. Cường độ điện trường đều bằng',
        options: ['$2,0\\times10^3$ V/m', '$2,0\\times10^4$ V/m', '$2,0\\times10^5$ V/m', '$8,0\\times10^5$ V/m'],
        answer: 'C',
        explanation: '$E=U/d=400/(2,0\\times10^{-3})=2,0\\times10^5$ V/m.'
      },
      {
        questionType: 21,
        content: 'Lực điện thực hiện công $6$ mJ. Độ biến thiên thế năng điện bằng',
        options: ['$-6$ mJ', '$0$ mJ', '$3$ mJ', '$6$ mJ'],
        answer: 'A',
        explanation: '$\\Delta W_t=-A=-6$ mJ.'
      },
      {
        questionType: 22,
        content: 'Điện tích $3\\,\\mu$C có thế năng $0,60$ mJ tại một điểm. Điện thế tại điểm đó là',
        options: ['$20$ V', '$50$ V', '$200$ V', '$500$ V'],
        answer: 'C',
        explanation: '$V=W/q=0,60\\times10^{-3}/(3\\times10^{-6})=200$ V.'
      },
      {
        questionType: 23,
        content: 'Tụ điện $5\\,\\mu$F mang điện tích $150\\,\\mu$C. Hiệu điện thế giữa hai bản là',
        options: ['$10$ V', '$30$ V', '$75$ V', '$750$ V'],
        answer: 'B',
        explanation: '$U=Q/C=150/5=30$ V.'
      },
      {
        questionType: 24,
        content: 'Trong công thức $I=neSv$, đại lượng $v$ là',
        options: ['tốc độ ánh sáng', 'tốc độ truyền điện trường', 'tốc độ trôi có hướng của hạt tải', 'tốc độ nhiệt trung bình'],
        answer: 'C',
        explanation: '$v$ là tốc độ trôi có hướng trung bình của các hạt tải điện.'
      },
      {
        questionType: 25,
        content: 'Có $18$ C điện lượng qua tiết diện dây trong $12$ s. Cường độ dòng điện bằng',
        options: ['$0,67$ A', '$1,5$ A', '$6$ A', '$216$ A'],
        answer: 'B',
        explanation: '$I=q/t=18/12=1,5$ A.'
      },
      {
        questionType: 26,
        content: 'Dây dẫn có điện trở suất $2,0\\times10^{-8}\\,\\Omega$m, dài $5$ m, tiết diện $0,50$ mm$^2$. Điện trở bằng',
        options: ['$0,02\\,\\Omega$', '$0,20\\,\\Omega$', '$2,0\\,\\Omega$', '$20\\,\\Omega$'],
        answer: 'B',
        explanation: '$R=\\rho l/S=2,0\\times10^{-8}\\cdot5/(0,50\\times10^{-6})=0,20\\,\\Omega$.'
      },
      {
        questionType: 27,
        content: 'Đặc tuyến $I-U$ là đường thẳng qua gốc với độ dốc $0,25$ A/V. Điện trở của vật dẫn là',
        options: ['$0,25\\,\\Omega$', '$2\\,\\Omega$', '$4\\,\\Omega$', '$8\\,\\Omega$'],
        answer: 'C',
        explanation: 'Độ dốc $I/U=1/R=0,25$ A/V nên $R=4\\,\\Omega$.'
      },
      {
        questionType: 28,
        content: 'Điện trở $15\\,\\Omega$ có dòng $0,40$ A chạy qua. Hiệu điện thế hai đầu là',
        options: ['$0,027$ V', '$6$ V', '$15,4$ V', '$37,5$ V'],
        answer: 'B',
        explanation: '$U=IR=0,40\\cdot15=6$ V.'
      },
      {
        questionType: 29,
        content: 'Nguồn $\\mathcal E=6$ V, $r=0,5\\,\\Omega$ nối với $R=2,5\\,\\Omega$. Cường độ dòng điện mạch kín là',
        options: ['$1$ A', '$2$ A', '$2,4$ A', '$12$ A'],
        answer: 'B',
        explanation: '$I=\\mathcal E/(R+r)=6/3=2$ A.'
      },
      {
        questionType: 30,
        content: 'Ấm điện công suất $1500$ W hoạt động $12$ phút. Điện năng tiêu thụ bằng',
        options: ['$0,03$ kWh', '$0,30$ kWh', '$3,0$ kWh', '$18$ kWh'],
        answer: 'B',
        explanation: '$A=Pt=1,5\\cdot(12/60)=0,30$ kWh.'
      },
      {
        questionType: 31,
        content: 'Từ đồ thị $U-I$ của nguồn, giao điểm với trục $U$ là $1,50$ V. Đại lượng đọc được là',
        options: ['dòng ngắn mạch', 'điện trở tải', 'suất điện động', 'công suất cực đại'],
        answer: 'C',
        explanation: 'Khi $I=0$, $U=\\mathcal E$, nên tung độ gốc của đồ thị là suất điện động.'
      },
      {
        questionType: 20,
        content: 'Electron ban đầu đứng yên được tăng tốc qua hiệu điện thế $100$ V. Lấy $e=1,6\\times10^{-19}$ C, $m_e=9,1\\times10^{-31}$ kg. Nhập tốc độ theo m/s, làm tròn ba chữ số có nghĩa.',
        answer: '5930000',
        acceptedAnswers: ['5930000', '5.93e6', '5,93e6', '5.93E6'],
        explanation: '$eU=\\tfrac12m_ev^2$ nên $v=\\sqrt{2eU/m_e}\\approx5,93\\times10^6$ m/s.'
      },
      {
        questionType: 29,
        content: 'Nguồn có suất điện động $12$ V và điện trở trong $2\\,\\Omega$. Nhập công suất cực đại truyền cho tải theo W.',
        answer: '18',
        acceptedAnswers: ['18', '18.0', '18,0'],
        explanation: 'Khi $R=r$, $P_{\\max}=\\mathcal E^2/(4r)=144/8=18$ W.'
      }
    ]
  }
];

const semesterDifficulty = (index: number) =>
  index < 5 ? 'easy' as const : index < 14 ? 'medium' as const : 'hard' as const;
const semesterQuestionId = (spec: SemesterAssessmentSpec, index: number) =>
  `phy11-sem-${spec.id}-q${String(index + 1).padStart(2, '0')}`;
const semesterAnswer = (spec: SemesterAssessmentSpec, seed: AssessmentSeed, index: number) =>
  seed.options ? letters[(index + spec.answerOffset) % letters.length] : seed.answer;
const semesterOptions = (
  spec: SemesterAssessmentSpec,
  seed: AssessmentSeed,
  index: number
) => {
  if (!seed.options) return undefined;
  const options = [...seed.options] as [string, string, string, string];
  const originalIndex = letters.indexOf(seed.answer as Choice);
  const balancedIndex = (index + spec.answerOffset) % letters.length;
  [options[originalIndex], options[balancedIndex]] = [
    options[balancedIndex],
    options[originalIndex]
  ];
  return options;
};
const semesterCompetency = (seed: AssessmentSeed, index: number) =>
  questionTypeMetadata[seed.questionType].competency ??
  (semesterDifficulty(index) === 'easy'
    ? 'physical_cognition' as const
    : 'physical_application' as const);
const semesterCompetencyWeights = (
  spec: SemesterAssessmentSpec
): AssessmentBlueprint['competencyWeights'] => {
  const points: Partial<Record<AssessmentCompetency, number>> = {};
  for (const [index, seed] of spec.seeds.entries()) {
    const competency = semesterCompetency(seed, index);
    points[competency] = (points[competency] ?? 0) + (seed.options ? 0.5 : 1.5);
  }
  return Object.fromEntries(
    Object.entries(points).map(([competency, value]) => [competency, value / 10])
  );
};

const semesterQuestions: CourseQuestion[] = semesterSpecs.flatMap(spec =>
  spec.seeds.map((seed, index) => {
    const metadata = questionTypeMetadata[seed.questionType];
    const isChoice = Boolean(seed.options);
    const difficulty = semesterDifficulty(index);
    const answer = semesterAnswer(spec, seed, index);
    return {
      id: semesterQuestionId(spec, index),
      subjectId: 'physics',
      courseId: 'grade11:physics',
      moduleId: `phy11-m${metadata.module}`,
      lessonId: `phy11-kntt-l${metadata.lesson}`,
      topicId: `phy11-t0${metadata.module}`,
      questionTypeId: `phy11-qt${String(seed.questionType).padStart(2, '0')}`,
      content: seed.content,
      options: semesterOptions(spec, seed, index),
      correctAnswer: answer,
      acceptedAnswers: isChoice
        ? [answer, answer.toLowerCase()]
        : seed.acceptedAnswers ?? [seed.answer, seed.answer.replace('.', ',')],
      responseType: isChoice ? 'single_choice' : 'short_answer',
      validatorType: isChoice ? 'choice' : 'number',
      points: isChoice ? 0.5 : 1.5,
      outcomeIds: [outcomeId(metadata.module, metadata.outcome)],
      competency: semesterCompetency(seed, index),
      cognitiveLevel:
        difficulty === 'easy'
          ? 'recognition'
          : difficulty === 'medium'
            ? 'understanding'
            : 'application',
      estimatedSeconds: isChoice ? (difficulty === 'easy' ? 75 : 110) : 300,
      difficulty,
      sourceType: 'mock_exam',
      variantGroupId: `phy11-sem-${spec.id}-qt${String(seed.questionType).padStart(2, '0')}`
    };
  })
);

const semesterSolutions: CourseSolution[] = semesterSpecs.flatMap(spec =>
  spec.seeds.map((seed, index) => {
    const metadata = questionTypeMetadata[seed.questionType];
    const id = semesterQuestionId(spec, index);
    const answer = semesterAnswer(spec, seed, index);
    return {
      id: `solution-${id}`,
      questionId: id,
      courseId: 'grade11:physics',
      moduleId: `phy11-m${metadata.module}`,
      recognition: `Nhận diện mô hình thuộc dạng phy11-qt${String(seed.questionType).padStart(2, '0')} trong đề tích hợp.`,
      detailedSteps: [
        {
          order: 1,
          title: 'Phân tích dữ kiện',
          explanation: 'Xác định chương, dạng bài, đại lượng cần tìm và đổi các dữ kiện về cùng hệ đơn vị.'
        },
        {
          order: 2,
          title: 'Giải và kiểm tra',
          explanation: seed.explanation,
          result: answer
        }
      ],
      finalAnswer: answer,
      commonMistakes: [
        'Chọn công thức theo từ khóa mà chưa kiểm tra mô hình vật lí.',
        'Bỏ qua dấu, chiều vector hoặc đổi sai tiền tố của đơn vị.'
      ],
      reviewSuggestions: [
        `Ôn lại chuẩn đầu ra ${outcomeId(metadata.module, metadata.outcome)}.`,
        `Làm thêm câu vận dụng của phy11-qt${String(seed.questionType).padStart(2, '0')}.`
      ]
    };
  })
);

const semesterBlueprints: AssessmentBlueprint[] = semesterSpecs.map(spec => ({
  id: `phy11-blueprint-${spec.id}-v1`,
  subjectId: 'physics',
  title: `Ma trận ${spec.title}`,
  kind: spec.kind,
  focus: 'mixed',
  difficultyBand: 'standard',
  targetScoreRange: { min: 5, max: 8 },
  semester: spec.semester,
  seriesOrder: spec.seriesOrder,
  duration: spec.duration,
  totalPoints: 10,
  scopeTopicIds: Object.keys(spec.topicWeights),
  topicWeights: spec.topicWeights,
  outcomeIds: [
    ...new Set(
      spec.seeds.map(seed => {
        const metadata = questionTypeMetadata[seed.questionType];
        return outcomeId(metadata.module, metadata.outcome);
      })
    )
  ],
  competencyWeights: semesterCompetencyWeights(spec),
  difficultyWeights: {
    easy: 5 / 16,
    medium: 9 / 16,
    hard: 2 / 16
  },
  sections: [
    {
      id: `phy11-${spec.id}-mcq`,
      title: 'Phần I – Trắc nghiệm nhiều lựa chọn',
      itemCount: 14,
      points: 7,
      responseType: 'multiple_choice'
    },
    {
      id: `phy11-${spec.id}-short`,
      title: 'Phần II – Trả lời ngắn',
      itemCount: 2,
      points: 3,
      responseType: 'short_answer'
    }
  ]
}));

const semesterExams: MockExam[] = semesterSpecs.map(spec => ({
  id: `phy11-exam-${spec.id}-a`,
  subjectId: 'physics',
  title: `${spec.title} · Mã A`,
  duration: spec.duration,
  questionIds: spec.seeds.map((_, index) => semesterQuestionId(spec, index)),
  createdAt,
  kind: spec.kind,
  focus: 'mixed',
  difficultyBand: 'standard',
  targetScoreRange: { min: 5, max: 8 },
  parallelFormGroup: `phy11-${spec.id}`,
  seriesOrder: spec.seriesOrder,
  semester: spec.semester,
  scopeTopicIds: Object.keys(spec.topicWeights),
  totalPoints: 10,
  formCode: 'A',
  instructions: [
    'Bài gồm 14 câu trắc nghiệm nhiều lựa chọn (7,0 điểm) và 2 câu trả lời ngắn (3,0 điểm).',
    'Không sử dụng tài liệu; đổi đơn vị và viết quan hệ vật lí ra nháp trước khi thay số.',
    'Ở câu trả lời ngắn, chỉ nhập giá trị số theo đúng đơn vị được yêu cầu.'
  ],
  resultReleasePolicy: 'after_submit',
  blueprintId: `phy11-blueprint-${spec.id}-v1`,
  assessmentVersion: '1.0.0'
}));

interface ParallelSeed extends AssessmentSeed {
  id: string;
  module: 1 | 2 | 3 | 4;
  difficulty: 'easy' | 'medium' | 'hard';
}

const parallelSeeds: ParallelSeed[] = [
  {
    id: 'phy11-par-m1-medium-mcq-1',
    module: 1,
    difficulty: 'medium',
    questionType: 1,
    content: 'Một vật đạt biên dương tại $t=0,10$ s và đạt biên âm lần đầu ở $t=0,35$ s. Chu kì dao động là',
    options: ['$0,25$ s', '$0,40$ s', '$0,50$ s', '$1,00$ s'],
    answer: 'C',
    explanation: 'Từ biên dương đến biên âm gần nhất là $T/2=0,25$ s, nên $T=0,50$ s.'
  },
  {
    id: 'phy11-par-m1-medium-mcq-2',
    module: 1,
    difficulty: 'medium',
    questionType: 2,
    content: 'Dao động có $v_{\\max}=0,72$ m/s và $\\omega=9$ rad/s. Biên độ bằng',
    options: ['$4$ cm', '$8$ cm', '$9$ cm', '$16$ cm'],
    answer: 'B',
    explanation: '$A=v_{\\max}/\\omega=0,72/9=0,08$ m $=8$ cm.'
  },
  {
    id: 'phy11-par-m1-medium-mcq-3',
    module: 1,
    difficulty: 'medium',
    questionType: 3,
    content: 'Khi thế năng bằng ba lần động năng, tỉ số $|x|/A$ bằng',
    options: ['$1/2$', '$\\sqrt2/2$', '$\\sqrt3/2$', '$3/4$'],
    answer: 'C',
    explanation: '$W_t=3W_đ$ nên $W=4W_đ$ và $W_t/W=3/4=x^2/A^2$, suy ra $|x|/A=\\sqrt3/2$.'
  },
  {
    id: 'phy11-par-m1-medium-mcq-4',
    module: 1,
    difficulty: 'medium',
    questionType: 5,
    content: 'Trên đồ thị biên độ cưỡng bức theo tần số, đỉnh cộng hưởng dịch sang tần số thấp hơn khi',
    options: ['tần số riêng của hệ giảm', 'biên độ ngoại lực tăng', 'thời gian đo tăng', 'đơn vị tần số thay đổi'],
    answer: 'A',
    explanation: 'Vị trí đỉnh cộng hưởng gắn với tần số riêng; tần số riêng giảm làm đỉnh dịch về phía tần số thấp.'
  },
  {
    id: 'phy11-par-m1-medium-short-1',
    module: 1,
    difficulty: 'medium',
    questionType: 1,
    content: 'Dao động có tần số góc $8\\pi$ rad/s. Nhập chu kì theo giây.',
    answer: '0.25',
    acceptedAnswers: ['0.25', '0,25'],
    explanation: '$T=2\\pi/\\omega=2\\pi/(8\\pi)=0,25$ s.'
  },
  {
    id: 'phy11-par-m1-medium-short-2',
    module: 1,
    difficulty: 'medium',
    questionType: 3,
    content: 'Cơ năng dao động là $0,80$ J; tại một vị trí thế năng bằng $0,30$ J. Nhập động năng theo J.',
    answer: '0.5',
    acceptedAnswers: ['0.5', '0,5', '0.50', '0,50'],
    explanation: '$W_đ=W-W_t=0,80-0,30=0,50$ J.'
  },
  {
    id: 'phy11-par-m2-easy-mcq-1',
    module: 2,
    difficulty: 'easy',
    questionType: 7,
    content: 'Đồ thị độ dịch chuyển của sóng có giá trị cực đại $3$ cm và cực tiểu $-3$ cm. Biên độ sóng là',
    options: ['$1,5$ cm', '$3$ cm', '$6$ cm', '$9$ cm'],
    answer: 'B',
    explanation: 'Biên độ là độ dịch chuyển cực đại tính từ vị trí cân bằng, bằng $3$ cm.'
  },
  {
    id: 'phy11-par-m2-easy-mcq-2',
    module: 2,
    difficulty: 'easy',
    questionType: 9,
    content: 'Sóng nén truyền dọc theo một lò xo là',
    options: ['sóng ngang', 'sóng dọc', 'sóng điện từ', 'sóng đứng duy nhất'],
    answer: 'B',
    explanation: 'Các vòng lò xo dao động dọc theo phương truyền biến dạng nên đây là sóng dọc.'
  },
  {
    id: 'phy11-par-m2-easy-mcq-3',
    module: 2,
    difficulty: 'easy',
    questionType: 11,
    content: 'Sóng dùng trong phát thanh FM thuộc loại',
    options: ['sóng cơ', 'sóng âm trong không khí', 'sóng mặt nước', 'sóng điện từ'],
    answer: 'D',
    explanation: 'Tín hiệu phát thanh được truyền đi bằng sóng điện từ.'
  },
  {
    id: 'phy11-par-m2-easy-mcq-4',
    module: 2,
    difficulty: 'easy',
    questionType: 8,
    content: 'Sóng có $f=5$ Hz và $\\lambda=2$ m. Tốc độ truyền sóng bằng',
    options: ['$2,5$ m/s', '$7$ m/s', '$10$ m/s', '$20$ m/s'],
    answer: 'C',
    explanation: '$v=\\lambda f=2\\cdot5=10$ m/s.'
  },
  {
    id: 'phy11-par-m2-medium-mcq-1',
    module: 2,
    difficulty: 'medium',
    questionType: 12,
    content: 'Hai nguồn cùng pha tạo sóng có bước sóng $1,2$ cm. Điểm có hiệu đường đi $3,0$ cm thuộc',
    options: ['cực đại bậc 2', 'cực tiểu thứ 2', 'cực đại bậc 3', 'cực tiểu thứ 3'],
    answer: 'D',
    explanation: '$\\Delta d/\\lambda=3,0/1,2=2,5=(2+1/2)$ nên điểm thuộc cực tiểu.'
  },
  {
    id: 'phy11-par-m2-medium-short-1',
    module: 2,
    difficulty: 'medium',
    questionType: 8,
    content: 'Sóng truyền với tốc độ $18$ m/s và tần số $6$ Hz. Nhập bước sóng theo m.',
    answer: '3',
    acceptedAnswers: ['3', '3.0', '3,0'],
    explanation: '$\\lambda=v/f=18/6=3$ m.'
  },
  {
    id: 'phy11-par-m2-medium-short-2',
    module: 2,
    difficulty: 'medium',
    questionType: 12,
    content: 'Hai nguồn cùng pha tạo sóng có $\\lambda=0,70$ cm. Một cực đại có hiệu đường đi $2,10$ cm. Nhập bậc cực đại.',
    answer: '3',
    acceptedAnswers: ['3', '3.0', '3,0'],
    explanation: '$k=\\Delta d/\\lambda=2,10/0,70=3$.'
  },
  {
    id: 'phy11-par-m2-hard-short-1',
    module: 2,
    difficulty: 'hard',
    questionType: 13,
    content: 'Dây dài $1,50$ m, hai đầu cố định, dao động ở $200$ Hz và có $5$ bụng sóng. Nhập tốc độ truyền sóng theo m/s.',
    answer: '120',
    acceptedAnswers: ['120', '120.0', '120,0'],
    explanation: '$L=5\\lambda/2$ nên $\\lambda=2L/5=0,60$ m; $v=f\\lambda=120$ m/s.'
  },
  {
    id: 'phy11-par-m3-medium-mcq-1',
    module: 3,
    difficulty: 'medium',
    questionType: 15,
    content: 'Hai điện tích có lực tương tác $0,50$ N. Giữ nguyên điện tích và giảm khoảng cách còn một nửa, lực mới bằng',
    options: ['$0,125$ N', '$0,25$ N', '$1,0$ N', '$2,0$ N'],
    answer: 'D',
    explanation: '$F\\propto1/r^2$ nên khoảng cách giảm một nửa làm lực tăng bốn lần, thành $2,0$ N.'
  },
  {
    id: 'phy11-par-m3-medium-mcq-2',
    module: 3,
    difficulty: 'medium',
    questionType: 17,
    content: 'Điện tích điểm $-q$ gây ra tại điểm M một vector điện trường có chiều',
    options: ['hướng ra xa điện tích', 'hướng về điện tích', 'vuông góc bán kính', 'không xác định'],
    answer: 'B',
    explanation: 'Đường sức của điện tích âm hướng vào điện tích, nên $\\vec E$ tại M hướng về $-q$.'
  },
  {
    id: 'phy11-par-m3-medium-mcq-3',
    module: 3,
    difficulty: 'medium',
    questionType: 21,
    content: 'Điện tích đi từ A đến B, lực điện thực hiện công âm. Khi đó thế năng điện của điện tích',
    options: ['giảm', 'tăng', 'không đổi', 'luôn bằng không'],
    answer: 'B',
    explanation: '$\\Delta W_t=-A$; nếu $A<0$ thì $\\Delta W_t>0$, thế năng tăng.'
  },
  {
    id: 'phy11-par-m3-medium-mcq-4',
    module: 3,
    difficulty: 'medium',
    questionType: 23,
    content: 'Giữ điện dung không đổi, tăng hiệu điện thế trên tụ gấp ba thì năng lượng của tụ',
    options: ['tăng 3 lần', 'tăng 6 lần', 'tăng 9 lần', 'không đổi'],
    answer: 'C',
    explanation: '$W=\\tfrac12CU^2$ nên $U$ gấp ba làm năng lượng gấp chín.'
  },
  {
    id: 'phy11-par-m3-medium-short-1',
    module: 3,
    difficulty: 'medium',
    questionType: 19,
    content: 'Giữa hai bản phẳng cách nhau $4,0$ cm có hiệu điện thế $800$ V. Nhập cường độ điện trường theo V/m.',
    answer: '20000',
    acceptedAnswers: ['20000', '2e4', '2E4'],
    explanation: '$E=U/d=800/0,040=20000$ V/m.'
  },
  {
    id: 'phy11-par-m3-medium-short-2',
    module: 3,
    difficulty: 'medium',
    questionType: 22,
    content: 'Điện tích $5\\,\\mu$C đi qua hiệu điện thế $40$ V. Nhập công của lực điện theo $\\mu$J.',
    answer: '200',
    acceptedAnswers: ['200', '200.0', '200,0'],
    explanation: '$A=qU=5\\,\\mu\\text{C}\\cdot40\\text{ V}=200\\,\\mu$J.'
  },
  {
    id: 'phy11-par-m4-easy-mcq-1',
    module: 4,
    difficulty: 'easy',
    questionType: 25,
    content: 'Dòng điện $0,25$ A chạy trong $8$ s chuyển điện lượng',
    options: ['$0,031$ C', '$2$ C', '$8,25$ C', '$32$ C'],
    answer: 'B',
    explanation: '$q=It=0,25\\cdot8=2$ C.'
  },
  {
    id: 'phy11-par-m4-easy-mcq-2',
    module: 4,
    difficulty: 'easy',
    questionType: 26,
    content: 'Điện trở của dây đồng chất tăng khi',
    options: ['chiều dài tăng và tiết diện không đổi', 'chiều dài giảm', 'tiết diện tăng', 'điện trở suất giảm'],
    answer: 'A',
    explanation: '$R=\\rho l/S$ nên tăng chiều dài khi các đại lượng khác không đổi làm điện trở tăng.'
  },
  {
    id: 'phy11-par-m4-easy-mcq-3',
    module: 4,
    difficulty: 'easy',
    questionType: 28,
    content: 'Điện trở $10\\,\\Omega$ được đặt dưới hiệu điện thế $5$ V. Dòng điện bằng',
    options: ['$0,5$ A', '$2$ A', '$15$ A', '$50$ A'],
    answer: 'A',
    explanation: '$I=U/R=5/10=0,5$ A.'
  },
  {
    id: 'phy11-par-m4-easy-mcq-4',
    module: 4,
    difficulty: 'easy',
    questionType: 30,
    content: 'Đơn vị thường dùng để tính điện năng tiêu thụ của gia đình là',
    options: ['ampere', 'volt', 'kilowatt-hour', 'ohm'],
    answer: 'C',
    explanation: 'Điện năng sinh hoạt thường được đo bằng kilowatt-hour, kí hiệu kWh.'
  },
  {
    id: 'phy11-par-m4-medium-mcq-1',
    module: 4,
    difficulty: 'medium',
    questionType: 29,
    content: 'Nguồn có $\\mathcal E=4,5$ V, $r=0,5\\,\\Omega$ và dòng mạch kín $1$ A. Điện trở tải bằng',
    options: ['$0,5\\,\\Omega$', '$3,5\\,\\Omega$', '$4,0\\,\\Omega$', '$5,0\\,\\Omega$'],
    answer: 'C',
    explanation: '$R=\\mathcal E/I-r=4,5/1-0,5=4,0\\,\\Omega$.'
  },
  {
    id: 'phy11-par-m4-medium-short-1',
    module: 4,
    difficulty: 'medium',
    questionType: 25,
    content: 'Dòng điện $1,5$ A chạy trong $20$ s. Nhập điện lượng chuyển qua tiết diện dây theo C.',
    answer: '30',
    acceptedAnswers: ['30', '30.0', '30,0'],
    explanation: '$q=It=1,5\\cdot20=30$ C.'
  },
  {
    id: 'phy11-par-m4-medium-short-2',
    module: 4,
    difficulty: 'medium',
    questionType: 31,
    content: 'Hai điểm đo của nguồn là $(I_1;U_1)=(0,10\\text{ A};1,55\\text{ V})$ và $(I_2;U_2)=(0,60\\text{ A};1,30\\text{ V})$. Nhập điện trở trong theo $\\Omega$.',
    answer: '0.5',
    acceptedAnswers: ['0.5', '0,5', '0.50', '0,50'],
    explanation: '$r=(U_1-U_2)/(I_2-I_1)=0,25/0,50=0,50\\,\\Omega$.'
  },
  {
    id: 'phy11-par-m4-hard-short-1',
    module: 4,
    difficulty: 'hard',
    questionType: 29,
    content: 'Nguồn có $\\mathcal E=10$ V và $r=1\\,\\Omega$. Khi hiệu điện thế hai cực nguồn là $8$ V, nhập điện trở tải theo $\\Omega$.',
    answer: '4',
    acceptedAnswers: ['4', '4.0', '4,0'],
    explanation: '$I=(\\mathcal E-U)/r=(10-8)/1=2$ A; $R=U/I=8/2=4\\,\\Omega$.'
  }
];

const parallelChoicePosition = (index: number) =>
  parallelSeeds.slice(0, index).filter(seed => seed.options).length;
const parallelAnswer = (seed: ParallelSeed, index: number) =>
  seed.options ? letters[parallelChoicePosition(index) % letters.length] : seed.answer;
const parallelOptions = (seed: ParallelSeed, index: number) => {
  if (!seed.options) return undefined;
  const options = [...seed.options] as [string, string, string, string];
  const originalIndex = letters.indexOf(seed.answer as Choice);
  const balancedIndex = parallelChoicePosition(index) % letters.length;
  [options[originalIndex], options[balancedIndex]] = [
    options[balancedIndex],
    options[originalIndex]
  ];
  return options;
};

const parallelQuestions: CourseQuestion[] = parallelSeeds.map((seed, index) => {
  const metadata = questionTypeMetadata[seed.questionType];
  const isChoice = Boolean(seed.options);
  const answer = parallelAnswer(seed, index);
  return {
    id: seed.id,
    subjectId: 'physics',
    courseId: 'grade11:physics',
    moduleId: `phy11-m${seed.module}`,
    lessonId: `phy11-kntt-l${metadata.lesson}`,
    topicId: `phy11-t0${seed.module}`,
    questionTypeId: `phy11-qt${String(seed.questionType).padStart(2, '0')}`,
    content: seed.content,
    options: parallelOptions(seed, index),
    correctAnswer: answer,
    acceptedAnswers: isChoice
      ? [answer, answer.toLowerCase()]
      : seed.acceptedAnswers ?? [seed.answer, seed.answer.replace('.', ',')],
    responseType: isChoice ? 'single_choice' : 'short_answer',
    validatorType: isChoice ? 'choice' : 'number',
    points: isChoice ? 0.5 : 1.5,
    outcomeIds: [outcomeId(seed.module, metadata.outcome)],
    competency:
      metadata.competency ??
      (seed.difficulty === 'easy' ? 'physical_cognition' : 'physical_application'),
    cognitiveLevel:
      seed.difficulty === 'easy'
        ? 'recognition'
        : seed.difficulty === 'medium'
          ? 'understanding'
          : 'application',
    estimatedSeconds: isChoice ? (seed.difficulty === 'easy' ? 75 : 110) : seed.difficulty === 'hard' ? 300 : 180,
    difficulty: seed.difficulty,
    sourceType: 'mock_exam',
    variantGroupId: `phy11-parallel-qt${String(seed.questionType).padStart(2, '0')}`
  };
});

const parallelSolutions: CourseSolution[] = parallelSeeds.map((seed, index) => {
  const metadata = questionTypeMetadata[seed.questionType];
  const answer = parallelAnswer(seed, index);
  return {
    id: `solution-${seed.id}`,
    questionId: seed.id,
    courseId: 'grade11:physics',
    moduleId: `phy11-m${seed.module}`,
    recognition: `Câu bổ sung cho form song song của phy11-qt${String(seed.questionType).padStart(2, '0')}.`,
    detailedSteps: [
      {
        order: 1,
        title: 'Nhận dạng',
        explanation: 'Xác định mô hình vật lí, đổi đơn vị và chọn đúng quan hệ trước khi tính.'
      },
      {
        order: 2,
        title: 'Giải',
        explanation: seed.explanation,
        result: answer
      }
    ],
    finalAnswer: answer,
    commonMistakes: [
      'Dùng đúng công thức nhưng sai đơn vị hoặc sai điều kiện áp dụng.',
      'Không kiểm tra kết quả với giới hạn và ý nghĩa vật lí.'
    ],
    reviewSuggestions: [
      `Ôn lại ${outcomeId(seed.module, metadata.outcome)}.`,
      `Luyện thêm dạng phy11-qt${String(seed.questionType).padStart(2, '0')}.`
    ]
  };
});

const checkpointBQuestionIds: Record<number, string[]> = {
  1: [
    'phy11-sem-mid1-q01', 'phy11-sem-mid1-q02', 'phy11-sem-mid1-q03', 'phy11-sem-mid1-q04',
    'phy11-sem-mid1-q06', 'phy11-sem-mid1-q07', 'phy11-sem-mid1-q08', 'phy11-sem-mid1-q09',
    'phy11-par-m1-medium-short-1', 'phy11-par-m1-medium-short-2',
    'phy11-sem-mid1-q15', 'phy11-sem-mid1-q16'
  ],
  2: [
    'phy11-par-m2-easy-mcq-1', 'phy11-par-m2-easy-mcq-2', 'phy11-par-m2-easy-mcq-3', 'phy11-par-m2-easy-mcq-4',
    'phy11-sem-final1-q07', 'phy11-sem-final1-q08', 'phy11-sem-final1-q09', 'phy11-sem-final1-q10',
    'phy11-par-m2-medium-short-1', 'phy11-par-m2-medium-short-2',
    'phy11-sem-final1-q16', 'phy11-par-m2-hard-short-1'
  ],
  3: [
    'phy11-sem-mid2-q01', 'phy11-sem-mid2-q02', 'phy11-sem-mid2-q03', 'phy11-sem-mid2-q04',
    'phy11-sem-mid2-q06', 'phy11-sem-mid2-q07', 'phy11-sem-mid2-q08', 'phy11-sem-mid2-q09',
    'phy11-par-m3-medium-short-1', 'phy11-par-m3-medium-short-2',
    'phy11-sem-mid2-q15', 'phy11-sem-mid2-q16'
  ],
  4: [
    'phy11-par-m4-easy-mcq-1', 'phy11-par-m4-easy-mcq-2', 'phy11-par-m4-easy-mcq-3', 'phy11-par-m4-easy-mcq-4',
    'phy11-sem-final2-q07', 'phy11-sem-final2-q08', 'phy11-sem-final2-q09', 'phy11-sem-final2-q10',
    'phy11-par-m4-medium-short-1', 'phy11-par-m4-medium-short-2',
    'phy11-sem-final2-q16', 'phy11-par-m4-hard-short-1'
  ]
};

const checkpointBExams: MockExam[] = moduleSpecs.map(spec => ({
  id: `phy11-exam-m${spec.module}-checkpoint-b`,
  subjectId: 'physics',
  title: `Kiểm tra ${spec.title} · Mã B`,
  duration: 35,
  questionIds: checkpointBQuestionIds[spec.module],
  createdAt,
  kind: 'module_checkpoint',
  focus: 'mixed',
  difficultyBand: 'standard',
  targetScoreRange: { min: 5, max: 8 },
  parallelFormGroup: `phy11-m${spec.module}-checkpoint`,
  seriesOrder: spec.module,
  semester: spec.semester,
  scopeTopicIds: [`phy11-t0${spec.module}`],
  totalPoints: 10,
  formCode: 'B',
  instructions: [
    'Bài gồm 8 câu trắc nghiệm nhiều lựa chọn (4,0 điểm) và 4 câu trả lời ngắn (6,0 điểm).',
    'Đổi đơn vị về hệ phù hợp trước khi thay số; chỉ nhập giá trị số ở câu trả lời ngắn.',
    'Mã B tương đương mã A về phạm vi, cấu trúc điểm và độ khó.'
  ],
  resultReleasePolicy: 'after_submit',
  blueprintId: `phy11-blueprint-m${spec.module}-checkpoint-v1`,
  assessmentVersion: '1.1.0'
}));

const semesterBQuestionIds: Record<SemesterAssessmentSpec['id'], string[]> = {
  mid1: [
    'phy11-assess-m1-q01', 'phy11-assess-m1-q02', 'phy11-assess-m1-q03', 'phy11-assess-m1-q04',
    'phy11-assess-m1-q05', 'phy11-assess-m1-q06', 'phy11-assess-m1-q07', 'phy11-assess-m1-q08',
    'phy11-sem-final1-q01', 'phy11-sem-final1-q06',
    'phy11-par-m1-medium-mcq-1', 'phy11-par-m1-medium-mcq-2', 'phy11-par-m1-medium-mcq-3', 'phy11-par-m1-medium-mcq-4',
    'phy11-assess-m1-q11', 'phy11-assess-m1-q12'
  ],
  final1: [
    'phy11-assess-m1-q01', 'phy11-assess-m1-q02',
    'phy11-assess-m1-q05', 'phy11-assess-m1-q06', 'phy11-assess-m1-q07', 'phy11-assess-m1-q08',
    'phy11-assess-m2-q01', 'phy11-assess-m2-q02', 'phy11-assess-m2-q03',
    'phy11-assess-m2-q05', 'phy11-assess-m2-q06', 'phy11-assess-m2-q07', 'phy11-assess-m2-q08',
    'phy11-par-m2-medium-mcq-1',
    'phy11-assess-m1-q11', 'phy11-assess-m2-q11'
  ],
  mid2: [
    'phy11-assess-m3-q01', 'phy11-assess-m3-q02', 'phy11-assess-m3-q03', 'phy11-assess-m3-q04',
    'phy11-assess-m3-q05', 'phy11-assess-m3-q06', 'phy11-assess-m3-q07', 'phy11-assess-m3-q08',
    'phy11-sem-final2-q01', 'phy11-sem-final2-q06',
    'phy11-par-m3-medium-mcq-1', 'phy11-par-m3-medium-mcq-2', 'phy11-par-m3-medium-mcq-3', 'phy11-par-m3-medium-mcq-4',
    'phy11-assess-m3-q11', 'phy11-assess-m3-q12'
  ],
  final2: [
    'phy11-assess-m3-q01', 'phy11-assess-m3-q04',
    'phy11-assess-m3-q05', 'phy11-assess-m3-q06', 'phy11-assess-m3-q07', 'phy11-assess-m3-q08',
    'phy11-assess-m4-q01', 'phy11-assess-m4-q02', 'phy11-assess-m4-q03',
    'phy11-assess-m4-q05', 'phy11-assess-m4-q06', 'phy11-assess-m4-q07', 'phy11-assess-m4-q08',
    'phy11-par-m4-medium-mcq-1',
    'phy11-assess-m3-q11', 'phy11-assess-m4-q11'
  ]
};

const semesterBExams: MockExam[] = semesterSpecs.map(spec => ({
  id: `phy11-exam-${spec.id}-b`,
  subjectId: 'physics',
  title: `${spec.title} · Mã B`,
  duration: spec.duration,
  questionIds: semesterBQuestionIds[spec.id],
  createdAt,
  kind: spec.kind,
  focus: 'mixed',
  difficultyBand: 'standard',
  targetScoreRange: { min: 5, max: 8 },
  parallelFormGroup: `phy11-${spec.id}`,
  seriesOrder: spec.seriesOrder,
  semester: spec.semester,
  scopeTopicIds: Object.keys(spec.topicWeights),
  totalPoints: 10,
  formCode: 'B',
  instructions: [
    'Bài gồm 14 câu trắc nghiệm nhiều lựa chọn (7,0 điểm) và 2 câu trả lời ngắn (3,0 điểm).',
    'Không sử dụng tài liệu; đổi đơn vị và viết quan hệ vật lí ra nháp trước khi thay số.',
    'Mã B tương đương mã A về trọng số chương, cấu trúc điểm và độ khó.'
  ],
  resultReleasePolicy: 'after_submit',
  blueprintId: `phy11-blueprint-${spec.id}-v1`,
  assessmentVersion: '1.1.0'
}));

export const g11PhysicsAssessmentQuestions: CourseQuestion[] = [
  ...checkpointQuestions,
  ...semesterQuestions,
  ...parallelQuestions
];
export const g11PhysicsAssessmentSolutions: CourseSolution[] = [
  ...checkpointSolutions,
  ...semesterSolutions,
  ...parallelSolutions
];
export const g11PhysicsAssessmentBlueprints: AssessmentBlueprint[] = [
  ...checkpointBlueprints,
  ...semesterBlueprints
];
export const g11PhysicsAssessmentExams: MockExam[] = [
  ...checkpointExams,
  ...checkpointBExams,
  ...semesterExams,
  ...semesterBExams
];
