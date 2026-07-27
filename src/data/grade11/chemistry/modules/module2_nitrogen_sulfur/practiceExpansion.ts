import {
  buildChemistryPracticeExpansion,
  type ChemistryPracticeExpansionSpec
} from '../../practiceExpansionBuilder';

const specs: ChemistryPracticeExpansionSpec[] = [
  {
    id: 'chem11-ns-x001', topicId: 'chem11-t2', questionTypeId: 'chem11-qt18',
    subTypeId: 'chem11-ns-st-nh3-reducing',
    content: 'Trong phản ứng $2NH_3+3CuO\\rightarrow N_2+3Cu+3H_2O$, vai trò của $NH_3$ là',
    responseType: 'single_choice',
    options: ['A. Chất oxi hóa', 'B. Chất khử', 'C. Acid', 'D. Chất xúc tác'],
    correctAnswer: 'B', validatorType: 'choice', difficulty: 'medium',
    outcomeIds: ['chem11-ns-nh3-reducing'], practiceRole: 'near_transfer', representationType: 'equation', estimatedSeconds: 80,
    solution: {
      recognition: 'Xác định vai trò oxi hóa–khử của ammonia.',
      reasoning: ['Số oxi hóa của N tăng từ −3 trong NH₃ lên 0 trong N₂.', 'NH₃ bị oxi hóa nên là chất khử.'],
      commonMistake: 'Gọi chất bị oxi hóa là chất oxi hóa.', reviewSuggestion: 'Ôn mối liên hệ giữa biến đổi số oxi hóa và vai trò chất.'
    }
  },
  {
    id: 'chem11-ns-x002', topicId: 'chem11-t2', questionTypeId: 'chem11-qt18',
    subTypeId: 'chem11-ns-st-nh3-reducing',
    content: 'Theo $4NH_3+3O_2\\rightarrow2N_2+6H_2O$, cần bao nhiêu lít $O_2$ để phản ứng vừa đủ với 8,96 lít $NH_3$ ở cùng điều kiện?',
    responseType: 'short_answer', correctAnswer: '6.72', acceptedAnswers: ['6,72'],
    validatorType: 'number', difficulty: 'hard',
    outcomeIds: ['chem11-ns-nh3-reducing'], practiceRole: 'far_transfer', representationType: 'equation', isMasteryHoldout: true, estimatedSeconds: 105,
    solution: {
      recognition: 'Dùng tỉ lệ thể tích khí theo hệ số phương trình.',
      reasoning: ['Ở cùng điều kiện, tỉ lệ thể tích bằng tỉ lệ mol: $V_{O_2}/V_{NH_3}=3/4$.', '$V_{O_2}=8{,}96\\times3/4=6{,}72$ L.'],
      commonMistake: 'Dùng tỉ lệ 4/3 theo chiều ngược.', reviewSuggestion: 'Ôn tỉ lệ thể tích khí cùng điều kiện.'
    }
  },
  {
    id: 'chem11-ns-x003', topicId: 'chem11-t2', questionTypeId: 'chem11-qt18',
    subTypeId: 'chem11-ns-st-haber',
    content: 'Trong quá trình Haber tỏa nhiệt, lựa chọn công nghiệp dùng nhiệt độ vừa phải và xúc tác nhằm mục đích chính nào?',
    responseType: 'single_choice',
    options: ['A. Làm Kc vô hạn', 'B. Cân bằng giữa tốc độ, hiệu suất và chi phí', 'C. Loại bỏ hoàn toàn phản ứng nghịch', 'D. Không cần áp suất'],
    correctAnswer: 'B', validatorType: 'choice', difficulty: 'medium',
    outcomeIds: ['chem11-ns-haber-equilibrium'], practiceRole: 'near_transfer', representationType: 'text', estimatedSeconds: 80,
    solution: {
      recognition: 'Đánh giá điều kiện sản xuất ammonia.',
      reasoning: ['Nhiệt độ thấp có lợi cho cân bằng tỏa nhiệt nhưng tốc độ chậm.', 'Nhiệt độ vừa phải và xúc tác tạo thỏa hiệp thực tế về năng suất và chi phí.'],
      commonMistake: 'Chỉ tối đa hóa hiệu suất cân bằng.', reviewSuggestion: 'Ôn đánh đổi trong quy trình Haber.'
    }
  },
  {
    id: 'chem11-ns-x004', topicId: 'chem11-t2', questionTypeId: 'chem11-qt18',
    subTypeId: 'chem11-ns-st-haber',
    content: 'Cho 5,0 mol $N_2$ và 12,0 mol $H_2$ phản ứng theo $N_2+3H_2\\rightarrow2NH_3$. Nếu phản ứng hoàn toàn theo chất giới hạn, số mol $NH_3$ tối đa là bao nhiêu?',
    responseType: 'short_answer', correctAnswer: '8', acceptedAnswers: ['8,0', '8.0'],
    validatorType: 'number', difficulty: 'hard',
    outcomeIds: ['chem11-ns-haber-equilibrium'], practiceRole: 'far_transfer', representationType: 'equation', isMasteryHoldout: true, estimatedSeconds: 115,
    solution: {
      recognition: 'Tìm chất giới hạn trong tổng hợp ammonia.',
      reasoning: ['5 mol N₂ cần 15 mol H₂ nhưng chỉ có 12 mol, nên H₂ giới hạn.', 'Theo tỉ lệ 3 mol H₂ tạo 2 mol NH₃, 12 mol H₂ tạo 8 mol NH₃.'],
      commonMistake: 'Dùng N₂ làm chất giới hạn mà không so tỉ lệ.', reviewSuggestion: 'Ôn cách xác định chất giới hạn.'
    }
  },
  {
    id: 'chem11-ns-x005', topicId: 'chem11-t2', questionTypeId: 'chem11-qt18',
    subTypeId: 'chem11-ns-st-nh3-applications',
    content: 'Khi phát hiện mùi ammonia trong phòng thí nghiệm, hành động phù hợp nhất là',
    responseType: 'single_choice',
    options: ['A. Đến gần để xác định nguồn bằng cách ngửi.', 'B. Báo người phụ trách, rời vùng phơi nhiễm và tăng thông gió theo quy trình.', 'C. Đốt khí bằng lửa.', 'D. Trộn ngay với bleach.'],
    correctAnswer: 'B', validatorType: 'choice', difficulty: 'hard',
    outcomeIds: ['chem11-ns-nh3-applications'], practiceRole: 'misconception_check', representationType: 'experiment', estimatedSeconds: 75,
    solution: {
      recognition: 'Ứng phó rò rỉ ammonia theo nguyên tắc an toàn.',
      reasoning: ['NH₃ gây kích ứng và không được nhận biết bằng cách ngửi trực tiếp.', 'Cần báo người có trách nhiệm, tránh phơi nhiễm và thông gió theo quy trình cơ sở.'],
      commonMistake: 'Tiếp cận nguồn rò rỉ để kiểm tra.', reviewSuggestion: 'Ôn an toàn khi làm việc với khí độc/kích ứng.'
    }
  },
  {
    id: 'chem11-ns-x006', topicId: 'chem11-t2', questionTypeId: 'chem11-qt18',
    subTypeId: 'chem11-ns-st-nh3-applications',
    content: 'Vì sao không nên trộn phân ammonium với vôi tôi ngay trước khi bón?',
    responseType: 'single_choice',
    options: ['A. Tạo thêm nitrogen.', 'B. Base giải phóng $NH_3$, làm thất thoát đạm.', 'C. Tạo oxygen.', 'D. Làm mọi muối ammonium kết tủa xanh.'],
    correctAnswer: 'B', validatorType: 'choice', difficulty: 'hard',
    outcomeIds: ['chem11-ns-nh3-applications'], practiceRole: 'far_transfer', representationType: 'text', isMasteryHoldout: true, estimatedSeconds: 90,
    solution: {
      recognition: 'Liên hệ cân bằng ammonium–ammonia với sử dụng phân bón.',
      reasoning: ['Môi trường base chuyển $NH_4^+$ thành NH₃.', 'NH₃ dễ bay hơi nên nitrogen bị thất thoát khỏi đất.'],
      commonMistake: 'Cho rằng base luôn giữ nitrogen trong đất.', reviewSuggestion: 'Ôn phản ứng muối ammonium với base.'
    }
  },
  {
    id: 'chem11-ns-x007', topicId: 'chem11-t2', questionTypeId: 'chem11-qt23',
    subTypeId: 'chem11-ns-st-hno3-redox-role',
    content: 'Trong ion nitrate, nitrogen có số oxi hóa +5. Điều này giải thích tính chất nổi bật nào của $HNO_3$?',
    responseType: 'single_choice',
    options: ['A. Nitrogen dễ bị oxi hóa tiếp.', 'B. Nitrogen có thể nhận electron nên HNO₃ có tính oxi hóa mạnh.', 'C. HNO₃ chỉ là base.', 'D. HNO₃ không tham gia phản ứng redox.'],
    correctAnswer: 'B', validatorType: 'choice', difficulty: 'medium',
    outcomeIds: ['chem11-ns-hno3-oxidizing'], practiceRole: 'near_transfer', representationType: 'text', estimatedSeconds: 75,
    solution: {
      recognition: 'Liên hệ số oxi hóa cực đại với tính oxi hóa.',
      reasoning: ['+5 là số oxi hóa cao của nitrogen.', 'Nitrogen có xu hướng nhận electron và bị khử, khiến HNO₃ đóng vai trò chất oxi hóa.'],
      commonMistake: 'Cho rằng số oxi hóa cao làm chất chỉ có tính khử.', reviewSuggestion: 'Ôn ý nghĩa số oxi hóa trong dự đoán tính chất.'
    }
  },
  {
    id: 'chem11-ns-x008', topicId: 'chem11-t2', questionTypeId: 'chem11-qt23',
    subTypeId: 'chem11-ns-st-hno3-redox-role',
    content: 'Theo $C+4HNO_3(đặc)\\rightarrow CO_2+4NO_2+2H_2O$, cần bao nhiêu mol $HNO_3$ để oxi hóa vừa đủ 0,50 mol C?',
    responseType: 'short_answer', correctAnswer: '2', acceptedAnswers: ['2,0', '2.0'],
    validatorType: 'number', difficulty: 'hard',
    outcomeIds: ['chem11-ns-hno3-oxidizing'], practiceRole: 'far_transfer', representationType: 'equation', isMasteryHoldout: true, estimatedSeconds: 95,
    solution: {
      recognition: 'Tính tỉ lượng trong phản ứng HNO₃ đặc oxi hóa carbon.',
      reasoning: ['Phương trình cho tỉ lệ $n_{HNO_3}:n_C=4:1$.', '$n_{HNO_3}=4\\times0{,}50=2{,}0$ mol.'],
      commonMistake: 'Dùng tỉ lệ giữa C và NO₂ thay cho HNO₃.', reviewSuggestion: 'Đọc đúng hệ số của chất được hỏi.'
    }
  },
  {
    id: 'chem11-ns-x009', topicId: 'chem11-t2', questionTypeId: 'chem11-qt23',
    subTypeId: 'chem11-ns-st-hno3-metal',
    content: 'Theo $3Cu+8HNO_3(loãng)\\rightarrow3Cu(NO_3)_2+2NO+4H_2O$, 0,30 mol Cu tạo tối đa bao nhiêu mol NO?',
    responseType: 'short_answer', correctAnswer: '0.2', acceptedAnswers: ['0,2', '0.20', '0,20'],
    validatorType: 'number', difficulty: 'hard',
    outcomeIds: ['chem11-ns-hno3-oxidizing'], practiceRole: 'far_transfer', representationType: 'equation', isMasteryHoldout: true, estimatedSeconds: 100,
    solution: {
      recognition: 'Dùng tỉ lệ mol Cu:NO trong phản ứng với HNO₃ loãng.',
      reasoning: ['Tỉ lệ $n_{NO}:n_{Cu}=2:3$.', '$n_{NO}=0{,}30\\times2/3=0{,}20$ mol.'],
      commonMistake: 'Cho rằng một mol Cu luôn tạo một mol khí.', reviewSuggestion: 'Ôn phương trình Cu với HNO₃ loãng.'
    }
  },
  {
    id: 'chem11-ns-x010', topicId: 'chem11-t2', questionTypeId: 'chem11-qt23',
    subTypeId: 'chem11-ns-st-hno3-metal',
    content: 'Hiện tượng nào đúng khi cho Al sạch vào $HNO_3$ đặc, nguội trong điều kiện thông thường?',
    responseType: 'single_choice',
    options: ['A. Al tan nhanh và tạo H₂.', 'B. Al bị thụ động hóa.', 'C. Tạo kết tủa BaSO₄.', 'D. Chỉ tạo NH₃.'],
    correctAnswer: 'B', validatorType: 'choice', difficulty: 'medium',
    outcomeIds: ['chem11-ns-hno3-oxidizing'], practiceRole: 'misconception_check', representationType: 'experiment', estimatedSeconds: 75,
    solution: {
      recognition: 'Nhận biết hiện tượng thụ động hóa kim loại.',
      reasoning: ['HNO₃ đặc, nguội tạo lớp oxide bảo vệ trên Al.', 'Lớp này cản phản ứng tiếp tục trong điều kiện thường.'],
      commonMistake: 'Dùng quy tắc acid + kim loại tạo H₂ cho HNO₃.', reviewSuggestion: 'Ôn tính oxi hóa và hiện tượng thụ động hóa.'
    }
  },
  {
    id: 'chem11-ns-x011', topicId: 'chem11-t2', questionTypeId: 'chem11-qt23',
    subTypeId: 'chem11-ns-st-hno3-use-safety',
    content: 'Khi pha loãng nitric acid đậm đặc, thao tác phù hợp là',
    responseType: 'single_choice',
    options: ['A. Rót nhanh nước vào acid.', 'B. Thêm từ từ acid vào nước, khuấy và làm mát theo quy trình.', 'C. Dùng bình kín rồi lắc mạnh.', 'D. Không cần kính bảo hộ.'],
    correctAnswer: 'B', validatorType: 'choice', difficulty: 'hard',
    outcomeIds: ['chem11-ns-hno3-applications-safety'], practiceRole: 'misconception_check', representationType: 'experiment', estimatedSeconds: 70,
    solution: {
      recognition: 'Chọn quy trình pha loãng acid đậm đặc.',
      reasoning: ['Quá trình pha loãng tỏa nhiệt mạnh.', 'Thêm acid từ từ vào lượng nước lớn giúp tản nhiệt và giảm bắn tóe.'],
      commonMistake: 'Rót nước vào acid đậm đặc.', reviewSuggestion: 'Ôn nguyên tắc thêm acid vào nước.'
    }
  },
  {
    id: 'chem11-ns-x012', topicId: 'chem11-t2', questionTypeId: 'chem11-qt23',
    subTypeId: 'chem11-ns-st-hno3-use-safety',
    content: 'Phản ứng kim loại với $HNO_3$ có thể tạo $NO_2$. Biện pháp kiểm soát phù hợp nhất trong phòng thí nghiệm là',
    responseType: 'single_choice',
    options: ['A. Thực hiện trong tủ hút và xử lí khí theo quy trình.', 'B. Ngửi trực tiếp để nhận biết.', 'C. Bịt kín hoàn toàn bình không có lối thoát áp.', 'D. Thổi khí ra phòng học.'],
    correctAnswer: 'A', validatorType: 'choice', difficulty: 'hard',
    outcomeIds: ['chem11-ns-hno3-applications-safety'], practiceRole: 'far_transfer', representationType: 'experiment', isMasteryHoldout: true, estimatedSeconds: 80,
    solution: {
      recognition: 'Đánh giá rủi ro NO₂ trong thí nghiệm HNO₃.',
      reasoning: ['NO₂ là khí độc và kích ứng mạnh.', 'Tủ hút cùng hệ xử lí khí phù hợp giúp hạn chế phơi nhiễm và phát tán.'],
      commonMistake: 'Dựa vào mùi hoặc màu để tiếp xúc trực tiếp.', reviewSuggestion: 'Ôn kiểm soát khí độc trong phòng thí nghiệm.'
    }
  },
  {
    id: 'chem11-ns-x013', topicId: 'chem11-t2', questionTypeId: 'chem11-qt30',
    subTypeId: 'chem11-ns-st-h2so4-conc-oxidizing',
    content: 'Theo $Cu+2H_2SO_4(đặc)\\rightarrow CuSO_4+SO_2+2H_2O$, 0,20 mol Cu tạo tối đa bao nhiêu mol $SO_2$?',
    responseType: 'short_answer', correctAnswer: '0.2', acceptedAnswers: ['0,2', '0.20', '0,20'],
    validatorType: 'number', difficulty: 'hard',
    outcomeIds: ['chem11-ns-h2so4-concentrated-oxidizing'], practiceRole: 'far_transfer', representationType: 'equation', isMasteryHoldout: true, estimatedSeconds: 95,
    solution: {
      recognition: 'Tính tỉ lượng phản ứng Cu với H₂SO₄ đặc.',
      reasoning: ['Phương trình cho tỉ lệ Cu:SO₂ bằng 1:1.', '0,20 mol Cu tạo 0,20 mol SO₂ khi acid dư.'],
      commonMistake: 'Dùng hệ số 2 của H₂SO₄ cho SO₂.', reviewSuggestion: 'Đọc trực tiếp tỉ lệ chất cần tính.'
    }
  },
  {
    id: 'chem11-ns-x014', topicId: 'chem11-t2', questionTypeId: 'chem11-qt30',
    subTypeId: 'chem11-ns-st-h2so4-conc-oxidizing',
    content: 'Kim loại nào sau đây bị thụ động hóa trong $H_2SO_4$ đặc, nguội?',
    responseType: 'single_choice',
    options: ['A. Cu', 'B. Ag', 'C. Al', 'D. Hg'],
    correctAnswer: 'C', validatorType: 'choice', difficulty: 'medium',
    outcomeIds: ['chem11-ns-h2so4-concentrated-oxidizing'], practiceRole: 'near_transfer', representationType: 'text', estimatedSeconds: 65,
    solution: {
      recognition: 'Nhớ nhóm kim loại thụ động trong acid đặc, nguội.',
      reasoning: ['Al hình thành lớp oxide bảo vệ bền.', 'Vì vậy Al bị thụ động hóa trong H₂SO₄ đặc, nguội.'],
      commonMistake: 'Cho rằng mọi kim loại đều tan trong acid mạnh.', reviewSuggestion: 'Ôn hiện tượng thụ động hóa Al và Fe.'
    }
  },
  {
    id: 'chem11-ns-x015', topicId: 'chem11-t2', questionTypeId: 'chem11-qt30',
    subTypeId: 'chem11-ns-st-h2so4-dehydrating',
    content: 'Đường sucrose bị hóa đen và trương lên khi tiếp xúc với $H_2SO_4$ đặc chủ yếu do',
    responseType: 'single_choice',
    options: ['A. H₂SO₄ đặc tách nước khỏi carbohydrate.', 'B. Tạo BaSO₄.', 'C. Giải phóng H₂.', 'D. Sucrose nóng chảy không phản ứng.'],
    correctAnswer: 'A', validatorType: 'choice', difficulty: 'medium',
    outcomeIds: ['chem11-ns-h2so4-dehydrating'], practiceRole: 'near_transfer', representationType: 'experiment', estimatedSeconds: 75,
    solution: {
      recognition: 'Giải thích thí nghiệm carbon hóa đường.',
      reasoning: ['H₂SO₄ đặc có tính háo nước mạnh.', 'Nước bị tách khỏi carbohydrate, để lại carbon màu đen và hỗn hợp trương lên do nhiệt/hơi.'],
      commonMistake: 'Chỉ gọi đây là phản ứng cháy.', reviewSuggestion: 'Ôn tính háo nước của H₂SO₄ đặc.'
    }
  },
  {
    id: 'chem11-ns-x016', topicId: 'chem11-t2', questionTypeId: 'chem11-qt30',
    subTypeId: 'chem11-ns-st-h2so4-dehydrating',
    content: 'Theo $C_2H_5OH\\xrightarrow{H_2SO_4\\ đặc,\\ 170^\\circ C}C_2H_4+H_2O$, 0,50 mol ethanol tạo tối đa bao nhiêu mol nước?',
    responseType: 'short_answer', correctAnswer: '0.5', acceptedAnswers: ['0,5', '0.50', '0,50'],
    validatorType: 'number', difficulty: 'hard',
    outcomeIds: ['chem11-ns-h2so4-dehydrating'], practiceRole: 'far_transfer', representationType: 'equation', isMasteryHoldout: true, estimatedSeconds: 90,
    solution: {
      recognition: 'Tính tỉ lượng phản ứng tách nước ethanol.',
      reasoning: ['Phương trình cho tỉ lệ ethanol:nước bằng 1:1.', '0,50 mol ethanol tạo tối đa 0,50 mol nước.'],
      commonMistake: 'Cho rằng acid bị tiêu thụ theo tỉ lệ phản ứng.', reviewSuggestion: 'Ôn vai trò xúc tác và chất tách nước.'
    }
  },
  {
    id: 'chem11-ns-x017', topicId: 'chem11-t2', questionTypeId: 'chem11-qt30',
    subTypeId: 'chem11-ns-st-h2so4-experiment-safety',
    content: 'Cách pha loãng $H_2SO_4$ đặc an toàn hơn là',
    responseType: 'single_choice',
    options: ['A. Rót nước vào acid thật nhanh.', 'B. Thêm từ từ acid vào nước, khuấy và làm mát.', 'C. Đậy kín rồi lắc.', 'D. Đun nóng nước trước khi rót.'],
    correctAnswer: 'B', validatorType: 'choice', difficulty: 'hard',
    outcomeIds: ['chem11-ns-h2so4-experiment-safety'], practiceRole: 'misconception_check', representationType: 'experiment', estimatedSeconds: 70,
    solution: {
      recognition: 'Chọn thao tác pha loãng sulfuric acid đặc.',
      reasoning: ['Pha loãng tỏa nhiệt rất mạnh.', 'Thêm acid chậm vào nước giúp nhiệt phân tán trong thể tích nước lớn hơn.'],
      commonMistake: 'Rót nước vào acid gây sôi cục bộ và bắn tóe.', reviewSuggestion: 'Ghi nhớ quy tắc acid vào nước.'
    }
  },
  {
    id: 'chem11-ns-x018', topicId: 'chem11-t2', questionTypeId: 'chem11-qt30',
    subTypeId: 'chem11-ns-st-h2so4-experiment-safety',
    content: 'Khi đun Cu với $H_2SO_4$ đặc, khí sinh ra cần được kiểm soát vì',
    responseType: 'single_choice',
    options: ['A. SO₂ độc và gây kích ứng đường hô hấp.', 'B. H₂ tự cháy trong nước.', 'C. O₂ làm đông đặc acid.', 'D. CO₂ tạo kết tủa xanh.'],
    correctAnswer: 'A', validatorType: 'choice', difficulty: 'hard',
    outcomeIds: ['chem11-ns-h2so4-experiment-safety', 'chem11-ns-h2so4-concentrated-oxidizing'], practiceRole: 'far_transfer', representationType: 'experiment', isMasteryHoldout: true, estimatedSeconds: 75,
    solution: {
      recognition: 'Nhận diện khí và rủi ro trong thí nghiệm H₂SO₄ đặc.',
      reasoning: ['Cu khử sulfur trong H₂SO₄ từ +6 xuống +4, tạo SO₂.', 'SO₂ độc, gây kích ứng và phải được thực hiện trong hệ kiểm soát khí phù hợp.'],
      commonMistake: 'Cho rằng acid + kim loại tạo H₂.', reviewSuggestion: 'Ôn sản phẩm khử của H₂SO₄ đặc.'
    }
  },
  {
    id: 'chem11-ns-x019', topicId: 'chem11-t2', questionTypeId: 'chem11-qt32',
    subTypeId: 'chem11-ns-st-sulfate-salts',
    content: 'Công thức của thạch cao sống là',
    responseType: 'single_choice',
    options: ['A. $CaSO_4$', 'B. $CaSO_4\\cdot2H_2O$', 'C. $CaCO_3$', 'D. $BaSO_4$'],
    correctAnswer: 'B', validatorType: 'choice', difficulty: 'medium',
    outcomeIds: ['chem11-ns-sulfate-important-salts'], practiceRole: 'near_transfer', representationType: 'equation', estimatedSeconds: 60,
    solution: {
      recognition: 'Nhận biết hydrate sulfate quan trọng.',
      reasoning: ['Thạch cao sống là calcium sulfate dihydrate.', 'Công thức là $CaSO_4\\cdot2H_2O$.'],
      commonMistake: 'Nhầm thạch cao sống với calcium sulfate khan.', reviewSuggestion: 'Ôn công thức và ứng dụng các muối sulfate.'
    }
  },
  {
    id: 'chem11-ns-x020', topicId: 'chem11-t2', questionTypeId: 'chem11-qt32',
    subTypeId: 'chem11-ns-st-sulfate-salts',
    content: 'Dùng $Na=23$, $S=32$, $O=16$. Tính phần trăm khối lượng của ion sulfate trong $Na_2SO_4$, làm tròn đến một chữ số thập phân.',
    responseType: 'short_answer', correctAnswer: '67.6', acceptedAnswers: ['67,6', '67.6%'],
    validatorType: 'number', difficulty: 'hard',
    outcomeIds: ['chem11-ns-sulfate-important-salts'], practiceRole: 'far_transfer', representationType: 'equation', isMasteryHoldout: true, estimatedSeconds: 115,
    solution: {
      recognition: 'Tính thành phần khối lượng trong muối sulfate.',
      reasoning: ['$M_{SO_4}=96$ và $M_{Na_2SO_4}=142$ g/mol.', 'Phần trăm sulfate là $96/142\\times100\\approx67{,}6\\%$.'],
      commonMistake: 'Dùng khối lượng riêng của sulfur thay cho cả ion sulfate.', reviewSuggestion: 'Ôn phần trăm khối lượng theo công thức hóa học.'
    }
  },
  {
    id: 'chem11-ns-x021', topicId: 'chem11-t2', questionTypeId: 'chem11-qt32',
    subTypeId: 'chem11-ns-st-sulfate-test',
    content: 'Thuốc thử phù hợp để nhận biết ion sulfate sau khi acid hóa mẫu là',
    responseType: 'single_choice',
    options: ['A. Dung dịch $BaCl_2$', 'B. Dung dịch NaOH', 'C. Quỳ tím', 'D. Nước bromine'],
    correctAnswer: 'A', validatorType: 'choice', difficulty: 'medium',
    outcomeIds: ['chem11-ns-sulfate-identification'], practiceRole: 'near_transfer', representationType: 'experiment', estimatedSeconds: 65,
    solution: {
      recognition: 'Chọn thuốc thử tạo kết tủa sulfate đặc trưng.',
      reasoning: ['$Ba^{2+}+SO_4^{2-}\\rightarrow BaSO_4\\downarrow$.', 'BaSO₄ là kết tủa trắng bền trong môi trường acid dùng cho phép thử.'],
      commonMistake: 'Chọn thuốc thử không cung cấp Ba²⁺.', reviewSuggestion: 'Ôn phương trình ion nhận biết sulfate.'
    }
  },
  {
    id: 'chem11-ns-x022', topicId: 'chem11-t2', questionTypeId: 'chem11-qt32',
    subTypeId: 'chem11-ns-st-sulfate-test',
    content: 'Cho 0,100 mol $Na_2SO_4$ phản ứng với dư $BaCl_2$. Dùng $M_{BaSO_4}=233$ g/mol, tính khối lượng kết tủa theo gam.',
    responseType: 'short_answer', correctAnswer: '23.3', acceptedAnswers: ['23,3'],
    validatorType: 'number', difficulty: 'hard',
    outcomeIds: ['chem11-ns-sulfate-identification'], practiceRole: 'far_transfer', representationType: 'equation', isMasteryHoldout: true, estimatedSeconds: 100,
    solution: {
      recognition: 'Tính khối lượng kết tủa BaSO₄ theo tỉ lệ ion.',
      reasoning: ['Một mol sulfate tạo một mol BaSO₄, nên có 0,100 mol kết tủa.', '$m=0{,}100\\times233=23{,}3$ g.'],
      commonMistake: 'Nhân thêm hệ số 2 từ Na₂SO₄.', reviewSuggestion: 'Ôn phương trình ion rút gọn.'
    }
  },
  {
    id: 'chem11-ns-x023', topicId: 'chem11-t2', questionTypeId: 'chem11-qt32',
    subTypeId: 'chem11-ns-st-sulfate-data',
    content: 'Vì sao mẫu thường được acid hóa trước khi thêm ion $Ba^{2+}$ trong phép thử sulfate?',
    responseType: 'single_choice',
    options: ['A. Để tạo thêm sulfate.', 'B. Để loại nhiễu từ carbonate và một số ion tạo kết tủa trong môi trường không acid.', 'C. Để hòa tan BaSO₄.', 'D. Để tạo khí H₂.'],
    correctAnswer: 'B', validatorType: 'choice', difficulty: 'hard',
    outcomeIds: ['chem11-ns-sulfate-identification'], practiceRole: 'misconception_check', representationType: 'experiment', estimatedSeconds: 85,
    solution: {
      recognition: 'Giải thích bước xử lí mẫu trong phép thử sulfate.',
      reasoning: ['Carbonate có thể tạo BaCO₃ trắng và gây dương tính giả.', 'Acid hóa loại carbonate dưới dạng CO₂ trong khi BaSO₄ vẫn bền.'],
      commonMistake: 'Cho rằng acid hóa nhằm tạo thêm kết tủa.', reviewSuggestion: 'Ôn nguồn gây nhiễu của phép nhận biết ion.'
    }
  },
  {
    id: 'chem11-ns-x024', topicId: 'chem11-t2', questionTypeId: 'chem11-qt32',
    subTypeId: 'chem11-ns-st-sulfate-data',
    content: '100,0 mL dung dịch sulfate tạo 2,33 g $BaSO_4$ với dư $Ba^{2+}$. Dùng $M_{BaSO_4}=233$ g/mol, tính nồng độ mol của ion sulfate.',
    responseType: 'short_answer', correctAnswer: '0.1', acceptedAnswers: ['0,1', '0.100', '0,100'],
    validatorType: 'number', difficulty: 'hard',
    outcomeIds: ['chem11-ns-sulfate-identification'], practiceRole: 'mastery_holdout', representationType: 'table', isMasteryHoldout: true, estimatedSeconds: 125,
    solution: {
      recognition: 'Suy nồng độ sulfate từ khối lượng kết tủa.',
      reasoning: ['$n_{BaSO_4}=2{,}33/233=0{,}0100$ mol, bằng mol sulfate trong mẫu.', '$[SO_4^{2-}]=0{,}0100/0{,}1000=0{,}100$ M.'],
      commonMistake: 'Dùng thể tích 100 mL như 100 L.', reviewSuggestion: 'Ôn đổi đơn vị và tỉ lệ kết tủa.'
    }
  }
];

const expansion = buildChemistryPracticeExpansion(specs);

export const g11ChemistryNitrogenSulfurExpandedQuestions = expansion.questions;
export const g11ChemistryNitrogenSulfurExpandedSolutions = expansion.solutions;
export const g11ChemistryNitrogenSulfurExpansionSpecs = specs;
