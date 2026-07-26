import type { PracticeRole, Question, QuestionRepresentationType } from '@/types';

type D = Question['difficulty'];
const q = (id: string, t: string, st: string, c: string, o: string, a: string, d: D, r: PracticeRole, p: QuestionRepresentationType, misconceptionId?: string): Question => ({
  id, subjectId: 'chemistry', topicId: 'chem10-t1', questionTypeId: t, subTypeId: st, content: c,
  responseType: 'single_choice', options: o.split('|'), correctAnswer: a, acceptedAnswers: [a, a.toLowerCase()],
  validatorType: 'choice', difficulty: d, sourceType: 'manual', practiceRole: r, representationType: p,
  ...(misconceptionId ? { misconceptionId } : {})
});
const s = (id: string, t: string, st: string, c: string, a: string, aa: string[], d: D, r: PracticeRole, p: QuestionRepresentationType, misconceptionId?: string): Question => ({
  id, subjectId: 'chemistry', topicId: 'chem10-t1', questionTypeId: t, subTypeId: st, content: c,
  responseType: 'short_answer', correctAnswer: a, acceptedAnswers: aa, validatorType: 'exact', difficulty: d,
  sourceType: 'manual', practiceRole: r, representationType: p, ...(misconceptionId ? { misconceptionId } : {})
});

export const m1GapFillQuestions: Question[] = [
  // QT1 — Thành phần nguyên tử (13 câu)
  q('chem10-m1-gf001','chem10-qt1','chem10-qt1-st1','Bảng nào mô tả đúng ba hạt cơ bản?','A. p: +1, hạt nhân; n: 0, hạt nhân; e: −1, vỏ.|B. p: 0, vỏ; n: +1, hạt nhân; e: −1, hạt nhân.|C. p và e đều có khối lượng xấp xỉ 1 u.|D. neutron nằm ở lớp vỏ.','A','easy','retention','table'),
  q('chem10-m1-gf002','chem10-qt1','chem10-qt1-st1','Nếu lấy khối lượng proton xấp xỉ 1 u thì khối lượng electron gần nhất là','A. 1 u.|B. 1/2 u.|C. 1/1836 u.|D. 1836 u.','C','medium','near_transfer','equation','electron-mass-equals-proton'),
  q('chem10-m1-gf003','chem10-qt1','chem10-qt1-st1','Nguyên tử trung hòa điện vì','A. không chứa hạt mang điện.|B. số proton bằng số electron nên tổng điện tích bằng 0.|C. proton và neutron triệt tiêu điện tích.|D. electron không có điện tích.','B','easy','misconception_check','diagram','neutral-means-no-charged-particles'),
  s('chem10-m1-gf004','chem10-qt1','chem10-qt1-st2','Ion $^{27}_{13}Al^{3+}$ có bao nhiêu electron?','10',['10'],'easy','guided','equation'),
  s('chem10-m1-gf005','chem10-qt1','chem10-qt1-st2','Ion $X^-$ có 18 electron và 20 neutron. Số proton của X là bao nhiêu?','17',['17'],'medium','representation_switch','equation'),
  q('chem10-m1-gf006','chem10-qt1','chem10-qt1-st2','Tiểu phân có 20p, 20n và 18e mang điện tích','A. 2−.|B. 1−.|C. 1+.|D. 2+.','D','medium','far_transfer','table','ion-electron-sign'),
  s('chem10-m1-gf007','chem10-qt1','chem10-qt1-st3','Nguyên tử trung hòa X có tổng số hạt $p+n+e=34$ và $n=p+1$. Số proton của X là','11',['11'],'medium','guided','equation'),
  s('chem10-m1-gf008','chem10-qt1','chem10-qt1-st3','Nguyên tử X có tổng số hạt là 52; số hạt mang điện nhiều hơn số hạt không mang điện 16. Số khối A bằng','35',['35'],'hard','near_transfer','equation'),
  s('chem10-m1-gf009','chem10-qt1','chem10-qt1-st3','Ion $X^{2+}$ có tổng $p+n+e=60$ và $n=p+2$. Số proton của X là','20',['20'],'hard','far_transfer','equation'),
  q('chem10-m1-gf010','chem10-qt1','chem10-qt1-st3','Khi giải bài “tổng số hạt” của nguyên tử trung hòa, phương trình khởi đầu đúng là','A. $p=e=Z$ và $p+n+e=2Z+n$.|B. $p=n=e$.|C. $A=p+e$.|D. $n=e$ trong mọi nguyên tử.','A','medium','misconception_check','equation','all-particles-equal'),
  q('chem10-m1-gf011','chem10-qt1','chem10-qt1-st4','Nếu đường kính nguyên tử khoảng $10^{-10}$ m và hạt nhân khoảng $10^{-15}$ m thì đường kính nguyên tử lớn hơn khoảng','A. $10^2$ lần.|B. $10^3$ lần.|C. $10^5$ lần.|D. $10^{25}$ lần.','C','medium','representation_switch','diagram'),
  q('chem10-m1-gf012','chem10-qt1','chem10-qt1-st4','Thí nghiệm tán xạ hạt alpha: đa số hạt đi thẳng, rất ít hạt lệch mạnh. Suy luận phù hợp là','A. nguyên tử đặc hoàn toàn.|B. phần lớn thể tích nguyên tử là khoảng không, điện tích dương tập trung trong hạt nhân rất nhỏ.|C. electron nằm trong hạt nhân.|D. hạt nhân chiếm gần hết thể tích.','B','hard','far_transfer','diagram','nucleus-fills-atom'),
  q('chem10-m1-gf013','chem10-qt1','chem10-qt1-st4','Phát biểu đúng về phân bố khối lượng và thể tích là','A. electron tạo gần hết khối lượng.|B. hạt nhân tạo gần hết thể tích.|C. hạt nhân chứa gần hết khối lượng nhưng chỉ chiếm phần rất nhỏ thể tích.|D. khối lượng phân bố đều.','C','easy','retention','text'),

  // QT2 — Kí hiệu nguyên tử, đồng vị, đẳng electron (13 câu)
  s('chem10-m1-gf014','chem10-qt2','chem10-qt2-st1','Trong kí hiệu $^{56}_{26}Fe$, số neutron là','30',['30'],'easy','guided','equation'),
  q('chem10-m1-gf015','chem10-qt2','chem10-qt2-st1','$^{31}_{15}P^{3-}$ có số p, n, e lần lượt là','A. 15,16,18.|B. 15,18,16.|C. 18,16,15.|D. 15,16,12.','A','medium','representation_switch','table'),
  q('chem10-m1-gf016','chem10-qt2','chem10-qt2-st1','Trong $^{A}_{Z}X^{2+}$, biểu thức số electron đúng là','A. $e=Z+2$.|B. $e=Z-2$.|C. $e=A-2$.|D. $e=A-Z$.','B','easy','misconception_check','equation','ion-electron-sign'),
  s('chem10-m1-gf017','chem10-qt2','chem10-qt2-st1','Ion $^{39}_{19}K^+$ có tổng số hạt p+n+e bằng','57',['57'],'hard','far_transfer','equation'),
  q('chem10-m1-gf018','chem10-qt2','chem10-qt2-st2','Một ion có 12p, 12n, 10e. Kí hiệu đúng là','A. $^{24}_{12}Mg^{2+}$.|B. $^{24}_{10}Mg^{2+}$.|C. $^{12}_{24}Mg^{2-}$.|D. $^{24}_{12}Mg^{2-}$.','A','medium','guided','equation'),
  q('chem10-m1-gf019','chem10-qt2','chem10-qt2-st2','Tiểu phân có 8p, 10n, 10e được viết là','A. $^{18}_{8}O^{2-}$.|B. $^{18}_{10}O^{2+}$.|C. $^{10}_{8}O^{2-}$.|D. $^{18}_{8}O^{2+}$.','A','hard','retention','equation'),
  q('chem10-m1-gf020','chem10-qt2','chem10-qt2-st3','Cặp nào là hai đồng vị?','A. $^{35}_{17}Cl$ và $^{37}_{17}Cl$.|B. $^{23}_{11}Na$ và $^{24}_{12}Mg$.|C. $^{40}_{18}Ar$ và $^{40}_{20}Ca$.|D. $^{16}_{8}O$ và $^{16}_{7}N$.','A','easy','guided','table'),
  q('chem10-m1-gf021','chem10-qt2','chem10-qt2-st3','$^{40}_{18}Ar$ và $^{40}_{20}Ca$ là','A. đồng vị.|B. cùng nguyên tố.|C. hai nuclide cùng số khối nhưng khác số proton.|D. đẳng electron khi đều trung hòa.','C','medium','misconception_check','table','same-mass-means-isotope'),
  q('chem10-m1-gf022','chem10-qt2','chem10-qt2-st3','Đặc trưng quyết định danh tính nguyên tố là','A. số neutron.|B. số proton Z.|C. số khối A.|D. tổng p+n+e.','B','easy','retention','text','element-defined-by-mass'),
  q('chem10-m1-gf023','chem10-qt2','chem10-qt2-st4','Nhóm nào gồm các tiểu phân đẳng electron?','A. $Na^+, Mg^{2+}, Ne$.|B. $Na, Mg, Ne$.|C. $O^{2-}, F^-, Ar$.|D. $Cl^-, K^+, Ne$.','A','medium','guided','table'),
  q('chem10-m1-gf024','chem10-qt2','chem10-qt2-st4','$O^{2-}$, $F^-$, Ne và $Na^+$ cùng có','A. 8 proton.|B. số khối bằng nhau.|C. 10 electron.|D. cùng điện tích.','C','easy','near_transfer','table'),
  q('chem10-m1-gf025','chem10-qt2','chem10-qt2-st4','Hai tiểu phân đẳng electron nhất thiết phải','A. cùng nguyên tố.|B. cùng số electron.|C. cùng số proton.|D. cùng số neutron.','B','medium','misconception_check','text','isoelectronic-means-isotope'),
  s('chem10-m1-gf026','chem10-qt2','chem10-qt2-st4','Ion $X^{3+}$ đẳng electron với Ne (10e). Số hiệu nguyên tử Z của X là','13',['13'],'hard','far_transfer','equation'),

  // QT3 — Đồng vị và phổ khối (13 câu)
  q('chem10-m1-gf027','chem10-qt3','chem10-qt3-st1','Đồng vị của cùng một nguyên tố có','A. cùng Z, khác số neutron nên có thể khác A.|B. cùng A, khác Z.|C. cùng neutron, khác proton.|D. cùng mọi hạt.','A','easy','guided','text'),
  q('chem10-m1-gf028','chem10-qt3','chem10-qt3-st1','Giá trị 35,45 của chlorine trong bảng tuần hoàn chủ yếu biểu thị','A. số khối của mọi nguyên tử Cl.|B. nguyên tử khối trung bình theo độ phổ biến đồng vị tự nhiên.|C. số neutron trung bình của một nguyên tử riêng lẻ.|D. số proton.','B','medium','misconception_check','text','average-mass-is-one-atom'),
  q('chem10-m1-gf029','chem10-qt3','chem10-qt3-st1','Hai đồng vị có tính chất hóa học gần giống nhau chủ yếu vì','A. có cùng cấu hình electron của nguyên tử trung hòa.|B. có cùng số neutron.|C. có cùng số khối.|D. hạt nhân giống hệt nhau.','A','medium','near_transfer','diagram'),
  q('chem10-m1-gf030','chem10-qt3','chem10-qt3-st1','Phát biểu nào đúng về nguyên tử khối trung bình của một nguyên tố có nhiều đồng vị?','A. Nguyên tử khối trung bình luôn là số nguyên.|B. Độ phổ biến đồng vị không ảnh hưởng giá trị trung bình.|C. Giá trị trung bình nằm trong khoảng giữa khối lượng đồng vị nhẹ nhất và nặng nhất.|D. Trung bình luôn bằng đồng vị phổ biến nhất.','C','hard','retention','text'),
  s('chem10-m1-gf031','chem10-qt3','chem10-qt3-st2','X có 70% đồng vị khối lượng 10 và 30% đồng vị khối lượng 11. Nguyên tử khối trung bình là','10.3',['10.3','10,3'],'easy','guided','equation'),
  s('chem10-m1-gf032','chem10-qt3','chem10-qt3-st2','X có các đồng vị 28, 29, 30 với độ phổ biến 92%, 5%, 3%. Nguyên tử khối trung bình là','28.11',['28.11','28,11'],'medium','representation_switch','table'),
  q('chem10-m1-gf033','chem10-qt3','chem10-qt3-st2','Hai đồng vị 63 và 65 có tỉ lệ 3:1. Phép tính đúng là','A. $(63+65)/2$.|B. $(63\\times3+65\\times1)/4$.|C. $63\\times0{,}25+65\\times0{,}75$.|D. $63+65/4$.','B','medium','misconception_check','equation','unweighted-isotope-average'),
  s('chem10-m1-gf034','chem10-qt3','chem10-qt3-st3','X có hai đồng vị 10 và 11; nguyên tử khối trung bình 10,8. Phần trăm đồng vị 11 là','80',['80','80%'],'medium','guided','equation'),
  s('chem10-m1-gf035','chem10-qt3','chem10-qt3-st3','Chlorine có đồng vị 35 và 37; nguyên tử khối trung bình 35,4. Phần trăm đồng vị 35 là','80',['80','80%'],'medium','near_transfer','equation'),
  s('chem10-m1-gf036','chem10-qt3','chem10-qt3-st3','X có hai đồng vị A và A+2. Đồng vị nhẹ chiếm 60%, nguyên tử khối trung bình 24,8. Giá trị A là','24',['24'],'hard','far_transfer','equation'),
  s('chem10-m1-gf037','chem10-qt3','chem10-qt3-st3','X có đồng vị 63 và 65. Trong 200 nguyên tử có 54 nguyên tử đồng vị 65. Nguyên tử khối trung bình là','63.54',['63.54','63,54'],'hard','representation_switch','table'),
  q('chem10-m1-gf038','chem10-qt3','chem10-qt3-st3','Với hai đồng vị nhẹ L và nặng H, nếu nguyên tử khối trung bình gần H hơn thì','A. L chắc chắn phổ biến hơn.|B. H thường có độ phổ biến lớn hơn.|C. hai đồng vị luôn 50:50.|D. không thể suy luận gì.','B','hard','misconception_check','graph','average-location-abundance'),
  q('chem10-m1-gf039','chem10-qt3','chem10-qt3-st4','Phổ có đỉnh m/z 24, 25, 26 với cường độ 79, 10, 11. Nhận xét đúng là','A. đồng vị 26 phổ biến nhất.|B. đỉnh 24 biểu thị đồng vị nhẹ nhất và phổ biến nhất.|C. chiều cao đỉnh là số proton.|D. m/z là phần trăm.','B','medium','retention','graph','peak-height-means-mass'),

  // QT4 — Mô hình nguyên tử (9 câu)
  q('chem10-m1-gf040','chem10-qt4','chem10-qt4-st1','Trong mô hình Bohr, electron được mô tả','A. ở các quỹ đạo dừng có mức năng lượng xác định.|B. nằm trong neutron.|C. không có năng lượng.|D. phân bố đều trong hạt nhân.','A','easy','guided','diagram'),
  q('chem10-m1-gf041','chem10-qt4','chem10-qt4-st1','Electron chuyển từ mức năng lượng cao xuống thấp theo mô hình Bohr sẽ','A. hấp thụ photon.|B. phát ra năng lượng.|C. mất điện tích.|D. biến thành proton.','B','medium','near_transfer','diagram'),
  q('chem10-m1-gf042','chem10-qt4','chem10-qt4-st1','Ưu điểm sư phạm chính của mô hình Rutherford–Bohr là','A. cho ảnh chụp chính xác electron.|B. giúp hình dung hạt nhân, lớp và sự phân mức năng lượng.|C. mô tả đầy đủ mọi nguyên tử nhiều electron.|D. loại bỏ xác suất.','B','medium','retention','text'),
  q('chem10-m1-gf043','chem10-qt4','chem10-qt4-st1','Hình các vòng tròn đồng tâm quanh hạt nhân trong mô hình Bohr nên được hiểu là','A. đường ray thật của electron trong mô hình hiện đại.|B. biểu diễn đơn giản hóa các lớp/mức năng lượng.|C. orbital p.|D. bề mặt hạt nhân.','B','hard','misconception_check','diagram','bohr-orbit-is-real-path'),
  q('chem10-m1-gf044','chem10-qt4','chem10-qt4-st2','Trong mô hình hiện đại, câu nào đúng?','A. Có thể biết đồng thời đường đi chính xác và vị trí electron.|B. Trạng thái electron được mô tả bằng orbital và phân bố xác suất.|C. orbital là hạt vật chất.|D. electron đứng yên trong AO.','B','hard','far_transfer','text'),
  q('chem10-m1-gf045','chem10-qt4','chem10-qt4-st3','Khác biệt đúng giữa quỹ đạo Bohr và AO là','A. cả hai đều là đường đi.|B. quỹ đạo Bohr là đường xác định trong mô hình; AO là vùng xác suất trong mô hình hiện đại.|C. AO chứa proton.|D. quỹ đạo không liên quan năng lượng.','B','easy','guided','diagram'),
  q('chem10-m1-gf046','chem10-qt4','chem10-qt4-st3','Một hình AO có ranh giới bao 90% xác suất. Điều đó có nghĩa','A. electron tuyệt đối không thể ở ngoài.|B. ranh giới là quỹ đạo cứng.|C. hình chỉ là bề mặt quy ước, vẫn còn xác suất nhỏ bên ngoài.|D. electron lấp đầy 90% thể tích.','C','hard','misconception_check','diagram','orbital-hard-boundary'),
  q('chem10-m1-gf047','chem10-qt4','chem10-qt4-st4','Muốn giải thích trực quan số electron theo từng lớp cho người mới học, lựa chọn hợp lí là','A. dùng mô hình Bohr và nói rõ giới hạn.|B. cấm mọi mô hình cũ.|C. coi vòng tròn là ảnh chụp.|D. dùng mô hình hạt nhân giọt lỏng.','A','medium','far_transfer','text'),
  q('chem10-m1-gf048','chem10-qt4','chem10-qt4-st4','Nhận định khoa học nhất về mô hình là','A. mô hình mới làm mô hình cũ hoàn toàn vô nghĩa.|B. mô hình là biểu diễn có phạm vi; chọn theo câu hỏi cần giải thích.|C. chỉ có mô hình nhìn giống thật mới đúng.|D. một mô hình phải giải thích mọi hiện tượng.','B','hard','retention','text','model-is-literal-reality'),

  // QT5 — Lớp, phân lớp và orbital (9 câu)
  q('chem10-m1-gf049','chem10-qt5','chem10-qt5-st1','Trong kí hiệu 3p, “3” và “p” lần lượt chỉ','A. lớp và phân lớp.|B. phân lớp và orbital.|C. số electron và lớp.|D. hai orbital.','A','easy','guided','equation'),
  q('chem10-m1-gf050','chem10-qt5','chem10-qt5-st1','Phát biểu đúng là','A. một phân lớp p chỉ có một AO.|B. lớp n=2 gồm các phân lớp 2s và 2p; mỗi phân lớp gồm một hay nhiều AO.|C. lớp và AO là một.|D. 2p là một electron.','B','medium','misconception_check','diagram','subshell-equals-orbital'),
  q('chem10-m1-gf051','chem10-qt5','chem10-qt5-st1','Chuỗi phân cấp đúng từ lớn đến nhỏ là','A. orbital → lớp → phân lớp.|B. lớp → phân lớp → orbital.|C. phân lớp → electron → lớp.|D. lớp → orbital → hạt nhân.','B','easy','retention','diagram'),
  s('chem10-m1-gf052','chem10-qt5','chem10-qt5-st3','Lớp có n=4 chứa tối đa bao nhiêu electron?','32',['32'],'medium','guided','equation'),
  s('chem10-m1-gf053','chem10-qt5','chem10-qt5-st3','Tổng số orbital tối đa trong lớp M (n=3) là','9',['9'],'medium','representation_switch','table'),
  q('chem10-m1-gf054','chem10-qt5','chem10-qt5-st4','Mô tả đúng về AO s và p là','A. AO s hình cầu; ba AO p có dạng hai thùy và định hướng khác nhau.|B. cả s và p đều là vòng tròn.|C. AO p hình cầu.|D. phân lớp s có ba AO.','A','easy','guided','diagram'),
  q('chem10-m1-gf055','chem10-qt5','chem10-qt5-st4','Ba AO $p_x,p_y,p_z$ trong cùng phân lớp khác nhau chủ yếu về','A. hình dạng cơ bản.|B. hướng trong không gian.|C. sức chứa tối đa.|D. điện tích electron.','B','medium','near_transfer','diagram'),
  q('chem10-m1-gf056','chem10-qt5','chem10-qt5-st4','Một học sinh vẽ AO p là đường số 8 mà electron chạy theo. Cách sửa đúng là','A. giữ nguyên vì AO là quỹ đạo.|B. coi hình hai thùy là vùng xác suất, không phải đường chuyển động.|C. đổi thành vòng tròn.|D. đặt proton trên đường số 8.','B','hard','misconception_check','diagram','orbital-is-path'),
  q('chem10-m1-gf057','chem10-qt5','chem10-qt5-st4','Khi xoay hệ trục tọa độ, nhãn $p_x,p_y,p_z$ nhấn mạnh','A. ba loại electron khác nhau.|B. ba hướng định hướng của các AO p tương đương trong nguyên tử cô lập.|C. ba mức n khác nhau.|D. mỗi AO chứa tối đa sáu electron.','B','hard','far_transfer','diagram'),

  // QT6 — Cấu hình electron (13 câu)
  q('chem10-m1-gf058','chem10-qt6','chem10-qt6-st1','Cấu hình electron của Mg (Z=12) là','A. $1s^22s^22p^63s^2$.|B. $1s^22s^22p^63p^2$.|C. $1s^22s^22p^6$.|D. $1s^22s^22p^43s^4$.','A','easy','guided','equation'),
  s('chem10-m1-gf059','chem10-qt6','chem10-qt6-st1','Nguyên tử có cấu hình $1s^22s^22p^63s^23p^3$ có Z bằng','15',['15'],'medium','representation_switch','equation'),
  q('chem10-m1-gf060','chem10-qt6','chem10-qt6-st1','Cấu hình nào có tổng 19 electron và đúng thứ tự mức năng lượng trong phạm vi Z≤20?','A. $1s^22s^22p^63s^23p^64s^1$.|B. $1s^22s^22p^63s^23p^7$.|C. $1s^22s^22p^64s^23p^7$.|D. $1s^22s^22p^63s^23p^54s^2$.','A','hard','far_transfer','equation'),
  q('chem10-m1-gf061','chem10-qt6','chem10-qt6-st2','Cấu hình của $O^{2-}$ (Z=8) là','A. $1s^22s^22p^4$.|B. $1s^22s^22p^6$.|C. $1s^22s^2$.|D. $1s^22s^22p^2$.','B','easy','guided','equation'),
  q('chem10-m1-gf062','chem10-qt6','chem10-qt6-st2','$Ca^{2+}$ (Z=20) có cấu hình','A. $[Ar]4s^2$.|B. $[Ar]$.|C. $[Ne]3s^2$.|D. $[Ar]4p^2$.','B','medium','near_transfer','equation'),
  s('chem10-m1-gf063','chem10-qt6','chem10-qt6-st2','Ion $X^-$ có cấu hình $1s^22s^22p^6$. Số hiệu nguyên tử của X là','9',['9'],'hard','misconception_check','equation','ion-electron-sign'),
  q('chem10-m1-gf064','chem10-qt6','chem10-qt6-st3','Sơ đồ AO của $2p^3$ ở trạng thái cơ bản là','A. [↑][↑][↑].|B. [↑↓][↑][ ].|C. [↑↓][↑↓][ ].|D. [↑↓][ ][ ].','A','easy','guided','diagram'),
  q('chem10-m1-gf065','chem10-qt6','chem10-qt6-st3','Sơ đồ nào vi phạm nguyên lí Pauli?','A. [↑↓].|B. [↑↑].|C. [↑].|D. [ ].','B','medium','misconception_check','diagram','pauli-same-spin-pair'),
  q('chem10-m1-gf066','chem10-qt6','chem10-qt6-st3','Với $2p^2$, sơ đồ bền ở trạng thái cơ bản là','A. [↑][↑][ ].|B. [↑↓][ ][ ].|C. [↑][↓][ ].|D. [↑↓][↑↓][ ].','A','medium','near_transfer','diagram'),
  q('chem10-m1-gf067','chem10-qt6','chem10-qt6-st3','Một sơ đồ $p^4$ viết [↑↓][↑↓][ ] sai chủ yếu vì','A. vượt sức chứa p.|B. ghép đôi trước khi phân bố độc thân vào đủ ba AO, vi phạm Hund.|C. mỗi AO chỉ chứa một electron.|D. p chỉ có hai AO.','B','hard','far_transfer','diagram','hund-pair-too-early'),
  s('chem10-m1-gf068','chem10-qt6','chem10-qt6-st4','Nguyên tử nitrogen (Z=7) có bao nhiêu electron độc thân ở trạng thái cơ bản?','3',['3'],'easy','guided','diagram'),
  s('chem10-m1-gf069','chem10-qt6','chem10-qt6-st4','Nguyên tử sulfur (Z=16) có bao nhiêu electron độc thân ở trạng thái cơ bản?','2',['2'],'medium','representation_switch','diagram'),
  q('chem10-m1-gf070','chem10-qt6','chem10-qt6-st4','Muốn xác định số electron độc thân từ cấu hình electron, quy trình đúng là','A. Chỉ đếm số mũ lẻ.|B. Vẽ sơ đồ AO theo Pauli và Hund rồi đếm các orbital chứa đúng một electron.|C. Đếm tổng số orbital.|D. Chỉ đếm electron lớp ngoài cùng.','B','hard','retention','text','unpaired-count-without-orbitals'),

  // QT7 — Cấu hình electron và tính chất (9 câu)
  s('chem10-m1-gf071','chem10-qt7','chem10-qt7-st1','Nguyên tử có cấu hình $1s^22s^22p^63s^23p^2$ có bao nhiêu electron lớp ngoài cùng?','4',['4'],'easy','guided','equation'),
  q('chem10-m1-gf072','chem10-qt7','chem10-qt7-st1','Muốn đếm electron lớp ngoài cùng, cần','A. cộng electron ở lớp có n lớn nhất.|B. chỉ đếm phân lớp viết cuối.|C. cộng mọi electron.|D. chỉ đếm electron độc thân.','A','medium','misconception_check','text','last-subshell-equals-outer-shell'),
  q('chem10-m1-gf073','chem10-qt7','chem10-qt7-st2','Nguyên tử có lớp ngoài cùng $3s^23p^5$ được dự đoán là','A. kim loại.|B. phi kim.|C. khí hiếm.|D. không thể có.','B','easy','guided','equation'),
  q('chem10-m1-gf074','chem10-qt7','chem10-qt7-st2','Trong dãy có cấu hình ngoài cùng $3s^1$, $3s^23p^4$, $3s^23p^6$, thứ tự phân loại tương ứng là','A. kim loại – phi kim – khí hiếm.|B. phi kim – kim loại – khí hiếm.|C. khí hiếm – phi kim – kim loại.|D. ba kim loại.','A','medium','representation_switch','table'),
  q('chem10-m1-gf075','chem10-qt7','chem10-qt7-st3','Nguyên tử Mg có lớp ngoài cùng $3s^2$. Xu hướng tạo ion đơn nguyên tử hợp lí là','A. nhận 6e.|B. nhường 2e tạo $Mg^{2+}$.|C. nhận 2e tạo $Mg^{2-}$.|D. nhường 8e.','B','medium','far_transfer','equation'),
  q('chem10-m1-gf076','chem10-qt7','chem10-qt7-st4','Helium có 2 electron lớp ngoài cùng nhưng là khí hiếm vì','A. lớp K đã bão hòa với 2e.|B. mọi nguyên tố 2e ngoài cùng đều khí hiếm.|C. He là kim loại.|D. He dễ nhận 6e.','A','medium','guided','text','helium-needs-octet'),
  q('chem10-m1-gf077','chem10-qt7','chem10-qt7-st4','Với nguyên tố có 4 electron lớp ngoài cùng, kết luận thận trọng nhất chỉ từ dữ kiện này là','A. chắc chắn kim loại mạnh.|B. chắc chắn phi kim mạnh.|C. chưa nên dùng quy tắc nhanh để kết luận tuyệt đối; cần xét vị trí và bản chất nguyên tố.|D. chắc chắn khí hiếm.','C','hard','misconception_check','text','four-valence-absolute-classification'),
  q('chem10-m1-gf078','chem10-qt7','chem10-qt7-st4','Hydrogen có cấu hình $1s^1$. Vì sao không nên máy móc xếp H giống hoàn toàn kim loại kiềm?','A. H không có electron.|B. cùng 1e ngoài cùng nhưng kích thước, năng lượng và kiểu liên kết khiến tính chất H đặc thù.|C. H có 8e ngoài cùng.|D. H luôn tạo $H^-$.','B','hard','far_transfer','text','hydrogen-is-alkali-metal'),
  q('chem10-m1-gf079','chem10-qt7','chem10-qt7-st4','Phát biểu “nguyên tử có 1–3 electron lớp ngoài cùng luôn là kim loại” cần sửa vì','A. đây là quy tắc dự đoán có ngoại lệ như H và phụ thuộc phạm vi xét.|B. mọi nguyên tố đều phi kim.|C. electron không liên quan tính chất.|D. khí hiếm có 1e.','A','hard','retention','text','valence-rule-is-absolute')
];
