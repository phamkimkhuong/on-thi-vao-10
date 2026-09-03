import { buildBiologyAdaptiveBank, buildBiologySeedGroup, type BiologyAdaptiveCase } from '../../adaptiveFactory';
import type { QuestionRepresentationType } from '@/types';

type Entry = [string, string, [string, string, string], string, QuestionRepresentationType?];
const cases = (recognition: string, trap: string, entries: Entry[]): BiologyAdaptiveCase[] => entries.map(([prompt, correct, distractors, reasoning, representationType]) => ({ prompt, correct, distractors, recognition, reasoning, trap, representationType }));
const group = (key: string, questionTypeId: string, outcomeId: string, subTypeId: string, items: BiologyAdaptiveCase[]) => buildBiologySeedGroup({ prefix: `bio10-adapt-m4-${key}-`, questionTypeId, topicId: 'bio10-t4', outcomeId, subTypeId, cases: items });

const seeds = [
  ...group('atp', 'bio10-qt32', 'BIO10-M4-O01', 'bio10-qt32-st2', cases(
    'Theo dõi dòng năng lượng qua ATP và phân biệt ghép cặp phản ứng với dự trữ dài hạn.',
    'Không nói năng lượng nằm riêng trong một liên kết hoặc ATP là kho dự trữ lâu dài duy nhất.',
    [
      ['ATP thủy phân thường hỗ trợ phản ứng cần năng lượng bằng cách nào?', 'Ghép phản ứng tỏa năng lượng với phản ứng thu năng lượng, thường qua chuyển nhóm phosphate', ['Tạo năng lượng từ hư không', 'Làm mất định luật bảo toàn năng lượng', 'Biến mọi cơ chất thành DNA'], 'Chênh lệch năng lượng tự do của quá trình ghép làm tổng thể thuận lợi.'],
      ['Vì sao tế bào không dự trữ toàn bộ năng lượng nhiều tháng dưới dạng ATP?', 'ATP là chất mang ngắn hạn, được tái tạo liên tục; lipid và glycogen phù hợp dự trữ lớn hơn', ['ATP không chứa phosphate', 'ATP không tham gia phản ứng', 'Lipid không chứa năng lượng'], 'Tốc độ luân chuyển và độ ổn định phân biệt chất mang với kho dự trữ.'],
      ['Khi ATP chuyển phosphate cho protein vận chuyển, điều gì có thể xảy ra?', 'Protein đổi cấu hình và thực hiện công cơ học hoặc vận chuyển', ['Protein biến thành nucleotide', 'Màng mất mọi lipid', 'Phosphate xóa gradient'], 'Phosphoryl hóa có thể điều khiển cấu hình protein.'],
      ['ATP gồm những thành phần nào?', 'Adenine, ribose và ba nhóm phosphate', ['Glycerol và ba acid béo', 'Glucose và fructose', 'Amino acid và cellulose'], 'ATP là một nucleotide mang ba phosphate.'],
      ['Tế bào thiếu oxygen vẫn có thể tạo ít ATP qua đường phân. Điều này cho thấy?', 'ATP có thể được tạo bởi nhiều cơ chế, không chỉ phosphoryl hóa oxi hóa', ['ATP chỉ có trong ti thể', 'Đường phân cần lục lạp', 'Không oxygen thì không có phản ứng nào'], 'Phosphoryl hóa mức cơ chất tạo ATP trực tiếp.'],
      ['Co cơ dừng khi ATP cạn chủ yếu vì sao?', 'Chu trình tương tác protein co và bơm ion đều cần năng lượng ATP', ['ATP chỉ tạo màu cơ', 'Cơ không có protein', 'ATP phá mọi liên kết peptide'], 'ATP liên hệ cả công cơ học và phục hồi gradient.'],
      ['Bảng cho thấy ATP không tích lũy nhiều nhưng được tạo–dùng rất nhanh. Nhận định?', 'Một lượng nhỏ ATP có thể phục vụ lớn nhờ tốc độ tái sinh cao', ['ATP không quan trọng', 'ATP không bao giờ được thủy phân', 'Tế bào chỉ dùng một phân tử ATP'], 'Quy mô dòng năng lượng khác lượng tồn kho tại một thời điểm.', 'table'],
      ['Phản ứng tổng hợp polymer cần năng lượng. Vai trò ATP phù hợp?', 'Hoạt hóa đơn phân hoặc trung gian để phản ứng tạo liên kết diễn ra', ['Thay thế toàn bộ enzyme', 'Cung cấp nguyên tử carbon duy nhất', 'Làm phản ứng không cần cơ chất'], 'Ghép cặp làm tăng khả năng phản ứng của chất tham gia.'],
      ['Nếu enzyme ATP synthase bị ức chế, điều gì xảy ra trước?', 'Khả năng dùng gradient proton để tạo ATP giảm', ['DNA tự biến mất', 'Mọi phản ứng lên men dừng ngay', 'ATP được tạo vô hạn'], 'ATP synthase chuyển năng lượng điện hóa thành năng lượng hóa học.'],
      ['Một phản ứng có ΔG dương được ghép với thủy phân ATP đủ âm. Điều kiện để tổng thể tự diễn biến?', 'Tổng ΔG của hai phản ứng ghép phải âm', ['Mỗi phản ứng riêng đều phải âm', 'Chỉ cần nhiều enzyme', 'Không cần liên hệ vật chất'], 'Tính thuận lợi được xét cho tổng quá trình ghép.'],
      ['Khẳng định “phá liên kết phosphate tự nó giải phóng năng lượng” thiếu chính xác ở đâu?', 'Năng lượng ròng đến từ sản phẩm ổn định hơn và toàn bộ biến đổi liên kết, không chỉ hành động bẻ một liên kết', ['Phá mọi liên kết luôn giải phóng năng lượng', 'ATP không có liên kết', 'Năng lượng không liên quan sản phẩm'], 'Phá liên kết cần năng lượng; cân bằng tạo–phá quyết định năng lượng ròng.'],
      ['Một tế bào tăng tốc sử dụng ATP nhưng tốc độ tái tạo không tăng. Dự đoán?', 'Tỉ lệ ATP/ADP giảm và các quá trình cần năng lượng bị giới hạn', ['ATP tăng vô hạn', 'ADP biến thành protein', 'Mọi gene hoạt hóa như nhau'], 'Cân bằng cung–cầu ATP quyết định trạng thái năng lượng.']
    ]
  )),
  ...group('enzyme-mechanism', 'bio10-qt5', 'BIO10-M4-O02', 'bio10-qt5-st2', cases(
    'Phân tích vị trí hoạt động, năng lượng hoạt hóa, tính đặc hiệu và ức chế enzyme.',
    'Không cho rằng enzyme đổi cân bằng phản ứng, cung cấp năng lượng hoặc bị tiêu hao sau một chu kì.',
    [
      ['Enzyme làm phản ứng nhanh hơn chủ yếu bằng cách nào?', 'Ổn định trạng thái chuyển tiếp và hạ năng lượng hoạt hóa', ['Làm ΔG sản phẩm đổi tùy ý', 'Cung cấp toàn bộ năng lượng phản ứng', 'Tăng nhiệt độ lên vô hạn'], 'Enzyme mở con đường phản ứng thuận lợi hơn nhưng không đổi cân bằng.'],
      ['Sau một chu kì xúc tác, enzyme bình thường có thể làm gì?', 'Giải phóng sản phẩm và tiếp tục xúc tác cơ chất mới', ['Biến thành sản phẩm', 'Bị dùng hết bắt buộc', 'Trở thành ATP'], 'Enzyme được tái sử dụng nếu không bị bất hoạt.'],
      ['Tính đặc hiệu enzyme bắt nguồn chủ yếu từ đâu?', 'Hình dạng và hóa học của vị trí hoạt động phù hợp cơ chất/trạng thái chuyển tiếp', ['Mọi enzyme có cùng vị trí hoạt động', 'Chỉ kích thước toàn tế bào', 'Màu của cơ chất'], 'Tương tác chọn lọc quyết định nhận diện và xúc tác.'],
      ['Mô hình cảm ứng phù hợp khác “ổ khóa–chìa khóa” cứng ở điểm nào?', 'Vị trí hoạt động có thể đổi cấu hình khi cơ chất gắn', ['Enzyme không có cấu trúc', 'Cơ chất biến thành enzyme trước khi gắn', 'Không có tương tác hóa học'], 'Protein linh động và sự gắn có thể tối ưu hóa xúc tác.'],
      ['Chất ức chế cạnh tranh thường tác động thế nào?', 'Tranh vị trí hoạt động với cơ chất và có thể giảm tác động khi tăng cơ chất', ['Phá mọi liên kết peptide ngay', 'Gắn DNA làm enzyme tăng vô hạn', 'Luôn không phụ thuộc nồng độ cơ chất'], 'Cơ chất và chất ức chế cạnh tranh cho cùng vùng gắn.'],
      ['Chất ức chế không cạnh tranh có thể làm gì?', 'Gắn vị trí khác và làm giảm hoạt tính xúc tác dù cơ chất vẫn có thể gắn', ['Biến cơ chất thành enzyme', 'Tăng số vị trí hoạt động', 'Chỉ đổi màu dung dịch'], 'Biến đổi cấu hình hoặc bước xúc tác không được khắc phục đơn giản bằng cơ chất.'],
      ['Bảng cho thấy enzyme giảm Km biểu kiến nhưng tốc độ cực đại giữ nguyên sau đột biến. Cần diễn giải thận trọng?', 'Ái lực biểu kiến với cơ chất có thể tăng trong mô hình khảo sát', ['Enzyme chắc chắn nhanh hơn ở mọi nồng độ', 'Tốc độ cực đại đã tăng', 'Km là lượng protein'], 'Thông số động học phản ánh hành vi trong điều kiện mô hình.', 'table'],
      ['Cofactor cần cho một enzyme có thể là gì?', 'Ion kim loại hoặc phân tử hữu cơ hỗ trợ xúc tác', ['Một tế bào hoàn chỉnh', 'Cellulose thành tế bào', 'Mọi hormone'], 'Một số enzyme cần thành phần không phải protein.'],
      ['Đột biến thay amino acid ở xa vị trí hoạt động vẫn làm mất chức năng. Vì sao?', 'Vùng xa có thể ổn định cấu trúc hoặc truyền thay đổi cấu hình đến vị trí hoạt động', ['Chỉ amino acid tiếp xúc cơ chất mới quan trọng', 'Protein không có cấu trúc ba chiều', 'Đột biến luôn tạo lipid'], 'Chức năng protein là tính chất của toàn cấu trúc.'],
      ['Enzyme xúc tác cả chiều thuận và nghịch của phản ứng thuận nghịch. Nó làm gì với cân bằng?', 'Giúp hệ đạt cân bằng nhanh hơn nhưng không đổi vị trí cân bằng', ['Đẩy cân bằng luôn về sản phẩm', 'Xóa phản ứng nghịch', 'Làm ΔG bằng zero mọi lúc'], 'Hạ năng lượng hoạt hóa cho cả hai chiều.'],
      ['Một enzyme có nhiều cơ chất tương tự nhưng chỉ phản ứng mạnh với một chất. Điều này phản ánh?', 'Không chỉ gắn mà định hướng và ổn định trạng thái chuyển tiếp phải phù hợp', ['Chỉ cần cơ chất có cùng màu', 'Mọi chất gắn đều phản ứng như nhau', 'Enzyme không có tính chọn lọc'], 'Xúc tác đòi hỏi nhiều điều kiện hình học–hóa học hơn gắn đơn thuần.'],
      ['Khẳng định “enzyme làm phản ứng không thuận lợi tự diễn ra” sai ở đâu?', 'Enzyme không thay đổi ΔG tổng; phản ứng vẫn cần được ghép với nguồn năng lượng nếu không thuận lợi', ['Enzyme không ảnh hưởng tốc độ', 'Mọi phản ứng đều thuận lợi', 'ATP không thể ghép phản ứng'], 'Động học và nhiệt động học là hai vấn đề khác nhau.']
    ]
  )),
  ...group('enzyme-data', 'bio10-qt5', 'BIO10-M4-O03', 'bio10-qt5-st3', cases(
    'Đọc bảng và đồ thị để phân biệt ảnh hưởng nhiệt độ, pH, nồng độ cơ chất, enzyme và chất ức chế.',
    'Không ngoại suy đường cong ra ngoài miền đo hoặc cho rằng tăng một yếu tố luôn làm tốc độ tăng vô hạn.',
    [
      ['Tốc độ tăng theo cơ chất rồi đạt trần. Giải thích?', 'Phần lớn vị trí hoạt động đã được sử dụng nên enzyme trở thành yếu tố giới hạn', ['Cơ chất biến mất hoàn toàn', 'Enzyme tăng nồng độ tự động', 'Phản ứng không cần enzyme'], 'Bão hòa tạo giới hạn tốc độ cực đại.', 'graph'],
      ['Khi tăng gấp đôi enzyme ở cơ chất dư, dự đoán ban đầu?', 'Tốc độ cực đại có thể tăng gần gấp đôi nếu yếu tố khác không giới hạn', ['Tốc độ chắc chắn giảm', 'Km tăng gấp đôi bắt buộc', 'Không thay đổi vì enzyme bị tiêu hao'], 'Nhiều vị trí hoạt động tăng công suất xúc tác.'],
      ['Đường cong nhiệt độ tăng đến 37°C rồi giảm mạnh. Nguyên nhân đoạn giảm?', 'Cấu trúc enzyme bị rối loạn nhanh hơn lợi ích tăng chuyển động phân tử', ['Cơ chất đóng băng ở nhiệt cao', 'Enzyme tạo thêm liên kết peptide', 'Nhiệt độ không ảnh hưởng cấu trúc'], 'Qua tối ưu, biến tính chiếm ưu thế.'],
      ['Enzyme pepsin hoạt động tốt ở pH acid, amylase tốt gần trung tính. Điều này cho thấy?', 'Mỗi enzyme có môi trường ion hóa và cấu trúc tối ưu riêng', ['Mọi enzyme phải cùng pH tối ưu', 'pH chỉ ảnh hưởng cơ chất', 'Pepsin là lipid'], 'Chuỗi amino acid khác tạo đáp ứng pH khác.'],
      ['Thêm chất ức chế, tăng cơ chất phục hồi gần tốc độ cũ. Kiểu ức chế phù hợp?', 'Cạnh tranh', ['Không cạnh tranh thuần túy', 'Biến tính nhiệt', 'Thiếu enzyme do gene'], 'Cơ chất nồng độ cao thắng cạnh tranh vị trí hoạt động.'],
      ['Tăng cơ chất không phục hồi Vmax khi có chất ức chế. Điều này gợi?', 'Ức chế không cạnh tranh hoặc bất hoạt làm giảm lượng enzyme hữu hiệu', ['Cạnh tranh đơn giản chắc chắn', 'Không có chất ức chế', 'Cơ chất là enzyme'], 'Giảm công suất xúc tác không khắc phục bằng thêm cơ chất.'],
      ['Bảng hoạt tính ở pH 4, 6, 8 lần lượt 20, 100, 35. Kết luận đúng?', 'Trong ba mức khảo sát, pH 6 cho hoạt tính cao nhất', ['pH tối ưu tuyệt đối chính xác là 6,000', 'Tăng pH luôn tăng hoạt tính', 'pH 8 làm enzyme hoạt động mạnh nhất'], 'Chỉ kết luận trong độ phân giải và miền khảo sát.', 'table'],
      ['Khi sản phẩm tích lũy, tốc độ thuận giảm dù enzyme không biến tính. Nguyên nhân có thể?', 'Cơ chất giảm, phản ứng nghịch tăng hoặc sản phẩm ức chế', ['Enzyme chắc chắn biến thành DNA', 'Nhiệt độ tăng vô hạn', 'Không có cân bằng phản ứng'], 'Động học theo thời gian chịu ảnh hưởng thành phần hệ.'],
      ['Hai mẫu cùng enzyme nhưng một mẫu có tốc độ thấp; mẫu đó chứa ít cơ chất hơn. Có thể kết luận enzyme bị ức chế không?', 'Chưa; khác nồng độ cơ chất đã đủ là biến giải thích', ['Có chắc chắn', 'Không bao giờ có ức chế', 'Enzyme không phụ thuộc cơ chất'], 'Cần giữ hoặc điều chỉnh nồng độ cơ chất khi so sánh.'],
      ['Một enzyme màng giảm hoạt tính sau khi lipid màng đổi thành phần. Vì sao?', 'Môi trường màng có thể ảnh hưởng cấu hình và khả năng gặp cơ chất', ['Lipid không thể ảnh hưởng protein', 'Enzyme màng không có cấu trúc', 'Màng chỉ chứa cellulose'], 'Hoạt tính phụ thuộc bối cảnh vật lí của protein.'],
      ['Đồ thị chỉ có ba điểm và không có mẫu lặp. Hạn chế?', 'Khó xác định đường cong thật và độ biến thiên; cần thêm mức khảo sát và lặp', ['Ba điểm luôn đủ chứng minh cơ chế', 'Không cần sai số', 'Chỉ cần nối đường cong đẹp'], 'Mật độ điểm và lặp quyết định sức mạnh suy luận.', 'graph'],
      ['Enzyme điều hòa bị sản phẩm cuối con đường gắn làm giảm hoạt tính. Ý nghĩa?', 'Phản hồi âm giúp tránh sản xuất dư thừa và tiết kiệm nguồn lực', ['Sản phẩm luôn phá hủy enzyme vĩnh viễn', 'Tế bào mất mọi chuyển hóa', 'ATP không còn cần'], 'Ức chế ngược điều hòa dòng chuyển hóa theo nhu cầu.']
    ]
  )),
  ...group('enzyme-experiment', 'bio10-qt33', 'BIO10-M4-O04', 'bio10-qt33-st2', cases(
    'Thiết kế thí nghiệm enzyme với biến, đối chứng, phép đo và điều kiện được chuẩn hóa.',
    'Không thay nhiều biến cùng lúc hoặc đánh đồng màu cuối cùng với tốc độ khi thời gian không được kiểm soát.',
    [
      ['Khảo sát nhiệt độ lên catalase, biến phụ thuộc phù hợp?', 'Thể tích oxygen tạo ra trong cùng khoảng thời gian', ['Nhiệt độ mỗi ống', 'Tên enzyme', 'Khối lượng bàn'], 'Sản phẩm theo thời gian phản ánh hoạt tính.', 'experiment'],
      ['Đối chứng không enzyme trong thí nghiệm catalase dùng để làm gì?', 'Kiểm tra hydrogen peroxide có tự phân hủy đáng kể hoặc tạo bọt nền không', ['Tăng tốc phản ứng', 'Thay đổi pH', 'Tạo thêm catalase'], 'Đối chứng xác định tín hiệu không phụ thuộc enzyme.'],
      ['Muốn khảo sát pH cần giữ ổn định gì?', 'Nhiệt độ, lượng enzyme, nồng độ cơ chất và thời gian đo', ['Giá trị pH', 'Kết quả tốc độ', 'Mọi ống dùng pH khác và nhiệt độ khác'], 'Chỉ pH nên là biến độc lập chính.'],
      ['Vì sao nghiền mô gan trước thí nghiệm catalase?', 'Tăng giải phóng và diện tích tiếp xúc enzyme với cơ chất', ['Tạo catalase mới từ không khí', 'Phá hydrogen peroxide trước khi thử', 'Biến protein thành DNA'], 'Phá mô giúp enzyme tiếp cận cơ chất đồng đều hơn.'],
      ['Hai ống có khối lượng gan khác nhau. Vấn đề?', 'Nồng độ enzyme khác làm nhiễu ảnh hưởng của biến đang khảo sát', ['Khối lượng mô không liên quan', 'Gan không có enzyme', 'Chỉ màu ống ảnh hưởng'], 'Lượng nguồn enzyme phải được chuẩn hóa.'],
      ['Dùng chiều cao bọt để đo oxygen có hạn chế gì?', 'Kích thước và độ bền bọt thay đổi nên chỉ là chỉ báo gián tiếp', ['Bọt đo oxygen tuyệt đối không sai', 'Không thể có oxygen', 'Chiều cao bọt là nhiệt độ'], 'Cần chuẩn hóa dụng cụ hoặc đo khí trực tiếp để chính xác hơn.'],
      ['Bảng có ba lần lặp chênh lệch lớn. Hành động?', 'Kiểm tra quy trình, báo độ biến thiên và lặp thêm thay vì chỉ chọn số đẹp', ['Giữ kết quả lớn nhất', 'Xóa không lí do', 'Kết luận ngay'], 'Biến thiên lớn là thông tin về độ tin cậy.', 'table'],
      ['Iodine dùng trong thí nghiệm amylase–starch để theo dõi gì?', 'Lượng starch còn lại thông qua màu xanh tím', ['Lượng protein bằng màu đỏ', 'Lượng oxygen', 'Nồng độ lipid'], 'Mất màu iodine–starch cho biết cơ chất bị phân giải.'],
      ['Lấy mẫu hỗn hợp amylase mỗi phút cho vào iodine. Thời điểm màu không còn dùng ước tính gì?', 'Thời gian cần để starch giảm dưới ngưỡng phát hiện', ['Khối lượng enzyme tuyệt đối', 'Số amino acid', 'Nhiệt độ phòng chính xác'], 'Chuỗi thời gian biến phép thử định tính thành chỉ báo tốc độ.'],
      ['Ống ở 100°C không phân giải starch. Muốn phân biệt enzyme biến tính với cơ chất bị thay đổi nên làm gì?', 'Làm nguội rồi thêm enzyme mới hoặc thiết kế đối chứng xử lí riêng enzyme và cơ chất', ['Đun lâu hơn', 'Bỏ mọi đối chứng', 'Kết luận cơ chất biến mất'], 'Tách xử lí từng thành phần giúp xác định nguyên nhân.'],
      ['Người đo biết trước ống nào “phải nhanh” khi chấm màu. Cách giảm thiên lệch?', 'Mã hóa ống và dùng chuẩn màu hoặc máy đo quang', ['Cho biết thêm dự đoán', 'Chấm bằng trí nhớ', 'Đổi tiêu chí cho từng ống'], 'Làm mù và đo định lượng giảm chủ quan.'],
      ['Một thí nghiệm không ghi thời điểm bắt đầu từng ống. Hậu quả?', 'Thời gian phản ứng khác nhau làm so sánh tốc độ không công bằng', ['Không ảnh hưởng vì enzyme luôn tức thời', 'Tạo thêm enzyme', 'Chỉ làm đổi màu nhãn'], 'Thời gian là biến quan trọng trong đo tốc độ.']
    ]
  )),
  ...group('enzyme-inquiry', 'bio10-qt33', 'BIO10-M4-O04', 'bio10-qt33-st3', cases(
    'Đọc dữ liệu enzyme, phát hiện sai số và chọn thí nghiệm phân biệt các giả thuyết.',
    'Không kết luận cơ chế từ một quan sát duy nhất hoặc bỏ qua giới hạn phép đo.',
    [
      ['Mẫu A tạo 20 mL khí, B tạo 22 mL nhưng sai số mỗi mẫu ±5 mL. Kết luận?', 'Chưa có bằng chứng rõ A và B khác nhau; khoảng sai số chồng lấp mạnh', ['B chắc chắn cao hơn', 'A chắc chắn cao hơn', 'Sai số không liên quan'], 'Chênh lệch nhỏ hơn độ không chắc chắn.', 'table'],
      ['Hoạt tính giảm ở pH thấp. Muốn biết do cơ chất hay enzyme bị ảnh hưởng, thiết kế?', 'Xử lí riêng enzyme và cơ chất ở pH thấp rồi đưa về cùng pH trước khi phối hợp', ['Chỉ đo thêm một lần cùng điều kiện', 'Đổi cả nhiệt độ', 'Không dùng đối chứng'], 'Tách thành phần giúp phân biệt vị trí tác động.'],
      ['Thêm chất X làm tốc độ giảm; tăng cơ chất phục hồi. Dữ liệu hỗ trợ?', 'X có thể là chất ức chế cạnh tranh', ['X chắc chắn phá hủy enzyme vĩnh viễn', 'X là ATP synthase', 'Không có ức chế'], 'Phục hồi bởi cơ chất là dấu hiệu cạnh tranh, chưa phải chứng minh tuyệt đối.'],
      ['Một phép thử màu đạt mức tối đa từ phút 2 nên các phút sau giống nhau. Hạn chế?', 'Phép đo bị bão hòa và không phân biệt được tốc độ cao hơn', ['Phản ứng chắc chắn dừng', 'Enzyme biến mất ở phút 2', 'Màu tối đa đo được mọi nồng độ'], 'Giới hạn động của phép đo có thể che khác biệt.'],
      ['Hai nhóm dùng hai lô enzyme khác nhau. Cần làm gì?', 'Chuẩn hóa hoạt tính ban đầu hoặc phân bố lô ngẫu nhiên giữa nghiệm thức', ['Coi hai lô giống hệt', 'Chỉ dùng lô cho kết quả mong muốn', 'Bỏ ghi số lô'], 'Hiệu ứng lô là biến gây nhiễu tiềm tàng.'],
      ['Một đường chuẩn không tuyến tính ở nồng độ cao. Khi mẫu nằm ngoài miền tuyến tính nên làm gì?', 'Pha loãng mẫu hoặc dùng mô hình hiệu chuẩn phù hợp rồi đo lại', ['Ngoại suy đường thẳng vô hạn', 'Ghi giá trị cực đại như kết quả thật', 'Bỏ đường chuẩn'], 'Chỉ định lượng đáng tin trong miền hiệu chuẩn.'],
      ['Bảng tốc độ không chia cho khối lượng mô. So sánh mẫu 0,1 g với 1,0 g có công bằng?', 'Không; nên chuẩn hóa theo khối lượng hoặc lượng protein enzyme', ['Có vì đều là mô', 'Có vì khối lượng không ảnh hưởng', 'Không vì enzyme không có trong mô'], 'Cần so hoạt tính riêng thay vì tổng sản phẩm.', 'table'],
      ['Kết quả một lần lặp trái hẳn ba lần còn lại. Xử lí?', 'Kiểm tra ghi chép và tiêu chí ngoại lệ; báo cả quyết định xử lí minh bạch', ['Xóa ngay vì xấu', 'Chỉ giữ ngoại lệ', 'Đổi số cho gần trung bình'], 'Ngoại lệ phải được xử lí có lí do, không theo mong muốn.'],
      ['Muốn biết enzyme có bị tiêu hao sau phản ứng, thử nghiệm nào?', 'Tách enzyme sau phản ứng và cho tiếp xúc cơ chất mới dưới cùng điều kiện', ['Đếm màu nhãn', 'Chỉ tăng pH', 'Không cần cơ chất mới'], 'Khả năng xúc tác vòng sau kiểm tra tính tái sử dụng.'],
      ['Hoạt tính tăng khi thêm ion Mg2+. Kết luận thận trọng?', 'Mg2+ có thể là cofactor hoặc ảnh hưởng môi trường; cần kiểm tra đặc hiệu và nồng độ', ['Mg2+ chắc chắn là enzyme', 'Mọi ion đều có tác dụng như nhau', 'Không cần nhóm không Mg2+'], 'Quan sát hỗ trợ vai trò nhưng chưa xác định cơ chế duy nhất.'],
      ['Một chất làm giảm hoạt tính trong tế bào nhưng không ảnh hưởng enzyme tinh sạch. Gợi ý?', 'Chất có thể tác động vận chuyển, điều hòa hoặc môi trường tế bào thay vì trực tiếp enzyme', ['Dữ liệu mâu thuẫn nên bỏ', 'Enzyme tinh sạch không phải protein', 'Chất chắc chắn cạnh tranh vị trí hoạt động'], 'Bối cảnh tế bào bổ sung nhiều mắt xích gián tiếp.'],
      ['Tái lập ở phòng thí nghiệm khác cho kết quả yếu hơn. Bước phù hợp?', 'Đối chiếu nguồn enzyme, nhiệt độ, pH, dụng cụ và quy trình trước khi tổng hợp kết luận', ['Chọn kết quả mạnh hơn', 'Bác bỏ phòng thứ hai', 'Không báo khác biệt'], 'Khác biệt điều kiện có thể giải thích độ lớn hiệu ứng.']
    ]
  )),
  ...group('anabolism', 'bio10-qt34', 'BIO10-M4-O05', 'bio10-qt34-st2', cases(
    'Theo dõi nguồn carbon, năng lượng và chất khử trong quang hợp, hóa tổng hợp và đồng hóa.',
    'Không cho rằng mọi sinh vật tự dưỡng dùng ánh sáng hoặc oxygen giải phóng trong quang hợp đến từ carbon dioxide.',
    [
      ['Đồng hóa được hiểu là gì?', 'Tổng hợp chất phức tạp từ chất đơn giản và cần năng lượng', ['Phân giải chất giải phóng năng lượng', 'Khuếch tán nước', 'Sao chép tế bào không cần vật chất'], 'Xây dựng cấu trúc làm tăng mức tổ chức hóa học.'],
      ['Trong quang hợp oxygen, oxygen giải phóng chủ yếu có nguồn từ đâu?', 'Nước bị phân li trong phản ứng ánh sáng', ['Carbon dioxide', 'Glucose', 'Chlorophyll'], 'Theo dõi đồng vị cho thấy O2 đến từ H2O.'],
      ['Pha sáng cung cấp gì cho quá trình cố định carbon?', 'ATP và chất khử như NADPH', ['Chỉ cellulose', 'Chỉ oxygen để tạo gene', 'Amino acid hoàn chỉnh'], 'Năng lượng và electron được dùng khử carbon.'],
      ['Chu trình cố định carbon trực tiếp sử dụng chất nào?', 'Carbon dioxide cùng ATP và NADPH', ['Oxygen làm nguồn carbon', 'Protein làm ánh sáng', 'DNA làm cơ chất duy nhất'], 'Carbon vô cơ được đưa vào phân tử hữu cơ.'],
      ['Vi khuẩn hóa tự dưỡng lấy năng lượng từ đâu?', 'Oxi hóa các chất vô cơ như ammonia, nitrite hoặc sulfur', ['Ánh sáng trong mọi trường hợp', 'Ăn tế bào động vật bắt buộc', 'Phân giải cellulose duy nhất'], 'Nguồn năng lượng hóa học khác nguồn carbon CO2.'],
      ['Quang dị dưỡng khác quang tự dưỡng ở đâu?', 'Cùng dùng ánh sáng nhưng nguồn carbon chủ yếu là chất hữu cơ thay vì CO2', ['Không dùng năng lượng', 'Không có màng', 'Chỉ sống ở động vật'], 'Phân loại cần xét riêng nguồn năng lượng và carbon.'],
      ['Bảng cho thấy sinh vật X dùng ánh sáng và CO2; Y dùng NH3 và CO2. X, Y?', 'X quang tự dưỡng; Y hóa tự dưỡng', ['Cả hai hóa dị dưỡng', 'X hóa tự dưỡng; Y quang dị dưỡng', 'Cả hai không chuyển hóa'], 'Hai tiêu chí năng lượng–carbon xác định kiểu dinh dưỡng.', 'table'],
      ['Cây thiếu CO2 nhưng đủ ánh sáng sẽ gặp giới hạn gì?', 'Không đủ nguồn carbon để tổng hợp carbohydrate dù pha sáng có thể hoạt động một thời gian', ['Tạo glucose từ oxygen', 'Không cần cố định carbon', 'ATP biến thành carbon'], 'Năng lượng không thay thế nguyên liệu carbon.'],
      ['Quang hợp và hô hấp liên hệ thế nào ở cây?', 'Sản phẩm của quá trình này có thể là cơ chất của quá trình kia nhưng chúng được điều hòa riêng', ['Chỉ một quá trình xảy ra trong cây', 'Hai quá trình giống hệt', 'Hô hấp chỉ có ban đêm'], 'Cây hô hấp cả ngày và quang hợp khi có điều kiện.'],
      ['Tổng hợp protein cần ATP và amino acid. Vai trò khác nhau?', 'Amino acid cung cấp vật chất, ATP cung cấp năng lượng hoạt hóa và lắp ráp', ['ATP cung cấp mọi nguyên tử nitrogen', 'Amino acid chỉ cung cấp nhiệt', 'Hai chất hoàn toàn thay thế nhau'], 'Cần phân biệt nguồn vật chất với nguồn năng lượng.'],
      ['Một con đường đồng hóa bị ức chế ngược bởi sản phẩm cuối. Lợi ích?', 'Giảm lãng phí năng lượng và nguyên liệu khi sản phẩm đã đủ', ['Tăng sản xuất vô hạn', 'Phá mọi enzyme', 'Ngừng mọi dị hóa'], 'Phản hồi giữ cân bằng nhu cầu.'],
      ['Khẳng định “tự dưỡng nghĩa là không cần chất nào từ môi trường” sai ở đâu?', 'Sinh vật tự dưỡng vẫn cần CO2, nước, khoáng và nguồn năng lượng', ['Tự dưỡng phải ăn sinh vật khác', 'Tự dưỡng không có tế bào', 'Tự dưỡng chỉ dùng protein'], 'Tự dưỡng nói về nguồn carbon hữu cơ, không phải tự đủ mọi vật chất.']
    ]
  )),
  ...group('respiration', 'bio10-qt35', 'BIO10-M4-O06', 'bio10-qt35-st2', cases(
    'Theo dõi vị trí, chất nhận electron, sản phẩm và hiệu suất của hô hấp với lên men.',
    'Không nói lên men không tạo ATP hoặc oxygen trực tiếp tham gia mọi bước đường phân.',
    [
      ['Một độc chất chỉ ức chế các enzyme trong tế bào chất nhưng không đi vào ti thể. Bước chuyển glucose thành pyruvate bị giảm trực tiếp vì sao?', 'Các phản ứng đường phân nằm trong tế bào chất', ['Pyruvate chỉ được tạo trong nhân', 'Màng trong ti thể trực tiếp cắt glucose', 'Bộ máy Golgi là nơi tạo ATP của đường phân'], 'Đường phân là giai đoạn đầu của phân giải glucose và diễn ra trong tế bào chất, nên bị tác động trực tiếp trong tình huống này.'],
      ['Sản phẩm carbon chính của đường phân là gì?', 'Pyruvate', ['Carbon dioxide duy nhất', 'Cellulose', 'DNA'], 'Một glucose được tách thành hai pyruvate.'],
      ['Oxygen giữ vai trò cuối cùng nào trong hô hấp hiếu khí?', 'Chất nhận electron cuối của chuỗi vận chuyển electron', ['Cơ chất trực tiếp của đường phân', 'Enzyme tạo glucose', 'Nguồn carbon của acetyl-CoA'], 'Oxygen nhận electron và proton tạo nước.'],
      ['Phần lớn ATP hiếu khí được tạo nhờ cơ chế nào?', 'Phosphoryl hóa oxi hóa dựa trên gradient proton', ['Chỉ thủy phân starch', 'Chỉ lên men lactic', 'Tổng hợp DNA'], 'Chuỗi electron xây gradient cho ATP synthase.'],
      ['Lên men giúp đường phân tiếp tục bằng cách nào?', 'Tái sinh NAD+ từ NADH', ['Tạo oxygen', 'Tạo ti thể mới', 'Phá mọi pyruvate thành ATP'], 'NAD+ cần cho phản ứng oxi hóa trong đường phân.'],
      ['Lên men lactic tạo sản phẩm carbon chính nào?', 'Lactate', ['Ethanol và CO2 bắt buộc', 'Oxygen', 'Starch'], 'Pyruvate nhận electron tạo lactate.'],
      ['Bảng cho thấy tế bào tiêu thụ glucose cao khi thiếu oxygen nhưng ATP thấp. Giải thích?', 'Tế bào tăng đường phân để bù hiệu suất ATP thấp của lên men', ['Lên men tạo nhiều ATP hơn hô hấp', 'Glucose không chứa năng lượng', 'Oxygen ngăn mọi đường phân'], 'Mỗi glucose qua lên men cho ít ATP nên cần dòng glucose lớn.', 'table'],
      ['Chất phá màng trong ti thể nhưng không ảnh hưởng enzyme đường phân sẽ gây gì?', 'Giảm ATP oxi hóa trong khi ATP mức cơ chất ở tế bào chất còn có thể tạo', ['Ngừng đường phân tuyệt đối', 'Tăng quang hợp', 'Tạo thêm oxygen'], 'Các giai đoạn ở vị trí khác nhau có độ nhạy khác nhau.'],
      ['Tại sao hô hấp hiếu khí thu nhiều ATP hơn lên men?', 'Glucose được oxi hóa hoàn toàn hơn và electron đi qua chuỗi tạo gradient', ['Hiếu khí không dùng enzyme', 'Lên men không phân giải glucose', 'Oxygen chứa ATP'], 'Mức khai thác năng lượng hóa học khác nhau.'],
      ['Nấm men làm bột nở nhờ sản phẩm nào?', 'Carbon dioxide của lên men rượu tạo bọt khí', ['Lactate tạo cellulose', 'Oxygen từ DNA', 'ATP thoát thành khí'], 'CO2 bị giữ trong mạng bột làm tăng thể tích.'],
      ['Cơ vận động mạnh tích lũy lactate. Điều này chứng minh cơ không hô hấp hiếu khí không?', 'Không; hiếu khí vẫn diễn ra nhưng tốc độ cung oxygen có thể không đáp ứng toàn bộ nhu cầu', ['Có, mọi ti thể dừng hoàn toàn', 'Có, oxygen không vào máu', 'Không vì lactate là protein'], 'Các con đường có thể cùng hoạt động với tỉ lệ khác nhau.'],
      ['Một chất chặn chuỗi electron làm NADH tích lũy. Hậu quả tiếp theo?', 'Thiếu NAD+ có thể làm các bước oxi hóa trước đó chậm lại', ['NADH biến thành DNA', 'ATP synthase tăng vô hạn', 'Glucose tự tạo oxygen'], 'Các giai đoạn liên kết qua chất mang electron.']
    ]
  )),
  ...group('metabolic-data', 'bio10-qt35', 'BIO10-M4-O07', 'bio10-qt35-st3', cases(
    'Đọc dữ liệu chuyển hóa để suy dòng carbon, electron và quan hệ giữa tổng hợp–phân giải.',
    'Không kết luận một con đường tắt chỉ từ một sản phẩm hoặc bỏ qua cân bằng vật chất.',
    [
      ['Tế bào dùng amino acid làm năng lượng. Trước khi vào hô hấp cần gì?', 'Loại nhóm amino và chuyển khung carbon thành chất trung gian phù hợp', ['Biến amino acid thành DNA nguyên vẹn', 'Tạo lục lạp', 'Không cần enzyme'], 'Các chất dinh dưỡng hội tụ vào mạng chuyển hóa qua bước xử lí.'],
      ['Acid béo được phân giải tạo nhiều acetyl-CoA. Chất này đi đâu trong hiếu khí?', 'Vào chu trình citric để tiếp tục oxi hóa', ['Trực tiếp thành cellulose', 'Vào nhân làm gene', 'Biến thành oxygen'], 'Acetyl-CoA là nút giao chuyển hóa carbon.'],
      ['Khi dư năng lượng, tế bào có thể làm gì?', 'Chuyển chất trung gian thành glycogen hoặc lipid dự trữ', ['Tạo ATP vô hạn không kiểm soát', 'Thải mọi carbon ngay', 'Ngừng mọi đồng hóa'], 'Dòng chuyển hóa đổi theo trạng thái năng lượng.'],
      ['Khi đói kéo dài, dự trữ glycogen giảm và lipid được huy động. Điều này thể hiện?', 'Mạng phân giải thay đổi nguồn cơ chất để duy trì năng lượng', ['Cơ thể chỉ dùng một chất suốt đời', 'Lipid không thể phân giải', 'Glycogen là protein'], 'Các kho dự trữ được huy động theo thời gian và mô.'],
      ['Bảng isotope cho thấy carbon đánh dấu từ glucose xuất hiện trong CO2. Kết luận?', 'Carbon glucose đã được oxi hóa qua các con đường hô hấp', ['Oxygen biến thành carbon', 'CO2 không liên quan chuyển hóa', 'Glucose chỉ dùng tạo màng'], 'Dấu đồng vị cho phép theo dõi dòng nguyên tử.', 'table'],
      ['Carbon từ amino acid xuất hiện trong glucose mới tạo. Điều này cho thấy?', 'Một số khung carbon amino acid có thể tham gia tân tạo glucose', ['Mọi amino acid trực tiếp là glucose', 'Protein không thể phân giải', 'Không có liên hệ giữa đường chuyển hóa'], 'Mạng chuyển hóa có các nút trung gian chung.'],
      ['Một enzyme đầu con đường tổng hợp bị ức chế khi ATP cao. Ý nghĩa?', 'Phối hợp tốc độ đồng hóa với trạng thái năng lượng và tránh lãng phí', ['ATP phá enzyme ngẫu nhiên', 'Tế bào muốn mất năng lượng', 'Mọi phản ứng dừng vĩnh viễn'], 'Điều hòa phản hồi phân bổ tài nguyên.'],
      ['Tỉ lệ NADH/NAD+ quá cao có thể làm gì?', 'Hạn chế các phản ứng cần NAD+ và chuyển hướng pyruvate sang tái oxi hóa NADH', ['Tăng mọi oxi hóa vô hạn', 'Không ảnh hưởng con đường nào', 'Tạo thêm chromosome'], 'Trạng thái oxi hóa–khử điều khiển dòng chuyển hóa.'],
      ['Chất ức chế ATP synthase làm oxygen tiêu thụ giảm dù chuỗi electron chưa bị chặn trực tiếp. Giải thích?', 'Gradient proton tích lũy làm chuỗi electron khó bơm thêm proton', ['Oxygen biến thành ATP', 'ATP synthase là oxygen', 'Không có liên hệ giữa hai hệ'], 'Ghép hóa thẩm làm hai quá trình phụ thuộc nhau.'],
      ['Một chất tháo ghép làm oxygen tiêu thụ tăng nhưng ATP giảm. Điều gì xảy ra?', 'Gradient bị tiêu tán dưới dạng nhiệt nên chuỗi chạy nhưng ATP synthase thu ít năng lượng', ['Mọi năng lượng biến mất', 'Oxygen trực tiếp phá ATP', 'Đường phân dừng chắc chắn'], 'Tốc độ oxi hóa và hiệu suất tạo ATP có thể tách nhau.'],
      ['Tế bào quang hợp ban ngày vẫn hô hấp vì sao?', 'Nó cần ATP và chất trung gian ở mọi thời điểm; quang hợp không thay thế toàn bộ hô hấp', ['Hô hấp chỉ có ở động vật', 'Ban ngày ti thể biến mất', 'Quang hợp không tạo chất hữu cơ'], 'Hai hệ có vai trò liên hệ nhưng không loại trừ.'],
      ['Khẳng định “phân giải chỉ phá hủy còn tổng hợp chỉ xây dựng” thiếu điểm nào?', 'Phân giải cung cấp ATP và chất trung gian cho tổng hợp; tổng hợp sử dụng sản phẩm của mạng phân giải', ['Hai nhóm không liên quan', 'Tổng hợp không cần năng lượng', 'Phân giải không có enzyme'], 'Chuyển hóa là mạng liên kết vật chất và năng lượng.']
    ]
  ))
];

export const g10BiologyModule4Adaptive = buildBiologyAdaptiveBank(seeds);
