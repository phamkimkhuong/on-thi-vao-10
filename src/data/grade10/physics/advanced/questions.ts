import type { QuestionStimulus } from '@/types';
import type { AdvancedPhysicsLevel, AdvancedPhysicsProblemLength, AdvancedPhysicsQuestion } from './types';

interface QuestionSeed {
  id: string;
  topicId: string;
  content: string;
  options: string[];
  answer: 'A' | 'B' | 'C' | 'D';
  level: AdvancedPhysicsLevel;
  minutes: number;
  tags: string[];
  problemLength?: AdvancedPhysicsProblemLength;
  stimulus?: QuestionStimulus;
}

const createQuestion = (seed: QuestionSeed): AdvancedPhysicsQuestion => ({
  id: seed.id,
  subjectId: 'physics',
  topicId: seed.topicId,
  questionTypeId: `${seed.topicId}-type`,
  content: seed.content,
  responseType: 'single_choice',
  difficulty: 'hard',
  sourceType: 'manual',
  options: seed.options,
  correctAnswer: seed.answer,
  advancedLevel: seed.level,
  problemLength: seed.problemLength ?? 'compact',
  estimatedMinutes: seed.minutes,
  tags: seed.tags,
  stimulus: seed.stimulus
});

const answerLetters = ['A', 'B', 'C', 'D'] as const;

const balanceDisplayedAnswer = (seed: QuestionSeed): QuestionSeed => {
  const sequence = Number(seed.id.match(/q(\d+)$/)?.[1]);
  const targetIndex = (sequence - 1) % answerLetters.length;
  const correctIndex = answerLetters.indexOf(seed.answer);
  if (!Number.isInteger(sequence) || correctIndex < 0 || targetIndex === correctIndex) return seed;

  const correctOption = seed.options[correctIndex];
  const distractors = seed.options.filter((_, index) => index !== correctIndex);
  const options = [...distractors];
  options.splice(targetIndex, 0, correctOption);

  return { ...seed, options, answer: answerLetters[targetIndex] };
};

const seeds: QuestionSeed[] = [
  // Đo lường & tư duy thực nghiệm
  {
    id: 'phy10-adv-q001', topicId: 'phy10-adv-experiment', level: 'extreme', minutes: 8,
    tags: ['sai số gián tiếp', 'con lắc'],
    content: 'Đo gia tốc trọng trường bằng con lắc đơn với công thức \\(g=4\\pi^2l/T^2\\). Kết quả đo: \\(l=(0{,}800\\pm0{,}002)\\,m\\), \\(T=(1{,}79\\pm0{,}01)\\,s\\). Lấy sai số tỉ đối cực đại. Kết quả viết đúng là',
    options: ['\\(g=(9{,}86\\pm0{,}04)\\,m/s^2\\)', '\\(g=(9{,}86\\pm0{,}14)\\,m/s^2\\)', '\\(g=(9{,}86\\pm0{,}22)\\,m/s^2\\)', '\\(g=(9{,}81\\pm0{,}14)\\,m/s^2\\)'], answer: 'B'
  },
  {
    id: 'phy10-adv-q002', topicId: 'phy10-adv-experiment', level: 'hard', minutes: 5,
    tags: ['đồ thị', 'gia tốc'],
    content: 'Một vật bắt đầu chuyển động nhanh dần đều từ nghỉ. Trên đồ thị \\(s\\) theo \\(t^2\\), hai điểm thuộc đường thẳng tốt nhất có tọa độ \\((1{,}0;0{,}45)\\) và \\((4{,}0;1{,}80)\\), đơn vị lần lượt là \\(s^2\\) và \\(m\\). Gia tốc của vật bằng',
    options: ['\\(0{,}45\\,m/s^2\\)', '\\(0{,}90\\,m/s^2\\)', '\\(1{,}35\\,m/s^2\\)', '\\(1{,}80\\,m/s^2\\)'], answer: 'B'
  },
  {
    id: 'phy10-adv-q003', topicId: 'phy10-adv-experiment', level: 'very_hard', minutes: 6,
    tags: ['sai số', 'khối lượng riêng'],
    content: 'Khối lượng riêng của một trụ đặc được xác định bởi \\(\\rho=4m/(\\pi d^2h)\\). Sai số tỉ đối của \\(m,d,h\\) lần lượt là \\(0{,}5\\%\\), \\(1{,}0\\%\\), \\(2{,}0\\%\\). Sai số tỉ đối cực đại của \\(\\rho\\) là',
    options: ['\\(3{,}5\\%\\)', '\\(4{,}0\\%\\)', '\\(4{,}5\\%\\)', '\\(5{,}5\\%\\)'], answer: 'C'
  },
  {
    id: 'phy10-adv-q004', topicId: 'phy10-adv-experiment', level: 'hard', minutes: 4,
    tags: ['thiết kế phép đo', 'rơi tự do', 'sai số thời điểm'],
    content: 'Hai cảm biến đặt dưới điểm thả lần lượt \\(0{,}80\\,m\\) và \\(1{,}80\\,m\\). Đồng hồ ghi thời điểm vật qua chúng là \\(0{,}50\\,s\\) và \\(0{,}70\\,s\\), nhưng có cùng một độ trễ chưa biết giữa lúc đồng hồ chạy và lúc vật thực sự được thả. Bỏ qua lực cản. Giá trị g suy ra từ số liệu là',
    options: ['\\(8{,}0\\,m/s^2\\)', '\\(9{,}0\\,m/s^2\\)', '\\(10{,}0\\,m/s^2\\)', '\\(12{,}5\\,m/s^2\\)'], answer: 'C'
  },
  {
    id: 'phy10-adv-q005', topicId: 'phy10-adv-experiment', level: 'very_hard', minutes: 5,
    tags: ['độ phân giải', 'thiết kế thí nghiệm'],
    content: 'Các cổng quang giống nhau có cùng sai số tuyệt đối khi đo thời gian. Muốn xác định tốc độ trung bình của xe trên máng với sai số tỉ đối nhỏ nhất, trong khi xe chuyển động gần đều, phương án tốt nhất là',
    options: ['Đặt hai cổng sát nhau để xe ít đổi tốc độ', 'Đo thời gian qua từng cổng rồi lấy trung bình', 'Đặt hai cổng xa nhau nhất có thể và đo thời gian toàn quãng', 'Giảm quãng đường rồi lặp lại đúng một lần'], answer: 'C'
  },
  {
    id: 'phy10-adv-q006', topicId: 'phy10-adv-experiment', level: 'hard', minutes: 4,
    tags: ['đồ thị', 'định luật Hooke'],
    content: 'Khi khảo sát lò xo, cảm biến lực có một độ lệch số không không đổi nên đường thực nghiệm có dạng \\(F=kx+F_0\\). Đại lượng nào vẫn cho phép xác định chính xác độ cứng \\(k\\)?',
    options: ['Tung độ giao điểm với trục \\(F\\)', 'Hoành độ giao điểm với trục \\(x\\)', 'Hệ số góc của đường thẳng', 'Trung bình cộng tất cả giá trị \\(F\\)'], answer: 'C'
  },

  // Động học
  {
    id: 'phy10-adv-q007', topicId: 'phy10-adv-kinematics', level: 'extreme', minutes: 9,
    tags: ['gặp nhau', 'chuyển động nhiều giai đoạn'],
    content: 'Xe A đi qua O với vận tốc không đổi \\(20\\,m/s\\). Sau đó \\(5\\,s\\), xe B bắt đầu từ O, chuyển động cùng chiều từ nghỉ với gia tốc \\(2\\,m/s^2\\). Tính từ lúc A qua O, hai xe gặp nhau tại thời điểm',
    options: ['\\(15-10\\sqrt2\\,s\\)', '\\(15+10\\sqrt2\\,s\\)', '\\(25\\,s\\)', '\\(30\\,s\\)'], answer: 'B'
  },
  {
    id: 'phy10-adv-q008', topicId: 'phy10-adv-kinematics', level: 'hard', minutes: 5,
    tags: ['chuyển động tương đối', 'qua sông'],
    content: 'Sông rộng \\(240\\,m\\), nước chảy \\(3\\,m/s\\). Thuyền có tốc độ đối với nước \\(5\\,m/s\\) và phải cập đúng điểm đối diện. Thời gian qua sông là',
    options: ['\\(48\\,s\\)', '\\(60\\,s\\)', '\\(80\\,s\\)', '\\(120\\,s\\)'], answer: 'B'
  },
  {
    id: 'phy10-adv-q009', topicId: 'phy10-adv-kinematics', level: 'extreme', minutes: 10,
    tags: ['ném xiên', 'cực trị'],
    content: 'Từ O, cần ném một vật tới điểm M có tọa độ ngang \\(x=20\\,m\\), cao \\(y=15\\,m\\). Bỏ qua lực cản, lấy \\(g=10\\,m/s^2\\). Tốc độ ném nhỏ nhất để vật có thể đi qua M là',
    options: ['\\(10\\sqrt2\\,m/s\\)', '\\(10\\sqrt3\\,m/s\\)', '\\(20\\,m/s\\)', '\\(10\\sqrt5\\,m/s\\)'], answer: 'C'
  },
  {
    id: 'phy10-adv-q010', topicId: 'phy10-adv-kinematics', level: 'very_hard', minutes: 7,
    tags: ['ném xiên', 'ném từ độ cao'],
    content: 'Từ độ cao \\(20\\,m\\), một vật được ném với tốc độ \\(20\\,m/s\\), hợp phương ngang góc \\(30^\\circ\\). Bỏ qua lực cản, \\(g=10\\,m/s^2\\). Tầm xa tính từ chân điểm ném là',
    options: ['\\(20\\sqrt3\\,m\\)', '\\(10\\sqrt3(1+\\sqrt5)\\,m\\)', '\\(20(1+\\sqrt5)\\,m\\)', '\\(40\\sqrt3\\,m\\)'], answer: 'B'
  },
  {
    id: 'phy10-adv-q011', topicId: 'phy10-adv-kinematics', level: 'hard', minutes: 5,
    tags: ['ném xiên', 'so sánh'],
    content: 'Hai vật được ném từ cùng một điểm, cùng tốc độ, với các góc \\(30^\\circ\\) và \\(60^\\circ\\) so với phương ngang. Bỏ qua lực cản. Tỉ số độ cao cực đại \\(H_{30}/H_{60}\\) bằng',
    options: ['\\(1/3\\)', '\\(1/2\\)', '\\(1/\\sqrt3\\)', '\\(1\\)'], answer: 'A'
  },
  {
    id: 'phy10-adv-q012', topicId: 'phy10-adv-kinematics', level: 'very_hard', minutes: 7,
    tags: ['phương trình chuyển động', 'đổi chiều'],
    content: 'Một chất điểm chuyển động trên trục Ox theo \\(x=t^3-6t^2+9t\\) (m, s). Tổng quãng đường đi được từ \\(t=0\\) đến \\(t=4\\,s\\) là',
    options: ['\\(4\\,m\\)', '\\(8\\,m\\)', '\\(12\\,m\\)', '\\(16\\,m\\)'], answer: 'C'
  },

  // Động lực học
  {
    id: 'phy10-adv-q013', topicId: 'phy10-adv-dynamics', level: 'hard', minutes: 5,
    tags: ['ròng rọc', 'hệ vật'],
    content: 'Hai vật \\(m_1=3\\,kg\\), \\(m_2=2\\,kg\\) nối bằng dây nhẹ qua ròng rọc lí tưởng gắn trong thang máy đang đi lên nhanh dần đều với gia tốc \\(2\\,m/s^2\\). Lấy \\(g=10\\,m/s^2\\). Lực căng dây bằng',
    options: ['\\(24{,}0\\,N\\)', '\\(26{,}4\\,N\\)', '\\(28{,}8\\,N\\)', '\\(30{,}0\\,N\\)'], answer: 'C'
  },
  {
    id: 'phy10-adv-q014', topicId: 'phy10-adv-dynamics', level: 'extreme', minutes: 10,
    tags: ['mặt phẳng nghiêng', 'ma sát', 'lực ngang'],
    content: 'Vật \\(m=2\\,kg\\) nằm trên mặt phẳng nghiêng góc \\(30^\\circ\\), hệ số ma sát \\(\\mu=0{,}20\\). Tác dụng lực ngang F làm vật vừa sắp chuyển động lên dốc. Lấy \\(g=10\\,m/s^2\\). Độ lớn F gần nhất là',
    options: ['\\(13{,}1\\,N\\)', '\\(17{,}6\\,N\\)', '\\(22{,}4\\,N\\)', '\\(26{,}2\\,N\\)'], answer: 'B'
  },
  {
    id: 'phy10-adv-q015', topicId: 'phy10-adv-dynamics', level: 'extreme', minutes: 8,
    tags: ['nêm', 'hệ quy chiếu gia tốc'],
    content: 'Một vật nhỏ nằm yên tương đối trên mặt nêm nhẵn nghiêng góc \\(\\theta\\) so với phương ngang. Nêm được gia tốc theo phương ngang. Để vật không trượt trên nêm, độ lớn gia tốc của nêm phải bằng',
    options: ['\\(g\\sin\\theta\\)', '\\(g\\cos\\theta\\)', '\\(g\\tan\\theta\\)', '\\(g\\cot\\theta\\)'], answer: 'C'
  },
  {
    id: 'phy10-adv-q016', topicId: 'phy10-adv-dynamics', level: 'very_hard', minutes: 7,
    tags: ['hai vật chồng nhau', 'ma sát nghỉ'],
    content: 'Vật \\(2\\,kg\\) đặt trên vật \\(3\\,kg\\); sàn dưới vật lớn nhẵn. Hệ số ma sát nghỉ giữa hai vật là \\(0{,}40\\). Một lực ngang F tác dụng lên vật dưới. Lấy \\(g=10\\,m/s^2\\). F lớn nhất để hai vật không trượt tương đối là',
    options: ['\\(8\\,N\\)', '\\(12\\,N\\)', '\\(20\\,N\\)', '\\(32\\,N\\)'], answer: 'C'
  },
  {
    id: 'phy10-adv-q017', topicId: 'phy10-adv-dynamics', level: 'extreme', minutes: 9,
    tags: ['ròng rọc', 'ma sát', 'lực căng'],
    content: 'Vật \\(2\\,kg\\) trên bàn ngang có \\(\\mu=0{,}10\\), nối qua ròng rọc lí tưởng với vật treo \\(3\\,kg\\). Lấy \\(g=10\\,m/s^2\\). Khi hệ chuyển động, lực căng dây bằng',
    options: ['\\(11{,}2\\,N\\)', '\\(13{,}2\\,N\\)', '\\(16{,}8\\,N\\)', '\\(18{,}0\\,N\\)'], answer: 'B'
  },
  {
    id: 'phy10-adv-q018', topicId: 'phy10-adv-dynamics', level: 'very_hard', minutes: 6,
    tags: ['con lắc hình nón', 'lực hướng tâm'],
    content: 'Con lắc hình nón có dây dài \\(1\\,m\\), dây hợp phương thẳng đứng góc \\(60^\\circ\\). Lấy \\(g=10\\,m/s^2\\). Tốc độ góc của vật là',
    options: ['\\(\\sqrt5\\,rad/s\\)', '\\(\\sqrt{10}\\,rad/s\\)', '\\(2\\sqrt5\\,rad/s\\)', '\\(5\\,rad/s\\)'], answer: 'C'
  },

  // Năng lượng
  {
    id: 'phy10-adv-q019', topicId: 'phy10-adv-energy', level: 'extreme', minutes: 9,
    tags: ['vòng lượn', 'bảo toàn cơ năng'],
    content: 'Vật \\(1\\,kg\\) trượt không ma sát từ nghỉ ở độ cao \\(5\\,m\\) so với đáy rồi đi vào vòng tròn bán kính \\(1{,}5\\,m\\). Lấy \\(g=10\\,m/s^2\\). Phản lực của ray lên vật tại đỉnh vòng bằng',
    options: ['\\(0\\,N\\)', '\\(10\\,N\\)', '\\(16{,}7\\,N\\)', '\\(26{,}7\\,N\\)'], answer: 'C'
  },
  {
    id: 'phy10-adv-q020', topicId: 'phy10-adv-energy', level: 'hard', minutes: 5,
    tags: ['lò xo', 'ma sát'],
    content: 'Vật \\(1\\,kg\\) được lò xo \\(k=200\\,N/m\\) nén \\(0{,}20\\,m\\) phóng trên đoạn ngang nhám từ vị trí nén đến vị trí lò xo tự nhiên, với \\(\\mu=0{,}20\\). Sau đó vật đi lên mặt phẳng nghiêng nhẵn góc \\(30^\\circ\\). Lấy \\(g=10\\,m/s^2\\). Quãng đường vật đi lên dốc trước khi dừng là',
    options: ['\\(0{,}36\\,m\\)', '\\(0{,}60\\,m\\)', '\\(0{,}72\\,m\\)', '\\(0{,}80\\,m\\)'], answer: 'C'
  },
  {
    id: 'phy10-adv-q021', topicId: 'phy10-adv-energy', level: 'extreme', minutes: 10,
    tags: ['dây xích', 'năng lượng'],
    content: 'Dây xích đồng chất dài \\(1\\,m\\) nằm trên bàn nhẵn, một đoạn \\(0{,}20\\,m\\) thòng qua mép. Thả nhẹ dây. Khi đoạn thòng dài \\(0{,}60\\,m\\), lấy \\(g=10\\,m/s^2\\), tốc độ của dây là',
    options: ['\\(\\sqrt{1{,}6}\\,m/s\\)', '\\(\\sqrt{2{,}4}\\,m/s\\)', '\\(\\sqrt{3{,}2}\\,m/s\\)', '\\(2\\,m/s\\)'], answer: 'C'
  },
  {
    id: 'phy10-adv-q022', topicId: 'phy10-adv-energy', level: 'hard', minutes: 5,
    tags: ['lực biến đổi', 'công'],
    content: 'Một lực cùng phương chuyển động có độ lớn biến thiên theo vị trí: \\(F=4x\\) (N), với x tính bằng mét. Công của lực khi vật đi từ \\(x=0\\) đến \\(x=3\\,m\\) là',
    options: ['\\(12\\,J\\)', '\\(18\\,J\\)', '\\(24\\,J\\)', '\\(36\\,J\\)'], answer: 'B'
  },
  {
    id: 'phy10-adv-q023', topicId: 'phy10-adv-energy', level: 'very_hard', minutes: 7,
    tags: ['công suất', 'chuyển động đều'],
    content: 'Ô tô khối lượng \\(1000\\,kg\\) lên dốc góc \\(5^\\circ\\) với tốc độ không đổi \\(10\\,m/s\\). Tổng lực cản khác là \\(500\\,N\\). Lấy \\(g=10\\,m/s^2\\), \\(\\sin5^\\circ=0{,}0872\\). Công suất kéo gần nhất là',
    options: ['\\(8{,}72\\,kW\\)', '\\(10{,}0\\,kW\\)', '\\(13{,}72\\,kW\\)', '\\(18{,}72\\,kW\\)'], answer: 'C'
  },
  {
    id: 'phy10-adv-q024', topicId: 'phy10-adv-energy', level: 'hard', minutes: 5,
    tags: ['con lắc', 'lực căng'],
    content: 'Một con lắc đơn được thả không vận tốc đầu khi dây hợp phương thẳng đứng góc \\(60^\\circ\\). Bỏ qua lực cản. Khi dây hợp phương thẳng đứng góc \\(30^\\circ\\), lực căng dây bằng',
    options: ['\\(mg\\cos30^\\circ\\)', '\\(mg(2\\cos30^\\circ-1)\\)', '\\(mg(3\\cos30^\\circ-1)\\)', '\\(mg(3-\\cos30^\\circ)\\)'], answer: 'C'
  },

  // Động lượng
  {
    id: 'phy10-adv-q025', topicId: 'phy10-adv-momentum', level: 'very_hard', minutes: 7,
    tags: ['con lắc đạn', 'va chạm mềm'],
    content: 'Viên đạn \\(10\\,g\\) cắm vào khối gỗ \\(990\\,g\\) đang đứng yên. Sau va chạm, hệ dâng cao \\(5\\,cm\\). Lấy \\(g=10\\,m/s^2\\). Tốc độ viên đạn trước va chạm là',
    options: ['\\(50\\,m/s\\)', '\\(100\\,m/s\\)', '\\(150\\,m/s\\)', '\\(200\\,m/s\\)'], answer: 'B'
  },
  {
    id: 'phy10-adv-q026', topicId: 'phy10-adv-momentum', level: 'extreme', minutes: 8,
    tags: ['va chạm hai chiều', 'bảo toàn động năng'],
    content: 'Hai viên bi giống hệt nhau. Bi 1 chuyển động với tốc độ v, bi 2 đứng yên. Sau va chạm đàn hồi không xuyên tâm, hai bi đều chuyển động. Góc giữa hai vectơ vận tốc sau va chạm bằng',
    options: ['\\(30^\\circ\\)', '\\(45^\\circ\\)', '\\(60^\\circ\\)', '\\(90^\\circ\\)'], answer: 'D'
  },
  {
    id: 'phy10-adv-q027', topicId: 'phy10-adv-momentum', level: 'hard', minutes: 4,
    tags: ['nổ', 'hệ cô lập'],
    content: 'Một vật \\(3\\,kg\\) đang chuyển động về phía đông với \\(4\\,m/s\\) thì nổ thành hai mảnh \\(1\\,kg\\) và \\(2\\,kg\\). Mảnh \\(1\\,kg\\) bay về phía bắc với \\(8\\,m/s\\). Độ lớn vận tốc mảnh còn lại là',
    options: ['\\(2\\sqrt5\\,m/s\\)', '\\(2\\sqrt{13}\\,m/s\\)', '\\(4\\sqrt5\\,m/s\\)', '\\(10\\,m/s\\)'], answer: 'B'
  },
  {
    id: 'phy10-adv-q028', topicId: 'phy10-adv-momentum', level: 'very_hard', minutes: 6,
    tags: ['xung lượng', 'va chạm tường'],
    content: 'Quả bóng \\(0{,}20\\,kg\\) đập đàn hồi vào tường với tốc độ \\(10\\,m/s\\), phương vận tốc hợp với pháp tuyến tường góc \\(30^\\circ\\). Độ lớn xung lượng tường truyền cho bóng là',
    options: ['\\(2\\,N\\!\\cdot s\\)', '\\(2\\sqrt3\\,N\\!\\cdot s\\)', '\\(4\\,N\\!\\cdot s\\)', '\\(4\\sqrt3\\,N\\!\\cdot s\\)'], answer: 'B'
  },
  {
    id: 'phy10-adv-q029', topicId: 'phy10-adv-momentum', level: 'hard', minutes: 5,
    tags: ['va chạm mềm', 'chuyển động ngược chiều'],
    content: 'Xe m chuyển động \\(6\\,m/s\\) va chạm mềm với xe \\(2m\\) đứng yên. Ngay sau đó, khối \\(3m\\) tiếp tục va chạm mềm với xe m đang đi ngược chiều với \\(2\\,m/s\\). Vận tốc cuối của cả hệ là',
    options: ['\\(0{,}5\\,m/s\\) theo chiều ban đầu', '\\(1{,}0\\,m/s\\) theo chiều ban đầu', '\\(1{,}5\\,m/s\\) theo chiều ban đầu', '\\(2{,}0\\,m/s\\) theo chiều ban đầu'], answer: 'B'
  },
  {
    id: 'phy10-adv-q030', topicId: 'phy10-adv-momentum', level: 'extreme', minutes: 9,
    tags: ['đạn xuyên vật', 'năng lượng sau va chạm'],
    content: 'Viên đạn \\(10\\,g\\) bay với \\(500\\,m/s\\), xuyên qua khối gỗ \\(1\\,kg\\) treo bằng dây rồi ra với \\(100\\,m/s\\). Bỏ qua xung lượng ngoài lúc xuyên, lấy \\(g=10\\,m/s^2\\). Khối gỗ dâng cao tối đa',
    options: ['\\(0{,}20\\,m\\)', '\\(0{,}40\\,m\\)', '\\(0{,}80\\,m\\)', '\\(1{,}60\\,m\\)'], answer: 'C'
  },

  // Chuyển động tròn
  {
    id: 'phy10-adv-q031', topicId: 'phy10-adv-circular', level: 'hard', minutes: 5,
    tags: ['vòng lượn', 'điều kiện tiếp xúc'],
    content: 'Một vật trượt không ma sát từ nghỉ vào vòng tròn thẳng đứng bán kính R. Để vật vừa đủ không rời ray tại đỉnh, độ cao thả tối thiểu tính từ đáy vòng là',
    options: ['\\(2R\\)', '\\(5R/2\\)', '\\(3R\\)', '\\(7R/2\\)'], answer: 'B'
  },
  {
    id: 'phy10-adv-q032', topicId: 'phy10-adv-circular', level: 'hard', minutes: 5,
    tags: ['cầu lồi', 'phản lực'],
    content: 'Ô tô \\(1000\\,kg\\) qua đỉnh cầu lồi bán kính \\(40\\,m\\) với tốc độ \\(15\\,m/s\\). Lấy \\(g=10\\,m/s^2\\). Phản lực của mặt cầu lên xe là',
    options: ['\\(4375\\,N\\)', '\\(5625\\,N\\)', '\\(10000\\,N\\)', '\\(15625\\,N\\)'], answer: 'A'
  },
  {
    id: 'phy10-adv-q033', topicId: 'phy10-adv-circular', level: 'very_hard', minutes: 6,
    tags: ['dây quay', 'lực căng cực đại'],
    content: 'Vật \\(1\\,kg\\) quay tròn đều trên mặt bàn ngang nhẵn, nối với tâm bằng dây dài \\(0{,}50\\,m\\). Dây chịu lực căng tối đa \\(40\\,N\\). Tốc độ lớn nhất của vật là',
    options: ['\\(2\\sqrt2\\,m/s\\)', '\\(2\\sqrt5\\,m/s\\)', '\\(4\\sqrt2\\,m/s\\)', '\\(5\\,m/s\\)'], answer: 'B'
  },
  {
    id: 'phy10-adv-q034', topicId: 'phy10-adv-circular', level: 'very_hard', minutes: 6,
    tags: ['vệ tinh', 'định luật Kepler'],
    content: 'Hai vệ tinh tròn quanh cùng một hành tinh ở bán kính quỹ đạo R và 2R. Tỉ số chu kì \\(T_{2R}/T_R\\) bằng',
    options: ['\\(\\sqrt2\\)', '\\(2\\)', '\\(2\\sqrt2\\)', '\\(4\\)'], answer: 'C'
  },
  {
    id: 'phy10-adv-q035', topicId: 'phy10-adv-circular', level: 'extreme', minutes: 8,
    tags: ['ống trụ quay', 'ma sát'],
    content: 'Một người đứng áp vào thành trong của trụ đứng bán kính \\(2\\,m\\) đang quay. Sàn hạ xuống; hệ số ma sát giữa người và thành trụ là \\(0{,}40\\). Lấy \\(g=10\\,m/s^2\\). Tốc độ góc nhỏ nhất để người không trượt là',
    options: ['\\(2{,}50\\,rad/s\\)', '\\(3{,}54\\,rad/s\\)', '\\(5{,}00\\,rad/s\\)', '\\(6{,}25\\,rad/s\\)'], answer: 'B'
  },
  {
    id: 'phy10-adv-q036', topicId: 'phy10-adv-circular', level: 'very_hard', minutes: 7,
    tags: ['chuyển động tròn đứng', 'điều kiện căng dây'],
    content: 'Một xô nước được quay trong mặt phẳng thẳng đứng theo đường tròn bán kính \\(0{,}80\\,m\\). Để nước vừa không rơi ở đỉnh, tốc độ tối thiểu của xô tại đáy là',
    options: ['\\(2\\sqrt2\\,m/s\\)', '\\(2\\sqrt5\\,m/s\\)', '\\(2\\sqrt{10}\\,m/s\\)', '\\(4\\sqrt5\\,m/s\\)'], answer: 'C'
  },

  // Cân bằng, biến dạng & chất lưu
  {
    id: 'phy10-adv-q037', topicId: 'phy10-adv-statics', level: 'very_hard', minutes: 7,
    tags: ['thanh', 'dây treo', 'moment'],
    content: 'Thanh đồng chất dài \\(4\\,m\\), khối lượng \\(20\\,kg\\), nằm ngang và có bản lề ở một đầu. Đầu kia được giữ bằng dây hợp với thanh góc \\(30^\\circ\\). Lấy \\(g=10\\,m/s^2\\). Lực căng dây là',
    options: ['\\(100\\,N\\)', '\\(150\\,N\\)', '\\(200\\,N\\)', '\\(400\\,N\\)'], answer: 'C'
  },
  {
    id: 'phy10-adv-q038', topicId: 'phy10-adv-statics', level: 'extreme', minutes: 10,
    tags: ['thang', 'ma sát', 'moment'],
    content: 'Thang đồng chất dài \\(5\\,m\\), trọng lượng \\(300\\,N\\), tựa vào tường nhẵn; chân thang trên sàn nhám. Thang hợp sàn góc \\(53^\\circ\\), lấy \\(\\sin53^\\circ=0{,}8\\), \\(\\cos53^\\circ=0{,}6\\). Hệ số ma sát nghỉ tối thiểu để thang cân bằng là',
    options: ['\\(0{,}250\\)', '\\(0{,}375\\)', '\\(0{,}500\\)', '\\(0{,}625\\)'], answer: 'B'
  },
  {
    id: 'phy10-adv-q039', topicId: 'phy10-adv-statics', level: 'hard', minutes: 5,
    tags: ['lò xo nối tiếp', 'độ cứng tương đương'],
    content: 'Hai lò xo độ cứng k và 2k mắc song song; cụm này mắc nối tiếp với lò xo thứ ba độ cứng 3k. Độ cứng tương đương của toàn hệ là',
    options: ['\\(k\\)', '\\(3k/2\\)', '\\(2k\\)', '\\(3k\\)'], answer: 'B'
  },
  {
    id: 'phy10-adv-q040', topicId: 'phy10-adv-statics', level: 'hard', minutes: 5,
    tags: ['Archimedes', 'vật nổi'],
    content: 'Khối đồng chất thể tích \\(0{,}010\\,m^3\\), khối lượng riêng \\(600\\,kg/m^3\\), nổi trong nước \\(1000\\,kg/m^3\\). Đặt nhẹ lên khối một vật nhỏ để thể tích chìm bằng \\(80\\%\\) thể tích khối. Khối lượng vật nhỏ là',
    options: ['\\(1\\,kg\\)', '\\(2\\,kg\\)', '\\(4\\,kg\\)', '\\(8\\,kg\\)'], answer: 'B'
  },
  {
    id: 'phy10-adv-q041', topicId: 'phy10-adv-statics', level: 'very_hard', minutes: 6,
    tags: ['bình thông nhau', 'áp suất chất lỏng'],
    content: 'Trong một nhánh bình thông nhau chứa nước, đổ thêm cột dầu cao \\(10\\,cm\\), khối lượng riêng dầu \\(800\\,kg/m^3\\), nước \\(1000\\,kg/m^3\\). Độ cao mặt nước ở nhánh kia so với mặt phân cách dầu–nước là',
    options: ['\\(2\\,cm\\)', '\\(8\\,cm\\)', '\\(10\\,cm\\)', '\\(12{,}5\\,cm\\)'], answer: 'B'
  },
  {
    id: 'phy10-adv-q042', topicId: 'phy10-adv-statics', level: 'hard', minutes: 5,
    tags: ['máy ép thủy lực', 'Pascal'],
    content: 'Máy ép thủy lực chứa nước, pittông nhỏ diện tích \\(5\\,cm^2\\) nằm cao hơn pittông lớn \\(0{,}50\\,m\\); pittông lớn có diện tích \\(200\\,cm^2\\). Bỏ qua ma sát, lấy \\(\\rho=1000\\,kg/m^3\\), \\(g=10\\,m/s^2\\). Tác dụng \\(150\\,N\\) lên pittông nhỏ thì lực ở pittông lớn là',
    options: ['\\(5900\\,N\\)', '\\(6000\\,N\\)', '\\(6100\\,N\\)', '\\(6200\\,N\\)'], answer: 'C'
  },

  // Đợt mở rộng 2 — Đo lường & tư duy thực nghiệm
  {
    id: 'phy10-adv-q043', topicId: 'phy10-adv-experiment', level: 'very_hard', minutes: 7,
    tags: ['sai số gián tiếp', 'đo chu kì'],
    content: 'Một con lắc đơn có \\(l=(0{,}625\\pm0{,}002)\\,m\\). Thời gian của 20 dao động là \\(t=(31{,}6\\pm0{,}2)\\,s\\). Với \\(g=4\\pi^2l/T^2\\), lấy sai số tỉ đối cực đại, kết quả đo g viết đúng là',
    options: ['\\(g=(9{,}88\\pm0{,}06)\\,m/s^2\\)', '\\(g=(9{,}88\\pm0{,}10)\\,m/s^2\\)', '\\(g=(9{,}88\\pm0{,}16)\\,m/s^2\\)', '\\(g=(9{,}88\\pm0{,}32)\\,m/s^2\\)'], answer: 'C'
  },
  {
    id: 'phy10-adv-q044', topicId: 'phy10-adv-experiment', level: 'very_hard', minutes: 6,
    tags: ['đồ thị thực nghiệm', 'chuyển động biến đổi'],
    content: 'Đồ thị \\(v^2\\) theo quãng đường s của một vật chuyển động nhanh dần đều là đường thẳng. Hai điểm trên đường khớp tốt nhất là \\((1;9)\\) và \\((5;25)\\), đơn vị \\(m\\) và \\(m^2/s^2\\). Tốc độ ban đầu của vật bằng',
    options: ['\\(1\\,m/s\\)', '\\(\\sqrt5\\,m/s\\)', '\\(2\\sqrt2\\,m/s\\)', '\\(3\\,m/s\\)'], answer: 'B'
  },
  {
    id: 'phy10-adv-q045', topicId: 'phy10-adv-experiment', level: 'hard', minutes: 5,
    tags: ['tuyến tính hóa', 'ném ngang'],
    content: 'Trong thí nghiệm ném ngang với tốc độ đầu \\(5\\,m/s\\), đồ thị độ rơi y theo \\(x^2\\) có hệ số góc \\(0{,}20\\,m^{-1}\\). Bỏ qua lực cản. Giá trị gia tốc trọng trường đo được là',
    options: ['\\(5\\,m/s^2\\)', '\\(8\\,m/s^2\\)', '\\(10\\,m/s^2\\)', '\\(12{,}5\\,m/s^2\\)'], answer: 'C'
  },
  {
    id: 'phy10-adv-q046', topicId: 'phy10-adv-experiment', level: 'hard', minutes: 5,
    tags: ['hiệu chuẩn cảm biến', 'nội suy'],
    content: 'Cảm biến lực có quan hệ tuyến tính nhưng bị lệch điểm không. Với các quả cân \\(100\\,g\\) và \\(300\\,g\\), cảm biến lần lượt chỉ \\(0{,}96\\,N\\) và \\(2{,}92\\,N\\). Một vật chưa biết làm cảm biến chỉ \\(1{,}94\\,N\\). Khối lượng vật là',
    options: ['\\(180\\,g\\)', '\\(190\\,g\\)', '\\(200\\,g\\)', '\\(210\\,g\\)'], answer: 'C'
  },
  {
    id: 'phy10-adv-q047', topicId: 'phy10-adv-experiment', level: 'very_hard', minutes: 6,
    tags: ['thiết kế thí nghiệm', 'lò xo có khối lượng'],
    content: 'Cùng một lò xo được đo độ cứng bằng hai cách: cân bằng tĩnh \\(k=mg/\\Delta l\\) và chu kì dao động \\(k=4\\pi^2m/T^2\\). Kết quả động nhỏ hơn ổn định so với kết quả tĩnh. Nguyên nhân hợp lí nhất là',
    options: ['Bỏ qua khối lượng lò xo trong phép đo động', 'Dùng quả nặng có khối lượng quá lớn trong phép đo tĩnh', 'Gia tốc trọng trường thay đổi giữa hai phép đo', 'Lực đàn hồi không có phương thẳng đứng'], answer: 'A'
  },
  {
    id: 'phy10-adv-q048', topicId: 'phy10-adv-experiment', level: 'extreme', minutes: 7,
    tags: ['sai số ngẫu nhiên', 'tối ưu phép đo'],
    content: 'Đồng hồ có độ phân giải \\(0{,}01\\,s\\). Chu kì con lắc khoảng \\(1{,}5\\,s\\), biên độ giảm chậm. Trong cùng tổng thời gian làm thí nghiệm, phương án nào giảm ảnh hưởng sai số bấm giờ tốt nhất?',
    options: ['Đo một chu kì thật nhiều lần rồi cộng kết quả', 'Mỗi lần đo 20 chu kì liên tiếp và lặp lại nhiều lần', 'Đo nửa chu kì rồi nhân đôi', 'Chỉ đo lần đầu vì biên độ khi đó lớn nhất'], answer: 'B'
  },

  // Đợt mở rộng 2 — Động học
  {
    id: 'phy10-adv-q049', topicId: 'phy10-adv-kinematics', level: 'extreme', minutes: 9,
    tags: ['dòng chảy biến thiên', 'chuyển động tương đối'],
    content: 'Sông rộng \\(100\\,m\\). Tốc độ dòng nước tại điểm cách bờ xuất phát một khoảng y là \\(u=0{,}02y\\) (m/s). Thuyền luôn hướng vuông góc bờ và có tốc độ đối với nước \\(5\\,m/s\\). Độ trôi dạt khi sang bờ bên kia là',
    options: ['\\(10\\,m\\)', '\\(20\\,m\\)', '\\(25\\,m\\)', '\\(40\\,m\\)'], answer: 'B'
  },
  {
    id: 'phy10-adv-q050', topicId: 'phy10-adv-kinematics', level: 'very_hard', minutes: 7,
    tags: ['khoảng cách cực đại', 'phương trình tọa độ'],
    content: 'Hai chất điểm cùng xuất phát tại O, chuyển động cùng chiều với \\(x_A=t^2\\) và \\(x_B=12t\\) (m, s). Trước lần gặp lại sau lúc xuất phát, khoảng cách lớn nhất giữa chúng là',
    options: ['\\(24\\,m\\)', '\\(30\\,m\\)', '\\(36\\,m\\)', '\\(48\\,m\\)'], answer: 'C'
  },
  {
    id: 'phy10-adv-q051', topicId: 'phy10-adv-kinematics', level: 'hard', minutes: 6,
    tags: ['thả vật từ máy bay', 'mục tiêu chuyển động'],
    content: 'Máy bay bay ngang ở độ cao \\(500\\,m\\) với \\(100\\,m/s\\). Một xe dưới đất chạy cùng chiều với \\(20\\,m/s\\). Bỏ qua lực cản, \\(g=10\\,m/s^2\\). Để kiện hàng thả từ máy bay rơi trúng xe, lúc thả xe phải ở trước hình chiếu máy bay một khoảng',
    options: ['\\(200\\,m\\)', '\\(500\\,m\\)', '\\(800\\,m\\)', '\\(1000\\,m\\)'], answer: 'C'
  },
  {
    id: 'phy10-adv-q052', topicId: 'phy10-adv-kinematics', level: 'very_hard', minutes: 7,
    tags: ['phương trình quỹ đạo', 'suy ngược dữ kiện'],
    content: 'Quỹ đạo của vật ném xiên có phương trình \\(y=x-0{,}05x^2\\) (x, y tính bằng mét). Bỏ qua lực cản, lấy \\(g=10\\,m/s^2\\). Tốc độ ném ban đầu là',
    options: ['\\(10\\,m/s\\)', '\\(10\\sqrt2\\,m/s\\)', '\\(20\\,m/s\\)', '\\(20\\sqrt2\\,m/s\\)'], answer: 'B'
  },
  {
    id: 'phy10-adv-q053', topicId: 'phy10-adv-kinematics', level: 'very_hard', minutes: 6,
    tags: ['hệ quy chiếu thang máy', 'ném thẳng đứng'],
    content: 'Trong thang máy đang đi lên nhanh dần đều với gia tốc \\(2\\,m/s^2\\), một người ném quả bóng thẳng đứng lên với tốc độ \\(10\\,m/s\\) đối với thang. Lấy \\(g=10\\,m/s^2\\). Thời gian bóng trở lại tay người là',
    options: ['\\(4/3\\,s\\)', '\\(5/3\\,s\\)', '\\(2\\,s\\)', '\\(5/2\\,s\\)'], answer: 'B'
  },
  {
    id: 'phy10-adv-q054', topicId: 'phy10-adv-kinematics', level: 'extreme', minutes: 8,
    tags: ['ném xiên', 'giao điểm quỹ đạo'],
    content: 'Từ O, một vật được ném với \\(20\\,m/s\\), góc \\(45^\\circ\\). Đồng thời tại điểm cách O theo phương ngang \\(20\\,m\\) và cao \\(20\\,m\\), một vật khác được thả rơi. Bỏ qua lực cản, \\(g=10\\,m/s^2\\). Hai vật va chạm ở độ cao',
    options: ['\\(5\\,m\\)', '\\(10\\,m\\)', '\\(10\\sqrt2\\,m\\)', '\\(15\\,m\\)'], answer: 'B'
  },

  // Đợt mở rộng 2 — Động lực học
  {
    id: 'phy10-adv-q055', topicId: 'phy10-adv-dynamics', level: 'hard', minutes: 6,
    tags: ['chuỗi vật', 'lực căng'],
    content: 'Năm vật giống nhau, mỗi vật \\(2\\,kg\\), nối thành hàng bằng dây nhẹ trên sàn nhẵn. Kéo vật đầu bằng lực \\(50\\,N\\). Lực căng dây giữa vật thứ hai và vật thứ ba bằng',
    options: ['\\(20\\,N\\)', '\\(30\\,N\\)', '\\(40\\,N\\)', '\\(50\\,N\\)'], answer: 'B'
  },
  {
    id: 'phy10-adv-q056', topicId: 'phy10-adv-dynamics', level: 'very_hard', minutes: 6,
    tags: ['ròng rọc động', 'định luật Newton'],
    content: 'Một vật \\(4\\,kg\\) gắn với ròng rọc động lí tưởng. Đầu tự do của dây được kéo bằng lực không đổi \\(30\\,N\\); đầu kia cố định. Bỏ qua khối lượng ròng rọc, lấy \\(g=10\\,m/s^2\\). Gia tốc của vật là',
    options: ['\\(2{,}5\\,m/s^2\\) lên', '\\(5\\,m/s^2\\) lên', '\\(5\\,m/s^2\\) xuống', '\\(10\\,m/s^2\\) lên'], answer: 'B'
  },
  {
    id: 'phy10-adv-q057', topicId: 'phy10-adv-dynamics', level: 'very_hard', minutes: 7,
    tags: ['hai vật chồng nhau', 'lực tác dụng lên vật trên'],
    content: 'Hai vật giống nhau, mỗi vật \\(2\\,kg\\), chồng lên nhau trên sàn nhẵn. Hệ số ma sát nghỉ giữa chúng là \\(0{,}30\\). Kéo vật trên bằng lực ngang F. Lấy \\(g=10\\,m/s^2\\). F lớn nhất để hai vật chưa trượt tương đối là',
    options: ['\\(6\\,N\\)', '\\(12\\,N\\)', '\\(18\\,N\\)', '\\(24\\,N\\)'], answer: 'B'
  },
  {
    id: 'phy10-adv-q058', topicId: 'phy10-adv-dynamics', level: 'extreme', minutes: 11,
    tags: ['cân bằng giới hạn', 'ma sát', 'lực ngang'],
    content: 'Vật \\(2\\,kg\\) nằm trên mặt phẳng nghiêng góc \\(30^\\circ\\), hệ số ma sát nghỉ \\(0{,}50\\). Tác dụng lực ngang F. Lấy \\(g=10\\,m/s^2\\). Khoảng giá trị F để vật có thể đứng yên gần nhất là',
    options: ['\\(0\\le F\\le18{,}7\\,N\\)', '\\(1{,}2\\le F\\le30{,}3\\,N\\)', '\\(5{,}0\\le F\\le40{,}0\\,N\\)', '\\(11{,}5\\le F\\le34{,}6\\,N\\)'], answer: 'B'
  },
  {
    id: 'phy10-adv-q059', topicId: 'phy10-adv-dynamics', level: 'extreme', minutes: 9,
    tags: ['đường nghiêng', 'ma sát', 'tốc độ giới hạn'],
    content: 'Đường vòng bán kính \\(50\\,m\\), mặt đường nghiêng góc \\(37^\\circ\\), hệ số ma sát \\(0{,}25\\). Lấy \\(g=10\\,m/s^2\\), \\(\\sin37^\\circ=0{,}6\\), \\(\\cos37^\\circ=0{,}8\\). Tốc độ lớn nhất để xe không trượt là',
    options: ['\\(20{,}0\\,m/s\\)', '\\(22{,}4\\,m/s\\)', '\\(24{,}8\\,m/s\\)', '\\(28{,}3\\,m/s\\)'], answer: 'C'
  },
  {
    id: 'phy10-adv-q060', topicId: 'phy10-adv-dynamics', level: 'very_hard', minutes: 8,
    tags: ['mặt phẳng nghiêng', 'ròng rọc', 'ma sát'],
    content: 'Vật \\(5\\,kg\\) trên mặt phẳng nghiêng \\(37^\\circ\\), \\(\\mu=0{,}25\\), nối qua ròng rọc lí tưởng với vật treo \\(6\\,kg\\). Lấy \\(g=10\\,m/s^2\\), \\(\\sin37^\\circ=0{,}6\\), \\(\\cos37^\\circ=0{,}8\\). Gia tốc hệ bằng',
    options: ['\\(10/11\\,m/s^2\\)', '\\(20/11\\,m/s^2\\)', '\\(30/11\\,m/s^2\\)', '\\(40/11\\,m/s^2\\)'], answer: 'B'
  },

  // Đợt mở rộng 2 — Năng lượng
  {
    id: 'phy10-adv-q061', topicId: 'phy10-adv-energy', level: 'extreme', minutes: 10,
    tags: ['công suất không đổi', 'động lực học'],
    content: 'Ô tô \\(1000\\,kg\\) chuyển động trên đường ngang không lực cản dưới công suất kéo không đổi \\(50\\,kW\\). Quãng đường để tốc độ tăng từ \\(10\\,m/s\\) lên \\(20\\,m/s\\) là',
    options: ['\\(30{,}0\\,m\\)', '\\(46{,}7\\,m\\)', '\\(70{,}0\\,m\\)', '\\(100\\,m\\)'], answer: 'B'
  },
  {
    id: 'phy10-adv-q062', topicId: 'phy10-adv-energy', level: 'very_hard', minutes: 8,
    tags: ['mất tiếp xúc', 'mặt cầu'],
    content: 'Vật nhỏ trượt không ma sát từ nghỉ tại đỉnh một mặt cầu cố định bán kính R. Khi vật rời mặt cầu, độ cao vật đã hạ xuống so với đỉnh bằng',
    options: ['\\(R/4\\)', '\\(R/3\\)', '\\(R/2\\)', '\\(2R/3\\)'], answer: 'B'
  },
  {
    id: 'phy10-adv-q063', topicId: 'phy10-adv-energy', level: 'very_hard', minutes: 8,
    tags: ['lực biến đổi', 'điểm dừng'],
    content: 'Vật \\(2\\,kg\\) chuyển động trên Ox với \\(v_0=2\\,m/s\\) tại \\(x=0\\). Lực cùng trục có \\(F=12-2x\\) (N, m). Vị trí dương đầu tiên vật dừng lại là',
    options: ['\\(6\\,m\\)', '\\(6+2\\sqrt5\\,m\\)', '\\(6+2\\sqrt{10}\\,m\\)', '\\(12\\,m\\)'], answer: 'C'
  },
  {
    id: 'phy10-adv-q064', topicId: 'phy10-adv-energy', level: 'hard', minutes: 6,
    tags: ['lò xo thẳng đứng', 'bảo toàn cơ năng'],
    content: 'Vật \\(0{,}50\\,kg\\) gắn vào đầu trên của lò xo thẳng đứng \\(k=200\\,N/m\\). Từ vị trí lò xo bị nén \\(0{,}10\\,m\\), thả vật không vận tốc đầu. Bỏ qua lực cản, lấy \\(g=10\\,m/s^2\\). Ở điểm cao nhất, vật ở cao hơn vị trí lò xo tự nhiên một đoạn',
    options: ['\\(0{,}05\\,m\\)', '\\(0{,}10\\,m\\)', '\\(0{,}15\\,m\\)', '\\(0{,}20\\,m\\)'], answer: 'A'
  },
  {
    id: 'phy10-adv-q065', topicId: 'phy10-adv-energy', level: 'extreme', minutes: 10,
    tags: ['con lắc có chốt', 'điều kiện căng dây'],
    content: 'Con lắc dài L được thả từ vị trí dây nằm ngang. Một chốt nằm trên đường thẳng đứng qua điểm treo, cách điểm treo một đoạn d; dây mắc chốt khi vật qua vị trí thấp nhất. Để vật vừa đủ đi trọn vòng quanh chốt, d bằng',
    options: ['\\(L/2\\)', '\\(3L/5\\)', '\\(2L/3\\)', '\\(3L/4\\)'], answer: 'B'
  },
  {
    id: 'phy10-adv-q066', topicId: 'phy10-adv-energy', level: 'hard', minutes: 5,
    tags: ['hiệu suất', 'máy bơm'],
    content: 'Máy bơm đưa nước lên cao \\(15\\,m\\) với lưu lượng \\(0{,}020\\,m^3/s\\), tiêu thụ công suất \\(4{,}0\\,kW\\). Lấy \\(\\rho=1000\\,kg/m^3\\), \\(g=10\\,m/s^2\\). Hiệu suất máy là',
    options: ['\\(60\\%\\)', '\\(70\\%\\)', '\\(75\\%\\)', '\\(80\\%\\)'], answer: 'C'
  },

  // Đợt mở rộng 2 — Động lượng
  {
    id: 'phy10-adv-q067', topicId: 'phy10-adv-momentum', level: 'hard', minutes: 6,
    tags: ['người và xe', 'vận tốc tương đối'],
    content: 'Người \\(60\\,kg\\) đứng trên xe \\(240\\,kg\\), hệ ban đầu đứng yên trên mặt ngang nhẵn. Người chạy với tốc độ \\(4\\,m/s\\) đối với xe. Vận tốc của xe đối với đất là',
    options: ['\\(0{,}5\\,m/s\\) ngược chiều người', '\\(0{,}8\\,m/s\\) ngược chiều người', '\\(1{,}0\\,m/s\\) ngược chiều người', '\\(1{,}0\\,m/s\\) cùng chiều người'], answer: 'B'
  },
  {
    id: 'phy10-adv-q068', topicId: 'phy10-adv-momentum', level: 'very_hard', minutes: 7,
    tags: ['con lắc đạn ngang', 'ma sát'],
    content: 'Đạn \\(20\\,g\\) cắm vào khối gỗ \\(1{,}98\\,kg\\) trên sàn ngang. Sau va chạm, hệ trượt \\(2\\,m\\) rồi dừng; \\(\\mu=0{,}20\\), \\(g=10\\,m/s^2\\). Tốc độ đầu của đạn là',
    options: ['\\(100\\sqrt2\\,m/s\\)', '\\(200\\,m/s\\)', '\\(200\\sqrt2\\,m/s\\)', '\\(400\\,m/s\\)'], answer: 'C'
  },
  {
    id: 'phy10-adv-q069', topicId: 'phy10-adv-momentum', level: 'extreme', minutes: 9,
    tags: ['va chạm đàn hồi', 'truyền năng lượng'],
    content: 'Vật khối lượng m va chạm đàn hồi xuyên tâm với vật M đang đứng yên. Sau va chạm, vật M nhận \\(75\\%\\) động năng ban đầu. Tỉ số \\(M/m\\) có thể là',
    options: ['Chỉ \\(1/3\\)', 'Chỉ \\(3\\)', '\\(1/3\\) hoặc \\(3\\)', '\\(1/2\\) hoặc \\(2\\)'], answer: 'C'
  },
  {
    id: 'phy10-adv-q070', topicId: 'phy10-adv-momentum', level: 'hard', minutes: 6,
    tags: ['tâm khối', 'người trên thuyền'],
    content: 'Người \\(50\\,kg\\) đi từ mũi đến lái một thuyền \\(150\\,kg\\), quãng đường đối với thuyền là \\(4\\,m\\). Nước yên lặng, bỏ qua lực cản. Thuyền dịch chuyển đối với bờ một đoạn',
    options: ['\\(0{,}5\\,m\\)', '\\(1{,}0\\,m\\)', '\\(2{,}0\\,m\\)', '\\(3{,}0\\,m\\)'], answer: 'B'
  },
  {
    id: 'phy10-adv-q071', topicId: 'phy10-adv-momentum', level: 'very_hard', minutes: 6,
    tags: ['hệ số đàn hồi', 'xung lượng'],
    content: 'Quả bóng \\(0{,}20\\,kg\\) đập vuông góc sàn với tốc độ \\(10\\,m/s\\). Hệ số đàn hồi giữa bóng và sàn là \\(0{,}80\\). Bỏ qua trọng lực trong thời gian va chạm. Độ lớn xung lượng sàn truyền cho bóng là',
    options: ['\\(0{,}4\\,N\\!\\cdot s\\)', '\\(2{,}0\\,N\\!\\cdot s\\)', '\\(3{,}6\\,N\\!\\cdot s\\)', '\\(4{,}0\\,N\\!\\cdot s\\)'], answer: 'C'
  },
  {
    id: 'phy10-adv-q072', topicId: 'phy10-adv-momentum', level: 'hard', minutes: 6,
    tags: ['nổ ba mảnh', 'động lượng hai chiều'],
    content: 'Vật đứng yên nổ thành ba mảnh bằng nhau. Hai mảnh có vận tốc lần lượt \\(6\\,m/s\\) về đông và \\(8\\,m/s\\) về bắc. Tốc độ mảnh thứ ba là',
    options: ['\\(2\\,m/s\\)', '\\(7\\,m/s\\)', '\\(10\\,m/s\\)', '\\(14\\,m/s\\)'], answer: 'C'
  },

  // Đợt mở rộng 2 — Chuyển động tròn
  {
    id: 'phy10-adv-q073', topicId: 'phy10-adv-circular', level: 'hard', minutes: 5,
    tags: ['đường nghiêng', 'không ma sát'],
    content: 'Một đường vòng được nghiêng góc \\(37^\\circ\\) và thiết kế để xe chạy \\(20\\,m/s\\) không cần ma sát. Lấy \\(g=10\\,m/s^2\\), \\(\\tan37^\\circ=0{,}75\\). Bán kính đường vòng là',
    options: ['\\(40{,}0\\,m\\)', '\\(50{,}0\\,m\\)', '\\(53{,}3\\,m\\)', '\\(75{,}0\\,m\\)'], answer: 'C'
  },
  {
    id: 'phy10-adv-q074', topicId: 'phy10-adv-circular', level: 'very_hard', minutes: 6,
    tags: ['vệ tinh', 'chu kì quỹ đạo'],
    content: 'Một vệ tinh được chuyển sang quỹ đạo tròn quanh cùng hành tinh sao cho chu kì tăng gấp đôi. Bán kính quỹ đạo mới bằng bán kính cũ nhân với',
    options: ['\\(\\sqrt2\\)', '\\(2^{2/3}\\)', '\\(2\\)', '\\(2\\sqrt2\\)'], answer: 'B'
  },
  {
    id: 'phy10-adv-q075', topicId: 'phy10-adv-circular', level: 'very_hard', minutes: 6,
    tags: ['đĩa quay', 'ma sát nghỉ'],
    content: 'Vật nhỏ nằm cách tâm đĩa ngang \\(0{,}50\\,m\\), hệ số ma sát nghỉ \\(0{,}40\\). Lấy \\(g=10\\,m/s^2\\). Tần số quay lớn nhất để vật không trượt gần nhất là',
    options: ['\\(0{,}32\\,Hz\\)', '\\(0{,}45\\,Hz\\)', '\\(0{,}64\\,Hz\\)', '\\(0{,}90\\,Hz\\)'], answer: 'B'
  },
  {
    id: 'phy10-adv-q076', topicId: 'phy10-adv-circular', level: 'extreme', minutes: 8,
    tags: ['vòng lượn', 'phản lực hai vị trí'],
    content: 'Vật chuyển động trong vòng tròn thẳng đứng bán kính R. Tại đáy, phản lực của ray bằng \\(6mg\\). Bỏ qua ma sát. Phản lực của ray tại đỉnh vòng bằng',
    options: ['\\(0\\)', '\\(mg\\)', '\\(2mg\\)', '\\(3mg\\)'], answer: 'A'
  },
  {
    id: 'phy10-adv-q077', topicId: 'phy10-adv-circular', level: 'hard', minutes: 6,
    tags: ['chuyển động tròn', 'vật treo qua lỗ'],
    content: 'Vật \\(2\\,kg\\) quay tròn đều trên bàn ngang nhẵn, nối qua lỗ ở tâm với vật treo \\(1\\,kg\\). Bán kính quỹ đạo \\(0{,}50\\,m\\), vật treo đứng yên. Lấy \\(g=10\\,m/s^2\\). Tốc độ góc bằng',
    options: ['\\(\\sqrt5\\,rad/s\\)', '\\(\\sqrt{10}\\,rad/s\\)', '\\(2\\sqrt5\\,rad/s\\)', '\\(5\\,rad/s\\)'], answer: 'B'
  },
  {
    id: 'phy10-adv-q078', topicId: 'phy10-adv-circular', level: 'very_hard', minutes: 7,
    tags: ['hấp dẫn', 'hai hành tinh cùng mật độ'],
    content: 'Hai hành tinh hình cầu có cùng khối lượng riêng, bán kính hành tinh B gấp đôi A. Tỉ số tốc độ của vệ tinh bay sát bề mặt \\(v_B/v_A\\) bằng',
    options: ['\\(\\sqrt2\\)', '\\(2\\)', '\\(2\\sqrt2\\)', '\\(4\\)'], answer: 'B'
  },

  // Đợt mở rộng 2 — Cân bằng, biến dạng & chất lưu
  {
    id: 'phy10-adv-q079', topicId: 'phy10-adv-statics', level: 'extreme', minutes: 9,
    tags: ['thanh không đồng chất', 'moment lực'],
    content: 'Thanh dài L có khối lượng phân bố với mật độ dài tỉ lệ khoảng cách đến bản lề ở đầu trái. Thanh nằm ngang, đầu phải giữ bởi dây hợp thanh góc \\(30^\\circ\\). Gọi W là trọng lượng thanh. Lực căng dây bằng',
    options: ['\\(2W/3\\)', '\\(W\\)', '\\(4W/3\\)', '\\(2W\\)'], answer: 'C'
  },
  {
    id: 'phy10-adv-q080', topicId: 'phy10-adv-statics', level: 'hard', minutes: 6,
    tags: ['phản lực gối đỡ', 'moment'],
    content: 'Dầm đồng chất dài \\(6\\,m\\), trọng lượng \\(300\\,N\\), đặt trên hai gối tại vị trí cách đầu trái \\(1\\,m\\) và \\(5\\,m\\). Người nặng \\(600\\,N\\) đứng tại vị trí \\(2\\,m\\). Phản lực của gối bên trái bằng',
    options: ['\\(300\\,N\\)', '\\(450\\,N\\)', '\\(600\\,N\\)', '\\(750\\,N\\)'], answer: 'C'
  },
  {
    id: 'phy10-adv-q081', topicId: 'phy10-adv-statics', level: 'very_hard', minutes: 7,
    tags: ['thanh cứng', 'hai lò xo'],
    content: 'Thanh cứng không trọng lượng dài \\(3\\,m\\) được treo bởi hai lò xo thẳng đứng ở hai đầu, có \\(k_1=10000\\,N/m\\), \\(k_2=20000\\,N/m\\). Treo vật \\(300\\,N\\) tại điểm cách đầu gắn lò xo \\(k_1\\) một mét; coi góc nghiêng của thanh đủ nhỏ để dùng cánh tay đòn theo chiều dài ban đầu. Độ chênh độ dãn hai lò xo là',
    options: ['\\(0{,}005\\,m\\)', '\\(0{,}010\\,m\\)', '\\(0{,}015\\,m\\)', '\\(0{,}020\\,m\\)'], answer: 'C'
  },
  {
    id: 'phy10-adv-q082', topicId: 'phy10-adv-statics', level: 'extreme', minutes: 10,
    tags: ['vật nổi', 'băng tan'],
    content: 'Khối băng \\(0{,}010\\,m^3\\), khối lượng riêng \\(900\\,kg/m^3\\), chứa viên đá \\(0{,}50\\,kg\\), khối lượng riêng \\(2500\\,kg/m^3\\), đang nổi trong nước. Khi băng tan hoàn toàn và đá chìm, thể tích nước bị chiếm chỗ giảm',
    options: ['\\(1{,}0\\times10^{-4}\\,m^3\\)', '\\(2{,}0\\times10^{-4}\\,m^3\\)', '\\(3{,}0\\times10^{-4}\\,m^3\\)', '\\(5{,}0\\times10^{-4}\\,m^3\\)'], answer: 'C'
  },
  {
    id: 'phy10-adv-q083', topicId: 'phy10-adv-statics', level: 'very_hard', minutes: 7,
    tags: ['cân bằng ba lực', 'hai dây treo'],
    content: 'Biển nặng \\(100\\,N\\) được treo bằng hai dây hợp phương ngang lần lượt \\(30^\\circ\\) và \\(60^\\circ\\). Lực căng của dây tạo góc \\(30^\\circ\\) bằng',
    options: ['\\(50\\,N\\)', '\\(50\\sqrt2\\,N\\)', '\\(50\\sqrt3\\,N\\)', '\\(100\\,N\\)'], answer: 'A'
  },
  {
    id: 'phy10-adv-q084', topicId: 'phy10-adv-statics', level: 'hard', minutes: 6,
    tags: ['cắt lò xo', 'mắc song song'],
    content: 'Lò xo đồng chất độ cứng k được cắt thành hai đoạn có chiều dài tỉ lệ \\(1:2\\). Hai đoạn sau đó mắc song song. Độ cứng tương đương của hệ là',
    options: ['\\(3k/2\\)', '\\(3k\\)', '\\(9k/2\\)', '\\(6k\\)'], answer: 'C'
  },

  // Đợt mở rộng 3 — Đo lường & tư duy thực nghiệm
  {
    id: 'phy10-adv-q085', topicId: 'phy10-adv-experiment', level: 'hard', minutes: 5,
    tags: ['xử lí số liệu', 'sai số phép đo'],
    content: 'Đo cùng một chiều dài năm lần thu được \\(20{,}1; 20{,}3; 20{,}2; 20{,}4; 20{,}0\\,cm\\). Sai số dụng cụ là \\(0{,}05\\,cm\\). Lấy sai số ngẫu nhiên bằng độ lệch tuyệt đối trung bình và làm tròn sai số đến một chữ số có nghĩa, kết quả là',
    options: ['\\((20{,}2\\pm0{,}2)\\,cm\\)', '\\((20{,}2\\pm0{,}1)\\,cm\\)', '\\((20{,}0\\pm0{,}2)\\,cm\\)', '\\((20{,}4\\pm0{,}1)\\,cm\\)'], answer: 'A'
  },
  {
    id: 'phy10-adv-q086', topicId: 'phy10-adv-experiment', level: 'very_hard', minutes: 6,
    tags: ['đồ thị thực nghiệm', 'ma sát'],
    content: 'Khi kéo một vật chuyển động đều, đường khớp tốt nhất của lực kéo F theo phản lực N có phương trình \\(F=0{,}28N+0{,}60\\) (N). Biết dụng cụ kéo còn có lực cản gần như không đổi. Hệ số ma sát trượt và lực cản dụng cụ lần lượt là',
    options: ['\\(0{,}28; 0\\,N\\)', '\\(0{,}28; 0{,}60\\,N\\)', '\\(0{,}60; 0{,}28\\,N\\)', '\\(0{,}88; 0{,}60\\,N\\)'], answer: 'B'
  },
  {
    id: 'phy10-adv-q087', topicId: 'phy10-adv-experiment', level: 'hard', minutes: 5,
    tags: ['hiệu chuẩn', 'nội suy tuyến tính'],
    content: 'Một cảm biến nhiệt tuyến tính cho số chỉ 12 ở \\(0^\\circ C\\) và 212 ở \\(100^\\circ C\\). Khi nhúng vào chất lỏng chưa biết nhiệt độ, cảm biến chỉ 112. Nhiệt độ chất lỏng là',
    options: ['\\(40^\\circ C\\)', '\\(45^\\circ C\\)', '\\(50^\\circ C\\)', '\\(56^\\circ C\\)'], answer: 'C'
  },
  {
    id: 'phy10-adv-q088', topicId: 'phy10-adv-experiment', level: 'very_hard', minutes: 6,
    tags: ['sai số gián tiếp', 'khối lượng riêng'],
    content: 'Khối lượng riêng của một quả cầu đặc được tính từ khối lượng m và đường kính d. Nếu sai số tỉ đối của m là \\(0{,}5\\%\\), của d là \\(1{,}0\\%\\), thì sai số tỉ đối cực đại của khối lượng riêng bằng',
    options: ['\\(1{,}5\\%\\)', '\\(2{,}0\\%\\)', '\\(3{,}0\\%\\)', '\\(3{,}5\\%\\)'], answer: 'D'
  },
  {
    id: 'phy10-adv-q089', topicId: 'phy10-adv-experiment', level: 'hard', minutes: 5,
    tags: ['tuyến tính hóa', 'rơi tự do'],
    content: 'Để xác định gia tốc trọng trường bằng dữ liệu quãng đường rơi s và thời gian t của vật thả từ nghỉ, cách vẽ đồ thị nào cho đường thẳng có hệ số góc bằng \\(g/2\\), giúp khai thác đồng thời nhiều lần đo?',
    options: ['s theo t', 's theo \\(t^2\\)', '\\(s^2\\) theo t', '\\(s/t\\) theo t'], answer: 'B'
  },
  {
    id: 'phy10-adv-q090', topicId: 'phy10-adv-experiment', level: 'extreme', minutes: 7,
    tags: ['sai số hệ thống', 'thiết kế phép đo'],
    content: 'Khi đọc thước, mắt luôn lệch về cùng một phía nên mọi kết quả đều lớn hơn giá trị thật gần \\(0{,}8\\,mm\\). Thực hiện thêm 100 lần đo và lấy trung bình sẽ làm sai lệch này thay đổi như thế nào?',
    options: ['Giảm còn một phần mười', 'Giảm còn một phần một trăm', 'Gần như vẫn là \\(0{,}8\\,mm\\)', 'Triệt tiêu hoàn toàn'], answer: 'C'
  },
  {
    id: 'phy10-adv-q091', topicId: 'phy10-adv-experiment', level: 'very_hard', minutes: 6,
    tags: ['đồ thị đàn hồi', 'sai lệch điểm không'],
    content: 'Khi hiệu chuẩn một lò xo, cảm biến lực có độ lệch điểm không không đổi. Đường khớp F theo độ dãn đi qua hai điểm \\((0{,}020\\,m;1{,}40\\,N)\\) và \\((0{,}080\\,m;4{,}40\\,N)\\). Độ cứng lò xo và số chỉ lệch của cảm biến lần lượt là',
    options: ['\\(40\\,N/m;0{,}60\\,N\\)', '\\(50\\,N/m;0\\,N\\)', '\\(50\\,N/m;0{,}40\\,N\\)', '\\(60\\,N/m;0{,}20\\,N\\)'], answer: 'C'
  },
  {
    id: 'phy10-adv-q092', topicId: 'phy10-adv-experiment', level: 'extreme', minutes: 8,
    tags: ['đồ thị con lắc', 'sai lệch điểm không'],
    content: 'Trong thí nghiệm con lắc, đường khớp thực nghiệm có dạng \\(T^2=4{,}00l+0{,}20\\), với T tính bằng s và chiều dài l đọc trên thước tính bằng m. Nếu độ dài vật lí là \\(l+l_0\\), độ lệch điểm không \\(l_0\\) bằng',
    options: ['\\(0{,}02\\,m\\)', '\\(0{,}04\\,m\\)', '\\(0{,}05\\,m\\)', '\\(0{,}20\\,m\\)'], answer: 'C'
  },

  // Đợt mở rộng 3 — Động học nâng cao
  {
    id: 'phy10-adv-q093', topicId: 'phy10-adv-kinematics', level: 'hard', minutes: 5,
    tags: ['chuyển động tương đối', 'vận tốc mưa'],
    content: 'Mưa rơi thẳng đứng với tốc độ \\(10\\,m/s\\) so với đất. Một người đi xe đạp theo phương ngang với tốc độ \\(10\\,m/s\\). So với người, các giọt mưa chuyển động theo phương hợp với phương thẳng đứng góc',
    options: ['\\(30^\\circ\\)', '\\(45^\\circ\\)', '\\(60^\\circ\\)', '\\(90^\\circ\\)'], answer: 'B'
  },
  {
    id: 'phy10-adv-q094', topicId: 'phy10-adv-kinematics', level: 'very_hard', minutes: 7,
    tags: ['ném ngang', 'mặt phẳng nghiêng'],
    content: 'Từ đỉnh một mặt phẳng nghiêng góc \\(30^\\circ\\) so với phương ngang, ném một vật theo phương ngang với tốc độ \\(10\\,m/s\\). Bỏ qua cản không khí, lấy \\(g=10\\,m/s^2\\). Thời gian để vật chạm mặt phẳng nghiêng là',
    options: ['\\(1/\\sqrt3\\,s\\)', '\\(2/\\sqrt3\\,s\\)', '\\(\\sqrt3\\,s\\)', '\\(2\\,s\\)'], answer: 'B'
  },
  {
    id: 'phy10-adv-q095', topicId: 'phy10-adv-kinematics', level: 'very_hard', minutes: 8,
    tags: ['đuổi bắt', 'chuyển động trễ'],
    content: 'Xe A qua O tại \\(t=0\\) và chuyển động thẳng đều với \\(10\\,m/s\\). Đúng 2 s sau, xe B khởi hành từ O, nhanh dần đều từ nghỉ với gia tốc \\(5\\,m/s^2\\). Tính từ lúc A qua O, B đuổi kịp A tại thời điểm',
    options: ['\\(4-2\\sqrt3\\,s\\)', '\\(4\\,s\\)', '\\(4+\\sqrt3\\,s\\)', '\\(4+2\\sqrt3\\,s\\)'], answer: 'D'
  },
  {
    id: 'phy10-adv-q096', topicId: 'phy10-adv-kinematics', level: 'hard', minutes: 6,
    tags: ['chuyển động nhiều giai đoạn', 'quãng đường'],
    content: 'Vật có tốc độ đầu \\(2\\,m/s\\), tăng tốc đều \\(3\\,m/s^2\\) trong 4 s rồi hãm đều với độ lớn gia tốc \\(2\\,m/s^2\\) cho đến khi dừng. Tổng quãng đường vật đi được là',
    options: ['\\(67\\,m\\)', '\\(74\\,m\\)', '\\(81\\,m\\)', '\\(98\\,m\\)'], answer: 'C'
  },
  {
    id: 'phy10-adv-q097', topicId: 'phy10-adv-kinematics', level: 'hard', minutes: 5,
    tags: ['thuyền qua sông', 'tổng hợp vận tốc'],
    content: 'Sông rộng \\(120\\,m\\), nước chảy đều \\(3\\,m/s\\). Thuyền chạy \\(5\\,m/s\\) so với nước và hướng vuông góc bờ để thời gian qua sông ngắn nhất. Khi sang bờ, thuyền bị trôi xuôi dòng',
    options: ['\\(48\\,m\\)', '\\(60\\,m\\)', '\\(72\\,m\\)', '\\(90\\,m\\)'], answer: 'C'
  },
  {
    id: 'phy10-adv-q098', topicId: 'phy10-adv-kinematics', level: 'very_hard', minutes: 6,
    tags: ['ném xiên', 'quỹ đạo'],
    content: 'Hai vật được ném từ cùng một điểm với cùng tốc độ đầu, lần lượt hợp phương ngang góc \\(30^\\circ\\) và \\(60^\\circ\\). Chúng có cùng tầm xa trên mặt phẳng ngang. Tỉ số độ cao cực đại \\(H_{60}/H_{30}\\) bằng',
    options: ['\\(1\\)', '\\(\\sqrt3\\)', '\\(2\\)', '\\(3\\)'], answer: 'D'
  },
  {
    id: 'phy10-adv-q099', topicId: 'phy10-adv-kinematics', level: 'extreme', minutes: 9,
    tags: ['gặp nhau trong không trung', 'ném ngang'],
    content: 'Vật A được thả từ nghỉ tại điểm \\((20;45)\\,m\\). Đồng thời, vật B được ném từ \\((0;0)\\) với thành phần vận tốc ngang \\(10\\,m/s\\). Lấy \\(g=10\\,m/s^2\\), bỏ qua cản. Để hai vật va nhau, thành phần vận tốc thẳng đứng hướng lên của B phải bằng',
    options: ['\\(20\\,m/s\\)', '\\(22{,}5\\,m/s\\)', '\\(25\\,m/s\\)', '\\(30\\,m/s\\)'], answer: 'B'
  },
  {
    id: 'phy10-adv-q100', topicId: 'phy10-adv-kinematics', level: 'extreme', minutes: 8,
    tags: ['vận tốc theo vị trí', 'gia tốc'],
    content: 'Một vật chuyển động thẳng theo chiều dương với quan hệ \\(v^2=16+8x\\) trong hệ SI, tại \\(t=0\\) vật ở \\(x=0\\). Thời gian để vật đến vị trí \\(x=3\\,m\\) là',
    options: ['\\((\\sqrt{10}-2)/2\\,s\\)', '\\((\\sqrt{10}-2)/4\\,s\\)', '\\((\\sqrt{40}-4)/2\\,s\\)', '\\(3/4\\,s\\)'], answer: 'A'
  },

  // Đợt mở rộng 3 — Động lực học hệ vật
  {
    id: 'phy10-adv-q101', topicId: 'phy10-adv-dynamics', level: 'extreme', minutes: 9,
    tags: ['máy Atwood', 'quán tính ròng rọc'],
    content: 'Máy Atwood có hai vật \\(4\\,kg\\) và \\(2\\,kg\\), dây không dãn. Ròng rọc bán kính \\(0{,}10\\,m\\), moment quán tính \\(0{,}20\\,kg.m^2\\), trục không ma sát và dây không trượt. Lấy \\(g=10\\,m/s^2\\). Gia tốc của hệ là',
    options: ['\\(10/13\\,m/s^2\\)', '\\(20/13\\,m/s^2\\)', '\\(5/2\\,m/s^2\\)', '\\(10/3\\,m/s^2\\)'], answer: 'A'
  },
  {
    id: 'phy10-adv-q102', topicId: 'phy10-adv-dynamics', level: 'very_hard', minutes: 7,
    tags: ['nêm chuyển động', 'hệ quy chiếu gia tốc'],
    content: 'Một vật nhỏ nằm trên mặt nêm nhẵn nghiêng \\(30^\\circ\\), mặt nghiêng cao dần sang phải. Để vật đứng yên tương đối với nêm, phải cho nêm chuyển động nhanh dần đều theo phương ngang với gia tốc',
    options: ['sang phải, \\(g/\\sqrt3\\)', 'sang trái, \\(g/\\sqrt3\\)', 'sang phải, \\(g\\sqrt3\\)', 'sang trái, \\(g\\sqrt3\\)'], answer: 'B'
  },
  {
    id: 'phy10-adv-q103', topicId: 'phy10-adv-dynamics', level: 'hard', minutes: 6,
    tags: ['thang máy', 'lực tương tác'],
    content: 'Người khối lượng \\(60\\,kg\\) đứng trên cân trong thang máy đi lên nhanh dần đều \\(2\\,m/s^2\\), đồng thời giữ một vật \\(10\\,kg\\) đứng yên tương đối bằng sợi dây. Lấy \\(g=10\\,m/s^2\\). Số chỉ của cân là',
    options: ['\\(600\\,N\\)', '\\(720\\,N\\)', '\\(840\\,N\\)', '\\(960\\,N\\)'], answer: 'C'
  },
  {
    id: 'phy10-adv-q104', topicId: 'phy10-adv-dynamics', level: 'hard', minutes: 6,
    tags: ['hai vật chồng', 'ma sát nghỉ'],
    content: 'Vật \\(2\\,kg\\) đặt trên vật \\(4\\,kg\\), mặt sàn nhẵn, hệ số ma sát nghỉ giữa hai vật là \\(0{,}30\\). Tác dụng lực ngang F lên vật dưới, lấy \\(g=10\\,m/s^2\\). F lớn nhất để hai vật không trượt tương đối là',
    options: ['\\(12\\,N\\)', '\\(18\\,N\\)', '\\(24\\,N\\)', '\\(30\\,N\\)'], answer: 'B'
  },
  {
    id: 'phy10-adv-q105', topicId: 'phy10-adv-dynamics', level: 'very_hard', minutes: 7,
    tags: ['dây xích', 'ma sát giới hạn'],
    content: 'Dây xích đồng chất dài L nằm trên bàn ngang nhám, một đoạn dài x thõng qua mép bàn. Hệ số ma sát nghỉ giữa xích và bàn là \\(0{,}50\\), mép bàn nhẵn. Khi dây vừa bắt đầu trượt, tỉ số \\(x/L\\) bằng',
    options: ['\\(1/4\\)', '\\(1/3\\)', '\\(1/2\\)', '\\(2/3\\)'], answer: 'B'
  },
  {
    id: 'phy10-adv-q106', topicId: 'phy10-adv-dynamics', level: 'hard', minutes: 5,
    tags: ['cầu lồi', 'mất tiếp xúc'],
    content: 'Ô tô đi qua đỉnh cầu lồi có bán kính cong \\(40\\,m\\). Bỏ qua lực cản và lấy \\(g=10\\,m/s^2\\). Ở tốc độ nào phản lực của mặt cầu tác dụng lên ô tô vừa bằng không?',
    options: ['\\(10\\,m/s\\)', '\\(15\\,m/s\\)', '\\(20\\,m/s\\)', '\\(25\\,m/s\\)'], answer: 'C'
  },
  {
    id: 'phy10-adv-q107', topicId: 'phy10-adv-dynamics', level: 'very_hard', minutes: 7,
    tags: ['vật áp tường', 'ma sát nghỉ'],
    content: 'Một khối nhỏ được giữ áp vào thành thẳng đứng của xe nhờ xe chuyển động nhanh dần đều theo phương ngang. Hệ số ma sát nghỉ giữa khối và thành là \\(0{,}40\\). Lấy \\(g=10\\,m/s^2\\). Gia tốc ngang tối thiểu để khối không rơi là',
    options: ['\\(4\\,m/s^2\\)', '\\(10\\,m/s^2\\)', '\\(20\\,m/s^2\\)', '\\(25\\,m/s^2\\)'], answer: 'D'
  },
  {
    id: 'phy10-adv-q108', topicId: 'phy10-adv-dynamics', level: 'extreme', minutes: 9,
    tags: ['ròng rọc động', 'ràng buộc dây'],
    content: 'Một vật m gắn với ròng rọc động, được đỡ bởi hai nhánh dây; đầu tự do của dây treo vật \\(2m\\). Bỏ qua khối lượng dây, ròng rọc và ma sát. Khi thả hệ, gia tốc của vật m có độ lớn và chiều là',
    options: ['\\(g/5\\), hướng lên', '\\(g/3\\), hướng lên', '\\(g/3\\), hướng xuống', '\\(2g/3\\), hướng lên'], answer: 'B'
  },

  // Đợt mở rộng 3 — Năng lượng & công suất
  {
    id: 'phy10-adv-q109', topicId: 'phy10-adv-energy', level: 'hard', minutes: 6,
    tags: ['lò xo', 'ma sát'],
    content: 'Vật \\(1\\,kg\\) trượt trên mặt ngang với tốc độ \\(10\\,m/s\\), đến nén lò xo \\(k=200\\,N/m\\). Hệ số ma sát trượt trên toàn đoạn nén là \\(0{,}20\\), lấy \\(g=10\\,m/s^2\\). Độ nén cực đại gần nhất với',
    options: ['\\(0{,}50\\,m\\)', '\\(0{,}60\\,m\\)', '\\(0{,}70\\,m\\)', '\\(0{,}80\\,m\\)'], answer: 'C'
  },
  {
    id: 'phy10-adv-q110', topicId: 'phy10-adv-energy', level: 'very_hard', minutes: 7,
    tags: ['vòng lượn', 'điều kiện tiếp xúc'],
    content: 'Vật nhỏ trượt không ma sát từ nghỉ ở độ cao h so với đáy rồi đi vào vòng tròn thẳng đứng bán kính \\(2\\,m\\). Để vật vừa đủ không rời ray tại đỉnh vòng, độ cao h tối thiểu là',
    options: ['\\(4\\,m\\)', '\\(5\\,m\\)', '\\(6\\,m\\)', '\\(8\\,m\\)'], answer: 'B'
  },
  {
    id: 'phy10-adv-q111', topicId: 'phy10-adv-energy', level: 'extreme', minutes: 8,
    tags: ['thế năng', 'cân bằng bền'],
    content: 'Một chất điểm chuyển động trên Ox trong trường lực thế có thế năng \\(U(x)=x^4-4x^2\\) (J, m). Các vị trí cân bằng bền của chất điểm là',
    options: ['chỉ \\(x=0\\)', '\\(x=\\pm1\\)', '\\(x=\\pm\\sqrt2\\)', '\\(x=0\\) và \\(x=\\pm\\sqrt2\\)'], answer: 'C'
  },
  {
    id: 'phy10-adv-q112', topicId: 'phy10-adv-energy', level: 'hard', minutes: 5,
    tags: ['công suất', 'tốc độ giới hạn'],
    content: 'Một động cơ cung cấp công suất cơ không đổi \\(6{,}0\\,kW\\) để kéo xe trên đường ngang. Ở tốc độ lớn, tổng lực cản coi như không đổi \\(300\\,N\\). Tốc độ giới hạn của xe là',
    options: ['\\(10\\,m/s\\)', '\\(15\\,m/s\\)', '\\(20\\,m/s\\)', '\\(25\\,m/s\\)'], answer: 'C'
  },
  {
    id: 'phy10-adv-q113', topicId: 'phy10-adv-energy', level: 'hard', minutes: 6,
    tags: ['con lắc', 'lực căng dây'],
    content: 'Con lắc đơn được thả không vận tốc đầu từ vị trí dây hợp phương thẳng đứng góc \\(60^\\circ\\). Bỏ qua lực cản. Khi vật qua vị trí thấp nhất, lực căng dây bằng bao nhiêu lần trọng lượng?',
    options: ['\\(1{,}5\\)', '\\(2\\)', '\\(2{,}5\\)', '\\(3\\)'], answer: 'B'
  },
  {
    id: 'phy10-adv-q114', topicId: 'phy10-adv-energy', level: 'very_hard', minutes: 8,
    tags: ['va chạm đàn hồi', 'nén lò xo'],
    content: 'Vật \\(1\\,kg\\) chuyển động \\(4\\,m/s\\) va chạm đàn hồi trực diện với vật \\(3\\,kg\\) đứng yên. Sau va chạm vật nhẹ chuyển động về phía lò xo \\(k=100\\,N/m\\) đặt bên trái. Bỏ qua ma sát. Độ nén cực đại của lò xo là',
    options: ['\\(0{,}10\\,m\\)', '\\(0{,}20\\,m\\)', '\\(0{,}30\\,m\\)', '\\(0{,}40\\,m\\)'], answer: 'B'
  },
  {
    id: 'phy10-adv-q115', topicId: 'phy10-adv-energy', level: 'extreme', minutes: 8,
    tags: ['ma sát biến đổi', 'công lực'],
    content: 'Vật \\(1\\,kg\\) trượt từ \\(x=0\\) đến \\(x=10\\,m\\) trên mặt ngang có hệ số ma sát \\(\\mu=0{,}10+0{,}02x\\), với x tính bằng m. Lấy \\(g=10\\,m/s^2\\). Công của lực ma sát trên đoạn này là',
    options: ['\\(-10\\,J\\)', '\\(-15\\,J\\)', '\\(-20\\,J\\)', '\\(-30\\,J\\)'], answer: 'C'
  },
  {
    id: 'phy10-adv-q116', topicId: 'phy10-adv-energy', level: 'very_hard', minutes: 7,
    tags: ['máy bơm', 'hiệu suất'],
    content: 'Máy bơm công suất điện \\(8{,}0\\,kW\\), hiệu suất \\(75\\%\\), đưa \\(30\\,m^3\\) nước lên bể cao \\(12\\,m\\). Lấy \\(\\rho=1000\\,kg/m^3\\), \\(g=10\\,m/s^2\\). Thời gian bơm là',
    options: ['5 phút', '8 phút', '10 phút', '12 phút'], answer: 'C'
  },

  // Đợt mở rộng 3 — Động lượng & va chạm
  {
    id: 'phy10-adv-q117', topicId: 'phy10-adv-momentum', level: 'hard', minutes: 6,
    tags: ['nổ hai chiều', 'bảo toàn động lượng'],
    content: 'Vật đứng yên nổ thành ba mảnh khối lượng \\(1\\,kg,1\\,kg,2\\,kg\\). Hai mảnh nhẹ bay theo hai phương vuông góc với cùng tốc độ \\(10\\,m/s\\). Tốc độ của mảnh \\(2\\,kg\\) là',
    options: ['\\(5\\,m/s\\)', '\\(5\\sqrt2\\,m/s\\)', '\\(10\\,m/s\\)', '\\(10\\sqrt2\\,m/s\\)'], answer: 'B'
  },
  {
    id: 'phy10-adv-q118', topicId: 'phy10-adv-momentum', level: 'very_hard', minutes: 7,
    tags: ['con lắc đạn', 'va chạm mềm'],
    content: 'Viên đạn \\(20\\,g\\) cắm vào khối gỗ \\(1{,}98\\,kg\\) treo bằng dây. Sau va chạm, hệ lên cao thêm \\(0{,}20\\,m\\). Bỏ qua lực cản, lấy \\(g=10\\,m/s^2\\). Tốc độ viên đạn trước va chạm là',
    options: ['\\(100\\,m/s\\)', '\\(150\\,m/s\\)', '\\(200\\,m/s\\)', '\\(250\\,m/s\\)'], answer: 'C'
  },
  {
    id: 'phy10-adv-q119', topicId: 'phy10-adv-momentum', level: 'very_hard', minutes: 7,
    tags: ['hệ số đàn hồi', 'va chạm thẳng'],
    content: 'Vật \\(2\\,kg\\) chuyển động \\(5\\,m/s\\) va chạm trực diện với vật \\(3\\,kg\\) đứng yên. Hệ số đàn hồi của va chạm là \\(0{,}50\\). Vận tốc hai vật sau va chạm lần lượt là',
    options: ['\\(0{,}5\\,m/s;3\\,m/s\\)', '\\(1\\,m/s;8/3\\,m/s\\)', '\\(-0{,}5\\,m/s;11/3\\,m/s\\)', '\\(2\\,m/s;2\\,m/s\\)'], answer: 'A'
  },
  {
    id: 'phy10-adv-q120', topicId: 'phy10-adv-momentum', level: 'hard', minutes: 5,
    tags: ['phản lực', 'phóng vật'],
    content: 'Một xe chở cát tổng khối lượng \\(100\\,kg\\) đang đứng yên trên đường ngang nhẵn. Xe phóng \\(10\\,kg\\) cát về phía sau với tốc độ \\(20\\,m/s\\) so với đất. Tốc độ xe còn lại là',
    options: ['\\(2\\,m/s\\)', '\\(20/9\\,m/s\\)', '\\(5/2\\,m/s\\)', '\\(10/3\\,m/s\\)'], answer: 'B'
  },
  {
    id: 'phy10-adv-q121', topicId: 'phy10-adv-momentum', level: 'extreme', minutes: 9,
    tags: ['va chạm liên tiếp', 'va chạm đàn hồi'],
    content: 'Ba vật A, B, C thẳng hàng, có khối lượng lần lượt \\(m,m,2m\\). A chuyển động \\(6\\,m/s\\), B và C đứng yên. A dính vào B, sau đó khối AB va chạm đàn hồi trực diện với C. Tốc độ của C sau cùng là',
    options: ['\\(2\\,m/s\\)', '\\(3\\,m/s\\)', '\\(4\\,m/s\\)', '\\(6\\,m/s\\)'], answer: 'B'
  },
  {
    id: 'phy10-adv-q122', topicId: 'phy10-adv-momentum', level: 'hard', minutes: 5,
    tags: ['xung lượng', 'đồ thị lực'],
    content: 'Lực tác dụng lên vật biến thiên theo thời gian tạo thành một tam giác trên đồ thị F–t, có đáy \\(0{,}20\\,s\\) và chiều cao \\(100\\,N\\). Độ biến thiên động lượng của vật là',
    options: ['\\(5\\,N.s\\)', '\\(10\\,N.s\\)', '\\(15\\,N.s\\)', '\\(20\\,N.s\\)'], answer: 'B'
  },
  {
    id: 'phy10-adv-q123', topicId: 'phy10-adv-momentum', level: 'very_hard', minutes: 7,
    tags: ['hệ cô lập', 'ném vật trên xe'],
    content: 'Người và xe có tổng khối lượng \\(150\\,kg\\), đứng yên trên mặt ngang nhẵn và đang giữ quả bóng \\(10\\,kg\\). Người ném bóng sang phải với tốc độ \\(10\\,m/s\\) so với đất. Vận tốc của người và xe ngay sau ném là',
    options: ['\\(1/3\\,m/s\\) sang trái', '\\(2/3\\,m/s\\) sang trái', '\\(2/3\\,m/s\\) sang phải', '\\(1\\,m/s\\) sang trái'], answer: 'B'
  },
  {
    id: 'phy10-adv-q124', topicId: 'phy10-adv-momentum', level: 'extreme', minutes: 8,
    tags: ['va chạm xiên', 'hai vật bằng nhau'],
    content: 'Bi A tốc độ \\(10\\,m/s\\) va chạm đàn hồi với bi B cùng khối lượng đang đứng yên. Sau va chạm, A lệch \\(30^\\circ\\) so với hướng ban đầu. Bỏ qua chuyển động quay. Tốc độ của A và B lần lượt là',
    options: ['\\(5;5\\sqrt3\\) m/s', '\\(5\\sqrt3;5\\) m/s', '\\(5\\sqrt2;5\\sqrt2\\) m/s', '\\(10;0\\) m/s'], answer: 'B'
  },

  // Đợt mở rộng 3 — Chuyển động tròn & hấp dẫn
  {
    id: 'phy10-adv-q125', topicId: 'phy10-adv-circular', level: 'hard', minutes: 6,
    tags: ['vòng tròn đứng', 'lực căng dây'],
    content: 'Vật buộc vào dây chuyển động trong vòng tròn thẳng đứng bán kính R. Tại vị trí thấp nhất lực căng dây bằng \\(6mg\\). Bỏ qua lực cản. Khi vật ở vị trí ngang tâm vòng tròn, lực căng dây bằng',
    options: ['\\(2mg\\)', '\\(3mg\\)', '\\(4mg\\)', '\\(5mg\\)'], answer: 'B'
  },
  {
    id: 'phy10-adv-q126', topicId: 'phy10-adv-circular', level: 'very_hard', minutes: 7,
    tags: ['con lắc hình nón', 'tốc độ góc'],
    content: 'Con lắc hình nón có chiều dài dây \\(1\\,m\\), dây hợp phương thẳng đứng góc \\(60^\\circ\\). Bỏ qua lực cản và lấy \\(g=10\\,m/s^2\\). Tốc độ góc của vật là',
    options: ['\\(\\sqrt5\\,rad/s\\)', '\\(2\\sqrt5\\,rad/s\\)', '\\(5\\,rad/s\\)', '\\(10\\,rad/s\\)'], answer: 'B'
  },
  {
    id: 'phy10-adv-q127', topicId: 'phy10-adv-circular', level: 'hard', minutes: 5,
    tags: ['vệ tinh', 'năng lượng quỹ đạo'],
    content: 'Hai vệ tinh cùng khối lượng chuyển động tròn quanh một hành tinh ở bán kính quỹ đạo lần lượt r và \\(4r\\). Tỉ số động năng của vệ tinh ở quỹ đạo \\(4r\\) so với vệ tinh ở quỹ đạo r là',
    options: ['\\(1/16\\)', '\\(1/8\\)', '\\(1/4\\)', '\\(1/2\\)'], answer: 'C'
  },
  {
    id: 'phy10-adv-q128', topicId: 'phy10-adv-circular', level: 'very_hard', minutes: 6,
    tags: ['vận tốc thoát', 'khối lượng riêng hành tinh'],
    content: 'Hai hành tinh hình cầu có cùng khối lượng riêng nhưng bán kính hành tinh B gấp ba lần hành tinh A. Bỏ qua khí quyển. Tỉ số vận tốc thoát \\(v_B/v_A\\) tại bề mặt hai hành tinh là',
    options: ['\\(\\sqrt3\\)', '\\(3\\)', '\\(3\\sqrt3\\)', '\\(9\\)'], answer: 'B'
  },
  {
    id: 'phy10-adv-q129', topicId: 'phy10-adv-circular', level: 'extreme', minutes: 10,
    tags: ['đường nghiêng', 'ma sát giới hạn'],
    content: 'Đường vòng bán kính \\(50\\,m\\), góc nghiêng thỏa \\(\\tan\\theta=0{,}50\\), hệ số ma sát nghỉ \\(0{,}20\\). Lấy \\(g=10\\,m/s^2\\). Khoảng tốc độ để xe không trượt gần đúng là',
    options: ['\\(5{,}0\\) đến \\(15{,}0\\,m/s\\)', '\\(8{,}2\\) đến \\(18{,}3\\,m/s\\)', '\\(11{,}7\\) đến \\(19{,}7\\,m/s\\)', '\\(14{,}1\\) đến \\(22{,}4\\,m/s\\)'], answer: 'C'
  },
  {
    id: 'phy10-adv-q130', topicId: 'phy10-adv-circular', level: 'hard', minutes: 6,
    tags: ['ống trụ quay', 'ma sát'],
    content: 'Một người đứng áp vào thành trong của ống trụ thẳng đứng bán kính \\(0{,}50\\,m\\) đang quay. Hệ số ma sát nghỉ là \\(0{,}40\\), lấy \\(g=10\\,m/s^2\\). Tốc độ góc tối thiểu để người không trượt xuống là',
    options: ['\\(2\\sqrt5\\,rad/s\\)', '\\(5\\,rad/s\\)', '\\(5\\sqrt2\\,rad/s\\)', '\\(10\\,rad/s\\)'], answer: 'C'
  },
  {
    id: 'phy10-adv-q131', topicId: 'phy10-adv-circular', level: 'very_hard', minutes: 7,
    tags: ['vòng tròn đứng', 'bảo toàn cơ năng'],
    content: 'Vật chuyển động ở mặt trong một vòng tròn thẳng đứng bán kính \\(1\\,m\\). Bỏ qua ma sát, lấy \\(g=10\\,m/s^2\\). Tốc độ tối thiểu tại đáy để vật đi hết vòng mà không rời mặt là',
    options: ['\\(\\sqrt{20}\\,m/s\\)', '\\(\\sqrt{30}\\,m/s\\)', '\\(\\sqrt{40}\\,m/s\\)', '\\(\\sqrt{50}\\,m/s\\)'], answer: 'D'
  },
  {
    id: 'phy10-adv-q132', topicId: 'phy10-adv-circular', level: 'extreme', minutes: 8,
    tags: ['trường hấp dẫn', 'điểm triệt tiêu'],
    content: 'Hai vật hình cầu có khối lượng M và \\(4M\\) đặt cách nhau \\(3d\\). Trên đoạn nối tâm, điểm mà hợp lực hấp dẫn tác dụng lên một vật thử bằng không nằm cách vật M một đoạn',
    options: ['\\(d/2\\)', '\\(d\\)', '\\(3d/2\\)', '\\(2d\\)'], answer: 'B'
  },

  // Đợt mở rộng 3 — Cân bằng, biến dạng & chất lưu
  {
    id: 'phy10-adv-q133', topicId: 'phy10-adv-statics', level: 'hard', minutes: 6,
    tags: ['thang tựa tường', 'ma sát'],
    content: 'Thang đồng chất dài \\(5\\,m\\), trọng lượng \\(200\\,N\\), tựa vào tường nhẵn; chân thang trên sàn nhám. Thang hợp sàn góc có \\(\\sin\\theta=0{,}8\\), \\(\\cos\\theta=0{,}6\\). Lực ma sát tại chân thang khi cân bằng là',
    options: ['\\(50\\,N\\)', '\\(75\\,N\\)', '\\(100\\,N\\)', '\\(125\\,N\\)'], answer: 'B'
  },
  {
    id: 'phy10-adv-q134', topicId: 'phy10-adv-statics', level: 'very_hard', minutes: 7,
    tags: ['thanh có bản lề', 'dây xiên'],
    content: 'Thanh đồng chất dài \\(4\\,m\\), trọng lượng \\(200\\,N\\), nằm ngang và gắn bản lề ở một đầu. Đầu kia được giữ bằng dây hợp thanh góc \\(30^\\circ\\); treo thêm vật \\(400\\,N\\) cách bản lề \\(3\\,m\\). Lực căng dây là',
    options: ['\\(400\\,N\\)', '\\(600\\,N\\)', '\\(800\\,N\\)', '\\(1000\\,N\\)'], answer: 'C'
  },
  {
    id: 'phy10-adv-q135', topicId: 'phy10-adv-statics', level: 'extreme', minutes: 8,
    tags: ['máy ép thủy lực', 'chênh lệch độ cao'],
    content: 'Máy ép thủy lực chứa nước có pittông nhỏ \\(10\\,cm^2\\), pittông lớn \\(500\\,cm^2\\) nằm cao hơn pittông nhỏ \\(2\\,m\\). Tác dụng lực \\(100\\,N\\) lên pittông nhỏ. Bỏ qua ma sát, lấy \\(g=10\\,m/s^2\\). Lực nâng ở pittông lớn là',
    options: ['\\(3000\\,N\\)', '\\(4000\\,N\\)', '\\(5000\\,N\\)', '\\(6000\\,N\\)'], answer: 'B'
  },
  {
    id: 'phy10-adv-q136', topicId: 'phy10-adv-statics', level: 'hard', minutes: 5,
    tags: ['ống chữ U', 'áp suất chất lỏng'],
    content: 'Ống chữ U chứa thủy ngân có khối lượng riêng gấp \\(13{,}6\\) lần nước. Rót vào một nhánh cột nước cao \\(20\\,cm\\), hai mặt thoáng đều chịu áp suất khí quyển. Độ chênh mực thủy ngân xấp xỉ',
    options: ['\\(0{,}74\\,cm\\)', '\\(1{,}47\\,cm\\)', '\\(2{,}94\\,cm\\)', '\\(13{,}6\\,cm\\)'], answer: 'B'
  },
  {
    id: 'phy10-adv-q137', topicId: 'phy10-adv-statics', level: 'hard', minutes: 5,
    tags: ['vật nổi', 'tải trọng cực đại'],
    content: 'Khối gỗ thể tích \\(0{,}020\\,m^3\\), khối lượng riêng \\(600\\,kg/m^3\\), nổi trong nước. Khối lượng lớn nhất có thể đặt thêm lên gỗ để mặt trên vừa ngang mặt nước là',
    options: ['\\(4\\,kg\\)', '\\(6\\,kg\\)', '\\(8\\,kg\\)', '\\(12\\,kg\\)'], answer: 'C'
  },
  {
    id: 'phy10-adv-q138', topicId: 'phy10-adv-statics', level: 'very_hard', minutes: 7,
    tags: ['hai dây đàn hồi', 'ứng suất'],
    content: 'Hai dây cùng chiều dài mắc song song chịu tổng tải \\(600\\,N\\). Dây 1 có tiết diện A, suất Young E; dây 2 có tiết diện \\(2A\\), suất Young \\(E/2\\). Hai dây dãn bằng nhau. Tỉ số ứng suất \\(\\sigma_1/\\sigma_2\\) là',
    options: ['\\(1/2\\)', '\\(1\\)', '\\(2\\)', '\\(4\\)'], answer: 'C'
  },
  {
    id: 'phy10-adv-q139', topicId: 'phy10-adv-statics', level: 'extreme', minutes: 8,
    tags: ['khối tâm', 'thanh không đồng chất'],
    content: 'Thanh mảnh dài L có khối lượng riêng theo chiều dài \\(\\lambda(x)=\\lambda_0(1+x/L)\\), với x đo từ đầu trái. Vị trí khối tâm của thanh tính từ đầu trái là',
    options: ['\\(L/2\\)', '\\(5L/9\\)', '\\(3L/5\\)', '\\(2L/3\\)'], answer: 'B'
  },
  {
    id: 'phy10-adv-q140', topicId: 'phy10-adv-statics', level: 'very_hard', minutes: 7,
    tags: ['áp lực thủy tĩnh', 'cửa chắn nước'],
    content: 'Cửa phẳng hình chữ nhật rộng \\(2\\,m\\), cao \\(3\\,m\\), đặt thẳng đứng với mép trên ngang mặt nước. Lấy \\(\\rho=1000\\,kg/m^3\\), \\(g=10\\,m/s^2\\). Hợp lực do nước tác dụng lên cửa là',
    options: ['\\(30\\,kN\\)', '\\(60\\,kN\\)', '\\(90\\,kN\\)', '\\(120\\,kN\\)'], answer: 'C'
  },

  // Đợt mở rộng 4 — Bài dài & Olympic: Đo lường, thực nghiệm
  {
    id: 'phy10-adv-q141', topicId: 'phy10-adv-experiment', level: 'very_hard', minutes: 10, problemLength: 'extended',
    tags: ['tuyến tính hóa dữ liệu', 'rơi tự do'],
    stimulus: {
      id: 'phy10-adv-st141', title: 'Thí nghiệm rơi với cổng quang',
      content: 'Một nhóm học sinh thả viên bi từ nghỉ và dùng camera tốc độ cao để xác định quãng đường rơi tính từ vị trí thả. Do ảnh đầu và ảnh cuối có nhiễu, nhóm chọn hai mốc ổn định nhất trong bảng để ước lượng hệ số góc của đồ thị s theo \\(t^2\\). Bỏ qua sức cản không khí; coi sai số hai mốc nhỏ so với độ chênh của chúng.',
      dataTable: { caption: 'Số liệu vị trí của viên bi', columns: [{ key: 't', label: 't', unit: 's' }, { key: 's', label: 's', unit: 'm' }], rows: [{ t: '0,100', s: '0,049' }, { t: '0,140', s: '0,096' }, { t: '0,180', s: '0,159' }, { t: '0,220', s: '0,237' }] }
    },
    content: 'Dùng hai mốc đầu và cuối của bảng cùng quan hệ \\(s=gt^2/2\\), giá trị gia tốc trọng trường mà nhóm suy ra gần nhất với kết quả nào?',
    options: ['\\(9{,}4\\,m/s^2\\)', '\\(9{,}6\\,m/s^2\\)', '\\(9{,}8\\,m/s^2\\)', '\\(10{,}2\\,m/s^2\\)'], answer: 'C'
  },
  {
    id: 'phy10-adv-q142', topicId: 'phy10-adv-experiment', level: 'extreme', minutes: 13, problemLength: 'olympiad',
    tags: ['hiệu chuẩn hai tham số', 'lò xo'],
    stimulus: {
      id: 'phy10-adv-st142', title: 'Cân lò xo có cảm biến lệch điểm không',
      content: 'Một lò xo treo thẳng đứng được gắn cảm biến lực. Cảm biến có số chỉ lệch không đổi \\(F_0\\), vì vậy số đọc tuân theo \\(F_{đọc}=kx+F_0\\), trong khi trọng lượng thật của vật cân bằng với lực đàn hồi \\(kx\\). Học sinh treo ba tải chuẩn, chờ hệ đứng yên rồi ghi số đọc như bảng. Sau đó thay bằng vật X, đo được độ dãn \\(8{,}0\\,cm\\). Lấy \\(g=10\\,m/s^2\\), bỏ qua khối lượng lò xo.',
      dataTable: { caption: 'Dữ liệu hiệu chuẩn', columns: [{ key: 'x', label: 'Độ dãn x', unit: 'cm' }, { key: 'f', label: 'Số đọc cảm biến', unit: 'N' }], rows: [{ x: '2,0', f: '1,40' }, { x: '4,0', f: '2,40' }, { x: '6,0', f: '3,40' }] }
    },
    content: 'Sau khi đồng thời xác định độ cứng và hiệu chỉnh sai lệch điểm không, khối lượng của vật X phải được ghi nhận bằng',
    options: ['\\(0{,}34\\,kg\\)', '\\(0{,}36\\,kg\\)', '\\(0{,}40\\,kg\\)', '\\(0{,}44\\,kg\\)'], answer: 'C'
  },
  {
    id: 'phy10-adv-q143', topicId: 'phy10-adv-experiment', level: 'very_hard', minutes: 11, problemLength: 'extended',
    tags: ['suy tham số từ số liệu', 'mặt phẳng nghiêng'],
    stimulus: {
      id: 'phy10-adv-st143', title: 'Đo ma sát bằng video',
      content: 'Một vật được thả từ nghỉ trên mặt phẳng nghiêng góc \\(30^\\circ\\). Phần mềm theo dõi cho các vị trí dọc mặt phẳng ở ba thời điểm như bảng. Nhóm nhận thấy tỉ số \\(s/t^2\\) gần như không đổi nên mô hình vật chuyển động nhanh dần đều là phù hợp. Lấy \\(g=10\\,m/s^2\\), coi hệ số ma sát trượt không đổi và bỏ qua cản không khí.',
      dataTable: { caption: 'Vị trí dọc mặt phẳng nghiêng', columns: [{ key: 't', label: 't', unit: 's' }, { key: 's', label: 's', unit: 'm' }], rows: [{ t: '0,40', s: '0,32' }, { t: '0,60', s: '0,72' }, { t: '0,80', s: '1,28' }] }
    },
    content: 'Từ toàn bộ mô hình lực dọc mặt phẳng và gia tốc suy ra từ bảng, hệ số ma sát trượt gần nhất với giá trị nào?',
    options: ['\\(0{,}06\\)', '\\(0{,}12\\)', '\\(0{,}18\\)', '\\(0{,}24\\)'], answer: 'B'
  },
  {
    id: 'phy10-adv-q144', topicId: 'phy10-adv-experiment', level: 'extreme', minutes: 14, problemLength: 'olympiad',
    tags: ['thiết kế nhận dạng', 'vật lăn'],
    stimulus: {
      id: 'phy10-adv-st144', title: 'Nhận dạng vật lăn không trượt',
      content: 'Trên cùng một máng nghiêng, một con trượt không ma sát đi hết quãng đường từ nghỉ trong \\(1{,}20\\,s\\). Thay con trượt bằng một vật tròn chưa biết cấu tạo, vật lăn không trượt từ đúng vị trí đó và mất \\(1{,}47\\,s\\). Với vật có \\(I=\\beta mR^2\\), gia tốc lăn bằng gia tốc trượt chia cho \\(1+\\beta\\). Sai số thời gian đủ nhỏ để phân biệt các mô hình. Các ứng viên là vành mỏng \\(\\beta=1\\), trụ đặc \\(1/2\\), cầu đặc \\(2/5\\), cầu rỗng \\(2/3\\).'
    },
    content: 'Dùng tỉ số thời gian để khử góc nghiêng và chiều dài máng, vật chưa biết phù hợp nhất với mô hình nào?',
    options: ['Vành mỏng', 'Trụ đặc', 'Cầu đặc', 'Cầu rỗng'], answer: 'B'
  },

  // Bài dài & Olympic: Động học
  {
    id: 'phy10-adv-q145', topicId: 'phy10-adv-kinematics', level: 'very_hard', minutes: 10, problemLength: 'extended',
    tags: ['đoàn tàu', 'chuyển động có kích thước'],
    stimulus: {
      id: 'phy10-adv-st145', title: 'Đoàn tàu qua hầm',
      content: 'Một đoàn tàu dài \\(120\\,m\\) tiến vào đường hầm dài \\(300\\,m\\). Đúng lúc đầu tàu chạm cửa hầm, tốc độ của tàu là \\(10\\,m/s\\); từ thời điểm đó tàu tăng tốc đều \\(0{,}50\\,m/s^2\\). Cần tính đến chiều dài đoàn tàu: sự kiện kết thúc chỉ xảy ra khi toa cuối cùng vừa qua cửa ra, tức đầu tàu đã dịch chuyển tổng cộng chiều dài hầm cộng chiều dài tàu.',
      media: [{ id: 'phy10-adv-media145', type: 'diagram', src: '/assets/physics10-advanced/train-tunnel.svg', alt: 'Đoàn tàu dài 120 mét đang đi vào đường hầm dài 300 mét', caption: 'Mốc đầu tàu từ cửa vào đến khi toa cuối rời cửa ra.', width: 900, height: 300 }]
    },
    content: 'Khoảng thời gian từ lúc đầu tàu chạm cửa vào đến lúc toa cuối vừa rời khỏi cửa ra gần nhất với giá trị nào?',
    options: ['\\(24{,}8\\,s\\)', '\\(25{,}6\\,s\\)', '\\(26{,}4\\,s\\)', '\\(28{,}0\\,s\\)'], answer: 'B'
  },
  {
    id: 'phy10-adv-q146', topicId: 'phy10-adv-kinematics', level: 'extreme', minutes: 14, problemLength: 'olympiad',
    tags: ['ném xiên', 'hệ quy chiếu chuyển động'],
    stimulus: {
      id: 'phy10-adv-st146', title: 'Ném bóng từ xe tăng tốc',
      content: 'Một xe nhỏ đang chạy sang phải với tốc độ \\(4\\,m/s\\) trên sàn ngang. Tại \\(t=0\\), người trên xe ném quả bóng sao cho đối với xe ngay lúc rời tay, bóng có thành phần vận tốc ngang \\(6\\,m/s\\) cùng chiều xe và thành phần đứng \\(10\\,m/s\\). Ngay sau khi bóng rời tay, xe bắt đầu tăng tốc đều \\(2\\,m/s^2\\); bóng chỉ chịu trọng lực. Bóng trở lại đúng độ cao lúc ném. Lấy \\(g=10\\,m/s^2\\).',
      media: [{ id: 'phy10-adv-media146', type: 'diagram', src: '/assets/physics10-advanced/cart-projectile.svg', alt: 'Xe chuyển động sang phải và quả bóng bay theo quỹ đạo parabol phía trên xe', caption: 'Vận tốc ném cho theo hệ tức thời của xe tại t=0.', width: 900, height: 420 }]
    },
    content: 'Tại thời điểm bóng trở lại độ cao ban đầu, bóng ở phía trước xe một khoảng bằng bao nhiêu theo phương ngang?',
    options: ['\\(4\\,m\\)', '\\(8\\,m\\)', '\\(12\\,m\\)', '\\(20\\,m\\)'], answer: 'B'
  },
  {
    id: 'phy10-adv-q147', topicId: 'phy10-adv-kinematics', level: 'very_hard', minutes: 11, problemLength: 'extended',
    tags: ['đuổi bắt nhiều giai đoạn', 'giới hạn tốc độ'],
    stimulus: {
      id: 'phy10-adv-st147', title: 'Xe tuần tra đuổi mục tiêu',
      content: 'Một xe máy đi qua trạm kiểm soát với tốc độ không đổi \\(15\\,m/s\\). Sau 4 s, xe tuần tra bắt đầu từ nghỉ tại trạm, tăng tốc đều \\(3\\,m/s^2\\) trong 10 s rồi giữ tốc độ đạt được. Cả hai chuyển động trên cùng đường thẳng và bỏ qua thời gian phản ứng khác. Cần dùng chung mốc thời gian tính từ lúc xe máy đi qua trạm và kiểm tra xem cuộc gặp xảy ra trong hay sau giai đoạn tăng tốc.',
    },
    content: 'Tính từ lúc xe máy đi qua trạm, xe tuần tra đuổi kịp xe máy tại thời điểm nào?',
    options: ['\\(14\\,s\\)', '\\(16\\,s\\)', '\\(18\\,s\\)', '\\(20\\,s\\)'], answer: 'C'
  },
  {
    id: 'phy10-adv-q148', topicId: 'phy10-adv-kinematics', level: 'extreme', minutes: 13, problemLength: 'olympiad',
    tags: ['dòng chảy biến thiên', 'chuyển động tương đối'],
    stimulus: {
      id: 'phy10-adv-st148', title: 'Bơi qua dòng sông phân lớp',
      content: 'Sông rộng \\(120\\,m\\). Chọn y từ bờ xuất phát sang bờ đối diện, tốc độ dòng nước tăng tuyến tính theo \\(v_n(y)=1+y/120\\) (m/s). Một vận động viên luôn hướng vuông góc bờ và bơi \\(2\\,m/s\\) so với nước. Khi chạm bờ đối diện, người lập tức chạy ngược dòng dọc bờ với tốc độ \\(3\\,m/s\\) để trở về điểm đối diện vị trí xuất phát. Bỏ qua thời gian chuyển tiếp. Hai bờ thẳng và song song.',
    },
    content: 'Tổng thời gian từ lúc bắt đầu bơi đến khi chạy tới điểm đối diện vị trí xuất phát là bao nhiêu?',
    options: ['\\(75\\,s\\)', '\\(90\\,s\\)', '\\(105\\,s\\)', '\\(120\\,s\\)'], answer: 'B'
  },

  // Bài dài & Olympic: Động lực học
  {
    id: 'phy10-adv-q149', topicId: 'phy10-adv-dynamics', level: 'very_hard', minutes: 12, problemLength: 'extended',
    tags: ['nêm gia tốc', 'ma sát nghỉ hai phía'],
    stimulus: {
      id: 'phy10-adv-st149', title: 'Giữ vật đứng yên trên nêm',
      content: 'Một vật nhỏ nằm trên mặt nêm nghiêng cao dần sang phải, với \\(\\sin\\alpha=0{,}6\\), \\(\\cos\\alpha=0{,}8\\). Hệ số ma sát nghỉ là \\(0{,}25\\). Nêm được cho gia tốc ngang A sang trái, sàn nhẵn. Trong hệ gắn với nêm, lực quán tính hướng sang phải; tùy A, ma sát có thể đổi chiều. Lấy \\(g=10\\,m/s^2\\) và yêu cầu vật đứng yên tương đối với nêm.',
      media: [{ id: 'phy10-adv-media149', type: 'diagram', src: '/assets/physics10-advanced/accelerating-wedge.svg', alt: 'Vật trên nêm nghiêng cao sang phải, nêm gia tốc sang trái', caption: 'Ma sát có thể hướng lên hoặc xuống dốc tùy độ lớn A.', width: 900, height: 420 }]
    },
    content: 'Khoảng giá trị của A để ma sát nghỉ còn giữ được vật trên nêm gần đúng là',
    options: ['\\(0\\le A\\le4{,}2\\,m/s^2\\)', '\\(4{,}2\\le A\\le12{,}3\\,m/s^2\\)', '\\(6{,}0\\le A\\le10{,}0\\,m/s^2\\)', '\\(A\\ge12{,}3\\,m/s^2\\)'], answer: 'B'
  },
  {
    id: 'phy10-adv-q150', topicId: 'phy10-adv-dynamics', level: 'extreme', minutes: 15, problemLength: 'olympiad',
    tags: ['ròng rọc có quán tính', 'ma sát'],
    stimulus: {
      id: 'phy10-adv-st150', title: 'Hệ bàn–ròng rọc không lí tưởng',
      content: 'Vật \\(m_1=3\\,kg\\) nằm trên bàn ngang có hệ số ma sát trượt \\(0{,}20\\), nối bằng dây nhẹ không dãn qua ròng rọc với vật treo \\(m_2=4\\,kg\\). Ròng rọc là trụ đặc khối lượng \\(2\\,kg\\), dây không trượt trên vành, trục không ma sát. Hai lực căng ở hai nhánh không bằng nhau vì ròng rọc có moment quán tính. Hệ được thả từ nghỉ, lấy \\(g=10\\,m/s^2\\). Bán kính ròng rọc không cần biết vì quán tính quay đi vào dưới dạng \\(I/R^2\\); vật treo còn đủ cao trong suốt thời gian xét.',
      media: [{ id: 'phy10-adv-media150', type: 'diagram', src: '/assets/physics10-advanced/table-pulley.svg', alt: 'Vật 3 kg trên bàn nối qua ròng rọc trụ đặc với vật treo 4 kg', caption: 'Ròng rọc có khối lượng nên T₁ khác T₂.', width: 900, height: 420 }]
    },
    content: 'Sau khi tính cả ma sát và động năng quay của ròng rọc, gia tốc của hệ bằng',
    options: ['\\(3{,}40\\,m/s^2\\)', '\\(4{,}00\\,m/s^2\\)', '\\(4{,}25\\,m/s^2\\)', '\\(4{,}86\\,m/s^2\\)'], answer: 'C'
  },
  {
    id: 'phy10-adv-q151', topicId: 'phy10-adv-dynamics', level: 'very_hard', minutes: 11, problemLength: 'extended',
    tags: ['hai vật chồng', 'chuyển trạng thái ma sát'],
    stimulus: {
      id: 'phy10-adv-st151', title: 'Khối trên trượt trên tấm ván',
      content: 'Khối \\(m=2\\,kg\\) đặt trên tấm ván \\(M=4\\,kg\\); sàn dưới ván nhẵn, hệ số ma sát nghỉ và trượt giữa hai vật đều lấy \\(0{,}25\\). Một lực ngang F tác dụng trực tiếp lên khối trên. Khi F còn nhỏ, hai vật đi cùng nhau; khi ma sát cần thiết vượt \\(\\mu mg\\), khối trên trượt và ma sát giữ giá trị giới hạn. Xét thời điểm lực đã tăng tới \\(12\\,N\\), lấy \\(g=10\\,m/s^2\\).'
    },
    content: 'Ở thời điểm đó, độ lớn gia tốc của khối trên đối với tấm ván bằng',
    options: ['\\(1{,}25\\,m/s^2\\)', '\\(2{,}00\\,m/s^2\\)', '\\(2{,}25\\,m/s^2\\)', '\\(3{,}50\\,m/s^2\\)'], answer: 'C'
  },
  {
    id: 'phy10-adv-q152', topicId: 'phy10-adv-dynamics', level: 'extreme', minutes: 14, problemLength: 'olympiad',
    tags: ['Atwood trong thang máy', 'hệ quy chiếu gia tốc'],
    stimulus: {
      id: 'phy10-adv-st152', title: 'Máy Atwood đặt trong cabin',
      content: 'Một máy Atwood lí tưởng gồm hai vật \\(3\\,kg\\) và \\(2\\,kg\\) được treo trong cabin thang máy. Cabin đang đi lên nhanh dần đều với gia tốc \\(2\\,m/s^2\\). Người quan sát gắn với cabin thấy hệ bắt đầu chuyển động tương đối sau khi chốt giữ được tháo. Có thể giải trong hệ cabin bằng cách thay g bởi trường trọng lực hiệu dụng; dây và ròng rọc nhẹ, không ma sát. Lấy \\(g=10\\,m/s^2\\).'
    },
    content: 'Trong khi hai vật chuyển động tương đối với cabin, lực căng dây có độ lớn bằng',
    options: ['\\(24{,}0\\,N\\)', '\\(26{,}4\\,N\\)', '\\(28{,}8\\,N\\)', '\\(30{,}0\\,N\\)'], answer: 'C'
  },

  // Bài dài & Olympic: Năng lượng
  {
    id: 'phy10-adv-q153', topicId: 'phy10-adv-energy', level: 'very_hard', minutes: 11, problemLength: 'extended',
    tags: ['vòng lượn có ma sát', 'năng lượng tối thiểu'],
    stimulus: {
      id: 'phy10-adv-st153', title: 'Đường trượt trước vòng lượn',
      content: 'Vật được thả từ nghỉ ở độ cao h trên đoạn ray nhẵn, sau đó đi qua đoạn ngang nhám dài \\(5\\,m\\), hệ số ma sát \\(0{,}20\\), rồi vào vòng tròn thẳng đứng bán kính \\(2\\,m\\). Trong vòng tròn ray nhẵn. Muốn không rời ray, tại đỉnh vật phải còn ít nhất tốc độ thỏa điều kiện phản lực bằng không. Lấy mốc thế năng tại đáy và \\(g=10\\,m/s^2\\).',
      media: [{ id: 'phy10-adv-media153', type: 'diagram', src: '/assets/physics10-advanced/rough-loop.svg', alt: 'Vật trượt từ độ cao h qua đoạn nhám rồi đi vào vòng tròn đứng', caption: 'Đoạn dốc và vòng tròn nhẵn; chỉ đoạn ngang dài 5 m có ma sát.', width: 900, height: 420 }]
    },
    content: 'Độ cao h nhỏ nhất để vật vừa đủ hoàn thành vòng tròn mà không rời ray là',
    options: ['\\(5\\,m\\)', '\\(6\\,m\\)', '\\(7\\,m\\)', '\\(8\\,m\\)'], answer: 'B'
  },
  {
    id: 'phy10-adv-q154', topicId: 'phy10-adv-energy', level: 'extreme', minutes: 16, problemLength: 'olympiad',
    tags: ['lò xo–ma sát–va chạm', 'con lắc đạn'],
    stimulus: {
      id: 'phy10-adv-st154', title: 'Ba giai đoạn liên tiếp',
      content: 'Lò xo \\(k=200\\,N/m\\) bị nén \\(0{,}20\\,m\\), phóng vật \\(m=1\\,kg\\) trên mặt ngang. Vật đi qua đoạn nhám dài \\(2\\,m\\), hệ số ma sát \\(0{,}10\\), rồi va chạm mềm với vật \\(M=3\\,kg\\) treo ở đầu dây dài. Sau va chạm, hai vật dính nhau và cùng vọt lên; bỏ qua mọi hao phí ngoài ma sát và va chạm mềm. Lấy \\(g=10\\,m/s^2\\). Các đoạn ngoài vùng nhám đều nhẵn; vật rời lò xo khi lò xo trở về chiều dài tự nhiên và va chạm xảy ra tại vị trí thấp nhất của dây treo.',
      media: [{ id: 'phy10-adv-media154', type: 'diagram', src: '/assets/physics10-advanced/spring-collision-pendulum.svg', alt: 'Lò xo phóng vật qua đoạn nhám đến va chạm với con lắc', caption: 'Cần tách ba giai đoạn: phóng–ma sát, va chạm, đi lên.', width: 1000, height: 420 }]
    },
    content: 'Độ cao cực đại mà khối dính sau va chạm đạt được so với vị trí thấp nhất bằng',
    options: ['\\(0{,}625\\,cm\\)', '\\(1{,}25\\,cm\\)', '\\(2{,}50\\,cm\\)', '\\(5{,}00\\,cm\\)'], answer: 'B'
  },
  {
    id: 'phy10-adv-q155', topicId: 'phy10-adv-energy', level: 'very_hard', minutes: 11, problemLength: 'extended',
    tags: ['đồ thị lực–vị trí', 'định lí động năng'],
    stimulus: {
      id: 'phy10-adv-st155', title: 'Lực kéo biến thiên trên mặt nhám',
      content: 'Vật \\(2\\,kg\\) có tốc độ đầu \\(1\\,m/s\\), chuyển động theo chiều dương trên mặt ngang dài \\(4\\,m\\), hệ số ma sát \\(0{,}10\\). Lực kéo cùng chiều chuyển động tăng tuyến tính từ 0 lên \\(12\\,N\\) trong 2 m đầu, rồi giảm tuyến tính về 0 trong 2 m cuối. Công của lực kéo bằng diện tích tam giác trên đồ thị F–x. Lấy \\(g=10\\,m/s^2\\).'
    },
    content: 'Nếu vật không đổi chiều trên đoạn xét, tốc độ của nó ở cuối quãng đường bằng',
    options: ['\\(3\\,m/s\\)', '\\(4\\,m/s\\)', '\\(\\sqrt{17}\\,m/s\\)', '\\(3\\sqrt2\\,m/s\\)'], answer: 'C'
  },
  {
    id: 'phy10-adv-q156', topicId: 'phy10-adv-energy', level: 'extreme', minutes: 13, problemLength: 'olympiad',
    tags: ['công suất không đổi', 'lực cản phụ thuộc tốc độ'],
    stimulus: {
      id: 'phy10-adv-st156', title: 'Xe chạy bằng công suất không đổi',
      content: 'Một xe khối lượng \\(500\\,kg\\) chạy trên đường ngang nhờ động cơ truyền công suất cơ không đổi \\(4{,}0\\,kW\\). Tổng lực cản khí động được mô hình hóa bởi \\(F_c=2v^2\\) với v tính bằng m/s và F tính bằng N; bỏ qua lực cản lăn khác. Khi tốc độ tăng, lực kéo hiệu dụng \\(P/v\\) giảm còn lực cản tăng, nên xe tiến tới một tốc độ giới hạn mà gia tốc bằng không. Hiệu suất truyền động đã được gộp trong công suất cơ và chỉ xét nghiệm vận tốc dương ổn định của mô hình.',
    },
    content: 'Tốc độ giới hạn của xe theo mô hình trên gần nhất với giá trị nào?',
    options: ['\\(10{,}0\\,m/s\\)', '\\(12{,}6\\,m/s\\)', '\\(14{,}1\\,m/s\\)', '\\(20{,}0\\,m/s\\)'], answer: 'B'
  },

  // Bài dài & Olympic: Động lượng
  {
    id: 'phy10-adv-q157', topicId: 'phy10-adv-momentum', level: 'very_hard', minutes: 11, problemLength: 'extended',
    tags: ['nổ rồi va chạm', 'hai lần bảo toàn động lượng'],
    stimulus: {
      id: 'phy10-adv-st157', title: 'Toa xe tách rồi ghép',
      content: 'Một toa xe khối lượng \\(6\\,kg\\) đang chạy sang phải \\(4\\,m/s\\) trên ray ngang nhẵn thì cơ cấu bên trong làm toa tách thành hai phần \\(2\\,kg\\) và \\(4\\,kg\\). Ngay sau tách, phần \\(2\\,kg\\) chạy sang phải \\(10\\,m/s\\). Phần \\(4\\,kg\\) tiếp tục đi tới và va chạm mềm với một toa \\(4\\,kg\\) đang đứng yên. Bỏ qua mọi ngoại lực ngang.',
      media: [{ id: 'phy10-adv-media157', type: 'diagram', src: '/assets/physics10-advanced/cart-explosion-collision.svg', alt: 'Toa xe tách thành hai phần rồi phần 4 kg va chạm với toa đứng yên', caption: 'Dùng bảo toàn động lượng riêng cho sự tách và cho va chạm mềm.', width: 1000, height: 360 }]
    },
    content: 'Vận tốc của khối gồm hai toa \\(4\\,kg\\) dính nhau sau va chạm là',
    options: ['\\(0{,}25\\,m/s\\)', '\\(0{,}50\\,m/s\\)', '\\(1{,}00\\,m/s\\)', '\\(2{,}00\\,m/s\\)'], answer: 'B'
  },
  {
    id: 'phy10-adv-q158', topicId: 'phy10-adv-momentum', level: 'extreme', minutes: 15, problemLength: 'olympiad',
    tags: ['đạn xuyên vật', 'nén lò xo có ma sát'],
    stimulus: {
      id: 'phy10-adv-st158', title: 'Đạn xuyên khối rồi khối nén lò xo',
      content: 'Viên đạn \\(10\\,g\\) bay ngang với \\(400\\,m/s\\), xuyên qua khối gỗ \\(1\\,kg\\) đang đứng yên và ra khỏi khối với \\(100\\,m/s\\) cùng chiều. Ngay sau đó khối gỗ trượt trên mặt ngang có \\(\\mu=0{,}20\\) và nén lò xo \\(k=900\\,N/m\\). Trong thời gian đạn xuyên, bỏ qua xung lượng ma sát; trong giai đoạn nén, lấy ma sát trượt không đổi và \\(g=10\\,m/s^2\\). Lò xo ban đầu không biến dạng, khối tiếp xúc lò xo ngay sau khi đạn ra khỏi và ma sát tác dụng trong toàn bộ quãng nén.'
    },
    content: 'Độ nén cực đại của lò xo gần nhất với giá trị nào?',
    options: ['\\(0{,}075\\,m\\)', '\\(0{,}088\\,m\\)', '\\(0{,}098\\,m\\)', '\\(0{,}120\\,m\\)'], answer: 'C'
  },
  {
    id: 'phy10-adv-q159', topicId: 'phy10-adv-momentum', level: 'very_hard', minutes: 12, problemLength: 'extended',
    tags: ['va chạm xiên', 'vectơ động lượng'],
    stimulus: {
      id: 'phy10-adv-st159', title: 'Hai bi bằng nhau trên bàn khí',
      content: 'Bi A chuyển động sang phải \\(10\\,m/s\\), va chạm đàn hồi với bi B cùng khối lượng đang đứng yên. Sau va chạm, A có tốc độ \\(8\\,m/s\\) và đi chếch lên một góc có \\(\\cos\\alpha=0{,}8\\), \\(\\sin\\alpha=0{,}6\\). Mặt bàn nhẵn; bỏ qua chuyển động quay. Cần bảo toàn động lượng theo hai trục và kiểm tra quan hệ vuông góc đặc trưng của hai bi bằng nhau.',
      media: [{ id: 'phy10-adv-media159', type: 'diagram', src: '/assets/physics10-advanced/oblique-collision.svg', alt: 'Bi A va chạm bi B rồi hai bi bay theo hai hướng khác nhau', caption: 'Hướng ban đầu của A được chọn làm trục Ox.', width: 900, height: 420 }]
    },
    content: 'Hướng chuyển động của B sau va chạm hợp với hướng ban đầu của A một góc bằng',
    options: ['\\(36{,}9^\\circ\\) phía dưới', '\\(45^\\circ\\) phía dưới', '\\(53{,}1^\\circ\\) phía dưới', '\\(60^\\circ\\) phía dưới'], answer: 'C'
  },
  {
    id: 'phy10-adv-q160', topicId: 'phy10-adv-momentum', level: 'extreme', minutes: 14, problemLength: 'olympiad',
    tags: ['va chạm liên tiếp', 'khối lượng khác nhau'],
    stimulus: {
      id: 'phy10-adv-st160', title: 'Chuỗi va chạm đàn hồi',
      content: 'Ba xe nhỏ A, B, C chuyển động trên cùng một ray nhẵn, có khối lượng lần lượt \\(m,2m,3m\\). Ban đầu A chạy sang phải \\(12\\,m/s\\), B và C đứng yên, khoảng cách đủ lớn để các va chạm tách biệt. Mọi va chạm đều đàn hồi trực diện. A va B trước; sau đó B chuyển động đến va C. Chỉ cần xét đến ngay sau va chạm B–C lần đầu, trước mọi khả năng va chạm trở lại. Các xe được coi là chất điểm, thời gian va chạm rất ngắn và không có cơ cấu nối các xe sau tiếp xúc.',
    },
    content: 'Tốc độ của xe C ngay sau lần va chạm nói trên bằng',
    options: ['\\(4{,}8\\,m/s\\)', '\\(6{,}0\\,m/s\\)', '\\(6{,}4\\,m/s\\)', '\\(8{,}0\\,m/s\\)'], answer: 'C'
  },

  // Bài dài & Olympic: Chuyển động tròn, hấp dẫn
  {
    id: 'phy10-adv-q161', topicId: 'phy10-adv-circular', level: 'very_hard', minutes: 12, problemLength: 'extended',
    tags: ['đường vòng nghiêng', 'hai giới hạn ma sát'],
    stimulus: {
      id: 'phy10-adv-st161', title: 'Dải tốc độ an toàn trên đường nghiêng',
      content: 'Một đoạn đường vòng bán kính \\(40\\,m\\) được nghiêng sao cho \\(\\tan\\theta=0{,}75\\). Khi mặt đường ướt, hệ số ma sát nghỉ giữa lốp và đường chỉ còn \\(0{,}25\\). Ở tốc độ thấp, xe có xu hướng trượt xuống dốc và ma sát hướng lên; ở tốc độ cao, xu hướng đảo lại và ma sát hướng xuống. Lấy \\(g=10\\,m/s^2\\).',
      media: [{ id: 'phy10-adv-media161', type: 'diagram', src: '/assets/physics10-advanced/banked-road.svg', alt: 'Ô tô trên mặt đường nghiêng ở khúc cua tròn', caption: 'Phải xét riêng giới hạn tốc độ thấp và tốc độ cao.', width: 900, height: 420 }]
    },
    content: 'Khoảng tốc độ để xe không trượt trên mặt đường gần đúng là',
    options: ['\\(8{,}0\\) đến \\(18{,}0\\,m/s\\)', '\\(10{,}0\\) đến \\(20{,}0\\,m/s\\)', '\\(13{,}0\\) đến \\(22{,}2\\,m/s\\)', '\\(15{,}0\\) đến \\(25{,}0\\,m/s\\)'], answer: 'C'
  },
  {
    id: 'phy10-adv-q162', topicId: 'phy10-adv-circular', level: 'extreme', minutes: 15, problemLength: 'olympiad',
    tags: ['quỹ đạo hấp dẫn', 'cơ năng–moment động lượng'],
    stimulus: {
      id: 'phy10-adv-st162', title: 'Vật phóng tiếp tuyến quanh hành tinh',
      content: 'Từ điểm cách tâm một hành tinh bán kính R, vật được phóng theo phương tiếp tuyến với tốc độ \\(v_0=\\sqrt{3gR/2}\\), trong đó g là gia tốc hấp dẫn tại khoảng cách R. Bỏ qua khí quyển và coi hành tinh là khối cầu. Quỹ đạo là ellipse có điểm phóng là cận điểm. Dùng \\(GM=gR^2\\), bảo toàn cơ năng để tìm bán trục lớn a, rồi dùng quan hệ tổng khoảng cách cận điểm và viễn điểm bằng \\(2a\\).'
    },
    content: 'Khoảng cách lớn nhất từ vật đến tâm hành tinh trong chuyển động này bằng',
    options: ['\\(2R\\)', '\\(5R/2\\)', '\\(3R\\)', '\\(4R\\)'], answer: 'C'
  },
  {
    id: 'phy10-adv-q163', topicId: 'phy10-adv-circular', level: 'very_hard', minutes: 11, problemLength: 'extended',
    tags: ['vòng tròn đứng', 'hao phí năng lượng'],
    stimulus: {
      id: 'phy10-adv-st163', title: 'Vòng lượn có hao phí quy ước',
      content: 'Vật đi vào đáy vòng tròn thẳng đứng bán kính R với tốc độ \\(v_0\\). Trên đường từ đáy đến đỉnh, lực cản thực hiện tổng công \\(-mgR/2\\), không phụ thuộc chi tiết quỹ đạo. Để vật vừa đủ bám mặt trong tại đỉnh, phản lực ở đỉnh bằng không nhưng tốc độ đỉnh vẫn khác không. Không có hao phí nào khác.',
    },
    content: 'Tốc độ nhỏ nhất \\(v_0\\) tại đáy để vật lên tới đỉnh mà không rời mặt là',
    options: ['\\(2\\sqrt{gR}\\)', '\\(\\sqrt{5gR}\\)', '\\(\\sqrt{6gR}\\)', '\\(3\\sqrt{gR}\\)'], answer: 'C'
  },
  {
    id: 'phy10-adv-q164', topicId: 'phy10-adv-circular', level: 'extreme', minutes: 13, problemLength: 'olympiad',
    tags: ['quay đều', 'lò xo hướng tâm'],
    stimulus: {
      id: 'phy10-adv-st164', title: 'Vật quay gắn lò xo xuyên tâm',
      content: 'Một vật \\(0{,}50\\,kg\\) nằm trên đĩa ngang nhẵn, nối với tâm bằng lò xo nhẹ độ cứng \\(100\\,N/m\\), chiều dài tự nhiên \\(0{,}20\\,m\\). Đĩa quay đều và vật đứng yên tương đối với đĩa ở bán kính \\(0{,}30\\,m\\). Không có ma sát; lực đàn hồi hướng vào tâm là lực duy nhất tạo gia tốc hướng tâm. Bỏ qua khối lượng lò xo và mọi dao động quá độ. Lò xo luôn theo phương bán kính, không chùng; trọng lực được phản lực của đĩa cân bằng.',
    },
    content: 'Tốc độ góc của đĩa để trạng thái quay đều trên tồn tại gần nhất với',
    options: ['\\(5{,}8\\,rad/s\\)', '\\(7{,}1\\,rad/s\\)', '\\(8{,}2\\,rad/s\\)', '\\(10\\,rad/s\\)'], answer: 'C'
  },

  // Bài dài & Olympic: Cân bằng, biến dạng, chất lưu
  {
    id: 'phy10-adv-q165', topicId: 'phy10-adv-statics', level: 'very_hard', minutes: 12, problemLength: 'extended',
    tags: ['thang có người', 'ma sát tối thiểu'],
    stimulus: {
      id: 'phy10-adv-st165', title: 'Người đứng trên thang tựa tường',
      content: 'Thang đồng chất dài \\(5\\,m\\), trọng lượng \\(200\\,N\\), tựa vào tường nhẵn và hợp sàn góc \\(60^\\circ\\). Người trọng lượng \\(600\\,N\\) đứng tại điểm cách chân thang \\(3\\,m\\) dọc theo thang. Sàn nhám; để tìm hệ số ma sát nghỉ tối thiểu, lấy moment quanh chân thang, sau đó dùng cân bằng lực ngang và đứng. Coi thang sắp trượt.',
      media: [{ id: 'phy10-adv-media165', type: 'diagram', src: '/assets/physics10-advanced/ladder-person.svg', alt: 'Người đứng trên thang tựa vào tường nhẵn ở góc 60 độ', caption: 'Tường nhẵn, ma sát chỉ xuất hiện tại chân thang.', width: 760, height: 520 }]
    },
    content: 'Hệ số ma sát nghỉ tối thiểu giữa chân thang và sàn gần nhất với',
    options: ['\\(0{,}25\\)', '\\(0{,}29\\)', '\\(0{,}33\\)', '\\(0{,}40\\)'], answer: 'C'
  },
  {
    id: 'phy10-adv-q166', topicId: 'phy10-adv-statics', level: 'extreme', minutes: 15, problemLength: 'olympiad',
    tags: ['máy ép thủy lực kép', 'truyền áp suất'],
    stimulus: {
      id: 'phy10-adv-st166', title: 'Máy ép thủy lực hai tầng',
      content: 'Tầng một có pittông vào diện tích \\(2\\,cm^2\\) và pittông ra \\(30\\,cm^2\\). Pittông ra này nối cứng, truyền nguyên lực sang pittông vào diện tích \\(5\\,cm^2\\) của tầng hai; pittông ra cuối có diện tích \\(200\\,cm^2\\). Các pittông cùng độ cao, chất lỏng đứng yên, bỏ qua trọng lượng pittông và ma sát. Tác dụng lực \\(120\\,N\\) lên pittông nhỏ đầu tiên. Hai khoang chất lỏng tách biệt nên phải truyền lực cơ học qua thanh nối rồi mới áp dụng định luật Pascal cho tầng sau.',
      media: [{ id: 'phy10-adv-media166', type: 'diagram', src: '/assets/physics10-advanced/double-hydraulic.svg', alt: 'Hai tầng máy ép thủy lực nối tiếp qua một thanh cứng', caption: 'Lực ra tầng một trở thành lực vào tầng hai.', width: 1000, height: 420 }]
    },
    content: 'Trong mô hình lí tưởng, lực nâng ở pittông lớn cuối cùng bằng',
    options: ['\\(0{,}018\\,MN\\)', '\\(0{,}036\\,MN\\)', '\\(0{,}072\\,MN\\)', '\\(0{,}120\\,MN\\)'], answer: 'C'
  },
  {
    id: 'phy10-adv-q167', topicId: 'phy10-adv-statics', level: 'very_hard', minutes: 11, problemLength: 'extended',
    tags: ['vật rỗng nổi', 'điều kiện vừa chìm'],
    stimulus: {
      id: 'phy10-adv-st167', title: 'Quả cầu rỗng được bơm nước',
      content: 'Một quả cầu kim loại rỗng kín có thể tích ngoài \\(0{,}010\\,m^3\\), khối lượng \\(5\\,kg\\), đang nổi trong nước. Người ta mở van và bơm nước vào khoang rỗng, nhưng thể tích ngoài của quả cầu không đổi. Trước khi quả cầu chìm hoàn toàn, lực đẩy Archimedes tăng theo phần thể tích ngập; ở ngưỡng vừa chìm hết, thể tích nước bị chiếm chỗ đạt giá trị cực đại. Lấy khối lượng riêng nước \\(1000\\,kg/m^3\\).'
    },
    content: 'Thể tích nước lớn nhất có thể bơm thêm để quả cầu vẫn ở đúng ngưỡng nổi là',
    options: ['\\(0{,}0025\\,m^3\\)', '\\(0{,}0040\\,m^3\\)', '\\(0{,}0050\\,m^3\\)', '\\(0{,}0100\\,m^3\\)'], answer: 'C'
  },
  {
    id: 'phy10-adv-q168', topicId: 'phy10-adv-statics', level: 'extreme', minutes: 15, problemLength: 'olympiad',
    tags: ['thanh không đồng chất', 'cân bằng moment'],
    stimulus: {
      id: 'phy10-adv-st168', title: 'Dầm có khối lượng phân bố không đều',
      content: 'Thanh dài L nằm ngang, gắn bản lề tại đầu trái. Khối lượng riêng dài tăng theo \\(\\lambda(x)=\\lambda_0(1+x/L)\\), nên trọng lượng toàn thanh W đặt tại khối tâm không ở giữa. Tại điểm cách bản lề \\(3L/4\\), treo thêm vật cũng có trọng lượng W. Đầu phải của thanh được giữ bằng dây tạo góc \\(30^\\circ\\) với thanh. Bỏ qua khối lượng dây và ma sát bản lề. Thanh mảnh, không biến dạng; lấy moment quanh bản lề để loại phản lực chưa biết và mọi lực nằm trong mặt phẳng hình vẽ.',
      media: [{ id: 'phy10-adv-media168', type: 'diagram', src: '/assets/physics10-advanced/nonuniform-beam.svg', alt: 'Thanh ngang không đồng chất gắn bản lề, có vật treo và dây xiên ở đầu phải', caption: 'Trọng lượng thanh đặt tại khối tâm phải tính từ phân bố λ(x).', width: 1000, height: 420 }]
    },
    content: 'Độ lớn lực căng dây theo W để thanh cân bằng nằm ngang là',
    options: ['\\(47W/36\\)', '\\(47W/24\\)', '\\(47W/18\\)', '\\(47W/12\\)'], answer: 'C'
  }
];

export const advancedPhysics10Questions = seeds.map(seed => createQuestion(balanceDisplayedAnswer(seed)));
