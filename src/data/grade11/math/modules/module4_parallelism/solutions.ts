import type { CourseSolution } from '@/data/schema';

const answers = (
  'BACDBBCABACD' +
  'DBACCABDACBD' +
  'BCADBCBABABD' +
  'BACDBACDABAC' +
  'BCDABCABADBD'
).split('') as Array<'A' | 'B' | 'C' | 'D'>;

const reasons = [
  'Ba điểm phải không thẳng hàng.',
  'Mặt phẳng chứa trọn đường thẳng qua hai điểm của nó.',
  'Tứ diện có bốn đỉnh và sáu cạnh.',
  '$A,B,C,D$ cùng nằm trên mặt phẳng đáy.',
  'Một đường và một điểm ngoài đường xác định duy nhất một mặt phẳng.',
  'Đường $AB$ qua hai điểm chung là giao tuyến.',
  '$S,O$ là hai điểm chung nên giao tuyến là $SO$.',
  'Hai điểm của $d$ thuộc mặt phẳng thì $d$ nằm trong mặt phẳng.',
  '$A,B$ là hai điểm chung nên giao tuyến là $AB$.',
  '$A$ thuộc cả $SA$ và mặt phẳng đáy.',
  '$B,C$ là hai điểm chung nên giao tuyến là $BC$.',
  '$M,N$ cùng thuộc hai mặt phẳng nên giao tuyến là $MN$.',
  'Hai cạnh đối của tứ diện không đồng phẳng nên chéo nhau.',
  '$AB$ và $BC$ cắt nhau tại $B$.',
  'Hai đường có vô số điểm chung thì trùng nhau.',
  '$AB,DC$ là hai cạnh đối của hình bình hành đáy.',
  'Hai đường chéo nhau được đặc trưng bởi tính không đồng phẳng.',
  'Hai đường phân biệt đồng phẳng và không cắt nhau thì song song.',
  '$MN$ là đường trung bình của tam giác $SAB$.',
  '$AB\\parallel CD\\parallel C\\prime D\\prime$.',
  'Hai đường phân biệt cùng song song đường thứ ba thì song song nhau.',
  '$MN$ là đường trung bình tam giác $ABC$ nên song song $BC$.',
  'Quan hệ song song đòi hỏi hai đường đồng phẳng.',
  'Các cạnh bên $AA\\prime,CC\\prime$ của lăng trụ song song.',
  'Áp dụng điều kiện đường thẳng song song với mặt phẳng.',
  '$MN\\parallel AB$ và $AB$ nằm trong mặt phẳng đáy.',
  'Đường song song mặt phẳng không có điểm chung với mặt phẳng.',
  'Giao tuyến $a$ của mặt phẳng phụ song song với $d$.',
  '$AB\\parallel CD$ với $CD$ nằm trong mặt phẳng đối diện.',
  '$MN\\parallel BC\\subset(BCD)$ và $MN$ không nằm trong $(BCD)$.',
  'Cần tìm đường $a\\subset(P)$ song song với $d$.',
  '$MN\\parallel AC\\subset(ABC)$ nên $MN\\parallel(ABC)$.',
  'Mệnh đề đúng chính là định nghĩa $d\\parallel(P)$.',
  'Tính chất mặt phẳng phụ cho $a\\parallel d$.',
  'Còn thiếu $a\\subset(P)$ và $d\\not\\subset(P)$.',
  '$SA$ cắt đáy tại $A$ và nằm trong hai mặt bên đã nêu.',
  'Hai đường cắt nhau cùng song song mặt phẳng kia xác định hai phương.',
  'Hai đáy của hình hộp song song.',
  'Mặt phẳng thứ ba cắt hai mặt phẳng song song theo hai đường song song.',
  'Qua điểm ngoài một mặt phẳng có duy nhất mặt phẳng song song.',
  'Hai đáy lăng trụ là hai đa giác bằng nhau trên hai mặt phẳng song song.',
  'Hai mặt phẳng phân biệt cùng song song mặt phẳng thứ ba thì song song nhau.',
  '$A\\prime B\\prime=9\\cdot\\frac23=6$.',
  '$\\frac46=\\frac8{B\\prime C\\prime}$ nên $B\\prime C\\prime=12$.',
  'Các cạnh bên của lăng trụ song song và bằng nhau.',
  'Các mặt đối diện của hình hộp song song.',
  'Thalès cho $A\\prime B\\prime/B\\prime C\\prime=AB/BC=3/5$.',
  '$\\frac69=\\frac{10}{B\\prime C\\prime}$ nên $B\\prime C\\prime=15$.',
  'Ảnh là giao của mặt phẳng chiếu với đường qua điểm theo phương chiếu.',
  'Phép chiếu song song bảo toàn tính thẳng hàng.',
  'Số đo góc không được bảo toàn nói chung.',
  'Ảnh không suy biến của đường tròn thường là elip.',
  'Hai đường song song được chiếu thành hai đường song song hoặc trùng nhau.',
  'Tỉ số trên cùng một đường được bảo toàn nên trung điểm thành trung điểm.',
  'Các cạnh song song phải được biểu diễn bằng các đoạn song song tương ứng.',
  'Cạnh bị che khuất thường được vẽ bằng nét đứt.',
  'Đường tròn nằm xiên thường được biểu diễn bằng elip.',
  '$A\\prime B\\prime/B\\prime C\\prime=AB/BC=2$.',
  'Các tia nắng gần song song tạo mô hình phép chiếu song song.',
  'Hai cặp cạnh song song được giữ nhưng góc vuông không được giữ.'
];

export const g11MathModule4Solutions: CourseSolution[] = reasons.map((reason, index) => {
  const number = 109 + index;
  const suffix = String(number).padStart(3, '0');
  return {
    id: `math11-s${suffix}`,
    courseId: 'grade11:math',
    moduleId: 'math11-m4',
    questionId: `math11-q${suffix}`,
    recognition: 'Xác định quan hệ không gian và kiểm tra đủ điều kiện của định nghĩa hoặc định lí.',
    detailedSteps: [
      { order: 1, title: 'Lập luận hình học', explanation: reason },
      { order: 2, title: 'Kết luận', explanation: `Phương án đúng là ${answers[index]}.` }
    ],
    finalAnswer: answers[index],
    commonMistakes: ['Suy luận bằng mắt từ hình biểu diễn hoặc bỏ sót điều kiện đồng phẳng, liên thuộc.'],
    reviewSuggestions: ['Ôn định nghĩa và dấu hiệu trong phần lý thuyết của bài tương ứng.']
  };
});
