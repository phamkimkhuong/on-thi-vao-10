import {
  buildChemistryTheoryResourceMap,
  type ChemistryTheoryResourceSpec
} from '../../theoryResourceBuilder';

const specs: ChemistryTheoryResourceSpec[] = [
  {
    id: 'chem11-qt59',
    principle:
      'Dẫn xuất halogen được phân loại theo loại halogen, số nguyên tử halogen và loại carbon mang halogen. Khi gọi tên thay thế, halogen được xem là nhóm thế; chọn mạch carbon chính và bộ chỉ số nhỏ nhất. Vinyl chloride có Cl gắn trực tiếp vào carbon sp² nên không được đồng nhất với ethyl chloride.',
    method: [
      'Xác định khung hydrocarbon và vị trí từng halogen.',
      'Chọn, đánh số mạch chính để bộ vị trí nhóm thế nhỏ nhất.',
      'Gọi fluoro-/chloro-/bromo-/iodo- theo alphabet rồi tên hydrocarbon.'
    ],
    example: {
      problem: 'Gọi tên CH₃–CHCl–CH₃.',
      steps: [
        'Mạch chính có ba carbon: propane.',
        'Cl gắn ở carbon 2.'
      ],
      answer: 'Tên là 2-chloropropane.'
    },
    checks: [
      {
        question: 'Tên thay thế của CH₃CH₂Cl là gì?',
        options: ['Chloromethane', 'Chloroethane', '1-chloropropane', 'Vinyl chloride'],
        correctAnswer: 'B',
        explanation: 'Mạch chính ethane có một nhóm chloro.'
      },
      {
        question: 'Công thức của vinyl chloride là gì?',
        options: ['CH₃Cl', 'CH₃CH₂Cl', 'CH₂=CHCl', 'C₆H₅Cl'],
        correctAnswer: 'C',
        explanation: 'Vinyl chloride là chloroethene, monomer của PVC.'
      }
    ]
  },
  {
    id: 'chem11-qt60',
    principle:
      'Đồng phân dẫn xuất halogen có thể khác khung carbon hoặc vị trí X. Khi so sánh tính chất vật lí, không dùng một quy tắc đơn lẻ: khối lượng phân tử, khả năng phân cực hóa, moment lưỡng cực và hình dạng đều ảnh hưởng. Nhiều chất ít tan trong nước vì không tạo tương tác đủ mạnh với nước.',
    method: [
      'Giữ nguyên CTPT rồi liệt kê các khung carbon.',
      'Đặt halogen vào các vị trí không tương đương và loại công thức trùng.',
      'So sánh tính chất bằng tổng hợp khối lượng, phân cực và hình dạng.'
    ],
    example: {
      problem: 'Liệt kê đồng phân cấu tạo của C₃H₇Cl.',
      steps: [
        'Khung propane chỉ có vị trí đầu mạch và giữa mạch không tương đương.',
        'Đặt Cl lần lượt ở C1 và C2.'
      ],
      answer: 'Có 1-chloropropane và 2-chloropropane.'
    },
    checks: [
      {
        question: 'C₃H₇Cl có bao nhiêu đồng phân cấu tạo?',
        options: ['1', '2', '3', '4'],
        correctAnswer: 'B',
        explanation: 'Hai vị trí không tương đương là carbon đầu mạch và carbon giữa.'
      },
      {
        question: 'Nhận định nào đúng về độ tan của nhiều dẫn xuất halogen trong nước?',
        options: [
          'Luôn tan vô hạn.',
          'Thường ít tan vì tương tác với nước không đủ mạnh.',
          'Luôn phản ứng tạo muối.',
          'Chỉ phụ thuộc màu sắc.'
        ],
        correctAnswer: 'B',
        explanation: 'Nhiều dẫn xuất halogen không tạo được mạng tương tác mạnh như liên kết hydrogen với nước.'
      }
    ]
  },
  {
    id: 'chem11-qt61',
    principle:
      'Phản ứng thế R–X bằng OH⁻ phụ thuộc cấu tạo R–X, dung môi, nhiệt độ và loại halogen; mô hình lớp 11 dùng dung dịch kiềm và điều kiện phù hợp. Phép thử AgNO₃ được tiến hành trên ion halide sau thủy phân, thường cần acid hóa bằng HNO₃ để loại OH⁻ dư.',
    method: [
      'Viết phản ứng thủy phân tạo alcohol và X⁻.',
      'Tách phần nước chứa halide, acid hóa thích hợp nếu cần.',
      'Thêm AgNO₃ và nhận diện AgCl trắng, AgBr vàng nhạt, AgI vàng.'
    ],
    example: {
      problem: 'Kiểm chứng Br⁻ tạo ra khi thủy phân bromoethane.',
      steps: [
        'Đun bromoethane với dung dịch kiềm để tạo ethanol và Br⁻.',
        'Acid hóa phần nước bằng HNO₃ rồi thêm AgNO₃.'
      ],
      answer: 'Xuất hiện kết tủa AgBr màu vàng nhạt.'
    },
    checks: [
      {
        question: 'Sản phẩm hữu cơ khi C₂H₅Br thủy phân bằng OH⁻ là gì?',
        options: ['Ethane', 'Ethylene', 'Ethanol', 'Ethanal'],
        correctAnswer: 'C',
        explanation: 'OH thay Br tạo C₂H₅OH.'
      },
      {
        question: 'Vì sao acid hóa bằng HNO₃ trước khi thêm AgNO₃?',
        options: [
          'Để tạo thêm halide.',
          'Để loại OH⁻ dư gây kết tủa nhiễu.',
          'Để hòa tan mọi AgX.',
          'Để tạo khí H₂.'
        ],
        correctAnswer: 'B',
        explanation: 'OH⁻ dư có thể phản ứng với Ag⁺ và làm sai hiện tượng nhận biết.'
      }
    ]
  },
  {
    id: 'chem11-qt62',
    principle:
      'Tách HX cần carbon beta có hydrogen. Carbon mang X là alpha; nối đôi hình thành giữa alpha và beta. Khi có nhiều sản phẩm trong trường hợp đơn giản, Zaisev dự đoán alkene có nối đôi thế nhiều hơn là sản phẩm chính, nhưng trước hết phải kiểm tra sản phẩm có thể hình thành.',
    method: [
      'Đánh dấu carbon alpha mang halogen và các carbon beta kề nó.',
      'Kiểm tra H beta rồi tạo C=C với từng vị trí hợp lệ.',
      'So sánh mức độ thế của nối đôi để chọn sản phẩm chính.'
    ],
    example: {
      problem: 'Tách HBr từ 2-bromobutane bằng KOH trong alcohol, đun nóng.',
      steps: [
        'Có thể lấy H beta ở C1 hoặc C3, tạo but-1-ene và but-2-ene.',
        'But-2-ene có nối đôi thế nhiều hơn.'
      ],
      answer: 'But-2-ene là sản phẩm chính theo Zaisev.'
    },
    checks: [
      {
        question: 'Điều kiện thường ưu tiên phản ứng tách HX là gì?',
        options: ['KOH trong alcohol, đun nóng', 'Nước lạnh', 'AgNO₃ trong tối', 'H₂/Ni'],
        correctAnswer: 'A',
        explanation: 'Base trong alcohol và nhiệt độ cao thuận lợi cho phản ứng loại.'
      },
      {
        question: 'Điều kiện cấu tạo bắt buộc để tách HX tạo alkene là gì?',
        options: [
          'Carbon beta phải có H.',
          'Phải có vòng benzene.',
          'Phải có hai halogen.',
          'Carbon alpha không mang X.'
        ],
        correctAnswer: 'A',
        explanation: 'H beta và X ở carbon alpha cùng bị loại để hình thành C=C.'
      }
    ]
  },
  {
    id: 'chem11-qt63',
    principle:
      'Ứng dụng dẫn xuất halogen rất rộng nhưng nguy cơ cũng khác nhau: vinyl chloride là monomer độc cần hệ kín; nhiều dung môi halogen có vấn đề sức khỏe; CFC bền có thể giải phóng gốc chlorine ở tầng bình lưu và xúc tác phá hủy ozone. Thay thế môi chất phải xét đồng thời ozone, khí hậu, cháy và hiệu suất.',
    method: [
      'Xác định chất là monomer, dung môi, môi chất lạnh hay dược chất.',
      'Nối cấu tạo với nguy cơ sức khỏe và môi trường.',
      'Chọn biện pháp giảm rò rỉ, thu hồi, thay thế và xử lí cuối vòng đời.'
    ],
    example: {
      problem: 'Giải thích vì sao CFC ở tầng thấp khá bền nhưng gây hại tầng ozone.',
      steps: [
        'Độ bền giúp CFC tồn tại đủ lâu để đi lên tầng bình lưu.',
        'UV phá liên kết C–Cl, tạo gốc chlorine xúc tác phân hủy ozone.'
      ],
      answer: 'Tính bền làm tăng thời gian sống; chlorine hoạt động gây suy giảm ozone.'
    },
    checks: [
      {
        question: 'Polymer tạo từ vinyl chloride là gì?',
        options: ['PE', 'PVC', 'PS', 'PTFE'],
        correctAnswer: 'B',
        explanation: 'CH₂=CHCl trùng hợp tạo poly(vinyl chloride).'
      },
      {
        question: 'Tác nhân trực tiếp xúc tác phá hủy ozone từ CFC là gì?',
        options: ['Gốc chlorine', 'Ion sodium', 'Khí nitrogen', 'Nước lỏng'],
        correctAnswer: 'A',
        explanation: 'UV giải phóng chlorine radical tham gia chu trình phá hủy O₃.'
      }
    ]
  },
  {
    id: 'chem11-qt64',
    principle:
      'Alcohol có –OH gắn với carbon no sp³. Bậc alcohol là bậc của carbon mang –OH, không phải số nhóm –OH. Khi gọi tên, mạch chính phải chứa carbon mang –OH và được đánh số để –OH có chỉ số nhỏ nhất trước các nhánh.',
    method: [
      'Xác định nhóm –OH có gắn với carbon no hay không.',
      'Chọn mạch dài nhất chứa carbon mang –OH.',
      'Đánh số ưu tiên –OH, gọi tên nhánh rồi tên alkan-ol.'
    ],
    example: {
      problem: 'Gọi tên và xác định bậc của CH₃–CH(OH)–CH₃.',
      steps: [
        'Mạch chính propane, –OH ở carbon 2.',
        'Carbon mang –OH liên kết với hai carbon khác.'
      ],
      answer: 'Propan-2-ol, alcohol bậc II.'
    },
    checks: [
      {
        question: 'Alcohol bậc II có carbon mang –OH liên kết với bao nhiêu carbon khác?',
        options: ['0', '1', '2', '3'],
        correctAnswer: 'C',
        explanation: 'Bậc của alcohol theo bậc của carbon mang nhóm hydroxy.'
      },
      {
        question: 'Chất nào không thuộc alcohol?',
        options: ['CH₃OH', 'C₂H₅OH', 'C₆H₅OH', 'CH₃CH(OH)CH₃'],
        correctAnswer: 'C',
        explanation: 'Trong phenol, –OH gắn trực tiếp với carbon vòng benzene.'
      }
    ]
  },
  {
    id: 'chem11-qt65',
    principle:
      'Liên kết hydrogen liên phân tử làm alcohol có nhiệt độ sôi cao hơn hydrocarbon hoặc ether có kích thước tương đương. Độ tan trong nước là cạnh tranh giữa phần –OH ưa nước và mạch hydrocarbon kị nước; khi mạch dài lên, ảnh hưởng kị nước tăng.',
    method: [
      'Xác định số nhóm –OH và khả năng tạo liên kết hydrogen.',
      'So sánh kích thước, hình dạng và phần hydrocarbon.',
      'Giải thích đồng thời nhiệt độ sôi và độ tan, không dùng riêng phân tử khối.'
    ],
    example: {
      problem: 'So sánh độ tan trong nước của methanol và butan-1-ol.',
      steps: [
        'Cả hai có một –OH tạo liên kết hydrogen với nước.',
        'Butan-1-ol có mạch hydrocarbon dài hơn nên phần kị nước lớn hơn.'
      ],
      answer: 'Methanol tan tốt hơn butan-1-ol.'
    },
    checks: [
      {
        question: 'Yếu tố làm ethanol có nhiệt độ sôi cao hơn ethane là gì?',
        options: ['Liên kết ion', 'Liên kết hydrogen giữa các phân tử ethanol', 'Ethanol là kim loại', 'Ethane phân cực mạnh hơn'],
        correctAnswer: 'B',
        explanation: 'Nhóm –OH tạo tương tác liên phân tử mạnh.'
      },
      {
        question: 'Trong dãy alcohol đơn chức, độ tan trong nước thường thay đổi thế nào khi mạch carbon dài lên?',
        options: ['Tăng', 'Giảm', 'Không đổi', 'Luôn bằng 0'],
        correctAnswer: 'B',
        explanation: 'Phần hydrocarbon kị nước ngày càng chiếm ưu thế.'
      }
    ]
  },
  {
    id: 'chem11-qt66',
    principle:
      'Na phản ứng với hydrogen của nhóm O–H chứ không thế hydrogen trên carbon. Mỗi hai mol nhóm –OH giải phóng một mol H₂. Phức xanh lam đậm với Cu(OH)₂ cần polyalcohol có các nhóm –OH ở carbon kề nhau để phối trí phù hợp.',
    method: [
      'Đếm tổng số mol nhóm –OH khi tính H₂ với sodium.',
      'Viết alkoxide tương ứng và cân bằng hệ số 2.',
      'Với Cu(OH)₂, kiểm tra số lượng và vị trí tương đối của các –OH.'
    ],
    example: {
      problem: 'Cho 0,20 mol ethanol phản ứng hoàn toàn với Na dư. Tính H₂.',
      steps: [
        'Mỗi mol ethanol có một mol nhóm –OH.',
        'Hai mol –OH tạo một mol H₂.'
      ],
      answer: 'Thu 0,10 mol H₂.'
    },
    checks: [
      {
        question: 'Một mol glycerol phản ứng hoàn toàn với Na dư tạo tối đa bao nhiêu mol H₂?',
        options: ['0,5', '1,0', '1,5', '3,0'],
        correctAnswer: 'C',
        explanation: 'Một mol glycerol có ba mol nhóm –OH; n(H₂)=3/2 mol.'
      },
      {
        question: 'Chất nào hòa tan Cu(OH)₂ mới tạo dung dịch xanh lam đậm?',
        options: ['Ethanol', 'Glycerol', 'Ethane', 'Chloroethane'],
        correctAnswer: 'B',
        explanation: 'Glycerol có nhiều nhóm –OH kề nhau tạo phức với Cu²⁺.'
      }
    ]
  },
  {
    id: 'chem11-qt67',
    principle:
      'Tách nước nội phân tử cần carbon beta có H và tạo alkene; tách nước liên phân tử nối hai gốc alkyl qua oxygen tạo ether. Cấu tạo alcohol và nhiệt độ ảnh hưởng hướng phản ứng. Methanol không thể tạo alkene vì không có carbon beta.',
    method: [
      'Xác định carbon mang –OH và carbon beta có H.',
      'Phân biệt điều kiện hướng tới tách nội hay liên phân tử.',
      'Liệt kê alkene có thể có và dùng Zaisev cho trường hợp đơn giản.'
    ],
    example: {
      problem: 'Tách nước butan-2-ol trong điều kiện tạo alkene.',
      steps: [
        'Có thể loại H ở hai carbon beta, tạo but-1-ene và but-2-ene.',
        'But-2-ene có nối đôi thế nhiều hơn.'
      ],
      answer: 'But-2-ene là sản phẩm chính.'
    },
    checks: [
      {
        question: 'Vì sao methanol không tách nước nội phân tử tạo alkene?',
        options: ['Không có oxygen', 'Không có carbon beta', 'Không có hydrogen', 'Là phenol'],
        correctAnswer: 'B',
        explanation: 'Tạo C=C cần carbon kề carbon mang –OH.'
      },
      {
        question: 'Hai phân tử ethanol tách một H₂O có thể tạo chất nào?',
        options: ['Diethyl ether', 'Ethylene glycol', 'Ethanal', 'Acetic acid'],
        correctAnswer: 'A',
        explanation: 'Tách nước liên phân tử tạo C₂H₅–O–C₂H₅.'
      }
    ]
  },
  {
    id: 'chem11-qt68',
    principle:
      'CuO oxi hóa alcohol bậc I thành aldehyde và bậc II thành ketone trong mô hình lớp 11; alcohol bậc III không có H trên carbon mang –OH nên không phản ứng theo hướng này. Khi cháy hoàn toàn, bảo toàn C, H rồi cân bằng O.',
    method: [
      'Xác định bậc alcohol bằng carbon mang –OH.',
      'Chọn aldehyde, ketone hoặc không phản ứng theo mô hình CuO.',
      'Với cháy, cân bằng C, H trước và O cuối cùng.'
    ],
    example: {
      problem: 'Cho propan-2-ol đi qua CuO nung nóng.',
      steps: [
        'Propan-2-ol là alcohol bậc II.',
        'Bậc II bị oxi hóa thành ketone, CuO bị khử thành Cu.'
      ],
      answer: 'Tạo propanone, Cu và H₂O.'
    },
    checks: [
      {
        question: 'Ethanol tác dụng với CuO nung nóng tạo sản phẩm hữu cơ nào?',
        options: ['Ethanal', 'Ethene', 'Ethanoic acid', 'Ethane'],
        correctAnswer: 'A',
        explanation: 'Ethanol là alcohol bậc I nên bị oxi hóa thành aldehyde.'
      },
      {
        question: 'Alcohol bậc III phản ứng với CuO theo mô hình đơn giản thế nào?',
        options: ['Tạo aldehyde', 'Tạo ketone', 'Không phản ứng theo hướng tách H này', 'Tạo alkene ngay'],
        correctAnswer: 'C',
        explanation: 'Carbon mang –OH không còn H để tạo nhóm carbonyl.'
      }
    ]
  },
  {
    id: 'chem11-qt69',
    principle:
      'Hydrate hóa ethylene và lên men glucose là hai tuyến ethanol khác nhau về nguyên liệu, điều kiện và độ tinh khiết. Methanol không thể thay ethanol trong đồ uống vì độc tính cao. Đánh giá ứng dụng phải kèm nguy cơ cháy, độc và ảnh hưởng thần kinh.',
    method: [
      'Chọn tuyến điều chế theo nguyên liệu ethylene hay carbohydrate.',
      'Viết phương trình và nêu điều kiện/xúc tác.',
      'Phân biệt ứng dụng công nghiệp với sử dụng có nguy cơ sức khỏe.'
    ],
    example: {
      problem: 'Viết phương trình lên men glucose tạo ethanol.',
      steps: [
        'Một glucose có 6 carbon được chia thành hai ethanol và hai CO₂.',
        'Quá trình cần enzyme/men và điều kiện thích hợp.'
      ],
      answer: 'C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂.'
    },
    checks: [
      {
        question: 'Hydrate hóa ethylene tạo sản phẩm nào?',
        options: ['Methanol', 'Ethanol', 'Ethanal', 'Ethanoic acid'],
        correctAnswer: 'B',
        explanation: 'Nước cộng vào C=C của ethylene tạo ethanol.'
      },
      {
        question: 'Nhận định nào đúng về methanol?',
        options: [
          'An toàn dùng trong đồ uống.',
          'Rất độc và có thể gây tổn thương nghiêm trọng.',
          'Không cháy.',
          'Là phenol.'
        ],
        correctAnswer: 'B',
        explanation: 'Methanol và chất chuyển hóa của nó có độc tính cao.'
      }
    ]
  },
  {
    id: 'chem11-qt70',
    principle:
      'Phenol yêu cầu –OH gắn trực tiếp vào carbon sp² của vòng benzene. Nếu có đoạn –CH₂OH thì đó là benzyl alcohol. Cặp electron của oxygen tương tác với hệ pi làm –OH hoạt hóa vòng, định hướng ortho/para và đồng thời làm liên kết O–H phân cực hơn alcohol.',
    method: [
      'Kiểm tra nguyên tử carbon gắn trực tiếp với –OH.',
      'Đánh số carbon mang –OH là 1 và xác định vị trí nhóm thế.',
      'Liên hệ hiệu ứng của –OH với tính acid và phản ứng thế vòng.'
    ],
    example: {
      problem: 'Phân biệt C₆H₅OH và C₆H₅CH₂OH.',
      steps: [
        'Ở C₆H₅OH, O gắn trực tiếp vào carbon vòng.',
        'Ở C₆H₅CH₂OH, –OH gắn vào carbon no của nhóm CH₂.'
      ],
      answer: 'Chất thứ nhất là phenol; chất thứ hai là benzyl alcohol.'
    },
    checks: [
      {
        question: 'Chất nào thuộc phenol?',
        options: ['C₆H₅OH', 'C₆H₅CH₂OH', 'C₂H₅OH', 'CH₃OH'],
        correctAnswer: 'A',
        explanation: 'Nhóm –OH gắn trực tiếp vào vòng benzene.'
      },
      {
        question: 'p-Cresol tương ứng với vị trí methyl nào so với –OH?',
        options: ['1,2', '1,3', '1,4', '1,1'],
        correctAnswer: 'C',
        explanation: 'Para là vị trí đối diện 1,4 trên vòng benzene.'
      }
    ]
  },
  {
    id: 'chem11-qt71',
    principle:
      'Phenol tạo liên kết hydrogen nhưng vòng thơm kị nước làm độ tan trong nước ở nhiệt độ thường hạn chế. Độ tan tăng khi đun nóng. Phenol có thể gây bỏng hóa học và hấp thụ qua da, vì vậy chỉ “rửa sơ” hoặc dựa vào mùi không phải biện pháp an toàn.',
    method: [
      'Đọc dữ liệu nhiệt độ nóng chảy, sôi và độ tan theo nhiệt độ.',
      'Giải thích bằng cạnh tranh giữa –OH ưa nước và vòng thơm kị nước.',
      'Khi xử lí nguy cơ, theo SDS, dùng PPE và quy trình ứng phó phơi nhiễm.'
    ],
    example: {
      problem: 'Giải thích vì sao phenol ít tan trong nước lạnh nhưng tan hơn khi nóng.',
      steps: [
        '–OH tạo liên kết hydrogen với nước nhưng vòng benzene làm giảm tính ưa nước.',
        'Nhiệt độ tăng thường làm tăng độ tan của phenol.'
      ],
      answer: 'Độ tan là kết quả của hai phần cấu trúc và phụ thuộc nhiệt độ.'
    },
    checks: [
      {
        question: 'Phenol tinh khiết ở nhiệt độ dưới khoảng 43°C thường ở trạng thái nào?',
        options: ['Khí', 'Lỏng vô hạn', 'Rắn', 'Plasma'],
        correctAnswer: 'C',
        explanation: 'Nhiệt độ nóng chảy của phenol gần 40,5°C.'
      },
      {
        question: 'Thao tác phù hợp khi làm việc với phenol là gì?',
        options: [
          'Dùng PPE và làm theo SDS.',
          'Chạm tay để kiểm tra.',
          'Ngửi trực tiếp.',
          'Đổ chất thải vào bồn rửa.'
        ],
        correctAnswer: 'A',
        explanation: 'Phenol độc, ăn mòn và có thể hấp thụ qua da.'
      }
    ]
  },
  {
    id: 'chem11-qt72',
    principle:
      'Phenol acid hơn alcohol vì ion phenoxide được ổn định nhờ hệ vòng, nhưng yếu hơn carbonic acid theo cách xử lí phổ thông. Phenol phản ứng với NaOH tạo phenoxide; alcohol thông thường không phản ứng với NaOH. Theo dữ liệu KNTT, phản ứng với Na₂CO₃ tạo NaHCO₃ chứ không giải phóng CO₂.',
    method: [
      'So sánh độ bền base liên hợp phenoxide và alkoxide.',
      'Chọn phản ứng với Na, NaOH hoặc carbonate theo phạm vi bài học.',
      'Dùng hiện tượng hòa tan phenol khi tạo phenoxide để giải thích thí nghiệm.'
    ],
    example: {
      problem: 'Cho NaOH vào hệ phenol ít tan trong nước.',
      steps: [
        'Phenol phản ứng với NaOH tạo sodium phenoxide.',
        'Muối ion tan tốt hơn nên hệ trở nên trong hơn.'
      ],
      answer: 'C₆H₅OH + NaOH → C₆H₅ONa + H₂O.'
    },
    checks: [
      {
        question: 'Chất nào phản ứng với NaOH trong nước?',
        options: ['Ethanol', 'Phenol', 'Ethane', 'Benzene'],
        correctAnswer: 'B',
        explanation: 'Phenol có tính acid đủ để phản ứng với NaOH.'
      },
      {
        question: 'Vì sao phenol acid hơn ethanol?',
        options: [
          'Phenoxide được ổn định bởi hệ vòng.',
          'Phenol là acid mạnh hoàn toàn.',
          'Ethanol không có oxygen.',
          'Phenol là muối ion.'
        ],
        correctAnswer: 'A',
        explanation: 'Điện tích âm của phenoxide được phân bố và ổn định tốt hơn alkoxide.'
      }
    ]
  },
  {
    id: 'chem11-qt73',
    principle:
      'Nhóm –OH hoạt hóa mạnh vòng benzene nên phenol phản ứng nhanh với bromine water ở nhiệt độ thường, không cần FeBr₃, tạo 2,4,6-tribromophenol trắng. Nitro hóa mạnh tạo picric acid; phản ứng dùng acid đặc tỏa nhiệt và phải được kiểm soát nghiêm ngặt.',
    method: [
      'Đánh dấu các vị trí ortho và para so với –OH.',
      'Xác định số mol tác chất cho ba vị trí 2,4,6.',
      'Nêu hiện tượng, sản phẩm và điều kiện an toàn.'
    ],
    example: {
      problem: 'Cho 0,10 mol phenol phản ứng hoàn toàn với Br₂ dư. Tính Br₂ tiêu thụ.',
      steps: [
        'Mỗi phân tử phenol thế ba H ở vị trí 2,4,6.',
        'Tỉ lệ phenol : Br₂ là 1:3.'
      ],
      answer: 'Tiêu thụ 0,30 mol Br₂.'
    },
    checks: [
      {
        question: 'Sản phẩm khi phenol tác dụng bromine water dư là gì?',
        options: ['Bromobenzene', '2,4,6-tribromophenol', 'Cyclohexanol', 'Benzoic acid'],
        correctAnswer: 'B',
        explanation: '–OH hoạt hóa vòng và định hướng thế vào hai ortho cùng para.'
      },
      {
        question: 'Hiện tượng đặc trưng của phản ứng phenol với bromine water là gì?',
        options: [
          'Tạo kết tủa trắng và mất màu bromine.',
          'Tạo khí H₂.',
          'Dung dịch chuyển xanh lam.',
          'Không phản ứng.'
        ],
        correctAnswer: 'A',
        explanation: '2,4,6-Tribromophenol ít tan tạo kết tủa trắng.'
      }
    ]
  },
  {
    id: 'chem11-qt74',
    principle:
      'Quy trình cumene đồng sản xuất phenol và acetone: alkyl hóa benzene tạo cumene, oxi hóa tạo cumene hydroperoxide rồi phân cắt trong môi trường acid. Khi đánh giá ứng dụng phenol phải phân biệt sản phẩm đã kiểm soát với phenol nguyên chất độc và ăn mòn.',
    method: [
      'Sắp xếp đúng các chất trung gian của quy trình cumene.',
      'Nhận diện hai sản phẩm đồng thời phenol và acetone.',
      'Đánh giá ứng dụng kèm nồng độ, kiểm soát phơi nhiễm và xử lí chất thải.'
    ],
    example: {
      problem: 'Nêu sản phẩm chính của bước phân cắt cumene hydroperoxide.',
      steps: [
        'Trung gian peroxide bị phân cắt trong môi trường acid.',
        'Khung aromatic tạo phenol; phần còn lại tạo acetone.'
      ],
      answer: 'Hai sản phẩm chính là phenol và acetone.'
    },
    checks: [
      {
        question: 'Quy trình cumene tạo đồng thời phenol và chất nào?',
        options: ['Methanol', 'Acetone', 'Ethylene', 'Acetic acid'],
        correctAnswer: 'B',
        explanation: 'Cumene hydroperoxide phân cắt tạo phenol và propanone (acetone).'
      },
      {
        question: 'Nhận định nào đúng về ứng dụng phenol?',
        options: [
          'Có ứng dụng nên phenol nguyên chất an toàn tiếp xúc.',
          'Ứng dụng phải đi kèm kiểm soát nồng độ, PPE và chất thải.',
          'Có thể đổ phenol vào cống.',
          'Phenol không gây bỏng.'
        ],
        correctAnswer: 'B',
        explanation: 'Ứng dụng công nghiệp không loại bỏ độc tính và nguy cơ ăn mòn của phenol.'
      }
    ]
  }
];

export const chem11HalogenAlcoholPhenolTheoryResources =
  buildChemistryTheoryResourceMap(specs);
