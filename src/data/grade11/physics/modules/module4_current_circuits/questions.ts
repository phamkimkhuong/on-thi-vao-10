import type { CourseQuestion } from '@/data/schema';
import type {
  AssessmentCompetency,
  PracticeRole,
  QuestionRepresentationType
} from '@/types';

interface ChoiceSeed {
  content: string;
  options: [string, string, string, string];
  answer: 'A' | 'B' | 'C' | 'D';
}

interface QuestionGroup {
  start: number;
  questionTypeId: string;
  lessonId: string;
  outcomeId: string;
  subTypeIds: [string, string];
  roles: PracticeRole[];
  representations: [QuestionRepresentationType, QuestionRepresentationType];
  competency?: AssessmentCompetency;
  misconceptionId?: string;
  items: ChoiceSeed[];
}

const groups: QuestionGroup[] = [
  {
    start: 277,
    questionTypeId: 'phy11-qt24',
    lessonId: 'phy11-kntt-l22',
    outcomeId: 'out-phy11-m4-01',
    subTypeIds: ['phy11-qt24-st-microscopic', 'phy11-qt24-st-drift'],
    roles: ['guided', 'near_transfer', 'misconception_check'],
    representations: ['equation', 'diagram'],
    misconceptionId: 'misc-phy11-m4-01',
    items: [
      { content: 'Dây kim loại có $n=8\\times10^{28}$ electron/m³, $S=1$ mm², tốc độ trôi $v=10^{-4}$ m/s. Lấy $e=1,6\\times10^{-19}$ C. Cường độ dòng điện là', options: ['$0,128$ A', '$1,28$ A', '$12,8$ A', '$128$ A'], answer: 'B' },
      { content: 'Trong kim loại, hạt tải điện chủ yếu là', options: ['electron tự do', 'proton tự do', 'neutron', 'ion dương chuyển xuyên mạng'], answer: 'A' },
      { content: 'Chiều dòng điện quy ước trong dây kim loại', options: ['cùng chiều chuyển động có hướng của electron', 'ngược chiều chuyển động có hướng của electron', 'không có quan hệ', 'luôn hướng xuống'], answer: 'B' },
      { content: 'Theo $I=Sn|q|v$, nếu S tăng gấp đôi còn các đại lượng khác không đổi thì I', options: ['giảm một nửa', 'tăng gấp đôi', 'không đổi', 'tăng bốn lần'], answer: 'B' },
      { content: 'Dây có $n=5\\times10^{28}$ m⁻³, $S=2$ mm², $v=2\\times10^{-4}$ m/s. Cường độ dòng điện là', options: ['$0,32$ A', '$3,2$ A', '$32$ A', '$320$ A'], answer: 'B' },
      { content: 'Phát biểu đúng về tốc độ trôi của electron là', options: ['bằng tốc độ lan truyền tín hiệu điện', 'thường rất nhỏ so với tốc độ thiết lập điện trường trong mạch', 'bằng tốc độ ánh sáng', 'không phụ thuộc dòng điện'], answer: 'B' },
      { content: 'Dòng điện $I=1,6$ A chạy trong dây có $n=10^{29}$ m⁻³, $S=1$ mm². Tốc độ trôi là', options: ['$10^{-6}$ m/s', '$10^{-5}$ m/s', '$10^{-4}$ m/s', '$10^{-3}$ m/s'], answer: 'C' },
      { content: 'Giữ I, n không đổi nhưng tiết diện dây giảm một nửa. Tốc độ trôi v sẽ', options: ['giảm một nửa', 'tăng gấp đôi', 'không đổi', 'tăng bốn lần'], answer: 'B' },
      { content: 'Dây có $I=3,2$ A, $S=2$ mm², $v=10^{-4}$ m/s. Mật độ electron dẫn là', options: ['$10^{27}$ m⁻³', '$10^{28}$ m⁻³', '$10^{29}$ m⁻³', '$10^{30}$ m⁻³'], answer: 'C' },
      { content: 'Trong cùng vật liệu và cùng I, dây tiết diện lớn hơn có tốc độ trôi electron', options: ['lớn hơn', 'nhỏ hơn', 'bằng tốc độ ánh sáng', 'không xác định dù biết S'], answer: 'B' },
      { content: 'Cường độ dòng điện ở mức vi mô đo tốc độ', options: ['điện lượng có hướng qua tiết diện trong một đơn vị thời gian', 'một electron riêng lẻ chạy hết dây', 'lan truyền âm trong dây', 'chuyển động nhiệt hỗn loạn'], answer: 'A' },
      { content: 'Nếu mật độ hạt tải giảm còn một nửa, để giữ I và S không đổi thì tốc độ trôi cần', options: ['giảm một nửa', 'tăng gấp đôi', 'không đổi', 'tăng bốn lần'], answer: 'B' }
    ]
  },
  {
    start: 289,
    questionTypeId: 'phy11-qt25',
    lessonId: 'phy11-kntt-l22',
    outcomeId: 'out-phy11-m4-02',
    subTypeIds: ['phy11-qt25-st-charge', 'phy11-qt25-st-carriers'],
    roles: ['guided', 'near_transfer', 'misconception_check'],
    representations: ['equation', 'table'],
    items: [
      { content: 'Dòng điện không đổi $2$ A chạy trong $5$ s. Điện lượng qua tiết diện dây là', options: ['$0,4$ C', '$2,5$ C', '$7$ C', '$10$ C'], answer: 'D' },
      { content: 'Điện lượng $12$ C qua tiết diện dây trong $4$ s. Cường độ dòng điện là', options: ['$3$ A', '$8$ A', '$16$ A', '$48$ A'], answer: 'A' },
      { content: 'Dòng điện $0,5$ A chuyển điện lượng $6$ C trong thời gian', options: ['$3$ s', '$6$ s', '$12$ s', '$30$ s'], answer: 'C' },
      { content: 'Một ampere tương ứng với', options: ['$1$ C/s', '$1$ J/C', '$1$ V/A', '$1$ C·s'], answer: 'A' },
      { content: 'Dòng $250$ mA chạy trong $2$ phút. Điện lượng là', options: ['$0,5$ C', '$30$ C', '$120$ C', '$500$ C'], answer: 'B' },
      { content: 'Bảng ghi q tăng từ $0$ đến $18$ C trong $6$ s theo đường thẳng. Dòng điện không đổi bằng', options: ['$2$ A', '$3$ A', '$6$ A', '$108$ A'], answer: 'B' },
      { content: 'Điện lượng $1,6$ C tương ứng số electron có độ lớn điện tích $e=1,6\\times10^{-19}$ C là', options: ['$10^{18}$', '$10^{19}$', '$10^{20}$', '$10^{21}$'], answer: 'B' },
      { content: 'Trong $1$ s có $5\\times10^{18}$ electron qua tiết diện. Cường độ dòng điện là', options: ['$0,08$ A', '$0,8$ A', '$8$ A', '$80$ A'], answer: 'B' },
      { content: 'Dòng điện $1,6$ A tương ứng số electron qua tiết diện trong mỗi giây là', options: ['$10^{18}$', '$10^{19}$', '$10^{20}$', '$10^{21}$'], answer: 'B' },
      { content: 'Có $2\\times10^{19}$ electron qua tiết diện trong $4$ s. Cường độ dòng điện là', options: ['$0,2$ A', '$0,8$ A', '$3,2$ A', '$8$ A'], answer: 'B' },
      { content: 'Để tính số electron từ điện lượng q, dùng', options: ['$N=|q|/e$', '$N=|q|e$', '$N=e/|q|$', '$N=It e$'], answer: 'A' },
      { content: 'Dòng điện $0,32$ A chạy trong $10$ s. Số electron qua tiết diện là', options: ['$2\\times10^{17}$', '$2\\times10^{18}$', '$2\\times10^{19}$', '$2\\times10^{20}$'], answer: 'C' }
    ]
  },
  {
    start: 301,
    questionTypeId: 'phy11-qt26',
    lessonId: 'phy11-kntt-l23',
    outcomeId: 'out-phy11-m4-03',
    subTypeIds: ['phy11-qt26-st-material', 'phy11-qt26-st-temperature'],
    roles: ['guided', 'near_transfer', 'misconception_check'],
    representations: ['equation', 'graph'],
    items: [
      { content: 'Dây có $\\rho=1,7\\times10^{-8}\\,\\Omega$m, dài $10$ m, tiết diện $1$ mm². Điện trở là', options: ['$0,017\\,\\Omega$', '$0,17\\,\\Omega$', '$1,7\\,\\Omega$', '$17\\,\\Omega$'], answer: 'B' },
      { content: 'Giữ vật liệu và tiết diện, tăng chiều dài dây gấp 3 thì điện trở', options: ['giảm 3 lần', 'tăng 3 lần', 'không đổi', 'tăng 9 lần'], answer: 'B' },
      { content: 'Giữ vật liệu và chiều dài, tăng tiết diện gấp đôi thì điện trở', options: ['tăng gấp đôi', 'giảm một nửa', 'không đổi', 'giảm bốn lần'], answer: 'B' },
      { content: 'Điện trở suất là đại lượng đặc trưng cho', options: ['vật liệu dẫn điện', 'chiều dài riêng của dây', 'dòng điện tức thời', 'hiệu điện thế nguồn'], answer: 'A' },
      { content: 'Hai dây cùng vật liệu, cùng chiều dài; dây A có đường kính gấp đôi dây B. Điện trở A bằng', options: ['$R_B/2$', '$R_B/4$', '$2R_B$', '$4R_B$'], answer: 'B' },
      { content: 'Công thức điện trở của dây đồng chất tiết diện đều là', options: ['$R=\\rho l/S$', '$R=\\rho S/l$', '$R=l/(\\rho S)$', '$R=\\rho lS$'], answer: 'A' },
      { content: 'Với kim loại trong khoảng nhiệt độ thông thường, khi nhiệt độ tăng thì điện trở thường', options: ['tăng', 'giảm', 'bằng 0', 'không đổi tuyệt đối'], answer: 'A' },
      { content: 'Một điện trở kim loại có $R_0=10\\,\\Omega$ ở $0^\\circ$C, $\\alpha=0,004$ K⁻¹. Ở $50^\\circ$C, R gần bằng', options: ['$8\\,\\Omega$', '$10,2\\,\\Omega$', '$12\\,\\Omega$', '$20\\,\\Omega$'], answer: 'C' },
      { content: 'Điện trở nhiệt NTC có điện trở', options: ['giảm khi nhiệt độ tăng', 'tăng tuyến tính trong mọi nhiệt độ', 'không phụ thuộc nhiệt độ', 'luôn bằng 0'], answer: 'A' },
      { content: 'Đồ thị R–T của một cảm biến dốc xuống cho biết cảm biến có hệ số nhiệt', options: ['dương', 'âm', 'bằng vô hạn', 'không xác định'], answer: 'B' },
      { content: 'Ứng dụng phù hợp của thermistor là', options: ['cảm biến nhiệt độ', 'nguồn điện vô hạn', 'đo khối lượng', 'tạo điện tích'], answer: 'A' },
      { content: 'Không nên ngoại suy quan hệ R–T tuyến tính quá xa vùng đã hiệu chuẩn vì', options: ['quan hệ thực có thể phi tuyến ngoài vùng đó', 'điện trở không có đơn vị', 'nhiệt độ luôn bằng 0', 'dòng điện biến mất'], answer: 'A' }
    ]
  },
  {
    start: 313,
    questionTypeId: 'phy11-qt27',
    lessonId: 'phy11-kntt-l23',
    outcomeId: 'out-phy11-m4-04',
    subTypeIds: ['phy11-qt27-st-ohmic', 'phy11-qt27-st-nonlinear'],
    roles: ['guided', 'near_transfer', 'misconception_check'],
    representations: ['graph', 'table'],
    items: [
      { content: 'Đặc tuyến I–U là đường thẳng qua gốc với điểm $U=6$ V, $I=0,30$ A. Điện trở là', options: ['$0,05\\,\\Omega$', '$1,8\\,\\Omega$', '$20\\,\\Omega$', '$30\\,\\Omega$'], answer: 'C' },
      { content: 'Với đồ thị I theo U của vật dẫn Ohm, hệ số góc bằng', options: ['$R$', '$1/R$', '$RI$', '$U/I^2$'], answer: 'B' },
      { content: 'Đường I–U càng dốc đối với vật dẫn Ohm thì điện trở', options: ['càng lớn', 'càng nhỏ', 'không đổi với mọi đường', 'bằng 0 tuyệt đối'], answer: 'B' },
      { content: 'Bảng cho $(U;I)$ lần lượt $(2;0,1)$, $(4;0,2)$, $(6;0,3)$. Vật dẫn có R bằng', options: ['$10\\,\\Omega$', '$20\\,\\Omega$', '$30\\,\\Omega$', '$60\\,\\Omega$'], answer: 'B' },
      { content: 'Đặc tuyến I–U thẳng qua gốc chứng tỏ trong vùng khảo sát', options: ['I tỉ lệ thuận U', 'I không phụ thuộc U', 'R tăng vô hạn', 'U luôn bằng 0'], answer: 'A' },
      { content: 'Nếu trục tung là U, trục hoành là I thì hệ số góc của đường thẳng Ohm bằng', options: ['$1/R$', '$R$', '$UI$', '$I/U$'], answer: 'B' },
      { content: 'Đặc tuyến I–U của bóng đèn sợi đốt bị cong chủ yếu vì', options: ['điện trở thay đổi khi nhiệt độ sợi đốt tăng', 'định luật bảo toàn điện tích sai', 'dòng điện không có hạt tải', 'điện áp không có đơn vị'], answer: 'A' },
      { content: 'Một linh kiện có $U/I$ tại hai điểm lần lượt $10\\,\\Omega$ và $18\\,\\Omega$. Kết luận là', options: ['điện trở không đổi', 'đặc tuyến phi tuyến trong vùng khảo sát', 'không có dòng điện', 'hai điểm phải trùng nhau'], answer: 'B' },
      { content: 'Để nhận biết linh kiện Ohm từ bảng số liệu, cần kiểm tra', options: ['tỉ số U/I gần như không đổi', 'tích UI bằng 0', 'I luôn bằng 1 A', 'U tăng còn I giảm bắt buộc'], answer: 'A' },
      { content: 'Trên đặc tuyến phi tuyến, “điện trở tại điểm làm việc” thường được tính gần đúng bằng', options: ['$U/I$ tại điểm đó', '$I/U$ và gọi là ohm', '$UI$', '$U+I$'], answer: 'A' },
      { content: 'Khi đọc đồ thị I–U, bước đầu tiên là', options: ['xác định đúng trục và đơn vị', 'luôn lấy hệ số góc là R', 'bỏ qua gốc tọa độ', 'đổi I thành năng lượng'], answer: 'A' },
      { content: 'Một đường đặc tuyến không đi qua gốc và cong cho thấy', options: ['không thể mặc định R không đổi', 'chắc chắn R bằng 0', 'linh kiện luôn là dây kim loại lí tưởng', 'I tỉ lệ thuận U tuyệt đối'], answer: 'A' }
    ]
  },
  {
    start: 325,
    questionTypeId: 'phy11-qt28',
    lessonId: 'phy11-kntt-l23',
    outcomeId: 'out-phy11-m4-05',
    subTypeIds: ['phy11-qt28-st-basic', 'phy11-qt28-st-condition'],
    roles: ['guided', 'near_transfer', 'misconception_check'],
    representations: ['equation', 'graph'],
    misconceptionId: 'misc-phy11-m4-02',
    items: [
      { content: 'Điện trở $20\\,\\Omega$ đặt dưới hiệu điện thế $10$ V. Cường độ dòng điện là', options: ['$0,5$ A', '$2$ A', '$10$ A', '$200$ A'], answer: 'A' },
      { content: 'Dòng điện $0,25$ A qua điện trở $48\\,\\Omega$. Hiệu điện thế là', options: ['$12$ V', '$24$ V', '$48$ V', '$192$ V'], answer: 'A' },
      { content: 'Vật dẫn có U=6 V, I=0,20 A. Điện trở tại điểm làm việc là', options: ['$1,2\\,\\Omega$', '$30\\,\\Omega$', '$120\\,\\Omega$', '$0,033\\,\\Omega$'], answer: 'B' },
      { content: 'Giữ R không đổi, tăng U gấp 3 thì I', options: ['giảm 3 lần', 'tăng 3 lần', 'không đổi', 'tăng 9 lần'], answer: 'B' },
      { content: 'Muốn dòng qua điện trở $100\\,\\Omega$ bằng $0,05$ A cần hiệu điện thế', options: ['$2$ V', '$5$ V', '$20$ V', '$2000$ V'], answer: 'B' },
      { content: 'Định luật Ohm cho đoạn mạch có dạng', options: ['$I=U/R$', '$I=UR$', '$R=I/U$', '$U=I/R$'], answer: 'A' },
      { content: 'Điều kiện quan trọng để dây dẫn kim loại có R coi như không đổi là', options: ['nhiệt độ được giữ gần như không đổi', 'U phải bằng 0', 'I phải vô hạn', 'không có electron'], answer: 'A' },
      { content: 'Một linh kiện có đặc tuyến I–U cong. Có thể áp dụng một R không đổi cho toàn vùng không?', options: ['có trong mọi trường hợp', 'không, cần xét đặc tuyến hoặc điểm làm việc', 'có nếu I khác 0', 'có nếu U dương'], answer: 'B' },
      { content: 'Bảng số liệu cho U/I tăng theo U. Điều này cho thấy', options: ['R đang thay đổi', 'R bằng 0', 'I không tồn tại', 'U và I luôn tỉ lệ thuận'], answer: 'A' },
      { content: 'Phát biểu “mọi linh kiện có điện trở đều tuân theo Ohm với R không đổi” là', options: ['đúng', 'sai', 'đúng với diode', 'đúng khi nhiệt độ thay đổi mạnh'], answer: 'B' },
      { content: 'Với bóng đèn sợi đốt, khi U tăng làm sợi đốt nóng hơn thì R thường', options: ['tăng', 'giảm về 0', 'không đổi tuyệt đối', 'âm'], answer: 'A' },
      { content: 'Để kiểm tra định luật Ohm thực nghiệm, cần đo nhiều cặp U–I và xác nhận', options: ['I tỉ lệ thuận U trong điều kiện khảo sát', 'UI không đổi', 'U/I bằng 0', 'I giảm khi U tăng'], answer: 'A' }
    ]
  },
  {
    start: 337,
    questionTypeId: 'phy11-qt29',
    lessonId: 'phy11-kntt-l24',
    outcomeId: 'out-phy11-m4-06',
    subTypeIds: ['phy11-qt29-st-closed', 'phy11-qt29-st-state'],
    roles: ['guided', 'near_transfer', 'misconception_check'],
    representations: ['diagram', 'equation'],
    items: [
      { content: 'Nguồn có suất điện động $12$ V, điện trở trong $1\\,\\Omega$ nối với $R=5\\,\\Omega$. Dòng mạch kín là', options: ['$1$ A', '$2$ A', '$2,4$ A', '$12$ A'], answer: 'B' },
      { content: 'Nguồn $\\mathcal E=9$ V, $r=1\\,\\Omega$, dòng phát $I=2$ A. Hiệu điện thế cực nguồn là', options: ['$7$ V', '$9$ V', '$11$ V', '$18$ V'], answer: 'A' },
      { content: 'Trong mạch kín đơn giản, công thức dòng điện là', options: ['$I=\\mathcal E/(R+r)$', '$I=\\mathcal E(R+r)$', '$I=R/(\\mathcal E+r)$', '$I=(R+r)/\\mathcal E$'], answer: 'A' },
      { content: 'Nguồn $6$ V, $r=0,5\\,\\Omega$ nối $R=2,5\\,\\Omega$. Điện áp mạch ngoài là', options: ['$1$ V', '$5$ V', '$6$ V', '$12$ V'], answer: 'B' },
      { content: 'Khi nguồn đang phát điện, quan hệ giữa điện áp cực U và suất điện động là', options: ['$U=\\mathcal E-Ir$', '$U=\\mathcal E+Ir$', '$U=Ir-\\mathcal E$', '$U=\\mathcal E/r$'], answer: 'A' },
      { content: 'Bỏ qua điện trở dây, tăng R mạch ngoài thì dòng mạch kín', options: ['tăng', 'giảm', 'không đổi', 'luôn bằng dòng ngắn mạch'], answer: 'B' },
      { content: 'Khi mạch ngoài hở, dòng điện bằng 0 và điện áp hai cực nguồn lí tưởng đo được gần bằng', options: ['$0$', '$r$', '$\\mathcal E$', '$\\mathcal E/r$'], answer: 'C' },
      { content: 'Dòng ngắn mạch của nguồn có suất điện động $\\mathcal E$ và điện trở trong r là', options: ['$\\mathcal E/r$', '$\\mathcal E r$', '$r/\\mathcal E$', '$0$'], answer: 'A' },
      { content: 'Nguồn $\\mathcal E=1,5$ V, $r=0,5\\,\\Omega$. Dòng ngắn mạch là', options: ['$0,75$ A', '$1$ A', '$3$ A', '$4$ A'], answer: 'C' },
      { content: 'Hiệu suất truyền năng lượng ra mạch ngoài trong mạch đơn giản bằng', options: ['$R/(R+r)$', '$r/(R+r)$', '$(R+r)/R$', '$Rr$'], answer: 'A' },
      { content: 'Khi R rất lớn so với r, điện áp cực nguồn', options: ['gần bằng suất điện động', 'gần bằng 0', 'âm', 'bằng dòng điện'], answer: 'A' },
      { content: 'Không nên ngắn mạch pin vì', options: ['dòng lớn gây nóng và hư nguồn', 'dòng luôn bằng 0', 'điện trở trong vô hạn', 'suất điện động biến mất an toàn'], answer: 'A' }
    ]
  },
  {
    start: 349,
    questionTypeId: 'phy11-qt30',
    lessonId: 'phy11-kntt-l25',
    outcomeId: 'out-phy11-m4-07',
    subTypeIds: ['phy11-qt30-st-calculation', 'phy11-qt30-st-application'],
    roles: ['guided', 'near_transfer', 'far_transfer'],
    representations: ['table', 'equation'],
    competency: 'physical_application',
    items: [
      { content: 'Thiết bị công suất $1000$ W hoạt động $2$ giờ tiêu thụ điện năng', options: ['$0,5$ kWh', '$2$ kWh', '$1000$ kWh', '$2000$ kWh'], answer: 'B' },
      { content: 'Điện trở dùng U=12 V, I=2 A có công suất', options: ['$6$ W', '$14$ W', '$24$ W', '$144$ W'], answer: 'C' },
      { content: 'Điện trở $10\\,\\Omega$ có dòng $2$ A chạy qua. Công suất tỏa nhiệt là', options: ['$5$ W', '$20$ W', '$40$ W', '$100$ W'], answer: 'C' },
      { content: 'Thiết bị dùng $0,6$ kWh trong 3 giờ với công suất không đổi. Công suất là', options: ['$0,2$ kW', '$1,8$ kW', '$2$ kW', '$5$ kW'], answer: 'A' },
      { content: 'Một bóng $60$ W sáng 5 giờ. Điện năng tiêu thụ là', options: ['$0,012$ kWh', '$0,30$ kWh', '$12$ kWh', '$300$ kWh'], answer: 'B' },
      { content: 'Công thức công suất điện của đoạn mạch là', options: ['$P=UI$', '$P=U/I$', '$P=I/U$', '$P=Ut/I$'], answer: 'A' },
      { content: 'Thay bóng 60 W bằng LED 10 W có độ sáng tương đương, dùng 5 giờ/ngày trong 30 ngày, điện năng tiết kiệm là', options: ['$1,5$ kWh', '$7,5$ kWh', '$9$ kWh', '$150$ kWh'], answer: 'B' },
      { content: 'Một ổ cắm giới hạn 10 A ở 220 V. Tổng công suất tải phù hợp không nên vượt gần', options: ['$22$ W', '$220$ W', '$2200$ W', '$22000$ W'], answer: 'C' },
      { content: 'Đơn vị kWh là đơn vị của', options: ['công suất', 'điện năng', 'cường độ dòng điện', 'điện trở'], answer: 'B' },
      { content: 'Thiết bị ghi 220 V–1000 W chỉ đạt gần công suất định mức khi', options: ['được dùng ở điện áp định mức và điều kiện thiết kế', 'nối với mọi điện áp', 'không có dòng điện', 'đấu ngắn mạch'], answer: 'A' },
      { content: 'Để giảm tổn hao tỏa nhiệt trên đường dây với cùng công suất truyền, giải pháp hiệu quả là', options: ['tăng điện áp truyền để giảm dòng', 'tăng dòng điện', 'giảm tiết diện dây', 'tăng điện trở dây'], answer: 'A' },
      { content: 'Khi chọn dây dẫn cho thiết bị công suất lớn, cần', options: ['chọn tiết diện và dòng định mức phù hợp', 'dùng dây càng nhỏ càng tốt', 'bỏ thiết bị bảo vệ', 'nối nhiều tải vượt ổ cắm'], answer: 'A' }
    ]
  },
  {
    start: 361,
    questionTypeId: 'phy11-qt31',
    lessonId: 'phy11-kntt-l26',
    outcomeId: 'out-phy11-m4-08',
    subTypeIds: ['phy11-qt31-st-circuit', 'phy11-qt31-st-data'],
    roles: ['guided', 'representation_switch', 'far_transfer'],
    representations: ['experiment', 'graph'],
    competency: 'physical_inquiry',
    items: [
      { content: 'Trong mạch đo nguồn, ampe kế cần mắc', options: ['nối tiếp với tải', 'song song trực tiếp nguồn', 'không nối mạch', 'nối song song biến trở'], answer: 'A' },
      { content: 'Vôn kế đo hiệu điện thế hai cực nguồn cần mắc', options: ['nối tiếp nguồn', 'song song hai cực nguồn', 'nối tắt ampe kế', 'song song biến trở nhưng bỏ nguồn'], answer: 'B' },
      { content: 'Vai trò của biến trở trong phép đo là', options: ['thay đổi dòng điện để thu nhiều cặp U–I', 'tạo suất điện động mới', 'làm vôn kế thành ampe kế', 'ngắn mạch nguồn'], answer: 'A' },
      { content: 'Trước khi đóng khóa mạch, nên đặt biến trở để', options: ['dòng ban đầu nhỏ, bảo vệ dụng cụ', 'điện trở bằng 0', 'dòng ngắn mạch lớn nhất', 'vôn kế quá thang'], answer: 'A' },
      { content: 'Không mắc ampe kế trực tiếp song song nguồn vì', options: ['điện trở ampe kế nhỏ có thể gây dòng rất lớn', 'ampe kế có điện trở vô hạn', 'nguồn sẽ hở mạch', 'không có electron'], answer: 'A' },
      { content: 'Để giảm sai số ngẫu nhiên, nên', options: ['đo nhiều cặp U–I trong giới hạn an toàn', 'chỉ đo một điểm', 'luôn chọn dòng lớn nhất', 'bỏ qua giới hạn đo'], answer: 'A' },
      { content: 'Đường thẳng thực nghiệm có dạng $U=1,50-0,40I$ (SI). Suất điện động và điện trở trong là', options: ['$1,50$ V; $0,40\\,\\Omega$', '$0,40$ V; $1,50\\,\\Omega$', '$1,90$ V; $0,60\\,\\Omega$', '$1,10$ V; $0,40\\,\\Omega$'], answer: 'A' },
      { content: 'Trên đồ thị U theo I, tung độ gốc biểu diễn', options: ['suất điện động $\\mathcal E$', 'điện trở trong r', 'dòng ngắn mạch duy nhất', 'điện trở tải'], answer: 'A' },
      { content: 'Trên đồ thị U theo I, hệ số góc bằng', options: ['$r$', '$-r$', '$\\mathcal E$', '$1/r$'], answer: 'B' },
      { content: 'Hai điểm đo là $(I;U)=(0,2;1,4)$ và $(0,8;1,1)$ theo SI. Điện trở trong là', options: ['$0,2\\,\\Omega$', '$0,5\\,\\Omega$', '$1,0\\,\\Omega$', '$2,0\\,\\Omega$'], answer: 'B' },
      { content: 'Với r ở câu trước, suất điện động tính từ điểm $(0,2;1,4)$ là', options: ['$1,3$ V', '$1,4$ V', '$1,5$ V', '$1,9$ V'], answer: 'C' },
      { content: 'Các điểm U–I phân tán quanh đường thẳng. Cách xử lí phù hợp là', options: ['khớp đường thẳng tốt nhất rồi suy ra tung độ gốc và độ dốc', 'chỉ chọn điểm có U lớn nhất', 'cộng U với I không xét đơn vị', 'xóa mọi điểm không thẳng tuyệt đối'], answer: 'A' }
    ]
  }
];

const pad = (value: number) => value.toString().padStart(3, '0');

export const g11PhysicsModule4Questions: CourseQuestion[] = groups.flatMap(group =>
  group.items.map((item, index) => {
    const isSecondSubType = index >= 6;
    const difficulty = index < 4 ? 'easy' : index < 9 ? 'medium' : 'hard';
    const practiceRole = group.roles[index % group.roles.length];
    return {
      id: `phy11-q${pad(group.start + index)}`,
      subjectId: 'physics',
      courseId: 'grade11:physics',
      moduleId: 'phy11-m4',
      lessonId: group.lessonId,
      topicId: 'phy11-t04',
      questionTypeId: group.questionTypeId,
      content: item.content,
      options: item.options,
      correctAnswer: item.answer,
      responseType: 'single_choice',
      validatorType: 'choice',
      outcomeIds: [group.outcomeId],
      competency: group.competency ?? 'physical_cognition',
      cognitiveLevel: index < 4 ? 'recognition' : index < 8 ? 'understanding' : 'application',
      estimatedSeconds: difficulty === 'easy' ? 60 : difficulty === 'medium' ? 90 : 120,
      subTypeId: group.subTypeIds[isSecondSubType ? 1 : 0],
      practiceRole,
      representationType: group.representations[isSecondSubType ? 1 : 0],
      misconceptionId:
        practiceRole === 'misconception_check' ? group.misconceptionId : undefined,
      isMasteryHoldout: index === 5 || index === 11,
      difficulty,
      sourceType: 'manual'
    };
  })
);
