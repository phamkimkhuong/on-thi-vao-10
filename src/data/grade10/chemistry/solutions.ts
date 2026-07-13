import { Solution } from '@/types';

export const g10ChemistrySolutions: Solution[] = [
  {
    id: 'chem10-s-intro-object-1', questionId: 'chem10-q-intro-object-1', recognition: 'Phân biệt đối tượng cụ thể với các chất cấu tạo nên đối tượng đó.',
    detailedSteps: [
      { order: 1, title: 'Xác định vật thể', explanation: 'Chai nước khoáng là một đối tượng cụ thể có hình dạng và công dụng xác định, nên được xem là vật thể.' },
      { order: 2, title: 'Xác định các chất', explanation: 'Nhựa là chất tạo nên vỏ chai; nước và các chất khoáng hòa tan là các chất tạo nên phần bên trong. Vì vậy phương án B phân loại đúng.' }
    ], finalAnswer: 'B', commonMistakes: ['Cho rằng mọi danh từ nhìn thấy được đều là vật thể hoặc mọi thứ bên trong chai đều là một chất duy nhất.'], reviewSuggestions: ['Ôn lại sự khác nhau giữa vật thể và chất; thử phân tích thêm một chiếc thìa inox hoặc dây điện.']
  },
  {
    id: 'chem10-s-intro-object-2', questionId: 'chem10-q-intro-object-2', recognition: 'Tách dữ kiện cảm nhận trực tiếp khỏi mô hình giải thích ở cấp độ hạt.',
    detailedSteps: [
      { order: 1, title: 'Tìm điều ghi nhận trực tiếp', explanation: '“Có nhiều bọt khí thoát ra” là điều có thể nhìn thấy trực tiếp, nên là quan sát.' },
      { order: 2, title: 'Nhận diện suy luận', explanation: 'Các phát biểu về tiểu phân phản ứng và chất khí mới là lời giải thích dựa trên mô hình hóa học. Chúng có thể hợp lí nhưng vẫn là suy luận cần bằng chứng hỗ trợ.' }
    ], finalAnswer: 'A', commonMistakes: ['Coi một lời giải thích khoa học hợp lí là quan sát trực tiếp.'], reviewSuggestions: ['Khi đọc báo cáo thí nghiệm, gạch chân số đo và hiện tượng trước; đánh dấu phần giải thích riêng.']
  },
  {
    id: 'chem10-s-intro-inquiry-1', questionId: 'chem10-q-intro-inquiry-1', recognition: 'Xác định đại lượng được đo để phản ánh ảnh hưởng của biến chủ động thay đổi.',
    detailedSteps: [
      { order: 1, title: 'Tìm biến được thay đổi', explanation: 'Học sinh chủ động đặt nhiệt độ ở 10 °C, 30 °C và 50 °C, nên nhiệt độ là biến độc lập.' },
      { order: 2, title: 'Tìm đại lượng được đo', explanation: 'Thời gian viên sủi phản ứng hết được đo để xem nhiệt độ ảnh hưởng thế nào, nên đây là biến phụ thuộc. Lượng nước và loại viên là biến kiểm soát.' }
    ], finalAnswer: 'B', commonMistakes: ['Chọn nhiệt độ vì đây là yếu tố nổi bật nhất, nhưng không phân biệt biến độc lập với biến phụ thuộc.'], reviewSuggestions: ['Ghi nhớ: độc lập = chủ động thay đổi; phụ thuộc = đo kết quả; kiểm soát = giữ giống nhau.']
  },
  {
    id: 'chem10-s-intro-inquiry-2', questionId: 'chem10-q-intro-inquiry-2', recognition: 'Chọn kết luận không vượt quá phạm vi của dữ liệu thí nghiệm.',
    detailedSteps: [
      { order: 1, title: 'Xác định dữ liệu thực sự chứng minh', explanation: 'Dữ liệu chỉ so sánh thời gian phản ứng tại ba nhiệt độ trong một hệ viên sủi cụ thể. Nó hỗ trợ kết luận rằng nhiệt độ cao hơn làm phản ứng nhanh hơn trong phạm vi đã khảo sát.' },
      { order: 2, title: 'Loại suy rộng quá mức', explanation: 'Thời gian ngắn hơn không chứng minh lượng sản phẩm cuối cùng nhiều hơn. Một thí nghiệm cũng không đủ để kết luận cho mọi phản ứng hoặc khẳng định nhiệt độ là yếu tố duy nhất.' }
    ], finalAnswer: 'A', commonMistakes: ['Đồng nhất tốc độ phản ứng với lượng sản phẩm cuối cùng.', 'Suy rộng từ một hệ thí nghiệm sang mọi phản ứng hóa học.'], reviewSuggestions: ['Khi kết luận, dùng cụm “trong điều kiện đã khảo sát” nếu dữ liệu chỉ bao phủ một phạm vi giới hạn.']
  },
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
    recognition: 'Viết cấu hình electron của chlorine và phân bố electron trên ba orbital thuộc phân lớp 3p.',
    detailedSteps: [
      {
        order: 1,
        title: 'Điền đủ 17 electron',
        explanation: 'Điền electron theo thứ tự mức năng lượng thu được $1s^2 2s^2 2p^6 3s^2 3p^5$. Tổng số mũ là $2+2+6+2+5=17$, đúng bằng Z.'
      },
      {
        order: 2,
        title: 'Phân bố electron trên orbital 3p',
        explanation: 'Phân lớp p có 3 orbital. Năm electron được phân bố sao cho ba orbital nhận electron đơn trước rồi mới ghép đôi, vì vậy còn đúng 1 electron độc thân. Chọn A.'
      }
    ],
    finalAnswer: 'A',
    commonMistakes: [
      'Đếm đúng tổng electron nhưng ghép đôi electron trong orbital p quá sớm, dẫn đến sai số electron độc thân.'
    ],
    reviewSuggestions: [
      'Ôn lại thứ tự điền electron và quy tắc phân bố electron độc thân trên các orbital cùng mức năng lượng.'
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
  },
  {
    id: 'chem10-s1b', questionId: 'chem10-q1b', recognition: 'Dùng tính trung hòa điện và định nghĩa số khối.',
    detailedSteps: [{ order: 1, title: 'Tính số electron', explanation: 'Nguyên tử trung hòa có số electron bằng số proton, nên có 13 electron.' }, { order: 2, title: 'Tính số khối', explanation: 'Số khối $A=p+n=13+14=27$. Chọn B.' }],
    finalAnswer: 'B', commonMistakes: ['Nhầm số neutron với số electron hoặc coi số khối chỉ bằng số neutron.'], reviewSuggestions: ['Ôn quan hệ $e=p$ trong nguyên tử trung hòa và $A=p+n$.']
  },
  {
    id: 'chem10-s2b', questionId: 'chem10-q2b', recognition: 'Số proton quyết định danh tính nguyên tố; số neutron phân biệt đồng vị.',
    detailedSteps: [{ order: 1, title: 'So sánh số proton', explanation: 'X và Y đều có 17 proton nên thuộc cùng một nguyên tố.' }, { order: 2, title: 'So sánh số neutron', explanation: 'Hai nguyên tử khác số neutron nên là hai đồng vị; khi trung hòa chúng đều có 17 electron. Chọn B.' }],
    finalAnswer: 'B', commonMistakes: ['Cho rằng thay đổi neutron tạo ra nguyên tố mới.'], reviewSuggestions: ['Ghi nhớ: proton quyết định nguyên tố, neutron quyết định đồng vị.']
  },
  {
    id: 'chem10-s3b', questionId: 'chem10-q3b', recognition: 'Đọc vị trí đỉnh là khối lượng và cường độ đỉnh là độ phổ biến.',
    detailedSteps: [{ order: 1, title: 'Đọc độ phổ biến', explanation: 'Đỉnh tại 11 có cường độ 80%, nên đồng vị khối lượng 11 phổ biến hơn.' }, { order: 2, title: 'Tính trung bình có trọng số', explanation: '$\\overline{A}=10\\times0{,}20+11\\times0{,}80=10{,}8$. Chọn B.' }],
    finalAnswer: 'B', commonMistakes: ['Lấy trung bình cộng 10,5 hoặc coi đỉnh cao hơn là đồng vị nặng hơn mà không đọc trục.'], reviewSuggestions: ['Ôn ý nghĩa hai trục của phổ khối và trung bình có trọng số.']
  },
  {
    id: 'chem10-s4b', questionId: 'chem10-q4b', recognition: 'Đánh giá giá trị và giới hạn của một mô hình khoa học.',
    detailedSteps: [{ order: 1, title: 'Giữ lại giá trị của mô hình', explanation: 'Mô hình Rutherford–Bohr hữu ích để biểu diễn lớp và mức năng lượng một cách trực quan.' }, { order: 2, title: 'Nhận diện giới hạn', explanation: 'Mô hình hiện đại không xem electron chạy trên đường tròn xác định. Vì vậy C là mô tả cân bằng và đúng nhất.' }],
    finalAnswer: 'C', commonMistakes: ['Chọn một trong hai cực đoan: coi mô hình là ảnh chụp hoàn toàn đúng hoặc hoàn toàn vô dụng.'], reviewSuggestions: ['Phân biệt mô hình khoa học với hình ảnh trực tiếp của thế giới vi mô.']
  },
  {
    id: 'chem10-s5b', questionId: 'chem10-q5b', recognition: 'Nhớ cấu trúc phân lớp p.',
    detailedSteps: [{ order: 1, title: 'Đếm orbital', explanation: 'Phân lớp p gồm 3 orbital có cùng mức năng lượng.' }, { order: 2, title: 'Tính sức chứa', explanation: 'Mỗi orbital chứa tối đa 2 electron, nên phân lớp p chứa tối đa $3\\times2=6$ electron. Chọn C.' }],
    finalAnswer: 'C', commonMistakes: ['Nhầm số orbital với số electron tối đa.'], reviewSuggestions: ['Lập bảng s: 1 AO/2e; p: 3 AO/6e; d: 5 AO/10e.']
  },
  {
    id: 'chem10-s6b', questionId: 'chem10-q6b', recognition: 'Điền 8 electron theo thứ tự mức năng lượng.',
    detailedSteps: [{ order: 1, title: 'Điền electron', explanation: '$1s$ nhận 2e, $2s$ nhận 2e, còn 4e điền vào $2p$.' }, { order: 2, title: 'Kiểm tra tổng', explanation: '$1s^2 2s^2 2p^4$ có tổng 8 electron, nên A đúng.' }],
    finalAnswer: 'A', commonMistakes: ['Viết một phân lớp s chứa quá 2 electron hoặc bỏ qua phân lớp 2s.'], reviewSuggestions: ['Luôn cộng tổng số mũ và đối chiếu với Z.']
  },
  {
    id: 'chem10-s7b', questionId: 'chem10-q7b', recognition: 'Dự đoán xu hướng tính chất từ một electron lớp ngoài cùng.',
    detailedSteps: [{ order: 1, title: 'Xác định lớp ngoài cùng', explanation: 'Cấu hình kết thúc bằng $3s^1$, nên X có 1 electron lớp ngoài cùng.' }, { order: 2, title: 'Dự đoán xu hướng', explanation: 'Nguyên tử có 1 electron lớp ngoài cùng thường dễ nhường electron đó để đạt cấu hình bền, thể hiện tính kim loại. Chọn C.' }],
    finalAnswer: 'C', commonMistakes: ['Chỉ nhìn lớp thứ hai đã bão hòa mà bỏ qua electron ở lớp thứ ba.'], reviewSuggestions: ['Khi phân loại, luôn xác định lớp có số n lớn nhất trước.']
  },
  ...([
    ['8a','Cùng chu kì nghĩa là cùng số lớp electron; không đồng nghĩa cùng electron ngoài cùng.','B'],
    ['8b','Số thứ tự ô bằng Z, tức 12 proton; nguyên tử trung hòa có 12 electron.','A'],
    ['9a','Số n lớn nhất là 3 nên thuộc chu kì 3; lớp ngoài cùng $3s^2$ ứng với nhóm IIA.','B'],
    ['9b','Chu kì 3 dùng lớp n=3; nhóm VIIA có 7 electron ngoài cùng nên là $3s^2 3p^5$.','B'],
    ['10a','Trong cùng chu kì, số lớp giữ nguyên nhưng điện tích hạt nhân tăng, kéo electron mạnh hơn và làm bán kính giảm.','B'],
    ['10b','Đi xuống nhóm IA, số lớp electron tăng nên bán kính tăng: Li < Na < K.','B'],
    ['11a','Từ trái sang phải, lực hút electron tăng: tính kim loại giảm, độ âm điện và tính phi kim tăng.','B'],
    ['11b','K có nhiều lớp electron hơn; electron ngoài cùng xa và bị che chắn mạnh hơn nên dễ nhường hơn Li.','B'],
    ['12a','Khi tính kim loại giảm và phi kim tăng, oxide chuyển dần từ base qua lưỡng tính đến acid.','B'],
    ['12b','Định luật tuần hoàn liên hệ sự biến đổi tuần hoàn của tính chất với điện tích hạt nhân tăng dần.','B']
  ] as const).map(([suffix, explanation, answer]) => ({
    id: `chem10-s${suffix}`,
    questionId: `chem10-q${suffix}`,
    recognition: 'Vận dụng cấu tạo electron và vị trí để giải thích quy luật tuần hoàn.',
    detailedSteps: [{ order: 1, title: 'Xác định quan hệ cấu tạo–vị trí', explanation }, { order: 2, title: 'Kết luận', explanation: `Do đó chọn phương án ${answer}.` }],
    finalAnswer: answer,
    commonMistakes: ['Chỉ ghi nhớ chiều biến đổi mà không xác định các nguyên tố đang cùng chu kì hay cùng nhóm.'],
    reviewSuggestions: ['Vẽ lại chuỗi nguyên nhân: cấu tạo electron → lực hút hạt nhân → tính chất nguyên tử → tính chất hợp chất.']
  }))
  ,...([
    ['13a','Na có 1 electron ngoài cùng nên nhường 1 electron tạo $Na^+$; nhường electron làm điện tích dương.','B'],
    ['13b','Oxygen cần nhận thêm 2 electron để đạt lớp ngoài cùng bền, tạo $O^{2-}$.','D'],
    ['14a','Trong tinh thể rắn, ion có vị trí gần cố định; khi nóng chảy, ion chuyển động có hướng dưới điện trường và mang dòng điện.','B'],
    ['14b','Một $Mg^{2+}$ cần hai $Cl^-$ để tổng điện tích bằng 0, nên tỉ lệ là $MgCl_2$.','B'],
    ['15a','Mỗi nitrogen cần thêm 3 electron để đạt octet; hai nguyên tử dùng chung 3 cặp, tạo liên kết ba.','C'],
    ['15b','Oxygen có 6 electron hóa trị, tạo hai liên kết O–H và còn hai cặp electron không liên kết.','A'],
    ['16a','Độ phân cực phân tử là tổng các moment liên kết; trong cấu trúc đối xứng chúng có thể triệt tiêu.','B'],
    ['16b','Chlorine có độ âm điện lớn hơn nên hút cặp electron dùng chung lệch về phía Cl.','B'],
    ['17a','O–H giữ H và O trong cùng phân tử là cộng hóa trị; tương tác hydrogen chủ yếu nối các phân tử với nhau.','B'],
    ['17b','Khi nước sôi cần thắng một phần mạng liên kết hydrogen giữa các phân tử, nên cần nhiều năng lượng hơn.','B']
  ] as const).map(([suffix, explanation, answer]) => ({
    id: `chem10-s${suffix}`, questionId: `chem10-q${suffix}`,
    recognition: 'Phân biệt bản chất liên kết trong phân tử và tương tác giữa các tiểu phân.',
    detailedSteps: [{ order: 1, title: 'Xác định tiểu phân và electron hóa trị', explanation }, { order: 2, title: 'Kết luận', explanation: `Vì vậy chọn ${answer}.` }],
    finalAnswer: answer,
    commonMistakes: ['Đồng nhất quy tắc octet, loại liên kết và lực giữa các phân tử thành một khái niệm.'],
    reviewSuggestions: ['Vẽ rõ electron hóa trị và ghi chú lực đang xét nằm trong hay giữa các phân tử.']
  }))
  ,...([
    ['18a','Gọi số oxi hóa của S là x: $2(+1)+x+4(-2)=0$, suy ra $x=+6$.','B'],
    ['18b','Trong $MnO_4^-$: $x+4(-2)=-1$, nên $x=+7$.','A'],
    ['19a','$Fe^{2+}$ nhường 1e, số oxi hóa tăng từ +2 lên +3 nên đây là oxi hóa.','B'],
    ['19b','Chlorine từ 0 xuống −1 và nhận electron, nên xảy ra quá trình khử.','B'],
    ['20a','Zn từ 0 lên +2, nhường electron và bị oxi hóa; vì vậy Zn là chất khử.','A'],
    ['20b','$Cu^{2+}$ nhận electron, giảm số oxi hóa xuống 0 và bị khử; nó là chất oxi hóa.','B'],
    ['21a','Al nhường 3e, O nhận 2e; bội chung 6 dẫn đến $4Al+3O_2\\rightarrow2Al_2O_3$.','B'],
    ['21b','Hai Fe được cân bằng bằng 2Fe; ba oxygen trong oxide cần 3CO để tạo 3CO2: $Fe_2O_3+3CO\\rightarrow2Fe+3CO_2$.','B']
  ] as const).map(([suffix, explanation, answer]) => ({
    id: `chem10-s${suffix}`, questionId: `chem10-q${suffix}`,
    recognition: 'Theo dõi số oxi hóa và electron nhường–nhận.',
    detailedSteps: [{ order: 1, title: 'Xác định thay đổi', explanation }, { order: 2, title: 'Kết luận', explanation: `Chọn phương án ${answer}.` }],
    finalAnswer: answer,
    commonMistakes: ['Đảo chất oxi hóa với chất bị oxi hóa hoặc thay chỉ số khi cân bằng.'],
    reviewSuggestions: ['Ghi cạnh nguyên tố: số oxi hóa trước → sau, rồi mới viết electron và đặt hệ số.']
  }))
  ,...([
    ['22a','Cốc là môi trường quanh hệ phản ứng. Cốc ấm lên chứng tỏ hệ truyền năng lượng ra ngoài, nên phản ứng tỏa nhiệt.','B'],
    ['22b','Hệ phải nhận năng lượng từ môi trường để tiếp tục phân hủy, nên đây là quá trình thu nhiệt.','A'],
    ['23a','$\\Delta H=120-200=-80$ kJ; dấu âm cho biết hệ giảm enthalpy và tỏa nhiệt.','B'],
    ['23b','Đảo chiều đổi dấu thành +50 kJ; nhân phương trình hai lần làm ΔH thành +100 kJ.','C'],
    ['24a','$\\Delta H=(-394)-[0+0]=-394$ kJ.','A'],
    ['24b','Phải lấy tổng hệ số nhân ΔfH° của sản phẩm trừ tổng tương ứng của chất đầu.','B'],
    ['25a','Phá liên kết phải thắng lực hút nên cần năng lượng; tạo liên kết chuyển hệ về trạng thái bền hơn và giải phóng năng lượng.','C'],
    ['25b','$\\Delta H\\approx500-650=-150$ kJ, nên phản ứng tỏa nhiệt.','D']
  ] as const).map(([suffix, explanation, answer]) => ({
    id: `chem10-s${suffix}`, questionId: `chem10-q${suffix}`,
    recognition: 'Xác định hướng truyền năng lượng và áp dụng đúng quy ước dấu.',
    detailedSteps: [{ order: 1, title: 'Thiết lập quan hệ năng lượng', explanation }, { order: 2, title: 'Kết luận', explanation: `Chọn phương án ${answer}.` }],
    finalAnswer: answer,
    commonMistakes: ['Đảo dấu ΔH, bỏ hệ số hoặc nhầm phá liên kết với tạo liên kết.'],
    reviewSuggestions: ['Vẽ mức năng lượng chất đầu và sản phẩm trước khi thay công thức.']
  }))
  ,...([
    ['26a','Độ giảm nồng độ là $0{,}80-0{,}50=0{,}30$ M; chia 10 s được 0,03 M/s.','A'],
    ['26b','$v=0{,}24/12=0{,}02$ M/s.','B'],
    ['27a','Chất đầu bị tiêu thụ nên nồng độ giảm; khi nồng độ thấp dần, tốc độ thường giảm và đường phẳng dần.','B'],
    ['27b','Độ lớn độ dốc biểu thị mức thay đổi nồng độ mỗi đơn vị thời gian; dốc hơn nghĩa là nhanh hơn.','A'],
    ['28a','Nghiền nhỏ tăng diện tích tiếp xúc, làm số va chạm tại bề mặt mỗi giây tăng.','B'],
    ['28b','Nhiệt độ cao làm hạt chuyển động nhanh hơn và tăng tỉ lệ va chạm vượt năng lượng hoạt hóa.','B'],
    ['29a','Xúc tác cung cấp cơ chế khác có năng lượng hoạt hóa thấp hơn, không đổi ΔH.','B'],
    ['29b','Muốn quy kết ảnh hưởng cho nhiệt độ, chỉ thay nhiệt độ và giữ các yếu tố còn lại cố định.','B']
  ] as const).map(([suffix, explanation, answer]) => ({
    id: `chem10-s${suffix}`, questionId: `chem10-q${suffix}`, recognition: 'Dùng tốc độ biến thiên, độ dốc hoặc mô hình va chạm.',
    detailedSteps: [{ order: 1, title: 'Xác định đại lượng hoặc biến', explanation }, { order: 2, title: 'Kết luận', explanation: `Chọn ${answer}.` }], finalAnswer: answer,
    commonMistakes: ['Nhầm nồng độ với tốc độ hoặc thay nhiều biến trong cùng thí nghiệm.'], reviewSuggestions: ['Luôn ghi biến độc lập, biến phụ thuộc, biến kiểm soát và đơn vị tốc độ.']
  }))
  ,...([
    ['30a','Halogen có 7 electron lớp ngoài cùng với cấu hình chung $ns^2np^5$.','B'],
    ['30b','Đi xuống nhóm, bán kính và lực phân tán tăng nên nhiệt độ sôi tăng; khả năng hút thêm electron giảm nên tính oxi hóa giảm.','C'],
    ['31a','$Cl_2$ oxi hóa mạnh hơn $Br_2$, nên oxi hóa $Br^-$ thành $Br_2$.','B'],
    ['31b','$Cl_2$ nhận electron và bị khử thành $Cl^-$, nên là chất oxi hóa.','B'],
    ['32a','$Cl_2+H_2O\\rightleftharpoons HCl+HClO$.','A'],
    ['32b','$Cl_2+2NaOH\\rightarrow NaCl+NaClO+H_2O$ trong điều kiện lạnh, loãng.','A'],
    ['33a','Liên kết H–F rất bền nên HF khó phân li trong nước hơn HCl.','B'],
    ['33b','Khi liên kết H–X yếu dần từ HF đến HI, khả năng phân li và độ mạnh acid tăng.','B'],
    ['34a','$Ag^++Cl^-\\rightarrow AgCl\\downarrow$ tạo kết tủa trắng.','A'],
    ['34b','Ion bạc kết hợp trực tiếp bromide: $Ag^++Br^-\\rightarrow AgBr\\downarrow$.','A']
  ] as const).map(([suffix, explanation, answer]) => ({
    id: `chem10-s${suffix}`, questionId: `chem10-q${suffix}`, recognition: 'Vận dụng xu hướng nhóm, oxi hóa–khử và hiện tượng thực nghiệm.',
    detailedSteps: [{ order: 1, title: 'Xác định quy luật hoặc phản ứng', explanation }, { order: 2, title: 'Kết luận', explanation: `Chọn ${answer}.` }], finalAnswer: answer,
    commonMistakes: ['Học thuộc phương trình mà không xét xu hướng oxi hóa hoặc điều kiện phản ứng.'], reviewSuggestions: ['Nối cấu hình ns²np⁵ → khả năng nhận electron → phản ứng và hiện tượng.']
  }))
];
