import { QuestionType } from '@/types';

export const g10MathQuestionTypes: QuestionType[] = [
  {
    id: 'math10-qt1',
    topicId: 'math10-t1',
    name: 'Giao, hợp và hiệu của các khoảng, đoạn số học',
    slug: 'giao-hop-hieu-khoang-doan',
    description: 'Tìm giao, hợp, hiệu của các tập hợp số biểu diễn dưới dạng khoảng, đoạn, nửa khoảng trên trục số. Đây là phần cơ bản xuất hiện trong tất cả các bài kiểm tra khảo sát chất lượng đầu năm lớp 10.',
    exampleQuestionId: 'math10-q1',
    recognitionSigns: [
      'Đề bài yêu cầu tìm tập hợp $A \\cap B$, $A \\cup B$, $A \\setminus B$ hoặc $C_{\\mathbb{R}}A$.',
      'Các tập hợp $A, B$ được cho dưới dạng khoảng $(a; b)$, đoạn $[a; b]$, hoặc nửa khoảng $[a; b)$, $(a; b]$.'
    ],
    solvingSteps: [
      'Bước 1: Vẽ trục số thực $\\mathbb{R}$.',
      'Bước 2: Biểu diễn các tập hợp trên cùng một trục số (sử dụng các ký hiệu ngoặc tròn, ngoặc vuông tương ứng).',
      'Bước 3: Dùng các quy tắc giao (lấy phần chung), hợp (lấy tất cả), hiệu (lấy phần thuộc tập này nhưng không thuộc tập kia) để xác định tập hợp kết quả.',
      'Bước 4: Viết kết quả dưới dạng khoảng, đoạn, nửa khoảng chuẩn.'
    ],
    commonMistakes: [
      'Lẫn lộn giữa ngoặc tròn (không lấy điểm biên) và ngoặc vuông (có lấy điểm biên).',
      'Khi tính hiệu $A \\setminus B$, quên đảo ngược dấu ngoặc tại các điểm biên của $B$.'
    ],
    difficulty: 'easy',
    examFrequency: 'high'
  }
];
