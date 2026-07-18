import type { Solution } from '@/types';
const s=(q:string,a:string,e:string,m:string):Solution=>({id:`${q}-solution`,questionId:q,recognition:'Vận dụng dữ liệu tốc độ phản ứng.',detailedSteps:[{order:1,title:'Phân tích',explanation:e}],finalAnswer:a,commonMistakes:[m],reviewSuggestions:['Phân biệt tốc độ, lượng sản phẩm cuối và các biến thí nghiệm.']});
export const m6ExpansionSolutions:Solution[]=[
 s('chem10-m6-qt26-e1','B','$v=(0,90-0,54)/18=0,02$ M/s.','Quên đổi biến thiên nồng độ thành giá trị dương khi hỏi tốc độ tiêu thụ.'),
 s('chem10-m6-qt26-e2','C','Theo tỉ lượng, $v_B/v_A=3/2$ nên $v_B=0,08\\times3/2=0,12$ M/s.','Dùng tỉ lệ nghịch hệ số.'),
 s('chem10-m6-qt26-e3','C','$v_{NH_3}=0,24/20=0,012$ M/s; $v_{H_2}=3v_{NH_3}/2=0,018$ M/s.','Không xét hệ số 3 và 2.'),
 s('chem10-m6-qt27-e1','A','0–10 s: $\\Delta[A]=0,30$ M; 10–20 s: 0,15 M trong cùng 10 s, nên khoảng đầu nhanh hơn.','So sánh nồng độ cuối thay vì độ biến thiên theo thời gian.'),
 s('chem10-m6-qt27-e2','A','Độ lớn độ dốc ban đầu lớn hơn biểu thị tốc độ ban đầu lớn hơn; thời điểm nằm ngang không tự chứng minh lượng sản phẩm cuối lớn hơn.','Đồng nhất phản ứng nhanh với tạo nhiều sản phẩm cuối.'),
 s('chem10-m6-qt27-e3','B','A giảm nhanh gấp đôi B tăng, nên 2 mol A bị tiêu thụ khi tạo 1 mol B: $2A\\to B$.','Bỏ dấu và tỉ lệ độ lớn của hai độ dốc.'),
 s('chem10-m6-qt28-e1','C','Bột tăng diện tích tiếp xúc, acid 2 M tăng tần suất va chạm và 40°C tăng tỉ lệ va chạm hiệu quả.','Chỉ xét một yếu tố khi nhiều yếu tố cùng thay đổi.'),
 s('chem10-m6-qt28-e2','B','Nhiệt độ cao làm phân bố động năng dịch lên, tăng phần tiểu phân có năng lượng đạt $E_a$; không phải mọi va chạm đều hiệu quả.','Cho rằng nhiệt độ loại bỏ hoàn toàn năng lượng hoạt hóa.'),
 s('chem10-m6-qt28-e3','A','Nghiền làm tăng diện tích bề mặt tiếp xúc và số va chạm mỗi giây, không làm tăng số mol chất.','Cho rằng tốc độ lớn hơn nghĩa là lượng cuối lớn hơn.'),
 s('chem10-m6-qt29-e1','B','Để chỉ đo ảnh hưởng nồng độ, phải giữ đặc điểm Mg, nhiệt độ và thể tích nhất quán; nồng độ là biến độc lập.','Thay đồng thời nồng độ và diện tích Mg.'),
 s('chem10-m6-qt29-e2','A','Thể tích khí theo thời gian là dữ liệu trực tiếp để so sánh tốc độ tạo $O_2$ giữa mẫu đối chứng và mẫu xúc tác.','Chỉ quan sát một thời điểm không định lượng.'),
 s('chem10-m6-qt29-e3','A','Sau 30 s, nhiều khí hơn chỉ phản ánh tốc độ. Xúc tác không làm đổi lượng chất giới hạn; cần đo đến khi cả hai đạt trạng thái cuối.','Suy lượng sản phẩm cuối từ dữ liệu giữa quá trình.')
];
