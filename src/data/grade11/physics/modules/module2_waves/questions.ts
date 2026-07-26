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
    start: 73,
    questionTypeId: 'phy11-qt07',
    lessonId: 'phy11-kntt-l8',
    outcomeId: 'out-phy11-m2-01',
    subTypeIds: ['phy11-qt07-st-space', 'phy11-qt07-st-time'],
    roles: ['guided', 'near_transfer', 'misconception_check'],
    representations: ['graph', 'equation'],
    items: [
      {
        content: 'Trên đồ thị $u-x$ tại một thời điểm, độ dịch chuyển cực đại là $3$ cm và hai đỉnh liên tiếp cách nhau $0,8$ m. Biên độ và bước sóng là',
        options: ['$3$ cm; $0,8$ m', '$6$ cm; $0,8$ m', '$3$ cm; $0,4$ m', '$1,5$ cm; $1,6$ m'],
        answer: 'A'
      },
      {
        content: 'Trên ảnh dạng sóng, khoảng cách từ một đỉnh đến hõm gần nhất là $25$ cm. Bước sóng bằng',
        options: ['$12,5$ cm', '$25$ cm', '$50$ cm', '$100$ cm'],
        answer: 'C'
      },
      {
        content: 'Hai điểm gần nhau nhất trên đồ thị $u-x$ dao động cùng pha cách nhau',
        options: ['$\\lambda/4$', '$\\lambda/2$', '$\\lambda$', '$2\\lambda$'],
        answer: 'C'
      },
      {
        content: 'Trên đồ thị $u-x$, một đỉnh ở $x=0,20$ m và đỉnh kế tiếp ở $x=0,70$ m. Số sóng $k=2\\pi/\\lambda$ bằng',
        options: ['$2\\pi$ rad/m', '$4\\pi$ rad/m', '$0,5\\pi$ rad/m', '$8\\pi$ rad/m'],
        answer: 'B'
      },
      {
        content: 'Tại cùng thời điểm, hai điểm cách nhau $\\lambda/4$ có độ lệch pha theo không gian là',
        options: ['$\\pi/4$', '$\\pi/2$', '$\\pi$', '$2\\pi$'],
        answer: 'B'
      },
      {
        content: 'Sóng có phương trình $u=4\\cos(2\\pi t-\\pi x/3)$ (cm), với $x$ tính bằng m. Bước sóng là',
        options: ['$3$ m', '$6$ m', '$2\\pi$ m', '$\\pi/3$ m'],
        answer: 'B'
      },
      {
        content: 'Trên đồ thị $u-t$ tại một điểm, hai đỉnh liên tiếp ở $0,10$ s và $0,50$ s. Chu kì là',
        options: ['$0,10$ s', '$0,40$ s', '$0,50$ s', '$0,60$ s'],
        answer: 'B'
      },
      {
        content: 'Đồ thị $u-t$ có chu kì $5$ ms. Tần số của sóng là',
        options: ['$5$ Hz', '$50$ Hz', '$200$ Hz', '$500$ Hz'],
        answer: 'C'
      },
      {
        content: 'Tại một điểm, thời gian từ đỉnh dương đến lần qua vị trí cân bằng gần nhất là $0,05$ s. Chu kì bằng',
        options: ['$0,05$ s', '$0,10$ s', '$0,20$ s', '$0,40$ s'],
        answer: 'C'
      },
      {
        content: 'Đồ thị $u-t$ có biên trên $2,5$ cm và biên dưới $-2,5$ cm. Biên độ sóng là',
        options: ['$5,0$ cm', '$2,5$ cm', '$1,25$ cm', '$-2,5$ cm'],
        answer: 'B'
      },
      {
        content: 'Hai lần liên tiếp phần tử đi qua $u=0$ theo hai chiều ngược nhau cách nhau $0,15$ s. Chu kì là',
        options: ['$0,075$ s', '$0,15$ s', '$0,30$ s', '$0,60$ s'],
        answer: 'C'
      },
      {
        content: 'Một điểm có $u=3\\cos(20\\pi t)$ (mm). Trên đồ thị $u-t$, số dao động toàn phần trong $0,50$ s là',
        options: ['$5$', '$10$', '$20$', '$40$'],
        answer: 'A'
      }
    ]
  },
  {
    start: 85,
    questionTypeId: 'phy11-qt08',
    lessonId: 'phy11-kntt-l9',
    outcomeId: 'out-phy11-m2-02',
    subTypeIds: ['phy11-qt08-st-calculation', 'phy11-qt08-st-energy'],
    roles: ['guided', 'near_transfer', 'misconception_check'],
    representations: ['equation', 'diagram'],
    misconceptionId: 'misc-phy11-m2-01',
    items: [
      {
        content: 'Sóng có bước sóng $0,50$ m và tần số $8$ Hz. Tốc độ truyền sóng là',
        options: ['$4$ m/s', '$8$ m/s', '$16$ m/s', '$0,0625$ m/s'],
        answer: 'A'
      },
      {
        content: 'Sóng truyền với tốc độ $12$ m/s và tần số $3$ Hz. Bước sóng là',
        options: ['$3$ m', '$4$ m', '$9$ m', '$36$ m'],
        answer: 'B'
      },
      {
        content: 'Sóng có tốc độ $20$ m/s và bước sóng $2,5$ m. Chu kì là',
        options: ['$0,125$ s', '$8$ s', '$0,5$ s', '$50$ s'],
        answer: 'A'
      },
      {
        content: 'Một nguồn tạo $30$ dao động trong $6$ s. Sóng truyền với tốc độ $10$ m/s. Bước sóng bằng',
        options: ['$0,5$ m', '$2$ m', '$5$ m', '$60$ m'],
        answer: 'B'
      },
      {
        content: 'Giữ nguyên môi trường nhưng tăng tần số nguồn gấp đôi. Tốc độ truyền và bước sóng lần lượt',
        options: ['đều gấp đôi', 'không đổi; giảm một nửa', 'giảm một nửa; không đổi', 'đều không đổi'],
        answer: 'B'
      },
      {
        content: 'Sóng đi được $15$ m trong $3$ s và có chu kì $0,40$ s. Bước sóng là',
        options: ['$0,50$ m', '$2,0$ m', '$5,0$ m', '$6,0$ m'],
        answer: 'B'
      },
      {
        content: 'Một chiếc lá nổi trên nước khi gợn sóng đi qua sẽ chủ yếu',
        options: ['đi từ nguồn đến bờ cùng sóng', 'dao động quanh vị trí cân bằng', 'đứng yên tuyệt đối', 'chuyển động thẳng đều'],
        answer: 'B'
      },
      {
        content: 'Sóng cơ truyền từ A đến B mang theo',
        options: ['toàn bộ vật chất từ A đến B', 'năng lượng và trạng thái dao động', 'các phần tử môi trường theo một chiều', 'khối lượng của nguồn'],
        answer: 'B'
      },
      {
        content: 'Một nút bấc trên mặt nước chỉ nhấp nhô khi sóng lan ngang. Điều này chứng tỏ',
        options: ['phần tử nước không dao động', 'sóng truyền năng lượng còn phần tử dao động cục bộ', 'nút bấc truyền nhanh hơn sóng', 'nước chuyển hết đến bờ'],
        answer: 'B'
      },
      {
        content: 'Khi sóng trên dây truyền qua một điểm, phần tử dây',
        options: ['chạy dọc theo dây đến đầu kia', 'dao động quanh vị trí cân bằng', 'biến mất sau một chu kì', 'luôn đứng yên'],
        answer: 'B'
      },
      {
        content: 'Phát biểu đúng về tốc độ truyền sóng cơ là',
        options: ['luôn bằng tốc độ cực đại của phần tử', 'đặc trưng cho sự lan truyền trạng thái dao động trong môi trường', 'là tốc độ vật chất đi từ nguồn', 'không phụ thuộc môi trường'],
        answer: 'B'
      },
      {
        content: 'Hai điểm trên dây cách xa nhau vẫn lần lượt dao động khi xung sóng đi qua vì',
        options: ['mỗi phần tử truyền tương tác và năng lượng cho phần tử lân cận', 'một phần tử vật chất chạy suốt dây', 'dây không có quán tính', 'sóng không cần năng lượng'],
        answer: 'A'
      }
    ]
  },
  {
    start: 97,
    questionTypeId: 'phy11-qt09',
    lessonId: 'phy11-kntt-l9',
    outcomeId: 'out-phy11-m2-03',
    subTypeIds: ['phy11-qt09-st-classify', 'phy11-qt09-st-medium'],
    roles: ['guided', 'near_transfer', 'misconception_check'],
    representations: ['text', 'diagram'],
    items: [
      {
        content: 'Sóng có phương dao động của phần tử vuông góc phương truyền là',
        options: ['sóng ngang', 'sóng dọc', 'sóng đứng', 'xung đơn'],
        answer: 'A'
      },
      {
        content: 'Sóng âm truyền trong không khí là sóng',
        options: ['ngang', 'dọc', 'điện từ', 'không mang năng lượng'],
        answer: 'B'
      },
      {
        content: 'Trên một dây căng, phần tử dây dao động lên xuống còn sóng truyền ngang dọc theo dây. Đây là',
        options: ['sóng dọc', 'sóng ngang', 'chuyển động thẳng', 'sóng điện từ duy nhất'],
        answer: 'B'
      },
      {
        content: 'Trong sóng dọc, các vùng nén và dãn xuất hiện theo phương',
        options: ['vuông góc phương truyền', 'trùng phương truyền', 'thẳng đứng mọi lúc', 'không xác định'],
        answer: 'B'
      },
      {
        content: 'Cách phân loại sóng ngang và sóng dọc dựa trên',
        options: ['biên độ lớn hay nhỏ', 'quan hệ giữa phương dao động và phương truyền', 'màu sắc môi trường', 'tần số cao hay thấp'],
        answer: 'B'
      },
      {
        content: 'Hình vẽ một đường hình sin trên giấy không đủ để kết luận sóng ngang vì cần biết thêm',
        options: ['phương dao động thật của phần tử so với phương truyền', 'màu đường vẽ', 'khối lượng tờ giấy', 'thời điểm vẽ'],
        answer: 'A'
      },
      {
        content: 'Sóng cơ không truyền được trong',
        options: ['chất rắn', 'chất lỏng', 'chất khí', 'chân không'],
        answer: 'D'
      },
      {
        content: 'Sóng ngang cơ học truyền được rõ trong',
        options: ['dây căng', 'không khí đồng nhất dưới dạng âm', 'chân không', 'mọi chất khí dưới dạng nén dãn'],
        answer: 'A'
      },
      {
        content: 'Sóng âm có thể truyền qua thép vì',
        options: ['thép có các phần tử tương tác đàn hồi', 'thép là chân không', 'âm là dòng vật chất', 'thép không có khối lượng'],
        answer: 'A'
      },
      {
        content: 'Một lò xo dài có các vòng nén dãn lan dọc trục. Mô hình này biểu diễn',
        options: ['sóng ngang', 'sóng dọc', 'sóng điện từ', 'dao động quay'],
        answer: 'B'
      },
      {
        content: 'Phát biểu nào đúng về môi trường truyền sóng cơ?',
        options: ['mọi sóng cơ đều là sóng ngang', 'sóng cơ cần môi trường vật chất để truyền', 'sóng dọc không mang năng lượng', 'sóng âm không truyền trong chất rắn'],
        answer: 'B'
      },
      {
        content: 'Trên mặt nước, mô hình phổ thông coi phần tử mặt nước dao động chủ yếu thẳng đứng còn sóng truyền ngang. Sóng được xếp gần đúng là',
        options: ['sóng ngang', 'sóng dọc', 'sóng điện từ', 'không phải sóng'],
        answer: 'A'
      }
    ]
  },
  {
    start: 109,
    questionTypeId: 'phy11-qt10',
    lessonId: 'phy11-kntt-l10',
    outcomeId: 'out-phy11-m2-04',
    subTypeIds: ['phy11-qt10-st-procedure', 'phy11-qt10-st-signal'],
    roles: ['guided', 'representation_switch', 'far_transfer'],
    representations: ['experiment', 'graph'],
    competency: 'physical_inquiry',
    items: [
      {
        content: 'Bộ dụng cụ phù hợp để đo tần số âm bằng tín hiệu điện là',
        options: ['micro và dao động kí/phần mềm hiện sóng', 'ampe kế và cân', 'nhiệt kế và thước', 'la bàn và lực kế'],
        answer: 'A'
      },
      {
        content: 'Sau khi thu tín hiệu âm tuần hoàn, bước xử lí trực tiếp để tìm tần số là',
        options: ['đo chu kì rồi dùng $f=1/T$', 'đo biên độ rồi nhân tốc độ', 'đếm màu trên màn hình', 'đổi âm thành khối lượng'],
        answer: 'A'
      },
      {
        content: 'Để giảm sai số khi đọc chu kì trên màn hình, nên',
        options: ['đo khoảng thời gian của nhiều chu kì rồi chia', 'chỉ đo nửa ô bất kì', 'giảm tín hiệu đến không', 'bỏ thang thời gian'],
        answer: 'A'
      },
      {
        content: 'Khi tín hiệu bị cắt đỉnh trên màn hình, thao tác hợp lí là',
        options: ['giảm độ nhạy hoặc biên độ đầu vào', 'tăng khuếch đại vô hạn', 'đổi đơn vị thời gian thành mét', 'bỏ micro'],
        answer: 'A'
      },
      {
        content: 'Biến độc lập khi kiểm tra tần số các nốt do máy phát âm tạo ra là',
        options: ['nốt/tần số cài đặt', 'kết quả đo', 'sai số tính được', 'số chữ số của đáp án'],
        answer: 'A'
      },
      {
        content: 'Quy trình đúng là',
        options: ['phát âm–thu bằng micro–hiển thị tín hiệu–đo chu kì–tính tần số', 'tính tần số–không thu tín hiệu–kết luận', 'đo nhiệt độ–cân micro–tính chu kì', 'chỉ nghe bằng tai rồi ghi số chính xác'],
        answer: 'A'
      },
      {
        content: 'Đồ thị tín hiệu cho 5 chu kì trong $10$ ms. Tần số âm là',
        options: ['$50$ Hz', '$200$ Hz', '$500$ Hz', '$2000$ Hz'],
        answer: 'C'
      },
      {
        content: 'Trên dao động kí, một chu kì chiếm 4 ô ngang; mỗi ô là $0,5$ ms. Tần số bằng',
        options: ['$50$ Hz', '$200$ Hz', '$500$ Hz', '$2000$ Hz'],
        answer: 'C'
      },
      {
        content: 'Khoảng thời gian giữa 11 đỉnh liên tiếp là $20$ ms. Tần số là',
        options: ['$50$ Hz', '$100$ Hz', '$500$ Hz', '$550$ Hz'],
        answer: 'C'
      },
      {
        content: 'Tín hiệu có chu kì đo được $(2,00\\pm0,04)$ ms. Giá trị trung tâm của tần số là',
        options: ['$50$ Hz', '$200$ Hz', '$500$ Hz', '$2000$ Hz'],
        answer: 'C'
      },
      {
        content: 'Hai phép đo một âm cho $498$ Hz và $502$ Hz. Giá trị trung bình là',
        options: ['$2$ Hz', '$498$ Hz', '$500$ Hz', '$1000$ Hz'],
        answer: 'C'
      },
      {
        content: 'Một tín hiệu không tuần hoàn rõ do nhiều tạp âm. Cách cải thiện phù hợp nhất là',
        options: ['giảm nhiễu môi trường và thu nhiều chu kì ổn định', 'chọn ngẫu nhiên hai đỉnh', 'bỏ qua thang thời gian', 'kết luận tần số bằng không'],
        answer: 'A'
      }
    ]
  },
  {
    start: 121,
    questionTypeId: 'phy11-qt11',
    lessonId: 'phy11-kntt-l11',
    outcomeId: 'out-phy11-m2-05',
    subTypeIds: ['phy11-qt11-st-spectrum', 'phy11-qt11-st-application'],
    roles: ['guided', 'near_transfer', 'misconception_check'],
    representations: ['table', 'text'],
    competency: 'physical_application',
    items: [
      {
        content: 'Trong chân không, sóng điện từ có bước sóng càng ngắn thì tần số',
        options: ['càng nhỏ', 'càng lớn', 'không đổi', 'bằng không'],
        answer: 'B'
      },
      {
        content: 'Thứ tự tăng dần tần số phù hợp là',
        options: ['sóng vô tuyến–hồng ngoại–ánh sáng nhìn thấy–tử ngoại', 'tử ngoại–ánh sáng–hồng ngoại–vô tuyến', 'hồng ngoại–vô tuyến–tử ngoại–ánh sáng', 'ánh sáng–vô tuyến–hồng ngoại–tử ngoại'],
        answer: 'A'
      },
      {
        content: 'So với tia hồng ngoại, tia tử ngoại có',
        options: ['bước sóng dài hơn', 'tần số thấp hơn', 'bước sóng ngắn hơn', 'cùng tần số'],
        answer: 'C'
      },
      {
        content: 'Sóng điện từ có $\\lambda=3$ m trong chân không. Với $c=3\\times10^8$ m/s, tần số là',
        options: ['$10^6$ Hz', '$10^8$ Hz', '$9\\times10^8$ Hz', '$10^{-8}$ Hz'],
        answer: 'B'
      },
      {
        content: 'Miền nằm giữa hồng ngoại và tử ngoại trong phổ là',
        options: ['ánh sáng nhìn thấy', 'tia X', 'sóng vô tuyến', 'tia gamma'],
        answer: 'A'
      },
      {
        content: 'Phát biểu nào đúng về sự truyền sóng điện từ trong chân không?',
        options: ['sóng điện từ cần không khí để truyền', 'mọi miền phổ có cùng tốc độ trong chân không', 'tần số và bước sóng tăng cùng nhau', 'tia gamma có bước sóng dài nhất'],
        answer: 'B'
      },
      {
        content: 'Điều khiển từ xa gia dụng thường sử dụng',
        options: ['tia hồng ngoại', 'tia gamma', 'tia X', 'tia tử ngoại mạnh'],
        answer: 'A'
      },
      {
        content: 'Chụp ảnh xương trong y học thường dùng',
        options: ['sóng vô tuyến', 'tia X', 'hồng ngoại', 'ánh sáng đỏ'],
        answer: 'B'
      },
      {
        content: 'Ứng dụng phù hợp của tia tử ngoại là',
        options: ['khử khuẩn có kiểm soát', 'truyền thanh AM', 'điều khiển từ xa hồng ngoại', 'chụp ảnh xương bằng tia X'],
        answer: 'A'
      },
      {
        content: 'Biện pháp an toàn phù hợp khi làm việc với bức xạ ion hóa là',
        options: ['giảm thời gian phơi nhiễm, tăng khoảng cách và che chắn', 'tăng thời gian tiếp xúc', 'bỏ mọi che chắn', 'đứng sát nguồn'],
        answer: 'A'
      },
      {
        content: 'Liên lạc vô tuyến đường dài sử dụng chủ yếu miền',
        options: ['sóng vô tuyến', 'tia gamma', 'tia X', 'tử ngoại'],
        answer: 'A'
      },
      {
        content: 'Camera nhiệt phát hiện bức xạ phát ra mạnh từ vật ấm chủ yếu ở miền',
        options: ['hồng ngoại', 'tử ngoại', 'tia X', 'gamma'],
        answer: 'A'
      }
    ]
  },
  {
    start: 133,
    questionTypeId: 'phy11-qt12',
    lessonId: 'phy11-kntt-l12',
    outcomeId: 'out-phy11-m2-06',
    subTypeIds: ['phy11-qt12-st-path', 'phy11-qt12-st-fringe'],
    roles: ['guided', 'near_transfer', 'misconception_check'],
    representations: ['diagram', 'equation'],
    misconceptionId: 'misc-phy11-m2-02',
    items: [
      {
        content: 'Hai nguồn sóng kết hợp cùng pha. Điểm M có hiệu đường đi $|d_2-d_1|=2\\lambda$ là',
        options: ['cực đại', 'cực tiểu', 'không dao động do không có sóng', 'không xác định'],
        answer: 'A'
      },
      {
        content: 'Hai nguồn cùng pha. Điểm M có $|d_2-d_1|=1,5\\lambda$ là',
        options: ['cực đại', 'cực tiểu', 'nguồn sóng', 'nút cố định của dây'],
        answer: 'B'
      },
      {
        content: 'Điều kiện để hai nguồn tạo hệ giao thoa ổn định là',
        options: ['cùng tần số và độ lệch pha không đổi', 'chỉ cần cùng biên độ', 'chỉ cần đặt gần nhau', 'tần số thay đổi độc lập'],
        answer: 'A'
      },
      {
        content: 'Hai nguồn cùng pha có $\\lambda=2$ cm. Tại M, $d_2-d_1=5$ cm. M là',
        options: ['cực đại bậc 2', 'cực tiểu', 'cực đại bậc 5', 'không nhận được sóng'],
        answer: 'B'
      },
      {
        content: 'Trên đường trung trực của hai nguồn cùng pha, các điểm có hiệu đường đi bằng',
        options: ['$0$ nên là cực đại trung tâm', '$\\lambda/2$', '$\\lambda$ mọi lúc', 'không xác định'],
        answer: 'A'
      },
      {
        content: 'Hai nguồn có cùng tần số nhưng độ lệch pha thay đổi ngẫu nhiên. Kết luận đúng là',
        options: ['luôn có hệ vân ổn định', 'không bảo đảm hệ giao thoa ổn định', 'mọi điểm đều cực đại', 'mọi điểm đều cực tiểu'],
        answer: 'B'
      },
      {
        content: 'Trên đoạn nối hai nguồn cùng pha, khoảng cách giữa hai cực đại liên tiếp là $1,5$ cm. Bước sóng là',
        options: ['$0,75$ cm', '$1,5$ cm', '$3,0$ cm', '$6,0$ cm'],
        answer: 'C'
      },
      {
        content: 'Trên đoạn nối hai nguồn, bước sóng $4$ cm. Khoảng cách từ một cực đại đến cực tiểu gần nhất là',
        options: ['$0,5$ cm', '$1$ cm', '$2$ cm', '$4$ cm'],
        answer: 'B'
      },
      {
        content: 'Giữa hai cực đại liên tiếp trên đoạn nối nguồn có đúng một',
        options: ['cực tiểu', 'nguồn mới', 'đỉnh sóng cố định', 'vùng không có môi trường'],
        answer: 'A'
      },
      {
        content: 'Đo được 6 khoảng cực đại liên tiếp trên đoạn nối nguồn dài tổng cộng $9$ cm. Bước sóng bằng',
        options: ['$1,5$ cm', '$3$ cm', '$6$ cm', '$18$ cm'],
        answer: 'B'
      },
      {
        content: 'Khi tăng tần số nguồn gấp đôi trong cùng môi trường, khoảng cách giữa hai cực đại liên tiếp trên đoạn nối nguồn',
        options: ['tăng gấp đôi', 'giảm một nửa', 'không đổi', 'tăng bốn lần'],
        answer: 'B'
      },
      {
        content: 'Trong thí nghiệm giao thoa, đo nhiều khoảng vân rồi chia cho số khoảng giúp',
        options: ['giảm sai số tương đối khi đọc khoảng cách', 'làm thay đổi bước sóng', 'loại bỏ điều kiện kết hợp', 'tạo thêm nguồn'],
        answer: 'A'
      }
    ]
  },
  {
    start: 145,
    questionTypeId: 'phy11-qt13',
    lessonId: 'phy11-kntt-l13',
    outcomeId: 'out-phy11-m2-07',
    subTypeIds: ['phy11-qt13-st-fixed', 'phy11-qt13-st-mixed'],
    roles: ['guided', 'near_transfer', 'misconception_check'],
    representations: ['diagram', 'equation'],
    items: [
      {
        content: 'Dây dài $1,2$ m, hai đầu cố định, có 3 bó sóng. Bước sóng là',
        options: ['$0,4$ m', '$0,8$ m', '$1,2$ m', '$2,4$ m'],
        answer: 'B'
      },
      {
        content: 'Dây hai đầu cố định có chiều dài $L$. Điều kiện sóng dừng là',
        options: ['$L=n\\lambda/2$', '$L=(2n+1)\\lambda/4$ với mọi $n$', '$L=n\\lambda$', '$L=\\lambda/4$ duy nhất'],
        answer: 'A'
      },
      {
        content: 'Dây hai đầu cố định có 4 bó sóng. Số nút kể cả hai đầu là',
        options: ['$4$', '$5$', '$8$', '$9$'],
        answer: 'B'
      },
      {
        content: 'Khoảng cách giữa hai nút liên tiếp của sóng dừng là',
        options: ['$\\lambda/4$', '$\\lambda/2$', '$\\lambda$', '$2\\lambda$'],
        answer: 'B'
      },
      {
        content: 'Dây dài $0,75$ m, hai đầu cố định, tốc độ sóng $30$ m/s. Tần số cơ bản là',
        options: ['$10$ Hz', '$20$ Hz', '$30$ Hz', '$40$ Hz'],
        answer: 'B'
      },
      {
        content: 'Ở một bụng sóng dừng, biên độ dao động của phần tử',
        options: ['bằng không', 'cực đại', 'luôn bằng bước sóng', 'không đổi theo thời gian về li độ'],
        answer: 'B'
      },
      {
        content: 'Dây một đầu cố định, một đầu tự do dài $L$. Ở mode cơ bản',
        options: ['$L=\\lambda/4$', '$L=\\lambda/2$', '$L=\\lambda$', '$L=2\\lambda$'],
        answer: 'A'
      },
      {
        content: 'Ở đầu tự do lí tưởng của dây có sóng dừng thường là',
        options: ['nút', 'bụng', 'điểm không thuộc dây', 'nguồn kết hợp thứ hai bắt buộc'],
        answer: 'B'
      },
      {
        content: 'Dây dài $0,50$ m, một đầu cố định một đầu tự do, dao động cơ bản. Bước sóng là',
        options: ['$0,50$ m', '$1,0$ m', '$2,0$ m', '$4,0$ m'],
        answer: 'C'
      },
      {
        content: 'Điều kiện tổng quát cho dây một đầu cố định, một đầu tự do là',
        options: ['$L=n\\lambda/2$', '$L=(2n+1)\\lambda/4$', '$L=n\\lambda$', '$L=(2n+1)\\lambda/2$'],
        answer: 'B'
      },
      {
        content: 'Dây một đầu cố định, một đầu tự do có $L=0,75$ m và $v=60$ m/s. Tần số cơ bản là',
        options: ['$10$ Hz', '$20$ Hz', '$40$ Hz', '$80$ Hz'],
        answer: 'B'
      },
      {
        content: 'Sóng dừng hình thành do sự chồng chất của',
        options: ['hai sóng cùng tần số truyền ngược chiều thích hợp', 'hai vật chuyển động thẳng', 'một sóng duy nhất không phản xạ', 'hai sóng bất kì khác tần số'],
        answer: 'A'
      }
    ]
  },
  {
    start: 157,
    questionTypeId: 'phy11-qt14',
    lessonId: 'phy11-kntt-l15',
    outcomeId: 'out-phy11-m2-08',
    subTypeIds: ['phy11-qt14-st-resonance', 'phy11-qt14-st-time'],
    roles: ['guided', 'representation_switch', 'far_transfer'],
    representations: ['experiment', 'table'],
    competency: 'physical_inquiry',
    items: [
      {
        content: 'Trong ống cộng hưởng một đầu kín, hai vị trí cộng hưởng liên tiếp cách nhau',
        options: ['$\\lambda/4$', '$\\lambda/2$', '$\\lambda$', '$2\\lambda$'],
        answer: 'B'
      },
      {
        content: 'Hai chiều dài cộng hưởng liên tiếp là $18$ cm và $35$ cm. Bước sóng âm là',
        options: ['$17$ cm', '$34$ cm', '$53$ cm', '$70$ cm'],
        answer: 'B'
      },
      {
        content: 'Đo được $\\lambda=0,68$ m với âm có $f=500$ Hz. Tốc độ âm là',
        options: ['$170$ m/s', '$250$ m/s', '$340$ m/s', '$680$ m/s'],
        answer: 'C'
      },
      {
        content: 'Ưu điểm của việc dùng hiệu hai chiều dài cộng hưởng liên tiếp là',
        options: ['giảm ảnh hưởng của hiệu chỉnh đầu ống giống nhau', 'không cần biết tần số', 'làm âm truyền nhanh hơn', 'loại bỏ mọi sai số ngẫu nhiên'],
        answer: 'A'
      },
      {
        content: 'Ba hiệu chiều dài cộng hưởng liên tiếp đo được $16,8$ cm; $17,2$ cm; $17,0$ cm. Giá trị bước sóng ước lượng là',
        options: ['$17,0$ cm', '$34,0$ cm', '$51,0$ cm', '$68,0$ cm'],
        answer: 'B'
      },
      {
        content: 'Nguồn sai số đáng kể khi xác định vị trí cộng hưởng bằng tai là',
        options: ['khó xác định chính xác vị trí âm to nhất', 'tần số có đơn vị hertz', 'ống có chiều dài', 'không khí có khối lượng'],
        answer: 'A'
      },
      {
        content: 'Hai micro cách nhau $1,70$ m nhận cùng xung âm lệch thời gian $5,0$ ms. Tốc độ âm là',
        options: ['$85$ m/s', '$170$ m/s', '$340$ m/s', '$850$ m/s'],
        answer: 'C'
      },
      {
        content: 'Âm truyền quãng đường $3,4$ m trong $10$ ms. Tốc độ là',
        options: ['$34$ m/s', '$170$ m/s', '$340$ m/s', '$3400$ m/s'],
        answer: 'C'
      },
      {
        content: 'Để đo thời gian truyền âm nhỏ cỡ mili giây, dụng cụ phù hợp nhất là',
        options: ['hai micro và bộ ghi dữ liệu số', 'đồng hồ treo tường', 'nhiệt kế', 'cân lò xo'],
        answer: 'A'
      },
      {
        content: 'Các lần đo tốc độ cho $338;342;341;339$ m/s. Giá trị trung bình là',
        options: ['$339$ m/s', '$340$ m/s', '$341$ m/s', '$1360$ m/s'],
        answer: 'B'
      },
      {
        content: 'Khi khoảng cách hai micro tăng nhưng vẫn đủ tín hiệu, sai số tương đối do độ phân giải thời gian thường',
        options: ['giảm vì độ trễ lớn hơn', 'tăng vô hạn', 'không bao giờ thay đổi', 'bằng 100%'],
        answer: 'A'
      },
      {
        content: 'Kết quả đo tốc độ âm lệch nhiều so với giá trị tham khảo. Kiểm tra hợp lí đầu tiên là',
        options: ['đơn vị khoảng cách, độ trễ và điều kiện nhiệt độ', 'màu của micro', 'tên người đo', 'xóa toàn bộ dữ liệu ngay'],
        answer: 'A'
      }
    ]
  }
];

const pad = (value: number) => value.toString().padStart(3, '0');

export const g11PhysicsModule2Questions: CourseQuestion[] = groups.flatMap(group =>
  group.items.map((item, index) => {
    const isSecondSubType = index >= 6;
    const difficulty = index < 4 ? 'easy' : index < 9 ? 'medium' : 'hard';
    const practiceRole = group.roles[index % group.roles.length];
    return {
      id: `phy11-q${pad(group.start + index)}`,
      subjectId: 'physics',
      courseId: 'grade11:physics',
      moduleId: 'phy11-m2',
      lessonId: group.lessonId,
      topicId: 'phy11-t02',
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
