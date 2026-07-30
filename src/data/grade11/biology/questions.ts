import { Question } from '@/types';

export const g11BiologyQuestions: Question[] = [
  // bio11-qt01
  {
    id: 'bio11-q01',
    subjectId: 'biology',
    topicId: 'bio11-t01',
    questionTypeId: 'bio11-qt01',
    content: 'Nước và các ion khoáng được vận chuyển từ đất vào rễ cây qua cơ chế nào?',
    options: [
      'A. Nước và ion khoáng chỉ được vận chuyển chủ động qua tế bào lông hút',
      'B. Nước được vận chuyển thụ động (thẩm thấu); ion khoáng được vận chuyển thụ động và chủ động',
      'C. Nước và ion khoáng đều được vận chuyển bằng cơ chế thực bào',
      'D. Nước vận chuyển chủ động; ion khoáng vận chuyển thẩm thấu'
    ],
    correctAnswer: 'B',
    difficulty: 'medium',
    sourceType: 'manual'
  },
  {
    id: 'bio11-q02',
    subjectId: 'biology',
    topicId: 'bio11-t01',
    questionTypeId: 'bio11-qt01',
    content: 'Ở nhóm thực vật C4 (như ngô, mía), quá trình cố định CO2 diễn ra ở những loại tế bào nào?',
    options: [
      'A. Chỉ diễn ra ở tế bào mô giàn',
      'B. Giai đoạn đầu ở tế bào mô giậu, giai đoạn sau ở tế bào bao bó mạch',
      'C. Chỉ diễn ra ở tế bào khí khổng',
      'D. Giai đoạn đầu ở tế bào bao bó mạch, giai đoạn sau ở tế bào biểu bì'
    ],
    correctAnswer: 'B',
    difficulty: 'medium',
    sourceType: 'manual'
  },

  // bio11-qt02
  {
    id: 'bio11-q03',
    subjectId: 'biology',
    topicId: 'bio11-t01',
    questionTypeId: 'bio11-qt02',
    content: 'Đặc điểm nào sau đây thuộc về hệ tuần hoàn hở ở động vật (như thân mềm, chân khớp)?',
    options: [
      'A. Máu chảy trong động mạch với áp lực rất cao và tốc độ nhanh',
      'B. Máu tiếp xúc trực tiếp với tế bào cơ thể trong khoang cơ thể',
      'C. Máu chỉ lưu thông hoàn toàn bên trong các mạch kín',
      'D. Không có tim để co bóp đẩy máu'
    ],
    correctAnswer: 'B',
    difficulty: 'medium',
    sourceType: 'manual'
  },

  // bio11-qt03
  {
    id: 'bio11-q04',
    subjectId: 'biology',
    topicId: 'bio11-t02',
    questionTypeId: 'bio11-qt03',
    content: 'Hiện tượng thân cây ngọn hướng về phía có ánh sáng chiếu đến được gọi là:',
    options: [
      'A. Hướng sáng âm',
      'B. Hướng sáng dương',
      'C. Ứng động không sinh trưởng',
      'D. Hướng trọng lực dương'
    ],
    correctAnswer: 'B',
    difficulty: 'easy',
    sourceType: 'manual'
  },

  // bio11-qt04
  {
    id: 'bio11-q05',
    subjectId: 'biology',
    topicId: 'bio11-t02',
    questionTypeId: 'bio11-qt04',
    content: 'Sự hình thành điện thế nghỉ ở tế bào thần kinh chủ yếu do yếu tố nào quyết định?',
    options: [
      'A. Nồng độ Na+ bên trong tế bào cao hơn bên ngoài',
      'B. Tính thấm ưu thế của màng tế bào đối với ion K+ và hoạt động của bơm Na-K',
      'C. Hoạt động phân giải glycogen giải phóng năng lượng',
      'D. Sự tích tụ ion Ca2+ ở bề mặt ngoài màng tế bào'
    ],
    correctAnswer: 'B',
    difficulty: 'hard',
    sourceType: 'manual'
  },

  // bio11-qt05
  {
    id: 'bio11-q06',
    subjectId: 'biology',
    topicId: 'bio11-t03',
    questionTypeId: 'bio11-qt05',
    content: 'Loại hoocmôn thực vật nào có tác dụng chính là kích thích sự nảy mầm của hạt và sự kéo dài thân cây?',
    options: [
      'A. Axit abxicic (ABA)',
      'B. Ethylene',
      'C. Gibberellin (GA)',
      'D. Cytokinin'
    ],
    correctAnswer: 'C',
    difficulty: 'medium',
    sourceType: 'manual'
  },

  // bio11-qt06
  {
    id: 'bio11-q07',
    subjectId: 'biology',
    topicId: 'bio11-t03',
    questionTypeId: 'bio11-qt06',
    content: 'Quá trình phát triển của bướm (trứng -> sâu -> nhộng -> bướm) thuộc hình thức phát triển nào?',
    options: [
      'A. Phát triển không qua biến thái',
      'B. Phát triển qua biến thái hoàn toàn',
      'C. Phát triển qua biến thái không hoàn toàn',
      'D. Phát triển sinh dưỡng'
    ],
    correctAnswer: 'B',
    difficulty: 'medium',
    sourceType: 'manual'
  },

  // bio11-qt07 (Tier 3 - Premium)
  {
    id: 'bio11-q08',
    subjectId: 'biology',
    topicId: 'bio11-t04',
    questionTypeId: 'bio11-qt07',
    content: 'Trong quá trình thụ tinh kép ở thực vật có hoa, một giao tử đực (n) kết hợp với tế bào trung tâm (2n) sẽ tạo ra:',
    options: [
      'A. Hợp tử (2n) phát triển thành phôi',
      'B. Tế bào tam bội (3n) phát triển thành nội nhũ nuôi dưỡng phôi',
      'C. Vỏ hạt (2n)',
      'D. Quả (2n)'
    ],
    correctAnswer: 'B',
    difficulty: 'hard',
    sourceType: 'manual'
  },

  // bio11-qt08 (Tier 3 - Premium)
  {
    id: 'bio11-q09',
    subjectId: 'biology',
    topicId: 'bio11-t04',
    questionTypeId: 'bio11-qt08',
    content: 'Ở nữ giới, hoocmôn nào do tuyến yên tiết ra có vai trò kích thích nang trứng phát triển và chín?',
    options: [
      'A. Progesteron',
      'B. Testosteron',
      'C. FSH (Follicle Stimulating Hormone)',
      'D. Oxytocin'
    ],
    correctAnswer: 'C',
    difficulty: 'hard',
    sourceType: 'manual'
  },

  // bio11-qt09 (Tier 3 - Premium)
  {
    id: 'bio11-q10',
    subjectId: 'biology',
    topicId: 'bio11-t05',
    questionTypeId: 'bio11-qt09',
    content: 'Khi cơ thể vận động mạnh, hệ thần kinh và nội tiết phối hợp điều hòa hoạt động của các cơ quan như thế nào?',
    options: [
      'A. Giảm nhịp tim và giảm nhịp thở để tiết kiệm năng lượng',
      'B. Kích thích tuyến tụy tăng tiết insulin làm giảm đường huyết',
      'C. Tăng nhịp tim, tăng nhịp thở, tuyến thượng thận tiết adrenalin tăng phân giải glycogen thành glucose',
      'D. Ngừng quá trình bài tiết mồ hôi để giữ nhiệt cơ thể'
    ],
    correctAnswer: 'C',
    difficulty: 'hard',
    sourceType: 'manual'
  }
];
