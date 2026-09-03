import { bioProblem, biologyTable } from './helpers';

const topicId = 'bio10-adv-virus';

export const virusProblems = [
  bioProblem(topicId, {
    content: 'Virus V có vỏ ngoài lipid. Sau xử lí bằng chất hòa tan lipid, genome và capsid còn nhưng khả năng nhiễm giảm mạnh. Giải thích nào hợp lí nhất?',
    correct: 'Vỏ ngoài chứa protein cần cho bám hoặc hòa màng; phá vỏ làm virion không vào tế bào hiệu quả.',
    distractors: ['Lipid là vật chất di truyền duy nhất của virus.', 'Capsid tự tổng hợp ATP nên vỏ bị phá làm hết ATP.', 'Mọi virus không vỏ cũng bị chất hòa lipid bất hoạt y hệt.'],
    insight: 'Còn genome/capsid nhưng mất tính nhiễm chỉ ra chức năng của cấu trúc vỏ trong giai đoạn vào tế bào.',
    evidence: 'Tác nhân đặc hiệu lipid làm hỏng vỏ; vật chất bên trong vẫn được phát hiện.',
    mechanism: 'Glycoprotein cắm trong vỏ nhận thụ thể và xúc tiến hòa màng; mất kiến trúc không gian làm chu trình dừng sớm.',
    reasoning: ['Virus không tự tạo ATP bằng capsid.', 'Virus không vỏ không phụ thuộc cùng cấu trúc lipid.'],
    distractorReasons: ['gán vai trò genome cho lipid.', 'gán chuyển hóa tự chủ cho virion.', 'khái quát cơ chế sang virus thiếu đích lipid.'],
    tags: ['cấu trúc virus', 'vỏ ngoài']
  }),
  bioProblem(topicId, {
    content: 'Genome RNA dương của virus được đưa trực tiếp vào bào tương tế bào phù hợp và vẫn tạo protein virus trước khi genome mới xuất hiện. Điều này cho thấy gì?',
    correct: 'RNA dương có thể đóng vai trò mRNA để ribosome tế bào dịch mã protein virus ban đầu.',
    distractors: ['RNA dương tự dịch mã mà không cần ribosome.', 'Tế bào phải chuyển RNA thành DNA trước mọi protein.', 'Capsid là enzyme duy nhất tạo protein.'],
    insight: 'Protein xuất hiện trước bản sao genome mới cho thấy genome đầu vào được dùng trực tiếp làm khuôn dịch mã.',
    evidence: 'RNA trần trong bào tương vẫn khởi phát tổng hợp protein.',
    mechanism: 'Ribosome chủ nhận diện chiều RNA tương đương mRNA; các protein đầu tiên có thể gồm RNA polymerase của virus.',
    reasoning: ['Virus vẫn phụ thuộc ribosome tế bào.', 'Không phải mọi virus RNA đi qua DNA.'],
    distractorReasons: ['gán ribosome tự có cho RNA.', 'áp cơ chế retrovirus cho mọi RNA dương.', 'gán chức năng dịch mã cho capsid.'],
    tags: ['virus RNA', 'dịch mã']
  }),
  bioProblem(topicId, {
    content: 'Virus RNA âm xâm nhập tế bào nhưng hạt virus thiếu RNA polymerase phụ thuộc RNA. Hậu quả trực tiếp nhất là gì?',
    correct: 'Genome âm không được phiên mã thành mRNA, nên chu trình dừng trước khi tạo protein virus.',
    distractors: ['Ribosome tế bào dịch mã trực tiếp RNA âm như mRNA.', 'Virus dùng DNA polymerase của nhân để dịch mã.', 'Genome âm tự biến thành protein.'],
    insight: 'RNA âm không cùng chiều đọc của ribosome nên phải mang enzyme tạo RNA dương/mRNA ngay từ đầu.',
    evidence: 'Enzyme bị thiếu trong virion và chưa thể được tổng hợp nếu chưa có mRNA virus.',
    mechanism: 'Polymerase đóng gói phiên mã genome âm thành mRNA; đây là bước tiên quyết tạo các enzyme mới.',
    reasoning: ['Ribosome không phiên mã và không đọc khuôn âm trực tiếp.', 'DNA polymerase không tạo protein.'],
    distractorReasons: ['bỏ yêu cầu mRNA cùng chiều.', 'trộn nhân đôi DNA với dịch mã.', 'vi phạm nguyên tắc acid nucleic làm khuôn chứ không tự thành protein.'],
    tags: ['virus RNA âm', 'enzyme đóng gói']
  }),
  bioProblem(topicId, {
    content: 'Thuốc R ức chế enzyme sao chép RNA thành DNA. Virus nào bị tác động trực tiếp nhất?',
    correct: 'Retrovirus cần reverse transcriptase để tạo DNA trung gian từ RNA.',
    distractors: ['Virus DNA nhân đôi bằng DNA polymerase nhưng không qua RNA→DNA.', 'Virus RNA dương chỉ cần ribosome và RNA polymerase cho chu trình cơ bản.', 'Vi khuẩn phân đôi không phải virus.'],
    insight: 'Tên phản ứng RNA→DNA xác định đúng enzyme reverse transcriptase và nhóm virus có trung gian DNA.',
    evidence: 'Đích thuốc không phải dịch mã hay sao chép RNA trực tiếp.',
    mechanism: 'Retrovirus tạo DNA bổ sung, tích hợp vào genome chủ rồi dùng bộ máy tế bào tạo RNA mới.',
    reasoning: ['Không phải mọi virus RNA dùng reverse transcriptase.', 'Vi khuẩn có chuyển hóa và phân đôi riêng.'],
    distractorReasons: ['không có bước RNA→DNA bắt buộc.', 'bỏ trung gian DNA.', 'chọn đối tượng không phải virus.'],
    tags: ['retrovirus', 'reverse transcriptase']
  }),
  bioProblem(topicId, {
    content: 'Thể thực khuẩn bám được vi khuẩn A nhưng không bám B. Khi chuyển gene thụ thể từ A sang B, B trở nên nhạy. Kết luận nào đúng nhất?',
    correct: 'Thụ thể bề mặt là yếu tố quyết định quan trọng của phổ vật chủ ở bước hấp phụ.',
    distractors: ['Mọi bước nhân lên sau bám chắc chắn giống nhau ở A và B.', 'Thể thực khuẩn tự tạo thụ thể cho vi khuẩn.', 'B nhạy vì gene thụ thể làm vi khuẩn mất DNA.'],
    insight: 'Can thiệp một gene làm đổi tính nhạy cung cấp bằng chứng nhân quả cho bước bám.',
    evidence: 'Khác biệt bám được sửa bằng biểu hiện thụ thể A trong B.',
    mechanism: 'Protein/đuôi phage nhận diện cấu trúc bề mặt đặc hiệu; không có thụ thể phù hợp thì không tiêm genome.',
    reasoning: ['Thụ thể cần nhưng có thể chưa đủ cho mọi bước nội bào.', 'Gene thụ thể không xóa genome chủ.'],
    distractorReasons: ['ngoại suy từ bước vào sang toàn chu trình.', 'đảo bên sản xuất thụ thể.', 'gán hậu quả mất DNA không có.'],
    tags: ['thể thực khuẩn', 'phổ vật chủ']
  }),
  bioProblem(topicId, {
    content: 'Phage P tích hợp DNA vào nhiễm sắc thể vi khuẩn và được sao chép cùng tế bào chủ nhiều thế hệ. Khi chiếu UV, nhiều tế bào ly giải và giải phóng phage. Đây là chuyển đổi nào?',
    correct: 'Từ chu trình tiềm tan sang chu trình tan do prophage được cảm ứng.',
    distractors: ['Từ nguyên phân sang giảm phân.', 'Từ hô hấp sang quang hợp.', 'Từ virus có vỏ sang virus không vỏ.'],
    insight: 'Tích hợp và truyền dọc là tiềm tan; tạo hạt và ly giải sau stress là cảm ứng chu trình tan.',
    evidence: 'DNA phage tồn tại cùng chromosome rồi UV kích hoạt sản xuất phage và vỡ tế bào.',
    mechanism: 'Tổn thương tế bào làm thay đổi điều hòa gene phage, cắt prophage và bật chương trình nhân lên–ly giải.',
    reasoning: ['Đây là hai trạng thái của cùng phage.', 'Không liên quan loại phân bào hay chuyển hóa năng lượng.'],
    distractorReasons: ['dùng quá trình của tế bào nhân thực.', 'đưa thay đổi chuyển hóa không mô tả.', 'đổi cấu trúc virion không liên quan.'],
    tags: ['chu trình tan–tiềm tan', 'prophage']
  }),
  bioProblem(topicId, {
    content: 'Sau khi virus xâm nhập, số virion có khả năng gây nhiễm trong tế bào giảm về gần 0 rồi tăng mạnh sau 6 giờ. Giai đoạn gần 0 được gọi là “eclipse” vì sao?',
    correct: 'Virion đầu vào đã tháo vỏ, còn genome và protein mới đang được tổng hợp nhưng chưa lắp thành hạt hoàn chỉnh có tính nhiễm.',
    distractors: ['Virus đã chết hoàn toàn rồi tự sống lại.', 'Tế bào không chứa bất kỳ thành phần virus nào.', 'Mọi virus rời tế bào ngay sau khi vào.'],
    insight: 'Không phát hiện hạt lây nhiễm không đồng nghĩa không có hoạt động sao chép bên trong.',
    evidence: 'Sau khoảng trễ, số virion tăng mạnh, chứng tỏ các thành phần đã được tạo trong giai đoạn trước.',
    mechanism: 'Tháo vỏ làm mất cấu trúc hạt hoàn chỉnh; lắp ráp xảy ra sau khi đạt đủ genome và protein capsid.',
    reasoning: ['Phép đo plaque chỉ phát hiện đơn vị gây nhiễm, không đo mọi phân tử virus.', 'Đường cong một bước tách hấp phụ–eclipse–tăng hạt.'],
    distractorReasons: ['dùng khái niệm chết–sống không đúng cho virion.', 'phủ nhận thành phần trung gian.', 'đảo hướng chu trình.'],
    tags: ['đường cong một bước', 'giai đoạn eclipse'],
    stimulus: biologyTable('bio10-adv-virus-07', 'Virion theo thời gian', 'Số hạt gây nhiễm tương đối trong tế bào.', 'Đường cong một bước', [{ key: 'time', label: 'Giờ' }, { key: 'infectious', label: 'Virion gây nhiễm' }], [{ time: 0, infectious: 100 }, { time: 1, infectious: 4 }, { time: 3, infectious: 2 }, { time: 6, infectious: 85 }, { time: 8, infectious: 310 }])
  }),
  bioProblem(topicId, {
    content: 'Virus chỉ nhiễm tế bào hô hấp dù thụ thể của nó cũng có ít ở tế bào ruột. Phát biểu nào tốt nhất?',
    correct: 'Thụ thể cần cho xâm nhập nhưng các yếu tố nội bào, protease, miễn dịch và điều kiện mô còn quyết định tính hướng mô.',
    distractors: ['Chỉ cần một phân tử thụ thể là mọi mô nhiễm như nhau.', 'Virus chọn mô bằng ý thức.', 'Tế bào ruột không có bất kỳ protein nào.'],
    insight: 'Tropism là kết quả nhiều hàng rào liên tiếp, không chỉ sự có/không tuyệt đối của thụ thể.',
    evidence: 'Thụ thể hiện diện ở ruột nhưng nhiễm không hiệu quả, chứng tỏ có yếu tố hạn chế sau hoặc ngoài bước bám.',
    mechanism: 'Virus cần vào, tháo vỏ, sao chép, lắp ráp và né đáp ứng; thiếu một yếu tố chủ có thể chặn chu trình.',
    reasoning: ['Mức thụ thể thấp cũng có thể góp phần nhưng không giải thích toàn bộ.', 'Không dùng nhân hóa hành vi virus.'],
    distractorReasons: ['coi thụ thể là điều kiện đủ duy nhất.', 'gán ý thức cho tác nhân không có hệ thần kinh.', 'phủ nhận cấu trúc cơ bản của tế bào ruột.'],
    tags: ['hướng mô', 'yếu tố vật chủ']
  }),
  bioProblem(topicId, {
    content: 'Thuốc A chặn virus bám thụ thể; B chặn protease virus cần cắt polyprotein; C chặn giải phóng. Nếu thêm thuốc sau khi virus đã vào tế bào nhưng trước tổng hợp protein, thuốc nào còn tác động trực tiếp trong chu trình hiện tại?',
    correct: 'B, vì bước xử lí polyprotein chưa xảy ra; A đã lỡ thời điểm còn C tác động muộn hơn.',
    distractors: ['Chỉ A vì bám là bước đầu tiên của mọi chu trình.', 'Không thuốc nào vì virus đã vào.', 'A và C đều làm virus quay ngược ra ngoài.'],
    insight: 'Hiệu lực phụ thuộc thời điểm thuốc so với vị trí đích trong chu trình.',
    evidence: 'Virus đã hoàn tất vào tế bào nhưng chưa tổng hợp protein.',
    mechanism: 'Thuốc bám chỉ dự phòng hạt mới xâm nhập; protease cần sau dịch mã; thuốc giải phóng tác động ở cuối.',
    reasoning: ['C vẫn có thể ảnh hưởng về sau nhưng câu hỏi hỏi tác động trực tiếp kế tiếp.', 'Không có cơ chế quay ngược chu trình.'],
    distractorReasons: ['chọn đích đã đi qua.', 'bỏ các bước nội bào vẫn còn.', 'bịa đảo chiều vật lí của virus.'],
    tags: ['thuốc kháng virus', 'thời điểm can thiệp']
  }),
  bioProblem(topicId, {
    content: 'Vaccine chứa protein bề mặt tinh sạch không thể nhân lên. Vì sao vẫn tạo trí nhớ miễn dịch?',
    correct: 'Kháng nguyên được tế bào miễn dịch tiếp nhận và trình diện, hoạt hóa dòng lymphocyte đặc hiệu tạo tế bào nhớ mà không cần virus hoàn chỉnh nhân lên.',
    distractors: ['Protein vaccine tự biến thành virus sống trong cơ thể.', 'Vaccine tiêu diệt trực tiếp mọi virion bằng nhiệt.', 'Trí nhớ miễn dịch chỉ hình thành khi mắc bệnh nặng.'],
    insight: 'Miễn dịch nhận diện cấu trúc kháng nguyên; không bắt buộc tác nhân phải hoàn chỉnh hoặc gây bệnh.',
    evidence: 'Protein bề mặt vẫn chứa epitope nhưng chế phẩm không có khả năng sao chép.',
    mechanism: 'Tế bào trình diện kháng nguyên kích hoạt đáp ứng thích ứng và chọn dòng tế bào đặc hiệu, một phần biệt hóa thành tế bào nhớ.',
    reasoning: ['Vaccine tiểu đơn vị thường cần tá dược/lịch liều để tăng đáp ứng.', 'Không có vật liệu đầy đủ để biến thành virus.'],
    distractorReasons: ['bịa tái tạo virus từ một protein.', 'nhầm vaccine với khử trùng trực tiếp.', 'phủ nhận trí nhớ sau tiếp xúc an toàn.'],
    tags: ['vaccine', 'trí nhớ miễn dịch']
  }),
  bioProblem(topicId, {
    content: 'Biến thể M lan nhanh hơn N nhưng trong thí nghiệm tế bào hai biến thể tạo số hạt tương tự. Dữ kiện nào có thể giải thích ưu thế lan truyền của M mà không cần nhân lên nội bào nhanh hơn?',
    correct: 'M bám thụ thể hiệu quả hơn hoặc tồn tại lâu hơn trong giọt khí, làm xác suất truyền giữa người tăng.',
    distractors: ['M có nhiều ribosome riêng hơn N.', 'M tự tạo thức ăn ngoài tế bào.', 'M phải gây bệnh nặng hơn trong mọi ca.'],
    insight: 'Khả năng lan truyền ở quần thể gồm nhiều bước ngoài tốc độ tạo hạt trong một mô hình tế bào.',
    evidence: 'Sản lượng hạt trong tế bào tương tự nên lợi thế có thể nằm ở vào tế bào, ổn định, tải lượng vị trí hoặc hành vi lây.',
    mechanism: 'Tăng xác suất thành công mỗi tiếp xúc có thể nâng số ca thứ cấp dù tốc độ sao chép cơ bản không đổi.',
    reasoning: ['Độc lực và lây truyền không bắt buộc tăng cùng nhau.', 'Virus không có ribosome hay chuyển hóa dinh dưỡng độc lập.'],
    distractorReasons: ['gán bào quan tự có cho virus.', 'gán chuyển hóa tự dưỡng cho virion.', 'đồng nhất lây nhanh với bệnh nặng.'],
    tags: ['biến thể', 'khả năng lây truyền']
  }),
  bioProblem(topicId, {
    content: 'Trong một ổ dịch, mỗi ca tạo trung bình 1,4 ca mới khi chưa có biện pháp; sau can thiệp con số còn 0,7. Ý nghĩa trực tiếp nhất là gì?',
    correct: 'Trước can thiệp dịch có xu hướng tăng; sau can thiệp chuỗi lây có xu hướng giảm nếu điều kiện giữ ổn định.',
    distractors: ['0,7 nghĩa là đúng 70% người chắc chắn tử vong.', '1,4 nghĩa là mỗi người lây đúng 1,4 người trong mọi hoàn cảnh.', 'Chỉ số dưới 1 làm virus biến mất ngay sau một thế hệ.'],
    insight: 'Số sinh sản là giá trị trung bình định hướng tăng/giảm, không phải số nguyên cố định cho từng cá nhân.',
    evidence: 'Ngưỡng 1 phân biệt trung bình mỗi thế hệ lây tạo nhiều hay ít ca hơn thế hệ trước.',
    mechanism: 'Khi R < 1, quy mô kỳ vọng giảm theo thế hệ nhưng vẫn có biến thiên và độ trễ.',
    reasoning: ['Chỉ số không đo trực tiếp tử vong.', 'Dập dịch không tức thời vì còn ca hiện hữu và phân bố lây không đồng đều.'],
    distractorReasons: ['nhầm chỉ số lây với tử vong.', 'diễn giải trung bình như định mệnh cá nhân.', 'bỏ độ trễ và tính ngẫu nhiên.'],
    tags: ['dịch tễ học', 'số sinh sản'],
    stimulus: biologyTable('bio10-adv-virus-12', 'Chỉ số lây truyền', 'Ước lượng trong cùng cộng đồng.', 'Trước và sau can thiệp', [{ key: 'phase', label: 'Giai đoạn' }, { key: 'r', label: 'Số ca thứ cấp trung bình' }], [{ phase: 'Trước can thiệp', r: 1.4 }, { phase: 'Sau can thiệp', r: 0.7 }])
  }),
  bioProblem(topicId, {
    content: 'PCR phát hiện RNA virus sau khi chuyển thành DNA bổ sung. Một người hết triệu chứng nhưng PCR vẫn dương tính yếu, nuôi cấy không thu virus lây nhiễm. Kết luận nào thận trọng nhất?',
    correct: 'Còn vật liệu di truyền virus ở mức thấp nhưng chưa đủ bằng chứng người đó còn thải virus có khả năng lây.',
    distractors: ['PCR dương tính luôn đồng nghĩa chắc chắn lây mạnh.', 'Nuôi cấy âm chứng minh chưa từng nhiễm virus.', 'RNA virus là tế bào sống nên chắc chắn sinh sản.'],
    insight: 'Phát hiện genome và phát hiện hạt virus lây nhiễm là hai đại lượng khác nhau.',
    evidence: 'PCR yếu dương nhưng phép nuôi cấy chức năng âm tính.',
    mechanism: 'Mảnh RNA có thể tồn tại sau khi virion bị bất hoạt; PCR khuếch đại dấu vết nhưng không kiểm tra chu trình nhân lên hoàn chỉnh.',
    reasoning: ['Nuôi cấy cũng có giới hạn độ nhạy nên kết luận dùng từ “chưa đủ bằng chứng”.', 'Kết quả không phủ nhận tiền sử nhiễm.'],
    distractorReasons: ['đồng nhất tín hiệu phân tử với lây nhiễm.', 'ngoại suy âm tính hiện tại về quá khứ.', 'gán tính chất tế bào cho RNA.'],
    tags: ['PCR', 'khả năng lây']
  }),
  bioProblem(topicId, {
    content: 'Phage trị liệu làm số vi khuẩn giảm, nhưng sau đó xuất hiện vi khuẩn mất thụ thể phage và tăng chậm hơn. Chiến lược nào hợp lí nhất?',
    correct: 'Dùng cocktail phage nhận nhiều thụ thể và theo dõi đánh đổi kháng phage–sức sống của vi khuẩn.',
    distractors: ['Chỉ tăng vô hạn một phage duy nhất.', 'Dùng phage không cần kiểm tra phổ vật chủ.', 'Kết luận phage không bao giờ gây chọn lọc kháng.'],
    insight: 'Kháng phage có thể tiến hóa, nhưng dùng nhiều đích và khai thác chi phí thích nghi giúp hạn chế thoát.',
    evidence: 'Vi khuẩn thoát bằng mất thụ thể nhưng phải trả giá tăng trưởng chậm.',
    mechanism: 'Cocktail tạo nhiều hàng rào đồng thời; đột biến thoát tất cả thường khó hơn và có thể làm giảm độc lực/sức sống.',
    reasoning: ['Phage có phổ vật chủ hẹp nên cần kiểm tra.', 'Áp lực chọn lọc vẫn tồn tại với tác nhân sinh học.'],
    distractorReasons: ['tăng liều đơn không giải quyết cơ chế mất thụ thể.', 'bỏ đặc hiệu chủ–phage.', 'phủ nhận trực tiếp quan sát kháng.'],
    tags: ['phage trị liệu', 'tiến hóa kháng']
  }),
  bioProblem(topicId, {
    content: 'Vector virus được loại gene cần cho nhân lên và thay bằng gene trị liệu. Vì sao vẫn phải kiểm tra khả năng tái tổ hợp?',
    correct: 'Tái tổ hợp với virus liên quan hoặc trình tự trong tế bào sản xuất có thể phục hồi chức năng ngoài ý muốn.',
    distractors: ['Gene trị liệu chắc chắn biến thành lipid.', 'Virus vector không chứa acid nucleic nên không thể tái tổ hợp.', 'Loại một gene làm mọi rủi ro bằng 0.'],
    insight: 'Vector bất hoạt sao chép giảm rủi ro nhưng không biến hệ sinh học thành tuyệt đối không thể thay đổi.',
    evidence: 'Vector vẫn mang genome đã chỉnh sửa và được tạo trong hệ có các thành phần bổ trợ.',
    mechanism: 'Trao đổi hoặc ghép đoạn tương đồng có thể tạo genome mới; thiết kế tách chức năng và kiểm định giúp giảm xác suất.',
    reasoning: ['An toàn sinh học dựa trên nhiều lớp kiểm soát.', 'Acid nucleic là thành phần bắt buộc của vector mang gene.'],
    distractorReasons: ['mô tả chuyển loại phân tử không có.', 'phủ nhận genome của vector.', 'dùng mệnh đề rủi ro bằng không.'],
    tags: ['vector virus', 'an toàn sinh học']
  }),
  bioProblem(topicId, {
    content: 'Trong cộng đồng, tỉ lệ người có miễn dịch tăng và số ca ở cả người chưa miễn dịch cũng giảm. Giải thích phù hợp nhất là gì?',
    correct: 'Mạng lưới truyền bị gián đoạn nhiều hơn, làm người nhạy cảm ít gặp nguồn lây; đây là hiệu ứng miễn dịch cộng đồng.',
    distractors: ['Miễn dịch của người khác truyền trực tiếp qua không khí sang người chưa miễn dịch.', 'Virus mất toàn bộ đột biến khi gặp người miễn dịch.', 'Mỗi người miễn dịch hấp thụ tất cả virus trong cộng đồng.'],
    insight: 'Bảo vệ gián tiếp đến từ xác suất tiếp xúc với ca lây giảm, không phải chuyển kháng thể tự động.',
    evidence: 'Lợi ích xuất hiện cả ở nhóm chưa miễn dịch khi độ bao phủ cộng đồng tăng.',
    mechanism: 'Nhiều mắt xích không còn dễ nhiễm hoặc lây làm chuỗi truyền thường bị kết thúc sớm.',
    reasoning: ['Mức ngưỡng phụ thuộc khả năng lây và hiệu quả miễn dịch.', 'Hiệu ứng không bảo đảm từng người được bảo vệ tuyệt đối.'],
    distractorReasons: ['bịa đường truyền miễn dịch.', 'gán sửa genome virus cho tiếp xúc.', 'nhân hóa người miễn dịch như bộ lọc tuyệt đối.'],
    tags: ['miễn dịch cộng đồng', 'chuỗi lây']
  }),
  bioProblem(topicId, {
    content: 'Ba đột biến virus được thử: M1 giảm bám, M2 giảm tháo vỏ, M3 giảm lắp capsid. Dữ liệu nào ghép đúng nhất?',
    correct: 'M1: ít genome vào; M2: genome vào nhưng ít mRNA sớm; M3: mRNA và genome mới có nhưng ít virion hoàn chỉnh.',
    distractors: ['M1 chỉ giảm virion cuối nhưng genome vào bình thường; M3 không tạo mRNA sớm.', 'Cả ba cho cùng kiểu dữ liệu vì mọi bước độc lập hoàn toàn.', 'M2 làm tăng mRNA sớm vì không tháo vỏ.'],
    insight: 'Mỗi điểm chặn tạo tích lũy ở trước bước và thiếu sản phẩm ở sau bước.',
    evidence: 'Bám đứng trước vào; tháo vỏ đứng trước biểu hiện genome; lắp capsid đứng sau tổng hợp thành phần.',
    mechanism: 'Đọc chu trình theo thứ tự cho phép định vị đột biến từ mẫu phân tử.',
    reasoning: ['M3 không ngăn trực tiếp sao chép genome hoặc mRNA.', 'Không tháo vỏ làm genome kém tiếp cận bộ máy phiên mã.'],
    distractorReasons: ['đảo vị trí tác động của M1 và M3.', 'phủ nhận quan hệ tuần tự của chu trình.', 'đảo hậu quả của giữ genome trong capsid.'],
    tags: ['chu trình nhân lên', 'định vị bước'],
    stimulus: biologyTable('bio10-adv-virus-17', 'Các chỉ số chu trình', 'Dấu ↓ là giảm mạnh so với virus chuẩn.', 'Mẫu phân tử dự kiến', [{ key: 'mutant', label: 'Đột biến' }, { key: 'entry', label: 'Genome vào' }, { key: 'early', label: 'mRNA sớm' }, { key: 'newGenome', label: 'Genome mới' }, { key: 'virion', label: 'Virion hoàn chỉnh' }], [{ mutant: 'M1', entry: '↓', early: '↓', newGenome: '↓', virion: '↓' }, { mutant: 'M2', entry: '≈', early: '↓', newGenome: '↓', virion: '↓' }, { mutant: 'M3', entry: '≈', early: '≈', newGenome: '≈', virion: '↓' }])
  }),
  bioProblem(topicId, {
    content: 'Một virus tạo số bản sao genome bình thường nhưng số virion lây nhiễm giảm 95%; ảnh hiển vi thấy nhiều capsid rỗng. Bước bị lỗi phù hợp nhất là gì?',
    correct: 'Đóng gói genome vào capsid hoặc phối hợp lắp ráp genome–capsid.',
    distractors: ['Bám thụ thể ở đầu chu trình.', 'Tổng hợp nucleotide của tế bào đã dừng hoàn toàn.', 'Phiên mã gene capsid không xảy ra vì không có capsid nào.'],
    insight: 'Capsid rỗng cùng genome dư tách lỗi đóng gói khỏi lỗi tổng hợp hai thành phần.',
    evidence: 'Genome mới ở mức bình thường và capsid hiện diện, nhưng chúng không kết hợp thành hạt lây nhiễm.',
    mechanism: 'Tín hiệu đóng gói và protein lắp ráp phải nhận diện genome để đưa nó vào cấu trúc capsid.',
    reasoning: ['Lỗi bám không giải thích capsid rỗng trong tế bào đã nhiễm.', 'Có capsid chứng minh ít nhất một phần gene capsid được biểu hiện.'],
    distractorReasons: ['chọn bước đã vượt qua trong tế bào nhiễm.', 'mâu thuẫn genome virus vẫn sao chép.', 'mâu thuẫn quan sát nhiều capsid.'],
    tags: ['lắp ráp virus', 'capsid'],
    stimulus: biologyTable('bio10-adv-virus-18', 'Lắp ráp virion', 'Các chỉ số so với virus chuẩn.', 'Kết quả của đột biến', [{ key: 'metric', label: 'Chỉ số' }, { key: 'normal', label: 'Virus chuẩn', unit: '%' }, { key: 'mutant', label: 'Đột biến', unit: '%' }], [{ metric: 'Genome mới', normal: 100, mutant: 103 }, { metric: 'Protein capsid', normal: 100, mutant: 96 }, { metric: 'Virion lây nhiễm', normal: 100, mutant: 5 }, { metric: 'Capsid rỗng', normal: 8, mutant: 79 }])
  })
];
