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

export const g10PhysicsModule0RemediationSeeds: PhysicsRemediationSeed[] = [
  {
    id: 'phy10-m0r-q001', subTypeId: 'phy10-qt1-st3', outcomeIds: ['PHY10-M0-O01'],
    content: 'Một nhóm khảo sát ảnh hưởng của chiều dài dây đến chu kì con lắc nhưng đồng thời thay cả khối lượng quả nặng. Đánh giá phù hợp nhất là',
    difficulty: 'easy', cognitiveLevel: 'understanding', competency: 'physical_inquiry',
    practiceRole: 'guided', representationType: 'experiment', correctAnswer: 'D',
    options: ['A. Quy trình tốt vì có hai biến thay đổi.', 'B. Chỉ cần đo một lần là đủ.', 'C. Khối lượng luôn làm chu kì tăng.', 'D. Chưa tách được ảnh hưởng của chiều dài vì có biến gây nhiễu.'],
    estimatedSeconds: 45,
    reasoning: ['Mục tiêu là kiểm tra quan hệ giữa chiều dài và chu kì nên chiều dài phải là biến độc lập duy nhất.', 'Thay thêm khối lượng làm hai yếu tố biến thiên đồng thời, vì vậy chưa thể quy nguyên nhân.']
  },
  {
    id: 'phy10-m0r-q002', subTypeId: 'phy10-qt1-st3', outcomeIds: ['PHY10-M0-O01'],
    content: 'Kết quả đo cho thấy nhiệt độ tăng thì điện trở đo được cũng tăng. Phát biểu nào là kết luận thận trọng nhất?',
    difficulty: 'medium', cognitiveLevel: 'understanding', competency: 'physical_inquiry',
    practiceRole: 'near_transfer', representationType: 'text', correctAnswer: 'D',
    options: ['A. Nhiệt độ là nguyên nhân duy nhất trong mọi vật liệu.', 'B. Điện trở luôn tăng tuyến tính đến vô hạn.', 'C. Mọi phép đo khác sẽ cho đúng số liệu này.', 'D. Dữ liệu ủng hộ xu hướng tăng trong phạm vi và điều kiện đã khảo sát.'],
    estimatedSeconds: 55,
    reasoning: ['Dữ liệu chỉ cung cấp bằng chứng trong miền nhiệt độ và điều kiện của thí nghiệm.', 'Không được biến một xu hướng quan sát thành quy luật tuyệt đối hoặc ngoại suy vô hạn.']
  },
  {
    id: 'phy10-m0r-q003', subTypeId: 'phy10-qt1-st4', outcomeIds: ['PHY10-M0-O02'],
    content: 'Trong lúc đo tốc độ xe đồ chơi, dây điện nguồn bị tróc vỏ và xe vẫn đang chạy. Hành động đúng nhất là',
    difficulty: 'hard', cognitiveLevel: 'application', competency: 'physical_application',
    practiceRole: 'mastery_holdout', representationType: 'experiment', correctAnswer: 'D',
    options: ['A. Giữ dây bằng tay để phép đo không gián đoạn.', 'B. Dùng băng dính quấn ngay khi nguồn đang bật.', 'C. Tiếp tục quay video rồi xử lí sau.', 'D. Dừng thí nghiệm, ngắt nguồn ở vị trí an toàn, cảnh báo và báo người phụ trách.'],
    estimatedSeconds: 60,
    reasoning: ['Dây hở khi nguồn hoạt động là nguy cơ điện trực tiếp nên dữ liệu không còn là ưu tiên.', 'Phải dừng và cô lập nguồn bằng thao tác an toàn trước khi tiếp cận thiết bị.', 'Sau đó kiểm soát khu vực và báo người phụ trách; không tự sửa khi nguồn còn bật.']
  },
  {
    id: 'phy10-m0r-q004', subTypeId: 'phy10-qt2-st1', outcomeIds: ['PHY10-M0-O03'],
    content: 'Đơn vị nào dưới đây có thể viết tương đương với đơn vị động lượng trong SI?',
    difficulty: 'medium', cognitiveLevel: 'understanding', competency: 'physical_cognition',
    practiceRole: 'near_transfer', representationType: 'equation', correctAnswer: 'D',
    options: ['A. kg·m/s²', 'B. kg/m·s', 'C. N/m', 'D. kg·m/s'],
    estimatedSeconds: 45,
    reasoning: ['Động lượng có biểu thức $p=mv$.', 'Đơn vị là $kg\\cdot m/s$.']
  },
  {
    id: 'phy10-m0r-q005', subTypeId: 'phy10-qt2-st2', outcomeIds: ['PHY10-M0-O03'],
    content: 'Đổi tốc độ $54$ km/h sang m/s. Chỉ nhập giá trị số.',
    difficulty: 'medium', cognitiveLevel: 'application', competency: 'physical_cognition',
    practiceRole: 'near_transfer', representationType: 'equation', correctAnswer: '15',
    acceptedAnswers: ['15', '15.0', '15,0'], estimatedSeconds: 45,
    reasoning: ['$1$ km/h bằng $1/3{,}6$ m/s.', '$54/3{,}6=15$ m/s.']
  },
  {
    id: 'phy10-m0r-q006', subTypeId: 'phy10-qt2-st2', outcomeIds: ['PHY10-M0-O03'],
    content: 'Đổi $2{,}5\\times10^3$ mm² sang m². Chỉ nhập giá trị số.',
    difficulty: 'hard', cognitiveLevel: 'application', competency: 'physical_cognition',
    practiceRole: 'mastery_holdout', representationType: 'equation', correctAnswer: '0.0025',
    acceptedAnswers: ['0.0025', '0,0025', '2.5e-3', '2,5e-3'], estimatedSeconds: 65,
    reasoning: ['$1$ mm bằng $10^{-3}$ m nên $1$ mm² bằng $10^{-6}$ m².', 'Nhân hệ số: $2{,}5\\times10^3\\times10^{-6}=2{,}5\\times10^{-3}$.', 'Giá trị thập phân là $0{,}0025$ m².']
  },
  {
    id: 'phy10-m0r-q007', subTypeId: 'phy10-qt3-st3', outcomeIds: ['PHY10-M0-O04'],
    content: 'Năm lần đo thời gian là 2,01 s; 2,00 s; 2,02 s; 2,01 s và 2,48 s. Cách xử lí khoa học nhất là',
    difficulty: 'hard', cognitiveLevel: 'application', competency: 'physical_inquiry',
    practiceRole: 'mastery_holdout', representationType: 'table', correctAnswer: 'D',
    options: ['A. Xóa ngay 2,48 s vì làm trung bình xấu.', 'B. Giữ lại nhưng sửa thành 2,08 s.', 'C. Chỉ lấy ba số gần 2,01 s.', 'D. Kiểm tra biên bản, dụng cụ và đo lại trước khi quyết định theo tiêu chí công bố.'],
    estimatedSeconds: 70,
    reasoning: ['Giá trị 2,48 s cách xa cụm nên là điểm cần điều tra, chưa phải dữ liệu được phép tự ý xóa.', 'Cần tìm nguyên nhân thao tác hoặc thiết bị và thực hiện phép đo kiểm tra.', 'Chỉ loại số liệu khi có tiêu chí và căn cứ được ghi rõ.']
  },
  {
    id: 'phy10-m0r-q008', subTypeId: 'phy10-qt3-st4', outcomeIds: ['PHY10-M0-O04'],
    content: 'Ba lần đo chiều dài lần lượt là 4,9 cm; 5,0 cm và 5,1 cm. Giá trị trung bình bằng bao nhiêu cm?',
    difficulty: 'easy', cognitiveLevel: 'application', competency: 'physical_cognition',
    practiceRole: 'guided', representationType: 'table', correctAnswer: '5',
    acceptedAnswers: ['5', '5.0', '5,0'], estimatedSeconds: 35,
    stimulus: {
      id: 'phy10-m0r-st008', title: 'Bảng đo chiều dài',
      dataTable: {
        caption: 'Ba lần đo cùng điều kiện',
        columns: [{ key: 'trial', label: 'Lần đo' }, { key: 'length', label: 'Chiều dài', unit: 'cm' }],
        rows: [{ trial: 1, length: 4.9 }, { trial: 2, length: 5.0 }, { trial: 3, length: 5.1 }]
      }
    },
    reasoning: ['Cộng ba giá trị được $15{,}0$ cm.', 'Chia cho 3 được $5{,}0$ cm.']
  },
  {
    id: 'phy10-m0r-q009', subTypeId: 'phy10-qt4-st1', outcomeIds: ['PHY10-M0-O05'],
    content: 'Các số đo dao động lúc cao, lúc thấp quanh một giá trị ổn định dù quy trình không đổi. Đây chủ yếu là dấu hiệu của',
    difficulty: 'easy', cognitiveLevel: 'recognition', competency: 'physical_cognition',
    practiceRole: 'guided', representationType: 'text', correctAnswer: 'D',
    options: ['A. sai số hệ thống một chiều.', 'B. đơn vị SI.', 'C. giới hạn đo.', 'D. sai số ngẫu nhiên.'],
    estimatedSeconds: 35,
    reasoning: ['Sai số ngẫu nhiên làm các lần đo phân tán theo cả hai phía.', 'Sai số hệ thống thường làm cả nhóm lệch có xu hướng cố định.']
  },
  {
    id: 'phy10-m0r-q010', subTypeId: 'phy10-qt4-st3', outcomeIds: ['PHY10-M0-O05'],
    content: 'Một phép đo có giá trị trung bình 8,0 cm và sai số tuyệt đối 0,12 cm. Sai số tỉ đối bằng bao nhiêu phần trăm?',
    difficulty: 'medium', cognitiveLevel: 'application', competency: 'physical_cognition',
    practiceRole: 'near_transfer', representationType: 'equation', correctAnswer: '1.5',
    acceptedAnswers: ['1.5', '1,5', '1.5%', '1,5%'], estimatedSeconds: 50,
    reasoning: ['Dùng $\\delta=\\Delta A/|\\bar A|\\times100\\%$.', '$0{,}12/8{,}0\\times100\\%=1{,}5\\%$.']
  },
  {
    id: 'phy10-m0r-q011', subTypeId: 'phy10-qt4-st4', outcomeIds: ['PHY10-M0-O05'],
    content: 'Phép đo P có sai số tỉ đối 1%, phép đo Q có sai số tỉ đối 3%. Nếu dùng cùng quy ước, phép đo nào chính xác tương đối hơn?',
    difficulty: 'easy', cognitiveLevel: 'understanding', competency: 'physical_cognition',
    practiceRole: 'guided', representationType: 'text', correctAnswer: 'D',
    options: ['A. Q vì phần trăm lớn hơn.', 'B. Hai phép đo như nhau.', 'C. Không thể so sánh bằng sai số tỉ đối.', 'D. P vì sai số tỉ đối nhỏ hơn.'],
    estimatedSeconds: 35,
    reasoning: ['Sai số tỉ đối chuẩn hóa sai số theo độ lớn đại lượng.', 'Giá trị 1% nhỏ hơn 3% nên P chính xác tương đối hơn.']
  },
  {
    id: 'phy10-m0r-q012', subTypeId: 'phy10-qt5-st3', outcomeIds: ['PHY10-M0-O06'],
    content: 'Số $0{,}004050$ có bao nhiêu chữ số có nghĩa?',
    difficulty: 'hard', cognitiveLevel: 'application', competency: 'physical_cognition',
    practiceRole: 'mastery_holdout', representationType: 'text', correctAnswer: '4',
    acceptedAnswers: ['4', '4.0', '4,0'], estimatedSeconds: 55,
    reasoning: ['Các số 0 đứng trước chữ số 4 chỉ giữ vị trí nên không có nghĩa.', 'Số 0 giữa 4 và 5 có nghĩa; số 0 cuối sau dấu thập phân cũng có nghĩa.', 'Các chữ số có nghĩa là 4, 0, 5, 0: tổng cộng 4.']
  },
  {
    id: 'phy10-m0r-q013', subTypeId: 'phy10-qt5-st4', outcomeIds: ['PHY10-M0-O06'],
    content: 'Cách ghi nào không phù hợp vì giá trị trung bình và sai số không cùng hàng thập phân?',
    difficulty: 'easy', cognitiveLevel: 'understanding', competency: 'physical_cognition',
    practiceRole: 'misconception_check', representationType: 'equation', correctAnswer: 'D',
    options: ['A. $(8{,}4\\pm0{,}2)$ cm', 'B. $(1{,}25\\pm0{,}03)$ s', 'C. $(12\\pm1)$ g', 'D. $(12{,}347\\pm0{,}2)$ cm'],
    estimatedSeconds: 40,
    reasoning: ['Sai số 0,2 kết thúc ở hàng phần mười.', 'Giá trị trung bình tương ứng cũng phải được làm tròn đến hàng phần mười, không giữ 12,347.']
  },
  {
    id: 'phy10-m0r-q014', subTypeId: 'phy10-qt6-st1', outcomeIds: ['PHY10-M0-O07'],
    content: 'Với $A=x-y$, biết $\\Delta x=0{,}3$ cm và $\\Delta y=0{,}2$ cm. Sai số tuyệt đối cực đại của A bằng bao nhiêu cm?',
    difficulty: 'easy', cognitiveLevel: 'application', competency: 'physical_cognition',
    practiceRole: 'guided', representationType: 'equation', correctAnswer: '0.5',
    acceptedAnswers: ['0.5', '0,5'], estimatedSeconds: 40,
    reasoning: ['Với tổng hoặc hiệu, các sai số tuyệt đối được cộng.', '$\\Delta A=0{,}3+0{,}2=0{,}5$ cm.']
  },
  {
    id: 'phy10-m0r-q015', subTypeId: 'phy10-qt6-st1', outcomeIds: ['PHY10-M0-O07'],
    content: 'Độ dày được tính $d=L_2-L_1$. Nếu $L_2=(15{,}0\\pm0{,}2)$ mm và $L_1=(9{,}0\\pm0{,}1)$ mm, sai số tuyệt đối của d bằng bao nhiêu mm?',
    difficulty: 'medium', cognitiveLevel: 'application', competency: 'physical_cognition',
    practiceRole: 'near_transfer', representationType: 'equation', correctAnswer: '0.3',
    acceptedAnswers: ['0.3', '0,3'], estimatedSeconds: 50,
    reasoning: ['Phép hiệu vẫn cộng sai số tuyệt đối của hai đại lượng.', '$\\Delta d=0{,}2+0{,}1=0{,}3$ mm.']
  },
  {
    id: 'phy10-m0r-q016', subTypeId: 'phy10-qt6-st2', outcomeIds: ['PHY10-M0-O07'],
    content: 'Khối lượng có sai số tỉ đối 2% và thể tích có sai số tỉ đối 3%. Với $\\rho=m/V$, sai số tỉ đối của khối lượng riêng xấp xỉ bao nhiêu phần trăm?',
    difficulty: 'hard', cognitiveLevel: 'application', competency: 'physical_cognition',
    practiceRole: 'mastery_holdout', representationType: 'equation', correctAnswer: '5',
    acceptedAnswers: ['5', '5%', '5.0', '5,0'], estimatedSeconds: 60,
    reasoning: ['Khối lượng riêng là thương của hai đại lượng đo.', 'Quy tắc cực đại cho thương là cộng các sai số tỉ đối.', '$\\delta_\\rho\\approx2\\%+3\\%=5\\%$.']
  },
  {
    id: 'phy10-m0r-q017', subTypeId: 'phy10-qt6-st3', outcomeIds: ['PHY10-M0-O07'],
    content: 'Cạnh hình vuông có sai số tỉ đối 2%. Sai số tỉ đối của diện tích xấp xỉ bao nhiêu phần trăm?',
    difficulty: 'easy', cognitiveLevel: 'application', competency: 'physical_cognition',
    practiceRole: 'guided', representationType: 'equation', correctAnswer: '4',
    acceptedAnswers: ['4', '4%', '4.0', '4,0'], estimatedSeconds: 35,
    reasoning: ['Diện tích $S=a^2$ có số mũ 2.', '$\\delta_S\\approx2\\delta_a=4\\%$.']
  },
  {
    id: 'phy10-m0r-q018', subTypeId: 'phy10-qt6-st3', outcomeIds: ['PHY10-M0-O07'],
    content: 'Thể tích quả cầu được tính từ đường kính theo $V=\\pi d^3/6$. Nếu d có sai số tỉ đối 1%, V có sai số tỉ đối xấp xỉ bao nhiêu phần trăm?',
    difficulty: 'hard', cognitiveLevel: 'application', competency: 'physical_cognition',
    practiceRole: 'mastery_holdout', representationType: 'equation', correctAnswer: '3',
    acceptedAnswers: ['3', '3%', '3.0', '3,0'], estimatedSeconds: 65,
    reasoning: ['Các hệ số $\\pi/6$ được xem là chính xác nên không đóng góp sai số.', 'Đường kính xuất hiện với lũy thừa 3.', '$\\delta_V\\approx3\\delta_d=3\\%$.']
  },
  {
    id: 'phy10-m0r-q019', subTypeId: 'phy10-qt6-st4', outcomeIds: ['PHY10-M0-O07'],
    content: 'Một vật đi được 20 m trong 4 s. Tốc độ tính gián tiếp bằng bao nhiêu m/s?',
    difficulty: 'easy', cognitiveLevel: 'application', competency: 'physical_cognition',
    practiceRole: 'guided', representationType: 'equation', correctAnswer: '5',
    acceptedAnswers: ['5', '5.0', '5,0'], estimatedSeconds: 30,
    reasoning: ['Dùng $v=s/t$.', '$v=20/4=5$ m/s.']
  },
  {
    id: 'phy10-m0r-q020', subTypeId: 'phy10-qt6-st4', outcomeIds: ['PHY10-M0-O07'],
    content: 'Trong phép đo $v=s/t$, s có sai số tỉ đối 2% và t có sai số tỉ đối 1%. Sai số tỉ đối của v xấp xỉ bao nhiêu phần trăm?',
    difficulty: 'medium', cognitiveLevel: 'application', competency: 'physical_cognition',
    practiceRole: 'near_transfer', representationType: 'equation', correctAnswer: '3',
    acceptedAnswers: ['3', '3%', '3.0', '3,0'], estimatedSeconds: 45,
    reasoning: ['Tốc độ là thương của quãng đường và thời gian.', 'Sai số tỉ đối cực đại là $2\\%+1\\%=3\\%$.']
  },
  {
    id: 'phy10-m0r-q021', subTypeId: 'phy10-qt7-st1', outcomeIds: ['PHY10-M0-O08'],
    content: 'Khảo sát ảnh hưởng của chiều dài con lắc đến chu kì. Đại lượng nào là biến phụ thuộc?',
    difficulty: 'medium', cognitiveLevel: 'understanding', competency: 'physical_inquiry',
    practiceRole: 'near_transfer', representationType: 'experiment', correctAnswer: 'D',
    options: ['A. Chiều dài dây.', 'B. Vật liệu của giá đỡ.', 'C. Số thứ tự lần đo.', 'D. Chu kì đo được.'],
    estimatedSeconds: 45,
    reasoning: ['Chiều dài được chủ động thay đổi nên là biến độc lập.', 'Chu kì được đo để theo dõi đáp ứng nên là biến phụ thuộc.']
  },
  {
    id: 'phy10-m0r-q022', subTypeId: 'phy10-qt7-st1', outcomeIds: ['PHY10-M0-O08'],
    content: 'Muốn kiểm tra “tốc độ xe có phụ thuộc điện áp nguồn hay không”, cách định nghĩa thao tác nào làm câu hỏi kiểm chứng được tốt nhất?',
    difficulty: 'hard', cognitiveLevel: 'application', competency: 'physical_inquiry',
    practiceRole: 'mastery_holdout', representationType: 'experiment', correctAnswer: 'D',
    options: ['A. Quan sát xe chạy có vẻ nhanh.', 'B. Dùng các xe khác nhau cho mỗi điện áp.', 'C. Thay đồng thời điện áp và mặt đường.', 'D. Đặt các mức điện áp xác định, đo quãng đường trong cùng khoảng thời gian và giữ các điều kiện khác.'],
    estimatedSeconds: 75,
    reasoning: ['Giả thuyết cần biến độc lập là điện áp và biến phụ thuộc là tốc độ được đo định lượng.', 'Quãng đường trong cùng thời gian tạo tiêu chí vận hành rõ ràng cho tốc độ.', 'Giữ xe và mặt đường không đổi để hạn chế biến gây nhiễu.']
  },
  {
    id: 'phy10-m0r-q023', subTypeId: 'phy10-qt7-st2', outcomeIds: ['PHY10-M0-O08'],
    content: 'Muốn đo chu kì con lắc bằng đồng hồ bấm giây, quy trình nào phù hợp nhất?',
    difficulty: 'easy', cognitiveLevel: 'understanding', competency: 'physical_inquiry',
    practiceRole: 'guided', representationType: 'experiment', correctAnswer: 'D',
    options: ['A. Đo tùy ý một phần dao động.', 'B. Chỉ nhìn và ước lượng.', 'C. Bấm giờ một dao động duy nhất rồi không lặp.', 'D. Đo thời gian nhiều dao động trọn vẹn, chia cho số dao động và lặp lại.'],
    estimatedSeconds: 45,
    reasoning: ['Đo nhiều chu kì làm thời gian tổng lớn hơn so với sai số phản xạ.', 'Chia đúng số dao động và lặp phép đo để đánh giá độ phân tán.']
  },
  {
    id: 'phy10-m0r-q024', subTypeId: 'phy10-qt7-st2', outcomeIds: ['PHY10-M0-O08'],
    content: 'Thiết kế nào tốt nhất để kiểm tra quan hệ giữa lực và độ dãn của một lò xo?',
    difficulty: 'hard', cognitiveLevel: 'application', competency: 'physical_inquiry',
    practiceRole: 'mastery_holdout', representationType: 'experiment', correctAnswer: 'D',
    options: ['A. Dùng mỗi mức lực với một lò xo khác nhau.', 'B. Chỉ đo khi tải lớn nhất.', 'C. Thay lực và chiều dài tự nhiên cùng lúc.', 'D. Dùng cùng lò xo, tăng tải theo nhiều mức an toàn, đo lặp độ dãn và kiểm tra khi giảm tải.'],
    estimatedSeconds: 80,
    reasoning: ['Phải dùng cùng lò xo để loại khác biệt độ cứng giữa các mẫu.', 'Nhiều mức tải và phép đo lặp cho phép kiểm tra xu hướng thay vì một điểm.', 'Nhánh giảm tải giúp phát hiện lò xo đã vượt giới hạn đàn hồi hoặc có độ trễ.']
  },
  {
    id: 'phy10-m0r-q025', subTypeId: 'phy10-qt7-st3', outcomeIds: ['PHY10-M0-O08'],
    content: 'Bảng cho x lần lượt 1, 2, 3 và y lần lượt 2, 4, 6. Hệ số góc của quan hệ y theo x bằng bao nhiêu?',
    difficulty: 'easy', cognitiveLevel: 'application', competency: 'physical_inquiry',
    practiceRole: 'guided', representationType: 'table', correctAnswer: '2',
    acceptedAnswers: ['2', '2.0', '2,0'], estimatedSeconds: 35,
    stimulus: {
      id: 'phy10-m0r-st025', title: 'Bảng dữ liệu tuyến tính',
      dataTable: {
        caption: 'Giá trị y theo x',
        columns: [{ key: 'x', label: 'x' }, { key: 'y', label: 'y' }],
        rows: [{ x: 1, y: 2 }, { x: 2, y: 4 }, { x: 3, y: 6 }]
      }
    },
    reasoning: ['Chọn hai điểm, chẳng hạn $(1;2)$ và $(3;6)$.', 'Hệ số góc là $(6-2)/(3-1)=2$.']
  },
  {
    id: 'phy10-m0r-q026', subTypeId: 'phy10-qt7-st3', outcomeIds: ['PHY10-M0-O08'],
    content: 'Các điểm thực nghiệm gần một đường thẳng nhưng phần dư đều dương ở hai đầu và âm ở giữa. Nhận xét phù hợp nhất là',
    difficulty: 'hard', cognitiveLevel: 'application', competency: 'physical_inquiry',
    practiceRole: 'mastery_holdout', representationType: 'graph', correctAnswer: 'D',
    options: ['A. Mô hình tuyến tính chắc chắn hoàn hảo.', 'B. Có thể bỏ mọi điểm ở hai đầu.', 'C. Chỉ cần tăng số chữ số hiển thị.', 'D. Mẫu phần dư có cấu trúc, gợi ý quan hệ cong hoặc thiếu biến trong mô hình.'],
    estimatedSeconds: 75,
    reasoning: ['Phần dư ngẫu nhiên quanh 0 thường phù hợp hơn với một mô hình tuyến tính.', 'Dấu phần dư đổi có quy luật cho thấy sai khác mang tính hệ thống.', 'Cần thử mô hình cong hoặc xem xét biến còn thiếu, không tự ý xóa dữ liệu.']
  },
  {
    id: 'phy10-m0r-q027', subTypeId: 'phy10-qt7-st4', outcomeIds: ['PHY10-M0-O08'],
    content: 'Các lần đo nằm rất gần nhau nhưng đều lệch xa giá trị tham chiếu. Bộ số liệu có đặc điểm nào?',
    difficulty: 'easy', cognitiveLevel: 'understanding', competency: 'physical_inquiry',
    practiceRole: 'misconception_check', representationType: 'text', correctAnswer: 'D',
    options: ['A. Không chụm và rất đúng.', 'B. Không chụm nhưng chính xác.', 'C. Vừa đúng vừa chụm.', 'D. Chụm nhưng có thể không đúng do sai lệch hệ thống.'],
    estimatedSeconds: 40,
    reasoning: ['Các giá trị gần nhau biểu thị độ chụm cao.', 'Cả cụm lệch giá trị tham chiếu cho thấy độ đúng thấp hoặc có sai số hệ thống.']
  },
  {
    id: 'phy10-m0r-q028', subTypeId: 'phy10-qt7-st4', outcomeIds: ['PHY10-M0-O08'],
    content: 'Một điểm dữ liệu cách xa xu hướng chung. Sau khi đo lại đúng quy trình, giá trị mới quay về gần xu hướng. Cách xử lí hợp lí là',
    difficulty: 'hard', cognitiveLevel: 'application', competency: 'physical_inquiry',
    practiceRole: 'mastery_holdout', representationType: 'experiment', correctAnswer: 'D',
    options: ['A. Giữ cả hai nhưng không ghi chú.', 'B. Sửa điểm cũ thành điểm mới.', 'C. Xóa điểm cũ vì nhìn không đẹp.', 'D. Giữ dữ liệu gốc trong biên bản, ghi nguyên nhân nghi ngờ và dùng tiêu chí đã nêu để quyết định phân tích.'],
    estimatedSeconds: 75,
    reasoning: ['Đo lại cung cấp bằng chứng rằng điểm cũ có thể do sai thao tác nhất thời.', 'Tính toàn vẹn dữ liệu yêu cầu giữ và chú thích bản ghi gốc.', 'Quyết định loại khỏi phân tích phải theo tiêu chí công bố, không phải vì hình thức đồ thị.']
  },
  {
    id: 'phy10-m0r-q029', subTypeId: 'phy10-qt7-st5', outcomeIds: ['PHY10-M0-O08'],
    content: 'Kim của đồng hồ analog được đọc từ góc nhìn xiên. Cải tiến trực tiếp nhất là',
    difficulty: 'medium', cognitiveLevel: 'application', competency: 'physical_inquiry',
    practiceRole: 'near_transfer', representationType: 'diagram', correctAnswer: 'D',
    options: ['A. Đọc nhanh hơn.', 'B. Ghi thêm nhiều chữ số.', 'C. Lấy giá trị lớn nhất.', 'D. Đặt mắt vuông góc mặt số tại vị trí kim hoặc dùng gương chống thị sai.'],
    estimatedSeconds: 45,
    reasoning: ['Góc nhìn xiên gây sai lệch thị sai có xu hướng hệ thống.', 'Đặt mắt vuông góc hoặc dùng gương căn chỉnh xử lí đúng nguyên nhân.']
  },
  {
    id: 'phy10-m0r-q030', subTypeId: 'phy10-qt7-st5', outcomeIds: ['PHY10-M0-O08'],
    content: 'Khi đo chu kì bằng đồng hồ bấm giây, cách nào giảm ảnh hưởng thời gian phản xạ của người đo?',
    difficulty: 'medium', cognitiveLevel: 'application', competency: 'physical_inquiry',
    practiceRole: 'retention', representationType: 'experiment', correctAnswer: 'D',
    options: ['A. Chỉ đo nửa chu kì.', 'B. Làm tròn kết quả trước khi đo.', 'C. Bấm nhiều lần nhưng mỗi lần dưới một chu kì.', 'D. Đo tổng thời gian của nhiều chu kì rồi chia, đồng thời lặp phép đo.'],
    estimatedSeconds: 50,
    reasoning: ['Sai số phản xạ gần như không tăng theo số chu kì được đo trong một lần.', 'Đo thời gian dài hơn rồi chia làm ảnh hưởng tương đối của phản xạ nhỏ đi.']
  },
  {
    id: 'phy10-m0r-q031', subTypeId: 'phy10-qt1-st1', outcomeIds: ['PHY10-M0-O01'],
    content: 'Từ quan sát “thời gian rơi tăng khi độ cao tăng”, học sinh đề xuất mô hình, suy ra dự đoán định lượng rồi làm thí nghiệm kiểm tra. Vai trò đúng của dự đoán là',
    difficulty: 'hard', cognitiveLevel: 'understanding', competency: 'physical_inquiry',
    practiceRole: 'mastery_holdout', representationType: 'text', correctAnswer: 'D',
    options: ['A. Thay thế hoàn toàn dữ liệu đo.', 'B. Chứng minh mô hình đúng trước khi đo.', 'C. Là một quan sát trực tiếp.', 'D. Là hệ quả có thể kiểm chứng, dùng để đối chiếu mô hình với dữ liệu.'],
    estimatedSeconds: 65,
    reasoning: ['Mô hình là cách biểu diễn có giả thiết; dự đoán là hệ quả cụ thể được suy ra từ mô hình.', 'Dự đoán phải có khả năng kiểm tra bằng phép đo hoặc quan sát mới.', 'Mức phù hợp với dữ liệu giúp đánh giá, sửa hoặc bác bỏ mô hình chứ không chứng minh tuyệt đối.']
  },
  {
    id: 'phy10-m0r-q032', subTypeId: 'phy10-qt3-st2', outcomeIds: ['PHY10-M0-O04'],
    content: 'Bốn lần đo cho 9,8 cm và sáu lần đo cho 10,2 cm. Giá trị trung bình của toàn bộ 10 lần đo bằng bao nhiêu cm?',
    difficulty: 'hard', cognitiveLevel: 'application', competency: 'physical_cognition',
    practiceRole: 'mastery_holdout', representationType: 'table', correctAnswer: '10.04',
    acceptedAnswers: ['10.04', '10,04'], estimatedSeconds: 65,
    reasoning: ['Giá trị 9,8 cm xuất hiện 4 lần nên đóng góp $4\\times9{,}8=39{,}2$ cm.', 'Giá trị 10,2 cm xuất hiện 6 lần nên đóng góp $6\\times10{,}2=61{,}2$ cm.', 'Trung bình là $(39{,}2+61{,}2)/10=10{,}04$ cm.']
  },
  {
    id: 'phy10-m0r-q033', subTypeId: 'phy10-qt1-st2', outcomeIds: ['PHY10-M0-O02'],
    content: 'Trước khi thay đổi cách nối một mạch điện học sinh cần làm gì?',
    difficulty: 'easy', cognitiveLevel: 'recognition', competency: 'physical_cognition',
    practiceRole: 'guided', representationType: 'experiment', correctAnswer: 'D',
    options: ['A. Chạm thử dây dẫn.', 'B. Tăng điện áp nguồn.', 'C. Làm thật nhanh khi nguồn bật.', 'D. Ngắt nguồn rồi mới thay đổi cách nối.'],
    estimatedSeconds: 30,
    reasoning: ['Thay đổi mạch khi đang có điện có thể gây chập mạch hoặc điện giật.', 'Phải ngắt nguồn và kiểm tra trạng thái an toàn trước khi thao tác.']
  },
  {
    id: 'phy10-m0r-q034', subTypeId: 'phy10-qt2-st3', outcomeIds: ['PHY10-M0-O03'],
    content: 'Đổi 100 cm² sang m². Chỉ nhập giá trị số.',
    difficulty: 'easy', cognitiveLevel: 'application', competency: 'physical_cognition',
    practiceRole: 'guided', representationType: 'equation', correctAnswer: '0.01',
    acceptedAnswers: ['0.01', '0,01'], estimatedSeconds: 35,
    reasoning: ['$1$ cm² bằng $10^{-4}$ m².', '$100\\times10^{-4}=10^{-2}=0{,}01$ m².']
  },
  {
    id: 'phy10-m0r-q035', subTypeId: 'phy10-qt2-st4', outcomeIds: ['PHY10-M0-O03'],
    content: 'Cần đo chiều dài một quyển sách khoảng 24 cm. Dụng cụ phù hợp nhất trong các lựa chọn là',
    difficulty: 'easy', cognitiveLevel: 'understanding', competency: 'physical_cognition',
    practiceRole: 'guided', representationType: 'text', correctAnswer: 'D',
    options: ['A. Thước GHĐ 10 cm, ĐCNN 1 mm.', 'B. Cân điện tử GHĐ 5 kg.', 'C. Nhiệt kế GHĐ 100°C.', 'D. Thước GHĐ 30 cm, ĐCNN 1 mm.'],
    estimatedSeconds: 35,
    reasoning: ['Dụng cụ phải đo đúng đại lượng và có giới hạn đo lớn hơn giá trị dự kiến.', 'Thước 30 cm đủ dải đo và có độ chia 1 mm phù hợp.']
  },
  {
    id: 'phy10-m0r-q036', subTypeId: 'phy10-qt5-st2', outcomeIds: ['PHY10-M0-O06'],
    content: 'Cách ghi nào đồng bộ đúng hàng thập phân giữa giá trị và sai số?',
    difficulty: 'easy', cognitiveLevel: 'understanding', competency: 'physical_cognition',
    practiceRole: 'guided', representationType: 'equation', correctAnswer: 'D',
    options: ['A. $(5{,}237\\pm0{,}1)$ cm', 'B. $(5{,}2\\pm0{,}03)$ cm', 'C. $(5\\pm0{,}25)$ cm', 'D. $(5{,}24\\pm0{,}03)$ cm'],
    estimatedSeconds: 35,
    reasoning: ['Sai số 0,03 kết thúc ở hàng phần trăm.', 'Giá trị trung bình 5,24 cũng kết thúc ở hàng phần trăm nên cách ghi đồng bộ.']
  }
];

const questionTypeIdFrom = (subTypeId: string) => subTypeId.replace(/-st\d+$/, '');

export const g10PhysicsModule0RemediationQuestions: Question[] =
  g10PhysicsModule0RemediationSeeds.map(seed => ({
    id: seed.id,
    subjectId: 'physics',
    topicId: 'phy10-t0',
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

export const g10PhysicsModule0RemediationSolutions: Solution[] =
  g10PhysicsModule0RemediationSeeds.map(seed => ({
    id: seed.id.replace('-q', '-s'),
    questionId: seed.id,
    recognition: `Dạng bù coverage ${seed.subTypeId}: xác định đúng đại lượng, quy tắc hoặc bằng chứng trước khi kết luận.`,
    detailedSteps: seed.reasoning.map((explanation, index) => ({
      order: index + 1,
      title: index === 0 ? 'Nhận dạng dữ kiện' : index === seed.reasoning.length - 1 ? 'Kết luận' : 'Lập luận',
      explanation,
      ...(index === seed.reasoning.length - 1 ? { result: seed.correctAnswer } : {})
    })),
    finalAnswer: seed.correctAnswer,
    commonMistakes: ['Áp dụng quy tắc theo từ khóa mà không kiểm tra đơn vị, biến kiểm soát hoặc phạm vi kết luận.'],
    reviewSuggestions: ['Đối chiếu phần lý thuyết của dạng nhỏ rồi tự giải thích vì sao các lựa chọn còn lại không phù hợp.']
  }));
