import type { Solution } from '@/types';

const solution = (
  questionId: string,
  finalAnswer: string,
  recognition: string,
  firstMove: string,
  explanation: string,
  commonMistake: string,
  reviewSuggestion: string
): Solution => ({
  id: `${questionId}-solution`,
  questionId,
  recognition: `Dạng bài: ${recognition}`,
  detailedSteps: [
    { order: 1, title: 'Dấu hiệu nhận biết và cách bắt đầu', explanation: firstMove },
    { order: 2, title: 'Áp dụng vào câu hỏi', explanation }
  ],
  finalAnswer,
  commonMistakes: [commonMistake],
  reviewSuggestions: [reviewSuggestion]
});

export const m3GapFillSolutions: Solution[] = [
  solution('chem10-m3-gf001', 'B', 'Quy tắc octet và ý nghĩa', 'Thấy đề hỏi bản chất octet, hãy tìm phát biểu nói về xu hướng đạt lớp electron ngoài cùng bền; tránh hiểu “8 electron” như một mệnh lệnh tuyệt đối.', 'Nhiều nguyên tử nhường, nhận hoặc dùng chung electron để đạt cấu hình bền kiểu khí hiếm. Vì vậy B mô tả đúng.', 'Cho rằng mọi nguyên tử trong mọi hợp chất đều bắt buộc thỏa đúng 8 electron.', 'Ôn phạm vi và giới hạn của quy tắc octet.'),
  solution('chem10-m3-gf002', '3', 'Viết quá trình tạo cation', 'Dấu hiệu là nguyên tử kim loại tạo ion dương. Số electron nhường bằng độ lớn điện tích dương của ion.', '$Al\rightarrow Al^{3+}+3e$, nên một nguyên tử Al nhường 3 electron.', 'Viết Al nhận 3e hoặc gắn điện tích âm sau khi nhường electron.', 'Ôn quan hệ giữa nhường electron và cation.'),
  solution('chem10-m3-gf003', '2', 'Viết quá trình tạo anion', 'Dấu hiệu là phi kim có 6 electron ngoài cùng và tạo ion âm. Hãy tính số electron còn thiếu để đủ 8.', 'Sulfur còn thiếu $8-6=2$ electron: $S+2e\rightarrow S^{2-}$.', 'Lấy 6 làm số electron cần nhận thay vì số electron đang có.', 'Ôn cách suy điện tích anion từ electron lớp ngoài cùng.'),
  solution('chem10-m3-gf004', 'B', 'Từ Z suy ion bền rồi lập công thức', 'Câu có Z của hai nguyên tố và hỏi công thức: viết cấu hình ngoài cùng, suy ion bền, rồi cân bằng tổng điện tích.', 'Z=12 cho $X^{2+}$; Z=9 cho $Y^-$. Một $X^{2+}$ cần hai $Y^-$ nên công thức là $XY_2$.', 'Hoán đổi điện tích thành chỉ số nhưng không kiểm tra tổng điện tích bằng 0.', 'Ôn chuỗi Z → cấu hình → ion → công thức.'),

  solution('chem10-m3-gf005', 'A', 'Nhận diện liên kết ion', 'Tìm cặp kim loại điển hình–phi kim điển hình có xu hướng chuyển electron.', 'K dễ nhường 1e còn F dễ nhận 1e, nên K và F tạo hợp chất ion điển hình.', 'Dùng hiệu độ âm điện như quy tắc tuyệt đối mà bỏ qua bản chất các nguyên tố.', 'Ôn sự hình thành ion và lực hút giữa ion trái dấu.'),
  solution('chem10-m3-gf006', 'Al2S3', 'Lập công thức ion theo trung hòa điện tích', 'Viết điện tích hai ion và tìm bội chung nhỏ nhất của 3 và 2.', 'Cần $2Al^{3+}$ cho tổng +6 và $3S^{2-}$ cho tổng −6, nên công thức tối giản là $Al_2S_3$.', 'Viết $Al_3S_2$ do đổi chéo máy móc không kiểm tra điện tích.', 'Luôn kiểm tra tổng điện tích sau khi lập công thức.'),
  solution('chem10-m3-gf007', 'B', 'Phân biệt mạng tinh thể ion với phân tử', 'Dấu hiệu là đề hỏi cấu trúc NaCl rắn. Hãy nghĩ đến mạng ion kéo dài, không phải các phân tử riêng lẻ.', 'Trong tinh thể, mỗi ion tương tác với nhiều ion trái dấu xung quanh; NaCl chỉ biểu diễn tỉ lệ 1:1.', 'Gọi một cặp Na⁺–Cl⁻ trong mạng là một phân tử NaCl độc lập.', 'Ôn khái niệm đơn vị công thức của hợp chất ion.'),
  solution('chem10-m3-gf008', 'A', 'Suy loại chất từ dữ liệu dẫn điện', 'Tìm mẫu không dẫn khi rắn nhưng dẫn khi nóng chảy và trong dung dịch: đó là dấu hiệu ion bị cố định rồi trở nên chuyển động được.', 'Mẫu A có đúng ba dấu hiệu của hợp chất ion tan: rắn không dẫn, nóng chảy và dung dịch đều dẫn.', 'Cho rằng chất ion rắn dẫn điện vì bản thân ion có điện tích.', 'Ôn điều kiện để hạt mang điện có thể chuyển động có hướng.'),

  solution('chem10-m3-gf009', 'A', 'Phân loại liên kết sigma và pi', 'Dấu hiệu là liên kết đơn. Liên kết đơn thông thường chỉ có một phần xen phủ theo trục nối hai hạt nhân.', 'Phần xen phủ theo trục tạo một liên kết $\sigma$; chưa có xen phủ bên nên không có $\pi$.', 'Cho rằng một cặp electron đồng nghĩa với một liên kết pi.', 'Ôn cấu tạo liên kết đơn, đôi và ba.'),
  solution('chem10-m3-gf010', '2', 'Đếm liên kết pi trong liên kết ba', 'Liên kết ba luôn được tách thành một $\sigma$ và hai $\pi$.', '$N\equiv N$ là liên kết ba nên chứa 2 liên kết $\pi$.', 'Đếm cả ba thành liên kết pi.', 'Ghi nhớ: đơn = 1σ; đôi = 1σ + 1π; ba = 1σ + 2π.'),
  solution('chem10-m3-gf011', 'C', 'Đếm sigma và pi từ công thức cấu tạo', 'Đếm mỗi đoạn nối hai nguyên tử có một sigma; mỗi liên kết đôi đóng góp thêm một pi.', '$O=C=O$ có hai liên kết đôi: tổng cộng 2σ và 2π.', 'Đếm mỗi nét của liên kết đôi thành hai sigma.', 'Tập chuyển công thức cấu tạo sang số σ và π.'),
  solution('chem10-m3-gf012', 'B', 'Đếm sigma và pi trong phân tử nhiều liên kết', 'Đếm bốn liên kết C–H và khung C=C; liên kết đôi C=C gồm một sigma và một pi.', 'Có 4σ từ C–H, thêm 1σ và 1π từ C=C: tổng 5σ và 1π.', 'Bỏ sót sigma nằm trong liên kết đôi.', 'Luôn đếm khung sigma trước, rồi cộng số pi.'),
  solution('chem10-m3-gf013', 'C', 'So sánh độ bền theo bậc liên kết', 'Khi cùng một cặp nguyên tử, bậc liên kết lớn hơn thường làm liên kết bền hơn.', 'C≡C có bậc liên kết 3 nên thường bền hơn C=C và C–C.', 'Áp dụng quy luật này cho các cặp nguyên tử khác nhau mà không xét dữ liệu.', 'Ôn quan hệ có điều kiện giữa bậc, độ dài và năng lượng liên kết.'),
  solution('chem10-m3-gf014', 'B', 'Quan hệ bậc liên kết–độ dài–độ bền', 'Dấu hiệu là so cùng cặp nguyên tử khi tăng bậc liên kết.', 'Mật độ electron liên kết tăng làm hạt nhân được giữ gần hơn: liên kết ngắn hơn và thường bền hơn.', 'Kết luận liên kết nhiều thành phần thì phải dài hơn.', 'Lập bảng đơn → đôi → ba về độ dài và độ bền.'),
  solution('chem10-m3-gf015', 'A', 'Đọc bảng năng lượng liên kết', 'Đề đã cho bảng; chỉ so các giá trị cùng đơn vị. Giá trị lớn hơn nghĩa là cần nhiều năng lượng hơn để phá.', '$E_{H-H}=436$ lớn hơn 431 và 243 kJ/mol, nên H–H cần nhiều năng lượng nhất.', 'Chọn liên kết có tên dài hơn thay vì đọc số liệu.', 'Ôn ý nghĩa vật lí của năng lượng liên kết.'),
  solution('chem10-m3-gf016', '872', 'Quy đổi năng lượng theo số mol liên kết', 'Nhân năng lượng cho một mol liên kết với số mol liên kết thực sự bị phá.', '$E=2\times436=872$ kJ.', 'Nhân theo số nguyên tử thay vì số mol liên kết.', 'Ôn đơn vị kJ/mol liên kết.'),
  solution('chem10-m3-gf017', '8', 'Tính tổng electron hóa trị', 'Cộng electron hóa trị của nguyên tử trung tâm và các nguyên tử ngoài.', 'N góp 5e; ba H góp $3\times1e$. Tổng là $5+3=8e$.', 'Chỉ đếm electron tham gia liên kết và bỏ cặp electron tự do.', 'Ôn bước đầu tiên khi viết Lewis.'),
  solution('chem10-m3-gf018', '32', 'Tính electron hóa trị của ion nhiều nguyên tử', 'Cộng electron hóa trị của các nguyên tử rồi cộng thêm electron bằng độ lớn điện tích âm.', 'S góp 6e, bốn O góp 24e, điện tích $2-$ thêm 2e: tổng $6+24+2=32e$.', 'Trừ 2e vì nhìn thấy điện tích âm.', 'Với anion phải cộng electron; với cation phải trừ electron.'),

  solution('chem10-m3-gf019', '0.89', 'Tính hiệu độ âm điện', 'Lấy giá trị lớn trừ giá trị nhỏ và giữ đủ độ chính xác của dữ liệu.', '$\Delta\chi=3{,}44-2{,}55=0{,}89$.', 'Cộng hai độ âm điện hoặc lấy kết quả âm.', 'Ôn cách dùng Δχ để so mức độ phân cực.'),
  solution('chem10-m3-gf020', 'A', 'Xác định chiều phân cực liên kết', 'Cặp electron lệch về nguyên tử có độ âm điện lớn hơn; nguyên tử đó mang $\delta^-$.', 'N âm điện hơn H nên N là đầu mang điện tích riêng phần âm.', 'Dùng kích thước nguyên tử thay cho độ âm điện.', 'Vẽ mũi tên moment liên kết hướng về nguyên tử âm điện hơn.'),
  solution('chem10-m3-gf021', 'C', 'Phân biệt phân cực liên kết và phân tử', 'Sau khi xác nhận liên kết phân cực, phải xét hình học và tổng vector moment liên kết.', 'CO₂ thẳng và đối xứng; hai moment C=O bằng nhau, ngược chiều nên triệt tiêu.', 'Dừng ở bước “có liên kết phân cực” rồi kết luận phân tử phân cực.', 'Ôn quy trình hai bước: liên kết → hình học → tổng moment.'),
  solution('chem10-m3-gf022', 'A', 'Vận dụng độ phân cực vào độ tan', 'Nhận diện quy tắc gần đúng “tương đồng hòa tan tương đồng” và kiểm tra đề đã nói các yếu tố khác tương đương.', 'Tương tác giữa chất phân cực và dung môi phân cực thường thuận lợi hơn, nên chọn A.', 'Biến quy tắc gần đúng thành quy luật tuyệt đối cho mọi chất.', 'Ôn mối liên hệ giữa phân cực và lực tương tác.'),

  solution('chem10-m3-gf023', 'B', 'Nhận diện chất tạo liên kết hydrogen', 'Tìm H gắn trực tiếp với F, O hoặc N và có tâm nhận với cặp electron tự do.', 'NH₃ có liên kết N–H và cặp electron tự do trên N nên các phân tử có thể tạo liên kết hydrogen.', 'Cho rằng mọi phân tử chứa H đều tạo liên kết hydrogen.', 'Ôn điều kiện cho–nhận của liên kết hydrogen.'),
  solution('chem10-m3-gf024', 'B', 'Phân biệt liên kết trong và giữa phân tử', 'Xác định hai nguyên tử đang xét thuộc cùng hay khác phân tử.', 'O–H trong một phân tử là cộng hóa trị; lực hút H$\delta^+$…O giữa hai phân tử là liên kết hydrogen.', 'Gọi chính liên kết O–H là liên kết hydrogen.', 'Vẽ ít nhất hai phân tử khi biểu diễn liên kết hydrogen.'),
  solution('chem10-m3-gf025', 'A', 'Giải thích dữ liệu nhiệt độ sôi bằng lực liên phân tử', 'Khối lượng mol bằng nhau nên tìm khác biệt cấu trúc có thể tạo tương tác mạnh hơn.', 'Ethanol có nhóm O–H nên tạo mạng liên kết hydrogen; ether không tự cho liên kết H theo cách đó.', 'Quy nhiệt độ sôi cho khối lượng mol dù bảng cho hai giá trị bằng nhau.', 'Ôn cách đọc dữ liệu trước khi chọn loại lực tương tác.'),
  solution('chem10-m3-gf026', 'B', 'Giải thích xu hướng lực London', 'Dãy khí hiếm không tạo liên kết hydrogen; xét kích thước đám mây electron và khả năng phân cực.', 'Xuống dãy, đám mây electron lớn và dễ biến dạng hơn, lực London mạnh hơn nên nhiệt độ sôi tăng.', 'Cho rằng khi sôi phải phá liên kết cộng hóa trị.', 'Ôn lực London và sự phân cực tức thời.'),
];
