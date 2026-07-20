import type { Solution } from '@/types';

const solution = (
  questionId: string, finalAnswer: string, recognition: string,
  firstMove: string, explanation: string, commonMistake: string, reviewSuggestion: string
): Solution => ({
  id: `${questionId}-solution`, questionId,
  recognition: `Dạng bài: ${recognition}`,
  detailedSteps: [
    { order: 1, title: 'Dấu hiệu nhận biết và cách bắt đầu', explanation: firstMove },
    { order: 2, title: 'Áp dụng vào câu hỏi', explanation }
  ],
  finalAnswer, commonMistakes: [commonMistake], reviewSuggestions: [reviewSuggestion]
});

export const m4Expansion2Solutions: Solution[] = [
  solution('chem10-m4-x2-001', 'B', 'Số oxi hóa của đơn chất', 'Nếu chất chỉ gồm một nguyên tố và đang ở dạng đơn chất, gán số oxi hóa bằng 0.', 'Na là đơn chất nên số oxi hóa của Na bằng 0.', 'Dùng điện tích quen thuộc +1 của ion sodium cho Na kim loại.', 'Ôn phân biệt đơn chất và ion đơn nguyên tử.'),
  solution('chem10-m4-x2-002', 'C', 'Số oxi hóa của đơn chất phân tử', 'Dù phân tử có hai nguyên tử, nếu chỉ chứa một nguyên tố thì vẫn là đơn chất.', '$O_2$ là đơn chất nên mỗi O có số oxi hóa 0.', 'Gán −2 vì oxygen thường có số oxi hóa −2 trong hợp chất.', 'Ôn quy tắc ưu tiên: đơn chất bằng 0.'),
  solution('chem10-m4-x2-003', 'B', 'Số oxi hóa của đơn chất nhiều nguyên tử', 'Số nguyên tử trong phân tử không làm thay đổi quy tắc đơn chất.', '$S_8$ chỉ gồm sulfur nên số oxi hóa của S là 0.', 'Lấy chỉ số 8 làm số oxi hóa.', 'Ôn sự khác nhau giữa chỉ số và số oxi hóa.'),
  solution('chem10-m4-x2-004', '+3', 'Số oxi hóa của ion đơn nguyên tử', 'Với ion chỉ có một nguyên tử, số oxi hóa bằng đúng điện tích ion.', '$Fe^{3+}$ có số oxi hóa +3.', 'Bỏ dấu dương hoặc gán số oxi hóa quen thuộc khác của Fe.', 'Ôn quy tắc ion đơn nguyên tử.'),
  solution('chem10-m4-x2-005', '+4', 'Tìm số oxi hóa trong phân tử trung hòa', 'Gán O = −2 rồi dùng tổng số oxi hóa của phân tử trung hòa bằng 0.', 'Gọi số oxi hóa C là x: $x+2(-2)=0$, nên $x=+4$.', 'Quên nhân số oxi hóa O với chỉ số 2.', 'Ôn phương trình tổng số oxi hóa.'),
  solution('chem10-m4-x2-006', '+6', 'Tìm số oxi hóa trong ion đa nguyên tử', 'Tổng số oxi hóa trong ion bằng điện tích toàn ion, không bằng 0.', '$x+4(-2)=-2$, suy ra $x=+6$.', 'Đặt tổng bằng 0 như với phân tử trung hòa.', 'Ôn phân biệt tổng điện tích của phân tử và ion.'),
  solution('chem10-m4-x2-007', '+2', 'Ngoại lệ số oxi hóa của oxygen', 'F luôn −1 trong hợp chất; hãy dùng quy tắc ưu tiên này thay vì gán O = −2.', '$x+2(-1)=0$, nên O trong $OF_2$ có số oxi hóa +2.', 'Áp dụng máy móc O = −2 trong mọi hợp chất.', 'Ôn thứ tự ưu tiên và ngoại lệ của oxygen.'),
  solution('chem10-m4-x2-008', '-1', 'Ngoại lệ số oxi hóa của hydrogen', 'Trong hydride kim loại, H thường có số oxi hóa −1.', 'Ca có +2; $+2+2x=0$ nên $x=-1$.', 'Luôn gán H = +1 kể cả hydride kim loại.', 'Ôn ngoại lệ của hydrogen.'),

  solution('chem10-m4-x2-009', 'A', 'Nhận diện oxi hóa từ bán phản ứng', 'Electron ở vế sản phẩm cho biết tiểu phân đã nhường electron.', '$Fe^{2+}$ nhường 1e và số oxi hóa tăng từ +2 lên +3, nên là sự oxi hóa.', 'Nhìn thấy ion dương rồi kết luận là sự khử.', 'Ôn cặp nhường e–oxi hóa–tăng số oxi hóa.'),
  solution('chem10-m4-x2-010', 'A', 'Quan hệ giữa hai quá trình oxi hóa–khử', 'Electron được chất này nhường phải được chất khác nhận trong phản ứng tổng.', 'Bảo toàn electron buộc sự oxi hóa và sự khử xảy ra đồng thời.', 'Tách hai quá trình như hai phản ứng không liên quan.', 'Ôn bảo toàn electron.'),
  solution('chem10-m4-x2-011', 'B', 'Sửa ngộ nhận về khái niệm oxi hóa', 'Không tìm oxygen trong công thức; theo dõi electron hoặc số oxi hóa.', 'Oxi hóa là nhường electron hay tăng số oxi hóa, nên có thể xảy ra trong phản ứng không chứa oxygen.', 'Dùng định nghĩa lịch sử “kết hợp oxygen” cho mọi bài.', 'Ôn định nghĩa hiện đại của oxi hóa–khử.'),
  solution('chem10-m4-x2-012', 'B', 'Viết bán phản ứng oxi hóa', 'Cân bằng nguyên tử I trước, rồi đặt electron ở phía sản phẩm để biểu diễn sự nhường.', '$2I^-\rightarrow I_2+2e$ bảo toàn hai nguyên tử I và điện tích −2.', 'Đặt electron ở vế trái khiến quá trình thành sự khử.', 'Ôn kiểm tra nguyên tử và điện tích của bán phản ứng.'),
  solution('chem10-m4-x2-013', 'C', 'Viết bán phản ứng khử', 'Khử là nhận electron; cân bằng hai nguyên tử O và điện tích.', '$O_2+4e\rightarrow2O^{2-}$ có 2 O và tổng điện tích −4 ở cả hai phía.', 'Chỉ thêm 2e vì có một phân tử $O_2$.', 'Ôn số electron nhận trên mỗi nguyên tử.'),
  solution('chem10-m4-x2-014', 'C', 'Tìm bội chung electron', 'Lấy bội chung nhỏ nhất của số electron nhường và nhận.', 'BCNN(3,4)=12, nên số electron trao đổi nhỏ nhất là 12.', 'Cộng 3+4 thay vì lấy bội chung.', 'Ôn bước cân bằng electron.'),
  solution('chem10-m4-x2-015', 'A', 'Suy tỉ lệ chất từ electron trao đổi', 'So số electron một mol chất nhường và một mol ion nhận.', 'Một Zn nhường 2e; một $Cu^{2+}$ nhận 2e, nên tỉ lệ là 1:1.', 'Dùng điện tích để đảo thành 2:2 rồi không rút gọn.', 'Ôn bảo toàn electron theo số mol.'),
  solution('chem10-m4-x2-016', '8', 'Tính số electron theo độ biến thiên số oxi hóa', 'Số electron nhường trên một nguyên tử bằng độ tăng số oxi hóa.', 'Từ −3 lên +5 tăng 8 đơn vị, nên mỗi N nhường 8e.', 'Tính $5-3=2$ do bỏ dấu âm.', 'Ôn phép trừ số có dấu trong số oxi hóa.'),

  solution('chem10-m4-x2-017', 'A', 'Xác định chất oxi hóa', 'Tính số oxi hóa của nguyên tố thay đổi; chất chứa nguyên tố giảm số oxi hóa là chất oxi hóa.', 'Cu trong CuO giảm từ +2 xuống 0, nên CuO nhận electron và là chất oxi hóa.', 'Chọn $H_2$ vì nó kết hợp với oxygen.', 'Ôn chất oxi hóa là chất bị khử.'),
  solution('chem10-m4-x2-018', 'B', 'Xác định chất khử', 'Chất chứa nguyên tố tăng số oxi hóa là chất nhường electron và đóng vai trò chất khử.', 'H trong $H_2$ tăng từ 0 lên +1 trong nước, nên $H_2$ là chất khử.', 'Gọi chất khử là chất có số oxi hóa giảm.', 'Ôn chất khử là chất bị oxi hóa.'),
  solution('chem10-m4-x2-019', 'B', 'Xác định chất khử trong phản ứng nhiệt luyện', 'Theo dõi carbon và kim loại thay vì chỉ nhìn chất có oxygen.', 'C tăng từ 0 lên +4 trong $CO_2$, tức nhường electron nên C là chất khử.', 'Chọn Cu vì Cu là sản phẩm kim loại.', 'Ôn vai trò của carbon trong phản ứng khử oxide kim loại.'),
  solution('chem10-m4-x2-020', 'A', 'Xác định đồng thời chất oxi hóa và chất khử', 'Viết hai biến đổi: Zn 0→+2 và Cu +2→0.', 'Zn tăng số oxi hóa nên là chất khử; $Cu^{2+}$ giảm số oxi hóa nên là chất oxi hóa.', 'Gán vai trò theo tên chất đầu và sản phẩm thay vì theo electron.', 'Ôn bảng tăng/giảm số oxi hóa và vai trò.'),
  solution('chem10-m4-x2-021', 'A', 'Phân biệt vai trò với quá trình', 'Nhớ nghịch nghĩa có chủ đích: chất oxi hóa gây oxi hóa cho chất khác nhưng bản thân bị khử.', 'Chất oxi hóa nhận electron và số oxi hóa của nó giảm.', 'Nói chất oxi hóa phải bị oxi hóa.', 'Ôn sơ đồ chất oxi hóa ↔ nhận e ↔ bị khử.'),
  solution('chem10-m4-x2-022', 'C', 'Nhận diện phản ứng tự oxi hóa–khử', 'Theo dõi cùng nguyên tố Cl từ số oxi hóa ban đầu 0 đến từng sản phẩm.', 'Cl đi từ 0 xuống −1 trong NaCl và từ 0 lên +1 trong NaClO, nên vừa bị khử vừa bị oxi hóa.', 'Lấy số oxi hóa trung bình rồi bỏ qua hai nhánh sản phẩm.', 'Ôn phản ứng disproportionation.'),
  solution('chem10-m4-x2-023', 'C', 'Phân tích tự oxi hóa–khử của peroxide', 'Xác định O trong peroxide là −1 rồi so với O trong cả hai sản phẩm.', 'Một phần O giảm −1→−2 trong nước, phần khác tăng −1→0 trong $O_2$.', 'Gán O trong $H_2O_2$ bằng −2.', 'Ôn ngoại lệ peroxide và hai nhánh biến đổi.'),
  solution('chem10-m4-x2-024', 'A', 'Nhận biết dấu hiệu tự oxi hóa–khử', 'Tìm một nguyên tố cùng xuất phát ở một số oxi hóa nhưng đi tới hai mức cao hơn và thấp hơn.', 'Hiện tượng vừa tăng vừa giảm số oxi hóa của cùng nguyên tố là dấu hiệu cốt lõi.', 'Cho rằng chỉ cần một chất phản ứng là đủ kết luận.', 'Ôn tiêu chí dựa trên số oxi hóa.'),

  solution('chem10-m4-x2-025', 'C', 'Cân bằng phản ứng oxi hóa–khử đơn giản', 'Cân bằng Fe và O hoặc dùng electron, rồi rút hệ số về số nguyên tối giản.', '$4Fe+3O_2\rightarrow2Fe_2O_3$, nên hệ số $O_2$ là 3.', 'Viết hệ số phân số nhưng không quy đổi về số nguyên tối giản.', 'Ôn kiểm tra lại số nguyên tử hai vế.'),
  solution('chem10-m4-x2-026', '2', 'Cân bằng phản ứng tạo muối halide', 'BCNN số nguyên tử Cl giữa $Cl_2$ và $AlCl_3$ là 6.', '$2Al+3Cl_2\rightarrow2AlCl_3$, nên hệ số Al là 2.', 'Đổi chỉ số trong $AlCl_3$ để cân bằng.', 'Ôn chỉ được thay hệ số, không thay công thức.'),
  solution('chem10-m4-x2-027', 'C', 'Tìm electron trong bán phản ứng permanganate', 'Theo dõi Mn từ +7 trong $MnO_4^-$ xuống +2.', 'Mn giảm 5 đơn vị số oxi hóa nên mỗi $MnO_4^-$ nhận 5e.', 'Tính theo bốn nguyên tử oxygen.', 'Ôn lấy độ biến thiên trên nguyên tố thay đổi.'),
  solution('chem10-m4-x2-028', 'A', 'Cân bằng bán phản ứng trong môi trường acid', 'Dùng quy trình: cân nguyên tố chính → O bằng $H_2O$ → H bằng $H^+$ → điện tích bằng e.', 'Vì vậy oxygen được cân bằng bằng cách thêm $H_2O$ vào phía thiếu O.', 'Dùng $OH^-$ ngay từ đầu như môi trường base.', 'Ôn đúng thứ tự phương pháp ion–electron trong acid.'),
  solution('chem10-m4-x2-029', 'A', 'Cân bằng hydrogen trong môi trường acid', 'Sau khi thêm nước, đếm H hai vế rồi thêm $H^+$ vào phía thiếu H.', 'Môi trường acid cho phép dùng $H^+$ để cân bằng hydrogen.', 'Dùng $OH^-$ và trộn quy trình acid với base.', 'Ôn các tiểu phân được phép dùng theo môi trường.'),
  solution('chem10-m4-x2-030', '1:1', 'Cân bằng phản ứng ion từ hai bán phản ứng một electron', 'Viết $Fe^{2+}\rightarrow Fe^{3+}+e$ và $Ce^{4+}+e\rightarrow Ce^{3+}$.', 'Mỗi quá trình trao đổi 1e nên ghép theo tỉ lệ tối giản 1:1.', 'Cân theo điện tích ion ban đầu 2 và 4.', 'Ôn hệ số dựa trên electron trao đổi.'),
  solution('chem10-m4-x2-031', 'C', 'Cân bằng permanganate–iron(II) trong acid', 'Một Mn(+7) nhận 5e; mỗi Fe(+2) nhường 1e.', 'Bảo toàn electron cần 5 $Fe^{2+}$ cho 1 $MnO_4^-$, nên $b:a=5:1$.', 'Dùng số oxygen 4 làm hệ số Fe.', 'Ôn kết hợp hai bán phản ứng.'),
  solution('chem10-m4-x2-032', 'B', 'Phản biện lời giải cân bằng electron', 'Điều kiện bắt buộc trước khi ghép bán phản ứng là tổng electron nhường bằng tổng electron nhận.', '6 khác 3 nên phải nhân hệ số thích hợp để hai tổng bằng nhau rồi mới cộng hai quá trình.', 'Bỏ electron vì nó bị triệt tiêu trong phương trình cuối.', 'Ôn checklist kiểm tra: nguyên tử, điện tích, electron.'),
];
