import type { AdvancedPhysicsSolution } from './types';

interface SolutionSeed {
  questionId: string;
  insight: string;
  steps: Array<{ title: string; explanation: string; formula?: string; result?: string }>;
  answer: 'A' | 'B' | 'C' | 'D';
  mistakes: string[];
  review: string[];
}

const createSolution = (seed: SolutionSeed): AdvancedPhysicsSolution => ({
  id: seed.questionId.replace('-q', '-s'),
  questionId: seed.questionId,
  recognition: seed.insight,
  insight: seed.insight,
  detailedSteps: seed.steps.map((step, index) => ({ order: index + 1, ...step })),
  finalAnswer: seed.answer,
  commonMistakes: seed.mistakes,
  reviewSuggestions: seed.review
});

const answerLetters = ['A', 'B', 'C', 'D'] as const;
const balancedAnswerFor = (questionId: string): SolutionSeed['answer'] => {
  const sequence = Number(questionId.match(/q(\d+)$/)?.[1]);
  return Number.isInteger(sequence) ? answerLetters[(sequence - 1) % answerLetters.length] : 'A';
};

const seeds: SolutionSeed[] = [
  {
    questionId: 'phy10-adv-q001', answer: 'B',
    insight: 'Vì g tỉ lệ với l và nghịch với bình phương T, sai số của T phải được nhân đôi.',
    steps: [
      { title: 'Tính giá trị trung tâm', explanation: 'Thay trực tiếp l và T vào biểu thức.', formula: '\\(g=4\\pi^2\\dfrac{0{,}800}{1{,}79^2}\\approx9{,}86\\,m/s^2\\)' },
      { title: 'Ghép sai số tỉ đối', explanation: 'Với quy tắc sai số cực đại, số mũ trở thành hệ số.', formula: '\\(\\dfrac{\\Delta g}{g}=\\dfrac{0{,}002}{0{,}800}+2\\dfrac{0{,}01}{1{,}79}\\approx1{,}37\\%\\)' },
      { title: 'Làm tròn đồng nhất', explanation: 'Suy ra Δg ≈ 0,14 m/s² và giữ cùng hàng thập phân.', result: '\\(g=(9{,}86\\pm0{,}14)\\,m/s^2\\)' }
    ],
    mistakes: ['Chỉ cộng sai số của T một lần.', 'Cộng trực tiếp các sai số tuyệt đối có đơn vị khác nhau.'],
    review: ['Quy tắc truyền sai số trong tích, thương và lũy thừa.']
  },
  {
    questionId: 'phy10-adv-q002', answer: 'B',
    insight: 'Từ s=at²/2, hệ số góc của đồ thị s theo t² chính là a/2.',
    steps: [
      { title: 'Tìm hệ số góc', explanation: 'Dùng hai điểm trên đường thẳng tốt nhất.', formula: '\\(K=\\dfrac{1{,}80-0{,}45}{4-1}=0{,}45\\,m/s^2\\)' },
      { title: 'Suy ra gia tốc', explanation: 'Do K=a/2 nên a=2K.', result: '\\(a=0{,}90\\,m/s^2\\)' }
    ],
    mistakes: ['Đọc hệ số góc bằng đúng gia tốc.', 'Lấy t thay vì t² khi tính độ dốc.'], review: ['Tuyến tính hóa công thức chuyển động.']
  },
  {
    questionId: 'phy10-adv-q003', answer: 'C',
    insight: 'Trong sai số cực đại, số mũ 2 của đường kính làm sai số đường kính đóng góp hai lần.',
    steps: [
      { title: 'Đọc quan hệ tỉ lệ', explanation: 'ρ tỉ lệ với m, nghịch với d² và h.' },
      { title: 'Cộng đóng góp', explanation: 'Các sai số tỉ đối được cộng theo trị tuyệt đối của số mũ.', formula: '\\(\\delta_\\rho=0{,}5\\%+2(1{,}0\\%)+2{,}0\\%=4{,}5\\%\\)' }
    ],
    mistakes: ['Quên hệ số 2 trước sai số của d.', 'Lấy sai số lớn nhất trong ba phép đo thay vì truyền sai số.'], review: ['Sai số gián tiếp của đại lượng dạng tích và thương.']
  },
  {
    questionId: 'phy10-adv-q004', answer: 'C',
    insight: 'Lấy hiệu hai thời điểm giúp loại độ trễ chung; căn bậc hai quãng đường biến quan hệ rơi tự do thành tuyến tính.',
    steps: [
      { title: 'Gọi độ trễ chung', explanation: 'Với mỗi cảm biến: tđo−t₀=√(2h/g).' },
      { title: 'Lấy hiệu hai phép đo', explanation: 'Độ trễ t₀ bị triệt tiêu.', formula: '\\(0{,}20=\\sqrt{2/g}(\\sqrt{1{,}80}-\\sqrt{0{,}80})=\\sqrt{2/g}\\,0{,}2\\sqrt5\\)' },
      { title: 'Suy ra g', explanation: 'Từ √(2/g)=1/√5.', result: '\\(g=10{,}0\\,m/s^2\\)' }
    ],
    mistakes: ['Thay trực tiếp thời gian hiển thị và bỏ qua độ trễ.', 'Lấy hiệu quãng đường rồi dùng với bình phương hiệu thời gian.'], review: ['Tuyến tính hóa rơi tự do và khử sai số hệ thống.']
  },
  {
    questionId: 'phy10-adv-q005', answer: 'C',
    insight: 'Với cùng sai số tuyệt đối của đồng hồ, tăng thời gian đo làm giảm sai số tỉ đối Δt/t.',
    steps: [
      { title: 'Xét đại lượng cần giảm', explanation: 'Sai số tỉ đối của thời gian là Δt/t.' },
      { title: 'Chọn bố trí', explanation: 'Xe gần đều nên có thể tăng khoảng cách hai cổng để tăng t mà không đổi bản chất phép đo.', result: 'Đặt hai cổng xa nhau nhất và đo một khoảng thời gian dài.' }
    ],
    mistakes: ['Cho rằng khoảng cách càng ngắn càng chính xác.', 'Lấy trung bình các đại lượng không cùng ý nghĩa.'], review: ['Sai số tuyệt đối và sai số tỉ đối.']
  },
  {
    questionId: 'phy10-adv-q006', answer: 'C',
    insight: 'Độ lệch số không chỉ dịch đường thẳng lên hoặc xuống, không đổi độ dốc.',
    steps: [
      { title: 'So với dạng đường thẳng', explanation: 'Trong F=kx+F₀, k là hệ số nhân x.' },
      { title: 'Đọc trên đồ thị', explanation: 'Hệ số nhân x chính là hệ số góc.', result: '\\(k=\\Delta F/\\Delta x\\)' }
    ],
    mistakes: ['Dùng một tỉ số F/x khi F₀ khác 0.', 'Xem tung độ gốc là độ cứng.'], review: ['Ý nghĩa hệ số góc và tung độ gốc.']
  },

  {
    questionId: 'phy10-adv-q007', answer: 'B',
    insight: 'Hai xe dùng hai mốc thời gian khởi hành khác nhau; nghiệm trước lúc B khởi hành phải loại.',
    steps: [
      { title: 'Viết vị trí theo cùng mốc', explanation: 'Gọi t tính từ lúc A qua O. Với t≥5: xA=20t, xB=(t−5)².' },
      { title: 'Giải điều kiện gặp', explanation: 'Cho hai vị trí bằng nhau.', formula: '\\((t-5)^2=20t\\Rightarrow t=15\\pm10\\sqrt2\\)' },
      { title: 'Kiểm tra miền thời gian', explanation: 'Nghiệm 15−10√2 nhỏ hơn 5 s, khi ấy B chưa chạy nên bị loại.', result: '\\(t=15+10\\sqrt2\\,s\\)' }
    ],
    mistakes: ['Dùng xB=t².', 'Giữ cả nghiệm không thỏa t≥5.'], review: ['Chuyển động nhiều giai đoạn và kiểm tra nghiệm vật lí.']
  },
  {
    questionId: 'phy10-adv-q008', answer: 'B',
    insight: 'Muốn không trôi dạt, thành phần ngược dòng của vận tốc thuyền phải triệt tiêu vận tốc nước.',
    steps: [
      { title: 'Tách vận tốc', explanation: 'Thành phần ngược dòng bằng 3 m/s; thành phần qua sông là √(5²−3²)=4 m/s.' },
      { title: 'Tính thời gian', explanation: 'Chỉ thành phần vuông góc bờ làm thuyền vượt bề rộng.', formula: '\\(t=240/4=60\\,s\\)' }
    ],
    mistakes: ['Lấy 5 m/s làm tốc độ qua sông.', 'Cộng đại số 5−3 cho thành phần ngang.'], review: ['Cộng vận tốc theo vectơ.']
  },
  {
    questionId: 'phy10-adv-q009', answer: 'C',
    insight: 'Bài hỏi tốc độ nhỏ nhất qua một điểm cố định, cần tối ưu theo góc ném chứ không chọn góc 45° máy móc.',
    steps: [
      { title: 'Dùng kết quả quỹ đạo tối ưu', explanation: 'Với điểm (x,y), bình phương tốc độ nhỏ nhất là g(y+√(x²+y²)).' },
      { title: 'Thay tọa độ', explanation: '√(20²+15²)=25 m.', formula: '\\(v_{min}^2=10(15+25)=400\\)' },
      { title: 'Kết luận', explanation: 'Lấy căn dương vì tốc độ không âm.', result: '\\(v_{min}=20\\,m/s\\)' }
    ],
    mistakes: ['Mặc định góc tối ưu luôn là 45°.', 'Bỏ độ cao y của điểm cần đi qua.'], review: ['Phương trình quỹ đạo ném xiên và bài toán cực trị.']
  },
  {
    questionId: 'phy10-adv-q010', answer: 'B',
    insight: 'Thời gian bay được xác định từ chuyển động thẳng đứng có độ cao ban đầu khác 0.',
    steps: [
      { title: 'Tìm thời gian chạm đất', explanation: 'Theo phương đứng: y=20+10t−5t².', formula: '\\(20+10t-5t^2=0\\Rightarrow t=1+\\sqrt5\\)' },
      { title: 'Tính tầm xa', explanation: 'Vận tốc ngang không đổi vx=20cos30°=10√3.', result: '\\(L=10\\sqrt3(1+\\sqrt5)\\,m\\)' }
    ],
    mistakes: ['Dùng công thức tầm xa khi điểm rơi cùng độ cao điểm ném.', 'Lấy cả nghiệm thời gian âm.'], review: ['Ném xiên từ độ cao.']
  },
  {
    questionId: 'phy10-adv-q011', answer: 'A',
    insight: 'Độ cao cực đại tỉ lệ với bình phương sin của góc ném.',
    steps: [
      { title: 'Lập tỉ số', explanation: 'Từ H=v²sin²α/(2g), các đại lượng v và g giống nhau nên triệt tiêu.' },
      { title: 'Thay hai góc', explanation: 'Tính theo bình phương sin, không theo sin.', formula: '\\(\\dfrac{H_{30}}{H_{60}}=\\dfrac{\\sin^2 30^\\circ}{\\sin^2 60^\\circ}=\\dfrac{1/4}{3/4}=\\dfrac13\\)' }
    ],
    mistakes: ['Cho hai độ cao bằng nhau vì hai góc phụ nhau.', 'Dùng sin góc thay vì sin² góc.'], review: ['Các đặc trưng của chuyển động ném xiên.']
  },
  {
    questionId: 'phy10-adv-q012', answer: 'C',
    insight: 'Quãng đường phải cộng độ dài từng đoạn giữa các thời điểm đổi chiều, không lấy |x(4)−x(0)|.',
    steps: [
      { title: 'Tìm lúc đổi chiều', explanation: 'v=x′=3(t−1)(t−3), nên đổi chiều tại t=1 s và t=3 s.' },
      { title: 'Tính các vị trí', explanation: 'x(0)=0, x(1)=4, x(3)=0, x(4)=4.' },
      { title: 'Cộng quãng đường', explanation: 'S=|4−0|+|0−4|+|4−0|.', result: '\\(S=12\\,m\\)' }
    ],
    mistakes: ['Chỉ tính độ dời bằng 4 m.', 'Không kiểm tra dấu vận tốc.'], review: ['Phân biệt độ dời và quãng đường khi vật đổi chiều.']
  },

  {
    questionId: 'phy10-adv-q013', answer: 'C',
    insight: 'Trong thang máy đi lên nhanh dần, hệ vật chịu gia tốc trọng trường hiệu dụng g+a₀.',
    steps: [
      { title: 'Đổi sang hệ thang máy', explanation: 'Lực quán tính hướng xuống làm g hiệu dụng bằng 10+2=12 m/s².' },
      { title: 'Dùng kết quả máy Atwood', explanation: 'Lực căng với gia tốc trọng trường hiệu dụng g′ là 2m₁m₂g′/(m₁+m₂).', formula: '\\(T=\\dfrac{2\\cdot3\\cdot2\\cdot12}{3+2}=28{,}8\\,N\\)' }
    ],
    mistakes: ['Dùng g−a₀ dù thang máy gia tốc lên.', 'Tính như ròng rọc đứng yên và nhận 24 N.'], review: ['Máy Atwood trong hệ quy chiếu gia tốc.']
  },
  {
    questionId: 'phy10-adv-q014', answer: 'B',
    insight: 'Lực ngang vừa có thành phần kéo lên dốc vừa ép vật mạnh hơn vào mặt dốc, làm ma sát tăng.',
    steps: [
      { title: 'Tìm phản lực', explanation: 'Chiếu vuông góc mặt dốc.', formula: '\\(N=mg\\cos30^\\circ+F\\sin30^\\circ\\)' },
      { title: 'Điều kiện sắp trượt lên', explanation: 'Ma sát cực đại hướng xuống dốc.', formula: '\\(F\\cos30^\\circ=mg\\sin30^\\circ+\\mu N\\)' },
      { title: 'Giải F', explanation: 'Thế m=2 kg, μ=0,2.', result: '\\(F=17{,}6\\,N\\)' }
    ],
    mistakes: ['Cho N=mgcos30° dù có lực ngang.', 'Đặt ma sát hướng lên dốc.'], review: ['Chiếu lực trên mặt phẳng nghiêng có lực xiên.']
  },
  {
    questionId: 'phy10-adv-q015', answer: 'C',
    insight: 'Trong hệ quy chiếu gắn với nêm, hợp lực của trọng lực và lực quán tính phải vuông góc mặt nêm.',
    steps: [
      { title: 'Chiếu dọc mặt nêm', explanation: 'Thành phần trọng lực kéo xuống dốc là mg sinθ; lực quán tính tạo thành phần mA cosθ ngược lại.' },
      { title: 'Điều kiện đứng yên tương đối', explanation: 'Hai thành phần dọc mặt phải cân bằng.', formula: '\\(mA\\cos\\theta=mg\\sin\\theta\\)' },
      { title: 'Suy ra', explanation: 'Rút gọn khối lượng.', result: '\\(A=g\\tan\\theta\\)' }
    ],
    mistakes: ['Chỉ cân bằng trọng lực với phản lực.', 'Nhầm tanθ thành sinθ.'], review: ['Lực quán tính trong hệ quy chiếu chuyển động có gia tốc.']
  },
  {
    questionId: 'phy10-adv-q016', answer: 'C',
    insight: 'Ma sát phải gia tốc vật trên; gia tốc chung không được vượt quá μg.',
    steps: [
      { title: 'Giới hạn gia tốc', explanation: 'Với vật trên: f=m₁a≤μm₁g nên a≤μg=4 m/s².' },
      { title: 'Liên hệ với lực ngoài', explanation: 'Xét toàn hệ khối lượng 5 kg trên sàn nhẵn.', formula: '\\(F_{max}=(2+3)4=20\\,N\\)' }
    ],
    mistakes: ['Dùng fmax làm lực F trực tiếp.', 'Chỉ lấy khối lượng vật trên khi tính F.'], review: ['Ma sát nghỉ trong hệ hai vật chồng nhau.']
  },
  {
    questionId: 'phy10-adv-q017', answer: 'B',
    insight: 'Ma sát chỉ tác dụng lên vật trên bàn; cần tính gia tốc của toàn hệ rồi mới suy ra lực căng.',
    steps: [
      { title: 'Lực ma sát', explanation: 'f=μm₁g=0,1·2·10=2 N.' },
      { title: 'Gia tốc hệ', explanation: 'Lực kéo thuần là 30−2=28 N trên tổng khối lượng 5 kg.', formula: '\\(a=28/5=5{,}6\\,m/s^2\\)' },
      { title: 'Tìm lực căng', explanation: 'Với vật 2 kg: T−f=m₁a.', result: '\\(T=2(5{,}6)+2=13{,}2\\,N\\)' }
    ],
    mistakes: ['Cho T bằng 30 N.', 'Trừ ma sát hai lần khi xét riêng vật trên bàn.'], review: ['Hệ ròng rọc có ma sát.']
  },
  {
    questionId: 'phy10-adv-q018', answer: 'C',
    insight: 'Lực căng vừa cân bằng trọng lực theo phương đứng vừa tạo lực hướng tâm theo phương ngang.',
    steps: [
      { title: 'Chiếu đứng', explanation: 'Tcosθ=mg.' },
      { title: 'Chiếu ngang', explanation: 'Tsinθ=mω²r với r=Lsinθ, nên T=mω²L.' },
      { title: 'Ghép hai hệ thức', explanation: 'mω²Lcosθ=mg.', formula: '\\(\\omega=\\sqrt{\\dfrac{g}{L\\cos60^\\circ}}=2\\sqrt5\\,rad/s\\)' }
    ],
    mistakes: ['Dùng bán kính quỹ đạo bằng chiều dài dây.', 'Cho T=mg.'], review: ['Con lắc hình nón.']
  },

  {
    questionId: 'phy10-adv-q019', answer: 'C',
    insight: 'Cơ năng cho tốc độ tại đỉnh; định luật II Newton tại đỉnh mới cho phản lực.',
    steps: [
      { title: 'Tốc độ tại đỉnh', explanation: 'Đỉnh vòng cao 2R=3 m so với đáy.', formula: '\\(v^2=2g(5-3)=40\\)' },
      { title: 'Chiếu vào tâm', explanation: 'Tại đỉnh, N và mg cùng hướng vào tâm.', formula: '\\(N+mg=m\\dfrac{v^2}{R}\\)' },
      { title: 'Tính phản lực', explanation: 'N=40/1,5−10.', result: '\\(N\\approx16{,}7\\,N\\)' }
    ],
    mistakes: ['Cho phản lực bằng lực hướng tâm.', 'Quên trọng lực cũng hướng vào tâm tại đỉnh.'], review: ['Năng lượng kết hợp động lực học chuyển động tròn.']
  },
  {
    questionId: 'phy10-adv-q020', answer: 'C',
    insight: 'Phải trừ phần năng lượng mất do ma sát trên đoạn lò xo giãn, rồi mới đổi động năng còn lại thành thế năng trên dốc.',
    steps: [
      { title: 'Thế năng đàn hồi', explanation: 'Wđh=kx²/2=200·0,2²/2=4 J.' },
      { title: 'Trừ công ma sát đoạn ngang', explanation: 'Ams=μmgx=0,2·1·10·0,2=0,4 J nên động năng ở chân dốc là 3,6 J.' },
      { title: 'Đi lên dốc nhẵn', explanation: '3,6=mg·s sin30°.', formula: '\\(s=3{,}6/(1\\cdot10\\cdot0{,}5)=0{,}72\\,m\\)' }
    ],
    mistakes: ['Bảo toàn cơ năng trên cả đoạn ngang nhám.', 'Tính công ma sát trên cả quãng đường lên dốc dù dốc nhẵn.'], review: ['Năng lượng qua các đoạn có và không có lực cản.']
  },
  {
    questionId: 'phy10-adv-q021', answer: 'C',
    insight: 'Khi phần dây thòng tăng, trọng tâm của phần này hạ xuống; độ giảm thế năng phụ thuộc bình phương chiều dài thòng.',
    steps: [
      { title: 'Viết độ giảm thế năng', explanation: 'Với khối lượng dài λ, thế năng phần thòng so với mép là −λgx²/2.', formula: '\\(\\Delta W_t=\\dfrac{\\lambda g}{2}(0{,}6^2-0{,}2^2)\\)' },
      { title: 'Động năng cả dây', explanation: 'Mọi phần dây cùng tốc độ; K=λLv²/2.' },
      { title: 'Bảo toàn năng lượng', explanation: 'Rút gọn λ/2.', formula: '\\(v^2=\\dfrac{g(0{,}6^2-0{,}2^2)}{1}=3{,}2\\)', result: '\\(v=\\sqrt{3{,}2}\\,m/s\\)' }
    ],
    mistakes: ['Chỉ tính động năng của đoạn đang thòng.', 'Xem trọng tâm đoạn thòng nằm ở đầu dưới.'], review: ['Năng lượng của vật phân bố liên tục.']
  },
  {
    questionId: 'phy10-adv-q022', answer: 'B',
    insight: 'Công của lực biến đổi bằng diện tích dưới đồ thị F–x, tương đương tích phân theo x.',
    steps: [
      { title: 'Lập biểu thức công', explanation: 'Vì lực thay đổi theo vị trí, không thể lấy một giá trị F cố định nhân quãng đường.', formula: '\\(A=\\int_0^3 F(x)\\,dx\\)' },
      { title: 'Tính tích phân', explanation: 'Thay F=4x.', formula: '\\(A=\\int_0^3 4x\\,dx=2x^2\\big|_0^3=18\\,J\\)' }
    ],
    mistakes: ['Lấy F tại cuối quãng đường nhân 3 m.', 'Lấy trung bình sai giữa F và x.'], review: ['Công của lực biến thiên theo vị trí.']
  },
  {
    questionId: 'phy10-adv-q023', answer: 'C',
    insight: 'Chuyển động đều nên lực kéo cân bằng cả thành phần trọng lực xuống dốc và lực cản.',
    steps: [
      { title: 'Tìm lực kéo', explanation: 'F=mgsin5°+500=1000·10·0,0872+500=1372 N.' },
      { title: 'Tính công suất', explanation: 'Lực kéo cùng hướng vận tốc.', formula: '\\(P=Fv=1372\\cdot10=13{,}72\\,kW\\)' }
    ],
    mistakes: ['Chỉ tính công suất thắng trọng lực.', 'Dùng P=F/v.'], review: ['Công suất tức thời của lực kéo.']
  },
  {
    questionId: 'phy10-adv-q024', answer: 'C',
    insight: 'Tại góc 30°, dùng năng lượng để tìm tốc độ rồi chiếu lực theo phương dây.',
    steps: [
      { title: 'Độ giảm độ cao', explanation: 'Từ 60° xuống 30°: Δh=L(cos30°−cos60°).' },
      { title: 'Tìm tốc độ', explanation: 'v²=2gL(cos30°−cos60°).' },
      { title: 'Chiếu theo dây', explanation: 'T−mgcos30°=mv²/L.', formula: '\\(T=mg[\\cos30^\\circ+2(\\cos30^\\circ-\\cos60^\\circ)]\\)', result: '\\(T=mg(3\\cos30^\\circ-1)\\)' }
    ],
    mistakes: ['Dùng độ giảm độ cao bằng L.', 'Chiếu trọng lực thành mg thay vì mgcos30°.'], review: ['Con lắc ở vị trí bất kỳ: năng lượng và lực hướng tâm.']
  },

  {
    questionId: 'phy10-adv-q025', answer: 'B',
    insight: 'Va chạm dùng bảo toàn động lượng; giai đoạn hệ dâng cao dùng bảo toàn cơ năng.',
    steps: [
      { title: 'Tốc độ ngay sau va chạm', explanation: 'Khối lượng hệ là 1 kg và dâng 0,05 m.', formula: '\\(V=\\sqrt{2gh}=1\\,m/s\\)' },
      { title: 'Động lượng khi va chạm', explanation: '0,01u=1·1.', result: '\\(u=100\\,m/s\\)' }
    ],
    mistakes: ['Bảo toàn cơ năng qua va chạm mềm.', 'Dùng khối lượng riêng khối gỗ thay vì tổng khối lượng.'], review: ['Con lắc đạn và phân chia giai đoạn.']
  },
  {
    questionId: 'phy10-adv-q026', answer: 'D',
    insight: 'Với hai khối lượng bằng nhau và một vật đứng yên, bảo toàn động lượng kết hợp động năng buộc hai vận tốc sau vuông góc.',
    steps: [
      { title: 'Bảo toàn vectơ động lượng', explanation: 'v⃗=v⃗₁+v⃗₂.' },
      { title: 'Bảo toàn động năng', explanation: 'v²=v₁²+v₂².' },
      { title: 'So với bình phương tổng vectơ', explanation: 'v²=v₁²+v₂²+2v₁v₂cosφ, nên cosφ=0.', result: '\\(\\varphi=90^\\circ\\)' }
    ],
    mistakes: ['Coi va chạm hai chiều như va chạm thẳng.', 'Chỉ dùng bảo toàn động lượng mà bỏ điều kiện đàn hồi.'], review: ['Va chạm đàn hồi hai chiều.']
  },
  {
    questionId: 'phy10-adv-q027', answer: 'B',
    insight: 'Bảo toàn động lượng theo hai trục vì động lượng ban đầu hướng đông còn một mảnh bay hướng bắc.',
    steps: [
      { title: 'Viết động lượng ban đầu', explanation: 'p⃗₀=(3·4;0)=(12;0) kg·m/s.' },
      { title: 'Trừ động lượng mảnh 1', explanation: 'p⃗₂=(12;0)−(0;8)=(12;−8) kg·m/s.' },
      { title: 'Chia cho khối lượng mảnh 2', explanation: 'v⃗₂=(6;−4) m/s.', result: '\\(|v_2|=\\sqrt{6^2+4^2}=2\\sqrt{13}\\,m/s\\)' }
    ],
    mistakes: ['Bảo toàn riêng độ lớn động lượng thay vì vectơ.', 'Quên chia động lượng mảnh 2 cho 2 kg.'], review: ['Nổ hai chiều trong hệ cô lập.']
  },
  {
    questionId: 'phy10-adv-q028', answer: 'B',
    insight: 'Va chạm đàn hồi với tường chỉ đảo chiều thành phần vận tốc vuông góc tường; thành phần song song không đổi.',
    steps: [
      { title: 'Thành phần pháp tuyến', explanation: 'vn=vcos30°.' },
      { title: 'Độ biến thiên động lượng', explanation: 'Thành phần này đổi từ +mvn sang −mvn nên độ lớn xung lượng là 2mvn.', formula: '\\(J=2(0{,}2)(10)\\cos30^\\circ=2\\sqrt3\\,N\\!\\cdot s\\)' }
    ],
    mistakes: ['Dùng toàn bộ động lượng 2mv dù va chạm xiên.', 'Dùng sin30° cho góc đo với pháp tuyến.'], review: ['Xung lượng trong va chạm xiên với tường.']
  },
  {
    questionId: 'phy10-adv-q029', answer: 'B',
    insight: 'Có thể bảo toàn động lượng qua từng va chạm hoặc cho toàn bộ quá trình; cần giữ dấu của xe đi ngược chiều.',
    steps: [
      { title: 'Va chạm thứ nhất', explanation: 'm·6=(m+2m)v₁ nên v₁=2 m/s.' },
      { title: 'Va chạm thứ hai', explanation: 'Khối 3m có động lượng 6m; xe cuối có động lượng −2m.', formula: '\\(V=\\dfrac{6m-2m}{3m+m}=1\\,m/s\\)' },
      { title: 'Xác định chiều', explanation: 'V dương nên cùng chiều chuyển động ban đầu.', result: '\\(1{,}0\\,m/s\\)' }
    ],
    mistakes: ['Dùng lại khối lượng m sau va chạm thứ nhất.', 'Cộng 2m thay vì trừ vì xe cuối đi ngược chiều.'], review: ['Chuỗi va chạm mềm liên tiếp.']
  },
  {
    questionId: 'phy10-adv-q030', answer: 'C',
    insight: 'Đạn không cắm lại: xung lượng truyền cho gỗ bằng độ giảm động lượng của đạn.',
    steps: [
      { title: 'Tốc độ khối gỗ', explanation: 'mđạn(u−v)=MgỗV.', formula: '\\(V=0{,}01(500-100)/1=4\\,m/s\\)' },
      { title: 'Độ cao dâng', explanation: 'Sau xuyên, động năng gỗ đổi thành thế năng.', formula: '\\(h=V^2/(2g)=16/20=0{,}80\\,m\\)' }
    ],
    mistakes: ['Xem đây là va chạm mềm.', 'Dùng 500+100 thay vì độ giảm tốc độ cùng chiều.'], review: ['Đạn xuyên vật và chuyển hóa năng lượng sau va chạm.']
  },

  {
    questionId: 'phy10-adv-q031', answer: 'B',
    insight: 'Tại đỉnh, điều kiện vừa không rời ray là phản lực bằng 0, không phải tốc độ bằng 0.',
    steps: [
      { title: 'Điều kiện tại đỉnh', explanation: 'mg=mv²/R nên v²=gR.' },
      { title: 'Bảo toàn cơ năng', explanation: 'mgh=mg(2R)+mv²/2.', formula: '\\(h=2R+R/2=5R/2\\)' }
    ],
    mistakes: ['Cho v=0 tại đỉnh.', 'Chỉ yêu cầu vật đạt độ cao 2R.'], review: ['Điều kiện tiếp xúc trong vòng lượn.']
  },
  {
    questionId: 'phy10-adv-q032', answer: 'A',
    insight: 'Ở đỉnh cầu lồi, hợp lực hướng tâm hướng xuống nên trọng lực lớn hơn phản lực.',
    steps: [
      { title: 'Chiếu hướng vào tâm', explanation: 'mg−N=mv²/R.' },
      { title: 'Thay số', explanation: 'N=10000−1000·225/40.', result: '\\(N=4375\\,N\\)' }
    ],
    mistakes: ['Viết N−mg=mv²/R.', 'Cộng lực hướng tâm như một lực mới.'], review: ['Phản lực tại đỉnh cầu lồi.']
  },
  {
    questionId: 'phy10-adv-q033', answer: 'B',
    insight: 'Trên bàn nhẵn, lực căng dây là lực duy nhất theo phương bán kính.',
    steps: [
      { title: 'Dùng giới hạn lực căng', explanation: 'Tmax=mv²/r.' },
      { title: 'Giải tốc độ', explanation: 'v=√(Tmaxr/m).', formula: '\\(v=\\sqrt{40\\cdot0{,}5}=2\\sqrt5\\,m/s\\)' }
    ],
    mistakes: ['Dùng T=mv/r.', 'Đưa trọng lực vào phương ngang.'], review: ['Lực hướng tâm trong chuyển động tròn đều.']
  },
  {
    questionId: 'phy10-adv-q034', answer: 'C',
    insight: 'Với các quỹ đạo quanh cùng thiên thể, bình phương chu kì tỉ lệ với lập phương bán kính.',
    steps: [
      { title: 'Dùng định luật Kepler', explanation: 'Hai vệ tinh quay quanh cùng hành tinh nên T²/r³ là như nhau.' },
      { title: 'Lập tỉ số', explanation: 'Lấy căn dương vì chu kì là đại lượng dương.', formula: '\\(\\dfrac{T_{2R}}{T_R}=\\left(\\dfrac{2R}{R}\\right)^{3/2}=2\\sqrt2\\)' }
    ],
    mistakes: ['Cho chu kì tỉ lệ thuận bán kính.', 'Dùng tỉ lệ nghịch như vận tốc quỹ đạo.'], review: ['Định luật Kepler cho quỹ đạo tròn.']
  },
  {
    questionId: 'phy10-adv-q035', answer: 'B',
    insight: 'Phản lực thành trụ tạo lực hướng tâm; ma sát nghỉ hướng lên phải giữ được trọng lượng.',
    steps: [
      { title: 'Phản lực thành trụ', explanation: 'N=mω²R.' },
      { title: 'Điều kiện không trượt', explanation: 'mg≤μN=μmω²R.' },
      { title: 'Tốc độ góc nhỏ nhất', explanation: 'Khối lượng triệt tiêu.', formula: '\\(\\omega_{min}=\\sqrt{g/(\\mu R)}=\\sqrt{12{,}5}\\approx3{,}54\\,rad/s\\)' }
    ],
    mistakes: ['Cho ma sát bằng μmg.', 'Dùng vận tốc góc làm lực hướng tâm mà thiếu bình phương.'], review: ['Chuyển động tròn trong trụ quay có ma sát.']
  },
  {
    questionId: 'phy10-adv-q036', answer: 'C',
    insight: 'Điều kiện không rơi áp dụng tại đỉnh, nhưng đề hỏi tốc độ tại đáy nên phải nối bằng bảo toàn cơ năng.',
    steps: [
      { title: 'Tốc độ tối thiểu tại đỉnh', explanation: 'Khi phản lực vừa bằng 0: vđỉnh²=gR.' },
      { title: 'Nối đáy với đỉnh', explanation: 'Độ tăng độ cao là 2R.', formula: '\\(v_{đáy}^2=v_{đỉnh}^2+4gR=5gR\\)' },
      { title: 'Thay số', explanation: '5·10·0,8=40.', result: '\\(v_{đáy}=2\\sqrt{10}\\,m/s\\)' }
    ],
    mistakes: ['Trả √(gR), là tốc độ tại đỉnh.', 'Quên chênh lệch độ cao 2R.'], review: ['Điều kiện chuyển động tròn đứng.']
  },

  {
    questionId: 'phy10-adv-q037', answer: 'C',
    insight: 'Lấy moment quanh bản lề để loại phản lực bản lề; chỉ thành phần vuông góc thanh của lực căng gây moment.',
    steps: [
      { title: 'Moment trọng lực', explanation: 'Trọng lực 200 N đặt tại trung điểm, cách bản lề 2 m.' },
      { title: 'Cân bằng moment', explanation: 'T·4·sin30°=200·2.', result: '\\(T=200\\,N\\)' }
    ],
    mistakes: ['Đặt trọng lực tại đầu thanh.', 'Dùng toàn bộ T mà không nhân sin30°.'], review: ['Cân bằng moment của thanh có bản lề.']
  },
  {
    questionId: 'phy10-adv-q038', answer: 'B',
    insight: 'Tường nhẵn chỉ tạo phản lực ngang; lấy moment quanh chân thang để tìm lực này rồi dùng cân bằng lực.',
    steps: [
      { title: 'Cân bằng moment tại chân', explanation: 'Nw·(5sin53°)=300·(2,5cos53°).', formula: '\\(N_w=112{,}5\\,N\\)' },
      { title: 'Cân bằng lực', explanation: 'Theo ngang f=Nw=112,5 N; theo đứng Nfloor=300 N.' },
      { title: 'Ngưỡng ma sát', explanation: 'μmin=f/Nfloor.', result: '\\(\\mu_{min}=112{,}5/300=0{,}375\\)' }
    ],
    mistakes: ['Cho phản lực tường bằng trọng lượng.', 'Dùng chiều dài thang thay vì cánh tay đòn.'], review: ['Cân bằng thang tựa tường nhẵn.']
  },
  {
    questionId: 'phy10-adv-q039', answer: 'B',
    insight: 'Rút gọn cụm song song trước; hai cụm sau đó có cùng độ cứng 3k và mắc nối tiếp.',
    steps: [
      { title: 'Cụm song song', explanation: 'k₁₂=k+2k=3k.' },
      { title: 'Mắc nối tiếp với 3k', explanation: 'Hai độ cứng bằng nhau 3k mắc nối tiếp.', formula: '\\(k_{td}=\\dfrac{3k\\cdot3k}{3k+3k}=\\dfrac{3k}{2}\\)' }
    ],
    mistakes: ['Cộng cả ba độ cứng như đều mắc song song.', 'Coi k và 2k mắc nối tiếp ngay từ đầu.'], review: ['Rút gọn mạng lò xo hỗn hợp.']
  },
  {
    questionId: 'phy10-adv-q040', answer: 'B',
    insight: 'Khi có vật đặt thêm, lực đẩy ứng với 80% thể tích cân bằng tổng trọng lượng của khối và vật nhỏ.',
    steps: [
      { title: 'Khối lượng khối nổi', explanation: 'mkhối=ρV=600·0,010=6 kg.' },
      { title: 'Khối lượng nước bị chiếm chỗ', explanation: 'Ở mức chìm 80%: mnước=1000·0,8·0,010=8 kg.' },
      { title: 'Cân bằng', explanation: 'Tổng khối lượng được nâng là 8 kg.', result: '\\(m_{thêm}=8-6=2\\,kg\\)' }
    ],
    mistakes: ['Lấy khối lượng vật thêm bằng 8 kg.', 'Dùng toàn bộ thể tích thay vì 80% thể tích khi tính lực đẩy.'], review: ['Cân bằng vật nổi khi mang thêm tải.']
  },
  {
    questionId: 'phy10-adv-q041', answer: 'B',
    insight: 'Hai điểm cùng độ cao trong phần nước thông nhau có cùng áp suất.',
    steps: [
      { title: 'So áp suất tại mặt phân cách', explanation: 'Bên dầu tạo áp suất ρdầugh; bên nước tạo ρnướcgΔh.' },
      { title: 'Cân bằng', explanation: 'ρdầu·10=ρnước·Δh.', formula: '\\(\\Delta h=800\\cdot10/1000=8\\,cm\\)' }
    ],
    mistakes: ['Cho hai cột chất lỏng cao bằng nhau.', 'Lấy tỉ số khối lượng riêng ngược.'], review: ['Bình thông nhau chứa hai chất lỏng.']
  },
  {
    questionId: 'phy10-adv-q042', answer: 'C',
    insight: 'Pittông lớn thấp hơn nên ngoài áp suất do lực ở pittông nhỏ còn nhận thêm áp suất thủy tĩnh.',
    steps: [
      { title: 'Áp suất dưới pittông nhỏ', explanation: 'S₁=5·10⁻⁴ m².', formula: '\\(p_1=150/(5\\cdot10^{-4})=3{,}0\\cdot10^5\\,Pa\\)' },
      { title: 'Xuống thấp 0,50 m', explanation: 'Áp suất tăng thêm ρgh=5000 Pa nên p₂=305000 Pa.' },
      { title: 'Lực trên pittông lớn', explanation: 'S₂=200 cm²=0,020 m².', formula: '\\(F_2=p_2S_2=305000\\cdot0{,}020=6100\\,N\\)' }
    ],
    mistakes: ['Bỏ qua độ chênh cao và nhận 6000 N.', 'Trừ ρgh dù pittông lớn nằm thấp hơn.'], review: ['Máy ép thủy lực có chênh lệch độ cao.']
  },

  // Lời giải đợt mở rộng 2 — Đo lường & thực nghiệm
  {
    questionId: 'phy10-adv-q043', answer: 'C',
    insight: 'Đo 20 dao động không làm thay đổi sai số tỉ đối của chu kì so với sai số tỉ đối của tổng thời gian.',
    steps: [
      { title: 'Tính chu kì và g', explanation: 'T=31,6/20=1,58 s.', formula: '\\(g=4\\pi^2\\dfrac{0{,}625}{1{,}58^2}\\approx9{,}88\\,m/s^2\\)' },
      { title: 'Truyền sai số', explanation: 'Sai số tỉ đối của T bằng 0,2/31,6.', formula: '\\(\\delta_g=\\dfrac{0{,}002}{0{,}625}+2\\dfrac{0{,}2}{31{,}6}\\approx1{,}59\\%\\)' },
      { title: 'Làm tròn', explanation: 'Δg≈9,88·1,59%=0,16 m/s².', result: '\\(g=(9{,}88\\pm0{,}16)\\,m/s^2\\)' }
    ],
    mistakes: ['Chia cả sai số tỉ đối của thời gian cho 20.', 'Không nhân đôi đóng góp sai số chu kì.'], review: ['Sai số phép đo chu kì nhiều dao động.']
  },
  {
    questionId: 'phy10-adv-q044', answer: 'B',
    insight: 'Hệ thức v²=v₀²+2as cho biết hệ số góc là 2a còn tung độ gốc là v₀².',
    steps: [
      { title: 'Tìm hệ số góc', explanation: 'K=(25−9)/(5−1)=4, nên 2a=4.' },
      { title: 'Ngoại suy về s=0', explanation: 'v₀²=9−4·1=5.', result: '\\(v_0=\\sqrt5\\,m/s\\)' }
    ],
    mistakes: ['Lấy tung độ tại s=1 làm v₀².', 'Cho hệ số góc bằng a.'], review: ['Đồ thị v²–s của chuyển động thẳng biến đổi đều.']
  },
  {
    questionId: 'phy10-adv-q045', answer: 'C',
    insight: 'Ném ngang có y=gx²/(2v₀²), nên hệ số góc của đồ thị y–x² chứa trực tiếp g.',
    steps: [
      { title: 'Nhận dạng hệ số góc', explanation: 'K=g/(2v₀²).' },
      { title: 'Suy ra g', explanation: 'g=2Kv₀²=2·0,20·25.', result: '\\(g=10\\,m/s^2\\)' }
    ],
    mistakes: ['Dùng K=g/v₀² và thiếu hệ số 2.', 'Đọc đồ thị y theo x thay vì x².'], review: ['Tuyến tính hóa quỹ đạo ném ngang.']
  },
  {
    questionId: 'phy10-adv-q046', answer: 'C',
    insight: 'Quan hệ tuyến tính cho phép nội suy giữa hai điểm hiệu chuẩn mà không cần biết riêng hệ số góc và độ lệch không.',
    steps: [
      { title: 'So vị trí số chỉ', explanation: '1,94 N đúng bằng trung điểm của 0,96 N và 2,92 N.' },
      { title: 'Nội suy khối lượng', explanation: 'Khối lượng cũng ở trung điểm 100 g và 300 g.', result: '\\(m=200\\,g\\)' }
    ],
    mistakes: ['Dùng m=F/g trực tiếp dù cảm biến lệch không.', 'Lấy tỉ lệ 1,94/2,92 mà bỏ hệ số tự do.'], review: ['Hiệu chuẩn tuyến tính và nội suy.']
  },
  {
    questionId: 'phy10-adv-q047', answer: 'A',
    insight: 'Một phần khối lượng lò xo cũng dao động, làm khối lượng hiệu dụng lớn hơn khối lượng quả nặng.',
    steps: [
      { title: 'Xét chu kì thực', explanation: 'Chu kì phụ thuộc m hiệu dụng, thường gần m+m_lò xo/3.' },
      { title: 'Xét công thức bị dùng thiếu', explanation: 'Dùng riêng m trong k=4π²m/T² làm k suy ra nhỏ hơn k thật.', result: 'Nguyên nhân phù hợp là bỏ qua khối lượng lò xo.' }
    ],
    mistakes: ['Cho rằng khối lượng lò xo chỉ ảnh hưởng phép đo tĩnh.', 'Quy sai lệch ổn định cho sai số ngẫu nhiên.'], review: ['Khối lượng hiệu dụng trong dao động lò xo.']
  },
  {
    questionId: 'phy10-adv-q048', answer: 'B',
    insight: 'Đo nhiều chu kì trong một lần làm thời gian đo dài hơn, từ đó giảm sai số tỉ đối do thao tác bấm đồng hồ.',
    steps: [
      { title: 'So sai số tỉ đối', explanation: 'Độ trễ bấm giờ gần như không tăng theo số chu kì, còn tổng thời gian tăng khoảng N lần.' },
      { title: 'Kết hợp lặp phép đo', explanation: 'Lặp nhiều lần các nhóm 20 chu kì còn giúp lấy trung bình và phát hiện số liệu bất thường.', result: 'Đo 20 chu kì mỗi lần và lặp lại.' }
    ],
    mistakes: ['Cộng các lần đo một chu kì nhưng vẫn chịu nhiều lần bấm.', 'Đo nửa chu kì làm sai số tỉ đối tăng.'], review: ['Thiết kế phép đo chu kì có sai số thao tác.']
  },

  // Lời giải đợt mở rộng 2 — Động học
  {
    questionId: 'phy10-adv-q049', answer: 'B',
    insight: 'Dòng chảy thay đổi theo y nên phải cộng các độ trôi vi phân trong suốt quá trình qua sông.',
    steps: [
      { title: 'Thời gian qua dải dy', explanation: 'Vận tốc vuông góc bờ không đổi 5 m/s nên dt=dy/5.' },
      { title: 'Cộng độ trôi', explanation: 'dx=u(y)dt.', formula: '\\(x=\\int_0^{100}0{,}02y\\dfrac{dy}{5}=20\\,m\\)' }
    ],
    mistakes: ['Dùng tốc độ dòng tại giữa sông cho sai quy trình dù tình cờ có thể ra đúng với hàm tuyến tính.', 'Lấy u tại bờ bên kia cho toàn quãng.'], review: ['Chuyển động tương đối trong trường vận tốc biến thiên.']
  },
  {
    questionId: 'phy10-adv-q050', answer: 'C',
    insight: 'Khoảng cách trước lần gặp lại là một parabol theo thời gian; cực đại khi đạo hàm bằng không.',
    steps: [
      { title: 'Viết khoảng cách', explanation: 'Trước khi gặp lại, B đi trước A: d=12t−t².' },
      { title: 'Tìm cực đại', explanation: 'd′=12−2t=0 cho t=6 s.', formula: '\\(d_{max}=12\\cdot6-6^2=36\\,m\\)' }
    ],
    mistakes: ['Tìm thời điểm gặp t=12 s rồi coi đó là cực đại.', 'Lấy xA+xB thay vì hiệu tọa độ.'], review: ['Cực trị khoảng cách giữa hai chuyển động.']
  },
  {
    questionId: 'phy10-adv-q051', answer: 'C',
    insight: 'Kiện hàng giữ vận tốc ngang của máy bay; trong thời gian rơi, cả hàng và xe đều tiến về phía trước.',
    steps: [
      { title: 'Thời gian rơi', explanation: '500=gt²/2 nên t=10 s.' },
      { title: 'So độ dịch chuyển ngang', explanation: 'Hàng đi 1000 m, xe đi 200 m.', formula: '\\(d_0=1000-200=800\\,m\\)' }
    ],
    mistakes: ['Thả khi máy bay ở ngay trên xe.', 'Cho kiện hàng mất vận tốc ngang khi rời máy bay.'], review: ['Ném ngang và mục tiêu chuyển động.']
  },
  {
    questionId: 'phy10-adv-q052', answer: 'B',
    insight: 'So phương trình đã cho với y=x tanα−gx²/(2v₀²cos²α) để suy đồng thời góc và tốc độ.',
    steps: [
      { title: 'Tìm góc ném', explanation: 'Hệ số của x bằng tanα=1 nên α=45°.' },
      { title: 'Dùng hệ số x²', explanation: 'Với cos²45°=1/2, hệ số gx²/(2v₀²cos²α)=g/v₀².', formula: '\\(0{,}05=10/v_0^2\\Rightarrow v_0=10\\sqrt2\\,m/s\\)' }
    ],
    mistakes: ['Đồng nhất hệ số x với tốc độ ban đầu.', 'Quên cos²α trong hệ số bậc hai.'], review: ['Suy ngược thông số ném xiên từ quỹ đạo.']
  },
  {
    questionId: 'phy10-adv-q053', answer: 'B',
    insight: 'Trong hệ thang máy gia tốc lên, bóng có gia tốc tương đối hướng xuống với độ lớn g+a.',
    steps: [
      { title: 'Gia tốc tương đối', explanation: 'g hiệu dụng bằng 10+2=12 m/s².' },
      { title: 'Thời gian trở lại độ cao ném', explanation: 't=2u/g_hiệu dụng.', formula: '\\(t=20/12=5/3\\,s\\)' }
    ],
    mistakes: ['Dùng g−a cho thang máy gia tốc lên.', 'Cộng vận tốc thang máy vào tốc độ ném tương đối.'], review: ['Chuyển động tương đối trong thang máy có gia tốc.']
  },
  {
    questionId: 'phy10-adv-q054', answer: 'B',
    insight: 'Hai vật có cùng gia tốc rơi theo phương đứng; thời điểm va chạm được xác định nhanh nhất từ chuyển động ngang của vật ném.',
    steps: [
      { title: 'Tìm thời điểm cùng hoành độ', explanation: 'vx=20cos45°=10√2.', formula: '\\(t=20/(10\\sqrt2)=\\sqrt2\\,s\\)' },
      { title: 'Tính độ cao', explanation: 'Vật thả rơi từ 20 m.', formula: '\\(y=20-\\dfrac{10(\\sqrt2)^2}{2}=10\\,m\\)' }
    ],
    mistakes: ['Dùng thời gian lên cao cực đại của vật ném.', 'Bỏ chuyển động rơi của vật mục tiêu.'], review: ['Bài toán giao điểm của hai chuyển động ném.']
  },

  // Lời giải đợt mở rộng 2 — Động lực học
  {
    questionId: 'phy10-adv-q055', answer: 'B',
    insight: 'Lực căng tại một dây phải gia tốc toàn bộ nhóm vật nằm phía sau dây đó.',
    steps: [
      { title: 'Gia tốc cả chuỗi', explanation: 'Tổng khối lượng 10 kg nên a=50/10=5 m/s².' },
      { title: 'Xét ba vật cuối', explanation: 'Dây giữa vật 2 và 3 kéo khối lượng 6 kg.', formula: '\\(T=6\\cdot5=30\\,N\\)' }
    ],
    mistakes: ['Chia lực đều cho bốn sợi dây.', 'Chỉ xét riêng vật thứ ba.'], review: ['Phân bố lực căng trong chuỗi vật.']
  },
  {
    questionId: 'phy10-adv-q056', answer: 'B',
    insight: 'Ròng rọc động được hai nhánh dây nâng, mỗi nhánh có lực căng bằng lực kéo đầu tự do.',
    steps: [
      { title: 'Tổng lực nâng', explanation: 'Dây lí tưởng nên T=30 N, tổng lực nâng là 2T=60 N.' },
      { title: 'Áp dụng Newton II', explanation: '2T−mg=ma.', formula: '\\(a=(60-40)/4=5\\,m/s^2\\) lên' }
    ],
    mistakes: ['Chỉ tính một lực căng tác dụng lên ròng rọc động.', 'Cho gia tốc vật bằng gia tốc đầu dây.'], review: ['Ròng rọc động và lực nâng tải.']
  },
  {
    questionId: 'phy10-adv-q057', answer: 'B',
    insight: 'Khi kéo vật trên, ma sát phải kéo vật dưới chuyển động cùng gia tốc; đây là lực ngang duy nhất lên vật dưới.',
    steps: [
      { title: 'Gia tốc chung', explanation: 'Nếu chưa trượt, a=F/(2m).' },
      { title: 'Giới hạn ma sát', explanation: 'Với vật dưới: f=ma=F/2≤μmg.', formula: '\\(F_{max}=2\\mu mg=2\\cdot0{,}3\\cdot2\\cdot10=12\\,N\\)' }
    ],
    mistakes: ['Dùng Fmax=μmg.', 'Cho ma sát trên vật dưới ngược chiều chuyển động.'], review: ['Hai vật chồng nhau khi lực kéo đặt lên vật trên.']
  },
  {
    questionId: 'phy10-adv-q058', answer: 'B',
    insight: 'Cân bằng tồn tại trong một khoảng F vì ma sát nghỉ có thể đổi chiều và tự điều chỉnh tới hai giới hạn khác nhau.',
    steps: [
      { title: 'Phản lực', explanation: 'Lực ngang ép vật vào mặt dốc.', formula: '\\(N=mg\\cos30^\\circ+F\\sin30^\\circ\\)' },
      { title: 'Giới hạn sắp trượt xuống', explanation: 'mg sin30°−Fcos30°=μN cho Fmin≈1,2 N.' },
      { title: 'Giới hạn sắp trượt lên', explanation: 'Fcos30°−mg sin30°=μN cho Fmax≈30,3 N.', result: '\\(1{,}2\\le F\\le30{,}3\\,N\\)' }
    ],
    mistakes: ['Giữ ma sát cùng một chiều ở cả hai biên.', 'Cho N=mgcos30° và bỏ thành phần ép của F.'], review: ['Miền cân bằng có ma sát nghỉ.']
  },
  {
    questionId: 'phy10-adv-q059', answer: 'C',
    insight: 'Ở tốc độ lớn nhất, xe có xu hướng trượt lên dốc nên ma sát hướng xuống dốc.',
    steps: [
      { title: 'Chiếu lực', explanation: 'Giải hai phương bán kính–thẳng đứng với f=μN hướng xuống dốc.' },
      { title: 'Công thức biên trên', explanation: 'Kết quả là v²=rg(sinθ+μcosθ)/(cosθ−μsinθ).', formula: '\\(v^2=500\\dfrac{0{,}6+0{,}25\\cdot0{,}8}{0{,}8-0{,}25\\cdot0{,}6}\\approx615{,}4\\)' },
      { title: 'Lấy căn', explanation: 'Tốc độ là đại lượng dương.', result: '\\(v_{max}\\approx24{,}8\\,m/s\\)' }
    ],
    mistakes: ['Đặt ma sát hướng lên dốc ở giới hạn tốc độ lớn.', 'Dùng ngay v²=rg tanθ và bỏ ma sát.'], review: ['Xe trên đường vòng nghiêng có ma sát.']
  },
  {
    questionId: 'phy10-adv-q060', answer: 'B',
    insight: 'Vật treo kéo xuống; trên vật ở dốc, thành phần trọng lực và ma sát đều cản chuyển động lên dốc.',
    steps: [
      { title: 'Các lực cản trên dốc', explanation: 'mg sin37°=30 N; N=40 N nên f=10 N.' },
      { title: 'Xét toàn hệ', explanation: 'Lực kéo thuần bằng 60−30−10=20 N, tổng khối lượng 11 kg.', formula: '\\(a=20/11\\,m/s^2\\)' }
    ],
    mistakes: ['Cho ma sát cùng chiều vật đi lên dốc.', 'Dùng riêng khối lượng vật treo ở mẫu số.'], review: ['Hệ vật ròng rọc trên mặt phẳng nghiêng nhám.']
  },

  // Lời giải đợt mở rộng 2 — Năng lượng
  {
    questionId: 'phy10-adv-q061', answer: 'B',
    insight: 'Công suất không đổi làm gia tốc giảm khi tốc độ tăng; không thể dùng công thức chuyển động gia tốc không đổi.',
    steps: [
      { title: 'Liên hệ công suất', explanation: 'P=Fv=mav=mv·dv/dt.' },
      { title: 'Đổi sang quãng đường', explanation: 'Vì a=v·dv/dx nên P=mv²dv/dx.' },
      { title: 'Tích phân', explanation: 'dx=(m/P)v²dv.', formula: '\\(s=\\dfrac{m(v_2^3-v_1^3)}{3P}=\\dfrac{1000(8000-1000)}{150000}=46{,}7\\,m\\)' }
    ],
    mistakes: ['Tính thời gian rồi nhân với tốc độ trung bình số học.', 'Coi lực kéo không đổi khi công suất không đổi.'], review: ['Chuyển động dưới công suất không đổi.']
  },
  {
    questionId: 'phy10-adv-q062', answer: 'B',
    insight: 'Vật rời mặt cầu khi phản lực bằng không; ghép điều kiện hướng tâm với bảo toàn cơ năng.',
    steps: [
      { title: 'Điều kiện rời mặt', explanation: 'Tại góc θ tính từ phương thẳng đứng: mgcosθ=mv²/R.' },
      { title: 'Bảo toàn năng lượng', explanation: 'v²=2gR(1−cosθ).' },
      { title: 'Ghép hai phương trình', explanation: 'cosθ=2(1−cosθ) nên cosθ=2/3.', result: '\\(h=R(1-\\cos\\theta)=R/3\\)' }
    ],
    mistakes: ['Cho vật rời mặt ngay khi vận tốc bằng không.', 'Dùng N=mv²/R thay vì hợp lực hướng tâm.'], review: ['Điều kiện mất tiếp xúc trên mặt cầu.']
  },
  {
    questionId: 'phy10-adv-q063', answer: 'C',
    insight: 'Điểm dừng được tìm bằng định lí động năng với công của lực biến đổi, kể cả sau vị trí lực đổi chiều.',
    steps: [
      { title: 'Động năng đầu', explanation: 'K₀=mv₀²/2=4 J.' },
      { title: 'Công từ 0 đến x', explanation: 'A=∫(12−2x)dx=12x−x².' },
      { title: 'Điều kiện dừng', explanation: 'K=K₀+A=0.', formula: '\\(4+12x-x^2=0\\Rightarrow x=6+2\\sqrt{10}\\,m\\)' }
    ],
    mistakes: ['Cho vật dừng tại F=0, tức x=6 m.', 'Bỏ động năng ban đầu trong định lí động năng.'], review: ['Định lí động năng với lực phụ thuộc vị trí.']
  },
  {
    questionId: 'phy10-adv-q064', answer: 'A',
    insight: 'Vật gắn với lò xo nên ở điểm cao nhất hệ vẫn còn thế năng đàn hồi; phải giữ cả thế năng đàn hồi và trọng trường.',
    steps: [
      { title: 'Chọn mốc và viết cơ năng đầu', explanation: 'Gọi y là tọa độ hướng lên tính từ vị trí lò xo tự nhiên. Lúc đầu y₁=−0,10 m.', formula: '\\(E_1=\\tfrac12k(0{,}10)^2+mg(-0{,}10)=0{,}50\\,J\\)' },
      { title: 'Điểm cao nhất', explanation: 'Tại y₂, vận tốc bằng 0 nhưng lò xo vẫn biến dạng.', formula: '\\(\\tfrac12ky_2^2+mgy_2=0{,}50\\)' },
      { title: 'Chọn nghiệm ở phía trên', explanation: 'Giải 100y₂²+5y₂−0,50=0 được y₂=0,05 m hoặc −0,10 m; điểm cao nhất ứng với nghiệm dương.', result: '\\(y_2=0{,}05\\,m\\)' }
    ],
    mistakes: ['Cho toàn bộ thế năng đàn hồi đổi thành thế năng trọng trường rồi bỏ biến dạng cuối.', 'Dùng độ cao tính từ vị trí nén thay cho tọa độ so với vị trí tự nhiên.'], review: ['Cơ năng của vật gắn với lò xo thẳng đứng.']
  },
  {
    questionId: 'phy10-adv-q065', answer: 'B',
    insight: 'Sau khi mắc chốt, bán kính mới là r=L−d; điều kiện vừa trọn vòng nằm tại đỉnh quỹ đạo mới.',
    steps: [
      { title: 'Tốc độ tại đáy', explanation: 'Thả từ dây ngang nên vđáy²=2gL.' },
      { title: 'Điều kiện tại đỉnh vòng nhỏ', explanation: 'Vừa căng dây: vđỉnh²=gr.' },
      { title: 'Bảo toàn từ đáy lên đỉnh', explanation: '2gL=gr+4gr=5gr nên r=2L/5.', result: '\\(d=L-r=3L/5\\)' }
    ],
    mistakes: ['Dùng bán kính vòng mới bằng d.', 'Cho tốc độ tại đỉnh bằng không.'], review: ['Con lắc vướng chốt và điều kiện đi trọn vòng.']
  },
  {
    questionId: 'phy10-adv-q066', answer: 'C',
    insight: 'Công suất có ích là tốc độ tăng thế năng của dòng nước, bằng ρQgh.',
    steps: [
      { title: 'Công suất có ích', explanation: 'Khối lượng nước mỗi giây là ρQ=20 kg/s.', formula: '\\(P_i=20\\cdot10\\cdot15=3000\\,W\\)' },
      { title: 'Hiệu suất', explanation: 'η=Pi/Ptiêu thụ.', result: '\\(\\eta=3000/4000=75\\%\\)' }
    ],
    mistakes: ['Dùng thể tích 0,020 m³ làm khối lượng.', 'Lấy công suất tiêu thụ chia công suất có ích.'], review: ['Công suất và hiệu suất máy bơm.']
  },

  // Lời giải đợt mở rộng 2 — Động lượng
  {
    questionId: 'phy10-adv-q067', answer: 'B',
    insight: 'Tốc độ 4 m/s là của người đối với xe, nên vận tốc người đối với đất bằng vận tốc xe cộng vận tốc tương đối.',
    steps: [
      { title: 'Đặt vận tốc xe', explanation: 'Gọi vận tốc xe theo chiều người chạy là V; vận tốc người đối với đất là V+4.' },
      { title: 'Giữ tâm khối đứng yên', explanation: 'Tổng động lượng vẫn bằng không.', formula: '\\(60(V+4)+240V=0\\Rightarrow V=-0{,}8\\,m/s\\)' }
    ],
    mistakes: ['Dùng 4 m/s là vận tốc người đối với đất.', 'Chỉ bảo toàn độ lớn động lượng.'], review: ['Bảo toàn động lượng với vận tốc tương đối.']
  },
  {
    questionId: 'phy10-adv-q068', answer: 'C',
    insight: 'Dùng quãng trượt để tìm tốc độ chung sau va chạm, rồi dùng động lượng để suy tốc độ đạn.',
    steps: [
      { title: 'Tốc độ sau va chạm', explanation: 'Công ma sát triệt tiêu động năng.', formula: '\\(V=\\sqrt{2\\mu gs}=\\sqrt8=2\\sqrt2\\,m/s\\)' },
      { title: 'Bảo toàn động lượng lúc cắm', explanation: 'Tổng khối lượng sau va chạm là 2 kg.', formula: '\\(0{,}02u=2(2\\sqrt2)\\Rightarrow u=200\\sqrt2\\,m/s\\)' }
    ],
    mistakes: ['Bảo toàn cơ năng qua va chạm mềm.', 'Dùng khối lượng gỗ 1,98 kg thay tổng 2 kg sau va chạm.'], review: ['Va chạm mềm nối với chuyển động có ma sát.']
  },
  {
    questionId: 'phy10-adv-q069', answer: 'C',
    insight: 'Tỉ phần động năng truyền trong va chạm đàn hồi đối xứng khi đổi M/m thành nghịch đảo của nó.',
    steps: [
      { title: 'Dùng hệ số truyền năng lượng', explanation: 'Với r=M/m, phần truyền là 4r/(1+r)².' },
      { title: 'Giải điều kiện 75%', explanation: '4r/(1+r)²=3/4.', formula: '\\(3r^2-10r+3=0\\Rightarrow r=3\\;hoặc\\;1/3\\)' }
    ],
    mistakes: ['Cho chỉ có một nghiệm vì tỉ số phải lớn hơn 1.', 'Dùng tỉ số vận tốc thay cho tỉ số động năng.'], review: ['Truyền động năng trong va chạm đàn hồi xuyên tâm.']
  },
  {
    questionId: 'phy10-adv-q070', answer: 'B',
    insight: 'Không có lực ngoài theo phương ngang nên tâm khối người–thuyền đứng yên so với bờ.',
    steps: [
      { title: 'Liên hệ dịch chuyển', explanation: 'Nếu thuyền dịch x ngược chiều người, người dịch 4−x so với bờ.' },
      { title: 'Giữ tâm khối', explanation: '50(4−x)=150x.', formula: '\\(x=1{,}0\\,m\\)' }
    ],
    mistakes: ['Cho thuyền dịch đủ 4 m.', 'Dùng quãng đường người đối với bờ bằng 4 m.'], review: ['Dịch chuyển tâm khối trong hệ cô lập.']
  },
  {
    questionId: 'phy10-adv-q071', answer: 'C',
    insight: 'Hệ số đàn hồi cho tốc độ nảy lên bằng e lần tốc độ tới; xung lượng phụ thuộc tổng hai độ lớn vì vận tốc đổi chiều.',
    steps: [
      { title: 'Tốc độ sau va chạm', explanation: 'v_sau=e v_trước=8 m/s, hướng lên.' },
      { title: 'Độ biến thiên động lượng', explanation: 'Chọn chiều lên dương: Δp=m[8−(−10)].', formula: '\\(J=0{,}2\\cdot18=3{,}6\\,N\\!\\cdot s\\)' }
    ],
    mistakes: ['Lấy hiệu 10−8 vì bỏ dấu hướng.', 'Cho xung lượng bằng động lượng sau va chạm.'], review: ['Hệ số đàn hồi và xung lượng.']
  },
  {
    questionId: 'phy10-adv-q072', answer: 'C',
    insight: 'Tổng ba vectơ động lượng bằng không; với khối lượng bằng nhau, tổng ba vectơ vận tốc cũng bằng không.',
    steps: [
      { title: 'Cộng hai vận tốc đã biết', explanation: 'V⃗₁+V⃗₂=(6;8) m/s.' },
      { title: 'Vận tốc mảnh ba', explanation: 'V⃗₃=−(6;8).', formula: '\\(|v_3|=\\sqrt{6^2+8^2}=10\\,m/s\\)' }
    ],
    mistakes: ['Cộng đại số 6+8.', 'Cho mảnh ba có vectơ cùng hướng tổng hai mảnh đầu.'], review: ['Bảo toàn động lượng hai chiều khi nổ.']
  },

  // Lời giải đợt mở rộng 2 — Chuyển động tròn
  {
    questionId: 'phy10-adv-q073', answer: 'C',
    insight: 'Khi không cần ma sát, góc nghiêng được chọn sao cho hợp lực của trọng lực và phản lực hướng đúng vào tâm.',
    steps: [
      { title: 'Dùng điều kiện thiết kế', explanation: 'tanθ=v²/(rg).' },
      { title: 'Giải bán kính', explanation: 'r=v²/(g tanθ).', formula: '\\(r=400/(10\\cdot0{,}75)=53{,}3\\,m\\)' }
    ],
    mistakes: ['Dùng sinθ thay tanθ.', 'Cho phản lực bằng lực hướng tâm.'], review: ['Đường vòng nghiêng không ma sát.']
  },
  {
    questionId: 'phy10-adv-q074', answer: 'B',
    insight: 'Theo Kepler, T² tỉ lệ r³ nên bán kính chỉ tăng theo lũy thừa 2/3 của tỉ số chu kì.',
    steps: [
      { title: 'Lập tỉ số', explanation: 'T₂²/T₁²=r₂³/r₁³.' },
      { title: 'Cho T₂/T₁=2', explanation: 'r₂/r₁=(2²)^(1/3).', result: '\\(r_2/r_1=2^{2/3}\\)' }
    ],
    mistakes: ['Cho bán kính tăng gấp đôi theo chu kì.', 'Dùng số mũ 3/2 thay vì 2/3 khi giải r.'], review: ['Quan hệ chu kì–bán kính quỹ đạo.']
  },
  {
    questionId: 'phy10-adv-q075', answer: 'B',
    insight: 'Ma sát nghỉ cung cấp lực hướng tâm và đạt cực đại tại tần số giới hạn.',
    steps: [
      { title: 'Điều kiện không trượt', explanation: 'mω²r≤μmg nên ωmax=√(μg/r)=√8 rad/s.' },
      { title: 'Đổi sang tần số', explanation: 'f=ω/(2π).', formula: '\\(f_{max}=\\sqrt8/(2\\pi)\\approx0{,}45\\,Hz\\)' }
    ],
    mistakes: ['Cho f=√8 Hz và quên 2π.', 'Dùng lực ma sát bằng μmv²/r.'], review: ['Vật trên đĩa quay ngang.']
  },
  {
    questionId: 'phy10-adv-q076', answer: 'A',
    insight: 'Phản lực lớn ở đáy xác định tốc độ đáy; bảo toàn năng lượng đưa tốc độ lên đỉnh rồi mới tính phản lực đỉnh.',
    steps: [
      { title: 'Tốc độ tại đáy', explanation: 'Nđ−mg=mvđ²/R; với Nđ=6mg suy ra vđ²=5gR.' },
      { title: 'Tốc độ tại đỉnh', explanation: 'vđỉnh²=vđ²−4gR=gR.' },
      { title: 'Phản lực tại đỉnh', explanation: 'Nđỉnh+mg=mvđỉnh²/R=mg.', result: '\\(N_{đỉnh}=0\\)' }
    ],
    mistakes: ['Dùng cùng tốc độ ở đáy và đỉnh.', 'Cho Nđỉnh=mg vì lực hướng tâm bằng mg.'], review: ['Liên hệ phản lực tại đáy và đỉnh vòng lượn.']
  },
  {
    questionId: 'phy10-adv-q077', answer: 'B',
    insight: 'Vật treo đứng yên làm lực căng bằng trọng lượng của nó; lực căng này là lực hướng tâm cho vật trên bàn.',
    steps: [
      { title: 'Lực căng dây', explanation: 'T=m₂g=10 N.' },
      { title: 'Chuyển động tròn', explanation: 'T=m₁ω²r.', formula: '\\(10=2\\omega^2\\cdot0{,}5\\Rightarrow\\omega=\\sqrt{10}\\,rad/s\\)' }
    ],
    mistakes: ['Dùng trọng lượng vật quay làm lực hướng tâm.', 'Cho T=(m₁+m₂)g.'], review: ['Hệ vật quay nối với vật treo.']
  },
  {
    questionId: 'phy10-adv-q078', answer: 'B',
    insight: 'Cùng khối lượng riêng làm khối lượng hành tinh tỉ lệ R³; tốc độ quỹ đạo sát mặt phụ thuộc √(GM/R).',
    steps: [
      { title: 'Thay quan hệ khối lượng', explanation: 'M∝R³.' },
      { title: 'Suy tỉ lệ tốc độ', explanation: 'v=√(GM/R)∝√(R³/R)=R.', result: '\\(v_B/v_A=R_B/R_A=2\\)' }
    ],
    mistakes: ['Cho tốc độ tỉ lệ √R mà quên M cũng đổi.', 'Coi hai hành tinh có cùng khối lượng.'], review: ['Hấp dẫn của các thiên thể cùng khối lượng riêng.']
  },

  // Lời giải đợt mở rộng 2 — Cân bằng, biến dạng & chất lưu
  {
    questionId: 'phy10-adv-q079', answer: 'C',
    insight: 'Mật độ dài tăng theo x làm trọng tâm thanh nằm tại 2L/3 tính từ bản lề, không còn ở trung điểm.',
    steps: [
      { title: 'Tìm trọng tâm', explanation: 'Với λ=cx, xG=∫xλdx/∫λdx.', formula: '\\(x_G=(cL^3/3)/(cL^2/2)=2L/3\\)' },
      { title: 'Cân bằng moment', explanation: 'T·L·sin30°=W·2L/3.', result: '\\(T=4W/3\\)' }
    ],
    mistakes: ['Đặt trọng tâm tại L/2 như thanh đồng chất.', 'Dùng toàn bộ T thay thành phần vuông góc thanh.'], review: ['Trọng tâm và moment của thanh không đồng chất.']
  },
  {
    questionId: 'phy10-adv-q080', answer: 'C',
    insight: 'Dùng cân bằng moment quanh một gối để tìm phản lực gối kia, sau đó dùng tổng lực đứng.',
    steps: [
      { title: 'Moment quanh gối trái', explanation: 'Gối phải cách 4 m; trọng lượng dầm cách 2 m; người cách 1 m.', formula: '\\(R_P\\cdot4=300\\cdot2+600\\cdot1\\Rightarrow R_P=300\\,N\\)' },
      { title: 'Cân bằng lực đứng', explanation: 'Rtrái+Rphải=900 N.', result: '\\(R_{trái}=600\\,N\\)' }
    ],
    mistakes: ['Chia đều tổng tải cho hai gối dù người đứng lệch.', 'Đo cánh tay đòn từ đầu dầm thay vì từ gối lấy moment.'], review: ['Phản lực gối đỡ của dầm chịu nhiều tải.']
  },
  {
    questionId: 'phy10-adv-q081', answer: 'C',
    insight: 'Phản lực hai lò xo được xác định từ cân bằng thanh; độ dãn sau đó phụ thuộc riêng từng độ cứng.',
    steps: [
      { title: 'Tìm lực hai đầu', explanation: 'Lấy moment quanh đầu k₁: F₂·3=300·1 nên F₂=100 N; F₁=200 N.' },
      { title: 'Tính hai độ dãn', explanation: 'x₁=200/10000=0,020 m; x₂=100/20000=0,005 m.' },
      { title: 'Lấy chênh lệch', explanation: 'Hai đầu thanh hạ khác nhau.', result: '\\(|x_1-x_2|=0{,}015\\,m\\)' }
    ],
    mistakes: ['Chia đều tải cho hai lò xo.', 'So lực đàn hồi thay vì so độ dãn.'], review: ['Thanh cứng treo bằng các lò xo khác độ cứng.']
  },
  {
    questionId: 'phy10-adv-q082', answer: 'C',
    insight: 'Trước khi tan, thể tích nước bị chiếm chỗ ứng với tổng trọng lượng; sau khi tan, nước băng tan và thể tích viên đá phải tính riêng.',
    steps: [
      { title: 'Trước khi tan', explanation: 'Khối lượng băng là 9 kg, tổng 9,5 kg.', formula: '\\(V_{trước}=9{,}5/1000=0{,}0095\\,m^3\\)' },
      { title: 'Sau khi tan', explanation: 'Nước từ băng chiếm 9/1000=0,009 m³; đá chìm chiếm đúng thể tích 0,5/2500=0,0002 m³.' },
      { title: 'So sánh', explanation: 'Vsau=0,0092 m³.', result: '\\(\\Delta V=0{,}0095-0{,}0092=3{,}0\\times10^{-4}\\,m^3\\)' }
    ],
    mistakes: ['Cho viên đá chìm vẫn chiếm lượng nước có trọng lượng bằng trọng lượng đá.', 'Bỏ thể tích nước do băng tan tạo thành.'], review: ['Bài toán băng tan chứa vật nặng.']
  },
  {
    questionId: 'phy10-adv-q083', answer: 'A',
    insight: 'Hai thành phần ngang triệt tiêu; kết hợp với cân bằng đứng cho phép giải đồng thời hai lực căng.',
    steps: [
      { title: 'Cân bằng ngang', explanation: 'T30 cos30°=T60 cos60° nên T60=√3T30.' },
      { title: 'Cân bằng đứng', explanation: 'T30 sin30°+T60 sin60°=100.', formula: '\\(0{,}5T_{30}+1{,}5T_{30}=100\\Rightarrow T_{30}=50\\,N\\)' }
    ],
    mistakes: ['Chia đều 50 N cho hai dây.', 'Dùng sin cho phương ngang và cos cho phương đứng dù góc đo từ ngang.'], review: ['Cân bằng vật treo bằng hai dây không đối xứng.']
  },
  {
    questionId: 'phy10-adv-q084', answer: 'C',
    insight: 'Độ cứng của lò xo đồng chất tỉ lệ nghịch chiều dài; cắt ngắn không giữ nguyên k.',
    steps: [
      { title: 'Độ cứng hai đoạn', explanation: 'Đoạn dài L/3 có k₁=3k; đoạn dài 2L/3 có k₂=3k/2.' },
      { title: 'Mắc song song', explanation: 'Độ cứng cộng trực tiếp.', formula: '\\(k_{td}=3k+3k/2=9k/2\\)' }
    ],
    mistakes: ['Cho hai đoạn có độ cứng k và cộng thành 2k.', 'Dùng công thức mắc nối tiếp cho hai đoạn sau khi mắc song song.'], review: ['Quan hệ độ cứng–chiều dài và ghép lò xo.']
  },
  {
    questionId: 'phy10-adv-q085', answer: 'A',
    insight: 'Kết quả cuối phải cộng độ lệch tuyệt đối trung bình với sai số dụng cụ rồi mới làm tròn hợp lí.',
    steps: [
      { title: 'Tính giá trị trung bình', explanation: 'Trung bình năm số đo bằng 20,2 cm.' },
      { title: 'Tính sai số', explanation: 'Độ lệch tuyệt đối trung bình là 0,12 cm; cộng 0,05 cm được 0,17 cm, làm tròn thành 0,2 cm.', result: '\\((20{,}2\\pm0{,}2)\\,cm\\)' }
    ],
    mistakes: ['Lấy nửa khoảng biến thiên mà đề yêu cầu độ lệch trung bình.', 'Quên cộng sai số dụng cụ.'], review: ['Giá trị trung bình và sai số tuyệt đối.']
  },
  {
    questionId: 'phy10-adv-q086', answer: 'B',
    insight: 'Trong mô hình tuyến tính F theo N, hệ số góc biểu diễn hệ số ma sát còn tung độ gốc là lực cản phụ.',
    steps: [
      { title: 'Đối chiếu mô hình', explanation: 'Khi chuyển động đều, F=μN+Fcản.' },
      { title: 'Đọc tham số', explanation: 'So với F=0,28N+0,60 suy ra μ=0,28 và Fcản=0,60 N.', result: '\\(\\mu=0{,}28;\ F_c=0{,}60\\,N\\)' }
    ],
    mistakes: ['Cho tung độ gốc bằng hệ số ma sát.', 'Bỏ qua lực cản vì đồ thị gần đi qua gốc.'], review: ['Ý nghĩa hệ số góc và tung độ gốc.']
  },
  {
    questionId: 'phy10-adv-q087', answer: 'C',
    insight: 'Cảm biến tuyến tính cho phép nội suy theo tỉ lệ phần tăng của số chỉ giữa hai mốc hiệu chuẩn.',
    steps: [
      { title: 'Xác định toàn thang', explanation: 'Khoảng 0–100°C ứng với số chỉ tăng 212−12=200.' },
      { title: 'Nội suy', explanation: 'Số chỉ 112 cao hơn mốc đầu 100, bằng nửa toàn thang.', result: '\\(T=50^\\circ C\\)' }
    ],
    mistakes: ['Lấy 112/212 nhân 100 mà không trừ độ lệch gốc.', 'Coi số chỉ cảm biến chính là nhiệt độ.'], review: ['Hiệu chuẩn tuyến tính hai điểm.']
  },
  {
    questionId: 'phy10-adv-q088', answer: 'D',
    insight: 'Thể tích cầu tỉ lệ với lập phương đường kính nên sai số đường kính phải được nhân hệ số ba.',
    steps: [
      { title: 'Viết quan hệ', explanation: 'ρ tỉ lệ với m/d³.' },
      { title: 'Cộng sai số cực đại', explanation: 'δρ=δm+3δd=0,5%+3·1,0%.', result: '\\(\\delta_\\rho=3{,}5\\%\\)' }
    ],
    mistakes: ['Chỉ cộng 0,5% và 1%.', 'Nhân cả sai số khối lượng với ba.'], review: ['Lan truyền sai số của lũy thừa.']
  },
  {
    questionId: 'phy10-adv-q089', answer: 'B',
    insight: 'Tuyến tính hóa phải bám đúng phương trình chuyển động của vật rơi từ nghỉ để hệ số góc chứa g.',
    steps: [
      { title: 'Viết phương trình rơi', explanation: 'Vật thả từ nghỉ có s=gt²/2.' },
      { title: 'Chọn hai biến đồ thị', explanation: 'Xem s là tung độ và t² là hoành độ thì hệ số góc bằng g/2.', result: 'Vẽ s theo t².' }
    ],
    mistakes: ['Vẽ s theo t rồi coi đường là thẳng.', 'Vẽ s² theo t vì nhầm vị trí số mũ.'], review: ['Tuyến tính hóa dữ liệu rơi tự do.']
  },
  {
    questionId: 'phy10-adv-q090', answer: 'C',
    insight: 'Lỗi thị sai cùng chiều là sai số hệ thống, vì vậy tăng số lần đo không làm trung bình tiến gần giá trị thật.',
    steps: [
      { title: 'Phân loại sai số', explanation: 'Mắt luôn lệch cùng phía tạo độ lệch có dấu cố định.' },
      { title: 'Xét phép lấy trung bình', explanation: 'Trung bình giảm nhiễu ngẫu nhiên nhưng giữ nguyên độ lệch hệ thống.', result: 'Sai lệch vẫn xấp xỉ 0,8 mm.' }
    ],
    mistakes: ['Dùng quy luật 1/√n cho cả sai số hệ thống.', 'Cho nhiều phép đo tự triệt tiêu mọi loại sai số.'], review: ['Phân biệt sai số ngẫu nhiên và hệ thống.']
  },
  {
    questionId: 'phy10-adv-q091', answer: 'C',
    insight: 'Hệ số góc của đường lực–độ dãn là độ cứng lò xo, còn tung độ gốc biểu diễn số chỉ lệch của cảm biến.',
    steps: [
      { title: 'Tìm hệ số góc', explanation: 'k=ΔF/Δx=(4,40−1,40)/(0,080−0,020)=50 N/m.' },
      { title: 'Tìm độ lệch điểm không', explanation: 'Dùng F=kx+F₀ tại điểm đầu.', formula: '\\(F_0=1{,}40-50\\cdot0{,}020=0{,}40\\,N\\)' }
    ],
    mistakes: ['Dùng F/x của một điểm làm độ cứng và bỏ sai lệch cảm biến.', 'Cho tung độ gốc bằng 1,40 N.'], review: ['Hiệu chuẩn lò xo bằng đồ thị tuyến tính.']
  },
  {
    questionId: 'phy10-adv-q092', answer: 'C',
    insight: 'Tung độ gốc của đồ thị T²–l xuất hiện do độ dài thật khác số đọc trên thước một lượng không đổi.',
    steps: [
      { title: 'Viết theo độ dài thật', explanation: 'T²=4(l+l₀)=4l+4l₀.' },
      { title: 'So hệ số tự do', explanation: '4l₀=0,20.', result: '\\(l_0=0{,}05\\,m\\)' }
    ],
    mistakes: ['Cho l₀ bằng trực tiếp 0,20 m.', 'Dùng hệ số góc để suy ra l₀.'], review: ['Sai lệch điểm không trên đồ thị tuyến tính.']
  },
  {
    questionId: 'phy10-adv-q093', answer: 'B',
    insight: 'Vận tốc mưa đối với người bằng vận tốc mưa đối với đất trừ vận tốc ngang của xe đạp.',
    steps: [
      { title: 'Tách thành phần', explanation: 'Vận tốc tương đối có thành phần đứng 10 m/s và thành phần ngang ngược chiều xe 10 m/s.' },
      { title: 'Tính góc', explanation: 'Hai thành phần có độ lớn bằng nhau nên tan góc so với phương đứng bằng 1.', result: '\\(\\alpha=45^\\circ\\)' }
    ],
    mistakes: ['Cộng hai tốc độ thành 20 m/s theo một phương.', 'Cho mưa vẫn thẳng đứng trong hệ của người đi xe.'], review: ['Phép trừ vận tốc tương đối.']
  },
  {
    questionId: 'phy10-adv-q094', answer: 'B',
    insight: 'Điểm chạm đồng thời thuộc quỹ đạo ném ngang và đường thẳng biểu diễn mặt phẳng nghiêng qua điểm ném.',
    steps: [
      { title: 'Lập hai tọa độ', explanation: 'Chọn chiều dương xuống: x=v₀t, y=gt²/2; mặt nghiêng có y=x tan30°.' },
      { title: 'Giải thời điểm khác không', explanation: '5t²=10t/√3.', result: '\\(t=2/\\sqrt3\\,s\\)' }
    ],
    mistakes: ['Dùng thời gian rơi từ một độ cao không được cho.', 'Đổi tan30° thành sin30°.'], review: ['Giao quỹ đạo ném ngang với đường nghiêng.']
  },
  {
    questionId: 'phy10-adv-q095', answer: 'D',
    insight: 'Hai phương trình phải dùng chung mốc thời gian; xe B chỉ chuyển động trong khoảng t−2 sau lúc khởi hành trễ.',
    steps: [
      { title: 'Viết vị trí', explanation: 'xA=10t và xB=2,5(t−2)² với t≥2.' },
      { title: 'Giải điều kiện gặp', explanation: '(t−2)²=4t cho t=4±2√3; chỉ nghiệm lớn thỏa t≥2.', result: '\\(t=4+2\\sqrt3\\,s\\)' }
    ],
    mistakes: ['Dùng xB=2,5t² và bỏ độ trễ.', 'Giữ nghiệm nhỏ hơn 2 s khi B chưa xuất phát.'], review: ['Bài toán đuổi bắt có thời điểm khởi hành khác nhau.']
  },
  {
    questionId: 'phy10-adv-q096', answer: 'C',
    insight: 'Quãng đường phải cộng riêng giai đoạn tăng tốc và giai đoạn hãm đến khi vận tốc giảm về không.',
    steps: [
      { title: 'Giai đoạn tăng tốc', explanation: 'v=2+3·4=14 m/s; s₁=2·4+3·4²/2=32 m.' },
      { title: 'Giai đoạn hãm', explanation: 'Dùng 0−14²=2(−2)s₂ được s₂=49 m.', result: '\\(s=32+49=81\\,m\\)' }
    ],
    mistakes: ['Dùng cùng gia tốc cho cả hai giai đoạn.', 'Tính độ dời hãm với dấu âm rồi trừ khỏi quãng đường.'], review: ['Chuyển động thẳng nhiều giai đoạn.']
  },
  {
    questionId: 'phy10-adv-q097', answer: 'C',
    insight: 'Khi mũi thuyền vuông góc bờ, thành phần qua sông giữ nguyên 5 m/s còn dòng nước chỉ gây độ trôi dọc bờ.',
    steps: [
      { title: 'Thời gian qua sông', explanation: 't=120/5=24 s.' },
      { title: 'Tính độ trôi', explanation: 'Dòng nước kéo thuyền đi 3·24.', result: '\\(d=72\\,m\\)' }
    ],
    mistakes: ['Dùng tốc độ tổng hợp √34 để chia chiều rộng.', 'Cho thuyền sang đúng điểm đối diện dù mũi hướng vuông góc.'], review: ['Qua sông trong thời gian ngắn nhất.']
  },
  {
    questionId: 'phy10-adv-q098', answer: 'D',
    insight: 'Với cùng tốc độ đầu, độ cao cực đại tỉ lệ với bình phương sin của góc ném chứ không tỉ lệ trực tiếp với góc.',
    steps: [
      { title: 'Dùng công thức độ cao', explanation: 'H=v₀²sin²α/(2g).' },
      { title: 'Lập tỉ số', explanation: 'sin²60°/sin²30°=(3/4)/(1/4).', result: '\\(H_{60}/H_{30}=3\\)' }
    ],
    mistakes: ['Suy ra hai độ cao bằng nhau vì tầm xa bằng nhau.', 'Lấy tỉ số sin thay vì bình phương sin.'], review: ['Tầm xa và độ cao của chuyển động ném xiên.']
  },
  {
    questionId: 'phy10-adv-q099', answer: 'B',
    insight: 'Hai vật chịu cùng gia tốc trọng trường nên gia tốc tương đối bằng không; thời điểm gặp ngang quyết định vận tốc đứng cần có.',
    steps: [
      { title: 'Điều kiện theo phương ngang', explanation: 'B đi từ x=0 đến x=20 với 10 m/s nên gặp ngang sau t=2 s.' },
      { title: 'Điều kiện theo phương đứng', explanation: 'yA=45−5t²=25 m; yB=vyt−5t². Cho yB=25 tại t=2.', result: '\\(v_y=22{,}5\\,m/s\\)' }
    ],
    mistakes: ['Bỏ chuyển động rơi của vật B.', 'Tìm thời gian bằng phương đứng trước khi dùng điều kiện ngang.'], review: ['Chuyển động tương đối của hai vật cùng gia tốc.']
  },
  {
    questionId: 'phy10-adv-q100', answer: 'A',
    insight: 'Đạo hàm quan hệ v² theo vị trí cho gia tốc không đổi, sau đó dùng vận tốc đầu và cuối để tìm thời gian.',
    steps: [
      { title: 'Tìm gia tốc', explanation: 'Từ v²=v₀²+2ax, so với 16+8x suy ra v₀=4 m/s và a=4 m/s².' },
      { title: 'Tại x=3', explanation: 'v=√40=2√10; dùng v=v₀+at.', result: '\\(t=(2\\sqrt{10}-4)/4=(\\sqrt{10}-2)/2\\,s\\)' }
    ],
    mistakes: ['Cho hệ số của x bằng gia tốc thay vì 2a.', 'Lấy t=x/v cuối như chuyển động đều.'], review: ['Quan hệ độc lập thời gian của chuyển động biến đổi đều.']
  },
  {
    questionId: 'phy10-adv-q101', answer: 'A',
    insight: 'Moment quán tính của ròng rọc đóng vai trò như một khối lượng hiệu dụng I/R² làm giảm gia tốc của hệ.',
    steps: [
      { title: 'Khối lượng hiệu dụng', explanation: 'I/R²=0,20/0,10²=20 kg.' },
      { title: 'Tính gia tốc', explanation: 'Lực kéo chênh lệch là (4−2)g=20 N; quán tính tổng là 4+2+20.', result: '\\(a=20/26=10/13\\,m/s^2\\)' }
    ],
    mistakes: ['Bỏ quán tính quay và dùng a=g/3.', 'Cộng I/R thay vì I/R².'], review: ['Máy Atwood có ròng rọc mang moment quán tính.']
  },
  {
    questionId: 'phy10-adv-q102', answer: 'B',
    insight: 'Trong hệ gắn với nêm, lực quán tính phải có thành phần hướng lên dốc để cân bằng thành phần trọng lực xuống dốc.',
    steps: [
      { title: 'Chọn chiều gia tốc nêm', explanation: 'Mặt nghiêng cao sang phải nên lực quán tính phải hướng phải; vì vậy nêm gia tốc sang trái.' },
      { title: 'Cân bằng dọc dốc', explanation: 'ma cos30°=mg sin30°.', result: '\\(a=g\\tan30^\\circ=g/\\sqrt3\\)' }
    ],
    mistakes: ['Cho nêm gia tốc sang phải khiến hai thành phần cùng kéo xuống dốc.', 'Dùng a=g cot30° do đổi nhầm hình chiếu.'], review: ['Cân bằng tương đối trong hệ quy chiếu gia tốc.']
  },
  {
    questionId: 'phy10-adv-q103', answer: 'C',
    insight: 'Cân phải đỡ cả tác dụng do người tăng tốc và lực kéo xuống của vật mà người đang giữ trong thang máy.',
    steps: [
      { title: 'Lực căng dây giữ vật', explanation: 'Vật 10 kg cùng gia tốc 2 m/s² đi lên nên T=10(10+2)=120 N.' },
      { title: 'Phương trình cho người', explanation: 'N−600−120=60·2.', result: '\\(N=840\\,N\\)' }
    ],
    mistakes: ['Chỉ tính N=m(g+a) cho riêng người.', 'Cho lực căng dây hướng lên đối với tay người.'], review: ['Số chỉ cân trong thang máy có vật người đang giữ.']
  },
  {
    questionId: 'phy10-adv-q104', answer: 'B',
    insight: 'Ma sát nghỉ là lực duy nhất gia tốc vật trên, nên giới hạn không trượt đặt trực tiếp giới hạn cho gia tốc chung.',
    steps: [
      { title: 'Gia tốc giới hạn', explanation: 'mtrên a≤μmtrên g nên amax=μg=3 m/s².' },
      { title: 'Đổi sang lực kéo', explanation: 'Cả hệ 6 kg cùng gia tốc.', result: '\\(F_{max}=6\\cdot3=18\\,N\\)' }
    ],
    mistakes: ['Dùng lực ma sát μ của tổng khối lượng 6 kg.', 'Đặt Fmax=μmtrên g mà quên F kéo gia tốc cả hệ.'], review: ['Hai vật chồng lên nhau và điều kiện không trượt.']
  },
  {
    questionId: 'phy10-adv-q105', answer: 'B',
    insight: 'Ở ngưỡng trượt, trọng lượng đoạn thõng cân bằng đúng lực ma sát cực đại trên phần xích còn nằm trên bàn.',
    steps: [
      { title: 'Lập cân bằng giới hạn', explanation: 'Với khối lượng riêng dài λ: λxg=μλ(L−x)g.' },
      { title: 'Rút tỉ số', explanation: 'x=μ(L−x) nên x/L=μ/(1+μ).', result: '\\(x/L=1/3\\)' }
    ],
    mistakes: ['Tính ma sát theo toàn bộ dây kể cả phần thõng.', 'Cho x/L bằng trực tiếp μ.'], review: ['Dây xích qua mép bàn ở trạng thái sắp trượt.']
  },
  {
    questionId: 'phy10-adv-q106', answer: 'C',
    insight: 'Tại đỉnh cầu lồi, trọng lực trừ phản lực cung cấp lực hướng tâm; mất tiếp xúc xảy ra khi phản lực bằng không.',
    steps: [
      { title: 'Phương trình hướng tâm', explanation: 'mg−N=mv²/R.' },
      { title: 'Điều kiện N=0', explanation: 'v²=gR=10·40.', result: '\\(v=20\\,m/s\\)' }
    ],
    mistakes: ['Viết N−mg=mv²/R tại đỉnh.', 'Cho mất tiếp xúc khi v=0.'], review: ['Phản lực tại đỉnh cầu lồi.']
  },
  {
    questionId: 'phy10-adv-q107', answer: 'D',
    insight: 'Gia tốc ngang tạo phản lực ép vào tường, còn ma sát cực đại từ phản lực đó phải đủ cân bằng trọng lực.',
    steps: [
      { title: 'Phản lực ngang', explanation: 'N=ma vì N là lực duy nhất gây gia tốc ngang cho khối.' },
      { title: 'Điều kiện không rơi', explanation: 'μN≥mg nên a≥g/μ.', result: '\\(a_{min}=10/0{,}4=25\\,m/s^2\\)' }
    ],
    mistakes: ['Cho N=mg như vật trên mặt ngang.', 'Dùng a=μg thay vì g/μ.'], review: ['Vật được giữ trên thành thẳng đứng bằng ma sát.']
  },
  {
    questionId: 'phy10-adv-q108', answer: 'B',
    insight: 'Ròng rọc động khiến đầu dây mang vật 2m chuyển động nhanh gấp đôi vật m, nên phải dùng hai gia tốc khác nhau.',
    steps: [
      { title: 'Viết phương trình lực', explanation: 'Cho m đi lên gia tốc a: 2T−mg=ma. Vật 2m đi xuống gia tốc 2a: 2mg−T=4ma.' },
      { title: 'Khử lực căng', explanation: 'T=m(g+a)/2; thay vào phương trình còn lại được 3g=9a.', result: '\\(a=g/3\\) hướng lên' }
    ],
    mistakes: ['Cho hai vật có cùng độ lớn gia tốc.', 'Chỉ dùng một lực căng nâng ròng rọc động.'], review: ['Ràng buộc chiều dài dây với ròng rọc động.']
  },
  {
    questionId: 'phy10-adv-q109', answer: 'C',
    insight: 'Động năng đầu đồng thời chuyển thành thế năng đàn hồi và công chống ma sát trong suốt đoạn lò xo bị nén.',
    steps: [
      { title: 'Lập phương trình năng lượng', explanation: 'mv²/2=kx²/2+μmgx.', formula: '\\(50=100x^2+2x\\)' },
      { title: 'Chọn nghiệm dương', explanation: 'Giải phương trình được x≈0,697 m.', result: '\\(x\\approx0{,}70\\,m\\)' }
    ],
    mistakes: ['Bỏ công ma sát và được x≈0,707 m.', 'Dùng lực đàn hồi cực đại nhân x thay cho kx²/2.'], review: ['Nén lò xo trên mặt phẳng có ma sát.']
  },
  {
    questionId: 'phy10-adv-q110', answer: 'B',
    insight: 'Điều kiện vừa giữ tiếp xúc tại đỉnh là vận tốc bình phương bằng gR, không phải vận tốc tại đỉnh bằng không.',
    steps: [
      { title: 'Điều kiện tại đỉnh', explanation: 'Khi N=0, vđ²=gR.' },
      { title: 'Bảo toàn từ độ cao h', explanation: 'mgh=mg·2R+mvđ²/2=mg·(5R/2).', result: '\\(h=5R/2=5\\,m\\)' }
    ],
    mistakes: ['Cho vận tốc đỉnh bằng 0 nên h=2R.', 'Dùng h=5R mà quên chia hai.'], review: ['Điều kiện hoàn thành vòng lượn đứng.']
  },
  {
    questionId: 'phy10-adv-q111', answer: 'C',
    insight: 'Vị trí cân bằng là điểm dừng của thế năng, còn cân bằng bền phải tương ứng với cực tiểu chứ không chỉ U′ bằng không.',
    steps: [
      { title: 'Tìm điểm cân bằng', explanation: 'U′=4x³−8x=4x(x²−2)=0 nên x=0, ±√2.' },
      { title: 'Xét độ bền', explanation: 'U″=12x²−8; tại ±√2 thì U″=16>0, còn tại 0 là âm.', result: '\\(x=\\pm\\sqrt2\\)' }
    ],
    mistakes: ['Chọn cả ba nghiệm của U′=0.', 'Tìm nghiệm U=0 thay cho U′=0.'], review: ['Cân bằng bền qua đồ thị thế năng.']
  },
  {
    questionId: 'phy10-adv-q112', answer: 'C',
    insight: 'Ở tốc độ giới hạn, lực kéo cân bằng lực cản và công suất cơ liên hệ với lực kéo qua P=Fv.',
    steps: [
      { title: 'Điều kiện tốc độ giới hạn', explanation: 'Gia tốc bằng không nên lực kéo có độ lớn 300 N.' },
      { title: 'Dùng công suất', explanation: 'P=Fv với P=6000 W.', result: '\\(v=6000/300=20\\,m/s\\)' }
    ],
    mistakes: ['Đổi 6 kW thành 600 W.', 'Cho công suất bằng lực chia vận tốc.'], review: ['Công suất của lực kéo ở chuyển động đều.']
  },
  {
    questionId: 'phy10-adv-q113', answer: 'B',
    insight: 'Tại đáy, lực căng vừa cân bằng trọng lực vừa cung cấp lực hướng tâm ứng với tốc độ nhận được khi hạ thấp.',
    steps: [
      { title: 'Tìm tốc độ đáy', explanation: 'Độ hạ là L(1−cos60°)=L/2 nên v²=2g·L/2=gL.' },
      { title: 'Phương trình hướng tâm', explanation: 'T−mg=mv²/L=mg.', result: '\\(T=2mg\\)' }
    ],
    mistakes: ['Cho T=mv²/L và bỏ trọng lực.', 'Dùng độ hạ bằng L.'], review: ['Cơ năng và lực căng của con lắc.']
  },
  {
    questionId: 'phy10-adv-q114', answer: 'B',
    insight: 'Trước hết phải giải va chạm đàn hồi để biết tốc độ vật nhẹ bật ngược, rồi mới chuyển động năng đó sang lò xo.',
    steps: [
      { title: 'Sau va chạm', explanation: 'Với m va vào 3m đứng yên, vận tốc vật nhẹ là (m−3m)/(m+3m)·4=−2 m/s.' },
      { title: 'Nén lò xo', explanation: 'mv²/2=kx²/2.', formula: '\\(2=50x^2\\Rightarrow x=0{,}20\\,m\\)' }
    ],
    mistakes: ['Dùng tốc độ 4 m/s để nén lò xo.', 'Cho vật nhẹ tiếp tục đi cùng chiều sau va chạm.'], review: ['Va chạm đàn hồi nối tiếp dao động lò xo.']
  },
  {
    questionId: 'phy10-adv-q115', answer: 'C',
    insight: 'Vì hệ số ma sát phụ thuộc vị trí, công phải được tính bằng tích phân lực ma sát thay vì dùng giá trị tại một đầu đoạn.',
    steps: [
      { title: 'Viết lực ma sát', explanation: 'Fms=−mg(0,10+0,02x)=−10(0,10+0,02x).' },
      { title: 'Tích phân theo quãng đường', explanation: 'A=−10∫₀¹⁰(0,10+0,02x)dx.', result: '\\(A=-20\\,J\\)' }
    ],
    mistakes: ['Dùng μ=0,10 cho cả đoạn.', 'Quên dấu âm của công lực ma sát.'], review: ['Công của lực biến đổi theo vị trí.']
  },
  {
    questionId: 'phy10-adv-q116', answer: 'C',
    insight: 'Chỉ phần công suất sau hiệu suất mới làm tăng thế năng của nước, nên cần dùng công suất có ích trong phép tính thời gian.',
    steps: [
      { title: 'Năng lượng cần thiết', explanation: 'Khối lượng nước là 30000 kg.', formula: '\\(E=mgh=3{,}6\\times10^6\\,J\\)' },
      { title: 'Công suất có ích và thời gian', explanation: 'Pích=0,75·8000=6000 W; t=E/Pích=600 s.', result: '10 phút' }
    ],
    mistakes: ['Dùng trực tiếp 8 kW mà bỏ hiệu suất.', 'Đổi 30 m³ thành 3000 kg.'], review: ['Hiệu suất và công suất máy bơm.']
  },
  {
    questionId: 'phy10-adv-q117', answer: 'B',
    insight: 'Tổng động lượng ban đầu bằng không nên động lượng mảnh thứ ba đối hướng với tổng vectơ của hai mảnh nhẹ.',
    steps: [
      { title: 'Cộng hai vectơ nhẹ', explanation: 'Hai động lượng vuông góc, mỗi vectơ 10 kg·m/s nên hợp lực có độ lớn 10√2.' },
      { title: 'Suy ra tốc độ mảnh nặng', explanation: 'Mảnh 2 kg có động lượng cùng độ lớn và ngược hướng.', result: '\\(v=10\\sqrt2/2=5\\sqrt2\\,m/s\\)' }
    ],
    mistakes: ['Cộng đại số 10+10 dù hai vectơ vuông góc.', 'Quên chia động lượng cho khối lượng 2 kg.'], review: ['Bảo toàn động lượng trong vụ nổ hai chiều.']
  },
  {
    questionId: 'phy10-adv-q118', answer: 'C',
    insight: 'Va chạm cắm đạn bảo toàn động lượng nhưng không bảo toàn cơ năng; cơ năng chỉ bảo toàn ở giai đoạn hệ vọt lên.',
    steps: [
      { title: 'Tốc độ ngay sau va chạm', explanation: 'Khối lượng chung 2 kg; V=√(2gh)=2 m/s.' },
      { title: 'Bảo toàn động lượng va chạm', explanation: '0,02u=2·2.', result: '\\(u=200\\,m/s\\)' }
    ],
    mistakes: ['Bảo toàn cơ năng xuyên suốt lúc đạn cắm vào gỗ.', 'Dùng riêng khối lượng gỗ sau va chạm.'], review: ['Con lắc đạn gồm hai giai đoạn.']
  },
  {
    questionId: 'phy10-adv-q119', answer: 'A',
    insight: 'Cần kết hợp bảo toàn động lượng với phương trình hệ số đàn hồi để xác định riêng hai vận tốc sau va chạm.',
    steps: [
      { title: 'Hai phương trình', explanation: '10=2v₁+3v₂ và v₂−v₁=e(u₁−u₂)=2,5.' },
      { title: 'Giải hệ', explanation: 'Thay v₂=v₁+2,5 vào phương trình động lượng.', result: '\\(v_1=0{,}5\\,m/s;\ v_2=3\\,m/s\\)' }
    ],
    mistakes: ['Coi va chạm đàn hồi hoàn toàn dù e=0,5.', 'Viết v₁−v₂=2,5 làm đảo chiều tốc độ tách.'], review: ['Hệ số đàn hồi trong va chạm thẳng.']
  },
  {
    questionId: 'phy10-adv-q120', answer: 'B',
    insight: 'Hệ ban đầu đứng yên nên động lượng của phần xe còn lại phải cân bằng động lượng cát được phóng về phía sau.',
    steps: [
      { title: 'Khối lượng xe còn lại', explanation: 'Sau khi phóng, xe và cát còn lại có khối lượng 90 kg.' },
      { title: 'Bảo toàn động lượng', explanation: 'Chọn chiều xe là dương: 90v+10(−20)=0.', result: '\\(v=20/9\\,m/s\\)' }
    ],
    mistakes: ['Dùng 100 kg cho khối lượng xe sau phóng.', 'Cho vận tốc cát là vận tốc tương đối với xe dù đề nói so với đất.'], review: ['Chuyển động phản lực ở hệ khối lượng rời rạc.']
  },
  {
    questionId: 'phy10-adv-q121', answer: 'B',
    insight: 'Va chạm đầu là mềm để tạo khối 2m, còn va chạm sau là đàn hồi giữa hai khối lượng bằng nhau nên chúng đổi vận tốc.',
    steps: [
      { title: 'Sau va chạm A–B', explanation: 'm·6=(2m)V nên khối AB có V=3 m/s.' },
      { title: 'Va chạm với C', explanation: 'AB và C đều có khối lượng 2m; va chạm đàn hồi trực diện với C đứng yên làm trao đổi vận tốc.', result: '\\(v_C=3\\,m/s\\)' }
    ],
    mistakes: ['Bảo toàn động năng ở va chạm dính đầu tiên.', 'Coi C có khối lượng m thay vì 2m.'], review: ['Chuỗi va chạm mềm rồi đàn hồi.']
  },
  {
    questionId: 'phy10-adv-q122', answer: 'B',
    insight: 'Độ biến thiên động lượng bằng xung lượng, tức diện tích đại số dưới đồ thị lực theo thời gian.',
    steps: [
      { title: 'Nhận dạng diện tích', explanation: 'Đồ thị là tam giác có đáy 0,20 s và chiều cao 100 N.' },
      { title: 'Tính xung lượng', explanation: 'J=1/2·0,20·100.', result: '\\(\\Delta p=10\\,N.s\\)' }
    ],
    mistakes: ['Nhân đáy với chiều cao mà quên hệ số một nửa.', 'Chia lực cho thời gian.'], review: ['Xung lượng từ đồ thị F–t.']
  },
  {
    questionId: 'phy10-adv-q123', answer: 'B',
    insight: 'Trước khi ném hệ đứng yên, nên động lượng của bóng theo một chiều được cân bằng bởi người và xe theo chiều ngược lại.',
    steps: [
      { title: 'Chọn hệ cô lập', explanation: 'Theo phương ngang, ngoại lực bỏ qua; phần người và xe sau ném có khối lượng 150 kg.' },
      { title: 'Bảo toàn động lượng', explanation: '150v+10·10=0.', result: '\\(v=-2/3\\,m/s\\), tức sang trái' }
    ],
    mistakes: ['Cộng bóng vào 150 kg sau khi bóng đã rời tay.', 'Cho người và xe chuyển động cùng chiều bóng.'], review: ['Ném vật trên xe ở mặt phẳng nhẵn.']
  },
  {
    questionId: 'phy10-adv-q124', answer: 'B',
    insight: 'Với hai bi bằng nhau và một bi đứng yên, hai vận tốc sau va chạm đàn hồi vuông góc và các hình chiếu tạo tam giác vận tốc.',
    steps: [
      { title: 'Dùng hình học động lượng', explanation: 'Vectơ vận tốc đầu bằng tổng hai vectơ vận tốc sau; hai vectơ sau vuông góc.' },
      { title: 'Chiếu theo hướng đầu', explanation: 'vA=u cos30° và vB=u sin30°.', result: '\\(v_A=5\\sqrt3\\,m/s;\ v_B=5\\,m/s\\)' }
    ],
    mistakes: ['Cho hai tốc độ sau bằng nhau.', 'Đổi sin và cos nên gán tốc độ lớn cho bi B.'], review: ['Va chạm đàn hồi xiên của hai khối lượng bằng nhau.']
  },
  {
    questionId: 'phy10-adv-q125', answer: 'B',
    insight: 'Từ lực căng ở đáy suy ra tốc độ đáy, rồi dùng cơ năng để tìm tốc độ và lực căng tại vị trí ngang.',
    steps: [
      { title: 'Tại đáy', explanation: 'Tb−mg=mvb²/R; 6mg−mg=mvb²/R nên vb²=5gR.' },
      { title: 'Tại điểm ngang', explanation: 'Tăng độ cao R nên v²=vb²−2gR=3gR; trọng lực không có thành phần hướng tâm.', result: '\\(T=mv^2/R=3mg\\)' }
    ],
    mistakes: ['Dùng luôn tốc độ đáy tại điểm ngang.', 'Cộng mg vào phương trình hướng tâm ở vị trí ngang.'], review: ['Lực căng biến đổi trong vòng tròn đứng.']
  },
  {
    questionId: 'phy10-adv-q126', answer: 'B',
    insight: 'Thành phần đứng của lực căng cân bằng trọng lực, còn thành phần ngang cung cấp gia tốc hướng tâm của con lắc hình nón.',
    steps: [
      { title: 'Hai phương trình lực', explanation: 'Tcosθ=mg và Tsinθ=mω²r với r=Lsinθ.' },
      { title: 'Khử T và r', explanation: 'ω²=g/(Lcosθ)=10/(1·0,5)=20.', result: '\\(\\omega=2\\sqrt5\\,rad/s\\)' }
    ],
    mistakes: ['Dùng bán kính quỹ đạo bằng L.', 'Cho ω²=g tanθ/L.'], review: ['Con lắc hình nón và chuyển động tròn đều.']
  },
  {
    questionId: 'phy10-adv-q127', answer: 'C',
    insight: 'Trên quỹ đạo tròn, động năng vệ tinh bằng GMm/(2r), vì vậy nó tỉ lệ nghịch với bán kính quỹ đạo.',
    steps: [
      { title: 'Từ lực hấp dẫn', explanation: 'v²=GM/r.' },
      { title: 'Lập tỉ số động năng', explanation: 'K=mv²/2=GMm/(2r).', result: '\\(K_{4r}/K_r=1/4\\)' }
    ],
    mistakes: ['Cho động năng tỉ lệ nghịch r² như lực hấp dẫn.', 'Cho tốc độ và động năng cùng tỉ lệ 1/√r.'], review: ['Năng lượng của vệ tinh trên quỹ đạo tròn.']
  },
  {
    questionId: 'phy10-adv-q128', answer: 'B',
    insight: 'Với cùng khối lượng riêng, khối lượng hành tinh tỉ lệ R³ nên vận tốc thoát tại bề mặt tỉ lệ trực tiếp với R.',
    steps: [
      { title: 'Thay khối lượng theo bán kính', explanation: 'M=(4/3)πρR³.' },
      { title: 'Xét vận tốc thoát', explanation: 'vthoát=√(2GM/R) nên với ρ không đổi, v∝R.', result: '\\(v_B/v_A=R_B/R_A=3\\)' }
    ],
    mistakes: ['Cho hai vận tốc bằng nhau vì cùng khối lượng riêng.', 'Kết luận v tỉ lệ R³ theo khối lượng.'], review: ['Vận tốc thoát và khối lượng riêng thiên thể.']
  },
  {
    questionId: 'phy10-adv-q129', answer: 'C',
    insight: 'Ma sát có thể hướng lên hoặc xuống dốc tùy tốc độ, vì vậy phải xét hai trạng thái giới hạn để có cả vmin và vmax.',
    steps: [
      { title: 'Hai công thức giới hạn', explanation: 'Với t=tanθ: vmax²=rg(t+μ)/(1−μt), vmin²=rg(t−μ)/(1+μt).' },
      { title: 'Thay số', explanation: 'vmax²=500·0,7/0,9; vmin²=500·0,3/1,1.', result: '\\(11{,}7\\lesssim v\\lesssim19{,}7\\,m/s\\)' }
    ],
    mistakes: ['Chỉ tính tốc độ thiết kế không ma sát.', 'Dùng cùng chiều ma sát cho cả hai giới hạn.'], review: ['Chuyển động trên đường vòng nghiêng có ma sát.']
  },
  {
    questionId: 'phy10-adv-q130', answer: 'C',
    insight: 'Phản lực thành trụ cung cấp lực hướng tâm, còn ma sát nghỉ từ phản lực phải đủ giữ trọng lượng theo phương đứng.',
    steps: [
      { title: 'Lực hướng tâm', explanation: 'N=mω²R.' },
      { title: 'Điều kiện không trượt', explanation: 'μN≥mg nên ω≥√(g/(μR)).', result: '\\(\\omega_{min}=\\sqrt{10/(0{,}4\\cdot0{,}5)}=5\\sqrt2\\,rad/s\\)' }
    ],
    mistakes: ['Cho N=mg.', 'Dùng vận tốc dài thay cho tốc độ góc mà không chia R.'], review: ['Ma sát trong ống trụ quay.']
  },
  {
    questionId: 'phy10-adv-q131', answer: 'D',
    insight: 'Tốc độ đáy tối thiểu phải vừa cung cấp độ tăng thế năng lên đỉnh vừa giữ vận tốc đủ để không mất tiếp xúc.',
    steps: [
      { title: 'Tại đỉnh', explanation: 'Điều kiện giới hạn N=0 cho vt²=gR.' },
      { title: 'Bảo toàn cơ năng', explanation: 'vb²=vt²+4gR=5gR.', result: '\\(v_b=\\sqrt{50}\\,m/s\\)' }
    ],
    mistakes: ['Cho vt=0 tại đỉnh.', 'Dùng chênh cao R thay vì 2R.'], review: ['Tốc độ tối thiểu trong vòng tròn đứng.']
  },
  {
    questionId: 'phy10-adv-q132', answer: 'B',
    insight: 'Điểm triệt tiêu nằm giữa hai vật và gần khối lượng nhỏ hơn; tại đó độ lớn hai cường độ hấp dẫn bằng nhau.',
    steps: [
      { title: 'Đặt khoảng cách', explanation: 'Gọi x là khoảng cách đến M, khoảng cách đến 4M là 3d−x.' },
      { title: 'Cân bằng hai trường', explanation: 'GM/x²=4GM/(3d−x)² nên 3d−x=2x.', result: '\\(x=d\\)' }
    ],
    mistakes: ['Đặt điểm chính giữa dù hai khối lượng khác nhau.', 'Bỏ bình phương khoảng cách.'], review: ['Điểm triệt tiêu của hai trường hấp dẫn.']
  },
  {
    questionId: 'phy10-adv-q133', answer: 'B',
    insight: 'Tường nhẵn chỉ tạo phản lực ngang; lấy moment quanh chân thang loại được cả phản lực sàn và lực ma sát.',
    steps: [
      { title: 'Cân bằng moment', explanation: 'Độ cao đầu thang là 4 m, cánh tay đòn trọng lượng là 1,5 m.', formula: '\\(N_t\\cdot4=200\\cdot1{,}5\\Rightarrow N_t=75\\,N\\)' },
      { title: 'Cân bằng ngang', explanation: 'Lực ma sát ở chân cân bằng phản lực của tường.', result: '\\(f=75\\,N\\)' }
    ],
    mistakes: ['Cho lực ma sát bằng μN dù chưa ở giới hạn trượt.', 'Dùng toàn bộ chiều dài 5 m làm cánh tay đòn.'], review: ['Thang tựa tường nhẵn trên sàn nhám.']
  },
  {
    questionId: 'phy10-adv-q134', answer: 'C',
    insight: 'Chỉ thành phần vuông góc của lực căng tạo moment quanh bản lề; hai tải trọng có cánh tay đòn khác nhau.',
    steps: [
      { title: 'Tổng moment tải', explanation: 'Trọng lượng thanh đặt ở 2 m và vật treo ở 3 m: M=200·2+400·3=1600 N·m.' },
      { title: 'Moment lực căng', explanation: 'Tsin30°·4=1600.', result: '\\(T=800\\,N\\)' }
    ],
    mistakes: ['Dùng toàn bộ T tạo moment thay vì Tsin30°.', 'Đặt trọng lượng thanh tại đầu thanh.'], review: ['Thanh bản lề được giữ bằng dây xiên.']
  },
  {
    questionId: 'phy10-adv-q135', answer: 'B',
    insight: 'Áp suất truyền qua chất lỏng phải hiệu chỉnh theo chênh cao trước khi nhân với diện tích pittông lớn.',
    steps: [
      { title: 'Áp suất tại pittông nhỏ', explanation: 'A₁=10 cm²=0,001 m² nên p₁=100/0,001=100000 Pa.' },
      { title: 'Lên cao 2 m', explanation: 'p₂=p₁−ρgh=80000 Pa; A₂=0,05 m².', result: '\\(F_2=p_2A_2=4000\\,N\\)' }
    ],
    mistakes: ['Chỉ dùng tỉ số diện tích và được 5000 N.', 'Cộng ρgh dù pittông lớn nằm cao hơn.'], review: ['Định luật Pascal khi hai pittông khác độ cao.']
  },
  {
    questionId: 'phy10-adv-q136', answer: 'B',
    insight: 'Ở cùng một mức trong thủy ngân, áp suất hai phía bằng nhau nên cột nước cân bằng một cột thủy ngân thấp hơn nhiều.',
    steps: [
      { title: 'Cân bằng áp suất', explanation: 'ρnước gh=ρHg gΔh.' },
      { title: 'Tính chênh lệch', explanation: 'Δh=20/13,6 cm.', result: '\\(\\Delta h\\approx1{,}47\\,cm\\)' }
    ],
    mistakes: ['Cho chênh mực bằng luôn 20 cm.', 'Nhân 20 với 13,6 thay vì chia.'], review: ['Cân bằng áp suất trong ống chữ U.']
  },
  {
    questionId: 'phy10-adv-q137', answer: 'C',
    insight: 'Khi vừa chìm hết, lực đẩy cực đại bằng trọng lượng nước có thể tích bằng toàn bộ khối gỗ và tải đặt thêm.',
    steps: [
      { title: 'Khối lượng nước cực đại', explanation: 'ρnướcV=1000·0,020=20 kg.' },
      { title: 'Trừ khối lượng gỗ', explanation: 'mgỗ=600·0,020=12 kg.', result: '\\(m_{thêm}=20-12=8\\,kg\\)' }
    ],
    mistakes: ['Lấy 20 kg là tải thêm mà quên khối lượng gỗ.', 'Dùng khối lượng riêng gỗ trừ nước theo thứ tự ngược.'], review: ['Tải trọng cực đại của vật nổi.']
  },
  {
    questionId: 'phy10-adv-q138', answer: 'C',
    insight: 'Hai dây có cùng độ cứng kéo dãn nên chia đều lực, nhưng ứng suất khác nhau vì tiết diện của chúng không bằng nhau.',
    steps: [
      { title: 'So độ cứng', explanation: 'k₁=EA/L; k₂=(E/2)(2A)/L=EA/L nên F₁=F₂=300 N.' },
      { title: 'So ứng suất', explanation: 'σ₁=300/A; σ₂=300/(2A).', result: '\\(\\sigma_1/\\sigma_2=2\\)' }
    ],
    mistakes: ['Cho ứng suất bằng nhau vì lực bằng nhau.', 'Cho dây tiết diện lớn chịu lực gấp đôi dù độ cứng hai dây bằng nhau.'], review: ['Độ cứng và ứng suất của các dây mắc song song.']
  },
  {
    questionId: 'phy10-adv-q139', answer: 'B',
    insight: 'Khối tâm của thanh không đồng chất được tính bằng moment khối lượng tích phân chia cho tổng khối lượng.',
    steps: [
      { title: 'Tổng khối lượng', explanation: 'M=∫₀ᴸλ₀(1+x/L)dx=3λ₀L/2.' },
      { title: 'Moment bậc nhất', explanation: '∫₀ᴸxλdx=λ₀(L²/2+L²/3)=5λ₀L²/6.', result: '\\(x_G=(5/6)/(3/2)L=5L/9\\)' }
    ],
    mistakes: ['Đặt khối tâm tại L/2 như thanh đồng chất.', 'Lấy trung bình hai giá trị khối lượng riêng ở hai đầu.'], review: ['Khối tâm của phân bố khối lượng liên tục.']
  },
  {
    questionId: 'phy10-adv-q140', answer: 'C',
    insight: 'Áp suất tăng tuyến tính theo độ sâu nên hợp lực bằng áp suất tại độ sâu trọng tâm nhân diện tích cửa.',
    steps: [
      { title: 'Độ sâu trọng tâm và diện tích', explanation: 'Tâm hình chữ nhật ở h=1,5 m; diện tích A=2·3=6 m².' },
      { title: 'Tính hợp lực', explanation: 'F=ρghA.', formula: '\\(F=1000\\cdot10\\cdot1{,}5\\cdot6=90000\\,N=90\\,kN\\)' }
    ],
    mistakes: ['Dùng độ sâu mép dưới 3 m cho toàn cửa.', 'Quên nhân diện tích cửa.'], review: ['Hợp lực thủy tĩnh lên mặt phẳng thẳng đứng.']
  },
  {
    questionId: 'phy10-adv-q141', answer: 'C',
    insight: 'Đồ thị s theo t² có hệ số góc bằng g/2; dùng độ chênh hai mốc giúp loại ảnh hưởng của tung độ gốc nhỏ.',
    steps: [
      { title: 'Bình phương thời gian', explanation: 'Hai mốc cho t₁²=0,0100 s² và t₂²=0,0484 s².' },
      { title: 'Độ chênh quãng đường', explanation: 'Δs=0,237−0,049=0,188 m.' },
      { title: 'Hệ số góc', explanation: 'ađồ thị=Δs/Δ(t²)=0,188/0,0384≈4,896 m/s².' },
      { title: 'Suy ra g', explanation: 'Vì ađồ thị=g/2 nên g≈9,79 m/s².', result: '\\(g\\approx9{,}8\\,m/s^2\\)' }
    ],
    mistakes: ['Lấy s/t thay vì độ dốc s theo t².', 'Quên nhân đôi hệ số góc để được g.'], review: ['Tuyến tính hóa dữ liệu rơi tự do.']
  },
  {
    questionId: 'phy10-adv-q142', answer: 'C',
    insight: 'Phải tách số đọc cảm biến thành lực đàn hồi thật và độ lệch điểm không trước khi dùng điều kiện cân bằng để cân vật.',
    steps: [
      { title: 'Tìm độ cứng', explanation: 'Độ dốc k=(3,40−1,40)/(0,06−0,02)=50 N/m.' },
      { title: 'Tìm độ lệch', explanation: 'F₀=1,40−50·0,02=0,40 N.' },
      { title: 'Lực đàn hồi với vật X', explanation: 'Độ dãn 0,08 m tạo lực thật kx=4,0 N; không cộng F₀ vì đó chỉ là sai lệch số đọc.' },
      { title: 'Suy khối lượng', explanation: 'Ở cân bằng mg=kx.', result: '\\(m=4/10=0{,}40\\,kg\\)' }
    ],
    mistakes: ['Dùng số đọc dự đoán 4,40 N làm trọng lượng thật.', 'Tính k từ F/x của một hàng và bỏ F₀.'], review: ['Hiệu chuẩn tuyến tính có tung độ gốc.']
  },
  {
    questionId: 'phy10-adv-q143', answer: 'B',
    insight: 'Số liệu vị trí cho gia tốc thực; so gia tốc đó với phương trình lực trên mặt nghiêng sẽ cho hệ số ma sát.',
    steps: [
      { title: 'Đọc quy luật từ bảng', explanation: 'Mỗi hàng có s/t²=2,0 nên s=2t².' },
      { title: 'Suy gia tốc', explanation: 'So với s=at²/2 được a=4,0 m/s².' },
      { title: 'Phương trình dọc dốc', explanation: 'ma=mg sin30°−μmg cos30°.' },
      { title: 'Giải μ', explanation: '4=5−μ·10·0,866.', result: '\\(\\mu\\approx0{,}115\\approx0{,}12\\)' }
    ],
    mistakes: ['Cho gia tốc bằng s/t² thay vì 2s/t².', 'Dùng lực ma sát μmg thay vì μmg cosα.'], review: ['Suy hệ số ma sát từ dữ liệu chuyển động.']
  },
  {
    questionId: 'phy10-adv-q144', answer: 'B',
    insight: 'Cùng quãng đường từ nghỉ khiến thời gian tỉ lệ nghịch căn bậc hai gia tốc, từ đó tỉ số thời gian xác định hệ số quán tính quay β.',
    steps: [
      { title: 'Gia tốc hai vật', explanation: 'Con trượt có a₀=g sinα; vật lăn có a=a₀/(1+β).' },
      { title: 'Liên hệ thời gian', explanation: 'Vì s=at²/2 nên (tlăn/ttrượt)²=a₀/a=1+β.' },
      { title: 'Thay số', explanation: 'β=(1,47/1,20)²−1≈0,501.' },
      { title: 'Đối chiếu mô hình', explanation: 'β gần 1/2 nhất.', result: 'Vật là trụ đặc.' }
    ],
    mistakes: ['Cho tỉ số thời gian bằng trực tiếp 1+β.', 'Chọn cầu đặc vì nhầm β=2/5 với 1/2.'], review: ['Động lực học vật lăn không trượt.']
  },
  {
    questionId: 'phy10-adv-q145', answer: 'B',
    insight: 'Đầu tàu phải đi cả chiều dài hầm lẫn chiều dài đoàn tàu; sau đó giải phương trình chuyển động nhanh dần đều.',
    steps: [
      { title: 'Xác định quãng đường đầu tàu', explanation: 'Khi toa cuối ra khỏi hầm, đầu tàu đã đi 300+120=420 m.' },
      { title: 'Lập phương trình', explanation: '420=10t+0,5·0,50t²=10t+0,25t².' },
      { title: 'Giải nghiệm dương', explanation: 't²+40t−1680=0 nên t=(−40+√8320)/2.' },
      { title: 'Tính gần đúng', explanation: 'Loại nghiệm âm.', result: '\\(t\\approx25{,}6\\,s\\)' }
    ],
    mistakes: ['Chỉ cho đầu tàu đi 300 m.', 'Dùng công thức chuyển động đều với tốc độ đầu.'], review: ['Chuyển động của vật có kích thước qua một đoạn giới hạn.']
  },
  {
    questionId: 'phy10-adv-q146', answer: 'B',
    insight: 'Sau khi rời tay, bóng không còn chịu gia tốc của xe; cần đổi vận tốc đầu sang hệ đất rồi so hai vị trí tại cùng thời điểm.',
    steps: [
      { title: 'Vận tốc bóng theo đất', explanation: 'Thành phần ngang là 4+6=10 m/s; thành phần đứng là 10 m/s.' },
      { title: 'Thời gian bay', explanation: 'Trở lại cùng độ cao sau t=2vy/g=2 s.' },
      { title: 'Vị trí bóng', explanation: 'xb=10·2=20 m.' },
      { title: 'Vị trí xe', explanation: 'xx=4·2+2·2²/2=12 m.' },
      { title: 'Khoảng cách tương đối', explanation: 'Bóng ở trước xe.', result: '\\(\\Delta x=20-12=8\\,m\\)' }
    ],
    mistakes: ['Cho bóng tiếp tục nhận gia tốc ngang 2 m/s² của xe.', 'Dùng 6 m/s làm vận tốc ngang theo đất.'], review: ['Ném vật từ hệ quy chiếu đang tăng tốc.']
  },
  {
    questionId: 'phy10-adv-q147', answer: 'C',
    insight: 'Trước hết phải kiểm tra cuộc gặp có xảy ra trong 10 giây tăng tốc của xe tuần tra hay chỉ ở giai đoạn tốc độ không đổi.',
    steps: [
      { title: 'Cuối giai đoạn tăng tốc', explanation: 'Thời điểm toàn cục là 14 s; xe tuần tra đi 0,5·3·10²=150 m và đạt 30 m/s.' },
      { title: 'Vị trí xe máy', explanation: 'Sau 14 s, xe máy ở x=15·14=210 m.' },
      { title: 'Khoảng cách còn lại', explanation: 'Xe tuần tra còn cách 60 m nên chưa gặp trong giai đoạn tăng tốc.' },
      { title: 'Đuổi ở tốc độ đều', explanation: 'Tốc độ tương đối là 30−15=15 m/s, cần thêm 4 s.', result: '\\(t=14+4=18\\,s\\)' }
    ],
    mistakes: ['Đo 10 s tăng tốc từ mốc xe máy đi qua mà quên trễ 4 s.', 'Kết luận gặp ở 14 s mà không so hai vị trí.'], review: ['Đuổi bắt qua nhiều chế độ chuyển động.']
  },
  {
    questionId: 'phy10-adv-q148', answer: 'B',
    insight: 'Tốc độ bơi vuông góc bờ quyết định thời gian qua sông, còn độ trôi phải tích phân vì dòng nước thay đổi theo y.',
    steps: [
      { title: 'Thời gian bơi', explanation: 'dy/dt=2 m/s nên tb=120/2=60 s.' },
      { title: 'Viết độ trôi vi phân', explanation: 'dx=vn(y)dt=[1+y/120]dy/2.' },
      { title: 'Tích phân độ trôi', explanation: 'x=1/2∫₀¹²⁰(1+y/120)dy=90 m.' },
      { title: 'Thời gian chạy', explanation: 'tc=90/3=30 s.' },
      { title: 'Cộng thời gian', explanation: 'Không có khoảng nghỉ.', result: '\\(t=60+30=90\\,s\\)' }
    ],
    mistakes: ['Dùng vận tốc dòng trung bình sai do không lấy trung bình tuyến tính.', 'Lấy tốc độ tổng hợp để chia chiều rộng sông.'], review: ['Chuyển động tương đối trong dòng chảy không đều.']
  },
  {
    questionId: 'phy10-adv-q149', answer: 'B',
    insight: 'Trong hệ nêm, ma sát đổi chiều ở một giá trị A nên điều kiện đúng phải dùng trị tuyệt đối của lực dọc dốc cần cân bằng.',
    steps: [
      { title: 'Phản lực', explanation: 'Chiếu vuông góc mặt nghiêng: N=m(g cosα+A sinα)=m(8+0,6A).' },
      { title: 'Ma sát cần thiết', explanation: 'Dọc dốc, độ lớn cần cân bằng là m|g sinα−A cosα|=m|6−0,8A|.' },
      { title: 'Điều kiện ma sát nghỉ', explanation: '|6−0,8A|≤0,25(8+0,6A).' },
      { title: 'Giải hai bất đẳng thức', explanation: 'Nhận được A≥4/0,95 và A≤8/0,65.', result: '\\(4{,}2\\lesssim A\\lesssim12{,}3\\,m/s^2\\)' }
    ],
    mistakes: ['Cố định chiều ma sát cho mọi A.', 'Bỏ thành phần A sinα trong phản lực.'], review: ['Cân bằng tương đối trên nêm có ma sát.']
  },
  {
    questionId: 'phy10-adv-q150', answer: 'C',
    insight: 'Ròng rọc trụ đặc góp thêm quán tính tương đương I/R², còn lực ma sát trên vật bàn phải trừ khỏi trọng lực vật treo.',
    steps: [
      { title: 'Lực ma sát', explanation: 'f=μm₁g=0,20·3·10=6 N.' },
      { title: 'Quán tính ròng rọc', explanation: 'Với trụ đặc I=MR²/2 nên I/R²=M/2=1 kg.' },
      { title: 'Lực kéo thuần', explanation: 'F=m₂g−f=40−6=34 N.' },
      { title: 'Khối lượng hiệu dụng', explanation: 'mhiệu=m₁+m₂+I/R²=3+4+1=8 kg.' },
      { title: 'Gia tốc', explanation: 'Áp dụng phương trình toàn hệ.', result: '\\(a=34/8=4{,}25\\,m/s^2\\)' }
    ],
    mistakes: ['Cho hai lực căng bằng nhau và bỏ động năng quay.', 'Cộng ma sát vào lực kéo thay vì trừ.'], review: ['Hệ vật có ròng rọc mang moment quán tính.']
  },
  {
    questionId: 'phy10-adv-q151', answer: 'C',
    insight: 'Sau khi kiểm tra ngưỡng trượt, phải viết hai phương trình riêng vì khối và ván có gia tốc khác nhau.',
    steps: [
      { title: 'Kiểm tra trạng thái', explanation: 'Nếu đi cùng, ma sát kéo ván là 4F/6=8 N, vượt fmax=0,25·2·10=5 N; hệ đang trượt.' },
      { title: 'Gia tốc khối trên', explanation: 'Lực thuần lên khối là 12−5=7 N nên am=7/2=3,5 m/s².' },
      { title: 'Gia tốc tấm ván', explanation: 'Ván chỉ chịu ma sát 5 N nên aM=5/4=1,25 m/s².' },
      { title: 'Gia tốc tương đối', explanation: 'Hai gia tốc cùng chiều.', result: '\\(a_{m/M}=3{,}5-1{,}25=2{,}25\\,m/s^2\\)' }
    ],
    mistakes: ['Giữ giả thiết hai vật đi cùng dù ma sát yêu cầu vượt cực đại.', 'Lấy tổng hai gia tốc thay vì hiệu.'], review: ['Chuyển từ ma sát nghỉ sang ma sát trượt.']
  },
  {
    questionId: 'phy10-adv-q152', answer: 'C',
    insight: 'Trong cabin đi lên nhanh dần, trọng lực hiệu dụng tăng thành g+a; sau đó máy Atwood được giải như trong trường đều mới.',
    steps: [
      { title: 'Trường hiệu dụng', explanation: 'Lực quán tính hướng xuống nên g′=g+2=12 m/s².' },
      { title: 'Gia tốc tương đối', explanation: 'a=(3−2)g′/(3+2)=12/5 m/s².' },
      { title: 'Phương trình vật nhẹ', explanation: 'Vật 2 kg đi lên tương đối: T−2g′=2a.' },
      { title: 'Tính lực căng', explanation: 'T=24+2·12/5.', result: '\\(T=28{,}8\\,N\\)' }
    ],
    mistakes: ['Dùng g−2 dù cabin gia tốc lên.', 'Cộng gia tốc cabin trực tiếp vào gia tốc tương đối trong phương trình hệ cabin.'], review: ['Máy Atwood trong hệ quy chiếu thang máy.']
  },
  {
    questionId: 'phy10-adv-q153', answer: 'B',
    insight: 'Độ cao đầu phải bù cả năng lượng mất trên đoạn nhám và động năng tối thiểu cần có ở đáy vòng lượn.',
    steps: [
      { title: 'Điều kiện ở đỉnh', explanation: 'Vừa bám ray: vđỉnh²=gR.' },
      { title: 'Năng lượng cần tại đáy vòng', explanation: 'Kđáy=mg·2R+mgR/2=5mgR/2.' },
      { title: 'Công ma sát', explanation: 'Năng lượng mất là μmgL=0,20·mg·5=mg·1 m.' },
      { title: 'Cân bằng từ điểm thả', explanation: 'mgh=5mgR/2+μmgL.' },
      { title: 'Thay R=2 m', explanation: 'h=5+1.', result: '\\(h_{min}=6\\,m\\)' }
    ],
    mistakes: ['Bỏ đoạn nhám và trả 5 m.', 'Cho tốc độ tại đỉnh bằng không.'], review: ['Vòng lượn kết hợp hao phí trước vòng.']
  },
  {
    questionId: 'phy10-adv-q154', answer: 'B',
    insight: 'Bài phải tách ba định luật cho ba giai đoạn: cơ năng có ma sát, động lượng khi va chạm mềm và cơ năng khi vọt lên.',
    steps: [
      { title: 'Năng lượng lò xo', explanation: 'Eđh=kx²/2=200·0,20²/2=4 J.' },
      { title: 'Qua đoạn nhám', explanation: 'Ams=−μmgL=−2 J nên động năng trước va chạm là 2 J, suy ra u=2 m/s.' },
      { title: 'Va chạm mềm', explanation: 'mu=(m+M)V nên V=1·2/4=0,50 m/s.' },
      { title: 'Vọt lên', explanation: '(m+M)V²/2=(m+M)gh nên h=V²/(2g).' },
      { title: 'Kết quả', explanation: 'h=0,25/20=0,0125 m.', result: '\\(h=1{,}25\\,cm\\)' }
    ],
    mistakes: ['Bảo toàn cơ năng qua va chạm mềm.', 'Bỏ công ma sát trước va chạm.'], review: ['Chuỗi lò xo–ma sát–va chạm–con lắc.']
  },
  {
    questionId: 'phy10-adv-q155', answer: 'C',
    insight: 'Công lực kéo là diện tích toàn tam giác F–x, còn ma sát và động năng đầu phải được đưa cùng vào định lí động năng.',
    steps: [
      { title: 'Động năng đầu', explanation: 'K₀=mv₀²/2=1 J.' },
      { title: 'Công lực kéo', explanation: 'Diện tích tam giác đáy 4 m, cao 12 N là AF=24 J.' },
      { title: 'Công ma sát', explanation: 'Ams=−μmgL=−0,10·2·10·4=−8 J.' },
      { title: 'Động năng cuối', explanation: 'K=K₀+AF+Ams=17 J.' },
      { title: 'Suy tốc độ', explanation: 'Với m=2 kg, K=v².', result: '\\(v=\\sqrt{17}\\,m/s\\)' }
    ],
    mistakes: ['Tính diện tích đồ thị thành hình chữ nhật 48 J.', 'Bỏ động năng ban đầu 1 J.'], review: ['Định lí động năng với đồ thị lực–vị trí.']
  },
  {
    questionId: 'phy10-adv-q156', answer: 'B',
    insight: 'Ở tốc độ giới hạn, công suất chia vận tốc bằng lực cản; phương trình thu được là bậc ba theo tốc độ.',
    steps: [
      { title: 'Lực kéo tức thời', explanation: 'Động cơ công suất không đổi tạo lực Ft=P/v.' },
      { title: 'Điều kiện giới hạn', explanation: 'Gia tốc bằng không nên P/v=2v².' },
      { title: 'Phương trình tốc độ', explanation: 'v³=P/2=4000/2=2000.' },
      { title: 'Lấy căn bậc ba', explanation: 'Khối lượng không ảnh hưởng giá trị giới hạn.', result: '\\(v=\\sqrt[3]{2000}\\approx12{,}6\\,m/s\\)' }
    ],
    mistakes: ['Dùng P=Fv².', 'Đưa khối lượng 500 kg vào điều kiện gia tốc bằng không.'], review: ['Công suất không đổi và lực cản phụ thuộc tốc độ.']
  },
  {
    questionId: 'phy10-adv-q157', answer: 'B',
    insight: 'Sự tách và va chạm mềm là hai sự kiện riêng, mỗi sự kiện đều bảo toàn động lượng nhưng có các hệ vật khác nhau.',
    steps: [
      { title: 'Động lượng trước tách', explanation: 'p₀=6·4=24 kg·m/s.' },
      { title: 'Vận tốc phần 4 kg', explanation: '24=2·10+4v nên v=1 m/s sang phải.' },
      { title: 'Va chạm mềm tiếp theo', explanation: 'Phần 4 kg đang chạy va vào toa 4 kg đứng yên.' },
      { title: 'Bảo toàn lần hai', explanation: '4·1=(4+4)V.', result: '\\(V=0{,}50\\,m/s\\)' }
    ],
    mistakes: ['Dùng chung một phương trình cho cả hai sự kiện.', 'Cho phần 4 kg có động lượng 24−10 thay vì 24−20.'], review: ['Bảo toàn động lượng qua nhiều giai đoạn.']
  },
  {
    questionId: 'phy10-adv-q158', answer: 'C',
    insight: 'Xung lượng đạn truyền cho khối xác định vận tốc đầu của khối; giai đoạn sau dùng năng lượng có thêm công ma sát.',
    steps: [
      { title: 'Động lượng truyền', explanation: 'Δpđạn=0,01(400−100)=3 kg·m/s.' },
      { title: 'Vận tốc khối', explanation: 'Khối nhận động lượng 3 kg·m/s nên V=3 m/s.' },
      { title: 'Năng lượng trước nén', explanation: 'K=1·3²/2=4,5 J.' },
      { title: 'Phương trình nén', explanation: '4,5=kx²/2+μmgx=450x²+2x.' },
      { title: 'Nghiệm vật lí', explanation: 'Chọn nghiệm dương của phương trình bậc hai.', result: '\\(x\\approx0{,}0978\\,m\\)' }
    ],
    mistakes: ['Coi đạn cắm vào khối và dùng khối lượng chung.', 'Bỏ công ma sát trong lúc nén.'], review: ['Đạn xuyên vật rồi nén lò xo.']
  },
  {
    questionId: 'phy10-adv-q159', answer: 'C',
    insight: 'Bảo toàn động lượng theo hai trục cho trực tiếp hai thành phần vận tốc của B mà không cần đoán hướng sau va chạm.',
    steps: [
      { title: 'Thành phần của A', explanation: 'vAx=8·0,8=6,4 m/s; vAy=8·0,6=4,8 m/s.' },
      { title: 'Động lượng theo Ox', explanation: 'Khối lượng bằng nhau nên vBx=10−6,4=3,6 m/s.' },
      { title: 'Động lượng theo Oy', explanation: 'Ban đầu bằng 0 nên vBy=−4,8 m/s.' },
      { title: 'Tính góc', explanation: 'tanβ=|vBy|/vBx=4,8/3,6=4/3.', result: '\\(\\beta=53{,}1^\\circ\\) phía dưới' }
    ],
    mistakes: ['Cho B lệch cùng phía với A làm động lượng đứng không bảo toàn.', 'Dùng 8 m/s làm thành phần ngang của A.'], review: ['Va chạm xiên và bảo toàn vectơ động lượng.']
  },
  {
    questionId: 'phy10-adv-q160', answer: 'C',
    insight: 'Từng va chạm đàn hồi trực diện được giải theo đúng cặp khối lượng tham gia; vận tốc ra của B ở lần đầu là vận tốc vào lần sau.',
    steps: [
      { title: 'Va chạm A–B', explanation: 'B đứng yên nên vB=2m/(m+2m)·12=8 m/s.' },
      { title: 'Xác định cặp lần hai', explanation: 'B có khối lượng 2m và tốc độ 8 m/s; C có khối lượng 3m, đứng yên.' },
      { title: 'Va chạm B–C', explanation: 'vC=2(2m)/(2m+3m)·8.' },
      { title: 'Kết quả', explanation: 'Chỉ xét ngay sau lần B–C đầu tiên.', result: '\\(v_C=6{,}4\\,m/s\\)' }
    ],
    mistakes: ['Cho B nhận toàn bộ 12 m/s ở va chạm đầu.', 'Dùng khối lượng A khi tính va chạm B–C.'], review: ['Công thức va chạm đàn hồi trực diện liên tiếp.']
  },
  {
    questionId: 'phy10-adv-q161', answer: 'C',
    insight: 'Hai biên tốc độ tương ứng hai chiều ma sát trái ngược; dùng tanθ giúp công thức giới hạn gọn và tránh tách sin, cos riêng.',
    steps: [
      { title: 'Công thức biên thấp', explanation: 'vmin²=rg(tanθ−μ)/(1+μtanθ).' },
      { title: 'Thay số biên thấp', explanation: 'vmin²=400·0,50/1,1875≈168,42 nên vmin≈13,0 m/s.' },
      { title: 'Công thức biên cao', explanation: 'vmax²=rg(tanθ+μ)/(1−μtanθ).' },
      { title: 'Thay số biên cao', explanation: 'vmax²=400·1,00/0,8125≈492,31 nên vmax≈22,2 m/s.', result: '\\(13{,}0\\lesssim v\\lesssim22{,}2\\,m/s\\)' }
    ],
    mistakes: ['Chỉ tính tốc độ thiết kế khi không có ma sát.', 'Dùng cùng dấu μ cho cả hai giới hạn.'], review: ['Dải tốc độ trên mặt đường nghiêng có ma sát.']
  },
  {
    questionId: 'phy10-adv-q162', answer: 'C',
    insight: 'Cơ năng tại điểm phóng xác định bán trục lớn ellipse; điểm phóng là cận điểm nên viễn điểm được suy ra từ tổng hai bán kính.',
    steps: [
      { title: 'Cơ năng riêng lúc phóng', explanation: 'ε=v₀²/2−GM/R=3gR/4−gR=−gR/4.' },
      { title: 'Đổi sang GM', explanation: 'Vì GM=gR² nên ε=−GM/(4R).' },
      { title: 'Tìm bán trục lớn', explanation: 'Với ellipse ε=−GM/(2a), suy ra a=2R.' },
      { title: 'Dùng hai điểm cực trị', explanation: 'rcận+rviễn=2a=4R và rcận=R.' },
      { title: 'Khoảng cách lớn nhất', explanation: 'Điểm phóng là cận điểm theo giả thiết.', result: '\\(r_{max}=3R\\)' }
    ],
    mistakes: ['Coi quỹ đạo tròn với bán kính R.', 'Cho bán trục lớn bằng khoảng cách viễn điểm.'], review: ['Cơ năng quỹ đạo ellipse trong trường hấp dẫn.']
  },
  {
    questionId: 'phy10-adv-q163', answer: 'C',
    insight: 'Năng lượng đầu phải trả ba khoản: tăng thế năng, động năng tối thiểu ở đỉnh và công chống lực cản.',
    steps: [
      { title: 'Điều kiện bám tại đỉnh', explanation: 'N=0 cho vđỉnh²=gR.' },
      { title: 'Động năng đỉnh', explanation: 'Kđỉnh=mgR/2.' },
      { title: 'Phần năng lượng khác', explanation: 'Tăng thế năng 2mgR và hao phí mgR/2.' },
      { title: 'Cân bằng năng lượng', explanation: 'mv₀²/2=mgR/2+2mgR+mgR/2=3mgR.' },
      { title: 'Suy tốc độ', explanation: 'v₀²=6gR.', result: '\\(v_0=\\sqrt{6gR}\\)' }
    ],
    mistakes: ['Cho tốc độ đỉnh bằng không.', 'Đưa công cản với dấu làm tăng cơ năng.'], review: ['Vòng tròn đứng có hao phí cho trước.']
  },
  {
    questionId: 'phy10-adv-q164', answer: 'C',
    insight: 'Trên đĩa nhẵn, lực đàn hồi duy nhất đóng vai trò lực hướng tâm; độ dãn phải lấy bán kính quay trừ chiều dài tự nhiên.',
    steps: [
      { title: 'Độ dãn lò xo', explanation: 'x=r−l₀=0,30−0,20=0,10 m.' },
      { title: 'Lực đàn hồi', explanation: 'F=kx=100·0,10=10 N.' },
      { title: 'Phương trình hướng tâm', explanation: 'kx=mω²r.' },
      { title: 'Giải tốc độ góc', explanation: 'ω²=10/(0,50·0,30)=66,67.', result: '\\(\\omega\\approx8{,}2\\,rad/s\\)' }
    ],
    mistakes: ['Dùng r=0,10 m là bán kính quỹ đạo.', 'Cộng thêm một lực ma sát hướng tâm dù mặt đĩa nhẵn.'], review: ['Lò xo cung cấp lực hướng tâm.']
  },
  {
    questionId: 'phy10-adv-q165', answer: 'C',
    insight: 'Moment quanh chân thang cho phản lực ngang của tường; hệ số ma sát tối thiểu là tỉ số lực ngang đó với tổng phản lực đứng.',
    steps: [
      { title: 'Cánh tay đòn', explanation: 'Đầu thang cao 5sin60°; trọng tâm thang cách ngang 2,5cos60°; người cách ngang 3cos60°.' },
      { title: 'Cân bằng moment', explanation: 'Nt·5sin60°=200·2,5cos60°+600·3cos60°.' },
      { title: 'Tìm phản lực tường', explanation: 'Nt=1150/(5sin60°)≈265,6 N.' },
      { title: 'Cân bằng lực', explanation: 'f=Nt và Nsàn=200+600=800 N.' },
      { title: 'Ngưỡng ma sát', explanation: 'μmin=f/Nsàn.', result: '\\(\\mu_{min}\\approx0{,}332\\approx0{,}33\\)' }
    ],
    mistakes: ['Đặt người tại trung điểm thang.', 'Lấy phản lực tường chia cho riêng trọng lượng thang.'], review: ['Thang có người ở trạng thái sắp trượt.']
  },
  {
    questionId: 'phy10-adv-q166', answer: 'C',
    insight: 'Mỗi tầng máy ép nhân lực theo tỉ số diện tích riêng; lực ra tầng trước là lực vào tầng sau, không phải áp suất giữ nguyên qua thanh cứng.',
    steps: [
      { title: 'Tầng một', explanation: 'Tỉ số diện tích là 30/2=15 nên lực ra F₁=120·15=1800 N.' },
      { title: 'Truyền qua thanh', explanation: 'Thanh cứng đặt lực 1800 N lên pittông vào 5 cm² của tầng hai.' },
      { title: 'Tầng hai', explanation: 'Tỉ số diện tích là 200/5=40.' },
      { title: 'Lực cuối', explanation: 'F₂=1800·40=72000 N.' },
      { title: 'Đổi đơn vị', explanation: '72000 N bằng 0,072 MN.', result: '\\(F=0{,}072\\,MN\\)' }
    ],
    mistakes: ['Nhân sai cm² sang m² làm kết quả lớn hơn 100 lần.', 'Dùng áp suất tầng một trực tiếp cho pittông cuối và bỏ tầng hai.'], review: ['Máy ép thủy lực ghép nhiều tầng.']
  },
  {
    questionId: 'phy10-adv-q167', answer: 'C',
    insight: 'Ở ngưỡng vừa chìm hết, lực đẩy đạt cực đại và tổng khối lượng quả cầu cùng nước bơm vào bằng khối lượng nước bị chiếm chỗ.',
    steps: [
      { title: 'Khối lượng nước bị chiếm chỗ', explanation: 'Khi chìm hết, mthay thế=ρV=1000·0,010=10 kg.' },
      { title: 'Điều kiện nổi giới hạn', explanation: 'Tổng khối lượng quả cầu và nước bên trong phải bằng 10 kg.' },
      { title: 'Khối lượng nước thêm', explanation: 'mnước=10−5=5 kg.' },
      { title: 'Đổi sang thể tích', explanation: 'Vnước=5/1000.', result: '\\(V=0{,}0050\\,m^3\\)' }
    ],
    mistakes: ['Cho thể tích nước thêm bằng toàn bộ 0,010 m³.', 'Bỏ khối lượng 5 kg ban đầu của quả cầu.'], review: ['Điều kiện nổi giới hạn của vật rỗng.']
  },
  {
    questionId: 'phy10-adv-q168', answer: 'C',
    insight: 'Trước khi cân bằng moment phải tìm khối tâm thanh từ phân bố khối lượng; không thể đặt trọng lượng thanh ở trung điểm.',
    steps: [
      { title: 'Tổng khối lượng tỉ lệ', explanation: 'M=∫₀ᴸλ₀(1+x/L)dx=3λ₀L/2.' },
      { title: 'Khối tâm', explanation: 'xG=[∫₀ᴸxλdx]/M=(5λ₀L²/6)/(3λ₀L/2)=5L/9.' },
      { title: 'Moment hai trọng lượng', explanation: 'Mthuận=W·5L/9+W·3L/4=47WL/36.' },
      { title: 'Moment lực căng', explanation: 'Mchống=T·L·sin30°=TL/2.' },
      { title: 'Cân bằng', explanation: 'TL/2=47WL/36.', result: '\\(T=47W/18\\)' }
    ],
    mistakes: ['Đặt trọng lượng thanh tại L/2.', 'Dùng toàn bộ T tạo moment thay vì thành phần Tsin30°.'], review: ['Khối tâm liên tục kết hợp cân bằng moment.']
  }
];

export const advancedPhysics10Solutions = seeds.map(seed => createSolution({
  ...seed,
  answer: balancedAnswerFor(seed.questionId)
}));
