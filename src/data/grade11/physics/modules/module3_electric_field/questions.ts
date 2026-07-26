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
    start: 169,
    questionTypeId: 'phy11-qt15',
    lessonId: 'phy11-kntt-l16',
    outcomeId: 'out-phy11-m3-01',
    subTypeIds: ['phy11-qt15-st-pair', 'phy11-qt15-st-superposition'],
    roles: ['guided', 'near_transfer', 'misconception_check'],
    representations: ['diagram', 'equation'],
    items: [
      { content: 'Hai điện tích $2\\,\\mu$C và $3\\,\\mu$C cách nhau $0,30$ m trong chân không. Lấy $k=9\\times10^9$. Độ lớn lực Coulomb là', options: ['$0,06$ N', '$0,60$ N', '$6,0$ N', '$60$ N'], answer: 'B' },
      { content: 'Hai điện tích điểm cùng dấu đặt gần nhau sẽ', options: ['hút nhau', 'đẩy nhau', 'không tương tác', 'luôn cân bằng'], answer: 'B' },
      { content: 'Điện tích $q_1>0$ nằm bên trái $q_2<0$. Lực do $q_2$ tác dụng lên $q_1$ hướng', options: ['sang trái, ra xa $q_2$', 'sang phải, về phía $q_2$', 'thẳng đứng lên', 'bằng không'], answer: 'B' },
      { content: 'Giữ nguyên hai điện tích nhưng tăng khoảng cách lên 3 lần. Lực Coulomb sẽ', options: ['tăng 3 lần', 'giảm 3 lần', 'giảm 9 lần', 'tăng 9 lần'], answer: 'C' },
      { content: 'Hai điện tích $1\\,\\mu$C cách nhau $0,10$ m. Độ lớn lực tương tác là', options: ['$0,09$ N', '$0,90$ N', '$9,0$ N', '$90$ N'], answer: 'B' },
      { content: 'Hai điện tích bằng nhau $1\\,\\mu$C tương tác với lực $0,09$ N. Khoảng cách giữa chúng gần nhất là', options: ['$0,10$ m', '$0,20$ m', '$0,316$ m', '$1,0$ m'], answer: 'C' },
      { content: 'Một điện tích thử đặt đúng trung điểm giữa hai điện tích dương bằng nhau. Hợp lực điện lên nó bằng', options: ['tổng độ lớn hai lực', 'hiệu độ lớn hai lực và bằng 0', 'một lực hướng trái', 'một lực hướng phải'], answer: 'B' },
      { content: 'Điện tích dương $q$ ở trung điểm giữa $+Q$ bên trái và $-Q$ bên phải. Hai lực lên $q$', options: ['ngược chiều và triệt tiêu', 'cùng hướng sang phải', 'cùng hướng sang trái', 'vuông góc nhau'], answer: 'B' },
      { content: 'Hai lực điện cùng phương, ngược chiều có độ lớn $0,8$ N và $0,3$ N. Hợp lực có độ lớn', options: ['$0,5$ N', '$1,1$ N', '$0,24$ N', '$0$ N'], answer: 'A' },
      { content: 'Hai lực điện vuông góc cùng độ lớn $F$ tác dụng lên một điện tích. Hợp lực có độ lớn', options: ['$F$', '$2F$', '$\\sqrt2F$', '$F/2$'], answer: 'C' },
      { content: 'Ba điện tích thẳng hàng. Điện tích giữa chịu hai lực cùng chiều có độ lớn $2$ N và $5$ N. Hợp lực là', options: ['$3$ N', '$7$ N', '$10$ N', '$2,5$ N'], answer: 'B' },
      { content: 'Khi tổng hợp nhiều lực Coulomb, thao tác bắt buộc là', options: ['cộng mọi độ lớn', 'xét vector phương và chiều từng lực', 'bỏ dấu điện tích', 'đổi lực thành điện thế'], answer: 'B' }
    ]
  },
  {
    start: 181,
    questionTypeId: 'phy11-qt16',
    lessonId: 'phy11-kntt-l17',
    outcomeId: 'out-phy11-m3-02',
    subTypeIds: ['phy11-qt16-st-concept', 'phy11-qt16-st-force'],
    roles: ['guided', 'near_transfer', 'misconception_check'],
    representations: ['text', 'diagram'],
    misconceptionId: 'misc-phy11-m3-01',
    items: [
      { content: 'Cường độ điện trường tại một điểm đặc trưng cho', options: ['khối lượng điện tích thử', 'tác dụng lực của điện trường tại điểm đó', 'điện lượng của mọi vật', 'thời gian tương tác'], answer: 'B' },
      { content: 'Đơn vị SI của cường độ điện trường là', options: ['N/C', 'C/N', 'J/C²', 'A.s'], answer: 'A' },
      { content: 'Nếu thay điện tích thử dương bằng điện tích thử dương lớn gấp đôi tại cùng điểm thì $E$', options: ['tăng gấp đôi', 'giảm một nửa', 'không đổi', 'đổi chiều'], answer: 'C' },
      { content: 'Chiều của vector $\\vec E$ tại một điểm được quy ước là chiều lực điện tác dụng lên', options: ['điện tích thử dương', 'điện tích thử âm', 'mọi điện tích bất kể dấu', 'vật trung hòa'], answer: 'A' },
      { content: 'Điện trường tồn tại quanh', options: ['điện tích nguồn', 'chỉ điện tích thử', 'chỉ nam châm', 'mọi vật không phụ thuộc điện tích'], answer: 'A' },
      { content: 'Phát biểu “$E$ phụ thuộc độ lớn điện tích thử” là', options: ['đúng vì $F=qE$', 'sai vì $E$ do nguồn và vị trí quyết định', 'đúng với điện tích dương', 'đúng khi lực bằng không'], answer: 'B' },
      { content: 'Điện tích $q=2\\,\\mu$C đặt trong điện trường $E=3\\times10^4$ N/C. Độ lớn lực điện là', options: ['$0,006$ N', '$0,06$ N', '$6$ N', '$60$ N'], answer: 'B' },
      { content: 'Điện tích $q=-4\\,\\mu$C trong điện trường hướng sang phải. Lực điện tác dụng lên q hướng', options: ['sang phải', 'sang trái', 'thẳng đứng', 'bằng không'], answer: 'B' },
      { content: 'Lực $0,12$ N tác dụng lên điện tích thử dương $3\\,\\mu$C. Cường độ điện trường là', options: ['$4\\times10^2$ N/C', '$4\\times10^3$ N/C', '$4\\times10^4$ N/C', '$4\\times10^5$ N/C'], answer: 'C' },
      { content: 'Một electron trong điện trường đều $E$ chịu lực có độ lớn', options: ['$eE$', '$E/e$', '$e/E$', '$E$'], answer: 'A' },
      { content: 'Tại cùng một điểm, proton và electron chịu lực điện có', options: ['cùng chiều, cùng độ lớn', 'ngược chiều, cùng độ lớn', 'ngược chiều, proton lớn hơn', 'cùng chiều, electron lớn hơn'], answer: 'B' },
      { content: 'Nếu điện trường tăng gấp 3 còn điện tích thử giữ nguyên thì độ lớn lực điện', options: ['không đổi', 'tăng 3 lần', 'tăng 9 lần', 'giảm 3 lần'], answer: 'B' }
    ]
  },
  {
    start: 193,
    questionTypeId: 'phy11-qt17',
    lessonId: 'phy11-kntt-l17',
    outcomeId: 'out-phy11-m3-03',
    subTypeIds: ['phy11-qt17-st-single', 'phy11-qt17-st-system'],
    roles: ['guided', 'near_transfer', 'misconception_check'],
    representations: ['diagram', 'equation'],
    items: [
      { content: 'Điện tích điểm $Q=1\\,\\mu$C. Cường độ điện trường tại điểm cách Q $0,10$ m là', options: ['$9\\times10^3$ N/C', '$9\\times10^4$ N/C', '$9\\times10^5$ N/C', '$9\\times10^6$ N/C'], answer: 'C' },
      { content: 'Vector điện trường do điện tích điểm dương tạo ra có chiều', options: ['hướng vào điện tích', 'hướng ra xa điện tích', 'tiếp tuyến đường tròn', 'bất kì'], answer: 'B' },
      { content: 'Vector điện trường do điện tích điểm âm tạo ra tại một điểm hướng', options: ['ra xa điện tích', 'về phía điện tích', 'vuông góc bán kính', 'theo vận tốc điện tích thử'], answer: 'B' },
      { content: 'Tăng khoảng cách đến điện tích điểm gấp đôi thì cường độ điện trường', options: ['giảm 2 lần', 'giảm 4 lần', 'tăng 2 lần', 'tăng 4 lần'], answer: 'B' },
      { content: 'Tại điểm cách điện tích Q một khoảng r có $E=400$ N/C. Tại điểm cách Q $2r$, E bằng', options: ['$100$ N/C', '$200$ N/C', '$800$ N/C', '$1600$ N/C'], answer: 'A' },
      { content: 'Điện tích nguồn tạo $E=3,6\\times10^5$ N/C tại khoảng cách $0,20$ m. Độ lớn Q là', options: ['$0,4\\,\\mu$C', '$1,6\\,\\mu$C', '$4\\,\\mu$C', '$16\\,\\mu$C'], answer: 'B' },
      { content: 'Tại trung điểm hai điện tích dương bằng nhau, vector điện trường tổng hợp bằng', options: ['0', 'gấp đôi mỗi điện trường', 'hướng về điện tích trái', 'hướng về điện tích phải'], answer: 'A' },
      { content: 'Tại trung điểm giữa $+Q$ bên trái và $-Q$ bên phải, điện trường tổng hợp hướng', options: ['từ $-Q$ sang $+Q$', 'từ $+Q$ sang $-Q$', 'thẳng đứng', 'bằng 0'], answer: 'B' },
      { content: 'Hai vector điện trường cùng phương cùng chiều có độ lớn $300$ N/C và $500$ N/C. Điện trường tổng hợp là', options: ['$200$ N/C', '$400$ N/C', '$800$ N/C', '$150000$ N/C'], answer: 'C' },
      { content: 'Hai vector điện trường vuông góc có độ lớn $3$ kN/C và $4$ kN/C. Hợp điện trường có độ lớn', options: ['$1$ kN/C', '$5$ kN/C', '$7$ kN/C', '$12$ kN/C'], answer: 'B' },
      { content: 'Hai vector điện trường cùng phương ngược chiều và bằng nhau tại M. Kết luận là', options: ['$E_M=0$', '$E_M$ gấp đôi', 'M không có điện trường thành phần', 'M phải là điện tích âm'], answer: 'A' },
      { content: 'Khi tổng hợp điện trường của hệ điện tích, chiều mỗi $\\vec E_i$ được xác định theo', options: ['dấu điện tích nguồn tương ứng', 'dấu điện tích thử', 'khối lượng điện tích', 'thứ tự tính toán'], answer: 'A' }
    ]
  },
  {
    start: 205,
    questionTypeId: 'phy11-qt18',
    lessonId: 'phy11-kntt-l17',
    outcomeId: 'out-phy11-m3-04',
    subTypeIds: ['phy11-qt18-st-read', 'phy11-qt18-st-draw'],
    roles: ['guided', 'near_transfer', 'misconception_check'],
    representations: ['diagram', 'text'],
    items: [
      { content: 'Tại mỗi điểm trên một đường sức điện, vector $\\vec E$ có phương', options: ['tiếp tuyến với đường sức', 'vuông góc đường sức', 'bất kì', 'luôn nằm ngang'], answer: 'A' },
      { content: 'Nơi các đường sức được vẽ mau hơn biểu thị điện trường', options: ['yếu hơn', 'mạnh hơn', 'bằng không', 'đổi dấu liên tục'], answer: 'B' },
      { content: 'Đường sức của điện tích điểm dương có chiều', options: ['hướng vào điện tích', 'hướng ra khỏi điện tích', 'theo đường tròn', 'không có chiều'], answer: 'B' },
      { content: 'Đường sức của điện tích điểm âm có chiều', options: ['hướng về điện tích', 'hướng ra xa điện tích', 'song song mọi nơi', 'không xác định'], answer: 'A' },
      { content: 'Hai đường sức điện không thể cắt nhau vì tại giao điểm giả định', options: ['điện trường phải có hai hướng khác nhau', 'điện trường bằng không', 'không có điện tích', 'thế năng vô hạn'], answer: 'A' },
      { content: 'Một hạt mang điện âm ban đầu đứng yên trong điện trường sẽ gia tốc', options: ['cùng chiều đường sức', 'ngược chiều đường sức', 'luôn theo tiếp tuyến bất kể dấu', 'không chịu lực'], answer: 'B' },
      { content: 'Hình đường sức của điện trường đều gồm các đường', options: ['thẳng song song và cách đều', 'tròn đồng tâm', 'cắt nhau', 'hội tụ rồi phân kì ngẫu nhiên'], answer: 'A' },
      { content: 'Phổ đường sức của lưỡng cực điện đi từ', options: ['điện tích âm sang dương', 'điện tích dương sang âm', 'vô cực vào cả hai điện tích dương', 'không có chiều'], answer: 'B' },
      { content: 'Một hình vẽ cho hai đường sức cắt nhau. Đánh giá đúng là', options: ['hợp lệ ở điện trường mạnh', 'không hợp lệ', 'chỉ hợp lệ gần điện tích âm', 'chỉ hợp lệ trong chân không'], answer: 'B' },
      { content: 'Khi vẽ đường sức của một điện tích điểm cô lập, tính đối xứng phù hợp là', options: ['đối xứng cầu quanh điện tích', 'chỉ có một đường thẳng', 'đối xứng theo một nửa không gian', 'không có đối xứng'], answer: 'A' },
      { content: 'Đường sức điện tĩnh', options: ['có thể là đường kín', 'không phải đường kín và có hướng', 'luôn cắt nhau ở nguồn', 'không liên hệ với $\\vec E$'], answer: 'B' },
      { content: 'Phát biểu “hạt mang điện luôn chuyển động trùng đường sức” là', options: ['đúng trong mọi trường hợp', 'sai vì quỹ đạo còn phụ thuộc vận tốc ban đầu và dấu điện tích', 'đúng với điện tích âm', 'đúng khi có từ trường'], answer: 'B' }
    ]
  },
  {
    start: 217,
    questionTypeId: 'phy11-qt19',
    lessonId: 'phy11-kntt-l18',
    outcomeId: 'out-phy11-m3-05',
    subTypeIds: ['phy11-qt19-st-field', 'phy11-qt19-st-force-work'],
    roles: ['guided', 'near_transfer', 'misconception_check'],
    representations: ['diagram', 'equation'],
    items: [
      { content: 'Hai bản song song cách nhau $2$ cm có hiệu điện thế $600$ V. Điện trường đều giữa hai bản có độ lớn', options: ['$30$ V/m', '$300$ V/m', '$3\\times10^4$ V/m', '$1,2\\times10^5$ V/m'], answer: 'C' },
      { content: 'Điện trường đều $E=2\\times10^4$ V/m giữa hai bản cách nhau $5$ mm. Hiệu điện thế có độ lớn', options: ['$10$ V', '$100$ V', '$400$ V', '$4000$ V'], answer: 'B' },
      { content: 'Trong điện trường đều, các đường sức là', options: ['thẳng song song cách đều', 'tròn đồng tâm', 'cắt nhau', 'mật độ thay đổi liên tục'], answer: 'A' },
      { content: 'Giữ hiệu điện thế hai bản không đổi nhưng tăng khoảng cách gấp đôi. Điện trường đều lí tưởng sẽ', options: ['tăng gấp đôi', 'giảm một nửa', 'không đổi', 'tăng bốn lần'], answer: 'B' },
      { content: 'Điện trường hướng từ bản', options: ['âm sang dương', 'dương sang âm', 'có điện thế thấp sang cao', 'bất kì'], answer: 'B' },
      { content: 'Một điện trường đều có $E=5000$ V/m. Hai điểm cách nhau $3$ cm dọc đường sức có độ chênh điện thế', options: ['$15$ V', '$150$ V', '$1500$ V', '$1667$ V'], answer: 'B' },
      { content: 'Điện tích $2\\,\\mu$C trong điện trường đều $E=10^4$ N/C chịu lực có độ lớn', options: ['$0,002$ N', '$0,02$ N', '$2$ N', '$200$ N'], answer: 'B' },
      { content: 'Điện tích dương dịch chuyển $4$ cm cùng chiều điện trường $E=500$ V/m. Công lực điện là $20\\,\\mu$J$. Điện tích bằng', options: ['$0,5\\,\\mu$C', '$1\\,\\mu$C', '$2\\,\\mu$C', '$4\\,\\mu$C'], answer: 'B' },
      { content: 'Công của lực điện trong điện trường đều với độ dời vuông góc đường sức bằng', options: ['$qEs$', '$qE/s$', '$0$', '$Es/q$'], answer: 'C' },
      { content: 'Điện tích âm đặt trong điện trường đều chịu lực', options: ['cùng chiều $\\vec E$', 'ngược chiều $\\vec E$', 'vuông góc $\\vec E$', 'bằng không'], answer: 'B' },
      { content: 'Công lực điện khi điện tích q dời độ dài s tạo góc $\\alpha$ với $\\vec E$ là', options: ['$qEs\\cos\\alpha$', '$qEs\\sin\\alpha$', '$qE/s$', '$Es/q$'], answer: 'A' },
      { content: 'Dùng độ dài quỹ đạo thay cho hình chiếu theo đường sức khi tính công điện trường đều là', options: ['luôn đúng', 'sai nếu quỹ đạo không song song $\\vec E$', 'đúng với điện tích âm', 'đúng khi E lớn'], answer: 'B' }
    ]
  },
  {
    start: 229,
    questionTypeId: 'phy11-qt20',
    lessonId: 'phy11-kntt-l18',
    outcomeId: 'out-phy11-m3-06',
    subTypeIds: ['phy11-qt20-st-collinear', 'phy11-qt20-st-perpendicular'],
    roles: ['guided', 'near_transfer', 'misconception_check'],
    representations: ['diagram', 'equation'],
    items: [
      { content: 'Hạt điện tích q, khối lượng m trong điện trường đều E có gia tốc độ lớn', options: ['$|q|E/m$', '$mE/|q|$', '$|q|m/E$', '$E/(|q|m)$'], answer: 'A' },
      { content: 'Proton ban đầu đứng yên trong điện trường hướng sang phải sẽ', options: ['nhanh dần sang phải', 'nhanh dần sang trái', 'chuyển động đều', 'đứng yên'], answer: 'A' },
      { content: 'Electron ban đầu đứng yên trong điện trường hướng sang phải sẽ', options: ['nhanh dần sang phải', 'nhanh dần sang trái', 'không chịu lực', 'đi tròn'], answer: 'B' },
      { content: 'Điện tích dương chuyển động cùng chiều $\\vec E$ thì lực điện sinh công dương và động năng', options: ['tăng', 'giảm', 'không đổi', 'luôn bằng không'], answer: 'A' },
      { content: 'Một hạt có $q=2\\times10^{-6}$ C, $m=10^{-3}$ kg trong $E=500$ N/C. Gia tốc là', options: ['$0,1$ m/s²', '$1$ m/s²', '$10$ m/s²', '$1000$ m/s²'], answer: 'B' },
      { content: 'Hạt dương xuất phát nghỉ, gia tốc đều $4$ m/s² trong $3$ s. Vận tốc đạt được là', options: ['$7$ m/s', '$12$ m/s', '$24$ m/s', '$36$ m/s'], answer: 'B' },
      { content: 'Hạt dương bay ngang vào điện trường đều hướng xuống. Bỏ qua trọng lực, quỹ đạo là', options: ['đường thẳng ngang', 'parabol cong xuống', 'đường tròn', 'parabol cong lên'], answer: 'B' },
      { content: 'Electron bay ngang vào điện trường đều hướng xuống. Quỹ đạo cong', options: ['xuống theo $\\vec E$', 'lên ngược $\\vec E$', 'không cong', 'thành đường tròn kín'], answer: 'B' },
      { content: 'Với vận tốc đầu vuông góc $\\vec E$, chuyển động theo phương vận tốc đầu là', options: ['thẳng đều', 'nhanh dần đều', 'chậm dần đều', 'dao động điều hòa'], answer: 'A' },
      { content: 'Trong cùng điện trường và cùng thời gian bay, tăng độ lớn điện tích hạt gấp đôi, giữ m không đổi thì độ lệch do điện trường', options: ['giảm một nửa', 'tăng gấp đôi', 'không đổi', 'tăng bốn lần'], answer: 'B' },
      { content: 'Hạt bay ngang tốc độ $v_0$ qua bản dài L. Thời gian ở trong điện trường là', options: ['$L/v_0$', '$v_0/L$', '$L^2/v_0$', '$v_0L$'], answer: 'A' },
      { content: 'Độ lệch theo phương điện trường của hạt vào ngang, với vận tốc đầu theo phương đó bằng 0, là', options: ['$at$', '$at^2/2$', '$v_0t$', '$a/t$'], answer: 'B' }
    ]
  },
  {
    start: 241,
    questionTypeId: 'phy11-qt21',
    lessonId: 'phy11-kntt-l19',
    outcomeId: 'out-phy11-m3-07',
    subTypeIds: ['phy11-qt21-st-work', 'phy11-qt21-st-energy'],
    roles: ['guided', 'near_transfer', 'misconception_check'],
    representations: ['equation', 'diagram'],
    items: [
      { content: 'Lực điện thực hiện công $0,20$ J khi chuyển điện tích từ M đến N. Độ giảm thế năng điện là', options: ['$-0,20$ J', '$0,20$ J', '$0,40$ J', '$0$ J'], answer: 'B' },
      { content: 'Công của lực điện trong điện trường tĩnh phụ thuộc', options: ['hình dạng đường đi', 'vị trí đầu và cuối', 'tốc độ chuyển động', 'thời gian đi'], answer: 'B' },
      { content: 'Điện tích dương chuyển động tự phát theo chiều lực điện. Công lực điện và biến thiên thế năng lần lượt', options: ['dương; âm', 'âm; dương', 'dương; dương', 'âm; âm'], answer: 'A' },
      { content: 'Nếu công của lực điện từ A đến B là $-5$ mJ thì công từ B về A là', options: ['$-5$ mJ', '$0$ mJ', '$5$ mJ', '$10$ mJ'], answer: 'C' },
      { content: 'Trong điện trường đều, q dời cùng chiều E một đoạn d. Công lực điện là', options: ['$qEd$', '$-qEd$ với mọi q', '$Ed/q$', '$qE/d$'], answer: 'A' },
      { content: 'Điện tích $2\\,\\mu$C đi qua hiệu điện thế $100$ V theo chiều giảm điện thế. Công lực điện là', options: ['$2\\times10^{-6}$ J', '$2\\times10^{-4}$ J', '$0,02$ J', '$200$ J'], answer: 'B' },
      { content: 'Quan hệ đúng giữa công lực điện A và biến thiên thế năng $\\Delta W_t$ là', options: ['$A=\\Delta W_t$', '$A=-\\Delta W_t$', '$A=2\\Delta W_t$', '$A=0$'], answer: 'B' },
      { content: 'Thế năng đầu $0,50$ J, lực điện thực hiện công $0,20$ J. Thế năng cuối là', options: ['$0,30$ J', '$0,70$ J', '$0,10$ J', '$1,0$ J'], answer: 'A' },
      { content: 'Thế năng điện tăng $0,08$ J thì công của lực điện bằng', options: ['$0,08$ J', '$-0,08$ J', '$0,16$ J', '$0$ J'], answer: 'B' },
      { content: 'Lực ngoài dịch chuyển chậm điện tích ngược chiều lực điện làm thế năng điện', options: ['tăng', 'giảm', 'không đổi', 'luôn bằng không'], answer: 'A' },
      { content: 'Hai đường đi khác nhau cùng nối A và B trong điện trường tĩnh. Công lực điện trên hai đường', options: ['bằng nhau', 'tỉ lệ độ dài', 'đường dài lớn hơn', 'không so sánh được'], answer: 'A' },
      { content: 'Khi lực điện sinh công dương, nếu chỉ có lực điện làm công thì động năng của hạt', options: ['tăng', 'giảm', 'không đổi', 'bằng thế năng'], answer: 'A' }
    ]
  },
  {
    start: 253,
    questionTypeId: 'phy11-qt22',
    lessonId: 'phy11-kntt-l20',
    outcomeId: 'out-phy11-m3-08',
    subTypeIds: ['phy11-qt22-st-potential', 'phy11-qt22-st-voltage'],
    roles: ['guided', 'near_transfer', 'misconception_check'],
    representations: ['equation', 'diagram'],
    misconceptionId: 'misc-phy11-m3-02',
    items: [
      { content: 'Điện tích $q=2\\,\\mu$C có thế năng $6$ mJ tại M. Điện thế tại M là', options: ['$3$ V', '$300$ V', '$3000$ V', '$12000$ V'], answer: 'C' },
      { content: 'Đơn vị của điện thế là', options: ['volt', 'ampere', 'coulomb', 'ohm'], answer: 'A' },
      { content: 'Điện thế tại một điểm là đại lượng đặc trưng cho điện trường về', options: ['khả năng sinh công trên một đơn vị điện tích', 'khối lượng riêng', 'từ tính', 'số electron tuyệt đối'], answer: 'A' },
      { content: 'Điện tích âm q đặt tại điểm có điện thế dương V. Thế năng $W=qV$ có dấu', options: ['dương', 'âm', 'luôn bằng không', 'không xác định dù biết q và V'], answer: 'B' },
      { content: 'Nếu chọn mốc điện thế khác, điện thế tại từng điểm có thể đổi nhưng', options: ['hiệu điện thế giữa hai điểm không đổi', 'cường độ điện trường bằng không', 'điện tích đổi dấu', 'công luôn bằng không'], answer: 'A' },
      { content: 'Phát biểu “điện thế và hiệu điện thế là cùng một đại lượng tại một điểm” là', options: ['đúng', 'sai vì hiệu điện thế là độ chênh giữa hai điểm', 'đúng với điện tích dương', 'đúng khi V bằng 0'], answer: 'B' },
      { content: 'Với quy ước $U_{AB}=V_A-V_B$, công lực điện khi q đi từ A đến B là', options: ['$A_{AB}=qU_{AB}$', '$A_{AB}=U_{AB}/q$', '$A_{AB}=-qU_{AB}$ mọi trường hợp', '$A_{AB}=q/U_{AB}$'], answer: 'A' },
      { content: '$V_A=120$ V và $V_B=50$ V. $U_{AB}$ bằng', options: ['$70$ V', '$170$ V', '$-70$ V', '$2,4$ V'], answer: 'A' },
      { content: 'Lực điện thực hiện công $0,03$ J khi điện tích $5$ mC đi từ A đến B. $U_{AB}$ bằng', options: ['$0,006$ V', '$6$ V', '$15$ V', '$150$ V'], answer: 'B' },
      { content: 'Trong chiều của vector điện trường, điện thế', options: ['tăng', 'giảm', 'không đổi', 'đổi dấu tuần hoàn'], answer: 'B' },
      { content: 'Hai điểm nằm trên cùng một mặt đẳng thế có hiệu điện thế', options: ['$0$', 'phụ thuộc đường đi', 'vô hạn', 'luôn dương'], answer: 'A' },
      { content: 'Điện tích $-2\\,\\mu$C đi từ A đến B có $U_{AB}=100$ V. Công lực điện là', options: ['$2\\times10^{-4}$ J', '$-2\\times10^{-4}$ J', '$-200$ J', '$50$ J'], answer: 'B' }
    ]
  },
  {
    start: 265,
    questionTypeId: 'phy11-qt23',
    lessonId: 'phy11-kntt-l21',
    outcomeId: 'out-phy11-m3-09',
    subTypeIds: ['phy11-qt23-st-capacitance', 'phy11-qt23-st-application'],
    roles: ['guided', 'near_transfer', 'misconception_check'],
    representations: ['equation', 'diagram'],
    competency: 'physical_application',
    items: [
      { content: 'Tụ điện $C=5\\,\\mu$F được đặt dưới hiệu điện thế $12$ V. Điện tích của tụ là', options: ['$60\\,\\mu$C', '$17\\,\\mu$C', '$2,4\\,\\mu$C', '$0,42\\,\\mu$C'], answer: 'A' },
      { content: 'Tụ tích điện $Q=200\\,\\mu$C ở hiệu điện thế $50$ V. Điện dung là', options: ['$4\\,\\mu$F', '$10\\,\\mu$F', '$250\\,\\mu$F', '$10000\\,\\mu$F'], answer: 'A' },
      { content: 'Đơn vị SI của điện dung là', options: ['farad', 'volt', 'coulomb', 'joule'], answer: 'A' },
      { content: 'Với một tụ lí tưởng xác định, điện dung C phụ thuộc chủ yếu vào', options: ['Q đang có', 'U đang đặt', 'cấu tạo hình học và điện môi', 'thời gian nạp duy nhất'], answer: 'C' },
      { content: 'Giữ C không đổi, tăng U gấp đôi thì điện tích Q của tụ', options: ['giảm một nửa', 'tăng gấp đôi', 'không đổi', 'tăng bốn lần'], answer: 'B' },
      { content: 'Tụ $20\\,\\mu$F tích điện $0,4$ mC. Hiệu điện thế là', options: ['$2$ V', '$20$ V', '$200$ V', '$8000$ V'], answer: 'B' },
      { content: 'Kí hiệu “$100\\,\\mu$F – 25 V” trên tụ cho biết', options: ['điện dung và điện áp làm việc tối đa khuyến nghị', 'điện tích luôn bằng 25 C', 'dòng điện 100 A', 'công suất 2500 W'], answer: 'A' },
      { content: 'Không nên đặt tụ ghi 16 V trực tiếp vào nguồn 24 V vì', options: ['có thể vượt điện áp định mức và hỏng tụ', 'điện dung sẽ bằng 0', 'nguồn không có điện trường', 'tụ chỉ dùng với dòng xoay chiều'], answer: 'A' },
      { content: 'Ứng dụng đặc trưng của tụ điện là', options: ['tích và phóng điện', 'tạo điện tích từ hư không', 'làm nguồn năng lượng vô hạn', 'đo khối lượng'], answer: 'A' },
      { content: 'Khi thay tụ $10\\,\\mu$F bằng tụ $20\\,\\mu$F ở cùng điện áp, điện tích tích được', options: ['giảm một nửa', 'tăng gấp đôi', 'không đổi', 'tăng bốn lần'], answer: 'B' },
      { content: 'Trước khi sửa mạch có tụ dung lượng lớn, thao tác an toàn là', options: ['xả tụ qua điện trở thích hợp và kiểm tra điện áp', 'chạm trực tiếp hai cực', 'tăng điện áp nguồn', 'nối tắt bằng tay'], answer: 'A' },
      { content: 'Tụ trong đèn flash máy ảnh có vai trò', options: ['tích năng lượng rồi phóng nhanh qua đèn', 'giảm tốc độ ánh sáng', 'tạo dòng điện vô hạn', 'thay đổi khối lượng pin'], answer: 'A' }
    ]
  }
];

const pad = (value: number) => value.toString().padStart(3, '0');

export const g11PhysicsModule3Questions: CourseQuestion[] = groups.flatMap(group =>
  group.items.map((item, index) => {
    const isSecondSubType = index >= 6;
    const difficulty = index < 4 ? 'easy' : index < 9 ? 'medium' : 'hard';
    const practiceRole = group.roles[index % group.roles.length];
    return {
      id: `phy11-q${pad(group.start + index)}`,
      subjectId: 'physics',
      courseId: 'grade11:physics',
      moduleId: 'phy11-m3',
      lessonId: group.lessonId,
      topicId: 'phy11-t03',
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
