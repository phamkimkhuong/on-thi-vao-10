# Blueprint dữ liệu Hóa học 11 — Chương 1: Cân bằng hóa học

## 1. Trạng thái tài liệu

- Đối tượng: học sinh lớp 11 từ năm học 2026–2027.
- SGK chính: **Hóa học 11 — Kết nối tri thức với cuộc sống**.
- Phạm vi: Bài 1, Bài 2 và Bài 3 ôn tập Chương 1.
- Chuẩn nội dung: Chương trình GDPT 2018 môn Hóa học và yêu cầu cần đạt Hóa học 11.
- Mục đích: làm nguồn thiết kế cho `LearningOutcome`, `LearningMisconception`, `QuestionType`, ngân hàng câu hỏi và assessment blueprint.
- Trạng thái: đang triển khai theo vertical slice.
- Đã triển khai giai đoạn 1:
  - `module0_bridge`: cổng chẩn đoán phương trình, nồng độ, dữ liệu tốc độ, enthalpy và logarit.
  - `module1_equilibrium`: đã triển khai phản ứng thuận nghịch, cân bằng động, dữ liệu cân bằng, \(K_C\), chuyển dịch theo nồng độ, áp suất, nhiệt độ, vai trò xúc tác, đánh đổi công nghiệp và thí nghiệm \(NO_2/N_2O_4\).
  - Mười bốn dạng `chem11-qt01`–`chem11-qt14`, mỗi dạng 12 câu theo mức 4 dễ – 5 vừa – 3 khó.
  - Tổng cộng 174 câu và 174 lời giải tính cả cầu nối; Bài 1 có 72 câu, Bài 2 có đủ 96 câu.
- Bài 2 đã hoàn thành vertical slice cốt lõi. Phần tiếp theo của Chương 1 là Bài 3 — ôn tập tích hợp và chapter checkpoint, không tạo outcome kiến thức mới.

## 2. Quyết định thiết kế

### 2.1. Thứ tự học

Giao diện và navigation bám đúng Kết nối tri thức:

1. Bài 1 — Khái niệm về cân bằng hóa học.
2. Bài 2 — Cân bằng trong dung dịch nước.
3. Bài 3 — Ôn tập chương 1.

`LearningOutcome` mới là đơn vị mastery. Bài 3 không tạo kiến thức mới và không tạo outcome chỉ vì tồn tại như một bài riêng trong SGK; nó tổng hợp, liên kết và đánh giá lại outcome của Bài 1–2.

### 2.2. Chuẩn ưu tiên

Khi nguồn diễn đạt khác nhau, ưu tiên theo thứ tự:

1. Yêu cầu cần đạt của Chương trình GDPT môn Hóa học.
2. SGK, SGV và tài liệu tập huấn Hóa học 11 Kết nối tri thức đang lưu hành năm học 2026–2027.
3. Cấu trúc kiểm tra chính thức và bảng đặc tả của cơ quan quản lý giáo dục.
4. SBT Kết nối tri thức và học liệu chính thống của NXB.
5. Cánh Diều, Chân trời sáng tạo và tài liệu giáo viên chỉ dùng tham khảo khi biên soạn.

### 2.3. Phạm vi cốt lõi

Không tự động đưa các nội dung luyện thi nâng cao sau vào mastery cốt lõi:

- Bài toán thiết lập và giải hệ cân bằng nhiều ẩn phức tạp.
- Tính pH acid/base yếu bằng hằng số phân li khi đề đòi hỏi gần đúng nâng cao ngoài SGK.
- Dung dịch đệm và phương trình Henderson–Hasselbalch.
- Đường cong chuẩn độ đầy đủ theo từng miền pH.
- Chuẩn độ đa nấc, chuẩn độ ngược hoặc hỗn hợp nhiều acid/base.
- Bài toán bảo toàn điện tích nhiều ion được biến thành mẹo luyện thi.
- Tính nhiệt động học của hằng số cân bằng.

Các nội dung này chỉ được thêm với `scope: 'advanced'` và không làm tăng phần trăm hoàn thành Chương 1 cốt lõi.

## 3. Cấu trúc topic và lesson

```text
chem11-t1 — Chương 1: Cân bằng hóa học
├── chem11-l1 — Bài 1: Khái niệm về cân bằng hóa học
│   ├── Phản ứng thuận nghịch và cân bằng động
│   ├── Hằng số cân bằng KC
│   ├── Chuyển dịch cân bằng
│   └── Thí nghiệm và vận dụng Le Chatelier
├── chem11-l2 — Bài 2: Cân bằng trong dung dịch nước
│   ├── Sự điện li
│   ├── Acid–base Brønsted–Lowry
│   ├── Cân bằng của nước và pH
│   ├── Chất chỉ thị và ý nghĩa thực tiễn của pH
│   ├── Thủy phân ion trong nước
│   └── Chuẩn độ acid–base
└── chem11-l3 — Bài 3: Ôn tập chương 1
    ├── Bản đồ liên kết outcome
    ├── Luyện tập tích hợp
    └── Chapter checkpoint
```

## 4. Outcome cầu nối trước Chương 1

Outcome cầu nối không phải điều kiện khóa toàn bộ chương. Học sinh chỉ nhận remediation tương ứng khi phép chẩn đoán cho thấy lỗ hổng thật sự.

| ID | Năng lực cầu nối | Nguồn hiện có | Dùng cho |
|---|---|---|---|
| `chem11-bridge-equation` | Đọc hệ số, trạng thái chất và cân bằng phương trình | `chem10-bridge-equation` | KC, điện li, thủy phân, chuẩn độ |
| `chem11-bridge-concentration` | Nồng độ mol, pha loãng và tỉ lệ lượng chất | `chem10-bridge-ratio`, `chem10-bridge-mole` | KC, pH, chuẩn độ |
| `chem11-bridge-rate-graph` | Đọc đồ thị nồng độ–thời gian và phân biệt nồng độ với tốc độ | `chem10-rate-average`, `chem10-rate-graph` | Cân bằng động |
| `chem11-bridge-rate-factors` | Phân tích nhiệt độ, nồng độ, áp suất và xúc tác đối với tốc độ | `chem10-rate-factors`, `chem10-rate-catalyst` | Phân biệt tốc độ với vị trí cân bằng |
| `chem11-bridge-enthalpy` | Phân biệt phản ứng tỏa nhiệt, thu nhiệt và dấu của ΔH | `chem10-energy-enthalpy` | Ảnh hưởng của nhiệt độ |
| `chem11-bridge-logarithm` | Đổi giữa \(10^{-a}\), logarit thập phân và số mũ | Chưa có outcome Hóa 10 tương ứng | pH |

Khuyến nghị: `chem11-bridge-*` nên là alias/remediation mapping sang outcome Hóa 10, trừ `chem11-bridge-logarithm` cần một mini diagnostic liên môn Toán–Hóa.

## 5. Learning outcome — Bài 1

### Mục A — Phản ứng thuận nghịch và cân bằng động

| ID | Outcome quan sát được | Tiền đề | Bằng chứng bắt buộc | Mức độ | Critical |
|---|---|---|---|---|---:|
| `chem11-eq-reversible` | Nhận diện và biểu diễn phản ứng thuận nghịch; phân biệt chiều thuận với chiều nghịch trong cùng điều kiện | `chem11-bridge-equation` | `recognition`, `representation` | Nhận biết–Thông hiểu | Có |
| `chem11-eq-dynamic` | Giải thích trạng thái cân bằng ở cấp vĩ mô và vi mô: tốc độ thuận bằng tốc độ nghịch, thành phần hệ ổn định theo thời gian nhưng phản ứng không dừng | `chem11-eq-reversible`, `chem11-bridge-rate-graph` | `explanation`, `data` | Thông hiểu | Có |
| `chem11-eq-data` | Xác định thời điểm/hệ đã đạt cân bằng từ bảng hoặc đồ thị nồng độ–thời gian và giải thích bằng bằng chứng | `chem11-eq-dynamic` | `data`, `explanation` | Thông hiểu–Vận dụng | Có |

### Mục B — Hằng số cân bằng

| ID | Outcome quan sát được | Tiền đề | Bằng chứng bắt buộc | Mức độ | Critical |
|---|---|---|---|---|---:|
| `chem11-eq-kc-expression` | Viết đúng biểu thức \(K_C\) từ phương trình cân bằng, dùng hệ số làm số mũ và xử lý đúng chất rắn/chất lỏng tinh khiết theo phạm vi SGK | `chem11-eq-reversible`, `chem11-bridge-concentration` | `representation`, `explanation` | Thông hiểu | Có |
| `chem11-eq-kc-calculation` | Tính \(K_C\) từ nồng độ của các chất tại trạng thái cân bằng trong hệ đơn giản; phân biệt nồng độ cân bằng với nồng độ ban đầu | `chem11-eq-kc-expression`, `chem11-bridge-concentration` | `calculation`, `representation` | Thông hiểu–Vận dụng | Có |
| `chem11-eq-kc-meaning` | Diễn giải định tính giá trị \(K_C\) lớn/nhỏ như mức độ ưu thế tương đối của sản phẩm/chất đầu ở cân bằng, không đồng nhất với tốc độ phản ứng | `chem11-eq-kc-expression` | `explanation`, `application` | Thông hiểu | Không |

Lưu ý phạm vi: outcome cốt lõi yêu cầu viết và diễn giải biểu thức. Bài toán tính nồng độ cân bằng nhiều ẩn chỉ thuộc `advanced` nếu vượt bài tập chuẩn của SGK.

### Mục C — Chuyển dịch cân bằng

| ID | Outcome quan sát được | Tiền đề | Bằng chứng bắt buộc | Mức độ | Critical |
|---|---|---|---|---|---:|
| `chem11-eq-shift-concentration` | Dự đoán và giải thích chiều chuyển dịch khi thêm/bớt chất hoặc thay đổi nồng độ | `chem11-eq-dynamic` | `explanation`, `application` | Thông hiểu–Vận dụng | Có |
| `chem11-eq-shift-pressure` | Dự đoán ảnh hưởng của thay đổi áp suất/thể tích đối với cân bằng khí dựa trên tổng số mol khí hai vế; nhận diện trường hợp không chuyển dịch | `chem11-eq-dynamic`, `chem11-bridge-equation` | `representation`, `application` | Thông hiểu–Vận dụng | Có |
| `chem11-eq-shift-temperature` | Dự đoán ảnh hưởng của nhiệt độ bằng cách xem nhiệt như thành phần của chiều thu nhiệt/tỏa nhiệt | `chem11-eq-dynamic`, `chem11-bridge-enthalpy` | `explanation`, `application` | Thông hiểu–Vận dụng | Có |
| `chem11-eq-rate-vs-position` | Phân biệt yếu tố làm thay đổi tốc độ đạt cân bằng với yếu tố làm thay đổi vị trí cân bằng; giải thích vì sao xúc tác không đổi thành phần cân bằng | `chem11-eq-dynamic`, `chem11-bridge-rate-factors` | `explanation`, `data` | Thông hiểu | Có |
| `chem11-eq-experiment-temperature` | Phân tích hoặc thực hiện an toàn thí nghiệm ảnh hưởng nhiệt độ tới cân bằng \(2NO_2 \rightleftharpoons N_2O_4\); mô tả hiện tượng, biến độc lập, biến kiểm soát và kết luận | `chem11-eq-shift-temperature` | `experiment`, `data`, `explanation` | Vận dụng | Có |
| `chem11-eq-le-chatelier-context` | Vận dụng Le Chatelier để giải thích lựa chọn điều kiện trong một bối cảnh sản xuất hoặc đời sống, đồng thời nhận diện đánh đổi giữa cân bằng, tốc độ, an toàn và chi phí | `chem11-eq-shift-concentration`, `chem11-eq-shift-pressure`, `chem11-eq-shift-temperature`, `chem11-eq-rate-vs-position` | `application`, `explanation` | Vận dụng | Không |

## 6. Learning outcome — Bài 2

### Mục A — Sự điện li

| ID | Outcome quan sát được | Tiền đề | Bằng chứng bắt buộc | Mức độ | Critical |
|---|---|---|---|---|---:|
| `chem11-aq-electrolyte` | Phân biệt sự điện li, chất điện li và chất không điện li từ mô tả hạt hoặc dữ liệu dẫn điện | `chem10-bond-ionic`, `chem11-bridge-equation` | `recognition`, `data`, `explanation` | Nhận biết–Thông hiểu | Có |
| `chem11-aq-dissociation` | Viết phương trình điện li đúng điện tích, hệ số và mũi tên cho các chất điển hình trong phạm vi SGK | `chem11-aq-electrolyte`, `chem11-bridge-equation` | `representation`, `explanation` | Thông hiểu | Có |
| `chem11-aq-strong-weak` | Phân biệt điện li mạnh/yếu với dung dịch đậm đặc/loãng; liên hệ loại mũi tên với mức độ điện li | `chem11-aq-dissociation` | `explanation`, `application` | Thông hiểu | Có |

### Mục B — Acid–base Brønsted–Lowry

| ID | Outcome quan sát được | Tiền đề | Bằng chứng bắt buộc | Mức độ | Critical |
|---|---|---|---|---|---:|
| `chem11-aq-bronsted-role` | Xác định chất cho proton là acid và chất nhận proton là base trong một phản ứng cụ thể, kể cả khi chất không có dạng acid/base Arrhenius quen thuộc | `chem11-aq-dissociation` | `recognition`, `explanation` | Thông hiểu | Có |
| `chem11-aq-conjugate-pair` | Xác định cặp acid–base liên hợp và giải thích hai thành viên khác nhau đúng một proton | `chem11-aq-bronsted-role` | `representation`, `explanation` | Thông hiểu | Có |
| `chem11-aq-amphiprotic` | Phân tích vai trò lưỡng tính của nước hoặc ion điển hình theo phản ứng đang xét, không gán vai trò cố định cho một chất | `chem11-aq-bronsted-role`, `chem11-aq-conjugate-pair` | `explanation`, `application` | Thông hiểu–Vận dụng | Không |

### Mục C — Cân bằng của nước và pH

| ID | Outcome quan sát được | Tiền đề | Bằng chứng bắt buộc | Mức độ | Critical |
|---|---|---|---|---|---:|
| `chem11-aq-water-equilibrium` | Mô tả sự tự điện li của nước, dùng \([H^+]\), \([OH^-]\) và \(K_w\) ở điều kiện SGK để phân loại môi trường acid, base, trung tính | `chem11-aq-bronsted-role` | `representation`, `explanation` | Thông hiểu | Có |
| `chem11-aq-ph-conversion` | Chuyển đổi đúng giữa pH và \([H^+]\) bằng \(pH=-\lg[H^+]\), \([H^+]=10^{-pH}\) | `chem11-aq-water-equilibrium`, `chem11-bridge-logarithm` | `calculation`, `representation` | Thông hiểu–Vận dụng | Có |
| `chem11-aq-ph-simple-solution` | Xác định pH của dung dịch acid/base mạnh đơn giản trong phạm vi giả thiết SGK; ghi rõ giả thiết và đơn vị nồng độ | `chem11-aq-ph-conversion`, `chem11-bridge-concentration` | `calculation`, `explanation` | Vận dụng | Có |
| `chem11-aq-indicator` | Chọn, sử dụng hoặc đọc kết quả chất chỉ thị phổ biến để kết luận môi trường/khoảng pH; không coi màu chỉ thị là phép đo pH chính xác tuyệt đối | `chem11-aq-ph-conversion` | `experiment`, `data`, `application` | Thông hiểu–Vận dụng | Có |
| `chem11-aq-ph-context` | Giải thích ý nghĩa của pH trong sức khỏe, đất, nước hoặc sinh trưởng sinh vật từ dữ liệu/bối cảnh được cung cấp | `chem11-aq-ph-conversion` | `data`, `application`, `explanation` | Vận dụng | Không |

### Mục D — Thủy phân ion và ý nghĩa thực tiễn

| ID | Outcome quan sát được | Tiền đề | Bằng chứng bắt buộc | Mức độ | Critical |
|---|---|---|---|---|---:|
| `chem11-aq-ion-hydrolysis` | Dùng cân bằng trong nước để giải thích môi trường dung dịch chứa ion \(Al^{3+}\), \(Fe^{3+}\), \(CO_3^{2-}\) và liên hệ các ứng dụng/vấn đề thực tiễn nêu trong chương trình | `chem11-aq-bronsted-role`, `chem11-aq-water-equilibrium` | `representation`, `explanation`, `application` | Thông hiểu–Vận dụng | Có |

Giới hạn: không mở rộng outcome này thành toàn bộ lý thuyết thủy phân muối, độ tan hay bài toán nhiều cân bằng cạnh tranh.

### Mục E — Chuẩn độ acid–base

| ID | Outcome quan sát được | Tiền đề | Bằng chứng bắt buộc | Mức độ | Critical |
|---|---|---|---|---|---:|
| `chem11-aq-titration-principle` | Trình bày nguyên tắc xác định nồng độ acid/base mạnh bằng dung dịch chuẩn; phân biệt chất phân tích, dung dịch chuẩn, điểm tương đương và điểm kết thúc | `chem11-aq-ph-conversion`, `chem11-bridge-concentration` | `explanation`, `representation` | Thông hiểu | Có |
| `chem11-aq-titration-apparatus` | Chọn và đọc đúng dụng cụ chuẩn độ; xác định thao tác rửa, tráng, đọc thể tích và sử dụng chỉ thị an toàn | `chem11-aq-titration-principle` | `experiment`, `recognition`, `explanation` | Thông hiểu–Vận dụng | Có |
| `chem11-aq-titration-data` | Thực hiện hoặc phân tích bộ số liệu chuẩn độ NaOH bằng HCl; loại phép đo thô/bất thường có lý do và chọn các kết quả phù hợp | `chem11-aq-titration-apparatus` | `experiment`, `data`, `explanation` | Vận dụng | Có |
| `chem11-aq-titration-calculation` | Tính nồng độ acid/base mạnh từ phương trình phản ứng và thể tích chuẩn độ; không dùng máy móc công thức \(C_1V_1=C_2V_2\) khi hệ số không 1:1 | `chem11-aq-titration-principle`, `chem11-bridge-equation`, `chem11-bridge-concentration` | `calculation`, `explanation` | Vận dụng | Có |

## 7. Danh mục misconception

| ID | Outcome chính | Ngộ nhận cần phát hiện | Sửa chữa bản chất | Severity |
|---|---|---|---|---|
| `chem11-mis-eq-stops` | `chem11-eq-dynamic` | Ở cân bằng, phản ứng thuận và nghịch đều dừng | Hai chiều vẫn xảy ra, tốc độ hai chiều bằng nhau | Critical |
| `chem11-mis-eq-equal-concentration` | `chem11-eq-dynamic` | Nồng độ chất đầu và sản phẩm phải bằng nhau | Nồng độ ổn định theo thời gian nhưng không nhất thiết bằng nhau | Critical |
| `chem11-mis-eq-equal-amount` | `chem11-eq-reversible` | Phản ứng thuận nghịch luôn tạo lượng chất hai phía bằng nhau | Chiều phản ứng và thành phần cân bằng phụ thuộc hệ, không suy ra bằng nhau | Normal |
| `chem11-mis-kc-coefficient` | `chem11-eq-kc-expression` | Hệ số phương trình được nhân vào nồng độ | Hệ số trở thành số mũ trong biểu thức KC | Critical |
| `chem11-mis-kc-pure-phase` | `chem11-eq-kc-expression` | Mọi chất trong phương trình đều phải xuất hiện trong KC | Chất rắn và chất lỏng tinh khiết không xuất hiện theo phạm vi SGK | Critical |
| `chem11-mis-kc-rate` | `chem11-eq-kc-meaning` | KC lớn nghĩa là phản ứng xảy ra nhanh | KC mô tả thành phần cân bằng, không mô tả tốc độ | Critical |
| `chem11-mis-kc-concentration-change` | Các outcome chuyển dịch | Thêm chất làm thay đổi giá trị KC | Ở nhiệt độ xác định, hệ chuyển dịch để tái lập cân bằng; KC không đổi | Critical |
| `chem11-mis-pressure-always-shifts` | `chem11-eq-shift-pressure` | Tăng áp suất luôn làm cân bằng khí chuyển dịch | Chỉ chuyển dịch khi tổng số mol khí hai vế khác nhau | Critical |
| `chem11-mis-temperature-rule` | `chem11-eq-shift-temperature` | Tăng nhiệt độ luôn làm cân bằng chuyển dịch thuận | Hệ ưu tiên chiều thu nhiệt; cần xác định chiều tỏa/thu nhiệt | Critical |
| `chem11-mis-catalyst-shifts` | `chem11-eq-rate-vs-position` | Xúc tác làm tăng hiệu suất cân bằng | Xúc tác làm hai chiều đạt cân bằng nhanh hơn, không đổi vị trí cân bằng | Critical |
| `chem11-mis-electrolyte-solubility` | `chem11-aq-electrolyte` | Chất tan trong nước thì luôn là chất điện li | Chất phải tạo ion trong dung dịch mới là chất điện li | Critical |
| `chem11-mis-strong-concentrated` | `chem11-aq-strong-weak` | Điện li mạnh nghĩa là dung dịch đậm đặc | Mạnh/yếu nói về mức độ điện li; đậm/loãng nói về nồng độ | Critical |
| `chem11-mis-acid-hydrogen` | `chem11-aq-bronsted-role` | Cứ có H là acid, cứ có OH là base | Vai trò Brønsted phụ thuộc khả năng cho/nhận proton trong phản ứng | Critical |
| `chem11-mis-fixed-role` | `chem11-aq-amphiprotic` | Một chất luôn chỉ là acid hoặc chỉ là base | Vai trò phụ thuộc đối tác phản ứng; có chất lưỡng tính | Normal |
| `chem11-mis-conjugate-any-pair` | `chem11-aq-conjugate-pair` | Hai chất cùng phản ứng là một cặp liên hợp | Một cặp liên hợp phải khác nhau đúng một proton | Critical |
| `chem11-mis-ph-linear` | `chem11-aq-ph-conversion` | [H+] tăng 2 lần thì pH tăng/giảm 2 đơn vị | pH là thang logarit; thay đổi 10 lần tương ứng 1 đơn vị | Critical |
| `chem11-mis-indicator-exact` | `chem11-aq-indicator` | Màu chỉ thị cho giá trị pH chính xác | Chỉ thị thường cho môi trường hoặc khoảng chuyển màu | Normal |
| `chem11-mis-hydrolysis-dissociation` | `chem11-aq-ion-hydrolysis` | Điện li và thủy phân ion là cùng một quá trình | Điện li tạo ion; thủy phân là tương tác của ion với nước | Critical |
| `chem11-mis-endpoint-equivalence` | `chem11-aq-titration-principle` | Điểm kết thúc luôn trùng tuyệt đối điểm tương đương | Điểm kết thúc là tín hiệu quan sát; cần chọn chỉ thị để sai lệch nhỏ | Critical |
| `chem11-mis-titration-volume-formula` | `chem11-aq-titration-calculation` | Mọi chuẩn độ đều dùng trực tiếp C1V1=C2V2 | Phải dựa vào tỉ lệ mol của phương trình phản ứng | Critical |
| `chem11-mis-burette-reading` | `chem11-aq-titration-apparatus` | Thể tích dùng bằng số đọc cuối hoặc đọc burette như ống đong thông thường | Thể tích dùng là số đọc cuối trừ đầu, đọc đúng chiều thang và mặt khum | Critical |

## 8. Blueprint dạng câu hỏi

| ID đề xuất | Dạng bài | Outcome trọng tâm | Response type ưu tiên | Bằng chứng |
|---|---|---|---|---|
| `chem11-qt01` | Phản ứng thuận nghịch và cân bằng động | `chem11-eq-reversible`, `chem11-eq-dynamic` | `single_choice`, `true_false_cluster` | recognition, explanation |
| `chem11-qt02` | Đồ thị/bảng nồng độ–thời gian | `chem11-eq-data` | `true_false_cluster`, `short_answer` | data, explanation |
| `chem11-qt03` | Viết, tính và diễn giải KC | `chem11-eq-kc-expression`, `chem11-eq-kc-calculation`, `chem11-eq-kc-meaning` | `single_choice`, `short_answer`, `constructed_response` | representation, calculation, explanation |
| `chem11-qt04` | Le Chatelier theo nồng độ và áp suất | Các outcome chuyển dịch tương ứng | `single_choice`, `true_false_cluster` | application, explanation |
| `chem11-qt05` | Nhiệt độ, xúc tác và đánh đổi công nghiệp | `chem11-eq-shift-temperature`, `chem11-eq-rate-vs-position`, `chem11-eq-le-chatelier-context` | `true_false_cluster`, `constructed_response` | application, explanation |
| `chem11-qt06` | Phân tích thí nghiệm chuyển dịch cân bằng | `chem11-eq-experiment-temperature` | `ordering`, `true_false_cluster`, `constructed_response` | experiment, data |
| `chem11-qt07` | Sự điện li và phương trình điện li | `chem11-aq-electrolyte`, `chem11-aq-dissociation`, `chem11-aq-strong-weak` | `single_choice`, `short_answer` | recognition, representation, data |
| `chem11-qt08` | Acid–base Brønsted–Lowry | `chem11-aq-bronsted-role`, `chem11-aq-conjugate-pair`, `chem11-aq-amphiprotic` | `single_choice`, `constructed_response` | representation, explanation, application |
| `chem11-qt09` | Cân bằng nước và tính pH | `chem11-aq-water-equilibrium`, `chem11-aq-ph-conversion`, `chem11-aq-ph-simple-solution` | `single_choice` ở kho luyện hiện tại; mở rộng `short_answer` khi có bộ chấm | calculation, explanation |
| `chem11-qt10` | Chỉ thị và pH thực tiễn | `chem11-aq-indicator`, `chem11-aq-ph-context` | `single_choice` ở kho luyện hiện tại; assessment có thể dùng `true_false_cluster` | experiment, data, application |
| `chem11-qt11` | Cân bằng ion trong nước và ứng dụng | `chem11-aq-ion-hydrolysis` | `single_choice` ở kho luyện hiện tại; assessment có thể dùng `true_false_cluster`, `constructed_response` | representation, experiment, data, application |
| `chem11-qt12` | Nguyên tắc và thao tác chuẩn độ | `chem11-aq-titration-principle`, `chem11-aq-titration-apparatus` | `single_choice` ở kho luyện hiện tại; assessment có thể dùng `ordering`, `true_false_cluster` | experiment, data, explanation |
| `chem11-qt13` | Xử lý số liệu chuẩn độ | `chem11-aq-titration-data` | `single_choice` ở kho luyện hiện tại; assessment có thể dùng `true_false_cluster`, `short_answer` | data, experiment, calculation |
| `chem11-qt14` | Tính toán chuẩn độ | `chem11-aq-titration-calculation` | `single_choice` ở kho luyện hiện tại; assessment có thể dùng `short_answer`, `constructed_response` | calculation, data, explanation |

Không dùng `difficulty` của `QuestionType` để thay dependency graph. Một dạng bài có thể có câu dễ, vừa và khó; độ khó thật thuộc từng `Question`.

## 9. Quy tắc mastery

### 9.1. Outcome thường

Một outcome chỉ được coi là `mastered` khi:

- Điểm mastery đạt ít nhất 80.
- Có bằng chứng từ tối thiểu hai `evidenceTypes` đã khai báo.
- Không còn misconception critical được phát hiện trong hai lượt gần nhất.
- Có ít nhất một lần trả lời đúng không dùng lại chính câu đã xem lời giải.

### 9.2. Outcome thí nghiệm

Outcome có `experiment` không được mastered chỉ bằng câu hỏi nhớ tên dụng cụ. Cần ít nhất:

- Một bằng chứng về quy trình/an toàn/kiểm soát biến.
- Một bằng chứng phân tích hiện tượng hoặc số liệu.
- Một kết luận phù hợp với dữ liệu.

### 9.3. Outcome tính toán

Outcome có `calculation` cần:

- Đáp án cuối đúng.
- Biểu diễn hoặc giải thích cho thấy chọn đúng mô hình hóa học.
- Không chỉ áp dụng công thức ghi nhớ sai bản chất.

## 10. Kế hoạch ngân hàng câu hỏi pilot

Mục tiêu pilot không phải số lượng lớn mà là phủ đủ outcome và misconception.

| Nhóm | Số câu tối thiểu | Ghi chú |
|---|---:|---|
| Diagnostic cầu nối | 12 | Hiện có 6 câu; cần mở rộng trước khi phát hành toàn khóa |
| Bài 1 — core practice | 72 | Đã đủ 6 dạng × 12 câu, ưu tiên đồ thị, giải thích và thí nghiệm |
| Bài 2 — core practice | 96 | Đã đủ 8 dạng × 12 câu |
| Bài 3 — luyện tập tích hợp | 18 | Không lặp nguyên văn câu đã luyện |
| Chapter checkpoint Form A | 24 lệnh hỏi | Form kiểm tra riêng |
| Chapter checkpoint Form B | 24 lệnh hỏi | Song song về outcome và độ khó |

Các form checkpoint không tái sử dụng câu practice đã hiện lời giải cho cùng học sinh.

Tỉ lệ mục tiêu cho kho core practice ban đầu:

- 25% `recognition`/`representation`.
- 25% `explanation`.
- 20% `calculation`.
- 15% `data`.
- 10% `experiment`.
- 5% `application` tích hợp nhiều outcome.

Tỉ lệ này là theo bằng chứng chính, không phải tỷ lệ điểm bắt buộc của đề trường.

## 11. Chapter checkpoint đề xuất

Checkpoint Chương 1 là bài kiểm tra theo chương, không giả làm đề tốt nghiệp đầy đủ.

```ts
{
  kind: 'module_checkpoint',
  duration: 35,
  totalPoints: 10,
  sections: [
    { responseType: 'multiple_choice', itemCount: 12, points: 3 },
    { responseType: 'true_false_cluster', itemCount: 3, points: 4 },
    { responseType: 'short_answer', itemCount: 3, points: 3 }
  ]
}
```

Lưu ý: `itemCount` và `points` cần được validator đối chiếu với quy tắc chấm thật của app. Con số trên là blueprint nội dung, chưa phải cấu hình production cuối cùng.

Ma trận nội dung mục tiêu:

- 40% Bài 1.
- 60% Bài 2.
- 30% nhận thức hóa học.
- 30% tìm hiểu tự nhiên dưới góc độ hóa học.
- 40% vận dụng kiến thức, kỹ năng.

Không cố ép checkpoint của một chương thành đúng 40 lệnh hỏi/50 phút của bài thi tốt nghiệp toàn khóa.

## 12. Yêu cầu media và UX

### 12.1. Media bắt buộc

- Đồ thị nồng độ–thời gian có alt text mô tả trục nhưng không tiết lộ đáp án.
- Sơ đồ mức hạt cho cân bằng động.
- Ảnh/mô phỏng màu của hệ \(NO_2/N_2O_4\), có lưu ý độc tính và không khuyến khích tự làm ngoài phòng thí nghiệm.
- Sơ đồ bộ dụng cụ chuẩn độ.
- Ảnh burette đủ rõ để đọc mặt khum và chiều thang.
- Bảng số liệu chuẩn độ có caption và đơn vị cho từng cột.
- Thang màu chỉ thị có mô tả văn bản cho người không phân biệt màu.

### 12.2. Trải nghiệm học

- Header hiển thị: `Chương 1 → Bài 1/Bài 2 → outcome hiện tại`.
- Học sinh nhìn thấy tên bài theo SGK; hệ thống theo dõi outcome ở tầng dưới.
- Không khóa Bài 1 chỉ vì học sinh yếu một phép log dùng ở Bài 2.
- Khi sai do tiền đề, CTA phải đưa về mini lesson cụ thể, không đưa về toàn bộ Hóa 10.
- Phản hồi câu sai phải nói rõ sai ở mô hình hóa học, phép tính hay đọc dữ liệu.
- Outcome thí nghiệm phải có cảnh báo an toàn trước thao tác, không đặt cảnh báo sau lời giải.

## 13. Ghi chú tích hợp với data Grade 11 hiện có

Workspace hiện đã có prototype `src/data/grade11/chemistry/modules/module0_intro/` với:

- Topic `chem11-t0` mang tên “Khái niệm về cân bằng hóa học”.
- Outcome `CHEM11-M0-O01` gộp viết biểu thức và tính giá trị KC.
- Question type `chem11-qt1` tập trung vào bảng B–P–C và tính KC.

Prototype này hữu ích để kiểm tra pipeline nhưng chưa thể làm cấu trúc chuẩn của Chương 1 vì:

1. `module0_intro` đang chứa kiến thức cốt lõi Bài 1 thay vì cầu nối/nhập môn.
2. Outcome hiện tại gộp biểu diễn KC và tính toán; blueprint tách năng lực viết/giải thích khỏi bài toán định lượng nâng cao.
3. Chưa có outcome về phản ứng thuận nghịch và cân bằng động đứng trước KC.
4. ID đang trộn hai convention: outcome viết hoa `CHEM11-M0-O01`, còn topic/question viết thường `chem11-*`.
5. Một câu tính KC chưa đủ bằng chứng mastery cho toàn bộ khái niệm hằng số cân bằng.

Trước khi refactor cần kiểm tra ID `CHEM11-M0-O01` đã được lưu trong attempt/Firestore production hay chưa:

- Nếu chưa có dữ liệu người học: đổi prototype sang cấu trúc Chương 1 mới ngay để tránh nợ migration.
- Nếu đã có dữ liệu: giữ alias/migration map từ ID cũ sang outcome mới; không xóa hoặc đổi ID âm thầm.

Không sửa trực tiếp prototype trong giai đoạn blueprint để tránh ghi đè phần người dùng đang phát triển.

## 14. Gap của schema hiện tại

Schema hiện tại đã hỗ trợ phần lớn nhu cầu qua `LearningOutcome`, `QuestionStimulus`, `QuestionDataTable`, `QuestionMedia`, `competency`, `cognitiveLevel` và các response type.

Trước khi tạo data Hóa 11, cần quyết định các bổ sung nhỏ sau:

```ts
interface LearningOutcome {
  curriculumRef?: {
    programId: string;
    requirementCode?: string;
    sourceUrl: string;
  };
  primaryTextbook?: {
    series: 'ket-noi-tri-thuc';
    grade: 11;
    chapter: number;
    lesson: number;
    lessonTitle: string;
    edition: string;
    pages?: number[];
  };
}

interface Question {
  evidenceType?: LearningEvidenceType;
  contextType?: 'concept' | 'data' | 'experiment' | 'daily_life' | 'industry' | 'environment';
  safetyTags?: string[];
  provenance?: {
    authoringMethod: 'original' | 'adapted_official_format';
    referenceIds?: string[];
    reviewedAt?: string;
    reviewStatus: 'draft' | 'scientific_reviewed' | 'classroom_piloted';
  };
}
```

Không thêm `authoringReferences` vào payload gửi xuống client nếu metadata này chỉ phục vụ biên tập nội bộ.

## 15. Acceptance criteria trước khi viết câu hỏi hàng loạt

- [ ] 27 outcome trong tài liệu được chuyên môn rà soát và không trùng nghĩa.
- [ ] Mỗi outcome có tiền đề và ít nhất hai evidence type phù hợp, trừ outcome nhận biết đơn giản có lý do rõ ràng.
- [ ] Mỗi misconception critical gắn được với câu hỏi chẩn đoán cụ thể.
- [ ] Nội dung core không chứa phần nâng cao đã liệt kê ở mục 2.3.
- [ ] Bài 1–2 ánh xạ đúng tên và thứ tự Kết nối tri thức.
- [ ] Bài 3 chỉ là lớp tổng hợp/đánh giá, không sinh outcome giả.
- [ ] Thiết kế thí nghiệm có an toàn, kiểm soát biến, hiện tượng và kết luận.
- [ ] Câu pH và chuẩn độ luôn ghi đủ giả thiết, đơn vị và quy tắc làm tròn.
- [ ] Form A/B có cùng blueprint nhưng không phải bản sao đổi số đơn thuần.
- [ ] Học sinh dùng trình đọc màn hình vẫn tiếp cận được toàn bộ dữ kiện cần thiết.

## 16. Nguồn chính

- Chương trình môn Hóa học, Bộ GDĐT: <https://moet.gov.vn/content/vanban/Lists/VBPQ/Attachments/1471/phu-luc-i---hoa-hoc.pdf>
- Hướng dẫn dạy học Hóa học 11, Bộ GDĐT: <https://moet.gov.vn/content/vanban/Lists/VBDH/Attachments/3713/7mon-hoa-hoc-lop-11-ban-chinh-thuc-chot-ngay-392024signed.pdf>
- Cổng SGK, SGV, SBT mẫu và tài liệu tập huấn Hóa học 11 của NXBGDVN: <https://taphuan.nxbgd.vn/tap-huan/chi-tiet-sach/hoa-hoc-11-939753998.939753998>
- Quyết định 3588/QĐ-BGDĐT về bộ SGK thống nhất: <https://xaydungchinhsach.chinhphu.vn/quyet-dinh-so-3588-qd-bgddt-ve-bo-sach-giao-khoa-giao-duc-pho-thong-su-dung-thong-nhat-toan-quoc-119251227145448874.htm>

## 17. Bước triển khai kế tiếp

1. Rà soát và khóa 27 outcome cùng misconception catalog.
2. Bổ sung schema tối thiểu, không phá dữ liệu Hóa 10.
3. Tạo `src/data/grade11/chemistry/curriculum/` và data outcome Chương 1.
4. Viết validator kiểm tra ID, dependency, evidence, coverage và source metadata.
5. Biên soạn diagnostic cầu nối và 6–8 câu đầu tiên cho mỗi nhóm dạng bài.
6. Chỉ sau khi validator và UI pilot ổn mới mở rộng toàn bộ ngân hàng câu hỏi.
