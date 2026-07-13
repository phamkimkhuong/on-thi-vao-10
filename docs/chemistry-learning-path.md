# Kiến trúc lộ trình “Làm chủ Hóa học 10”

## Mục tiêu

Lộ trình Hóa học 10 được điều phối theo chuẩn đầu ra nhỏ (`LearningOutcome`), không lấy số video đã xem hoặc số chương đã mở làm bằng chứng làm chủ.

```text
Topic (module/chương)
└── LearningOutcome (đơn vị mastery)
    ├── prerequisiteOutcomeIds
    ├── misconceptionIds
    ├── evidenceTypes
    ├── questionTypeIds
    └── remediationOutcomeIds
```

`QuestionType`, `Question` và `Solution` tiếp tục là lớp luyện tập tương thích ngược. Không đưa toàn bộ logic lộ trình trở lại `QuestionType`.

## Bốn phạm vi nội dung

| Scope | Ý nghĩa | Có tính vào tiến độ cốt lõi? |
|---|---|---:|
| `bridge` | Bài bổ trợ THCS, học khi có lỗ hổng | Không |
| `core` | Yêu cầu cốt lõi Hóa học 10 | Có |
| `specialized` | Chuyên đề Hóa học 10 tự chọn | Không |
| `advanced` | Mở rộng B00/HSG | Không |

Module cầu nối không phải chương bắt buộc tuần tự. Học sinh được vào kiến thức lớp 10 ngay khi đạt đúng tiền đề của outcome sắp học.

## Trạng thái outcome hiện tại

MVP suy ra trạng thái từ mastery của `questionTypeIds`:

- `ready`: đủ tiền đề, chưa có điểm mastery.
- `in_progress`: đã luyện nhưng chưa đạt 80.
- `mastered`: mastery từ 80 trở lên.
- `blocked`: ít nhất một outcome tiền đề dưới 60.

Đây là lớp tương thích với progress hiện có. Phiên bản tiếp theo cần lưu riêng bằng chứng theo loại, thời điểm ôn lại và ngộ nhận đã phát hiện.

## Quy tắc biên soạn outcome mới

Mỗi outcome phải:

1. Chỉ mô tả một năng lực có thể quan sát và đánh giá.
2. Có ít nhất hai loại bằng chứng nếu là kiến thức cốt lõi.
3. Khai báo đúng tiền đề, không dùng `tier` thay cho dependency graph.
4. Khai báo ngộ nhận có thật; lỗi bản chất dùng severity `critical`.
5. Chỉ gắn `questionTypeIds` thực sự đo outcome đó.
6. Có thời lượng ước tính để giao diện giúp học sinh lập kế hoạch.

## Trình tự mở rộng nội dung

1. Hai outcome Nhập môn đã có học liệu nền tảng; tiếp tục mở rộng câu hỏi dữ liệu và tình huống thực nghiệm sau pilot.
2. Mở rộng ngân hàng câu hỏi Module 1 để mỗi outcome có đủ bằng chứng giải thích, dữ liệu và vận dụng.
3. Module 2 — Bảng tuần hoàn đã có MVP gồm 5 outcome và tối thiểu hai câu mỗi dạng; cần pilot trước khi mở rộng ngân hàng.
4. Module 3 — Liên kết hóa học đã có MVP gồm 5 outcome: octet/ion, liên kết ion, cộng hóa trị/Lewis, phân cực và tương tác giữa phân tử.
5. Module 4 — Oxi hóa–khử đã có MVP gồm số oxi hóa, quá trình electron, tác nhân và cân bằng electron.
6. Module 5 — Năng lượng hóa học đã có MVP gồm hệ–môi trường, dấu ΔH, enthalpy tạo thành và năng lượng liên kết.
7. Module 6 — Tốc độ phản ứng đã có MVP gồm tốc độ trung bình, đồ thị, mô hình va chạm và xúc tác/thực nghiệm.
8. Module 7 — Halogen đã có MVP gồm xu hướng nhóm, tính oxi hóa, phản ứng đặc trưng, hydrogen halide và nhận biết ion halide.
5. Sau khi thử nghiệm Module 1–3 mới triển khai phản ứng, năng lượng, tốc độ và Halogen.

Hiện Module 1 có tối thiểu hai câu cho mỗi dạng bài. Đây mới là ngưỡng MVP để tránh mastery dựa trên một câu duy nhất; trước pilot vẫn cần bổ sung câu trả lời ngắn, dữ liệu và giải thích thay vì chỉ dùng trắc nghiệm lựa chọn.

## Không được làm

- Không cộng streak trực tiếp vào mastery Hóa học.
- Không coi `tier` là quan hệ tiền đề.
- Không khóa toàn bộ Module 1 chỉ vì học sinh chưa hoàn thành mol hoặc nồng độ.
- Không coi câu tính toán đúng là đủ nếu học sinh còn ngộ nhận nghiêm trọng.
- Không đưa chuyên đề hoặc B00 vào phần trăm hoàn thành cốt lõi.
