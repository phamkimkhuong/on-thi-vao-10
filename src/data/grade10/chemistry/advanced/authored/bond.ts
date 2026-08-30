import { chemProblem, chemistryTable } from './helpers';

const topic = 'chem10-adv-bond';

export const bondProblems = [
  chemProblem(topic, {
    content: 'Theo mô hình VSEPR, dạng hình học của SO₂ và nguyên nhân phân tử phân cực là',
    correct: 'gấp khúc; hai moment liên kết không triệt tiêu', distractors: ['thẳng; hai moment cùng chiều', 'tam giác phẳng; có ba liên kết', 'gấp khúc; liên kết S–O không phân cực'],
    insight: 'Quanh S có ba miền electron nhưng một miền là cặp electron tự do.',
    principle: 'Kiểu AX₂E có hình học miền electron tam giác phẳng, hình học phân tử gấp khúc.',
    reasoning: [
      { title: 'Đếm miền electron', explanation: 'Hai liên kết S–O và một cặp electron tự do tạo ba miền quanh S.' },
      { title: 'Dự đoán hình học', explanation: 'Ba miền sắp xếp gần tam giác phẳng, nhưng bỏ cặp tự do khỏi hình học phân tử cho dạng gấp khúc.' },
      { title: 'Xét moment lưỡng cực', explanation: 'Hai moment liên kết không đối nhau 180° nên tổng khác không.', result: 'gấp khúc; hai moment liên kết không triệt tiêu' }
    ],
    mistakes: ['Đếm liên kết đôi thành hai miền electron.', 'Dùng hình học miền electron làm hình học phân tử.', 'Cho hai liên kết giống nhau luôn triệt tiêu moment.'],
    tags: ['VSEPR', 'độ phân cực'], scope: 'grade10_specialized'
  }),
  chemProblem(topic, {
    content: 'Phân tử nào có moment lưỡng cực tổng bằng 0 dù mỗi liên kết với nguyên tử trung tâm đều phân cực?',
    correct: 'CO₂', distractors: ['H₂O', 'NH₃', 'SO₂'],
    insight: 'Hình học thẳng đối xứng của CO₂ làm hai moment C=O bằng nhau và ngược chiều.',
    principle: 'Độ phân cực phân tử phụ thuộc cả độ phân cực liên kết lẫn tổng vectơ moment.',
    reasoning: [
      { title: 'Xác định hình học ứng viên', explanation: 'CO₂ thẳng; H₂O và SO₂ gấp khúc; NH₃ chóp tam giác.' },
      { title: 'Cộng vectơ moment', explanation: 'Trong CO₂, hai moment C=O nằm cùng đường thẳng và ngược chiều.' },
      { title: 'Chốt phân tử không phân cực', explanation: 'Tổng moment bằng 0 nên CO₂ không phân cực.', result: 'CO₂' }
    ],
    mistakes: ['Cho liên kết phân cực thì phân tử bắt buộc phân cực.', 'Cộng độ lớn moment như các số vô hướng.', 'Nhầm H₂O có cấu trúc thẳng.'],
    tags: ['moment lưỡng cực', 'đối xứng phân tử']
  }),
  chemProblem(topic, {
    content: 'Trong ion NH₄⁺, liên kết được hình thành ban đầu khi NH₃ cho cặp electron vào H⁺ được gọi là',
    correct: 'liên kết cho–nhận', distractors: ['liên kết ion', 'liên kết hydrogen', 'liên kết kim loại'],
    insight: 'Cả hai electron dùng chung ban đầu xuất phát từ nitrogen.',
    principle: 'Liên kết cho–nhận vẫn là liên kết cộng hóa trị sau khi hình thành.',
    reasoning: [
      { title: 'Xác định bên cho electron', explanation: 'N trong NH₃ còn một cặp electron tự do.' },
      { title: 'Xác định bên nhận', explanation: 'H⁺ không có electron và nhận cặp electron từ N.' },
      { title: 'Gọi tên liên kết', explanation: 'Cặp dùng chung do một nguyên tử cung cấp tạo liên kết cho–nhận.', result: 'liên kết cho–nhận' }
    ],
    mistakes: ['Gọi liên kết N–H là ion chỉ vì các tiểu phân ban đầu mang điện.', 'Nhầm cặp electron tự do với liên kết hydrogen.', 'Cho rằng liên kết cho–nhận yếu hơn và luôn phân biệt được sau tạo thành.'],
    tags: ['liên kết cho–nhận', 'Lewis']
  }),
  chemProblem(topic, {
    content: 'Theo VSEPR, ion NH₄⁺ có dạng hình học và lai hóa của N lần lượt là',
    correct: 'tứ diện, sp³', distractors: ['chóp tam giác, sp³', 'tam giác phẳng, sp²', 'vuông phẳng, dsp²'],
    insight: 'N có bốn miền liên kết và không còn cặp electron tự do trong NH₄⁺.',
    principle: 'Bốn miền electron tương đương cho kiểu AX₄, hình tứ diện và lai hóa sp³.',
    reasoning: [
      { title: 'Đếm miền electron quanh N', explanation: 'Có bốn liên kết N–H, không có cặp tự do trên N.' },
      { title: 'Áp dụng VSEPR', explanation: 'Bốn miền đẩy nhau về bốn đỉnh tứ diện.' },
      { title: 'Liên hệ lai hóa', explanation: 'Bốn orbital định hướng tương đương phù hợp lai hóa sp³.', result: 'tứ diện, sp³' }
    ],
    mistakes: ['Giữ cặp electron tự do của NH₃ khi chuyển sang NH₄⁺.', 'Đếm điện tích dương thành một miền electron.', 'Nhầm bốn liên kết với hình vuông phẳng.'],
    tags: ['VSEPR', 'lai hóa'], scope: 'grade10_specialized'
  }),
  chemProblem(topic, {
    content: 'Trong BF₃, nguyên tử B có lai hóa và hình học gần đúng là',
    correct: 'sp², tam giác phẳng', distractors: ['sp, thẳng', 'sp³, tứ diện', 'sp³, chóp tam giác'],
    insight: 'B tạo ba liên kết sigma và không có cặp electron tự do.',
    principle: 'Ba miền electron quanh nguyên tử trung tâm tương ứng sp² và góc khoảng 120°.',
    reasoning: [
      { title: 'Đếm miền liên kết', explanation: 'Ba liên kết B–F tạo ba miền electron.' },
      { title: 'Dự đoán hình học', explanation: 'Ba miền bố trí trong một mặt phẳng để giảm lực đẩy.' },
      { title: 'Gắn với lai hóa', explanation: 'Ba orbital lai hóa tương đương là sp².', result: 'sp², tam giác phẳng' }
    ],
    mistakes: ['Buộc B phải đủ bát tử rồi thêm cặp electron không tồn tại.', 'Đếm ba F cộng B thành bốn miền.', 'Chọn sp³ chỉ vì phân tử có bốn nguyên tử.'],
    tags: ['lai hóa', 'thiếu octet'], scope: 'grade10_specialized'
  }),
  chemProblem(topic, {
    content: 'Cấu trúc Lewis ưu thế của CO có điện tích hình thức trên C và O lần lượt là',
    correct: '−1 và +1', distractors: ['0 và 0', '+1 và −1', '−2 và +2'],
    insight: 'Cấu trúc :C≡O: dùng mười electron hóa trị và mỗi nguyên tử còn một cặp electron tự do.',
    principle: 'FC = electron hóa trị − electron không liên kết − một nửa electron liên kết.',
    reasoning: [
      { title: 'Viết cấu trúc Lewis', explanation: 'Liên kết ba dùng sáu electron; mỗi nguyên tử giữ một cặp tự do.' },
      { title: 'Tính điện tích hình thức của C', explanation: 'C: 4 − 2 − 3 = −1.' },
      { title: 'Tính điện tích hình thức của O', explanation: 'O: 6 − 2 − 3 = +1.', result: '−1 và +1' }
    ],
    mistakes: ['Gán điện tích theo độ âm điện mà không tính electron.', 'Chia toàn bộ electron liên kết cho một nguyên tử.', 'Quên cặp electron tự do trên mỗi đầu.'],
    tags: ['điện tích hình thức', 'Lewis'], scope: 'grade10_specialized'
  }),
  chemProblem(topic, {
    content: 'Chất nào có nhiệt độ sôi cao bất thường chủ yếu do tạo mạng liên kết hydrogen giữa các phân tử?',
    correct: 'H₂O', distractors: ['H₂S', 'CH₄', 'CO₂'],
    insight: 'Liên kết O–H phân cực mạnh và O có cặp electron tự do, tạo mạng hydrogen rộng.',
    principle: 'Liên kết hydrogen đáng kể thường cần H gắn trực tiếp với F, O hoặc N.',
    reasoning: [
      { title: 'Tìm liên kết cho hydrogen', explanation: 'Chỉ H₂O có H gắn trực tiếp với O trong các lựa chọn.' },
      { title: 'Tìm tâm nhận hydrogen', explanation: 'O còn các cặp electron tự do có thể nhận liên kết hydrogen.' },
      { title: 'Liên hệ nhiệt độ sôi', explanation: 'Mạng tương tác mạnh cần nhiều năng lượng để tách phân tử.', result: 'H₂O' }
    ],
    mistakes: ['Cho phân tử có khối lượng mol lớn hơn luôn sôi cao hơn.', 'Gọi mọi lực hút giữa H và nguyên tử khác là liên kết hydrogen.', 'Bỏ vai trò cặp electron tự do.'],
    tags: ['liên kết hydrogen', 'nhiệt độ sôi']
  }),
  chemProblem(topic, {
    content: 'Hai chất HF và HCl có khối lượng mol lần lượt khoảng 20 và 36,5 g/mol, nhưng HF sôi cao hơn rõ rệt. Giải thích phù hợp nhất là',
    correct: 'HF tạo liên kết hydrogen mạnh giữa các phân tử', distractors: ['Liên kết H–F là liên kết ion hoàn toàn', 'HF có nhiều electron hơn HCl', 'HCl không có lực van der Waals'],
    insight: 'Khối lượng mol không phải yếu tố duy nhất; tương tác hydrogen có thể lấn át lực phân tán.',
    principle: 'F rất âm điện và nhỏ, làm liên kết H–F phân cực mạnh.',
    reasoning: [
      { title: 'Nhận ra nghịch lệch khối lượng mol', explanation: 'Nếu chỉ có lực phân tán, HCl nặng hơn thường được dự đoán sôi cao hơn.' },
      { title: 'Xác định tương tác đặc biệt', explanation: 'HF có cả tâm cho H–F và cặp electron tự do trên F.' },
      { title: 'Kết luận nguyên nhân', explanation: 'Liên kết hydrogen làm HF cần nhiều năng lượng hơn để hóa hơi.', result: 'HF tạo liên kết hydrogen mạnh giữa các phân tử' }
    ],
    mistakes: ['Gọi HF là hợp chất ion trong pha phân tử.', 'Cho HCl hoàn toàn không có lực liên phân tử.', 'Chỉ dùng khối lượng mol để kết luận.'],
    tags: ['hydrogen halide', 'lực liên phân tử']
  }),
  chemProblem(topic, {
    content: 'Số liên kết sigma và pi trong phân tử C₂H₄ lần lượt là',
    correct: '5 sigma và 1 pi', distractors: ['4 sigma và 2 pi', '6 sigma và 0 pi', '5 sigma và 2 pi'],
    insight: 'Mỗi liên kết đơn là một sigma; liên kết đôi gồm một sigma và một pi.',
    principle: 'Bốn C–H cho bốn sigma, liên kết C=C đóng góp một sigma và một pi.',
    reasoning: [
      { title: 'Đếm liên kết C–H', explanation: 'Có bốn liên kết đơn C–H, đều là sigma.' },
      { title: 'Phân tích liên kết đôi', explanation: 'C=C gồm một liên kết sigma và một liên kết pi.' },
      { title: 'Cộng tổng', explanation: 'Tổng là 5 sigma và 1 pi.', result: '5 sigma và 1 pi' }
    ],
    mistakes: ['Đếm liên kết đôi là hai liên kết pi.', 'Không tính liên kết sigma nằm trong C=C.', 'Đếm số cặp nguyên tử thay cho loại liên kết.'],
    tags: ['liên kết sigma', 'liên kết pi'], scope: 'grade10_specialized'
  }),
  chemProblem(topic, {
    content: 'Trong C₂H₂, mỗi nguyên tử C có lai hóa và góc H–C–C gần đúng là',
    correct: 'sp và 180°', distractors: ['sp² và 120°', 'sp³ và 109,5°', 'sp² và 180°'],
    insight: 'Mỗi C có hai miền electron: một liên kết với H và một liên kết ba với C còn lại.',
    principle: 'Liên kết bội chỉ tính là một miền trong VSEPR; hai miền cho lai hóa sp, dạng thẳng.',
    reasoning: [
      { title: 'Đếm miền quanh carbon', explanation: 'Liên kết C–H và C≡C là hai miền electron.' },
      { title: 'Suy ra lai hóa', explanation: 'Hai miền tương ứng hai orbital sp định hướng đối nhau.' },
      { title: 'Suy ra góc liên kết', explanation: 'Cấu trúc thẳng cho góc 180°.', result: 'sp và 180°' }
    ],
    mistakes: ['Đếm liên kết ba thành ba miền.', 'Chọn sp³ vì carbon tạo bốn liên kết tính theo bậc.', 'Dùng góc 120° của sp².'],
    tags: ['lai hóa', 'acetylene'], scope: 'grade10_specialized'
  }),
  chemProblem(topic, {
    content: 'Trong các chất NaCl, MgO, SiO₂ và CO₂ rắn, chất dự kiến có mạng tinh thể ion với lực hút tĩnh điện mạnh nhất là',
    correct: 'MgO', distractors: ['NaCl', 'SiO₂', 'CO₂ rắn'],
    insight: 'Trong hai tinh thể ion so sánh, Mg²⁺ và O²⁻ có tích điện tích lớn hơn Na⁺ và Cl⁻.',
    principle: 'Năng lượng mạng tăng khi điện tích ion tăng và khoảng cách ion giảm.',
    reasoning: [
      { title: 'Phân loại tinh thể', explanation: 'NaCl và MgO là ion; SiO₂ là mạng cộng hóa trị; CO₂ rắn là phân tử.' },
      { title: 'So điện tích các ion', explanation: 'MgO có cặp ion 2+/2−, tích điện tích lớn gấp bốn cặp 1+/1− của NaCl.' },
      { title: 'Kết luận lực hút mạng', explanation: 'MgO có lực hút tĩnh điện mạnh nhất trong các lựa chọn.', result: 'MgO' }
    ],
    mistakes: ['Gọi SiO₂ là tinh thể ion vì có hai nguyên tố.', 'Chỉ so khối lượng mol.', 'Bỏ bình phương ảnh hưởng điện tích trong lực Coulomb.'],
    tags: ['năng lượng mạng', 'tinh thể ion']
  }),
  chemProblem(topic, {
    content: 'Chất nào dẫn điện tốt ở trạng thái nóng chảy nhưng không dẫn điện ở trạng thái rắn?',
    correct: 'NaCl', distractors: ['Kim cương', 'Đồng kim loại', 'Đường sucrose'],
    insight: 'Tinh thể ion có hạt mang điện bị giữ cố định khi rắn và chuyển động được khi nóng chảy.',
    principle: 'Dẫn điện cần hạt mang điện tự do di chuyển.',
    reasoning: [
      { title: 'Xét trạng thái rắn', explanation: 'Trong NaCl rắn, Na⁺ và Cl⁻ nằm cố định tại nút mạng.' },
      { title: 'Xét trạng thái nóng chảy', explanation: 'Khi mạng bị phá vỡ, các ion chuyển động dưới điện trường.' },
      { title: 'Đối chiếu các chất khác', explanation: 'Đồng dẫn điện cả khi rắn; kim cương và đường không cho ion tự do.', result: 'NaCl' }
    ],
    mistakes: ['Cho mọi chất nóng chảy đều dẫn điện.', 'Nhầm electron tự do của kim loại với ion chuyển động.', 'Cho NaCl rắn dẫn điện vì có ion.'],
    tags: ['tinh thể ion', 'dẫn điện']
  }),
  chemProblem(topic, {
    content: 'Một phân tử AX₃ có ba liên kết A–X giống nhau và moment lưỡng cực tổng khác 0. Hình học phù hợp hơn cả là',
    correct: 'chóp tam giác', distractors: ['tam giác phẳng đối xứng', 'thẳng', 'tứ diện đều AX₄'],
    insight: 'Ba moment giống nhau triệt tiêu trong tam giác phẳng đối xứng nhưng không triệt tiêu trong chóp tam giác.',
    principle: 'Kiểu AX₃E có hình chóp và trục moment tổng đi qua nguyên tử trung tâm.',
    reasoning: [
      { title: 'Loại cấu trúc sai số phối trí', explanation: 'Dạng thẳng không phù hợp ba liên kết; tứ diện AX₄ có bốn liên kết.' },
      { title: 'So hai cấu trúc ba liên kết', explanation: 'Tam giác phẳng đối xứng cho tổng moment bằng 0.' },
      { title: 'Chọn cấu trúc phân cực', explanation: 'Chóp tam giác không đối xứng phẳng nên moment tổng khác 0.', result: 'chóp tam giác' }
    ],
    mistakes: ['Cho ba liên kết phân cực luôn tạo phân tử phân cực.', 'Không xét tính đối xứng.', 'Dùng số nguyên tử toàn phân tử để chọn hình.'],
    tags: ['VSEPR', 'moment phân tử']
  }),
  chemProblem(topic, {
    content: 'Cặp chất nào có thể tạo liên kết hydrogen đáng kể với nhau?',
    correct: 'NH₃ và H₂O', distractors: ['CH₄ và CO₂', 'H₂S và Cl₂', 'CCl₄ và CH₄'],
    insight: 'Cần có H gắn với N/O/F và nguyên tử N/O/F mang cặp electron tự do.',
    principle: 'NH₃ và H₂O đều vừa có tâm cho vừa có tâm nhận liên kết hydrogen.',
    reasoning: [
      { title: 'Tìm tâm cho hydrogen', explanation: 'NH₃ có N–H, H₂O có O–H.' },
      { title: 'Tìm tâm nhận', explanation: 'N và O đều có cặp electron tự do.' },
      { title: 'Chọn cặp tương tác', explanation: 'Hai chất có thể tạo mạng liên kết hydrogen với nhau.', result: 'NH₃ và H₂O' }
    ],
    mistakes: ['Chỉ cần phân tử chứa H là tạo liên kết hydrogen.', 'Xem H₂S tương đương H₂O về độ mạnh liên kết hydrogen.', 'Bỏ điều kiện cặp electron tự do.'],
    tags: ['liên kết hydrogen', 'tâm cho–nhận']
  }),
  chemProblem(topic, {
    content: 'Độ dài liên kết trung bình nào dự kiến nhỏ nhất?',
    correct: 'C≡C', distractors: ['C=C', 'C–C', 'C–N'],
    insight: 'Giữa cùng hai nguyên tử carbon, bậc liên kết càng lớn thì mật độ electron giữa hai hạt nhân càng cao và liên kết càng ngắn.',
    principle: 'Độ dài thường theo C≡C < C=C < C–C.',
    reasoning: [
      { title: 'Cố định loại nguyên tử so sánh', explanation: 'Ba lựa chọn đầu đều là liên kết C–C với bậc khác nhau.' },
      { title: 'Liên hệ bậc liên kết', explanation: 'Liên kết ba có bậc lớn nhất và kéo hai hạt nhân gần nhau nhất.' },
      { title: 'Chọn liên kết ngắn nhất', explanation: 'C≡C dự kiến có độ dài nhỏ nhất.', result: 'C≡C' }
    ],
    mistakes: ['Cho nhiều gạch liên kết nghĩa là dài hơn.', 'Chỉ so nguyên tử khối.', 'Đồng nhất độ dài với năng lượng liên kết.'],
    tags: ['bậc liên kết', 'độ dài liên kết']
  }),
  chemProblem(topic, {
    content: 'Dữ liệu cho thấy moment lưỡng cực thực của liên kết AB là 1,20 D, còn moment nếu liên kết ion hoàn toàn là 4,00 D. Phần trăm tính ion gần đúng là',
    correct: '30%', distractors: ['3%', '70%', '120%'],
    insight: 'Phần trăm tính ion được ước tính bằng tỉ số moment thực tế trên moment ion hoàn toàn.',
    principle: '% ion = μ_thực/μ_ion × 100%.',
    reasoning: [
      { title: 'Chọn đúng tỉ số', explanation: 'Moment thực tế là tử số vì nó chỉ bằng một phần trường hợp chuyển điện tích hoàn toàn.' },
      { title: 'Tính tỉ lệ', explanation: '1,20/4,00 = 0,30.' },
      { title: 'Đổi sang phần trăm', explanation: '0,30×100% = 30%.', result: '30%' }
    ],
    mistakes: ['Lấy 4,00/1,20 làm tỉ số.', 'Lấy hiệu hai moment.', 'Quên đổi số thập phân thành phần trăm.'],
    tags: ['moment lưỡng cực', 'phần trăm ion'], scope: 'grade10_specialized',
    stimulus: chemistryTable('chem-bond-16', 'Moment lưỡng cực AB', 'Giá trị ion hoàn toàn được tính với điện tích ±e.', 'Dữ liệu moment', [{ key: 'case', label: 'Trường hợp' }, { key: 'mu', label: 'Moment', unit: 'D' }], [{ case: 'Thực nghiệm', mu: 1.2 }, { case: 'Ion hoàn toàn', mu: 4.0 }])
  }),
  chemProblem(topic, {
    content: 'Cấu trúc Lewis nào của ion NO₃⁻ mô tả đúng nhất bản chất ba liên kết N–O thực nghiệm bằng nhau?',
    correct: 'Ba cấu trúc cộng hưởng tương đương, liên kết thực là trung gian', distractors: ['Một liên kết đôi cố định và hai liên kết đơn cố định', 'Ba liên kết ba N≡O', 'Ion luân phiên đổi cấu trúc theo thời gian'],
    insight: 'Cộng hưởng không phải sự dao động giữa các công thức; cấu trúc thực là lai cộng hưởng.',
    principle: 'Ba công thức Lewis chỉ khác vị trí liên kết pi và điện tích hình thức.',
    reasoning: [
      { title: 'Nhận diện các công thức tương đương', explanation: 'Liên kết đôi có thể đặt ở ba vị trí O khác nhau mà không đổi khung nguyên tử.' },
      { title: 'Diễn giải cộng hưởng', explanation: 'Electron pi được delocalize trên ba liên kết N–O.' },
      { title: 'Liên hệ dữ liệu độ dài', explanation: 'Ba liên kết thực tương đương và có bậc liên kết trung gian.', result: 'Ba cấu trúc cộng hưởng tương đương, liên kết thực là trung gian' }
    ],
    mistakes: ['Coi cấu trúc cộng hưởng là các phân tử khác nhau.', 'Cho liên kết đôi cố định ở một oxygen.', 'Cộng số liên kết trong ba công thức thành chín liên kết.'],
    tags: ['cộng hưởng', 'Lewis'], scope: 'grade10_specialized'
  }),
  chemProblem(topic, {
    content: 'Nguyên tử trung tâm trong SF₆ có sáu miền liên kết và không có cặp electron tự do. Hình học phân tử là',
    correct: 'bát diện', distractors: ['tứ diện', 'lưỡng tháp tam giác', 'vuông phẳng'],
    insight: 'Sáu miền electron tương đương hướng về sáu đỉnh của bát diện.',
    principle: 'Kiểu VSEPR AX₆ có góc 90° và 180°.',
    reasoning: [
      { title: 'Xác định kiểu AXE', explanation: 'SF₆ là AX₆, E = 0.' },
      { title: 'Áp dụng bố trí sáu miền', explanation: 'Sáu miền tối đa hóa khoảng cách bằng hình bát diện.' },
      { title: 'Chốt hình học', explanation: 'Hình học phân tử là bát diện.', result: 'bát diện' }
    ],
    mistakes: ['Chọn lưỡng tháp tam giác của năm miền.', 'Cho sáu F tạo lục giác phẳng.', 'Áp quy tắc octet cứng nhắc rồi loại phân tử.'],
    tags: ['VSEPR mở rộng', 'bát diện'], scope: 'olympiad_extension'
  }),
  chemProblem(topic, {
    content: 'Trong PCl₅, hình học lưỡng tháp tam giác có hai loại vị trí. Liên kết P–Cl trục thường dài hơn liên kết P–Cl xích đạo vì',
    correct: 'vị trí trục chịu ba tương tác 90° với các liên kết xích đạo', distractors: ['chlorine trục có nguyên tử khối lớn hơn', 'liên kết trục là liên kết ion', 'vị trí xích đạo không có lực đẩy electron'],
    insight: 'Khác biệt độ dài xuất phát từ số tương tác 90° bất lợi quanh từng miền liên kết.',
    principle: 'Miền trục gần ba miền xích đạo ở góc 90°, còn mỗi miền xích đạo chỉ gần hai miền trục ở 90°.',
    reasoning: [
      { title: 'Mô tả hai loại vị trí', explanation: 'Có hai liên kết trục và ba liên kết xích đạo.' },
      { title: 'Đếm tương tác góc vuông', explanation: 'Mỗi miền trục chịu ba tương tác 90°, gây lực đẩy lớn.' },
      { title: 'Liên hệ độ dài', explanation: 'Lực đẩy lớn làm liên kết trục yếu và dài hơn.', result: 'vị trí trục chịu ba tương tác 90° với các liên kết xích đạo' }
    ],
    mistakes: ['Cho các nguyên tử Cl trong cùng phân tử có khối lượng khác nhau.', 'Gọi liên kết trục là ion.', 'Cho góc 90° giảm lực đẩy so với 120°.'],
    tags: ['VSEPR', 'lưỡng tháp tam giác'], scope: 'olympiad_extension'
  }),
  chemProblem(topic, {
    content: 'Trong tinh thể kim cương, mỗi nguyên tử C liên kết với bốn C khác. Tính chất nào được giải thích trực tiếp nhất bởi mạng cộng hóa trị ba chiều này?',
    correct: 'Độ cứng rất lớn và nhiệt độ nóng chảy cao', distractors: ['Dẫn điện tốt như kim loại', 'Dễ bay hơi ở nhiệt độ phòng', 'Tan mạnh trong nước'],
    insight: 'Muốn làm biến dạng hoặc nóng chảy phải phá nhiều liên kết cộng hóa trị mạnh trong toàn mạng.',
    principle: 'Tinh thể mạng không gồm các phân tử riêng lẻ yếu liên kết với nhau.',
    reasoning: [
      { title: 'Nhận diện kiểu tinh thể', explanation: 'Mỗi C nối cộng hóa trị với bốn C tạo mạng không gian liên tục.' },
      { title: 'Xét quá trình nóng chảy', explanation: 'Không thể chỉ tách các phân tử; phải phá nhiều liên kết C–C mạnh.' },
      { title: 'Suy ra tính chất vĩ mô', explanation: 'Kim cương rất cứng và có nhiệt độ nóng chảy cao.', result: 'Độ cứng rất lớn và nhiệt độ nóng chảy cao' }
    ],
    mistakes: ['Cho mọi chất chứa carbon đều dẫn điện.', 'Xem kim cương là tập hợp phân tử C riêng lẻ.', 'Dùng độ tan để suy luận trực tiếp từ độ cứng.'],
    tags: ['tinh thể mạng', 'kim cương']
  }),
  chemProblem(topic, {
    content: 'Graphite dẫn điện theo các lớp tốt hơn kim cương chủ yếu vì',
    correct: 'có electron pi delocalize chuyển động dọc theo lớp', distractors: ['có ion C⁴⁺ tự do', 'liên kết C–C trong graphite hoàn toàn là kim loại', 'graphite chứa nước giữa các lớp'],
    insight: 'Mỗi C sp² còn một orbital p tham gia hệ pi delocalize trên cả lớp.',
    principle: 'Electron delocalize có thể đáp ứng điện trường trong mặt phẳng lớp.',
    reasoning: [
      { title: 'So lai hóa carbon', explanation: 'Graphite có C sp²; kim cương có C sp³.' },
      { title: 'Xác định electron còn lại', explanation: 'Orbital p chưa lai hóa tạo hệ pi trải rộng trên lớp.' },
      { title: 'Liên hệ dẫn điện', explanation: 'Electron pi delocalize mang điện tích dọc theo lớp.', result: 'có electron pi delocalize chuyển động dọc theo lớp' }
    ],
    mistakes: ['Cho graphite chứa ion carbon tự do.', 'Gọi mọi electron dùng chung là electron dẫn.', 'Bỏ tính định hướng theo lớp của độ dẫn.'],
    tags: ['graphite', 'electron delocalize'], scope: 'grade10_specialized'
  }),
  chemProblem(topic, {
    content: 'Từ dữ liệu nhiệt độ sôi CH₄ = −161°C, SiH₄ = −112°C, GeH₄ = −88°C, xu hướng tăng chủ yếu do',
    correct: 'lực phân tán London tăng khi đám mây electron lớn hơn', distractors: ['liên kết hydrogen tăng dần', 'các phân tử chuyển thành ion', 'độ phân cực vĩnh viễn tăng mạnh do hình tứ diện'],
    insight: 'Ba phân tử tứ diện đối xứng, không có liên kết hydrogen; số electron và độ phân cực hóa tăng xuống nhóm.',
    principle: 'Lực London mạnh hơn với đám mây electron lớn và dễ biến dạng.',
    reasoning: [
      { title: 'Loại liên kết hydrogen', explanation: 'H không gắn với N, O hoặc F trong cả ba chất.' },
      { title: 'Xét tính đối xứng', explanation: 'Các phân tử tứ diện đối xứng gần như không có moment vĩnh viễn.' },
      { title: 'Giải thích xu hướng', explanation: 'Đám mây electron lớn dần làm lực London tăng và nhiệt độ sôi tăng.', result: 'lực phân tán London tăng khi đám mây electron lớn hơn' }
    ],
    mistakes: ['Gọi mọi hợp chất chứa H là có liên kết hydrogen.', 'Cho phân tử nặng hơn tự động trở thành ion.', 'Bỏ vai trò độ phân cực hóa.'],
    tags: ['London', 'dữ liệu nhiệt độ sôi'],
    stimulus: chemistryTable('chem-bond-22', 'Nhiệt độ sôi hydride nhóm 14', 'Các giá trị tại áp suất chuẩn.', 'Dữ liệu nhiệt độ sôi', [{ key: 'compound', label: 'Chất' }, { key: 'bp', label: 'Nhiệt độ sôi', unit: '°C' }], [{ compound: 'CH₄', bp: -161 }, { compound: 'SiH₄', bp: -112 }, { compound: 'GeH₄', bp: -88 }])
  }),
  chemProblem(topic, {
    content: 'Một phân tử AX₂E₂ có bốn miền electron quanh A. Dự đoán đúng là',
    correct: 'hình gấp khúc, góc X–A–X nhỏ hơn 109,5°', distractors: ['hình thẳng, góc 180°', 'tam giác phẳng, góc 120°', 'tứ diện đều, góc đúng 109,5°'],
    insight: 'Hai cặp electron tự do chiếm không gian mạnh hơn cặp liên kết và ép góc liên kết nhỏ lại.',
    principle: 'Hình học miền electron tứ diện nhưng hình học phân tử chỉ xét hai nguyên tử X.',
    reasoning: [
      { title: 'Xác định hình học miền electron', explanation: 'Bốn miền quanh A sắp xếp gần tứ diện.' },
      { title: 'Bỏ cặp tự do khi gọi hình phân tử', explanation: 'Chỉ hai vị trí X được nối, tạo dạng gấp khúc.' },
      { title: 'Đánh giá góc', explanation: 'Lực đẩy của hai cặp tự do làm góc nhỏ hơn 109,5°.', result: 'hình gấp khúc, góc X–A–X nhỏ hơn 109,5°' }
    ],
    mistakes: ['Gọi hình học miền electron là hình tứ diện của phân tử.', 'Đếm hai cặp tự do thành hai nguyên tử.', 'Cho cặp tự do đẩy yếu hơn cặp liên kết.'],
    tags: ['VSEPR', 'cặp electron tự do']
  }),
  chemProblem(topic, {
    content: 'Phân tử XeF₂ có năm miền electron quanh Xe, trong đó ba miền là cặp tự do. Theo VSEPR, dạng hình học phân tử là',
    correct: 'thẳng', distractors: ['gấp khúc', 'tam giác phẳng', 'chóp tam giác'],
    insight: 'Trong lưỡng tháp tam giác, ba cặp tự do ưu tiên ba vị trí xích đạo, để hai liên kết nằm đối nhau ở trục.',
    principle: 'Kiểu AX₂E₃ cho hai nguyên tử X ở góc 180°.',
    reasoning: [
      { title: 'Xác định hình học năm miền', explanation: 'Năm miền electron tạo lưỡng tháp tam giác.' },
      { title: 'Đặt cặp electron tự do', explanation: 'Ba cặp tự do chiếm ba vị trí xích đạo để giảm tương tác 90°.' },
      { title: 'Nhìn hai liên kết còn lại', explanation: 'Hai F ở hai vị trí trục đối nhau, nên phân tử thẳng.', result: 'thẳng' }
    ],
    mistakes: ['Cho ba cặp tự do tạo ba liên kết.', 'Đặt cặp tự do ở vị trí trục bất lợi.', 'Dùng tổng năm miền để gọi phân tử lưỡng tháp.'],
    tags: ['VSEPR mở rộng', 'cặp tự do'], scope: 'olympiad_extension'
  })
];
