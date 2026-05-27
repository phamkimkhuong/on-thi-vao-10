# Question Authoring Guide

Tài liệu này quy định cách biên soạn câu hỏi, đáp án, schema nhập đáp án và lời giải cho hệ thống **Dạng Bài 10**.

Mục tiêu là để mọi câu hỏi trong hệ thống có cấu trúc thống nhất, dễ kiểm thử, dễ mở rộng và phù hợp với flow học sinh làm bài tự luận: **làm ra giấy → nhập đáp án cuối → upload ảnh bài làm → đối chiếu lời giải**.

---

## 1. Một câu hỏi cần có những gì?

Mỗi câu hỏi Toán nên có đủ các thành phần:

1. `id`
2. `subjectId`
3. `topicId`
4. `questionTypeId`
5. `content`
6. `difficulty`
7. `sourceType`
8. `correctAnswer`
9. `answerSchema`
10. `correctFinalAnswer`
11. `acceptedFinalAnswers` nếu cần
12. `Solution` tương ứng

Nếu thiếu lời giải hoặc answer schema, câu hỏi chưa nên đưa vào lộ trình chính.

---

## 2. Quy chuẩn đặt `id`

Nên đặt id có ý nghĩa và ổn định.

Ví dụ:

```ts
math-rg-can-q1
math-rg-can-q2
math-rg-can-q3
```

Không nên dùng id quá chung như:

```ts
q1
q2
question-1
```

Lý do: id sẽ được dùng trong attempt, mistake, exam result và Firestore. Nếu đổi id sau khi học sinh đã làm bài, dữ liệu lịch sử có thể bị lệch.

---

## 3. Quy chuẩn độ khó

### `easy`

Câu chỉ kiểm tra một kỹ năng chính.

Ví dụ:

- Rút gọn một biểu thức đơn giản.
- Giải phương trình bậc hai cơ bản.
- Giải hệ phương trình không có tham số.

### `medium`

Câu có từ hai kỹ năng trở lên hoặc có câu phụ.

Ví dụ:

- Rút gọn biểu thức rồi tìm \(x\).
- Áp dụng Viète để xử lý hệ thức nghiệm.
- Lập hệ phương trình từ bài toán thực tế.

### `hard`

Câu có bẫy, điều kiện phức tạp hoặc cần lập luận nâng cao.

Ví dụ:

- Rút gọn biểu thức rồi tìm \(x\) nguyên để biểu thức nguyên.
- Bất đẳng thức có nhiều bước biến đổi.
- Hình học chứng minh có nhiều ý phụ.

---

## 4. Quy chuẩn `sourceType`

### `manual`

Dùng cho câu tự biên soạn.

### `mock_exam`

Dùng cho câu mô phỏng đề thi.

### `official_exam`

Dùng cho câu lấy cảm hứng hoặc trích từ đề chính thức. Nếu dùng nguồn chính thức, nên ghi thêm `province` và `year`.

---

## 5. Quy chuẩn `content`

`content` là đề bài hiển thị cho học sinh.

Yêu cầu:

- Đề bài rõ ràng.
- Có đủ điều kiện xác định nếu cần.
- Nếu có nhiều ý, tách thành a), b), c).
- Công thức Toán viết bằng LaTeX.
- Không viết lời giải trong đề.

Ví dụ:

```ts
content: 'Cho biểu thức \\(P = ...\\) với \\(x > 0, x \\ne 1\\).\n\na) Rút gọn \\(P\\).\n\nb) Tìm \\(x\\) để \\(P = -\\frac{3}{2}\\).'
```

---

## 6. Quy chuẩn `correctAnswer`

`correctAnswer` là đáp án hiển thị cho học sinh ở phần tổng kết.

Nên viết rõ, không quá ngắn.

Ví dụ tốt:

```ts
correctAnswer: 'a) P = \\frac{x - 1}{\\sqrt{x}}, b) x = \\frac{1}{4}'
```

Ví dụ chưa tốt:

```ts
correctAnswer: '1/4'
```

Vì học sinh không biết đáp án đó thuộc ý nào.

---

## 7. Quy chuẩn `answerSchema`

`answerSchema` định nghĩa học sinh cần nhập đáp án cuối như thế nào.

### 7.1. Dạng một số

Dùng khi đáp án cuối là một giá trị.

```ts
answerSchema: {
  type: 'single-number',
  fields: [
    {
      key: 'x',
      label: 'x =',
      valueType: 'number',
      placeholder: 'Ví dụ: 1/4'
    }
  ],
  proofImageRequired: true,
  autoCheckMode: 'numeric'
}
```

### 7.2. Dạng biểu thức

Dùng khi học sinh cần nhập biểu thức rút gọn.

```ts
answerSchema: {
  type: 'expression',
  fields: [
    {
      key: 'P',
      label: 'P =',
      valueType: 'expression',
      placeholder: 'Ví dụ: (x - 1) / sqrt(x)'
    }
  ],
  proofImageRequired: true,
  autoCheckMode: 'expression-loose'
}
```

### 7.3. Dạng hệ phương trình hoặc nhiều đại lượng

Dùng khi đáp án gồm nhiều giá trị có nhãn.

```ts
answerSchema: {
  type: 'system-solution',
  fields: [
    { key: 'x', label: 'x =', valueType: 'number', placeholder: '10' },
    { key: 'y', label: 'y =', valueType: 'number', placeholder: '15' }
  ],
  proofImageRequired: true,
  orderMatters: true,
  autoCheckMode: 'keyed-numeric'
}
```

Với bài toán thực tế, nên đặt key theo đại lượng thật:

```ts
fields: [
  { key: 'tivi', label: 'Tivi =', valueType: 'number' },
  { key: 'tuLanh', label: 'Tủ lạnh =', valueType: 'number' }
]
```

---

## 8. Quy chuẩn `correctFinalAnswer`

`correctFinalAnswer` phải khớp với `answerSchema.fields`.

Ví dụ:

```ts
correctFinalAnswer: {
  x: '1/4'
}
```

Với hệ:

```ts
correctFinalAnswer: {
  x: '10',
  y: '15'
}
```

Với bài toán thực tế:

```ts
correctFinalAnswer: {
  tivi: '10',
  tuLanh: '15'
}
```

---

## 9. Quy chuẩn `acceptedFinalAnswers`

Dùng khi đáp án có nhiều cách viết đúng.

Ví dụ:

```ts
acceptedFinalAnswers: [
  { x: '0.25' },
  { x: '1 / 4' }
]
```

Không nên đưa quá nhiều biến thể thừa. Chỉ thêm những cách viết phổ biến.

---

## 10. Quy chuẩn `Solution`

Mỗi câu hỏi phải có một `Solution` tương ứng.

Cấu trúc cần có:

```ts
{
  id: '...',
  questionId: '...',
  recognition: '...',
  detailedSteps: [...],
  finalAnswer: '...',
  commonMistakes: [...],
  reviewSuggestions: [...]
}
```

---

## 11. Quy chuẩn `recognition`

`recognition` giải thích vì sao nhận ra dạng bài.

Ví dụ:

```txt
Đề có biểu thức chứa √x, nhiều phân thức và mẫu x - √x, x - 1. Đây là dấu hiệu của dạng rút gọn biểu thức chứa căn.
```

Không nên viết chung chung:

```txt
Đây là bài đại số cơ bản.
```

---

## 12. Quy chuẩn `detailedSteps`

Mỗi bước nên có:

- `order`
- `title`
- `explanation`
- `formula` nếu có
- `result` nếu có

Ví dụ:

```ts
{
  order: 1,
  title: 'Tìm điều kiện xác định',
  explanation: 'Vì biểu thức có căn và mẫu thức, ta cần kiểm tra điều kiện để căn xác định và mẫu khác 0.',
  formula: 'x > 0, x \\ne 1',
  result: 'Điều kiện xác định là \\(x > 0, x \\ne 1\\).'
}
```

---

## 13. Quy chuẩn `commonMistakes`

Mỗi câu hỏi nên có ít nhất 2 lỗi thường gặp.

Ví dụ:

```ts
commonMistakes: [
  'Quên điều kiện xác định.',
  'Phân tích sai x - √x thành x(√x - 1).',
  'Khi chia phân thức, quên nhân với phân thức nghịch đảo.'
]
```

---

## 14. Quy chuẩn `reviewSuggestions`

Gợi ý học lại nếu làm sai.

Ví dụ:

```ts
reviewSuggestions: [
  'Ôn lại phân tích mẫu thức chứa căn.',
  'Luyện thêm quy đồng phân thức.',
  'Xem lại cách giải phương trình bằng cách đặt t = √x.'
]
```

---

## 15. Checklist trước khi đưa câu hỏi vào app

Trước khi commit câu hỏi mới, kiểm tra:

- [ ] Đề bài rõ ràng.
- [ ] Điều kiện xác định đúng.
- [ ] Đáp án cuối đúng toán.
- [ ] `answerSchema` khớp với yêu cầu nhập đáp án.
- [ ] `correctFinalAnswer` khớp với schema.
- [ ] Có lời giải chi tiết.
- [ ] Lời giải không nhảy bước.
- [ ] Có lỗi thường gặp.
- [ ] Có gợi ý ôn lại.
- [ ] Đã tự giải lại bằng tay để kiểm tra.

---

## 16. Nguyên tắc quan trọng

Không thêm câu hỏi chỉ để tăng số lượng.

Một câu hỏi tốt phải giúp học sinh học được ít nhất một kỹ năng hoặc sửa được một lỗi sai cụ thể.