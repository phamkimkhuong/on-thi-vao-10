import { QuestionType } from '@/types';

export const g11BiologyQuestionTypes: QuestionType[] = [
  {
    id: 'bio11-qt01',
    topicId: 'bio11-t01',
    name: 'Dạng 1: Trao đổi nước, khoáng, quang hợp và hô hấp ở thực vật',
    slug: 'trao-doi-nuoc-khoang-quang-hop-ho-hap-thuc-vat',
    description: 'Vận dụng kiến thức về sự hấp thụ, vận chuyển nước, cơ chế quang hợp (C3, C4, CAM) và hô hấp tế bào ở thực vật.',
    difficulty: 'medium',
    examFrequency: 'high',
    recognitionSigns: [
      'Nhận biết cơ chế hấp thụ nước (thẩm thấu) và ion khoáng (thụ động, chủ động).',
      'Phân biệt các con đường di chuyển của nước qua dòng mạch gỗ và mạch rây.',
      'Phân biệt các nhóm thực vật C3, C4, CAM.'
    ],
    solvingSteps: [
      'Bước 1: Xác định loại tế bào và con đường vận chuyển nước/khoáng.',
      'Bước 2: Phân tích cơ chế cố định CO2 ở các nhóm thực vật.',
      'Bước 3: Suy luận đáp án chính xác.'
    ],
    commonMistakes: [
      'Nhầm lẫn nước vận chuyển chủ động tiêu tốn ATP.'
    ],
    theory: [
      'Thực vật hấp thụ nước và khoáng qua tế bào lông hút ở rễ, vận chuyển qua mạch gỗ (dòng đi lên) và mạch rây (dòng đi xuống).',
      'Quang hợp diễn ra tại lục lạp với pha sáng (tạo ATP, NADPH) và pha tối (cố định CO2). Hô hấp phân giải chất hữu cơ giải phóng năng lượng cho tế bào.'
    ]
  },
  {
    id: 'bio11-qt02',
    topicId: 'bio11-t01',
    name: 'Dạng 2: Dinh dưỡng, tiêu hóa, tuần hoàn, hô hấp và bài tiết ở động vật',
    slug: 'dinh-duong-tieu-hoa-tuan-hoan-ho-hap-bai-tiet-dong-vat',
    description: 'Phân tích quá trình trao đổi chất, cấu tạo hệ cơ quan tiêu hóa, hô hấp (mang, phổi, da) và hệ tuần hoàn (đơn, kép) ở động vật.',
    difficulty: 'medium',
    examFrequency: 'high',
    recognitionSigns: [
      'Đặc điểm hệ tuần hoàn hở và hệ tuần hoàn kín.',
      'Các hình thức hô hấp ở động vật.',
      'Cấu tạo hệ tiêu hóa túi/ống tiêu hóa.'
    ],
    solvingSteps: [
      'Bước 1: Phân loại cơ quan trao đổi chất ở nhóm động vật.',
      'Bước 2: So sánh nguyên lí hoạt động của hệ tuần hoàn/hô hấp.',
      'Bước 3: Chọn đáp án đúng.'
    ],
    commonMistakes: [
      'Nhầm lẫn áp lực máu ở hệ tuần hoàn hở cao hơn hệ tuần hoàn kín.'
    ],
    theory: [
      'Động vật lấy chất dinh dưỡng qua tiêu hóa (nội bào/ngoại bào), trao đổi khí qua bề mặt cơ thể, mang, hệ thống ống khí hoặc phổi.',
      'Hệ tuần hoàn hở/kín vận chuyển oxy và dưỡng chất. Thận và hệ bài tiết duy trì cân bằng nội môi.'
    ]
  },
  {
    id: 'bio11-qt03',
    topicId: 'bio11-t02',
    name: 'Dạng 3: Cảm ứng và phản ứng hướng động, ứng động ở thực vật',
    slug: 'cam-ung-huong-dong-ung-dong-thuc-vat',
    description: 'Nhận biết và giải thích các hình thức hướng động (hướng sáng, hướng trọng lực) và ứng động (sức trương nước, quang ứng động).',
    difficulty: 'easy',
    examFrequency: 'medium',
    recognitionSigns: [
      'Cây uốn cong về hướng nguồn kích thích (Hướng động).',
      'Hiện tượng khép lá ở cây trinh nữ khi va chạm (Ứng động).'
    ],
    solvingSteps: [
      'Bước 1: Nhận diện tác nhân và hướng vận động.',
      'Bước 2: Phân tích vai trò của auxin và sức trương nước.',
      'Bước 3: Đưa ra kết luận.'
    ],
    commonMistakes: [
      'Nhầm hướng động với ứng động không sinh trưởng.'
    ],
    theory: [
      'Cảm ứng ở thực vật là sự phản ứng đối với kích thích của môi trường.',
      'Hướng động là hình thức vận động sinh trưởng về phía kích thích (dương) hoặc tránh xa kích thích (âm). Ứng động là hình thức vận động không định hướng theo tác nhân.'
    ]
  },
  {
    id: 'bio11-qt04',
    topicId: 'bio11-t02',
    name: 'Dạng 4: Điện thế nghỉ, điện thế hoạt động, truyền xung thần kinh và tập tính động vật',
    slug: 'dien-the-nghi-hoat-dong-xung-than-kinh-tap-tinh',
    description: 'Phân tích cơ chế hình thành điện thế nghỉ, điện thế hoạt động, truyền xung qua xináp và các dạng tập tính bẩm sinh/học được.',
    difficulty: 'hard',
    examFrequency: 'high',
    recognitionSigns: [
      'Điện thế màng tế bào khi nghỉ và khi bị kích thích.',
      'Sự thay đổi tính thấm của màng đối với ion Na+ và K+.',
      'Cấu tạo xináp hóa học và chất trung gian.'
    ],
    solvingSteps: [
      'Bước 1: Xác định trạng thái màng (nghỉ/hoạt động).',
      'Bước 2: Phân tích sự di chuyển ion qua kênh K+, Na+ và bơm Na-K.',
      'Bước 3: Đánh giá quá trình truyền xung thần kinh.'
    ],
    commonMistakes: [
      'Cho rằng xung thần kinh có thể truyền ngược chiều qua xináp.'
    ],
    theory: [
      'Điện thế nghỉ duy trì nhờ bơm Na-K và kênh K+ mở.',
      'Điện thế hoạt động phát sinh khi tế bào thần kinh bị kích thích (mất phân cực, đảo cực, tái phân cực). Xung thần kinh truyền qua xináp nhờ chất trung gian hóa học (như axêtinchôlin).'
    ]
  },
  {
    id: 'bio11-qt05',
    topicId: 'bio11-t03',
    name: 'Dạng 5: Sinh trưởng, phát triển và hoocmôn ở thực vật',
    slug: 'sinh-truong-phat-trien-hoocmon-thuc-vat',
    description: 'Phân biệt sinh trưởng sơ cấp, thứ cấp và vai trò của các hoocmôn thực vật (Auxin, Gibberellin, Cytokinin, Ethylene, ABA).',
    difficulty: 'medium',
    examFrequency: 'medium',
    recognitionSigns: [
      'Sự tăng chiều dài (sơ cấp) vs tăng đường kính (thứ cấp).',
      'Tác dụng sinh lí của 5 nhóm hoocmôn thực vật.'
    ],
    solvingSteps: [
      'Bước 1: Xác định loại mô phân sinh tham gia sinh trưởng.',
      'Bước 2: Phân tích hoocmôn kích thích vs hoocmôn ức chế.',
      'Bước 3: Chọn đáp án phù hợp.'
    ],
    commonMistakes: [
      'Nhầm lẫn tác dụng nảy mầm hạt của Gibberellin với Ethylene.'
    ],
    theory: [
      'Sinh trưởng sơ cấp gia tăng chiều dài nhờ mô phân sinh ngọn. Sinh trưởng thứ cấp gia tăng đường kính nhờ mô phân sinh bên.',
      'Hoocmôn kích thích (Auxin, GA, Cytokinin) và ức chế (Ethylene, ABA) điều hòa phát triển.'
    ]
  },
  {
    id: 'bio11-qt06',
    topicId: 'bio11-t03',
    name: 'Dạng 6: Sinh trưởng, phát triển và biến thái ở động vật',
    slug: 'sinh-truong-phat-trien-bien-thai-dong-vat',
    description: 'Phân tích các giai đoạn phát triển không qua biến thái, biến thái hoàn toàn và biến thái không hoàn toàn ở động vật.',
    difficulty: 'medium',
    examFrequency: 'high',
    recognitionSigns: [
      'Sự khác biệt hình dạng con non và con trưởng thành.',
      'Giai đoạn nhộng trong biến thái hoàn toàn.'
    ],
    solvingSteps: [
      'Bước 1: Quan sát các hình thái phát triển của loài động vật.',
      'Bước 2: Phân loại hình thức biến thái (hoàn toàn / không hoàn toàn / không biến thái).',
      'Bước 3: Đưa ra đáp án.'
    ],
    commonMistakes: [
      'Xác định sai hình thức biến thái ở châu chấu (biến thái không hoàn toàn).'
    ],
    theory: [
      'Phát triển không qua biến thái: con non có cấu tạo tương tự con trưởng thành.',
      'Biến thái hoàn toàn: ấu trùng có hình dạng khác hẳn con trưởng thành (qua giai đoạn nhộng). Biến thái không hoàn toàn: ấu trùng trải qua nhiều lần lột xác.'
    ]
  },
  {
    id: 'bio11-qt07',
    topicId: 'bio11-t04',
    name: 'Dạng 7: Sinh sản vô tính, hữu tính và ứng dụng ở thực vật (Premium 👑)',
    slug: 'sinh-san-vo-tinh-huu-tinh-thuc-vat',
    description: 'Vận dụng cơ chế sinh sản bào tử, sinh sản sinh dưỡng và thụ phấn, thụ tinh kép ở thực vật có hoa trong nông nghiệp.',
    difficulty: 'hard',
    examFrequency: 'high',
    recognitionSigns: [
      'Sinh sản sinh dưỡng (giâm, chiết, ghép, nuôi cấy mô).',
      'Quá trình thụ tinh kép (hợp tử 2n, nội nhũ 3n).'
    ],
    solvingSteps: [
      'Bước 1: Phân biệt sinh sản vô tính và hữu tính.',
      'Bước 2: Phân tích kết quả của thụ tinh kép ở thực vật hạt kín.',
      'Bước 3: Chọn đáp án đúng.'
    ],
    commonMistakes: [
      'Cho rằng sản phẩm thụ tinh kép tạo ra 2 hợp tử lưỡng bội.'
    ],
    theory: [
      'Sinh sản vô tính ở thực vật gồm sinh sản bào tử và sinh sản sinh dưỡng.',
      'Sinh sản hữu tính xảy ra hiện tượng thụ tinh kép ở thực vật có hoa (tạo hợp tử 2n và nội nhũ 3n).'
    ]
  },
  {
    id: 'bio11-qt08',
    topicId: 'bio11-t04',
    name: 'Dạng 8: Sinh sản vô tính, hữu tính và điều hòa sinh sản ở động vật (Premium 👑)',
    slug: 'sinh-san-vo-tinh-huu-tinh-dieu-hoa-dong-vat',
    description: 'Phân tích hình thức phân đôi, nảy chồi, trinh sinh, sinh sản hữu tính và cơ chế điều hòa hoocmôn sinh dục ở động vật.',
    difficulty: 'hard',
    examFrequency: 'high',
    recognitionSigns: [
      'Hình thức sinh sản phân đôi, nảy chồi, trinh sinh.',
      'Cơ chế tác động của FSH, LH, Estrogen, Testosteron.'
    ],
    solvingSteps: [
      'Bước 1: Nhận diện cơ chế sinh sản và hoocmôn điều hòa.',
      'Bước 2: Phân tích đường liên hệ ngược giữa tuyến yên và tuyến sinh dục.',
      'Bước 3: Đưa ra đáp án.'
    ],
    commonMistakes: [
      'Nhầm vai trò của FSH với LH trong chu kỳ kinh nguyệt.'
    ],
    theory: [
      'Sinh sản vô tính ở động vật gồm phân đôi, nảy chồi, phân mảnh, trinh sinh.',
      'Hoocmôn FSH, LH, Estrogen, Progesteron, Testosteron điều hòa quá trình sinh tinh và sinh trứng.'
    ]
  },
  {
    id: 'bio11-qt09',
    topicId: 'bio11-t05',
    name: 'Dạng 9: Mối quan hệ giữa các quá trình sinh lí cơ thể & Ngành nghề liên quan (Premium 👑)',
    slug: 'moi-quan-he-sinh-li-co-the-nganh-nghe',
    description: 'Tổng hợp mối liên hệ giữa trao đổi chất, cảm ứng, sinh trưởng và sinh sản trong cơ thể sinh vật thống nhất.',
    difficulty: 'hard',
    examFrequency: 'medium',
    recognitionSigns: [
      'Sự phối hợp giữa các hệ cơ quan khi vận động / biến đổi môi trường.',
      'Nguyên lí tự điều chỉnh và cân bằng nội môi.'
    ],
    solvingSteps: [
      'Bước 1: Phân tích tác động phối hợp thần kinh - thể dịch.',
      'Bước 2: Đánh giá sự thống nhất giữa trao đổi chất, sinh trưởng và cảm ứng.',
      'Bước 3: Kết luận.'
    ],
    commonMistakes: [
      'Coi các hệ cơ quan hoạt động độc lập không phụ thuộc lẫn nhau.'
    ],
    theory: [
      'Cơ thể sinh vật là một hệ thống mở, tự điều chỉnh.',
      'Trao đổi chất cung cấp năng lượng cho cảm ứng, sinh trưởng và sinh sản. Ngược lại, cảm ứng giúp cơ thể thích nghi, duy trì điều kiện tối ưu.'
    ]
  }
];
