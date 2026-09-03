import { bioProblem, biologyTable } from './helpers';

const topicId = 'bio10-adv-molecule';

export const moleculeProblems = [
  bioProblem(topicId, {
    content: 'Hai cốc có cùng khối lượng nước và dầu được cung cấp cùng một lượng nhiệt. Nhiệt độ dầu tăng nhiều hơn. Giải thích nào phù hợp nhất với vai trò sinh học của nước?',
    correct: 'Liên kết hydrogen làm nước cần nhiều năng lượng hơn để tăng nhiệt độ, giúp môi trường tế bào ổn định nhiệt.',
    distractors: ['Nước không hấp thụ nhiệt vì phân tử nước không chuyển động.', 'Liên kết cộng hóa trị O–H bị phá vỡ mỗi khi nước nóng lên.', 'Dầu có nhiều liên kết hydrogen hơn nên nóng nhanh hơn.'],
    insight: 'Nhiệt dung cao của nước liên quan mạng liên kết hydrogen giữa các phân tử, không phải phá liên kết O–H.',
    evidence: 'Cùng nhiệt lượng và khối lượng nhưng nước tăng nhiệt ít hơn, nghĩa là nhiệt dung riêng lớn hơn.',
    mechanism: 'Một phần năng lượng được dùng làm thay đổi mạng tương tác giữa các phân tử nước trước khi chuyển thành chuyển động nhiệt mạnh hơn.',
    reasoning: ['Sự ổn định nhiệt giúp enzyme và màng tránh biến động đột ngột.', 'Liên kết hydrogen yếu hơn liên kết cộng hóa trị và liên tục hình thành–phá vỡ.'],
    distractorReasons: ['phủ nhận chuyển động nhiệt của phân tử.', 'nhầm tương tác giữa phân tử với liên kết trong phân tử.', 'đảo ngược đặc điểm phân cực của nước và dầu.'],
    tags: ['nước', 'liên kết hydrogen']
  }),
  bioProblem(topicId, {
    content: 'Các túi màng nhân tạo có thành phần khác nhau được đo độ rò của chất tan nhỏ ở 25 °C. Kết luận nào hợp lí nhất?',
    correct: 'Trong hệ này, tăng tỉ lệ acid béo không no làm tăng tính thấm, còn cholesterol làm giảm phần rò so với màng không cholesterol.',
    distractors: ['Cholesterol luôn làm màng đông cứng hoàn toàn ở mọi nhiệt độ.', 'Acid béo no tạo nhiều chỗ gấp khúc nên màng rò mạnh hơn.', 'Protein vận chuyển là nguyên nhân duy nhất vì mọi túi đều chứa protein.'],
    insight: 'So sánh cặp chỉ khác một thành phần để tách ảnh hưởng của độ không no và cholesterol.',
    evidence: 'Màng 70% không no rò nhiều hơn màng 30% không no; thêm cholesterol vào cùng nền 70% làm độ rò giảm.',
    mechanism: 'Nối đôi cis tạo gấp khúc, giảm đóng gói chặt; cholesterol lấp khoảng trống và điều hòa độ linh động trong điều kiện khảo sát.',
    reasoning: ['Không được biến xu hướng ở 25 °C thành quy luật tuyệt đối cho mọi nhiệt độ.', 'Đề mô tả túi lipid nhân tạo nên không cần viện dẫn protein.'],
    distractorReasons: ['dùng từ “luôn” và “hoàn toàn” vượt dữ liệu.', 'gán gấp khúc cho acid béo no.', 'thêm thành phần không có trong hệ thí nghiệm.'],
    tags: ['phospholipid', 'tính lỏng màng'],
    stimulus: biologyTable('bio10-adv-molecule-02', 'Tính thấm của túi lipid', 'Các túi có cùng kích thước trung bình.', 'Chất tan bị rò sau 10 phút', [{ key: 'vesicle', label: 'Túi' }, { key: 'unsat', label: 'Acid béo không no', unit: '%' }, { key: 'chol', label: 'Cholesterol' }, { key: 'leak', label: 'Rò', unit: '%' }], [{ vesicle: 'A', unsat: 30, chol: 'Không', leak: 12 }, { vesicle: 'B', unsat: 70, chol: 'Không', leak: 31 }, { vesicle: 'C', unsat: 70, chol: 'Có', leak: 18 }])
  }),
  bioProblem(topicId, {
    content: 'Một loài vi khuẩn tăng tỉ lệ acid béo không no trong màng khi chuyển từ 30 °C xuống 10 °C. Lợi ích trực tiếp nhất là gì?',
    correct: 'Giảm khả năng các đuôi lipid đóng gói quá chặt, giúp màng duy trì độ linh động ở nhiệt độ thấp.',
    distractors: ['Làm màng tạo nhiều ATP hơn mà không cần protein.', 'Biến lớp kép phospholipid thành một lớp lipid đơn.', 'Ngăn hoàn toàn mọi chất khuếch tán qua màng.'],
    insight: 'Tế bào điều chỉnh thành phần lipid để bù tác động làm giảm chuyển động phân tử của nhiệt độ thấp.',
    evidence: 'Thay đổi xảy ra đúng khi nhiệt độ hạ và hướng thay đổi là tăng nối đôi cis.',
    mechanism: 'Các chỗ gấp khúc cản tương tác sát giữa đuôi hydrocarbon, hạ nhiệt độ chuyển pha của màng.',
    reasoning: ['Đây là điều hòa tính lỏng, không trực tiếp tạo năng lượng.', 'Màng vẫn là lớp kép và vẫn có tính thấm chọn lọc.'],
    distractorReasons: ['gán chức năng tổng hợp ATP cho đuôi lipid.', 'suy ra sai kiến trúc màng.', 'biến điều hòa tính thấm thành phong tỏa tuyệt đối.'],
    tags: ['lipid', 'thích nghi nhiệt độ']
  }),
  bioProblem(topicId, {
    content: 'Hai polysaccharide X và Y đều chỉ gồm glucose. X có nhiều điểm phân nhánh hơn Y. Khi cùng khối lượng được enzyme cắt từ các đầu mạch, X giải phóng glucose nhanh hơn. Giải thích tốt nhất là gì?',
    correct: 'Phân nhánh tạo nhiều đầu mạch để nhiều phân tử enzyme tác động đồng thời.',
    distractors: ['Mỗi glucose trong X chứa nhiều năng lượng hóa học hơn glucose trong Y.', 'Phân nhánh biến liên kết glycosidic thành liên kết peptide.', 'Y không thể bị thủy phân vì mọi polysaccharide thẳng đều bền tuyệt đối.'],
    insight: 'Khác biệt tốc độ đến từ số vị trí enzyme tiếp cận, không phải bản chất đơn phân glucose.',
    evidence: 'Hai chất có cùng đơn phân và khối lượng; biến được nêu là mức độ phân nhánh và enzyme cắt ở đầu mạch.',
    mechanism: 'Nhiều đầu không khử làm tăng số điểm phản ứng diễn ra song song.',
    reasoning: ['Năng lượng của một đơn phân không đổi vì nó nằm trong polymer khác.', 'Kiểu liên kết vẫn là glycosidic.'],
    distractorReasons: ['nhầm kiến trúc polymer với năng lượng nội tại của glucose.', 'đổi sai loại liên kết hóa học.', 'dùng mệnh đề tuyệt đối trái với khả năng thủy phân polysaccharide.'],
    tags: ['carbohydrate', 'phân nhánh']
  }),
  bioProblem(topicId, {
    content: 'Protein P mất hoạt tính trong urea đậm đặc nhưng phục hồi gần như hoàn toàn sau khi loại urea; nếu đồng thời cắt đứt chuỗi peptide thì không phục hồi. Kết luận nào đúng nhất?',
    correct: 'Trình tự amino acid chứa thông tin cho sự gấp cuộn; urea chủ yếu phá tương tác duy trì cấu trúc không gian chứ không cắt mạch chính.',
    distractors: ['Hoạt tính protein không phụ thuộc cấu trúc không gian.', 'Urea đã cắt toàn bộ liên kết peptide rồi chúng tự nối lại.', 'Mọi protein sau biến tính đều chắc chắn phục hồi hoàn toàn.'],
    insight: 'Khả năng tái gấp khi mạch chính còn nguyên phân biệt biến tính với thủy phân protein.',
    evidence: 'Loại urea giúp P phục hồi, nhưng khi chuỗi peptide bị cắt thì cùng điều kiện không cứu được hoạt tính.',
    mechanism: 'Các tương tác yếu có thể tái lập theo trình tự bậc một; mất tính liên tục của chuỗi làm mất đường gấp đúng.',
    reasoning: ['Kết quả của P không cho phép khái quát cho mọi protein.', 'Hoạt tính phục hồi chứng tỏ cấu trúc không gian được tái tạo.'],
    distractorReasons: ['trái với quan sát mất và phục hồi hoạt tính.', 'đề không có cơ chế tái tạo liên kết peptide.', 'mở rộng một trường hợp thành quy luật tuyệt đối.'],
    tags: ['protein', 'biến tính–tái gấp']
  }),
  bioProblem(topicId, {
    content: 'Sau phản ứng enzyme, lượng enzyme đo được gần như không đổi nhưng cơ chất giảm. Nhận định nào đúng nhất?',
    correct: 'Enzyme tham gia tạo phức trung gian rồi được giải phóng, nên có thể xúc tác nhiều chu kì nếu chưa bị bất hoạt.',
    distractors: ['Enzyme không tiếp xúc với cơ chất trong suốt phản ứng.', 'Enzyme cung cấp năng lượng tự do để phản ứng tự diễn ra.', 'Không đổi khối lượng chứng minh enzyme không thay đổi cấu hình tạm thời.'],
    insight: 'Không bị tiêu hao không đồng nghĩa không tham gia hoặc không đổi cấu hình.',
    evidence: 'Cơ chất bị chuyển hóa trong khi enzyme còn lại sau phản ứng.',
    mechanism: 'Enzyme liên kết cơ chất tại trung tâm hoạt động, ổn định trạng thái chuyển tiếp rồi tái sinh sau khi giải phóng sản phẩm.',
    reasoning: ['Nguồn năng lượng tự do đến từ chênh lệch giữa chất phản ứng và sản phẩm.', 'Biến đổi cấu hình tạm thời vẫn tương thích với việc lượng enzyme cuối cùng không đổi.'],
    distractorReasons: ['phủ nhận phức enzyme–cơ chất.', 'nhầm xúc tác với cung cấp năng lượng.', 'suy diễn cấu hình từ phép đo lượng.'],
    tags: ['protein', 'enzyme']
  }),
  bioProblem(topicId, {
    content: 'Một DNA mạch kép có 22% adenine. Tỉ lệ nucleotide có liên kết bổ sung bằng ba liên kết hydrogen là bao nhiêu?',
    correct: '56%.',
    distractors: ['22%.', '28%.', '44%.'],
    insight: 'Trong DNA mạch kép, A = T; phần còn lại là G + C và cặp G–C có ba liên kết hydrogen.',
    evidence: 'A chiếm 22% nên T cũng 22%; A + T = 44%.',
    mechanism: 'Theo nguyên tắc bổ sung, G + C = 100% − 44% = 56%.',
    reasoning: ['Câu hỏi hỏi tỉ lệ nucleotide thuộc cặp G–C, không hỏi riêng G.', 'Nếu hỏi riêng từng loại thì G = C = 28%.'],
    distractorReasons: ['lấy trực tiếp tỉ lệ A.', 'chỉ lấy một trong hai loại G hoặc C.', 'nhầm phần A + T với G + C.'],
    tags: ['DNA', 'nguyên tắc bổ sung']
  }),
  bioProblem(topicId, {
    content: 'RNA bị thủy phân nhanh trong môi trường kiềm nhẹ hơn DNA. Khác biệt cấu trúc nào giải thích trực tiếp nhất?',
    correct: 'Ribose của RNA có nhóm 2′-OH có thể tham gia phản ứng cắt liên kết phosphodiester.',
    distractors: ['RNA luôn có hai mạch còn DNA luôn có một mạch.', 'RNA chứa thymine nên kém bền hơn.', 'DNA không có liên kết phosphodiester.'],
    insight: 'Nhóm hydroxyl ở carbon 2′ là khác biệt hóa học quyết định độ nhạy kiềm.',
    evidence: 'Cả hai polymer đều có khung đường–phosphate, nhưng đường của RNA là ribose còn DNA là deoxyribose.',
    mechanism: '2′-OH có thể bị khử proton và tấn công nội phân tử vào phosphate lân cận, làm đứt mạch RNA.',
    reasoning: ['Số mạch không phải quy tắc tuyệt đối và không giải thích phản ứng kiềm.', 'RNA thường dùng uracil, không phải thymine.'],
    distractorReasons: ['đảo sai đặc điểm điển hình và dùng từ “luôn”.', 'gán sai base nitrogen.', 'phủ nhận liên kết tạo nên khung DNA.'],
    tags: ['RNA', 'cấu trúc nucleotide']
  }),
  bioProblem(topicId, {
    content: 'Ba loại màng nhân tạo được làm lạnh dần. Màng nào dự kiến giữ tính linh động tốt nhất ở nhiệt độ thấp?',
    correct: 'Màng có nhiều đuôi ngắn, không no và một lượng sterol điều hòa phù hợp.',
    distractors: ['Màng có toàn đuôi dài, no và không sterol.', 'Màng chỉ gồm triglyceride không có đầu phân cực.', 'Màng có các đuôi no dài được liên kết cộng hóa trị với nhau.'],
    insight: 'Đuôi ngắn và không no làm giảm tương tác kị nước giữa các đuôi, hạn chế đóng gói khi lạnh.',
    evidence: 'Nhiệt độ thấp làm chuyển động lipid giảm; cấu trúc gây gấp khúc và giảm diện tích tiếp xúc sẽ chống đông đặc.',
    mechanism: 'Sterol chen giữa phospholipid và có thể hạn chế chúng xếp quá chặt trong điều kiện lạnh.',
    reasoning: ['Triglyceride không tự tạo lớp kép ổn định như phospholipid.', 'Nối cộng hóa trị giữa các đuôi sẽ làm màng quá cứng.'],
    distractorReasons: ['chọn tổ hợp làm tăng đóng gói.', 'dùng loại lipid không có kiến trúc lưỡng cực thích hợp.', 'tạo mạng liên kết làm mất tính lỏng.'],
    tags: ['màng sinh chất', 'sterol']
  }),
  bioProblem(topicId, {
    content: 'Protein X được phân tích trước và sau khi thay một amino acid kị nước nằm trong lõi bằng amino acid tích điện. Kết quả phù hợp nhất là gì?',
    correct: 'X dễ mất cấu trúc không gian hoặc giảm độ bền vì điện tích mới không thuận lợi trong lõi kị nước.',
    distractors: ['Chắc chắn không ảnh hưởng vì chỉ thay một amino acid.', 'Chỉ cấu trúc bậc một thay đổi, mọi bậc cao luôn giữ nguyên.', 'Protein sẽ tự động hình thành thêm một liên kết peptide ở vị trí đó.'],
    insight: 'Một thay đổi nhỏ ở vị trí chiến lược có thể làm lệch mạng tương tác duy trì gấp cuộn.',
    evidence: 'Vị trí được nêu nằm trong lõi kị nước, nơi các nhóm không phân cực thường được che khỏi nước.',
    mechanism: 'Đưa điện tích vào lõi gây bất lợi năng lượng hoặc buộc protein sắp xếp lại để hydrat hóa nhóm đó.',
    reasoning: ['Mức ảnh hưởng phụ thuộc vị trí chứ không chỉ số lượng thay thế.', 'Cấu trúc bậc cao được quyết định bởi tương tác của chuỗi bậc một.'],
    distractorReasons: ['coi mọi vị trí trong protein tương đương.', 'tách rời sai các bậc cấu trúc.', 'bịa thêm phản ứng không do thay thế amino acid gây ra.'],
    tags: ['protein', 'cấu trúc–chức năng']
  }),
  bioProblem(topicId, {
    content: 'Một enzyme gồm hai tiểu đơn vị. Khi phá tương tác giữa các tiểu đơn vị, mỗi chuỗi vẫn còn nguyên nhưng enzyme mất hoạt tính. Bậc cấu trúc bị ảnh hưởng trực tiếp nhất là gì?',
    correct: 'Cấu trúc bậc bốn.',
    distractors: ['Cấu trúc bậc một.', 'Liên kết phosphodiester.', 'Cấu trúc của nucleotide.'],
    insight: 'Bậc bốn mô tả sự sắp xếp và tương tác giữa nhiều chuỗi polypeptide.',
    evidence: 'Mỗi chuỗi còn nguyên nhưng phức nhiều tiểu đơn vị bị tách.',
    mechanism: 'Trung tâm hoạt động hoặc ổn định tổng thể có thể cần bề mặt tiếp xúc giữa các tiểu đơn vị.',
    reasoning: ['Bậc một vẫn được bảo toàn vì chuỗi peptide không bị cắt.', 'Phosphodiester thuộc nucleic acid, không nối các tiểu đơn vị protein.'],
    distractorReasons: ['nhầm mất tương tác tiểu đơn vị với đứt chuỗi.', 'dùng loại liên kết của nucleic acid.', 'đổi đối tượng từ protein sang nucleotide.'],
    tags: ['protein', 'cấu trúc bậc bốn']
  }),
  bioProblem(topicId, {
    content: 'Túi thẩm tích chứa tinh bột và glucose được đặt trong nước. Màng cho glucose và iodine đi qua nhưng không cho tinh bột qua. Sau một giờ, hiện tượng nào hợp lí nhất?',
    correct: 'Glucose xuất hiện ngoài túi; iodine vào túi làm hỗn hợp tinh bột chuyển màu, còn tinh bột vẫn ở trong.',
    distractors: ['Tinh bột khuếch tán ra ngoài nhanh hơn glucose vì phân tử lớn hơn.', 'Iodine không thể đi vào vì ngoài túi không có tinh bột.', 'Mọi chất đạt nồng độ bằng nhau vì màng cho tất cả đi qua.'],
    insight: 'Phải xét riêng tính thấm của từng chất, không coi màng là “mở” hoặc “đóng” cho toàn bộ dung dịch.',
    evidence: 'Đề cho glucose và iodine qua được, còn tinh bột không qua.',
    mechanism: 'Các phân tử thấm được khuếch tán theo gradient; iodine tạo phức màu với tinh bột khi gặp nhau trong túi.',
    reasoning: ['Kích thước lớn thường làm tinh bột bị giữ lại.', 'Không cần tinh bột ở ngoài để iodine khuếch tán vào.'],
    distractorReasons: ['đảo quan hệ kích thước–khả năng qua màng.', 'nhầm phản ứng sau khuếch tán với điều kiện để khuếch tán.', 'bỏ tính thấm chọn lọc đã cho.'],
    tags: ['phân tử sinh học', 'màng bán thấm']
  }),
  bioProblem(topicId, {
    content: 'Bốn mẫu thực phẩm được thử bằng Benedict sau khi đun nóng và Biuret. Mẫu nào chứa cả đường khử và protein?',
    correct: 'Mẫu C.',
    distractors: ['Mẫu A.', 'Mẫu B.', 'Mẫu D.'],
    insight: 'Cần giao hai điều kiện: Benedict dương tính và Biuret dương tính.',
    evidence: 'C có kết tủa cam với Benedict và màu tím với Biuret; các mẫu khác chỉ dương tính một hoặc không phép thử nào.',
    mechanism: 'Benedict phát hiện nhóm khử trong điều kiện đun; Biuret phản ứng với nhiều liên kết peptide.',
    reasoning: ['Không suy protein từ màu Benedict.', 'Màu xanh giữ nguyên ở Benedict được xem là âm tính trong bảng.'],
    distractorReasons: ['chỉ dương tính với Benedict.', 'chỉ dương tính với Biuret.', 'âm tính với cả hai phép thử.'],
    tags: ['nhận biết chất', 'đọc bảng'],
    stimulus: biologyTable('bio10-adv-molecule-13', 'Phép thử thực phẩm', 'Màu ghi sau đúng thời gian phản ứng.', 'Kết quả định tính', [{ key: 'sample', label: 'Mẫu' }, { key: 'benedict', label: 'Benedict' }, { key: 'biuret', label: 'Biuret' }], [{ sample: 'A', benedict: 'Cam', biuret: 'Xanh' }, { sample: 'B', benedict: 'Xanh', biuret: 'Tím' }, { sample: 'C', benedict: 'Cam', biuret: 'Tím' }, { sample: 'D', benedict: 'Xanh', biuret: 'Xanh' }])
  }),
  bioProblem(topicId, {
    content: 'Mẫu acid nucleic có tỉ số hấp thụ A260/A280 thấp bất thường và hoạt tính protease làm tỉ số tăng. Diễn giải phù hợp nhất là gì?',
    correct: 'Mẫu ban đầu có lẫn protein hấp thụ tương đối ở 280 nm; protease làm giảm phần nhiễu protein.',
    distractors: ['Protease tổng hợp thêm DNA nên A260 tăng.', 'Tỉ số thấp chứng minh mẫu chỉ chứa RNA tinh khiết.', 'Protein không hấp thụ ánh sáng nên protease không thể ảnh hưởng.'],
    insight: 'Thay đổi sau xử lí đặc hiệu giúp xác định nguồn nhiễu, không chỉ dựa vào một con số.',
    evidence: 'Tỉ số tăng sau khi protein bị protease phân giải, liên kết trực tiếp tín hiệu bất thường với protein.',
    mechanism: 'Protein thơm góp phần hấp thụ vùng 280 nm; giảm protein làm A260/A280 tăng tương đối.',
    reasoning: ['Protease thủy phân protein, không trùng hợp nucleotide.', 'Tỉ số là chỉ báo độ tinh sạch, không tự phân biệt hoàn toàn DNA với RNA.'],
    distractorReasons: ['gán chức năng tổng hợp nucleic acid cho protease.', 'diễn giải độ tinh sạch sai và quá tuyệt đối.', 'phủ nhận cơ sở quang phổ của phép thử.'],
    tags: ['nucleic acid', 'độ tinh sạch']
  }),
  bioProblem(topicId, {
    content: 'Tế bào được nuôi với glucose có carbon đánh dấu. Sau đó dấu xuất hiện trong CO₂ và một số amino acid. Kết luận tốt nhất là gì?',
    correct: 'Khung carbon của glucose đi vào các con đường phân giải và các chất trung gian có thể được dùng để tổng hợp amino acid.',
    distractors: ['Glucose được chuyển nguyên vẹn thành protein mà không qua phản ứng trung gian.', 'CO₂ đã biến trực tiếp thành mọi amino acid trong tế bào dị dưỡng.', 'Dấu carbon chứng minh nguyên tử carbon tự tạo thêm năng lượng.'],
    insight: 'Truy vết đồng vị theo dõi dòng nguyên tử, không có nghĩa phân tử ban đầu còn nguyên.',
    evidence: 'Dấu có mặt ở cả sản phẩm oxy hóa CO₂ và phân tử xây dựng amino acid.',
    mechanism: 'Chuyển hóa phân nhánh: glucose tạo chất trung gian; một phần bị oxy hóa, phần khác cung cấp bộ khung carbon cho đồng hóa.',
    reasoning: ['Cùng một nguồn carbon có thể đi qua nhiều nhánh.', 'Đồng vị không thay đổi định luật bảo toàn năng lượng.'],
    distractorReasons: ['bỏ qua các bước chuyển hóa và tái sắp xếp nguyên tử.', 'gán cố định CO₂ trực tiếp trong bối cảnh không được nêu.', 'nhầm dấu vết vật chất với nguồn năng lượng mới.'],
    tags: ['đồng vị đánh dấu', 'chuyển hóa']
  }),
  bioProblem(topicId, {
    content: 'Sau khi xử lí nhiệt, mẫu protein có cùng số liên kết peptide nhưng mất khả năng liên kết ligand. Kết luận nào được hỗ trợ mạnh nhất?',
    correct: 'Nhiệt làm thay đổi cấu trúc không gian của vị trí liên kết mà không nhất thiết thủy phân mạch polypeptide.',
    distractors: ['Mọi liên kết peptide đã bị cắt nhưng phép đo không phát hiện.', 'Ligand chỉ nhận biết trình tự amino acid, không phụ thuộc gấp cuộn.', 'Protein đã biến thành carbohydrate.'],
    insight: 'Giữ mạch chính nhưng mất chức năng là dấu hiệu biến tính cấu trúc bậc cao.',
    evidence: 'Số liên kết peptide không đổi loại trừ thủy phân đáng kể; chức năng liên kết giảm cho thấy hình dạng vùng chức năng thay đổi.',
    mechanism: 'Nhiệt phá vỡ hoặc làm xáo trộn các tương tác yếu duy trì cấu trúc bậc hai, ba hoặc bốn.',
    reasoning: ['Chức năng protein phụ thuộc hình học và phân bố nhóm hóa học trong không gian.', 'Không có phản ứng nào chuyển protein thành carbohydrate.'],
    distractorReasons: ['mâu thuẫn với phép đo liên kết peptide.', 'phủ nhận vai trò của cấu trúc ba chiều.', 'vi phạm thành phần và con đường hóa học đã cho.'],
    tags: ['biến tính protein', 'cấu trúc–chức năng'],
    stimulus: biologyTable('bio10-adv-molecule-16', 'Protein trước và sau gia nhiệt', 'Các giá trị chuẩn hóa theo mẫu chưa xử lí.', 'Chỉ số tương đối', [{ key: 'state', label: 'Mẫu' }, { key: 'peptide', label: 'Liên kết peptide', unit: '%' }, { key: 'binding', label: 'Liên kết ligand', unit: '%' }], [{ state: 'Chưa gia nhiệt', peptide: 100, binding: 100 }, { state: 'Gia nhiệt', peptide: 99, binding: 8 }])
  }),
  bioProblem(topicId, {
    content: 'Cellulose và tinh bột đều là polymer glucose nhưng người không tiêu hóa được cellulose bằng enzyme tiêu hóa thông thường. Nguyên nhân trực tiếp nhất là gì?',
    correct: 'Enzyme tiêu hóa tinh bột đặc hiệu với kiểu liên kết α, không phù hợp hình học liên kết β của cellulose.',
    distractors: ['Glucose trong cellulose là một nguyên tố hóa học khác.', 'Cellulose không chứa liên kết glycosidic.', 'Mọi polymer phân nhánh đều không thể tiêu hóa, còn cellulose phân nhánh mạnh.'],
    insight: 'Tính đặc hiệu enzyme phụ thuộc cấu hình liên kết, dù đơn phân giống nhau.',
    evidence: 'Cả hai đều gồm glucose nên khác biệt phải nằm ở cách các đơn phân được nối và cấu trúc polymer.',
    mechanism: 'Liên kết β tạo chuỗi thẳng và không vừa trung tâm hoạt động của enzyme thủy phân liên kết α trong tinh bột.',
    reasoning: ['Cellulose thực tế ít phân nhánh và giàu liên kết hydrogen giữa các chuỗi.', 'Không có sự thay đổi nguyên tố ở glucose.'],
    distractorReasons: ['nhầm đồng phân cấu hình với nguyên tố khác.', 'phủ nhận liên kết nối các đơn phân.', 'mô tả sai cấu trúc cellulose và quy luật tiêu hóa.'],
    tags: ['polysaccharide', 'đặc hiệu enzyme']
  }),
  bioProblem(topicId, {
    content: 'Bốn mẫu acid nucleic được xử lí riêng bằng DNase và RNase. Mẫu nào ban đầu chứa cả DNA và RNA?',
    correct: 'Mẫu 4.',
    distractors: ['Mẫu 1.', 'Mẫu 2.', 'Mẫu 3.'],
    insight: 'Mẫu chứa cả hai phải giảm tín hiệu sau từng enzyme riêng và giảm mạnh nhất khi phối hợp.',
    evidence: 'Mẫu 4 còn 58% sau DNase, 47% sau RNase và 5% khi dùng cả hai; mỗi enzyme loại một phần khác nhau.',
    mechanism: 'DNase thủy phân DNA, RNase thủy phân RNA; phần tín hiệu còn lại sau một enzyme phản ánh thành phần không phải cơ chất của enzyme đó và nền.',
    reasoning: ['Mẫu chỉ DNA sẽ nhạy chủ yếu với DNase.', 'Mẫu chỉ RNA sẽ nhạy chủ yếu với RNase.'],
    distractorReasons: ['chỉ giảm với DNase nên phù hợp mẫu DNA.', 'chỉ giảm với RNase nên phù hợp mẫu RNA.', 'hầu như không giảm với cả hai nên có thể không phải nucleic acid.'],
    tags: ['DNA–RNA', 'enzyme phân giải'],
    stimulus: biologyTable('bio10-adv-molecule-18', 'Xử lí nuclease', 'Tín hiệu ban đầu của mỗi mẫu được chuẩn hóa bằng 100%.', 'Tín hiệu còn lại', [{ key: 'sample', label: 'Mẫu' }, { key: 'dnase', label: 'DNase', unit: '%' }, { key: 'rnase', label: 'RNase', unit: '%' }, { key: 'both', label: 'Cả hai', unit: '%' }], [{ sample: 1, dnase: 6, rnase: 98, both: 5 }, { sample: 2, dnase: 97, rnase: 8, both: 7 }, { sample: 3, dnase: 96, rnase: 95, both: 93 }, { sample: 4, dnase: 58, rnase: 47, both: 5 }])
  })
];
