/**
 * Lý thuyết Module 4 bao phủ quy tắc số oxi hóa, quá trình electron,
 * vai trò chất oxi hóa–chất khử và hai cách cân bằng phản ứng redox.
 */

export const chem10Qt18Theory: string[] = [
  '**1. Số oxi hóa là gì?**\n**Số oxi hóa** của một nguyên tử trong chất là điện tích quy ước của nguyên tử đó nếu coi các cặp electron liên kết đều chuyển hoàn toàn về nguyên tử có độ âm điện lớn hơn. Số oxi hóa giúp theo dõi sự dịch chuyển electron trong phản ứng.\n\nSố oxi hóa được viết kèm dấu ở trước, như $+3$, $-2$, $0$. Nó không luôn bằng điện tích thật của nguyên tử trong phân tử cộng hóa trị.',

  '**2. Các quy tắc nền tảng**\n- Nguyên tử trong **đơn chất** có số oxi hóa bằng 0: $Na$, $Fe$, $O_2$, $Cl_2$, $S_8$ đều có số oxi hóa 0.\n- Trong **ion đơn nguyên tử**, số oxi hóa bằng điện tích ion: $Fe^{3+}$ là $+3$, $S^{2-}$ là $-2$.\n- Fluorine trong hợp chất luôn có số oxi hóa $-1$.\n- Kim loại nhóm IA trong hợp chất thường là $+1$; nhóm IIA thường là $+2$; aluminium thường là $+3$.\n- Tổng đại số số oxi hóa của tất cả nguyên tử trong phân tử trung hòa bằng 0.',

  '**3. Quy tắc của hydrogen và oxygen**\n- Hydrogen trong phần lớn hợp chất có số oxi hóa $+1$.\n- Trong **hydride kim loại** như $NaH$, $CaH_2$, hydrogen có số oxi hóa $-1$.\n- Oxygen trong phần lớn hợp chất có số oxi hóa $-2$.\n- Trong **peroxide** có liên kết O–O như $H_2O_2$, $Na_2O_2$, oxygen có số oxi hóa $-1$.\n- Trong $OF_2$, vì fluorine luôn là $-1$, oxygen phải có số oxi hóa $+2$.\n\nKhông được áp dụng “H luôn $+1$” hay “O luôn $-2$” mà không kiểm tra ngoại lệ.',

  '**4. Tổng số oxi hóa trong phân tử và ion nhiều nguyên tử**\nVới phân tử trung hòa:\n$$\\sum n_i\\,x_i=0$$\nVới ion nhiều nguyên tử có điện tích $q$:\n$$\\sum n_i\\,x_i=q$$\nTrong đó $n_i$ là số nguyên tử loại $i$, $x_i$ là số oxi hóa tương ứng.\n\nPhải nhân số oxi hóa với **chỉ số nguyên tử**. Trong $H_2SO_4$, đóng góp của H là $2\\times(+1)$ và của O là $4\\times(-2)$, không phải chỉ $+1$ và $-2$.',

  '**5. Ví dụ trong hợp chất trung hòa**\nTìm số oxi hóa $x$ của sulfur trong $H_2SO_4$:\n$$2(+1)+x+4(-2)=0$$\n$$x=+6$$\n\nTìm số oxi hóa của carbon trong $CO_2$:\n$$x+2(-2)=0\\Rightarrow x=+4$$\n\nTìm oxygen trong $OF_2$:\n$$x+2(-1)=0\\Rightarrow x=+2$$\nVí dụ cuối cho thấy phải ưu tiên quy tắc fluorine $-1$ thay vì mặc định oxygen $-2$.',

  '**6. Ví dụ trong ion nhiều nguyên tử**\nTìm manganese trong $MnO_4^-$:\n$$x+4(-2)=-1\\Rightarrow x=+7$$\nTìm sulfur trong $SO_4^{2-}$:\n$$x+4(-2)=-2\\Rightarrow x=+6$$\n\nVế phải phải bằng đúng **điện tích toàn ion**, kể cả dấu. Không đặt tổng bằng 0 như với phân tử trung hòa.',

  '**7. Quy trình xác định số oxi hóa**\n1. Xác định chất là đơn chất, ion đơn nguyên tử, phân tử trung hòa hay ion nhiều nguyên tử.\n2. Gán trước các số oxi hóa chắc chắn: F, kim loại IA/IIA, H và O sau khi kiểm tra ngoại lệ.\n3. Đặt $x$ cho nguyên tố chưa biết.\n4. Nhân từng số oxi hóa với số nguyên tử tương ứng.\n5. Lập tổng bằng 0 hoặc bằng điện tích ion, giải $x$.\n6. Thay lại để kiểm tra tổng và dấu.\n\nKhi có O–O, kim loại–H hoặc O–F, phải dừng lại kiểm tra ngoại lệ trước khi tính.',

  '**8. Phân biệt số oxi hóa, điện tích ion và hóa trị**\n- Điện tích ion là điện tích thực của toàn ion hoặc ion đơn nguyên tử.\n- Số oxi hóa là đại lượng quy ước gán cho từng nguyên tử.\n- Hóa trị mô tả khả năng liên kết theo mô hình học tập, không đồng nhất với số oxi hóa.\n\nVí dụ trong $SO_4^{2-}$, điện tích **toàn ion** là $-2$ nhưng sulfur có số oxi hóa $+6$. Trong $O_2$, mỗi O có số oxi hóa 0 dù oxygen thường có hóa trị II.\n\n**Lỗi cần tránh:** quên chỉ số, đảo dấu, đặt tổng ion bằng 0 hoặc bỏ qua peroxide, hydride và $OF_2$.'
];

export const chem10Qt19Theory: string[] = [
  '**1. Sự oxi hóa và sự khử**\n- **Sự oxi hóa** là quá trình một tiểu phân nhường electron; số oxi hóa của nguyên tố tăng.\n- **Sự khử** là quá trình một tiểu phân nhận electron; số oxi hóa của nguyên tố giảm.\n\nGhi nhớ hai cặp tương đương:\n$$\\text{nhường electron}\\Longleftrightarrow\\text{số oxi hóa tăng}\\Longleftrightarrow\\text{bị oxi hóa}$$\n$$\\text{nhận electron}\\Longleftrightarrow\\text{số oxi hóa giảm}\\Longleftrightarrow\\text{bị khử}$$',

  '**2. Oxi hóa không nhất thiết phải có oxygen**\nTên gọi lịch sử dễ gây nhầm. Trong cách hiểu hiện đại, một quá trình là oxi hóa khi có sự nhường electron hoặc tăng số oxi hóa, dù phản ứng không chứa oxygen.\n\nVí dụ:\n$$Fe^{2+}\\rightarrow Fe^{3+}+e^-$$\nlà sự oxi hóa vì Fe nhường electron và tăng số oxi hóa từ $+2$ lên $+3$. Không cần có $O_2$ trong phương trình.',

  '**3. Viết quá trình nhường electron**\nElectron nằm ở vế sản phẩm:\n$$\\text{dạng khử}\\rightarrow\\text{dạng oxi hóa}+ne^-$$\nSố electron nhường bằng độ tăng số oxi hóa nhân với số nguyên tử tham gia quá trình.\n\nVí dụ:\n$$Al\\rightarrow Al^{3+}+3e^-$$\n$$2I^-\\rightarrow I_2+2e^-$$\nỞ ví dụ iodide, hai nguyên tử I cùng tăng từ $-1$ lên 0 nên tổng cộng nhường 2 electron.',

  '**4. Viết quá trình nhận electron**\nElectron nằm ở vế chất đầu:\n$$\\text{dạng oxi hóa}+ne^-\\rightarrow\\text{dạng khử}$$\nVí dụ:\n$$Cu^{2+}+2e^-\\rightarrow Cu$$\n$$Cl_2+2e^-\\rightarrow2Cl^-$$\n$$O_2+4e^-\\rightarrow2O^{2-}$$\n\nPhải kiểm tra đồng thời số nguyên tử và điện tích hai vế của bán phản ứng.',

  '**5. Tính số electron từ độ biến thiên số oxi hóa**\nVới một nguyên tử:\n$$n_e=|\\text{số oxi hóa sau}-\\text{số oxi hóa trước}|$$\nNếu có nhiều nguyên tử cùng biến đổi, nhân thêm số nguyên tử.\n\nVí dụ một N chuyển từ $-3$ lên $+5$ có độ tăng bằng 8 nên nhường 8 electron. Một phân tử $Cl_2$ chuyển thành $2Cl^-$ có hai nguyên tử Cl, mỗi nguyên tử nhận 1 electron nên cả phân tử nhận 2 electron.',

  '**6. Sự oxi hóa và sự khử luôn xảy ra đồng thời**\nElectron do chất này nhường phải được chất khác nhận. Trong phản ứng hoàn chỉnh:\n$$\\text{tổng electron nhường}=\\text{tổng electron nhận}$$\nNếu ghép:\n$$Al\\rightarrow Al^{3+}+3e^-$$\n$$O_2+4e^-\\rightarrow2O^{2-}$$\nthì bội chung nhỏ nhất của 3 và 4 là 12: cần nhân quá trình Al với 4 và quá trình $O_2$ với 3.\n\nKhông thể có phản ứng oxi hóa hoàn chỉnh xảy ra độc lập mà không đồng thời có quá trình khử.',

  '**7. Liên hệ lượng chất với electron**\nHệ số trong bán phản ứng cho tỉ lệ mol electron. Từ:\n$$Cl_2+2e^-\\rightarrow2Cl^-$$\n1 mol $Cl_2$ nhận 2 mol electron; 3 mol $Cl_2$ nhận 6 mol electron.\n\nTừ:\n$$Zn\\rightarrow Zn^{2+}+2e^-$$\n$$Cu^{2+}+2e^-\\rightarrow Cu$$\n1 mol Zn nhường đúng số electron mà 1 mol $Cu^{2+}$ nhận, nên tỉ lệ mol Zn bị oxi hóa và $Cu^{2+}$ bị khử là $1:1$.',

  '**8. Quy trình và lỗi thường gặp**\n1. Xác định số oxi hóa trước và sau của đúng nguyên tố.\n2. Tăng số oxi hóa: viết quá trình nhường electron.\n3. Giảm số oxi hóa: viết quá trình nhận electron.\n4. Nhân độ biến thiên với số nguyên tử.\n5. Nếu ghép hai quá trình, tìm bội chung để bảo toàn electron.\n\n**Lỗi cần tránh:** gọi nhường electron là sự khử; đặt electron sai vế; chỉ tính độ biến thiên cho một nguyên tử khi công thức chứa nhiều nguyên tử; hoặc cân bằng electron nhưng làm sai số nguyên tử và điện tích.'
];

export const chem10Qt20Theory: string[] = [
  '**1. Chất oxi hóa và chất khử**\n- **Chất oxi hóa** nhận electron, làm chất khác bị oxi hóa và bản thân **bị khử**; nguyên tố đặc trưng trong chất oxi hóa giảm số oxi hóa.\n- **Chất khử** nhường electron, làm chất khác bị khử và bản thân **bị oxi hóa**; nguyên tố đặc trưng trong chất khử tăng số oxi hóa.\n\nTên gọi mô tả tác dụng của chất lên đối tác, nên cố ý “ngược” với quá trình chính chất đó trải qua.',

  '**2. Chuỗi nhận diện cần nhớ**\n$$\\text{chất oxi hóa}\\Longleftrightarrow\\text{nhận }e^-\\Longleftrightarrow\\text{bị khử}\\Longleftrightarrow\\text{số oxi hóa giảm}$$\n$$\\text{chất khử}\\Longleftrightarrow\\text{nhường }e^-\\Longleftrightarrow\\text{bị oxi hóa}\\Longleftrightarrow\\text{số oxi hóa tăng}$$\n\nKhông gọi “chất bị oxi hóa” là chất oxi hóa. Chất bị oxi hóa chính là chất khử.',

  '**3. Quy trình xác định vai trò trong phương trình**\n1. Gán số oxi hóa cho các nguyên tố có khả năng thay đổi ở hai vế.\n2. Nối cùng một nguyên tố từ chất đầu đến sản phẩm.\n3. Nguyên tố giảm số oxi hóa nằm trong chất oxi hóa.\n4. Nguyên tố tăng số oxi hóa nằm trong chất khử.\n5. Gọi tên **chất hoặc tiểu phân ở vế chất đầu**, không chọn sản phẩm chỉ vì sản phẩm có số oxi hóa thấp hoặc cao.\n\nIon không thay đổi số oxi hóa thường là ion khán giả và không quyết định vai trò redox.',

  '**4. Ví dụ xác định đồng thời hai vai trò**\nTrong phản ứng:\n$$Fe_2O_3+3CO\\rightarrow2Fe+3CO_2$$\n- Fe giảm từ $+3$ trong $Fe_2O_3$ xuống 0: $Fe_2O_3$ nhận electron, là chất oxi hóa.\n- C tăng từ $+2$ trong CO lên $+4$ trong $CO_2$: CO nhường electron, là chất khử.\n\nKhông gọi CO là chất oxi hóa chỉ vì nó “lấy oxygen”; tiêu chí chắc chắn là sự thay đổi số oxi hóa và electron.',

  '**5. Ví dụ ở dạng ion**\nTrong phản ứng:\n$$Zn+Cu^{2+}\\rightarrow Zn^{2+}+Cu$$\n- Zn: $0\\rightarrow+2$, nhường electron, là chất khử.\n- $Cu^{2+}$: $+2\\rightarrow0$, nhận electron, là chất oxi hóa.\n\nNếu viết phương trình phân tử $Zn+CuSO_4\\rightarrow ZnSO_4+Cu$, bản chất chất oxi hóa là $Cu^{2+}$ trong $CuSO_4$; $SO_4^{2-}$ không đổi số oxi hóa và là ion khán giả.',

  '**6. Phản ứng tự oxi hóa–khử**\nTrong phản ứng tự oxi hóa–khử, cùng một nguyên tố ở một số oxi hóa ban đầu vừa tăng vừa giảm số oxi hóa, nên cùng một chất có cả hai vai trò.\n\nVí dụ:\n$$Cl_2+2NaOH\\rightarrow NaCl+NaClO+H_2O$$\nChlorine từ 0:\n- Giảm xuống $-1$ trong NaCl: bị khử.\n- Tăng lên $+1$ trong NaClO: bị oxi hóa.\nVì vậy $Cl_2$ vừa là chất oxi hóa vừa là chất khử.',

  '**7. Trường hợp hydrogen peroxide**\nTrong $H_2O_2$, oxygen có số oxi hóa $-1$. Khi phân hủy:\n$$2H_2O_2\\rightarrow2H_2O+O_2$$\n- Một phần O giảm từ $-1$ xuống $-2$ trong nước: nhận electron.\n- Một phần O tăng từ $-1$ lên 0 trong $O_2$: nhường electron.\nDo đó $H_2O_2$ vừa là chất oxi hóa vừa là chất khử.\n\nNếu gán sai O trong peroxide là $-2$, toàn bộ phân tích vai trò sẽ sai.',

  '**8. Kiểm tra kết luận và lỗi thường gặp**\nMột kết luận đầy đủ nên chỉ ra: nguyên tố nào đổi số oxi hóa, đổi theo chiều nào, chất nào chứa nguyên tố đó và vai trò tương ứng.\n\n**Lỗi cần tránh:**\n- Gọi chất bị oxi hóa là chất oxi hóa.\n- Chọn sản phẩm làm chất oxi hóa hoặc chất khử khi đề hỏi vai trò chất phản ứng.\n- Chỉ theo dõi oxygen hoặc hydrogen mà bỏ nguyên tố thực sự đổi số oxi hóa.\n- Trong phản ứng tự oxi hóa–khử chỉ nhìn một sản phẩm.\n- Gán sai số oxi hóa ngoại lệ của peroxide.'
];

export const chem10Qt21Theory: string[] = [
  '**1. Cơ sở của phương pháp electron**\nTrong phản ứng oxi hóa–khử:\n$$\\text{tổng số electron chất khử nhường}=\\text{tổng số electron chất oxi hóa nhận}$$\nĐây là điều kiện để xác định tỉ lệ hệ số của các chất chứa nguyên tố thay đổi số oxi hóa. Sau khi bảo toàn electron, vẫn phải cân bằng các nguyên tố còn lại và kiểm tra toàn phương trình.',

  '**2. Quy trình cân bằng theo số oxi hóa**\n1. Viết đúng công thức các chất và xác định số oxi hóa thay đổi.\n2. Viết quá trình tăng và giảm số oxi hóa hoặc các bán phản ứng electron.\n3. Tính số electron nhường/nhận, chú ý số nguyên tử của nguyên tố biến đổi.\n4. Tìm bội chung nhỏ nhất để tổng electron nhường bằng tổng electron nhận.\n5. Đặt hệ số vào các chất chứa nguyên tố thay đổi số oxi hóa.\n6. Cân bằng các nguyên tố còn lại; thường để H và O về sau.\n7. Rút gọn hệ số về bộ số nguyên tối giản và kiểm tra nguyên tử, điện tích.',

  '**3. Ví dụ một cặp nguyên tố thay đổi**\nCân bằng:\n$$Al+Cl_2\\rightarrow AlCl_3$$\nCác quá trình:\n$$Al\\rightarrow Al^{3+}+3e^-$$\n$$Cl_2+2e^-\\rightarrow2Cl^-$$\nBội chung nhỏ nhất là 6 nên nhân quá trình Al với 2 và $Cl_2$ với 3:\n$$2Al+3Cl_2\\rightarrow2AlCl_3$$\nKiểm tra: hai vế đều có 2 Al và 6 Cl.',

  '**4. Phải tính cả số nguyên tử thay đổi**\nCân bằng:\n$$Fe+O_2\\rightarrow Fe_2O_3$$\nFe tăng $0\\rightarrow+3$, mỗi Fe nhường 3 electron. Trong $O_2$, hai O cùng giảm $0\\rightarrow-2$, nên một $O_2$ nhận tổng 4 electron. Bội chung là 12:\n$$4Fe+3O_2\\rightarrow2Fe_2O_3$$\n\nNếu chỉ ghi O nhận 2 electron mà bỏ hệ số hai nguyên tử trong $O_2$, tỉ lệ hệ số sẽ sai.',

  '**5. Phản ứng có nhiều chất và sản phẩm**\nCân bằng $NH_3+O_2\\rightarrow NO+H_2O$:\n- N tăng từ $-3$ lên $+2$, nhường 5 electron mỗi N.\n- Mỗi $O_2$ nhận tổng 4 electron khi O giảm từ 0 xuống $-2$.\n- Bội chung 20 cho tỉ lệ ban đầu $4NH_3:5O_2$.\nSau đó cân bằng N và H:\n$$4NH_3+5O_2\\rightarrow4NO+6H_2O$$\n\nElectron cho tỉ lệ chất redox; H, O và các nhóm nguyên tử còn lại vẫn cần được cân bằng tiếp.',

  '**6. Cân bằng bán phản ứng trong môi trường acid**\nVới phương pháp ion–electron trong môi trường acid:\n1. Cân bằng nguyên tố trung tâm.\n2. Cân bằng O bằng cách thêm $H_2O$ vào phía thiếu O.\n3. Cân bằng H bằng cách thêm $H^+$ vào phía thiếu H.\n4. Cân bằng điện tích bằng electron.\n\nVí dụ:\n$$MnO_4^-\\rightarrow Mn^{2+}$$\nCân bằng được:\n$$MnO_4^-+8H^++5e^-\\rightarrow Mn^{2+}+4H_2O$$\nKiểm tra: hai vế có 1 Mn, 4 O, 8 H và tổng điện tích đều bằng $+2$.',

  '**7. Ghép hai bán phản ứng ion–electron**\nVí dụ ghép quá trình permanganate với iron(II):\n$$MnO_4^-+8H^++5e^-\\rightarrow Mn^{2+}+4H_2O$$\n$$Fe^{2+}\\rightarrow Fe^{3+}+e^-$$\nNhân bán phản ứng Fe với 5 rồi cộng, triệt tiêu electron:\n$$MnO_4^-+5Fe^{2+}+8H^+\\rightarrow Mn^{2+}+5Fe^{3+}+4H_2O$$\nDo đó tỉ lệ $Fe^{2+}:MnO_4^-=5:1$. Electron không xuất hiện trong phương trình tổng vì đã được triệt tiêu, nhưng vẫn phải bảo toàn.',

  '**8. Ghi chú về môi trường base**\nTrong môi trường base, có thể cân bằng trước như môi trường acid rồi thêm cùng số mol $OH^-$ vào hai vế để trung hòa toàn bộ $H^+$ thành $H_2O$, sau đó rút gọn nước. Cũng có thể dùng quy trình trực tiếp với $H_2O$ và $OH^-$ nếu đã thành thạo.\n\nKhông trộn tùy ý $H^+$ và $OH^-$ mà không xử lí chúng. Nếu bài chỉ yêu cầu môi trường acid, dùng đúng quy trình $H_2O$, $H^+$ rồi electron.',

  '**9. Tìm một hệ số hoặc tổng hệ số**\nKhi đề chỉ hỏi một hệ số:\n1. Vẫn xác định tỉ lệ electron trước.\n2. Đặt các hệ số redox chủ chốt.\n3. Cân bằng hoàn chỉnh phương trình.\n4. Rút về hệ số nguyên tối giản rồi mới đọc hệ số cần hỏi hoặc tính tổng.\n\nVí dụ:\n$$Cu+4HNO_3\\rightarrow Cu(NO_3)_2+2NO_2+2H_2O$$\nTổng hệ số tối giản là $1+4+1+2+2=10$. Không cộng hệ số từ một phương trình chưa rút gọn.',

  '**10. Kiểm tra và sửa phương trình**\nChecklist cuối cùng:\n- Mỗi nguyên tố có cùng số nguyên tử ở hai vế.\n- Với phương trình ion, tổng điện tích hai vế bằng nhau.\n- Tổng electron nhường bằng tổng electron nhận.\n- Hệ số là số nguyên tối giản.\n- Công thức hóa học của các chất không bị thay đổi.\n\nVí dụ $2P+5O_2\\rightarrow P_2O_5$ sai vì vế trái có 10 O, vế phải có 5 O. Phương trình đúng là:\n$$4P+5O_2\\rightarrow2P_2O_5$$\nTuyệt đối không đổi $H_2O$ thành $H_2O_2$ hoặc đổi chỉ số chất để cân bằng; thay chỉ số là biến chất này thành chất khác.',

  '**11. Các phương trình mẫu nên tự kiểm tra**\n- $MnO_2+4HCl\\rightarrow MnCl_2+Cl_2+2H_2O$.\n- $2KMnO_4+16HCl\\rightarrow2KCl+2MnCl_2+5Cl_2+8H_2O$.\n- $4NH_3+5O_2\\rightarrow4NO+6H_2O$.\n\nKhông nên học thuộc hệ số tách rời. Hãy thử xác định số oxi hóa, lượng electron và kiểm tra nguyên tử để có thể xử lí phương trình mới.'
];
