# 🎓 Ôn Thi Vào 10 — Hệ Thống Ôn Luyện Trực Tuyến

Nền tảng ôn luyện cá nhân hóa cho học sinh từ **Lớp 9** (ôn thi tuyển sinh vào lớp 10) đến **Lớp 10** (THPT). Hỗ trợ đa môn: **Toán học**, **Tiếng Anh**, **Hóa học** và đang mở rộng thêm Vật lý, Sinh học.

🔗 **Live**: [Firebase Hosting](https://on-thi-vao-10.web.app)

---

## ✨ Điểm Nổi Bật

| Tính năng | Mô tả |
|---|---|
| 🧠 **AI Gia Sư** | Chat trực tiếp với AI (Google Gemini) để giải đáp thắc mắc — nhận phân tích bài giải từng bước |
| 📐 **Đa Môn Học** | Toán, Tiếng Anh, Hóa học (Lớp 10) — tất cả trong một ứng dụng duy nhất |
| 🗺️ **Lộ Trình Học** | Bản đồ học tập 3 chặng, mở khóa dần theo mastery — không bao giờ bị ngợp |
| 🔥 **Gamification** | XP, Level, Streak ngày học, thanh tiến trình — thúc đẩy động lực học |
| 📓 **Sổ Lỗi Sai** | Tự động gom nhóm câu sai theo dạng bài, cho phép làm lại đến khi đúng |
| ⚡ **Local-First & Sync** | Phản hồi tức thì, hoạt động offline — đồng bộ lên Cloud khi có mạng |
| 👩‍🏫 **Dashboard Giáo Viên** | Giáo viên chấm bài, nhận xét, theo dõi tiến độ lớp — đã tối ưu O(1) query reads |
| 📱 **Responsive** | Tối ưu cho mọi thiết bị: Desktop, Tablet, Mobile (Gia sư AI tối ưu app-like, Lịch sử dạng Drawer & Hồ sơ dạng Bottom Sheet) |
| ⌨️ **Bàn Phím Toán Học** | Tự động đổi layout phím chuyên dụng theo từng dạng toán (Parabol, Vectơ, Lượng giác) và hỗ trợ nhập 2 ô đáp án độc lập |
| 📺 **Video Bài Giảng** | Tích hợp xem bài giảng video 7 chương môn Hóa học 10 (hỗ trợ dán link YouTube bất kỳ, trình phát bảo mật youtube-nocookie) |
| 📧 **Thông Báo Email** | Phát bản tin email thông báo qua Resend API + Cloud Functions, tên miền `ezonthi.com`, kiến trúc danh bạ 1-Read & phân đợt 95 mail/ngày |
| ⚡ **Siêu Hiệu Năng** | Code Splitting giảm 93.3% bundle khởi động chính (5.3MB -> 350KB); tối ưu hóa triệt để N+1 Database Reads cho giáo viên |

---

## 🛠️ Technology Stack

| Layer | Công nghệ | Phiên bản |
|---|---|---|
| **Frontend** | React + TypeScript | React 19, TS 6 |
| **Build Tool** | Vite | 8.x |
| **Styling** | Tailwind CSS (qua `@tailwindcss/vite` plugin) | 4.x |
| **State** | Zustand (global) + LocalStorage (persistence) | 5.x |
| **Routing** | React Router DOM | 7.x |
| **Math Rendering** | KaTeX | 0.17.x |
| **Charts** | Recharts | 3.x |
| **Icons** | Lucide React | 1.x |
| **Backend** | Firebase (Auth, Firestore, Functions, Hosting, Storage) | 12.x |
| **AI Engine** | Google Gemini (qua Cloud Function proxy) | — |
| **Email Service** | Resend API (Custom Domain `ezonthi.com`) | — |
| **UI Components** | Shadcn/ui primitives (Button, Card, Progress, Tabs) | — |

---

## 🗺️ Cấu Trúc Thư Mục

```text
src/
├── types/index.ts               # Mọi TypeScript interface của toàn app
├── data/                        # Ngân hàng nội dung tĩnh (câu hỏi, lời giải, dạng bài)
│   ├── index.ts                 # Bộ nạp trung tâm (getTopics, getQuestionTypes, getQuestions, getSolutions)
│   ├── grade9/                  # Dữ liệu Lớp 9 (JSON): math/, english/
│   └── grade10/                 # Dữ liệu Lớp 10 (TypeScript): math/, english/, chemistry/
├── services/                    # Lớp dịch vụ
│   ├── firebase.ts              # Khởi tạo Firebase SDK
│   ├── storage.ts               # LocalStorage wrapper (attempts, mistakes, progress)
│   ├── progressService.ts       # Core engine: mastery, XP, streak, cloud sync
│   ├── store.ts                 # Zustand store (subject, grade, auth, darkMode)
│   ├── aiService.ts             # Client AI wrapper (gọi Cloud Function)
│   ├── proofImageService.ts     # Upload ảnh bài giải
│   └── teacherAccessService.ts  # Kiểm tra quyền giáo viên
├── components/
│   ├── ui/                      # Primitives: Button, Card, Progress, Tabs
│   ├── common/                  # LatexRenderer, AnswerFormRenderer, ProofImageUploader
│   ├── layout/AppLayout.tsx     # Shell chính: Sidebar + Header + Context Dropdown (Lớp/Môn)
│   └── mistakes/MistakeNotebook.tsx  # Sổ lỗi sai 2 tầng
├── features/                    # Các màn hình chính
│   ├── auth/AuthPage.tsx
│   ├── dashboard/Dashboard.tsx
│   ├── roadmap/Roadmap.tsx
│   ├── question-type/QuestionTypeDetail.tsx
│   ├── practice-engine/PracticeEngine.tsx
│   ├── exam-engine/ExamEngine.tsx
│   ├── ai-tutor/GeneralAiTutor.tsx
│   ├── premium/PremiumPricing.tsx
│   └── teacher/                 # Dashboard Giáo viên, Chấm bài & Email Broadcast
│       ├── TeacherDashboard.tsx
│       └── components/EmailBroadcastManager.tsx
└── utils/                       # Utilities: theme.ts, answerValidator.ts, logger.ts, cn.ts, ...

functions/                       # Firebase Cloud Functions (Backend)
├── src/handlers/
│   ├── callGeminiProxy.ts       # Proxy gọi Gemini AI
│   ├── diagnose.ts              # Chẩn đoán học lực
│   ├── payment.ts               # Xử lý thanh toán PayOS
│   └── email.ts                 # ⭐ Handler gửi mail Resend, 1-Read Email Directory & Broadcast Batching
└── src/services/                # gemini.ts, aiProviders.ts, profile.ts, ...
```

---

## 🏗️ Kiến Trúc Hệ Thống

### Mô Hình Dữ Liệu

```
Grade (grade9 | grade10)
  └── Subject (math | english | chemistry | physics | biology)
        └── Topic (Chương, có tier: 1 | 2 | 3)
              └── QuestionType (Dạng bài: theory, solvingSteps, commonMistakes)
                    └── Question (Câu hỏi: LaTeX, options, answerSchema)
                          └── Solution (Lời giải: detailedSteps, reviewSuggestions)
```

### Kiến Trúc Local-First

```
┌─────────────────────────────────────────────────────────────┐
│  BROWSER (React App)                                        │
│  ┌──────────┐  ┌───────────┐  ┌──────────────────────────┐ │
│  │ Zustand   │  │ storage   │  │ progressService          │ │
│  │ Store     │←→│ Service   │←→│ (XP, mastery, streak,    │ │
│  │           │  │ (LS CRUD) │  │  merge guest↔auth)       │ │
│  └──────────┘  └───────────┘  └──────────┬───────────────┘ │
│                                           │ sync (online)   │
└───────────────────────────────────────────┼─────────────────┘
                                            ▼
┌─────────────────────────────────────────────────────────────┐
│  FIREBASE                                                    │
│  ┌──────────┐  ┌───────────┐  ┌──────────────────────────┐ │
│  │ Auth     │  │ Firestore │  │ Cloud Functions          │ │
│  │ (Google, │  │ (progress,│  │ ├─ callGeminiProxy       │ │
│  │  Email)  │  │  attempts,│  │ ├─ diagnose              │ │
│  │          │  │  mistakes,│  │ └─ payment               │ │
│  │          │  │  queue)   │  │                          │ │
│  └──────────┘  └───────────┘  └──────────────────────────┘ │
│  ┌──────────┐  ┌───────────┐                                │
│  │ Storage  │  │ Hosting   │                                │
│  │ (proof   │  │ (SPA)     │                                │
│  │  images) │  │           │                                │
│  └──────────┘  └───────────┘                                │
└─────────────────────────────────────────────────────────────┘
```

### Gamification

| Metric | Cách tính |
|---|---|
| **Mastery Score** (0-100) | Accuracy (8 lần gần nhất) × 70 + Streak bonus/penalty (±30) |
| **Stars** (0-3) | 0-39 → 0⭐, 40-59 → 1⭐, 60-79 → 2⭐, 80-100 → 3⭐ |
| **XP** | +XP mỗi câu đúng (theo difficulty) |
| **Level** | Tính từ tổng XP tích lũy |
| **Streak** | Số ngày học liên tục |

---

## 📚 Nội Dung Học Tập Hiện Có

### Lớp 9 — Ôn Thi Vào 10

| Môn | Trạng thái | Nội dung |
|---|---|---|
| **Toán học** | ✅ Đầy đủ | 3 chặng: Đại số cơ bản → Phương trình/Hệ thức → Hình học nâng cao |
| **Tiếng Anh** | ✅ Đầy đủ | Ngữ pháp, từ vựng, đọc hiểu |

### Lớp 10

| Môn | Trạng thái | Nội dung |
|---|---|---|
| **Toán học** | ✅ Đầy đủ nền tảng + kho nâng cao | Nội dung SGK đầy đủ và 192 câu Chuyên đề nâng cao A–D độc lập thuộc 8 mảng, gồm 32 bài Olympic |
| **Tiếng Anh** | ✅ Đầy đủ | Ngữ pháp nâng cao, từ vựng, kỹ năng đọc viết |
| **Hóa học** | ✅ Hoàn thành Module 0-7 | Module 0 (Cầu nối THCS) + Module 1 đến 7 đã hoàn thành MVP; Module 8 đang phát triển |
| **Vật lý** | ✅ Đầy đủ nền tảng + kho nâng cao | 7 module cốt lõi, kiểm tra định kỳ và 168 câu Chuyên đề nâng cao A–D độc lập, gồm 28 bài dài/Olympic |
| **Sinh học** | 🔒 Sắp ra mắt | — |

Toán 10 và Vật lí 10 có các route nâng cao riêng (`/advanced-math-10`, `/advanced-physics-10`) dành cho học sinh khá giỏi. Mỗi kho có ba mức Khó/Rất khó/Cực khó, lời giải chỉ mở sau khi nộp và tiến độ tách khỏi lộ trình nền tảng.

### Khóa Hóa Học 10 — "Làm Chủ Hóa Học 10"

Khóa học được thiết kế theo chuẩn đầu ra **Chương trình GDPT 2018**, sử dụng **SGK Kết nối tri thức với cuộc sống** làm trục triển khai chính.

**Cấu trúc 9 Module:**

| Module | Nội dung | Tier | Trạng thái |
|---|---|---|---|
| 0 | Nhập môn & Cầu nối THCS | 1 | ✅ 4 dạng bài |
| 1 | Cấu tạo nguyên tử | 1 | ✅ 7 dạng bài |
| 2 | Bảng tuần hoàn & Định luật tuần hoàn | 1 | ✅ MVP |
| 3 | Liên kết hóa học | 1 | ✅ MVP |
| 4 | Phản ứng oxi hóa – khử | 2 | ✅ MVP |
| 5 | Năng lượng hóa học | 2 | ✅ MVP |
| 6 | Tốc độ phản ứng | 2 | ✅ MVP |
| 7 | Halogen (Nhóm VIIA) | 3 | ✅ MVP |
| 8 | Tổng hợp & Đánh giá | 3 | ❌ Đang phát triển |

**Phân luồng học sinh:**
- **Nhóm 1** (Mất gốc): Đi qua Module 0 bổ trợ → Module 1 trở đi
- **Nhóm 2** (Trung bình - Khá): Module 1-7 bám sát SGK, mục tiêu 7-9 điểm
- **Nhóm 3** (B00/HSG): Tất cả + chuyên đề nâng cao (lượng tử, nhiệt động)

**Hệ thống đánh giá 4 tầng** (theo Thông tư 22/2021):
1. Chẩn đoán đầu vào
2. Exit Quiz sau bài
3. Kiểm tra cuối chương
4. Spaced Retrieval (1 ngày → 3 ngày → 7 ngày → 3 tuần)

---

## ⚡ Khởi Chạy & Phát Triển

### Yêu Cầu

- **Node.js** ≥ 18.x
- **npm** ≥ 9.x

### Cài Đặt & Chạy

```bash
# 1. Cài đặt dependencies
npm install

# 2. Chạy development server
npm run dev

# 3. Kiểm tra lỗi TypeScript
npm run type-check

# 4. Kiểm tra lỗi ESLint
npm run lint

# 5. Build production
npm run build

# 6. Deploy lên Firebase Hosting
npm run deploy
```

### Cấu Hình

| File | Mục đích |
|---|---|
| `vite.config.ts` | Vite plugins (react, tailwind), alias `@/` → `src/` |
| `tsconfig.json` | TypeScript root config |
| `tsconfig.app.json` | TS config cho `src/` |
| `eslint.config.js` | ESLint flat config |
| `firebase.json` | Firebase project config (Firestore, Functions, Hosting, Storage) |
| `firestore.rules` | Quy tắc bảo mật Firestore |
| `storage.rules` | Quy tắc bảo mật Storage |

---

## 🧩 Hướng Dẫn Mở Rộng

### Thêm Môn Học Mới

1. **Tạo thư mục dữ liệu**: `src/data/grade{X}/{subject}/` với 4 file:
   - `topics.ts` — Danh sách chương (export named array)
   - `questionTypes.ts` — Danh sách dạng bài (**bắt buộc** có `difficulty` + `examFrequency`)
   - `questions.ts` — Ngân hàng câu hỏi
   - `solutions.ts` — Lời giải (**bắt buộc** có `reviewSuggestions: string[]`)

2. **Đăng ký vào bộ nạp trung tâm** (`src/data/index.ts`):
   - Import 4 arrays mới
   - Thêm vào `allQuestions`, `allSolutions`
   - Thêm `if (subject === '{code}')` vào 4 hàm getter + `getMockExams`

3. **Hiển thị trong UI** (`src/components/layout/AppLayout.tsx`):
   - Thêm entry mới vào mảng `courseGroups` → courses

4. **Kiểm tra**: `npm run type-check && npm run lint`

### Convention Đặt ID

```
Lớp 9 Toán:    math-t{N}, math-qt{N}, math-q{N}, math-s{N}
Lớp 9 Anh:     eng-t{N}, eng-qt{N}, eng-q{N}, eng-s{N}
Lớp 10 Toán:   math10-t{N}, math10-qt{N}, math10-q{N}, math10-s{N}
Lớp 10 Anh:    eng10-t{N}, eng10-qt{N}, eng10-q{N}, eng10-s{N}
Lớp 10 Hóa:    chem10-t{N}, chem10-qt{NN}, chem10-q{NN}, chem10-s{NN}
```

### Lưu Ý Khi Sửa Code

| ⚠️ Lỗi phổ biến | Nguyên nhân | Cách phòng tránh |
|---|---|---|
| Type error `subjectId` | Dùng `string` thay vì `SubjectCode` | Luôn dùng union type đúng |
| QuestionType compile error | Thiếu `difficulty` hoặc `examFrequency` | Cả 2 là **bắt buộc** |
| Solution compile error | Thiếu `reviewSuggestions` | Luôn thêm `reviewSuggestions: string[]` |
| Dữ liệu mới không hiển thị | Chưa cập nhật `data/index.ts` | Import + thêm vào getter functions |
| Môn mới không có trong dropdown | Chưa sửa `AppLayout.tsx` | Thêm vào `courseGroups` |

---

## 📁 Tài Liệu Bổ Sung

| Đường dẫn | Nội dung |
|---|---|
| `AGENT.md` | Tài liệu kỹ thuật chi tiết cho AI Agent (đọc trước khi code) |
| `docs/content-guidelines.md` | Quy cách soạn nội dung câu hỏi |
| `docs/question-authoring-guide.md` | Hướng dẫn tạo câu hỏi mới |
| `docs/learning-roadmap.md` | Lộ trình học tập tổng quan |
| `docs/student-learning-flow.md` | Luồng trải nghiệm học sinh |

---

> [!NOTE]
> Dự án sử dụng kiến trúc **Local-First**: mọi dữ liệu lưu vào LocalStorage trước, sync lên Firebase Cloud khi có mạng. Mọi thay đổi logic nghiệp vụ hoặc mô hình dữ liệu cần cập nhật `src/types/index.ts` để đảm bảo type safety.

> [!IMPORTANT]
> Khi phát triển khóa **Hóa học 10**, cần tuân thủ **Chương trình GDPT 2018**: thể tích mol khí ở đkc = **24,79 lít/mol** (25°C, 1 bar), không dùng hằng số cũ 22,4 lít/mol.
