import {
  buildChemistryTheoryResourceMap,
  type ChemistryTheoryResourceSpec
} from '../../theoryResourceBuilder';

const specs: ChemistryTheoryResourceSpec[] = [
  {
    id: 'chem11-qt45',
    principle:
      'Công thức CₙH₂ₙ₊₂ chỉ dùng cho alkane no, mạch hở. Khi tìm đồng phân, phải thay đổi khung carbon có liên kết khác nhau; viết ngược hoặc xoay cùng một khung không tạo chất mới. Số đồng phân tăng nhanh từ C₄ nên cần liệt kê theo mạch chính dài nhất.',
    method: [
      'Kiểm tra chất có no, mạch hở và chỉ chứa C, H.',
      'Dùng CₙH₂ₙ₊₂ để kiểm tra công thức.',
      'Liệt kê mạch thẳng rồi rút ngắn mạch chính và phân bố nhánh, loại cấu tạo trùng.'
    ],
    example: {
      problem: 'Liệt kê các khung carbon của C₅H₁₂.',
      steps: [
        'Mạch 5 C cho pentane; mạch 4 C có một nhánh cho 2-methylbutane.',
        'Mạch 3 C có hai nhánh cùng carbon giữa cho 2,2-dimethylpropane.'
      ],
      answer: 'C₅H₁₂ có ba đồng phân cấu tạo.'
    },
    checks: [
      {
        question: 'Công thức chung của alkane mạch hở là gì?',
        options: ['CₙH₂ₙ', 'CₙH₂ₙ₊₂', 'CₙH₂ₙ₋₂', 'CₙH₂ₙ₋₆'],
        correctAnswer: 'B',
        explanation: 'Alkane no, mạch hở có công thức CₙH₂ₙ₊₂ với n ≥ 1.'
      },
      {
        question: 'C₅H₁₂ có bao nhiêu đồng phân mạch carbon?',
        options: ['2', '3', '4', '5'],
        correctAnswer: 'B',
        explanation: 'Ba khung là pentane, 2-methylbutane và 2,2-dimethylpropane.'
      }
    ]
  },
  {
    id: 'chem11-qt46',
    principle:
      'Tên thay thế phải dựa trên chuỗi carbon liên tục dài nhất, không dựa vào hàng ngang của hình vẽ. Sau khi chọn mạch, đánh số để bộ chỉ số nhánh nhỏ nhất; sắp xếp tên nhánh theo alphabet và dùng di-, tri- khi nhánh lặp.',
    method: [
      'Chọn mạch carbon liên tục dài nhất.',
      'Đánh số từ đầu cho bộ vị trí nhánh nhỏ hơn.',
      'Gọi vị trí–tên nhánh theo alphabet rồi tên alkane mạch chính.'
    ],
    example: {
      problem: 'Gọi tên CH₃–CH(CH₃)–CH₂–CH₃.',
      steps: [
        'Mạch chính dài nhất có 4 C: butane.',
        'Đánh số từ đầu gần nhánh, nhóm methyl ở C2.'
      ],
      answer: 'Tên là 2-methylbutane.'
    },
    checks: [
      {
        question: 'Tiêu chí đầu tiên khi chọn mạch chính alkane là gì?',
        options: [
          'Chuỗi nằm ngang nhất.',
          'Chuỗi carbon liên tục dài nhất.',
          'Chuỗi có số thứ tự lớn nhất.',
          'Chuỗi chứa ít carbon nhất.'
        ],
        correctAnswer: 'B',
        explanation: 'Hướng vẽ không quyết định mạch chính; phải tìm chuỗi liên tục dài nhất.'
      },
      {
        question: 'Tên đúng của (CH₃)₃CH là gì?',
        options: ['Butane', '2-methylpropane', '2-methylbutane', '1,1-dimethylethane'],
        correctAnswer: 'B',
        explanation: 'Mạch chính propane có một nhánh methyl ở carbon 2.'
      }
    ]
  },
  {
    id: 'chem11-qt47',
    principle:
      'Alkane kém phân cực nên không tạo liên kết hydrogen với nước. Nhiệt độ sôi tăng khi kích thước và khả năng phân cực hóa tăng; giữa các đồng phân cùng CTPT, mạch phân nhánh gọn hơn thường có diện tích tiếp xúc nhỏ hơn nên nhiệt độ sôi thấp hơn.',
    method: [
      'Nhận diện liên kết sigma và hình học gần tứ diện quanh carbon sp³.',
      'Dùng độ phân cực để giải thích độ tan.',
      'So sánh nhiệt độ sôi bằng kích thước trước, mức phân nhánh sau.'
    ],
    example: {
      problem: 'So sánh nhiệt độ sôi n-pentane và neopentane.',
      steps: [
        'Hai chất cùng CTPT nên có phân tử khối bằng nhau.',
        'n-Pentane ít phân nhánh, diện tích tiếp xúc lớn hơn.'
      ],
      answer: 'n-Pentane thường có nhiệt độ sôi cao hơn.'
    },
    checks: [
      {
        question: 'Vì sao alkane hầu như không tan trong nước?',
        options: [
          'Alkane là ion.',
          'Alkane kém phân cực còn nước phân cực.',
          'Alkane luôn ở thể rắn.',
          'Alkane phản ứng ngay với nước.'
        ],
        correctAnswer: 'B',
        explanation: 'Tương tác alkane–nước không bù được mạng liên kết hydrogen của nước.'
      },
      {
        question: 'Trong các đồng phân alkane cùng CTPT, phân nhánh nhiều thường làm nhiệt độ sôi thế nào?',
        options: ['Tăng mạnh', 'Không đổi tuyệt đối', 'Giảm', 'Luôn bằng 0°C'],
        correctAnswer: 'C',
        explanation: 'Phân tử gọn hơn làm giảm diện tích tiếp xúc và lực phân tán hiệu dụng.'
      }
    ]
  },
  {
    id: 'chem11-qt48',
    principle:
      'Phản ứng thế halogen của alkane cần ánh sáng hoặc nhiệt để khơi mào. Cracking bẻ mạch tạo các hydrocarbon nhỏ hơn; reforming chủ yếu sắp xếp khung. Khi đốt, thiếu oxygen làm xuất hiện CO hoặc muội than nên bài toán môi trường phải xét cả mức độ cháy hoàn toàn.',
    method: [
      'Nhận diện phản ứng thế, cracking, reforming hay cháy.',
      'Cân bằng nguyên tố C, H và halogen/oxygen.',
      'Với bài môi trường, liên hệ điều kiện cháy và biện pháp giảm phát thải.'
    ],
    example: {
      problem: 'Cân bằng phản ứng cháy hoàn toàn propane.',
      steps: [
        'Ba carbon tạo 3CO₂; tám hydrogen tạo 4H₂O.',
        'Vế phải có 10 nguyên tử O nên cần 5O₂.'
      ],
      answer: 'C₃H₈ + 5O₂ → 3CO₂ + 4H₂O.'
    },
    checks: [
      {
        question: 'Điều kiện thường dùng cho phản ứng thế bromine của alkane là gì?',
        options: ['Ánh sáng hoặc đun nóng', 'Chỉ nước lạnh', 'Không cần điều kiện', 'Acid mạnh trong tối'],
        correctAnswer: 'A',
        explanation: 'Năng lượng ánh sáng/nhiệt giúp khơi mào phản ứng gốc tự do.'
      },
      {
        question: 'Cracking alkane thường tạo sản phẩm nào?',
        options: [
          'Chỉ CO₂ và H₂O.',
          'Hydrocarbon nhỏ hơn, thường gồm alkane và alkene.',
          'Chỉ kim loại.',
          'Chỉ một alkane lớn hơn.'
        ],
        correctAnswer: 'B',
        explanation: 'Cracking bẻ liên kết C–C của phân tử lớn.'
      }
    ]
  },
  {
    id: 'chem11-qt49',
    principle:
      'CₙH₂ₙ và CₙH₂ₙ₋₂ chỉ áp dụng tương ứng cho alkene một nối đôi và alkyne một nối ba, mạch hở. Khi gọi tên, mạch chính phải chứa liên kết bội và được đánh số để vị trí liên kết bội nhỏ nhất trước khi xét vị trí nhánh.',
    method: [
      'Xác định loại và số liên kết bội.',
      'Chọn mạch dài nhất có chứa liên kết bội.',
      'Đánh số từ đầu gần liên kết bội rồi gọi tên với đuôi -ene hoặc -yne.'
    ],
    example: {
      problem: 'Gọi tên CH₃–CH=CH–CH₃.',
      steps: [
        'Mạch chính có 4 carbon và một liên kết đôi.',
        'Liên kết đôi bắt đầu ở carbon 2 từ cả hai phía.'
      ],
      answer: 'Tên là but-2-ene.'
    },
    checks: [
      {
        question: 'Công thức chung của alkene mạch hở có một C=C là gì?',
        options: ['CₙH₂ₙ₊₂', 'CₙH₂ₙ', 'CₙH₂ₙ₋₂', 'CₙH₂ₙ₋₆'],
        correctAnswer: 'B',
        explanation: 'Một liên kết đôi làm giảm hai H so với alkane tương ứng.'
      },
      {
        question: 'Khi đánh số mạch hydrocarbon không no, yếu tố nào được ưu tiên?',
        options: ['Vị trí liên kết bội nhỏ nhất', 'Vị trí nhánh lớn nhất', 'Hướng viết trái sang phải', 'Số carbon nhỏ nhất'],
        correctAnswer: 'A',
        explanation: 'Liên kết bội thuộc đặc trưng chính của tên và được ưu tiên chỉ số.'
      }
    ]
  },
  {
    id: 'chem11-qt50',
    principle:
      'Liên kết đôi hạn chế quay nên có thể tạo đồng phân hình học. Điều kiện cần là mỗi carbon của C=C phải gắn với hai nhóm khác nhau; nếu một carbon gắn hai nhóm giống nhau thì không có cis–trans. Liên kết ba có hình học thẳng và không có cis–trans.',
    method: [
      'Khoanh hai carbon của liên kết đôi.',
      'So sánh hai nhóm gắn trên từng carbon.',
      'Nếu cả hai carbon đều có hai nhóm khác nhau, mới xét cách sắp xếp cis/trans.'
    ],
    example: {
      problem: 'Xác định but-2-ene có đồng phân hình học không.',
      steps: [
        'Mỗi carbon của C=C gắn một H và một CH₃.',
        'Hai nhóm giống nhau có thể ở cùng phía hoặc khác phía.'
      ],
      answer: 'But-2-ene có cis-but-2-ene và trans-but-2-ene.'
    },
    checks: [
      {
        question: 'Chất nào có khả năng có đồng phân cis–trans?',
        options: ['Ethene', 'Propene', 'But-1-ene', 'But-2-ene'],
        correctAnswer: 'D',
        explanation: 'Mỗi carbon nối đôi của but-2-ene gắn hai nhóm khác nhau.'
      },
      {
        question: 'Hình học quanh liên kết ba C≡C gần đúng là gì?',
        options: ['Tứ diện', 'Tam giác phẳng', 'Thẳng', 'Vuông phẳng'],
        correctAnswer: 'C',
        explanation: 'Hai carbon sp của liên kết ba tạo góc gần 180°.'
      }
    ]
  },
  {
    id: 'chem11-qt51',
    principle:
      'Phản ứng cộng làm đứt liên kết pi nhưng giữ liên kết sigma của khung carbon. Với alkene bất đối xứng trong điều kiện chuẩn, Markovnikov dự đoán H vào carbon đang có nhiều H hơn và phần còn lại vào carbon bậc cao hơn. Phải xác định rõ tác chất và điều kiện trước khi dùng quy tắc.',
    method: [
      'Xác định liên kết pi và số đương lượng tác chất.',
      'Với alkene bất đối xứng, đánh dấu số H trên hai carbon nối đôi.',
      'Áp dụng Markovnikov trong phạm vi chuẩn rồi kiểm tra cấu tạo sản phẩm.'
    ],
    example: {
      problem: 'Dự đoán sản phẩm chính khi propene cộng HBr.',
      steps: [
        'H cộng vào carbon đầu mạch đang có nhiều H hơn.',
        'Br gắn vào carbon giữa.'
      ],
      answer: 'Sản phẩm chính là 2-bromopropane.'
    },
    checks: [
      {
        question: 'Hiện tượng khi ethylene phản ứng với dung dịch bromine là gì?',
        options: ['Xuất hiện kết tủa trắng', 'Màu bromine nhạt/mất', 'Tạo khí H₂', 'Không có thay đổi'],
        correctAnswer: 'B',
        explanation: 'Br₂ cộng vào liên kết C=C và bị tiêu thụ.'
      },
      {
        question: 'Theo Markovnikov, propene cộng HCl chủ yếu tạo chất nào?',
        options: ['1-chloropropane', '2-chloropropane', 'Propane', 'Propan-1-ol'],
        correctAnswer: 'B',
        explanation: 'Cl gắn vào carbon bậc cao hơn của liên kết đôi.'
      }
    ]
  },
  {
    id: 'chem11-qt52',
    principle:
      'Trùng hợp alkene mở liên kết pi và nối nhiều monomer thành mạch polymer, không làm mất nguyên tử. Alk-1-yne có H linh động ở đầu nối ba nên tạo acetylide bạc trong môi trường ammonia. Phản ứng KMnO₄ là phép thử liên kết bội nhưng cần mô tả đúng điều kiện và hiện tượng.',
    method: [
      'Với trùng hợp, mở C=C và viết mắt xích trong ngoặc.',
      'Với AgNO₃/NH₃, kiểm tra có nhóm ≡C–H hay không.',
      'Với KMnO₄, đối chiếu sự mất màu và sản phẩm theo phạm vi điều kiện.'
    ],
    example: {
      problem: 'Viết mắt xích polymer tạo từ ethylene.',
      steps: [
        'Mở liên kết pi của CH₂=CH₂.',
        'Mỗi monomer tạo đoạn –CH₂–CH₂– trong mạch.'
      ],
      answer: 'Polyethylene có mắt xích [–CH₂–CH₂–]ₙ.'
    },
    checks: [
      {
        question: 'Chất nào phản ứng với AgNO₃/NH₃ tạo kết tủa acetylide?',
        options: ['Ethane', 'Ethylene', 'Ethyne', 'Benzene'],
        correctAnswer: 'C',
        explanation: 'Ethyne là alk-1-yne có hydrogen gắn trực tiếp vào carbon nối ba.'
      },
      {
        question: 'Monomer của polyethylene là gì?',
        options: ['CH₄', 'CH₂=CH₂', 'HC≡CH', 'C₆H₆'],
        correctAnswer: 'B',
        explanation: 'Ethylene mở liên kết đôi để tạo mạch polyethylene.'
      }
    ]
  },
  {
    id: 'chem11-qt53',
    principle:
      'Ethylene được điều chế trong phòng thí nghiệm bằng tách nước ethanol; acetylene được tạo từ calcium carbide và nước. Hỗn hợp acetylene–không khí có thể nổ nên phải đuổi không khí khỏi dụng cụ trước khi đốt. Không dùng hiện tượng cháy làm phép thử duy nhất để phân biệt khí.',
    method: [
      'Chọn tuyến điều chế phù hợp và viết phương trình.',
      'Xác định tạp khí/nguy cơ rồi bố trí thu khí an toàn.',
      'Dùng phản ứng đặc trưng với bromine hoặc KMnO₄ để kiểm chứng liên kết bội.'
    ],
    example: {
      problem: 'Điều chế acetylene từ CaC₂ và thử tính không no.',
      steps: [
        'Cho CaC₂ tác dụng từ từ với nước tạo C₂H₂.',
        'Dẫn khí qua dung dịch bromine; màu bromine giảm do phản ứng cộng.'
      ],
      answer: 'CaC₂ + 2H₂O → C₂H₂ + Ca(OH)₂.'
    },
    checks: [
      {
        question: 'Sản phẩm khí khi CaC₂ tác dụng với nước là gì?',
        options: ['Ethane', 'Ethylene', 'Acetylene', 'Methane'],
        correctAnswer: 'C',
        explanation: 'Calcium carbide thủy phân tạo C₂H₂.'
      },
      {
        question: 'Vì sao phải đuổi không khí trước khi đốt acetylene mới điều chế?',
        options: [
          'Để tăng độ tan.',
          'Để tránh hỗn hợp khí nổ.',
          'Để tạo kết tủa.',
          'Để acetylene hóa lỏng.'
        ],
        correctAnswer: 'B',
        explanation: 'Acetylene trộn với oxygen/không khí trong giới hạn thích hợp có nguy cơ cháy nổ.'
      }
    ]
  },
  {
    id: 'chem11-qt54',
    principle:
      'Arene phải chứa ít nhất một vòng benzene. Công thức CₙH₂ₙ₋₆ chỉ áp dụng cho dãy đồng đẳng benzene một vòng phù hợp, không dùng cho mọi arene. Với benzene hai nhóm thế, o-, m-, p- tương ứng các vị trí 1,2; 1,3; 1,4.',
    method: [
      'Nhận diện vòng benzene trong cấu tạo.',
      'Chọn tên gốc benzene hoặc tên thường phù hợp.',
      'Với hai nhóm thế, xác định vị trí tương đối và dùng số hoặc o/m/p.'
    ],
    example: {
      problem: 'Gọi tên C₆H₄(CH₃)₂ có hai nhóm methyl ở vị trí 1,4.',
      steps: [
        'Hợp chất có vòng benzene và hai nhóm methyl.',
        'Vị trí 1,4 tương ứng para.'
      ],
      answer: 'Tên là 1,4-dimethylbenzene hoặc p-xylene.'
    },
    checks: [
      {
        question: 'Kí hiệu meta trong benzene hai nhóm thế tương ứng vị trí nào?',
        options: ['1,1', '1,2', '1,3', '1,4'],
        correctAnswer: 'C',
        explanation: 'o = 1,2; m = 1,3; p = 1,4.'
      },
      {
        question: 'Tên thường của C₆H₅CH₃ là gì?',
        options: ['Styrene', 'Toluene', 'Xylene', 'Naphthalene'],
        correctAnswer: 'B',
        explanation: 'Methylbenzene có tên thường là toluene.'
      }
    ]
  },
  {
    id: 'chem11-qt55',
    principle:
      'Sáu electron pi của benzene liên hợp và phân bố trên toàn vòng nên sáu liên kết C–C tương đương, có độ dài trung gian giữa đơn và đôi. Cấu trúc này giải thích benzene ưu tiên phản ứng thế hơn cộng ở điều kiện thường. Tính ít phân cực giải thích độ tan thấp trong nước.',
    method: [
      'Mô tả vòng phẳng, carbon sp² và hệ pi liên hợp.',
      'Liên hệ cấu trúc cộng hưởng với độ bền và kiểu phản ứng.',
      'Dùng độ phân cực, kích thước để giải thích tính chất vật lí và an toàn.'
    ],
    example: {
      problem: 'Giải thích vì sao không xem benzene là cyclohexatriene với ba liên kết đôi cố định.',
      steps: [
        'Nếu liên kết cố định, độ dài C–C phải xen kẽ.',
        'Thực nghiệm cho thấy sáu liên kết C–C tương đương do electron pi delocalized.'
      ],
      answer: 'Benzene có hệ pi liên hợp phân bố trên toàn vòng.'
    },
    checks: [
      {
        question: 'Hình học của vòng benzene gần đúng là gì?',
        options: ['Lục giác phẳng', 'Lục giác gấp khúc', 'Tứ diện', 'Mạch thẳng'],
        correctAnswer: 'A',
        explanation: 'Các carbon sp² nằm gần trong một mặt phẳng với góc khoảng 120°.'
      },
      {
        question: 'Nhận định nào đúng về sáu liên kết C–C trong benzene?',
        options: [
          'Ba đơn, ba đôi cố định.',
          'Sáu liên kết tương đương.',
          'Đều là liên kết đơn.',
          'Đều là liên kết ba.'
        ],
        correctAnswer: 'B',
        explanation: 'Hệ electron pi liên hợp làm các liên kết C–C tương đương.'
      }
    ]
  },
  {
    id: 'chem11-qt56',
    principle:
      'Thế electrophile giữ hệ vòng benzene và thay H bằng Br, NO₂ hoặc nhóm khác. Bromine hóa benzene cần xúc tác Lewis acid; nitro hóa dùng hỗn hợp HNO₃ đặc/H₂SO₄ đặc. Nhóm methyl hoạt hóa vòng và định hướng thế tiếp theo ưu tiên ortho, para trong phạm vi bài học.',
    method: [
      'Xác định chất nền benzene hay alkylbenzene.',
      'Chọn tác chất, xúc tác và điều kiện thế.',
      'Với toluene, ưu tiên sản phẩm ortho/para và cân bằng phương trình.'
    ],
    example: {
      problem: 'Viết phương trình bromine hóa benzene.',
      steps: [
        'Dùng Br₂ và xúc tác FeBr₃.',
        'Một H trên vòng bị thay bởi Br, tạo HBr.'
      ],
      answer: 'C₆H₆ + Br₂ → C₆H₅Br + HBr.'
    },
    checks: [
      {
        question: 'Bromine hóa benzene thường cần xúc tác nào?',
        options: ['FeBr₃', 'NaOH', 'Ni', 'AgNO₃'],
        correctAnswer: 'A',
        explanation: 'FeBr₃ hoạt hóa Br₂ cho phản ứng thế trên vòng.'
      },
      {
        question: 'Nhóm CH₃ trên vòng benzene định hướng thế tiếp theo chủ yếu vào đâu?',
        options: ['Chỉ meta', 'Ortho và para', 'Chỉ carbon mang CH₃', 'Không có định hướng'],
        correctAnswer: 'B',
        explanation: 'Methyl là nhóm hoạt hóa và định hướng ortho/para trong phạm vi chương trình.'
      }
    ]
  },
  {
    id: 'chem11-qt57',
    principle:
      'Benzene chỉ cộng trong điều kiện mạnh vì phản ứng làm mất tính thơm. Với alkylbenzene có hydrogen ở vị trí benzylic, KMnO₄ nóng có thể oxi hóa mạch nhánh về nhóm carboxyl; benzene không cho cùng hiện tượng trong điều kiện đó.',
    method: [
      'Phân biệt phản ứng trên vòng với phản ứng ở mạch nhánh.',
      'Với cộng, xác định số mol H₂ hoặc Cl₂ cần cho toàn vòng.',
      'Với oxi hóa mạch nhánh, kiểm tra có carbon benzylic mang H.'
    ],
    example: {
      problem: 'Dự đoán sản phẩm hữu cơ khi oxi hóa toluene mạnh bằng KMnO₄ nóng rồi acid hóa.',
      steps: [
        'Nhóm methyl có hydrogen benzylic.',
        'Mạch nhánh bị oxi hóa thành nhóm carboxyl.'
      ],
      answer: 'Sản phẩm là benzoic acid C₆H₅COOH.'
    },
    checks: [
      {
        question: 'Benzene cộng hoàn toàn bao nhiêu mol H₂ trên một mol benzene?',
        options: ['1', '2', '3', '6'],
        correctAnswer: 'C',
        explanation: 'Ba liên kết pi tương đương được hydrogen hóa tạo cyclohexane.'
      },
      {
        question: 'KMnO₄ nóng oxi hóa nhóm methyl của toluene chủ yếu thành nhóm nào?',
        options: ['–OH', '–CHO', '–COOH', '–NH₂'],
        correctAnswer: 'C',
        explanation: 'Mạch nhánh benzylic bị oxi hóa sâu thành carboxyl.'
      }
    ]
  },
  {
    id: 'chem11-qt58',
    principle:
      'Benzene và nhiều arene dễ cháy, độc khi hít hoặc tiếp xúc lâu dài. Điều chế và phản ứng nitro hóa/halogen hóa cần hệ kín, kiểm soát nhiệt và tủ hút. Quản lí an toàn phải theo thứ tự ưu tiên: thay thế chất nguy hiểm, giảm lượng, kín hóa, thông gió, PPE rồi xử lí chất thải.',
    method: [
      'Nhận diện nguy cơ cháy, độc, hơi dung môi và phản ứng tỏa nhiệt.',
      'Chọn biện pháp kiểm soát theo thứ bậc, không chỉ dựa vào PPE.',
      'Thu gom chất thải arene riêng, không đổ vào cống hoặc đốt tùy tiện.'
    ],
    example: {
      problem: 'Đề xuất cách thao tác khi dùng lượng nhỏ benzene trong phản ứng.',
      steps: [
        'Ưu tiên thay bằng dung môi ít độc hơn nếu quy trình cho phép.',
        'Nếu phải dùng, thao tác trong tủ hút, hệ kín, lượng nhỏ và PPE phù hợp.'
      ],
      answer: 'Kiểm soát hơi và thu gom chất thải theo quy trình hóa chất nguy hại.'
    },
    checks: [
      {
        question: 'Biện pháp nào nên được ưu tiên hơn chỉ đeo PPE khi làm việc với benzene?',
        options: [
          'Thay thế bằng chất ít nguy hiểm và dùng hệ kín.',
          'Ngửi để kiểm tra rò rỉ.',
          'Đổ chất thải vào cống.',
          'Làm việc gần nguồn lửa.'
        ],
        correctAnswer: 'A',
        explanation: 'Loại bỏ/thay thế và kiểm soát kỹ thuật hiệu quả hơn phụ thuộc hoàn toàn vào PPE.'
      },
      {
        question: 'Nguồn công nghiệp quan trọng của BTX là gì?',
        options: ['Nước biển', 'Dầu mỏ và reforming', 'Đá vôi', 'Phân bón nitrate'],
        correctAnswer: 'B',
        explanation: 'Benzene, toluene, xylene được thu từ các quá trình lọc–hóa dầu và reforming.'
      }
    ]
  }
];

export const chem11HydrocarbonsTheoryResources =
  buildChemistryTheoryResourceMap(specs);
