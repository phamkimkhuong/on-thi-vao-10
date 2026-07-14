import type { QuestionType } from '@/types';

export const m6QuestionTypes: QuestionType[] = [
  {
    id: 'chem10-qt26', topicId: 'chem10-t6', name: 'Tốc độ Trung bình', slug: 'toc-do-trung-binh', description: 'Tính biến thiên nồng độ theo thời gian.', exampleQuestionId: 'chem10-q26a', difficulty: 'easy', examFrequency: 'high',
    theory: ['Tốc độ trung bình là độ biến thiên nồng độ trong một khoảng thời gian. Chất đầu giảm nên dùng dấu âm để tốc độ dương; sản phẩm tăng.'],
    recognitionSigns: ['Cho nồng độ ở hai thời điểm.'], solvingSteps: ['Tính ΔC.', 'Tính Δt.', 'Xét dấu, hệ số và đơn vị.'], commonMistakes: ['Quên dấu hoặc đơn vị.']
  },
  {
    id: 'chem10-qt27', topicId: 'chem10-t6', name: 'Đồ thị Nồng độ–Thời gian', slug: 'do-thi-nong-do-thoi-gian', description: 'Đọc xu hướng và độ dốc.', exampleQuestionId: 'chem10-q27a', difficulty: 'medium', examFrequency: 'high',
    theory: ['Chất đầu thường giảm, sản phẩm tăng. Độ lớn độ dốc biểu thị tốc độ tức thời tương đối; đường thường phẳng dần khi chất đầu bị tiêu thụ.'],
    recognitionSigns: ['Cho đồ thị C–t.'], solvingSteps: ['Đọc trục.', 'Xác định đường tăng/giảm.', 'So sánh độ dốc.'], commonMistakes: ['Đồng nhất nồng độ lớn với tốc độ lớn.']
  },
  {
    id: 'chem10-qt28', topicId: 'chem10-t6', name: 'Va chạm & Yếu tố Ảnh hưởng', slug: 'va-cham-yeu-to', description: 'Giải thích các yếu tố làm đổi tốc độ.', exampleQuestionId: 'chem10-q28a', difficulty: 'medium', examFrequency: 'high',
    theory: ['Va chạm hiệu quả cần đủ năng lượng và định hướng phù hợp. Nồng độ/áp suất tăng tần suất va chạm; nhiệt độ tăng tỉ lệ hạt đủ năng lượng; nghiền nhỏ tăng diện tích tiếp xúc.'],
    recognitionSigns: ['So sánh điều kiện phản ứng.'], solvingSteps: ['Xác định yếu tố thay đổi.', 'Liên hệ va chạm hiệu quả.', 'Chỉ kết luận về tốc độ.'], commonMistakes: ['Cho rằng nhanh hơn luôn tạo nhiều sản phẩm hơn.']
  },
  {
    id: 'chem10-qt29', topicId: 'chem10-t6', name: 'Xúc tác & Thiết kế Thí nghiệm', slug: 'xuc-tac-thi-nghiem', description: 'Giải thích xúc tác và kiểm soát biến.', exampleQuestionId: 'chem10-q29a', difficulty: 'medium', examFrequency: 'high',
    theory: ['Xúc tác tạo con đường có năng lượng hoạt hóa thấp hơn, tăng tốc độ nhưng không đổi ΔH. Thí nghiệm công bằng chỉ thay một biến và giữ các biến khác ổn định.'],
    recognitionSigns: ['So sánh có/không xúc tác.'], solvingSteps: ['Xác định biến.', 'Kiểm tra biến kiểm soát.', 'Giải thích bằng năng lượng hoạt hóa.'], commonMistakes: ['Cho rằng xúc tác đổi ΔH hoặc lượng sản phẩm cuối.']
  }
];
