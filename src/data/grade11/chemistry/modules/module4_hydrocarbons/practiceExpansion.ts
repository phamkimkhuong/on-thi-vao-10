import {
  buildChemistryPracticeExpansion,
  type ChemistryPracticeExpansionSpec
} from '../../practiceExpansionBuilder';

const specs: ChemistryPracticeExpansionSpec[] = [
  {
    id: 'chem11-hc-x001', topicId: 'chem11-t4', questionTypeId: 'chem11-qt48',
    subTypeId: 'chem11-hc-st-substitution-experiment',
    content: 'Sản phẩm hữu cơ chính của phản ứng thế một lần giữa methane và chlorine dưới ánh sáng là',
    responseType: 'single_choice',
    options: ['A. $CH_3Cl$', 'B. $CH_2Cl_2$', 'C. $C_2H_6$', 'D. $CH_3OH$'],
    correctAnswer: 'A', validatorType: 'choice', difficulty: 'medium',
    outcomeIds: ['chem11-hc-alkane-substitution'], practiceRole: 'near_transfer', representationType: 'equation', estimatedSeconds: 65,
    solution: {
      recognition: 'Nhận diện sản phẩm thế halogen bậc một của alkane.',
      reasoning: ['Một nguyên tử H của CH₄ bị thay bởi Cl.', 'Sản phẩm hữu cơ của một lần thế là CH₃Cl, đồng thời tạo HCl.'],
      commonMistake: 'Chọn sản phẩm thế nhiều lần dù đề giới hạn một lần.', reviewSuggestion: 'Ôn cơ chế tổng quát thế halogen alkane.'
    }
  },
  {
    id: 'chem11-hc-x002', topicId: 'chem11-t4', questionTypeId: 'chem11-qt48',
    subTypeId: 'chem11-hc-st-substitution-experiment',
    content: 'Khi thế một nguyên tử H của propane bằng Cl, có bao nhiêu sản phẩm monochloro cấu tạo khác nhau?',
    responseType: 'short_answer', correctAnswer: '2', acceptedAnswers: ['hai'],
    validatorType: 'number', difficulty: 'hard',
    outcomeIds: ['chem11-hc-alkane-substitution'], practiceRole: 'far_transfer', representationType: 'diagram', isMasteryHoldout: true, estimatedSeconds: 95,
    solution: {
      recognition: 'Đếm vị trí hydrogen không tương đương trong propane.',
      reasoning: ['Hai carbon đầu mạch tương đương, tạo 1-chloropropane.', 'Carbon giữa tạo 2-chloropropane; tổng cộng 2 sản phẩm.'],
      commonMistake: 'Đếm hai đầu mạch thành hai sản phẩm riêng.', reviewSuggestion: 'Ôn tính đối xứng khi đếm sản phẩm thế.'
    }
  },
  {
    id: 'chem11-hc-x003', topicId: 'chem11-t4', questionTypeId: 'chem11-qt48',
    subTypeId: 'chem11-hc-st-cracking-reforming',
    content: 'Phương trình cracking nào bảo toàn nguyên tử?',
    responseType: 'single_choice',
    options: ['A. $C_{10}H_{22}\\rightarrow C_4H_{10}+C_6H_{12}$', 'B. $C_{10}H_{22}\\rightarrow C_5H_{12}+C_5H_{12}$', 'C. $C_{10}H_{22}\\rightarrow C_4H_8+C_6H_8$', 'D. $C_{10}H_{22}\\rightarrow C_{10}H_{20}+H$'],
    correctAnswer: 'A', validatorType: 'choice', difficulty: 'medium',
    outcomeIds: ['chem11-hc-alkane-cracking-reforming'], practiceRole: 'near_transfer', representationType: 'equation', estimatedSeconds: 75,
    solution: {
      recognition: 'Kiểm tra cân bằng nguyên tử trong cracking alkane.',
      reasoning: ['Phương án A có tổng C bằng 10 và tổng H bằng 22.', 'Nó cũng cho một alkane C₄H₁₀ và một alkene C₆H₁₂, phù hợp mô hình cracking.'],
      commonMistake: 'Chỉ kiểm tra số carbon mà bỏ hydrogen.', reviewSuggestion: 'Ôn bảo toàn C và H trong cracking.'
    }
  },
  {
    id: 'chem11-hc-x004', topicId: 'chem11-t4', questionTypeId: 'chem11-qt48',
    subTypeId: 'chem11-hc-st-cracking-reforming',
    content: 'Reforming n-hexane theo $C_6H_{14}\\rightarrow C_6H_6+xH_2$. Giá trị x là bao nhiêu?',
    responseType: 'short_answer', correctAnswer: '4', acceptedAnswers: ['bốn'],
    validatorType: 'number', difficulty: 'hard',
    outcomeIds: ['chem11-hc-alkane-cracking-reforming'], practiceRole: 'far_transfer', representationType: 'equation', isMasteryHoldout: true, estimatedSeconds: 85,
    solution: {
      recognition: 'Cân bằng phản ứng dehydrocyclization.',
      reasoning: ['Số hydrogen giảm từ 14 xuống 6, chênh 8 nguyên tử H.', 'Tám H tạo 4 phân tử H₂ nên x = 4.'],
      commonMistake: 'Dùng chênh lệch 8 làm hệ số H₂.', reviewSuggestion: 'Ôn cân bằng hydrogen dạng H₂.'
    }
  },
  {
    id: 'chem11-hc-x005', topicId: 'chem11-t4', questionTypeId: 'chem11-qt48',
    subTypeId: 'chem11-hc-st-combustion-environment',
    content: 'Đốt cháy hoàn toàn 2,0 mol propane cần bao nhiêu mol $O_2$?',
    responseType: 'short_answer', correctAnswer: '10', acceptedAnswers: ['10,0', '10.0'],
    validatorType: 'number', difficulty: 'hard',
    outcomeIds: ['chem11-hc-alkane-combustion'], practiceRole: 'far_transfer', representationType: 'equation', isMasteryHoldout: true, estimatedSeconds: 90,
    solution: {
      recognition: 'Tính oxygen theo phương trình cháy propane.',
      reasoning: ['$C_3H_8+5O_2\\rightarrow3CO_2+4H_2O$.', 'Hai mol propane cần $2\\times5=10$ mol O₂.'],
      commonMistake: 'Dùng hệ số O₂ bằng số carbon.', reviewSuggestion: 'Ôn cân bằng phản ứng cháy hydrocarbon.'
    }
  },
  {
    id: 'chem11-hc-x006', topicId: 'chem11-t4', questionTypeId: 'chem11-qt48',
    subTypeId: 'chem11-hc-st-combustion-environment',
    content: 'Nguy cơ nghiêm trọng khi đốt alkane thiếu oxygen trong không gian kín là',
    responseType: 'single_choice',
    options: ['A. Tạo CO độc', 'B. Tạo thêm oxygen', 'C. Tạo muối sulfate', 'D. Làm nitrogen biến mất'],
    correctAnswer: 'A', validatorType: 'choice', difficulty: 'hard',
    outcomeIds: ['chem11-hc-alkane-environment-safety'], practiceRole: 'misconception_check', representationType: 'text', isMasteryHoldout: true, estimatedSeconds: 65,
    solution: {
      recognition: 'Liên hệ cháy không hoàn toàn với an toàn.',
      reasoning: ['Thiếu oxygen làm carbon bị oxi hóa không hoàn toàn thành CO.', 'CO gắn mạnh với hemoglobin và có thể gây ngộ độc nghiêm trọng.'],
      commonMistake: 'Chỉ xem muội than là sản phẩm nguy hiểm.', reviewSuggestion: 'Ôn sản phẩm cháy hoàn toàn và không hoàn toàn.'
    }
  },
  {
    id: 'chem11-hc-x007', topicId: 'chem11-t4', questionTypeId: 'chem11-qt51',
    subTypeId: 'chem11-hc-st-add-h2-br2',
    content: 'Một mol ethylene cộng tối đa bao nhiêu mol $Br_2$ vào nối đôi?',
    responseType: 'single_choice',
    options: ['A. 0,5 mol', 'B. 1 mol', 'C. 2 mol', 'D. 3 mol'],
    correctAnswer: 'B', validatorType: 'choice', difficulty: 'medium',
    outcomeIds: ['chem11-hc-unsat-addition-basic'], practiceRole: 'near_transfer', representationType: 'equation', estimatedSeconds: 60,
    solution: {
      recognition: 'Dùng tỉ lệ cộng bromine vào một nối đôi.',
      reasoning: ['Mỗi nối đôi C=C có một liên kết pi bị phá vỡ khi cộng Br₂.', 'Một mol ethylene có một nối đôi nên cộng một mol Br₂.'],
      commonMistake: 'Dùng hai mol Br₂ vì nối đôi có hai gạch.', reviewSuggestion: 'Ôn thành phần sigma–pi của nối đôi.'
    }
  },
  {
    id: 'chem11-hc-x008', topicId: 'chem11-t4', questionTypeId: 'chem11-qt51',
    subTypeId: 'chem11-hc-st-add-h2-br2',
    content: 'Để cộng hoàn toàn vào cả hai liên kết pi của 0,20 mol ethyne cần bao nhiêu mol $Br_2$?',
    responseType: 'short_answer', correctAnswer: '0.4', acceptedAnswers: ['0,4', '0.40', '0,40'],
    validatorType: 'number', difficulty: 'hard',
    outcomeIds: ['chem11-hc-unsat-addition-basic'], practiceRole: 'far_transfer', representationType: 'equation', isMasteryHoldout: true, estimatedSeconds: 95,
    solution: {
      recognition: 'Tính bromine cộng hoàn toàn vào nối ba.',
      reasoning: ['Một nối ba cộng hoàn toàn hai mol Br₂ trên mỗi mol alkyne.', '$n_{Br_2}=2\\times0{,}20=0{,}40$ mol.'],
      commonMistake: 'Dùng tỉ lệ 1:1 như alkene.', reviewSuggestion: 'Phân biệt mức cộng một phần và hoàn toàn của alkyne.'
    }
  },
  {
    id: 'chem11-hc-x009', topicId: 'chem11-t4', questionTypeId: 'chem11-qt51',
    subTypeId: 'chem11-hc-st-add-hx-water',
    content: 'Sản phẩm chính khi propene cộng HBr theo quy tắc Markovnikov là',
    responseType: 'single_choice',
    options: ['A. 1-bromopropane', 'B. 2-bromopropane', 'C. 1,2-dibromopropane', 'D. Propan-1-ol'],
    correctAnswer: 'B', validatorType: 'choice', difficulty: 'medium',
    outcomeIds: ['chem11-hc-unsat-markovnikov'], practiceRole: 'near_transfer', representationType: 'equation', estimatedSeconds: 70,
    solution: {
      recognition: 'Áp dụng Markovnikov cho alkene không đối xứng.',
      reasoning: ['H gắn vào carbon nối đôi đang có nhiều H hơn.', 'Br gắn vào carbon giữa, tạo 2-bromopropane là sản phẩm chính.'],
      commonMistake: 'Đặt Br vào carbon đầu mạch.', reviewSuggestion: 'Ôn quy tắc Markovnikov.'
    }
  },
  {
    id: 'chem11-hc-x010', topicId: 'chem11-t4', questionTypeId: 'chem11-qt51',
    subTypeId: 'chem11-hc-st-add-hx-water',
    content: 'Hydrate hóa but-1-ene theo quy tắc Markovnikov tạo alcohol chính nào?',
    responseType: 'short_answer', correctAnswer: 'butan-2-ol', acceptedAnswers: ['2-butanol', 'butan 2 ol'],
    validatorType: 'exact', difficulty: 'hard',
    outcomeIds: ['chem11-hc-unsat-markovnikov'], practiceRole: 'far_transfer', representationType: 'equation', isMasteryHoldout: true, estimatedSeconds: 90,
    solution: {
      recognition: 'Áp dụng Markovnikov cho phản ứng cộng nước.',
      reasoning: ['H gắn vào carbon đầu nối đôi có nhiều hydrogen hơn.', 'OH gắn vào carbon số 2, tạo butan-2-ol.'],
      commonMistake: 'Cho OH vào carbon đầu tạo butan-1-ol là sản phẩm chính.', reviewSuggestion: 'Ôn định hướng cộng nước vào alkene.'
    }
  },
  {
    id: 'chem11-hc-x011', topicId: 'chem11-t4', questionTypeId: 'chem11-qt51',
    subTypeId: 'chem11-hc-st-add-data',
    content: 'Hỗn hợp có 0,10 mol ethylene và 0,10 mol ethyne. Cần bao nhiêu mol $Br_2$ để cộng hoàn toàn?',
    responseType: 'short_answer', correctAnswer: '0.3', acceptedAnswers: ['0,3', '0.30', '0,30'],
    validatorType: 'number', difficulty: 'hard',
    outcomeIds: ['chem11-hc-unsat-addition-basic'], practiceRole: 'far_transfer', representationType: 'table', isMasteryHoldout: true, estimatedSeconds: 110,
    solution: {
      recognition: 'Cộng nhu cầu bromine của alkene và alkyne.',
      reasoning: ['0,10 mol ethylene cần 0,10 mol Br₂; 0,10 mol ethyne cần 0,20 mol Br₂.', 'Tổng lượng Br₂ là 0,30 mol.'],
      commonMistake: 'Dùng cùng tỉ lệ 1:1 cho cả hai chất.', reviewSuggestion: 'Ôn số liên kết pi của nối đôi và nối ba.'
    }
  },
  {
    id: 'chem11-hc-x012', topicId: 'chem11-t4', questionTypeId: 'chem11-qt51',
    subTypeId: 'chem11-hc-st-add-data',
    content: 'Thuốc thử đơn giản để phân biệt ethane và ethylene ở điều kiện phù hợp là',
    responseType: 'single_choice',
    options: ['A. Nước bromine', 'B. Dung dịch NaCl', 'C. Nước cất', 'D. Quỳ tím khô'],
    correctAnswer: 'A', validatorType: 'choice', difficulty: 'hard',
    outcomeIds: ['chem11-hc-unsat-addition-basic'], practiceRole: 'far_transfer', representationType: 'experiment', isMasteryHoldout: true, estimatedSeconds: 70,
    solution: {
      recognition: 'Chọn phép thử cho nối đôi.',
      reasoning: ['Ethylene cộng Br₂ và làm mất màu nước bromine.', 'Ethane không phản ứng trong điều kiện phép thử này.'],
      commonMistake: 'Dùng phản ứng cháy làm phép thử trực tiếp.', reviewSuggestion: 'Ôn hiện tượng cộng bromine của alkene.'
    }
  },
  {
    id: 'chem11-hc-x013', topicId: 'chem11-t4', questionTypeId: 'chem11-qt52',
    subTypeId: 'chem11-hc-st-polymerization',
    content: 'Mắt xích của polyethylene tạo từ ethylene là',
    responseType: 'single_choice',
    options: ['A. $[-CH_2-CH_2-]$', 'B. $[-CH=CH-]$', 'C. $[-CH_2-]$', 'D. $[-CHCl-CHCl-]$'],
    correctAnswer: 'A', validatorType: 'choice', difficulty: 'medium',
    outcomeIds: ['chem11-hc-unsat-polymerization'], practiceRole: 'near_transfer', representationType: 'diagram', estimatedSeconds: 65,
    solution: {
      recognition: 'Viết mắt xích polymer cộng từ alkene.',
      reasoning: ['Liên kết pi của ethylene mở ra khi trùng hợp.', 'Khung lặp còn lại là $-CH_2-CH_2-$.'],
      commonMistake: 'Giữ nối đôi trong mắt xích polyethylene.', reviewSuggestion: 'Ôn cách chuyển monomer alkene thành mắt xích.'
    }
  },
  {
    id: 'chem11-hc-x014', topicId: 'chem11-t4', questionTypeId: 'chem11-qt52',
    subTypeId: 'chem11-hc-st-polymerization',
    content: 'Nếu phản ứng trùng hợp ethylene đạt hiệu suất 100%, 28,0 kg ethylene tạo bao nhiêu kg polyethylene?',
    responseType: 'short_answer', correctAnswer: '28', acceptedAnswers: ['28,0', '28.0'],
    validatorType: 'number', difficulty: 'hard',
    outcomeIds: ['chem11-hc-unsat-polymerization'], practiceRole: 'far_transfer', representationType: 'equation', isMasteryHoldout: true, estimatedSeconds: 85,
    solution: {
      recognition: 'Dùng bảo toàn khối lượng trong trùng hợp cộng.',
      reasoning: ['Trùng hợp cộng không tạo phân tử nhỏ bị tách ra.', 'Ở hiệu suất 100%, khối lượng polymer bằng khối lượng monomer: 28,0 kg.'],
      commonMistake: 'Nhân khối lượng monomer với hệ số n.', reviewSuggestion: 'Ôn bảo toàn khối lượng khi trùng hợp cộng.'
    }
  },
  {
    id: 'chem11-hc-x015', topicId: 'chem11-t4', questionTypeId: 'chem11-qt52',
    subTypeId: 'chem11-hc-st-terminal-alkyne',
    content: 'Chất nào tạo kết tủa bạc acetylide với thuốc thử bạc trong ammonia?',
    responseType: 'single_choice',
    options: ['A. Ethane', 'B. Ethylene', 'C. Ethyne', 'D. But-2-yne'],
    correctAnswer: 'C', validatorType: 'choice', difficulty: 'medium',
    outcomeIds: ['chem11-hc-terminal-alkyne-silver'], practiceRole: 'near_transfer', representationType: 'experiment', estimatedSeconds: 65,
    solution: {
      recognition: 'Nhận diện alkyne có hydrogen đầu mạch.',
      reasoning: ['Ethyne có hydrogen gắn trực tiếp với cả hai carbon sp đầu mạch.', 'Nó phản ứng với thuốc thử bạc tạo bạc acetylide.'],
      commonMistake: 'Cho mọi alkyne đều tạo kết tủa bạc.', reviewSuggestion: 'Ôn điều kiện cấu tạo của alk-1-yne.'
    }
  },
  {
    id: 'chem11-hc-x016', topicId: 'chem11-t4', questionTypeId: 'chem11-qt52',
    subTypeId: 'chem11-hc-st-terminal-alkyne',
    content: 'Cho 0,10 mol ethyne phản ứng hoàn toàn tạo $Ag_2C_2$. Dùng $M_{Ag_2C_2}=240$ g/mol, tính khối lượng kết tủa theo gam.',
    responseType: 'short_answer', correctAnswer: '24', acceptedAnswers: ['24,0', '24.0'],
    validatorType: 'number', difficulty: 'hard',
    outcomeIds: ['chem11-hc-terminal-alkyne-silver'], practiceRole: 'far_transfer', representationType: 'equation', isMasteryHoldout: true, estimatedSeconds: 100,
    solution: {
      recognition: 'Tính kết tủa bạc acetylide từ ethyne.',
      reasoning: ['Một mol ethyne tạo một mol Ag₂C₂, nên có 0,10 mol kết tủa.', '$m=0{,}10\\times240=24$ g.'],
      commonMistake: 'Nhân số mol ethyne với 2 vì có hai Ag.', reviewSuggestion: 'Dùng hệ số của toàn công thức kết tủa.'
    }
  },
  {
    id: 'chem11-hc-x017', topicId: 'chem11-t4', questionTypeId: 'chem11-qt52',
    subTypeId: 'chem11-hc-st-unsat-oxidation',
    content: 'Hiện tượng thường dùng để nhận biết alkene bằng dung dịch $KMnO_4$ loãng, nguội là',
    responseType: 'single_choice',
    options: ['A. Màu tím nhạt/mất và xuất hiện sản phẩm oxi hóa phù hợp', 'B. Tạo khí H₂', 'C. Tạo kết tủa BaSO₄', 'D. Không có biến đổi'],
    correctAnswer: 'A', validatorType: 'choice', difficulty: 'hard',
    outcomeIds: ['chem11-hc-unsat-oxidation'], practiceRole: 'misconception_check', representationType: 'experiment', estimatedSeconds: 75,
    solution: {
      recognition: 'Nhận diện phản ứng oxi hóa nối đôi bằng permanganate.',
      reasoning: ['Nối đôi bị oxi hóa trong điều kiện nhẹ.', 'Permanganate bị khử nên màu tím giảm/mất, thường kèm MnO₂ tùy môi trường.'],
      commonMistake: 'Cho rằng alkene không phản ứng vì không có nhóm chức chứa oxygen.', reviewSuggestion: 'Ôn phép thử KMnO₄ cho liên kết không no.'
    }
  },
  {
    id: 'chem11-hc-x018', topicId: 'chem11-t4', questionTypeId: 'chem11-qt52',
    subTypeId: 'chem11-hc-st-unsat-oxidation',
    content: 'Đốt cháy hoàn toàn 0,10 mol propyne $C_3H_4$. Số mol $CO_2$ tạo ra là bao nhiêu?',
    responseType: 'short_answer', correctAnswer: '0.3', acceptedAnswers: ['0,3', '0.30', '0,30'],
    validatorType: 'number', difficulty: 'hard',
    outcomeIds: ['chem11-hc-unsat-oxidation'], practiceRole: 'mastery_holdout', representationType: 'equation', isMasteryHoldout: true, estimatedSeconds: 85,
    solution: {
      recognition: 'Bảo toàn carbon trong phản ứng cháy alkyne.',
      reasoning: ['Mỗi mol C₃H₄ chứa 3 mol nguyên tử carbon.', '0,10 mol C₃H₄ tạo $3\\times0{,}10=0{,}30$ mol CO₂.'],
      commonMistake: 'Dùng số hydrogen để tính CO₂.', reviewSuggestion: 'Ôn bảo toàn C trong phản ứng cháy.'
    }
  },
  {
    id: 'chem11-hc-x019', topicId: 'chem11-t4', questionTypeId: 'chem11-qt57',
    subTypeId: 'chem11-hc-st-benzene-addition',
    content: 'Một mol benzene cộng hoàn toàn hydrogen tạo cyclohexane cần bao nhiêu mol $H_2$?',
    responseType: 'single_choice',
    options: ['A. 1 mol', 'B. 2 mol', 'C. 3 mol', 'D. 6 mol'],
    correctAnswer: 'C', validatorType: 'choice', difficulty: 'medium',
    outcomeIds: ['chem11-hc-benzene-addition'], practiceRole: 'near_transfer', representationType: 'equation', estimatedSeconds: 65,
    solution: {
      recognition: 'Cân bằng phản ứng hydrogen hóa benzene.',
      reasoning: ['$C_6H_6+3H_2\\rightarrow C_6H_{12}$.', 'Chênh lệch sáu H tương ứng ba phân tử H₂.'],
      commonMistake: 'Dùng một mol H₂ như với alkene.', reviewSuggestion: 'Ôn phản ứng cộng của vòng benzene trong điều kiện mạnh.'
    }
  },
  {
    id: 'chem11-hc-x020', topicId: 'chem11-t4', questionTypeId: 'chem11-qt57',
    subTypeId: 'chem11-hc-st-benzene-addition',
    content: 'Hydrogen hóa hoàn toàn 0,20 mol benzene thành cyclohexane cần bao nhiêu mol $H_2$?',
    responseType: 'short_answer', correctAnswer: '0.6', acceptedAnswers: ['0,6', '0.60', '0,60'],
    validatorType: 'number', difficulty: 'hard',
    outcomeIds: ['chem11-hc-benzene-addition'], practiceRole: 'far_transfer', representationType: 'equation', isMasteryHoldout: true, estimatedSeconds: 85,
    solution: {
      recognition: 'Tính tỉ lượng hydrogen hóa benzene.',
      reasoning: ['Một mol benzene cần ba mol H₂.', '$n_{H_2}=0{,}20\\times3=0{,}60$ mol.'],
      commonMistake: 'Dùng tỉ lệ 1:1.', reviewSuggestion: 'Ghi nhớ phương trình tạo cyclohexane.'
    }
  },
  {
    id: 'chem11-hc-x021', topicId: 'chem11-t4', questionTypeId: 'chem11-qt57',
    subTypeId: 'chem11-hc-st-arene-combustion',
    content: 'Theo $C_7H_8+9O_2\\rightarrow7CO_2+4H_2O$, đốt cháy 0,50 mol toluene cần bao nhiêu mol $O_2$?',
    responseType: 'short_answer', correctAnswer: '4.5', acceptedAnswers: ['4,5', '4.50', '4,50'],
    validatorType: 'number', difficulty: 'hard',
    outcomeIds: ['chem11-hc-arene-combustion'], practiceRole: 'far_transfer', representationType: 'equation', isMasteryHoldout: true, estimatedSeconds: 90,
    solution: {
      recognition: 'Tính oxygen theo phương trình cháy toluene.',
      reasoning: ['Một mol toluene cần chín mol O₂.', '0,50 mol cần $0{,}50\\times9=4{,}50$ mol O₂.'],
      commonMistake: 'Dùng hệ số CO₂ làm hệ số O₂.', reviewSuggestion: 'Ôn cân bằng và tỉ lượng phản ứng cháy arene.'
    }
  },
  {
    id: 'chem11-hc-x022', topicId: 'chem11-t4', questionTypeId: 'chem11-qt57',
    subTypeId: 'chem11-hc-st-arene-combustion',
    content: 'Arene thường cho ngọn lửa nhiều muội hơn alkane nhỏ trong cùng điều kiện chủ yếu vì',
    responseType: 'single_choice',
    options: ['A. Có tỉ lệ carbon/hydrogen cao hơn', 'B. Không chứa carbon', 'C. Tự tạo oxygen', 'D. Luôn chứa sulfur'],
    correctAnswer: 'A', validatorType: 'choice', difficulty: 'medium',
    outcomeIds: ['chem11-hc-arene-combustion'], practiceRole: 'near_transfer', representationType: 'text', estimatedSeconds: 70,
    solution: {
      recognition: 'Liên hệ thành phần nguyên tố với đặc điểm ngọn lửa.',
      reasoning: ['Arene có tỉ lệ C/H tương đối cao.', 'Trong điều kiện oxygen hạn chế cục bộ, carbon dễ tạo hạt muội phát sáng.'],
      commonMistake: 'Cho rằng muội do sulfur trong arene.', reviewSuggestion: 'Ôn sự cháy không hoàn toàn của hydrocarbon giàu carbon.'
    }
  },
  {
    id: 'chem11-hc-x023', topicId: 'chem11-t4', questionTypeId: 'chem11-qt57',
    subTypeId: 'chem11-hc-st-alkylbenzene-oxidation',
    content: 'Oxi hóa mạnh mạch nhánh của toluene bằng $KMnO_4$ rồi acid hóa tạo sản phẩm hữu cơ chính là',
    responseType: 'single_choice',
    options: ['A. Benzoic acid', 'B. Phenol', 'C. Cyclohexane', 'D. Ethanol'],
    correctAnswer: 'A', validatorType: 'choice', difficulty: 'hard',
    outcomeIds: ['chem11-hc-alkylbenzene-oxidation'], practiceRole: 'far_transfer', representationType: 'equation', isMasteryHoldout: true, estimatedSeconds: 75,
    solution: {
      recognition: 'Nhận diện oxi hóa mạch nhánh alkylbenzene.',
      reasoning: ['Toluene có hydrogen ở carbon benzylic.', 'Oxi hóa mạnh chuyển mạch nhánh thành nhóm –COOH, tạo benzoic acid.'],
      commonMistake: 'Oxi hóa trực tiếp vòng thành phenol.', reviewSuggestion: 'Ôn điều kiện cấu tạo cho oxi hóa mạch nhánh.'
    }
  },
  {
    id: 'chem11-hc-x024', topicId: 'chem11-t4', questionTypeId: 'chem11-qt57',
    subTypeId: 'chem11-hc-st-alkylbenzene-oxidation',
    content: 'Trong mô hình oxi hóa mạch nhánh bằng $KMnO_4$ mạnh, chất nào không có hydrogen benzylic nên khó cho benzoic acid theo phản ứng này?',
    responseType: 'single_choice',
    options: ['A. Toluene', 'B. Ethylbenzene', 'C. Isopropylbenzene', 'D. tert-Butylbenzene'],
    correctAnswer: 'D', validatorType: 'choice', difficulty: 'hard',
    outcomeIds: ['chem11-hc-alkylbenzene-oxidation'], practiceRole: 'mastery_holdout', representationType: 'diagram', isMasteryHoldout: true, estimatedSeconds: 105,
    solution: {
      recognition: 'Kiểm tra hydrogen trên carbon gắn trực tiếp với vòng.',
      reasoning: ['Toluene, ethylbenzene và isopropylbenzene đều có ít nhất một H benzylic.', 'Carbon benzylic của tert-butylbenzene gắn với ba nhóm methyl và vòng nên không có H.'],
      commonMistake: 'Cho mọi alkylbenzene đều oxi hóa giống toluene.', reviewSuggestion: 'Ôn vai trò hydrogen benzylic.'
    }
  }
];

const expansion = buildChemistryPracticeExpansion(specs);

export const g11ChemistryHydrocarbonsExpandedQuestions = expansion.questions;
export const g11ChemistryHydrocarbonsExpandedSolutions = expansion.solutions;
export const g11ChemistryHydrocarbonsExpansionSpecs = specs;
