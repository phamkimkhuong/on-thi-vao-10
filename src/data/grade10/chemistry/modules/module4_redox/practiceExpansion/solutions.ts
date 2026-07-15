import type { Solution } from '@/types';
const s=(q:string,a:string,r:string,e:string,m:string):Solution=>({id:`${q}-solution`,questionId:q,recognition:r,detailedSteps:[{order:1,title:'Phân tích',explanation:e}],finalAnswer:a,commonMistakes:[m],reviewSuggestions:['Kiểm tra số oxi hóa, electron và bảo toàn nguyên tử trước khi chốt đáp án.']});
export const m4ExpansionSolutions: Solution[]=[
 s('chem10-m4-qt18-e1','C','Tìm số oxi hóa trong hợp chất trung hòa.','$2(+1)+2x+7(-2)=0\Rightarrow x=+6$.','Quên nhân số oxi hóa với chỉ số nguyên tử.'),
 s('chem10-m4-qt18-e2','A','Tìm số oxi hóa trong ion đa nguyên tử.','$x+4(+1)=+1\Rightarrow x=-3$.','Cho tổng số oxi hóa bằng 0 thay vì điện tích ion.'),
 s('chem10-m4-qt18-e3','C','Tính số oxi hóa trung bình.','$3x+4(-2)=0\Rightarrow x=+8/3$; đây là giá trị trung bình do có cả Fe(II) và Fe(III).','Cho rằng số oxi hóa trung bình bắt buộc là số nguyên.'),
 s('chem10-m4-qt19-e1','B','Theo dõi sự nhận electron.','Mn trong $MnO_4^-$ là +7, nhận 5e xuống +2 nên đây là quá trình khử.','Gọi nhận electron là oxi hóa.'),
 s('chem10-m4-qt19-e2','B','Viết bán phản ứng oxi hóa.','S tăng từ −2 lên 0, tức nhường 2e: $S^{2-}\rightarrow S+2e$.','Đặt electron sai vế.'),
 s('chem10-m4-qt19-e3','C','Nhận diện phản ứng tự oxi hóa–khử.','Một phần Cl giảm 0→−1, phần khác tăng 0→+1; chlorine đồng thời bị khử và bị oxi hóa.','Chỉ theo dõi một sản phẩm chứa chlorine.'),
 s('chem10-m4-qt20-e1','A','Xác định chất nhận electron.','Fe trong $Fe_2O_3$ giảm +3→0 nên $Fe_2O_3$ nhận electron, là chất oxi hóa.','Gọi CO là chất oxi hóa vì nó lấy oxygen.'),
 s('chem10-m4-qt20-e2','B','Xác định vai trò hai chất đầu.','$Cl_2$ giảm 0→−1 nên là chất oxi hóa; $I^-$ tăng −1→0 nên KI là chất khử.','Gọi chất bị oxi hóa là chất oxi hóa.'),
 s('chem10-m4-qt20-e3','C','Xét hai hướng biến đổi của cùng chất.','O trong $H_2O_2$ có số oxi hóa −1; một phần giảm xuống −2, phần khác tăng lên 0. Vì vậy $H_2O_2$ có cả hai vai trò.','Chỉ xét một sản phẩm.'),
 s('chem10-m4-qt21-e1','C','Cân bằng phản ứng redox đơn giản.','$4NH_3+3O_2\rightarrow2N_2+6H_2O$; tổng hệ số $4+3+2+6=15$.','Cân bằng N và H nhưng quên kiểm tra O.'),
 s('chem10-m4-qt21-e2','C','Cân bằng phản ứng có hai nguyên tố thay đổi.','$4FeS_2+11O_2\rightarrow2Fe_2O_3+8SO_2$, nên hệ số $O_2$ là 11.','Không kiểm tra lại số nguyên tử oxygen.'),
 s('chem10-m4-qt21-e3','B','Cân bằng trong môi trường acid.','$2KMnO_4+16HCl\rightarrow2KCl+2MnCl_2+5Cl_2+8H_2O$; các hệ số cần tìm là 16 và 5.','Bảo toàn electron nhưng thiếu HCl để cân bằng H và Cl.')
];
