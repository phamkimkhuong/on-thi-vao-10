import type { Question } from '@/types';

/**
 * Câu hỏi mở rộng Module 1.
 * Mỗi dạng được bổ sung 3 câu mới theo nhịp: thông hiểu -> vận dụng -> vận dụng cao.
 * Không tái sử dụng câu hỏi trong ngân hàng kiểm tra/thi thử.
 */
export const m1ExpansionQuestions: Question[] = [
  {
    id: 'chem10-m1-qt1-e1', subjectId: 'chemistry', topicId: 'chem10-t1', questionTypeId: 'chem10-qt1',
    content: 'Ion $X^{2-}$ có 16 proton và 18 neutron. Số electron và số khối của ion lần lượt là:\nA. 14 và 34\nB. 16 và 32\nC. 18 và 34\nD. 18 và 32',
    difficulty: 'medium', sourceType: 'manual', correctAnswer: 'C', acceptedAnswers: ['C', 'c'], validatorType: 'choice'
  },
  {
    id: 'chem10-m1-qt1-e2', subjectId: 'chemistry', topicId: 'chem10-t1', questionTypeId: 'chem10-qt1',
    content: 'Một nguyên tử trung hòa X có tổng số hạt proton, neutron và electron là 46; số hạt mang điện nhiều hơn số hạt không mang điện là 14. Số proton của X bằng:\nA. 14\nB. 15\nC. 16\nD. 17',
    difficulty: 'hard', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B', 'b'], validatorType: 'choice'
  },
  {
    id: 'chem10-m1-qt1-e3', subjectId: 'chemistry', topicId: 'chem10-t1', questionTypeId: 'chem10-qt1',
    content: 'Hai tiểu phân $X^{2+}$ và $Y^-$ đều có 18 electron. Hạt nhân X nhiều hơn hạt nhân Y 3 proton. Kết luận nào đúng?\nA. X có Z = 18, Y có Z = 15\nB. X có Z = 20, Y có Z = 17\nC. X có Z = 16, Y có Z = 19\nD. X và Y là hai đồng vị',
    difficulty: 'hard', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B', 'b'], validatorType: 'choice'
  },

  {
    id: 'chem10-m1-qt2-e1', subjectId: 'chemistry', topicId: 'chem10-t1', questionTypeId: 'chem10-qt2',
    content: 'Ion sulfide có 16 proton, 18 neutron và 18 electron. Kí hiệu nào đúng?\nA. $^{34}_{16}S^{2-}$\nB. $^{34}_{18}S^{2-}$\nC. $^{32}_{16}S^{2+}$\nD. $^{18}_{16}S^-$',
    difficulty: 'medium', sourceType: 'manual', correctAnswer: 'A', acceptedAnswers: ['A', 'a'], validatorType: 'choice'
  },
  {
    id: 'chem10-m1-qt2-e2', subjectId: 'chemistry', topicId: 'chem10-t1', questionTypeId: 'chem10-qt2',
    content: 'Cho $^{23}_{11}Na^+$ và $^{20}_{10}Ne$. Nhận xét đúng là:\nA. Hai tiểu phân là đồng vị\nB. Hai tiểu phân có cùng số proton\nC. Hai tiểu phân có cùng số electron nhưng khác số neutron\nD. Hai tiểu phân có cùng số khối',
    difficulty: 'medium', sourceType: 'manual', correctAnswer: 'C', acceptedAnswers: ['C', 'c'], validatorType: 'choice'
  },
  {
    id: 'chem10-m1-qt2-e3', subjectId: 'chemistry', topicId: 'chem10-t1', questionTypeId: 'chem10-qt2',
    content: 'Tiểu phân $^{A}_{Z}X^{3+}$ có tổng số proton, neutron và electron là 27; số neutron bằng số proton. Giá trị của A và Z lần lượt là:\nA. 20 và 10\nB. 21 và 10\nC. 22 và 11\nD. 24 và 12',
    difficulty: 'hard', sourceType: 'manual', correctAnswer: 'A', acceptedAnswers: ['A', 'a'], validatorType: 'choice'
  },

  {
    id: 'chem10-m1-qt3-e1', subjectId: 'chemistry', topicId: 'chem10-t1', questionTypeId: 'chem10-qt3',
    content: 'Nguyên tố X có hai đồng vị $^{24}X$ và $^{26}X$ với tỉ lệ số nguyên tử 3 : 1. Nguyên tử khối trung bình của X là:\nA. 24,0\nB. 24,5\nC. 25,0\nD. 25,5',
    difficulty: 'medium', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B', 'b'], validatorType: 'choice'
  },
  {
    id: 'chem10-m1-qt3-e2', subjectId: 'chemistry', topicId: 'chem10-t1', questionTypeId: 'chem10-qt3',
    content: 'Chlorine có hai đồng vị $^{35}Cl$ và $^{37}Cl$. Biết nguyên tử khối trung bình bằng 35,50. Phần trăm số nguyên tử $^{37}Cl$ là:\nA. 20%\nB. 25%\nC. 50%\nD. 75%',
    difficulty: 'hard', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B', 'b'], validatorType: 'choice'
  },
  {
    id: 'chem10-m1-qt3-e3', subjectId: 'chemistry', topicId: 'chem10-t1', questionTypeId: 'chem10-qt3',
    content: 'Phổ khối của X có ba đỉnh tại m/z = 24, 25 và 26 với cường độ tương đối 79 : 10 : 11. Nguyên tử khối trung bình của X gần nhất với giá trị nào?\nA. 24,21\nB. 24,32\nC. 24,50\nD. 25,00',
    difficulty: 'hard', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B', 'b'], validatorType: 'choice'
  },

  {
    id: 'chem10-m1-qt4-e1', subjectId: 'chemistry', topicId: 'chem10-t1', questionTypeId: 'chem10-qt4',
    content: 'Trong hình biểu diễn đám mây electron, vùng có mật độ chấm dày hơn cho biết:\nA. Electron chuyển động chậm hơn\nB. Xác suất tìm thấy electron lớn hơn\nC. Electron có khối lượng lớn hơn\nD. Hạt nhân mang điện tích lớn hơn',
    difficulty: 'medium', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B', 'b'], validatorType: 'choice'
  },
  {
    id: 'chem10-m1-qt4-e2', subjectId: 'chemistry', topicId: 'chem10-t1', questionTypeId: 'chem10-qt4',
    content: 'Phát biểu nào đánh giá đúng giới hạn của mô hình Rutherford–Bohr?\nA. Mô hình không thừa nhận sự tồn tại của hạt nhân\nB. Mô hình mô tả tốt mọi nguyên tử nhiều electron\nC. Mô hình hữu ích để hình dung lớp năng lượng nhưng quỹ đạo xác định không phù hợp mô hình lượng tử hiện đại\nD. Mô hình chứng minh electron đứng yên trên từng lớp',
    difficulty: 'hard', sourceType: 'manual', correctAnswer: 'C', acceptedAnswers: ['C', 'c'], validatorType: 'choice'
  },
  {
    id: 'chem10-m1-qt4-e3', subjectId: 'chemistry', topicId: 'chem10-t1', questionTypeId: 'chem10-qt4',
    content: 'Một học sinh nói: “Orbital 2p là chiếc hộp có ranh giới cứng, electron luôn nằm bên trong hộp đó”. Phản biện phù hợp nhất là:\nA. Đúng, vì orbital là vật chứa electron\nB. Sai, orbital là vùng không gian mô tả xác suất; bề mặt thường vẽ chỉ bao một tỉ lệ xác suất quy ước\nC. Sai, vì electron chỉ tồn tại trong hạt nhân\nD. Đúng, nhưng chỉ với nguyên tử hydrogen',
    difficulty: 'hard', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B', 'b'], validatorType: 'choice'
  },

  {
    id: 'chem10-m1-qt5-e1', subjectId: 'chemistry', topicId: 'chem10-t1', questionTypeId: 'chem10-qt5',
    content: 'Tổng số orbital trong các phân lớp 3s, 3p và 3d là:\nA. 5\nB. 7\nC. 9\nD. 18',
    difficulty: 'medium', sourceType: 'manual', correctAnswer: 'C', acceptedAnswers: ['C', 'c'], validatorType: 'choice'
  },
  {
    id: 'chem10-m1-qt5-e2', subjectId: 'chemistry', topicId: 'chem10-t1', questionTypeId: 'chem10-qt5',
    content: 'Ở trạng thái cơ bản, phân lớp $p^4$ có bao nhiêu electron độc thân?\nA. 0\nB. 1\nC. 2\nD. 4',
    difficulty: 'hard', sourceType: 'manual', correctAnswer: 'C', acceptedAnswers: ['C', 'c'], validatorType: 'choice'
  },
  {
    id: 'chem10-m1-qt5-e3', subjectId: 'chemistry', topicId: 'chem10-t1', questionTypeId: 'chem10-qt5',
    content: 'Nguyên tử có cấu hình $1s^2 2s^2 2p^6 3s^2 3p^4$. Số orbital đang chứa electron và số electron độc thân lần lượt là:\nA. 8 và 2\nB. 9 và 2\nC. 9 và 4\nD. 10 và 2',
    difficulty: 'hard', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B', 'b'], validatorType: 'choice'
  },

  {
    id: 'chem10-m1-qt6-e1', subjectId: 'chemistry', topicId: 'chem10-t1', questionTypeId: 'chem10-qt6',
    content: 'Cấu hình electron của ion $Na^+$ (Z = 11) là:\nA. $1s^2 2s^2 2p^6$\nB. $1s^2 2s^2 2p^6 3s^1$\nC. $1s^2 2s^2 2p^5$\nD. $1s^2 2s^2 2p^6 3s^2$',
    difficulty: 'medium', sourceType: 'manual', correctAnswer: 'A', acceptedAnswers: ['A', 'a'], validatorType: 'choice'
  },
  {
    id: 'chem10-m1-qt6-e2', subjectId: 'chemistry', topicId: 'chem10-t1', questionTypeId: 'chem10-qt6',
    content: 'Nguyên tử phosphorus (Z = 15) có bao nhiêu electron độc thân ở trạng thái cơ bản?\nA. 1\nB. 2\nC. 3\nD. 5',
    difficulty: 'hard', sourceType: 'manual', correctAnswer: 'C', acceptedAnswers: ['C', 'c'], validatorType: 'choice'
  },
  {
    id: 'chem10-m1-qt6-e3', subjectId: 'chemistry', topicId: 'chem10-t1', questionTypeId: 'chem10-qt6',
    content: 'Ion $X^{2-}$ có cấu hình electron $1s^2 2s^2 2p^6$. Cấu hình electron nguyên tử X ở trạng thái cơ bản là:\nA. $1s^2 2s^2 2p^4$\nB. $1s^2 2s^2 2p^6$\nC. $1s^2 2s^2 2p^6 3s^2$\nD. $1s^2 2s^2 2p^2$',
    difficulty: 'hard', sourceType: 'manual', correctAnswer: 'A', acceptedAnswers: ['A', 'a'], validatorType: 'choice'
  },

  {
    id: 'chem10-m1-qt7-e1', subjectId: 'chemistry', topicId: 'chem10-t1', questionTypeId: 'chem10-qt7',
    content: 'Nguyên tử X có cấu hình lớp ngoài cùng $3s^2 3p^1$. Dự đoán phù hợp nhất là:\nA. X là khí hiếm\nB. X thường có xu hướng nhường 3 electron và thể hiện tính kim loại\nC. X thường nhận 1 electron\nD. X có 1 electron hóa trị',
    difficulty: 'medium', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B', 'b'], validatorType: 'choice'
  },
  {
    id: 'chem10-m1-qt7-e2', subjectId: 'chemistry', topicId: 'chem10-t1', questionTypeId: 'chem10-qt7',
    content: 'Cho Na (Z = 11), Mg (Z = 12) và Cl (Z = 17). Nhận xét đúng là:\nA. Cả ba đều có xu hướng nhận electron\nB. Na và Mg là phi kim; Cl là kim loại\nC. Na thường nhường 1e, Mg thường nhường 2e, Cl thường nhận 1e\nD. Cl dễ nhường electron hơn Na',
    difficulty: 'hard', sourceType: 'manual', correctAnswer: 'C', acceptedAnswers: ['C', 'c'], validatorType: 'choice'
  },
  {
    id: 'chem10-m1-qt7-e3', subjectId: 'chemistry', topicId: 'chem10-t1', questionTypeId: 'chem10-qt7',
    content: 'Nguyên tử X có tổng 16 electron. Chuỗi suy luận nào đúng?\nA. $1s^22s^22p^63s^23p^4$ → 6 electron lớp ngoài cùng → phi kim, có xu hướng nhận thêm 2e\nB. $1s^22s^22p^63s^23p^4$ → 4 electron lớp ngoài cùng → kim loại\nC. $1s^22s^22p^63s^23p^6$ → khí hiếm\nD. $1s^22s^22p^63s^2$ → kim loại kiềm',
    difficulty: 'hard', sourceType: 'manual', correctAnswer: 'A', acceptedAnswers: ['A', 'a'], validatorType: 'choice'
  }
];
