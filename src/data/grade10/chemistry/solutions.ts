import { Solution } from '@/types';

export const g10ChemistrySolutions: Solution[] = [
  {
    id: 'chem10-s01',
    questionId: 'chem10-q01',
    recognition: 'Áp dụng định luật bảo toàn khối lượng cho phản ứng cháy của Magnesium.',
    detailedSteps: [
      {
        order: 1,
        title: 'Viết phương trình phản ứng',
        explanation: 'Phương trình hóa học phản ứng cháy của Mg:\n$$2\\text{Mg} + \\text{O}_2 \\rightarrow 2\\text{MgO}$$'
      },
      {
        order: 2,
        title: 'Áp dụng Định luật bảo toàn khối lượng',
        explanation: 'Tổng khối lượng chất tham gia phản ứng bằng tổng khối lượng sản phẩm tạo thành:\n$$m_{\\text{Mg}} + m_{\\text{O}_2} = m_{\\text{MgO}}$$'
      },
      {
        order: 3,
        title: 'Tính khối lượng m của Magnesium',
        explanation: 'Thay số liệu đề bài vào:\n$$m + 3,2 = 8,0 \\Rightarrow m = 8,0 - 3,2 = 4,8\\text{ gam}$$'
      }
    ],
    finalAnswer: '4.8',
    commonMistakes: [
      'Không nhớ định luật bảo toàn khối lượng hoặc cộng sai hệ số.'
    ],
    reviewSuggestions: [
      'Xem lại định luật bảo toàn khối lượng và phương pháp cân bằng phương trình hóa học.'
    ]
  },
  {
    id: 'chem10-s02',
    questionId: 'chem10-q02',
    recognition: 'Tính thể tích khí ở điều kiện chuẩn mới theo quy định chương trình GDPT 2018 (24,79 L/mol).',
    detailedSteps: [
      {
        order: 1,
        title: 'Nhận diện điều kiện tính thể tích',
        explanation: 'Đề bài yêu cầu đo ở điều kiện chuẩn (đkc: 25 °C, 1 bar). Ở đkc, 1 mol chất khí bất kì chiếm thể tích là $24,79$ lít.'
      },
      {
        order: 2,
        title: 'Áp dụng công thức tính thể tích',
        explanation: 'Thể tích khí Oxygen là:\n$$V_{\\text{O}_2} = n \\cdot 24,79 = 0,4 \\cdot 24,79 = 9,916\\text{ lít}$$'
      }
    ],
    finalAnswer: '9.916',
    commonMistakes: [
      'Sử dụng công thức cũ ở đktc ($V = n \\cdot 22,4 = 0,4 \\cdot 22,4 = 8,96$ lít). Học sinh cần lưu ý chuyển đổi sang hằng số $24,79$ của chương trình GDPT 2018.'
    ],
    reviewSuggestions: [
      'Ghi nhớ hằng số thể tích mol điều kiện chuẩn mới theo GDPT 2018 là 24,79 lít/mol.'
    ]
  },
  {
    id: 'chem10-s03',
    questionId: 'chem10-q03',
    recognition: 'Lập công thức hóa học dựa vào hóa trị của Phosphorus (V) và Oxygen (II).',
    detailedSteps: [
      {
        order: 1,
        title: 'Đặt công thức hóa học tổng quát',
        explanation: 'Gọi công thức hóa học của hợp chất là $\\text{P}_x\\text{O}_y$ (với $x, y$ là số nguyên dương tối giản).'
      },
      {
        order: 2,
        title: 'Áp dụng quy tắc hóa trị',
        explanation: 'Theo quy tắc hóa trị: tích chỉ số và hóa trị của nguyên tố này bằng tích chỉ số và hóa trị của nguyên tố kia:\n$$x \\cdot \\text{V} = y \\cdot \\text{II} \\Rightarrow \\frac{x}{y} = \\frac{\\text{II}}{\\text{V}} = \\frac{2}{5}$$\nChọn $x = 2$, $y = 5$. Công thức hóa học là $\\text{P}_2\\text{O}_5$.'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: [
      'Viết sai vị trí hóa trị thành chỉ số dạng $\\text{P}_5\\text{O}_2$ (Phương án C) do nhầm chéo hóa trị.'
    ],
    reviewSuggestions: [
      'Ôn tập lại quy tắc hóa trị và cách lập công thức hóa học tối giản.'
    ]
  },
  {
    id: 'chem10-s04',
    questionId: 'chem10-q04',
    recognition: 'Bài toán tính lượng chất theo phương trình hóa học khi biết lượng của hai chất tham gia phản ứng (bài toán chất dư - hết).',
    detailedSteps: [
      {
        order: 1,
        title: 'So sánh tỉ số để xác định chất phản ứng hết',
        explanation: 'Phương trình phản ứng:\n$$\\text{Fe} + 2\\text{HCl} \\rightarrow \\text{FeCl}_2 + \\text{H}_2$$\nTa lập tỉ số lượng chất phản ứng:\n- Với Fe: $\\frac{0,1}{1} = 0,1$\n- With HCl: $\\frac{0,3}{2} = 0,15$\nVì $0,1 < 0,15$ nên Fe phản ứng hết, HCl còn dư sau phản ứng.'
      },
      {
        order: 2,
        title: 'Tính số mol khí Hydrogen sinh ra',
        explanation: 'Vì Fe hết nên lượng sản phẩm $\\text{H}_2$ phải được tính theo số mol Fe:\nTheo phương trình: $n_{\\text{H}_2} = n_{\\text{Fe}} = 0,1\\text{ mol}$.'
      }
    ],
    finalAnswer: '0.1',
    commonMistakes: [
      'Tính số mol $\\text{H}_2$ theo HCl dư: $n_{\\text{H}_2} = \\frac{1}{2} n_{\\text{HCl}} = 0,15\\text{ mol}$. Lỗi này xảy ra khi học sinh không lập tỉ lệ chất dư chất hết.'
    ],
    reviewSuggestions: [
      'Xem lại phương pháp giải bài toán lượng chất dư trong phương trình phản ứng hóa học.'
    ]
  },
  {
    id: 'chem10-s1',
    questionId: 'chem10-q1',
    recognition: 'Câu hỏi lý thuyết kiểm tra thành phần cấu tạo nguyên tử, độ rỗng nguyên tử và tỉ lệ khối lượng của các hạt cơ bản.',
    detailedSteps: [
      {
        order: 1,
        title: 'Phân tích phương án A',
        explanation: 'Khối lượng electron $m_e \\approx 0,00055\\text{ amu}$ vô cùng nhỏ, chỉ bằng khoảng $\\frac{1}{1837}$ khối lượng proton ($m_p \\approx 1\\text{ amu}$). Do đó, phát biểu A là **sai**.'
      },
      {
        order: 2,
        title: 'Phân tích phương án B',
        explanation: 'Hạt nhân chiếm hầu hết khối lượng của nguyên tử (do electron quá nhẹ), nhưng kích thước hạt nhân lại vô cùng nhỏ bé so với nguyên tử (nhỏ hơn khoảng 10.000 lần). Phần lớn thể tích nguyên tử là khoảng trống. Do đó, phát biểu B là **sai**.'
      },
      {
        order: 3,
        title: 'Phân tích phương án C',
        explanation: 'Neutron là hạt không mang điện tích ($0$), nằm trong hạt nhân nguyên tử cùng với proton (mang điện tích dương). Do đó, phát biểu C là **sai**.'
      },
      {
        order: 4,
        title: 'Phân tích phương án D',
        explanation: 'Vì khối lượng electron cực kì nhỏ bé, nên khối lượng toàn bộ nguyên tử tập trung hầu hết ở hạt nhân. Phát biểu D là **đúng**.'
      }
    ],
    finalAnswer: 'D',
    commonMistakes: [
      'Nhầm lẫn electron có khối lượng lớn tương đương với proton.',
      'Hiểu sai rằng hạt nhân to và chiếm phần lớn thể tích nguyên tử.'
    ],
    reviewSuggestions: [
      'Ôn lại bảng đặc trưng khối lượng và điện tích của 3 loại hạt cơ bản p, n, e.'
    ]
  },
  {
    id: 'chem10-s2',
    questionId: 'chem10-q2',
    recognition: 'Câu hỏi viết kí hiệu nguyên tử $_{Z}^{A}\\text{X}$ từ số hạt p, n, e cho trước.',
    detailedSteps: [
      {
        order: 1,
        title: 'Xác định số hiệu nguyên tử Z và chỉ số dưới',
        explanation: 'Số hiệu nguyên tử $Z$ bằng số proton của nguyên tử: $Z = 19$. Số hiệu này được viết ở góc dưới bên trái của kí hiệu nguyên tử: $_{19}\\text{K}$.'
      },
      {
        order: 2,
        title: 'Xác định số khối A và chỉ số trên',
        explanation: 'Số khối $A = Z + N = 19 + 20 = 39$. Số khối được viết ở góc trên bên trái của kí hiệu nguyên tử: $^{39}\\text{K}$.'
      },
      {
        order: 3,
        title: 'Tổng hợp kí hiệu nguyên tử',
        explanation: 'Ghép chỉ số trên và chỉ số dưới ta được kí hiệu nguyên tử hoàn chỉnh của Potassium: $_{19}^{39}\\text{K}$.'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: [
      'Nhầm lẫn số khối A bằng số neutron (viết $_{19}^{20}\\text{K}$ - Phương án A).',
      'Nhầm lẫn vị trí số hiệu Z ở trên, số khối A ở dưới (viết $_{39}^{19}\\text{K}$ - Phương án D).',
      'Nhầm sang nguyên tố Calcium khi thấy số hạt neutron bằng 20 (viết $_{20}^{39}\\text{Ca}$ - Phương án C).'
    ],
    reviewSuggestions: [
      'Ghi nhớ quy ước chuẩn quốc tế: số khối A viết ở TRÊN, số hiệu nguyên tử Z viết ở DƯỚI.'
    ]
  },
  {
    id: 'chem10-s3',
    questionId: 'chem10-q3',
    recognition: 'Tính nguyên tử khối trung bình của Chlorine từ dữ liệu phần trăm của hai đồng vị $^{35}\\text{Cl}$ và $^{37}\\text{Cl}$.',
    detailedSteps: [
      {
        order: 1,
        title: 'Trích xuất thông số từ phổ khối lượng',
        explanation: 'Đồng vị thứ nhất: $A_1 = 35$, chiếm tỉ lệ $x_1 = 75,77\\%$.\nĐồng vị thứ hai: $A_2 = 37$, chiếm tỉ lệ $x_2 = 24,23\\%$.'
      },
      {
        order: 2,
        title: 'Áp dụng công thức tính nguyên tử khối trung bình',
        explanation: 'Thay các thông số vào công thức trung bình có trọng số:\n$$\\overline{A} = \\frac{A_1 \\cdot x_1 + A_2 \\cdot x_2}{100}$$\n$$\\overline{A} = \\frac{35 \\cdot 75,77 + 37 \\cdot 24,23}{100} = \\frac{2651,95 + 896,51}{100} = \\frac{3548,46}{100} = 35,4846$$'
      },
      {
        order: 3,
        title: 'Làm tròn kết quả',
        explanation: 'Làm tròn kết quả đến hai chữ số thập phân thu được: $35,48$.'
      }
    ],
    finalAnswer: '35.48',
    commonMistakes: [
      'Lấy trung bình cộng đơn thuần: $\\frac{35 + 37}{2} = 36$. Đây là lỗi cực kì phổ biến khi không hiểu bản chất trọng số đồng vị.',
      'Làm tròn sai quy tắc hoặc nhầm lẫn phần trăm.'
    ],
    reviewSuggestions: [
      'Ghi nhớ rằng nguyên tử khối trung bình trong bảng tuần hoàn đại diện cho hỗn hợp trung bình của các đồng vị tự nhiên, không phải một nguyên tử Chlorine đơn lẻ có khối lượng 35,48.'
    ]
  },
  {
    id: 'chem10-s4',
    questionId: 'chem10-q4',
    recognition: 'Câu hỏi phân biệt khái niệm quỹ đạo chuyển động xác định (Bohr) và đám mây xác suất tìm thấy electron (Orbital hiện đại).',
    detailedSteps: [
      {
        order: 1,
        title: 'Phân tích khái niệm quỹ đạo cổ điển (Rutherford-Bohr)',
        explanation: 'Theo mô hình Rutherford-Bohr, electron chuyển động dọc theo một quỹ đạo xác định (giống đường đi của hành tinh quanh Mặt Trời). Phương án A và D mô tả quan điểm cũ này.'
      },
      {
        order: 2,
        title: 'Phân tích khái niệm orbital lượng tử hiện đại',
        explanation: 'Theo mô hình lượng tử, electron chuyển động rất nhanh và không có quỹ đạo cố định. Do đó ta chỉ có thể xác định vùng không gian xung quanh hạt nhân mà tại đó xác suất tìm thấy electron là cao nhất (khoảng 90%). Vùng này được gọi là orbital nguyên tử (AO). Vậy phương án B mô tả đúng.'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: [
      'Đồng nhất orbital với quỹ đạo chuyển động tròn hoặc bầu dục vật lý.',
      'Cho rằng mô hình Bohr mô tả đúng hoàn toàn hành vi lượng tử vi mô của electron.'
    ],
    reviewSuggestions: [
      'Đọc kĩ sự tiến hóa của các mô hình nguyên tử và lý do chuyển dịch sang mô hình lượng tử.'
    ]
  },
  {
    id: 'chem10-s5',
    questionId: 'chem10-q5',
    recognition: 'Tính toán số lượng orbital và số electron tối đa của lớp M ($n = 3$) dựa trên công thức cấu tạo lớp.',
    detailedSteps: [
      {
        order: 1,
        title: 'Xác định số phân lớp của lớp M',
        explanation: 'Lớp M tương ứng với số thứ tự lớp $n = 3$. Lớp thứ 3 có 3 phân lớp là: $3s$, $3p$, và $3d$.'
      },
      {
        order: 2,
        title: 'Xác định số orbital (AO) trong mỗi phân lớp',
        explanation: '- Phân lớp $3s$ có 1 orbital.\n- Phân lớp $3p$ có 3 orbital.\n- Phân lớp $3d$ có 5 orbital.\nTổng số orbital của lớp M là: $1 + 3 + 5 = 9$ orbital (thỏa mãn công thức $n^2 = 3^2 = 9$).'
      },
      {
        order: 3,
        title: 'Tính số electron tối đa',
        explanation: 'Mỗi orbital chứa tối đa 2 electron ngược chiều tự quay (theo nguyên lí Pauli). Số electron tối đa là:\n$$9 \\cdot 2 = 18 \\text{ electron (hoặc } 2n^2 = 2 \\cdot 3^2 = 18\\text{ e)}$$\nVậy phương án B là đúng.'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: [
      'Nhầm lẫn lớp M ($n=3$) có 3 orbital (tương ứng số phân lớp, chọn phương án A).',
      'Quên nhân đôi số orbital để tìm số electron tối đa, hoặc nhầm lẫn kí hiệu lớp M với lớp N ($n=4$, chọn phương án D).'
    ],
    reviewSuggestions: [
      'Ghi nhớ dãy kí hiệu lớp: K(1), L(2), M(3), N(4) và các công thức tổng quát số AO ($n^2$) và e tối đa ($2n^2$).'
    ]
  },
  {
    id: 'chem10-s6',
    questionId: 'chem10-q6',
    recognition: 'Câu hỏi viết cấu hình electron của ion $\\text{Fe}^{2+}$ từ cấu hình electron nguyên tử sắt (Z = 26).',
    detailedSteps: [
      {
        order: 1,
        title: 'Phân tích cấu hình electron của nguyên tử Fe',
        explanation: 'Sắt (Fe) có Z = 26, cấu hình electron là $[\\text{Ar}] 3d^6 4s^2$. Lớp thứ 4 là lớp ngoài cùng (chứa phân lớp $4s$), lớp thứ 3 là lớp sát ngoài cùng (chứa phân lớp $3d$).'
      },
      {
        order: 2,
        title: 'Xác định thứ tự nhường electron khi tạo ion',
        explanation: 'Khi nguyên tử tạo thành cation $\\text{Fe}^{2+}$, electron sẽ bị tách ra đầu tiên từ **lớp ngoài cùng** (lớp có số thứ tự $n$ lớn nhất), tức là phân lớp $4s$, chứ không phải phân lớp có mức năng lượng cao nhất lúc điền ($3d$).'
      },
      {
        order: 3,
        title: 'Viết cấu hình ion Fe2+',
        explanation: 'Nhường đi 2e ở phân lớp $4s^2$, cấu hình electron còn lại của ion $\\text{Fe}^{2+}$ là $[\\text{Ar}] 3d^6$. Do đó, phương án C là đúng.'
      }
    ],
    finalAnswer: 'C',
    commonMistakes: [
      'Lỗi nhường electron từ phân lớp sát ngoài cùng $3d$ trước phân lớp $4s$, dẫn đến viết sai cấu hình thành $[\\text{Ar}] 3d^4 4s^2$ (Phương án A). Đây là ngộ nhận rất phổ biến ở học sinh do nhầm lẫn thứ tự mức năng lượng điền electron với thứ tự tách electron ra.'
    ],
    reviewSuggestions: [
      'Nhớ quy tắc tạo ion: Electron luôn bị bứt ra từ ngoài vào trong (lớp có số $n$ lớn nhất trước).'
    ]
  },
  {
    id: 'chem10-s7',
    questionId: 'chem10-q7',
    recognition: 'Dự đoán tính chất phi kim từ cấu hình electron lớp ngoài cùng $3s^2 3p^4$.',
    detailedSteps: [
      {
        order: 1,
        title: 'Tính số electron lớp ngoài cùng',
        explanation: 'Cấu hình electron lớp ngoài cùng của X là $3s^2 3p^4$. Lớp ngoài cùng là lớp thứ 3. Tổng số electron lớp ngoài cùng là: $2 (ở 3s) + 4 (ở 3p) = 6$ electron.'
      },
      {
        order: 2,
        title: 'Dự đoán loại nguyên tố',
        explanation: 'Nguyên tử có 6 electron lớp ngoài cùng (tương tự Oxygen, Sulfur) là những phi kim tiêu biểu. Các nguyên tử này có xu hướng nhận thêm 2 electron (hoặc góp chung electron) để đạt cấu hình octet vững bền. Vậy phương án B là phát biểu đúng.'
      }
    ],
    finalAnswer: 'B',
    commonMistakes: [
      'Nhầm lẫn số electron ở lớp ngoài cùng với số electron ở phân lớp ngoài cùng (nghĩ có 4e ngoài cùng nên là kim loại, chọn phương án D).',
      'Cho rằng 6 electron ngoài cùng thì dễ nhường đi nên là kim loại mạnh (nhầm xu hướng nhận e của phi kim thành nhường e, chọn phương án A).'
    ],
    reviewSuggestions: [
      'Ôn tập quy tắc xác định kim loại, phi kim, khí hiếm dựa trên số electron lớp ngoài cùng (1,2,3 e: kim loại; 5,6,7 e: phi kim; 8 e: khí hiếm).'
    ]
  }
];
