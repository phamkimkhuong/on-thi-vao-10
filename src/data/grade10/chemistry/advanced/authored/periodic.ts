import { chemProblem, chemistryTable } from './helpers';

const topic = 'chem10-adv-periodic';

export const periodicProblems = [
  chemProblem(topic, {
    content: 'Nguyên tố X có cấu hình electron [Ne]3s²3p². Công thức oxide ứng với số oxi hóa cao nhất và tính chất chính của oxide đó là',
    correct: 'XO₂, oxide acid', distractors: ['X₂O₃, oxide lưỡng tính', 'XO, oxide base', 'X₂O₇, oxide acid'],
    insight: 'Bốn electron hóa trị xác định nguyên tố nhóm 14 và số oxi hóa cao nhất +4.',
    principle: 'Oxide cao nhất của nguyên tố phi kim chu kì 3 nhóm 14 có dạng XO₂ và thể hiện tính acid.',
    reasoning: [
      { title: 'Xác định nhóm nguyên tố', explanation: 'Cấu hình ns²np² cho bốn electron hóa trị, thuộc nhóm 14.' },
      { title: 'Suy ra số oxi hóa cao nhất', explanation: 'Số oxi hóa cao nhất trong oxide là +4 nên công thức cân bằng điện tích là XO₂.' },
      { title: 'Đánh giá tính chất oxide', explanation: 'Ở chu kì 3, X là silicon; SiO₂ là oxide acid.', result: 'XO₂, oxide acid' }
    ],
    mistakes: ['Dùng số electron p bằng 2 làm số oxi hóa cao nhất.', 'Viết X₂O₄ mà không rút gọn công thức.', 'Cho mọi oxide chu kì 3 đều là oxide base.'],
    tags: ['oxide cao nhất', 'cấu hình electron']
  }),
  chemProblem(topic, {
    content: 'Dãy năng lượng ion hóa liên tiếp của X có bước nhảy lớn nhất từ I₂ sang I₃. X tạo chloride bền nhất có công thức',
    correct: 'XCl₂', distractors: ['XCl', 'XCl₃', 'XCl₄'],
    insight: 'Bước nhảy sau khi tách hai electron cho biết X có hai electron hóa trị.',
    principle: 'Nguyên tố nhóm 2 thường tạo ion X²⁺, kết hợp hai ion Cl⁻.',
    reasoning: [
      { title: 'Đọc vị trí bước nhảy', explanation: 'Hai electron đầu thuộc lớp hóa trị; electron thứ ba thuộc lớp lõi.' },
      { title: 'Suy ra ion phổ biến', explanation: 'X thuận lợi mất hai electron để đạt cấu hình bền, tạo X²⁺.' },
      { title: 'Cân bằng điện tích chloride', explanation: 'Một X²⁺ cần hai Cl⁻ nên công thức là XCl₂.', result: 'XCl₂' }
    ],
    mistakes: ['Đếm I₃ rồi kết luận có ba electron hóa trị.', 'Dùng hóa trị của chlorine bằng 2.', 'Chọn XCl vì chỉ xét lần ion hóa thứ nhất.'],
    tags: ['năng lượng ion hóa', 'công thức ion'],
    stimulus: chemistryTable('chem-periodic-02', 'Năng lượng ion hóa của X', 'Bước nhảy năng lượng thể hiện sự chuyển từ electron hóa trị sang electron lõi.', 'Năng lượng ion hóa tương đối', [{ key: 'step', label: 'Đại lượng' }, { key: 'value', label: 'Giá trị tương đối' }], [{ step: 'I₁', value: 1.0 }, { step: 'I₂', value: 1.9 }, { step: 'I₃', value: 8.8 }, { step: 'I₄', value: 11.2 }])
  }),
  chemProblem(topic, {
    content: 'Ba ion X⁺, Y²⁺, Z³⁺ đều có cấu hình [Ne]. Biết Z của các nguyên tố liên tiếp tăng dần. Thứ tự độ âm điện của các nguyên tử trung hòa tăng dần là',
    correct: 'X < Y < Z', distractors: ['Z < Y < X', 'Y < X < Z', 'X < Z < Y'],
    insight: 'Các nguyên tử lần lượt có Z = 11, 12, 13 và nằm liên tiếp trong cùng chu kì.',
    principle: 'Trong một chu kì, độ âm điện nhìn chung tăng từ trái sang phải.',
    reasoning: [
      { title: 'Khôi phục số electron nguyên tử', explanation: 'X, Y, Z có lần lượt 11, 12, 13 electron ở trạng thái trung hòa.' },
      { title: 'Xác định quan hệ vị trí', explanation: 'Ba nguyên tố cùng chu kì 3 và đi từ trái sang phải.' },
      { title: 'Áp dụng xu hướng độ âm điện', explanation: 'Độ âm điện tăng theo X < Y < Z.', result: 'X < Y < Z' }
    ],
    mistakes: ['So độ âm điện của ion thay cho nguyên tử.', 'Cho rằng điện tích ion càng lớn thì độ âm điện nguyên tử càng nhỏ.', 'Xếp xu hướng ngược chiều trong một chu kì.'],
    tags: ['đẳng electron', 'độ âm điện']
  }),
  chemProblem(topic, {
    content: 'Các oxide Na₂O, MgO, Al₂O₃, SiO₂ được xếp theo chiều tính base giảm dần là',
    correct: 'Na₂O > MgO > Al₂O₃ > SiO₂', distractors: ['SiO₂ > Al₂O₃ > MgO > Na₂O', 'Na₂O > Al₂O₃ > MgO > SiO₂', 'MgO > Na₂O > SiO₂ > Al₂O₃'],
    insight: 'Trong chu kì 3, tính kim loại giảm nên oxide chuyển dần từ base mạnh qua lưỡng tính đến acid.',
    principle: 'Na₂O base mạnh, MgO base, Al₂O₃ lưỡng tính, SiO₂ acid.',
    reasoning: [
      { title: 'Gắn oxide với loại tính chất', explanation: 'Na₂O và MgO là oxide base; Al₂O₃ lưỡng tính; SiO₂ acid.' },
      { title: 'So sánh hai oxide base', explanation: 'Na có tính kim loại mạnh hơn Mg nên Na₂O thể hiện tính base mạnh hơn.' },
      { title: 'Hoàn thiện thứ tự', explanation: 'Chuỗi giảm dần là Na₂O > MgO > Al₂O₃ > SiO₂.', result: 'Na₂O > MgO > Al₂O₃ > SiO₂' }
    ],
    mistakes: ['Xếp theo khối lượng mol của oxide.', 'Đặt oxide lưỡng tính trước oxide base mạnh.', 'Cho rằng nhiều oxygen hơn đồng nghĩa tính base mạnh hơn.'],
    tags: ['xu hướng oxide', 'chu kì 3']
  }),
  chemProblem(topic, {
    content: 'Nguyên tố R thuộc chu kì 3. Oxide cao nhất của R chứa 53,33% oxygen theo khối lượng. R là',
    correct: 'Si', distractors: ['P', 'S', 'Cl'],
    insight: 'Thử các dạng oxide cao nhất theo nhóm và dùng phần trăm khối lượng oxygen để nhận dạng.',
    principle: 'Với SO₃, %m(O) = 48/80 = 60%, không phải 53,33%; với P₂O₅ là 80/142; SiO₂ là 32/60. Giá trị 53,33% ứng với SiO₂.',
    reasoning: [
      { title: 'Lập danh sách oxide cao nhất', explanation: 'SiO₂, P₂O₅, SO₃ và Cl₂O₇ là các ứng viên.' },
      { title: 'Tính nhanh phần trăm oxygen', explanation: 'SiO₂ có 32/60 = 53,33% oxygen.' },
      { title: 'Chọn nguyên tố', explanation: 'Do đó R là silicon, kí hiệu Si.', result: 'Si' }
    ],
    mistakes: ['Chọn sulfur do SO₃ có ba nguyên tử oxygen.', 'So số nguyên tử oxygen thay vì phần trăm khối lượng.', 'Dùng nguyên tử khối oxygen bằng 8.'],
    tags: ['oxide cao nhất', 'phần trăm khối lượng']
  }),
  chemProblem(topic, {
    content: 'Trong bốn nguyên tử Li, Na, Mg, K, nguyên tử có bán kính lớn nhất là',
    correct: 'K', distractors: ['Li', 'Na', 'Mg'],
    insight: 'Số lớp electron tăng làm bán kính tăng mạnh; K có bốn lớp electron.',
    principle: 'Bán kính tăng xuống nhóm và giảm từ trái sang phải trong chu kì.',
    reasoning: [
      { title: 'So theo số lớp electron', explanation: 'K ở chu kì 4, Na và Mg ở chu kì 3, Li ở chu kì 2.' },
      { title: 'Ưu tiên ảnh hưởng lớp electron', explanation: 'Thêm một lớp electron làm K lớn hơn các nguyên tử còn lại.' },
      { title: 'Chốt kết quả', explanation: 'K có bán kính nguyên tử lớn nhất.', result: 'K' }
    ],
    mistakes: ['Xếp theo nguyên tử khối một cách máy móc.', 'Cho Mg lớn hơn Na vì Z lớn hơn.', 'Chỉ so trong nhóm mà bỏ K.'],
    tags: ['bán kính nguyên tử', 'xu hướng tuần hoàn']
  }),
  chemProblem(topic, {
    content: 'Ion nào có bán kính nhỏ nhất trong dãy S²⁻, Cl⁻, K⁺, Ca²⁺?',
    correct: 'Ca²⁺', distractors: ['S²⁻', 'Cl⁻', 'K⁺'],
    insight: 'Bốn ion có 18 electron; ion có điện tích hạt nhân lớn nhất giữ đám mây electron chặt nhất.',
    principle: 'Trong dãy đẳng electron, bán kính giảm khi Z tăng.',
    reasoning: [
      { title: 'Đếm electron', explanation: 'S²⁻, Cl⁻, K⁺ và Ca²⁺ đều có 18 electron.' },
      { title: 'So điện tích hạt nhân', explanation: 'Z lần lượt 16, 17, 19, 20.' },
      { title: 'Suy ra ion nhỏ nhất', explanation: 'Ca²⁺ có Z lớn nhất nên bán kính nhỏ nhất.', result: 'Ca²⁺' }
    ],
    mistakes: ['Cho anion nhỏ nhất vì mang điện âm.', 'Xếp cùng chiều với số electron dù số electron bằng nhau.', 'Bỏ qua điện tích hạt nhân.'],
    tags: ['bán kính ion', 'đẳng electron']
  }),
  chemProblem(topic, {
    content: 'Hydroxide ứng với oxide cao nhất của nguyên tố X có công thức HXO₄ và là acid mạnh. Cấu hình electron hóa trị phù hợp nhất của X là',
    correct: 'ns²np⁵', distractors: ['ns¹', 'ns²np²', 'ns²np⁴'],
    insight: 'Acid HXO₄ đặt X ở số oxi hóa +7, đặc trưng cho halogen nặng trong trạng thái oxi hóa cao nhất.',
    principle: 'Nguyên tố nhóm 17 có bảy electron hóa trị ns²np⁵.',
    reasoning: [
      { title: 'Tính số oxi hóa của X', explanation: 'Trong HXO₄, +1 + x − 8 = 0 nên x = +7.' },
      { title: 'Liên hệ số oxi hóa cao nhất với nhóm', explanation: 'Số oxi hóa +7 phù hợp nguyên tố nhóm 17.' },
      { title: 'Chọn cấu hình hóa trị', explanation: 'Nhóm 17 có dạng ns²np⁵.', result: 'ns²np⁵' }
    ],
    mistakes: ['Đếm bốn oxygen thành bốn electron hóa trị.', 'Cho X có cấu hình ns²np⁷.', 'Bỏ nguyên tử H khi tính số oxi hóa.'],
    tags: ['acid cao nhất', 'nhóm halogen']
  }),
  chemProblem(topic, {
    content: 'Cặp nguyên tố nào có tính chất hóa học gần nhau nhất?',
    correct: 'O và S', distractors: ['Na và Mg', 'C và N', 'Cl và Ar'],
    insight: 'Các nguyên tố cùng nhóm có cùng số electron hóa trị nên thường có tính chất gần nhau hơn các nguyên tố chỉ đứng cạnh nhau trong chu kì.',
    principle: 'O và S cùng nhóm 16, cấu hình hóa trị ns²np⁴.',
    reasoning: [
      { title: 'Xác định tiêu chí tương đồng', explanation: 'Số electron hóa trị chi phối kiểu liên kết và số oxi hóa đặc trưng.' },
      { title: 'So vị trí các cặp', explanation: 'Chỉ O và S nằm cùng một nhóm.' },
      { title: 'Kết luận', explanation: 'O và S có tính chất hóa học gần nhau nhất.', result: 'O và S' }
    ],
    mistakes: ['Chọn hai nguyên tố đứng cạnh nhau trong chu kì.', 'Chọn Cl và Ar vì đều gần đủ hoặc đủ bát tử.', 'So nguyên tử khối thay vì cấu hình hóa trị.'],
    tags: ['nhóm nguyên tố', 'tính chất tương tự']
  }),
  chemProblem(topic, {
    content: 'Cho các giá trị độ âm điện: A = 0,9; B = 1,6; C = 2,6; D = 3,4. Liên kết có độ phân cực lớn nhất dự kiến là',
    correct: 'A–D', distractors: ['A–B', 'B–C', 'C–D'],
    insight: 'Độ phân cực liên kết tăng theo độ chênh lệch độ âm điện của hai nguyên tử.',
    principle: 'Chênh lệch A–D là 2,5, lớn hơn 0,7; 1,0 và 0,8 của các cặp còn lại.',
    reasoning: [
      { title: 'Tính các độ chênh lệch', explanation: 'Lần lượt có 0,7; 1,0; 0,8 và 2,5.' },
      { title: 'Chọn chênh lệch lớn nhất', explanation: 'A–D có chênh lệch 2,5.' },
      { title: 'Liên hệ với độ phân cực', explanation: 'Liên kết A–D dự kiến phân cực mạnh nhất.', result: 'A–D' }
    ],
    mistakes: ['Chọn hai nguyên tố có độ âm điện đều lớn.', 'Cộng hai độ âm điện thay vì lấy hiệu.', 'Cho liên kết giữa hai nguyên tố gần nhau nhất phân cực nhất.'],
    tags: ['độ âm điện', 'phân cực liên kết'],
    stimulus: chemistryTable('chem-periodic-10', 'Độ âm điện quy ước', 'Kí hiệu A–D đại diện cho bốn nguyên tố giả định.', 'Bảng độ âm điện', [{ key: 'element', label: 'Nguyên tố' }, { key: 'chi', label: 'Độ âm điện' }], [{ element: 'A', chi: 0.9 }, { element: 'B', chi: 1.6 }, { element: 'C', chi: 2.6 }, { element: 'D', chi: 3.4 }])
  }),
  chemProblem(topic, {
    content: 'Nguyên tố T tạo ion T²⁻ có 18 electron. Oxide cao nhất của T có công thức',
    correct: 'TO₃', distractors: ['T₂O', 'TO₂', 'T₂O₇'],
    insight: 'T²⁻ có 18 electron nên nguyên tử T có Z = 16, thuộc nhóm 16.',
    principle: 'Nguyên tố nhóm 16 đạt số oxi hóa cao nhất +6, cho oxide dạng TO₃.',
    reasoning: [
      { title: 'Tìm số hiệu nguyên tử', explanation: 'Nguyên tử trung hòa có 18 − 2 = 16 electron.' },
      { title: 'Xác định nhóm', explanation: 'Z = 16 là sulfur, thuộc nhóm 16.' },
      { title: 'Viết oxide cao nhất', explanation: 'Số oxi hóa +6 kết hợp O(−2) cho TO₃.', result: 'TO₃' }
    ],
    mistakes: ['Cộng thêm hai electron rồi lấy Z = 20.', 'Dùng điện tích ion −2 làm số oxi hóa cao nhất.', 'Viết T₂O₆ nhưng không rút gọn.'],
    tags: ['ion', 'oxide cao nhất']
  }),
  chemProblem(topic, {
    content: 'Trong cùng chu kì, đại lượng nào nhìn chung tăng từ trái sang phải?',
    correct: 'Năng lượng ion hóa thứ nhất', distractors: ['Bán kính nguyên tử', 'Tính kim loại', 'Khả năng nhường electron'],
    insight: 'Điện tích hạt nhân hiệu dụng tăng làm electron hóa trị bị giữ chặt hơn.',
    principle: 'Bán kính và tính kim loại giảm; năng lượng cần để tách electron nhìn chung tăng.',
    reasoning: [
      { title: 'Xét điện tích hạt nhân hiệu dụng', explanation: 'Z tăng trong khi số lớp electron không đổi đáng kể.' },
      { title: 'Suy ra lực giữ electron', explanation: 'Electron ngoài cùng bị hút mạnh hơn và khó tách hơn.' },
      { title: 'Chọn đại lượng tăng', explanation: 'Năng lượng ion hóa thứ nhất nhìn chung tăng.', result: 'Năng lượng ion hóa thứ nhất' }
    ],
    mistakes: ['Xếp bán kính tăng theo Z.', 'Đồng nhất độ âm điện với khả năng nhường electron.', 'Bỏ từ “nhìn chung” rồi dùng một ngoại lệ để phủ định xu hướng.'],
    tags: ['xu hướng chu kì', 'năng lượng ion hóa']
  }),
  chemProblem(topic, {
    content: 'Hai nguyên tố A, B cùng chu kì; A tạo ion A²⁺, B tạo ion B⁻ và cả hai ion đẳng electron. Vị trí tương đối của A và B trong chu kì là',
    correct: 'A nằm bên phải B ba ô', distractors: ['A nằm bên trái B ba ô', 'A đứng ngay trước B', 'A và B cùng nhóm'],
    insight: 'Đẳng electron cho Z_A − 2 = Z_B + 1.',
    principle: 'Suy ra Z_A = Z_B + 3; nhưng trong cùng chu kì Z tăng trái sang phải, vậy A phải bên phải B ba ô. Dữ kiện ion điển hình cho thấy cách gọi A/B cần kiểm tra.',
    reasoning: [
      { title: 'Lập quan hệ số electron', explanation: 'A²⁺ có Z_A − 2 electron; B⁻ có Z_B + 1 electron.' },
      { title: 'Giải quan hệ Z', explanation: 'Z_A − 2 = Z_B + 1 nên Z_A = Z_B + 3.' },
      { title: 'Đổi sang vị trí chu kì', explanation: 'A có Z lớn hơn nên nằm bên phải B ba ô.', result: 'A nằm bên phải B ba ô' }
    ],
    mistakes: ['So điện tích ion rồi kết luận A ở bên trái.', 'Quên cộng electron cho anion B⁻.', 'Cho hai ion đẳng electron nghĩa là hai nguyên tố cùng ô.'],
    tags: ['đẳng electron', 'vị trí tương đối']
  }),
  chemProblem(topic, {
    content: 'Oxide E₂O₃ phản ứng được với cả HCl và NaOH. Nhận định phù hợp nhất là',
    correct: 'E₂O₃ là oxide lưỡng tính', distractors: ['E₂O₃ chỉ là oxide base', 'E₂O₃ chỉ là oxide acid', 'E₂O₃ là peroxide'],
    insight: 'Khả năng phản ứng với cả acid và base mạnh là dấu hiệu đặc trưng của oxide lưỡng tính.',
    principle: 'Oxide lưỡng tính thể hiện tính base trước acid và tính acid trước base.',
    reasoning: [
      { title: 'Phân loại theo phản ứng với HCl', explanation: 'Phản ứng với acid cho thấy oxide có mặt tính base.' },
      { title: 'Phân loại theo phản ứng với NaOH', explanation: 'Phản ứng với base cho thấy oxide đồng thời có mặt tính acid.' },
      { title: 'Kết hợp hai bằng chứng', explanation: 'E₂O₃ là oxide lưỡng tính.', result: 'E₂O₃ là oxide lưỡng tính' }
    ],
    mistakes: ['Chỉ dùng một trong hai phản ứng để phân loại.', 'Cho mọi oxide E₂O₃ đều là base.', 'Nhầm oxide lưỡng tính với oxide trung tính.'],
    tags: ['oxide lưỡng tính', 'phân loại oxide']
  }),
  chemProblem(topic, {
    content: 'Trong các nguyên tố F, Cl, Br, I, nguyên tố có ái lực nhận electron và tính oxi hóa của đơn chất mạnh nhất trong điều kiện thông thường là',
    correct: 'F', distractors: ['Cl', 'Br', 'I'],
    insight: 'Halogen ở đầu nhóm có bán kính nhỏ và độ âm điện lớn, nên đơn chất F₂ là chất oxi hóa mạnh nhất.',
    principle: 'Tính oxi hóa của halogen giảm dần F₂ > Cl₂ > Br₂ > I₂.',
    reasoning: [
      { title: 'Xét xu hướng trong nhóm', explanation: 'Đi xuống nhóm, bán kính tăng và lực hút electron nhận thêm giảm.' },
      { title: 'Liên hệ với phản ứng nhận electron', explanation: 'F₂ nhận electron thuận lợi nhất để tạo F⁻.' },
      { title: 'Chọn nguyên tố', explanation: 'Fluorine có đơn chất oxi hóa mạnh nhất.', result: 'F' }
    ],
    mistakes: ['Chọn iodine vì có nguyên tử khối lớn nhất.', 'Đồng nhất tính khử của ion halide với tính oxi hóa của halogen.', 'Cho chlorine mạnh nhất vì được dùng phổ biến hơn.'],
    tags: ['halogen', 'xu hướng nhóm']
  }),
  chemProblem(topic, {
    content: 'Nguyên tố M thuộc nhóm 1, nguyên tố X thuộc nhóm 16. Công thức hợp chất ion đơn giản tạo bởi M và X là',
    correct: 'M₂X', distractors: ['MX₂', 'MX', 'M₂X₃'],
    insight: 'M tạo M⁺ còn X tạo X²⁻; tổng điện tích trong hợp chất phải bằng không.',
    principle: 'Hai ion M⁺ trung hòa một ion X²⁻.',
    reasoning: [
      { title: 'Xác định ion điển hình', explanation: 'Mất một electron cho M⁺; nhận hai electron cho X²⁻.' },
      { title: 'Cân bằng điện tích', explanation: 'Cần 2(+1) + (−2) = 0.' },
      { title: 'Viết công thức tối giản', explanation: 'Hợp chất là M₂X.', result: 'M₂X' }
    ],
    mistakes: ['Dùng số thứ tự nhóm làm chỉ số trực tiếp.', 'Viết MX rồi bỏ qua điện tích.', 'Đổi chéo nhưng đặt chỉ số 2 cho X.'],
    tags: ['công thức ion', 'nhóm nguyên tố']
  }),
  chemProblem(topic, {
    content: 'Một oxide cao nhất có công thức X₂O₅. Trong hợp chất khí với hydrogen, X chiếm 82,35% khối lượng. X là',
    correct: 'N', distractors: ['P', 'S', 'Cl'],
    insight: 'X₂O₅ gợi nhóm 15; hydride khí có dạng XH₃ và phần trăm khối lượng xác định nguyên tử khối.',
    principle: 'M_X/(M_X + 3) = 0,8235 cho M_X ≈ 14, ứng với N, không phải P.',
    reasoning: [
      { title: 'Chọn dạng hydride', explanation: 'Nguyên tố nhóm 15 tạo hydride khí XH₃.' },
      { title: 'Lập phương trình phần trăm khối lượng', explanation: 'M/(M + 3) = 0,8235.' },
      { title: 'Giải nguyên tử khối', explanation: 'M ≈ 14 nên X là nitrogen, kí hiệu N.', result: 'N' }
    ],
    mistakes: ['Chọn phosphorus chỉ vì oxide P₂O₅ quen thuộc.', 'Dùng hydride XH₅.', 'Tính phần trăm hydrogen thay cho X.'],
    tags: ['hydride', 'nhận dạng nguyên tố']
  }),
  chemProblem(topic, {
    content: 'Cho bán kính cộng hóa trị gần đúng của C, N, O lần lượt là 77, 75, 73 pm. Nhận xét phù hợp nhất là',
    correct: 'Bán kính giảm dần khi điện tích hạt nhân tăng trong cùng chu kì', distractors: ['Bán kính tăng vì số electron tăng', 'Ba nguyên tử thuộc ba chu kì khác nhau', 'Bán kính chỉ phụ thuộc nguyên tử khối'],
    insight: 'Dữ liệu thực nghiệm minh họa trực tiếp xu hướng giảm bán kính từ trái sang phải.',
    principle: 'C, N, O cùng chu kì 2; điện tích hạt nhân hiệu dụng tăng làm lớp electron co lại.',
    reasoning: [
      { title: 'Đọc xu hướng từ bảng', explanation: '77 > 75 > 73 pm khi đi từ C đến O.' },
      { title: 'Xác định quan hệ vị trí', explanation: 'C, N, O cùng chu kì và Z tăng dần.' },
      { title: 'Giải thích dữ liệu', explanation: 'Lực hút hạt nhân tăng làm bán kính giảm.', result: 'Bán kính giảm dần khi điện tích hạt nhân tăng trong cùng chu kì' }
    ],
    mistakes: ['Chỉ nhìn số electron rồi dự đoán kích thước tăng.', 'So nguyên tử khối thay vì vị trí chu kì.', 'Cho chênh lệch nhỏ là không có xu hướng.'],
    tags: ['bán kính cộng hóa trị', 'dữ liệu tuần hoàn'],
    stimulus: chemistryTable('chem-periodic-18', 'Bán kính cộng hóa trị', 'Các giá trị được đo theo cùng một quy ước.', 'Bán kính nguyên tử', [{ key: 'element', label: 'Nguyên tố' }, { key: 'radius', label: 'Bán kính', unit: 'pm' }], [{ element: 'C', radius: 77 }, { element: 'N', radius: 75 }, { element: 'O', radius: 73 }])
  }),
  chemProblem(topic, {
    content: 'Một nguyên tố có công thức electron hóa trị ns²np⁶. Phát biểu đúng nhất là',
    correct: 'Nguyên tử có lớp ngoài cùng bão hòa và thường rất kém phản ứng', distractors: ['Nguyên tử dễ nhận thêm hai electron', 'Nguyên tử luôn tạo ion 2+', 'Nguyên tố là kim loại kiềm'],
    insight: 'Cấu hình bát tử kín đặc trưng khí hiếm, có độ bền cao.',
    principle: 'Phân lớp s và p ngoài cùng đều bão hòa nên việc nhận hoặc nhường electron đều không thuận lợi.',
    reasoning: [
      { title: 'Đếm electron hóa trị', explanation: 'ns²np⁶ chứa tám electron ngoài cùng.' },
      { title: 'Đánh giá độ bền cấu hình', explanation: 'Cấu hình kín làm nguyên tử khó thay đổi số electron.' },
      { title: 'Chọn mô tả phù hợp', explanation: 'Nguyên tử thường rất kém phản ứng.', result: 'Nguyên tử có lớp ngoài cùng bão hòa và thường rất kém phản ứng' }
    ],
    mistakes: ['Cho p⁶ còn trống hai vị trí.', 'Nhầm khí hiếm với kim loại nhóm 2.', 'Khẳng định khí hiếm tuyệt đối không tạo hợp chất trong mọi điều kiện.'],
    tags: ['khí hiếm', 'cấu hình bền']
  }),
  chemProblem(topic, {
    content: 'X và Y là hai nguyên tố chu kì 3. X có oxide cao nhất XO₃; Y có oxide cao nhất Y₂O₇. So sánh độ âm điện hợp lí là',
    correct: 'χ(Y) > χ(X)', distractors: ['χ(X) > χ(Y)', 'χ(X) = χ(Y)', 'Không thể so sánh từ vị trí chu kì'],
    insight: 'XO₃ ứng nhóm 16 còn Y₂O₇ ứng nhóm 17; Y nằm bên phải X trong cùng chu kì.',
    principle: 'Độ âm điện tăng từ trái sang phải.',
    reasoning: [
      { title: 'Suy ra nhóm từ oxide', explanation: 'X có số oxi hóa +6, Y có +7.' },
      { title: 'Xác định vị trí tương đối', explanation: 'Y thuộc nhóm ngay bên phải X trong chu kì 3.' },
      { title: 'Áp dụng xu hướng', explanation: 'Y có độ âm điện lớn hơn X.', result: 'χ(Y) > χ(X)' }
    ],
    mistakes: ['So số nguyên tử oxygen mà không tính số oxi hóa.', 'Cho độ âm điện giảm từ trái sang phải.', 'Xem X và Y ở hai chu kì khác nhau.'],
    tags: ['oxide cao nhất', 'độ âm điện']
  })
];
