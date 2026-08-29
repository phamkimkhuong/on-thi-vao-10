import type { PracticeRole, Question, QuestionRepresentationType, Solution } from '@/types';

interface PhysicsRemediationSeed {
  id: string;
  subTypeId: string;
  outcomeIds: string[];
  content: string;
  difficulty: 'easy' | 'medium' | 'hard';
  cognitiveLevel: NonNullable<Question['cognitiveLevel']>;
  competency: NonNullable<Question['competency']>;
  practiceRole: PracticeRole;
  representationType: QuestionRepresentationType;
  correctAnswer: string;
  acceptedAnswers?: string[];
  options?: [string, string, string, string];
  estimatedSeconds: number;
  stimulus?: Question['stimulus'];
  reasoning: [string, string, ...string[]];
}

export const g10PhysicsModule1RemediationSeeds: PhysicsRemediationSeed[] = [
  {
    id: 'phy10-m1r-q001', subTypeId: 'phy10-qt10-st4', outcomeIds: ['PHY10-M1-O03'],
    content: 'Trong khoảng thời gian 0,04 s rất ngắn quanh một thời điểm, vật đi được 0,12 m. Tốc độ tức thời ước lượng bằng bao nhiêu m/s?',
    difficulty: 'medium', cognitiveLevel: 'application', competency: 'physical_cognition',
    practiceRole: 'guided', representationType: 'equation', correctAnswer: '3',
    acceptedAnswers: ['3', '3.0', '3,0'], estimatedSeconds: 45,
    reasoning: ['Với khoảng thời gian đủ ngắn, dùng tốc độ trung bình để ước lượng tốc độ tức thời.', '$v\\approx0{,}12/0{,}04=3$ m/s.']
  },
  {
    id: 'phy10-m1r-q002', subTypeId: 'phy10-qt10-st4', outcomeIds: ['PHY10-M1-O03'],
    content: 'Cổng quang bị che trong 0,010 s bởi một bản chắn dài 0,050 m. Tốc độ của bản chắn tại cổng gần nhất bằng bao nhiêu m/s?',
    difficulty: 'medium', cognitiveLevel: 'application', competency: 'physical_inquiry',
    practiceRole: 'near_transfer', representationType: 'experiment', correctAnswer: '5',
    acceptedAnswers: ['5', '5.0', '5,0'], estimatedSeconds: 50,
    reasoning: ['Trong thời gian che cổng, bản chắn đi được quãng đường bằng chiều dài của nó.', '$v\\approx0{,}050/0{,}010=5$ m/s.']
  },
  {
    id: 'phy10-m1r-q003', subTypeId: 'phy10-qt10-st4', outcomeIds: ['PHY10-M1-O03'],
    content: 'Để ước lượng vận tốc tại t=2,0 s, số liệu cho x(1,9 s)=7,22 m và x(2,1 s)=8,82 m. Giá trị ước lượng bằng bao nhiêu m/s?',
    difficulty: 'hard', cognitiveLevel: 'application', competency: 'physical_inquiry',
    practiceRole: 'far_transfer', representationType: 'table', correctAnswer: '8',
    acceptedAnswers: ['8', '8.0', '8,0'], estimatedSeconds: 75,
    stimulus: {
      id: 'phy10-m1r-st003', title: 'Dữ liệu đối xứng quanh thời điểm cần xét',
      dataTable: {
        caption: 'Tọa độ đo được',
        columns: [{ key: 't', label: 'Thời gian', unit: 's' }, { key: 'x', label: 'Tọa độ', unit: 'm' }],
        rows: [{ t: 1.9, x: 7.22 }, { t: 2.1, x: 8.82 }]
      }
    },
    reasoning: ['Dùng sai phân trung tâm quanh 2,0 s để giảm lệch do chỉ lấy một phía.', '$\\Delta x=8{,}82-7{,}22=1{,}60$ m và $\\Delta t=0{,}20$ s.', '$v(2{,}0)\\approx1{,}60/0{,}20=8$ m/s.']
  },
  {
    id: 'phy10-m1r-q004', subTypeId: 'phy10-qt10-st4', outcomeIds: ['PHY10-M1-O03'],
    content: 'Một cảm biến báo 22 m/s khi tốc độ tham chiếu là 20 m/s. Sai lệch tương đối của số chỉ bằng bao nhiêu phần trăm?',
    difficulty: 'hard', cognitiveLevel: 'application', competency: 'physical_inquiry',
    practiceRole: 'misconception_check', representationType: 'table', correctAnswer: '10',
    acceptedAnswers: ['10', '10%', '10.0', '10,0'], estimatedSeconds: 65,
    reasoning: ['Sai lệch tuyệt đối là $|22-20|=2$ m/s.', 'Chuẩn hóa theo giá trị tham chiếu: $2/20=0{,}10$.', 'Đổi sang phần trăm được 10%.']
  },
  {
    id: 'phy10-m1r-q005', subTypeId: 'phy10-qt10-st4', outcomeIds: ['PHY10-M1-O03'],
    content: 'Video 100 hình/giây cho tọa độ ở khung 29 là 1,42 m và khung 31 là 1,58 m. Tốc độ tại khung 30 ước lượng bằng bao nhiêu m/s?',
    difficulty: 'hard', cognitiveLevel: 'application', competency: 'physical_inquiry',
    practiceRole: 'mastery_holdout', representationType: 'table', correctAnswer: '8',
    acceptedAnswers: ['8', '8.0', '8,0'], estimatedSeconds: 80,
    reasoning: ['Hai khung 29 và 31 cách nhau hai khoảng hình, mỗi khoảng dài $1/100$ s.', '$\\Delta t=0{,}02$ s và $\\Delta x=1{,}58-1{,}42=0{,}16$ m.', 'Sai phân trung tâm cho $v\\approx0{,}16/0{,}02=8$ m/s.']
  },
  {
    id: 'phy10-m1r-q006', subTypeId: 'phy10-qt15-st1', outcomeIds: ['PHY10-M1-O08'],
    content: 'Trên đồ thị v–t, tại một thời điểm đường biểu diễn nằm dưới trục thời gian. Kết luận trực tiếp là',
    difficulty: 'easy', cognitiveLevel: 'understanding', competency: 'physical_cognition',
    practiceRole: 'guided', representationType: 'graph', correctAnswer: 'D',
    options: ['A. Vật chắc chắn chậm dần.', 'B. Gia tốc bằng 0.', 'C. Vật không chuyển động.', 'D. Vận tốc âm, vật chuyển động theo chiều âm đã chọn.'],
    estimatedSeconds: 35,
    reasoning: ['Vị trí dưới trục thời gian trên đồ thị v–t biểu thị $v<0$.', 'Dấu vận tốc cho biết chiều chuyển động, chưa tự cho biết nhanh dần hay chậm dần.']
  },
  {
    id: 'phy10-m1r-q007', subTypeId: 'phy10-qt15-st1', outcomeIds: ['PHY10-M1-O08'],
    content: 'Đồ thị v–t cắt trục thời gian tại t=3 s. Tại đúng thời điểm đó',
    difficulty: 'easy', cognitiveLevel: 'recognition', competency: 'physical_cognition',
    practiceRole: 'misconception_check', representationType: 'graph', correctAnswer: 'D',
    options: ['A. Tọa độ bằng 0.', 'B. Gia tốc chắc chắn bằng 0.', 'C. Quãng đường đã đi bằng 0.', 'D. Vận tốc tức thời bằng 0.'],
    estimatedSeconds: 35,
    reasoning: ['Trục thời gian của đồ thị v–t tương ứng mức $v=0$.', 'Giao điểm chỉ khẳng định vận tốc bằng 0, không xác định trực tiếp tọa độ hay quãng đường.']
  },
  {
    id: 'phy10-m1r-q008', subTypeId: 'phy10-qt15-st1', outcomeIds: ['PHY10-M1-O08'],
    content: 'Dựa vào bảng vận tốc, trong khoảng nào vật chuyển động theo chiều dương?',
    difficulty: 'medium', cognitiveLevel: 'understanding', competency: 'physical_cognition',
    practiceRole: 'representation_switch', representationType: 'table', correctAnswer: 'D',
    options: ['A. 0–1 s.', 'B. 1–2 s.', 'C. 0–2 s.', 'D. 2–4 s.'],
    estimatedSeconds: 50,
    stimulus: {
      id: 'phy10-m1r-st008', title: 'Vận tốc theo thời gian',
      dataTable: {
        caption: 'Các đoạn vận tốc không đổi',
        columns: [{ key: 'interval', label: 'Khoảng thời gian', unit: 's' }, { key: 'v', label: 'Vận tốc', unit: 'm/s' }],
        rows: [{ interval: '0–1', v: -3 }, { interval: '1–2', v: 0 }, { interval: '2–4', v: 2 }]
      }
    },
    reasoning: ['Vật chuyển động theo chiều dương khi vận tốc dương.', 'Chỉ khoảng 2–4 s có $v=2$ m/s lớn hơn 0.']
  },
  {
    id: 'phy10-m1r-q009', subTypeId: 'phy10-qt15-st1', outcomeIds: ['PHY10-M1-O08'],
    content: 'Vận tốc tại các mốc liên tiếp là +4; 0; −2; 0; +3 m/s và biến thiên liên tục giữa các mốc. Vật đổi chiều bao nhiêu lần?',
    difficulty: 'hard', cognitiveLevel: 'application', competency: 'physical_cognition',
    practiceRole: 'far_transfer', representationType: 'table', correctAnswer: '2',
    acceptedAnswers: ['2', '2.0', '2,0'], estimatedSeconds: 70,
    reasoning: ['Đổi chiều xảy ra khi vận tốc đi qua 0 và đổi dấu.', 'Dấu đổi từ dương sang âm một lần, rồi từ âm sang dương một lần.', 'Tổng cộng vật đổi chiều 2 lần.']
  },
  {
    id: 'phy10-m1r-q010', subTypeId: 'phy10-qt15-st1', outcomeIds: ['PHY10-M1-O08'],
    content: 'Hai thời điểm có vận tốc lần lượt −5 m/s và +5 m/s. Nhận xét đúng là',
    difficulty: 'hard', cognitiveLevel: 'understanding', competency: 'physical_cognition',
    practiceRole: 'mastery_holdout', representationType: 'graph', correctAnswer: 'D',
    options: ['A. Hai vận tốc bằng nhau.', 'B. Thời điểm đầu có tốc độ âm.', 'C. Hai thời điểm cùng chiều chuyển động.', 'D. Hai tốc độ bằng nhau nhưng hai vận tốc ngược dấu.'],
    estimatedSeconds: 60,
    reasoning: ['Tốc độ là độ lớn của vận tốc nên cả hai cùng bằng 5 m/s.', 'Dấu âm và dương biểu thị hai chiều ngược nhau trên trục chọn.', 'Vì vậy vận tốc không bằng nhau dù tốc độ bằng nhau.']
  },
  {
    id: 'phy10-m1r-q011', subTypeId: 'phy10-qt16-st2', outcomeIds: ['PHY10-M1-O09'],
    content: 'Vật rơi tự do từ nghỉ, lấy g=10 m/s². Quãng đường đi trong giây thứ hai bằng bao nhiêu mét?',
    difficulty: 'easy', cognitiveLevel: 'application', competency: 'physical_cognition',
    practiceRole: 'guided', representationType: 'equation', correctAnswer: '15',
    acceptedAnswers: ['15', '15.0', '15,0'], estimatedSeconds: 45,
    reasoning: ['Quãng đường sau 2 s là $s_2=5\\cdot2^2=20$ m; sau 1 s là $s_1=5$ m.', 'Trong giây thứ hai vật đi $20-5=15$ m.']
  },
  {
    id: 'phy10-m1r-q012', subTypeId: 'phy10-qt16-st2', outcomeIds: ['PHY10-M1-O09'],
    content: 'Vật rơi tự do từ nghỉ, g=10 m/s². Tỉ số quãng đường trong giây thứ ba và giây thứ nhất bằng bao nhiêu?',
    difficulty: 'easy', cognitiveLevel: 'application', competency: 'physical_cognition',
    practiceRole: 'near_transfer', representationType: 'equation', correctAnswer: '5',
    acceptedAnswers: ['5', '5.0', '5,0'], estimatedSeconds: 50,
    reasoning: ['Quãng đường trong giây thứ n là $s_n=5(2n-1)$.', '$s_3/s_1=25/5=5$.']
  },
  {
    id: 'phy10-m1r-q013', subTypeId: 'phy10-qt16-st2', outcomeIds: ['PHY10-M1-O09'],
    content: 'Vật rơi tự do từ nghỉ, g=10 m/s². Trong giây thứ n vật đi được 35 m. Giá trị n bằng bao nhiêu?',
    difficulty: 'medium', cognitiveLevel: 'application', competency: 'physical_cognition',
    practiceRole: 'misconception_check', representationType: 'equation', correctAnswer: '4',
    acceptedAnswers: ['4', '4.0', '4,0'], estimatedSeconds: 60,
    reasoning: ['Dùng $s_n=5(2n-1)$ cho quãng đường riêng trong giây thứ n.', 'Giải $5(2n-1)=35$ được $2n-1=7$, nên $n=4$.']
  },
  {
    id: 'phy10-m1r-q014', subTypeId: 'phy10-qt16-st2', outcomeIds: ['PHY10-M1-O09'],
    content: 'Vật rơi tự do từ nghỉ, g=10 m/s². Quãng đường trong giây thứ năm lớn hơn quãng đường trong giây thứ tư bao nhiêu mét?',
    difficulty: 'medium', cognitiveLevel: 'application', competency: 'physical_cognition',
    practiceRole: 'retention', representationType: 'equation', correctAnswer: '10',
    acceptedAnswers: ['10', '10.0', '10,0'], estimatedSeconds: 60,
    reasoning: ['$s_5=5(2\\cdot5-1)=45$ m và $s_4=5(2\\cdot4-1)=35$ m.', 'Hiệu là $45-35=10$ m.']
  },
  {
    id: 'phy10-m1r-q015', subTypeId: 'phy10-qt16-st2', outcomeIds: ['PHY10-M1-O09'],
    content: 'Vật rơi tự do từ nghỉ, g=10 m/s². Khi tổng quãng đường rơi đạt 80 m, quãng đường vật đi trong giây cuối cùng bằng bao nhiêu mét?',
    difficulty: 'hard', cognitiveLevel: 'application', competency: 'physical_application',
    practiceRole: 'mastery_holdout', representationType: 'equation', correctAnswer: '35',
    acceptedAnswers: ['35', '35.0', '35,0'], estimatedSeconds: 80,
    reasoning: ['Tổng quãng đường sau t giây là $s=5t^2$; giải $5t^2=80$ được $t=4$ s.', 'Giây cuối là giây thứ tư.', 'Quãng đường riêng trong giây thứ tư là $5(2\\cdot4-1)=35$ m.']
  },
  {
    id: 'phy10-m1r-q016', subTypeId: 'phy10-qt14-st1', outcomeIds: ['PHY10-M1-O07'],
    content: 'Vật có vận tốc đầu 3 m/s và gia tốc không đổi 2 m/s². Sau 4 s vận tốc bằng bao nhiêu m/s?',
    difficulty: 'medium', cognitiveLevel: 'application', competency: 'physical_cognition',
    practiceRole: 'guided', representationType: 'equation', correctAnswer: '11',
    acceptedAnswers: ['11', '11.0', '11,0'], estimatedSeconds: 45,
    reasoning: ['Dùng hệ thức $v=v_0+at$.', '$v=3+2\\cdot4=11$ m/s.']
  },
  {
    id: 'phy10-m1r-q017', subTypeId: 'phy10-qt14-st1', outcomeIds: ['PHY10-M1-O07'],
    content: 'Vật có $v_0=-2$ m/s, $a=3$ m/s². Sau bao lâu vận tốc đạt 10 m/s?',
    difficulty: 'medium', cognitiveLevel: 'application', competency: 'physical_cognition',
    practiceRole: 'near_transfer', representationType: 'equation', correctAnswer: '4',
    acceptedAnswers: ['4', '4.0', '4,0'], estimatedSeconds: 50,
    reasoning: ['Từ $v=v_0+at$, suy ra $t=(v-v_0)/a$.', '$t=[10-(-2)]/3=4$ s.']
  },
  {
    id: 'phy10-m1r-q018', subTypeId: 'phy10-qt14-st1', outcomeIds: ['PHY10-M1-O07'],
    content: 'Vận tốc biến thiên theo $v=12-3t$ (m/s). Thời điểm vận tốc bằng −6 m/s là bao nhiêu giây?',
    difficulty: 'hard', cognitiveLevel: 'application', competency: 'physical_cognition',
    practiceRole: 'far_transfer', representationType: 'equation', correctAnswer: '6',
    acceptedAnswers: ['6', '6.0', '6,0'], estimatedSeconds: 65,
    reasoning: ['Hệ thức có dạng $v=v_0+at$ với $v_0=12$ m/s và $a=-3$ m/s².', 'Đặt $12-3t=-6$.', 'Giải được $3t=18$, nên $t=6$ s.']
  },
  {
    id: 'phy10-m1r-q019', subTypeId: 'phy10-qt14-st1', outcomeIds: ['PHY10-M1-O07'],
    content: 'Ô tô đang chạy 36 km/h rồi tăng tốc đều 2 m/s² trong 5 s. Vận tốc cuối bằng bao nhiêu m/s?',
    difficulty: 'hard', cognitiveLevel: 'application', competency: 'physical_application',
    practiceRole: 'mastery_holdout', representationType: 'equation', correctAnswer: '20',
    acceptedAnswers: ['20', '20.0', '20,0'], estimatedSeconds: 70,
    reasoning: ['Đổi $36$ km/h thành $10$ m/s.', 'Độ tăng vận tốc là $at=2\\cdot5=10$ m/s.', 'Vận tốc cuối $v=10+10=20$ m/s.']
  },
  {
    id: 'phy10-m1r-q020', subTypeId: 'phy10-qt14-st2', outcomeIds: ['PHY10-M1-O07'],
    content: 'Vật chuyển động theo $x=5+4t+t^2$ (m, s). Tọa độ tại t=3 s bằng bao nhiêu mét?',
    difficulty: 'hard', cognitiveLevel: 'application', competency: 'physical_cognition',
    practiceRole: 'mastery_holdout', representationType: 'equation', correctAnswer: '26',
    acceptedAnswers: ['26', '26.0', '26,0'], estimatedSeconds: 60,
    reasoning: ['Phương trình đã cho tọa độ trực tiếp theo thời gian.', 'Thay $t=3$: $x=5+4\\cdot3+3^2$.', 'Tính được $x=5+12+9=26$ m.']
  },
  {
    id: 'phy10-m1r-q021', subTypeId: 'phy10-qt14-st3', outcomeIds: ['PHY10-M1-O07'],
    content: 'Vật có $v_0=2$ m/s, $v=6$ m/s và $a=2$ m/s². Độ dịch chuyển bằng bao nhiêu mét?',
    difficulty: 'easy', cognitiveLevel: 'application', competency: 'physical_cognition',
    practiceRole: 'guided', representationType: 'equation', correctAnswer: '8',
    acceptedAnswers: ['8', '8.0', '8,0'], estimatedSeconds: 40,
    reasoning: ['Dùng $v^2-v_0^2=2a\\Delta x$.', '$\\Delta x=(36-4)/4=8$ m.']
  },
  {
    id: 'phy10-m1r-q022', subTypeId: 'phy10-qt14-st3', outcomeIds: ['PHY10-M1-O07'],
    content: 'Xe hãm đều từ 20 m/s đến đứng yên với gia tốc −5 m/s². Quãng đường hãm bằng bao nhiêu mét?',
    difficulty: 'medium', cognitiveLevel: 'application', competency: 'physical_application',
    practiceRole: 'near_transfer', representationType: 'equation', correctAnswer: '40',
    acceptedAnswers: ['40', '40.0', '40,0'], estimatedSeconds: 55,
    reasoning: ['Dùng $v^2-v_0^2=2a\\Delta x$ với $v=0$.', '$-400=-10\\Delta x$, nên $\\Delta x=40$ m.']
  },
  {
    id: 'phy10-m1r-q023', subTypeId: 'phy10-qt14-st3', outcomeIds: ['PHY10-M1-O07'],
    content: 'Vật tăng tốc đều từ 5 m/s đến 13 m/s trên quãng đường 30 m. Gia tốc bằng bao nhiêu m/s²?',
    difficulty: 'hard', cognitiveLevel: 'application', competency: 'physical_cognition',
    practiceRole: 'mastery_holdout', representationType: 'equation', correctAnswer: '2.4',
    acceptedAnswers: ['2.4', '2,4', '2.40', '2,40'], estimatedSeconds: 75,
    reasoning: ['Chọn hệ thức không chứa thời gian: $v^2-v_0^2=2a\\Delta x$.', '$13^2-5^2=144$ và $2\\Delta x=60$.', '$a=144/60=2{,}4$ m/s².']
  },
  {
    id: 'phy10-m1r-q024', subTypeId: 'phy10-qt14-st4', outcomeIds: ['PHY10-M1-O07'],
    content: 'Vật có vận tốc đầu 10 m/s và gia tốc −2 m/s². Sau bao lâu vật dừng lại lần đầu?',
    difficulty: 'easy', cognitiveLevel: 'application', competency: 'physical_cognition',
    practiceRole: 'guided', representationType: 'equation', correctAnswer: '5',
    acceptedAnswers: ['5', '5.0', '5,0'], estimatedSeconds: 40,
    reasoning: ['Tại thời điểm dừng, $v=0$.', '$0=10-2t$ nên $t=5$ s.']
  },
  {
    id: 'phy10-m1r-q025', subTypeId: 'phy10-qt14-st4', outcomeIds: ['PHY10-M1-O07'],
    content: 'Vật xuất phát từ x=0 với $v_0=10$ m/s, $a=-2$ m/s². Sau bao lâu vật trở lại vị trí ban đầu, không kể t=0?',
    difficulty: 'medium', cognitiveLevel: 'application', competency: 'physical_cognition',
    practiceRole: 'near_transfer', representationType: 'equation', correctAnswer: '10',
    acceptedAnswers: ['10', '10.0', '10,0'], estimatedSeconds: 60,
    reasoning: ['Độ dịch chuyển là $\\Delta x=10t-t^2$.', 'Đặt $\\Delta x=0$: $t(10-t)=0$.', 'Ngoài nghiệm $t=0$, nghiệm cần tìm là $t=10$ s.']
  },
  {
    id: 'phy10-m1r-q026', subTypeId: 'phy10-qt14-st4', outcomeIds: ['PHY10-M1-O07'],
    content: 'Vật có $v_0=6$ m/s, $a=-2$ m/s². Quãng đường đi được trong 8 s bằng bao nhiêu mét?',
    difficulty: 'hard', cognitiveLevel: 'application', competency: 'physical_application',
    practiceRole: 'mastery_holdout', representationType: 'equation', correctAnswer: '34',
    acceptedAnswers: ['34', '34.0', '34,0'], estimatedSeconds: 90,
    reasoning: ['Vật đổi chiều khi $v=6-2t=0$, tức tại $t=3$ s; khi đó $x=6\\cdot3-3^2=9$ m.', 'Tại $t=8$ s, $x=6\\cdot8-8^2=-16$ m.', 'Quãng đường là $|9-0|+|-16-9|=9+25=34$ m.']
  },
  {
    id: 'phy10-m1r-q027', subTypeId: 'phy10-qt14-st5', outcomeIds: ['PHY10-M1-O07'],
    content: 'Xe đi đều 5 m/s trong 10 s rồi đứng yên 5 s. Tổng quãng đường bằng bao nhiêu mét?',
    difficulty: 'easy', cognitiveLevel: 'application', competency: 'physical_cognition',
    practiceRole: 'guided', representationType: 'text', correctAnswer: '50',
    acceptedAnswers: ['50', '50.0', '50,0'], estimatedSeconds: 40,
    reasoning: ['Chặng chuyển động có quãng đường $5\\cdot10=50$ m.', 'Trong thời gian đứng yên quãng đường tăng thêm bằng 0.']
  },
  {
    id: 'phy10-m1r-q028', subTypeId: 'phy10-qt14-st5', outcomeIds: ['PHY10-M1-O07'],
    content: 'Xe khởi hành từ nghỉ, tăng tốc đều 2 m/s² trong 4 s rồi đi đều thêm 6 s. Tổng quãng đường bằng bao nhiêu mét?',
    difficulty: 'medium', cognitiveLevel: 'application', competency: 'physical_application',
    practiceRole: 'near_transfer', representationType: 'equation', correctAnswer: '64',
    acceptedAnswers: ['64', '64.0', '64,0'], estimatedSeconds: 65,
    reasoning: ['Chặng đầu: $s_1=at^2/2=16$ m và vận tốc cuối $v=8$ m/s.', 'Chặng đều: $s_2=8\\cdot6=48$ m.', 'Tổng quãng đường $s=16+48=64$ m.']
  },
  {
    id: 'phy10-m1r-q029', subTypeId: 'phy10-qt14-st5', outcomeIds: ['PHY10-M1-O07'],
    content: 'Vật có $v_0=2$ m/s, tăng tốc 1 m/s² trong 4 s rồi hãm với độ lớn gia tốc 2 m/s² đến khi dừng. Tổng quãng đường bằng bao nhiêu mét?',
    difficulty: 'medium', cognitiveLevel: 'application', competency: 'physical_application',
    practiceRole: 'retention', representationType: 'equation', correctAnswer: '25',
    acceptedAnswers: ['25', '25.0', '25,0'], estimatedSeconds: 75,
    reasoning: ['Chặng đầu: $v=6$ m/s và $s_1=2\\cdot4+4^2/2=16$ m.', 'Chặng hãm: $0-6^2=2(-2)s_2$, nên $s_2=9$ m.', 'Tổng quãng đường là $16+9=25$ m.']
  },
  {
    id: 'phy10-m1r-q030', subTypeId: 'phy10-qt17-st1', outcomeIds: ['PHY10-M1-O10'],
    content: 'Vật được ném ngang từ độ cao 45 m, lấy g=10 m/s². Thời gian chạm đất bằng bao nhiêu giây?',
    difficulty: 'medium', cognitiveLevel: 'application', competency: 'physical_cognition',
    practiceRole: 'guided', representationType: 'diagram', correctAnswer: '3',
    acceptedAnswers: ['3', '3.0', '3,0'], estimatedSeconds: 50,
    reasoning: ['Chuyển động theo phương thẳng đứng là rơi tự do: $h=gt^2/2$.', '$45=5t^2$ nên $t=3$ s.']
  },
  {
    id: 'phy10-m1r-q031', subTypeId: 'phy10-qt17-st1', outcomeIds: ['PHY10-M1-O10'],
    content: 'Vật ném ngang từ độ cao 80 m, g=10 m/s². Thời gian rơi bằng bao nhiêu giây?',
    difficulty: 'medium', cognitiveLevel: 'application', competency: 'physical_cognition',
    practiceRole: 'near_transfer', representationType: 'equation', correctAnswer: '4',
    acceptedAnswers: ['4', '4.0', '4,0'], estimatedSeconds: 45,
    reasoning: ['$t=\\sqrt{2h/g}$.', '$t=\\sqrt{160/10}=4$ s.']
  },
  {
    id: 'phy10-m1r-q032', subTypeId: 'phy10-qt17-st1', outcomeIds: ['PHY10-M1-O10'],
    content: 'Một vật ném ngang chạm đất sau 3,5 s. Lấy g=10 m/s². Độ cao nơi ném bằng bao nhiêu mét?',
    difficulty: 'hard', cognitiveLevel: 'application', competency: 'physical_application',
    practiceRole: 'far_transfer', representationType: 'equation', correctAnswer: '61.25',
    acceptedAnswers: ['61.25', '61,25'], estimatedSeconds: 65,
    reasoning: ['Theo phương thẳng đứng, vận tốc đầu bằng 0.', 'Độ cao $h=gt^2/2=5\\cdot3{,}5^2$.', 'Suy ra $h=61{,}25$ m.']
  },
  {
    id: 'phy10-m1r-q033', subTypeId: 'phy10-qt17-st1', outcomeIds: ['PHY10-M1-O10'],
    content: 'Từ độ cao 20 m, vật được ném thẳng đứng lên với thành phần vận tốc đầu 10 m/s. Lấy g=10 m/s². Thời gian chạm đất gần nhất bằng bao nhiêu giây?',
    difficulty: 'hard', cognitiveLevel: 'application', competency: 'physical_application',
    practiceRole: 'mastery_holdout', representationType: 'diagram', correctAnswer: '3.24',
    acceptedAnswers: ['3.24', '3,24', '3.236', '3,236'], estimatedSeconds: 90,
    reasoning: ['Chọn chiều dương lên, phương trình độ cao là $y=20+10t-5t^2$.', 'Khi chạm đất: $5t^2-10t-20=0$, hay $t^2-2t-4=0$.', 'Nghiệm dương $t=1+\\sqrt5\\approx3{,}24$ s.']
  },
  {
    id: 'phy10-m1r-q034', subTypeId: 'phy10-qt17-st2', outcomeIds: ['PHY10-M1-O10'],
    content: 'Vật ném ngang với tốc độ 10 m/s và bay trong 2 s. Tầm xa bằng bao nhiêu mét?',
    difficulty: 'easy', cognitiveLevel: 'application', competency: 'physical_cognition',
    practiceRole: 'guided', representationType: 'equation', correctAnswer: '20',
    acceptedAnswers: ['20', '20.0', '20,0'], estimatedSeconds: 35,
    reasoning: ['Theo phương ngang vật chuyển động đều.', '$L=v_xt=10\\cdot2=20$ m.']
  },
  {
    id: 'phy10-m1r-q035', subTypeId: 'phy10-qt17-st2', outcomeIds: ['PHY10-M1-O10'],
    content: 'Vật ném ngang từ độ cao 20 m với tốc độ 15 m/s, g=10 m/s². Tầm xa bằng bao nhiêu mét?',
    difficulty: 'hard', cognitiveLevel: 'application', competency: 'physical_application',
    practiceRole: 'far_transfer', representationType: 'diagram', correctAnswer: '30',
    acceptedAnswers: ['30', '30.0', '30,0'], estimatedSeconds: 75,
    reasoning: ['Thời gian rơi $t=\\sqrt{2h/g}=\\sqrt{40/10}=2$ s.', 'Chuyển động ngang đều với $v_x=15$ m/s.', 'Tầm xa $L=15\\cdot2=30$ m.']
  },
  {
    id: 'phy10-m1r-q036', subTypeId: 'phy10-qt17-st2', outcomeIds: ['PHY10-M1-O10'],
    content: 'Vật được ném với các thành phần vận tốc đầu $v_{0x}=12$ m/s, $v_{0y}=16$ m/s. Sau 2 s, lấy g=10 m/s², khoảng cách từ vật đến điểm ném gần nhất bằng bao nhiêu mét?',
    difficulty: 'hard', cognitiveLevel: 'application', competency: 'physical_application',
    practiceRole: 'mastery_holdout', representationType: 'equation', correctAnswer: '26.83',
    acceptedAnswers: ['26.83', '26,83', '12sqrt(5)', '12\\sqrt{5}'], estimatedSeconds: 95,
    reasoning: ['Sau 2 s, độ dịch chuyển ngang $x=12\\cdot2=24$ m.', 'Độ dịch chuyển đứng $y=16\\cdot2-5\\cdot2^2=12$ m.', 'Khoảng cách $\\sqrt{24^2+12^2}=12\\sqrt5\\approx26{,}83$ m.']
  },
  {
    id: 'phy10-m1r-q037', subTypeId: 'phy10-qt17-st3', outcomeIds: ['PHY10-M1-O10'],
    content: 'Vật ném ngang với $v_x=6$ m/s. Sau 1 s, g=10 m/s², độ lớn vận tốc gần nhất bằng bao nhiêu m/s?',
    difficulty: 'easy', cognitiveLevel: 'application', competency: 'physical_cognition',
    practiceRole: 'guided', representationType: 'equation', correctAnswer: '11.66',
    acceptedAnswers: ['11.66', '11,66', 'sqrt(136)', '\\sqrt{136}'], estimatedSeconds: 45,
    reasoning: ['$v_y=-gt=-10$ m/s còn $v_x=6$ m/s.', '$v=\\sqrt{6^2+10^2}=\\sqrt{136}\\approx11{,}66$ m/s.']
  },
  {
    id: 'phy10-m1r-q038', subTypeId: 'phy10-qt17-st3', outcomeIds: ['PHY10-M1-O10'],
    content: 'Vật có $v_x=8$ m/s, $v_{0y}=15$ m/s. Sau 2 s, g=10 m/s², góc vận tốc chếch xuống so với phương ngang gần nhất bằng bao nhiêu độ?',
    difficulty: 'medium', cognitiveLevel: 'application', competency: 'physical_application',
    practiceRole: 'near_transfer', representationType: 'diagram', correctAnswer: '32',
    acceptedAnswers: ['32', '32.0', '32,0', '32.01', '32,01'], estimatedSeconds: 70,
    reasoning: ['$v_y=15-10\\cdot2=-5$ m/s nên vận tốc chếch xuống.', '$\\tan\\alpha=|v_y|/v_x=5/8$.', '$\\alpha\\approx32^\\circ$.']
  },
  {
    id: 'phy10-m1r-q039', subTypeId: 'phy10-qt17-st3', outcomeIds: ['PHY10-M1-O10'],
    content: 'Vật ném ngang từ độ cao 45 m với $v_x=10$ m/s, g=10 m/s². Tốc độ ngay trước khi chạm đất gần nhất bằng bao nhiêu m/s?',
    difficulty: 'hard', cognitiveLevel: 'application', competency: 'physical_application',
    practiceRole: 'far_transfer', representationType: 'diagram', correctAnswer: '31.62',
    acceptedAnswers: ['31.62', '31,62', '10sqrt(10)', '10\\sqrt{10}'], estimatedSeconds: 80,
    reasoning: ['Thời gian rơi là 3 s nên $|v_y|=gt=30$ m/s.', 'Thành phần ngang không đổi, $v_x=10$ m/s.', 'Tốc độ $v=\\sqrt{10^2+30^2}=10\\sqrt{10}\\approx31{,}62$ m/s.']
  },
  {
    id: 'phy10-m1r-q040', subTypeId: 'phy10-qt17-st3', outcomeIds: ['PHY10-M1-O10'],
    content: 'Vật được ném từ mặt đất với $v_{0x}=15$ m/s, $v_{0y}=20$ m/s, g=10 m/s². Góc vận tốc khi trở lại mặt đất so với phương ngang gần nhất bằng bao nhiêu độ?',
    difficulty: 'hard', cognitiveLevel: 'application', competency: 'physical_application',
    practiceRole: 'mastery_holdout', representationType: 'diagram', correctAnswer: '53.13',
    acceptedAnswers: ['53.13', '53,13', '53.1', '53,1'], estimatedSeconds: 85,
    reasoning: ['Bỏ qua cản, khi trở lại cùng độ cao thì $v_x=15$ m/s và $v_y=-20$ m/s.', 'Độ lớn góc thỏa $\\tan\\alpha=20/15=4/3$.', '$\\alpha\\approx53{,}13^\\circ$, hướng chếch xuống.']
  },
  {
    id: 'phy10-m1r-q041', subTypeId: 'phy10-qt17-st4', outcomeIds: ['PHY10-M1-O10'],
    content: 'Vật có phương trình $x=12t$, $y=15t-5t^2$. Trong phương trình quỹ đạo $y=ax+bx^2$, hệ số b bằng bao nhiêu?',
    difficulty: 'medium', cognitiveLevel: 'application', competency: 'physical_cognition',
    practiceRole: 'representation_switch', representationType: 'equation', correctAnswer: '-5/144',
    acceptedAnswers: ['-5/144', '-0.034722', '-0,034722'], estimatedSeconds: 70,
    reasoning: ['Từ $x=12t$ suy ra $t=x/12$.', 'Thay vào y: $y=15x/12-5(x/12)^2$.', 'Do đó hệ số của $x^2$ là $b=-5/144$.']
  },
  {
    id: 'phy10-m1r-q042', subTypeId: 'phy10-qt17-st5', outcomeIds: ['PHY10-M1-O10'],
    content: 'Hai vật được ném ngang cùng lúc từ cùng độ cao nhưng có tốc độ ngang khác nhau. Bỏ qua cản không khí, đại lượng nào bằng nhau?',
    difficulty: 'easy', cognitiveLevel: 'understanding', competency: 'physical_cognition',
    practiceRole: 'guided', representationType: 'diagram', correctAnswer: 'D',
    options: ['A. Tầm xa.', 'B. Tốc độ chạm đất.', 'C. Độ dịch chuyển ngang.', 'D. Thời gian chạm đất.'],
    estimatedSeconds: 40,
    reasoning: ['Chuyển động thẳng đứng của hai vật có cùng độ cao và cùng vận tốc đầu đứng bằng 0.', 'Thời gian rơi không phụ thuộc tốc độ ngang nên bằng nhau.']
  },
  {
    id: 'phy10-m1r-q043', subTypeId: 'phy10-qt17-st5', outcomeIds: ['PHY10-M1-O10'],
    content: 'Hai vật được ném từ mặt đất với cùng tốc độ, góc ném 30° và 60°, cùng g. Bỏ qua cản. So sánh tầm xa.',
    difficulty: 'medium', cognitiveLevel: 'understanding', competency: 'physical_cognition',
    practiceRole: 'near_transfer', representationType: 'equation', correctAnswer: 'D',
    options: ['A. Góc 60° xa gấp đôi.', 'B. Góc 30° xa gấp đôi.', 'C. Góc 60° xa gấp căn ba.', 'D. Hai tầm xa bằng nhau.'],
    estimatedSeconds: 55,
    reasoning: ['Tầm xa $R=v_0^2\\sin(2\\alpha)/g$.', 'Với 30° và 60°, các góc kép là 60° và 120° có cùng sin.']
  },
  {
    id: 'phy10-m1r-q044', subTypeId: 'phy10-qt17-st5', outcomeIds: ['PHY10-M1-O10'],
    content: 'Hai vật được ném từ mặt đất với cùng tốc độ ở góc 30° và 60°. Tỉ số thời gian bay $T_{60}/T_{30}$ bằng bao nhiêu?',
    difficulty: 'hard', cognitiveLevel: 'application', competency: 'physical_application',
    practiceRole: 'mastery_holdout', representationType: 'equation', correctAnswer: '1.732',
    acceptedAnswers: ['1.732', '1,732', 'sqrt(3)', '\\sqrt{3}'], estimatedSeconds: 75,
    reasoning: ['Thời gian bay $T=2v_0\\sin\\alpha/g$.', 'Tỉ số bằng $\\sin60^\\circ/\\sin30^\\circ$.', 'Suy ra $T_{60}/T_{30}=\\sqrt3\\approx1{,}732$.']
  },
  {
    id: 'phy10-m1r-q045', subTypeId: 'phy10-qt18-st1', outcomeIds: ['PHY10-M1-O11'],
    content: 'Cổng quang dùng bản chắn có chiều dài sai số tỉ đối 1% và thời gian che cổng sai số tỉ đối 2%. Sai số tỉ đối của tốc độ xấp xỉ bao nhiêu phần trăm?',
    difficulty: 'hard', cognitiveLevel: 'application', competency: 'physical_inquiry',
    practiceRole: 'far_transfer', representationType: 'experiment', correctAnswer: '3',
    acceptedAnswers: ['3', '3%', '3.0', '3,0'], estimatedSeconds: 65,
    reasoning: ['Tốc độ được tính bằng thương $v=l/\\Delta t$.', 'Sai số tỉ đối cực đại của thương bằng tổng sai số tỉ đối.', '$\\delta_v\\approx1\\%+2\\%=3\\%$.']
  },
  {
    id: 'phy10-m1r-q046', subTypeId: 'phy10-qt18-st1', outcomeIds: ['PHY10-M1-O11'],
    content: 'Video 60 hình/giây cho vật dịch chuyển 120 pixel trong 30 khoảng hình. Thước chuẩn cho 1 pixel ứng với 2 mm. Tốc độ bằng bao nhiêu m/s?',
    difficulty: 'hard', cognitiveLevel: 'application', competency: 'physical_inquiry',
    practiceRole: 'mastery_holdout', representationType: 'table', correctAnswer: '0.48',
    acceptedAnswers: ['0.48', '0,48'], estimatedSeconds: 80,
    reasoning: ['Quãng đường thật là $120\\cdot2=240$ mm = 0,24 m.', 'Thời gian của 30 khoảng hình là $30/60=0{,}5$ s.', 'Tốc độ $v=0{,}24/0{,}5=0{,}48$ m/s.']
  },
  {
    id: 'phy10-m1r-q047', subTypeId: 'phy10-qt18-st2', outcomeIds: ['PHY10-M1-O12'],
    content: 'Để xác định gia tốc rơi tự do bằng cổng quang, bộ dữ liệu cần thiết nhất là',
    difficulty: 'easy', cognitiveLevel: 'understanding', competency: 'physical_inquiry',
    practiceRole: 'guided', representationType: 'experiment', correctAnswer: 'D',
    options: ['A. Chỉ khối lượng vật.', 'B. Chỉ nhiệt độ phòng.', 'C. Màu sắc vật và chiều dài dây.', 'D. Các mốc vị trí hoặc vận tốc cùng thời gian tương ứng.'],
    estimatedSeconds: 40,
    reasoning: ['Gia tốc mô tả sự biến thiên vận tốc theo thời gian hoặc vị trí theo thời gian.', 'Cần các cặp dữ liệu động học tương ứng để suy ra g.']
  },
  {
    id: 'phy10-m1r-q048', subTypeId: 'phy10-qt18-st2', outcomeIds: ['PHY10-M1-O12'],
    content: 'Vật rơi từ nghỉ qua độ cao 1,25 m trong 0,50 s. Bỏ qua cản, giá trị g suy ra bằng bao nhiêu m/s²?',
    difficulty: 'medium', cognitiveLevel: 'application', competency: 'physical_inquiry',
    practiceRole: 'near_transfer', representationType: 'equation', correctAnswer: '10',
    acceptedAnswers: ['10', '10.0', '10,0'], estimatedSeconds: 55,
    reasoning: ['Dùng $h=gt^2/2$.', '$g=2h/t^2=2\\cdot1{,}25/0{,}50^2=10$ m/s².']
  },
  {
    id: 'phy10-m1r-q049', subTypeId: 'phy10-qt18-st2', outcomeIds: ['PHY10-M1-O12'],
    content: 'Một phép đo rơi tự do cho h=0,80 m và t=0,41 s. Giá trị g suy ra gần nhất bằng bao nhiêu m/s²?',
    difficulty: 'hard', cognitiveLevel: 'application', competency: 'physical_inquiry',
    practiceRole: 'far_transfer', representationType: 'table', correctAnswer: '9.52',
    acceptedAnswers: ['9.52', '9,52'], estimatedSeconds: 70,
    reasoning: ['Với vật thả từ nghỉ, $g=2h/t^2$.', 'Tính $2h=1{,}60$ m và $t^2=0{,}1681$ s².', '$g=1{,}60/0{,}1681\\approx9{,}52$ m/s².']
  },
  {
    id: 'phy10-m1r-q050', subTypeId: 'phy10-qt18-st2', outcomeIds: ['PHY10-M1-O12'],
    content: 'Trong phép đo $g=2h/t^2$, h có sai số tỉ đối 1% và t có sai số tỉ đối 2%. Sai số tỉ đối của g xấp xỉ bao nhiêu phần trăm?',
    difficulty: 'hard', cognitiveLevel: 'application', competency: 'physical_inquiry',
    practiceRole: 'mastery_holdout', representationType: 'equation', correctAnswer: '5',
    acceptedAnswers: ['5', '5%', '5.0', '5,0'], estimatedSeconds: 75,
    reasoning: ['Hệ số 2 được xem chính xác; h có lũy thừa 1 và t có lũy thừa −2.', 'Quy tắc cực đại: $\\delta_g\\approx\\delta_h+2\\delta_t$.', '$\\delta_g\\approx1\\%+2\\cdot2\\%=5\\%$.']
  },
  {
    id: 'phy10-m1r-q051', subTypeId: 'phy10-qt18-st3', outcomeIds: ['PHY10-M1-O11'],
    content: 'Bảng cho vận tốc tại t=0; 1; 2 s lần lượt là 2; 5; 8 m/s. Gia tốc trung bình trong 2 s bằng bao nhiêu m/s²?',
    difficulty: 'medium', cognitiveLevel: 'application', competency: 'physical_inquiry',
    practiceRole: 'representation_switch', representationType: 'table', correctAnswer: '3',
    acceptedAnswers: ['3', '3.0', '3,0'], estimatedSeconds: 50,
    stimulus: {
      id: 'phy10-m1r-st051', title: 'Dữ liệu vận tốc',
      dataTable: {
        caption: 'Vận tốc theo thời gian',
        columns: [{ key: 't', label: 't', unit: 's' }, { key: 'v', label: 'v', unit: 'm/s' }],
        rows: [{ t: 0, v: 2 }, { t: 1, v: 5 }, { t: 2, v: 8 }]
      }
    },
    reasoning: ['Dùng hai mốc đầu và cuối của khoảng xét.', '$a_{tb}=(8-2)/(2-0)=3$ m/s².']
  },
  {
    id: 'phy10-m1r-q052', subTypeId: 'phy10-qt18-st3', outcomeIds: ['PHY10-M1-O11'],
    content: 'Dữ liệu nhiễu cho v(0,2 s)=1,4 m/s và v(1,8 s)=6,2 m/s. Gia tốc trung bình trên khoảng này bằng bao nhiêu m/s²?',
    difficulty: 'hard', cognitiveLevel: 'application', competency: 'physical_inquiry',
    practiceRole: 'mastery_holdout', representationType: 'table', correctAnswer: '3',
    acceptedAnswers: ['3', '3.0', '3,0'], estimatedSeconds: 70,
    reasoning: ['Khoảng thời gian là $1{,}8-0{,}2=1{,}6$ s.', 'Độ biến thiên vận tốc là $6{,}2-1{,}4=4{,}8$ m/s.', '$a_{tb}=4{,}8/1{,}6=3$ m/s².']
  },
  {
    id: 'phy10-m1r-q053', subTypeId: 'phy10-qt18-st4', outcomeIds: ['PHY10-M1-O12'],
    content: 'Một giá trị đo khác xa các giá trị còn lại. Hành động đầu tiên phù hợp là',
    difficulty: 'easy', cognitiveLevel: 'understanding', competency: 'physical_inquiry',
    practiceRole: 'guided', representationType: 'text', correctAnswer: 'D',
    options: ['A. Xóa ngay.', 'B. Sửa về gần trung bình.', 'C. Chỉ giữ giá trị đó.', 'D. Kiểm tra ghi chép, điều kiện và đo lại trước khi quyết định.'],
    estimatedSeconds: 35,
    reasoning: ['Một điểm khác biệt là tín hiệu cần điều tra, không tự động là dữ liệu sai.', 'Kiểm tra quy trình và đo lại cung cấp căn cứ cho quyết định xử lí.']
  },
  {
    id: 'phy10-m1r-q054', subTypeId: 'phy10-qt18-st4', outcomeIds: ['PHY10-M1-O12'],
    content: 'Ba giá trị đo g là 9,7; 9,8 và 9,9 m/s². Giá trị trung bình bằng bao nhiêu m/s²?',
    difficulty: 'medium', cognitiveLevel: 'application', competency: 'physical_inquiry',
    practiceRole: 'near_transfer', representationType: 'table', correctAnswer: '9.8',
    acceptedAnswers: ['9.8', '9,8'], estimatedSeconds: 45,
    reasoning: ['Cộng các giá trị được 29,4 m/s².', 'Chia cho 3 được $9{,}8$ m/s².']
  },
  {
    id: 'phy10-m1r-q055', subTypeId: 'phy10-qt18-st4', outcomeIds: ['PHY10-M1-O12'],
    content: 'Nhiều lần đo g rất chụm quanh 10,2 m/s² trong khi giá trị tham chiếu là 9,8 m/s². Nguyên nhân đáng kiểm tra nhất là',
    difficulty: 'medium', cognitiveLevel: 'understanding', competency: 'physical_inquiry',
    practiceRole: 'misconception_check', representationType: 'experiment', correctAnswer: 'D',
    options: ['A. Sai số ngẫu nhiên rất lớn.', 'B. Không có sai số nào.', 'C. Thiếu chữ số có nghĩa.', 'D. Sai lệch hệ thống do hiệu chuẩn hoặc mốc thời gian.'],
    estimatedSeconds: 55,
    reasoning: ['Dữ liệu chụm cho thấy dao động ngẫu nhiên nhỏ.', 'Cả nhóm lệch cùng chiều so với tham chiếu gợi ý sai số hệ thống cần kiểm tra.']
  },
  {
    id: 'phy10-m1r-q056', subTypeId: 'phy10-qt18-st4', outcomeIds: ['PHY10-M1-O12'],
    content: 'Bộ A có trung bình 9,8 và độ phân tán 0,2; bộ B có trung bình 9,5 và độ phân tán 0,02, giá trị tham chiếu 9,8. Nhận xét đúng là',
    difficulty: 'medium', cognitiveLevel: 'understanding', competency: 'physical_inquiry',
    practiceRole: 'retention', representationType: 'table', correctAnswer: 'D',
    options: ['A. B vừa đúng vừa chụm hơn.', 'B. A chụm hơn B.', 'C. Hai bộ tương đương hoàn toàn.', 'D. B chụm hơn nhưng A gần giá trị tham chiếu hơn.'],
    estimatedSeconds: 65,
    reasoning: ['Độ phân tán 0,02 nhỏ hơn 0,2 nên B chụm hơn.', 'Trung bình A bằng giá trị tham chiếu, còn B lệch 0,3.', 'Vì vậy độ chụm và độ đúng dẫn đến hai kết luận khác nhau.']
  },
  {
    id: 'phy10-m1r-q057', subTypeId: 'phy10-qt18-st5', outcomeIds: ['PHY10-M1-O12'],
    content: 'Để giảm ảnh hưởng thời gian phản xạ khi đo thời gian rơi bằng tay, cải tiến đơn giản nhất là',
    difficulty: 'easy', cognitiveLevel: 'understanding', competency: 'physical_inquiry',
    practiceRole: 'guided', representationType: 'experiment', correctAnswer: 'D',
    options: ['A. Giảm độ cao xuống rất nhỏ.', 'B. Chỉ đo một lần.', 'C. Làm tròn trước khi bấm giờ.', 'D. Dùng cảm biến/cổng quang hoặc video và lặp phép đo.'],
    estimatedSeconds: 40,
    reasoning: ['Phản xạ người đo có thể lớn so với thời gian rơi ngắn.', 'Cảm biến hoặc video tự động hóa mốc thời gian; phép đo lặp giúp đánh giá độ phân tán.']
  },
  {
    id: 'phy10-m1r-q058', subTypeId: 'phy10-qt18-st5', outcomeIds: ['PHY10-M1-O11'],
    content: 'Khảo sát gia tốc xe trên máng nghiêng theo góc nghiêng. Thiết kế nào kiểm soát biến tốt nhất?',
    difficulty: 'medium', cognitiveLevel: 'application', competency: 'physical_inquiry',
    practiceRole: 'near_transfer', representationType: 'experiment', correctAnswer: 'D',
    options: ['A. Mỗi góc dùng một xe khác nhau.', 'B. Thay đồng thời góc và khối lượng xe.', 'C. Chỉ đo ở một góc.', 'D. Dùng cùng xe, cùng mặt máng, thay từng góc và lặp phép đo gia tốc.'],
    estimatedSeconds: 55,
    reasoning: ['Góc nghiêng là biến độc lập và gia tốc là biến phụ thuộc.', 'Giữ xe, mặt tiếp xúc và cách đo không đổi để hạn chế biến gây nhiễu.']
  },
  {
    id: 'phy10-m1r-q059', subTypeId: 'phy10-qt18-st5', outcomeIds: ['PHY10-M1-O12'],
    content: 'Phương án video nào tốt nhất để xác định g từ chuyển động rơi?',
    difficulty: 'hard', cognitiveLevel: 'application', competency: 'physical_inquiry',
    practiceRole: 'mastery_holdout', representationType: 'experiment', correctAnswer: 'D',
    options: ['A. Đặt thước chuẩn xa mặt phẳng chuyển động và quay xiên.', 'B. Dùng hai khung hình bất kỳ rồi tính một vận tốc.', 'C. Không cần biết tốc độ khung hình.', 'D. Đặt camera vuông góc, thước chuẩn cùng mặt phẳng, dùng nhiều mốc thời gian và khớp quan hệ y theo t².'],
    estimatedSeconds: 90,
    reasoning: ['Camera vuông góc và thước cùng mặt phẳng hạn chế sai lệch phối cảnh khi đổi pixel sang độ dài.', 'Tốc độ khung hình xác định mốc thời gian; nhiều điểm giảm phụ thuộc vào một cặp số liệu.', 'Với vật thả từ nghỉ, hệ số góc của y theo $t^2$ bằng $g/2$, cho phép suy ra g và đánh giá độ phù hợp.']
  },
  {
    id: 'phy10-m1r-q060', subTypeId: 'phy10-qt8-st1', outcomeIds: ['PHY10-M1-O01'],
    content: 'Một hành khách ngồi yên trên toa tàu đang chạy. Hành khách chuyển động so với',
    difficulty: 'medium', cognitiveLevel: 'understanding', competency: 'physical_cognition',
    practiceRole: 'near_transfer', representationType: 'text', correctAnswer: 'C',
    options: ['A. ghế ngồi.', 'B. toa tàu.', 'C. hàng cây bên đường.', 'D. hành lí đặt cạnh ghế.'], estimatedSeconds: 40,
    reasoning: ['Trạng thái chuyển động phụ thuộc vật mốc.', 'Hành khách đổi vị trí so với hàng cây, nhưng không đổi vị trí so với các vật trong toa.']
  },
  {
    id: 'phy10-m1r-q061', subTypeId: 'phy10-qt8-st1', outcomeIds: ['PHY10-M1-O01'],
    content: 'Hai xe chạy song song cùng chiều và cùng tốc độ không đổi. Người trên xe A quan sát xe B. Kết luận đúng nhất là',
    difficulty: 'hard', cognitiveLevel: 'understanding', competency: 'physical_application',
    practiceRole: 'mastery_holdout', representationType: 'diagram', correctAnswer: 'D',
    options: ['A. B luôn chuyển động nhanh.', 'B. B chuyển động lùi.', 'C. Không thể kết luận vì hai xe đang chạy.', 'D. B đứng yên tương đối so với A nếu khoảng cách không đổi.'], estimatedSeconds: 65,
    reasoning: ['Vận tốc tương đối bằng hiệu hai vận tốc cùng phương.', 'Hai vận tốc bằng nhau nên vận tốc tương đối bằng 0; khoảng cách giữa hai xe không đổi.']
  },
  {
    id: 'phy10-m1r-q062', subTypeId: 'phy10-qt8-st2', outcomeIds: ['PHY10-M1-O01'],
    content: 'Để xác định duy nhất tọa độ của xe trên một đường thẳng tại từng thời điểm, thông tin tối thiểu cần chọn là',
    difficulty: 'medium', cognitiveLevel: 'understanding', competency: 'physical_cognition',
    practiceRole: 'misconception_check', representationType: 'text', correctAnswer: 'D',
    options: ['A. Chỉ một vật mốc.', 'B. Chỉ một đồng hồ.', 'C. Khối lượng và tốc độ xe.', 'D. Gốc tọa độ, chiều dương, mốc thời gian và đồng hồ.'], estimatedSeconds: 45,
    reasoning: ['Vị trí có dấu cần gốc và chiều dương.', 'Thời điểm cần mốc thời gian và đồng hồ, nên phương án D mô tả đủ hệ quy chiếu.']
  },
  {
    id: 'phy10-m1r-q063', subTypeId: 'phy10-qt8-st2', outcomeIds: ['PHY10-M1-O01'],
    content: 'Một camera cố định bên đường ghi chuyển động của xe. Nếu đổi gốc tọa độ nhưng giữ chiều dương và mốc thời gian, đại lượng nào chắc chắn thay đổi?',
    difficulty: 'hard', cognitiveLevel: 'understanding', competency: 'physical_cognition',
    practiceRole: 'far_transfer', representationType: 'diagram', correctAnswer: 'C',
    options: ['A. Khoảng thời gian giữa hai khung hình.', 'B. Quãng đường xe đi giữa hai khung.', 'C. Tọa độ xe tại mỗi khung.', 'D. Tốc độ trung bình giữa hai khung.'], estimatedSeconds: 70,
    reasoning: ['Đổi gốc làm mọi tọa độ cộng hoặc trừ cùng một hằng số.', 'Hiệu tọa độ, quãng đường, khoảng thời gian và tốc độ không đổi; tọa độ tuyệt đối thay đổi.']
  },
  {
    id: 'phy10-m1r-q064', subTypeId: 'phy10-qt8-st4', outcomeIds: ['PHY10-M1-O01'],
    content: 'Một tiết học bắt đầu lúc 7 h 15 và kết thúc lúc 8 h 00. Khoảng thời gian của tiết học bằng bao nhiêu phút?',
    difficulty: 'medium', cognitiveLevel: 'application', competency: 'physical_cognition',
    practiceRole: 'guided', representationType: 'equation', correctAnswer: '45',
    acceptedAnswers: ['45', '45.0', '45,0'], estimatedSeconds: 35,
    reasoning: ['7 h 15 và 8 h 00 là hai thời điểm.', 'Khoảng thời gian là $8\\,h\\,00-7\\,h\\,15=45$ phút.']
  },
  {
    id: 'phy10-m1r-q065', subTypeId: 'phy10-qt8-st4', outcomeIds: ['PHY10-M1-O01'],
    content: 'Chọn mốc t=0 lúc 6 h 58 min 30 s. Một sự kiện xảy ra lúc 7 h 01 min 10 s. Giá trị t của sự kiện bằng bao nhiêu giây?',
    difficulty: 'hard', cognitiveLevel: 'application', competency: 'physical_cognition',
    practiceRole: 'mastery_holdout', representationType: 'equation', correctAnswer: '160',
    acceptedAnswers: ['160', '160.0', '160,0'], estimatedSeconds: 60,
    reasoning: ['Từ 6 h 58 min 30 s đến 7 h là 90 s.', 'Từ 7 h đến 7 h 01 min 10 s là 70 s.', 'Cộng lại được $t=160$ s.']
  },
  {
    id: 'phy10-m1r-q066', subTypeId: 'phy10-qt9-st1', outcomeIds: ['PHY10-M1-O02'],
    content: 'Vật đi thẳng không đổi chiều từ x=−5 m đến x=7 m. Quãng đường đi được bằng bao nhiêu mét?',
    difficulty: 'medium', cognitiveLevel: 'application', competency: 'physical_cognition',
    practiceRole: 'guided', representationType: 'diagram', correctAnswer: '12',
    acceptedAnswers: ['12', '12.0', '12,0'], estimatedSeconds: 40,
    reasoning: ['Chuyển động không đổi chiều nên quãng đường bằng độ lớn độ dịch chuyển.', '$s=|7-(-5)|=12$ m.']
  },
  {
    id: 'phy10-m1r-q067', subTypeId: 'phy10-qt9-st1', outcomeIds: ['PHY10-M1-O02'],
    content: 'Một vật đi thẳng từ A đến B mà không đổi chiều. Phát biểu nào luôn đúng?',
    difficulty: 'hard', cognitiveLevel: 'understanding', competency: 'physical_cognition',
    practiceRole: 'mastery_holdout', representationType: 'text', correctAnswer: 'D',
    options: ['A. Độ dịch chuyển luôn dương.', 'B. Quãng đường có thể âm.', 'C. Quãng đường nhỏ hơn độ lớn độ dịch chuyển.', 'D. Quãng đường bằng độ lớn độ dịch chuyển.'], estimatedSeconds: 55,
    reasoning: ['Quãng đường là độ dài đường đi nên không âm.', 'Không đổi chiều trên đường thẳng làm đường đi đúng bằng khoảng cách đầu–cuối, tức $s=|\\Delta x|$.']
  },
  {
    id: 'phy10-m1r-q068', subTypeId: 'phy10-qt9-st3', outcomeIds: ['PHY10-M1-O02'],
    content: 'Chọn chiều Đông là dương. Người đi từ x=20 m đến x=−10 m. Độ dịch chuyển bằng bao nhiêu mét?',
    difficulty: 'easy', cognitiveLevel: 'application', competency: 'physical_cognition',
    practiceRole: 'guided', representationType: 'diagram', correctAnswer: '-30',
    acceptedAnswers: ['-30', '-30.0', '-30,0'], estimatedSeconds: 35,
    reasoning: ['Độ dịch chuyển có dấu: $\\Delta x=x_{cuối}-x_{đầu}$.', '$\\Delta x=-10-20=-30$ m, hướng Tây.']
  },
  {
    id: 'phy10-m1r-q069', subTypeId: 'phy10-qt9-st3', outcomeIds: ['PHY10-M1-O02'],
    content: 'Một vector độ dịch chuyển có độ lớn 18 m và hướng ngược chiều dương Ox. Giá trị đại số của độ dịch chuyển là',
    difficulty: 'medium', cognitiveLevel: 'understanding', competency: 'physical_cognition',
    practiceRole: 'representation_switch', representationType: 'diagram', correctAnswer: 'C',
    options: ['A. 18 m.', 'B. 0 m.', 'C. −18 m.', 'D. Không xác định.'], estimatedSeconds: 40,
    reasoning: ['Chiều ngược chiều dương được biểu diễn bằng dấu âm.', 'Vì độ lớn là 18 m nên giá trị đại số là $-18$ m.']
  },
  {
    id: 'phy10-m1r-q070', subTypeId: 'phy10-qt9-st3', outcomeIds: ['PHY10-M1-O02'],
    content: 'Vật đi trên trục Ox từ x_A=−12 m đến x_B=5 m rồi quay về x_C=−2 m. Vector độ dịch chuyển của cả hành trình hướng theo chiều nào và có độ lớn bao nhiêu?',
    difficulty: 'hard', cognitiveLevel: 'application', competency: 'physical_application',
    practiceRole: 'mastery_holdout', representationType: 'diagram', correctAnswer: 'C',
    options: ['A. Chiều âm, 10 m.', 'B. Chiều dương, 24 m.', 'C. Chiều dương, 10 m.', 'D. Chiều âm, 24 m.'], estimatedSeconds: 70,
    reasoning: ['Chỉ dùng vị trí đầu và cuối: $\\Delta x=-2-(-12)=10$ m.', 'Giá trị dương nên vector hướng theo chiều dương và có độ lớn 10 m.']
  },
  {
    id: 'phy10-m1r-q071', subTypeId: 'phy10-qt9-st4', outcomeIds: ['PHY10-M1-O02'],
    content: 'Vật xuất phát tại x=2 m, đi được quãng đường 8 m theo chiều dương và không đổi chiều. Tọa độ cuối bằng bao nhiêu mét?',
    difficulty: 'easy', cognitiveLevel: 'application', competency: 'physical_cognition',
    practiceRole: 'guided', representationType: 'equation', correctAnswer: '10',
    acceptedAnswers: ['10', '10.0', '10,0'], estimatedSeconds: 35,
    reasoning: ['Không đổi chiều và đi theo chiều dương nên $\\Delta x=s=8$ m.', '$x_{cuối}=2+8=10$ m.']
  },
  {
    id: 'phy10-m1r-q072', subTypeId: 'phy10-qt9-st4', outcomeIds: ['PHY10-M1-O02'],
    content: 'Một người đi 15 m về Đông rồi quay lại một đoạn. Độ dịch chuyển cuối cùng là 9 m về Đông. Đoạn quay lại dài bao nhiêu mét?',
    difficulty: 'medium', cognitiveLevel: 'application', competency: 'physical_cognition',
    practiceRole: 'near_transfer', representationType: 'diagram', correctAnswer: '6',
    acceptedAnswers: ['6', '6.0', '6,0'], estimatedSeconds: 50,
    reasoning: ['Chọn Đông dương, độ dịch chuyển là $15-d=9$.', 'Suy ra đoạn quay lại $d=6$ m.']
  },
  {
    id: 'phy10-m1r-q073', subTypeId: 'phy10-qt9-st4', outcomeIds: ['PHY10-M1-O02'],
    content: 'Vật xuất phát từ O, đi trên đường thẳng và kết thúc tại x=4 m sau khi đã đi tổng cộng 20 m. Nếu chỉ đổi chiều đúng một lần, quãng đường theo chiều dương và chiều âm lần lượt là',
    difficulty: 'hard', cognitiveLevel: 'application', competency: 'physical_application',
    practiceRole: 'far_transfer', representationType: 'equation', correctAnswer: 'D',
    options: ['A. 20 m và 4 m.', 'B. 8 m và 12 m.', 'C. 10 m và 10 m.', 'D. 12 m và 8 m.'], estimatedSeconds: 80,
    reasoning: ['Gọi $p,n$ là tổng đoạn theo chiều dương và âm: $p+n=20$.', 'Độ dịch chuyển $p-n=4$.', 'Giải hệ được $p=12$ m và $n=8$ m.']
  },
  {
    id: 'phy10-m1r-q074', subTypeId: 'phy10-qt9-st4', outcomeIds: ['PHY10-M1-O02'],
    content: 'Một vật có quãng đường 30 m và độ lớn độ dịch chuyển 10 m sau hành trình chỉ gồm một chặng đi rồi một chặng quay lại. Độ dài hai chặng có thể là',
    difficulty: 'hard', cognitiveLevel: 'application', competency: 'physical_application',
    practiceRole: 'mastery_holdout', representationType: 'equation', correctAnswer: 'C',
    options: ['A. 30 m và 10 m.', 'B. 15 m và 15 m.', 'C. 20 m và 10 m.', 'D. 25 m và 15 m.'], estimatedSeconds: 75,
    reasoning: ['Hai chặng ngược chiều có tổng bằng 30 m và hiệu độ lớn bằng 10 m.', 'Cặp 20 m và 10 m thỏa cả $20+10=30$ và $|20-10|=10$.']
  },
  {
    id: 'phy10-m1r-q075', subTypeId: 'phy10-qt10-st2', outcomeIds: ['PHY10-M1-O03'],
    content: 'Vật đi từ x=−4 m đến x=8 m trong 3 s. Vận tốc trung bình bằng bao nhiêu m/s?',
    difficulty: 'medium', cognitiveLevel: 'application', competency: 'physical_cognition',
    practiceRole: 'near_transfer', representationType: 'equation', correctAnswer: '4',
    acceptedAnswers: ['4', '+4', '4.0', '4,0'], estimatedSeconds: 45,
    reasoning: ['$\\Delta x=8-(-4)=12$ m.', '$v_{tb}=\\Delta x/\\Delta t=12/3=4$ m/s.']
  },
  {
    id: 'phy10-m1r-q076', subTypeId: 'phy10-qt10-st2', outcomeIds: ['PHY10-M1-O03'],
    content: 'Người đi 60 m về Đông trong 40 s rồi 20 m về Tây trong 10 s. Chọn Đông dương. Vận tốc trung bình của cả hành trình bằng bao nhiêu m/s?',
    difficulty: 'hard', cognitiveLevel: 'application', competency: 'physical_application',
    practiceRole: 'mastery_holdout', representationType: 'diagram', correctAnswer: '0.8',
    acceptedAnswers: ['0.8', '0,8'], estimatedSeconds: 75,
    reasoning: ['Độ dịch chuyển là $60-20=40$ m, không phải tổng quãng đường 80 m.', 'Tổng thời gian là $40+10=50$ s.', '$v_{tb}=40/50=0{,}8$ m/s theo chiều Đông.']
  },
  {
    id: 'phy10-m1r-q077', subTypeId: 'phy10-qt10-st3', outcomeIds: ['PHY10-M1-O03'],
    content: 'Xe đi 120 km trong 2 h, nghỉ 30 phút rồi đi tiếp 60 km trong 1 h. Tốc độ trung bình cả hành trình bằng bao nhiêu km/h?',
    difficulty: 'medium', cognitiveLevel: 'application', competency: 'physical_cognition',
    practiceRole: 'misconception_check', representationType: 'table', correctAnswer: '51.43',
    acceptedAnswers: ['51.43', '51,43', '360/7'], estimatedSeconds: 65,
    reasoning: ['Tổng quãng đường là 180 km.', 'Tổng thời gian kể cả nghỉ là $2+0{,}5+1=3{,}5$ h.', '$v_{tb}=180/3{,}5\\approx51{,}43$ km/h.']
  },
  {
    id: 'phy10-m1r-q078', subTypeId: 'phy10-qt10-st3', outcomeIds: ['PHY10-M1-O03'],
    content: 'Một người đi 4 km với 4 km/h, nghỉ 30 phút, rồi đi 6 km với 6 km/h. Tốc độ trung bình của toàn bộ quá trình bằng bao nhiêu km/h?',
    difficulty: 'hard', cognitiveLevel: 'application', competency: 'physical_application',
    practiceRole: 'mastery_holdout', representationType: 'equation', correctAnswer: '4',
    acceptedAnswers: ['4', '4.0', '4,0'], estimatedSeconds: 80,
    reasoning: ['Thời gian hai chặng đi đều là 1 h; thời gian nghỉ là 0,5 h.', 'Tổng quãng đường 10 km, tổng thời gian 2,5 h.', '$v_{tb}=10/2{,}5=4$ km/h.']
  },
  {
    id: 'phy10-m1r-q079', subTypeId: 'phy10-qt11-st1', outcomeIds: ['PHY10-M1-O04'],
    content: 'Xe A chạy 18 m/s đuổi xe B chạy 12 m/s cùng chiều. Tốc độ của A đối với B bằng bao nhiêu m/s?',
    difficulty: 'medium', cognitiveLevel: 'application', competency: 'physical_cognition',
    practiceRole: 'guided', representationType: 'diagram', correctAnswer: '6',
    acceptedAnswers: ['6', '6.0', '6,0'], estimatedSeconds: 40,
    reasoning: ['Hai xe cùng chiều nên tốc độ khép khoảng cách là hiệu hai tốc độ.', '$v_{A/B}=18-12=6$ m/s.']
  },
  {
    id: 'phy10-m1r-q080', subTypeId: 'phy10-qt11-st1', outcomeIds: ['PHY10-M1-O04'],
    content: 'Hai xe cùng chiều cách nhau 300 m. Xe sau chạy 25 m/s, xe trước chạy 15 m/s. Nếu giữ nguyên tốc độ, xe sau đuổi kịp sau bao nhiêu giây?',
    difficulty: 'hard', cognitiveLevel: 'application', competency: 'physical_application',
    practiceRole: 'mastery_holdout', representationType: 'equation', correctAnswer: '30',
    acceptedAnswers: ['30', '30.0', '30,0'], estimatedSeconds: 65,
    reasoning: ['Tốc độ tương đối là $25-15=10$ m/s.', 'Thời gian khép 300 m là $t=300/10=30$ s.']
  },
  {
    id: 'phy10-m1r-q081', subTypeId: 'phy10-qt11-st2', outcomeIds: ['PHY10-M1-O04'],
    content: 'Hai xe tiến lại nhau với tốc độ 12 m/s và 8 m/s. Tốc độ khép khoảng cách bằng bao nhiêu m/s?',
    difficulty: 'easy', cognitiveLevel: 'application', competency: 'physical_cognition',
    practiceRole: 'guided', representationType: 'diagram', correctAnswer: '20',
    acceptedAnswers: ['20', '20.0', '20,0'], estimatedSeconds: 35,
    reasoning: ['Hai xe ngược chiều và tiến lại nhau nên độ lớn vận tốc tương đối là tổng.', '$v_{khép}=12+8=20$ m/s.']
  },
  {
    id: 'phy10-m1r-q082', subTypeId: 'phy10-qt11-st2', outcomeIds: ['PHY10-M1-O04'],
    content: 'Hai người cách nhau 420 m và đi ngược chiều về phía nhau với tốc độ 1,5 m/s và 2,0 m/s. Họ gặp nhau sau bao nhiêu giây?',
    difficulty: 'medium', cognitiveLevel: 'application', competency: 'physical_cognition',
    practiceRole: 'near_transfer', representationType: 'equation', correctAnswer: '120',
    acceptedAnswers: ['120', '120.0', '120,0'], estimatedSeconds: 55,
    reasoning: ['Tốc độ khép khoảng cách là $1{,}5+2{,}0=3{,}5$ m/s.', '$t=420/3{,}5=120$ s.']
  },
  {
    id: 'phy10-m1r-q083', subTypeId: 'phy10-qt11-st2', outcomeIds: ['PHY10-M1-O04'],
    content: 'Hai xe xuất phát đồng thời từ A và B cách nhau 180 km, chạy về phía nhau với 50 km/h và 40 km/h. Vị trí gặp cách A bao nhiêu km?',
    difficulty: 'hard', cognitiveLevel: 'application', competency: 'physical_application',
    practiceRole: 'far_transfer', representationType: 'diagram', correctAnswer: '100',
    acceptedAnswers: ['100', '100.0', '100,0'], estimatedSeconds: 75,
    reasoning: ['Thời gian gặp là $180/(50+40)=2$ h.', 'Xe từ A đi được $50\\cdot2=100$ km.']
  },
  {
    id: 'phy10-m1r-q084', subTypeId: 'phy10-qt11-st2', outcomeIds: ['PHY10-M1-O04'],
    content: 'Hai vật cách nhau 600 m, tiến lại nhau. Vật A chạy 8 m/s; vật B xuất phát muộn 20 s và chạy 12 m/s. Tính từ lúc A xuất phát, hai vật gặp nhau sau bao nhiêu giây?',
    difficulty: 'hard', cognitiveLevel: 'application', competency: 'physical_application',
    practiceRole: 'mastery_holdout', representationType: 'equation', correctAnswer: '42',
    acceptedAnswers: ['42', '42.0', '42,0'], estimatedSeconds: 90,
    reasoning: ['Trong 20 s đầu, A đi 160 m nên khoảng cách còn 440 m.', 'Sau khi B xuất phát, tốc độ khép là $8+12=20$ m/s, cần 22 s.', 'Tính từ lúc A xuất phát: $20+22=42$ s.']
  },
  {
    id: 'phy10-m1r-q085', subTypeId: 'phy10-qt11-st3', outcomeIds: ['PHY10-M1-O04'],
    content: 'Thuyền chạy xuôi dòng 7 m/s so với bờ, nước chảy 2 m/s. Tốc độ thuyền so với nước bằng bao nhiêu m/s?',
    difficulty: 'easy', cognitiveLevel: 'application', competency: 'physical_cognition',
    practiceRole: 'guided', representationType: 'equation', correctAnswer: '5',
    acceptedAnswers: ['5', '5.0', '5,0'], estimatedSeconds: 40,
    reasoning: ['$\\vec v_{thuyền/bờ}=\\vec v_{thuyền/nước}+\\vec v_{nước/bờ}$.', 'Xuôi dòng cùng chiều nên $v_{thuyền/nước}=7-2=5$ m/s.']
  },
  {
    id: 'phy10-m1r-q086', subTypeId: 'phy10-qt11-st3', outcomeIds: ['PHY10-M1-O04'],
    content: 'Ca nô có tốc độ 12 km/h so với nước, dòng chảy 3 km/h. Tốc độ ca nô ngược dòng so với bờ bằng bao nhiêu km/h?',
    difficulty: 'medium', cognitiveLevel: 'application', competency: 'physical_cognition',
    practiceRole: 'near_transfer', representationType: 'diagram', correctAnswer: '9',
    acceptedAnswers: ['9', '9.0', '9,0'], estimatedSeconds: 45,
    reasoning: ['Khi ngược dòng, vận tốc dòng nước ngược chiều vận tốc ca nô so với nước.', 'Độ lớn đối với bờ là $12-3=9$ km/h.']
  },
  {
    id: 'phy10-m1r-q087', subTypeId: 'phy10-qt11-st3', outcomeIds: ['PHY10-M1-O04'],
    content: 'Ca nô đi 30 km xuôi dòng rồi quay về đúng điểm đầu. Tốc độ ca nô so với nước là 8 km/h, dòng chảy 2 km/h. Tổng thời gian đi và về bằng bao nhiêu giờ?',
    difficulty: 'hard', cognitiveLevel: 'application', competency: 'physical_application',
    practiceRole: 'mastery_holdout', representationType: 'equation', correctAnswer: '8',
    acceptedAnswers: ['8', '8.0', '8,0'], estimatedSeconds: 85,
    reasoning: ['Tốc độ xuôi dòng là $8+2=10$ km/h, thời gian 3 h.', 'Tốc độ ngược dòng là $8-2=6$ km/h, thời gian 5 h.', 'Tổng thời gian là 8 h.']
  },
  {
    id: 'phy10-m1r-q088', subTypeId: 'phy10-qt12-st1', outcomeIds: ['PHY10-M1-O05'],
    content: 'Trên đồ thị x–t, một đoạn thẳng nằm ngang từ t=2 s đến t=5 s. Trong khoảng đó vật',
    difficulty: 'hard', cognitiveLevel: 'understanding', competency: 'physical_cognition',
    practiceRole: 'mastery_holdout', representationType: 'graph', correctAnswer: 'D',
    options: ['A. chuyển động đều theo chiều dương.', 'B. chuyển động đều theo chiều âm.', 'C. có gia tốc dương.', 'D. đứng yên tại một vị trí không đổi.'], estimatedSeconds: 50,
    reasoning: ['Đoạn ngang nghĩa là tọa độ không đổi theo thời gian.', 'Hệ số góc và vận tốc bằng 0 nên vật đứng yên.']
  },
  {
    id: 'phy10-m1r-q089', subTypeId: 'phy10-qt12-st2', outcomeIds: ['PHY10-M1-O05'],
    content: 'Đồ thị x–t đi qua hai điểm (1 s; 3 m) và (5 s; 15 m). Vận tốc trên đoạn thẳng bằng bao nhiêu m/s?',
    difficulty: 'medium', cognitiveLevel: 'application', competency: 'physical_cognition',
    practiceRole: 'guided', representationType: 'graph', correctAnswer: '3',
    acceptedAnswers: ['3', '3.0', '3,0'], estimatedSeconds: 45,
    reasoning: ['Vận tốc bằng hệ số góc của đồ thị x–t.', '$v=(15-3)/(5-1)=3$ m/s.']
  },
  {
    id: 'phy10-m1r-q090', subTypeId: 'phy10-qt12-st2', outcomeIds: ['PHY10-M1-O05'],
    content: 'Đồ thị x–t là đường thẳng qua (2 s; 10 m) và (6 s; −6 m). Kết luận đúng là',
    difficulty: 'hard', cognitiveLevel: 'application', competency: 'physical_application',
    practiceRole: 'mastery_holdout', representationType: 'graph', correctAnswer: 'C',
    options: ['A. Vật nhanh dần với a=−4 m/s².', 'B. Vật đứng yên.', 'C. Vật chuyển động đều theo chiều âm với v=−4 m/s.', 'D. Vật chuyển động đều theo chiều dương với v=4 m/s.'], estimatedSeconds: 70,
    reasoning: ['Hệ số góc là $(-6-10)/(6-2)=-4$ m/s.', 'Đồ thị thẳng có độ dốc không đổi nên vận tốc không đổi; dấu âm chỉ chiều chuyển động.']
  },
  {
    id: 'phy10-m1r-q091', subTypeId: 'phy10-qt12-st3', outcomeIds: ['PHY10-M1-O05'],
    content: 'Hai vật có phương trình $x_A=2+3t$ và $x_B=14-t$ (m, s). Chúng gặp nhau tại thời điểm bao nhiêu giây?',
    difficulty: 'medium', cognitiveLevel: 'application', competency: 'physical_cognition',
    practiceRole: 'near_transfer', representationType: 'equation', correctAnswer: '3',
    acceptedAnswers: ['3', '3.0', '3,0'], estimatedSeconds: 55,
    reasoning: ['Gặp nhau khi cùng tọa độ: $2+3t=14-t$.', '$4t=12$ nên $t=3$ s.']
  },
  {
    id: 'phy10-m1r-q092', subTypeId: 'phy10-qt12-st3', outcomeIds: ['PHY10-M1-O05'],
    content: 'A xuất phát tại x=0 với v=4 m/s. B ở x=30 m, cùng chiều với v=1 m/s và xuất phát đồng thời. Tọa độ nơi A đuổi kịp B bằng bao nhiêu mét?',
    difficulty: 'hard', cognitiveLevel: 'application', competency: 'physical_application',
    practiceRole: 'mastery_holdout', representationType: 'graph', correctAnswer: '40',
    acceptedAnswers: ['40', '40.0', '40,0'], estimatedSeconds: 75,
    reasoning: ['Phương trình: $x_A=4t$, $x_B=30+t$.', 'Giao điểm thỏa $4t=30+t$, suy ra $t=10$ s.', 'Tọa độ gặp là $x=4\\cdot10=40$ m.']
  },
  {
    id: 'phy10-m1r-q093', subTypeId: 'phy10-qt12-st4', outcomeIds: ['PHY10-M1-O05'],
    content: 'Phương trình $x=5-2t$ (m, s) được biểu diễn bởi đường thẳng có tung độ gốc và hệ số góc lần lượt là',
    difficulty: 'easy', cognitiveLevel: 'understanding', competency: 'physical_cognition',
    practiceRole: 'guided', representationType: 'equation', correctAnswer: 'C',
    options: ['A. −2 m và 5 m/s.', 'B. 0 m và 5 m/s.', 'C. 5 m và −2 m/s.', 'D. 5 m và 2 m/s.'], estimatedSeconds: 40,
    reasoning: ['So sánh với $x=x_0+vt$.', 'Suy ra $x_0=5$ m và hệ số góc $v=-2$ m/s.']
  },
  {
    id: 'phy10-m1r-q094', subTypeId: 'phy10-qt12-st4', outcomeIds: ['PHY10-M1-O05'],
    content: 'Bảng cho x=−2; 1; 4 m tại t=0; 1; 2 s. Phương trình phù hợp là',
    difficulty: 'medium', cognitiveLevel: 'application', competency: 'physical_cognition',
    practiceRole: 'representation_switch', representationType: 'table', correctAnswer: 'D',
    options: ['A. $x=3-2t$.', 'B. $x=-2-t$.', 'C. $x=1+3t$.', 'D. $x=-2+3t$.'], estimatedSeconds: 55,
    reasoning: ['Mỗi giây tọa độ tăng 3 m nên $v=3$ m/s.', 'Tại $t=0$, $x_0=-2$ m; do đó $x=-2+3t$.']
  },
  {
    id: 'phy10-m1r-q095', subTypeId: 'phy10-qt12-st4', outcomeIds: ['PHY10-M1-O05'],
    content: 'Một đường thẳng x–t đi qua (0; 8 m) và (4 s; 0). Phương trình tọa độ của vật là',
    difficulty: 'hard', cognitiveLevel: 'application', competency: 'physical_application',
    practiceRole: 'far_transfer', representationType: 'graph', correctAnswer: 'C',
    options: ['A. $x=8+2t$.', 'B. $x=4-2t$.', 'C. $x=8-2t$.', 'D. $x=-8+2t$.'], estimatedSeconds: 65,
    reasoning: ['$x_0=8$ m và $v=(0-8)/(4-0)=-2$ m/s.', 'Thế vào $x=x_0+vt$ được $x=8-2t$.']
  },
  {
    id: 'phy10-m1r-q096', subTypeId: 'phy10-qt12-st4', outcomeIds: ['PHY10-M1-O05'],
    content: 'Đồ thị x–t gồm đoạn 0–2 s tăng thẳng từ 0 lên 6 m, đoạn 2–5 s nằm ngang, đoạn 5–7 s giảm thẳng về 2 m. Bảng vận tốc theo ba đoạn lần lượt là',
    difficulty: 'hard', cognitiveLevel: 'application', competency: 'physical_application',
    practiceRole: 'mastery_holdout', representationType: 'graph', correctAnswer: 'D',
    options: ['A. 3; 0; 2 m/s.', 'B. 6; 0; −4 m/s.', 'C. 3; 1; −2 m/s.', 'D. 3; 0; −2 m/s.'], estimatedSeconds: 85,
    reasoning: ['Đoạn đầu: $v_1=(6-0)/2=3$ m/s; đoạn ngang: $v_2=0$.', 'Đoạn cuối: $v_3=(2-6)/(7-5)=-2$ m/s.', 'Bộ giá trị đúng là 3; 0; −2 m/s.']
  },
  {
    id: 'phy10-m1r-q097', subTypeId: 'phy10-qt13-st2', outcomeIds: ['PHY10-M1-O06'],
    content: 'Vận tốc biến thiên từ 2 m/s lên 8 m/s trong 3 s theo chiều dương. Vector gia tốc hướng',
    difficulty: 'easy', cognitiveLevel: 'understanding', competency: 'physical_cognition',
    practiceRole: 'guided', representationType: 'diagram', correctAnswer: 'C',
    options: ['A. vuông góc trục Ox.', 'B. không xác định.', 'C. theo chiều dương.', 'D. theo chiều âm.'], estimatedSeconds: 35,
    reasoning: ['$\\Delta v=8-2>0$.', 'Gia tốc cùng hướng chiều dương vì $a=\\Delta v/\\Delta t>0$.']
  },
  {
    id: 'phy10-m1r-q098', subTypeId: 'phy10-qt13-st2', outcomeIds: ['PHY10-M1-O06'],
    content: 'Một vật có vận tốc từ −3 m/s thành −9 m/s trong 2 s. Gia tốc trung bình bằng bao nhiêu m/s²?',
    difficulty: 'medium', cognitiveLevel: 'application', competency: 'physical_cognition',
    practiceRole: 'misconception_check', representationType: 'equation', correctAnswer: '-3',
    acceptedAnswers: ['-3', '-3.0', '-3,0'], estimatedSeconds: 50,
    reasoning: ['$\\Delta v=-9-(-3)=-6$ m/s.', '$a_{tb}=-6/2=-3$ m/s²; không được bỏ dấu vận tốc.']
  },
  {
    id: 'phy10-m1r-q099', subTypeId: 'phy10-qt13-st2', outcomeIds: ['PHY10-M1-O06'],
    content: 'Vật đang chuyển động theo chiều âm với v=−10 m/s nhưng vector gia tốc hướng chiều dương, a=2 m/s². Sau 3 s, hướng của vector vận tốc vẫn là',
    difficulty: 'hard', cognitiveLevel: 'application', competency: 'physical_application',
    practiceRole: 'mastery_holdout', representationType: 'diagram', correctAnswer: 'D',
    options: ['A. chiều dương với v=16 m/s.', 'B. không xác định.', 'C. bằng 0.', 'D. chiều âm với v=−4 m/s.'], estimatedSeconds: 70,
    reasoning: ['$v=v_0+at=-10+2\\cdot3=-4$ m/s.', 'Vận tốc còn âm nên vector vẫn hướng chiều âm; vật chưa đổi chiều.']
  },
  {
    id: 'phy10-m1r-q100', subTypeId: 'phy10-qt13-st3', outcomeIds: ['PHY10-M1-O06'],
    content: 'Trường hợp nào là chuyển động nhanh dần?',
    difficulty: 'easy', cognitiveLevel: 'understanding', competency: 'physical_cognition',
    practiceRole: 'guided', representationType: 'text', correctAnswer: 'D',
    options: ['A. $v>0,a<0$.', 'B. $v<0,a>0$.', 'C. $v=0,a=0$.', 'D. $v<0,a<0$.'], estimatedSeconds: 35,
    reasoning: ['Vật nhanh dần khi vận tốc và gia tốc cùng dấu.', 'Trong các phương án, chỉ $v<0,a<0$ thỏa điều kiện đó.']
  },
  {
    id: 'phy10-m1r-q101', subTypeId: 'phy10-qt13-st3', outcomeIds: ['PHY10-M1-O06'],
    content: 'Vật có v=−12 m/s và a=+3 m/s². Tại thời điểm đang xét, vật',
    difficulty: 'medium', cognitiveLevel: 'understanding', competency: 'physical_cognition',
    practiceRole: 'misconception_check', representationType: 'equation', correctAnswer: 'C',
    options: ['A. nhanh dần theo chiều âm.', 'B. nhanh dần theo chiều dương.', 'C. chậm dần theo chiều âm.', 'D. đứng yên.'], estimatedSeconds: 45,
    reasoning: ['Vận tốc âm nên vật chuyển động theo chiều âm.', 'Gia tốc trái dấu vận tốc nên độ lớn vận tốc đang giảm: vật chậm dần.']
  },
  {
    id: 'phy10-m1r-q102', subTypeId: 'phy10-qt13-st3', outcomeIds: ['PHY10-M1-O06'],
    content: 'Một vật có $v(t)=6-2t$ (m/s). Trong khoảng nào từ 0 đến 5 s vật nhanh dần?',
    difficulty: 'hard', cognitiveLevel: 'application', competency: 'physical_application',
    practiceRole: 'mastery_holdout', representationType: 'graph', correctAnswer: 'D',
    options: ['A. 0–3 s.', 'B. 0–5 s.', 'C. Chỉ tại t=3 s.', 'D. 3–5 s.'], estimatedSeconds: 75,
    reasoning: ['$a=-2$ m/s² và $v=0$ tại $t=3$ s.', 'Trước 3 s, $v>0$ trái dấu a nên chậm dần; sau 3 s, $v<0$ cùng dấu a nên nhanh dần.', 'Vì vậy khoảng nhanh dần là 3–5 s.']
  },
  {
    id: 'phy10-m1r-q103', subTypeId: 'phy10-qt13-st4', outcomeIds: ['PHY10-M1-O06'],
    content: 'Bảng vận tốc cho v=2 m/s tại t=0 và v=8 m/s tại t=3 s. Gia tốc trung bình bằng bao nhiêu m/s²?',
    difficulty: 'easy', cognitiveLevel: 'application', competency: 'physical_cognition',
    practiceRole: 'guided', representationType: 'table', correctAnswer: '2',
    acceptedAnswers: ['2', '2.0', '2,0'], estimatedSeconds: 40,
    reasoning: ['Độ biến thiên vận tốc là $8-2=6$ m/s.', '$a_{tb}=6/3=2$ m/s².']
  },
  {
    id: 'phy10-m1r-q104', subTypeId: 'phy10-qt13-st4', outcomeIds: ['PHY10-M1-O06'],
    content: 'Trên đồ thị v–t, đoạn thẳng đi qua (1 s; −2 m/s) và (4 s; 7 m/s). Hệ số góc bằng bao nhiêu m/s²?',
    difficulty: 'medium', cognitiveLevel: 'application', competency: 'physical_cognition',
    practiceRole: 'representation_switch', representationType: 'graph', correctAnswer: '3',
    acceptedAnswers: ['3', '3.0', '3,0'], estimatedSeconds: 50,
    reasoning: ['Hệ số góc đồ thị v–t là gia tốc.', '$a=[7-(-2)]/(4-1)=9/3=3$ m/s².']
  },
  {
    id: 'phy10-m1r-q105', subTypeId: 'phy10-qt13-st4', outcomeIds: ['PHY10-M1-O06'],
    content: 'Dữ liệu v tại t=0; 1; 2; 3 s lần lượt là 0; 2; 4,1; 5,9 m/s. Giá trị gia tốc không đổi phù hợp nhất là',
    difficulty: 'hard', cognitiveLevel: 'application', competency: 'physical_inquiry',
    practiceRole: 'mastery_holdout', representationType: 'table', correctAnswer: 'C',
    options: ['A. 0,5 m/s².', 'B. 1 m/s².', 'C. xấp xỉ 2 m/s².', 'D. xấp xỉ 6 m/s².'], estimatedSeconds: 70,
    reasoning: ['Xét toàn khoảng để giảm ảnh hưởng dao động đo: $a\\approx(5{,}9-0)/(3-0)$.', 'Kết quả $1{,}97$ m/s², xấp xỉ 2 m/s².']
  },
  {
    id: 'phy10-m1r-q106', subTypeId: 'phy10-qt15-st2', outcomeIds: ['PHY10-M1-O08'],
    content: 'Đồ thị v–t tăng thẳng từ 2 m/s tại t=0 lên 8 m/s tại t=3 s. Gia tốc bằng bao nhiêu m/s²?',
    difficulty: 'easy', cognitiveLevel: 'application', competency: 'physical_cognition',
    practiceRole: 'guided', representationType: 'graph', correctAnswer: '2',
    acceptedAnswers: ['2', '2.0', '2,0'], estimatedSeconds: 40,
    reasoning: ['Gia tốc bằng hệ số góc đồ thị v–t.', '$a=(8-2)/3=2$ m/s².']
  },
  {
    id: 'phy10-m1r-q107', subTypeId: 'phy10-qt15-st2', outcomeIds: ['PHY10-M1-O08'],
    content: 'Đồ thị v–t giảm đều từ 10 m/s ở t=1 s xuống −2 m/s ở t=5 s. Gia tốc bằng bao nhiêu m/s²?',
    difficulty: 'medium', cognitiveLevel: 'application', competency: 'physical_cognition',
    practiceRole: 'near_transfer', representationType: 'graph', correctAnswer: '-3',
    acceptedAnswers: ['-3', '-3.0', '-3,0'], estimatedSeconds: 50,
    reasoning: ['$\\Delta v=-2-10=-12$ m/s và $\\Delta t=4$ s.', '$a=-12/4=-3$ m/s².']
  },
  {
    id: 'phy10-m1r-q108', subTypeId: 'phy10-qt15-st2', outcomeIds: ['PHY10-M1-O08'],
    content: 'Trên đồ thị v–t, đoạn 0–2 s có v tăng từ −6 lên 0 m/s; đoạn 2–5 s tăng từ 0 lên 3 m/s. Tỉ số gia tốc đoạn đầu và đoạn sau bằng bao nhiêu?',
    difficulty: 'hard', cognitiveLevel: 'application', competency: 'physical_application',
    practiceRole: 'mastery_holdout', representationType: 'graph', correctAnswer: '3',
    acceptedAnswers: ['3', '3.0', '3,0'], estimatedSeconds: 75,
    reasoning: ['$a_1=[0-(-6)]/2=3$ m/s².', '$a_2=(3-0)/(5-2)=1$ m/s².', 'Tỉ số $a_1/a_2=3$.']
  },
  {
    id: 'phy10-m1r-q109', subTypeId: 'phy10-qt15-st3', outcomeIds: ['PHY10-M1-O08'],
    content: 'Vận tốc tăng tuyến tính từ −4 m/s tại t=0 đến 4 m/s tại t=4 s. Độ dịch chuyển trong 4 s bằng bao nhiêu mét?',
    difficulty: 'hard', cognitiveLevel: 'application', competency: 'physical_application',
    practiceRole: 'mastery_holdout', representationType: 'graph', correctAnswer: '0',
    acceptedAnswers: ['0', '0.0', '0,0'], estimatedSeconds: 70,
    reasoning: ['Từ 0–2 s, diện tích tam giác nằm dưới trục là $-\\tfrac12\\cdot2\\cdot4=-4$ m.', 'Từ 2–4 s, diện tích tam giác phía trên là $+4$ m.', 'Diện tích đại số và độ dịch chuyển bằng 0.']
  },
  {
    id: 'phy10-m1r-q110', subTypeId: 'phy10-qt15-st4', outcomeIds: ['PHY10-M1-O08'],
    content: 'Vật chuyển động với v=3 m/s trong 4 s rồi v=−2 m/s trong 5 s. Quãng đường đi được bằng bao nhiêu mét?',
    difficulty: 'medium', cognitiveLevel: 'application', competency: 'physical_cognition',
    practiceRole: 'misconception_check', representationType: 'graph', correctAnswer: '22',
    acceptedAnswers: ['22', '22.0', '22,0'], estimatedSeconds: 55,
    reasoning: ['Quãng đường lấy tổng trị tuyệt đối các diện tích dưới đồ thị.', '$s=|3\\cdot4|+|-2\\cdot5|=12+10=22$ m.']
  },
  {
    id: 'phy10-m1r-q111', subTypeId: 'phy10-qt15-st4', outcomeIds: ['PHY10-M1-O08'],
    content: 'Vận tốc biến thiên tuyến tính từ 6 m/s tại t=0 xuống −2 m/s tại t=4 s. Quãng đường vật đi trong 4 s bằng bao nhiêu mét?',
    difficulty: 'hard', cognitiveLevel: 'application', competency: 'physical_application',
    practiceRole: 'mastery_holdout', representationType: 'graph', correctAnswer: '10',
    acceptedAnswers: ['10', '10.0', '10,0'], estimatedSeconds: 85,
    reasoning: ['Vận tốc bằng 0 tại t=3 s, nên phải tách đồ thị tại thời điểm đổi chiều.', 'Diện tích dương là $\\tfrac12\\cdot3\\cdot6=9$ m; diện tích âm có độ lớn $\\tfrac12\\cdot1\\cdot2=1$ m.', 'Quãng đường là $9+1=10$ m.']
  },
  {
    id: 'phy10-m1r-q112', subTypeId: 'phy10-qt15-st5', outcomeIds: ['PHY10-M1-O08'],
    content: 'Vật chuyển động thẳng đều theo chiều âm. Dạng đồ thị v–t phù hợp là',
    difficulty: 'easy', cognitiveLevel: 'understanding', competency: 'physical_cognition',
    practiceRole: 'guided', representationType: 'graph', correctAnswer: 'D',
    options: ['A. Đường thẳng dốc lên.', 'B. Đường thẳng dốc xuống qua gốc.', 'C. Đường ngang phía trên trục thời gian.', 'D. Đường ngang phía dưới trục thời gian.'], estimatedSeconds: 40,
    reasoning: ['Chuyển động đều có vận tốc không đổi nên đồ thị nằm ngang.', 'Chiều âm tương ứng $v<0$, vì vậy đường nằm dưới trục thời gian.']
  },
  {
    id: 'phy10-m1r-q113', subTypeId: 'phy10-qt15-st5', outcomeIds: ['PHY10-M1-O08'],
    content: 'Phương trình vận tốc $v=4-2t$ (m/s). Đồ thị v–t cắt trục thời gian tại',
    difficulty: 'medium', cognitiveLevel: 'application', competency: 'physical_cognition',
    practiceRole: 'representation_switch', representationType: 'equation', correctAnswer: '2',
    acceptedAnswers: ['2', '2.0', '2,0'], estimatedSeconds: 45,
    reasoning: ['Giao với trục thời gian khi $v=0$.', 'Giải $4-2t=0$ được $t=2$ s.']
  },
  {
    id: 'phy10-m1r-q114', subTypeId: 'phy10-qt15-st5', outcomeIds: ['PHY10-M1-O08'],
    content: 'Đồ thị x–t có hệ số góc tăng đều từ âm, bằng 0 rồi dương. Đồ thị v–t tương ứng hợp lí nhất là',
    difficulty: 'hard', cognitiveLevel: 'understanding', competency: 'physical_application',
    practiceRole: 'mastery_holdout', representationType: 'graph', correctAnswer: 'D',
    options: ['A. Đường ngang phía dương.', 'B. Đường ngang tại v=0.', 'C. Đường thẳng giảm qua trục thời gian.', 'D. Đường thẳng tăng và cắt trục thời gian.'], estimatedSeconds: 75,
    reasoning: ['Hệ số góc đồ thị x–t chính là vận tốc.', 'Hệ số góc tăng đều từ âm qua 0 đến dương nghĩa là vận tốc tăng tuyến tính và đổi dấu.', 'Do đó đồ thị v–t là đường thẳng tăng cắt trục thời gian.']
  },
  {
    id: 'phy10-m1r-q115', subTypeId: 'phy10-qt16-st3', outcomeIds: ['PHY10-M1-O09'],
    content: 'Ném thẳng đứng vật lên với v₀=20 m/s, lấy g=10 m/s². Độ cao cực đại so với điểm ném bằng bao nhiêu mét?',
    difficulty: 'hard', cognitiveLevel: 'application', competency: 'physical_application',
    practiceRole: 'mastery_holdout', representationType: 'equation', correctAnswer: '20',
    acceptedAnswers: ['20', '20.0', '20,0'], estimatedSeconds: 70,
    reasoning: ['Ở đỉnh quỹ đạo, vận tốc tức thời bằng 0.', 'Dùng $v^2-v_0^2=2a\\Delta y$ với $a=-10$: $0-400=-20\\Delta y$.', 'Suy ra $\\Delta y=20$ m.']
  },
  {
    id: 'phy10-m1r-q116', subTypeId: 'phy10-qt16-st4', outcomeIds: ['PHY10-M1-O09'],
    content: 'Hai vật được thả rơi từ cùng một điểm, vật B thả sau A 1 s. Khi B vừa được thả, khoảng cách giữa hai vật là bao nhiêu mét? Lấy g=10 m/s².',
    difficulty: 'easy', cognitiveLevel: 'application', competency: 'physical_cognition',
    practiceRole: 'guided', representationType: 'diagram', correctAnswer: '5',
    acceptedAnswers: ['5', '5.0', '5,0'], estimatedSeconds: 45,
    reasoning: ['Khi B vừa thả, B vẫn ở điểm ban đầu còn A đã rơi 1 s.', 'A đi được $s=\\tfrac12gt^2=5$ m, chính là khoảng cách giữa hai vật.']
  },
  {
    id: 'phy10-m1r-q117', subTypeId: 'phy10-qt16-st4', outcomeIds: ['PHY10-M1-O09'],
    content: 'Từ cùng độ cao, vật A được thả rơi; sau 1 s vật B được ném thẳng đứng xuống với 15 m/s. Lấy g=10 m/s². Sau khi B chuyển động 1 s, khoảng cách A–B bằng bao nhiêu mét?',
    difficulty: 'medium', cognitiveLevel: 'application', competency: 'physical_application',
    practiceRole: 'near_transfer', representationType: 'equation', correctAnswer: '0',
    acceptedAnswers: ['0', '0.0', '0,0'], estimatedSeconds: 70,
    reasoning: ['Lúc đó A đã rơi 2 s nên $s_A=5\\cdot2^2=20$ m.', 'B rơi 1 s với $v_0=15$ m/s nên $s_B=15\\cdot1+5\\cdot1^2=20$ m.', 'Hai vật ở cùng vị trí nên khoảng cách bằng 0.']
  },
  {
    id: 'phy10-m1r-q118', subTypeId: 'phy10-qt16-st4', outcomeIds: ['PHY10-M1-O09'],
    content: 'Vật A thả rơi từ độ cao 80 m. Đồng thời, vật B được ném thẳng đứng lên từ mặt đất với 30 m/s. Lấy g=10 m/s². Hai vật gặp nhau sau bao nhiêu giây?',
    difficulty: 'hard', cognitiveLevel: 'application', competency: 'physical_application',
    practiceRole: 'far_transfer', representationType: 'diagram', correctAnswer: '2.67',
    acceptedAnswers: ['2.67', '2,67', '8/3'], estimatedSeconds: 90,
    reasoning: ['Chọn gốc tại mặt đất, chiều dương lên: $y_A=80-5t^2$, $y_B=30t-5t^2$.', 'Cho $y_A=y_B$, hai hạng $-5t^2$ triệt tiêu: $80=30t$.', '$t=8/3\\approx2{,}67$ s; thời điểm này xảy ra trước khi A chạm đất ở 4 s.']
  },
  {
    id: 'phy10-m1r-q119', subTypeId: 'phy10-qt16-st4', outcomeIds: ['PHY10-M1-O09'],
    content: 'Từ một điểm cao, A được thả rơi. Sau 2 s, B được thả từ cùng điểm. Lấy g=10 m/s². Sau khi B rơi thêm 2 s, khoảng cách A–B bằng bao nhiêu mét?',
    difficulty: 'hard', cognitiveLevel: 'application', competency: 'physical_application',
    practiceRole: 'mastery_holdout', representationType: 'equation', correctAnswer: '60',
    acceptedAnswers: ['60', '60.0', '60,0'], estimatedSeconds: 85,
    reasoning: ['Khi B đã rơi 2 s, A đã rơi tổng cộng 4 s.', '$s_A=5\\cdot4^2=80$ m và $s_B=5\\cdot2^2=20$ m.', 'Khoảng cách là $80-20=60$ m, giả sử độ cao đủ lớn để cả hai chưa chạm đất.']
  },
  {
    id: 'phy10-m1r-q120', subTypeId: 'phy10-qt8-st2', outcomeIds: ['PHY10-M1-O01'],
    content: 'Trong hệ quy chiếu dùng để mô tả xe chạy trên đường, vật mốc phù hợp nhất là',
    difficulty: 'easy', cognitiveLevel: 'recognition', competency: 'physical_cognition',
    practiceRole: 'guided', representationType: 'text', correctAnswer: 'C',
    options: ['A. một hành khách trên xe.', 'B. bánh xe đang quay.', 'C. một cột mốc cố định bên đường.', 'D. vô lăng của xe.'], estimatedSeconds: 30,
    reasoning: ['Muốn mô tả chuyển động của xe đối với mặt đường, cần chọn vật đứng yên gắn với mặt đường.', 'Cột mốc cố định là vật mốc phù hợp.']
  },
  {
    id: 'phy10-m1r-q121', subTypeId: 'phy10-qt8-st4', outcomeIds: ['PHY10-M1-O01'],
    content: 'Đại lượng nào dưới đây là một thời điểm?',
    difficulty: 'easy', cognitiveLevel: 'recognition', competency: 'physical_cognition',
    practiceRole: 'guided', representationType: 'text', correctAnswer: 'D',
    options: ['A. 15 phút.', 'B. 20 giây.', 'C. 2 giờ học.', 'D. 7 giờ 30 phút sáng.'], estimatedSeconds: 30,
    reasoning: ['Thời điểm chỉ một mốc trên trục thời gian; khoảng thời gian cho biết độ dài giữa hai mốc.', '7 giờ 30 phút sáng là một mốc xác định.']
  },
  {
    id: 'phy10-m1r-q122', subTypeId: 'phy10-qt10-st2', outcomeIds: ['PHY10-M1-O03'],
    content: 'Vật có độ dịch chuyển 20 m theo chiều dương trong 5 s. Vận tốc trung bình bằng bao nhiêu m/s?',
    difficulty: 'easy', cognitiveLevel: 'application', competency: 'physical_cognition',
    practiceRole: 'guided', representationType: 'equation', correctAnswer: '4',
    acceptedAnswers: ['4', '+4', '4.0', '4,0'], estimatedSeconds: 35,
    reasoning: ['Vận tốc trung bình bằng độ dịch chuyển chia khoảng thời gian.', '$v_{tb}=20/5=4$ m/s.']
  },
  {
    id: 'phy10-m1r-q123', subTypeId: 'phy10-qt10-st3', outcomeIds: ['PHY10-M1-O03'],
    content: 'Khi tính tốc độ trung bình của cả chuyến đi có một khoảng dừng nghỉ, thời gian dùng ở mẫu số phải',
    difficulty: 'easy', cognitiveLevel: 'understanding', competency: 'physical_cognition',
    practiceRole: 'misconception_check', representationType: 'text', correctAnswer: 'D',
    options: ['A. chỉ tính chặng nhanh nhất.', 'B. bỏ toàn bộ thời gian nghỉ.', 'C. chỉ tính chặng đầu.', 'D. gồm cả thời gian chuyển động và thời gian nghỉ.'], estimatedSeconds: 35,
    reasoning: ['Tốc độ trung bình của toàn quá trình dùng tổng quãng đường chia tổng thời gian trôi qua.', 'Vì đồng hồ vẫn chạy khi vật nghỉ nên phải cộng thời gian nghỉ.']
  },
  {
    id: 'phy10-m1r-q124', subTypeId: 'phy10-qt11-st4', outcomeIds: ['PHY10-M1-O04'],
    content: 'Thuyền hướng vuông góc bờ sông trong khi nước chảy dọc theo bờ. Vận tốc thuyền so với bờ là',
    difficulty: 'easy', cognitiveLevel: 'understanding', competency: 'physical_cognition',
    practiceRole: 'guided', representationType: 'diagram', correctAnswer: 'C',
    options: ['A. chỉ bằng vận tốc dòng nước.', 'B. bằng hiệu độ lớn hai vận tốc.', 'C. tổng vector vận tốc thuyền so với nước và vận tốc nước so với bờ.', 'D. luôn vuông góc bờ.'], estimatedSeconds: 40,
    reasoning: ['Quy tắc cộng vận tốc là $\\vec v_{thuyền/bờ}=\\vec v_{thuyền/nước}+\\vec v_{nước/bờ}$.', 'Hai thành phần vuông góc tạo vận tốc tổng hợp xiên so với bờ.']
  },
  {
    id: 'phy10-m1r-q125', subTypeId: 'phy10-qt12-st3', outcomeIds: ['PHY10-M1-O05'],
    content: 'Trên cùng đồ thị x–t của hai vật, giao điểm của hai đường biểu diễn cho biết',
    difficulty: 'easy', cognitiveLevel: 'recognition', competency: 'physical_cognition',
    practiceRole: 'guided', representationType: 'graph', correctAnswer: 'D',
    options: ['A. hai vật luôn cùng vận tốc.', 'B. hai vật cùng gia tốc.', 'C. hai vật đi cùng quãng đường.', 'D. hai vật ở cùng vị trí tại cùng thời điểm.'], estimatedSeconds: 35,
    reasoning: ['Mỗi điểm trên đồ thị x–t biểu diễn một cặp thời điểm–tọa độ.', 'Giao điểm chung nghĩa là hai vật có cùng tọa độ tại cùng thời điểm, tức gặp nhau.']
  },
  {
    id: 'phy10-m1r-q126', subTypeId: 'phy10-qt15-st4', outcomeIds: ['PHY10-M1-O08'],
    content: 'Trên đồ thị v–t, quãng đường đi được trong một khoảng mà v luôn dương bằng',
    difficulty: 'easy', cognitiveLevel: 'recognition', competency: 'physical_cognition',
    practiceRole: 'guided', representationType: 'graph', correctAnswer: 'C',
    options: ['A. hệ số góc của đồ thị.', 'B. tung độ cuối.', 'C. diện tích phần nằm giữa đồ thị và trục thời gian.', 'D. độ dài của khoảng thời gian.'], estimatedSeconds: 35,
    reasoning: ['Diện tích dưới đồ thị v–t cho độ dịch chuyển.', 'Khi v luôn dương, độ dịch chuyển bằng quãng đường nên dùng chính diện tích dương đó.']
  },
  {
    id: 'phy10-m1r-q127', subTypeId: 'phy10-qt16-st1', outcomeIds: ['PHY10-M1-O09'],
    content: 'Một vật được thả rơi từ độ cao h. Trong giây cuối nó rơi 35 m, lấy g=10 m/s². Độ cao h bằng bao nhiêu mét?',
    difficulty: 'hard', cognitiveLevel: 'application', competency: 'physical_application',
    practiceRole: 'mastery_holdout', representationType: 'equation', correctAnswer: '80',
    acceptedAnswers: ['80', '80.0', '80,0'], estimatedSeconds: 85,
    reasoning: ['Quãng đường trong giây thứ n là $s_n=5(2n-1)$.', 'Giải $5(2n-1)=35$ được $n=4$, nên tổng thời gian rơi là 4 s.', 'Độ cao $h=\\tfrac12gt^2=5\\cdot4^2=80$ m.']
  },
  {
    id: 'phy10-m1r-q128', subTypeId: 'phy10-qt16-st3', outcomeIds: ['PHY10-M1-O09'],
    content: 'Vật được ném thẳng đứng lên. Tại điểm cao nhất, vận tốc tức thời của vật bằng',
    difficulty: 'easy', cognitiveLevel: 'recognition', competency: 'physical_cognition',
    practiceRole: 'guided', representationType: 'diagram', correctAnswer: 'C',
    options: ['A. g.', 'B. vận tốc ban đầu.', 'C. 0.', 'D. −g.'], estimatedSeconds: 30,
    reasoning: ['Khi lên tới điểm cao nhất, vật chuyển từ đi lên sang đi xuống.', 'Tại đúng thời điểm đổi chiều, vận tốc tức thời bằng 0, còn gia tốc vẫn bằng gia tốc trọng trường.']
  }
];

const questionTypeIdFrom = (subTypeId: string) => subTypeId.replace(/-st\d+$/, '');

export const g10PhysicsModule1RemediationQuestions: Question[] =
  g10PhysicsModule1RemediationSeeds.map(seed => ({
    id: seed.id,
    subjectId: 'physics',
    topicId: 'phy10-t1',
    questionTypeId: questionTypeIdFrom(seed.subTypeId),
    subTypeId: seed.subTypeId,
    content: seed.content,
    responseType: seed.options ? 'single_choice' : 'short_answer',
    options: seed.options,
    correctAnswer: seed.correctAnswer,
    acceptedAnswers: seed.options
      ? [seed.correctAnswer, seed.correctAnswer.toLowerCase()]
      : (seed.acceptedAnswers ?? [seed.correctAnswer]),
    validatorType: seed.options ? 'choice' : 'exact',
    difficulty: seed.difficulty,
    sourceType: 'manual',
    outcomeIds: seed.outcomeIds,
    competency: seed.competency,
    cognitiveLevel: seed.cognitiveLevel,
    estimatedSeconds: seed.estimatedSeconds,
    practiceRole: seed.practiceRole,
    representationType: seed.representationType,
    isMasteryHoldout: seed.practiceRole === 'mastery_holdout',
    stimulus: seed.stimulus
  }));

export const g10PhysicsModule1RemediationSolutions: Solution[] =
  g10PhysicsModule1RemediationSeeds.map(seed => ({
    id: seed.id.replace('-q', '-s'),
    questionId: seed.id,
    recognition: 'Đọc đúng dữ liệu động học, xác định đại lượng cần tính và kiểm tra dấu.',
    detailedSteps: seed.reasoning.map((explanation, index) => ({
      order: index + 1,
      title: index === 0 ? 'Nhận dạng dữ kiện' : index === seed.reasoning.length - 1 ? 'Kết luận' : 'Tính toán',
      explanation,
      ...(index === seed.reasoning.length - 1 ? { result: seed.correctAnswer } : {})
    })),
    finalAnswer: seed.correctAnswer,
    commonMistakes: ['Nhầm giá trị tức thời với trung bình, nhầm dấu vận tốc hoặc dùng tổng quãng đường thay quãng đường trong một giây.'],
    reviewSuggestions: ['Vẽ trục chiều dương hoặc lập bảng mốc thời gian trước khi thay số.']
  }));
