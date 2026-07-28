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
    start: 1,
    questionTypeId: 'phy11-qt01',
    lessonId: 'phy11-kntt-l2',
    outcomeId: 'out-phy11-m1-01',
    subTypeIds: ['phy11-qt01-st-equation', 'phy11-qt01-st-graph'],
    roles: ['guided', 'near_transfer', 'misconception_check'],
    representations: ['equation', 'graph'],
    misconceptionId: 'misc-phy11-m1-01',
    items: [
      {
        content: 'Một vật dao động điều hòa theo $x=5\\cos(10\\pi t+\\pi/3)$ (cm). Biên độ và tần số góc là',
        options: ['$5\\text{ cm};10\\pi\\text{ rad/s}$', '$5\\text{ cm};5\\pi\\text{ rad/s}$', '$10\\text{ cm};10\\pi\\text{ rad/s}$', '$5\\text{ cm};\\pi/3\\text{ rad/s}$'],
        answer: 'A'
      },
      {
        content: 'Đưa $x=-4\\cos(5\\pi t)$ (cm) về dạng chuẩn. Biên độ của dao động bằng',
        options: ['$-4\\text{ cm}$', '$4\\text{ cm}$', '$5\\pi\\text{ cm}$', '$2\\text{ cm}$'],
        answer: 'B'
      },
      {
        content: 'Vật dao động theo $x=3\\sin(4\\pi t+\\pi/6)$ (cm). Tần số dao động là',
        options: ['$4\\text{ Hz}$', '$2\\text{ Hz}$', '$0,5\\text{ Hz}$', '$4\\pi\\text{ Hz}$'],
        answer: 'B'
      },
      {
        content: 'Với $x=0,08\\cos(20t-\\pi/4)$ (m), chu kì dao động là',
        options: ['$\\pi/10\\text{ s}$', '$10\\pi\\text{ s}$', '$0,05\\text{ s}$', '$20\\text{ s}$'],
        answer: 'A'
      },
      {
        content: 'Phương trình $x=7\\cos(2\\pi t+\\pi)$ (cm) mô tả dao động có tần số',
        options: ['$2\\pi\\text{ Hz}$', '$2\\text{ Hz}$', '$1\\text{ Hz}$', '$0,5\\text{ Hz}$'],
        answer: 'C'
      },
      {
        content: 'Một dao động có $A=6$ cm, $T=0,4$ s và tại $t=0$ vật ở biên dương. Phương trình phù hợp là',
        options: ['$x=6\\cos(5\\pi t)$ (cm)', '$x=-6\\cos(5\\pi t)$ (cm)', '$x=6\\cos(2,5\\pi t)$ (cm)', '$x=3\\cos(5\\pi t)$ (cm)'],
        answer: 'A'
      },
      {
        content: 'Đồ thị $x-t$ đạt cực đại $4$ cm và cực tiểu $-4$ cm. Biên độ dao động là',
        options: ['$8\\text{ cm}$', '$4\\text{ cm}$', '$2\\text{ cm}$', '$-4\\text{ cm}$'],
        answer: 'B'
      },
      {
        content: 'Trên đồ thị $x-t$, hai đỉnh dương liên tiếp ở $t=0,20$ s và $t=0,70$ s. Chu kì bằng',
        options: ['$0,90\\text{ s}$', '$0,50\\text{ s}$', '$0,25\\text{ s}$', '$1,40\\text{ s}$'],
        answer: 'B'
      },
      {
        content: 'Đồ thị $x-t$ đi qua vị trí cân bằng theo chiều dương tại $t=0$ và lặp lại trạng thái đó ở $t=0,8$ s. Tần số là',
        options: ['$0,8\\text{ Hz}$', '$1,25\\text{ Hz}$', '$2,5\\text{ Hz}$', '$0,625\\text{ Hz}$'],
        answer: 'B'
      },
      {
        content: 'Một đồ thị $x-t$ có $A=5$ cm. Từ đỉnh dương đến lần qua vị trí cân bằng gần nhất mất $0,15$ s. Chu kì là',
        options: ['$0,15\\text{ s}$', '$0,30\\text{ s}$', '$0,60\\text{ s}$', '$1,20\\text{ s}$'],
        answer: 'C'
      },
      {
        content: 'Đồ thị $x-t$ bắt đầu tại $x=0$ và vật chuyển động theo chiều âm; biên độ $3$ cm, chu kì $2$ s. Phương trình phù hợp là',
        options: ['$x=3\\cos(\\pi t)$', '$x=3\\sin(\\pi t)$', '$x=-3\\sin(\\pi t)$', '$x=-3\\cos(\\pi t)$'],
        answer: 'C'
      },
      {
        content: 'Hai lần liên tiếp vật qua $x=2$ cm theo cùng chiều trên đồ thị cách nhau $0,25$ s. Tần số góc là',
        options: ['$2\\pi\\text{ rad/s}$', '$4\\pi\\text{ rad/s}$', '$8\\pi\\text{ rad/s}$', '$0,5\\pi\\text{ rad/s}$'],
        answer: 'C'
      }
    ]
  },
  {
    start: 13,
    questionTypeId: 'phy11-qt02',
    lessonId: 'phy11-kntt-l3',
    outcomeId: 'out-phy11-m1-02',
    subTypeIds: ['phy11-qt02-st-extrema', 'phy11-qt02-st-state'],
    roles: ['guided', 'near_transfer', 'misconception_check'],
    representations: ['equation', 'graph'],
    items: [
      {
        content: 'Dao động điều hòa có $A=6$ cm, $\\omega=10$ rad/s. Vận tốc cực đại là',
        options: ['$60\\text{ cm/s}$', '$30\\text{ cm/s}$', '$600\\text{ cm/s}$', '$6\\text{ cm/s}$'],
        answer: 'A'
      },
      {
        content: 'Vật dao động với $A=4$ cm, $\\omega=5$ rad/s. Độ lớn gia tốc cực đại là',
        options: ['$20\\text{ cm/s}^2$', '$100\\text{ cm/s}^2$', '$25\\text{ cm/s}^2$', '$80\\text{ cm/s}^2$'],
        answer: 'B'
      },
      {
        content: 'Trong dao động điều hòa, vận tốc của vật đạt độ lớn cực đại khi vật',
        options: ['ở biên dương', 'ở biên âm', 'qua vị trí cân bằng', 'có gia tốc cực đại'],
        answer: 'C'
      },
      {
        content: 'Một vật có $v_{\\max}=40$ cm/s và $A=5$ cm. Tần số góc bằng',
        options: ['$2\\text{ rad/s}$', '$8\\text{ rad/s}$', '$45\\text{ rad/s}$', '$200\\text{ rad/s}$'],
        answer: 'B'
      },
      {
        content: 'Dao động có $a_{\\max}=3,2$ m/s² và $\\omega=4$ rad/s. Biên độ bằng',
        options: ['$0,20\\text{ m}$', '$0,80\\text{ m}$', '$0,05\\text{ m}$', '$12,8\\text{ m}$'],
        answer: 'A'
      },
      {
        content: 'Nếu biên độ giữ nguyên và tần số góc tăng gấp đôi thì $a_{\\max}$',
        options: ['tăng 2 lần', 'tăng 4 lần', 'giảm 2 lần', 'không đổi'],
        answer: 'B'
      },
      {
        content: 'Vật dao động với $\\omega=5$ rad/s, tại lúc $x=3$ cm. Gia tốc khi đó là',
        options: ['$75\\text{ cm/s}^2$', '$-75\\text{ cm/s}^2$', '$-15\\text{ cm/s}^2$', '$25\\text{ cm/s}^2$'],
        answer: 'B'
      },
      {
        content: 'Vật có $A=10$ cm, $\\omega=2$ rad/s. Tại $x=6$ cm, độ lớn vận tốc là',
        options: ['$8\\text{ cm/s}$', '$16\\text{ cm/s}$', '$12\\text{ cm/s}$', '$20\\text{ cm/s}$'],
        answer: 'B'
      },
      {
        content: 'Tại một thời điểm vật dao động điều hòa có $x>0$ và $v>0$. Kết luận đúng là',
        options: ['vật đi ra xa vị trí cân bằng, gia tốc âm', 'vật đi về vị trí cân bằng, gia tốc dương', 'vật đi ra xa vị trí cân bằng, gia tốc dương', 'vật đi về vị trí cân bằng, gia tốc âm'],
        answer: 'A'
      },
      {
        content: 'Trên đồ thị $x-t$, tại một đỉnh dương của đường cong, vận tốc và gia tốc lần lượt là',
        options: ['$0$ và âm cực đại', '$0$ và dương cực đại', 'dương cực đại và $0$', 'âm cực đại và $0$'],
        answer: 'A'
      },
      {
        content: 'Vật dao động có $A=5$ cm. Khi $|x|=3$ cm thì $|v|=16$ cm/s. Tần số góc bằng',
        options: ['$2\\text{ rad/s}$', '$4\\text{ rad/s}$', '$5\\text{ rad/s}$', '$8\\text{ rad/s}$'],
        answer: 'B'
      },
      {
        content: 'Phương trình $x=4\\cos(2t)$ (cm). Tại $t=\\pi/4$ s, trạng thái của vật là',
        options: ['$x=0$, $v=-8$ cm/s', '$x=0$, $v=8$ cm/s', '$x=4$ cm, $v=0$', '$x=-4$ cm, $v=0$'],
        answer: 'A'
      }
    ]
  },
  {
    start: 25,
    questionTypeId: 'phy11-qt03',
    lessonId: 'phy11-kntt-l5',
    outcomeId: 'out-phy11-m1-03',
    subTypeIds: ['phy11-qt03-st-state', 'phy11-qt03-st-conservation'],
    roles: ['guided', 'near_transfer', 'misconception_check'],
    representations: ['equation', 'graph'],
    misconceptionId: 'misc-phy11-m1-02',
    items: [
      {
        content: 'Con lắc lò xo có $k=100$ N/m, biên độ $A=0,10$ m. Cơ năng bằng',
        options: ['$0,50$ J', '$1,00$ J', '$5,00$ J', '$0,05$ J'],
        answer: 'A'
      },
      {
        content: 'Con lắc lò xo có $k=80$ N/m. Tại li độ $x=5$ cm, thế năng đàn hồi bằng',
        options: ['$0,10$ J', '$0,20$ J', '$1,00$ J', '$2,00$ J'],
        answer: 'A'
      },
      {
        content: 'Trong dao động điều hòa lí tưởng, tại vị trí cân bằng',
        options: ['thế năng cực đại', 'động năng cực đại', 'cơ năng bằng không', 'động năng bằng không'],
        answer: 'B'
      },
      {
        content: 'Một vật dao động với cơ năng $0,8$ J. Tại một vị trí, thế năng là $0,3$ J. Động năng là',
        options: ['$1,1$ J', '$0,5$ J', '$0,24$ J', '$0,8$ J'],
        answer: 'B'
      },
      {
        content: 'Khi $|x|=A/2$, tỉ số thế năng trên cơ năng của con lắc lò xo là',
        options: ['$1/2$', '$1/4$', '$3/4$', '$1/8$'],
        answer: 'B'
      },
      {
        content: 'Phát biểu đúng về dao động điều hòa lí tưởng là',
        options: ['động năng luôn không đổi', 'thế năng luôn không đổi', 'động năng và thế năng chuyển hóa, cơ năng không đổi', 'cả ba năng lượng đều biến thiên cùng pha'],
        answer: 'C'
      },
      {
        content: 'Vật dao động với $A=10$ cm. Tại vị trí nào động năng bằng thế năng?',
        options: ['$|x|=5$ cm', '$|x|=5\\sqrt2$ cm', '$|x|=10$ cm', '$x=0$'],
        answer: 'B'
      },
      {
        content: 'Cơ năng của một dao động điều hòa tăng bao nhiêu lần nếu biên độ tăng gấp 3 và các thông số khác không đổi?',
        options: ['3 lần', '6 lần', '9 lần', '27 lần'],
        answer: 'C'
      },
      {
        content: 'Một vật có $m=0,20$ kg, $\\omega=10$ rad/s, $A=0,05$ m. Cơ năng là',
        options: ['$0,025$ J', '$0,25$ J', '$2,5$ J', '$0,50$ J'],
        answer: 'A'
      },
      {
        content: 'Ở li độ $x=0,6A$, phần cơ năng tồn tại dưới dạng động năng là',
        options: ['$36\\%$', '$40\\%$', '$64\\%$', '$80\\%$'],
        answer: 'C'
      },
      {
        content: 'Đồ thị thế năng theo li độ của con lắc lò xo là',
        options: ['đường thẳng qua gốc', 'parabol mở lên', 'parabol mở xuống', 'đường hình sin'],
        answer: 'B'
      },
      {
        content: 'Một con lắc lò xo có cơ năng $2$ J. Khi động năng bằng $1,5$ J thì thế năng bằng',
        options: ['$0,5$ J', '$1,5$ J', '$2,0$ J', '$3,5$ J'],
        answer: 'A'
      }
    ]
  },
  {
    start: 37,
    questionTypeId: 'phy11-qt04',
    lessonId: 'phy11-kntt-l6',
    outcomeId: 'out-phy11-m1-04',
    subTypeIds: ['phy11-qt04-st-damped', 'phy11-qt04-st-forced'],
    roles: ['guided', 'near_transfer', 'misconception_check'],
    representations: ['text', 'graph'],
    items: [
      {
        content: 'Đặc trưng dễ nhận biết nhất của dao động tắt dần là',
        options: ['chu kì luôn bằng không', 'biên độ giảm theo thời gian', 'tần số tăng đều', 'biên độ tăng theo thời gian'],
        answer: 'B'
      },
      {
        content: 'Nguyên nhân làm dao động cơ tắt dần trong thực tế chủ yếu là',
        options: ['trọng lực', 'lực cản làm tiêu hao cơ năng', 'lực đàn hồi', 'quán tính'],
        answer: 'B'
      },
      {
        content: 'Đồ thị các đỉnh biên độ lần lượt là $5,0;4,2;3,5;2,9$ cm. Dao động này là',
        options: ['điều hòa lí tưởng', 'tắt dần', 'cưỡng bức ổn định', 'cộng hưởng không cản'],
        answer: 'B'
      },
      {
        content: 'Muốn võng xe sau khi qua ổ gà nhanh ổn định hơn, bộ giảm xóc cần',
        options: ['giảm lực cản', 'tạo lực cản thích hợp', 'tăng ngoại lực tuần hoàn', 'loại bỏ lò xo'],
        answer: 'B'
      },
      {
        content: 'Trong dao động tắt dần, đại lượng giảm liên tục theo thời gian là',
        options: ['li độ', 'vận tốc', 'cơ năng', 'tần số góc tức thời'],
        answer: 'C'
      },
      {
        content: 'Phát biểu nào sai về dao động tắt dần?',
        options: ['có mất mát cơ năng', 'biên độ giảm dần', 'lực cản càng lớn thường tắt càng nhanh', 'cơ năng luôn được bảo toàn'],
        answer: 'D'
      },
      {
        content: 'Sau giai đoạn chuyển tiếp, tần số của dao động cưỡng bức bằng',
        options: ['tần số riêng của hệ trong mọi trường hợp', 'tần số của ngoại lực tuần hoàn', 'tổng hai tần số', 'không phụ thuộc ngoại lực'],
        answer: 'B'
      },
      {
        content: 'Một hệ có tần số riêng $2$ Hz chịu ngoại lực tuần hoàn $3$ Hz. Ở trạng thái ổn định, hệ dao động với tần số',
        options: ['$1$ Hz', '$2$ Hz', '$3$ Hz', '$5$ Hz'],
        answer: 'C'
      },
      {
        content: 'Dao động cưỡng bức được duy trì nhờ',
        options: ['năng lượng ban đầu duy nhất', 'ngoại lực tuần hoàn cung cấp năng lượng', 'trọng lực triệt tiêu lực cản', 'không có lực cản'],
        answer: 'B'
      },
      {
        content: 'Khi thay đổi tần số ngoại lực, biên độ cưỡng bức phụ thuộc chủ yếu vào',
        options: ['độ chênh giữa tần số ngoại lực và tần số riêng cùng lực cản', 'khối lượng Trái Đất', 'pha ban đầu duy nhất', 'thời điểm chọn gốc'],
        answer: 'A'
      },
      {
        content: 'Phát biểu nào đúng về dao động cưỡng bức ở trạng thái ổn định?',
        options: ['mọi dao động cưỡng bức đều có biên độ tăng mãi', 'dao động cưỡng bức ổn định có tần số bằng tần số ngoại lực', 'dao động cưỡng bức không cần cung cấp năng lượng', 'tần số cưỡng bức luôn bằng tần số riêng'],
        answer: 'B'
      },
      {
        content: 'Một động cơ quay không cân bằng làm bệ máy rung ổn định. Đây là ví dụ về',
        options: ['dao động tự do không cản', 'dao động cưỡng bức', 'chuyển động thẳng đều', 'rơi tự do'],
        answer: 'B'
      }
    ]
  },
  {
    start: 49,
    questionTypeId: 'phy11-qt05',
    lessonId: 'phy11-kntt-l6',
    outcomeId: 'out-phy11-m1-05',
    subTypeIds: ['phy11-qt05-st-condition', 'phy11-qt05-st-application'],
    roles: ['near_transfer', 'misconception_check', 'far_transfer'],
    representations: ['graph', 'text'],
    misconceptionId: 'misc-phy11-m1-03',
    competency: 'physical_application',
    items: [
      {
        content: 'Cộng hưởng cơ xảy ra rõ nhất khi tần số ngoại lực',
        options: ['bằng hoặc rất gần tần số riêng', 'bằng không', 'rất nhỏ hơn mọi tần số', 'thay đổi ngẫu nhiên'],
        answer: 'A'
      },
      {
        content: 'Hệ có tần số riêng $4$ Hz. Ngoại lực nào dễ gây cộng hưởng nhất?',
        options: ['$1$ Hz', '$2$ Hz', '$4$ Hz', '$8$ Hz'],
        answer: 'C'
      },
      {
        content: 'Phát biểu “mọi dao động cưỡng bức đều là cộng hưởng” là',
        options: ['đúng vì đều có ngoại lực', 'sai vì cộng hưởng còn cần điều kiện tần số phù hợp', 'đúng nếu có lực cản', 'đúng ở mọi biên độ'],
        answer: 'B'
      },
      {
        content: 'Trên đồ thị biên độ cưỡng bức theo tần số, tần số tại đỉnh biểu diễn gần đúng',
        options: ['tần số riêng của hệ', 'biên độ riêng', 'hệ số ma sát', 'pha ban đầu'],
        answer: 'A'
      },
      {
        content: 'Khi lực cản nhỏ hơn, đỉnh cộng hưởng thường',
        options: ['thấp và rộng hơn', 'cao và hẹp hơn', 'biến mất', 'dịch về tần số bằng không'],
        answer: 'B'
      },
      {
        content: 'Hai hệ cùng tần số riêng nhưng hệ X có lực cản lớn hơn. Khi cộng hưởng, hệ X thường có',
        options: ['biên độ cực đại nhỏ hơn', 'biên độ cực đại lớn hơn', 'biên độ vô hạn', 'tần số bằng không'],
        answer: 'A'
      },
      {
        content: 'Khi đoàn người đi đều qua cầu, biện pháp an toàn phù hợp là',
        options: ['bước đều mạnh hơn', 'đổi nhịp hoặc đi không đều bước', 'tăng số người cùng nhịp', 'đứng nhún cùng lúc'],
        answer: 'B'
      },
      {
        content: 'Hộp đàn khuếch đại âm của dây đàn là ứng dụng có lợi của',
        options: ['tắt dần hoàn toàn', 'cộng hưởng', 'rơi tự do', 'nhiễm điện'],
        answer: 'B'
      },
      {
        content: 'Để hạn chế rung mạnh của máy gần cộng hưởng, có thể',
        options: ['điều chỉnh tốc độ quay tránh tần số riêng', 'luôn tăng tần số đến đúng tần số riêng', 'loại bỏ mọi bộ giảm chấn', 'tăng lực kích thích'],
        answer: 'A'
      },
      {
        content: 'Chọn tình huống cộng hưởng có hại',
        options: ['hộp đàn phát âm to', 'mạch chọn sóng', 'cầu rung mạnh do kích thích tuần hoàn phù hợp', 'đo tần số bằng âm thoa'],
        answer: 'C'
      },
      {
        content: 'Một tòa nhà có tần số riêng gần tần số rung do gió. Giải pháp kĩ thuật phù hợp là',
        options: ['lắp bộ giảm chấn khối lượng', 'giảm mọi lực cản', 'làm ngoại lực mạnh hơn', 'giữ nguyên vì cộng hưởng luôn có lợi'],
        answer: 'A'
      },
      {
        content: 'Người đẩy xích đu đúng nhịp làm biên độ tăng. Giải thích phù hợp nhất là',
        options: ['lực đẩy tuần hoàn gần tần số riêng và cấp năng lượng đúng pha', 'xích đu mất hết cơ năng', 'tần số riêng bằng không', 'trọng lực không tác dụng'],
        answer: 'A'
      }
    ]
  },
  {
    start: 61,
    questionTypeId: 'phy11-qt06',
    lessonId: 'phy11-kntt-l1',
    outcomeId: 'out-phy11-m1-06',
    subTypeIds: ['phy11-qt06-st-design', 'phy11-qt06-st-data'],
    roles: ['guided', 'representation_switch', 'far_transfer'],
    representations: ['experiment', 'table'],
    competency: 'physical_inquiry',
    items: [
      {
        content: 'Để đo chu kì con lắc với đồng hồ bấm giây, cách giảm sai số phản xạ tốt nhất là',
        options: ['đo thời gian nhiều chu kì rồi chia số chu kì', 'chỉ đo một phần tư chu kì', 'bấm giờ ngẫu nhiên', 'đo biên độ thay cho thời gian'],
        answer: 'A'
      },
      {
        content: 'Khi khảo sát ảnh hưởng của chiều dài đến chu kì con lắc đơn, cần giữ không đổi chủ yếu',
        options: ['chiều dài', 'khối lượng vật nặng và biên độ nhỏ', 'chu kì', 'số liệu đo được'],
        answer: 'B'
      },
      {
        content: 'Thiết bị phù hợp để ghi tự động đồ thị li độ–thời gian là',
        options: ['cảm biến vị trí nối bộ thu thập dữ liệu', 'nhiệt kế', 'ampe kế', 'cân điện tử duy nhất'],
        answer: 'A'
      },
      {
        content: 'Trình tự hợp lí khi khảo sát dao động là',
        options: ['xử lí số liệu–đặt mục tiêu–đo', 'đặt mục tiêu–chọn đại lượng đo–thu thập–xử lí', 'kết luận–đo–chọn dụng cụ', 'đo một lần–bỏ qua sai số'],
        answer: 'B'
      },
      {
        content: 'Để kiểm tra chu kì có phụ thuộc biên độ nhỏ hay không, cần',
        options: ['thay đồng thời chiều dài và biên độ', 'chỉ thay biên độ, giữ các yếu tố khác', 'chỉ đo một biên độ', 'không cần lặp phép đo'],
        answer: 'B'
      },
      {
        content: 'Một camera quay chậm dùng để khảo sát dao động cần có thêm thông tin nào để suy ra thời gian?',
        options: ['tốc độ khung hình', 'màu của vật', 'khối lượng camera', 'độ sáng phòng duy nhất'],
        answer: 'A'
      },
      {
        content: 'Thời gian của 10 dao động trong ba lần đo là $12,1$ s; $12,3$ s; $12,2$ s. Chu kì trung bình là',
        options: ['$1,22$ s', '$12,2$ s', '$3,66$ s', '$0,82$ s'],
        answer: 'A'
      },
      {
        content: 'Bảng số liệu cho 20 dao động hết $30,0$ s. Tần số gần nhất là',
        options: ['$0,67$ Hz', '$1,50$ Hz', '$20$ Hz', '$30$ Hz'],
        answer: 'A'
      },
      {
        content: 'Các lần đo chu kì là $1,98$ s; $2,01$ s; $2,02$ s; $4,00$ s. Cách xử lí phù hợp trước tiên là',
        options: ['lấy trung bình ngay cả bốn số', 'kiểm tra giá trị $4,00$ s vì có thể là ngoại lai', 'chọn số lớn nhất', 'xóa toàn bộ dữ liệu'],
        answer: 'B'
      },
      {
        content: 'Từ bảng $t$ của 5, 10, 15 dao động lần lượt là $6,0$ s; $12,1$ s; $18,0$ s. Ước lượng chu kì phù hợp là',
        options: ['$1,20$ s', '$6,0$ s', '$12,0$ s', '$0,83$ s'],
        answer: 'A'
      },
      {
        content: 'Đồ thị li độ–thời gian thu được có khoảng cách giữa 6 đỉnh liên tiếp là $2,5$ s. Chu kì là',
        options: ['$0,42$ s', '$0,50$ s', '$2,5$ s', '$3,0$ s'],
        answer: 'B'
      },
      {
        content: 'Hai nhóm đo cùng con lắc: nhóm A đo 1 chu kì, nhóm B đo 20 chu kì với cùng đồng hồ. Kết quả nhóm B thường tin cậy hơn vì',
        options: ['sai số thời gian phản xạ chiếm tỉ lệ nhỏ hơn', 'chu kì thật đã thay đổi', 'không cần chia cho 20', 'loại bỏ hoàn toàn mọi sai số hệ thống'],
        answer: 'A'
      }
    ]
  }
];

const pad = (value: number) => value.toString().padStart(3, '0');
const answerLetters = ['A', 'B', 'C', 'D'] as const;

export const g11PhysicsModule1Questions: CourseQuestion[] = groups.flatMap(group =>
  group.items.map((item, index) => {
    const questionNumber = group.start + index;
    const isSecondSubType = index >= 6;
    const difficulty = index < 4 ? 'easy' : index < 10 ? 'medium' : 'hard';
    const practiceRole = group.roles[index % group.roles.length];
    const originalAnswerIndex = answerLetters.indexOf(item.answer);
    const balancedAnswerIndex = (questionNumber - 1) % answerLetters.length;
    const balancedOptions = [...item.options] as [string, string, string, string];
    [balancedOptions[originalAnswerIndex], balancedOptions[balancedAnswerIndex]] = [
      balancedOptions[balancedAnswerIndex],
      balancedOptions[originalAnswerIndex]
    ];
    return {
      id: `phy11-q${pad(questionNumber)}`,
      subjectId: 'physics',
      courseId: 'grade11:physics',
      moduleId: 'phy11-m1',
      lessonId: group.lessonId,
      topicId: 'phy11-t01',
      questionTypeId: group.questionTypeId,
      content: item.content,
      options: balancedOptions,
      correctAnswer: answerLetters[balancedAnswerIndex],
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
