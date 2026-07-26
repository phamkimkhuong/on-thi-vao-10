import type { Question } from '@/types';

/** Bù có mục tiêu cho các subtype và kiểu biểu diễn còn mỏng sau audit metadata. */
export const g10PhysicsModule0GapFillQuestions: Question[] = [
  {
    id: 'phy10-m0-q106', subjectId: 'physics', topicId: 'phy10-t0', questionTypeId: 'phy10-qt1',
    content: 'Muốn khảo sát sự nguội của 100 mL nước từ khoảng 70°C, phương án vừa khoa học vừa an toàn nhất là',
    responseType: 'single_choice',
    options: ['A. Dùng cốc chịu nhiệt đặt ổn định, cố định nhiệt kế, đo theo khoảng thời gian đều và tránh chạm nước nóng.', 'B. Cầm cốc trên tay và ước lượng nhiệt độ.', 'C. Thay lượng nước ở mỗi lần đo.', 'D. Chạm tay vào nước để kiểm tra nhanh.'],
    correctAnswer: 'A', acceptedAnswers: ['A', 'a'], validatorType: 'choice', difficulty: 'easy', sourceType: 'manual',
    outcomeIds: ['PHY10-M0-O01', 'PHY10-M0-O02'], competency: 'physical_inquiry', cognitiveLevel: 'application', estimatedSeconds: 55,
    subTypeId: 'phy10-qt1-st4', practiceRole: 'guided', representationType: 'experiment'
  },
  {
    id: 'phy10-m0-q107', subjectId: 'physics', topicId: 'phy10-t0', questionTypeId: 'phy10-qt1',
    content: 'Để kiểm tra ảnh hưởng của góc chiếu sáng đến điện áp của một tấm pin nhỏ, thiết kế nào tạo phép so sánh công bằng nhất?',
    responseType: 'single_choice',
    options: ['A. Giữ nguồn sáng, khoảng cách và tấm pin cố định; chỉ thay góc, đo lặp điện áp ở mỗi góc.', 'B. Mỗi góc dùng một bóng đèn và một tấm pin khác nhau.', 'C. Đồng thời thay góc và khoảng cách.', 'D. Chỉ chọn hai số đo phù hợp dự đoán.'],
    correctAnswer: 'A', acceptedAnswers: ['A', 'a'], validatorType: 'choice', difficulty: 'medium', sourceType: 'manual',
    outcomeIds: ['PHY10-M0-O01'], competency: 'physical_inquiry', cognitiveLevel: 'application', estimatedSeconds: 65,
    subTypeId: 'phy10-qt1-st4', practiceRole: 'far_transfer', representationType: 'experiment'
  },

  {
    id: 'phy10-m0-q108', subjectId: 'physics', topicId: 'phy10-t0', questionTypeId: 'phy10-qt3',
    stimulus: { id: 'phy10-m0-st108', title: 'Năm lần đo thời gian', dataTable: { caption: 'Kết quả cùng điều kiện', columns: [{ key: 'trial', label: 'Lần' }, { key: 'time', label: 't', unit: 's' }], rows: [{ trial: 1, time: 12.1 }, { trial: 2, time: 12.0 }, { trial: 3, time: 17.8 }, { trial: 4, time: 12.1 }, { trial: 5, time: 11.9 }] } },
    content: 'Giá trị có dấu hiệu ngoại lai rõ nhất là', responseType: 'single_choice',
    options: ['A. 11,9 s.', 'B. 12,0 s.', 'C. 12,1 s.', 'D. 17,8 s.'], correctAnswer: 'D', acceptedAnswers: ['D', 'd'], validatorType: 'choice',
    difficulty: 'easy', sourceType: 'manual', outcomeIds: ['PHY10-M0-O04'], competency: 'physical_inquiry', cognitiveLevel: 'recognition', estimatedSeconds: 45,
    subTypeId: 'phy10-qt3-st3', practiceRole: 'guided', representationType: 'table'
  },
  {
    id: 'phy10-m0-q109', subjectId: 'physics', topicId: 'phy10-t0', questionTypeId: 'phy10-qt3',
    stimulus: { id: 'phy10-m0-st109', title: 'Đo chiều dài một vật', dataTable: { caption: 'Bốn kết quả', columns: [{ key: 'trial', label: 'Lần' }, { key: 'length', label: 'l', unit: 'cm' }], rows: [{ trial: 1, length: 4.98 }, { trial: 2, length: 5.01 }, { trial: 3, length: 4.99 }, { trial: 4, length: 5.43 }] } },
    content: 'Cách xử lí khoa học nhất đối với kết quả 5,43 cm là', responseType: 'single_choice',
    options: ['A. Xóa ngay vì khác ba số còn lại.', 'B. Kiểm tra ghi chép và dụng cụ, đo lại rồi mới quyết định giữ hay loại.', 'C. Giữ chắc chắn vì mọi số đo đều đúng.', 'D. Thay bằng 5,00 cm mà không ghi chú.'],
    correctAnswer: 'B', acceptedAnswers: ['B', 'b'], validatorType: 'choice', difficulty: 'medium', sourceType: 'manual',
    outcomeIds: ['PHY10-M0-O04'], competency: 'physical_inquiry', cognitiveLevel: 'application', estimatedSeconds: 60,
    subTypeId: 'phy10-qt3-st3', practiceRole: 'misconception_check', representationType: 'table'
  },

  {
    id: 'phy10-m0-q110', subjectId: 'physics', topicId: 'phy10-t0', questionTypeId: 'phy10-qt5',
    content: 'Số nào sau đây có đúng bốn chữ số có nghĩa?', responseType: 'single_choice',
    options: ['A. 0,0045', 'B. 0,04050', 'C. 0,0405', 'D. 0,00040'], correctAnswer: 'B', acceptedAnswers: ['B', 'b'], validatorType: 'choice',
    difficulty: 'easy', sourceType: 'manual', outcomeIds: ['PHY10-M0-O06'], competency: 'physical_cognition', cognitiveLevel: 'understanding', estimatedSeconds: 45,
    subTypeId: 'phy10-qt5-st3', practiceRole: 'guided', representationType: 'text'
  },
  {
    id: 'phy10-m0-q111', subjectId: 'physics', topicId: 'phy10-t0', questionTypeId: 'phy10-qt5',
    content: 'Một bạn ghi $t=(2{,}347\\pm0{,}1)$ s. Nhận xét và cách sửa phù hợp nhất là', responseType: 'single_choice',
    options: ['A. Đúng vì càng nhiều chữ số càng chính xác.', 'B. Sai vì giá trị trung bình chưa cùng hàng với sai số; nên ghi $(2{,}3\\pm0{,}1)$ s.', 'C. Sai vì phải bỏ đơn vị.', 'D. Sai vì phải ghi $(2\\pm1)$ s.'],
    correctAnswer: 'B', acceptedAnswers: ['B', 'b'], validatorType: 'choice', difficulty: 'medium', sourceType: 'manual',
    outcomeIds: ['PHY10-M0-O06'], competency: 'physical_cognition', cognitiveLevel: 'application', estimatedSeconds: 55,
    subTypeId: 'phy10-qt5-st4', practiceRole: 'misconception_check', representationType: 'equation'
  },

  {
    id: 'phy10-m0-q112', subjectId: 'physics', topicId: 'phy10-t0', questionTypeId: 'phy10-qt6',
    stimulus: { id: 'phy10-m0-st112', title: 'Đo bán kính hình tròn', dataTable: { caption: 'Kết quả đo trực tiếp', columns: [{ key: 'quantity', label: 'Đại lượng' }, { key: 'value', label: 'Giá trị', unit: 'cm' }, { key: 'error', label: 'Sai số', unit: 'cm' }], rows: [{ quantity: 'r', value: 10.0, error: 0.2 }] } },
    content: 'Với $S=\\pi r^2$, sai số tỉ đối gần đúng của diện tích bằng bao nhiêu phần trăm?', responseType: 'short_answer',
    correctAnswer: '4', acceptedAnswers: ['4', '4%', '4.0', '4,0'], validatorType: 'exact', difficulty: 'medium', sourceType: 'manual',
    outcomeIds: ['PHY10-M0-O07'], competency: 'physical_cognition', cognitiveLevel: 'application', estimatedSeconds: 70,
    subTypeId: 'phy10-qt6-st3', practiceRole: 'representation_switch', representationType: 'table'
  },
  {
    id: 'phy10-m0-q113', subjectId: 'physics', topicId: 'phy10-t0', questionTypeId: 'phy10-qt6',
    content: 'Đại lượng Q được tính bằng cách lấy a nhân b rồi chia cho c. Sai số tỉ đối của a, b, c lần lượt là 1%, 2% và 3%. Sai số tỉ đối cực đại của Q là',
    responseType: 'single_choice', options: ['A. 0%.', 'B. 2%.', 'C. 4%.', 'D. 6%.'], correctAnswer: 'D', acceptedAnswers: ['D', 'd'], validatorType: 'choice',
    difficulty: 'easy', sourceType: 'manual', outcomeIds: ['PHY10-M0-O07'], competency: 'physical_cognition', cognitiveLevel: 'application', estimatedSeconds: 45,
    subTypeId: 'phy10-qt6-st2', practiceRole: 'retention', representationType: 'text'
  },

  {
    id: 'phy10-m0-q114', subjectId: 'physics', topicId: 'phy10-t0', questionTypeId: 'phy10-qt7',
    stimulus: { id: 'phy10-m0-st114', title: 'Xe trên mặt phẳng nghiêng', media: [{ id: 'phy10-m0-media114', type: 'diagram', src: '/assets/physics/module0/ramp-photogate.svg', alt: 'Xe trượt trên máng nghiêng góc theta; cổng quang ở cuối máng đo thời gian.', longDescription: 'Góc nghiêng theta có thể thay đổi. Xe được thả từ cùng vị trí và cổng quang ghi thời gian chuyển động.' }] },
    content: 'Nếu khảo sát ảnh hưởng của góc nghiêng đến thời gian xe chuyển động, biến độc lập và biến phụ thuộc lần lượt là', responseType: 'single_choice',
    options: ['A. Góc nghiêng và thời gian.', 'B. Thời gian và góc nghiêng.', 'C. Khối lượng xe và góc nghiêng.', 'D. Cổng quang và chiều dài máng.'],
    correctAnswer: 'A', acceptedAnswers: ['A', 'a'], validatorType: 'choice', difficulty: 'easy', sourceType: 'manual',
    outcomeIds: ['PHY10-M0-O08'], competency: 'physical_inquiry', cognitiveLevel: 'understanding', estimatedSeconds: 50,
    subTypeId: 'phy10-qt7-st1', practiceRole: 'representation_switch', representationType: 'diagram'
  },
  {
    id: 'phy10-m0-q115', subjectId: 'physics', topicId: 'phy10-t0', questionTypeId: 'phy10-qt7',
    content: 'Quy trình nào phù hợp nhất để đo tốc độ trung bình của xe giữa hai vị trí?', responseType: 'single_choice',
    options: ['A. Đo khoảng cách hai vị trí; đo thời gian xe đi giữa chúng; lặp lại; tính $v=s/t$ cho dữ liệu phù hợp.', 'B. Chỉ nhìn xe rồi đoán tốc độ.', 'C. Thay khoảng cách sau mỗi lần nhưng không ghi lại.', 'D. Đẩy xe khác lực mỗi lần và lấy kết quả lớn nhất.'],
    correctAnswer: 'A', acceptedAnswers: ['A', 'a'], validatorType: 'choice', difficulty: 'medium', sourceType: 'manual',
    outcomeIds: ['PHY10-M0-O08'], competency: 'physical_inquiry', cognitiveLevel: 'application', estimatedSeconds: 60,
    subTypeId: 'phy10-qt7-st2', practiceRole: 'near_transfer', representationType: 'experiment'
  },
  {
    id: 'phy10-m0-q116', subjectId: 'physics', topicId: 'phy10-t0', questionTypeId: 'phy10-qt7',
    stimulus: { id: 'phy10-m0-st116', title: 'Đồ thị kết quả đo con lắc', media: [{ id: 'phy10-m0-media116', type: 'chart', src: '/assets/physics/module0/period-length-graph.svg', alt: 'Đồ thị T bình phương theo chiều dài l với các điểm gần một đường thẳng qua gốc.', longDescription: 'Bốn điểm đo khi l tăng từ 0,2 đến 0,8 mét nằm gần đường thẳng đi lên và đi qua gần gốc tọa độ.' }] },
    content: 'Kết luận phù hợp nhất trong phạm vi dữ liệu là', responseType: 'single_choice',
    options: ['A. $T^2$ xấp xỉ tỉ lệ thuận với $l$.', 'B. $T^2$ tỉ lệ nghịch với $l$.', 'C. $T^2$ không phụ thuộc $l$.', 'D. Quan hệ chắc chắn đúng với mọi chiều dài có thể có.'],
    correctAnswer: 'A', acceptedAnswers: ['A', 'a'], validatorType: 'choice', difficulty: 'medium', sourceType: 'manual',
    outcomeIds: ['PHY10-M0-O08'], competency: 'physical_inquiry', cognitiveLevel: 'application', estimatedSeconds: 65,
    subTypeId: 'phy10-qt7-st3', practiceRole: 'representation_switch', representationType: 'graph'
  },
  {
    id: 'phy10-m0-q117', subjectId: 'physics', topicId: 'phy10-t0', questionTypeId: 'phy10-qt7',
    stimulus: { id: 'phy10-m0-st117', title: 'Đo mẫu chuẩn 50,00 g', dataTable: { caption: 'Kết quả hai cân', columns: [{ key: 'scale', label: 'Cân' }, { key: 'm1', label: 'Lần 1', unit: 'g' }, { key: 'm2', label: 'Lần 2', unit: 'g' }, { key: 'm3', label: 'Lần 3', unit: 'g' }], rows: [{ scale: 'P', m1: 49.95, m2: 50.05, m3: 50.00 }, { scale: 'Q', m1: 50.40, m2: 50.40, m3: 50.40 }] } },
    content: 'Nhận xét đúng nhất là', responseType: 'single_choice',
    options: ['A. Q đúng hơn vì ba số giống nhau.', 'B. P gần giá trị chuẩn; Q rất chụm nhưng có dấu hiệu lệch hệ thống.', 'C. P không chụm và không đúng.', 'D. Hai cân tương đương hoàn toàn.'],
    correctAnswer: 'B', acceptedAnswers: ['B', 'b'], validatorType: 'choice', difficulty: 'medium', sourceType: 'manual',
    outcomeIds: ['PHY10-M0-O08'], competency: 'physical_inquiry', cognitiveLevel: 'application', estimatedSeconds: 70,
    subTypeId: 'phy10-qt7-st4', practiceRole: 'near_transfer', representationType: 'table'
  },
  {
    id: 'phy10-m0-q118', subjectId: 'physics', topicId: 'phy10-t0', questionTypeId: 'phy10-qt7',
    stimulus: { id: 'phy10-m0-st118', title: 'Đọc đồng hồ kim có dải gương', media: [{ id: 'phy10-m0-media118', type: 'diagram', src: '/assets/physics/module0/analog-meter-parallax.svg', alt: 'Mắt nhìn xiên vào đồng hồ kim nên kim và ảnh của kim trên dải gương không trùng nhau.', longDescription: 'Đường nhìn của mắt không vuông góc mặt thang. Kim thật và ảnh trong gương xuất hiện ở hai vị trí khác nhau, gây sai số thị sai.' }] },
    content: 'Cải tiến đầy đủ nhất để giảm sai lệch khi đọc đồng hồ này là', responseType: 'single_choice',
    options: ['A. Đặt mắt sao cho kim che ảnh của chính nó trên gương, kiểm tra điểm không rồi mới đọc.', 'B. Nhìn xiên cố định và ghi thêm nhiều chữ số.', 'C. Chỉ đọc bằng một mắt từ xa bất kì.', 'D. Bỏ qua điểm không vì dải gương đã loại mọi sai số.'],
    correctAnswer: 'A', acceptedAnswers: ['A', 'a'], validatorType: 'choice', difficulty: 'hard', sourceType: 'manual',
    outcomeIds: ['PHY10-M0-O08'], competency: 'physical_inquiry', cognitiveLevel: 'application', estimatedSeconds: 75,
    subTypeId: 'phy10-qt7-st5', practiceRole: 'far_transfer', representationType: 'diagram'
  }
];
