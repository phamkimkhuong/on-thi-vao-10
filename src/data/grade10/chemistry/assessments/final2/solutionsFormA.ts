import type { Solution } from '@/types';
const make=(questionId:string,explanation:string,finalAnswer:string,reviewSuggestions:string[]):Solution=>({id:'solution-'+questionId,questionId,recognition:'Kết nối dữ kiện với đúng mô hình và kiểm tra đơn vị, dấu hoặc hệ số.',detailedSteps:[{order:1,title:'Phân tích',explanation,result:finalAnswer}],finalAnswer,commonMistakes:['Áp dụng quy tắc ghi nhớ mà không kiểm tra điều kiện.','Bỏ dấu, hệ số hoặc đơn vị trong phép tính.'],reviewSuggestions});
export const final2SolutionsFormA:Solution[]=[
make('chem10-assess-final2-a-q01','$p=17$, $n=37-17=20$; ion −1 nhận thêm một electron nên $e=18$.','A',['Kí hiệu nguyên tử và ion']),
make('chem10-assess-final2-a-q02','$\\overline A=24(0{,}79)+25(0{,}10)+26(0{,}11)=24{,}32$.','B',['Đồng vị và phổ khối']),
make('chem10-assess-final2-a-q03','Z=12 cho cấu hình kết thúc $3s^2$; orbital là vùng xác suất và Mg có xu hướng nhường 2e.','A',['Mô hình, orbital và cấu hình electron']),
make('chem10-assess-final2-a-q04','Ba lớp electron cho chu kì 3; một electron ngoài cùng cho nhóm IA.','A',['Vị trí trong bảng tuần hoàn']),
make('chem10-assess-final2-a-q05','Cùng chu kì, Na ở bên trái nên bán kính và tính kim loại lớn hơn Mg.','A',['Xu hướng tuần hoàn']),
make('chem10-assess-final2-a-q06','$Na_2O$ base, $Al_2O_3$ lưỡng tính và $SO_3$ acid.','A',['Tính acid–base oxide']),
make('chem10-assess-final2-a-q07','Điện tích trung hòa theo tỉ lệ một $Mg^{2+}$ với hai $Cl^-$.','A',['Liên kết ion và octet']),
make('chem10-assess-final2-a-q08','Hai moment C=O bằng nhau, ngược chiều trong phân tử thẳng nên triệt tiêu.','A',['Liên kết cộng hóa trị và phân cực']),
make('chem10-assess-final2-a-q09','Mạng liên kết hydrogen giữa các phân tử làm cần nhiều năng lượng để nước sôi.','A',['Lực liên phân tử']),
make('chem10-assess-final2-a-q10','S giảm từ +6 xuống +4, nhận 2 electron và bị khử.','A',['Số oxi hóa và quá trình redox']),
make('chem10-assess-final2-a-q11','Cu(+2) trong CuO nhận electron tạo Cu(0), nên CuO là chất oxi hóa.','A',['Chất oxi hóa–chất khử']),
make('chem10-assess-final2-a-q12','$Fe_2O_3+3CO\\rightarrow2Fe+3CO_2$ nên hệ số CO là 3.','C',['Cân bằng electron']),
make('chem10-assess-final2-a-q13','ΔH âm: hệ tỏa nhiệt và sản phẩm thấp hơn chất đầu 125 kJ.','A',['Dấu của ΔH']),
make('chem10-assess-final2-a-q14','$\\Delta H=-394-(-111)=-283$ kJ.','B',['Enthalpy tạo thành']),
make('chem10-assess-final2-a-q15','Phá liên kết cần năng lượng; tạo liên kết giải phóng, nên dùng phá trừ tạo.','A',['Năng lượng liên kết']),
make('chem10-assess-final2-a-q16','$(0{,}70-0{,}40)/20=0{,}015$ M/s.','A',['Tốc độ trung bình']),
make('chem10-assess-final2-a-q17','Chỉ biến xúc tác thay đổi và khí tạo nhanh hơn, nên MnO₂ làm tăng tốc độ nhờ giảm năng lượng hoạt hóa.','A',['Xúc tác và thiết kế thí nghiệm']),
make('chem10-assess-final2-a-q18','Halogen oxi hóa được halide đứng dưới nó: $Cl_2>Br_2>I_2$.','A',['Xu hướng Halogen']),
make('chem10-assess-final2-a-q19','H–F bền làm HF acid yếu; liên kết hydrogen làm nhiệt độ sôi của HF cao.','A',['Hydrogen halide']),
make('chem10-assess-final2-a-q20','AgBr có màu vàng nhạt/kem.','B',['Nhận biết ion halide']),
make('chem10-assess-final2-a-q21','$(+1)+x+3(-2)=0\\Rightarrow x=+5$.','5',['Số oxi hóa']),
make('chem10-assess-final2-a-q22','$\\Delta H=2(-46)-0=-92$ kJ.','-92',['Tính ΔH từ enthalpy tạo thành']),
make('chem10-assess-final2-a-q23','$(0{,}72-0{,}42)/20=0{,}015$ M/s.','0.015',['Tốc độ trung bình']),
make('chem10-assess-final2-a-q24','$0{,}05$ mol Br₂ oxi hóa $0{,}10$ mol I⁻, tạo thêm $0{,}10$ mol Br⁻; cuối cùng có $0{,}20$ mol Br⁻ tạo AgBr.','0.2',['Phản ứng thế và kết tủa halide']),
make('chem10-assess-final2-a-q25','Đặt $x$ mol HBr: $188x+143{,}5(0{,}10-x)=16{,}575$, suy ra $x=0{,}05$ mol, tức 50%.','50',['Bài toán hỗn hợp halide'])
];
