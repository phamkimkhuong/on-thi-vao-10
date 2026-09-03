import { bioProblem, biologyTable } from './helpers';

const topicId = 'bio10-adv-transport';

export const transportProblems = [
  bioProblem(topicId, {
    content: 'Hồng cầu được đặt trong ba dung dịch, thể tích tương đối sau 10 phút được cho trong bảng. Dung dịch nào ưu trương nhất so với tế bào?',
    correct: 'Dung dịch R.',
    distractors: ['Dung dịch P.', 'Dung dịch Q.', 'Cả ba đẳng trương.'],
    insight: 'Hồng cầu giảm thể tích nhiều nhất khi nước rời tế bào vào dung dịch ưu trương.',
    evidence: 'R làm thể tích còn 72%, thấp hơn P và Q; P gây trương còn Q gần như giữ nguyên.',
    mechanism: 'Nước thẩm thấu từ nơi có thế nước cao hơn về nơi có thế nước thấp hơn qua màng.',
    reasoning: ['P có xu hướng nhược trương vì tế bào tăng thể tích.', 'Q gần đẳng trương trong thời gian đo.'],
    distractorReasons: ['chọn dung dịch làm nước đi vào tế bào.', 'chọn dung dịch gần như không đổi thể tích.', 'bỏ khác biệt rõ giữa các thể tích.'],
    tags: ['thẩm thấu', 'đọc bảng'],
    stimulus: biologyTable('bio10-adv-transport-01', 'Thể tích hồng cầu', 'Thể tích ban đầu được chuẩn hóa bằng 100%.', 'Thể tích sau 10 phút', [{ key: 'solution', label: 'Dung dịch' }, { key: 'volume', label: 'Thể tích', unit: '%' }], [{ solution: 'P', volume: 128 }, { solution: 'Q', volume: 99 }, { solution: 'R', volume: 72 }])
  }),
  bioProblem(topicId, {
    content: 'Hai dòng tế bào có cùng màng lipid, nhưng dòng A biểu hiện nhiều aquaporin hơn. Khi chuyển nhanh sang môi trường nhược trương, khác biệt ban đầu nào hợp lí nhất?',
    correct: 'A tăng thể tích nhanh hơn, nhưng hướng nước vẫn do chênh lệch thế nước quyết định.',
    distractors: ['Aquaporin bơm nước ngược gradient bằng ATP.', 'A không bao giờ vỡ vì aquaporin đóng khi nước vào.', 'Dòng thiếu aquaporin hoàn toàn không trao đổi nước.'],
    insight: 'Kênh làm tăng tốc độ đạt cân bằng, không đảo chiều nhiệt động của dòng nước.',
    evidence: 'Hai dòng chỉ khác số aquaporin và cùng chịu một gradient thẩm thấu.',
    mechanism: 'Aquaporin cung cấp đường thấm nước có trở lực thấp; nước vẫn có thể đi chậm qua lớp lipid.',
    reasoning: ['Nhiều kênh làm độ dẫn nước lớn hơn.', 'Nguy cơ vỡ phụ thuộc khả năng điều hòa và độ bền màng, không được đề bảo đảm.'],
    distractorReasons: ['gán vận chuyển chủ động cho kênh nước.', 'thêm cơ chế đóng bảo vệ tuyệt đối không có dữ kiện.', 'biến giảm tốc độ thành bằng không.'],
    tags: ['aquaporin', 'thẩm thấu']
  }),
  bioProblem(topicId, {
    content: 'Ức chế bơm Na⁺/K⁺-ATPase của tế bào động vật trong thời gian đủ dài thường làm vận chuyển chủ động thứ cấp glucose phụ thuộc Na⁺ giảm. Vì sao?',
    correct: 'Gradient Na⁺ do bơm duy trì bị suy giảm, nên chất đồng vận chuyển mất nguồn năng lượng gián tiếp.',
    distractors: ['Bơm Na⁺/K⁺ trực tiếp gắn và phosphoryl hóa glucose.', 'Glucose chỉ có thể khuếch tán qua lớp lipid khi có ATP.', 'Ức chế bơm làm nồng độ Na⁺ ngoài tế bào tăng vô hạn.'],
    insight: 'Vận chuyển thứ cấp dùng năng lượng đã được tích trong gradient ion do vận chuyển sơ cấp tạo ra.',
    evidence: 'Chất đồng vận chuyển được mô tả phụ thuộc Na⁺, còn bơm tiêu ATP duy trì chênh lệch Na⁺.',
    mechanism: 'Khi Na⁺ nội bào tăng và gradient giảm, dòng Na⁺ thuận gradient không còn đủ ghép với đưa glucose ngược gradient.',
    reasoning: ['Bơm và đồng vận chuyển là hai protein khác nhau nhưng liên hệ năng lượng.', 'Không cần glucose tự khuếch tán qua lipid.'],
    distractorReasons: ['gán cơ chất và phản ứng sai cho bơm.', 'phủ nhận protein vận chuyển glucose.', 'mô tả một giới hạn vật lí không thể.'],
    tags: ['vận chuyển chủ động', 'đồng vận chuyển']
  }),
  bioProblem(topicId, {
    content: 'Một chất vận chuyển glucose cho tốc độ tăng theo nồng độ rồi đạt cao nguyên; một chất khác tăng gần tuyến tính trong cùng khoảng. Diễn giải nào phù hợp?',
    correct: 'Quá trình thứ nhất có số protein vận chuyển hữu hạn bị bão hòa; quá trình thứ hai phù hợp khuếch tán đơn giản trong khoảng đo.',
    distractors: ['Cao nguyên chứng minh glucose ngừng chuyển động ở nồng độ cao.', 'Đường tuyến tính luôn là vận chuyển chủ động dùng ATP.', 'Protein vận chuyển không bao giờ bị giới hạn số lượng.'],
    insight: 'Bão hòa là dấu hiệu của số vị trí liên kết hữu hạn, không nhất thiết phân biệt chủ động với khuếch tán hỗ trợ.',
    evidence: 'Một đường đạt tốc độ tối đa còn đường kia tỉ lệ với gradient.',
    mechanism: 'Khi mọi chất mang bận, tăng cơ chất không tăng số chu kì tối đa; khuếch tán qua lipid phụ thuộc chênh lệch nồng độ.',
    reasoning: ['Muốn biết có dùng ATP cần thêm thí nghiệm năng lượng hoặc hướng gradient.', 'Phân tử vẫn chuyển động ở trạng thái cao nguyên tốc độ.'],
    distractorReasons: ['nhầm tốc độ cực đại với ngừng chuyển động.', 'gán ATP chỉ từ hình dạng tuyến tính.', 'phủ nhận nguyên nhân của bão hòa.'],
    tags: ['khuếch tán hỗ trợ', 'bão hòa'],
    stimulus: biologyTable('bio10-adv-transport-04', 'Tốc độ vận chuyển glucose', 'Đơn vị tốc độ tương đối.', 'Hai con đường vận chuyển', [{ key: 'glucose', label: 'Glucose ngoài', unit: 'mM' }, { key: 'x', label: 'Con đường X' }, { key: 'y', label: 'Con đường Y' }], [{ glucose: 1, x: 2, y: 1 }, { glucose: 5, x: 8, y: 5 }, { glucose: 10, x: 12, y: 10 }, { glucose: 20, x: 13, y: 20 }])
  }),
  bioProblem(topicId, {
    content: 'Kênh K⁺ mở khi màng bị khử cực. Nếu nồng độ K⁺ trong tế bào cao hơn ngoài và điện thế chưa đảo chiều cân bằng K⁺, tác động trực tiếp nào thường xảy ra?',
    correct: 'K⁺ đi ra qua kênh và góp phần đưa điện thế màng trở lại âm hơn.',
    distractors: ['K⁺ chắc chắn đi vào vì ion dương bị hút vào tế bào.', 'Kênh dùng ATP để bơm K⁺ ra.', 'Mở kênh làm mọi ion đi qua không chọn lọc.'],
    insight: 'Hướng ion phụ thuộc gradient điện hóa tổng hợp, không chỉ dấu điện tích.',
    evidence: 'Nồng độ K⁺ trong cao và điều kiện nêu chưa vượt thế cân bằng, nên lực ròng hướng ra.',
    mechanism: 'Kênh tạo đường thụ động chọn lọc; dòng K⁺ ra làm mất điện tích dương trong tế bào và tái phân cực.',
    reasoning: ['Kênh điện thế không phải bơm ATP.', 'Tính chọn lọc ion là đặc điểm cấu trúc của lỗ kênh.'],
    distractorReasons: ['chỉ xét lực điện và bỏ gradient hóa học.', 'nhầm kênh với bơm.', 'phủ nhận tính chọn lọc của kênh.'],
    tags: ['gradient điện hóa', 'kênh ion']
  }),
  bioProblem(topicId, {
    content: 'Tế bào thu nhận LDL bằng thụ thể. Đột biến làm thụ thể vẫn gắn LDL nhưng không tập trung vào hố áo protein. Hậu quả phù hợp nhất?',
    correct: 'LDL bám bề mặt nhưng nhập bào giảm mạnh vì phức không được gom vào túi nội hóa hiệu quả.',
    distractors: ['LDL đi xuyên lớp lipid ngay khi gắn thụ thể.', 'Thụ thể biến LDL thành amino acid ở ngoài tế bào.', 'Nhập bào tăng vì thụ thể không bị giữ trong hố.'],
    insight: 'Gắn ligand và nội hóa là hai bước tách biệt của nhập bào qua thụ thể.',
    evidence: 'Khả năng nhận diện còn nguyên nhưng tín hiệu tập trung vào hố bị mất.',
    mechanism: 'Đuôi bào tương của thụ thể kết nối bộ máy áo, giúp gom cargo và bẻ cong màng tạo túi.',
    reasoning: ['Không phải mọi phân tử gắn màng đều tự khuếch tán qua lõi kị nước.', 'Phân giải LDL diễn ra sau nội hóa trong khoang thích hợp.'],
    distractorReasons: ['bỏ hàng rào màng và cơ chế túi.', 'gán hoạt tính enzyme tiêu hóa cho thụ thể bề mặt.', 'đảo hậu quả của mất tín hiệu gom cụm.'],
    tags: ['nhập bào qua thụ thể', 'vận chuyển khối']
  }),
  bioProblem(topicId, {
    content: 'Một độc tố ngăn túi tiết hòa với màng sinh chất nhưng không ảnh hưởng tổng hợp protein. Dữ liệu nào dự kiến xuất hiện?',
    correct: 'Protein tiết tích tụ trong túi gần màng, lượng protein ngoài tế bào giảm và diện tích màng không được bổ sung từ các túi đó.',
    distractors: ['Protein tiết biến mất khỏi ER ngay lập tức vì không được tổng hợp.', 'Mọi túi nội bào bị phân giải thành DNA.', 'Lượng protein ngoài tế bào tăng vì túi không hòa màng.'],
    insight: 'Chặn bước cuối làm cargo tích ở ngay trước điểm chặn.',
    evidence: 'Tổng hợp vẫn bình thường, nên protein tiếp tục đi qua tuyến cho tới giai đoạn hòa màng.',
    mechanism: 'Xuất bào cần protein nhận diện và hòa hai lớp màng; khi thất bại, túi không giải phóng lòng túi.',
    reasoning: ['Dòng vật chất giúp định vị bước bị ức chế.', 'Màng túi cũng là nguồn bổ sung lipid và protein cho màng sinh chất.'],
    distractorReasons: ['mâu thuẫn điều kiện tổng hợp bình thường.', 'bịa chuyển đổi vật chất không có cơ sở.', 'đảo chiều tác động của việc khóa xuất bào.'],
    tags: ['xuất bào', 'hòa màng']
  }),
  bioProblem(topicId, {
    content: 'Hormone H tan trong lipid tạo đáp ứng chậm nhưng kéo dài; hormone P tan trong nước tạo đáp ứng nhanh và mất sớm. Ghép cơ chế nào hợp lí nhất?',
    correct: 'H qua màng và điều hòa biểu hiện gene qua thụ thể nội bào; P gắn thụ thể màng và dùng chất truyền tin thứ hai.',
    distractors: ['H bắt buộc dùng kênh ion vì không qua được màng.', 'P đi thẳng qua lõi lipid và gắn DNA.', 'Cả hai phải có cùng vị trí thụ thể vì đều là hormone.'],
    insight: 'Tính tan ảnh hưởng khả năng qua màng và kiểu thời gian đáp ứng.',
    evidence: 'H tan lipid và đáp ứng kéo dài phù hợp thay đổi phiên mã; P ưa nước và nhanh phù hợp biến đổi protein có sẵn.',
    mechanism: 'Thụ thể nội bào có thể điều hòa gene; thụ thể màng truyền tín hiệu qua chuỗi phosphoryl hóa hoặc chất truyền tin thứ hai.',
    reasoning: ['Tốc độ không phải bằng chứng duy nhất nhưng kết hợp tính tan tạo mô hình nhất quán.', 'Hormone khác nhau có thể dùng họ thụ thể khác nhau.'],
    distractorReasons: ['đảo khả năng qua màng của phân tử tan lipid.', 'đưa phân tử ưa nước qua lõi kị nước không có chất mang.', 'đồng nhất mọi tín hiệu ngoại bào.'],
    tags: ['thụ thể', 'truyền tin tế bào']
  }),
  bioProblem(topicId, {
    content: 'Một phân tử ligand hoạt hóa một thụ thể; mỗi thụ thể hoạt hóa 20 enzyme E, mỗi E tạo 50 phân tử truyền tin thứ hai. Ý nghĩa chính của kiến trúc này là gì?',
    correct: 'Khuếch đại tín hiệu: một sự kiện gắn ban đầu có thể tạo khoảng 1.000 phân tử truyền tin thứ hai.',
    distractors: ['Giảm tín hiệu vì số phân tử tăng.', 'Chứng minh ligand phải đi vào nhân.', 'Loại bỏ hoàn toàn nhu cầu điều hòa tắt tín hiệu.'],
    insight: 'Nhiều sản phẩm ở mỗi tầng nhân hiệu ứng của tín hiệu ban đầu.',
    evidence: '1 × 20 × 50 = 1.000 sự kiện tạo chất truyền tin.',
    mechanism: 'Các tầng enzyme xúc tác cho phép một phân tử hoạt hóa nhiều phân tử tiếp theo trước khi bị bất hoạt.',
    reasoning: ['Khuếch đại làm hệ nhạy nhưng cũng cần phosphatase/phân hủy tín hiệu để dừng.', 'Ligand không nhất thiết đi qua màng.'],
    distractorReasons: ['đảo nghĩa của tăng số bản sao.', 'suy ra vị trí ligand không liên quan phép tính.', 'phủ nhận nhu cầu kiểm soát của hệ khuếch đại.'],
    tags: ['khuếch đại tín hiệu', 'chất truyền tin thứ hai']
  }),
  bioProblem(topicId, {
    content: 'Tế bào tiếp xúc ligand liên tục: đáp ứng tăng nhanh rồi giảm dù ligand vẫn còn. Thụ thể bề mặt cũng giảm theo thời gian. Cơ chế phù hợp nhất là gì?',
    correct: 'Giải mẫn cảm do thụ thể bị bất hoạt hoặc nội hóa, làm tế bào giảm đáp ứng với kích thích kéo dài.',
    distractors: ['Ligand biến thành ATP và hết tác dụng vì ATP cạn.', 'Giảm thụ thể chắc chắn làm tín hiệu tăng.', 'Đáp ứng giảm chứng minh ligand đã biến mất hoàn toàn.'],
    insight: 'Tín hiệu có thể được điều hòa ở phía tế bào nhận dù nồng độ ligand không đổi.',
    evidence: 'Ligand vẫn hiện diện nhưng số thụ thể bề mặt và đáp ứng cùng giảm.',
    mechanism: 'Phosphoryl hóa thụ thể, gắn protein ức chế hoặc nhập bào thụ thể làm giảm khả năng truyền tín hiệu.',
    reasoning: ['Đây là phản hồi bảo vệ trước kích thích kéo dài.', 'Không thể suy ligand biến mất khi đề nói vẫn còn.'],
    distractorReasons: ['bịa chuyển hóa ligand và nguyên nhân ATP.', 'đảo quan hệ số thụ thể–đáp ứng.', 'mâu thuẫn trực tiếp dữ kiện.'],
    tags: ['giải mẫn cảm', 'điều hòa thụ thể'],
    stimulus: biologyTable('bio10-adv-transport-10', 'Đáp ứng với ligand kéo dài', 'Ligand được giữ ở nồng độ không đổi.', 'Thay đổi theo thời gian', [{ key: 'time', label: 'Thời gian', unit: 'phút' }, { key: 'response', label: 'Đáp ứng', unit: '%' }, { key: 'receptor', label: 'Thụ thể bề mặt', unit: '%' }], [{ time: 0, response: 0, receptor: 100 }, { time: 5, response: 100, receptor: 92 }, { time: 30, response: 58, receptor: 61 }, { time: 90, response: 21, receptor: 29 }])
  }),
  bioProblem(topicId, {
    content: 'Độc tố T giữ protein G ở trạng thái hoạt hóa. Khi không còn ligand, tế bào vẫn tạo chất truyền tin thứ hai. Vị trí tác động trực tiếp của T là gì?',
    correct: 'Bước tắt protein G sau thụ thể, khiến nhánh truyền tin tiếp tục hoạt động độc lập với ligand.',
    distractors: ['T làm ligand không thể gắn nên tín hiệu kéo dài.', 'T phá DNA của thụ thể khiến mọi tín hiệu dừng.', 'T đóng mọi kênh nước của tế bào.'],
    insight: 'Hoạt tính còn sau khi bỏ ligand cho thấy công tắc nội bào bị khóa ở trạng thái bật.',
    evidence: 'Chất truyền tin vẫn được tạo dù sự kiện nhận ligand đã kết thúc.',
    mechanism: 'Protein G cần thủy phân GTP để trở về trạng thái tắt; ngăn bước này duy trì hoạt hóa enzyme đích.',
    reasoning: ['Nếu ligand không gắn, tín hiệu ban đầu phải giảm chứ không kéo dài.', 'DNA không cần bị phá để khóa trạng thái protein.'],
    distractorReasons: ['mô tả cơ chế làm giảm khởi phát.', 'đưa tổn thương gene không phù hợp thời gian tức thời.', 'chọn hệ vận chuyển nước không liên quan.'],
    tags: ['protein G', 'tắt tín hiệu']
  }),
  bioProblem(topicId, {
    content: 'Hai tế bào kề nhau trao đổi một chất huỳnh quang nhỏ, nhưng protein lớn không đi qua. Khi protein tạo liên kết khe bị ức chế, trao đổi chất nhỏ dừng. Kết luận nào đúng?',
    correct: 'Liên kết khe tạo kênh chọn kích thước cho ion và phân tử nhỏ đi trực tiếp giữa bào tương hai tế bào.',
    distractors: ['Mọi protein màng cho phép mọi đại phân tử đi qua.', 'Chất nhỏ phải được tiết ra ngoại bào rồi nhập lại.', 'Liên kết khe là vùng hợp nhất hoàn toàn hai tế bào thành một.'],
    insight: 'Thí nghiệm ức chế xác định con đường trực tiếp và giới hạn kích thước của nó.',
    evidence: 'Trao đổi phụ thuộc protein liên kết khe và chọn chất nhỏ nhưng loại protein lớn.',
    mechanism: 'Các connexon thẳng hàng tạo lỗ nối bào tương, cho phép truyền ion/chất truyền tin nhỏ mà vẫn giữ hai tế bào riêng.',
    reasoning: ['Không cần qua khoang ngoại bào.', 'Màng tế bào không bị xóa tại liên kết khe.'],
    distractorReasons: ['phủ nhận tính chọn lọc kích thước.', 'thêm hai bước vận chuyển trái dữ kiện trực tiếp.', 'nhầm kênh nối với hòa toàn bộ màng.'],
    tags: ['liên kết khe', 'truyền tin trực tiếp']
  }),
  bioProblem(topicId, {
    content: 'Đường đáp ứng của tế bào đột biến dịch sang phải so với bình thường nhưng cùng mức đáp ứng tối đa. Diễn giải nào phù hợp nhất?',
    correct: 'Tế bào đột biến kém nhạy với ligand nhưng bộ máy hạ nguồn vẫn có thể tạo đáp ứng tối đa khi ligand đủ cao.',
    distractors: ['Tế bào đột biến có đáp ứng tối đa cao hơn.', 'Đột biến làm ligand mạnh hơn ở mọi nồng độ.', 'Hai dòng hoàn toàn giống nhau vì cùng cực đại.'],
    insight: 'Nồng độ cần để đạt nửa đáp ứng phản ánh độ nhạy; cực đại phản ánh năng lực đáp ứng khi bão hòa.',
    evidence: 'Đột biến cần nồng độ cao hơn để đạt cùng mức trung gian, nhưng cuối cùng đạt cùng 100%.',
    mechanism: 'Giảm ái lực thụ thể hoặc hiệu quả ghép ban đầu có thể làm dịch phải mà không giảm số hiệu ứng tối đa.',
    reasoning: ['Cần tách vị trí đường cong khỏi chiều cao cực đại.', 'Cùng cực đại không có nghĩa cùng độ nhạy.'],
    distractorReasons: ['đọc sai cực đại bằng nhau.', 'đảo tác động của dịch phải.', 'chỉ nhìn một đặc điểm và bỏ nồng độ đáp ứng.'],
    tags: ['liều–đáp ứng', 'độ nhạy'],
    stimulus: biologyTable('bio10-adv-transport-13', 'Đáp ứng theo ligand', 'Đáp ứng tối đa của mỗi dòng được chuẩn hóa.', 'Đáp ứng tế bào', [{ key: 'dose', label: 'Ligand', unit: 'nM' }, { key: 'normal', label: 'Bình thường', unit: '%' }, { key: 'mutant', label: 'Đột biến', unit: '%' }], [{ dose: 1, normal: 20, mutant: 3 }, { dose: 10, normal: 72, mutant: 24 }, { dose: 100, normal: 98, mutant: 76 }, { dose: 1000, normal: 100, mutant: 100 }])
  }),
  bioProblem(topicId, {
    content: 'Sản phẩm cuối của một đường truyền tin hoạt hóa phosphatase làm bất hoạt kinase đầu đường. Kiểu điều hòa này có lợi gì?',
    correct: 'Phản hồi âm giới hạn cường độ/thời gian tín hiệu và giúp hệ trở về trạng thái nền.',
    distractors: ['Phản hồi dương làm tín hiệu tăng vô hạn.', 'Loại bỏ hoàn toàn khả năng tế bào đáp ứng lần sau.', 'Biến kinase thành phospholipid màng.'],
    insight: 'Sản phẩm cuối quay lại ức chế bước sớm là cấu trúc phản hồi âm.',
    evidence: 'Phosphatase làm mất phosphate hoạt hóa trên kinase đầu đường.',
    mechanism: 'Khi tín hiệu mạnh, nhánh tắt cũng tăng, ngăn khuếch đại kéo dài và hỗ trợ tái thiết lập.',
    reasoning: ['Phản hồi âm không nhất thiết triệt tiêu vĩnh viễn.', 'Protein không biến thành lipid qua khử phosphate.'],
    distractorReasons: ['gọi sai dấu phản hồi và kết quả.', 'dùng mệnh đề tuyệt đối về mất đáp ứng.', 'mô tả chuyển loại phân tử không thể.'],
    tags: ['phản hồi âm', 'phosphoryl hóa']
  }),
  bioProblem(topicId, {
    content: 'Bốn chất có cùng kích thước gần nhau: O₂ không phân cực, urea phân cực nhỏ, Na⁺ mang điện và steroid kị nước. Không có protein màng. Thứ tự nào hợp lí về khả năng qua lớp kép lipid?',
    correct: 'O₂ và steroid qua dễ hơn; urea chậm; Na⁺ rất khó qua.',
    distractors: ['Na⁺ qua nhanh nhất vì kích thước nhỏ.', 'Urea không bao giờ qua còn Na⁺ qua tự do.', 'Tất cả qua như nhau vì màng chỉ phân biệt kích thước.'],
    insight: 'Tính kị nước và điện tích quan trọng hơn kích thước đơn thuần đối với lõi lipid.',
    evidence: 'O₂/steroid tương thích lõi kị nước; urea phân cực; Na⁺ có lớp hydrat hóa và điện tích.',
    mechanism: 'Đưa ion khỏi nước vào môi trường kị nước có chi phí năng lượng lớn, nên cần kênh hoặc chất mang.',
    reasoning: ['Phân tử nhỏ phân cực có thể qua chậm.', 'Steroid lớn hơn O₂ nhưng tan trong lipid.'],
    distractorReasons: ['chỉ dùng kích thước và bỏ điện tích.', 'đảo hàng rào năng lượng của ion.', 'phủ nhận tính thấm chọn lọc hóa học.'],
    tags: ['tính thấm màng', 'phân cực']
  }),
  bioProblem(topicId, {
    content: 'Sau khi thiếu ATP, nồng độ ion nội bào thay đổi như bảng. Protein nào có khả năng phụ thuộc trực tiếp ATP nhất?',
    correct: 'Protein duy trì K⁺ cao trong và Na⁺ thấp trong, vì hai gradient cùng sụp khi ATP thiếu.',
    distractors: ['Kênh K⁺ mở thụ động theo gradient.', 'Aquaporin chỉ dẫn nước.', 'Kênh rò Na⁺ không tiêu ATP.'],
    insight: 'Gradient sụp theo thời gian khi ATP cạn chỉ ra vai trò của bơm chủ động chống lại dòng rò.',
    evidence: 'K⁺ trong giảm còn Na⁺ trong tăng, hướng về cân bằng với môi trường.',
    mechanism: 'Bơm Na⁺/K⁺ dùng ATP liên tục để đẩy ion ngược gradient; khi dừng, kênh rò làm gradient tan.',
    reasoning: ['Kênh thụ động góp phần làm sụp nhưng không phải protein phụ thuộc ATP trực tiếp.', 'Aquaporin không quyết định đặc hiệu hai ion.'],
    distractorReasons: ['chọn con đường thụ động.', 'chọn protein vận chuyển nước.', 'chọn kênh không thủy phân ATP.'],
    tags: ['bơm ion', 'ATP'],
    stimulus: biologyTable('bio10-adv-transport-16', 'Ion khi thiếu ATP', 'Nồng độ tương đối trong tế bào.', 'Thay đổi ion', [{ key: 'time', label: 'Thời gian', unit: 'phút' }, { key: 'k', label: 'K⁺ trong' }, { key: 'na', label: 'Na⁺ trong' }], [{ time: 0, k: 100, na: 15 }, { time: 20, k: 72, na: 39 }, { time: 60, k: 41, na: 68 }])
  }),
  bioProblem(topicId, {
    content: 'Đột biến thụ thể khiến thụ thể gắn ligand bình thường nhưng miền nội bào không thể phosphoryl hóa. Dự đoán nào đúng nhất?',
    correct: 'Ligand vẫn bám bề mặt nhưng tuyển mộ protein truyền tin và đáp ứng nội bào giảm.',
    distractors: ['Ligand chắc chắn không thể tiếp xúc thụ thể.', 'Thụ thể tự biến thành ligand mới.', 'Mọi đường truyền tin trong tế bào đều tăng.'],
    insight: 'Chức năng nhận biết ngoại bào và truyền tín hiệu qua miền nội bào có thể bị tách.',
    evidence: 'Khả năng gắn được bảo toàn, còn vị trí phosphoryl hóa nội bào bị mất.',
    mechanism: 'Phosphate thường tạo điểm gắn hoặc thay đổi hoạt tính protein hạ nguồn; thiếu nó làm tín hiệu không đi tiếp.',
    reasoning: ['Đây là đột biến “gắn được nhưng không truyền được”.', 'Không có cơ sở để tất cả đường khác cùng tăng.'],
    distractorReasons: ['mâu thuẫn với khả năng gắn bình thường.', 'mô tả chuyển đổi vai trò phân tử không có.', 'khái quát tác động theo hướng ngược.'],
    tags: ['thụ thể màng', 'phosphoryl hóa']
  }),
  bioProblem(topicId, {
    content: 'Một chất tan S đi vào tế bào nhanh khi ngoài tế bào cao, dừng khi nhiệt độ thấp và bị cạnh tranh bởi chất tương tự; ATP tế bào không đổi. Cơ chế phù hợp nhất là gì?',
    correct: 'Khuếch tán hỗ trợ qua chất mang đặc hiệu, có bão hòa và cạnh tranh nhưng không dùng ATP trực tiếp.',
    distractors: ['Khuếch tán đơn giản qua lipid vì chất tương tự cạnh tranh.', 'Bơm chủ động sơ cấp vì mọi vận chuyển nhạy nhiệt đều dùng ATP.', 'Nhập bào không chọn lọc của toàn bộ dịch ngoại bào.'],
    insight: 'Cạnh tranh cấu trúc gợi vị trí gắn hữu hạn; ATP không đổi và hướng theo nồng độ gợi thụ động.',
    evidence: 'S phụ thuộc gradient, bị chất tương tự cạnh tranh và không làm thay đổi tiêu thụ ATP.',
    mechanism: 'Chất mang đổi cấu hình sau khi gắn cơ chất; nhiệt độ ảnh hưởng động học protein dù quá trình không thủy phân ATP.',
    reasoning: ['Khuếch tán đơn giản không có vị trí gắn để cạnh tranh kiểu này.', 'Nhập bào không giải thích tính tương tự phân tử.'],
    distractorReasons: ['gán cạnh tranh đặc hiệu cho lớp lipid.', 'suy ATP chỉ từ độ nhạy nhiệt.', 'chọn vận chuyển khối không phù hợp dữ kiện phân tử.'],
    tags: ['chất mang', 'khuếch tán hỗ trợ']
  })
];
