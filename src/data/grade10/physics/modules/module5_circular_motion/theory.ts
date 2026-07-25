export const phy10Qt47Theory: string[] = [
  '**1. Radian**\nGóc $1rad$ chắn cung có độ dài bằng bán kính. Một vòng:\n$$360^\\circ=2\\pi rad,\\qquad180^\\circ=\\pi rad$$',
  '**2. Đổi đơn vị góc**\n$$\\theta_{rad}=\\theta_{deg}\\frac{\\pi}{180},\\qquad \\theta_{deg}=\\theta_{rad}\\frac{180}{\\pi}$$',
  '**3. Độ dài cung**\n$$s=r\\theta$$\nCông thức dùng trực tiếp khi $\\theta$ tính bằng radian. Suy ra $r=s/\\theta$, $\\theta=s/r$.',
  '**4. Số vòng**\nVới $N$ vòng: $\\theta=2\\pi N$, $s=2\\pi rN$. Có thể dùng $N=\\theta/(2\\pi)$.',
  '**5. Lỗi cần tránh**\n- Thay góc độ vào $s=r\\theta$.\n- Nhầm cung với dây cung.\n- Bỏ đơn vị rad.\n- Cho radian có thứ nguyên độ dài.'
];

export const phy10Qt48Theory: string[] = [
  '**1. Chu kì và tần số**\n$T$ là thời gian một vòng, đơn vị s; $f$ là số vòng mỗi giây, đơn vị Hz:\n$$f=\\frac1T=\\frac Nt$$',
  '**2. Tốc độ góc**\n$$\\omega=\\frac{\\Delta\\theta}{\\Delta t}=2\\pi f=\\frac{2\\pi}{T}$$\nĐơn vị rad/s.',
  '**3. Số vòng/góc theo thời gian**\n$$N=ft=\\frac tT,\\qquad \\theta=\\omega t=2\\pi N$$',
  '**4. Đổi rpm**\n$n$ vòng/phút:\n$$f=\\frac n{60},\\qquad \\omega=\\frac{2\\pi n}{60}$$',
  '**5. Chuyển động tròn đều**\n$\\omega$ không đổi về độ lớn; vector vận tốc vẫn đổi hướng nên vật có gia tốc.',
  '**6. Lỗi cần tránh**\n- Nhầm $T$ với $f$.\n- Dùng rpm như Hz.\n- Quên $2\\pi$.\n- Cho tốc độ không đổi nghĩa gia tốc bằng 0.'
];

export const phy10Qt49Theory: string[] = [
  '**1. Tốc độ dài**\n$$v=\\omega r=2\\pi rf=\\frac{2\\pi r}{T}$$\nVector vận tốc tiếp tuyến quỹ đạo, vuông góc bán kính.',
  '**2. Vật rắn quay**\nCác điểm trên cùng vật rắn quay có cùng $\\omega,T,f$; điểm xa trục hơn có $v$ lớn hơn theo $v=\\omega r$.',
  '**3. Bài toán ngược**\n$$\\omega=\\frac vr,\\qquad r=\\frac v\\omega$$\nĐổi mọi đơn vị trước, đặc biệt rpm và centimet.',
  '**4. Lăn không trượt**\nTại tâm bánh:\n$$v_{tâm}=\\omega R$$\nĐây là ràng buộc lăn không trượt; nếu bánh trượt thì không dùng.',
  '**5. Lỗi cần tránh**\n- Cho mọi điểm có cùng tốc độ dài.\n- Vẽ vận tốc hướng tâm.\n- Dùng $v=\\omega r$ với rpm chưa đổi.\n- Áp dụng lăn không trượt khi đề có trượt.'
];

export const phy10Qt50Theory: string[] = [
  '**1. Gia tốc hướng tâm**\nTrong chuyển động tròn đều, tốc độ không đổi nhưng hướng vận tốc đổi. Gia tốc luôn hướng vào tâm:\n$$a_{ht}=\\frac{v^2}{r}=\\omega^2r$$',
  '**2. Dạng theo chu kì/tần số**\n$$a_{ht}=4\\pi^2rf^2=\\frac{4\\pi^2r}{T^2}$$',
  '**3. Ý nghĩa phụ thuộc**\nCùng $r$, tăng $v$ gấp đôi làm $a_{ht}$ gấp bốn. Cùng $v$, bán kính lớn làm gia tốc nhỏ; cùng $\\omega$, bán kính lớn làm gia tốc lớn.',
  '**4. Hướng vector**\n$\\vec a_{ht}\\perp\\vec v$ tại mỗi điểm. Nó đổi hướng vận tốc chứ không làm thay đổi tốc độ trong chuyển động tròn đều.',
  '**5. Lỗi cần tránh**\n- Hướng gia tốc theo vận tốc.\n- Cho $a=0$ vì tốc độ không đổi.\n- Nhầm phụ thuộc $r$ giữa công thức theo $v$ và theo $\\omega$.\n- Quên bình phương.'
];

export const phy10Qt51Theory: string[] = [
  '**1. Hợp lực hướng tâm**\n“Lực hướng tâm” không phải lực mới; đó là hợp lực của các lực thực theo phương bán kính vào tâm:\n$$\\sum F_{vào}=ma_{ht}=m\\frac{v^2}{r}=m\\omega^2r$$',
  '**2. Chọn chiều bán kính**\nChọn vào tâm dương, chiếu từng lực. Lực hướng ra mang dấu âm; các lực tiếp tuyến không góp vào phương trình bán kính.',
  '**3. Một lực đảm nhiệm**\nMa sát có thể giữ xe vào cua, lực căng giữ vật quay, hấp dẫn giữ vệ tinh, phản lực giữ vật trên quỹ đạo. Luôn gọi tên lực thực.',
  '**4. Nhiều lực**\nKhông đặt từng lực bằng $mv^2/r$ nếu còn lực khác theo bán kính; phải dùng tổng đại số.',
  '**5. Bài toán ngược**\nTừ giới hạn lực có thể tìm $v_{max}=\\sqrt{F_{max}r/m}$ hoặc bán kính an toàn. Kiểm tra lực liên kết không âm.',
  '**6. Lỗi cần tránh**\n- Vẽ thêm một lực hướng tâm ngoài các lực thực.\n- Cho một lực bất kì bằng $mv^2/r$.\n- Bỏ dấu lực hướng ra.\n- Dùng khối lượng gram.'
];

export const phy10Qt52Theory: string[] = [
  '**1. Xe vào cua phẳng**\nMa sát nghỉ cung cấp hướng tâm:\n$$F_{ms}=\\frac{mv^2}{r}\\le\\mu_smg$$\nSuy ra $v_{max}=\\sqrt{\\mu_sgr}$ trong mô hình mặt ngang.',
  '**2. Đường nghiêng không ma sát**\nVới góc nghiêng $\\alpha$:\n$$\\tan\\alpha=\\frac{v^2}{rg}$$\nCó ma sát phải lập lại phương trình lực, không dùng máy móc.',
  '**3. Vòng tròn đứng**\nPhương trình bán kính thay đổi theo vị trí. Ở đỉnh với vật phía trong vòng:\n$$mg+N=\\frac{mv^2}{r}$$\nỞ đáy: $N-mg=mv^2/r$.',
  '**4. Mất tiếp xúc/chùng dây**\nTại giới hạn $N=0$ hoặc $T=0$. Ở đỉnh vòng tròn đứng, điều kiện tối thiểu thường $v^2\\ge gr$ cho vật/dây còn theo quỹ đạo trong mô hình.',
  '**5. Kết hợp năng lượng**\nTốc độ ở các vị trí thường tìm từ bảo toàn cơ năng rồi đưa vào phương trình hướng tâm. Không trộn hai phương trình thành một.',
  '**6. Thiết bị quay tổng hợp**\nXác định tâm/quỹ đạo thật, vẽ lực tại vị trí đang xét, chiếu bán kính và kiểm tra giới hạn liên kết.',
  '**7. Lỗi cần tránh**\n- Dùng cùng phương trình lực ở đỉnh và đáy.\n- Cho $N=mg$.\n- Đặt mất tiếp xúc là $v=0$.\n- Bỏ điều kiện năng lượng để tới vị trí.'
];

export const phy10Qt53Theory: string[] = [
  '**1. Đo chu kì**\nĐo thời gian $t$ của $N$ vòng rồi tính:\n$$T=\\frac tN,\\qquad f=\\frac Nt$$\nĐo nhiều vòng giảm sai số tương đối do phản xạ.',
  '**2. Từ video/cảm biến**\nVideo cần tốc độ khung hình và mốc một vòng nhất quán; cảm biến cần hiệu chuẩn. Đếm **khoảng thời gian**, không nhầm số khung với số khoảng.',
  '**3. Bán kính**\nĐo từ tâm quay đến quỹ đạo của điểm/vật khảo sát, không mặc định là chiều dài toàn dây nếu tâm vật cách đầu dây.',
  '**4. Xử lí đại lượng**\n$$\\omega=\\frac{2\\pi}{T},\\quad v=\\omega r,\\quad a_{ht}=\\omega^2r$$\nĐổi SI trước và giữ chữ số trung gian.',
  '**5. Kiểm chứng quan hệ**\nGiữ các biến khác cố định; ví dụ kiểm tra $a\\propto\\omega^2$ bằng vẽ $a$ theo $\\omega^2$. Dùng nhiều mức và mẫu lặp.',
  '**6. Sai số**\nPhản xạ, đếm vòng, bán kính, tốc độ không đều, quỹ đạo không tròn. Cải tiến bằng cảm biến/video, đo nhiều vòng và đánh dấu mốc.',
  '**7. Lỗi cần tránh**\n- Đo một vòng duy nhất.\n- Sai bán kính.\n- Nhầm rpm với Hz.\n- Thay nhiều biến cùng lúc.\n- Ép dữ liệu khớp mô hình.'
];

export const g10PhysicsModule5TheoryByQuestionTypeId: Record<string, string[]> = {
  'phy10-qt47': phy10Qt47Theory,
  'phy10-qt48': phy10Qt48Theory,
  'phy10-qt49': phy10Qt49Theory,
  'phy10-qt50': phy10Qt50Theory,
  'phy10-qt51': phy10Qt51Theory,
  'phy10-qt52': phy10Qt52Theory,
  'phy10-qt53': phy10Qt53Theory
};
