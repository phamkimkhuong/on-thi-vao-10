import {
  buildChemistryPracticeExpansion,
  type ChemistryPracticeExpansionSpec
} from '../../practiceExpansionBuilder';

const specs: ChemistryPracticeExpansionSpec[] = [
  {
    id: 'chem11-hap-x001', topicId: 'chem11-t5', questionTypeId: 'chem11-qt61',
    subTypeId: 'chem11-hal-st-substitution-oh',
    content: 'Sản phẩm hữu cơ khi bromoethane phản ứng với NaOH dung dịch, đun nóng là',
    responseType: 'single_choice',
    options: ['A. Ethanol', 'B. Ethylene', 'C. Ethanal', 'D. Ethyne'],
    correctAnswer: 'A', validatorType: 'choice', difficulty: 'medium',
    outcomeIds: ['chem11-hal-substitution-hydroxide'], practiceRole: 'near_transfer', representationType: 'equation', estimatedSeconds: 65,
    solution: {
      recognition: 'Nhận diện phản ứng thế halogen bằng hydroxide.',
      reasoning: ['OH⁻ thay nguyên tử Br trong C₂H₅Br.', 'Sản phẩm hữu cơ là C₂H₅OH, tức ethanol.'],
      commonMistake: 'Chọn ethylene của phản ứng tách.', reviewSuggestion: 'Phân biệt KOH/NaOH dung dịch với môi trường alcohol.'
    }
  },
  {
    id: 'chem11-hap-x002', topicId: 'chem11-t5', questionTypeId: 'chem11-qt61',
    subTypeId: 'chem11-hal-st-substitution-oh',
    content: 'Thủy phân hoàn toàn 0,20 mol bromoethane bằng OH⁻ dư tạo bao nhiêu mol ethanol?',
    responseType: 'short_answer', correctAnswer: '0.2', acceptedAnswers: ['0,2', '0.20', '0,20'],
    validatorType: 'number', difficulty: 'hard',
    outcomeIds: ['chem11-hal-substitution-hydroxide'], practiceRole: 'far_transfer', representationType: 'equation', isMasteryHoldout: true, estimatedSeconds: 85,
    solution: {
      recognition: 'Tính tỉ lượng phản ứng thế tạo alcohol.',
      reasoning: ['Một mol C₂H₅Br tạo một mol C₂H₅OH.', '0,20 mol bromoethane tạo 0,20 mol ethanol.'],
      commonMistake: 'Dùng tỉ lệ 1:2 vì ethanol có hai carbon.', reviewSuggestion: 'Ôn phương trình thủy phân dẫn xuất monohalogen.'
    }
  },
  {
    id: 'chem11-hap-x003', topicId: 'chem11-t5', questionTypeId: 'chem11-qt61',
    subTypeId: 'chem11-hal-st-hydrolysis-experiment',
    content: 'Sau khi thủy phân chloroalkane bằng kiềm, vì sao thường acid hóa mẫu bằng $HNO_3$ trước khi thêm $AgNO_3$?',
    responseType: 'single_choice',
    options: ['A. Tạo thêm chloride', 'B. Loại OH⁻ dư có thể gây kết tủa nhiễu với Ag⁺', 'C. Hòa tan mọi AgCl', 'D. Tạo khí hydrogen'],
    correctAnswer: 'B', validatorType: 'choice', difficulty: 'medium',
    outcomeIds: ['chem11-hal-hydrolysis-experiment'], practiceRole: 'near_transfer', representationType: 'experiment', estimatedSeconds: 75,
    solution: {
      recognition: 'Giải thích bước acid hóa trong phép thử halide.',
      reasoning: ['Dung dịch sau thủy phân còn có thể chứa OH⁻ dư.', 'HNO₃ trung hòa OH⁻ mà không đưa thêm halide, tránh kết tủa bạc gây nhiễu.'],
      commonMistake: 'Dùng HCl để acid hóa và tự đưa Cl⁻ vào mẫu.', reviewSuggestion: 'Ôn thứ tự thao tác nhận biết halide sau thủy phân.'
    }
  },
  {
    id: 'chem11-hap-x004', topicId: 'chem11-t5', questionTypeId: 'chem11-qt61',
    subTypeId: 'chem11-hal-st-hydrolysis-experiment',
    content: 'Ion bromide tạo kết tủa màu nào với $AgNO_3$?',
    responseType: 'single_choice',
    options: ['A. AgBr trắng tinh', 'B. AgBr vàng nhạt', 'C. AgBr xanh', 'D. Không kết tủa'],
    correctAnswer: 'B', validatorType: 'choice', difficulty: 'hard',
    outcomeIds: ['chem11-hal-hydrolysis-experiment'], practiceRole: 'misconception_check', representationType: 'experiment', isMasteryHoldout: true, estimatedSeconds: 60,
    solution: {
      recognition: 'Nhận diện màu kết tủa silver halide.',
      reasoning: ['$Ag^++Br^-\\rightarrow AgBr\\downarrow$.', 'AgBr có màu vàng nhạt, khác AgCl trắng và AgI vàng.'],
      commonMistake: 'Nhầm màu AgBr với AgCl.', reviewSuggestion: 'Ôn bảng màu AgCl–AgBr–AgI.'
    }
  },
  {
    id: 'chem11-hap-x005', topicId: 'chem11-t5', questionTypeId: 'chem11-qt61',
    subTypeId: 'chem11-hal-st-substitution-data',
    content: 'Thủy phân 12,9 g chloroethane ($M=64{,}5$ g/mol) với hiệu suất 80%. Tính khối lượng ethanol thu được, dùng $M_{ethanol}=46$ g/mol.',
    responseType: 'short_answer', correctAnswer: '7.36', acceptedAnswers: ['7,36'],
    validatorType: 'number', difficulty: 'hard',
    outcomeIds: ['chem11-hal-reaction-pathway-selection'], practiceRole: 'far_transfer', representationType: 'equation', isMasteryHoldout: true, estimatedSeconds: 120,
    solution: {
      recognition: 'Kết hợp tỉ lượng thủy phân với hiệu suất.',
      reasoning: ['$n_{C_2H_5Cl}=12{,}9/64{,}5=0{,}20$ mol; ethanol lí thuyết cũng 0,20 mol.', '$m=0{,}20\\times0{,}80\\times46=7{,}36$ g.'],
      commonMistake: 'Nhân hiệu suất vào khối lượng chloroethane.', reviewSuggestion: 'Tính sản phẩm lí thuyết trước khi áp dụng hiệu suất.'
    }
  },
  {
    id: 'chem11-hap-x006', topicId: 'chem11-t5', questionTypeId: 'chem11-qt61',
    subTypeId: 'chem11-hal-st-substitution-data',
    content: 'Điều kiện nào ưu tiên tạo alcohol từ bromoethane thay vì tạo ethylene?',
    responseType: 'single_choice',
    options: ['A. KOH trong alcohol, đun nóng', 'B. NaOH dung dịch, đun thích hợp', 'C. $H_2/Ni$', 'D. $Br_2$, ánh sáng'],
    correctAnswer: 'B', validatorType: 'choice', difficulty: 'hard',
    outcomeIds: ['chem11-hal-reaction-pathway-selection'], practiceRole: 'far_transfer', representationType: 'text', isMasteryHoldout: true, estimatedSeconds: 75,
    solution: {
      recognition: 'Chọn giữa phản ứng thế và tách.',
      reasoning: ['OH⁻ trong dung dịch thuận lợi cho thế tạo alcohol.', 'KOH trong alcohol và nhiệt cao ưu tiên tách HX tạo alkene.'],
      commonMistake: 'Không xét dung môi của base.', reviewSuggestion: 'Lập bảng điều kiện thế–tách của dẫn xuất halogen.'
    }
  },
  {
    id: 'chem11-hap-x007', topicId: 'chem11-t5', questionTypeId: 'chem11-qt67',
    subTypeId: 'chem11-alc-st-dehydration-alkene',
    content: 'Ethanol tách nước ở khoảng 170 °C với $H_2SO_4$ đặc tạo sản phẩm hữu cơ chính là',
    responseType: 'single_choice',
    options: ['A. Ethylene', 'B. Diethyl ether', 'C. Ethanal', 'D. Acetic acid'],
    correctAnswer: 'A', validatorType: 'choice', difficulty: 'medium',
    outcomeIds: ['chem11-alc-dehydration-alkene'], practiceRole: 'near_transfer', representationType: 'equation', estimatedSeconds: 65,
    solution: {
      recognition: 'Nhận diện dehydration nội phân tử của ethanol.',
      reasoning: ['Ở nhiệt độ cao hơn, ethanol tách H và OH trong cùng phân tử.', 'Sản phẩm là CH₂=CH₂ và H₂O.'],
      commonMistake: 'Chọn ether của điều kiện nhiệt độ thấp hơn.', reviewSuggestion: 'Ôn ảnh hưởng nhiệt độ đến hướng dehydration ethanol.'
    }
  },
  {
    id: 'chem11-hap-x008', topicId: 'chem11-t5', questionTypeId: 'chem11-qt67',
    subTypeId: 'chem11-alc-st-dehydration-alkene',
    content: 'Tách nước hoàn toàn 0,20 mol ethanol tạo ethylene. Số mol ethylene lí thuyết là bao nhiêu?',
    responseType: 'short_answer', correctAnswer: '0.2', acceptedAnswers: ['0,2', '0.20', '0,20'],
    validatorType: 'number', difficulty: 'hard',
    outcomeIds: ['chem11-alc-dehydration-alkene'], practiceRole: 'far_transfer', representationType: 'equation', isMasteryHoldout: true, estimatedSeconds: 80,
    solution: {
      recognition: 'Tính tỉ lượng dehydration tạo alkene.',
      reasoning: ['$C_2H_5OH\\rightarrow C_2H_4+H_2O$ có tỉ lệ 1:1.', '0,20 mol ethanol tạo 0,20 mol ethylene.'],
      commonMistake: 'Dùng tỉ lệ 2:1 của phản ứng tạo ether.', reviewSuggestion: 'Viết đúng phương trình theo điều kiện.'
    }
  },
  {
    id: 'chem11-hap-x009', topicId: 'chem11-t5', questionTypeId: 'chem11-qt67',
    subTypeId: 'chem11-alc-st-dehydration-ether',
    content: 'Hai phân tử ethanol tách một phân tử nước ở khoảng 140 °C tạo',
    responseType: 'single_choice',
    options: ['A. Diethyl ether', 'B. Ethylene', 'C. Ethyne', 'D. Ethanoic acid'],
    correctAnswer: 'A', validatorType: 'choice', difficulty: 'medium',
    outcomeIds: ['chem11-alc-dehydration-ether'], practiceRole: 'near_transfer', representationType: 'equation', estimatedSeconds: 65,
    solution: {
      recognition: 'Nhận diện dehydration liên phân tử tạo ether.',
      reasoning: ['Hai phân tử ethanol kết hợp và mất một H₂O.', 'Sản phẩm là $C_2H_5OC_2H_5$, diethyl ether.'],
      commonMistake: 'Dùng sản phẩm alkene cho mọi nhiệt độ.', reviewSuggestion: 'Ôn dehydration nội và liên phân tử.'
    }
  },
  {
    id: 'chem11-hap-x010', topicId: 'chem11-t5', questionTypeId: 'chem11-qt67',
    subTypeId: 'chem11-alc-st-dehydration-ether',
    content: 'Theo $2C_2H_5OH\\rightarrow C_2H_5OC_2H_5+H_2O$, 0,40 mol ethanol tạo tối đa bao nhiêu mol diethyl ether?',
    responseType: 'short_answer', correctAnswer: '0.2', acceptedAnswers: ['0,2', '0.20', '0,20'],
    validatorType: 'number', difficulty: 'hard',
    outcomeIds: ['chem11-alc-dehydration-ether', 'chem11-alc-dehydration-pathway'], practiceRole: 'far_transfer', representationType: 'equation', isMasteryHoldout: true, estimatedSeconds: 90,
    solution: {
      recognition: 'Tính tỉ lượng dehydration liên phân tử.',
      reasoning: ['Hai mol ethanol tạo một mol ether.', '$n_{ether}=0{,}40/2=0{,}20$ mol.'],
      commonMistake: 'Dùng tỉ lệ 1:1.', reviewSuggestion: 'Chú ý hệ số 2 của alcohol khi tạo ether.'
    }
  },
  {
    id: 'chem11-hap-x011', topicId: 'chem11-t5', questionTypeId: 'chem11-qt67',
    subTypeId: 'chem11-alc-st-dehydration-path',
    content: 'Propan-2-ol tách nước nội phân tử tạo alkene nào?',
    responseType: 'single_choice',
    options: ['A. Propane', 'B. Propene', 'C. Propyne', 'D. Propanal'],
    correctAnswer: 'B', validatorType: 'choice', difficulty: 'hard',
    outcomeIds: ['chem11-alc-dehydration-pathway', 'chem11-alc-dehydration-alkene'], practiceRole: 'near_transfer', representationType: 'equation', estimatedSeconds: 70,
    solution: {
      recognition: 'Viết sản phẩm tách nước của alcohol C3.',
      reasoning: ['Loại OH và H ở carbon kề để tạo C=C.', 'Khung ba carbon cho propene.'],
      commonMistake: 'Loại oxygen nhưng không tạo nối đôi.', reviewSuggestion: 'Ôn cơ chế hình thức tách H₂O.'
    }
  },
  {
    id: 'chem11-hap-x012', topicId: 'chem11-t5', questionTypeId: 'chem11-qt67',
    subTypeId: 'chem11-alc-st-dehydration-path',
    content: 'Butan-2-ol tách nước có thể cho but-1-ene và but-2-ene. Theo Zaisev, sản phẩm chính là',
    responseType: 'single_choice',
    options: ['A. But-1-ene', 'B. But-2-ene', 'C. Butane', 'D. Butanone'],
    correctAnswer: 'B', validatorType: 'choice', difficulty: 'hard',
    outcomeIds: ['chem11-alc-dehydration-pathway', 'chem11-alc-dehydration-alkene'], practiceRole: 'mastery_holdout', representationType: 'diagram', isMasteryHoldout: true, estimatedSeconds: 85,
    solution: {
      recognition: 'Chọn alkene chính theo Zaisev.',
      reasoning: ['Cả hai vị trí beta đều có hydrogen nên tạo hai alkene.', 'But-2-ene có nối đôi thế nhiều hơn nên là sản phẩm chính.'],
      commonMistake: 'Luôn chọn nối đôi ở đầu mạch.', reviewSuggestion: 'Ôn quy tắc Zaisev.'
    }
  },
  {
    id: 'chem11-hap-x013', topicId: 'chem11-t5', questionTypeId: 'chem11-qt68',
    subTypeId: 'chem11-alc-st-oxidation-cuo',
    content: 'Oxi hóa propan-1-ol bằng CuO, đun nóng tạo sản phẩm hữu cơ chính là',
    responseType: 'single_choice',
    options: ['A. Propanal', 'B. Propanone', 'C. Propene', 'D. Propanoic acid ngay lập tức'],
    correctAnswer: 'A', validatorType: 'choice', difficulty: 'medium',
    outcomeIds: ['chem11-alc-oxidation-cuo'], practiceRole: 'near_transfer', representationType: 'equation', estimatedSeconds: 70,
    solution: {
      recognition: 'Phân biệt sản phẩm oxi hóa alcohol bậc I và II.',
      reasoning: ['Propan-1-ol là alcohol bậc I.', 'CuO oxi hóa alcohol bậc I thành aldehyde tương ứng là propanal.'],
      commonMistake: 'Tạo ketone từ alcohol bậc I.', reviewSuggestion: 'Ôn quy tắc alcohol bậc I → aldehyde.'
    }
  },
  {
    id: 'chem11-hap-x014', topicId: 'chem11-t5', questionTypeId: 'chem11-qt68',
    subTypeId: 'chem11-alc-st-oxidation-cuo',
    content: 'Theo $C_2H_5OH+CuO\\rightarrow CH_3CHO+Cu+H_2O$, 0,30 mol ethanol khử tối đa bao nhiêu mol CuO?',
    responseType: 'short_answer', correctAnswer: '0.3', acceptedAnswers: ['0,3', '0.30', '0,30'],
    validatorType: 'number', difficulty: 'hard',
    outcomeIds: ['chem11-alc-oxidation-cuo'], practiceRole: 'far_transfer', representationType: 'equation', isMasteryHoldout: true, estimatedSeconds: 90,
    solution: {
      recognition: 'Tính tỉ lượng oxi hóa ethanol bằng CuO.',
      reasoning: ['Phương trình cho tỉ lệ ethanol:CuO bằng 1:1.', '0,30 mol ethanol phản ứng với 0,30 mol CuO.'],
      commonMistake: 'Dùng hệ số theo số oxygen trong CuO.', reviewSuggestion: 'Ôn phương trình oxi hóa alcohol.'
    }
  },
  {
    id: 'chem11-hap-x015', topicId: 'chem11-t5', questionTypeId: 'chem11-qt68',
    subTypeId: 'chem11-alc-st-combustion',
    content: 'Phương trình cháy ethanol có hệ số $O_2$ tối giản bằng',
    responseType: 'single_choice',
    options: ['A. 1', 'B. 2', 'C. 3', 'D. 4'],
    correctAnswer: 'C', validatorType: 'choice', difficulty: 'medium',
    outcomeIds: ['chem11-alc-combustion'], practiceRole: 'near_transfer', representationType: 'equation', estimatedSeconds: 65,
    solution: {
      recognition: 'Cân bằng phản ứng cháy ethanol.',
      reasoning: ['$C_2H_5OH+3O_2\\rightarrow2CO_2+3H_2O$.', 'Hệ số tối giản của O₂ là 3.'],
      commonMistake: 'Quên oxygen đã có trong ethanol.', reviewSuggestion: 'Ôn cân bằng oxygen sau cùng.'
    }
  },
  {
    id: 'chem11-hap-x016', topicId: 'chem11-t5', questionTypeId: 'chem11-qt68',
    subTypeId: 'chem11-alc-st-combustion',
    content: 'Đốt cháy hoàn toàn 4,60 g ethanol ($M=46$ g/mol) cần bao nhiêu mol $O_2$?',
    responseType: 'short_answer', correctAnswer: '0.3', acceptedAnswers: ['0,3', '0.30', '0,30'],
    validatorType: 'number', difficulty: 'hard',
    outcomeIds: ['chem11-alc-combustion'], practiceRole: 'far_transfer', representationType: 'equation', isMasteryHoldout: true, estimatedSeconds: 100,
    solution: {
      recognition: 'Đổi khối lượng ethanol sang mol rồi dùng phương trình cháy.',
      reasoning: ['$n_{ethanol}=4{,}60/46=0{,}100$ mol.', 'Mỗi mol ethanol cần 3 mol O₂ nên cần 0,300 mol.'],
      commonMistake: 'Dùng khối lượng trực tiếp trong tỉ lệ mol.', reviewSuggestion: 'Ôn chuỗi m → n → tỉ lượng.'
    }
  },
  {
    id: 'chem11-hap-x017', topicId: 'chem11-t5', questionTypeId: 'chem11-qt68',
    subTypeId: 'chem11-alc-st-ethanol-experiment',
    content: 'Trong thí nghiệm đốt ethanol, thao tác nào không an toàn?',
    responseType: 'single_choice',
    options: ['A. Đậy nắp để dập lửa', 'B. Châm thêm ethanol khi đèn vẫn đang cháy', 'C. Giữ vật dễ cháy cách xa', 'D. Dùng lượng nhiên liệu nhỏ'],
    correctAnswer: 'B', validatorType: 'choice', difficulty: 'hard',
    outcomeIds: ['chem11-alc-ethanol-combustion-experiment'], practiceRole: 'misconception_check', representationType: 'experiment', estimatedSeconds: 65,
    solution: {
      recognition: 'Đánh giá an toàn với nhiên liệu dễ cháy.',
      reasoning: ['Ethanol và hơi ethanol dễ bắt lửa.', 'Châm nhiên liệu khi còn lửa có thể làm cháy lan về bình chứa.'],
      commonMistake: 'Coi ethanol ít nguy hiểm vì ngọn lửa nhỏ.', reviewSuggestion: 'Ôn quy trình dập lửa trước khi nạp nhiên liệu.'
    }
  },
  {
    id: 'chem11-hap-x018', topicId: 'chem11-t5', questionTypeId: 'chem11-qt68',
    subTypeId: 'chem11-alc-st-ethanol-experiment',
    content: 'Khi dẫn hơi ethanol qua CuO đen nung nóng, hiện tượng và sản phẩm phù hợp là',
    responseType: 'single_choice',
    options: ['A. CuO thành Cu đỏ và tạo ethanal', 'B. CuO thành CuSO₄ xanh', 'C. Tạo ethylene và Ag', 'D. Không phản ứng'],
    correctAnswer: 'A', validatorType: 'choice', difficulty: 'hard',
    outcomeIds: ['chem11-alc-oxidation-cuo', 'chem11-alc-ethanol-combustion-experiment'], practiceRole: 'far_transfer', representationType: 'experiment', isMasteryHoldout: true, estimatedSeconds: 80,
    solution: {
      recognition: 'Nối hiện tượng CuO với phản ứng oxi hóa ethanol.',
      reasoning: ['CuO oxi hóa ethanol thành ethanal và bị khử thành Cu.', 'Chất rắn chuyển từ đen sang màu đỏ kim loại.'],
      commonMistake: 'Cho rằng CuO là xúc tác nên không đổi.', reviewSuggestion: 'Ôn vai trò chất oxi hóa của CuO.'
    }
  },
  {
    id: 'chem11-hap-x019', topicId: 'chem11-t5', questionTypeId: 'chem11-qt73',
    subTypeId: 'chem11-phe-st-bromination',
    content: 'Phenol phản ứng với nước bromine tạo kết tủa trắng là',
    responseType: 'single_choice',
    options: ['A. 2,4,6-tribromophenol', 'B. Bromobenzene', 'C. Benzoic acid', 'D. Cyclohexanol'],
    correctAnswer: 'A', validatorType: 'choice', difficulty: 'medium',
    outcomeIds: ['chem11-phe-bromination'], practiceRole: 'near_transfer', representationType: 'experiment', estimatedSeconds: 65,
    solution: {
      recognition: 'Nhận diện sản phẩm bromine hóa phenol.',
      reasoning: ['Nhóm OH hoạt hóa mạnh các vị trí ortho và para.', 'Nước bromine thế ở 2,4,6 tạo 2,4,6-tribromophenol trắng.'],
      commonMistake: 'Chỉ thế một Br như benzene.', reviewSuggestion: 'Ôn ảnh hưởng hoạt hóa của –OH lên vòng.'
    }
  },
  {
    id: 'chem11-hap-x020', topicId: 'chem11-t5', questionTypeId: 'chem11-qt73',
    subTypeId: 'chem11-phe-st-bromination',
    content: 'Theo phản ứng tạo 2,4,6-tribromophenol, 0,10 mol phenol phản ứng tối đa với bao nhiêu mol $Br_2$?',
    responseType: 'short_answer', correctAnswer: '0.3', acceptedAnswers: ['0,3', '0.30', '0,30'],
    validatorType: 'number', difficulty: 'hard',
    outcomeIds: ['chem11-phe-bromination'], practiceRole: 'far_transfer', representationType: 'equation', isMasteryHoldout: true, estimatedSeconds: 90,
    solution: {
      recognition: 'Tính tỉ lượng bromine hóa phenol ba vị trí.',
      reasoning: ['Một mol phenol dùng ba mol Br₂.', '0,10 mol phenol dùng 0,30 mol Br₂.'],
      commonMistake: 'Dùng tỉ lệ 1:1.', reviewSuggestion: 'Viết đủ phương trình tribromination.'
    }
  },
  {
    id: 'chem11-hap-x021', topicId: 'chem11-t5', questionTypeId: 'chem11-qt73',
    subTypeId: 'chem11-phe-st-nitration',
    content: 'Nitrate hóa mạnh phenol có thể tạo 2,4,6-trinitrophenol, còn gọi là',
    responseType: 'single_choice',
    options: ['A. Picric acid', 'B. Acetic acid', 'C. Benzoic acid', 'D. Salicylic alcohol'],
    correctAnswer: 'A', validatorType: 'choice', difficulty: 'medium',
    outcomeIds: ['chem11-phe-nitration'], practiceRole: 'near_transfer', representationType: 'text', estimatedSeconds: 60,
    solution: {
      recognition: 'Ghép tên thường với sản phẩm nitrate hóa phenol.',
      reasoning: ['Ba nhóm nitro vào vị trí 2,4,6 của phenol.', '2,4,6-trinitrophenol có tên thường là picric acid.'],
      commonMistake: 'Nhầm với benzoic acid.', reviewSuggestion: 'Ôn tên và cấu tạo picric acid.'
    }
  },
  {
    id: 'chem11-hap-x022', topicId: 'chem11-t5', questionTypeId: 'chem11-qt73',
    subTypeId: 'chem11-phe-st-nitration',
    content: 'Nếu nitrate hóa hoàn toàn 0,20 mol phenol thành 2,4,6-trinitrophenol, cần tối thiểu bao nhiêu mol $HNO_3$ theo tỉ lượng?',
    responseType: 'short_answer', correctAnswer: '0.6', acceptedAnswers: ['0,6', '0.60', '0,60'],
    validatorType: 'number', difficulty: 'hard',
    outcomeIds: ['chem11-phe-nitration', 'chem11-phe-nitration-experiment'], practiceRole: 'far_transfer', representationType: 'equation', isMasteryHoldout: true, estimatedSeconds: 95,
    solution: {
      recognition: 'Tính tỉ lượng đưa ba nhóm nitro vào phenol.',
      reasoning: ['Một mol phenol cần ba mol HNO₃ để tạo dẫn xuất trinitro.', '$n_{HNO_3}=0{,}20\\times3=0{,}60$ mol.'],
      commonMistake: 'Dùng một mol HNO₃ cho một mol phenol.', reviewSuggestion: 'Đếm số nhóm nitro được thế vào vòng.'
    }
  },
  {
    id: 'chem11-hap-x023', topicId: 'chem11-t5', questionTypeId: 'chem11-qt73',
    subTypeId: 'chem11-phe-st-substitution-experiment',
    content: 'Phenol làm mất màu nước bromine ở điều kiện thường mà không cần xúc tác FeBr₃ chủ yếu vì',
    responseType: 'single_choice',
    options: ['A. Nhóm –OH hoạt hóa vòng benzene', 'B. Phenol là alkene', 'C. Bromine tự phân hủy', 'D. Phenol chỉ phản ứng ở mạch nhánh'],
    correctAnswer: 'A', validatorType: 'choice', difficulty: 'hard',
    outcomeIds: ['chem11-phe-ring-activation', 'chem11-phe-bromine-experiment'], practiceRole: 'far_transfer', representationType: 'experiment', isMasteryHoldout: true, estimatedSeconds: 75,
    solution: {
      recognition: 'Giải thích ảnh hưởng tương hỗ của –OH lên vòng.',
      reasoning: ['Cặp electron trên oxygen liên hợp với vòng và làm tăng mật độ electron tại ortho, para.', 'Vòng phenol phản ứng thế electrophile dễ hơn benzene.'],
      commonMistake: 'Coi mất màu là phản ứng cộng vào nối đôi riêng lẻ.', reviewSuggestion: 'Ôn hoạt hóa vòng thơm bởi –OH.'
    }
  },
  {
    id: 'chem11-hap-x024', topicId: 'chem11-t5', questionTypeId: 'chem11-qt73',
    subTypeId: 'chem11-phe-st-substitution-experiment',
    content: 'Dùng nước bromine có thể phân biệt phenol và benzene vì',
    responseType: 'single_choice',
    options: ['A. Phenol làm mất màu và tạo kết tủa trắng, benzene không phản ứng trong điều kiện thử', 'B. Benzene tạo kết tủa trắng', 'C. Cả hai đều tạo khí', 'D. Cả hai đều phản ứng giống nhau'],
    correctAnswer: 'A', validatorType: 'choice', difficulty: 'hard',
    outcomeIds: ['chem11-phe-bromine-experiment', 'chem11-phe-ring-activation'], practiceRole: 'mastery_holdout', representationType: 'experiment', isMasteryHoldout: true, estimatedSeconds: 80,
    solution: {
      recognition: 'Chọn hiện tượng phân biệt phenol–benzene.',
      reasoning: ['Phenol phản ứng nhanh với nước bromine tạo 2,4,6-tribromophenol trắng.', 'Benzene không phản ứng với nước bromine nếu thiếu điều kiện/xúc tác thích hợp.'],
      commonMistake: 'Cho benzene cũng làm mất màu bromine như alkene.', reviewSuggestion: 'Phân biệt phản ứng của aromatic và liên kết đôi alkene.'
    }
  }
];

const expansion = buildChemistryPracticeExpansion(specs);

export const g11ChemistryHalogenAlcoholPhenolExpandedQuestions = expansion.questions;
export const g11ChemistryHalogenAlcoholPhenolExpandedSolutions = expansion.solutions;
export const g11ChemistryHalogenAlcoholPhenolExpansionSpecs = specs;
