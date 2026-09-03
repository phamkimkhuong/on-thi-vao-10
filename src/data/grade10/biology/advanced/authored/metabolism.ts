import { bioProblem, biologyTable } from './helpers';

const topicId = 'bio10-adv-metabolism';

export const metabolismProblems = [
  bioProblem(topicId, {
    content: 'Tốc độ enzyme được đo ở nhiều nồng độ cơ chất khi không và có chất X. Kết luận nào phù hợp nhất với bảng?',
    correct: 'X làm giảm ái lực biểu kiến nhưng tốc độ cực đại gần như không đổi, phù hợp ức chế cạnh tranh.',
    distractors: ['X phá hủy hoàn toàn enzyme vì mọi tốc độ bằng 0.', 'X làm tăng tốc độ cực đại gấp đôi.', 'X không ảnh hưởng vì ở nồng độ cơ chất thấp hai tốc độ phải giống nhau.'],
    insight: 'Ở cơ chất cao, tốc độ hai nhóm hội tụ; ở cơ chất thấp, nhóm X chậm hơn.',
    evidence: 'Không X đạt gần 98 và có X đạt 94 ở mức cơ chất cao, nhưng chênh lệch lớn ở mức thấp.',
    mechanism: 'Cơ chất nồng độ cao có thể cạnh tranh vượt chất ức chế tại trung tâm hoạt động, phục hồi Vmax nhưng cần nhiều cơ chất hơn.',
    reasoning: ['Không cần gán chính xác hằng số nếu bảng chỉ cho xu hướng.', 'Tốc độ khác 0 loại khả năng enzyme bị phá hủy hoàn toàn.'],
    distractorReasons: ['mâu thuẫn các giá trị tốc độ dương.', 'đọc sai hai cực đại gần nhau.', 'phủ nhận chênh lệch rõ ở cơ chất thấp.'],
    tags: ['động học enzyme', 'ức chế cạnh tranh'],
    stimulus: biologyTable('bio10-adv-metabolism-01', 'Enzyme và chất X', 'Tốc độ tương đối.', 'Tốc độ phản ứng', [{ key: 's', label: 'Cơ chất', unit: 'mM' }, { key: 'control', label: 'Không X' }, { key: 'x', label: 'Có X' }], [{ s: 1, control: 24, x: 11 }, { s: 5, control: 65, x: 42 }, { s: 20, control: 91, x: 82 }, { s: 100, control: 98, x: 94 }])
  }),
  bioProblem(topicId, {
    content: 'Chất Y gắn ở vị trí xa trung tâm hoạt động và làm giảm Vmax; tăng rất cao cơ chất không phục hồi tốc độ. Giải thích nào đúng?',
    correct: 'Y làm giảm số enzyme hoạt động hiệu quả hoặc khả năng xúc tác; cơ chất không thể đẩy Y khỏi vị trí điều hòa.',
    distractors: ['Y chỉ tranh đúng trung tâm hoạt động nên cơ chất cao phải phục hồi hoàn toàn.', 'Y làm phản ứng có ΔG thuận lợi hơn nên tốc độ giảm.', 'Y biến cơ chất thành enzyme.'],
    insight: 'Vị trí gắn khác và Vmax giảm tách cơ chế này khỏi cạnh tranh trực tiếp.',
    evidence: 'Cơ chất dư không thắng được tác động của Y.',
    mechanism: 'Gắn allosteric có thể làm đổi cấu hình hoặc tốc độ chuyển hóa của enzyme dù trung tâm hoạt động không bị chiếm.',
    reasoning: ['Enzyme xúc tác không quyết định dấu ΔG của phản ứng.', 'Cơ chất và enzyme không hoán đổi bản chất.'],
    distractorReasons: ['mâu thuẫn vị trí gắn và đáp ứng với cơ chất cao.', 'nhầm động học với nhiệt động học.', 'mô tả chuyển loại phân tử vô nghĩa.'],
    tags: ['enzyme', 'điều hòa allosteric']
  }),
  bioProblem(topicId, {
    content: 'Hoạt tính enzyme tăng từ 10 đến 40 °C rồi giảm ở 55 °C. Khi đưa mẫu 55 °C về 30 °C, hoạt tính chỉ phục hồi 8%. Điều gì được hỗ trợ mạnh nhất?',
    correct: 'Ở 55 °C phần lớn enzyme bị biến đổi cấu trúc khó hồi phục, không chỉ phản ứng chậm tạm thời.',
    distractors: ['55 °C làm cơ chất biến thành ATP nên enzyme không cần hoạt động.', 'Giảm ở 55 °C chứng minh mọi liên kết peptide đã bị cắt.', 'Nhiệt độ không ảnh hưởng cấu trúc protein.'],
    insight: 'Thử phục hồi nhiệt độ phân biệt ảnh hưởng động học thuận nghịch với biến tính khó hồi phục.',
    evidence: 'Sau khi trở lại 30 °C, hoạt tính vẫn rất thấp thay vì về mức ban đầu.',
    mechanism: 'Nhiệt cao làm xáo trộn tương tác giữ cấu trúc bậc cao và trung tâm hoạt động; không nhất thiết cắt mạch peptide.',
    reasoning: ['Nếu chỉ do chuyển động phân tử tạm thời, hạ nhiệt phù hợp phải phục hồi nhiều hơn.', 'Từ “phần lớn” phù hợp mức phục hồi 8%.'],
    distractorReasons: ['thêm chuyển hóa cơ chất không có.', 'đồng nhất biến tính với thủy phân mạch chính.', 'phủ nhận trực tiếp dữ liệu phục hồi.'],
    tags: ['nhiệt độ', 'biến tính enzyme']
  }),
  bioProblem(topicId, {
    content: 'Enzyme E có hoạt tính cao nhất ở pH 2, còn F cao nhất ở pH 8. Không thể kết luận điều nào sau đây chỉ từ dữ liệu đó?',
    correct: 'E chắc chắn nằm trong dạ dày và F chắc chắn nằm trong ruột của mọi sinh vật.',
    distractors: ['Trạng thái ion hóa của nhóm tại trung tâm hoạt động có thể khác theo pH.', 'Mỗi enzyme có vùng pH hoạt động phù hợp với cấu trúc của nó.', 'pH cực đoan có thể làm giảm hoạt tính do ảnh hưởng liên kết và điện tích.'],
    insight: 'Đặc điểm động học không đủ xác định tuyệt đối vị trí cơ thể nếu không có dữ kiện nguồn enzyme.',
    evidence: 'Đề chỉ cung cấp đường hoạt tính theo pH, không nêu sinh vật hay mô.',
    mechanism: 'pH ảnh hưởng proton hóa amino acid và cấu trúc protein; nhiều môi trường ngoài dạ dày/ruột có pH tương tự.',
    reasoning: ['Ba phát biểu cơ chế còn lại phù hợp kiến thức và không vượt phạm vi.', 'Từ “chắc chắn” và “mọi sinh vật” tạo ngoại suy không hợp lệ.'],
    distractorReasons: ['đây là cơ chế hợp lí chứ không phải kết luận sai.', 'đây là mô tả chung được đường cong hỗ trợ.', 'đây là một nguyên nhân hợp lí của giảm hoạt tính.'],
    tags: ['pH', 'giới hạn kết luận']
  }),
  bioProblem(topicId, {
    content: 'Trong thí nghiệm amylase–tinh bột, nhóm nào là đối chứng âm tốt nhất để xác nhận đường khử sinh ra do hoạt tính amylase?',
    correct: 'Tinh bột với amylase đã đun sôi, ủ cùng pH, nhiệt độ và thời gian.',
    distractors: ['Tinh bột với amylase hoạt động bình thường.', 'Chỉ glucose với Benedict.', 'Amylase hoạt động nhưng không có tinh bột, đồng thời đổi cả pH và nhiệt độ.'],
    insight: 'Đối chứng âm phải giống phép thử nhưng loại riêng hoạt tính enzyme cần kiểm tra.',
    evidence: 'Đun sôi làm amylase mất hoạt tính trong khi các thành phần và điều kiện khác được giữ.',
    mechanism: 'Nếu đối chứng không tạo đường khử còn mẫu hoạt động có, khác biệt được quy cho xúc tác amylase.',
    reasoning: ['Glucose với Benedict là đối chứng dương của thuốc thử, không phải âm của enzyme.', 'Đổi nhiều biến làm đối chứng khó diễn giải.'],
    distractorReasons: ['đây là nhóm thí nghiệm chứ không phải đối chứng âm.', 'kiểm tra Benedict hoạt động nhưng không loại hoạt tính amylase.', 'không giữ điều kiện tương đương và thiếu cơ chất.'],
    tags: ['thực hành enzyme', 'đối chứng']
  }),
  bioProblem(topicId, {
    content: 'Phản ứng tổng hợp chất M có ΔG dương được ghép với thủy phân ATP có độ lớn ΔG âm lớn hơn. Khi nào phản ứng ghép có thể tự diễn biến về mặt năng lượng?',
    correct: 'Khi hai phản ứng được liên kết cơ chế để tổng ΔG của quá trình ghép âm.',
    distractors: ['Chỉ cần ATP hiện diện trong cùng dung dịch dù không có enzyme ghép.', 'Mọi phản ứng ΔG dương tự diễn ra nhanh nếu tăng cơ chất.', 'ATP cung cấp nguyên tử carbon để tạo mọi sản phẩm.'],
    insight: 'Cộng ΔG chỉ có ý nghĩa sinh học khi enzyme ghép sự kiện, không phải đặt hai phản ứng cạnh nhau.',
    evidence: 'Độ lớn âm của thủy phân ATP có thể bù phần dương nếu hai phản ứng dùng chung chất trung gian hoặc bước enzyme.',
    mechanism: 'Phosphoryl hóa chất trung gian thường làm con đường tổng thể thuận lợi hơn.',
    reasoning: ['Động lực nhiệt động không đảm bảo tốc độ nếu thiếu xúc tác.', 'ATP chủ yếu truyền nhóm phosphate/năng lượng tự do trong tình huống này.'],
    distractorReasons: ['nhầm đồng tồn tại với ghép phản ứng.', 'nhầm nồng độ với việc luôn đảo dấu ΔG.', 'gán vai trò nguồn carbon phổ quát cho ATP.'],
    tags: ['ATP', 'ghép phản ứng']
  }),
  bioProblem(topicId, {
    content: 'Tế bào oxy hóa hoàn toàn glucose. Nếu oxygen tiêu thụ giảm mạnh nhưng CO₂ vẫn được tạo một thời gian ngắn, diễn giải phù hợp nhất là gì?',
    correct: 'Một số bước khử carboxyl vẫn có thể tiếp tục tạm thời, nhưng chuỗi truyền electron bị hạn chế nên NADH không được tái oxy hóa bền vững.',
    distractors: ['CO₂ chỉ được tạo ở chuỗi truyền electron nên dữ liệu không thể xảy ra.', 'Oxygen là nguyên tử carbon tạo CO₂.', 'Thiếu oxygen làm ATP hiếu khí tăng mãi.'],
    insight: 'Nơi tạo CO₂ và nơi dùng oxygen là các bước khác nhau nhưng liên kết qua chất mang electron.',
    evidence: 'CO₂ còn xuất hiện ngắn hạn trong khi oxygen giảm, cho thấy các phản ứng trước chuỗi chưa dừng tức thì.',
    mechanism: 'Oxygen là chất nhận electron cuối; khi thiếu, NADH tích lũy và dần hạn chế các bước oxy hóa tạo CO₂.',
    reasoning: ['CO₂ phát sinh khi khử carboxyl chất trung gian.', 'Oxygen trong O₂ không cung cấp carbon cho CO₂.'],
    distractorReasons: ['đặt sai vị trí sinh CO₂.', 'nhầm nguyên tố nguồn carbon.', 'đảo hậu quả năng lượng của thiếu chất nhận electron.'],
    tags: ['hô hấp tế bào', 'chất mang electron']
  }),
  bioProblem(topicId, {
    content: 'Cyanide chặn enzyme cuối chuỗi truyền electron. Thay đổi tức thời nào phù hợp nhất?',
    correct: 'Oxygen tiêu thụ giảm, NADH tăng và ATP từ phosphoryl hóa oxy hóa giảm.',
    distractors: ['NADH giảm vì không còn electron.', 'Gradient proton tăng vô hạn dù bơm proton dừng.', 'Đường phân chắc chắn dừng ngay trong mọi tế bào.'],
    insight: 'Chặn đầu ra electron làm các chất mang phía trước bị khử và mất động lực bơm proton.',
    evidence: 'Enzyme cuối không truyền electron cho oxygen nên dòng electron toàn chuỗi bị nghẽn.',
    mechanism: 'NADH không được oxy hóa thành NAD⁺; gradient giảm dần và ATP synthase thiếu lực proton.',
    reasoning: ['Đường phân có thể tiếp tục tạm thời nếu NAD⁺ được tái sinh bằng lên men.', 'Gradient không thể tăng khi nguồn bơm bị ngắt.'],
    distractorReasons: ['đảo trạng thái NADH/NAD⁺.', 'phủ nhận sự tiêu tán gradient.', 'dùng từ tuyệt đối bỏ khả năng lên men.'],
    tags: ['chuỗi truyền electron', 'ức chế hô hấp']
  }),
  bioProblem(topicId, {
    content: 'Nấm men được nuôi với glucose trong bình kín. Ethanol tăng, CO₂ tăng nhưng sinh khối tăng chậm hơn bình được sục oxygen. Giải thích nào đúng?',
    correct: 'Lên men tái sinh NAD⁺ nhưng thu ít ATP mỗi glucose hơn hô hấp hiếu khí, nên có ít năng lượng cho sinh trưởng.',
    distractors: ['Lên men không tạo bất kỳ ATP nào.', 'Ethanol là chất nhận electron cuối của chuỗi ti thể.', 'Có CO₂ chứng minh oxygen vẫn được tạo trong bình kín.'],
    insight: 'Mục tiêu cốt lõi của lên men là tái sinh NAD⁺ để đường phân tiếp tục, đổi lại hiệu suất ATP thấp.',
    evidence: 'Sản phẩm ethanol và CO₂ tăng trong thiếu oxygen, nhưng sinh khối thấp hơn.',
    mechanism: 'ATP được tạo ở đường phân bằng phosphoryl hóa mức cơ chất; pyruvate/acetaldehyde nhận electron để tái sinh NAD⁺.',
    reasoning: ['Không cần chuỗi electron ti thể cho lên men rượu.', 'CO₂ là sản phẩm khử carboxyl, không phải dấu hiệu tạo oxygen.'],
    distractorReasons: ['phủ nhận ATP của đường phân.', 'đặt ethanol sai vai trò và vị trí.', 'nhầm khí sản phẩm.'],
    tags: ['lên men', 'hiệu suất ATP']
  }),
  bioProblem(topicId, {
    content: 'Ba bình nấm men có cùng glucose và số tế bào đầu. Bình nào dự kiến tạo ethanol nhanh nhất trong giai đoạn đầu?',
    correct: 'Bình B: 30 °C, ít oxygen, pH 5.',
    distractors: ['Bình A: 5 °C, ít oxygen, pH 5.', 'Bình C: 30 °C, sục nhiều oxygen, pH 5.', 'Bình D: 80 °C, ít oxygen, pH 5.'],
    insight: 'Cần đồng thời có nhiệt độ hoạt động phù hợp và điều kiện ưu tiên lên men thay vì hô hấp.',
    evidence: '5 °C làm chuyển hóa chậm; 80 °C gây chết/biến tính; sục nhiều oxygen làm nấm men ưu tiên hô hấp.',
    mechanism: 'Ở khoảng nhiệt thích hợp và thiếu oxygen, dòng pyruvate được chuyển mạnh sang ethanol để tái sinh NAD⁺.',
    reasoning: ['So sánh từng bình với B theo đúng một yếu tố nổi bật.', 'Kết luận giới hạn ở “giai đoạn đầu” và điều kiện đã cho.'],
    distractorReasons: ['nhiệt độ quá thấp làm enzyme chậm.', 'oxygen cao chuyển cân bằng chuyển hóa sang hô hấp.', 'nhiệt độ quá cao phá hệ enzyme và tế bào.'],
    tags: ['lên men rượu', 'yếu tố môi trường'],
    stimulus: biologyTable('bio10-adv-metabolism-10', 'Bố trí lên men', 'Các bình có cùng thể tích.', 'Điều kiện nuôi', [{ key: 'flask', label: 'Bình' }, { key: 'temp', label: 'Nhiệt độ', unit: '°C' }, { key: 'oxygen', label: 'Oxygen' }, { key: 'ph', label: 'pH' }], [{ flask: 'A', temp: 5, oxygen: 'Ít', ph: 5 }, { flask: 'B', temp: 30, oxygen: 'Ít', ph: 5 }, { flask: 'C', temp: 30, oxygen: 'Nhiều', ph: 5 }, { flask: 'D', temp: 80, oxygen: 'Ít', ph: 5 }])
  }),
  bioProblem(topicId, {
    content: 'Lục lạp được chiếu riêng ánh sáng đỏ, xanh lam và xanh lục với cùng số photon. Tốc độ giải phóng oxygen cao ở đỏ và xanh lam, thấp ở xanh lục. Giải thích nào tốt nhất?',
    correct: 'Sắc tố quang hợp hấp thụ đỏ và xanh lam hiệu quả hơn, còn phần lớn ánh sáng xanh lục bị phản xạ hoặc truyền qua.',
    distractors: ['Ánh sáng xanh lục không chứa năng lượng.', 'Oxygen được tạo trực tiếp từ CO₂ nên màu không liên quan.', 'Chlorophyll chỉ hấp thụ xanh lục nên tốc độ thấp.'],
    insight: 'Phổ hoạt động phản ánh mức hấp thụ của sắc tố và hiệu quả dùng năng lượng ánh sáng.',
    evidence: 'Cùng số photon nhưng màu khác tạo tốc độ khác; xanh lục cho tín hiệu thấp.',
    mechanism: 'Năng lượng ánh sáng được sắc tố hấp thụ kích thích electron; oxygen sinh từ quang phân li nước trong phản ứng sáng.',
    reasoning: ['Ánh sáng xanh lục vẫn có năng lượng nhưng ít được hệ sắc tố hấp thụ.', 'Nguồn oxygen không phải CO₂.'],
    distractorReasons: ['đồng nhất hấp thụ thấp với không có năng lượng.', 'đặt sai nguồn oxygen.', 'đảo phổ hấp thụ chlorophyll.'],
    tags: ['quang hợp', 'phổ hấp thụ']
  }),
  bioProblem(topicId, {
    content: 'Ở ánh sáng thấp, tăng CO₂ không làm quang hợp tăng; ở ánh sáng cao, tăng CO₂ làm tốc độ tăng rồi bão hòa. Kết luận nào đúng?',
    correct: 'Yếu tố giới hạn thay đổi: ánh sáng giới hạn ở mức thấp, còn CO₂ có thể giới hạn khi ánh sáng đủ.',
    distractors: ['CO₂ không bao giờ tham gia quang hợp.', 'Ánh sáng cao làm mọi enzyme hoạt động vô hạn.', 'Chỉ một yếu tố duy nhất giới hạn quang hợp trong mọi điều kiện.'],
    insight: 'Yếu tố giới hạn là yếu tố mà tăng nó trong bối cảnh hiện tại làm tốc độ tăng.',
    evidence: 'CO₂ thêm vào không hiệu quả khi thiếu ánh sáng nhưng có hiệu quả khi ánh sáng cao.',
    mechanism: 'Phản ứng sáng cung cấp ATP/NADPH; cố định carbon cần CO₂ và enzyme, nên nút thắt chuyển theo điều kiện.',
    reasoning: ['Bão hòa CO₂ cao gợi một giới hạn khác xuất hiện.', 'Không được ngoại suy tuyến tính vô hạn.'],
    distractorReasons: ['mâu thuẫn tốc độ tăng khi thêm CO₂ ở ánh sáng cao.', 'dùng từ vô hạn trái bão hòa.', 'phủ nhận sự chuyển nút thắt.'],
    tags: ['yếu tố giới hạn', 'quang hợp'],
    stimulus: biologyTable('bio10-adv-metabolism-12', 'Quang hợp theo CO₂', 'Tốc độ tương đối.', 'Ảnh hưởng kết hợp', [{ key: 'co2', label: 'CO₂', unit: 'ppm' }, { key: 'low', label: 'Ánh sáng thấp' }, { key: 'high', label: 'Ánh sáng cao' }], [{ co2: 200, low: 12, high: 20 }, { co2: 500, low: 13, high: 48 }, { co2: 1000, low: 13, high: 61 }, { co2: 1500, low: 13, high: 62 }])
  }),
  bioProblem(topicId, {
    content: 'Vi khuẩn chỉ sinh trưởng khi môi trường có NH₄⁺, CO₂ và muối khoáng, không cần chất hữu cơ hay ánh sáng. Kiểu dinh dưỡng phù hợp nhất là gì?',
    correct: 'Hóa tự dưỡng: lấy năng lượng từ oxy hóa chất vô cơ và carbon chủ yếu từ CO₂.',
    distractors: ['Quang tự dưỡng vì dùng CO₂.', 'Hóa dị dưỡng vì NH₄⁺ là chất hữu cơ.', 'Quang dị dưỡng vì không cần oxygen.'],
    insight: 'Phân loại phải dùng hai trục độc lập: nguồn năng lượng và nguồn carbon.',
    evidence: 'Không ánh sáng loại “quang”; không chất hữu cơ và có CO₂ làm nguồn carbon gợi “tự dưỡng”; NH₄⁺ là chất vô cơ cho năng lượng.',
    mechanism: 'Oxy hóa hợp chất nitrogen khử cung cấp electron/năng lượng cho tổng hợp ATP và cố định CO₂.',
    reasoning: ['Tự dưỡng không có nghĩa tự tạo năng lượng.', 'NH₄⁺ không phải hợp chất hữu cơ vì không có khung carbon.'],
    distractorReasons: ['chỉ nhìn nguồn carbon và bỏ nguồn năng lượng.', 'phân loại sai NH₄⁺.', 'gán ánh sáng dù đề loại trừ.'],
    tags: ['hóa tổng hợp', 'kiểu dinh dưỡng']
  }),
  bioProblem(topicId, {
    content: 'Cây được cung cấp nước có oxygen đồng vị nặng, còn CO₂ bình thường. Oxygen khí giải phóng mang đồng vị nặng. Kết quả này hỗ trợ điều gì?',
    correct: 'Oxygen giải phóng trong quang hợp có nguồn trực tiếp từ nước.',
    distractors: ['Mọi nguyên tử oxygen trong glucose đều chắc chắn đến từ nước.', 'CO₂ không tham gia tổng hợp chất hữu cơ.', 'Nước là nguồn carbon của glucose.'],
    insight: 'Dấu đồng vị truy vết nguyên tử trong sản phẩm cụ thể, không giải đáp mọi dòng nguyên tử khác.',
    evidence: 'Chỉ oxygen của nước được đánh dấu và dấu xuất hiện trong O₂ khí.',
    mechanism: 'Phản ứng sáng quang phân li nước, giải phóng electron, proton và oxygen phân tử.',
    reasoning: ['CO₂ vẫn cung cấp carbon cho carbohydrate.', 'Không được mở rộng kết quả O₂ khí sang mọi oxygen của glucose.'],
    distractorReasons: ['ngoại suy sang sản phẩm không được đo.', 'phủ nhận vai trò cố định carbon.', 'đổi sai nguồn nguyên tố carbon.'],
    tags: ['đồng vị đánh dấu', 'quang phân li nước']
  }),
  bioProblem(topicId, {
    content: 'Chất U làm màng trong ti thể thấm proton. Sau xử lí, oxygen tiêu thụ tăng nhưng ATP giảm và nhiệt tăng. Mô hình nào giải thích trọn vẹn?',
    correct: 'U phá ghép: proton quay về không qua ATP synthase, chuỗi electron tăng bù nhưng năng lượng tỏa thành nhiệt.',
    distractors: ['U chặn hoàn toàn chuỗi electron nên oxygen tăng.', 'U cung cấp ATP trực tiếp nhưng máy đo không nhận ra.', 'U làm ti thể cố định CO₂.'],
    insight: 'Tổ hợp oxygen tăng + ATP giảm là dấu hiệu mất ghép, không phải ức chế chuỗi đơn thuần.',
    evidence: 'Dòng electron còn mạnh thể hiện qua oxygen; hiệu suất thu ATP lại thấp và nhiệt tăng.',
    mechanism: 'Rò proton làm tiêu gradient; cơ chất bị oxy hóa nhanh hơn để cố phục hồi gradient nhưng proton bỏ qua ATP synthase.',
    reasoning: ['Nếu chuỗi bị chặn, oxygen phải giảm.', 'Năng lượng hóa học không biến mất mà chuyển thành nhiệt.'],
    distractorReasons: ['mâu thuẫn chiều oxygen tiêu thụ.', 'bịa nguồn ATP ngoài phép đo.', 'gán chức năng của sinh vật tự dưỡng cho ti thể.'],
    tags: ['phá ghép', 'phosphoryl hóa oxy hóa'],
    stimulus: biologyTable('bio10-adv-metabolism-15', 'Ảnh hưởng của U', 'Các giá trị so với đối chứng.', 'Chỉ số chuyển hóa', [{ key: 'group', label: 'Nhóm' }, { key: 'oxygen', label: 'Tiêu thụ O₂', unit: '%' }, { key: 'atp', label: 'ATP', unit: '%' }, { key: 'heat', label: 'Nhiệt', unit: '%' }], [{ group: 'Đối chứng', oxygen: 100, atp: 100, heat: 100 }, { group: 'Có U', oxygen: 163, atp: 37, heat: 181 }])
  }),
  bioProblem(topicId, {
    content: 'Phosphoryl hóa mức cơ chất khác phosphoryl hóa oxy hóa ở điểm cốt lõi nào?',
    correct: 'Một enzyme chuyển trực tiếp phosphate từ chất trung gian giàu năng lượng sang ADP, không cần gradient proton ngay tại bước tạo ATP.',
    distractors: ['Chỉ xảy ra khi có oxygen và luôn trong màng trong ti thể.', 'Dùng ánh sáng để gắn phosphate vào glucose.', 'Không tạo ATP mà chỉ tạo NADH.'],
    insight: 'Tên gọi mô tả nguồn phosphate trực tiếp từ cơ chất, không phải vị trí hay điều kiện oxygen tuyệt đối.',
    evidence: 'Bước này có thể xuất hiện trong đường phân kể cả khi tế bào lên men.',
    mechanism: 'Năng lượng của liên kết phosphate trong chất trung gian được enzyme ghép với tạo ATP từ ADP.',
    reasoning: ['Phosphoryl hóa oxy hóa dùng gradient proton và ATP synthase.', 'Một con đường có thể đồng thời tạo NADH ở bước khác.'],
    distractorReasons: ['gán điều kiện và vị trí của cơ chế khác.', 'nhầm với phản ứng sáng và phosphoryl hóa glucose.', 'phủ nhận sản phẩm định nghĩa của quá trình.'],
    tags: ['ATP', 'phosphoryl hóa mức cơ chất']
  }),
  bioProblem(topicId, {
    content: 'Sản phẩm cuối Z ức chế enzyme đầu tiên chỉ thuộc riêng nhánh tổng hợp Z nhưng không ức chế enzyme chung trước điểm phân nhánh. Lợi ích nào lớn nhất?',
    correct: 'Ngăn sản xuất dư Z mà vẫn cho chất trung gian chung chảy sang các nhánh cần thiết khác.',
    distractors: ['Dừng toàn bộ chuyển hóa của tế bào khi Z đủ.', 'Làm enzyme đầu nhánh tổng hợp thêm Z nhanh hơn.', 'Phá hủy vĩnh viễn mọi enzyme trước điểm phân nhánh.'],
    insight: 'Điều hòa ở bước cam kết của nhánh tạo kiểm soát chọn lọc và tiết kiệm.',
    evidence: 'Enzyme bị ức chế nằm sau điểm phân nhánh và chỉ phục vụ Z.',
    mechanism: 'Phản hồi âm giảm thông lượng riêng nhánh Z khi sản phẩm tích lũy, trong khi tiền chất vẫn phục vụ nhánh khác.',
    reasoning: ['Ức chế thường thuận nghịch, không cần phá enzyme.', 'Phản hồi âm không tăng sản phẩm đang dư.'],
    distractorReasons: ['mở rộng kiểm soát cục bộ thành dừng toàn hệ.', 'đảo dấu phản hồi.', 'gán phá hủy vĩnh viễn không được nêu.'],
    tags: ['điều hòa chuyển hóa', 'phản hồi âm']
  }),
  bioProblem(topicId, {
    content: 'Thuốc nhuộm D mất màu khi nhận electron. Trong ống có cơ chất hô hấp và dịch ti thể, D mất màu nhanh; khi đun sôi dịch ti thể, D không mất màu. Kết luận nào tốt nhất?',
    correct: 'Sự khử D phụ thuộc hệ protein/enzyme còn hoạt tính trong dịch ti thể, không chỉ sự hiện diện của cơ chất.',
    distractors: ['Đun sôi tạo thêm electron nên D phải mất màu nhanh hơn.', 'D mất màu chứng minh ATP được tạo với hiệu suất 100%.', 'Cơ chất tự truyền electron cho D với cùng tốc độ dù không có enzyme.'],
    insight: 'Đối chứng đun sôi giữ thành phần cơ bản nhưng làm mất hoạt tính protein, giúp xác định vai trò xúc tác.',
    evidence: 'Chỉ ống có dịch ti thể không đun mới làm D mất màu.',
    mechanism: 'Enzyme dehydrogenase chuyển electron từ cơ chất qua chất mang; nhiệt cao phá cấu trúc protein và chặn dòng electron.',
    reasoning: ['Thuốc nhuộm là chất nhận electron chỉ thị, không đo trực tiếp toàn bộ ATP.', 'Có cơ chất nhưng thiếu hệ enzyme hoạt động không đủ tạo tốc độ quan sát.'],
    distractorReasons: ['đảo tác động của đun sôi protein.', 'suy hiệu suất ATP từ chỉ báo redox.', 'phủ nhận vai trò enzyme được đối chứng chứng minh.'],
    tags: ['thí nghiệm hô hấp', 'chỉ thị oxi hóa–khử'],
    stimulus: biologyTable('bio10-adv-metabolism-18', 'Thử nghiệm thuốc nhuộm D', 'Các ống có cùng lượng D và cơ chất.', 'Thời gian mất 50% màu', [{ key: 'tube', label: 'Ống' }, { key: 'mito', label: 'Dịch ti thể' }, { key: 'substrate', label: 'Cơ chất' }, { key: 'time', label: 'Thời gian', unit: 'phút' }], [{ tube: 1, mito: 'Có', substrate: 'Có', time: 3 }, { tube: 2, mito: 'Đun sôi', substrate: 'Có', time: '>30' }, { tube: 3, mito: 'Có', substrate: 'Không', time: '>30' }])
  })
];
