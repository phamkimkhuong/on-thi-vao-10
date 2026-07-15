import type { Solution } from '@/types';

const make = (questionId: string, explanation: string, finalAnswer: string, commonMistakes: string[], reviewSuggestions: string[]): Solution => ({
  id: 'solution-' + questionId, questionId,
  recognition: 'Đọc biến thiên theo thời gian, xác định yếu tố thay đổi và chỉ kết luận trong giới hạn dữ liệu.',
  detailedSteps: [{ order: 1, title: 'Phân tích', explanation, result: finalAnswer }],
  finalAnswer, commonMistakes, reviewSuggestions
});

export const m6AssessmentSolutions: Solution[] = [
  make('chem10-assess-m6-cp-a-q01', 'Độ lớn tốc độ tiêu thụ A là $(0{,}80-0{,}50)/30=0{,}010$ M/s. Tốc độ được biểu diễn dương.', 'A', ['Giữ dấu âm của biến thiên chất đầu.', 'Không chia cho thời gian.'], ['Tốc độ trung bình']),
  make('chem10-assess-m6-cp-a-q02', 'Tốc độ bằng biến thiên nồng độ chia thời gian, nên đơn vị là $(mol/L)/s=mol/(L\\cdot s)$.', 'C', ['Chỉ ghi đơn vị nồng độ.', 'Đảo đơn vị.'], ['Đơn vị tốc độ phản ứng']),
  make('chem10-assess-m6-cp-a-q03', 'Độ lớn độ dốc biểu thị mức thay đổi nồng độ theo thời gian. Đường dốc nhất lúc đầu nên tốc độ lớn nhất ở giai đoạn đầu.', 'A', ['Đồng nhất nồng độ lớn với tốc độ lớn mà không xét độ dốc.'], ['Đồ thị nồng độ–thời gian']),
  make('chem10-assess-m6-cp-a-q04', 'Đồ thị sản phẩm vẫn tăng nhưng độ dốc giảm, nghĩa là sản phẩm vẫn hình thành với tốc độ giảm dần.', 'B', ['Cho rằng đường phẳng dần nghĩa là nồng độ giảm.'], ['Đồ thị nồng độ–thời gian']),
  make('chem10-assess-m6-cp-a-q05', 'Với cùng khối lượng, dạng bột có tổng diện tích bề mặt tiếp xúc với acid lớn hơn, làm tăng số va chạm tại bề mặt.', 'B', ['Cho rằng nghiền nhỏ làm đổi khối lượng mol hoặc ΔH.'], ['Ảnh hưởng của diện tích bề mặt']),
  make('chem10-assess-m6-cp-a-q06', 'Nhiệt độ tăng làm phân bố năng lượng dịch chuyển, tăng tỉ lệ tiểu phân có năng lượng đủ vượt năng lượng hoạt hóa.', 'B', ['Cho rằng mọi va chạm đều hiệu quả.', 'Đồng nhất tốc độ với lượng sản phẩm cuối.'], ['Ảnh hưởng của nhiệt độ']),
  make('chem10-assess-m6-cp-a-q07', 'Xúc tác tạo cơ chế có năng lượng hoạt hóa thấp hơn nhưng không đổi trạng thái đầu–cuối, nên không đổi ΔH.', 'A', ['Cho rằng xúc tác làm thay đổi ΔH.', 'Cho rằng xúc tác luôn tăng lượng sản phẩm cuối.'], ['Chất xúc tác']),
  make('chem10-assess-m6-cp-a-q08', 'Muốn cô lập ảnh hưởng của nồng độ, chỉ nồng độ HCl được thay đổi; các biến có thể ảnh hưởng tốc độ khác phải được kiểm soát.', 'B', ['Thay nhiều biến cùng lúc nên không biết nguyên nhân.', 'Dùng chất phản ứng khác nhau.'], ['Thiết kế thí nghiệm kiểm soát biến']),
  make('chem10-assess-m6-cp-a-q09', '$v_{tb}=\\Delta[B]/\\Delta t=0{,}24/60=0{,}004$ M/s.', '0.004', ['Chia thời gian cho nồng độ.', 'Sai vị trí dấu thập phân.'], ['Tốc độ trung bình tạo sản phẩm']),
  make('chem10-assess-m6-cp-a-q10', 'Độ giảm nồng độ là $1{,}00-0{,}70=0{,}30$ M trong 20 s; tốc độ là $0{,}30/20=0{,}015$ M/s.', '0.015', ['Dùng giá trị nồng độ cuối thay cho biến thiên.'], ['Đọc dữ liệu nồng độ–thời gian']),
  make('chem10-assess-m6-cp-a-q11', 'Với lượng chất không đổi, $C=n/V$. Khi thể tích giảm còn một nửa, nồng độ tăng gấp 2.', '2', ['Cho rằng nồng độ cũng giảm một nửa.'], ['Áp suất, nồng độ và tốc độ phản ứng khí']),
  make('chem10-assess-m6-cp-a-q12', 'Cùng khoảng thời gian và điều kiện đo, tỉ số tốc độ bằng tỉ số thể tích khí: $36/12=3$.', '3', ['So sánh hiệu 36−12 thay vì tỉ số.', 'Kết luận xúc tác làm tăng lượng sản phẩm cuối từ dữ liệu ngắn hạn.'], ['Xử lí dữ liệu thí nghiệm xúc tác'])
];
