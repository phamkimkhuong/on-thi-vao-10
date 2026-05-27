# Quy Chuẩn Viết Học Liệu (Content Guidelines)

> **Nguyên tắc tối thượng**: Viết như một **giáo viên đang ngồi bên học sinh yếu**, giải thích từng bước tại sao, không viết kiểu sách giáo khoa học thuật.

---

## 1. Cấu Trúc Bắt Buộc Của Một Dạng Bài (`QuestionType`)

```typescript
{
  id: 'math-qt1',
  topicId: 'math-t1',
  name: 'Tên dạng bài',
  slug: 'slug-dang-bai',
  description: '...',         // Mô tả ngắn, rõ ràng — xem §2
  recognitionSigns: [...],    // Dấu hiệu nhận dạng — xem §3
  solvingSteps: [...],        // Quy trình giải — xem §4
  commonMistakes: [...],      // Lỗi thường gặp — xem §5
  difficulty: 'easy' | 'medium' | 'hard',
  examFrequency: 'high' | 'medium' | 'low',
  exampleQuestionId: '...',   // ID câu hỏi dùng làm ví dụ mẫu
}
```

---

## 2. Viết `description` (Mô Tả Dạng Bài)

**Công thức**: [Vị trí trong đề] + [Dạng biểu thức/phương trình] + [Yêu cầu thường gặp] + [Câu phụ điển hình]

**Ví dụ tốt**:
> "Dạng toán thường xuất hiện ở câu 1 đề thi vào 10. Đề cho biểu thức P chứa căn bậc hai và phân thức, yêu cầu rút gọn P, rồi làm thêm câu phụ như tìm x để P bằng giá trị cho trước, so sánh P với số, hoặc tìm x nguyên để P nguyên."

**Ví dụ xấu**:
> "Rút gọn biểu thức chứa căn là dạng đại số." ← Quá ngắn, không có ngữ cảnh thi cử.

---

## 3. Viết `recognitionSigns` (Dấu Hiệu Nhận Dạng)

Mỗi dấu hiệu phải trả lời câu hỏi: **"Học sinh nhìn vào đề thấy gì thì đoán được đây là dạng này?"**

**Quy tắc**:
- Ít nhất 3 dấu hiệu, không quá 6
- Viết cụ thể, có ví dụ thực tế từ đề thi
- Tránh viết chung chung kiểu "có chứa toán học"

**Ví dụ tốt**:
```
"Biểu thức có √x, x, x-1, x-√x, √x-1, √x+1 xuất hiện ở tử hoặc mẫu"
"Đề cho điều kiện như x > 0, x ≠ 1, x ≠ 4"
"Yêu cầu rút gọn P hoặc B rồi có câu phụ (tìm x, so sánh, tìm x nguyên)"
```

**Ví dụ xấu**:
```
"Bài có căn thức" ← Quá chung
"Phương trình phức tạp" ← Không có giá trị nhận dạng
```

---

## 4. Viết `solvingSteps` (Quy Trình Giải)

Mỗi bước phải:
1. Bắt đầu bằng **động từ hành động** (Xác định, Phân tích, Quy đồng, Rút gọn, Đối chiếu...)
2. Nêu **tại sao làm bước này** (ngắn gọn, 1 câu)
3. Nếu bước có bẫy/lỗi thường gặp → ghi chú ngay

**Ví dụ tốt**:
```
"Bước 1: Ghi điều kiện xác định — Bước này bắt buộc vì nghiệm tìm được cuối cùng phải đối chiếu lại điều kiện"
"Bước 2: Phân tích các mẫu thức — Nhận biết: x-1=(√x-1)(√x+1), x-√x=√x(√x-1)"
"Bước 3: Quy đồng từng cụm ngoặc riêng — Không nên quy đồng toàn bộ biểu thức ngay, dễ sai"
"Bước 4: Rút gọn nhân tử chung giữa tử và mẫu"
"Bước 5: Làm câu phụ bằng biểu thức đã rút gọn"
"Bước 6: Đối chiếu nghiệm với điều kiện ban đầu"
```

**Số bước**: 4–8 bước. Ít hơn 4 = quá đơn giản hoặc nhảy bước. Nhiều hơn 8 = quá chi tiết, gây rối.

---

## 5. Viết `commonMistakes` (Lỗi Thường Gặp)

**Công thức cho mỗi lỗi**: [Mô tả lỗi cụ thể] + [Vì sao sai] + [Cách nhớ để tránh]

Nhưng trong `commonMistakes[]` chỉ ghi **mô tả lỗi + tại sao sai** (phần "cách tránh" sẽ ở tab UI).

**Ví dụ tốt**:
```
"Phân tích sai x-√x thành x(√x-1) — đúng phải là √x(√x-1) vì x=(√x)²"
"Khi chia hai phân thức, quên nhân nghịch đảo thay vì chia trực tiếp"
"Tìm được nghiệm nhưng không đối chiếu với điều kiện xác định"
```

**Ví dụ xấu**:
```
"Tính sai" ← Không có giá trị học
"Quên làm" ← Không phải lỗi kỹ thuật
```

---

## 6. Cấu Trúc Bắt Buộc Của Một Lời Giải (`Solution`)

```typescript
{
  id: 'math-s1',
  questionId: 'math-q1',
  recognition: '...',         // Phân tích đề — học sinh nhìn vào thấy gì → xem §7
  detailedSteps: [            // Lời giải từng bước — xem §8
    {
      order: 1,
      title: 'Tên bước ngắn gọn',
      explanation: '...',     // Giải thích TẠI SAO làm bước này
      formula: '...',         // Công thức/biểu thức LaTeX (raw, không có delimiters)
      result: '...',          // Kết quả bước này là gì (có thể dùng \\(...\\))
    }
  ],
  finalAnswer: '...',         // Đáp án cuối, dùng \\(...\\)
  commonMistakes: [...],      // Lỗi hay mắc ở bài này cụ thể
  reviewSuggestions: [...]    // Kiến thức cần ôn thêm
}
```

---

## 7. Viết `recognition` (Phân Tích Đề)

Đây là **đoạn học sinh đọc đầu tiên**. Phải trả lời:
- Đây là dạng bài gì? (1 câu)
- Nhận biết bằng dấu hiệu nào? (1–2 câu)
- Hướng giải tổng quát là gì? (1 câu)

**Ví dụ tốt**:
> "Biểu thức có phân thức với √x ở tử và mẫu, đề đã cho điều kiện xác định. Đây là dạng rút gọn biểu thức chứa căn. Ta cần phân tích mẫu thức thành nhân tử để tìm MTC, quy đồng từng cụm ngoặc, rồi thực hiện phép chia."

---

## 8. Viết `detailedSteps` (Lời Giải Từng Bước)

Mỗi bước gồm 3 phần:

| Trường | Vai trò | Định dạng |
|--------|---------|-----------|
| `title` | Tên bước ngắn gọn | Text thuần |
| `explanation` | Giải thích tại sao + dẫn dắt | Text + LaTeX inline `\\(...\\)` |
| `formula` | Biểu thức toán học chính | **Raw LaTeX** (không delimiter) |
| `result` | Kết quả/kết luận bước này | Text + LaTeX inline `\\(...\\)` |

**Quy tắc cho `formula`**:
- Viết raw LaTeX: `A = \frac{\sqrt{x}+1}{\sqrt{x}}` (không có `\\(` hay `\\[`)
- Component `LatexRenderer` với `block={true}` sẽ tự render thành block toán học
- Giữ trên **1 dòng logic** nếu có thể — nếu cần xuống dòng dùng `\\\\`

**Quy tắc cho `explanation` và `result`**:
- Dùng `\\(...\\)` cho inline math
- Ưu tiên ngôn ngữ bình thường, toán chỉ xuất hiện khi cần

---

## 9. Cấu Trúc Câu Hỏi (`Question`)

```typescript
{
  id: 'math-q5',
  subjectId: 'math',
  topicId: 'math-t1',
  questionTypeId: 'math-qt1',
  content: '...',             // Đề bài — xem §10
  difficulty: 'easy' | 'medium' | 'hard',
  sourceType: 'mock_exam' | 'official_exam' | 'practice',
  province: '...',            // Nếu là đề chính thức
  year: 2024,                 // Năm đề
  correctAnswer: '...',       // Đáp án dạng text (hiển thị)
  acceptedAnswers: [...],     // Các dạng chấp nhận
  validatorType: 'number' | 'exact' | 'multi-number' | 'manual',
  answerSchema: { ... },      // Cấu trúc form nhập đáp án
  correctFinalAnswer: { ... } // Đáp án chuẩn theo key
}
```

---

## 10. Viết `content` (Đề Bài)

**Quy tắc**:
- Dùng `\\(...\\)` cho mọi công thức inline
- Dùng `\\n\\n` để xuống đoạn (giữa phần a) và b))
- Ghi rõ điều kiện: `với \\(x > 0, x \\neq 1\\)`
- Phần a), b) viết rõ ràng, không viết dính vào đề

**Ví dụ tốt**:
```
"Cho biểu thức \\(P = ...\\) với \\(x > 0, x \\neq 1\\).\\n\\na) Rút gọn biểu thức \\(P\\).\\n\\nb) Tìm \\(x\\) để \\(P = \\frac{1}{2}\\)."
```

---

## 11. Chọn `difficulty` (Mức Độ Câu Hỏi)

| Mức | Tiêu chí |
|-----|----------|
| `easy` | Rút gọn trực tiếp, 1–2 bước phân tích, không có câu phụ phức tạp |
| `medium` | Có câu phụ (tìm x, so sánh), cần đối chiếu điều kiện, 3–4 bước |
| `hard` | Có tham số, bất đẳng thức, hoặc tìm điều kiện nguyên/chia hết |

---

## 12. Checklist Trước Khi Thêm Câu Hỏi Vào `mathData.ts`

```
[ ] Đề bài đúng về mặt toán học (tính lại kết quả thủ công)
[ ] Đáp án cuối đã kiểm tra
[ ] LaTeX trong `content` render đúng (test trong app)
[ ] `answerSchema` phù hợp với loại đáp án
[ ] Có `correctFinalAnswer` nếu dùng validator tự động
[ ] Có `Solution` tương ứng với `detailedSteps` đầy đủ
[ ] Độ khó phù hợp với chặng học đang nhắm đến
[ ] `exampleQuestionId` trong `QuestionType` đã trỏ đến câu hỏi tốt nhất
```
