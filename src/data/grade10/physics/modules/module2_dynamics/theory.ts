export const phy10Qt19Theory: string[] = [
  '**1. Lực là vector**\nLực đặc trưng tương tác làm thay đổi vận tốc hoặc gây biến dạng. Mỗi lực có điểm đặt, phương, chiều, độ lớn; đơn vị SI là newton (N).',
  '**2. Nguyên lí chồng chất**\nHợp lực của nhiều lực là tổng vector:\n$$\\vec F_{hl}=\\vec F_1+\\vec F_2+\\cdots$$\nHợp lực thay thế tác dụng đồng thời của các lực lên chuyển động tịnh tiến của vật.',
  '**3. Hai lực cùng phương**\nCùng chiều: $F=F_1+F_2$. Ngược chiều: $F=|F_1-F_2|$, chiều theo lực lớn hơn. Chỉ cộng/trừ độ lớn trực tiếp khi các lực cùng phương.',
  '**4. Hai lực hợp góc**\nNếu góc giữa hai lực là $\\alpha$:\n$$F=\\sqrt{F_1^2+F_2^2+2F_1F_2\\cos\\alpha}$$\nVới $\\alpha=90^\\circ$, $F=\\sqrt{F_1^2+F_2^2}$.',
  '**5. Phân tích theo trục**\nNếu lực $F$ hợp trục $Ox$ góc $\\alpha$:\n$$F_x=F\\cos\\alpha,\\qquad F_y=F\\sin\\alpha$$\nDấu thành phần phụ thuộc chiều so với trục. Nếu góc được cho với $Oy$, vai trò sin/cos đổi.',
  '**6. Mặt phẳng nghiêng**\nChọn trục song song và vuông góc mặt phẳng. Với mặt nghiêng góc $\\alpha$ so phương ngang:\n$$P_{\\parallel}=mg\\sin\\alpha,\\qquad P_{\\perp}=mg\\cos\\alpha$$',
  '**7. Tổng hợp nhiều lực**\nCộng đại số thành phần:\n$$F_x=\\sum F_{ix},\\qquad F_y=\\sum F_{iy}$$\n$$F=\\sqrt{F_x^2+F_y^2},\\qquad \\tan\\theta=\\frac{F_y}{F_x}$$\nPhải xác định đúng góc phần tư của $\\vec F$.',
  '**8. Quy trình giải**\n- Chọn trục thuận lợi.\n- Vẽ từng lực và góc thật sự với trục.\n- Tách thành phần có dấu.\n- Cộng theo từng trục.\n- Ghép độ lớn/hướng và kiểm tra trường hợp giới hạn.',
  '**9. Lỗi cần tránh**\n- Cộng độ lớn các lực không cùng phương.\n- Nhầm góc giữa hai lực với góc của một lực so trục.\n- Đổi sin/cos theo hình vẽ thay vì định nghĩa.\n- Bỏ dấu thành phần.\n- Dùng định lí Pythagore khi hai lực không vuông góc.'
];

export const phy10Qt20Theory: string[] = [
  '**1. Sơ đồ lực tự do là gì?**\nCô lập một vật/hệ và thay mọi tương tác với môi trường bằng các vector lực ngoài tác dụng lên nó. Sơ đồ không mô tả toàn cảnh mà chỉ phục vụ đúng vật đang xét.',
  '**2. Quy trình nhận diện lực**\nTìm tương tác xa trước (trọng lực), rồi tương tác tiếp xúc: mặt đỡ → phản lực/ma sát; dây → lực căng; lò xo → lực đàn hồi; người/động cơ → lực kéo/đẩy; chất lưu → lực cản.',
  '**3. Trọng lực**\n$\\vec P=m\\vec g$ đặt quy ước tại trọng tâm, hướng thẳng đứng xuống. Không vẽ “trọng lượng” thêm như một lực khác nếu đang xét cùng vật.',
  '**4. Phản lực và ma sát**\nPhản lực $\\vec N$ vuông góc mặt tiếp xúc; ma sát nằm dọc mặt và chống xu hướng trượt tương đối. $N$ không mặc định bằng $mg$.',
  '**5. Dây và lò xo**\nLực căng hướng dọc dây, kéo vật ra khỏi điểm gắn. Lực đàn hồi chống biến dạng, hướng về trạng thái tự nhiên.',
  '**6. Những gì không được vẽ**\nKhông vẽ vận tốc, gia tốc, quỹ đạo hoặc một “lực chuyển động”. Không vẽ lực mà vật khảo sát tác dụng lên vật khác; đó thuộc sơ đồ của vật kia.',
  '**7. Chọn hệ vật**\nNếu xét từng vật, lực tương tác giữa các vật là lực ngoài của từng sơ đồ. Nếu gộp cả hệ, chúng là nội lực và không xuất hiện trong tổng ngoại lực của hệ.',
  '**8. Kiểm tra sơ đồ**\nMỗi lực phải trả lời được: vật nào tác dụng lên vật khảo sát? Nếu không chỉ ra được tác nhân, lực có thể là lực tưởng tượng hoặc bị vẽ trùng.',
  '**9. Lỗi cần tránh**\n- Vẽ cặp lực III Newton trên cùng một vật.\n- Vẽ $ma$ như một lực.\n- Cho phản lực luôn thẳng đứng.\n- Cho ma sát luôn ngược vận tốc tuyệt đối.\n- Bỏ lực do mặt/dây khi vật còn tiếp xúc.'
];

export const phy10Qt21Theory: string[] = [
  '**1. Định luật I Newton**\nTrong hệ quy chiếu quán tính, nếu $\\sum\\vec F=0$ thì vật giữ nguyên vận tốc:\n$$\\vec a=0\\Rightarrow \\vec v=\\text{hằng số}$$\nVật có thể đứng yên hoặc chuyển động thẳng đều.',
  '**2. Quán tính**\nQuán tính là xu hướng bảo toàn trạng thái chuyển động. Khối lượng càng lớn thì mức quán tính càng lớn, tức cùng hợp lực gây gia tốc nhỏ hơn.',
  '**3. Không cần lực để duy trì vận tốc**\nLực cần để làm thay đổi vận tốc, không phải để “nuôi” chuyển động thẳng đều. Trong đời sống vật chậm lại vì ma sát/lực cản, không phải vì tự hết lực.',
  '**4. Hệ quy chiếu quán tính**\nĐịnh luật I dùng trực tiếp trong hệ không gia tốc hoặc gần quán tính. Trong xe tăng tốc, người có cảm giác bị ngả; giải thích trong hệ mặt đất bằng quán tính và lực thực.',
  '**5. Xe khởi hành và phanh**\nXe khởi hành, phần thân trên có xu hướng giữ trạng thái nghỉ nên ngả sau so với xe. Xe phanh, cơ thể có xu hướng giữ vận tốc nên lao trước; dây an toàn tạo lực làm giảm vận tốc.',
  '**6. Giũ bụi và rút khăn**\nKhi vật đỡ đổi chuyển động nhanh, vật phía trên có xu hướng giữ vận tốc ban đầu. Hiện tượng còn phụ thuộc ma sát và thời gian tác dụng.',
  '**7. Suy luận cân bằng**\nNếu vật thẳng đều trong hệ quán tính thì hợp lực bằng 0, không nhất thiết không có lực; các lực có thể cân bằng vector.',
  '**8. Lỗi cần tránh**\n- Cho hợp lực bằng 0 thì vật đứng yên.\n- Cho vật chuyển động phải có hợp lực cùng chiều.\n- Gọi quán tính là một lực.\n- Bỏ hệ quy chiếu.\n- Cho vật nặng “có nhiều quán tính nên luôn chuyển động nhanh hơn”.'
];

export const phy10Qt22Theory: string[] = [
  '**1. Định luật II Newton**\nTrong hệ quán tính:\n$$\\sum\\vec F=m\\vec a$$\nGia tốc cùng hướng hợp lực; đơn vị $1N=1kg\\cdot m/s^2$.',
  '**2. Dạng theo trục**\n$$\\sum F_x=ma_x,\\qquad \\sum F_y=ma_y$$\nCác lực được chiếu có dấu. Nếu vật không gia tốc theo một trục thì tổng lực trên trục đó bằng 0.',
  '**3. Khối lượng và gia tốc**\nVới cùng hợp lực, $a=F_{hl}/m$: vật có khối lượng lớn hơn có gia tốc nhỏ hơn. Khối lượng phải đổi sang kg.',
  '**4. Vật trên mặt ngang**\nNếu không có gia tốc đứng: $N$ được tìm từ $\\sum F_y=0$. Lực kéo nghiêng lên làm $N$ giảm; kéo nghiêng xuống làm $N$ tăng, vì vậy ma sát có thể thay đổi.',
  '**5. Mặt phẳng nghiêng**\nChọn trục dọc mặt: thành phần trọng lực xuống dốc là $mg\\sin\\alpha$; vuông góc là $mg\\cos\\alpha$. Viết Newton riêng cho hai trục.',
  '**6. Hệ nhiều vật**\nXét cả hệ để loại nội lực và tìm gia tốc:\n$$a=\\frac{\\sum F_{ngoài}}{m_{tổng}}$$\nSau đó xét một vật để tìm lực căng/lực tương tác.',
  '**7. Điều kiện tiếp xúc**\nPhản lực chỉ có thể đẩy, $N\\ge0$; dây mềm chỉ kéo, $T\\ge0$. Nếu nghiệm âm, giả thiết tiếp xúc/dây căng không còn đúng.',
  '**8. Quy trình giải**\n- Chọn vật/hệ và vẽ sơ đồ lực.\n- Chọn trục theo gia tốc hoặc liên kết.\n- Chiếu lực, viết Newton.\n- Dùng ràng buộc hệ.\n- Giải và kiểm tra dấu, đơn vị, điều kiện vật lí.',
  '**9. Lỗi cần tránh**\n- Dùng lực kéo thay hợp lực.\n- Gán hướng $a$ theo $v$.\n- Bỏ lực cân bằng trên trục vuông góc.\n- Dùng gram.\n- Chấp nhận $N<0$ hoặc $T<0$.'
];

export const phy10Qt23Theory: string[] = [
  '**1. Định luật III Newton**\nKhi A tác dụng lên B lực $\\vec F_{A\\to B}$, B đồng thời tác dụng lên A:\n$$\\vec F_{B\\to A}=-\\vec F_{A\\to B}$$',
  '**2. Đặc điểm cặp tương tác**\nHai lực cùng giá, cùng độ lớn, ngược chiều, cùng loại và xuất hiện/mất đi đồng thời nhưng tác dụng lên **hai vật khác nhau**.',
  '**3. Khác với hai lực cân bằng**\nHai lực cân bằng cùng tác dụng lên một vật và có tổng bằng 0. Cặp III Newton đặt lên hai vật nên không triệt tiêu trên sơ đồ lực của một vật.',
  '**4. Cách gọi tên**\nViết đủ “lực của A tác dụng lên B” để tránh ghép sai. Lực phản tương tác được tạo bằng cách đổi A và B.',
  '**5. Vật nặng và vật nhẹ**\nTrong va chạm, lực hai vật tác dụng lên nhau bằng độ lớn dù gia tốc khác nhau:\n$$a_A=F/m_A,\\qquad a_B=F/m_B$$',
  '**6. Trọng lực và lực hấp dẫn phản tương tác**\nTrái Đất hút vật và vật hút Trái Đất là cặp III Newton. Trọng lực của vật và phản lực mặt bàn không phải cặp III Newton vì cùng tác dụng lên vật.',
  '**7. Đi bộ và chuyển động**\nChân đẩy đất về sau; đất tác dụng ma sát nghỉ lên chân về trước. Lực của đất là ngoại lực làm người tăng tốc.',
  '**8. Lỗi cần tránh**\n- Ghép trọng lực với phản lực bàn.\n- Cho lực của vật nặng lớn hơn trong cùng tương tác.\n- Nói lực “hành động” xuất hiện trước “phản lực”.\n- Cộng hai lực III Newton trong phương trình của một vật.\n- Ghép hai lực khác loại.'
];

export const phy10Qt24Theory: string[] = [
  '**1. Khối lượng**\nKhối lượng $m$ đặc trưng mức quán tính, là đại lượng vô hướng, đơn vị kg. Trong cơ học cổ điển phổ thông, khối lượng không đổi theo vị trí.',
  '**2. Trọng lực**\nGần mặt đất:\n$$\\vec P=m\\vec g$$\nHướng xuống, độ lớn $P=mg$, đơn vị N. Khi $g$ thay đổi theo nơi, trọng lực thay đổi nhưng khối lượng không đổi.',
  '**3. Trọng lượng và số chỉ cân**\nSố chỉ cân liên quan lực vật ép lên cân; theo III Newton có độ lớn bằng phản lực $N$ của cân lên vật. Trong hệ có gia tốc, $N$ có thể khác $mg$.',
  '**4. Thang máy gia tốc lên**\nChọn chiều lên dương:\n$$N-mg=ma\\Rightarrow N=m(g+a)$$\nVật có trọng lượng biểu kiến lớn hơn bình thường.',
  '**5. Thang máy gia tốc xuống**\n$$mg-N=ma\\Rightarrow N=m(g-a)$$\nNếu thang máy chỉ chuyển động xuống nhưng chậm dần, gia tốc hướng lên và $N>mg$. Phải xét gia tốc, không xét riêng vận tốc.',
  '**6. Không trọng lượng biểu kiến**\nKhi hệ rơi tự do $a=g$ hướng xuống, $N=0$. Trọng lực vẫn tồn tại; “không trọng lượng” ở đây là không có lực đỡ.',
  '**7. Cân báo kg**\nCân thường quy đổi lực $N$ sang “kg” theo $N/g_0$. Trong bài cần xác định đề hỏi lực N hay số kg hiển thị.',
  '**8. Lỗi cần tránh**\n- Dùng kg làm đơn vị trọng lực.\n- Cho khối lượng đổi khi lên cao.\n- Luôn lấy số chỉ cân bằng $mg$.\n- Xét chiều vận tốc thay vì gia tốc thang máy.\n- Cho $N=0$ nghĩa trọng lực biến mất.'
];

export const phy10Qt25Theory: string[] = [
  '**1. Biến dạng và lực đàn hồi**\nKhi vật đàn hồi bị kéo/nén, nó tác dụng lực chống lại biến dạng. Với lò xo, lực dọc trục và hướng đưa đầu lò xo về chiều dài tự nhiên.',
  '**2. Độ biến dạng**\n$$\\Delta l=l-l_0$$\n$l_0$ là chiều dài tự nhiên, $l$ là chiều dài hiện tại. Khi chỉ tính độ lớn lực dùng $|\\Delta l|$ và đổi sang metre.',
  '**3. Định luật Hooke**\nTrong giới hạn đàn hồi:\n$$F_{đh}=k|\\Delta l|$$\nDạng vector một chiều có thể viết $F_x=-kx$; dấu trừ biểu thị lực ngược li độ biến dạng.',
  '**4. Độ cứng**\n$k$ có đơn vị N/m. $k$ lớn nghĩa cần lực lớn hơn để tạo cùng độ biến dạng. Độ cứng phụ thuộc vật liệu và kích thước lò xo.',
  '**5. Lò xo treo cân bằng**\nNếu vật chỉ chịu trọng lực và lực đàn hồi:\n$$k\\Delta l=mg\\Rightarrow \\Delta l=\\frac{mg}{k}$$',
  '**6. Đồ thị $F-\\Delta l$**\nTrong miền Hooke, đồ thị là đường thẳng qua gốc và hệ số góc bằng $k$. Ra khỏi miền tuyến tính không được tiếp tục ngoại suy Hooke.',
  '**7. Giới hạn đàn hồi**\nDưới giới hạn, bỏ lực vật gần trở lại trạng thái đầu. Vượt giới hạn có thể biến dạng vĩnh viễn hoặc hỏng; công thức Hooke không còn đáng tin.',
  '**8. Quy trình giải**\n- Xác định $l_0,l$ và $\\Delta l$.\n- Vẽ chiều lực đàn hồi.\n- Kiểm tra miền Hooke.\n- Kết hợp cân bằng/Newton nếu có lực khác.\n- Kiểm tra đơn vị N/m và m.',
  '**9. Lỗi cần tránh**\n- Dùng $l$ thay $\\Delta l$.\n- Quên đổi cm sang m.\n- Vẽ lực đàn hồi cùng chiều biến dạng.\n- Cho Hooke đúng mọi tải.\n- Nhầm $k$ lớn với lò xo dãn nhiều hơn dưới cùng lực.'
];

export const phy10Qt26Theory: string[] = [
  '**1. Nguồn gốc và chiều ma sát**\nMa sát tiếp xúc chống xu hướng trượt tương đối giữa hai bề mặt. Chiều phải xác định từ xu hướng trượt, không máy móc ngược vận tốc của vật so đất.',
  '**2. Ma sát nghỉ**\nMa sát nghỉ tự điều chỉnh:\n$$0\\le F_{msn}\\le F_{msn,max}=\\mu_sN$$\nChỉ tại ngưỡng sắp trượt mới lấy $F_{msn}=\\mu_sN$.',
  '**3. Ma sát trượt**\nKhi hai mặt đang trượt tương đối:\n$$F_{mst}=\\mu_kN$$\nĐây là mô hình gần đúng; $\\mu_k$ không có đơn vị.',
  '**4. Tìm phản lực trước**\n$N$ phụ thuộc mọi thành phần lực vuông góc mặt. Lực kéo nghiêng, mặt phẳng nghiêng hoặc gia tốc vuông góc đều có thể làm $N\\ne mg$.',
  '**5. Điều kiện bắt đầu trượt**\nTính lực ma sát cần để cân bằng. Nếu $F_{cần}\\le\\mu_sN$, vật còn nghỉ; nếu vượt, vật trượt và chuyển sang mô hình ma sát trượt.',
  '**6. Mặt phẳng nghiêng**\nKhông lực khác vuông góc: $N=mg\\cos\\alpha$. Thành phần kéo trượt xuống là $mg\\sin\\alpha$; so với ma sát nghỉ cực đại để xác định trạng thái.',
  '**7. Lực cản chất lưu**\nThường ngược vận tốc tương đối với môi trường và tăng theo tốc độ. Mô hình có thể gần tỉ lệ $v$ hoặc $v^2$ tùy miền, nên không tự dùng công thức nếu đề không cho.',
  '**8. Vận tốc giới hạn**\nKhi vật rơi, lực cản tăng đến lúc tổng lực bằng 0; khi đó $a=0$ và vật tiếp tục với vận tốc không đổi, không phải đứng yên.',
  '**9. Lạnh/bôi trơn và ứng dụng**\nThay đổi bề mặt, vật liệu, lực ép hoặc chất bôi trơn làm thay đổi ma sát. Ma sát có thể có ích (đi bộ, phanh) hoặc gây hao phí.',
  '**10. Lỗi cần tránh**\n- Luôn lấy ma sát nghỉ bằng $\\mu N$.\n- Cho ma sát luôn ngược chuyển động tuyệt đối.\n- Lấy $N=mg$ trong mọi tình huống.\n- Cho vận tốc giới hạn là 0.\n- Dùng cùng hệ số cho ma sát nghỉ và trượt khi đề phân biệt.'
];

export const phy10Qt27Theory: string[] = [
  '**1. Lực căng dây**\nDây mềm chỉ kéo, lực căng trên vật hướng dọc dây ra khỏi vật. Dây không thể đẩy; nếu tính ra $T<0$, dây thực tế bị chùng hoặc giả thiết sai.',
  '**2. Dây và ròng rọc lí tưởng**\nVới một dây nhẹ, không dãn qua ròng rọc không ma sát, độ lớn lực căng như nhau dọc dây. Các vật nối dây có ràng buộc gia tốc phù hợp, thường cùng độ lớn.',
  '**3. Phản lực pháp tuyến**\n$\\vec N$ vuông góc mặt tiếp xúc và chỉ có khi còn tiếp xúc. Nó điều chỉnh theo động lực học, không luôn bằng $mg$.',
  '**4. Một vật trên mặt đỡ**\nViết Newton theo phương vuông góc để tìm $N$. Lực kéo nghiêng, chuyển động cong hoặc gia tốc đứng có thể làm $N$ thay đổi.',
  '**5. Hai vật nối trên mặt ngang**\nXét cả hệ tìm $a=F_{ngoài}/(m_1+m_2)$, sau đó xét một vật để tìm $T$. Nếu có ma sát, tính ma sát từng vật từ phản lực tương ứng.',
  '**6. Hệ treo qua ròng rọc**\nVẽ riêng hai vật, chọn chiều dương theo chuyển động dự đoán, viết hai phương trình Newton và dùng cùng độ lớn gia tốc.',
  '**7. Mất tiếp xúc và dây chùng**\nTại giới hạn mất tiếp xúc $N=0$; tại giới hạn dây vừa chùng $T=0$. Sau đó mô hình lực phải thay đổi.',
  '**8. Lỗi cần tránh**\n- Vẽ lực căng hướng vào vật thay vì dọc dây ra điểm treo.\n- Gán lực căng bằng trọng lực không có căn cứ.\n- Cho mọi dây/ròng rọc đều lí tưởng.\n- Dùng chung sơ đồ cho hai vật.\n- Chấp nhận $N<0$ hoặc $T<0$.'
];

export const phy10Qt28Theory: string[] = [
  '**1. Cân bằng tịnh tiến**\nTrong hệ quán tính:\n$$\\sum\\vec F=0\\Leftrightarrow \\vec a=0$$\nVật có thể đứng yên hoặc chuyển động thẳng đều.',
  '**2. Điều kiện theo trục**\n$$\\sum F_x=0,\\qquad \\sum F_y=0$$\nCân bằng độ lớn riêng lẻ chỉ đúng trong tình huống cùng phương thích hợp.',
  '**3. Hai lực cân bằng**\nNếu vật chỉ chịu hai lực và cân bằng, chúng phải cùng giá, ngược chiều, cùng độ lớn và cùng tác dụng lên vật.',
  '**4. Ba lực đồng quy**\nBa lực cân bằng có tổng vector bằng 0; đặt nối đuôi tạo tam giác kín. Có thể phân tích theo trục hoặc dùng định lí sin/cos khi hình học rõ.',
  '**5. Nút dây**\nMỗi lực căng hướng ra khỏi nút dọc dây. Chọn trục ngang–đứng, tách thành phần và giải hai phương trình cân bằng.',
  '**6. Vật trên mặt nghiêng**\nTách $mg\\sin\\alpha$ dọc mặt, $mg\\cos\\alpha$ vuông góc. Lực ma sát nghỉ có giá trị vừa đủ trong giới hạn, không mặc định cực đại.',
  '**7. Kiểm tra nghiệm**\nLực căng/phản lực phải không âm; ma sát nghỉ không vượt $\\mu_sN$. Nếu vi phạm, trạng thái cân bằng giả định không tồn tại.',
  '**8. Lỗi cần tránh**\n- Cho cân bằng nghĩa không có lực.\n- Chỉ cộng độ lớn.\n- Gán mọi lực căng bằng nhau ở các dây khác nhau.\n- Luôn lấy ma sát cực đại.\n- Không kiểm tra điều kiện tồn tại.'
];

export const phy10Qt29Theory: string[] = [
  '**1. Tác dụng làm quay**\nMoment của lực đối với trục đo xu hướng làm quay:\n$$M=Fd$$\n$d$ là khoảng cách vuông góc từ trục đến **giá lực**, đơn vị $N\\cdot m$.',
  '**2. Cánh tay đòn**\nNếu lực $F$ đặt tại điểm cách trục đoạn $r$ và hợp $\\vec r$ góc $\\theta$:\n$$d=r\\sin\\theta,\\qquad M=Fr\\sin\\theta$$',
  '**3. Dấu moment**\nChọn chiều quay dương, ví dụ ngược kim đồng hồ dương. Moment có dấu theo xu hướng quay; lực có giá đi qua trục cho $M=0$.',
  '**4. Cân bằng quay**\n$$\\sum M_O=0$$\nTương đương tổng moment thuận chiều bằng tổng moment ngược chiều quanh cùng một trục.',
  '**5. Cân bằng vật rắn hoàn chỉnh**\nCân bằng tĩnh cần đồng thời:\n$$\\sum\\vec F=0,\\qquad \\sum M_O=0$$\nChỉ cân bằng moment chưa bảo đảm vật không tịnh tiến.',
  '**6. Trọng lượng của thanh**\nThanh đồng chất có trọng lực đặt tại trung điểm. Nếu thanh không đồng chất, phải dùng vị trí trọng tâm được cho/xác định.',
  '**7. Chọn trục khôn ngoan**\nChọn trục qua bản lề hoặc điểm đặt lực chưa biết làm moment của lực đó bằng 0, giúp giảm ẩn. Sau khi tìm lực khác, dùng cân bằng lực để tìm phản lực bản lề.',
  '**8. Đòn bẩy**\nVới hai lực vuông góc cánh tay đòn ở hai phía:\n$$F_1d_1=F_2d_2$$\nĐây là trường hợp của cân bằng moment, không dùng khi còn moment khác chưa tính.',
  '**9. Lỗi cần tránh**\n- Dùng khoảng cách từ điểm đặt thay khoảng cách đến giá lực.\n- Bỏ $\\sin\\theta$.\n- Tính moment các lực quanh các trục khác nhau trong cùng phương trình.\n- Bỏ trọng lượng thanh.\n- Chỉ dùng moment mà không kiểm tra cân bằng lực.'
];

export const phy10Qt30Theory: string[] = [
  '**1. Khối lượng riêng**\n$$\\rho=\\frac{m}{V}$$\nĐơn vị SI $kg/m^3$. Với chất đồng nhất, $m=\\rho V$. Phải đổi $g$, $cm^3$, lít về đơn vị nhất quán.',
  '**2. Áp suất**\nÁp suất do lực vuông góc phân bố trên diện tích:\n$$p=\\frac{F_\\perp}{S}$$\nĐơn vị $Pa=N/m^2$. Cùng lực, diện tích nhỏ hơn tạo áp suất lớn hơn.',
  '**3. Áp suất chất lỏng**\nTrong chất lỏng đứng yên, độ tăng áp suất từ mặt thoáng xuống độ sâu thẳng đứng $h$:\n$$p_{dư}=\\rho gh$$',
  '**4. Áp suất tuyệt đối**\nNếu mặt thoáng chịu áp suất $p_0$:\n$$p=p_0+\\rho gh$$\n$\\rho gh$ là áp suất dư. Phải đọc đề hỏi áp suất tổng hay phần tăng.',
  '**5. So sánh các điểm**\nTrong cùng chất lỏng liên thông, các điểm cùng độ sâu có cùng áp suất nếu hệ cân bằng. Áp suất phụ thuộc $\\rho$, $g$, $h$, không phụ thuộc hình dạng bình.',
  '**6. Nhiều lớp chất lỏng**\nCộng độ tăng áp suất từng lớp:\n$$p=p_0+\\sum_i\\rho_i gh_i$$\nMỗi $h_i$ là chiều cao thẳng đứng của lớp tương ứng.',
  '**7. Lực do áp suất**\nNếu áp suất đều trên diện tích phẳng nhỏ: $F=pS$. Với bề mặt lớn theo độ sâu, áp suất thay đổi nên không máy móc dùng một giá trị nếu đề yêu cầu chính xác hơn.',
  '**8. Quy trình giải**\n- Đổi $m,V,S,h$ về SI.\n- Xác định áp suất dư hay tuyệt đối.\n- Dùng độ sâu thẳng đứng.\n- Cộng từng lớp nếu cần.\n- Kiểm tra đơn vị Pa và xu hướng theo độ sâu.',
  '**9. Lỗi cần tránh**\n- Cho áp suất phụ thuộc hình dạng bình.\n- Dùng chiều dài xiên thay độ sâu.\n- Quên $p_0$ khi hỏi áp suất tuyệt đối.\n- Đổi sai $cm^2/cm^3$.\n- Dùng toàn bộ lực thay thành phần vuông góc.'
];

export const g10PhysicsModule2TheoryByQuestionTypeId: Record<string, string[]> = {
  'phy10-qt19': phy10Qt19Theory,
  'phy10-qt20': phy10Qt20Theory,
  'phy10-qt21': phy10Qt21Theory,
  'phy10-qt22': phy10Qt22Theory,
  'phy10-qt23': phy10Qt23Theory,
  'phy10-qt24': phy10Qt24Theory,
  'phy10-qt25': phy10Qt25Theory,
  'phy10-qt26': phy10Qt26Theory,
  'phy10-qt27': phy10Qt27Theory,
  'phy10-qt28': phy10Qt28Theory,
  'phy10-qt29': phy10Qt29Theory,
  'phy10-qt30': phy10Qt30Theory
};
