import type { QuestionType } from '@/types';
import {
  chem10Qt35Theory,
  chem10Qt36Theory,
  chem10Qt37Theory,
  chem10Qt38Theory
} from './theory';

export const m8QuestionTypes: QuestionType[] = [
  {
    id: 'chem10-qt35', topicId: 'chem10-t8', name: 'Tổng hợp Cấu tạo – Tính chất', slug: 'tong-hop-cau-tao-tinh-chat', description: 'Kết nối cấu hình electron, vị trí, liên kết và tính chất.', exampleQuestionId: 'chem10-q35a', difficulty: 'hard', examFrequency: 'high',
    theory: chem10Qt35Theory,
    recognitionSigns: ['Một câu hỏi chứa dữ kiện từ nhiều chương cấu tạo.'], solvingSteps: ['Suy cấu hình và vị trí.', 'Dự đoán ion/liên kết.', 'Kiểm tra tính chất hệ quả.'], commonMistakes: ['Trả lời từng dữ kiện rời rạc mà không nối quan hệ nhân–quả.']
  },
  {
    id: 'chem10-qt36', topicId: 'chem10-t8', name: 'Tổng hợp Phản ứng – Năng lượng', slug: 'tong-hop-phan-ung-nang-luong', description: 'Kết nối oxi hóa–khử, hệ số và biến thiên enthalpy.', exampleQuestionId: 'chem10-q36a', difficulty: 'hard', examFrequency: 'high',
    theory: chem10Qt36Theory,
    recognitionSigns: ['Phản ứng kèm ΔH hoặc dữ liệu liên kết.'], solvingSteps: ['Cân bằng electron.', 'Chuẩn hóa phương trình.', 'Tính và diễn giải dấu ΔH.'], commonMistakes: ['Dùng ΔH trước khi khớp hệ số phản ứng.']
  },
  {
    id: 'chem10-qt37', topicId: 'chem10-t8', name: 'Đọc Dữ liệu & Thiết kế Thí nghiệm', slug: 'du-lieu-thi-nghiem', description: 'Đọc bảng, đồ thị và đánh giá thiết kế kiểm chứng.', exampleQuestionId: 'chem10-q37a', difficulty: 'hard', examFrequency: 'high',
    theory: chem10Qt37Theory,
    recognitionSigns: ['Có bảng số liệu, đồ thị hoặc mô tả thí nghiệm.'], solvingSteps: ['Xác định câu hỏi và biến.', 'Đọc xu hướng/ngoại lệ.', 'Chọn kết luận hẹp nhất được hỗ trợ.'], commonMistakes: ['Suy diễn lượng sản phẩm từ dữ liệu tốc độ.']
  },
  {
    id: 'chem10-qt38', topicId: 'chem10-t8', name: 'Đánh giá Tổng hợp Cuối khóa', slug: 'danh-gia-tong-hop-cuoi-khoa', description: 'Câu hỏi tích hợp toàn bộ Hóa học 10 cốt lõi.', exampleQuestionId: 'chem10-q38a', difficulty: 'hard', examFrequency: 'high',
    theory: chem10Qt38Theory,
    recognitionSigns: ['Tình huống có từ ba mạch kiến thức trở lên.'], solvingSteps: ['Tách dữ kiện theo mạch.', 'Xác định quan hệ phụ thuộc.', 'Loại phát biểu sai bản chất.', 'Kiểm tra kết luận.'], commonMistakes: ['Chọn phát biểu có một phần đúng nhưng kết luận vượt dữ kiện.']
  }
];
