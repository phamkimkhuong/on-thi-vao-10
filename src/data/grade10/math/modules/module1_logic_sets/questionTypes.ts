import type { QuestionType } from '@/types';
import { g10MathModule1TheoryByQuestionTypeId } from './theory';

export const g10MathModule1QuestionTypes: QuestionType[] = [
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
    "id": "math10-qt17",
    "topicId": "math10-t1",
    "name": "Mệnh đề, phủ định và suy luận logic",
    "slug": "menh-de-phu-dinh-suy-luan-logic",
    "description": "Nhận biết mệnh đề, xác định chân trị, phủ định đúng lượng từ và phân tích mệnh đề kéo theo, tương đương, điều kiện cần–đủ.",
    "recognitionSigns": [
      "Đề xuất hiện câu khẳng định đúng/sai, lượng từ “mọi”, “tồn tại” hoặc yêu cầu phủ định.",
      "Đề có cấu trúc “nếu…thì…”, “khi và chỉ khi”, “điều kiện cần/đủ”."
    ],
    "solvingSteps": [
      "Xác định mệnh đề thành phần, tập nền và lượng từ.",
      "Chuyển câu về cấu trúc logic P, Q trước khi biến đổi.",
      "Áp dụng đúng quy tắc phủ định, kéo theo hoặc tương đương.",
      "Kiểm tra bằng phản ví dụ hoặc bảng chân trị khi cần."
    ],
    "commonMistakes": [
      "Phủ định “mọi” nhưng không đổi thành “tồn tại”.",
      "Nhầm mệnh đề đảo với phản đảo.",
      "Coi một ví dụ đúng là chứng minh cho mệnh đề toàn thể."
    ],
    "difficulty": "medium",
    "examFrequency": "high",
    "exampleQuestionId": "math10-m1-q072",
    "theory": [
      "Mệnh đề là câu khẳng định có giá trị đúng hoặc sai.",
      "$\\neg(\\forall x,P(x))\\equiv\\exists x,\\neg P(x)$ và $\\neg(\\exists x,P(x))\\equiv\\forall x,\\neg P(x)$.",
      "$P\\Rightarrow Q$ tương đương phản đảo $\\neg Q\\Rightarrow\\neg P$; P là điều kiện đủ, Q là điều kiện cần."
    ]
  }
];

for (const questionType of g10MathModule1QuestionTypes) {
  questionType.theory =
    g10MathModule1TheoryByQuestionTypeId[questionType.id] ?? questionType.theory;
}
