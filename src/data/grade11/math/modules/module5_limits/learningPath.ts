import type { LearningOutcome, LearningMisconception } from '@/types';
const out=(n:number,title:string,description:string,pre:string[],e:LearningOutcome['evidenceTypes']):LearningOutcome=>({id:`out-math11-m5-0${n}`,topicId:'math11-t05',title,description,scope:'core',orderIndex:14+n,questionTypeIds:[`math11-qt${14+n}`],prerequisiteOutcomeIds:pre,misconceptionIds:[`misc-math11-m5-0${n}`],evidenceTypes:e,estimatedMinutes:60,isCritical:true});
export const g11MathModule5Outcomes: LearningOutcome[]=[
  out(1,'Giới hạn của dãy số','Nhận biết và tính giới hạn hữu hạn, giới hạn vô cực của dãy; vận dụng tổng cấp số nhân lùi vô hạn.',['out-math11-m2-01'],['recognition','representation','calculation','application']),
  out(2,'Giới hạn của hàm số','Nhận biết giới hạn tại điểm, một phía, tại vô cực và giới hạn vô cực; tính bằng các phép toán cơ bản.',['out-math11-m5-01'],['recognition','representation','calculation','application']),
  out(3,'Hàm số liên tục','Nhận dạng tính liên tục tại điểm, trên khoảng/đoạn và của các hàm sơ cấp trên tập xác định.',['out-math11-m5-02'],['recognition','representation','calculation','explanation'])
];
export const g11MathModule5Misconceptions: LearningMisconception[]=[
  {id:'misc-math11-m5-01',outcomeId:'out-math11-m5-01',statement:'Dãy có các số hạng ngày càng nhỏ luôn có giới hạn bằng 0.',correction:'Cần xét giá trị mà dãy tiến tới; ví dụ $1+1/n$ tiến tới 1.',severity:'critical'},
  {id:'misc-math11-m5-02',outcomeId:'out-math11-m5-02',statement:'Có thể thay trực tiếp trong mọi bài giới hạn.',correction:'Thay trực tiếp chỉ dùng khi biểu thức xác định và không tạo dạng vô định; cần biến đổi khi gặp $0/0$.',severity:'critical'},
  {id:'misc-math11-m5-03',outcomeId:'out-math11-m5-03',statement:'Hàm có giá trị tại điểm thì liên tục tại điểm đó.',correction:'Cần đồng thời có giới hạn và $\\lim_{x\\to x_0}f(x)=f(x_0)$.',severity:'critical'}
];
