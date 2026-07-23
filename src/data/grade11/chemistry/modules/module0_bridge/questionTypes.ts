import type { QuestionType } from '@/types';

export const g11ChemistryBridgeQuestionTypes: QuestionType[] = [
  {
    id: 'chem11-bridge-qt-equation',
    topicId: 'chem11-t0',
    name: 'Phương trình hóa học và nồng độ mol',
    slug: 'phuong-trinh-hoa-hoc-nong-do-mol',
    description: 'Chẩn đoán khả năng đọc hệ số, trạng thái chất, cân bằng phương trình và tính nồng độ mol trước khi học hằng số cân bằng.',
    recognitionSigns: [
      'Có phương trình hóa học, số mol, thể tích hoặc nồng độ mol.',
      'Cần kiểm tra bảo toàn nguyên tố hoặc tỉ lệ hệ số.'
    ],
    solvingSteps: [
      'Kiểm tra phương trình đã cân bằng và phân biệt hệ số với chỉ số.',
      'Đổi dữ kiện về mol; sử dụng $C_M=n/V$ khi cần.',
      'Giữ đơn vị thể tích là lít trước khi tính nồng độ.'
    ],
    commonMistakes: [
      'Thay đổi chỉ số trong công thức để cân bằng phương trình.',
      'Dùng mililít trực tiếp trong công thức $C_M=n/V$.'
    ],
    difficulty: 'easy',
    examFrequency: 'high',
    subTypes: [
      {
        id: 'chem11-bridge-st-equation',
        name: 'Đọc và cân bằng phương trình',
        example: 'Cân bằng $N_2+H_2\\rightarrow NH_3$.',
        recognitionSigns: ['Số nguyên tử của một nguyên tố chưa bằng nhau ở hai vế.'],
        targetQuestionCount: 3
      },
      {
        id: 'chem11-bridge-st-concentration',
        name: 'Tính nồng độ mol',
        example: 'Tính nồng độ của 0,20 mol chất tan trong 500 mL dung dịch.',
        recognitionSigns: ['Cho số mol và thể tích dung dịch.'],
        targetQuestionCount: 3
      }
    ]
  },
  {
    id: 'chem11-bridge-qt-rate-energy',
    topicId: 'chem11-t0',
    name: 'Tốc độ phản ứng và dấu enthalpy',
    slug: 'toc-do-phan-ung-dau-enthalpy',
    description: 'Chẩn đoán khả năng phân biệt tốc độ với nồng độ và nhận diện phản ứng tỏa nhiệt, thu nhiệt.',
    recognitionSigns: [
      'Có đồ thị hoặc mô tả nồng độ thay đổi theo thời gian.',
      'Có giá trị $\\Delta H$ hoặc yêu cầu xác định chiều tỏa/thu nhiệt.'
    ],
    solvingSteps: [
      'Xác định đại lượng đang được mô tả: nồng độ, tốc độ hay năng lượng.',
      'Dùng dấu của $\\Delta H$: âm là tỏa nhiệt, dương là thu nhiệt.',
      'Không suy ra vị trí cân bằng chỉ từ việc phản ứng diễn ra nhanh hay chậm.'
    ],
    commonMistakes: [
      'Đồng nhất tốc độ phản ứng với nồng độ chất.',
      'Cho rằng $\\Delta H<0$ là phản ứng thu nhiệt.'
    ],
    difficulty: 'easy',
    examFrequency: 'high',
    subTypes: [
      {
        id: 'chem11-bridge-st-rate',
        name: 'Đọc xu hướng nồng độ–thời gian',
        example: 'Nhận xét thời điểm nồng độ bắt đầu ổn định.',
        recognitionSigns: ['Có nhiều giá trị nồng độ theo các thời điểm.'],
        targetQuestionCount: 3
      },
      {
        id: 'chem11-bridge-st-enthalpy',
        name: 'Phân biệt tỏa nhiệt và thu nhiệt',
        example: 'Phản ứng có $\\Delta H=-92\\,\\mathrm{kJ}$ thuộc loại nào?',
        recognitionSigns: ['Đề cho dấu của $\\Delta H$.'],
        targetQuestionCount: 3
      }
    ]
  },
  {
    id: 'chem11-bridge-qt-logarithm',
    topicId: 'chem11-t0',
    name: 'Lũy thừa 10 và logarit dùng cho pH',
    slug: 'luy-thua-10-logarit-ph',
    description: 'Chẩn đoán kỹ năng đổi giữa $10^{-a}$ và $-\\lg x$, là tiền đề trực tiếp của phần pH.',
    recognitionSigns: [
      'Có biểu thức $10^{-a}$, $\\lg x$ hoặc công thức $pH=-\\lg[H^+]$.'
    ],
    solvingSteps: [
      'Đưa số về dạng $10^{-a}$ nếu có thể.',
      'Dùng $\\lg(10^k)=k$ và chú ý dấu trừ phía trước logarit.',
      'Kiểm tra: nồng độ $H^+$ nhỏ hơn thì pH phải lớn hơn.'
    ],
    commonMistakes: [
      'Bỏ dấu trừ trong công thức pH.',
      'Cho rằng pH tỉ lệ tuyến tính với nồng độ ion hydrogen.'
    ],
    difficulty: 'medium',
    examFrequency: 'high',
    subTypes: [
      {
        id: 'chem11-bridge-st-log',
        name: 'Đổi lũy thừa 10 và logarit',
        example: 'Tính $-\\lg(10^{-3})$.',
        recognitionSigns: ['Số được viết dưới dạng lũy thừa cơ số 10.'],
        targetQuestionCount: 3
      }
    ]
  }
];
