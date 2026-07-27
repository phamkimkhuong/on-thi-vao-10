import type { CourseSolution } from '@/data/schema';

type SolutionSpec = {
  number: number;
  answer: 'A' | 'B' | 'C' | 'D';
  recognition: string;
  calculation: string;
  conclusion: string;
  mistake: string;
  review: string;
};

const s = (
  number: number,
  answer: SolutionSpec['answer'],
  recognition: string,
  calculation: string,
  conclusion: string,
  mistake: string,
  review: string
): SolutionSpec => ({ number, answer, recognition, calculation, conclusion, mistake, review });

const specs: SolutionSpec[] = [
  s(49, 'B', 'Dãy được cho bằng công thức số hạng tổng quát.', 'Thay $n=5$: $u_5=2\\cdot5-1=9$.', 'Số hạng cần tìm là 9.', 'Thay $n=4$ do đếm số bước thay vì chỉ số.', 'Ôn cách tính số hạng từ $u_n$.'),
  s(50, 'C', 'Thay trực tiếp chỉ số của số hạng thứ tư.', '$u_4=4^2+1=17$.', 'Chọn phương án C.', 'Tính $4^2$ thành 8.', 'Ôn thứ tự thực hiện phép tính.'),
  s(51, 'A', 'Đối chiếu quy luật giữa mỗi chỉ số và giá trị trong bảng.', 'Các giá trị đều bằng 3 lần chỉ số: $3=3\\cdot1$, $6=3\\cdot2$, ...', 'Công thức là $u_n=3n$.', 'Chỉ kiểm tra một ô trong bảng.', 'Ôn biểu diễn dãy bằng bảng và công thức.'),
  s(52, 'C', 'Tìm chỉ số bằng cách giải phương trình $u_n=25$.', '$4n-3=25\\Rightarrow4n=28\\Rightarrow n=7$.', 'Số 25 là số hạng thứ 7.', 'Cho rằng giá trị 25 cũng là chỉ số.', 'Ôn phân biệt $n$ và $u_n$.'),
  s(53, 'B', 'Dãy gồm các bình phương liên tiếp.', '$u_5=5^2=25$.', 'Số hạng tiếp theo là 25.', 'Cộng một hiệu cố định dù các hiệu thay đổi.', 'Ôn nhận dạng quy luật dãy.'),
  s(54, 'B', 'Dấu của $(-1)^n$ phụ thuộc vào tính chẵn lẻ của $n$.', '$(-1)^5=-1$, nên $u_5=(-1)\\cdot5=-5$.', 'Kết quả là $-5$.', 'Bỏ qua thừa số $(-1)^n$.', 'Ôn lũy thừa của $-1$.'),
  s(55, 'C', 'Tính lần lượt theo hệ thức truy hồi.', '$u_2=5$, $u_3=8$, $u_4=11$.', 'Vậy $u_4=11$.', 'Chỉ cộng 3 một lần.', 'Ôn cách đọc chỉ số trong dãy truy hồi.'),
  s(56, 'C', 'Mỗi số hạng từ số hạng thứ ba bằng tổng hai số ngay trước.', '$u_3=3$, $u_4=5$, $u_5=8$.', 'Suy ra $u_5=8$.', 'Dùng $u_1+u_2$ cho mọi bước.', 'Ôn cập nhật số hạng trong truy hồi hai bước.'),
  s(57, 'A', 'Xét hiệu và so sánh mỗi số hạng với 1.', '$u_{n+1}-u_n=\\frac1{(n+1)(n+2)}>0$ và $u_n=1-\\frac1{n+1}<1$.', 'Dãy tăng và bị chặn trên bởi 1.', 'Thấy phân số nhỏ hơn 1 rồi kết luận dãy giảm.', 'Ôn xét đơn điệu bằng hiệu.'),
  s(58, 'B', 'Hệ số của $n$ âm cho thấy số hạng giảm đều.', '$u_{n+1}-u_n=[5-2(n+1)]-(5-2n)=-2<0$.', 'Dãy giảm.', 'Cho rằng dãy hết xác định khi số hạng âm.', 'Ôn miền chỉ số và dấu của hiệu.'),
  s(59, 'D', 'Mỗi bước nhân số hạng trước với 2.', '$u_2=2$, $u_3=4$, $u_4=8$.', 'Giá trị $u_4$ là 8.', 'Cộng 2 thay vì nhân 2.', 'Ôn hệ thức truy hồi dạng nhân.'),
  s(60, 'C', 'Liệt kê vài số hạng và đồng thời tìm cận.', 'Dãy lần lượt là $-1,1,-1,1,\\ldots$, nên không tăng cũng không giảm và $-1\\le u_n\\le1$.', 'Dãy không đơn điệu nhưng bị chặn.', 'Kết luận không bị chặn vì dãy dao động.', 'Ôn khái niệm bị chặn và đơn điệu.'),
  s(61, 'C', 'Dùng số hạng tổng quát của cấp số cộng.', '$u_6=u_1+(6-1)d=3+5\\cdot4=23$.', 'Suy ra $u_6=23$.', 'Dùng $6d$ thay vì $5d$.', 'Ôn công thức $u_n=u_1+(n-1)d$.'),
  s(62, 'B', 'Lấy hiệu hai công thức số hạng.', '$u_8-u_3=(8-3)d=5d=22-7=15$.', 'Do đó $d=3$.', 'Chia cho 8 hoặc 3 thay vì hiệu chỉ số.', 'Ôn khoảng cách chỉ số trong cấp số cộng.'),
  s(63, 'A', 'Công sai là hiệu số hạng sau trừ số hạng trước.', '$d=7-10=-3$; các hiệu sau cũng bằng $-3$.', 'Công sai là $-3$.', 'Lấy trị tuyệt đối của hiệu.', 'Ôn định nghĩa công sai.'),
  s(64, 'C', 'Giải phương trình số hạng tổng quát.', '$25=5+(n-1)2\\Rightarrow n-1=10\\Rightarrow n=11$.', 'Số 25 ở vị trí thứ 11.', 'Viết $25=5+2n$ nên lệch một vị trí.', 'Ôn ý nghĩa của $n-1$.'),
  s(65, 'B', 'Số giữa của ba số hạng liên tiếp bằng trung bình cộng hai số ngoài.', '$2\\cdot10=x+16\\Rightarrow x=4$.', 'Giá trị $x$ là 4.', 'Lấy $10-16$ mà không giữ đúng thứ tự.', 'Ôn tính chất ba số hạng liên tiếp.'),
  s(66, 'B', 'Từ hai số hạng tìm công sai rồi suy ra số đầu.', '$u_{10}-u_4=6d=18\\Rightarrow d=3$; $u_1=u_4-3d=14-9=5$.', 'Số hạng đầu là 5.', 'Dùng $10-4+1=7$ khoảng công sai.', 'Ôn số bước giữa hai chỉ số.'),
  s(67, 'C', 'Tìm số hạng cuối rồi dùng công thức tổng.', '$u_{10}=2+9\\cdot3=29$ và $S_{10}=\\frac{10(2+29)}2=155$.', 'Tổng bằng 155.', 'Dùng $u_{10}=2+10\\cdot3$.', 'Ôn đồng thời công thức số hạng và tổng.'),
  s(68, 'D', 'Đây là tổng 20 số hạng đầu của cấp số cộng $1,2,3,\\ldots$.', '$S_{20}=\\frac{20(1+20)}2=210$.', 'Tổng bằng 210.', 'Cho rằng có 19 số hạng vì hiệu là 19.', 'Ôn đếm số hạng từ 1 đến $n$.'),
  s(69, 'B', 'Số ghế mỗi hàng tạo cấp số cộng.', '$u_{15}=20+14\\cdot2=48$; $S_{15}=\\frac{15(20+48)}2=510$.', 'Khán đài có 510 ghế.', 'Nhân 15 với số ghế hàng cuối.', 'Ôn mô hình tổng cấp số cộng.'),
  s(70, 'C', 'Khi biết số đầu và số cuối, dùng $S_n=\\frac{n(u_1+u_n)}2$.', '$230=\\frac{n(5+41)}2=23n$.', 'Suy ra $n=10$.', 'Dùng công thức tổng nhưng thay $n-1$ cho $n$.', 'Ôn công thức tổng theo số đầu và số cuối.'),
  s(71, 'C', 'Số cây mỗi ngày tăng đều 20 cây.', '$u_7=100+6\\cdot20=220$; $S_7=\\frac{7(100+220)}2=1120$.', 'Tổng cộng 1120 cây.', 'Cộng thêm 20 cho cả 7 ngày, kể cả ngày đầu.', 'Ôn xác định $u_1$ trong bài toán thực tế.'),
  s(72, 'D', 'Các bội là cấp số cộng $3,6,\\ldots,60$.', 'Có $n=60/3=20$ số hạng; $S=\\frac{20(3+60)}2=630$.', 'Tổng bằng 630.', 'Đếm 19 khoảng thành 19 số hạng.', 'Ôn đếm số hạng của cấp số cộng.'),
  s(73, 'C', 'Dùng công thức số hạng tổng quát của cấp số nhân.', '$u_5=2\\cdot3^{5-1}=2\\cdot81=162$.', 'Giá trị $u_5$ là 162.', 'Dùng số mũ 5 thay vì 4.', 'Ôn công thức $u_n=u_1q^{n-1}$.'),
  s(74, 'B', 'Công bội là tỉ số số hạng sau cho số hạng trước.', '$q=\\frac{27}{81}=\\frac13$.', 'Công bội là $\\frac13$.', 'Lấy số trước chia số sau nên được 3.', 'Ôn định nghĩa công bội.'),
  s(75, 'A', 'Tỉ số hai số hạng cách nhau ba bước bằng $q^3$.', '$q^3=\\frac{u_5}{u_2}=27$, dãy dương nên $q=3$; $u_1=6/3=2$.', 'Số hạng đầu là 2.', 'Cho rằng chỉ số cách nhau 5-2+1 bước.', 'Ôn số lần nhân giữa hai số hạng.'),
  s(76, 'D', 'Giữ dấu của công bội âm khi nâng lũy thừa.', '$u_4=5(-2)^{4-1}=5(-8)=-40$.', 'Giá trị là $-40$.', 'Bỏ ngoặc và tính $-2^3$ không nhất quán.', 'Ôn lũy thừa của số âm.'),
  s(77, 'C', 'Ba số hạng liên tiếp thỏa bình phương số giữa bằng tích hai số ngoài.', '$x^2=2\\cdot18=36$; vì $x>0$ nên $x=6$.', 'Giá trị $x$ là 6.', 'Giữ cả nghiệm $-6$ dù đề cho số dương.', 'Ôn tính chất ba số hạng liên tiếp.'),
  s(78, 'B', 'Từ $u_3$ đến $u_6$ có ba lần nhân công bội.', '$q^3=96/12=8\\Rightarrow q=2$; $u_1=u_3/q^2=12/4=3$.', 'Số hạng đầu là 3.', 'Chia $u_3$ cho $q^3$ thay vì $q^2$.', 'Ôn số mũ theo vị trí số hạng.'),
  s(79, 'C', 'Dùng tổng hữu hạn với $u_1=1$, $q=2$.', '$S_5=\\frac{1(1-2^5)}{1-2}=31$.', 'Tổng bằng 31.', 'Lấy số hạng thứ năm $16$ làm tổng.', 'Ôn công thức tổng cấp số nhân.'),
  s(80, 'B', 'Tính tổng bốn số hạng đầu của cấp số nhân.', '$S_4=3\\frac{1-3^4}{1-3}=3\\cdot40=120$.', 'Tổng bằng 120.', 'Bỏ hệ số số hạng đầu 3.', 'Ôn vai trò của $u_1$ trong công thức tổng.'),
  s(81, 'C', 'Mỗi chu kì nhân số lượng với 2.', '$N=200\\cdot2^5=200\\cdot32=6400$.', 'Sau 5 chu kì có 6400 vi khuẩn.', 'Dùng $2^4$ vì coi trạng thái đầu là chu kì thứ nhất.', 'Ôn mô hình tăng trưởng theo chu kì.'),
  s(82, 'D', 'Còn 90% mỗi năm nghĩa là nhân với $0{,}9$ mỗi năm.', '$V=100(0{,}9)^3=72{,}9$ triệu đồng.', 'Giá trị còn lại là $72{,}9$ triệu đồng.', 'Trừ thẳng 30% của giá ban đầu.', 'Ôn giảm theo tỉ lệ lũy thừa.'),
  s(83, 'D', 'Số người mới ở các vòng tạo cấp số nhân công bội 3.', 'Tổng đến vòng 4 là $1+3+9+27+81=121$.', 'Có 121 người tham gia.', 'Chỉ tính 81 người ở vòng cuối.', 'Ôn phân biệt số hạng cuối và tổng tích lũy.'),
  s(84, 'A', 'Dãy có $u_1=2$, $q=3$ và số hạng cuối $1458=2\\cdot3^6$.', 'Có 7 số hạng; $S_7=2\\frac{1-3^7}{1-3}=2186$.', 'Tổng bằng 2186.', 'Dùng 6 làm số số hạng vì số mũ cuối là 6.', 'Ôn liên hệ giữa số mũ và chỉ số.')
];

export const g11MathModule2Solutions: CourseSolution[] = specs.map(spec => {
  const suffix = String(spec.number).padStart(3, '0');

  return {
    id: `math11-s${suffix}`,
    courseId: 'grade11:math',
    moduleId: 'math11-m2',
    questionId: `math11-q${suffix}`,
    recognition: spec.recognition,
    detailedSteps: [
      { order: 1, title: 'Lập luận', explanation: spec.calculation },
      { order: 2, title: 'Kết luận', explanation: spec.conclusion }
    ],
    finalAnswer: spec.answer,
    commonMistakes: [spec.mistake],
    reviewSuggestions: [spec.review]
  };
});
