import { Solution } from '@/types';

export const g10EnglishSolutions: Solution[] = [
  {
    id: 'eng10-s1',
    questionId: 'eng10-q1',
    recognition: 'Nhận biết thì Hiện tại tiếp diễn qua động từ gây chú ý Look!.',
    detailedSteps: [
      {
        order: 1,
        title: 'Xác định dấu hiệu thời gian',
        explanation: 'Câu bắt đầu bằng từ "Look!" (Hãy nhìn kìa!) nhằm lôi kéo sự chú ý vào một sự việc đang diễn ra ngay tại thời điểm nói. Do đó động từ phải chia ở thì Hiện tại tiếp diễn.',
        result: 'Chia động từ ở Hiện tại tiếp diễn.'
      },
      {
        order: 2,
        title: 'Chia động từ theo chủ ngữ',
        explanation: 'Chủ ngữ "The students" là danh từ số nhiều, đi kèm với động từ tobe là "are" và động từ thêm đuôi -ing là "playing".',
        result: 'are playing'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: [
      'Chọn "is playing" do nhầm lẫn chủ ngữ số nhiều thành số ít.',
      'Chọn "play" vì nhầm lẫn với thói quen ở Hiện tại đơn.'
    ],
    reviewSuggestions: [
      'Ghi nhớ các trạng từ và từ khóa báo hiệu thì tiếp diễn như Look!, Listen!, At the moment, Now.'
    ]
  }
];
