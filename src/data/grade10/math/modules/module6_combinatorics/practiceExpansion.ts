import type {
  PracticeRole,
  Question,
  QuestionPracticeMetadata,
  QuestionRepresentationType,
  Solution
} from '@/types';

interface Math10CombinatoricsExpansionSeed {
  id: string;
  subTypeId: string;
  content: string;
  difficulty: 'easy' | 'medium' | 'hard';
  correctAnswer: string;
  reasoning: [string, string];
  practiceRole: PracticeRole;
  representationType: QuestionRepresentationType;
  media?: Question['media'];
}

export const g10MathPracticeExpansionSeeds: Math10CombinatoricsExpansionSeed[] = [
  {
    id: 'math10-m6x-q001', subTypeId: 'math10-qt8-st3',
    content: 'Một khối có 40 học sinh thích Toán, 28 học sinh thích Vật lí và 15 học sinh thích cả hai môn. Có bao nhiêu học sinh thích ít nhất một trong hai môn?',
    difficulty: 'medium', correctAnswer: '53',
    reasoning: ['Dùng bao hàm–loại trừ vì nhóm thích cả hai bị đếm hai lần.', '$40+28-15=53$.'],
    practiceRole: 'near_transfer', representationType: 'text'
  },
  {
    id: 'math10-m6x-q002', subTypeId: 'math10-qt8-st3',
    content: 'Lớp có 45 học sinh; 30 bạn học câu lạc bộ tiếng Anh, 25 bạn học Tin học và 12 bạn học cả hai. Có bao nhiêu bạn không học câu lạc bộ nào trong hai câu lạc bộ?',
    difficulty: 'medium', correctAnswer: '2',
    reasoning: ['Số bạn học ít nhất một câu lạc bộ là $30+25-12=43$.', 'Số bạn không học câu lạc bộ nào là $45-43=2$.'],
    practiceRole: 'representation_switch', representationType: 'table'
  },
  {
    id: 'math10-m6x-q003', subTypeId: 'math10-qt8-st3',
    content: 'Trong các số nguyên từ 1 đến 100, có bao nhiêu số chia hết cho 4 hoặc chia hết cho 6?',
    difficulty: 'hard', correctAnswer: '33',
    reasoning: ['Có 25 bội của 4, 16 bội của 6 và 8 bội chung của 12.', 'Số cần tìm là $25+16-8=33$.'],
    practiceRole: 'far_transfer', representationType: 'equation'
  },
  {
    id: 'math10-m6x-q004', subTypeId: 'math10-qt8-st3',
    content: 'Có 35 học sinh tham gia đội A, 27 học sinh tham gia đội B và 10 học sinh tham gia cả hai. Có bao nhiêu học sinh tham gia đúng một đội?',
    difficulty: 'medium', correctAnswer: '42',
    reasoning: ['Số thuộc đúng A là $35-10$, đúng B là $27-10$.', 'Cộng hai nhóm rời nhau: $25+17=42$.'],
    practiceRole: 'retention', representationType: 'text'
  },
  {
    id: 'math10-m6x-q005', subTypeId: 'math10-qt8-st3',
    content: 'Trong các số từ 1 đến 60, có bao nhiêu số không chia hết cho 2 và cũng không chia hết cho 3?',
    difficulty: 'hard', correctAnswer: '20',
    reasoning: ['Số chia hết cho 2 hoặc 3 là $30+20-10=40$.', 'Lấy biến cố đối trong 60 số: $60-40=20$.'],
    practiceRole: 'mastery_holdout', representationType: 'equation'
  },
  {
    id: 'math10-m6x-q006', subTypeId: 'math10-qt8-st3',
    content: 'Có bao nhiêu mã gồm 4 chữ số từ 0 đến 9, cho phép lặp và chứa ít nhất một chữ số 0?',
    difficulty: 'easy', correctAnswer: '3439',
    reasoning: ['Có $10^4$ mã tất cả; mã không chứa 0 có $9^4$ cách.', 'Số mã chứa ít nhất một chữ số 0 là $10^4-9^4=3439$.'],
    practiceRole: 'misconception_check', representationType: 'equation'
  },

  {
    id: 'math10-m6x-q007', subTypeId: 'math10-qt9-st1',
    content: 'Xếp 7 quyển sách khác nhau lên một kệ, trong đó 3 quyển Toán phải đứng cạnh nhau. Có bao nhiêu cách xếp?',
    difficulty: 'medium', correctAnswer: '720',
    reasoning: ['Gộp 3 quyển Toán thành một khối, ta có 5 đơn vị để xếp: $5!$ cách.', 'Ba quyển trong khối đổi chỗ theo $3!$ cách, tổng $5!3!=720$.'],
    practiceRole: 'near_transfer', representationType: 'text'
  },
  {
    id: 'math10-m6x-q008', subTypeId: 'math10-qt9-st1',
    content: 'Xếp 8 học sinh khác nhau thành một hàng. Hai bạn An và Bình không được đứng cạnh nhau. Có bao nhiêu cách?',
    difficulty: 'medium', correctAnswer: '30240',
    reasoning: ['Có $8!$ cách xếp tất cả; trường hợp An, Bình cạnh nhau có $2\\cdot7!$ cách.', 'Lấy phần bù: $8!-2\\cdot7!=30240$.'],
    practiceRole: 'representation_switch', representationType: 'equation'
  },
  {
    id: 'math10-m6x-q009', subTypeId: 'math10-qt9-st1',
    content: 'Dùng các chữ số 0, 1, 2, 3, 4, mỗi chữ số đúng một lần, lập được bao nhiêu số tự nhiên có 5 chữ số?',
    difficulty: 'hard', correctAnswer: '96',
    reasoning: ['Chữ số đầu có 4 cách chọn vì không được bằng 0.', 'Bốn chữ số còn lại hoán vị theo $4!$ cách, được $4\\cdot4!=96$.'],
    practiceRole: 'far_transfer', representationType: 'equation'
  },
  {
    id: 'math10-m6x-q010', subTypeId: 'math10-qt9-st1',
    content: 'Có bao nhiêu cách sắp xếp 5 chữ cái của từ LEVEL?',
    difficulty: 'medium', correctAnswer: '30',
    reasoning: ['Có 5 vị trí, trong đó chữ L lặp 2 lần và chữ E lặp 2 lần.', 'Số hoán vị phân biệt là $5!/(2!2!)=30$.'],
    practiceRole: 'retention', representationType: 'text'
  },
  {
    id: 'math10-m6x-q011', subTypeId: 'math10-qt9-st1',
    content: 'Xếp 9 người thành một hàng, trong đó A, B, C phải đứng liên tiếp theo đúng thứ tự A–B–C. Có bao nhiêu cách?',
    difficulty: 'hard', correctAnswer: '5040',
    reasoning: ['Khối A–B–C có thứ tự cố định, cùng 6 người còn lại tạo 7 đơn vị.', 'Xếp 7 đơn vị theo $7!=5040$ cách.'],
    practiceRole: 'mastery_holdout', representationType: 'text'
  },
  {
    id: 'math10-m6x-q012', subTypeId: 'math10-qt9-st1',
    content: 'Xếp 4 học sinh nam và 3 học sinh nữ khác nhau thành một hàng sao cho nam và nữ xen kẽ. Có bao nhiêu cách?',
    difficulty: 'easy', correctAnswer: '144',
    reasoning: ['Vì có nhiều hơn một nam, mẫu vị trí bắt buộc là nam–nữ–nam–nữ–nam–nữ–nam.', 'Xếp nam và nữ độc lập: $4!3!=144$.'],
    practiceRole: 'misconception_check', representationType: 'diagram',
    media: [{
      id: 'math10-m6x-q012-media-lineup',
      type: 'diagram',
      src: '/assets/math/grade10/module6-alternating-lineup.svg',
      alt: 'Bảy vị trí thẳng hàng theo thứ tự nam, nữ, nam, nữ, nam, nữ, nam.',
      caption: 'Mẫu vị trí duy nhất để 4 nam và 3 nữ đứng xen kẽ',
      longDescription: 'Bốn vị trí dành cho nam và ba vị trí dành cho nữ xen kẽ nhau; sau đó hoán vị từng nhóm độc lập.',
      width: 760,
      height: 340
    }]
  },

  {
    id: 'math10-m6x-q013', subTypeId: 'math10-qt9-st2',
    content: 'Chọn chủ tịch, phó chủ tịch và thư kí từ 10 thành viên. Có bao nhiêu cách phân công?',
    difficulty: 'medium', correctAnswer: '720',
    reasoning: ['Ba chức vụ phân biệt nên thứ tự lựa chọn tạo phương án khác.', 'Dùng chỉnh hợp $A_{10}^3=10\\cdot9\\cdot8=720$.'],
    practiceRole: 'near_transfer', representationType: 'text'
  },
  {
    id: 'math10-m6x-q014', subTypeId: 'math10-qt9-st2',
    content: 'Trao ba huy chương vàng, bạc, đồng cho 3 trong 12 vận động viên, mỗi người nhiều nhất một huy chương. Có bao nhiêu kết quả?',
    difficulty: 'medium', correctAnswer: '1320',
    reasoning: ['Ba huy chương có vai trò khác nhau nên cần chọn có thứ tự.', '$A_{12}^3=12\\cdot11\\cdot10=1320$.'],
    practiceRole: 'representation_switch', representationType: 'table'
  },
  {
    id: 'math10-m6x-q015', subTypeId: 'math10-qt9-st2',
    content: 'Từ các chữ số 1 đến 9, lập mã gồm 4 chữ số khác nhau. Có bao nhiêu mã?',
    difficulty: 'hard', correctAnswer: '3024',
    reasoning: ['Bốn vị trí phân biệt và không lặp chữ số nên dùng chỉnh hợp.', '$A_9^4=9\\cdot8\\cdot7\\cdot6=3024$.'],
    practiceRole: 'far_transfer', representationType: 'equation'
  },
  {
    id: 'math10-m6x-q016', subTypeId: 'math10-qt9-st2',
    content: 'Từ 7 chữ cái khác nhau, trong đó có 3 nguyên âm, lập chuỗi 5 chữ cái khác nhau bắt đầu bằng một nguyên âm. Có bao nhiêu chuỗi?',
    difficulty: 'medium', correctAnswer: '1080',
    reasoning: ['Vị trí đầu có 3 cách chọn nguyên âm.', 'Bốn vị trí sau nhận 4 trong 6 chữ còn lại: $3A_6^4=1080$.'],
    practiceRole: 'retention', representationType: 'text'
  },
  {
    id: 'math10-m6x-q017', subTypeId: 'math10-qt9-st2',
    content: 'Phân 4 nhiệm vụ khác nhau cho 4 trong 9 người, mỗi người nhận nhiều nhất một nhiệm vụ. Có bao nhiêu cách?',
    difficulty: 'hard', correctAnswer: '3024',
    reasoning: ['Các nhiệm vụ là các vị trí phân biệt.', 'Chọn và phân 4 người vào 4 nhiệm vụ: $A_9^4=3024$.'],
    practiceRole: 'mastery_holdout', representationType: 'table'
  },
  {
    id: 'math10-m6x-q018', subTypeId: 'math10-qt9-st2',
    content: 'Chọn đội trưởng và đội phó từ 8 người, biết A và B không được đồng thời giữ hai chức vụ. Có bao nhiêu cách?',
    difficulty: 'easy', correctAnswer: '54',
    reasoning: ['Không có ràng buộc có $A_8^2=56$ cách.', 'Loại hai cách A–B và B–A, còn $56-2=54$.'],
    practiceRole: 'misconception_check', representationType: 'text'
  },

  {
    id: 'math10-m6x-q019', subTypeId: 'math10-qt9-st3',
    content: 'Chọn 4 học sinh từ 12 học sinh để lập một nhóm. Có bao nhiêu cách?',
    difficulty: 'medium', correctAnswer: '495',
    reasoning: ['Nhóm không phân chức vụ nên không xét thứ tự.', '$C_{12}^4=495$.'],
    practiceRole: 'near_transfer', representationType: 'equation'
  },
  {
    id: 'math10-m6x-q020', subTypeId: 'math10-qt9-st3',
    content: 'Từ 7 nữ và 5 nam, chọn đội 5 người có đúng 3 nữ. Có bao nhiêu cách?',
    difficulty: 'medium', correctAnswer: '350',
    reasoning: ['Chọn 3 trong 7 nữ và 2 trong 5 nam độc lập.', '$C_7^3C_5^2=35\\cdot10=350$.'],
    practiceRole: 'representation_switch', representationType: 'table'
  },
  {
    id: 'math10-m6x-q021', subTypeId: 'math10-qt9-st3',
    content: 'Chọn 6 người từ 10 người, biết A bắt buộc có mặt và B không được chọn. Có bao nhiêu cách?',
    difficulty: 'hard', correctAnswer: '56',
    reasoning: ['Cố định A, loại B, còn 8 người để chọn thêm 5 người.', '$C_8^5=56$.'],
    practiceRole: 'far_transfer', representationType: 'text'
  },
  {
    id: 'math10-m6x-q022', subTypeId: 'math10-qt9-st3',
    content: 'Từ 6 nữ và 5 nam, chọn đội 4 người có ít nhất 2 nữ. Có bao nhiêu cách?',
    difficulty: 'medium', correctAnswer: '265',
    reasoning: ['Tách theo số nữ là 2, 3 hoặc 4.', '$C_6^2C_5^2+C_6^3C_5^1+C_6^4=150+100+15=265$.'],
    practiceRole: 'retention', representationType: 'equation'
  },
  {
    id: 'math10-m6x-q023', subTypeId: 'math10-qt9-st3',
    content: 'Chọn 3 vị trí trong 8 vị trí thẳng hàng sao cho không có hai vị trí nào kề nhau. Có bao nhiêu cách?',
    difficulty: 'hard', correctAnswer: '20',
    reasoning: ['Bài chọn không kề nhau dùng phép dịch vị trí hoặc công thức $C_{n-k+1}^k$.', '$C_{8-3+1}^3=C_6^3=20$.'],
    practiceRole: 'mastery_holdout', representationType: 'diagram'
  },
  {
    id: 'math10-m6x-q024', subTypeId: 'math10-qt9-st3',
    content: 'Từ 9 học sinh, chọn đội 5 người rồi chọn một đội trưởng trong đội. Có bao nhiêu cách?',
    difficulty: 'easy', correctAnswer: '630',
    reasoning: ['Chọn đội theo $C_9^5$ cách; mỗi đội có 5 cách chọn đội trưởng.', '$C_9^5\\cdot5=126\\cdot5=630$.'],
    practiceRole: 'misconception_check', representationType: 'text'
  },

  {
    id: 'math10-m6x-q025', subTypeId: 'math10-qt10-st1',
    content: 'Tổng các hệ số của khai triển $(2x-1)^6$ bằng bao nhiêu?',
    difficulty: 'medium', correctAnswer: '1',
    reasoning: ['Tổng hệ số của đa thức bằng giá trị của đa thức tại $x=1$.', 'Thay $x=1$: $(2-1)^6=1$.'],
    practiceRole: 'near_transfer', representationType: 'equation'
  },
  {
    id: 'math10-m6x-q026', subTypeId: 'math10-qt10-st1',
    content: 'Khai triển $(x+2)^8$ có bao nhiêu số hạng với các bậc khác nhau?',
    difficulty: 'medium', correctAnswer: '9',
    reasoning: ['Chỉ số k chạy từ 0 đến 8 và mỗi k cho một bậc x khác nhau.', 'Do đó khai triển có $8+1=9$ số hạng.'],
    practiceRole: 'representation_switch', representationType: 'table'
  },
  {
    id: 'math10-m6x-q027', subTypeId: 'math10-qt10-st1',
    content: 'Tổng các hệ số của các lũy thừa chẵn trong khai triển $(1+x)^{10}$ bằng bao nhiêu?',
    difficulty: 'hard', correctAnswer: '512',
    reasoning: ['Gọi E, O là tổng hệ số bậc chẵn, lẻ: $E+O=2^{10}$ và $E-O=(1-1)^{10}=0$.', 'Suy ra $E=2^9=512$.'],
    practiceRole: 'far_transfer', representationType: 'equation'
  },
  {
    id: 'math10-m6x-q028', subTypeId: 'math10-qt10-st1',
    content: 'Tổng các hệ số của khai triển $(3-2x)^5$ bằng bao nhiêu?',
    difficulty: 'medium', correctAnswer: '1',
    reasoning: ['Tổng hệ số được tính bằng cách cho $x=1$.', 'Ta được $(3-2)^5=1$.'],
    practiceRole: 'retention', representationType: 'equation'
  },
  {
    id: 'math10-m6x-q029', subTypeId: 'math10-qt10-st1',
    content: 'Tổng các hệ số khác hệ số tự do trong khai triển $(1+2x)^7$ bằng bao nhiêu?',
    difficulty: 'hard', correctAnswer: '2186',
    reasoning: ['Tổng mọi hệ số là $(1+2)^7=2187$.', 'Hệ số tự do bằng 1, nên tổng cần tìm là $2187-1=2186$.'],
    practiceRole: 'mastery_holdout', representationType: 'equation'
  },
  {
    id: 'math10-m6x-q030', subTypeId: 'math10-qt10-st1',
    content: 'Giá trị tại $x=1$ của đa thức nhận được khi khai triển $(x^2+x)^6$ bằng bao nhiêu?',
    difficulty: 'easy', correctAnswer: '64',
    reasoning: ['Không cần khai triển đầy đủ; thay trực tiếp $x=1$.', '$(1^2+1)^6=2^6=64$.'],
    practiceRole: 'misconception_check', representationType: 'text'
  },

  {
    id: 'math10-m6x-q031', subTypeId: 'math10-qt10-st2',
    content: 'Hệ số của $x^3$ trong khai triển $(2x-1)^5$ bằng bao nhiêu?',
    difficulty: 'medium', correctAnswer: '80',
    reasoning: ['Chọn ba thừa số $2x$ và hai thừa số $-1$.', 'Hệ số là $C_5^3\\cdot2^3\\cdot(-1)^2=80$.'],
    practiceRole: 'near_transfer', representationType: 'equation'
  },
  {
    id: 'math10-m6x-q032', subTypeId: 'math10-qt10-st2',
    content: 'Hệ số của $x^4$ trong khai triển $(1-3x)^6$ bằng bao nhiêu?',
    difficulty: 'medium', correctAnswer: '1215',
    reasoning: ['Số hạng chứa $x^4$ ứng với k=4.', 'Hệ số là $C_6^4(-3)^4=15\\cdot81=1215$.'],
    practiceRole: 'representation_switch', representationType: 'table'
  },
  {
    id: 'math10-m6x-q033', subTypeId: 'math10-qt10-st2',
    content: 'Hệ số của $x^5$ trong khai triển $(x^2+2x)^5$ bằng bao nhiêu?',
    difficulty: 'hard', correctAnswer: '32',
    reasoning: ['Số hạng tổng quát có số mũ $x^{2(5-k)+k}=x^{10-k}$; cần $10-k=5$ nên k=5.', 'Hệ số là $C_5^5 2^5=32$.'],
    practiceRole: 'far_transfer', representationType: 'equation'
  },
  {
    id: 'math10-m6x-q034', subTypeId: 'math10-qt10-st2',
    content: 'Hệ số của $x^6$ trong khai triển $(x^2+1)^5$ bằng bao nhiêu?',
    difficulty: 'medium', correctAnswer: '10',
    reasoning: ['Cần chọn ba thừa số $x^2$ để tạo $x^6$.', 'Hệ số là $C_5^3=10$.'],
    practiceRole: 'retention', representationType: 'equation'
  },
  {
    id: 'math10-m6x-q035', subTypeId: 'math10-qt10-st2',
    content: 'Hệ số của $x^7$ trong khai triển $(x^3-x)^4$ bằng bao nhiêu?',
    difficulty: 'hard', correctAnswer: '0',
    reasoning: ['Số mũ tổng quát là $3(4-k)+k=12-2k$.', 'Phương trình $12-2k=7$ không có k nguyên, nên hệ số bằng 0.'],
    practiceRole: 'mastery_holdout', representationType: 'equation'
  },
  {
    id: 'math10-m6x-q036', subTypeId: 'math10-qt10-st2',
    content: 'Hệ số của $x^4$ trong khai triển $\\left(2x+\\dfrac1x\\right)^6$ bằng bao nhiêu?',
    difficulty: 'easy', correctAnswer: '192',
    reasoning: ['Số mũ x là $6-2k$; cần $6-2k=4$ nên k=1.', 'Hệ số là $C_6^1 2^5=192$.'],
    practiceRole: 'misconception_check', representationType: 'equation'
  },

  {
    id: 'math10-m6x-q037', subTypeId: 'math10-qt10-st3',
    content: 'Số hạng không chứa x trong khai triển $\\left(x+\\dfrac1x\\right)^8$ bằng bao nhiêu?',
    difficulty: 'medium', correctAnswer: '70',
    reasoning: ['Số mũ x là $8-2k$; đặt bằng 0 được k=4.', 'Số hạng độc lập là $C_8^4=70$.'],
    practiceRole: 'near_transfer', representationType: 'equation'
  },
  {
    id: 'math10-m6x-q038', subTypeId: 'math10-qt10-st3',
    content: 'Số hạng không chứa x trong khai triển $\\left(2x^2-\\dfrac1x\\right)^6$ bằng bao nhiêu?',
    difficulty: 'medium', correctAnswer: '60',
    reasoning: ['Số mũ x là $2(6-k)-k=12-3k$; đặt bằng 0 được k=4.', 'Giá trị là $C_6^4 2^2(-1)^4=60$.'],
    practiceRole: 'representation_switch', representationType: 'table'
  },
  {
    id: 'math10-m6x-q039', subTypeId: 'math10-qt10-st3',
    content: 'Số hạng không chứa x trong khai triển $\\left(x^3+\\dfrac2x\\right)^8$ bằng bao nhiêu?',
    difficulty: 'hard', correctAnswer: '1792',
    reasoning: ['Số mũ x là $3(8-k)-k=24-4k$; đặt bằng 0 được k=6.', 'Giá trị là $C_8^6 2^6=28\\cdot64=1792$.'],
    practiceRole: 'far_transfer', representationType: 'equation'
  },
  {
    id: 'math10-m6x-q040', subTypeId: 'math10-qt10-st3',
    content: 'Số hạng không chứa x trong khai triển $\\left(x^2-\\dfrac3{x^2}\\right)^6$ bằng bao nhiêu?',
    difficulty: 'medium', correctAnswer: '-540',
    reasoning: ['Số mũ x là $2(6-k)-2k=12-4k$; đặt bằng 0 được k=3.', 'Giá trị là $C_6^3(-3)^3=20\\cdot(-27)=-540$.'],
    practiceRole: 'retention', representationType: 'equation'
  },
  {
    id: 'math10-m6x-q041', subTypeId: 'math10-qt10-st3',
    content: 'Số hạng không chứa x trong khai triển $\\left(2x-\\dfrac1{x^2}\\right)^9$ bằng bao nhiêu?',
    difficulty: 'hard', correctAnswer: '-5376',
    reasoning: ['Số mũ x là $(9-k)-2k=9-3k$; đặt bằng 0 được k=3.', 'Giá trị là $C_9^3 2^6(-1)^3=-5376$.'],
    practiceRole: 'mastery_holdout', representationType: 'equation'
  },
  {
    id: 'math10-m6x-q042', subTypeId: 'math10-qt10-st3',
    content: 'Hệ số của số hạng không chứa x trong khai triển $\\left(x^2+\\dfrac1x\\right)^5$ bằng bao nhiêu?',
    difficulty: 'easy', correctAnswer: '0',
    reasoning: ['Số mũ x là $2(5-k)-k=10-3k$.', 'Phương trình $10-3k=0$ không có k nguyên, nên không có số hạng độc lập và hệ số quy ước bằng 0.'],
    practiceRole: 'misconception_check', representationType: 'equation'
  }
];

const questionTypeIdFrom = (subTypeId: string) => subTypeId.replace(/-st\d+$/, '');

export const g10MathModule6QuestionExpansion: Question[] =
  g10MathPracticeExpansionSeeds.map(seed => ({
    id: seed.id,
    subjectId: 'math',
    topicId: 'math10-t6',
    questionTypeId: questionTypeIdFrom(seed.subTypeId),
    content: seed.content,
    responseType: 'short_answer',
    difficulty: seed.difficulty,
    sourceType: 'manual',
    correctAnswer: seed.correctAnswer,
    acceptedAnswers: [seed.correctAnswer],
    validatorType: 'number',
    media: seed.media
  }));

export const g10MathModule6SolutionExpansion: Solution[] =
  g10MathPracticeExpansionSeeds.map(seed => ({
    id: seed.id.replace('-q', '-s'),
    questionId: seed.id,
    recognition: `Dạng mở rộng ${seed.subTypeId}: cần nhận diện cấu trúc trước khi chọn công thức đếm.`,
    detailedSteps: seed.reasoning.map((explanation, index) => ({
      order: index + 1,
      title: index === 0 ? 'Thiết lập mô hình đếm' : 'Tính toán và kết luận',
      explanation,
      ...(index === seed.reasoning.length - 1 ? { result: seed.correctAnswer } : {})
    })),
    finalAnswer: seed.correctAnswer,
    commonMistakes: ['Áp dụng công thức theo từ khóa mà không kiểm tra thứ tự, khả năng lặp, phần giao hoặc miền của chỉ số k.'],
    reviewSuggestions: ['Viết rõ một kết quả được tạo như thế nào, sau đó mới chọn quy tắc đếm hoặc số hạng tổng quát.']
  }));

export const g10MathModule6PracticeMetadataExpansion: QuestionPracticeMetadata[] =
  g10MathPracticeExpansionSeeds.map(seed => ({
    questionId: seed.id,
    subTypeId: seed.subTypeId,
    practiceRole: seed.practiceRole,
    representationType: seed.representationType,
    ...(seed.practiceRole === 'mastery_holdout' ? { isMasteryHoldout: true } : {})
  }));
