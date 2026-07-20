import type { Solution } from '@/types';

const g = {
  '8a':['Cấu tạo bảng tuần hoàn','Tách ba khái niệm: ô nguyên tố gắn với Z, chu kì là hàng, nhóm là cột.','PERIODIC-01: Ô, chu kì và nhóm'],
  '8b':['Xác định chu kì','Đếm số lớp electron đang có; số lớp bằng số thứ tự chu kì.','PERIODIC-02: Chu kì và số lớp'],
  '8c':['Xác định nhóm A','Với nguyên tố s,p, đếm tổng electron lớp ngoài cùng để suy nhóm A.','PERIODIC-03: Nhóm A'],
  '8d':['Suy cấu tạo từ vị trí','Chu kì cho số lớp; nhóm A cho dạng và số electron lớp ngoài cùng.','PERIODIC-04: Vị trí → cấu tạo'],
  '9a':['Cấu hình → vị trí','Cộng electron để tìm Z; n lớn nhất cho chu kì; electron lớp ngoài cùng cho nhóm A.','PERIODIC-05: Cấu hình → vị trí'],
  '9b':['Vị trí → cấu hình','Dùng chu kì chọn n, dùng nhóm A viết $ns^anp^b$, rồi hoàn thiện các lớp trong.','PERIODIC-06: Vị trí → cấu hình'],
  '9c':['Vị trí và ion bền','Từ electron ngoài cùng, tìm số electron nhường/nhận ít nhất để đạt cấu hình khí hiếm gần.','PERIODIC-07: Nhóm và điện tích ion'],
  '9d':['Nhận diện nguyên tố nhiều dữ kiện','Chuyển lần lượt mỗi dữ kiện thành Z, chu kì, nhóm hoặc cấu hình rồi lấy giao các điều kiện.','PERIODIC-08: Truy tìm nguyên tố'],
  '10a':['Bán kính trong chu kì','Đặt các nguyên tố trên cùng hàng; đi từ trái sang phải, bán kính nhìn chung giảm.','PERIODIC-09: Bán kính trong chu kì'],
  '10b':['Bán kính trong nhóm','Đặt các nguyên tố trên cùng cột; đi xuống dưới, số lớp tăng nên bán kính tăng.','PERIODIC-10: Bán kính trong nhóm'],
  '10c':['Bán kính nguyên tử và ion','Cation thường co lại, anion thường nở ra; dãy đẳng electron thì Z lớn hơn có bán kính nhỏ hơn.','PERIODIC-11: Bán kính ion'],
  '10d':['Giải thích xu hướng bán kính','So đồng thời số lớp, che chắn và lực hút hạt nhân hiệu dụng; không chỉ đọc mũi tên.','PERIODIC-12: Bản chất bán kính'],
  '11a':['Xu hướng độ âm điện','Độ âm điện tăng sang phải, giảm khi đi xuống nhóm; hiểu là khả năng hút electron liên kết.','PERIODIC-13: Độ âm điện'],
  '11b':['Xu hướng tính kim loại','Tính kim loại gắn với khả năng nhường electron: tăng xuống nhóm, giảm sang phải.','PERIODIC-14: Tính kim loại'],
  '11c':['Xu hướng tính phi kim','Tính phi kim gắn với xu hướng hút/nhận electron: tăng sang phải, giảm xuống nhóm.','PERIODIC-15: Tính phi kim'],
  '11d':['Liên hệ các xu hướng','Dựng chuỗi bán kính/che chắn → lực hút → độ âm điện → khả năng nhường/nhận electron.','PERIODIC-16: Quan hệ nhân quả'],
  '12b':['Tính acid–base của hydroxide','Xác định vị trí nguyên tố: từ trái sang phải thường chuyển base → lưỡng tính → acid.','PERIODIC-18: Hydroxide và acid–base'],
  '12c':['Định luật tuần hoàn','Nối sự lặp lại cấu hình electron lớp ngoài cùng khi Z tăng với sự lặp lại tính chất.','PERIODIC-19: Định luật tuần hoàn'],
  '12d':['Suy nguyên tố từ hợp chất','Dùng oxide cao nhất suy số oxi hóa/nhóm, rồi kết hợp chu kì và tính acid–base.','PERIODIC-20: Hợp chất → nguyên tố']
} as const;
type K = keyof typeof g;
const z = (id: string, answer: string, k: K, application: string, mistake: string): Solution => {
  const [name,start,route]=g[k];
  return { id:`${id}-solution`,questionId:id,recognition:`Dạng bài: ${name}`,
    detailedSteps:[{order:1,title:'Dấu hiệu nhận biết và cách bắt đầu',explanation:start},{order:2,title:'Áp dụng vào câu hỏi',explanation:application}],
    finalAnswer:answer,commonMistakes:[mistake],reviewSuggestions:[route] };
};

export const m2GapFillSolutions: Solution[] = [
  z('chem10-m2-gf001','A','8a','Ô mang số Z; các ô cùng hàng tạo chu kì, cùng cột tạo nhóm.','Đảo hàng và cột hoặc lấy số neutron làm số ô.'),
  z('chem10-m2-gf002','A','8a','Z=13 nên p=13 và nguyên tử trung hòa có e=13; chưa biết chính xác neutron nếu không có số khối.','Dùng nguyên tử khối gần đúng làm số electron/neutron.'),
  z('chem10-m2-gf003','B','8b','Phân bố 2,8,7 có ba lớp electron nên thuộc chu kì 3.','Lấy 7 electron ngoài cùng làm số chu kì.'),
  z('chem10-m2-gf004','A','8b','Bốn lớp K,L,M,N tương ứng chu kì 4.','Coi số lớp là số electron ngoài cùng.'),
  z('chem10-m2-gf005','C','8c','$ns^2np^1$ có 3 electron ngoài cùng nên thuộc nhóm IIIA.','Chỉ nhìn số mũ p¹ rồi chọn IA.'),
  z('chem10-m2-gf006','C','8c','Nguyên tố p có 6e ngoài cùng thuộc nhóm VIA.','Đổi 6 electron thành nhóm VIIA do đếm sai.'),
  z('chem10-m2-gf007','A','8d','Chu kì 2 cho hai lớp; nhóm VIIA cho 7e ngoài cùng.','Hoán đổi ý nghĩa chu kì và nhóm.'),
  z('chem10-m2-gf008','B','8d','Chu kì 3 dùng n=3, nhóm IA có dạng $ns^1$, nên $3s^1$.','Dùng số nhóm làm số lớp.'),

  z('chem10-m2-gf009','A','9a','Tổng số mũ là 13; n lớn nhất 3; lớp ngoài có 3e nên nhóm IIIA.','Chỉ nhìn p¹ và chọn nhóm IA.'),
  z('chem10-m2-gf010','A','9a','Tổng e=18, n lớn nhất 3 và lớp ngoài bão hòa $3s^23p^6$.','Lấy số 6 của p làm nhóm VIA.'),
  z('chem10-m2-gf011','A','9b','Chu kì 2, nhóm IIIA cho $2s^22p^1$; thêm lớp trong $1s^2$.','Viết 3p vì nhầm nhóm IIIA với chu kì 3.'),
  z('chem10-m2-gf012','B','9b','Chu kì 4, nhóm IA có lớp ngoài $4s^1$; với Z≤20 đó là K.','Cho electron cuối vào 4p trước 4s.'),
  z('chem10-m2-gf013','D','9c','Nhóm IIA có 2e ngoài cùng và thường nhường 2e tạo 2+.','Lấy số nhóm làm điện tích âm.'),
  z('chem10-m2-gf014','B','9c','Nhóm VIA chu kì 3 nhận 2e, đạt 18e như Ar.','Chọn Ne mà không đếm electron sau khi tạo ion.'),
  z('chem10-m2-gf015','A','9c','Bảy electron ngoài cùng chỉ cần nhận thêm 1e, nên ion thường là X−.','Coi số nhóm bằng điện tích ion.'),
  z('chem10-m2-gf016','B','9c','$M^{2+}$ có 10e nên M có Z=12, là Mg chu kì 3 nhóm IIA.','Lấy Z=10 từ số electron của ion.'),
  z('chem10-m2-gf017','A','9d','Z=15 là P; cấu hình kết thúc $3s^23p^3$, chu kì 3 nhóm VA.','Chỉ dựa vào chữ p mà bỏ tổng electron.'),
  z('chem10-m2-gf018','C','9d','$X_2O_7$ cho số oxi hóa cao nhất +7, ứng với nhóm VIIA; chu kì 3 cho $3s^23p^5$.','Cho rằng số 7 là số electron phân lớp p.'),
  z('chem10-m2-gf019','B','9d','X− có 18e nên X có 17e; Z=17 là Cl và cùng chu kì 3 với Na.','Định danh X bằng số electron của ion thay vì nguyên tử.'),
  z('chem10-m2-gf020','A','9d','Năm e ngoài cùng ở chu kì 3 là P; nguyên tố kế tiếp là S với thêm một electron 3p.','Nhảy qua một ô khi nói hai nguyên tố liên tiếp.'),

  z('chem10-m2-gf021','A','10a','Li, Be, B cùng chu kì 2; sang phải bán kính giảm.','Đảo chiều mũi tên bán kính.'),
  z('chem10-m2-gf022','A','10a','Mg nằm trái Cl trong chu kì 3 nên Mg có bán kính lớn hơn.','Áp dụng chiều giảm ngược.'),
  z('chem10-m2-gf023','B','10a','Cùng chu kì 3: Cl ở phải nhỏ nhất, rồi Si, Mg, Na lớn nhất.','Xếp tăng theo Z thay vì bán kính.'),
  z('chem10-m2-gf024','A','10a','Na ở chu kì 3 còn K chu kì 4; khác số lớp nên phải xét xu hướng theo nhóm.','Dùng mũi tên trong chu kì cho mọi cặp nguyên tố.'),
  z('chem10-m2-gf025','B','10b','Đi xuống nhóm IIA: Mg → Ca → Ba, số lớp và bán kính tăng.','Cho điện tích hạt nhân tăng làm bán kính luôn giảm.'),
  z('chem10-m2-gf026','C','10b','Br nằm thấp nhất trong ba nguyên tố nên có nhiều lớp và bán kính lớn nhất.','Chọn F vì độ âm điện lớn.'),
  z('chem10-m2-gf027','A','10b','Lớp electron mới và che chắn tăng lấn át tác động Z tăng.','Nói điện tích hạt nhân giảm khi đi xuống.'),
  z('chem10-m2-gf028','A','10b','Li, Na, K cùng 1e ngoài cùng nhưng thêm lớp theo chiều xuống nhóm, làm bán kính tăng.','Cho số electron hóa trị tăng dần.'),
  z('chem10-m2-gf029','A','10c','Cation mất e nên co; anion nhận e làm lực đẩy tăng nên nở: $Mg^{2+}<Mg<Mg^{2-}$.','Cho ion dương lớn hơn vì kí hiệu “+”.'),
  z('chem10-m2-gf030','A','10d','Trong cùng lớp, Z tăng làm lực hút hiệu dụng tăng và kéo đám mây electron gần hơn.','Nói số lớp giảm trong cùng chu kì.'),
  z('chem10-m2-gf031','A','10d','Electron thêm vào cùng lớp nên che chắn không tăng mạnh như điện tích hạt nhân.','Giải thích chỉ bằng số proton mà không giữ các yếu tố khác.'),
  z('chem10-m2-gf032','A','10d','Na mất electron 3s và cả lớp ngoài; 10e còn lại chịu lực hút hiệu dụng lớn hơn.','Cho rằng cation dương phải “phồng” ra.'),

  z('chem10-m2-gf033','B','11a','C,N,O,F cùng chu kì và độ âm điện tăng sang phải.','Sắp theo chiều bán kính.'),
  z('chem10-m2-gf034','A','11a','Trong nhóm VIIA, F ở trên cùng, nhỏ nhất và hút electron liên kết mạnh nhất.','Chọn I vì có nhiều electron hơn.'),
  z('chem10-m2-gf035','A','11a','Độ âm điện nói về electron trong liên kết, không đồng nhất với một quá trình nhận electron tự do.','Đồng nhất độ âm điện với ái lực electron.'),
  z('chem10-m2-gf036','B','11b','Xuống nhóm IA, electron ngoài xa hơn và dễ nhường hơn: Li < Na < K.','Đảo với xu hướng độ âm điện.'),
  z('chem10-m2-gf037','A','11b','Trong chu kì 3, tính kim loại giảm sang phải nên Na mạnh nhất trong ba chất.','Chọn Al vì có nhiều proton.'),
  z('chem10-m2-gf038','B','11c','N,O,F cùng chu kì; tính phi kim tăng sang phải.','Dùng xu hướng tính kim loại.'),
  z('chem10-m2-gf039','B','11c','Xuống nhóm VIIA, bán kính tăng và tính phi kim giảm: Cl > Br > I.','Cho nhiều lớp hơn nghĩa hút electron mạnh hơn.'),
  z('chem10-m2-gf040','A','11c','X ở trên nên nhỏ hơn, hút electron mạnh hơn và phi kim mạnh hơn Y.','Đảo chiều xu hướng trong nhóm.'),
  z('chem10-m2-gf041','A','11c','Tổng electron không đủ; phải xét lực hút hạt nhân hiệu dụng, lớp và che chắn.','Dùng số electron tuyệt đối làm thước đo tính phi kim.'),
  z('chem10-m2-gf042','A','11d','Bán kính giảm làm hút electron liên kết mạnh hơn: độ âm điện/phi kim tăng, kim loại giảm.','Học ba xu hướng rời rạc và ghép sai chiều.'),
  z('chem10-m2-gf043','A','11d','Thêm lớp làm electron ngoài xa và bị che chắn, nên dễ nhường và tính kim loại tăng.','Cho độ âm điện tăng cùng tính kim loại.'),
  z('chem10-m2-gf044','A','11d','Bên trái cùng chu kì thường lớn hơn, hút electron yếu hơn và dễ nhường hơn.','Biến xu hướng chung thành khẳng định mọi X/Y đều thuộc loại chất cụ thể.'),

  z('chem10-m2-gf045','A','12b','NaOH là base; Al(OH)3 lưỡng tính; H2SO4 là acid chứa oxygen.','Thấy OH trong công thức rồi gọi tất cả là base.'),
  z('chem10-m2-gf046','A','12b','Tính lưỡng tính được chứng minh bằng phản ứng với cả acid và base.','Chỉ ghi “có OH nên là base”.'),
  z('chem10-m2-gf047','A','12b','Sang phải chu kì 3, hydroxide chuyển từ base qua Al(OH)3 lưỡng tính tới acid chứa oxygen.','Cho mọi hydroxide trong một chu kì cùng tính chất.'),
  z('chem10-m2-gf048','A','12b','Al(OH)3 là phản ví dụ trực tiếp vì phản ứng cả acid lẫn base; nhóm OH không đủ để kết luận tuyệt đối.','Nhận dạng acid–base chỉ bằng việc nhìn thấy OH.'),
  z('chem10-m2-gf049','C','12b','Al(OH)3 phản ứng với HCl và cũng tan trong NaOH phù hợp, nên là lưỡng tính.','Chọn Mg(OH)2 chỉ vì phản ứng với acid.'),
  z('chem10-m2-gf050','A','12c','Khi Z tăng, cấu hình ngoài cùng đi qua một chuỗi rồi tái xuất hiện ở chu kì kế tiếp.','Giải thích tuần hoàn bằng neutron.'),
  z('chem10-m2-gf051','A','12c','Li là 2s¹, Na là 3s¹: cùng dạng ns¹ nên tính chất nhóm IA tương tự.','Cho rằng hai nguyên tố cùng chu kì hoặc cùng Z.'),
  z('chem10-m2-gf052','B','12c','Định luật hiện đại lấy điện tích hạt nhân Z làm trục sắp xếp.','Dùng nguyên tử khối như phát biểu hiện đại.'),
  z('chem10-m2-gf053','C','12d','XO3 cho X ở số oxi hóa +6, phù hợp nhóm VIA; chu kì 3 là sulfur.','Nhầm chỉ số 3 thành nhóm IIIA.'),
  z('chem10-m2-gf054','B','12d','$X_2O_5$ cho số oxi hóa +5, nhóm VA; chu kì 3 là P và acid tương ứng H3PO4.','Chọn H2SO4 của nhóm VIA.'),
  z('chem10-m2-gf055','A','12d','Chu kì 3 nhóm IIA là Mg với MgO; nhóm VIA là S với SO3.','Ghép nguyên tố khác nhóm chỉ vì cùng chu kì.'),
  z('chem10-m2-gf056','A','12d','$X_2O_3$ cho +3; chu kì 3 nhóm IIIA là Al và Al2O3 lưỡng tính.','Chỉ dùng tính lưỡng tính mà không kiểm tra công thức/nhóm.')
];
