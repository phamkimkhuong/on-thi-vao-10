import type { QuestionType } from '@/types';
import {
  chem10Qt30Theory,
  chem10Qt31Theory,
  chem10Qt32Theory,
  chem10Qt33Theory,
  chem10Qt34Theory
} from './theory';

export const m7QuestionTypes: QuestionType[] = [
  {
    id: 'chem10-qt30', topicId: 'chem10-t7', name: 'Vị trí & Xu hướng Halogen', slug: 'xu-huong-halogen', description: 'Giải thích cấu hình và xu hướng nhóm VIIA.', exampleQuestionId: 'chem10-q30a', difficulty: 'easy', examFrequency: 'high',
    theory: chem10Qt30Theory,
    recognitionSigns: ['So sánh F, Cl, Br, I.'], solvingSteps: ['Xét cấu hình.', 'Xét bán kính.', 'Suy xu hướng.'], commonMistakes: ['Cho rằng mọi tính chất tăng cùng chiều.']
  },
  {
    id: 'chem10-qt31', topicId: 'chem10-t7', name: 'Tính Oxi hóa & Phản ứng Thế', slug: 'the-halogen', description: 'Dự đoán phản ứng halogen–halide.', exampleQuestionId: 'chem10-q31a', difficulty: 'medium', examFrequency: 'high',
    theory: chem10Qt31Theory,
    recognitionSigns: ['Halogen gặp muối halide.'], solvingSteps: ['Xếp tính oxi hóa.', 'Chọn chiều phản ứng.', 'Cân bằng electron.'], commonMistakes: ['Đảo chiều phản ứng thế.']
  },
  {
    id: 'chem10-qt32', topicId: 'chem10-t7', name: 'Phản ứng Đặc trưng Halogen', slug: 'phan-ung-halogen', description: 'Phản ứng với H2, nước và kiềm.', exampleQuestionId: 'chem10-q32a', difficulty: 'medium', examFrequency: 'high',
    theory: chem10Qt32Theory,
    recognitionSigns: ['Halogen gặp H2, nước, NaOH.'], solvingSteps: ['Xác định điều kiện.', 'Theo dõi số oxi hóa.', 'Cân bằng.'], commonMistakes: ['Bỏ qua điều kiện phản ứng.']
  },
  {
    id: 'chem10-qt33', topicId: 'chem10-t7', name: 'Hydrogen Halide & Acid', slug: 'hydrogen-halide', description: 'So sánh HF, HCl, HBr, HI.', exampleQuestionId: 'chem10-q33a', difficulty: 'medium', examFrequency: 'high',
    theory: chem10Qt33Theory,
    recognitionSigns: ['So sánh HX.'], solvingSteps: ['Xét độ bền H–X.', 'Xét phân li.', 'Xét khả năng nhường electron.'], commonMistakes: ['Suy acid mạnh chỉ từ độ âm điện.']
  },
  {
    id: 'chem10-qt34', topicId: 'chem10-t7', name: 'Nhận biết Ion Halide', slug: 'nhan-biet-halide', description: 'Nhận biết bằng ion bạc.', exampleQuestionId: 'chem10-q34a', difficulty: 'medium', examFrequency: 'high',
    theory: chem10Qt34Theory,
    recognitionSigns: ['Thêm AgNO3 vào halide.'], solvingSteps: ['Xác định ion.', 'Dự đoán kết tủa.', 'Viết phương trình ion.'], commonMistakes: ['Nhớ màu nhưng nhầm ion.']
  }
];
