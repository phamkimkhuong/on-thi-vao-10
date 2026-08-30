import { chemProblem, chemistryTable } from './helpers';

const topic = 'chem10-adv-atom';

export const atomProblems = [
  chemProblem(topic, {
    content: 'Nguyên tố X có hai đồng vị bền ⁶³X và ⁶⁵X. Nguyên tử khối trung bình của X là 63,54. Phần trăm số nguyên tử ⁶⁵X là',
    correct: '27%', distractors: ['46%', '54%', '73%'],
    insight: 'Nguyên tử khối trung bình là trung bình có trọng số theo tỉ lệ số nguyên tử, không phải trung bình cộng hai số khối.',
    principle: 'Đặt phần mol đồng vị nặng là x thì 63(1 − x) + 65x = 63,54.',
    reasoning: [
      { title: 'Lập phương trình trung bình', explanation: 'Gọi x là phần số nguyên tử của ⁶⁵X; phần của ⁶³X là 1 − x.' },
      { title: 'Giải tỉ lệ đồng vị', explanation: 'Từ 63 + 2x = 63,54 suy ra x = 0,27.' },
      { title: 'Đổi sang phần trăm', explanation: 'Nhân 0,27 với 100% được 27%.', result: '27%' }
    ],
    mistakes: ['Lấy (63 + 65)/2 rồi kết luận hai đồng vị có tỉ lệ bằng nhau.', 'Dùng 63,54/65 làm tỉ lệ đồng vị nặng.', 'Tính đúng x = 0,27 nhưng chọn 73% là phần đồng vị nhẹ.'],
    tags: ['đồng vị', 'nguyên tử khối trung bình']
  }),
  chemProblem(topic, {
    content: 'Phổ khối của nguyên tố Y chỉ có ba vạch ứng với các đồng vị bền. Nguyên tử khối trung bình gần đúng của Y là',
    correct: '24,32', distractors: ['24,00', '24,50', '25,00'],
    insight: 'Cường độ tương đối của từng vạch được dùng như phần trăm số nguyên tử của đồng vị tương ứng.',
    principle: 'Tính tổng Aᵢ·pᵢ/100 cho toàn bộ các vạch phổ.',
    reasoning: [
      { title: 'Kiểm tra tổng cường độ', explanation: 'Ba tỉ lệ 79%, 10% và 11% cộng lại bằng 100%, nên có thể dùng trực tiếp làm trọng số.' },
      { title: 'Tính trung bình có trọng số', explanation: 'Giá trị bằng 24×0,79 + 25×0,10 + 26×0,11.' },
      { title: 'Hoàn tất phép tính', explanation: 'Tổng bằng 18,96 + 2,50 + 2,86 = 24,32.', result: '24,32' }
    ],
    mistakes: ['Chỉ chọn số khối của vạch cao nhất là 24.', 'Lấy trung bình cộng 24, 25 và 26.', 'Quên chia các phần trăm cho 100 khi nhân trọng số.'],
    tags: ['phổ khối', 'trung bình có trọng số'],
    stimulus: chemistryTable('chem-atom-02', 'Dữ liệu phổ khối của Y', 'Các vạch đã được hiệu chỉnh về tổng cường độ 100%.', 'Phổ khối nguyên tử Y', [{ key: 'mass', label: 'm/z' }, { key: 'intensity', label: 'Cường độ', unit: '%' }], [{ mass: 24, intensity: 79 }, { mass: 25, intensity: 10 }, { mass: 26, intensity: 11 }])
  }),
  chemProblem(topic, {
    content: 'Chlorine có hai đồng vị ³⁵Cl và ³⁷Cl với tỉ lệ số nguyên tử 3 : 1. Bỏ qua sự phân mảnh, tỉ lệ gần đúng cường độ ba peak ion phân tử Cl₂⁺ tại m/z 70 : 72 : 74 là',
    correct: '9 : 6 : 1', distractors: ['3 : 2 : 1', '6 : 3 : 1', '9 : 3 : 1'],
    insight: 'Phân tử Cl₂ được tạo bởi hai phép chọn đồng vị độc lập; peak hỗn hợp có hai cách sắp xếp.',
    principle: 'Khai triển (3a + b)² cho hệ số 9a² + 6ab + b².',
    reasoning: [
      { title: 'Gắn đồng vị với peak', explanation: '³⁵Cl–³⁵Cl cho m/z 70; cặp hỗn hợp cho 72; ³⁷Cl–³⁷Cl cho 74.' },
      { title: 'Tính xác suất tương đối', explanation: 'Các trọng số lần lượt là 3², 2×3×1 và 1².' },
      { title: 'Rút tỉ lệ nguyên tối giản', explanation: 'Nhận được 9 : 6 : 1.', result: '9 : 6 : 1' }
    ],
    mistakes: ['Quên hệ số 2 của cặp đồng vị hỗn hợp.', 'Dùng trực tiếp tỉ lệ nguyên tử 3 : 1 cho ba peak.', 'Cộng số khối đúng nhưng gán peak 72 chỉ cho một cách sắp xếp.'],
    tags: ['phổ khối phân tử', 'xác suất đồng vị']
  }),
  chemProblem(topic, {
    content: 'Ion M²⁺ có tổng số proton, neutron và electron bằng 90; số hạt mang điện nhiều hơn số hạt không mang điện 22. Số hiệu nguyên tử của M là',
    correct: '29', distractors: ['26', '28', '32'],
    insight: 'Với M²⁺, số electron bằng Z − 2; cần dịch hai dữ kiện về Z và N trước khi giải.',
    principle: 'Hệ: Z + N + (Z − 2) = 90 và Z + (Z − 2) − N = 22.',
    reasoning: [
      { title: 'Biểu diễn ba loại hạt', explanation: 'Proton là Z, neutron là N và electron của ion M²⁺ là Z − 2.' },
      { title: 'Lập hệ tuyến tính', explanation: 'Hai phương trình rút gọn thành 2Z + N = 92 và 2Z − N = 24.' },
      { title: 'Giải hệ', explanation: 'Cộng hai phương trình được 4Z = 116, nên Z = 29.' },
      { title: 'Đối chiếu dữ kiện', explanation: 'Khi Z = 29 thì N = 34; tổng hạt là 29 + 34 + 27 = 90 và chênh lệch là 56 − 34 = 22.', result: '29' }
    ],
    mistakes: ['Dùng số electron của nguyên tử trung hòa thay cho ion.', 'Hiểu “hạt mang điện” chỉ gồm electron.', 'Không thử lại tổng số hạt sau khi giải.'],
    tags: ['cấu tạo hạt', 'ion nhiều điện tích']
  }),
  chemProblem(topic, {
    content: 'Bốn tiểu phân O²⁻, F⁻, Na⁺ và Mg²⁺ có cùng số electron. Thứ tự bán kính tăng dần hợp lí là',
    correct: 'Mg²⁺ < Na⁺ < F⁻ < O²⁻', distractors: ['O²⁻ < F⁻ < Na⁺ < Mg²⁺', 'Na⁺ < Mg²⁺ < O²⁻ < F⁻', 'F⁻ < O²⁻ < Mg²⁺ < Na⁺'],
    insight: 'Trong dãy đẳng electron, điện tích hạt nhân càng lớn thì lực hút lên cùng một đám mây electron càng mạnh và bán kính càng nhỏ.',
    principle: 'So sánh Z của O, F, Na, Mg lần lượt là 8, 9, 11, 12.',
    reasoning: [
      { title: 'Xác nhận đẳng electron', explanation: 'Cả bốn tiểu phân đều có 10 electron.' },
      { title: 'Xếp theo điện tích hạt nhân', explanation: 'Z tăng theo O < F < Na < Mg nên bán kính biến thiên ngược chiều.' },
      { title: 'Viết thứ tự bán kính', explanation: 'Nhỏ nhất là Mg²⁺ và lớn nhất là O²⁻.', result: 'Mg²⁺ < Na⁺ < F⁻ < O²⁻' }
    ],
    mistakes: ['Xếp theo điện tích ion mà không xét số electron bằng nhau.', 'Cho rằng anion luôn lớn hơn mọi cation nhưng không sắp được trong từng nhóm.', 'Xếp bán kính cùng chiều với Z trong dãy đẳng electron.'],
    tags: ['đẳng electron', 'bán kính ion']
  }),
  chemProblem(topic, {
    content: 'Một nguyên tử ở trạng thái cơ bản có tổng số electron trong các phân lớp p bằng 11. Cấu hình electron lớp ngoài cùng của nguyên tử đó là',
    correct: '3s²3p⁵', distractors: ['3s²3p³', '3s²3p⁶', '4s²4p⁵'],
    insight: 'Phân lớp 2p đã đủ 6 electron, nên còn 5 electron phải nằm ở 3p.',
    principle: 'Tổng electron p = 2p⁶ + 3pˣ = 11 nên x = 5.',
    reasoning: [
      { title: 'Tách các phân lớp p đã điền', explanation: 'Ở nguyên tử chu kì 3, phân lớp 2p nằm bên trong và đã có 6 electron.' },
      { title: 'Tìm số electron 3p', explanation: 'Số electron còn lại trong các phân lớp p là 11 − 6 = 5.' },
      { title: 'Chốt lớp ngoài cùng', explanation: 'Lớp ngoài cùng có dạng 3s²3p⁵.', result: '3s²3p⁵' }
    ],
    mistakes: ['Coi tổng 11 electron p đều thuộc cùng một phân lớp.', 'Quên sáu electron ở 2p.', 'Chọn 4p dù các phân lớp 3p chưa bão hòa.'],
    tags: ['cấu hình electron', 'phân lớp']
  }),
  chemProblem(topic, {
    content: 'Trong nguyên tử ở trạng thái cơ bản, cấu hình nào sau đây vi phạm nguyên lí Pauli?',
    correct: 'Một orbital 2p chứa hai electron cùng chiều spin', distractors: ['Ba orbital 2p mỗi orbital chứa một electron cùng chiều spin', 'Orbital 2s chứa hai electron ngược chiều spin', 'Phân lớp 3p chứa tối đa sáu electron'],
    insight: 'Pauli giới hạn hai electron trong cùng một orbital phải có spin ngược chiều.',
    principle: 'Mỗi orbital được chứa tối đa hai electron và hai electron đó không thể có đủ bốn số lượng tử giống nhau.',
    reasoning: [
      { title: 'Xác định đối tượng của Pauli', explanation: 'Nguyên lí Pauli áp dụng trực tiếp cho hai electron cùng một orbital.' },
      { title: 'Đối chiếu từng mô tả', explanation: 'Hai electron cùng chiều spin trong một orbital có cùng bộ số lượng tử không được phép.' },
      { title: 'Phân biệt với Hund', explanation: 'Ba electron độc thân cùng chiều trên ba orbital khác nhau phù hợp quy tắc Hund.', result: 'Một orbital 2p chứa hai electron cùng chiều spin' }
    ],
    mistakes: ['Nhầm nguyên lí Pauli với quy tắc Hund.', 'Cho rằng hai electron trong một orbital phải cùng chiều spin.', 'Xem cấu hình p⁶ là vi phạm vì có nhiều electron.'],
    tags: ['Pauli', 'orbital']
  }),
  chemProblem(topic, {
    content: 'Một ion đơn nguyên tử X³⁺ có cấu hình electron [Ne]3s²3p⁶. Nguyên tử X ở trạng thái cơ bản thuộc',
    correct: 'chu kì 4, nhóm 3', distractors: ['chu kì 3, nhóm 18', 'chu kì 4, nhóm 13', 'chu kì 3, nhóm 15'],
    insight: 'Ion X³⁺ có 18 electron nên nguyên tử trung hòa có 21 electron.',
    principle: 'Z = 18 + 3 = 21; nguyên tố Sc nằm chu kì 4, nhóm 3.',
    reasoning: [
      { title: 'Đếm electron của ion', explanation: 'Cấu hình [Ar] tương ứng 18 electron.' },
      { title: 'Khôi phục nguyên tử trung hòa', explanation: 'X³⁺ đã mất ba electron nên X có Z = 21.' },
      { title: 'Xác định vị trí', explanation: 'Cấu hình nguyên tử kết thúc 4s²3d¹, thuộc chu kì 4, nhóm 3.', result: 'chu kì 4, nhóm 3' }
    ],
    mistakes: ['Đồng nhất cấu hình của ion với vị trí của nguyên tử.', 'Trừ thêm ba electron thay vì cộng lại.', 'Chỉ nhìn phân lớp 3p⁶ rồi kết luận chu kì 3.'],
    tags: ['cấu hình ion', 'vị trí nguyên tố'],
    scope: 'grade10_specialized'
  }),
  chemProblem(topic, {
    content: 'Một máy phổ khối ghi nhận ion phân tử AB²⁺ tại m/z = 23. Biết A chỉ có đồng vị số khối 12 và B chỉ có đồng vị số khối 34. Công thức ion phù hợp là',
    correct: '¹²A³⁴B²⁺', distractors: ['¹²A¹⁷B²⁺', '²⁴A³⁴B²⁺', '¹²A³⁴B⁺'],
    insight: 'm/z là khối lượng ion chia cho trị số điện tích; ion 2+ làm giá trị m/z bằng một nửa tổng số khối.',
    principle: '(12 + 34)/2 = 23.',
    reasoning: [
      { title: 'Tính khối lượng ion', explanation: 'Tổng số khối của A và B là 46.' },
      { title: 'Chia cho điện tích', explanation: 'Điện tích có trị số 2 nên m/z = 46/2 = 23.' },
      { title: 'Chọn công thức đủ điện tích', explanation: 'Chỉ ¹²A³⁴B²⁺ thỏa đồng thời thành phần và điện tích.', result: '¹²A³⁴B²⁺' }
    ],
    mistakes: ['Đọc m/z như số khối của nguyên tử B.', 'Quên chia cho trị số điện tích 2.', 'Chọn ion 1+ có cùng thành phần.'],
    tags: ['m/z', 'ion đa điện tích']
  }),
  chemProblem(topic, {
    content: 'Trong một mẫu gồm 0,20 mol nguyên tử của nguyên tố Z, đồng vị nặng chiếm 15%. Số nguyên tử đồng vị nặng gần nhất với',
    correct: '1,81×10²²', distractors: ['9,03×10²¹', '6,02×10²²', '1,20×10²³'],
    insight: 'Phải lấy 15% của số mol trước rồi mới đổi số mol đồng vị thành số nguyên tử.',
    principle: 'N = 0,20×0,15×6,022×10²³.',
    reasoning: [
      { title: 'Tính số mol đồng vị nặng', explanation: 'n = 0,20×0,15 = 0,030 mol.' },
      { title: 'Đổi sang số hạt', explanation: 'Nhân 0,030 với hằng số Avogadro.' },
      { title: 'Làm tròn hợp lí', explanation: 'Kết quả 1,8066×10²², gần 1,81×10²².', result: '1,81×10²²' }
    ],
    mistakes: ['Dùng 0,15 mol thay vì 15% của 0,20 mol.', 'Nhân số mol với 10²² thay vì hằng số Avogadro.', 'Tính số nguyên tử của toàn mẫu, không tách đồng vị nặng.'],
    tags: ['đồng vị', 'số hạt']
  }),
  chemProblem(topic, {
    content: 'Nguyên tố E có hai đồng vị. Peak E₂⁺ nhẹ nhất, hỗn hợp và nặng nhất có cường độ tương đối 16 : 8 : 1. Tỉ lệ số nguyên tử đồng vị nhẹ : đồng vị nặng là',
    correct: '4 : 1', distractors: ['16 : 1', '8 : 1', '2 : 1'],
    insight: 'Ba cường độ của phân tử hai nguyên tử có dạng a² : 2ab : b².',
    principle: 'Từ a² : b² = 16 : 1 suy ra a : b = 4 : 1; peak giữa 2ab = 8 xác nhận.',
    reasoning: [
      { title: 'Gán hệ số nhị thức', explanation: 'Peak nhẹ nhất và nặng nhất lần lượt tỉ lệ với bình phương độ phổ biến hai đồng vị.' },
      { title: 'Lấy căn tỉ lệ hai peak biên', explanation: '√16 : √1 = 4 : 1.' },
      { title: 'Kiểm tra peak hỗn hợp', explanation: '2×4×1 = 8, đúng với dữ liệu.', result: '4 : 1' }
    ],
    mistakes: ['Dùng trực tiếp 16 : 1 làm tỉ lệ nguyên tử.', 'Lấy peak giữa 8 chia peak nặng 1.', 'Quên rằng phân tử hỗn hợp có hai cách sắp xếp.'],
    tags: ['phổ đồng vị', 'nhị thức']
  }),
  chemProblem(topic, {
    content: 'Nguyên tử Q có 17 electron. Số electron độc thân ở trạng thái cơ bản là',
    correct: '1', distractors: ['0', '2', '5'],
    insight: 'Cấu hình lớp ngoài 3p⁵ có một orbital chứa một electron độc thân.',
    principle: 'Q: 1s²2s²2p⁶3s²3p⁵; điền electron vào ba orbital p theo Hund.',
    reasoning: [
      { title: 'Viết cấu hình electron', explanation: 'Mười bảy electron cho cấu hình kết thúc ở 3p⁵.' },
      { title: 'Vẽ sơ đồ ba orbital p', explanation: 'Ba orbital nhận electron đơn trước, sau đó hai electron ghép đôi.' },
      { title: 'Đếm electron chưa ghép đôi', explanation: 'Còn đúng một electron độc thân.', result: '1' }
    ],
    mistakes: ['Đếm năm electron của phân lớp p là năm electron độc thân.', 'Ghép đôi electron trước khi điền đơn vào ba orbital.', 'Chỉ xét electron lớp trong đã bão hòa.'],
    tags: ['Hund', 'electron độc thân']
  }),
  chemProblem(topic, {
    content: 'Một nguyên tố có các năng lượng ion hóa liên tiếp đầu tiên tăng vừa phải, nhưng I₄ lớn hơn I₃ khoảng mười lần. Cấu hình electron hóa trị phù hợp nhất là',
    correct: 'ns²np¹', distractors: ['ns¹', 'ns²np³', 'ns²np⁵'],
    insight: 'Bước nhảy lớn sau electron thứ ba chứng tỏ nguyên tử có ba electron hóa trị.',
    principle: 'Sau khi tách ba electron ngoài cùng, electron thứ tư thuộc lớp lõi bền hơn nhiều.',
    reasoning: [
      { title: 'Xác định vị trí bước nhảy', explanation: 'I₁, I₂, I₃ cùng vùng năng lượng hóa trị; I₄ bắt đầu lấy electron lớp lõi.' },
      { title: 'Suy ra số electron hóa trị', explanation: 'Nguyên tử có ba electron hóa trị.' },
      { title: 'Chọn cấu hình khối p', explanation: 'Cấu hình phù hợp là ns²np¹.', result: 'ns²np¹' }
    ],
    mistakes: ['Cho rằng chỉ số I₄ nghĩa là nguyên tố có bốn electron hóa trị.', 'Chọn ns¹ vì năng lượng ion hóa thứ nhất nhỏ nhất.', 'Bỏ qua vị trí bước nhảy và chỉ so độ lớn tuyệt đối.'],
    tags: ['năng lượng ion hóa', 'electron hóa trị'],
    stimulus: chemistryTable('chem-atom-13', 'Năng lượng ion hóa liên tiếp', 'Các giá trị đã quy về cùng đơn vị.', 'Dữ liệu định tính', [{ key: 'step', label: 'Lần ion hóa' }, { key: 'value', label: 'Mức tương đối' }], [{ step: 'I₁', value: 1.0 }, { step: 'I₂', value: 1.8 }, { step: 'I₃', value: 2.7 }, { step: 'I₄', value: 27.5 }])
  }),
  chemProblem(topic, {
    content: 'Một nguyên tố R có nguyên tử khối trung bình 10,80 và hai đồng vị số khối 10, 11. Trong 1000 nguyên tử R, số nguyên tử đồng vị ¹⁰R gần nhất là',
    correct: '200', distractors: ['80', '800', '920'],
    insight: 'Khoảng cách của giá trị trung bình tới mỗi số khối cho ngay tỉ lệ nghịch của hai đồng vị.',
    principle: '10x + 11(1 − x) = 10,80 nên x = 0,20.',
    reasoning: [
      { title: 'Đặt phần đồng vị nhẹ', explanation: 'Gọi x là phần số nguyên tử ¹⁰R.' },
      { title: 'Giải phương trình trung bình', explanation: '11 − x = 10,80 nên x = 0,20.' },
      { title: 'Áp dụng cho 1000 nguyên tử', explanation: '1000×0,20 = 200 nguyên tử.', result: '200' }
    ],
    mistakes: ['Đọc 10,80 thành 80% đồng vị nhẹ.', 'Chọn 800 là số nguyên tử đồng vị nặng nhưng gán nhầm.', 'Lấy 10/11 làm tỉ lệ hai đồng vị.'],
    tags: ['đồng vị', 'đếm nguyên tử']
  }),
  chemProblem(topic, {
    content: 'Phát biểu nào mô tả đúng nhất peak nền trong một phổ khối?',
    correct: 'Peak có cường độ tương đối được quy ước bằng 100%', distractors: ['Peak có m/z lớn nhất', 'Peak luôn là ion phân tử', 'Peak ứng với đồng vị phổ biến nhất của mọi nguyên tố'],
    insight: 'Peak nền là quy ước về cường độ, không khẳng định bản chất ion hay giá trị m/z.',
    principle: 'Mọi peak khác thường được biểu diễn cường độ tương đối so với peak mạnh nhất.',
    reasoning: [
      { title: 'Phân biệt hai trục phổ', explanation: 'm/z biểu diễn vị trí peak, còn cường độ tương đối biểu diễn độ cao.' },
      { title: 'Nhận diện quy ước', explanation: 'Peak mạnh nhất được chọn làm mốc 100% và gọi là peak nền.' },
      { title: 'Loại các khẳng định quá mức', explanation: 'Peak nền có thể là ion mảnh và không nhất thiết có m/z lớn nhất.', result: 'Peak có cường độ tương đối được quy ước bằng 100%' }
    ],
    mistakes: ['Đồng nhất peak nền với ion phân tử.', 'Chọn peak nằm xa nhất bên phải.', 'Cho rằng peak nền luôn chỉ ra đồng vị phổ biến nhất.'],
    tags: ['phổ khối', 'đọc biểu đồ']
  }),
  chemProblem(topic, {
    content: 'Một nguyên tử có electron cuối cùng điền vào phân lớp 3p và tổng số electron p là 9. Số hiệu nguyên tử của nguyên tố là',
    correct: '15', distractors: ['13', '17', '19'],
    insight: 'Tổng electron p gồm 2p⁶ và 3p³.',
    principle: 'Cấu hình đầy đủ 1s²2s²2p⁶3s²3p³ có 15 electron.',
    reasoning: [
      { title: 'Phân bố electron p', explanation: 'Phân lớp 2p chứa 6 electron, nên 3p chứa 9 − 6 = 3 electron.' },
      { title: 'Hoàn thiện cấu hình', explanation: 'Các phân lớp s tương ứng là 1s², 2s² và 3s².' },
      { title: 'Cộng tổng electron', explanation: '2 + 2 + 6 + 2 + 3 = 15.', result: '15' }
    ],
    mistakes: ['Dùng tổng electron p làm số hiệu nguyên tử.', 'Bỏ electron ở các phân lớp s.', 'Cho 3p⁹ dù một phân lớp p chỉ chứa tối đa sáu electron.'],
    tags: ['cấu hình electron', 'số hiệu nguyên tử']
  }),
  chemProblem(topic, {
    content: 'Trong các bộ số lượng tử mô tả electron, bộ nào chắc chắn không hợp lệ?',
    correct: 'n = 3, l = 3, m = 0, mₛ = +1/2', distractors: ['n = 3, l = 2, m = −2, mₛ = +1/2', 'n = 2, l = 1, m = 1, mₛ = −1/2', 'n = 1, l = 0, m = 0, mₛ = +1/2'],
    insight: 'Với số lượng tử chính n, số lượng tử phụ l chỉ nhận từ 0 đến n − 1.',
    principle: 'Khi n = 3 chỉ có l = 0, 1, 2; l = 3 là không thể.',
    reasoning: [
      { title: 'Kiểm tra điều kiện của l', explanation: 'Miền của l phụ thuộc trực tiếp vào n.' },
      { title: 'Đối chiếu bộ nghi vấn', explanation: 'n = 3 không cho phép l = 3, bất kể m và spin.' },
      { title: 'Xác nhận các bộ còn lại', explanation: 'Các giá trị m đều nằm trong đoạn −l đến +l và spin bằng ±1/2.', result: 'n = 3, l = 3, m = 0, mₛ = +1/2' }
    ],
    mistakes: ['Cho rằng m = 0 làm mọi bộ số lượng tử hợp lệ.', 'Nhầm điều kiện l ≤ n với l < n.', 'Loại bộ có m âm dù m có thể âm.'],
    tags: ['số lượng tử', 'orbital'],
    scope: 'grade10_specialized'
  }),
  chemProblem(topic, {
    content: 'Một mẫu neon tự nhiên cho ba peak nguyên tử tại m/z 20, 21, 22. Nếu tăng độ phân giải nhưng không làm thay đổi mẫu, đại lượng nào phải được giữ nguyên về bản chất?',
    correct: 'Tỉ lệ diện tích tích phân của ba peak sau hiệu chỉnh', distractors: ['Chiều rộng tuyệt đối của từng peak', 'Khoảng cách pixel giữa các peak trên màn hình', 'Chiều cao tức thời của mọi điểm nhiễu'],
    insight: 'Độ phân giải thay đổi hình dạng hiển thị nhưng không làm thay đổi số ion của từng đồng vị trong cùng mẫu.',
    principle: 'Diện tích peak đã hiệu chỉnh phản ánh độ phổ biến; chiều rộng và cách vẽ phụ thuộc thiết bị.',
    reasoning: [
      { title: 'Tách thuộc tính mẫu và thiết bị', explanation: 'Thành phần đồng vị thuộc về mẫu, còn độ rộng peak phụ thuộc khả năng phân giải.' },
      { title: 'Chọn đại lượng bảo toàn thông tin số ion', explanation: 'Diện tích tích phân sau hiệu chỉnh vẫn tỉ lệ với lượng ion mỗi đồng vị.' },
      { title: 'Loại đại lượng trình bày', explanation: 'Pixel, chiều rộng và nhiễu có thể thay đổi khi thay cài đặt.', result: 'Tỉ lệ diện tích tích phân của ba peak sau hiệu chỉnh' }
    ],
    mistakes: ['Đồng nhất chiều cao peak tại một điểm với toàn bộ diện tích peak.', 'Cho rằng tăng độ phân giải làm thay đổi thành phần đồng vị.', 'Dùng khoảng cách pixel như một đại lượng hóa học.'],
    tags: ['phổ khối', 'xử lí dữ liệu'],
    scope: 'olympiad_extension'
  }),
  chemProblem(topic, {
    content: 'Phân tử CO gồm ¹²C hoặc ¹³C và ¹⁶O hoặc ¹⁸O. Có bao nhiêu giá trị m/z khác nhau của ion CO⁺ nếu bỏ qua độ hụt khối?',
    correct: '4', distractors: ['2', '3', '6'],
    insight: 'Bốn tổ hợp đồng vị tạo các tổng số khối 28, 29, 30 và 31; không có hai tổ hợp trùng tổng.',
    principle: 'Liệt kê tích Descartes của hai đồng vị C và hai đồng vị O.',
    reasoning: [
      { title: 'Liệt kê tổ hợp', explanation: 'Các cặp là 12–16, 13–16, 12–18 và 13–18.' },
      { title: 'Tính tổng số khối', explanation: 'Các tổng tương ứng 28, 29, 30 và 31.' },
      { title: 'Đếm m/z phân biệt', explanation: 'Ion đều mang điện tích +1 nên có bốn giá trị m/z.', result: '4' }
    ],
    mistakes: ['Nhân 2×2 rồi cộng thêm hai đồng vị đơn lẻ.', 'Cho rằng ¹³C¹⁶O và ¹²C¹⁸O có cùng khối lượng.', 'Quên ion đều có điện tích +1.'],
    tags: ['isotopologue', 'phổ khối phân tử']
  }),
  chemProblem(topic, {
    content: 'Một nguyên tử trung hòa có 3 lớp electron, lớp ngoài cùng chứa 6 electron và có đúng 2 electron độc thân. Nguyên tố phù hợp là',
    correct: 'S', distractors: ['Si', 'Cl', 'Ar'],
    insight: 'Ba lớp xác định chu kì 3; sáu electron hóa trị cho cấu hình 3s²3p⁴ với hai electron độc thân.',
    principle: 'Theo Hund, p⁴ có hai orbital chứa electron độc thân.',
    reasoning: [
      { title: 'Xác định chu kì', explanation: 'Ba lớp electron có electron cho biết nguyên tố ở chu kì 3.' },
      { title: 'Xác định nhóm electron hóa trị', explanation: 'Sáu electron ngoài cùng tương ứng 3s²3p⁴.' },
      { title: 'Kiểm tra số electron độc thân', explanation: 'Sơ đồ p⁴ có hai electron độc thân, nên nguyên tố là sulfur.', result: 'S' }
    ],
    mistakes: ['Chọn chlorine vì gần đủ bát tử.', 'Đếm số orbital p thay cho electron độc thân.', 'Bỏ dữ kiện ba lớp và chọn oxygen.'],
    tags: ['cấu hình electron', 'electron độc thân']
  })
];
