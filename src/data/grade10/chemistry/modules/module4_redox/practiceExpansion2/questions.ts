import type { PracticeRole, Question, QuestionRepresentationType } from '@/types';

type Difficulty = Question['difficulty'];

const choice = (
  id: string, questionTypeId: string, subTypeId: string, content: string,
  options: string[], correctAnswer: string, difficulty: Difficulty,
  practiceRole: PracticeRole, representationType: QuestionRepresentationType
): Question => ({ id, subjectId: 'chemistry', topicId: 'chem10-t4', questionTypeId, subTypeId, content, responseType: 'single_choice', options, correctAnswer, acceptedAnswers: [correctAnswer, correctAnswer.toLowerCase()], validatorType: 'choice', difficulty, sourceType: 'manual', practiceRole, representationType });

const shortAnswer = (
  id: string, questionTypeId: string, subTypeId: string, content: string,
  correctAnswer: string, acceptedAnswers: string[], difficulty: Difficulty,
  practiceRole: PracticeRole, representationType: QuestionRepresentationType
): Question => ({ id, subjectId: 'chemistry', topicId: 'chem10-t4', questionTypeId, subTypeId, content, responseType: 'short_answer', correctAnswer, acceptedAnswers, validatorType: 'exact', difficulty, sourceType: 'manual', practiceRole, representationType });

export const m4Expansion2Questions: Question[] = [
  choice('chem10-m4-x2-001', 'chem10-qt18', 'chem10-qt18-st1', 'Số oxi hóa của Na trong đơn chất sodium là', ['A. −1.', 'B. 0.', 'C. +1.', 'D. +2.'], 'B', 'easy', 'guided', 'equation'),
  choice('chem10-m4-x2-002', 'chem10-qt18', 'chem10-qt18-st1', 'Trong phân tử $O_2$, số oxi hóa của mỗi nguyên tử O bằng', ['A. −2.', 'B. −1.', 'C. 0.', 'D. +2.'], 'C', 'easy', 'misconception_check', 'equation'),
  choice('chem10-m4-x2-003', 'chem10-qt18', 'chem10-qt18-st1', 'Trong đơn chất $S_8$, số oxi hóa của sulfur là', ['A. −2.', 'B. 0.', 'C. +4.', 'D. +6.'], 'B', 'medium', 'retention', 'equation'),
  shortAnswer('chem10-m4-x2-004', 'chem10-qt18', 'chem10-qt18-st1', 'Số oxi hóa của Fe trong ion đơn nguyên tử $Fe^{3+}$ là bao nhiêu?', '+3', ['+3', '3+', '3'], 'medium', 'representation_switch', 'equation'),
  shortAnswer('chem10-m4-x2-005', 'chem10-qt18', 'chem10-qt18-st2', 'Xác định số oxi hóa của C trong $CO_2$.', '+4', ['+4', '4+', '4'], 'medium', 'near_transfer', 'equation'),
  shortAnswer('chem10-m4-x2-006', 'chem10-qt18', 'chem10-qt18-st3', 'Xác định số oxi hóa của S trong ion $SO_4^{2-}$.', '+6', ['+6', '6+', '6'], 'hard', 'far_transfer', 'equation'),
  shortAnswer('chem10-m4-x2-007', 'chem10-qt18', 'chem10-qt18-st4', 'Trong $OF_2$, số oxi hóa của oxygen bằng bao nhiêu?', '+2', ['+2', '2+', '2'], 'hard', 'misconception_check', 'equation'),
  shortAnswer('chem10-m4-x2-008', 'chem10-qt18', 'chem10-qt18-st4', 'Trong calcium hydride $CaH_2$, số oxi hóa của hydrogen bằng bao nhiêu?', '-1', ['-1', '−1', '1-'], 'hard', 'retention', 'equation'),

  choice('chem10-m4-x2-009', 'chem10-qt19', 'chem10-qt19-st1', 'Quá trình $Fe^{2+}\\rightarrow Fe^{3+}+e$ là', ['A. sự oxi hóa.', 'B. sự khử.', 'C. sự trung hòa.', 'D. không phải phản ứng oxi hóa–khử.'], 'A', 'easy', 'guided', 'equation'),
  choice('chem10-m4-x2-010', 'chem10-qt19', 'chem10-qt19-st1', 'Trong một phản ứng oxi hóa–khử, sự oxi hóa và sự khử', ['A. luôn xảy ra đồng thời.', 'B. có thể xảy ra hoàn toàn riêng biệt.', 'C. đều là quá trình nhận electron.', 'D. không làm đổi số oxi hóa.'], 'A', 'medium', 'retention', 'text'),
  choice('chem10-m4-x2-011', 'chem10-qt19', 'chem10-qt19-st1', 'Phát biểu “oxi hóa luôn là phản ứng với oxygen” là', ['A. luôn đúng.', 'B. sai vì oxi hóa được nhận diện bằng nhường electron hoặc tăng số oxi hóa.', 'C. đúng với mọi phản ứng vô cơ.', 'D. sai vì oxi hóa là nhận electron.'], 'B', 'hard', 'misconception_check', 'text'),
  choice('chem10-m4-x2-012', 'chem10-qt19', 'chem10-qt19-st2', 'Bán phản ứng oxi hóa đúng của ion iodide thành iodine là', ['A. $2I^-+2e\\rightarrow I_2$.', 'B. $2I^-\\rightarrow I_2+2e$.', 'C. $I_2\\rightarrow2I^-+e$.', 'D. $I^-\\rightarrow I^++2e$.'], 'B', 'medium', 'representation_switch', 'equation'),
  choice('chem10-m4-x2-013', 'chem10-qt19', 'chem10-qt19-st3', 'Bán phản ứng khử oxygen thành ion oxide là', ['A. $O_2\\rightarrow2O^{2-}+4e$.', 'B. $O_2+2e\\rightarrow2O^-$.', 'C. $O_2+4e\\rightarrow2O^{2-}$.', 'D. $2O^{2-}\\rightarrow O_2+4e$.'], 'C', 'hard', 'representation_switch', 'equation'),
  choice('chem10-m4-x2-014', 'chem10-qt19', 'chem10-qt19-st4', 'Ghép $Al\\rightarrow Al^{3+}+3e$ với $O_2+4e\\rightarrow2O^{2-}$. Số electron trao đổi nhỏ nhất là', ['A. 4.', 'B. 6.', 'C. 12.', 'D. 24.'], 'C', 'medium', 'near_transfer', 'equation'),
  choice('chem10-m4-x2-015', 'chem10-qt19', 'chem10-qt19-st4', 'Với $Zn\\rightarrow Zn^{2+}+2e$ và $Cu^{2+}+2e\\rightarrow Cu$, tỉ lệ số mol Zn bị oxi hóa : $Cu^{2+}$ bị khử là', ['A. 1:1.', 'B. 1:2.', 'C. 2:1.', 'D. 2:3.'], 'A', 'hard', 'far_transfer', 'equation'),
  shortAnswer('chem10-m4-x2-016', 'chem10-qt19', 'chem10-qt19-st4', 'Mỗi N chuyển từ số oxi hóa −3 lên +5 nhường bao nhiêu electron?', '8', ['8', '8e', '8 e'], 'hard', 'retention', 'equation'),

  choice('chem10-m4-x2-017', 'chem10-qt20', 'chem10-qt20-st1', 'Trong $CuO+H_2\\rightarrow Cu+H_2O$, chất oxi hóa là', ['A. $CuO$.', 'B. $H_2$.', 'C. Cu.', 'D. $H_2O$.'], 'A', 'easy', 'guided', 'equation'),
  choice('chem10-m4-x2-018', 'chem10-qt20', 'chem10-qt20-st2', 'Trong $CuO+H_2\\rightarrow Cu+H_2O$, chất khử là', ['A. $CuO$.', 'B. $H_2$.', 'C. Cu.', 'D. $H_2O$.'], 'B', 'medium', 'near_transfer', 'equation'),
  choice('chem10-m4-x2-019', 'chem10-qt20', 'chem10-qt20-st2', 'Trong $2CuO+C\\rightarrow2Cu+CO_2$, chất khử là', ['A. $CuO$.', 'B. C.', 'C. Cu.', 'D. $CO_2$.'], 'B', 'hard', 'retention', 'equation'),
  choice('chem10-m4-x2-020', 'chem10-qt20', 'chem10-qt20-st3', 'Trong $Zn+CuSO_4\\rightarrow ZnSO_4+Cu$, mô tả đúng là', ['A. Zn là chất khử, $Cu^{2+}$ là chất oxi hóa.', 'B. Zn là chất oxi hóa, $Cu^{2+}$ là chất khử.', 'C. $SO_4^{2-}$ vừa oxi hóa vừa khử.', 'D. Không có sự chuyển electron.'], 'A', 'medium', 'representation_switch', 'equation'),
  choice('chem10-m4-x2-021', 'chem10-qt20', 'chem10-qt20-st3', 'Chất oxi hóa là chất', ['A. nhận electron và bị khử.', 'B. nhường electron và bị khử.', 'C. nhận electron và bị oxi hóa.', 'D. không đổi số oxi hóa.'], 'A', 'hard', 'misconception_check', 'text'),
  choice('chem10-m4-x2-022', 'chem10-qt20', 'chem10-qt20-st4', 'Trong $Cl_2+2NaOH\\rightarrow NaCl+NaClO+H_2O$, chlorine', ['A. chỉ bị oxi hóa.', 'B. chỉ bị khử.', 'C. vừa bị oxi hóa vừa bị khử.', 'D. không đổi số oxi hóa.'], 'C', 'medium', 'near_transfer', 'equation'),
  choice('chem10-m4-x2-023', 'chem10-qt20', 'chem10-qt20-st4', 'Trong phản ứng phân hủy $2H_2O_2\\rightarrow2H_2O+O_2$, oxygen trong $H_2O_2$', ['A. chỉ tăng số oxi hóa.', 'B. chỉ giảm số oxi hóa.', 'C. vừa tăng từ −1 lên 0, vừa giảm từ −1 xuống −2.', 'D. luôn giữ −1.'], 'C', 'hard', 'far_transfer', 'equation'),
  choice('chem10-m4-x2-024', 'chem10-qt20', 'chem10-qt20-st4', 'Dấu hiệu nhận biết phản ứng tự oxi hóa–khử là', ['A. cùng một nguyên tố ở một số oxi hóa ban đầu vừa tăng vừa giảm số oxi hóa.', 'B. phản ứng luôn có oxygen.', 'C. chỉ có một sản phẩm.', 'D. không có electron trao đổi.'], 'A', 'hard', 'retention', 'text'),

  choice('chem10-m4-x2-025', 'chem10-qt21', 'chem10-qt21-st1', 'Hệ số tối giản của $O_2$ trong $Fe+O_2\\rightarrow Fe_2O_3$ là', ['A. 1.', 'B. 2.', 'C. 3.', 'D. 4.'], 'C', 'easy', 'guided', 'equation'),
  shortAnswer('chem10-m4-x2-026', 'chem10-qt21', 'chem10-qt21-st1', 'Cân bằng $Al+Cl_2\\rightarrow AlCl_3$. Hệ số tối giản của Al bằng bao nhiêu?', '2', ['2'], 'medium', 'near_transfer', 'equation'),
  choice('chem10-m4-x2-027', 'chem10-qt21', 'chem10-qt21-st2', 'Trong môi trường acid, bán phản ứng $MnO_4^-\\rightarrow Mn^{2+}$ nhận số electron là', ['A. 2.', 'B. 3.', 'C. 5.', 'D. 7.'], 'C', 'medium', 'representation_switch', 'equation'),
  choice('chem10-m4-x2-028', 'chem10-qt21', 'chem10-qt21-st2', 'Khi cân bằng phản ứng ion–electron trong môi trường acid, oxygen thường được cân bằng bằng', ['A. $H_2O$.', 'B. $O_2$.', 'C. $OH^-$.', 'D. electron.'], 'A', 'medium', 'retention', 'text'),
  choice('chem10-m4-x2-029', 'chem10-qt21', 'chem10-qt21-st2', 'Trong phương pháp ion–electron ở môi trường acid, sau khi cân bằng O bằng $H_2O$, hydrogen được cân bằng bằng', ['A. $H^+$.', 'B. $OH^-$.', 'C. $H_2$.', 'D. neutron.'], 'A', 'hard', 'misconception_check', 'text'),
  shortAnswer('chem10-m4-x2-030', 'chem10-qt21', 'chem10-qt21-st3', 'Cân bằng $aFe^{2+}+bCe^{4+}\\rightarrow aFe^{3+}+bCe^{3+}$. Tỉ lệ tối giản $a:b$ là bao nhiêu?', '1:1', ['1:1', '1/1', '1 : 1'], 'hard', 'near_transfer', 'equation'),
  choice('chem10-m4-x2-031', 'chem10-qt21', 'chem10-qt21-st3', 'Trong $aMnO_4^-+bFe^{2+}+cH^+\\rightarrow Mn^{2+}+Fe^{3+}+H_2O$, tỉ lệ tối giản $b:a$ là', ['A. 1:1.', 'B. 2:1.', 'C. 5:1.', 'D. 8:1.'], 'C', 'hard', 'far_transfer', 'equation'),
  choice('chem10-m4-x2-032', 'chem10-qt21', 'chem10-qt21-st4', 'Một lời giải cân bằng electron có tổng electron nhường là 6 nhưng tổng electron nhận là 3. Kết luận nào đúng?', ['A. Phương trình đã cân bằng.', 'B. Cần điều chỉnh hệ số để hai tổng electron bằng nhau.', 'C. Chỉ cần cân bằng oxygen.', 'D. Có thể bỏ qua electron vì không xuất hiện trong phương trình tổng.'], 'B', 'hard', 'misconception_check', 'text')
];
