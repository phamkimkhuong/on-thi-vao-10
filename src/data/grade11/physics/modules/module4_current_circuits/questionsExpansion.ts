import type { CourseQuestion, CourseSolution } from '@/data/schema';
import type { QuestionRepresentationType } from '@/types';
type Choice='A'|'B'|'C'|'D';
type Seed={content:string;answer:string;reasoning:string[];difficulty:'medium'|'hard';rep?:QuestionRepresentationType;options?:[string,string,string,string];accepted?:string[]};
type Bank={qt:number;lesson:number;outcome:number;subTypes:[string,string];items:Seed[]};
const n=(content:string,answer:string,reasoning:string[],difficulty:Seed['difficulty'],rep:QuestionRepresentationType='equation',accepted?:string[]):Seed=>({content,answer,reasoning,difficulty,rep,accepted});
const c=(content:string,options:[string,string,string,string],answer:Choice,reasoning:string[],difficulty:Seed['difficulty'],rep:QuestionRepresentationType='diagram'):Seed=>({content,options,answer,reasoning,difficulty,rep});
const banks:Bank[]=[
{qt:24,lesson:22,outcome:1,subTypes:['microscopic','drift'],items:[
n('Dây có $n=8\\times10^{28}$ m⁻³, $S=1$ mm², $v=10^{-4}$ m/s. Lấy $e=1,6\\times10^{-19}$ C. Tính I theo A.','1.28',['Đổi S=$10^{-6}$ m².','Dùng $I=Sne v$.','Suy ra I=1,28 A.'],'medium','equation',['1.28','1,28']),
c('Trong $I=Sn|q|v$, tăng S gấp đôi, giữ n và v thì I',['giảm đôi','tăng đôi','tăng bốn','không đổi'],'B',['I tỉ lệ thuận tiết diện S.','Các đại lượng khác không đổi.'],'medium'),
n('Dòng 2 A qua dây S=0,5 mm², n=$5\\times10^{28}$ m⁻³. Tính tốc độ trôi theo m/s.','0.0005',['Đổi S=$5\\times10^{-7}$ m².','$v=I/(Sne)$.','Kết quả $5\\times10^{-4}$ m/s.'],'hard','equation',['0.0005','0,0005']),
n('Dây có S=2 mm², n=$10^{29}$ m⁻³, v=$2\\times10^{-5}$ m/s. Tính I theo A.','0.64',['Đổi đơn vị SI.','Thay vào $I=Sne v$.','I=0,64 A.'],'hard','equation',['0.64','0,64']),
c('Tốc độ trôi electron nhỏ nhưng tín hiệu điện truyền nhanh vì',['electron chạy gần tốc độ sáng','điện trường được thiết lập dọc mạch nhanh','không có điện trường','mỗi electron đi hết mạch tức thời'],'B',['Cần phân biệt tốc độ trôi với tốc độ lan truyền điện trường.','Các hạt tải tại nhiều vị trí cùng bắt đầu trôi.'],'hard','text'),
n('Giữ I,n,v; giảm đường kính dây một nửa. Mật độ dòng tăng bao nhiêu lần?','4',['S tỉ lệ bình phương đường kính.','Đường kính giảm đôi làm S giảm 4 lần.','Mật độ dòng I/S tăng 4 lần.'],'hard'),
n('Dòng 1,6 A qua dây S=1 mm², n=$10^{29}$ m⁻³. Tính v theo m/s.','0.0001',['Đổi S=$10^{-6}$ m².','$v=I/(Sne)$.','v=$10^{-4}$ m/s.'],'medium'),
c('Giữ I và vật liệu, dây có tiết diện lớn hơn thì tốc độ trôi',['lớn hơn','nhỏ hơn','không đổi','đổi chiều'],'B',['v=I/(Sne).','S lớn làm v nhỏ.'],'medium'),
n('Nếu n giảm 20%, giữ I và S thì v tăng theo hệ số nào?','1.25',['v tỉ lệ nghịch n.','n mới bằng 0,8n.','v mới bằng v/0,8=1,25v.'],'hard', 'equation',['1.25','1,25']),
c('Dòng điện quy ước trong kim loại có chiều',['cùng electron','ngược electron','vuông góc dây','ngẫu nhiên'],'B',['Electron mang điện âm.','Chiều dòng quy ước ngược chiều chuyển dời electron.'],'hard','text'),
n('I tăng từ 1 A lên 3 A, giữ S,n. Tốc độ trôi tăng bao nhiêu lần?','3',['v tỉ lệ thuận I khi S,n không đổi.','Tỉ số bằng 3/1.','v tăng 3 lần.'],'hard'),
n('Hai dây cùng vật liệu mang cùng I; $S_2=4S_1$. Tính $v_1/v_2$.','4',['v=I/(Sne).','v tỉ lệ nghịch S.','S2=4S1 nên v1/v2=4.'],'hard')
]},
{qt:25,lesson:22,outcome:2,subTypes:['charge','carriers'],items:[
n('Dòng 2,5 A chạy trong 4 phút. Tính điện lượng theo C.','600',['Đổi t=240 s.','q=It=600 C.'],'medium'),
n('Điện lượng 360 C qua dây trong 3 phút. Tính I theo A.','2',['Đổi t=180 s.','I=q/t=2 A.'],'medium'),
n('Dòng biến đổi: 2 A trong 30 s rồi 5 A trong 20 s. Tổng điện lượng theo C.','160',['Tính q1=60 C.','Tính q2=100 C.','Cộng được 160 C.'],'hard'),
n('Điện lượng 3,2 C tương ứng bao nhiêu electron?','2e19',['N=q/e.','Thay e=$1,6\\times10^{-19}$ C.','N=$2\\times10^{19}$.'],'medium','equation',['2e19','2*10^19']),
n('$5\\times10^{18}$ electron qua tiết diện trong 2 s. Tính I theo A.','0.4',['q=Ne=0,8 C.','I=q/t=0,4 A.'],'medium', 'equation',['0.4','0,4']),
n('Dòng 0,8 A chạy 5 s. Tính số electron.','2.5e19',['q=It=4 C.','N=q/e.','N=$2,5\\times10^{19}$.'],'hard','equation',['2.5e19','2,5e19'])
]},
{qt:26,lesson:23,outcome:3,subTypes:['material','temperature'],items:[
n('Dây có $\\rho=1,7\\times10^{-8}\\,\\Omega$m, l=10 m, S=1 mm². Tính R theo ohm.','0.17',['Đổi S=$10^{-6}$ m².','$R=\\rho l/S=0,17\\,\\Omega$.'],'medium','equation',['0.17','0,17']),
c('Giữ vật liệu và thể tích dây, tăng chiều dài gấp đôi thì R',['tăng 2','tăng 4','giảm 2','không đổi'],'B',['Thể tích lS không đổi nên l gấp đôi, S giảm đôi.','$R=\\rho l/S$ tăng 4 lần.'],'medium'),
n('Hai dây cùng vật liệu: $l_2=3l_1$, $S_2=2S_1$. Tính $R_2/R_1$.','1.5',['R tỉ lệ l/S.','Tỉ số bằng 3/2.','Kết quả 1,5.'],'hard','equation',['1.5','1,5']),
n('Điện trở 100 ohm ở 20°C, hệ số nhiệt 0,004 K⁻¹. Tính R ở 70°C.','120',['$\\Delta T=50$°C.','$R=R_0(1+\\alpha\\Delta T)$.','R=120 ohm.'],'medium'),
c('Thermistor NTC nóng lên thì điện trở',['tăng','giảm','không đổi','bằng 0 ngay'],'B',['NTC có hệ số nhiệt âm.','Nhiệt độ tăng làm R giảm.'],'medium','graph'),
n('R tăng từ 50 lên 60 ohm khi nhiệt độ tăng 100°C. Tính hệ số nhiệt theo K⁻¹.','0.002',['$\\Delta R/R_0=0,2$.','$\\alpha=(R-R_0)/(R_0\\Delta T)$.','$\\alpha=0,002$ K⁻¹.'],'hard','graph',['0.002','0,002'])
]},
{qt:27,lesson:23,outcome:4,subTypes:['ohmic','nonlinear'],items:[
n('Đường I-U qua điểm U=6 V, I=0,3 A. Tính R theo ohm.','20',['R=U/I.','R=20 ohm.'],'medium','graph'),
c('Trên đồ thị I theo U, đường dốc hơn biểu thị điện trở',['lớn hơn','nhỏ hơn','bằng nhau','âm'],'B',['Hệ số góc I/U=1/R.','Dốc lớn nghĩa là R nhỏ.'],'medium','graph'),
n('Hai điểm đặc tuyến Ohm (2 V;0,1 A) và (8 V;0,4 A). Tính R.','20',['Kiểm tra U/I tại hai điểm đều bằng 20.','Đường qua gốc và tỉ số không đổi.','R=20 ohm.'],'hard','table'),
c('Đặc tuyến cong qua gốc cho thấy linh kiện',['luôn có R không đổi','phi tuyến','không có dòng','luôn hỏng'],'B',['Tỉ số U/I thay đổi theo điểm làm việc.','Không thể dùng một R cố định.'],'medium','graph'),
n('Tại điểm U=3 V,I=0,2 A của đặc tuyến phi tuyến. Tính điện trở tĩnh theo ohm.','15',['R_t=U/I tại điểm làm việc.','R_t=15 ohm.'],'medium','table'),
c('Muốn tìm điện trở vi phân gần một điểm cần dùng',['U/I từ gốc','độ dốc tiếp tuyến dU/dI','diện tích dưới đồ thị','tung độ gốc'],'B',['Điện trở vi phân mô tả biến thiên cục bộ.','Dùng độ dốc tiếp tuyến dU/dI.','Không đồng nhất với U/I.'],'hard','graph')
]},
{qt:28,lesson:23,outcome:5,subTypes:['basic','condition'],items:[
n('Điện trở 15 ohm mắc vào 12 V. Tính I theo A.','0.8',['I=U/R.','I=0,8 A.'],'medium','equation',['0.8','0,8']),
n('Dòng 0,5 A qua điện trở 24 ohm. Tính U theo V.','12',['U=IR.','U=12 V.'],'medium'),
n('Hai điện trở 6 và 3 ohm song song. Tính điện trở tương đương.','2',['1/R=1/6+1/3.','R=2 ohm.','Kiểm tra R nhỏ hơn 3 ohm.'],'hard'),
c('Định luật Ohm với R không đổi áp dụng tốt khi',['nhiệt độ và trạng thái vật dẫn ổn định','mọi linh kiện','dòng vô hạn','nguồn hở mạch'],'A',['Quan hệ tuyến tính cần trạng thái vật dẫn không đổi.','Nhiệt độ thay đổi có thể làm R thay đổi.'],'medium','text'),
c('Bảng U tăng đôi nhưng I tăng ba lần cho thấy linh kiện',['Ohm với R không đổi','phi tuyến','không dẫn điện','bị ngắn mạch chắc chắn'],'B',['Nếu R không đổi thì I tỉ lệ U.','Tỉ lệ không khớp nên đặc tuyến phi tuyến.'],'medium','table'),
n('Mạch nối tiếp 4 và 8 ohm ở 12 V. Tính dòng mạch theo A.','1',['R_tđ=12 ohm.','I=U/R_tđ.','I=1 A.'],'hard')
]},
{qt:29,lesson:24,outcome:6,subTypes:['closed','state'],items:[
n('Nguồn E=12 V,r=1 ohm mắc R=5 ohm. Tính I theo A.','2',['I=E/(R+r).','I=12/6=2 A.'],'medium'),
n('Với mạch trên, tính hiệu điện thế mạch ngoài theo V.','10',['U=IR.','U=2*5=10 V.'],'medium'),
n('Nguồn 9 V,r=1 ohm cấp R chưa biết, dòng 1,5 A. Tính R.','5',['R+r=E/I=6 ohm.','R=6-1.','R=5 ohm.'],'hard'),
n('Nguồn E=6 V,r=0,5 ohm mắc R=2,5 ohm. Tính công suất tải theo W.','10',['I=6/3=2 A.','P_R=I²R.','P_R=10 W.'],'hard'),
n('Nguồn E=12 V,r=2 ohm. Tìm R để công suất tải cực đại.','2',['Định lí truyền công suất cực đại cho R=r.','Thay r=2 ohm.','R=2 ohm.'],'hard'),
n('Nguồn 10 V,r=1 ohm cấp R=4 ohm. Tính hiệu suất truyền ra tải theo %.','80',['H=R/(R+r).','H=4/5.','H=80%.'],'hard'),
c('Khi hở mạch, hiệu điện thế hai cực nguồn gần bằng',['0','E','Ir','dòng ngắn mạch'],'B',['I=0 khi hở mạch.','U=E-Ir=E.'],'medium'),
n('Nguồn E=6 V,r=0,5 ohm. Tính dòng ngắn mạch theo A.','12',['Ngắn mạch R=0.','I_sc=E/r=12 A.'],'medium'),
c('Ngắn mạch nguy hiểm chủ yếu vì',['dòng rất lớn','E bằng 0','r vô hạn','không có nhiệt'],'A',['Tổng điện trở gần bằng r nhỏ.','Dòng lớn gây tỏa nhiệt mạnh.','Nguồn và dây có thể hỏng.'],'hard','text'),
n('Nguồn có U hở mạch 1,5 V và dòng ngắn mạch 3 A. Tính r theo ohm.','0.5',['E≈U_hở=1,5 V.','I_sc=E/r.','r=0,5 ohm.'],'hard'),
n('Nguồn E=8 V,r=2 ohm, dòng tải 1 A. Tính U theo V.','6',['U=E-Ir.','U=8-2.','U=6 V.'],'hard'),
c('Khi R tăng rất lớn, dòng mạch và U hai cực lần lượt tiến tới',['vô hạn và 0','0 và E','E/r và 0','0 và 0'],'B',['I=E/(R+r) tiến tới 0.','U=E-Ir tiến tới E.','Đây là trạng thái gần hở mạch.'],'hard')
]},
{qt:30,lesson:25,outcome:7,subTypes:['calculation','application'],items:[
n('Thiết bị 500 W chạy 3 giờ. Tính điện năng theo kWh.','1.5',['Đổi P=0,5 kW.','A=Pt=1,5 kWh.'],'medium','table',['1.5','1,5']),
n('Ấm 220 V-1100 W có dòng định mức bao nhiêu A?','5',['I=P/U.','I=1100/220=5 A.'],'medium'),
n('Điện trở 20 ohm mang dòng 3 A trong 10 phút. Tính nhiệt lượng theo kJ.','108',['P=I²R=180 W.','t=600 s.','Q=108000 J=108 kJ.'],'hard'),
c('Cầu chì phải được chọn để',['dòng định mức lớn tùy ý','ngắt khi dòng vượt mức an toàn','tăng điện áp','giảm mọi công suất'],'B',['Cầu chì bảo vệ quá dòng.','Giá trị phải phù hợp dây và tải.'],'medium','text'),
c('Hai thiết bị cùng công suất, thiết bị dùng điện áp cao hơn có dòng',['lớn hơn','nhỏ hơn','bằng nhau','bằng 0'],'B',['I=P/U.','Cùng P, U lớn hơn làm I nhỏ hơn.'],'medium'),
n('Đường dây R=0,5 ohm truyền dòng 10 A trong 2 giờ. Tính điện năng hao phí theo kWh.','0.1',['P_hp=I²R=50 W=0,05 kW.','A_hp=0,05*2.','A_hp=0,1 kWh.'],'hard')
]},
{qt:31,lesson:26,outcome:8,subTypes:['circuit','data'],items:[
c('Khi đo nguồn, ampe kế phải mắc',['song song nguồn','nối tiếp tải','trực tiếp hai cực nguồn','song song vôn kế'],'B',['Ampe kế đo dòng mạch nên mắc nối tiếp.','Không nối trực tiếp hai cực nguồn.'],'medium','experiment'),
c('Vôn kế đo U hai cực nguồn phải mắc',['nối tiếp','song song hai cực','thay tải','nối tắt ampe kế'],'B',['Vôn kế đo hiệu điện thế giữa hai điểm.','Vì vậy mắc song song.'],'medium','experiment'),
c('Muốn có nhiều điểm U-I nên',['thay đổi điện trở tải','đổi nguồn mỗi lần','chỉ đo hở mạch','nối tắt nguồn'],'A',['Biến trở/tải thay đổi làm I thay đổi.','Ghi cặp U-I ở mỗi trạng thái.','Giữ nguyên nguồn.'],'hard','experiment'),
c('Trước khi đóng mạch, biến trở nên đặt để',['dòng lớn nhất','điện trở tải lớn nhằm hạn dòng','R=0','ngắn mạch'],'B',['Ban đầu cần bảo vệ nguồn và ampe kế.','Đặt R lớn để dòng nhỏ.','Sau đó điều chỉnh dần.'],'hard','experiment'),
c('Sai số hệ thống do điện trở dụng cụ nên được',['bỏ qua luôn','đánh giá trong mô hình đo','xóa dữ liệu','tăng dòng vô hạn'],'B',['Dụng cụ làm thay đổi mạch.','Cần xét cấp chính xác và điện trở trong.','Không thể loại bằng lấy trung bình đơn thuần.'],'hard','experiment'),
c('Không được đo dòng ngắn mạch trực tiếp lâu vì',['dòng lớn gây nóng và hỏng nguồn','U tăng vô hạn','r bằng 0','ampe kế không có dòng'],'A',['Dòng ngắn mạch E/r có thể rất lớn.','Năng lượng tỏa nhiệt nhanh.','Nên suy ra từ đồ thị.'],'hard','experiment'),
n('Đường thẳng $U=1,6-0,4I$. Tính E theo V.','1.6',['So với U=E-rI.','Tung độ gốc là E=1,6 V.'],'medium','graph',['1.6','1,6']),
n('Với đường trên, tính r theo ohm.','0.4',['Hệ số góc bằng -r.','r=0,4 ohm.'],'medium','graph',['0.4','0,4']),
n('Hai điểm (I,U)=(0,2;1,5) và (0,8;1,2). Tính r.','0.5',['r=-Delta U/Delta I.','Delta U=-0,3; Delta I=0,6.','r=0,5 ohm.'],'hard','table',['0.5','0,5']),
n('Dùng r=0,5 và điểm (0,2;1,5), tính E.','1.6',['E=U+rI.','E=1,5+0,5*0,2.','E=1,6 V.'],'hard','table',['1.6','1,6']),
n('Đồ thị U-I cắt trục I tại 4 A và trục U tại 2 V. Tính r.','0.5',['E=2 V.','I_sc=E/r=4 A.','r=0,5 ohm.'],'hard','graph',['0.5','0,5']),
c('Khớp đường thẳng tốt nhất qua nhiều điểm giúp',['giảm ảnh hưởng sai số ngẫu nhiên','làm E thật tăng','loại mọi sai số hệ thống','không cần đơn vị'],'A',['Nhiều điểm dùng thông tin toàn bộ dữ liệu.','Đường khớp giảm ảnh hưởng dao động ngẫu nhiên.','Vẫn cần đánh giá sai số hệ thống.'],'hard','graph')
]}
];
let qn=1,choiceIndex=0;const letters=['A','B','C','D'] as const;
const rows:Array<{id:string;qid:string;answer:string;reasoning:string[];qt:number}>=[];
export const g11PhysicsModule4ExpansionQuestions:CourseQuestion[]=banks.flatMap(bank=>{const half=bank.items.length/2;return bank.items.map((item,index)=>{const id=`phy11-m4x-q${String(qn).padStart(3,'0')}`,sid=`phy11-m4x-s${String(qn).padStart(3,'0')}`;qn++;let answer=item.answer,options=item.options;if(options){const from=letters.indexOf(answer as Choice),to=choiceIndex++%4;options=[...options];[options[from],options[to]]=[options[to],options[from]];answer=letters[to];}const hold=bank.items.length===6?index===2||index===5:index===4||index===5||index===10||index===11;const reasoning=item.difficulty==='hard'&&item.reasoning.length<3?[...item.reasoning,'Kiểm tra đơn vị và điều kiện vận hành.']:item.reasoning;rows.push({id:sid,qid:id,answer,reasoning,qt:bank.qt});return{id,subjectId:'physics',courseId:'grade11:physics',moduleId:'phy11-m4',lessonId:`phy11-kntt-l${bank.lesson}`,topicId:'phy11-t04',questionTypeId:`phy11-qt${bank.qt}`,subTypeId:`phy11-qt${bank.qt}-st-${bank.subTypes[index<half?0:1]}`,content:item.content,options,correctAnswer:answer,acceptedAnswers:options?undefined:item.accepted??[answer,answer.replace('.',',')],responseType:options?'single_choice':'short_answer',validatorType:options?'choice':'number',outcomeIds:[`out-phy11-m4-${String(bank.outcome).padStart(2,'0')}`],competency:item.rep==='graph'||item.rep==='table'||item.rep==='experiment'?'physical_inquiry':'physical_application',cognitiveLevel:'application',estimatedSeconds:item.difficulty==='hard'?180:110,practiceRole:hold?'mastery_holdout':index%3===0?'near_transfer':index%3===1?'far_transfer':'representation_switch',representationType:item.rep??'equation',isMasteryHoldout:hold,difficulty:item.difficulty,sourceType:'manual'} as CourseQuestion;});});
export const g11PhysicsModule4ExpansionSolutions:CourseSolution[]=rows.map(row=>({id:row.id,questionId:row.qid,courseId:'grade11:physics',moduleId:'phy11-m4',recognition:'Xác định mô hình dòng điện, đặc tuyến hoặc trạng thái nguồn trước khi tính.',detailedSteps:row.reasoning.map((explanation,index)=>({order:index+1,title:index===0?'Lập mô hình':index===row.reasoning.length-1?'Kết luận':'Biến đổi',explanation})),finalAnswer:row.answer,commonMistakes:['Sai đơn vị tiết diện, tiền tố micro hoặc nhầm điện trở tải với điện trở trong.'],reviewSuggestions:[`Ôn lại mô hình và điều kiện áp dụng của phy11-qt${row.qt}.`]}));
