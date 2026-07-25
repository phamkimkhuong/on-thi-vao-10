export const math10Qt1Theory: string[] = [
  '**1. Tập hợp và kí hiệu thuộc**\n$x\\in A$ nghĩa $x$ thuộc $A$; $x\\notin A$ nghĩa không thuộc. Hai tập bằng nhau khi có đúng cùng phần tử. $A\\subset B$ nghĩa mọi phần tử của $A$ đều thuộc $B$.',
  '**2. Khoảng, đoạn và nửa khoảng**\n$$(a;b)=\\{x\\mid a<x<b\\},\\qquad[a;b]=\\{x\\mid a\\le x\\le b\\}$$\n$$[a;b)=\\{x\\mid a\\le x<b\\},\\qquad(a;b]=\\{x\\mid a<x\\le b\\}$$\nNgoặc vuông lấy đầu mút; ngoặc tròn không lấy. Với $\\pm\\infty$ luôn dùng ngoặc tròn vì vô cực không phải số thực.',
  '**3. Phép giao**\n$$A\\cap B=\\{x\\mid x\\in A\\text{ và }x\\in B\\}$$\nGiữ phần chung của hai tập. Tại mỗi đầu mút, điểm chỉ thuộc giao nếu **cả A và B cùng chứa điểm đó**.',
  '**4. Phép hợp**\n$$A\\cup B=\\{x\\mid x\\in A\\text{ hoặc }x\\in B\\}$$\nGiữ mọi điểm thuộc ít nhất một tập. Nếu hai khoảng rời nhau, kết quả phải viết thành hợp của hai khoảng; không được nối qua phần trống.',
  '**5. Phép hiệu và phần bù**\n$$A\\setminus B=\\{x\\mid x\\in A\\text{ và }x\\notin B\\}$$\nPhần bù của $A$ trong tập nền $U$ là $C_UA=U\\setminus A$. Kết quả phép hiệu có thể gồm nhiều khoảng rời nhau.',
  '**6. Cách xử lí đầu mút chính xác**\nKhông dùng máy móc quy tắc “đổi ngoặc”. Với mỗi mốc $c$, hỏi trực tiếp: $c$ có thuộc tập cần giữ không và có thuộc tập cần loại không? Ví dụ trong $A\\setminus B$, lấy $c$ khi $c\\in A$ và $c\\notin B$.',
  '**7. Biểu diễn trên trục số**\nSắp mọi đầu mút tăng dần; đánh dấu điểm kín/hở; chia trục thành các vùng; chọn một điểm thử trong từng vùng; kiểm tra riêng các đầu mút; cuối cùng ghép các vùng liên tiếp bằng đúng loại ngoặc.',
  '**8. Các luật hữu ích**\n$$A\\setminus B=A\\cap C_UB$$\n$$C_U(A\\cup B)=C_UA\\cap C_UB$$\n$$C_U(A\\cap B)=C_UA\\cup C_UB$$\nCác luật De Morgan giúp kiểm tra kết quả phần bù của hợp/giao.',
  '**9. Lỗi cần tránh**\n- Dùng ngoặc vuông với vô cực.\n- Chỉ nhìn dấu ngoặc của một tập tại đầu mút chung.\n- Nối hai khoảng rời nhau thành một khoảng.\n- Nhầm $A\\setminus B$ với $B\\setminus A$.\n- Quên xác định tập nền khi lấy phần bù.'
];

export const math10Qt2Theory: string[] = [
  '**1. Điều kiện một khoảng khác rỗng**\n- Đoạn $[a;b]$ khác rỗng khi $a\\le b$; nếu $a=b$ thì $[a;a]=\\{a\\}$.\n- Khoảng $(a;b)$ và hai nửa khoảng $[a;b)$, $(a;b]$ khác rỗng khi $a<b$.\nKhông được dùng chung một điều kiện cho mọi loại ngoặc.',
  '**2. Tập rỗng vẫn có ý nghĩa**\n$\\varnothing$ là một tập hợp hợp lệ và $\\varnothing\\subset B$ với mọi $B$. Chỉ bắt buộc thêm điều kiện “A khác rỗng” khi đề yêu cầu hoặc khi lập luận đang giả sử A có phần tử.',
  '**3. Hai khoảng giao nhau khác rỗng**\nGọi $L$ là đầu mút trái lớn hơn và $R$ là đầu mút phải nhỏ hơn. Giao khác rỗng nếu $L<R$; nếu $L=R$, giao chỉ khác rỗng khi điểm chạm được **cả hai tập lấy**. Đây là cách an toàn hơn học thuộc một bất đẳng thức cố định.',
  '**4. Hai tập rời nhau**\n$A\\cap B=\\varnothing$ khi A nằm hoàn toàn bên trái B hoặc ngược lại. Ở vị trí tiếp xúc, phải xét điểm chung có được cả hai tập lấy không. Phương pháp thường hiệu quả là tìm điều kiện rỗng rồi phủ định để có giao khác rỗng.',
  '**5. Điều kiện tập con**\n$A\\subset B$ nghĩa mọi điểm của A nằm trong B. Với các khoảng hữu hạn, so sánh hai đầu mút và kiểm tra riêng trường hợp trùng tọa độ: nếu A lấy một đầu mút mà B không lấy thì không thể là tập con.',
  '**6. Khoảng vô hạn và hợp nhiều khoảng**\nVới $B$ là hợp các khoảng rời nhau, không thể chỉ so sánh hai đầu mút ngoài cùng. Muốn $A\\subset B$, tập liên thông A thường phải nằm trọn trong một thành phần của B; muốn $A\\cap B=\\varnothing$, A phải nằm trong phần bù của toàn bộ B.',
  '**7. Quy trình bài tham số**\nXác định loại từng tập; lập điều kiện khác rỗng nếu đề cần; vẽ/sắp các đầu mút chứa $m$; chuyển yêu cầu giao–rỗng–tập con thành điều kiện đầu mút; giải bất phương trình; kết hợp các nhánh và điều kiện ban đầu.',
  '**8. Kiểm tra dấu bằng**\nSau khi giải điều kiện nghiêm/ngặt, thử trực tiếp các giá trị biên của $m$. Một dấu bằng được lấy hay loại phụ thuộc đồng thời vào loại ngoặc của cả hai tập tại điểm chạm.',
  '**9. Lỗi cần tránh**\n- Mặc định mọi tập phải khác rỗng.\n- Dùng $a<b$ cho đoạn đóng có thể là một điểm.\n- Nhầm giao khác rỗng với tập con.\n- Lấy phủ định sai: phủ định của “$m\\le a$ hoặc $m\\ge b$” là “$a<m<b$”.\n- Bỏ một nhánh trái/phải khi xét hai tập rời nhau.'
];

export const math10Qt17Theory: string[] = [
  '**1. Mệnh đề và mệnh đề chứa biến**\nMệnh đề là câu khẳng định có đúng một giá trị đúng hoặc sai. Câu hỏi, mệnh lệnh không phải mệnh đề. Câu chứa biến như “$x>2$” chỉ trở thành mệnh đề khi gán $x$ hoặc thêm lượng từ và tập nền.',
  '**2. Phủ định**\nPhủ định $\\neg P$ đúng khi $P$ sai và sai khi $P$ đúng. Với quan hệ số:\n$$\\neg(x>a)\\equiv x\\le a,\\qquad \\neg(x\\ge a)\\equiv x<a$$\nPhủ định phải bao phủ toàn bộ trường hợp còn lại, không chỉ thêm từ “không” tùy ý.',
  '**3. Phủ định phép nối logic**\n$$\\neg(P\\land Q)\\equiv\\neg P\\lor\\neg Q$$\n$$\\neg(P\\lor Q)\\equiv\\neg P\\land\\neg Q$$\n$$\\neg(P\\Rightarrow Q)\\equiv P\\land\\neg Q$$\nMệnh đề kéo theo chỉ sai khi giả thiết đúng nhưng kết luận sai.',
  '**4. Lượng từ**\n$$\\neg(\\forall x\\in D,\\ P(x))\\equiv\\exists x\\in D:\\neg P(x)$$\n$$\\neg(\\exists x\\in D:\\ P(x))\\equiv\\forall x\\in D,\\neg P(x)$$\nKhi phủ định phải giữ đúng tập nền $D$ và đổi cả lượng từ lẫn mệnh đề bên trong.',
  '**5. Mệnh đề kéo theo**\n$P\\Rightarrow Q$ đọc “nếu P thì Q”. Khi đó P là **điều kiện đủ** của Q; Q là **điều kiện cần** của P. Mệnh đề đảo là $Q\\Rightarrow P$ và không tự động tương đương mệnh đề ban đầu.',
  '**6. Phản đảo**\nMệnh đề phản đảo của $P\\Rightarrow Q$ là:\n$$\\neg Q\\Rightarrow\\neg P$$\nMệnh đề ban đầu và phản đảo luôn tương đương logic. Điều này khác mệnh đề đảo và mệnh đề phản.',
  '**7. Tương đương và cần–đủ**\n$$P\\Leftrightarrow Q$$\nđúng khi $P,Q$ cùng chân trị, tương đương với việc cả $P\\Rightarrow Q$ và $Q\\Rightarrow P$ đều đúng. Khi đó P là điều kiện cần và đủ của Q.',
  '**8. Chứng minh và phản ví dụ**\nĐể bác bỏ mệnh đề “mọi $x$ đều có P”, chỉ cần một phản ví dụ thỏa tập nền nhưng không có P. Một ví dụ đúng không chứng minh được mệnh đề toàn thể. Với mệnh đề tồn tại, một ví dụ thỏa là đủ.',
  '**9. Lỗi cần tránh**\n- Không xác định tập nền.\n- Phủ định “mọi” vẫn giữ “mọi”.\n- Nhầm đảo với phản đảo.\n- Đổi vị trí điều kiện cần và đủ.\n- Cho $P\\Rightarrow Q$ sai mỗi khi P sai.\n- Dùng một ví dụ làm chứng minh cho mệnh đề toàn thể.'
];

export const g10MathModule1TheoryByQuestionTypeId: Record<string, string[]> = {
  'math10-qt1': math10Qt1Theory,
  'math10-qt2': math10Qt2Theory,
  'math10-qt17': math10Qt17Theory
};
