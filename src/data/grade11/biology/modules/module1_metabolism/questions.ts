import type { CourseQuestion } from '@/data/schema';
import type { PracticeRole, QuestionRepresentationType } from '@/types';

type Choice = 'A' | 'B' | 'C' | 'D';

interface FactSeed {
  correct: string;
  wrong: [string, string, string];
  context: string;
}

interface TypeSeed {
  number: number;
  lesson: number;
  theme: string;
  representation: QuestionRepresentationType;
  facts: [FactSeed, FactSeed, FactSeed];
}

const typeSeeds: TypeSeed[] = [
  {
    number: 1, lesson: 1, theme: 'trao đổi chất và chuyển hóa năng lượng', representation: 'diagram',
    facts: [
      { correct: 'Đồng hóa tổng hợp chất và thường cần năng lượng; dị hóa phân giải chất và giải phóng năng lượng.', wrong: ['Đồng hóa và dị hóa đều chỉ phân giải chất.', 'Dị hóa luôn tích lũy năng lượng trong chất hữu cơ phức tạp.', 'Đồng hóa không liên quan đến enzyme và ATP.'], context: 'Sau bữa ăn, tế bào vừa tổng hợp glycogen vừa phân giải glucose để tạo ATP.' },
      { correct: 'Trao đổi chất gồm lấy chất, biến đổi trong cơ thể và thải sản phẩm ra môi trường.', wrong: ['Trao đổi chất chỉ là đưa thức ăn vào cơ thể.', 'Trao đổi chất chỉ xảy ra ở động vật có hệ tiêu hóa.', 'Chỉ các phản ứng giải phóng năng lượng mới thuộc trao đổi chất.'], context: 'Một cây nhận CO2, nước, khoáng rồi tạo chất hữu cơ và thải O2, hơi nước.' },
      { correct: 'ATP là dạng trung gian truyền năng lượng, không phải kho dự trữ năng lượng dài hạn duy nhất.', wrong: ['ATP là chất di truyền quyết định mọi phản ứng.', 'ATP chỉ được tạo ra ở thực vật.', 'Năng lượng trong ATP có thể dùng mà không cần phản ứng enzyme.'], context: 'Năng lượng từ hô hấp được ghép với vận chuyển chủ động qua sự tham gia của ATP.' }
    ]
  },
  {
    number: 2, lesson: 2, theme: 'hấp thụ nước ở rễ', representation: 'diagram',
    facts: [
      { correct: 'Nước đi qua màng theo chênh lệch thế nước từ nơi có thế nước cao đến nơi có thế nước thấp.', wrong: ['Rễ dùng ATP để bơm từng phân tử nước vào tế bào.', 'Nước luôn đi từ dung dịch đậm đặc sang dung dịch loãng.', 'Nước chỉ đi vào rễ khi khí khổng đóng hoàn toàn.'], context: 'Đất đủ ẩm có thế nước cao hơn dịch tế bào lông hút nên nước đi vào rễ.' },
      { correct: 'Đai Caspary buộc nước và ion qua màng tế bào nội bì trước khi vào trụ giữa.', wrong: ['Đai Caspary làm nước đi hoàn toàn tự do theo gian bào.', 'Đai Caspary nằm ở khí khổng để giảm thoát hơi nước.', 'Đai Caspary là mạch vận chuyển đường từ lá xuống rễ.'], context: 'Một chất theo con đường gian bào đến nội bì nhưng không thể tiếp tục nếu chưa qua màng.' },
      { correct: 'Lông hút làm tăng diện tích tiếp xúc giữa rễ với dung dịch đất.', wrong: ['Lông hút là mạch gỗ non có thành hóa gỗ dày.', 'Lông hút tồn tại bền suốt đời cây và không cần được thay mới.', 'Lông hút hấp thụ nước tốt nhất khi đất ngập thiếu oxygen kéo dài.'], context: 'Cây non có vùng lông hút phát triển tiếp xúc với nhiều hạt đất và màng nước mỏng.' }
    ]
  },
  {
    number: 3, lesson: 2, theme: 'hấp thụ ion và dinh dưỡng khoáng', representation: 'table',
    facts: [
      { correct: 'Vận chuyển chủ động đưa ion ngược gradient điện hóa và cần năng lượng cùng protein vận chuyển.', wrong: ['Vận chuyển chủ động không cần màng tế bào.', 'Ion chỉ được hấp thụ bằng thẩm thấu như nước.', 'Mọi ion đi xuôi gradient đều cần ATP trực tiếp.'], context: 'Nồng độ K+ trong tế bào rễ cao hơn đất nhưng cây vẫn tiếp tục hấp thụ K+.' },
      { correct: 'Nguyên tố thiết yếu không thể được thay thế hoàn toàn bởi nguyên tố khác trong vai trò sinh lí của nó.', wrong: ['Mọi nguyên tố có trong cây đều là nguyên tố thiết yếu.', 'Chỉ nguyên tố đa lượng mới tham gia enzyme.', 'Thiếu khoáng luôn biểu hiện trước tiên ở lá non.'], context: 'Loại bỏ một nguyên tố khỏi dung dịch làm cây không hoàn thành chu kì sống và bổ sung lại giúp cây phục hồi.' },
      { correct: 'Triệu chứng thiếu khoáng xuất hiện ở lá già hay lá non còn phụ thuộc khả năng tái phân phối của nguyên tố.', wrong: ['Mọi nguyên tố thiếu đều làm lá non vàng trước.', 'Vị trí triệu chứng không liên quan tính di động của nguyên tố.', 'Quan sát màu lá đủ để xác định chắc chắn một nguyên tố thiếu.'], context: 'Một nguyên tố di động được chuyển từ lá già sang lá non khi nguồn cung từ đất giảm.' }
    ]
  },
  {
    number: 4, lesson: 2, theme: 'vận chuyển trong mạch gỗ và mạch rây', representation: 'diagram',
    facts: [
      { correct: 'Mạch gỗ chủ yếu vận chuyển nước, ion khoáng từ rễ lên nhờ lực hút thoát hơi nước và các lực hỗ trợ.', wrong: ['Mạch gỗ chủ yếu vận chuyển sucrose từ lá đến quả.', 'Tế bào dẫn mạch gỗ trưởng thành luôn còn nguyên sinh chất sống.', 'Dòng mạch gỗ chỉ hình thành nhờ tim của thực vật.'], context: 'Giữa trưa, thoát hơi nước mạnh tạo sức căng trong cột nước liên tục của mạch gỗ.' },
      { correct: 'Dịch mạch rây đi từ cơ quan nguồn đến cơ quan chứa hoặc sử dụng, không cố định luôn theo chiều xuống.', wrong: ['Mạch rây chỉ vận chuyển từ lá trên xuống rễ.', 'Mạch rây gồm toàn tế bào chết hóa gỗ.', 'Động lực mạch rây chỉ là lực hút do thoát hơi nước.'], context: 'Lá trưởng thành cấp đường cho chồi non phía trên và rễ phía dưới qua các ống rây khác nhau.' },
      { correct: 'Tính liên kết giữa các phân tử nước và bám dính với thành mạch giúp duy trì cột nước mạch gỗ.', wrong: ['Nước trong mạch gỗ tồn tại thành các giọt tách rời hoàn toàn.', 'Thành mạch gỗ không liên quan đến vận chuyển nước.', 'Cột nước chỉ được duy trì khi cây ngừng thoát hơi nước.'], context: 'Cột nước cao trong thân cây vẫn liên tục khi lá kéo nước lên dưới sức căng.' }
    ]
  },
  {
    number: 5, lesson: 2, theme: 'thoát hơi nước và khí khổng', representation: 'graph',
    facts: [
      { correct: 'Thoát hơi nước tạo lực hút dòng mạch gỗ, hỗ trợ trao đổi khí và điều hòa nhiệt cho lá.', wrong: ['Thoát hơi nước chỉ gây mất nước và không có lợi ích.', 'Thoát hơi nước vận chuyển đường trong mạch rây.', 'Cây không thoát hơi nước khi có ánh sáng.'], context: 'Một lá đang quang hợp có nhiệt độ thấp hơn khi khí khổng hoạt động và nước được cung cấp đủ.' },
      { correct: 'Khi tế bào khí khổng tăng sức trương, lỗ khí thường mở do cấu tạo thành tế bào không đều.', wrong: ['Khí khổng mở khi tế bào khí khổng mất hoàn toàn nước.', 'Khí khổng là lỗ cố định không thể điều chỉnh.', 'Khí khổng chỉ có chức năng thải oxygen.'], context: 'Ion tích lũy làm thế nước tế bào khí khổng giảm, nước đi vào và lỗ khí mở.' },
      { correct: 'Không khí khô và gió vừa phải thường làm tăng gradient hơi nước, nhưng thiếu nước có thể khiến khí khổng đóng.', wrong: ['Độ ẩm thấp luôn làm khí khổng mở tối đa vô thời hạn.', 'Gió không ảnh hưởng lớp không khí sát bề mặt lá.', 'Nhiệt độ tăng luôn làm thoát hơi nước giảm.'], context: 'Ngày khô nóng, cây ban đầu mất nước nhanh rồi đóng khí khổng khi stress nước tăng.' }
    ]
  },
  {
    number: 6, lesson: 3, theme: 'thực hành trao đổi nước và khoáng', representation: 'experiment',
    facts: [
      { correct: 'Muốn kiểm tra vai trò khí khổng, các nhóm lá phải tương đương và chỉ khác bề mặt được xử lí.', wrong: ['Có thể dùng hai loài cây khác nhau và thay cả ánh sáng lẫn nhiệt độ.', 'Không cần nhóm đối chứng nếu đã biết lý thuyết.', 'Chỉ quan sát một lá một lần là đủ kết luận phổ quát.'], context: 'Hai mặt lá được bôi vaseline theo các cách khác nhau rồi so sánh lượng nước mất.' },
      { correct: 'Trong thủy canh, dung dịch cần cung cấp ion khoáng phù hợp và rễ vẫn phải được trao đổi oxygen.', wrong: ['Thủy canh nghĩa là chỉ dùng nước tinh khiết.', 'Rễ thủy canh không hô hấp nên không cần oxygen.', 'Nồng độ dung dịch càng cao cây càng sinh trưởng tốt.'], context: 'Rễ cây trong dung dịch dinh dưỡng không sục khí bị thâm và sinh trưởng kém.' },
      { correct: 'Kết luận thí nghiệm phải dựa trên biến đo được, đối chứng và số lần lặp chứ không chỉ một hình ảnh thuận lợi.', wrong: ['Có thể bỏ mọi kết quả trái dự đoán mà không kiểm tra.', 'Một mẫu duy nhất chứng minh cơ chế đúng cho mọi loài.', 'Thay nhiều biến giúp xác định nguyên nhân rõ hơn.'], context: 'Ba lần lặp cho xu hướng giống nhau nhưng một mẫu có giá trị bất thường do rách túi bọc lá.' }
    ]
  },
  {
    number: 7, lesson: 4, theme: 'sắc tố và pha sáng quang hợp', representation: 'diagram',
    facts: [
      { correct: 'Pha sáng diễn ra ở màng thylakoid, tạo ATP, NADPH và giải phóng O2 từ nước.', wrong: ['Pha sáng diễn ra trong chất nền lục lạp và tạo trực tiếp glucose.', 'Oxygen quang hợp có nguồn gốc trực tiếp từ CO2.', 'Pha sáng không có chuỗi truyền electron.'], context: 'Đánh dấu oxygen trong H2O cho thấy oxygen đánh dấu xuất hiện trong khí O2 do lá giải phóng.' },
      { correct: 'Sắc tố hấp thụ một số bước sóng và truyền năng lượng về trung tâm phản ứng.', wrong: ['Diệp lục hấp thụ mọi bước sóng như nhau.', 'Sắc tố chỉ tạo màu và không liên quan thu nhận năng lượng.', 'Ánh sáng xanh lục luôn được hấp thụ mạnh nhất bởi diệp lục.'], context: 'Phổ hoạt động quang hợp cao ở vùng đỏ và xanh tím nhưng thấp hơn ở vùng xanh lục.' },
      { correct: 'ATP và NADPH của pha sáng cung cấp năng lượng, lực khử cho cố định carbon.', wrong: ['ATP và NADPH là sản phẩm thải không dùng tiếp.', 'Chu trình Calvin tự tạo đủ ATP mà không cần pha sáng.', 'NADPH là enzyme cố định CO2 đầu tiên.'], context: 'Khi chuỗi truyền electron bị ức chế, tốc độ cố định CO2 giảm dù enzyme Calvin còn nguyên.' }
    ]
  },
  {
    number: 8, lesson: 4, theme: 'cố định carbon ở C3, C4 và CAM', representation: 'table',
    facts: [
      { correct: 'Ở C4, cố định CO2 ban đầu và chu trình Calvin tách biệt chủ yếu theo không gian giữa tế bào thịt lá và bao bó mạch.', wrong: ['Ở C4, hai quá trình tách theo đêm và ngày trong cùng tế bào.', 'C4 chỉ mở khí khổng ban đêm.', 'C4 không thực hiện chu trình Calvin.'], context: 'Ngô có enzyme cố định CO2 ban đầu ở tế bào thịt lá và giải phóng CO2 gần Rubisco trong tế bào bao bó mạch.' },
      { correct: 'Ở CAM, khí khổng thường mở ban đêm; CO2 được dự trữ dạng acid hữu cơ rồi dùng ban ngày.', wrong: ['CAM mở khí khổng tối đa giữa trưa để nhận CO2.', 'CAM tách cố định CO2 giữa hai loại tế bào như C4.', 'CAM không cần ánh sáng để tạo ATP.'], context: 'Cây mọng nước ở sa mạc hấp thụ CO2 ban đêm và giảm mất nước ban ngày.' },
      { correct: 'Cơ chế tập trung CO2 của C4 và CAM giúp giảm quang hô hấp trong điều kiện nóng hoặc khô.', wrong: ['C4 và CAM thích nghi vì không có enzyme Rubisco.', 'Quang hô hấp luôn làm tăng năng suất quang hợp.', 'Mọi cây C3 đều sống tốt hơn C4 ở nhiệt độ rất cao.'], context: 'Khi nhiệt độ tăng và khí khổng khép bớt, cây có cơ chế tập trung CO2 duy trì cố định carbon tốt hơn.' }
    ]
  },
  {
    number: 9, lesson: 4, theme: 'yếu tố ảnh hưởng quang hợp', representation: 'graph',
    facts: [
      { correct: 'Sau điểm bão hòa ánh sáng, tăng cường độ ánh sáng không làm quang hợp tăng đáng kể nếu yếu tố khác giới hạn.', wrong: ['Quang hợp luôn tỉ lệ thuận vô hạn với ánh sáng.', 'Điểm bão hòa là nơi quang hợp bằng hô hấp.', 'Trên điểm bão hòa, cây không còn hô hấp.'], context: 'Đồ thị quang hợp tăng nhanh lúc ánh sáng thấp rồi gần như nằm ngang.' },
      { correct: 'Điểm bù ánh sáng là cường độ tại đó lượng chất hữu cơ tạo ra do quang hợp cân bằng lượng tiêu hao do hô hấp.', wrong: ['Điểm bù là cường độ quang hợp lớn nhất.', 'Tại điểm bù cây không hô hấp.', 'Mọi loài có cùng một điểm bù trong mọi điều kiện.'], context: 'Ở một mức ánh sáng, trao đổi CO2 ròng của lá bằng 0.' },
      { correct: 'Biện pháp tăng năng suất phải xác định yếu tố đang giới hạn thay vì tăng đồng loạt mọi yếu tố.', wrong: ['Tăng CO2 luôn có hiệu quả dù cây thiếu nước nghiêm trọng.', 'Tăng nhiệt độ càng cao càng tốt cho enzyme.', 'Có thể bỏ qua giống cây và giai đoạn sinh trưởng.'], context: 'Nhà kính đủ ánh sáng và CO2 nhưng nhiệt độ vượt vùng tối ưu làm quang hợp giảm.' }
    ]
  },
  {
    number: 10, lesson: 5, theme: 'thực hành chứng minh quang hợp', representation: 'experiment',
    facts: [
      { correct: 'Cây cần được khử tinh bột trước khi kiểm tra vai trò ánh sáng bằng iodine.', wrong: ['Khử tinh bột nhằm làm lá có nhiều diệp lục hơn.', 'Có thể dùng ngay cây vừa để ngoài sáng cả ngày.', 'Iodine dùng để phát hiện oxygen trong lá.'], context: 'Cây được đặt tối đủ lâu, một phần lá che kín rồi đưa ra sáng trước khi thử iodine.' },
      { correct: 'Phần lá có diệp lục và nhận ánh sáng chuyển xanh tím với iodine vì tích lũy tinh bột.', wrong: ['Mọi phần lá đều xanh tím dù không có diệp lục.', 'Màu xanh tím chứng minh trực tiếp lá thải CO2.', 'Phần bị che sáng tạo nhiều tinh bột nhất.'], context: 'Lá loang lổ chỉ đổi màu ở vùng xanh được chiếu sáng.' },
      { correct: 'Trong thí nghiệm cây thủy sinh, số bọt khí chỉ là chỉ báo gần đúng và cần kiểm soát nhiệt độ, khoảng cách đèn.', wrong: ['Số bọt khí luôn bằng chính xác số phân tử O2.', 'Không cần lặp lại vì bọt khí dễ nhìn.', 'Đổi khoảng cách đèn đồng thời đổi nhiệt độ giúp kết luận chắc hơn.'], context: 'Đèn đặt gần làm số bọt tăng nhưng đồng thời nước nóng lên.' }
    ]
  },
  {
    number: 11, lesson: 6, theme: 'hô hấp ở thực vật', representation: 'diagram',
    facts: [
      { correct: 'Hô hấp tế bào ở thực vật diễn ra cả ngày lẫn đêm để cung cấp ATP.', wrong: ['Thực vật chỉ hô hấp ban đêm.', 'Ban ngày quang hợp làm hô hấp dừng hoàn toàn.', 'Hô hấp chỉ có ở cơ quan không xanh.'], context: 'Tế bào rễ và lá đều cần ATP liên tục cho vận chuyển chủ động và tổng hợp chất.' },
      { correct: 'Thiếu oxygen kéo dài có thể làm tăng lên men, tạo ít ATP và chất gây độc cho tế bào rễ.', wrong: ['Lên men tạo nhiều ATP hơn hô hấp hiếu khí.', 'Ngập úng cung cấp thêm oxygen cho rễ.', 'Lên men không liên quan đến phân giải glucose.'], context: 'Ruộng bị ngập lâu làm rễ thiếu khí, cây héo dù đất có nhiều nước.' },
      { correct: 'Hạ nhiệt độ và điều chỉnh độ ẩm có thể giảm hô hấp, làm chậm hao hụt chất dự trữ khi bảo quản.', wrong: ['Tăng nhiệt độ luôn giúp nông sản bảo quản lâu hơn.', 'Loại bỏ hoàn toàn nước không bao giờ làm hỏng mô sống.', 'Bảo quản không liên quan cường độ hô hấp.'], context: 'Hạt khô, mát thường giữ chất dự trữ lâu hơn hạt ẩm, nóng.' }
    ]
  },
  {
    number: 12, lesson: 7, theme: 'thực hành chứng minh hô hấp', representation: 'experiment',
    facts: [
      { correct: 'Bình hạt nảy mầm cần được so với bình hạt đã luộc hoặc vật liệu trơ tương đương.', wrong: ['Không cần đối chứng vì hạt chắc chắn hô hấp.', 'Hạt luộc phải hô hấp mạnh hơn hạt nảy mầm.', 'Đối chứng nên đặt ở nhiệt độ khác hoàn toàn.'], context: 'Hai bình giống nhau chỉ khác một bình chứa hạt nảy mầm sống và một bình chứa hạt đã luộc.' },
      { correct: 'Nước vôi trong vẩn đục là bằng chứng có CO2, nhưng cần loại nguồn CO2 ngoài mẫu.', wrong: ['Nước vôi trong phát hiện trực tiếp O2.', 'Vẩn đục luôn chứng minh nhiệt độ tăng.', 'Không cần đậy kín hệ thí nghiệm.'], context: 'Khí từ bình hạt nảy mầm được dẫn qua nước vôi trong sau khi hệ đã kiểm soát khí ban đầu.' },
      { correct: 'Nhiệt độ bình hạt nảy mầm tăng so với đối chứng cho thấy một phần năng lượng hô hấp tỏa dưới dạng nhiệt.', wrong: ['Nhiệt tăng chứng minh hạt quang hợp.', 'Mọi chênh lệch nhiệt một lần đo đều do hô hấp.', 'Hô hấp biến toàn bộ năng lượng thành ATP, không tỏa nhiệt.'], context: 'Hai bình cách nhiệt đặt cùng phòng, bình hạt sống tăng nhiệt ổn định qua nhiều lần lặp.' }
    ]
  },
  {
    number: 13, lesson: 8, theme: 'dinh dưỡng và tiêu hóa ở động vật', representation: 'diagram',
    facts: [
      { correct: 'Tiêu hóa biến đổi thức ăn thành phân tử đủ nhỏ để hấp thụ; hấp thụ đưa chúng qua bề mặt tiêu hóa vào môi trường trong.', wrong: ['Tiêu hóa và hấp thụ là một quá trình hoàn toàn giống nhau.', 'Mọi chất trong thức ăn đều hấp thụ nguyên vẹn.', 'Hấp thụ chỉ diễn ra trong miệng.'], context: 'Protein được enzyme phân giải thành amino acid trước khi qua biểu mô ruột.' },
      { correct: 'Ống tiêu hóa có hai lỗ cho phép thức ăn đi một chiều và các đoạn chuyên hóa chức năng.', wrong: ['Ống tiêu hóa chỉ có một lỗ như túi tiêu hóa.', 'Ống tiêu hóa không thể tiêu hóa ngoại bào.', 'Mọi đoạn ống tiêu hóa có cấu tạo giống nhau.'], context: 'Thức ăn lần lượt qua miệng, dạ dày, ruột rồi chất thải ra hậu môn.' },
      { correct: 'Động vật ăn thực vật thường có thích nghi giúp xử lí cellulose, nhiều trường hợp nhờ vi sinh vật cộng sinh.', wrong: ['Động vật tự tạo cellulose để tiêu hóa thức ăn.', 'Cellulose được hấp thụ nguyên vẹn vào máu.', 'Vi sinh vật đường ruột luôn gây bệnh và không có lợi.'], context: 'Dạ cỏ chứa hệ vi sinh vật phân giải cellulose trong thức ăn.' }
    ]
  },
  {
    number: 14, lesson: 9, theme: 'trao đổi khí ở động vật', representation: 'diagram',
    facts: [
      { correct: 'Bề mặt trao đổi khí hiệu quả thường rộng, mỏng, ẩm và duy trì chênh lệch nồng độ khí.', wrong: ['Bề mặt càng dày càng khuếch tán nhanh.', 'Bề mặt trao đổi khí phải khô hoàn toàn.', 'Không cần thông khí hoặc dòng máu để duy trì gradient.'], context: 'Các phiến mang mỏng có nhiều mao mạch và nước liên tục chảy qua.' },
      { correct: 'Ở cá, dòng nước và máu ngược chiều giúp duy trì chênh lệch oxygen dọc phiến mang.', wrong: ['Nước và máu cùng chiều luôn duy trì gradient lớn nhất.', 'Mang lấy oxygen bằng vận chuyển chủ động qua mọi tế bào.', 'Máu rời mang có ít oxygen hơn khi vào mang.'], context: 'Tại mỗi vị trí trên phiến mang, nước vẫn có nồng độ O2 cao hơn máu kề bên.' },
      { correct: 'Ở côn trùng, hệ ống khí đưa không khí gần trực tiếp đến tế bào nên dịch tuần hoàn không vận chuyển O2 chủ yếu.', wrong: ['Côn trùng dùng hemoglobin trong máu để vận chuyển toàn bộ O2.', 'Ống khí là một phần của hệ tiêu hóa.', 'Không khí chỉ đến phổi trước khi vào ống khí.'], context: 'Các ống khí phân nhánh nhỏ đến sát mô hoạt động của châu chấu.' }
    ]
  },
  {
    number: 15, lesson: 10, theme: 'tuần hoàn ở động vật', representation: 'diagram',
    facts: [
      { correct: 'Hệ tuần hoàn kín giữ máu trong mạch, cho phép áp lực và tốc độ phân phối được điều chỉnh hiệu quả.', wrong: ['Hệ tuần hoàn kín để máu tràn trực tiếp vào khoang cơ thể.', 'Hệ kín luôn không có tim.', 'Hệ kín chỉ tồn tại ở động vật không xương sống.'], context: 'Máu của giun đốt lưu thông trong hệ mạch và trao đổi qua thành mao mạch.' },
      { correct: 'Đa số thân mềm có tuần hoàn hở nhưng động vật chân đầu như mực có tuần hoàn kín.', wrong: ['Mọi thân mềm không có ngoại lệ đều tuần hoàn hở.', 'Mực không có hệ tuần hoàn.', 'Chỉ động vật có xương sống mới có tuần hoàn kín.'], context: 'Mực bơi nhanh cần cung cấp oxygen hiệu quả cho cơ hoạt động mạnh.' },
      { correct: 'Vận tốc máu thấp nhất ở mao mạch do tổng tiết diện của mạng mao mạch rất lớn.', wrong: ['Mao mạch có vận tốc cao nhất vì đường kính từng mạch nhỏ.', 'Vận tốc máu không liên quan tổng tiết diện.', 'Máu dừng hoàn toàn trong mao mạch.'], context: 'Một động mạch phân nhánh thành số lượng rất lớn mao mạch trong mô.' }
    ]
  },
  {
    number: 16, lesson: 11, theme: 'thực hành nhịp tim và huyết áp', representation: 'table',
    facts: [
      { correct: 'Cần đo cùng tư thế, sau thời gian nghỉ chuẩn và lặp lại để so sánh huyết áp đáng tin cậy.', wrong: ['Đo ngay sau chạy ở một người rồi so với người đang nghỉ.', 'Một lần đo bất thường đủ chẩn đoán bệnh.', 'Vị trí vòng bít không ảnh hưởng kết quả.'], context: 'Học sinh nghỉ năm phút, ngồi đúng tư thế và đo ba lần cách nhau hợp lí.' },
      { correct: 'Nhịp tim thường tăng sau vận động để góp phần tăng cung lượng tim và cung cấp chất cho cơ.', wrong: ['Nhịp tim phải giảm ngay khi cơ cần nhiều oxygen.', 'Nhịp tim tăng chứng minh chắc chắn người đo mắc bệnh.', 'Vận động không ảnh hưởng hệ tuần hoàn.'], context: 'Bảng số liệu cho thấy nhịp tim tăng sau chạy và giảm dần trong hồi phục.' },
      { correct: 'Số đo huyết áp cần được diễn giải cùng điều kiện đo, sai số thiết bị và đặc điểm cá nhân.', wrong: ['Mọi người khỏe mạnh phải có một giá trị tuyệt đối giống nhau.', 'Có thể bỏ qua kích thước vòng bít.', 'Số đo trên máy luôn đúng nên không cần kiểm tra.'], context: 'Một học sinh có hai số đo chênh lệch lớn khi dùng vòng bít sai kích thước.' }
    ]
  },
  {
    number: 17, lesson: 12, theme: 'miễn dịch và vaccine', representation: 'diagram',
    facts: [
      { correct: 'Miễn dịch không đặc hiệu đáp ứng nhanh với nhiều tác nhân, gồm hàng rào da, niêm mạc, viêm và thực bào.', wrong: ['Miễn dịch không đặc hiệu cần nhận đúng một kháng nguyên duy nhất.', 'Da không thuộc hệ bảo vệ cơ thể.', 'Thực bào chỉ xuất hiện sau tiêm vaccine.'], context: 'Vi khuẩn qua vết xước gây phản ứng viêm và được tế bào thực bào bao vây.' },
      { correct: 'Vaccine đưa kháng nguyên an toàn hoặc thông tin kháng nguyên để tạo tế bào nhớ trước khi gặp mầm bệnh thật.', wrong: ['Vaccine là kháng sinh diệt mọi virus ngay lập tức.', 'Vaccine chỉ có tác dụng khi đã mắc bệnh nặng.', 'Tế bào nhớ thuộc miễn dịch không đặc hiệu.'], context: 'Lần gặp kháng nguyên sau tiêm tạo đáp ứng nhanh và mạnh hơn.' },
      { correct: 'Kháng sinh tác động lên vi khuẩn, không điều trị trực tiếp virus.', wrong: ['Kháng sinh diệt được mọi virus cúm.', 'Virus có thành tế bào vi khuẩn là đích của kháng sinh.', 'Dùng kháng sinh không đúng không ảnh hưởng chọn lọc vi khuẩn kháng thuốc.'], context: 'Người bị bệnh do virus tự ý dùng kháng sinh nhưng bệnh không rút ngắn.' }
    ]
  },
  {
    number: 18, lesson: 13, theme: 'bài tiết và tạo nước tiểu', representation: 'diagram',
    facts: [
      { correct: 'Lọc ở cầu thận tạo dịch lọc từ huyết tương, thông thường không cho tế bào máu và protein lớn đi qua.', wrong: ['Dịch lọc cầu thận bình thường chứa nhiều hồng cầu.', 'Lọc cầu thận là vận chuyển chủ động chọn từng chất.', 'Mọi protein huyết tương đi tự do vào bao Bowman.'], context: 'Phát hiện nhiều protein lớn trong nước tiểu gợi ý hàng rào lọc bị tổn thương.' },
      { correct: 'Ống thận tái hấp thu phần lớn nước và chất cần thiết từ dịch lọc về máu.', wrong: ['Ống thận chỉ đổ thêm mọi chất vào nước tiểu.', 'Glucose bình thường không bao giờ được tái hấp thu.', 'Tái hấp thu đưa chất từ máu vào lòng ống.'], context: 'Glucose được lọc nhưng gần như được thu hồi hoàn toàn ở người khỏe mạnh.' },
      { correct: 'Bài tiết tiếp đưa một số chất từ máu vào ống thận, góp phần điều hòa ion và pH.', wrong: ['Bài tiết tiếp giống hoàn toàn lọc thụ động ở cầu thận.', 'Ống thận không tham gia điều hòa pH.', 'Nước tiểu cuối chỉ là huyết tương mất tế bào máu.'], context: 'Ion H+ được đưa thêm vào dịch ống thận khi cơ thể cần điều chỉnh cân bằng acid–base.' }
    ]
  },
  {
    number: 19, lesson: 13, theme: 'cân bằng nội môi và phản hồi âm', representation: 'diagram',
    facts: [
      { correct: 'Phản hồi âm tạo đáp ứng làm giảm sai lệch so với khoảng giá trị phù hợp.', wrong: ['Phản hồi âm luôn làm sai lệch tăng thêm.', 'Phản hồi âm nghĩa là mọi hoạt động bị dừng.', 'Nội môi phải giữ một con số tuyệt đối không đổi.'], context: 'Đường huyết tăng kích thích insulin, làm tế bào thu nhận glucose và đường huyết giảm.' },
      { correct: 'Một hệ điều hòa gồm bộ phận tiếp nhận, trung tâm điều khiển và bộ phận thực hiện.', wrong: ['Chỉ bộ phận thực hiện đủ để nhận biết mọi sai lệch.', 'Trung tâm điều khiển không nhận thông tin phản hồi.', 'Thụ thể tự tạo toàn bộ đáp ứng mà không truyền tin.'], context: 'Thụ thể nhiệt báo vùng dưới đồi, sau đó mạch da và tuyến mồ hôi thay đổi hoạt động.' },
      { correct: 'Cân bằng nội môi là trạng thái động, các chỉ số dao động trong giới hạn và được điều chỉnh liên tục.', wrong: ['Cân bằng nội môi là trạng thái không có phản ứng sinh hóa.', 'Mọi chỉ số của mọi người phải giống hệt nhau.', 'Chỉ động vật hằng nhiệt mới có nội môi.'], context: 'Nhiệt độ cơ thể dao động nhỏ quanh giá trị phù hợp trong ngày.' }
    ]
  },
  {
    number: 20, lesson: 13, theme: 'phối hợp các hệ cơ quan trong trao đổi chất', representation: 'diagram',
    facts: [
      { correct: 'Khi vận động, hô hấp và tuần hoàn tăng hoạt động để cung cấp O2, chất dinh dưỡng và loại CO2 khỏi cơ.', wrong: ['Vận động làm tim và hô hấp giảm để tiết kiệm năng lượng.', 'Cơ hoạt động không phụ thuộc glucose và oxygen.', 'CO2 từ cơ được đưa vào hệ tiêu hóa để thải.'], context: 'Khi chạy nhanh, nhịp thở và nhịp tim cùng tăng, máu tới cơ nhiều hơn.' },
      { correct: 'Tiêu hóa cung cấp chất hấp thụ, tuần hoàn phân phối, tế bào chuyển hóa và bài tiết loại sản phẩm dư thừa.', wrong: ['Mỗi hệ hoạt động độc lập, không trao đổi vật chất với hệ khác.', 'Bài tiết tạo chất dinh dưỡng cho ruột hấp thụ.', 'Tuần hoàn chỉ vận chuyển oxygen và không vận chuyển chất khác.'], context: 'Amino acid từ ruột được máu đưa tới tế bào, sản phẩm nitrogen được gan và thận xử lí.' },
      { correct: 'Rối loạn một hệ có thể ảnh hưởng nhiều hệ khác vì cơ thể là hệ thống mở, tự điều chỉnh.', wrong: ['Tổn thương thận không thể ảnh hưởng huyết áp.', 'Thiếu thông khí chỉ ảnh hưởng phổi, không ảnh hưởng tế bào.', 'Cân bằng nội môi không liên quan phối hợp cơ quan.'], context: 'Suy thận làm rối loạn nước, ion và góp phần thay đổi huyết áp.' }
    ]
  }
];

const roles: PracticeRole[] = [
  'guided', 'misconception_check', 'near_transfer',
  'far_transfer', 'representation_switch', 'retention'
];
const difficulties: CourseQuestion['difficulty'][] = [
  'easy', 'medium', 'medium', 'hard', 'hard', 'easy'
];
const letters: Choice[] = ['A', 'B', 'C', 'D'];

const buildStem = (
  theme: string,
  fact: FactSeed,
  variant: number,
  representation: QuestionRepresentationType
): string => {
  if (variant === 0) return `Xét tình huống: ${fact.context} Chọn nhận định đúng về ${theme}.`;
  if (variant === 1) return `Một học sinh phát biểu: “${fact.wrong[0]}” Cách sửa nào chính xác nhất?`;
  if (variant === 2) return `Từ dữ kiện “${fact.context}”, kết luận nào về ${theme} có căn cứ chính xác?`;
  if (variant === 3) return `${fact.context} Nhận định nào giải thích phù hợp nhất?`;
  if (variant === 4) return `Khi phân tích dữ liệu dạng ${representation} trong tình huống sau: ${fact.context} Kết luận nào không vượt quá bằng chứng?`;
  return `Ôn lại tình huống “${fact.context}”, ý cốt lõi nào về ${theme} cần được ghi nhớ?`;
};

export const g11BiologyModule1Questions: CourseQuestion[] = typeSeeds.flatMap((typeSeed, typeIndex) =>
  typeSeed.facts.flatMap((fact, factIndex) =>
    Array.from({ length: 6 }, (_, variant) => {
      const localIndex = factIndex * 6 + variant + 1;
      const baseOptions = [fact.correct, ...fact.wrong];
      const shift = (typeIndex + factIndex * 2 + variant) % 4;
      const options = [...baseOptions.slice(shift), ...baseOptions.slice(0, shift)];
      const correctIndex = (4 - shift) % 4;
      const typeId = `bio11-qt${String(typeSeed.number).padStart(2, '0')}`;
      const isHoldout = variant === 5 || (factIndex === 0 && variant === 4);
      return {
        id: `bio11-m1-qt${String(typeSeed.number).padStart(2, '0')}-q${String(localIndex).padStart(2, '0')}`,
        subjectId: 'biology',
        courseId: 'grade11:biology',
        moduleId: 'bio11-m1',
        lessonId: `bio11-kntt-l${typeSeed.lesson}`,
        topicId: 'bio11-t01',
        questionTypeId: typeId,
        content: buildStem(typeSeed.theme, fact, variant, typeSeed.representation),
        options,
        correctAnswer: letters[correctIndex],
        responseType: 'single_choice',
        validatorType: 'choice',
        difficulty: difficulties[variant],
        sourceType: 'manual',
        outcomeIds: [`out-bio11-${String(typeSeed.number).padStart(2, '0')}`],
        subTypeId: `${typeId}-${variant < 3 ? 'st-concept' : 'st-application'}`,
        practiceRole: roles[variant],
        representationType: variant === 4 ? typeSeed.representation : 'text',
        isMasteryHoldout: isHoldout
      };
    })
  )
);
