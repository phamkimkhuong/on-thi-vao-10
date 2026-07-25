export const math10Qt5Theory: string[] = [
  '**1. Các quy tắc vectơ nền tảng**\nVới ba điểm bất kỳ:\n$$\\vec{AB}+\\vec{BC}=\\vec{AC},\\qquad \\vec{AB}=\\vec{OB}-\\vec{OA}$$\nNgoài ra $\\vec{AB}=-\\vec{BA}$. Khi chèn điểm, phải giữ đúng điểm cuối của vectơ trước trùng điểm đầu của vectơ sau.',
  '**2. Nhân vectơ với một số**\n$k\\vec u$ cùng phương với $\\vec u$; cùng hướng nếu $k>0$, ngược hướng nếu $k<0$, và bằng $\\vec 0$ nếu $k=0$ hoặc $\\vec u=\\vec 0$. Độ dài:\n$$|k\\vec u|=|k|\\,|\\vec u|$$',
  '**3. Phân tích theo hai vectơ cơ sở**\nNếu $\\vec e_1,\\vec e_2$ không cùng phương thì mọi vectơ trong mặt phẳng biểu diễn duy nhất dưới dạng:\n$$\\vec u=x\\vec e_1+y\\vec e_2$$\nTrong tam giác $ABC$, thường chọn $\\vec{AB},\\vec{AC}$ làm cơ sở rồi đưa tất cả vectơ về cùng gốc $A$. Tính duy nhất cho phép so sánh riêng các hệ số.',
  '**4. Trung điểm và trọng tâm**\nNếu $M$ là trung điểm $BC$:\n$$\\vec{AM}=\\frac12\\left(\\vec{AB}+\\vec{AC}\\right)$$\nNếu $G$ là trọng tâm tam giác $ABC$:\n$$\\vec{AG}=\\frac13\\left(\\vec{AB}+\\vec{AC}\\right)=\\frac23\\vec{AM}$$\nCác công thức chỉ đúng với đúng thứ tự điểm và gốc đang viết.',
  '**5. Điểm chia đoạn**\nNếu $M$ nằm trong đoạn $AB$ và $AM:MB=m:n$ với $m,n>0$ thì:\n$$\\vec{AM}=\\frac{m}{m+n}\\vec{AB}$$\nVới gốc tùy ý $O$:\n$$\\vec{OM}=\\frac{n\\vec{OA}+m\\vec{OB}}{m+n}$$\nHệ số của đầu mút $A$ đi cùng độ dài đoạn đối diện $MB=n$, và ngược lại.',
  '**6. Điều kiện cùng phương và thẳng hàng**\nHai vectơ khác $\\vec0$ cùng phương khi tồn tại $k$ sao cho $\\vec u=k\\vec v$. Ba điểm phân biệt $A,M,N$ thẳng hàng khi $\\vec{AM}$ và $\\vec{AN}$ cùng phương:\n$$\\vec{AM}=k\\vec{AN}$$\nNếu $\\vec{AM}=a\\vec e_1+b\\vec e_2$ và $\\vec{AN}=c\\vec e_1+d\\vec e_2$, điều kiện là tồn tại cùng một $k$ thỏa $a=kc$, $b=kd$.',
  '**7. Điều kiện tọa độ**\nVới $\\vec u=(x_1;y_1)$, $\\vec v=(x_2;y_2)$, hai vectơ cùng phương khi:\n$$x_1y_2-y_1x_2=0$$\nCó thể dùng điều kiện này cho bài tham số hoặc lập $\\vec{AB},\\vec{AC}$ để kiểm tra ba điểm thẳng hàng. Không chia tỉ số thành phần khi mẫu có thể bằng 0.',
  '**8. Quy trình bài nhiều điểm phụ**\nChọn một gốc và hai vectơ cơ sở; biểu diễn từng điểm phụ theo tỉ số; lập vectơ nối bằng “vectơ vị trí điểm cuối trừ điểm đầu”; thu gọn hệ số; cuối cùng mới dùng điều kiện cùng phương hoặc đọc kết quả cần tìm.',
  '**9. Lỗi cần tránh**\n- Viết $\\vec{MN}=\\vec{AM}-\\vec{AN}$ thay vì $\\vec{MN}=\\vec{AN}-\\vec{AM}$.\n- Bỏ dấu âm khi đảo chiều vectơ.\n- So sánh hệ số theo hai vectơ cùng phương, khiến biểu diễn không duy nhất.\n- Chỉ chứng minh tỉ lệ một hệ số.\n- Dùng công thức chia trong đoạn cho điểm chia ngoài mà không xét vectơ có hướng.'
];

export const math10Qt7Theory: string[] = [
  '**1. Định nghĩa tích vô hướng**\nVới hai vectơ khác $\\vec0$ và góc $0^\\circ\\le\\theta\\le180^\\circ$ giữa chúng:\n$$\\vec u\\cdot\\vec v=|\\vec u|\\,|\\vec v|\\cos\\theta$$\nKết quả là một **số**, không phải vectơ. Nếu một vectơ bằng $\\vec0$ thì tích vô hướng bằng 0 nhưng góc với vectơ đó không được xác định.',
  '**2. Dấu của tích vô hướng**\n- Góc nhọn: $\\vec u\\cdot\\vec v>0$.\n- Góc vuông: $\\vec u\\cdot\\vec v=0$.\n- Góc tù: $\\vec u\\cdot\\vec v<0$.\nVới hai vectơ khác $\\vec0$:\n$$\\vec u\\perp\\vec v\\Longleftrightarrow\\vec u\\cdot\\vec v=0$$',
  '**3. Các tính chất đại số**\n$$\\vec u\\cdot\\vec v=\\vec v\\cdot\\vec u$$\n$$\\vec u\\cdot(\\vec v+\\vec w)=\\vec u\\cdot\\vec v+\\vec u\\cdot\\vec w$$\n$$(k\\vec u)\\cdot\\vec v=k(\\vec u\\cdot\\vec v)$$\nCác quy tắc này cho phép khai triển biểu thức vectơ như đại số, nhưng mỗi tích hai vectơ cho ra một số.',
  '**4. Bình phương và độ dài**\n$$\\vec u\\cdot\\vec u=|\\vec u|^2$$\nDo đó:\n$$|\\vec u\\pm\\vec v|^2=|\\vec u|^2+|\\vec v|^2\\pm2\\vec u\\cdot\\vec v$$\nMuốn tìm độ dài biểu thức vectơ, thường tính bình phương trước rồi lấy căn không âm.',
  '**5. Tính góc**\nVới $\\vec u,\\vec v\\ne\\vec0$:\n$$\\cos\\theta=\\frac{\\vec u\\cdot\\vec v}{{|\\vec u|\\,|\\vec v|}}$$\nSau khi bấm $\\arccos$, kiểm tra máy ở chế độ độ và kết quả thuộc $[0^\\circ;180^\\circ]$. Dấu tích vô hướng giúp kiểm tra nhanh góc nhọn hay tù.',
  '**6. Biểu thức tọa độ**\nNếu $\\vec u=(x_1;y_1)$, $\\vec v=(x_2;y_2)$ thì:\n$$\\vec u\\cdot\\vec v=x_1x_2+y_1y_2,\\qquad |\\vec u|=\\sqrt{x_1^2+y_1^2}$$\nVới $A(x_A;y_A)$, $B(x_B;y_B)$:\n$$\\vec{AB}=(x_B-x_A;y_B-y_A)$$',
  '**7. Bài toán tham số vuông góc**\nLập đúng hai vectơ, khai triển tích vô hướng rồi giải:\n$$\\vec u(m)\\cdot\\vec v(m)=0$$\nSau khi tìm $m$, cần kiểm tra vectơ có bị bằng $\\vec0$ hay dữ kiện hình học có suy biến không.',
  '**8. Xác định đúng góc hình học**\nGóc giữa $\\vec{AB}$ và $\\vec{AC}$ là $\\angle BAC$. Nhưng góc giữa $\\vec{AB}$ và $\\vec{BC}$ là góc giữa $\\vec{BA}$ và $\\vec{BC}$ bù với nó, vì $\\vec{AB}=-\\vec{BA}$. Hãy đưa hai vectơ về chung gốc trước khi đọc góc.',
  '**9. Lỗi cần tránh**\n- Cho tích vô hướng là vectơ.\n- Kết luận hai đường vuông góc từ tích bằng 0 khi dùng vectơ không hợp lệ hoặc vectơ không.\n- Nhầm góc với góc bù.\n- Quên bình phương hệ số khi tính độ dài.\n- Bỏ dấu âm của tọa độ hoặc của $\\cos$ góc tù.'
];

export const g10MathModule5TheoryByQuestionTypeId: Record<string, string[]> = {
  'math10-qt5': math10Qt5Theory,
  'math10-qt7': math10Qt7Theory
};
