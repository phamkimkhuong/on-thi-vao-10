import type { Solution } from '@/types';
const s=(q:string,a:string,e:string,m:string):Solution=>({id:`${q}-solution`,questionId:q,recognition:'Câu hỏi tổng hợp nhiều mạch kiến thức Hóa học 10.',detailedSteps:[{order:1,title:'Kết nối dữ kiện',explanation:e}],finalAnswer:a,commonMistakes:[m],reviewSuggestions:['Viết chuỗi suy luận và kiểm tra từng mắt xích trước khi chọn đáp án.']});
export const m8ExpansionSolutions:Solution[]=[
 s('chem10-m8-qt35-e1','A','Z=16 cho $[Ne]3s^23p^4$: 3 lớp, 6 electron hóa trị; X ở chu kì 3 nhóm VIA, là phi kim thường nhận 2e.','Dừng ở cấu hình mà không nối đến vị trí và tính chất.'),
 s('chem10-m8-qt35-e2','A','Nguyên tố IA tạo $X^+$, VIIA tạo $Y^-$; lực hút ion tạo XY. Ion chuyển động được khi nóng chảy nên dẫn điện.','Cho rằng chất ion dẫn điện tốt ở trạng thái rắn.'),
 s('chem10-m8-qt35-e3','B','Cùng chu kì nên số lớp không đổi; Z tăng làm bán kính giảm, tính kim loại giảm và oxide chuyển dần từ base sang acid.','Cho rằng mọi tính chất tăng từ trái sang phải.'),
 s('chem10-m8-qt36-e1','A','−394 kJ ứng với 1 mol C; 0,50 mol ứng với $-394\times0,50=-197$ kJ.','Không tỉ lệ ΔH theo lượng chất.'),
 s('chem10-m8-qt36-e2','B','Đảo chiều đổi dấu thành +572 kJ; chia toàn bộ phương trình cho 2 thì ΔH còn +286 kJ.','Chỉ đổi dấu mà quên đổi theo hệ số.'),
 s('chem10-m8-qt36-e3','B','$\\Delta H=E_{\\text{phá}}-E_{\\text{tạo}}<0$ nên năng lượng giải phóng khi tạo liên kết lớn hơn năng lượng hấp thụ để phá liên kết.','Đảo công thức năng lượng liên kết.'),
 s('chem10-m8-qt37-e1','A','Mẫu 1: $120/30=4$ mL/s; mẫu 2: $180/60=3$ mL/s, nên mẫu 1 nhanh hơn.','So sánh thể tích khí mà bỏ qua thời gian.'),
 s('chem10-m8-qt37-e2','A','Thí nghiệm công bằng chỉ thay biến độc lập là xúc tác; nhiệt độ và các điều kiện khác phải được kiểm soát.','Thay nhiều biến rồi quy kết cho một biến.'),
 s('chem10-m8-qt37-e3','A','AgBr có màu vàng nhạt/kem. Màu là bằng chứng gợi ý, cần xét điều kiện và kiểm chứng để tránh nhiễu.','Biến một quan sát thành kết luận tuyệt đối.'),
 s('chem10-m8-qt38-e1','A','Z=17 là Cl: cấu hình ngoài cùng $3s^23p^5$, thường nhận 1e; $Cl_2$ oxi hóa và AgCl là kết tủa trắng.','Nhầm chlorine với kim loại hoặc màu kết tủa AgBr/AgI.'),
 s('chem10-m8-qt38-e2','B','Tốc độ phụ thuộc hàng rào hoạt hóa; ΔH chỉ phụ thuộc trạng thái đầu–cuối. Xúc tác hạ $E_a$ nhưng không đổi ΔH.','Đồng nhất phản ứng tỏa nhiệt với phản ứng nhanh.'),
 s('chem10-m8-qt38-e3','B','Đáp số tình cờ đúng không bù được phương trình sai bảo toàn và kết luận vượt bằng chứng; học làm chủ phải đúng cả quy trình lẫn lập luận.','Đánh giá năng lực chỉ bằng đáp số cuối.')
];
