import type { Question } from '@/types';

/** Bốn câu neo cho mỗi micro-type; phần mở rộng bổ sung tám câu còn lại. */
export const g10PhysicsModule1Questions: Question[] = [
  {
    id: 'phy10-m1-q001', subjectId: 'physics', topicId: 'phy10-t1', questionTypeId: 'phy10-qt8',
    content: 'Một hành khách ngồi yên trên toa tàu đang chạy. Nhận xét đúng là', responseType: 'single_choice',
    options: ['A. hành khách đứng yên so với toa tàu nhưng chuyển động so với mặt đất.', 'B. hành khách đứng yên so với mọi vật.', 'C. hành khách chuyển động so với toa tàu.', 'D. tàu đứng yên so với đường ray.'], correctAnswer: 'A', acceptedAnswers: ['A', 'a'], validatorType: 'choice',
    difficulty: 'easy', sourceType: 'manual', outcomeIds: ['PHY10-M1-O01'], competency: 'physical_cognition', cognitiveLevel: 'understanding', estimatedSeconds: 45
  },
  {
    id: 'phy10-m1-q002', subjectId: 'physics', topicId: 'phy10-t1', questionTypeId: 'phy10-qt8',
    content: 'Trên trục Ox chiều dương hướng Đông, một cây cách gốc O 30 m về phía Tây có tọa độ bằng bao nhiêu mét?', responseType: 'short_answer',
    correctAnswer: '-30', acceptedAnswers: ['-30', '-30.0', '-30,0'], validatorType: 'exact', difficulty: 'easy', sourceType: 'manual',
    outcomeIds: ['PHY10-M1-O01'], competency: 'physical_cognition', cognitiveLevel: 'application', estimatedSeconds: 45
  },
  {
    id: 'phy10-m1-q003', subjectId: 'physics', topicId: 'phy10-t1', questionTypeId: 'phy10-qt8',
    content: 'Một thí nghiệm bắt đầu lúc 8 h 15 min và kết thúc lúc 8 h 17 min 30 s. Khoảng thời gian thực hiện bằng bao nhiêu giây?', responseType: 'short_answer',
    correctAnswer: '150', acceptedAnswers: ['150', '150.0', '150,0'], validatorType: 'exact', difficulty: 'medium', sourceType: 'manual',
    outcomeIds: ['PHY10-M1-O01'], competency: 'physical_cognition', cognitiveLevel: 'application', estimatedSeconds: 60
  },
  {
    id: 'phy10-m1-q004', subjectId: 'physics', topicId: 'phy10-t1', questionTypeId: 'phy10-qt8',
    content: 'Hai người dùng hai gốc tọa độ khác nhau nhưng cùng chiều dương để mô tả một xe. Đại lượng nào chắc chắn giống nhau trong cùng một khoảng chuyển động?', responseType: 'single_choice',
    options: ['A. Tọa độ ban đầu.', 'B. Tọa độ cuối.', 'C. Độ dịch chuyển.', 'D. Số chỉ vị trí tại mọi thời điểm.'], correctAnswer: 'C', acceptedAnswers: ['C', 'c'], validatorType: 'choice',
    difficulty: 'hard', sourceType: 'manual', outcomeIds: ['PHY10-M1-O01', 'PHY10-M1-O02'], competency: 'physical_cognition', cognitiveLevel: 'understanding', estimatedSeconds: 65
  },

  {
    id: 'phy10-m1-q013', subjectId: 'physics', topicId: 'phy10-t1', questionTypeId: 'phy10-qt9',
    content: 'Một vật đi thẳng từ x = 2 m đến x = 9 m mà không đổi chiều. Quãng đường đi được là', responseType: 'single_choice',
    options: ['A. 7 m', 'B. 9 m', 'C. 11 m', 'D. −7 m'], correctAnswer: 'A', acceptedAnswers: ['A', 'a'], validatorType: 'choice',
    difficulty: 'easy', sourceType: 'manual', outcomeIds: ['PHY10-M1-O02'], competency: 'physical_cognition', cognitiveLevel: 'application', estimatedSeconds: 40
  },
  {
    id: 'phy10-m1-q014', subjectId: 'physics', topicId: 'phy10-t1', questionTypeId: 'phy10-qt9',
    content: 'Một người đi 60 m về phía Đông rồi 20 m về phía Tây. Chọn chiều Đông dương. Độ dịch chuyển bằng bao nhiêu mét?', responseType: 'short_answer',
    correctAnswer: '40', acceptedAnswers: ['40', '+40', '40.0', '40,0'], validatorType: 'exact', difficulty: 'easy', sourceType: 'manual',
    outcomeIds: ['PHY10-M1-O02'], competency: 'physical_cognition', cognitiveLevel: 'application', estimatedSeconds: 50
  },
  {
    id: 'phy10-m1-q015', subjectId: 'physics', topicId: 'phy10-t1', questionTypeId: 'phy10-qt9',
    content: 'Một vận động viên chạy trọn một vòng sân dài 400 m và trở lại vạch xuất phát. Cặp giá trị (quãng đường; độ lớn độ dịch chuyển) là', responseType: 'single_choice',
    options: ['A. (400 m; 400 m)', 'B. (0 m; 400 m)', 'C. (400 m; 0 m)', 'D. (0 m; 0 m)'], correctAnswer: 'C', acceptedAnswers: ['C', 'c'], validatorType: 'choice',
    difficulty: 'medium', sourceType: 'manual', outcomeIds: ['PHY10-M1-O02'], competency: 'physical_cognition', cognitiveLevel: 'understanding', estimatedSeconds: 50
  },
  {
    id: 'phy10-m1-q016', subjectId: 'physics', topicId: 'phy10-t1', questionTypeId: 'phy10-qt9',
    content: 'Vật đi từ x = −5 m đến x = 8 m, sau đó quay lại x = −1 m. Quãng đường và độ dịch chuyển lần lượt là', responseType: 'single_choice',
    options: ['A. 22 m và 4 m', 'B. 4 m và 22 m', 'C. 18 m và −4 m', 'D. 22 m và −4 m'], correctAnswer: 'A', acceptedAnswers: ['A', 'a'], validatorType: 'choice',
    difficulty: 'hard', sourceType: 'manual', outcomeIds: ['PHY10-M1-O02'], competency: 'physical_cognition', cognitiveLevel: 'application', estimatedSeconds: 80
  },

  {
    id: 'phy10-m1-q025', subjectId: 'physics', topicId: 'phy10-t1', questionTypeId: 'phy10-qt10',
    content: 'Một xe đi 120 m trong 20 s. Tốc độ trung bình bằng bao nhiêu m/s?', responseType: 'short_answer',
    correctAnswer: '6', acceptedAnswers: ['6', '6.0', '6,0'], validatorType: 'exact', difficulty: 'easy', sourceType: 'manual',
    outcomeIds: ['PHY10-M1-O03'], competency: 'physical_cognition', cognitiveLevel: 'application', estimatedSeconds: 40
  },
  {
    id: 'phy10-m1-q026', subjectId: 'physics', topicId: 'phy10-t1', questionTypeId: 'phy10-qt10',
    content: 'Đại lượng do tốc kế trên ô tô chỉ tại một thời điểm là', responseType: 'single_choice',
    options: ['A. quãng đường.', 'B. độ dịch chuyển.', 'C. tốc độ tức thời.', 'D. vận tốc trung bình có hướng.'], correctAnswer: 'C', acceptedAnswers: ['C', 'c'], validatorType: 'choice',
    difficulty: 'easy', sourceType: 'manual', outcomeIds: ['PHY10-M1-O03'], competency: 'physical_cognition', cognitiveLevel: 'recognition', estimatedSeconds: 35
  },
  {
    id: 'phy10-m1-q027', subjectId: 'physics', topicId: 'phy10-t1', questionTypeId: 'phy10-qt10',
    content: 'Một người đi 100 m về Đông trong 20 s rồi 40 m về Tây trong 10 s. Chọn Đông dương. Vận tốc trung bình của cả hành trình bằng bao nhiêu m/s?', responseType: 'short_answer',
    correctAnswer: '2', acceptedAnswers: ['2', '+2', '2.0', '2,0'], validatorType: 'exact', difficulty: 'medium', sourceType: 'manual',
    outcomeIds: ['PHY10-M1-O03'], competency: 'physical_cognition', cognitiveLevel: 'application', estimatedSeconds: 70
  },
  {
    id: 'phy10-m1-q028', subjectId: 'physics', topicId: 'phy10-t1', questionTypeId: 'phy10-qt10',
    content: 'Xe đi nửa quãng đường đầu với 30 km/h và nửa quãng đường sau với 60 km/h. Tốc độ trung bình cả quãng đường là', responseType: 'single_choice',
    options: ['A. 40 km/h', 'B. 45 km/h', 'C. 48 km/h', 'D. 50 km/h'], correctAnswer: 'A', acceptedAnswers: ['A', 'a'], validatorType: 'choice',
    difficulty: 'hard', sourceType: 'manual', outcomeIds: ['PHY10-M1-O03'], competency: 'physical_cognition', cognitiveLevel: 'application', estimatedSeconds: 100
  },

  {
    id: 'phy10-m1-q037', subjectId: 'physics', topicId: 'phy10-t1', questionTypeId: 'phy10-qt11',
    content: 'Một người đi về đầu tàu với tốc độ 2 m/s so với tàu. Tàu chạy cùng chiều với tốc độ 10 m/s so với đất. Tốc độ người so với đất là', responseType: 'single_choice',
    options: ['A. 8 m/s', 'B. 10 m/s', 'C. 12 m/s', 'D. 20 m/s'], correctAnswer: 'C', acceptedAnswers: ['C', 'c'], validatorType: 'choice',
    difficulty: 'easy', sourceType: 'manual', outcomeIds: ['PHY10-M1-O04'], competency: 'physical_cognition', cognitiveLevel: 'application', estimatedSeconds: 50
  },
  {
    id: 'phy10-m1-q038', subjectId: 'physics', topicId: 'phy10-t1', questionTypeId: 'phy10-qt11',
    content: 'Hai xe chạy cùng chiều với tốc độ 72 km/h và 54 km/h. Tốc độ của xe nhanh so với xe chậm bằng bao nhiêu km/h?', responseType: 'short_answer',
    correctAnswer: '18', acceptedAnswers: ['18', '18.0', '18,0'], validatorType: 'exact', difficulty: 'easy', sourceType: 'manual',
    outcomeIds: ['PHY10-M1-O04'], competency: 'physical_cognition', cognitiveLevel: 'application', estimatedSeconds: 45
  },
  {
    id: 'phy10-m1-q039', subjectId: 'physics', topicId: 'phy10-t1', questionTypeId: 'phy10-qt11',
    content: 'Hai xe cách nhau 180 m, chạy ngược chiều về phía nhau với tốc độ 10 m/s và 20 m/s. Sau bao nhiêu giây chúng gặp nhau?', responseType: 'short_answer',
    correctAnswer: '6', acceptedAnswers: ['6', '6.0', '6,0'], validatorType: 'exact', difficulty: 'medium', sourceType: 'manual',
    outcomeIds: ['PHY10-M1-O04'], competency: 'physical_cognition', cognitiveLevel: 'application', estimatedSeconds: 65
  },
  {
    id: 'phy10-m1-q040', subjectId: 'physics', topicId: 'phy10-t1', questionTypeId: 'phy10-qt11',
    content: 'Thuyền hướng vuông góc bờ với tốc độ 3 m/s so với nước; nước chảy 4 m/s dọc bờ. Độ lớn vận tốc thuyền so với bờ là', responseType: 'single_choice',
    options: ['A. 1 m/s', 'B. 5 m/s', 'C. 7 m/s', 'D. 12 m/s'], correctAnswer: 'B', acceptedAnswers: ['B', 'b'], validatorType: 'choice',
    difficulty: 'hard', sourceType: 'manual', outcomeIds: ['PHY10-M1-O04'], competency: 'physical_cognition', cognitiveLevel: 'application', estimatedSeconds: 85
  },

  {
    id: 'phy10-m1-q049', subjectId: 'physics', topicId: 'phy10-t1', questionTypeId: 'phy10-qt12',
    content: 'Đồ thị tọa độ–thời gian là đường thẳng đi qua (0 s; 2 m) và (4 s; 10 m). Vận tốc của vật bằng bao nhiêu m/s?', responseType: 'short_answer',
    correctAnswer: '2', acceptedAnswers: ['2', '2.0', '2,0'], validatorType: 'exact', difficulty: 'easy', sourceType: 'manual',
    outcomeIds: ['PHY10-M1-O05'], competency: 'physical_cognition', cognitiveLevel: 'application', estimatedSeconds: 55
  },
  {
    id: 'phy10-m1-q050', subjectId: 'physics', topicId: 'phy10-t1', questionTypeId: 'phy10-qt12',
    content: 'Một đoạn đồ thị tọa độ–thời gian nằm ngang từ t = 3 s đến t = 7 s. Trong khoảng này vật', responseType: 'single_choice',
    options: ['A. chuyển động nhanh dần.', 'B. chuyển động theo chiều âm.', 'C. đứng yên.', 'D. có gia tốc dương.'], correctAnswer: 'C', acceptedAnswers: ['C', 'c'], validatorType: 'choice',
    difficulty: 'easy', sourceType: 'manual', outcomeIds: ['PHY10-M1-O05'], competency: 'physical_cognition', cognitiveLevel: 'understanding', estimatedSeconds: 40
  },
  {
    id: 'phy10-m1-q051', subjectId: 'physics', topicId: 'phy10-t1', questionTypeId: 'phy10-qt12',
    content: 'Hai vật có phương trình $x_A=2+3t$ và $x_B=14-t$ (m, s). Thời điểm hai vật gặp nhau bằng bao nhiêu giây?', responseType: 'short_answer',
    correctAnswer: '3', acceptedAnswers: ['3', '3.0', '3,0'], validatorType: 'exact', difficulty: 'medium', sourceType: 'manual',
    outcomeIds: ['PHY10-M1-O05'], competency: 'physical_cognition', cognitiveLevel: 'application', estimatedSeconds: 70
  },
  {
    id: 'phy10-m1-q052', subjectId: 'physics', topicId: 'phy10-t1', questionTypeId: 'phy10-qt12',
    content: 'Đường biểu diễn x–t là đường thẳng dốc xuống từ x = 8 m tại t = 0 đến x = −4 m tại t = 6 s. Kết luận đúng là', responseType: 'single_choice',
    options: ['A. vật chậm dần đều.', 'B. vật chuyển động thẳng đều theo chiều âm với v = −2 m/s.', 'C. vật có gia tốc −2 m/s².', 'D. vật luôn ở tọa độ âm.'], correctAnswer: 'B', acceptedAnswers: ['B', 'b'], validatorType: 'choice',
    difficulty: 'hard', sourceType: 'manual', outcomeIds: ['PHY10-M1-O05'], competency: 'physical_cognition', cognitiveLevel: 'understanding', estimatedSeconds: 80
  },

  {
    id: 'phy10-m1-q061', subjectId: 'physics', topicId: 'phy10-t1', questionTypeId: 'phy10-qt13',
    content: 'Vận tốc tăng từ 4 m/s lên 10 m/s trong 3 s. Gia tốc trung bình bằng bao nhiêu m/s²?', responseType: 'short_answer',
    correctAnswer: '2', acceptedAnswers: ['2', '2.0', '2,0'], validatorType: 'exact', difficulty: 'easy', sourceType: 'manual',
    outcomeIds: ['PHY10-M1-O06'], competency: 'physical_cognition', cognitiveLevel: 'application', estimatedSeconds: 45
  },
  {
    id: 'phy10-m1-q062', subjectId: 'physics', topicId: 'phy10-t1', questionTypeId: 'phy10-qt13',
    content: 'Đơn vị SI của gia tốc là', responseType: 'single_choice',
    options: ['A. m/s', 'B. m/s²', 'C. m²/s', 'D. N/s'], correctAnswer: 'B', acceptedAnswers: ['B', 'b'], validatorType: 'choice',
    difficulty: 'easy', sourceType: 'manual', outcomeIds: ['PHY10-M1-O06'], competency: 'physical_cognition', cognitiveLevel: 'recognition', estimatedSeconds: 30
  },
  {
    id: 'phy10-m1-q063', subjectId: 'physics', topicId: 'phy10-t1', questionTypeId: 'phy10-qt13',
    content: 'Chọn chiều dương sang phải. Vật đang có v = −6 m/s và a = −2 m/s². Vật đang', responseType: 'single_choice',
    options: ['A. nhanh dần theo chiều âm.', 'B. chậm dần theo chiều âm.', 'C. nhanh dần theo chiều dương.', 'D. đứng yên.'], correctAnswer: 'A', acceptedAnswers: ['A', 'a'], validatorType: 'choice',
    difficulty: 'medium', sourceType: 'manual', outcomeIds: ['PHY10-M1-O06'], competency: 'physical_cognition', cognitiveLevel: 'understanding', estimatedSeconds: 55
  },
  {
    id: 'phy10-m1-q064', subjectId: 'physics', topicId: 'phy10-t1', questionTypeId: 'phy10-qt13',
    content: 'Vận tốc của vật đổi từ +8 m/s thành −4 m/s trong 2 s. Gia tốc trung bình bằng bao nhiêu m/s²?', responseType: 'short_answer',
    correctAnswer: '-6', acceptedAnswers: ['-6', '-6.0', '-6,0'], validatorType: 'exact', difficulty: 'hard', sourceType: 'manual',
    outcomeIds: ['PHY10-M1-O06'], competency: 'physical_cognition', cognitiveLevel: 'application', estimatedSeconds: 70
  },

  {
    id: 'phy10-m1-q073', subjectId: 'physics', topicId: 'phy10-t1', questionTypeId: 'phy10-qt14',
    content: 'Vật có v₀ = 2 m/s, a = 3 m/s². Sau 4 s, vận tốc bằng bao nhiêu m/s?', responseType: 'short_answer',
    correctAnswer: '14', acceptedAnswers: ['14', '14.0', '14,0'], validatorType: 'exact', difficulty: 'easy', sourceType: 'manual',
    outcomeIds: ['PHY10-M1-O07'], competency: 'physical_cognition', cognitiveLevel: 'application', estimatedSeconds: 45
  },
  {
    id: 'phy10-m1-q074', subjectId: 'physics', topicId: 'phy10-t1', questionTypeId: 'phy10-qt14',
    content: 'Vật xuất phát từ nghỉ, gia tốc 2 m/s² trong 3 s. Độ dịch chuyển bằng bao nhiêu mét?', responseType: 'short_answer',
    correctAnswer: '9', acceptedAnswers: ['9', '9.0', '9,0'], validatorType: 'exact', difficulty: 'easy', sourceType: 'manual',
    outcomeIds: ['PHY10-M1-O07'], competency: 'physical_cognition', cognitiveLevel: 'application', estimatedSeconds: 55
  },
  {
    id: 'phy10-m1-q075', subjectId: 'physics', topicId: 'phy10-t1', questionTypeId: 'phy10-qt14',
    content: 'Xe đang chạy 20 m/s thì hãm với gia tốc −4 m/s². Thời gian đến khi dừng là bao nhiêu giây?', responseType: 'short_answer',
    correctAnswer: '5', acceptedAnswers: ['5', '5.0', '5,0'], validatorType: 'exact', difficulty: 'medium', sourceType: 'manual',
    outcomeIds: ['PHY10-M1-O07'], competency: 'physical_cognition', cognitiveLevel: 'application', estimatedSeconds: 65
  },
  {
    id: 'phy10-m1-q076', subjectId: 'physics', topicId: 'phy10-t1', questionTypeId: 'phy10-qt14',
    content: 'Xe chạy 10 m/s, tăng tốc đều trên quãng đường 75 m và đạt 20 m/s. Gia tốc của xe bằng bao nhiêu m/s²?', responseType: 'short_answer',
    correctAnswer: '2', acceptedAnswers: ['2', '2.0', '2,0'], validatorType: 'exact', difficulty: 'hard', sourceType: 'manual',
    outcomeIds: ['PHY10-M1-O07'], competency: 'physical_cognition', cognitiveLevel: 'application', estimatedSeconds: 95
  },

  {
    id: 'phy10-m1-q085', subjectId: 'physics', topicId: 'phy10-t1', questionTypeId: 'phy10-qt15',
    content: 'Trên đồ thị v–t, vận tốc tăng đều từ 2 m/s tại t = 0 lên 8 m/s tại t = 3 s. Gia tốc bằng bao nhiêu m/s²?', responseType: 'short_answer',
    correctAnswer: '2', acceptedAnswers: ['2', '2.0', '2,0'], validatorType: 'exact', difficulty: 'easy', sourceType: 'manual',
    outcomeIds: ['PHY10-M1-O08'], competency: 'physical_cognition', cognitiveLevel: 'application', estimatedSeconds: 50
  },
  {
    id: 'phy10-m1-q086', subjectId: 'physics', topicId: 'phy10-t1', questionTypeId: 'phy10-qt15',
    content: 'Vật chuyển động với v = 5 m/s không đổi trong 4 s. Diện tích dưới đồ thị v–t, cũng là độ dịch chuyển, bằng bao nhiêu mét?', responseType: 'short_answer',
    correctAnswer: '20', acceptedAnswers: ['20', '20.0', '20,0'], validatorType: 'exact', difficulty: 'easy', sourceType: 'manual',
    outcomeIds: ['PHY10-M1-O08'], competency: 'physical_cognition', cognitiveLevel: 'application', estimatedSeconds: 45
  },
  {
    id: 'phy10-m1-q087', subjectId: 'physics', topicId: 'phy10-t1', questionTypeId: 'phy10-qt15',
    content: 'Vận tốc tăng tuyến tính từ 0 lên 10 m/s trong 4 s. Độ dịch chuyển trong 4 s bằng bao nhiêu mét?', responseType: 'short_answer',
    correctAnswer: '20', acceptedAnswers: ['20', '20.0', '20,0'], validatorType: 'exact', difficulty: 'medium', sourceType: 'manual',
    outcomeIds: ['PHY10-M1-O08'], competency: 'physical_cognition', cognitiveLevel: 'application', estimatedSeconds: 65
  },
  {
    id: 'phy10-m1-q088', subjectId: 'physics', topicId: 'phy10-t1', questionTypeId: 'phy10-qt15',
    content: 'Từ t = 0 đến 2 s, v = 4 m/s; từ 2 đến 5 s, v = −2 m/s. Độ dịch chuyển và quãng đường lần lượt là', responseType: 'single_choice',
    options: ['A. 2 m và 14 m', 'B. 14 m và 2 m', 'C. 2 m và 2 m', 'D. −2 m và 14 m'], correctAnswer: 'A', acceptedAnswers: ['A', 'a'], validatorType: 'choice',
    difficulty: 'hard', sourceType: 'manual', outcomeIds: ['PHY10-M1-O08'], competency: 'physical_cognition', cognitiveLevel: 'application', estimatedSeconds: 90
  },

  {
    id: 'phy10-m1-q097', subjectId: 'physics', topicId: 'phy10-t1', questionTypeId: 'phy10-qt16',
    content: 'Bỏ qua sức cản không khí, hai vật có khối lượng khác nhau được thả cùng độ cao, cùng lúc. Khi đó', responseType: 'single_choice',
    options: ['A. vật nặng chạm đất trước.', 'B. vật nhẹ chạm đất trước.', 'C. hai vật chạm đất cùng lúc.', 'D. chưa thể biết vì thiếu khối lượng riêng.'], correctAnswer: 'C', acceptedAnswers: ['C', 'c'], validatorType: 'choice',
    difficulty: 'easy', sourceType: 'manual', outcomeIds: ['PHY10-M1-O09'], competency: 'physical_cognition', cognitiveLevel: 'understanding', estimatedSeconds: 40
  },
  {
    id: 'phy10-m1-q098', subjectId: 'physics', topicId: 'phy10-t1', questionTypeId: 'phy10-qt16',
    content: 'Thả vật từ nghỉ, lấy g = 10 m/s². Sau 2 s, tốc độ bằng bao nhiêu m/s?', responseType: 'short_answer',
    correctAnswer: '20', acceptedAnswers: ['20', '20.0', '20,0'], validatorType: 'exact', difficulty: 'easy', sourceType: 'manual',
    outcomeIds: ['PHY10-M1-O09'], competency: 'physical_cognition', cognitiveLevel: 'application', estimatedSeconds: 40
  },
  {
    id: 'phy10-m1-q099', subjectId: 'physics', topicId: 'phy10-t1', questionTypeId: 'phy10-qt16',
    content: 'Thả vật từ độ cao 45 m, lấy g = 10 m/s². Thời gian chạm đất bằng bao nhiêu giây?', responseType: 'short_answer',
    correctAnswer: '3', acceptedAnswers: ['3', '3.0', '3,0'], validatorType: 'exact', difficulty: 'medium', sourceType: 'manual',
    outcomeIds: ['PHY10-M1-O09'], competency: 'physical_cognition', cognitiveLevel: 'application', estimatedSeconds: 65
  },
  {
    id: 'phy10-m1-q100', subjectId: 'physics', topicId: 'phy10-t1', questionTypeId: 'phy10-qt16',
    content: 'Ném thẳng đứng vật lên với v₀ = 20 m/s, lấy g = 10 m/s², bỏ qua cản. Độ cao cực đại so với điểm ném là bao nhiêu mét?', responseType: 'short_answer',
    correctAnswer: '20', acceptedAnswers: ['20', '20.0', '20,0'], validatorType: 'exact', difficulty: 'hard', sourceType: 'manual',
    outcomeIds: ['PHY10-M1-O09'], competency: 'physical_cognition', cognitiveLevel: 'application', estimatedSeconds: 90
  },

  {
    id: 'phy10-m1-q109', subjectId: 'physics', topicId: 'phy10-t1', questionTypeId: 'phy10-qt17',
    content: 'Trong chuyển động ném ngang bỏ qua sức cản, chuyển động thành phần theo phương ngang là', responseType: 'single_choice',
    options: ['A. rơi tự do.', 'B. thẳng đều.', 'C. nhanh dần đều với gia tốc g.', 'D. dao động điều hòa.'], correctAnswer: 'B', acceptedAnswers: ['B', 'b'], validatorType: 'choice',
    difficulty: 'easy', sourceType: 'manual', outcomeIds: ['PHY10-M1-O10'], competency: 'physical_cognition', cognitiveLevel: 'recognition', estimatedSeconds: 40
  },
  {
    id: 'phy10-m1-q110', subjectId: 'physics', topicId: 'phy10-t1', questionTypeId: 'phy10-qt17',
    content: 'Ném ngang từ độ cao 20 m, lấy g = 10 m/s². Thời gian chạm đất bằng bao nhiêu giây?', responseType: 'short_answer',
    correctAnswer: '2', acceptedAnswers: ['2', '2.0', '2,0'], validatorType: 'exact', difficulty: 'easy', sourceType: 'manual',
    outcomeIds: ['PHY10-M1-O10'], competency: 'physical_cognition', cognitiveLevel: 'application', estimatedSeconds: 50
  },
  {
    id: 'phy10-m1-q111', subjectId: 'physics', topicId: 'phy10-t1', questionTypeId: 'phy10-qt17',
    content: 'Vật được ném ngang với tốc độ 15 m/s từ độ cao 20 m, lấy g = 10 m/s². Tầm xa bằng bao nhiêu mét?', responseType: 'short_answer',
    correctAnswer: '30', acceptedAnswers: ['30', '30.0', '30,0'], validatorType: 'exact', difficulty: 'medium', sourceType: 'manual',
    outcomeIds: ['PHY10-M1-O10'], competency: 'physical_cognition', cognitiveLevel: 'application', estimatedSeconds: 70
  },
  {
    id: 'phy10-m1-q112', subjectId: 'physics', topicId: 'phy10-t1', questionTypeId: 'phy10-qt17',
    content: 'Hai vật được ném ngang đồng thời từ cùng độ cao với tốc độ ban đầu 10 m/s và 20 m/s. Bỏ qua sức cản. Nhận xét đúng là', responseType: 'single_choice',
    options: ['A. vật ném nhanh hơn chạm đất sau.', 'B. vật ném nhanh hơn chạm đất trước.', 'C. hai vật chạm đất cùng lúc nhưng tầm xa khác nhau.', 'D. hai vật có cùng tầm xa.'], correctAnswer: 'C', acceptedAnswers: ['C', 'c'], validatorType: 'choice',
    difficulty: 'hard', sourceType: 'manual', outcomeIds: ['PHY10-M1-O10'], competency: 'physical_cognition', cognitiveLevel: 'understanding', estimatedSeconds: 70
  },

  {
    id: 'phy10-m1-q121', subjectId: 'physics', topicId: 'phy10-t1', questionTypeId: 'phy10-qt18',
    content: 'Một tấm chắn sáng dài 0,020 m đi qua cổng quang trong 0,010 s. Tốc độ tức thời gần đúng bằng bao nhiêu m/s?', responseType: 'short_answer',
    correctAnswer: '2', acceptedAnswers: ['2', '2.0', '2,0'], validatorType: 'exact', difficulty: 'easy', sourceType: 'manual',
    outcomeIds: ['PHY10-M1-O11'], competency: 'physical_inquiry', cognitiveLevel: 'application', estimatedSeconds: 50
  },
  {
    id: 'phy10-m1-q122', subjectId: 'physics', topicId: 'phy10-t1', questionTypeId: 'phy10-qt18',
    content: 'Muốn đo tốc độ trung bình của xe trên một đoạn thẳng, cặp đại lượng cần đo trực tiếp là', responseType: 'single_choice',
    options: ['A. khối lượng và lực.', 'B. quãng đường và thời gian.', 'C. nhiệt độ và thể tích.', 'D. gia tốc và công suất.'], correctAnswer: 'B', acceptedAnswers: ['B', 'b'], validatorType: 'choice',
    difficulty: 'easy', sourceType: 'manual', outcomeIds: ['PHY10-M1-O11'], competency: 'physical_inquiry', cognitiveLevel: 'recognition', estimatedSeconds: 35
  },
  {
    id: 'phy10-m1-q123', subjectId: 'physics', topicId: 'phy10-t1', questionTypeId: 'phy10-qt18',
    stimulus: { id: 'phy10-m1-st123', title: 'Đo rơi tự do', dataTable: { caption: 'Số liệu độ cao và thời gian', columns: [{ key: 'h', label: 'h', unit: 'm' }, { key: 't', label: 't', unit: 's' }], rows: [{ h: 0.2, t: 0.2 }, { h: 0.8, t: 0.4 }, { h: 1.8, t: 0.6 }] } },
    content: 'Dùng $g=2h/t^2$, ba phép tính cho giá trị g bằng', responseType: 'single_choice', options: ['A. đều bằng 5 m/s².', 'B. đều bằng 10 m/s².', 'C. lần lượt 10; 5; 2 m/s².', 'D. không thể tính.'], correctAnswer: 'B', acceptedAnswers: ['B', 'b'], validatorType: 'choice',
    difficulty: 'medium', sourceType: 'manual', outcomeIds: ['PHY10-M1-O12'], competency: 'physical_inquiry', cognitiveLevel: 'application', estimatedSeconds: 100
  },
  {
    id: 'phy10-m1-q124', subjectId: 'physics', topicId: 'phy10-t1', questionTypeId: 'phy10-qt18',
    content: 'Khi đo g bằng cách thả vật và bấm đồng hồ tay, cải tiến nào giảm mạnh sai số phản ứng?', responseType: 'single_choice',
    options: ['A. Thả từ độ cao rất nhỏ và chỉ đo một lần.', 'B. Dùng cổng quang/cảm biến thời gian, đo lặp ở nhiều độ cao.', 'C. Làm tròn thời gian đến 0,001 s dù đồng hồ chỉ hiện 0,1 s.', 'D. Sửa số liệu để g gần 9,8 m/s².'], correctAnswer: 'B', acceptedAnswers: ['B', 'b'], validatorType: 'choice',
    difficulty: 'hard', sourceType: 'manual', outcomeIds: ['PHY10-M1-O12'], competency: 'physical_inquiry', cognitiveLevel: 'application', estimatedSeconds: 65
  }
];
