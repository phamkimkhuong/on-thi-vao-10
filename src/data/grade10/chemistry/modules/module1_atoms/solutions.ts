import type { Solution } from '@/types';

export const m1Solutions: Solution[] = [
  {
    "id": "chem10-s1",
    "questionId": "chem10-q1",
    "recognition": "Câu hỏi lý thuyết kiểm tra thành phần cấu tạo nguyên tử, độ rỗng nguyên tử và tỉ lệ khối lượng của các hạt cơ bản.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Phân tích phương án A",
        "explanation": "Khối lượng electron $m_e \\approx 0,00055\\text{ amu}$ vô cùng nhỏ, chỉ bằng khoảng $\\frac{1}{1837}$ khối lượng proton ($m_p \\approx 1\\text{ amu}$). Do đó, phát biểu A là **sai**."
      },
      {
        "order": 2,
        "title": "Phân tích phương án B",
        "explanation": "Hạt nhân chiếm hầu hết khối lượng của nguyên tử (do electron quá nhẹ), nhưng kích thước hạt nhân lại vô cùng nhỏ bé so với nguyên tử (nhỏ hơn khoảng 10.000 lần). Phần lớn thể tích nguyên tử là khoảng trống. Do đó, phát biểu B là **sai**."
      },
      {
        "order": 3,
        "title": "Phân tích phương án C",
        "explanation": "Neutron là hạt không mang điện tích ($0$), nằm trong hạt nhân nguyên tử cùng với proton (mang điện tích dương). Do đó, phát biểu C là **sai**."
      },
      {
        "order": 4,
        "title": "Phân tích phương án D",
        "explanation": "Vì khối lượng electron cực kì nhỏ bé, nên khối lượng toàn bộ nguyên tử tập trung hầu hết ở hạt nhân. Phát biểu D là **đúng**."
      }
    ],
    "finalAnswer": "D",
    "commonMistakes": [
      "Nhầm lẫn electron có khối lượng lớn tương đương với proton.",
      "Hiểu sai rằng hạt nhân to và chiếm phần lớn thể tích nguyên tử."
    ],
    "reviewSuggestions": [
      "Ôn lại bảng đặc trưng khối lượng và điện tích của 3 loại hạt cơ bản p, n, e."
    ]
  },
  {
    "id": "chem10-s2",
    "questionId": "chem10-q2",
    "recognition": "Câu hỏi viết kí hiệu nguyên tử $_{Z}^{A}\\text{X}$ từ số hạt p, n, e cho trước.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Xác định số hiệu nguyên tử Z và chỉ số dưới",
        "explanation": "Số hiệu nguyên tử $Z$ bằng số proton của nguyên tử: $Z = 19$. Số hiệu này được viết ở góc dưới bên trái của kí hiệu nguyên tử: $_{19}\\text{K}$."
      },
      {
        "order": 2,
        "title": "Xác định số khối A và chỉ số trên",
        "explanation": "Số khối $A = Z + N = 19 + 20 = 39$. Số khối được viết ở góc trên bên trái của kí hiệu nguyên tử: $^{39}\\text{K}$."
      },
      {
        "order": 3,
        "title": "Tổng hợp kí hiệu nguyên tử",
        "explanation": "Ghép chỉ số trên và chỉ số dưới ta được kí hiệu nguyên tử hoàn chỉnh của Potassium: $_{19}^{39}\\text{K}$."
      }
    ],
    "finalAnswer": "B",
    "commonMistakes": [
      "Nhầm lẫn số khối A bằng số neutron (viết $_{19}^{20}\\text{K}$ - Phương án A).",
      "Nhầm lẫn vị trí số hiệu Z ở trên, số khối A ở dưới (viết $_{39}^{19}\\text{K}$ - Phương án D).",
      "Nhầm sang nguyên tố Calcium khi thấy số hạt neutron bằng 20 (viết $_{20}^{39}\\text{Ca}$ - Phương án C)."
    ],
    "reviewSuggestions": [
      "Ghi nhớ quy ước chuẩn quốc tế: số khối A viết ở TRÊN, số hiệu nguyên tử Z viết ở DƯỚI."
    ]
  },
  {
    "id": "chem10-s3",
    "questionId": "chem10-q3",
    "recognition": "Tính nguyên tử khối trung bình của Chlorine từ dữ liệu phần trăm của hai đồng vị $^{35}\\text{Cl}$ và $^{37}\\text{Cl}$.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Trích xuất thông số từ phổ khối lượng",
        "explanation": "Đồng vị thứ nhất: $A_1 = 35$, chiếm tỉ lệ $x_1 = 75,77\\%$.\nĐồng vị thứ hai: $A_2 = 37$, chiếm tỉ lệ $x_2 = 24,23\\%$."
      },
      {
        "order": 2,
        "title": "Áp dụng công thức tính nguyên tử khối trung bình",
        "explanation": "Thay các thông số vào công thức trung bình có trọng số:\n$$\\overline{A} = \\frac{A_1 \\cdot x_1 + A_2 \\cdot x_2}{100}$$\n$$\\overline{A} = \\frac{35 \\cdot 75,77 + 37 \\cdot 24,23}{100} = \\frac{2651,95 + 896,51}{100} = \\frac{3548,46}{100} = 35,4846$$"
      },
      {
        "order": 3,
        "title": "Làm tròn kết quả",
        "explanation": "Làm tròn kết quả đến hai chữ số thập phân thu được: $35,48$."
      }
    ],
    "finalAnswer": "35.48",
    "commonMistakes": [
      "Lấy trung bình cộng đơn thuần: $\\frac{35 + 37}{2} = 36$. Đây là lỗi cực kì phổ biến khi không hiểu bản chất trọng số đồng vị.",
      "Làm tròn sai quy tắc hoặc nhầm lẫn phần trăm."
    ],
    "reviewSuggestions": [
      "Ghi nhớ rằng nguyên tử khối trung bình trong bảng tuần hoàn đại diện cho hỗn hợp trung bình của các đồng vị tự nhiên, không phải một nguyên tử Chlorine đơn lẻ có khối lượng 35,48."
    ]
  },
  {
    "id": "chem10-s4",
    "questionId": "chem10-q4",
    "recognition": "Câu hỏi phân biệt khái niệm quỹ đạo chuyển động xác định (Bohr) và đám mây xác suất tìm thấy electron (Orbital hiện đại).",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Phân tích khái niệm quỹ đạo cổ điển (Rutherford-Bohr)",
        "explanation": "Theo mô hình Rutherford-Bohr, electron chuyển động dọc theo một quỹ đạo xác định (giống đường đi của hành tinh quanh Mặt Trời). Phương án A và D mô tả quan điểm cũ này."
      },
      {
        "order": 2,
        "title": "Phân tích khái niệm orbital lượng tử hiện đại",
        "explanation": "Theo mô hình lượng tử, electron chuyển động rất nhanh và không có quỹ đạo cố định. Do đó ta chỉ có thể xác định vùng không gian xung quanh hạt nhân mà tại đó xác suất tìm thấy electron là cao nhất (khoảng 90%). Vùng này được gọi là orbital nguyên tử (AO). Vậy phương án B mô tả đúng."
      }
    ],
    "finalAnswer": "B",
    "commonMistakes": [
      "Đồng nhất orbital với quỹ đạo chuyển động tròn hoặc bầu dục vật lý.",
      "Cho rằng mô hình Bohr mô tả đúng hoàn toàn hành vi lượng tử vi mô của electron."
    ],
    "reviewSuggestions": [
      "Đọc kĩ sự tiến hóa của các mô hình nguyên tử và lý do chuyển dịch sang mô hình lượng tử."
    ]
  },
  {
    "id": "chem10-s5",
    "questionId": "chem10-q5",
    "recognition": "Tính toán số lượng orbital và số electron tối đa của lớp M ($n = 3$) dựa trên công thức cấu tạo lớp.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Xác định số phân lớp của lớp M",
        "explanation": "Lớp M tương ứng với số thứ tự lớp $n = 3$. Lớp thứ 3 có 3 phân lớp là: $3s$, $3p$, và $3d$."
      },
      {
        "order": 2,
        "title": "Xác định số orbital (AO) trong mỗi phân lớp",
        "explanation": "- Phân lớp $3s$ có 1 orbital.\n- Phân lớp $3p$ có 3 orbital.\n- Phân lớp $3d$ có 5 orbital.\nTổng số orbital của lớp M là: $1 + 3 + 5 = 9$ orbital (thỏa mãn công thức $n^2 = 3^2 = 9$)."
      },
      {
        "order": 3,
        "title": "Tính số electron tối đa",
        "explanation": "Mỗi orbital chứa tối đa 2 electron ngược chiều tự quay (theo nguyên lí Pauli). Số electron tối đa là:\n$$9 \\cdot 2 = 18 \\text{ electron (hoặc } 2n^2 = 2 \\cdot 3^2 = 18\\text{ e)}$$\nVậy phương án B là đúng."
      }
    ],
    "finalAnswer": "B",
    "commonMistakes": [
      "Nhầm lẫn lớp M ($n=3$) có 3 orbital (tương ứng số phân lớp, chọn phương án A).",
      "Quên nhân đôi số orbital để tìm số electron tối đa, hoặc nhầm lẫn kí hiệu lớp M với lớp N ($n=4$, chọn phương án D)."
    ],
    "reviewSuggestions": [
      "Ghi nhớ dãy kí hiệu lớp: K(1), L(2), M(3), N(4) và các công thức tổng quát số AO ($n^2$) và e tối đa ($2n^2$)."
    ]
  },
  {
    "id": "chem10-s6",
    "questionId": "chem10-q6",
    "recognition": "Viết cấu hình electron của chlorine và phân bố electron trên ba orbital thuộc phân lớp 3p.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Điền đủ 17 electron",
        "explanation": "Điền electron theo thứ tự mức năng lượng thu được $1s^2 2s^2 2p^6 3s^2 3p^5$. Tổng số mũ là $2+2+6+2+5=17$, đúng bằng Z."
      },
      {
        "order": 2,
        "title": "Phân bố electron trên orbital 3p",
        "explanation": "Phân lớp p có 3 orbital. Năm electron được phân bố sao cho ba orbital nhận electron đơn trước rồi mới ghép đôi, vì vậy còn đúng 1 electron độc thân. Chọn A."
      }
    ],
    "finalAnswer": "A",
    "commonMistakes": [
      "Đếm đúng tổng electron nhưng ghép đôi electron trong orbital p quá sớm, dẫn đến sai số electron độc thân."
    ],
    "reviewSuggestions": [
      "Ôn lại thứ tự điền electron và quy tắc phân bố electron độc thân trên các orbital cùng mức năng lượng."
    ]
  },
  {
    "id": "chem10-s7",
    "questionId": "chem10-q7",
    "recognition": "Dự đoán tính chất phi kim từ cấu hình electron lớp ngoài cùng $3s^2 3p^4$.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Tính số electron lớp ngoài cùng",
        "explanation": "Cấu hình electron lớp ngoài cùng của X là $3s^2 3p^4$. Lớp ngoài cùng là lớp thứ 3. Tổng số electron lớp ngoài cùng là: $2 (ở 3s) + 4 (ở 3p) = 6$ electron."
      },
      {
        "order": 2,
        "title": "Dự đoán loại nguyên tố",
        "explanation": "Nguyên tử có 6 electron lớp ngoài cùng (tương tự Oxygen, Sulfur) là những phi kim tiêu biểu. Các nguyên tử này có xu hướng nhận thêm 2 electron (hoặc góp chung electron) để đạt cấu hình octet vững bền. Vậy phương án B là phát biểu đúng."
      }
    ],
    "finalAnswer": "B",
    "commonMistakes": [
      "Nhầm lẫn số electron ở lớp ngoài cùng với số electron ở phân lớp ngoài cùng (nghĩ có 4e ngoài cùng nên là kim loại, chọn phương án D).",
      "Cho rằng 6 electron ngoài cùng thì dễ nhường đi nên là kim loại mạnh (nhầm xu hướng nhận e của phi kim thành nhường e, chọn phương án A)."
    ],
    "reviewSuggestions": [
      "Ôn tập quy tắc xác định kim loại, phi kim, khí hiếm dựa trên số electron lớp ngoài cùng (1,2,3 e: kim loại; 5,6,7 e: phi kim; 8 e: khí hiếm)."
    ]
  },
  {
    "id": "chem10-s1b",
    "questionId": "chem10-q1b",
    "recognition": "Dùng tính trung hòa điện và định nghĩa số khối.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Tính số electron",
        "explanation": "Nguyên tử trung hòa có số electron bằng số proton, nên có 13 electron."
      },
      {
        "order": 2,
        "title": "Tính số khối",
        "explanation": "Số khối $A=p+n=13+14=27$. Chọn B."
      }
    ],
    "finalAnswer": "B",
    "commonMistakes": [
      "Nhầm số neutron với số electron hoặc coi số khối chỉ bằng số neutron."
    ],
    "reviewSuggestions": [
      "Ôn quan hệ $e=p$ trong nguyên tử trung hòa và $A=p+n$."
    ]
  },
  {
    "id": "chem10-s2b",
    "questionId": "chem10-q2b",
    "recognition": "Số proton quyết định danh tính nguyên tố; số neutron phân biệt đồng vị.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "So sánh số proton",
        "explanation": "X và Y đều có 17 proton nên thuộc cùng một nguyên tố."
      },
      {
        "order": 2,
        "title": "So sánh số neutron",
        "explanation": "Hai nguyên tử khác số neutron nên là hai đồng vị; khi trung hòa chúng đều có 17 electron. Chọn B."
      }
    ],
    "finalAnswer": "B",
    "commonMistakes": [
      "Cho rằng thay đổi neutron tạo ra nguyên tố mới."
    ],
    "reviewSuggestions": [
      "Ghi nhớ: proton quyết định nguyên tố, neutron quyết định đồng vị."
    ]
  },
  {
    "id": "chem10-s3b",
    "questionId": "chem10-q3b",
    "recognition": "Đọc vị trí đỉnh là khối lượng và cường độ đỉnh là độ phổ biến.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Đọc độ phổ biến",
        "explanation": "Đỉnh tại 11 có cường độ 80%, nên đồng vị khối lượng 11 phổ biến hơn."
      },
      {
        "order": 2,
        "title": "Tính trung bình có trọng số",
        "explanation": "$\\overline{A}=10\\times0{,}20+11\\times0{,}80=10{,}8$. Chọn B."
      }
    ],
    "finalAnswer": "B",
    "commonMistakes": [
      "Lấy trung bình cộng 10,5 hoặc coi đỉnh cao hơn là đồng vị nặng hơn mà không đọc trục."
    ],
    "reviewSuggestions": [
      "Ôn ý nghĩa hai trục của phổ khối và trung bình có trọng số."
    ]
  },
  {
    "id": "chem10-s4b",
    "questionId": "chem10-q4b",
    "recognition": "Đánh giá giá trị và giới hạn của một mô hình khoa học.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Giữ lại giá trị của mô hình",
        "explanation": "Mô hình Rutherford–Bohr hữu ích để biểu diễn lớp và mức năng lượng một cách trực quan."
      },
      {
        "order": 2,
        "title": "Nhận diện giới hạn",
        "explanation": "Mô hình hiện đại không xem electron chạy trên đường tròn xác định. Vì vậy C là mô tả cân bằng và đúng nhất."
      }
    ],
    "finalAnswer": "C",
    "commonMistakes": [
      "Chọn một trong hai cực đoan: coi mô hình là ảnh chụp hoàn toàn đúng hoặc hoàn toàn vô dụng."
    ],
    "reviewSuggestions": [
      "Phân biệt mô hình khoa học với hình ảnh trực tiếp của thế giới vi mô."
    ]
  },
  {
    "id": "chem10-s5b",
    "questionId": "chem10-q5b",
    "recognition": "Nhớ cấu trúc phân lớp p.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Đếm orbital",
        "explanation": "Phân lớp p gồm 3 orbital có cùng mức năng lượng."
      },
      {
        "order": 2,
        "title": "Tính sức chứa",
        "explanation": "Mỗi orbital chứa tối đa 2 electron, nên phân lớp p chứa tối đa $3\\times2=6$ electron. Chọn C."
      }
    ],
    "finalAnswer": "C",
    "commonMistakes": [
      "Nhầm số orbital với số electron tối đa."
    ],
    "reviewSuggestions": [
      "Lập bảng s: 1 AO/2e; p: 3 AO/6e; d: 5 AO/10e."
    ]
  },
  {
    "id": "chem10-s6b",
    "questionId": "chem10-q6b",
    "recognition": "Điền 8 electron theo thứ tự mức năng lượng.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Điền electron",
        "explanation": "$1s$ nhận 2e, $2s$ nhận 2e, còn 4e điền vào $2p$."
      },
      {
        "order": 2,
        "title": "Kiểm tra tổng",
        "explanation": "$1s^2 2s^2 2p^4$ có tổng 8 electron, nên A đúng."
      }
    ],
    "finalAnswer": "A",
    "commonMistakes": [
      "Viết một phân lớp s chứa quá 2 electron hoặc bỏ qua phân lớp 2s."
    ],
    "reviewSuggestions": [
      "Luôn cộng tổng số mũ và đối chiếu với Z."
    ]
  },
  {
    "id": "chem10-s7b",
    "questionId": "chem10-q7b",
    "recognition": "Dự đoán xu hướng tính chất từ một electron lớp ngoài cùng.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Xác định lớp ngoài cùng",
        "explanation": "Cấu hình kết thúc bằng $3s^1$, nên X có 1 electron lớp ngoài cùng."
      },
      {
        "order": 2,
        "title": "Dự đoán xu hướng",
        "explanation": "Nguyên tử có 1 electron lớp ngoài cùng thường dễ nhường electron đó để đạt cấu hình bền, thể hiện tính kim loại. Chọn C."
      }
    ],
    "finalAnswer": "C",
    "commonMistakes": [
      "Chỉ nhìn lớp thứ hai đã bão hòa mà bỏ qua electron ở lớp thứ ba."
    ],
    "reviewSuggestions": [
      "Khi phân loại, luôn xác định lớp có số n lớn nhất trước."
    ]
  },
  {
    "id": "chem10-s1c",
    "questionId": "chem10-q1c",
    "recognition": "Xác định đúng khái niệm hoặc quy trình trọng tâm trước khi lựa chọn.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Phân tích dữ kiện",
        "explanation": "Nguyên tử trung hòa có p=e=15; $n=A-Z=31-15=16$."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Chọn phương án A."
      }
    ],
    "finalAnswer": "A",
    "commonMistakes": [
      "Chọn theo từ khóa hoặc công thức ghi nhớ mà không kiểm tra ý nghĩa của dữ kiện."
    ],
    "reviewSuggestions": [
      "Đối chiếu lại khái niệm lõi và tự giải thích vì sao các phương án còn lại không phù hợp."
    ]
  },
  {
    "id": "chem10-s1d",
    "questionId": "chem10-q1d",
    "recognition": "Xác định đúng khái niệm hoặc quy trình trọng tâm trước khi lựa chọn.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Phân tích dữ kiện",
        "explanation": "Hạt nhân có kích thước rất nhỏ, chứa proton và neutron nên tập trung gần hết khối lượng."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Chọn phương án C."
      }
    ],
    "finalAnswer": "C",
    "commonMistakes": [
      "Chọn theo từ khóa hoặc công thức ghi nhớ mà không kiểm tra ý nghĩa của dữ kiện."
    ],
    "reviewSuggestions": [
      "Đối chiếu lại khái niệm lõi và tự giải thích vì sao các phương án còn lại không phù hợp."
    ]
  },
  {
    "id": "chem10-s2c",
    "questionId": "chem10-q2c",
    "recognition": "Xác định đúng khái niệm hoặc quy trình trọng tâm trước khi lựa chọn.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Phân tích dữ kiện",
        "explanation": "$p=e=Z=20$ và $n=A-Z=20$."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Chọn phương án A."
      }
    ],
    "finalAnswer": "A",
    "commonMistakes": [
      "Chọn theo từ khóa hoặc công thức ghi nhớ mà không kiểm tra ý nghĩa của dữ kiện."
    ],
    "reviewSuggestions": [
      "Đối chiếu lại khái niệm lõi và tự giải thích vì sao các phương án còn lại không phù hợp."
    ]
  },
  {
    "id": "chem10-s2d",
    "questionId": "chem10-q2d",
    "recognition": "Xác định đúng khái niệm hoặc quy trình trọng tâm trước khi lựa chọn.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Phân tích dữ kiện",
        "explanation": "Cùng Z nghĩa là cùng số proton và cùng nguyên tố; khác A nghĩa là khác số neutron."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Chọn phương án B."
      }
    ],
    "finalAnswer": "B",
    "commonMistakes": [
      "Chọn theo từ khóa hoặc công thức ghi nhớ mà không kiểm tra ý nghĩa của dữ kiện."
    ],
    "reviewSuggestions": [
      "Đối chiếu lại khái niệm lõi và tự giải thích vì sao các phương án còn lại không phù hợp."
    ]
  },
  {
    "id": "chem10-s3c",
    "questionId": "chem10-q3c",
    "recognition": "Xác định đúng khái niệm hoặc quy trình trọng tâm trước khi lựa chọn.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Phân tích dữ kiện",
        "explanation": "$\\bar A=24\\times0,60+26\\times0,40=24,8$."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Chọn phương án B."
      }
    ],
    "finalAnswer": "B",
    "commonMistakes": [
      "Chọn theo từ khóa hoặc công thức ghi nhớ mà không kiểm tra ý nghĩa của dữ kiện."
    ],
    "reviewSuggestions": [
      "Đối chiếu lại khái niệm lõi và tự giải thích vì sao các phương án còn lại không phù hợp."
    ]
  },
  {
    "id": "chem10-s3d",
    "questionId": "chem10-q3d",
    "recognition": "Xác định đúng khái niệm hoặc quy trình trọng tâm trước khi lựa chọn.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Phân tích dữ kiện",
        "explanation": "Vị trí đỉnh cho khối lượng; cường độ tương đối gần bằng nhau biểu thị độ phổ biến gần bằng nhau."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Chọn phương án A."
      }
    ],
    "finalAnswer": "A",
    "commonMistakes": [
      "Chọn theo từ khóa hoặc công thức ghi nhớ mà không kiểm tra ý nghĩa của dữ kiện."
    ],
    "reviewSuggestions": [
      "Đối chiếu lại khái niệm lõi và tự giải thích vì sao các phương án còn lại không phù hợp."
    ]
  },
  {
    "id": "chem10-s4c",
    "questionId": "chem10-q4c",
    "recognition": "Xác định đúng khái niệm hoặc quy trình trọng tâm trước khi lựa chọn.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Phân tích dữ kiện",
        "explanation": "Mô hình hiện đại mô tả vùng xác suất tìm thấy electron, không gán đường chuyển động xác định."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Chọn phương án A."
      }
    ],
    "finalAnswer": "A",
    "commonMistakes": [
      "Chọn theo từ khóa hoặc công thức ghi nhớ mà không kiểm tra ý nghĩa của dữ kiện."
    ],
    "reviewSuggestions": [
      "Đối chiếu lại khái niệm lõi và tự giải thích vì sao các phương án còn lại không phù hợp."
    ]
  },
  {
    "id": "chem10-s4d",
    "questionId": "chem10-q4d",
    "recognition": "Xác định đúng khái niệm hoặc quy trình trọng tâm trước khi lựa chọn.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Phân tích dữ kiện",
        "explanation": "Đám mây là mô hình xác suất; vùng đậm hơn tương ứng xác suất tìm thấy electron lớn hơn."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Chọn phương án B."
      }
    ],
    "finalAnswer": "B",
    "commonMistakes": [
      "Chọn theo từ khóa hoặc công thức ghi nhớ mà không kiểm tra ý nghĩa của dữ kiện."
    ],
    "reviewSuggestions": [
      "Đối chiếu lại khái niệm lõi và tự giải thích vì sao các phương án còn lại không phù hợp."
    ]
  },
  {
    "id": "chem10-s5c",
    "questionId": "chem10-q5c",
    "recognition": "Xác định đúng khái niệm hoặc quy trình trọng tâm trước khi lựa chọn.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Phân tích dữ kiện",
        "explanation": "Mỗi phân lớp s có một orbital và mỗi orbital chứa tối đa hai electron."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Chọn phương án A."
      }
    ],
    "finalAnswer": "A",
    "commonMistakes": [
      "Chọn theo từ khóa hoặc công thức ghi nhớ mà không kiểm tra ý nghĩa của dữ kiện."
    ],
    "reviewSuggestions": [
      "Đối chiếu lại khái niệm lõi và tự giải thích vì sao các phương án còn lại không phù hợp."
    ]
  },
  {
    "id": "chem10-s5d",
    "questionId": "chem10-q5d",
    "recognition": "Xác định đúng khái niệm hoặc quy trình trọng tâm trước khi lựa chọn.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Phân tích dữ kiện",
        "explanation": "Lớp 2 gồm 2s (2e) và 2p (6e), tổng tối đa 8 electron."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Chọn phương án B."
      }
    ],
    "finalAnswer": "B",
    "commonMistakes": [
      "Chọn theo từ khóa hoặc công thức ghi nhớ mà không kiểm tra ý nghĩa của dữ kiện."
    ],
    "reviewSuggestions": [
      "Đối chiếu lại khái niệm lõi và tự giải thích vì sao các phương án còn lại không phù hợp."
    ]
  },
  {
    "id": "chem10-s6c",
    "questionId": "chem10-q6c",
    "recognition": "Xác định đúng khái niệm hoặc quy trình trọng tâm trước khi lựa chọn.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Phân tích dữ kiện",
        "explanation": "Phân bộ đủ 11 electron theo thứ tự mức năng lượng cho cấu hình kết thúc ở 3s¹."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Chọn phương án A."
      }
    ],
    "finalAnswer": "A",
    "commonMistakes": [
      "Chọn theo từ khóa hoặc công thức ghi nhớ mà không kiểm tra ý nghĩa của dữ kiện."
    ],
    "reviewSuggestions": [
      "Đối chiếu lại khái niệm lõi và tự giải thích vì sao các phương án còn lại không phù hợp."
    ]
  },
  {
    "id": "chem10-s6d",
    "questionId": "chem10-q6d",
    "recognition": "Xác định đúng khái niệm hoặc quy trình trọng tâm trước khi lựa chọn.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Phân tích dữ kiện",
        "explanation": "Các AO cùng mức năng lượng được điền electron độc thân với spin song song trước khi ghép đôi."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Chọn phương án B."
      }
    ],
    "finalAnswer": "B",
    "commonMistakes": [
      "Chọn theo từ khóa hoặc công thức ghi nhớ mà không kiểm tra ý nghĩa của dữ kiện."
    ],
    "reviewSuggestions": [
      "Đối chiếu lại khái niệm lõi và tự giải thích vì sao các phương án còn lại không phù hợp."
    ]
  },
  {
    "id": "chem10-s7c",
    "questionId": "chem10-q7c",
    "recognition": "Xác định đúng khái niệm hoặc quy trình trọng tâm trước khi lựa chọn.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Phân tích dữ kiện",
        "explanation": "Lớp ngoài cùng bão hòa là cấu hình bền đặc trưng của khí hiếm."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Chọn phương án C."
      }
    ],
    "finalAnswer": "C",
    "commonMistakes": [
      "Chọn theo từ khóa hoặc công thức ghi nhớ mà không kiểm tra ý nghĩa của dữ kiện."
    ],
    "reviewSuggestions": [
      "Đối chiếu lại khái niệm lõi và tự giải thích vì sao các phương án còn lại không phù hợp."
    ]
  },
  {
    "id": "chem10-s7d",
    "questionId": "chem10-q7d",
    "recognition": "Xác định đúng khái niệm hoặc quy trình trọng tâm trước khi lựa chọn.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Phân tích dữ kiện",
        "explanation": "X có 7 electron hóa trị, thường nhận thêm 1 electron để đạt cấu hình bền."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Chọn phương án B."
      }
    ],
    "finalAnswer": "B",
    "commonMistakes": [
      "Chọn theo từ khóa hoặc công thức ghi nhớ mà không kiểm tra ý nghĩa của dữ kiện."
    ],
    "reviewSuggestions": [
      "Đối chiếu lại khái niệm lõi và tự giải thích vì sao các phương án còn lại không phù hợp."
    ]
  },
  {
    "id": "chem10-s1-reinforce-concept",
    "questionId": "chem10-q1-reinforce-concept",
    "recognition": "Kiểm tra khái niệm, quy trình hoặc ngộ nhận trọng tâm của dạng bài.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Đối chiếu kiến thức lõi",
        "explanation": "Trọng tâm cần nhớ: 1. Ba loại hạt cơ bản cấu tạo nên nguyên tử: - Proton (p): Mang điện tích dương ($+1$ hoặc $+1,602 \\cdot 10^{-19}\\text{C}$), khối lượng tương đối $1\\text{ amu}$. Nằm ở hạt nhân. - Neutron (n): Không mang điện ($0$), khối lượng tương đối $1\\text{ amu}$. Nằm ở hạt nhân. - Electron (e): Mang điện tích âm ($-1$ hoặc $-1,602 \\cdot 10^{-19}\\text{C}$), khối lượng tương đối cực nhỏ ($0,00055\\text{ amu}$ $\\approx \\frac{1}{1837}$ khối lượng proton). Chuyển động ở lớp vỏ nguyên tử."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Chọn phương án A."
      }
    ],
    "finalAnswer": "A",
    "commonMistakes": [
      "Cho rằng electron có khối lượng tương đương proton, dẫn đến suy luận sai rằng khối lượng nguyên tử phân bổ đều."
    ],
    "reviewSuggestions": [
      "Đọc lại lý thuyết, quy trình giải và tự giải thích vì sao ba phương án còn lại không phù hợp."
    ]
  },
  {
    "id": "chem10-s1-reinforce-process",
    "questionId": "chem10-q1-reinforce-process",
    "recognition": "Kiểm tra khái niệm, quy trình hoặc ngộ nhận trọng tâm của dạng bài.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Đối chiếu kiến thức lõi",
        "explanation": "Quy trình đúng bắt đầu bằng: Bước 1: Nhận diện điện tích hạt nhân $Z$, trong nguyên tử luôn có $P = E = Z$."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Chọn phương án B."
      }
    ],
    "finalAnswer": "B",
    "commonMistakes": [
      "Cho rằng electron có khối lượng tương đương proton, dẫn đến suy luận sai rằng khối lượng nguyên tử phân bổ đều."
    ],
    "reviewSuggestions": [
      "Đọc lại lý thuyết, quy trình giải và tự giải thích vì sao ba phương án còn lại không phù hợp."
    ]
  },
  {
    "id": "chem10-s1-reinforce-misconception",
    "questionId": "chem10-q1-reinforce-misconception",
    "recognition": "Kiểm tra khái niệm, quy trình hoặc ngộ nhận trọng tâm của dạng bài.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Đối chiếu kiến thức lõi",
        "explanation": "Đây là lỗi/ngộ nhận trọng yếu cần sửa: Cho rằng electron có khối lượng tương đương proton, dẫn đến suy luận sai rằng khối lượng nguyên tử phân bổ đều."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Chọn phương án C."
      }
    ],
    "finalAnswer": "C",
    "commonMistakes": [
      "Cho rằng electron có khối lượng tương đương proton, dẫn đến suy luận sai rằng khối lượng nguyên tử phân bổ đều."
    ],
    "reviewSuggestions": [
      "Đọc lại lý thuyết, quy trình giải và tự giải thích vì sao ba phương án còn lại không phù hợp."
    ]
  },
  {
    "id": "chem10-s2-reinforce-concept",
    "questionId": "chem10-q2-reinforce-concept",
    "recognition": "Kiểm tra khái niệm, quy trình hoặc ngộ nhận trọng tâm của dạng bài.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Đối chiếu kiến thức lõi",
        "explanation": "Trọng tâm cần nhớ: 1. Nguyên tố hóa học: - Nguyên tố hóa học là tập hợp các nguyên tử có cùng số proton (cùng số điện tích hạt nhân Z). - Số proton là đặc trưng cốt lõi của nguyên tố. Thay đổi số proton sẽ tạo ra nguyên tố mới."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Chọn phương án B."
      }
    ],
    "finalAnswer": "B",
    "commonMistakes": [
      "Nhầm lẫn vị trí của số khối A (chỉ số trên) và số hiệu Z (chỉ số dưới) trong kí hiệu nguyên tử."
    ],
    "reviewSuggestions": [
      "Đọc lại lý thuyết, quy trình giải và tự giải thích vì sao ba phương án còn lại không phù hợp."
    ]
  },
  {
    "id": "chem10-s2-reinforce-process",
    "questionId": "chem10-q2-reinforce-process",
    "recognition": "Kiểm tra khái niệm, quy trình hoặc ngộ nhận trọng tâm của dạng bài.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Đối chiếu kiến thức lõi",
        "explanation": "Quy trình đúng bắt đầu bằng: Bước 1: Xác định số hiệu nguyên tử $Z$ từ chỉ số dưới, và số khối $A$ từ chỉ số trên của kí hiệu nguyên tử."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Chọn phương án C."
      }
    ],
    "finalAnswer": "C",
    "commonMistakes": [
      "Nhầm lẫn vị trí của số khối A (chỉ số trên) và số hiệu Z (chỉ số dưới) trong kí hiệu nguyên tử."
    ],
    "reviewSuggestions": [
      "Đọc lại lý thuyết, quy trình giải và tự giải thích vì sao ba phương án còn lại không phù hợp."
    ]
  },
  {
    "id": "chem10-s2-reinforce-misconception",
    "questionId": "chem10-q2-reinforce-misconception",
    "recognition": "Kiểm tra khái niệm, quy trình hoặc ngộ nhận trọng tâm của dạng bài.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Đối chiếu kiến thức lõi",
        "explanation": "Đây là lỗi/ngộ nhận trọng yếu cần sửa: Nhầm lẫn vị trí của số khối A (chỉ số trên) và số hiệu Z (chỉ số dưới) trong kí hiệu nguyên tử."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Chọn phương án D."
      }
    ],
    "finalAnswer": "D",
    "commonMistakes": [
      "Nhầm lẫn vị trí của số khối A (chỉ số trên) và số hiệu Z (chỉ số dưới) trong kí hiệu nguyên tử."
    ],
    "reviewSuggestions": [
      "Đọc lại lý thuyết, quy trình giải và tự giải thích vì sao ba phương án còn lại không phù hợp."
    ]
  },
  {
    "id": "chem10-s3-reinforce-concept",
    "questionId": "chem10-q3-reinforce-concept",
    "recognition": "Kiểm tra khái niệm, quy trình hoặc ngộ nhận trọng tâm của dạng bài.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Đối chiếu kiến thức lõi",
        "explanation": "Trọng tâm cần nhớ: 1. Đồng vị: - Đồng vị là các nguyên tử có cùng số proton (cùng Z) nhưng khác số neutron (dẫn đến khác số khối A). - Ví dụ: Hydrogen có 3 đồng vị: $_{1}^{1}\\text{H}$ (Protium), $_{1}^{2}\\text{H}$ (Deuterium), $_{1}^{3}\\text{H}$ (Tritium)."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Chọn phương án C."
      }
    ],
    "finalAnswer": "C",
    "commonMistakes": [
      "Tính nguyên tử khối trung bình bằng cách lấy trung bình cộng đơn thuần của các số khối đồng vị (không nhân với phần trăm độ phổ biến)."
    ],
    "reviewSuggestions": [
      "Đọc lại lý thuyết, quy trình giải và tự giải thích vì sao ba phương án còn lại không phù hợp."
    ]
  },
  {
    "id": "chem10-s3-reinforce-process",
    "questionId": "chem10-q3-reinforce-process",
    "recognition": "Kiểm tra khái niệm, quy trình hoặc ngộ nhận trọng tâm của dạng bài.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Đối chiếu kiến thức lõi",
        "explanation": "Quy trình đúng bắt đầu bằng: Bước 1: Trích xuất các cặp dữ liệu (số khối $A_i$, tỷ lệ phần trăm $x_i\\%$) từ đề bài hoặc từ phổ khối lượng."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Chọn phương án D."
      }
    ],
    "finalAnswer": "D",
    "commonMistakes": [
      "Tính nguyên tử khối trung bình bằng cách lấy trung bình cộng đơn thuần của các số khối đồng vị (không nhân với phần trăm độ phổ biến)."
    ],
    "reviewSuggestions": [
      "Đọc lại lý thuyết, quy trình giải và tự giải thích vì sao ba phương án còn lại không phù hợp."
    ]
  },
  {
    "id": "chem10-s3-reinforce-misconception",
    "questionId": "chem10-q3-reinforce-misconception",
    "recognition": "Kiểm tra khái niệm, quy trình hoặc ngộ nhận trọng tâm của dạng bài.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Đối chiếu kiến thức lõi",
        "explanation": "Đây là lỗi/ngộ nhận trọng yếu cần sửa: Tính nguyên tử khối trung bình bằng cách lấy trung bình cộng đơn thuần của các số khối đồng vị (không nhân với phần trăm độ phổ biến)."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Chọn phương án A."
      }
    ],
    "finalAnswer": "A",
    "commonMistakes": [
      "Tính nguyên tử khối trung bình bằng cách lấy trung bình cộng đơn thuần của các số khối đồng vị (không nhân với phần trăm độ phổ biến)."
    ],
    "reviewSuggestions": [
      "Đọc lại lý thuyết, quy trình giải và tự giải thích vì sao ba phương án còn lại không phù hợp."
    ]
  },
  {
    "id": "chem10-s4-reinforce-concept",
    "questionId": "chem10-q4-reinforce-concept",
    "recognition": "Kiểm tra khái niệm, quy trình hoặc ngộ nhận trọng tâm của dạng bài.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Đối chiếu kiến thức lõi",
        "explanation": "Trọng tâm cần nhớ: 1. Mô hình Rutherford–Bohr: - Mô tả electron chuyển động xung quanh hạt nhân theo những quỹ đạo tròn hoặc bầu dục xác định, giống như các hành tinh quay quanh Mặt Trời. - Năng lượng của electron trên mỗi quỹ đạo là xác định. Khi hấp thụ hay giải phóng năng lượng, electron nhảy giữa các quỹ đạo."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Chọn phương án D."
      }
    ],
    "finalAnswer": "D",
    "commonMistakes": [
      "Nhầm lẫn orbital là một đường biên giới cứng hoặc đường tròn vật lý mà electron chạy dọc theo đó."
    ],
    "reviewSuggestions": [
      "Đọc lại lý thuyết, quy trình giải và tự giải thích vì sao ba phương án còn lại không phù hợp."
    ]
  },
  {
    "id": "chem10-s4-reinforce-process",
    "questionId": "chem10-q4-reinforce-process",
    "recognition": "Kiểm tra khái niệm, quy trình hoặc ngộ nhận trọng tâm của dạng bài.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Đối chiếu kiến thức lõi",
        "explanation": "Quy trình đúng bắt đầu bằng: Bước 1: Nắm rõ bản chất của mô hình Bohr: quỹ đạo xác định, tính chất cơ học cổ điển."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Chọn phương án A."
      }
    ],
    "finalAnswer": "A",
    "commonMistakes": [
      "Nhầm lẫn orbital là một đường biên giới cứng hoặc đường tròn vật lý mà electron chạy dọc theo đó."
    ],
    "reviewSuggestions": [
      "Đọc lại lý thuyết, quy trình giải và tự giải thích vì sao ba phương án còn lại không phù hợp."
    ]
  },
  {
    "id": "chem10-s4-reinforce-misconception",
    "questionId": "chem10-q4-reinforce-misconception",
    "recognition": "Kiểm tra khái niệm, quy trình hoặc ngộ nhận trọng tâm của dạng bài.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Đối chiếu kiến thức lõi",
        "explanation": "Đây là lỗi/ngộ nhận trọng yếu cần sửa: Nhầm lẫn orbital là một đường biên giới cứng hoặc đường tròn vật lý mà electron chạy dọc theo đó."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Chọn phương án B."
      }
    ],
    "finalAnswer": "B",
    "commonMistakes": [
      "Nhầm lẫn orbital là một đường biên giới cứng hoặc đường tròn vật lý mà electron chạy dọc theo đó."
    ],
    "reviewSuggestions": [
      "Đọc lại lý thuyết, quy trình giải và tự giải thích vì sao ba phương án còn lại không phù hợp."
    ]
  },
  {
    "id": "chem10-s5-reinforce-concept",
    "questionId": "chem10-q5-reinforce-concept",
    "recognition": "Kiểm tra khái niệm, quy trình hoặc ngộ nhận trọng tâm của dạng bài.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Đối chiếu kiến thức lõi",
        "explanation": "Trọng tâm cần nhớ: 1. Hình dạng orbital nguyên tử (AO): - AO s: Có dạng hình cầu, đối xứng trong không gian. - AO p: Có dạng hình số 8 nổi (hình quả tạ đôi), gồm 3 orbital định hướng theo 3 trục tọa độ: $p_x, p_y, p_z$."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Chọn phương án A."
      }
    ],
    "finalAnswer": "A",
    "commonMistakes": [
      "Nhầm lẫn lớp electron (ví dụ lớp 3) và phân lớp electron (ví dụ phân lớp 3p)."
    ],
    "reviewSuggestions": [
      "Đọc lại lý thuyết, quy trình giải và tự giải thích vì sao ba phương án còn lại không phù hợp."
    ]
  },
  {
    "id": "chem10-s5-reinforce-process",
    "questionId": "chem10-q5-reinforce-process",
    "recognition": "Kiểm tra khái niệm, quy trình hoặc ngộ nhận trọng tâm của dạng bài.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Đối chiếu kiến thức lõi",
        "explanation": "Quy trình đúng bắt đầu bằng: Bước 1: Xác định số lớp $n$ hoặc phân lớp cần xét."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Chọn phương án B."
      }
    ],
    "finalAnswer": "B",
    "commonMistakes": [
      "Nhầm lẫn lớp electron (ví dụ lớp 3) và phân lớp electron (ví dụ phân lớp 3p)."
    ],
    "reviewSuggestions": [
      "Đọc lại lý thuyết, quy trình giải và tự giải thích vì sao ba phương án còn lại không phù hợp."
    ]
  },
  {
    "id": "chem10-s5-reinforce-misconception",
    "questionId": "chem10-q5-reinforce-misconception",
    "recognition": "Kiểm tra khái niệm, quy trình hoặc ngộ nhận trọng tâm của dạng bài.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Đối chiếu kiến thức lõi",
        "explanation": "Đây là lỗi/ngộ nhận trọng yếu cần sửa: Nhầm lẫn lớp electron (ví dụ lớp 3) và phân lớp electron (ví dụ phân lớp 3p)."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Chọn phương án C."
      }
    ],
    "finalAnswer": "C",
    "commonMistakes": [
      "Nhầm lẫn lớp electron (ví dụ lớp 3) và phân lớp electron (ví dụ phân lớp 3p)."
    ],
    "reviewSuggestions": [
      "Đọc lại lý thuyết, quy trình giải và tự giải thích vì sao ba phương án còn lại không phù hợp."
    ]
  },
  {
    "id": "chem10-s6-reinforce-concept",
    "questionId": "chem10-q6-reinforce-concept",
    "recognition": "Kiểm tra khái niệm, quy trình hoặc ngộ nhận trọng tâm của dạng bài.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Đối chiếu kiến thức lõi",
        "explanation": "Trọng tâm cần nhớ: 1. Các nguyên lí và quy tắc phân bố electron: - Nguyên lí vững bền: Electron điền lần lượt vào các orbital từ mức năng lượng thấp đến cao: $1s \\rightarrow 2s \\rightarrow 2p \\rightarrow 3s \\rightarrow 3p \\rightarrow 4s \\rightarrow 3d...$ - Nguyên lí Pauli: Trong một ô orbital chỉ chứa tối đa 2 electron có chiều tự quay ngược nhau ($\\uparrow\\downarrow$). - Quy tắc Hund: Trong cùng một phân lớp, các electron phân bố sao cho số electron độc thân là tối đa và có chiều tự quay giống nhau ($\\uparrow \\ \\uparrow \\ \\uparrow$)."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Chọn phương án B."
      }
    ],
    "finalAnswer": "B",
    "commonMistakes": [
      "Viết cấu hình electron mà không sắp xếp lại các phân lớp theo lớp."
    ],
    "reviewSuggestions": [
      "Đọc lại lý thuyết, quy trình giải và tự giải thích vì sao ba phương án còn lại không phù hợp."
    ]
  },
  {
    "id": "chem10-s6-reinforce-process",
    "questionId": "chem10-q6-reinforce-process",
    "recognition": "Kiểm tra khái niệm, quy trình hoặc ngộ nhận trọng tâm của dạng bài.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Đối chiếu kiến thức lõi",
        "explanation": "Quy trình đúng bắt đầu bằng: Bước 1: Xác định số electron của nguyên tử (bằng Z) hoặc ion (Z hiệu chỉnh theo điện tích)."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Chọn phương án C."
      }
    ],
    "finalAnswer": "C",
    "commonMistakes": [
      "Viết cấu hình electron mà không sắp xếp lại các phân lớp theo lớp."
    ],
    "reviewSuggestions": [
      "Đọc lại lý thuyết, quy trình giải và tự giải thích vì sao ba phương án còn lại không phù hợp."
    ]
  },
  {
    "id": "chem10-s6-reinforce-misconception",
    "questionId": "chem10-q6-reinforce-misconception",
    "recognition": "Kiểm tra khái niệm, quy trình hoặc ngộ nhận trọng tâm của dạng bài.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Đối chiếu kiến thức lõi",
        "explanation": "Đây là lỗi/ngộ nhận trọng yếu cần sửa: Viết cấu hình electron mà không sắp xếp lại các phân lớp theo lớp."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Chọn phương án D."
      }
    ],
    "finalAnswer": "D",
    "commonMistakes": [
      "Viết cấu hình electron mà không sắp xếp lại các phân lớp theo lớp."
    ],
    "reviewSuggestions": [
      "Đọc lại lý thuyết, quy trình giải và tự giải thích vì sao ba phương án còn lại không phù hợp."
    ]
  },
  {
    "id": "chem10-s7-reinforce-concept",
    "questionId": "chem10-q7-reinforce-concept",
    "recognition": "Kiểm tra khái niệm, quy trình hoặc ngộ nhận trọng tâm của dạng bài.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Đối chiếu kiến thức lõi",
        "explanation": "Trọng tâm cần nhớ: 1. Số electron lớp ngoài cùng quyết định tính chất: - 1, 2, 3 e lớp ngoài cùng: Thường là Kim loại (dễ nhường e để đạt octet), trừ H, He và B. - 5, 6, 7 e lớp ngoài cùng: Thường là Phi kim (dễ nhận hoặc dùng chung e để đạt octet). - 8 e lớp ngoài cùng (và He có 2e): Là Khí hiếm (trạng thái cấu hình bền vững, trơ về mặt hóa học). - 4 e lớp ngoài cùng: Có thể là kim loại (nếu ở chu kì lớn như Pb, Sn) hoặc phi kim (nếu ở chu kì nhỏ như C, Si)."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Chọn phương án C."
      }
    ],
    "finalAnswer": "C",
    "commonMistakes": [
      "Đếm nhầm electron ở phân lớp sát ngoài cùng (như d) vào electron lớp ngoài cùng."
    ],
    "reviewSuggestions": [
      "Đọc lại lý thuyết, quy trình giải và tự giải thích vì sao ba phương án còn lại không phù hợp."
    ]
  },
  {
    "id": "chem10-s7-reinforce-process",
    "questionId": "chem10-q7-reinforce-process",
    "recognition": "Kiểm tra khái niệm, quy trình hoặc ngộ nhận trọng tâm của dạng bài.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Đối chiếu kiến thức lõi",
        "explanation": "Quy trình đúng bắt đầu bằng: Bước 1: Viết chính xác cấu hình electron nguyên tử."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Chọn phương án D."
      }
    ],
    "finalAnswer": "D",
    "commonMistakes": [
      "Đếm nhầm electron ở phân lớp sát ngoài cùng (như d) vào electron lớp ngoài cùng."
    ],
    "reviewSuggestions": [
      "Đọc lại lý thuyết, quy trình giải và tự giải thích vì sao ba phương án còn lại không phù hợp."
    ]
  },
  {
    "id": "chem10-s7-reinforce-misconception",
    "questionId": "chem10-q7-reinforce-misconception",
    "recognition": "Kiểm tra khái niệm, quy trình hoặc ngộ nhận trọng tâm của dạng bài.",
    "detailedSteps": [
      {
        "order": 1,
        "title": "Đối chiếu kiến thức lõi",
        "explanation": "Đây là lỗi/ngộ nhận trọng yếu cần sửa: Đếm nhầm electron ở phân lớp sát ngoài cùng (như d) vào electron lớp ngoài cùng."
      },
      {
        "order": 2,
        "title": "Kết luận",
        "explanation": "Chọn phương án A."
      }
    ],
    "finalAnswer": "A",
    "commonMistakes": [
      "Đếm nhầm electron ở phân lớp sát ngoài cùng (như d) vào electron lớp ngoài cùng."
    ],
    "reviewSuggestions": [
      "Đọc lại lý thuyết, quy trình giải và tự giải thích vì sao ba phương án còn lại không phù hợp."
    ]
  }
];
