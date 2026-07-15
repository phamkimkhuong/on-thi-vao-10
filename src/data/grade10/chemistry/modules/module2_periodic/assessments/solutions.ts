import type { Solution } from '@/types';

const make = (questionId: string, explanation: string, finalAnswer: string, reviewSuggestions: string[]): Solution => ({ id: `solution-${questionId}`, questionId, recognition: 'Dùng vị trí, cấu hình electron và quy luật tuần hoàn để suy luận.', detailedSteps: [{ order: 1, title: 'Phân tích', explanation, result: finalAnswer }], finalAnswer, commonMistakes: ['Học thuộc chiều mũi tên nhưng không kiểm tra chu kì hoặc nhóm.', 'Kết luận trực tiếp mà không liên hệ cấu hình electron.'], reviewSuggestions });

export const m2AssessmentSolutions: Solution[] = [
  make('chem10-assess-m2-cp-a-q01', 'Các nguyên tố cùng chu kì có cùng số lớp electron.', 'B', ['Ô nguyên tố, chu kì và nhóm']),
  make('chem10-assess-m2-cp-a-q02', 'Số n lớn nhất là 3 nên thuộc chu kì 3; lớp ngoài cùng có 5 electron nên thuộc nhóm VA.', 'B', ['Cấu hình electron và vị trí']),
  make('chem10-assess-m2-cp-a-q03', 'Trong cùng chu kì 3, điện tích hạt nhân tăng làm bán kính giảm: Na > Mg > Al.', 'B', ['Xu hướng bán kính nguyên tử']),
  make('chem10-assess-m2-cp-a-q04', 'Trong cùng chu kì, đi từ trái sang phải độ âm điện và tính phi kim nhìn chung tăng; Cl nằm bên phải S.', 'B', ['Độ âm điện và tính kim loại–phi kim']),
  make('chem10-assess-m2-cp-a-q05', 'Khi tính kim loại giảm và tính phi kim tăng, oxide chuyển từ base qua lưỡng tính đến acid.', 'B', ['Oxide, hydroxide và định luật tuần hoàn']),
  make('chem10-assess-m2-cp-a-q06', 'Đi xuống nhóm, số lớp electron và che chắn tăng làm electron ngoài cùng xa hạt nhân hơn.', 'B', ['Xu hướng bán kính nguyên tử']),
  make('chem10-assess-m2-cp-a-q07', 'Tính chất các nguyên tố và hợp chất biến đổi tuần hoàn theo chiều tăng điện tích hạt nhân.', 'B', ['Oxide, hydroxide và định luật tuần hoàn']),
  make('chem10-assess-m2-cp-a-q08', 'Độ âm điện tăng từ 0,9 lên 1,6 chứng tỏ khả năng hút electron liên kết tăng từ A đến C.', 'B', ['Độ âm điện và tính kim loại–phi kim']),
  make('chem10-assess-m2-cp-a-q09', 'Tổng electron bằng 2 + 2 + 6 + 2 + 5 = 17, nên Z = 17.', '17', ['Cấu hình electron và vị trí']),
  make('chem10-assess-m2-cp-a-q10', 'Số lớp ngoài cùng n = 4 cho biết Ca thuộc chu kì 4.', '4', ['Ô nguyên tố, chu kì và nhóm', 'Cấu hình electron và vị trí']),
  make('chem10-assess-m2-cp-a-q11', 'Các nguyên tố cùng chu kì 3 có bán kính giảm từ trái sang phải; Na lớn nhất và có Z = 11.', '11', ['Xu hướng bán kính nguyên tử']),
  make('chem10-assess-m2-cp-a-q12', '$SiO_2$, $P_2O_5$, $SO_3$ và $Cl_2O_7$ là các oxide acid; tổng cộng 4.', '4', ['Oxide, hydroxide và định luật tuần hoàn'])
];
