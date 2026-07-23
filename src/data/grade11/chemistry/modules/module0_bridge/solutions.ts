import type { Solution } from '@/types';

export const g11ChemistryBridgeSolutions: Solution[] = [
  {
    id: 'chem11-bridge-s01',
    questionId: 'chem11-bridge-q01',
    recognition: 'Dạng cầu nối “cân bằng phương trình”: dấu hiệu là số nguyên tử ở hai vế chưa bằng nhau. Chỉ đặt hệ số trước công thức, không sửa chỉ số.',
    detailedSteps: [
      { order: 1, title: 'Bảo toàn nitrogen', explanation: 'Đặt hệ số 2 trước $NH_3$ để hai vế cùng có 2 nguyên tử N.' },
      { order: 2, title: 'Bảo toàn hydrogen', explanation: 'Vế phải có 6 H nên đặt hệ số 3 trước $H_2$. Thu được $N_2+3H_2\\rightarrow2NH_3$.' }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Sửa $NH_3$ thành một công thức khác.', 'Không rút hệ số về bộ số nguyên tối giản.'],
    reviewSuggestions: ['Ôn cầu nối: hệ số và chỉ số trong phương trình hóa học.']
  },
  {
    id: 'chem11-bridge-s02',
    questionId: 'chem11-bridge-q02',
    recognition: 'Dạng nhận diện nguyên tắc cân bằng: cần phân biệt hệ số đứng trước công thức với chỉ số nằm trong công thức.',
    detailedSteps: [
      { order: 1, title: 'Giữ nguyên chất', explanation: 'Chỉ số là một phần của công thức và quyết định chất đang xét, nên không được thay đổi.' },
      { order: 2, title: 'Bảo toàn nguyên tố', explanation: 'Đặt hệ số sao cho số nguyên tử của từng nguyên tố bằng nhau ở hai vế.' }
    ],
    finalAnswer: 'C',
    commonMistakes: ['Chọn phương án A vì chỉ kiểm tra số nguyên tử mà quên bản chất chất.'],
    reviewSuggestions: ['Ôn cầu nối: bảo toàn nguyên tố.']
  },
  {
    id: 'chem11-bridge-s03',
    questionId: 'chem11-bridge-q03',
    recognition: 'Dạng tính nồng độ mol: đề cho số mol và thể tích dung dịch. Phải đổi mL sang L trước khi dùng $C_M=n/V$.',
    detailedSteps: [
      { order: 1, title: 'Đổi đơn vị', explanation: '$500\\,\\mathrm{mL}=0{,}500\\,\\mathrm{L}$.' },
      { order: 2, title: 'Tính nồng độ', explanation: '$C_M=0{,}20/0{,}500=0{,}40\\,\\mathrm{M}$.' }
    ],
    finalAnswer: 'C',
    commonMistakes: ['Dùng 500 trực tiếp làm mẫu số.', 'Đảo công thức thành $V/n$.'],
    reviewSuggestions: ['Ôn cầu nối: nồng độ mol và đổi đơn vị thể tích.']
  },
  {
    id: 'chem11-bridge-s04',
    questionId: 'chem11-bridge-q04',
    recognition: 'Dạng đọc bảng nồng độ–thời gian: tìm đoạn các giá trị liên tiếp không còn thay đổi đáng kể; không được đồng nhất nồng độ với tốc độ.',
    detailedSteps: [
      { order: 1, title: 'So sánh dữ liệu', explanation: 'Từ 30 s đến 40 s, nồng độ đều bằng $0{,}25$ M.' },
      { order: 2, title: 'Kết luận đúng phạm vi', explanation: 'Dữ liệu cho thấy nồng độ bắt đầu ổn định, nhưng chưa đủ để nói mọi quá trình vi mô đã dừng.' }
    ],
    finalAnswer: 'A',
    commonMistakes: ['Gọi giá trị nồng độ là tốc độ.', 'Suy ra phản ứng dừng chỉ vì đại lượng vĩ mô ổn định.'],
    reviewSuggestions: ['Ôn cầu nối: đọc bảng và phân biệt nồng độ với tốc độ.']
  },
  {
    id: 'chem11-bridge-s05',
    questionId: 'chem11-bridge-q05',
    recognition: 'Dạng nhận diện tỏa–thu nhiệt: dấu âm của $\\Delta H$ cho biết hệ giải phóng năng lượng ra môi trường.',
    detailedSteps: [
      { order: 1, title: 'Đọc dấu', explanation: '$\\Delta H=-92$ kJ nhỏ hơn 0 nên chiều thuận là chiều tỏa nhiệt.' },
      { order: 2, title: 'Gắn với phương trình', explanation: 'Khi phản ứng diễn ra đúng theo hệ số đã viết, hệ giải phóng 92 kJ.' }
    ],
    finalAnswer: 'B',
    commonMistakes: ['Nhầm dấu âm là hệ thiếu nhiệt nên phải hấp thụ nhiệt.'],
    reviewSuggestions: ['Ôn Hóa 10: biến thiên enthalpy của phản ứng.']
  },
  {
    id: 'chem11-bridge-s06',
    questionId: 'chem11-bridge-q06',
    recognition: 'Dạng logarit cơ số 10: nếu đối số là $10^k$ thì $\\lg(10^k)=k$, sau đó mới xử lý dấu trừ bên ngoài.',
    detailedSteps: [
      { order: 1, title: 'Tính logarit', explanation: '$\\lg(10^{-4})=-4$.' },
      { order: 2, title: 'Xử lý dấu trừ', explanation: '$-\\lg(10^{-4})=-(-4)=4$.' }
    ],
    finalAnswer: 'D',
    commonMistakes: ['Bỏ dấu trừ ngoài logarit và chọn $-4$.'],
    reviewSuggestions: ['Ôn Toán cầu nối: logarit thập phân trước phần pH.']
  }
];
