import type { Question } from '@/types';

export const g11ChemistryOrganicBasicsQuestions: Question[] = [
  {
    id: 'chem11-org-q001', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt33',
    content: 'Khái niệm phù hợp nhất về hợp chất hữu cơ là',
    responseType: 'single_choice',
    options: ['A. Hợp chất của carbon, trừ một số hợp chất carbon được xếp vào hóa học vô cơ.', 'B. Mọi chất lấy từ sinh vật.', 'C. Mọi chất chứa hydrogen.', 'D. Chỉ các hợp chất gồm C và H.'],
    correctAnswer: 'A', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-organic-concept'], subTypeId: 'chem11-org-st-concept-exceptions', practiceRole: 'guided', representationType: 'text', estimatedSeconds: 45
  },
  {
    id: 'chem11-org-q002', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt33',
    content: 'Chất nào chứa carbon nhưng thường được xếp vào hợp chất vô cơ?',
    responseType: 'single_choice',
    options: ['A. CH₄.', 'B. CO₂.', 'C. C₂H₅OH.', 'D. CH₃Cl.'],
    correctAnswer: 'B', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-organic-exceptions'], subTypeId: 'chem11-org-st-concept-exceptions', practiceRole: 'near_transfer', representationType: 'equation', estimatedSeconds: 40
  },
  {
    id: 'chem11-org-q003', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt33',
    content: 'Phát biểu “mọi hợp chất chứa carbon đều là hữu cơ” sai vì',
    responseType: 'single_choice',
    options: ['A. hợp chất hữu cơ không chứa carbon.', 'B. carbon không tạo liên kết.', 'C. có các ngoại lệ như CO, CO₂ và carbonate thuộc phạm vi vô cơ.', 'D. mọi hợp chất carbon đều là kim loại.'],
    correctAnswer: 'C', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-organic-exceptions'], subTypeId: 'chem11-org-st-concept-exceptions', practiceRole: 'misconception_check', representationType: 'text',
    misconceptionId: 'chem11-mis-all-carbon-organic', estimatedSeconds: 50
  },
  {
    id: 'chem11-org-q004', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt33',
    content: 'Bảng gồm CH₄, CH₃Cl, C₂H₅OH, CO₂ và Na₂CO₃. Nhóm chỉ gồm các hợp chất hữu cơ là',
    responseType: 'single_choice',
    options: ['A. CO₂ và Na₂CO₃.', 'B. CH₄ và CO₂.', 'C. C₂H₅OH và Na₂CO₃.', 'D. CH₄, CH₃Cl và C₂H₅OH.'],
    correctAnswer: 'D', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-organic-concept', 'chem11-org-organic-exceptions'], subTypeId: 'chem11-org-st-concept-exceptions', practiceRole: 'mastery_holdout', representationType: 'table',
    isMasteryHoldout: true, estimatedSeconds: 60
  },
  {
    id: 'chem11-org-q005', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt33',
    content: 'Kiểu liên kết chiếm ưu thế trong phần lớn hợp chất hữu cơ phân tử là',
    responseType: 'single_choice',
    options: ['A. liên kết cộng hóa trị.', 'B. liên kết kim loại.', 'C. liên kết ion thuần túy.', 'D. không có liên kết.'],
    correctAnswer: 'A', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-composition-bonding'], subTypeId: 'chem11-org-st-general-properties', practiceRole: 'guided', representationType: 'diagram', estimatedSeconds: 45
  },
  {
    id: 'chem11-org-q006', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt33',
    content: 'Ngoài carbon và hydrogen, hợp chất hữu cơ có thể chứa',
    responseType: 'single_choice',
    options: ['A. không thể chứa nguyên tố khác.', 'B. O, N, halogen, S, P và các nguyên tố khác.', 'C. chỉ kim loại kiềm.', 'D. chỉ oxygen.'],
    correctAnswer: 'B', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-composition-bonding'], subTypeId: 'chem11-org-st-general-properties', practiceRole: 'near_transfer', representationType: 'text', estimatedSeconds: 45
  },
  {
    id: 'chem11-org-q007', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt33',
    content: 'Nhận xét đúng về độ tan của hợp chất hữu cơ là',
    responseType: 'single_choice',
    options: ['A. Mọi chất hữu cơ đều không tan trong nước.', 'B. Mọi chất hữu cơ tan vô hạn trong nước.', 'C. Nhiều chất ít tan, nhưng phân tử nhỏ có nhóm phân cực có thể tan tốt; cần xét cấu trúc cụ thể.', 'D. Độ tan không liên quan cấu trúc.'],
    correctAnswer: 'C', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-physical-characteristics'], subTypeId: 'chem11-org-st-general-properties', practiceRole: 'misconception_check', representationType: 'text',
    misconceptionId: 'chem11-mis-organic-never-water-soluble', estimatedSeconds: 60
  },
  {
    id: 'chem11-org-q008', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt33',
    content: 'Bảng dữ liệu cho thấy hexane gần như không tan trong nước, ethanol tan vô hạn, còn một hydrocarbon lớn có nhiệt độ sôi cao. Kết luận tốt nhất là',
    responseType: 'single_choice',
    options: ['A. Mọi hợp chất hữu cơ đều giống hexane.', 'B. Mọi hợp chất hữu cơ đều giống ethanol.', 'C. Hợp chất hữu cơ luôn có nhiệt độ sôi thấp.', 'D. Độ tan và nhiệt độ sôi phụ thuộc cấu trúc, kích thước và lực tương tác; không dùng quy tắc tuyệt đối.'],
    correctAnswer: 'D', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-physical-characteristics'], subTypeId: 'chem11-org-st-general-properties', practiceRole: 'mastery_holdout', representationType: 'table',
    isMasteryHoldout: true, estimatedSeconds: 75
  },
  {
    id: 'chem11-org-q009', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt33',
    content: 'Hóa học hữu cơ nghiên cứu',
    responseType: 'single_choice',
    options: ['A. thành phần, cấu trúc, tính chất, phản ứng, điều chế và ứng dụng của hợp chất hữu cơ.', 'B. chỉ cây cối.', 'C. chỉ nhiên liệu hóa thạch.', 'D. chỉ carbon nguyên chất.'],
    correctAnswer: 'A', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-organic-chemistry-scope'], subTypeId: 'chem11-org-st-reaction-scope', practiceRole: 'guided', representationType: 'diagram', estimatedSeconds: 50
  },
  {
    id: 'chem11-org-q010', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt33',
    content: 'Đặc điểm thường gặp của phản ứng hữu cơ là',
    responseType: 'single_choice',
    options: ['A. luôn tức thời và hoàn toàn.', 'B. có thể chậm, cần điều kiện/xúc tác và diễn ra theo nhiều hướng.', 'C. luôn chỉ tạo một sản phẩm.', 'D. không phụ thuộc cấu trúc.'],
    correctAnswer: 'B', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-reaction-characteristics'], subTypeId: 'chem11-org-st-reaction-scope', practiceRole: 'near_transfer', representationType: 'text', estimatedSeconds: 55
  },
  {
    id: 'chem11-org-q011', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt33',
    content: 'Một phản ứng hữu cơ sau 60 phút đạt 72% chuyển hóa và tạo hai sản phẩm chính cùng sản phẩm phụ. Dữ liệu này phù hợp nhất với nhận xét',
    responseType: 'single_choice',
    options: ['A. phản ứng hữu cơ luôn hoàn toàn.', 'B. không có phản ứng xảy ra.', 'C. phản ứng có thể chậm, không hoàn toàn và theo nhiều hướng.', 'D. mọi chất hữu cơ là hydrocarbon.'],
    correctAnswer: 'C', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-reaction-characteristics'], subTypeId: 'chem11-org-st-reaction-scope', practiceRole: 'far_transfer', representationType: 'table', estimatedSeconds: 75
  },
  {
    id: 'chem11-org-q012', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt33',
    content: 'Một học sinh kết luận: “Chất do nhà máy tổng hợp không thể là chất hữu cơ và mọi phản ứng hữu cơ đều chỉ có một sản phẩm.” Cách sửa đầy đủ nhất là',
    responseType: 'single_choice',
    options: ['A. Giữ cả hai kết luận.', 'B. Chỉ sửa phần nguồn gốc.', 'C. Chỉ sửa phần phản ứng.', 'D. Hợp chất hữu cơ có thể được tổng hợp nhân tạo; phản ứng hữu cơ thường cần điều kiện và có thể tạo hỗn hợp sản phẩm.'],
    correctAnswer: 'D', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-organic-concept', 'chem11-org-reaction-characteristics'], subTypeId: 'chem11-org-st-reaction-scope', practiceRole: 'mastery_holdout', representationType: 'text',
    misconceptionId: 'chem11-mis-organic-living-only', isMasteryHoldout: true, estimatedSeconds: 85
  },
  {
    id: 'chem11-org-q013', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt34',
    content: 'Chất nào là hydrocarbon?',
    responseType: 'single_choice',
    options: ['A. CH₄.', 'B. CH₃OH.', 'C. CH₃Cl.', 'D. CO₂.'],
    correctAnswer: 'A', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-classify-hydrocarbon'], subTypeId: 'chem11-org-st-hydrocarbon', practiceRole: 'guided', representationType: 'equation', estimatedSeconds: 35
  },
  {
    id: 'chem11-org-q014', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt34',
    content: 'C₂H₄ được phân loại là',
    responseType: 'single_choice',
    options: ['A. hợp chất carbon vô cơ.', 'B. hydrocarbon.', 'C. dẫn xuất chứa oxygen.', 'D. muối carbonate.'],
    correctAnswer: 'B', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-classify-hydrocarbon'], subTypeId: 'chem11-org-st-hydrocarbon', practiceRole: 'near_transfer', representationType: 'equation', estimatedSeconds: 35
  },
  {
    id: 'chem11-org-q015', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt34',
    content: 'Dãy chỉ gồm hydrocarbon là',
    responseType: 'single_choice',
    options: ['A. CH₄, CH₃OH.', 'B. C₂H₄, CH₃Cl.', 'C. CH₄, C₂H₂, C₆H₆.', 'D. CO₂, C₂H₆.'],
    correctAnswer: 'C', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-classify-hydrocarbon'], subTypeId: 'chem11-org-st-hydrocarbon', practiceRole: 'near_transfer', representationType: 'table', estimatedSeconds: 45
  },
  {
    id: 'chem11-org-q016', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt34',
    content: 'Mô hình phân tử X chỉ gồm các quả cầu carbon và hydrogen. Biết X là hợp chất hữu cơ phân tử, X được xếp vào',
    responseType: 'single_choice',
    options: ['A. carbonate.', 'B. carbide.', 'C. dẫn xuất hydrocarbon.', 'D. hydrocarbon.'],
    correctAnswer: 'D', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-classify-hydrocarbon'], subTypeId: 'chem11-org-st-hydrocarbon', practiceRole: 'mastery_holdout', representationType: 'diagram',
    isMasteryHoldout: true, estimatedSeconds: 50
  },
  {
    id: 'chem11-org-q017', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt34',
    content: 'C₂H₅OH được phân loại là',
    responseType: 'single_choice',
    options: ['A. dẫn xuất hydrocarbon chứa oxygen.', 'B. hydrocarbon.', 'C. oxide vô cơ.', 'D. carbonate.'],
    correctAnswer: 'A', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-classify-derivative'], subTypeId: 'chem11-org-st-derivative', practiceRole: 'guided', representationType: 'equation', estimatedSeconds: 40
  },
  {
    id: 'chem11-org-q018', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt34',
    content: 'CH₃Cl là dẫn xuất hydrocarbon vì',
    responseType: 'single_choice',
    options: ['A. chỉ chứa C và H.', 'B. là hợp chất hữu cơ có chlorine thay cho một H của hydrocarbon.', 'C. là muối chloride ion.', 'D. không chứa carbon.'],
    correctAnswer: 'B', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-classify-derivative'], subTypeId: 'chem11-org-st-derivative', practiceRole: 'near_transfer', representationType: 'diagram', estimatedSeconds: 50
  },
  {
    id: 'chem11-org-q019', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt34',
    content: 'Phát biểu đúng về dẫn xuất hydrocarbon là',
    responseType: 'single_choice',
    options: ['A. bắt buộc chỉ chứa C, H.', 'B. bắt buộc phải chứa oxygen.', 'C. có thể chứa halogen, N, O, S hoặc nguyên tố khác; oxygen không bắt buộc.', 'D. mọi dẫn xuất đều là hợp chất vô cơ.'],
    correctAnswer: 'C', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-classify-derivative'], subTypeId: 'chem11-org-st-derivative', practiceRole: 'misconception_check', representationType: 'text',
    misconceptionId: 'chem11-mis-derivative-must-have-oxygen', estimatedSeconds: 55
  },
  {
    id: 'chem11-org-q020', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt34',
    content: 'Vì sao CO₂ không được xếp là dẫn xuất hydrocarbon?',
    responseType: 'single_choice',
    options: ['A. Vì không chứa oxygen.', 'B. Vì là hydrocarbon.', 'C. Vì không chứa carbon.', 'D. Vì CO₂ là oxide vô cơ của carbon, thuộc nhóm ngoại lệ.'],
    correctAnswer: 'D', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-organic-exceptions', 'chem11-org-classify-derivative'], subTypeId: 'chem11-org-st-derivative', practiceRole: 'mastery_holdout', representationType: 'text',
    misconceptionId: 'chem11-mis-co2-hydrocarbon-derivative', isMasteryHoldout: true, estimatedSeconds: 60
  },
  {
    id: 'chem11-org-q021', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt34',
    content: 'Trong dãy CH₄, C₂H₅OH, CO₂, CH₃Cl, Na₂CO₃ có lần lượt bao nhiêu hydrocarbon, dẫn xuất hydrocarbon và hợp chất carbon vô cơ?',
    responseType: 'single_choice',
    options: ['A. 1, 2, 2.', 'B. 2, 1, 2.', 'C. 1, 3, 1.', 'D. 3, 1, 1.'],
    correctAnswer: 'A', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-classify-hydrocarbon', 'chem11-org-classify-derivative', 'chem11-org-organic-exceptions'], subTypeId: 'chem11-org-st-mixed-classification', practiceRole: 'guided', representationType: 'table', estimatedSeconds: 70
  },
  {
    id: 'chem11-org-q022', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt34',
    content: 'Bảng phân loại nào đúng?',
    responseType: 'single_choice',
    options: ['A. Hydrocarbon: CH₃OH; dẫn xuất: CH₄.', 'B. Hydrocarbon: C₂H₂, C₆H₆; dẫn xuất: CH₃Br, C₂H₅OH.', 'C. Hydrocarbon: CO₂; dẫn xuất: Na₂CO₃.', 'D. Mọi chất đều là hydrocarbon.'],
    correctAnswer: 'B', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-classify-hydrocarbon', 'chem11-org-classify-derivative'], subTypeId: 'chem11-org-st-mixed-classification', practiceRole: 'far_transfer', representationType: 'table', estimatedSeconds: 65
  },
  {
    id: 'chem11-org-q023', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt34',
    content: 'CCl₄ không chứa hydrogen nhưng được xếp vào',
    responseType: 'single_choice',
    options: ['A. hydrocarbon.', 'B. carbonate vô cơ.', 'C. dẫn xuất halogen của hydrocarbon.', 'D. carbide.'],
    correctAnswer: 'C', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-organic-concept', 'chem11-org-classify-derivative'], subTypeId: 'chem11-org-st-mixed-classification', practiceRole: 'misconception_check', representationType: 'equation',
    misconceptionId: 'chem11-mis-organic-always-carbon-hydrogen', estimatedSeconds: 60
  },
  {
    id: 'chem11-org-q024', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt34',
    content: 'Quy trình phân loại đáng tin cậy nhất cho một công thức chứa carbon là',
    responseType: 'single_choice',
    options: ['A. Thấy C thì gọi hydrocarbon.', 'B. Thấy O thì gọi vô cơ.', 'C. Chỉ đếm số nguyên tử H.', 'D. Loại nhóm carbon vô cơ trước; nếu là hữu cơ, chỉ C/H là hydrocarbon, có nguyên tố khác là dẫn xuất.'],
    correctAnswer: 'D', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-organic-exceptions', 'chem11-org-classify-hydrocarbon', 'chem11-org-classify-derivative'], subTypeId: 'chem11-org-st-mixed-classification', practiceRole: 'mastery_holdout', representationType: 'diagram',
    isMasteryHoldout: true, estimatedSeconds: 75
  },
  {
    id: 'chem11-org-q025', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt35',
    content: 'Nhóm chức là',
    responseType: 'single_choice',
    options: ['A. nguyên tử hoặc nhóm nguyên tử gây ra tính chất hóa học đặc trưng của hợp chất hữu cơ.', 'B. bất kì đoạn công thức nào.', 'C. chỉ nguyên tử carbon.', 'D. toàn bộ phân tử trong mọi trường hợp.'],
    correctAnswer: 'A', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-functional-group'], subTypeId: 'chem11-org-st-functional-concept', practiceRole: 'guided', representationType: 'text', estimatedSeconds: 40
  },
  {
    id: 'chem11-org-q026', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt35',
    content: 'Nhóm chức đặc trưng trong ethanol CH₃CH₂OH là',
    responseType: 'single_choice',
    options: ['A. –CHO.', 'B. –OH alcohol.', 'C. –COOH.', 'D. –NH₂.'],
    correctAnswer: 'B', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-functional-group'], subTypeId: 'chem11-org-st-functional-concept', practiceRole: 'near_transfer', representationType: 'equation', estimatedSeconds: 35
  },
  {
    id: 'chem11-org-q027', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt35',
    content: 'Nhóm –COOH được gọi là',
    responseType: 'single_choice',
    options: ['A. amino.', 'B. aldehyde.', 'C. carboxyl.', 'D. halogen.'],
    correctAnswer: 'C', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-functional-group'], subTypeId: 'chem11-org-st-functional-concept', practiceRole: 'near_transfer', representationType: 'equation', estimatedSeconds: 35
  },
  {
    id: 'chem11-org-q028', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt35',
    content: 'Sơ đồ ghép nào đúng?',
    responseType: 'single_choice',
    options: ['A. –NH₂ → carboxyl.', 'B. –CHO → hydroxy.', 'C. –COOH → amino.', 'D. –NH₂ → amino; –CHO → aldehyde; –COOH → carboxyl.'],
    correctAnswer: 'D', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-functional-group'], subTypeId: 'chem11-org-st-functional-concept', practiceRole: 'mastery_holdout', representationType: 'diagram',
    isMasteryHoldout: true, estimatedSeconds: 55
  },
  {
    id: 'chem11-org-q029', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt35',
    content: 'Nhóm chức trong CH₃CHO là',
    responseType: 'single_choice',
    options: ['A. aldehyde –CHO.', 'B. carboxyl –COOH.', 'C. amino –NH₂.', 'D. hydroxy –OH.'],
    correctAnswer: 'A', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-functional-group'], subTypeId: 'chem11-org-st-functional-recognition', practiceRole: 'guided', representationType: 'equation', estimatedSeconds: 40
  },
  {
    id: 'chem11-org-q030', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt35',
    content: 'Trong CH₃COCH₃ có nhóm đặc trưng',
    responseType: 'single_choice',
    options: ['A. –COOH.', 'B. carbonyl >C=O nằm giữa hai gốc carbon.', 'C. –NH₂.', 'D. –X.'],
    correctAnswer: 'B', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-functional-group'], subTypeId: 'chem11-org-st-functional-recognition', practiceRole: 'near_transfer', representationType: 'diagram', estimatedSeconds: 45
  },
  {
    id: 'chem11-org-q031', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt35',
    content: 'Nhóm chức trong CH₃Cl thuộc loại',
    responseType: 'single_choice',
    options: ['A. hydroxy.', 'B. carbonyl.', 'C. halogen –Cl.', 'D. amino.'],
    correctAnswer: 'C', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-functional-group'], subTypeId: 'chem11-org-st-functional-recognition', practiceRole: 'near_transfer', representationType: 'equation', estimatedSeconds: 40
  },
  {
    id: 'chem11-org-q032', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt35',
    content: 'HCOOH có chứa –OH trong công thức nhưng nhóm chức chính là',
    responseType: 'single_choice',
    options: ['A. alcohol –OH.', 'B. phenol –OH.', 'C. ether.', 'D. carboxyl –COOH.'],
    correctAnswer: 'D', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-functional-group'], subTypeId: 'chem11-org-st-functional-recognition', practiceRole: 'mastery_holdout', representationType: 'diagram',
    misconceptionId: 'chem11-mis-oh-always-alcohol', isMasteryHoldout: true, estimatedSeconds: 55
  },
  {
    id: 'chem11-org-q033', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt35',
    content: 'Phân tử HO–CH₂–COOH chứa',
    responseType: 'single_choice',
    options: ['A. nhóm hydroxy và nhóm carboxyl.', 'B. chỉ nhóm halogen.', 'C. chỉ nhóm amino.', 'D. không có nhóm chức.'],
    correctAnswer: 'A', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-functional-group'], subTypeId: 'chem11-org-st-functional-multiple', practiceRole: 'guided', representationType: 'equation', estimatedSeconds: 50
  },
  {
    id: 'chem11-org-q034', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt35',
    content: 'Cặp ghép đúng giữa chất và nhóm chức là',
    responseType: 'single_choice',
    options: ['A. CH₃CH₂OH – carboxyl; CH₃COOH – alcohol.', 'B. CH₃CH₂OH – hydroxy alcohol; CH₃COOH – carboxyl.', 'C. Cả hai chỉ có carbonyl ketone.', 'D. Cả hai không có nhóm chức.'],
    correctAnswer: 'B', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-functional-group'], subTypeId: 'chem11-org-st-functional-multiple', practiceRole: 'misconception_check', representationType: 'table',
    misconceptionId: 'chem11-mis-oh-always-alcohol', estimatedSeconds: 65
  },
  {
    id: 'chem11-org-q035', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt35',
    content: 'Trong NH₂–CH₂–COOH có các nhóm chức',
    responseType: 'single_choice',
    options: ['A. aldehyde và halogen.', 'B. hydroxy alcohol duy nhất.', 'C. amino và carboxyl.', 'D. carbonyl ketone duy nhất.'],
    correctAnswer: 'C', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-functional-group'], subTypeId: 'chem11-org-st-functional-multiple', practiceRole: 'far_transfer', representationType: 'diagram', estimatedSeconds: 60
  },
  {
    id: 'chem11-org-q036', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt35',
    content: 'Quy trình nhận diện nhóm chức đáng tin cậy nhất là',
    responseType: 'single_choice',
    options: ['A. Thấy O thì gọi alcohol.', 'B. Khoanh ngẫu nhiên từng nguyên tử.', 'C. Thấy C=O thì luôn gọi aldehyde.', 'D. Đọc toàn cụm liên kết, ưu tiên nhóm lớn như –COOH rồi mới ghép cấu trúc với loại nhóm chức.'],
    correctAnswer: 'D', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-functional-group'], subTypeId: 'chem11-org-st-functional-multiple', practiceRole: 'mastery_holdout', representationType: 'diagram',
    misconceptionId: 'chem11-mis-functional-group-any-fragment', isMasteryHoldout: true, estimatedSeconds: 75
  },
  {
    id: 'chem11-org-q037', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt36',
    content: 'Chưng cất tách các cấu tử chủ yếu dựa trên sự khác nhau về',
    responseType: 'single_choice',
    options: ['A. nhiệt độ sôi và độ bay hơi.', 'B. màu sắc.', 'C. khối lượng riêng duy nhất.', 'D. số nguyên tử carbon duy nhất.'],
    correctAnswer: 'A', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-distillation-principle'], subTypeId: 'chem11-org-st-distillation-principle', practiceRole: 'guided', representationType: 'text', estimatedSeconds: 40
  },
  {
    id: 'chem11-org-q038', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt36',
    content: 'Hỗn hợp lỏng đồng nhất nào phù hợp hơn để minh họa chưng cất thường?',
    responseType: 'single_choice',
    options: ['A. Hai chất có nhiệt độ sôi gần như bằng nhau.', 'B. Acetone và nước có nhiệt độ sôi chênh lệch đáng kể.', 'C. Cát không tan trong nước.', 'D. Hai chất rắn không bay hơi.'],
    correctAnswer: 'B', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-distillation-principle'], subTypeId: 'chem11-org-st-distillation-principle', practiceRole: 'near_transfer', representationType: 'table', estimatedSeconds: 50
  },
  {
    id: 'chem11-org-q039', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt36',
    content: 'Phát biểu “chưng cất dựa chủ yếu vào khối lượng riêng” là',
    responseType: 'single_choice',
    options: ['A. đúng cho mọi hỗn hợp.', 'B. đúng vì chất nặng bay hơi trước.', 'C. sai; chưng cất dựa vào khác biệt nhiệt độ sôi/độ bay hơi.', 'D. đúng nếu hai chất có cùng nhiệt độ sôi.'],
    correctAnswer: 'C', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-distillation-principle'], subTypeId: 'chem11-org-st-distillation-principle', practiceRole: 'misconception_check', representationType: 'text',
    misconceptionId: 'chem11-mis-distillation-density', estimatedSeconds: 50
  },
  {
    id: 'chem11-org-q040', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt36',
    content: 'Hai chất lỏng có nhiệt độ sôi 78 °C và 79 °C. Kết luận hợp lí nhất là',
    responseType: 'single_choice',
    options: ['A. Một lần chưng cất thường chắc chắn tách hoàn toàn.', 'B. Khối lượng riêng sẽ quyết định hoàn toàn.', 'C. Không cần theo dõi nhiệt độ.', 'D. Chênh lệch rất nhỏ nên chưng cất thường khó tách rõ; có thể cần phân đoạn hoặc phương pháp khác.'],
    correctAnswer: 'D', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-distillation-principle'], subTypeId: 'chem11-org-st-distillation-principle', practiceRole: 'mastery_holdout', representationType: 'table',
    misconceptionId: 'chem11-mis-distillation-boil-same', isMasteryHoldout: true, estimatedSeconds: 60
  },
  {
    id: 'chem11-org-q041', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt36',
    content: 'Bầu nhiệt kế trong bộ chưng cất thường nên đặt',
    responseType: 'single_choice',
    options: ['A. gần nhánh dẫn hơi vào sinh hàn để đo nhiệt độ hơi.', 'B. ngập sâu dưới đáy chất lỏng.', 'C. ngoài hệ thống.', 'D. trong bình hứng lạnh.'],
    correctAnswer: 'A', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-distillation-apparatus'], subTypeId: 'chem11-org-st-distillation-apparatus', practiceRole: 'guided', representationType: 'diagram', estimatedSeconds: 50
  },
  {
    id: 'chem11-org-q042', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt36',
    content: 'Nước làm lạnh trong sinh hàn nên',
    responseType: 'single_choice',
    options: ['A. vào đầu trên, ra đầu dưới.', 'B. vào đầu thấp, ra đầu cao để áo nước đầy.', 'C. không cần lưu thông.', 'D. chảy cùng trong ống dẫn hơi.'],
    correctAnswer: 'B', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-distillation-apparatus'], subTypeId: 'chem11-org-st-distillation-apparatus', practiceRole: 'near_transfer', representationType: 'diagram',
    misconceptionId: 'chem11-mis-condenser-water-top', estimatedSeconds: 50
  },
  {
    id: 'chem11-org-q043', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt36',
    content: 'Thêm đá bọt trước khi đun trong chưng cất nhằm',
    responseType: 'single_choice',
    options: ['A. làm tăng nhiệt độ sôi vô hạn.', 'B. phản ứng với sản phẩm.', 'C. giúp chất lỏng sôi đều, giảm nguy cơ sôi vọt.', 'D. đổi màu hỗn hợp.'],
    correctAnswer: 'C', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-distillation-apparatus'], subTypeId: 'chem11-org-st-distillation-apparatus', practiceRole: 'near_transfer', representationType: 'experiment', estimatedSeconds: 50
  },
  {
    id: 'chem11-org-q044', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt36',
    content: 'Sơ đồ chưng cất nào an toàn và đúng nguyên tắc hơn?',
    responseType: 'single_choice',
    options: ['A. Hệ kín hoàn toàn không có đường thoát hơi.', 'B. Nhiệt kế ngập trong chất lỏng và không có sinh hàn.', 'C. Nước sinh hàn vào từ đầu trên.', 'D. Hệ không bị bịt kín, nhiệt kế ở đường hơi, sinh hàn có nước vào thấp–ra cao và bình hứng phù hợp.'],
    correctAnswer: 'D', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-distillation-apparatus'], subTypeId: 'chem11-org-st-distillation-apparatus', practiceRole: 'mastery_holdout', representationType: 'diagram',
    misconceptionId: 'chem11-mis-distillation-thermometer-liquid', isMasteryHoldout: true, estimatedSeconds: 70
  },
  {
    id: 'chem11-org-q045', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt36',
    content: 'Khi nhiệt độ hơi ổn định gần nhiệt độ sôi của cấu tử dễ bay hơi, thao tác phù hợp là',
    responseType: 'single_choice',
    options: ['A. thu phân đoạn tương ứng vào bình đã định.', 'B. tắt nước sinh hàn.', 'C. bịt kín hệ.', 'D. gộp ngay với mọi phân đoạn khác.'],
    correctAnswer: 'A', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-distillation-data'], subTypeId: 'chem11-org-st-distillation-data', practiceRole: 'guided', representationType: 'experiment', estimatedSeconds: 55
  },
  {
    id: 'chem11-org-q046', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt36',
    content: 'Vì sao cần đổi bình hứng khi nhiệt độ tăng sang một vùng ổn định mới?',
    responseType: 'single_choice',
    options: ['A. Để làm nhiệt kế đổi màu.', 'B. Thành phần hơi đã thay đổi, vùng mới có thể tương ứng cấu tử/phân đoạn khác.', 'C. Vì nước sinh hàn đã hết.', 'D. Để tăng áp suất hệ.'],
    correctAnswer: 'B', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-distillation-data'], subTypeId: 'chem11-org-st-distillation-data', practiceRole: 'near_transfer', representationType: 'diagram', estimatedSeconds: 65
  },
  {
    id: 'chem11-org-q047', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt36',
    content: 'Bảng ghi nhiệt độ hơi ổn định ở 58–60 °C trong 8 phút, sau đó tăng và ổn định ở 98–100 °C. Nhận xét đúng là',
    responseType: 'single_choice',
    options: ['A. Hai plateau chắc chắn là cùng một chất tinh khiết.', 'B. Không thể thu phân đoạn.', 'C. Phân đoạn đầu giàu cấu tử sôi thấp hơn; phân đoạn sau giàu cấu tử sôi cao hơn.', 'D. Khối lượng riêng quyết định hai plateau.'],
    correctAnswer: 'C', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-distillation-data'], subTypeId: 'chem11-org-st-distillation-data', practiceRole: 'far_transfer', representationType: 'table', estimatedSeconds: 75
  },
  {
    id: 'chem11-org-q048', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt36',
    content: 'Một nhóm gộp toàn bộ dịch cất dù nhiệt độ thay đổi từ 60 °C đến 100 °C. Cách cải thiện tốt nhất là',
    responseType: 'single_choice',
    options: ['A. Tăng nhiệt thật mạnh.', 'B. Bỏ nhiệt kế.', 'C. Bịt kín bình hứng.', 'D. Theo dõi nhiệt độ, loại/giữ phần đầu phù hợp và đổi bình theo khoảng phân đoạn để tránh trộn lại các cấu tử.'],
    correctAnswer: 'D', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-distillation-data'], subTypeId: 'chem11-org-st-distillation-data', practiceRole: 'mastery_holdout', representationType: 'table',
    misconceptionId: 'chem11-mis-distillation-collect-all', isMasteryHoldout: true, estimatedSeconds: 85
  },
  {
    id: 'chem11-org-q049', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt37',
    content: 'Điều kiện quan trọng của hai dung môi dùng trong chiết lỏng–lỏng là',
    responseType: 'single_choice',
    options: ['A. hầu như không trộn lẫn và có khả năng hòa tan chất cần chiết khác nhau.', 'B. phải có cùng khối lượng riêng.', 'C. phải cùng màu.', 'D. phải cùng nhiệt độ sôi.'],
    correctAnswer: 'A', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-extraction-principle'], subTypeId: 'chem11-org-st-extraction-solvent', practiceRole: 'guided', representationType: 'text', estimatedSeconds: 45
  },
  {
    id: 'chem11-org-q050', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt37',
    content: 'Để chiết một chất hữu cơ khỏi nước, dung môi hữu cơ phù hợp cần',
    responseType: 'single_choice',
    options: ['A. trộn lẫn hoàn toàn với nước.', 'B. ít trộn với nước, hòa tan tốt chất cần chiết và đủ an toàn cho quy trình.', 'C. không hòa tan chất cần chiết.', 'D. phản ứng phá hủy chất cần chiết.'],
    correctAnswer: 'B', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-extraction-principle'], subTypeId: 'chem11-org-st-extraction-solvent', practiceRole: 'near_transfer', representationType: 'table', estimatedSeconds: 50
  },
  {
    id: 'chem11-org-q051', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt37',
    content: 'Khối lượng riêng của dung môi trong phép chiết chủ yếu giúp',
    responseType: 'single_choice',
    options: ['A. xác định chất tan chắc chắn hòa tan tốt hơn.', 'B. làm hai dung môi trộn lẫn.', 'C. xác định lớp dung môi nằm trên hay dưới, không thay thế dữ liệu độ tan.', 'D. quyết định màu chất tan.'],
    correctAnswer: 'C', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-extraction-principle'], subTypeId: 'chem11-org-st-extraction-solvent', practiceRole: 'misconception_check', representationType: 'text',
    misconceptionId: 'chem11-mis-extraction-density-solubility', estimatedSeconds: 55
  },
  {
    id: 'chem11-org-q052', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt37',
    content: 'Cặp dung môi nào không phù hợp để tạo hai pha chiết ổn định vì trộn lẫn hoàn toàn?',
    responseType: 'single_choice',
    options: ['A. Nước và hexane.', 'B. Nước và một ether ít tan.', 'C. Nước và dichloromethane.', 'D. Nước và ethanol.'],
    correctAnswer: 'D', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-extraction-principle'], subTypeId: 'chem11-org-st-extraction-solvent', practiceRole: 'mastery_holdout', representationType: 'table',
    misconceptionId: 'chem11-mis-extraction-miscible-solvents', isMasteryHoldout: true, estimatedSeconds: 55
  },
  {
    id: 'chem11-org-q053', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt37',
    content: 'Khi lắc phễu chiết chứa dung môi dễ bay hơi, cần',
    responseType: 'single_choice',
    options: ['A. đảo–lắc có kiểm soát và xả áp định kì theo hướng an toàn.', 'B. bịt kín rồi đun nóng.', 'C. mở khóa hướng vào người.', 'D. bỏ qua nút và khóa.'],
    correctAnswer: 'A', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-extraction-funnel'], subTypeId: 'chem11-org-st-extraction-funnel', practiceRole: 'guided', representationType: 'experiment', estimatedSeconds: 50
  },
  {
    id: 'chem11-org-q054', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt37',
    content: 'Dung môi hữu cơ có khối lượng riêng 0,75 g/mL tạo hai lớp với nước. Lớp hữu cơ thường nằm',
    responseType: 'single_choice',
    options: ['A. dưới vì là hữu cơ.', 'B. trên vì nhẹ hơn nước.', 'C. giữa hai lớp.', 'D. không thể tạo lớp.'],
    correctAnswer: 'B', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-extraction-funnel'], subTypeId: 'chem11-org-st-extraction-funnel', practiceRole: 'near_transfer', representationType: 'diagram', estimatedSeconds: 50
  },
  {
    id: 'chem11-org-q055', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt37',
    content: 'Trước khi mở khóa để tháo lớp dưới của phễu chiết sau khi phân lớp, nên',
    responseType: 'single_choice',
    options: ['A. tiếp tục lắc mạnh.', 'B. đun nóng phễu.', 'C. tháo nút trên để không tạo chân không, rồi mở khóa có kiểm soát.', 'D. lật ngược phễu khi khóa đang mở.'],
    correctAnswer: 'C', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-extraction-funnel'], subTypeId: 'chem11-org-st-extraction-funnel', practiceRole: 'near_transfer', representationType: 'experiment', estimatedSeconds: 55
  },
  {
    id: 'chem11-org-q056', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt37',
    content: 'Không biết lớp nào là nước, cách kiểm tra phù hợp là',
    responseType: 'single_choice',
    options: ['A. đoán theo màu.', 'B. ngửi trực tiếp.', 'C. đun kín phễu.', 'D. nhỏ một giọt nước vào và quan sát giọt hòa vào lớp nào, kết hợp dữ liệu khối lượng riêng.'],
    correctAnswer: 'D', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-extraction-funnel'], subTypeId: 'chem11-org-st-extraction-funnel', practiceRole: 'mastery_holdout', representationType: 'diagram',
    misconceptionId: 'chem11-mis-extraction-layer-color-only', isMasteryHoldout: true, estimatedSeconds: 70
  },
  {
    id: 'chem11-org-q057', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt37',
    content: 'Với cùng tổng thể tích dung môi, phương án thường thu hồi chất tan tốt hơn là',
    responseType: 'single_choice',
    options: ['A. chia dung môi thành nhiều phần nhỏ và chiết lặp lại.', 'B. dùng một lần duy nhất luôn luôn.', 'C. không lắc.', 'D. dùng dung môi trộn lẫn hoàn toàn.'],
    correctAnswer: 'A', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-extraction-efficiency-safety'], subTypeId: 'chem11-org-st-extraction-efficiency', practiceRole: 'guided', representationType: 'table', estimatedSeconds: 50
  },
  {
    id: 'chem11-org-q058', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt37',
    content: 'Khi xuất hiện nhũ tương bền sau khi lắc quá mạnh, lựa chọn ban đầu phù hợp là',
    responseType: 'single_choice',
    options: ['A. đun phễu kín.', 'B. để yên, thao tác nhẹ hơn và áp dụng biện pháp phá nhũ phù hợp theo quy trình.', 'C. xả toàn bộ vào cống.', 'D. lắc mạnh hơn vô hạn.'],
    correctAnswer: 'B', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-extraction-efficiency-safety'], subTypeId: 'chem11-org-st-extraction-efficiency', practiceRole: 'far_transfer', representationType: 'experiment', estimatedSeconds: 65
  },
  {
    id: 'chem11-org-q059', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt37',
    content: 'Vì sao không được đun nóng phễu chiết đang nút kín?',
    responseType: 'single_choice',
    options: ['A. Vì chất tan mất màu.', 'B. Vì hai lớp sẽ có cùng khối lượng riêng.', 'C. Áp suất hơi có thể tăng, gây bật nút hoặc tai nạn.', 'D. Vì mọi dung môi đều đóng băng.'],
    correctAnswer: 'C', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-extraction-efficiency-safety'], subTypeId: 'chem11-org-st-extraction-efficiency', practiceRole: 'misconception_check', representationType: 'experiment',
    misconceptionId: 'chem11-mis-extraction-heat-sealed', estimatedSeconds: 60
  },
  {
    id: 'chem11-org-q060', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt37',
    content: 'Dữ liệu: một lần chiết 30 mL thu 75% chất; ba lần chiết 10 mL thu tổng 94%. Kết luận đúng nhất là',
    responseType: 'single_choice',
    options: ['A. Một lần luôn tốt hơn.', 'B. Số liệu không liên quan phương pháp.', 'C. Phải dùng dung môi trộn lẫn với nước.', 'D. Với hệ này, chia dung môi để chiết lặp lại tăng thu hồi nhờ thiết lập phân bố nhiều lần.'],
    correctAnswer: 'D', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-extraction-efficiency-safety'], subTypeId: 'chem11-org-st-extraction-efficiency', practiceRole: 'mastery_holdout', representationType: 'table',
    misconceptionId: 'chem11-mis-extraction-one-large-best', isMasteryHoldout: true, estimatedSeconds: 75
  },
  {
    id: 'chem11-org-q061', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt38',
    content: 'Kết tinh tinh chế thường dựa trên',
    responseType: 'single_choice',
    options: ['A. sự thay đổi độ tan của chất theo nhiệt độ và sự khác biệt độ tan với tạp chất.', 'B. chỉ màu sắc.', 'C. chỉ khối lượng riêng.', 'D. mọi chất có cùng độ tan.'],
    correctAnswer: 'A', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-crystallization-principle'], subTypeId: 'chem11-org-st-crystallization-principle', practiceRole: 'guided', representationType: 'text', estimatedSeconds: 45
  },
  {
    id: 'chem11-org-q062', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt38',
    content: 'Trình tự kết tinh hợp lí là',
    responseType: 'single_choice',
    options: ['A. Làm nguội trước rồi thêm chất rắn.', 'B. Hòa tan nóng bằng ít dung môi → lọc nóng nếu cần → làm nguội → lọc, rửa và làm khô tinh thể.', 'C. Cô cạn cháy khét.', 'D. Trộn thêm mọi tạp chất.'],
    correctAnswer: 'B', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-crystallization-procedure'], subTypeId: 'chem11-org-st-crystallization-principle', practiceRole: 'near_transfer', representationType: 'experiment', estimatedSeconds: 55
  },
  {
    id: 'chem11-org-q063', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt38',
    content: 'Dung môi kết tinh phù hợp thường là dung môi mà chất cần tinh chế',
    responseType: 'single_choice',
    options: ['A. không tan cả nóng lẫn lạnh.', 'B. tan rất tốt cả nóng lẫn lạnh.', 'C. tan tốt khi nóng nhưng ít tan khi lạnh.', 'D. phản ứng phá hủy chất.'],
    correctAnswer: 'C', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-crystallization-principle'], subTypeId: 'chem11-org-st-crystallization-principle', practiceRole: 'near_transfer', representationType: 'table', estimatedSeconds: 45
  },
  {
    id: 'chem11-org-q064', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt38',
    content: 'Vì sao không nên đồng nhất kết tinh tinh chế với cô cạn hoàn toàn?',
    responseType: 'single_choice',
    options: ['A. Vì kết tinh không dùng dung môi.', 'B. Vì chất không tan khi nóng.', 'C. Vì cô cạn luôn tạo khí.', 'D. Cô cạn có thể giữ cả tạp chất; kết tinh chọn lọc để tạp tan ở lại dung dịch mẹ.'],
    correctAnswer: 'D', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-crystallization-principle'], subTypeId: 'chem11-org-st-crystallization-principle', practiceRole: 'mastery_holdout', representationType: 'text',
    misconceptionId: 'chem11-mis-crystallization-evaporate-dry', isMasteryHoldout: true, estimatedSeconds: 60
  },
  {
    id: 'chem11-org-q065', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt38',
    content: 'Độ tan của X là 40 g/100 g nước ở 80 °C và 10 g/100 g nước ở 20 °C. Làm nguội dung dịch bão hòa chứa 100 g nước từ 80 xuống 20 °C, lượng X kết tinh lí thuyết là',
    responseType: 'single_choice',
    options: ['A. 30 g.', 'B. 10 g.', 'C. 40 g.', 'D. 50 g.'],
    correctAnswer: 'A', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-crystallization-procedure'], subTypeId: 'chem11-org-st-crystallization-data', practiceRole: 'guided', representationType: 'table', estimatedSeconds: 65
  },
  {
    id: 'chem11-org-q066', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt38',
    content: 'Vẫn dữ liệu trên nhưng dùng 200 g nước, lượng X kết tinh lí thuyết là',
    responseType: 'single_choice',
    options: ['A. 30 g.', 'B. 60 g.', 'C. 20 g.', 'D. 80 g.'],
    correctAnswer: 'B', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-crystallization-procedure'], subTypeId: 'chem11-org-st-crystallization-data', practiceRole: 'near_transfer', representationType: 'table', estimatedSeconds: 70
  },
  {
    id: 'chem11-org-q067', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt38',
    content: 'Nhận xét đúng về kết tinh tinh chế là',
    responseType: 'single_choice',
    options: ['A. Luôn thu hồi 100% chất.', 'B. Luôn loại 100% tạp.', 'C. Có đánh đổi: một phần chất còn trong dung dịch mẹ, còn tinh thể có thể giữ một phần tạp.', 'D. Không cần rửa tinh thể.'],
    correctAnswer: 'C', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-crystallization-procedure'], subTypeId: 'chem11-org-st-crystallization-data', practiceRole: 'misconception_check', representationType: 'text',
    misconceptionId: 'chem11-mis-crystal-pure-perfect-yield', estimatedSeconds: 55
  },
  {
    id: 'chem11-org-q068', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt38',
    content: 'Bảng so sánh: làm nguội chậm tạo tinh thể lớn, độ tinh khiết 98%; làm lạnh đột ngột tạo tinh thể rất nhỏ, độ tinh khiết 91%. Kết luận phù hợp là',
    responseType: 'single_choice',
    options: ['A. Làm lạnh nhanh luôn tinh khiết hơn.', 'B. Kích thước không liên quan giữ tạp.', 'C. Hai cách chắc chắn giống nhau.', 'D. Với hệ này, làm nguội có kiểm soát giảm giữ tạp và cho tinh thể tinh khiết hơn.'],
    correctAnswer: 'D', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-crystallization-procedure'], subTypeId: 'chem11-org-st-crystallization-data', practiceRole: 'mastery_holdout', representationType: 'table',
    misconceptionId: 'chem11-mis-crystallization-cool-fast-always', isMasteryHoldout: true, estimatedSeconds: 70
  },
  {
    id: 'chem11-org-q069', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt38',
    content: 'Để thu dung môi dễ bay hơi khỏi dung dịch lỏng đồng nhất, phương pháp phù hợp nhất trong ba phương pháp là',
    responseType: 'single_choice',
    options: ['A. chưng cất.', 'B. chiết lỏng–lỏng.', 'C. kết tinh dung môi.', 'D. lọc giấy đơn thuần.'],
    correctAnswer: 'A', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-separation-method-selection'], subTypeId: 'chem11-org-st-method-selection', practiceRole: 'guided', representationType: 'text', estimatedSeconds: 45
  },
  {
    id: 'chem11-org-q070', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt38',
    content: 'Để chuyển iodine từ nước sang một dung môi hữu cơ không trộn lẫn với nước và hòa tan iodine tốt hơn, nên dùng',
    responseType: 'single_choice',
    options: ['A. kết tinh.', 'B. chiết lỏng–lỏng.', 'C. chưng cất chất rắn.', 'D. lọc chân không trực tiếp.'],
    correctAnswer: 'B', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-separation-method-selection'], subTypeId: 'chem11-org-st-method-selection', practiceRole: 'near_transfer', representationType: 'experiment', estimatedSeconds: 55
  },
  {
    id: 'chem11-org-q071', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt38',
    content: 'Để tinh chế một chất rắn có độ tan tăng mạnh theo nhiệt độ khỏi tạp chất có hành vi độ tan khác, nên ưu tiên',
    responseType: 'single_choice',
    options: ['A. chiết bằng hai chất rắn.', 'B. chưng cất chất rắn không bay hơi.', 'C. kết tinh lại.', 'D. chỉ sấy nóng.'],
    correctAnswer: 'C', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-separation-method-selection'], subTypeId: 'chem11-org-st-method-selection', practiceRole: 'far_transfer', representationType: 'table', estimatedSeconds: 55
  },
  {
    id: 'chem11-org-q072', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt38',
    content: 'Ghép tình huống–phương pháp nào đúng nhất?',
    responseType: 'single_choice',
    options: ['A. Hai chất lỏng không trộn lẫn → kết tinh.', 'B. Chất rắn tan tốt cả nóng và lạnh → luôn kết tinh dễ.', 'C. Hai chất lỏng sôi gần nhau → một lần chưng cất thường tách hoàn toàn.', 'D. Hỗn hợp lỏng đồng nhất khác nhiệt độ sôi → chưng cất; chất phân bố giữa hai pha → chiết; chất rắn khác độ tan nóng/lạnh → kết tinh.'],
    correctAnswer: 'D', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-separation-method-selection'], subTypeId: 'chem11-org-st-method-selection', practiceRole: 'mastery_holdout', representationType: 'table',
    misconceptionId: 'chem11-mis-one-method-all-mixtures', isMasteryHoldout: true, estimatedSeconds: 85
  },
  {
    id: 'chem11-org-q073', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt39',
    content: 'Công thức phân tử của hợp chất hữu cơ cho biết',
    responseType: 'single_choice',
    options: ['A. loại nguyên tố và số nguyên tử mỗi nguyên tố trong một phân tử.', 'B. duy nhất thứ tự liên kết giữa mọi nguyên tử.', 'C. nhiệt độ sôi của chất.', 'D. số mol chất trong mọi mẫu.'],
    correctAnswer: 'A', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-molecular-formula-meaning'], subTypeId: 'chem11-org-st-formula-meaning', practiceRole: 'guided', representationType: 'text', estimatedSeconds: 40
  },
  {
    id: 'chem11-org-q074', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt39',
    content: 'Công thức đơn giản nhất của C₂H₄O₂ là',
    responseType: 'single_choice',
    options: ['A. C₂H₄O₂.', 'B. CH₂O.', 'C. CHO.', 'D. C₂H₂O.'],
    correctAnswer: 'B', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-empirical-formula-meaning'], subTypeId: 'chem11-org-st-formula-meaning', practiceRole: 'near_transfer', representationType: 'equation', estimatedSeconds: 45
  },
  {
    id: 'chem11-org-q075', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt39',
    content: 'Nhận xét nào đúng về hai chất có cùng công thức phân tử?',
    responseType: 'single_choice',
    options: ['A. Chắc chắn cùng cấu tạo.', 'B. Chắc chắn cùng mọi tính chất.', 'C. Có cùng thành phần phân tử nhưng có thể khác cấu tạo.', 'D. Chắc chắn là cùng một chất.'],
    correctAnswer: 'C', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-molecular-formula-meaning'], subTypeId: 'chem11-org-st-formula-meaning', practiceRole: 'misconception_check', representationType: 'text',
    misconceptionId: 'chem11-mis-molecular-formula-structure', estimatedSeconds: 45
  },
  {
    id: 'chem11-org-q076', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt39',
    content: 'Công thức đơn giản nhất của glucose C₆H₁₂O₆ là',
    responseType: 'single_choice',
    options: ['A. C₆H₁₂O₆.', 'B. C₃H₆O₃.', 'C. C₂H₄O₂.', 'D. CH₂O.'],
    correctAnswer: 'D', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-empirical-formula-meaning'], subTypeId: 'chem11-org-st-formula-meaning', practiceRole: 'mastery_holdout', representationType: 'equation',
    misconceptionId: 'chem11-mis-empirical-not-reduced', isMasteryHoldout: true, estimatedSeconds: 50
  },
  {
    id: 'chem11-org-q077', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt39',
    content: 'Một chất có công thức đơn giản nhất CH₂O và phân tử khối 60. Công thức phân tử là',
    responseType: 'single_choice',
    options: ['A. C₂H₄O₂.', 'B. CH₂O.', 'C. C₃H₆O₃.', 'D. C₂H₂O₂.'],
    correctAnswer: 'A', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-formula-multiple-relation'], subTypeId: 'chem11-org-st-formula-multiple', practiceRole: 'guided', representationType: 'equation', estimatedSeconds: 60
  },
  {
    id: 'chem11-org-q078', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt39',
    content: 'Chất có công thức đơn giản nhất CH và phân tử khối 78. Công thức phân tử của chất là',
    responseType: 'single_choice',
    options: ['A. C₂H₂.', 'B. C₆H₆.', 'C. C₇H₇.', 'D. C₃H₃.'],
    correctAnswer: 'B', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-formula-multiple-relation'], subTypeId: 'chem11-org-st-formula-multiple', practiceRole: 'near_transfer', representationType: 'equation', estimatedSeconds: 60
  },
  {
    id: 'chem11-org-q079', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt39',
    content: 'Nếu M chia cho khối lượng công thức đơn giản nhất cho kết quả 2,50 thì kết luận phù hợp là',
    responseType: 'single_choice',
    options: ['A. Chọn n = 2,50.', 'B. Làm tròn tùy ý thành 3.', 'C. Dữ kiện hoặc công thức đơn giản nhất chưa phù hợp vì n phải là số nguyên dương.', 'D. Luôn chọn n = 1.'],
    correctAnswer: 'C', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-formula-multiple-relation'], subTypeId: 'chem11-org-st-formula-multiple', practiceRole: 'misconception_check', representationType: 'text',
    misconceptionId: 'chem11-mis-formula-n-any', estimatedSeconds: 55
  },
  {
    id: 'chem11-org-q080', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt39',
    content: 'Bảng dữ kiện cho CTĐGN = CH₂, M = 56 g/mol. Công thức phân tử phù hợp là',
    responseType: 'single_choice',
    options: ['A. CH₂.', 'B. C₂H₄.', 'C. C₃H₆.', 'D. C₄H₈.'],
    correctAnswer: 'D', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-formula-multiple-relation'], subTypeId: 'chem11-org-st-formula-multiple', practiceRole: 'mastery_holdout', representationType: 'table',
    misconceptionId: 'chem11-mis-molar-mass-ignore', isMasteryHoldout: true, estimatedSeconds: 65
  },
  {
    id: 'chem11-org-q081', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt39',
    content: 'Phần trăm khối lượng carbon trong CH₄ là',
    responseType: 'single_choice',
    options: ['A. 75,0%.', 'B. 25,0%.', 'C. 12,0%.', 'D. 80,0%.'],
    correctAnswer: 'A', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-element-percent-from-formula'], subTypeId: 'chem11-org-st-formula-percent', practiceRole: 'guided', representationType: 'equation', estimatedSeconds: 60
  },
  {
    id: 'chem11-org-q082', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt39',
    content: 'Phần trăm khối lượng oxygen trong C₂H₆O (M = 46) gần nhất là',
    responseType: 'single_choice',
    options: ['A. 26,1%.', 'B. 34,8%.', 'C. 52,2%.', 'D. 13,0%.'],
    correctAnswer: 'B', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-element-percent-from-formula'], subTypeId: 'chem11-org-st-formula-percent', practiceRole: 'near_transfer', representationType: 'equation', estimatedSeconds: 70
  },
  {
    id: 'chem11-org-q083', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt39',
    content: 'CH₂O và C₆H₁₂O₆ có nhận xét nào đúng về phần trăm khối lượng nguyên tố?',
    responseType: 'single_choice',
    options: ['A. Khác hoàn toàn vì phân tử khối khác.', 'B. Chỉ %H bằng nhau.', 'C. Bằng nhau vì các chỉ số là cùng một bội của tỉ lệ C:H:O.', 'D. Không thể so sánh.'],
    correctAnswer: 'C', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-element-percent-from-formula', 'chem11-org-formula-multiple-relation'], subTypeId: 'chem11-org-st-formula-percent', practiceRole: 'far_transfer', representationType: 'table', estimatedSeconds: 75
  },
  {
    id: 'chem11-org-q084', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt39',
    content: 'Một ứng viên có CTPT C₃H₆O₃, M = 90. Dữ kiện CTĐGN = CH₂O và M = 90 được kiểm tra như thế nào?',
    responseType: 'single_choice',
    options: ['A. Sai vì CTPT phải trùng CTĐGN.', 'B. Sai vì n = 2.', 'C. Không kiểm tra được.', 'D. Đúng vì M(CH₂O) = 30, n = 3 và (CH₂O)₃ = C₃H₆O₃.'],
    correctAnswer: 'D', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-formula-multiple-relation'], subTypeId: 'chem11-org-st-formula-percent', practiceRole: 'mastery_holdout', representationType: 'table',
    misconceptionId: 'chem11-mis-formula-no-validation', isMasteryHoldout: true, estimatedSeconds: 80
  },
  {
    id: 'chem11-org-q085', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt40',
    content: 'Hợp chất chứa 40,0% C; 6,7% H; 53,3% O. Công thức đơn giản nhất là',
    responseType: 'single_choice',
    options: ['A. CH₂O.', 'B. CHO.', 'C. C₂H₄O.', 'D. C₂H₂O₂.'],
    correctAnswer: 'A', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-empirical-from-percent'], subTypeId: 'chem11-org-st-empirical-percent', practiceRole: 'guided', representationType: 'table', estimatedSeconds: 75
  },
  {
    id: 'chem11-org-q086', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt40',
    content: 'Hợp chất chỉ chứa C và H, gồm 80,0% C và 20,0% H. Công thức đơn giản nhất là',
    responseType: 'single_choice',
    options: ['A. CH₂.', 'B. CH₃.', 'C. C₂H₃.', 'D. C₃H.'],
    correctAnswer: 'B', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-empirical-from-percent'], subTypeId: 'chem11-org-st-empirical-percent', practiceRole: 'near_transfer', representationType: 'text', estimatedSeconds: 70
  },
  {
    id: 'chem11-org-q087', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt40',
    content: 'Một chất có 52,2% C; 13,0% H; 34,8% O. Công thức đơn giản nhất phù hợp là',
    responseType: 'single_choice',
    options: ['A. CH₃O.', 'B. CH₂O.', 'C. C₂H₆O.', 'D. C₂H₄O₂.'],
    correctAnswer: 'C', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-empirical-from-percent'], subTypeId: 'chem11-org-st-empirical-percent', practiceRole: 'misconception_check', representationType: 'table',
    misconceptionId: 'chem11-mis-percent-direct-ratio', estimatedSeconds: 80
  },
  {
    id: 'chem11-org-q088', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt40',
    content: 'Chất chỉ chứa C, H, O có 54,5% C và 9,1% H. Công thức đơn giản nhất là',
    responseType: 'single_choice',
    options: ['A. CH₂O.', 'B. C₃H₆O.', 'C. C₂H₆O.', 'D. C₂H₄O.'],
    correctAnswer: 'D', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-empirical-from-percent'], subTypeId: 'chem11-org-st-empirical-percent', practiceRole: 'mastery_holdout', representationType: 'table',
    misconceptionId: 'chem11-mis-percent-not-total', isMasteryHoldout: true, estimatedSeconds: 90
  },
  {
    id: 'chem11-org-q089', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt40',
    content: 'Một mẫu chứa 2,4 g C; 0,4 g H; 3,2 g O. Công thức đơn giản nhất là',
    responseType: 'single_choice',
    options: ['A. CH₂O.', 'B. C₂H₄O.', 'C. CHO.', 'D. C₂H₂O.'],
    correctAnswer: 'A', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-empirical-from-mass'], subTypeId: 'chem11-org-st-empirical-mass', practiceRole: 'guided', representationType: 'table', estimatedSeconds: 75
  },
  {
    id: 'chem11-org-q090', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt40',
    content: 'Một mẫu chứa 3,6 g C; 0,6 g H; 1,6 g O. Công thức đơn giản nhất là',
    responseType: 'single_choice',
    options: ['A. C₂H₄O.', 'B. C₃H₆O.', 'C. C₃H₃O.', 'D. CH₂O.'],
    correctAnswer: 'B', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-empirical-from-mass'], subTypeId: 'chem11-org-st-empirical-mass', practiceRole: 'near_transfer', representationType: 'table', estimatedSeconds: 80
  },
  {
    id: 'chem11-org-q091', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt40',
    content: 'Một mẫu chứa 12 g C, 1 g H và 16 g O. Công thức đơn giản nhất là',
    responseType: 'single_choice',
    options: ['A. C₁₂HO₁₆.', 'B. CH₂O.', 'C. CHO.', 'D. C₂H₂O₂.'],
    correctAnswer: 'C', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-empirical-from-mass'], subTypeId: 'chem11-org-st-empirical-mass', practiceRole: 'misconception_check', representationType: 'text',
    misconceptionId: 'chem11-mis-mass-as-subscript', estimatedSeconds: 65
  },
  {
    id: 'chem11-org-q092', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt40',
    content: 'Mẫu X chứa 4,8 g C; 0,8 g H; 6,4 g O. Công thức đơn giản nhất của X là',
    responseType: 'single_choice',
    options: ['A. C₂H₄O₂.', 'B. C₂H₄O.', 'C. CHO.', 'D. CH₂O.'],
    correctAnswer: 'D', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-empirical-from-mass'], subTypeId: 'chem11-org-st-empirical-mass', practiceRole: 'mastery_holdout', representationType: 'table',
    misconceptionId: 'chem11-mis-empirical-not-reduced', isMasteryHoldout: true, estimatedSeconds: 80
  },
  {
    id: 'chem11-org-q093', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt40',
    content: 'Sau khi chia cho số mol nhỏ nhất, tỉ lệ C:H:O = 1:1,5:1. Bộ chỉ số nguyên tối giản là',
    responseType: 'single_choice',
    options: ['A. 2:3:2.', 'B. 1:2:1.', 'C. 2:2:2.', 'D. 1:1:1.'],
    correctAnswer: 'A', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-empirical-from-percent', 'chem11-org-empirical-from-mass'], subTypeId: 'chem11-org-st-empirical-fractional-ratio', practiceRole: 'guided', representationType: 'equation', estimatedSeconds: 55
  },
  {
    id: 'chem11-org-q094', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt40',
    content: 'Tỉ lệ mol tương đối C:H:O = 1:1,333:0,667. Công thức đơn giản nhất gần đúng là',
    responseType: 'single_choice',
    options: ['A. CHO.', 'B. C₃H₄O₂.', 'C. C₂H₃O.', 'D. C₃H₃O₂.'],
    correctAnswer: 'B', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-empirical-from-percent'], subTypeId: 'chem11-org-st-empirical-fractional-ratio', practiceRole: 'near_transfer', representationType: 'equation', estimatedSeconds: 75
  },
  {
    id: 'chem11-org-q095', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt40',
    content: 'Tỉ lệ sau khi chia nhỏ nhất là C:H = 1:2,50. Cách xử lí đúng cho công thức đơn giản nhất là',
    responseType: 'single_choice',
    options: ['A. Làm tròn thành CH₃.', 'B. Giữ CH₂,₅.', 'C. Nhân cả hai tỉ lệ với 2 để được C₂H₅.', 'D. Chỉ nhân H với 2.'],
    correctAnswer: 'C', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-empirical-from-percent'], subTypeId: 'chem11-org-st-empirical-fractional-ratio', practiceRole: 'far_transfer', representationType: 'equation',
    misconceptionId: 'chem11-mis-ratio-round-early', estimatedSeconds: 70
  },
  {
    id: 'chem11-org-q096', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt40',
    content: 'Một phép tính cho tỉ lệ mol C:H:O = 2:4:2. Kết luận kiểm tra cuối cùng đúng là',
    responseType: 'single_choice',
    options: ['A. CTĐGN C₂H₄O₂ vì tỉ lệ đã nguyên.', 'B. CTĐGN C₂H₂O₂.', 'C. Không thể rút gọn.', 'D. Phải chia tiếp cho 2, CTĐGN là CH₂O.'],
    correctAnswer: 'D', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-empirical-from-percent', 'chem11-org-empirical-from-mass'], subTypeId: 'chem11-org-st-empirical-fractional-ratio', practiceRole: 'mastery_holdout', representationType: 'table',
    misconceptionId: 'chem11-mis-empirical-not-reduced', isMasteryHoldout: true, estimatedSeconds: 70
  },
  {
    id: 'chem11-org-q097', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt41',
    content: 'Đốt cháy X thu 4,4 g CO₂ và 1,8 g H₂O. Tỉ lệ mol nguyên tử C:H trong X là',
    responseType: 'single_choice',
    options: ['A. 1:2.', 'B. 1:1.', 'C. 2:1.', 'D. 1:4.'],
    correctAnswer: 'A', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-combustion-analysis-ch'], subTypeId: 'chem11-org-st-combustion-ch', practiceRole: 'guided', representationType: 'table', estimatedSeconds: 70
  },
  {
    id: 'chem11-org-q098', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt41',
    content: 'Đốt cháy X thu 8,8 g CO₂ và 5,4 g H₂O. Tỉ lệ mol nguyên tử C:H là',
    responseType: 'single_choice',
    options: ['A. 1:2.', 'B. 1:3.', 'C. 2:3.', 'D. 3:1.'],
    correctAnswer: 'B', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-combustion-analysis-ch'], subTypeId: 'chem11-org-st-combustion-ch', practiceRole: 'near_transfer', representationType: 'text', estimatedSeconds: 70
  },
  {
    id: 'chem11-org-q099', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt41',
    content: 'Nếu thu được 0,25 mol H₂O thì số mol nguyên tử H trong mẫu là',
    responseType: 'single_choice',
    options: ['A. 0,125 mol.', 'B. 0,25 mol.', 'C. 0,50 mol.', 'D. 1,00 mol.'],
    correctAnswer: 'C', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-combustion-analysis-ch'], subTypeId: 'chem11-org-st-combustion-ch', practiceRole: 'misconception_check', representationType: 'equation',
    misconceptionId: 'chem11-mis-combustion-h-from-water', estimatedSeconds: 45
  },
  {
    id: 'chem11-org-q100', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt41',
    content: 'Bảng sản phẩm cháy cho n(CO₂) = 0,20 mol và n(H₂O) = 0,30 mol. Tỉ lệ nguyên tử C:H là',
    responseType: 'single_choice',
    options: ['A. 2:3.', 'B. 1:1,5.', 'C. 2:6.', 'D. 1:3.'],
    correctAnswer: 'D', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-combustion-analysis-ch'], subTypeId: 'chem11-org-st-combustion-ch', practiceRole: 'mastery_holdout', representationType: 'table',
    misconceptionId: 'chem11-mis-combustion-h-from-water', isMasteryHoldout: true, estimatedSeconds: 60
  },
  {
    id: 'chem11-org-q101', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt41',
    content: 'Đốt cháy 3,0 g chất chỉ chứa C, H, O thu 4,4 g CO₂ và 1,8 g H₂O. Công thức đơn giản nhất là',
    responseType: 'single_choice',
    options: ['A. CH₂O.', 'B. CHO.', 'C. C₂H₄O.', 'D. C₂H₂O.'],
    correctAnswer: 'A', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-combustion-analysis-ch', 'chem11-org-oxygen-by-difference'], subTypeId: 'chem11-org-st-combustion-cho', practiceRole: 'guided', representationType: 'text', estimatedSeconds: 100
  },
  {
    id: 'chem11-org-q102', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt41',
    content: 'Đốt cháy 4,6 g chất chỉ chứa C, H, O thu 8,8 g CO₂ và 5,4 g H₂O. Công thức đơn giản nhất là',
    responseType: 'single_choice',
    options: ['A. CH₃O.', 'B. C₂H₆O.', 'C. C₂H₄O.', 'D. C₂H₆O₂.'],
    correctAnswer: 'B', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-combustion-analysis-ch', 'chem11-org-oxygen-by-difference'], subTypeId: 'chem11-org-st-combustion-cho', practiceRole: 'near_transfer', representationType: 'table', estimatedSeconds: 105
  },
  {
    id: 'chem11-org-q103', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt41',
    content: 'Khi đề chỉ nói X chứa C, H và có thể có N, O, sau khi tìm m(C), m(H), có thể luôn quy toàn bộ khối lượng còn lại cho O không?',
    responseType: 'single_choice',
    options: ['A. Có, trong mọi trường hợp.', 'B. Có, vì N không có khối lượng.', 'C. Không, cần biết thành phần nguyên tố hoặc dữ kiện bổ sung để loại trừ N và nguyên tố khác.', 'D. Có, nếu CO₂ nhiều hơn H₂O.'],
    correctAnswer: 'C', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-oxygen-by-difference'], subTypeId: 'chem11-org-st-combustion-cho', practiceRole: 'misconception_check', representationType: 'text',
    misconceptionId: 'chem11-mis-difference-with-unknown-elements', estimatedSeconds: 60
  },
  {
    id: 'chem11-org-q104', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt41',
    content: 'Đốt cháy 6,0 g chất chỉ chứa C, H, O thu 8,8 g CO₂ và 3,6 g H₂O. Công thức đơn giản nhất của chất là',
    responseType: 'single_choice',
    options: ['A. C₂H₄O.', 'B. CHO.', 'C. C₂H₄O₂.', 'D. CH₂O.'],
    correctAnswer: 'D', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-combustion-analysis-ch', 'chem11-org-oxygen-by-difference'], subTypeId: 'chem11-org-st-combustion-cho', practiceRole: 'mastery_holdout', representationType: 'table',
    misconceptionId: 'chem11-mis-oxygen-from-o2-product', isMasteryHoldout: true, estimatedSeconds: 110
  },
  {
    id: 'chem11-org-q105', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt41',
    content: 'Một chất có công thức đơn giản nhất CH₂O và phân tử khối 180. Công thức phân tử là',
    responseType: 'single_choice',
    options: ['A. C₆H₁₂O₆.', 'B. C₃H₆O₃.', 'C. C₂H₄O₂.', 'D. CH₂O.'],
    correctAnswer: 'A', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-molecular-formula-determination'], subTypeId: 'chem11-org-st-molecular-formula-final', practiceRole: 'guided', representationType: 'equation', estimatedSeconds: 65
  },
  {
    id: 'chem11-org-q106', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt41',
    content: 'Phân tích nguyên tố cho công thức đơn giản nhất CH₂; phân tử khối bằng 56. Công thức phân tử là',
    responseType: 'single_choice',
    options: ['A. C₂H₄.', 'B. C₄H₈.', 'C. C₃H₆.', 'D. C₅H₁₀.'],
    correctAnswer: 'B', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-molecular-formula-determination'], subTypeId: 'chem11-org-st-molecular-formula-final', practiceRole: 'near_transfer', representationType: 'equation', estimatedSeconds: 70
  },
  {
    id: 'chem11-org-q107', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt41',
    content: 'Một chất có CTĐGN C₂H₅O và M = 90. CTPT phù hợp là',
    responseType: 'single_choice',
    options: ['A. C₂H₅O.', 'B. C₃H₇O₂.', 'C. C₄H₁₀O₂.', 'D. C₆H₁₅O₃.'],
    correctAnswer: 'C', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-molecular-formula-determination'], subTypeId: 'chem11-org-st-molecular-formula-final', practiceRole: 'far_transfer', representationType: 'equation', estimatedSeconds: 75
  },
  {
    id: 'chem11-org-q108', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt41',
    content: 'Dữ kiện cho CTĐGN CH₂O và M = 100. Đánh giá đúng nhất là',
    responseType: 'single_choice',
    options: ['A. CTPT C₃H₆O₃.', 'B. CTPT C₄H₈O₄.', 'C. Làm tròn n = 3.', 'D. Dữ kiện không nhất quán vì 100/30 không phải số nguyên dương.'],
    correctAnswer: 'D', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-molecular-formula-determination'], subTypeId: 'chem11-org-st-molecular-formula-final', practiceRole: 'mastery_holdout', representationType: 'table',
    misconceptionId: 'chem11-mis-formula-no-validation', isMasteryHoldout: true, estimatedSeconds: 75
  },
  {
    id: 'chem11-org-q109', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt42',
    content: 'Theo thuyết cấu tạo hóa học, các nguyên tử trong phân tử hữu cơ liên kết', responseType: 'single_choice',
    options: ['A. đúng hóa trị và theo một trật tự xác định.', 'B. theo trật tự bất kì.', 'C. chỉ bằng liên kết ion.', 'D. không phụ thuộc hóa trị.'],
    correctAnswer: 'A', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-structure-theory-valence'], subTypeId: 'chem11-org-st-structure-theory', practiceRole: 'guided', representationType: 'text', estimatedSeconds: 40
  },
  {
    id: 'chem11-org-q110', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt42',
    content: 'Trong thuyết cấu tạo hóa học phổ thông, carbon trong hợp chất hữu cơ có hóa trị', responseType: 'single_choice',
    options: ['A. II.', 'B. IV.', 'C. I.', 'D. VI.'], correctAnswer: 'B', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-structure-theory-valence'], subTypeId: 'chem11-org-st-structure-theory', practiceRole: 'near_transfer', representationType: 'text', estimatedSeconds: 35
  },
  {
    id: 'chem11-org-q111', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt42',
    content: 'Nhận xét đúng về tính chất hợp chất hữu cơ là', responseType: 'single_choice',
    options: ['A. Chỉ phụ thuộc số carbon.', 'B. Chỉ phụ thuộc phân tử khối.', 'C. Phụ thuộc thành phần phân tử và cấu tạo hóa học.', 'D. Không phụ thuộc trật tự liên kết.'],
    correctAnswer: 'C', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-structure-property-relation'], subTypeId: 'chem11-org-st-structure-theory', practiceRole: 'misconception_check', representationType: 'text',
    misconceptionId: 'chem11-mis-same-formula-same-property', estimatedSeconds: 45
  },
  {
    id: 'chem11-org-q112', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt42',
    content: 'Phát biểu tổng hợp đúng nhất là', responseType: 'single_choice',
    options: ['A. Carbon chỉ tạo mạch thẳng.', 'B. Cùng CTPT luôn cùng chất.', 'C. CTCT không cần đúng hóa trị.', 'D. Carbon hóa trị IV, tạo nhiều kiểu mạch; trật tự liên kết ảnh hưởng tính chất.'],
    correctAnswer: 'D', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-structure-theory-valence','chem11-org-carbon-chain-bonding','chem11-org-structure-property-relation'], subTypeId: 'chem11-org-st-structure-theory',
    practiceRole: 'mastery_holdout', representationType: 'text', isMasteryHoldout: true, estimatedSeconds: 55
  },
  {
    id: 'chem11-org-q113', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt42',
    content: 'Công thức nào biểu diễn ethane và thỏa hóa trị thông thường?', responseType: 'single_choice',
    options: ['A. CH₃–CH₃.', 'B. CH₄–CH₄.', 'C. CH₅–CH.', 'D. CH₂–CH₂.'], correctAnswer: 'A', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-structure-theory-valence'], subTypeId: 'chem11-org-st-structure-validity', practiceRole: 'guided', representationType: 'diagram', estimatedSeconds: 55
  },
  {
    id: 'chem11-org-q114', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt42',
    content: 'Khả năng tạo khung đa dạng của carbon gồm', responseType: 'single_choice',
    options: ['A. chỉ mạch thẳng.', 'B. mạch thẳng, nhánh, vòng và liên kết đơn/bội.', 'C. chỉ vòng.', 'D. chỉ liên kết đơn.'],
    correctAnswer: 'B', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-carbon-chain-bonding'], subTypeId: 'chem11-org-st-structure-validity', practiceRole: 'near_transfer', representationType: 'diagram', estimatedSeconds: 45
  },
  {
    id: 'chem11-org-q115', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt42',
    content: 'Mảnh cấu tạo nào chắc chắn vi phạm hóa trị IV của carbon trung hòa?', responseType: 'single_choice',
    options: ['A. CH₄.', 'B. CH₃–CH₃.', 'C. CH₅–.', 'D. –CH₂–.'], correctAnswer: 'C', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-structure-theory-valence'], subTypeId: 'chem11-org-st-structure-validity', practiceRole: 'misconception_check', representationType: 'diagram',
    misconceptionId: 'chem11-mis-carbon-variable-valence', estimatedSeconds: 50
  },
  {
    id: 'chem11-org-q116', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt42',
    content: 'C₂H₆O có thể viết CH₃CH₂OH hoặc CH₃OCH₃. Kết luận đúng là', responseType: 'single_choice',
    options: ['A. Hai cách viết chắc chắn cùng chất.', 'B. Một công thức vi phạm hóa trị.', 'C. CTPT đã xác định duy nhất cấu tạo.', 'D. Hai trật tự nối khác nhau có thể tạo hai chất khác tính chất.'],
    correctAnswer: 'D', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-structure-property-relation'], subTypeId: 'chem11-org-st-structure-validity', practiceRole: 'mastery_holdout', representationType: 'equation',
    misconceptionId: 'chem11-mis-same-formula-same-property', isMasteryHoldout: true, estimatedSeconds: 65
  },
  {
    id: 'chem11-org-q117', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt42',
    content: 'CTCT thu gọn phù hợp của ethanol là', responseType: 'single_choice',
    options: ['A. CH₃CH₂OH.', 'B. C₂H₆O.', 'C. CH₃OCH₃.', 'D. C₂H₄O.'], correctAnswer: 'A', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-structural-formula-representations'], subTypeId: 'chem11-org-st-structure-representation', practiceRole: 'guided', representationType: 'equation', estimatedSeconds: 45
  },
  {
    id: 'chem11-org-q118', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt42',
    content: 'Khác biệt chính giữa C₂H₆O và CH₃CH₂OH là', responseType: 'single_choice',
    options: ['A. Công thức sau có nhiều nguyên tử hơn.', 'B. Công thức sau thể hiện cách nối các nhóm nguyên tử.', 'C. Công thức đầu là CTCT đầy đủ.', 'D. Hai công thức có CTPT khác nhau.'],
    correctAnswer: 'B', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-structural-formula-representations'], subTypeId: 'chem11-org-st-structure-representation', practiceRole: 'near_transfer', representationType: 'text', estimatedSeconds: 55
  },
  {
    id: 'chem11-org-q119', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt42',
    content: 'CTCT thu gọn CH₃OCH₃ cho biết oxygen', responseType: 'single_choice',
    options: ['A. không liên kết với carbon.', 'B. gắn với hydrogen.', 'C. nằm giữa hai nhóm CH₃.', 'D. là ion O²⁻.'], correctAnswer: 'C', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-structural-formula-representations'], subTypeId: 'chem11-org-st-structure-representation', practiceRole: 'far_transfer', representationType: 'diagram', estimatedSeconds: 50
  },
  {
    id: 'chem11-org-q120', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt42',
    content: 'Quy trình kiểm tra một CTCT thu gọn đúng nhất là', responseType: 'single_choice',
    options: ['A. Chỉ đếm carbon.', 'B. Chỉ nhìn phân tử khối.', 'C. Chấp nhận mọi cách ghép đúng CTPT.', 'D. Kiểm tra hóa trị, cách nối rồi đếm lại nguyên tử khớp CTPT.'],
    correctAnswer: 'D', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-structural-formula-representations'], subTypeId: 'chem11-org-st-structure-representation', practiceRole: 'mastery_holdout', representationType: 'diagram',
    isMasteryHoldout: true, estimatedSeconds: 65
  },
  {
    id: 'chem11-org-q121', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt43',
    content: 'Các chất đồng đẳng là các chất', responseType: 'single_choice',
    options: ['A. có cấu tạo và tính chất tương tự, hơn kém nhau một hay nhiều CH₂.', 'B. cùng CTPT.', 'C. cùng phân tử khối.', 'D. bất kì có carbon.'],
    correctAnswer: 'A', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-homolog-concept'], subTypeId: 'chem11-org-st-homolog-concept', practiceRole: 'guided', representationType: 'text', estimatedSeconds: 45
  },
  {
    id: 'chem11-org-q122', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt43',
    content: 'Cặp nào là hai chất đồng đẳng thuộc dãy alkane?', responseType: 'single_choice',
    options: ['A. CH₄ và C₂H₄.', 'B. CH₄ và C₂H₆.', 'C. C₂H₆ và C₂H₄.', 'D. CH₄ và CH₃OH.'],
    correctAnswer: 'B', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-homolog-concept'], subTypeId: 'chem11-org-st-homolog-concept', practiceRole: 'near_transfer', representationType: 'equation', estimatedSeconds: 45
  },
  {
    id: 'chem11-org-q123', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt43',
    content: 'Phát biểu “hai chất hơn kém nhau CH₂ luôn đồng đẳng” là', responseType: 'single_choice',
    options: ['A. luôn đúng.', 'B. đúng nếu cùng màu.', 'C. chưa đủ; còn phải tương tự kiểu cấu tạo/nhóm chức.', 'D. đúng nếu cùng trạng thái.'],
    correctAnswer: 'C', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-homolog-concept'], subTypeId: 'chem11-org-st-homolog-concept', practiceRole: 'misconception_check', representationType: 'text',
    misconceptionId: 'chem11-mis-homolog-any-ch2', estimatedSeconds: 50
  },
  {
    id: 'chem11-org-q124', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt43',
    content: 'Điểm phân biệt đúng giữa đồng đẳng và đồng phân là', responseType: 'single_choice',
    options: ['A. Cả hai cùng CTPT.', 'B. Cả hai khác nhóm chức.', 'C. Đồng đẳng cùng CTPT.', 'D. Đồng đẳng thường khác CTPT theo CH₂; đồng phân cùng CTPT nhưng khác cấu tạo.'],
    correctAnswer: 'D', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-homolog-concept','chem11-org-isomer-concept'], subTypeId: 'chem11-org-st-homolog-concept', practiceRole: 'mastery_holdout', representationType: 'table',
    misconceptionId: 'chem11-mis-homolog-isomer-confusion', isMasteryHoldout: true, estimatedSeconds: 55
  },
  {
    id: 'chem11-org-q125', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt43',
    content: 'Cặp đồng đẳng alcohol là', responseType: 'single_choice',
    options: ['A. CH₃OH và C₂H₅OH.', 'B. CH₃OH và CH₃OCH₃.', 'C. C₂H₅OH và CH₃CHO.', 'D. CH₃OH và CH₄.'],
    correctAnswer: 'A', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-homolog-identification'], subTypeId: 'chem11-org-st-homolog-pair', practiceRole: 'guided', representationType: 'equation', estimatedSeconds: 55
  },
  {
    id: 'chem11-org-q126', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt43',
    content: 'Cặp nào cùng dãy alkane?', responseType: 'single_choice',
    options: ['A. C₃H₆ và C₄H₈.', 'B. C₃H₈ và C₄H₁₀.', 'C. C₃H₈ và C₄H₈.', 'D. C₂H₄ và C₂H₆.'],
    correctAnswer: 'B', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-homolog-identification'], subTypeId: 'chem11-org-st-homolog-pair', practiceRole: 'near_transfer', representationType: 'table', estimatedSeconds: 50
  },
  {
    id: 'chem11-org-q127', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt43',
    content: 'CH₃CH₂OH và CH₃OCH₃ không phải đồng đẳng vì', responseType: 'single_choice',
    options: ['A. đều chứa oxygen.', 'B. cùng số carbon.', 'C. cùng CTPT nhưng khác kiểu nhóm chức/cấu tạo.', 'D. cùng phân tử khối.'],
    correctAnswer: 'C', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-homolog-identification'], subTypeId: 'chem11-org-st-homolog-pair', practiceRole: 'misconception_check', representationType: 'equation',
    misconceptionId: 'chem11-mis-homolog-functional-group-ignore', estimatedSeconds: 60
  },
  {
    id: 'chem11-org-q128', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt43',
    content: 'CH₃CHO và CH₃CH₂CHO có quan hệ', responseType: 'single_choice',
    options: ['A. đồng phân.', 'B. cùng chất.', 'C. không liên quan.', 'D. đồng đẳng vì cùng nhóm –CHO và hơn kém CH₂.'],
    correctAnswer: 'D', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-homolog-identification'], subTypeId: 'chem11-org-st-homolog-pair', practiceRole: 'mastery_holdout', representationType: 'equation',
    isMasteryHoldout: true, estimatedSeconds: 60
  },
  {
    id: 'chem11-org-q129', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt43',
    content: 'Thành viên kế tiếp sau C₃H₈ trong dãy alkane là', responseType: 'single_choice',
    options: ['A. C₄H₁₀.', 'B. C₄H₈.', 'C. C₃H₁₀.', 'D. C₅H₁₀.'], correctAnswer: 'A', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-homolog-identification'], subTypeId: 'chem11-org-st-homolog-sequence', practiceRole: 'guided', representationType: 'equation', estimatedSeconds: 45
  },
  {
    id: 'chem11-org-q130', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt43',
    content: 'Alcohol no đơn chức liền trước C₃H₇OH trong dãy đồng đẳng là', responseType: 'single_choice',
    options: ['A. CH₃OH.', 'B. C₂H₅OH.', 'C. C₃H₅OH.', 'D. C₄H₉OH.'], correctAnswer: 'B', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-homolog-identification'], subTypeId: 'chem11-org-st-homolog-sequence', practiceRole: 'near_transfer', representationType: 'equation', estimatedSeconds: 55
  },
  {
    id: 'chem11-org-q131', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt43',
    content: 'Hai chất cùng loại nhóm chức, phân tử khối hơn kém 14 đơn vị và cấu tạo tương tự. Dữ kiện này gợi ý chúng', responseType: 'single_choice',
    options: ['A. cùng CTPT.', 'B. là cùng chất.', 'C. có thể là hai chất đồng đẳng kế tiếp vì ΔM(CH₂)=14.', 'D. chắc chắn là đồng phân.'],
    correctAnswer: 'C', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-homolog-identification'], subTypeId: 'chem11-org-st-homolog-sequence', practiceRole: 'far_transfer', representationType: 'table', estimatedSeconds: 65
  },
  {
    id: 'chem11-org-q132', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt43',
    content: 'Dãy nào thể hiện các thành viên liên tiếp của cùng dãy alkane?', responseType: 'single_choice',
    options: ['A. CH₄, C₂H₄, C₃H₄.', 'B. CH₄, C₂H₆, C₃H₆.', 'C. C₂H₆, C₃H₆, C₄H₆.', 'D. CH₄, C₂H₆, C₃H₈.'],
    correctAnswer: 'D', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-homolog-identification'], subTypeId: 'chem11-org-st-homolog-sequence', practiceRole: 'mastery_holdout', representationType: 'table',
    isMasteryHoldout: true, estimatedSeconds: 60
  },
  {
    id: 'chem11-org-q133', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt44',
    content: 'Hai chất đồng phân là hai chất', responseType: 'single_choice',
    options: ['A. cùng CTPT nhưng khác cấu tạo.', 'B. hơn kém CH₂.', 'C. cùng CTCT.', 'D. khác CTPT nhưng cùng khối lượng.'],
    correctAnswer: 'A', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-isomer-concept'], subTypeId: 'chem11-org-st-isomer-concept', practiceRole: 'guided', representationType: 'text', estimatedSeconds: 40
  },
  {
    id: 'chem11-org-q134', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt44',
    content: 'CH₃CH₂OH và CH₃OCH₃ là', responseType: 'single_choice',
    options: ['A. đồng đẳng.', 'B. đồng phân.', 'C. cùng một chất.', 'D. khác CTPT.'], correctAnswer: 'B', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-isomer-concept'], subTypeId: 'chem11-org-st-isomer-concept', practiceRole: 'near_transfer', representationType: 'equation', estimatedSeconds: 45
  },
  {
    id: 'chem11-org-q135', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt44',
    content: 'Hai cách viết CH₃CH₂CH₃ và CH₃–CH₂–CH₃ là', responseType: 'single_choice',
    options: ['A. đồng phân.', 'B. đồng đẳng.', 'C. cùng một chất.', 'D. khác CTPT.'], correctAnswer: 'C', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-isomer-concept'], subTypeId: 'chem11-org-st-isomer-concept', practiceRole: 'misconception_check', representationType: 'diagram',
    misconceptionId: 'chem11-mis-isomer-same-drawing', estimatedSeconds: 45
  },
  {
    id: 'chem11-org-q136', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt44',
    content: 'Điều kiện kiểm tra đồng phân đúng nhất là', responseType: 'single_choice',
    options: ['A. Khác CTPT.', 'B. Hơn kém CH₂.', 'C. Khác cách vẽ là đủ.', 'D. Cùng CTPT, khác bảng liên kết và không chỉ là viết xoay/ngược.'],
    correctAnswer: 'D', difficulty: 'easy', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-isomer-concept','chem11-org-isomer-identification'], subTypeId: 'chem11-org-st-isomer-concept', practiceRole: 'mastery_holdout', representationType: 'text',
    isMasteryHoldout: true, estimatedSeconds: 55
  },
  {
    id: 'chem11-org-q137', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt44',
    content: 'Cặp đồng phân mạch carbon của C₄H₁₀ là', responseType: 'single_choice',
    options: ['A. CH₃CH₂CH₂CH₃ và (CH₃)₃CH.', 'B. C₄H₁₀ và C₅H₁₂.', 'C. CH₄ và C₂H₆.', 'D. C₂H₄ và C₂H₆.'],
    correctAnswer: 'A', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-isomer-identification'], subTypeId: 'chem11-org-st-isomer-identify', practiceRole: 'guided', representationType: 'diagram', estimatedSeconds: 55
  },
  {
    id: 'chem11-org-q138', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt44',
    content: 'CH₃CH₂CHO và CH₃COCH₃ có quan hệ', responseType: 'single_choice',
    options: ['A. đồng đẳng.', 'B. đồng phân vì cùng C₃H₆O nhưng khác cấu tạo.', 'C. cùng chất.', 'D. khác phân tử khối.'],
    correctAnswer: 'B', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-isomer-identification'], subTypeId: 'chem11-org-st-isomer-identify', practiceRole: 'near_transfer', representationType: 'equation', estimatedSeconds: 60
  },
  {
    id: 'chem11-org-q139', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt44',
    content: 'C₂H₆ và C₃H₈ không phải đồng phân vì', responseType: 'single_choice',
    options: ['A. đều là alkane.', 'B. cùng kiểu liên kết.', 'C. CTPT khác nhau; chúng là đồng đẳng.', 'D. đều chứa hydrogen.'],
    correctAnswer: 'C', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-isomer-identification'], subTypeId: 'chem11-org-st-isomer-identify', practiceRole: 'misconception_check', representationType: 'table',
    misconceptionId: 'chem11-mis-homolog-isomer-confusion', estimatedSeconds: 50
  },
  {
    id: 'chem11-org-q140', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt44',
    content: 'CH₃CH₂CH₂CH₃ và CH₃CH₂CH₂CH₃ viết theo chiều ngược của mạch là', responseType: 'single_choice',
    options: ['A. hai đồng phân.', 'B. hai đồng đẳng.', 'C. hai nhóm chức.', 'D. cùng một chất vì cách nối không đổi.'],
    correctAnswer: 'D', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-isomer-identification'], subTypeId: 'chem11-org-st-isomer-identify', practiceRole: 'mastery_holdout', representationType: 'diagram',
    misconceptionId: 'chem11-mis-isomer-orientation', isMasteryHoldout: true, estimatedSeconds: 55
  },
  {
    id: 'chem11-org-q141', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt44',
    content: 'Số đồng phân cấu tạo alkane của C₄H₁₀ là', responseType: 'single_choice',
    options: ['A. 2.', 'B. 3.', 'C. 4.', 'D. 1.'], correctAnswer: 'A', difficulty: 'medium', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-simple-isomer-enumeration'], subTypeId: 'chem11-org-st-isomer-enumerate', practiceRole: 'guided', representationType: 'diagram', estimatedSeconds: 65
  },
  {
    id: 'chem11-org-q142', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt44',
    content: 'Số khung carbon alkane khác nhau của C₅H₁₂ là', responseType: 'single_choice',
    options: ['A. 2.', 'B. 3.', 'C. 4.', 'D. 5.'], correctAnswer: 'B', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-simple-isomer-enumeration'], subTypeId: 'chem11-org-st-isomer-enumerate', practiceRole: 'near_transfer', representationType: 'diagram', estimatedSeconds: 85
  },
  {
    id: 'chem11-org-q143', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt44',
    content: 'Trong phạm vi cấu tạo mạch hở, C₂H₆O có bao nhiêu CTCT cơ bản?', responseType: 'single_choice',
    options: ['A. 1.', 'B. 3.', 'C. 2: CH₃CH₂OH và CH₃OCH₃.', 'D. 4.'], correctAnswer: 'C', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-simple-isomer-enumeration'], subTypeId: 'chem11-org-st-isomer-enumerate', practiceRole: 'far_transfer', representationType: 'equation', estimatedSeconds: 75
  },
  {
    id: 'chem11-org-q144', subjectId: 'chemistry', topicId: 'chem11-t3', questionTypeId: 'chem11-qt44',
    content: 'Quy trình viết đồng phân cấu tạo đáng tin cậy nhất là', responseType: 'single_choice',
    options: ['A. Viết ngẫu nhiên thật nhiều.', 'B. Chỉ xét mạch thẳng.', 'C. Tính hai hướng mạch là hai chất.', 'D. Liệt kê khung carbon có hệ thống, đặt nhóm/liên kết hợp lệ, kiểm tra hóa trị–CTPT và loại trùng.'],
    correctAnswer: 'D', difficulty: 'hard', sourceType: 'manual', validatorType: 'choice',
    outcomeIds: ['chem11-org-simple-isomer-enumeration'], subTypeId: 'chem11-org-st-isomer-enumerate', practiceRole: 'mastery_holdout', representationType: 'text',
    misconceptionId: 'chem11-mis-isomer-double-count', isMasteryHoldout: true, estimatedSeconds: 75
  }
];
