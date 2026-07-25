/**
 * Học liệu tự học Chương 1 – Cân bằng hóa học.
 *
 * Mỗi mảng tương ứng đúng một QuestionType. Nội dung bao phủ định nghĩa,
 * bản chất, công thức, cách làm, ví dụ và giới hạn cần biết để học sinh có
 * thể chuyển thẳng sang phần luyện tập mà không phải tra tài liệu khác.
 */

export const chem11Qt01Theory: string[] = [
  '**1. Phản ứng một chiều và phản ứng thuận nghịch**\n- Phản ứng một chiều được xem là diễn ra chủ yếu theo một chiều trong điều kiện xét, thường viết bằng $\\rightarrow$.\n- **Phản ứng thuận nghịch** xảy ra theo hai chiều trái ngược trong cùng điều kiện, viết bằng $\\rightleftharpoons$.\n\nVới $aA+bB\\rightleftharpoons cC+dD$, chiều từ trái sang phải là chiều thuận; chiều từ phải sang trái là chiều nghịch. Một phản ứng chỉ được gọi là thuận nghịch khi hai chiều có thể cùng tồn tại trong **cùng hệ và cùng điều kiện**, không phải hai thí nghiệm tách biệt.',

  '**2. Hệ kín và điều kiện đạt cân bằng**\nCân bằng hóa học được xét đối với một hệ mà vật chất không thoát ra hoặc đi vào làm thay đổi thành phần ngoài ý muốn. Khi cho các chất phản ứng vào hệ kín, ban đầu phản ứng thuận chiếm ưu thế. Sản phẩm hình thành làm phản ứng nghịch xuất hiện và tăng dần. Sau một thời gian, hệ có thể đạt trạng thái cân bằng.',

  '**3. Bản chất của cân bằng động**\nỞ trạng thái cân bằng:\n$$v_{thuận}=v_{nghịch}$$\nHai phản ứng **vẫn liên tục diễn ra** ở cấp độ phân tử, nhưng vì lượng chất tạo ra và bị tiêu thụ trong mỗi đơn vị thời gian bằng nhau nên thành phần vĩ mô của hệ không đổi. Do đó:\n- Cân bằng là **động**, không phải tĩnh.\n- Tốc độ hai chiều bằng nhau nhưng không bằng 0.\n- Nồng độ các chất ổn định nhưng thường không bằng nhau.',

  '**4. Biểu hiện vĩ mô và mô tả vi mô**\n- **Vĩ mô:** màu sắc, áp suất, nồng độ hoặc các tính chất đo được không đổi theo thời gian.\n- **Vi mô:** các phân tử chất đầu vẫn tạo sản phẩm, đồng thời các phân tử sản phẩm vẫn tạo lại chất đầu.\n\nMột lời giải đầy đủ phải nối được hai cấp độ: “thành phần không đổi” vì “hai chiều tiêu thụ và tái tạo chất với tốc độ bằng nhau”.',

  '**5. Cân bằng không có nghĩa mọi đại lượng bằng nhau**\nKhông có quy tắc $[A]=[B]=[C]=[D]$. Giá trị nồng độ cân bằng phụ thuộc bản chất phản ứng, nhiệt độ và thành phần ban đầu. Điều kiện bắt buộc là **tốc độ thuận bằng tốc độ nghịch**, không phải nồng độ hai vế bằng nhau hay số mol khí hai vế bằng nhau.',

  '**6. Ví dụ nhận diện**\nTrong hệ kín:\n$$N_2(g)+3H_2(g)\\rightleftharpoons2NH_3(g)$$\nKhi cân bằng, $N_2$ và $H_2$ vẫn va chạm tạo $NH_3$; đồng thời $NH_3$ vẫn phân hủy. Nếu trong một giây có cùng một lượng $NH_3$ được tạo và bị phân hủy thì nồng độ ba chất không đổi, dù các phản ứng chưa dừng.',

  '**7. Cách làm dạng nhận diện–giải thích**\n1. Kiểm tra có hai chiều trong cùng điều kiện hay không.\n2. Xác định cấp độ đề hỏi: dấu phương trình, tốc độ hay nồng độ.\n3. Nếu hỏi cân bằng, nêu $v_{thuận}=v_{nghịch}\\ne0$.\n4. Nếu hỏi thành phần, nêu nồng độ **không đổi theo thời gian**, không khẳng định bằng nhau.\n5. Nếu hệ bị tác động, đó có thể là cân bằng cũ bị phá vỡ và hệ tiến đến cân bằng mới.',

  '**8. Lỗi cần loại bỏ**\n- Cho rằng ở cân bằng các phản ứng dừng hoàn toàn.\n- Cho rằng tốc độ bằng nhau kéo theo nồng độ bằng nhau.\n- Gọi hai phản ứng ở hai điều kiện khác nhau là một phản ứng thuận nghịch.\n- Kết luận hệ đã cân bằng chỉ vì nhìn thấy còn cả chất đầu và sản phẩm.\n- Nhầm “không đổi theo thời gian” với “bằng 0”.'
];

export const chem11Qt02Theory: string[] = [
  '**1. Hai loại đồ thị thường gặp**\n- **Nồng độ–thời gian:** trục tung là $[X]$, trục hoành là thời gian. Chất phản ứng thường giảm, sản phẩm thường tăng rồi cùng ổn định.\n- **Tốc độ–thời gian:** một đường biểu diễn $v_{thuận}$, một đường biểu diễn $v_{nghịch}$. Hệ đạt cân bằng khi hai tốc độ bằng nhau và duy trì bằng nhau.\n\nPhải đọc nhãn trục trước khi áp dụng tiêu chí, vì “hai đường gặp nhau” có ý nghĩa khác nhau trên hai loại đồ thị.',

  '**2. Nhận diện cân bằng từ bảng nồng độ**\nXét các mốc thời gian liên tiếp. Hệ bắt đầu cân bằng tại mốc sớm nhất mà từ đó nồng độ **tất cả chất đang theo dõi** giữ không đổi trong sai số phép đo. Một chất tạm thời có cùng giá trị ở hai mốc chưa đủ; cần xem xu hướng sau đó và dữ liệu của toàn hệ.',

  '**3. Nhận diện trên đồ thị nồng độ**\nKhi hệ đạt cân bằng, các đường nồng độ chuyển sang đoạn nằm ngang. Các đường không cần gặp nhau và giá trị nằm ngang của mỗi chất có thể khác nhau. Giao điểm của hai đường nồng độ chỉ cho biết tại thời điểm đó hai nồng độ bằng nhau, không phải tiêu chí của cân bằng.',

  '**4. Nhận diện trên đồ thị tốc độ**\nBan đầu, nếu chỉ có chất đầu, $v_{thuận}$ lớn còn $v_{nghịch}$ gần 0. Theo thời gian, $v_{thuận}$ giảm và $v_{nghịch}$ tăng. Tại cân bằng:\n$$v_{thuận}=v_{nghịch}>0$$\nSau đó hai đường trùng nhau hoặc cùng nằm ngang tại một giá trị dương nếu điều kiện không đổi.',

  '**5. Khi hệ bị tác động**\nNếu thêm/bớt chất, thay đổi áp suất hoặc nhiệt độ, đồ thị có thể xuất hiện biến đổi đột ngột rồi tiến đến đoạn ổn định mới. Cân bằng mới được nhận diện từ **đoạn ổn định sau tác động**, không phải ngay tại thời điểm đường bị nhảy. Sự thay đổi tức thời và sự chuyển dịch sau đó là hai giai đoạn khác nhau.',

  '**6. Cách đọc dữ liệu có sai số**\nDữ liệu thực nghiệm hiếm khi hoàn toàn trùng nhau. Nếu các giá trị dao động rất nhỏ quanh một mức so với độ chính xác của dụng cụ, có thể xem là ổn định. Tuy nhiên phải dựa trên tiêu chí hoặc sai số đề cung cấp, không tự ý làm tròn để ép dữ liệu thành cân bằng.',

  '**7. Quy trình làm bài**\n1. Đọc trục, đơn vị và chú giải đường.\n2. Xác định đây là nồng độ hay tốc độ.\n3. Với nồng độ: tìm khi tất cả giá trị ổn định.\n4. Với tốc độ: tìm khi $v_{thuận}=v_{nghịch}$.\n5. Đối chiếu các mốc sau đó để chắc trạng thái được duy trì.\n6. Viết kết luận kèm bằng chứng số liệu, không chỉ nêu một thời điểm.',

  '**8. Lỗi cần loại bỏ**\n- Chọn giao điểm của hai đường nồng độ làm thời điểm cân bằng.\n- Kết luận cân bằng khi chỉ một chất ổn định.\n- Cho rằng đoạn nằm ngang nghĩa phản ứng dừng hoặc nồng độ bằng 0.\n- Không phân biệt đường tốc độ với đường nồng độ.\n- Bỏ qua thời điểm hệ bị tác động và nhầm cân bằng cũ với cân bằng mới.'
];

export const chem11Qt03Theory: string[] = [
  '**1. Định nghĩa hằng số cân bằng nồng độ**\nVới phản ứng tổng quát:\n$$aA+bB\\rightleftharpoons cC+dD$$\nở một nhiệt độ xác định:\n$$K_C=\\frac{[C]^c[D]^d}{[A]^a[B]^b}$$\nTrong đó ngoặc vuông là **nồng độ mol tại trạng thái cân bằng**; hệ số tỉ lượng trở thành số mũ. Biểu thức được viết theo đúng chiều của phương trình.',

  '**2. Chất nào xuất hiện trong biểu thức?**\n- Chất khí và chất tan trong dung dịch được đưa vào biểu thức bằng nồng độ cân bằng.\n- **Chất rắn tinh khiết** và **chất lỏng tinh khiết** không viết trong $K_C$, vì “nồng độ hiệu dụng” của chúng được xem là hằng số và đã gộp vào $K_C$.\n\nVí dụ:\n$$CaCO_3(s)\\rightleftharpoons CaO(s)+CO_2(g)$$\n$$K_C=[CO_2]$$',

  '**3. Viết biểu thức đúng thứ tự**\nSản phẩm ở tử, chất phản ứng ở mẫu. Với:\n$$N_2+3H_2\\rightleftharpoons2NH_3$$\n$$K_C=\\frac{[NH_3]^2}{[N_2][H_2]^3}$$\nHệ số 3 trở thành số mũ của $[H_2]$, không phải $3[H_2]$. Trước khi viết phải cân bằng phương trình và xác định trạng thái chất.',

  '**4. Tính $K_C$ từ nồng độ cân bằng**\nQuy trình:\n1. Viết biểu thức kí hiệu trước.\n2. Kiểm tra mọi dữ kiện là nồng độ **cân bằng**, không phải ban đầu.\n3. Thay số, tính lũy thừa rồi tử và mẫu.\n4. Viết kết quả với độ chính xác hợp lí.\n\nVí dụ nếu $[N_2]=0{,}20$, $[H_2]=0{,}30$, $[NH_3]=0{,}40$ M thì:\n$$K_C=\\frac{0{,}40^2}{0{,}20\\times0{,}30^3}$$',

  '**5. Ý nghĩa định tính của độ lớn $K_C$**\n- $K_C\\gg1$: ở cân bằng, sản phẩm được ưu tiên tương đối.\n- $K_C\\ll1$: chất phản ứng được ưu tiên tương đối.\n- $K_C$ gần 1: cả hai phía thường cùng có lượng đáng kể.\n\n$K_C$ không trực tiếp cho biết phản ứng đạt cân bằng nhanh hay chậm, cũng không bảo đảm chất giới hạn chuyển hóa 100%.',

  '**6. $K_C$ phụ thuộc điều gì?**\nĐối với **một phương trình đã viết** ở nhiệt độ xác định, $K_C$ không đổi dù nồng độ ban đầu khác nhau. Thêm/bớt chất hoặc đổi áp suất có thể làm hệ chuyển dịch nhưng sau khi đạt cân bằng mới, biểu thức vẫn cho cùng $K_C$ nếu nhiệt độ giữ nguyên. Trong các tác động học ở chương này, **nhiệt độ** làm thay đổi $K_C$.',

  '**7. Đổi cách viết phản ứng**\nNếu đảo chiều phản ứng:\n$$K_C^{mới}=\\frac{1}{K_C^{cũ}}$$\nNếu nhân toàn bộ hệ số phương trình với $n$:\n$$K_C^{mới}=(K_C^{cũ})^n$$\nVì thế phải xem $K_C$ luôn gắn với phương trình cụ thể, không chỉ với tên phản ứng.',

  '**8. Cách nhận dạng và tự kiểm tra**\n- Hỏi “viết biểu thức” → cân bằng, lọc pha, đặt số mũ.\n- Hỏi “tính $K_C$” → chỉ dùng nồng độ cân bằng.\n- Hỏi “ý nghĩa” → kết luận về thành phần, không về tốc độ.\n- Hỏi sau khi đổi nồng độ ở cùng nhiệt độ → $K_C$ không đổi.\n\nTự kiểm tra: tử là sản phẩm chưa; số mũ đúng hệ số chưa; đã bỏ chất rắn/lỏng tinh khiết chưa; có dùng nhầm nồng độ ban đầu không.',

  '**9. Lỗi cần loại bỏ**\n- Viết $K_C$ trước khi cân bằng phương trình.\n- Nhân hệ số với nồng độ thay vì dùng làm số mũ.\n- Đưa chất rắn hoặc chất lỏng tinh khiết vào biểu thức.\n- Thay nồng độ ban đầu vào $K_C$.\n- Cho rằng $K_C$ lớn nghĩa phản ứng nhanh.\n- Cho rằng mọi thay đổi thành phần đều làm $K_C$ đổi.'
];

export const chem11Qt04Theory: string[] = [
  '**1. Nguyên lí Le Chatelier**\nKhi một hệ đang cân bằng bị tác động từ bên ngoài, hệ chuyển dịch theo chiều làm **giảm bớt tác động đó** và thiết lập cân bằng mới. Nguyên lí cho phép dự đoán chiều chuyển dịch, không có nghĩa hệ “xóa hoàn toàn” tác động hay quay lại đúng thành phần cũ.',

  '**2. Thay đổi nồng độ**\n- Tăng nồng độ một chất → cân bằng chuyển theo chiều tiêu thụ bớt chất đó.\n- Giảm nồng độ một chất → cân bằng chuyển theo chiều tạo thêm chất đó.\n\nVí dụ với $N_2+3H_2\\rightleftharpoons2NH_3$, thêm $H_2$ làm cân bằng chuyển sang phải; lấy bớt $NH_3$ cũng làm cân bằng chuyển sang phải. Cần xác định chất nằm ở vế nào, không học máy móc “thêm thì sang phải”.',

  '**3. Biến đổi tức thời và chuyển dịch sau đó**\nKhi thêm một chất, nồng độ chất đó thay đổi **ngay lập tức**. Sau đó phản ứng diễn ra ưu tiên theo một chiều làm nồng độ các chất tiếp tục thay đổi đến cân bằng mới. Phải tách hai giai đoạn khi đọc bảng/đồ thị; chuyển dịch không có nghĩa nồng độ chất vừa thêm sẽ quay về đúng giá trị cũ.',

  '**4. Áp suất và thể tích của hệ khí**\nGiảm thể tích làm áp suất tăng; hệ ưu tiên phía có **tổng số mol khí nhỏ hơn**. Tăng thể tích làm áp suất giảm; hệ ưu tiên phía có tổng số mol khí lớn hơn. Chỉ đếm hệ số của các chất mang trạng thái $(g)$.\n\nNếu tổng hệ số khí hai vế bằng nhau, thay đổi áp suất bằng nén/giãn thể tích không làm cân bằng chuyển dịch.',

  '**5. Trường hợp khí trơ và pha tinh khiết**\n- Thêm chất rắn hoặc chất lỏng tinh khiết không làm chuyển dịch nếu pha đó vẫn còn, vì chúng không xuất hiện trong biểu thức cân bằng.\n- Với khí trơ, ảnh hưởng phụ thuộc điều kiện. Trong bài phổ thông, thêm khí trơ vào bình **thể tích không đổi** không đổi áp suất riêng phần của các chất phản ứng nên không gây chuyển dịch. Không được kết luận chỉ từ việc “áp suất tổng tăng”.',

  '**6. Ảnh hưởng đến $K_C$**\nỞ nhiệt độ không đổi, thay đổi nồng độ, thể tích hoặc áp suất làm thành phần cân bằng thay đổi nhưng **không làm đổi $K_C$**. Hệ tự điều chỉnh cho đến khi các nồng độ mới lại thỏa mãn đúng giá trị $K_C$.',

  '**7. Quy trình dự đoán chiều chuyển dịch**\n1. Viết phương trình cân bằng và trạng thái chất.\n2. Xác định tác động: nồng độ hay áp suất/thể tích.\n3. Với nồng độ, tìm chiều tiêu thụ hoặc tạo thêm chất bị tác động.\n4. Với áp suất, đếm riêng mol khí hai vế.\n5. Nêu rõ sang trái, sang phải hay không chuyển dịch.\n6. Trả lời riêng về $K_C$: không đổi nếu nhiệt độ không đổi.',

  '**8. Ví dụ nhanh**\n$$2SO_2(g)+O_2(g)\\rightleftharpoons2SO_3(g)$$\n- Thêm $O_2$: chuyển sang phải.\n- Lấy bớt $SO_3$: chuyển sang phải.\n- Tăng áp suất bằng giảm thể tích: trái có 3 mol khí, phải có 2 nên chuyển sang phải.\n- Thêm xúc tác: không chuyển dịch.\n- Tất cả tác động trên ở cùng nhiệt độ: $K_C$ không đổi.',

  '**9. Lỗi cần loại bỏ**\n- Dùng câu “thêm chất dịch sang phía đối diện” mà không xác định vế.\n- Cho rằng tăng áp suất luôn gây chuyển dịch.\n- Đếm cả chất rắn và lỏng khi so số mol khí.\n- Nhầm biến đổi tức thời với kết quả cân bằng mới.\n- Cho rằng cân bằng chuyển dịch thì $K_C$ phải đổi.\n- Suy luận khí trơ chỉ từ áp suất tổng.'
];

export const chem11Qt05Theory: string[] = [
  '**1. Xem nhiệt như một thành phần của cân bằng**\n- Chiều thuận **tỏa nhiệt** ($\\Delta H<0$): có thể hình dung nhiệt ở phía sản phẩm.\n- Chiều thuận **thu nhiệt** ($\\Delta H>0$): có thể hình dung nhiệt ở phía chất phản ứng.\n\nTăng nhiệt độ là “thêm nhiệt”, hệ ưu tiên chiều thu nhiệt; giảm nhiệt độ là “lấy bớt nhiệt”, hệ ưu tiên chiều tỏa nhiệt.',

  '**2. Nhiệt độ và chiều chuyển dịch**\nVới chiều thuận tỏa nhiệt: tăng nhiệt độ làm chuyển dịch sang trái, giảm nhiệt độ làm chuyển dịch sang phải. Với chiều thuận thu nhiệt thì ngược lại. Không có quy tắc “tăng nhiệt độ luôn sang phải”; phải xác định dấu $\\Delta H$ của đúng chiều phản ứng đang viết.',

  '**3. Nhiệt độ làm thay đổi $K_C$**\nNhiệt độ là tác động trong chương này có thể làm thay đổi hằng số cân bằng:\n- Phản ứng thuận tỏa nhiệt: tăng nhiệt độ → $K_C$ của chiều thuận giảm.\n- Phản ứng thuận thu nhiệt: tăng nhiệt độ → $K_C$ của chiều thuận tăng.\n\nNồng độ, áp suất và xúc tác không làm đổi $K_C$ khi nhiệt độ giữ nguyên.',

  '**4. Vai trò của chất xúc tác**\nChất xúc tác tạo con đường phản ứng có năng lượng hoạt hóa thấp hơn cho **cả chiều thuận và chiều nghịch**. Vì vậy:\n- Hai chiều đều nhanh hơn.\n- Hệ đạt cân bằng sớm hơn.\n- Thành phần cân bằng không đổi.\n- $K_C$ không đổi.\n\nNếu hệ đã cân bằng, thêm xúc tác không tạo ra sự chuyển dịch quan sát được.',

  '**5. Hiệu suất cân bằng khác với tốc độ sản xuất**\nMột điều kiện có thể cho tỉ lệ sản phẩm cân bằng cao nhưng phản ứng quá chậm; điều kiện khác giúp phản ứng nhanh nhưng hiệu suất cân bằng thấp. Trong công nghiệp cần tối ưu **lượng sản phẩm theo thời gian**, năng lượng, an toàn, chi phí thiết bị và khả năng tách–tuần hoàn chất, không chỉ tối đa hóa một đại lượng.',

  '**6. Ví dụ quá trình Haber**\n$$N_2(g)+3H_2(g)\\rightleftharpoons2NH_3(g),\\quad\\Delta H<0$$\n- Áp suất cao ưu tiên phía 2 mol khí, tăng hiệu suất $NH_3$ nhưng làm thiết bị đắt và tăng rủi ro.\n- Nhiệt độ thấp có lợi cho cân bằng tỏa nhiệt nhưng tốc độ chậm.\n- Nhiệt độ vừa phải và xúc tác được dùng để đạt tốc độ hợp lí.\n- Tách $NH_3$ và tuần hoàn $N_2,H_2$ giúp nâng hiệu quả toàn quy trình.',

  '**7. Quy trình làm bài điều kiện sản xuất**\n1. Xác định $\\Delta H$ và số mol khí hai vế.\n2. Phân tích riêng ảnh hưởng của nhiệt độ lên cân bằng và tốc độ.\n3. Phân tích áp suất lên cân bằng và chi phí/an toàn.\n4. Nêu xúc tác chỉ cải thiện tốc độ đạt cân bằng.\n5. Xét tách sản phẩm, tuần hoàn nguyên liệu nếu bối cảnh cho phép.\n6. Chọn điều kiện thỏa hiệp và giải thích từng tiêu chí.',

  '**8. Lỗi cần loại bỏ**\n- Tăng nhiệt độ luôn làm cân bằng sang phải.\n- Xúc tác làm tăng $K_C$ hoặc tăng hiệu suất cân bằng.\n- Nhiệt độ càng thấp càng tốt cho phản ứng tỏa nhiệt mà bỏ qua tốc độ.\n- Áp suất càng cao càng tốt mà bỏ qua năng lượng, an toàn, chi phí.\n- Không tách hiệu suất tại cân bằng khỏi năng suất theo thời gian.'
];

export const chem11Qt06Theory: string[] = [
  '**1. Hệ cân bằng màu $NO_2/N_2O_4$**\n$$2NO_2(g)\\rightleftharpoons N_2O_4(g)$$\n$NO_2$ có màu nâu; $N_2O_4$ gần như không màu. Vì vậy màu nâu đậm hơn cho biết tỉ lệ $NO_2$ lớn hơn, còn màu nhạt hơn cho biết cân bằng nghiêng nhiều hơn về $N_2O_4$. Màu chỉ là chỉ báo tương đối, không tự cho nồng độ chính xác.',

  '**2. Ảnh hưởng của nhiệt độ**\nChiều tạo $N_2O_4$ là chiều tỏa nhiệt:\n$$2NO_2\\rightarrow N_2O_4,\\quad\\Delta H<0$$\n- Làm lạnh → ưu tiên chiều tỏa nhiệt → tạo thêm $N_2O_4$ → màu nâu nhạt.\n- Làm nóng → ưu tiên chiều thu nhiệt là chiều nghịch → tạo thêm $NO_2$ → màu nâu đậm.',

  '**3. Ảnh hưởng của áp suất**\nVế trái có 2 mol khí, vế phải có 1 mol khí. Tăng áp suất bằng cách giảm thể tích làm cân bằng chuyển sang phải, tăng $N_2O_4$ và làm màu nhạt sau khi ổn định. Tuy nhiên ngay khi nén, nồng độ mọi khí đều tăng nên màu có thể đậm lên tức thời trước khi hệ chuyển dịch; cần phân biệt hai giai đoạn.',

  '**4. Thiết kế thí nghiệm có kiểm soát**\nMuốn khảo sát nhiệt độ, chỉ thay đổi nhiệt độ; giữ cố định lượng khí, thể tích ống, thời gian chờ, nguồn sáng và cách quan sát. Nên dùng cùng một ống kín lần lượt ở các bể nhiệt hoặc các ống tương đương. Biến độc lập là nhiệt độ; biến phụ thuộc là mức màu; các yếu tố còn lại là biến kiểm soát.',

  '**5. Thời điểm đọc kết quả**\nSau khi chuyển ống sang bể nóng/lạnh, phải chờ đủ thời gian để màu ổn định rồi mới coi là trạng thái cân bằng mới. Ghi nhận màu tức thời chỉ phản ánh quá trình hệ đang điều chỉnh. Khi so dữ liệu, cần dùng cùng tiêu chí màu hoặc công cụ đo hấp thụ nếu có.',

  '**6. An toàn bắt buộc**\n$NO_2$ là khí độc, gây kích ứng mạnh và tổn thương đường hô hấp. Chỉ quan sát **hệ kín được chuẩn bị an toàn**, video hoặc mô phỏng. Không mở nút, không ngửi trực tiếp, không tự điều chế trong lớp học thông thường. Nếu ống có dấu hiệu nứt/rò, phải cách ly và báo giáo viên.',

  '**7. Đọc bảng và đánh giá kết luận**\n1. Kiểm tra nhiệt độ và chỉ số màu.\n2. Xem màu có biến đổi nhất quán qua nhiều mức nhiệt hay không.\n3. Gắn màu với tỉ lệ $NO_2/N_2O_4$.\n4. Dùng Le Chatelier để suy chiều thu/tỏa nhiệt.\n5. Xét số lần lặp, thời gian chờ và biến gây nhiễu trước khi khẳng định quan hệ nhân quả.',

  '**8. Lỗi cần loại bỏ**\n- Gắn màu nâu cho $N_2O_4$.\n- Cho rằng màu đậm nghĩa tổng lượng khí chắc chắn nhiều hơn.\n- Đọc màu ngay sau khi thay đổi nhiệt độ và gọi đó là cân bằng mới.\n- Thay đổi đồng thời nhiệt độ, thể tích và lượng khí.\n- Mở ống hoặc ngửi khí để nhận biết.\n- Suy ra định lượng nồng độ chỉ từ mô tả màu định tính.'
];

export const chem11Qt07Theory: string[] = [
  '**1. Chất điện li và sự điện li**\n**Chất điện li** là chất khi tan trong nước phân li thành ion, làm dung dịch dẫn điện. Nhiều hợp chất ion còn dẫn điện khi nóng chảy vì ion có thể chuyển động. Acid, base và muối là các nhóm chất điện li thường gặp. Đường, ethanol dù tan trong nước nhưng tồn tại chủ yếu dưới dạng phân tử nên là chất không điện li.',

  '**2. Điều kiện để dẫn điện**\nMuốn dẫn điện phải có các hạt mang điện **tự do chuyển động**. Tinh thể NaCl rắn chứa ion nhưng ion bị giữ tại nút mạng nên không dẫn điện tốt; NaCl nóng chảy hoặc tan trong nước thì ion di chuyển được. Vì thế “có ion trong công thức” chưa đủ để kết luận trạng thái rắn dẫn điện.',

  '**3. Điện li mạnh và điện li yếu**\n- Chất điện li mạnh phân li gần như hoàn toàn, thường viết mũi tên một chiều: $NaCl\\rightarrow Na^++Cl^-$.\n- Chất điện li yếu chỉ phân li một phần và thiết lập cân bằng: $CH_3COOH\\rightleftharpoons H^++CH_3COO^-$.\n\n“Mạnh/yếu” nói về **mức độ điện li**, còn “đậm đặc/loãng” nói về lượng chất tan trong một thể tích. Một dung dịch acid mạnh có thể rất loãng.',

  '**4. Viết phương trình điện li**\nQuy trình:\n1. Xác định chất thuộc loại điện li mạnh hay yếu.\n2. Tách thành đúng ion thực sự tồn tại trong dung dịch.\n3. Đặt hệ số theo chỉ số trong công thức.\n4. Kiểm tra số nguyên tử và tổng điện tích hai vế.\n\nVí dụ:\n$$Al_2(SO_4)_3\\rightarrow2Al^{3+}+3SO_4^{2-}$$\nĐiện tích hai vế đều bằng 0: $2(+3)+3(-2)=0$.',

  '**5. Không tách sai ion đa nguyên tử**\nTrong điện li thông thường, các ion đa nguyên tử bền như $SO_4^{2-}$, $NO_3^-$, $NH_4^+$ được giữ nguyên. Không viết $Na_2SO_4$ thành $2Na^++S^{6+}+4O^{2-}$. Phương trình điện li mô tả các tiểu phân tồn tại trong dung dịch, không phải phân rã chất thành từng nguyên tử.',

  '**6. Liên hệ số ion với nồng độ**\nNếu chất điện li mạnh $CaCl_2$ có nồng độ $C$ và coi điện li hoàn toàn:\n$$[Ca^{2+}]=C,\\qquad[Cl^-]=2C$$\nHệ số ion phải được xét khi tính tổng nồng độ ion, điện tích hoặc pH của base mạnh nhiều nấc. Tuy nhiên độ dẫn điện còn phụ thuộc loại ion, độ linh động và nhiệt độ nên không chỉ đếm số ion một cách máy móc.',

  '**7. Đọc bằng chứng thực nghiệm**\nBóng đèn sáng hoặc máy đo cho độ dẫn lớn là bằng chứng có ion chuyển động. Khi so hai dung dịch phải kiểm soát nồng độ, nhiệt độ, thể tích, khoảng cách điện cực và dụng cụ. Độ dẫn thấp có thể do chất điện li yếu **hoặc** dung dịch rất loãng; không thể kết luận độ mạnh chỉ từ một số đo thiếu điều kiện.',

  '**8. Cách làm và lỗi cần tránh**\n- Nhận diện: chất tan có tạo ion không.\n- Viết phương trình: đúng mũi tên, hệ số và điện tích.\n- So mạnh/yếu: xét tỉ lệ phân li, không xét riêng nồng độ.\n- So độ dẫn: xét đồng thời số ion và điều kiện thí nghiệm.\n\nLỗi thường gặp: mọi chất tan đều điện li; chất mạnh luôn đậm đặc; tinh thể ion rắn dẫn điện như dung dịch; không bảo toàn điện tích; tách ion đa nguyên tử thành nguyên tử.'
];

export const chem11Qt08Theory: string[] = [
  '**1. Định nghĩa Brønsted–Lowry**\n- **Acid Brønsted** là chất có khả năng cho proton $H^+$.\n- **Base Brønsted** là chất có khả năng nhận proton $H^+$.\n\nTrong một phản ứng acid–base, proton được chuyển trực tiếp từ acid sang base. Khái niệm này rộng hơn cách nhận diện chỉ dựa vào công thức có H hay nhóm OH.',

  '**2. Theo dõi proton trong phản ứng**\nXét:\n$$NH_3+H_2O\\rightleftharpoons NH_4^++OH^-$$\n$NH_3$ nhận một proton để thành $NH_4^+$ nên là base; $H_2O$ cho một proton để thành $OH^-$ nên là acid. Cách chắc chắn nhất là so công thức trước và sau, không phán đoán vai trò chỉ từ tên chất.',

  '**3. Cặp acid–base liên hợp**\nKhi acid cho proton, nó tạo **base liên hợp**. Khi base nhận proton, nó tạo **acid liên hợp**. Hai thành viên của một cặp liên hợp khác nhau đúng **một proton**:\n$$HA/A^-,\\qquad BH^+/B$$\nTrong ví dụ trên, các cặp là $NH_4^+/NH_3$ và $H_2O/OH^-$.',

  '**4. Cách ghép cặp liên hợp**\n1. Chọn một chất ở vế trái.\n2. Tìm chất ở vế phải có cùng khung nguyên tử và chỉ hơn/kém đúng $H^+$.\n3. Kiểm tra điện tích: mất $H^+$ làm điện tích giảm 1; nhận $H^+$ làm điện tích tăng 1.\n4. Viết theo thứ tự acid/base.\n\nKhông ghép hai chất chỉ vì cùng nằm một vế hoặc cùng có H.',

  '**5. Vai trò phụ thuộc phản ứng**\nMột chất không nhất thiết luôn là acid hoặc luôn là base. Nước là acid khi cho proton cho $NH_3$, nhưng là base khi nhận proton từ $HCl$. Vì vậy phải xác định vai trò trong **phản ứng cụ thể**, không gắn nhãn vĩnh viễn cho công thức.',

  '**6. Chất lưỡng tính acid–base**\nChất lưỡng tính có thể vừa cho vừa nhận proton trong các phản ứng khác nhau. Ví dụ $HCO_3^-$:\n$$HCO_3^-+H_2O\\rightleftharpoons CO_3^{2-}+H_3O^+$$\n($HCO_3^-$ cho proton)\n$$HCO_3^-+H_2O\\rightleftharpoons H_2CO_3+OH^-$$\n($HCO_3^-$ nhận proton). Muốn chứng minh lưỡng tính cần chỉ ra cả hai khả năng.',

  '**7. Liên hệ điện tích khi cho–nhận proton**\nNhận $H^+$ làm điện tích đại số tăng 1: $NH_3\\rightarrow NH_4^+$. Cho $H^+$ làm điện tích giảm 1: $H_2O\\rightarrow OH^-$. Quy tắc điện tích là công cụ kiểm tra, nhưng vai trò acid/base vẫn phải dựa trên việc cho hoặc nhận proton.',

  '**8. Quy trình và lỗi cần tránh**\n1. Đánh dấu chất trước và sau có cùng khung nguyên tử.\n2. Theo dõi đúng một $H^+$.\n3. Chất cho là acid, chất nhận là base.\n4. Ghép các cặp liên hợp.\n5. Nếu hỏi lưỡng tính, xét ít nhất hai phản ứng.\n\nLỗi thường gặp: có H là acid; có OH là base; ghép cặp không khác đúng một proton; nhầm chiều thay đổi điện tích; gán vai trò cố định cho nước hoặc $HCO_3^-$.'
];

export const chem11Qt09Theory: string[] = [
  '**1. Sự tự điện li của nước**\nMột phần rất nhỏ các phân tử nước chuyển proton cho nhau:\n$$2H_2O\\rightleftharpoons H_3O^++OH^-$$\nTrong cách viết giản lược thường dùng $H^+$ thay cho $H_3O^+$. Vì thế nước tinh khiết vẫn có ion và dẫn điện rất yếu; “trung tính” không có nghĩa không có ion.',

  '**2. Tích số ion của nước**\n$$K_w=[H^+][OH^-]$$\nỞ 25 °C:\n$$K_w=10^{-14}$$\nTrong nước trung tính:\n$$[H^+]=[OH^-]=10^{-7}\\,\\mathrm{M}$$\nGiá trị 7 cho trung tính gắn với 25 °C; khi nhiệt độ thay đổi, $K_w$ và pH trung tính có thể thay đổi.',

  '**3. Phân loại môi trường ở 25 °C**\n- Acid: $[H^+]>[OH^-]$, pH < 7.\n- Trung tính: $[H^+]=[OH^-]$, pH = 7.\n- Base: $[H^+]<[OH^-]$, pH > 7.\n\nCó thể dùng $K_w$ để tìm ion còn lại:\n$$[OH^-]=\\frac{10^{-14}}{[H^+]},\\qquad[H^+]=\\frac{10^{-14}}{[OH^-]}$$',

  '**4. pH và pOH**\n$$pH=-\\lg[H^+],\\qquad pOH=-\\lg[OH^-]$$\nỞ 25 °C:\n$$pH+pOH=14$$\nCác công thức dùng nồng độ mol/L. Khi biết $[OH^-]$, tính pOH rồi suy pH; không thay $[OH^-]$ trực tiếp vào công thức pH.',

  '**5. Acid mạnh và base mạnh đơn giản**\nTrong phạm vi bài tập cơ bản, coi acid/base mạnh điện li hoàn toàn. Ví dụ:\n- $HCl\\rightarrow H^++Cl^-$ nên $[H^+]\\approx C_{HCl}$.\n- $NaOH\\rightarrow Na^++OH^-$ nên $[OH^-]\\approx C_{NaOH}$.\n- $Ca(OH)_2\\rightarrow Ca^{2+}+2OH^-$ nên $[OH^-]\\approx2C_{Ca(OH)_2}$.\n\nPhải xét hệ số tạo ion; không mặc định nồng độ ion bằng nồng độ chất.',

  '**6. Pha loãng và trộn dung dịch**\nKhi pha loãng, số mol chất tan được bảo toàn:\n$$C_1V_1=C_2V_2$$\nKhi trộn acid mạnh và base mạnh, trước hết tính mol $H^+$ và $OH^-$, cho chúng phản ứng:\n$$H^++OH^-\\rightarrow H_2O$$\nSau đó tính lượng ion dư trên **tổng thể tích sau trộn**, rồi mới tính pH hoặc pOH.',

  '**7. Ví dụ quy trình tính**\nDung dịch $Ca(OH)_2$ 0,005 M ở 25 °C:\n$$[OH^-]=2\\times0{,}005=0{,}010=10^{-2}\\,\\mathrm{M}$$\n$$pOH=2\\Rightarrow pH=12$$\nĐiểm mấu chốt là hệ số 2. Nếu bỏ hệ số, kết quả pH sẽ sai.',

  '**8. Kiểm tra độ hợp lí**\n- $[H^+]$ tăng 10 lần → pH giảm 1 đơn vị.\n- Acid phải cho pH < 7, base phải cho pH > 7 ở 25 °C.\n- Sau pha loãng acid, pH tăng về gần 7; sau pha loãng base, pH giảm về gần 7.\n- Nồng độ ion không thể âm; nếu trộn, chỉ một trong $H^+$ hoặc $OH^-$ có thể dư sau trung hòa.',

  '**9. Lỗi cần loại bỏ**\n- Cho rằng nước trung tính không có $H^+$ và $OH^-$.\n- Bỏ dấu trừ trong công thức pH.\n- Xem thang pH là tuyến tính.\n- Tính pH trực tiếp từ $[OH^-]$.\n- Bỏ hệ số điện li của base nhiều $OH^-$.\n- Không cộng thể tích sau khi trộn.\n- Áp dụng pH trung tính bằng 7 cho mọi nhiệt độ mà không có điều kiện.'
];

export const chem11Qt10Theory: string[] = [
  '**1. Chất chỉ thị acid–base**\nChất chỉ thị là chất có màu phụ thuộc pH do các dạng acid và base của nó có màu khác nhau. Chỉ thị đổi màu trong **một khoảng pH**, không đổi đột ngột tại một giá trị duy nhất. Vì vậy màu quan sát thường chỉ cho một khoảng pH hoặc kết luận định tính.',

  '**2. Một số chỉ thị thường gặp**\n- Quỳ tím: đỏ trong môi trường acid, xanh trong môi trường base, tím gần trung tính; chủ yếu dùng nhận biết định tính.\n- Phenolphthalein: không màu ở vùng acid–gần trung tính, hồng trong vùng base thích hợp.\n- Methyl orange: đỏ ở vùng acid mạnh, vàng ở vùng pH cao hơn khoảng chuyển màu.\n- Chỉ thị vạn năng: so màu với thang chuẩn để ước lượng pH.\n\nKhi đề cung cấp bảng khoảng chuyển màu, phải ưu tiên đúng dữ liệu của đề.',

  '**3. Một màu không cho pH chính xác**\nNếu phenolphthalein không màu, chỉ có thể kết luận pH nằm dưới giới hạn chuyển sang hồng theo bảng; không thể khẳng định pH = 7. Tương tự, quỳ tím đỏ cho biết môi trường acid nhưng không đo được pH chính xác.',

  '**4. Phối hợp nhiều chỉ thị**\nMỗi quan sát tạo một điều kiện về pH. Muốn thu hẹp khoảng pH, lấy **giao** các điều kiện. Ví dụ chỉ thị A cho $pH>4{,}4$ và chỉ thị B cho $pH<8{,}2$ thì kết luận:\n$$4{,}4<pH<8{,}2$$\nKhông lấy trung bình hai mốc và cũng không chọn tùy ý một giá trị ở giữa.',

  '**5. Chỉ thị vạn năng và máy đo pH**\nChỉ thị vạn năng cho kết quả gần đúng, phụ thuộc ánh sáng, màu vốn có của mẫu và cách so thang màu. Máy đo pH cho số đo định lượng tốt hơn nhưng cần hiệu chuẩn, rửa điện cực và chờ ổn định. Phương pháp phải phù hợp độ chính xác mà câu hỏi yêu cầu.',

  '**6. pH trong thực tiễn**\npH ảnh hưởng đến đất trồng, nước nuôi sinh vật, hoạt động enzyme, thực phẩm và xử lí môi trường. Khi ra quyết định cần:\n1. Xác định khoảng pH phù hợp từ dữ liệu.\n2. So sánh từng mẫu với khoảng đó.\n3. Xét sai số, thời điểm đo và yếu tố gây nhiễu.\n4. Đề xuất điều chỉnh có kiểm soát, tránh thêm hóa chất tùy tiện.',

  '**7. Diễn giải thang logarit**\nChênh lệch 1 đơn vị pH tương ứng $[H^+]$ khác 10 lần. Ví dụ mẫu pH 5 có $[H^+]$ lớn gấp 100 lần mẫu pH 7. Vì vậy chênh lệch pH nhỏ về con số vẫn có thể đáng kể về hóa học.',

  '**8. Quy trình làm bài và lỗi cần tránh**\n- Đọc đúng tên chỉ thị và bảng màu.\n- Chuyển màu thành khoảng pH.\n- Có nhiều chỉ thị thì lấy giao.\n- Với dữ liệu thực tế, so khoảng phù hợp rồi lập luận.\n\nLỗi thường gặp: một màu ứng với một pH duy nhất; dùng bảng của chỉ thị khác; không lấy giao các khoảng; coi pH tuyến tính; kết luận vượt quá độ chính xác của phương pháp đo.'
];

export const chem11Qt11Theory: string[] = [
  '**1. Điện li và phản ứng của ion với nước là hai bước khác nhau**\nKhi muối tan, nó điện li tạo ion. Sau đó một số ion có thể trao đổi proton hoặc tương tác thuận nghịch với nước, thường gọi là thủy phân ion. Ví dụ $Na_2CO_3$ điện li tạo $Na^+$ và $CO_3^{2-}$; chính $CO_3^{2-}$ tiếp tục tương tác với nước làm dung dịch có tính base.',

  '**2. Ion carbonate làm môi trường base**\n$$CO_3^{2-}+H_2O\\rightleftharpoons HCO_3^-+OH^-$$\n$CO_3^{2-}$ nhận proton từ nước nên là base Brønsted; nước cho proton. $OH^-$ được tạo ra làm pH tăng. Không phải nguyên tử O trong carbonate “tách ra” thành $OH^-$; đây là quá trình chuyển proton.',

  '**3. Ion kim loại điện tích lớn làm môi trường acid**\nTrong mô hình phổ thông, các ion như $Al^{3+}$, $Fe^{3+}$ tương tác với phân tử nước phối trí và làm nước dễ nhường proton, nên dung dịch có xu hướng acid. Có thể biểu diễn giản lược quá trình tạo $H^+$; bản chất không phải ion kim loại tự phân li ra $H^+$.',

  '**4. Liên hệ với hydroxide ít tan**\nKhi pH tăng, $Al^{3+}$ và $Fe^{3+}$ có thể tạo các hydroxide ít tan như $Al(OH)_3$, $Fe(OH)_3$. Các hạt hydroxide keo có thể cuốn theo tạp chất trong xử lí nước. Hiện tượng phụ thuộc pH và lượng chất; không được coi mọi ion kim loại đều kết tủa hoàn toàn trong mọi điều kiện.',

  '**5. Dự đoán môi trường dung dịch muối**\n1. Viết điện li của muối.\n2. Xét từng ion có phản ứng đáng kể với nước hay không.\n3. Ion tạo thêm $H^+$ → xu hướng acid; tạo thêm $OH^-$ → xu hướng base.\n4. Nếu các ảnh hưởng rất yếu hoặc cân bằng nhau trong phạm vi xét → gần trung tính.\n\nKhông dự đoán chỉ dựa vào dấu điện tích: cation không phải lúc nào cũng làm acid và anion không phải lúc nào cũng làm base.',

  '**6. Viết phương trình cân bằng ion–nước**\nPhải bảo toàn nguyên tử và điện tích, dùng mũi tên thuận nghịch. Theo dõi proton giúp kiểm tra phương trình. Với carbonate, hai vế đều có điện tích $-2$: vế phải $-1+(-1)=-2$. Không viết mũi tên một chiều nếu đang mô tả một cân bằng yếu.',

  '**7. Ứng dụng xử lí nước**\nMuối aluminium hoặc iron(III) có thể được dùng làm chất keo tụ. Hiệu quả phụ thuộc liều lượng và pH: quá ít có thể không đủ keo tụ; quá nhiều có thể làm pH thay đổi và để lại ion dư. Khi đọc bảng dữ liệu, cần tìm vùng cho độ đục thấp nhưng các chỉ tiêu khác vẫn phù hợp, không chỉ chọn liều lớn nhất.',

  '**8. Cách phân tích dữ liệu và hiện tượng**\n- Xác định ion đang chi phối.\n- Viết cân bằng tạo $H^+$ hoặc $OH^-$.\n- Dự đoán chiều biến đổi pH.\n- Đối chiếu với màu chỉ thị, kết tủa hoặc độ đục.\n- Nêu giới hạn: dữ liệu cho tương quan hay đủ chứng minh nguyên nhân; có kiểm soát biến hay không.',

  '**9. Lỗi cần loại bỏ**\n- Đồng nhất điện li với thủy phân.\n- Suy môi trường chỉ từ dấu điện tích ion.\n- Viết phản ứng thủy phân một chiều và hoàn toàn.\n- Cho rằng $CO_3^{2-}$ tự giải phóng $OH^-$.\n- Kết luận mọi muối đều trung tính.\n- Chọn liều chất xử lí cao nhất mà không xét pH, cặn và ion dư.'
];

export const chem11Qt12Theory: string[] = [
  '**1. Mục đích của chuẩn độ acid–base**\nChuẩn độ dùng dung dịch có nồng độ đã biết (**dung dịch chuẩn**) để xác định nồng độ dung dịch cần phân tích. Ta đo thể tích dung dịch chuẩn cần dùng để phản ứng vừa đủ theo tỉ lượng với một thể tích chính xác của mẫu.',

  '**2. Điểm tương đương và điểm kết thúc**\n- **Điểm tương đương:** lượng hai chất đã phản ứng đúng tỉ lệ của phương trình hóa học.\n- **Điểm kết thúc:** tín hiệu thực nghiệm dùng để dừng chuẩn độ, thường là sự đổi màu bền đầu tiên của chỉ thị.\n\nHai điểm cần gần nhau nhưng không hoàn toàn đồng nhất. Chọn chỉ thị thích hợp giúp sai lệch nhỏ.',

  '**3. Vai trò của dụng cụ**\n- **Burette:** chứa và cấp thể tích biến đổi của dung dịch chuẩn; đọc số đầu và cuối.\n- **Pipette bầu:** lấy một thể tích mẫu cố định với độ chính xác cao.\n- **Bình tam giác:** chứa mẫu, chỉ thị và cho phép lắc trộn không bắn ra ngoài.\n- **Phễu:** dùng khi rót dung dịch vào burette nhưng phải bỏ ra trước khi chuẩn độ.',

  '**4. Rửa và tráng dụng cụ**\nBurette được rửa sạch rồi tráng bằng dung dịch chuẩn để nước còn lại không pha loãng dung dịch. Pipette được tráng bằng dung dịch mẫu. Bình tam giác có thể còn một ít nước cất vì nước chỉ làm tăng thể tích hỗn hợp, không đổi số mol mẫu đã lấy. Đây là chỗ dễ nhầm giữa “pha loãng nồng độ tức thời” và “thay đổi số mol chất phân tích”.',

  '**5. Đọc burette đúng cách**\n- Loại bọt khí ở đầu burette.\n- Đặt mắt ngang mặt khum; với dung dịch trong suốt thường đọc đáy mặt khum.\n- Thang burette tăng từ trên xuống.\n- Ghi số đọc đầu và cuối với cùng độ chính xác.\n- Thể tích đã dùng:\n$$V_{dùng}=V_{cuối}-V_{đầu}$$\nKhông dùng trực tiếp số đọc cuối.',

  '**6. Quy trình chuẩn độ cơ bản**\n1. Tráng và nạp burette bằng dung dịch chuẩn, loại bọt khí, ghi số đọc đầu.\n2. Dùng pipette lấy chính xác mẫu vào bình tam giác.\n3. Thêm lượng nhỏ chỉ thị thích hợp.\n4. Cho dung dịch chuẩn từ burette xuống và lắc đều.\n5. Gần điểm kết thúc, thêm từng giọt; dừng ở màu bền đầu tiên theo hướng dẫn.\n6. Ghi số đọc cuối và tính titre.\n7. Làm lần thô rồi lặp các lần định lượng.',

  '**7. Lỗi thao tác và chiều sai lệch**\n- Burette còn nước → dung dịch chuẩn bị pha loãng, cần thể tích lớn hơn.\n- Pipette còn nước → mẫu bị pha loãng trước khi lấy đủ số mol dự kiến.\n- Bọt khí ở đầu burette → một phần thể tích dùng để lấp đầu burette, titre biểu kiến sai.\n- Thêm quá điểm kết thúc → titre quá lớn.\n- Dùng quá nhiều chỉ thị → có thể gây sai lệch và màu khó quan sát.',

  '**8. An toàn và cách làm bài**\nĐeo kính, dùng quả bóp pipette, không hút bằng miệng, rửa ngay khi hóa chất bắn. Khi làm câu hỏi:\n1. Xác định dung dịch chuẩn và chất phân tích.\n2. Phân biệt điểm tương đương với điểm kết thúc.\n3. Gắn đúng dụng cụ với chức năng.\n4. Kiểm tra rửa–tráng, bọt khí, mặt khum và thể tích.\n5. Dự đoán lỗi làm titre lớn hay nhỏ nếu đề hỏi.',

  '**9. Lỗi cần loại bỏ**\n- Đồng nhất tuyệt đối điểm kết thúc và điểm tương đương.\n- Dùng số đọc cuối làm titre.\n- Tráng burette bằng nước ngay trước khi nạp dung dịch chuẩn.\n- Cho rằng nước cất trong bình tam giác làm đổi số mol mẫu.\n- Đọc burette từ dưới lên hoặc lệch mắt.\n- Dùng miệng hút pipette.'
];

export const chem11Qt13Theory: string[] = [
  '**1. Titre là gì?**\nTitre là thể tích dung dịch từ burette đã dùng trong một lần chuẩn độ:\n$$V_{titre}=V_{cuối}-V_{đầu}$$\nDo thang burette không nhất thiết bắt đầu ở 0, tuyệt đối không lấy số đọc cuối làm titre. Mỗi lần đo phải ghi cả số đọc đầu, cuối và hiệu.',

  '**2. Chuẩn độ thô và chuẩn độ định lượng**\nLần thô giúp xác định vùng gần điểm kết thúc để các lần sau có thể thêm nhanh lúc đầu và nhỏ từng giọt khi gần điểm kết thúc. Titre thô thường không dùng tính trung bình chính thức trừ khi quy trình hoặc đề bài nói khác.',

  '**3. Các titre phù hợp (concordant)**\nCác lần định lượng được chấp nhận khi chênh lệch giữa chúng không vượt tiêu chí đề cho, chẳng hạn 0,10 mL hoặc 0,20 mL. Tiêu chí phụ thuộc quy trình; không mặc định một con số nếu đề đã quy định. Các giá trị không cần giống hệt nhau.',

  '**4. Chọn nhóm dữ liệu hợp lệ**\n1. Tính lại từng titre.\n2. Loại lần thô khỏi tập tính trung bình.\n3. Sắp xếp hoặc so sánh các titre định lượng.\n4. Tìm nhóm thỏa tiêu chí chênh lệch.\n5. Chỉ loại một giá trị bất thường khi có căn cứ từ tiêu chí hoặc thao tác, không loại chỉ vì “không đẹp”.',

  '**5. Tính titre trung bình**\n$$\\overline V=\\frac{V_1+V_2+\\cdots+V_n}{n}$$\nChỉ đưa các titre đã được chấp nhận vào phép tính. Nếu có ba giá trị mà hai giá trị gần nhau và một giá trị lệch rõ rệt, trung bình cả ba có thể làm kết quả sai lệch.',

  '**6. Độ lặp và độ đúng**\nCác titre gần nhau cho thấy **độ lặp** tốt nhưng chưa bảo đảm **độ đúng**. Một lỗi hệ thống như burette bị pha loãng có thể làm mọi lần đo rất gần nhau nhưng cùng sai theo một hướng. Vì vậy phải đánh giá cả dữ liệu và quy trình thao tác.',

  '**7. Báo cáo số liệu hợp lí**\nKết quả phải có đơn vị mL và số chữ số thập phân phù hợp độ chia dụng cụ. Không báo cáo quá nhiều chữ số do máy tính tạo ra. Nên nêu rõ số lần được dùng và, nếu cần, khoảng biến thiên để thể hiện độ lặp.',

  '**8. Ví dụ xử lí**\nCác titre định lượng: 24,60; 24,65; 25,20 mL, tiêu chí chênh lệch không quá 0,10 mL. Hai giá trị đầu phù hợp; 25,20 mL là bất thường. Khi đó:\n$$\\overline V=\\frac{24{,}60+24{,}65}{2}=24{,}625\\,\\mathrm{mL}$$\nGiá trị báo cáo được làm tròn theo quy ước độ chính xác của burette, không giữ tùy tiện mọi chữ số.',

  '**9. Lỗi cần loại bỏ**\n- Lấy số đọc cuối thay cho titre.\n- Đưa lần thô vào trung bình.\n- Trung bình mọi lần dù có ngoại lệ rõ.\n- Cho rằng các titre hợp lệ phải giống hệt nhau.\n- Loại dữ liệu mà không có tiêu chí.\n- Báo cáo quá nhiều chữ số và không có đơn vị.\n- Đồng nhất độ lặp tốt với kết quả chắc chắn đúng.'
];

export const chem11Qt14Theory: string[] = [
  '**1. Chuỗi tính toán cốt lõi**\n$$\\text{titre hợp lệ}\\rightarrow n_{chuẩn}\\rightarrow\\text{tỉ lệ mol}\\rightarrow n_{mẫu}\\rightarrow C_{mẫu}$$\nCụ thể:\n1. Chọn titre đại diện.\n2. Đổi mL sang L.\n3. Tính mol dung dịch chuẩn bằng $n=CV$.\n4. Dùng phương trình cân bằng để tìm mol chất phân tích.\n5. Chia cho thể tích aliquot của mẫu.',

  '**2. Quan hệ tỉ lượng tại điểm tương đương**\nVới:\n$$aA+bB\\rightarrow\\text{sản phẩm}$$\nở điểm tương đương:\n$$\\frac{n_A}{a}=\\frac{n_B}{b}$$\nKhông mặc định $n_A=n_B$. Chỉ khi $a=b$ mới có số mol bằng nhau. Đây là nguyên tắc tổng quát an toàn hơn mọi công thức rút gọn.',

  '**3. Trường hợp tỉ lệ 1:1**\nVới $HCl+NaOH\\rightarrow NaCl+H_2O$:\n$$n_{HCl}=n_{NaOH}$$\nNếu dùng cùng đơn vị thể tích:\n$$C_{HCl}V_{HCl}=C_{NaOH}V_{NaOH}$$\nCông thức $C_1V_1=C_2V_2$ ở đây xuất phát từ tỉ lệ 1:1, không phải công thức chung cho mọi phản ứng acid–base.',

  '**4. Trường hợp hệ số khác 1:1**\nVí dụ:\n$$H_2SO_4+2NaOH\\rightarrow Na_2SO_4+2H_2O$$\n$$n_{NaOH}=2n_{H_2SO_4}$$\nHoặc:\n$$2HCl+Ca(OH)_2\\rightarrow CaCl_2+2H_2O$$\n$$n_{HCl}=2n_{Ca(OH)_2}$$\nPhải viết phương trình và đặt tỉ lệ trước khi thế số để tránh đảo hệ số.',

  '**5. Aliquot và thể tích mẫu**\nAliquot là phần thể tích chính xác được lấy bằng pipette từ dung dịch cần phân tích. Nồng độ tính sau chuẩn độ là nồng độ của dung dịch **từ đó aliquot được lấy**. Không chia mol cho thể tích toàn bình định mức nếu số mol đang xét chỉ thuộc aliquot.',

  '**6. Mẫu đã pha loãng**\nNếu lấy $V_0$ mL mẫu gốc rồi pha thành $V_f$ mL:\n$$C_{gốc}V_0=C_{pha\\,loãng}V_f$$\n$$C_{gốc}=C_{pha\\,loãng}\\frac{V_f}{V_0}$$\nTa chuẩn độ aliquot để tìm $C_{pha\\,loãng}$ trước, rồi nhân hệ số pha loãng $V_f/V_0$. Không nhân thêm tỉ lệ giữa bình định mức và aliquot nếu đang dùng nồng độ, vì aliquot có cùng nồng độ với dung dịch trong bình.',

  '**7. Kết hợp bảng titre với phép tính**\n1. Tính titre từng lần.\n2. Loại lần thô và chọn các titre phù hợp.\n3. Tính titre trung bình.\n4. Dùng titre trung bình làm $V$ của dung dịch chuẩn.\n5. Thực hiện chuỗi mol–tỉ lượng–nồng độ.\n\nSai ở bước chọn titre sẽ truyền sang toàn bộ kết quả, nên không bỏ qua phần xử lí dữ liệu.',

  '**8. Ví dụ 1:1**\n25,00 mL HCl được chuẩn độ bởi NaOH 0,1000 M, titre trung bình 20,00 mL:\n$$n_{NaOH}=0{,}1000\\times0{,}02000=2{,}000\\times10^{-3}\\,\\mathrm{mol}$$\nTỉ lệ 1:1 nên $n_{HCl}=2{,}000\\times10^{-3}$ mol:\n$$C_{HCl}=\\frac{2{,}000\\times10^{-3}}{0{,}02500}=0{,}08000\\,\\mathrm{M}$$',

  '**9. Kiểm tra kết quả**\n- Thể tích phải đổi sang lít khi dùng $n=CV$.\n- Hệ số mol phải đúng chiều.\n- Nếu dung dịch gốc bị pha loãng, nồng độ gốc phải lớn hơn nồng độ sau pha loãng.\n- Đơn vị cuối là mol/L.\n- Số chữ số phù hợp dữ liệu thực nghiệm.\n- Có thể ước lượng độ lớn trước để phát hiện sai số 10, 100 hoặc 1000 lần.',

  '**10. Lỗi cần loại bỏ**\n- Dùng $C_1V_1=C_2V_2$ cho phản ứng không 1:1.\n- Đảo tỉ lệ hệ số acid–base.\n- Dùng titre thô hoặc số đọc cuối.\n- Quên đổi mL sang L.\n- Chia cho sai thể tích mẫu/aliquot.\n- Quên hoặc áp dụng ngược hệ số pha loãng.\n- Làm tròn quá sớm giữa các bước.'
];
