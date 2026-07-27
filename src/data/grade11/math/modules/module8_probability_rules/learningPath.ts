import type {LearningOutcome,LearningMisconception} from '@/types';
const o=(n:number,t:string,d:string,p:string[]):LearningOutcome=>({id:`out-math11-m8-0${n}`,topicId:'math11-t08',title:t,description:d,scope:'core',orderIndex:27+n,questionTypeIds:[`math11-qt${27+n}`],prerequisiteOutcomeIds:p,misconceptionIds:[`misc-math11-m8-0${n}`],evidenceTypes:['recognition','representation','calculation','application'],estimatedMinutes:55,isCritical:true});
export const g11MathModule8Outcomes=[o(1,'Hợp, giao và biến cố độc lập','Nhận biết hợp, giao, xung khắc, biến cố đối và tính độc lập.',['out-math11-m3-01']),o(2,'Công thức cộng xác suất','Tính xác suất biến cố hợp bằng công thức cộng, kể cả bài toán tổ hợp đơn giản.',['out-math11-m8-01']),o(3,'Công thức nhân xác suất','Tính xác suất giao của hai biến cố độc lập và sử dụng sơ đồ cây trong bài toán đơn giản.',['out-math11-m8-01'])];
export const g11MathModule8Misconceptions:LearningMisconception[]=[
{id:'misc-math11-m8-01',outcomeId:'out-math11-m8-01',statement:'Biến cố xung khắc đồng nghĩa với độc lập.',correction:'Xung khắc nghĩa là không thể đồng thời xảy ra; hai biến cố có xác suất dương xung khắc không độc lập.',severity:'critical'},
{id:'misc-math11-m8-02',outcomeId:'out-math11-m8-02',statement:'Luôn có $P(A\\cup B)=P(A)+P(B)$.',correction:'Phải trừ $P(A\\cap B)$; chỉ bỏ được khi hai biến cố xung khắc.',severity:'critical'},
{id:'misc-math11-m8-03',outcomeId:'out-math11-m8-03',statement:'Luôn có $P(A\\cap B)=P(A)P(B)$.',correction:'Công thức tích trực tiếp chỉ dùng khi $A,B$ độc lập.',severity:'critical'}
];
