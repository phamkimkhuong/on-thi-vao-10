import type { QuestionType } from '@/types';
import {
  chem10Qt18Theory,
  chem10Qt19Theory,
  chem10Qt20Theory,
  chem10Qt21Theory
} from './theory';

export const m4QuestionTypes: QuestionType[] = [
  {
    id: 'chem10-qt18', topicId: 'chem10-t4', name: 'Số oxi hóa', slug: 'so-oxi-hoa', description: 'Xác định số oxi hóa của nguyên tố trong hợp chất và ion.', exampleQuestionId: 'chem10-q18a', difficulty: 'easy', examFrequency: 'high', theory: chem10Qt18Theory, recognitionSigns: ['Yêu cầu tìm số oxi hóa của một nguyên tố.', 'Cho công thức chất hoặc ion.'], solvingSteps: ['Đặt ẩn x cho số oxi hóa cần tìm.', 'Thay các số oxi hóa đã biết theo quy tắc.', 'Lập phương trình tổng bằng 0 hoặc bằng điện tích ion và giải x.'], commonMistakes: ['Nhầm dấu (+) và (−).', 'Quên nhân hệ số chỉ số nguyên tử.']
  },
  {
    id: 'chem10-qt19', topicId: 'chem10-t4', name: 'Quá trình Oxi hóa & Quá trình Khử', slug: 'qua-trinh-oxi-hoa-khu', description: 'Phân biệt quá trình nhường và nhận electron.', exampleQuestionId: 'chem10-q19a', difficulty: 'easy', examFrequency: 'high', theory: chem10Qt19Theory, recognitionSigns: ['Viết bán phản ứng electron.', 'Yêu cầu gọi tên quá trình.'], solvingSteps: ['Xác định số oxi hóa trước và sau.', 'Tính số electron chênh lệch.', 'Viết e ở vế có số oxi hóa cao hơn.', 'Gọi tên: nhường e là oxi hóa; nhận e là khử.'], commonMistakes: ['Gọi quá trình nhường electron là quá trình khử.']
  },
  {
    id: 'chem10-qt20', topicId: 'chem10-t4', name: 'Chất Oxi hóa & Chất khử', slug: 'chat-oxi-hoa-chat-khu', description: 'Xác định vai trò của các chất trong phản ứng redox.', exampleQuestionId: 'chem10-q20a', difficulty: 'medium', examFrequency: 'high', theory: chem10Qt20Theory, recognitionSigns: ['Yêu cầu chỉ ra chất oxi hóa/chất khử.', 'Cho phản ứng có số oxi hóa thay đổi.'], solvingSteps: ['Theo dõi nguyên tố thay đổi trong từng chất.', 'Chất chứa nguyên tố giảm số oxi hóa là chất oxi hóa.', 'Chất chứa nguyên tố tăng số oxi hóa là chất khử.'], commonMistakes: ['Gọi chất bị oxi hóa là chất oxi hóa.']
  },
  {
    id: 'chem10-qt21', topicId: 'chem10-t4', name: 'Cân bằng bằng Phương pháp Electron', slug: 'can-bang-phuong-phap-electron', description: 'Cân bằng hệ số dựa trên bảo toàn electron.', exampleQuestionId: 'chem10-q21a', difficulty: 'medium', examFrequency: 'high', theory: chem10Qt21Theory, recognitionSigns: ['Phản ứng có nguyên tố đổi số oxi hóa.', 'Yêu cầu cân bằng theo electron.'], solvingSteps: ['Xác định số oxi hóa thay đổi.', 'Viết quá trình nhường và nhận electron.', 'Nhân hệ số để bảo toàn electron.', 'Đặt hệ số và cân bằng phần còn lại.', 'Kiểm tra nguyên tử.'], commonMistakes: ['Thay chỉ số trong công thức.', 'Bảo toàn electron nhưng quên kiểm tra nguyên tử khác.']
  }
];
