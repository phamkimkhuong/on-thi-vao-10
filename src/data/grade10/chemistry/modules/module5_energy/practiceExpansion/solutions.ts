import type { Solution } from '@/types';
const s=(q:string,a:string,r:string,e:string,m:string):Solution=>({id:`${q}-solution`,questionId:q,recognition:r,detailedSteps:[{order:1,title:'Phân tích',explanation:e}],finalAnswer:a,commonMistakes:[m],reviewSuggestions:['Ghi rõ hệ số, chiều phản ứng và quy ước dấu trước khi thay số.']});
export const m5ExpansionSolutions: Solution[]=[
 s('chem10-m5-qt22-e1','B','Nhận diện quá trình thu nhiệt.','Túi lạnh lấy nhiệt từ môi trường vào quá trình hòa tan; hệ nhận năng lượng nên $\\Delta H>0$.','Thấy nhiệt độ giảm rồi kết luận hệ tỏa nhiệt.'),
 s('chem10-m5-qt22-e2','B','Xác định hướng truyền nhiệt qua ranh giới hệ.','Nước ngoài hệ nóng lên chứng tỏ năng lượng truyền từ hỗn hợp phản ứng ra môi trường; phản ứng tỏa nhiệt.','Nhầm nước nóng lên với hệ nhận nhiệt.'),
 s('chem10-m5-qt22-e3','A','Hiểu vai trò ranh giới hệ.','Hệ là phần được chọn để nghiên cứu. Có thể chọn khác nhau, nhưng mọi phát biểu về hướng truyền năng lượng phải nhất quán với ranh giới đó.','Cho rằng dấu enthalpy được chọn tùy ý.'),
 s('chem10-m5-qt23-e1','B','Đọc mức năng lượng.','$\\Delta H=H_{sp}-H_{cd}=90-250=-160$ kJ, nên phản ứng tỏa nhiệt.','Lấy chất đầu trừ sản phẩm.'),
 s('chem10-m5-qt23-e2','B','Đảo chiều và thay đổi hệ số.','Đảo $2A\\to B$ thành $B\\to2A$ làm $\\Delta H=+120$ kJ; chia phương trình cho 2 được $+60$ kJ.','Chỉ đổi dấu mà quên chia ΔH theo hệ số.'),
 s('chem10-m5-qt23-e3','B','Cộng các bước theo Hess.','Cộng hai quá trình triệt tiêu B: $A\\to C$ có $\\Delta H=40-75=-35$ kJ.','Cộng trị tuyệt đối và bỏ dấu.'),
 s('chem10-m5-qt24-e1','B','Áp dụng định nghĩa enthalpy tạo thành chuẩn.','Phản ứng tạo đúng 1 mol $H_2O(l)$ từ các đơn chất bền ở trạng thái chuẩn, nên $\\Delta H^\\circ=\\Delta_fH^\\circ=-285,8$ kJ.','Nhân đôi do thấy hệ số phân số của oxygen.'),
 s('chem10-m5-qt24-e2','A','Tính từ enthalpy tạo thành.','$\\Delta H=2(-393,5)-[2(-110,5)+0]=-787+221=-566$ kJ.','Bỏ hệ số 2 của CO và CO2.'),
 s('chem10-m5-qt24-e3','B','Tính enthalpy phản ứng phân hủy.','$\\Delta H=[-635+(-394)]-(-1207)=+178$ kJ; dấu dương phù hợp quá trình phân hủy cần nhiệt.','Cộng giá trị chất đầu thay vì trừ.'),
 s('chem10-m5-qt25-e1','B','Dùng năng lượng phá trừ năng lượng tạo.','$\\Delta H\\approx720-860=-140$ kJ. Tạo liên kết giải phóng nhiều hơn năng lượng cần để phá liên kết.','Dùng năng lượng tạo trừ năng lượng phá.'),
 s('chem10-m5-qt25-e2','A','Đếm liên kết hai vế.','Phá 1 H–H và 1 Br–Br: $436+193=629$; tạo 2 H–Br: $2(366)=732$; $\\Delta H=629-732=-103$ kJ.','Quên hệ số 2 của liên kết H–Br.'),
 s('chem10-m5-qt25-e3','A','Ước tính enthalpy phản ứng cháy.','Phá $4(C-H)+2(O=O)=4(413)+2(498)=2648$ kJ; tạo $2(C=O)+4(O-H)=2(799)+4(463)=3450$ kJ; $\\Delta H=2648-3450=-802$ kJ.','Đếm 2 liên kết O–H thay vì 4 trong 2 phân tử nước.')
];
