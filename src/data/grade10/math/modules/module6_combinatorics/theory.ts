import type { QuestionTypeTheoryCheckpoint } from '@/types';

export const math10Qt8Theory: string[] = [
  '**1. Nguyên tắc đếm đúng đối tượng**\nTrước khi tính, phải mô tả rõ “một kết quả” gồm những gì. Hai cách chỉ khác cách thực hiện nhưng tạo cùng kết quả cuối thì không được đếm hai lần, trừ khi đề coi thứ tự/quy trình là khác nhau.',
  '**2. Quy tắc cộng**\nNếu công việc được hoàn thành theo **một trong** các trường hợp đôi một không giao nhau, có lần lượt $n_1,n_2,\\ldots,n_k$ cách thì tổng số cách là:\n$$n_1+n_2+\\cdots+n_k$$\nDấu hiệu: chọn đúng một phương án thuộc một trong nhiều nhóm rời nhau.',
  '**3. Quy tắc nhân**\nNếu công việc gồm các công đoạn liên tiếp; công đoạn 1 có $n_1$ cách, với mỗi lựa chọn đó công đoạn 2 có $n_2$ cách,... thì số cách là:\n$$n_1n_2\\cdots n_k$$\nDấu hiệu: kết quả phải thực hiện **đồng thời/tiếp theo** đủ các công đoạn. “Độc lập” ở đây nghĩa số lựa chọn của bước sau đã được xác định đúng cho từng nhánh, không phải khái niệm biến cố độc lập.',
  '**4. Khi số lựa chọn phụ thuộc nhánh**\nNếu sau mỗi lựa chọn ở bước đầu, số cách bước sau khác nhau, không được nhân một con số chung. Hãy vẽ cây hoặc chia trường hợp; tính tích trên từng nhánh rồi cộng các nhánh.',
  '**5. Bao hàm–loại trừ**\nVới hai tập hữu hạn:\n$$|A\\cup B|=|A|+|B|-|A\\cap B|$$\nPhần giao bị cộng hai lần nên phải trừ một lần. Số phần tử không thuộc nhóm nào trong tập nền $U$ là:\n$$|U|-|A\\cup B|$$',
  '**6. Phương pháp biến cố đối trong bài đếm**\nSố cách thỏa “ít nhất một” thường tính nhanh bằng:\n$$N_{đúng}=N_{tất\\ cả}-N_{không\\ có}$$\nChỉ dùng khi tập “tất cả” dễ đếm và phần bù bao phủ đúng mọi trường hợp vi phạm.',
  '**7. Mã, số và chuỗi lựa chọn**\nMỗi vị trí là một công đoạn. Phải kiểm tra: có được lặp không, chữ số đầu có được bằng 0 không, các vị trí có vai trò khác nhau không và điều kiện có làm số lựa chọn bước sau thay đổi không.',
  '**8. Quy trình chọn quy tắc**\nXác định một kết quả; hỏi các trường hợp là “hoặc” hay các bước là “và”; kiểm tra giao nhau; kiểm tra ràng buộc và sự phụ thuộc; tính; cuối cùng thử một trường hợp nhỏ để phát hiện đếm trùng/bỏ sót.',
  '**9. Lỗi cần tránh**\n- Cộng số cách của các công đoạn liên tiếp.\n- Nhân các trường hợp thay thế nhau.\n- Dùng quy tắc cộng khi các nhóm có giao mà không trừ phần giao.\n- Cho phép lặp hoặc chữ số 0 trái yêu cầu.\n- Dùng phần bù nhưng chọn sai tập tất cả.'
];

export const math10Qt9Theory: string[] = [
  '**1. Giai thừa**\nVới $n\\in\\mathbb N$:\n$$n!=1\\cdot2\\cdots n,\\qquad0!=1$$\nCác công thức $P_n,A_n^k,C_n^k$ dưới đây dùng cho các phần tử **phân biệt**, với $0\\le k\\le n$.',
  '**2. Hoán vị**\nSắp xếp toàn bộ $n$ phần tử phân biệt vào $n$ vị trí phân biệt:\n$$P_n=n!$$\nDấu hiệu: dùng tất cả phần tử và thay đổi thứ tự tạo cách mới.',
  '**3. Chỉnh hợp**\nChọn $k$ phần tử từ $n$ phần tử phân biệt rồi xếp vào $k$ vị trí/vai trò phân biệt:\n$$A_n^k=n(n-1)\\cdots(n-k+1)=\\frac{n!}{(n-k)!}$$\nDấu hiệu: chỉ dùng $k$ phần tử và **có xét thứ tự**, như phân công chức vụ.',
  '**4. Tổ hợp**\nChọn một nhóm $k$ phần tử từ $n$ phần tử phân biệt, không xét thứ tự:\n$$C_n^k=\\frac{n!}{k!(n-k)!}$$\nHai tính chất thường dùng:\n$$C_n^k=C_n^{n-k},\\qquad C_n^k+C_n^{k+1}=C_{n+1}^{k+1}$$',
  '**5. Câu hỏi phân loại quyết định**\n- Dùng toàn bộ $n$ phần tử? Nếu có và xếp thứ tự: hoán vị.\n- Chỉ chọn $k<n$? Hỏi đổi vị trí hai phần tử có tạo kết quả khác không.\n- Có: chỉnh hợp. Không: tổ hợp.\nNếu đề cho phép lặp, không được tự động dùng ba công thức trên.',
  '**6. Xếp các phần tử phải đứng cạnh nhau**\nGộp nhóm bắt buộc cạnh nhau thành một “khối”, xếp khối cùng các phần tử còn lại, rồi nhân số hoán vị bên trong khối. Ví dụ hai bạn $A,B$ cạnh nhau trong hàng $n$ người:\n$$2(n-1)!$$',
  '**7. Các phần tử không được cạnh nhau**\nCách thường dùng:\n$$N_{không\\ cạnh}=N_{tất\\ cả}-N_{cạnh}$$\nHoặc xếp nhóm nền trước rồi chèn các phần tử bị tách vào các khoảng trống khi có nhiều đối tượng không được kề nhau.',
  '**8. Chọn nhóm có điều kiện**\n- Một người bắt buộc có mặt: cố định người đó rồi chọn phần còn lại.\n- Ít nhất một phần tử loại A: lấy tổng số nhóm trừ nhóm không có A.\n- Đúng $r$ phần tử loại A: $C_{n_A}^{r}C_{n_B}^{k-r}$ nếu hai nhóm rời nhau.',
  '**9. Kiểm tra bằng hai cách**\nVì $A_n^k=C_n^k\\,k!$, một bài “chọn rồi phân vị trí” có thể tính bằng tổ hợp nhân hoán vị. Hai cách phải cho cùng kết quả; đây là phép kiểm tra hữu ích.',
  '**10. Lỗi cần tránh**\n- Dùng tổ hợp cho chức vụ phân biệt.\n- Quên $0!=1$.\n- Quên hoán vị bên trong khối.\n- Trừ sai phần bù “ít nhất một”.\n- Dùng $P,A,C$ khi phần tử được lặp hoặc không phân biệt.\n- Không kiểm tra $0\\le k\\le n$.'
];

export const math10Qt10Theory: string[] = [
  '**1. Công thức nhị thức Newton**\nVới $n\\in\\mathbb N$:\n$$(u+v)^n=\\sum_{k=0}^{n}C_n^k u^{n-k}v^k$$\nKhai triển có $n+1$ số hạng trước khi gộp các số hạng đồng dạng.',
  '**2. Số hạng tổng quát và cách đánh số**\nSố hạng ứng với chỉ số $k$ là:\n$$T_{k+1}=C_n^k u^{n-k}v^k\\qquad(0\\le k\\le n)$$\nVì chỉ số bắt đầu từ $k=0$, **số hạng thứ $r$** tương ứng $k=r-1$.',
  '**3. Khai triển có dấu trừ**\nVới $(u-v)^n$, đặt số hạng thứ hai là $-v$:\n$$T_{k+1}=C_n^k u^{n-k}(-v)^k$$\nDấu phụ thuộc tính chẵn lẻ của $k$; không được đặt tất cả số hạng giữa mang cùng dấu.',
  '**4. Tìm hệ số của $x^m$**\nNếu $u=ax^p$, $v=bx^q$ thì:\n$$T_{k+1}=C_n^k a^{n-k}b^k x^{p(n-k)+qk}$$\nGiải phương trình số mũ $p(n-k)+qk=m$, rồi kiểm tra $k$ là số nguyên thuộc $[0;n]$. Hệ số cần tìm gồm cả $C_n^k$, lũy thừa của $a,b$ và dấu.',
  '**5. Số hạng không chứa $x$**\nĐặt tổng số mũ của $x$ bằng 0. Nếu phương trình cho $k$ không nguyên hoặc ngoài $0\\le k\\le n$, khai triển **không có** số hạng độc lập. Nếu có, phải thay $k$ vào toàn bộ $T_{k+1}$ để lấy cả hệ số.',
  '**6. Khai triển đầy đủ**\nViết lần lượt $k=0,1,\\ldots,n$; kiểm tra số mũ của $u$ giảm từ $n$ về 0, số mũ của $v$ tăng từ 0 lên $n$, và tổng hai số mũ luôn bằng $n$.',
  '**7. Các tính chất hệ số**\nDo $C_n^k=C_n^{n-k}$, dãy hệ số nhị thức đối xứng. Tổng các hệ số của đa thức theo $x$ có thể tìm bằng cách cho $x=1$ sau khi đã khai triển về đúng đa thức; tổng hệ số bậc chẵn/lẻ có thể dùng thêm $x=-1$ khi phù hợp.',
  '**8. Quy trình giải nhanh**\nXác định chính xác $u,v,n$; viết một lần $T_{k+1}$; rút gọn hệ số và số mũ của $x$; giải điều kiện số mũ; kiểm tra miền nguyên của $k$; cuối cùng mới tính hệ số/số hạng.',
  '**9. Lỗi cần tránh**\n- Quên $C_n^k$.\n- Nhầm số hạng thứ $k$ với chỉ số $k$.\n- Chỉ giải số mũ mà không kiểm tra $k$ nguyên và thuộc đoạn.\n- Bỏ lũy thừa của hệ số $a,b$.\n- Mất dấu khi $v<0$.\n- Trả lời “hệ số” bằng cả biểu thức chứa $x$.'
];

export const g10MathModule6TheoryByQuestionTypeId: Record<string, string[]> = {
  'math10-qt8': math10Qt8Theory,
  'math10-qt9': math10Qt9Theory,
  'math10-qt10': math10Qt10Theory
};

export const g10MathModule6TheoryCheckpointsByQuestionTypeId: Record<
  string,
  QuestionTypeTheoryCheckpoint[]
> = {
  'math10-qt8': [
    {
      id: 'math10-check-qt8-1',
      question: 'Một công việc gồm 3 cách thực hiện loại A hoặc 5 cách loại B, hai loại không giao nhau. Có bao nhiêu cách?',
      options: ['8', '15', '5', '2'],
      correctAnswer: 'A',
      explanation: 'Các trường hợp loại trừ nhau và chỉ chọn một trường hợp nên dùng quy tắc cộng: $3+5=8$.'
    },
    {
      id: 'math10-check-qt8-2',
      question: 'Có 4 áo và 3 quần. Chọn một áo và một quần có',
      options: ['7 cách', '12 cách', '4 cách', '3 cách'],
      correctAnswer: 'B',
      explanation: 'Hai công đoạn liên tiếp nên dùng quy tắc nhân: $4\\cdot3=12$.'
    },
    {
      id: 'math10-check-qt8-3',
      question: 'Nếu $|A|=20$, $|B|=15$, $|A\\cap B|=6$ thì $|A\\cup B|$ bằng',
      options: ['35', '29', '41', '9'],
      correctAnswer: 'B',
      explanation: '$|A\\cup B|=20+15-6=29$.'
    }
  ],
  'math10-qt9': [
    {
      id: 'math10-check-qt9-1',
      question: 'Chọn 3 học sinh từ 8 học sinh để lập một nhóm không phân chức vụ dùng',
      options: ['$P_8$', '$A_8^3$', '$C_8^3$', '$3^8$'],
      correctAnswer: 'C',
      explanation: 'Đổi thứ tự ba người không tạo nhóm mới nên dùng tổ hợp.'
    },
    {
      id: 'math10-check-qt9-2',
      question: 'Chọn lớp trưởng và lớp phó từ 10 bạn dùng',
      options: ['$C_{10}^2$', '$A_{10}^2$', '$P_{10}$', '$10^2$'],
      correctAnswer: 'B',
      explanation: 'Hai chức vụ khác nhau nên có xét thứ tự, dùng chỉnh hợp.'
    },
    {
      id: 'math10-check-qt9-3',
      question: 'Xếp hai bạn A, B cạnh nhau trong hàng gồm 6 bạn khác nhau có',
      options: ['$2\\cdot5!$', '$2\\cdot6!$', '$5!$', '$6!-2$'],
      correctAnswer: 'A',
      explanation: 'Gộp A, B thành một khối: xếp 5 đơn vị rồi đổi chỗ trong khối theo 2 cách.'
    }
  ],
  'math10-qt10': [
    {
      id: 'math10-check-qt10-1',
      question: 'Khai triển $(u+v)^n$ có bao nhiêu số hạng trước khi gộp đồng dạng?',
      options: ['$n$', '$n+1$', '$2n$', '$2^n$'],
      correctAnswer: 'B',
      explanation: 'Chỉ số $k$ chạy từ 0 đến n nên có $n+1$ số hạng.'
    },
    {
      id: 'math10-check-qt10-2',
      question: 'Số hạng thứ $r$ trong khai triển ứng với chỉ số',
      options: ['$k=r$', '$k=r+1$', '$k=r-1$', '$k=n-r$'],
      correctAnswer: 'C',
      explanation: '$T_{k+1}$ là số hạng ứng với k, nên số hạng thứ r có $k=r-1$.'
    },
    {
      id: 'math10-check-qt10-3',
      question: 'Muốn tìm số hạng không chứa x, ta phải',
      options: ['Đặt hệ số bằng 0', 'Đặt số mũ của x bằng 0', 'Cho x bằng 0 ngay', 'Chọn k=n'],
      correctAnswer: 'B',
      explanation: 'Số hạng độc lập có lũy thừa $x^0$; sau đó phải kiểm tra k nguyên và thuộc $[0;n]$.'
    }
  ]
};
