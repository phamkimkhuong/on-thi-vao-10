import type {LearningOutcome,LearningMisconception} from '@/types';
const o=(n:number,t:string,d:string,p:string[],e:LearningOutcome['evidenceTypes']):LearningOutcome=>({id:`out-math11-m7-0${n}`,topicId:'math11-t07',title:t,description:d,scope:'core',orderIndex:21+n,questionTypeIds:[`math11-qt${21+n}`],prerequisiteOutcomeIds:p,misconceptionIds:[`misc-math11-m7-0${n}`],evidenceTypes:e,estimatedMinutes:n===5?70:60,isCritical:true});
export const g11MathModule7Outcomes=[
o(1,'Góc giữa hai đường thẳng','Xác định, tính góc và chứng minh hai đường thẳng vuông góc trong không gian.',['out-math11-m4-02'],['recognition','representation','calculation','explanation']),
o(2,'Đường thẳng vuông góc với mặt phẳng','Nhận biết điều kiện, tính chất và vận dụng định lí ba đường vuông góc.',['out-math11-m7-01'],['recognition','representation','explanation','application']),
o(3,'Phép chiếu vuông góc và góc đường–mặt','Xác định hình chiếu, góc giữa đường thẳng và mặt phẳng, góc nhị diện trong trường hợp đơn giản.',['out-math11-m7-02'],['recognition','representation','calculation','application']),
o(4,'Hai mặt phẳng vuông góc','Nhận biết, chứng minh hai mặt phẳng vuông góc và khai thác các hình khối đứng, đều.',['out-math11-m7-02'],['recognition','representation','explanation','application']),
o(5,'Khoảng cách trong không gian','Xác định, tính các khoảng cách cơ bản và đường vuông góc chung trong trường hợp đơn giản.',['out-math11-m7-02','out-math11-m7-04'],['recognition','representation','calculation','application']),
o(6,'Thể tích','Nhận biết đường cao, diện tích đáy và tính thể tích chóp, lăng trụ, hình hộp.',['out-math11-m7-02'],['representation','calculation','application'])
] satisfies LearningOutcome[];
export const g11MathModule7Misconceptions:LearningMisconception[]=[
{id:'misc-math11-m7-01',outcomeId:'out-math11-m7-01',statement:'Hai đường vuông góc phải cắt nhau.',correction:'Trong không gian, góc giữa hai đường được xác định qua các đường song song cắt nhau; hai đường chéo nhau vẫn có thể vuông góc.',severity:'critical'},
{id:'misc-math11-m7-02',outcomeId:'out-math11-m7-02',statement:'Vuông góc với một đường trong mặt phẳng thì vuông góc mặt phẳng.',correction:'Phải vuông góc với hai đường cắt nhau nằm trong mặt phẳng.',severity:'critical'},
{id:'misc-math11-m7-03',outcomeId:'out-math11-m7-03',statement:'Góc đường–mặt là góc với một đường bất kỳ trong mặt phẳng.',correction:'Đó là góc giữa đường và hình chiếu vuông góc của nó trên mặt phẳng.',severity:'critical'},
{id:'misc-math11-m7-04',outcomeId:'out-math11-m7-04',statement:'Hai mặt phẳng chứa một cặp đường vuông góc thì vuông góc.',correction:'Một mặt phẳng phải chứa đường vuông góc với mặt phẳng kia.',severity:'critical'},
{id:'misc-math11-m7-05',outcomeId:'out-math11-m7-05',statement:'Khoảng cách là độ dài của đoạn nối tùy ý.',correction:'Khoảng cách là độ dài đoạn vuông góc ngắn nhất giữa các đối tượng.',severity:'critical'},
{id:'misc-math11-m7-06',outcomeId:'out-math11-m7-06',statement:'Mọi thể tích đều bằng diện tích đáy nhân chiều cao.',correction:'Lăng trụ dùng $Bh$, còn hình chóp dùng $\\frac13Bh$.',severity:'critical'}
];
