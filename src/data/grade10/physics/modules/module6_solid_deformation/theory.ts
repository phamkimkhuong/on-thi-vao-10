export const phy10Qt54Theory: string[] = [
  '**1. Biến dạng là gì?**\nBiến dạng là sự thay đổi hình dạng hoặc kích thước của vật dưới tác dụng của lực. Muốn phân loại đúng phải xét **các lực tác dụng lên vật**, không xét riêng chiều chuyển động của cả vật.',
  '**2. Biến dạng kéo và nén**\n- **Kéo:** hai đầu bị tác dụng bởi các lực hướng ra xa nhau, chiều dài theo phương lực tăng.\n- **Nén:** hai đầu bị tác dụng bởi các lực hướng vào nhau, chiều dài theo phương lực giảm.\nMột vật còn có thể bị uốn, xoắn hoặc trượt; chúng không đồng nhất với kéo/nén thuần túy.',
  '**3. Biến dạng đàn hồi**\nSau khi bỏ lực, vật trở lại hình dạng và kích thước ban đầu hoặc gần như ban đầu. Khi đang biến dạng, vật sinh ra lực đàn hồi có xu hướng chống lại nguyên nhân gây biến dạng.',
  '**4. Biến dạng không đàn hồi**\nSau khi bỏ lực, vật còn biến dạng dư. Đất sét bị ép, dây kim loại bị kéo quá mức là các ví dụ thường gặp. “Mềm” không đồng nghĩa “không đàn hồi”: cao su mềm vẫn có thể hồi phục tốt.',
  '**5. Giới hạn đàn hồi**\nĐịnh luật Hooke chỉ áp dụng trong miền đàn hồi tuyến tính. Nếu tải vượt giới hạn cho phép, vật có thể không hồi phục hoàn toàn, nên không được tiếp tục dùng quan hệ tỉ lệ một cách máy móc.',
  '**6. Dấu hiệu nhận dạng nhanh**\nHãy hỏi lần lượt: lực ở hai đầu hướng ra hay hướng vào; kích thước nào thay đổi; sau khi bỏ lực vật có trở lại trạng thái đầu không; tải có vượt miền làm việc cho phép không.',
  '**7. Lỗi cần tránh**\n- Đồng nhất mọi biến dạng với biến dạng đàn hồi.\n- Dùng chiều chuyển động để kết luận kéo/nén.\n- Cho vật không chuyển động thì không biến dạng.\n- Cho vật mềm luôn biến dạng vĩnh viễn.\n- Áp dụng Hooke ngoài giới hạn đàn hồi.'
];

export const phy10Qt55Theory: string[] = [
  '**1. Chiều dài ban đầu và chiều dài sau biến dạng**\nGọi $l_0$ là chiều dài tự nhiên/ban đầu và $l$ là chiều dài ở trạng thái đang xét. Hai đại lượng phải được đo theo cùng phương và đổi về cùng đơn vị.',
  '**2. Độ biến dạng tuyệt đối có dấu**\n$$\\Delta l=l-l_0$$\nTheo quy ước này: kéo thì $\\Delta l>0$, nén thì $\\Delta l<0$. Khi đề chỉ hỏi “độ dãn” hoặc “độ nén”, thường dùng độ lớn $|\\Delta l|$.',
  '**3. Chiều dài sau biến dạng**\n$$l=l_0+\\Delta l$$\nNếu dùng độ nén dương $x=|\\Delta l|$ thì khi nén phải viết $l=l_0-x$, không cộng máy móc.',
  '**4. Độ biến dạng tương đối**\n$$\\varepsilon=\\frac{\\Delta l}{l_0}$$\n$\\varepsilon$ không có đơn vị vì là tỉ số hai chiều dài. Phần trăm biến dạng:\n$$\\varepsilon_{\\%}=\\frac{\\Delta l}{l_0}\\times100\\%$$',
  '**5. Bài toán ngược**\nTừ $\\varepsilon$ suy ra $\\Delta l=\\varepsilon l_0$. Nếu đề cho phần trăm, phải đổi về số thập phân trước: $0{,}5\\%=0{,}005$.',
  '**6. So sánh mức biến dạng**\nHai vật có cùng $\\Delta l$ chưa chắc biến dạng như nhau: vật ngắn có $|\\varepsilon|$ lớn hơn. Muốn so sánh công bằng các chiều dài ban đầu khác nhau, dùng độ biến dạng tương đối.',
  '**7. Lỗi cần tránh**\n- Lấy $l$ thay $l_0$ ở mẫu số.\n- Nhầm $\\Delta l$ với chiều dài toàn vật.\n- Quên đổi phần trăm.\n- Trộn cm với m.\n- Dùng dấu dương cho nén nhưng không nói rõ quy ước.'
];

export const phy10Qt56Theory: string[] = [
  '**1. Định luật Hooke**\nTrong giới hạn đàn hồi tuyến tính, độ lớn lực đàn hồi của lò xo tỉ lệ với độ biến dạng:\n$$F_{đh}=k|\\Delta l|=kx$$\ntrong đó $x=|l-l_0|$ tính bằng mét.',
  '**2. Dạng vector trên một trục**\nNếu chọn tọa độ biến dạng $x$ dương theo chiều kéo khỏi vị trí tự nhiên:\n$$F_{đh,x}=-kx$$\nDấu “$-$” cho biết lực đàn hồi luôn hướng về vị trí mà lò xo không biến dạng; nó không có nghĩa độ lớn lực âm.',
  '**3. Độ cứng lò xo**\n$$k=\\frac{F_{đh}}{x}$$\nĐơn vị SI là N/m. $k$ lớn nghĩa lò xo cứng hơn: cùng lực thì biến dạng ít hơn. $k$ phụ thuộc vật liệu và cấu tạo lò xo, không phụ thuộc tải khi còn trong miền Hooke.',
  '**4. Phân biệt lực tác dụng và lực đàn hồi**\nỞ trạng thái cân bằng tĩnh, độ lớn của chúng có thể bằng nhau nhưng là các lực khác nhau. Ví dụ vật treo đứng yên:\n$$k\\Delta l=mg$$\nChỉ được viết như vậy sau khi đã vẽ lực và xác nhận cân bằng.',
  '**5. Lò xo kéo và lò xo nén**\nCùng công thức độ lớn $F=kx$, nhưng chiều lực đàn hồi luôn chống lại biến dạng: lò xo bị kéo thì kéo các đầu lại; lò xo bị nén thì đẩy các đầu ra.',
  '**6. Điều kiện sử dụng**\nLò xo lý tưởng, biến dạng dọc trục, tải trong miền tuyến tính và các đại lượng ở cùng trạng thái. Nếu đề cho giới hạn đàn hồi thì phải kiểm tra $F\\le F_{gh}$ hoặc $x\\le x_{gh}$.',
  '**7. Lỗi cần tránh**\n- Thay $l$ vào $F=kl$ thay vì $x=|l-l_0|$.\n- Quên đổi cm sang m.\n- Gắn dấu âm vào độ lớn lực.\n- Mặc định $F_{đh}=mg$ khi vật còn gia tốc.\n- Dùng Hooke ngoài miền tuyến tính.'
];

export const phy10Qt57Theory: string[] = [
  '**1. Đồ thị $F-x$**\nNếu trục đứng là lực $F$ và trục ngang là độ biến dạng $x$, miền tuân theo Hooke là đoạn thẳng:\n$$F=kx$$\nĐường lí tưởng đi qua gốc; hệ số góc chính là $k$.',
  '**2. Tính hệ số góc**\nChọn hai điểm cách xa nhau trong miền tuyến tính hoặc dùng đường hồi quy:\n$$k=\\frac{\\Delta F}{\\Delta x}$$\nPhải đổi $x$ sang mét để nhận $k$ theo N/m. Không nên lấy một điểm nhiễu duy nhất.',
  '**3. Khi đảo trục**\nNếu đồ thị biểu diễn $x$ theo $F$, hệ số góc bằng $1/k$, không phải $k$. Vì vậy phải đọc tên và đơn vị hai trục trước khi tính.',
  '**4. Ý nghĩa đoạn không tuyến tính**\nKhi đồ thị $F-x$ không còn là đường thẳng, định luật Hooke không còn mô tả đúng miền đó. Chỉ từ đường tải lên chưa đủ kết luận vật có biến dạng dư; muốn xác định tính hồi phục cần dữ liệu khi giảm/bỏ tải.',
  '**5. Đồ thị không đi qua gốc**\nCó thể do sai số điểm 0, tiền tải, khối lượng móc treo chưa tính hoặc lò xo đã có lực ban đầu. Không tự ý ép đường qua gốc trước khi xem nguyên nhân vật lí và cách thu số liệu.',
  '**6. Nội suy và ngoại suy**\nCó thể nội suy trong miền dữ liệu tuyến tính. Không ngoại suy qua giới hạn đã đo hoặc qua vùng cong, vì khi đó $k$ hiệu dụng có thể thay đổi.',
  '**7. Lỗi cần tránh**\n- Lấy nghịch đảo sai vì không đọc trục.\n- Dùng cm như m.\n- Tính $F/x$ tại điểm không thuộc miền tuyến tính.\n- Gọi điểm lệch tuyến tính chắc chắn là giới hạn đàn hồi.\n- Bỏ qua sai số và độ phân tán dữ liệu.'
];

export const phy10Qt58Theory: string[] = [
  '**1. Mục tiêu thí nghiệm**\nXác định độ cứng $k$ và kiểm tra miền mà $F$ tỉ lệ với $\\Delta l$. Đại lượng đo trực tiếp thường là khối lượng tải, chiều dài tự nhiên $l_0$ và chiều dài có tải $l$.',
  '**2. Dụng cụ và lực tải**\nDùng giá đỡ, lò xo, thước, móc và các quả cân. Với hệ treo cân bằng:\n$$F=mg$$\nPhải tính cả khối lượng móc treo nếu nó đã làm lò xo dãn.',
  '**3. Quy trình đo**\nĐo $l_0$ khi chưa tải; tăng tải từng mức; chờ vật đứng yên; đọc $l$ ngang tầm mắt; tính $x=l-l_0$. Nên đo lặp và có thể giảm tải để kiểm tra khả năng hồi phục.',
  '**4. Bảng và đồ thị**\nLập các cột $m$, $F=mg$, $l$, $x$. Vẽ $F$ theo $x$; độ dốc của đường phù hợp tốt nhất trong miền tuyến tính cho:\n$$k=\\frac{\\Delta F}{\\Delta x}$$',
  '**5. Sai số ngẫu nhiên và hệ thống**\nNgẫu nhiên: dao động, đọc thước, chọn mốc. Hệ thống: thước lệch 0, bỏ khối lượng móc, giá nghiêng, lò xo có tiền tải. Đo lặp giảm ngẫu nhiên nhưng không tự loại sai số hệ thống.',
  '**6. Cải thiện độ tin cậy**\nDùng nhiều mức tải trong giới hạn an toàn, chọn khoảng biến dạng đủ lớn so với độ chia, đọc vuông góc, chờ cân bằng, dùng đường hồi quy thay vì chỉ một tỉ số $F/x$.',
  '**7. An toàn và giới hạn kết luận**\nKhông kéo quá giới hạn lò xo; giữ tải tránh rơi; không đứng theo hướng vật có thể bật. Kết luận phải phù hợp phạm vi tải đã đo, không khẳng định Hooke đúng với mọi lực.',
  '**8. Lỗi cần tránh**\n- Dùng $l$ thay $x$.\n- Quên khối lượng móc.\n- Chỉ đo một tải.\n- Tính trung bình các $F/x$ khi có điểm ngoài miền tuyến tính.\n- Sửa số liệu để đồ thị đi qua gốc.'
];

export const phy10Qt59Theory: string[] = [
  '**1. Cân lò xo và thang đo**\nTrong miền Hooke, $F=kx$ nên các độ tăng lực bằng nhau tạo các độ tăng độ dãn bằng nhau; vì thế thang chia có thể đều. Giới hạn đo phải nhỏ hơn hoặc bằng giới hạn đàn hồi an toàn.',
  '**2. Lò xo ghép song song**\nCác lò xo cùng chịu một độ biến dạng $x$, còn lực tổng bằng tổng lực thành phần:\n$$k_{tđ}=k_1+k_2+\\cdots$$\nHệ cứng hơn từng lò xo riêng. Tải phân bố $F_i=k_ix$.',
  '**3. Lò xo ghép nối tiếp**\nCác lò xo lí tưởng chịu cùng độ lớn lực, độ biến dạng toàn hệ bằng tổng từng phần:\n$$\\frac1{k_{tđ}}=\\frac1{k_1}+\\frac1{k_2}+\\cdots$$\nVới hai lò xo: $k_{tđ}=\\dfrac{k_1k_2}{k_1+k_2}$. Hệ mềm hơn lò xo mềm nhất.',
  '**4. Điều kiện nhận diện cách ghép**\nKhông dựa vào hình vẽ giống “nối tiếp/song song” của mạch điện. Hãy xét: các lò xo có cùng biến dạng hay cùng lực; các điểm nối có cân bằng không; tải được chia hay truyền nguyên vẹn.',
  '**5. Bài toán cân bằng**\nVẽ lực lên vật trước. Ở cân bằng:\n$$\\sum \\vec F=0$$\nSau đó mới thay lực lò xo bằng $kx$. Với nhiều phương hoặc mặt nghiêng, phải chiếu lực lên trục phù hợp.',
  '**6. Giới hạn an toàn**\nMỗi lò xo phải đồng thời thỏa $x_i\\le x_{gh,i}$ hoặc $F_i\\le F_{gh,i}$. Tải tối đa của cả hệ do phần tử đạt giới hạn trước quyết định, không chỉ do $k_{tđ}$.',
  '**7. Thiết kế và hiệu chuẩn**\nChọn $k$ đủ nhỏ để độ dãn dễ đọc nhưng đủ lớn để không vượt hành trình/giới hạn. Hiệu chuẩn bằng các tải chuẩn, kiểm tra điểm 0, độ tuyến tính và khả năng lặp lại khi tăng–giảm tải.',
  '**8. Lỗi cần tránh**\n- Cộng độ dãn của lò xo song song.\n- Cho lò xo nối tiếp có cùng độ dãn.\n- Chỉ tính $k_{tđ}$ mà không kiểm tra từng lò xo.\n- Mặc định $kx=mg$ khi hệ không cân bằng.\n- Dùng thiết bị ngoài giới hạn đàn hồi.'
];

export const g10PhysicsModule6TheoryByQuestionTypeId: Record<string, string[]> = {
  'phy10-qt54': phy10Qt54Theory,
  'phy10-qt55': phy10Qt55Theory,
  'phy10-qt56': phy10Qt56Theory,
  'phy10-qt57': phy10Qt57Theory,
  'phy10-qt58': phy10Qt58Theory,
  'phy10-qt59': phy10Qt59Theory
};
