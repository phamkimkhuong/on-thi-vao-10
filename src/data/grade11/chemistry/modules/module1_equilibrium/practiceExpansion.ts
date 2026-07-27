import {
  buildChemistryPracticeExpansion,
  type ChemistryPracticeExpansionSpec
} from '../../practiceExpansionBuilder';

const specs: ChemistryPracticeExpansionSpec[] = [
  {
    id: 'chem11-eq-x001', topicId: 'chem11-t1', questionTypeId: 'chem11-qt03',
    subTypeId: 'chem11-eq-st-kc-expression',
    content: 'Với cân bằng $CaCO_3(s)\\rightleftharpoons CaO(s)+CO_2(g)$, biểu thức $K_C$ là',
    responseType: 'single_choice',
    options: ['A. $[CaO][CO_2]/[CaCO_3]$', 'B. $[CO_2]$', 'C. $[CaO][CO_2]$', 'D. $1/[CO_2]$'],
    correctAnswer: 'B', validatorType: 'choice', difficulty: 'medium',
    outcomeIds: ['chem11-eq-kc-expression'], practiceRole: 'near_transfer', representationType: 'equation', estimatedSeconds: 70,
    solution: {
      recognition: 'Viết Kc cho cân bằng dị thể và loại pha tinh khiết.',
      reasoning: ['CaCO₃ và CaO là chất rắn tinh khiết nên không xuất hiện trong biểu thức.', 'Chỉ CO₂ ở pha khí được giữ lại, do đó $K_C=[CO_2]$.'],
      commonMistake: 'Đưa nồng độ chất rắn tinh khiết vào Kc.', reviewSuggestion: 'Ôn quy tắc lọc trạng thái chất khi viết Kc.'
    }
  },
  {
    id: 'chem11-eq-x002', topicId: 'chem11-t1', questionTypeId: 'chem11-qt03',
    subTypeId: 'chem11-eq-st-kc-expression',
    content: 'Một phản ứng có $K_C=4{,}0$. Viết phản ứng theo chiều nghịch thì hằng số cân bằng mới bằng bao nhiêu?',
    responseType: 'short_answer', correctAnswer: '0.25', acceptedAnswers: ['0,25', '1/4'],
    validatorType: 'number', difficulty: 'hard',
    outcomeIds: ['chem11-eq-kc-expression'], practiceRole: 'far_transfer', representationType: 'equation', isMasteryHoldout: true, estimatedSeconds: 95,
    solution: {
      recognition: 'Đổi hằng số cân bằng khi đảo chiều phương trình.',
      reasoning: ['Khi đảo chiều phản ứng, biểu thức Kc bị nghịch đảo.', '$K_C^{mới}=1/4{,}0=0{,}25$.'],
      commonMistake: 'Giữ nguyên Kc khi đảo chiều.', reviewSuggestion: 'Ôn quan hệ giữa cách viết phương trình và Kc.'
    }
  },
  {
    id: 'chem11-eq-x003', topicId: 'chem11-t1', questionTypeId: 'chem11-qt03',
    subTypeId: 'chem11-eq-st-kc-calculation',
    content: 'Ở cân bằng $H_2+I_2\\rightleftharpoons2HI$, có $[H_2]=[I_2]=0{,}20$ M và $[HI]=0{,}80$ M. Giá trị $K_C$ là',
    responseType: 'single_choice',
    options: ['A. 4', 'B. 8', 'C. 16', 'D. 32'],
    correctAnswer: 'C', validatorType: 'choice', difficulty: 'medium',
    outcomeIds: ['chem11-eq-kc-calculation'], practiceRole: 'near_transfer', representationType: 'equation', estimatedSeconds: 90,
    solution: {
      recognition: 'Tính Kc từ nồng độ cân bằng.',
      reasoning: ['$K_C=[HI]^2/([H_2][I_2])$.', 'Thay số: $0{,}80^2/(0{,}20\\times0{,}20)=16$.'],
      commonMistake: 'Quên bình phương nồng độ HI.', reviewSuggestion: 'Ôn cách dùng hệ số làm số mũ.'
    }
  },
  {
    id: 'chem11-eq-x004', topicId: 'chem11-t1', questionTypeId: 'chem11-qt03',
    subTypeId: 'chem11-eq-st-kc-calculation',
    content: 'Ở cân bằng $N_2O_4\\rightleftharpoons2NO_2$, $[N_2O_4]=0{,}40$ M và $[NO_2]=0{,}20$ M. Tính $K_C$.',
    responseType: 'short_answer', correctAnswer: '0.1', acceptedAnswers: ['0,1'],
    validatorType: 'number', difficulty: 'hard',
    outcomeIds: ['chem11-eq-kc-calculation'], practiceRole: 'far_transfer', representationType: 'equation', isMasteryHoldout: true, estimatedSeconds: 105,
    solution: {
      recognition: 'Tính Kc và xử lí số mũ của sản phẩm.',
      reasoning: ['$K_C=[NO_2]^2/[N_2O_4]$.', '$K_C=0{,}20^2/0{,}40=0{,}10$.'],
      commonMistake: 'Dùng $2[NO_2]$ thay cho $[NO_2]^2$.', reviewSuggestion: 'Luyện thay nồng độ cân bằng vào biểu thức Kc.'
    }
  },
  {
    id: 'chem11-eq-x005', topicId: 'chem11-t1', questionTypeId: 'chem11-qt03',
    subTypeId: 'chem11-eq-st-kc-meaning',
    content: 'Cùng nhiệt độ, phản ứng I có $K_C=10^5$, phản ứng II có $K_C=10^{-3}$. Nhận xét đúng là',
    responseType: 'single_choice',
    options: ['A. I chắc chắn nhanh hơn II.', 'B. I ưu tiên sản phẩm hơn II ở cân bằng.', 'C. II không thể xảy ra.', 'D. Hai phản ứng có cùng thành phần cân bằng.'],
    correctAnswer: 'B', validatorType: 'choice', difficulty: 'hard',
    outcomeIds: ['chem11-eq-kc-meaning'], practiceRole: 'misconception_check', representationType: 'text', estimatedSeconds: 85,
    solution: {
      recognition: 'Diễn giải độ lớn Kc mà không suy diễn tốc độ.',
      reasoning: ['Kc lớn cho biết phía sản phẩm được ưu tiên tương đối.', 'Kc không cung cấp trực tiếp thông tin về tốc độ phản ứng.'],
      commonMistake: 'Đồng nhất Kc lớn với phản ứng nhanh.', reviewSuggestion: 'Phân biệt nhiệt động học cân bằng và động học.'
    }
  },
  {
    id: 'chem11-eq-x006', topicId: 'chem11-t1', questionTypeId: 'chem11-qt03',
    subTypeId: 'chem11-eq-st-kc-meaning',
    content: 'Một hệ có $K_C=4$. Tại một thời điểm, thương số nồng độ tính theo đúng biểu thức của Kc bằng 1. Hệ sẽ biến đổi ưu tiên theo chiều nào để đạt cân bằng?',
    responseType: 'single_choice',
    options: ['A. Chiều thuận', 'B. Chiều nghịch', 'C. Không biến đổi', 'D. Không thể kết luận vì Kc luôn bằng 1'],
    correctAnswer: 'A', validatorType: 'choice', difficulty: 'hard',
    outcomeIds: ['chem11-eq-kc-meaning'], practiceRole: 'far_transfer', representationType: 'equation', isMasteryHoldout: true, estimatedSeconds: 110,
    solution: {
      recognition: 'So sánh thương số phản ứng với Kc.',
      reasoning: ['Giá trị hiện thời 1 nhỏ hơn $K_C=4$.', 'Hệ cần tăng tỉ số sản phẩm/chất đầu nên chuyển dịch theo chiều thuận.'],
      commonMistake: 'Cho rằng thương số hiện thời luôn bằng Kc.', reviewSuggestion: 'Ôn ý nghĩa điều kiện $Q=K$ tại cân bằng.'
    }
  },
  {
    id: 'chem11-eq-x007', topicId: 'chem11-t1', questionTypeId: 'chem11-qt04',
    subTypeId: 'chem11-eq-st-shift-concentration',
    content: 'Trong cân bằng $Fe^{3+}+SCN^-\\rightleftharpoons FeSCN^{2+}$, thêm $SCN^-$ làm cân bằng',
    responseType: 'single_choice',
    options: ['A. Chuyển sang trái', 'B. Chuyển sang phải', 'C. Không chuyển dịch', 'D. Làm Kc giảm'],
    correctAnswer: 'B', validatorType: 'choice', difficulty: 'medium',
    outcomeIds: ['chem11-eq-shift-concentration'], practiceRole: 'near_transfer', representationType: 'equation', estimatedSeconds: 70,
    solution: {
      recognition: 'Áp dụng Le Chatelier với thay đổi nồng độ.',
      reasoning: ['SCN⁻ là chất phản ứng và vừa được tăng nồng độ.', 'Hệ chuyển sang phải để tiêu thụ bớt SCN⁻.'],
      commonMistake: 'Học máy móc rằng thêm chất luôn chuyển sang trái.', reviewSuggestion: 'Xác định chất bị tác động nằm ở vế nào.'
    }
  },
  {
    id: 'chem11-eq-x008', topicId: 'chem11-t1', questionTypeId: 'chem11-qt04',
    subTypeId: 'chem11-eq-st-shift-concentration',
    content: 'Với $A+B\\rightleftharpoons C$, liên tục lấy bớt C khỏi hệ ở nhiệt độ không đổi làm cân bằng chuyển dịch theo chiều nào?',
    responseType: 'short_answer', correctAnswer: 'sang phải', acceptedAnswers: ['phải', 'chiều thuận', 'thuận'],
    validatorType: 'exact', difficulty: 'hard',
    outcomeIds: ['chem11-eq-shift-concentration'], practiceRole: 'far_transfer', representationType: 'equation', isMasteryHoldout: true, estimatedSeconds: 90,
    solution: {
      recognition: 'Xét tác động lấy bớt sản phẩm.',
      reasoning: ['Nồng độ C bị giảm.', 'Hệ ưu tiên chiều tạo thêm C, tức chiều thuận hay sang phải.'],
      commonMistake: 'Cho rằng lấy chất ở vế phải làm cân bằng sang trái.', reviewSuggestion: 'Ôn quy tắc chống lại sự thay đổi nồng độ.'
    }
  },
  {
    id: 'chem11-eq-x009', topicId: 'chem11-t1', questionTypeId: 'chem11-qt04',
    subTypeId: 'chem11-eq-st-shift-pressure',
    content: 'Với $N_2(g)+3H_2(g)\\rightleftharpoons2NH_3(g)$, giảm thể tích bình ở nhiệt độ không đổi làm cân bằng',
    responseType: 'single_choice',
    options: ['A. Sang trái', 'B. Sang phải', 'C. Không chuyển dịch', 'D. Kc giảm'],
    correctAnswer: 'B', validatorType: 'choice', difficulty: 'medium',
    outcomeIds: ['chem11-eq-shift-pressure'], practiceRole: 'near_transfer', representationType: 'equation', estimatedSeconds: 75,
    solution: {
      recognition: 'So sánh tổng hệ số khí khi áp suất tăng.',
      reasoning: ['Giảm thể tích làm áp suất tăng.', 'Phía phải có 2 mol khí, ít hơn 4 mol khí phía trái nên được ưu tiên.'],
      commonMistake: 'Không đếm hệ số khí từng vế.', reviewSuggestion: 'Ôn ảnh hưởng áp suất lên cân bằng khí.'
    }
  },
  {
    id: 'chem11-eq-x010', topicId: 'chem11-t1', questionTypeId: 'chem11-qt04',
    subTypeId: 'chem11-eq-st-shift-pressure',
    content: 'Với $CO(g)+H_2O(g)\\rightleftharpoons CO_2(g)+H_2(g)$, giảm thể tích bình làm cân bằng chuyển dịch thế nào?',
    responseType: 'short_answer', correctAnswer: 'không chuyển dịch', acceptedAnswers: ['không đổi', 'không'],
    validatorType: 'exact', difficulty: 'hard',
    outcomeIds: ['chem11-eq-shift-pressure'], practiceRole: 'far_transfer', representationType: 'equation', isMasteryHoldout: true, estimatedSeconds: 90,
    solution: {
      recognition: 'Kiểm tra trường hợp hai vế có cùng tổng mol khí.',
      reasoning: ['Mỗi vế có tổng hệ số khí bằng 2.', 'Nén hoặc giãn bình không ưu tiên vế nào nên cân bằng không chuyển dịch.'],
      commonMistake: 'Cho rằng tăng áp suất luôn gây chuyển dịch.', reviewSuggestion: 'Luôn so sánh tổng số mol khí hai vế.'
    }
  },
  {
    id: 'chem11-eq-x011', topicId: 'chem11-t1', questionTypeId: 'chem11-qt04',
    subTypeId: 'chem11-eq-st-shift-no-effect',
    content: 'Trong cân bằng dị thể $CaCO_3(s)\\rightleftharpoons CaO(s)+CO_2(g)$, thêm một lượng $CaCO_3(s)$ khi cả hai chất rắn vẫn có mặt sẽ',
    responseType: 'single_choice',
    options: ['A. Chuyển sang phải', 'B. Chuyển sang trái', 'C. Không làm chuyển dịch cân bằng', 'D. Làm Kc tăng'],
    correctAnswer: 'C', validatorType: 'choice', difficulty: 'hard',
    outcomeIds: ['chem11-eq-shift-concentration'], practiceRole: 'misconception_check', representationType: 'equation', estimatedSeconds: 95,
    solution: {
      recognition: 'Xét ảnh hưởng của pha rắn tinh khiết.',
      reasoning: ['Hoạt độ của chất rắn tinh khiết không xuất hiện trong biểu thức Kc.', 'Thêm CaCO₃ khi pha rắn vẫn tồn tại không làm đổi trạng thái cân bằng.'],
      commonMistake: 'Áp dụng quy tắc thêm chất mà không xét trạng thái pha.', reviewSuggestion: 'Ôn cân bằng dị thể.'
    }
  },
  {
    id: 'chem11-eq-x012', topicId: 'chem11-t1', questionTypeId: 'chem11-qt04',
    subTypeId: 'chem11-eq-st-shift-no-effect',
    content: 'Một cân bằng có $K_C=5{,}0$ ở nhiệt độ xác định. Giảm thể tích bình xuống một nửa nhưng giữ nguyên nhiệt độ. Giá trị $K_C$ sau khi hệ đạt cân bằng mới là bao nhiêu?',
    responseType: 'short_answer', correctAnswer: '5', acceptedAnswers: ['5,0', '5.0'],
    validatorType: 'number', difficulty: 'hard',
    outcomeIds: ['chem11-eq-shift-pressure'], practiceRole: 'far_transfer', representationType: 'text', isMasteryHoldout: true, estimatedSeconds: 85,
    solution: {
      recognition: 'Phân biệt chuyển dịch cân bằng với thay đổi hằng số cân bằng.',
      reasoning: ['Thể tích có thể làm thành phần cân bằng thay đổi.', 'Ở nhiệt độ không đổi, Kc của phương trình vẫn bằng 5,0.'],
      commonMistake: 'Cho rằng nén hệ luôn làm Kc tăng.', reviewSuggestion: 'Ôn yếu tố quyết định Kc.'
    }
  },
  {
    id: 'chem11-eq-x013', topicId: 'chem11-t1', questionTypeId: 'chem11-qt09',
    subTypeId: 'chem11-aq-st-water-equilibrium',
    content: 'Ở 25 °C, dung dịch có $[H^+]=10^{-5}$ M. Nồng độ $OH^-$ là',
    responseType: 'single_choice',
    options: ['A. $10^{-5}$ M', 'B. $10^{-7}$ M', 'C. $10^{-9}$ M', 'D. $10^{-14}$ M'],
    correctAnswer: 'C', validatorType: 'choice', difficulty: 'medium',
    outcomeIds: ['chem11-aq-water-equilibrium'], practiceRole: 'near_transfer', representationType: 'equation', estimatedSeconds: 75,
    solution: {
      recognition: 'Dùng tích số ion của nước ở 25 °C.',
      reasoning: ['$[H^+][OH^-]=10^{-14}$.', '$[OH^-]=10^{-14}/10^{-5}=10^{-9}$ M.'],
      commonMistake: 'Cho rằng hai nồng độ luôn bằng nhau.', reviewSuggestion: 'Ôn quan hệ Kw.'
    }
  },
  {
    id: 'chem11-eq-x014', topicId: 'chem11-t1', questionTypeId: 'chem11-qt09',
    subTypeId: 'chem11-aq-st-water-equilibrium',
    content: 'Ở 25 °C, dung dịch có $[H^+]=2{,}0\\times10^{-4}$ M. Tính $[OH^-]$ theo đơn vị M.',
    responseType: 'short_answer', correctAnswer: '5e-11', acceptedAnswers: ['5×10^-11', '5.0e-11', '0.00000000005'],
    validatorType: 'number', difficulty: 'hard',
    outcomeIds: ['chem11-aq-water-equilibrium'], practiceRole: 'far_transfer', representationType: 'equation', isMasteryHoldout: true, estimatedSeconds: 100,
    solution: {
      recognition: 'Tính nồng độ ion liên hợp từ Kw.',
      reasoning: ['$[OH^-]=10^{-14}/[H^+]$.', '$[OH^-]=10^{-14}/(2{,}0\\times10^{-4})=5{,}0\\times10^{-11}$ M.'],
      commonMistake: 'Nhân hai nồng độ thay vì chia Kw.', reviewSuggestion: 'Luyện tính với lũy thừa 10.'
    }
  },
  {
    id: 'chem11-eq-x015', topicId: 'chem11-t1', questionTypeId: 'chem11-qt09',
    subTypeId: 'chem11-aq-st-ph-conversion',
    content: 'Dung dịch có pH = 4,00 thì $[H^+]$ bằng',
    responseType: 'single_choice',
    options: ['A. $4{,}00$ M', 'B. $10^{-4}$ M', 'C. $10^{-10}$ M', 'D. $4\\times10^{-7}$ M'],
    correctAnswer: 'B', validatorType: 'choice', difficulty: 'medium',
    outcomeIds: ['chem11-aq-ph-conversion'], practiceRole: 'near_transfer', representationType: 'equation', estimatedSeconds: 65,
    solution: {
      recognition: 'Đổi pH sang nồng độ hydrogen ion.',
      reasoning: ['$[H^+]=10^{-pH}$.', 'Với pH = 4,00, $[H^+]=10^{-4}$ M.'],
      commonMistake: 'Dùng [H⁺] = pH.', reviewSuggestion: 'Ôn định nghĩa logarit của pH.'
    }
  },
  {
    id: 'chem11-eq-x016', topicId: 'chem11-t1', questionTypeId: 'chem11-qt09',
    subTypeId: 'chem11-aq-st-ph-conversion',
    content: 'Ở 25 °C, một dung dịch có pOH = 3. Tính pH.',
    responseType: 'short_answer', correctAnswer: '11', acceptedAnswers: ['11,0', '11.0'],
    validatorType: 'number', difficulty: 'hard',
    outcomeIds: ['chem11-aq-ph-conversion', 'chem11-aq-water-equilibrium'], practiceRole: 'far_transfer', representationType: 'equation', isMasteryHoldout: true, estimatedSeconds: 75,
    solution: {
      recognition: 'Dùng quan hệ pH và pOH ở 25 °C.',
      reasoning: ['$pH+pOH=14$.', '$pH=14-3=11$.'],
      commonMistake: 'Dùng pH = pOH.', reviewSuggestion: 'Ôn chuyển đổi pH–pOH.'
    }
  },
  {
    id: 'chem11-eq-x017', topicId: 'chem11-t1', questionTypeId: 'chem11-qt09',
    subTypeId: 'chem11-aq-st-ph-simple-solution',
    content: 'Bỏ qua sự tự điện li của nước, dung dịch HCl 0,0020 M có pH gần nhất với giá trị nào?',
    responseType: 'single_choice',
    options: ['A. 1,70', 'B. 2,70', 'C. 3,70', 'D. 11,30'],
    correctAnswer: 'B', validatorType: 'choice', difficulty: 'hard',
    outcomeIds: ['chem11-aq-ph-simple-solution'], practiceRole: 'near_transfer', representationType: 'equation', estimatedSeconds: 100,
    solution: {
      recognition: 'Tính pH acid mạnh một nấc.',
      reasoning: ['HCl điện li hoàn toàn nên $[H^+]=0{,}0020=2\\times10^{-3}$ M.', '$pH=-\\log(2\\times10^{-3})\\approx2{,}70$.'],
      commonMistake: 'Chỉ lấy số mũ và bỏ hệ số 2.', reviewSuggestion: 'Luyện logarit nồng độ không phải lũy thừa tròn.'
    }
  },
  {
    id: 'chem11-eq-x018', topicId: 'chem11-t1', questionTypeId: 'chem11-qt09',
    subTypeId: 'chem11-aq-st-ph-simple-solution',
    content: 'Bỏ qua sự tự điện li của nước, tính pH của dung dịch $Ba(OH)_2$ 0,0050 M, coi base điện li hoàn toàn.',
    responseType: 'short_answer', correctAnswer: '12', acceptedAnswers: ['12,0', '12.0'],
    validatorType: 'number', difficulty: 'hard',
    outcomeIds: ['chem11-aq-ph-simple-solution'], practiceRole: 'far_transfer', representationType: 'equation', isMasteryHoldout: true, estimatedSeconds: 110,
    solution: {
      recognition: 'Tính pH base mạnh tạo hai ion OH⁻.',
      reasoning: ['$[OH^-]=2\\times0{,}0050=0{,}010$ M nên pOH = 2.', 'Ở 25 °C, pH = 14 − 2 = 12.'],
      commonMistake: 'Bỏ hệ số 2 của OH⁻.', reviewSuggestion: 'Ôn hệ số điện li trước khi tính pH.'
    }
  },
  {
    id: 'chem11-eq-x019', topicId: 'chem11-t1', questionTypeId: 'chem11-qt14',
    subTypeId: 'chem11-aq-st-titration-calc-one-one',
    content: '25,0 mL HCl được trung hòa bởi 20,0 mL NaOH 0,100 M. Nồng độ HCl là',
    responseType: 'single_choice',
    options: ['A. 0,040 M', 'B. 0,080 M', 'C. 0,100 M', 'D. 0,125 M'],
    correctAnswer: 'B', validatorType: 'choice', difficulty: 'medium',
    outcomeIds: ['chem11-aq-titration-calculation'], practiceRole: 'near_transfer', representationType: 'equation', estimatedSeconds: 100,
    solution: {
      recognition: 'Chuẩn độ acid–base theo tỉ lệ 1:1.',
      reasoning: ['$n_{NaOH}=0{,}100\\times0{,}0200=0{,}00200$ mol nên $n_{HCl}=0{,}00200$ mol.', '$C_{HCl}=0{,}00200/0{,}0250=0{,}0800$ M.'],
      commonMistake: 'Không đổi mL sang L.', reviewSuggestion: 'Ôn quy trình n = CV và tỉ lệ phản ứng.'
    }
  },
  {
    id: 'chem11-eq-x020', topicId: 'chem11-t1', questionTypeId: 'chem11-qt14',
    subTypeId: 'chem11-aq-st-titration-calc-one-one',
    content: '20,0 mL NaOH chưa biết nồng độ cần 16,0 mL HCl 0,125 M để trung hòa. Tính nồng độ NaOH theo đơn vị M.',
    responseType: 'short_answer', correctAnswer: '0.1', acceptedAnswers: ['0,1', '0.100', '0,100'],
    validatorType: 'number', difficulty: 'hard',
    outcomeIds: ['chem11-aq-titration-calculation'], practiceRole: 'far_transfer', representationType: 'equation', isMasteryHoldout: true, estimatedSeconds: 110,
    solution: {
      recognition: 'Tính ngược nồng độ từ chuẩn độ 1:1.',
      reasoning: ['$n_{HCl}=0{,}125\\times0{,}0160=0{,}00200$ mol, bằng mol NaOH.', '$C_{NaOH}=0{,}00200/0{,}0200=0{,}100$ M.'],
      commonMistake: 'Chia cho thể tích dung dịch chuẩn thay vì thể tích mẫu.', reviewSuggestion: 'Gắn số mol với đúng dung dịch.'
    }
  },
  {
    id: 'chem11-eq-x021', topicId: 'chem11-t1', questionTypeId: 'chem11-qt14',
    subTypeId: 'chem11-aq-st-titration-calc-stoich',
    content: '10,0 mL $H_2SO_4$ cần 25,0 mL NaOH 0,0800 M để trung hòa hoàn toàn. Nồng độ $H_2SO_4$ là',
    responseType: 'single_choice',
    options: ['A. 0,0500 M', 'B. 0,100 M', 'C. 0,160 M', 'D. 0,200 M'],
    correctAnswer: 'B', validatorType: 'choice', difficulty: 'medium',
    outcomeIds: ['chem11-aq-titration-calculation'], practiceRole: 'near_transfer', representationType: 'equation', estimatedSeconds: 110,
    solution: {
      recognition: 'Chuẩn độ có tỉ lệ mol acid:base bằng 1:2.',
      reasoning: ['$n_{NaOH}=0{,}0800\\times0{,}0250=0{,}00200$ mol nên $n_{H_2SO_4}=0{,}00100$ mol.', '$C=0{,}00100/0{,}0100=0{,}100$ M.'],
      commonMistake: 'Dùng tỉ lệ 1:1 cho H₂SO₄ và NaOH.', reviewSuggestion: 'Viết phương trình trước khi lấy tỉ lệ mol.'
    }
  },
  {
    id: 'chem11-eq-x022', topicId: 'chem11-t1', questionTypeId: 'chem11-qt14',
    subTypeId: 'chem11-aq-st-titration-calc-stoich',
    content: '25,0 mL $Ca(OH)_2$ cần 30,0 mL HCl 0,200 M để trung hòa hoàn toàn. Tính nồng độ $Ca(OH)_2$ theo đơn vị M.',
    responseType: 'short_answer', correctAnswer: '0.12', acceptedAnswers: ['0,12', '0.120', '0,120'],
    validatorType: 'number', difficulty: 'hard',
    outcomeIds: ['chem11-aq-titration-calculation'], practiceRole: 'far_transfer', representationType: 'equation', isMasteryHoldout: true, estimatedSeconds: 120,
    solution: {
      recognition: 'Chuẩn độ base hai nấc bằng acid một nấc.',
      reasoning: ['$n_{HCl}=0{,}200\\times0{,}0300=0{,}00600$ mol; $n_{Ca(OH)_2}=0{,}00300$ mol.', '$C=0{,}00300/0{,}0250=0{,}120$ M.'],
      commonMistake: 'Đảo tỉ lệ $n_{HCl}=2n_{Ca(OH)_2}$.', reviewSuggestion: 'Ôn hệ số phương trình trung hòa.'
    }
  },
  {
    id: 'chem11-eq-x023', topicId: 'chem11-t1', questionTypeId: 'chem11-qt14',
    subTypeId: 'chem11-aq-st-titration-calc-multistep',
    content: 'Lấy 10,0 mL mẫu NaOH, pha loãng thành 100,0 mL. Chuẩn độ 25,0 mL dung dịch đã pha loãng cần 20,0 mL HCl 0,0500 M. Nồng độ mẫu NaOH ban đầu là',
    responseType: 'single_choice',
    options: ['A. 0,0400 M', 'B. 0,100 M', 'C. 0,400 M', 'D. 4,00 M'],
    correctAnswer: 'C', validatorType: 'choice', difficulty: 'hard',
    outcomeIds: ['chem11-aq-titration-calculation'], practiceRole: 'far_transfer', representationType: 'text', estimatedSeconds: 135,
    solution: {
      recognition: 'Kết hợp chuẩn độ aliquot với hệ số pha loãng.',
      reasoning: ['Aliquot chứa 0,0500 × 0,0200 = 0,00100 mol NaOH, nên dung dịch pha loãng có C = 0,00100/0,0250 = 0,0400 M.', 'Mẫu đã được pha loãng 10 lần nên nồng độ ban đầu là 0,400 M.'],
      commonMistake: 'Áp dụng hệ số pha loãng theo chiều ngược.', reviewSuggestion: 'Tách bước tính dung dịch pha loãng và suy ngược mẫu gốc.'
    }
  },
  {
    id: 'chem11-eq-x024', topicId: 'chem11-t1', questionTypeId: 'chem11-qt14',
    subTypeId: 'chem11-aq-st-titration-calc-multistep',
    content: 'Ba titre phù hợp là 24,80; 24,90 và 24,85 mL NaOH 0,1000 M để chuẩn độ 25,00 mL HCl. Tính nồng độ HCl theo đơn vị M.',
    responseType: 'short_answer', correctAnswer: '0.0994', acceptedAnswers: ['0,0994'],
    validatorType: 'number', difficulty: 'hard',
    outcomeIds: ['chem11-aq-titration-calculation'], practiceRole: 'mastery_holdout', representationType: 'table', isMasteryHoldout: true, estimatedSeconds: 140,
    solution: {
      recognition: 'Tính titre trung bình rồi dùng tỉ lệ chuẩn độ 1:1.',
      reasoning: ['Titre trung bình là $(24{,}80+24{,}90+24{,}85)/3=24{,}85$ mL.', '$C_{HCl}=0{,}1000\\times24{,}85/25{,}00=0{,}0994$ M.'],
      commonMistake: 'Dùng một số đọc riêng hoặc quên đổi cùng đơn vị thể tích.', reviewSuggestion: 'Luyện xử lí bảng titre trước khi tính nồng độ.'
    }
  }
];

const expansion = buildChemistryPracticeExpansion(specs);

export const g11ChemistryEquilibriumExpandedQuestions = expansion.questions;
export const g11ChemistryEquilibriumExpandedSolutions = expansion.solutions;
export const g11ChemistryEquilibriumExpansionSpecs = specs;
