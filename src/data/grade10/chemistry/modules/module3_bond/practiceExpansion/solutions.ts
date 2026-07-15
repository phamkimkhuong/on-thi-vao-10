import type { Solution } from '@/types';
const solution=(questionId:string,finalAnswer:string,recognition:string,explanation:string,mistake:string):Solution=>({id:`${questionId}-solution`,questionId,recognition,detailedSteps:[{order:1,title:'Lập luận',explanation}],finalAnswer,commonMistakes:[mistake],reviewSuggestions:['Liên hệ cấu tạo vi mô với loại liên kết và tính chất quan sát được.']});
export const m3ExpansionSolutions: Solution[] = [
 solution('chem10-m3-qt13-e1','A','Dự đoán ion theo octet.','Al nhường 3 electron hóa trị để đạt cấu hình khí hiếm, tạo $Al^{3+}$.','Ghi điện tích âm khi nguyên tử nhường electron.'),
 solution('chem10-m3-qt13-e2','B','Mô tả sự chuyển electron.','Mg nhường 2e thành $Mg^{2+}$; O nhận đúng 2e thành $O^{2-}$, cả hai đạt cấu hình bền.','Cho rằng cả hai nguyên tử cùng nhường hoặc cùng nhận electron.'),
 solution('chem10-m3-qt13-e3','C','Từ Z suy ion rồi lập công thức.','Z=13 cho $X^{3+}$; Z=8 cho $Y^{2-}$. Trung hòa điện tích cần 2 X và 3 Y, nên $X_2Y_3$.','Hoán đổi chỉ số khi cân bằng điện tích.'),
 solution('chem10-m3-qt14-e1','B','Giải thích tính dẫn điện của chất ion.','Dòng điện cần hạt mang điện chuyển động. Ion bị cố định trong chất rắn nhưng chuyển động được khi nóng chảy.','Cho rằng hợp chất ion dẫn điện nhờ electron tự do như kim loại.'),
 solution('chem10-m3-qt14-e2','B','Lập công thức từ điện tích ion.','BCNN của 3 và 2 là 6: cần 2 $Al^{3+}$ và 3 $O^{2-}$, tạo $Al_2O_3$.','Không rút hoặc cân bằng tổng điện tích.'),
 solution('chem10-m3-qt14-e3','A','Giải thích tính giòn bằng mạng tinh thể.','Khi lớp mạng trượt, ion cùng dấu nằm kề nhau; lực đẩy tĩnh điện mạnh làm mạng tách và vỡ.','Chỉ ghi nhớ “giòn” mà không liên hệ cách sắp xếp ion.'),
 solution('chem10-m3-qt15-e1','A','Đọc Lewis của nước.','O có 6e hóa trị, tạo hai liên kết O–H và còn hai cặp electron chưa liên kết.','Bỏ quên cặp electron chưa liên kết.'),
 solution('chem10-m3-qt15-e2','C','Xác định bậc liên kết trong nitrogen.','Hai N dùng chung 3 cặp electron, tạo liên kết ba $N\equiv N$.','Nhầm ba cặp electron với sáu liên kết.'),
 solution('chem10-m3-qt15-e3','C','Đếm tổng electron hóa trị.','C góp 4e, hai O góp $2\times6e$; tổng $4+12=16e$.','Chỉ đếm electron tham gia liên kết.'),
 solution('chem10-m3-qt16-e1','B','Xác định chiều lệch electron.','O âm điện hơn H nên hút cặp electron liên kết mạnh hơn và mang $\delta^-$.','Cho rằng nguyên tử nhỏ hơn luôn mang đầu âm mà không xét độ âm điện.'),
 solution('chem10-m3-qt16-e2','C','Phân biệt phân cực liên kết và phân tử.','$CO_2$ thẳng, hai moment C=O bằng nhau và ngược chiều nên triệt tiêu.','Kết luận phân tử phân cực chỉ vì có liên kết phân cực.'),
 solution('chem10-m3-qt16-e3','B','So sánh hiệu độ âm điện.','$\Delta\chi$: C–H=0,35; C–O=0,89; H–F=1,78. Hiệu càng lớn, liên kết càng phân cực.','So sánh độ âm điện từng nguyên tử thay vì hiệu của cặp liên kết.'),
 solution('chem10-m3-qt17-e1','C','Nhận diện điều kiện tạo liên kết hydrogen.','$NH_3$ có liên kết N–H và cặp electron tự do trên N nên tạo được liên kết hydrogen liên phân tử.','Cho rằng mọi phân tử chứa H đều tạo liên kết hydrogen.'),
 solution('chem10-m3-qt17-e2','A','So sánh đồng phân bằng lực liên phân tử.','Ethanol có nhóm O–H nên các phân tử liên kết hydrogen; ether không có H gắn trực tiếp với O để tự cho liên kết H.','Cho rằng cùng phân tử khối thì nhiệt độ sôi phải bằng nhau.'),
 solution('chem10-m3-qt17-e3','B','Giải thích xu hướng lực London.','Từ $F_2$ đến $I_2$, đám mây electron lớn và dễ phân cực hơn, lực London mạnh hơn nên cần nhiều năng lượng hơn để sôi.','Cho rằng khi sôi phải phá liên kết cộng hóa trị trong phân tử.')
];
