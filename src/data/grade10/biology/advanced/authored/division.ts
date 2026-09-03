import { bioProblem, biologyTable } from './helpers';

const topicId = 'bio10-adv-division';

export const divisionProblems = [
  bioProblem(topicId, {
    content: 'Quần thể tế bào có hai đỉnh hàm lượng DNA: 2C và 4C, vùng giữa là các tế bào đang nhân đôi. Sau thuốc X, tỉ lệ 4C tăng mạnh nhưng không xuất hiện tế bào 8C. X nhiều khả năng chặn bước nào?',
    correct: 'Chuyển từ G₂/M qua hoàn tất nguyên phân, làm tế bào đã nhân đôi DNA tích ở 4C.',
    distractors: ['Khởi đầu pha S, vì khi đó tế bào phải tích ở 4C.', 'Phiên mã rRNA trong G₁, vì mọi tế bào sẽ thành 8C.', 'Thụ tinh, vì tế bào nuôi cấy bắt buộc tạo hợp tử.'],
    insight: 'Đỉnh 4C tăng cho thấy DNA đã nhân đôi nhưng tế bào chưa trở về hai tế bào 2C.',
    evidence: 'Không có đỉnh 8C nên tế bào không tiếp tục nhân đôi thêm một vòng mà không phân chia.',
    mechanism: 'Điểm kiểm soát G₂/M hoặc thoi phân bào có thể giữ tế bào với bộ DNA đã nhân đôi.',
    reasoning: ['Chặn vào pha S thường làm tăng nhóm 2C.', 'Hàm lượng DNA không đồng nghĩa số nhiễm sắc thể tính theo tâm động.'],
    distractorReasons: ['đọc ngược vị trí tích lũy khi không vào S.', 'gán quan hệ 8C không có cơ sở.', 'đưa quá trình sinh sản không xảy ra trong nuôi cấy này.'],
    tags: ['chu kì tế bào', 'hàm lượng DNA'],
    stimulus: biologyTable('bio10-adv-division-01', 'Phân bố DNA', 'Tỉ lệ phần trăm tế bào.', 'Trước và sau thuốc X', [{ key: 'group', label: 'Nhóm' }, { key: 'two', label: '2C', unit: '%' }, { key: 'between', label: '2C–4C', unit: '%' }, { key: 'four', label: '4C', unit: '%' }], [{ group: 'Đối chứng', two: 55, between: 28, four: 17 }, { group: 'Thuốc X', two: 14, between: 11, four: 75 }])
  }),
  bioProblem(topicId, {
    content: 'Một chất ức chế hình thành vi ống được thêm đúng lúc tế bào bước vào nguyên phân. Hậu quả trực tiếp nào phù hợp nhất?',
    correct: 'Nhiễm sắc thể không gắn và phân li bình thường, tế bào thường bị giữ ở điểm kiểm soát thoi phân bào.',
    distractors: ['DNA không thể nhân đôi vì pha S chỉ xảy ra sau nguyên phân.', 'Màng sinh chất biến thành thành cellulose.', 'Trao đổi chéo tăng vô hạn trong mọi tế bào soma.'],
    insight: 'Vi ống tạo thoi phân bào và kết nối kinetochore để sắp xếp–phân li nhiễm sắc thể.',
    evidence: 'Chất được thêm khi DNA đã nhân đôi và tế bào vào nguyên phân.',
    mechanism: 'Điểm kiểm soát kì giữa ngăn chuyển sang kì sau khi kinetochore chưa gắn thoi đúng.',
    reasoning: ['Pha S nằm trước nguyên phân.', 'Trao đổi chéo là sự kiện đặc trưng giảm phân I, không phải nguyên phân soma.'],
    distractorReasons: ['đảo thứ tự chu kì tế bào.', 'gán biến đổi thành tế bào không liên quan.', 'đưa sự kiện giảm phân và dùng từ tuyệt đối.'],
    tags: ['thoi phân bào', 'điểm kiểm soát']
  }),
  bioProblem(topicId, {
    content: 'Một tế bào lưỡng bội có 2n = 6. Ở kì giữa nguyên phân, số nhiễm sắc thể và số chromatid lần lượt là bao nhiêu?',
    correct: '6 nhiễm sắc thể và 12 chromatid.',
    distractors: ['12 nhiễm sắc thể và 12 chromatid.', '6 nhiễm sắc thể và 6 chromatid.', '3 nhiễm sắc thể và 6 chromatid.'],
    insight: 'Sau nhân đôi, lượng DNA/chromatid tăng gấp đôi nhưng số nhiễm sắc thể vẫn tính theo số tâm động.',
    evidence: 'Kì giữa xảy ra sau pha S, mỗi nhiễm sắc thể gồm hai chromatid chị em.',
    mechanism: 'Chỉ khi hai chromatid tách tâm động ở kì sau, mỗi chromatid mới được tính là một nhiễm sắc thể độc lập.',
    reasoning: ['2n = 6 xác định sáu tâm động trước kì sau.', 'Số chromatid bằng hai lần số nhiễm sắc thể ở kì giữa.'],
    distractorReasons: ['đếm chromatid thành nhiễm sắc thể.', 'quên DNA đã nhân đôi.', 'dùng n thay cho 2n trong nguyên phân.'],
    tags: ['nguyên phân', 'đếm nhiễm sắc thể']
  }),
  bioProblem(topicId, {
    content: 'Trong giảm phân, sự kiện nào tạo tổ hợp allele mới trên cùng một nhiễm sắc thể mà phân li độc lập đơn thuần không tạo ra?',
    correct: 'Trao đổi chéo giữa chromatid không chị em của cặp nhiễm sắc thể tương đồng ở kì đầu I.',
    distractors: ['Nhân đôi DNA trước giảm phân.', 'Tách chromatid chị em ở giảm phân II mà không có trao đổi chéo.', 'Phân chia tế bào chất sau nguyên phân.'],
    insight: 'Tái tổ hợp nội nhiễm sắc thể cần trao đổi đoạn vật chất giữa hai homolog.',
    evidence: 'Câu hỏi nhấn mạnh allele trên cùng nhiễm sắc thể, không chỉ tổ hợp các nhiễm sắc thể khác nhau.',
    mechanism: 'Đứt–nối tương ứng giữa chromatid không chị em tạo chromosome tái tổ hợp chứa tổ hợp allele mới.',
    reasoning: ['Phân li độc lập hoán vị nguồn gốc các cặp chromosome, không đổi trật tự allele trong một homolog.', 'Nhân đôi tạo bản sao, không tự tái tổ hợp.'],
    distractorReasons: ['nhầm sao chép với tái tổ hợp.', 'bỏ sự kiện tạo tổ hợp mới trước đó.', 'đưa quá trình không liên quan.'],
    tags: ['giảm phân', 'trao đổi chéo']
  }),
  bioProblem(topicId, {
    content: 'Không phân li một cặp nhiễm sắc thể tương đồng ở giảm phân I, còn giảm phân II bình thường. Bốn giao tử tạo ra có kiểu số lượng nào đối với nhiễm sắc thể đó?',
    correct: 'Hai giao tử thừa một và hai giao tử thiếu một; không có giao tử bình thường.',
    distractors: ['Một thừa, một thiếu và hai bình thường.', 'Cả bốn đều bình thường vì giảm phân II sửa lỗi.', 'Cả bốn đều lưỡng bội hoàn chỉnh.'],
    insight: 'Lỗi ở giảm phân I đưa cả hai homolog về cùng một cực, nên cả hai tế bào con sau lần I đều bất thường.',
    evidence: 'Giảm phân II chỉ tách chromatid chị em của phân bố đã sai, không đưa homolog sang tế bào còn thiếu.',
    mechanism: 'Một tế bào sau lần I nhận hai homolog, tế bào kia không nhận homolog; mỗi tế bào tạo hai giao tử cùng loại số lượng.',
    reasoning: ['Mẫu một thừa–một thiếu–hai bình thường phù hợp lỗi ở một tế bào giảm phân II.', 'Không phân li một cặp không làm mọi chromosome trở thành lưỡng bội.'],
    distractorReasons: ['nhầm giảm phân I với II.', 'gán khả năng sửa phân bố cho giảm phân II.', 'mở rộng lỗi một cặp sang toàn bộ bộ chromosome.'],
    tags: ['không phân li', 'giảm phân I']
  }),
  bioProblem(topicId, {
    content: 'Hai gene kiểm soát chu kì: P dừng chu kì khi DNA hỏng; C thúc đẩy vào pha S khi có tín hiệu tăng trưởng. Kiểu biến đổi nào dễ làm tế bào tăng sinh mất kiểm soát nhất?',
    correct: 'Mất chức năng cả hai bản P cùng với C hoạt hóa liên tục.',
    distractors: ['P hoạt hóa mạnh và C mất chức năng.', 'P bình thường và C chỉ hoạt hóa khi có tín hiệu.', 'Tăng sửa chữa DNA và giảm tín hiệu tăng trưởng.'],
    insight: 'Ung thư thường kết hợp mất “phanh” và kẹt “chân ga”.',
    evidence: 'P là gene ức chế chu kì; C là gene thúc đẩy chu kì.',
    mechanism: 'Mất P cho phép tế bào mang tổn thương tiếp tục; C hoạt hóa liên tục đẩy vào pha S không phụ thuộc môi trường.',
    reasoning: ['P hoạt hóa/C mất làm chu kì chậm hơn.', 'Điều hòa bình thường không phải biến đổi gây mất kiểm soát.'],
    distractorReasons: ['tăng phanh và giảm ga.', 'mô tả trạng thái được kiểm soát.', 'tăng cơ chế bảo vệ thay vì phá vỡ.'],
    tags: ['ung thư', 'điểm kiểm soát']
  }),
  bioProblem(topicId, {
    content: 'Thuốc A làm tế bào tích ở pha S; thuốc B làm tế bào tích ở kì giữa. Khi phối hợp và cho A trước đủ lâu rồi mới B, phân bố dự kiến ban đầu nghiêng về đâu?',
    correct: 'Pha S, vì A chặn tế bào trước khi phần lớn chúng có thể tới đích tác động của B.',
    distractors: ['Kì giữa, vì thuốc dùng sau luôn thắng thuốc dùng trước.', 'G₁, vì hai thuốc tự triệt tiêu.', 'Mọi tế bào trở thành giao tử.'],
    insight: 'Trong đường tuần tự, điểm chặn sớm hơn thường che biểu hiện của điểm chặn muộn.',
    evidence: 'A được dùng trước đủ lâu và giữ tế bào trong pha S; B chỉ tác động khi tế bào vào kì giữa.',
    mechanism: 'Tế bào không hoàn tất S không thể tiến tới nguyên phân để biểu hiện bắt giữ của B.',
    reasoning: ['Thứ tự sinh học quan trọng hơn thứ tự thêm thuốc đơn giản.', 'Không có cơ chế chuyển tế bào soma thành giao tử.'],
    distractorReasons: ['bỏ vị trí chặn trên chu kì.', 'bịa sự triệt tiêu không có dữ kiện.', 'đưa kết quả không liên quan.'],
    tags: ['chu kì tế bào', 'điểm chặn tuần tự'],
    stimulus: biologyTable('bio10-adv-division-07', 'Tác động thuốc', 'Mỗi thuốc dùng riêng trước khi phối hợp.', 'Tỉ lệ tế bào', [{ key: 'group', label: 'Nhóm' }, { key: 'g1', label: 'G₁', unit: '%' }, { key: 's', label: 'S', unit: '%' }, { key: 'g2m', label: 'G₂/M', unit: '%' }], [{ group: 'Đối chứng', g1: 54, s: 29, g2m: 17 }, { group: 'A', g1: 18, s: 69, g2m: 13 }, { group: 'B', g1: 13, s: 12, g2m: 75 }])
  }),
  bioProblem(topicId, {
    content: 'Trong mô rễ, 200 tế bào được quan sát: 160 gian kì, 20 kì đầu, 8 kì giữa, 6 kì sau và 6 kì cuối. Nếu quần thể ở trạng thái ổn định, giai đoạn nào trong nguyên phân kéo dài nhất?',
    correct: 'Kì đầu.',
    distractors: ['Kì giữa.', 'Kì sau.', 'Kì cuối.'],
    insight: 'Trong mẫu ngẫu nhiên ổn định, tỉ lệ tế bào ở một giai đoạn xấp xỉ tỉ lệ thời gian dành cho giai đoạn đó.',
    evidence: 'Trong các kì nguyên phân, kì đầu có 20 tế bào, cao hơn 8, 6 và 6.',
    mechanism: 'Giai đoạn kéo dài làm xác suất bắt gặp tế bào ở giai đoạn đó lớn hơn.',
    reasoning: ['Không so gian kì vì câu hỏi chỉ hỏi trong nguyên phân.', 'Đếm tần suất chứ không dựa vào mức độ “phức tạp” tên gọi.'],
    distractorReasons: ['có tần suất thấp hơn kì đầu.', 'chỉ có sáu tế bào.', 'bằng kì sau và thấp hơn kì đầu.'],
    tags: ['chỉ số nguyên phân', 'ước lượng thời gian']
  }),
  bioProblem(topicId, {
    content: 'Tế bào mẹ 2n trải qua một lần nguyên phân hoàn chỉnh, rồi mỗi tế bào con trải qua một lần nữa. Nếu không đột biến, kết quả là gì?',
    correct: 'Bốn tế bào 2n có bộ nhiễm sắc thể về cơ bản giống tế bào mẹ ban đầu.',
    distractors: ['Bốn tế bào n khác nhau do phân li độc lập.', 'Hai tế bào 4n vì DNA nhân đôi.', 'Tám giao tử n.'],
    insight: 'Nguyên phân duy trì số bộ nhiễm sắc thể qua mỗi chu kì và số tế bào nhân đôi sau mỗi lần phân chia.',
    evidence: 'Một tế bào tạo hai, rồi hai tạo bốn; mỗi lần phân li chromatid đều.',
    mechanism: 'DNA nhân đôi trước phân bào nhưng được phân chia cho hai nhân con, nên mỗi tế bào trở về mức 2n.',
    reasoning: ['Phân li độc lập tạo giao tử thuộc giảm phân.', 'Nhân đôi DNA tạm thời không làm sản phẩm nguyên phân thành 4n.'],
    distractorReasons: ['gán giảm phân cho nguyên phân.', 'nhầm lượng DNA trước chia với bội thể sau chia.', 'sai cả số lần và loại tế bào.'],
    tags: ['nguyên phân', 'duy trì bộ nhiễm sắc thể']
  }),
  bioProblem(topicId, {
    content: 'Một tế bào 2n = 4 đang ở kì sau nguyên phân. Tổng số nhiễm sắc thể đang di chuyển trong toàn tế bào và số sẽ có trong mỗi nhân con là bao nhiêu?',
    correct: '8 trong toàn tế bào và 4 trong mỗi nhân con.',
    distractors: ['4 trong toàn tế bào và 2 trong mỗi nhân con.', '8 trong toàn tế bào và 8 trong mỗi nhân con.', '4 trong toàn tế bào và 4 chromatid trong mỗi nhân con.'],
    insight: 'Khi tâm động tách, mỗi chromatid trở thành một nhiễm sắc thể độc lập, nhưng hai cực nhận các bộ bằng nhau.',
    evidence: 'Ban đầu 2n = 4; sau tách chromatid có tám nhiễm sắc thể tạm thời trong một tế bào chưa chia.',
    mechanism: 'Mỗi cực nhận một bản sao của từng nhiễm sắc thể, khôi phục 2n = 4 ở nhân con.',
    reasoning: ['Phải phân biệt toàn tế bào kì sau với mỗi cực.', 'Thuật ngữ chromatid không còn dùng cho đơn vị đã tách tâm động.'],
    distractorReasons: ['không tính sự tách tâm động và giảm sai bội thể.', 'không chia đều cho hai cực.', 'dùng sai tên đơn vị sau tách.'],
    tags: ['kì sau', 'đếm nhiễm sắc thể']
  }),
  bioProblem(topicId, {
    content: 'Trong giảm phân của một tế bào có hai cặp nhiễm sắc thể tương đồng, không trao đổi chéo. Số kiểu tổ hợp nguồn gốc bố/mẹ tối đa ở giao tử do phân li độc lập là bao nhiêu?',
    correct: '4 kiểu.',
    distractors: ['2 kiểu.', '8 kiểu.', '16 kiểu.'],
    insight: 'Mỗi cặp có hai lựa chọn nguồn gốc độc lập; số tổ hợp là \(2^n\).',
    evidence: 'Có n = 2 cặp tương đồng và đề loại trao đổi chéo.',
    mechanism: 'Hướng sắp xếp mỗi cặp ở kì giữa I độc lập, tạo 2 × 2 tổ hợp chromosome.',
    reasoning: ['Đây là số kiểu có thể của cơ chế, không phải số giao tử vật lí từ một lần giảm phân.', 'Trao đổi chéo nếu có sẽ tăng đa dạng đoạn chromosome.'],
    distractorReasons: ['chỉ tính một cặp.', 'nhân thừa theo số chromatid.', 'bình phương sai số tổ hợp.'],
    tags: ['phân li độc lập', 'đa dạng giao tử']
  }),
  bioProblem(topicId, {
    content: 'Nuôi cấy mô thực vật từ một mẩu lá có thể tạo nhiều cây hoàn chỉnh. Cơ sở tế bào học quan trọng nhất là gì?',
    correct: 'Nhiều tế bào thực vật giữ toàn bộ bộ gene và có thể phản phân hóa–tái phân hóa dưới tín hiệu hormone thích hợp.',
    distractors: ['Mỗi tế bào lá chỉ giữ gene cần cho quang hợp.', 'Môi trường nuôi cấy tự tạo DNA mới thay cho tế bào.', 'Tế bào lá giảm phân để tạo phôi trong mọi trường hợp.'],
    insight: 'Tính toàn năng dựa trên bảo toàn thông tin di truyền và điều khiển biểu hiện gene.',
    evidence: 'Một phần mô soma có thể sinh ra nhiều loại mô và cơ quan của cây mới.',
    mechanism: 'Tỉ lệ auxin/cytokinin và điều kiện nuôi ảnh hưởng chương trình phân chia, tạo rễ/chồi.',
    reasoning: ['Biệt hóa không đồng nghĩa mất gene.', 'Quá trình chủ yếu dùng nguyên phân chứ không bắt buộc giảm phân.'],
    distractorReasons: ['nhầm tắt gene với mất gene.', 'gán khả năng tự tạo genome cho môi trường.', 'gán sinh sản hữu tính cho nuôi cấy soma.'],
    tags: ['công nghệ tế bào', 'tính toàn năng']
  }),
  bioProblem(topicId, {
    content: 'Hai môi trường nuôi mô chỉ khác tỉ lệ auxin/cytokinin. Môi trường X tạo nhiều rễ, Y tạo nhiều chồi. Kết luận nào phù hợp nhất?',
    correct: 'Tỉ lệ hormone, không chỉ nồng độ tuyệt đối một hormone, định hướng chương trình phát triển mô trong hệ này.',
    distractors: ['Auxin và cytokinin là vật liệu cấu tạo trực tiếp của rễ/chồi.', 'Mọi loài thực vật phản ứng giống hệt ở mọi nồng độ.', 'Hormone làm thay đổi trình tự DNA của mọi tế bào.'],
    insight: 'Tín hiệu phối hợp có thể chuyển cùng một mô sang hai hướng biệt hóa.',
    evidence: 'Nguồn mô và điều kiện khác được giữ, chỉ tỉ lệ hai hormone đổi cùng kết quả cơ quan.',
    mechanism: 'Hormone điều hòa biểu hiện gene và phân chia–biệt hóa, không được dùng như gạch xây mô.',
    reasoning: ['Kết luận được giới hạn “trong hệ này”.', 'Không cần biến đổi trình tự DNA để đổi chương trình biểu hiện.'],
    distractorReasons: ['nhầm tín hiệu với vật liệu cấu trúc.', 'khái quát tuyệt đối qua loài và liều.', 'đồng nhất điều hòa gene với đột biến gene.'],
    tags: ['nuôi cấy mô', 'hormone thực vật'],
    stimulus: biologyTable('bio10-adv-division-13', 'Nuôi mô với hormone', 'Các điều kiện khác giống nhau.', 'Kết quả sau bốn tuần', [{ key: 'medium', label: 'Môi trường' }, { key: 'ratio', label: 'Auxin/Cytokinin' }, { key: 'result', label: 'Cơ quan ưu thế' }], [{ medium: 'X', ratio: 'Cao', result: 'Rễ' }, { medium: 'Y', ratio: 'Thấp', result: 'Chồi' }, { medium: 'Z', ratio: 'Trung gian', result: 'Mô sẹo' }])
  }),
  bioProblem(topicId, {
    content: 'Một quần thể tế bào ung thư có thời gian pha G₁ ngắn hơn nhưng thời gian S, G₂ và M không đổi. Hệ quả nào dự kiến?',
    correct: 'Thời gian một chu kì giảm, nên quần thể có thể tăng số lượng nhanh hơn nếu tỉ lệ chết không tăng.',
    distractors: ['Lượng DNA mỗi tế bào sau pha S giảm một nửa.', 'Mỗi lần nguyên phân tạo bốn tế bào.', 'Tế bào tự chuyển sang giảm phân.'],
    insight: 'Rút ngắn một pha làm ngắn tổng chu kì mà không đổi cơ chế nhân đôi hay số sản phẩm mỗi lần.',
    evidence: 'Chỉ thời gian G₁ thay đổi; các pha còn lại và kiểu phân bào giữ nguyên.',
    mechanism: 'Nhiều chu kì hoàn tất trong cùng thời gian dẫn tới tốc độ tăng quần thể cao hơn.',
    reasoning: ['Pha S vẫn nhân đôi toàn bộ DNA.', 'Nguyên phân vẫn tạo hai tế bào mỗi chu kì.'],
    distractorReasons: ['gán thời gian G₁ cho lượng DNA nhân đôi.', 'đổi số sản phẩm của nguyên phân.', 'đổi loại phân bào không có tín hiệu.'],
    tags: ['tăng sinh', 'thời gian chu kì']
  }),
  bioProblem(topicId, {
    content: 'Tế bào có DNA hỏng nhưng protein kiểm soát không thể hoạt hóa enzyme sửa chữa hoặc chết theo chương trình. Nguy cơ lâu dài nào tăng?',
    correct: 'Đột biến được giữ lại và truyền cho tế bào con, làm tăng khả năng tích lũy biến đổi thúc đẩy ung thư.',
    distractors: ['Mọi DNA hỏng tự biến thành RNA lành.', 'Tế bào chắc chắn không thể nhân đôi bất kỳ đoạn DNA nào.', 'Sai hỏng chỉ ảnh hưởng tế bào mẹ, không bao giờ tới tế bào con.'],
    insight: 'Điểm kiểm soát bảo vệ quần thể bằng cách trì hoãn chu kì, sửa chữa hoặc loại tế bào hỏng.',
    evidence: 'Cả hai nhánh sửa chữa và chết theo chương trình đều không được hoạt hóa.',
    mechanism: 'Nếu tế bào vẫn qua pha S và nguyên phân, tổn thương có thể được cố định thành đột biến và nhân bản theo dòng tế bào.',
    reasoning: ['Không phải mọi hỏng đều ngăn hoàn toàn polymerase.', 'Vật chất di truyền của tế bào mẹ là nguồn cho tế bào con.'],
    distractorReasons: ['bịa chuyển đổi acid nucleic như cơ chế sửa.', 'dùng mệnh đề tuyệt đối trái tính đa dạng tổn thương.', 'phủ nhận di truyền qua nguyên phân.'],
    tags: ['tổn thương DNA', 'tích lũy đột biến']
  }),
  bioProblem(topicId, {
    content: 'Ở một tiêu bản giảm phân, tế bào P có các cặp tương đồng xếp thành hai hàng ở mặt phẳng xích đạo; Q có từng nhiễm sắc thể kép xếp một hàng. P và Q lần lượt thuộc giai đoạn nào?',
    correct: 'P–kì giữa I; Q–kì giữa II.',
    distractors: ['P–kì giữa nguyên phân; Q–kì đầu I.', 'P–kì sau II; Q–kì cuối I.', 'Cả hai đều kì giữa I.'],
    insight: 'Đơn vị xếp hàng là cặp tương đồng ở lần I và từng nhiễm sắc thể ở lần II.',
    evidence: 'P mô tả bivalent/hai homolog cùng định vị; Q mô tả chromosome riêng trong tế bào đơn bội sau lần I.',
    mechanism: 'Giảm phân I phân li homolog, giảm phân II phân li chromatid tương tự nguyên phân.',
    reasoning: ['Ở kì sau, chromosome đang tách về cực chứ không xếp ở xích đạo.', 'Kì đầu chưa có hàng ổn định ở mặt phẳng xích đạo.'],
    distractorReasons: ['đặt sai cả đơn vị xếp và thời điểm.', 'chọn các kì không có cấu hình xếp hàng.', 'bỏ khác biệt giữa cặp và chromosome đơn lẻ.'],
    tags: ['nhận diện phân bào', 'giảm phân I–II']
  }),
  bioProblem(topicId, {
    content: 'Một mô có 30% tế bào gắn nucleotide đánh dấu trong xung 20 phút, nhưng sau thuốc Z chỉ còn 2% gắn dù tổng số tế bào sống gần như không đổi. Z tác động trực tiếp nhất lên quá trình nào?',
    correct: 'Tổng hợp DNA trong pha S.',
    distractors: ['Co thắt vòng actin ở phân chia tế bào chất.', 'Gắn vi ống vào kinetochore ở kì giữa.', 'Tổng hợp ATP ở lysosome.'],
    insight: 'Nucleotide được tích hợp nhanh là chỉ báo trực tiếp của DNA mới tổng hợp.',
    evidence: 'Giảm gắn xảy ra trước khi số tế bào sống thay đổi đáng kể, chỉ ra ức chế tổng hợp chứ không đơn thuần chết tế bào.',
    mechanism: 'Polymerase sử dụng nucleotide trong pha S; chặn quá trình làm mất tín hiệu xung.',
    reasoning: ['Phân chia tế bào chất và thoi phân bào xảy ra sau S.', 'Lysosome không phải nơi tạo ATP chính.'],
    distractorReasons: ['chọn bước không dùng nucleotide đánh dấu.', 'chọn bước sau nhân đôi.', 'gán sai chức năng bào quan.'],
    tags: ['pha S', 'nucleotide đánh dấu'],
    stimulus: biologyTable('bio10-adv-division-17', 'Xung nucleotide đánh dấu', 'Tế bào sống được đếm độc lập.', 'Kết quả xung 20 phút', [{ key: 'group', label: 'Nhóm' }, { key: 'label', label: 'Tế bào gắn dấu', unit: '%' }, { key: 'alive', label: 'Tế bào sống', unit: '%' }], [{ group: 'Đối chứng', label: 30, alive: 100 }, { group: 'Thuốc Z', label: 2, alive: 96 }])
  }),
  bioProblem(topicId, {
    content: 'Một dòng tế bào hoàn tất nhân chia nhưng thường tạo tế bào có hai nhân vì vòng co không hình thành. Thành phần bị lỗi trực tiếp nhất là gì?',
    correct: 'Hệ actin–myosin tạo vòng co ở eo phân chia.',
    distractors: ['Thoi vi ống phân li nhiễm sắc thể chắc chắn chưa hoạt động.', 'Ribosome tổng hợp histone trong nhân con.', 'Peptidoglycan của thành tế bào động vật.'],
    insight: 'Hai nhân bình thường trong một bào tương cho thấy karyokinesis xong nhưng cytokinesis hỏng.',
    evidence: 'Nhân đã tách và hình thành, còn tế bào chất không chia.',
    mechanism: 'Ở tế bào động vật, vòng actin–myosin thắt màng tại mặt phẳng xích đạo để tách hai tế bào con.',
    reasoning: ['Nếu thoi không hoạt động, phân li nhân thường bất thường chứ không chỉ hai nhân riêng bình thường.', 'Tế bào động vật không có peptidoglycan.'],
    distractorReasons: ['không phù hợp việc nhân chia đã hoàn tất.', 'chọn quá trình không tạo eo phân chia.', 'gán thành vi khuẩn cho tế bào động vật.'],
    tags: ['phân chia tế bào chất', 'actin–myosin']
  })
];
