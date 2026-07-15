import type { Solution } from '@/types';

const make = (questionId: string, explanation: string, finalAnswer: string, reviewSuggestions: string[]): Solution => ({ id: `solution-${questionId}`, questionId, recognition: 'Xác định vị trí tương đối rồi mới áp dụng quy luật tuần hoàn.', detailedSteps: [{ order: 1, title: 'Phân tích', explanation, result: finalAnswer }], finalAnswer, commonMistakes: ['Áp dụng mũi tên xu hướng mà không kiểm tra chu kì hoặc nhóm.'], reviewSuggestions });

export const m2AssessmentSolutionsFormB: Solution[] = [
  make('chem10-assess-m2-cp-b-q01', 'Các nguyên tố cùng nhóm A có cấu hình electron lớp ngoài cùng tương tự nên tính chất gần nhau.', 'B', ['Ô nguyên tố, chu kì và nhóm']),
  make('chem10-assess-m2-cp-b-q02', 'Số n lớn nhất là 3 và lớp ngoài cùng có 3 electron, nên X thuộc chu kì 3, nhóm IIIA.', 'B', ['Cấu hình electron và vị trí']),
  make('chem10-assess-m2-cp-b-q03', 'Đi xuống nhóm VIIA, số lớp electron tăng nên bán kính tăng: F < Cl < Br.', 'B', ['Xu hướng bán kính nguyên tử']),
  make('chem10-assess-m2-cp-b-q04', 'Mg nằm bên phải Na nên độ âm điện lớn hơn, đồng thời tính kim loại yếu hơn.', 'C', ['Độ âm điện và tính kim loại–phi kim']),
  make('chem10-assess-m2-cp-b-q05', '$Al_2O_3$ là oxide lưỡng tính; $Na_2O$, $MgO$ có tính base và $SO_3$ có tính acid.', 'B', ['Oxide, hydroxide và định luật tuần hoàn']),
  make('chem10-assess-m2-cp-b-q06', 'Trong một chu kì số lớp không đổi, nhưng điện tích hạt nhân tăng nên hút electron mạnh hơn và bán kính giảm.', 'B', ['Xu hướng bán kính nguyên tử']),
  make('chem10-assess-m2-cp-b-q07', 'Cấu hình electron lớp ngoài cùng biến đổi rồi lặp lại có quy luật khi Z tăng.', 'B', ['Oxide, hydroxide và định luật tuần hoàn']),
  make('chem10-assess-m2-cp-b-q08', 'Trong một chu kì độ âm điện nhìn chung tăng từ trái sang phải, nên thứ tự là Z – Y – X.', 'B', ['Độ âm điện và tính kim loại–phi kim']),
  make('chem10-assess-m2-cp-b-q09', 'Tổng electron bằng 2 + 2 + 6 + 1 = 11, nên Z = 11.', '11', ['Cấu hình electron và vị trí']),
  make('chem10-assess-m2-cp-b-q10', 'Số lượng tử chính lớn nhất là n = 3 nên nguyên tố thuộc chu kì 3.', '3', ['Ô nguyên tố, chu kì và nhóm']),
  make('chem10-assess-m2-cp-b-q11', 'Trong chu kì 2 bán kính giảm từ trái sang phải; Li lớn nhất và có Z = 3.', '3', ['Xu hướng bán kính nguyên tử']),
  make('chem10-assess-m2-cp-b-q12', '$Al_2O_3$ lưỡng tính và $SiO_2$ acid, nên có 2 oxide không thuộc loại base.', '2', ['Oxide, hydroxide và định luật tuần hoàn'])
];
