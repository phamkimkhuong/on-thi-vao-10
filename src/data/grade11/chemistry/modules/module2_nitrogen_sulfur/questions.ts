import type { Question } from '@/types';

export const g11ChemistryNitrogenSulfurQuestions: Question[] = [
  {
    id: 'chem11-ns-q001', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt15',
    content: 'Trong khí quyển khô, nitrogen tồn tại chủ yếu dưới dạng nào?',
    responseType: 'single_choice',
    options: ['A. Khí $N_2$', 'B. Khí $NH_3$', 'C. Khí $NO_2$', 'D. Hơi $HNO_3$'],
    correctAnswer: 'A', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-n2-natural'], subTypeId: 'chem11-ns-st-natural', practiceRole: 'guided', representationType: 'text', estimatedSeconds: 40
  },
  {
    id: 'chem11-ns-q002', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt15',
    content: 'Ví dụ nào chứa nitrogen ở dạng hợp chất tự nhiên?',
    responseType: 'single_choice',
    options: ['A. Khí $N_2$ trong không khí', 'B. Ion nitrate trong đất', 'C. Khí oxygen trong khí quyển', 'D. Sulfur tự do trong mỏ'],
    correctAnswer: 'B', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-n2-natural'], subTypeId: 'chem11-ns-st-natural', practiceRole: 'near_transfer', representationType: 'text', estimatedSeconds: 45
  },
  {
    id: 'chem11-ns-q003', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt15',
    content: 'Phát biểu nào mô tả đầy đủ nhất trạng thái tự nhiên của nguyên tố nitrogen?',
    responseType: 'single_choice',
    options: ['A. Chỉ tồn tại trong protein.', 'B. Chỉ tồn tại dưới dạng $N_2$.', 'C. Tồn tại cả dạng $N_2$ tự do và dạng hợp chất.', 'D. Chỉ tồn tại trong muối nitrate nhân tạo.'],
    correctAnswer: 'C', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-n2-natural'], subTypeId: 'chem11-ns-st-natural', practiceRole: 'misconception_check', representationType: 'text',
    misconceptionId: 'chem11-mis-n2-natural-only-free', estimatedSeconds: 50
  },
  {
    id: 'chem11-ns-q004', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt15',
    content: 'Một mẫu không khí chứa nhiều $N_2$, còn mẫu đất chứa $NO_3^-$. Kết luận đúng là',
    responseType: 'single_choice',
    options: ['A. Cả hai mẫu chỉ chứa nitrogen tự do.', 'B. Cả hai mẫu chỉ chứa nitrogen liên kết.', 'C. Mẫu không khí không chứa nguyên tố nitrogen.', 'D. Nitrogen trong không khí chủ yếu ở dạng đơn chất, trong đất có thể ở dạng hợp chất.'],
    correctAnswer: 'D', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-n2-natural'], subTypeId: 'chem11-ns-st-natural', practiceRole: 'mastery_holdout', representationType: 'equation',
    isMasteryHoldout: true, estimatedSeconds: 60
  },
  {
    id: 'chem11-ns-q005', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt15',
    content: 'Biểu diễn liên kết trong phân tử nitrogen phù hợp nhất là',
    responseType: 'single_choice',
    options: ['A. $N\\equiv N$', 'B. $N-N$', 'C. $N=O$', 'D. $N\\rightarrow N$'],
    correctAnswer: 'A', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-n2-bond-inertness'], subTypeId: 'chem11-ns-st-bond-inertness', practiceRole: 'guided', representationType: 'equation', estimatedSeconds: 50
  },
  {
    id: 'chem11-ns-q006', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt15',
    content: 'Nguyên nhân chính làm $N_2$ kém hoạt động ở nhiệt độ thường là',
    responseType: 'single_choice',
    options: ['A. Phân tử $N_2$ không có electron.', 'B. Liên kết ba trong $N_2$ rất bền, cần nhiều năng lượng để phá vỡ.', 'C. $N_2$ là khí nặng nhất trong không khí.', 'D. Hai nguyên tử N mang điện tích cùng dấu.'],
    correctAnswer: 'B', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-n2-bond-inertness'], subTypeId: 'chem11-ns-st-bond-inertness', practiceRole: 'near_transfer', representationType: 'text', estimatedSeconds: 60
  },
  {
    id: 'chem11-ns-q007', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt15',
    content: 'Cách hiểu nào đúng về nhận xét “nitrogen tương đối trơ ở nhiệt độ thường”?',
    responseType: 'single_choice',
    options: ['A. $N_2$ không thể tham gia bất kì phản ứng nào.', 'B. Mọi phản ứng của $N_2$ đều tự xảy ra ở nhiệt độ thường.', 'C. $N_2$ kém hoạt động trong điều kiện thường nhưng có thể phản ứng khi được cung cấp đủ năng lượng và điều kiện thích hợp.', 'D. $N_2$ chỉ phản ứng khi chuyển thành chất lỏng.'],
    correctAnswer: 'C', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-n2-bond-inertness'], subTypeId: 'chem11-ns-st-bond-inertness', practiceRole: 'misconception_check', representationType: 'text',
    misconceptionId: 'chem11-mis-n2-inert-no-reaction', estimatedSeconds: 70
  },
  {
    id: 'chem11-ns-q008', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt15',
    content: 'So với một phân tử có liên kết yếu hơn, $N_2$ thường cần nhiệt độ cao hơn để phản ứng. Giải thích hợp lí nhất là',
    responseType: 'single_choice',
    options: ['A. Nhiệt độ cao làm $N_2$ mất hết electron.', 'B. Nhiệt độ cao làm tăng số proton của N.', 'C. Nhiệt độ cao biến liên kết ba thành liên kết ion trước mọi phản ứng.', 'D. Nhiệt độ cao giúp nhiều va chạm có đủ năng lượng để vượt rào cản liên quan đến liên kết ba bền.'],
    correctAnswer: 'D', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-n2-bond-inertness'], subTypeId: 'chem11-ns-st-bond-inertness', practiceRole: 'mastery_holdout', representationType: 'text',
    misconceptionId: 'chem11-mis-n2-reacts-room-temperature', isMasteryHoldout: true, estimatedSeconds: 90
  },
  {
    id: 'chem11-ns-q009', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt15',
    content: 'Bơm $N_2$ khí vào bao bì thực phẩm chủ yếu nhằm',
    responseType: 'single_choice',
    options: ['A. Tạo môi trường ít phản ứng, hạn chế tiếp xúc với oxygen.', 'B. Làm thực phẩm đông cứng tức thời.', 'C. Tăng nồng độ oxygen trong bao bì.', 'D. Chuyển protein thành nitrate.'],
    correctAnswer: 'A', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-n2-applications'], subTypeId: 'chem11-ns-st-applications', practiceRole: 'near_transfer', representationType: 'text', estimatedSeconds: 60
  },
  {
    id: 'chem11-ns-q010', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt15',
    content: 'Nitrogen lỏng thích hợp để bảo quản lạnh mẫu sinh học chủ yếu vì',
    responseType: 'single_choice',
    options: ['A. Nó phản ứng mạnh với nước trong tế bào.', 'B. Nó có nhiệt độ sôi rất thấp, tạo môi trường lạnh sâu.', 'C. Nó cung cấp oxygen cho mẫu.', 'D. Nó có màu giúp dễ quan sát mẫu.'],
    correctAnswer: 'B', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-n2-applications'], subTypeId: 'chem11-ns-st-applications', practiceRole: 'far_transfer', representationType: 'text',
    misconceptionId: 'chem11-mis-liquid-nitrogen-inert-only', estimatedSeconds: 80
  },
  {
    id: 'chem11-ns-q011', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt15',
    content: 'Một cơ sở cần (1) khí bảo vệ bề mặt vật liệu khỏi oxygen khi gia công và (2) tác nhân cấp đông nhanh. Cặp lựa chọn phù hợp là',
    responseType: 'single_choice',
    options: ['A. Cả hai đều dùng $N_2$ khí vì nhiệt độ của khí luôn rất thấp.', 'B. Cả hai đều dùng $N_2$ lỏng chỉ vì nitrogen trơ.', 'C. (1) dùng $N_2$ khí nhờ tính trơ tương đối; (2) dùng $N_2$ lỏng nhờ khả năng làm lạnh sâu.', 'D. Không thể dùng nitrogen cho cả hai mục đích.'],
    correctAnswer: 'C', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-n2-applications', 'chem11-ns-n2-bond-inertness'], subTypeId: 'chem11-ns-st-applications', practiceRole: 'representation_switch', representationType: 'text', estimatedSeconds: 100
  },
  {
    id: 'chem11-ns-q012', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt15',
    content: 'Trong phòng kín, làm đổ nhiều nitrogen lỏng nguy hiểm ngay cả khi $N_2$ không độc về mặt hóa học. Nhận định đầy đủ nhất là',
    responseType: 'single_choice',
    options: ['A. Chỉ nguy hiểm vì nitrogen lỏng dễ cháy.', 'B. Chỉ nguy hiểm vì tạo acid mạnh.', 'C. Không nguy hiểm vì nitrogen vốn có trong không khí.', 'D. Có thể gây bỏng lạnh và khi bay hơi làm giảm tỉ lệ oxygen, gây ngạt.'],
    correctAnswer: 'D', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-n2-applications'], subTypeId: 'chem11-ns-st-applications', practiceRole: 'mastery_holdout', representationType: 'text',
    isMasteryHoldout: true, estimatedSeconds: 100
  },
  {
    id: 'chem11-ns-q013', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt16',
    content: 'Phương trình đúng của phản ứng tổng hợp ammonia từ nitrogen và hydrogen là',
    responseType: 'single_choice',
    options: ['A. $N_2+3H_2\\rightleftharpoons2NH_3$', 'B. $N_2+H_2\\rightarrow N_2H_2$', 'C. $2N_2+H_2\\rightarrow2NH$', 'D. $N_2+2H_2\\rightarrow2NH_2$'],
    correctAnswer: 'A', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-n2-high-temperature-reactions'], subTypeId: 'chem11-ns-st-n2-h2', practiceRole: 'guided', representationType: 'equation', estimatedSeconds: 50
  },
  {
    id: 'chem11-ns-q014', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt16',
    content: 'Trong phản ứng $N_2+3H_2\\rightleftharpoons2NH_3$, số oxi hóa của nitrogen thay đổi như thế nào?',
    responseType: 'single_choice',
    options: ['A. Từ 0 lên +3', 'B. Từ 0 xuống −3', 'C. Từ −3 lên 0', 'D. Không thay đổi'],
    correctAnswer: 'B', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-n2-high-temperature-reactions'], subTypeId: 'chem11-ns-st-n2-h2', practiceRole: 'guided', representationType: 'equation', estimatedSeconds: 55
  },
  {
    id: 'chem11-ns-q015', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt16',
    content: 'Trong phản ứng tạo $NH_3$ từ $N_2$ và $H_2$, $N_2$ đóng vai trò',
    responseType: 'single_choice',
    options: ['A. Chất khử vì nitrogen tăng số oxi hóa.', 'B. Chất xúc tác vì không đổi số oxi hóa.', 'C. Chất oxi hóa vì nitrogen nhận electron, số oxi hóa giảm.', 'D. Môi trường phản ứng, không tham gia.'],
    correctAnswer: 'C', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-n2-high-temperature-reactions'], subTypeId: 'chem11-ns-st-n2-h2', practiceRole: 'near_transfer', representationType: 'text', estimatedSeconds: 60
  },
  {
    id: 'chem11-ns-q016', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt16',
    content: 'Vì sao hỗn hợp $N_2$ và $H_2$ không lập tức chuyển hoàn toàn thành $NH_3$ ở nhiệt độ thường?',
    responseType: 'single_choice',
    options: ['A. Vì phương trình chưa cân bằng.', 'B. Vì nitrogen không có electron hóa trị.', 'C. Vì ammonia không chứa nitrogen.', 'D. Vì liên kết ba $N\\equiv N$ bền tạo rào cản năng lượng lớn; phản ứng cần điều kiện thích hợp.'],
    correctAnswer: 'D', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-n2-bond-inertness', 'chem11-ns-n2-high-temperature-reactions'], subTypeId: 'chem11-ns-st-n2-h2', practiceRole: 'mastery_holdout', representationType: 'text',
    misconceptionId: 'chem11-mis-n2-reacts-room-temperature', isMasteryHoldout: true, estimatedSeconds: 70
  },
  {
    id: 'chem11-ns-q017', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt16',
    content: 'Ở nhiệt độ rất cao, phản ứng trực tiếp giữa nitrogen và oxygen trước hết tạo ra',
    responseType: 'single_choice',
    options: ['A. $NO$ theo phương trình $N_2+O_2\\rightleftharpoons2NO$', 'B. $NO_2$ theo phương trình $N_2+2O_2\\rightarrow2NO_2$', 'C. $HNO_3$', 'D. $NH_3$'],
    correctAnswer: 'A', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-n2-high-temperature-reactions'], subTypeId: 'chem11-ns-st-n2-o2', practiceRole: 'guided', representationType: 'equation', estimatedSeconds: 60
  },
  {
    id: 'chem11-ns-q018', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt16',
    content: 'Trong phản ứng $N_2+O_2\\rightleftharpoons2NO$, nitrogen có số oxi hóa',
    responseType: 'single_choice',
    options: ['A. Giảm từ 0 xuống −2.', 'B. Tăng từ 0 lên +2.', 'C. Tăng từ −3 lên +2.', 'D. Không thay đổi.'],
    correctAnswer: 'B', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-n2-high-temperature-reactions'], subTypeId: 'chem11-ns-st-n2-o2', practiceRole: 'near_transfer', representationType: 'equation', estimatedSeconds: 60
  },
  {
    id: 'chem11-ns-q019', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt16',
    content: 'Vai trò của $N_2$ trong phản ứng tạo $NO$ là',
    responseType: 'single_choice',
    options: ['A. Chất oxi hóa vì nitrogen giảm số oxi hóa.', 'B. Chất xúc tác.', 'C. Chất khử vì nitrogen tăng số oxi hóa.', 'D. Dung môi.'],
    correctAnswer: 'C', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-n2-high-temperature-reactions'], subTypeId: 'chem11-ns-st-n2-o2', practiceRole: 'misconception_check', representationType: 'text',
    misconceptionId: 'chem11-mis-n2-redox-role-fixed', estimatedSeconds: 65
  },
  {
    id: 'chem11-ns-q020', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt16',
    content: 'So sánh hai phản ứng của $N_2$ với $H_2$ và với $O_2$, kết luận đúng là',
    responseType: 'single_choice',
    options: ['A. $N_2$ luôn là chất oxi hóa.', 'B. $N_2$ luôn là chất khử.', 'C. $N_2$ không tham gia oxi hóa–khử.', 'D. $N_2$ là chất oxi hóa khi tạo $NH_3$ nhưng là chất khử khi tạo $NO$.'],
    correctAnswer: 'D', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-n2-high-temperature-reactions'], subTypeId: 'chem11-ns-st-n2-o2', practiceRole: 'mastery_holdout', representationType: 'text',
    misconceptionId: 'chem11-mis-n2-redox-role-fixed', isMasteryHoldout: true, estimatedSeconds: 85
  },
  {
    id: 'chem11-ns-q021', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt16',
    content: 'Chuỗi nào mô tả đúng quá trình tự nhiên góp phần đưa nitrogen từ khí quyển thành nitrate trong đất sau mưa giông?',
    responseType: 'single_choice',
    options: ['A. $N_2\\rightarrow NO\\rightarrow NO_2\\rightarrow HNO_3/NO_3^-$', 'B. $N_2\\rightarrow NH_3\\rightarrow O_2\\rightarrow NO_3^-$', 'C. $N_2\\rightarrow H_2\\rightarrow HNO_3$', 'D. $N_2\\rightarrow NO_3^-$ trực tiếp trong một bước không có chất trung gian'],
    correctAnswer: 'A', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-n2-nitrate-rain'], subTypeId: 'chem11-ns-st-nitrate-rain', practiceRole: 'guided', representationType: 'equation', estimatedSeconds: 70
  },
  {
    id: 'chem11-ns-q022', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt16',
    content: 'Sau khi $NO$ hình thành ở vùng nhiệt độ cao của tia sét, bước oxi hóa tiếp theo trong không khí được biểu diễn đúng bởi',
    responseType: 'single_choice',
    options: ['A. $NO+O_2\\rightarrow NO_3$', 'B. $2NO+O_2\\rightarrow2NO_2$', 'C. $NO+H_2\\rightarrow NH_3$', 'D. $2NO\\rightarrow N_2+O_2$ là chiều duy nhất'],
    correctAnswer: 'B', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-n2-nitrate-rain'], subTypeId: 'chem11-ns-st-nitrate-rain', practiceRole: 'near_transfer', representationType: 'equation', estimatedSeconds: 80
  },
  {
    id: 'chem11-ns-q023', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt16',
    content: 'Vai trò của nước mưa trong quá trình tự nhiên cung cấp nitrate cho đất được mô tả đúng nhất là',
    responseType: 'single_choice',
    options: ['A. Cung cấp năng lượng chính để phá liên kết ba của $N_2$.', 'B. Biến trực tiếp $N_2$ thành $NH_3$ ở nhiệt độ thường.', 'C. Hòa tan và đưa các sản phẩm chứa nitrogen đã bị oxi hóa, cuối cùng ở dạng nitrate, xuống đất.', 'D. Loại bỏ hoàn toàn mọi hợp chất nitrogen khỏi khí quyển.'],
    correctAnswer: 'C', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-n2-nitrate-rain'], subTypeId: 'chem11-ns-st-nitrate-rain', practiceRole: 'far_transfer', representationType: 'text', estimatedSeconds: 90
  },
  {
    id: 'chem11-ns-q024', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt16',
    content: 'Một phép đo cho thấy nước mưa sau giông có ion nitrate. Giải thích nào vừa phù hợp dữ liệu vừa không vượt quá bằng chứng?',
    responseType: 'single_choice',
    options: ['A. Mọi nitrate trong đất đều chỉ do sấm sét tạo ra.', 'B. Tia sét biến trực tiếp toàn bộ $N_2$ không khí thành nitrate.', 'C. Dữ liệu chứng minh $N_2$ phản ứng nhanh với $O_2$ ở nhiệt độ thường.', 'D. Năng lượng của tia sét có thể tạo $NO$, chất này tiếp tục bị oxi hóa và tạo sản phẩm được nước mưa đưa xuống dưới dạng nitrate.'],
    correctAnswer: 'D', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-n2-nitrate-rain', 'chem11-ns-n2-high-temperature-reactions'], subTypeId: 'chem11-ns-st-nitrate-rain', practiceRole: 'mastery_holdout', representationType: 'experiment',
    misconceptionId: 'chem11-mis-lightning-direct-fertilizer', isMasteryHoldout: true, estimatedSeconds: 110
  }
];
