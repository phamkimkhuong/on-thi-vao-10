import type { QuestionType } from '@/types';

export const g10MathModule2QuestionTypes: QuestionType[] = [
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
    }
];
