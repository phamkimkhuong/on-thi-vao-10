import type { CourseQuestionType } from '@/data/schema';
const specs=[
  {n:15,l:15,name:'Dạng 15: Giới hạn dãy số',slug:'gioi-han-day-so',desc:'Tính giới hạn hữu hạn, vô cực và tổng cấp số nhân lùi vô hạn.',subs:[['math11-qt15-st-finite','Giới hạn hữu hạn','Tính giới hạn phân thức theo $n$.'],['math11-qt15-st-infinite','Giới hạn vô cực và tổng vô hạn','Xét dấu vô cực hoặc tính tổng nhân lùi.']],reps:['equation','text']},
  {n:16,l:16,name:'Dạng 16: Giới hạn hàm số',slug:'gioi-han-ham-so',desc:'Tính giới hạn tại điểm, một phía, tại vô cực và giới hạn vô cực.',subs:[['math11-qt16-st-point','Giới hạn tại điểm và một phía','Thay trực tiếp hoặc khử dạng $0/0$.'],['math11-qt16-st-infinity','Giới hạn tại vô cực','So sánh bậc và xét dấu.']],reps:['equation','graph']},
  {n:17,l:17,name:'Dạng 17: Hàm số liên tục',slug:'ham-so-lien-tuc',desc:'Xét liên tục tại điểm, trên miền và xác định tham số để hàm ghép liên tục.',subs:[['math11-qt17-st-point','Liên tục tại một điểm','So sánh giới hạn với giá trị hàm.'],['math11-qt17-st-domain','Liên tục trên miền và ứng dụng','Xác định miền liên tục hoặc tham số.']],reps:['equation','graph']}
] as const;
export const g11MathModule5QuestionTypes: CourseQuestionType[]=specs.map(s=>({
  id:`math11-qt${s.n}`,topicId:'math11-t05',courseId:'grade11:math',moduleId:'math11-m5',lessonIds:[`math11-kntt-l${s.l}`],outcomeIds:[`out-math11-m5-0${s.n-14}`],name:s.name,slug:s.slug,description:s.desc,difficulty:'medium',examFrequency:'high',
  recognitionSigns:['Đề chứa kí hiệu giới hạn hoặc yêu cầu xét tính liên tục.','Cần kiểm tra điều kiện trước khi áp dụng phép toán.'],
  solvingSteps:['Nhận dạng loại giới hạn hoặc điểm cần xét.','Biến đổi biểu thức và áp dụng quy tắc phù hợp.','Kiểm tra giới hạn một phía, miền xác định hoặc giá trị hàm.'],
  commonMistakes:['Thay trực tiếp khi gặp dạng vô định.','Bỏ qua điều kiện mẫu khác 0 hoặc hai giới hạn một phía.'],
  subTypes:s.subs.map(x=>({id:x[0],name:x[1],example:x[2],targetQuestionCount:12})),
  practiceCoverage:{targetQuestionCount:24,minimumQuestionsPerSubType:6,requiredPracticeRoles:['guided','near_transfer','misconception_check','far_transfer'],requiredRepresentations:[...s.reps],masteryHoldoutCount:4}
}));
