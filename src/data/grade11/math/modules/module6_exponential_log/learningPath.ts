import type {LearningOutcome,LearningMisconception} from '@/types';
const o=(n:number,t:string,d:string,p:string[],e:LearningOutcome['evidenceTypes']):LearningOutcome=>({id:`out-math11-m6-0${n}`,topicId:'math11-t06',title:t,description:d,scope:'core',orderIndex:17+n,questionTypeIds:[`math11-qt${17+n}`],prerequisiteOutcomeIds:p,misconceptionIds:[`misc-math11-m6-0${n}`],evidenceTypes:e,estimatedMinutes:60,isCritical:true});
export const g11MathModule6Outcomes=[
o(1,'Lũy thừa với số mũ thực','Nhận biết và vận dụng lũy thừa số mũ nguyên, hữu tỉ, thực của cơ số dương.',['out-math11-m2-03'],['recognition','calculation','application']),
o(2,'Lôgarit','Nhận biết định nghĩa, điều kiện và vận dụng tính chất, đổi cơ số trong tính toán.',['out-math11-m6-01'],['recognition','calculation','explanation','application']),
o(3,'Hàm số mũ và lôgarit','Nhận dạng đồ thị, tính chất và giải quyết mô hình tăng trưởng, lãi suất.',['out-math11-m6-01','out-math11-m6-02'],['recognition','representation','explanation','application']),
o(4,'Phương trình, bất phương trình mũ và lôgarit','Giải dạng cơ bản và dạng đưa về cùng cơ số, có kiểm tra điều kiện xác định.',['out-math11-m6-02','out-math11-m6-03'],['representation','calculation','application'])
] satisfies LearningOutcome[];
export const g11MathModule6Misconceptions:LearningMisconception[]=[
{id:'misc-math11-m6-01',outcomeId:'out-math11-m6-01',statement:'$a^{m+n}=a^m+a^n$.',correction:'Cùng cơ số: $a^{m+n}=a^ma^n$.',severity:'critical'},
{id:'misc-math11-m6-02',outcomeId:'out-math11-m6-02',statement:'$\\log_a(x+y)=\\log_ax+\\log_ay$.',correction:'Lôgarit biến tích thành tổng, không có công thức tách lôgarit của tổng.',severity:'critical'},
{id:'misc-math11-m6-03',outcomeId:'out-math11-m6-03',statement:'Hàm mũ và hàm lôgarit có cùng tập xác định.',correction:'Hàm mũ xác định trên $\\mathbb R$; hàm lôgarit chỉ xác định khi đối số dương.',severity:'critical'},
{id:'misc-math11-m6-04',outcomeId:'out-math11-m6-04',statement:'Khi giải bất phương trình cùng cơ số luôn giữ chiều.',correction:'Giữ chiều nếu cơ số lớn hơn 1 và đổi chiều nếu cơ số nằm giữa 0 và 1.',severity:'critical'}
];
