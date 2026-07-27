import type { CourseSolution } from '@/data/schema';
import { g11MathModule6ExpansionSolutionData } from './questionsExpansion';

export const g11MathModule6ExpansionSolutions:CourseSolution[]=
  g11MathModule6ExpansionSolutionData.map(data=>({
    id:`math11-s${data.number}`,courseId:'grade11:math',moduleId:'math11-m6',
    questionId:`math11-q${data.number}`,
    recognition:data.questionTypeNumber===18
      ?'Đưa căn và lũy thừa về cùng cơ số, đồng thời kiểm tra điều kiện của số mũ thực.'
      :data.questionTypeNumber===19
        ?'Kiểm tra điều kiện lôgarit rồi chọn định nghĩa, tính chất hoặc đổi cơ số.'
        :data.questionTypeNumber===20
          ?'Nhận dạng tính chất đồ thị hoặc mô hình tăng trưởng theo tỉ lệ qua từng chu kì.'
          :'Đặt điều kiện, xét tính đơn điệu của cơ số rồi biến đổi phương trình hoặc bất phương trình.',
    detailedSteps:[
      {order:1,title:'Phân tích và tính toán',explanation:data.reasoning},
      {order:2,title:'Kết luận',explanation:`Kết quả cần chọn hoặc nhập là ${data.result}.`}
    ],
    finalAnswer:data.answer,
    commonMistakes:[data.questionTypeNumber<=19
      ?'Biến đổi số mũ hoặc lôgarit mà bỏ điều kiện xác định.'
      :'Không xét cơ số tăng–giảm, số chu kì hoặc điều kiện của nghiệm.'],
    reviewSuggestions:['Đối chiếu công thức và kiểm tra lại nghiệm trong miền xác định.']
  }));
