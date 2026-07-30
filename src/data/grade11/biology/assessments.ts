import type { AssessmentBlueprint, MockExam, Question } from '@/types';
import type { CourseSolution } from '@/data/schema';

type Choice = 'A' | 'B' | 'C' | 'D';
interface AssessmentFact {
  number: number;
  correct: string;
  wrong: [string, string, string];
  explanation: string;
}

const facts: AssessmentFact[] = [
  { number: 1, correct: 'Đồng hóa tổng hợp chất và tích lũy năng lượng; dị hóa phân giải chất và giải phóng năng lượng.', wrong: ['Đồng hóa và dị hóa đều chỉ phân giải chất.', 'Trao đổi chất chỉ xảy ra trong hệ tiêu hóa.', 'ATP là chất thải không liên quan chuyển hóa.'], explanation: 'Hai mặt đồng hóa–dị hóa liên kết qua vật chất và năng lượng.' },
  { number: 2, correct: 'Nước đi từ nơi có thế nước cao hơn đến nơi có thế nước thấp hơn qua màng phù hợp.', wrong: ['Rễ bơm trực tiếp từng phân tử nước bằng ATP.', 'Nước luôn đi từ dung dịch ưu trương sang nhược trương.', 'Đai Caspary cho mọi chất đi tự do.'], explanation: 'Chênh lệch thế nước là động lực trực tiếp của dòng nước qua màng.' },
  { number: 3, correct: 'Ion khoáng có thể được hấp thụ thụ động hoặc chủ động tùy gradient điện hóa và protein vận chuyển.', wrong: ['Mọi ion đi vào rễ bằng một cơ chế.', 'Vận chuyển ngược gradient không cần năng lượng.', 'Nguyên tố vi lượng không thể thiết yếu.'], explanation: 'Cơ chế hấp thụ phụ thuộc gradient và hoạt động của màng.' },
  { number: 4, correct: 'Mạch gỗ chủ yếu đưa nước–khoáng lên; mạch rây vận chuyển chất hữu cơ từ nguồn đến nơi sử dụng hoặc dự trữ.', wrong: ['Mạch rây luôn chỉ vận chuyển từ trên xuống.', 'Mạch gỗ vận chuyển chủ yếu sucrose.', 'Hai hệ mạch có thành phần và động lực giống hệt nhau.'], explanation: 'Phải phân biệt thành phần dịch, động lực và quan hệ nguồn–nơi chứa.' },
  { number: 5, correct: 'Thoát hơi nước tạo lực hút mạch gỗ, hỗ trợ trao đổi khí và điều hòa nhiệt nhưng quá mức gây mất nước.', wrong: ['Thoát hơi nước chỉ có hại.', 'Khí khổng luôn mở tối đa khi cây thiếu nước.', 'Độ ẩm và gió không ảnh hưởng thoát hơi nước.'], explanation: 'Thoát hơi nước có lợi ích sinh lí và chi phí nước.' },
  { number: 6, correct: 'Thí nghiệm trao đổi nước cần chỉ thay một yếu tố, có đối chứng và đo dữ liệu trên nhiều mẫu.', wrong: ['Có thể đổi đồng thời ánh sáng, nước và giống.', 'Một cây thuận lợi nhất đại diện toàn bộ.', 'Không cần ghi điều kiện và thời gian.'], explanation: 'Kiểm soát biến và lặp mẫu là cơ sở suy luận.' },
  { number: 7, correct: 'Pha sáng ở màng thylakoid tạo ATP, NADPH và giải phóng oxygen có nguồn từ nước.', wrong: ['Oxygen quang hợp có nguồn trực tiếp từ carbon dioxide.', 'Chu trình Calvin diễn ra trong lòng thylakoid.', 'Pha sáng không tạo chất mang năng lượng.'], explanation: 'Quang phân li nước cung cấp electron và giải phóng oxygen.' },
  { number: 8, correct: 'C4 tách cố định carbon theo không gian; CAM tách theo thời gian đêm–ngày.', wrong: ['C4 và CAM giống hoàn toàn.', 'CAM mở khí khổng chủ yếu giữa trưa.', 'Pha cố định carbon chỉ diễn ra ban đêm ở mọi cây.'], explanation: 'C4 dùng hai nhóm tế bào; CAM dùng hai thời điểm trong cùng tế bào.' },
  { number: 9, correct: 'Một yếu tố làm quang hợp tăng đến vùng bão hòa hoặc tối ưu, sau đó yếu tố khác có thể trở thành giới hạn.', wrong: ['Tăng ánh sáng luôn làm quang hợp tăng vô hạn.', 'Nhiệt độ không ảnh hưởng enzyme quang hợp.', 'Một điểm dữ liệu đủ xác định đường đáp ứng.'], explanation: 'Phải xét vùng tối ưu và yếu tố giới hạn.' },
  { number: 10, correct: 'Thí nghiệm iodine chứng minh tinh bột cần lá đã khử tinh bột, vùng xử lí và đối chứng phù hợp.', wrong: ['Không cần cây ở tối trước thí nghiệm.', 'Iodine chứng minh trực tiếp oxygen.', 'Đun cồn là để bổ sung diệp lục.'], explanation: 'Khử tinh bột và đối chứng giúp liên hệ tinh bột mới với điều kiện quang hợp.' },
  { number: 11, correct: 'Hô hấp tế bào ở thực vật diễn ra cả ngày lẫn đêm; thiếu oxygen có thể tăng lên men và giảm ATP.', wrong: ['Thực vật chỉ hô hấp ban đêm.', 'Lên men tạo nhiều ATP hơn hiếu khí.', 'Bảo quản lạnh luôn làm hô hấp tăng.'], explanation: 'Hô hấp không dừng khi có ánh sáng và phụ thuộc điều kiện.' },
  { number: 12, correct: 'Hạt nảy mầm sống, mẫu hạt đã xử lí và chỉ thị phù hợp tạo thiết kế chứng minh hô hấp.', wrong: ['Chỉ dùng hạt chết làm mẫu thử.', 'Nước vôi trong đục chứng minh oxygen được tạo.', 'Không cần nhóm đối chứng.'], explanation: 'Mẫu sống–đối chứng cho phép gắn biến đổi chỉ thị với hô hấp.' },
  { number: 13, correct: 'Ống tiêu hóa có dòng thức ăn một chiều, chuyên hóa vùng và tiêu hóa ngoại bào hiệu quả.', wrong: ['Tiêu hóa và hấp thụ là một quá trình giống nhau.', 'Mọi động vật đều có ống tiêu hóa.', 'Tiêu hóa nội bào diễn ra trong lòng ruột.'], explanation: 'Cấu tạo ống tiêu hóa cho phép chuyên hóa và xử lí liên tục.' },
  { number: 14, correct: 'Bề mặt trao đổi khí hiệu quả thường rộng, mỏng, ẩm và duy trì chênh lệch nồng độ.', wrong: ['Bề mặt càng dày càng khuếch tán nhanh.', 'Dịch tuần hoàn côn trùng vận chuyển oxygen chủ yếu.', 'Mang hoạt động tốt nhất khi khô.'], explanation: 'Các đặc điểm làm giảm quãng khuếch tán và duy trì gradient.' },
  { number: 15, correct: 'Tuần hoàn kín giữ máu trong mạch; mao mạch có tổng tiết diện lớn nên vận tốc dòng máu thấp.', wrong: ['Mọi thân mềm đều có tuần hoàn hở.', 'Mao mạch có vận tốc lớn nhất.', 'Tuần hoàn kép chỉ có một lần máu qua tim mỗi vòng.'], explanation: 'Cấu tạo hệ mạch quyết định áp lực và vận tốc phù hợp trao đổi.' },
  { number: 16, correct: 'Đo nhịp tim cần chuẩn hóa tư thế, thời gian nghỉ, lặp phép đo và không dùng một lần đo để chẩn đoán.', wrong: ['Một lần đo đủ kết luận bệnh.', 'Có thể so số đo ở điều kiện hoàn toàn khác nhau.', 'Sai số dụng cụ không cần xem xét.'], explanation: 'Chuẩn hóa và lặp giúp dữ liệu đáng tin hơn.' },
  { number: 17, correct: 'Vaccine tạo đáp ứng và tế bào nhớ; kháng sinh không điều trị trực tiếp virus.', wrong: ['Vaccine chữa ngay mọi bệnh đang mắc.', 'Kháng sinh tiêu diệt mọi virus.', 'Miễn dịch đặc hiệu không có trí nhớ.'], explanation: 'Trí nhớ miễn dịch giúp đáp ứng lần sau nhanh và mạnh hơn.' },
  { number: 18, correct: 'Nước tiểu được tạo qua lọc ở cầu thận, tái hấp thu và bài tiết tiếp ở ống thận.', wrong: ['Nước tiểu chỉ do một lần lọc tạo ra.', 'Protein lớn bình thường lọc tự do vào nước tiểu.', 'Ống thận không điều chỉnh thành phần dịch.'], explanation: 'Ba quá trình phối hợp quyết định thành phần nước tiểu.' },
  { number: 19, correct: 'Phản hồi âm làm đáp ứng giảm sai lệch và giữ nội môi trong khoảng phù hợp.', wrong: ['Cân bằng nội môi là giữ chỉ số tuyệt đối không đổi.', 'Phản hồi âm luôn làm sai lệch tăng.', 'Điều hòa không cần bộ phận tiếp nhận.'], explanation: 'Nội môi ổn định động chứ không bất biến.' },
  { number: 20, correct: 'Tiêu hóa, hô hấp, tuần hoàn và bài tiết phối hợp cung cấp cơ chất–oxygen và loại chất thải.', wrong: ['Mỗi hệ hoạt động độc lập.', 'Tuần hoàn không vận chuyển chất dinh dưỡng.', 'Bài tiết không liên quan nội môi.'], explanation: 'Dòng vật chất nối các hệ ở cấp cơ thể.' },
  { number: 21, correct: 'Cảm ứng gồm tiếp nhận kích thích, xử lí tín hiệu và tạo đáp ứng.', wrong: ['Chỉ động vật có não mới cảm ứng.', 'Mọi cảm ứng phải là chuyển động nhanh.', 'Thụ thể và cơ quan đáp ứng luôn là một.'], explanation: 'Thực vật và động vật đều nhận–xử lí–đáp ứng bằng cơ chế phù hợp.' },
  { number: 22, correct: 'Hướng động là sinh trưởng có hướng phụ thuộc hướng tác nhân; dương là về phía tác nhân.', wrong: ['Dương nghĩa là có lợi trong mọi trường hợp.', 'Ứng động và hướng động không khác nhau.', 'Rễ và chồi luôn phản ứng auxin giống nhau.'], explanation: 'Chiều đáp ứng so với hướng tác nhân là tiêu chí phân loại.' },
  { number: 23, correct: 'Ứng động có chiều không phụ thuộc hướng tác nhân; loại không sinh trưởng thường dựa thay đổi sức trương.', wrong: ['Mọi vận động cây đều là hướng động.', 'Ứng động nhanh luôn do phân bào.', 'Ứng động không thể thuận nghịch.'], explanation: 'Ứng động được phân biệt bằng hướng và cơ chế.' },
  { number: 24, correct: 'Thí nghiệm hướng sáng phải kiểm soát nước, nhiệt độ, tuổi cây và đo góc cong trên nhiều mẫu.', wrong: ['Thay đồng thời ánh sáng và nước.', 'Chỉ chọn cây cong rõ nhất.', 'Không cần nhóm nhận ánh sáng đối chứng.'], explanation: 'Thiết kế phải tách được tác động của hướng chiếu sáng.' },
  { number: 25, correct: 'Cung phản xạ truyền từ thụ thể qua neuron cảm giác, trung ương, neuron vận động đến cơ quan đáp ứng.', wrong: ['Neuron vận động truyền tín hiệu từ cơ về trung ương.', 'Mọi phản xạ cần suy nghĩ có ý thức trước.', 'Tổn thương neuron vận động không ảnh hưởng đáp ứng.'], explanation: 'Chiều truyền và vai trò từng neuron quyết định kết quả phản xạ.' },
  { number: 26, correct: 'Điện thế hoạt động trên ngưỡng tuân theo tất cả hoặc không; cường độ thường được mã hóa bằng tần số xung.', wrong: ['Kích thích mạnh làm biên độ từng xung tăng vô hạn.', 'Myelin làm dẫn truyền chậm.', 'Kênh ion không tham gia điện thế màng.'], explanation: 'Biên độ xung ổn định, tần số mang thông tin cường độ.' },
  { number: 27, correct: 'Xung đến màng trước mở kênh Ca2+, gây giải phóng chất trung gian gắn thụ thể màng sau.', wrong: ['Túi chất trung gian nằm chủ yếu ở màng sau.', 'Synapse hóa học luôn truyền hai chiều.', 'Ca2+ ngăn xuất bào túi synapse.'], explanation: 'Phân cực cấu trúc tạo trình tự và tính một chiều.' },
  { number: 28, correct: 'Nhiều tập tính phối hợp nền tảng bẩm sinh với điều chỉnh qua trải nghiệm.', wrong: ['Mọi tập tính hoàn toàn bẩm sinh hoặc hoàn toàn học được.', 'Quen nhờn làm đáp ứng tăng dần với kích thích vô hại.', 'Học tập không thay đổi hành vi.'], explanation: 'Di truyền và trải nghiệm có thể cùng đóng góp.' },
  { number: 29, correct: 'Ethogram mô tả hành vi quan sát được; lấy mẫu phải phù hợp câu hỏi và tránh nhân hóa.', wrong: ['Nên ghi cảm xúc không có dấu hiệu.', 'Một cá thể luôn đại diện cả loài.', 'Có thể đổi tiêu chí giữa chừng.'], explanation: 'Tiêu chí rõ và lấy mẫu nhất quán tạo dữ liệu đáng tin.' },
  { number: 30, correct: 'Sinh trưởng là biến đổi định lượng; phát triển gồm phân hóa và biến đổi định tính.', wrong: ['Hai khái niệm hoàn toàn đồng nhất.', 'Tăng nước tạm thời luôn là sinh trưởng.', 'Phát triển chỉ là tăng khối lượng.'], explanation: 'Sinh trưởng tạo vật chất, phát triển tổ chức cấu trúc và chức năng.' },
  { number: 31, correct: 'Mô phân sinh đỉnh làm cơ quan dài ra; mô phân sinh bên góp phần tăng đường kính.', wrong: ['Mô đỉnh chỉ tạo gỗ thứ cấp.', 'Mọi cây một lá mầm có vòng năm rõ.', 'Tế bào mô phân sinh đã biệt hóa hoàn toàn.'], explanation: 'Vị trí mô phân sinh quyết định hướng sinh trưởng.' },
  { number: 32, correct: 'Tác động hormone thực vật phụ thuộc nồng độ, mô, giai đoạn và tương tác hormone.', wrong: ['Mỗi hormone chỉ có một tác dụng.', 'Hormone là phân bón cung cấp năng lượng.', 'Mọi hormone chỉ kích thích sinh trưởng.'], explanation: 'Không thể chọn tác dụng hormone mà bỏ bối cảnh.' },
  { number: 33, correct: 'Sinh trưởng có vùng điều kiện thích hợp; vượt ngưỡng nhiệt hoặc dinh dưỡng có thể gây ức chế.', wrong: ['Tăng nhiệt luôn làm cây lớn nhanh.', 'Không cần kiểm soát biến khi so phân bón.', 'Độ cao đồ thị luôn bằng tốc độ.'], explanation: 'Đọc dữ liệu cần xét độ dốc, vùng tối ưu và biến gây nhiễu.' },
  { number: 34, correct: 'Bấm ngọn giảm ưu thế ngọn và tạo điều kiện cho chồi bên phát triển.', wrong: ['Bấm ngọn làm mọi mô phân sinh chết.', 'Cắt càng nhiều luôn tăng năng suất.', 'Hormone càng đậm luôn càng tốt.'], explanation: 'Giảm tín hiệu từ chồi ngọn thay đổi sinh trưởng chồi nách.' },
  { number: 35, correct: 'Biến thái hoàn toàn có ấu trùng khác rõ trưởng thành và có giai đoạn nhộng.', wrong: ['Mọi lột xác là biến thái hoàn toàn.', 'Biến thái không hoàn toàn bắt buộc có nhộng.', 'Phát triển trực tiếp có ấu trùng khác hẳn trưởng thành.'], explanation: 'Chuỗi giai đoạn và nhộng là dấu hiệu phân biệt.' },
  { number: 36, correct: 'Ecdysone khởi phát lột xác; juvenile hormone cao giúp duy trì đặc điểm ấu trùng.', wrong: ['Juvenile hormone cao tạo trưởng thành ngay.', 'Thyroxine không liên quan biến thái lưỡng cư.', 'Growth hormone thay thế dinh dưỡng.'], explanation: 'Kết quả lột xác phụ thuộc phối hợp hormone và giai đoạn.' },
  { number: 37, correct: 'Sinh trưởng động vật phụ thuộc gene, dinh dưỡng, nhiệt độ, hormone và sức khỏe; can thiệp cần chuyên môn.', wrong: ['Tự dùng hormone luôn an toàn.', 'Nhiệt độ không ảnh hưởng động vật biến nhiệt.', 'Chỉ tổng năng lượng quyết định phát triển khỏe mạnh.'], explanation: 'Nhiều yếu tố phối hợp và can thiệp có rủi ro.' },
  { number: 38, correct: 'Quan sát biến thái cần tiêu chí giai đoạn rõ, nhiều cá thể, lịch cố định và kiểm soát điều kiện.', wrong: ['Một cá thể đủ đại diện.', 'Kích thước là tiêu chí duy nhất.', 'Đổi cả nhiệt độ và thức ăn vẫn tách được riêng tác động nhiệt.'], explanation: 'Thiết kế quan sát quyết định giới hạn kết luận.' },
  { number: 39, correct: 'Vô tính không hợp nhất giao tử; hữu tính có thụ tinh và tạo biến dị tổ hợp.', wrong: ['Vô tính luôn cần hai bố mẹ.', 'Hữu tính không tạo tổ hợp allele.', 'Một hình thức luôn tốt hơn trong mọi môi trường.'], explanation: 'Nguồn gene và sự có mặt giao tử là tiêu chí cốt lõi.' },
  { number: 40, correct: 'Nuôi cấy mô dựa tính toàn năng, điều kiện vô trùng và hormone; không mặc nhiên là chuyển gene.', wrong: ['Nuôi cấy mô luôn tạo GMO.', 'Ghép hòa hai bộ gene thành một.', 'Chiết cắt cành trước khi cành ra rễ.'], explanation: 'Phải phân biệt nhân giống sinh dưỡng với biến đổi gene.' },
  { number: 41, correct: 'Thụ phấn là đưa hạt phấn đến đầu nhụy; thụ tinh là hợp nhất giao tử xảy ra sau.', wrong: ['Hạt phấn chạm đầu nhụy là hợp tử hình thành.', 'Thụ tinh xảy ra trước thụ phấn.', 'Tế bào trứng nằm trong bao phấn.'], explanation: 'Ống phấn còn phải đưa tinh tử đến túi phôi.' },
  { number: 42, correct: 'Một tinh tử tạo hợp tử; tinh tử còn lại kết hợp tế bào trung tâm tạo nội nhũ.', wrong: ['Thụ tinh kép tạo hai phôi.', 'Hạt phấn phát triển thành quả.', 'Noãn phát triển thành lá.'], explanation: 'Hai dung hợp có sản phẩm và mức bội khác nhau.' },
  { number: 43, correct: 'Giâm, chiết, ghép cần mô sống, độ ẩm phù hợp, dụng cụ sạch và đánh giá trên nhiều mẫu.', wrong: ['Phơi khô cành trước khi giâm.', 'Ghép chỉ cần chạm lớp vỏ ngoài.', 'Một cành đẹp nhất đại diện toàn bộ.'], explanation: 'Điều kiện mô và thiết kế so sánh quyết định tỉ lệ thành công.' },
  { number: 44, correct: 'Thụ phấn kiểm soát cần khử nhị đúng lúc, bao cách li, đưa phấn mong muốn và ghi nhãn.', wrong: ['Bỏ bao cách li vẫn kiểm soát nguồn phấn.', 'Khử nhụy để hoa mẹ tạo hạt.', 'Không cần đối chứng nhiễm phấn.'], explanation: 'Quy trình phải loại tự thụ và phấn ngoài.' },
  { number: 45, correct: 'Trinh sinh tạo cá thể từ trứng không thụ tinh nên thuộc sinh sản vô tính.', wrong: ['Có trứng nên luôn là hữu tính.', 'Tái sinh chân luôn tạo cá thể mới.', 'Nảy chồi bắt buộc có giao tử.'], explanation: 'Tiêu chí là có hay không sự hợp nhất giao tử.' },
  { number: 46, correct: 'Thụ tinh trong không đồng nghĩa đẻ con; nhiều loài thụ tinh trong vẫn đẻ trứng.', wrong: ['Mọi loài đẻ trứng thụ tinh ngoài.', 'Giảm phân tạo hợp tử lưỡng bội.', 'Thụ tinh làm bộ nhiễm sắc thể thành đơn bội.'], explanation: 'Nơi thụ tinh và nơi phôi phát triển là hai tiêu chí khác nhau.' },
  { number: 47, correct: 'GnRH kích thích FSH, LH; đỉnh LH liên quan rụng trứng và hormone sinh dục tạo phản hồi.', wrong: ['FSH và LH do buồng trứng tiết.', 'Phản hồi luôn dương cả chu kì.', 'Thể vàng hình thành trước nang trứng.'], explanation: 'Theo dõi đúng trục hormone và thời gian chu kì.' },
  { number: 48, correct: 'Bao cao su dùng đúng giúp giảm nhiều STI; biện pháp nội tiết không phòng mọi bệnh lây truyền.', wrong: ['Mọi biện pháp tránh thai đều ngừa STI.', 'IVF là nhân bản vô tính.', 'Không cần đồng thuận nếu đã tránh thai.'], explanation: 'Phải phân biệt tránh thai, phòng bệnh và công nghệ hỗ trợ.' },
  { number: 49, correct: 'Cơ thể là hệ thống mở; các quá trình nối bằng dòng vật chất, năng lượng, thông tin và phản hồi.', wrong: ['Cơ quan hoạt động độc lập hoàn toàn.', 'Hệ thống mở không có ranh giới.', 'Phản hồi âm làm sai lệch tăng.'], explanation: 'Một thay đổi có thể lan qua nhiều hệ bằng chất và tín hiệu.' },
  { number: 50, correct: 'Rễ–mạch–lá, quang hợp–hô hấp và hormone phối hợp sinh trưởng, sinh sản của cây.', wrong: ['Cây chỉ cần quang hợp.', 'Ban ngày cây không hô hấp.', 'Hormone thay thế được nước và khoáng.'], explanation: 'Các quá trình thực vật phụ thuộc nguyên liệu, vận chuyển và điều hòa.' },
  { number: 51, correct: 'Tiêu hóa, hô hấp, tuần hoàn, bài tiết, thần kinh và nội tiết phối hợp duy trì hoạt động tế bào và nội môi.', wrong: ['Tuần hoàn không nối các hệ.', 'Thận chỉ tạo nước.', 'Thần kinh và nội tiết không tương tác.'], explanation: 'Cần theo dõi dòng chất và đáp ứng điều hòa qua nhiều hệ.' },
  { number: 52, correct: 'Đánh giá nghề cần xem nhiệm vụ, đào tạo, an toàn, đạo đức và đối chiếu nguồn chính thức cập nhật.', wrong: ['Chỉ tên nghề và thu nhập quảng cáo là đủ.', 'Nguồn nhiều lượt xem luôn chính thức.', 'Hiệu quả cho phép bỏ bảo mật và an toàn.'], explanation: 'Quyết định nghề nghiệp cần bằng chứng và hiểu công việc thực tế.' }
];

interface ExamSpec {
  key: string;
  title: string;
  kind: 'midterm' | 'final';
  semester: 1 | 2;
  scopeTopicIds: string[];
  pool: number[];
}

const range = (start: number, end: number) =>
  Array.from({ length: end - start + 1 }, (_, index) => index + start);

const specs: ExamSpec[] = [
  { key: 'mid1', title: 'Giữa học kỳ I', kind: 'midterm', semester: 1, scopeTopicIds: ['bio11-t01'], pool: range(1, 12) },
  { key: 'final1', title: 'Cuối học kỳ I', kind: 'final', semester: 1, scopeTopicIds: ['bio11-t01', 'bio11-t02'], pool: range(1, 29) },
  { key: 'mid2', title: 'Giữa học kỳ II', kind: 'midterm', semester: 2, scopeTopicIds: ['bio11-t03'], pool: range(30, 38) },
  { key: 'final2', title: 'Cuối học kỳ II', kind: 'final', semester: 2, scopeTopicIds: ['bio11-t03', 'bio11-t04', 'bio11-t05'], pool: range(30, 52) }
];

const outcomeId = (number: number) => `out-bio11-${String(number).padStart(2, '0')}`;
const typeId = (number: number) => `bio11-qt${String(number).padStart(2, '0')}`;
const topicId = (number: number) => {
  if (number <= 20) return 'bio11-t01';
  if (number <= 29) return 'bio11-t02';
  if (number <= 38) return 'bio11-t03';
  if (number <= 48) return 'bio11-t04';
  return 'bio11-t05';
};
const moduleId = (number: number) => {
  if (number <= 20) return 'bio11-m1';
  if (number <= 29) return 'bio11-m2';
  if (number <= 38) return 'bio11-m3';
  if (number <= 48) return 'bio11-m4';
  return 'bio11-m5';
};

const sections: AssessmentBlueprint['sections'] = [
  { id: 'mcq', title: 'Phần I. Trắc nghiệm nhiều lựa chọn', itemCount: 20, points: 5, responseType: 'multiple_choice' },
  { id: 'tf', title: 'Phần II. Trắc nghiệm Đúng/Sai', itemCount: 2, points: 2, responseType: 'true_false_cluster' },
  { id: 'short', title: 'Phần III. Trả lời ngắn', itemCount: 2, points: 3, responseType: 'short_answer' }
];

export const g11BiologyAssessmentBlueprints: AssessmentBlueprint[] = specs.map(spec => ({
  id: `bio11-blueprint-${spec.key}-v1`,
  subjectId: 'biology',
  title: `Ma trận ${spec.title} – Sinh học 11`,
  kind: spec.kind,
  focus: 'mixed',
  semester: spec.semester,
  duration: 45,
  totalPoints: 10,
  scopeTopicIds: spec.scopeTopicIds,
  outcomeIds: spec.pool.map(outcomeId),
  competencyWeights: { biological_cognition: 0.4, biological_inquiry: 0.3, biological_application: 0.3 },
  difficultyWeights: { easy: 0.25, medium: 0.5, hard: 0.25 },
  sections
}));

const factByNumber = new Map(facts.map(fact => [fact.number, fact]));
const letters: Choice[] = ['A', 'B', 'C', 'D'];
const assessmentQuestions: Question[] = [];
const assessmentSolutions: CourseSolution[] = [];
const assessmentExams: MockExam[] = [];

specs.forEach((spec, specIndex) => {
  (['A', 'B'] as const).forEach((formCode, formIndex) => {
    const examPrefix = `bio11-assess-${spec.key}-${formCode.toLocaleLowerCase('vi')}`;
    const selectedNumbers = Array.from({ length: 32 }, (_, index) =>
      spec.pool[(index + formIndex * 7 + specIndex * 3) % spec.pool.length]
    );
    const questionIds: string[] = [];

    for (let itemIndex = 0; itemIndex < 24; itemIndex += 1) {
      const questionId = `${examPrefix}-q${String(itemIndex + 1).padStart(2, '0')}`;
      questionIds.push(questionId);
      const difficulty: Question['difficulty'] =
        itemIndex < 6 ? 'easy' : itemIndex < 18 ? 'medium' : 'hard';
      const mainNumber = selectedNumbers[itemIndex];
      const mainFact = factByNumber.get(mainNumber)!;
      const prefix = `${spec.title} – mã ${formCode}, câu ${itemIndex + 1}:`;

      if (itemIndex < 20) {
        const baseOptions = [mainFact.correct, ...mainFact.wrong];
        const shift = (itemIndex + formIndex + specIndex) % 4;
        const options = [...baseOptions.slice(shift), ...baseOptions.slice(0, shift)];
        const answer = letters[(4 - shift) % 4];
        const content = difficulty === 'easy'
          ? `${prefix} Chọn nhận định khoa học chính xác.`
          : difficulty === 'medium'
            ? `${prefix} Một học sinh nhận xét: “${mainFact.wrong[0]}” Nhận định nào sửa lại ý trên đúng nhất?`
            : `${prefix} Khi thẩm định kết luận “${mainFact.wrong[1]}”, phương án nào nêu đúng cơ chế và không vượt quá bằng chứng?`;
        assessmentQuestions.push({
          id: questionId,
          subjectId: 'biology',
          topicId: topicId(mainNumber),
          questionTypeId: typeId(mainNumber),
          content,
          options,
          correctAnswer: answer,
          acceptedAnswers: [answer, answer.toLocaleLowerCase('vi')],
          responseType: 'single_choice',
          validatorType: 'choice',
          difficulty,
          sourceType: 'mock_exam',
          points: 0.25,
          outcomeIds: [outcomeId(mainNumber)],
          competency: itemIndex % 3 === 0 ? 'biological_inquiry' : itemIndex % 3 === 1 ? 'biological_cognition' : 'biological_application',
          cognitiveLevel: difficulty === 'easy' ? 'recognition' : difficulty === 'medium' ? 'understanding' : 'application',
          estimatedSeconds: difficulty === 'hard' ? 90 : 60,
          variantGroupId: `bio11-${spec.key}-item-${String(itemIndex + 1).padStart(2, '0')}`
        });
        assessmentSolutions.push({
          id: `sol-${questionId}`,
          questionId,
          courseId: 'grade11:biology',
          moduleId: moduleId(mainNumber),
          recognition: difficulty === 'easy'
            ? `Câu nền tảng của ${typeId(mainNumber)}: nhận diện phát biểu đúng.`
            : difficulty === 'medium'
              ? `Câu sửa hiểu lầm của ${typeId(mainNumber)}: tìm chính xác phần sai trong nhận xét đã cho.`
              : `Câu thẩm định của ${typeId(mainNumber)}: kiểm tra cơ chế và giới hạn kết luận.`,
          detailedSteps: [
            { order: 1, title: 'Xác định điều phải kiểm tra', explanation: `Câu thuộc chuẩn ${outcomeId(mainNumber)}. Tách khái niệm, cơ chế và phạm vi khẳng định trước khi nhìn đáp án.` },
            { order: 2, title: 'Vì sao đáp án đúng', explanation: `${mainFact.correct} ${mainFact.explanation}` },
            { order: 3, title: 'Đối chiếu từng nhiễu', explanation: `Không chọn “${mainFact.wrong[0]}”, “${mainFact.wrong[1]}” hoặc “${mainFact.wrong[2]}”. Các nhận định này lần lượt bỏ qua, đảo ngược hoặc tuyệt đối hóa nguyên tắc: ${mainFact.explanation}` }
          ],
          finalAnswer: answer,
          commonMistakes: ['Chọn phương án có từ khóa quen nhưng sai cơ chế hoặc sai phạm vi.'],
          reviewSuggestions: [`Ôn lại dạng ${typeId(mainNumber)} và TheoryBlock tương ứng.`]
        });
        continue;
      }

      if (itemIndex < 22) {
        const numbers = selectedNumbers.slice(itemIndex, itemIndex + 4);
        const pattern = itemIndex === 20
          ? (formIndex === 0 ? [true, false, true, false] : [false, true, false, true])
          : (formIndex === 0 ? [false, true, true, false] : [true, false, false, true]);
        const statements = numbers.map((number, statementIndex) => {
          const fact = factByNumber.get(number)!;
          return pattern[statementIndex] ? fact.correct : fact.wrong[(statementIndex + formIndex) % 3];
        });
        const final = Object.fromEntries(pattern.map((value, index) => [letters[index].toLocaleLowerCase('vi'), value ? 'Đ' : 'S']));
        const encoded = pattern.map((value, index) => `${letters[index].toLocaleLowerCase('vi')}:${value ? 'Đ' : 'S'}`).join('|');
        assessmentQuestions.push({
          id: questionId,
          subjectId: 'biology',
          topicId: topicId(mainNumber),
          questionTypeId: typeId(mainNumber),
          content: `${prefix} Chọn Đúng hoặc Sai cho từng phát biểu.`,
          responseType: 'true_false_cluster',
          validatorType: 'exact',
          difficulty,
          sourceType: 'mock_exam',
          correctAnswer: encoded,
          correctFinalAnswer: final,
          answerSchema: {
            type: 'true-false-cluster',
            proofImageRequired: false,
            autoCheckMode: 'exact',
            fields: statements.map((statement, index) => ({
              key: letters[index].toLocaleLowerCase('vi'),
              label: `${letters[index].toLocaleLowerCase('vi')}) ${statement}`,
              valueType: 'choice' as const,
              required: true
            }))
          },
          points: 1,
          outcomeIds: [...new Set(numbers.map(outcomeId))],
          competency: 'biological_cognition',
          cognitiveLevel: 'application',
          estimatedSeconds: 180,
          variantGroupId: `bio11-${spec.key}-item-${String(itemIndex + 1).padStart(2, '0')}`
        });
        const explanation = numbers.map((number, index) =>
          `${letters[index].toLocaleLowerCase('vi')}) ${pattern[index] ? 'Đúng' : 'Sai'} – ${factByNumber.get(number)!.explanation}`
        ).join(' ');
        assessmentSolutions.push({
          id: `sol-${questionId}`,
          questionId,
          courseId: 'grade11:biology',
          moduleId: moduleId(mainNumber),
          recognition: 'Cụm Đúng/Sai gồm bốn nội dung; phải kiểm tra từng phát biểu độc lập.',
          detailedSteps: [
            { order: 1, title: 'Không suy luận theo cả cụm', explanation: 'Đọc từng phát biểu và xác định khái niệm đang được kiểm tra.' },
            { order: 2, title: 'Đối chiếu từng ý', explanation },
            { order: 3, title: 'Mã hóa kết quả', explanation: `Thứ tự đúng là ${encoded}.` }
          ],
          finalAnswer: encoded,
          commonMistakes: ['Thấy một phát biểu sai rồi đánh dấu cả cụm sai.', 'Bỏ qua từ tuyệt đối như “mọi”, “luôn”.'],
          reviewSuggestions: numbers.map(number => `Ôn ${typeId(number)}.`)
        });
        continue;
      }

      const numbers = selectedNumbers.slice(itemIndex, itemIndex + 4);
      const correctCount = itemIndex === 22 ? formIndex + 1 : formIndex + 2;
      const statements = numbers.map((number, index) => {
        const fact = factByNumber.get(number)!;
        return index < correctCount ? fact.correct : fact.wrong[(index + specIndex) % 3];
      });
      const answer = String(correctCount);
      assessmentQuestions.push({
        id: questionId,
        subjectId: 'biology',
        topicId: topicId(mainNumber),
        questionTypeId: typeId(mainNumber),
        content: `${prefix} Có bao nhiêu phát biểu đúng trong bốn phát biểu sau?\n${statements.map((statement, index) => `${index + 1}) ${statement}`).join('\n')}`,
        responseType: 'short_answer',
        validatorType: 'number',
        difficulty,
        sourceType: 'mock_exam',
        correctAnswer: answer,
        acceptedAnswers: [answer],
        points: 1.5,
        outcomeIds: [...new Set(numbers.map(outcomeId))],
        competency: 'biological_application',
        cognitiveLevel: 'application',
        estimatedSeconds: 150,
        variantGroupId: `bio11-${spec.key}-item-${String(itemIndex + 1).padStart(2, '0')}`
      });
      const evaluation = numbers.map((number, index) =>
        `${index + 1}) ${index < correctCount ? 'Đúng' : 'Sai'} – ${factByNumber.get(number)!.explanation}`
      ).join(' ');
      assessmentSolutions.push({
        id: `sol-${questionId}`,
        questionId,
        courseId: 'grade11:biology',
        moduleId: moduleId(mainNumber),
        recognition: 'Trả lời ngắn dạng đếm số phát biểu đúng; cần đánh giá từng ý trước khi đếm.',
        detailedSteps: [
          { order: 1, title: 'Đánh dấu từng phát biểu', explanation: evaluation },
          { order: 2, title: 'Đếm kết quả đúng', explanation: `Có ${correctCount} phát biểu đúng trong bốn phát biểu.` }
        ],
        finalAnswer: answer,
        commonMistakes: ['Đếm số phát biểu quen thuộc thay vì số phát biểu đúng.', 'Không kiểm tra các từ tuyệt đối.'],
        reviewSuggestions: numbers.map(number => `Ôn ${typeId(number)}.`)
      });
    }

    assessmentExams.push({
      id: `${examPrefix}-exam`,
      subjectId: 'biology',
      title: `${spec.title} – Sinh học 11 (Mã ${formCode})`,
      duration: 45,
      questionIds,
      createdAt: '2026-07-30T00:00:00.000Z',
      kind: spec.kind,
      focus: 'mixed',
      semester: spec.semester,
      parallelFormGroup: `bio11-${spec.key}-parallel-v1`,
      scopeTopicIds: spec.scopeTopicIds,
      totalPoints: 10,
      formCode,
      instructions: [
        'Thời gian làm bài 45 phút; tổng điểm 10.',
        'Đề gồm 20 câu nhiều lựa chọn, 2 cụm Đúng/Sai và 2 câu trả lời ngắn dạng số.',
        'Toàn bộ bài được chấm tự động; đọc kĩ giới hạn của dữ kiện trước khi chọn.'
      ],
      resultReleasePolicy: 'after_submit',
      blueprintId: `bio11-blueprint-${spec.key}-v1`,
      assessmentVersion: '1.0.0'
    });
  });
});

export const g11BiologyAssessmentExams = assessmentExams;
export const g11BiologyAssessmentQuestions = assessmentQuestions;
export const g11BiologyAssessmentSolutions = assessmentSolutions;
