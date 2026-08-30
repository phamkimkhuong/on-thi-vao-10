import { diagram, problem } from './helpers';

const topic = 'math10-adv-euclidean';
const triangle = '/assets/math10-advanced/triangle-median.svg';
const bisector = '/assets/math10-advanced/triangle-bisector.svg';
const cyclic = '/assets/math10-advanced/cyclic-quadrilateral.svg';
const centers = '/assets/math10-advanced/euler-centers.svg';
const chord = '/assets/math10-advanced/circle-chord.svg';

export const geometryProblems = [
  problem(topic, {
    content: 'Diện tích tam giác \\(ABC\\) bằng', correct: '84', distractors: ['42', '72', '90'],
    insight: 'Ba cạnh đã biết nên công thức Heron cho diện tích trực tiếp.',
    reasoning: ['Nửa chu vi \\(s=(13+14+15)/2=21\\).', 'Heron: \\(S^2=21\\cdot8\\cdot7\\cdot6=7056\\).', 'Suy ra \\(S=84\\).'], tags: ['Heron', 'diện tích'],
    stimulus: diagram('math10-geo-heron', 'Tam giác biết ba cạnh', 'Tam giác có \\(AB=13,BC=14,CA=15\\).', triangle, 'Tam giác ABC với ba cạnh 13, 14 và 15')
  }),
  problem(topic, {
    content: 'Độ dài trung tuyến \\(AM\\) bằng', correct: '2\\sqrt{37}', distractors: ['\\sqrt{37}', '4\\sqrt{37}', '\\sqrt{148}/2'],
    insight: 'Áp dụng định lý Apollonius cho trung tuyến ứng với cạnh \\(BC\\).',
    reasoning: ['Dùng \\(AM^2=(2AB^2+2AC^2-BC^2)/4\\).', 'Thay \\(AB=13,AC=15,BC=14\\) được \\(AM^2=148\\).', 'Vậy \\(AM=\\sqrt{148}=2\\sqrt{37}\\).'], tags: ['trung tuyến', 'Apollonius'],
    stimulus: diagram('math10-geo-median', 'Trung tuyến trong tam giác', '\\(AB=13,AC=15,BC=14\\); \\(M\\) là trung điểm \\(BC\\).', triangle, 'Trung tuyến AM của tam giác ABC')
  }),
  problem(topic, {
    content: 'Đường phân giác \\(AD\\) có độ dài bằng', correct: '4', distractors: ['3', '5', '6'],
    insight: 'Trong tam giác cân, phân giác từ đỉnh đồng thời là đường cao.',
    reasoning: ['Vì \\(AB=AC=5\\), phân giác \\(AD\\) cũng chia \\(BC=6\\) thành hai đoạn bằng \\(3\\).', 'Tam giác \\(ABD\\) vuông tại \\(D\\).', 'Pythagore: \\(AD=\\sqrt{5^2-3^2}=4\\).'], tags: ['tam giác cân', 'phân giác'],
    stimulus: diagram('math10-geo-bisector', 'Phân giác tam giác cân', '\\(AB=AC=5,BC=6\\); \\(AD\\) là phân giác góc \\(A\\).', bisector, 'Phân giác AD trong tam giác cân ABC')
  }),
  problem(topic, {
    content: 'Bán kính đường tròn nội tiếp tam giác vuông có hai cạnh góc vuông \\(6,8\\) bằng', correct: '2', distractors: ['1', '3', '4'],
    insight: 'Với tam giác vuông, \\(r=(a+b-c)/2\\).',
    reasoning: ['Cạnh huyền bằng \\(\\sqrt{6^2+8^2}=10\\).', 'Dùng \\(r=(6+8-10)/2\\).', 'Suy ra \\(r=2\\).'], tags: ['tam giác vuông', 'đường tròn nội tiếp'],
    stimulus: diagram('math10-geo-inradius-right', 'Đường tròn nội tiếp tam giác vuông', 'Tam giác vuông có hai cạnh góc vuông dài \\(6\\) và \\(8\\).', centers, 'Tam giác vuông cùng tâm đường tròn nội tiếp')
  }),
  problem(topic, {
    content: 'Tam giác vuông có cạnh huyền bằng \\(13\\). Bán kính đường tròn ngoại tiếp bằng', correct: '\\dfrac{13}2', distractors: ['13', '\\dfrac{13}4', '26'],
    insight: 'Tâm ngoại tiếp tam giác vuông là trung điểm cạnh huyền.',
    reasoning: ['Đường kính đường tròn ngoại tiếp chính là cạnh huyền.', 'Do đó \\(2R=13\\).', 'Suy ra \\(R=13/2\\).'], tags: ['tam giác vuông', 'ngoại tiếp'],
    stimulus: diagram('math10-geo-circum-right', 'Ngoại tiếp tam giác vuông', 'Cạnh huyền của tam giác vuông dài \\(13\\).', centers, 'Tâm ngoại tiếp nằm tại trung điểm cạnh huyền')
  }),
  problem(topic, {
    content: 'Cạnh đối diện góc \\(60^\\circ\\) của tam giác có hai cạnh kề dài \\(5\\) và \\(7\\) bằng', correct: '\\sqrt{39}', distractors: ['\\sqrt{49}', '\\sqrt{74}', '6'],
    insight: 'Định lý cosin liên hệ đúng ba dữ kiện hai cạnh và góc xen giữa.',
    reasoning: ['Gọi cạnh cần tìm là \\(a\\).', 'Cosin: \\(a^2=5^2+7^2-2\\cdot5\\cdot7\\cos60^\\circ\\).', 'Tính được \\(a^2=39\\), nên \\(a=\\sqrt{39}\\).'], tags: ['định lý cosin', 'giải tam giác'],
    stimulus: diagram('math10-geo-cosine', 'Hai cạnh và góc xen giữa', 'Hai cạnh xuất phát từ một đỉnh dài \\(5,7\\), góc xen giữa \\(60^\\circ\\).', triangle, 'Tam giác với hai cạnh 5 và 7 cùng góc xen giữa 60 độ')
  }),
  problem(topic, {
    content: 'Trong tam giác, \\(a=5\\), \\(A=30^\\circ\\), \\(B=45^\\circ\\). Độ dài cạnh \\(b\\) bằng', correct: '5\\sqrt2', distractors: ['\\dfrac{5\\sqrt2}2', '10', '5'],
    insight: 'Định lý sin dùng cặp cạnh–góc đối diện đã biết.',
    reasoning: ['Theo định lý sin, \\(b/\\sin45^\\circ=a/\\sin30^\\circ\\).', 'Suy ra \\(b=5\\sin45^\\circ/\\sin30^\\circ\\).', 'Tính được \\(b=5\\sqrt2\\).'], tags: ['định lý sin', 'giải tam giác'],
    stimulus: diagram('math10-geo-sine', 'Dữ kiện cạnh và hai góc', 'Tam giác có \\(a=5,A=30^\\circ,B=45^\\circ\\).', triangle, 'Tam giác minh họa cạnh a và các góc A B')
  }),
  problem(topic, {
    content: 'Diện tích tam giác có hai cạnh \\(8,10\\) và góc xen giữa \\(30^\\circ\\) là', correct: '20', distractors: ['40', '20\\sqrt3', '80'],
    insight: 'Dùng công thức diện tích theo hai cạnh và sin góc xen giữa.',
    reasoning: ['Công thức \\(S=\\tfrac12ab\\sin C\\).', 'Thay \\(a=8,b=10,C=30^\\circ\\).', 'Suy ra \\(S=40\\cdot1/2=20\\).'], tags: ['diện tích', 'sin'],
    stimulus: diagram('math10-geo-area-sine', 'Diện tích từ góc xen giữa', 'Hai cạnh dài \\(8,10\\), góc giữa chúng bằng \\(30^\\circ\\).', triangle, 'Tam giác với hai cạnh và góc xen giữa')
  }),
  problem(topic, {
    content: 'Đường cao của tam giác đều cạnh \\(6\\) bằng', correct: '3\\sqrt3', distractors: ['3', '6\\sqrt3', '2\\sqrt3'],
    insight: 'Đường cao chia tam giác đều thành hai tam giác vuông 30–60–90.',
    reasoning: ['Đường cao chia cạnh đáy thành hai đoạn dài \\(3\\).', 'Pythagore cho \\(h^2=6^2-3^2=27\\).', 'Vậy \\(h=3\\sqrt3\\).'], tags: ['tam giác đều', 'đường cao'],
    stimulus: diagram('math10-geo-equilateral', 'Tam giác đều', 'Tam giác đều có cạnh bằng \\(6\\).', triangle, 'Tam giác đều và đường cao từ đỉnh')
  }),
  problem(topic, {
    content: 'Từ điểm \\(P\\) ngoài đường tròn, tiếp tuyến \\(PA\\) và cát tuyến \\(PBC\\) thỏa \\(PB=4,PC=9\\). Độ dài \\(PA\\) bằng', correct: '6', distractors: ['5', '\\sqrt{13}', '36'],
    insight: 'Bình phương tiếp tuyến bằng tích hai đoạn của cát tuyến cùng xuất phát từ điểm ngoài.',
    reasoning: ['Định lý công suất điểm: \\(PA^2=PB\\cdot PC\\).', 'Thay số được \\(PA^2=4\\cdot9=36\\).', 'Độ dài dương nên \\(PA=6\\).'], tags: ['công suất điểm', 'tiếp tuyến'],
    stimulus: diagram('math10-geo-power-tangent', 'Tiếp tuyến và cát tuyến', 'Điểm \\(P\\) nằm ngoài đường tròn; \\(PB=4,PC=9\\).', chord, 'Tiếp tuyến PA và cát tuyến PBC của đường tròn')
  }),
  problem(topic, {
    content: 'Hai dây \\(AB,CD\\) cắt nhau tại \\(P\\) trong đường tròn. Biết \\(PA=3,PB=8,PC=4\\). Độ dài \\(PD\\) là', correct: '6', distractors: ['4', '8', '12'],
    insight: 'Tích hai đoạn trên mỗi dây qua giao điểm là bằng nhau.',
    reasoning: ['Áp dụng định lý hai dây cắt nhau: \\(PA\\cdot PB=PC\\cdot PD\\).', 'Thay số: \\(3\\cdot8=4\\cdot PD\\).', 'Suy ra \\(PD=6\\).'], tags: ['hai dây cắt nhau', 'công suất điểm'],
    stimulus: diagram('math10-geo-intersect-chords', 'Hai dây cắt nhau', 'Các đoạn từ giao điểm có \\(PA=3,PB=8,PC=4\\).', chord, 'Hai dây AB và CD cắt nhau tại P trong đường tròn')
  }),
  problem(topic, {
    content: 'Hình chữ nhật \\(ABCD\\) có \\(AB=6,BC=8\\). Độ dài đường chéo \\(AC\\) bằng', correct: '10', distractors: ['7', '12', '14'],
    insight: 'Đường chéo là cạnh huyền của tam giác vuông tạo bởi hai cạnh hình chữ nhật.',
    reasoning: ['Tam giác \\(ABC\\) vuông tại \\(B\\).', 'Pythagore: \\(AC^2=AB^2+BC^2=36+64\\).', 'Suy ra \\(AC=10\\).'], tags: ['hình chữ nhật', 'Pythagore'],
    stimulus: diagram('math10-geo-rectangle', 'Tứ giác nội tiếp đặc biệt', 'Hình chữ nhật có hai cạnh liên tiếp dài \\(6,8\\).', cyclic, 'Hình chữ nhật ABCD cùng hai đường chéo')
  }),
  problem(topic, {
    content: 'Tứ giác \\(ABCD\\) nội tiếp có \\(\\angle A=72^\\circ\\). Số đo \\(\\angle C\\) bằng', correct: '108^\\circ', distractors: ['72^\\circ', '90^\\circ', '118^\\circ'],
    insight: 'Hai góc đối của tứ giác nội tiếp bù nhau.',
    reasoning: ['Tứ giác nội tiếp thỏa \\(\\angle A+\\angle C=180^\\circ\\).', 'Thay \\(\\angle A=72^\\circ\\).', 'Suy ra \\(\\angle C=108^\\circ\\).'], tags: ['tứ giác nội tiếp', 'góc đối'],
    stimulus: diagram('math10-geo-cyclic-angle', 'Góc đối tứ giác nội tiếp', 'Bốn điểm \\(A,B,C,D\\) cùng thuộc một đường tròn.', cyclic, 'Tứ giác ABCD nội tiếp với hai góc đối A và C')
  }),
  problem(topic, {
    content: 'Góc tạo bởi tiếp tuyến tại \\(A\\) và dây \\(AB\\) bằng \\(35^\\circ\\). Góc nội tiếp chắn dây \\(AB\\) ở cung đối diện bằng', correct: '35^\\circ', distractors: ['55^\\circ', '70^\\circ', '145^\\circ'],
    insight: 'Góc giữa tiếp tuyến và dây bằng góc nội tiếp cùng chắn dây đó.',
    reasoning: ['Xác định dây chung được chắn là \\(AB\\).', 'Áp dụng định lý góc tạo bởi tiếp tuyến và dây cung.', 'Góc nội tiếp tương ứng bằng \\(35^\\circ\\).'], tags: ['tiếp tuyến dây cung', 'góc nội tiếp'],
    stimulus: diagram('math10-geo-tangent-angle', 'Góc tiếp tuyến–dây', 'Tiếp tuyến tại \\(A\\) tạo với dây \\(AB\\) góc \\(35^\\circ\\).', chord, 'Tiếp tuyến tại A và dây AB của đường tròn')
  }),
  problem(topic, {
    content: 'Đường tròn bán kính \\(6\\) có dây chắn góc ở tâm \\(120^\\circ\\). Độ dài dây bằng', correct: '6\\sqrt3', distractors: ['6', '12', '3\\sqrt3'],
    insight: 'Chia tam giác cân tạo bởi hai bán kính thành hai tam giác vuông.',
    reasoning: ['Dây có độ dài \\(2R\\sin(120^\\circ/2)\\).', 'Thay \\(R=6\\) được \\(12\\sin60^\\circ\\).', 'Kết quả là \\(6\\sqrt3\\).'], tags: ['dây cung', 'góc ở tâm'],
    stimulus: diagram('math10-geo-central-chord', 'Dây và góc ở tâm', 'Bán kính bằng \\(6\\), góc ở tâm chắn dây bằng \\(120^\\circ\\).', chord, 'Dây cung cùng hai bán kính tạo góc ở tâm 120 độ')
  }),
  problem(topic, {
    content: 'Hai tam giác đồng dạng có tỉ số cạnh tương ứng \\(3/2\\). Tỉ số diện tích của chúng bằng', correct: '\\dfrac94', distractors: ['\\dfrac32', '\\dfrac83', '\\dfrac{27}8'],
    insight: 'Diện tích biến đổi theo bình phương tỉ số đồng dạng.',
    reasoning: ['Gọi tỉ số đồng dạng là \\(k=3/2\\).', 'Tỉ số diện tích bằng \\(k^2\\).', 'Do đó kết quả là \\((3/2)^2=9/4\\).'], tags: ['đồng dạng', 'tỉ số diện tích'],
    stimulus: diagram('math10-geo-similar', 'Hai tam giác đồng dạng', 'Tỉ số hai cạnh tương ứng của hai tam giác là \\(3:2\\).', triangle, 'Hai tam giác có cùng hình dạng với tỉ lệ 3 trên 2')
  }),
  problem(topic, {
    content: 'Trọng tâm \\(G\\) của tam giác nằm trên trung tuyến \\(AM=9\\). Độ dài \\(AG\\) bằng', correct: '6', distractors: ['3', '4.5', '9'],
    insight: 'Trọng tâm chia mỗi trung tuyến theo tỉ lệ \\(2:1\\) kể từ đỉnh.',
    reasoning: ['Trên trung tuyến, \\(AG:GM=2:1\\).', 'Vì thế \\(AG=(2/3)AM\\).', 'Thay \\(AM=9\\) được \\(AG=6\\).'], tags: ['trọng tâm', 'trung tuyến'],
    stimulus: diagram('math10-geo-centroid', 'Trọng tâm trên trung tuyến', 'Trung tuyến \\(AM\\) dài \\(9\\), \\(G\\) là trọng tâm.', triangle, 'Trọng tâm G chia trung tuyến AM theo tỉ lệ hai trên một')
  }),
  problem(topic, {
    content: 'Tam giác vuông tại \\(A\\) có \\(AB=6,AC=8\\). Khoảng cách từ tâm ngoại tiếp \\(O\\) đến trọng tâm \\(G\\) bằng', correct: '\\dfrac53', distractors: ['\\dfrac52', '3', '5'],
    insight: 'Đặt tọa độ theo hai cạnh vuông để tính trực tiếp hai tâm.',
    reasoning: ['Chọn \\(A(0,0),B(6,0),C(0,8)\\).', 'Tâm ngoại tiếp là trung điểm \\(BC\\): \\(O(3,4)\\); trọng tâm \\(G(2,8/3)\\).', 'Tính \\(OG=\\sqrt{1^2+(4/3)^2}=5/3\\).'], tags: ['tâm tam giác', 'tọa độ hóa'],
    stimulus: diagram('math10-geo-og-right', 'Tâm ngoại tiếp và trọng tâm', 'Tam giác vuông tại \\(A\\), hai cạnh góc vuông dài \\(6,8\\).', centers, 'Tam giác vuông cùng tâm ngoại tiếp O và trọng tâm G')
  }),
  problem(topic, {
    content: 'Đường tròn nội tiếp tam giác \\(ABC\\) tiếp xúc cạnh \\(AB\\) tại \\(E\\). Biết \\(AB=10,AC=13,BC=15\\). Độ dài \\(AE\\) bằng', correct: '4', distractors: ['5', '6', '9'],
    insight: 'Hai tiếp tuyến xuất phát từ cùng một đỉnh có độ dài bằng nhau; độ dài tiếp tuyến tại A là \\(s-a\\).',
    reasoning: ['Nửa chu vi là \\(s=(10+13+15)/2=19\\).', 'Cạnh đối diện đỉnh \\(A\\) là \\(BC=15\\).', 'Độ dài tiếp tuyến từ \\(A\\) đến đường tròn nội tiếp bằng \\(s-BC=19-15=4\\).'], tags: ['tiếp tuyến nội tiếp', 'nửa chu vi'],
    stimulus: diagram('math10-geo-incircle-contact', 'Tiếp điểm đường tròn nội tiếp', 'Tam giác có \\(AB=10,AC=13,BC=15\\); đường tròn nội tiếp tiếp xúc \\(AB\\) tại \\(E\\).', centers, 'Đường tròn nội tiếp tam giác tiếp xúc cạnh AB tại E')
  }),
  problem(topic, {
    content: 'Tam giác có ba cạnh \\(13,14,15\\). Khoảng cách giữa tâm ngoại tiếp \\(O\\) và tâm nội tiếp \\(I\\) bằng', correct: '\\dfrac{\\sqrt{65}}8', distractors: ['\\dfrac18', '\\dfrac{65}8', '\\dfrac{\\sqrt{65}}4'],
    insight: 'Tính \\(r,R\\) từ diện tích rồi dùng hệ thức Euler \\(OI^2=R(R-2r)\\).',
    reasoning: ['Heron cho \\(S=84\\), nửa chu vi \\(s=21\\), nên \\(r=S/s=4\\).', 'Bán kính ngoại tiếp \\(R=abc/(4S)=65/8\\).', 'Euler: \\(OI^2=(65/8)(65/8-8)=65/64\\).', 'Suy ra \\(OI=\\sqrt{65}/8\\).'], tags: ['hệ thức Euler', 'hai tâm'],
    stimulus: diagram('math10-geo-oi', 'Khoảng cách hai tâm', 'Tam giác có ba cạnh \\(13,14,15\\); \\(O,I\\) là tâm ngoại tiếp và nội tiếp.', centers, 'Tâm O và I trong tam giác có ba cạnh 13 14 15')
  }),
  problem(topic, {
    content: 'Độ dài đường cevian \\(AD\\) bằng', correct: '\\sqrt{145}', distractors: ['\\sqrt{97}', '\\sqrt{193}', '12'],
    insight: 'Dữ kiện chia cạnh không phải trung điểm hay phân giác; định lý Stewart là công cụ trực tiếp.',
    reasoning: ['Đặt \\(BD=6,DC=8,BC=14\\), \\(AB=13,AC=15\\).', 'Stewart: \\(15^2\\cdot6+13^2\\cdot8=14(AD^2+6\\cdot8)\\).', 'Vế trái bằng \\(2702\\), nên \\(AD^2+48=193\\).', 'Suy ra \\(AD=\\sqrt{145}\\).'], tags: ['Stewart', 'cevian', 'Olympic'],
    stimulus: diagram('math10-geo-stewart', 'Cevian chia cạnh đáy', '\\(AB=13,AC=15,BC=14\\); điểm \\(D\\in BC\\) với \\(BD=6,DC=8\\).', triangle, 'Cevian AD chia cạnh BC thành hai đoạn 6 và 8')
  }),
  problem(topic, {
    content: 'Diện tích tam giác \\(ABD\\) bằng', correct: '20', distractors: ['25', '30', '40'],
    insight: 'Hai tam giác chung đường cao từ \\(A\\) xuống \\(BC\\), nên tỉ số diện tích bằng tỉ số đáy.',
    reasoning: ['Phân giác cho \\(BD/DC=AB/AC=8/12=2/3\\).', 'Hai tam giác \\(ABD,ACD\\) chung chiều cao nên diện tích cũng theo tỉ lệ \\(2:3\\).', 'Tổng diện tích là \\(50\\), gồm năm phần bằng nhau.', 'Diện tích \\(ABD=50\\cdot2/5=20\\).'], tags: ['phân giác', 'tỉ số diện tích', 'Olympic'],
    stimulus: diagram('math10-geo-bisector-area', '\\(AD\\) là phân giác', '\\(AB=8,AC=12\\), diện tích \\(ABC=50\\).', bisector, 'Phân giác AD chia tam giác ABC thành hai phần')
  }),
  problem(topic, {
    content: 'Tứ giác nội tiếp có bốn cạnh liên tiếp \\(3,4,5,6\\). Diện tích của tứ giác bằng', correct: '6\\sqrt{10}', distractors: ['12', '10\\sqrt6', '18'],
    insight: 'Tứ giác nội tiếp đạt đúng công thức Brahmagupta theo bốn cạnh.',
    reasoning: ['Nửa chu vi là \\(s=(3+4+5+6)/2=9\\).', 'Brahmagupta: \\(S^2=(s-3)(s-4)(s-5)(s-6)\\).', 'Tính \\(S^2=6\\cdot5\\cdot4\\cdot3=360\\).', 'Suy ra \\(S=6\\sqrt{10}\\).'], tags: ['Brahmagupta', 'tứ giác nội tiếp', 'Olympic'],
    stimulus: diagram('math10-geo-brahmagupta', 'Tứ giác nội tiếp biết bốn cạnh', 'Bốn cạnh liên tiếp của \\(ABCD\\) là \\(3,4,5,6\\).', cyclic, 'Tứ giác ABCD nội tiếp có bốn cạnh khác nhau')
  }),
  problem(topic, {
    content: 'Tam giác có ba cạnh \\(13,14,15\\). Khoảng cách từ tâm ngoại tiếp \\(O\\) đến trực tâm \\(H\\) bằng', correct: '\\dfrac{\\sqrt{265}}8', distractors: ['\\dfrac{\\sqrt{65}}8', '\\dfrac{15}8', '\\sqrt{265}'],
    insight: 'Dùng công thức Euler \\(OH^2=9R^2-(a^2+b^2+c^2)\\) sau khi tính bán kính ngoại tiếp.',
    reasoning: ['Diện tích tam giác là \\(84\\), nên \\(R=13\\cdot14\\cdot15/(4\\cdot84)=65/8\\).', 'Tổng bình phương ba cạnh là \\(13^2+14^2+15^2=590\\).', 'Do đó \\(OH^2=9(65/8)^2-590=265/64\\).', 'Suy ra \\(OH=\\sqrt{265}/8\\).'], tags: ['đường Euler', 'trực tâm', 'Olympic'],
    stimulus: diagram('math10-geo-oh', 'Tâm ngoại tiếp và trực tâm', 'Tam giác có ba cạnh \\(13,14,15\\); \\(O,H\\) là tâm ngoại tiếp và trực tâm.', centers, 'Đường nối tâm ngoại tiếp O và trực tâm H')
  })
];
