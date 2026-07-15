import type { Solution } from '@/types';

const make = (questionId: string, explanation: string, finalAnswer: string, commonMistakes: string[], reviewSuggestions: string[]): Solution => ({
  id: 'solution-' + questionId, questionId,
  recognition: 'Đọc biến thiên theo thời gian, xác định yếu tố thay đổi và chỉ kết luận trong giới hạn dữ liệu.',
  detailedSteps: [{ order: 1, title: 'Phân tích', explanation, result: finalAnswer }],
  finalAnswer, commonMistakes, reviewSuggestions
});

export const m6AssessmentSolutionsFormB: Solution[] = [
  make('chem10-assess-m6-cp-b-q01', 'Độ lớn tốc độ tiêu thụ X là $(0{,}90-0{,}60)/15=0{,}020$ M/s.', 'A', ['Giữ dấu âm của biến thiên chất đầu.', 'Chia sai khoảng thời gian.'], ['Tốc độ trung bình']),
  make('chem10-assess-m6-cp-b-q02', 'Nồng độ sản phẩm tăng nên $\\Delta C>0$; tốc độ tạo sản phẩm được biểu diễn bằng giá trị dương.', 'B', ['Dùng dấu âm dành cho biểu thức tiêu thụ chất đầu.'], ['Dấu và đơn vị tốc độ']),
  make('chem10-assess-m6-cp-b-q03', 'Độ dốc lớn nhất biểu thị nồng độ sản phẩm tăng nhanh nhất, tức tốc độ tạo sản phẩm lớn nhất.', 'A', ['Chỉ nhìn vị trí cao thấp của đường thay vì độ dốc.'], ['Đồ thị nồng độ–thời gian']),
  make('chem10-assess-m6-cp-b-q04', 'Đường gần nằm ngang có độ dốc gần 0, nên tốc độ biến thiên nồng độ rất nhỏ; không thể chỉ từ đó kết luận nồng độ bằng 0.', 'B', ['Cho rằng nằm ngang đồng nghĩa nồng độ bằng 0.'], ['Đồ thị nồng độ–thời gian']),
  make('chem10-assess-m6-cp-b-q05', 'Chia nhỏ zinc làm tăng diện tích tiếp xúc với acid và tăng tần suất va chạm tại bề mặt.', 'A', ['Cho rằng chia nhỏ làm đổi nguyên tử khối.'], ['Ảnh hưởng của diện tích bề mặt']),
  make('chem10-assess-m6-cp-b-q06', 'Nồng độ cao hơn làm số tiểu phân trong một đơn vị thể tích lớn hơn, do đó tần suất va chạm tăng.', 'A', ['Cho rằng mọi va chạm đều hiệu quả.', 'Cho rằng nồng độ làm đổi ΔH.'], ['Ảnh hưởng của nồng độ']),
  make('chem10-assess-m6-cp-b-q07', 'Xúc tác mở con đường phản ứng có năng lượng hoạt hóa thấp hơn; nó không đổi ΔH của phản ứng.', 'A', ['Cho rằng xúc tác thay đổi enthalpy hoặc bản chất sản phẩm.'], ['Chất xúc tác']),
  make('chem10-assess-m6-cp-b-q08', 'Chỉ kích thước hạt được thay đổi; khối lượng zinc, acid và nhiệt độ được giữ như nhau để cô lập tác động của diện tích bề mặt.', 'B', ['Thay đồng thời kích thước và nồng độ.', 'Dùng hai kim loại khác nhau.'], ['Thiết kế thí nghiệm kiểm soát biến']),
  make('chem10-assess-m6-cp-b-q09', '$v_{tb}=0{,}30/75=0{,}004$ M/s.', '0.004', ['Chia sai 0,30 cho 75.', 'Đảo thương số.'], ['Tốc độ trung bình tạo sản phẩm']),
  make('chem10-assess-m6-cp-b-q10', 'Độ giảm nồng độ là $0{,}80-0{,}56=0{,}24$ M; $v=0{,}24/20=0{,}012$ M/s.', '0.012', ['Dùng nồng độ cuối thay cho độ biến thiên.'], ['Đọc dữ liệu nồng độ–thời gian']),
  make('chem10-assess-m6-cp-b-q11', '$C=n/V$; khi thể tích còn một phần ba và n không đổi, nồng độ tăng gấp 3.', '3', ['Cho rằng nồng độ giảm theo thể tích.'], ['Áp suất, nồng độ và tốc độ phản ứng khí']),
  make('chem10-assess-m6-cp-b-q12', 'Cùng thời gian 25 s, tỉ số tốc độ bằng $45/15=3$.', '3', ['Dùng hiệu thể tích thay vì tỉ số.', 'Suy ra lượng sản phẩm cuối từ tốc độ ban đầu.'], ['Xử lí dữ liệu thí nghiệm xúc tác'])
];
