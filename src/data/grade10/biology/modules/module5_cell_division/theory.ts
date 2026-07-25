export const bio10Qt6Theory: string[] = [
  '**1. Chu kì tế bào**\nChu kì gồm kì trung gian và pha phân bào. Kì trung gian thường gồm $G_1$ (sinh trưởng), S (nhân đôi DNA) và $G_2$ (chuẩn bị phân bào). Không được gọi toàn bộ kì trung gian là “pha nghỉ”.',
  '**2. Các điểm kiểm soát**\nĐiểm kiểm soát đánh giá kích thước, dinh dưỡng, tổn thương DNA, việc nhân đôi DNA và sự gắn của nhiễm sắc thể với thoi phân bào. Nếu điều kiện không đạt, chu kì có thể dừng để sửa chữa hoặc tế bào đi vào chết theo chương trình.',
  '**3. Phân biệt nhiễm sắc thể, chromatid và DNA**\nSố nhiễm sắc thể được đếm theo số tâm động. Sau pha S, mỗi nhiễm sắc thể gồm hai chromatid chị em và lượng DNA gấp đôi, nhưng số nhiễm sắc thể chưa đổi. Khi hai chromatid tách tâm động, mỗi chromatid trở thành một nhiễm sắc thể.',
  '**4. Mốc số lượng cần nhớ**\nVới tế bào lưỡng bội:\n- $G_1$: $2n$ nhiễm sắc thể đơn, $2C$ DNA.\n- Sau S, $G_2$, kì đầu và kì giữa: $2n$ nhiễm sắc thể kép, $4C$ DNA.\n- Kì sau trong toàn tế bào: tạm tính $4n$ nhiễm sắc thể đơn, vẫn $4C$ DNA; mỗi cực nhận $2n,2C$.\n- Sau phân chia: mỗi tế bào con $2n,2C$.',
  '**5. Kì đầu và kì giữa**\nKì đầu: nhiễm sắc thể co xoắn, thoi phân bào hình thành, màng nhân dần biến đổi. Kì giữa: nhiễm sắc thể kép co xoắn cực đại và xếp trên mặt phẳng xích đạo; mỗi chromatid chị em nối với sợi thoi hướng về cực đối diện.',
  '**6. Kì sau và kì cuối**\nKì sau: tâm động phân chia, chromatid chị em tách và đi về hai cực. Kì cuối: nhiễm sắc thể dãn xoắn, nhân tái lập. Phân chia tế bào chất tạo hai tế bào con; cơ chế ở tế bào động vật và thực vật khác nhau.',
  '**7. Kết quả và ý nghĩa nguyên phân**\nTừ một tế bào mẹ tạo hai tế bào con thường có bộ nhiễm sắc thể giống nhau và giống tế bào mẹ nếu không có đột biến. Nguyên phân giúp sinh trưởng, thay thế, tái sinh và sinh sản vô tính ở nhiều sinh vật.',
  '**8. Bài toán số tế bào**\nNếu mọi tế bào đều nguyên phân đồng bộ, không chết và mỗi lần tạo hai tế bào:\n$$N=N_0\\times2^k$$\nTrong đó $N_0$ là số tế bào ban đầu, $k$ là số lần nguyên phân. Chỉ dùng công thức khi các giả thiết này được thỏa.',
  '**9. Quy trình nhận diện kì**\n- Xem nhiễm sắc thể đã co xoắn chưa.\n- Xem chúng xếp ở xích đạo hay đang phân li.\n- Kiểm tra tâm động đã tách chưa.\n- Xác định một hay hai cực/nhân.\n- Sau cùng mới đối chiếu số DNA và nhiễm sắc thể.',
  '**10. Lỗi cần tránh**\n- Cho pha S làm tăng số nhiễm sắc thể.\n- Đếm chromatid thay cho tâm động.\n- Cho kì giữa đã tách chromatid.\n- Dùng $2^k$ khi tế bào không cùng số lần chia.\n- Kết luận hai tế bào con luôn tuyệt đối giống nhau dù có đột biến hoặc phân chia tế bào chất không đều.'
];

export const bio10Qt36Theory: string[] = [
  '**1. Vì sao chu kì phải được kiểm soát**\nTăng sinh phải cân bằng với biệt hóa và chết tế bào để duy trì mô. Tín hiệu kích thích, tín hiệu ức chế, điểm kiểm soát và sửa chữa DNA phối hợp quyết định tế bào có tiếp tục chu kì hay không.',
  '**2. Hai nhóm gene điều hòa**\nGene thúc đẩy tăng sinh bình thường có thể trở thành oncogene khi hoạt hóa quá mức. Gene ức chế khối u giúp dừng chu kì, sửa chữa DNA hoặc kích hoạt chết tế bào; mất chức năng làm hàng rào kiểm soát suy yếu.',
  '**3. Ung thư là quá trình nhiều bước**\nMột biến đổi đơn lẻ thường chưa đủ. Nhiều đột biến và thay đổi điều hòa tích lũy làm tế bào tăng sinh không kiểm soát, né chết, tạo mạch, xâm lấn và có thể di căn.',
  '**4. Yếu tố nguy cơ**\nThuốc lá, tia UV/bức xạ ion hóa, một số hóa chất, virus, tuổi và đột biến di truyền có thể làm tăng nguy cơ. “Tăng nguy cơ” không có nghĩa mọi người phơi nhiễm chắc chắn mắc bệnh, và không phơi nhiễm cũng không bảo đảm bằng không.',
  '**5. Đọc dữ liệu bệnh học**\nPhân biệt tương quan với quan hệ nhân quả. Cần xem nhóm đối chứng, cỡ mẫu, liều phơi nhiễm, thời gian theo dõi và yếu tố gây nhiễu. Một biểu đồ tỉ lệ bệnh cao hơn chỉ hỗ trợ kết luận trong giới hạn thiết kế nghiên cứu.',
  '**6. Nguyên tắc điều trị**\nPhẫu thuật loại mô khu trú; xạ trị và hóa trị gây tổn thương tế bào phân chia; thuốc nhắm đích tác động phân tử đặc hiệu; miễn dịch trị liệu hỗ trợ hệ miễn dịch nhận diện ung thư. Lựa chọn phụ thuộc loại, giai đoạn và đặc điểm người bệnh.',
  '**7. Phòng ngừa và phát hiện sớm**\nGiảm thuốc lá/rượu, bảo vệ khỏi UV, tiêm vaccine phù hợp, vận động và kiểm soát nghề nghiệp giúp giảm một phần nguy cơ. Sàng lọc nhằm phát hiện sớm ở nhóm phù hợp, không phải xét nghiệm nào cũng dùng cho mọi người.',
  '**8. Lỗi cần tránh**\n- Cho ung thư chỉ do tế bào phân chia nhanh.\n- Gọi mọi khối u là ác tính.\n- Cho một đột biến luôn đủ gây ung thư.\n- Đồng nhất yếu tố nguy cơ với nguyên nhân chắc chắn.\n- Kết luận một phương pháp điều trị phù hợp cho mọi ung thư.'
];

export const bio10Qt37Theory: string[] = [
  '**1. Mục tiêu giảm phân**\nGiảm phân tạo tế bào đơn bội từ tế bào lưỡng bội, giúp số nhiễm sắc thể không tăng gấp đôi qua mỗi thế hệ hữu tính. DNA chỉ nhân đôi một lần trước giảm phân I nhưng tế bào phân chia hai lần.',
  '**2. Tiếp hợp và trao đổi chéo**\nỞ kì đầu I, các nhiễm sắc thể tương đồng tiếp hợp; chromatid không chị em có thể trao đổi đoạn tương ứng. Trao đổi chéo tạo tổ hợp allele mới nhưng không làm thay đổi số gene hay số nhiễm sắc thể trong điều kiện bình thường.',
  '**3. Sắp xếp độc lập ở kì giữa I**\nMỗi cặp tương đồng định hướng ngẫu nhiên và độc lập tương đối trên mặt phẳng xích đạo. Sự định hướng này quyết định nhiễm sắc thể nguồn bố/mẹ đi về cực nào, tạo biến dị tổ hợp.',
  '**4. Giảm phân I**\nCác nhiễm sắc thể tương đồng phân li, tâm động chưa tách. Từ tế bào $2n,4C$ tạo hai tế bào $n,2C$: số bộ nhiễm sắc thể giảm một nửa nhưng mỗi nhiễm sắc thể vẫn gồm hai chromatid.',
  '**5. Giảm phân II**\nKhông có pha S giữa hai lần phân bào. Ở giảm phân II, tâm động tách và chromatid chị em phân li. Kết quả điển hình là bốn tế bào $n,C$, nhưng hình thức tạo giao tử thực tế có thể khác giữa đực và cái.',
  '**6. Bảng mốc định lượng**\n- Trước nhân đôi: $2n,2C$.\n- Sau nhân đôi/đầu I: $2n,4C$.\n- Sau giảm phân I: mỗi tế bào $n,2C$.\n- Sau giảm phân II: mỗi tế bào $n,C$.\nLuôn xác định đề đang hỏi một tế bào, toàn bộ các tế bào hay mỗi cực.',
  '**7. So sánh nguyên phân và giảm phân**\nNguyên phân có một lần phân bào, thường tạo hai tế bào giữ nguyên số bộ nhiễm sắc thể. Giảm phân có hai lần phân bào sau một lần nhân đôi, tạo tế bào đơn bội và biến dị tổ hợp.',
  '**8. Nguồn biến dị tổ hợp**\nGồm trao đổi chéo, phân li độc lập và tổ hợp ngẫu nhiên khi thụ tinh. Chỉ xét phân li độc lập của $n$ cặp tương đồng, một cá thể có thể tạo tối đa $2^n$ kiểu tổ hợp nhiễm sắc thể trong giao tử; trao đổi chéo làm số khả năng lớn hơn.',
  '**9. Sinh sản hữu tính**\nGiảm phân tạo giao tử $n$, thụ tinh hợp nhất hai giao tử tạo hợp tử $2n$, nguyên phân phát triển cơ thể. Ba quá trình phối hợp vừa ổn định số nhiễm sắc thể đặc trưng vừa tạo đa dạng.',
  '**10. Không phân li**\nNếu một cặp tương đồng không phân li ở giảm phân I, bốn giao tử liên quan đều bất thường: hai $n+1$, hai $n-1$. Nếu chromatid không phân li ở một tế bào giảm phân II, thường có hai giao tử bình thường, một $n+1$ và một $n-1$.',
  '**11. Lỗi cần tránh**\n- Gọi giảm phân là hai nguyên phân liên tiếp.\n- Cho DNA nhân đôi giữa giảm phân I và II.\n- Cho chromatid chị em tách ở kì sau I.\n- Nhầm $n$ với lượng DNA $C$.\n- Dùng $2^n$ như đã bao gồm mọi trao đổi chéo.'
];

export const bio10Qt38Theory: string[] = [
  '**1. Dấu hiệu nhận diện phân bào trên tiêu bản**\nKì đầu: nhiễm sắc thể bắt đầu co xoắn; kì giữa: xếp ở xích đạo; kì sau: hai nhóm đang tách về cực; kì cuối: hai vùng nhân hình thành. Tế bào ở kì trung gian có nhân rõ nhưng không thấy nhiễm sắc thể co xoắn riêng biệt.',
  '**2. Phân biệt nguyên phân và giảm phân trên ảnh**\nTìm cặp tương đồng tiếp hợp, tetrad và hai lần phân bào để nhận diện giảm phân. Một ảnh đơn lẻ có thể không đủ; cần kết hợp loại mô, số tế bào con, số bộ nhiễm sắc thể và cách sắp xếp/phân li.',
  '**3. Chỉ số nguyên phân**\n$$MI=\\frac{\\text{số tế bào đang nguyên phân}}{\\text{tổng số tế bào quan sát}}\\times100\\%$$\n$MI$ cao thường cho thấy tỉ lệ tế bào đang phân chia cao, nhưng còn phụ thuộc thời lượng các kì, vùng lấy mẫu và điều kiện mô; không tự động chứng minh tốc độ chu kì cao hơn.',
  '**4. Quy trình quan sát**\nChọn mô có phân chia mạnh, cố định/nhuộm phù hợp, làm tiêu bản mỏng, quan sát nhiều trường nhìn và dùng tiêu chí thống nhất. Ghi số tế bào từng kì, lặp mẫu và tránh chỉ chọn vùng “đẹp” làm sai lệch kết quả.',
  '**5. Tính toàn năng và nuôi cấy mô**\nTính toàn năng là khả năng một tế bào có thông tin di truyền phù hợp tạo cơ thể hoàn chỉnh trong điều kiện thích hợp. Nuôi cấy mô thực vật dựa vào khử biệt hóa, tạo mô sẹo và tái biệt hóa dưới tác động môi trường/dinh dưỡng/hormone.',
  '**6. Ứng dụng nuôi cấy mô**\nNhân nhanh giống, tạo cây sạch bệnh, bảo tồn nguồn gene và sản xuất đồng đều. Các cây nhân từ một nguồn thường gần giống di truyền, nhưng đột biến soma hoặc biến dị nuôi cấy vẫn có thể xuất hiện.',
  '**7. Tế bào gốc**\nTế bào gốc có khả năng tự đổi mới và biệt hóa. Tế bào toàn năng tạo mọi loại tế bào kể cả mô ngoài phôi; tế bào đa năng tạo nhiều loại tế bào cơ thể nhưng không tự tạo một cơ thể hoàn chỉnh.',
  '**8. Chuyển nhân tế bào soma**\nLấy nhân tế bào soma đưa vào trứng đã bỏ nhân, kích thích phát triển rồi cấy hoặc dùng tạo dòng tế bào. DNA nhân chủ yếu giống cá thể cho nhân, còn DNA ti thể chủ yếu đến từ tế bào trứng.',
  '**9. Nhân bản sinh sản và điều trị**\nNhân bản sinh sản nhằm tạo cá thể; nhân bản điều trị nhằm tạo tế bào/mô phục vụ nghiên cứu hoặc chữa bệnh. Chúng khác mục đích và bước sử dụng phôi, đồng thời có vấn đề hiệu quả, an toàn và đạo đức.',
  '**10. Lỗi cần tránh**\n- Nhận diện kì chỉ bằng “nhiều sợi đậm”.\n- Cho $MI$ cao chắc chắn nghĩa chu kì ngắn hơn.\n- Cho mọi tế bào nuôi cấy đều tự tạo cơ thể.\n- Cho cá thể chuyển nhân giống tuyệt đối cá thể cho nhân.\n- Bỏ qua DNA ti thể và ảnh hưởng môi trường phát triển.'
];
