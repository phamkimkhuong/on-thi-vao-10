import {
  buildChemistryTheoryResourceMap,
  type ChemistryTheoryResourceSpec
} from '../../theoryResourceBuilder';

const specs: ChemistryTheoryResourceSpec[] = [
  {
    id: 'chem11-qt75',
    principle:
      'Aldehyde có carbonyl carbon liên kết với ít nhất một hydrogen, còn ketone có carbonyl carbon liên kết với hai gốc hydrocarbon. Với hợp chất no, đơn chức, mạch hở, cả aldehyde và ketone đều có công thức chung CₙH₂ₙO; vì vậy phải dùng cấu tạo hoặc tính chất hóa học để phân biệt.',
    method: [
      'Xác định nhóm –CHO hay –CO– và chọn mạch dài nhất chứa carbonyl.',
      'Đánh số để carbon aldehyde là C1 hoặc vị trí C=O của ketone nhỏ nhất.',
      'Khi tìm đồng phân, liệt kê riêng aldehyde và ketone rồi loại cấu tạo trùng.'
    ],
    example: {
      problem: 'Liệt kê các đồng phân aldehyde và ketone mạch hở của C₄H₈O.',
      steps: [
        'Aldehyde gồm butanal và 2-methylpropanal.',
        'Ketone chỉ có butan-2-one vì carbonyl phải nằm trong mạch.'
      ],
      answer: 'Có ba đồng phân carbonyl: butanal, 2-methylpropanal và butan-2-one.'
    },
    checks: [
      {
        question: 'Tên thay thế của CH₃CH₂CHO là gì?',
        options: ['Propanal', 'Propanone', 'Ethanal', 'Butanal'],
        correctAnswer: 'A',
        explanation: 'Mạch chứa ba carbon và nhóm –CHO nên tên là propanal.'
      },
      {
        question: 'Chất nào sau đây là ketone?',
        options: ['HCHO', 'CH₃CHO', 'CH₃COCH₃', 'CH₃COOH'],
        correctAnswer: 'C',
        explanation: 'Trong CH₃COCH₃, carbonyl carbon liên kết với hai gốc methyl.'
      }
    ]
  },
  {
    id: 'chem11-qt76',
    principle:
      'Liên kết C=O gồm một liên kết sigma và một liên kết pi, phân cực mạnh về phía oxygen. Carbonyl carbon gần lai hóa sp² và có dạng tam giác phẳng. Aldehyde, ketone nhận liên kết hydrogen từ nước nhưng không tự cho liên kết hydrogen, nên nhiệt độ sôi thường nằm giữa hydrocarbon và alcohol có khối lượng phân tử gần nhau.',
    method: [
      'Đánh dấu Cδ+ và Oδ−, sau đó xác định hình học quanh carbonyl carbon.',
      'So sánh lực liên phân tử trước khi xếp nhiệt độ sôi.',
      'Khi xét độ tan, cân bằng khả năng nhận liên kết hydrogen với kích thước phần hydrocarbon.'
    ],
    example: {
      problem: 'Xếp propane, propanone và propan-2-ol theo chiều tăng nhiệt độ sôi.',
      steps: [
        'Propane chủ yếu có lực phân tán; propanone có tương tác lưỡng cực.',
        'Propan-2-ol tạo mạng liên kết hydrogen giữa các phân tử.'
      ],
      answer: 'Propane < propanone < propan-2-ol.'
    },
    checks: [
      {
        question: 'Liên kết C=O gồm những thành phần nào?',
        options: ['Hai sigma', 'Một sigma và một pi', 'Hai pi', 'Một liên kết ion'],
        correctAnswer: 'B',
        explanation: 'Liên kết đôi C=O gồm một liên kết sigma và một liên kết pi.'
      },
      {
        question: 'Vì sao độ tan trong nước của dãy aldehyde thường giảm khi mạch carbon dài hơn?',
        options: [
          'Oxygen biến mất.',
          'Phần hydrocarbon kị nước tăng.',
          'Liên kết C=O hết phân cực.',
          'Khối lượng phân tử luôn giảm.'
        ],
        correctAnswer: 'B',
        explanation: 'Ảnh hưởng kị nước của phần hydrocarbon tăng dần và lấn át tương tác của nhóm carbonyl với nước.'
      }
    ]
  },
  {
    id: 'chem11-qt77',
    principle:
      'Tác nhân khử cung cấp hydrogen để biến C=O thành nhóm alcohol mà không làm mất carbonyl carbon: aldehyde cho alcohol bậc I, ketone cho alcohol bậc II. Khi cộng HCN, CN gắn vào carbonyl carbon và oxygen nhận H, tạo cyanohydrin có thêm một nguyên tử carbon.',
    method: [
      'Phân loại chất đầu là aldehyde hay ketone.',
      'Giữ nguyên khung carbon rồi thay C=O bằng CH₂OH hoặc CHOH.',
      'Với HCN, gắn đồng thời –CN và –OH vào carbonyl carbon rồi kiểm tra số carbon.'
    ],
    example: {
      problem: 'Xác định sản phẩm khi butan-2-one bị khử.',
      steps: [
        'Butan-2-one là ketone nên carbonyl carbon còn liên kết với hai gốc carbon.',
        'Thay C=O bằng CH–OH, giữ nguyên mạch bốn carbon.'
      ],
      answer: 'Sản phẩm là butan-2-ol, một alcohol bậc II.'
    },
    checks: [
      {
        question: 'Ethanal bị khử tạo chất nào?',
        options: ['Methanol', 'Ethanol', 'Propan-2-ol', 'Ethanoic acid'],
        correctAnswer: 'B',
        explanation: 'CH₃CHO chuyển thành CH₃CH₂OH.'
      },
      {
        question: 'Điều gì xảy ra với số nguyên tử carbon khi aldehyde cộng HCN?',
        options: ['Giảm một', 'Không đổi', 'Tăng một', 'Tăng hai'],
        correctAnswer: 'C',
        explanation: 'Carbon của nhóm –CN trở thành một carbon mới trong cyanohydrin.'
      }
    ]
  },
  {
    id: 'chem11-qt78',
    principle:
      'Aldehyde dễ bị oxi hóa thành carboxylic acid hoặc carboxylate, còn ketone đơn giản thường không phản ứng trong các phép thử Tollens, Cu(OH)₂/OH⁻ và nước bromine. Với aldehyde đơn chức thông thường, một mol nhóm –CHO khử hai mol Ag(I) thành hai mol Ag.',
    method: [
      'Tìm nhóm –CHO và loại ketone đơn giản khỏi phản ứng đặc trưng.',
      'Chọn môi trường để viết sản phẩm acid hay carboxylate.',
      'Dùng tỉ lệ một nhóm –CHO với hai mol Ag khi xử lí bài toán Tollens thông thường.'
    ],
    example: {
      problem: 'Tính số mol Ag tối đa thu được từ 0,10 mol ethanal dư thuốc thử Tollens.',
      steps: [
        'Ethanal có một nhóm –CHO trong mỗi phân tử.',
        'Dùng tỉ lệ 1 mol –CHO tạo 2 mol Ag.'
      ],
      answer: 'Thu được tối đa 0,20 mol Ag.'
    },
    checks: [
      {
        question: 'Hiện tượng khi đun ethanal với Cu(OH)₂ trong môi trường kiềm là gì?',
        options: ['Khí không màu', 'Kết tủa Cu₂O đỏ gạch', 'Kết tủa Ag', 'Không đổi'],
        correctAnswer: 'B',
        explanation: 'Aldehyde khử Cu(II) thành Cu₂O màu đỏ gạch khi đun nóng.'
      },
      {
        question: 'Acetone có làm mất màu nước bromine theo phản ứng đặc trưng của aldehyde không?',
        options: ['Có, do phản ứng thế', 'Có, do tạo Ag', 'Không', 'Chỉ khi có NaCl'],
        correctAnswer: 'C',
        explanation: 'Ketone đơn giản không bị oxi hóa bởi nước bromine trong điều kiện phép thử này.'
      }
    ]
  },
  {
    id: 'chem11-qt79',
    principle:
      'Kết quả thí nghiệm chỉ có giá trị khi đúng thuốc thử và điều kiện: Tollens phải pha mới và làm ấm cách thủy; phản ứng với Cu(OH)₂ cần môi trường kiềm và đun nóng; iodoform dùng I₂/OH⁻ để nhận biết motif CH₃CO– qua kết tủa CHI₃ màu vàng.',
    method: [
      'Đọc đủ thành phần thuốc thử, nhiệt độ và thứ tự thao tác.',
      'Ghép hiện tượng với Ag, Cu₂O hoặc CHI₃ thay vì chỉ dựa vào màu chung.',
      'Kiểm tra các yêu cầu an toàn trước khi kết luận quy trình đúng.'
    ],
    example: {
      problem: 'Chọn phép thử phân biệt ethanal và acetone trong hai mẫu riêng biệt.',
      steps: [
        'Tollens cho phản ứng với ethanal nhưng không với acetone.',
        'Làm ấm cách thủy và quan sát lớp bạc trên thành ống nghiệm.'
      ],
      answer: 'Mẫu tạo bạc là ethanal; mẫu không phản ứng là acetone.'
    },
    checks: [
      {
        question: 'Kết tủa vàng trong phản ứng iodoform của acetone là chất nào?',
        options: ['AgI', 'Cu₂O', 'CHI₃', 'I₂'],
        correctAnswer: 'C',
        explanation: 'Motif CH₃CO– tạo iodoform CHI₃ màu vàng trong I₂/OH⁻.'
      },
      {
        question: 'Cách gia nhiệt phù hợp cho thí nghiệm Tollens là gì?',
        options: ['Đun bằng lửa trực tiếp', 'Làm ấm cách thủy', 'Nung đỏ ống nghiệm', 'Không cần kiểm soát nhiệt'],
        correctAnswer: 'B',
        explanation: 'Làm ấm cách thủy giúp kiểm soát nhiệt và an toàn hơn với thuốc thử mới pha.'
      }
    ]
  },
  {
    id: 'chem11-qt80',
    principle:
      'Ethanal có thể được điều chế bằng oxi hóa ethylene có xúc tác; acetone là đồng sản phẩm của quy trình cumene sản xuất phenol. Formalin là dung dịch formaldehyde, còn acetone là dung môi dễ bay hơi và dễ cháy; ứng dụng phải luôn gắn với kiểm soát phơi nhiễm, thông gió và nguồn lửa.',
    method: [
      'Nhận diện chất thương mại, chất tinh khiết và mục đích sử dụng.',
      'Chọn đúng tuyến điều chế rồi bảo toàn nguyên tử trong phương trình.',
      'Với nhận biết tổng hợp, lập bảng kết quả Tollens và iodoform cho từng mẫu.'
    ],
    example: {
      problem: 'Phân biệt riêng biệt ethanal, acetone và ethanol bằng hai phép thử.',
      steps: [
        'Dùng Tollens: ethanal dương tính, acetone và ethanol âm tính.',
        'Dùng iodoform cho hai mẫu còn lại: acetone dương tính; ethanol được xác định bằng loại trừ trong phạm vi bài.'
      ],
      answer: 'Tollens nhận ethanal; iodoform nhận acetone; mẫu còn lại là ethanol.'
    },
    checks: [
      {
        question: 'Quy trình cumene tạo acetone đồng thời với chất nào?',
        options: ['Phenol', 'Ethanol', 'Methanal', 'Acetic acid'],
        correctAnswer: 'A',
        explanation: 'Cumene hydroperoxide phân cắt tạo phenol và acetone.'
      },
      {
        question: 'Nhận định nào đúng về formalin?',
        options: [
          'Là formaldehyde tinh khiết.',
          'Là dung dịch chứa formaldehyde và cần kiểm soát phơi nhiễm.',
          'Là acetone loãng.',
          'An toàn để ngửi trực tiếp.'
        ],
        correctAnswer: 'B',
        explanation: 'Formalin là dung dịch formaldehyde; formaldehyde độc và gây kích ứng.'
      }
    ]
  },
  {
    id: 'chem11-qt81',
    principle:
      'Nhóm carboxyl –COOH gồm carbonyl và hydroxyl cùng gắn vào một carbon, không được tách thành hai nhóm chức độc lập. Khi gọi tên, carbon carboxyl luôn thuộc mạch chính và mang số 1. Với acid no, đơn chức, mạch hở, công thức chung là CₙH₂ₙO₂.',
    method: [
      'Khoanh trọn nhóm –C(=O)OH và đếm số nhóm carboxyl.',
      'Chọn mạch dài nhất chứa carbon carboxyl rồi gọi tên acid ...oic.',
      'Khi tìm đồng phân, cố định –COOH và thay đổi khung alkyl, không tính ester.'
    ],
    example: {
      problem: 'Liệt kê các carboxylic acid no, đơn chức, mạch hở có CTPT C₄H₈O₂.',
      steps: [
        'Cố định một carbon trong –COOH, phần còn lại là gốc C₃H₇.',
        'Gốc C₃H₇ có dạng propyl và isopropyl.'
      ],
      answer: 'Có butanoic acid và 2-methylpropanoic acid.'
    },
    checks: [
      {
        question: 'Tên thay thế của CH₃COOH là gì?',
        options: ['Methanoic acid', 'Ethanoic acid', 'Propanal', 'Methyl methanoate'],
        correctAnswer: 'B',
        explanation: 'Phân tử có hai carbon và một nhóm –COOH nên là ethanoic acid.'
      },
      {
        question: 'Khi gọi tên carboxylic acid, carbon của –COOH mang số mấy?',
        options: ['Luôn là 1', 'Luôn là 2', 'Số lớn nhất', 'Không thuộc mạch chính'],
        correctAnswer: 'A',
        explanation: 'Carbon carboxyl là carbon số 1 của mạch chính.'
      }
    ]
  },
  {
    id: 'chem11-qt82',
    principle:
      'Nhóm –COOH gần phẳng và phân cực; carboxylic acid vừa cho vừa nhận liên kết hydrogen nên thường tạo dimer và có nhiệt độ sôi cao. Trong nước, RCOOH chỉ phân li một phần thành RCOO⁻ và H⁺; không được dùng mô hình acid mạnh nếu đề không cho phép.',
    method: [
      'Xác định hình học và các vị trí cho, nhận liên kết hydrogen.',
      'So sánh nhiệt độ sôi và độ tan bằng cả nhóm –COOH lẫn phần hydrocarbon.',
      'Viết dấu cân bằng cho sự phân li và phân biệt nồng độ ban đầu với nồng độ cân bằng.'
    ],
    example: {
      problem: 'Giải thích vì sao acetic acid có nhiệt độ sôi cao hơn ethanol.',
      steps: [
        'Cả hai chất đều tạo liên kết hydrogen.',
        'Acetic acid có thể tạo dimer bền với hai liên kết hydrogen giữa một cặp phân tử.'
      ],
      answer: 'Tương tác liên phân tử mạnh hơn làm acetic acid có nhiệt độ sôi cao hơn.'
    },
    checks: [
      {
        question: 'Phương trình nào mô tả đúng sự phân li của acetic acid?',
        options: [
          'CH₃COOH → CH₃⁺ + COOH⁻',
          'CH₃COOH ⇌ CH₃COO⁻ + H⁺',
          'CH₃COOH → CH₄ + CO₂',
          'CH₃COOH ⇌ CH₃OH + CO'
        ],
        correctAnswer: 'B',
        explanation: 'Acetic acid là acid yếu nên phân li thuận nghịch, không hoàn toàn.'
      },
      {
        question: 'Độ tan trong nước của acid đơn chức thường thay đổi thế nào khi mạch hydrocarbon dài hơn?',
        options: ['Tăng', 'Giảm', 'Luôn không đổi', 'Luôn bằng vô hạn'],
        correctAnswer: 'B',
        explanation: 'Phần hydrocarbon kị nước lớn hơn làm độ tan giảm.'
      }
    ]
  },
  {
    id: 'chem11-qt83',
    principle:
      'Carboxylic acid biểu hiện tính acid qua phản ứng với base, oxide base, kim loại đứng trước hydrogen, carbonate và hydrogencarbonate. Tỉ lượng phải dựa trên tổng số nhóm –COOH: mỗi nhóm trung hòa một mol OH⁻ hoặc HCO₃⁻, còn hai mol nhóm –COOH tạo một mol H₂ với kim loại hóa trị II như Mg.',
    method: [
      'Đếm số mol nhóm –COOH thay vì chỉ đếm số mol phân tử acid.',
      'Xác định khí H₂ với kim loại hoặc CO₂ với carbonate/hydrogencarbonate.',
      'Viết muối carboxylate đúng điện tích rồi áp dụng tỉ lệ mol.'
    ],
    example: {
      problem: 'Tính số mol CO₂ khi 0,20 mol CH₃COOH phản ứng hết với NaHCO₃.',
      steps: [
        'Acetic acid đơn chức phản ứng với NaHCO₃ theo tỉ lệ 1:1.',
        'Mỗi mol HCO₃⁻ nhận một proton và tạo một mol CO₂.'
      ],
      answer: 'Số mol CO₂ là 0,20 mol.'
    },
    checks: [
      {
        question: 'Khí sinh ra khi acetic acid phản ứng với Mg là gì?',
        options: ['CO₂', 'H₂', 'O₂', 'CH₄'],
        correctAnswer: 'B',
        explanation: 'Acid phản ứng với Mg tạo muối carboxylate và hydrogen.'
      },
      {
        question: 'Một mol oxalic acid HOOC–COOH trung hòa hoàn toàn bao nhiêu mol NaOH?',
        options: ['0,5 mol', '1 mol', '2 mol', '4 mol'],
        correctAnswer: 'C',
        explanation: 'Oxalic acid có hai nhóm –COOH nên cần hai mol OH⁻.'
      }
    ]
  },
  {
    id: 'chem11-qt84',
    principle:
      'Ester hóa giữa carboxylic acid và alcohol là phản ứng thuận nghịch, thường dùng H₂SO₄ đặc làm xúc tác và đun nóng. Tên ester gồm tên alkyl có nguồn gốc từ alcohol rồi đến tên carboxylate có nguồn gốc từ acid. Hiệu suất chỉ được áp dụng sau khi xác định lượng sản phẩm lí thuyết theo chất giới hạn.',
    method: [
      'Ghép RCOO– của acid với R′ của alcohol để viết ester RCOOR′.',
      'Đổi dữ kiện về mol và tìm chất giới hạn theo phương trình.',
      'Tính lượng ester lí thuyết rồi nhân hiệu suất phản ứng.'
    ],
    example: {
      problem: 'Cho 0,20 mol acetic acid và 0,30 mol ethanol phản ứng, hiệu suất 75%. Tính mol ethyl acetate.',
      steps: [
        'Tỉ lệ acid:alcohol:ester là 1:1:1; acetic acid là chất giới hạn.',
        'Số mol ester lí thuyết là 0,20 mol, thực tế bằng 0,20 × 75%.'
      ],
      answer: 'Thu được 0,15 mol ethyl acetate.'
    },
    checks: [
      {
        question: 'Ester tạo từ methanol và formic acid có tên là gì?',
        options: ['Methyl methanoate', 'Ethyl methanoate', 'Methyl ethanoate', 'Methanal'],
        correctAnswer: 'A',
        explanation: 'Phần alkyl là methyl và phần carboxylate là methanoate.'
      },
      {
        question: 'Vai trò chính của H₂SO₄ đặc trong mô hình phản ứng ester hóa là gì?',
        options: [
          'Chỉ làm tăng hằng số cân bằng.',
          'Làm xúc tác; khả năng hút nước cũng có thể hỗ trợ chuyển dịch cân bằng.',
          'Cung cấp toàn bộ carbon của ester.',
          'Biến phản ứng thành phản ứng cháy.'
        ],
        correctAnswer: 'B',
        explanation: 'H₂SO₄ đặc xúc tác phản ứng; việc giảm nước có thể hỗ trợ tăng lượng ester cân bằng.'
      }
    ]
  },
  {
    id: 'chem11-qt85',
    principle:
      'Trong thí nghiệm acid, bọt khí chưa đủ để nhận diện khí: Mg tạo H₂, còn carbonate hoặc hydrogencarbonate tạo CO₂. Điều chế ethyl acetate cần ethanol, acetic acid, vài giọt H₂SO₄ đặc và gia nhiệt cách thủy; không dùng lửa trần vì ethanol và ester dễ cháy.',
    method: [
      'Lập bảng mẫu, thuốc thử, hiện tượng và sản phẩm dự kiến.',
      'Sắp xếp đúng thao tác trộn, thêm xúc tác có kiểm soát, làm ấm và làm nguội.',
      'Kiểm tra an toàn: kính bảo hộ, không ngửi trực tiếp, không dùng lửa trần và xử lí chất thải đúng quy trình.'
    ],
    example: {
      problem: 'Phân biệt khí tạo ra khi acetic acid phản ứng riêng với Mg và NaHCO₃.',
      steps: [
        'Ống có Mg tạo H₂, có thể kiểm chứng bằng phép thử phù hợp do giáo viên thực hiện.',
        'Ống có NaHCO₃ tạo CO₂, dẫn qua nước vôi trong làm vẩn đục.'
      ],
      answer: 'Mg tạo H₂; NaHCO₃ tạo CO₂.'
    },
    checks: [
      {
        question: 'Cách gia nhiệt phù hợp khi điều chế ethyl acetate trong phòng học là gì?',
        options: ['Lửa trần', 'Cách thủy', 'Đốt trực tiếp hỗn hợp', 'Không cần kiểm soát'],
        correctAnswer: 'B',
        explanation: 'Gia nhiệt cách thủy giảm nguy cơ cháy do ethanol và ester dễ bắt lửa.'
      },
      {
        question: 'Thao tác nào không an toàn khi quan sát sản phẩm ester?',
        options: [
          'Đeo kính bảo hộ.',
          'Để ống nghiệm nguội.',
          'Đưa sát mũi và ngửi trực tiếp.',
          'Dùng lượng hóa chất nhỏ.'
        ],
        correctAnswer: 'C',
        explanation: 'Không được ngửi trực tiếp hóa chất; nếu cần phải dùng kỹ thuật nhận mùi an toàn theo hướng dẫn.'
      }
    ]
  },
  {
    id: 'chem11-qt86',
    principle:
      'Acetic acid được sản xuất sinh học bằng oxi hóa ethanol có oxygen và vi khuẩn acetic, hoặc công nghiệp qua các tuyến phản ứng được kiểm soát. Trong phương trình oxi hóa butane, một mol C₄H₁₀ có thể tạo hai mol CH₃COOH. Giấm là dung dịch loãng chứa acetic acid, không phải acid tinh khiết.',
    method: [
      'Xác định tuyến sinh học hay công nghiệp và viết phương trình cân bằng.',
      'Dùng tỉ lệ mol theo carbon trước khi áp dụng hiệu suất.',
      'Trong bài nhận biết, kết hợp NaHCO₃ cho acid với thuốc thử đặc trưng của các nhóm chức còn lại.'
    ],
    example: {
      problem: 'Tính mol acetic acid lí thuyết từ 0,50 mol butane theo phương trình oxi hóa không hoàn toàn.',
      steps: [
        'Phương trình cân bằng cho tỉ lệ 1 mol butane tạo 2 mol acetic acid.',
        'Nhân 0,50 mol butane với hệ số tỉ lượng 2.'
      ],
      answer: 'Thu được lí thuyết 1,00 mol acetic acid.'
    },
    checks: [
      {
        question: 'Điều kiện quan trọng của quá trình lên men giấm từ ethanol là gì?',
        options: ['Không có oxygen', 'Có oxygen và vi khuẩn acetic', 'Chỉ có NaOH', 'Nhiệt phân hoàn toàn'],
        correctAnswer: 'B',
        explanation: 'Vi khuẩn acetic oxi hóa ethanol trong điều kiện có oxygen.'
      },
      {
        question: 'Thuốc thử đơn giản nhận biết carboxylic acid qua khí CO₂ là gì?',
        options: ['NaHCO₃', 'NaCl', 'AgNO₃', 'Dung dịch bromine'],
        correctAnswer: 'A',
        explanation: 'Carboxylic acid phản ứng với hydrogencarbonate giải phóng CO₂.'
      }
    ]
  }
];

export const chem11CarbonylCarboxylicAcidTheoryResources =
  buildChemistryTheoryResourceMap(specs);
