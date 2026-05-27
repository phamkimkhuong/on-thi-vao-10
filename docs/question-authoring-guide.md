# Hướng Dẫn Tạo Câu Hỏi & Học Liệu (Question Authoring Guide)

> Tài liệu này dành cho người thêm nội dung vào `mathData.ts` và `englishData.ts`. Đọc kỹ trước khi thêm bất kỳ câu hỏi hay lời giải nào.

---

## Checklist Trước Khi Thêm Câu Hỏi

```
[ ] Tính lại đáp án thủ công (không dùng Wolfram Alpha làm bước duy nhất)
[ ] Render thử LaTeX trong app (npm run dev) — không để lỗi syntax âm thầm
[ ] Lời giải có đủ detailedSteps với formula, explanation, result
[ ] answerSchema phù hợp với loại đáp án
[ ] Độ khó đúng với chặng đang nhắm (easy=Chặng1, medium=Chặng2, hard=Chặng3)
[ ] Có correctFinalAnswer nếu validator tự động
```

---

## Template Câu Hỏi Hoàn Chỉnh

### Mức dễ — Rút gọn trực tiếp

```typescript
{
  id: 'math-q5',                     // ID tăng dần theo thứ tự
  subjectId: 'math',
  topicId: 'math-t1',                // Topic tương ứng
  questionTypeId: 'math-qt1',        // Dạng bài
  content: 'Rút gọn biểu thức \\\\(A = \\\\frac{\\\\sqrt{x} + 1}{\\\\sqrt{x} - 1} - \\\\frac{2}{\\\\sqrt{x}+1} - \\\\frac{2}{x-1}\\\\) với \\\\(x \\\\geq 0, x \\\\neq 1\\\\).',
  difficulty: 'easy',
  sourceType: 'practice',
  correctAnswer: 'A = (√x - 1)/(√x + 1)',
  acceptedAnswers: [
    '(sqrt(x) - 1)/(sqrt(x) + 1)',
    '(√x-1)/(√x+1)',
  ],
  validatorType: 'exact',
  answerSchema: {
    type: 'expression',
    fields: [
      {
        key: 'A',
        label: 'A =',
        valueType: 'expression',
        placeholder: 'Ví dụ: (√x-1)/(√x+1)',
        hint: 'Nhập biểu thức đã rút gọn'
      }
    ],
    proofImageRequired: true,
    autoCheckMode: 'expression-loose'
  },
  correctFinalAnswer: {
    A: '(√x-1)/(√x+1)'
  }
}
```

### Mức trung bình — Rút gọn + Tìm x

```typescript
{
  id: 'math-q6',
  subjectId: 'math',
  topicId: 'math-t1',
  questionTypeId: 'math-qt1',
  content: 'Cho biểu thức \\\\(B = ...\\\\)\\\\n\\\\na) Rút gọn \\\\(B\\\\).\\\\n\\\\nb) Tìm \\\\(x\\\\) nguyên để \\\\(B\\\\) nguyên.',
  difficulty: 'medium',
  sourceType: 'official_exam',
  province: 'Hà Nội',
  year: 2023,
  correctAnswer: 'x = 0 hoặc x = 4',
  acceptedAnswers: ['x=0;x=4', 'x = 0, x = 4'],
  validatorType: 'manual',     // Dùng manual khi có nhiều nghiệm hoặc kết quả phức tạp
  answerSchema: {
    type: 'expression',
    fields: [
      {
        key: 'x',
        label: 'x =',
        valueType: 'expression',
        placeholder: 'Nhập các giá trị x tìm được'
      }
    ],
    proofImageRequired: true,
    autoCheckMode: 'manual'
  }
}
```

---

## Template Lời Giải Hoàn Chỉnh

```typescript
{
  id: 'math-s5',
  questionId: 'math-q5',
  recognition: 'Biểu thức có ba phân thức, mẫu lần lượt là (√x-1), (√x+1) và (x-1). Nhận ra (x-1)=(√x-1)(√x+1) → Đây là dạng rút gọn biểu thức chứa căn bằng cách quy đồng ba mẫu về MTC là (√x-1)(√x+1).',
  detailedSteps: [
    {
      order: 1,
      title: 'Điều kiện xác định',
      explanation: 'Yêu cầu tất cả mẫu thức khác 0 và biểu thức trong căn không âm. Đề đã cho \\\\(x \\\\geq 0, x \\\\neq 1\\\\) là điều kiện cần thiết.',
      formula: 'x \\geq 0, \\quad x \\neq 1',
      result: 'Điều kiện đã được đề cho. Ghi lại và dùng để đối chiếu nghiệm ở cuối.'
    },
    {
      order: 2,
      title: 'Phân tích mẫu thức',
      explanation: 'Nhận thấy mẫu thứ ba \\\\(x-1 = (\\\\sqrt{x}-1)(\\\\sqrt{x}+1)\\\\). MTC của ba mẫu là \\\\((\\\\sqrt{x}-1)(\\\\sqrt{x}+1)\\\\).',
      formula: 'A = \\frac{(\\sqrt{x}+1)^2 - 2(\\sqrt{x}-1) - 2}{(\\sqrt{x}-1)(\\sqrt{x}+1)}',
      result: 'Tử số sau khi quy đồng: \\\\((\\\\sqrt{x}+1)^2 - 2(\\\\sqrt{x}-1) - 2\\\\)'
    },
    {
      order: 3,
      title: 'Rút gọn tử số',
      explanation: 'Khai triển và thu gọn tử số:',
      formula: 'x + 2\\sqrt{x} + 1 - 2\\sqrt{x} + 2 - 2 = x + 1',
      result: '\\\\(A = \\\\frac{x+1}{(\\\\sqrt{x}-1)(\\\\sqrt{x}+1)} = \\\\frac{x+1}{x-1}\\\\)'
    }
  ],
  finalAnswer: '\\\\(A = \\\\frac{x+1}{x-1}\\\\) với \\\\(x \\\\geq 0, x \\\\neq 1\\\\)',
  commonMistakes: [
    'Phân tích sai mẫu: (x-1) ≠ (√x)(√x-1), đúng phải là (√x-1)(√x+1)',
    'Quên nhân nghịch đảo khi mẫu thứ ba đã là tích của hai mẫu kia'
  ],
  reviewSuggestions: [
    'Ôn hằng đẳng thức (a-b)(a+b)=a²-b²',
    'Luyện phân tích đa thức chứa căn'
  ]
}
```

---

## Quy Ước Đặt ID

| Loại | Quy ước | Ví dụ |
|------|---------|-------|
| Topic | `{subject}-t{n}` | `math-t1`, `english-t3` |
| QuestionType | `{subject}-qt{n}` | `math-qt1`, `english-qt2` |
| Question | `{subject}-q{n}` | `math-q1`, `math-q10` |
| Solution | `{subject}-s{n}` | `math-s1`, `math-s5` |

ID phải **duy nhất** trong toàn bộ dữ liệu. Tăng dần, không tái sử dụng.

---

## Quy Ước Viết LaTeX

### Trong `content` (đề bài):
```
✅ Inline: \\(x > 0, x \\neq 1\\)
✅ Biểu thức dài: \\(P = \\left(\\frac{\\sqrt{x}}{\\sqrt{x}-1} - \\frac{1}{x-\\sqrt{x}}\\right)\\)
✅ Xuống đoạn: \\n\\na) Rút gọn...\\n\\nb) Tìm x...
```

### Trong `formula` (trường công thức trong detailedSteps):
```
✅ Raw LaTeX: A = \\frac{\\sqrt{x}+1}{\\sqrt{x}-1}
✅ Nhiều dòng: A = \\frac{x-1}{\\sqrt{x}} \\Rightarrow 2(x-1) = \\sqrt{x}
❌ Không dùng delimiter: \\(A = ...\\) — LatexRenderer sẽ tự xử lý với block={true}
```

### Trong `explanation` và `result`:
```
✅ Inline: "Áp dụng công thức \\(x-1 = (\\sqrt{x}-1)(\\sqrt{x}+1)\\)"
✅ Text thường: "Điều kiện đã được đề cho."
```

---

## Chọn `validatorType` Phù Hợp

| Validator | Dùng khi | Ví dụ |
|-----------|----------|-------|
| `number` | Đáp án là một số cụ thể | x = 1/4, m = 2 |
| `exact` | Đáp án là biểu thức chính xác | x = -4 + √31 |
| `multi-number` | Đáp án là nhiều số riêng biệt | Tivi=10, Tủ lạnh=15 |
| `manual` | Đáp án dạng văn bản, chứng minh, nhiều nghiệm | Bất đẳng thức, hình học |

---

## Quy Ước `answerSchema`

### `type: 'single-number'` — Một số
```typescript
answerSchema: {
  type: 'single-number',
  fields: [{ key: 'x', label: 'x =', valueType: 'number', placeholder: '1/4' }],
  proofImageRequired: true,
  autoCheckMode: 'numeric'
}
```

### `type: 'expression'` — Biểu thức
```typescript
answerSchema: {
  type: 'expression',
  fields: [{ key: 'm', label: 'm =', valueType: 'expression', placeholder: '-4 + √31' }],
  proofImageRequired: true,
  autoCheckMode: 'expression-loose'
}
```

### `type: 'system-solution'` — Hệ PT (nhiều ẩn)
```typescript
answerSchema: {
  type: 'system-solution',
  fields: [
    { key: 'x', label: 'x =', valueType: 'number', placeholder: '2' },
    { key: 'y', label: 'y =', valueType: 'number', placeholder: '3' }
  ],
  proofImageRequired: true,
  orderMatters: true,
  autoCheckMode: 'keyed-numeric'
}
```

---

## Nguồn Câu Hỏi Được Khuyến Khích

| Nguồn | `sourceType` | Ghi chú |
|-------|-------------|---------|
| Đề thi chính thức UBND tỉnh | `official_exam` | Ghi `province` và `year` |
| Đề thử nghiệm trường | `mock_exam` | Ghi trường nếu biết |
| Câu tự biên soạn | `practice` | Phải kiểm tra kỹ đáp án |

> ⚠️ **Cảnh báo**: Không sao chép đề từ nguồn không rõ ràng. Với đề chính thức, ghi rõ tỉnh và năm để học sinh biết đây là đề thật.

---

## Quy Trình Thêm Câu Hỏi Mới (Step-by-step)

1. **Tự giải bài** tay — không dùng phần mềm làm bước đầu tiên
2. **Viết `content`** theo quy ước LaTeX
3. **Viết `Solution`** với `detailedSteps` đầy đủ
4. **Thêm vào `mathData.ts`** — `Question` trước, `Solution` sau
5. **Chạy `npm run dev`** — vào app test render LaTeX
6. **Test flow nộp bài** — nhập đáp án, kiểm tra validator hoạt động đúng
7. **Chạy `npm run type-check`** — đảm bảo không có lỗi TypeScript
