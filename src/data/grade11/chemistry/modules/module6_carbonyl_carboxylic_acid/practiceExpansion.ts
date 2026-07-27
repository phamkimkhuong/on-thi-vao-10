import {
  buildChemistryPracticeExpansion,
  type ChemistryPracticeExpansionSpec
} from '../../practiceExpansionBuilder';

const specs: ChemistryPracticeExpansionSpec[] = [
  {
    id: 'chem11-cc-x001', topicId: 'chem11-t6', questionTypeId: 'chem11-qt78',
    subTypeId: 'chem11-car-st-tollens-oxidation',
    content: 'Cho 0,15 mol ethanal phản ứng hoàn toàn với thuốc thử Tollens dư. Số mol Ag tối đa là bao nhiêu?',
    responseType: 'short_answer', correctAnswer: '0.3', acceptedAnswers: ['0,3', '0.30', '0,30'],
    validatorType: 'number', difficulty: 'medium',
    outcomeIds: ['chem11-car-tollens-oxidation'], practiceRole: 'near_transfer', representationType: 'equation', estimatedSeconds: 80,
    solution: {
      recognition: 'Dùng tỉ lệ một nhóm aldehyde tạo hai mol bạc.',
      reasoning: ['Ethanal có một nhóm –CHO.', '$n_{Ag}=2\\times0{,}15=0{,}30$ mol.'],
      commonMistake: 'Dùng tỉ lệ ethanal:Ag bằng 1:1.', reviewSuggestion: 'Ôn tỉ lượng phản ứng Tollens.'
    }
  },
  {
    id: 'chem11-cc-x002', topicId: 'chem11-t6', questionTypeId: 'chem11-qt78',
    subTypeId: 'chem11-car-st-tollens-oxidation',
    content: 'Cho 4,40 g ethanal ($M=44$ g/mol) phản ứng với Tollens dư. Dùng $M_{Ag}=108$ g/mol, tính khối lượng Ag tối đa theo gam.',
    responseType: 'short_answer', correctAnswer: '21.6', acceptedAnswers: ['21,6'],
    validatorType: 'number', difficulty: 'hard',
    outcomeIds: ['chem11-car-tollens-oxidation'], practiceRole: 'far_transfer', representationType: 'equation', isMasteryHoldout: true, estimatedSeconds: 110,
    solution: {
      recognition: 'Đổi khối lượng aldehyde sang mol rồi tính bạc.',
      reasoning: ['$n_{CH_3CHO}=4{,}40/44=0{,}100$ mol, tạo 0,200 mol Ag.', '$m_{Ag}=0{,}200\\times108=21{,}6$ g.'],
      commonMistake: 'Quên hệ số 2 của Ag.', reviewSuggestion: 'Luyện chuỗi m aldehyde → n aldehyde → n Ag.'
    }
  },
  {
    id: 'chem11-cc-x003', topicId: 'chem11-t6', questionTypeId: 'chem11-qt78',
    subTypeId: 'chem11-car-st-cuoh2-oxidation',
    content: 'Chất nào không tạo kết tủa $Cu_2O$ đỏ gạch trong phép thử aldehyde thông thường?',
    responseType: 'single_choice',
    options: ['A. Methanal', 'B. Ethanal', 'C. Propanal', 'D. Acetone'],
    correctAnswer: 'D', validatorType: 'choice', difficulty: 'medium',
    outcomeIds: ['chem11-car-cuoh2-oxidation'], practiceRole: 'near_transfer', representationType: 'experiment', estimatedSeconds: 65,
    solution: {
      recognition: 'Phân biệt aldehyde và ketone bằng Cu(II) trong kiềm.',
      reasoning: ['Methanal, ethanal và propanal đều có nhóm –CHO.', 'Acetone là ketone đơn giản nên âm tính trong phép thử này.'],
      commonMistake: 'Cho mọi hợp chất carbonyl đều tạo Cu₂O.', reviewSuggestion: 'Ôn tính oxi hóa khác nhau của aldehyde và ketone.'
    }
  },
  {
    id: 'chem11-cc-x004', topicId: 'chem11-t6', questionTypeId: 'chem11-qt78',
    subTypeId: 'chem11-car-st-cuoh2-oxidation',
    content: 'Khi đun propanal với $Cu(OH)_2$ trong môi trường kiềm, hiện tượng chính là',
    responseType: 'single_choice',
    options: ['A. Kết tủa Cu₂O đỏ gạch', 'B. Lớp bạc', 'C. Khí H₂', 'D. Kết tủa BaSO₄'],
    correctAnswer: 'A', validatorType: 'choice', difficulty: 'hard',
    outcomeIds: ['chem11-car-cuoh2-oxidation'], practiceRole: 'far_transfer', representationType: 'experiment', isMasteryHoldout: true, estimatedSeconds: 70,
    solution: {
      recognition: 'Ghép aldehyde với hiện tượng khử Cu(II).',
      reasoning: ['Propanal bị oxi hóa thành carboxylate trong môi trường kiềm.', 'Cu(II) bị khử thành Cu₂O màu đỏ gạch.'],
      commonMistake: 'Nhầm hiện tượng với phản ứng Tollens.', reviewSuggestion: 'Ôn hiện tượng riêng của từng thuốc thử aldehyde.'
    }
  },
  {
    id: 'chem11-cc-x005', topicId: 'chem11-t6', questionTypeId: 'chem11-qt78',
    subTypeId: 'chem11-car-st-bromine-identification',
    content: 'Ethanal làm mất màu nước bromine vì',
    responseType: 'single_choice',
    options: ['A. Ethanal bị oxi hóa thành acetic acid', 'B. C=O cộng Br₂ như alkene', 'C. Ethanal tạo Ag', 'D. Br₂ tạo hydrogen'],
    correctAnswer: 'A', validatorType: 'choice', difficulty: 'hard',
    outcomeIds: ['chem11-car-bromine-oxidation'], practiceRole: 'misconception_check', representationType: 'equation', estimatedSeconds: 75,
    solution: {
      recognition: 'Giải thích phản ứng aldehyde với nước bromine.',
      reasoning: ['Nhóm –CHO dễ bị oxi hóa thành –COOH.', 'Bromine bị khử nên màu của dung dịch giảm/mất; đây không phải cộng vào C=O.'],
      commonMistake: 'Gọi đây là phản ứng cộng bromine.', reviewSuggestion: 'Phân biệt oxi hóa aldehyde và cộng vào C=C.'
    }
  },
  {
    id: 'chem11-cc-x006', topicId: 'chem11-t6', questionTypeId: 'chem11-qt78',
    subTypeId: 'chem11-car-st-bromine-identification',
    content: 'Thuốc thử đơn giản có thể phân biệt hai mẫu riêng biệt ethanal và acetone là',
    responseType: 'single_choice',
    options: ['A. Tollens', 'B. Dung dịch NaCl', 'C. Nước cất', 'D. Quỳ tím khô'],
    correctAnswer: 'A', validatorType: 'choice', difficulty: 'hard',
    outcomeIds: ['chem11-car-tollens-oxidation', 'chem11-car-bromine-oxidation'], practiceRole: 'mastery_holdout', representationType: 'experiment', isMasteryHoldout: true, estimatedSeconds: 70,
    solution: {
      recognition: 'Chọn phép thử phân biệt aldehyde và ketone.',
      reasoning: ['Ethanal cho lớp bạc với Tollens.', 'Acetone là ketone đơn giản nên không phản ứng trong điều kiện thử.'],
      commonMistake: 'Cho acetone cũng tráng bạc vì có C=O.', reviewSuggestion: 'Ôn tính đặc trưng của nhóm –CHO.'
    }
  },
  {
    id: 'chem11-cc-x007', topicId: 'chem11-t6', questionTypeId: 'chem11-qt83',
    subTypeId: 'chem11-cax-st-indicator-metal',
    content: 'Cho 0,20 mol acetic acid phản ứng hết với Mg dư. Số mol $H_2$ tạo ra là bao nhiêu?',
    responseType: 'short_answer', correctAnswer: '0.1', acceptedAnswers: ['0,1', '0.10', '0,10'],
    validatorType: 'number', difficulty: 'medium',
    outcomeIds: ['chem11-cax-metal-reaction'], practiceRole: 'near_transfer', representationType: 'equation', estimatedSeconds: 85,
    solution: {
      recognition: 'Tính hydrogen từ acid đơn chức và Mg.',
      reasoning: ['$2CH_3COOH+Mg\\rightarrow(CH_3COO)_2Mg+H_2$.', '0,20 mol acid tạo 0,10 mol H₂.'],
      commonMistake: 'Dùng tỉ lệ acid:H₂ bằng 1:1.', reviewSuggestion: 'Ôn phương trình acid với kim loại hóa trị II.'
    }
  },
  {
    id: 'chem11-cc-x008', topicId: 'chem11-t6', questionTypeId: 'chem11-qt83',
    subTypeId: 'chem11-cax-st-indicator-metal',
    content: 'Cho 0,10 mol oxalic acid $HOOC-COOH$ phản ứng hoàn toàn với Mg dư. Số mol $H_2$ tạo ra là bao nhiêu?',
    responseType: 'short_answer', correctAnswer: '0.1', acceptedAnswers: ['0,1', '0.10', '0,10'],
    validatorType: 'number', difficulty: 'hard',
    outcomeIds: ['chem11-cax-metal-reaction', 'chem11-cax-integrated-identification-calculation'], practiceRole: 'far_transfer', representationType: 'equation', isMasteryHoldout: true, estimatedSeconds: 95,
    solution: {
      recognition: 'Đếm hai proton acid trong oxalic acid.',
      reasoning: ['Mỗi mol oxalic acid có hai nhóm –COOH, cung cấp hai H acid.', 'Một mol acid hai chức tạo một mol H₂ với Mg nên 0,10 mol tạo 0,10 mol H₂.'],
      commonMistake: 'Dùng tỉ lệ của acid đơn chức.', reviewSuggestion: 'Luôn đếm số nhóm –COOH trước khi tính.'
    }
  },
  {
    id: 'chem11-cc-x009', topicId: 'chem11-t6', questionTypeId: 'chem11-qt83',
    subTypeId: 'chem11-cax-st-base-oxide',
    content: 'Phương trình nào đúng?',
    responseType: 'single_choice',
    options: ['A. $CH_3COOH+NaOH\\rightarrow CH_3COONa+H_2O$', 'B. $CH_3COOH+NaOH\\rightarrow CH_4+Na_2CO_3$', 'C. $CH_3COOH+NaOH\\rightarrow H_2$', 'D. Acetic acid không phản ứng với base'],
    correctAnswer: 'A', validatorType: 'choice', difficulty: 'medium',
    outcomeIds: ['chem11-cax-basic-oxide-base-reaction'], practiceRole: 'near_transfer', representationType: 'equation', estimatedSeconds: 65,
    solution: {
      recognition: 'Viết phản ứng trung hòa carboxylic acid.',
      reasoning: ['NaOH lấy proton của nhóm –COOH.', 'Sản phẩm là sodium acetate và nước theo tỉ lệ 1:1.'],
      commonMistake: 'Cho acid yếu không phản ứng với base mạnh.', reviewSuggestion: 'Ôn tính acid của nhóm carboxyl.'
    }
  },
  {
    id: 'chem11-cc-x010', topicId: 'chem11-t6', questionTypeId: 'chem11-qt83',
    subTypeId: 'chem11-cax-st-base-oxide',
    content: 'Một mol citric acid có ba nhóm –COOH. Trung hòa hoàn toàn cần bao nhiêu mol NaOH?',
    responseType: 'single_choice',
    options: ['A. 1 mol', 'B. 2 mol', 'C. 3 mol', 'D. 6 mol'],
    correctAnswer: 'C', validatorType: 'choice', difficulty: 'hard',
    outcomeIds: ['chem11-cax-basic-oxide-base-reaction', 'chem11-cax-integrated-identification-calculation'], practiceRole: 'far_transfer', representationType: 'equation', isMasteryHoldout: true, estimatedSeconds: 75,
    solution: {
      recognition: 'Tính lượng base theo số nhóm carboxyl.',
      reasoning: ['Mỗi nhóm –COOH trung hòa một mol OH⁻.', 'Ba nhóm –COOH cần ba mol NaOH cho mỗi mol citric acid.'],
      commonMistake: 'Chỉ dùng một mol NaOH cho một phân tử acid.', reviewSuggestion: 'Đếm số nhóm chức tham gia phản ứng.'
    }
  },
  {
    id: 'chem11-cc-x011', topicId: 'chem11-t6', questionTypeId: 'chem11-qt83',
    subTypeId: 'chem11-cax-st-carbonate-stoichiometry',
    content: 'Khí sinh ra khi acetic acid phản ứng với $NaHCO_3$ là',
    responseType: 'single_choice',
    options: ['A. $H_2$', 'B. $CO_2$', 'C. $O_2$', 'D. $NH_3$'],
    correctAnswer: 'B', validatorType: 'choice', difficulty: 'hard',
    outcomeIds: ['chem11-cax-carbonate-reaction'], practiceRole: 'near_transfer', representationType: 'experiment', estimatedSeconds: 55,
    solution: {
      recognition: 'Nhận diện phản ứng acid–hydrogencarbonate.',
      reasoning: ['Acid tạo carbonic acid không bền từ HCO₃⁻.', 'Carbonic acid phân hủy thành CO₂ và H₂O.'],
      commonMistake: 'Nhầm với H₂ của phản ứng acid–kim loại.', reviewSuggestion: 'Ôn dấu hiệu nhận biết carboxylic acid bằng NaHCO₃.'
    }
  },
  {
    id: 'chem11-cc-x012', topicId: 'chem11-t6', questionTypeId: 'chem11-qt83',
    subTypeId: 'chem11-cax-st-carbonate-stoichiometry',
    content: 'Cho 0,20 mol oxalic acid $HOOC-COOH$ phản ứng hoàn toàn với $NaHCO_3$ dư. Số mol $CO_2$ tạo ra là bao nhiêu?',
    responseType: 'short_answer', correctAnswer: '0.4', acceptedAnswers: ['0,4', '0.40', '0,40'],
    validatorType: 'number', difficulty: 'hard',
    outcomeIds: ['chem11-cax-carbonate-reaction', 'chem11-cax-integrated-identification-calculation'], practiceRole: 'mastery_holdout', representationType: 'equation', isMasteryHoldout: true, estimatedSeconds: 95,
    solution: {
      recognition: 'Dùng số nhóm –COOH để tính CO₂.',
      reasoning: ['Mỗi nhóm –COOH phản ứng với một HCO₃⁻ và tạo một CO₂.', 'Oxalic acid có hai nhóm nên 0,20 mol acid tạo 0,40 mol CO₂.'],
      commonMistake: 'Dùng tỉ lệ 1 mol acid tạo 1 mol CO₂.', reviewSuggestion: 'Ôn tỉ lượng acid đa chức với hydrogencarbonate.'
    }
  },
  {
    id: 'chem11-cc-x013', topicId: 'chem11-t6', questionTypeId: 'chem11-qt84',
    subTypeId: 'chem11-cax-st-ester-equation-name',
    content: 'Ethyl acetate được tạo từ cặp chất nào?',
    responseType: 'single_choice',
    options: ['A. Acetic acid và ethanol', 'B. Formic acid và ethanol', 'C. Acetic acid và methanol', 'D. Ethanal và water'],
    correctAnswer: 'A', validatorType: 'choice', difficulty: 'medium',
    outcomeIds: ['chem11-cax-esterification-equation'], practiceRole: 'near_transfer', representationType: 'equation', estimatedSeconds: 60,
    solution: {
      recognition: 'Tách tên ester thành phần alkyl và carboxylate.',
      reasoning: ['Ethyl xuất phát từ ethanol.', 'Acetate xuất phát từ acetic acid; hai chất tạo ethyl acetate và nước.'],
      commonMistake: 'Đảo nguồn gốc phần alkyl và acyl.', reviewSuggestion: 'Ôn quy tắc gọi tên ester.'
    }
  },
  {
    id: 'chem11-cc-x014', topicId: 'chem11-t6', questionTypeId: 'chem11-qt84',
    subTypeId: 'chem11-cax-st-ester-equation-name',
    content: 'Công thức của methyl methanoate là',
    responseType: 'single_choice',
    options: ['A. $HCOOCH_3$', 'B. $CH_3COOCH_3$', 'C. $HCOOC_2H_5$', 'D. $CH_3CH_2OH$'],
    correctAnswer: 'A', validatorType: 'choice', difficulty: 'hard',
    outcomeIds: ['chem11-cax-esterification-equation', 'chem11-cax-nomenclature-c1-c5'], practiceRole: 'far_transfer', representationType: 'equation', isMasteryHoldout: true, estimatedSeconds: 70,
    solution: {
      recognition: 'Viết công thức ester từ tên.',
      reasoning: ['Methanoate cho phần $HCOO-$.', 'Methyl cho phần $-CH_3$, nên công thức là HCOOCH₃.'],
      commonMistake: 'Viết methyl ethanoate.', reviewSuggestion: 'Tách hai phần của tên ester.'
    }
  },
  {
    id: 'chem11-cc-x015', topicId: 'chem11-t6', questionTypeId: 'chem11-qt84',
    subTypeId: 'chem11-cax-st-equilibrium-method',
    content: 'Biện pháp nào giúp tăng lượng ester cân bằng trong phản ứng ester hóa?',
    responseType: 'single_choice',
    options: ['A. Loại bớt nước tạo thành', 'B. Thêm xúc tác rồi khẳng định Kc tăng', 'C. Giảm cả hai chất đầu về 0', 'D. Chỉ làm lạnh ngay lập tức'],
    correctAnswer: 'A', validatorType: 'choice', difficulty: 'medium',
    outcomeIds: ['chem11-cax-esterification-equation', 'chem11-cax-esterification-equilibrium-yield'], practiceRole: 'near_transfer', representationType: 'text', estimatedSeconds: 70,
    solution: {
      recognition: 'Áp dụng Le Chatelier cho cân bằng ester hóa.',
      reasoning: ['Nước là một sản phẩm của phản ứng thuận.', 'Loại nước làm cân bằng chuyển theo chiều tạo thêm ester.'],
      commonMistake: 'Cho xúc tác làm thay đổi hằng số cân bằng.', reviewSuggestion: 'Phân biệt xúc tác và biện pháp chuyển dịch cân bằng.'
    }
  },
  {
    id: 'chem11-cc-x016', topicId: 'chem11-t6', questionTypeId: 'chem11-qt84',
    subTypeId: 'chem11-cax-st-equilibrium-method',
    content: 'Ở nhiệt độ không đổi, thêm xúc tác vào phản ứng ester hóa làm',
    responseType: 'single_choice',
    options: ['A. Tăng tốc độ đạt cân bằng nhưng không đổi Kc', 'B. Kc tăng vô hạn', 'C. Phản ứng thành một chiều', 'D. Ester không còn thủy phân'],
    correctAnswer: 'A', validatorType: 'choice', difficulty: 'hard',
    outcomeIds: ['chem11-cax-esterification-equilibrium-yield'], practiceRole: 'misconception_check', representationType: 'text', isMasteryHoldout: true, estimatedSeconds: 70,
    solution: {
      recognition: 'Phân biệt ảnh hưởng động học và cân bằng của xúc tác.',
      reasoning: ['Xúc tác làm nhanh cả chiều thuận và nghịch.', 'Hệ đạt cân bằng sớm hơn nhưng Kc và thành phần cân bằng không đổi.'],
      commonMistake: 'Cho xúc tác tự làm tăng hiệu suất cân bằng.', reviewSuggestion: 'Ôn vai trò của xúc tác.'
    }
  },
  {
    id: 'chem11-cc-x017', topicId: 'chem11-t6', questionTypeId: 'chem11-qt84',
    subTypeId: 'chem11-cax-st-yield-calculation',
    content: 'Cho 0,20 mol acetic acid và 0,30 mol ethanol phản ứng, hiệu suất 80%. Số mol ethyl acetate thực tế là bao nhiêu?',
    responseType: 'short_answer', correctAnswer: '0.16', acceptedAnswers: ['0,16', '0.160', '0,160'],
    validatorType: 'number', difficulty: 'hard',
    outcomeIds: ['chem11-cax-esterification-equilibrium-yield'], practiceRole: 'far_transfer', representationType: 'equation', isMasteryHoldout: true, estimatedSeconds: 105,
    solution: {
      recognition: 'Tìm chất giới hạn rồi áp dụng hiệu suất ester hóa.',
      reasoning: ['Tỉ lệ acid:ethanol:ester là 1:1:1; acid giới hạn, cho 0,20 mol ester lí thuyết.', '$n_{thực}=0{,}20\\times0{,}80=0{,}16$ mol.'],
      commonMistake: 'Dùng ethanol dư để tính sản phẩm.', reviewSuggestion: 'Xác định chất giới hạn trước hiệu suất.'
    }
  },
  {
    id: 'chem11-cc-x018', topicId: 'chem11-t6', questionTypeId: 'chem11-qt84',
    subTypeId: 'chem11-cax-st-yield-calculation',
    content: 'Cho 12,0 g acetic acid ($M=60$ g/mol) phản ứng với ethanol dư, hiệu suất 70%. Dùng $M_{ethyl\\ acetate}=88$ g/mol, tính khối lượng ester thu được.',
    responseType: 'short_answer', correctAnswer: '12.32', acceptedAnswers: ['12,32'],
    validatorType: 'number', difficulty: 'hard',
    outcomeIds: ['chem11-cax-esterification-equilibrium-yield', 'chem11-cax-integrated-identification-calculation'], practiceRole: 'mastery_holdout', representationType: 'equation', isMasteryHoldout: true, estimatedSeconds: 120,
    solution: {
      recognition: 'Tính khối lượng ester từ acid và hiệu suất.',
      reasoning: ['$n_{acid}=12{,}0/60=0{,}200$ mol, nên ester lí thuyết 0,200 mol.', '$m_{ester}=0{,}200\\times0{,}70\\times88=12{,}32$ g.'],
      commonMistake: 'Nhân 70% vào khối lượng acid rồi coi đó là ester.', reviewSuggestion: 'Tính qua mol trước khi đổi sang khối lượng sản phẩm.'
    }
  },
  {
    id: 'chem11-cc-x019', topicId: 'chem11-t6', questionTypeId: 'chem11-qt86',
    subTypeId: 'chem11-cax-st-preparation',
    content: 'Lên men giấm 9,20 g ethanol ($M=46$ g/mol) với hiệu suất 100% tạo bao nhiêu gam acetic acid ($M=60$ g/mol)?',
    responseType: 'short_answer', correctAnswer: '12', acceptedAnswers: ['12,0', '12.0'],
    validatorType: 'number', difficulty: 'medium',
    outcomeIds: ['chem11-cax-vinegar-fermentation'], practiceRole: 'near_transfer', representationType: 'equation', estimatedSeconds: 95,
    solution: {
      recognition: 'Tính sản phẩm lên men giấm theo tỉ lệ 1:1.',
      reasoning: ['$n_{ethanol}=9{,}20/46=0{,}200$ mol, tạo 0,200 mol acetic acid.', '$m=0{,}200\\times60=12{,}0$ g.'],
      commonMistake: 'Dùng tỉ lệ khối lượng ethanol:acid bằng 1:1.', reviewSuggestion: 'Ôn phương trình oxi hóa ethanol thành acetic acid.'
    }
  },
  {
    id: 'chem11-cc-x020', topicId: 'chem11-t6', questionTypeId: 'chem11-qt86',
    subTypeId: 'chem11-cax-st-preparation',
    content: 'Theo tuyến oxi hóa không hoàn toàn, một mol butane tạo tối đa hai mol acetic acid. 0,50 mol butane tạo tối đa bao nhiêu mol acid?',
    responseType: 'short_answer', correctAnswer: '1', acceptedAnswers: ['1,0', '1.0'],
    validatorType: 'number', difficulty: 'hard',
    outcomeIds: ['chem11-cax-alkane-oxidation'], practiceRole: 'far_transfer', representationType: 'equation', isMasteryHoldout: true, estimatedSeconds: 75,
    solution: {
      recognition: 'Dùng tỉ lệ carbon trong oxi hóa butane.',
      reasoning: ['Tỉ lệ butane:acetic acid là 1:2.', '$n_{acid}=0{,}50\\times2=1{,}00$ mol.'],
      commonMistake: 'Dùng tỉ lệ 1:1.', reviewSuggestion: 'Ôn phương trình oxi hóa butane.'
    }
  },
  {
    id: 'chem11-cc-x021', topicId: 'chem11-t6', questionTypeId: 'chem11-qt86',
    subTypeId: 'chem11-cax-st-applications-safety',
    content: 'Nhận định nào đúng về giấm ăn?',
    responseType: 'single_choice',
    options: ['A. Là acetic acid tinh khiết', 'B. Là dung dịch loãng chứa acetic acid và các thành phần khác', 'C. Có thể thay acid đặc trong mọi thí nghiệm', 'D. Không có tính acid'],
    correctAnswer: 'B', validatorType: 'choice', difficulty: 'medium',
    outcomeIds: ['chem11-cax-applications-common-acids', 'chem11-cax-safety-environment'], practiceRole: 'near_transfer', representationType: 'text', estimatedSeconds: 60,
    solution: {
      recognition: 'Phân biệt sản phẩm thực phẩm với hóa chất tinh khiết.',
      reasoning: ['Giấm là dung dịch có nồng độ acetic acid thấp.', 'Nó không phải acetic acid tinh khiết và không thay thế tùy tiện hóa chất phòng thí nghiệm.'],
      commonMistake: 'Đồng nhất tên thương mại với chất tinh khiết.', reviewSuggestion: 'Ôn nồng độ và sử dụng acid thông dụng.'
    }
  },
  {
    id: 'chem11-cc-x022', topicId: 'chem11-t6', questionTypeId: 'chem11-qt86',
    subTypeId: 'chem11-cax-st-applications-safety',
    content: 'Nguyên tắc phù hợp khi dùng citric acid để tẩy cặn là',
    responseType: 'single_choice',
    options: ['A. Dùng nồng độ và thời gian phù hợp, bảo hộ và rửa sạch', 'B. Trộn với mọi chất tẩy khác', 'C. Nếm dung dịch để kiểm tra', 'D. Dùng acid đậm đặc nhất có thể'],
    correctAnswer: 'A', validatorType: 'choice', difficulty: 'hard',
    outcomeIds: ['chem11-cax-applications-common-acids', 'chem11-cax-safety-environment'], practiceRole: 'misconception_check', representationType: 'text', isMasteryHoldout: true, estimatedSeconds: 65,
    solution: {
      recognition: 'Đánh giá ứng dụng acid đi kèm kiểm soát rủi ro.',
      reasoning: ['Hiệu quả và an toàn phụ thuộc nồng độ, vật liệu tiếp xúc và thời gian.', 'Không trộn hóa chất tùy tiện; cần bảo hộ và rửa sạch sau sử dụng.'],
      commonMistake: 'Cho acid thực phẩm luôn an toàn ở mọi nồng độ.', reviewSuggestion: 'Ôn sử dụng hóa chất gia dụng có trách nhiệm.'
    }
  },
  {
    id: 'chem11-cc-x023', topicId: 'chem11-t6', questionTypeId: 'chem11-qt86',
    subTypeId: 'chem11-cax-st-integrated',
    content: 'Để phân biệt acetic acid và ethanal trong hai mẫu riêng biệt, trình tự hợp lí là',
    responseType: 'single_choice',
    options: ['A. Dùng NaHCO₃ nhận acid, rồi Tollens nhận aldehyde', 'B. Chỉ dùng nước', 'C. Dùng NaCl cho cả hai', 'D. Đốt trực tiếp cả hai mẫu'],
    correctAnswer: 'A', validatorType: 'choice', difficulty: 'hard',
    outcomeIds: ['chem11-cax-integrated-identification-calculation'], practiceRole: 'far_transfer', representationType: 'experiment', isMasteryHoldout: true, estimatedSeconds: 80,
    solution: {
      recognition: 'Kết hợp hai phản ứng đặc trưng để nhận biết nhóm chức.',
      reasoning: ['Acetic acid phản ứng với NaHCO₃ tạo CO₂, ethanal không cho hiện tượng này.', 'Ethanal dương tính với Tollens, củng cố kết luận nhận biết.'],
      commonMistake: 'Dùng Tollens để nhận carboxylic acid.', reviewSuggestion: 'Lập bảng thuốc thử–nhóm chức–hiện tượng.'
    }
  },
  {
    id: 'chem11-cc-x024', topicId: 'chem11-t6', questionTypeId: 'chem11-qt86',
    subTypeId: 'chem11-cax-st-integrated',
    content: 'Chuỗi chuyển hóa phù hợp từ ethanol thành acetic acid là',
    responseType: 'single_choice',
    options: ['A. Ethanol → ethanal → acetic acid', 'B. Ethanol → ethane → sodium acetate', 'C. Ethanol → methane → phenol', 'D. Ethanol → acetone → benzene'],
    correctAnswer: 'A', validatorType: 'choice', difficulty: 'hard',
    outcomeIds: ['chem11-cax-integrated-identification-calculation', 'chem11-cax-vinegar-fermentation'], practiceRole: 'mastery_holdout', representationType: 'equation', isMasteryHoldout: true, estimatedSeconds: 70,
    solution: {
      recognition: 'Xếp chuỗi oxi hóa alcohol bậc I.',
      reasoning: ['Ethanol là alcohol bậc I, oxi hóa bước đầu tạo ethanal.', 'Oxi hóa tiếp aldehyde tạo acetic acid.'],
      commonMistake: 'Cho alcohol bậc I oxi hóa thành ketone.', reviewSuggestion: 'Ôn chuỗi alcohol bậc I → aldehyde → acid.'
    }
  }
];

const expansion = buildChemistryPracticeExpansion(specs);

export const g11ChemistryCarbonylCarboxylicAcidExpandedQuestions = expansion.questions;
export const g11ChemistryCarbonylCarboxylicAcidExpandedSolutions = expansion.solutions;
export const g11ChemistryCarbonylCarboxylicAcidExpansionSpecs = specs;
