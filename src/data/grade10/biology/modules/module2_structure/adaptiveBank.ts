import { buildBiologyAdaptiveBank, buildBiologySeedGroup, type BiologyAdaptiveCase } from '../../adaptiveFactory';
import type { QuestionRepresentationType } from '@/types';

type Entry = [string, string, [string, string, string], string, QuestionRepresentationType?];
const cases = (recognition: string, trap: string, entries: Entry[]): BiologyAdaptiveCase[] => entries.map(([prompt, correct, distractors, reasoning, representationType]) => ({ prompt, correct, distractors, recognition, reasoning, trap, representationType }));
const group = (key: string, questionTypeId: string, outcomeId: string, subTypeId: string, items: BiologyAdaptiveCase[]) => buildBiologySeedGroup({ prefix: `bio10-adapt-m2-${key}-`, questionTypeId, topicId: 'bio10-t2', outcomeId, subTypeId, cases: items });

const seeds = [
  ...group('cell-theory', 'bio10-qt21', 'BIO10-M2-O01', 'bio10-qt21-st2', cases(
    'Dùng bằng chứng về cấu tạo, chức năng và nguồn gốc tế bào để vận dụng học thuyết tế bào.',
    'Không suy rằng cơ thể lớn phải có tế bào lớn hoặc virus là tế bào chỉ vì có vật chất di truyền.',
    [
      ['Quan sát mô lá và mô cơ đều gồm các đơn vị có màng và tế bào chất hỗ trợ nội dung nào?', 'Cơ thể sống được cấu tạo từ một hoặc nhiều tế bào', ['Mọi tế bào có cùng hình dạng', 'Mọi sinh vật đều quang hợp', 'Tế bào chỉ có ở động vật'], 'Bằng chứng từ nhiều mô cho thấy tế bào là đơn vị cấu tạo phổ quát.'],
      ['Một tế bào mới xuất hiện sau khi tế bào mẹ phân chia. Điều này phù hợp nguyên lí nào?', 'Tế bào sinh ra từ tế bào có trước', ['Tế bào tự sinh từ chất vô cơ bất cứ lúc nào', 'Mọi tế bào tồn tại vĩnh viễn', 'Chỉ nhân tạo mới tạo tế bào'], 'Theo dõi trực tiếp phân chia hỗ trợ tính liên tục tế bào.'],
      ['Cá voi lớn hơn chuột chủ yếu vì sao?', 'Cơ thể có nhiều tế bào hơn và tổ chức khác, không nhất thiết tế bào lớn hơn tương ứng', ['Mỗi tế bào cá voi lớn bằng cả chuột', 'Chuột không có tế bào', 'Kích thước cơ thể chỉ do DNA dài'], 'Kích thước cơ thể thường tăng nhờ số lượng và sắp xếp tế bào.'],
      ['Virus có gene và tiến hóa nhưng không có cấu trúc tế bào. Theo học thuyết tế bào nên nhận định thế nào?', 'Virus không phải tế bào và phụ thuộc tế bào chủ để nhân lên', ['Virus là tế bào nhân sơ nhỏ nhất', 'Virus có đầy đủ chuyển hóa độc lập', 'Gene tự động biến virus thành tế bào'], 'Có vật chất di truyền chưa đủ để có tổ chức tế bào.'],
      ['Tế bào da và tế bào gan khác hình dạng nhưng cùng chứa bộ gene cơ bản. Điều này cho thấy?', 'Tế bào có thể chuyên hóa chức năng dù cùng nguồn gốc và thông tin di truyền', ['Mọi tế bào phải giống hệt nhau', 'Tế bào gan không có DNA', 'Học thuyết tế bào phủ nhận chuyên hóa'], 'Biểu hiện gene và cấu trúc khác nhau tạo chuyên hóa.'],
      ['Một mô nhân tạo chỉ gồm protein và lipid nhưng không có tế bào, không tự duy trì. Có được xem là cơ thể sống không?', 'Không; chưa có đơn vị tế bào thực hiện đầy đủ chức năng sống', ['Có vì chứa phân tử hữu cơ', 'Có vì mọi protein đều sống', 'Có nếu khối lượng đủ lớn'], 'Tập hợp phân tử không tự động tạo hệ sống cấp tế bào.'],
      ['Bảng cho thấy tế bào của ba loài đều có màng, vật chất di truyền và ribosome. Suy luận?', 'Có những đặc điểm tế bào nền tảng được bảo tồn giữa các sinh vật', ['Ba loài là một loài', 'Mọi bào quan giống hệt nhau', 'Chỉ sinh vật nhân thực có ribosome'], 'Đặc điểm chung hỗ trợ nguồn gốc và tổ chức tế bào thống nhất.', 'table'],
      ['Tại sao tế bào được gọi là đơn vị chức năng cơ bản?', 'Các quá trình chuyển hóa và duy trì sự sống diễn ra trong tổ chức tế bào', ['Tế bào luôn hoạt động tách cơ thể', 'Tế bào là phân tử nhỏ nhất', 'Chỉ tế bào có màu'], 'Cơ thể phụ thuộc hoạt động phối hợp của các tế bào.'],
      ['Một tế bào không nhân vẫn sống một thời gian nhưng không duy trì lâu dài. Điều này có phủ nhận học thuyết tế bào không?', 'Không; tế bào chuyên hóa vẫn là đơn vị cấu tạo nhưng khả năng tự duy trì có thể bị giới hạn', ['Có vì mọi tế bào phải giống nhau', 'Có vì nhân là một tế bào khác', 'Không vì tế bào không cần vật chất di truyền'], 'Học thuyết khái quát không loại trừ ngoại lệ chuyên hóa.'],
      ['Tìm thấy hóa thạch cấu trúc giống tế bào cổ. Giá trị bằng chứng chính?', 'Gợi lịch sử lâu dài của tổ chức tế bào nhưng cần kết hợp nhiều phương pháp xác nhận', ['Chứng minh chính xác mọi chức năng của tế bào cổ', 'Hóa thạch luôn là tế bào sống', 'Không cung cấp thông tin nào'], 'Hình thái hỗ trợ nhưng không đủ suy mọi hoạt động sinh lí.'],
      ['Một tuyên bố nói “bào quan nhỏ hơn nên là đơn vị sống cơ bản hơn tế bào”. Phản biện?', 'Bào quan không tự thực hiện đầy đủ các đặc trưng sống bên ngoài hệ tế bào', ['Bào quan không chứa phân tử', 'Kích thước luôn quyết định sự sống', 'Tế bào không có bào quan'], 'Tiêu chí là tổ chức chức năng, không chỉ độ nhỏ.'],
      ['Học thuyết tế bào được mở rộng theo bằng chứng mới. Điều này thể hiện tính chất nào của khoa học?', 'Mô hình khoa học có thể được củng cố và điều chỉnh khi có dữ liệu tốt hơn', ['Học thuyết chỉ là đoán tùy ý', 'Bằng chứng không ảnh hưởng kết luận', 'Mọi học thuyết bất biến'], 'Tri thức khoa học ổn định tương đối nhưng luôn chịu kiểm chứng.']
    ]
  )),
  ...group('prokaryote', 'bio10-qt22', 'BIO10-M2-O02', 'bio10-qt22-st2', cases(
    'Suy chức năng của tế bào nhân sơ từ màng, vùng nhân, ribosome, thành và cấu trúc phụ.',
    'Không cho rằng nhân sơ không có DNA, không có cấu trúc trong tế bào hoặc mọi vi khuẩn đều giống nhau.',
    [
      ['Tế bào vi khuẩn không có nhân hoàn chỉnh nhưng DNA nằm ở đâu?', 'Vùng nhân không được bao bởi màng nhân', ['Trong ti thể', 'Trong bộ Golgi', 'Hoàn toàn ngoài tế bào'], 'Nhân sơ có DNA nhưng không có màng nhân.'],
      ['Kháng sinh ức chế ribosome vi khuẩn làm giảm quá trình nào trực tiếp?', 'Tổng hợp protein', ['Nhân đôi thành tế bào', 'Tạo lớp kép phospholipid từ DNA', 'Quang hợp ở mọi vi khuẩn'], 'Ribosome là nơi dịch mã.'],
      ['Thành tế bào vi khuẩn có vai trò nổi bật nào?', 'Giữ hình dạng và hạn chế tế bào vỡ do áp suất thẩm thấu', ['Lưu toàn bộ gene', 'Tổng hợp mọi ATP', 'Thay thế màng sinh chất'], 'Thành bền cơ học nằm ngoài màng.'],
      ['Một vi khuẩn mất vỏ nhầy có thể gặp bất lợi gì?', 'Giảm bám bề mặt hoặc giảm bảo vệ trước điều kiện bất lợi', ['Mất toàn bộ DNA', 'Không còn ribosome', 'Biến thành virus'], 'Vỏ có thể hỗ trợ bám và bảo vệ, không phải cấu trúc bắt buộc ở mọi loài.'],
      ['Plasmid khác chromosome chính ở điểm nào?', 'Thường là DNA nhỏ ngoài chromosome, sao chép tương đối độc lập và có thể mang gene phụ trợ', ['Là protein màng', 'Chỉ có ở tế bào động vật', 'Không chứa nucleotide'], 'Plasmid có thể mang gene kháng thuốc nhưng không thay thế toàn bộ bộ gene.'],
      ['Roi vi khuẩn bị hỏng sẽ ảnh hưởng trực tiếp nhất đến gì?', 'Khả năng vận động định hướng của vi khuẩn có roi', ['Tổng hợp protein ở mọi tế bào', 'Sao chép DNA trong nhân', 'Tạo thành cellulose'], 'Roi là cấu trúc vận động ở một số vi khuẩn.'],
      ['Bảng cho thấy tế bào X có DNA vòng, ribosome và không có bào quan màng. X phù hợp kiểu nào?', 'Tế bào nhân sơ', ['Tế bào thực vật trưởng thành', 'Tế bào động vật', 'Virus có vỏ'], 'Tổ hợp vùng nhân và thiếu hệ bào quan màng là đặc trưng nhân sơ.', 'table'],
      ['Kích thước nhỏ giúp vi khuẩn trao đổi chất nhanh một phần vì sao?', 'Tỉ lệ diện tích bề mặt/thể tích lớn', ['Thể tích luôn bằng zero', 'Không cần màng', 'Mọi phân tử ở ngoài tế bào'], 'Tỉ lệ bề mặt lớn hỗ trợ trao đổi trên mỗi đơn vị thể tích.'],
      ['Tại sao nói tế bào chất vi khuẩn không hoàn toàn “trống”?', 'Nó chứa ribosome, enzyme, chất dự trữ và vùng vật chất di truyền', ['Nó có đầy đủ Golgi và ti thể', 'Nó chỉ chứa nước tinh khiết', 'Nó không có phản ứng hóa học'], 'Không có bào quan màng không đồng nghĩa không có tổ chức nội bào.'],
      ['Một chất phá màng sinh chất vi khuẩn sẽ ảnh hưởng nhiều quá trình vì sao?', 'Màng tham gia trao đổi, duy trì gradient và ở nhân sơ còn mang nhiều hệ enzyme năng lượng', ['Màng chỉ tạo màu', 'Màng chứa toàn bộ thành peptidoglycan', 'DNA nằm ngoài màng'], 'Màng nhân sơ đảm nhiệm nhiều chức năng thiết yếu.'],
      ['Hai vi khuẩn cùng hình cầu có chắc cùng loài không?', 'Không; hình dạng là một đặc điểm, cần thêm dữ liệu sinh lí và di truyền', ['Có vì mọi cầu khuẩn cùng gene', 'Có vì hình dạng quyết định loài tuyệt đối', 'Không vì vi khuẩn không có loài'], 'Phân loại cần nhiều đặc điểm hơn hình thái.'],
      ['Một vi khuẩn quang hợp có hệ màng nội bào nhưng không có lục lạp. Nhận định?', 'Nhân sơ có thể có màng chuyên hóa nhưng không phải bào quan lục lạp có màng bao hoàn chỉnh', ['Có màng nào cũng là lục lạp', 'Vi khuẩn không thể quang hợp', 'Hệ màng biến vi khuẩn thành nhân thực'], 'Cần phân biệt cấu trúc màng chuyên hóa với bào quan nhân thực.']
    ]
  )),
  ...group('membrane', 'bio10-qt23', 'BIO10-M2-O03', 'bio10-qt23-st2', cases(
    'Phân tích mô hình khảm động, tính chọn lọc, thành tế bào và bộ xương tế bào.',
    'Không xem màng là vách cứng bất động hoặc cho rằng thành tế bào thay thế màng sinh chất.',
    [
      ['Protein màng có thể di chuyển trong mặt phẳng lớp kép. Điều này phù hợp mô hình nào?', 'Mô hình khảm động', ['Mô hình màng hoàn toàn cứng', 'Mô hình chỉ gồm cellulose', 'Mô hình DNA kép'], 'Lipid tạo nền động và protein phân bố như khảm.'],
      ['Màng sinh chất có tính thấm chọn lọc nghĩa là gì?', 'Một số chất qua dễ, một số cần protein hoặc bị hạn chế tùy cấu trúc và gradient', ['Mọi chất qua với tốc độ như nhau', 'Không chất nào qua được', 'Chỉ nước bị chặn hoàn toàn'], 'Lõi lipid và protein tạo tính chọn lọc.'],
      ['Glycoprotein ở mặt ngoài màng thường tham gia chức năng nào?', 'Nhận diện, kết dính hoặc tiếp nhận tín hiệu', ['Sao chép chromosome', 'Tạo cellulose trong nhân', 'Thủy phân mọi ATP'], 'Chuỗi carbohydrate ngoài tế bào tạo dấu hiệu nhận biết.'],
      ['Thành tế bào thực vật và màng sinh chất khác nhau thế nào?', 'Thành hỗ trợ cơ học ở ngoài, còn màng điều khiển trao đổi chọn lọc', ['Thành thay thế hoàn toàn màng', 'Màng làm từ cellulose', 'Cả hai chỉ chứa DNA'], 'Tế bào thực vật có cả thành và màng với chức năng khác nhau.'],
      ['Cholesterol bị loại khỏi màng động vật có thể làm gì?', 'Làm độ lỏng và độ ổn định màng thay đổi tùy nhiệt độ', ['Xóa toàn bộ gene', 'Tạo thành tế bào', 'Ngừng mọi ribosome'], 'Cholesterol điều hòa cách phospholipid chuyển động.'],
      ['Protein xuyên màng có đoạn giàu amino acid kị nước vì sao?', 'Đoạn đó tiếp xúc lõi hydrocarbon của lớp kép', ['Đoạn đó nằm trong dịch ngoại bào nước', 'Amino acid kị nước tạo DNA', 'Màng không có lipid'], 'Tính chất mạch bên phải tương thích môi trường màng.'],
      ['Bảng cho thấy chất nhỏ không phân cực qua màng nhanh, ion qua rất chậm nếu không có kênh. Kết luận?', 'Lõi kị nước cho phép chất không phân cực khuếch tán nhưng cản hạt tích điện', ['Mọi chất đi qua giống nhau', 'Ion không tồn tại trong tế bào', 'Protein kênh làm màng không chọn lọc'], 'Cấu trúc hóa học quyết định con đường qua màng.', 'table'],
      ['Khung xương tế bào bị phá vỡ có thể ảnh hưởng gì?', 'Hình dạng, vận chuyển nội bào và phân chia tế bào', ['Trình tự base DNA đổi ngay', 'Thành tế bào vi khuẩn biến mất ở mọi loài', 'Nước mất phân cực'], 'Sợi protein làm giá đỡ và đường vận chuyển.'],
      ['Tế bào thực vật trong môi trường nhược trương không vỡ dễ như tế bào động vật vì sao?', 'Thành tế bào chống lại sự trương quá mức', ['Thực vật không có nước', 'Màng thực vật không cho nước qua', 'Tế bào động vật có cellulose'], 'Thành tạo áp lực cơ học đối kháng nước vào.'],
      ['Một độc tố khóa cứng lipid màng sẽ ảnh hưởng trực tiếp điều gì?', 'Độ linh động của protein và khả năng biến dạng, tạo túi màng', ['Số chromosome tự tăng', 'Ribosome biến thành lysosome', 'Tạo liên kết peptide nhanh hơn'], 'Tính động cần cho nhiều quá trình màng.'],
      ['Hai mặt của màng có thành phần khác nhau. Điều này gọi là gì?', 'Tính bất đối xứng của màng', ['Mọi phospholipid phân bố ngẫu nhiên tuyệt đối', 'Tính đồng nhất DNA', 'Không có mô hình màng'], 'Hướng protein và lipid liên hệ chức năng từng mặt.'],
      ['Một tế bào mất protein kết dính ngoại bào có thể gặp hậu quả gì?', 'Giảm liên kết với tế bào hoặc chất nền, ảnh hưởng tổ chức mô', ['Mất mọi nucleotide', 'Tăng thành cellulose ở động vật', 'Không còn nước'], 'Protein bề mặt góp phần tạo quan hệ giữa tế bào và môi trường.']
    ]
  )),
  ...group('nucleus', 'bio10-qt24', 'BIO10-M2-O04', 'bio10-qt24-st2', cases(
    'Dùng dữ liệu định vị, vận chuyển qua lỗ nhân và thí nghiệm chuyển nhân để suy chức năng nhân.',
    'Không cho rằng nhân hoạt động độc lập hoặc mọi tế bào mất nhân đều chết ngay lập tức.',
    [
      ['Màng nhân kép liên tục với cấu trúc nào?', 'Lưới nội chất', ['Thành tế bào', 'Roi vi khuẩn', 'Vỏ capsid'], 'Sự liên tục nối nhân với hệ thống nội màng.'],
      ['Lỗ nhân có chức năng gì?', 'Điều hòa trao đổi RNA, protein và phức hợp giữa nhân với tế bào chất', ['Cho mọi phân tử qua tự do', 'Tổng hợp lipid dự trữ duy nhất', 'Thay thế ribosome'], 'Phức hợp lỗ nhân vận chuyển chọn lọc.'],
      ['Nhân con liên quan trực tiếp nhất đến quá trình nào?', 'Tổng hợp rRNA và lắp ráp tiểu đơn vị ribosome', ['Tạo ATP bằng hô hấp', 'Phân giải lipid', 'Tạo thành tế bào'], 'Nhân con là vùng chức năng bên trong nhân.'],
      ['Chromatin gồm thành phần chính nào?', 'DNA liên kết với protein', ['Cellulose và lipid', 'Starch và glycogen', 'Chỉ nước'], 'Tổ chức DNA với protein giúp đóng gói và điều hòa.'],
      ['Tế bào hồng cầu trưởng thành người không có nhân vẫn vận chuyển oxygen. Điều gì đúng?', 'Chuyên hóa cho phép hoạt động một thời gian nhưng hạn chế tổng hợp mới và sửa chữa', ['Mọi tế bào không cần nhân', 'Hồng cầu không phải tế bào', 'Nhân chỉ tạo màu'], 'Mất nhân là thích nghi chuyên hóa có đánh đổi.'],
      ['Chuyển nhân tế bào soma vào trứng đã bỏ nhân có thể tạo phôi. Bằng chứng này hỗ trợ gì?', 'Nhân soma còn chứa thông tin di truyền cần cho phát triển', ['Tế bào chất không có vai trò', 'Mọi nhân tự phát triển không cần môi trường', 'DNA nằm trong màng sinh chất'], 'Kết quả nhấn mạnh thông tin trong nhân nhưng vẫn cần tế bào chất.'],
      ['Bảng cho thấy tế bào mất protein nhập nhân không đưa được enzyme phiên mã vào nhân. Hậu quả?', 'Biểu hiện nhiều gene có thể giảm dù gene vẫn còn', ['DNA tự biến thành protein', 'Màng nhân biến mất chắc chắn', 'Tổng hợp cellulose tăng'], 'Vận chuyển protein điều hòa cần cho hoạt động gene.', 'table'],
      ['Tại sao nhân không phải “bộ não” hoạt động đơn độc của tế bào?', 'Điều hòa tế bào là kết quả tương tác giữa gene, tín hiệu, protein và bào quan', ['Nhân không chứa DNA', 'Tế bào chất không có phản ứng', 'Chỉ màng quyết định mọi thứ'], 'Ẩn dụ hữu ích nhưng không nên che mất mạng tương tác.'],
      ['Một chất ngăn RNA ra khỏi nhân sẽ ảnh hưởng trực tiếp gì?', 'Giảm khả năng mRNA tới ribosome để dịch mã', ['Tăng vận chuyển oxygen', 'Tạo thêm thành tế bào', 'Biến RNA thành lipid'], 'Thông tin biểu hiện phải đi từ nhân tới tế bào chất.'],
      ['Trong kì phân chia, màng nhân tạm tháo dỡ ở nhiều tế bào. Điều này cho thấy?', 'Cấu trúc nhân có thể biến đổi có kiểm soát theo chu kì tế bào', ['Nhân không cần cho gene', 'DNA bị tiêu hủy mỗi lần phân chia', 'Mọi tế bào mất nhân vĩnh viễn'], 'Tổ chức tế bào là động và phụ thuộc giai đoạn.'],
      ['Đột biến lamin làm nhân méo. Cơ chế phù hợp?', 'Mạng protein nâng đỡ mặt trong màng nhân bị suy yếu', ['Cellulose trong nhân bị mất', 'Ribosome trong Golgi bị phá', 'Nước không vào nhân'], 'Lamina hạt nhân hỗ trợ hình dạng và tổ chức chromatin.'],
      ['Một tế bào có nhiều nhân có vi phạm học thuyết tế bào không?', 'Không; số nhân có thể thay đổi theo chuyên hóa, tế bào vẫn là đơn vị có màng và tế bào chất', ['Có vì mỗi tế bào chỉ được một DNA', 'Có vì nhân là tế bào riêng', 'Không vì tế bào đó không sống'], 'Học thuyết không quy định cứng một nhân cho mỗi tế bào.']
    ]
  )),
  ...group('organelles', 'bio10-qt3', 'BIO10-M2-O05', 'bio10-qt3-st2', cases(
    'Theo dõi đường đi của protein và lipid qua ribosome, lưới nội chất, Golgi, túi và lysosome.',
    'Không xem bào quan hoạt động độc lập hoặc gán mỗi bào quan đúng một chức năng duy nhất.',
    [
      ['Protein tiết ra ngoài tế bào thường đi theo tuyến nào?', 'Ribosome trên lưới nội chất hạt → Golgi → túi tiết → màng', ['Nhân → lysosome → chromosome', 'Ti thể → thành tế bào → nhân', 'Ribosome tự do → DNA → Golgi'], 'Hệ thống nội màng xử lí và vận chuyển protein tiết.'],
      ['Lưới nội chất hạt có nhiều ribosome phù hợp chức năng nào?', 'Tổng hợp protein tiết, protein màng và protein của hệ nội màng', ['Tạo ATP duy nhất', 'Phân giải chromosome', 'Tổng hợp cellulose ở mọi tế bào'], 'Ribosome gắn màng đưa chuỗi mới vào hệ nội màng.'],
      ['Lưới nội chất trơn phát triển ở tế bào gan liên quan gì?', 'Tổng hợp lipid và tham gia khử độc', ['Tạo ribosome trong nhân con', 'Sao chép mọi DNA', 'Quang hợp'], 'Lưới trơn không có ribosome và giàu enzyme chuyển hóa lipid/chất lạ.'],
      ['Golgi bị ức chế sẽ ảnh hưởng trực tiếp nhất đến gì?', 'Biến đổi, phân loại và đóng gói sản phẩm của hệ nội màng', ['Nhân đôi DNA ở vùng nhân', 'Tạo ATP qua đường phân', 'Gắn amino acid vào tRNA'], 'Golgi là trạm xử lí và định tuyến.'],
      ['Lysosome chứa enzyme thủy phân nhưng tế bào không tự tiêu hóa bình thường vì sao?', 'Enzyme được cô lập trong màng và hoạt động tối ưu ở môi trường lòng lysosome', ['Enzyme không thể phân giải chất', 'Lysosome không có màng', 'Tế bào chất có pH luôn bằng zero'], 'Ngăn màng và điều kiện pH tạo kiểm soát không gian.'],
      ['Một protein thiếu tín hiệu tới lysosome bị tiết ra ngoài. Điều này cho thấy?', 'Nhãn phân tử ở Golgi cần cho định tuyến đúng đích', ['Mọi protein tự chọn đích', 'Lysosome tạo gene', 'Màng không có tính chọn lọc'], 'Tín hiệu định vị quyết định túi vận chuyển.'],
      ['Bảng xung–đuổi cho thấy dấu phóng xạ xuất hiện lần lượt ở lưới nội chất, Golgi, túi tiết. Kết luận?', 'Protein được vận chuyển tuần tự qua hệ nội màng trước khi tiết', ['Protein đi ngược từ ngoài vào nhân', 'Golgi tạo ribosome', 'Dấu phóng xạ chứng minh lipid là DNA'], 'Thay đổi vị trí theo thời gian cho biết tuyến vận chuyển.', 'table'],
      ['Peroxisome khác lysosome nổi bật ở đâu?', 'Peroxisome thực hiện phản ứng oxi hóa và xử lí hydrogen peroxide', ['Peroxisome chứa chromosome', 'Peroxisome tổng hợp mọi protein', 'Lysosome quang hợp'], 'Hai bào quan đều tham gia chuyển hóa nhưng dùng hệ enzyme khác.'],
      ['Ribosome tự do thường tổng hợp protein dùng ở đâu?', 'Tế bào chất hoặc nhập vào một số bào quan như nhân, ti thể', ['Chỉ tiết ra ngoài', 'Chỉ tạo thành tế bào', 'Chỉ nằm trong Golgi'], 'Đích protein liên quan vị trí ribosome và tín hiệu.'],
      ['Túi vận chuyển không nhận ra màng đích sẽ gây gì?', 'Hàng hóa có thể tích tụ hoặc giao sai nơi', ['Mọi DNA biến mất', 'Tế bào không còn nước', 'Tăng tổng hợp cellulose tức thời'], 'Nhận diện màng là bước thiết yếu của vận chuyển có hướng.'],
      ['Tế bào tuyến tụy tiết nhiều enzyme thường giàu cấu trúc nào?', 'Lưới nội chất hạt, Golgi và túi tiết', ['Chỉ không bào trung tâm', 'Chỉ thành cellulose', 'Chỉ roi vi khuẩn'], 'Chức năng tiết protein đòi hỏi hệ tổng hợp và đóng gói mạnh.'],
      ['Tự thực bào đưa bào quan hỏng tới lysosome có lợi gì?', 'Tái chế thành phần và hạn chế tích tụ cấu trúc hư hại', ['Tạo thêm đột biến', 'Biến lipid thành gene', 'Ngăn mọi chuyển hóa'], 'Bào quan phối hợp trong kiểm soát chất lượng tế bào.']
    ]
  )),
  ...group('organelle-data', 'bio10-qt3', 'BIO10-M2-O05', 'bio10-qt3-st3', cases(
    'Đọc dữ kiện bào quan để suy nguồn năng lượng, nguồn gốc và hậu quả tổn thương.',
    'Không kết luận bào quan chỉ từ một đặc điểm hoặc bỏ qua sự phối hợp giữa chúng.',
    [
      ['Bào quan có hai màng, màng trong gấp nếp và tạo nhiều ATP là gì?', 'Ti thể', ['Golgi', 'Lysosome', 'Ribosome'], 'Mào ti thể tăng diện tích cho chuỗi chuyển electron.'],
      ['Bào quan có hai màng, hệ thylakoid và sắc tố quang hợp là gì?', 'Lục lạp', ['Nhân con', 'Peroxisome', 'Trung thể'], 'Thylakoid là nơi diễn ra các phản ứng ánh sáng.'],
      ['Ti thể và lục lạp có DNA riêng hỗ trợ giả thuyết nào?', 'Nguồn gốc nội cộng sinh từ tổ tiên vi khuẩn', ['Chúng được tạo trực tiếp từ Golgi mỗi lần', 'Mọi bào quan có bộ gene đầy đủ', 'DNA chỉ có ngoài tế bào'], 'DNA vòng và ribosome riêng là các bằng chứng cùng hướng.'],
      ['Thuốc phá gradient proton ở màng trong ti thể sẽ làm gì?', 'Giảm tổng hợp ATP oxi hóa dù cơ chất có thể vẫn bị chuyển hóa một phần', ['Tăng ATP vô hạn', 'Tạo cellulose', 'Nhân đôi chromosome ngay'], 'ATP synthase phụ thuộc gradient proton.'],
      ['Tế bào cơ có nhiều ti thể hơn tế bào mỡ trắng vì sao?', 'Nhu cầu ATP liên tục cho co cơ cao hơn', ['Ti thể chỉ tạo màu cơ', 'Tế bào mỡ không cần năng lượng', 'Cơ không có ribosome'], 'Số lượng bào quan thích nghi nhu cầu chức năng.'],
      ['Không bào trung tâm lớn ở tế bào thực vật góp phần gì?', 'Dự trữ, cân bằng nước và tạo sức trương', ['Sao chép DNA', 'Tạo ribosome', 'Thay thế màng sinh chất'], 'Không bào liên hệ ổn định thể tích và môi trường nội bào.'],
      ['Bảng cho thấy tế bào X tiêu thụ oxygen cao và có nhiều mào ti thể. Suy luận?', 'X có chuyển hóa hiếu khí và nhu cầu năng lượng cao', ['X chắc chắn quang hợp', 'X không có protein', 'Oxygen chỉ dùng tạo DNA'], 'Cấu trúc mào phù hợp cường độ hô hấp.', 'table'],
      ['Một đột biến làm enzyme lysosome không đến lysosome. Chất chưa phân giải tích tụ. Đây là hậu quả của gì?', 'Sai định tuyến protein gây mất chức năng bào quan', ['Thiếu cellulose', 'Tăng quang hợp', 'Mất mọi DNA ti thể'], 'Chức năng phụ thuộc phối hợp gene–Golgi–lysosome.'],
      ['Lục lạp vẫn tạo đường nhưng cây thiếu ánh sáng kéo dài. Điều gì xảy ra?', 'Sản xuất chất hữu cơ giảm vì phản ứng ánh sáng không cung cấp đủ năng lượng và chất khử', ['Lục lạp tạo năng lượng từ không gì', 'Cây không cần carbon dioxide', 'Mọi ti thể ngừng ngay'], 'Hai pha quang hợp phụ thuộc nguồn năng lượng ánh sáng.'],
      ['Tại sao ti thể không được xem là tế bào sống độc lập trong tế bào hiện đại?', 'Nó phụ thuộc nhiều gene và protein do nhân mã hóa, không tự duy trì đầy đủ', ['Ti thể không có màng', 'Ti thể không có phản ứng', 'Ti thể lớn hơn cơ thể'], 'Có DNA riêng không đồng nghĩa tự chủ hoàn toàn.'],
      ['Một chất làm thủng màng lysosome hàng loạt có thể gây gì?', 'Enzyme thoát ra và làm tổn thương thành phần tế bào', ['Tăng đóng gói protein ở Golgi', 'Tạo thêm thành tế bào', 'DNA biến thành lipid'], 'Cô lập enzyme thủy phân là cơ chế bảo vệ quan trọng.'],
      ['Quan sát một bào quan có màng đơn và catalase cao. Nhận diện?', 'Peroxisome', ['Ribosome', 'Nhân con', 'Trung tử'], 'Catalase phân giải hydrogen peroxide là dấu hiệu điển hình.']
    ]
  )),
  ...group('specialized', 'bio10-qt25', 'BIO10-M2-O06', 'bio10-qt25-st2', cases(
    'Suy cấu trúc và số lượng bào quan từ chức năng chuyên hóa của tế bào.',
    'Không cho rằng mọi tế bào có cùng tỉ lệ bào quan hoặc một cấu trúc chỉ có một chức năng.',
    [
      ['Tế bào hấp thu ở ruột có nhiều vi nhung mao để làm gì?', 'Tăng diện tích bề mặt trao đổi', ['Giảm tiếp xúc chất dinh dưỡng', 'Tạo chromosome', 'Thay thế ribosome'], 'Gấp nếp bề mặt tăng số protein vận chuyển.'],
      ['Tế bào cơ co liên tục thường giàu gì?', 'Ti thể và hệ protein co rút', ['Lục lạp', 'Thành cellulose dày', 'Vỏ capsid'], 'Nhu cầu ATP và lực cơ học định hình cấu trúc.'],
      ['Tế bào tiết kháng thể giàu bào quan nào?', 'Lưới nội chất hạt và Golgi', ['Chỉ peroxisome', 'Chỉ không bào', 'Chỉ trung tử'], 'Kháng thể là protein tiết cần tổng hợp và đóng gói.'],
      ['Tinh trùng có nhiều ti thể ở đoạn giữa và roi. Ý nghĩa?', 'Cung cấp năng lượng và chuyển động để tiếp cận trứng', ['Tổng hợp cellulose', 'Quang hợp', 'Dự trữ starch'], 'Cấu trúc phù hợp chức năng vận động.'],
      ['Tế bào lông hút có phần kéo dài. Lợi ích?', 'Tăng diện tích tiếp xúc đất để hấp thu nước và ion', ['Giảm trao đổi', 'Tạo nhân thứ hai', 'Ngăn mọi vận chuyển'], 'Hình dạng làm tăng bề mặt mà không tăng thể tích quá nhiều.'],
      ['Hồng cầu người mất nhân và phần lớn bào quan giúp gì?', 'Tăng không gian cho hemoglobin và tránh tự tiêu thụ oxygen', ['Tăng khả năng phân chia', 'Tạo thêm DNA', 'Tổng hợp protein suốt đời'], 'Chuyên hóa tối ưu vận chuyển nhưng giảm sửa chữa.'],
      ['Bảng cho thấy tế bào X có nhiều lysosome, thực bào mạnh. X phù hợp loại nào?', 'Tế bào miễn dịch thực bào', ['Tế bào quang hợp', 'Tế bào dự trữ mỡ duy nhất', 'Hồng cầu trưởng thành'], 'Lysosome hỗ trợ phân giải vật đã nuốt.', 'table'],
      ['Tế bào biểu bì lá trong suốt và ít lục lạp có lợi gì?', 'Cho ánh sáng đi qua đến mô quang hợp bên dưới', ['Ngăn mọi ánh sáng', 'Tăng phân chia vô hạn', 'Tạo ATP bằng lên men duy nhất'], 'Không phải mọi tế bào lá đều cần nhiều lục lạp.'],
      ['Tế bào gan có lưới nội chất trơn phát triển phản ánh chức năng nào?', 'Chuyển hóa lipid và khử độc', ['Dẫn truyền xung thần kinh', 'Tạo thành tế bào vi khuẩn', 'Co cơ'], 'Cấu trúc bào quan theo nhiệm vụ chuyển hóa.'],
      ['Neuron có sợi trục dài đặt ra nhu cầu gì?', 'Vận chuyển nội bào hiệu quả dọc khung xương tế bào', ['Mọi protein phải tổng hợp ở đầu sợi trục', 'Không cần ATP', 'Mất màng sinh chất'], 'Khoảng cách lớn đòi hỏi hệ vận chuyển có hướng.'],
      ['Tế bào tuyến tiết steroid giàu cấu trúc nào?', 'Lưới nội chất trơn', ['Lưới nội chất hạt duy nhất', 'Thành cellulose', 'Ribosome của vi khuẩn'], 'Steroid là lipid nên gắn với hệ enzyme lưới trơn.'],
      ['Chuyên hóa tế bào có nghĩa bộ gene khác hoàn toàn nhau không?', 'Không; phần lớn tế bào cùng cơ thể có bộ gene cơ bản giống nhưng biểu hiện gene khác', ['Có, mỗi loại tế bào là một loài', 'Có, tế bào cơ không có DNA', 'Không vì mọi tế bào có chức năng giống nhau'], 'Điều hòa biểu hiện tạo cấu trúc và chức năng khác.']
    ]
  )),
  ...group('compare', 'bio10-qt26', 'BIO10-M2-O07', 'bio10-qt26-st2', cases(
    'So sánh kiểu tế bào bằng nhiều tiêu chí thay vì dựa vào một cấu trúc đơn lẻ.',
    'Không dùng một dấu hiệu không tuyệt đối để gán loại tế bào chắc chắn.',
    [
      ['Đặc điểm phân biệt mạnh giữa nhân sơ và nhân thực?', 'Có hay không có nhân được bao bởi màng và hệ bào quan màng phát triển', ['Có DNA hay không', 'Có ribosome hay không', 'Có màng sinh chất hay không'], 'Cả hai đều có DNA, ribosome và màng.'],
      ['Tế bào thực vật và động vật đều có gì?', 'Màng sinh chất, nhân, ti thể và ribosome', ['Thành cellulose', 'Lục lạp ở mọi tế bào', 'Không bào trung tâm lớn'], 'Nhiều cấu trúc nhân thực là chung.'],
      ['Thành tế bào có đủ để khẳng định mẫu là thực vật không?', 'Không; nấm và vi khuẩn cũng có thành nhưng thành phần khác', ['Có vì chỉ thực vật có thành', 'Có vì thành luôn là cellulose', 'Không vì thực vật không có thành'], 'Cần kết hợp thành phần thành và bào quan.'],
      ['Một tế bào có lục lạp, thành cellulose và không bào lớn phù hợp nhất?', 'Tế bào thực vật quang hợp', ['Tế bào động vật', 'Vi khuẩn', 'Virus'], 'Tổ hợp ba dấu hiệu có sức phân loại mạnh.'],
      ['Tế bào nấm khác tế bào thực vật nổi bật ở đâu?', 'Nấm không có lục lạp và thành chủ yếu chứa chitin', ['Nấm là nhân sơ', 'Nấm không có màng', 'Nấm luôn có cellulose và quang hợp'], 'Nấm là nhân thực nhưng khác thành phần thành và dinh dưỡng.'],
      ['Ribosome vi khuẩn và tế bào nhân thực có chung chức năng nào?', 'Dịch mã tổng hợp protein', ['Sao chép DNA', 'Tạo lớp kép màng', 'Phân giải mọi chất'], 'Kích thước có thể khác nhưng chức năng nền tảng bảo tồn.'],
      ['Bảng: X có DNA vòng, không nhân; Y có DNA thẳng trong nhân. X và Y?', 'X nhân sơ, Y nhân thực', ['Cả hai virus', 'X động vật, Y vi khuẩn', 'Cả hai không phải tế bào'], 'Tổ chức vật chất di truyền là tiêu chí chính.', 'table'],
      ['Tại sao tế bào động vật không vỡ thường xuyên dù không có thành?', 'Môi trường nội môi được điều hòa và màng cùng khung xương duy trì cấu trúc', ['Động vật không chứa nước', 'Màng động vật làm từ cellulose', 'Mọi tế bào động vật sống trong ưu trương'], 'Không thể suy một cấu trúc thiếu là tế bào không ổn định trong mọi bối cảnh.'],
      ['Một tế bào lá ở rễ có thể không có lục lạp. Điều này nói gì?', 'Không phải mọi tế bào thực vật đều có lục lạp; chức năng và vị trí quyết định', ['Tế bào đó là động vật', 'Thực vật không có lục lạp', 'Lục lạp nằm ngoài tế bào'], 'Dấu hiệu phân loại cần hiểu ngoại lệ mô chuyên hóa.'],
      ['Ti thể và lục lạp giống nhau ở điểm nào?', 'Có hai màng, DNA riêng và liên quan chuyển hóa năng lượng', ['Cả hai chỉ có ở động vật', 'Cả hai tạo protein tiết', 'Cả hai là thành tế bào'], 'Các đặc điểm này hỗ trợ nguồn gốc nội cộng sinh.'],
      ['So sánh kích thước nhân sơ–nhân thực chỉ bằng một mẫu có đáng tin?', 'Không; có khoảng biến thiên và cần nhiều tiêu chí, nhiều mẫu', ['Có vì một mẫu đại diện mọi loài', 'Có vì kích thước không bao giờ chồng lấp', 'Không vì không thể đo tế bào'], 'Phân loại không nên dựa vào một giá trị đơn lẻ.'],
      ['Khẳng định “nhân thực tiến hóa hơn nên mọi chức năng đều tốt hơn nhân sơ” sai ở đâu?', 'Tiến hóa tạo thích nghi khác nhau, không phải thang xếp hạng mọi chức năng', ['Nhân sơ không sống', 'Nhân thực không có DNA', 'Mọi tế bào giống nhau'], 'Mỗi kiểu tổ chức có ưu thế trong môi trường và chức năng riêng.']
    ]
  )),
  ...group('microscope', 'bio10-qt27', 'BIO10-M2-O08', 'bio10-qt27-st2', cases(
    'Chọn thao tác kính hiển vi, chuẩn bị tiêu bản và nhận diện cấu trúc từ ảnh.',
    'Không nhầm độ phóng đại với độ phân giải hoặc kết luận cấu trúc khi ảnh không đủ khả năng phân giải.',
    [
      ['Khi bắt đầu quan sát tiêu bản nên dùng vật kính nào?', 'Vật kính nhỏ để tìm mẫu và lấy nét an toàn', ['Vật kính lớn nhất ngay lập tức', 'Không cần ánh sáng', 'Tháo thị kính'], 'Trường nhìn rộng giúp định vị mẫu.'],
      ['Chuyển sang vật kính lớn, thao tác lấy nét an toàn?', 'Dùng ốc vi cấp và quan sát khoảng cách vật kính–lam', ['Vặn mạnh ốc sơ cấp', 'Ấn vật kính vào lam', 'Di chuyển lam ngẫu nhiên'], 'Ở độ phóng đại cao, khoảng làm việc nhỏ.'],
      ['Độ phóng đại tổng được tính thế nào?', 'Thị kính nhân vật kính', ['Thị kính cộng vật kính', 'Vật kính chia thị kính', 'Chỉ dùng số trên đèn'], 'Hai hệ thấu kính phóng đại liên tiếp.'],
      ['Tăng phóng đại nhưng ảnh không thêm chi tiết nghĩa là gì?', 'Đã vượt khả năng phân giải hữu ích', ['Mọi cấu trúc đã lớn hơn', 'Độ phân giải tăng vô hạn', 'Tiêu bản biến mất'], 'Phóng đại rỗng không tạo thông tin mới.'],
      ['Nhuộm mẫu thường giúp gì?', 'Tăng tương phản giữa các cấu trúc', ['Tăng kích thước thật tế bào', 'Tạo thêm bào quan', 'Thay đổi loài'], 'Nhiều tế bào gần trong suốt nên cần tương phản.'],
      ['Vì sao đặt lá kính nghiêng khi đậy tiêu bản?', 'Giảm bọt khí mắc dưới lá kính', ['Làm tế bào phân chia', 'Tăng độ phóng đại', 'Tạo màu tự nhiên'], 'Đẩy chất lỏng dần giúp hạn chế bọt.'],
      ['Ảnh thấy thành rõ, không bào lớn và nhiều cấu trúc xanh. Mẫu phù hợp?', 'Tế bào thực vật quang hợp', ['Hồng cầu người', 'Vi khuẩn không lục lạp', 'Virus'], 'Tổ hợp thành–không bào–lục lạp đặc trưng.', 'diagram'],
      ['Tiêu bản quá dày gây khó khăn gì?', 'Ánh sáng truyền kém và nhiều lớp tế bào chồng nhau', ['Tăng độ phân giải', 'Làm mọi tế bào lớn hơn', 'Loại bỏ nhuộm'], 'Mẫu mỏng giúp tạo ảnh rõ một lớp.'],
      ['Mẫu chạy khỏi trường nhìn khi đẩy lam sang phải. Ảnh trong kính di chuyển theo hướng nào?', 'Sang trái do ảnh bị đảo', ['Cùng sang phải', 'Không di chuyển', 'Lên trên trong mọi trường hợp'], 'Hệ quang học tạo ảnh đảo chiều.'],
      ['Muốn quan sát bề mặt tế bào ở độ phân giải rất cao nên cân nhắc gì?', 'Kính hiển vi điện tử quét với chuẩn bị mẫu phù hợp', ['Kính lúp cầm tay', 'Chỉ thị kính 5×', 'Đo pH'], 'SEM cung cấp thông tin bề mặt ở độ phân giải cao.'],
      ['Muốn theo dõi bào quan trong tế bào sống nên ưu tiên?', 'Kính huỳnh quang với dấu đánh phù hợp và điều kiện ít gây độc', ['Kính điện tử truyền qua trên mẫu sống', 'Đun sôi mẫu', 'Nhuộm cố định phá tế bào rồi theo dõi động'], 'Quan sát sống cần phương pháp không phá hủy.'],
      ['Chỉ thấy nhân mà không thấy màng tế bào trong ảnh có chứng minh tế bào không có màng không?', 'Không; tương phản hoặc độ phân giải có thể không đủ để thấy màng', ['Có vì ảnh luôn hiển thị mọi cấu trúc', 'Có vì nhân thay thế màng', 'Không vì tế bào không cần màng'], 'Vắng tín hiệu không luôn đồng nghĩa vắng cấu trúc.']
    ]
  )),
  ...group('microscope-data', 'bio10-qt27', 'BIO10-M2-O08', 'bio10-qt27-st3', cases(
    'Đọc thước ảnh, trường nhìn và dữ liệu lặp để đo tế bào và đánh giá chất lượng quan sát.',
    'Không tăng chữ số vượt độ chính xác, và không đo ảnh khi chưa biết thang hoặc điều kiện chụp.',
    [
      ['Thước ảnh 20 µm dài 10 mm trên màn hình; tế bào dài 25 mm. Chiều dài thật?', '50 µm', ['2,5 µm', '200 µm', '500 µm'], 'Tỉ lệ là 2 µm cho mỗi mm trên ảnh, nên 25 mm ứng với 50 µm.', 'equation'],
      ['Trường nhìn đường kính 1,2 mm chứa khoảng 6 tế bào xếp ngang. Kích thước trung bình?', 'Khoảng 0,2 mm nếu các tế bào chiếm gần hết đường kính', ['7,2 mm', '0,02 µm', '6 mm'], 'Chia đường kính trường nhìn cho số tế bào là ước lượng ban đầu.', 'equation'],
      ['Khi đổi vật kính 10× sang 40×, đường kính trường nhìn thường thay đổi thế nào?', 'Giảm xấp xỉ 4 lần nếu hệ kính còn lại không đổi', ['Tăng 4 lần', 'Không đổi', 'Tăng 40 lần'], 'Trường nhìn tỉ lệ nghịch độ phóng đại vật kính.'],
      ['Ba lần đo tế bào cho 48, 49 và 95 µm. Cần làm gì trước khi lấy trung bình?', 'Kiểm tra phép đo 95 µm có phải ngoại lệ do nhầm thang hay chọn tế bào khác', ['Xóa ngay không cần lí do', 'Chỉ giữ 95', 'Cộng thêm một số tùy ý'], 'Giá trị lệch cần được điều tra theo tiêu chí khách quan.', 'table'],
      ['Ảnh A và B cùng tế bào nhưng B phóng to hơn, không có thước. Có thể kết luận tế bào ở B lớn hơn thật không?', 'Không; kích thước hiển thị phụ thuộc phóng đại', ['Có vì ảnh lớn hơn', 'Có vì màn hình sáng hơn', 'Không vì tế bào không có kích thước'], 'Phải dùng thước ảnh hoặc thông tin phóng đại.'],
      ['Đếm tế bào ở ba vùng chỉ gần mép tiêu bản. Hạn chế?', 'Mẫu vị trí không đại diện nếu tế bào phân bố không đều', ['Đếm nhiều vùng luôn đủ dù chọn thiên lệch', 'Mép không có tế bào', 'Không thể đếm tế bào'], 'Cần quy tắc chọn trường nhìn ngẫu nhiên hoặc hệ thống.'],
      ['Bảng cho thấy sau nhuộm số tế bào “mất màng” tăng. Kết luận thận trọng?', 'Thuốc nhuộm hoặc cố định có thể làm thay đổi màng; cần đối chứng không nhuộm', ['Nhuộm chứng minh màng không tồn tại', 'Mọi tế bào tự phá màng', 'Màu không ảnh hưởng quan sát'], 'Chuẩn bị mẫu có thể tạo artefact.', 'table'],
      ['Một ảnh có độ phóng đại 1000× nhưng độ phân giải 0,2 µm. Hai điểm cách 0,1 µm có thấy tách biệt không?', 'Không, vì khoảng cách nhỏ hơn giới hạn phân giải', ['Có vì phóng đại lớn', 'Có nếu màn hình rộng', 'Không vì mọi ảnh hiển vi đều mờ'], 'Độ phân giải quyết định khả năng phân biệt hai điểm.'],
      ['Đo 30 tế bào thay vì một tế bào có lợi gì?', 'Ước lượng được kích thước điển hình và biến thiên giữa tế bào', ['Làm mọi tế bào bằng nhau', 'Loại nhu cầu hiệu chuẩn', 'Tăng độ phóng đại'], 'Nhiều mẫu phản ánh phân bố tốt hơn.'],
      ['Ảnh huỳnh quang có tín hiệu cả ở mẫu không gắn đầu dò. Điều này gợi gì?', 'Tự phát huỳnh quang hoặc tín hiệu nền; cần hiệu chỉnh đối chứng', ['Đầu dò đặc hiệu tuyệt đối', 'Mọi tín hiệu là cấu trúc đích', 'Mẫu đối chứng không có vai trò'], 'Đối chứng âm định lượng mức nền.', 'experiment'],
      ['Hai người đếm cùng ảnh cho kết quả khác xa. Cải tiến?', 'Thống nhất tiêu chí nhận diện, làm mù và đánh giá độ nhất quán người chấm', ['Chọn người cho số lớn hơn', 'Cộng hai số rồi coi đúng tuyệt đối', 'Xóa ảnh'], 'Sai khác người quan sát cần được chuẩn hóa.'],
      ['Phần mềm phân đoạn gộp hai tế bào sát nhau thành một. Hậu quả?', 'Ước lượng số tế bào thấp và kích thước trung bình cao giả tạo', ['Số tế bào cao hơn', 'Không ảnh hưởng bất cứ chỉ số nào', 'Tạo thêm tế bào thật'], 'Lỗi phân đoạn tác động đồng thời đếm và đo diện tích.']
    ]
  ))
];

export const g10BiologyModule2Adaptive = buildBiologyAdaptiveBank(seeds);

