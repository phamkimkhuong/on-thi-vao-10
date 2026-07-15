import type { Question } from '@/types';

export const m1AssessmentQuestions: Question[] = [
  {
    id: 'chem10-assess-m1-cp-a-q01', subjectId: 'chemistry', topicId: 'chem10-t1', questionTypeId: 'chem10-qt1',
    content: 'Nguyên tử trung hòa X có 15 proton và 16 neutron. Phát biểu nào đúng?',
    options: ['A. X có 15 electron và số khối 31', 'B. X có 16 electron và số khối 31', 'C. X có 15 electron và số khối 16', 'D. X có 31 electron và 15 neutron'],
    difficulty: 'easy', sourceType: 'mock_exam', correctAnswer: 'A', acceptedAnswers: ['A', 'a'], validatorType: 'choice',
    points: 0.5, outcomeIds: ['chem10-atom-particles'], competency: 'chemical_cognition', cognitiveLevel: 'understanding', estimatedSeconds: 60
  },
  {
    id: 'chem10-assess-m1-cp-a-q02', subjectId: 'chemistry', topicId: 'chem10-t1', questionTypeId: 'chem10-qt2',
    content: 'Cặp hạt nào sau đây là hai đồng vị của cùng một nguyên tố?',
    options: ['A. Hai hạt có cùng số neutron nhưng khác số proton', 'B. Hai hạt có cùng số khối nhưng khác số proton', 'C. Hai hạt có cùng số proton nhưng khác số neutron', 'D. Hai hạt có cùng số electron nhưng khác số proton'],
    difficulty: 'easy', sourceType: 'mock_exam', correctAnswer: 'C', acceptedAnswers: ['C', 'c'], validatorType: 'choice',
    points: 0.5, outcomeIds: ['chem10-atom-symbol', 'chem10-atom-isotope'], competency: 'chemical_cognition', cognitiveLevel: 'understanding', estimatedSeconds: 60
  },
  {
    id: 'chem10-assess-m1-cp-a-q03', subjectId: 'chemistry', topicId: 'chem10-t1', questionTypeId: 'chem10-qt3',
    content: 'Một nguyên tố có hai đồng vị khối lượng 63 và 65, độ phổ biến lần lượt là 70% và 30%. Nguyên tử khối trung bình của nguyên tố là bao nhiêu?',
    options: ['A. 63,0', 'B. 63,6', 'C. 64,0', 'D. 64,4'],
    difficulty: 'medium', sourceType: 'mock_exam', correctAnswer: 'B', acceptedAnswers: ['B', 'b'], validatorType: 'choice',
    points: 0.5, outcomeIds: ['chem10-atom-isotope'], competency: 'chemical_inquiry', cognitiveLevel: 'application', estimatedSeconds: 90
  },
  {
    id: 'chem10-assess-m1-cp-a-q04', subjectId: 'chemistry', topicId: 'chem10-t1', questionTypeId: 'chem10-qt3',
    content: 'Trên phổ khối của một nguyên tố, đỉnh tại m/z = 11 cao gấp 4 lần đỉnh tại m/z = 10. Kết luận phù hợp nhất là gì?',
    options: ['A. Đồng vị khối lượng 10 chiếm khoảng 80%', 'B. Đồng vị khối lượng 11 chiếm khoảng 80%', 'C. Đồng vị khối lượng 11 có số proton lớn gấp 4 lần', 'D. Nguyên tử khối trung bình bằng 10,5'],
    difficulty: 'medium', sourceType: 'mock_exam', correctAnswer: 'B', acceptedAnswers: ['B', 'b'], validatorType: 'choice',
    points: 0.5, outcomeIds: ['chem10-atom-spectrum'], competency: 'chemical_inquiry', cognitiveLevel: 'application', estimatedSeconds: 90
  },
  {
    id: 'chem10-assess-m1-cp-a-q05', subjectId: 'chemistry', topicId: 'chem10-t1', questionTypeId: 'chem10-qt4',
    content: 'Mô tả nào phản ánh đúng nhất ý nghĩa của orbital nguyên tử?',
    options: ['A. Đường tròn cố định mà electron chuyển động trên đó', 'B. Vùng không gian có xác suất tìm thấy electron lớn', 'C. Khoảng cách cố định từ electron đến hạt nhân', 'D. Phần không gian chỉ chứa proton và neutron'],
    difficulty: 'medium', sourceType: 'mock_exam', correctAnswer: 'B', acceptedAnswers: ['B', 'b'], validatorType: 'choice',
    points: 0.5, outcomeIds: ['chem10-atom-model'], competency: 'chemical_cognition', cognitiveLevel: 'understanding', estimatedSeconds: 60
  },
  {
    id: 'chem10-assess-m1-cp-a-q06', subjectId: 'chemistry', topicId: 'chem10-t1', questionTypeId: 'chem10-qt5',
    content: 'Phân lớp 3p có bao nhiêu orbital và chứa tối đa bao nhiêu electron?',
    options: ['A. 1 orbital, 2 electron', 'B. 3 orbital, 6 electron', 'C. 5 orbital, 10 electron', 'D. 9 orbital, 18 electron'],
    difficulty: 'easy', sourceType: 'mock_exam', correctAnswer: 'B', acceptedAnswers: ['B', 'b'], validatorType: 'choice',
    points: 0.5, outcomeIds: ['chem10-atom-orbital'], competency: 'chemical_cognition', cognitiveLevel: 'recognition', estimatedSeconds: 45
  },
  {
    id: 'chem10-assess-m1-cp-a-q07', subjectId: 'chemistry', topicId: 'chem10-t1', questionTypeId: 'chem10-qt6',
    content: 'Cấu hình electron nào đúng cho nguyên tử có Z = 16?',
    options: ['A. $1s^2 2s^2 2p^6 3s^2 3p^4$', 'B. $1s^2 2s^2 2p^6 3s^2 3p^6$', 'C. $1s^2 2s^2 2p^6 3s^1 3p^5$', 'D. $1s^2 2s^2 2p^4 3s^2 3p^6$'],
    difficulty: 'medium', sourceType: 'mock_exam', correctAnswer: 'A', acceptedAnswers: ['A', 'a'], validatorType: 'choice',
    points: 0.5, outcomeIds: ['chem10-atom-configuration'], competency: 'chemical_cognition', cognitiveLevel: 'application', estimatedSeconds: 90
  },
  {
    id: 'chem10-assess-m1-cp-a-q08', subjectId: 'chemistry', topicId: 'chem10-t1', questionTypeId: 'chem10-qt7',
    content: 'Nguyên tử X có cấu hình electron lớp ngoài cùng $3s^2 3p^5$. Nhận định nào hợp lí nhất?',
    options: ['A. X là kim loại và có xu hướng nhường 1 electron', 'B. X là phi kim và có xu hướng nhận 1 electron', 'C. X là khí hiếm có lớp ngoài cùng bão hòa', 'D. X là kim loại và có xu hướng nhận 5 electron'],
    difficulty: 'medium', sourceType: 'mock_exam', correctAnswer: 'B', acceptedAnswers: ['B', 'b'], validatorType: 'choice',
    points: 0.5, outcomeIds: ['chem10-atom-property'], competency: 'chemical_application', cognitiveLevel: 'understanding', estimatedSeconds: 75
  },
  {
    id: 'chem10-assess-m1-cp-a-q09', subjectId: 'chemistry', topicId: 'chem10-t1', questionTypeId: 'chem10-qt2',
    content: 'Nguyên tử $^{56}_{26}Fe$ có bao nhiêu neutron? Chỉ nhập một số nguyên.',
    difficulty: 'easy', sourceType: 'mock_exam', correctAnswer: '30', acceptedAnswers: ['30'], validatorType: 'number',
    points: 1.5, outcomeIds: ['chem10-atom-symbol'], competency: 'chemical_cognition', cognitiveLevel: 'application', estimatedSeconds: 60
  },
  {
    id: 'chem10-assess-m1-cp-a-q10', subjectId: 'chemistry', topicId: 'chem10-t1', questionTypeId: 'chem10-qt3',
    content: 'Nguyên tố X có hai đồng vị $^{35}X$ chiếm 75% và $^{37}X$ chiếm 25%. Tính nguyên tử khối trung bình của X.',
    difficulty: 'medium', sourceType: 'mock_exam', correctAnswer: '35.5', acceptedAnswers: ['35.5', '35,5'], validatorType: 'number',
    points: 1.5, outcomeIds: ['chem10-atom-isotope'], competency: 'chemical_cognition', cognitiveLevel: 'application', estimatedSeconds: 120
  },
  {
    id: 'chem10-assess-m1-cp-a-q11', subjectId: 'chemistry', topicId: 'chem10-t1', questionTypeId: 'chem10-qt6',
    content: 'Ở trạng thái cơ bản, nguyên tử có cấu hình electron $1s^2 2s^2 2p^6 3s^2 3p^4$ có bao nhiêu electron độc thân?',
    difficulty: 'hard', sourceType: 'mock_exam', correctAnswer: '2', acceptedAnswers: ['2'], validatorType: 'number',
    points: 1.5, outcomeIds: ['chem10-atom-configuration'], competency: 'chemical_cognition', cognitiveLevel: 'application', estimatedSeconds: 120
  },
  {
    id: 'chem10-assess-m1-cp-a-q12', subjectId: 'chemistry', topicId: 'chem10-t1', questionTypeId: 'chem10-qt6',
    content: 'Một nguyên tử trung hòa có cấu hình electron $1s^2 2s^2 2p^6 3s^2 3p^6 4s^1$. Số hiệu nguyên tử Z của nguyên tố bằng bao nhiêu?',
    difficulty: 'medium', sourceType: 'mock_exam', correctAnswer: '19', acceptedAnswers: ['19'], validatorType: 'number',
    points: 1.5, outcomeIds: ['chem10-atom-configuration', 'chem10-atom-property'], competency: 'chemical_application', cognitiveLevel: 'application', estimatedSeconds: 90
  }
];
