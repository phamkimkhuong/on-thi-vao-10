import {
  buildChemistryTheoryCheckpointMap,
  type ChemistryTheoryCheckpointSpec
} from '../../theoryResourceBuilder';

const specs: ChemistryTheoryCheckpointSpec[] = [
  {
    id: 'chem11-qt01',
    checks: [
      {
        question: 'Phát biểu nào mô tả đúng trạng thái cân bằng động?',
        options: [
          'Hai phản ứng đều dừng.',
          'Tốc độ thuận bằng tốc độ nghịch và đều khác 0.',
          'Nồng độ mọi chất bằng nhau.',
          'Chỉ còn sản phẩm trong hệ.'
        ],
        correctAnswer: 'B',
        explanation: 'Ở cân bằng động, hai chiều vẫn xảy ra nhưng có tốc độ bằng nhau.'
      },
      {
        question: 'Ở trạng thái cân bằng, nồng độ các chất trong hệ có đặc điểm gì?',
        options: [
          'Đều bằng 0.',
          'Luôn bằng nhau.',
          'Không đổi theo thời gian nếu điều kiện giữ nguyên.',
          'Luôn tăng theo thời gian.'
        ],
        correctAnswer: 'C',
        explanation: 'Nồng độ ổn định theo thời gian nhưng không nhất thiết bằng nhau.'
      }
    ]
  },
  {
    id: 'chem11-qt02',
    checks: [
      {
        question: 'Trên đồ thị nồng độ–thời gian, dấu hiệu đáng tin cậy của cân bằng là gì?',
        options: [
          'Hai đường nồng độ cắt nhau.',
          'Tất cả nồng độ được theo dõi ổn định.',
          'Một chất có nồng độ bằng 0.',
          'Đường sản phẩm cao hơn đường chất đầu.'
        ],
        correctAnswer: 'B',
        explanation: 'Cân bằng được nhận diện khi thành phần vĩ mô của toàn hệ ổn định.'
      },
      {
        question: 'Trên đồ thị tốc độ–thời gian, hệ bắt đầu cân bằng khi nào?',
        options: [
          'Tốc độ thuận bằng 0.',
          'Tốc độ nghịch lớn hơn tốc độ thuận.',
          'Tốc độ thuận bằng tốc độ nghịch.',
          'Hai nồng độ bằng nhau.'
        ],
        correctAnswer: 'C',
        explanation: 'Tiêu chí động học của cân bằng là tốc độ hai chiều bằng nhau.'
      }
    ]
  },
  {
    id: 'chem11-qt03',
    checks: [
      {
        question: 'Biểu thức Kc của N₂ + 3H₂ ⇌ 2NH₃ là biểu thức nào?',
        options: [
          '[NH₃]²/([N₂][H₂]³)',
          '2[NH₃]/([N₂]3[H₂])',
          '[N₂][H₂]³/[NH₃]²',
          '[NH₃]/([N₂][H₂])'
        ],
        correctAnswer: 'A',
        explanation: 'Sản phẩm ở tử và hệ số tỉ lượng trở thành số mũ.'
      },
      {
        question: 'Kc rất lớn cho biết điều gì?',
        options: [
          'Phản ứng chắc chắn xảy ra rất nhanh.',
          'Sản phẩm được ưu tiên tương đối ở cân bằng.',
          'Mọi chất có nồng độ bằng nhau.',
          'Chất xúc tác đã được sử dụng.'
        ],
        correctAnswer: 'B',
        explanation: 'Độ lớn Kc phản ánh thành phần cân bằng, không trực tiếp phản ánh tốc độ.'
      }
    ]
  },
  {
    id: 'chem11-qt04',
    checks: [
      {
        question: 'Với 2SO₂(g) + O₂(g) ⇌ 2SO₃(g), tăng áp suất bằng cách giảm thể tích làm cân bằng chuyển dịch thế nào?',
        options: ['Sang trái', 'Sang phải', 'Không chuyển dịch', 'Kc tăng'],
        correctAnswer: 'B',
        explanation: 'Phía phải có tổng số mol khí nhỏ hơn nên được ưu tiên khi áp suất tăng.'
      },
      {
        question: 'Thêm một chất phản ứng ở nhiệt độ không đổi làm Kc thay đổi thế nào?',
        options: ['Tăng', 'Giảm', 'Không đổi', 'Bằng 0'],
        correctAnswer: 'C',
        explanation: 'Thành phần hệ chuyển dịch nhưng Kc chỉ phụ thuộc nhiệt độ đối với phương trình đã cho.'
      }
    ]
  },
  {
    id: 'chem11-qt05',
    checks: [
      {
        question: 'Tăng nhiệt độ của cân bằng có chiều thuận tỏa nhiệt làm hệ chuyển dịch theo chiều nào?',
        options: ['Chiều thuận', 'Chiều nghịch', 'Không chuyển dịch', 'Luôn tạo kết tủa'],
        correctAnswer: 'B',
        explanation: 'Hệ ưu tiên chiều thu nhiệt, tức chiều nghịch của phản ứng thuận tỏa nhiệt.'
      },
      {
        question: 'Chất xúc tác ảnh hưởng thế nào đến một hệ cân bằng?',
        options: [
          'Làm tăng Kc.',
          'Làm tăng hiệu suất cân bằng.',
          'Giúp hệ đạt cân bằng nhanh hơn nhưng không đổi thành phần cân bằng.',
          'Chỉ làm nhanh chiều thuận.'
        ],
        correctAnswer: 'C',
        explanation: 'Xúc tác làm nhanh cả hai chiều và không thay đổi vị trí cân bằng.'
      }
    ]
  },
  {
    id: 'chem11-qt06',
    checks: [
      {
        question: 'Trong hệ 2NO₂ ⇌ N₂O₄, khí tạo màu nâu là chất nào?',
        options: ['NO₂', 'N₂O₄', 'N₂', 'O₂'],
        correctAnswer: 'A',
        explanation: 'NO₂ có màu nâu, còn N₂O₄ gần như không màu.'
      },
      {
        question: 'Thao tác nào phù hợp khi khảo sát cân bằng NO₂/N₂O₄?',
        options: [
          'Mở ống và ngửi khí.',
          'Giữ hệ kín, thay đổi nhiệt độ bằng bể điều nhiệt và chờ màu ổn định.',
          'Đốt trực tiếp ống kín.',
          'Thay đồng thời lượng khí và nhiệt độ.'
        ],
        correctAnswer: 'B',
        explanation: 'NO₂ độc; thí nghiệm phải dùng hệ kín, kiểm soát một biến và chờ cân bằng mới.'
      }
    ]
  },
  {
    id: 'chem11-qt07',
    checks: [
      {
        question: 'Phương trình điện li nào đúng?',
        options: [
          'CaCl₂ → Ca⁺ + Cl₂⁻',
          'CaCl₂ → Ca²⁺ + 2Cl⁻',
          'CaCl₂ ⇌ Ca + 2Cl',
          'CaCl₂ → 2Ca²⁺ + Cl⁻'
        ],
        correctAnswer: 'B',
        explanation: 'Phương trình bảo toàn nguyên tử và điện tích: một Ca²⁺ cùng hai Cl⁻.'
      },
      {
        question: 'Nhận định nào đúng về chất điện li mạnh?',
        options: [
          'Luôn là dung dịch đậm đặc.',
          'Điện li gần như hoàn toàn trong dung dịch.',
          'Mọi chất tan trong nước đều thuộc nhóm này.',
          'Tinh thể rắn của nó luôn dẫn điện tốt.'
        ],
        correctAnswer: 'B',
        explanation: 'Mạnh/yếu mô tả mức độ điện li, không đồng nghĩa đậm đặc/loãng.'
      }
    ]
  },
  {
    id: 'chem11-qt08',
    checks: [
      {
        question: 'Trong NH₃ + H₂O ⇌ NH₄⁺ + OH⁻, NH₃ đóng vai trò gì?',
        options: ['Acid vì có hydrogen', 'Base vì nhận proton', 'Acid vì nhận proton', 'Không phải acid hay base'],
        correctAnswer: 'B',
        explanation: 'NH₃ nhận H⁺ từ H₂O để tạo NH₄⁺ nên là base Brønsted.'
      },
      {
        question: 'Cặp nào là một cặp acid–base liên hợp?',
        options: ['H₂CO₃/CO₃²⁻', 'NH₄⁺/NH₃', 'HCl/NaCl', 'H₂O/O₂'],
        correctAnswer: 'B',
        explanation: 'NH₄⁺ và NH₃ khác nhau đúng một proton.'
      }
    ]
  },
  {
    id: 'chem11-qt09',
    checks: [
      {
        question: 'Dung dịch có [H⁺] = 10⁻³ M có pH bằng bao nhiêu?',
        options: ['3', '7', '10', '11'],
        correctAnswer: 'A',
        explanation: 'pH = −log[H⁺] = 3.'
      },
      {
        question: 'Ở 25 °C, dung dịch có pOH = 2 thì pH bằng bao nhiêu?',
        options: ['2', '7', '12', '14'],
        correctAnswer: 'C',
        explanation: 'Ở 25 °C, pH + pOH = 14 nên pH = 12.'
      }
    ]
  },
  {
    id: 'chem11-qt10',
    checks: [
      {
        question: 'Hai dung dịch chênh nhau 2 đơn vị pH thì nồng độ H⁺ chênh nhau bao nhiêu lần?',
        options: ['2 lần', '10 lần', '100 lần', '1000 lần'],
        correctAnswer: 'C',
        explanation: 'Thang pH là logarit; chênh 2 đơn vị tương ứng hệ số 10².'
      },
      {
        question: 'Khi hai chỉ thị cho hai khoảng pH tương thích, cách suy ra khoảng pH của mẫu là gì?',
        options: [
          'Cộng hai khoảng.',
          'Lấy giao của hai khoảng.',
          'Chọn một giá trị bất kỳ.',
          'Chỉ dùng chỉ thị có màu đậm hơn.'
        ],
        correctAnswer: 'B',
        explanation: 'pH của mẫu phải đồng thời thỏa mãn cả hai quan sát nên thuộc phần giao.'
      }
    ]
  },
  {
    id: 'chem11-qt11',
    checks: [
      {
        question: 'Cân bằng nào giải thích dung dịch carbonate có môi trường base?',
        options: [
          'CO₃²⁻ + H₂O ⇌ HCO₃⁻ + OH⁻',
          'CO₃²⁻ → C + O₂',
          'CO₃²⁻ + H⁺ → OH⁻',
          'CO₃²⁻ ⇌ CO₂ + O⁻'
        ],
        correctAnswer: 'A',
        explanation: 'CO₃²⁻ nhận proton từ nước và tạo OH⁻, làm dung dịch có tính base.'
      },
      {
        question: 'Vì sao dung dịch chứa Al³⁺ thường có xu hướng acid?',
        options: [
          'Al³⁺ tạo trực tiếp OH⁻.',
          'Ion hydrated của Al³⁺ làm phân cực nước và giải phóng proton.',
          'Al³⁺ luôn biến thành Al kim loại.',
          'Mọi cation đều làm pH bằng 7.'
        ],
        correctAnswer: 'B',
        explanation: 'Mật độ điện tích lớn của Al³⁺ thúc đẩy quá trình thủy phân tạo môi trường acid.'
      }
    ]
  },
  {
    id: 'chem11-qt12',
    checks: [
      {
        question: 'Burette đọc đầu 0,35 mL và đọc cuối 24,80 mL. Thể tích đã dùng là bao nhiêu?',
        options: ['24,45 mL', '24,80 mL', '25,15 mL', '0,35 mL'],
        correctAnswer: 'A',
        explanation: 'Titre = số đọc cuối − số đọc đầu = 24,45 mL.'
      },
      {
        question: 'Trước khi nạp dung dịch chuẩn, burette nên được tráng lần cuối bằng gì?',
        options: ['Chỉ bằng nước cất', 'Dung dịch chuẩn sẽ dùng', 'Dung dịch phân tích', 'Chất chỉ thị'],
        correctAnswer: 'B',
        explanation: 'Tráng bằng dung dịch chuẩn tránh nước còn lại làm pha loãng dung dịch trong burette.'
      }
    ]
  },
  {
    id: 'chem11-qt13',
    checks: [
      {
        question: 'Trong xử lí số liệu chuẩn độ, titre được tính bằng công thức nào?',
        options: [
          'V đầu + V cuối',
          'V cuối − V đầu',
          'V đầu − V cuối',
          'V cuối × V đầu'
        ],
        correctAnswer: 'B',
        explanation: 'Thể tích dung dịch đã chảy khỏi burette bằng chênh lệch số đọc cuối và đầu.'
      },
      {
        question: 'Giá trị trung bình nên được tính từ tập số liệu nào?',
        options: [
          'Mọi lần kể cả lần thô.',
          'Chỉ các titre đáp ứng tiêu chí phù hợp của đề.',
          'Chỉ giá trị lớn nhất.',
          'Chỉ hai giá trị khác nhau nhiều nhất.'
        ],
        correctAnswer: 'B',
        explanation: 'Chỉ các phép đo định lượng được chấp nhận mới đại diện cho kết quả chuẩn độ.'
      }
    ]
  },
  {
    id: 'chem11-qt14',
    checks: [
      {
        question: 'Trong phản ứng H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O, quan hệ mol tại tương đương là gì?',
        options: ['nNaOH = nH₂SO₄', 'nNaOH = 2nH₂SO₄', '2nNaOH = nH₂SO₄', 'nNaOH = 4nH₂SO₄'],
        correctAnswer: 'B',
        explanation: 'Hệ số phương trình cho biết một mol H₂SO₄ phản ứng với hai mol NaOH.'
      },
      {
        question: 'Một mẫu được pha loãng từ 25,0 mL lên 250,0 mL. Nồng độ mẫu gốc bằng bao nhiêu lần nồng độ sau pha loãng?',
        options: ['0,1 lần', '1 lần', '10 lần', '100 lần'],
        correctAnswer: 'C',
        explanation: 'Hệ số pha loãng là 250,0/25,0 = 10.'
      }
    ]
  }
];

export const chem11EquilibriumTheoryCheckpoints =
  buildChemistryTheoryCheckpointMap(specs);
