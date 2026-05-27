# 🎓 Hướng Dẫn Kiến Trúc & Cấu Trúc Mã Nguồn (src/) - Ôn Thi Vào Lớp 10

Hệ thống ôn thi trực tuyến lớp 9 lên lớp 10 dành cho hai môn học cốt lõi: **Toán học** và **Tiếng Anh**. Dự án được xây dựng dựa trên kiến trúc **Local-first** kết hợp đồng bộ hóa đám mây đám mây thông qua **Firebase**, mang lại trải nghiệm mượt mà, phản hồi tức thì và hoạt động tốt ngay cả khi không có kết nối mạng (offline).

---

## 🗺️ Bản Đồ Cấu Trúc Thư Mục `src/`

Mã nguồn được tổ chức theo mô hình kết hợp giữa **Feature-based** (quản lý theo tính năng nghiệp vụ) và **Layer-based** (quản lý theo các lớp dịch vụ dùng chung). Dưới đây là cấu trúc chi tiết:

```text
src/
├── assets/                  # Tài nguyên tĩnh (Hình ảnh, minh họa, icons...)
├── types/                   # Định nghĩa các TypeScript interfaces cốt lõi
│   └── index.ts             # Kiểu dữ liệu cho Question, Subject, Milestone, Progress...
├── data/                    # Dữ liệu tĩnh và ngân hàng câu hỏi ôn tập
│   ├── mathData.ts          # Cấu trúc lộ trình & câu hỏi môn Toán học (Hỗ trợ LaTeX)
│   └── englishData.ts       # Cấu trúc lộ trình & câu hỏi môn Tiếng Anh
├── services/                # Các dịch vụ xử lý dữ liệu và đồng bộ
│   ├── firebase.ts          # Khởi tạo SDK Firebase (Auth, Firestore)
│   ├── storage.ts           # Trình bao bọc (Wrapper) làm việc an toàn với LocalStorage
│   ├── progressService.ts   # Core engine quản lý tiến trình, XP, Level, Streak & Cloud Sync
│   └── store.ts             # Quản lý State toàn cục của ứng dụng bằng Zustand
├── components/              # Các UI Components dùng chung
│   ├── ui/                  # Các component UI cơ bản (Button, Card, Progress, Tabs)
│   ├── common/              # Các logic component dùng chung
│   │   └── LatexRenderer.tsx # Bộ giải mã và hiển thị công thức Toán học bằng KaTeX
│   ├── layout/              # Khung giao diện chính
│   │   └── AppLayout.tsx    # Bố cục sidebar, header điều hướng, hiển thị XP/Streak
│   └── mistakes/            # Thành phần Sổ lỗi sai
│       └── MistakeNotebook.tsx # Sổ lỗi sai 2 tầng: Gom nhóm theo Dạng bài & Chi tiết câu sai
└── features/                # Các màn hình tính năng độc lập
    ├── auth/                # Màn hình đăng nhập/đăng ký & đồng bộ dữ liệu đám mây
    │   └── AuthPage.tsx
    ├── dashboard/           # Bảng điều khiển chính hiển thị XP, Level, Streak & Biểu đồ tiến độ
    │   └── Dashboard.tsx
    ├── roadmap/             # Bản đồ lộ trình học theo chặng (Milestones) mở khóa dần
    │   └── Roadmap.tsx
    ├── question-type/       # Trang chi tiết dạng bài (Lý thuyết, Ví dụ mẫu & Hướng dẫn giải)
    │   └── QuestionTypeDetail.tsx
    ├── practice-engine/     # Bộ máy luyện tập tự do (Đồng bộ ẩn các dạng bài chưa học)
    │   └── PracticeEngine.tsx
    └── exam-engine/         # Bộ máy thi thử (Tính thời gian làm bài & Chấm điểm tự động)
        └── ExamEngine.tsx   # (Đang tạm ẩn để tối ưu hóa lộ trình)
```

---

## 🛠️ Chi Tiết Các Lớp & Thành Phần Cốt Lõi

### 1. Quản Lý Kiểu Dữ Liệu (`src/types/index.ts`)
Định nghĩa mô hình dữ liệu chặt chẽ cho toàn bộ ứng dụng:
*   `Subject`: Đại diện cho môn học (`math` hoặc `english`).
*   `Topic`: Các chương lớn của môn học. Có thuộc tính `tier` (1, 2, 3) đại diện cho các chặng học tập:
    *   **Tier 1 (Chặng 1)**: Mục tiêu điểm 5 (Đại số cơ bản, căn thức, ngữ pháp cơ bản).
    *   **Tier 2 (Chặng 2)**: Mục tiêu điểm 7-8 (Phương trình bậc hai, hệ thức Vi-ét, từ vựng nâng cao).
    *   **Tier 3 (Chặng 3)**: Mục tiêu điểm 9-10 (Bất đẳng thức, hình học phân loại học sinh giỏi).
*   `QuestionType`: Từng dạng bài chi tiết nằm trong Topic (chứa dấu hiệu nhận biết, các bước giải, lỗi sai thường gặp).
*   `Question`: Cấu trúc câu hỏi trắc nghiệm hoặc tự điền đáp án, hỗ trợ LaTeX cho công thức toán học.
*   `Solution`: Lời giải chi tiết của các ví dụ mẫu (gồm các bước giải chi tiết và đáp án cuối cùng).
*   `UserProgress`: Trạng thái học tập của học sinh, lưu trữ mức độ thành thạo (`masteryLevels` từ 0 đến 3) của từng dạng bài.

---

### 2. Dịch Vụ & Quản Lý Trạng Thái (`src/services/`)
Được thiết kế theo nguyên tắc **Local-First**, bảo đảm hiệu năng tối đa:

*   **`storage.ts`**: Quản lý việc lưu trữ ngoại tuyến. Mọi hành động của học sinh (làm đúng/sai, nhận XP, tích lũy Streak) được ghi nhận tức thì vào LocalStorage.
*   **`progressService.ts`**: Trọng tâm xử lý logic gamification và đồng bộ:
    *   Tính toán XP nhận được sau mỗi câu trả lời đúng (dựa trên độ khó câu hỏi).
    *   Tự động tính toán Level (Cấp độ) dựa trên tổng XP tích lũy.
    *   Kiểm tra và cập nhật Streak (chuỗi ngày học liên tục) hàng ngày.
    *   Kích hoạt cơ chế tự động gửi dữ liệu tiến độ (`UserProgress`, `Mistakes`, `Attempts`) lên Firebase Firestore khi thiết bị trực tuyến và người dùng đã đăng nhập.
*   **`store.ts`**: Quản lý State toàn cục bằng **Zustand** giúp chuyển đổi nhanh chóng giữa các màn hình, cập nhật giao diện thời gian thực và quản lý phiên đăng nhập của người dùng.
*   **`firebase.ts`**: Cấu hình kết nối Firebase Authentication và Cloud Firestore Database.

---

### 3. Giao Diện Bố Cục (`src/components/layout/AppLayout.tsx`)
Bao bọc toàn bộ ứng dụng, đóng vai trò như một bảng thông tin điều hướng:
*   **Thanh điều hướng bên (Sidebar)**: Chuyển đổi linh hoạt giữa các tab: Bảng điều khiển, Lộ trình học, Luyện tập tự do, Sổ lỗi sai.
*   **Hệ thống Gamification Header**: Hiển thị theo thời gian thực:
    *   **Cấp độ (Level)** & Thanh tiến trình XP để kích thích học tập.
    *   **Chuỗi ngày học tập (Streak)** đi kèm hiệu ứng ngọn lửa.
    *   **Trạng thái đồng bộ đám mây (Cloud Sync)**: Cho học sinh biết dữ liệu đã được lưu trữ an toàn trên máy chủ hay chưa.
    *   **Môn học hiện tại (Toán/Anh)**: Cho phép chuyển đổi nhanh chóng ở đầu trang.

---

### 4. Sổ Lỗi Sai Phân Cấp (`src/components/mistakes/MistakeNotebook.tsx`)
Sổ lỗi sai được thiết kế thông minh nhằm tránh việc học sinh bị quá tải khi tích tụ nhiều câu sai:
*   **Tầng 1 (Gom nhóm dạng bài)**: Gom nhóm tất cả các câu làm sai theo từng **Dạng bài cụ thể**. Hiển thị tổng số lỗi sai tích lũy của dạng bài đó để học sinh ưu tiên sửa đổi.
*   **Tầng 2 (Chi tiết sửa lỗi)**: Khi nhấn vào một dạng bài, học sinh sẽ thấy chi tiết các câu hỏi mình từng làm sai, câu trả lời sai trước đó, và có nút để **Làm lại** câu hỏi đó trực tiếp. Khi làm lại đúng, câu hỏi sẽ được xóa khỏi Sổ lỗi sai hoặc đánh dấu là đã khắc phục.

---

### 5. Lộ Trình Học & Luyện Tập Đồng Bộ Chặt Chẽ

#### 🛣️ Lộ Trình Học (`src/features/roadmap/Roadmap.tsx`)
Hiển thị tiến trình học tập dưới dạng một bản đồ chặng đường. Học sinh phải tích lũy đủ điểm tiến trình ở chặng hiện tại để có thể mở khóa các chặng tiếp theo (ví dụ: Hoàn thành chặng 1 - điểm 5 mới mở khóa được chặng 2 - điểm 7-8).

#### 🎯 Bộ Máy Luyện Tập (`src/features/practice-engine/PracticeEngine.tsx`)
Để tránh hiện tượng học sinh bị ngợp trước hàng trăm dạng bài tập, hệ thống áp dụng cơ chế **đồng bộ khóa nghiêm ngặt**:
*   Chỉ hiển thị các dạng bài thuộc các chặng đã được mở khóa trên **Lộ trình học**.
*   Các dạng bài thuộc chặng bị khóa sẽ hoàn toàn ẩn đi trong danh sách luyện tập tự do cho đến khi học sinh mở khóa chặng đó trên lộ trình học tập.

---

### 6. Hiển Thị Công Thức Toán Học LaTeX (`src/components/common/LatexRenderer.tsx`)
Đảm bảo các công thức toán học phức tạp (như căn thức, phân số, phương trình) được hiển thị trực quan và sắc nét:
*   Sử dụng thư viện **KaTeX** để render công thức siêu tốc.
*   Hỗ trợ tự động nhận diện và phân tách các chuỗi LaTeX toán học được bao bọc trong định dạng `\\( ... \\)`.

---

## ⚡ Hướng Dẫn Khởi Chạy & Triển Khai (Deployment)

### 📋 Yêu Cầu Hệ Thống
*   **Node.js**: Phiên bản 18.x trở lên.
*   **npm**: Phiên bản 9.x trở lên.

### 🏃 Chạy Dưới Môi Trường Local
1. Cài đặt các gói phụ thuộc:
   ```bash
   npm install
   ```
2. Chạy ứng dụng ở chế độ phát triển (Development):
   ```bash
   npm run dev
   ```
3. Kiểm tra lỗi TypeScript & ESLint (Trước khi build):
   ```bash
   npm run type-check
   npm run lint
   ```

### 🚀 Triển Khai Lên Firebase Hosting (Deploy)
Dự án được cấu hình script tự động đóng gói và đẩy lên Firebase Hosting:
*   Chạy câu lệnh duy nhất sau để build production và deploy trực tiếp:
    ```bash
    npm run deploy
    ```
    *(Script này sẽ tự động chạy biên dịch kiểu dữ liệu `tsc`, đóng gói tối ưu hóa qua `vite build` và gọi lệnh CLI của Firebase để upload bản phân phối lên host).*

---

> [!NOTE]
> Dự án được xây dựng với mục tiêu nâng cao trải nghiệm tự học cá nhân hóa. Mọi điều chỉnh logic nghiệp vụ hoặc cấu trúc dữ liệu đều cần được cập nhật vào tệp định nghĩa kiểu `src/types/index.ts` để đảm bảo tính an toàn dữ liệu.
