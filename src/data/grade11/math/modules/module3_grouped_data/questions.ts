import type { CourseQuestion } from '@/data/schema';
import type { PracticeRole, QuestionRepresentationType } from '@/types';

export type Module3QuestionSpec = {
  number: number; lessonId: string; questionTypeId: string; subTypeId: string;
  role: PracticeRole; representation: QuestionRepresentationType; content: string;
  options: [string, string, string, string]; answer: 'A' | 'B' | 'C' | 'D';
  outcomeId: string; recognition: string; work: string; conclusion: string;
  difficulty?: CourseQuestion['difficulty']; holdout?: boolean;
};

const q = (
  number: number, lessonId: string, questionTypeId: string, subTypeId: string,
  role: PracticeRole, representation: QuestionRepresentationType, content: string,
  options: Module3QuestionSpec['options'], answer: Module3QuestionSpec['answer'],
  outcomeId: string, recognition: string, work: string, conclusion: string,
  difficulty: CourseQuestion['difficulty'] = 'medium', holdout = false
): Module3QuestionSpec => ({ number, lessonId, questionTypeId, subTypeId, role, representation, content, options, answer, outcomeId, recognition, work, conclusion, difficulty, holdout });

export const g11MathModule3QuestionSpecs: Module3QuestionSpec[] = [
  q(85,'math11-kntt-l8','math11-qt08','math11-qt08-st-read','guided','table','Hai nhóm $[0;10)$ và $[10;20)$ có tần số 4 và 6. Cỡ mẫu bằng:',['$4$','$10$','$20$','$24$'],'B','out-math11-m3-01','Cộng tất cả tần số.','$n=4+6=10$.','Cỡ mẫu là 10.','easy'),
  q(86,'math11-kntt-l8','math11-qt08','math11-qt08-st-read','near_transfer','table','Giá trị đại diện của nhóm $[20;30)$ là:',['$20$','$22{,}5$','$25$','$30$'],'C','out-math11-m3-01','Lấy trung điểm hai đầu mút.','$x=(20+30)/2=25$.','Giá trị đại diện là 25.','easy'),
  q(87,'math11-kntt-l8','math11-qt08','math11-qt08-st-read','representation_switch','text','Tần số của một nhóm cho biết:',['Độ dài của nhóm','Trung điểm nhóm','Số quan sát thuộc nhóm','Tỉ lệ phần trăm bắt buộc'],'C','out-math11-m3-01','Dùng định nghĩa tần số.','Tần số đếm số giá trị rơi vào khoảng nhóm.','Chọn phương án C.','easy'),
  q(88,'math11-kntt-l8','math11-qt08','math11-qt08-st-read','misconception_check','table','Dữ liệu $1,2,4,5,7,9$ được ghép vào $[0;5)$ và $[5;10)$. Hai tần số là:',['$2;4$','$3;3$','$4;2$','$5;1$'],'B','out-math11-m3-01','Chú ý 5 không thuộc nhóm đầu.','Nhóm đầu có 1,2,4; nhóm sau có 5,7,9.','Hai tần số là 3 và 3.'),
  q(89,'math11-kntt-l8','math11-qt08','math11-qt08-st-read','retention','text','Giá trị nào thuộc nhóm $[10;20)$?',['$10$','$20$','$21$','$9{,}9$'],'A','out-math11-m3-01','Khoảng nhận đầu trái, loại đầu phải.','$10\\in[10;20)$ nhưng $20\\notin[10;20)$.','Chọn 10.','easy'),
  q(90,'math11-kntt-l8','math11-qt08','math11-qt08-st-read','mastery_holdout','table','Một nhóm có tần số 8 trong mẫu gồm 40 quan sát. Tần số tương đối là:',['$8\\%$','$16\\%$','$20\\%$','$32\\%$'],'C','out-math11-m3-01','Chia tần số nhóm cho cỡ mẫu.','$8/40=0{,}2=20\\%$.','Tần số tương đối là 20%.','hard',true),
  q(91,'math11-kntt-l8','math11-qt08','math11-qt08-st-group','guided','table','Các nhóm $[0;5)$, $[5;10)$, $[10;15)$ có tần số $2,5,3$. Nhóm có tần số lớn nhất là:',['$[0;5)$','$[5;10)$','$[10;15)$','Cả ba'],'B','out-math11-m3-01','So sánh ba tần số.','Giá trị lớn nhất là 5, ứng với nhóm thứ hai.','Nhóm cần tìm là $[5;10)$.','easy'),
  q(92,'math11-kntt-l8','math11-qt08','math11-qt08-st-group','near_transfer','table','Bảng có các tần số $5,8,7,x$ và cỡ mẫu 25. Giá trị $x$ là:',['$5$','$6$','$7$','$8$'],'A','out-math11-m3-01','Tổng tần số bằng cỡ mẫu.','$x=25-(5+8+7)=5$.','Giá trị thiếu là 5.'),
  q(93,'math11-kntt-l8','math11-qt08','math11-qt08-st-group','representation_switch','table','Các nhóm $[0;10)$, $[10;20)$, $[20;30)$ có các giá trị đại diện lần lượt là:',['$5,15,25$','$0,10,20$','$10,20,30$','$5,10,15$'],'A','out-math11-m3-01','Tính trung điểm từng khoảng.','Các trung điểm là 5, 15 và 25.','Chọn phương án A.','easy'),
  q(94,'math11-kntt-l8','math11-qt08','math11-qt08-st-group','misconception_check','text','Ghép dữ liệu $2,4,5,7,8,11$ vào $[0;5)$, $[5;10)$, $[10;15)$. Các tần số là:',['$3,2,1$','$2,2,2$','$2,3,1$','$1,3,2$'],'C','out-math11-m3-01','Xếp đúng giá trị ở ranh giới 5.','Hai giá trị vào nhóm đầu, ba vào nhóm hai, một vào nhóm ba.','Các tần số là $2,3,1$.'),
  q(95,'math11-kntt-l8','math11-qt08','math11-qt08-st-group','far_transfer','equation','Độ dài chung của các nhóm $[1;3)$, $[3;5)$, $[5;7)$ là:',['$1$','$2$','$3$','$4$'],'B','out-math11-m3-01','Độ dài nhóm bằng cận trên trừ cận dưới.','$h=3-1=2$.','Độ dài nhóm là 2.'),
  q(96,'math11-kntt-l8','math11-qt08','math11-qt08-st-group','mastery_holdout','table','Hai nhóm có giá trị đại diện 5, 15 và tần số 2, 3. Tổng có trọng số $\\sum n_ix_i$ bằng:',['$25$','$35$','$45$','$55$'],'D','out-math11-m3-01','Nhân từng đại diện với tần số rồi cộng.','$2\\cdot5+3\\cdot15=55$.','Tổng có trọng số bằng 55.','hard',true),

  q(97,'math11-kntt-l9','math11-qt09','math11-qt09-st-mean-mode','guided','table','Hai nhóm $[0;10)$, $[10;20)$ có tần số 2 và 3. Số trung bình xấp xỉ là:',['$10$','$11$','$12$','$13$'],'B','out-math11-m3-02','Dùng trung điểm 5 và 15.','$\\bar x\\approx(2\\cdot5+3\\cdot15)/5=11$.','Số trung bình xấp xỉ 11.','easy'),
  q(98,'math11-kntt-l9','math11-qt09','math11-qt09-st-mean-mode','near_transfer','table','Hai giá trị đại diện 2 và 6 có tần số 1 và 3. Số trung bình xấp xỉ là:',['$4$','$4{,}5$','$5$','$5{,}5$'],'C','out-math11-m3-02','Tính trung bình có trọng số.','$(1\\cdot2+3\\cdot6)/4=5$.','Kết quả xấp xỉ 5.'),
  q(99,'math11-kntt-l9','math11-qt09','math11-qt09-st-mean-mode','representation_switch','table','Các nhóm có tần số lần lượt $4,9,6$. Nhóm chứa mốt là:',['Nhóm thứ nhất','Nhóm thứ hai','Nhóm thứ ba','Không xác định'],'B','out-math11-m3-02','Nhóm chứa mốt có tần số lớn nhất.','Tần số 9 lớn nhất.','Nhóm thứ hai chứa mốt.','easy'),
  q(100,'math11-kntt-l9','math11-qt09','math11-qt09-st-mean-mode','near_transfer','equation','Ba nhóm $[0;10)$, $[10;20)$, $[20;30)$ có tần số $4,8,6$. Mốt xấp xỉ là:',['$15$','$16{,}67$','$17{,}5$','$18$'],'B','out-math11-m3-02','Áp dụng công thức mốt ở nhóm giữa.','$M_o=10+\\frac{8-4}{16-4-6}\\cdot10\\approx16{,}67$.','Mốt xấp xỉ $16{,}67$.','hard'),
  q(101,'math11-kntt-l9','math11-qt09','math11-qt09-st-mean-mode','misconception_check','text','Vì sao số trung bình tính từ bảng ghép nhóm thường là xấp xỉ?',['Vì cỡ mẫu luôn nhỏ','Vì không cộng tần số','Vì dùng giá trị đại diện thay dữ liệu gốc','Vì không có đơn vị'],'C','out-math11-m3-02','Xét thông tin bị mất khi ghép nhóm.','Ta chỉ biết khoảng, không biết chính xác từng giá trị.','Nguyên nhân là dùng giá trị đại diện.'),
  q(102,'math11-kntt-l9','math11-qt09','math11-qt09-st-mean-mode','mastery_holdout','table','Các đại diện $10,20,30$ có tần số $2,5,3$. Số trung bình xấp xỉ là:',['$20$','$21$','$22$','$23$'],'B','out-math11-m3-02','Tính tổng có trọng số rồi chia cỡ mẫu.','$(20+100+90)/10=21$.','Số trung bình xấp xỉ 21.','hard',true),
  q(103,'math11-kntt-l9','math11-qt09','math11-qt09-st-median-quartile','guided','table','Các nhóm $[0;10)$, $[10;20)$, $[20;30)$ có tần số $4,8,8$. Trung vị xấp xỉ là:',['$15$','$16$','$17{,}5$','$18$'],'C','out-math11-m3-02','Vị trí $n/2=10$ nằm ở nhóm hai.','$M_e=10+\\frac{10-4}{8}\\cdot10=17{,}5$.','Trung vị xấp xỉ $17{,}5$.'),
  q(104,'math11-kntt-l9','math11-qt09','math11-qt09-st-median-quartile','near_transfer','table','Mẫu có 40 quan sát, tần số tích lũy sau các nhóm là $6,18,31,40$. $Q_1$ thuộc nhóm:',['Thứ nhất','Thứ hai','Thứ ba','Thứ tư'],'B','out-math11-m3-02','Tìm nhóm chứa vị trí $n/4=10$.','$6<10\\le18$.','$Q_1$ thuộc nhóm thứ hai.'),
  q(105,'math11-kntt-l9','math11-qt09','math11-qt09-st-median-quartile','representation_switch','equation','Mẫu có $n=30$; nhóm chứa trung vị là $[10;20)$, tần số nhóm 10 và tần số tích lũy trước nhóm là 8. Trung vị là:',['$15$','$16$','$17$','$18$'],'C','out-math11-m3-02','Thay vào công thức trung vị với $h=10$.','$M_e=10+\\frac{15-8}{10}\\cdot10=17$.','Trung vị bằng 17.'),
  q(106,'math11-kntt-l9','math11-qt09','math11-qt09-st-median-quartile','far_transfer','equation','Mẫu có $n=40$; nhóm chứa $Q_3$ là $[20;30)$, tần số 12, tích lũy trước nhóm 18. $Q_3$ bằng:',['$30$','$28$','$27{,}5$','$25$'],'A','out-math11-m3-02','Vị trí $3n/4=30$.','$Q_3=20+\\frac{30-18}{12}\\cdot10=30$.','$Q_3=30$.','hard'),
  q(107,'math11-kntt-l9','math11-qt09','math11-qt09-st-median-quartile','misconception_check','equation','Biết $Q_1=12$, $Q_3=24$. Khoảng tứ phân vị là:',['$10$','$12$','$18$','$36$'],'B','out-math11-m3-02','Khoảng tứ phân vị là hiệu $Q_3-Q_1$.','$24-12=12$.','Khoảng tứ phân vị bằng 12.','easy'),
  q(108,'math11-kntt-l9','math11-qt09','math11-qt09-st-median-quartile','mastery_holdout','equation','Mẫu có $n=40$; nhóm chứa $Q_1$ là $[10;20)$, tần số 14, tích lũy trước nhóm 6. $Q_1$ xấp xỉ là:',['$12$','$12{,}5$','$12{,}86$','$14$'],'C','out-math11-m3-02','Vị trí $n/4=10$.','$Q_1=10+\\frac{10-6}{14}\\cdot10\\approx12{,}86$.','$Q_1\\approx12{,}86$.','hard',true)
];

export const g11MathModule3Questions: CourseQuestion[] = g11MathModule3QuestionSpecs.map(spec => {
  const suffix = String(spec.number).padStart(3, '0');
  return {
    id: `math11-q${suffix}`, courseId: 'grade11:math', moduleId: 'math11-m3',
    lessonId: spec.lessonId, subjectId: 'math', topicId: 'math11-t03',
    questionTypeId: spec.questionTypeId, subTypeId: spec.subTypeId,
    practiceRole: spec.role, representationType: spec.representation,
    isMasteryHoldout: spec.holdout, content: spec.content,
    responseType: 'single_choice', validatorType: 'choice',
    outcomeIds: [spec.outcomeId], options: spec.options, correctAnswer: spec.answer,
    difficulty: spec.difficulty ?? 'medium', sourceType: 'manual'
  };
});
