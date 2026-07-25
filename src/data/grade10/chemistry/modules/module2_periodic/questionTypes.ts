import type { QuestionType } from '@/types';
import {
  chem10Qt10Theory,
  chem10Qt11Theory,
  chem10Qt12Theory,
  chem10Qt8Theory,
  chem10Qt9Theory
} from './theory';

export const m2QuestionTypes: QuestionType[] = [
  {
    id: 'chem10-qt8', topicId: 'chem10-t2', name: 'Ô nguyên tố, Chu kì & Nhóm', slug: 'o-nguyen-to-chu-ki-nhom', description: 'Đọc vị trí và cấu trúc cơ bản của bảng tuần hoàn.', exampleQuestionId: 'chem10-q8a', difficulty: 'easy', examFrequency: 'high',
    theory: chem10Qt8Theory,
    recognitionSigns: ['Yêu cầu xác định ô, chu kì hoặc nhóm.', 'Cho vị trí và yêu cầu suy ra đặc điểm cấu tạo.'], solvingSteps: ['Xác định Z của ô nguyên tố.', 'Đếm số lớp electron để tìm chu kì.', 'Với nguyên tố nhóm A, xét electron lớp ngoài cùng để tìm nhóm.'], commonMistakes: ['Nhầm số thứ tự chu kì với tổng số electron.', 'Cho rằng mọi nguyên tố cùng chu kì có tính chất giống nhau.']
  },
  {
    id: 'chem10-qt9', topicId: 'chem10-t2', name: 'Cấu hình electron & Vị trí trong bảng tuần hoàn', slug: 'cau-hinh-electron-vi-tri', description: 'Suy ra vị trí nguyên tố từ cấu hình electron và thực hiện chiều ngược lại.', exampleQuestionId: 'chem10-q9a', difficulty: 'medium', examFrequency: 'high',
    theory: chem10Qt9Theory,
    recognitionSigns: ['Đề cho cấu hình electron và hỏi vị trí.', 'Đề cho chu kì, nhóm và hỏi cấu hình lớp ngoài cùng.'], solvingSteps: ['Kiểm tra tổng electron bằng Z.', 'Tìm số n lớn nhất để xác định chu kì.', 'Đếm electron lớp ngoài cùng để xác định nhóm A.'], commonMistakes: ['Chỉ nhìn phân lớp cuối mà bỏ qua toàn bộ lớp ngoài cùng.']
  },
  {
    id: 'chem10-qt10', topicId: 'chem10-t2', name: 'Xu hướng Bán kính nguyên tử', slug: 'xu-huong-ban-kinh-nguyen-tu', description: 'So sánh và giải thích bán kính nguyên tử trong chu kì, nhóm.', exampleQuestionId: 'chem10-q10a', difficulty: 'medium', examFrequency: 'high',
    theory: chem10Qt10Theory,
    recognitionSigns: ['Yêu cầu sắp xếp bán kính.', 'Yêu cầu giải thích xu hướng trong chu kì hoặc nhóm.'], solvingSteps: ['Xác định các nguyên tố cùng chu kì hay cùng nhóm.', 'So sánh số lớp electron trước.', 'Nếu cùng số lớp, so sánh lực hút hạt nhân.'], commonMistakes: ['Học thuộc mũi tên nhưng áp dụng sai khi các nguyên tố không cùng chu kì hoặc nhóm.']
  },
  {
    id: 'chem10-qt11', topicId: 'chem10-t2', name: 'Độ âm điện & Tính Kim loại–Phi kim', slug: 'do-am-dien-kim-loai-phi-kim', description: 'Giải thích xu hướng hút electron và tính chất nguyên tố.', exampleQuestionId: 'chem10-q11a', difficulty: 'medium', examFrequency: 'high',
    theory: chem10Qt11Theory,
    recognitionSigns: ['So sánh độ âm điện.', 'Sắp xếp tính kim loại hoặc phi kim.'], solvingSteps: ['Xác định vị trí tương đối.', 'Liên hệ bán kính và lực hút hạt nhân.', 'Suy ra khả năng nhường hoặc hút electron.'], commonMistakes: ['Đồng nhất độ âm điện với ái lực electron hoặc khả năng nhận electron tự do trong mọi tình huống.']
  },
  {
    id: 'chem10-qt12', topicId: 'chem10-t2', name: 'Oxide, Hydroxide & Định luật tuần hoàn', slug: 'oxide-hydroxide-dinh-luat-tuan-hoan', description: 'Dự đoán xu hướng acid–base của hợp chất và phát biểu định luật tuần hoàn.', exampleQuestionId: 'chem10-q12a', difficulty: 'medium', examFrequency: 'high',
    theory: chem10Qt12Theory,
    recognitionSigns: ['So sánh tính acid–base của oxide/hydroxide.', 'Yêu cầu phát biểu hoặc vận dụng định luật tuần hoàn.'], solvingSteps: ['Xác định vị trí trong chu kì.', 'Suy ra tính kim loại–phi kim.', 'Liên hệ với tính base–acid của hợp chất.'], commonMistakes: ['Cho rằng mọi oxide kim loại đều chỉ có tính base hoặc mọi oxide phi kim đều có cùng độ acid.']
  }
];
