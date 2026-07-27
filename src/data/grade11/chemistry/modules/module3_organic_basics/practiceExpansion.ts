import {
  buildChemistryPracticeExpansion,
  type ChemistryPracticeExpansionSpec
} from '../../practiceExpansionBuilder';

const specs: ChemistryPracticeExpansionSpec[] = [
  {
    id: 'chem11-org-x001', topicId: 'chem11-t3', questionTypeId: 'chem11-qt36',
    subTypeId: 'chem11-org-st-distillation-principle',
    content: 'Phương pháp phù hợp để thu dung môi dễ bay hơi từ dung dịch chứa chất tan rắn không bay hơi là',
    responseType: 'single_choice',
    options: ['A. Chưng cất đơn giản', 'B. Chiết lỏng–lỏng', 'C. Lọc ở nhiệt độ phòng', 'D. Sắc kí giấy'],
    correctAnswer: 'A', validatorType: 'choice', difficulty: 'medium',
    outcomeIds: ['chem11-org-distillation-principle'], practiceRole: 'near_transfer', representationType: 'text', estimatedSeconds: 65,
    solution: {
      recognition: 'Chọn phương pháp tách dựa trên độ bay hơi.',
      reasoning: ['Dung môi bay hơi còn chất tan rắn không bay hơi.', 'Chưng cất làm bay hơi rồi ngưng tụ dung môi để thu riêng.'],
      commonMistake: 'Chọn lọc dù chất tan đã hòa tan.', reviewSuggestion: 'Ôn tiêu chí chọn phương pháp tách.'
    }
  },
  {
    id: 'chem11-org-x002', topicId: 'chem11-t3', questionTypeId: 'chem11-qt36',
    subTypeId: 'chem11-org-st-distillation-principle',
    content: 'Hỗn hợp hexane (nhiệt độ sôi 69 °C) và heptane (98 °C) được chưng cất phân đoạn. Chất giàu hơn trong phân đoạn đầu là chất nào?',
    responseType: 'short_answer', correctAnswer: 'hexane', acceptedAnswers: ['hexan', 'n-hexane', 'n-hexan'],
    validatorType: 'exact', difficulty: 'hard',
    outcomeIds: ['chem11-org-distillation-principle'], practiceRole: 'far_transfer', representationType: 'table', isMasteryHoldout: true, estimatedSeconds: 85,
    solution: {
      recognition: 'Dự đoán thành phần phân đoạn từ nhiệt độ sôi.',
      reasoning: ['Hexane có nhiệt độ sôi thấp hơn heptane.', 'Hơi và phân đoạn đầu giàu cấu tử dễ bay hơi hơn là hexane.'],
      commonMistake: 'Chọn chất có nhiệt độ sôi cao hơn cho phân đoạn đầu.', reviewSuggestion: 'Ôn quan hệ nhiệt độ sôi–độ bay hơi.'
    }
  },
  {
    id: 'chem11-org-x003', topicId: 'chem11-t3', questionTypeId: 'chem11-qt36',
    subTypeId: 'chem11-org-st-distillation-apparatus',
    content: 'Trong bộ chưng cất, bầu nhiệt kế nên đặt ở vị trí nào?',
    responseType: 'single_choice',
    options: ['A. Chìm trong chất lỏng đang đun', 'B. Ngang lối hơi đi vào ống sinh hàn', 'C. Ngoài bộ dụng cụ', 'D. Dưới đáy bình hứng'],
    correctAnswer: 'B', validatorType: 'choice', difficulty: 'medium',
    outcomeIds: ['chem11-org-distillation-apparatus'], practiceRole: 'near_transfer', representationType: 'diagram', estimatedSeconds: 70,
    solution: {
      recognition: 'Xác định vị trí đo nhiệt độ hơi trong chưng cất.',
      reasoning: ['Cần đo nhiệt độ của hơi vừa đi sang sinh hàn.', 'Bầu nhiệt kế đặt ngang nhánh dẫn hơi cho số đo đại diện.'],
      commonMistake: 'Đo nhiệt độ dung dịch thay vì nhiệt độ hơi.', reviewSuggestion: 'Ôn chức năng từng bộ phận của bộ chưng cất.'
    }
  },
  {
    id: 'chem11-org-x004', topicId: 'chem11-t3', questionTypeId: 'chem11-qt36',
    subTypeId: 'chem11-org-st-distillation-apparatus',
    content: 'Nước làm mát trong ống sinh hàn thẳng nên được cấp theo cách nào?',
    responseType: 'single_choice',
    options: ['A. Vào đầu trên, ra đầu dưới', 'B. Vào đầu dưới, ra đầu trên', 'C. Chỉ đổ một lần rồi khóa', 'D. Không cần nước'],
    correctAnswer: 'B', validatorType: 'choice', difficulty: 'hard',
    outcomeIds: ['chem11-org-distillation-apparatus'], practiceRole: 'misconception_check', representationType: 'diagram', isMasteryHoldout: true, estimatedSeconds: 75,
    solution: {
      recognition: 'Chọn chiều nước làm mát của sinh hàn.',
      reasoning: ['Nước vào từ dưới giúp áo sinh hàn luôn đầy và đẩy không khí lên trên.', 'Dòng ngược chiều hơi cũng duy trì trao đổi nhiệt hiệu quả.'],
      commonMistake: 'Cấp nước từ trên làm áo sinh hàn có vùng không đầy.', reviewSuggestion: 'Ôn lắp và vận hành sinh hàn.'
    }
  },
  {
    id: 'chem11-org-x005', topicId: 'chem11-t3', questionTypeId: 'chem11-qt36',
    subTypeId: 'chem11-org-st-distillation-data',
    content: 'Từ mẫu chứa 50,0 g ethanol, phân đoạn mục tiêu thu được 36,0 g ethanol. Tính hiệu suất thu hồi theo phần trăm.',
    responseType: 'short_answer', correctAnswer: '72', acceptedAnswers: ['72%', '72,0', '72.0'],
    validatorType: 'number', difficulty: 'hard',
    outcomeIds: ['chem11-org-distillation-data'], practiceRole: 'far_transfer', representationType: 'table', isMasteryHoldout: true, estimatedSeconds: 90,
    solution: {
      recognition: 'Tính hiệu suất thu hồi của quá trình tách.',
      reasoning: ['Hiệu suất thu hồi bằng lượng thu được chia lượng ban đầu.', '$H=36{,}0/50{,}0\\times100=72{,}0\\%$.'],
      commonMistake: 'Chia lượng ban đầu cho lượng thu được.', reviewSuggestion: 'Ôn công thức phần trăm thu hồi.'
    }
  },
  {
    id: 'chem11-org-x006', topicId: 'chem11-t3', questionTypeId: 'chem11-qt36',
    subTypeId: 'chem11-org-st-distillation-data',
    content: 'Khi chưng cất hỗn hợp ethanol–nước, nhiệt độ đầu cột giữ gần 78 °C rồi tăng dần. Diễn giải hợp lí nhất là',
    responseType: 'single_choice',
    options: ['A. Nước biến thành ethanol.', 'B. Phần giàu ethanol đang cạn dần và hơi trở nên giàu cấu tử sôi cao hơn.', 'C. Nhiệt kế chắc chắn hỏng.', 'D. Hỗn hợp đã đông đặc.'],
    correctAnswer: 'B', validatorType: 'choice', difficulty: 'hard',
    outcomeIds: ['chem11-org-distillation-data'], practiceRole: 'far_transfer', representationType: 'graph', isMasteryHoldout: true, estimatedSeconds: 95,
    solution: {
      recognition: 'Đọc xu hướng nhiệt độ trong dữ liệu chưng cất.',
      reasoning: ['Đoạn gần 78 °C gắn với hơi giàu ethanol.', 'Khi ethanol giảm, cấu tử sôi cao hơn đóng góp nhiều hơn nên nhiệt độ tăng.'],
      commonMistake: 'Coi nhiệt độ phải giữ cố định suốt quá trình.', reviewSuggestion: 'Ôn cách nhận diện chuyển tiếp giữa các phân đoạn.'
    }
  },
  {
    id: 'chem11-org-x007', topicId: 'chem11-t3', questionTypeId: 'chem11-qt37',
    subTypeId: 'chem11-org-st-extraction-solvent',
    content: 'Dung môi chiết lỏng–lỏng phù hợp cần có đặc điểm quan trọng nào?',
    responseType: 'single_choice',
    options: ['A. Trộn lẫn hoàn toàn với pha ban đầu', 'B. Không trộn lẫn với pha ban đầu và hòa tan tốt chất cần chiết', 'C. Luôn có khối lượng riêng lớn nhất', 'D. Phản ứng mạnh với chất cần chiết'],
    correctAnswer: 'B', validatorType: 'choice', difficulty: 'medium',
    outcomeIds: ['chem11-org-extraction-principle'], practiceRole: 'near_transfer', representationType: 'text', estimatedSeconds: 65,
    solution: {
      recognition: 'Chọn dung môi theo hệ số phân bố và khả năng tạo hai pha.',
      reasoning: ['Hai dung môi phải không trộn lẫn để tách lớp.', 'Chất cần chiết phải ưu tiên tan trong dung môi chiết.'],
      commonMistake: 'Chọn hai dung môi tan hoàn toàn vào nhau.', reviewSuggestion: 'Ôn tiêu chí dung môi chiết.'
    }
  },
  {
    id: 'chem11-org-x008', topicId: 'chem11-t3', questionTypeId: 'chem11-qt37',
    subTypeId: 'chem11-org-st-extraction-solvent',
    content: 'Hệ số phân bố $K=C_{hữu\\ cơ}/C_{nước}=4{,}0$. Dùng hai pha có thể tích bằng nhau cho một lần chiết. Phần chất tan chuyển sang pha hữu cơ bằng bao nhiêu phần trăm?',
    responseType: 'short_answer', correctAnswer: '80', acceptedAnswers: ['80%', '80,0', '80.0'],
    validatorType: 'number', difficulty: 'hard',
    outcomeIds: ['chem11-org-extraction-principle'], practiceRole: 'far_transfer', representationType: 'equation', isMasteryHoldout: true, estimatedSeconds: 115,
    solution: {
      recognition: 'Tính phần chiết từ hệ số phân bố và thể tích bằng nhau.',
      reasoning: ['Với hai thể tích bằng nhau, lượng ở hai pha tỉ lệ với nồng độ là 4:1.', 'Phần ở pha hữu cơ bằng $4/(4+1)=0{,}80=80\\%$.'],
      commonMistake: 'Dùng K trực tiếp như 4%.', reviewSuggestion: 'Ôn ý nghĩa định lượng của hệ số phân bố.'
    }
  },
  {
    id: 'chem11-org-x009', topicId: 'chem11-t3', questionTypeId: 'chem11-qt37',
    subTypeId: 'chem11-org-st-extraction-funnel',
    content: 'Chiết dung dịch nước bằng dichloromethane có khối lượng riêng 1,33 g/mL. Lớp dichloromethane nằm ở đâu?',
    responseType: 'single_choice',
    options: ['A. Lớp trên', 'B. Lớp dưới', 'C. Không tạo lớp', 'D. Luôn ở giữa'],
    correctAnswer: 'B', validatorType: 'choice', difficulty: 'medium',
    outcomeIds: ['chem11-org-extraction-funnel'], practiceRole: 'near_transfer', representationType: 'diagram', estimatedSeconds: 65,
    solution: {
      recognition: 'Xác định vị trí lớp từ khối lượng riêng.',
      reasoning: ['Dichloromethane không trộn lẫn với nước và có khối lượng riêng lớn hơn nước.', 'Pha này nằm ở lớp dưới.'],
      commonMistake: 'Cho rằng dung môi hữu cơ luôn nằm trên.', reviewSuggestion: 'So khối lượng riêng thay vì ghi nhớ máy móc.'
    }
  },
  {
    id: 'chem11-org-x010', topicId: 'chem11-t3', questionTypeId: 'chem11-qt37',
    subTypeId: 'chem11-org-st-extraction-funnel',
    content: 'Vì sao phải thường xuyên mở khóa để xả áp khi lắc phễu chiết?',
    responseType: 'short_answer', correctAnswer: 'để xả áp suất', acceptedAnswers: ['xả áp', 'giảm áp suất', 'tránh tăng áp suất'],
    validatorType: 'exact', difficulty: 'hard',
    outcomeIds: ['chem11-org-extraction-funnel'], practiceRole: 'misconception_check', representationType: 'experiment', isMasteryHoldout: true, estimatedSeconds: 80,
    solution: {
      recognition: 'Giải thích thao tác an toàn với phễu chiết.',
      reasoning: ['Hơi dung môi hoặc khí có thể làm áp suất bên trong tăng.', 'Xả áp theo hướng an toàn ngăn nút bật hoặc chất lỏng phun ra.'],
      commonMistake: 'Giữ phễu kín suốt quá trình lắc.', reviewSuggestion: 'Ôn trình tự lắc–xả áp của phễu chiết.'
    }
  },
  {
    id: 'chem11-org-x011', topicId: 'chem11-t3', questionTypeId: 'chem11-qt37',
    subTypeId: 'chem11-org-st-extraction-efficiency',
    content: 'Với cùng tổng thể tích dung môi chiết, hai lần chiết bằng các phần dung môi nhỏ thường hiệu quả hơn một lần vì',
    responseType: 'single_choice',
    options: ['A. Hệ số phân bố tự tăng sau mỗi lần.', 'B. Mỗi lần tái lập cân bằng phân bố và tiếp tục lấy chất tan khỏi pha ban đầu.', 'C. Dung môi đổi thành chất khác.', 'D. Không còn cần tách lớp.'],
    correctAnswer: 'B', validatorType: 'choice', difficulty: 'hard',
    outcomeIds: ['chem11-org-extraction-efficiency-safety'], practiceRole: 'far_transfer', representationType: 'text', estimatedSeconds: 90,
    solution: {
      recognition: 'So sánh chiết một lần và nhiều lần.',
      reasoning: ['Sau lần đầu vẫn còn chất tan trong pha ban đầu.', 'Dung môi mới ở lần sau lại nhận chất tan theo cân bằng phân bố, làm tổng lượng chiết tăng.'],
      commonMistake: 'Cho rằng chỉ tổng thể tích dung môi quyết định hiệu quả.', reviewSuggestion: 'Ôn lợi ích của chiết lặp.'
    }
  },
  {
    id: 'chem11-org-x012', topicId: 'chem11-t3', questionTypeId: 'chem11-qt37',
    subTypeId: 'chem11-org-st-extraction-efficiency',
    content: 'Có 100 mg chất tan trong 100 mL nước, $K=C_{hữu\\ cơ}/C_{nước}=3$. Chiết hai lần, mỗi lần bằng 50 mL dung môi hữu cơ mới. Khối lượng chất tan còn lại trong nước là bao nhiêu mg?',
    responseType: 'short_answer', correctAnswer: '16', acceptedAnswers: ['16,0', '16.0'],
    validatorType: 'number', difficulty: 'hard',
    outcomeIds: ['chem11-org-extraction-efficiency-safety'], practiceRole: 'mastery_holdout', representationType: 'equation', isMasteryHoldout: true, estimatedSeconds: 150,
    solution: {
      recognition: 'Tính lượng còn lại qua hai lần chiết độc lập.',
      reasoning: ['Mỗi lần, phần còn trong nước là $100/(100+3\\times50)=0{,}40$.', 'Sau hai lần còn $100\\times0{,}40^2=16$ mg.'],
      commonMistake: 'Dùng một lần với 100 mL rồi coi kết quả giống hai lần.', reviewSuggestion: 'Luyện công thức lượng còn lại sau chiết lặp.'
    }
  },
  {
    id: 'chem11-org-x013', topicId: 'chem11-t3', questionTypeId: 'chem11-qt41',
    subTypeId: 'chem11-org-st-combustion-ch',
    content: 'Đốt cháy hợp chất hữu cơ thu 4,40 g $CO_2$. Khối lượng carbon trong mẫu là',
    responseType: 'single_choice',
    options: ['A. 0,40 g', 'B. 1,20 g', 'C. 2,20 g', 'D. 4,40 g'],
    correctAnswer: 'B', validatorType: 'choice', difficulty: 'medium',
    outcomeIds: ['chem11-org-combustion-analysis-ch'], practiceRole: 'near_transfer', representationType: 'equation', estimatedSeconds: 80,
    solution: {
      recognition: 'Suy khối lượng carbon từ carbon dioxide.',
      reasoning: ['$n_{CO_2}=4{,}40/44=0{,}100$ mol nên có 0,100 mol C.', '$m_C=0{,}100\\times12=1{,}20$ g.'],
      commonMistake: 'Coi toàn bộ khối lượng CO₂ là carbon.', reviewSuggestion: 'Ôn bảo toàn nguyên tố C.'
    }
  },
  {
    id: 'chem11-org-x014', topicId: 'chem11-t3', questionTypeId: 'chem11-qt41',
    subTypeId: 'chem11-org-st-combustion-ch',
    content: 'Đốt cháy mẫu hữu cơ thu 5,40 g $H_2O$. Tính số mol nguyên tử hydrogen có trong mẫu.',
    responseType: 'short_answer', correctAnswer: '0.6', acceptedAnswers: ['0,6', '0.60', '0,60'],
    validatorType: 'number', difficulty: 'hard',
    outcomeIds: ['chem11-org-combustion-analysis-ch'], practiceRole: 'far_transfer', representationType: 'equation', isMasteryHoldout: true, estimatedSeconds: 95,
    solution: {
      recognition: 'Suy mol hydrogen từ nước.',
      reasoning: ['$n_{H_2O}=5{,}40/18=0{,}300$ mol.', 'Mỗi mol nước chứa 2 mol nguyên tử H nên $n_H=0{,}600$ mol.'],
      commonMistake: 'Dùng số mol nước bằng số mol nguyên tử H.', reviewSuggestion: 'Ôn hệ số nguyên tử trong sản phẩm cháy.'
    }
  },
  {
    id: 'chem11-org-x015', topicId: 'chem11-t3', questionTypeId: 'chem11-qt41',
    subTypeId: 'chem11-org-st-combustion-cho',
    content: 'Đốt cháy hoàn toàn 3,00 g hợp chất chỉ chứa C, H, O thu 4,40 g $CO_2$ và 1,80 g $H_2O$. Công thức đơn giản nhất là',
    responseType: 'single_choice',
    options: ['A. $CH_2O$', 'B. $C_2H_4O$', 'C. $CH_4O$', 'D. $C_2H_2O_2$'],
    correctAnswer: 'A', validatorType: 'choice', difficulty: 'hard',
    outcomeIds: ['chem11-org-combustion-analysis-ch', 'chem11-org-oxygen-by-difference'], practiceRole: 'far_transfer', representationType: 'equation', estimatedSeconds: 140,
    solution: {
      recognition: 'Tìm C, H từ sản phẩm cháy và O bằng hiệu khối lượng.',
      reasoning: ['$m_C=1{,}20$ g, $m_H=0{,}20$ g nên $m_O=3{,}00-1{,}40=1{,}60$ g.', 'Mol C:H:O = 0,10:0,20:0,10 = 1:2:1, nên CTĐGN là $CH_2O$.'],
      commonMistake: 'Lấy mol H₂O làm mol H.', reviewSuggestion: 'Luyện chuỗi bảo toàn C–H–O.'
    }
  },
  {
    id: 'chem11-org-x016', topicId: 'chem11-t3', questionTypeId: 'chem11-qt41',
    subTypeId: 'chem11-org-st-combustion-cho',
    content: 'Một mẫu 3,00 g chỉ chứa C, H, O có 1,20 g C và 0,20 g H. Tính khối lượng oxygen trong mẫu theo gam.',
    responseType: 'short_answer', correctAnswer: '1.6', acceptedAnswers: ['1,6', '1.60', '1,60'],
    validatorType: 'number', difficulty: 'hard',
    outcomeIds: ['chem11-org-oxygen-by-difference'], practiceRole: 'far_transfer', representationType: 'equation', isMasteryHoldout: true, estimatedSeconds: 85,
    solution: {
      recognition: 'Tìm oxygen bằng hiệu khối lượng.',
      reasoning: ['Tổng khối lượng C và H là $1{,}20+0{,}20=1{,}40$ g.', '$m_O=3{,}00-1{,}40=1{,}60$ g.'],
      commonMistake: 'Dùng khối lượng oxygen trong CO₂ và H₂O.', reviewSuggestion: 'Ôn bảo toàn khối lượng nguyên tố trong mẫu.'
    }
  },
  {
    id: 'chem11-org-x017', topicId: 'chem11-t3', questionTypeId: 'chem11-qt41',
    subTypeId: 'chem11-org-st-molecular-formula-final',
    content: 'Một chất có công thức đơn giản nhất $CH_2O$ và phân tử khối 60. Công thức phân tử là',
    responseType: 'single_choice',
    options: ['A. $CH_2O$', 'B. $C_2H_4O_2$', 'C. $C_3H_6O_3$', 'D. $C_2H_2O$'],
    correctAnswer: 'B', validatorType: 'choice', difficulty: 'medium',
    outcomeIds: ['chem11-org-molecular-formula-determination'], practiceRole: 'near_transfer', representationType: 'equation', estimatedSeconds: 75,
    solution: {
      recognition: 'Dùng phân tử khối để tìm bội của công thức đơn giản nhất.',
      reasoning: ['$M_{CH_2O}=30$.', 'Hệ số $n=60/30=2$, nên CTPT là $C_2H_4O_2$.'],
      commonMistake: 'Giữ CTĐGN mà không kiểm tra phân tử khối.', reviewSuggestion: 'Ôn quan hệ CTPT = (CTĐGN)n.'
    }
  },
  {
    id: 'chem11-org-x018', topicId: 'chem11-t3', questionTypeId: 'chem11-qt41',
    subTypeId: 'chem11-org-st-molecular-formula-final',
    content: 'Đốt cháy hoàn toàn 0,10 mol hydrocarbon X thu 0,30 mol $CO_2$ và 0,40 mol $H_2O$. Công thức phân tử của X là',
    responseType: 'single_choice',
    options: ['A. $C_3H_4$', 'B. $C_3H_6$', 'C. $C_3H_8$', 'D. $C_4H_8$'],
    correctAnswer: 'C', validatorType: 'choice', difficulty: 'hard',
    outcomeIds: ['chem11-org-molecular-formula-determination'], practiceRole: 'mastery_holdout', representationType: 'equation', isMasteryHoldout: true, estimatedSeconds: 110,
    solution: {
      recognition: 'Suy số nguyên tử C và H trên một phân tử từ sản phẩm cháy.',
      reasoning: ['Mỗi mol X tạo 3 mol CO₂ nên X có 3 carbon.', 'Mỗi mol X tạo 4 mol H₂O, tương ứng 8 hydrogen; X là $C_3H_8$.'],
      commonMistake: 'Lấy hệ số H bằng số mol nước trên mol X.', reviewSuggestion: 'Ôn quan hệ sản phẩm cháy của $C_xH_y$.'
    }
  },
  {
    id: 'chem11-org-x019', topicId: 'chem11-t3', questionTypeId: 'chem11-qt44',
    subTypeId: 'chem11-org-st-isomer-concept',
    content: 'Hai chất là đồng phân cấu tạo khi chúng',
    responseType: 'single_choice',
    options: ['A. Có cùng CTPT nhưng khác cách liên kết nguyên tử', 'B. Có cùng CTCT nhưng khác tên', 'C. Khác CTPT và giống tính chất', 'D. Chỉ khác trạng thái vật lí'],
    correctAnswer: 'A', validatorType: 'choice', difficulty: 'medium',
    outcomeIds: ['chem11-org-isomer-concept', 'chem11-org-isomer-identification'], practiceRole: 'near_transfer', representationType: 'text', estimatedSeconds: 60,
    solution: {
      recognition: 'Nhắc lại điều kiện của đồng phân cấu tạo.',
      reasoning: ['Đồng phân phải có cùng công thức phân tử.', 'Sự khác nhau nằm ở thứ tự hoặc cách liên kết các nguyên tử.'],
      commonMistake: 'Chỉ dựa vào tên gọi khác nhau.', reviewSuggestion: 'Ôn định nghĩa đồng phân.'
    }
  },
  {
    id: 'chem11-org-x020', topicId: 'chem11-t3', questionTypeId: 'chem11-qt44',
    subTypeId: 'chem11-org-st-isomer-concept',
    content: 'Ethanol $CH_3CH_2OH$ và dimethyl ether $CH_3OCH_3$ có quan hệ là',
    responseType: 'single_choice',
    options: ['A. Đồng đẳng', 'B. Đồng phân nhóm chức', 'C. Cùng một chất', 'D. Không liên quan vì khác CTPT'],
    correctAnswer: 'B', validatorType: 'choice', difficulty: 'hard',
    outcomeIds: ['chem11-org-isomer-concept', 'chem11-org-isomer-identification'], practiceRole: 'far_transfer', representationType: 'equation', isMasteryHoldout: true, estimatedSeconds: 75,
    solution: {
      recognition: 'Phân loại quan hệ từ CTPT và nhóm chức.',
      reasoning: ['Hai chất cùng CTPT $C_2H_6O$.', 'Một chất là alcohol, một chất là ether nên là đồng phân nhóm chức.'],
      commonMistake: 'Cho rằng khác nhóm chức thì phải khác CTPT.', reviewSuggestion: 'Ôn các loại đồng phân cấu tạo.'
    }
  },
  {
    id: 'chem11-org-x021', topicId: 'chem11-t3', questionTypeId: 'chem11-qt44',
    subTypeId: 'chem11-org-st-isomer-identify',
    content: 'Số đồng phân cấu tạo của $C_4H_{10}$ là bao nhiêu?',
    responseType: 'short_answer', correctAnswer: '2', acceptedAnswers: ['hai'],
    validatorType: 'number', difficulty: 'medium',
    outcomeIds: ['chem11-org-isomer-identification'], practiceRole: 'near_transfer', representationType: 'diagram', estimatedSeconds: 80,
    solution: {
      recognition: 'Liệt kê khung carbon của alkane C4.',
      reasoning: ['Có mạch thẳng butane.', 'Có một mạch nhánh 2-methylpropane; tổng cộng 2 cấu tạo.'],
      commonMistake: 'Đếm hai chiều viết của cùng mạch là hai chất.', reviewSuggestion: 'Ôn cách loại cấu tạo trùng do quay/lật.'
    }
  },
  {
    id: 'chem11-org-x022', topicId: 'chem11-t3', questionTypeId: 'chem11-qt44',
    subTypeId: 'chem11-org-st-isomer-identify',
    content: 'Hai công thức $CH_3CH_2CH_2CH_3$ và $CH_3(CH_2)_2CH_3$ biểu diễn',
    responseType: 'single_choice',
    options: ['A. Hai đồng phân', 'B. Cùng một chất', 'C. Hai chất đồng đẳng', 'D. Hai nhóm chức khác nhau'],
    correctAnswer: 'B', validatorType: 'choice', difficulty: 'hard',
    outcomeIds: ['chem11-org-isomer-identification'], practiceRole: 'misconception_check', representationType: 'diagram', isMasteryHoldout: true, estimatedSeconds: 75,
    solution: {
      recognition: 'Kiểm tra cấu tạo trùng do đổi chiều biểu diễn.',
      reasoning: ['Thứ tự liên kết và khung carbon của hai công thức giống hệt nhau.', 'Đổi chiều cách viết không tạo chất mới.'],
      commonMistake: 'Đếm mọi cách trình bày thành một đồng phân.', reviewSuggestion: 'So sánh liên kết thay vì vị trí trên giấy.'
    }
  },
  {
    id: 'chem11-org-x023', topicId: 'chem11-t3', questionTypeId: 'chem11-qt44',
    subTypeId: 'chem11-org-st-isomer-enumerate',
    content: 'Số đồng phân cấu tạo alkane của $C_5H_{12}$ là bao nhiêu?',
    responseType: 'short_answer', correctAnswer: '3', acceptedAnswers: ['ba'],
    validatorType: 'number', difficulty: 'hard',
    outcomeIds: ['chem11-org-simple-isomer-enumeration'], practiceRole: 'far_transfer', representationType: 'diagram', isMasteryHoldout: true, estimatedSeconds: 105,
    solution: {
      recognition: 'Liệt kê các khung carbon C5 không trùng.',
      reasoning: ['Các khung là pentane, 2-methylbutane và 2,2-dimethylpropane.', 'Không còn vị trí nhánh độc lập nào khác, nên có 3 đồng phân.'],
      commonMistake: 'Đếm 3-methylbutane riêng dù trùng 2-methylbutane.', reviewSuggestion: 'Ôn quy tắc đánh số và nhận diện đối xứng.'
    }
  },
  {
    id: 'chem11-org-x024', topicId: 'chem11-t3', questionTypeId: 'chem11-qt44',
    subTypeId: 'chem11-org-st-isomer-enumerate',
    content: 'Không tính đồng phân hình học, có bao nhiêu alkene mạch hở là đồng phân cấu tạo của $C_4H_8$?',
    responseType: 'short_answer', correctAnswer: '3', acceptedAnswers: ['ba'],
    validatorType: 'number', difficulty: 'hard',
    outcomeIds: ['chem11-org-simple-isomer-enumeration'], practiceRole: 'mastery_holdout', representationType: 'diagram', isMasteryHoldout: true, estimatedSeconds: 120,
    solution: {
      recognition: 'Liệt kê alkene C4 theo vị trí nối đôi và khung mạch.',
      reasoning: ['Mạch thẳng có but-1-ene và but-2-ene.', 'Mạch nhánh có 2-methylpropene; không tách cis/trans nên tổng là 3.'],
      commonMistake: 'Tính cis-but-2-ene và trans-but-2-ene như đồng phân cấu tạo.', reviewSuggestion: 'Phân biệt đồng phân cấu tạo và hình học.'
    }
  }
];

const expansion = buildChemistryPracticeExpansion(specs);

export const g11ChemistryOrganicBasicsExpandedQuestions = expansion.questions;
export const g11ChemistryOrganicBasicsExpandedSolutions = expansion.solutions;
export const g11ChemistryOrganicBasicsExpansionSpecs = specs;
