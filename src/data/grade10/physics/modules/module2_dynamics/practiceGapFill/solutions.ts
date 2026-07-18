import type { Solution } from '@/types';

export const g10PhysicsModule2GapFillSolutions: Solution[] = [
  { id: 'phy10-m2-s181', questionId: 'phy10-m2-q181', recognition: 'Dạng định luật II Newton từ đồ thị $a-F_h$: với một vật cố định, $a=F_h/m$, nên khối lượng bằng $F_h/a$ và là nghịch đảo hệ số góc.', detailedSteps: [{ order: 1, title: 'Chọn một điểm', explanation: 'Từ đồ thị có thể lấy $F_h=8$ N, $a=4$ m/s².' }, { order: 2, title: 'Suy khối lượng', explanation: '$m=F_h/a=8/4=2$ kg.' }], finalAnswer: '2', commonMistakes: ['Lấy hệ số góc $a/F=0{,}5$ làm khối lượng; đó là $1/m$.', 'Dùng một lực thành phần thay vì hợp lực.'], reviewSuggestions: ['Ôn $\\vec F_h=m\\vec a$ và ý nghĩa hệ số góc của đồ thị.'] }
];
