import {
  buildChemistryTheoryResourceMap,
  type ChemistryTheoryResourceSpec
} from '../../theoryResourceBuilder';

const specs: ChemistryTheoryResourceSpec[] = [
  {
    id: 'chem11-qt15',
    principle:
      'Liên kết ba trong phân tử nitrogen gồm một liên kết sigma và hai liên kết pi, có năng lượng liên kết lớn nên N₂ khá trơ ở nhiệt độ thường. “Khá trơ” không có nghĩa là không phản ứng: ở nhiệt độ cao hoặc có xúc tác, N₂ vẫn tham gia phản ứng. Cần phân biệt N₂ khí dùng tạo môi trường trơ tương đối với N₂ lỏng dùng làm lạnh sâu.',
    method: [
      'Xác định đề hỏi trạng thái tự nhiên, cấu tạo hay ứng dụng.',
      'Nếu giải thích tính trơ, liên hệ trực tiếp với độ bền của liên kết ba.',
      'Nếu chọn ứng dụng, tách vai trò của nitrogen khí và nitrogen lỏng.'
    ],
    example: {
      problem: 'Chọn chất phù hợp để tạo môi trường ít oxygen khi đóng gói và để cấp đông nhanh mẫu sinh học.',
      steps: [
        'Môi trường ít oxygen cần một khí khá trơ: dùng N₂ khí.',
        'Cấp đông nhanh cần nhiệt độ rất thấp: dùng N₂ lỏng.'
      ],
      answer: 'Dùng N₂ khí cho đóng gói và N₂ lỏng cho cấp đông.'
    },
    checks: [
      {
        question: 'Nguyên nhân trực tiếp làm N₂ kém hoạt động ở nhiệt độ thường là gì?',
        options: [
          'N₂ không có electron.',
          'Liên kết ba N≡N rất bền.',
          'N₂ là khí hiếm.',
          'Nitrogen luôn có số oxi hóa −3.'
        ],
        correctAnswer: 'B',
        explanation: 'Muốn phản ứng phải cung cấp đủ năng lượng để làm suy yếu hoặc phá vỡ liên kết ba rất bền.'
      },
      {
        question: 'Ứng dụng nào chủ yếu dựa vào nhiệt độ sôi rất thấp của nitrogen?',
        options: [
          'Cấp đông nhanh mẫu sinh học.',
          'Sản xuất ammonia.',
          'Tạo nitrate trong đất.',
          'Trung hòa acid.'
        ],
        correctAnswer: 'A',
        explanation: 'Nitrogen lỏng hấp thụ nhiệt mạnh khi hóa hơi nên thích hợp cho làm lạnh sâu.'
      }
    ]
  },
  {
    id: 'chem11-qt16',
    principle:
      'Vai trò oxi hóa–khử của N₂ phải được xác định từ sự thay đổi số oxi hóa. Trong phản ứng tạo NH₃, nitrogen từ 0 xuống −3 nên nhận electron; trong phản ứng tạo NO, nitrogen từ 0 lên +2 nên nhường electron. Chuỗi nitrate tự nhiên không diễn ra một bước mà qua NO, NO₂ rồi nitric acid hoặc nitrate.',
    method: [
      'Viết đúng phương trình và điều kiện của phản ứng.',
      'Ghi số oxi hóa của N trước và sau phản ứng.',
      'Với bài sấm sét, sắp xếp đúng chuỗi N₂ → NO → NO₂ → HNO₃/NO₃⁻.'
    ],
    example: {
      problem: 'Xác định vai trò của N₂ trong phản ứng N₂ + 3H₂ ⇌ 2NH₃.',
      steps: [
        'Trong N₂, nitrogen có số oxi hóa 0.',
        'Trong NH₃, nitrogen có số oxi hóa −3; nitrogen nhận electron.'
      ],
      answer: 'N₂ là chất oxi hóa.'
    },
    checks: [
      {
        question: 'Sản phẩm tạo trực tiếp khi N₂ phản ứng với O₂ ở nhiệt độ rất cao là gì?',
        options: ['NO', 'NO₂', 'HNO₃', 'NH₃'],
        correctAnswer: 'A',
        explanation: 'Phản ứng trực tiếp là N₂ + O₂ ⇌ 2NO; NO mới tiếp tục bị oxi hóa thành NO₂.'
      },
      {
        question: 'Trong phản ứng tạo NH₃, số oxi hóa của nitrogen biến đổi thế nào?',
        options: ['−3 → 0', '0 → +2', '+5 → +2', '0 → −3'],
        correctAnswer: 'D',
        explanation: 'Nitrogen nhận electron, từ 0 xuống −3.'
      }
    ]
  },
  {
    id: 'chem11-qt17',
    principle:
      'Cặp electron chưa liên kết trên N quyết định hình chóp tam giác, tính phân cực và khả năng nhận proton của NH₃. Trong nước, cân bằng tạo NH₄⁺ và OH⁻ không hoàn toàn nên NH₃ là base yếu. Khi gặp acid mạnh, NH₃ nhận proton tạo muối ammonium.',
    method: [
      'Dựng công thức Lewis và xác định cặp electron tự do.',
      'Phân biệt quá trình hòa tan vật lí với cân bằng base trong nước.',
      'Khi gặp acid, viết quá trình nhận proton trước khi xác định muối.'
    ],
    example: {
      problem: 'Giải thích vì sao dung dịch NH₃ làm quỳ tím ẩm hóa xanh.',
      steps: [
        'NH₃ nhận proton của H₂O.',
        'Cân bằng NH₃ + H₂O ⇌ NH₄⁺ + OH⁻ tạo ion OH⁻.'
      ],
      answer: 'Dung dịch có tính base do tạo OH⁻.'
    },
    checks: [
      {
        question: 'Trong NH₃, nguyên tử N còn bao nhiêu cặp electron chưa liên kết?',
        options: ['Không có', 'Một cặp', 'Hai cặp', 'Ba cặp'],
        correctAnswer: 'B',
        explanation: 'N tạo ba liên kết N–H và còn một cặp electron tự do.'
      },
      {
        question: 'Phương trình nào mô tả đúng tính base của NH₃ trong nước?',
        options: [
          'NH₃ → N³⁻ + 3H⁺',
          'NH₃ + H₂O → NH₂⁻ + H₃O⁺',
          'NH₃ + H₂O ⇌ NH₄⁺ + OH⁻',
          'NH₃ + OH⁻ → NH₄⁺'
        ],
        correctAnswer: 'C',
        explanation: 'NH₃ nhận proton từ nước và tạo OH⁻ trong dung dịch.'
      }
    ]
  },
  {
    id: 'chem11-qt18',
    principle:
      'Nitrogen trong NH₃ đang ở số oxi hóa thấp nhất −3 nên NH₃ chủ yếu thể hiện tính khử. Trong quy trình Haber, tăng áp suất có lợi cho cân bằng tạo NH₃; nhiệt độ vừa phải và xúc tác giúp đạt tốc độ phù hợp nhưng xúc tác không làm đổi hằng số cân bằng.',
    method: [
      'Dùng số oxi hóa để nhận diện tính khử của NH₃.',
      'Với Haber, xét riêng ảnh hưởng áp suất, nhiệt độ và xúc tác.',
      'Đánh giá ứng dụng luôn kèm điều kiện an toàn vì NH₃ độc và gây kích ứng.'
    ],
    example: {
      problem: 'Giải thích vì sao quy trình Haber dùng áp suất cao và xúc tác.',
      steps: [
        'Chiều tạo NH₃ làm giảm tổng số mol khí nên áp suất cao chuyển dịch cân bằng theo chiều thuận.',
        'Xúc tác làm hệ đạt cân bằng nhanh hơn, không làm tăng giá trị cân bằng.'
      ],
      answer: 'Áp suất tăng hiệu suất cân bằng; xúc tác tăng tốc độ đạt cân bằng.'
    },
    checks: [
      {
        question: 'Vai trò chủ yếu của NH₃ trong phản ứng oxi hóa–khử là gì?',
        options: ['Chất khử', 'Chất oxi hóa mạnh', 'Chất xúc tác', 'Chất trơ'],
        correctAnswer: 'A',
        explanation: 'N trong NH₃ có số oxi hóa −3 và có thể bị oxi hóa lên mức cao hơn.'
      },
      {
        question: 'Xúc tác trong phản ứng Haber có tác dụng nào?',
        options: [
          'Làm cân bằng chuyển hẳn sang phải.',
          'Làm tăng hằng số cân bằng.',
          'Làm giảm lượng NH₃ cân bằng.',
          'Làm hệ đạt cân bằng nhanh hơn.'
        ],
        correctAnswer: 'D',
        explanation: 'Xúc tác tăng tốc độ cả hai chiều như nhau và không thay đổi thành phần cân bằng.'
      }
    ]
  },
  {
    id: 'chem11-qt19',
    principle:
      'Muối ammonium là hợp chất ion chứa NH₄⁺. Phản ứng với base mạnh giải phóng NH₃ là tính chất chung quan trọng. Nhiệt phân phải xét từng anion: không được dùng một sản phẩm chung cho mọi muối ammonium.',
    method: [
      'Nhận diện ion NH₄⁺ và anion đi kèm.',
      'Khi gặp OH⁻, ưu tiên viết phương trình ion rút gọn.',
      'Khi nhiệt phân, nhớ đúng sản phẩm đặc trưng của muối được hỏi.'
    ],
    example: {
      problem: 'Viết phương trình ion khi đun NH₄Cl với NaOH.',
      steps: [
        'NH₄Cl và NaOH phân li trong dung dịch.',
        'Loại Na⁺ và Cl⁻ là các ion không tham gia.'
      ],
      answer: 'NH₄⁺ + OH⁻ → NH₃ + H₂O.'
    },
    checks: [
      {
        question: 'Phương trình ion đúng khi muối ammonium tác dụng với kiềm là gì?',
        options: [
          'NH₄⁺ + OH⁻ → NH₃ + H₂O',
          'NH₄⁺ → N₂ + 4H⁺',
          'NH₄⁺ + H⁺ → NH₃',
          'NH₄⁺ + Cl⁻ → NH₄Cl↓'
        ],
        correctAnswer: 'A',
        explanation: 'OH⁻ nhận proton của NH₄⁺, giải phóng NH₃.'
      },
      {
        question: 'Nhận định nào đúng về nhiệt phân muối ammonium?',
        options: [
          'Mọi muối đều chỉ tạo NH₃.',
          'Mọi muối đều tạo N₂.',
          'Sản phẩm phụ thuộc anion và điều kiện.',
          'Muối ammonium không bị nhiệt phân.'
        ],
        correctAnswer: 'C',
        explanation: 'Cần xét cụ thể NH₄Cl, NH₄NO₃, (NH₄)₂CO₃…'
      }
    ]
  },
  {
    id: 'chem11-qt20',
    principle:
      'Phép thử NH₄⁺ dựa trên phản ứng giải phóng NH₃ khi thêm base và làm ấm. Bằng chứng nên là giấy quỳ tím ẩm hóa xanh hoặc chỉ thị phù hợp, không phải ngửi trực tiếp. Mẫu trắng và chia mẫu giúp loại nhiễu khi cần nhận biết nhiều ion.',
    method: [
      'Chia mẫu và thêm dung dịch kiềm vào phần thử NH₄⁺.',
      'Làm ấm nhẹ, đưa giấy chỉ thị ẩm đến gần miệng ống nghiệm.',
      'Kết luận khi có khí làm giấy quỳ tím ẩm hóa xanh; tuân thủ an toàn.'
    ],
    example: {
      problem: 'Thiết kế phép thử an toàn cho dung dịch nghi chứa NH₄Cl.',
      steps: [
        'Thêm NaOH vào một lượng nhỏ mẫu rồi làm ấm.',
        'Dùng quỳ tím ẩm, không đưa mũi ngửi khí.'
      ],
      answer: 'Quỳ tím ẩm hóa xanh xác nhận khí NH₃ và hỗ trợ nhận biết NH₄⁺.'
    },
    checks: [
      {
        question: 'Giấy quỳ dùng nhận biết khí NH₃ phải ở trạng thái nào?',
        options: ['Khô hoàn toàn', 'Ẩm', 'Đã tẩm acid đặc', 'Đã đốt nóng đỏ'],
        correctAnswer: 'B',
        explanation: 'NH₃ phải hòa tan trong lớp nước mỏng để tạo môi trường base làm đổi màu chỉ thị.'
      },
      {
        question: 'Thao tác nào không an toàn khi nhận biết NH₄⁺?',
        options: [
          'Dùng lượng mẫu nhỏ.',
          'Làm ấm thận trọng.',
          'Dùng giấy chỉ thị ẩm.',
          'Ngửi trực tiếp khí thoát ra.'
        ],
        correctAnswer: 'D',
        explanation: 'Không ngửi trực tiếp khí NH₃ vì khí độc và gây kích ứng.'
      }
    ]
  },
  {
    id: 'chem11-qt21',
    principle:
      'NO hình thành ở vùng nhiệt độ cao rồi bị oxi hóa thành NO₂. NO₂ tham gia các quá trình tạo nitric acid, làm giảm pH nước mưa. Mưa acid gây tác động lên đất, nước, sinh vật và công trình; biện pháp ưu tiên là giảm phát thải tại nguồn.',
    method: [
      'Xác định nguồn phát thải tự nhiên hay nhân sinh.',
      'Viết chuỗi chuyển hóa NO → NO₂ → acid.',
      'Phân biệt biện pháp giảm nguồn phát thải với biện pháp xử lí hậu quả.'
    ],
    example: {
      problem: 'Giải thích vì sao động cơ nhiệt độ cao có thể góp phần gây mưa acid.',
      steps: [
        'N₂ và O₂ tạo NO ở nhiệt độ cao.',
        'NO bị oxi hóa thành NO₂; NO₂ góp phần tạo HNO₃ trong khí quyển.'
      ],
      answer: 'Khí NOₓ tạo acid làm nước mưa có pH thấp.'
    },
    checks: [
      {
        question: 'Khí nào bị oxi hóa trong không khí để tạo NO₂?',
        options: ['NH₃', 'N₂O', 'NO', 'N₂'],
        correctAnswer: 'C',
        explanation: 'NO tiếp tục phản ứng với oxygen tạo NO₂.'
      },
      {
        question: 'Biện pháp bền vững nhất để hạn chế mưa acid do NOₓ là gì?',
        options: [
          'Giảm phát thải NOₓ tại nguồn.',
          'Chỉ sơn lại công trình.',
          'Tăng dùng nhiên liệu hóa thạch.',
          'Thêm acid vào hồ.'
        ],
        correctAnswer: 'A',
        explanation: 'Kiểm soát tại nguồn ngăn chất gây acid đi vào khí quyển.'
      }
    ]
  },
  {
    id: 'chem11-qt22',
    principle:
      'HNO₃ là acid mạnh một nấc trong nước. Khi chỉ xét tính acid, sản phẩm với base, oxide base và carbonate tuân theo quy tắc acid–base. Không được trộn lẫn tính acid với tính oxi hóa mạnh khi chọn sản phẩm phản ứng với kim loại.',
    method: [
      'Xác định phản ứng đang kiểm tra tính acid hay tính oxi hóa.',
      'Với base/oxide base/carbonate, lập muối nitrate và cân bằng.',
      'Với kim loại, chuyển sang quy tắc của chất oxi hóa và không tự động tạo H₂.'
    ],
    example: {
      problem: 'Viết phương trình HNO₃ tác dụng với CaCO₃.',
      steps: [
        'Acid + carbonate tạo muối, CO₂ và H₂O.',
        'Cân bằng số proton cần cho CO₃²⁻.'
      ],
      answer: '2HNO₃ + CaCO₃ → Ca(NO₃)₂ + CO₂ + H₂O.'
    },
    checks: [
      {
        question: 'Số oxi hóa của N trong HNO₃ là bao nhiêu?',
        options: ['−3', '0', '+3', '+5'],
        correctAnswer: 'D',
        explanation: 'H là +1, O là −2 nên N phải là +5.'
      },
      {
        question: 'Sản phẩm khí khi HNO₃ tác dụng với carbonate là gì?',
        options: ['H₂', 'CO₂', 'NO', 'NH₃'],
        correctAnswer: 'B',
        explanation: 'Ion carbonate nhận proton tạo H₂CO₃ rồi phân hủy thành CO₂ và H₂O.'
      }
    ]
  },
  {
    id: 'chem11-qt23',
    principle:
      'HNO₃ oxi hóa kim loại nhờ nitrogen ở mức +5. Sản phẩm khử phụ thuộc nồng độ acid, bản chất kim loại và điều kiện; trong các trường hợp chuẩn với Cu, acid đặc thường tạo NO₂ còn acid loãng thường tạo NO. Không dùng quy tắc “kim loại + acid → H₂”.',
    method: [
      'Xác định nồng độ HNO₃ và kim loại.',
      'Chọn sản phẩm khử phù hợp với phạm vi bài học.',
      'Cân bằng phản ứng oxi hóa–khử và kiểm tra bảo toàn nguyên tố.'
    ],
    example: {
      problem: 'Dự đoán khí tạo ra khi Cu tác dụng với HNO₃ đặc.',
      steps: [
        'Cu bị oxi hóa thành Cu²⁺.',
        'N(+5) trong nitrate bị khử chủ yếu thành N(+4) trong NO₂.'
      ],
      answer: 'Khí NO₂ màu nâu đỏ.'
    },
    checks: [
      {
        question: 'Cu tác dụng với HNO₃ đặc thường tạo khí nào?',
        options: ['H₂', 'NH₃', 'NO₂', 'N₂'],
        correctAnswer: 'C',
        explanation: 'HNO₃ đặc thường bị khử thành NO₂ trong phản ứng với Cu.'
      },
      {
        question: 'Vì sao HNO₃ thường không giải phóng H₂ khi tác dụng với kim loại?',
        options: [
          'Vì HNO₃ không có H.',
          'Vì nitrate là chất oxi hóa và tạo sản phẩm khử của nitrogen.',
          'Vì mọi kim loại đều trơ.',
          'Vì HNO₃ là base.'
        ],
        correctAnswer: 'B',
        explanation: 'Quá trình khử ưu tiên xảy ra ở nitrogen +5 thay vì H⁺ tạo H₂.'
      }
    ]
  },
  {
    id: 'chem11-qt24',
    principle:
      'Phú dưỡng là một chuỗi nguyên nhân–hệ quả: dư nitrate/phosphate → tảo phát triển mạnh → sinh khối chết → vi sinh vật phân hủy tiêu thụ oxygen → thiếu oxygen hòa tan. Cần đọc dữ liệu theo thời gian; tảo tăng ban đầu không có nghĩa oxygen giảm ngay lập tức.',
    method: [
      'Tìm nguồn nitrogen/phosphorus từ phân bón hoặc nước thải.',
      'Đọc đồng thời dữ liệu dưỡng chất, mật độ tảo và oxygen hòa tan.',
      'Ưu tiên biện pháp giảm dưỡng chất đi vào thủy vực.'
    ],
    example: {
      problem: 'Một hồ có nitrate tăng, sau đó tảo nở hoa và oxygen hòa tan giảm mạnh. Giải thích.',
      steps: [
        'Nitrate thúc đẩy sinh khối tảo.',
        'Tảo chết bị phân hủy; quá trình phân hủy tiêu thụ oxygen.'
      ],
      answer: 'Hồ đang có biểu hiện của phú dưỡng hóa.'
    },
    checks: [
      {
        question: 'Giai đoạn nào trực tiếp làm oxygen hòa tan giảm mạnh trong phú dưỡng?',
        options: [
          'Nước bay hơi.',
          'Tảo quang hợp ban ngày.',
          'Vi sinh vật phân hủy sinh khối chết.',
          'Cá bơi gần mặt nước.'
        ],
        correctAnswer: 'C',
        explanation: 'Hô hấp của vi sinh vật phân hủy tiêu thụ lượng lớn oxygen hòa tan.'
      },
      {
        question: 'Biện pháp xử lí nguyên nhân gốc của phú dưỡng là gì?',
        options: [
          'Giảm nitrogen và phosphorus từ nước thải, phân bón.',
          'Chỉ vớt cá chết.',
          'Tăng xả nước giàu nitrate.',
          'Che màu nước hồ.'
        ],
        correctAnswer: 'A',
        explanation: 'Cần giảm dòng dưỡng chất đi vào thủy vực.'
      }
    ]
  },
  {
    id: 'chem11-qt25',
    principle:
      'Sulfur có nhiều dạng thù hình vì cùng nguyên tố có thể sắp xếp tinh thể khác nhau. Sulfur tà phương và đơn tà đều gồm S₈ nhưng khác cấu trúc tinh thể và miền nhiệt độ bền. Tính chất và ứng dụng phải được nối với dạng tồn tại, không chỉ dựa vào màu vàng.',
    method: [
      'Phân biệt đơn chất sulfur với sulfide và sulfate trong tự nhiên.',
      'Khi hỏi thù hình, nêu cùng nguyên tố nhưng khác cấu trúc.',
      'Nối tính chất vật lí và ứng dụng với điều kiện cụ thể.'
    ],
    example: {
      problem: 'Giải thích vì sao sulfur tà phương và sulfur đơn tà là hai dạng thù hình.',
      steps: [
        'Cả hai chỉ chứa nguyên tố sulfur và thường có phân tử S₈.',
        'Chúng có cách sắp xếp trong mạng tinh thể khác nhau.'
      ],
      answer: 'Cùng nguyên tố nhưng khác cấu trúc tinh thể.'
    },
    checks: [
      {
        question: 'Điểm giống nhau cơ bản của sulfur tà phương và sulfur đơn tà là gì?',
        options: [
          'Cùng cấu trúc tinh thể.',
          'Đều là hợp chất sulfate.',
          'Đều là dạng đơn chất của sulfur.',
          'Đều tan tốt trong nước.'
        ],
        correctAnswer: 'C',
        explanation: 'Hai dạng đều là đơn chất sulfur nhưng có mạng tinh thể khác nhau.'
      },
      {
        question: 'Ứng dụng công nghiệp quan trọng nhất của sulfur là gì?',
        options: [
          'Sản xuất sulfuric acid.',
          'Trung hòa mọi base.',
          'Tạo nitrogen lỏng.',
          'Điều chế sodium chloride.'
        ],
        correctAnswer: 'A',
        explanation: 'Phần lớn sulfur được dùng làm nguyên liệu sản xuất H₂SO₄.'
      }
    ]
  },
  {
    id: 'chem11-qt26',
    principle:
      'Sulfur đơn chất có số oxi hóa 0 nên có thể nhận electron xuống −2 hoặc nhường electron lên +4, +6. Vì vậy vai trò của sulfur thay đổi theo chất phản ứng. Phải kết luận từ số oxi hóa trong từng phương trình, không học thuộc sulfur luôn là một vai trò.',
    method: [
      'Ghi số oxi hóa của S ở chất đầu và sản phẩm.',
      'S giảm số oxi hóa: sulfur là chất oxi hóa.',
      'S tăng số oxi hóa: sulfur là chất khử.'
    ],
    example: {
      problem: 'Xác định vai trò của S trong Fe + S → FeS và S + O₂ → SO₂.',
      steps: [
        'Trong FeS, S từ 0 xuống −2 nên nhận electron.',
        'Trong SO₂, S từ 0 lên +4 nên nhường electron.'
      ],
      answer: 'S là chất oxi hóa với Fe và là chất khử với O₂.'
    },
    checks: [
      {
        question: 'Trong phản ứng tạo FeS, sulfur đóng vai trò gì?',
        options: ['Chất oxi hóa', 'Chất khử', 'Acid', 'Xúc tác'],
        correctAnswer: 'A',
        explanation: 'S nhận electron và giảm số oxi hóa từ 0 xuống −2.'
      },
      {
        question: 'Trong phản ứng S + O₂ → SO₂, số oxi hóa của S thay đổi thế nào?',
        options: ['−2 → 0', '+4 → 0', '0 → −2', '0 → +4'],
        correctAnswer: 'D',
        explanation: 'S bị oxi hóa và đóng vai trò chất khử.'
      }
    ]
  },
  {
    id: 'chem11-qt27',
    principle:
      'SO₂ là oxide acid và tạo hai loại muối khi phản ứng với kiềm tùy tỉ lệ. Với NaOH, tỉ lệ n(OH⁻)/n(SO₂) gần 1 ưu tiên hydrogensulfite; gần 2 ưu tiên sulfite. Khi lượng nằm giữa, có thể tạo hỗn hợp hai muối.',
    method: [
      'Tính tỉ lệ mol OH⁻ và SO₂.',
      'So sánh với hai mốc 1 và 2 để xác định sản phẩm.',
      'Viết phương trình, kiểm tra điện tích và bảo toàn nguyên tố.'
    ],
    example: {
      problem: 'Cho 0,10 mol SO₂ tác dụng vừa đủ với 0,20 mol NaOH. Xác định muối.',
      steps: [
        'Tỉ lệ n(NaOH)/n(SO₂) = 2.',
        'Phản ứng SO₂ + 2NaOH → Na₂SO₃ + H₂O.'
      ],
      answer: 'Tạo 0,10 mol Na₂SO₃.'
    },
    checks: [
      {
        question: 'Khi n(NaOH) = n(SO₂), sản phẩm muối chính là gì?',
        options: ['Na₂SO₄', 'NaHSO₃', 'Na₂S', 'Na₂SO₃'],
        correctAnswer: 'B',
        explanation: 'Tỉ lệ 1:1 tạo muối acid NaHSO₃.'
      },
      {
        question: 'SO₂ được xếp vào loại oxide nào?',
        options: ['Oxide base', 'Oxide lưỡng tính', 'Oxide acid', 'Oxide trung tính'],
        correctAnswer: 'C',
        explanation: 'SO₂ phản ứng với base và tạo acid yếu trong nước.'
      }
    ]
  },
  {
    id: 'chem11-qt28',
    principle:
      'S trong SO₂ có mức oxi hóa trung gian +4. SO₂ bị oxi hóa lên sulfate thì đóng vai trò chất khử; khi bị khử xuống S hoặc H₂S thì đóng vai trò chất oxi hóa. Khả năng tẩy màu của SO₂ là tính khử và thường không bền như tẩy màu do oxi hóa mạnh.',
    method: [
      'Theo dõi số oxi hóa của sulfur trong phản ứng.',
      'Phân biệt ứng dụng có kiểm soát với phát thải gây hại.',
      'Khi xử lí khí thải, chọn chất hấp thụ kiềm và viết sản phẩm phù hợp.'
    ],
    example: {
      problem: 'Xác định vai trò của SO₂ khi làm mất màu dung dịch bromine.',
      steps: [
        'S(+4) trong SO₂ bị oxi hóa lên S(+6).',
        'SO₂ nhường electron cho Br₂.'
      ],
      answer: 'SO₂ là chất khử.'
    },
    checks: [
      {
        question: 'Số oxi hóa của sulfur trong SO₂ là bao nhiêu?',
        options: ['−2', '0', '+4', '+6'],
        correctAnswer: 'C',
        explanation: 'Hai O có tổng số oxi hóa −4 nên S là +4.'
      },
      {
        question: 'Biện pháp phù hợp để giảm SO₂ trong khí thải là gì?',
        options: [
          'Dùng vật liệu kiềm hấp thụ.',
          'Thải trực tiếp cao hơn.',
          'Trộn thêm nhiên liệu chứa sulfur.',
          'Hòa tan vào dầu.'
        ],
        correctAnswer: 'A',
        explanation: 'Vật liệu kiềm phản ứng với oxide acid SO₂ và giữ sulfur trong pha rắn/lỏng.'
      }
    ]
  },
  {
    id: 'chem11-qt29',
    principle:
      'H₂SO₄ loãng là acid mạnh hai nấc trong các bài toán phổ thông và phản ứng theo quy tắc acid với base, oxide base, carbonate. H₂SO₄ đặc tạo nhiệt rất lớn khi hòa tan; luôn thêm acid từ từ vào nước, khuấy và làm mát, không làm ngược lại.',
    method: [
      'Xác định acid đang ở dạng loãng hay đặc.',
      'Nếu xét tính acid, cân bằng số proton với base hoặc anion.',
      'Nếu pha loãng, áp dụng đúng thứ tự acid vào nước và quy tắc bảo hộ.'
    ],
    example: {
      problem: 'Tính số mol NaOH để trung hòa hoàn toàn 0,10 mol H₂SO₄.',
      steps: [
        'H₂SO₄ cung cấp hai proton trong phản ứng trung hòa hoàn toàn.',
        'H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O.'
      ],
      answer: 'Cần 0,20 mol NaOH.'
    },
    checks: [
      {
        question: 'Cách pha loãng H₂SO₄ đặc an toàn là gì?',
        options: [
          'Rót nước thật nhanh vào acid.',
          'Thêm acid từ từ vào nước và khuấy.',
          'Trộn trong bình kín không làm mát.',
          'Dùng tay kiểm tra nhiệt độ.'
        ],
        correctAnswer: 'B',
        explanation: 'Nước có nhiệt dung lớn giúp hấp thụ nhiệt; thêm từ từ hạn chế sôi cục bộ và bắn acid.'
      },
      {
        question: 'Trung hòa hoàn toàn 1 mol H₂SO₄ cần bao nhiêu mol NaOH?',
        options: ['0,5 mol', '1 mol', '2 mol', '4 mol'],
        correctAnswer: 'C',
        explanation: 'Phương trình là H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O.'
      }
    ]
  },
  {
    id: 'chem11-qt30',
    principle:
      'H₂SO₄ đặc, nóng vừa là acid vừa là chất oxi hóa mạnh; với nhiều kim loại tạo SO₂ thay vì H₂. Tính háo nước là khả năng giữ hoặc lấy nước mạnh, gây than hóa một số chất hữu cơ. Hai tính chất phải được nhận diện theo hiện tượng và sản phẩm.',
    method: [
      'Xác định điều kiện đặc, nóng trước khi chọn sản phẩm với kim loại.',
      'Dùng số oxi hóa để cân bằng phản ứng tạo SO₂.',
      'Trong thí nghiệm than hóa, phân biệt háo nước với oxi hóa hoàn toàn.'
    ],
    example: {
      problem: 'Viết phương trình Cu tác dụng với H₂SO₄ đặc, nóng.',
      steps: [
        'Cu từ 0 lên +2; S trong sulfate từ +6 xuống +4.',
        'Cân bằng electron và các nguyên tố.'
      ],
      answer: 'Cu + 2H₂SO₄ → CuSO₄ + SO₂ + 2H₂O.'
    },
    checks: [
      {
        question: 'Khí tạo ra khi Cu phản ứng với H₂SO₄ đặc, nóng là gì?',
        options: ['H₂', 'SO₂', 'O₂', 'H₂S'],
        correctAnswer: 'B',
        explanation: 'S(+6) trong H₂SO₄ bị khử xuống +4 trong SO₂.'
      },
      {
        question: 'Hiện tượng đường bị hóa đen bởi H₂SO₄ đặc minh họa tính chất nào?',
        options: ['Tính base', 'Tính bay hơi', 'Tính háo nước', 'Tính khử'],
        correctAnswer: 'C',
        explanation: 'H₂SO₄ đặc lấy nước khỏi carbohydrate, để lại carbon.'
      }
    ]
  },
  {
    id: 'chem11-qt31',
    principle:
      'Phương pháp tiếp xúc gồm ba công đoạn hóa học chính: tạo SO₂, oxi hóa SO₂ thành SO₃ và chuyển SO₃ thành H₂SO₄ qua oleum. Phản ứng 2SO₂ + O₂ ⇌ 2SO₃ là tỏa nhiệt; xúc tác V₂O₅ tăng tốc độ nhưng không đổi cân bằng.',
    method: [
      'Sắp xếp đúng chuỗi nguyên liệu → SO₂ → SO₃ → oleum → H₂SO₄.',
      'Phân tích phản ứng tạo SO₃ bằng cân bằng hóa học.',
      'Giải thích vì sao không hấp thụ trực tiếp SO₃ vào nước.'
    ],
    example: {
      problem: 'Giải thích công đoạn hấp thụ SO₃ trong sản xuất H₂SO₄.',
      steps: [
        'SO₃ tác dụng trực tiếp với nước tạo sương acid khó thu hồi.',
        'Hấp thụ SO₃ vào H₂SO₄ đặc tạo oleum rồi pha loãng có kiểm soát.'
      ],
      answer: 'Dùng oleum giúp hấp thụ hiệu quả và hạn chế sương acid.'
    },
    checks: [
      {
        question: 'Xúc tác dùng trong phản ứng oxi hóa SO₂ thành SO₃ là gì?',
        options: ['Fe', 'V₂O₅', 'Ni', 'MnO₂'],
        correctAnswer: 'B',
        explanation: 'V₂O₅ là xúc tác điển hình của phương pháp tiếp xúc.'
      },
      {
        question: 'Vì sao không ưu tiên cho SO₃ trực tiếp vào nước?',
        options: [
          'SO₃ không phản ứng với nước.',
          'Tạo H₂ thay vì acid.',
          'Tạo sương H₂SO₄ khó thu hồi.',
          'Chỉ tạo sulfur.'
        ],
        correctAnswer: 'C',
        explanation: 'Phản ứng mạnh và tạo các hạt sương acid rất nhỏ.'
      }
    ]
  },
  {
    id: 'chem11-qt32',
    principle:
      'Phép thử sulfate dùng Ba²⁺ trong môi trường được kiểm soát để tạo BaSO₄ trắng, rất ít tan. Acid hóa mẫu phù hợp giúp loại nhiễu carbonate hoặc sulfite vì chúng có thể tạo kết tủa trắng với Ba²⁺ nhưng bị acid phân hủy; không acid hóa bằng sulfuric acid vì sẽ đưa thêm sulfate.',
    method: [
      'Lấy lượng mẫu nhỏ và acid hóa bằng acid không chứa sulfate khi cần.',
      'Thêm dung dịch chứa Ba²⁺ tan.',
      'Quan sát kết tủa trắng bền trong môi trường acid và đối chiếu mẫu trắng.'
    ],
    example: {
      problem: 'Phân biệt sulfate với carbonate trước khi thêm BaCl₂.',
      steps: [
        'Acid hóa mẫu bằng HCl loãng: carbonate giải phóng CO₂.',
        'Thêm BaCl₂; sulfate còn lại tạo BaSO₄ trắng.'
      ],
      answer: 'Kết tủa trắng bền sau acid hóa hỗ trợ xác nhận SO₄²⁻.'
    },
    checks: [
      {
        question: 'Phương trình ion nhận biết sulfate là gì?',
        options: [
          'Ba²⁺ + SO₄²⁻ → BaSO₄↓',
          '2H⁺ + SO₄²⁻ → H₂SO₄↓',
          'Na⁺ + SO₄²⁻ → Na₂SO₄↓',
          'Ba²⁺ + 2Cl⁻ → BaCl₂↓'
        ],
        correctAnswer: 'A',
        explanation: 'BaSO₄ là kết tủa trắng rất ít tan.'
      },
      {
        question: 'Không nên dùng acid nào để acid hóa mẫu trước phép thử sulfate?',
        options: ['HCl loãng', 'HNO₃ loãng', 'H₂SO₄', 'Acid phù hợp không chứa sulfate'],
        correctAnswer: 'C',
        explanation: 'H₂SO₄ đưa thêm ion sulfate và có thể gây kết quả dương tính giả.'
      }
    ]
  }
];

export const chem11NitrogenSulfurTheoryResources =
  buildChemistryTheoryResourceMap(specs);
