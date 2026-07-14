import { QuestionType, Question, Solution } from '@/types';

export const m2QuestionTypes: QuestionType[] = [
  {
    id: 'chem10-qt8', topicId: 'chem10-t2', name: 'Ô nguyên tố, Chu kì & Nhóm', slug: 'o-nguyen-to-chu-ki-nhom', description: 'Đọc vị trí và cấu trúc cơ bản của bảng tuần hoàn.', exampleQuestionId: 'chem10-q8a', difficulty: 'easy', examFrequency: 'high',
    theory: ['**Chu kì** gồm các nguyên tố có cùng số lớp electron. **Nhóm A** tập hợp các nguyên tố có cấu hình electron lớp ngoài cùng tương tự và tính chất gần nhau. Số thứ tự ô bằng số hiệu nguyên tử Z.'],
    recognitionSigns: ['Yêu cầu xác định ô, chu kì hoặc nhóm.', 'Cho vị trí và yêu cầu suy ra đặc điểm cấu tạo.'], solvingSteps: ['Xác định Z của ô nguyên tố.', 'Đếm số lớp electron để tìm chu kì.', 'Với nguyên tố nhóm A, xét electron lớp ngoài cùng để tìm nhóm.'], commonMistakes: ['Nhầm số thứ tự chu kì với tổng số electron.', 'Cho rằng mọi nguyên tố cùng chu kì có tính chất giống nhau.']
  },
  {
    id: 'chem10-qt9', topicId: 'chem10-t2', name: 'Cấu hình electron & Vị trí trong bảng tuần hoàn', slug: 'cau-hinh-electron-vi-tri', description: 'Suy ra vị trí nguyên tố từ cấu hình electron và thực hiện chiều ngược lại.', exampleQuestionId: 'chem10-q9a', difficulty: 'medium', examFrequency: 'high',
    theory: ['Số lớp electron cho biết chu kì. Với nguyên tố nhóm A, tổng electron lớp ngoài cùng thường cho biết số thứ tự nhóm A. Cần xác định lớp có số $n$ lớn nhất, không chỉ nhìn phân lớp viết cuối.'],
    recognitionSigns: ['Đề cho cấu hình electron và hỏi vị trí.', 'Đề cho chu kì, nhóm và hỏi cấu hình lớp ngoài cùng.'], solvingSteps: ['Kiểm tra tổng electron bằng Z.', 'Tìm số n lớn nhất để xác định chu kì.', 'Đếm electron lớp ngoài cùng để xác định nhóm A.'], commonMistakes: ['Chỉ nhìn phân lớp cuối mà bỏ qua toàn bộ lớp ngoài cùng.']
  },
  {
    id: 'chem10-qt10', topicId: 'chem10-t2', name: 'Xu hướng Bán kính nguyên tử', slug: 'xu-huong-ban-kinh-nguyen-tu', description: 'So sánh và giải thích bán kính nguyên tử trong chu kì, nhóm.', exampleQuestionId: 'chem10-q10a', difficulty: 'medium', examFrequency: 'high',
    theory: ['Trong một chu kì, số lớp không đổi nhưng điện tích hạt nhân tăng nên bán kính nhìn chung giảm. Trong một nhóm, số lớp electron tăng và che chắn mạnh hơn nên bán kính nhìn chung tăng từ trên xuống.'],
    recognitionSigns: ['Yêu cầu sắp xếp bán kính.', 'Yêu cầu giải thích xu hướng trong chu kì hoặc nhóm.'], solvingSteps: ['Xác định các nguyên tố cùng chu kì hay cùng nhóm.', 'So sánh số lớp electron trước.', 'Nếu cùng số lớp, so sánh lực hút hạt nhân.'], commonMistakes: ['Học thuộc mũi tên nhưng áp dụng sai khi các nguyên tố không cùng chu kì hoặc nhóm.']
  },
  {
    id: 'chem10-qt11', topicId: 'chem10-t2', name: 'Độ âm điện & Tính Kim loại–Phi kim', slug: 'do-am-dien-kim-loai-phi-kim', description: 'Giải thích xu hướng hút electron và tính chất nguyên tố.', exampleQuestionId: 'chem10-q11a', difficulty: 'medium', examFrequency: 'high',
    theory: ['Trong chu kì, độ âm điện và tính phi kim nhìn chung tăng từ trái sang phải; tính kim loại giảm. Trong nhóm A, đi xuống dưới, bán kính và che chắn tăng nên khả năng hút electron liên kết thường giảm.'],
    recognitionSigns: ['So sánh độ âm điện.', 'Sắp xếp tính kim loại hoặc phi kim.'], solvingSteps: ['Xác định vị trí tương đối.', 'Liên hệ bán kính và lực hút hạt nhân.', 'Suy ra khả năng nhường hoặc hút electron.'], commonMistakes: ['Đồng nhất độ âm điện với ái lực electron hoặc khả năng nhận electron tự do trong mọi tình huống.']
  },
  {
    id: 'chem10-qt12', topicId: 'chem10-t2', name: 'Oxide, Hydroxide & Định luật tuần hoàn', slug: 'oxide-hydroxide-dinh-luat-tuan-hoan', description: 'Dự đoán xu hướng acid–base của hợp chất và phát biểu định luật tuần hoàn.', exampleQuestionId: 'chem10-q12a', difficulty: 'medium', examFrequency: 'high',
    theory: ['Trong một chu kì, khi tính kim loại giảm và tính phi kim tăng, oxide/hydroxide thường chuyển dần từ tính base qua lưỡng tính đến acid. Tính chất các nguyên tố và hợp chất biến đổi tuần hoàn theo điện tích hạt nhân.'],
    recognitionSigns: ['So sánh tính acid–base của oxide/hydroxide.', 'Yêu cầu phát biểu hoặc vận dụng định luật tuần hoàn.'], solvingSteps: ['Xác định vị trí trong chu kì.', 'Suy ra tính kim loại–phi kim.', 'Liên hệ với tính base–acid của hợp chất.'], commonMistakes: ['Cho rằng mọi oxide kim loại đều chỉ có tính base hoặc mọi oxide phi kim đều có cùng độ acid.']
  }
];

export const m2Questions: Question[] = [
  { id: 'chem10-q8a', subjectId: 'chemistry', topicId: 'chem10-t2', questionTypeId: 'chem10-qt8', content: 'Các nguyên tố thuộc cùng một chu kì có đặc điểm chung nào?\nA. Cùng số proton.\nB. Cùng số lớp electron.\nC. Cùng số electron lớp ngoài cùng.\nD. Cùng tính kim loại.', difficulty: 'easy', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B','b'], validatorType: 'choice' },
  { id: 'chem10-q8b', subjectId: 'chemistry', topicId: 'chem10-t2', questionTypeId: 'chem10-qt8', content: 'Ô nguyên tố có số thứ tự 12 cho biết nguyên tử trung hòa của nguyên tố đó có bao nhiêu proton và electron?\nA. 12 proton, 12 electron.\nB. 12 proton, 24 electron.\nC. 24 proton, 12 electron.\nD. Không xác định được.', difficulty: 'easy', sourceType: 'manual', correctAnswer: 'A', acceptedAnswers: ['A','a'], validatorType: 'choice' },
  { id: 'chem10-q9a', subjectId: 'chemistry', topicId: 'chem10-t2', questionTypeId: 'chem10-qt9', content: 'Nguyên tử X có cấu hình $1s^2 2s^2 2p^6 3s^2$. X thuộc vị trí nào?\nA. Chu kì 2, nhóm IIA.\nB. Chu kì 3, nhóm IIA.\nC. Chu kì 3, nhóm IIIA.\nD. Chu kì 2, nhóm VIIIA.', difficulty: 'medium', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B','b'], validatorType: 'choice' },
  { id: 'chem10-q9b', subjectId: 'chemistry', topicId: 'chem10-t2', questionTypeId: 'chem10-qt9', content: 'Nguyên tố nhóm VIIA ở chu kì 3 có cấu hình electron lớp ngoài cùng nào?\nA. $3s^1$\nB. $3s^2 3p^5$\nC. $2s^2 2p^5$\nD. $3s^2 3p^6$', difficulty: 'medium', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B','b'], validatorType: 'choice' },
  { id: 'chem10-q10a', subjectId: 'chemistry', topicId: 'chem10-t2', questionTypeId: 'chem10-qt10', content: 'Trong chu kì 3, bán kính nguyên tử nhìn chung giảm từ Na đến Cl chủ yếu vì sao?\nA. Số lớp electron giảm dần.\nB. Điện tích hạt nhân tăng trong khi số lớp electron không đổi.\nC. Số neutron giảm.\nD. Electron lớp ngoài cùng biến mất.', difficulty: 'medium', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B','b'], validatorType: 'choice' },
  { id: 'chem10-q10b', subjectId: 'chemistry', topicId: 'chem10-t2', questionTypeId: 'chem10-qt10', content: 'Sắp xếp bán kính nguyên tử Li, Na, K theo chiều tăng dần.\nA. K < Na < Li.\nB. Li < Na < K.\nC. Na < Li < K.\nD. Li < K < Na.', difficulty: 'easy', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B','b'], validatorType: 'choice' },
  { id: 'chem10-q11a', subjectId: 'chemistry', topicId: 'chem10-t2', questionTypeId: 'chem10-qt11', content: 'Trong chu kì 3, phát biểu nào phù hợp với xu hướng chung từ Na đến Cl?\nA. Tính kim loại tăng, độ âm điện giảm.\nB. Tính kim loại giảm, tính phi kim và độ âm điện tăng.\nC. Cả tính kim loại và phi kim đều tăng.\nD. Không có quy luật.', difficulty: 'medium', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B','b'], validatorType: 'choice' },
  { id: 'chem10-q11b', subjectId: 'chemistry', topicId: 'chem10-t2', questionTypeId: 'chem10-qt11', content: 'Trong nhóm IA, nguyên tố nào có tính kim loại mạnh hơn theo xu hướng tuần hoàn?\nA. Li mạnh hơn K vì nhỏ hơn.\nB. K mạnh hơn Li vì electron ngoài cùng xa hạt nhân và dễ nhường hơn.\nC. Li và K như nhau.\nD. Không thể so sánh.', difficulty: 'medium', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B','b'], validatorType: 'choice' },
  { id: 'chem10-q12a', subjectId: 'chemistry', topicId: 'chem10-t2', questionTypeId: 'chem10-qt12', content: 'Trong chu kì 3, xu hướng tính chất oxide cao nhất từ Na sang Cl nhìn chung là gì?\nA. Acid → base.\nB. Base → lưỡng tính → acid.\nC. Tất cả đều trung tính.\nD. Tất cả đều là base mạnh.', difficulty: 'medium', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B','b'], validatorType: 'choice' },
  { id: 'chem10-q12b', subjectId: 'chemistry', topicId: 'chem10-t2', questionTypeId: 'chem10-qt12', content: 'Nội dung cốt lõi của định luật tuần hoàn là gì?\nA. Tính chất biến đổi ngẫu nhiên theo khối lượng nguyên tử.\nB. Tính chất các nguyên tố và hợp chất biến đổi tuần hoàn theo chiều tăng điện tích hạt nhân.\nC. Mọi nguyên tố trong một chu kì có tính chất giống nhau.\nD. Chỉ bán kính nguyên tử có tính tuần hoàn.', difficulty: 'easy', sourceType: 'manual', correctAnswer: 'B', acceptedAnswers: ['B','b'], validatorType: 'choice' },
  // Dữ liệu từ periodicBondPractice (t2)
  { id: 'chem10-q8c', subjectId: 'chemistry', topicId: 'chem10-t2', questionTypeId: 'chem10-qt8', content: 'Nguyên tố X thuộc chu kì 3. Nguyên tử X có đặc điểm nào chắc chắn đúng?\nA. Có 3 electron hóa trị.\nB. Có 3 lớp electron.\nC. Thuộc nhóm IIIA.\nD. Là kim loại.', correctAnswer: 'B', difficulty: 'medium', sourceType: 'manual', acceptedAnswers: ['B', 'b'], validatorType: 'choice' },
  { id: 'chem10-q8d', subjectId: 'chemistry', topicId: 'chem10-t2', questionTypeId: 'chem10-qt8', content: 'Các nguyên tố cùng nhóm A thường có tính chất hóa học gần giống nhau chủ yếu vì:\nA. Có cùng số neutron.\nB. Có cùng số lớp electron.\nC. Có cấu hình electron lớp ngoài cùng tương tự.\nD. Có cùng nguyên tử khối.', correctAnswer: 'C', difficulty: 'medium', sourceType: 'manual', acceptedAnswers: ['C', 'c'], validatorType: 'choice' },
  { id: 'chem10-q8e', subjectId: 'chemistry', topicId: 'chem10-t2', questionTypeId: 'chem10-qt8', content: 'Ô nguyên tố ghi Z = 16. Thông tin nào không thể suy ra chỉ từ Z?\nA. Số proton là 16.\nB. Nguyên tử trung hòa có 16 electron.\nC. Điện tích hạt nhân là +16.\nD. Số neutron chắc chắn là 16.', correctAnswer: 'D', difficulty: 'medium', sourceType: 'manual', acceptedAnswers: ['D', 'd'], validatorType: 'choice' },
  { id: 'chem10-q9c', subjectId: 'chemistry', topicId: 'chem10-t2', questionTypeId: 'chem10-qt9', content: 'X có cấu hình $1s^22s^22p^63s^23p^3$. Vị trí của X là:\nA. Chu kì 2, nhóm VA.\nB. Chu kì 3, nhóm VA.\nC. Chu kì 3, nhóm IIIA.\nD. Chu kì 5, nhóm IIIA.', correctAnswer: 'B', difficulty: 'medium', sourceType: 'manual', acceptedAnswers: ['B', 'b'], validatorType: 'choice' },
  { id: 'chem10-q9d', subjectId: 'chemistry', topicId: 'chem10-t2', questionTypeId: 'chem10-qt9', content: 'Nguyên tố chu kì 2, nhóm VIA có cấu hình electron lớp ngoài cùng là:\nA. $2s^22p^4$\nB. $2s^22p^6$\nC. $3s^23p^4$\nD. $2s^1$', correctAnswer: 'A', difficulty: 'medium', sourceType: 'manual', acceptedAnswers: ['A', 'a'], validatorType: 'choice' },
  { id: 'chem10-q9e', subjectId: 'chemistry', topicId: 'chem10-t2', questionTypeId: 'chem10-qt9', content: 'X có electron cuối cùng điền vào phân lớp 3p và tổng số electron hóa trị là 7. Kết luận hợp lí là:\nA. X thuộc chu kì 3, nhóm VIIA.\nB. X thuộc chu kì 7, nhóm IIIA.\nC. X là kim loại kiềm.\nD. X thuộc chu kì 2.', correctAnswer: 'A', difficulty: 'hard', sourceType: 'manual', acceptedAnswers: ['A', 'a'], validatorType: 'choice' },
  { id: 'chem10-q10c', subjectId: 'chemistry', topicId: 'chem10-t2', questionTypeId: 'chem10-qt10', content: 'So sánh bán kính Na và $Na^+$. Kết luận đúng là:\nA. $Na^+$ lớn hơn vì mang điện dương.\nB. Na lớn hơn vì khi tạo $Na^+$ mất cả lớp electron ngoài cùng.\nC. Hai bán kính bằng nhau.\nD. Không thể so sánh.', correctAnswer: 'B', difficulty: 'medium', sourceType: 'manual', acceptedAnswers: ['B', 'b'], validatorType: 'choice' },
  { id: 'chem10-q10d', subjectId: 'chemistry', topicId: 'chem10-t2', questionTypeId: 'chem10-qt10', content: 'Trong dãy đẳng electron $O^{2-}, F^-, Na^+, Mg^{2+}$, tiểu phân nào có bán kính nhỏ nhất?\nA. $O^{2-}$\nB. $F^-$\nC. $Na^+$\nD. $Mg^{2+}$', correctAnswer: 'D', difficulty: 'hard', sourceType: 'manual', acceptedAnswers: ['D', 'd'], validatorType: 'choice' },
  { id: 'chem10-q10e', subjectId: 'chemistry', topicId: 'chem10-t2', questionTypeId: 'chem10-qt10', content: 'Vì sao bán kính tăng từ Li xuống K trong nhóm IA dù điện tích hạt nhân tăng?\nA. Vì số lớp electron và che chắn tăng, electron ngoài cùng xa hạt nhân hơn.\nB. Vì số proton giảm.\nC. Vì electron hóa trị biến mất.\nD. Vì K có ít lớp electron hơn.', correctAnswer: 'A', difficulty: 'medium', sourceType: 'manual', acceptedAnswers: ['A', 'a'], validatorType: 'choice' },
  { id: 'chem10-q11c', subjectId: 'chemistry', topicId: 'chem10-t2', questionTypeId: 'chem10-qt11', content: 'Nguyên tố nào có độ âm điện lớn hơn trong cặp C và F?\nA. C vì có ít proton hơn.\nB. F vì nằm về bên phải cùng chu kì và hút electron liên kết mạnh hơn.\nC. Hai nguyên tố bằng nhau.\nD. Không thể so sánh.', correctAnswer: 'B', difficulty: 'medium', sourceType: 'manual', acceptedAnswers: ['B', 'b'], validatorType: 'choice' },
  { id: 'chem10-q11d', subjectId: 'chemistry', topicId: 'chem10-t2', questionTypeId: 'chem10-qt11', content: 'Trong nhóm VIIA, tính phi kim biến đổi từ F xuống I như thế nào?\nA. Tăng vì bán kính tăng.\nB. Giảm vì khả năng hút thêm electron giảm.\nC. Không đổi.\nD. Tăng rồi giảm ngẫu nhiên.', correctAnswer: 'B', difficulty: 'medium', sourceType: 'manual', acceptedAnswers: ['B', 'b'], validatorType: 'choice' },
  { id: 'chem10-q11e', subjectId: 'chemistry', topicId: 'chem10-t2', questionTypeId: 'chem10-qt11', content: 'X dễ nhường electron hơn Y. Nhận định phù hợp nhất là:\nA. X thường có tính kim loại mạnh hơn Y.\nB. X luôn có độ âm điện lớn hơn Y.\nC. X chắc chắn là khí hiếm.\nD. X có tính phi kim mạnh hơn Y.', correctAnswer: 'A', difficulty: 'medium', sourceType: 'manual', acceptedAnswers: ['A', 'a'], validatorType: 'choice' },
  { id: 'chem10-q12c', subjectId: 'chemistry', topicId: 'chem10-t2', questionTypeId: 'chem10-qt12', content: 'Trong chu kì 3, oxide nào có tính base rõ rệt nhất trong các chất sau?\nA. $Na_2O$\nB. $Al_2O_3$\nC. $SO_3$\nD. $Cl_2O_7$', correctAnswer: 'A', difficulty: 'medium', sourceType: 'manual', acceptedAnswers: ['A', 'a'], validatorType: 'choice' },
  { id: 'chem10-q12d', subjectId: 'chemistry', topicId: 'chem10-t2', questionTypeId: 'chem10-qt12', content: 'Cặp oxide – tính chất nào phù hợp?\nA. $MgO$ – acid.\nB. $Al_2O_3$ – lưỡng tính.\nC. $SO_3$ – base.\nD. $Na_2O$ – acid.', correctAnswer: 'B', difficulty: 'medium', sourceType: 'manual', acceptedAnswers: ['B', 'b'], validatorType: 'choice' },
  { id: 'chem10-q12e', subjectId: 'chemistry', topicId: 'chem10-t2', questionTypeId: 'chem10-qt12', content: 'Dựa vào định luật tuần hoàn, nguyên nhân sâu xa của sự lặp lại tính chất theo chu kì là:\nA. Số neutron lặp lại.\nB. Cấu hình electron lớp ngoài cùng biến đổi và lặp lại có quy luật khi Z tăng.\nC. Mọi nguyên tử có cùng khối lượng.\nD. Số lớp electron luôn không đổi.', correctAnswer: 'B', difficulty: 'hard', sourceType: 'manual', acceptedAnswers: ['B', 'b'], validatorType: 'choice' }
];

export const m2Solutions: Solution[] = [
  {
    id: 'chem10-s8a', questionId: 'chem10-q8a',
    recognition: 'Vận dụng cấu tạo electron và vị trí để giải thích quy luật tuần hoàn.',
    detailedSteps: [{ order: 1, title: 'Xác định quan hệ cấu tạo–vị trí', explanation: 'Cùng chu kì nghĩa là cùng số lớp electron; không đồng nghĩa cùng electron ngoài cùng.' }, { order: 2, title: 'Kết luận', explanation: 'Do đó chọn phương án B.' }],
    finalAnswer: 'B',
    commonMistakes: ['Chỉ ghi nhớ chiều biến đổi mà không xác định các nguyên tố đang cùng chu kì hay cùng nhóm.'],
    reviewSuggestions: ['Vẽ lại chuỗi nguyên nhân: cấu tạo electron → lực hút hạt nhân → tính chất nguyên tử → tính chất hợp chất.']
  },
  {
    id: 'chem10-s8b', questionId: 'chem10-q8b',
    recognition: 'Vận dụng cấu tạo electron và vị trí để giải thích quy luật tuần hoàn.',
    detailedSteps: [{ order: 1, title: 'Xác định quan hệ cấu tạo–vị trí', explanation: 'Số thứ tự ô bằng Z, tức 12 proton; nguyên tử trung hòa có 12 electron.' }, { order: 2, title: 'Kết luận', explanation: 'Do đó chọn phương án A.' }],
    finalAnswer: 'A',
    commonMistakes: ['Chỉ ghi nhớ chiều biến đổi mà không xác định các nguyên tố đang cùng chu kì hay cùng nhóm.'],
    reviewSuggestions: ['Vẽ lại chuỗi nguyên nhân: cấu tạo electron → lực hút hạt nhân → tính chất nguyên tử → tính chất hợp chất.']
  },
  {
    id: 'chem10-s9a', questionId: 'chem10-q9a',
    recognition: 'Vận dụng cấu tạo electron và vị trí để giải thích quy luật tuần hoàn.',
    detailedSteps: [{ order: 1, title: 'Xác định quan hệ cấu tạo–vị trí', explanation: 'Số n lớn nhất là 3 nên thuộc chu kì 3; lớp ngoài cùng $3s^2$ ứng với nhóm IIA.' }, { order: 2, title: 'Kết luận', explanation: 'Do đó chọn phương án B.' }],
    finalAnswer: 'B',
    commonMistakes: ['Chỉ ghi nhớ chiều biến đổi mà không xác định các nguyên tố đang cùng chu kì hay cùng nhóm.'],
    reviewSuggestions: ['Vẽ lại chuỗi nguyên nhân: cấu tạo electron → lực hút hạt nhân → tính chất nguyên tử → tính chất hợp chất.']
  },
  {
    id: 'chem10-s9b', questionId: 'chem10-q9b',
    recognition: 'Vận dụng cấu tạo electron và vị trí để giải thích quy luật tuần hoàn.',
    detailedSteps: [{ order: 1, title: 'Xác định quan hệ cấu tạo–vị trí', explanation: 'Chu kì 3 dùng lớp n=3; nhóm VIIA có 7 electron ngoài cùng nên là $3s^2 3p^5$.' }, { order: 2, title: 'Kết luận', explanation: 'Do đó chọn phương án B.' }],
    finalAnswer: 'B',
    commonMistakes: ['Chỉ ghi nhớ chiều biến đổi mà không xác định các nguyên tố đang cùng chu kì hay cùng nhóm.'],
    reviewSuggestions: ['Vẽ lại chuỗi nguyên nhân: cấu tạo electron → lực hút hạt nhân → tính chất nguyên tử → tính chất hợp chất.']
  },
  {
    id: 'chem10-s10a', questionId: 'chem10-q10a',
    recognition: 'Vận dụng cấu tạo electron và vị trí để giải thích quy luật tuần hoàn.',
    detailedSteps: [{ order: 1, title: 'Xác định quan hệ cấu tạo–vị trí', explanation: 'Trong cùng chu kì, số lớp giữ nguyên nhưng điện tích hạt nhân tăng, kéo electron mạnh hơn và làm bán kính giảm.' }, { order: 2, title: 'Kết luận', explanation: 'Do đó chọn phương án B.' }],
    finalAnswer: 'B',
    commonMistakes: ['Chỉ ghi nhớ chiều biến đổi mà không xác định các nguyên tố đang cùng chu kì hay cùng nhóm.'],
    reviewSuggestions: ['Vẽ lại chuỗi nguyên nhân: cấu tạo electron → lực hút hạt nhân → tính chất nguyên tử → tính chất hợp chất.']
  },
  {
    id: 'chem10-s10b', questionId: 'chem10-q10b',
    recognition: 'Vận dụng cấu tạo electron và vị trí để giải thích quy luật tuần hoàn.',
    detailedSteps: [{ order: 1, title: 'Xác định quan hệ cấu tạo–vị trí', explanation: 'Đi xuống nhóm IA, số lớp electron tăng nên bán kính tăng: Li < Na < K.' }, { order: 2, title: 'Kết luận', explanation: 'Do đó chọn phương án B.' }],
    finalAnswer: 'B',
    commonMistakes: ['Chỉ ghi nhớ chiều biến đổi mà không xác định các nguyên tố đang cùng chu kì hay cùng nhóm.'],
    reviewSuggestions: ['Vẽ lại chuỗi nguyên nhân: cấu tạo electron → lực hút hạt nhân → tính chất nguyên tử → tính chất hợp chất.']
  },
  {
    id: 'chem10-s11a', questionId: 'chem10-q11a',
    recognition: 'Vận dụng cấu tạo electron và vị trí để giải thích quy luật tuần hoàn.',
    detailedSteps: [{ order: 1, title: 'Xác định quan hệ cấu tạo–vị trí', explanation: 'Từ trái sang phải, lực hút electron tăng: tính kim loại giảm, độ âm điện và tính phi kim tăng.' }, { order: 2, title: 'Kết luận', explanation: 'Do đó chọn phương án B.' }],
    finalAnswer: 'B',
    commonMistakes: ['Chỉ ghi nhớ chiều biến đổi mà không xác định các nguyên tố đang cùng chu kì hay cùng nhóm.'],
    reviewSuggestions: ['Vẽ lại chuỗi nguyên nhân: cấu tạo electron → lực hút hạt nhân → tính chất nguyên tử → tính chất hợp chất.']
  },
  {
    id: 'chem10-s11b', questionId: 'chem10-q11b',
    recognition: 'Vận dụng cấu tạo electron và vị trí để giải thích quy luật tuần hoàn.',
    detailedSteps: [{ order: 1, title: 'Xác định quan hệ cấu tạo–vị trí', explanation: 'K có nhiều lớp electron hơn; electron ngoài cùng xa và bị che chắn mạnh hơn nên dễ nhường hơn Li.' }, { order: 2, title: 'Kết luận', explanation: 'Do đó chọn phương án B.' }],
    finalAnswer: 'B',
    commonMistakes: ['Chỉ ghi nhớ chiều biến đổi mà không xác định các nguyên tố đang cùng chu kì hay cùng nhóm.'],
    reviewSuggestions: ['Vẽ lại chuỗi nguyên nhân: cấu tạo electron → lực hút hạt nhân → tính chất nguyên tử → tính chất hợp chất.']
  },
  {
    id: 'chem10-s12a', questionId: 'chem10-q12a',
    recognition: 'Vận dụng cấu tạo electron và vị trí để giải thích quy luật tuần hoàn.',
    detailedSteps: [{ order: 1, title: 'Xác định quan hệ cấu tạo–vị trí', explanation: 'Khi tính kim loại giảm và phi kim tăng, oxide chuyển dần từ base qua lưỡng tính đến acid.' }, { order: 2, title: 'Kết luận', explanation: 'Do đó chọn phương án B.' }],
    finalAnswer: 'B',
    commonMistakes: ['Chỉ ghi nhớ chiều biến đổi mà không xác định các nguyên tố đang cùng chu kì hay cùng nhóm.'],
    reviewSuggestions: ['Vẽ lại chuỗi nguyên nhân: cấu tạo electron → lực hút hạt nhân → tính chất nguyên tử → tính chất hợp chất.']
  },
  {
    id: 'chem10-s12b', questionId: 'chem10-q12b',
    recognition: 'Vận dụng cấu tạo electron và vị trí để giải thích quy luật tuần hoàn.',
    detailedSteps: [{ order: 1, title: 'Xác định quan hệ cấu tạo–vị trí', explanation: 'Định luật tuần hoàn liên hệ sự biến đổi tuần hoàn của tính chất với điện tích hạt nhân tăng dần.' }, { order: 2, title: 'Kết luận', explanation: 'Do đó chọn phương án B.' }],
    finalAnswer: 'B',
    commonMistakes: ['Chỉ ghi nhớ chiều biến đổi mà không xác định các nguyên tố đang cùng chu kì hay cùng nhóm.'],
    reviewSuggestions: ['Vẽ lại chuỗi nguyên nhân: cấu tạo electron → lực hút hạt nhân → tính chất nguyên tử → tính chất hợp chất.']
  },
  // Các câu giải từ periodicBondPractice (t2)
  ...[
    { id: 'chem10-s8c', qId: 'chem10-q8c', ans: 'B', exp: 'Số thứ tự chu kì bằng số lớp electron đang được sử dụng trong nguyên tử.' },
    { id: 'chem10-s8d', qId: 'chem10-q8d', ans: 'C', exp: 'Cấu hình electron hóa trị tương tự dẫn đến xu hướng nhường, nhận hoặc dùng chung electron gần giống nhau.' },
    { id: 'chem10-s8e', qId: 'chem10-q8e', ans: 'D', exp: 'Z xác định proton nhưng không xác định neutron; các đồng vị có thể có số neutron khác nhau.' },
    { id: 'chem10-s9c', qId: 'chem10-q9c', ans: 'B', exp: 'Lớp ngoài cùng có n=3 nên thuộc chu kì 3; có 5 electron hóa trị nên thuộc nhóm VA.' },
    { id: 'chem10-s9d', qId: 'chem10-q9d', ans: 'A', exp: 'Chu kì 2 dùng lớp n=2; nhóm VIA có 6 electron hóa trị, dạng $ns^2np^4$.' },
    { id: 'chem10-s9e', qId: 'chem10-q9e', ans: 'A', exp: 'Cấu hình ngoài cùng $3s^23p^5$ xác định chu kì 3 và nhóm VIIA.' },
    { id: 'chem10-s10c', qId: 'chem10-q10c', ans: 'B', exp: 'Na mất electron 3s và mất lớp thứ ba khi tạo Na⁺, nên ion nhỏ hơn nguyên tử.' },
    { id: 'chem10-s10d', qId: 'chem10-q10d', ans: 'D', exp: 'Cùng 10 electron, hạt nhân Mg²⁺ có nhiều proton nhất nên hút electron mạnh nhất và có bán kính nhỏ nhất.' },
    { id: 'chem10-s10e', qId: 'chem10-q10e', ans: 'A', exp: 'Tác dụng của thêm lớp electron và tăng che chắn chiếm ưu thế so với sự tăng điện tích hạt nhân.' },
    { id: 'chem10-s11c', qId: 'chem10-q11c', ans: 'B', exp: 'Trong một chu kì, độ âm điện nhìn chung tăng từ trái sang phải; fluorine có độ âm điện rất lớn.' },
    { id: 'chem10-s11d', qId: 'chem10-q11d', ans: 'B', exp: 'Bán kính và che chắn tăng xuống nhóm làm lực hút lên electron nhận thêm giảm, nên tính phi kim giảm.' },
    { id: 'chem10-s11e', qId: 'chem10-q11e', ans: 'A', exp: 'Tính kim loại gắn với xu hướng nhường electron tạo cation.' },
    { id: 'chem10-s12c', qId: 'chem10-q12c', ans: 'A', exp: 'Na₂O là oxide kim loại kiềm có tính base; Al₂O₃ lưỡng tính, SO₃ và Cl₂O₇ có tính acid.' },
    { id: 'chem10-s12d', qId: 'chem10-q12d', ans: 'B', exp: 'Al₂O₃ phản ứng được với cả acid và base mạnh nên là oxide lưỡng tính.' },
    { id: 'chem10-s12e', qId: 'chem10-q12e', ans: 'B', exp: 'Tính chất hóa học phụ thuộc cấu hình electron, đặc biệt lớp ngoài cùng; cấu hình này lặp lại tuần hoàn.' }
  ].map(item => ({
    id: item.id,
    questionId: item.qId,
    recognition: 'Vận dụng cấu tạo electron và vị trí để giải thích quy luật tuần hoàn.',
    detailedSteps: [
      { order: 1, title: 'Lập luận trọng tâm', explanation: item.exp },
      { order: 2, title: 'Kết luận', explanation: `Chọn phương án ${item.ans}.` }
    ],
    finalAnswer: item.ans,
    commonMistakes: ['Chỉ học thuộc chiều biến đổi hoặc tên liên kết mà không xét nguyên nhân vi mô và cấu trúc.'],
    reviewSuggestions: ['Giải thích lại theo chuỗi: cấu hình/cấu trúc → lực tương tác → tính chất quan sát được.']
  }))
];
