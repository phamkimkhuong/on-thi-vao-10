export const phy10Qt31Theory: string[] = [
  '**1. Năng lượng**\nNăng lượng là đại lượng vô hướng đặc trưng khả năng gây biến đổi hoặc thực hiện công. Đơn vị SI là joule (J). Một vật/hệ có thể đồng thời mang nhiều dạng năng lượng.',
  '**2. Các dạng thường gặp**\nĐộng năng gắn với chuyển động; thế năng gắn với vị trí/cấu hình; nội năng gắn với chuyển động và tương tác vi mô; ngoài ra còn hóa năng, điện năng, quang năng...',
  '**3. Truyền và chuyển hóa**\nTruyền năng lượng là năng lượng đi qua ranh giới hệ bằng công, nhiệt hoặc bức xạ. Chuyển hóa là đổi dạng năng lượng bên trong/quá trình, ví dụ điện năng → cơ năng + nhiệt.',
  '**4. Chọn hệ và ranh giới**\nMuốn lập cân bằng năng lượng phải nêu hệ gồm những gì. Một lực có thể là ngoại lực nếu vật ngoài hệ, nhưng thành nội lực nếu gộp cả hai vật vào hệ.',
  '**5. Bảo toàn năng lượng**\nNăng lượng không tự sinh ra hoặc mất đi:\n$$E_{đầu}+E_{vào}=E_{cuối}+E_{ra}$$\nNăng lượng “hao phí” chỉ chuyển sang dạng ít hữu ích như nhiệt, âm, biến dạng.',
  '**6. Năng lượng có ích và hao phí**\n$$E_{vào}=E_{ích}+E_{hao}$$\nCách phân loại “có ích” phụ thuộc mục tiêu thiết bị; nhiệt là có ích ở ấm điện nhưng là hao phí ở động cơ.',
  '**7. Sơ đồ dòng năng lượng**\nMũi tên vào biểu diễn nguồn, các nhánh ra biểu diễn sản phẩm có ích và hao phí; độ lớn các nhánh phải phù hợp bảo toàn. Công suất không phải một dạng năng lượng mà là tốc độ truyền năng lượng.',
  '**8. Lỗi cần tránh**\n- Nói năng lượng bị mất hoàn toàn.\n- Nhầm công suất với năng lượng.\n- Cộng năng lượng ở các thời điểm mà không xác định hệ.\n- Cho mọi nhiệt sinh ra đều là hao phí.\n- Bỏ năng lượng truyền qua ranh giới.'
];

export const phy10Qt32Theory: string[] = [
  '**1. Công của lực không đổi**\nVới chuyển dời thẳng $\\vec s$ và lực không đổi:\n$$A=Fs\\cos\\alpha=\\vec F\\cdot\\vec s$$\n$\\alpha$ là góc **giữa lực và chuyển dời**, đơn vị J.',
  '**2. Dấu của công**\n$0\\le\\alpha<90^\\circ$: $A>0$; $90^\\circ<\\alpha\\le180^\\circ$: $A<0$; $\\alpha=90^\\circ$: $A=0$. Dấu mô tả chiều truyền năng lượng, không phải lực “âm”.',
  '**3. Lực cùng/ngược chiều**\nCùng chiều: $A=Fs$; ngược chiều: $A=-Fs$. Nếu lực chỉ có thành phần $F_{\\parallel}$ dọc chuyển dời thì $A=F_{\\parallel}s$.',
  '**4. Công của trọng lực**\nGần mặt đất:\n$$A_P=mg(h_1-h_2)=-\\Delta W_t$$\nChỉ phụ thuộc độ chênh cao, không phụ thuộc hình dạng đường đi.',
  '**5. Công của phản lực**\nNếu phản lực luôn vuông góc chuyển dời của điểm đặt thì công bằng 0. Không được kết luận mọi phản lực luôn không sinh công trong mọi hệ/cấu hình.',
  '**6. Công của ma sát trượt**\nTrên đoạn thẳng với $F_{mst}$ không đổi, ngược chuyển động:\n$$A_{ms}=-F_{mst}s$$\nNếu lực/đường đi đổi, chia chặng hoặc dùng dữ liệu phù hợp.',
  '**7. Công tổng**\n$$A_{hl}=\\sum_i A_i$$\nCó thể tính từng lực rồi cộng, hoặc tính công của hợp lực nếu hợp lực không đổi và cùng một chuyển dời.',
  '**8. Công từ đồ thị $F-s$**\nVới lực cùng phương chuyển dời, công bằng diện tích đại số dưới đồ thị $F-s$. Phần dưới trục cho công âm.',
  '**9. Lực biến thiên/lò xo**\nKhông dùng $A=Fs$ với một giá trị lực bất kì. Với lực tuyến tính có thể dùng lực trung bình/diện tích đồ thị; công lực đàn hồi liên hệ thế năng đàn hồi.',
  '**10. Lỗi cần tránh**\n- Luôn dùng $A=Fs$.\n- Lấy góc lực với phương ngang thay góc với chuyển dời.\n- Dùng quãng đường tổng khi hướng đổi mà không chia chặng.\n- Cho phản lực luôn sinh công 0 không xét điểm đặt.\n- Bỏ dấu công.'
];

export const phy10Qt33Theory: string[] = [
  '**1. Công suất**\nCông suất là tốc độ thực hiện công hoặc truyền năng lượng:\n$$P_{tb}=\\frac{A}{\\Delta t}=\\frac{\\Delta E}{\\Delta t}$$\nĐơn vị watt: $1W=1J/s$.',
  '**2. Ý nghĩa**\nCông suất lớn hơn nghĩa cùng công được thực hiện trong thời gian ngắn hơn, hoặc trong cùng thời gian truyền nhiều năng lượng hơn. Không tự có nghĩa tổng công luôn lớn hơn.',
  '**3. Công suất cơ học tức thời**\n$$P=\\vec F\\cdot\\vec v=Fv\\cos\\alpha$$\nChỉ viết $P=Fv$ khi lực cùng hướng vận tốc.',
  '**4. Công suất định mức**\nLà giá trị thiết bị được thiết kế hoạt động trong điều kiện quy định. Năng lượng tiêu thụ trong thời gian $t$:\n$$E=Pt$$\nNếu $P$ thay đổi, cần công suất trung bình hoặc dữ liệu theo thời gian.',
  '**5. Đơn vị**\n$1kW=10^3W$, $1MW=10^6W$. Nếu dùng watt thì thời gian bằng giây cho năng lượng J; nếu dùng kW và giờ thì năng lượng kWh.',
  '**6. So sánh máy**\nPhải so trên cùng công có ích hoặc cùng chức năng. Máy công suất lớn nhưng hiệu suất thấp có thể tiêu thụ nhiều hơn để tạo cùng đầu ra.',
  '**7. Bài toán nâng vật**\nNếu nâng đều khối lượng $m$ lên cao $h$ trong $t$:\n$$P_{ích}=\\frac{mgh}{t}=mgv$$\nNếu có hiệu suất, công suất vào lớn hơn công suất có ích.',
  '**8. Lỗi cần tránh**\n- Nhầm W với J.\n- Dùng giờ với W rồi ghi J.\n- Cho công suất lớn chắc chắn tiết kiệm năng lượng.\n- Dùng $P=Fv$ khi lực không cùng hướng mà bỏ $\\cos\\alpha$.\n- Bỏ hiệu suất.'
];

export const phy10Qt34Theory: string[] = [
  '**1. Hiệu suất**\nHiệu suất đo phần đầu vào trở thành đầu ra có ích:\n$$H=\\frac{E_{ích}}{E_{vào}}=\\frac{A_{ích}}{A_{toàn}}=\\frac{P_{ích}}{P_{vào}}$$\nNhân $100\\%$ khi biểu diễn phần trăm.',
  '**2. Miền giá trị**\nVới thiết bị thực thông thường:\n$$0\\le H\\le1\\quad\\text{hay}\\quad0\\%\\le H\\le100\\%$$\nKết quả vượt 100% thường do đảo tỉ số, sai đơn vị hoặc xác định sai đầu vào.',
  '**3. Dùng phần trăm trong tính toán**\n$80\\%=0{,}80$. Khi tìm năng lượng vào:\n$$E_{vào}=\\frac{E_{ích}}{H}$$\nKhi tìm có ích: $E_{ích}=HE_{vào}$.',
  '**4. Hao phí**\n$$E_{hao}=E_{vào}-E_{ích}=(1-H)E_{vào}$$\nHao phí vẫn là năng lượng chuyển thành nhiệt, âm, biến dạng..., không bị tiêu hủy.',
  '**5. Nhiều giai đoạn**\nNếu đầu ra giai đoạn trước là đầu vào giai đoạn sau:\n$$H_{toàn}=H_1H_2\\cdots H_n$$\nDùng các hiệu suất ở dạng thập phân.',
  '**6. Hiệu suất từ dữ liệu công suất**\nChỉ dùng $H=P_{ích}/P_{vào}$ khi hai công suất xét trong cùng điều kiện/thời gian vận hành ổn định.',
  '**7. So sánh giải pháp**\nHiệu suất cao không phải tiêu chí duy nhất; còn cần công suất, thời gian, tuổi thọ, chi phí và chức năng đầu ra.',
  '**8. Lỗi cần tránh**\n- Đảo tử mẫu.\n- Dùng 80 thay 0,8.\n- Cộng hiệu suất các giai đoạn.\n- Cho hao phí mất khỏi bảo toàn.\n- So hiệu suất của hai thiết bị làm chức năng khác nhau.'
];

export const phy10Qt35Theory: string[] = [
  '**1. Động năng**\n$$W_đ=\\frac12mv^2$$\nLà đại lượng vô hướng, không âm, đơn vị J. Nó phụ thuộc tốc độ, không phụ thuộc chiều vận tốc.',
  '**2. Quan hệ tỉ lệ**\nCùng $v$, động năng tỉ lệ $m$. Cùng $m$, động năng tỉ lệ $v^2$: tốc độ gấp đôi làm động năng gấp bốn.',
  '**3. Định lí động năng**\nCông của **hợp lực** bằng độ biến thiên động năng:\n$$A_{hl}=\\Delta W_đ=\\frac12mv_2^2-\\frac12mv_1^2$$',
  '**4. Công dương và âm**\n$A_{hl}>0$ làm tốc độ tăng; $A_{hl}<0$ làm tốc độ giảm; $A_{hl}=0$ giữ độ lớn vận tốc nhưng hướng có thể thay đổi.',
  '**5. Nhiều lực**\n$$A_{hl}=A_1+A_2+\\cdots$$\nPhải tính cả trọng lực, ma sát, lực kéo...; không dùng riêng công lực kéo nếu lực khác cũng sinh công.',
  '**6. Không cần thời gian**\nĐịnh lí hữu ích khi biết lực/quãng đường nhưng không có thời gian. Trên đường thẳng với hợp lực không đổi, nó tương thích $v^2-v_0^2=2a\\Delta x$.',
  '**7. Tìm vận tốc**\nSau khi tìm $v^2$, tốc độ là căn không âm. Chiều vận tốc phải suy riêng từ chuyển động; định lí động năng không giữ thông tin hướng.',
  '**8. Quy trình giải**\n- Chọn đầu–cuối.\n- Tính công từng lực có dấu.\n- Lập $\\sum A=\\Delta W_đ$.\n- Giải tốc độ/đại lượng.\n- Kiểm tra $W_đ\\ge0$ và điều kiện chuyển động.',
  '**9. Lỗi cần tránh**\n- Quên bình phương tốc độ.\n- Gán động năng âm theo vận tốc âm.\n- Dùng công một lực thay công hợp lực.\n- Dùng quãng đường sai cho công có hướng.\n- Suy chiều từ căn $v^2$.'
];

export const phy10Qt36Theory: string[] = [
  '**1. Thế năng và mốc**\nThế năng là năng lượng gắn với vị trí/cấu hình trong tương tác lực thế. Giá trị phụ thuộc mốc; độ biến thiên và dự đoán chuyển động không phụ thuộc cách chọn mốc nhất quán.',
  '**2. Thế năng trọng trường gần mặt đất**\n$$W_t=mgh$$\n$h$ là tọa độ cao so với mốc $W_t=0$. Nếu vật dưới mốc, $h$ và $W_t$ có thể âm.',
  '**3. Độ biến thiên và công trọng lực**\n$$\\Delta W_t=mg(h_2-h_1),\\qquad A_P=-\\Delta W_t=mg(h_1-h_2)$$\nTrọng lực sinh công dương khi vật đi xuống.',
  '**4. Không phụ thuộc đường đi**\nCông trọng lực giữa hai độ cao chỉ phụ thuộc đầu–cuối. Đi theo dốc dài hơn không làm công trọng lực khác nếu chênh cao giống nhau.',
  '**5. Thế năng đàn hồi**\nTrong giới hạn Hooke:\n$$W_{đh}=\\frac12kx^2$$\n$x$ là độ biến dạng so với trạng thái tự nhiên, có thể kéo hoặc nén; thế năng phụ thuộc $x^2$.',
  '**6. Công lực đàn hồi**\n$$A_{đh}=W_{đh,1}-W_{đh,2}=-\\Delta W_{đh}$$\nLò xo đi về tự nhiên thường sinh công dương lên vật.',
  '**7. Đổi mốc thế năng**\nĐổi mốc cộng cùng một hằng số vào mọi thế năng trọng trường nhưng không đổi $\\Delta W_t$. Không so giá trị thế năng dùng hai mốc khác nhau.',
  '**8. Lỗi cần tránh**\n- Cho thế năng luôn dương.\n- Dùng độ dài đường đi thay chênh cao.\n- Viết $kx/2$ thay $kx^2/2$.\n- Cho thế năng đàn hồi có dấu theo kéo/nén.\n- Đổi mốc giữa chừng.'
];

export const phy10Qt37Theory: string[] = [
  '**1. Cơ năng**\n$$W=W_đ+W_t$$\nNếu có cả trọng trường và lò xo, $W$ có thể gồm $W_đ+W_{t,trọng}+W_{t,đh}$.',
  '**2. Điều kiện bảo toàn**\nCơ năng bảo toàn khi chỉ lực thế sinh công, hoặc tổng công của các lực không thế bằng 0:\n$$W_1=W_2$$',
  '**3. Trọng lực**\nBỏ qua cản/ma sát:\n$$\\frac12mv_1^2+mgh_1=\\frac12mv_2^2+mgh_2$$\nKhối lượng thường rút gọn nếu chỉ có trọng trường.',
  '**4. Hệ lò xo**\n$$\\frac12mv_1^2+\\frac12kx_1^2=\\frac12mv_2^2+\\frac12kx_2^2$$\nCó trọng lực thì thêm $mgh$ với cùng mốc.',
  '**5. Có lực không thế**\nDạng tổng quát:\n$$W_2-W_1=A_{không\\ thế}$$\nMa sát trượt thường có công âm, làm cơ năng giảm; năng lượng chuyển thành nội năng.',
  '**6. Năng lượng nhiệt do ma sát**\nTrong mô hình đơn giản:\n$$\\Delta E_{nhiệt}=F_{mst}s=-A_{ms}$$\nDùng quãng đường tiếp xúc, không phải luôn là độ dịch chuyển đầu–cuối.',
  '**7. Chọn trạng thái**\nƯu tiên điểm có một đại lượng bằng 0: ở đỉnh $v=0$ tức thời, tại lò xo tự nhiên $x=0$, tại mốc $h=0$. Điều này giúp rút gọn.',
  '**8. Điều kiện tới được vị trí**\nNghiệm yêu cầu $v^2\\ge0$ và thỏa liên kết/tiếp xúc. Nếu năng lượng không đủ, vật dừng/đổi chiều trước vị trí giả định.',
  '**9. Quy trình giải**\n- Chọn hệ và mốc.\n- Liệt kê lực không thế.\n- Chọn hai trạng thái.\n- Viết $W_1+A_{không thế}=W_2$.\n- Rút gọn, giải và kiểm tra điều kiện.',
  '**10. Lỗi cần tránh**\n- Bảo toàn cơ năng khi có ma sát nhưng bỏ công ma sát.\n- Đồng nhất cơ năng với động năng.\n- Dùng hai mốc thế năng khác nhau.\n- Bỏ thế năng đàn hồi.\n- Chấp nhận $v^2<0$.'
];

export const phy10Qt38Theory: string[] = [
  '**1. Điện năng tiêu thụ**\nVới công suất gần không đổi:\n$$E=Pt$$\nDùng W và s cho J; dùng kW và h cho kWh.',
  '**2. Quy đổi kWh**\n$$1\\,kWh=3{,}6\\times10^6\\,J$$\nkW là công suất, kWh là năng lượng; không thể đổi trực tiếp giữa chúng nếu chưa có thời gian.',
  '**3. Đọc nhãn thiết bị**\nCông suất định mức cho tốc độ tiêu thụ trong điều kiện chuẩn, không phải năng lượng mỗi lần dùng. Năng lượng thực phụ thuộc thời gian và chế độ hoạt động.',
  '**4. Chi phí năng lượng**\n$$\\text{Chi phí}=E\\,(kWh)\\times\\text{đơn giá}$$\nNếu đơn giá theo bậc hoặc có phí khác, phải dùng đúng dữ liệu đề.',
  '**5. Sơ đồ dòng năng lượng**\nKiểm tra tổng đầu ra có ích và hao phí bằng đầu vào. Có thể tính hiệu suất từ độ rộng nhánh hoặc số liệu nếu cùng đơn vị.',
  '**6. So sánh thiết bị**\nSo trên cùng dịch vụ đầu ra: lượng nước nóng, độ sáng, quãng đường... Thiết bị công suất nhỏ dùng lâu có thể tiêu thụ nhiều hơn thiết bị công suất lớn dùng ngắn.',
  '**7. Đánh giá dữ liệu**\nChuẩn hóa theo thời gian, số người, sản lượng hoặc chức năng. Không kết luận từ một ngày bất thường; xem xu hướng, mùa vụ và độ không chắc chắn.',
  '**8. Thí nghiệm cơ năng**\nĐo $m,h,v$ hoặc biến dạng, tính năng lượng ở nhiều trạng thái và so sai lệch. Phải xét sai số đo và năng lượng chưa được mô hình hóa như quay, âm, nhiệt.',
  '**9. Giải pháp sử dụng hợp lí**\nGiảm thời gian không cần thiết, chọn thiết bị hiệu suất phù hợp, bảo trì và thay đổi hành vi. Cần cân bằng năng lượng, chi phí, độ bền và tác động môi trường.',
  '**10. Lỗi cần tránh**\n- Nhầm kW với kWh.\n- Bỏ thời gian sử dụng.\n- So công suất thay năng lượng.\n- Gọi mọi phần chênh là “mất” mà không xét dạng khác.\n- So thiết bị không cùng chức năng.'
];

export const g10PhysicsModule3TheoryByQuestionTypeId: Record<string, string[]> = {
  'phy10-qt31': phy10Qt31Theory,
  'phy10-qt32': phy10Qt32Theory,
  'phy10-qt33': phy10Qt33Theory,
  'phy10-qt34': phy10Qt34Theory,
  'phy10-qt35': phy10Qt35Theory,
  'phy10-qt36': phy10Qt36Theory,
  'phy10-qt37': phy10Qt37Theory,
  'phy10-qt38': phy10Qt38Theory
};
