import type { Solution } from '@/types';

export const g11ChemistryOrganicBasicsSolutions: Solution[] = [
  {
    id: 'chem11-org-s001', questionId: 'chem11-org-q001',
    recognition: 'Dạng định nghĩa: cần nêu hợp chất carbon và chừa nhóm ngoại lệ vô cơ.',
    detailedSteps: [
      { order: 1, title: 'Xác định lõi', explanation: 'Hợp chất hữu cơ thuộc nhóm hợp chất của carbon.' },
      { order: 2, title: 'Thêm ngoại lệ', explanation: 'Một số hợp chất carbon được xếp vào vô cơ, nên A đầy đủ.' }
    ],
    finalAnswer: 'A', commonMistakes: ['Định nghĩa theo nguồn gốc sinh vật.'], reviewSuggestions: ['Học định nghĩa kèm danh sách ngoại lệ.']
  },
  {
    id: 'chem11-org-s002', questionId: 'chem11-org-q002',
    recognition: 'Dạng ngoại lệ carbon: oxide của carbon thuộc vô cơ.',
    detailedSteps: [
      { order: 1, title: 'Kiểm tra từng chất', explanation: 'CH₄, ethanol và CH₃Cl là hữu cơ.' },
      { order: 2, title: 'Chọn ngoại lệ', explanation: 'CO₂ là oxide vô cơ của carbon; B đúng.' }
    ],
    finalAnswer: 'B', commonMistakes: ['Thấy carbon là gọi hữu cơ.'], reviewSuggestions: ['Nhớ CO và CO₂ là ngoại lệ.']
  },
  {
    id: 'chem11-org-s003', questionId: 'chem11-org-q003',
    recognition: 'Dạng phản biện mệnh đề tuyệt đối “mọi hợp chất carbon”.',
    detailedSteps: [
      { order: 1, title: 'Tìm phản ví dụ', explanation: 'CO, CO₂ và carbonate đều chứa carbon.' },
      { order: 2, title: 'Đối chiếu phân loại', explanation: 'Chúng thuộc phạm vi vô cơ, nên C bác bỏ mệnh đề.' }
    ],
    finalAnswer: 'C', commonMistakes: ['Không chú ý từ “mọi”.'], reviewSuggestions: ['Dùng một phản ví dụ đúng để bác mệnh đề tuyệt đối.']
  },
  {
    id: 'chem11-org-s004', questionId: 'chem11-org-q004',
    recognition: 'Dạng bảng phân loại: loại CO₂ và carbonate trước.',
    detailedSteps: [
      { order: 1, title: 'Loại vô cơ', explanation: 'CO₂ và Na₂CO₃ là hợp chất carbon vô cơ.' },
      { order: 2, title: 'Giữ hữu cơ', explanation: 'CH₄, CH₃Cl và C₂H₅OH đều hữu cơ; D đúng.' }
    ],
    finalAnswer: 'D', commonMistakes: ['Xếp Na₂CO₃ vào hữu cơ.'], reviewSuggestions: ['Thực hiện bước loại ngoại lệ trước.']
  },
  {
    id: 'chem11-org-s005', questionId: 'chem11-org-q005',
    recognition: 'Dạng đặc điểm liên kết chung của hợp chất hữu cơ phân tử.',
    detailedSteps: [
      { order: 1, title: 'Xét nguyên tố phi kim', explanation: 'C, H, O, N và halogen thường liên kết bằng dùng chung electron.' },
      { order: 2, title: 'Kết luận', explanation: 'Liên kết cộng hóa trị chiếm ưu thế; A đúng.' }
    ],
    finalAnswer: 'A', commonMistakes: ['Cho liên kết ion chiếm ưu thế.'], reviewSuggestions: ['Liên hệ cấu tạo phân tử với liên kết cộng hóa trị.']
  },
  {
    id: 'chem11-org-s006', questionId: 'chem11-org-q006',
    recognition: 'Dạng thành phần nguyên tố: C là lõi nhưng heteroatom rất đa dạng.',
    detailedSteps: [
      { order: 1, title: 'Nhớ hydrocarbon', explanation: 'Hydrocarbon mới chỉ gồm C và H.' },
      { order: 2, title: 'Mở rộng dẫn xuất', explanation: 'Hợp chất hữu cơ có thể chứa O, N, halogen, S, P; B đúng.' }
    ],
    finalAnswer: 'B', commonMistakes: ['Đồng nhất hợp chất hữu cơ với hydrocarbon.'], reviewSuggestions: ['Tách khái niệm hydrocarbon và dẫn xuất.']
  },
  {
    id: 'chem11-org-s007', questionId: 'chem11-org-q007',
    recognition: 'Dạng xu hướng độ tan: tránh từ “mọi” và xét nhóm phân cực.',
    detailedSteps: [
      { order: 1, title: 'Nêu xu hướng', explanation: 'Nhiều chất hữu cơ ít tan trong nước.' },
      { order: 2, title: 'Nêu ngoại lệ có nguyên nhân', explanation: 'Phân tử nhỏ, phân cực có thể tan tốt; C đúng.' }
    ],
    finalAnswer: 'C', commonMistakes: ['Biến xu hướng thành quy tắc tuyệt đối.'], reviewSuggestions: ['Xét kích thước và nhóm phân cực.']
  },
  {
    id: 'chem11-org-s008', questionId: 'chem11-org-q008',
    recognition: 'Dạng đọc dữ liệu phản ví dụ cho quy tắc tuyệt đối.',
    detailedSteps: [
      { order: 1, title: 'So sánh độ tan', explanation: 'Hexane và ethanol có hành vi khác nhau do cấu trúc và độ phân cực.' },
      { order: 2, title: 'So sánh nhiệt độ sôi', explanation: 'Kích thước và lực tương tác cũng làm thay đổi nhiệt độ sôi; D đúng.' }
    ],
    finalAnswer: 'D', commonMistakes: ['Khái quát từ một chất đại diện.'], reviewSuggestions: ['Dùng dữ liệu cụ thể để kiểm tra xu hướng.']
  },
  {
    id: 'chem11-org-s009', questionId: 'chem11-org-q009',
    recognition: 'Dạng phạm vi ngành học: không giới hạn theo nguồn tự nhiên.',
    detailedSteps: [
      { order: 1, title: 'Xác định đối tượng', explanation: 'Đối tượng là hợp chất hữu cơ.' },
      { order: 2, title: 'Xác định hoạt động nghiên cứu', explanation: 'Bao gồm cấu trúc, tính chất, phản ứng, điều chế và ứng dụng; A đúng.' }
    ],
    finalAnswer: 'A', commonMistakes: ['Giới hạn hóa học hữu cơ vào cây cối.'], reviewSuggestions: ['Học phạm vi theo vòng đời chất.']
  },
  {
    id: 'chem11-org-s010', questionId: 'chem11-org-q010',
    recognition: 'Dạng đặc điểm phản ứng hữu cơ: chọn ngôn ngữ “có thể/thường”.',
    detailedSteps: [
      { order: 1, title: 'Xét tốc độ và điều kiện', explanation: 'Nhiều phản ứng chậm, cần nhiệt hoặc xúc tác.' },
      { order: 2, title: 'Xét sản phẩm', explanation: 'Phản ứng có thể theo nhiều hướng; B đúng.' }
    ],
    finalAnswer: 'B', commonMistakes: ['Cho phản ứng hữu cơ luôn hoàn toàn.'], reviewSuggestions: ['Tránh các từ “luôn”, “chỉ”.']
  },
  {
    id: 'chem11-org-s011', questionId: 'chem11-org-q011',
    recognition: 'Dạng suy luận từ chuyển hóa và phân bố sản phẩm.',
    detailedSteps: [
      { order: 1, title: 'Đọc độ chuyển hóa', explanation: '72% sau 60 phút cho thấy phản ứng không tức thời và không hoàn toàn.' },
      { order: 2, title: 'Đọc sản phẩm', explanation: 'Nhiều sản phẩm chứng tỏ nhiều hướng phản ứng; C đúng.' }
    ],
    finalAnswer: 'C', commonMistakes: ['Bỏ qua số liệu 72%.'], reviewSuggestions: ['Đọc riêng tốc độ, mức chuyển hóa và độ chọn lọc.']
  },
  {
    id: 'chem11-org-s012', questionId: 'chem11-org-q012',
    recognition: 'Dạng sửa hai ngộ nhận độc lập về nguồn gốc và phản ứng.',
    detailedSteps: [
      { order: 1, title: 'Sửa nguồn gốc', explanation: 'Chất tổng hợp nhân tạo vẫn có thể là hợp chất hữu cơ.' },
      { order: 2, title: 'Sửa phản ứng', explanation: 'Phản ứng hữu cơ có thể tạo hỗn hợp và cần điều kiện; D sửa đủ hai ý.' }
    ],
    finalAnswer: 'D', commonMistakes: ['Chỉ sửa một nửa lập luận.'], reviewSuggestions: ['Tách mệnh đề ghép thành từng nhận định.']
  },
  {
    id: 'chem11-org-s013', questionId: 'chem11-org-q013',
    recognition: 'Dạng hydrocarbon: chất hữu cơ chỉ có C và H.',
    detailedSteps: [
      { order: 1, title: 'Kiểm tra thành phần', explanation: 'CH₄ chỉ gồm C và H.' },
      { order: 2, title: 'Loại chất khác', explanation: 'Các chất còn lại có O/Cl hoặc là CO₂ vô cơ; A đúng.' }
    ],
    finalAnswer: 'A', commonMistakes: ['Chọn chất hữu cơ có thêm O.'], reviewSuggestions: ['Hydrocarbon chỉ gồm carbon và hydrogen.']
  },
  {
    id: 'chem11-org-s014', questionId: 'chem11-org-q014',
    recognition: 'Dạng phân loại trực tiếp từ công thức C₂H₄.',
    detailedSteps: [
      { order: 1, title: 'Đếm loại nguyên tố', explanation: 'C₂H₄ chỉ có carbon và hydrogen.' },
      { order: 2, title: 'Kết luận', explanation: 'Đó là hydrocarbon; B đúng.' }
    ],
    finalAnswer: 'B', commonMistakes: ['Cho mọi chất có liên kết đôi là dẫn xuất.'], reviewSuggestions: ['Phân loại lớp lớn trước đặc điểm liên kết.']
  },
  {
    id: 'chem11-org-s015', questionId: 'chem11-org-q015',
    recognition: 'Dạng chọn dãy: kiểm tra từng công thức chỉ chứa C, H.',
    detailedSteps: [
      { order: 1, title: 'Loại dãy có nguyên tố khác', explanation: 'CH₃OH có O, CH₃Cl có Cl; CO₂ là vô cơ.' },
      { order: 2, title: 'Chọn dãy còn lại', explanation: 'CH₄, C₂H₂, C₆H₆ chỉ có C và H; C đúng.' }
    ],
    finalAnswer: 'C', commonMistakes: ['Chỉ kiểm tra chất đầu dãy.'], reviewSuggestions: ['Quét toàn bộ từng công thức.']
  },
  {
    id: 'chem11-org-s016', questionId: 'chem11-org-q016',
    recognition: 'Dạng chuyển mô hình phân tử sang phân loại thành phần.',
    detailedSteps: [
      { order: 1, title: 'Đọc chú giải mô hình', explanation: 'Mô hình chỉ có carbon và hydrogen.' },
      { order: 2, title: 'Áp định nghĩa', explanation: 'Hợp chất hữu cơ chỉ C/H là hydrocarbon; D đúng.' }
    ],
    finalAnswer: 'D', commonMistakes: ['Cho mô hình là carbonate dù không có O.'], reviewSuggestions: ['Đổi mô hình thành danh sách nguyên tố.']
  },
  {
    id: 'chem11-org-s017', questionId: 'chem11-org-q017',
    recognition: 'Dạng dẫn xuất chứa oxygen.',
    detailedSteps: [
      { order: 1, title: 'Kiểm tra phạm vi', explanation: 'C₂H₅OH là hợp chất hữu cơ.' },
      { order: 2, title: 'Kiểm tra thành phần', explanation: 'Ngoài C, H còn có O nên là dẫn xuất; A đúng.' }
    ],
    finalAnswer: 'A', commonMistakes: ['Gọi ethanol là hydrocarbon.'], reviewSuggestions: ['Chỉ một nguyên tố O cũng loại khỏi hydrocarbon.']
  },
  {
    id: 'chem11-org-s018', questionId: 'chem11-org-q018',
    recognition: 'Dạng dẫn xuất halogen: carbon skeleton có H bị thay bởi Cl.',
    detailedSteps: [
      { order: 1, title: 'Nhận chất hữu cơ', explanation: 'CH₃Cl thuộc hợp chất hữu cơ.' },
      { order: 2, title: 'Xác định heteroatom', explanation: 'Cl thay H của methane nên là dẫn xuất halogen; B đúng.' }
    ],
    finalAnswer: 'B', commonMistakes: ['Coi mọi chloride là muối ion.'], reviewSuggestions: ['Phân biệt liên kết C–Cl với ion Cl⁻.']
  },
  {
    id: 'chem11-org-s019', questionId: 'chem11-org-q019',
    recognition: 'Dạng phá ngộ nhận dẫn xuất bắt buộc chứa oxygen.',
    detailedSteps: [
      { order: 1, title: 'Nêu tiêu chí rộng', explanation: 'Dẫn xuất có nguyên tố khác ngoài C, H.' },
      { order: 2, title: 'Liệt kê khả năng', explanation: 'Đó có thể là halogen, N, O, S; C đúng.' }
    ],
    finalAnswer: 'C', commonMistakes: ['Đồng nhất dẫn xuất với hợp chất oxygen.'], reviewSuggestions: ['Ghi nhóm dẫn xuất halogen và amine làm phản ví dụ.']
  },
  {
    id: 'chem11-org-s020', questionId: 'chem11-org-q020',
    recognition: 'Dạng kiểm tra ngoại lệ trước khi phân loại dẫn xuất.',
    detailedSteps: [
      { order: 1, title: 'Nhận CO₂', explanation: 'CO₂ là oxide của carbon.' },
      { order: 2, title: 'Áp ngoại lệ', explanation: 'Oxide này thuộc hóa học vô cơ, không phải dẫn xuất; D đúng.' }
    ],
    finalAnswer: 'D', commonMistakes: ['Thấy C và O là gọi dẫn xuất oxygen.'], reviewSuggestions: ['Luôn loại ngoại lệ carbon trước.']
  },
  {
    id: 'chem11-org-s021', questionId: 'chem11-org-q021',
    recognition: 'Dạng đếm ba lớp: hydrocarbon, dẫn xuất, carbon vô cơ.',
    detailedSteps: [
      { order: 1, title: 'Phân loại hữu cơ', explanation: 'CH₄ là hydrocarbon; ethanol và CH₃Cl là hai dẫn xuất.' },
      { order: 2, title: 'Phân loại vô cơ', explanation: 'CO₂ và Na₂CO₃ là hai chất carbon vô cơ; 1–2–2, A đúng.' }
    ],
    finalAnswer: 'A', commonMistakes: ['Đếm CO₂ là dẫn xuất.'], reviewSuggestions: ['Tạo ba cột trước khi đếm.']
  },
  {
    id: 'chem11-org-s022', questionId: 'chem11-org-q022',
    recognition: 'Dạng kiểm tra bảng phân loại theo thành phần.',
    detailedSteps: [
      { order: 1, title: 'Kiểm tra hydrocarbon', explanation: 'C₂H₂ và C₆H₆ chỉ có C/H.' },
      { order: 2, title: 'Kiểm tra dẫn xuất', explanation: 'CH₃Br và ethanol có Br/O; hàng B đúng.' }
    ],
    finalAnswer: 'B', commonMistakes: ['Cho chất có O là vô cơ.'], reviewSuggestions: ['Không phân loại chỉ từ một nguyên tố.']
  },
  {
    id: 'chem11-org-s023', questionId: 'chem11-org-q023',
    recognition: 'Dạng hữu cơ không chứa H: CCl₄ là phản ví dụ quan trọng.',
    detailedSteps: [
      { order: 1, title: 'Nhận khung carbon', explanation: 'CCl₄ liên hệ với methane khi các H được thay bằng Cl.' },
      { order: 2, title: 'Phân loại', explanation: 'Đây là dẫn xuất halogen, không phải hydrocarbon; C đúng.' }
    ],
    finalAnswer: 'C', commonMistakes: ['Cho không có H thì không thể hữu cơ.'], reviewSuggestions: ['Dùng CCl₄ làm phản ví dụ ghi nhớ.']
  },
  {
    id: 'chem11-org-s024', questionId: 'chem11-org-q024',
    recognition: 'Dạng quy trình phân loại nhiều tầng.',
    detailedSteps: [
      { order: 1, title: 'Cổng thứ nhất', explanation: 'Loại CO, CO₂, carbonate và các ngoại lệ vô cơ.' },
      { order: 2, title: 'Cổng thứ hai', explanation: 'Trong hữu cơ: chỉ C/H là hydrocarbon, có nguyên tố khác là dẫn xuất; D đúng.' }
    ],
    finalAnswer: 'D', commonMistakes: ['Bỏ qua cổng ngoại lệ.'], reviewSuggestions: ['Dùng cây quyết định hai bước.']
  },
  {
    id: 'chem11-org-s025', questionId: 'chem11-org-q025',
    recognition: 'Dạng định nghĩa nhóm chức: phải gắn với tính chất đặc trưng.',
    detailedSteps: [
      { order: 1, title: 'Xác định đơn vị cấu trúc', explanation: 'Nhóm chức có thể là một nguyên tử hoặc nhóm nguyên tử.' },
      { order: 2, title: 'Xác định vai trò', explanation: 'Nó gây tính chất hóa học đặc trưng; A đúng.' }
    ],
    finalAnswer: 'A', commonMistakes: ['Coi mọi mảnh công thức là nhóm chức.'], reviewSuggestions: ['Định nghĩa luôn có cụm “tính chất đặc trưng”.']
  },
  {
    id: 'chem11-org-s026', questionId: 'chem11-org-q026',
    recognition: 'Dạng nhận nhóm cuối công thức ethanol.',
    detailedSteps: [
      { order: 1, title: 'Tách khung', explanation: 'CH₃CH₂– là gốc hydrocarbon.' },
      { order: 2, title: 'Nhận nhóm', explanation: '–OH gắn carbon no là nhóm hydroxy alcohol; B đúng.' }
    ],
    finalAnswer: 'B', commonMistakes: ['Nhầm –OH với –COOH.'], reviewSuggestions: ['Đọc cả cụm quanh oxygen.']
  },
  {
    id: 'chem11-org-s027', questionId: 'chem11-org-q027',
    recognition: 'Dạng gọi tên nhóm –COOH.',
    detailedSteps: [
      { order: 1, title: 'Nhận cấu trúc', explanation: '–COOH gồm carbonyl và hydroxy trong một cụm.' },
      { order: 2, title: 'Gọi tên nhóm', explanation: 'Cụm này là carboxyl; C đúng.' }
    ],
    finalAnswer: 'C', commonMistakes: ['Tách thành hai nhóm độc lập.'], reviewSuggestions: ['Ưu tiên nhận cụm lớn –COOH.']
  },
  {
    id: 'chem11-org-s028', questionId: 'chem11-org-q028',
    recognition: 'Dạng bảng ghép kí hiệu nhóm chức với tên.',
    detailedSteps: [
      { order: 1, title: 'Ghép từng nhóm', explanation: '–NH₂ là amino, –CHO là aldehyde, –COOH là carboxyl.' },
      { order: 2, title: 'Chọn hàng', explanation: 'Chỉ D đúng cả ba cặp.' }
    ],
    finalAnswer: 'D', commonMistakes: ['Đảo amino và carboxyl.'], reviewSuggestions: ['Tạo bảng kí hiệu – tên – ví dụ.']
  },
  {
    id: 'chem11-org-s029', questionId: 'chem11-org-q029',
    recognition: 'Dạng nhóm –CHO ở cuối mạch.',
    detailedSteps: [
      { order: 1, title: 'Đọc cụm cuối', explanation: 'CH₃CHO kết thúc bằng –CHO.' },
      { order: 2, title: 'Phân loại', explanation: '–CHO là nhóm aldehyde; A đúng.' }
    ],
    finalAnswer: 'A', commonMistakes: ['Chỉ nhìn C=O và gọi ketone.'], reviewSuggestions: ['C=O ở cuối gắn H là aldehyde.']
  },
  {
    id: 'chem11-org-s030', questionId: 'chem11-org-q030',
    recognition: 'Dạng carbonyl nằm giữa hai gốc carbon.',
    detailedSteps: [
      { order: 1, title: 'Xác định vị trí', explanation: 'Trong CH₃COCH₃, C=O nằm giữa hai nhóm CH₃.' },
      { order: 2, title: 'Gọi nhóm', explanation: 'Đó là carbonyl của ketone; B đúng.' }
    ],
    finalAnswer: 'B', commonMistakes: ['Nhầm với –CHO.'], reviewSuggestions: ['So sánh đầu mạch –CHO và giữa mạch >C=O.']
  },
  {
    id: 'chem11-org-s031', questionId: 'chem11-org-q031',
    recognition: 'Dạng dẫn xuất halogen: nhận liên kết C–Cl.',
    detailedSteps: [
      { order: 1, title: 'Đọc heteroatom', explanation: 'CH₃Cl có chlorine gắn với carbon.' },
      { order: 2, title: 'Gọi nhóm', explanation: '–Cl là nhóm halogen; C đúng.' }
    ],
    finalAnswer: 'C', commonMistakes: ['Gọi Cl là ion chloride trong phân tử.'], reviewSuggestions: ['Phân biệt liên kết cộng hóa trị C–Cl với Cl⁻.']
  },
  {
    id: 'chem11-org-s032', questionId: 'chem11-org-q032',
    recognition: 'Dạng –OH nằm trong cụm –COOH, không phải alcohol.',
    detailedSteps: [
      { order: 1, title: 'Đọc cụm đầy đủ', explanation: 'Trong HCOOH, –OH gắn cùng carbonyl thành –COOH.' },
      { order: 2, title: 'Ưu tiên nhóm lớn', explanation: 'Nhóm chức là carboxyl; D đúng.' }
    ],
    finalAnswer: 'D', commonMistakes: ['Hễ thấy –OH là gọi alcohol.'], reviewSuggestions: ['Quét –COOH trước –OH.']
  },
  {
    id: 'chem11-org-s033', questionId: 'chem11-org-q033',
    recognition: 'Dạng phân tử có hai nhóm chức tách biệt.',
    detailedSteps: [
      { order: 1, title: 'Đầu trái', explanation: 'HO–CH₂– có nhóm hydroxy.' },
      { order: 2, title: 'Đầu phải', explanation: '–COOH là nhóm carboxyl; A đúng.' }
    ],
    finalAnswer: 'A', commonMistakes: ['Chỉ ghi một nhóm chức.'], reviewSuggestions: ['Quét công thức từ trái sang phải.']
  },
  {
    id: 'chem11-org-s034', questionId: 'chem11-org-q034',
    recognition: 'Dạng phân biệt –OH alcohol và –OH trong carboxyl.',
    detailedSteps: [
      { order: 1, title: 'Ethanol', explanation: '–OH gắn carbon no nên là hydroxy alcohol.' },
      { order: 2, title: 'Acetic acid', explanation: '–OH nằm trong –COOH nên nhóm là carboxyl; B đúng.' }
    ],
    finalAnswer: 'B', commonMistakes: ['Gọi cả hai đều là alcohol.'], reviewSuggestions: ['Xét nguyên tử carbon lân cận –OH.']
  },
  {
    id: 'chem11-org-s035', questionId: 'chem11-org-q035',
    recognition: 'Dạng amino acid đơn giản có hai nhóm chức.',
    detailedSteps: [
      { order: 1, title: 'Nhận đầu amino', explanation: '–NH₂ là nhóm amino.' },
      { order: 2, title: 'Nhận đầu acid', explanation: '–COOH là nhóm carboxyl; C đúng.' }
    ],
    finalAnswer: 'C', commonMistakes: ['Chỉ nhìn C=O và bỏ –NH₂.'], reviewSuggestions: ['Đánh dấu từng heteroatom và cụm liên kết.']
  },
  {
    id: 'chem11-org-s036', questionId: 'chem11-org-q036',
    recognition: 'Dạng quy trình nhận nhóm chức, tránh nhận theo nguyên tử rời.',
    detailedSteps: [
      { order: 1, title: 'Đọc cụm lớn', explanation: 'Nhận –COOH, –CHO và các cụm đặc trưng trước.' },
      { order: 2, title: 'Ghép ngữ cảnh liên kết', explanation: 'Sau đó mới xác định –OH, >C=O theo vị trí; D là quy trình đúng.' }
    ],
    finalAnswer: 'D', commonMistakes: ['Khoanh từng O/N rời rạc.'], reviewSuggestions: ['Ưu tiên motif cấu trúc lớn rồi tinh chỉnh.']
  },
  {
    id: 'chem11-org-s037', questionId: 'chem11-org-q037',
    recognition: 'Dạng nhận biết nguyên tắc chưng cất: tìm sự khác nhau về độ bay hơi hoặc nhiệt độ sôi.',
    detailedSteps: [
      { order: 1, title: 'Nhận dấu hiệu', explanation: 'Hỗn hợp gồm các chất lỏng có khả năng bay hơi khác nhau.' },
      { order: 2, title: 'Chọn cơ sở tách', explanation: 'Chưng cất làm cấu tử dễ bay hơi hóa hơi trước rồi ngưng tụ; A đúng.' }
    ],
    finalAnswer: 'A', commonMistakes: ['Chọn khối lượng riêng dù chưng cất không dựa vào sự phân lớp.'], reviewSuggestions: ['Nhớ chuỗi: hóa hơi → dẫn hơi → ngưng tụ.']
  },
  {
    id: 'chem11-org-s038', questionId: 'chem11-org-q038',
    recognition: 'Dạng chọn hỗn hợp phù hợp với chưng cất đơn: hai chất lỏng đồng nhất và nhiệt độ sôi cách nhau đáng kể.',
    detailedSteps: [
      { order: 1, title: 'Đọc dữ kiện', explanation: 'Acetone và nước tạo hỗn hợp đồng nhất, nhưng acetone có nhiệt độ sôi thấp hơn nhiều.' },
      { order: 2, title: 'Đối chiếu phương pháp', explanation: 'Chênh lệch độ bay hơi đủ lớn phù hợp chưng cất đơn; B đúng.' }
    ],
    finalAnswer: 'B', commonMistakes: ['Chọn hai chất không trộn lẫn, vốn phù hợp với chiết.'], reviewSuggestions: ['Phân biệt chưng cất cho pha lỏng đồng nhất và chiết cho hai pha không trộn lẫn.']
  },
  {
    id: 'chem11-org-s039', questionId: 'chem11-org-q039',
    recognition: 'Dạng phát hiện ngộ nhận về cơ sở của chưng cất.',
    detailedSteps: [
      { order: 1, title: 'Xác định đại lượng quyết định', explanation: 'Cấu tử có nhiệt độ sôi thấp hơn thường đi vào pha hơi ưu tiên.' },
      { order: 2, title: 'Loại tiêu chí sai', explanation: 'Khối lượng riêng không quyết định thứ tự bay hơi nên C đúng.' }
    ],
    finalAnswer: 'C', commonMistakes: ['Đồng nhất chưng cất với gạn hoặc phễu chiết.'], reviewSuggestions: ['Gắn mỗi phương pháp với đúng tính chất vật lí được khai thác.']
  },
  {
    id: 'chem11-org-s040', questionId: 'chem11-org-q040',
    recognition: 'Dạng đánh giá giới hạn chưng cất đơn từ bảng nhiệt độ sôi.',
    detailedSteps: [
      { order: 1, title: 'So sánh nhiệt độ sôi', explanation: 'Hai cấu tử có nhiệt độ sôi rất gần nhau nên hơi thu được khó giàu riêng một cấu tử.' },
      { order: 2, title: 'Kết luận', explanation: 'Chưng cất đơn tách kém hiệu quả; cần kĩ thuật phân đoạn phù hợp hơn, nên D đúng.' }
    ],
    finalAnswer: 'D', commonMistakes: ['Cho rằng mọi chênh lệch nhiệt độ sôi đều đủ để tách hoàn toàn.'], reviewSuggestions: ['Khi nhiệt độ sôi gần nhau, không hứa hẹn độ tinh khiết cao bằng chưng cất đơn.']
  },
  {
    id: 'chem11-org-s041', questionId: 'chem11-org-q041',
    recognition: 'Dạng đọc sơ đồ chưng cất: vị trí bầu nhiệt kế phải đo nhiệt độ dòng hơi đi sang sinh hàn.',
    detailedSteps: [
      { order: 1, title: 'Xác định thứ cần đo', explanation: 'Ta cần nhiệt độ của hơi ngay trước khi hơi vào nhánh sinh hàn.' },
      { order: 2, title: 'Chọn vị trí', explanation: 'Đặt bầu nhiệt kế ngang cửa ra của nhánh dẫn hơi; A đúng.' }
    ],
    finalAnswer: 'A', commonMistakes: ['Nhúng nhiệt kế vào dung dịch đang sôi.'], reviewSuggestions: ['Tự hỏi: nhiệt kế đang theo dõi chất lỏng hay phân đoạn hơi?']
  },
  {
    id: 'chem11-org-s042', questionId: 'chem11-org-q042',
    recognition: 'Dạng lắp sinh hàn: nước làm lạnh đi từ thấp lên cao.',
    detailedSteps: [
      { order: 1, title: 'Xét mục tiêu', explanation: 'Áo nước cần được điền đầy, hạn chế túi khí và trao đổi nhiệt đều.' },
      { order: 2, title: 'Chọn chiều nước', explanation: 'Cho nước vào đầu thấp và ra đầu cao; B đúng.' }
    ],
    finalAnswer: 'B', commonMistakes: ['Cho nước vào đầu trên vì nghĩ nước tự chảy xuống là đủ.'], reviewSuggestions: ['Nhớ “vào thấp – ra cao” cho sinh hàn.']
  },
  {
    id: 'chem11-org-s043', questionId: 'chem11-org-q043',
    recognition: 'Dạng an toàn khi đun chưng cất: nhận vai trò của hạt chống sôi bumping.',
    detailedSteps: [
      { order: 1, title: 'Nhận nguy cơ', explanation: 'Chất lỏng có thể quá nhiệt rồi sôi bùng đột ngột.' },
      { order: 2, title: 'Chọn biện pháp', explanation: 'Hạt chống sôi tạo tâm sôi, giúp sôi đều; C đúng.' }
    ],
    finalAnswer: 'C', commonMistakes: ['Cho hạt chống sôi vào khi dung dịch đang sôi mạnh.'], reviewSuggestions: ['Thêm hạt chống sôi trước khi gia nhiệt.']
  },
  {
    id: 'chem11-org-s044', questionId: 'chem11-org-q044',
    recognition: 'Dạng thẩm định toàn bộ sơ đồ chưng cất theo ba dấu hiệu: thoát áp, đo hơi và làm lạnh đúng.',
    detailedSteps: [
      { order: 1, title: 'Loại cấu hình nguy hiểm', explanation: 'Không bịt kín hệ; nhiệt kế không ngập trong chất lỏng; nước sinh hàn không vào từ đầu trên.' },
      { order: 2, title: 'Chọn cấu hình đúng', explanation: 'Phương án D đáp ứng đồng thời vị trí nhiệt kế, chiều nước và an toàn áp suất.' }
    ],
    finalAnswer: 'D', commonMistakes: ['Chỉ kiểm tra một chi tiết mà bỏ qua các lỗi còn lại.'], reviewSuggestions: ['Dùng checklist: hệ mở – bầu nhiệt kế ở cửa hơi – nước vào thấp ra cao.']
  },
  {
    id: 'chem11-org-s045', questionId: 'chem11-org-q045',
    recognition: 'Dạng đọc nhiệt độ trong chưng cất để quyết định thời điểm thu phân đoạn.',
    detailedSteps: [
      { order: 1, title: 'Đọc tín hiệu', explanation: 'Nhiệt độ hơi ổn định gần nhiệt độ sôi của cấu tử cho biết phân đoạn đó đang ra chủ yếu.' },
      { order: 2, title: 'Thao tác', explanation: 'Thu phần cất vào bình đã định và theo dõi tiếp; A đúng.' }
    ],
    finalAnswer: 'A', commonMistakes: ['Gộp mọi phần cất khiến giảm độ tinh khiết.'], reviewSuggestions: ['Gắn mỗi khoảng nhiệt độ ổn định với một bình hứng phù hợp.']
  },
  {
    id: 'chem11-org-s046', questionId: 'chem11-org-q046',
    recognition: 'Dạng giải thích đường nhiệt độ chưng cất có nhiều vùng ổn định.',
    detailedSteps: [
      { order: 1, title: 'Nhận chuyển vùng', explanation: 'Sau khi cấu tử dễ bay hơi giảm mạnh, thành phần hơi thay đổi.' },
      { order: 2, title: 'Suy luận', explanation: 'Nhiệt độ chuyển tới vùng ổn định mới phản ánh phân đoạn giàu cấu tử có nhiệt độ sôi cao hơn; B đúng.' }
    ],
    finalAnswer: 'B', commonMistakes: ['Coi mọi dao động nhiệt độ là lỗi nhiệt kế.'], reviewSuggestions: ['Đọc đồ thị theo các plateau và vùng chuyển tiếp.']
  },
  {
    id: 'chem11-org-s047', questionId: 'chem11-org-q047',
    recognition: 'Dạng suy luận thứ tự phân đoạn từ bảng nhiệt độ sôi.',
    detailedSteps: [
      { order: 1, title: 'Sắp xếp độ bay hơi', explanation: 'Cấu tử có nhiệt độ sôi thấp dễ bay hơi hơn.' },
      { order: 2, title: 'Gắn với thời gian', explanation: 'Phân đoạn đầu giàu cấu tử sôi thấp, phân đoạn sau giàu cấu tử sôi cao; C đúng.' }
    ],
    finalAnswer: 'C', commonMistakes: ['Đảo thứ tự vì nghĩ chất nặng luôn ra trước.'], reviewSuggestions: ['Không dùng khối lượng mol thay cho dữ kiện nhiệt độ sôi.']
  },
  {
    id: 'chem11-org-s048', questionId: 'chem11-org-q048',
    recognition: 'Dạng thiết kế thu phân đoạn từ dữ liệu nhiệt độ–thời gian.',
    detailedSteps: [
      { order: 1, title: 'Phân vùng dữ liệu', explanation: 'Xác định vùng nhiệt độ ổn định của từng cấu tử và vùng chuyển tiếp.' },
      { order: 2, title: 'Thiết kế thu mẫu', explanation: 'Đổi bình hứng theo vùng, tách riêng phần chuyển tiếp để tránh nhiễm chéo; D đúng.' }
    ],
    finalAnswer: 'D', commonMistakes: ['Dùng một bình hứng cho toàn bộ quá trình.'], reviewSuggestions: ['Vẽ trước các mốc đổi bình trên đồ thị nhiệt độ.']
  },
  {
    id: 'chem11-org-s049', questionId: 'chem11-org-q049',
    recognition: 'Dạng định nghĩa chiết lỏng–lỏng: cần hai dung môi không trộn lẫn và sự phân bố khác nhau của chất tan.',
    detailedSteps: [
      { order: 1, title: 'Kiểm tra hai pha', explanation: 'Hai dung môi phải tạo hai lớp riêng.' },
      { order: 2, title: 'Kiểm tra chất tan', explanation: 'Chất tan ưu tiên hòa tan vào một pha, cho phép chuyển pha và tách; A đúng.' }
    ],
    finalAnswer: 'A', commonMistakes: ['Chỉ xét khối lượng riêng mà bỏ độ tan.'], reviewSuggestions: ['Nhớ hai điều kiện: không trộn lẫn + phân bố chọn lọc.']
  },
  {
    id: 'chem11-org-s050', questionId: 'chem11-org-q050',
    recognition: 'Dạng chọn dung môi chiết từ các tiêu chí vật lí và an toàn.',
    detailedSteps: [
      { order: 1, title: 'Lập bộ tiêu chí', explanation: 'Dung môi phải không trộn lẫn với pha ban đầu và hòa tan tốt chất cần chiết.' },
      { order: 2, title: 'Thêm điều kiện thực hành', explanation: 'Ưu tiên dung môi có thể loại bỏ và sử dụng an toàn; B đúng.' }
    ],
    finalAnswer: 'B', commonMistakes: ['Chọn dung môi trộn lẫn hoàn toàn vì chất tan tan tốt.'], reviewSuggestions: ['Độ tan tốt là chưa đủ nếu không tạo được hai pha.']
  },
  {
    id: 'chem11-org-s051', questionId: 'chem11-org-q051',
    recognition: 'Dạng tách vai trò của độ tan và khối lượng riêng trong phép chiết.',
    detailedSteps: [
      { order: 1, title: 'Xác định vai trò độ tan', explanation: 'Độ tan quyết định chất tan ưu tiên đi vào lớp nào.' },
      { order: 2, title: 'Xác định vai trò khối lượng riêng', explanation: 'Khối lượng riêng chỉ giúp nhận lớp trên–dưới; C đúng.' }
    ],
    finalAnswer: 'C', commonMistakes: ['Cho rằng lớp nặng hơn luôn chứa nhiều chất tan hơn.'], reviewSuggestions: ['Tách hai câu hỏi: “chất tan ở đâu?” và “lớp đó nằm trên hay dưới?”.']
  },
  {
    id: 'chem11-org-s052', questionId: 'chem11-org-q052',
    recognition: 'Dạng kiểm tra điều kiện tạo hai pha trước khi dùng phễu chiết.',
    detailedSteps: [
      { order: 1, title: 'Xét tính trộn lẫn', explanation: 'Ethanol và nước trộn lẫn hoàn toàn trong điều kiện thông thường.' },
      { order: 2, title: 'Kết luận phương pháp', explanation: 'Không tạo hai lớp nên không thể chiết lỏng–lỏng trực tiếp bằng cặp này; D đúng.' }
    ],
    finalAnswer: 'D', commonMistakes: ['Nghĩ mọi cặp chất lỏng đều phân lớp sau khi để yên.'], reviewSuggestions: ['Kiểm tra tính không trộn lẫn trước mọi tính toán phân bố.']
  },
  {
    id: 'chem11-org-s053', questionId: 'chem11-org-q053',
    recognition: 'Dạng thao tác an toàn với phễu chiết: phải xả áp định kì.',
    detailedSteps: [
      { order: 1, title: 'Nhận nguy cơ', explanation: 'Dung môi dễ bay hơi hoặc phản ứng có thể làm tăng áp suất trong phễu.' },
      { order: 2, title: 'Thao tác đúng', explanation: 'Lật phễu, hướng xa người và mở khóa xả áp định kì; A đúng.' }
    ],
    finalAnswer: 'A', commonMistakes: ['Lắc liên tục mà không xả áp.'], reviewSuggestions: ['Ghi nhớ chu trình: lắc nhẹ → xả áp → lặp lại.']
  },
  {
    id: 'chem11-org-s054', questionId: 'chem11-org-q054',
    recognition: 'Dạng xác định lớp dung môi bằng khối lượng riêng.',
    detailedSteps: [
      { order: 1, title: 'So sánh khối lượng riêng', explanation: 'Dung môi hữu cơ có khối lượng riêng 0,75 g/mL, nhỏ hơn nước.' },
      { order: 2, title: 'Xác định vị trí', explanation: 'Lớp nhẹ hơn nằm trên nên lớp hữu cơ ở trên; B đúng.' }
    ],
    finalAnswer: 'B', commonMistakes: ['Mặc định lớp hữu cơ luôn ở trên.'], reviewSuggestions: ['Luôn dùng dữ kiện khối lượng riêng; một số dung môi hữu cơ nằm dưới nước.']
  },
  {
    id: 'chem11-org-s055', questionId: 'chem11-org-q055',
    recognition: 'Dạng quy trình tháo lớp dưới của phễu chiết.',
    detailedSteps: [
      { order: 1, title: 'Chuẩn bị dòng chảy', explanation: 'Tháo nút phía trên để không khí vào, tránh dòng chảy giật cục.' },
      { order: 2, title: 'Tách lớp', explanation: 'Mở khóa cho lớp dưới chảy ra và đóng khóa đúng tại mặt phân cách; C đúng.' }
    ],
    finalAnswer: 'C', commonMistakes: ['Giữ nút kín khi xả hoặc để mặt phân cách chảy sang bình dưới.'], reviewSuggestions: ['Quan sát mặt phân cách ở ngang khóa trước khi kết thúc xả.']
  },
  {
    id: 'chem11-org-s056', questionId: 'chem11-org-q056',
    recognition: 'Dạng nhận diện lớp khi màu sắc không đáng tin: dùng phép thử giọt nước kết hợp dữ kiện khối lượng riêng.',
    detailedSteps: [
      { order: 1, title: 'Không suy đoán theo màu', explanation: 'Màu có thể do chất tan nên không xác định chắc bản chất dung môi.' },
      { order: 2, title: 'Kiểm chứng', explanation: 'Thêm giọt nước xem nhập vào lớp nào, rồi đối chiếu khối lượng riêng; D đúng.' }
    ],
    finalAnswer: 'D', commonMistakes: ['Mặc định lớp không màu là nước.'], reviewSuggestions: ['Khi không chắc, làm phép thử nhỏ thay vì phỏng đoán.']
  },
  {
    id: 'chem11-org-s057', questionId: 'chem11-org-q057',
    recognition: 'Dạng so sánh hiệu suất chiết với cùng tổng thể tích dung môi.',
    detailedSteps: [
      { order: 1, title: 'Nhận cơ chế phân bố', explanation: 'Sau mỗi lần chiết, chất tan lại thiết lập phân bố giữa hai pha.' },
      { order: 2, title: 'So sánh chiến lược', explanation: 'Nhiều lần chiết bằng các phần dung môi nhỏ thường lấy được tổng lượng chất tan lớn hơn một lần; A đúng.' }
    ],
    finalAnswer: 'A', commonMistakes: ['Cho rằng chỉ tổng thể tích dung môi quyết định hiệu suất.'], reviewSuggestions: ['Nhớ nguyên tắc “nhiều lần, lượng nhỏ” khi điều kiện khác như nhau.']
  },
  {
    id: 'chem11-org-s058', questionId: 'chem11-org-q058',
    recognition: 'Dạng xử lí sự cố nhũ tương trong phép chiết.',
    detailedSteps: [
      { order: 1, title: 'Dừng nguyên nhân làm nặng thêm', explanation: 'Không tiếp tục lắc mạnh và không đun phễu kín.' },
      { order: 2, title: 'Xử lí có kiểm soát', explanation: 'Để yên, thao tác nhẹ và áp dụng biện pháp phá nhũ phù hợp theo quy trình; B đúng.' }
    ],
    finalAnswer: 'B', commonMistakes: ['Lắc mạnh hơn để “tách nhanh”.'], reviewSuggestions: ['Ưu tiên thao tác an toàn và biện pháp phá nhũ được hướng dẫn trong phòng thí nghiệm.']
  },
  {
    id: 'chem11-org-s059', questionId: 'chem11-org-q059',
    recognition: 'Dạng đánh giá nguy cơ áp suất trong dụng cụ kín chứa dung môi dễ bay hơi.',
    detailedSteps: [
      { order: 1, title: 'Xét tác động của nhiệt', explanation: 'Gia nhiệt làm tăng áp suất hơi của dung môi.' },
      { order: 2, title: 'Suy ra nguy cơ', explanation: 'Trong phễu kín, áp suất có thể làm bật nút, phun hóa chất hoặc gây tai nạn; C đúng.' }
    ],
    finalAnswer: 'C', commonMistakes: ['Chỉ nghĩ nhiệt làm dung môi tan tốt hơn mà bỏ qua áp suất.'], reviewSuggestions: ['Không gia nhiệt hệ kín không được thiết kế chịu áp.']
  },
  {
    id: 'chem11-org-s060', questionId: 'chem11-org-q060',
    recognition: 'Dạng giải thích sâu vì sao chiết lặp lại nâng hiệu suất thu hồi.',
    detailedSteps: [
      { order: 1, title: 'Mô hình mỗi lần chiết', explanation: 'Mỗi lần tiếp xúc tạo một cân bằng phân bố mới và lấy đi một phần chất tan khỏi pha ban đầu.' },
      { order: 2, title: 'Tổng hợp nhiều lần', explanation: 'Lặp lại với dung môi mới làm lượng còn lại giảm theo từng bước, nên tổng thu hồi tăng; D đúng.' }
    ],
    finalAnswer: 'D', commonMistakes: ['Cho rằng lần chiết sau không còn tác dụng vì đã đạt cân bằng lần đầu.'], reviewSuggestions: ['Phân biệt cân bằng của một lần chiết với quá trình thay dung môi và tái phân bố.']
  },
  {
    id: 'chem11-org-s061', questionId: 'chem11-org-q061',
    recognition: 'Dạng nêu nguyên tắc kết tinh: khai thác sự thay đổi độ tan theo nhiệt độ và tính chọn lọc với tạp chất.',
    detailedSteps: [
      { order: 1, title: 'Hòa tan ở nóng', explanation: 'Chất cần tinh chế tan tốt hơn trong dung môi nóng.' },
      { order: 2, title: 'Kết tinh khi nguội', explanation: 'Khi hạ nhiệt, độ tan giảm nên chất kết tinh, còn nhiều tạp chất vẫn ở dung dịch; A đúng.' }
    ],
    finalAnswer: 'A', commonMistakes: ['Cho rằng kết tinh chỉ là làm bay hơi toàn bộ dung môi.'], reviewSuggestions: ['Nhớ cặp điều kiện: tan nhiều khi nóng – tan ít khi lạnh.']
  },
  {
    id: 'chem11-org-s062', questionId: 'chem11-org-q062',
    recognition: 'Dạng sắp xếp quy trình kết tinh lại.',
    detailedSteps: [
      { order: 1, title: 'Chuẩn bị dung dịch nóng', explanation: 'Hòa tan mẫu trong lượng dung môi nóng vừa đủ và lọc nóng nếu có tạp không tan.' },
      { order: 2, title: 'Thu tinh thể', explanation: 'Để nguội cho kết tinh, sau đó lọc, rửa bằng ít dung môi lạnh và làm khô; B đúng.' }
    ],
    finalAnswer: 'B', commonMistakes: ['Lọc lạnh trước khi chất cần tinh chế kết tinh.'], reviewSuggestions: ['Tách “lọc nóng bỏ tạp” khỏi “lọc lạnh thu tinh thể”.']
  },
  {
    id: 'chem11-org-s063', questionId: 'chem11-org-q063',
    recognition: 'Dạng chọn dung môi kết tinh từ dữ kiện độ tan nóng–lạnh.',
    detailedSteps: [
      { order: 1, title: 'Kiểm tra độ tan nóng', explanation: 'Dung môi phải hòa tan đáng kể chất cần tinh chế khi đun nóng.' },
      { order: 2, title: 'Kiểm tra độ tan lạnh', explanation: 'Độ tan phải giảm mạnh khi nguội để thu được tinh thể; C đúng.' }
    ],
    finalAnswer: 'C', commonMistakes: ['Chọn dung môi hòa tan rất tốt ở cả nóng lẫn lạnh.'], reviewSuggestions: ['Ưu tiên độ chênh độ tan lớn, đồng thời xét tính trơ và an toàn.']
  },
  {
    id: 'chem11-org-s064', questionId: 'chem11-org-q064',
    recognition: 'Dạng phân biệt cô cạn với kết tinh chọn lọc.',
    detailedSteps: [
      { order: 1, title: 'Xét cô cạn', explanation: 'Làm bay hơi hết dung môi có thể giữ lại cả chất cần thu và tạp chất tan.' },
      { order: 2, title: 'Xét kết tinh', explanation: 'Kết tinh kiểm soát dựa trên độ tan để ưu tiên chất cần tinh chế đi vào pha rắn; D đúng.' }
    ],
    finalAnswer: 'D', commonMistakes: ['Đồng nhất tinh thể xuất hiện với sản phẩm chắc chắn tinh khiết tuyệt đối.'], reviewSuggestions: ['Đánh giá đồng thời độ tinh khiết và hiệu suất, không chỉ lượng chất rắn.']
  },
  {
    id: 'chem11-org-s065', questionId: 'chem11-org-q065',
    recognition: 'Dạng tính lượng tinh thể tối đa từ bảng độ tan ở hai nhiệt độ.',
    detailedSteps: [
      { order: 1, title: 'Lượng tan khi nóng', explanation: 'Trong lượng dung môi đã cho, tối đa hòa tan 40 g chất ở nhiệt độ cao.' },
      { order: 2, title: 'Lượng còn tan khi lạnh', explanation: 'Khi nguội còn 10 g trong dung dịch, nên kết tinh tối đa 40 − 10 = 30 g; A đúng.' }
    ],
    finalAnswer: 'A', commonMistakes: ['Lấy toàn bộ 40 g làm lượng tinh thể.'], reviewSuggestions: ['Công thức lõi: lượng kết tinh = lượng đã tan nóng − lượng còn tan lạnh.']
  },
  {
    id: 'chem11-org-s066', questionId: 'chem11-org-q066',
    recognition: 'Dạng tỉ lệ độ tan theo lượng dung môi.',
    detailedSteps: [
      { order: 1, title: 'Xác định tỉ lệ', explanation: 'Khi lượng dung môi tăng gấp đôi, lượng chất có thể kết tinh theo cùng chênh lệch độ tan cũng tăng gấp đôi.' },
      { order: 2, title: 'Tính', explanation: 'Từ 30 g cho một đơn vị dung môi thành 60 g cho hai đơn vị; B đúng.' }
    ],
    finalAnswer: 'B', commonMistakes: ['Không quy đổi độ tan theo lượng dung môi thực tế.'], reviewSuggestions: ['Luôn ghi rõ độ tan đang tính trên bao nhiêu gam dung môi.']
  },
  {
    id: 'chem11-org-s067', questionId: 'chem11-org-q067',
    recognition: 'Dạng đánh giá đánh đổi giữa hiệu suất và độ tinh khiết khi làm lạnh sâu hoặc cô quá mức.',
    detailedSteps: [
      { order: 1, title: 'Xét lợi ích', explanation: 'Giảm nhiệt độ hoặc dung môi có thể làm tăng lượng chất rắn thu được.' },
      { order: 2, title: 'Xét chi phí chất lượng', explanation: 'Tạp chất cũng có thể kết tinh hoặc bám theo, nên hiệu suất tăng không đồng nghĩa độ tinh khiết tăng; C đúng.' }
    ],
    finalAnswer: 'C', commonMistakes: ['Coi thu được nhiều tinh thể hơn luôn là tốt hơn.'], reviewSuggestions: ['Đánh giá kết tinh bằng hai trục: recovery và purity.']
  },
  {
    id: 'chem11-org-s068', questionId: 'chem11-org-q068',
    recognition: 'Dạng chọn chế độ làm nguội từ mục tiêu tạo tinh thể tương đối lớn và tinh khiết.',
    detailedSteps: [
      { order: 1, title: 'Xét tốc độ tạo mầm', explanation: 'Làm lạnh quá nhanh thường tạo nhiều mầm nhỏ và dễ giữ tạp.' },
      { order: 2, title: 'Chọn quy trình', explanation: 'Để nguội có kiểm soát rồi làm lạnh thêm giúp tinh thể phát triển tốt hơn; D đúng.' }
    ],
    finalAnswer: 'D', commonMistakes: ['Luôn chọn làm lạnh nhanh nhất để tối đa chất rắn.'], reviewSuggestions: ['Điều chỉnh tốc độ làm nguội theo mục tiêu độ tinh khiết và kích thước tinh thể.']
  },
  {
    id: 'chem11-org-s069', questionId: 'chem11-org-q069',
    recognition: 'Dạng chọn phương pháp tách dung môi dễ bay hơi khỏi chất tan không bay hơi trong dung dịch đồng nhất.',
    detailedSteps: [
      { order: 1, title: 'Nhận dạng hệ', explanation: 'Hệ là một pha lỏng, gồm dung môi bay hơi và chất tan ít hoặc không bay hơi.' },
      { order: 2, title: 'Chọn phương pháp', explanation: 'Chưng cất thu dung môi nhờ hóa hơi–ngưng tụ; A đúng.' }
    ],
    finalAnswer: 'A', commonMistakes: ['Chọn phễu chiết dù hệ chỉ có một pha.'], reviewSuggestions: ['Muốn thu dung môi bay hơi từ dung dịch: nghĩ tới chưng cất.']
  },
  {
    id: 'chem11-org-s070', questionId: 'chem11-org-q070',
    recognition: 'Dạng chọn phương pháp cho chất tan phân bố giữa hai chất lỏng không trộn lẫn.',
    detailedSteps: [
      { order: 1, title: 'Nhận hai pha', explanation: 'Hai dung môi không trộn lẫn tạo điều kiện dùng phễu chiết.' },
      { order: 2, title: 'Chọn cơ chế', explanation: 'Chuyển chất tan sang pha hòa tan tốt hơn bằng chiết lỏng–lỏng; B đúng.' }
    ],
    finalAnswer: 'B', commonMistakes: ['Chưng cất ngay mà chưa tận dụng phân bố chọn lọc.'], reviewSuggestions: ['Dấu hiệu mạnh nhất của chiết là hai lớp lỏng không trộn lẫn.']
  },
  {
    id: 'chem11-org-s071', questionId: 'chem11-org-q071',
    recognition: 'Dạng chọn phương pháp tinh chế chất rắn có độ tan phụ thuộc mạnh vào nhiệt độ.',
    detailedSteps: [
      { order: 1, title: 'Đọc tính chất', explanation: 'Chất rắn tan tốt khi nóng nhưng tan kém khi lạnh.' },
      { order: 2, title: 'Chọn phương pháp', explanation: 'Đây là điều kiện điển hình của kết tinh lại; C đúng.' }
    ],
    finalAnswer: 'C', commonMistakes: ['Chọn chưng cất chỉ vì trong hệ có dung môi.'], reviewSuggestions: ['Nếu mục tiêu là tinh chế chất rắn, xét đường độ tan trước.']
  },
  {
    id: 'chem11-org-s072', questionId: 'chem11-org-q072',
    recognition: 'Dạng tổng hợp chọn phương pháp: đối chiếu trạng thái pha và tính chất vật lí được khai thác.',
    detailedSteps: [
      { order: 1, title: 'Ghép từng dấu hiệu', explanation: 'Một pha lỏng khác độ bay hơi → chưng cất; hai pha lỏng và phân bố chọn lọc → chiết; chất rắn đổi độ tan theo nhiệt độ → kết tinh.' },
      { order: 2, title: 'Kiểm tra mục tiêu', explanation: 'Ba phép ghép đều đúng ở phương án D.' }
    ],
    finalAnswer: 'D', commonMistakes: ['Chọn một phương pháp quen thuộc cho mọi hỗn hợp.'], reviewSuggestions: ['Lập cây quyết định theo số pha, trạng thái chất cần thu và tính chất khác biệt.']
  },
  {
    id: 'chem11-org-s073', questionId: 'chem11-org-q073',
    recognition: 'Dạng định nghĩa CTPT: đọc loại nguyên tố và chỉ số nguyên tử.',
    detailedSteps: [
      { order: 1, title: 'Xác định thông tin trực tiếp', explanation: 'Kí hiệu nguyên tố cho biết loại nguyên tố, chỉ số cho số nguyên tử trong một phân tử.' },
      { order: 2, title: 'Loại thông tin không có', explanation: 'CTPT không tự cho cấu tạo, nhiệt độ sôi hay lượng mẫu; A đúng.' }
    ],
    finalAnswer: 'A', commonMistakes: ['Cho CTPT là công thức cấu tạo.'], reviewSuggestions: ['Phân biệt thành phần phân tử với cách liên kết.']
  },
  {
    id: 'chem11-org-s074', questionId: 'chem11-org-q074',
    recognition: 'Dạng rút gọn CTPT thành CTĐGN.',
    detailedSteps: [
      { order: 1, title: 'Tìm ước chung', explanation: 'Các chỉ số 2, 4, 2 có ước chung lớn nhất là 2.' },
      { order: 2, title: 'Chia đồng loạt', explanation: 'C₂H₄O₂ : 2 = CH₂O; B đúng.' }
    ],
    finalAnswer: 'B', commonMistakes: ['Chỉ chia một vài chỉ số.'], reviewSuggestions: ['Mọi chỉ số phải chia cùng một ước chung.']
  },
  {
    id: 'chem11-org-s075', questionId: 'chem11-org-q075',
    recognition: 'Dạng giới hạn thông tin của CTPT.',
    detailedSteps: [
      { order: 1, title: 'Xác định điều chắc chắn', explanation: 'Cùng CTPT nghĩa là cùng số nguyên tử mỗi loại trong phân tử.' },
      { order: 2, title: 'Xét cấu tạo', explanation: 'Các nguyên tử có thể liên kết khác nhau, nên C đúng.' }
    ],
    finalAnswer: 'C', commonMistakes: ['Đồng nhất cùng CTPT với cùng chất.'], reviewSuggestions: ['Ghi nhớ hiện tượng đồng phân sẽ được học ở Bài 13.']
  },
  {
    id: 'chem11-org-s076', questionId: 'chem11-org-q076',
    recognition: 'Dạng tìm tỉ lệ nguyên tử tối giản.',
    detailedSteps: [
      { order: 1, title: 'Tìm ước chung', explanation: 'Ước chung lớn nhất của 6, 12, 6 là 6.' },
      { order: 2, title: 'Rút gọn', explanation: 'C₆H₁₂O₆ : 6 = CH₂O; D đúng.' }
    ],
    finalAnswer: 'D', commonMistakes: ['Dừng ở C₃H₆O₃ dù chưa tối giản.'], reviewSuggestions: ['CTĐGN phải là bộ chỉ số nguyên tối giản cuối cùng.']
  },
  {
    id: 'chem11-org-s077', questionId: 'chem11-org-q077',
    recognition: 'Dạng CTĐGN + phân tử khối → CTPT.',
    detailedSteps: [
      { order: 1, title: 'Tính khối lượng CTĐGN', explanation: 'M(CH₂O) = 12 + 2 + 16 = 30.' },
      { order: 2, title: 'Tìm bội', explanation: 'n = 60/30 = 2 nên CTPT = (CH₂O)₂ = C₂H₄O₂; A đúng.' }
    ],
    finalAnswer: 'A', commonMistakes: ['Dùng CTĐGN làm CTPT mà không xét M.'], reviewSuggestions: ['Luôn tính n = M/M(CTĐGN).']
  },
  {
    id: 'chem11-org-s078', questionId: 'chem11-org-q078',
    recognition: 'Dạng tìm bội nguyên từ CTĐGN CH.',
    detailedSteps: [
      { order: 1, title: 'Tính khối lượng đơn vị', explanation: 'M(CH) = 12 + 1 = 13.' },
      { order: 2, title: 'Nhân chỉ số', explanation: 'n = 78/13 = 6 nên CTPT C₆H₆; B đúng.' }
    ],
    finalAnswer: 'B', commonMistakes: ['Nhân khối lượng nhưng không nhân cả hai chỉ số.'], reviewSuggestions: ['Bội n tác động lên toàn bộ CTĐGN.']
  },
  {
    id: 'chem11-org-s079', questionId: 'chem11-org-q079',
    recognition: 'Dạng kiểm tra tính hợp lệ của bội n.',
    detailedSteps: [
      { order: 1, title: 'Nhớ điều kiện', explanation: 'Số nguyên tử phải nguyên nên n phải là số nguyên dương.' },
      { order: 2, title: 'Đánh giá dữ kiện', explanation: 'n = 2,50 không hợp lệ; cần xem lại dữ kiện hoặc CTĐGN, nên C đúng.' }
    ],
    finalAnswer: 'C', commonMistakes: ['Làm tròn n tùy ý.'], reviewSuggestions: ['Không chữa dữ kiện không nhất quán bằng phép làm tròn.']
  },
  {
    id: 'chem11-org-s080', questionId: 'chem11-org-q080',
    recognition: 'Dạng đọc bảng CTĐGN–M và tìm CTPT.',
    detailedSteps: [
      { order: 1, title: 'Tính đơn vị tối giản', explanation: 'M(CH₂) = 14.' },
      { order: 2, title: 'Xác định bội', explanation: 'n = 56/14 = 4 nên CTPT C₄H₈; D đúng.' }
    ],
    finalAnswer: 'D', commonMistakes: ['Chọn C₂H₄ vì thấy chỉ số nhỏ quen thuộc.'], reviewSuggestions: ['Kiểm tra lại phân tử khối của phương án đã chọn.']
  },
  {
    id: 'chem11-org-s081', questionId: 'chem11-org-q081',
    recognition: 'Dạng tính phần trăm khối lượng từ công thức.',
    detailedSteps: [
      { order: 1, title: 'Tính phân tử khối', explanation: 'M(CH₄) = 12 + 4 = 16.' },
      { order: 2, title: 'Tính phần trăm C', explanation: '%C = 12/16 × 100% = 75,0%; A đúng.' }
    ],
    finalAnswer: 'A', commonMistakes: ['Dùng 1/5 là tỉ lệ số nguyên tử.'], reviewSuggestions: ['Phần trăm khối lượng phải dùng khối lượng, không dùng số hạt.']
  },
  {
    id: 'chem11-org-s082', questionId: 'chem11-org-q082',
    recognition: 'Dạng phần trăm một nguyên tố khi đã cho M.',
    detailedSteps: [
      { order: 1, title: 'Khối lượng oxygen', explanation: 'Một phân tử C₂H₆O có một O, đóng góp 16 đơn vị khối lượng.' },
      { order: 2, title: 'Chia cho M', explanation: '%O = 16/46 × 100% ≈ 34,8%; B đúng.' }
    ],
    finalAnswer: 'B', commonMistakes: ['Chia số nguyên tử O cho tổng số nguyên tử.'], reviewSuggestions: ['Viết tử số x·A(O) trước khi chia M.']
  },
  {
    id: 'chem11-org-s083', questionId: 'chem11-org-q083',
    recognition: 'Dạng so sánh thành phần phần trăm của các công thức cùng tỉ lệ tối giản.',
    detailedSteps: [
      { order: 1, title: 'Nhận quan hệ bội', explanation: 'C₆H₁₂O₆ = (CH₂O)₆.' },
      { order: 2, title: 'Suy ra tỉ lệ khối lượng', explanation: 'Nhân đồng loạt chỉ số làm cả tử và mẫu cùng tăng 6 lần, nên phần trăm từng nguyên tố không đổi; C đúng.' }
    ],
    finalAnswer: 'C', commonMistakes: ['Cho phân tử khối khác thì phần trăm bắt buộc khác.'], reviewSuggestions: ['Các bội của cùng CTĐGN có cùng thành phần phần trăm.']
  },
  {
    id: 'chem11-org-s084', questionId: 'chem11-org-q084',
    recognition: 'Dạng xác minh ngược một CTPT ứng viên.',
    detailedSteps: [
      { order: 1, title: 'Tính bội', explanation: 'M(CH₂O) = 30 nên n = 90/30 = 3.' },
      { order: 2, title: 'Tái tạo CTPT', explanation: '(CH₂O)₃ = C₃H₆O₃ và M = 90, nên D đúng.' }
    ],
    finalAnswer: 'D', commonMistakes: ['Chỉ nhìn công thức mà không kiểm tra M.'], reviewSuggestions: ['Kiểm tra cả bội nguyên và phân tử khối.']
  },
  {
    id: 'chem11-org-s085', questionId: 'chem11-org-q085',
    recognition: 'Dạng lập CTĐGN từ phần trăm C, H, O.',
    detailedSteps: [
      { order: 1, title: 'Đổi sang mol tương đối', explanation: 'C: 40/12 ≈ 3,33; H: 6,7/1 = 6,7; O: 53,3/16 ≈ 3,33.' },
      { order: 2, title: 'Chia nhỏ nhất', explanation: 'Tỉ lệ xấp xỉ 1:2:1 nên CTĐGN CH₂O; A đúng.' }
    ],
    finalAnswer: 'A', commonMistakes: ['Dùng 40:6,7:53,3 làm chỉ số.'], reviewSuggestions: ['Phần trăm phải chia nguyên tử khối trước khi lấy tỉ lệ.']
  },
  {
    id: 'chem11-org-s086', questionId: 'chem11-org-q086',
    recognition: 'Dạng phần trăm hydrocarbon hai nguyên tố.',
    detailedSteps: [
      { order: 1, title: 'Tính mol tương đối', explanation: 'n(C):n(H) = 80/12 : 20/1 = 6,667:20.' },
      { order: 2, title: 'Rút gọn', explanation: 'Chia 6,667 được 1:3 nên CTĐGN CH₃; B đúng.' }
    ],
    finalAnswer: 'B', commonMistakes: ['Rút 80:20 thành 4:1 mà bỏ nguyên tử khối.'], reviewSuggestions: ['Tỉ lệ khối lượng không phải tỉ lệ nguyên tử.']
  },
  {
    id: 'chem11-org-s087', questionId: 'chem11-org-q087',
    recognition: 'Dạng phần trăm tạo tỉ lệ mol không thể rút gọn thêm.',
    detailedSteps: [
      { order: 1, title: 'Tính mol', explanation: '52,2/12 ≈ 4,35; 13,0/1 = 13,0; 34,8/16 ≈ 2,175.' },
      { order: 2, title: 'Lấy tỉ lệ', explanation: 'Chia 2,175 được 2:6:1 nên CTĐGN C₂H₆O; C đúng.' }
    ],
    finalAnswer: 'C', commonMistakes: ['Cho công thức phải rút gọn thành CH₃O dù chỉ số O khi đó không nguyên.'], reviewSuggestions: ['Chỉ rút gọn khi mọi chỉ số có ước chung.']
  },
  {
    id: 'chem11-org-s088', questionId: 'chem11-org-q088',
    recognition: 'Dạng thiếu phần trăm O: lấy hiệu 100% trước.',
    detailedSteps: [
      { order: 1, title: 'Tìm phần trăm O', explanation: '%O = 100 − 54,5 − 9,1 = 36,4%.' },
      { order: 2, title: 'Lập tỉ lệ mol', explanation: '54,5/12 : 9,1 : 36,4/16 ≈ 2:4:1 nên C₂H₄O; D đúng.' }
    ],
    finalAnswer: 'D', commonMistakes: ['Bỏ qua oxygen vì đề không ghi trực tiếp %O.'], reviewSuggestions: ['Chỉ lấy hiệu khi đề xác nhận đã biết đủ các nguyên tố.']
  },
  {
    id: 'chem11-org-s089', questionId: 'chem11-org-q089',
    recognition: 'Dạng lập CTĐGN từ gam từng nguyên tố.',
    detailedSteps: [
      { order: 1, title: 'Đổi gam sang mol', explanation: 'C: 2,4/12 = 0,2; H: 0,4; O: 3,2/16 = 0,2.' },
      { order: 2, title: 'Rút tỉ lệ', explanation: '0,2:0,4:0,2 = 1:2:1 nên CH₂O; A đúng.' }
    ],
    finalAnswer: 'A', commonMistakes: ['Dùng 2,4:0,4:3,2 làm tỉ lệ nguyên tử.'], reviewSuggestions: ['Luôn đổi từng khối lượng thành mol nguyên tử.']
  },
  {
    id: 'chem11-org-s090', questionId: 'chem11-org-q090',
    recognition: 'Dạng khối lượng nguyên tố cho tỉ lệ không đối xứng.',
    detailedSteps: [
      { order: 1, title: 'Tính mol', explanation: 'C: 3,6/12 = 0,3; H: 0,6; O: 1,6/16 = 0,1.' },
      { order: 2, title: 'Chia nhỏ nhất', explanation: 'Tỉ lệ 3:6:1 nên CTĐGN C₃H₆O; B đúng.' }
    ],
    finalAnswer: 'B', commonMistakes: ['Chia sai nguyên tử khối oxygen.'], reviewSuggestions: ['Ghi A(C)=12, A(H)=1, A(O)=16 cạnh dữ kiện.']
  },
  {
    id: 'chem11-org-s091', questionId: 'chem11-org-q091',
    recognition: 'Dạng khối lượng được thiết kế bằng đúng nguyên tử khối.',
    detailedSteps: [
      { order: 1, title: 'Đổi sang mol', explanation: '12 g C, 1 g H, 16 g O tương ứng 1 mol nguyên tử mỗi loại.' },
      { order: 2, title: 'Viết tỉ lệ', explanation: 'C:H:O = 1:1:1 nên CTĐGN CHO; C đúng.' }
    ],
    finalAnswer: 'C', commonMistakes: ['Chép số gam thành C₁₂HO₁₆.'], reviewSuggestions: ['Chỉ số phản ánh số mol tương đối, không phản ánh số gam.']
  },
  {
    id: 'chem11-org-s092', questionId: 'chem11-org-q092',
    recognition: 'Dạng kiểm tra công thức đã tối giản từ khối lượng.',
    detailedSteps: [
      { order: 1, title: 'Tính tỉ lệ mol', explanation: '4,8/12 : 0,8/1 : 6,4/16 = 0,4:0,8:0,4 = 1:2:1.' },
      { order: 2, title: 'Viết CTĐGN', explanation: 'Bộ tối giản là CH₂O, không phải C₂H₄O₂; D đúng.' }
    ],
    finalAnswer: 'D', commonMistakes: ['Dừng ở bội 2 chưa tối giản.'], reviewSuggestions: ['Kiểm tra ước chung lần cuối trước khi chốt.']
  },
  {
    id: 'chem11-org-s093', questionId: 'chem11-org-q093',
    recognition: 'Dạng tỉ lệ có 0,5: nhân đồng loạt với 2.',
    detailedSteps: [
      { order: 1, title: 'Nhận phần thập phân', explanation: '1,5 = 3/2 nên cần khử mẫu 2.' },
      { order: 2, title: 'Nhân toàn bộ', explanation: '1:1,5:1 nhân 2 thành 2:3:2; A đúng.' }
    ],
    finalAnswer: 'A', commonMistakes: ['Làm tròn 1,5 thành 2.'], reviewSuggestions: ['Với x,5 thường thử nhân toàn bộ tỉ lệ với 2.']
  },
  {
    id: 'chem11-org-s094', questionId: 'chem11-org-q094',
    recognition: 'Dạng tỉ lệ gần 1/3 và 2/3: nhân đồng loạt với 3.',
    detailedSteps: [
      { order: 1, title: 'Nhận phân số gần đúng', explanation: '1,333 ≈ 4/3 và 0,667 ≈ 2/3.' },
      { order: 2, title: 'Khử mẫu', explanation: 'Nhân 3: 3:4:2 nên CTĐGN C₃H₄O₂; B đúng.' }
    ],
    finalAnswer: 'B', commonMistakes: ['Làm tròn thành 1:1:1.'], reviewSuggestions: ['Nhận 0,33; 0,67; 1,33 là dấu hiệu thử nhân 3.']
  },
  {
    id: 'chem11-org-s095', questionId: 'chem11-org-q095',
    recognition: 'Dạng tỉ lệ nửa đơn vị cần khử mẫu.',
    detailedSteps: [
      { order: 1, title: 'Chuyển dạng', explanation: '2,50 = 5/2.' },
      { order: 2, title: 'Nhân đồng loạt', explanation: '1:2,5 nhân 2 thành 2:5, nên CTĐGN C₂H₅; C đúng.' }
    ],
    finalAnswer: 'C', commonMistakes: ['Chỉ nhân chỉ số đang có phần thập phân.'], reviewSuggestions: ['Mọi thành phần của tỉ lệ phải nhân cùng một số.']
  },
  {
    id: 'chem11-org-s096', questionId: 'chem11-org-q096',
    recognition: 'Dạng kiểm tra bước tối giản cuối cùng.',
    detailedSteps: [
      { order: 1, title: 'Tìm ước chung', explanation: 'Các chỉ số 2, 4, 2 còn có ước chung 2.' },
      { order: 2, title: 'Rút gọn', explanation: 'Chia toàn bộ cho 2 thu CH₂O; D đúng.' }
    ],
    finalAnswer: 'D', commonMistakes: ['Thấy chỉ số nguyên là dừng ngay.'], reviewSuggestions: ['Nguyên chưa đủ; còn phải tối giản.']
  },
  {
    id: 'chem11-org-s097', questionId: 'chem11-org-q097',
    recognition: 'Dạng sản phẩm cháy → tỉ lệ C:H.',
    detailedSteps: [
      { order: 1, title: 'Tìm C', explanation: 'n(C) = n(CO₂) = 4,4/44 = 0,10 mol.' },
      { order: 2, title: 'Tìm H và rút tỉ lệ', explanation: 'n(H) = 2n(H₂O) = 2×1,8/18 = 0,20 mol; C:H = 1:2, A đúng.' }
    ],
    finalAnswer: 'A', commonMistakes: ['Cho n(H)=n(H₂O).'], reviewSuggestions: ['Một H₂O chứa hai nguyên tử H.']
  },
  {
    id: 'chem11-org-s098', questionId: 'chem11-org-q098',
    recognition: 'Dạng đốt cháy với lượng H₂O lớn hơn CO₂.',
    detailedSteps: [
      { order: 1, title: 'Quy đổi sản phẩm', explanation: 'n(C)=8,8/44=0,20; n(H)=2×5,4/18=0,60 mol.' },
      { order: 2, title: 'Rút gọn', explanation: 'C:H = 0,20:0,60 = 1:3; B đúng.' }
    ],
    finalAnswer: 'B', commonMistakes: ['Lấy 0,2:0,3 thành 2:3.'], reviewSuggestions: ['Nhân đôi số mol nước khi suy ra mol H nguyên tử.']
  },
  {
    id: 'chem11-org-s099', questionId: 'chem11-org-q099',
    recognition: 'Dạng hệ số bảo toàn hydrogen qua H₂O.',
    detailedSteps: [
      { order: 1, title: 'Đếm nguyên tử', explanation: 'Mỗi phân tử H₂O chứa 2 nguyên tử H.' },
      { order: 2, title: 'Quy đổi mol', explanation: 'n(H)=2×0,25=0,50 mol; C đúng.' }
    ],
    finalAnswer: 'C', commonMistakes: ['Bỏ hệ số 2.'], reviewSuggestions: ['Viết n(H)=2n(H₂O) trước khi thay số.']
  },
  {
    id: 'chem11-org-s100', questionId: 'chem11-org-q100',
    recognition: 'Dạng dữ liệu mol sản phẩm cháy trong bảng.',
    detailedSteps: [
      { order: 1, title: 'Suy ra mol nguyên tử', explanation: 'n(C)=0,20; n(H)=2×0,30=0,60.' },
      { order: 2, title: 'Tối giản', explanation: '0,20:0,60 = 1:3; D đúng.' }
    ],
    finalAnswer: 'D', commonMistakes: ['Chọn 2:3 từ số mol CO₂:H₂O.'], reviewSuggestions: ['Không dùng trực tiếp tỉ lệ hai sản phẩm.']
  },
  {
    id: 'chem11-org-s101', questionId: 'chem11-org-q101',
    recognition: 'Dạng đốt cháy chất chỉ chứa C,H,O: tìm O bằng hiệu khối lượng.',
    detailedSteps: [
      { order: 1, title: 'Tìm C và H', explanation: 'n(C)=0,10 → m(C)=1,2 g; n(H)=0,20 → m(H)=0,2 g.' },
      { order: 2, title: 'Tìm O và lập tỉ lệ', explanation: 'm(O)=3,0−1,2−0,2=1,6 g → n(O)=0,10; C:H:O=1:2:1, nên CH₂O; A đúng.' }
    ],
    finalAnswer: 'A', commonMistakes: ['Lấy oxygen trong CO₂ và H₂O làm oxygen của mẫu.'], reviewSuggestions: ['Chỉ dùng hiệu vì đề xác nhận chất chỉ chứa C,H,O.']
  },
  {
    id: 'chem11-org-s102', questionId: 'chem11-org-q102',
    recognition: 'Dạng phân tích cháy CHO cho tỉ lệ có oxygen ít hơn.',
    detailedSteps: [
      { order: 1, title: 'Tìm C và H', explanation: 'n(C)=8,8/44=0,20; n(H)=2×5,4/18=0,60; m(C)+m(H)=2,4+0,6=3,0 g.' },
      { order: 2, title: 'Tìm O và công thức', explanation: 'm(O)=4,6−3,0=1,6 → n(O)=0,10; tỉ lệ 2:6:1 nên C₂H₆O; B đúng.' }
    ],
    finalAnswer: 'B', commonMistakes: ['Rút 2:6:1 thành tỉ lệ không nguyên.'], reviewSuggestions: ['Chỉ rút khi toàn bộ chỉ số có ước chung.']
  },
  {
    id: 'chem11-org-s103', questionId: 'chem11-org-q103',
    recognition: 'Dạng kiểm tra điều kiện được phép dùng hiệu khối lượng cho O.',
    detailedSteps: [
      { order: 1, title: 'Đọc thành phần', explanation: 'Đề cho phép chất có N nên phần khối lượng còn lại có thể gồm cả N và O.' },
      { order: 2, title: 'Kết luận', explanation: 'Không thể gán toàn bộ phần còn lại cho O nếu thiếu dữ kiện loại trừ nguyên tố khác; C đúng.' }
    ],
    finalAnswer: 'C', commonMistakes: ['Mặc định mọi hợp chất hữu cơ chỉ chứa C,H,O.'], reviewSuggestions: ['Khoanh cụm “chỉ chứa C,H,O” trước khi dùng phép hiệu.']
  },
  {
    id: 'chem11-org-s104', questionId: 'chem11-org-q104',
    recognition: 'Dạng bảo toàn khối lượng trong phân tích cháy.',
    detailedSteps: [
      { order: 1, title: 'Tính C và H', explanation: 'n(C)=0,20 → m(C)=2,4 g; n(H)=2×3,6/18=0,40 → m(H)=0,4 g.' },
      { order: 2, title: 'Tính O và rút tỉ lệ', explanation: 'm(O)=6,0−2,4−0,4=3,2 → n(O)=0,20; tỉ lệ 0,2:0,4:0,2=1:2:1, nên CH₂O; D đúng.' }
    ],
    finalAnswer: 'D', commonMistakes: ['Tính oxygen từ tổng oxygen của sản phẩm cháy.'], reviewSuggestions: ['O₂ đốt cháy cũng cung cấp oxygen cho sản phẩm.']
  },
  {
    id: 'chem11-org-s105', questionId: 'chem11-org-q105',
    recognition: 'Dạng hoàn tất CTPT từ CTĐGN và M.',
    detailedSteps: [
      { order: 1, title: 'Tính bội', explanation: 'M(CH₂O)=30; n=180/30=6.' },
      { order: 2, title: 'Nhân chỉ số', explanation: '(CH₂O)₆=C₆H₁₂O₆; A đúng.' }
    ],
    finalAnswer: 'A', commonMistakes: ['Nhầm n với chỉ số riêng của carbon.'], reviewSuggestions: ['Nhân n cho tất cả nguyên tố.']
  },
  {
    id: 'chem11-org-s106', questionId: 'chem11-org-q106',
    recognition: 'Dạng CTĐGN hydrocarbon kết hợp phân tử khối.',
    detailedSteps: [
      { order: 1, title: 'Khối lượng CTĐGN', explanation: 'M(CH₂)=14.' },
      { order: 2, title: 'Tìm CTPT', explanation: 'n=56/14=4 nên CTPT C₄H₈; B đúng.' }
    ],
    finalAnswer: 'B', commonMistakes: ['Chọn C₂H₄ mà không kiểm tra M=28.'], reviewSuggestions: ['Tính lại M của phương án để xác nhận.']
  },
  {
    id: 'chem11-org-s107', questionId: 'chem11-org-q107',
    recognition: 'Dạng bội CTĐGN chứa ba nguyên tố.',
    detailedSteps: [
      { order: 1, title: 'Tính khối lượng đơn vị', explanation: 'M(C₂H₅O)=24+5+16=45.' },
      { order: 2, title: 'Nhân bội', explanation: 'n=90/45=2 nên CTPT C₄H₁₀O₂; C đúng.' }
    ],
    finalAnswer: 'C', commonMistakes: ['Nhân C,H nhưng quên nhân O.'], reviewSuggestions: ['Đặt ngoặc quanh toàn bộ CTĐGN trước khi nhân.']
  },
  {
    id: 'chem11-org-s108', questionId: 'chem11-org-q108',
    recognition: 'Dạng phát hiện dữ kiện CTĐGN–M không nhất quán.',
    detailedSteps: [
      { order: 1, title: 'Tính bội thử', explanation: 'M(CH₂O)=30 nên n=100/30=3,333…' },
      { order: 2, title: 'Kiểm tra điều kiện', explanation: 'n không phải số nguyên dương, nên không có CTPT phù hợp chính xác với dữ kiện; D đúng.' }
    ],
    finalAnswer: 'D', commonMistakes: ['Làm tròn n=3 để ép ra công thức.'], reviewSuggestions: ['Dữ kiện thực nghiệm có sai số phải được nêu; không tự ý làm tròn dữ kiện chính xác.']
  },
  {
    id:'chem11-org-s109',questionId:'chem11-org-q109',recognition:'Dạng phát biểu thuyết cấu tạo.',
    detailedSteps:[{order:1,title:'Nhớ hai điều kiện',explanation:'Nguyên tử phải đúng hóa trị và có trật tự nối xác định.'},{order:2,title:'Chọn',explanation:'A nêu đủ hai điều kiện.'}],finalAnswer:'A',commonMistakes:['Bỏ trật tự liên kết.'],reviewSuggestions:['Ghi cặp từ khóa hóa trị–trật tự.']
  },
  {
    id:'chem11-org-s110',questionId:'chem11-org-q110',recognition:'Dạng hóa trị carbon.',
    detailedSteps:[{order:1,title:'Nhớ quy ước',explanation:'Carbon trong cấu tạo hữu cơ phổ thông có hóa trị IV.'},{order:2,title:'Chọn',explanation:'B tương ứng IV.'}],finalAnswer:'B',commonMistakes:['Nhầm số oxi hóa với hóa trị.'],reviewSuggestions:['Đếm tổng bậc liên kết quanh C bằng 4.']
  },
  {
    id:'chem11-org-s111',questionId:'chem11-org-q111',recognition:'Dạng quan hệ cấu tạo–tính chất.',
    detailedSteps:[{order:1,title:'Xét thành phần',explanation:'Loại và số nguyên tử ảnh hưởng tính chất.'},{order:2,title:'Xét cấu tạo',explanation:'Trật tự liên kết cũng ảnh hưởng; C đúng.'}],finalAnswer:'C',commonMistakes:['Chỉ xét phân tử khối.'],reviewSuggestions:['Luôn xét thành phần và cấu tạo.']
  },
  {
    id:'chem11-org-s112',questionId:'chem11-org-q112',recognition:'Dạng tổng hợp nội dung thuyết.',
    detailedSteps:[{order:1,title:'Kiểm từng ý',explanation:'Carbon hóa trị IV và tạo nhiều kiểu mạch.'},{order:2,title:'Ghép hệ quả',explanation:'Trật tự nối ảnh hưởng tính chất; D đầy đủ.'}],finalAnswer:'D',commonMistakes:['Tuyệt đối hóa mạch thẳng.'],reviewSuggestions:['Ôn ba luận điểm chính của thuyết cấu tạo.']
  },
  {
    id:'chem11-org-s113',questionId:'chem11-org-q113',recognition:'Dạng kiểm tra hóa trị từ CTCT thu gọn.',
    detailedSteps:[{order:1,title:'Đếm liên kết C',explanation:'Mỗi C trong CH₃–CH₃ có ba C–H và một C–C.'},{order:2,title:'Kết luận',explanation:'Mỗi C đủ hóa trị IV; A đúng.'}],finalAnswer:'A',commonMistakes:['Chọn CH₄–CH₄ làm C có năm liên kết.'],reviewSuggestions:['Đếm bậc liên kết quanh từng C.']
  },
  {
    id:'chem11-org-s114',questionId:'chem11-org-q114',recognition:'Dạng khả năng tạo mạch carbon.',
    detailedSteps:[{order:1,title:'Liệt kê khung',explanation:'Carbon tạo mạch thẳng, nhánh và vòng.'},{order:2,title:'Xét liên kết',explanation:'Có thể có liên kết đơn hoặc bội; B đúng.'}],finalAnswer:'B',commonMistakes:['Chỉ nhớ mạch thẳng.'],reviewSuggestions:['Vẽ ví dụ cho từng kiểu khung.']
  },
  {
    id:'chem11-org-s115',questionId:'chem11-org-q115',recognition:'Dạng phát hiện carbon vượt hóa trị.',
    detailedSteps:[{order:1,title:'Đếm H',explanation:'CH₅ đã có năm liên kết C–H.'},{order:2,title:'So hóa trị',explanation:'Vượt hóa trị IV nên C sai cấu tạo và là đáp án.'}],finalAnswer:'C',commonMistakes:['Chỉ đếm kí hiệu nguyên tố.'],reviewSuggestions:['Tổng bậc liên kết của C trung hòa phải bằng 4.']
  },
  {
    id:'chem11-org-s116',questionId:'chem11-org-q116',recognition:'Dạng cùng CTPT nhưng khác cách nối.',
    detailedSteps:[{order:1,title:'So CTPT',explanation:'Cả hai đều C₂H₆O.'},{order:2,title:'So liên kết O',explanation:'O gắn H ở ethanol nhưng nằm giữa hai C ở ether; D đúng.'}],finalAnswer:'D',commonMistakes:['Cho cùng CTPT là cùng chất.'],reviewSuggestions:['So “hàng xóm” trực tiếp của mỗi nguyên tử.']
  },
  {
    id:'chem11-org-s117',questionId:'chem11-org-q117',recognition:'Dạng nhận CTCT thu gọn alcohol.',
    detailedSteps:[{order:1,title:'Tìm nhóm OH',explanation:'Ethanol có khung hai C và nhóm –OH.'},{order:2,title:'Viết',explanation:'CH₃CH₂OH thể hiện đúng cách nối; A.'}],finalAnswer:'A',commonMistakes:['Chọn CTPT C₂H₆O.'],reviewSuggestions:['CTCT phải thể hiện vị trí nhóm OH.']
  },
  {
    id:'chem11-org-s118',questionId:'chem11-org-q118',recognition:'Dạng phân biệt CTPT và CTCT.',
    detailedSteps:[{order:1,title:'Đọc C₂H₆O',explanation:'Chỉ cho thành phần phân tử.'},{order:2,title:'Đọc CH₃CH₂OH',explanation:'Cho cách nối nhóm CH₃–CH₂–OH; B đúng.'}],finalAnswer:'B',commonMistakes:['Cho hai công thức cùng lượng thông tin.'],reviewSuggestions:['Hỏi công thức có cho biết O gắn với ai không.']
  },
  {
    id:'chem11-org-s119',questionId:'chem11-org-q119',recognition:'Dạng đọc chuỗi CTCT thu gọn.',
    detailedSteps:[{order:1,title:'Đọc theo thứ tự',explanation:'CH₃–O–CH₃.'},{order:2,title:'Kết luận',explanation:'O nằm giữa hai nhóm CH₃; C đúng.'}],finalAnswer:'C',commonMistakes:['Coi O là ion riêng.'],reviewSuggestions:['Chèn dấu nối ẩn khi đọc công thức thu gọn.']
  },
  {
    id:'chem11-org-s120',questionId:'chem11-org-q120',recognition:'Dạng checklist kiểm CTCT.',
    detailedSteps:[{order:1,title:'Kiểm cục bộ',explanation:'Kiểm hóa trị và cách nối từng nguyên tử.'},{order:2,title:'Kiểm tổng thể',explanation:'Đếm lại nguyên tử khớp CTPT; D đúng.'}],finalAnswer:'D',commonMistakes:['Chỉ đếm carbon.'],reviewSuggestions:['Dùng hai vòng kiểm: hóa trị rồi CTPT.']
  },
  {
    id:'chem11-org-s121',questionId:'chem11-org-q121',recognition:'Dạng định nghĩa đồng đẳng.',
    detailedSteps:[{order:1,title:'Cấu tạo',explanation:'Các chất phải tương tự kiểu cấu tạo và tính chất hóa học.'},{order:2,title:'Thành phần',explanation:'Hơn kém một hay nhiều CH₂; A đúng.'}],finalAnswer:'A',commonMistakes:['Chỉ nhớ chênh CH₂.'],reviewSuggestions:['Đồng đẳng = tương tự + chênh CH₂.']
  },
  {
    id:'chem11-org-s122',questionId:'chem11-org-q122',recognition:'Dạng nhận cặp alkane đồng đẳng.',
    detailedSteps:[{order:1,title:'Kiểm dãy',explanation:'CH₄ và C₂H₆ đều thỏa dạng alkane.'},{order:2,title:'Kiểm chênh',explanation:'Hơn kém CH₂; B đúng.'}],finalAnswer:'B',commonMistakes:['Chọn chất cùng số H tương đối.'],reviewSuggestions:['Kiểm cùng kiểu liên kết trước.']
  },
  {
    id:'chem11-org-s123',questionId:'chem11-org-q123',recognition:'Dạng phản biện điều kiện thiếu.',
    detailedSteps:[{order:1,title:'Kiểm chênh',explanation:'CH₂ chỉ là dấu hiệu thành phần.'},{order:2,title:'Kiểm cấu tạo',explanation:'Còn cần cùng kiểu cấu tạo/nhóm chức; C đúng.'}],finalAnswer:'C',commonMistakes:['Xem chênh CH₂ là đủ.'],reviewSuggestions:['Luôn kiểm nhóm chức.']
  },
  {
    id:'chem11-org-s124',questionId:'chem11-org-q124',recognition:'Dạng so sánh đồng đẳng–đồng phân.',
    detailedSteps:[{order:1,title:'Đồng đẳng',explanation:'Khác CTPT theo bội CH₂ trong cùng dãy.'},{order:2,title:'Đồng phân',explanation:'Cùng CTPT, khác cấu tạo; D đúng.'}],finalAnswer:'D',commonMistakes:['Đảo hai định nghĩa.'],reviewSuggestions:['Dùng từ khóa khác CTPT/cùng CTPT.']
  },
  {
    id:'chem11-org-s125',questionId:'chem11-org-q125',recognition:'Dạng cặp alcohol đồng đẳng.',
    detailedSteps:[{order:1,title:'Kiểm nhóm chức',explanation:'CH₃OH và C₂H₅OH cùng nhóm –OH alcohol.'},{order:2,title:'Kiểm chênh',explanation:'Hai công thức hơn kém CH₂; A.'}],finalAnswer:'A',commonMistakes:['Chọn ether vì có O.'],reviewSuggestions:['Cùng nguyên tố chưa đồng nghĩa cùng nhóm chức.']
  },
  {
    id:'chem11-org-s126',questionId:'chem11-org-q126',recognition:'Dạng nhận alkane theo công thức.',
    detailedSteps:[{order:1,title:'Kiểm công thức chung',explanation:'C₃H₈ và C₄H₁₀ đều CnH₂n+2.'},{order:2,title:'Kiểm chênh',explanation:'Chênh CH₂; B đúng.'}],finalAnswer:'B',commonMistakes:['Ghép alkane với alkene.'],reviewSuggestions:['Kiểm số H theo loại dãy.']
  },
  {
    id:'chem11-org-s127',questionId:'chem11-org-q127',recognition:'Dạng cùng CTPT nhưng khác nhóm chức.',
    detailedSteps:[{order:1,title:'So CTPT',explanation:'Cả hai là C₂H₆O.'},{order:2,title:'So cấu tạo',explanation:'Một alcohol, một ether nên là đồng phân, không đồng đẳng; C đúng.'}],finalAnswer:'C',commonMistakes:['Thấy cùng O là cùng dãy.'],reviewSuggestions:['Xác định vị trí O.']
  },
  {
    id:'chem11-org-s128',questionId:'chem11-org-q128',recognition:'Dạng aldehyde đồng đẳng.',
    detailedSteps:[{order:1,title:'Kiểm nhóm',explanation:'Cả hai có –CHO.'},{order:2,title:'Kiểm thành phần',explanation:'Hơn kém CH₂ nên đồng đẳng; D.'}],finalAnswer:'D',commonMistakes:['Gọi đồng phân dù CTPT khác.'],reviewSuggestions:['So CTPT trước khi gọi đồng phân.']
  },
  {
    id:'chem11-org-s129',questionId:'chem11-org-q129',recognition:'Dạng tìm chất kế tiếp trong dãy.',
    detailedSteps:[{order:1,title:'Cộng nhóm',explanation:'Thành viên kế tiếp hơn C₃H₈ một CH₂.'},{order:2,title:'Tính',explanation:'C₃H₈ + CH₂ = C₄H₁₀; A.'}],finalAnswer:'A',commonMistakes:['Chỉ cộng C.'],reviewSuggestions:['Cộng đồng thời C₁H₂.']
  },
  {
    id:'chem11-org-s130',questionId:'chem11-org-q130',recognition:'Dạng tìm thành viên liền trước.',
    detailedSteps:[{order:1,title:'Giữ nhóm chức',explanation:'Vẫn là alcohol –OH.'},{order:2,title:'Trừ CH₂',explanation:'C₃H₇OH − CH₂ = C₂H₅OH; B.'}],finalAnswer:'B',commonMistakes:['Đổi nhóm chức.'],reviewSuggestions:['Giữ phần nhóm chức khi dịch trong dãy.']
  },
  {
    id:'chem11-org-s131',questionId:'chem11-org-q131',recognition:'Dạng dùng chênh phân tử khối.',
    detailedSteps:[{order:1,title:'Tính ΔM',explanation:'M(CH₂)=14.'},{order:2,title:'Kết hợp cấu tạo',explanation:'Cùng nhóm chức và ΔM=14 gợi ý đồng đẳng kế tiếp; C.'}],finalAnswer:'C',commonMistakes:['Dùng ΔM=14 một mình.'],reviewSuggestions:['Chỉ kết luận sau khi kiểm loại cấu tạo.']
  },
  {
    id:'chem11-org-s132',questionId:'chem11-org-q132',recognition:'Dạng kiểm dãy liên tiếp.',
    detailedSteps:[{order:1,title:'So từng bước',explanation:'CH₄→C₂H₆→C₃H₈ mỗi bước cộng CH₂.'},{order:2,title:'Kết luận',explanation:'Tất cả cùng dãy alkane; D.'}],finalAnswer:'D',commonMistakes:['Chỉ kiểm hai chất đầu.'],reviewSuggestions:['Kiểm mọi cặp liên tiếp.']
  },
  {
    id:'chem11-org-s133',questionId:'chem11-org-q133',recognition:'Dạng định nghĩa đồng phân.',
    detailedSteps:[{order:1,title:'Điều kiện một',explanation:'Hai chất phải cùng CTPT.'},{order:2,title:'Điều kiện hai',explanation:'Cách nối nguyên tử khác nhau; A.'}],finalAnswer:'A',commonMistakes:['Nhầm với đồng đẳng.'],reviewSuggestions:['Đồng phân: cùng phân tử, khác cấu tạo.']
  },
  {
    id:'chem11-org-s134',questionId:'chem11-org-q134',recognition:'Dạng đồng phân chức C₂H₆O.',
    detailedSteps:[{order:1,title:'So CTPT',explanation:'Cả hai có C₂H₆O.'},{order:2,title:'So O',explanation:'O gắn khác nhau nên hai chất đồng phân; B.'}],finalAnswer:'B',commonMistakes:['Gọi đồng đẳng vì đều có O.'],reviewSuggestions:['So cách nối, không chỉ nguyên tố.']
  },
  {
    id:'chem11-org-s135',questionId:'chem11-org-q135',recognition:'Dạng nhận hai cách trình bày cùng chất.',
    detailedSteps:[{order:1,title:'Bỏ kiểu nét',explanation:'Cả hai đều mạch C–C–C.'},{order:2,title:'Kết luận',explanation:'Liên kết không đổi nên cùng propane; C.'}],finalAnswer:'C',commonMistakes:['Khác hình thức là gọi đồng phân.'],reviewSuggestions:['So bảng liên kết thay vì kiểu chữ.']
  },
  {
    id:'chem11-org-s136',questionId:'chem11-org-q136',recognition:'Dạng checklist nhận đồng phân.',
    detailedSteps:[{order:1,title:'So CTPT',explanation:'Phải giống hệt.'},{order:2,title:'So liên kết',explanation:'Phải khác thực sự, không do xoay/viết ngược; D.'}],finalAnswer:'D',commonMistakes:['Chỉ nhìn hình khác.'],reviewSuggestions:['Chuẩn hóa cách viết trước khi so.']
  },
  {
    id:'chem11-org-s137',questionId:'chem11-org-q137',recognition:'Dạng hai khung C₄H₁₀.',
    detailedSteps:[{order:1,title:'Khung thẳng',explanation:'CH₃CH₂CH₂CH₃.'},{order:2,title:'Khung nhánh',explanation:'(CH₃)₃CH cùng CTPT nhưng khác khung; A.'}],finalAnswer:'A',commonMistakes:['Bỏ khung nhánh.'],reviewSuggestions:['Liệt kê theo độ dài mạch chính.']
  },
  {
    id:'chem11-org-s138',questionId:'chem11-org-q138',recognition:'Dạng đồng phân aldehyde–ketone.',
    detailedSteps:[{order:1,title:'Đếm CTPT',explanation:'Cả hai đều C₃H₆O.'},{order:2,title:'So carbonyl',explanation:'Một –CHO, một >C=O nên khác cấu tạo; B.'}],finalAnswer:'B',commonMistakes:['Cho khác nhóm chức là khác CTPT.'],reviewSuggestions:['Đếm nguyên tử trước khi xét nhóm.']
  },
  {
    id:'chem11-org-s139',questionId:'chem11-org-q139',recognition:'Dạng loại quan hệ đồng phân.',
    detailedSteps:[{order:1,title:'So CTPT',explanation:'C₂H₆ và C₃H₈ khác CTPT.'},{order:2,title:'Xác định quan hệ',explanation:'Cùng dãy alkane và hơn kém CH₂ nên đồng đẳng; C.'}],finalAnswer:'C',commonMistakes:['Cùng dãy là gọi đồng phân.'],reviewSuggestions:['Đồng phân bắt buộc cùng CTPT.']
  },
  {
    id:'chem11-org-s140',questionId:'chem11-org-q140',recognition:'Dạng loại trùng do viết ngược.',
    detailedSteps:[{order:1,title:'Đánh số mạch',explanation:'Hai hướng đều cho cùng chuỗi bốn C.'},{order:2,title:'Kết luận',explanation:'Không đổi cách nối nên cùng chất; D.'}],finalAnswer:'D',commonMistakes:['Đếm mỗi hướng là một cấu tạo.'],reviewSuggestions:['Đảo chiều mạch trước khi kết luận khác.']
  },
  {
    id:'chem11-org-s141',questionId:'chem11-org-q141',recognition:'Dạng đếm khung alkane C₄.',
    detailedSteps:[{order:1,title:'Mạch thẳng',explanation:'Có n-butane.'},{order:2,title:'Mạch nhánh',explanation:'Có isobutane; tổng 2, A.'}],finalAnswer:'A',commonMistakes:['Chỉ viết mạch thẳng.'],reviewSuggestions:['Sau mạch thẳng, giảm mạch chính và tạo nhánh.']
  },
  {
    id:'chem11-org-s142',questionId:'chem11-org-q142',recognition:'Dạng đếm khung alkane C₅.',
    detailedSteps:[{order:1,title:'Liệt kê',explanation:'Mạch 5; mạch 4 có một methyl; mạch 3 có hai methyl cùng carbon.'},{order:2,title:'Loại trùng',explanation:'Ba khung khác nhau nên B.'}],finalAnswer:'B',commonMistakes:['Đếm vị trí đối xứng hai lần.'],reviewSuggestions:['Chuẩn hóa mạch chính dài nhất.']
  },
  {
    id:'chem11-org-s143',questionId:'chem11-org-q143',recognition:'Dạng liệt kê C₂H₆O theo vị trí O.',
    detailedSteps:[{order:1,title:'O ở nhóm OH',explanation:'CH₃CH₂OH.'},{order:2,title:'O nối hai C',explanation:'CH₃OCH₃; tổng 2 nên C.'}],finalAnswer:'C',commonMistakes:['Chỉ xét alcohol.'],reviewSuggestions:['Thử các kiểu nối hợp lệ của heteroatom.']
  },
  {
    id:'chem11-org-s144',questionId:'chem11-org-q144',recognition:'Dạng quy trình liệt kê không bỏ sót/không trùng.',
    detailedSteps:[{order:1,title:'Sinh cấu tạo',explanation:'Liệt kê khung rồi vị trí nhóm/liên kết hợp lệ.'},{order:2,title:'Kiểm và loại',explanation:'Kiểm hóa trị, CTPT, đối xứng và cấu tạo trùng; D.'}],finalAnswer:'D',commonMistakes:['Viết ngẫu nhiên hoặc chỉ mạch thẳng.'],reviewSuggestions:['Dùng cây liệt kê theo khung carbon.']
  }
];
