import type { CourseQuestion, CourseSolution } from '@/data/schema';
import type { QuestionRepresentationType } from '@/types';

type Choice = 'A' | 'B' | 'C' | 'D';
type Seed = {
  content: string; answer: string; reasoning: string[];
  difficulty: 'medium' | 'hard'; rep?: QuestionRepresentationType;
  options?: [string, string, string, string]; accepted?: string[];
};
type Bank = {
  qt: number; lesson: number; outcome: number; subTypes: [string, string]; items: Seed[];
};
const n = (content: string, answer: string, reasoning: string[], difficulty: Seed['difficulty'], rep: QuestionRepresentationType = 'equation', accepted?: string[]): Seed =>
  ({ content, answer, reasoning, difficulty, rep, accepted });
const c = (content: string, options: [string, string, string, string], answer: Choice, reasoning: string[], difficulty: Seed['difficulty'], rep: QuestionRepresentationType = 'diagram'): Seed =>
  ({ content, options, answer, reasoning, difficulty, rep });

const banks: Bank[] = [
  { qt: 15, lesson: 16, outcome: 1, subTypes: ['pair', 'superposition'], items: [
    n('Hai điện tích $2\\,\\mu C$ và $5\\,\\mu C$ cách nhau $0,30$ m. Tính lực Coulomb theo N.', '1', ['$F=k|q_1q_2|/r^2$.', 'Thay số được $F=1$ N.'], 'medium'),
    c('Giữ khoảng cách, tăng mỗi điện tích gấp đôi thì lực Coulomb', ['tăng 2 lần','tăng 4 lần','giảm 2 lần','không đổi'], 'B', ['$F\\propto q_1q_2$.', 'Hai điện tích cùng gấp đôi làm tích tăng 4 lần.'], 'medium'),
    n('Hai điện tích bằng nhau tương tác với lực $0,36$ N ở khoảng cách $0,10$ m. Tính độ lớn mỗi điện tích theo $\\mu C$.', '2', ['$q=\\sqrt{Fr^2/k}$.', 'Đổi đơn vị trước khi thay số.', 'Suy ra $q=2\\,\\mu C$.'], 'hard'),
    n('Hai lực điện cùng phương ngược chiều có độ lớn $1,2$ N và $0,5$ N. Tính hợp lực theo N.', '0.7', ['Hai lực ngược chiều nên lấy hiệu độ lớn.', '$F=1,2-0,5=0,7$ N.'], 'medium', 'diagram', ['0.7','0,7']),
    n('Hai lực điện vuông góc có độ lớn $6$ N và $8$ N. Tính hợp lực theo N.', '10', ['Dùng định lí Pythagore cho hai vector vuông góc.', '$F=\\sqrt{6^2+8^2}=10$ N.'], 'medium', 'diagram'),
    c('Ba điện tích thẳng hàng đối xứng: hai điện tích ngoài bằng nhau và cùng dấu, điện tích thử ở trung điểm. Hợp lực lên điện tích thử bằng', ['$2F$','$F$','$0$','$F/2$'], 'C', ['Hai lực có cùng độ lớn do đối xứng.', 'Chúng ngược chiều.', 'Tổng vector bằng 0.'], 'hard')
  ]},
  { qt: 16, lesson: 17, outcome: 2, subTypes: ['concept', 'force'], items: [
    c('Tại cùng một điểm, thay điện tích thử $q$ bằng $2q$ thì cường độ điện trường', ['tăng 2 lần','giảm 2 lần','không đổi','đổi chiều'], 'C', ['$E$ là đặc trưng của nguồn và vị trí.', 'Lực tăng theo q nhưng thương $F/q$ không đổi.'], 'medium', 'text'),
    c('Vector điện trường được quy ước theo chiều lực tác dụng lên', ['điện tích thử dương','electron','vật trung hòa','mọi điện tích'], 'A', ['Đây là quy ước định nghĩa chiều của $\\vec E$.', 'Điện tích âm chịu lực ngược chiều E.'], 'medium'),
    c('Một điện tích âm được thả từ nghỉ trong điện trường đều sẽ gia tốc', ['cùng chiều E','ngược chiều E','vuông góc E','không xác định'], 'B', ['$\\vec F=q\\vec E$.', 'Với $q<0$, lực và gia tốc ngược chiều E.', 'Vận tốc ban đầu bằng 0 nên chuyển động ban đầu theo lực.'], 'hard'),
    n('Điện tích $3\\,\\mu C$ trong điện trường $2\\times10^4$ N/C chịu lực bao nhiêu N?', '0.06', ['$F=|q|E$.', 'Thay số được $0,06$ N.'], 'medium', 'equation', ['0.06','0,06']),
    n('Lực điện $0,12$ N tác dụng lên điện tích $-4\\,\\mu C$. Tính độ lớn E theo N/C.', '30000', ['$E=F/|q|$.', 'Đổi $4\\,\\mu C=4\\times10^{-6}$ C.', 'Suy ra $E=3\\times10^4$ N/C.'], 'hard'),
    c('Proton và electron cùng đặt tại một điểm trong điện trường. So sánh lực điện lên chúng.', ['cùng chiều cùng độ lớn','ngược chiều cùng độ lớn','proton lớn hơn','electron lớn hơn'], 'B', ['Hai hạt có điện tích cùng độ lớn e.', 'Dấu trái nhau nên chiều lực trái nhau.', 'Độ lớn đều bằng $eE$.'], 'hard')
  ]},
  { qt: 17, lesson: 17, outcome: 3, subTypes: ['single', 'system'], items: [
    n('Điện tích $Q=2\\,\\mu C$. Tính E tại điểm cách Q $0,20$ m theo N/C.', '450000', ['$E=k|Q|/r^2$.', 'Thay số được $4,5\\times10^5$ N/C.'], 'medium'),
    c('Tăng khoảng cách tới điện tích điểm gấp 3 thì E', ['giảm 3 lần','giảm 6 lần','giảm 9 lần','tăng 9 lần'], 'C', ['$E\\propto1/r^2$.', 'Khoảng cách gấp 3 làm E còn $1/9$.'], 'medium'),
    n('Tại r = 0,30 m, điện trường của Q có độ lớn $4\\times10^5$ N/C. Tính $|Q|$ theo $\\mu C$.', '4', ['$|Q|=Er^2/k$.', 'Thay E và r theo SI.', 'Suy ra $|Q|=4\\,\\mu C$.'], 'hard'),
    n('Điện trường do Q tại A là 9000 N/C. Điểm B xa Q gấp 2 lần A. Tính $E_B$ theo N/C.', '2250', ['$E\\propto1/r^2$.', '$E_B=E_A/4$.', 'Kết quả 2250 N/C.'], 'hard'),
    c('Tại điểm nằm bên trái điện tích âm, vector điện trường hướng', ['sang trái','sang phải về phía điện tích','lên trên','bằng 0'], 'B', ['Điện trường của điện tích âm hướng về điện tích.', 'Điểm ở bên trái nên hướng sang phải.'], 'hard'),
    n('Muốn E giảm từ $3,6\\times10^5$ xuống $4,0\\times10^4$ N/C, khoảng cách phải tăng bao nhiêu lần?', '3', ['$E_1/E_2=9$.', 'Do $E\\propto1/r^2$, $r_2/r_1=\\sqrt9$.', 'Khoảng cách tăng 3 lần.'], 'hard'),
    n('Hai vector điện trường vuông góc có độ lớn 5 kN/C và 12 kN/C. Tính hợp điện trường theo kN/C.', '13', ['Cộng vector vuông góc.', '$E=\\sqrt{5^2+12^2}=13$ kN/C.'], 'medium', 'diagram'),
    c('Tại trung điểm giữa hai điện tích dương bằng nhau, điện trường tổng hợp', ['hướng sang trái','hướng sang phải','bằng 0','gấp đôi'], 'C', ['Hai điện trường thành phần cùng độ lớn.', 'Hai chiều đối nhau nên triệt tiêu.'], 'medium'),
    n('Hai điện trường cùng phương cùng chiều có độ lớn 2000 và 3500 N/C. Tính E tổng hợp.', '5500', ['Chúng cùng phương cùng chiều.', 'Cộng đại số hai độ lớn.', 'E = 5500 N/C.'], 'hard'),
    n('Hai điện trường cùng phương ngược chiều có độ lớn 8 kN/C và 3 kN/C. Tính độ lớn E tổng hợp theo kN/C.', '5', ['Chọn chiều của vector lớn làm chiều dương.', 'Lấy hiệu $8-3$.', 'Độ lớn bằng 5 kN/C.'], 'hard'),
    c('Ở trung điểm giữa $+Q$ bên trái và $-Q$ bên phải, điện trường tổng hợp hướng', ['sang trái','sang phải','bằng 0','vuông góc đoạn nối'], 'B', ['E do +Q hướng ra xa +Q.', 'E do -Q hướng về -Q.', 'Cả hai cùng hướng sang phải.'], 'hard'),
    n('Hai vector E bằng nhau, hợp với nhau góc $60^\\circ$, mỗi vector 10 kN/C. Tính độ lớn tổng hợp theo kN/C.', '10sqrt3', ['$E^2=E_1^2+E_2^2+2E_1E_2\\cos60^\\circ$.', 'Thay $E_1=E_2=10$.', 'Suy ra $E=10\\sqrt3$ kN/C.'], 'hard', 'diagram', ['10sqrt3','10√3','17.320508'])
  ]},
  { qt: 19, lesson: 18, outcome: 5, subTypes: ['field', 'force-work'], items: [
    n('Hai bản cách nhau 2 cm có hiệu điện thế 600 V. Tính E theo V/m.', '30000', ['$E=U/d$.', 'Đổi d=0,02 m, suy ra E=30000 V/m.'], 'medium'),
    c('Giữ U không đổi, tăng khoảng cách hai bản gấp đôi thì E', ['tăng đôi','giảm đôi','không đổi','giảm bốn'], 'B', ['$E=U/d$.', 'd tăng đôi làm E giảm đôi.'], 'medium'),
    n('Điện trường đều $E=5000$ V/m, hai điểm cùng đường sức cách 4 cm. Tính độ lớn hiệu điện thế.', '200', ['$U=Ed$.', 'Đổi d=0,04 m.', 'U=200 V.'], 'hard'),
    n('Điện tích $2\\,\\mu C$ trong E = 3000 N/C chịu lực bao nhiêu N?', '0.006', ['$F=|q|E$.', 'Thay số được 0,006 N.'], 'medium', 'equation', ['0.006','0,006']),
    n('Điện tích $5\\,\\mu C$ dịch chuyển 0,20 m cùng chiều E = 4000 V/m. Tính công lực điện theo J.', '0.004', ['$A=qEs\\cos0$.', 'Đổi q sang C.', 'A=0,004 J.'], 'hard', 'equation', ['0.004','0,004']),
    c('Điện tích âm dịch chuyển cùng chiều E thì công của lực điện', ['dương','âm','bằng 0','không xác định'], 'B', ['$A=qEs\\cos0$.', 'q âm làm công âm.', 'Lực điện ngược chiều dịch chuyển.'], 'hard')
  ]},
  { qt: 20, lesson: 18, outcome: 6, subTypes: ['collinear', 'perpendicular'], items: [
    n('Hạt tích điện có $q/m=2\\times10^6$ C/kg trong E = 500 V/m. Tính gia tốc theo m/s².', '1000000000', ['$a=|q|E/m=(|q|/m)E$.', 'Thay số được $10^9$ m/s².'], 'medium'),
    c('Hạt dương ban đầu đứng yên trong điện trường đều sẽ chuyển động', ['nhanh dần cùng chiều E','nhanh dần ngược E','đều vuông góc E','tròn đều'], 'A', ['$F=qE$ cùng chiều E.', 'Gia tốc không đổi trong điện trường đều.'], 'medium'),
    n('Điện tích dương có $q/m=10^7$ C/kg đi từ nghỉ qua hiệu điện thế 200 V. Tính $v^2$ theo m²/s².', '4000000000', ['$qU=mv^2/2$.', '$v^2=2(q/m)U$.', 'Kết quả $4\\times10^9$.'], 'hard'),
    n('Hạt có gia tốc $2\\times10^{10}$ m/s² trong 5 ns từ nghỉ. Tính tốc độ theo m/s.', '100', ['$t=5\\times10^{-9}$ s.', '$v=at$.', 'v=100 m/s.'], 'hard'),
    c('Electron bay ngược chiều E và chậm dần. Lực điện lên electron hướng', ['cùng chiều E','ngược chiều E và cùng chiều vận tốc','vuông góc vận tốc','bằng 0'], 'B', ['Electron có q âm nên lực ngược E.', 'Vận tốc ngược E nên lực cùng chiều vận tốc, thực ra hạt nhanh dần.', 'Mô tả “chậm dần” không phù hợp.'], 'hard'),
    n('Một proton tăng động năng thêm 500 eV khi qua hiệu điện thế. Tính độ lớn hiệu điện thế theo V.', '500', ['$\\Delta K=qU$.', 'Với proton, 1 eV ứng với 1 V.', 'U=500 V.'], 'hard'),
    n('Hạt bay ngang với $v_x=2\\times10^6$ m/s qua vùng dài 4 cm. Tính thời gian bay theo ns.', '20', ['$t=L/v_x$.', 'Đổi L=0,04 m.', '$t=2\\times10^{-8}$ s = 20 ns.'], 'medium'),
    c('Trong điện trường thẳng đứng, chuyển động ngang của hạt (bỏ qua trọng lực) là', ['nhanh dần đều','chậm dần đều','thẳng đều','tròn đều'], 'C', ['Không có lực theo phương ngang.', 'Vận tốc ngang không đổi.'], 'medium'),
    n('Hạt có gia tốc đứng $4\\times10^{12}$ m/s², thời gian trong vùng là 2 micro giây. Tính độ lệch theo m.', '8', ['$y=at^2/2$.', 'Đổi $t=2\\times10^{-6}$ s.', 'Suy ra y=8 m.'], 'hard'),
    n('Giữ E và L, tăng tốc độ ngang gấp đôi. Độ lệch điện trường giảm bao nhiêu lần?', '4', ['$t=L/v_x$ nên t giảm 2 lần.', '$y=at^2/2$.', 'Độ lệch giảm 4 lần.'], 'hard'),
    c('Hai hạt cùng q, cùng vận tốc vào vùng E; hạt 2 có khối lượng gấp đôi. Tỉ số độ lệch $y_2/y_1$ là', ['$2$','$1$','$1/2$','$1/4$'], 'C', ['$a=qE/m$.', 'Thời gian bay như nhau.', 'Khối lượng gấp đôi làm độ lệch còn một nửa.'], 'hard'),
    n('Hạt có $q/m=5\\times10^7$ C/kg, E=200 V/m, bay trong vùng 10 ns. Tính vận tốc đứng nhận thêm theo m/s.', '100', ['$a=(q/m)E=10^{10}$ m/s².', '$\\Delta v_y=at$.', 'Với t=$10^{-8}$ s, $\\Delta v_y=100$ m/s.'], 'hard')
  ]},
  { qt: 21, lesson: 19, outcome: 7, subTypes: ['work', 'energy'], items: [
    n('Điện tích $3\\,\\mu C$ đi qua hiệu điện thế 200 V. Tính công lực điện theo J.', '0.0006', ['$A=qU$.', 'Thay số được $6\\times10^{-4}$ J.'], 'medium', 'equation', ['0.0006','0,0006']),
    c('Lực điện sinh công dương thì thế năng điện', ['tăng','giảm','không đổi','luôn bằng 0'], 'B', ['$A=-\\Delta W_t$.', 'A dương nên $\\Delta W_t<0$.'], 'medium'),
    n('Điện tích $-2\\,\\mu C$ đi từ A đến B với $U_{AB}=100$ V. Tính công theo J.', '-0.0002', ['$A=qU_{AB}$.', 'q âm nên công âm.', 'A=$-2\\times10^{-4}$ J.'], 'hard', 'equation', ['-0.0002','-0,0002']),
    n('Lực điện sinh công 0,03 J. Thế năng ban đầu 0,08 J. Tính thế năng cuối.', '0.05', ['$A=W_{t1}-W_{t2}$.', '$W_{t2}=W_{t1}-A$.', 'Kết quả 0,05 J.'], 'medium', 'equation', ['0.05','0,05']),
    c('Lực ngoài dịch chuyển chậm điện tích ngược chiều lực điện. Thế năng điện', ['giảm','tăng','không đổi','bằng động năng'], 'B', ['Lực ngoài phải sinh công dương.', 'Chuyển động chậm nên công ngoài làm tăng thế năng.', 'Công lực điện âm.'], 'hard'),
    n('Thế năng giảm từ 0,12 J xuống -0,03 J. Tính công lực điện theo J.', '0.15', ['$A=W_{t1}-W_{t2}$.', 'A=0,12-(-0,03).', 'Kết quả 0,15 J.'], 'hard', 'equation', ['0.15','0,15'])
  ]},
  { qt: 22, lesson: 20, outcome: 8, subTypes: ['potential', 'voltage'], items: [
    n('Điện tích có thế năng 0,04 J và q=2 mC. Tính điện thế theo V.', '20', ['$V=W_t/q$.', 'Đổi q=0,002 C, V=20 V.'], 'medium'),
    c('Theo chiều vector điện trường, điện thế', ['tăng','giảm','không đổi','đổi dấu tuần hoàn'], 'B', ['$\\vec E$ hướng theo chiều điện thế giảm.', 'Đây là quan hệ định hướng cơ bản.'], 'medium'),
    n('Điện tích điểm $Q=3\\,\\mu C$. Tính V tại r=0,30 m theo V.', '90000', ['$V=kQ/r$.', 'Thay số theo SI.', 'V=$9\\times10^4$ V.'], 'hard'),
    n('Điện thế do Q tại A là 120 V. B cách Q gấp 3 lần A. Tính $V_B$.', '40', ['$V\\propto1/r$.', 'Khoảng cách gấp 3 làm V còn một phần ba.', 'V_B=40 V.'], 'hard'),
    c('Điện thế do điện tích điểm âm tạo ra có dấu', ['dương','âm','luôn bằng 0','phụ thuộc điện tích thử'], 'B', ['$V=kQ/r$.', 'r dương nên dấu V theo dấu Q.', 'Q âm cho V âm.'], 'hard'),
    n('Hai điện tích tạo tại M các điện thế 300 V và -120 V. Tính điện thế tổng hợp.', '180', ['Điện thế là đại lượng đại số.', 'Cộng $300+(-120)$.', 'V_M=180 V.'], 'hard'),
    n('Điện tích $4\\,\\mu C$ đi qua $U_{AB}=250$ V. Tính công theo mJ.', '1', ['$A=qU_{AB}$.', 'A=$10^{-3}$ J.', 'Đổi được 1 mJ.'], 'medium'),
    c('$U_{AB}=V_A-V_B=-50$ V nghĩa là', ['$V_A$ cao hơn 50 V','$V_B$ cao hơn $V_A$ 50 V','hai điện thế bằng nhau','A luôn có điện tích âm'], 'B', ['Viết $V_A-V_B=-50$.', 'Suy ra $V_B=V_A+50$ V.'], 'medium'),
    n('Công lực điện lên q=2 mC từ A đến B là -0,06 J. Tính $U_{AB}$ theo V.', '-30', ['$U_{AB}=A/q$.', 'Thay A=-0,06 J và q=0,002 C.', 'U_AB=-30 V.'], 'hard'),
    n('Điện tích -5 micro C đi từ nơi 100 V đến nơi 300 V. Tính độ tăng thế năng theo mJ.', '-1', ['$\\Delta W_t=q(V_2-V_1)$.', 'Hiệu điện thế là 200 V.', '$\\Delta W=-10^{-3}$ J = -1 mJ.'], 'hard'),
    c('Hai điểm nằm trên cùng một mặt đẳng thế. Công lực điện khi dịch chuyển điện tích giữa chúng bằng', ['dương','âm','0','phụ thuộc đường đi'], 'C', ['$U=0$ trên cùng mặt đẳng thế.', 'A=qU=0.', 'Kết quả không phụ thuộc đường đi.'], 'hard'),
    n('Điện trường đều E=2500 V/m. Hai điểm theo chiều E cách 8 cm. Tính $V_A-V_B$ nếu A ở trước B theo chiều E.', '200', ['$U_{AB}=Ed$ khi đi cùng chiều E từ A tới B.', 'Đổi d=0,08 m.', 'U_AB=200 V.'], 'hard')
  ]},
  { qt: 23, lesson: 21, outcome: 9, subTypes: ['capacitance', 'application'], items: [
    n('Tụ $20\\,\\mu F$ mắc vào 12 V. Tính điện tích theo $\\mu C$.', '240', ['$Q=CU$.', '$20\\,\\mu F\\times12$ V = $240\\,\\mu C$.'], 'medium'),
    n('Tụ tích $0,6$ mC ở 30 V. Tính điện dung theo $\\mu F$.', '20', ['$C=Q/U$.', 'Đổi Q=600 micro C, C=20 micro F.'], 'medium'),
    n('Tụ 50 micro F tăng điện áp từ 10 lên 30 V. Điện tích tăng thêm bao nhiêu micro C?', '1000', ['$\\Delta Q=C\\Delta U$.', '$\\Delta U=20$ V.', '$\\Delta Q=1000$ micro C.'], 'hard'),
    c('Tụ ghi 25 V có thể mắc trực tiếp lâu dài vào nguồn 40 V không?', ['Có','Không vì vượt điện áp định mức','Có nếu điện dung nhỏ','Luôn có nếu mắc ngược'], 'B', ['40 V vượt điện áp làm việc.', 'Điện môi có thể bị đánh thủng.'], 'medium', 'text'),
    c('Hai tụ cùng điện áp, tụ có C lớn hơn sẽ tích', ['ít điện tích hơn','nhiều điện tích hơn','cùng điện tích','không tích điện'], 'B', ['$Q=CU$.', 'Ở cùng U, Q tỉ lệ thuận C.'], 'medium'),
    n('Tụ 100 micro F nạp ở 20 V. Tính năng lượng $W=CU^2/2$ theo mJ.', '20', ['$W=CU^2/2$.', 'Đổi C=$10^{-4}$ F.', 'W=0,02 J=20 mJ.'], 'hard')
  ]}
];

let qn = 1, choiceIndex = 0;
const letters = ['A','B','C','D'] as const;
const solutionRows: Array<{id:string;qid:string;answer:string;reasoning:string[];qt:number}> = [];
export const g11PhysicsModule3ExpansionQuestions: CourseQuestion[] = banks.flatMap(bank => {
  const half = bank.items.length / 2;
  return bank.items.map((item, index) => {
    const id=`phy11-m3x-q${String(qn).padStart(3,'0')}`, sid=`phy11-m3x-s${String(qn).padStart(3,'0')}`; qn++;
    let answer=item.answer, options=item.options;
    if(options){const from=letters.indexOf(answer as Choice),to=choiceIndex++%4;options=[...options];[options[from],options[to]]=[options[to],options[from]];answer=letters[to];}
    const isHoldout = bank.items.length===6 ? index===2||index===5 : index===4||index===5||index===10||index===11;
    const reasoning=item.difficulty==='hard'&&item.reasoning.length<3?[...item.reasoning,'Kiểm tra dấu, đơn vị và độ lớn của kết quả.']:item.reasoning;
    solutionRows.push({id:sid,qid:id,answer,reasoning,qt:bank.qt});
    return {id,subjectId:'physics',courseId:'grade11:physics',moduleId:'phy11-m3',lessonId:`phy11-kntt-l${bank.lesson}`,topicId:'phy11-t03',questionTypeId:`phy11-qt${bank.qt}`,subTypeId:`phy11-qt${bank.qt}-st-${bank.subTypes[index<half?0:1]}`,content:item.content,options,correctAnswer:answer,acceptedAnswers:options?undefined:item.accepted??[answer,answer.replace('.',',')],responseType:options?'single_choice':'short_answer',validatorType:options?'choice':'number',outcomeIds:[`out-phy11-m3-${String(bank.outcome).padStart(2,'0')}`],competency:item.rep==='table'||item.rep==='graph'?'physical_inquiry':'physical_application',cognitiveLevel:'application',estimatedSeconds:item.difficulty==='hard'?180:110,practiceRole:isHoldout?'mastery_holdout':index%3===0?'near_transfer':index%3===1?'far_transfer':'representation_switch',representationType:item.rep??'equation',isMasteryHoldout:isHoldout,difficulty:item.difficulty,sourceType:'manual'} as CourseQuestion;
  });
});
export const g11PhysicsModule3ExpansionSolutions: CourseSolution[] = solutionRows.map(row=>({id:row.id,questionId:row.qid,courseId:'grade11:physics',moduleId:'phy11-m3',recognition:'Xác định đại lượng điện, chiều vector và quan hệ năng lượng trước khi thay số.',detailedSteps:row.reasoning.map((explanation,index)=>({order:index+1,title:index===0?'Lập mô hình':index===row.reasoning.length-1?'Kết luận':'Biến đổi',explanation})),finalAnswer:row.answer,commonMistakes:['Sai dấu điện tích, chiều vector hoặc đổi sai tiền tố micro và mili.'],reviewSuggestions:[`Ôn lại mô hình và điều kiện áp dụng của phy11-qt${row.qt}.`]}));
