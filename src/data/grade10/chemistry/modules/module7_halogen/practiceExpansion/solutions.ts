import type { Solution } from '@/types';
const s=(q:string,a:string,e:string,m:string):Solution=>({id:`${q}-solution`,questionId:q,recognition:'Vận dụng quy luật và phản ứng của halogen.',detailedSteps:[{order:1,title:'Phân tích',explanation:e}],finalAnswer:a,commonMistakes:[m],reviewSuggestions:['Liên hệ cấu hình, xu hướng oxi hóa và hiện tượng thực nghiệm.']});
export const m7ExpansionSolutions:Solution[]=[
 s('chem10-m7-qt30-e1','C','Số lượng tử lớp ngoài n=3 cho chu kì 3; $3s^23p^5$ có 7e ngoài cùng nên X thuộc nhóm VIIA, tức halogen.','Chỉ nhìn số mũ p⁵ rồi quên cộng hai electron 3s.'),
 s('chem10-m7-qt30-e2','B','Xuống nhóm, số electron và kích thước đám mây tăng, lực London mạnh hơn nên nhiệt độ sôi tăng.','Dùng tính oxi hóa để giải thích trực tiếp nhiệt độ sôi.'),
 s('chem10-m7-qt30-e3','B','Xuống nhóm: thêm lớp electron làm bán kính tăng; khả năng nhận electron giảm; lực London tăng nên nhiệt độ sôi tăng.','Cho rằng mọi tính chất biến đổi cùng chiều.'),
 s('chem10-m7-qt31-e1','C','$Cl_2$ oxi hóa $I^-$ thành $I_2$: $Cl_2+2I^-\\to2Cl^-+I_2$.','Chọn halogen có tính oxi hóa mạnh hơn làm sản phẩm.'),
 s('chem10-m7-qt31-e2','C','$I_2$ yếu hơn $Cl_2$ nên không thể oxi hóa $Cl^-$ tạo $Cl_2$; ba phản ứng còn lại thuận theo dãy oxi hóa.','Đảo chiều quy tắc halogen mạnh thế halide yếu.'),
 s('chem10-m7-qt31-e3','C','Tính khử halide tăng $F^-<Cl^-<Br^-<I^-$; vì vậy $I^-$ dễ nhường electron hơn $Br^-$.','Nhầm tính oxi hóa của halogen với tính khử của halide.'),
 s('chem10-m7-qt32-e1','C','$Cl_2+2NaOH\\to NaCl+NaClO+H_2O$ có tổng hệ số $1+2+1+1+1=6$.','Bỏ hệ số 1 khi tính tổng.'),
 s('chem10-m7-qt32-e2','A','HClO là chất oxi hóa, phá hủy chất màu; HCl không phải tác nhân tẩy màu chính.','Quy tác dụng tẩy màu cho chloride.'),
 s('chem10-m7-qt32-e3','B','Cl ban đầu 0; trong NaCl là −1 (khử), trong NaClO là +1 (oxi hóa), nên cùng nguyên tố biến đổi hai chiều.','Chỉ theo dõi một sản phẩm chứa Cl.'),
 s('chem10-m7-qt33-e1','D','HF tạo mạng liên kết hydrogen giữa các phân tử nên có nhiệt độ sôi cao bất thường.','Suy nhiệt độ sôi chỉ từ phân tử khối.'),
 s('chem10-m7-qt33-e2','A','Xuống nhóm, liên kết H–X dài và yếu dần, phân li trong nước dễ hơn nên độ mạnh acid tăng.','Suy acid mạnh chỉ từ độ âm điện.'),
 s('chem10-m7-qt33-e3','D','Ion lớn $I^-$ giữ electron ngoài cùng kém chặt hơn nên dễ bị oxi hóa nhất, có tính khử mạnh nhất.','Đồng nhất tính oxi hóa của $I_2$ với tính khử của $I^-$.'),
 s('chem10-m7-qt34-e1','B','AgBr là kết tủa vàng nhạt/kem; AgCl trắng và AgI vàng.','Nhầm màu AgBr với AgI.'),
 s('chem10-m7-qt34-e2','A','Màu trắng gợi ý AgCl nhưng kết luận đáng tin cần kiểm soát nhiễu, mẫu trắng và loại trừ ion khác tạo kết tủa bạc.','Coi một quan sát màu là bằng chứng duy nhất tuyệt đối.'),
 s('chem10-m7-qt34-e3','A','HCl đưa thêm $Cl^-$ vào mẫu; gặp $Ag^+$ sẽ tạo AgCl ngay cả khi mẫu ban đầu không có chloride.','Cho rằng acid nào cũng dùng tương đương trong phép thử.')
];
