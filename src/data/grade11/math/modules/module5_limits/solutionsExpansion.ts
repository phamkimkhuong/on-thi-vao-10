import type { CourseSolution } from '@/data/schema';
import { g11MathModule5ExpansionSolutionData } from './questionsExpansion';

export const g11MathModule5ExpansionSolutions: CourseSolution[] =
  g11MathModule5ExpansionSolutionData.map(data => ({
    id: `math11-s${data.number}`,
    courseId: 'grade11:math',
    moduleId: 'math11-m5',
    questionId: `math11-q${data.number}`,
    recognition:
      data.questionTypeNumber === 15
        ? 'Xác định loại dãy, dạng phân thức hoặc cấp số nhân lùi trước khi chọn phép biến đổi.'
        : data.questionTypeNumber === 16
          ? 'Kiểm tra dạng giới hạn, chiều tiến tới và dấu trước khi rút gọn hoặc nhân liên hợp.'
          : 'Đối chiếu tập xác định, giới hạn hai phía và giá trị hàm tại điểm cần xét.',
    detailedSteps: [
      { order: 1, title: 'Phân tích và tính toán', explanation: data.reasoning },
      { order: 2, title: 'Kết luận', explanation: `Kết quả cần chọn hoặc nhập là ${data.result}.` }
    ],
    finalAnswer: data.answer,
    commonMistakes: [
      data.questionTypeNumber === 15
        ? 'Chỉ nhìn dạng biểu thức mà không kiểm tra điều kiện hội tụ hoặc dấu của dãy.'
        : data.questionTypeNumber === 16
          ? 'Thay trực tiếp vào dạng vô định hoặc quên xét giới hạn một phía.'
          : 'Chỉ kiểm tra giới hạn mà bỏ tập xác định hoặc giá trị của hàm tại điểm.'
    ],
    reviewSuggestions: ['Làm lại phép biến đổi và nêu rõ điều kiện áp dụng ở mỗi bước.']
  }));
