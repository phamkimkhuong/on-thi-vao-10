import type { Solution } from '@/types';

const solution = (questionId: string, finalAnswer: string, recognition: string, explanation: string, mistake: string): Solution => ({
 id: `${questionId}-solution`, questionId, recognition,
 detailedSteps: [{ order: 1, title: 'Phân tích dữ kiện', explanation }], finalAnswer,
 commonMistakes: [mistake], reviewSuggestions: ['Đối chiếu cấu hình electron với quy luật tuần hoàn trước khi kết luận.']
});

export const m2ExpansionSolutions: Solution[] = [
 solution('chem10-m2-qt8-e1','A','Đọc chu kì và nhóm A.','Chu kì 3 cho biết có 3 lớp electron; nhóm VIA tương ứng 6 electron lớp ngoài cùng.','Đảo ý nghĩa của số chu kì và số thứ tự nhóm.'),
 solution('chem10-m2-qt8-e2','B','So sánh nguyên tố cùng nhóm ở hai chu kì.','Cùng nhóm A nên cấu hình lớp ngoài cùng tương tự; Y ở sau X một chu kì nên có thêm một lớp electron.','Cho rằng cùng nhóm nghĩa là cùng số lớp electron.'),
 solution('chem10-m2-qt8-e3','C','Suy vị trí của các nguyên tố liên tiếp.','Trong cùng chu kì, Z tăng một đơn vị thì dịch sang ô kế tiếp. Sau nguyên tố nhóm VIA là nguyên tố nhóm VIIA.','Nhầm chiều tăng của số hiệu nguyên tử.'),
 solution('chem10-m2-qt9-e1','B','Suy vị trí từ Z.','Z = 14 cho cấu hình $1s^22s^22p^63s^23p^2$: có 3 lớp và 4 electron hóa trị, nên ở chu kì 3, nhóm IVA.','Dùng số electron phân lớp p thay cho tổng electron lớp ngoài cùng.'),
 solution('chem10-m2-qt9-e2','A','Viết cấu hình từ vị trí.','Chu kì 3, nhóm IIA có lớp ngoài cùng $3s^2$; cấu hình đầy đủ là $1s^22s^22p^63s^2$.','Viết electron vào 3p trước khi hoàn thành 3s.'),
 solution('chem10-m2-qt9-e3','A','Suy vị trí nguyên tố từ cấu hình ion.','$X^-$ có 18e nên X trung hòa có 17e: $[Ne]3s^23p^5$, thuộc chu kì 3, nhóm VIIA.','Dùng trực tiếp cấu hình ion để xác định nhóm của nguyên tử.'),
 solution('chem10-m2-qt10-e1','B','So sánh bán kính trong một chu kì.','Na, Mg, Al cùng có 3 lớp; điện tích hạt nhân tăng dần nên lực hút tăng và bán kính giảm: Na > Mg > Al.','Cho rằng thêm electron luôn làm nguyên tử lớn hơn.'),
 solution('chem10-m2-qt10-e2','B','So sánh nguyên tử và anion.','Cùng hạt nhân nhưng $O^{2-}$ có thêm 2e, lực đẩy electron tăng và lực hút hiệu dụng trên mỗi electron giảm, nên anion lớn hơn.','Cho rằng cùng Z thì bán kính bằng nhau.'),
 solution('chem10-m2-qt10-e3','B','So sánh dãy đẳng electron.','Các tiểu phân đều có 10e; Z càng lớn thì hút cùng đám mây electron càng mạnh, bán kính càng nhỏ: $Na^+<F^-<O^{2-}<N^{3-}$.','Áp dụng xu hướng nguyên tử trung hòa cho dãy ion đẳng electron.'),
 solution('chem10-m2-qt11-e1','D','So sánh độ âm điện trong chu kì 3.','Độ âm điện nhìn chung tăng từ trái sang phải, nên Cl lớn nhất trong bốn nguyên tố.','Đồng nhất bán kính lớn với độ âm điện lớn.'),
 solution('chem10-m2-qt11-e2','B','Kết hợp xu hướng trong nhóm và chu kì.','Tính kim loại tăng khi đi xuống nhóm và về trái chu kì: Mg < Ca < K.','Chỉ xét điện tích hạt nhân mà bỏ qua số lớp electron.'),
 solution('chem10-m2-qt11-e3','B','Suy tính chất từ bán kính và độ âm điện.','Trong cùng chu kì, nguyên tố ở bên trái thường có bán kính lớn hơn, độ âm điện nhỏ hơn và tính kim loại mạnh hơn. X phù hợp vị trí bên trái Y.','Kết luận độ âm điện và tính kim loại biến đổi cùng chiều.'),
 solution('chem10-m2-qt12-e1','A','Phân loại oxide.','$Na_2O$ là oxide kim loại có tính base; $SO_3$ là oxide phi kim có tính acid.','Phân loại chỉ dựa vào số nguyên tử oxygen.'),
 solution('chem10-m2-qt12-e2','B','Nhận diện xu hướng oxide trong chu kì.','Từ trái sang phải chu kì 3, tính kim loại giảm nên oxide chuyển từ base qua lưỡng tính đến acid.','Cho rằng mọi oxide kim loại đều chỉ có tính base.'),
 solution('chem10-m2-qt12-e3','B','Suy nhóm và tính oxide từ công thức oxide cao nhất.','Trong $X_2O_7$, X có số oxi hóa +7, đặc trưng nhóm VIIA; oxide cao nhất ở cuối chu kì có tính acid.','Đồng nhất số 7 trong công thức với số thứ tự chu kì.')
];
