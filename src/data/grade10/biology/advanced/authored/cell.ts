import { bioProblem, biologyTable } from './helpers';

const topicId = 'bio10-adv-cell';

export const cellProblems = [
  bioProblem(topicId, {
    content: 'Tế bào tuyến được cho một xung amino acid phóng xạ ngắn rồi chuyển sang môi trường không đánh dấu. Trật tự vị trí tín hiệu phù hợp nhất với protein tiết là gì?',
    correct: 'Lưới nội chất hạt → túi vận chuyển → Golgi → túi tiết → ngoài tế bào.',
    distractors: ['Nhân → ti thể → lysosome → ngoài tế bào.', 'Golgi → ribosome tự do → lục lạp → màng.', 'Bào tương → nhân con → peroxisome → thành tế bào.'],
    insight: 'Thí nghiệm xung–đuổi theo dõi dòng di chuyển của protein mới tổng hợp theo thời gian.',
    evidence: 'Protein tiết được tạo trên ribosome gắn lưới nội chất và tín hiệu phải xuất hiện sớm ở nơi tổng hợp, muộn hơn ở nơi chế biến–đóng gói.',
    mechanism: 'Protein vào lòng lưới nội chất, được vận chuyển bằng túi tới Golgi rồi xuất bào khi túi tiết hòa màng.',
    reasoning: ['Nhân và ti thể không phải tuyến đường tiết protein thông thường.', 'Ribosome tự do không phải điểm đến sau Golgi.'],
    distractorReasons: ['ghép các bào quan không tạo thành tuyến bài tiết.', 'đảo dòng vận chuyển và đưa lục lạp vào tế bào tuyến.', 'dùng các vị trí không liên hệ với tiết protein.'],
    tags: ['hệ thống nội màng', 'xung–đuổi']
  }),
  bioProblem(topicId, {
    content: 'Một chất làm mất chênh lệch proton qua màng trong ti thể nhưng không trực tiếp chặn chuỗi truyền electron. Kết quả tức thời hợp lí nhất là gì?',
    correct: 'Tổng hợp ATP giảm mạnh, trong khi tiêu thụ oxygen có thể vẫn tiếp tục hoặc tăng do chuỗi electron hoạt động nhưng không ghép hiệu quả.',
    distractors: ['ATP tăng vì proton không còn bị giữ ngoài chất nền.', 'Chuỗi electron dừng tuyệt đối ngay lập tức dù vẫn có chất cho electron.', 'Ti thể chuyển thành lysosome để bù năng lượng.'],
    insight: 'Phải phân biệt dòng electron với sự ghép dòng proton vào ATP synthase.',
    evidence: 'Đề nói chuỗi electron không bị chặn trực tiếp nhưng gradient proton bị triệt tiêu.',
    mechanism: 'ATP synthase cần lực điện hóa proton; khi mất ghép, năng lượng oxy hóa bị tỏa thành nhiệt thay vì tích vào ATP.',
    reasoning: ['Oxygen vẫn có thể nhận electron ở cuối chuỗi.', 'Bào quan không đổi loại để đáp ứng một chất phá ghép.'],
    distractorReasons: ['đảo vai trò của gradient proton.', 'đồng nhất mất ghép với ức chế truyền electron.', 'mô tả chuyển đổi bào quan không có cơ sở.'],
    tags: ['ti thể', 'cấu trúc–chức năng']
  }),
  bioProblem(topicId, {
    content: 'Hai dòng tế bào lá có cùng lượng chlorophyll. Dòng M có hệ grana phát triển hơn nhưng enzyme cố định CO₂ trong stroma bị giảm mạnh. Dự đoán nào hợp lí?',
    correct: 'M vẫn có thể tạo ATP/NADPH ở màng thylakoid nhưng khả năng dùng chúng để tổng hợp chất hữu cơ bị hạn chế.',
    distractors: ['M không hấp thụ được ánh sáng vì mọi chlorophyll nằm trong stroma.', 'Cố định CO₂ xảy ra trong grana nên tăng grana sẽ bù hoàn toàn.', 'Lục lạp chỉ cần enzyme stroma, không cần màng thylakoid.'],
    insight: 'Quang hợp có hai nhóm phản ứng ở hai khoang chức năng nhưng phụ thuộc lẫn nhau.',
    evidence: 'Chlorophyll và grana còn, trong khi enzyme stroma bị giảm.',
    mechanism: 'Màng thylakoid thực hiện phản ứng sáng; stroma chứa chu trình dùng ATP/NADPH để cố định carbon.',
    reasoning: ['Sản phẩm năng lượng có thể tích lại hoặc phản hồi làm chậm phản ứng sáng.', 'Tăng diện tích màng không thay thế enzyme mất ở stroma.'],
    distractorReasons: ['đặt sai vị trí chlorophyll.', 'đặt sai vị trí cố định CO₂ và dùng “bù hoàn toàn”.', 'phủ nhận vai trò của phản ứng sáng.'],
    tags: ['lục lạp', 'phân khoang tế bào']
  }),
  bioProblem(topicId, {
    content: 'Một enzyme thủy phân lysosome được tổng hợp bình thường nhưng thiếu tín hiệu phân loại, nên bị tiết ra ngoài. Bào quan nào đầu tiên có chức năng xử lí nhưng không gắn đúng “địa chỉ” cho enzyme?',
    correct: 'Bộ máy Golgi.',
    distractors: ['Ribosome.', 'Trung thể.', 'Không bào co bóp.'],
    insight: 'Protein được tổng hợp ở ribosome nhưng phân loại đích trong hệ nội màng chủ yếu diễn ra ở Golgi.',
    evidence: 'Enzyme đã được tổng hợp và đi vào đường tiết, nhưng lỗi nằm ở tín hiệu phân loại tới lysosome.',
    mechanism: 'Golgi biến đổi, nhận diện nhãn định vị và đóng gói protein vào túi đi tới đích khác nhau.',
    reasoning: ['Ribosome tạo chuỗi nhưng không đảm nhiệm toàn bộ phân loại túi.', 'Trung thể liên quan tổ chức vi ống.'],
    distractorReasons: ['nhầm nơi tổng hợp với nơi phân loại.', 'chọn bào quan phân bào không xử lí protein tiết.', 'dùng bào quan chuyên hóa không thuộc tuyến này.'],
    tags: ['Golgi', 'định vị protein']
  }),
  bioProblem(topicId, {
    content: 'Kháng sinh K gắn vào ribosome 70S và không gắn ribosome 80S. Tại sao K có thể ức chế vi khuẩn mạnh hơn tế bào người nhưng vẫn có nguy cơ ảnh hưởng ti thể?',
    correct: 'Ribosome vi khuẩn là 70S; ribosome bào tương người là 80S, còn ribosome ti thể có nguồn gốc tiến hóa gần vi khuẩn.',
    distractors: ['Tế bào người hoàn toàn không có ribosome.', 'Ti thể nằm ngoài tế bào nên tiếp xúc trực tiếp với kháng sinh.', 'Ribosome 70S chỉ có ở virus.'],
    insight: 'Tính chọn lọc không tuyệt đối vì bào quan nội cộng sinh giữ một số đặc điểm kiểu vi khuẩn.',
    evidence: 'Đích phân tử của K được xác định bằng loại ribosome, không phải bằng tên loài.',
    mechanism: 'Vi khuẩn và ribosome bào quan có các thành phần tương đồng đủ để một số thuốc nhận diện chéo.',
    reasoning: ['Tế bào người dùng ribosome 80S để tổng hợp protein bào tương.', 'Virus không sở hữu ribosome riêng.'],
    distractorReasons: ['phủ nhận bộ máy tổng hợp protein của tế bào người.', 'đặt ti thể sai vị trí.', 'gán ribosome cho virus.'],
    tags: ['tế bào nhân sơ', 'thuyết nội cộng sinh']
  }),
  bioProblem(topicId, {
    content: 'Kính hiển vi A phóng đại 1.000× nhưng độ phân giải 0,25 µm; kính B phóng đại 600× nhưng độ phân giải 0,12 µm. Muốn phân biệt hai cấu trúc cách nhau 0,18 µm, chọn phương án nào?',
    correct: 'Kính B, vì độ phân giải 0,12 µm nhỏ hơn khoảng cách 0,18 µm.',
    distractors: ['Kính A, vì độ phóng đại luôn quyết định khả năng phân biệt.', 'Cả hai đều được vì đều phóng đại trên 500×.', 'Không kính nào vì 0,18 lớn hơn 0,12.'],
    insight: 'Phóng đại làm ảnh lớn hơn; độ phân giải mới quyết định hai điểm gần nhau có tách được không.',
    evidence: 'A chỉ tách các điểm cách ít nhất khoảng 0,25 µm, còn B đạt 0,12 µm.',
    mechanism: 'Hai cấu trúc cách 0,18 µm nằm dưới giới hạn của A nhưng trên giới hạn của B.',
    reasoning: ['Giá trị độ phân giải càng nhỏ thì khả năng phân biệt càng cao.', 'Phóng đại rỗng không tạo thêm chi tiết.'],
    distractorReasons: ['nhầm phóng đại với phân giải.', 'dùng ngưỡng phóng đại không liên quan.', 'đảo điều kiện so sánh khoảng cách và giới hạn.'],
    tags: ['kính hiển vi', 'độ phân giải']
  }),
  bioProblem(topicId, {
    content: 'Ba tế bào hình lập phương có cạnh lần lượt 1, 2 và 4 đơn vị. Tế bào nào có tỉ lệ diện tích bề mặt/thể tích lớn nhất và vì sao điều đó quan trọng?',
    correct: 'Tế bào cạnh 1; tỉ lệ lớn giúp trao đổi vật chất với môi trường hiệu quả hơn trên mỗi đơn vị thể tích.',
    distractors: ['Tế bào cạnh 4; thể tích lớn luôn làm trao đổi nhanh hơn.', 'Cả ba bằng nhau vì đều là hình lập phương.', 'Tế bào cạnh 2; tỉ lệ không liên quan vận chuyển qua màng.'],
    insight: 'Với khối lập phương, diện tích tăng theo bình phương còn thể tích tăng theo lập phương kích thước.',
    evidence: 'Tỉ lệ S/V = 6/a, lần lượt là 6, 3 và 1,5.',
    mechanism: 'Nhu cầu chuyển hóa thường gắn với thể tích, còn bề mặt màng là nơi trao đổi; kích thước lớn tạo bất lợi tương đối.',
    reasoning: ['Tế bào lớn có thể bù bằng gấp nếp màng hoặc hình dạng kéo dài.', 'Hình dạng giống nhau không làm tỉ lệ độc lập kích thước.'],
    distractorReasons: ['đồng nhất tổng bề mặt lớn với tỉ lệ lớn.', 'bỏ quan hệ lũy thừa khác nhau.', 'phủ nhận ý nghĩa sinh học của bề mặt màng.'],
    tags: ['kích thước tế bào', 'tỉ lệ S/V'],
    stimulus: biologyTable('bio10-adv-cell-07', 'Hình học của ba tế bào', 'Các tế bào được mô hình là khối lập phương.', 'Kích thước mô hình', [{ key: 'cell', label: 'Tế bào' }, { key: 'edge', label: 'Cạnh' }, { key: 'surface', label: 'Diện tích' }, { key: 'volume', label: 'Thể tích' }], [{ cell: 'P', edge: 1, surface: 6, volume: 1 }, { cell: 'Q', edge: 2, surface: 24, volume: 8 }, { cell: 'R', edge: 4, surface: 96, volume: 64 }])
  }),
  bioProblem(topicId, {
    content: 'Hồng cầu trưởng thành của người không có nhân và ti thể. Hệ quả chức năng trực tiếp nào phù hợp nhất?',
    correct: 'Dành nhiều không gian cho hemoglobin và không tiêu thụ oxygen chuyên chở bằng hô hấp ti thể, nhưng khả năng sửa chữa–tổng hợp mới bị hạn chế.',
    distractors: ['Không thể tạo bất kỳ ATP nào vì ATP chỉ được tạo trong ti thể.', 'Có thể phân chia liên tục vì không bị nhân kiểm soát.', 'Có thể tổng hợp nhiều protein hơn do không có nhân cản trở.'],
    insight: 'Mất bào quan tạo lợi thế chuyên hóa đồng thời đánh đổi khả năng duy trì lâu dài.',
    evidence: 'Không ti thể ngăn hô hấp hiếu khí ti thể; không nhân làm mất bộ gene và phiên mã mới.',
    mechanism: 'Hồng cầu vẫn tạo ATP bằng đường phân trong bào tương nhưng không thể tổng hợp hệ protein đầy đủ hoặc phân chia.',
    reasoning: ['Cấu trúc lõm hai mặt còn tăng diện tích trao đổi khí.', 'Chuyên hóa cao thường đi kèm tuổi thọ hữu hạn.'],
    distractorReasons: ['bỏ con đường đường phân.', 'coi mất nhân là mất kiểm soát nhưng quên không có DNA để phân chia.', 'đảo tác động của việc mất bộ máy di truyền.'],
    tags: ['tế bào chuyên hóa', 'hồng cầu']
  }),
  bioProblem(topicId, {
    content: 'So với tế bào cơ, đại thực bào thường có nhiều lysosome hơn. Giải thích cấu trúc–chức năng nào đúng nhất?',
    correct: 'Đại thực bào thường xuyên nhập bào tác nhân và cần nhiều khoang enzyme acid để phân giải vật chất đã nuốt.',
    distractors: ['Lysosome tạo lực co cơ nên đại thực bào cần nhiều để bò.', 'Lysosome là nơi tổng hợp mọi protein kháng thể.', 'Lysosome chứa DNA điều khiển thực bào.'],
    insight: 'Số lượng bào quan phản ánh nhu cầu chức năng nổi trội của loại tế bào.',
    evidence: 'Đại thực bào chuyên thực bào và xử lí vật chất ngoại lai.',
    mechanism: 'Phagosome hợp với lysosome, tạo môi trường giàu enzyme thủy phân để tiêu hóa nội dung.',
    reasoning: ['Co chuyển động phụ thuộc bộ xương tế bào và protein vận động.', 'Tổng hợp protein diễn ra ở ribosome/ER, không trong lysosome.'],
    distractorReasons: ['gán chức năng của khung xương tế bào cho lysosome.', 'gán chức năng ribosome và ER cho lysosome.', 'gán vật liệu di truyền điều khiển cho bào quan tiêu hóa.'],
    tags: ['lysosome', 'tế bào chuyên hóa']
  }),
  bioProblem(topicId, {
    content: 'Protein A hoạt động trong bào tương; protein B được tiết ra ngoài. Vị trí dịch mã ban đầu phù hợp nhất là gì?',
    correct: 'Cả hai bắt đầu trên ribosome bào tương; tín hiệu của B làm ribosome được đưa tới lưới nội chất hạt trong khi dịch mã tiếp tục.',
    distractors: ['A được dịch mã trong nhân, B trong Golgi.', 'A chỉ được tạo ở ribosome gắn ER, B ở ribosome tự do.', 'B được tổng hợp hoàn chỉnh ngoài tế bào rồi nhập lại.'],
    insight: 'Ribosome tự do và gắn ER không phải hai loại cố định; tín hiệu trên chuỗi mới sinh quyết định đích.',
    evidence: 'A là protein bào tương còn B đi vào đường tiết.',
    mechanism: 'Peptide tín hiệu của B được nhận diện và đưa phức dịch mã tới màng ER; A không có tín hiệu nên hoàn tất trong bào tương.',
    reasoning: ['Nhân phiên mã RNA nhưng không dịch mã protein.', 'Golgi chế biến chứ không có ribosome dịch mã.'],
    distractorReasons: ['đặt dịch mã vào hai bào quan không thực hiện chức năng đó.', 'đảo tuyến ribosome của protein.', 'bịa quá trình tổng hợp ngoài tế bào.'],
    tags: ['ribosome', 'định vị protein']
  }),
  bioProblem(topicId, {
    content: 'Thuốc làm mất ổn định vi ống khiến túi tiết hình thành bình thường gần Golgi nhưng tích tụ trong bào tương và ít tới màng. Kết luận nào phù hợp?',
    correct: 'Vi ống và protein vận động cần cho vận chuyển túi đường dài từ Golgi tới vùng màng đích.',
    distractors: ['Vi ống trực tiếp tổng hợp lipid của túi.', 'Golgi ngừng biến đổi protein vì vi ống là enzyme.', 'Túi tiết chỉ di chuyển bằng khuếch tán tự do nên vi ống không liên quan.'],
    insight: 'Túi đã hình thành nhưng không phân phối được, nên lỗi nằm sau đóng gói và trước hòa màng.',
    evidence: 'Số túi gần Golgi tăng, trong khi lượng tới màng giảm.',
    mechanism: 'Protein motor di chuyển trên vi ống, tạo vận chuyển có hướng trong không gian tế bào lớn và nhớt.',
    reasoning: ['Vi ống là cấu trúc, không phải enzyme tổng hợp lipid.', 'Khuếch tán đơn thuần không giải thích vận chuyển có hướng hiệu quả.'],
    distractorReasons: ['gán chức năng enzyme tổng hợp cho bộ xương tế bào.', 'đồng nhất vi ống với enzyme của Golgi.', 'phủ nhận bằng chứng tích tụ khi vi ống mất ổn định.'],
    tags: ['bộ xương tế bào', 'vận chuyển túi']
  }),
  bioProblem(topicId, {
    content: 'Sau ly tâm phân đoạn, enzyme chỉ thị succinate dehydrogenase tập trung ở phân đoạn P; catalase tập trung ở Q; acid phosphatase tập trung ở R. Ghép bào quan nào đúng?',
    correct: 'P–ti thể, Q–peroxisome, R–lysosome.',
    distractors: ['P–Golgi, Q–nhân, R–ribosome.', 'P–lysosome, Q–ti thể, R–lục lạp.', 'P–ribosome, Q–Golgi, R–trung thể.'],
    insight: 'Enzyme chỉ thị cho phép nhận diện phân đoạn bào quan theo chức năng đặc trưng.',
    evidence: 'Succinate dehydrogenase thuộc màng trong ti thể; catalase phân giải peroxide trong peroxisome; acid phosphatase hoạt động ở lysosome.',
    mechanism: 'Ly tâm tách phần tử theo kích thước–khối lượng riêng, sau đó enzyme chỉ thị xác định danh tính sinh hóa.',
    reasoning: ['Không thể chỉ dùng tốc độ lắng nếu các bào quan chồng lấp.', 'Bộ ba enzyme cung cấp ba dấu chức năng độc lập.'],
    distractorReasons: ['ghép toàn bộ enzyme với bào quan không chứa chúng đặc trưng.', 'đổi vị trí các enzyme chỉ thị.', 'gán enzyme chuyển hóa cho cấu trúc không phù hợp.'],
    tags: ['phân đoạn tế bào', 'enzyme chỉ thị'],
    stimulus: biologyTable('bio10-adv-cell-12', 'Phân đoạn bào quan', 'Hoạt tính được chuẩn hóa theo tổng mẫu.', 'Phân bố enzyme', [{ key: 'fraction', label: 'Phân đoạn' }, { key: 'sdh', label: 'Succinate dehydrogenase' }, { key: 'cat', label: 'Catalase' }, { key: 'acid', label: 'Acid phosphatase' }], [{ fraction: 'P', sdh: 'Cao', cat: 'Thấp', acid: 'Thấp' }, { fraction: 'Q', sdh: 'Thấp', cat: 'Cao', acid: 'Thấp' }, { fraction: 'R', sdh: 'Thấp', cat: 'Thấp', acid: 'Cao' }])
  }),
  bioProblem(topicId, {
    content: 'Tế bào biểu bì hành được đặt trong dung dịch ưu trương. Khoảng giữa thành tế bào và khối nguyên sinh tăng dần. Cấu trúc nào quyết định thành vẫn giữ hình dạng ngoài khi màng sinh chất co vào?',
    correct: 'Thành tế bào cellulose có độ bền cơ học, trong khi nước rời không bào và tế bào chất qua màng.',
    distractors: ['Lysosome bơm thành tế bào ra ngoài.', 'Nhân hút nước làm màng tách khỏi thành.', 'Ribosome tạo áp suất ngăn thành co.'],
    insight: 'Co nguyên sinh tách màng khỏi thành nhưng không đồng nghĩa thành tế bào co theo thể tích chất nguyên sinh.',
    evidence: 'Quan sát mô tả đường bao ngoài giữ tương đối ổn định còn khối nguyên sinh thu nhỏ.',
    mechanism: 'Thành xốp nhưng cứng, còn màng sinh chất bán thấm bao quanh phần sống mất nước theo gradient thế nước.',
    reasoning: ['Không bào góp phần lớn thể tích tế bào thực vật.', 'Nhân và ribosome không điều khiển cơ học tức thời của thành.'],
    distractorReasons: ['gán xuất bào thành tế bào cho lysosome.', 'đảo chiều dòng nước trong môi trường ưu trương.', 'gán áp suất cơ học cho ribosome.'],
    tags: ['thành tế bào', 'co nguyên sinh']
  }),
  bioProblem(topicId, {
    content: 'Nhân từ tế bào đã biệt hóa được chuyển vào tế bào trứng đã bỏ nhân và có thể tạo phôi trong một số trường hợp. Điều này hỗ trợ kết luận nào?',
    correct: 'Nhân của nhiều tế bào biệt hóa vẫn giữ phần lớn thông tin di truyền; trạng thái biểu hiện gene có thể được tái lập bởi bào tương trứng.',
    distractors: ['Tế bào biệt hóa mất toàn bộ gene không dùng.', 'Bào tương trứng tự tạo một bộ gene mới không cần nhân.', 'Mọi lần chuyển nhân đều thành công và không có rủi ro.'],
    insight: 'Biệt hóa chủ yếu là khác biệt biểu hiện gene, không nhất thiết do xóa gene khỏi bộ genome.',
    evidence: 'Nhân đã biệt hóa vẫn có thể chỉ đạo phát triển khi đặt vào môi trường bào tương thích hợp.',
    mechanism: 'Các yếu tố trong trứng tái lập chương trình phiên mã và trạng thái nhiễm sắc ở mức độ nhất định.',
    reasoning: ['Tỉ lệ thành công thấp vẫn đủ bác bỏ mệnh đề “mất toàn bộ thông tin”.', 'Kết quả không chứng minh quy trình luôn an toàn.'],
    distractorReasons: ['mâu thuẫn với khả năng tạo phôi.', 'phủ nhận vai trò bắt buộc của DNA nhân.', 'khái quát vượt dữ liệu bằng từ tuyệt đối.'],
    tags: ['nhân tế bào', 'biệt hóa']
  }),
  bioProblem(topicId, {
    content: 'Dòng tế bào thiếu catalase tích lũy hydrogen peroxide và tổn thương lipid tăng. Bào quan bị ảnh hưởng trực tiếp nhất là gì?',
    correct: 'Peroxisome, nơi catalase thường phân giải hydrogen peroxide sinh ra trong các phản ứng oxy hóa.',
    distractors: ['Ribosome, vì catalase cắt RNA.', 'Trung thể, vì catalase tạo thoi phân bào.', 'Nhân con, vì catalase tổng hợp rRNA.'],
    insight: 'Tên enzyme và cơ chất gợi chức năng giải độc đặc trưng của peroxisome.',
    evidence: 'Thiếu catalase đi kèm tích lũy H₂O₂, một chất oxy hóa gây tổn thương màng.',
    mechanism: 'Catalase chuyển H₂O₂ thành nước và oxygen, hạn chế stress oxy hóa trong và quanh peroxisome.',
    reasoning: ['Ribosome tổng hợp protein nhưng không phải nơi phản ứng catalase đặc trưng.', 'Trung thể và nhân con có chức năng khác.'],
    distractorReasons: ['gán cơ chất RNA sai cho catalase.', 'gán chức năng thoi phân bào cho enzyme giải độc.', 'gán tổng hợp rRNA cho catalase.'],
    tags: ['peroxisome', 'stress oxy hóa']
  }),
  bioProblem(topicId, {
    content: 'Một đột biến làm các túi từ ER vẫn đến Golgi, nhưng protein màng sau đó đi nhầm tới lysosome thay vì màng sinh chất. Bước nào bị lỗi phù hợp nhất?',
    correct: 'Phân loại và đóng gói ở mạng Golgi phía trans.',
    distractors: ['Phiên mã trong nhân.', 'Dịch mã bắt đầu trên ribosome.', 'Nhân đôi DNA ở pha S.'],
    insight: 'Protein đã qua ER và tới Golgi, nên các bước trước đó còn hoạt động; lỗi nằm ở chọn đích sau Golgi.',
    evidence: 'Đích cuối bị đổi nhưng tuyến ER→Golgi không bị chặn.',
    mechanism: 'Mạng trans-Golgi nhận tín hiệu định vị và đóng protein vào túi tới màng, lysosome hoặc đích khác.',
    reasoning: ['Nếu phiên mã/dịch mã hỏng, protein khó xuất hiện đầy đủ ở Golgi.', 'Nhân đôi DNA không quyết định đích của túi riêng lẻ.'],
    distractorReasons: ['chọn bước đã hoàn tất theo dữ kiện.', 'chọn bước tạo chuỗi chứ không phân loại đích.', 'chọn quá trình không liên quan trực tiếp.'],
    tags: ['Golgi', 'tuyến bài tiết'],
    stimulus: biologyTable('bio10-adv-cell-16', 'Phân bố protein đánh dấu', 'Tỉ lệ tín hiệu sau 60 phút.', 'Vị trí protein', [{ key: 'line', label: 'Dòng' }, { key: 'er', label: 'ER', unit: '%' }, { key: 'golgi', label: 'Golgi', unit: '%' }, { key: 'membrane', label: 'Màng', unit: '%' }, { key: 'lysosome', label: 'Lysosome', unit: '%' }], [{ line: 'Bình thường', er: 8, golgi: 12, membrane: 71, lysosome: 9 }, { line: 'Đột biến', er: 9, golgi: 14, membrane: 11, lysosome: 66 }])
  }),
  bioProblem(topicId, {
    content: 'Ba loại tế bào có tỉ lệ thể tích bào quan như bảng. Tế bào nào phù hợp nhất với chức năng co cơ bền bỉ?',
    correct: 'Tế bào B vì có tỉ lệ ti thể cao nhất, phù hợp nhu cầu ATP lâu dài.',
    distractors: ['Tế bào A vì Golgi cao nhất luôn đồng nghĩa co mạnh.', 'Tế bào C vì lysosome cao nhất tạo ATP.', 'Không thể suy luận gì từ thành phần bào quan.'],
    insight: 'Sự phát triển tương đối của bào quan phản ánh nhu cầu chuyển hóa và bài tiết nổi trội.',
    evidence: 'B có 28% ti thể, vượt A và C; chức năng co bền cần nguồn ATP hiếu khí lớn.',
    mechanism: 'Màng trong ti thể chứa hệ tạo gradient proton và ATP synthase, cung cấp ATP cho protein co.',
    reasoning: ['Golgi cao gợi hoạt động chế biến–tiết.', 'Lysosome cao gợi tiêu hóa nội bào, không phải nguồn ATP chính.'],
    distractorReasons: ['gán Golgi cho co cơ.', 'gán tạo ATP cho lysosome.', 'bỏ mối liên hệ cấu trúc–chức năng rõ trong bảng.'],
    tags: ['tế bào chuyên hóa', 'ti thể'],
    stimulus: biologyTable('bio10-adv-cell-17', 'Tỉ lệ bào quan', 'Đơn vị phần trăm thể tích tế bào.', 'Thành phần tương đối', [{ key: 'cell', label: 'Tế bào' }, { key: 'mito', label: 'Ti thể', unit: '%' }, { key: 'golgi', label: 'Golgi', unit: '%' }, { key: 'lyso', label: 'Lysosome', unit: '%' }], [{ cell: 'A', mito: 8, golgi: 18, lyso: 4 }, { cell: 'B', mito: 28, golgi: 5, lyso: 3 }, { cell: 'C', mito: 7, golgi: 6, lyso: 20 }])
  }),
  bioProblem(topicId, {
    content: 'Lysozyme làm vỡ nhanh vi khuẩn Gram dương trong dung dịch nhược trương nhưng ít làm vỡ tế bào động vật. Giải thích trực tiếp nhất là gì?',
    correct: 'Lysozyme thủy phân peptidoglycan của thành vi khuẩn; tế bào động vật không có peptidoglycan.',
    distractors: ['Lysozyme phá mọi màng phospholipid nhưng tế bào động vật không có màng.', 'Vi khuẩn vỡ vì có nhân lớn hút nước.', 'Tế bào động vật có thành cellulose bảo vệ.'],
    insight: 'Tính chọn lọc đến từ cơ chất đặc hiệu của enzyme và khác biệt thành tế bào.',
    evidence: 'Hiệu ứng mạnh ở vi khuẩn Gram dương vốn có lớp peptidoglycan dày, trong khi động vật thiếu thành tế bào.',
    mechanism: 'Khi lưới peptidoglycan bị cắt, màng vi khuẩn không chống được áp lực thẩm thấu trong môi trường nhược trương.',
    reasoning: ['Màng phospholipid có ở cả vi khuẩn và động vật.', 'Tế bào động vật không có thành cellulose.'],
    distractorReasons: ['mô tả sai đích enzyme và cấu trúc tế bào động vật.', 'gán nhân hoàn chỉnh cho vi khuẩn.', 'gán thành thực vật cho tế bào động vật.'],
    tags: ['tế bào nhân sơ', 'thành tế bào']
  })
];
