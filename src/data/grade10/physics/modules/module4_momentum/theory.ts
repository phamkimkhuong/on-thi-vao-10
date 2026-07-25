export const phy10Qt39Theory: string[] = [
  '**1. Động lượng**\n$$\\vec p=m\\vec v$$\nLà vector cùng hướng vận tốc, đơn vị $kg\\cdot m/s=N\\cdot s$. Trong một chiều, dấu của $p$ theo dấu $v$.',
  '**2. Độ lớn và so sánh**\n$p=mv$. Động lượng tăng tuyến tính theo $m$ và $v$, khác động năng tăng theo $v^2$. Vật đứng yên có $p=0$.',
  '**3. Đổi hệ quy chiếu**\nĐộng lượng phụ thuộc vận tốc nên phụ thuộc hệ quy chiếu. Chỉ cộng/so sánh các động lượng được xác định trong cùng hệ.',
  '**4. Bài toán ngược**\n$$m=\\frac{p}{v},\\qquad v=\\frac{p}{m}$$\nKhi tìm vận tốc một chiều phải giữ dấu; khi chỉ hỏi tốc độ lấy độ lớn.',
  '**5. Lỗi cần tránh**\n- Cho động lượng là vô hướng.\n- Bỏ dấu vận tốc.\n- Nhầm đơn vị J.\n- Cho động lượng tỉ lệ $v^2$.\n- Trộn hệ quy chiếu.'
];

export const phy10Qt40Theory: string[] = [
  '**1. Động lượng hệ**\n$$\\vec p_h=\\sum_i\\vec p_i=\\sum_i m_i\\vec v_i$$\nĐây là tổng vector, không phải tổng mọi độ lớn.',
  '**2. Một chiều**\nChọn chiều dương rồi cộng đại số: vật ngược chiều có $v<0$. Hệ có thể có $p_h=0$ dù từng vật vẫn chuyển động.',
  '**3. Hai chiều**\n$$p_x=\\sum m_iv_{ix},\\quad p_y=\\sum m_iv_{iy},\\quad p_h=\\sqrt{p_x^2+p_y^2}$$\nHướng tìm từ các thành phần và đúng góc phần tư.',
  '**4. Vận tốc khối tâm ở mức vận dụng**\n$$\\vec v_{cm}=\\frac{\\vec p_h}{M},\\qquad M=\\sum m_i$$\nĐộng lượng hệ bằng tổng khối lượng nhân vận tốc khối tâm.',
  '**5. Quy trình**\nChọn hệ–trục, gán dấu/thành phần từng vận tốc, tính từng $\\vec p_i$, cộng vector rồi kiểm tra hướng.',
  '**6. Lỗi cần tránh**\n- Cộng độ lớn với vật ngược chiều.\n- Cho $p_h=0$ nghĩa mọi vật đứng yên.\n- Cộng hai phương vuông góc đại số.\n- Dùng khối lượng gram.'
];

export const phy10Qt41Theory: string[] = [
  '**1. Xung lượng**\nVới lực không đổi trong $\\Delta t$:\n$$\\vec I=\\vec F\\Delta t$$\nXung lượng cùng hướng lực và có đơn vị $N\\cdot s$.',
  '**2. Định lí xung lượng–động lượng**\n$$\\vec I_{hl}=\\Delta\\vec p=m\\vec v_2-m\\vec v_1$$\nPhải dùng xung lượng của hợp lực, giữ dấu/vector.',
  '**3. Lực trung bình**\n$$\\vec F_{tb}=\\frac{\\Delta\\vec p}{\\Delta t}$$\nVới cùng $\\Delta p$, kéo dài thời gian va chạm làm giảm độ lớn lực trung bình—cơ sở túi khí, đệm, gập gối.',
  '**4. Đồ thị $F-t$**\nXung lượng bằng diện tích đại số dưới đồ thị. Phần lực âm tạo xung lượng âm; với đồ thị biến thiên phải chia thành hình cơ bản.',
  '**5. Đổi chiều**\nNếu vật bật ngược, $v_1$ và $v_2$ trái dấu nên $|\\Delta p|$ thường lớn hơn trường hợp chỉ dừng.',
  '**6. Lỗi cần tránh**\n- Dùng $F\\Delta t$ với lực biến thiên tùy ý.\n- Lấy $mv_2-mv_1$ bằng hiệu tốc độ không dấu.\n- Nhầm xung lượng với lực.\n- Cộng diện tích âm thành dương.'
];

export const phy10Qt42Theory: string[] = [
  '**1. Hệ kín theo động lượng**\nĐộng lượng bảo toàn nếu tổng xung lượng ngoại lực bằng 0:\n$$\\Delta\\vec p_h=\\vec I_{ngoài}=0\\Rightarrow \\vec p_{trước}=\\vec p_{sau}$$',
  '**2. Bảo toàn gần đúng**\nTrong va chạm rất ngắn, ngoại lực có thể tồn tại nhưng xung lượng của chúng nhỏ so với xung lượng nội lực; khi đó bảo toàn động lượng là xấp xỉ.',
  '**3. Nội lực**\nNội lực xuất hiện theo cặp III Newton, xung lượng nội lực triệt tiêu trong tổng của toàn hệ. Chúng vẫn làm động lượng từng vật thay đổi.',
  '**4. Chọn hệ**\nChọn hệ bao gồm các vật tương tác để lực va chạm/nổ trở thành nội lực. Liệt kê ngoại lực và so thời gian tác dụng trước khi áp dụng.',
  '**5. Khi không kín**\n$$\\vec p_{sau}-\\vec p_{trước}=\\vec I_{ngoài}$$\nKhông được ép hai tổng bằng nhau nếu xung lượng ngoại lực đáng kể.',
  '**6. Lỗi cần tránh**\n- Cho “không có ngoại lực” mới được bảo toàn gần đúng.\n- Bảo toàn động lượng từng vật.\n- Bỏ dấu/vector.\n- Chọn thiếu một vật trong hệ.\n- Nhầm bảo toàn động lượng với bảo toàn động năng.'
];

export const phy10Qt43Theory: string[] = [
  '**1. Phương trình va chạm một chiều**\nVới hệ kín:\n$$m_1v_1+m_2v_2=m_1v_1\\prime+m_2v_2\\prime$$\nMọi vận tốc dùng cùng chiều dương.',
  '**2. Va chạm mềm**\nHai vật dính nhau, cùng vận tốc $v$:\n$$v=\\frac{m_1v_1+m_2v_2}{m_1+m_2}$$\n$v$ phải nằm phù hợp tổng động lượng ban đầu.',
  '**3. Va chạm không dính**\nBảo toàn động lượng chỉ cho một phương trình; muốn tìm hai vận tốc sau cần thêm dữ kiện như vận tốc một vật, tính đàn hồi hoặc quan hệ khác.',
  '**4. Bài toán nhiều giai đoạn**\nKết quả va chạm trước là điều kiện đầu giai đoạn sau. Áp dụng bảo toàn riêng cho từng khoảng tương tác ngắn, không trộn trạng thái.',
  '**5. Kiểm tra nghiệm**\nXem dấu vận tốc có phù hợp bật lại/tiếp tục; kiểm tra động năng không tăng nếu không có nguồn năng lượng được nêu.',
  '**6. Lỗi cần tránh**\n- Bỏ dấu vật ngược chiều.\n- Dùng công thức mềm khi vật không dính.\n- Cho cả hai vật luôn đổi chiều.\n- Tự thêm bảo toàn động năng cho mọi va chạm.'
];

export const phy10Qt44Theory: string[] = [
  '**1. Giật lùi và nổ**\nTrong thời gian tách ngắn, nếu xung lượng ngoại lực nhỏ:\n$$\\vec p_{trước}=\\sum\\vec p_{sau}$$\nNăng lượng nội có thể chuyển thành động năng nên động năng không cần bảo toàn.',
  '**2. Hệ ban đầu đứng yên**\n$$\\sum\\vec p_{sau}=0$$\nVới hai phần một chiều: $m_1v_1=-m_2v_2$; phần nhẹ thường có tốc độ lớn hơn.',
  '**3. Hệ ban đầu chuyển động**\nKhông đặt tổng sau bằng 0:\n$$M\\vec V=m_1\\vec v_1+m_2\\vec v_2+\\cdots$$',
  '**4. Tách hai chiều**\nBảo toàn riêng theo $x,y$. Nếu biết các hướng, tách thành phần rồi giải hệ; hình đa giác động lượng phải khép theo động lượng ban đầu.',
  '**5. Giật lùi súng**\nĐạn và súng nhận động lượng ngược chiều; súng nặng hơn nên tốc độ giật nhỏ hơn. Lực ngoài trong thời gian bắn quyết định độ chính xác xấp xỉ.',
  '**6. Lỗi cần tránh**\n- Luôn cho tổng sau bằng 0.\n- Bảo toàn động năng trong nổ.\n- Cộng độ lớn ở hai chiều.\n- Bỏ khối lượng phần còn lại.'
];

export const phy10Qt45Theory: string[] = [
  '**1. Phân loại theo động năng**\nĐộng lượng hệ kín bảo toàn trong mọi va chạm; động năng hệ chỉ bảo toàn ở va chạm đàn hồi. Va chạm không đàn hồi có $K_{sau}<K_{trước}$.',
  '**2. Động năng trước–sau**\n$$K=\\sum_i\\frac12m_iv_i^2$$\nDùng tốc độ bình phương nên mỗi hạng không âm, dù vận tốc có dấu.',
  '**3. Năng lượng chuyển hóa**\n$$E_{chuyển}=K_{trước}-K_{sau}$$\nPhần giảm chuyển thành biến dạng, nhiệt, âm; không bị mất khỏi bảo toàn năng lượng toàn phần.',
  '**4. Va chạm mềm**\nLà va chạm không đàn hồi hoàn toàn và thường làm giảm động năng nhiều nhất với cùng trạng thái đầu trong mô hình một chiều.',
  '**5. Kết hợp hai định luật**\nTrước tiên dùng động lượng để tìm vận tốc; sau đó tính động năng để phân loại/hao hụt. Chỉ thêm $K_{trước}=K_{sau}$ khi đề xác nhận đàn hồi.',
  '**6. Lỗi cần tránh**\n- Gán dấu âm cho động năng.\n- Cho động lượng bảo toàn thì động năng cũng bảo toàn.\n- Gọi phần giảm là năng lượng mất.\n- So động năng mà chưa dùng cùng hệ quy chiếu.'
];

export const phy10Qt46Theory: string[] = [
  '**1. Đại lượng cần đo**\nĐo khối lượng và vận tốc ngay trước–sau va chạm trong cùng hệ quy chiếu. Chọn chiều dương và giữ dấu vận tốc.',
  '**2. Cổng quang/video**\nCổng quang: $v\\approx L/\\Delta t$ với bản chắn dài $L$. Video cần thước chuẩn, tốc độ khung hình và camera vuông góc quỹ đạo.',
  '**3. Kiểm tra động lượng**\n$$p_t=\\sum m_iv_i,\\qquad p_s=\\sum m_iv_i\\prime$$\nSai lệch khi $p_t\\ne0$:\n$$\\varepsilon_p=\\frac{|p_s-p_t|}{|p_t|}\\times100\\%$$',
  '**4. Trường hợp $p_t\\approx0$**\nKhông chia cho số gần 0. Dùng sai lệch tuyệt đối hoặc chuẩn hóa theo tổng độ lớn động lượng đặc trưng và nêu rõ quy ước.',
  '**5. Phân tích năng lượng**\nTính $K_t,K_s$ độc lập với kiểm tra động lượng. Động lượng gần bảo toàn không chứng minh va chạm đàn hồi.',
  '**6. Sai số và cải tiến**\nMa sát ray, ray nghiêng, đo vận tốc không sát va chạm, va chạm lệch tâm và sai khối lượng. Cân ray, giảm ma sát, dùng cảm biến gần điểm va chạm, đo lặp.',
  '**7. Lỗi cần tránh**\n- Bỏ dấu vận tốc.\n- Đo quá xa va chạm.\n- Chia sai lệch cho $p_t=0$.\n- Sửa dữ liệu cho khớp bảo toàn.\n- Kết luận quá mức từ một lần đo.'
];

export const g10PhysicsModule4TheoryByQuestionTypeId: Record<string, string[]> = {
  'phy10-qt39': phy10Qt39Theory,
  'phy10-qt40': phy10Qt40Theory,
  'phy10-qt41': phy10Qt41Theory,
  'phy10-qt42': phy10Qt42Theory,
  'phy10-qt43': phy10Qt43Theory,
  'phy10-qt44': phy10Qt44Theory,
  'phy10-qt45': phy10Qt45Theory,
  'phy10-qt46': phy10Qt46Theory
};
