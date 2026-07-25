import type { QuestionType } from '@/types';
import {
  chem10Qt22Theory,
  chem10Qt23Theory,
  chem10Qt24Theory,
  chem10Qt25Theory
} from './theory';

export const m5QuestionTypes: QuestionType[] = [
  {
    id: 'chem10-qt22', topicId: 'chem10-t5', name: 'Hệ, Môi trường & Tỏa–Thu nhiệt', slug: 'he-moi-truong-toa-thu-nhiet', description: 'Nhận diện hướng truyền năng lượng trong phản ứng.', exampleQuestionId: 'chem10-q22a', difficulty: 'easy', examFrequency: 'high',
    theory: chem10Qt22Theory,
    recognitionSigns: ['Nhiệt độ môi trường tăng/giảm.', 'Yêu cầu phân loại tỏa hoặc thu nhiệt.'], solvingSteps: ['Chọn ranh giới hệ.', 'Xác định hướng truyền nhiệt.', 'Kết luận tỏa hay thu nhiệt.'], commonMistakes: ['Đồng nhất nhiệt độ của hệ với nhiệt độ môi trường.']
  },
  {
    id: 'chem10-qt23', topicId: 'chem10-t5', name: 'Biến thiên Enthalpy & Sơ đồ Năng lượng', slug: 'bien-thien-enthalpy-so-do', description: 'Đọc và biểu diễn dấu ΔH.', exampleQuestionId: 'chem10-q23a', difficulty: 'medium', examFrequency: 'high',
    theory: chem10Qt23Theory,
    recognitionSigns: ['Cho sơ đồ mức năng lượng.', 'Đổi chiều hoặc nhân hệ số phương trình nhiệt hóa học.'], solvingSteps: ['So sánh mức năng lượng.', 'Tính sản phẩm trừ chất đầu.', 'Kiểm tra chiều và hệ số.'], commonMistakes: ['Đảo phản ứng nhưng giữ nguyên dấu.', 'Nhân hệ số mà không nhân ΔH.']
  },
  {
    id: 'chem10-qt24', topicId: 'chem10-t5', name: 'Enthalpy Tạo thành & ΔH Phản ứng', slug: 'enthalpy-tao-thanh', description: 'Tính ΔH từ dữ liệu tạo thành chuẩn.', exampleQuestionId: 'chem10-q24a', difficulty: 'medium', examFrequency: 'high',
    theory: chem10Qt24Theory,
    recognitionSigns: ['Cho bảng ΔfH°.', 'Yêu cầu tính nhiệt phản ứng.'], solvingSteps: ['Cân bằng phương trình.', 'Nhân mỗi giá trị với hệ số.', 'Lấy tổng sản phẩm trừ tổng chất đầu.'], commonMistakes: ['Bỏ hệ số.', 'Đảo thứ tự chất đầu và sản phẩm.']
  },
  {
    id: 'chem10-qt25', topicId: 'chem10-t5', name: 'Năng lượng Liên kết & ΔH', slug: 'nang-luong-lien-ket', description: 'Ước tính ΔH bằng liên kết bị phá và được tạo.', exampleQuestionId: 'chem10-q25a', difficulty: 'medium', examFrequency: 'high',
    theory: chem10Qt25Theory,
    recognitionSigns: ['Cho bảng năng lượng liên kết.', 'Phản ứng ở pha khí với cấu tạo liên kết rõ.'], solvingSteps: ['Đếm liên kết bị phá.', 'Đếm liên kết được tạo.', 'Tính phá trừ tạo và xét dấu.'], commonMistakes: ['Dùng tạo trừ phá.', 'Đếm sai số liên kết theo hệ số.']
  }
];
