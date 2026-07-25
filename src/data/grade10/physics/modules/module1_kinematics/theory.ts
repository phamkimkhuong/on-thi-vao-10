export const phy10Qt8Theory: string[] = [
  '**1. Chuyển động có tính tương đối**\nMột vật chuyển động nếu vị trí của nó thay đổi theo thời gian so với vật mốc. Cùng một vật có thể đứng yên trong hệ này nhưng chuyển động trong hệ khác, vì vậy mọi mô tả phải nêu vật mốc/hệ quy chiếu.',
  '**2. Hệ quy chiếu**\nĐể mô tả chuyển động cần vật mốc, hệ tọa độ gắn với vật mốc, mốc thời gian và đồng hồ. Trong bài thẳng một chiều thường dùng trục $Ox$ có gốc $O$ và chiều dương.',
  '**3. Tọa độ có dấu**\nTọa độ $x$ cho biết vị trí so với gốc theo chiều đã chọn. $x>0$ nằm phía dương, $x<0$ phía âm; tọa độ âm không có nghĩa quãng đường âm.',
  '**4. Vị trí và khoảng cách**\nKhoảng cách giữa hai vị trí trên trục là $|x_B-x_A|$, luôn không âm. Tọa độ của một vật phụ thuộc gốc; khoảng cách giữa hai vật không phụ thuộc cách chọn gốc nếu cùng một hệ.',
  '**5. Thời điểm và khoảng thời gian**\nThời điểm $t$ được đo từ mốc thời gian. Khoảng thời gian giữa hai sự kiện:\n$$\\Delta t=t_2-t_1$$\nKhông được cộng mốc thời gian vào thời lượng.',
  '**6. Phương trình chuyển động**\nPhương trình $x=x(t)$ cho vị trí ở mỗi thời điểm trong hệ đã chọn. Thay $t$ để tìm vị trí; giải $x(t)=x_*$ để tìm thời điểm vật tới vị trí $x_*$.',
  '**7. Hai vật gặp nhau**\nTrong cùng hệ quy chiếu, hai vật gặp nhau khi chúng có cùng tọa độ tại cùng thời điểm:\n$$x_1(t)=x_2(t)$$\nCùng tọa độ ở hai thời điểm khác nhau không phải gặp nhau.',
  '**8. Quy trình giải**\n- Chọn vật khảo sát và vật mốc.\n- Vẽ trục, ghi $O$ và chiều dương.\n- Chọn mốc $t=0$.\n- Gán dấu tọa độ/thời điểm.\n- Kiểm tra kết quả có đúng hệ quy chiếu đề hỏi.',
  '**9. Lỗi cần tránh**\n- Nói chuyển động mà không nêu so với vật nào.\n- Đồng nhất tọa độ âm với quãng đường âm.\n- Nhầm $t$ với $\\Delta t$.\n- So vị trí của hai vật trong hai hệ tọa độ khác nhau.\n- Cho cùng tọa độ nhưng khác thời điểm là gặp nhau.'
];

export const phy10Qt9Theory: string[] = [
  '**1. Quãng đường**\nQuãng đường $s$ là tổng độ dài quỹ đạo vật đã đi, là đại lượng vô hướng và $s\\ge0$. Với nhiều chặng, cộng độ dài từng chặng bất kể chiều.',
  '**2. Độ dịch chuyển**\nĐộ dịch chuyển là vector từ vị trí đầu đến vị trí cuối. Trong chuyển động thẳng có trục $Ox$:\n$$\\Delta x=x_2-x_1$$\nDấu của $\\Delta x$ cho biết chiều so với trục.',
  '**3. Độ lớn độ dịch chuyển**\nTrong một chiều, độ lớn là $|\\Delta x|$. Luôn có:\n$$|\\Delta x|\\le s$$\nDấu bằng xảy ra khi vật đi thẳng một chiều, không quay lại.',
  '**4. Một chặng không đổi chiều**\nNếu vật đi từ $x_1$ đến $x_2$ không đổi chiều:\n$$s=|x_2-x_1|,\\qquad \\Delta x=x_2-x_1$$\nHai đại lượng có thể cùng độ lớn nhưng khác bản chất.',
  '**5. Nhiều chặng và quay lại**\nĐánh dấu các điểm đổi chiều $x_0,x_1,...,x_n$:\n$$s=\\sum_{i=1}^{n}|x_i-x_{i-1}|,\\qquad \\Delta x=x_n-x_0$$\nĐộ dịch chuyển chỉ cần đầu–cuối; quãng đường cần toàn lộ trình.',
  '**6. Về lại vị trí đầu**\nNếu $x_{cuối}=x_{đầu}$ thì $\\Delta x=0$ nhưng quãng đường có thể rất lớn. Đây không có nghĩa vật không chuyển động.',
  '**7. Hai chiều**\nTrong mặt phẳng, $\\vec d=\\vec r_2-\\vec r_1$ và độ lớn là đường thẳng nối đầu–cuối. Quãng đường vẫn là độ dài quỹ đạo thực.',
  '**8. Quy trình giải**\n- Vẽ trục/quỹ đạo và ghi các vị trí.\n- Cộng trị tuyệt đối từng chặng để tìm $s$.\n- Lấy cuối trừ đầu để tìm độ dịch chuyển.\n- Kiểm tra $|\\Delta x|\\le s$.',
  '**9. Lỗi cần tránh**\n- Dùng $x_2-x_1$ làm quãng đường khi vật quay lại.\n- Cho quãng đường có dấu.\n- Cộng độ dịch chuyển từng chặng bằng độ lớn mà bỏ dấu.\n- Cho độ dịch chuyển bằng 0 nghĩa là đứng yên.'
];

export const phy10Qt10Theory: string[] = [
  '**1. Tốc độ và vận tốc**\nTốc độ mô tả mức nhanh chậm và không âm. Vận tốc là vector, mô tả cả mức nhanh chậm và hướng; trong một chiều dấu biểu thị chiều.',
  '**2. Tốc độ trung bình**\n$$v_{tb}^{(tốc\\ độ)}=\\frac{s_{tổng}}{\\Delta t_{tổng}}$$\nTổng thời gian thường gồm cả thời gian nghỉ nếu đề xét toàn hành trình.',
  '**3. Vận tốc trung bình**\nTrong chuyển động thẳng:\n$$\\bar v=\\frac{\\Delta x}{\\Delta t}=\\frac{x_2-x_1}{t_2-t_1}$$\nNếu trở về vị trí đầu, vận tốc trung bình bằng 0 dù tốc độ trung bình khác 0.',
  '**4. Tức thời**\nTốc độ tức thời là độ lớn vận tốc tại một thời điểm, gần với số chỉ tốc kế. Trên đồ thị $x-t$, vận tốc tức thời là độ dốc tiếp tuyến.',
  '**5. Trung bình nhiều chặng**\nKhông lấy trung bình cộng các tốc độ trừ trường hợp trọng số phù hợp. Dùng:\n$$v_{tb}=\\frac{\\sum s_i}{\\sum t_i}$$\nNếu biết $s_i,v_i$, tính $t_i=s_i/v_i$ trước.',
  '**6. Hai chặng cùng thời gian**\nNếu hai tốc độ $v_1,v_2$ được duy trì trong thời gian bằng nhau, tốc độ trung bình là $(v_1+v_2)/2$. Điều này không đúng khi hai quãng đường bằng nhau.',
  '**7. Hai chặng cùng quãng đường**\nVới hai quãng đường bằng nhau:\n$$v_{tb}=\\frac{2v_1v_2}{v_1+v_2}$$\nĐây là trung bình điều hòa và nhỏ hơn trung bình cộng nếu $v_1\\ne v_2$.',
  '**8. Đổi đơn vị**\n$$1\\,m/s=3{,}6\\,km/h$$\nĐơn vị phải thống nhất trước khi cộng thời gian/quãng đường.',
  '**9. Quy trình giải**\n- Xác định đề hỏi tốc độ hay vận tốc.\n- Tính $s_{tổng}$ hoặc $\\Delta x$.\n- Tính tổng thời gian kể cả nghỉ nếu phù hợp.\n- Chia đúng đại lượng, ghi đơn vị và diễn giải dấu.',
  '**10. Lỗi cần tránh**\n- Lấy trung bình cộng máy móc.\n- Dùng quãng đường cho vận tốc trung bình.\n- Bỏ thời gian nghỉ.\n- Cho tốc độ âm.\n- Trộn $km/h$ với $m/s$.'
];

export const phy10Qt11Theory: string[] = [
  '**1. Vận tốc tương đối**\nKí hiệu $\\vec v_{A/B}$ là vận tốc của A đối với B. Quy tắc cộng:\n$$\\vec v_{A/C}=\\vec v_{A/B}+\\vec v_{B/C}$$\nBa chỉ số phải nối đúng: A/B, B/C tạo A/C.',
  '**2. Đổi hệ quy chiếu**\nTừ công thức trên:\n$$\\vec v_{A/B}=\\vec v_{A/C}-\\vec v_{B/C}$$\nVận tốc của A nhìn từ B là hiệu vector hai vận tốc cùng đo trong hệ C.',
  '**3. Chuyển động một chiều**\nChọn một chiều dương và dùng vận tốc có dấu. Cùng chiều, tốc độ tương đối thường là $|v_1-v_2|$; ngược chiều là $|v_1|+|v_2|$. Đây là kết quả của phép cộng vector, không phải quy tắc thuộc lòng tách rời.',
  '**4. Gặp nhau và đuổi kịp**\nNếu khoảng cách ban đầu theo phương chuyển động là $d$ và tốc độ khép khoảng cách là $v_{rel}>0$:\n$$t=\\frac{d}{v_{rel}}$$\nPhải kiểm tra vật sau có thật sự nhanh hơn trong bài đuổi.',
  '**5. Thuyền – nước – bờ**\n$$\\vec v_{thuyền/bờ}=\\vec v_{thuyền/nước}+\\vec v_{nước/bờ}$$\nĐề hỏi hướng hoặc thời gian so với bờ thì phải dùng vận tốc đối với bờ.',
  '**6. Qua sông vuông góc bờ**\nNếu mũi thuyền hướng vuông góc bờ, thành phần qua sông là $v_{thuyền/nước}$ theo phương ngang sông:\n$$t=\\frac{L}{v_{qua}},\\qquad \\Delta x_{trôi}=v_{dòng}t$$\nQuỹ đạo đối với bờ bị xiên.',
  '**7. Cập bến đối diện**\nMuốn không trôi, thành phần vận tốc thuyền ngược dòng phải triệt tiêu vận tốc dòng. Khi đó thành phần qua sông nhỏ hơn độ lớn vận tốc thuyền đối với nước.',
  '**8. Cộng hai vector vuông góc**\nNếu các thành phần vuông góc:\n$$v=\\sqrt{v_x^2+v_y^2},\\qquad \\tan\\theta=\\frac{|v_y|}{|v_x|}$$\nGóc phải được nói rõ so với trục nào.',
  '**9. Lỗi cần tránh**\n- Cộng độ lớn không xét hướng.\n- Viết sai thứ tự chỉ số.\n- Trả vận tốc đối với nước khi đề hỏi đối với bờ.\n- Cho thời gian qua sông luôn phụ thuộc dòng chảy.\n- Quên kiểm tra điều kiện có thể cập đúng điểm đối diện.'
];

export const phy10Qt12Theory: string[] = [
  '**1. Ý nghĩa đồ thị $x-t$**\nTrục ngang là thời gian, trục dọc là tọa độ/độ dịch chuyển. Một điểm $(t,x)$ cho vị trí tại thời điểm đó; tung độ không phải vận tốc.',
  '**2. Hệ số góc**\nTrên một đoạn thẳng:\n$$v=\\frac{\\Delta x}{\\Delta t}$$\nĐộ dốc lớn về độ lớn nghĩa là tốc độ lớn hơn. Không dùng $x/t$ nếu đường không đi qua gốc.',
  '**3. Dấu của vận tốc**\nĐồ thị dốc lên: $v>0$; dốc xuống: $v<0$; nằm ngang: $v=0$ và vật đứng yên. Dốc xuống không tự có nghĩa chậm dần.',
  '**4. Chuyển động thẳng đều**\nPhương trình:\n$$x=x_0+vt$$\nĐồ thị là đường thẳng, tung độ gốc $x_0$, hệ số góc $v$. Hai đường song song biểu thị cùng vận tốc nhưng không nhất thiết cùng vị trí.',
  '**5. Gặp nhau và vượt nhau**\nGiao điểm hai đồ thị cho cùng vị trí tại cùng thời điểm. Nếu chỉ đường kéo dài giao nhau ngoài miền thời gian khảo sát, không được kết luận đã gặp trong khoảng đề.',
  '**6. Đổi chiều**\nVật đổi chiều khi dấu vận tốc đổi, thể hiện độ dốc đổi từ dương sang âm hoặc ngược lại. Đi qua $x=0$ chỉ là qua gốc, không nhất thiết đổi chiều.',
  '**7. Đồ thị cong**\nĐộ dốc tiếp tuyến thay đổi theo thời gian nên vận tốc thay đổi. Đường cong dốc hơn không phải vì “tọa độ cao hơn” mà vì độ dốc lớn hơn.',
  '**8. Dựng đồ thị từ bảng/phương trình**\nChọn các thời điểm đặc trưng, tính $x$, chấm đúng đơn vị rồi nối theo mô hình. Với chuyển động nhiều giai đoạn, đảm bảo tọa độ cuối đoạn trước là đầu đoạn sau.',
  '**9. Quy trình đọc**\n- Đọc trục và đơn vị.\n- Xác định vị trí từ tung độ.\n- Tính độ dốc bằng hai điểm trên cùng đoạn.\n- Tìm giao điểm/đoạn ngang/điểm đổi độ dốc.\n- Chỉ kết luận trong miền đồ thị.',
  '**10. Lỗi cần tránh**\n- Coi tung độ là vận tốc.\n- Dùng $x/t$ thay hệ số góc.\n- Cho dốc âm là chậm dần.\n- Cho qua gốc là đổi chiều.\n- Nhầm giao nhau của đường kéo dài với gặp nhau thực tế.'
];

export const phy10Qt13Theory: string[] = [
  '**1. Gia tốc**\nGia tốc mô tả tốc độ thay đổi của vector vận tốc. Nó có thể xuất hiện khi độ lớn vận tốc thay đổi, hướng thay đổi hoặc cả hai.',
  '**2. Gia tốc trung bình**\nTrong chuyển động thẳng:\n$$a_{tb}=\\frac{\\Delta v}{\\Delta t}=\\frac{v_2-v_1}{t_2-t_1}$$\nĐơn vị SI là $m/s^2$, nghĩa là vận tốc thay đổi bao nhiêu $m/s$ mỗi giây.',
  '**3. Gia tốc tức thời**\nLà giới hạn của $\\Delta v/\\Delta t$ khi khoảng thời gian rất nhỏ; trên đồ thị $v-t$, nó là độ dốc tiếp tuyến.',
  '**4. Dấu của gia tốc**\nDấu phụ thuộc chiều dương, không tự biểu thị nhanh/chậm. $a>0$ chỉ nghĩa vector gia tốc hướng theo chiều dương.',
  '**5. Nhanh dần và chậm dần**\n- $v$ và $a$ cùng dấu: độ lớn vận tốc tăng, vật nhanh dần.\n- $v$ và $a$ trái dấu: độ lớn vận tốc giảm, vật chậm dần.\nPhải xét vận tốc tại khoảng đang hỏi.',
  '**6. Khi $v=0$**\nMột thời điểm có $v=0$ không nhất thiết có $a=0$. Ở đỉnh quỹ đạo ném thẳng đứng, $v=0$ tức thời nhưng $a=-g$ nếu chiều lên dương.',
  '**7. Từ bảng dữ liệu**\nChọn đúng hai thời điểm, gán dấu vận tốc và tính $\\Delta v$. Nếu gia tốc các khoảng khác nhau, chuyển động không biến đổi đều trên toàn miền.',
  '**8. Từ đồ thị $v-t$**\nĐộ dốc dương/âm cho dấu $a$; đoạn ngang có $a=0$ dù vật có thể đang chuyển động với $v\\ne0$.',
  '**9. Lỗi cần tránh**\n- Dùng chênh lệch tốc độ không dấu thay chênh lệch vận tốc.\n- Cho $a<0$ luôn chậm dần.\n- Cho $v=0$ thì $a=0$.\n- Nhầm đơn vị $m/s$ với $m/s^2$.\n- Kết luận gia tốc không đổi từ chỉ một khoảng đo.'
];

export const phy10Qt14Theory: string[] = [
  '**1. Điều kiện áp dụng**\nChuyển động thẳng biến đổi đều có gia tốc không đổi trên một đường thẳng. Các hệ thức dưới đây không dùng cho chuyển động có gia tốc thay đổi tùy ý.',
  '**2. Quy ước dấu**\nChọn gốc, chiều dương và mốc thời gian trước. $v_0$, $v$, $a$, $\\Delta x$ đều là đại lượng đại số; không gán $a<0$ chỉ vì câu chữ “chậm dần”.',
  '**3. Vận tốc theo thời gian**\n$$v=v_0+at$$\nDùng khi biết hoặc cần thời gian. Đồ thị $v-t$ là đường thẳng có tung độ gốc $v_0$ và hệ số góc $a$.',
  '**4. Độ dịch chuyển**\n$$\\Delta x=v_0t+\\frac12at^2$$\nPhương trình tọa độ:\n$$x=x_0+v_0t+\\frac12at^2$$\nĐộ dịch chuyển có thể âm; quãng đường không luôn bằng $|\\Delta x|$ nếu vật đổi chiều.',
  '**5. Hệ thức không chứa thời gian**\n$$v^2-v_0^2=2a\\Delta x$$\nHữu ích khi không có $t$. Bình phương làm mất thông tin dấu của $v$, nên phải xác định chiều từ bối cảnh.',
  '**6. Vận tốc trung bình khi gia tốc không đổi**\n$$\\bar v=\\frac{v_0+v}{2},\\qquad \\Delta x=\\bar v t$$\nChỉ dùng trung bình này khi gia tốc không đổi.',
  '**7. Dừng lại và đổi chiều**\nGiải $v=0$ để tìm thời điểm dừng tức thời. Sau đó kiểm tra dấu $v$ có đổi hay không. Nếu đổi, muốn tính quãng đường phải tách hành trình tại thời điểm này.',
  '**8. Nhiều giai đoạn**\nCuối giai đoạn trước là đầu giai đoạn sau: nối $x$, $v$, thời gian liên tục trừ khi có va chạm/tác động tức thời. Mỗi giai đoạn có thể có gia tốc khác nhau.',
  '**9. Hai vật**\nViết riêng $x_1(t)$, $x_2(t)$ trong cùng hệ. Gặp nhau khi $x_1=x_2$; chọn nghiệm thời gian thuộc miền hoạt động của cả hai vật.',
  '**10. Quy trình chọn công thức**\n- Liệt kê $v_0,v,a,t,\\Delta x$ có dấu.\n- Chọn công thức chứa ẩn và các dữ kiện đã biết.\n- Giải đại số, lọc nghiệm theo thời gian/miền chuyển động.\n- Kiểm tra đơn vị và xu hướng nhanh/chậm.',
  '**11. Lỗi cần tránh**\n- Dùng công thức gia tốc không đổi cho mọi chuyển động.\n- Gán sai dấu $a$.\n- Dùng $s=\\Delta x$ khi đổi chiều.\n- Chọn cả nghiệm thời gian âm.\n- Dùng $v=(v_0+v)/2$ như một phương trình không rõ đại lượng.'
];

export const phy10Qt15Theory: string[] = [
  '**1. Ý nghĩa đồ thị $v-t$**\nTrục ngang là thời gian, trục dọc là vận tốc có dấu. Tung độ tại thời điểm $t$ cho vận tốc; phần dưới trục biểu thị chuyển động theo chiều âm.',
  '**2. Gia tốc từ độ dốc**\nTrên đoạn thẳng:\n$$a=\\frac{\\Delta v}{\\Delta t}$$\nĐường ngang có $a=0$; độ dốc âm là $a<0$, chưa đủ kết luận chậm dần nếu chưa xét dấu $v$.',
  '**3. Độ dịch chuyển từ diện tích**\n$$\\Delta x=\\int v\\,dt$$\nỞ mức đồ thị đoạn thẳng, tính diện tích đại số giữa đường và trục thời gian: phía trên dương, phía dưới âm.',
  '**4. Quãng đường từ diện tích**\n$$s=\\int |v|\\,dt$$\nCộng trị tuyệt đối diện tích từng phần. Khi đồ thị cắt trục, phải chia hình tại thời điểm $v=0$.',
  '**5. Các hình cơ bản**\nHình chữ nhật: $S=ab$; tam giác: $S=ab/2$; hình thang: $S=(a+b)h/2$. Luôn gắn đơn vị: $(m/s)\\cdot s=m$.',
  '**6. Đổi chiều và dừng**\n$v=0$ là dừng tức thời. Vật chỉ đổi chiều nếu đồ thị đi qua trục và vận tốc đổi dấu; chạm trục rồi quay lại cùng phía không đổi chiều.',
  '**7. Dựng đồ thị**\nVới $v=v_0+at$, vẽ điểm $(0,v_0)$ và dùng độ dốc $a$. Với nhiều giai đoạn, bảo đảm vận tốc cuối–đầu phù hợp hoặc biểu diễn bước nhảy nếu mô hình có tác động tức thời.',
  '**8. Liên hệ đồ thị $x-t$**\nTung độ $v-t$ là độ dốc của $x-t$. Diện tích $v-t$ cho thay đổi tọa độ, không cho trực tiếp tọa độ nếu chưa biết $x_0$.',
  '**9. Quy trình giải**\n- Chia miền theo các đoạn và điểm cắt trục.\n- Tính độ dốc nếu hỏi $a$.\n- Tính diện tích có dấu nếu hỏi $\\Delta x$.\n- Tính tổng trị tuyệt đối nếu hỏi $s$.\n- Cộng $x_0$ nếu hỏi vị trí cuối.',
  '**10. Lỗi cần tránh**\n- Lấy tung độ làm gia tốc.\n- Cộng mọi diện tích dương khi hỏi độ dịch chuyển.\n- Dùng diện tích đại số khi hỏi quãng đường.\n- Quên đơn vị.\n- Cho $v=0$ luôn là đổi chiều.'
];

export const phy10Qt16Theory: string[] = [
  '**1. Mô hình rơi tự do**\nGần mặt đất và bỏ qua sức cản không khí, vật chỉ chịu trọng lực và có gia tốc $\\vec g$ thẳng đứng xuống. Mọi vật có cùng $g$ tại một nơi, không phụ thuộc khối lượng.',
  '**2. Giá trị và đơn vị $g$**\nThường dùng $g\\approx9{,}8\\,m/s^2$ hoặc $10\\,m/s^2$ theo đề. Phải dùng nhất quán, không tự đổi giữa hai giá trị.',
  '**3. Thả rơi từ nghỉ**\nChọn chiều xuống dương, $v_0=0$:\n$$v=gt,\\qquad s=\\frac12gt^2,\\qquad v^2=2gs$$',
  '**4. Thời gian và vận tốc chạm đất**\nTừ độ cao $h$:\n$$t=\\sqrt{\\frac{2h}{g}},\\qquad v=\\sqrt{2gh}$$\nCông thức dùng khi thả từ nghỉ và điểm chạm thấp hơn $h$ theo chiều rơi.',
  '**5. Quãng đường trong giây thứ $n$**\nVới vật thả từ nghỉ và mỗi khoảng đúng một giây:\n$$s_n=\\frac{g}{2}(2n-1)$$\nCó thể suy bằng $s_n=s(n)-s(n-1)$. Không dùng nếu $v_0\\ne0$ mà chưa điều chỉnh.',
  '**6. Ném thẳng đứng lên**\nChọn chiều lên dương thì $a=-g$:\n$$v=v_0-gt,\qquad y=y_0+v_0t-\\frac12gt^2$$\nỞ đỉnh, $v=0$ nhưng $a=-g$.',
  '**7. Độ cao cực đại và thời gian đi lên**\nSo với điểm ném:\n$$t_{lên}=\\frac{v_0}{g},\\qquad H=\\frac{v_0^2}{2g}$$\nNếu trở về đúng độ cao ném và bỏ cản, thời gian xuống bằng thời gian lên và độ lớn vận tốc trở về bằng $v_0$.',
  '**8. Hai vật thả/né́m lệch thời điểm**\nDùng một mốc thời gian chung. Vật bắt đầu muộn có thời gian chuyển động $t-\\tau$, chỉ có nghĩa khi $t\\ge\\tau$. Viết phương trình vị trí riêng rồi giải điều kiện gặp.',
  '**9. Lực cản không khí**\nTrong thực tế lực cản phụ thuộc hình dạng và tốc độ, làm gia tốc không còn luôn bằng $g$. Kết luận “vật nặng và nhẹ rơi như nhau” thuộc mô hình bỏ qua cản.',
  '**10. Lỗi cần tránh**\n- Dùng $h=gt^2$.\n- Cho vật nặng có $g$ lớn hơn.\n- Gán sai dấu khi ném lên.\n- Cho ở đỉnh $a=0$.\n- Dùng công thức giây thứ $n$ sai điều kiện.\n- Trộn mốc thời gian của hai vật.'
];

export const phy10Qt17Theory: string[] = [
  '**1. Mô hình ném ngang**\nVật rời điểm ở độ cao $h$ với vận tốc ban đầu nằm ngang, bỏ qua sức cản và coi $g$ không đổi. Chuyển động được phân tích thành hai thành phần độc lập dùng cùng thời gian.',
  '**2. Chọn trục thuận tiện**\nChọn $Ox$ ngang theo hướng ném, $Oy$ thẳng đứng hướng xuống từ điểm ném. Khi đó $v_{0x}=v_0$, $v_{0y}=0$, $a_x=0$, $a_y=g$.',
  '**3. Phương trình thành phần**\n$$x=v_0t,\\qquad y=\\frac12gt^2$$\nPhương ngang là thẳng đều; phương đứng là rơi tự do.',
  '**4. Thời gian rơi**\nKhi chạm đất $y=h$:\n$$t=\\sqrt{\\frac{2h}{g}}$$\nTrong mô hình, thời gian chỉ phụ thuộc độ cao và $g$, không phụ thuộc $v_0$.',
  '**5. Tầm xa**\n$$L=v_0\\sqrt{\\frac{2h}{g}}$$\nTầm xa là độ dịch chuyển ngang, không phải độ dài quỹ đạo parabol.',
  '**6. Vận tốc tại thời điểm $t$**\n$$v_x=v_0,\\qquad v_y=gt$$\n$$v=\\sqrt{v_0^2+(gt)^2},\\qquad \\tan\\alpha=\\frac{v_y}{v_x}$$\nGóc $\\alpha$ ở đây đo từ phương ngang theo hướng xuống.',
  '**7. Phương trình quỹ đạo**\nKhử $t=x/v_0$:\n$$y=\\frac{g}{2v_0^2}x^2$$\nQuỹ đạo là một nhánh parabol trong hệ trục đã chọn.',
  '**8. Bài toán ngược**\nTừ vị trí $(x,y)$ có thể tìm $t=x/v_0$ hoặc $t=\\sqrt{2y/g}$. Hai biểu thức phải cho cùng thời gian; dùng để suy $v_0$, $h$ hoặc kiểm tra dữ liệu.',
  '**9. So sánh nhiều vật**\nCùng độ cao và cùng $v_{0y}=0$, các vật chạm đất cùng lúc dù $v_{0x}$ khác nhau. Vật có $v_0$ lớn hơn đi xa ngang hơn nhưng không “rơi chậm hơn”.',
  '**10. Lỗi cần tránh**\n- Cho vận tốc ngang ảnh hưởng thời gian rơi.\n- Cộng $v_x+v_y$ để tìm độ lớn.\n- Dùng tầm xa làm quãng đường.\n- Dùng hai thời gian khác nhau cho hai thành phần.\n- Áp dụng công thức khi vận tốc đầu không nằm ngang mà chưa phân tích lại.'
];

export const phy10Qt18Theory: string[] = [
  '**1. Mục tiêu phép đo động học**\nPhải xác định rõ cần đo tốc độ trung bình, tốc độ gần tức thời hay gia tốc. Mỗi mục tiêu cần khoảng đo, cảm biến và công thức xử lí khác nhau.',
  '**2. Đo tốc độ trung bình**\nVới vật đi quãng đường $s$ trong thời gian $\\Delta t$:\n$$v_{tb}=\\frac{s}{\\Delta t}$$\nMốc đầu–cuối phải rõ, quãng đường và thời gian phải ứng với cùng đoạn.',
  '**3. Cổng quang**\nNếu bản chắn dài $L$ che tia trong thời gian $\\Delta t$, tốc độ gần tại cổng:\n$$v\\approx\\frac{L}{\\Delta t}$$\nBản chắn càng ngắn cho tính tức thời tốt hơn nhưng sai số tương đối có thể tăng nếu thời gian quá ngắn.',
  '**4. Phân tích video**\nCần thước chuẩn cùng mặt phẳng chuyển động và biết tốc độ khung hình. Nếu video có $f$ khung/s, hai khung cách nhau $k$ bước thì $\\Delta t=k/f$. Tránh camera xiên và méo phối cảnh.',
  '**5. Đo gia tốc từ vận tốc**\nĐo $v$ tại nhiều thời điểm và vẽ $v-t$. Nếu đồ thị gần đường thẳng, hệ số góc cho $a$. Dùng nhiều điểm và đường xu hướng đáng tin hơn chỉ hai điểm xa nhau.',
  '**6. Đo gia tốc rơi tự do**\nVới thả từ nghỉ:\n$$h=\\frac12gt^2\\Rightarrow g=\\frac{2h}{t^2}$$\nĐo nhiều cặp $(h,t)$ và vẽ $h$ theo $t^2$; hệ số góc $k=g/2$, do đó $g=2k$.',
  '**7. Biến và điều kiện kiểm soát**\nGiữ cách thả, vật, mốc độ cao, hướng chuyển động và thiết bị giống nhau. Nếu khảo sát quan hệ với $h$, biến độc lập là $h$, biến phụ thuộc có thể là $t^2$.',
  '**8. Sai số chính**\nPhản xạ bấm giờ, xác định sai mốc, thị sai, độ trễ cảm biến, tốc độ khung hình và sức cản không khí. Cải tiến phải nhắm đúng nguồn: cổng quang thay bấm tay, đo nhiều lần, tăng thời gian đo phù hợp, hiệu chuẩn thước.',
  '**9. Xử lí dữ liệu**\nĐổi đơn vị trước, giữ dữ liệu gốc, tính trung bình và sai số. Không sửa $g$ về $9{,}8$; nếu lệch, kiểm tra điểm ngoại lai, điểm 0, mô hình và độ không chắc chắn.',
  '**10. Độ chụm và độ đúng**\nCác lần đo gần nhau cho độ chụm; trung bình gần giá trị tham chiếu gợi ý độ đúng. Cần báo cả hai, vì dữ liệu có thể chụm nhưng lệch hệ thống.',
  '**11. Quy trình thiết kế**\n- Chọn đại lượng đo trực tiếp.\n- Chọn dụng cụ và mốc.\n- Nêu biến kiểm soát.\n- Đo lặp ở nhiều mức nếu cần.\n- Lập bảng/đồ thị và tính đại lượng.\n- Phân tích sai số, giới hạn và an toàn.',
  '**12. Lỗi cần tránh**\n- Chỉ đo một lần.\n- Trộn quãng đường với độ dịch chuyển không phù hợp.\n- Sai số khung hình $k/f$ do đếm sai khoảng.\n- Vẽ $h$ theo $t$ rồi coi hệ số góc là $g/2$.\n- Xóa/sửa dữ liệu để khớp giá trị chuẩn.'
];
