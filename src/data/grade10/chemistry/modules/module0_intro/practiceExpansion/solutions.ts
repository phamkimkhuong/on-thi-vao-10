import type { Solution } from '@/types';
const s=(q:string,a:string,e:string,m:string):Solution=>({id:`${q}-solution`,questionId:q,recognition:'Củng cố kiến thức nhập môn và tiền đề Hóa học 10.',detailedSteps:[{order:1,title:'Phân tích',explanation:e}],finalAnswer:a,commonMistakes:[m],reviewSuggestions:['Kiểm tra khái niệm, đơn vị và tỉ lệ trước khi kết luận.']});
export const m0ExpansionSolutions:Solution[]=[
 s('chem10-m0-object-e1','B','Chiếc nhẫn là vật thể cụ thể; vàng là chất cấu tạo nên vật thể.','Đảo khái niệm vật thể và chất.'),
 s('chem10-m0-object-e2','B','Sắt chuyển thành gỉ là câu hỏi về sự biến đổi chất; các lựa chọn còn lại chủ yếu hỏi cấu trúc hoặc đại lượng vật lí.','Coi mọi câu hỏi về đồ vật là câu hỏi hóa học.'),
 s('chem10-m0-object-e3','A','Ba mức biểu diễn lần lượt là vĩ mô quan sát được, mô hình vi mô và ngôn ngữ kí hiệu.','Chỉ làm việc ở mức phương trình mà không nối với hiện tượng.'),
 s('chem10-m0-inquiry-e1','B','Sự đổi màu được nhìn thấy trực tiếp; các phát biểu còn lại là suy luận về nguyên nhân vi mô.','Gọi lời giải thích là quan sát.'),
 s('chem10-m0-inquiry-e2','A','Nồng độ acid là đại lượng chủ động thay đổi, nên là biến độc lập; thời gian/tốc độ là biến phụ thuộc.','Đảo biến độc lập và phụ thuộc.'),
 s('chem10-m0-inquiry-e3','C','Một điểm khác thường cần kiểm tra sai số, thiết bị và đo lặp trước khi loại bỏ hoặc thay đổi kết luận.','Tự ý xóa hay sửa số liệu.'),
 s('chem10-m0-qt01-e1','C','$4P+5O_2\\to2P_2O_5$; tổng hệ số là $4+5+2=11$.','Thay chỉ số trong công thức để cân bằng.'),
 s('chem10-m0-qt01-e2','B','Bảo toàn khối lượng: $m_{CO_2}=25,0-14,0=11,0$ g.','Cộng khối lượng sản phẩm thay vì lấy hiệu.'),
 s('chem10-m0-qt01-e3','C','$n_{O_2}=16/32=0,5$ mol là chất giới hạn, tạo 0,5 mol $CO_2$, tức 22 g.','Cộng toàn bộ khối lượng C dù C còn dư.'),
 s('chem10-m0-qt02-e1','B','$n=m/M=9/18=0,50$ mol.','Nhân khối lượng với khối lượng mol.'),
 s('chem10-m0-qt02-e2','B','$n=V/24,79=4,958/24,79=0,20$ mol.','Dùng 22,4 L/mol dù đề quy định 25°C, 1 bar.'),
 s('chem10-m0-qt02-e3','A','$n=N/N_A=0,5$ mol; $m=0,5\\times32=16$ g.','Coi số phân tử là số nguyên tử oxygen.'),
 s('chem10-m0-qt03-e1','C','BCNN(3,2)=6 nên cần 2 Al(III) và 3 sulfate(II): $Al_2(SO_4)_3$.','Không đặt ngoặc quanh ion đa nguyên tử.'),
 s('chem10-m0-qt03-e2','C','$2x+3(-2)=0$ nên $x=+3$, tương ứng hóa trị III.','Lấy chỉ số 2 làm hóa trị của Fe.'),
 s('chem10-m0-qt03-e3','C','Cần $3\\times(+2)+2\\times(-3)=0$, nên công thức là $Ca_3(PO_4)_2$.','Hoán đổi chỉ số nhưng không rút hoặc kiểm tra điện tích.'),
 s('chem10-m0-qt04-e1','C','$C_M=n/V=0,20/0,500=0,40$ M.','Dùng 500 thay vì 0,500 L.'),
 s('chem10-m0-qt04-e2','B','0,15 mol HCl chỉ phản ứng với 0,075 mol Mg, tạo 0,075 mol $H_2$; HCl là chất giới hạn.','Chọn Mg làm chất giới hạn mà không so tỉ lệ.'),
 s('chem10-m0-qt04-e3','B','Số mol NaCl là $0,100\\times1,0=0,10$ mol; thể tích cuối 0,500 L nên $C=0,20$ M.','Cho rằng thêm nước làm thay đổi số mol chất tan.')
];
