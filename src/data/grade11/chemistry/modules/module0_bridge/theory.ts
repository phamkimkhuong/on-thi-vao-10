/**
 * Học liệu cầu nối trước khi vào Hóa học 11.
 *
 * Nội dung được viết theo hướng tự học độc lập: học sinh có thể ôn lại đúng
 * tiền đề cần dùng mà không phải mở lại SGK Hóa học 10 hay tài liệu ngoài.
 */

export const chem11BridgeEquationTheory: string[] = [
  '**1. Phương trình hóa học biểu diễn điều gì?**\nPhương trình hóa học cho biết **chất phản ứng**, **sản phẩm** và **tỉ lệ số mol** giữa các chất. Ví dụ:\n$$N_2+3H_2\\rightarrow2NH_3$$\ncho biết 1 mol $N_2$ phản ứng theo tỉ lệ với 3 mol $H_2$ để tạo 2 mol $NH_3$. Các hệ số biểu diễn tỉ lệ, không khẳng định mọi lượng ban đầu đều phản ứng hết.',

  '**2. Phân biệt hệ số và chỉ số**\n- **Chỉ số** nằm ở góc dưới bên phải kí hiệu nguyên tố, là một phần của công thức chất. Trong $H_2O$, chỉ số 2 cho biết mỗi phân tử có 2 nguyên tử H.\n- **Hệ số** đặt trước toàn bộ công thức, cho biết số đơn vị chất theo tỉ lệ phương trình. $2H_2O$ chứa tổng cộng 4 H và 2 O.\n\nKhi cân bằng chỉ được thay đổi **hệ số**. Đổi $H_2O$ thành $H_2O_2$ là đổi sang chất khác, không phải cân bằng phương trình.',

  '**3. Nguyên tắc cân bằng phương trình**\nTrong phản ứng hóa học, nguyên tử không tự sinh ra hoặc mất đi. Vì vậy, số nguyên tử của **từng nguyên tố** phải bằng nhau ở hai vế. Quy trình cơ bản:\n1. Viết đúng công thức các chất.\n2. Đếm nguyên tử ở hai vế.\n3. Đặt hệ số nguyên thích hợp trước công thức.\n4. Rút gọn về bộ hệ số nguyên tối giản.\n5. Kiểm tra lại tất cả nguyên tố và điện tích nếu có ion.\n\nVí dụ: $N_2+H_2\\rightarrow NH_3$. Bảo toàn N trước: đặt 2 trước $NH_3$; khi đó vế phải có 6 H nên đặt 3 trước $H_2$.',

  '**4. Nồng độ mol**\nNồng độ mol cho biết số mol chất tan có trong một lít dung dịch:\n$$C_M=\\frac{n}{V}$$\nTrong đó $C_M$ có đơn vị $\\mathrm{mol/L}$ hoặc M, $n$ là số mol chất tan và $V$ là **thể tích dung dịch tính bằng lít**. Các biến đổi thường dùng:\n$$n=C_MV,\\qquad V=\\frac{n}{C_M}$$\nCần phân biệt thể tích **dung dịch** với thể tích dung môi.',

  '**5. Đổi đơn vị trước khi tính**\n$$1\\,\\mathrm{L}=1000\\,\\mathrm{mL},\\qquad V(\\mathrm{L})=\\frac{V(\\mathrm{mL})}{1000}$$\nVí dụ: 0,20 mol chất tan trong 500 mL dung dịch có:\n$$V=0{,}500\\,\\mathrm{L};\\qquad C_M=\\frac{0{,}20}{0{,}500}=0{,}40\\,\\mathrm{M}$$\nNếu thay trực tiếp 500 vào công thức, kết quả sẽ sai 1000 lần.',

  '**6. Liên hệ phương trình với số mol và nồng độ**\nSau khi phương trình đã cân bằng, hệ số cho tỉ lệ mol:\n$$\\frac{n_A}{a}=\\frac{n_B}{b}=\\frac{n_C}{c}$$\ncho phản ứng $aA+bB\\rightarrow cC$. Nếu dữ kiện cho nồng độ và thể tích, trước hết đổi về mol bằng $n=CV$, dùng tỉ lệ phương trình, rồi mới đổi đại lượng cần tìm. Không dùng trực tiếp tỉ lệ hệ số cho khối lượng hoặc nồng độ khi chưa quy đổi thích hợp.',

  '**7. Cách nhận dạng và tự kiểm tra**\n- Có công thức chưa cân bằng → bảo toàn từng nguyên tố bằng hệ số.\n- Có $n$ và $V$ dung dịch → nghĩ đến $C_M=n/V$.\n- Có $C_M$ và $V$ → tính mol bằng $n=C_MV$.\n- Có nhiều chất trong phản ứng → cân bằng trước, sau đó dùng tỉ lệ mol.\n\nTự kiểm tra: công thức chất có bị thay đổi không; hai vế đã bảo toàn mọi nguyên tố chưa; thể tích đã đổi sang lít chưa; đơn vị kết quả có đúng không.',

  '**8. Lỗi cần loại bỏ**\n- Thay chỉ số trong công thức để làm số nguyên tử bằng nhau.\n- Cân bằng một nguyên tố nhưng quên kiểm tra lại nguyên tố đã cân bằng trước đó.\n- Hiểu hệ số là số mol thực tế luôn có trong bình.\n- Dùng mL trực tiếp trong $C_M=n/V$.\n- Nhầm thể tích dung dịch với thể tích dung môi.\n- Dùng tỉ lệ khối lượng theo hệ số thay cho tỉ lệ mol.'
];

export const chem11BridgeRateEnergyTheory: string[] = [
  '**1. Nồng độ và tốc độ là hai đại lượng khác nhau**\nNồng độ cho biết lượng chất trong một đơn vị thể tích tại một thời điểm. Tốc độ phản ứng mô tả nồng độ thay đổi nhanh đến mức nào theo thời gian. Một dung dịch có nồng độ lớn chưa chắc phản ứng đang nhanh; và tại cân bằng, nồng độ ổn định nhưng phản ứng thuận và nghịch vẫn tiếp tục.',

  '**2. Tốc độ trung bình từ dữ liệu nồng độ–thời gian**\nVới chất phản ứng A, nồng độ giảm nên thường viết:\n$$v_{tb}=-\\frac{\\Delta[A]}{\\Delta t}$$\nVới sản phẩm B, nồng độ tăng:\n$$v_{tb}=\\frac{\\Delta[B]}{\\Delta t}$$\nDấu trừ giúp tốc độ của chất phản ứng có giá trị dương. Khi phương trình có hệ số khác 1, tốc độ phản ứng còn phải được chuẩn hóa theo hệ số tỉ lượng; nếu đề chỉ hỏi mức thay đổi nồng độ thì đọc đúng đại lượng được yêu cầu.',

  '**3. Đọc bảng hoặc đồ thị nồng độ–thời gian**\n1. Đọc tên trục và đơn vị.\n2. Xác định chất phản ứng thường giảm, sản phẩm thường tăng.\n3. So sánh độ thay đổi trong những khoảng thời gian bằng nhau.\n4. Đoạn càng dốc biểu thị nồng độ thay đổi càng nhanh.\n5. Khi nồng độ trở nên ổn định, đồ thị gần nằm ngang; điều này chưa có nghĩa mọi quá trình vi mô đã dừng.\n\nKhông chọn thời điểm cân bằng chỉ vì hai đường nồng độ cắt nhau.',

  '**4. Phản ứng tỏa nhiệt và thu nhiệt**\n- **Tỏa nhiệt:** hệ giải phóng nhiệt ra môi trường, $\\Delta H<0$.\n- **Thu nhiệt:** hệ nhận nhiệt từ môi trường, $\\Delta H>0$.\n\nVới phương trình nhiệt hóa học, giá trị $\\Delta H$ gắn với đúng phương trình và hệ số đã viết. Ví dụ $\\Delta H=-92$ kJ nghĩa là phản ứng theo đúng lượng chất trong phương trình giải phóng 92 kJ.',

  '**5. Quy tắc biến đổi phương trình nhiệt hóa học**\n- Đảo chiều phản ứng → đổi dấu $\\Delta H$.\n- Nhân toàn bộ hệ số phương trình với $k$ → nhân $\\Delta H$ với $k$.\n- Chia toàn bộ hệ số cho $k$ → chia $\\Delta H$ cho $k$.\n\nKhông được đổi hệ số mà giữ nguyên giá trị enthalpy, vì $\\Delta H$ là đại lượng phụ thuộc lượng chất phản ứng theo phương trình.',

  '**6. Liên hệ năng lượng với cân bằng**\nCó thể hình dung nhiệt như một thành phần để dự đoán chuyển dịch:\n- Chiều thuận tỏa nhiệt: “nhiệt” ở phía sản phẩm.\n- Chiều thuận thu nhiệt: “nhiệt” ở phía chất phản ứng.\n\nTăng nhiệt độ ưu tiên chiều thu nhiệt; giảm nhiệt độ ưu tiên chiều tỏa nhiệt. Tuy nhiên, dấu $\\Delta H$ **không cho biết phản ứng nhanh hay chậm**.',

  '**7. Phân biệt tốc độ với vị trí cân bằng**\nTốc độ trả lời “hệ biến đổi nhanh đến đâu”; vị trí cân bằng trả lời “khi ổn định, thành phần nghiêng về phía nào”. Chất xúc tác có thể làm hệ đạt cân bằng nhanh hơn nhưng không làm thay đổi thành phần cân bằng. Đây là tiền đề quan trọng trước khi học nguyên lí Le Chatelier.',

  '**8. Lỗi cần loại bỏ**\n- Đồng nhất nồng độ lớn với tốc độ lớn trong mọi thời điểm.\n- Cho rằng đường nồng độ nằm ngang nghĩa là phản ứng dừng.\n- Gọi $\\Delta H<0$ là thu nhiệt.\n- Đảo phản ứng nhưng không đổi dấu $\\Delta H$.\n- Dùng dấu $\\Delta H$ để kết luận phản ứng nhanh.\n- Cho rằng xúc tác làm tăng lượng sản phẩm ở cân bằng.'
];

export const chem11BridgeLogarithmTheory: string[] = [
  '**1. Lũy thừa cơ số 10 cần nhớ**\n$$10^a\\times10^b=10^{a+b},\\qquad \\frac{10^a}{10^b}=10^{a-b},\\qquad (10^a)^b=10^{ab}$$\nVới số mũ âm: $10^{-a}=1/10^a$. Ví dụ $10^{-3}=0{,}001$ và $10^{-5}=0{,}00001$. Mỗi khi số mũ giảm 1 đơn vị, giá trị nhỏ đi 10 lần.',

  '**2. Logarit thập phân**\n$\\lg x$ là số mũ phải đặt cho 10 để được $x$:\n$$\\lg(10^k)=k,\\qquad 10^{\\lg x}=x$$\nVí dụ $\\lg(10^{-4})=-4$. Vì vậy $-\\lg(10^{-4})=4$. Cần xử lí cả dấu âm của số mũ lẫn dấu trừ đứng trước logarit.',

  '**3. Các quy tắc logarit cơ bản**\n$$\\lg(ab)=\\lg a+\\lg b$$\n$$\\lg\\left(\\frac{a}{b}\\right)=\\lg a-\\lg b$$\n$$\\lg(a^n)=n\\lg a$$\nCác quy tắc này dùng khi nồng độ không đúng dạng $10^{-n}$. Ví dụ:\n$$-\\lg(2\\times10^{-3})=3-\\lg2\\approx2{,}70$$\nKhông được tách sai thành $-\\lg2\\times\\lg10^{-3}$.',

  '**4. Công thức pH và phép đổi ngược**\n$$pH=-\\lg[H^+]$$\n$$[H^+]=10^{-pH}\\;(\\mathrm{mol/L})$$\nVí dụ $[H^+]=10^{-3}$ M thì pH = 3; pH = 5 thì $[H^+]=10^{-5}$ M. Kí hiệu ngoặc vuông $[H^+]$ chỉ **nồng độ mol** của ion $H^+$.',

  '**5. pOH và mối liên hệ ở 25 °C**\n$$pOH=-\\lg[OH^-]$$\nỞ 25 °C:\n$$pH+pOH=14$$\nVì vậy, nếu biết $[OH^-]$, cần tính pOH trước rồi suy pH. Không thay trực tiếp $[OH^-]$ vào công thức $pH=-\\lg[H^+]$.',

  '**6. Thang pH là thang logarit**\nHai dung dịch lệch nhau 1 đơn vị pH thì nồng độ $H^+$ lệch nhau 10 lần; lệch 2 đơn vị thì lệch 100 lần. Dung dịch pH 3 có $[H^+]$ lớn gấp 100 lần dung dịch pH 5. Vì vậy không được hiểu pH 4 “acid gấp đôi” pH 8.',

  '**7. Cách xử lí số không phải lũy thừa tròn**\nViết nồng độ về dạng $a\\times10^{-n}$ với $1\\le a<10$:\n$$pH=-\\lg(a\\times10^{-n})=n-\\lg a$$\nVí dụ $[H^+]=2{,}5\\times10^{-4}$ M:\n$$pH=4-\\lg2{,}5\\approx3{,}60$$\nCó thể dùng máy tính, nhưng cần kiểm tra: do $2{,}5\\times10^{-4}>10^{-4}$ nên pH phải nhỏ hơn 4.',

  '**8. Quy trình và lỗi cần tránh**\n1. Xác định đề cho $[H^+]$, $[OH^-]$, pH hay pOH.\n2. Dùng đúng công thức và đơn vị mol/L.\n3. Tách hệ số và lũy thừa nếu cần.\n4. Kiểm tra chiều biến đổi: $[H^+]$ lớn hơn thì pH nhỏ hơn.\n\nLỗi thường gặp: bỏ dấu trừ; nhầm $10^{-pH}$ thành $10^{pH}$; coi pH tuyến tính; dùng $[OH^-]$ để tính trực tiếp pH; nhập máy tính thiếu ngoặc.'
];

