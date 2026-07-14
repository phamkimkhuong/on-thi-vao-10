import type { QuestionType } from '@/types';

export const m3QuestionTypes: QuestionType[] = [
  {
    id: 'chem10-qt13', topicId: 'chem10-t3', name: 'Quy tắc Octet & Quá trình tạo Ion', slug: 'octet-tao-ion', description: 'Áp dụng quy tắc octet để giải thích xu hướng nhường/nhận electron.', exampleQuestionId: 'chem10-q13a', difficulty: 'easy', examFrequency: 'high',
    theory: ['Nguyên tử các nguyên tố có xu hướng nhường, nhận hoặc góp chung electron để đạt cấu hình lớp ngoài cùng vững bền như khí hiếm (8 electron, hoặc 2 electron với He). Kim loại dễ nhường e tạo cation; phi kim dễ nhận e tạo anion.'],
    recognitionSigns: ['Viết quá trình tạo ion.', 'Dự đoán ion đơn nguyên tử thường gặp.'], solvingSteps: ['Xác định số electron lớp ngoài cùng.', 'Nếu $\\le 3$: nhường hết để tạo cation mang điện dương.', 'Nếu $\\ge 5$: nhận thêm cho đủ 8 để tạo anion mang điện âm.'], commonMistakes: ['Nhầm dấu của điện tích ion (nhường electron mang điện dương, nhận electron mang điện âm).']
  },
  {
    id: 'chem10-qt14', topicId: 'chem10-t3', name: 'Liên kết Ion & Tinh thể', slug: 'lien-ket-ion-tinh-the', description: 'Nhận diện liên kết ion và giải thích tính chất vật lí của tinh thể ion.', exampleQuestionId: 'chem10-q14a', difficulty: 'medium', examFrequency: 'high',
    theory: ['Liên kết ion được hình thành do lực hút tĩnh điện giữa các ion mang điện tích trái dấu. Tinh thể ion bền vững, có nhiệt độ nóng chảy cao và dẫn điện được ở trạng thái nóng chảy hoặc dung dịch.'],
    recognitionSigns: ['Liên kết giữa kim loại điển hình và phi kim điển hình.', 'Giải thích độ dẫn điện hoặc nhiệt độ nóng chảy của muối.'], solvingSteps: ['Nhận diện hiệu độ âm điện lớn hoặc cặp kim loại–phi kim điển hình.', 'Thiết lập công thức tối giản để trung hòa điện.', 'Liên hệ trạng thái tự do của ion với khả năng dẫn điện.'], commonMistakes: ['Cho rằng tinh thể rắn dẫn điện tốt.']
  },
  {
    id: 'chem10-qt15', topicId: 'chem10-t3', name: 'Liên kết Cộng hóa trị & Công thức Lewis', slug: 'lien-ket-cong-hoa-tri-lewis', description: 'Viết công thức electron, công thức cấu tạo và công thức Lewis.', exampleQuestionId: 'chem10-q15a', difficulty: 'medium', examFrequency: 'high',
    theory: ['Liên kết cộng hóa trị được tạo nên bởi một hoặc nhiều cặp electron dùng chung giữa hai nguyên tử. Công thức electron biểu diễn mọi electron hóa trị; công thức Lewis biểu diễn cặp liên kết bằng gạch và cặp chưa liên kết.'],
    recognitionSigns: ['Yêu cầu đếm cặp electron dùng chung.', 'Yêu cầu nhận diện công thức Lewis.'], solvingSteps: ['Tính tổng electron hóa trị.', 'Đặt liên kết đơn giữa các nguyên tử.', 'Điền các electron còn lại để đạt octet cho các nguyên tử xung quanh rồi đến nguyên tử trung tâm.'], commonMistakes: ['Bỏ quên các cặp electron hóa trị chưa liên kết khi viết công thức Lewis.']
  },
  {
    id: 'chem10-qt16', topicId: 'chem10-t3', name: 'Độ phân cực liên kết & Phân tử', slug: 'phan-cuc-lien-ket-phan-tu', description: 'So sánh độ phân cực liên kết bằng hiệu độ âm điện và dự đoán độ phân cực phân tử.', exampleQuestionId: 'chem10-q16a', difficulty: 'medium', examFrequency: 'high',
    theory: ['Liên kết không phân cực (hiệu độ âm điện < 0,4), cộng hóa trị phân cực (0,4 đến 1,7), ion (> 1,7). Một phân tử chứa liên kết phân cực nhưng có thể không phân cực nếu cấu trúc đối xứng làm các moment liên kết triệt tiêu nhau.'],
    recognitionSigns: ['Cho hiệu độ âm điện.', 'Hỏi về độ phân cực phân tử CO2, H2O, CH4.'], solvingSteps: ['Tính hiệu độ âm điện.', 'Xác định chiều lệch của cặp electron liên kết.', 'Xét hình học phân tử để xem tổng moment có bằng 0 không.'], commonMistakes: ['Kết luận phân tử phân cực chỉ vì nó có liên kết phân cực.']
  },
  {
    id: 'chem10-qt17', topicId: 'chem10-t3', name: 'Tương tác Van der Waals & Liên kết Hydrogen', slug: 'van-der-waals-hydrogen', description: 'Giải thích ảnh hưởng của lực liên phân tử đến nhiệt độ sôi và tính tan.', exampleQuestionId: 'chem10-q17a', difficulty: 'medium', examFrequency: 'high',
    theory: ['Liên kết hydrogen hình thành khi H liên kết với nguyên tố độ âm điện lớn (F, O, N) và bị hút bởi cặp electron tự do của nguyên tố độ âm điện lớn khác. Lực Van der Waals là lực hút yếu giữa các lưỡng cực cảm ứng. Các tương tác này yếu hơn nhiều liên kết hóa học nhưng quyết định tính chất vật lí.'],
    recognitionSigns: ['Nhiệt độ sôi cao bất thường của nước, ethanol.', 'So sánh nhiệt độ sôi của khí hiếm hoặc phân tử không phân cực.'], solvingSteps: ['Xác định phân tử có tạo liên kết hydrogen liên phân tử không.', 'Nếu không, so sánh khối lượng phân tử và kích thước đám mây electron cho lực Van der Waals.', 'Kết luận về xu hướng nhiệt độ sôi.'], commonMistakes: ['Nhầm liên kết cộng hóa trị O–H trong phân tử là liên kết hydrogen.']
  }
];
