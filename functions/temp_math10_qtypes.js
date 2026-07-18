import fs from 'fs';
import path from 'path';


export const g10MathQuestionTypes = [
  {
    id: 'math10-qt1',
    topicId: 'math10-t1',
    name: 'Giao, hợp và hiệu của các khoảng, đoạn số học',
    slug: 'giao-hop-hieu-khoang-doan',
    description: 'Tìm giao, hợp, hiệu của các tập hợp số biểu diễn dưới dạng khoảng, đoạn, nửa khoảng trên trục số. Đây là phần cơ bản xuất hiện trong tất cả các bài kiểm tra khảo sát chất lượng đầu năm lớp 10.',
    exampleQuestionId: 'math10-q1',
    theory: [
      '**1. Khái niệm về Khoảng, Đoạn, Nửa khoảng trên tập số thực ($\\mathbb{R}$)**:\n- **Đoạn** $[a; b]$: gồm các số thực $x$ sao cho $a \\le x \\le b$. Ký hiệu ngoặc vuông $[$ và $]$ biểu thị ta lấy cả hai giá trị biên $a$ và $b$.\n- **Khoảng** $(a; b)$: gồm các số thực $x$ sao cho $a < x < b$. Ký hiệu ngoặc tròn $($ và $)$ biểu thị ta không lấy hai giá trị biên $a$ và $b$.\n- **Nửa khoảng** $[a; b)$ (lấy biên $a$, không lấy $b$) hoặc $(a; b]$ (không lấy $a$, lấy $b$).\n- **Khoảng vô hạn**: $(a; +\\infty)$ (các số lớn hơn $a$), $(-\\infty; b)$ (các số nhỏ hơn $b$).',
      '**2. Phép giao của hai tập hợp ($A \\cap B$)**:\n- Định nghĩa: $A \\cap B = \\{x \\in \\mathbb{R} \\mid x \\in A \\text{ và } x \\in B\\}$.\n- Ý nghĩa trực quan: Phần giao nhau là phần chứa các số thực **vừa thuộc A vừa thuộc B**. Trên trục số, khi ta gạch bỏ các phần không thuộc A rồi gạch bỏ tiếp các phần không thuộc B, phần **không bị gạch** chính là giao $A \\cap B$.',
      '**3. Phép hợp của hai tập hợp ($A \\cup B$)**:\n- Định nghĩa: $A \\cup B = \\{x \\in \\mathbb{R} \\mid x \\in A \\text{ hoặc } x \\in B\\}$.\n- Ý nghĩa trực quan: Phần hợp là toàn bộ các số thực **thuộc ít nhất một trong hai tập hợp**. Trên trục số, ta tô đậm cả tập A và tập B, phần được tô màu chính là hợp $A \\cup B$ (chỉ gạch phần nằm ngoài cả A và B).',
      '**4. Phép hiệu của hai tập hợp ($A \\setminus B$)**:\n- Định nghĩa: $A \\setminus B = \\{x \\in \\mathbb{R} \\mid x \\in A \\text{ và } x \\notin B\\}$.\n- Ý nghĩa trực quan: Phép hiệu là phần **thuộc A nhưng không thuộc B**. Khi tìm hiệu trên trục số, ta giữ lại tập A và **gạch bỏ hoàn bộ phần thuộc B**. \n- *Quy tắc đổi ngoặc tại điểm biên*: Tại các điểm mút chung của A và B, ta phải đảo ngược dấu ngoặc ở kết quả (ngoặc tròn của B đổi thành ngoặc vuông ở hiệu, ngoặc vuông của B đổi thành ngoặc tròn ở hiệu) do ta loại trừ đi tập B.'
    ],
    subTypes: [
      {
        name: 'Phép giao của hai tập hợp ($A \\cap B$)',
        example: 'Cho $A = [-3; 1)$ and $B = (0; 4]$. Xác định tập hợp $A \\cap B$.',
        note: 'Biểu diễn tập hợp $A$ và $B$ trên trục số. Giao của $A$ và $B$ là phần chung không bị gạch bỏ. Kết quả: $A \\cap B = (0; 1)$.'
      },
      {
        name: 'Phép hợp của hai tập hợp ($A \\cup B$)',
        example: 'Cho $A = (-2; 3]$ and $B = [1; 5)$. Xác định tập hợp $A \\cup B$.',
        note: 'Hợp của $A$ và $B$ là lấy toàn bộ phần tử thuộc ít nhất một trong hai tập hợp. Ta gạch bỏ phần nằm ngoài cả $A$ và $B$. Kết quả: $A \\cup B = (-2; 5)$.'
      },
      {
        name: 'Phép hiệu của hai tập hợp ($A \\setminus B$)',
        example: 'Cho $A = [-1; 4]$ and $B = (2; 5)$. Xác định tập hợp $A \\setminus B$.',
        note: 'Lấy phần thuộc $A$ nhưng bỏ đi phần thuộc $B$. Tại mốc biên của $B$, ta tiến hành đổi dấu ngoặc: ngoặc tròn thành vuông, vuông thành tròn. Kết quả: $A \\setminus B = [-1; 2]$.'
      },
      {
        name: 'Phần bù của một tập hợp trong $\\mathbb{R}$ ($C_{\\mathbb{R}}A$)',
        example: 'Cho $A = (2; +\\infty)$. Xác định phần bù $C_{\\mathbb{R}}A$.',
        note: 'Phần bù chính là phép hiệu $\\mathbb{R} \\setminus A$. Ta lấy toàn bộ trục số và loại đi đoạn từ $2$ đến $+\\infty$. Biên $2$ (ngoặc tròn ở A) đảo thành ngoặc vuông. Kết quả: $C_{\\mathbb{R}}A = (-\\infty; 2]$.'
      }
    ],
    recognitionSigns: [
      'Đề bài yêu cầu tìm tập hợp $A \\cap B$, $A \\cup B$, $A \\setminus B$ hoặc phần bù $C_{\\mathbb{R}}A$.',
      'Các tập hợp $A, B$ được cho dưới dạng các khoảng số học $(a; b)$, đoạn $[a; b]$, hoặc các nửa khoảng $[a; b)$, $(a; b]$.',
      'Đề bài yêu cầu rút gọn hoặc tìm miền xác định biểu diễn dưới dạng tổ hợp các khoảng số học.'
    ],
    solvingSteps: [
      'Bước 1: Vẽ trục số thực $\\mathbb{R}$ nằm ngang, sắp xếp tất cả các giá trị đầu mút của các tập hợp theo thứ tự từ bé đến lớn từ trái qua phải.',
      'Bước 2: Sử dụng các ký hiệu chuẩn: ngoặc vuông $[$, $]$ biểu diễn lấy giá trị biên; ngoặc tròn $($, $)$ biểu diễn không lấy giá trị biên.',
      'Bước 3: Thực hiện phép toán tập hợp:\n  - Phép giao ($\\cap$): Biểu diễn tập thứ nhất, gạch bỏ phần không thuộc. Biểu diễn tập thứ hai trên phần còn lại, gạch bỏ phần không thuộc. Phần còn lại không bị gạch chính là kết quả.\n  - Phép hợp ($\\cup$): Biểu diễn tất cả các tập hợp lên trục số bằng cách tô đậm các khoảng tương ứng. Chỉ gạch bỏ phần không thuộc bất kỳ tập nào.\n  - Phép hiệu ($A \\setminus B$): Giữ lại các khoảng thuộc $A$, gạch bỏ toàn bộ phần thuộc $B$. Đối với điểm mút chung của $A$ và $B$, nếu thuộc $B$ thì bỏ (ngoặc vuông đổi thành ngoặc tròn), nếu không thuộc $B$ thì lấy (ngoặc tròn đổi thành ngoặc vuông).',
      'Bước 4: Viết lại kết quả dưới dạng ký hiệu tập hợp chuẩn.'
    ],
    commonMistakes: [
      'Bẫy ngoặc đơn/ngoặc vuông: Không chú ý kỹ các điểm biên khiến kết quả bị sai ký hiệu đầu mút.',
      'Bẫy phép hiệu ($A \\setminus B$): Quên đổi dấu ngoặc tại các điểm biên của tập bị trừ $B$ (ví dụ: hiệu tại điểm mút tròn của B phải trở thành mút vuông của kết quả).',
      'Bất đẳng thức đầu mút: Quên so sánh các giá trị đầu mút (ví dụ $a < b$) khi biểu diễn trục số chứa tham số.'
    ],
    difficulty: 'easy',
    examFrequency: 'high'
  },
  {
    id: 'math10-qt2',
    topicId: 'math10-t1',
    name: 'Tìm tham số m để giao của hai tập hợp số khác rỗng',
    slug: 'tim-m-giao-khac-rong',
    description: 'Bài toán nâng cao chứa tham số m liên quan đến điều kiện giao nhau khác rỗng hoặc tập hợp này là tập con của tập hợp kia.',
    exampleQuestionId: 'math10-q2',
    theory: [
      '**1. Điều kiện tồn tại của các tập hợp số**:\n- Để một tập hợp dạng khoảng $(a; b)$, đoạn $[a; b]$, hay nửa khoảng $[a; b)$, $(a; b]$ tồn tại và khác rỗng, điều kiện bắt buộc đầu tiên là đầu mút bên trái phải bé hơn đầu mút bên phải: $a < b$ hoặc $a \\le b$. \n- Nếu không có điều kiện này, tập hợp sẽ tự động bằng rỗng $\\varnothing$ và bài toán mất đi ý nghĩa thực tế.',
      '**2. Điều kiện để hai tập hợp số rời nhau ($A \\cap B = \\varnothing$)**:\n- Hai tập hợp số rời nhau khi và chỉ khi tập hợp này nằm hoàn toàn bên trái hoặc nằm hoàn toàn bên phải tập hợp kia trên trục số.\n- Ví dụ với $A = [a; b]$ and $B = [c; d]$: Để $A \\cap B = \\varnothing$, ta cần $b < c$ (tập A nằm hẳn bên trái B) hoặc $d < a$ (tập A nằm hẳn bên phải B).\n- *Lưu ý dấu bằng*: Nếu một trong hai đầu mút tiếp xúc là ngoặc tròn (ví dụ $A = [a; b)$ and $B = [b; d]$), tại điểm chung $b$ chỉ có B lấy còn A không lấy, do đó $A \\cap B$ vẫn bằng rỗng. Khi đó điều kiện rời nhau chỉ cần $b \\le c$.',
      '**3. Phép toán giao khác rỗng ($A \\cap B \\neq \\varnothing$)**:\n- **Phương pháp trực tiếp**: Biểu diễn trực tiếp điều kiện chồng lấn của hai tập hợp số thực.\n- **Phương pháp gián tiếp (Phần bù)**: \n  - Bước 1: Tìm điều kiện để hai tập hợp giao nhau bằng rỗng ($A \\cap B = \\varnothing$). Đây là điều kiện rất dễ thiết lập thông qua mối quan hệ thứ tự các đầu mút biên.\n  - Bước 2: Lấy phủ định của điều kiện vừa tìm được ở Bước 1 để ra đáp án giao nhau khác rỗng.',
      '**4. Điều kiện để tập hợp này là con của tập hợp kia ($A \\subset B$)**:\n- Để $A \\subset B$, tập hợp $A$ phải nằm trọn vẹn bên trong tập hợp $B$. Điều kiện tương ứng với các đầu mút là:\n  - Đầu mút bên trái của A phải lớn hơn hoặc bằng đầu mút bên trái của B.\n  - Đầu mút bên phải của A phải nhỏ hơn hoặc bằng đầu mút bên phải của B.\n- *Quy tắc dấu bằng ở biên*: Tập hợp có mút tròn $($, $)$ có thể là con của tập hợp có mút vuông $[$, $]$ tại cùng một tọa độ điểm biên (ví dụ $(1; 2) \\subset [1; 2]$). Tuy nhiên, tập có mút vuông **không bao giờ** là con của tập có mút tròn tại biên (ví dụ $[1; 2] \\not\\subset (1; 2)$ vì tập con chứa giá trị biên nhưng tập mẹ thì không).'
    ],
    subTypes: [
      {
        name: 'Tìm m để hai tập hợp giao nhau khác rỗng ($A \\cap B \\neq \\varnothing$)',
        example: 'Cho $A = [m; m+2]$ và $B = (1; 3)$. Tìm $m$ để $A \\cap B \\neq \\varnothing$.',
        note: 'Tìm điều kiện để $A \\cap B = \\varnothing$: Ta cần $m+2 \\le 1$ (A nằm bên trái B) hoặc $m \\ge 3$ (A nằm bên phải B) $\\Leftrightarrow m \\le -1$ hoặc $m \\ge 3$. Phủ định lại ta được điều kiện giao khác rỗng: $-1 < m < 3$.'
      },
      {
        name: 'Tìm m để tập hợp này là tập con của tập hợp kia ($A \\subset B$)',
        example: 'Cho $A = (m-1; m+3)$ và $B = [-2; 5]$. Tìm $m$ để $A \\subset B$.',
        note: 'Điều kiện tồn tại A: $m-1 < m+3$ (luôn đúng). Để $A \\subset B$, ta cần: $-2 \\le m-1$ và $m+3 \\le 5 \\Leftrightarrow -1 \\le m \\le 2$. Vì A dùng ngoặc tròn nên tại các biên lấy dấu bằng là hợp lệ.'
      },
      {
        name: 'Tìm m để giao của hai tập hợp bằng rỗng ($A \\cap B = \\varnothing$)',
        example: 'Cho $A = (-\\infty; m-1)$ và $B = [2m+1; +\\infty)$. Tìm $m$ để $A \\cap B = \\varnothing$.',
        note: 'Để giao bằng rỗng, tập B phải nằm hoàn toàn bên phải tập A. Biên phải của A là $m-1$, biên trái của B là $2m+1$. Ta cần $m-1 \\le 2m+1 \\Leftrightarrow m \\ge -2$. Do A ngoặc tròn nên tại biên lấy dấu bằng vẫn không có điểm chung.'
      }
    ],
    recognitionSigns: [
      'Đề bài cho hai tập hợp số (khoảng, đoạn hoặc nửa khoảng) chứa tham số $m$.',
      'Yêu cầu tìm điều kiện của $m$ để hai tập hợp giao nhau khác rỗng ($A \\cap B \\neq \\varnothing$), giao nhau bằng rỗng ($A \\cap B = \\varnothing$) hoặc tập này là con của tập kia ($A \\subset B$).'
    ],
    solvingSteps: [
      'Bước 1: Tìm điều kiện để các tập hợp tồn tại và khác rỗng (đầu mút trái luôn nhỏ hơn đầu mút phải). Đây là điều kiện tiên quyết.',
      'Bước 2: Phân tích yêu cầu đề bài để chọn phương pháp:\n  - Nếu tìm $A \\cap B = \\varnothing$: Cho biên phải của tập bên trái nhỏ hơn biên trái của tập bên phải (chú ý dấu bằng ở biên).\n  - Nếu tìm $A \\cap B \\neq \\varnothing$: Tìm điều kiện bằng rỗng ở trên rồi lấy phủ định (phương pháp phần bù).\n  - Nếu tìm $A \\subset B$: Đưa về hệ bất phương trình so sánh đầu mút trái $a_{B} \\le a_{A}$ và đầu mút phải $b_{A} \\le b_{B}$ (chú ý so sánh dấu ngoặc ở biên để xem có lấy dấu bằng hay không).',
      'Bước 3: Giải hệ bất phương trình chứa tham số $m$ thu được.',
      'Bước 4: Kết hợp điều kiện tồn tại ở Bước 1 để đưa ra kết luận giá trị $m$ cuối cùng.'
    ],
    commonMistakes: [
      'Bỏ sót điều kiện tồn tại tập hợp số (ví dụ tập $A = [m; 2m-1]$ yêu cầu điều kiện $m \\le 2m-1 \\Leftrightarrow m \\ge 1$).',
      'Lấy sai dấu bằng ở biên khi so sánh các đầu mút chung (đây là bẫy phổ biến nhất trong các đề thi học kỳ 1 lớp 10).',
      'Quên lấy phủ định khi dùng phương pháp phần bù để giải quyết phép toán giao khác rỗng.'
    ],
    difficulty: 'hard',
    examFrequency: 'medium'
  },
  {
    id: 'math10-qt3',
    topicId: 'math10-t2',
    name: 'Xác định miền nghiệm và Bài toán tối ưu thực tế (Quy hoạch tuyến tính)',
    slug: 'mien-nghiem-bai-toan-toi-uu',
    description: 'Xác định miền nghiệm của hệ bất phương trình bậc nhất hai ẩn trên mặt phẳng tọa độ và tìm giá trị lớn nhất, nhỏ nhất của biểu thức F(x; y) để giải quyết các bài toán tối ưu trong sản xuất, kinh doanh.',
    exampleQuestionId: 'math10-q3',
    theory: [
      '**1. Bất phương trình và Hệ bất phương trình bậc nhất hai ẩn**:\n- Bất phương trình bậc nhất hai ẩn có dạng tổng quát là $ax + by < c$ (hoặc $\\le$, $>$, $\\ge$), trong đó $a, b, c$ là các số thực cho trước ($a^2 + b^2 \\neq 0$).\n- Hệ bất phương trình bậc nhất hai ẩn là một tổ hợp gồm từ hai bất phương trình bậc nhất hai ẩn trở lên.',
      '**2. Miền nghiệm của hệ bất phương trình**:\n- Trong mặt phẳng tọa độ $Oxy$, tập hợp các điểm có tọa độ $(x; y)$ thỏa mãn tất cả các bất phương trình trong hệ được gọi là **miền nghiệm** của hệ đó.\n- Miền nghiệm của hệ bất phương trình thường là một miền đa giác lồi (tam giác, tứ giác, ngũ giác...) hoặc một miền không giới hạn được bao quanh bởi các đường biên thẳng.',
      '**3. Định lý cực trị trên đa giác (Vertex Theorem)**:\n- Đối với bài toán tìm giá trị lớn nhất (hoặc nhỏ nhất) của biểu thức bậc nhất hai ẩn $F(x; y) = ax + by$ trên một miền nghiệm đa giác lồi $D$:\n- *Định lý*: Giá trị lớn nhất và giá trị nhỏ nhất của biểu thức $F(x; y)$ luôn đạt được tại một trong các **đỉnh** của đa giác $D$.\n- Do đó, thay vì thử vô số điểm $(x;y)$ trong đa giác, ta chỉ cần tìm tọa độ các đỉnh của đa giác, tính giá trị của $F(x; y)$ tại các đỉnh này rồi so sánh để đưa ra kết luận.',
      '**4. Quy trình giải bài toán quy hoạch tuyến tính thực tế**:\n- **Bước 1**: Chọn ẩn số $x, y$ (thường là số lượng sản phẩm, diện tích gieo trồng...). Đặt điều kiện thực tế (ví dụ: $x \\ge 0, y \\ge 0$, hoặc $x, y \\in \\mathbb{N}$).\n- **Bước 2**: Thiết lập các bất phương trình biểu diễn các giới hạn về tài nguyên (nhân công, vốn, nguyên vật liệu...). Tổ hợp các bất phương trình này tạo thành một hệ bất phương trình giới hạn.\n- **Bước 3**: Thiết lập hàm mục tiêu $F(x; y) = ax + by$ đại diện cho lợi nhuận, chi phí, hoặc doanh thu cần tối ưu hóa.\n- **Bước 4**: Xác định miền nghiệm đa giác trên hệ trục tọa độ, tính tọa độ các đỉnh và tính giá trị $F(x; y)$ tại các đỉnh đó để chọn ra phương án sản xuất tối ưu.'
    ],
    subTypes: [
      {
        name: 'Xác định miền nghiệm và các đỉnh của hệ bất phương trình',
        example: 'Xác định miền nghiệm của hệ bất phương trình: $x \\ge 0$, $y \\ge 0$, $x + y \\le 4$, $2x + y \\le 6$. Tìm tọa độ các đỉnh của miền nghiệm.',
        note: 'Vẽ các đường biên: $x=0$, $y=0$, $x+y=4$, $2x+y=6$. Miền nghiệm thu được là tứ giác lồi $OABC$ với các đỉnh $O(0; 0)$, $A(3; 0)$, $B(2; 2)$, $C(0; 4)$ (giao điểm của các đường thẳng).'
      },
      {
        name: 'Tìm cực trị của biểu thức F(x; y) trên miền đa giác cho trước',
        example: 'Cho miền nghiệm là tam giác $OAB$ với các đỉnh $O(0; 0)$, $A(4; 0)$, $B(0; 3)$. Tìm giá trị lớn nhất của $F(x; y) = 3x + 2y$ trên miền nghiệm này.',
        note: 'Tính giá trị tại các đỉnh: $F(O) = 0$, $F(A) = 3(4) + 2(0) = 12$, $F(B) = 3(0) + 2(3) = 6$. Vậy giá trị lớn nhất của F là 12, đạt tại đỉnh $A(4; 0)$._'
      },
      {
        name: 'Giải bài toán tối ưu thực tế (Quy hoạch tuyến tính)',
        example: 'Một cơ sở sản xuất nước cam và nước táo cần phân bổ lượng đường và hương liệu để tối đa hóa doanh thu. Cam cần 1 hộp đường, táo cần 2 hộp đường...',
        note: 'Gọi $x, y$ lần lượt là số lít nước cam và táo sản xuất. Lập hệ ràng buộc tài nguyên đường và hương liệu. Lợi nhuận thu được là $F(x; y) = ax + by$. Tìm đỉnh của miền đa giác ràng buộc để tối đa hóa lợi nhuận F.'
      }
    ],
    recognitionSigns: [
      'Đề bài cho hệ gồm từ 3 bất phương trình bậc nhất hai ẩn trở lên và một biểu thức mục tiêu $F(x; y) = ax + by$.\\n',
      'Bài toán thực tế yêu cầu tối ưu hóa (tìm giá trị lớn nhất của lợi nhuận hoặc nhỏ nhất của chi phí) dưới các điều kiện ràng buộc tài nguyên có dạng bất phương trình tuyến tính.'
    ],
    solvingSteps: [
      'Bước 1: Thiết lập hệ bất phương trình ràng buộc và biểu thức mục tiêu $F(x; y) = ax + by$ từ dữ liệu đề bài.',
      'Bước 2: Vẽ các đường thẳng tương ứng với các phương trình biên trên mặt phẳng tọa độ $Oxy$.',
      'Bước 3: Xác định miền nghiệm đa giác bằng cách thử điểm (thường chọn gốc tọa độ $O(0;0)$ nếu các biên không đi qua O) và gạch bỏ phần không thỏa mãn.',
      'Bước 4: Giải hệ phương trình giao điểm để tìm tọa độ các đỉnh của miền đa giác nghiệm.',
      'Bước 5: Tính giá trị của biểu thức mục tiêu $F(x; y)$ tại tất cả các đỉnh vừa tìm được, so sánh các kết quả để đưa ra kết luận tối ưu.'
    ],
    commonMistakes: [
      'Vẽ sai hướng hoặc xác định sai phía miền nghiệm của các bất phương trình (gạch nhầm phần nghiệm đúng).',
      'Giải sai tọa độ các giao điểm (đỉnh của đa giác) do tính toán nhầm hệ phương trình tuyến tính.',
      'Quên không tính giá trị tại gốc tọa độ $O(0;0)$ trong trường hợp gốc O cũng là một đỉnh của miền nghiệm cần xét.'
    ],
    difficulty: 'medium',
    examFrequency: 'high'
  },
  {
    id: 'math10-qt4',
    topicId: 'math10-t3',
    name: 'Xác định Parabol và Giá trị lớn nhất, nhỏ nhất của hàm số bậc hai',
    slug: 'xac-dinh-parabol-cuc-tri',
    description: 'Tìm các hệ số a, b, c của parabol $y = ax^2 + bx + c$ dựa trên các yếu tố hình học cho trước (đỉnh, trục đối xứng, điểm đi qua) và ứng dụng tìm giá trị lớn nhất, nhỏ nhất trong bài toán thực tế.',
    exampleQuestionId: 'math10-q4',
    theory: [
      '**1. Hàm số bậc hai và Parabol**:\n- Hàm số bậc hai có dạng tổng quát $y = ax^2 + bx + c$ ($a \\neq 0$), đồ thị của nó là một đường cong gọi là **Parabol**.\n- Nếu $a > 0$: Parabol có bề lõm hướng lên (hình chữ U), hàm số đạt **giá trị nhỏ nhất** (GTNN) tại đỉnh.\n- Nếu $a < 0$: Parabol có bề lõm hướng xuống (hình chữ U ngược), hàm số đạt **giá trị lớn nhất** (GTLN) tại đỉnh.',
      '**2. Đỉnh và Trục đối xứng của Parabol**:\n- Tọa độ đỉnh $I$ của parabol $y = ax^2 + bx + c$ là:\n$$I\\left(-\\frac{b}{2a}; -\\frac{\\Delta}{4a}\\right) \\quad \\text{với } \\Delta = b^2 - 4ac$$\n- Trục đối xứng là đường thẳng đứng $x = -\\frac{b}{2a}$.\n- **Dạng đỉnh** (dạng chính tắc): $y = a(x - p)^2 + q$ với đỉnh $I(p; q)$.\n- Chuyển đổi: $p = -\\frac{b}{2a}$, $q = -\\frac{\\Delta}{4a}$.',
      '**3. Giá trị lớn nhất, nhỏ nhất của hàm số bậc hai**:\n- Nếu $a > 0$: $y_{\\min} = -\\frac{\\Delta}{4a}$ đạt tại $x = -\\frac{b}{2a}$. Hàm số không có GTLN.\n- Nếu $a < 0$: $y_{\\max} = -\\frac{\\Delta}{4a}$ đạt tại $x = -\\frac{b}{2a}$. Hàm số không có GTNN.\n- **Trên đoạn $[m; n]$**: So sánh giá trị tại đỉnh (nếu đỉnh nằm trong đoạn) và giá trị tại hai đầu mút $x = m$, $x = n$.',
      '**4. Xác định Parabol từ các điều kiện cho trước**:\n- **Biết đỉnh $I(p; q)$ và 1 điểm đi qua**: Dùng dạng đỉnh $y = a(x - p)^2 + q$, thay tọa độ điểm để tìm $a$.\n- **Biết 3 điểm đi qua**: Thay tọa độ 3 điểm vào $y = ax^2 + bx + c$ được hệ 3 phương trình 3 ẩn, giải tìm $a, b, c$.\n- **Biết trục đối xứng $x = p$ và 2 điểm đi qua**: Từ trục đối xứng suy ra $b = -2ap$, thay vào phương trình rồi dùng 2 điểm để lập hệ tìm $a, c$.'
    ],
    subTypes: [
      {
        name: 'Xác định phương trình Parabol từ điều kiện hình học',
        example: 'Viết phương trình parabol $y = ax^2 + bx + c$ biết parabol có đỉnh $I(2; -1)$ và đi qua điểm $A(0; 3).',
        note: 'Dùng dạng đỉnh: $y = a(x - 2)^2 - 1$. Thay $A(0; 3)$: $3 = a(0 - 2)^2 - 1 = 4a - 1 \\Rightarrow a = 1$. Vậy $y = (x - 2)^2 - 1 = x^2 - 4x + 3$.'
      },
      {
        name: 'Tìm GTLN/GTNN của hàm số bậc hai (thuần toán)',
        example: 'Tìm giá trị nhỏ nhất của hàm số $y = 2x^2 - 8x + 5$.',
        note: 'Ta có $a = 2 > 0$ nên hàm đạt GTNN tại đỉnh. Hoành độ đỉnh $x = -\\frac{b}{2a} = \\frac{8}{4} = 2$. GTNN $= y(2) = 2(4) - 8(2) + 5 = -3$.'
      },
      {
        name: 'Bài toán thực tế ứng dụng Parabol (cổng chào, quỹ đạo, diện tích)',
        example: 'Một quả bóng được đá lên theo quỹ đạo parabol $h(t) = -5t^2 + 20t + 1$ (m). Tìm chiều cao lớn nhất quả bóng đạt được.',
        note: 'Ta có $a = -5 < 0$ nên hàm đạt GTLN. Thời điểm đạt GTLN: $t = -\\frac{20}{2(-5)} = 2$ (giây). Chiều cao lớn nhất: $h(2) = -5(4) + 20(2) + 1 = 21$ (m).'
      }
    ],
    recognitionSigns: [
      'Đề bài yêu cầu lập phương trình parabol $y = ax^2 + bx + c$ từ các điều kiện hình học (đỉnh, trục đối xứng, giao với trục, đi qua điểm).',
      'Yêu cầu tìm chiều cao lớn nhất, diện tích lớn nhất, hoặc chi phí nhỏ nhất của một mô hình biến đổi theo hàm bậc hai (cổng parabol, quỹ đạo vật ném xiên, hàng rào bao quanh...).'
    ],
    solvingSteps: [
      'Bước 1: Xác định dạng phương trình phù hợp: dạng tổng quát $y = ax^2 + bx + c$ hoặc dạng đỉnh $y = a(x - p)^2 + q$.',
      'Bước 2: Thay các điều kiện cho trước vào phương trình để lập hệ phương trình tìm các hệ số.',
      'Bước 3: Giải hệ phương trình tuyến tính để tìm $a, b, c$ (hoặc $a, p, q$).',
      'Bước 4: Với bài toán cực trị, tính hoành độ đỉnh $x_I = -\\frac{b}{2a}$, thay vào hàm số để tìm GTLN/GTNN. Kiểm tra dấu $a$ để xác định đó là GTLN hay GTNN.',
      'Bước 5: Trả lời câu hỏi kèm đơn vị đo và kiểm tra tính thực tiễn của kết quả.'
    ],
    commonMistakes: [
      'Nhớ nhầm công thức hoành độ đỉnh: viết $x_I = \\frac{b}{2a}$ thay vì $x_I = -\\frac{b}{2a}$ (thiếu dấu trừ).',
      'Không giới hạn miền xác định thực tế của biến số (ví dụ: chiều dài, thời gian phải dương).',
      'Nhầm lẫn giữa GTLN ($a < 0$) và GTNN ($a > 0$) do không xét dấu hệ số $a$.'
    ],
    difficulty: 'medium',
    examFrequency: 'high'
  },
  {
    id: 'math10-qt5',
    topicId: 'math10-t5',
    name: 'Phân tích vectơ và Chứng minh ba điểm thẳng hàng',
    slug: 'phan-tich-vecto-thang-hang',
    description: 'Biểu diễn một vectơ theo hai vectơ không cùng phương cho trước và ứng dụng biểu thức vectơ để chứng minh ba điểm thẳng hàng hoặc hai đường thẳng song song.',
    exampleQuestionId: 'math10-q5',
    recognitionSigns: [
      'Đề bài cho tam giác hoặc hình bình hành kèm theo các điểm chia đoạn thẳng theo tỷ số.',
      'Yêu cầu phân tích vectơ $\\vec{AM}$ theo $\\vec{AB}$ và $\\vec{AC}$, hoặc chứng minh ba điểm A, M, N thẳng hàng.'
    ],
    solvingSteps: [
      'Bước 1: Chọn hai vectơ cơ sở không cùng phương (ví dụ $\\vec{AB}, \\vec{AC}$ của tam giác ABC).',
      'Bước 2: Sử dụng quy tắc ba điểm, quy tắc hình bình hành và định nghĩa tích của vectơ với một số để biểu diễn các vectơ trung gian.',
      'Bước 3: Để chứng minh ba điểm X, Y, Z thẳng hàng, ta biểu diễn hai vectơ $\\vec{XY}$ và $\\vec{XZ}$ theo cặp vectơ cơ sở rồi chứng minh tồn tại hằng số k sao cho $\\vec{XY} = k\\vec{XZ}$.',
      'Bước 4: Kết luận.'
    ],
    commonMistakes: [
      'Cộng trừ các vectơ sai quy tắc (quy tắc chèn điểm).',
      'Nhầm lẫn chiều hướng và tỷ lệ độ dài của các vectơ (ví dụ $\\vec{MB} = -2\\vec{MC}$ viết nhầm thành $2\\vec{MC}$).'
    ],
    difficulty: 'hard',
    examFrequency: 'high'
  },
  {
    id: 'math10-qt6',
    topicId: 'math10-t4',
    name: 'Hệ thức lượng và Giải tam giác trong thực tế',
    slug: 'he-thuc-luong-va-giai-tam-giac',
    description: 'Sử dụng các định lí Côsin, định lí Sin, công thức tính diện tích tam giác và giải tam giác để tìm các yếu tố trong tam giác hoặc đo đạc khoảng cách, chiều cao trong thực tế.',
    exampleQuestionId: 'math10-q44',
    theory: [
      '**1. Định lí Côsin**:\nTrong tam giác $ABC$ có các cạnh $a, b, c$ đối diện với các góc $A, B, C$:\n$$a^2 = b^2 + c^2 - 2bc \\cos A$$\n$$b^2 = a^2 + c^2 - 2ac \\cos B$$\n$$c^2 = a^2 + b^2 - 2ab \\cos C$$\n- **Hệ quả (Tính góc)**:\n$$\\cos A = \\frac{b^2 + c^2 - a^2}{2bc}, \\quad \\cos B = \\frac{a^2 + c^2 - b^2}{2ac}, \\quad \\cos C = \\frac{a^2 + b^2 - c^2}{2ab}$$',
      '**2. Định lí Sin**:\n$$\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C} = 2R$$\nTrong đó $R$ là bán kính đường tròn ngoại tiếp tam giác $ABC$.',
      '**3. Các công thức tính diện tích tam giác ($S$)**:\n- Công thức cơ bản: $S = \\frac{1}{2}ah_a = \\frac{1}{2}bh_b = \\frac{1}{2}ch_c$\n- Tích hai cạnh và sin góc xen giữa: $S = \\frac{1}{2}ab \\sin C = \\frac{1}{2}bc \\sin A = \\frac{1}{2}ac \\sin B$\n- Theo bán kính đường tròn ngoại tiếp $R$: $S = \\frac{abc}{4R}$\n- Theo bán kính đường tròn nội tiếp $r$ và nửa chu vi $p = \\frac{a+b+c}{2}$: $S = pr$\n- Công thức Heron: $S = \\sqrt{p(p-a)(p-b)(p-c)}$',
      '**4. Giải tam giác và Ứng dụng thực tế**:\n- **Giải tam giác**: Tính các cạnh và các góc chưa biết của tam giác khi đã cho trước một số yếu tố.\n- **Ứng dụng thực tế**: Mô hình hóa các bài toán đo khoảng cách giữa hai địa điểm bị ngăn cách (ví dụ sông, núi), đo chiều cao của một tòa tháp hoặc ngọn núi mà không thể trèo lên đỉnh bằng các tam giác và góc đo được từ giác kế.'
    ],
    subTypes: [
      {
        name: 'Tính các yếu tố trong tam giác (cạnh, góc, diện tích, bán kính R, r)',
        example: 'Cho tam giác $ABC$ có $a = 7, b = 8, c = 5$. Tính diện tích tam giác $S$ và bán kính đường tròn nội tiếp $r$.',
        note: 'Tính nửa chu vi $p = 10$. Dùng công thức Heron $S = \\sqrt{10(10-7)(10-8)(10-5)} = 10\\sqrt{3}$. Tính $r = S/p = \\sqrt{3}$.'
      },
      {
        name: 'Giải tam giác khi biết 2 cạnh và 1 góc, hoặc 1 cạnh và 2 góc',
        example: 'Cho tam giác $ABC$ có $b = 10$, góc $A = 30^\\circ$, góc $C = 45^\\circ$. Tính cạnh $a$ và $c$.',
        note: 'Góc $B = 180^\\circ - 30^\\circ - 45^\\circ = 105^\\circ$. Dùng định lí Sin: $a = \\frac{b \\sin A}{\\sin B}$ và $c = \\frac{b \\sin C}{\\sin B}$.'
      },
      {
        name: 'Bài toán đo đạc thực tế ứng dụng hệ thức lượng',
        example: 'Đo chiều cao của một ngọn tháp bằng cách đo góc nâng tại hai điểm cách nhau 20m. Điểm thứ nhất nhìn đỉnh góc $30^\\circ$, điểm thứ hai góc $45^\\circ$.',
        note: 'Sử dụng hệ thức lượng trong tam giác vuông hoặc định lí Sin trong tam giác thường để lập phương trình tính chiều cao tháp.'
      }
    ],
    recognitionSigns: [
      'Đề bài cho các cạnh, các góc hoặc diện tích tam giác và yêu cầu tìm yếu tố còn lại.',
      'Bài toán đo đạc thực tế có hình vẽ minh họa tam giác với các số đo góc và khoảng cách giữa các điểm quan sát.'
    ],
    solvingSteps: [
      'Bước 1: Vẽ hình, ký hiệu các đỉnh, cạnh ($a, b, c$) và góc ($A, B, C$) tương ứng của tam giác.',
      'Bước 2: Phân tích các yếu tố đã biết và chọn định lí phù hợp:\n  - Biết 3 cạnh: Dùng định lí Côsin để tính các góc.\n  - Biết 2 cạnh và góc xen giữa: Dùng định lí Côsin tìm cạnh thứ ba, sau đó dùng định lí Sin tìm các góc còn lại.\n  - Biết 1 cạnh và 2 góc: Tìm góc thứ ba, sau đó dùng định lí Sin để tìm hai cạnh còn lại.',
      'Bước 3: Chọn công thức diện tích thích hợp (Heron nếu biết 3 cạnh, sin nếu biết 2 cạnh 1 góc...) để tính diện tích, từ đó tính bán kính $R, r$ hoặc chiều cao nếu đề bài yêu cầu.',
      'Bước 4: Đối với bài toán thực tế, vẽ sơ đồ tam giác hóa các đối tượng địa lý và thực hiện tính toán, ghi rõ đơn vị đo.'
    ],
    commonMistakes: [
      'Nhầm lẫn giữa các công thức tính diện tích (ví dụ nhầm $S = \\frac{abc}{4R}$ thành $\\frac{abc}{R}$ hoặc $S = pr$ thành $S = \\frac{p}{r}$).',
      'Tính sai giá trị lượng giác của các góc lớn hơn $90^\\circ$ (ví dụ $\\cos 120^\\circ = -0.5$).',
      'Quên chuyển máy tính sang chế độ độ (Degree) khi bấm các hàm $\\sin, \\cos$ dẫn đến sai lệch kết quả số đo góc.'
    ],
    difficulty: 'medium',
    examFrequency: 'high'
  },
  {
    id: 'math10-qt7',
    topicId: 'math10-t5',
    name: 'Tích vô hướng của hai vectơ và ứng dụng',
    slug: 'tich-vo-huong-hai-vecto-va-ung-dung',
    description: 'Tính tích vô hướng của hai vectơ dựa trên độ dài và góc hoặc dựa trên tọa độ Oxy; ứng dụng tích vô hướng để tính độ dài đoạn thẳng, góc giữa hai vectơ và chứng minh tính vuông góc.',
    exampleQuestionId: 'math10-q54',
    theory: [
      '**1. Định nghĩa tích vô hướng**:\nCho hai vectơ $\\vec{u}$ và $\\vec{v}$ đều khác $\\vec{0}$. Tích vô hướng của $\\vec{u}$ và $\\vec{v}$ là một số, ký hiệu là $\\vec{u} \\cdot \\vec{v}$, được xác định bởi:\n$$\\vec{u} \\cdot \\vec{v} = |\\vec{u}| \\cdot |\\vec{v}| \\cdot \\cos(\\vec{u}, \\vec{v})$$\n- Bình phương vô hướng: $\\vec{u}^2 = |\\vec{u}|^2 \\Rightarrow |\\vec{u}| = \\sqrt{\\vec{u}^2}$.\n- Hệ quả (Tính góc giữa hai vectơ): $\\cos(\\vec{u}, \\vec{v}) = \\frac{\\vec{u} \\cdot \\vec{v}}{|\\vec{u}| \\cdot |\\vec{v}|}$ (với $\\vec{u}, \\vec{v} \\neq \\vec{0}$).',
      '**2. Biểu thức tọa độ trong mặt phẳng Oxy**:\nCho $\\vec{u} = (x_1; y_1)$ và $\\vec{v} = (x_2; y_2)$:\n- Tích vô hướng: $\\vec{u} \\cdot \\vec{v} = x_1x_2 + y_1y_2$\n- Độ dài vectơ: $|\\vec{u}| = \\sqrt{x_1^2 + y_1^2}$\n- Góc giữa hai vectơ: $\\cos(\\vec{u}, \\vec{v}) = \\frac{x_1x_2 + y_1y_2}{\\sqrt{x_1^2 + y_1^2} \\cdot \\sqrt{x_2^2 + y_2^2}}$\n- Điều kiện hai vectơ vuông góc: $\\vec{u} \\perp \\vec{v} \\Leftrightarrow \\vec{u} \\cdot \\vec{v} = 0 \\Leftrightarrow x_1x_2 + y_1y_2 = 0$.'
    ],
    subTypes: [
      {
        name: 'Tính tích vô hướng và góc dựa trên độ dài và góc cho trước',
        example: 'Cho tam giác đều $ABC$ cạnh $a$. Tính tích vô hướng $\\vec{AB} \\cdot \\vec{AC}$.',
        note: 'Ta có $|\\vec{AB}| = a, |\\vec{AC}| = a$ và góc $(\\vec{AB}, \\vec{AC}) = \\angle BAC = 60^\\circ$. Vậy $\\vec{AB} \\cdot \\vec{AC} = a \\cdot a \\cdot \\cos 60^\\circ = \\frac{a^2}{2}$.'
      },
      {
        name: 'Tính tích vô hướng, độ dài, góc bằng tọa độ Oxy',
        example: 'Cho $\\vec{u} = (1; 2)$ và $\\vec{v} = (-2; 1)$. Tính tích vô hướng và góc giữa chúng.',
        note: '$\\vec{u} \\cdot \\vec{v} = 1(-2) + 2(1) = 0 \\Rightarrow \\vec{u} \\perp \\vec{v}$, góc giữa hai vectơ bằng $90^\\circ$.'
      },
      {
        name: 'Ứng dụng bình phương vô hướng tính độ dài và chứng minh vuông góc',
        example: 'Cho hai vectơ $\\vec{a}$ và $\\vec{b}$ thỏa mãn $|\\vec{a}| = 2, |\\vec{b}| = 3, (\\vec{a}, \\vec{b}) = 120^\\circ$. Tính độ dài vectơ $\\vec{u} = 2\\vec{a} - \\vec{b}$.',
        note: 'Tính $|\\vec{u}|^2 = (2\\vec{a} - \\vec{b})^2 = 4\\vec{a}^2 - 4\\vec{a}\\cdot\\vec{b} + \\vec{b}^2$. Thế số ta được $|\\vec{u}| = \\sqrt{37}$.'
      }
    ],
    recognitionSigns: [
      'Đề bài yêu cầu tính tích vô hướng $\\vec{u} \\cdot \\vec{v}$ hoặc góc giữa hai vectơ.',
      'Yêu cầu chứng minh hai đường thẳng vuông góc hoặc hai vectơ vuông góc.',
      'Đề bài cho độ dài các vectơ và góc giữa chúng, hoặc cho tọa độ các điểm/vectơ trên hệ trục Oxy.'
    ],
    solvingSteps: [
      'Bước 1: Xác định phương pháp tính tích vô hướng phù hợp (định nghĩa hình học hay biểu thức tọa độ Oxy).',
      'Bước 2: \n  - Nếu dùng tọa độ: Áp dụng công thức $\\vec{u} \\cdot \\vec{v} = x_1x_2 + y_1y_2$.\n  - Nếu dùng hình học: Xác định độ dài hai vectơ và góc chung của chúng. Chú ý đưa về chung gốc (ví dụ góc giữa $\\vec{AB}$ và $\\vec{BC}$ là $180^\\circ - \\angle B$).',
      'Bước 3: Tính góc hoặc chứng minh vuông góc (nếu tích vô hướng bằng 0 thì hai vectơ vuông góc).',
      'Bước 4: Để tính độ dài biểu thức vectơ phức tạp, bình phương vô hướng biểu thức đó rồi khai căn ở kết quả cuối.'
    ],
    commonMistakes: [
      'Xác định sai góc giữa hai vectơ khi chúng chưa chung gốc (ví dụ góc giữa $\\vec{AB}$ và $\\vec{BC}$ viết nhầm thành góc $\\angle B$ thay vì $180^\\circ - \\angle B$).',
      'Lẫn lộn bình phương vô hướng của vectơ và bình phương độ dài (thực chất chúng bằng nhau: $\\vec{u}^2 = |\\vec{u}|^2$).',
      'Nhầm dấu khi thực hiện nhân các tọa độ âm.'
    ],
    difficulty: 'medium',
    examFrequency: 'high'
  }
];
