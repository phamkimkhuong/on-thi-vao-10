# AGENT.md — Tài Liệu Nội Bộ Dự Án "Ôn Thi Vào 10"

> **Mục đích**: Cung cấp 100% ngữ cảnh cần thiết cho bất kỳ AI Agent nào tiếp nhận dự án từ phiên hội thoại mới. Đọc file này **trước khi làm bất kỳ thay đổi nào**.

---

## 1. Tổng Quan Dự Án

| Thuộc tính | Giá trị |
|---|---|
| **Tên dự án** | Ôn Thi Vào 10 (`on-thi-vao-10`) |
| **Mô tả** | Hệ thống ôn luyện trực tuyến cho học sinh từ lớp 9 (ôn thi vào lớp 10) đến lớp 10 (THPT), hỗ trợ nhiều môn học. Kiến trúc **Local-first** với đồng bộ đám mây Firebase. |
| **Framework** | React 19 + Vite 8 + TypeScript 6 |
| **Styling** | Tailwind CSS 4 (qua `@tailwindcss/vite` plugin) |
| **State Management** | Zustand (client state) + LocalStorage (persistence) |
| **Backend** | Firebase (Authentication, Firestore, Cloud Functions, Hosting, Storage, Analytics) |
| **AI Engine** | Google Gemini (qua Firebase Cloud Function `callGeminiProxy`) |
| **Routing** | React Router DOM v7 (createBrowserRouter) |
| **Math Rendering** | KaTeX |
| **Charts** | Recharts |
| **Icons** | Lucide React |
| **Hosting** | Firebase Hosting |
| **Deploy** | `npm run deploy` = `tsc -b && vite build && firebase deploy --only hosting` |

---

## 2. Kiến Trúc Thư Mục

```
on-thi-vao-10/
├── src/                          # Mã nguồn frontend chính
│   ├── App.tsx                   # Root component, Router config, Auth listener
│   ├── main.tsx                  # Entry point (ReactDOM.createRoot)
│   ├── index.css                 # Global CSS (Tailwind imports + custom tokens)
│   ├── App.css                   # App-level styles
│   │
│   ├── types/
│   │   └── index.ts              # ⭐ MỌI TypeScript interface/type của toàn app
│   │
│   ├── data/                     # ⭐ Ngân hàng dữ liệu tĩnh (Source of Truth cho nội dung)
│   │   ├── index.ts              # Bộ nạp trung tâm (dynamic loader theo grade + subject)
│   │   ├── mathData.ts           # Legacy wrapper (redirect tới grade9/math)
│   │   ├── englishData.ts        # Legacy wrapper (redirect tới grade9/english)
│   │   ├── mockExamsData.ts      # Legacy wrapper
│   │   │
│   │   ├── grade9/               # ═══ DỮ LIỆU LỚP 9 (JSON) ═══
│   │   │   ├── math/
│   │   │   │   ├── topics.json           # Chương/Chặng học tập
│   │   │   │   ├── questionTypes.json    # Dạng bài (có theory, solvingSteps, commonMistakes)
│   │   │   │   ├── questions.json        # Ngân hàng câu hỏi
│   │   │   │   └── solutions.json        # Lời giải chi tiết
│   │   │   ├── english/
│   │   │   │   ├── topics.json
│   │   │   │   ├── questionTypes.json
│   │   │   │   ├── questions.json
│   │   │   │   └── solutions.json
│   │   │   ├── mockExamsList.json
│   │   │   ├── mockSolutionsList.json
│   │   │   ├── mathMockQuestions.json
│   │   │   └── englishMockQuestions.json
│   │   │
│   │   ├── grade10/              # ═══ DỮ LIỆU LỚP 10 (TypeScript) ═══
│   │   │   ├── math/
│   │   │   │   ├── topics.ts
│   │   │   │   ├── questionTypes.ts
│   │   │   │   ├── questions.ts
│   │   │   │   └── solutions.ts
│   │   │   ├── english/
│   │   │   │   ├── topics.ts
│   │   │   │   ├── questionTypes.ts
│   │   │   │   ├── questions.ts
│   │   │   │   └── solutions.ts
│   │   │   ├── chemistry/        # 🆕 Hóa học 10 (đang phát triển)
│   │   │   │   ├── topics.ts             # 9 chương (Module 0-8)
│   │   │   │   ├── questionTypes.ts      # 11 dạng bài (4 Module0 + 7 Module1)
│   │   │   │   ├── questions.ts          # 11 câu hỏi chẩn đoán
│   │   │   │   └── solutions.ts          # 11 lời giải phân tích ngộ nhận
│   │   │   └── mockExams.ts
│   │   │
│   │   └── english/              # Legacy data (redirect)
│   │
│   ├── services/                 # ⭐ Lớp dịch vụ nghiệp vụ
│   │   ├── firebase.ts           # Khởi tạo Firebase SDK (auth, db, functions, storage, analytics)
│   │   ├── storage.ts            # LocalStorage wrapper (CRUD cho attempts, mistakes, progress, exams)
│   │   ├── progressService.ts    # ⭐ Core Engine: XP, Level, Streak, Cloud Sync, Merge Guest↔Auth
│   │   ├── store.ts              # Zustand store (selectedSubject, selectedGrade, auth, darkMode)
│   │   ├── aiService.ts          # Client-side AI wrapper (gọi Cloud Function callGeminiProxy)
│   │   ├── proofImageService.ts  # Upload ảnh bài giải lên Firebase Storage
│   │   └── teacherAccessService.ts # Kiểm tra quyền giáo viên từ Firestore
│   │
│   ├── components/               # UI Components dùng chung
│   │   ├── ui/                   # Primitives (Button, Card, Progress, Tabs) - theo chuẩn shadcn/ui
│   │   ├── common/
│   │   │   ├── LatexRenderer.tsx         # Render công thức LaTeX bằng KaTeX
│   │   │   ├── AiTutorPanel.tsx          # Panel chat AI gia sư (nhúng trong PracticeEngine)
│   │   │   ├── AnswerFormRenderer.tsx    # Render form trả lời đa dạng (number, fraction, choice...)
│   │   │   ├── ProofImageUploader.tsx    # Upload ảnh bài giải tay
│   │   │   └── MathLoginRequired.tsx     # Guard yêu cầu đăng nhập
│   │   ├── layout/
│   │   │   └── AppLayout.tsx     # ⭐ Shell chính: Sidebar + Header + Context Dropdown (Lớp/Môn)
│   │   └── mistakes/
│   │       └── MistakeNotebook.tsx # Sổ lỗi sai 2 tầng (gom nhóm → chi tiết)
│   │
│   ├── features/                 # Các màn hình tính năng chính
│   │   ├── auth/
│   │   │   └── AuthPage.tsx              # Đăng nhập/Đăng ký (Firebase Auth)
│   │   ├── dashboard/
│   │   │   └── Dashboard.tsx             # Bảng điều khiển: XP, Level, tiến độ, dạng yếu nhất
│   │   ├── roadmap/
│   │   │   └── Roadmap.tsx               # Bản đồ lộ trình học (Tier 1→2→3, mở khóa dần)
│   │   ├── question-type/
│   │   │   └── QuestionTypeDetail.tsx    # Chi tiết dạng bài (Lý thuyết + Ví dụ mẫu + Hướng dẫn)
│   │   ├── practice-engine/
│   │   │   └── PracticeEngine.tsx        # ⭐ Bộ máy luyện tập (chỉ hiện dạng bài đã unlock)
│   │   ├── exam-engine/
│   │   │   └── ExamEngine.tsx            # Thi thử (timer + chấm điểm tự động)
│   │   ├── ai-tutor/
│   │   │   └── GeneralAiTutor.tsx        # Chat AI gia sư tổng quát (không gắn câu hỏi cụ thể)
│   │   ├── premium/
│   │   │   └── PremiumPricing.tsx        # Trang nâng cấp Premium
│   │   └── teacher/
│   │       └── TeacherDashboard.tsx       # Dashboard giáo viên (chấm bài, xem tiến độ học sinh)
│   │
│   └── utils/
│       ├── theme.ts              # ⭐ Hàm tính mastery score, XP→stars, subject theme colors
│       ├── answerValidator.ts    # Validate đáp án (exact, numeric, expression, choice...)
│       ├── greetingHelper.ts     # Lời chào thông minh theo thời gian trong ngày
│       ├── subject.ts            # Helper map SubjectCode → tên tiếng Việt
│       ├── cn.ts                 # clsx + tailwind-merge
│       └── proofImages.ts        # Helper xử lý ảnh proof
│
├── functions/                    # ═══ FIREBASE CLOUD FUNCTIONS (Backend) ═══
│   ├── src/
│   │   ├── index.ts              # Entry point (export các Cloud Function)
│   │   ├── config.ts             # Cấu hình Firebase Admin + Gemini API key
│   │   ├── types.ts              # Types cho Cloud Functions
│   │   ├── handlers/
│   │   │   ├── callGeminiProxy.ts    # ⭐ Main handler: gọi Gemini AI (RAG, tutor, eval)
│   │   │   ├── diagnose.ts           # Chẩn đoán học lực đầu vào
│   │   │   └── payment.ts            # Xử lý thanh toán Premium
│   │   └── services/
│   │       ├── gemini.ts             # Gemini SDK client
│   │       ├── aiProviders.ts        # Abstraction layer cho nhiều AI provider
│   │       ├── profile.ts            # Quản lý hồ sơ học sinh trên Firestore
│   │       ├── relevance.ts          # Đánh giá mức độ liên quan của câu hỏi
│   │       └── scaffolding.ts        # Chiến lược hỗ trợ từng bước (scaffolding)
│   ├── package.json
│   └── tsconfig.json
│
├── firestore.rules               # Quy tắc bảo mật Firestore (owner-based + teacher role)
├── storage.rules                 # Quy tắc bảo mật Firebase Storage
├── firebase.json                 # Cấu hình Firebase project
├── firestore.indexes.json        # Firestore composite indexes
├── vite.config.ts                # Vite config (react plugin + tailwind plugin + @/ alias)
├── tsconfig.json                 # TypeScript config root
├── tsconfig.app.json             # TS config cho src/
├── tsconfig.node.json            # TS config cho vite.config
├── eslint.config.js              # ESLint flat config
├── index.html                    # HTML entry point
│
├── docs/                         # Tài liệu hướng dẫn
│   ├── content-guidelines.md     # Quy cách soạn nội dung câu hỏi
│   ├── question-authoring-guide.md # Hướng dẫn tạo câu hỏi mới
│   ├── learning-roadmap.md       # Lộ trình học tập tổng quan
│   ├── student-learning-flow.md  # Luồng trải nghiệm học sinh
│   ├── ai/                       # Tài liệu về AI integration
│   └── math/                     # Tài liệu chuyên môn Toán
│
└── public/                       # Tài nguyên tĩnh (favicon, manifest)
```

---

## 3. Mô Hình Dữ Liệu (Data Model)

### 3.1 Cấu trúc phân cấp nội dung

```
Grade (grade9 | grade10)
  └── Subject (SubjectCode: 'math' | 'english' | 'chemistry' | 'physics' | 'biology')
        └── Topic (Chương/Chặng)
              ├── tier: 1 | 2 | 3          ← Chặng học tập (1 = cơ bản, 2 = nâng cao, 3 = chuyên sâu)
              └── QuestionType (Dạng bài)
                    ├── difficulty: 'easy' | 'medium' | 'hard'
                    ├── examFrequency: 'low' | 'medium' | 'high'
                    ├── recognitionSigns: string[]     ← Dấu hiệu nhận dạng
                    ├── solvingSteps: string[]          ← Các bước giải
                    ├── commonMistakes: string[]        ← Lỗi sai thường gặp
                    ├── theory?: string[]               ← Lý thuyết
                    ├── subTypes?: SubType[]             ← Phân dạng con
                    └── Question (Câu hỏi)
                          ├── content: string (hỗ trợ LaTeX \\( ... \\))
                          ├── options?: string[]         ← Trắc nghiệm
                          ├── correctAnswer: string
                          ├── answerSchema?: AnswerSchema ← Form trả lời phức tạp
                          └── Solution (Lời giải)
                                ├── recognition: string
                                ├── detailedSteps: SolutionStep[]
                                ├── finalAnswer: string
                                ├── commonMistakes: string[]
                                └── reviewSuggestions: string[]  ← ⚠️ BẮT BUỘC
```

### 3.2 Các interface TypeScript quan trọng (src/types/index.ts)

| Interface | Mô tả | Trường bắt buộc đặc biệt |
|---|---|---|
| `SubjectCode` | Union type cho mã môn học | `'math' \| 'english' \| 'physics' \| 'chemistry' \| 'biology'` |
| `Topic` | Chương học | `tier: 1\|2\|3` |
| `QuestionType` | Dạng bài | `difficulty`, `examFrequency` — **THIẾU SẼ LỖI COMPILE** |
| `Question` | Câu hỏi | `subjectId: SubjectCode` (không phải string!) |
| `Solution` | Lời giải | `reviewSuggestions: string[]` — **BẮT BUỘC** |
| `UserProgress` | Tiến trình | `masteryLevels: Record<string, number>` (0-100, map qua `getStarsFromScore` thành 0-3 sao) |
| `UserAttempt` | Lần làm bài | `isCorrect`, `timeSpent` (giây), `createdAt` (ISO String) |
| `UserMistake` | Lỗi sai | `reviewStatus: 'new'\|'reviewing'\|'fixed'`, `nextReviewAt` |
| `AnswerSchema` | Schema form trả lời | `autoCheckMode: 'exact'\|'numeric'\|'unordered-numeric'\|...` |

### 3.3 Hệ thống Mastery Score (src/utils/theme.ts)

```
Công thức tính điểm mastery (0-100):
  - Lấy 8 lần làm bài gần nhất
  - accuracy = correctCount / totalCount → tối đa 70 điểm
  - streak bonus: +10 điểm cho mỗi câu đúng liên tiếp (tối đa +30)
  - streak penalty: -15 điểm cho mỗi câu sai liên tiếp (tối đa -30)

Chuyển đổi sang sao (getStarsFromScore):
  - 0-39 → 0 sao
  - 40-59 → 1 sao  
  - 60-79 → 2 sao
  - 80-100 → 3 sao (Mastered)
```

---

## 4. Bộ Nạp Dữ Liệu Trung Tâm (src/data/index.ts)

Đây là **điểm duy nhất** mà tất cả components lấy dữ liệu nội dung. Khi thêm môn/lớp mới, **PHẢI** cập nhật file này.

```typescript
// Các hàm chính:
getTopics(grade, subject): Topic[]
getQuestionTypes(grade, subject): QuestionType[]
getQuestions(grade, subject): Question[]
getSolutions(grade, subject): Solution[]
getMockExams(grade, subject): MockExam[]

// Mảng tổng hợp (dùng cho cross-reference):
allQuestions: Question[]   // Gộp TẤT CẢ câu hỏi mọi lớp/môn
allSolutions: Solution[]   // Gộp TẤT CẢ lời giải mọi lớp/môn
```

### Quy trình thêm môn học mới:

1. Tạo thư mục `src/data/grade{X}/{subject}/` với 4 file: `topics.ts`, `questionTypes.ts`, `questions.ts`, `solutions.ts`
2. Export named arrays (convention: `g{X}{Subject}Topics`, `g{X}{Subject}QuestionTypes`, ...)
3. Import và thêm vào `src/data/index.ts` — cập nhật cả 5 hàm getter + 2 mảng tổng hợp
4. Cập nhật `courseGroups` trong `src/components/layout/AppLayout.tsx` để hiển thị trong dropdown chọn môn
5. Chạy `npm run type-check` và `npm run lint` để xác minh

---

## 5. Kiến Trúc UI & Điều Hướng

### 5.1 Router (src/App.tsx)

| Path | Component | Mô tả |
|---|---|---|
| `/auth` | `AuthPage` | Đăng nhập / Đăng ký |
| `/dashboard` | `Dashboard` | Trang chủ (XP, tiến độ, dạng yếu) |
| `/roadmap` | `Roadmap` | Bản đồ lộ trình học (Tier 1→2→3) |
| `/question-types/:id` | `QuestionTypeDetail` | Chi tiết dạng bài (lý thuyết + ví dụ) |
| `/practice` | `PracticeEngine` | Luyện tập tự do |
| `/practice/:questionTypeId` | `PracticeEngine` | Luyện tập dạng bài cụ thể |
| `/mistakes` | `MistakeNotebook` | Sổ lỗi sai |
| `/exam` | `ExamEngine` | Thi thử |
| `/teacher` | `TeacherDashboard` | Dashboard giáo viên |
| `/premium` | `PremiumPricing` | Nâng cấp Premium |
| `/ai-tutor` | `GeneralAiTutor` | Chat AI gia sư |

### 5.2 Context Dropdown (Lớp + Môn)

AppLayout chứa **Context Dropdown** cho phép chọn tổ hợp Lớp + Môn học. Cấu trúc `courseGroups`:

```typescript
courseGroups = [
  {
    grade: 'grade9',
    gradeTitle: 'Lớp 9 Ôn vào 10',
    courses: [
      { code: 'math', name: 'Toán học', icon: '📐', isLocked: false },
      { code: 'english', name: 'Tiếng Anh', icon: '🗣️', isLocked: false },
    ]
  },
  {
    grade: 'grade10',
    gradeTitle: 'Lớp 10',
    courses: [
      { code: 'math', name: 'Toán học', icon: '📐', isLocked: false },
      { code: 'english', name: 'Tiếng Anh', icon: '🗣️', isLocked: false },
      { code: 'chemistry', name: 'Hóa học', icon: '⚗️', isLocked: false },
    ]
  },
  {
    grade: 'future',
    gradeTitle: 'Lớp 11 & 12 (Sắp ra mắt)',
    courses: [
      { code: 'physics', name: 'Vật lý', icon: '🧪', isLocked: true },
      { code: 'biology', name: 'Sinh học', icon: '🧬', isLocked: true },
    ]
  }
]
```

### 5.3 Cơ chế khóa/mở khóa nội dung

- **Tier-based locking**: Roadmap chia nội dung thành 3 tier. Học sinh phải đạt đủ mastery ở tier hiện tại mới mở khóa tier sau.
- **Practice Engine sync**: Chỉ hiển thị dạng bài thuộc tier đã mở khóa. Dạng bài ở tier bị khóa hoàn toàn ẩn.

---

## 6. Gamification & Progress System

### 6.1 XP & Level

- Mỗi câu trả lời đúng → nhận XP (dựa trên `difficulty`)
- Level tính từ tổng XP tích lũy
- Hiển thị trong Header của AppLayout

### 6.2 Streak

- Đếm số ngày học liên tục
- Hiển thị hiệu ứng ngọn lửa 🔥 trong Header
- Mất streak nếu nghỉ 1 ngày

### 6.3 LocalStorage → Cloud Sync

```
Luồng dữ liệu:
  1. Mọi action → ghi vào LocalStorage TỨC THÌ (zero latency)
  2. Nếu user đã đăng nhập + có mạng → tự động sync lên Firestore
  3. Khi đăng nhập mới → merge Guest data ↔ Cloud data (dedup by ID + timestamp)
  4. Zustand store.refreshProgress() → trigger UI re-render
```

### 6.4 Các key trong LocalStorage

| Key | Nội dung | Cấu trúc |
|---|---|---|
| `otv10_attempts` | Lịch sử làm bài | `Record<userId, UserAttempt[]>` |
| `otv10_mistakes` | Sổ lỗi sai | `Record<userId, UserMistake[]>` |
| `otv10_progress` | Tiến trình mastery | `Record<userId, UserProgress>` |
| `otv10_exam_results` | Kết quả thi thử | `Record<userId, ExamResult[]>` |
| `otv10_selected_grade` | Lớp đang chọn | `'grade9' \| 'grade10'` |
| `otv10_sidebar_collapsed` | Trạng thái sidebar | `'true' \| 'false'` |

---

## 7. Firebase Backend

### 7.1 Firestore Collections

```
users/{userId}                    # Hồ sơ: isPremium, role, displayName
teachers/{teacherUid}             # active: boolean, role: "teacher"
users/{userId}/progress/{doc}     # UserProgress (cloud copy)
users/{userId}/attempts/{doc}     # UserAttempt (cloud copy)
users/{userId}/mistakes/{doc}     # UserMistake (cloud copy)
users/{userId}/examResults/{doc}  # ExamResult (cloud copy)
```

### 7.2 Cloud Functions

| Function | Handler | Mô tả |
|---|---|---|
| `callGeminiProxy` | `handlers/callGeminiProxy.ts` | Gọi Gemini AI (RAG, tutor chat, auto-evaluate bài giải) |
| `diagnose` | `handlers/diagnose.ts` | Chẩn đoán học lực đầu vào |
| `payment` | `handlers/payment.ts` | Xử lý thanh toán Premium |

### 7.3 Security Rules (firestore.rules)

- **Owner-based**: User chỉ đọc/ghi dữ liệu của chính mình
- **Teacher role**: Giáo viên có thể đọc bài làm học sinh và ghi feedback
- **Bootstrap teacher**: Hardcoded UID cho admin ban đầu
- **Teacher write**: Chỉ được update các field `isCorrect`, `gradingMode`, `teacherFeedback`, `syncedAt`

---

## 8. AI Integration (aiService.ts)

### Các tính năng AI:

1. **AI Tutor Panel** (`AiTutorPanel.tsx`): Chat hỏi đáp nhúng trong PracticeEngine, có ngữ cảnh câu hỏi đang làm
2. **General AI Tutor** (`GeneralAiTutor.tsx`): Chat AI tổng quát không gắn câu hỏi
3. **Auto Evaluation**: AI chấm bài giải tay (ảnh upload) bằng `AiEvaluation` schema
4. **RAG**: Tìm kiếm kiến thức liên quan từ cơ sở dữ liệu nội bộ

### Luồng gọi AI:

```
Client (aiService.ts)
  → Firebase Cloud Function (callGeminiProxy)
    → Gemini API (với systemInstruction + RAG context)
      → Trả response text về client
```

---

## 9. Khóa Học Hóa Học 10 — Trạng Thái Phát Triển

### 9.1 Triết lý thiết kế

- **Nguồn gốc**: Chuẩn đầu ra Chương trình GDPT 2018 (Thông tư 32/2018/TT-BGDĐT)
- **SGK chính**: Hóa học 10 – Kết nối tri thức với cuộc sống (thống nhất toàn quốc từ 2026-2027)
- **Phương pháp**: Xây theo cây kiến thức, không bám máy móc SGK; tích hợp 3 tầng biểu diễn (Vĩ mô ↔ Vi mô ↔ Kí hiệu)
- **Đánh giá**: Theo Thông tư 22/2021 với 4 tầng (Chẩn đoán → Exit quiz → Kiểm tra chương → Spaced Retrieval)

### 9.2 Phân luồng học sinh

| Nhóm | Đặc điểm | Lộ trình |
|---|---|---|
| **Nhóm 1**: Mất gốc | Sợ Hóa, yếu tính toán, thiếu nền THCS | Module 0 (Cầu nối) → Module 1→... |
| **Nhóm 2**: Trung bình - Khá | Muốn 7-9 điểm, cần hệ thống rõ ràng | Module 1 → 7 (bám sát SGK) |
| **Nhóm 3**: B00/HSG | Cần hiểu bản chất lượng tử, nhiệt động | Tất cả + Chuyên đề nâng cao |

### 9.3 Cấu trúc 9 Module (src/data/grade10/chemistry/topics.ts)

| ID | Module | Tên | Tier |
|---|---|---|---|
| `chem10-t0` | Module 0 | Nhập môn Hóa học & Cầu nối THCS | 1 |
| `chem10-t1` | Module 1 | Cấu tạo nguyên tử | 1 |
| `chem10-t2` | Module 2 | Bảng tuần hoàn & Định luật tuần hoàn | 1 |
| `chem10-t3` | Module 3 | Liên kết hóa học | 1 |
| `chem10-t4` | Module 4 | Phản ứng oxi hóa – khử | 2 |
| `chem10-t5` | Module 5 | Năng lượng hóa học | 2 |
| `chem10-t6` | Module 6 | Tốc độ phản ứng hóa học | 2 |
| `chem10-t7` | Module 7 | Nguyên tố nhóm VIIA (Halogen) | 3 |
| `chem10-t8` | Module 8 | Tổng hợp và Đánh giá năng lực | 3 |

### 9.4 Trạng thái triển khai hiện tại

| Thành phần | Trạng thái | Chi tiết |
|---|---|---|
| Module 0: Cầu nối THCS | ✅ Hoàn thành | 4 dạng bài + 4 câu hỏi + 4 lời giải |
| Module 1: Cấu tạo nguyên tử | ✅ Hoàn thành | 7 dạng bài (H10-A01→A07) + 7 câu hỏi + 7 lời giải |
| Module 2-8 | ❌ Chưa bắt đầu | Cần lập ma trận chuẩn đầu ra trước |
| Đặc tả sản phẩm | ✅ Hoàn thành | Ma trận Module 1, phân nhóm HS, tiêu chuẩn mastery |
| UI Integration | ✅ Hoàn thành | Hóa học hiện trong dropdown, Roadmap, PracticeEngine |

### 9.5 Lưu ý quan trọng về GDPT 2018

- **Thể tích chất khí đo ở điều kiện chuẩn (đkc)**: Sử dụng **24,79 lít/mol** (25°C, 1 bar). Hằng số cũ 22,4 lít/mol (đktc, 0°C) KHÔNG còn dùng trong chương trình mới.
- **Cấu hình electron**: Chỉ tập trung 20 nguyên tố đầu cho chương trình cốt lõi (không dạy kim loại chuyển tiếp ở mức cốt lõi).

---

## 10. Quy Ước Code & Lưu Ý Kỹ Thuật

### 10.1 Convention đặt ID

```
Lớp 9 Toán:     math-t{N}, math-qt{N}, math-q{N}, math-s{N}
Lớp 9 Anh:      eng-t{N}, eng-qt{N}, eng-q{N}, eng-s{N}
Lớp 10 Toán:    math10-t{N}, math10-qt{N}, math10-q{N}, math10-s{N}
Lớp 10 Anh:     eng10-t{N}, eng10-qt{N}, eng10-q{N}, eng10-s{N}
Lớp 10 Hóa:     chem10-t{N}, chem10-qt{NN}, chem10-q{NN}, chem10-s{NN}
```

### 10.2 Import alias

- `@/` = `src/` (cấu hình trong `vite.config.ts` và `tsconfig.app.json`)

### 10.3 Lỗi thường gặp khi sửa code

| Lỗi | Nguyên nhân | Cách sửa |
|---|---|---|
| Type error trên `subjectId` | Truyền `string` thay vì `SubjectCode` | Cast hoặc dùng đúng union type |
| QuestionType thiếu field | Quên `difficulty` hoặc `examFrequency` | Thêm cả 2 field bắt buộc |
| Solution thiếu field | Quên `reviewSuggestions` | Thêm `reviewSuggestions: string[]` |
| Dữ liệu mới không hiện trên UI | Chưa cập nhật `src/data/index.ts` | Import + thêm vào cả 5 getter functions |
| Môn học mới không hiện dropdown | Chưa cập nhật `courseGroups` trong AppLayout | Thêm entry mới vào mảng courses |

### 10.4 Scripts

```bash
npm run dev        # Khởi chạy dev server (Vite)
npm run build      # tsc -b && vite build
npm run lint       # ESLint check
npm run type-check # TypeScript type check (tsc -b --noEmit)
npm run deploy     # Build + Firebase deploy hosting
```

---

## 11. Lộ Trình Phát Triển Tiếp Theo

### Ưu tiên 1 (Hóa học 10):
1. Lập ma trận chuẩn đầu ra cho Chương 2 (Bảng tuần hoàn) → Chương 7 (Halogen)
2. Tạo dữ liệu `questionTypes.ts`, `questions.ts`, `solutions.ts` cho từng chương
3. Mở rộng ngân hàng câu hỏi Module 0 và Module 1

### Ưu tiên 2 (Platform):
- Thêm môn Vật lý 10, Sinh học 10
- Mở rộng hỗ trợ Lớp 11, Lớp 12
- Nâng cấp hệ thống thi thử với đề thi thực tế

### Ưu tiên 3 (Features):
- Spaced Retrieval tự động
- Hệ thống chẩn đoán đầu vào thông minh
- Báo cáo phân tích cho phụ huynh/giáo viên

---

## 12. Checklist Trước Khi Commit

- [ ] `npm run type-check` — Không lỗi TypeScript
- [ ] `npm run lint` — Không lỗi ESLint
- [ ] Cập nhật `src/data/index.ts` nếu thêm dữ liệu mới
- [ ] Cập nhật `AppLayout.tsx courseGroups` nếu thêm môn/lớp mới
- [ ] Cập nhật `AGENT.md` nếu thay đổi kiến trúc hoặc data model
- [ ] Cập nhật `README.md` nếu thay đổi hướng dẫn sử dụng hoặc deploy
