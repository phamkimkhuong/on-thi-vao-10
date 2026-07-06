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
  },
  {
    id: 'eng10-s2',
    questionId: 'eng10-q2',
    recognition: 'Chia động từ sau động từ chính decide.',
    detailedSteps: [
      {
        order: 1,
        title: 'Xác định động từ chính và cấu trúc đi kèm',
        explanation: 'Động từ chính đứng trước khoảng trống là "decide" (quyết định). Theo quy tắc ngữ pháp tiếng Anh, sau "decide" là một động từ nguyên mẫu có "to" (decide to do something).',
        result: 'decide + to-V'
      },
      {
        order: 2,
        title: 'Lựa chọn dạng đúng của động từ',
        explanation: 'Dạng to-V của động từ "plant" là "to plant". Do đó chọn đáp án C.',
        result: 'to plant'
      }
    ],
    finalAnswer: 'C',
    commonMistakes: [
      'Chọn "planting" do thói quen dịch sang tiếng Việt "quyết định việc trồng cây" rồi chọn V-ing.'
    ],
    reviewSuggestions: [
      'Học thuộc các động từ thông dụng đi kèm với to-V và V-ing.'
    ]
  },
  {
    id: 'eng10-s3',
    questionId: 'eng10-q3',
    recognition: 'Nhận biết câu bị động thì Tương lai đơn qua từ chỉ thời gian tương lai next month và chủ ngữ chỉ vật.',
    detailedSteps: [
      {
        order: 1,
        title: 'Xác định thì của câu',
        explanation: 'Trạng từ "next month" (tháng tới) là dấu hiệu nhận biết của thì Tương lai đơn.',
        result: 'Thì Tương lai đơn'
      },
      {
        order: 2,
        title: 'Xác định thể bị động',
        explanation: 'Chủ ngữ "A new song" (Một bài hát mới) là danh từ chỉ vật, không thể tự thực hiện hành động "release" (phát hành) mà phải chịu tác động. Vì vậy câu phải được chia ở thể bị động của thì Tương lai đơn: will + be + V3/ed.',
        result: 'will be released'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: [
      'Chọn "is released" (bị động Hiện tại đơn) hoặc "was released" (bị động Quá khứ đơn) do không để ý trạng từ "next month".'
    ],
    reviewSuggestions: [
      'Luôn chú ý đến mối quan hệ giữa chủ ngữ và động từ để quyết định dùng chủ động hay bị động.'
    ]
  },
  {
    id: 'eng10-s4',
    questionId: 'eng10-q4',
    recognition: 'Chọn đáp án thích hợp điền vào chỗ trống trong đoạn văn.',
    detailedSteps: [
      {
        order: 1,
        title: 'Xác định ngữ cảnh của câu chứa khoảng trống',
        explanation: 'Câu nói về xu hướng công nghệ xanh: "Green Technology (1) __________ popular because it helps save energy" (Công nghệ xanh đang trở nên phổ biến vì nó giúp tiết kiệm năng lượng). Việc trở nên phổ biến là một xu hướng, quá trình đang diễn ra dần dần ở hiện tại.',
        result: 'Xu hướng ở hiện tại'
      },
      {
        order: 2,
        title: 'Chọn dạng động từ phù hợp',
        explanation: 'Để diễn tả xu hướng đang xảy ra dần dần, ta dùng thì Hiện tại tiếp diễn: "is becoming". Chủ ngữ "Green Technology" là số ít đi với "is". Do đó chọn đáp án A.',
        result: 'is becoming'
      }
    ],
    finalAnswer: 'A',
    commonMistakes: [
      'Chọn "become" hoặc "became" vì không nhận diện được ngữ cảnh diễn tả sự biến đổi dần dần (gradual change).'
    ],
    reviewSuggestions: [
      'Xem lại cách dùng của thì Hiện tại tiếp diễn khi kết hợp với các động từ chỉ sự thay đổi như get, become, grow.'
    ]
  },
  {
    id: 'eng10-s5',
    questionId: 'eng10-q5',
    recognition: 'Nhận biết đại từ quan hệ thay thế cho danh từ chỉ người đóng vai trò chủ ngữ.',
    detailedSteps: [
      {
        order: 1,
        title: 'Phân tích danh từ đứng trước khoảng trống',
        explanation: 'Danh từ đứng trước khoảng trống là "The teacher" (giáo viên), đây là danh từ chỉ người.',
        result: 'Danh từ chỉ người'
      },
      {
        order: 2,
        title: 'Xác định vai trò của đại từ quan hệ',
        explanation: 'Ngay sau chỗ trống là động từ "teaches" (dạy), chứng tỏ đại từ quan hệ cần điền đóng vai trò làm chủ ngữ trong mệnh đề quan hệ phụ.',
        result: 'Đại từ làm chủ ngữ chỉ người'
      },
      {
        order: 3,
        title: 'Chọn đại từ quan hệ phù hợp',
        explanation: 'Đại từ quan hệ thay thế cho người làm chủ ngữ là "who". Do đó chọn đáp án B.',
        result: 'who'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: [
      'Chọn "whom" vì nhầm lẫn vai trò chủ ngữ thành tân ngữ (whom chỉ làm tân ngữ).',
      'Chọn "which" vốn chỉ dùng cho đồ vật/sự việc.'
    ],
    reviewSuggestions: [
      'Ôn tập bảng tổng hợp chức năng của các đại từ quan hệ (Who, Whom, Which, That, Whose).'
    ]
  }
];
