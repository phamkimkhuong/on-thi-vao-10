import type { Solution } from '@/types';
const make=(questionId:string,explanation:string,finalAnswer:string,reviewSuggestions:string[]):Solution=>({id:'solution-'+questionId,questionId,recognition:'Kết nối dữ kiện với đúng mô hình và kiểm tra đơn vị, dấu hoặc hệ số.',detailedSteps:[{order:1,title:'Phân tích',explanation,result:finalAnswer}],finalAnswer,commonMistakes:['Áp dụng quy tắc ghi nhớ mà không kiểm tra điều kiện.','Bỏ dấu, hệ số hoặc đơn vị trong phép tính.'],reviewSuggestions});
export const final2SolutionsFormB:Solution[]=[
make('chem10-assess-final2-b-q01','$p=12$, $n=12$; ion 2+ mất hai electron nên $e=10$.','A',['Kí hiệu nguyên tử và ion']),
make('chem10-assess-final2-b-q02','$\\overline A=10(0{,}20)+11(0{,}80)=10{,}8$.','C',['Đồng vị và phổ khối']),
make('chem10-assess-final2-b-q03','Z=17 có cấu hình kết thúc $3p^5$, orbital là vùng xác suất và Cl thường nhận 1e.','A',['Mô hình và cấu hình electron']),
make('chem10-assess-final2-b-q04','Ba lớp electron, bảy electron ngoài cùng: chu kì 3, nhóm VIIA.','A',['Vị trí bảng tuần hoàn']),
make('chem10-assess-final2-b-q05','Đi xuống nhóm, Br có thêm lớp electron nên lớn hơn và tính phi kim yếu hơn Cl.','A',['Xu hướng tuần hoàn']),
make('chem10-assess-final2-b-q06','MgO base, alumina lưỡng tính và silica acid.','A',['Tính acid–base oxide']),
make('chem10-assess-final2-b-q07','Một $Ca^{2+}$ trung hòa với hai $F^-$.','A',['Liên kết ion']),
make('chem10-assess-final2-b-q08','Cấu trúc đối xứng làm các moment C–Cl triệt tiêu.','A',['Phân cực phân tử']),
make('chem10-assess-final2-b-q09','HF tạo liên kết hydrogen giữa các phân tử còn HCl không tạo mạnh như vậy.','A',['Lực liên phân tử']),
make('chem10-assess-final2-b-q10','N giảm từ +5 xuống +2 nên nhận 3e và bị khử.','A',['Quá trình redox']),
make('chem10-assess-final2-b-q11','Fe(+3) trong oxide nhận electron tạo Fe(0), nên $Fe_2O_3$ là chất oxi hóa.','A',['Tác nhân redox']),
make('chem10-assess-final2-b-q12','$2Al+6HCl\\rightarrow2AlCl_3+3H_2$.','C',['Cân bằng electron']),
make('chem10-assess-final2-b-q13','ΔH dương nghĩa là hệ thu nhiệt và sản phẩm cao hơn chất đầu.','A',['Dấu ΔH']),
make('chem10-assess-final2-b-q14','Đây là phản ứng tạo thành một mol nước từ đơn chất chuẩn nên ΔH = −286 kJ.','A',['Enthalpy tạo thành']),
make('chem10-assess-final2-b-q15','Phá liên kết cần năng lượng, tạo liên kết giải phóng năng lượng.','A',['Năng lượng liên kết']),
make('chem10-assess-final2-b-q16','$(0{,}90-0{,}60)/15=0{,}020$ M/s.','A',['Tốc độ trung bình']),
make('chem10-assess-final2-b-q17','Catalase là biến được thêm vào và làm khí tạo nhanh hơn, phù hợp vai trò xúc tác.','A',['Xúc tác và thí nghiệm']),
make('chem10-assess-final2-b-q18','Dữ liệu phản ứng thế xác nhận $F_2>Cl_2>Br_2>I_2$.','A',['Xu hướng Halogen']),
make('chem10-assess-final2-b-q19','Liên kết H–X yếu dần nên độ mạnh acid tăng $HF<HCl<HBr<HI$.','A',['Hydrogen halide']),
make('chem10-assess-final2-b-q20','AgI là kết tủa vàng.','C',['Nhận biết halide']),
make('chem10-assess-final2-b-q21','$2(+1)+2x+7(-2)=0\\Rightarrow x=+6$.','6',['Số oxi hóa']),
make('chem10-assess-final2-b-q22','$\\Delta H=2(-396)-2(-297)=-198$ kJ.','-198',['Enthalpy tạo thành']),
make('chem10-assess-final2-b-q23','$(0{,}84-0{,}48)/24=0{,}015$ M/s.','0.015',['Tốc độ trung bình']),
make('chem10-assess-final2-b-q24','$0{,}06$ mol Br₂ oxi hóa hết $0{,}12$ mol I⁻ và tạo $0{,}12$ mol Br⁻; tổng Br⁻ là $0{,}20$ mol.','0.2',['Phản ứng thế và kết tủa']),
make('chem10-assess-final2-b-q25','Đặt $x$ mol HBr: $188x+143{,}5(0{,}10-x)=15{,}685$, suy ra $x=0{,}03$ mol, tức 30%.','30',['Hỗn hợp hydrogen halide'])
];
