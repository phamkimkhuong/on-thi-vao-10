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
  },
  {
    id: 'chem11-ns-q025', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt17',
    content: 'Trong công thức Lewis của $NH_3$, nguyên tử N có',
    responseType: 'single_choice',
    options: ['A. Ba cặp electron liên kết và một cặp electron chưa liên kết.', 'B. Ba cặp electron chưa liên kết.', 'C. Một liên kết đôi N–H.', 'D. Không có electron hóa trị.'],
    correctAnswer: 'A', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-nh3-structure'], subTypeId: 'chem11-ns-st-nh3-structure', practiceRole: 'guided', representationType: 'equation', estimatedSeconds: 45
  },
  {
    id: 'chem11-ns-q026', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt17',
    content: 'Hình học phân tử của $NH_3$ là',
    responseType: 'single_choice',
    options: ['A. Thẳng.', 'B. Chóp tam giác.', 'C. Tam giác phẳng.', 'D. Tứ diện đều với bốn nguyên tử H.'],
    correctAnswer: 'B', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-nh3-structure'], subTypeId: 'chem11-ns-st-nh3-structure', practiceRole: 'near_transfer', representationType: 'text', estimatedSeconds: 40
  },
  {
    id: 'chem11-ns-q027', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt17',
    content: 'Nhận xét đúng về phân tử $NH_3$ là',
    responseType: 'single_choice',
    options: ['A. Không phân cực vì có ba liên kết giống nhau.', 'B. Có cấu trúc thẳng nên moment lưỡng cực triệt tiêu.', 'C. Phân cực do hình chóp tam giác làm các moment liên kết không triệt tiêu.', 'D. Là ion mang điện dương.'],
    correctAnswer: 'C', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-nh3-structure'], subTypeId: 'chem11-ns-st-nh3-structure', practiceRole: 'near_transfer', representationType: 'text', estimatedSeconds: 55
  },
  {
    id: 'chem11-ns-q028', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt17',
    content: 'Một học sinh cho rằng $NH_3$ có hình tam giác phẳng vì N tạo ba liên kết N–H. Phản biện đúng nhất là',
    responseType: 'single_choice',
    options: ['A. N chỉ tạo hai liên kết N–H.', 'B. NH₃ là hợp chất ion nên không có hình học phân tử.', 'C. Ba nguyên tử H nằm trên một đường thẳng.', 'D. Cặp electron chưa liên kết trên N làm hình học phân tử trở thành chóp tam giác.'],
    correctAnswer: 'D', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-nh3-structure'], subTypeId: 'chem11-ns-st-nh3-structure', practiceRole: 'mastery_holdout', representationType: 'diagram',
    misconceptionId: 'chem11-mis-nh3-planar', isMasteryHoldout: true, estimatedSeconds: 70
  },
  {
    id: 'chem11-ns-q029', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt17',
    content: '$NH_3$ tan rất nhiều trong nước chủ yếu vì',
    responseType: 'single_choice',
    options: ['A. NH₃ phân cực, tạo tương tác mạnh với nước và một phần nhận proton từ nước.', 'B. NH₃ có khối lượng mol lớn hơn nước.', 'C. NH₃ không có electron.', 'D. Mọi chất khí đều tan vô hạn trong nước.'],
    correctAnswer: 'A', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-nh3-solubility'], subTypeId: 'chem11-ns-st-nh3-solubility', practiceRole: 'guided', representationType: 'text', estimatedSeconds: 65
  },
  {
    id: 'chem11-ns-q030', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt17',
    content: 'Trong thí nghiệm vòi phun ammonia, nước phun mạnh vào bình chứa $NH_3$ khô chủ yếu do',
    responseType: 'single_choice',
    options: ['A. NH₃ đẩy nước bằng áp suất rất lớn.', 'B. NH₃ tan nhanh làm áp suất trong bình giảm, áp suất ngoài đẩy nước vào.', 'C. Nước bị phân hủy thành khí.', 'D. NH₃ ngưng tụ thành kim loại.'],
    correctAnswer: 'B', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-nh3-solubility'], subTypeId: 'chem11-ns-st-nh3-solubility', practiceRole: 'representation_switch', representationType: 'experiment', estimatedSeconds: 75
  },
  {
    id: 'chem11-ns-q031', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt17',
    content: 'Giấy quỳ tím ẩm tiếp xúc với khí $NH_3$ thường',
    responseType: 'single_choice',
    options: ['A. Hóa đỏ vì NH₃ là acid.', 'B. Mất màu ngay lập tức.', 'C. Hóa xanh do NH₃ tạo môi trường base khi hòa tan trong lớp nước.', 'D. Không đổi màu trong mọi điều kiện.'],
    correctAnswer: 'C', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-nh3-solubility', 'chem11-ns-nh3-base'], subTypeId: 'chem11-ns-st-nh3-solubility', practiceRole: 'near_transfer', representationType: 'experiment', estimatedSeconds: 60
  },
  {
    id: 'chem11-ns-q032', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt17',
    content: 'Vì sao giấy quỳ tím khô không phải dụng cụ phù hợp bằng giấy quỳ tím ẩm để phát hiện tính base của khí $NH_3$?',
    responseType: 'single_choice',
    options: ['A. Quỳ khô luôn có tính acid mạnh.', 'B. Quỳ khô biến NH₃ thành N₂.', 'C. Nước làm mất hoàn toàn tính base của NH₃.', 'D. Cần lớp nước để NH₃ hòa tan và tạo $OH^-$ đủ làm chỉ thị đổi màu.'],
    correctAnswer: 'D', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-nh3-solubility', 'chem11-ns-nh3-base'], subTypeId: 'chem11-ns-st-nh3-solubility', practiceRole: 'mastery_holdout', representationType: 'experiment',
    isMasteryHoldout: true, estimatedSeconds: 85
  },
  {
    id: 'chem11-ns-q033', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt17',
    content: 'Phương trình mô tả đúng tính base yếu của ammonia trong nước là',
    responseType: 'single_choice',
    options: ['A. $NH_3+H_2O\\rightleftharpoons NH_4^++OH^-$', 'B. $NH_3\\rightarrow N^{3-}+3H^+$', 'C. $NH_3+H_2O\\rightarrow HNO_3+H_2$', 'D. $NH_3\\rightarrow NH_4^++OH^-$'],
    correctAnswer: 'A', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-nh3-base'], subTypeId: 'chem11-ns-st-nh3-base', practiceRole: 'guided', representationType: 'equation', estimatedSeconds: 60
  },
  {
    id: 'chem11-ns-q034', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt17',
    content: 'Trong phản ứng $NH_3+HCl\\rightarrow NH_4Cl$, theo Brønsted–Lowry, $NH_3$ là',
    responseType: 'single_choice',
    options: ['A. Acid vì nhường proton.', 'B. Base vì nhận proton tạo $NH_4^+$.', 'C. Chất oxi hóa vì nhận electron.', 'D. Chất xúc tác.'],
    correctAnswer: 'B', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-nh3-base'], subTypeId: 'chem11-ns-st-nh3-base', practiceRole: 'far_transfer', representationType: 'equation', estimatedSeconds: 75
  },
  {
    id: 'chem11-ns-q035', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt17',
    content: 'Dấu hiệu nào phân biệt đúng dung dịch $NH_3$ với dung dịch base mạnh cùng nồng độ hình thức?',
    responseType: 'single_choice',
    options: ['A. NH₃ không thể làm đổi màu chỉ thị.', 'B. NH₃ không phản ứng với acid.', 'C. NH₃ chỉ nhận proton một phần từ nước nên nồng độ $OH^-$ nhỏ hơn nồng độ hình thức.', 'D. NH₃ chứa sẵn ion $OH^-$ trong công thức phân tử.'],
    correctAnswer: 'C', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-nh3-base'], subTypeId: 'chem11-ns-st-nh3-base', practiceRole: 'misconception_check', representationType: 'text',
    misconceptionId: 'chem11-mis-nh3-strong-base', estimatedSeconds: 95
  },
  {
    id: 'chem11-ns-q036', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt17',
    content: 'Với dung dịch $NH_3$ 0,10 M ở điều kiện thường, nhận định chắc chắn đúng trong phạm vi bài học là',
    responseType: 'single_choice',
    options: ['A. $[OH^-]=0{,}10$ M vì NH₃ là base mạnh.', 'B. Không có ion $NH_4^+$ trong dung dịch.', 'C. Toàn bộ NH₃ chuyển thành $NH_4^+$.', 'D. Cân bằng tạo $NH_4^+$ và $OH^-$ chỉ xảy ra một phần nên $[OH^-]<0{,}10$ M.'],
    correctAnswer: 'D', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-nh3-base'], subTypeId: 'chem11-ns-st-nh3-base', practiceRole: 'mastery_holdout', representationType: 'equation',
    misconceptionId: 'chem11-mis-nh3-strong-base', isMasteryHoldout: true, estimatedSeconds: 100
  },
  {
    id: 'chem11-ns-q037', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt18',
    content: 'Số oxi hóa của nitrogen trong $NH_3$ là',
    responseType: 'single_choice',
    options: ['A. −3', 'B. 0', 'C. +3', 'D. +5'],
    correctAnswer: 'A', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-nh3-reducing'], subTypeId: 'chem11-ns-st-nh3-reducing', practiceRole: 'guided', representationType: 'equation', estimatedSeconds: 40
  },
  {
    id: 'chem11-ns-q038', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt18',
    content: 'Phương trình đúng khi đun nóng $NH_3$ với $CuO$ là',
    responseType: 'single_choice',
    options: ['A. $NH_3+CuO\\rightarrow NH_4CuO$', 'B. $2NH_3+3CuO\\rightarrow N_2+3Cu+3H_2O$', 'C. $NH_3+CuO\\rightarrow NO+Cu+H_2$', 'D. $2NH_3+CuO\\rightarrow N_2O+Cu+3H_2$'],
    correctAnswer: 'B', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-nh3-reducing'], subTypeId: 'chem11-ns-st-nh3-reducing', practiceRole: 'near_transfer', representationType: 'equation', estimatedSeconds: 60
  },
  {
    id: 'chem11-ns-q039', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt18',
    content: 'Trong phản ứng giữa $NH_3$ và $CuO$ tạo $N_2$, vai trò của $NH_3$ là',
    responseType: 'single_choice',
    options: ['A. Chất oxi hóa vì N giảm số oxi hóa.', 'B. Acid mạnh.', 'C. Chất khử vì N tăng từ −3 lên 0.', 'D. Chất xúc tác.'],
    correctAnswer: 'C', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-nh3-reducing'], subTypeId: 'chem11-ns-st-nh3-reducing', practiceRole: 'misconception_check', representationType: 'text',
    misconceptionId: 'chem11-mis-nh3-redox-role', estimatedSeconds: 60
  },
  {
    id: 'chem11-ns-q040', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt18',
    content: 'Khi ammonia cháy trong oxygen không có chất xúc tác theo phản ứng tạo $N_2$ và nước, phương trình cân bằng là',
    responseType: 'single_choice',
    options: ['A. $NH_3+O_2\\rightarrow NO+H_2O$', 'B. $2NH_3+O_2\\rightarrow N_2+3H_2O$', 'C. $4NH_3+O_2\\rightarrow2N_2+6H_2O$', 'D. $4NH_3+3O_2\\rightarrow2N_2+6H_2O$'],
    correctAnswer: 'D', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-nh3-reducing'], subTypeId: 'chem11-ns-st-nh3-reducing', practiceRole: 'mastery_holdout', representationType: 'equation',
    isMasteryHoldout: true, estimatedSeconds: 80
  },
  {
    id: 'chem11-ns-q041', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt18',
    content: 'Với cân bằng $N_2(g)+3H_2(g)\\rightleftharpoons2NH_3(g)$, tăng áp suất bằng cách giảm thể tích ở nhiệt độ không đổi làm cân bằng',
    responseType: 'single_choice',
    options: ['A. Chuyển dịch theo chiều tạo NH₃ vì phía sản phẩm có ít mol khí hơn.', 'B. Chuyển dịch sang trái vì NH₃ nặng hơn.', 'C. Không đổi vì mọi chất đều là khí.', 'D. Dừng hoàn toàn.'],
    correctAnswer: 'A', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-haber-equilibrium'], subTypeId: 'chem11-ns-st-haber', practiceRole: 'guided', representationType: 'equation', estimatedSeconds: 70
  },
  {
    id: 'chem11-ns-q042', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt18',
    content: 'Vai trò đúng của chất xúc tác trong quy trình Haber là',
    responseType: 'single_choice',
    options: ['A. Làm tăng hằng số cân bằng.', 'B. Giúp hệ đạt cân bằng nhanh hơn nhưng không làm đổi thành phần cân bằng.', 'C. Chỉ tăng tốc độ chiều thuận.', 'D. Làm cân bằng chuyển dịch hoàn toàn sang phải.'],
    correctAnswer: 'B', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-haber-equilibrium'], subTypeId: 'chem11-ns-st-haber', practiceRole: 'misconception_check', representationType: 'text',
    misconceptionId: 'chem11-mis-haber-catalyst-shift', estimatedSeconds: 65
  },
  {
    id: 'chem11-ns-q043', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt18',
    content: 'Phản ứng tạo $NH_3$ là tỏa nhiệt. Vì sao công nghiệp không chọn nhiệt độ thấp nhất có thể?',
    responseType: 'single_choice',
    options: ['A. Vì nhiệt độ thấp làm cân bằng chuyển dịch sang trái.', 'B. Vì phản ứng trở thành thu nhiệt.', 'C. Vì nhiệt độ quá thấp làm tốc độ phản ứng rất chậm; cần nhiệt độ thỏa hiệp cùng xúc tác.', 'D. Vì NH₃ chỉ bền ở nhiệt độ rất cao.'],
    correctAnswer: 'C', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-haber-equilibrium'], subTypeId: 'chem11-ns-st-haber', practiceRole: 'near_transfer', representationType: 'text',
    misconceptionId: 'chem11-mis-haber-temperature-only', estimatedSeconds: 80
  },
  {
    id: 'chem11-ns-q044', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt18',
    content: 'Trong dây chuyền Haber, làm lạnh hỗn hợp sau phản ứng để tách bớt $NH_3$ rồi tuần hoàn $N_2$, $H_2$ chưa phản ứng có tác dụng chính là',
    responseType: 'single_choice',
    options: ['A. Làm chất xúc tác biến mất.', 'B. Tăng số mol khí ở vế sản phẩm.', 'C. Biến phản ứng thuận nghịch thành phản ứng một chiều tuyệt đối.', 'D. Thu sản phẩm và kéo cân bằng tiếp tục theo chiều tạo NH₃, đồng thời tận dụng chất đầu.'],
    correctAnswer: 'D', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-haber-equilibrium'], subTypeId: 'chem11-ns-st-haber', practiceRole: 'mastery_holdout', representationType: 'text',
    isMasteryHoldout: true, estimatedSeconds: 90
  },
  {
    id: 'chem11-ns-q045', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt18',
    content: 'Ứng dụng nào của ammonia là nguyên liệu cho một quá trình hóa học tiếp theo?',
    responseType: 'single_choice',
    options: ['A. Sản xuất nitric acid và phân bón chứa nitrogen.', 'B. Làm khí trơ trong bóng đèn.', 'C. Làm chất oxi hóa mạnh cho mọi kim loại.', 'D. Thay oxygen trong hô hấp.'],
    correctAnswer: 'A', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-nh3-applications'], subTypeId: 'chem11-ns-st-nh3-applications', practiceRole: 'near_transfer', representationType: 'text', estimatedSeconds: 55
  },
  {
    id: 'chem11-ns-q046', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt18',
    content: 'Bảng nhu cầu gồm: (I) nguyên liệu sản xuất phân đạm; (II) môi chất trong hệ thống lạnh công nghiệp chuyên dụng; (III) khí trơ bảo quản thực phẩm. Ghép đúng với $NH_3$ là',
    responseType: 'single_choice',
    options: ['A. Chỉ III.', 'B. I và II; III phù hợp hơn với $N_2$.', 'C. II và III; I không dùng NH₃.', 'D. Cả I, II, III đều dựa trên cùng một tính chất.'],
    correctAnswer: 'B', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-nh3-applications', 'chem11-ns-n2-applications'], subTypeId: 'chem11-ns-st-nh3-applications', practiceRole: 'far_transfer', representationType: 'table', estimatedSeconds: 95
  },
  {
    id: 'chem11-ns-q047', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt18',
    content: 'Phát hiện mùi khai nghi rò rỉ ammonia trong khu vực kỹ thuật, hành động phù hợp nhất đối với học sinh là',
    responseType: 'single_choice',
    options: ['A. Tiến sát để xác định chính xác bằng cách ngửi.', 'B. Tự ý phun tia nước vào bình chứa.', 'C. Rời khỏi khu vực theo hướng dẫn, cảnh báo người phụ trách và không tự xử lí nguồn rò.', 'D. Bật lửa để kiểm tra khí.'],
    correctAnswer: 'C', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-nh3-applications'], subTypeId: 'chem11-ns-st-nh3-applications', practiceRole: 'far_transfer', representationType: 'text',
    misconceptionId: 'chem11-mis-nh3-leak-water-jet', estimatedSeconds: 80
  },
  {
    id: 'chem11-ns-q048', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt18',
    content: 'Nhận định tổng hợp đúng nhất về tối ưu hóa quy trình Haber là',
    responseType: 'single_choice',
    options: ['A. Chỉ cần áp suất cao, các yếu tố khác không quan trọng.', 'B. Chỉ cần nhiệt độ thấp nhất để hiệu suất luôn tối đa.', 'C. Xúc tác vừa tăng tốc độ vừa làm tăng hằng số cân bằng.', 'D. Cần phối hợp áp suất, nhiệt độ thỏa hiệp, xúc tác, tách NH₃ và tuần hoàn khí chưa phản ứng.'],
    correctAnswer: 'D', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-haber-equilibrium'], subTypeId: 'chem11-ns-st-nh3-applications', practiceRole: 'mastery_holdout', representationType: 'text',
    misconceptionId: 'chem11-mis-haber-catalyst-shift', isMasteryHoldout: true, estimatedSeconds: 105
  },
  {
    id: 'chem11-ns-q049', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt19',
    content: 'Chất nào là muối ammonium?',
    responseType: 'single_choice',
    options: ['A. $NH_4Cl$', 'B. $NH_3$', 'C. $NaNO_3$', 'D. $HNO_3$'],
    correctAnswer: 'A', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-ammonium-dissociation'], subTypeId: 'chem11-ns-st-ammonium-dissociation', practiceRole: 'guided', representationType: 'equation', estimatedSeconds: 40
  },
  {
    id: 'chem11-ns-q050', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt19',
    content: 'Phương trình phân li đúng của ammonium nitrate trong nước là',
    responseType: 'single_choice',
    options: ['A. $NH_4NO_3\\rightarrow NH_3+HNO_3$', 'B. $NH_4NO_3\\rightarrow NH_4^++NO_3^-$', 'C. $NH_4NO_3\\rightarrow N^{3-}+4H^++NO_3^-$', 'D. $NH_4NO_3\\rightarrow NH_4^-+NO_3^+$'],
    correctAnswer: 'B', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-ammonium-dissociation'], subTypeId: 'chem11-ns-st-ammonium-dissociation', practiceRole: 'near_transfer', representationType: 'equation', estimatedSeconds: 50
  },
  {
    id: 'chem11-ns-q051', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt19',
    content: 'Một công thức đơn vị $(NH_4)_2SO_4$ khi phân li hoàn toàn tạo',
    responseType: 'single_choice',
    options: ['A. Một $NH_4^+$ và một $SO_4^{2-}$.', 'B. Hai $NH_3$ và một $H_2SO_4$.', 'C. Hai $NH_4^+$ và một $SO_4^{2-}$.', 'D. Một $N_2$ và bốn $H_2$.'],
    correctAnswer: 'C', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-ammonium-dissociation'], subTypeId: 'chem11-ns-st-ammonium-dissociation', practiceRole: 'near_transfer', representationType: 'equation', estimatedSeconds: 55
  },
  {
    id: 'chem11-ns-q052', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt19',
    content: 'Phân biệt đúng $NH_4^+$ và $NH_3$ là',
    responseType: 'single_choice',
    options: ['A. Cả hai đều là ion âm.', 'B. Cả hai là cùng một tiểu phân viết khác nhau.', 'C. $NH_3$ mang điện dương còn $NH_4^+$ trung hòa.', 'D. $NH_4^+$ là ion dương, còn $NH_3$ là phân tử trung hòa.'],
    correctAnswer: 'D', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-ammonium-dissociation'], subTypeId: 'chem11-ns-st-ammonium-dissociation', practiceRole: 'mastery_holdout', representationType: 'text',
    misconceptionId: 'chem11-mis-ammonium-is-ammonia', isMasteryHoldout: true, estimatedSeconds: 60
  },
  {
    id: 'chem11-ns-q053', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt19',
    content: 'Phương trình ion rút gọn khi ion ammonium tác dụng với hydroxide là',
    responseType: 'single_choice',
    options: ['A. $NH_4^++OH^-\\rightarrow NH_3+H_2O$', 'B. $NH_4^++OH^-\\rightarrow H_2+NO$', 'C. $NH_4^++OH^-\\rightarrow NH_4OH\\downarrow$', 'D. $NH_4^++OH^-\\rightarrow N_2+3H_2O$'],
    correctAnswer: 'A', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-ammonium-alkali'], subTypeId: 'chem11-ns-st-ammonium-alkali', practiceRole: 'guided', representationType: 'equation', estimatedSeconds: 55
  },
  {
    id: 'chem11-ns-q054', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt19',
    content: 'Phương trình phân tử đúng là',
    responseType: 'single_choice',
    options: ['A. $NH_4Cl+NaOH\\rightarrow NaCl+H_2$', 'B. $NH_4Cl+NaOH\\rightarrow NH_3+NaCl+H_2O$', 'C. $NH_4Cl+NaOH\\rightarrow NH_4OH+NaCl$ là sản phẩm cuối duy nhất.', 'D. $NH_4Cl+NaOH\\rightarrow N_2+NaCl+2H_2O$'],
    correctAnswer: 'B', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-ammonium-alkali'], subTypeId: 'chem11-ns-st-ammonium-alkali', practiceRole: 'near_transfer', representationType: 'equation', estimatedSeconds: 60
  },
  {
    id: 'chem11-ns-q055', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt19',
    content: 'Khi làm ấm dung dịch muối ammonium với NaOH, hiện tượng đặc trưng là',
    responseType: 'single_choice',
    options: ['A. Có kết tủa xanh.', 'B. Có khí hydrogen cháy nổ.', 'C. Có khí NH₃ làm quỳ tím ẩm hóa xanh.', 'D. Có khí chlorine làm mất màu quỳ.'],
    correctAnswer: 'C', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-ammonium-alkali'], subTypeId: 'chem11-ns-st-ammonium-alkali', practiceRole: 'misconception_check', representationType: 'experiment',
    misconceptionId: 'chem11-mis-ammonium-alkali-hydrogen', estimatedSeconds: 60
  },
  {
    id: 'chem11-ns-q056', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt19',
    content: 'Phương trình phù hợp khi cho $(NH_4)_2SO_4$ tác dụng vừa đủ với $Ca(OH)_2$ là',
    responseType: 'single_choice',
    options: ['A. $(NH_4)_2SO_4+Ca(OH)_2\\rightarrow CaSO_4+N_2+3H_2$', 'B. $(NH_4)_2SO_4+Ca(OH)_2\\rightarrow2NH_4OH+CaSO_4$', 'C. $(NH_4)_2SO_4+Ca(OH)_2\\rightarrow NH_3+CaSO_4+H_2O$', 'D. $(NH_4)_2SO_4+Ca(OH)_2\\rightarrow2NH_3+CaSO_4+2H_2O$'],
    correctAnswer: 'D', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-ammonium-alkali'], subTypeId: 'chem11-ns-st-ammonium-alkali', practiceRole: 'mastery_holdout', representationType: 'equation',
    isMasteryHoldout: true, estimatedSeconds: 85
  },
  {
    id: 'chem11-ns-q057', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt19',
    content: 'Phương trình nhiệt phân ammonium hydrogencarbonate đúng là',
    responseType: 'single_choice',
    options: ['A. $NH_4HCO_3\\xrightarrow{t^\\circ}NH_3+CO_2+H_2O$', 'B. $NH_4HCO_3\\xrightarrow{t^\\circ}N_2+CH_4+2O_2$', 'C. $NH_4HCO_3\\xrightarrow{t^\\circ}NH_4^++HCO_3^-$', 'D. $NH_4HCO_3\\xrightarrow{t^\\circ}NH_3+CO$'],
    correctAnswer: 'A', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-ammonium-thermal'], subTypeId: 'chem11-ns-st-ammonium-thermal', practiceRole: 'guided', representationType: 'equation', estimatedSeconds: 65
  },
  {
    id: 'chem11-ns-q058', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt19',
    content: 'Khi đun nóng ammonium chloride trong điều kiện bài học, biểu diễn phù hợp là',
    responseType: 'single_choice',
    options: ['A. $NH_4Cl\\rightarrow N_2+HCl+H_2$', 'B. $NH_4Cl\\rightleftharpoons NH_3+HCl$', 'C. $NH_4Cl\\rightarrow NH_4^++Cl^-$ ở trạng thái khí.', 'D. $NH_4Cl\\rightarrow NH_3+Cl_2$'],
    correctAnswer: 'B', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-ammonium-thermal'], subTypeId: 'chem11-ns-st-ammonium-thermal', practiceRole: 'far_transfer', representationType: 'equation', estimatedSeconds: 80
  },
  {
    id: 'chem11-ns-q059', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt19',
    content: 'Nhận định nào đúng về nhiệt phân muối ammonium?',
    responseType: 'single_choice',
    options: ['A. Mọi muối đều chỉ tạo NH₃.', 'B. Mọi muối đều chỉ tạo N₂.', 'C. Sản phẩm phụ thuộc anion và điều kiện; cần xét từng muối.', 'D. Muối ammonium không bị nhiệt phân.'],
    correctAnswer: 'C', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-ammonium-thermal'], subTypeId: 'chem11-ns-st-ammonium-thermal', practiceRole: 'misconception_check', representationType: 'text',
    misconceptionId: 'chem11-mis-ammonium-same-thermal-products', estimatedSeconds: 70
  },
  {
    id: 'chem11-ns-q060', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt19',
    content: 'Nhiệt phân hoàn toàn 0,10 mol $NH_4HCO_3$ theo phương trình $NH_4HCO_3\\rightarrow NH_3+CO_2+H_2O(g)$. Tổng số mol khí tạo ra là',
    responseType: 'single_choice',
    options: ['A. 0,10 mol.', 'B. 0,20 mol.', 'C. 0,25 mol.', 'D. 0,30 mol.'],
    correctAnswer: 'D', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-ammonium-thermal'], subTypeId: 'chem11-ns-st-ammonium-thermal', practiceRole: 'mastery_holdout', representationType: 'equation',
    isMasteryHoldout: true, estimatedSeconds: 90
  },
  {
    id: 'chem11-ns-q061', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt20',
    content: 'Thuốc thử thích hợp để giải phóng $NH_3$ nhằm nhận biết ion $NH_4^+$ là',
    responseType: 'single_choice',
    options: ['A. Dung dịch NaOH.', 'B. Dung dịch HCl.', 'C. Nước cất.', 'D. Dung dịch NaCl.'],
    correctAnswer: 'A', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-ammonium-identification'], subTypeId: 'chem11-ns-st-ammonium-identification', practiceRole: 'guided', representationType: 'experiment', estimatedSeconds: 40
  },
  {
    id: 'chem11-ns-q062', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt20',
    content: 'Dấu hiệu phù hợp nhất để xác nhận khí tạo ra là $NH_3$ trong thí nghiệm nhận biết $NH_4^+$ là',
    responseType: 'single_choice',
    options: ['A. Làm quỳ tím ẩm hóa đỏ.', 'B. Làm quỳ tím ẩm hóa xanh.', 'C. Làm quỳ tím khô mất màu.', 'D. Tạo kết tủa đen với nước.'],
    correctAnswer: 'B', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-ammonium-identification'], subTypeId: 'chem11-ns-st-ammonium-identification', practiceRole: 'near_transfer', representationType: 'experiment', estimatedSeconds: 45
  },
  {
    id: 'chem11-ns-q063', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt20',
    content: 'Phương trình ion giải thích phép thử nhận biết $NH_4^+$ là',
    responseType: 'single_choice',
    options: ['A. $NH_4^++Cl^-\\rightarrow NH_4Cl$', 'B. $NH_4^++H^+\\rightarrow NH_3+H_2$', 'C. $NH_4^++OH^-\\rightarrow NH_3+H_2O$', 'D. $NH_4^++OH^-\\rightarrow N_2+H_2$'],
    correctAnswer: 'C', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-ammonium-identification', 'chem11-ns-ammonium-alkali'], subTypeId: 'chem11-ns-st-ammonium-identification', practiceRole: 'guided', representationType: 'equation', estimatedSeconds: 50
  },
  {
    id: 'chem11-ns-q064', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt20',
    content: 'Thao tác nào không an toàn và không nên dùng để nhận biết ion ammonium?',
    responseType: 'single_choice',
    options: ['A. Dùng lượng mẫu nhỏ.', 'B. Thêm kiềm theo hướng dẫn.', 'C. Dùng quỳ tím ẩm ở miệng ống nghiệm.', 'D. Đưa mũi sát miệng ống nghiệm để ngửi trực tiếp.'],
    correctAnswer: 'D', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-ammonium-identification'], subTypeId: 'chem11-ns-st-ammonium-identification', practiceRole: 'mastery_holdout', representationType: 'experiment',
    misconceptionId: 'chem11-mis-ammonium-smell-only', isMasteryHoldout: true, estimatedSeconds: 50
  },
  {
    id: 'chem11-ns-q065', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt20',
    content: 'Trình tự hợp lí để kiểm tra một mẫu phân đạm nghi chứa $NH_4^+$ là',
    responseType: 'single_choice',
    options: ['A. Hòa tan lượng nhỏ mẫu → thêm NaOH → làm ấm nhẹ → thử khí bằng quỳ tím ẩm.', 'B. Đun khô mạnh mẫu → ngửi trực tiếp.', 'C. Thêm HCl → thử bằng quỳ tím khô.', 'D. Trộn mẫu với mọi hóa chất có sẵn.'],
    correctAnswer: 'A', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-ammonium-identification'], subTypeId: 'chem11-ns-st-ammonium-experiment', practiceRole: 'near_transfer', representationType: 'experiment', estimatedSeconds: 65
  },
  {
    id: 'chem11-ns-q066', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt20',
    content: 'Làm ấm nhẹ hỗn hợp mẫu muối ammonium và kiềm chủ yếu nhằm',
    responseType: 'single_choice',
    options: ['A. Tạo ion $NH_4^+$ mới.', 'B. Giúp giải phóng $NH_3$ nhanh và dễ quan sát hơn.', 'C. Chuyển NH₃ thành N₂.', 'D. Làm quỳ tím khô đổi màu.'],
    correctAnswer: 'B', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-ammonium-identification'], subTypeId: 'chem11-ns-st-ammonium-experiment', practiceRole: 'near_transfer', representationType: 'experiment', estimatedSeconds: 55
  },
  {
    id: 'chem11-ns-q067', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt20',
    content: 'Ba mẫu X, Y, Z được thử cùng NaOH và làm ấm: X tạo khí làm quỳ tím ẩm hóa xanh; Y không có khí; Z tạo khí nhưng quỳ không hóa xanh. Kết luận chắc chắn nhất là',
    responseType: 'single_choice',
    options: ['A. Cả X, Y, Z đều chứa $NH_4^+$.', 'B. Chỉ Z chắc chắn chứa $NH_4^+$.', 'C. X có bằng chứng phù hợp với $NH_4^+$; dữ liệu chưa xác nhận Y và Z.', 'D. Y chắc chắn là ammonia tinh khiết.'],
    correctAnswer: 'C', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-ammonium-identification'], subTypeId: 'chem11-ns-st-ammonium-experiment', practiceRole: 'far_transfer', representationType: 'table', estimatedSeconds: 85
  },
  {
    id: 'chem11-ns-q068', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt20',
    content: 'Trong phép thử nhiều mẫu phân bón, làm thêm một ống nghiệm chỉ chứa nước và NaOH có ý nghĩa chính là',
    responseType: 'single_choice',
    options: ['A. Tạo thêm NH₄⁺ cho thí nghiệm.', 'B. Làm tăng nồng độ mọi mẫu.', 'C. Thay thế hoàn toàn việc thử mẫu.', 'D. Làm mẫu trắng để kiểm tra thuốc thử và dụng cụ không tự gây tín hiệu dương.'],
    correctAnswer: 'D', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-ammonium-identification'], subTypeId: 'chem11-ns-st-ammonium-experiment', practiceRole: 'mastery_holdout', representationType: 'experiment',
    isMasteryHoldout: true, estimatedSeconds: 90
  },
  {
    id: 'chem11-ns-q069', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt20',
    content: 'Một lí do một số muối ammonium được dùng làm phân bón là',
    responseType: 'single_choice',
    options: ['A. Cung cấp nitrogen ở dạng cây có thể chuyển hóa, sử dụng.', 'B. Luôn làm đất có pH bằng 7.', 'C. Không tan trong nước nên không bao giờ thất thoát.', 'D. Không cần tuân thủ liều lượng.'],
    correctAnswer: 'A', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-ammonium-applications-safety'], subTypeId: 'chem11-ns-st-ammonium-use-safety', practiceRole: 'near_transfer', representationType: 'text', estimatedSeconds: 55
  },
  {
    id: 'chem11-ns-q070', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt20',
    content: 'Không nên trộn phân ammonium với chất có tính kiềm mạnh ngay trước khi bón vì',
    responseType: 'single_choice',
    options: ['A. Kiềm biến nitrogen thành kim loại.', 'B. $NH_4^+$ có thể chuyển thành $NH_3$ bay hơi, gây thất thoát nitrogen.', 'C. Kiềm luôn tạo nitrate.', 'D. Phản ứng chỉ tạo nước nên không ảnh hưởng.'],
    correctAnswer: 'B', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-ammonium-applications-safety', 'chem11-ns-ammonium-alkali'], subTypeId: 'chem11-ns-st-ammonium-use-safety', practiceRole: 'far_transfer', representationType: 'equation', estimatedSeconds: 80
  },
  {
    id: 'chem11-ns-q071', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt20',
    content: 'Nguyên tắc phù hợp nhất khi bảo quản phân ammonium nitrate là',
    responseType: 'single_choice',
    options: ['A. Để gần nguồn nhiệt để chống ẩm.', 'B. Trộn với mọi chất hữu cơ để dễ sử dụng.', 'C. Giữ theo đúng nhãn và quy định, tránh nhiệt, nhiễm bẩn và chất không tương thích.', 'D. Đập nhỏ bằng dụng cụ phát tia lửa.'],
    correctAnswer: 'C', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-ammonium-applications-safety'], subTypeId: 'chem11-ns-st-ammonium-use-safety', practiceRole: 'misconception_check', representationType: 'text',
    misconceptionId: 'chem11-mis-ammonium-fertilizer-always-safe', estimatedSeconds: 70
  },
  {
    id: 'chem11-ns-q072', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt20',
    content: 'Đánh giá nào đầy đủ nhất về muối ammonium dùng trong nông nghiệp?',
    responseType: 'single_choice',
    options: ['A. Có ích nên dùng càng nhiều càng tốt.', 'B. Mọi muối ammonium có tính chất và rủi ro giống hệt nhau.', 'C. Chỉ cần quan tâm hàm lượng nitrogen, không cần bảo quản.', 'D. Có giá trị cung cấp nitrogen nhưng phải dùng đúng liều, đúng cách và tuân thủ yêu cầu riêng về bảo quản–phối trộn.'],
    correctAnswer: 'D', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-ammonium-applications-safety'], subTypeId: 'chem11-ns-st-ammonium-use-safety', practiceRole: 'mastery_holdout', representationType: 'text',
    misconceptionId: 'chem11-mis-ammonium-fertilizer-always-safe', isMasteryHoldout: true, estimatedSeconds: 90
  },
  {
    id: 'chem11-ns-q073', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt21',
    content: 'Nguồn nhân sinh phổ biến tạo nhiều $NO_x$ trong không khí là',
    responseType: 'single_choice',
    options: ['A. Động cơ và lò đốt hoạt động ở nhiệt độ cao.', 'B. Nước biển bay hơi.', 'C. Đá vôi bị phong hóa.', 'D. Cây hấp thụ ánh sáng.'],
    correctAnswer: 'A', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-nox-sources'], subTypeId: 'chem11-ns-st-nox-sources', practiceRole: 'guided', representationType: 'text', estimatedSeconds: 45
  },
  {
    id: 'chem11-ns-q074', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt21',
    content: 'Nguồn tự nhiên có thể tạo nitrogen monoxide trong khí quyển là',
    responseType: 'single_choice',
    options: ['A. Nước đóng băng.', 'B. Sấm sét cung cấp năng lượng cho $N_2$ và $O_2$ phản ứng.', 'C. Muối ăn hòa tan.', 'D. Quang hợp của cây xanh.'],
    correctAnswer: 'B', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-nox-sources'], subTypeId: 'chem11-ns-st-nox-sources', practiceRole: 'near_transfer', representationType: 'text', estimatedSeconds: 50
  },
  {
    id: 'chem11-ns-q075', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt21',
    content: 'Sau khi được tạo ra ở nhiệt độ cao, $NO$ trong không khí thường',
    responseType: 'single_choice',
    options: ['A. Chuyển trực tiếp thành $NH_3$.', 'B. Không thể phản ứng thêm.', 'C. Bị oxygen oxi hóa thành $NO_2$.', 'D. Phân hủy thành kim loại nitrogen.'],
    correctAnswer: 'C', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-nox-sources', 'chem11-ns-nox-acid-rain'], subTypeId: 'chem11-ns-st-nox-sources', practiceRole: 'near_transfer', representationType: 'text', estimatedSeconds: 50
  },
  {
    id: 'chem11-ns-q076', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt21',
    content: 'Nhận định đầy đủ nhất về nguồn $NO_x$ là',
    responseType: 'single_choice',
    options: ['A. Chỉ có nguồn giao thông.', 'B. Chỉ có nguồn tự nhiên.', 'C. Mọi nguồn đều xảy ra ở nhiệt độ thấp.', 'D. Có cả nguồn tự nhiên và nguồn do con người, nhiều quá trình liên quan nhiệt độ cao.'],
    correctAnswer: 'D', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-nox-sources'], subTypeId: 'chem11-ns-st-nox-sources', practiceRole: 'mastery_holdout', representationType: 'text',
    misconceptionId: 'chem11-mis-nox-human-only', isMasteryHoldout: true, estimatedSeconds: 60
  },
  {
    id: 'chem11-ns-q077', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt21',
    content: 'Phương trình oxi hóa $NO$ thành $NO_2$ đúng là',
    responseType: 'single_choice',
    options: ['A. $2NO+O_2\\rightarrow2NO_2$', 'B. $NO+O_2\\rightarrow NO_3$', 'C. $2NO\\rightarrow N_2+O_2$', 'D. $NO+H_2O\\rightarrow HNO_3$'],
    correctAnswer: 'A', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-nox-acid-rain'], subTypeId: 'chem11-ns-st-acid-rain-chain', practiceRole: 'guided', representationType: 'equation', estimatedSeconds: 55
  },
  {
    id: 'chem11-ns-q078', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt21',
    content: 'Phương trình tổng quát đơn giản hóa mô tả $NO_2$ tạo nitric acid trong không khí là',
    responseType: 'single_choice',
    options: ['A. $NO_2+H_2O\\rightarrow NH_3+O_2$', 'B. $4NO_2+O_2+2H_2O\\rightarrow4HNO_3$', 'C. $2NO_2\\rightarrow N_2+2O_2$', 'D. $NO_2+H_2\\rightarrow HNO_3$'],
    correctAnswer: 'B', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-nox-acid-rain'], subTypeId: 'chem11-ns-st-acid-rain-chain', practiceRole: 'near_transfer', representationType: 'equation', estimatedSeconds: 65
  },
  {
    id: 'chem11-ns-q079', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt21',
    content: 'Giải thích đúng về vai trò của $NO_x$ trong mưa acid là',
    responseType: 'single_choice',
    options: ['A. $NO_x$ chỉ làm nước mưa có màu.', 'B. $NO_x$ làm CO₂ biến thành base.', 'C. $NO$ bị oxi hóa qua $NO_2$, rồi hình thành nitric acid làm tăng độ acid của nước mưa.', 'D. $NO$ phản ứng trực tiếp một bước với nước tạo toàn bộ nitrate.'],
    correctAnswer: 'C', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-nox-acid-rain'], subTypeId: 'chem11-ns-st-acid-rain-chain', practiceRole: 'misconception_check', representationType: 'text',
    misconceptionId: 'chem11-mis-acid-rain-direct-no', estimatedSeconds: 75
  },
  {
    id: 'chem11-ns-q080', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt21',
    content: 'Chuỗi nào hợp lí nhất từ nitrogen trong không khí đến nitric acid góp phần gây mưa acid?',
    responseType: 'single_choice',
    options: ['A. $N_2\\rightarrow NH_3\\rightarrow HNO_3$ ở nhiệt độ thường.', 'B. $N_2\\rightarrow NO_3^-$ trực tiếp.', 'C. $N_2\\rightarrow H_2\\rightarrow HNO_3$.', 'D. $N_2\\xrightarrow{nhiệt\\ độ\\ cao}NO\\rightarrow NO_2\\rightarrow HNO_3$.'],
    correctAnswer: 'D', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-nox-acid-rain'], subTypeId: 'chem11-ns-st-acid-rain-chain', practiceRole: 'mastery_holdout', representationType: 'equation',
    isMasteryHoldout: true, estimatedSeconds: 85
  },
  {
    id: 'chem11-ns-q081', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt21',
    content: 'Một trạm ghi nhận: ngày I $NO_x=20$ µg/m³, pH mưa 5,7; ngày II $NO_x=70$ µg/m³, pH mưa 4,5. Nhận xét phù hợp nhất là',
    responseType: 'single_choice',
    options: ['A. Dữ liệu cho thấy ngày có NOₓ cao hơn đi kèm nước mưa acid hơn, nhưng chưa tự chứng minh NOₓ là nguyên nhân duy nhất.', 'B. pH tăng khi NOₓ tăng.', 'C. Hai ngày có độ acid như nhau.', 'D. Dữ liệu chứng minh mọi acid chỉ từ NOₓ.'],
    correctAnswer: 'A', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-nox-environment'], subTypeId: 'chem11-ns-st-nox-environment', practiceRole: 'near_transfer', representationType: 'table', estimatedSeconds: 85
  },
  {
    id: 'chem11-ns-q082', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt21',
    content: 'Mưa acid có thể làm công trình đá vôi xuống cấp vì ion $H^+$ phản ứng với carbonate. Nhận xét đúng là',
    responseType: 'single_choice',
    options: ['A. Đây chỉ là biến đổi vật lí do nước.', 'B. Acid làm carbonate bị hòa tan/chuyển hóa, góp phần ăn mòn vật liệu.', 'C. Acid biến đá vôi thành kim loại Ca.', 'D. Carbonate làm mưa acid mạnh hơn vô hạn.'],
    correctAnswer: 'B', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-nox-environment'], subTypeId: 'chem11-ns-st-nox-environment', practiceRole: 'far_transfer', representationType: 'text', estimatedSeconds: 80
  },
  {
    id: 'chem11-ns-q083', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt21',
    content: 'Biện pháp đi vào nguyên nhân gốc của mưa acid do $NO_x$ là',
    responseType: 'single_choice',
    options: ['A. Chỉ sơn lại công trình sau khi bị ăn mòn.', 'B. Chỉ trung hòa từng vũng nước mưa.', 'C. Giảm phát thải NOₓ từ động cơ và lò đốt bằng công nghệ, nhiên liệu và vận hành phù hợp.', 'D. Tăng đốt nhiên liệu ở mọi nơi.'],
    correctAnswer: 'C', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-nox-environment'], subTypeId: 'chem11-ns-st-nox-environment', practiceRole: 'far_transfer', representationType: 'text',
    misconceptionId: 'chem11-mis-acid-rain-neutralize-only', estimatedSeconds: 75
  },
  {
    id: 'chem11-ns-q084', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt21',
    content: 'Một thành phố vừa lắp hệ thống giảm NOₓ cho xe buýt, vừa bón vôi cho một hồ bị acid hóa. Đánh giá đúng nhất là',
    responseType: 'single_choice',
    options: ['A. Hai biện pháp đều chỉ xử lí nguồn phát thải.', 'B. Bón vôi triệt tiêu vĩnh viễn mọi NOₓ.', 'C. Giảm NOₓ chỉ xử lí hậu quả, bón vôi xử lí nguyên nhân.', 'D. Giảm NOₓ xử lí nguồn; bón vôi hỗ trợ hậu quả cục bộ nên cần phối hợp nhưng không được thay thế kiểm soát phát thải.'],
    correctAnswer: 'D', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-nox-environment'], subTypeId: 'chem11-ns-st-nox-environment', practiceRole: 'mastery_holdout', representationType: 'text',
    misconceptionId: 'chem11-mis-acid-rain-neutralize-only', isMasteryHoldout: true, estimatedSeconds: 100
  },
  {
    id: 'chem11-ns-q085', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt22',
    content: 'Số oxi hóa của nitrogen trong $HNO_3$ là',
    responseType: 'single_choice',
    options: ['A. +5', 'B. +3', 'C. 0', 'D. −3'],
    correctAnswer: 'A', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-hno3-structure'], subTypeId: 'chem11-ns-st-hno3-structure', practiceRole: 'guided', representationType: 'equation', estimatedSeconds: 45
  },
  {
    id: 'chem11-ns-q086', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt22',
    content: 'Trong cấu tạo nitric acid, nguyên tử H có tính acid gắn trực tiếp với',
    responseType: 'single_choice',
    options: ['A. Nguyên tử N.', 'B. Nguyên tử O trong nhóm O–H.', 'C. Một nguyên tử kim loại.', 'D. Ion nitrate tự do trong phân tử khí.'],
    correctAnswer: 'B', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-hno3-structure'], subTypeId: 'chem11-ns-st-hno3-structure', practiceRole: 'near_transfer', representationType: 'text', estimatedSeconds: 50
  },
  {
    id: 'chem11-ns-q087', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt22',
    content: 'Nhận xét đúng về $HNO_3$ trong nước là',
    responseType: 'single_choice',
    options: ['A. Là base yếu.', 'B. Không tạo ion.', 'C. Là acid mạnh, phân li gần như hoàn toàn.', 'D. Chỉ thể hiện tính oxi hóa, không có tính acid.'],
    correctAnswer: 'C', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-hno3-structure', 'chem11-ns-hno3-acid'], subTypeId: 'chem11-ns-st-hno3-structure', practiceRole: 'near_transfer', representationType: 'text', estimatedSeconds: 50
  },
  {
    id: 'chem11-ns-q088', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt22',
    content: 'Phân biệt đúng tính acid và tính oxi hóa của $HNO_3$ là',
    responseType: 'single_choice',
    options: ['A. Hai tính chất hoàn toàn đồng nhất.', 'B. Tính acid là nhận electron.', 'C. Tính oxi hóa là cho proton.', 'D. Tính acid liên quan cho H⁺, tính oxi hóa liên quan N(+5) nhận electron.'],
    correctAnswer: 'D', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-hno3-structure', 'chem11-ns-hno3-acid'], subTypeId: 'chem11-ns-st-hno3-structure', practiceRole: 'mastery_holdout', representationType: 'text',
    misconceptionId: 'chem11-mis-hno3-acid-equals-oxidizer', isMasteryHoldout: true, estimatedSeconds: 65
  },
  {
    id: 'chem11-ns-q089', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt22',
    content: 'Phương trình phân li đúng của nitric acid trong nước là',
    responseType: 'single_choice',
    options: ['A. $HNO_3\\rightarrow H^++NO_3^-$', 'B. $HNO_3\\rightarrow H^-+NO_3^+$', 'C. $HNO_3\\rightarrow H^++N^{5+}+3O^{2-}$', 'D. $HNO_3\\rightleftharpoons NH_3+O_2$'],
    correctAnswer: 'A', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-hno3-acid'], subTypeId: 'chem11-ns-st-hno3-dissociation', practiceRole: 'guided', representationType: 'equation', estimatedSeconds: 50
  },
  {
    id: 'chem11-ns-q090', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt22',
    content: 'Phương trình trung hòa đúng là',
    responseType: 'single_choice',
    options: ['A. $HNO_3+NaOH\\rightarrow NaNO_2+H_2O$', 'B. $HNO_3+NaOH\\rightarrow NaNO_3+H_2O$', 'C. $HNO_3+NaOH\\rightarrow NH_3+Na_2O$', 'D. $HNO_3+NaOH\\rightarrow Na+NO_2+H_2O$'],
    correctAnswer: 'B', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-hno3-acid'], subTypeId: 'chem11-ns-st-hno3-dissociation', practiceRole: 'near_transfer', representationType: 'equation', estimatedSeconds: 55
  },
  {
    id: 'chem11-ns-q091', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt22',
    content: 'Phương trình $2HNO_3+CuO\\rightarrow Cu(NO_3)_2+H_2O$ chủ yếu minh họa',
    responseType: 'single_choice',
    options: ['A. Tính khử của HNO₃.', 'B. Sự nhiệt phân nitrate.', 'C. Tính acid của HNO₃ phản ứng với oxide base.', 'D. Tính base của HNO₃.'],
    correctAnswer: 'C', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-hno3-acid'], subTypeId: 'chem11-ns-st-hno3-dissociation', practiceRole: 'misconception_check', representationType: 'equation',
    misconceptionId: 'chem11-mis-hno3-acid-equals-oxidizer', estimatedSeconds: 65
  },
  {
    id: 'chem11-ns-q092', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt22',
    content: 'Phương trình đúng khi nitric acid tác dụng với calcium carbonate là',
    responseType: 'single_choice',
    options: ['A. $HNO_3+CaCO_3\\rightarrow CaNO_3+H_2$', 'B. $HNO_3+CaCO_3\\rightarrow CaO+NO_2+H_2O$', 'C. $HNO_3+CaCO_3\\rightarrow Ca(NO_2)_2+O_2$', 'D. $2HNO_3+CaCO_3\\rightarrow Ca(NO_3)_2+CO_2+H_2O$'],
    correctAnswer: 'D', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-hno3-acid'], subTypeId: 'chem11-ns-st-hno3-dissociation', practiceRole: 'mastery_holdout', representationType: 'equation',
    isMasteryHoldout: true, estimatedSeconds: 75
  },
  {
    id: 'chem11-ns-q093', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt22',
    content: 'Phương trình ion rút gọn của phản ứng $HNO_3$ với NaOH là',
    responseType: 'single_choice',
    options: ['A. $H^++OH^-\\rightarrow H_2O$', 'B. $H^++NO_3^-\\rightarrow HNO_3$', 'C. $Na^++NO_3^-\\rightarrow NaNO_3\\downarrow$', 'D. $NO_3^-+OH^-\\rightarrow NO_2+O_2$'],
    correctAnswer: 'A', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-hno3-acid'], subTypeId: 'chem11-ns-st-hno3-acid-reactions', practiceRole: 'guided', representationType: 'equation', estimatedSeconds: 60
  },
  {
    id: 'chem11-ns-q094', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt22',
    content: 'Trong phản ứng $2HNO_3+CaCO_3\\rightarrow Ca(NO_3)_2+CO_2+H_2O$, số oxi hóa các nguyên tố không đổi. Kết luận đúng là',
    responseType: 'single_choice',
    options: ['A. Đây là phản ứng oxi hóa–khử vì có khí.', 'B. Đây là phản ứng acid–carbonate, không phải oxi hóa–khử.', 'C. HNO₃ đóng vai trò chất khử.', 'D. Carbon tăng số oxi hóa.'],
    correctAnswer: 'B', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-hno3-acid'], subTypeId: 'chem11-ns-st-hno3-acid-reactions', practiceRole: 'far_transfer', representationType: 'equation', estimatedSeconds: 80
  },
  {
    id: 'chem11-ns-q095', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt22',
    content: 'Để phản ứng vừa đủ với 0,10 mol $CaCO_3$ theo phương trình $2HNO_3+CaCO_3\\rightarrow Ca(NO_3)_2+CO_2+H_2O$, cần số mol $HNO_3$ là',
    responseType: 'single_choice',
    options: ['A. 0,05 mol.', 'B. 0,10 mol.', 'C. 0,20 mol.', 'D. 0,30 mol.'],
    correctAnswer: 'C', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-hno3-acid'], subTypeId: 'chem11-ns-st-hno3-acid-reactions', practiceRole: 'near_transfer', representationType: 'equation', estimatedSeconds: 80
  },
  {
    id: 'chem11-ns-q096', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt22',
    content: 'Một học sinh thấy $HNO_3$ phản ứng với NaOH, CuO và $CaCO_3$. Quy tắc chung dùng để dự đoán muối tạo thành là',
    responseType: 'single_choice',
    options: ['A. Luôn tạo muối nitrite.', 'B. Luôn tạo ammonia.', 'C. Anion phụ thuộc chất base còn cation luôn là H⁺.', 'D. Cation của base/oxide/carbonate ghép với $NO_3^-$ tạo muối nitrate, kèm sản phẩm đặc trưng.'],
    correctAnswer: 'D', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-hno3-acid'], subTypeId: 'chem11-ns-st-hno3-acid-reactions', practiceRole: 'mastery_holdout', representationType: 'text',
    isMasteryHoldout: true, estimatedSeconds: 90
  },
  {
    id: 'chem11-ns-q097', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt23',
    content: 'Cơ sở làm $HNO_3$ có tính oxi hóa mạnh là',
    responseType: 'single_choice',
    options: ['A. Nitrogen ở số oxi hóa +5 có thể nhận electron.', 'B. Hydrogen có số oxi hóa −1.', 'C. Oxygen có số oxi hóa +2.', 'D. Ion nitrate không chứa electron.'],
    correctAnswer: 'A', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-hno3-oxidizing'], subTypeId: 'chem11-ns-st-hno3-redox-role', practiceRole: 'guided', representationType: 'text', estimatedSeconds: 50
  },
  {
    id: 'chem11-ns-q098', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt23',
    content: 'Phương trình đúng của Cu với $HNO_3$ đặc là',
    responseType: 'single_choice',
    options: ['A. $Cu+2HNO_3\\rightarrow Cu(NO_3)_2+H_2$', 'B. $Cu+4HNO_3\\rightarrow Cu(NO_3)_2+2NO_2+2H_2O$', 'C. $Cu+HNO_3\\rightarrow CuNO_3+H$', 'D. $Cu+2HNO_3\\rightarrow CuO+2NO_2+H_2O$'],
    correctAnswer: 'B', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-hno3-oxidizing'], subTypeId: 'chem11-ns-st-hno3-redox-role', practiceRole: 'near_transfer', representationType: 'equation', estimatedSeconds: 60
  },
  {
    id: 'chem11-ns-q099', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt23',
    content: 'Trong phản ứng Cu với $HNO_3$ đặc tạo $NO_2$, $HNO_3$ đóng vai trò chất oxi hóa vì',
    responseType: 'single_choice',
    options: ['A. Cu nhận electron.', 'B. H tăng số oxi hóa.', 'C. N giảm từ +5 trong nitrate xuống +4 trong $NO_2$.', 'D. O giảm từ −2 xuống −3.'],
    correctAnswer: 'C', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-hno3-oxidizing'], subTypeId: 'chem11-ns-st-hno3-redox-role', practiceRole: 'near_transfer', representationType: 'equation', estimatedSeconds: 65
  },
  {
    id: 'chem11-ns-q100', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt23',
    content: 'Vì sao không áp dụng máy móc quy tắc “kim loại + acid → muối + $H_2$” cho $HNO_3$?',
    responseType: 'single_choice',
    options: ['A. HNO₃ không chứa H.', 'B. Kim loại không thể phản ứng với acid.', 'C. Nitrate luôn kết tủa.', 'D. HNO₃ oxi hóa mạnh, thường bị khử thành sản phẩm chứa N thay vì giải phóng H₂.'],
    correctAnswer: 'D', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-hno3-oxidizing'], subTypeId: 'chem11-ns-st-hno3-redox-role', practiceRole: 'mastery_holdout', representationType: 'text',
    misconceptionId: 'chem11-mis-hno3-metal-hydrogen', isMasteryHoldout: true, estimatedSeconds: 70
  },
  {
    id: 'chem11-ns-q101', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt23',
    content: 'Phương trình đúng của Cu với $HNO_3$ loãng tạo $NO$ là',
    responseType: 'single_choice',
    options: ['A. $3Cu+8HNO_3\\rightarrow3Cu(NO_3)_2+2NO+4H_2O$', 'B. $Cu+2HNO_3\\rightarrow Cu(NO_3)_2+H_2$', 'C. $Cu+4HNO_3\\rightarrow Cu(NO_3)_2+2NO+2H_2O$', 'D. $3Cu+2HNO_3\\rightarrow3CuO+2NO+H_2O$'],
    correctAnswer: 'A', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-hno3-oxidizing'], subTypeId: 'chem11-ns-st-hno3-metal', practiceRole: 'guided', representationType: 'equation', estimatedSeconds: 70
  },
  {
    id: 'chem11-ns-q102', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt23',
    content: 'Phân biệt đúng sản phẩm khí khi Cu phản ứng trong hai điều kiện thường gặp là',
    responseType: 'single_choice',
    options: ['A. Acid đặc và loãng đều chỉ tạo H₂.', 'B. Acid đặc thường tạo $NO_2$ nâu đỏ; acid loãng thường tạo $NO$ không màu, sau đó hóa nâu ngoài không khí.', 'C. Acid đặc tạo NH₃, acid loãng tạo N₂.', 'D. Cả hai đều không có khí.'],
    correctAnswer: 'B', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-hno3-oxidizing'], subTypeId: 'chem11-ns-st-hno3-metal', practiceRole: 'near_transfer', representationType: 'text', estimatedSeconds: 70
  },
  {
    id: 'chem11-ns-q103', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt23',
    content: 'Kết luận đúng về sản phẩm khử của nitric acid là',
    responseType: 'single_choice',
    options: ['A. Luôn là $NO_2$.', 'B. Luôn là $H_2$.', 'C. Phụ thuộc nồng độ acid, chất khử và điều kiện phản ứng.', 'D. Không bao giờ chứa nitrogen.'],
    correctAnswer: 'C', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-hno3-oxidizing'], subTypeId: 'chem11-ns-st-hno3-metal', practiceRole: 'misconception_check', representationType: 'text',
    misconceptionId: 'chem11-mis-hno3-always-no2', estimatedSeconds: 60
  },
  {
    id: 'chem11-ns-q104', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt23',
    content: 'Khi nitrate bị khử thành $NO$ trong phản ứng với Cu, số oxi hóa của N thay đổi từ +5 xuống +2. Mỗi nguyên tử N nhận',
    responseType: 'single_choice',
    options: ['A. 1 electron.', 'B. 2 electron.', 'C. 5 electron.', 'D. 3 electron.'],
    correctAnswer: 'D', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-hno3-oxidizing'], subTypeId: 'chem11-ns-st-hno3-metal', practiceRole: 'mastery_holdout', representationType: 'equation',
    isMasteryHoldout: true, estimatedSeconds: 75
  },
  {
    id: 'chem11-ns-q105', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt23',
    content: 'Ứng dụng quan trọng của nitric acid là',
    responseType: 'single_choice',
    options: ['A. Sản xuất phân bón nitrate và nhiều hóa chất công nghiệp.', 'B. Làm khí trơ bảo quản thực phẩm.', 'C. Thay nước uống.', 'D. Làm chất khử yếu cho mọi phản ứng.'],
    correctAnswer: 'A', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-hno3-applications-safety'], subTypeId: 'chem11-ns-st-hno3-use-safety', practiceRole: 'near_transfer', representationType: 'text', estimatedSeconds: 50
  },
  {
    id: 'chem11-ns-q106', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt23',
    content: 'Khi được giáo viên hướng dẫn pha loãng $HNO_3$ đậm đặc, nguyên tắc đúng là',
    responseType: 'single_choice',
    options: ['A. Rót nhanh nước vào acid.', 'B. Thêm acid từ từ vào nước, khuấy và làm mát theo quy trình.', 'C. Dùng tay trần giữ cốc.', 'D. Đậy kín ngay khi dung dịch đang nóng.'],
    correctAnswer: 'B', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-hno3-applications-safety'], subTypeId: 'chem11-ns-st-hno3-use-safety', practiceRole: 'far_transfer', representationType: 'experiment',
    misconceptionId: 'chem11-mis-hno3-dilution-water-into-acid', estimatedSeconds: 65
  },
  {
    id: 'chem11-ns-q107', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt23',
    content: 'Một chai $HNO_3$ bị đổ trong phòng thực hành. Hành động phù hợp nhất của học sinh là',
    responseType: 'single_choice',
    options: ['A. Dùng tay lau ngay.', 'B. Tự trộn với mọi chất bột gần đó.', 'C. Lùi khỏi khu vực, cảnh báo và báo giáo viên/người phụ trách để xử lí theo quy trình sự cố.', 'D. Đổ thêm dung môi hữu cơ.'],
    correctAnswer: 'C', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-hno3-applications-safety'], subTypeId: 'chem11-ns-st-hno3-use-safety', practiceRole: 'far_transfer', representationType: 'text', estimatedSeconds: 60
  },
  {
    id: 'chem11-ns-q108', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt23',
    content: 'Bảng mô tả: (I) HNO₃ + NaOH; (II) HNO₃ đặc + Cu; (III) pha loãng HNO₃. Ghép đúng bản chất là',
    responseType: 'single_choice',
    options: ['A. Cả ba chỉ là oxi hóa–khử.', 'B. I oxi hóa–khử; II trung hòa; III không cần an toàn.', 'C. I và II đều chỉ do H⁺.', 'D. I minh họa tính acid; II minh họa tính oxi hóa; III cần thêm acid vào nước theo quy trình an toàn.'],
    correctAnswer: 'D', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-hno3-acid', 'chem11-ns-hno3-oxidizing', 'chem11-ns-hno3-applications-safety'], subTypeId: 'chem11-ns-st-hno3-use-safety', practiceRole: 'mastery_holdout', representationType: 'table',
    misconceptionId: 'chem11-mis-hno3-acid-equals-oxidizer', isMasteryHoldout: true, estimatedSeconds: 105
  },
  {
    id: 'chem11-ns-q109', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt24',
    content: 'Phú dưỡng hóa thường bắt đầu khi thủy vực nhận quá nhiều',
    responseType: 'single_choice',
    options: ['A. Hợp chất chứa nitrogen và phosphorus.', 'B. Khí trơ.', 'C. Cát sạch.', 'D. Oxygen tinh khiết.'],
    correctAnswer: 'A', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-eutrophication-causes'], subTypeId: 'chem11-ns-st-eutrophication-causes', practiceRole: 'guided', representationType: 'text', estimatedSeconds: 45
  },
  {
    id: 'chem11-ns-q110', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt24',
    content: 'Nguồn có thể làm tăng nitrate và phosphate trong hồ là',
    responseType: 'single_choice',
    options: ['A. Ánh sáng Mặt Trời.', 'B. Nước thải chưa xử lí và dòng chảy mang phân bón.', 'C. Đá cuội sạch.', 'D. Khí nitrogen tinh khiết.'],
    correctAnswer: 'B', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-eutrophication-causes'], subTypeId: 'chem11-ns-st-eutrophication-causes', practiceRole: 'near_transfer', representationType: 'text', estimatedSeconds: 50
  },
  {
    id: 'chem11-ns-q111', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt24',
    content: 'Phân biệt đúng phú dưỡng hóa với mưa acid là',
    responseType: 'single_choice',
    options: ['A. Hai hiện tượng hoàn toàn giống nhau.', 'B. Phú dưỡng chỉ là pH giảm.', 'C. Phú dưỡng liên quan dư thừa dưỡng chất N, P; mưa acid liên quan acid hình thành trong khí quyển.', 'D. Mưa acid luôn làm tảo tăng do phosphorus.'],
    correctAnswer: 'C', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-eutrophication-causes'], subTypeId: 'chem11-ns-st-eutrophication-causes', practiceRole: 'misconception_check', representationType: 'text',
    misconceptionId: 'chem11-mis-eutrophication-acid-rain', estimatedSeconds: 60
  },
  {
    id: 'chem11-ns-q112', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt24',
    content: 'Hiện tượng nào phù hợp nhất với giai đoạn đầu của phú dưỡng hóa?',
    responseType: 'single_choice',
    options: ['A. Hồ mất toàn bộ nước ngay lập tức.', 'B. Nitrate và phosphate biến thành kim loại.', 'C. Mọi sinh vật chết trước khi tảo tăng.', 'D. Tảo và thực vật phù du phát triển mạnh do dư dưỡng chất.'],
    correctAnswer: 'D', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-eutrophication-causes'], subTypeId: 'chem11-ns-st-eutrophication-causes', practiceRole: 'mastery_holdout', representationType: 'text',
    isMasteryHoldout: true, estimatedSeconds: 55
  },
  {
    id: 'chem11-ns-q113', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt24',
    content: 'Chuỗi hệ quả hợp lí của phú dưỡng hóa là',
    responseType: 'single_choice',
    options: ['A. Dư dưỡng chất → tảo tăng → sinh khối chết/phân hủy → oxygen hòa tan giảm.', 'B. Dư dưỡng chất → oxygen tăng vĩnh viễn → mọi sinh vật phát triển.', 'C. Dư dưỡng chất → nước tinh khiết hơn ngay.', 'D. Dư dưỡng chất → nitrogen biến thành kim loại.'],
    correctAnswer: 'A', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-eutrophication-effects'], subTypeId: 'chem11-ns-st-eutrophication-effects', practiceRole: 'guided', representationType: 'equation', estimatedSeconds: 65
  },
  {
    id: 'chem11-ns-q114', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt24',
    content: 'Oxygen hòa tan thường giảm mạnh sau đợt tảo nở hoa vì',
    responseType: 'single_choice',
    options: ['A. Tảo biến oxygen thành kim loại.', 'B. Vi sinh vật phân hủy sinh khối tiêu thụ nhiều oxygen.', 'C. Nước ngừng chứa phân tử H₂O.', 'D. Nitrate hấp thụ hết ánh sáng mà không có quá trình sinh học.'],
    correctAnswer: 'B', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-eutrophication-effects'], subTypeId: 'chem11-ns-st-eutrophication-effects', practiceRole: 'near_transfer', representationType: 'text', estimatedSeconds: 60
  },
  {
    id: 'chem11-ns-q115', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt24',
    content: 'Cá chết hàng loạt sau khi tảo suy tàn trong hồ phú dưỡng thường liên quan trực tiếp nhất đến',
    responseType: 'single_choice',
    options: ['A. Nồng độ khí trơ quá thấp.', 'B. Nước trở thành acid nitric đậm đặc.', 'C. Thiếu oxygen hòa tan do phân hủy sinh khối.', 'D. Carbonate kết tủa hoàn toàn.'],
    correctAnswer: 'C', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-eutrophication-effects'], subTypeId: 'chem11-ns-st-eutrophication-effects', practiceRole: 'near_transfer', representationType: 'text', estimatedSeconds: 60
  },
  {
    id: 'chem11-ns-q116', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt24',
    content: 'Một hồ tảo dày có oxygen ban ngày khá cao nhưng giảm rất thấp gần sáng. Giải thích phù hợp nhất là',
    responseType: 'single_choice',
    options: ['A. Ban đêm tảo tạo thêm oxygen mà không hô hấp.', 'B. Oxygen tự biến thành nitrogen.', 'C. Ánh sáng ban đêm mạnh hơn ban ngày.', 'D. Ban đêm quang hợp dừng nhưng hô hấp và phân hủy vẫn tiêu thụ oxygen.'],
    correctAnswer: 'D', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-eutrophication-effects'], subTypeId: 'chem11-ns-st-eutrophication-effects', practiceRole: 'mastery_holdout', representationType: 'graph',
    misconceptionId: 'chem11-mis-eutrophication-oxygen-high', isMasteryHoldout: true, estimatedSeconds: 90
  },
  {
    id: 'chem11-ns-q117', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt24',
    content: 'Bảng số liệu: hồ X có nitrate/phosphate cao, chlorophyll cao, oxygen hòa tan đáy thấp; hồ Y có các dưỡng chất và chlorophyll thấp, oxygen ổn định. Hồ có nguy cơ phú dưỡng cao hơn là',
    responseType: 'single_choice',
    options: ['A. Hồ X.', 'B. Hồ Y.', 'C. Hai hồ chắc chắn như nhau.', 'D. Không thể dùng bất kì dữ liệu nào để nhận xét.'],
    correctAnswer: 'A', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-eutrophication-data-mitigation'], subTypeId: 'chem11-ns-st-eutrophication-data', practiceRole: 'near_transfer', representationType: 'table', estimatedSeconds: 75
  },
  {
    id: 'chem11-ns-q118', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt24',
    content: 'Gói biện pháp nào xử lí nguyên nhân gốc của phú dưỡng hóa tốt nhất?',
    responseType: 'single_choice',
    options: ['A. Chỉ vớt cá chết.', 'B. Xử lí nước thải, tối ưu bón phân và tạo vùng đệm giảm dòng chảy dưỡng chất vào hồ.', 'C. Đổ thêm phân để tảo cạnh tranh.', 'D. Chỉ đổi tên hồ.'],
    correctAnswer: 'B', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-eutrophication-data-mitigation'], subTypeId: 'chem11-ns-st-eutrophication-data', practiceRole: 'far_transfer', representationType: 'text', estimatedSeconds: 75
  },
  {
    id: 'chem11-ns-q119', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt24',
    content: 'Sục khí cho hồ phú dưỡng có giới hạn nào?',
    responseType: 'single_choice',
    options: ['A. Luôn loại bỏ hoàn toàn nitrate và phosphate.', 'B. Làm chấm dứt mọi nguồn nước thải.', 'C. Có thể hỗ trợ oxygen tạm thời nhưng không thay thế việc giảm dưỡng chất đi vào hồ.', 'D. Làm tảo không bao giờ trở lại.'],
    correctAnswer: 'C', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-eutrophication-data-mitigation'], subTypeId: 'chem11-ns-st-eutrophication-data', practiceRole: 'misconception_check', representationType: 'text',
    misconceptionId: 'chem11-mis-eutrophication-aeration-only', estimatedSeconds: 70
  },
  {
    id: 'chem11-ns-q120', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt24',
    content: 'Sau mưa lớn, nitrate trong hồ tăng, tảo tăng sau vài ngày và oxygen đáy giảm sau đó. Kết luận tốt nhất là',
    responseType: 'single_choice',
    options: ['A. Mưa chắc chắn tạo trực tiếp mọi tế bào tảo.', 'B. Oxygen giảm chứng minh hồ không có sinh vật phân hủy.', 'C. Chỉ cần sục khí, không cần tìm nguồn nitrate.', 'D. Dữ liệu phù hợp chuỗi dưỡng chất theo dòng chảy → tảo phát triển → phân hủy/hô hấp làm giảm oxygen; cần kiểm soát nguồn dưỡng chất.'],
    correctAnswer: 'D', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-eutrophication-causes', 'chem11-ns-eutrophication-effects', 'chem11-ns-eutrophication-data-mitigation'], subTypeId: 'chem11-ns-st-eutrophication-data', practiceRole: 'mastery_holdout', representationType: 'table',
    isMasteryHoldout: true, estimatedSeconds: 105
  },
  {
    id: 'chem11-ns-q121', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt25',
    content: 'Trong tự nhiên, sulfur tồn tại',
    responseType: 'single_choice',
    options: ['A. cả dạng đơn chất và dạng hợp chất.', 'B. chỉ ở dạng đơn chất.', 'C. chỉ trong khí quyển.', 'D. chỉ trong hợp chất tan tốt trong nước.'],
    correctAnswer: 'A', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-sulfur-natural-allotropes'], subTypeId: 'chem11-ns-st-sulfur-natural', practiceRole: 'guided', representationType: 'text', estimatedSeconds: 40
  },
  {
    id: 'chem11-ns-q122', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt25',
    content: 'Nhóm khoáng vật nào đều chứa sulfur ở dạng hợp chất?',
    responseType: 'single_choice',
    options: ['A. NaCl và CaCO₃.', 'B. FeS₂ và CaSO₄·2H₂O.', 'C. SiO₂ và Al₂O₃.', 'D. Cu và Ag.'],
    correctAnswer: 'B', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-sulfur-natural-allotropes'], subTypeId: 'chem11-ns-st-sulfur-natural', practiceRole: 'near_transfer', representationType: 'table', estimatedSeconds: 45
  },
  {
    id: 'chem11-ns-q123', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt25',
    content: 'Phát biểu nào sai về trạng thái tự nhiên của sulfur?',
    responseType: 'single_choice',
    options: ['A. Có thể gặp sulfur tự do gần vùng núi lửa.', 'B. Sulfur có trong một số khoáng sulfide.', 'C. Sulfur tự nhiên chỉ tồn tại dưới dạng đơn chất màu vàng.', 'D. Sulfur có trong một số khoáng sulfate.'],
    correctAnswer: 'C', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-sulfur-natural-allotropes'], subTypeId: 'chem11-ns-st-sulfur-natural', practiceRole: 'misconception_check', representationType: 'text',
    misconceptionId: 'chem11-mis-sulfur-natural-only-free', estimatedSeconds: 50
  },
  {
    id: 'chem11-ns-q124', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt25',
    content: 'Sơ đồ phân loại nào đúng?',
    responseType: 'single_choice',
    options: ['A. Sulfur tự do: FeS₂; sulfur liên kết: S₈.', 'B. Sulfur tự do: CaSO₄; sulfur liên kết: tinh thể sulfur.', 'C. Sulfur tự do và liên kết đều bắt buộc tan trong nước.', 'D. Sulfur tự do: S₈; sulfur liên kết: FeS₂, CaSO₄·2H₂O.'],
    correctAnswer: 'D', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-sulfur-natural-allotropes'], subTypeId: 'chem11-ns-st-sulfur-natural', practiceRole: 'mastery_holdout', representationType: 'diagram',
    isMasteryHoldout: true, estimatedSeconds: 55
  },
  {
    id: 'chem11-ns-q125', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt25',
    content: 'Điểm giống nhau cơ bản giữa sulfur tà phương và sulfur đơn tà là',
    responseType: 'single_choice',
    options: ['A. đều là dạng thù hình của sulfur và thường gồm phân tử S₈.', 'B. có thành phần nguyên tố khác nhau.', 'C. đều bền nhất ở mọi nhiệt độ.', 'D. đều tan tốt trong nước.'],
    correctAnswer: 'A', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-sulfur-natural-allotropes'], subTypeId: 'chem11-ns-st-sulfur-allotropes', practiceRole: 'guided', representationType: 'diagram', estimatedSeconds: 55
  },
  {
    id: 'chem11-ns-q126', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt25',
    content: 'Sulfur tà phương và sulfur đơn tà khác nhau chủ yếu về',
    responseType: 'single_choice',
    options: ['A. số proton của nguyên tử sulfur.', 'B. cấu trúc tinh thể và miền nhiệt độ bền.', 'C. loại nguyên tố cấu tạo.', 'D. số oxi hóa bắt buộc của sulfur.'],
    correctAnswer: 'B', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-sulfur-natural-allotropes'], subTypeId: 'chem11-ns-st-sulfur-allotropes', practiceRole: 'near_transfer', representationType: 'text', estimatedSeconds: 50
  },
  {
    id: 'chem11-ns-q127', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt25',
    content: 'Mô tả phù hợp với sulfur ở điều kiện thường là',
    responseType: 'single_choice',
    options: ['A. khí không màu, tan vô hạn trong nước.', 'B. chất lỏng màu đỏ.', 'C. chất rắn màu vàng, hầu như không tan trong nước.', 'D. kim loại dẫn điện tốt.'],
    correctAnswer: 'C', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-sulfur-physical-applications'], subTypeId: 'chem11-ns-st-sulfur-allotropes', practiceRole: 'misconception_check', representationType: 'text',
    misconceptionId: 'chem11-mis-sulfur-water-soluble', estimatedSeconds: 45
  },
  {
    id: 'chem11-ns-q128', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt25',
    content: 'Bảng cho biết sulfur tà phương bền dưới khoảng 95,5 °C, sulfur đơn tà bền từ khoảng 95,5 °C đến 119 °C. Ở 25 °C, dạng bền hơn là',
    responseType: 'single_choice',
    options: ['A. sulfur đơn tà.', 'B. hai dạng chắc chắn bền như nhau.', 'C. sulfur lỏng.', 'D. sulfur tà phương.'],
    correctAnswer: 'D', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-sulfur-natural-allotropes'], subTypeId: 'chem11-ns-st-sulfur-allotropes', practiceRole: 'mastery_holdout', representationType: 'table',
    isMasteryHoldout: true, estimatedSeconds: 70
  },
  {
    id: 'chem11-ns-q129', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt25',
    content: 'Ứng dụng tiêu thụ lượng sulfur lớn trong công nghiệp là',
    responseType: 'single_choice',
    options: ['A. sản xuất sulfuric acid.', 'B. sản xuất khí oxygen từ nước.', 'C. chế tạo lõi dây điện bằng sulfur nguyên chất.', 'D. làm dung môi nước.'],
    correctAnswer: 'A', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-sulfur-physical-applications'], subTypeId: 'chem11-ns-st-sulfur-applications', practiceRole: 'near_transfer', representationType: 'text', estimatedSeconds: 50
  },
  {
    id: 'chem11-ns-q130', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt25',
    content: 'Trong lưu hóa cao su, sulfur được dùng chủ yếu để',
    responseType: 'single_choice',
    options: ['A. hòa tan hoàn toàn cao su trong nước.', 'B. tạo liên kết ngang, cải thiện độ bền và tính đàn hồi.', 'C. biến cao su thành kim loại.', 'D. loại toàn bộ carbon khỏi cao su.'],
    correctAnswer: 'B', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-sulfur-physical-applications'], subTypeId: 'chem11-ns-st-sulfur-applications', practiceRole: 'far_transfer', representationType: 'diagram', estimatedSeconds: 75
  },
  {
    id: 'chem11-ns-q131', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt25',
    content: 'Đánh giá đúng nhất về việc đốt sulfur tùy ý để xông, sấy thực phẩm là',
    responseType: 'single_choice',
    options: ['A. luôn an toàn vì sulfur là chất tự nhiên.', 'B. chỉ làm thực phẩm có màu đẹp hơn, không tạo khí.', 'C. không an toàn vì có thể tạo SO₂ độc; mọi sử dụng phải đúng quy định và giới hạn.', 'D. an toàn nếu người dùng không nhìn thấy khói.'],
    correctAnswer: 'C', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-sulfur-physical-applications', 'chem11-ns-so2-applications'], subTypeId: 'chem11-ns-st-sulfur-applications', practiceRole: 'misconception_check', representationType: 'text',
    misconceptionId: 'chem11-mis-sulfur-burning-food-safe', estimatedSeconds: 70
  },
  {
    id: 'chem11-ns-q132', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt25',
    content: 'Một kho chứa bột sulfur cần ưu tiên biện pháp nào?',
    responseType: 'single_choice',
    options: ['A. Đặt sát nguồn nhiệt để sulfur khô.', 'B. Phát tán bụi sulfur trong không khí.', 'C. Đổ nước rồi xả trực tiếp ra cống.', 'D. Tránh nguồn lửa, hạn chế bụi, thông gió và tuân thủ hướng dẫn an toàn hóa chất.'],
    correctAnswer: 'D', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-sulfur-physical-applications'], subTypeId: 'chem11-ns-st-sulfur-applications', practiceRole: 'mastery_holdout', representationType: 'table',
    isMasteryHoldout: true, estimatedSeconds: 80
  },
  {
    id: 'chem11-ns-q133', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt26',
    content: 'Trong phản ứng $Fe+S\\rightarrow FeS$, sulfur',
    responseType: 'single_choice',
    options: ['A. giảm số oxi hóa từ 0 xuống −2 và là chất oxi hóa.', 'B. tăng số oxi hóa và là chất khử.', 'C. không đổi số oxi hóa.', 'D. vừa là acid vừa là base.'],
    correctAnswer: 'A', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-sulfur-oxidizing'], subTypeId: 'chem11-ns-st-sulfur-oxidizing', practiceRole: 'guided', representationType: 'equation', estimatedSeconds: 50
  },
  {
    id: 'chem11-ns-q134', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt26',
    content: 'Trong phản ứng $H_2+S\\rightarrow H_2S$, vai trò của sulfur là',
    responseType: 'single_choice',
    options: ['A. chất khử vì nhường electron.', 'B. chất oxi hóa vì nhận electron.', 'C. chất xúc tác.', 'D. chất không tham gia oxi hóa–khử.'],
    correctAnswer: 'B', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-sulfur-oxidizing'], subTypeId: 'chem11-ns-st-sulfur-oxidizing', practiceRole: 'near_transfer', representationType: 'equation', estimatedSeconds: 50
  },
  {
    id: 'chem11-ns-q135', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt26',
    content: 'Trong $2Al+3S\\rightarrow Al_2S_3$, ba nguyên tử sulfur nhận tổng cộng',
    responseType: 'single_choice',
    options: ['A. 2 electron.', 'B. 3 electron.', 'C. 6 electron.', 'D. 8 electron.'],
    correctAnswer: 'C', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-sulfur-oxidizing'], subTypeId: 'chem11-ns-st-sulfur-oxidizing', practiceRole: 'guided', representationType: 'table', estimatedSeconds: 60
  },
  {
    id: 'chem11-ns-q136', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt26',
    content: 'Nung hỗn hợp iron và sulfur tạo chất rắn FeS. Kết luận đúng là',
    responseType: 'single_choice',
    options: ['A. sulfur bị oxi hóa lên +2.', 'B. đây không phải phản ứng oxi hóa–khử.', 'C. iron nhận electron từ sulfur.', 'D. sulfur nhận electron từ iron nên sulfur là chất oxi hóa.'],
    correctAnswer: 'D', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-sulfur-oxidizing'], subTypeId: 'chem11-ns-st-sulfur-oxidizing', practiceRole: 'mastery_holdout', representationType: 'experiment',
    isMasteryHoldout: true, estimatedSeconds: 65
  },
  {
    id: 'chem11-ns-q137', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt26',
    content: 'Trong phản ứng $S+O_2\\rightarrow SO_2$, sulfur',
    responseType: 'single_choice',
    options: ['A. tăng số oxi hóa từ 0 lên +4 và là chất khử.', 'B. giảm số oxi hóa và là chất oxi hóa.', 'C. có số oxi hóa không đổi.', 'D. nhận bốn electron.'],
    correctAnswer: 'A', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-sulfur-reducing'], subTypeId: 'chem11-ns-st-sulfur-reducing', practiceRole: 'guided', representationType: 'equation', estimatedSeconds: 50
  },
  {
    id: 'chem11-ns-q138', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt26',
    content: 'Quá trình electron của sulfur khi cháy tạo SO₂ là',
    responseType: 'single_choice',
    options: ['A. $S^{0}+4e\\rightarrow S^{-4}$.', 'B. $S^{0}\\rightarrow S^{+4}+4e$.', 'C. $S^{+4}+4e\\rightarrow S^0$.', 'D. $S^0+2e\\rightarrow S^{-2}$.'],
    correctAnswer: 'B', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-sulfur-reducing'], subTypeId: 'chem11-ns-st-sulfur-reducing', practiceRole: 'near_transfer', representationType: 'equation', estimatedSeconds: 60
  },
  {
    id: 'chem11-ns-q139', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt26',
    content: 'Đốt sulfur trong oxygen quan sát ngọn lửa xanh và sinh khí mùi hắc. Vai trò oxi hóa–khử của sulfur là',
    responseType: 'single_choice',
    options: ['A. chất oxi hóa.', 'B. chất xúc tác.', 'C. chất khử.', 'D. không xác định được dù biết sản phẩm SO₂.'],
    correctAnswer: 'C', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-sulfur-reducing'], subTypeId: 'chem11-ns-st-sulfur-reducing', practiceRole: 'representation_switch', representationType: 'experiment', estimatedSeconds: 65
  },
  {
    id: 'chem11-ns-q140', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt26',
    content: 'Dấu hiệu quyết định sulfur là chất khử trong phản ứng với oxygen là',
    responseType: 'single_choice',
    options: ['A. sulfur có màu vàng.', 'B. phản ứng phát sáng.', 'C. oxygen là chất khí.', 'D. số oxi hóa của sulfur tăng từ 0 lên +4.'],
    correctAnswer: 'D', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-sulfur-reducing'], subTypeId: 'chem11-ns-st-sulfur-reducing', practiceRole: 'mastery_holdout', representationType: 'table',
    isMasteryHoldout: true, estimatedSeconds: 65
  },
  {
    id: 'chem11-ns-q141', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt26',
    content: 'Cặp phản ứng nào chứng minh sulfur vừa có tính oxi hóa vừa có tính khử?',
    responseType: 'single_choice',
    options: ['A. $Fe+S\\rightarrow FeS$ và $S+O_2\\rightarrow SO_2$.', 'B. Chỉ hai phản ứng sulfur với kim loại.', 'C. Chỉ hai phản ứng sulfur với hydrogen.', 'D. Hai quá trình nóng chảy sulfur.'],
    correctAnswer: 'A', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-sulfur-redox-integration'], subTypeId: 'chem11-ns-st-sulfur-redox-compare', practiceRole: 'near_transfer', representationType: 'equation', estimatedSeconds: 70
  },
  {
    id: 'chem11-ns-q142', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt26',
    content: 'Vì sao không thể kết luận sulfur luôn là chất khử?',
    responseType: 'single_choice',
    options: ['A. Vì sulfur không có electron.', 'B. Vì sulfur số oxi hóa 0 có thể giảm xuống −2 hoặc tăng lên số oxi hóa dương tùy chất phản ứng.', 'C. Vì mọi phản ứng của sulfur đều không phải redox.', 'D. Vì màu sulfur thay đổi theo nhiệt độ.'],
    correctAnswer: 'B', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-sulfur-redox-integration'], subTypeId: 'chem11-ns-st-sulfur-redox-compare', practiceRole: 'misconception_check', representationType: 'text',
    misconceptionId: 'chem11-mis-sulfur-always-reducing', estimatedSeconds: 75
  },
  {
    id: 'chem11-ns-q143', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt26',
    content: 'Bảng cho hai biến đổi: (I) $S^0\\rightarrow S^{-2}$; (II) $S^0\\rightarrow S^{+4}$. Nhận xét đúng là',
    responseType: 'single_choice',
    options: ['A. Cả I và II sulfur đều là chất oxi hóa.', 'B. Cả I và II sulfur đều là chất khử.', 'C. I: sulfur là chất oxi hóa; II: sulfur là chất khử.', 'D. I không phải nhận electron.'],
    correctAnswer: 'C', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-sulfur-redox-integration'], subTypeId: 'chem11-ns-st-sulfur-redox-compare', practiceRole: 'far_transfer', representationType: 'table', estimatedSeconds: 80
  },
  {
    id: 'chem11-ns-q144', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt26',
    content: 'Một học sinh nói: “Trong $Fe+S\\rightarrow FeS$ sulfur là chất khử vì sulfur tham gia phản ứng.” Cách sửa đúng nhất là',
    responseType: 'single_choice',
    options: ['A. Giữ kết luận vì mọi đơn chất đều là chất khử.', 'B. Chỉ dựa vào hiện tượng phát sáng.', 'C. Gọi sulfur là chất xúc tác.', 'D. Theo dõi $S^0\\rightarrow S^{-2}$: sulfur nhận electron nên là chất oxi hóa.'],
    correctAnswer: 'D', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-sulfur-redox-integration'], subTypeId: 'chem11-ns-st-sulfur-redox-compare', practiceRole: 'mastery_holdout', representationType: 'experiment',
    misconceptionId: 'chem11-mis-sulfur-role-by-reactant-name', isMasteryHoldout: true, estimatedSeconds: 90
  },
  {
    id: 'chem11-ns-q145', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt27',
    content: 'Số oxi hóa của sulfur trong SO₂ là',
    responseType: 'single_choice',
    options: ['A. +4.', 'B. +2.', 'C. −2.', 'D. +6.'],
    correctAnswer: 'A', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-so2-structure-physical'], subTypeId: 'chem11-ns-st-so2-structure-physical', practiceRole: 'guided', representationType: 'equation', estimatedSeconds: 40
  },
  {
    id: 'chem11-ns-q146', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt27',
    content: 'Mô tả phù hợp nhất về SO₂ là',
    responseType: 'single_choice',
    options: ['A. khí màu xanh, không tan.', 'B. khí không màu, mùi hắc, độc và tan trong nước.', 'C. chất rắn màu vàng.', 'D. khí không độc dùng để hít trực tiếp.'],
    correctAnswer: 'B', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-so2-structure-physical'], subTypeId: 'chem11-ns-st-so2-structure-physical', practiceRole: 'near_transfer', representationType: 'text', estimatedSeconds: 45
  },
  {
    id: 'chem11-ns-q147', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt27',
    content: 'Khi nghi có rò rỉ SO₂ trong phòng, thao tác nào không được thực hiện?',
    responseType: 'single_choice',
    options: ['A. Báo người phụ trách và rời vùng nguy hiểm.', 'B. Tăng thông gió theo quy trình an toàn.', 'C. Ghé sát mũi ngửi trực tiếp để xác nhận.', 'D. Dùng bảo hộ phù hợp khi xử lí.'],
    correctAnswer: 'C', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-so2-structure-physical'], subTypeId: 'chem11-ns-st-so2-structure-physical', practiceRole: 'misconception_check', representationType: 'text',
    misconceptionId: 'chem11-mis-so2-harmless-smell', estimatedSeconds: 45
  },
  {
    id: 'chem11-ns-q148', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt27',
    content: 'Bảng ghi: khí X không màu, mùi hắc, làm kích ứng hô hấp và sulfur trong phân tử có số oxi hóa +4. Khí X là',
    responseType: 'single_choice',
    options: ['A. H₂.', 'B. N₂.', 'C. O₂.', 'D. SO₂.'],
    correctAnswer: 'D', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-so2-structure-physical'], subTypeId: 'chem11-ns-st-so2-structure-physical', practiceRole: 'mastery_holdout', representationType: 'table',
    isMasteryHoldout: true, estimatedSeconds: 55
  },
  {
    id: 'chem11-ns-q149', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt27',
    content: 'Phương trình biểu diễn SO₂ tác dụng thuận nghịch với nước là',
    responseType: 'single_choice',
    options: ['A. $SO_2+H_2O\\rightleftharpoons H_2SO_3$.', 'B. $SO_2+H_2O\\rightarrow H_2SO_4$ trong mọi điều kiện.', 'C. $SO_2+H_2O\\rightarrow H_2S+O_2$.', 'D. SO₂ không tương tác với nước.'],
    correctAnswer: 'A', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-so2-acidic-oxide'], subTypeId: 'chem11-ns-st-so2-acidic-oxide', practiceRole: 'guided', representationType: 'equation', estimatedSeconds: 50
  },
  {
    id: 'chem11-ns-q150', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt27',
    content: 'Phản ứng nào minh họa SO₂ là acidic oxide?',
    responseType: 'single_choice',
    options: ['A. $SO_2+O_2$ không xét điều kiện.', 'B. $SO_2+CaO\\rightarrow CaSO_3$.', 'C. $SO_2+Cl_2$ chỉ đổi màu.', 'D. $SO_2$ phân hủy thành S và O₂ ở thường.'],
    correctAnswer: 'B', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-so2-acidic-oxide'], subTypeId: 'chem11-ns-st-so2-acidic-oxide', practiceRole: 'near_transfer', representationType: 'equation', estimatedSeconds: 55
  },
  {
    id: 'chem11-ns-q151', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt27',
    content: 'Sục lượng vừa đủ SO₂ vào dung dịch Ca(OH)₂, phương trình phù hợp là',
    responseType: 'single_choice',
    options: ['A. $SO_2+Ca(OH)_2\\rightarrow CaSO_4+H_2$.', 'B. $SO_2+Ca(OH)_2\\rightarrow CaS+O_2+H_2O$.', 'C. $SO_2+Ca(OH)_2\\rightarrow CaSO_3+H_2O$.', 'D. Không xảy ra phản ứng.'],
    correctAnswer: 'C', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-so2-acidic-oxide'], subTypeId: 'chem11-ns-st-so2-acidic-oxide', practiceRole: 'near_transfer', representationType: 'equation', estimatedSeconds: 65
  },
  {
    id: 'chem11-ns-q152', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt27',
    content: 'Thí nghiệm nào bác bỏ trực tiếp nhận định “SO₂ là oxide trung tính”?',
    responseType: 'single_choice',
    options: ['A. Đo khối lượng bình khí kín.', 'B. Quan sát màu bình rỗng.', 'C. Làm lạnh SO₂.', 'D. Cho SO₂ tác dụng với dung dịch base và thu được muối sulfite.'],
    correctAnswer: 'D', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-so2-acidic-oxide'], subTypeId: 'chem11-ns-st-so2-acidic-oxide', practiceRole: 'mastery_holdout', representationType: 'table',
    misconceptionId: 'chem11-mis-so2-neutral-oxide', isMasteryHoldout: true, estimatedSeconds: 70
  },
  {
    id: 'chem11-ns-q153', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt27',
    content: 'Cho SO₂ và NaOH phản ứng theo tỉ lệ mol 1 : 1. Sản phẩm muối chính là',
    responseType: 'single_choice',
    options: ['A. NaHSO₃.', 'B. Na₂SO₄.', 'C. Na₂S.', 'D. Na₂SO₃ duy nhất.'],
    correctAnswer: 'A', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-so2-acidic-oxide'], subTypeId: 'chem11-ns-st-so2-base-ratio', practiceRole: 'guided', representationType: 'equation', estimatedSeconds: 60
  },
  {
    id: 'chem11-ns-q154', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt27',
    content: 'Cho SO₂ và NaOH phản ứng theo tỉ lệ mol 1 : 2. Phương trình đúng là',
    responseType: 'single_choice',
    options: ['A. $SO_2+NaOH\\rightarrow Na_2SO_3+H_2O$.', 'B. $SO_2+2NaOH\\rightarrow Na_2SO_3+H_2O$.', 'C. $SO_2+2NaOH\\rightarrow Na_2SO_4+H_2$.', 'D. $SO_2+NaOH\\rightarrow Na_2S+O_2$.'],
    correctAnswer: 'B', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-so2-acidic-oxide'], subTypeId: 'chem11-ns-st-so2-base-ratio', practiceRole: 'near_transfer', representationType: 'equation', estimatedSeconds: 70
  },
  {
    id: 'chem11-ns-q155', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt27',
    content: 'Hấp thụ hoàn toàn 0,10 mol SO₂ vào 0,15 mol NaOH. Giả sử chỉ tạo NaHSO₃ và Na₂SO₃, số mol mỗi muối lần lượt là',
    responseType: 'single_choice',
    options: ['A. 0,10 và 0,00.', 'B. 0,00 và 0,10.', 'C. 0,05 mol NaHSO₃ và 0,05 mol Na₂SO₃.', 'D. 0,15 mol mỗi muối.'],
    correctAnswer: 'C', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-so2-acidic-oxide'], subTypeId: 'chem11-ns-st-so2-base-ratio', practiceRole: 'far_transfer', representationType: 'table', estimatedSeconds: 100
  },
  {
    id: 'chem11-ns-q156', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt27',
    content: 'Dẫn 0,20 mol SO₂ vào 0,10 mol NaOH. Kết luận phù hợp nhất là',
    responseType: 'single_choice',
    options: ['A. Tạo 0,10 mol Na₂SO₃.', 'B. Toàn bộ SO₂ tạo Na₂SO₄.', 'C. NaOH dư 0,10 mol.', 'D. NaOH giới hạn, tạo 0,10 mol NaHSO₃ và còn SO₂ dư nếu không có tác chất khác.'],
    correctAnswer: 'D', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-so2-acidic-oxide'], subTypeId: 'chem11-ns-st-so2-base-ratio', practiceRole: 'mastery_holdout', representationType: 'table',
    misconceptionId: 'chem11-mis-so2-base-one-product', isMasteryHoldout: true, estimatedSeconds: 100
  },
  {
    id: 'chem11-ns-q157', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt28',
    content: 'Trong $SO_2+Br_2+2H_2O\\rightarrow H_2SO_4+2HBr$, SO₂ là',
    responseType: 'single_choice',
    options: ['A. chất khử vì sulfur tăng từ +4 lên +6.', 'B. chất oxi hóa vì sulfur giảm.', 'C. chất xúc tác.', 'D. base.'],
    correctAnswer: 'A', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-so2-redox'], subTypeId: 'chem11-ns-st-so2-redox', practiceRole: 'guided', representationType: 'equation', estimatedSeconds: 55
  },
  {
    id: 'chem11-ns-q158', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt28',
    content: 'Trong $SO_2+2H_2S\\rightarrow3S+2H_2O$, SO₂ thể hiện',
    responseType: 'single_choice',
    options: ['A. tính base.', 'B. tính oxi hóa vì sulfur +4 giảm xuống 0.', 'C. tính khử vì sulfur tăng lên +6.', 'D. vai trò chất xúc tác.'],
    correctAnswer: 'B', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-so2-redox'], subTypeId: 'chem11-ns-st-so2-redox', practiceRole: 'near_transfer', representationType: 'equation', estimatedSeconds: 55
  },
  {
    id: 'chem11-ns-q159', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt28',
    content: 'SO₂ có thể vừa có tính oxi hóa vừa có tính khử vì',
    responseType: 'single_choice',
    options: ['A. SO₂ không chứa oxygen.', 'B. sulfur luôn có số oxi hóa 0.', 'C. sulfur +4 có thể tăng lên +6 hoặc giảm xuống số oxi hóa thấp hơn.', 'D. SO₂ là kim loại.'],
    correctAnswer: 'C', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-so2-redox'], subTypeId: 'chem11-ns-st-so2-redox', practiceRole: 'misconception_check', representationType: 'table',
    misconceptionId: 'chem11-mis-so2-only-reducing', estimatedSeconds: 55
  },
  {
    id: 'chem11-ns-q160', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt28',
    content: 'Sục SO₂ vào dung dịch bromine thấy màu bromine nhạt dần. Bằng chứng quyết định SO₂ là chất khử là',
    responseType: 'single_choice',
    options: ['A. SO₂ có mùi hắc.', 'B. bromine tan trong nước.', 'C. dung dịch bị pha loãng.', 'D. sulfur trong SO₂ tăng số oxi hóa từ +4 lên +6.'],
    correctAnswer: 'D', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-so2-redox'], subTypeId: 'chem11-ns-st-so2-redox', practiceRole: 'mastery_holdout', representationType: 'experiment',
    isMasteryHoldout: true, estimatedSeconds: 70
  },
  {
    id: 'chem11-ns-q161', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt28',
    content: 'Ứng dụng công nghiệp quan trọng của SO₂ là nguyên liệu trung gian để',
    responseType: 'single_choice',
    options: ['A. sản xuất sulfuric acid.', 'B. sản xuất nitrogen lỏng.', 'C. điện phân sodium chloride.', 'D. tạo kim loại sulfur.'],
    correctAnswer: 'A', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-so2-applications'], subTypeId: 'chem11-ns-st-so2-use-safety', practiceRole: 'near_transfer', representationType: 'text', estimatedSeconds: 45
  },
  {
    id: 'chem11-ns-q162', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt28',
    content: 'Nhận xét phù hợp về tác dụng tẩy màu của SO₂ là',
    responseType: 'single_choice',
    options: ['A. luôn giống cơ chế oxi hóa mạnh của chlorine.', 'B. thường liên quan tính khử và màu có thể xuất hiện lại trong một số trường hợp.', 'C. chứng minh SO₂ không tham gia redox.', 'D. cho phép dùng SO₂ không giới hạn.'],
    correctAnswer: 'B', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-so2-redox', 'chem11-ns-so2-applications'], subTypeId: 'chem11-ns-st-so2-use-safety', practiceRole: 'misconception_check', representationType: 'experiment',
    misconceptionId: 'chem11-mis-so2-bleaching-permanent', estimatedSeconds: 65
  },
  {
    id: 'chem11-ns-q163', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt28',
    content: 'Phát biểu đúng về dùng SO₂ trong bảo quản thực phẩm là',
    responseType: 'single_choice',
    options: ['A. Có thể dùng tùy ý vì SO₂ là khí.', 'B. Càng nhiều càng tốt.', 'C. Chỉ được dùng đúng quy định, đúng mục đích và giới hạn vì SO₂ độc, gây kích ứng.', 'D. Có thể nhận biết lượng an toàn bằng cách ngửi trực tiếp.'],
    correctAnswer: 'C', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-so2-applications'], subTypeId: 'chem11-ns-st-so2-use-safety', practiceRole: 'near_transfer', representationType: 'table',
    misconceptionId: 'chem11-mis-so2-preservative-unlimited', estimatedSeconds: 60
  },
  {
    id: 'chem11-ns-q164', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt28',
    content: 'Để phân biệt SO₂ và CO₂ bằng một thí nghiệm nhấn mạnh tính khử, nên dùng',
    responseType: 'single_choice',
    options: ['A. nước cất vì cả hai đều không tương tác.', 'B. dung dịch NaOH vì chỉ CO₂ phản ứng.', 'C. giấy quỳ vì chỉ SO₂ làm đổi màu.', 'D. dung dịch bromine: SO₂ làm mất màu do phản ứng redox, CO₂ không.'],
    correctAnswer: 'D', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-so2-redox'], subTypeId: 'chem11-ns-st-so2-use-safety', practiceRole: 'mastery_holdout', representationType: 'experiment',
    isMasteryHoldout: true, estimatedSeconds: 75
  },
  {
    id: 'chem11-ns-q165', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt28',
    content: 'Nguồn phát thải SO₂ đáng kể do hoạt động con người là',
    responseType: 'single_choice',
    options: ['A. đốt nhiên liệu chứa sulfur và luyện quặng sulfide.', 'B. quang hợp của cây xanh.', 'C. bay hơi nước tinh khiết.', 'D. điện phân nước.'],
    correctAnswer: 'A', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-so2-environment-control'], subTypeId: 'chem11-ns-st-so2-environment', practiceRole: 'guided', representationType: 'text', estimatedSeconds: 50
  },
  {
    id: 'chem11-ns-q166', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt28',
    content: 'Mô tả đầy đủ hơn về vai trò của SO₂ trong mưa acid là',
    responseType: 'single_choice',
    options: ['A. SO₂ chỉ làm nước mưa có mùi, không tạo acid.', 'B. SO₂ hòa tan và còn có thể bị oxi hóa tiếp trong khí quyển tạo sulfuric acid.', 'C. SO₂ trực tiếp biến thành NaOH.', 'D. Chỉ CO₂ mới liên quan độ acid của mưa.'],
    correctAnswer: 'B', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-so2-environment-control'], subTypeId: 'chem11-ns-st-so2-environment', practiceRole: 'misconception_check', representationType: 'equation',
    misconceptionId: 'chem11-mis-so2-acid-rain-direct-only', estimatedSeconds: 75
  },
  {
    id: 'chem11-ns-q167', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt28',
    content: 'Biện pháp xử lí SO₂ trong khí thải tại nguồn phù hợp là',
    responseType: 'single_choice',
    options: ['A. Chỉ xây ống khói cao hơn.', 'B. Pha loãng khí thải bằng không khí rồi xả.', 'C. Dùng hệ hấp thụ với đá vôi/vôi và giảm sulfur trong nhiên liệu.', 'D. Đổi tên nhà máy.'],
    correctAnswer: 'C', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-so2-environment-control'], subTypeId: 'chem11-ns-st-so2-environment', practiceRole: 'far_transfer', representationType: 'experiment',
    misconceptionId: 'chem11-mis-so2-tall-chimney-control', estimatedSeconds: 70
  },
  {
    id: 'chem11-ns-q168', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt28',
    content: 'Bảng vận hành nhà máy cho thấy: đổi sang nhiên liệu ít sulfur làm SO₂ đầu vào giảm 45%; hệ hấp thụ đá vôi loại 90% lượng SO₂ còn lại; chỉ tăng chiều cao ống khói không làm giảm tổng lượng SO₂. Kết luận tốt nhất là',
    responseType: 'single_choice',
    options: ['A. Chỉ tăng ống khói là đủ.', 'B. Hệ hấp thụ không có tác dụng.', 'C. Nhiên liệu ít sulfur làm SO₂ tăng.', 'D. Kết hợp giảm sulfur đầu vào và hấp thụ khí thải xử lí nguyên nhân–phát thải tốt hơn việc chỉ phát tán bằng ống khói cao.'],
    correctAnswer: 'D', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-so2-environment-control'], subTypeId: 'chem11-ns-st-so2-environment', practiceRole: 'mastery_holdout', representationType: 'table',
    isMasteryHoldout: true, estimatedSeconds: 105
  },
  {
    id: 'chem11-ns-q169', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt29',
    content: 'Số oxi hóa của sulfur trong H₂SO₄ là',
    responseType: 'single_choice',
    options: ['A. +6.', 'B. +4.', 'C. +2.', 'D. −2.'],
    correctAnswer: 'A', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-h2so4-structure-physical'], subTypeId: 'chem11-ns-st-h2so4-structure-physical', practiceRole: 'guided', representationType: 'equation', estimatedSeconds: 40
  },
  {
    id: 'chem11-ns-q170', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt29',
    content: 'Mô tả phù hợp với sulfuric acid đặc tinh khiết là',
    responseType: 'single_choice',
    options: ['A. khí màu vàng.', 'B. chất lỏng không màu, sánh và có khối lượng riêng lớn hơn nước.', 'C. chất rắn tan kém.', 'D. chất lỏng nhẹ hơn nước và không ăn mòn.'],
    correctAnswer: 'B', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-h2so4-structure-physical'], subTypeId: 'chem11-ns-st-h2so4-structure-physical', practiceRole: 'near_transfer', representationType: 'text', estimatedSeconds: 45
  },
  {
    id: 'chem11-ns-q171', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt29',
    content: 'Phát biểu nào sai?',
    responseType: 'single_choice',
    options: ['A. H₂SO₄ đặc hòa tan vào nước tỏa nhiều nhiệt.', 'B. H₂SO₄ đặc có tính ăn mòn mạnh.', 'C. Sulfur trong H₂SO₄ có số oxi hóa +4.', 'D. H₂SO₄ đặc có khối lượng riêng lớn hơn nước.'],
    correctAnswer: 'C', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-h2so4-structure-physical'], subTypeId: 'chem11-ns-st-h2so4-structure-physical', practiceRole: 'misconception_check', representationType: 'text',
    misconceptionId: 'chem11-mis-h2so4-s-oxidation', estimatedSeconds: 50
  },
  {
    id: 'chem11-ns-q172', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt29',
    content: 'Bảng so sánh cho biết H₂SO₄ đặc có khối lượng riêng khoảng 1,84 g/mL và quá trình hòa tan tỏa nhiệt rất lớn. Kết luận đúng nhất là',
    responseType: 'single_choice',
    options: ['A. Có thể rót nhanh nước vào acid.', 'B. Acid chắc chắn nổi trên nước.', 'C. Không cần làm mát khi pha.', 'D. Phải kiểm soát tốc độ pha loãng; khối lượng riêng lớn không làm mất nguy cơ sôi cục bộ và bắn acid.'],
    correctAnswer: 'D', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-h2so4-structure-physical', 'chem11-ns-h2so4-dilution-first-aid'], subTypeId: 'chem11-ns-st-h2so4-structure-physical', practiceRole: 'mastery_holdout', representationType: 'experiment',
    isMasteryHoldout: true, estimatedSeconds: 65
  },
  {
    id: 'chem11-ns-q173', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt29',
    content: 'Phương trình đúng của zinc với H₂SO₄ loãng là',
    responseType: 'single_choice',
    options: ['A. $Zn+H_2SO_4\\rightarrow ZnSO_4+H_2\\uparrow$.', 'B. $Zn+2H_2SO_4\\rightarrow ZnSO_4+SO_2+2H_2O$ trong mọi điều kiện.', 'C. $Zn+H_2SO_4\\rightarrow ZnS+2H_2O$.', 'D. Không phản ứng.'],
    correctAnswer: 'A', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-h2so4-dilute-acid'], subTypeId: 'chem11-ns-st-h2so4-dilute-acid', practiceRole: 'guided', representationType: 'equation', estimatedSeconds: 55
  },
  {
    id: 'chem11-ns-q174', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt29',
    content: 'Để trung hòa hoàn toàn 1 mol H₂SO₄ cần số mol NaOH là',
    responseType: 'single_choice',
    options: ['A. 1 mol.', 'B. 2 mol.', 'C. 3 mol.', 'D. 0,5 mol.'],
    correctAnswer: 'B', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-h2so4-dilute-acid'], subTypeId: 'chem11-ns-st-h2so4-dilute-acid', practiceRole: 'near_transfer', representationType: 'equation', estimatedSeconds: 50
  },
  {
    id: 'chem11-ns-q175', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt29',
    content: 'Phản ứng của CuO với H₂SO₄ loãng tạo',
    responseType: 'single_choice',
    options: ['A. Cu và SO₂.', 'B. CuS và O₂.', 'C. CuSO₄ và H₂O.', 'D. CuSO₃ và H₂.'],
    correctAnswer: 'C', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-h2so4-dilute-acid'], subTypeId: 'chem11-ns-st-h2so4-dilute-acid', practiceRole: 'near_transfer', representationType: 'equation', estimatedSeconds: 50
  },
  {
    id: 'chem11-ns-q176', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt29',
    content: 'Cho H₂SO₄ loãng vào Na₂CO₃, dấu hiệu và sản phẩm khí phù hợp là',
    responseType: 'single_choice',
    options: ['A. Kết tủa sulfur.', 'B. Khí H₂.', 'C. Không có hiện tượng.', 'D. Sủi bọt CO₂; tạo Na₂SO₄, CO₂ và H₂O.'],
    correctAnswer: 'D', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-h2so4-dilute-acid'], subTypeId: 'chem11-ns-st-h2so4-dilute-acid', practiceRole: 'mastery_holdout', representationType: 'experiment',
    isMasteryHoldout: true, estimatedSeconds: 65
  },
  {
    id: 'chem11-ns-q177', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt29',
    content: 'Quy trình pha loãng H₂SO₄ đặc đúng là',
    responseType: 'single_choice',
    options: ['A. Thêm acid từ từ vào nước, khuấy đều và làm mát phù hợp.', 'B. Rót nhanh nước vào acid.', 'C. Trộn trong bình kín không tản nhiệt.', 'D. Đổ đồng thời acid và nước từ độ cao lớn.'],
    correctAnswer: 'A', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-h2so4-dilution-first-aid'], subTypeId: 'chem11-ns-st-h2so4-dilution-firstaid', practiceRole: 'guided', representationType: 'experiment', estimatedSeconds: 55
  },
  {
    id: 'chem11-ns-q178', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt29',
    content: 'Khi một lượng nhỏ H₂SO₄ bắn vào da, hành động sơ bộ ưu tiên là',
    responseType: 'single_choice',
    options: ['A. Chờ acid tự khô.', 'B. Loại bỏ nguồn nhiễm và rửa ngay bằng thật nhiều nước theo quy trình an toàn, đồng thời tìm hỗ trợ y tế.', 'C. Đổ ngay NaOH đặc lên da.', 'D. Lau mạnh bằng khăn khô rồi tiếp tục làm việc.'],
    correctAnswer: 'B', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-h2so4-dilution-first-aid'], subTypeId: 'chem11-ns-st-h2so4-dilution-firstaid', practiceRole: 'misconception_check', representationType: 'text',
    misconceptionId: 'chem11-mis-h2so4-burn-neutralize-first', estimatedSeconds: 65
  },
  {
    id: 'chem11-ns-q179', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt29',
    content: 'Vì sao rót nước vào H₂SO₄ đặc nguy hiểm hơn thêm acid từ từ vào nước?',
    responseType: 'single_choice',
    options: ['A. Nước không có phân tử.', 'B. H₂SO₄ luôn đóng băng.', 'C. Lớp nước nhỏ có thể nóng và sôi cục bộ rất nhanh, làm acid bắn ra ngoài.', 'D. Nước biến thành hydrogen ngay.'],
    correctAnswer: 'C', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-h2so4-dilution-first-aid'], subTypeId: 'chem11-ns-st-h2so4-dilution-firstaid', practiceRole: 'far_transfer', representationType: 'diagram',
    misconceptionId: 'chem11-mis-h2so4-water-into-acid', estimatedSeconds: 75
  },
  {
    id: 'chem11-ns-q180', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt29',
    content: 'Một học sinh cần chuẩn bị dung dịch H₂SO₄ loãng và xử lí chai acid bị nứt. Phương án đúng nhất là',
    responseType: 'single_choice',
    options: ['A. Tự ôm chai nứt chạy qua lớp.', 'B. Rót nước vào chai acid để giảm nồng độ.', 'C. Tiếp tục dùng nếu chưa chảy nhiều.', 'D. Báo người phụ trách, cô lập khu vực theo quy trình; khi được phép pha thì thêm acid từ từ vào nước với PPE và làm mát.'],
    correctAnswer: 'D', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-h2so4-dilution-first-aid'], subTypeId: 'chem11-ns-st-h2so4-dilution-firstaid', practiceRole: 'mastery_holdout', representationType: 'experiment',
    isMasteryHoldout: true, estimatedSeconds: 85
  },
  {
    id: 'chem11-ns-q181', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt30',
    content: 'Phương trình đúng của Cu với H₂SO₄ đặc, nóng là',
    responseType: 'single_choice',
    options: ['A. $Cu+2H_2SO_4\\rightarrow CuSO_4+SO_2+2H_2O$.', 'B. $Cu+H_2SO_4\\rightarrow CuSO_4+H_2$.', 'C. $Cu+H_2SO_4\\rightarrow CuS+2H_2O$.', 'D. $Cu+2H_2SO_4\\rightarrow Cu(HSO_4)_2+H_2$.'],
    correctAnswer: 'A', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-h2so4-concentrated-oxidizing'], subTypeId: 'chem11-ns-st-h2so4-conc-oxidizing', practiceRole: 'guided', representationType: 'equation', estimatedSeconds: 55
  },
  {
    id: 'chem11-ns-q182', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt30',
    content: 'Trong phản ứng Cu với H₂SO₄ đặc, nóng, sulfur bị khử từ',
    responseType: 'single_choice',
    options: ['A. +4 xuống 0.', 'B. +6 xuống +4.', 'C. 0 xuống −2.', 'D. +6 xuống −2.'],
    correctAnswer: 'B', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-h2so4-concentrated-oxidizing'], subTypeId: 'chem11-ns-st-h2so4-conc-oxidizing', practiceRole: 'near_transfer', representationType: 'table', estimatedSeconds: 50
  },
  {
    id: 'chem11-ns-q183', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt30',
    content: 'Sản phẩm khí thường dùng để minh họa khi Cu phản ứng với H₂SO₄ đặc, nóng là',
    responseType: 'single_choice',
    options: ['A. H₂.', 'B. O₂.', 'C. SO₂.', 'D. N₂.'],
    correctAnswer: 'C', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-h2so4-concentrated-oxidizing'], subTypeId: 'chem11-ns-st-h2so4-conc-oxidizing', practiceRole: 'misconception_check', representationType: 'text',
    misconceptionId: 'chem11-mis-h2so4-conc-metal-h2', estimatedSeconds: 45
  },
  {
    id: 'chem11-ns-q184', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt30',
    content: 'Phát biểu phù hợp về Fe, Al, Cr với H₂SO₄ đặc, nguội là',
    responseType: 'single_choice',
    options: ['A. Luôn giải phóng H₂ mãnh liệt.', 'B. Luôn tan hoàn toàn ngay.', 'C. Không có bất kì tương tác bề mặt nào.', 'D. Có thể bị thụ động hóa trong điều kiện thích hợp.'],
    correctAnswer: 'D', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-h2so4-concentrated-oxidizing'], subTypeId: 'chem11-ns-st-h2so4-conc-oxidizing', practiceRole: 'mastery_holdout', representationType: 'experiment',
    misconceptionId: 'chem11-mis-h2so4-cold-all-metals', isMasteryHoldout: true, estimatedSeconds: 60
  },
  {
    id: 'chem11-ns-q185', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt30',
    content: 'Nhỏ H₂SO₄ đặc vào đường, hiện tượng ban đầu nổi bật là',
    responseType: 'single_choice',
    options: ['A. đường hóa đen và khối chất có thể phồng lên do mất nước, tỏa nhiệt.', 'B. đường chuyển thành kim loại.', 'C. tạo kết tủa BaSO₄.', 'D. không có biến đổi.'],
    correctAnswer: 'A', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-h2so4-dehydrating'], subTypeId: 'chem11-ns-st-h2so4-dehydrating', practiceRole: 'guided', representationType: 'experiment', estimatedSeconds: 55
  },
  {
    id: 'chem11-ns-q186', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt30',
    content: 'Chất rắn màu đen hình thành khi H₂SO₄ đặc lấy nước khỏi đường chủ yếu là',
    responseType: 'single_choice',
    options: ['A. sulfur.', 'B. carbon.', 'C. copper.', 'D. barium sulfate.'],
    correctAnswer: 'B', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-h2so4-dehydrating'], subTypeId: 'chem11-ns-st-h2so4-dehydrating', practiceRole: 'near_transfer', representationType: 'equation', estimatedSeconds: 45
  },
  {
    id: 'chem11-ns-q187', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt30',
    content: 'Giải thích đúng nhất cho hiện tượng than hóa giấy bởi H₂SO₄ đặc là',
    responseType: 'single_choice',
    options: ['A. Acid cung cấp carbon cho giấy.', 'B. Giấy biến thành sulfate kim loại.', 'C. Acid lấy các nguyên tố H và O theo tỉ lệ tạo nước khỏi vật liệu hữu cơ, để lại carbon giàu hơn.', 'D. Chỉ do màu của acid.'],
    correctAnswer: 'C', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-h2so4-dehydrating'], subTypeId: 'chem11-ns-st-h2so4-dehydrating', practiceRole: 'misconception_check', representationType: 'text',
    misconceptionId: 'chem11-mis-h2so4-dehydrating-burning', estimatedSeconds: 70
  },
  {
    id: 'chem11-ns-q188', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt30',
    content: 'Trong thí nghiệm H₂SO₄ đặc với đường, phát biểu nào phân biệt đúng “háo nước” với “hút ẩm”?',
    responseType: 'single_choice',
    options: ['A. Hai khái niệm luôn đồng nhất.', 'B. Hút ẩm bắt buộc phá hủy cấu trúc hóa học chất.', 'C. Háo nước chỉ làm lạnh.', 'D. Háo nước có thể tách H và O khỏi hợp chất theo tỉ lệ tạo nước, gây biến đổi hóa học như than hóa.'],
    correctAnswer: 'D', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-h2so4-dehydrating'], subTypeId: 'chem11-ns-st-h2so4-dehydrating', practiceRole: 'mastery_holdout', representationType: 'table',
    isMasteryHoldout: true, estimatedSeconds: 75
  },
  {
    id: 'chem11-ns-q189', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt30',
    content: 'Thiết lập an toàn phù hợp nhất khi giáo viên biểu diễn Cu với H₂SO₄ đặc, nóng là',
    responseType: 'single_choice',
    options: ['A. Dùng lượng nhỏ trong tủ hút/hệ kín phù hợp, có PPE và bình hấp thụ khí dư.', 'B. Đun cốc hở giữa lớp.', 'C. Cho học sinh ngửi khí.', 'D. Bịt kín hoàn toàn hệ không có đường thoát áp.'],
    correctAnswer: 'A', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-h2so4-experiment-safety'], subTypeId: 'chem11-ns-st-h2so4-experiment-safety', practiceRole: 'guided', representationType: 'experiment', estimatedSeconds: 60
  },
  {
    id: 'chem11-ns-q190', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt30',
    content: 'Dung dịch nào phù hợp để hấp thụ SO₂ dư trong thí nghiệm quy mô nhỏ theo thiết kế an toàn?',
    responseType: 'single_choice',
    options: ['A. Dung dịch acid mạnh đậm đặc.', 'B. Dung dịch kiềm phù hợp như NaOH, dùng trong bình hấp thụ.', 'C. Dầu ăn.', 'D. Dung dịch chứa thêm SO₂.'],
    correctAnswer: 'B', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-h2so4-experiment-safety', 'chem11-ns-so2-acidic-oxide'], subTypeId: 'chem11-ns-st-h2so4-experiment-safety', practiceRole: 'far_transfer', representationType: 'diagram', estimatedSeconds: 70
  },
  {
    id: 'chem11-ns-q191', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt30',
    content: 'Cách nào tuyệt đối không dùng để xác nhận khí SO₂ sinh ra?',
    responseType: 'single_choice',
    options: ['A. Dẫn qua thuốc thử phù hợp trong hệ kín.', 'B. Quan sát dữ liệu cảm biến.', 'C. Ngửi trực tiếp ở miệng ống nghiệm.', 'D. Dùng bình hấp thụ khí dư.'],
    correctAnswer: 'C', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-h2so4-experiment-safety'], subTypeId: 'chem11-ns-st-h2so4-experiment-safety', practiceRole: 'misconception_check', representationType: 'experiment',
    misconceptionId: 'chem11-mis-h2so4-smell-gas-direct', estimatedSeconds: 50
  },
  {
    id: 'chem11-ns-q192', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt30',
    content: 'Bảng hiện tượng: mẫu I, Cu tan dần, dung dịch xanh và khí SO₂; mẫu II, đường chuyển đen, phồng và nóng. Ghép đúng tính chất là',
    responseType: 'single_choice',
    options: ['A. I háo nước; II tính acid loãng.', 'B. I thụ động hóa; II tạo BaSO₄.', 'C. Cả hai chỉ là hòa tan vật lí.', 'D. I chứng minh tính oxi hóa mạnh; II chủ yếu chứng minh tính háo nước của H₂SO₄ đặc.'],
    correctAnswer: 'D', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-h2so4-concentrated-oxidizing', 'chem11-ns-h2so4-dehydrating', 'chem11-ns-h2so4-experiment-safety'], subTypeId: 'chem11-ns-st-h2so4-experiment-safety', practiceRole: 'mastery_holdout', representationType: 'table',
    isMasteryHoldout: true, estimatedSeconds: 90
  },
  {
    id: 'chem11-ns-q193', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt31',
    content: 'Thứ tự khái quát đúng của phương pháp tiếp xúc là',
    responseType: 'single_choice',
    options: ['A. Tạo SO₂ → oxi hóa thành SO₃ → hấp thụ SO₃ → thu H₂SO₄.', 'B. H₂SO₄ → S → SO₂.', 'C. SO₃ → SO₂ → S.', 'D. Chỉ hòa tan sulfur vào nước.'],
    correctAnswer: 'A', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-h2so4-contact-process'], subTypeId: 'chem11-ns-st-contact-sequence', practiceRole: 'guided', representationType: 'diagram', estimatedSeconds: 50
  },
  {
    id: 'chem11-ns-q194', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt31',
    content: 'Phương trình của giai đoạn oxi hóa SO₂ trong phương pháp tiếp xúc là',
    responseType: 'single_choice',
    options: ['A. $SO_2+H_2O\\rightarrow H_2SO_3$.', 'B. $2SO_2+O_2\\rightleftharpoons2SO_3$.', 'C. $SO_3\\rightarrow S+O_2$.', 'D. $SO_2+2H_2\\rightarrow S+2H_2O$.'],
    correctAnswer: 'B', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-h2so4-contact-process'], subTypeId: 'chem11-ns-st-contact-sequence', practiceRole: 'near_transfer', representationType: 'equation', estimatedSeconds: 50
  },
  {
    id: 'chem11-ns-q195', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt31',
    content: 'Nguyên liệu nào có thể được dùng để tạo SO₂ trong sản xuất sulfuric acid?',
    responseType: 'single_choice',
    options: ['A. Chỉ nước tinh khiết.', 'B. Chỉ sodium chloride.', 'C. Sulfur hoặc quặng sulfide thích hợp.', 'D. Nitrogen lỏng.'],
    correctAnswer: 'C', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-h2so4-contact-process'], subTypeId: 'chem11-ns-st-contact-sequence', practiceRole: 'near_transfer', representationType: 'text', estimatedSeconds: 45
  },
  {
    id: 'chem11-ns-q196', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt31',
    content: 'Sơ đồ $S\\xrightarrow{O_2}X\\xrightarrow{O_2,V_2O_5}Y\\rightarrow H_2SO_4$ có X và Y lần lượt là',
    responseType: 'single_choice',
    options: ['A. SO₃ và SO₂.', 'B. H₂S và SO₂.', 'C. SO₂ và H₂S.', 'D. SO₂ và SO₃.'],
    correctAnswer: 'D', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-h2so4-contact-process'], subTypeId: 'chem11-ns-st-contact-sequence', practiceRole: 'mastery_holdout', representationType: 'diagram',
    isMasteryHoldout: true, estimatedSeconds: 60
  },
  {
    id: 'chem11-ns-q197', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt31',
    content: 'Vai trò đúng của V₂O₅ trong $2SO_2+O_2\\rightleftharpoons2SO_3$ là',
    responseType: 'single_choice',
    options: ['A. Tăng tốc độ đạt cân bằng nhưng không làm thay đổi vị trí cân bằng.', 'B. Làm cân bằng chuyển hoàn toàn sang phải.', 'C. Làm tăng hằng số cân bằng ở cùng nhiệt độ.', 'D. Cung cấp sulfur cho sản phẩm.'],
    correctAnswer: 'A', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-h2so4-contact-process'], subTypeId: 'chem11-ns-st-contact-conditions', practiceRole: 'misconception_check', representationType: 'equation',
    misconceptionId: 'chem11-mis-contact-catalyst-equilibrium', estimatedSeconds: 65
  },
  {
    id: 'chem11-ns-q198', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt31',
    content: 'Trong công nghiệp, SO₃ thường được hấp thụ vào H₂SO₄ đặc trước hết để tạo',
    responseType: 'single_choice',
    options: ['A. H₂S.', 'B. oleum.', 'C. sulfur rắn.', 'D. Na₂SO₄.'],
    correctAnswer: 'B', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-h2so4-contact-process'], subTypeId: 'chem11-ns-st-contact-conditions', practiceRole: 'guided', representationType: 'equation', estimatedSeconds: 50
  },
  {
    id: 'chem11-ns-q199', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt31',
    content: 'Bảng vận hành cho thấy khi khí nguyên liệu bị lẫn bụi và chất đầu độc xúc tác, hiệu suất chuyển SO₂ giảm. Biện pháp phù hợp là',
    responseType: 'single_choice',
    options: ['A. Bỏ luôn xúc tác.', 'B. Thêm bụi để tăng va chạm.', 'C. Làm sạch và làm khô khí trước khi qua tháp xúc tác.', 'D. Cho SO₃ trực tiếp vào nước lạnh.'],
    correctAnswer: 'C', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-h2so4-contact-process'], subTypeId: 'chem11-ns-st-contact-conditions', practiceRole: 'near_transfer', representationType: 'table', estimatedSeconds: 70
  },
  {
    id: 'chem11-ns-q200', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt31',
    content: 'Không ưu tiên hấp thụ trực tiếp SO₃ vào nước trong quy trình công nghiệp vì',
    responseType: 'single_choice',
    options: ['A. SO₃ hoàn toàn không phản ứng với nước.', 'B. Nước biến thành oxygen.', 'C. Chỉ tạo sulfur.', 'D. Phản ứng rất mạnh, tạo sương acid khó thu; hấp thụ vào H₂SO₄ đặc rồi pha loãng dễ kiểm soát hơn.'],
    correctAnswer: 'D', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-h2so4-contact-process'], subTypeId: 'chem11-ns-st-contact-conditions', practiceRole: 'mastery_holdout', representationType: 'diagram',
    misconceptionId: 'chem11-mis-contact-direct-water', isMasteryHoldout: true, estimatedSeconds: 75
  },
  {
    id: 'chem11-ns-q201', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt31',
    content: 'Ngành sử dụng lượng lớn H₂SO₄ làm nguyên liệu là',
    responseType: 'single_choice',
    options: ['A. sản xuất phân bón và nhiều hóa chất cơ bản.', 'B. tạo nitrogen từ chân không.', 'C. làm thực phẩm ăn trực tiếp.', 'D. thay thế nước uống.'],
    correctAnswer: 'A', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-h2so4-applications'], subTypeId: 'chem11-ns-st-h2so4-applications', practiceRole: 'guided', representationType: 'text', estimatedSeconds: 45
  },
  {
    id: 'chem11-ns-q202', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt31',
    content: 'Trong acquy chì–acid, H₂SO₄ đóng vai trò quan trọng chủ yếu là',
    responseType: 'single_choice',
    options: ['A. chất tạo màu.', 'B. chất điện li tham gia hệ phản ứng điện hóa.', 'C. chất khí trơ.', 'D. polymer cách điện.'],
    correctAnswer: 'B', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-h2so4-applications'], subTypeId: 'chem11-ns-st-h2so4-applications', practiceRole: 'far_transfer', representationType: 'diagram', estimatedSeconds: 65
  },
  {
    id: 'chem11-ns-q203', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt31',
    content: 'Cách quản lí H₂SO₄ thải đúng nhất là',
    responseType: 'single_choice',
    options: ['A. Xả thẳng xuống cống.', 'B. Tự trộn ngẫu nhiên với chất thải khác.', 'C. Cô lập, nhận diện và chuyển xử lí theo quy trình kiểm soát phù hợp.', 'D. Để bay hơi giữa lớp học.'],
    correctAnswer: 'C', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-h2so4-applications'], subTypeId: 'chem11-ns-st-h2so4-applications', practiceRole: 'misconception_check', representationType: 'text',
    misconceptionId: 'chem11-mis-h2so4-neutralize-drain', estimatedSeconds: 60
  },
  {
    id: 'chem11-ns-q204', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt31',
    content: 'Một nhà máy giảm sulfur thất thoát, làm sạch khí trước xúc tác, thu hồi nhiệt và xử lí sương acid. Đánh giá phù hợp nhất là',
    responseType: 'single_choice',
    options: ['A. Các biện pháp làm quy trình kém an toàn hơn.', 'B. Chỉ làm đẹp báo cáo.', 'C. Làm tăng phát thải bắt buộc.', 'D. Đồng thời cải thiện hiệu suất nguyên liệu, bảo vệ xúc tác, tận dụng năng lượng và giảm tác động môi trường.'],
    correctAnswer: 'D', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-h2so4-contact-process', 'chem11-ns-h2so4-applications'], subTypeId: 'chem11-ns-st-h2so4-applications', practiceRole: 'mastery_holdout', representationType: 'table',
    isMasteryHoldout: true, estimatedSeconds: 90
  },
  {
    id: 'chem11-ns-q205', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt32',
    content: 'Công thức của ammonium sulfate là',
    responseType: 'single_choice',
    options: ['A. $(NH_4)_2SO_4$.', 'B. $NH_4SO_4$.', 'C. $(NH_4)_2S$.', 'D. $NH_4HS$.'],
    correctAnswer: 'A', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-sulfate-important-salts'], subTypeId: 'chem11-ns-st-sulfate-salts', practiceRole: 'guided', representationType: 'equation', estimatedSeconds: 40
  },
  {
    id: 'chem11-ns-q206', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt32',
    content: 'Muối sulfate rất ít tan, được dùng làm chất cản quang đường tiêu hóa theo chỉ định chuyên môn là',
    responseType: 'single_choice',
    options: ['A. MgSO₄.', 'B. BaSO₄.', 'C. (NH₄)₂SO₄.', 'D. Na₂SO₄.'],
    correctAnswer: 'B', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-sulfate-important-salts'], subTypeId: 'chem11-ns-st-sulfate-salts', practiceRole: 'near_transfer', representationType: 'text', estimatedSeconds: 45
  },
  {
    id: 'chem11-ns-q207', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt32',
    content: 'Calcium sulfate là thành phần quan trọng liên quan đến',
    responseType: 'single_choice',
    options: ['A. nitrogen lỏng.', 'B. khí chlorine.', 'C. thạch cao và vật liệu xây dựng.', 'D. kim loại copper tinh khiết.'],
    correctAnswer: 'C', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-sulfate-important-salts'], subTypeId: 'chem11-ns-st-sulfate-salts', practiceRole: 'near_transfer', representationType: 'text', estimatedSeconds: 40
  },
  {
    id: 'chem11-ns-q208', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt32',
    content: 'Bảng ghép nào đúng?',
    responseType: 'single_choice',
    options: ['A. BaSO₄ – phân đạm chính.', 'B. (NH₄)₂SO₄ – chất cản quang không tan.', 'C. CaSO₄ – khí gây mưa acid.', 'D. (NH₄)₂SO₄ – phân bón; CaSO₄ – thạch cao; BaSO₄ – chất cản quang theo chỉ định.'],
    correctAnswer: 'D', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-sulfate-important-salts'], subTypeId: 'chem11-ns-st-sulfate-salts', practiceRole: 'mastery_holdout', representationType: 'table',
    isMasteryHoldout: true, estimatedSeconds: 60
  },
  {
    id: 'chem11-ns-q209', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt32',
    content: 'Thuốc thử cung cấp ion phù hợp để nhận biết SO₄²⁻ trong dung dịch là',
    responseType: 'single_choice',
    options: ['A. dung dịch chứa Ba²⁺ như BaCl₂ trong môi trường thích hợp.', 'B. nước cất.', 'C. dung dịch NaCl.', 'D. nitrogen lỏng.'],
    correctAnswer: 'A', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-sulfate-identification'], subTypeId: 'chem11-ns-st-sulfate-test', practiceRole: 'guided', representationType: 'experiment', estimatedSeconds: 50
  },
  {
    id: 'chem11-ns-q210', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt32',
    content: 'Phương trình ion rút gọn của phép thử sulfate là',
    responseType: 'single_choice',
    options: ['A. $Ba+SO_4\\rightarrow BaSO_4$.', 'B. $Ba^{2+}+SO_4^{2-}\\rightarrow BaSO_4\\downarrow$.', 'C. $2Ba^++SO_4^{2-}\\rightarrow Ba_2SO_4$.', 'D. $Ba^{2+}+SO_2\\rightarrow BaSO_2$.'],
    correctAnswer: 'B', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-sulfate-identification'], subTypeId: 'chem11-ns-st-sulfate-test', practiceRole: 'near_transfer', representationType: 'equation', estimatedSeconds: 55
  },
  {
    id: 'chem11-ns-q211', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt32',
    content: 'Hiện tượng cốt lõi khi cho Ba²⁺ vào dung dịch chứa sulfate là',
    responseType: 'single_choice',
    options: ['A. Khí màu nâu.', 'B. Dung dịch hóa xanh.', 'C. Xuất hiện kết tủa trắng BaSO₄ rất ít tan.', 'D. Tạo kim loại barium.'],
    correctAnswer: 'C', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-sulfate-identification'], subTypeId: 'chem11-ns-st-sulfate-test', practiceRole: 'near_transfer', representationType: 'experiment', estimatedSeconds: 45
  },
  {
    id: 'chem11-ns-q212', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt32',
    content: 'Vì sao không nên kết luận sulfate chỉ từ “có kết tủa trắng khi thêm một thuốc thử barium bất kỳ”?',
    responseType: 'single_choice',
    options: ['A. BaSO₄ luôn có màu đen.', 'B. Sulfate không phản ứng với Ba²⁺.', 'C. Mọi anion đều tạo cùng kết tủa.', 'D. Cần thuốc thử Ba²⁺ tan, môi trường phù hợp và kiểm soát ion gây nhiễu/mẫu đối chứng.'],
    correctAnswer: 'D', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-sulfate-identification'], subTypeId: 'chem11-ns-st-sulfate-test', practiceRole: 'mastery_holdout', representationType: 'table',
    misconceptionId: 'chem11-mis-sulfate-any-white-precipitate', isMasteryHoldout: true, estimatedSeconds: 75
  },
  {
    id: 'chem11-ns-q213', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt32',
    content: 'Bảng kết quả: mẫu X thêm BaCl₂ trong môi trường phù hợp tạo kết tủa trắng bền; mẫu trắng không kết tủa. Kết luận hợp lí nhất là',
    responseType: 'single_choice',
    options: ['A. Dữ liệu ủng hộ mẫu X chứa sulfate, cần đối chiếu đầy đủ quy trình và nhiễu.', 'B. Mẫu chắc chắn chứa chloride mà không có sulfate.', 'C. BaCl₂ đã biến thành kim loại.', 'D. Mẫu trắng chứng minh thuốc thử hỏng.'],
    correctAnswer: 'A', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-sulfate-identification'], subTypeId: 'chem11-ns-st-sulfate-data', practiceRole: 'near_transfer', representationType: 'table', estimatedSeconds: 70
  },
  {
    id: 'chem11-ns-q214', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt32',
    content: 'Một mẫu tạo 0,010 mol BaSO₄ khi sulfate kết tủa hoàn toàn. Khối lượng BaSO₄ thu được, lấy M = 233 g/mol, là',
    responseType: 'single_choice',
    options: ['A. 0,233 g.', 'B. 2,33 g.', 'C. 23,3 g.', 'D. 233 g.'],
    correctAnswer: 'B', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-sulfate-identification'], subTypeId: 'chem11-ns-st-sulfate-data', practiceRole: 'far_transfer', representationType: 'equation', estimatedSeconds: 65
  },
  {
    id: 'chem11-ns-q215', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt32',
    content: 'Hai mẫu đều tạo kết tủa trắng khi thêm BaCl₂, nhưng một mẫu cũng chứa ion có thể gây nhiễu trong môi trường chưa acid hóa. Cách xử lí tốt nhất là',
    responseType: 'single_choice',
    options: ['A. Kết luận cả hai chắc chắn chỉ chứa sulfate.', 'B. Ngửi trực tiếp.', 'C. Thiết kế lại phép thử với môi trường, mẫu trắng và thuốc thử xác nhận phù hợp trước khi kết luận.', 'D. Bỏ toàn bộ dữ liệu.'],
    correctAnswer: 'C', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-sulfate-identification'], subTypeId: 'chem11-ns-st-sulfate-data', practiceRole: 'misconception_check', representationType: 'experiment',
    misconceptionId: 'chem11-mis-sulfate-any-white-precipitate', estimatedSeconds: 85
  },
  {
    id: 'chem11-ns-q216', subjectId: 'chemistry', topicId: 'chem11-t2', questionTypeId: 'chem11-qt32',
    content: 'Một dung dịch phân bón nghi chứa (NH₄)₂SO₄. Nhóm kiểm tra dùng mẫu trắng, chia mẫu thử: phần một nhận biết NH₄⁺ bằng base và giấy chỉ thị ẩm theo quy trình; phần hai acid hóa phù hợp rồi thêm Ba²⁺ thấy BaSO₄ trắng. Kết luận tốt nhất là',
    responseType: 'single_choice',
    options: ['A. Chỉ có sulfate.', 'B. Chỉ có ammonium.', 'C. Không có ion nào.', 'D. Hai phép thử độc lập cùng ủng hộ sự có mặt của NH₄⁺ và SO₄²⁻, phù hợp với ammonium sulfate.'],
    correctAnswer: 'D', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-ns-sulfate-important-salts', 'chem11-ns-sulfate-identification', 'chem11-ns-ammonium-identification'], subTypeId: 'chem11-ns-st-sulfate-data', practiceRole: 'mastery_holdout', representationType: 'experiment',
    isMasteryHoldout: true, estimatedSeconds: 100
  }
];
