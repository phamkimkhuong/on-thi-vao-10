import type { Solution } from '@/types';

export const m1ExpansionSolutions: Solution[] = [
  {
    id: 'chem10-m1-qt1-es1', questionId: 'chem10-m1-qt1-e1', recognition: 'Tính số hạt của ion từ điện tích và số hạt trong hạt nhân.',
    detailedSteps: [{ order: 1, title: 'Thiết lập quan hệ', explanation: '$X^{2-}$ đã nhận 2 electron nên $e=p+2=18$; số khối $A=p+n=16+18=34$.' }],
    finalAnswer: 'C', commonMistakes: ['Lấy e = p - 2 cho ion âm.', 'Nhầm số khối với số neutron.'], reviewSuggestions: ['Ôn quan hệ giữa điện tích ion với số proton và electron.']
  },
  {
    id: 'chem10-m1-qt1-es2', questionId: 'chem10-m1-qt1-e2', recognition: 'Lập hệ phương trình từ tổng số hạt và độ chênh giữa hạt mang điện với hạt không mang điện.',
    detailedSteps: [{ order: 1, title: 'Lập và giải hệ', explanation: 'Nguyên tử trung hòa nên $e=p$. Ta có $2p+n=46$ và $2p-n=14$. Cộng hai phương trình: $4p=60$, suy ra $p=15$.' }],
    finalAnswer: 'B', commonMistakes: ['Chỉ tính proton là hạt mang điện mà bỏ electron.'], reviewSuggestions: ['Ôn cách chuyển dữ kiện bằng lời thành hệ phương trình số hạt.']
  },
  {
    id: 'chem10-m1-qt1-es3', questionId: 'chem10-m1-qt1-e3', recognition: 'Suy ra số proton từ số electron và điện tích ion.',
    detailedSteps: [{ order: 1, title: 'Tính Z từng ion', explanation: '$X^{2+}$ có $p=e+2=20$; $Y^-$ có $p=e-1=17$. Hạt nhân X đúng là nhiều hơn Y 3 proton.' }],
    finalAnswer: 'B', commonMistakes: ['Đảo dấu khi chuyển từ số electron sang số proton.'], reviewSuggestions: ['Lập bảng p–e–điện tích cho ion dương và ion âm.']
  },
  {
    id: 'chem10-m1-qt2-es1', questionId: 'chem10-m1-qt2-e1', recognition: 'Viết kí hiệu ion từ p, n, e.',
    detailedSteps: [{ order: 1, title: 'Xác định ba chỉ số', explanation: '$Z=p=16$, $A=p+n=34$ và $e-p=2$ nên ion mang điện tích $2-$. Kí hiệu là $^{34}_{16}S^{2-}$.' }],
    finalAnswer: 'A', commonMistakes: ['Đưa số electron vào vị trí số hiệu nguyên tử.'], reviewSuggestions: ['Ôn cấu trúc $^{A}_{Z}X^{q}$.']
  },
  {
    id: 'chem10-m1-qt2-es2', questionId: 'chem10-m1-qt2-e2', recognition: 'So sánh hai tiểu phân qua kí hiệu nguyên tử/ion.',
    detailedSteps: [{ order: 1, title: 'Đối chiếu số hạt', explanation: '$Na^+$ có 10e và 12n; Ne có 10e và 10n. Chúng đẳng electron nhưng không phải đồng vị vì khác Z.' }],
    finalAnswer: 'C', commonMistakes: ['Coi hai tiểu phân cùng số electron là đồng vị.'], reviewSuggestions: ['Phân biệt đồng vị và các tiểu phân đẳng electron.']
  },
  {
    id: 'chem10-m1-qt2-es3', questionId: 'chem10-m1-qt2-e3', recognition: 'Tìm A, Z của ion từ tổng số hạt.',
    detailedSteps: [{ order: 1, title: 'Lập phương trình', explanation: '$p=n=Z$, còn $e=Z-3$. Do đó $Z+Z+(Z-3)=27$, suy ra $Z=10$ và $A=p+n=20$.' }],
    finalAnswer: 'A', commonMistakes: ['Dùng e = Z + 3 cho ion 3+.'], reviewSuggestions: ['Kiểm tra lại tổng số hạt sau khi tìm được Z.']
  },
  {
    id: 'chem10-m1-qt3-es1', questionId: 'chem10-m1-qt3-e1', recognition: 'Tính trung bình có trọng số từ tỉ lệ đồng vị.',
    detailedSteps: [{ order: 1, title: 'Đổi tỉ lệ thành trọng số', explanation: '$\\overline A=(24\\times3+26\\times1)/(3+1)=24,5$.' }],
    finalAnswer: 'B', commonMistakes: ['Lấy trung bình cộng 24 và 26 mà không xét tỉ lệ.'], reviewSuggestions: ['Ôn trung bình có trọng số.']
  },
  {
    id: 'chem10-m1-qt3-es2', questionId: 'chem10-m1-qt3-e2', recognition: 'Bài toán ngược tìm phần trăm đồng vị.',
    detailedSteps: [{ order: 1, title: 'Đặt ẩn tỉ lệ', explanation: 'Gọi phần số của $^{37}Cl$ là x: $35(1-x)+37x=35,50$, suy ra $2x=0,50$, $x=0,25=25\%$.' }],
    finalAnswer: 'B', commonMistakes: ['Đặt hai phần trăm độc lập mà không dùng tổng bằng 100%.'], reviewSuggestions: ['Luyện bài toán ngược hai đồng vị.']
  },
  {
    id: 'chem10-m1-qt3-es3', questionId: 'chem10-m1-qt3-e3', recognition: 'Đọc phổ ba đồng vị và tính nguyên tử khối trung bình.',
    detailedSteps: [{ order: 1, title: 'Tính theo cường độ tương đối', explanation: '$\\overline A=(24\\times79+25\\times10+26\\times11)/100=24,32$.' }],
    finalAnswer: 'B', commonMistakes: ['Coi cường độ đỉnh là số khối.', 'Bỏ qua đồng vị có đỉnh thấp.'], reviewSuggestions: ['Ôn ý nghĩa hai trục của phổ khối lượng.']
  },
  {
    id: 'chem10-m1-qt4-es1', questionId: 'chem10-m1-qt4-e1', recognition: 'Diễn giải biểu diễn mật độ xác suất electron.',
    detailedSteps: [{ order: 1, title: 'Đọc mô hình', explanation: 'Mật độ chấm là quy ước biểu diễn mật độ xác suất. Vùng dày hơn tương ứng khả năng tìm thấy electron lớn hơn.' }],
    finalAnswer: 'B', commonMistakes: ['Hiểu đám mây electron là vật chất thực hoặc ảnh chụp.'], reviewSuggestions: ['Ôn ý nghĩa xác suất của orbital.']
  },
  {
    id: 'chem10-m1-qt4-es2', questionId: 'chem10-m1-qt4-e2', recognition: 'Đánh giá giá trị và giới hạn của mô hình khoa học.',
    detailedSteps: [{ order: 1, title: 'So sánh mô hình', explanation: 'Bohr hữu ích khi biểu diễn lớp và mức năng lượng, nhưng quan niệm electron chạy trên quỹ đạo xác định không còn phù hợp với mô hình lượng tử.' }],
    finalAnswer: 'C', commonMistakes: ['Cho rằng mô hình cũ hoàn toàn vô dụng hoặc hoàn toàn chính xác.'], reviewSuggestions: ['Phân biệt công dụng sư phạm và giới hạn khoa học của mô hình.']
  },
  {
    id: 'chem10-m1-qt4-es3', questionId: 'chem10-m1-qt4-e3', recognition: 'Phản biện ngộ nhận orbital là vật chứa có ranh giới cứng.',
    detailedSteps: [{ order: 1, title: 'Sửa mô hình tinh thần', explanation: 'Orbital mô tả phân bố xác suất. Bề mặt orbital trong hình chỉ là mặt bao xác suất theo quy ước, không phải bức tường vật lí.' }],
    finalAnswer: 'B', commonMistakes: ['Đồng nhất hình vẽ mô hình với cấu trúc vật lí thật.'], reviewSuggestions: ['Luôn hỏi mỗi chi tiết trên mô hình đang đại diện cho đại lượng nào.']
  },
  {
    id: 'chem10-m1-qt5-es1', questionId: 'chem10-m1-qt5-e1', recognition: 'Tính số orbital từ loại phân lớp.',
    detailedSteps: [{ order: 1, title: 'Cộng số AO', explanation: 'Phân lớp s, p, d lần lượt có 1, 3, 5 AO; tổng là $1+3+5=9$ AO.' }],
    finalAnswer: 'C', commonMistakes: ['Nhầm số AO với số electron tối đa.'], reviewSuggestions: ['Ghi nhớ bảng s–p–d–f: 1–3–5–7 AO.']
  },
  {
    id: 'chem10-m1-qt5-es2', questionId: 'chem10-m1-qt5-e2', recognition: 'Phân bố electron vào các AO p theo quy tắc Hund.',
    detailedSteps: [{ order: 1, title: 'Điền electron', explanation: 'Ba electron đầu chiếm riêng ba AO; electron thứ tư ghép đôi vào một AO. Vì vậy còn 2 electron độc thân.' }],
    finalAnswer: 'C', commonMistakes: ['Ghép đôi electron trước khi mỗi AO p có một electron.'], reviewSuggestions: ['Vẽ ba ô orbital khi xử lí cấu hình p.']
  },
  {
    id: 'chem10-m1-qt5-es3', questionId: 'chem10-m1-qt5-e3', recognition: 'Đếm AO có electron và electron độc thân từ cấu hình.',
    detailedSteps: [{ order: 1, title: 'Đếm theo phân lớp', explanation: 'Số AO có electron: $1+1+3+1+3=9$. Với $3p^4$, quy tắc Hund cho 2 electron độc thân.' }],
    finalAnswer: 'B', commonMistakes: ['Chỉ đếm AO đầy electron hoặc coi số mũ là số AO.'], reviewSuggestions: ['Tách hai yêu cầu: AO đang được chiếm và electron độc thân.']
  },
  {
    id: 'chem10-m1-qt6-es1', questionId: 'chem10-m1-qt6-e1', recognition: 'Viết cấu hình electron của ion từ nguyên tử trung hòa.',
    detailedSteps: [{ order: 1, title: 'Điều chỉnh số electron', explanation: 'Na có 11e; $Na^+$ mất 1e nên còn 10e: $1s^22s^22p^6$.' }],
    finalAnswer: 'A', commonMistakes: ['Viết cấu hình của nguyên tử Na thay vì ion Na+.'], reviewSuggestions: ['Tính số electron của ion trước khi viết cấu hình.']
  },
  {
    id: 'chem10-m1-qt6-es2', questionId: 'chem10-m1-qt6-e2', recognition: 'Xác định electron độc thân từ cấu hình nguyên tử.',
    detailedSteps: [{ order: 1, title: 'Viết và biểu diễn cấu hình', explanation: 'P: $1s^22s^22p^63s^23p^3$. Ba electron 3p phân bố riêng vào ba AO nên có 3 electron độc thân.' }],
    finalAnswer: 'C', commonMistakes: ['Ghép đôi electron trong 3p trước khi phân bố đơn.'], reviewSuggestions: ['Ôn quy tắc Hund.']
  },
  {
    id: 'chem10-m1-qt6-es3', questionId: 'chem10-m1-qt6-e3', recognition: 'Suy ngược cấu hình nguyên tử từ cấu hình ion âm.',
    detailedSteps: [{ order: 1, title: 'Khôi phục số electron nguyên tử', explanation: '$X^{2-}$ có 10e nên nguyên tử X có $10-2=8e$. Cấu hình là $1s^22s^22p^4$.' }],
    finalAnswer: 'A', commonMistakes: ['Cộng thêm 2e khi đi từ ion âm về nguyên tử.'], reviewSuggestions: ['Kiểm tra bằng chiều thuận: nguyên tử nhận 2e tạo ion.']
  },
  {
    id: 'chem10-m1-qt7-es1', questionId: 'chem10-m1-qt7-e1', recognition: 'Dự đoán tính chất từ số electron lớp ngoài cùng.',
    detailedSteps: [{ order: 1, title: 'Xét electron hóa trị', explanation: '$3s^23p^1$ có 3 electron lớp ngoài cùng; nguyên tố thường có tính kim loại và xu hướng nhường 3e.' }],
    finalAnswer: 'B', commonMistakes: ['Chỉ nhìn số electron ở phân lớp p.'], reviewSuggestions: ['Cộng electron của mọi phân lớp thuộc lớp ngoài cùng.']
  },
  {
    id: 'chem10-m1-qt7-es2', questionId: 'chem10-m1-qt7-e2', recognition: 'So sánh xu hướng tạo ion từ cấu hình electron.',
    detailedSteps: [{ order: 1, title: 'Xét cấu hình bền gần nhất', explanation: 'Na có 1e, Mg có 2e và Cl có 7e lớp ngoài cùng; tương ứng thường nhường 1e, nhường 2e và nhận 1e.' }],
    finalAnswer: 'C', commonMistakes: ['Cho rằng mọi nguyên tử đều có xu hướng nhận electron.'], reviewSuggestions: ['Liên hệ số electron hóa trị với cấu hình khí hiếm gần nhất.']
  },
  {
    id: 'chem10-m1-qt7-es3', questionId: 'chem10-m1-qt7-e3', recognition: 'Chuỗi suy luận tích hợp từ số electron đến cấu hình và tính chất.',
    detailedSteps: [{ order: 1, title: 'Hoàn thành chuỗi', explanation: '16e cho cấu hình $1s^22s^22p^63s^23p^4$; lớp ngoài cùng có 6e, nên X là phi kim và thường nhận 2e để đạt octet.' }],
    finalAnswer: 'A', commonMistakes: ['Đếm riêng 3p4 và kết luận chỉ có 4 electron lớp ngoài cùng.'], reviewSuggestions: ['Luyện chuỗi Z → cấu hình → electron hóa trị → xu hướng hóa học.']
  }
];
