import {
  buildChemistryTheoryResourceMap,
  type ChemistryTheoryResourceSpec
} from '../../theoryResourceBuilder';

const specs: ChemistryTheoryResourceSpec[] = [
  {
    id: 'chem11-qt33',
    principle:
      'Không phải mọi hợp chất chứa carbon đều là hợp chất hữu cơ. Trong phạm vi phổ thông, CO, CO₂, carbonic acid, carbonate, hydrogencarbonate và carbide thường được xếp vào hợp chất vô cơ. Các đặc điểm như liên kết cộng hóa trị, phản ứng chậm hoặc ít tan trong nước là xu hướng chung chứ không phải tiêu chí tuyệt đối.',
    method: [
      'Kiểm tra chất có chứa carbon hay không.',
      'Đối chiếu với nhóm hợp chất carbon được xếp vào vô cơ.',
      'Nếu là hữu cơ, mô tả đặc điểm dưới dạng xu hướng và tránh khẳng định tuyệt đối.'
    ],
    example: {
      problem: 'Phân loại CH₄, CO₂, Na₂CO₃ và CH₃OH.',
      steps: [
        'CO₂ và carbonate thuộc nhóm hợp chất carbon vô cơ.',
        'CH₄ và CH₃OH là hợp chất hữu cơ.'
      ],
      answer: 'CH₄, CH₃OH hữu cơ; CO₂, Na₂CO₃ vô cơ.'
    },
    checks: [
      {
        question: 'Chất nào thường được xếp vào hợp chất carbon vô cơ?',
        options: ['CH₃OH', 'CH₄', 'CO₂', 'C₂H₅Cl'],
        correctAnswer: 'C',
        explanation: 'CO₂ thuộc nhóm ngoại lệ được xét trong hóa học vô cơ.'
      },
      {
        question: 'Nhận định nào đúng về phản ứng hữu cơ?',
        options: [
          'Luôn xảy ra tức thời và hoàn toàn.',
          'Thường chậm và có thể theo nhiều hướng.',
          'Luôn chỉ tạo một sản phẩm.',
          'Không cần điều kiện phản ứng.'
        ],
        correctAnswer: 'B',
        explanation: 'Đây là xu hướng thường gặp của phản ứng hữu cơ.'
      }
    ]
  },
  {
    id: 'chem11-qt34',
    principle:
      'Hydrocarbon chỉ chứa hai nguyên tố C và H. Dẫn xuất hydrocarbon có thêm nguyên tố hoặc nhóm nguyên tử khác như halogen, O, N. Trình tự phân loại đúng là loại hợp chất carbon vô cơ trước, sau đó mới xét thành phần nguyên tố của hợp chất hữu cơ.',
    method: [
      'Loại các hợp chất carbon vô cơ.',
      'Nếu chất hữu cơ chỉ có C và H, xếp vào hydrocarbon.',
      'Nếu có O, N, halogen hoặc nguyên tố khác, xếp vào dẫn xuất hydrocarbon.'
    ],
    example: {
      problem: 'Phân loại C₂H₄, C₂H₅OH và CH₃Cl.',
      steps: [
        'C₂H₄ chỉ chứa C, H.',
        'C₂H₅OH chứa O; CH₃Cl chứa Cl.'
      ],
      answer: 'C₂H₄ là hydrocarbon; hai chất còn lại là dẫn xuất.'
    },
    checks: [
      {
        question: 'Chất nào là hydrocarbon?',
        options: ['C₂H₆', 'C₂H₅OH', 'CH₃Cl', 'CH₃NH₂'],
        correctAnswer: 'A',
        explanation: 'C₂H₆ chỉ chứa carbon và hydrogen.'
      },
      {
        question: 'CH₃Cl được phân loại là gì?',
        options: ['Hydrocarbon', 'Hợp chất carbon vô cơ', 'Dẫn xuất hydrocarbon', 'Đơn chất'],
        correctAnswer: 'C',
        explanation: 'Ngoài C và H, phân tử còn chứa chlorine.'
      }
    ]
  },
  {
    id: 'chem11-qt35',
    principle:
      'Nhóm chức quyết định phản ứng đặc trưng nhưng phải xét toàn bộ môi trường liên kết. –OH gắn với carbon no là nhóm alcohol; –OH gắn trực tiếp vào vòng thơm là phenol; –OH trong –COOH thuộc nhóm carboxyl. Nhóm carbonyl trong aldehyde nằm ở đầu mạch còn ketone nằm giữa hai gốc carbon.',
    method: [
      'Khoanh vùng nguyên tử khác C, H và liên kết bội với O hoặc N.',
      'Xét nguyên tử mà nhóm đang gắn trực tiếp vào.',
      'Đối chiếu với mẫu –X, –OH, –CHO, >C=O, –COOH, –NH₂.'
    ],
    example: {
      problem: 'Xác định nhóm chức trong CH₃CH₂OH, CH₃CHO và CH₃COOH.',
      steps: [
        'CH₃CH₂OH có –OH alcohol.',
        'CH₃CHO có –CHO; CH₃COOH có –COOH.'
      ],
      answer: 'Lần lượt là alcohol, aldehyde và carboxylic acid.'
    },
    checks: [
      {
        question: 'Nhóm chức của CH₃CHO là gì?',
        options: ['–OH', '–COOH', '–CHO', '–NH₂'],
        correctAnswer: 'C',
        explanation: 'CH₃CHO chứa nhóm aldehyde –CHO ở đầu mạch.'
      },
      {
        question: 'Vì sao –OH trong CH₃COOH không được phân loại là nhóm alcohol?',
        options: [
          'Vì không có oxygen.',
          'Vì –OH thuộc toàn bộ nhóm carboxyl –COOH.',
          'Vì carbon không đủ hóa trị.',
          'Vì acid không phải hợp chất hữu cơ.'
        ],
        correctAnswer: 'B',
        explanation: 'Tính chất được quyết định bởi cả nhóm –COOH, không tách riêng –OH.'
      }
    ]
  },
  {
    id: 'chem11-qt36',
    principle:
      'Chưng cất tách chất dựa trên cân bằng lỏng–hơi và sự khác nhau về độ bay hơi. Nhiệt kế phải đo nhiệt độ hơi đi sang sinh hàn; nước làm lạnh đi từ dưới lên để áo nước luôn đầy. Chưng cất thường kém hiệu quả khi nhiệt độ sôi quá gần nhau hoặc chất bị phân hủy khi đun.',
    method: [
      'Xác định hỗn hợp đồng nhất và so sánh nhiệt độ sôi.',
      'Lắp nhiệt kế, sinh hàn và dòng nước đúng chiều.',
      'Theo dõi khoảng nhiệt độ để đổi bình hứng theo phân đoạn.'
    ],
    example: {
      problem: 'Tách hỗn hợp hai chất lỏng có nhiệt độ sôi 65°C và 100°C.',
      steps: [
        'Đun hỗn hợp và thu phân đoạn hơi quanh 65°C trước.',
        'Khi nhiệt độ tăng sang vùng 100°C, đổi bình hứng.'
      ],
      answer: 'Dùng chưng cất và thu hai phân đoạn theo nhiệt độ.'
    },
    checks: [
      {
        question: 'Chưng cất dựa chủ yếu vào sự khác nhau của đại lượng nào?',
        options: ['Khối lượng riêng', 'Nhiệt độ sôi/độ bay hơi', 'Màu sắc', 'Độ cứng'],
        correctAnswer: 'B',
        explanation: 'Cấu tử dễ bay hơi đi vào pha hơi trước.'
      },
      {
        question: 'Nước làm lạnh trong sinh hàn nên đi theo chiều nào?',
        options: [
          'Vào đầu thấp, ra đầu cao.',
          'Vào đầu cao, ra đầu thấp.',
          'Không cần nước.',
          'Chỉ chảy ở nửa trên.'
        ],
        correctAnswer: 'A',
        explanation: 'Dòng từ dưới lên giữ áo nước đầy và trao đổi nhiệt hiệu quả.'
      }
    ]
  },
  {
    id: 'chem11-qt37',
    principle:
      'Chiết lỏng–lỏng cần hai dung môi hầu như không trộn lẫn và chất tan phân bố khác nhau giữa hai pha. Lớp trên hay dưới phụ thuộc khối lượng riêng. Nhiều lần chiết bằng thể tích nhỏ thường thu hồi tốt hơn một lần dùng cùng tổng thể tích dung môi.',
    method: [
      'Chọn dung môi chiết không trộn lẫn với pha ban đầu và hòa tan tốt chất cần thu.',
      'Lắc phễu chiết, đảo và xả áp định kì.',
      'Để phân lớp, xác định lớp theo khối lượng riêng rồi tách đúng khóa.'
    ],
    example: {
      problem: 'Một chất hữu cơ tan tốt trong ether và ít tan trong nước. Hãy tách chất khỏi dung dịch nước.',
      steps: [
        'Thêm ether vào phễu chiết, lắc và xả áp.',
        'Để phân lớp, thu lớp ether rồi lặp lại chiết nếu cần.'
      ],
      answer: 'Dùng chiết lỏng–lỏng với ether.'
    },
    checks: [
      {
        question: 'Điều kiện bắt buộc của hai dung môi dùng trong chiết lỏng–lỏng là gì?',
        options: [
          'Có cùng khối lượng riêng.',
          'Đều phải có màu.',
          'Hầu như không trộn lẫn.',
          'Có cùng nhiệt độ sôi.'
        ],
        correctAnswer: 'C',
        explanation: 'Hai pha phải tách lớp để có thể phân riêng bằng phễu chiết.'
      },
      {
        question: 'Cách nào thường chiết hiệu quả hơn với cùng tổng thể tích dung môi?',
        options: [
          'Một lần duy nhất.',
          'Nhiều lần bằng các phần dung môi nhỏ.',
          'Không lắc.',
          'Dùng hai dung môi trộn lẫn hoàn toàn.'
        ],
        correctAnswer: 'B',
        explanation: 'Mỗi lần thiết lập cân bằng phân bố mới nên tăng tổng lượng chất được chuyển pha.'
      }
    ]
  },
  {
    id: 'chem11-qt38',
    principle:
      'Kết tinh phù hợp khi chất cần tinh chế tan nhiều ở nóng nhưng tan ít ở lạnh, còn tạp chất có hành vi độ tan khác. Dùng lượng dung môi nóng tối thiểu để tránh mất sản phẩm trong dung dịch mẹ. Lọc nóng loại tạp không tan; rửa tinh thể bằng ít dung môi lạnh.',
    method: [
      'Chọn dung môi theo độ tan nóng–lạnh và tính trơ hóa học.',
      'Hòa tan nóng bằng lượng dung môi tối thiểu, lọc nóng nếu cần.',
      'Làm nguội chậm, lọc, rửa lạnh và sấy tinh thể.'
    ],
    example: {
      problem: '100 g nước hòa tan 50 g chất ở nóng và 10 g ở lạnh. Làm nguội dung dịch bão hòa nóng chứa 100 g nước.',
      steps: [
        'Ở nóng có 50 g chất tan.',
        'Ở lạnh còn 10 g trong dung dịch mẹ.'
      ],
      answer: 'Khối lượng tinh thể lí thuyết là 40 g.'
    },
    checks: [
      {
        question: 'Vì sao nên dùng lượng dung môi nóng tối thiểu khi kết tinh?',
        options: [
          'Để tinh thể tan nhiều hơn khi lạnh.',
          'Để hạn chế sản phẩm còn lại trong dung dịch mẹ.',
          'Để làm tăng tạp chất.',
          'Để không cần làm nguội.'
        ],
        correctAnswer: 'B',
        explanation: 'Quá nhiều dung môi làm tăng lượng chất vẫn hòa tan sau khi làm nguội.'
      },
      {
        question: 'Tinh thể sau lọc nên được rửa bằng gì?',
        options: [
          'Nhiều dung môi nóng.',
          'Nước sôi bất kể chất.',
          'Một ít dung môi lạnh phù hợp.',
          'Dung môi phản ứng với sản phẩm.'
        ],
        correctAnswer: 'C',
        explanation: 'Dung môi lạnh rửa tạp trên bề mặt mà hạn chế hòa tan tinh thể.'
      }
    ]
  },
  {
    id: 'chem11-qt39',
    principle:
      'Công thức đơn giản nhất chỉ biểu diễn tỉ lệ nguyên tử tối giản; công thức phân tử biểu diễn số nguyên tử thực trong một phân tử. Phân tử khối của CTPT phải là bội nguyên dương của khối lượng công thức đơn giản nhất.',
    method: [
      'Từ công thức, tính phần trăm khối lượng từng nguyên tố khi cần.',
      'Rút gọn chỉ số để tìm CTĐGN.',
      'Dùng n = M(CTPT)/M(CTĐGN) và nhân toàn bộ chỉ số với n.'
    ],
    example: {
      problem: 'Một chất có CTĐGN CH₂ và phân tử khối 56. Tìm CTPT.',
      steps: [
        'Khối lượng CH₂ là 14.',
        'n = 56/14 = 4; nhân các chỉ số với 4.'
      ],
      answer: 'CTPT là C₄H₈.'
    },
    checks: [
      {
        question: 'CTĐGN của C₂H₄ là gì?',
        options: ['C₂H₄', 'CH₂', 'CH₄', 'C₄H₈'],
        correctAnswer: 'B',
        explanation: 'Chia cả hai chỉ số cho 2 được tỉ lệ tối giản 1:2.'
      },
      {
        question: 'Nếu CTĐGN là CH và M = 78 thì CTPT là gì?',
        options: ['CH', 'C₂H₂', 'C₄H₄', 'C₆H₆'],
        correctAnswer: 'D',
        explanation: 'M(CH)=13; 78/13=6 nên CTPT là C₆H₆.'
      }
    ]
  },
  {
    id: 'chem11-qt40',
    principle:
      'Khi dữ liệu là phần trăm khối lượng, giả sử 100 g mẫu biến phần trăm thành số gam. Sau khi chia cho nguyên tử khối, tỉ lệ mol phải được biến đổi đồng loạt thành số nguyên nhỏ nhất; không làm tròn riêng từng chỉ số quá sớm.',
    method: [
      'Giả sử 100 g chất hoặc dùng trực tiếp khối lượng đề cho.',
      'Tính số mol tương đối của từng nguyên tố.',
      'Chia cho giá trị nhỏ nhất, nhân đồng loạt để khử 0,5; 0,33; 0,25.'
    ],
    example: {
      problem: 'Một chất có 40,0% C, 6,7% H và 53,3% O. Tìm CTĐGN.',
      steps: [
        'Với 100 g: nC≈3,33; nH≈6,7; nO≈3,33.',
        'Chia cho 3,33 được tỉ lệ gần 1:2:1.'
      ],
      answer: 'CTĐGN là CH₂O.'
    },
    checks: [
      {
        question: 'Khi đề cho phần trăm khối lượng, giả sử 100 g chất có lợi gì?',
        options: [
          'Số gam mỗi nguyên tố bằng số phần trăm.',
          'Mọi số mol bằng nhau.',
          'Không cần nguyên tử khối.',
          'CTPT luôn có tổng chỉ số 100.'
        ],
        correctAnswer: 'A',
        explanation: 'Ví dụ 40% tương ứng 40 g trong mẫu giả định 100 g.'
      },
      {
        question: 'Tỉ lệ mol 1 : 1,5 cần được biến đổi thế nào?',
        options: ['Làm tròn thành 1:2', 'Chia cho 2', 'Nhân cả hai với 2', 'Giữ chỉ số 1,5'],
        correctAnswer: 'C',
        explanation: 'Nhân đồng loạt với 2 cho tỉ lệ số nguyên 2:3.'
      }
    ]
  },
  {
    id: 'chem11-qt41',
    principle:
      'Trong phân tích cháy, toàn bộ carbon của mẫu được quy về CO₂ và hydrogen quy về H₂O nếu quá trình cháy hoàn toàn. Oxygen trong chất thường được xác định bằng hiệu khối lượng khi biết chất chỉ chứa C, H, O. Sau CTĐGN vẫn phải dùng phân tử khối để tìm CTPT.',
    method: [
      'Đổi khối lượng CO₂, H₂O thành số mol.',
      'Suy ra nC = nCO₂ và nH = 2nH₂O.',
      'Tìm oxygen bằng hiệu khối lượng nếu phù hợp; lập CTĐGN rồi dùng M.'
    ],
    example: {
      problem: 'Đốt cháy chất chỉ chứa C, H thu 0,20 mol CO₂ và 0,30 mol H₂O. Tìm tỉ lệ C:H.',
      steps: [
        'nC = 0,20 mol.',
        'nH = 2×0,30 = 0,60 mol; chia cho 0,20.'
      ],
      answer: 'Tỉ lệ C:H = 1:3.'
    },
    checks: [
      {
        question: 'Đốt cháy hoàn toàn thu 0,10 mol CO₂ thì mẫu chứa bao nhiêu mol C?',
        options: ['0,05 mol', '0,10 mol', '0,20 mol', '0,40 mol'],
        correctAnswer: 'B',
        explanation: 'Mỗi mol CO₂ chứa một mol nguyên tử carbon.'
      },
      {
        question: 'Thu 0,25 mol H₂O thì số mol nguyên tử H trong mẫu là bao nhiêu?',
        options: ['0,125 mol', '0,25 mol', '0,50 mol', '1,00 mol'],
        correctAnswer: 'C',
        explanation: 'Mỗi mol H₂O chứa hai mol nguyên tử H.'
      }
    ]
  },
  {
    id: 'chem11-qt42',
    principle:
      'Thuyết cấu tạo nhấn mạnh ba ý: nguyên tử liên kết theo đúng hóa trị và trật tự xác định; carbon có khả năng tạo mạch; tính chất phụ thuộc cả thành phần phân tử lẫn cấu tạo. Hai công thức viết khác hình thức nhưng cùng cách nối nguyên tử biểu diễn cùng một chất.',
    method: [
      'Kiểm tra hóa trị, đặc biệt carbon hóa trị IV.',
      'Xác định mạch carbon và vị trí liên kết bội hoặc nhóm chức.',
      'So sánh bằng quan hệ liên kết thay vì hướng viết trên giấy.'
    ],
    example: {
      problem: 'So sánh CH₃CH₂OH và CH₃OCH₃.',
      steps: [
        'Hai chất có cùng CTPT C₂H₆O.',
        'Cách nối O khác nhau: C–C–O và C–O–C.'
      ],
      answer: 'Hai chất có cấu tạo khác nhau và có thể có tính chất khác nhau.'
    },
    checks: [
      {
        question: 'Carbon có hóa trị bao nhiêu trong hợp chất hữu cơ thông thường?',
        options: ['I', 'II', 'III', 'IV'],
        correctAnswer: 'D',
        explanation: 'Carbon tạo tổng cộng bốn liên kết cộng hóa trị.'
      },
      {
        question: 'Hai cách viết ngược chiều của cùng một mạch có tạo hai chất khác nhau không?',
        options: [
          'Luôn có.',
          'Không, nếu cách nối nguyên tử không đổi.',
          'Chỉ khi viết bằng công thức thu gọn.',
          'Luôn là hai đồng phân.'
        ],
        correctAnswer: 'B',
        explanation: 'Cấu tạo được xác định bởi liên kết, không bởi hướng viết.'
      }
    ]
  },
  {
    id: 'chem11-qt43',
    principle:
      'Các chất đồng đẳng cùng loại cấu tạo hoặc nhóm chức và hơn kém nhau một hay nhiều nhóm CH₂. Chỉ có chênh lệch khối lượng 14 hoặc hơn kém CH₂ chưa đủ nếu nhóm chức và kiểu cấu tạo khác nhau. Đồng đẳng phải có CTPT khác nhau.',
    method: [
      'So sánh nhóm chức hoặc loại hydrocarbon.',
      'Kiểm tra hiệu công thức có bằng kCH₂ hay không.',
      'Loại trường hợp cùng CTPT vì đó có thể là đồng phân.'
    ],
    example: {
      problem: 'Xét CH₃OH và C₂H₅OH có đồng đẳng không.',
      steps: [
        'Cả hai đều là alcohol no, đơn chức.',
        'Công thức hơn kém nhau CH₂.'
      ],
      answer: 'Hai chất là đồng đẳng kế tiếp.'
    },
    checks: [
      {
        question: 'Cặp nào là hai chất đồng đẳng?',
        options: [
          'CH₃OH và C₂H₅OH',
          'C₂H₅OH và CH₃OCH₃',
          'CH₄ và CO₂',
          'C₂H₄ và C₂H₆'
        ],
        correctAnswer: 'A',
        explanation: 'Hai chất cùng nhóm chức alcohol và hơn kém nhau CH₂.'
      },
      {
        question: 'Hai chất đồng đẳng có đặc điểm nào?',
        options: [
          'Luôn cùng CTPT.',
          'Luôn là đồng phân.',
          'Cùng loại cấu tạo/nhóm chức và hơn kém kCH₂.',
          'Luôn có cùng nhiệt độ sôi.'
        ],
        correctAnswer: 'C',
        explanation: 'Đây là hai điều kiện cần kết hợp để xác định dãy đồng đẳng.'
      }
    ]
  },
  {
    id: 'chem11-qt44',
    principle:
      'Đồng phân cấu tạo có cùng CTPT nhưng khác thứ tự liên kết. Khi liệt kê phải làm có hệ thống: thay đổi khung carbon trước, rồi vị trí liên kết bội hoặc nhóm chức, cuối cùng xét loại nhóm chức nếu phạm vi cho phép. Cần kiểm tra hóa trị và loại các công thức chỉ khác hướng viết.',
    method: [
      'Tính hoặc dùng dữ kiện về độ bất bão hòa để giới hạn kiểu cấu tạo.',
      'Liệt kê các khung carbon không trùng.',
      'Đặt nhóm chức/liên kết vào vị trí không tương đương và kiểm tra lại CTPT.'
    ],
    example: {
      problem: 'Liệt kê đồng phân cấu tạo cơ bản của C₂H₆O.',
      steps: [
        'Xét nhóm alcohol: CH₃CH₂OH.',
        'Xét ether: CH₃OCH₃; hai cách nối khác nhau.'
      ],
      answer: 'Có hai đồng phân cấu tạo cơ bản.'
    },
    checks: [
      {
        question: 'Đồng phân cấu tạo phải có đặc điểm nào?',
        options: [
          'Khác CTPT, cùng cách nối.',
          'Cùng CTPT, khác cách nối nguyên tử.',
          'Cùng tên và cùng CTPT.',
          'Chỉ khác hướng viết trên giấy.'
        ],
        correctAnswer: 'B',
        explanation: 'Điều kiện cốt lõi là cùng thành phần phân tử nhưng khác cấu tạo.'
      },
      {
        question: 'C₂H₆O có bao nhiêu đồng phân cấu tạo cơ bản trong phạm vi alcohol và ether?',
        options: ['1', '2', '3', '4'],
        correctAnswer: 'B',
        explanation: 'Đó là ethanol và dimethyl ether.'
      }
    ]
  }
];

export const chem11OrganicBasicsTheoryResources =
  buildChemistryTheoryResourceMap(specs);
