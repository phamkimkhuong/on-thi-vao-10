import type { Solution } from '@/types';

/** Lời giải định hướng: nhận dạng trước, thao tác sau, kết luận cuối. */
export const g10PhysicsModule0GapFillSolutions: Solution[] = [
  {
    id: 'phy10-m0-s106', questionId: 'phy10-m0-q106',
    recognition: 'Dạng xây dựng phương án thực hành mới: phải đồng thời kiểm soát đại lượng đo, lịch đo và rủi ro từ nước nóng.',
    detailedSteps: [
      { order: 1, title: 'Nhận mục tiêu đo', explanation: 'Cần theo dõi nhiệt độ của cùng một lượng nước theo thời gian, nên vị trí nhiệt kế và khoảng thời gian đọc phải nhất quán.' },
      { order: 2, title: 'Kiểm tra an toàn', explanation: 'Cốc phải chịu nhiệt, đặt ổn định và người đo không được chạm trực tiếp vào nước nóng.' }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Chỉ chú ý lấy số liệu mà bỏ qua nguy cơ bỏng.', 'Thay lượng nước hoặc vị trí nhiệt kế giữa các lần đọc.'],
    reviewSuggestions: ['Ôn thiết kế phép đo có biến kiểm soát và quy tắc an toàn nhiệt.']
  },
  {
    id: 'phy10-m0-s107', questionId: 'phy10-m0-q107',
    recognition: 'Dạng kiểm tra ảnh hưởng của một biến: chỉ góc chiếu được phép thay đổi, các yếu tố làm thay đổi độ sáng phải giữ cố định.',
    detailedSteps: [
      { order: 1, title: 'Xác định biến', explanation: 'Góc chiếu là biến độc lập; điện áp là biến phụ thuộc.' },
      { order: 2, title: 'Tạo phép so sánh công bằng', explanation: 'Giữ cùng nguồn sáng, khoảng cách và tấm pin; đo lặp ở mỗi góc để giảm ảnh hưởng dao động ngẫu nhiên.' }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Thay đồng thời góc và khoảng cách.', 'Dùng các thiết bị khác nhau cho từng góc rồi quy mọi khác biệt cho góc chiếu.'],
    reviewSuggestions: ['Ôn biến độc lập, phụ thuộc và kiểm soát.']
  },
  {
    id: 'phy10-m0-s108', questionId: 'phy10-m0-q108',
    recognition: 'Dạng phát hiện ngoại lai: tìm số tách xa cụm kết quả còn lại, chưa cần tính trung bình trước.',
    detailedSteps: [
      { order: 1, title: 'Nhìn cụm chính', explanation: 'Bốn kết quả nằm trong khoảng 11,9–12,1 s.' },
      { order: 2, title: 'Tìm điểm tách biệt', explanation: '17,8 s lớn hơn cụm chính gần 6 s nên cần được kiểm tra trước tiên.' }
    ],
    finalAnswer: 'D',
    commonMistakes: ['Chọn số lớn nhất trong mọi tình huống mà không xét độ tách khỏi cụm.', 'Tính trung bình gồm ngoại lai rồi coi kết quả trung bình là đáng tin.'],
    reviewSuggestions: ['Ôn dấu hiệu số liệu bất thường trong phép đo lặp.']
  },
  {
    id: 'phy10-m0-s109', questionId: 'phy10-m0-q109',
    recognition: 'Dạng xử lí ngoại lai có trách nhiệm: một giá trị khác biệt là tín hiệu cần điều tra, không phải giấy phép xóa dữ liệu.',
    detailedSteps: [
      { order: 1, title: 'Phát hiện', explanation: '5,43 cm lệch rõ so với cụm 4,98–5,01 cm.' },
      { order: 2, title: 'Xác minh', explanation: 'Kiểm tra ghi chép, mốc thước và thao tác; sau đó đo lại để có chứng cứ quyết định giữ, sửa hay loại.' }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Xóa mọi giá trị không thuận mắt.', 'Tự thay số liệu bằng giá trị mong muốn mà không ghi chú.'],
    reviewSuggestions: ['Ôn quy trình kiểm tra ngoại lai và tính minh bạch dữ liệu.']
  },
  {
    id: 'phy10-m0-s110', questionId: 'phy10-m0-q110',
    recognition: 'Dạng đếm chữ số có nghĩa: bỏ số 0 đứng trước chữ số khác 0; giữ số 0 nằm giữa hoặc ở cuối phần thập phân.',
    detailedSteps: [
      { order: 1, title: 'Bỏ số 0 định vị', explanation: 'Trong 0,04050, hai số 0 đầu chỉ đặt vị trí dấu phẩy.' },
      { order: 2, title: 'Đếm phần còn lại', explanation: 'Các chữ số có nghĩa là 4, 0, 5, 0 nên có bốn chữ số.' }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Đếm mọi số 0 ở đầu.', 'Bỏ số 0 tận cùng dù nó nằm sau dấu phẩy và thể hiện độ chính xác.'],
    reviewSuggestions: ['Ôn quy tắc số 0 trong chữ số có nghĩa.']
  },
  {
    id: 'phy10-m0-s111', questionId: 'phy10-m0-q111',
    recognition: 'Dạng phát hiện cách ghi sai: chữ số cuối của giá trị trung bình phải ở cùng hàng với chữ số cuối của sai số.',
    detailedSteps: [
      { order: 1, title: 'Đọc hàng của sai số', explanation: 'Sai số 0,1 s kết thúc ở hàng phần mười.' },
      { order: 2, title: 'Đồng bộ giá trị', explanation: 'Làm tròn 2,347 s đến hàng phần mười được 2,3 s.' }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Giữ toàn bộ chữ số máy tính hiển thị.', 'Làm tròn sai số nhưng không làm tròn giá trị trung bình cùng hàng.'],
    reviewSuggestions: ['Ôn cấu trúc $A=(\\bar A\\pm\\Delta A)$ và quy tắc làm tròn.']
  },
  {
    id: 'phy10-m0-s112', questionId: 'phy10-m0-q112',
    recognition: 'Dạng sai số đại lượng có lũy thừa: với $S=\\pi r^2$, sai số tỉ đối của r phải nhân với số mũ 2.',
    detailedSteps: [
      { order: 1, title: 'Tính sai số tỉ đối của bán kính', explanation: '$\\delta_r=0{,}2/10{,}0\\times100\\%=2\\%$.' },
      { order: 2, title: 'Nhân theo số mũ', explanation: '$\\delta_S\\approx2\\delta_r=2\\times2\\%=4\\%$.' }
    ],
    finalAnswer: '4',
    commonMistakes: ['Giữ nguyên 2% vì bỏ qua bình phương.', 'Bình phương 2% thay vì nhân với số mũ 2.'],
    reviewSuggestions: ['Ôn lan truyền sai số trong đại lượng có lũy thừa.']
  },
  {
    id: 'phy10-m0-s113', questionId: 'phy10-m0-q113',
    recognition: 'Dạng sai số của tích và thương: sai số tỉ đối cực đại của các thừa số và số chia được cộng lại.',
    detailedSteps: [
      { order: 1, title: 'Nhận cấu trúc', explanation: 'Q được tạo bởi một tích rồi một phép chia; dấu chia không làm sai số bị trừ.' },
      { order: 2, title: 'Cộng phần trăm', explanation: '$\\delta_Q=1\\%+2\\%+3\\%=6\\%$.' }
    ],
    finalAnswer: 'D',
    commonMistakes: ['Lấy 1% + 2% − 3% vì công thức có phép chia.', 'Cộng sai số tuyệt đối của các đại lượng khác đơn vị.'],
    reviewSuggestions: ['Ôn quy tắc sai số tỉ đối của tích và thương.']
  },
  {
    id: 'phy10-m0-s114', questionId: 'phy10-m0-q114',
    recognition: 'Dạng xác định biến từ sơ đồ: đại lượng người làm chủ động thay là biến độc lập; đại lượng thiết bị ghi lại là biến phụ thuộc.',
    detailedSteps: [
      { order: 1, title: 'Tìm đại lượng được thay', explanation: 'Nhóm thay góc nghiêng $\\theta$ của máng.' },
      { order: 2, title: 'Tìm đại lượng đáp ứng', explanation: 'Cổng quang ghi thời gian xe chuyển động, nên thời gian là biến phụ thuộc.' }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Chọn cổng quang là biến vì nó xuất hiện nổi bật trên hình.', 'Đảo biến độc lập và phụ thuộc.'],
    reviewSuggestions: ['Ôn cách đọc sơ đồ thí nghiệm và xác định biến.']
  },
  {
    id: 'phy10-m0-s115', questionId: 'phy10-m0-q115',
    recognition: 'Dạng thiết kế quy trình đo: phải có dữ kiện khoảng cách, thời gian, phép lặp và công thức xử lí.',
    detailedSteps: [
      { order: 1, title: 'Thu hai đại lượng cần thiết', explanation: 'Tốc độ trung bình cần quãng đường s và thời gian t trên đúng đoạn đó.' },
      { order: 2, title: 'Tăng độ tin cậy và xử lí', explanation: 'Lặp phép đo trong cùng điều kiện rồi tính $v=s/t$; không chọn riêng kết quả lớn nhất.' }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Chỉ đo thời gian nhưng không biết quãng đường.', 'Mỗi lần đẩy xe khác nhau rồi so sánh trực tiếp.'],
    reviewSuggestions: ['Ôn cấu trúc một quy trình đo đại lượng gián tiếp.']
  },
  {
    id: 'phy10-m0-s116', questionId: 'phy10-m0-q116',
    recognition: 'Dạng đọc đồ thị quan hệ: xét hình dạng và giao điểm trong miền dữ liệu, không ngoại suy thành khẳng định tuyệt đối.',
    detailedSteps: [
      { order: 1, title: 'Nhận dạng xu hướng', explanation: 'Các điểm $T^2$ theo l nằm gần một đường thẳng tăng và đi qua gần gốc.' },
      { order: 2, title: 'Kết luận đúng phạm vi', explanation: 'Dữ liệu hỗ trợ $T^2$ xấp xỉ tỉ lệ thuận với l trong khoảng đã đo, không chứng minh cho mọi l.' }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Chỉ thấy hai đại lượng cùng tăng rồi kết luận mọi quan hệ đều tỉ lệ thuận.', 'Ngoại suy vô hạn ra ngoài miền đo.'],
    reviewSuggestions: ['Ôn dấu hiệu đồ thị tỉ lệ thuận và giới hạn của kết luận thực nghiệm.']
  },
  {
    id: 'phy10-m0-s117', questionId: 'phy10-m0-q117',
    recognition: 'Dạng phân biệt độ chụm và độ đúng: độ chụm xét độ phân tán; độ đúng xét khoảng cách tới giá trị chuẩn.',
    detailedSteps: [
      { order: 1, title: 'Xét độ chụm', explanation: 'Q cho ba số giống nhau nên rất chụm; P cũng có độ phân tán nhỏ.' },
      { order: 2, title: 'Xét độ đúng', explanation: 'P nằm quanh 50,00 g; Q luôn lệch +0,40 g nên có dấu hiệu sai số hệ thống.' }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Đồng nhất “lặp lại giống nhau” với “đúng giá trị thật”.', 'Chỉ nhìn một lần đo mà bỏ qua giá trị chuẩn.'],
    reviewSuggestions: ['Ôn độ chụm, độ đúng và sai số hệ thống.']
  },
  {
    id: 'phy10-m0-s118', questionId: 'phy10-m0-q118',
    recognition: 'Dạng tìm nguồn sai số từ sơ đồ: mắt nhìn xiên gây thị sai; dải gương chỉ phát huy tác dụng khi kim che ảnh của nó.',
    detailedSteps: [
      { order: 1, title: 'Sửa góc nhìn', explanation: 'Di chuyển mắt đến vị trí vuông góc sao cho kim thật trùng với ảnh kim trong gương.' },
      { order: 2, title: 'Kiểm tra sai lệch cố định', explanation: 'Kiểm tra điểm không trước khi đọc để không mang thêm độ lệch hệ thống vào mọi số đo.' }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Ghi thêm chữ số để che một thao tác đọc sai.', 'Cho rằng có dải gương thì nhìn ở góc nào cũng đúng.', 'Bỏ qua lệch điểm không.'],
    reviewSuggestions: ['Ôn sai số thị sai, điểm không và quy trình đọc đồng hồ kim.']
  }
];
