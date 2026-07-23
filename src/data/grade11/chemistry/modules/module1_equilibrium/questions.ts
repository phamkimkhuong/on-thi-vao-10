import type { Question } from '@/types';

export const g11ChemistryEquilibriumQuestions: Question[] = [
  {
    id: 'chem11-eq-q001', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt01',
    content: 'Phương trình nào biểu diễn một phản ứng thuận nghịch?',
    responseType: 'single_choice',
    options: ['A. $2KClO_3\\xrightarrow{t^\\circ}2KCl+3O_2$', 'B. $CH_4+2O_2\\rightarrow CO_2+2H_2O$', 'C. $N_2+3H_2\\rightleftharpoons2NH_3$', 'D. $AgNO_3+NaCl\\rightarrow AgCl\\downarrow+NaNO_3$'],
    correctAnswer: 'C', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-eq-reversible'], subTypeId: 'chem11-eq-st-reversible', practiceRole: 'guided', representationType: 'equation', estimatedSeconds: 45
  },
  {
    id: 'chem11-eq-q002', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt01',
    content: 'Với hệ $H_2(g)+I_2(g)\\rightleftharpoons2HI(g)$, phản ứng nghịch là',
    responseType: 'single_choice',
    options: ['A. $2HI(g)\\rightarrow H_2(g)+I_2(g)$', 'B. $H_2(g)+I_2(g)\\rightarrow2HI(g)$', 'C. $HI(g)\\rightarrow H(g)+I(g)$', 'D. $H_2(g)\\rightarrow2H(g)$'],
    correctAnswer: 'A', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-eq-reversible'], subTypeId: 'chem11-eq-st-reversible', practiceRole: 'guided', representationType: 'equation', estimatedSeconds: 45
  },
  {
    id: 'chem11-eq-q003', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt01',
    content: 'Điều kiện quan trọng để xem hai quá trình trái chiều là hai chiều của cùng một phản ứng thuận nghịch là',
    responseType: 'single_choice',
    options: ['A. Hai quá trình có cùng tốc độ ở mọi thời điểm.', 'B. Hai quá trình xảy ra trong cùng điều kiện của hệ.', 'C. Nồng độ mọi chất phải bằng nhau.', 'D. Hai quá trình đều cần chất xúc tác.'],
    correctAnswer: 'B', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-eq-reversible'], subTypeId: 'chem11-eq-st-reversible', practiceRole: 'misconception_check', representationType: 'text',
    misconceptionId: 'chem11-mis-eq-reversible-condition', estimatedSeconds: 60
  },
  {
    id: 'chem11-eq-q004', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt01',
    content: 'Trong bình kín, $N_2O_4(g)$ không màu phân li một phần thành $NO_2(g)$ màu nâu và $NO_2$ đồng thời kết hợp lại tạo $N_2O_4$ ở cùng nhiệt độ. Mô tả đúng nhất là',
    responseType: 'single_choice',
    options: ['A. Hai phản ứng độc lập vì có màu khác nhau.', 'B. Chỉ chiều phân li là phản ứng hóa học.', 'C. Hệ chỉ có phản ứng nghịch.', 'D. Đây là hai chiều của phản ứng thuận nghịch.'],
    correctAnswer: 'D', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-eq-reversible'], subTypeId: 'chem11-eq-st-reversible', practiceRole: 'mastery_holdout', representationType: 'text', isMasteryHoldout: true, estimatedSeconds: 75
  },
  {
    id: 'chem11-eq-q005', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt01',
    content: 'Tại trạng thái cân bằng hóa học, hệ thức nào đúng?',
    responseType: 'single_choice',
    options: ['A. $v_{thuận}=v_{nghịch}$', 'B. $[chất\\ đầu]=[sản\\ phẩm]$', 'C. $v_{thuận}=v_{nghịch}=0$', 'D. Mọi nồng độ đều bằng 0'],
    correctAnswer: 'A', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-eq-dynamic'], subTypeId: 'chem11-eq-st-dynamic', practiceRole: 'guided', representationType: 'equation', estimatedSeconds: 40
  },
  {
    id: 'chem11-eq-q006', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt01',
    content: 'Vì sao gọi cân bằng hóa học là cân bằng động?',
    responseType: 'single_choice',
    options: ['A. Vì bình phản ứng luôn chuyển động.', 'B. Vì nồng độ các chất tăng giảm tuần hoàn.', 'C. Vì phản ứng thuận và nghịch vẫn xảy ra với tốc độ bằng nhau.', 'D. Vì các phân tử ngừng chuyển động nhưng nhiệt độ không đổi.'],
    correctAnswer: 'C', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-eq-dynamic'], subTypeId: 'chem11-eq-st-dynamic', practiceRole: 'near_transfer', representationType: 'text', estimatedSeconds: 60
  },
  {
    id: 'chem11-eq-q007', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt01',
    content: 'Một hệ đã đạt cân bằng. Khi theo dõi ở cấp độ vi mô, điều nào vẫn xảy ra?',
    responseType: 'single_choice',
    options: ['A. Chỉ các phân tử sản phẩm tiếp tục phản ứng.', 'B. Các va chạm tạo sản phẩm và tạo lại chất đầu vẫn diễn ra.', 'C. Mọi phân tử đứng yên tại vị trí cố định.', 'D. Chỉ có sự khuếch tán, không còn biến đổi hóa học.'],
    correctAnswer: 'B', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-eq-dynamic'], subTypeId: 'chem11-eq-st-dynamic', practiceRole: 'representation_switch', representationType: 'text', estimatedSeconds: 70
  },
  {
    id: 'chem11-eq-q008', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt01',
    content: 'Một lượng rất nhỏ đồng vị đánh dấu của chất A được thêm vào hệ $A\\rightleftharpoons B$ đang cân bằng mà không làm thay đổi đáng kể thành phần hệ. Sau một thời gian, dấu đồng vị xuất hiện trong cả A và B. Bằng chứng này trực tiếp ủng hộ kết luận nào?',
    responseType: 'single_choice',
    options: ['A. Nồng độ A phải bằng nồng độ B.', 'B. Phản ứng thuận nhanh hơn phản ứng nghịch.', 'C. Cân bằng chỉ tồn tại khi có đồng vị.', 'D. Hai chiều phản ứng vẫn diễn ra ở cân bằng.'],
    correctAnswer: 'D', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-eq-dynamic'], subTypeId: 'chem11-eq-st-dynamic', practiceRole: 'mastery_holdout', representationType: 'experiment',
    misconceptionId: 'chem11-mis-eq-stops', isMasteryHoldout: true, estimatedSeconds: 100
  },
  {
    id: 'chem11-eq-q009', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt01',
    content: 'Ở cân bằng, $[A]=0{,}20$ M và $[B]=0{,}80$ M. Nhận xét đúng là',
    responseType: 'single_choice',
    options: ['A. Hệ không thể cân bằng vì hai nồng độ khác nhau.', 'B. Hệ có thể cân bằng nếu các nồng độ đã ổn định và hai tốc độ bằng nhau.', 'C. Phản ứng nghịch đã dừng vì B nhiều hơn A.', 'D. Phải chờ đến khi $[A]=[B]=0{,}50$ M.'],
    correctAnswer: 'B', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-eq-dynamic'], subTypeId: 'chem11-eq-st-concentration', practiceRole: 'misconception_check', representationType: 'equation',
    misconceptionId: 'chem11-mis-eq-equal-concentration', estimatedSeconds: 60
  },
  {
    id: 'chem11-eq-q010', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt01',
    content: 'Phát biểu nào phân biệt đúng “nồng độ không đổi” và “nồng độ bằng nhau” tại cân bằng?',
    responseType: 'single_choice',
    options: ['A. Không đổi nghĩa là mỗi chất giữ giá trị ổn định theo thời gian; các giá trị có thể khác nhau.', 'B. Hai cụm từ luôn đồng nghĩa.', 'C. Không đổi nghĩa là mọi nồng độ bằng 0.', 'D. Bằng nhau nghĩa là tốc độ hai chiều bằng 0.'],
    correctAnswer: 'A', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-eq-dynamic'], subTypeId: 'chem11-eq-st-concentration', practiceRole: 'near_transfer', representationType: 'text', estimatedSeconds: 70
  },
  {
    id: 'chem11-eq-q011', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt01',
    content: 'Trong ba thí nghiệm cùng nhiệt độ, hệ I cân bằng với $[A]=[B]$; hệ II cân bằng với $[A]>[B]$; hệ III cân bằng với $[A]<[B]$. Kết luận nào hợp lí?',
    responseType: 'single_choice',
    options: ['A. Chỉ hệ I là cân bằng.', 'B. Chỉ hệ II và III là cân bằng động.', 'C. Cả ba có thể cân bằng; quan hệ lớn–nhỏ giữa nồng độ không phải tiêu chí quyết định.', 'D. Không hệ nào cân bằng vì nồng độ phải bằng 1 M.'],
    correctAnswer: 'C', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-eq-dynamic'], subTypeId: 'chem11-eq-st-concentration', practiceRole: 'far_transfer', representationType: 'table',
    misconceptionId: 'chem11-mis-eq-equal-concentration', estimatedSeconds: 95
  },
  {
    id: 'chem11-eq-q012', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt01',
    content: 'Một học sinh nói: “Sau 20 phút, nồng độ mọi chất không đổi nên từ phút 20 trở đi không còn phân tử nào biến đổi.” Cách phản biện đầy đủ nhất là',
    responseType: 'single_choice',
    options: ['A. Đúng, vì nồng độ không đổi chứng minh tốc độ bằng 0.', 'B. Sai, vì nồng độ phải tiếp tục tăng.', 'C. Đúng nếu bình kín.', 'D. Sai; thành phần vĩ mô ổn định do tốc độ thuận bằng tốc độ nghịch, còn biến đổi vi mô vẫn diễn ra.'],
    correctAnswer: 'D', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-eq-dynamic'], subTypeId: 'chem11-eq-st-concentration', practiceRole: 'mastery_holdout', representationType: 'text',
    misconceptionId: 'chem11-mis-eq-stops', isMasteryHoldout: true, estimatedSeconds: 110
  },
  {
    id: 'chem11-eq-q013', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt02',
    content: 'Dựa vào bảng, thời điểm sớm nhất có thể xem các nồng độ đã ổn định là',
    stimulus: {
      id: 'chem11-eq-stim-table-01', title: 'Nồng độ theo thời gian',
      dataTable: {
        caption: 'Nồng độ A và B trong một hệ kín',
        columns: [{ key: 't', label: 'Thời gian', unit: 's' }, { key: 'a', label: '[A]', unit: 'M' }, { key: 'b', label: '[B]', unit: 'M' }],
        rows: [{ t: 0, a: 1.0, b: 0.0 }, { t: 10, a: 0.7, b: 0.3 }, { t: 20, a: 0.55, b: 0.45 }, { t: 30, a: 0.5, b: 0.5 }, { t: 40, a: 0.5, b: 0.5 }]
      }
    },
    responseType: 'single_choice', options: ['A. 10 s', 'B. 20 s', 'C. 30 s', 'D. 40 s'], correctAnswer: 'C',
    difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-eq-data'], subTypeId: 'chem11-eq-st-table', practiceRole: 'guided', representationType: 'table', estimatedSeconds: 75
  },
  {
    id: 'chem11-eq-q014', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt02',
    content: 'Trong một bảng số liệu, từ 25 s trở đi $[X]$ và $[Y]$ đều giữ nguyên. Dữ kiện này cho biết trực tiếp điều gì?',
    responseType: 'single_choice',
    options: ['A. Thành phần vĩ mô của hệ đã ổn định.', 'B. Nồng độ X bằng nồng độ Y.', 'C. Hai phản ứng đã dừng.', 'D. Hằng số cân bằng bằng 1.'],
    correctAnswer: 'A', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-eq-data'], subTypeId: 'chem11-eq-st-table', practiceRole: 'near_transfer', representationType: 'table', estimatedSeconds: 60
  },
  {
    id: 'chem11-eq-q015', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt02',
    content: 'Bảng cho $[P]$ tại 20, 30, 40, 50 s lần lượt là $0{,}42; 0{,}48; 0{,}50; 0{,}50$ M. Nếu sai số đo là $\\pm0{,}01$ M, kết luận thận trọng nhất là',
    responseType: 'single_choice',
    options: ['A. Hệ chắc chắn cân bằng từ 20 s.', 'B. Dữ liệu phù hợp với việc nồng độ ổn định từ khoảng 40 s.', 'C. Hệ không bao giờ đạt cân bằng.', 'D. Tại 30 s, tốc độ hai chiều chắc chắn bằng 0.'],
    correctAnswer: 'B', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-eq-data'], subTypeId: 'chem11-eq-st-table', practiceRole: 'far_transfer', representationType: 'table', estimatedSeconds: 90
  },
  {
    id: 'chem11-eq-q016', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt02',
    content: 'Một bảng chỉ cho nồng độ A không đổi từ 30 s nhưng không có dữ liệu về B hoặc tốc độ hai chiều. Kết luận khoa học phù hợp nhất là',
    responseType: 'single_choice',
    options: ['A. Chắc chắn hệ đã cân bằng hóa học.', 'B. Chắc chắn phản ứng đã kết thúc hoàn toàn.', 'C. Dữ liệu gợi ý A ổn định nhưng cần thêm dữ liệu về hệ để khẳng định cân bằng.', 'D. Chắc chắn $[B]=[A]$.'],
    correctAnswer: 'C', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-eq-data'], subTypeId: 'chem11-eq-st-table', practiceRole: 'mastery_holdout', representationType: 'table', isMasteryHoldout: true, estimatedSeconds: 110
  },
  {
    id: 'chem11-eq-q017', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt02',
    content: 'Quan sát đồ thị. Hệ bắt đầu có các nồng độ ổn định từ thời điểm nào?',
    media: [{ id: 'chem11-eq-media-c01', type: 'chart', src: '/assets/chemistry/grade11/equilibrium-concentration-time.svg', alt: 'Đồ thị nồng độ A giảm và B tăng rồi cùng ổn định từ 30 giây.', longDescription: 'A giảm từ 1,0 M xuống 0,4 M; B tăng từ gần 0 lên 0,6 M. Hai đường nằm ngang từ 30 giây.' }],
    responseType: 'single_choice', options: ['A. 10 s', 'B. 20 s', 'C. 30 s', 'D. 50 s'], correctAnswer: 'C',
    difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-eq-data'], subTypeId: 'chem11-eq-st-concentration-graph', practiceRole: 'guided', representationType: 'graph', estimatedSeconds: 60
  },
  {
    id: 'chem11-eq-q018', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt02',
    content: 'Từ đồ thị nồng độ A và B, nhận xét đúng về trạng thái sau 30 s là',
    media: [{ id: 'chem11-eq-media-c02', type: 'chart', src: '/assets/chemistry/grade11/equilibrium-concentration-time.svg', alt: 'Đồ thị nồng độ A ổn định ở 0,4 M và B ổn định ở 0,6 M sau 30 giây.' }],
    responseType: 'single_choice',
    options: ['A. $[A]=[B]$.', 'B. A và B đều hết.', 'C. Phản ứng thuận đã dừng còn phản ứng nghịch tiếp tục.', 'D. Các nồng độ ổn định nhưng không bằng nhau.'],
    correctAnswer: 'D', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-eq-data', 'chem11-eq-dynamic'], subTypeId: 'chem11-eq-st-concentration-graph', practiceRole: 'misconception_check', representationType: 'graph',
    misconceptionId: 'chem11-mis-eq-equal-concentration', estimatedSeconds: 75
  },
  {
    id: 'chem11-eq-q019', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt02',
    content: 'Trên đồ thị nồng độ–thời gian của phản ứng thuận nghịch, hai đường nồng độ cắt nhau tại 15 s nhưng chỉ nằm ngang từ 30 s. Thời điểm cân bằng phù hợp là',
    responseType: 'single_choice',
    options: ['A. 15 s vì hai nồng độ bằng nhau.', 'B. 30 s vì từ đó các nồng độ ổn định.', 'C. 45 s vì phải đợi thêm đúng 15 s.', 'D. Không thể cân bằng nếu hai đường từng cắt nhau.'],
    correctAnswer: 'B', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-eq-data'], subTypeId: 'chem11-eq-st-concentration-graph', practiceRole: 'misconception_check', representationType: 'graph',
    misconceptionId: 'chem11-mis-eq-lines-cross', estimatedSeconds: 90
  },
  {
    id: 'chem11-eq-q020', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt02',
    content: 'Một đồ thị cho thấy $[A]$ và $[B]$ đều nằm ngang sau thời điểm $t_e$. Phát biểu nào là suy luận vượt quá dữ liệu?',
    responseType: 'single_choice',
    options: ['A. Thành phần hệ ổn định sau $t_e$.', 'B. Hệ có dấu hiệu đạt trạng thái cân bằng.', 'C. Từ sau $t_e$, không còn bất kỳ va chạm hiệu quả nào.', 'D. Nồng độ A và B không nhất thiết bằng nhau.'],
    correctAnswer: 'C', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-eq-data', 'chem11-eq-dynamic'], subTypeId: 'chem11-eq-st-concentration-graph', practiceRole: 'mastery_holdout', representationType: 'graph',
    misconceptionId: 'chem11-mis-eq-stops', isMasteryHoldout: true, estimatedSeconds: 110
  },
  {
    id: 'chem11-eq-q021', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt02',
    content: 'Quan sát đồ thị tốc độ. Hệ đạt cân bằng từ thời điểm',
    media: [{ id: 'chem11-eq-media-r01', type: 'chart', src: '/assets/chemistry/grade11/equilibrium-rate-time.svg', alt: 'Tốc độ thuận giảm, tốc độ nghịch tăng và hai tốc độ bằng nhau từ 25 giây.', longDescription: 'Hai đường tốc độ gặp nhau ở 25 giây rồi cùng nằm ngang ở một giá trị dương.' }],
    responseType: 'single_choice', options: ['A. 0 s', 'B. 10 s', 'C. 25 s', 'D. 50 s'], correctAnswer: 'C',
    difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-eq-data'], subTypeId: 'chem11-eq-st-rate-graph', practiceRole: 'guided', representationType: 'graph', estimatedSeconds: 55
  },
  {
    id: 'chem11-eq-q022', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt02',
    content: 'Sau 25 s trên đồ thị, hai tốc độ bằng nhau ở một giá trị lớn hơn 0. Điều này có nghĩa là',
    media: [{ id: 'chem11-eq-media-r02', type: 'chart', src: '/assets/chemistry/grade11/equilibrium-rate-time.svg', alt: 'Hai tốc độ thuận và nghịch bằng nhau ở giá trị dương sau 25 giây.' }],
    responseType: 'single_choice',
    options: ['A. Hai chiều vẫn xảy ra với tốc độ bằng nhau.', 'B. Chỉ phản ứng thuận xảy ra.', 'C. Cả hai phản ứng đã dừng.', 'D. Nồng độ mọi chất bằng nhau.'],
    correctAnswer: 'A', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-eq-data', 'chem11-eq-dynamic'], subTypeId: 'chem11-eq-st-rate-graph', practiceRole: 'representation_switch', representationType: 'graph', estimatedSeconds: 70
  },
  {
    id: 'chem11-eq-q023', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt02',
    content: 'Trong một hệ ban đầu chỉ có chất phản ứng, xu hướng thường gặp trước khi đạt cân bằng là',
    responseType: 'single_choice',
    options: ['A. Cả hai tốc độ luôn bằng 0.', 'B. Tốc độ thuận tăng từ 0 còn tốc độ nghịch giảm.', 'C. Hai tốc độ bằng nhau ngay từ đầu.', 'D. Tốc độ thuận giảm còn tốc độ nghịch tăng cho đến khi bằng nhau.'],
    correctAnswer: 'D', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-eq-data'], subTypeId: 'chem11-eq-st-rate-graph', practiceRole: 'near_transfer', representationType: 'text', estimatedSeconds: 80
  },
  {
    id: 'chem11-eq-q024', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt02',
    content: 'Hai đường tốc độ thuận và nghịch chạm nhau tại $t_1$, sau đó tách ra rồi chỉ bằng nhau bền vững từ $t_2$. Nếu dữ liệu là chính xác, thời điểm đánh dấu trạng thái cân bằng bền vững là',
    responseType: 'single_choice',
    options: ['A. Ngay từ 0 vì hai chiều đều tồn tại.', 'B. $t_1$ vì chỉ cần bằng nhau trong một thời điểm.', 'C. $t_2$ vì từ đó hai tốc độ bằng nhau và duy trì bằng nhau.', 'D. Không thể xác định kể cả khi biết toàn bộ đồ thị.'],
    correctAnswer: 'C', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-eq-data'], subTypeId: 'chem11-eq-st-rate-graph', practiceRole: 'mastery_holdout', representationType: 'graph',
    isMasteryHoldout: true, estimatedSeconds: 105
  },
  {
    id: 'chem11-eq-q025', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt03',
    content: 'Với phản ứng tổng quát $aA(g)+bB(g)\\rightleftharpoons cC(g)+dD(g)$, biểu thức $K_C$ đúng là',
    responseType: 'single_choice',
    options: [
      'A. $K_C=\\dfrac{[C]^c[D]^d}{[A]^a[B]^b}$',
      'B. $K_C=\\dfrac{c[C]+d[D]}{a[A]+b[B]}$',
      'C. $K_C=\\dfrac{[A]^a[B]^b}{[C]^c[D]^d}$',
      'D. $K_C=\\dfrac{[C][D]}{[A][B]}$ trong mọi trường hợp'
    ],
    correctAnswer: 'A', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-eq-kc-expression'], subTypeId: 'chem11-eq-st-kc-expression', practiceRole: 'guided', representationType: 'equation', estimatedSeconds: 60
  },
  {
    id: 'chem11-eq-q026', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt03',
    content: 'Biểu thức $K_C$ của phản ứng $N_2(g)+3H_2(g)\\rightleftharpoons2NH_3(g)$ là',
    responseType: 'single_choice',
    options: [
      'A. $\\dfrac{2[NH_3]}{[N_2]+3[H_2]}$',
      'B. $\\dfrac{[NH_3]^2}{[N_2][H_2]^3}$',
      'C. $\\dfrac{[N_2][H_2]^3}{[NH_3]^2}$',
      'D. $\\dfrac{[NH_3]}{[N_2][H_2]}$'
    ],
    correctAnswer: 'B', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-eq-kc-expression'], subTypeId: 'chem11-eq-st-kc-expression', practiceRole: 'near_transfer', representationType: 'equation', estimatedSeconds: 60
  },
  {
    id: 'chem11-eq-q027', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt03',
    content: 'Với cân bằng dị thể $CaCO_3(s)\\rightleftharpoons CaO(s)+CO_2(g)$, biểu thức $K_C$ là',
    responseType: 'single_choice',
    options: [
      'A. $K_C=\\dfrac{[CaO][CO_2]}{[CaCO_3]}$',
      'B. $K_C=\\dfrac{[CaCO_3]}{[CaO][CO_2]}$',
      'C. $K_C=[CO_2]$',
      'D. $K_C=[CaO]+[CO_2]-[CaCO_3]$'
    ],
    correctAnswer: 'C', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-eq-kc-expression'], subTypeId: 'chem11-eq-st-kc-expression', practiceRole: 'misconception_check', representationType: 'equation',
    misconceptionId: 'chem11-mis-kc-pure-phase', estimatedSeconds: 75
  },
  {
    id: 'chem11-eq-q028', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt03',
    content: 'Cho phản ứng $2SO_2(g)+O_2(g)\\rightleftharpoons2SO_3(g)$. Biểu thức $K_C$ của phản ứng viết theo chiều nghịch $2SO_3(g)\\rightleftharpoons2SO_2(g)+O_2(g)$ là',
    responseType: 'single_choice',
    options: [
      'A. $\\dfrac{[SO_3]^2}{[SO_2]^2[O_2]}$',
      'B. $\\dfrac{2[SO_2]+[O_2]}{2[SO_3]}$',
      'C. $\\dfrac{[SO_2][O_2]}{[SO_3]}$',
      'D. $\\dfrac{[SO_2]^2[O_2]}{[SO_3]^2}$'
    ],
    correctAnswer: 'D', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-eq-kc-expression'], subTypeId: 'chem11-eq-st-kc-expression', practiceRole: 'mastery_holdout', representationType: 'equation',
    isMasteryHoldout: true, estimatedSeconds: 110
  },
  {
    id: 'chem11-eq-q029', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt03',
    content: 'Ở trạng thái cân bằng của $H_2(g)+I_2(g)\\rightleftharpoons2HI(g)$, $[H_2]=0{,}10$ M, $[I_2]=0{,}20$ M và $[HI]=0{,}40$ M. Giá trị $K_C$ bằng',
    responseType: 'single_choice',
    options: ['A. $8{,}0$', 'B. $4{,}0$', 'C. $2{,}0$', 'D. $16{,}0$'],
    correctAnswer: 'A', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-eq-kc-calculation'], subTypeId: 'chem11-eq-st-kc-calculation', practiceRole: 'guided', representationType: 'equation', estimatedSeconds: 80
  },
  {
    id: 'chem11-eq-q030', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt03',
    content: 'Với $N_2O_4(g)\\rightleftharpoons2NO_2(g)$, tại cân bằng có $[N_2O_4]=0{,}50$ M và $[NO_2]=0{,}20$ M. Giá trị $K_C$ là',
    responseType: 'single_choice',
    options: ['A. $0{,}40$', 'B. $0{,}08$', 'C. $2{,}50$', 'D. $5{,}00$'],
    correctAnswer: 'B', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-eq-kc-calculation'], subTypeId: 'chem11-eq-st-kc-calculation', practiceRole: 'near_transfer', representationType: 'equation', estimatedSeconds: 85
  },
  {
    id: 'chem11-eq-q031', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt03',
    content: 'Dựa vào bảng nồng độ cân bằng, tính $K_C$ của phản ứng $CO(g)+H_2O(g)\\rightleftharpoons CO_2(g)+H_2(g)$.',
    stimulus: {
      id: 'chem11-eq-stim-kc-01',
      title: 'Nồng độ tại trạng thái cân bằng',
      dataTable: {
        caption: 'Thành phần của hệ tại nhiệt độ xác định',
        columns: [{ key: 'substance', label: 'Chất' }, { key: 'concentration', label: 'Nồng độ cân bằng', unit: 'M' }],
        rows: [
          { substance: 'CO', concentration: 0.40 },
          { substance: 'H₂O', concentration: 0.20 },
          { substance: 'CO₂', concentration: 0.60 },
          { substance: 'H₂', concentration: 0.30 }
        ]
      }
    },
    responseType: 'single_choice',
    options: ['A. $0{,}44$', 'B. $1{,}50$', 'C. $2{,}25$', 'D. $4{,}50$'],
    correctAnswer: 'C', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-eq-kc-calculation'], subTypeId: 'chem11-eq-st-kc-calculation', practiceRole: 'representation_switch', representationType: 'table', estimatedSeconds: 100
  },
  {
    id: 'chem11-eq-q032', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt03',
    content: 'Tại cân bằng của $2SO_2(g)+O_2(g)\\rightleftharpoons2SO_3(g)$ có $[SO_2]=0{,}20$ M, $[O_2]=0{,}50$ M và $[SO_3]=0{,}40$ M. Giá trị $K_C$ bằng',
    responseType: 'single_choice',
    options: ['A. $2$', 'B. $4$', 'C. $16$', 'D. $8$'],
    correctAnswer: 'D', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-eq-kc-calculation'], subTypeId: 'chem11-eq-st-kc-calculation', practiceRole: 'mastery_holdout', representationType: 'table',
    misconceptionId: 'chem11-mis-kc-coefficient', isMasteryHoldout: true, estimatedSeconds: 120
  },
  {
    id: 'chem11-eq-q033', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt03',
    content: 'Một phản ứng có $K_C=2{,}0\\times10^5$ tại nhiệt độ xác định. Nhận xét phù hợp nhất là',
    responseType: 'single_choice',
    options: [
      'A. Sản phẩm chiếm ưu thế tương đối trong hỗn hợp cân bằng.',
      'B. Phản ứng thuận chắc chắn xảy ra rất nhanh.',
      'C. Chất đầu đã chuyển hóa hoàn toàn 100%.',
      'D. Tốc độ phản ứng thuận lớn hơn tốc độ nghịch tại cân bằng.'
    ],
    correctAnswer: 'A', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-eq-kc-meaning'], subTypeId: 'chem11-eq-st-kc-meaning', practiceRole: 'guided', representationType: 'text', estimatedSeconds: 65
  },
  {
    id: 'chem11-eq-q034', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt03',
    content: 'Nếu $K_C=3{,}0\\times10^{-6}$ thì kết luận định tính đúng là',
    responseType: 'single_choice',
    options: [
      'A. Sản phẩm luôn có nồng độ bằng 0.',
      'B. Chất đầu chiếm ưu thế tương đối trong hỗn hợp cân bằng.',
      'C. Phản ứng nghịch xảy ra nhanh hơn trong mọi thời điểm.',
      'D. Hệ không thể đạt cân bằng.'
    ],
    correctAnswer: 'B', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-eq-kc-meaning'], subTypeId: 'chem11-eq-st-kc-meaning', practiceRole: 'near_transfer', representationType: 'text', estimatedSeconds: 70
  },
  {
    id: 'chem11-eq-q035', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt03',
    content: 'Hai thí nghiệm của cùng một phản ứng được tiến hành ở cùng nhiệt độ nhưng có nồng độ ban đầu khác nhau. Sau khi mỗi hệ đạt cân bằng, phát biểu đúng là',
    responseType: 'single_choice',
    options: [
      'A. Hai hệ bắt buộc có mọi nồng độ cân bằng giống nhau.',
      'B. Hệ có nồng độ ban đầu lớn hơn luôn có $K_C$ lớn hơn.',
      'C. Hai hệ có cùng $K_C$ dù thành phần cân bằng có thể khác nhau.',
      'D. Không thể xác định $K_C$ vì nồng độ ban đầu khác nhau.'
    ],
    correctAnswer: 'C', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-eq-kc-meaning'], subTypeId: 'chem11-eq-st-kc-meaning', practiceRole: 'misconception_check', representationType: 'text',
    misconceptionId: 'chem11-mis-kc-initial-change', estimatedSeconds: 90
  },
  {
    id: 'chem11-eq-q036', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt03',
    content: 'Phản ứng X có $K_C=10^8$, phản ứng Y có $K_C=10^{-8}$ ở cùng nhiệt độ. Chỉ từ hai giá trị này, kết luận nào chắc chắn đúng?',
    responseType: 'single_choice',
    options: [
      'A. X đạt cân bằng nhanh hơn Y.',
      'B. Tốc độ thuận của X lớn hơn tốc độ thuận của Y.',
      'C. X hoàn thành tức thời còn Y không xảy ra.',
      'D. Sản phẩm ưu thế hơn ở cân bằng của X, còn chất đầu ưu thế hơn ở cân bằng của Y; chưa thể so sánh tốc độ.'
    ],
    correctAnswer: 'D', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-eq-kc-meaning'], subTypeId: 'chem11-eq-st-kc-meaning', practiceRole: 'far_transfer', representationType: 'text',
    misconceptionId: 'chem11-mis-kc-rate', isMasteryHoldout: true, estimatedSeconds: 110
  },
  {
    id: 'chem11-eq-q037', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt04',
    content: 'Hệ $N_2(g)+3H_2(g)\\rightleftharpoons2NH_3(g)$ đang cân bằng ở nhiệt độ không đổi. Khi thêm $H_2$, cân bằng chuyển dịch',
    responseType: 'single_choice',
    options: ['A. sang phải để tiêu thụ bớt $H_2$.', 'B. sang trái để tạo thêm $H_2$.', 'C. không chuyển dịch vì $K_C$ không đổi.', 'D. theo chiều làm tăng tổng số mol khí.'],
    correctAnswer: 'A', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-eq-shift-concentration'], subTypeId: 'chem11-eq-st-shift-concentration', practiceRole: 'guided', representationType: 'equation', estimatedSeconds: 60
  },
  {
    id: 'chem11-eq-q038', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt04',
    content: 'Với $N_2(g)+3H_2(g)\\rightleftharpoons2NH_3(g)$ đang cân bằng, liên tục lấy bớt $NH_3$ ra khỏi hệ sẽ làm cân bằng',
    responseType: 'single_choice',
    options: ['A. chuyển dịch sang trái.', 'B. chuyển dịch sang phải để tạo thêm $NH_3$.', 'C. không chuyển dịch.', 'D. dừng hoàn toàn.'],
    correctAnswer: 'B', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-eq-shift-concentration'], subTypeId: 'chem11-eq-st-shift-concentration', practiceRole: 'near_transfer', representationType: 'equation', estimatedSeconds: 60
  },
  {
    id: 'chem11-eq-q039', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt04',
    content: 'Trong cân bằng $H_2(g)+I_2(g)\\rightleftharpoons2HI(g)$, nếu thêm HI ở nhiệt độ không đổi thì',
    responseType: 'single_choice',
    options: ['A. cân bằng chuyển dịch sang phải vì thêm chất.', 'B. $K_C$ tăng nên tạo thêm HI.', 'C. cân bằng chuyển dịch sang trái để tiêu thụ bớt HI.', 'D. hai tốc độ lập tức bằng 0.'],
    correctAnswer: 'C', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-eq-shift-concentration'], subTypeId: 'chem11-eq-st-shift-concentration', practiceRole: 'misconception_check', representationType: 'equation',
    misconceptionId: 'chem11-mis-shift-concentration-rule', estimatedSeconds: 75
  },
  {
    id: 'chem11-eq-q040', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt04',
    content: 'Hệ $N_2(g)+3H_2(g)\\rightleftharpoons2NH_3(g)$ đang cân bằng. Người ta đồng thời lấy bớt $N_2$ và thêm $NH_3$ nhưng giữ nhiệt độ không đổi. Hai tác động này cùng có xu hướng làm cân bằng',
    responseType: 'single_choice',
    options: ['A. sang phải.', 'B. không chuyển dịch.', 'C. chuyển dịch theo hai chiều triệt tiêu nhau chắc chắn.', 'D. sang trái.'],
    correctAnswer: 'D', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-eq-shift-concentration'], subTypeId: 'chem11-eq-st-shift-concentration', practiceRole: 'far_transfer', representationType: 'text',
    isMasteryHoldout: true, estimatedSeconds: 110
  },
  {
    id: 'chem11-eq-q041', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt04',
    content: 'Tăng áp suất của hệ $N_2(g)+3H_2(g)\\rightleftharpoons2NH_3(g)$ bằng cách giảm thể tích bình ở nhiệt độ không đổi làm cân bằng',
    responseType: 'single_choice',
    options: ['A. sang phải, phía có 2 mol khí.', 'B. sang trái, phía có 4 mol khí.', 'C. không chuyển dịch vì có khí ở cả hai vế.', 'D. sang phải vì phản ứng thuận tỏa nhiệt.'],
    correctAnswer: 'A', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-eq-shift-pressure'], subTypeId: 'chem11-eq-st-shift-pressure', practiceRole: 'guided', representationType: 'equation', estimatedSeconds: 70
  },
  {
    id: 'chem11-eq-q042', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt04',
    content: 'Giảm thể tích của hệ $H_2(g)+I_2(g)\\rightleftharpoons2HI(g)$ ở nhiệt độ không đổi sẽ',
    responseType: 'single_choice',
    options: ['A. làm cân bằng sang phải.', 'B. không làm cân bằng chuyển dịch vì hai vế đều có 2 mol khí.', 'C. làm cân bằng sang trái.', 'D. làm $K_C$ giảm.'],
    correctAnswer: 'B', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-eq-shift-pressure'], subTypeId: 'chem11-eq-st-shift-pressure', practiceRole: 'misconception_check', representationType: 'equation',
    misconceptionId: 'chem11-mis-pressure-always-shifts', estimatedSeconds: 75
  },
  {
    id: 'chem11-eq-q043', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt04',
    content: 'Khi tăng thể tích bình chứa hệ $PCl_5(g)\\rightleftharpoons PCl_3(g)+Cl_2(g)$ ở nhiệt độ không đổi, cân bằng chuyển dịch',
    responseType: 'single_choice',
    options: ['A. sang trái vì áp suất giảm.', 'B. không chuyển dịch vì số chất hai vế khác nhau.', 'C. sang phải, phía có tổng số mol khí lớn hơn.', 'D. sang trái, phía có tổng số mol khí lớn hơn.'],
    correctAnswer: 'C', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-eq-shift-pressure'], subTypeId: 'chem11-eq-st-shift-pressure', practiceRole: 'near_transfer', representationType: 'equation', estimatedSeconds: 80
  },
  {
    id: 'chem11-eq-q044', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt04',
    content: 'Trong bình kín có cân bằng $2NO_2(g)\\rightleftharpoons N_2O_4(g)$; $NO_2$ màu nâu còn $N_2O_4$ gần như không màu. Nén nhanh hệ rồi chờ thiết lập cân bằng mới ở cùng nhiệt độ, hiện tượng phù hợp là',
    responseType: 'single_choice',
    options: ['A. cân bằng sang trái và màu nâu đậm hơn.', 'B. không chuyển dịch vì cả hai chất đều là khí.', 'C. $K_C$ tăng và màu nâu mất hoàn toàn.', 'D. cân bằng sang phải và màu nâu nhạt hơn so với ngay sau khi nén.'],
    correctAnswer: 'D', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-eq-shift-pressure'], subTypeId: 'chem11-eq-st-shift-pressure', practiceRole: 'mastery_holdout', representationType: 'text',
    isMasteryHoldout: true, estimatedSeconds: 120
  },
  {
    id: 'chem11-eq-q045', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt04',
    content: 'Hệ $CaCO_3(s)\\rightleftharpoons CaO(s)+CO_2(g)$ đang cân bằng và cả hai chất rắn đều còn trong bình. Thêm một lượng $CaCO_3(s)$ sẽ',
    responseType: 'single_choice',
    options: ['A. không làm chuyển dịch cân bằng.', 'B. làm cân bằng sang phải.', 'C. làm cân bằng sang trái.', 'D. làm $K_C$ tăng.'],
    correctAnswer: 'A', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-eq-shift-concentration'], subTypeId: 'chem11-eq-st-shift-no-effect', practiceRole: 'guided', representationType: 'equation',
    misconceptionId: 'chem11-mis-solid-amount-shifts', estimatedSeconds: 65
  },
  {
    id: 'chem11-eq-q046', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt04',
    content: 'Thêm khí trơ vào một hệ cân bằng khí trong bình có thể tích không đổi và giữ nguyên nhiệt độ. Giả sử khí trơ không phản ứng, cân bằng sẽ',
    responseType: 'single_choice',
    options: ['A. luôn sang phía ít mol khí.', 'B. không chuyển dịch vì nồng độ/áp suất riêng phần của các chất phản ứng không đổi.', 'C. luôn sang phía nhiều mol khí.', 'D. chuyển dịch ngẫu nhiên.'],
    correctAnswer: 'B', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-eq-shift-pressure'], subTypeId: 'chem11-eq-st-shift-no-effect', practiceRole: 'near_transfer', representationType: 'text', estimatedSeconds: 90
  },
  {
    id: 'chem11-eq-q047', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt04',
    content: 'Các thí nghiệm trong bảng đều thực hiện với cùng một phản ứng và cùng nhiệt độ. Thí nghiệm nào làm thay đổi giá trị $K_C$?',
    stimulus: {
      id: 'chem11-eq-stim-shift-01',
      title: 'Các tác động lên hệ cân bằng',
      dataTable: {
        caption: 'Điều kiện tác động',
        columns: [{ key: 'experiment', label: 'Thí nghiệm' }, { key: 'change', label: 'Tác động' }],
        rows: [
          { experiment: 'I', change: 'Thêm một chất phản ứng' },
          { experiment: 'II', change: 'Lấy bớt một sản phẩm' },
          { experiment: 'III', change: 'Giảm thể tích bình khí' }
        ]
      }
    },
    responseType: 'single_choice',
    options: ['A. Chỉ I', 'B. Chỉ III', 'C. Không thí nghiệm nào', 'D. Cả I, II và III'],
    correctAnswer: 'C', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-eq-shift-concentration', 'chem11-eq-shift-pressure'], subTypeId: 'chem11-eq-st-shift-no-effect', practiceRole: 'representation_switch', representationType: 'table',
    misconceptionId: 'chem11-mis-kc-concentration-change', estimatedSeconds: 90
  },
  {
    id: 'chem11-eq-q048', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt04',
    content: 'Xét $H_2(g)+I_2(g)\\rightleftharpoons2HI(g)$ ở nhiệt độ không đổi. Tổ hợp nhận xét nào đúng?',
    responseType: 'single_choice',
    options: [
      'A. Nén hệ làm cân bằng sang phải và tăng $K_C$.',
      'B. Thêm $H_2$ không làm chuyển dịch vì tổng mol khí hai vế bằng nhau.',
      'C. Nén hệ làm cân bằng sang trái; thêm $H_2$ làm $K_C$ tăng.',
      'D. Nén hệ không làm chuyển dịch; thêm $H_2$ làm cân bằng sang phải; $K_C$ không đổi.'
    ],
    correctAnswer: 'D', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-eq-shift-concentration', 'chem11-eq-shift-pressure'], subTypeId: 'chem11-eq-st-shift-no-effect', practiceRole: 'mastery_holdout', representationType: 'text',
    misconceptionId: 'chem11-mis-pressure-always-shifts', isMasteryHoldout: true, estimatedSeconds: 125
  },
  {
    id: 'chem11-eq-q049', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt05',
    content: 'Xét $N_2(g)+3H_2(g)\\rightleftharpoons2NH_3(g)$, $\\Delta H<0$. Khi giảm nhiệt độ, cân bằng chuyển dịch',
    responseType: 'single_choice',
    options: ['A. sang phải, theo chiều tỏa nhiệt.', 'B. sang trái, theo chiều thu nhiệt.', 'C. không chuyển dịch.', 'D. theo phía nhiều mol khí hơn.'],
    correctAnswer: 'A', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-eq-shift-temperature'], subTypeId: 'chem11-eq-st-shift-temperature', practiceRole: 'guided', representationType: 'equation', estimatedSeconds: 55
  },
  {
    id: 'chem11-eq-q050', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt05',
    content: 'Xét $CaCO_3(s)\\rightleftharpoons CaO(s)+CO_2(g)$, $\\Delta H>0$. Khi tăng nhiệt độ, cân bằng chuyển dịch',
    responseType: 'single_choice',
    options: ['A. sang trái vì chiều nghịch tạo ít khí hơn.', 'B. sang phải, theo chiều thu nhiệt.', 'C. không chuyển dịch vì có chất rắn.', 'D. sang trái vì nhiệt độ làm giảm tốc độ thuận.'],
    correctAnswer: 'B', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-eq-shift-temperature'], subTypeId: 'chem11-eq-st-shift-temperature', practiceRole: 'near_transfer', representationType: 'equation', estimatedSeconds: 60
  },
  {
    id: 'chem11-eq-q051', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt05',
    content: 'Thêm chất xúc tác vào một hệ thuận nghịch chưa đạt cân bằng ở nhiệt độ không đổi sẽ',
    responseType: 'single_choice',
    options: ['A. chỉ tăng tốc độ phản ứng thuận.', 'B. làm cân bằng chuyển sang phía sản phẩm.', 'C. tăng tốc độ cả hai chiều và giúp hệ đạt cân bằng nhanh hơn.', 'D. làm tăng giá trị $K_C$.'],
    correctAnswer: 'C', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-eq-rate-vs-position'], subTypeId: 'chem11-eq-st-catalyst', practiceRole: 'guided', representationType: 'text',
    misconceptionId: 'chem11-mis-catalyst-shifts', estimatedSeconds: 50
  },
  {
    id: 'chem11-eq-q052', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt05',
    content: 'Một hệ đã đạt cân bằng ở nhiệt độ xác định. Sau khi thêm xúc tác, đại lượng nào không đổi?',
    responseType: 'single_choice',
    options: ['A. Năng lượng hoạt hóa của cả hai chiều.', 'B. Tốc độ tức thời của cả hai chiều.', 'C. Thời gian cần để đáp ứng một nhiễu loạn sau đó.', 'D. Thành phần cân bằng và giá trị $K_C$.'],
    correctAnswer: 'D', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-eq-rate-vs-position'], subTypeId: 'chem11-eq-st-catalyst', practiceRole: 'misconception_check', representationType: 'text',
    misconceptionId: 'chem11-mis-catalyst-kc', estimatedSeconds: 55
  },
  {
    id: 'chem11-eq-q053', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt05',
    content: 'Với $2NO_2(g)\\rightleftharpoons N_2O_4(g)$, chiều thuận tỏa nhiệt. Khi tăng nhiệt độ và chờ hệ đạt cân bằng mới, màu nâu của $NO_2$ sẽ',
    responseType: 'single_choice',
    options: ['A. đậm hơn vì cân bằng chuyển sang trái.', 'B. nhạt hơn vì cân bằng chuyển sang phải.', 'C. không đổi vì $K_C$ không phụ thuộc nhiệt độ.', 'D. biến mất vì phản ứng hoàn toàn.'],
    correctAnswer: 'A', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-eq-shift-temperature'], subTypeId: 'chem11-eq-st-shift-temperature', practiceRole: 'representation_switch', representationType: 'text',
    misconceptionId: 'chem11-mis-temperature-always-forward', estimatedSeconds: 75
  },
  {
    id: 'chem11-eq-q054', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt05',
    content: 'Hai bình giống nhau có cùng thành phần ban đầu và cùng nhiệt độ; bình II có xúc tác. Nhận xét đúng khi cả hai đã đạt cân bằng là',
    responseType: 'single_choice',
    options: ['A. Bình II có nhiều sản phẩm hơn.', 'B. Hai bình có cùng thành phần cân bằng nhưng bình II đạt cân bằng sớm hơn.', 'C. Bình II có $K_C$ lớn hơn.', 'D. Bình I không thể đạt cân bằng.'],
    correctAnswer: 'B', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-eq-rate-vs-position'], subTypeId: 'chem11-eq-st-catalyst', practiceRole: 'near_transfer', representationType: 'text',
    misconceptionId: 'chem11-mis-catalyst-shifts', estimatedSeconds: 70
  },
  {
    id: 'chem11-eq-q055', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt05',
    content: 'Phản ứng tổng hợp ammonia là phản ứng tỏa nhiệt nhưng trong công nghiệp không vận hành ở nhiệt độ thấp nhất có thể. Lí do phù hợp nhất là',
    responseType: 'single_choice',
    options: ['A. Nhiệt độ thấp làm $K_C$ bằng 0.', 'B. Nhiệt độ thấp làm cân bằng chuyển sang trái.', 'C. Nhiệt độ quá thấp cho tốc độ phản ứng rất chậm dù có lợi về cân bằng.', 'D. Nhiệt độ không ảnh hưởng đến quá trình Haber.'],
    correctAnswer: 'C', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-eq-le-chatelier-context'], subTypeId: 'chem11-eq-st-industry-tradeoff', practiceRole: 'guided', representationType: 'text',
    misconceptionId: 'chem11-mis-industry-equilibrium-only', estimatedSeconds: 75
  },
  {
    id: 'chem11-eq-q056', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt05',
    content: 'Với $2SO_2(g)+O_2(g)\\rightleftharpoons2SO_3(g)$ là phản ứng tỏa nhiệt, phương án sản xuất hợp lí nhất về nguyên tắc là',
    responseType: 'single_choice',
    options: ['A. Nhiệt độ cao nhất để vừa tăng tốc độ vừa tăng hiệu suất cân bằng.', 'B. Nhiệt độ thấp nhất và không cần xúc tác.', 'C. Chỉ tăng áp suất, bỏ qua mọi chi phí thiết bị.', 'D. Chọn nhiệt độ thỏa hiệp và dùng xúc tác để đạt tốc độ phù hợp mà không đổi vị trí cân bằng.'],
    correctAnswer: 'D', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-eq-le-chatelier-context', 'chem11-eq-rate-vs-position'], subTypeId: 'chem11-eq-st-industry-tradeoff', practiceRole: 'near_transfer', representationType: 'equation',
    misconceptionId: 'chem11-mis-industry-equilibrium-only', estimatedSeconds: 85
  },
  {
    id: 'chem11-eq-q057', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt05',
    content: 'Bảng mô tả ba phương án giả định cho một phản ứng thuận tỏa nhiệt. Nếu nhà máy cần hiệu suất khá, tốc độ phù hợp và tránh chi phí áp suất quá lớn, phương án cân bằng nhất là',
    stimulus: {
      id: 'chem11-eq-stim-industry-01',
      title: 'Các phương án vận hành',
      dataTable: {
        caption: 'Đánh giá định tính điều kiện vận hành',
        columns: [{ key: 'option', label: 'Phương án' }, { key: 'temperature', label: 'Nhiệt độ' }, { key: 'pressure', label: 'Áp suất' }, { key: 'catalyst', label: 'Xúc tác' }],
        rows: [
          { option: 'I', temperature: 'Rất thấp', pressure: 'Rất cao', catalyst: 'Không' },
          { option: 'II', temperature: 'Vừa phải', pressure: 'Vừa phải', catalyst: 'Có' },
          { option: 'III', temperature: 'Rất cao', pressure: 'Thấp', catalyst: 'Có' }
        ]
      }
    },
    responseType: 'single_choice',
    options: ['A. Phương án II', 'B. Phương án I', 'C. Phương án III', 'D. Cả ba tương đương'],
    correctAnswer: 'A', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-eq-le-chatelier-context'], subTypeId: 'chem11-eq-st-industry-tradeoff', practiceRole: 'representation_switch', representationType: 'table', estimatedSeconds: 100
  },
  {
    id: 'chem11-eq-q058', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt05',
    content: 'Phản ứng thuận tỏa nhiệt có $K_C(T_1)=80$ và $K_C(T_2)=20$. Nếu $T_2>T_1$, giải thích đúng là',
    responseType: 'single_choice',
    options: ['A. Tăng nhiệt độ ưu tiên chiều thuận nên $K_C$ giảm.', 'B. Tăng nhiệt độ ưu tiên chiều nghịch thu nhiệt nên mức ưu thế sản phẩm giảm.', 'C. $K_C$ giảm do xúc tác bị mất hoạt tính.', 'D. Hai giá trị không thể khác nhau vì $K_C$ luôn không đổi.'],
    correctAnswer: 'B', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-eq-shift-temperature'], subTypeId: 'chem11-eq-st-shift-temperature', practiceRole: 'mastery_holdout', representationType: 'text',
    misconceptionId: 'chem11-mis-temperature-kc-constant', isMasteryHoldout: true, estimatedSeconds: 110
  },
  {
    id: 'chem11-eq-q059', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt05',
    content: 'Sau cùng một nhiễu loạn, hai hệ ở cùng nhiệt độ cho dữ liệu dưới đây. Hệ nào có xúc tác và kết luận nào đúng?',
    stimulus: {
      id: 'chem11-eq-stim-catalyst-01',
      title: 'Thời gian và thành phần sau khi tái lập cân bằng',
      dataTable: {
        caption: 'Kết quả hai hệ',
        columns: [{ key: 'system', label: 'Hệ' }, { key: 'time', label: 'Thời gian ổn định', unit: 's' }, { key: 'product', label: 'Nồng độ sản phẩm cuối', unit: 'M' }],
        rows: [{ system: 'I', time: 40, product: 0.62 }, { system: 'II', time: 95, product: 0.62 }]
      }
    },
    responseType: 'single_choice',
    options: ['A. Hệ II; xúc tác làm tăng sản phẩm cuối.', 'B. Không thể suy luận vì sản phẩm cuối bằng nhau.', 'C. Hệ I; xúc tác rút ngắn thời gian nhưng không đổi thành phần cân bằng.', 'D. Hệ I; xúc tác làm tăng $K_C$.'],
    correctAnswer: 'C', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-eq-rate-vs-position'], subTypeId: 'chem11-eq-st-catalyst', practiceRole: 'mastery_holdout', representationType: 'table',
    misconceptionId: 'chem11-mis-catalyst-kc', isMasteryHoldout: true, estimatedSeconds: 115
  },
  {
    id: 'chem11-eq-q060', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt05',
    content: 'Đối với quá trình Haber, tổ hợp lập luận nào đầy đủ nhất?',
    responseType: 'single_choice',
    options: [
      'A. Chỉ cần nhiệt độ thấp vì hiệu suất cân bằng là tiêu chí duy nhất.',
      'B. Chỉ cần áp suất cao nhất có thể vì không phát sinh rủi ro hay chi phí.',
      'C. Xúc tác cho phép thay mọi điều kiện khác và làm tăng hiệu suất cân bằng.',
      'D. Dùng nhiệt độ và áp suất thỏa hiệp, xúc tác để tăng tốc độ, đồng thời tách $NH_3$ để hỗ trợ chuyển dịch nhưng vẫn xét chi phí và an toàn.'
    ],
    correctAnswer: 'D', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-eq-le-chatelier-context', 'chem11-eq-rate-vs-position'], subTypeId: 'chem11-eq-st-industry-tradeoff', practiceRole: 'far_transfer', representationType: 'text',
    misconceptionId: 'chem11-mis-industry-equilibrium-only', isMasteryHoldout: true, estimatedSeconds: 120
  },
  {
    id: 'chem11-eq-q061', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt06',
    content: 'Ống kín chứa hệ $2NO_2(g)\\rightleftharpoons N_2O_4(g)$ được làm lạnh. Biết $NO_2$ màu nâu và $N_2O_4$ gần như không màu, hiện tượng cân bằng mới là',
    responseType: 'single_choice',
    options: ['A. Màu nâu nhạt hơn.', 'B. Màu nâu đậm hơn.', 'C. Không đổi màu.', 'D. Xuất hiện kết tủa nâu.'],
    correctAnswer: 'A', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-eq-experiment-temperature'], subTypeId: 'chem11-eq-st-no2-observation', practiceRole: 'guided', representationType: 'experiment', estimatedSeconds: 50
  },
  {
    id: 'chem11-eq-q062', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt06',
    content: 'Khi đưa ống kín trên từ nước lạnh sang nước nóng và chờ ổn định, màu nâu đậm hơn vì',
    responseType: 'single_choice',
    options: ['A. $N_2O_4$ hấp thụ ánh sáng nâu mạnh hơn.', 'B. Cân bằng chuyển theo chiều thu nhiệt tạo thêm $NO_2$.', 'C. Toàn bộ khí bị phân hủy không thuận nghịch.', 'D. Nhiệt độ làm xúc tác xuất hiện.'],
    correctAnswer: 'B', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-eq-experiment-temperature'], subTypeId: 'chem11-eq-st-no2-observation', practiceRole: 'near_transfer', representationType: 'experiment', estimatedSeconds: 55
  },
  {
    id: 'chem11-eq-q063', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt06',
    content: 'Trong thí nghiệm $NO_2/N_2O_4$, phát biểu nào đúng về tín hiệu màu?',
    responseType: 'single_choice',
    options: ['A. Màu nâu đậm cho biết $N_2O_4$ tăng.', 'B. Màu nâu biến mất chứng minh không còn phân tử khí.', 'C. Màu nâu đậm hơn cho biết tỉ lệ $NO_2$ trong hệ tăng.', 'D. Màu chỉ phản ánh áp suất, không liên quan thành phần.'],
    correctAnswer: 'C', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-eq-experiment-temperature'], subTypeId: 'chem11-eq-st-no2-observation', practiceRole: 'misconception_check', representationType: 'text',
    misconceptionId: 'chem11-mis-no2-color-product', estimatedSeconds: 55
  },
  {
    id: 'chem11-eq-q064', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt06',
    content: 'Tại sao phải chờ màu ổn định sau khi đặt ống vào bể nhiệt trước khi ghi kết quả?',
    responseType: 'single_choice',
    options: ['A. Để khí thoát hết khỏi ống.', 'B. Để phản ứng dừng hoàn toàn.', 'C. Để màu của thủy tinh thay đổi.', 'D. Để hệ có thời gian thiết lập trạng thái cân bằng mới ở nhiệt độ khảo sát.'],
    correctAnswer: 'D', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-eq-experiment-temperature'], subTypeId: 'chem11-eq-st-no2-observation', practiceRole: 'guided', representationType: 'experiment', estimatedSeconds: 60
  },
  {
    id: 'chem11-eq-q065', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt06',
    content: 'Quy tắc an toàn quan trọng nhất khi quan sát hệ $NO_2/N_2O_4$ là',
    responseType: 'single_choice',
    options: ['A. Giữ hệ kín, không mở hoặc ngửi trực tiếp và làm theo hướng dẫn giám sát.', 'B. Mở nắp để cân bằng nhanh hơn.', 'C. Ngửi nhẹ để xác nhận có $NO_2$.', 'D. Đun trực tiếp bằng ngọn lửa đến khi màu rõ.'],
    correctAnswer: 'A', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-eq-experiment-temperature'], subTypeId: 'chem11-eq-st-no2-design-safety', practiceRole: 'guided', representationType: 'experiment',
    misconceptionId: 'chem11-mis-no2-open-system', estimatedSeconds: 55
  },
  {
    id: 'chem11-eq-q066', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt06',
    content: 'Muốn khảo sát riêng ảnh hưởng của nhiệt độ tới màu cân bằng, thiết kế phù hợp nhất là',
    responseType: 'single_choice',
    options: ['A. Dùng các ống có lượng khí và thể tích khác nhau.', 'B. Giữ lượng khí, thể tích và cách quan sát như nhau; chỉ thay đổi nhiệt độ.', 'C. Đồng thời thay nhiệt độ và thêm xúc tác.', 'D. Mở ống ở mỗi nhiệt độ để cân bằng áp suất.'],
    correctAnswer: 'B', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-eq-experiment-temperature'], subTypeId: 'chem11-eq-st-no2-design-safety', practiceRole: 'near_transfer', representationType: 'experiment', estimatedSeconds: 70
  },
  {
    id: 'chem11-eq-q067', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt06',
    content: 'Chuỗi thao tác nào giúp minh họa rõ tính thuận nghịch của chuyển dịch do nhiệt độ?',
    responseType: 'single_choice',
    options: ['A. Chỉ quan sát một lần ở nhiệt độ phòng.', 'B. Làm lạnh rồi bỏ ống đi.', 'C. Quan sát ở nhiệt độ phòng → làm lạnh → đưa lại nhiệt độ phòng → làm nóng, luôn chờ ổn định.', 'D. Mở ống sau mỗi lần đổi nhiệt độ.'],
    correctAnswer: 'C', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-eq-experiment-temperature'], subTypeId: 'chem11-eq-st-no2-design-safety', practiceRole: 'representation_switch', representationType: 'experiment', estimatedSeconds: 80
  },
  {
    id: 'chem11-eq-q068', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt06',
    content: 'Một học sinh đề nghị mở ống sau khi làm nóng để “giữ nhiệt độ nhưng giảm áp suất”. Đánh giá đúng là',
    responseType: 'single_choice',
    options: ['A. Hợp lí vì chỉ nhiệt độ ảnh hưởng cân bằng.', 'B. Hợp lí nếu mở thật nhanh.', 'C. Chỉ sai vì làm màu khó nhìn.', 'D. Không chấp nhận: làm mất hệ kín, tạo thêm biến và có nguy cơ phơi nhiễm $NO_2$ độc.'],
    correctAnswer: 'D', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-eq-experiment-temperature'], subTypeId: 'chem11-eq-st-no2-design-safety', practiceRole: 'misconception_check', representationType: 'text',
    misconceptionId: 'chem11-mis-no2-open-system', estimatedSeconds: 80
  },
  {
    id: 'chem11-eq-q069', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt06',
    content: 'Từ dữ liệu sau khi mỗi hệ đã ổn định, kết luận phù hợp nhất là',
    stimulus: {
      id: 'chem11-eq-stim-no2-data-01',
      title: 'Chỉ số màu nâu của hệ kín',
      dataTable: {
        caption: 'Chỉ số màu lớn biểu thị màu nâu đậm hơn',
        columns: [{ key: 'temperature', label: 'Nhiệt độ', unit: '°C' }, { key: 'colorIndex', label: 'Chỉ số màu nâu' }],
        rows: [{ temperature: 10, colorIndex: 22 }, { temperature: 25, colorIndex: 41 }, { temperature: 50, colorIndex: 73 }]
      }
    },
    responseType: 'single_choice',
    options: ['A. Nhiệt độ tăng làm tỉ lệ $NO_2$ ở cân bằng tăng; chiều tạo $NO_2$ là chiều thu nhiệt.', 'B. Nhiệt độ tăng làm $N_2O_4$ tăng.', 'C. Chỉ số màu chứng minh phản ứng đã dừng.', 'D. Dữ liệu cho thấy xúc tác làm $K_C$ tăng.'],
    correctAnswer: 'A', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-eq-experiment-temperature'], subTypeId: 'chem11-eq-st-no2-data', practiceRole: 'representation_switch', representationType: 'table', estimatedSeconds: 90
  },
  {
    id: 'chem11-eq-q070', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt06',
    content: 'Một ống kín có chỉ số màu 40 ở 25 °C, giảm còn 21 ở 10 °C, rồi trở lại xấp xỉ 40 khi đưa về 25 °C. Bằng chứng mạnh nhất rút ra là',
    responseType: 'single_choice',
    options: ['A. $NO_2$ đã bị mất khỏi hệ sau khi làm lạnh.', 'B. Tác động nhiệt độ làm cân bằng chuyển dịch thuận nghịch và hệ trở lại trạng thái tương ứng khi phục hồi điều kiện.', 'C. Phản ứng chỉ xảy ra một chiều.', 'D. Màu thay đổi do thể tích ống thay đổi vĩnh viễn.'],
    correctAnswer: 'B', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-eq-experiment-temperature'], subTypeId: 'chem11-eq-st-no2-data', practiceRole: 'mastery_holdout', representationType: 'text',
    isMasteryHoldout: true, estimatedSeconds: 105
  },
  {
    id: 'chem11-eq-q071', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt06',
    content: 'Hai ống được so sánh ở 10 °C và 50 °C nhưng ống nóng chứa lượng khí ban đầu gấp đôi. Vì sao kết luận “nhiệt độ làm màu đậm hơn” chưa đáng tin?',
    responseType: 'single_choice',
    options: ['A. Vì nhiệt độ không ảnh hưởng cân bằng.', 'B. Vì màu nâu không liên quan tới $NO_2$.', 'C. Vì lượng khí ban đầu là biến gây nhiễu, nên không tách được ảnh hưởng riêng của nhiệt độ.', 'D. Vì mọi thí nghiệm phải dùng xúc tác.'],
    correctAnswer: 'C', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-eq-experiment-temperature'], subTypeId: 'chem11-eq-st-no2-data', practiceRole: 'far_transfer', representationType: 'text',
    isMasteryHoldout: true, estimatedSeconds: 105
  },
  {
    id: 'chem11-eq-q072', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt06',
    content: 'Một nhóm ghi màu ngay sau 5 giây và sau khi ổn định. Dữ liệu nào phải dùng để so sánh thành phần cân bằng giữa các nhiệt độ?',
    stimulus: {
      id: 'chem11-eq-stim-no2-data-02',
      title: 'Chỉ số màu theo thời gian',
      dataTable: {
        caption: 'Mỗi giá trị ổn định khi ba lần đọc liên tiếp không đổi đáng kể',
        columns: [{ key: 'temperature', label: 'Nhiệt độ', unit: '°C' }, { key: 'after5s', label: 'Sau 5 s' }, { key: 'stable', label: 'Khi ổn định' }],
        rows: [{ temperature: 10, after5s: 31, stable: 22 }, { temperature: 50, after5s: 58, stable: 73 }]
      }
    },
    responseType: 'single_choice',
    options: ['A. Chỉ hai giá trị sau 5 s vì cùng thời điểm.', 'B. Lấy trung bình cả bốn giá trị.', 'C. Chọn giá trị lớn hơn ở mỗi nhiệt độ.', 'D. Dùng các giá trị khi ổn định vì chúng đại diện cho trạng thái cân bằng mới.'],
    correctAnswer: 'D', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-eq-experiment-temperature'], subTypeId: 'chem11-eq-st-no2-data', practiceRole: 'mastery_holdout', representationType: 'table',
    isMasteryHoldout: true, estimatedSeconds: 115
  },
  {
    id: 'chem11-eq-q073', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt07',
    content: 'Dung dịch nào sau đây dẫn điện tốt do có nhiều ion chuyển động tự do?',
    responseType: 'single_choice',
    options: ['A. Dung dịch $NaCl$', 'B. Dung dịch saccharose', 'C. Dung dịch ethanol', 'D. Nước cất'],
    correctAnswer: 'A', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-aq-electrolyte'], subTypeId: 'chem11-aq-st-electrolyte-evidence', practiceRole: 'guided', representationType: 'experiment', estimatedSeconds: 45
  },
  {
    id: 'chem11-eq-q074', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt07',
    content: 'Chất nào tan trong nước nhưng chủ yếu tồn tại dưới dạng phân tử nên được xếp là chất không điện li?',
    responseType: 'single_choice',
    options: ['A. $HCl$', 'B. Saccharose', 'C. $NaOH$', 'D. $KNO_3$'],
    correctAnswer: 'B', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-aq-electrolyte'], subTypeId: 'chem11-aq-st-electrolyte-evidence', practiceRole: 'near_transfer', representationType: 'text',
    misconceptionId: 'chem11-mis-electrolyte-soluble', estimatedSeconds: 45
  },
  {
    id: 'chem11-eq-q075', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt07',
    content: 'Vì sao tinh thể $NaCl$ rắn không dẫn điện nhưng dung dịch $NaCl$ lại dẫn điện?',
    responseType: 'single_choice',
    options: ['A. Nước tạo electron tự do.', 'B. $NaCl$ biến thành kim loại.', 'C. Trong dung dịch, các ion $Na^+$ và $Cl^-$ có thể chuyển động.', 'D. Phân tử nước mang điện tích tổng.'],
    correctAnswer: 'C', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-aq-electrolyte'], subTypeId: 'chem11-aq-st-electrolyte-evidence', practiceRole: 'misconception_check', representationType: 'text',
    misconceptionId: 'chem11-mis-electrolyte-solid', estimatedSeconds: 55
  },
  {
    id: 'chem11-eq-q076', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt07',
    content: 'Phương trình điện li phù hợp của $HCl$ trong nước là',
    responseType: 'single_choice',
    options: ['A. $HCl\\rightarrow H^-+Cl^+$', 'B. $HCl\\rightleftharpoons HCl$', 'C. $HCl\\rightarrow H_2+Cl_2$', 'D. $HCl\\rightarrow H^++Cl^-$'],
    correctAnswer: 'D', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-aq-dissociation'], subTypeId: 'chem11-aq-st-dissociation-equation', practiceRole: 'guided', representationType: 'equation', estimatedSeconds: 45
  },
  {
    id: 'chem11-eq-q077', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt07',
    content: 'Phương trình điện li đúng của $CaCl_2$ là',
    responseType: 'single_choice',
    options: ['A. $CaCl_2\\rightarrow Ca^{2+}+2Cl^-$', 'B. $CaCl_2\\rightarrow Ca^++Cl_2^-$', 'C. $CaCl_2\\rightarrow2Ca^{2+}+Cl^-$', 'D. $CaCl_2\\rightarrow Ca^{2-}+2Cl^+$'],
    correctAnswer: 'A', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-aq-dissociation'], subTypeId: 'chem11-aq-st-dissociation-equation', practiceRole: 'near_transfer', representationType: 'equation',
    misconceptionId: 'chem11-mis-dissociation-charge', estimatedSeconds: 60
  },
  {
    id: 'chem11-eq-q078', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt07',
    content: 'Phương trình điện li bảo toàn đúng nguyên tử và điện tích của $Al_2(SO_4)_3$ là',
    responseType: 'single_choice',
    options: ['A. $Al_2(SO_4)_3\\rightarrow Al^{3+}+SO_4^{2-}$', 'B. $Al_2(SO_4)_3\\rightarrow2Al^{3+}+3SO_4^{2-}$', 'C. $Al_2(SO_4)_3\\rightarrow2Al^{2+}+3SO_4^{3-}$', 'D. $Al_2(SO_4)_3\\rightarrow6Al^++6SO_4^-$'],
    correctAnswer: 'B', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-aq-dissociation'], subTypeId: 'chem11-aq-st-dissociation-equation', practiceRole: 'representation_switch', representationType: 'equation',
    misconceptionId: 'chem11-mis-dissociation-charge', estimatedSeconds: 70
  },
  {
    id: 'chem11-eq-q079', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt07',
    content: 'Biểu diễn phù hợp nhất cho sự điện li yếu của acetic acid là',
    responseType: 'single_choice',
    options: ['A. $CH_3COOH\\rightarrow CH_4+CO_2$', 'B. $CH_3COOH\\rightarrow CH_3CO^++OH^-$', 'C. $CH_3COOH\\rightleftharpoons H^++CH_3COO^-$', 'D. $CH_3COOH\\rightarrow H^-+CH_3COO^+$'],
    correctAnswer: 'C', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-aq-strong-weak', 'chem11-aq-dissociation'], subTypeId: 'chem11-aq-st-strong-weak', practiceRole: 'guided', representationType: 'equation', estimatedSeconds: 65
  },
  {
    id: 'chem11-eq-q080', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt07',
    content: 'Phát biểu nào phân biệt đúng “điện li mạnh/yếu” với “đậm đặc/loãng”?',
    responseType: 'single_choice',
    options: ['A. Chất điện li mạnh luôn có nồng độ lớn.', 'B. Dung dịch loãng luôn điện li yếu.', 'C. Hai cặp thuật ngữ có cùng ý nghĩa.', 'D. Mạnh/yếu nói về mức độ tạo ion; đậm/loãng nói về lượng chất tan trong thể tích dung dịch.'],
    correctAnswer: 'D', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-aq-strong-weak'], subTypeId: 'chem11-aq-st-strong-weak', practiceRole: 'misconception_check', representationType: 'text',
    misconceptionId: 'chem11-mis-strong-concentrated', estimatedSeconds: 70
  },
  {
    id: 'chem11-eq-q081', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt07',
    content: 'Các dung dịch có cùng nồng độ. Dựa vào độ dẫn điện tương đối, mẫu nào có nhiều ion tự do nhất?',
    stimulus: {
      id: 'chem11-aq-stim-conductivity-01',
      title: 'Kết quả đo độ dẫn điện',
      dataTable: {
        caption: 'Giá trị tương đối ở cùng điều kiện đo',
        columns: [{ key: 'sample', label: 'Mẫu' }, { key: 'conductivity', label: 'Độ dẫn điện tương đối' }],
        rows: [{ sample: 'I', conductivity: 9.8 }, { sample: 'II', conductivity: 2.1 }, { sample: 'III', conductivity: 0.1 }]
      }
    },
    responseType: 'single_choice',
    options: ['A. Mẫu I', 'B. Mẫu II', 'C. Mẫu III', 'D. Cả ba như nhau'],
    correctAnswer: 'A', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-aq-electrolyte', 'chem11-aq-strong-weak'], subTypeId: 'chem11-aq-st-electrolyte-evidence', practiceRole: 'representation_switch', representationType: 'table', estimatedSeconds: 80
  },
  {
    id: 'chem11-eq-q082', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt07',
    content: 'Ba dung dịch cùng nồng độ là HCl, $CH_3COOH$ và glucose. Thứ tự độ dẫn điện dự kiến từ lớn đến nhỏ là',
    responseType: 'single_choice',
    options: ['A. Glucose > $CH_3COOH$ > HCl', 'B. HCl > $CH_3COOH$ > glucose', 'C. $CH_3COOH$ > HCl > glucose', 'D. Cả ba bằng nhau'],
    correctAnswer: 'B', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-aq-strong-weak', 'chem11-aq-electrolyte'], subTypeId: 'chem11-aq-st-strong-weak', practiceRole: 'far_transfer', representationType: 'text',
    isMasteryHoldout: true, estimatedSeconds: 95
  },
  {
    id: 'chem11-eq-q083', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt07',
    content: 'Ba mẫu cùng nồng độ có mô tả hạt dưới đây. Cách phân loại đúng là',
    stimulus: {
      id: 'chem11-aq-stim-particles-01',
      title: 'Mô tả hạt trong dung dịch',
      dataTable: {
        caption: 'Tỉ lệ tương đối sau khi hòa tan',
        columns: [{ key: 'sample', label: 'Mẫu' }, { key: 'particles', label: 'Thành phần quan sát' }],
        rows: [
          { sample: 'X', particles: 'Hầu như chỉ có ion' },
          { sample: 'Y', particles: 'Chủ yếu phân tử, có một ít ion' },
          { sample: 'Z', particles: 'Chỉ có phân tử trung hòa' }
        ]
      }
    },
    responseType: 'single_choice',
    options: ['A. X yếu, Y mạnh, Z không điện li', 'B. X không điện li, Y yếu, Z mạnh', 'C. X mạnh, Y yếu, Z không điện li', 'D. X và Z mạnh, Y không điện li'],
    correctAnswer: 'C', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-aq-strong-weak'], subTypeId: 'chem11-aq-st-strong-weak', practiceRole: 'mastery_holdout', representationType: 'table',
    isMasteryHoldout: true, estimatedSeconds: 105
  },
  {
    id: 'chem11-eq-q084', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt07',
    content: 'Khi một đơn vị công thức $Al_2(SO_4)_3$ điện li hoàn toàn, tổng điện tích dương và âm tạo ra lần lượt là',
    responseType: 'single_choice',
    options: ['A. $+3$ và $-2$', 'B. $+2$ và $-3$', 'C. $+9$ và $-9$', 'D. $+6$ và $-6$'],
    correctAnswer: 'D', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-aq-dissociation'], subTypeId: 'chem11-aq-st-dissociation-equation', practiceRole: 'mastery_holdout', representationType: 'equation',
    misconceptionId: 'chem11-mis-dissociation-charge', isMasteryHoldout: true, estimatedSeconds: 100
  },
  {
    id: 'chem11-eq-q085', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt08',
    content: 'Trong $NH_3+H_2O\\rightleftharpoons NH_4^++OH^-$, $NH_3$ đóng vai trò',
    responseType: 'single_choice',
    options: ['A. base vì nhận proton.', 'B. acid vì nhận proton.', 'C. acid vì cho electron.', 'D. chất không tham gia chuyển proton.'],
    correctAnswer: 'A', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-aq-bronsted-role'], subTypeId: 'chem11-aq-st-bronsted-role', practiceRole: 'guided', representationType: 'equation', estimatedSeconds: 45
  },
  {
    id: 'chem11-eq-q086', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt08',
    content: 'Trong $HCl+H_2O\\rightarrow H_3O^++Cl^-$, chất cho proton là',
    responseType: 'single_choice',
    options: ['A. $H_2O$', 'B. $HCl$', 'C. $H_3O^+$', 'D. $Cl^-$'],
    correctAnswer: 'B', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-aq-bronsted-role'], subTypeId: 'chem11-aq-st-bronsted-role', practiceRole: 'near_transfer', representationType: 'equation', estimatedSeconds: 45
  },
  {
    id: 'chem11-eq-q087', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt08',
    content: 'Cặp nào là một cặp acid–base liên hợp?',
    responseType: 'single_choice',
    options: ['A. $HCl/NaCl$', 'B. $H_2O/O_2$', 'C. $NH_4^+/NH_3$', 'D. $Na^+/Cl^-$'],
    correctAnswer: 'C', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-aq-conjugate-pair'], subTypeId: 'chem11-aq-st-conjugate-pair', practiceRole: 'guided', representationType: 'text', estimatedSeconds: 45
  },
  {
    id: 'chem11-eq-q088', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt08',
    content: 'Trong phản ứng $HCl+H_2O\\rightarrow H_3O^++Cl^-$, nước là base vì',
    responseType: 'single_choice',
    options: ['A. chứa oxygen.', 'B. tạo liên kết cộng hóa trị.', 'C. cho proton cho $HCl$.', 'D. nhận proton từ $HCl$.'],
    correctAnswer: 'D', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-aq-amphiprotic', 'chem11-aq-bronsted-role'], subTypeId: 'chem11-aq-st-amphiprotic', practiceRole: 'guided', representationType: 'equation', estimatedSeconds: 50
  },
  {
    id: 'chem11-eq-q089', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt08',
    content: 'Trong $HCO_3^-+H_2O\\rightleftharpoons H_2CO_3+OH^-$, $HCO_3^-$ là',
    responseType: 'single_choice',
    options: ['A. base vì nhận proton để tạo $H_2CO_3$.', 'B. acid vì tạo $OH^-$.', 'C. acid vì mang điện âm.', 'D. chất không tham gia chuyển proton.'],
    correctAnswer: 'A', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-aq-bronsted-role'], subTypeId: 'chem11-aq-st-bronsted-role', practiceRole: 'representation_switch', representationType: 'equation', estimatedSeconds: 65
  },
  {
    id: 'chem11-eq-q090', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt08',
    content: 'Trong $HSO_4^-+H_2O\\rightleftharpoons SO_4^{2-}+H_3O^+$, $HSO_4^-$ là',
    responseType: 'single_choice',
    options: ['A. base vì mang điện âm.', 'B. acid vì cho proton.', 'C. base vì tạo $H_3O^+$.', 'D. không phải acid hoặc base.'],
    correctAnswer: 'B', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-aq-bronsted-role'], subTypeId: 'chem11-aq-st-bronsted-role', practiceRole: 'misconception_check', representationType: 'equation',
    misconceptionId: 'chem11-mis-acid-hydrogen-oh', estimatedSeconds: 65
  },
  {
    id: 'chem11-eq-q091', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt08',
    content: 'Dấu hiệu bắt buộc để hai chất là một cặp acid–base liên hợp là',
    responseType: 'single_choice',
    options: ['A. có điện tích bằng nhau.', 'B. cùng chứa oxygen.', 'C. công thức khác nhau đúng một proton.', 'D. cùng nằm một vế phương trình.'],
    correctAnswer: 'C', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-aq-conjugate-pair'], subTypeId: 'chem11-aq-st-conjugate-pair', practiceRole: 'misconception_check', representationType: 'text',
    misconceptionId: 'chem11-mis-conjugate-any-pair', estimatedSeconds: 60
  },
  {
    id: 'chem11-eq-q092', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt08',
    content: 'Nước được xem là chất lưỡng tính theo Brønsted–Lowry vì',
    responseType: 'single_choice',
    options: ['A. luôn trung hòa.', 'B. chỉ nhận proton.', 'C. chỉ cho proton.', 'D. có thể cho hoặc nhận proton tùy phản ứng.'],
    correctAnswer: 'D', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-aq-amphiprotic'], subTypeId: 'chem11-aq-st-amphiprotic', practiceRole: 'near_transfer', representationType: 'text',
    misconceptionId: 'chem11-mis-acid-base-fixed-role', estimatedSeconds: 60
  },
  {
    id: 'chem11-eq-q093', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt08',
    content: 'Trong phản ứng với $NH_3$, nước cho proton; còn trong phản ứng với $HCl$, nước nhận proton. Kết luận đúng là',
    stimulus: {
      id: 'chem11-aq-stim-water-role-01',
      title: 'Vai trò của nước trong hai phản ứng',
      dataTable: {
        caption: 'Dấu vết chuyển proton',
        columns: [{ key: 'partner', label: 'Đối tác' }, { key: 'waterChange', label: 'Biến đổi của nước' }],
        rows: [
          { partner: '$NH_3$', waterChange: '$H_2O\\rightarrow OH^-$: cho proton' },
          { partner: '$HCl$', waterChange: '$H_2O\\rightarrow H_3O^+$: nhận proton' }
        ]
      }
    },
    responseType: 'single_choice',
    options: ['A. Vai trò acid/base của nước phụ thuộc đối tác phản ứng.', 'B. Nước luôn là acid.', 'C. Nước luôn là base.', 'D. Thuyết Brønsted không áp dụng cho nước.'],
    correctAnswer: 'A', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-aq-amphiprotic'], subTypeId: 'chem11-aq-st-amphiprotic', practiceRole: 'representation_switch', representationType: 'table',
    misconceptionId: 'chem11-mis-acid-base-fixed-role', estimatedSeconds: 70
  },
  {
    id: 'chem11-eq-q094', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt08',
    content: 'Trong $HCO_3^-+H_2O\\rightleftharpoons H_2CO_3+OH^-$, hai cặp liên hợp là',
    responseType: 'single_choice',
    options: ['A. $HCO_3^-/H_2O$ và $H_2CO_3/OH^-$', 'B. $H_2CO_3/HCO_3^-$ và $H_2O/OH^-$', 'C. $HCO_3^-/OH^-$ và $H_2O/H_2CO_3$', 'D. $H_2CO_3/H_2O$ và $HCO_3^-/OH^-$'],
    correctAnswer: 'B', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-aq-conjugate-pair'], subTypeId: 'chem11-aq-st-conjugate-pair', practiceRole: 'mastery_holdout', representationType: 'equation',
    misconceptionId: 'chem11-mis-conjugate-any-pair', isMasteryHoldout: true, estimatedSeconds: 100
  },
  {
    id: 'chem11-eq-q095', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt08',
    content: 'Cặp phản ứng nào chứng minh $HCO_3^-$ là chất lưỡng tính?',
    responseType: 'single_choice',
    options: [
      'A. Chỉ phản ứng tạo $CO_2$.',
      'B. Chỉ phản ứng với $Na^+$.',
      'C. Một phản ứng nhận $H^+$ tạo $H_2CO_3$ và một phản ứng cho $H^+$ tạo $CO_3^{2-}$.',
      'D. Hai phản ứng trong đó $HCO_3^-$ đều không chuyển proton.'
    ],
    correctAnswer: 'C', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-aq-amphiprotic'], subTypeId: 'chem11-aq-st-amphiprotic', practiceRole: 'far_transfer', representationType: 'text',
    misconceptionId: 'chem11-mis-acid-base-fixed-role', isMasteryHoldout: true, estimatedSeconds: 105
  },
  {
    id: 'chem11-eq-q096', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt08',
    content: 'Trong phản ứng $A^-+HB\\rightleftharpoons HA+B^-$, kết luận nào đúng?',
    responseType: 'single_choice',
    options: ['A. $A^-/HB$ là một cặp liên hợp.', 'B. $HA/B^-$ là một cặp liên hợp.', 'C. $A^-$ cho proton cho $HB$.', 'D. $HB/B^-$ và $HA/A^-$ là hai cặp liên hợp.'],
    correctAnswer: 'D', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-aq-conjugate-pair'], subTypeId: 'chem11-aq-st-conjugate-pair', practiceRole: 'mastery_holdout', representationType: 'equation',
    isMasteryHoldout: true, estimatedSeconds: 110
  },
  {
    id: 'chem11-eq-q097', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt09',
    content: 'Phương trình nào biểu diễn đúng sự tự điện li của nước?',
    responseType: 'single_choice',
    options: ['A. $2H_2O\\rightleftharpoons H_3O^++OH^-$', 'B. $H_2O\\rightarrow H_2+O_2$', 'C. $H_2O\\rightleftharpoons H^++O^{2-}$', 'D. $2H_2O\\rightarrow2H^++2OH^-$'],
    correctAnswer: 'A', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-aq-water-equilibrium'], subTypeId: 'chem11-aq-st-water-equilibrium', practiceRole: 'guided', representationType: 'equation', estimatedSeconds: 45
  },
  {
    id: 'chem11-eq-q098', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt09',
    content: 'Ở 25 °C, điều kiện nào mô tả một dung dịch trung tính?',
    responseType: 'single_choice',
    options: ['A. $[H^+]=0$', 'B. $[H^+]=[OH^-]$', 'C. $[OH^-]=0$', 'D. $[H^+]>[OH^-]$'],
    correctAnswer: 'B', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-aq-water-equilibrium'], subTypeId: 'chem11-aq-st-water-equilibrium', practiceRole: 'misconception_check', representationType: 'text',
    misconceptionId: 'chem11-mis-neutral-no-ions', estimatedSeconds: 45
  },
  {
    id: 'chem11-eq-q099', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt09',
    content: 'Dung dịch có $[H^+]=1,0\\times10^{-3}$ M. Giá trị pH là',
    responseType: 'single_choice',
    options: ['A. 11', 'B. 7', 'C. 3', 'D. 1'],
    correctAnswer: 'C', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-aq-ph-conversion'], subTypeId: 'chem11-aq-st-ph-conversion', practiceRole: 'guided', representationType: 'equation', estimatedSeconds: 45
  },
  {
    id: 'chem11-eq-q100', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt09',
    content: 'Dung dịch có pH = 5 thì nồng độ ion hydrogen bằng',
    responseType: 'single_choice',
    options: ['A. $5$ M', 'B. $10^5$ M', 'C. $5\\times10^{-1}$ M', 'D. $10^{-5}$ M'],
    correctAnswer: 'D', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-aq-ph-conversion'], subTypeId: 'chem11-aq-st-ph-conversion', practiceRole: 'near_transfer', representationType: 'equation', estimatedSeconds: 45
  },
  {
    id: 'chem11-eq-q101', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt09',
    content: 'Ở 25 °C, một dung dịch có $[H^+]>[OH^-]$. Kết luận đúng là',
    responseType: 'single_choice',
    options: ['A. Dung dịch có môi trường acid.', 'B. Dung dịch trung tính.', 'C. Dung dịch có môi trường base.', 'D. Chưa thể kết luận dù biết nhiệt độ.'],
    correctAnswer: 'A', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-aq-water-equilibrium'], subTypeId: 'chem11-aq-st-water-equilibrium', practiceRole: 'near_transfer', representationType: 'text', estimatedSeconds: 55
  },
  {
    id: 'chem11-eq-q102', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt09',
    content: 'Ở 25 °C, dung dịch có $[H^+]=10^{-5}$ M. Với $K_w=10^{-14}$, $[OH^-]$ bằng',
    responseType: 'single_choice',
    options: ['A. $10^{-19}$ M', 'B. $10^{-9}$ M', 'C. $10^{-7}$ M', 'D. $10^{-5}$ M'],
    correctAnswer: 'B', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-aq-water-equilibrium'], subTypeId: 'chem11-aq-st-water-equilibrium', practiceRole: 'representation_switch', representationType: 'equation', estimatedSeconds: 65
  },
  {
    id: 'chem11-eq-q103', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt09',
    content: 'Giả sử HCl điện li hoàn toàn. pH của dung dịch HCl $0,010$ M là',
    responseType: 'single_choice',
    options: ['A. 12', 'B. 10', 'C. 2', 'D. 1'],
    correctAnswer: 'C', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-aq-ph-simple-solution'], subTypeId: 'chem11-aq-st-ph-simple-solution', practiceRole: 'guided', representationType: 'equation', estimatedSeconds: 65
  },
  {
    id: 'chem11-eq-q104', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt09',
    content: 'Ở 25 °C, NaOH điện li hoàn toàn. pH của dung dịch NaOH $1,0\\times10^{-3}$ M là',
    responseType: 'single_choice',
    options: ['A. 3', 'B. 7', 'C. 10', 'D. 11'],
    correctAnswer: 'D', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-aq-ph-simple-solution'], subTypeId: 'chem11-aq-st-ph-simple-solution', practiceRole: 'misconception_check', representationType: 'equation',
    misconceptionId: 'chem11-mis-ph-from-oh-direct', estimatedSeconds: 75
  },
  {
    id: 'chem11-eq-q105', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt09',
    content: 'Một dung dịch acid mạnh có pH = 2 được pha loãng bằng nước sao cho thể tích tăng 10 lần, coi thể tích cộng được và acid điện li hoàn toàn. pH mới gần nhất là',
    responseType: 'single_choice',
    options: ['A. 3', 'B. 4', 'C. 1', 'D. 12'],
    correctAnswer: 'A', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-aq-ph-conversion'], subTypeId: 'chem11-aq-st-ph-conversion', practiceRole: 'far_transfer', representationType: 'text',
    misconceptionId: 'chem11-mis-ph-linear', estimatedSeconds: 80
  },
  {
    id: 'chem11-eq-q106', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt09',
    content: 'Ở 25 °C, coi $Ca(OH)_2$ điện li hoàn toàn. pH của dung dịch $Ca(OH)_2$ $5,0\\times10^{-3}$ M là',
    responseType: 'single_choice',
    options: ['A. 11', 'B. 12', 'C. 2', 'D. 9'],
    correctAnswer: 'B', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-aq-ph-simple-solution'], subTypeId: 'chem11-aq-st-ph-simple-solution', practiceRole: 'mastery_holdout', representationType: 'equation',
    misconceptionId: 'chem11-mis-base-ignore-coefficient', isMasteryHoldout: true, estimatedSeconds: 105
  },
  {
    id: 'chem11-eq-q107', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt09',
    content: 'Trộn 100 mL HCl 0,020 M với 100 mL NaOH 0,010 M. Coi phản ứng hoàn toàn, thể tích cộng được và nhiệt độ 25 °C. pH dung dịch sau phản ứng gần nhất là',
    responseType: 'single_choice',
    options: ['A. 11,70', 'B. 7,00', 'C. 2,30', 'D. 1,00'],
    correctAnswer: 'C', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-aq-ph-simple-solution'], subTypeId: 'chem11-aq-st-ph-simple-solution', practiceRole: 'mastery_holdout', representationType: 'text',
    isMasteryHoldout: true, estimatedSeconds: 135
  },
  {
    id: 'chem11-eq-q108', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt09',
    content: 'Ở 25 °C, thứ tự giảm dần tính acid của ba mẫu là',
    stimulus: {
      id: 'chem11-aq-stim-ph-compare-01',
      title: 'Dữ liệu ba mẫu dung dịch',
      dataTable: {
        caption: 'Mỗi mẫu được mô tả bằng một đại lượng khác nhau',
        columns: [{ key: 'sample', label: 'Mẫu' }, { key: 'data', label: 'Dữ liệu' }],
        rows: [
          { sample: 'X', data: '$[H^+]=10^{-4}$ M' },
          { sample: 'Y', data: '$[OH^-]=10^{-9}$ M' },
          { sample: 'Z', data: 'pH = 6' }
        ]
      }
    },
    responseType: 'single_choice',
    options: ['A. Z > Y > X', 'B. Y > X > Z', 'C. X > Z > Y', 'D. X > Y > Z'],
    correctAnswer: 'D', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-aq-ph-conversion', 'chem11-aq-water-equilibrium'], subTypeId: 'chem11-aq-st-ph-conversion', practiceRole: 'mastery_holdout', representationType: 'table',
    misconceptionId: 'chem11-mis-ph-linear', isMasteryHoldout: true, estimatedSeconds: 120
  },
  {
    id: 'chem11-eq-q109', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt10',
    content: 'Khi nhúng quỳ tím vào một dung dịch acid, hiện tượng thường quan sát được là',
    responseType: 'single_choice',
    options: ['A. Quỳ chuyển đỏ.', 'B. Quỳ chuyển xanh.', 'C. Quỳ mất màu trong mọi trường hợp.', 'D. Quỳ luôn giữ nguyên màu tím.'],
    correctAnswer: 'A', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-aq-indicator'], subTypeId: 'chem11-aq-st-indicator', practiceRole: 'guided', representationType: 'experiment', estimatedSeconds: 40
  },
  {
    id: 'chem11-eq-q110', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt10',
    content: 'Phenolphthalein chuyển màu hồng trong dung dịch nào dưới đây?',
    responseType: 'single_choice',
    options: ['A. Dung dịch acid mạnh.', 'B. Dung dịch có môi trường base thích hợp.', 'C. Nước cất trung tính.', 'D. Mọi dung dịch chứa muối.'],
    correctAnswer: 'B', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-aq-indicator'], subTypeId: 'chem11-aq-st-indicator', practiceRole: 'guided', representationType: 'text', estimatedSeconds: 40
  },
  {
    id: 'chem11-eq-q111', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt10',
    content: 'Giấy chỉ thị vạn năng chuyển màu cam khi thử một mẫu. Kết luận phù hợp nhất là',
    responseType: 'single_choice',
    options: ['A. Mẫu chắc chắn có pH đúng bằng 3,000.', 'B. Mẫu chắc chắn là base mạnh.', 'C. Mẫu có môi trường acid và pH chỉ được ước lượng theo thang màu.', 'D. Không thể rút ra bất kì thông tin nào.'],
    correctAnswer: 'C', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-aq-indicator'], subTypeId: 'chem11-aq-st-indicator', practiceRole: 'misconception_check', representationType: 'experiment',
    misconceptionId: 'chem11-mis-indicator-exact', estimatedSeconds: 50
  },
  {
    id: 'chem11-eq-q112', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt10',
    content: 'Một giống cây phát triển tốt trong đất pH 6,0–7,0, còn mẫu đất đo được pH 4,8. Nhận định phù hợp nhất là',
    responseType: 'single_choice',
    options: ['A. Đất đang quá kiềm.', 'B. pH đất đã nằm đúng khoảng tối ưu.', 'C. Chênh lệch pH không có ý nghĩa.', 'D. Đất chua hơn khoảng phù hợp và cần được đánh giá để có biện pháp điều chỉnh thích hợp.'],
    correctAnswer: 'D', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-aq-ph-context'], subTypeId: 'chem11-aq-st-ph-context', practiceRole: 'guided', representationType: 'text', estimatedSeconds: 55
  },
  {
    id: 'chem11-eq-q113', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt10',
    content: 'Mẫu X làm methyl orange có màu vàng và phenolphthalein không màu. Khoảng pH phù hợp nhất của X là',
    stimulus: {
      id: 'chem11-aq-stim-indicator-range-01',
      title: 'Khoảng màu quy ước dùng trong câu hỏi',
      dataTable: {
        caption: 'Màu ngoài vùng chuyển màu',
        columns: [{ key: 'indicator', label: 'Chỉ thị' }, { key: 'low', label: 'Màu ở pH thấp' }, { key: 'range', label: 'Vùng chuyển màu' }, { key: 'high', label: 'Màu ở pH cao' }],
        rows: [
          { indicator: 'Methyl orange', low: 'Đỏ khi pH < 3,1', range: '3,1–4,4', high: 'Vàng khi pH > 4,4' },
          { indicator: 'Phenolphthalein', low: 'Không màu khi pH < 8,2', range: '8,2–10,0', high: 'Hồng khi pH > 10,0' }
        ]
      }
    },
    responseType: 'single_choice',
    options: ['A. $4,4<pH<8,2$', 'B. $pH<3,1$', 'C. $8,2<pH<10,0$', 'D. $pH>10,0$'],
    correctAnswer: 'A', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-aq-indicator'], subTypeId: 'chem11-aq-st-indicator', practiceRole: 'representation_switch', representationType: 'table', estimatedSeconds: 85
  },
  {
    id: 'chem11-eq-q114', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt10',
    content: 'Một học sinh thử mẫu nước bằng chỉ thị vạn năng, quan sát màu xanh lục gần với ô pH 7 trên bảng chuẩn. Cách báo cáo hợp lí nhất là',
    responseType: 'single_choice',
    options: ['A. pH chính xác tuyệt đối là 7,0000.', 'B. Mẫu gần trung tính, pH ước lượng khoảng 7 theo độ phân giải của thang màu.', 'C. Mẫu chắc chắn không có ion.', 'D. Mẫu là base mạnh.'],
    correctAnswer: 'B', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-aq-indicator'], subTypeId: 'chem11-aq-st-indicator', practiceRole: 'near_transfer', representationType: 'experiment',
    misconceptionId: 'chem11-mis-indicator-exact', estimatedSeconds: 65
  },
  {
    id: 'chem11-eq-q115', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt10',
    content: 'Phát biểu nào đúng về việc dùng chất chỉ thị acid–base?',
    responseType: 'single_choice',
    options: ['A. Mọi chỉ thị có cùng màu trong một dung dịch.', 'B. Một màu luôn cho pH chính xác đến hai chữ số thập phân.', 'C. Phải dùng đúng khoảng chuyển màu của từng chỉ thị để suy ra môi trường hoặc khoảng pH.', 'D. Chỉ thị không thể dùng trong thí nghiệm acid–base.'],
    correctAnswer: 'C', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-aq-indicator'], subTypeId: 'chem11-aq-st-indicator', practiceRole: 'misconception_check', representationType: 'text',
    misconceptionId: 'chem11-mis-indicator-same-color', estimatedSeconds: 60
  },
  {
    id: 'chem11-eq-q116', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt10',
    content: 'Hai mẫu nước mưa có pH lần lượt là 5,6 và 4,6. Nồng độ $H^+$ của mẫu pH 4,6 so với mẫu pH 5,6 là',
    responseType: 'single_choice',
    options: ['A. nhỏ hơn 10 lần.', 'B. lớn hơn 1 lần.', 'C. lớn hơn 2 lần.', 'D. lớn hơn 10 lần.'],
    correctAnswer: 'D', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-aq-ph-context', 'chem11-aq-ph-conversion'], subTypeId: 'chem11-aq-st-ph-context', practiceRole: 'near_transfer', representationType: 'text',
    misconceptionId: 'chem11-mis-ph-context-linear', estimatedSeconds: 75
  },
  {
    id: 'chem11-eq-q117', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt10',
    content: 'Loài cá M thích hợp trong khoảng pH 6,5–7,5. Những bể nào đang nằm trong khoảng thích hợp?',
    stimulus: {
      id: 'chem11-aq-stim-aquarium-ph-01',
      title: 'Kết quả đo pH ba bể',
      dataTable: {
        caption: 'pH đo cùng thời điểm',
        columns: [{ key: 'tank', label: 'Bể' }, { key: 'ph', label: 'pH' }],
        rows: [{ tank: 'A', ph: '6,8' }, { tank: 'B', ph: '7,2' }, { tank: 'C', ph: '8,4' }]
      }
    },
    responseType: 'single_choice',
    options: ['A. A và B', 'B. Chỉ C', 'C. B và C', 'D. Cả A, B và C'],
    correctAnswer: 'A', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-aq-ph-context'], subTypeId: 'chem11-aq-st-ph-context', practiceRole: 'representation_switch', representationType: 'table', estimatedSeconds: 70
  },
  {
    id: 'chem11-eq-q118', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt10',
    content: 'Mẫu Y làm methyl orange màu vàng và bromothymol blue màu vàng. Theo bảng, khoảng pH phù hợp nhất là',
    stimulus: {
      id: 'chem11-aq-stim-indicator-range-02',
      title: 'Dữ liệu hai chỉ thị',
      dataTable: {
        caption: 'Quy ước màu dùng trong câu hỏi',
        columns: [{ key: 'indicator', label: 'Chỉ thị' }, { key: 'yellow', label: 'Điều kiện màu vàng' }],
        rows: [
          { indicator: 'Methyl orange', yellow: 'pH > 4,4' },
          { indicator: 'Bromothymol blue', yellow: 'pH < 6,0' }
        ]
      }
    },
    responseType: 'single_choice',
    options: ['A. $pH<4,4$', 'B. $4,4<pH<6,0$', 'C. $6,0<pH<7,6$', 'D. $pH>7,6$'],
    correctAnswer: 'B', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-aq-indicator'], subTypeId: 'chem11-aq-st-indicator', practiceRole: 'mastery_holdout', representationType: 'table',
    isMasteryHoldout: true, estimatedSeconds: 105
  },
  {
    id: 'chem11-eq-q119', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt10',
    content: 'Dựa vào dữ liệu, lựa chọn nào phù hợp nhất nếu muốn trồng cây N mà chưa điều chỉnh pH đất?',
    stimulus: {
      id: 'chem11-aq-stim-soil-ph-01',
      title: 'Khoảng pH của cây N và các mẫu đất',
      dataTable: {
        caption: 'Cây N sinh trưởng tốt ở pH 5,5–6,5',
        columns: [{ key: 'sample', label: 'Mẫu đất' }, { key: 'ph', label: 'pH' }],
        rows: [{ sample: 'P', ph: '4,7' }, { sample: 'Q', ph: '7,4' }, { sample: 'R', ph: '6,1' }, { sample: 'S', ph: '8,0' }]
      }
    },
    responseType: 'single_choice',
    options: ['A. Mẫu P', 'B. Mẫu Q', 'C. Mẫu R', 'D. Mẫu S'],
    correctAnswer: 'C', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-aq-ph-context'], subTypeId: 'chem11-aq-st-ph-context', practiceRole: 'mastery_holdout', representationType: 'table',
    isMasteryHoldout: true, estimatedSeconds: 95
  },
  {
    id: 'chem11-eq-q120', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt10',
    content: 'Một loài thủy sinh cần pH 6,5–8,0. Từ chuỗi số liệu dưới đây, kết luận có căn cứ nhất là',
    stimulus: {
      id: 'chem11-aq-stim-river-ph-01',
      title: 'Khảo sát pH dọc một đoạn sông',
      dataTable: {
        caption: 'Các điểm được đo trong cùng ngày',
        columns: [{ key: 'site', label: 'Vị trí' }, { key: 'ph', label: 'pH' }],
        rows: [
          { site: 'Thượng nguồn trước điểm xả', ph: '7,2' },
          { site: 'Ngay sau điểm xả', ph: '4,2' },
          { site: 'Cách điểm xả 1 km', ph: '5,2' }
        ]
      }
    },
    responseType: 'single_choice',
    options: [
      'A. Mọi vị trí đều phù hợp vì pH đều là số dương.',
      'B. Điểm ngay sau xả phù hợp nhất.',
      'C. Số liệu chứng minh chắc chắn duy nhất một hóa chất cụ thể gây ô nhiễm.',
      'D. Hai vị trí sau điểm xả đều ngoài khoảng phù hợp; dữ liệu gợi ý nguồn xả liên quan nhưng cần thêm phép đo để kết luận nguyên nhân.'
    ],
    correctAnswer: 'D', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-aq-ph-context'], subTypeId: 'chem11-aq-st-ph-context', practiceRole: 'far_transfer', representationType: 'table',
    misconceptionId: 'chem11-mis-ph-context-linear', isMasteryHoldout: true, estimatedSeconds: 120
  },
  {
    id: 'chem11-eq-q121', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt11',
    content: 'Phương trình nào biểu diễn đúng cân bằng của ion carbonate với nước?',
    responseType: 'single_choice',
    options: [
      'A. $CO_3^{2-}+H_2O\\rightleftharpoons HCO_3^-+OH^-$',
      'B. $CO_3^{2-}\\rightleftharpoons C^{2+}+3O^{2-}$',
      'C. $CO_3^{2-}+H_2O\\rightleftharpoons H_2CO_3+O^{2-}$',
      'D. $CO_3^{2-}+OH^-\\rightleftharpoons HCO_3^-$'
    ],
    correctAnswer: 'A', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-aq-ion-hydrolysis'], subTypeId: 'chem11-aq-st-hydrolysis-representation', practiceRole: 'guided', representationType: 'equation', estimatedSeconds: 50
  },
  {
    id: 'chem11-eq-q122', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt11',
    content: 'Điểm khác nhau cốt lõi giữa điện li của muối và sự tương tác của ion với nước là',
    responseType: 'single_choice',
    options: [
      'A. Hai quá trình hoàn toàn giống nhau.',
      'B. Điện li tạo các ion từ chất điện li; sau đó một số ion mới tham gia cân bằng với nước.',
      'C. Thủy phân luôn xảy ra trước khi muối tan.',
      'D. Điện li chỉ xảy ra với chất không tan.'
    ],
    correctAnswer: 'B', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-aq-ion-hydrolysis'], subTypeId: 'chem11-aq-st-hydrolysis-representation', practiceRole: 'misconception_check', representationType: 'text',
    misconceptionId: 'chem11-mis-hydrolysis-dissociation', estimatedSeconds: 50
  },
  {
    id: 'chem11-eq-q123', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt11',
    content: 'Từ cân bằng $CO_3^{2-}+H_2O\\rightleftharpoons HCO_3^-+OH^-$, có thể dự đoán dung dịch chứa lượng đáng kể $CO_3^{2-}$ có xu hướng',
    responseType: 'single_choice',
    options: ['A. trung tính tuyệt đối.', 'B. acid vì tạo $HCO_3^-$.', 'C. base vì tạo $OH^-$.', 'D. không chứa ion.'],
    correctAnswer: 'C', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-aq-ion-hydrolysis'], subTypeId: 'chem11-aq-st-hydrolysis-environment', practiceRole: 'guided', representationType: 'equation', estimatedSeconds: 50
  },
  {
    id: 'chem11-eq-q124', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt11',
    content: 'Trong mô hình giản lược, $Al^{3+}$ tương tác với nước làm tăng nồng độ $H^+$. Dung dịch chứa $Al^{3+}$ vì thế có xu hướng',
    responseType: 'single_choice',
    options: ['A. base mạnh.', 'B. không thể chứa nước.', 'C. luôn có pH đúng bằng 7.', 'D. acid.'],
    correctAnswer: 'D', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-aq-ion-hydrolysis'], subTypeId: 'chem11-aq-st-hydrolysis-environment', practiceRole: 'guided', representationType: 'text', estimatedSeconds: 45
  },
  {
    id: 'chem11-eq-q125', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt11',
    content: 'Phương trình giản lược nào vừa bảo toàn nguyên tử vừa bảo toàn điện tích khi mô tả bước đầu của $Al^{3+}$ với nước?',
    responseType: 'single_choice',
    options: [
      'A. $Al^{3+}+H_2O\\rightleftharpoons AlOH^{2+}+H^+$',
      'B. $Al^{3+}+H_2O\\rightleftharpoons AlOH^++2H^+$',
      'C. $Al^{3+}+OH^-\\rightleftharpoons AlOH^{3+}$',
      'D. $Al^{3+}\\rightleftharpoons Al+3H^+$'
    ],
    correctAnswer: 'A', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-aq-ion-hydrolysis'], subTypeId: 'chem11-aq-st-hydrolysis-representation', practiceRole: 'near_transfer', representationType: 'equation', estimatedSeconds: 75
  },
  {
    id: 'chem11-eq-q126', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt11',
    content: 'Bảng mô tả cân bằng giản lược của $Fe^{3+}$ với nước. Kết luận phù hợp nhất là',
    stimulus: {
      id: 'chem11-aq-stim-fe-hydrolysis-01',
      title: 'Cân bằng ion–nước',
      dataTable: {
        caption: 'Biến đổi được theo dõi',
        columns: [{ key: 'reactant', label: 'Ion ban đầu' }, { key: 'products', label: 'Tiểu phân tạo thêm' }],
        rows: [{ reactant: '$Fe^{3+}$ và $H_2O$', products: '$FeOH^{2+}$ và $H^+$' }]
      }
    },
    responseType: 'single_choice',
    options: [
      'A. pH có xu hướng tăng vì mất $OH^-$.',
      'B. pH có xu hướng giảm vì cân bằng tạo thêm $H^+$.',
      'C. Dung dịch chắc chắn trung tính.',
      'D. $Fe^{3+}$ điện li thành iron kim loại.'
    ],
    correctAnswer: 'B', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-aq-ion-hydrolysis'], subTypeId: 'chem11-aq-st-hydrolysis-environment', practiceRole: 'representation_switch', representationType: 'table', estimatedSeconds: 70
  },
  {
    id: 'chem11-eq-q127', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt11',
    content: 'Trong xử lí nước, một muối aluminium được dùng để hỗ trợ tạo các bông keo hydroxide giữ hạt lơ lửng. Vì quá trình của $Al^{3+}$ với nước có thể tạo $H^+$, lựa chọn vận hành hợp lí nhất là',
    responseType: 'single_choice',
    options: [
      'A. Bỏ qua pH vì pH không ảnh hưởng cân bằng trong nước.',
      'B. Càng thêm nhiều muối càng tốt, không cần giới hạn.',
      'C. Theo dõi pH và liều dùng để vừa hỗ trợ keo tụ vừa tránh làm nước acid hóa quá mức.',
      'D. Mở bình hóa chất và ngửi để xác định liều.'
    ],
    correctAnswer: 'C', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-aq-ion-hydrolysis'], subTypeId: 'chem11-aq-st-hydrolysis-context', practiceRole: 'near_transfer', representationType: 'text', estimatedSeconds: 80
  },
  {
    id: 'chem11-eq-q128', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt11',
    content: 'Một mẫu nước chứa carbonate có pH lớn hơn 7. Giải thích phù hợp nhất trong phạm vi đang học là',
    responseType: 'single_choice',
    options: [
      'A. Mọi nguyên tử oxygen tự biến thành $OH^-$.',
      'B. $CO_3^{2-}$ phân hủy hoàn toàn thành carbon và oxygen.',
      'C. Carbonate giải phóng trực tiếp $OH^-$ vốn có sẵn trong công thức.',
      'D. $CO_3^{2-}$ nhận proton từ nước, làm nước tạo $OH^-$ trong cân bằng.'
    ],
    correctAnswer: 'D', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-aq-ion-hydrolysis'], subTypeId: 'chem11-aq-st-hydrolysis-context', practiceRole: 'misconception_check', representationType: 'text',
    misconceptionId: 'chem11-mis-carbonate-releases-oh', estimatedSeconds: 75
  },
  {
    id: 'chem11-eq-q129', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt11',
    content: 'Vì sao dung dịch chứa $Al^{3+}$ có thể có tính acid dù công thức $Al^{3+}$ không chứa hydrogen?',
    responseType: 'single_choice',
    options: [
      'A. Ion aluminium hydrat hóa làm phân cực liên kết O–H của nước phối trí, tạo điều kiện chuyển proton cho nước xung quanh.',
      'B. $Al^{3+}$ tự biến thành ba ion $H^+$.',
      'C. Điện tích dương luôn đồng nghĩa với việc ion chứa proton.',
      'D. Nước phân hủy hoàn toàn thành $H_2$ và $O_2$.'
    ],
    correctAnswer: 'A', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-aq-ion-hydrolysis'], subTypeId: 'chem11-aq-st-hydrolysis-representation', practiceRole: 'far_transfer', representationType: 'text',
    misconceptionId: 'chem11-mis-ion-charge-role', estimatedSeconds: 90
  },
  {
    id: 'chem11-eq-q130', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt11',
    content: 'Các dung dịch có cùng nồng độ hình thức và được đo ở cùng nhiệt độ. Kết luận nào được dữ liệu hỗ trợ tốt nhất?',
    stimulus: {
      id: 'chem11-aq-stim-hydrolysis-ph-compare-01',
      title: 'pH của bốn dung dịch muối',
      dataTable: {
        caption: 'Số liệu minh họa trong cùng điều kiện',
        columns: [{ key: 'solution', label: 'Dung dịch' }, { key: 'ph', label: 'pH' }],
        rows: [
          { solution: '$AlCl_3$', ph: '3,4' },
          { solution: '$FeCl_3$', ph: '2,7' },
          { solution: '$NaCl$', ph: '7,0' },
          { solution: '$Na_2CO_3$', ph: '11,2' }
        ]
      }
    },
    responseType: 'single_choice',
    options: [
      'A. Mọi cation đều tạo môi trường acid và mọi anion đều tạo môi trường base.',
      'B. Khả năng tương tác với nước phụ thuộc bản chất ion: Al³⁺/Fe³⁺ cho xu hướng acid, CO₃²⁻ cho xu hướng base, còn NaCl gần trung tính.',
      'C. Tất cả ion đã bị thủy phân hoàn toàn.',
      'D. Dấu điện tích là thông tin duy nhất cần dùng để dự đoán pH.'
    ],
    correctAnswer: 'B', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-aq-ion-hydrolysis'], subTypeId: 'chem11-aq-st-hydrolysis-environment', practiceRole: 'mastery_holdout', representationType: 'table',
    misconceptionId: 'chem11-mis-ion-charge-role', isMasteryHoldout: true, estimatedSeconds: 115
  },
  {
    id: 'chem11-eq-q131', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt11',
    content: 'Một nhóm tăng dần pH của dung dịch chứa $Fe^{3+}$ và ghi hiện tượng. Kết luận nào phù hợp nhất?',
    stimulus: {
      id: 'chem11-aq-stim-fe-precipitation-01',
      title: 'Thí nghiệm thay đổi pH',
      dataTable: {
        caption: 'Quan sát định tính ở cùng lượng iron ban đầu',
        columns: [{ key: 'ph', label: 'pH' }, { key: 'observation', label: 'Hiện tượng' }],
        rows: [
          { ph: '2,0', observation: 'Dung dịch trong, màu vàng nhạt' },
          { ph: '4,0', observation: 'Xuất hiện vẩn đục nâu đỏ' },
          { ph: '7,0', observation: 'Lượng chất rắn nâu đỏ tăng' }
        ]
      }
    },
    responseType: 'single_choice',
    options: [
      'A. Tăng pH làm tổng lượng iron trong hệ tăng.',
      'B. $Fe^{3+}$ không liên quan tới hiện tượng.',
      'C. Dữ liệu phù hợp với việc tăng pH thúc đẩy hình thành hydroxide iron(III) ít tan từ các cân bằng trong nước.',
      'D. Có thể kết luận mọi ion đã biến mất hoàn toàn.'
    ],
    correctAnswer: 'C', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-aq-ion-hydrolysis'], subTypeId: 'chem11-aq-st-hydrolysis-context', practiceRole: 'mastery_holdout', representationType: 'experiment',
    misconceptionId: 'chem11-mis-hydrolysis-irreversible', isMasteryHoldout: true, estimatedSeconds: 120
  },
  {
    id: 'chem11-eq-q132', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt11',
    content: 'Sau khi thêm một liều muối aluminium vào mẫu nước đục, nhóm quan sát được dữ liệu dưới đây. Nhận định nào vừa khai thác đúng dữ liệu vừa không kết luận quá mức?',
    stimulus: {
      id: 'chem11-aq-stim-alum-treatment-01',
      title: 'Theo dõi một thử nghiệm keo tụ',
      dataTable: {
        caption: 'Kết quả trước và sau xử lí',
        columns: [{ key: 'stage', label: 'Giai đoạn' }, { key: 'ph', label: 'pH' }, { key: 'turbidity', label: 'Độ đục tương đối' }],
        rows: [
          { stage: 'Trước xử lí', ph: '7,1', turbidity: '100' },
          { stage: 'Sau khuấy và lắng', ph: '6,3', turbidity: '24' }
        ]
      }
    },
    responseType: 'single_choice',
    options: [
      'A. Muối aluminium chắc chắn đã loại bỏ mọi chất ô nhiễm.',
      'B. pH giảm chứng minh nước không còn bất kì ion nào.',
      'C. Chỉ cần một phép thử này để xác định liều tối ưu cho mọi nguồn nước.',
      'D. Độ đục giảm phù hợp vai trò keo tụ và pH giảm phù hợp xu hướng tạo H⁺; vẫn cần đối chứng, lặp lại và kiểm tra chất lượng khác.'
    ],
    correctAnswer: 'D', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-aq-ion-hydrolysis'], subTypeId: 'chem11-aq-st-hydrolysis-context', practiceRole: 'far_transfer', representationType: 'table',
    isMasteryHoldout: true, estimatedSeconds: 125
  },
  {
    id: 'chem11-eq-q133', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt12',
    content: 'Mục đích cơ bản của phép chuẩn độ acid–base là',
    responseType: 'single_choice',
    options: [
      'A. xác định nồng độ dung dịch chưa biết từ thể tích dung dịch chuẩn đã biết nồng độ phản ứng theo tỉ lượng.',
      'B. làm mọi dung dịch có pH đúng bằng 7.',
      'C. đo trực tiếp khối lượng phân tử của acid.',
      'D. tách hoàn toàn nước khỏi dung dịch.'
    ],
    correctAnswer: 'A', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-aq-titration-principle'], subTypeId: 'chem11-aq-st-titration-principle', practiceRole: 'guided', representationType: 'text', estimatedSeconds: 45
  },
  {
    id: 'chem11-eq-q134', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt12',
    content: 'Dụng cụ phù hợp nhất để thêm dần và đo chính xác thể tích biến đổi của dung dịch chuẩn là',
    responseType: 'single_choice',
    options: ['A. cốc thủy tinh.', 'B. burette.', 'C. ống nghiệm.', 'D. đũa thủy tinh.'],
    correctAnswer: 'B', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-aq-titration-apparatus'], subTypeId: 'chem11-aq-st-titration-apparatus', practiceRole: 'guided', representationType: 'experiment', estimatedSeconds: 40
  },
  {
    id: 'chem11-eq-q135', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt12',
    content: 'Trong phép chuẩn độ dùng phenolphthalein, dấu hiệu thường dùng để nhận biết điểm kết thúc là',
    responseType: 'single_choice',
    options: [
      'A. dung dịch sôi.',
      'B. xuất hiện thật nhiều bọt khí.',
      'C. màu nhạt đầu tiên theo quy ước xuất hiện và bền trong thời gian hướng dẫn khi lắc.',
      'D. màu càng đậm càng chính xác.'
    ],
    correctAnswer: 'C', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-aq-titration-principle'], subTypeId: 'chem11-aq-st-titration-endpoint', practiceRole: 'guided', representationType: 'experiment',
    misconceptionId: 'chem11-mis-indicator-excess', estimatedSeconds: 50
  },
  {
    id: 'chem11-eq-q136', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt12',
    content: 'Số đọc đầu trên burette là 0,20 mL và số đọc cuối là 24,85 mL. Thể tích dung dịch đã dùng bằng',
    responseType: 'single_choice',
    options: ['A. 25,05 mL.', 'B. 24,85 mL.', 'C. 24,05 mL.', 'D. 24,65 mL.'],
    correctAnswer: 'D', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-aq-titration-apparatus'], subTypeId: 'chem11-aq-st-titration-endpoint', practiceRole: 'guided', representationType: 'text',
    misconceptionId: 'chem11-mis-burette-final-reading', estimatedSeconds: 50
  },
  {
    id: 'chem11-eq-q137', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt12',
    content: 'Phát biểu nào phân biệt đúng điểm tương đương và điểm kết thúc?',
    responseType: 'single_choice',
    options: [
      'A. Điểm tương đương là trạng thái tỉ lượng; điểm kết thúc là tín hiệu thực nghiệm dùng để ước nhận trạng thái đó.',
      'B. Hai điểm luôn khác nhau rất xa và không liên quan.',
      'C. Điểm kết thúc là khi mọi chất trong bình biến mất.',
      'D. Điểm tương đương chỉ là màu của chỉ thị.'
    ],
    correctAnswer: 'A', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-aq-titration-principle'], subTypeId: 'chem11-aq-st-titration-principle', practiceRole: 'misconception_check', representationType: 'text',
    misconceptionId: 'chem11-mis-endpoint-equivalence', estimatedSeconds: 65
  },
  {
    id: 'chem11-eq-q138', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt12',
    content: 'Sau khi rửa sạch burette bằng nước cất và trước khi nạp dung dịch chuẩn, cần',
    responseType: 'single_choice',
    options: [
      'A. để lại nhiều nước trong burette.',
      'B. tráng burette bằng một lượng nhỏ chính dung dịch chuẩn rồi loại bỏ phần tráng đúng quy định.',
      'C. lau khô bên trong bằng giấy.',
      'D. tráng bằng dung dịch mẫu chưa biết nồng độ.'
    ],
    correctAnswer: 'B', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-aq-titration-apparatus'], subTypeId: 'chem11-aq-st-titration-apparatus', practiceRole: 'near_transfer', representationType: 'experiment',
    misconceptionId: 'chem11-mis-titration-rinse-water', estimatedSeconds: 65
  },
  {
    id: 'chem11-eq-q139', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt12',
    content: 'Dụng cụ phù hợp nhất để lấy chính xác một thể tích cố định 10,00 mL dung dịch phân tích cho vào bình tam giác là',
    responseType: 'single_choice',
    options: ['A. cốc 100 mL.', 'B. ống nhỏ giọt.', 'C. pipette bầu 10,00 mL.', 'D. bình tam giác có vạch ước lượng.'],
    correctAnswer: 'C', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-aq-titration-apparatus'], subTypeId: 'chem11-aq-st-titration-apparatus', practiceRole: 'near_transfer', representationType: 'experiment', estimatedSeconds: 55
  },
  {
    id: 'chem11-eq-q140', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt12',
    content: 'Khi đọc burette chứa dung dịch trong suốt không màu, thao tác đúng là',
    responseType: 'single_choice',
    options: [
      'A. nhìn từ trên xuống để thấy mặt chất lỏng rõ hơn.',
      'B. đọc mép trên mặt khum và coi thang tăng từ dưới lên.',
      'C. cầm burette nghiêng khi đọc.',
      'D. đặt mắt ngang mặt khum, đọc đáy mặt khum và lưu ý thang tăng từ trên xuống.'
    ],
    correctAnswer: 'D', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-aq-titration-apparatus'], subTypeId: 'chem11-aq-st-titration-endpoint', practiceRole: 'misconception_check', representationType: 'experiment',
    misconceptionId: 'chem11-mis-burette-parallax', estimatedSeconds: 65
  },
  {
    id: 'chem11-eq-q141', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt12',
    content: 'Trình tự tổng quát nào hợp lí nhất cho một lần chuẩn độ sau khi dụng cụ đã sạch?',
    responseType: 'single_choice',
    options: [
      'A. Tráng–nạp burette và loại bọt khí → pipette mẫu vào bình tam giác, thêm ít chỉ thị → chuẩn độ, gần điểm kết thúc thêm từng giọt và lắc → ghi số đọc.',
      'B. Cho chỉ thị vào burette → đổ mẫu bằng cốc → mở khóa đến hết → ước lượng thể tích.',
      'C. Pipette dung dịch bằng miệng → đậy kín bình → đun sôi → đọc burette.',
      'D. Trộn tất cả dung dịch trước → rót ngược lên burette → đọc một số duy nhất.'
    ],
    correctAnswer: 'A', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-aq-titration-principle', 'chem11-aq-titration-apparatus'], subTypeId: 'chem11-aq-st-titration-principle', practiceRole: 'representation_switch', representationType: 'text', estimatedSeconds: 85
  },
  {
    id: 'chem11-eq-q142', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt12',
    content: 'Bảng ghi số đọc burette và thể tích học sinh tính. Dòng nào cần sửa và sửa thành giá trị nào?',
    stimulus: {
      id: 'chem11-aq-stim-burette-readings-01',
      title: 'Nhật ký đọc burette',
      dataTable: {
        caption: 'Tất cả thể tích tính bằng mL',
        columns: [
          { key: 'trial', label: 'Lần' },
          { key: 'initial', label: 'Số đọc đầu' },
          { key: 'final', label: 'Số đọc cuối' },
          { key: 'used', label: 'Thể tích đã ghi' }
        ],
        rows: [
          { trial: '1', initial: '0,35', final: '24,90', used: '24,55' },
          { trial: '2', initial: '1,10', final: '25,80', used: '24,70' },
          { trial: '3', initial: '0,20', final: '24,95', used: '24,95' }
        ]
      }
    },
    responseType: 'single_choice',
    options: [
      'A. Lần 1, sửa thành 25,25 mL.',
      'B. Lần 3, sửa thành 24,75 mL.',
      'C. Lần 2, sửa thành 26,90 mL.',
      'D. Không dòng nào cần sửa.'
    ],
    correctAnswer: 'B', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-aq-titration-apparatus'], subTypeId: 'chem11-aq-st-titration-endpoint', practiceRole: 'mastery_holdout', representationType: 'table',
    misconceptionId: 'chem11-mis-burette-final-reading', isMasteryHoldout: true, estimatedSeconds: 110
  },
  {
    id: 'chem11-eq-q143', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt12',
    content: 'Một học sinh rửa burette bằng nước cất nhưng không tráng bằng dung dịch chuẩn trước khi nạp. Sai số trực tiếp nào có khả năng xảy ra?',
    responseType: 'single_choice',
    options: [
      'A. Dung dịch chuẩn tự động đậm đặc hơn.',
      'B. Thể tích burette biến thành khối lượng.',
      'C. Nước còn lại pha loãng dung dịch chuẩn trong burette, làm nồng độ thực tế khác giá trị dự kiến.',
      'D. Không có ảnh hưởng trong mọi trường hợp.'
    ],
    correctAnswer: 'C', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-aq-titration-apparatus'], subTypeId: 'chem11-aq-st-titration-apparatus', practiceRole: 'mastery_holdout', representationType: 'experiment',
    misconceptionId: 'chem11-mis-titration-rinse-water', isMasteryHoldout: true, estimatedSeconds: 100
  },
  {
    id: 'chem11-eq-q144', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt12',
    content: 'Trong các cách kết thúc và kiểm chứng phép chuẩn độ dưới đây, cách nào đáng tin cậy nhất?',
    responseType: 'single_choice',
    options: [
      'A. Thêm nhanh đến khi màu thật đậm rồi chỉ làm một lần.',
      'B. Dùng thật nhiều chỉ thị để màu dễ nhìn.',
      'C. Dừng ở bất kì thoáng đổi màu nào dù biến mất ngay khi lắc.',
      'D. Gần điểm kết thúc thêm từng giọt, dừng ở màu nhạt đầu tiên bền theo quy ước và lặp lại để thu các thể tích phù hợp nhau.'
    ],
    correctAnswer: 'D', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-aq-titration-principle', 'chem11-aq-titration-apparatus'], subTypeId: 'chem11-aq-st-titration-principle', practiceRole: 'far_transfer', representationType: 'experiment',
    misconceptionId: 'chem11-mis-indicator-excess', isMasteryHoldout: true, estimatedSeconds: 105
  },
  {
    id: 'chem11-eq-q145', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt13',
    content: 'Số đọc đầu và cuối trên burette lần lượt là 0,30 mL và 24,90 mL. Titre của lần chuẩn độ là',
    responseType: 'single_choice',
    options: ['A. 24,60 mL.', 'B. 25,20 mL.', 'C. 24,90 mL.', 'D. 0,30 mL.'],
    correctAnswer: 'A', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-aq-titration-data'], subTypeId: 'chem11-aq-st-titration-titre', practiceRole: 'guided', representationType: 'text', estimatedSeconds: 45
  },
  {
    id: 'chem11-eq-q146', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt13',
    content: 'Vai trò chính của lần chuẩn độ thô là',
    responseType: 'single_choice',
    options: [
      'A. tạo ra kết quả chính xác nhất để dùng một mình.',
      'B. ước lượng vùng điểm kết thúc để các lần định lượng sau được kiểm soát tốt hơn.',
      'C. thay thế mọi lần đo lặp.',
      'D. luôn được đưa vào trung bình bất kể sai lệch.'
    ],
    correctAnswer: 'B', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-aq-titration-data'], subTypeId: 'chem11-aq-st-titration-concordant', practiceRole: 'guided', representationType: 'text',
    misconceptionId: 'chem11-mis-titration-include-rough', estimatedSeconds: 45
  },
  {
    id: 'chem11-eq-q147', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt13',
    content: 'Hai titre được xem là phù hợp nhau theo một quy trình khi',
    responseType: 'single_choice',
    options: [
      'A. chúng giống hệt nhau đến vô hạn chữ số.',
      'B. chúng đều lớn hơn lần thô.',
      'C. độ chênh của chúng nằm trong giới hạn chấp nhận được đã quy định.',
      'D. chúng có cùng số đọc cuối, không cần xét số đọc đầu.'
    ],
    correctAnswer: 'C', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-aq-titration-data'], subTypeId: 'chem11-aq-st-titration-concordant', practiceRole: 'misconception_check', representationType: 'text',
    misconceptionId: 'chem11-mis-titration-exact-repeat', estimatedSeconds: 50
  },
  {
    id: 'chem11-eq-q148', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt13',
    content: 'Hai titre định lượng được chấp nhận là 24,60 mL và 24,70 mL. Giá trị trung bình là',
    responseType: 'single_choice',
    options: ['A. 49,30 mL.', 'B. 24,60 mL.', 'C. 24,70 mL.', 'D. 24,65 mL.'],
    correctAnswer: 'D', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-aq-titration-data'], subTypeId: 'chem11-aq-st-titration-report', practiceRole: 'guided', representationType: 'text', estimatedSeconds: 45
  },
  {
    id: 'chem11-eq-q149', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt13',
    content: 'Titre còn thiếu ở lần 2 là',
    stimulus: {
      id: 'chem11-aq-stim-titre-missing-01',
      title: 'Bảng số đọc burette',
      dataTable: {
        caption: 'Thể tích tính bằng mL',
        columns: [
          { key: 'trial', label: 'Lần' },
          { key: 'initial', label: 'Số đọc đầu' },
          { key: 'final', label: 'Số đọc cuối' },
          { key: 'titre', label: 'Titre' }
        ],
        rows: [
          { trial: '1', initial: '0,20', final: '24,85', titre: '24,65' },
          { trial: '2', initial: '1,15', final: '25,80', titre: '?' }
        ]
      }
    },
    responseType: 'single_choice',
    options: ['A. 24,65 mL.', 'B. 26,95 mL.', 'C. 25,80 mL.', 'D. 24,85 mL.'],
    correctAnswer: 'A', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-aq-titration-data'], subTypeId: 'chem11-aq-st-titration-titre', practiceRole: 'representation_switch', representationType: 'table', estimatedSeconds: 65
  },
  {
    id: 'chem11-eq-q150', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt13',
    content: 'Quy trình quy định hai titre phù hợp nếu chênh nhau không quá 0,10 mL. Cặp nào phù hợp?',
    responseType: 'single_choice',
    options: [
      'A. 24,20 mL và 24,45 mL.',
      'B. 24,68 mL và 24,72 mL.',
      'C. 24,60 mL và 24,85 mL.',
      'D. 24,00 mL và 24,50 mL.'
    ],
    correctAnswer: 'B', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-aq-titration-data'], subTypeId: 'chem11-aq-st-titration-concordant', practiceRole: 'near_transfer', representationType: 'text', estimatedSeconds: 60
  },
  {
    id: 'chem11-eq-q151', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt13',
    content: 'Ba titre được chấp nhận là 24,68 mL; 24,72 mL và 24,70 mL. Trung bình bằng',
    responseType: 'single_choice',
    options: ['A. 74,10 mL.', 'B. 24,68 mL.', 'C. 24,70 mL.', 'D. 24,72 mL.'],
    correctAnswer: 'C', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-aq-titration-data'], subTypeId: 'chem11-aq-st-titration-report', practiceRole: 'near_transfer', representationType: 'text', estimatedSeconds: 60
  },
  {
    id: 'chem11-eq-q152', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt13',
    content: 'Một lần chuẩn độ bắt đầu ở 10,20 mL và kết thúc ở 34,90 mL. Học sinh ghi titre bằng 34,90 mL. Cách sửa đúng là',
    responseType: 'single_choice',
    options: [
      'A. giữ 34,90 mL vì đó là số đọc cuối.',
      'B. đổi thành 45,10 mL.',
      'C. đổi thành 10,20 mL.',
      'D. đổi thành 24,70 mL vì phải lấy số đọc cuối trừ số đọc đầu.'
    ],
    correctAnswer: 'D', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-aq-titration-data'], subTypeId: 'chem11-aq-st-titration-titre', practiceRole: 'misconception_check', representationType: 'text',
    misconceptionId: 'chem11-mis-burette-final-reading', estimatedSeconds: 65
  },
  {
    id: 'chem11-eq-q153', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt13',
    content: 'Ba lần định lượng cho titre 24,40 mL; 24,42 mL và 25,00 mL. Nhận định tốt nhất trước khi tính trung bình là',
    responseType: 'single_choice',
    options: [
      'A. Kiểm tra lần 25,00 mL và quy trình vì nó lệch rõ so với hai lần còn lại; không nên tự động lấy trung bình cả ba.',
      'B. Lấy trung bình cả ba ngay vì trung bình luôn loại được sai số.',
      'C. Chỉ giữ giá trị lớn nhất.',
      'D. Thay 25,00 bằng 24,41 mà không cần lý do.'
    ],
    correctAnswer: 'A', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-aq-titration-data'], subTypeId: 'chem11-aq-st-titration-report', practiceRole: 'far_transfer', representationType: 'experiment',
    misconceptionId: 'chem11-mis-titration-average-all', estimatedSeconds: 80
  },
  {
    id: 'chem11-eq-q154', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt13',
    content: 'Quy trình quy định các titre dùng tính trung bình phải khác nhau không quá 0,10 mL và không dùng lần thô. Giá trị báo cáo phù hợp nhất là',
    stimulus: {
      id: 'chem11-aq-stim-concordant-titres-01',
      title: 'Kết quả một loạt chuẩn độ',
      dataTable: {
        caption: 'Titre tính bằng mL',
        columns: [{ key: 'trial', label: 'Lần' }, { key: 'type', label: 'Loại' }, { key: 'titre', label: 'Titre' }],
        rows: [
          { trial: '0', type: 'Thô', titre: '25,30' },
          { trial: '1', type: 'Định lượng', titre: '24,62' },
          { trial: '2', type: 'Định lượng', titre: '24,66' },
          { trial: '3', type: 'Định lượng', titre: '24,64' },
          { trial: '4', type: 'Định lượng', titre: '25,02' }
        ]
      }
    },
    responseType: 'single_choice',
    options: ['A. 24,85 mL từ cả năm lần.', 'B. 24,64 mL từ các lần 1, 2 và 3.', 'C. 25,02 mL từ lần 4.', 'D. 25,30 mL từ lần thô.'],
    correctAnswer: 'B', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-aq-titration-data'], subTypeId: 'chem11-aq-st-titration-concordant', practiceRole: 'mastery_holdout', representationType: 'table',
    misconceptionId: 'chem11-mis-titration-include-rough', isMasteryHoldout: true, estimatedSeconds: 120
  },
  {
    id: 'chem11-eq-q155', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt13',
    content: 'Dòng nào trong bảng chắc chắn có vấn đề về số đọc hoặc ghi chép trong một lần cấp dung dịch liên tục từ burette?',
    stimulus: {
      id: 'chem11-aq-stim-burette-anomaly-01',
      title: 'Kiểm tra logic số đọc',
      dataTable: {
        caption: 'Thang burette tăng từ trên xuống',
        columns: [{ key: 'trial', label: 'Lần' }, { key: 'initial', label: 'Số đọc đầu (mL)' }, { key: 'final', label: 'Số đọc cuối (mL)' }],
        rows: [
          { trial: 'P', initial: '0,40', final: '24,90' },
          { trial: 'Q', initial: '1,20', final: '25,75' },
          { trial: 'R', initial: '25,10', final: '0,65' },
          { trial: 'S', initial: '0,00', final: '24,60' }
        ]
      }
    },
    responseType: 'single_choice',
    options: ['A. P', 'B. Q', 'C. R', 'D. S'],
    correctAnswer: 'C', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-aq-titration-data'], subTypeId: 'chem11-aq-st-titration-titre', practiceRole: 'mastery_holdout', representationType: 'table',
    misconceptionId: 'chem11-mis-burette-parallax', isMasteryHoldout: true, estimatedSeconds: 105
  },
  {
    id: 'chem11-eq-q156', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt13',
    content: 'Ba titre phù hợp là 24,60 mL; 24,65 mL và 24,70 mL. Cách báo cáo nào hợp lí nhất với dữ liệu burette ghi đến 0,01 mL?',
    responseType: 'single_choice',
    options: [
      'A. 24,6500000 mL vì nhiều chữ số luôn tốt hơn.',
      'B. khoảng 25 mL, không cần nêu số lần.',
      'C. 24 mL vì phải bỏ toàn bộ phần thập phân.',
      'D. Titre trung bình 24,65 mL từ ba lần phù hợp; độ trải 0,10 mL.'
    ],
    correctAnswer: 'D', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-aq-titration-data'], subTypeId: 'chem11-aq-st-titration-report', practiceRole: 'mastery_holdout', representationType: 'text',
    misconceptionId: 'chem11-mis-titration-false-precision', isMasteryHoldout: true, estimatedSeconds: 105
  },
  {
    id: 'chem11-eq-q157', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt14',
    content: 'Chuẩn độ 25,00 mL HCl chưa biết nồng độ bằng 20,00 mL NaOH 0,100 M. Phản ứng theo tỉ lệ 1:1. Nồng độ HCl là',
    responseType: 'single_choice',
    options: ['A. 0,0800 M.', 'B. 0,125 M.', 'C. 0,200 M.', 'D. 0,0400 M.'],
    correctAnswer: 'A', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-aq-titration-calculation'], subTypeId: 'chem11-aq-st-titration-calc-one-one', practiceRole: 'guided', representationType: 'text', estimatedSeconds: 70
  },
  {
    id: 'chem11-eq-q158', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt14',
    content: 'Với phản ứng $H_2SO_4+2NaOH\\rightarrow Na_2SO_4+2H_2O$, quan hệ mol tại điểm tương đương là',
    responseType: 'single_choice',
    options: [
      'A. $n_{H_2SO_4}=2n_{NaOH}$',
      'B. $n_{NaOH}=2n_{H_2SO_4}$',
      'C. $n_{NaOH}=n_{H_2SO_4}$',
      'D. $n_{NaOH}=4n_{H_2SO_4}$'
    ],
    correctAnswer: 'B', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-aq-titration-calculation'], subTypeId: 'chem11-aq-st-titration-calc-stoich', practiceRole: 'guided', representationType: 'equation',
    misconceptionId: 'chem11-mis-titration-cv-always', estimatedSeconds: 55
  },
  {
    id: 'chem11-eq-q159', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt14',
    content: '10,00 mL NaOH 0,150 M vừa đủ phản ứng với 15,00 mL HCl. Nồng độ HCl là',
    responseType: 'single_choice',
    options: ['A. 0,225 M.', 'B. 0,150 M.', 'C. 0,100 M.', 'D. 0,0100 M.'],
    correctAnswer: 'C', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-aq-titration-calculation'], subTypeId: 'chem11-aq-st-titration-calc-one-one', practiceRole: 'near_transfer', representationType: 'text', estimatedSeconds: 65
  },
  {
    id: 'chem11-eq-q160', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt14',
    content: 'Trình tự giải đúng nhất cho bài tính nồng độ từ chuẩn độ là',
    responseType: 'single_choice',
    options: [
      'A. cộng hai nồng độ → chia hai thể tích → chọn đáp án.',
      'B. lấy titre thô → dùng ngay $C_1V_1=C_2V_2$ → bỏ hệ số.',
      'C. tìm pH trước → đổi thành khối lượng → bỏ đơn vị.',
      'D. chọn titre đại diện → tính mol chất chuẩn → dùng tỉ lệ phương trình → tính mol và nồng độ chất phân tích → hiệu chỉnh pha loãng nếu có.'
    ],
    correctAnswer: 'D', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-aq-titration-calculation'], subTypeId: 'chem11-aq-st-titration-calc-multistep', practiceRole: 'guided', representationType: 'text', estimatedSeconds: 60
  },
  {
    id: 'chem11-eq-q161', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt14',
    content: '20,00 mL $H_2SO_4$ được chuẩn độ vừa đủ bằng 24,00 mL NaOH 0,150 M. Coi hai proton đều được trung hòa. Nồng độ $H_2SO_4$ là',
    responseType: 'single_choice',
    options: ['A. 0,0900 M.', 'B. 0,180 M.', 'C. 0,0450 M.', 'D. 0,1125 M.'],
    correctAnswer: 'A', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-aq-titration-calculation'], subTypeId: 'chem11-aq-st-titration-calc-stoich', practiceRole: 'near_transfer', representationType: 'equation',
    misconceptionId: 'chem11-mis-titration-cv-always', estimatedSeconds: 90
  },
  {
    id: 'chem11-eq-q162', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt14',
    content: '25,00 mL $Ca(OH)_2$ chưa biết nồng độ cần 30,00 mL HCl 0,100 M để trung hòa hoàn toàn. Nồng độ $Ca(OH)_2$ là',
    responseType: 'single_choice',
    options: ['A. 0,120 M.', 'B. 0,0600 M.', 'C. 0,0300 M.', 'D. 0,0750 M.'],
    correctAnswer: 'B', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-aq-titration-calculation'], subTypeId: 'chem11-aq-st-titration-calc-stoich', practiceRole: 'misconception_check', representationType: 'equation',
    misconceptionId: 'chem11-mis-titration-stoich-invert', estimatedSeconds: 95
  },
  {
    id: 'chem11-eq-q163', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt14',
    content: 'Dùng NaOH 0,1000 M chuẩn độ 25,00 mL HCl. Từ các titre phù hợp trong bảng, nồng độ HCl gần nhất là',
    stimulus: {
      id: 'chem11-aq-stim-titration-calc-1to1-01',
      title: 'Các titre đã được chấp nhận',
      dataTable: {
        caption: 'Thể tích NaOH sử dụng',
        columns: [{ key: 'trial', label: 'Lần' }, { key: 'titre', label: 'Titre (mL)' }],
        rows: [
          { trial: '1', titre: '18,40' },
          { trial: '2', titre: '18,45' },
          { trial: '3', titre: '18,42' }
        ]
      }
    },
    responseType: 'single_choice',
    options: ['A. 0,184 M.', 'B. 0,0461 M.', 'C. 0,0737 M.', 'D. 0,100 M.'],
    correctAnswer: 'C', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-aq-titration-calculation'], subTypeId: 'chem11-aq-st-titration-calc-one-one', practiceRole: 'representation_switch', representationType: 'table',
    misconceptionId: 'chem11-mis-titration-rough-calc', estimatedSeconds: 110
  },
  {
    id: 'chem11-eq-q164', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt14',
    content: 'Lấy 10,00 mL mẫu HCl ban đầu pha loãng thành 100,0 mL. Chuẩn độ 25,00 mL dung dịch đã pha loãng cần 20,00 mL NaOH 0,100 M. Nồng độ HCl ban đầu là',
    responseType: 'single_choice',
    options: ['A. 0,0200 M.', 'B. 0,0800 M.', 'C. 0,200 M.', 'D. 0,800 M.'],
    correctAnswer: 'D', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-aq-titration-calculation'], subTypeId: 'chem11-aq-st-titration-calc-multistep', practiceRole: 'near_transfer', representationType: 'text',
    misconceptionId: 'chem11-mis-titration-dilution-factor', estimatedSeconds: 120
  },
  {
    id: 'chem11-eq-q165', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt14',
    content: '20,00 mL NaOH chưa biết nồng độ vừa đủ phản ứng với titre trung bình 16,50 mL HCl 0,120 M. Nồng độ NaOH là',
    responseType: 'single_choice',
    options: ['A. 0,0990 M.', 'B. 0,145 M.', 'C. 0,120 M.', 'D. 0,0825 M.'],
    correctAnswer: 'A', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-aq-titration-calculation'], subTypeId: 'chem11-aq-st-titration-calc-one-one', practiceRole: 'far_transfer', representationType: 'text', estimatedSeconds: 85
  },
  {
    id: 'chem11-eq-q166', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt14',
    content: 'Pha loãng 5,00 mL mẫu $H_2SO_4$ thành 100,0 mL. Chuẩn độ 20,00 mL dung dịch pha loãng cần 24,00 mL NaOH 0,100 M. Coi hai proton đều được trung hòa. Nồng độ mẫu ban đầu là',
    responseType: 'single_choice',
    options: ['A. 0,0600 M.', 'B. 1,20 M.', 'C. 0,600 M.', 'D. 2,40 M.'],
    correctAnswer: 'B', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-aq-titration-calculation'], subTypeId: 'chem11-aq-st-titration-calc-multistep', practiceRole: 'mastery_holdout', representationType: 'text',
    misconceptionId: 'chem11-mis-titration-dilution-factor', isMasteryHoldout: true, estimatedSeconds: 150
  },
  {
    id: 'chem11-eq-q167', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt14',
    content: 'Dùng HCl 0,0800 M chuẩn độ 10,00 mL $Ba(OH)_2$. Ba titre phù hợp là 24,90; 25,00 và 25,10 mL. Nồng độ $Ba(OH)_2$ là',
    responseType: 'single_choice',
    options: ['A. 0,200 M.', 'B. 0,0500 M.', 'C. 0,100 M.', 'D. 0,0800 M.'],
    correctAnswer: 'C', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-aq-titration-calculation'], subTypeId: 'chem11-aq-st-titration-calc-stoich', practiceRole: 'mastery_holdout', representationType: 'equation',
    misconceptionId: 'chem11-mis-titration-stoich-invert', isMasteryHoldout: true, estimatedSeconds: 135
  },
  {
    id: 'chem11-eq-q168', subjectId: 'chemistry', topicId: 'chem11-t1', questionTypeId: 'chem11-qt14',
    content: 'Một mẫu HCl được pha loãng 5 lần. Chuẩn độ 25,00 mL dung dịch pha loãng bằng NaOH 0,1000 M. Theo tiêu chí của thí nghiệm, dùng ba titre 20,10; 20,14; 20,12 mL và loại lần thô 21,40 mL cùng lần bất thường 20,80 mL. Nồng độ mẫu HCl ban đầu gần nhất là',
    stimulus: {
      id: 'chem11-aq-stim-titration-calc-dilution-01',
      title: 'Dữ liệu đã phân loại',
      dataTable: {
        caption: 'Titre NaOH 0,1000 M',
        columns: [{ key: 'kind', label: 'Nhóm' }, { key: 'values', label: 'Giá trị (mL)' }],
        rows: [
          { kind: 'Dùng tính toán', values: '20,10; 20,14; 20,12' },
          { kind: 'Không dùng', values: '21,40 (thô); 20,80 (bất thường)' }
        ]
      }
    },
    responseType: 'single_choice',
    options: ['A. 0,0805 M.', 'B. 2,012 M.', 'C. 0,201 M.', 'D. 0,402 M.'],
    correctAnswer: 'D', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-aq-titration-calculation'], subTypeId: 'chem11-aq-st-titration-calc-multistep', practiceRole: 'far_transfer', representationType: 'table',
    misconceptionId: 'chem11-mis-titration-rough-calc', isMasteryHoldout: true, estimatedSeconds: 155
  }
];
