import type {CourseSolution} from '@/data/schema';
const answers=('ADDDBABADCBB'+'BBBBBBBBBCBB'+'BAADBAABBDBA'+'BBBBCBBAABBD'+'BBBBBAABCBBB'+'ACDBBCCADBAC').split('') as Array<'A'|'B'|'C'|'D'>;
const results=[
'$0^\\circ$','$90^\\circ$','$90^\\circ$','$90^\\circ$','$45^\\circ$','có thể vuông góc','hai đường vuông góc','$AB\\perp AC$','$90^\\circ$','$AB\\perp AD$','vuông góc','$AC\\perp BD$',
'hai đường cắt nhau trong mặt phẳng','$d\\perp a$','$SA\\perp(ABC)$','$e\\perp(P)$','một đường duy nhất','chưa đủ điều kiện','$b\\perp a$','hai mặt phẳng vuông góc','cạnh bên vuông góc đáy','mọi đường đáy qua chân','$d\\perp(P)$','$AA\\prime\\perp(ABCD)$',
'chân đường vuông góc','chính điểm $M$','$0^\\circ$','$90^\\circ$','$\\widehat{AMH}$','$[0^\\circ;90^\\circ]$','$3/5$','góc giữa đường và hình chiếu','mặt phẳng vuông góc cạnh nhị diện','$90^\\circ$','$3/5$','$AH=5$',
'một đường vuông góc mặt kia','hai mặt phẳng vuông góc','mặt bên vuông góc đáy','hai mặt kề vuông góc','6 mặt vuông','một cặp đường là chưa đủ','$d\\perp(Q)$','cạnh bên vuông góc đáy','đa giác đều','tâm đáy','mặt bên vuông góc đáy','$90^\\circ$',
'độ dài đoạn vuông góc','$7$','từ một điểm mặt này đến mặt kia','khoảng cách từ điểm trên đường đến mặt phẳng','đoạn vuông góc chung','đoạn vuông góc','$5$','vuông góc cả hai','$0$','$a/2$','$MH=6$','$4$',
'$Bh$','$60$','$24$','$a^3$','cạnh bên','$6$','$Bh/3$','$24$','$12$','gấp đôi','$16$','$1/3$'
];
export const g11MathModule7Solutions:CourseSolution[]=results.map((r,i)=>{const n=253+i;return{id:`math11-s${n}`,courseId:'grade11:math',moduleId:'math11-m7',questionId:`math11-q${n}`,recognition:'Xác định hình chiếu, quan hệ vuông góc, đường cao hoặc công thức hình khối phù hợp.',detailedSteps:[{order:1,title:'Lập luận',explanation:`Theo định nghĩa hoặc tính chất tương ứng, kết quả là ${r}.`},{order:2,title:'Kết luận',explanation:`Phương án đúng là ${answers[i]}.`}],finalAnswer:answers[i],commonMistakes:['Suy luận từ hình vẽ hoặc chọn sai đường vuông góc, hình chiếu hay đường cao.'],reviewSuggestions:['Ôn điều kiện áp dụng trong phần lý thuyết bài tương ứng.']};});
