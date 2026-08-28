import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Sparkles,
  Map,
  BookOpen,
  Bot,
  Bookmark,
  CheckCircle2,
  ArrowRight,
  XCircle,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Clock
} from 'lucide-react';
import { ROUTES } from '../../constants/routes';
import { cn } from '../../utils/cn';
import { SeoHead } from '../../components/common/SeoHead';
import { createWebPageSchema, createBreadcrumbSchema } from '../../utils/seoSchemas';

export const AboutPage: React.FC = () => {
  const navigate = useNavigate();
  const [activeDemoTab, setActiveDemoTab] = useState<'roadmap' | 'textbook' | 'mistakes' | 'aitutor'>('roadmap');

  const webPageSchema = createWebPageSchema({
    name: 'Giới thiệu Nền tảng ezonthi | Ôn Thi Vào 10 & Học Tốt THPT',
    description: 'Nền tảng ôn thi vào 10 và học tốt lớp 10, 11 theo dạng bài, kết hợp lý thuyết, luyện tập, Sổ lỗi sai và AI Gia sư.',
    url: '/about'
  });

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Trang chủ', item: '/' },
    { name: 'Giới thiệu nền tảng', item: '/about' }
  ]);

  return (
    <div className="min-h-screen bg-background text-foreground pb-20 select-none">
      <SeoHead
        title="Giới thiệu ezonthi | Ôn thi vào 10 & Học tốt lớp 10 - 11"
        description="Nền tảng ôn thi vào 10 và học tốt lớp 10, 11 theo dạng bài, có lý thuyết, luyện tập, kiểm tra, Sổ lỗi sai và AI Gia sư."
        canonicalUrl="/about"
        jsonLd={[webPageSchema, breadcrumbSchema]}
      />

      {/* 1. HERO SECTION WITH ACADEMIC TITLE */}
      <section className="academic-grid relative overflow-hidden pt-8 pb-14 md:pt-14 md:pb-20 border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 section-kicker">
            <Sparkles size={14} className="text-brand-action" />
            Phương Pháp Học Dạng Bài Cốt Lõi & Ma Trận SGK Chuẩn GDPT 2018
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.75rem] font-black tracking-[-0.05em] font-sans leading-[1.08] text-foreground max-w-4xl">
            Học đúng trọng tâm đề thi.<br className="hidden sm:inline" />
            <span className="brand-marker text-brand-ink"> Hiểu bài trước, tăng điểm sau.</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-muted-foreground font-medium max-w-3xl leading-8">
            Hệ thống tự học cho học sinh lớp 9–11: chẻ nhỏ kiến thức thành các dạng bài 15 phút, nối liền lý thuyết, luyện tập và sổ sửa lỗi sai trong cùng một lộ trình.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => navigate(ROUTES.ROADMAP)}
              className="px-6 py-3 rounded-lg bg-brand-action hover:bg-brand-action/90 text-white font-extrabold text-xs sm:text-sm transition-all shadow-md active:scale-95 flex items-center gap-2 cursor-pointer"
            >
              <span>Vào Lộ trình học ngay</span>
              <ArrowRight size={16} />
            </button>
            <button
              onClick={() => navigate(ROUTES.EXAM)}
              className="px-6 py-3 rounded-lg bg-card hover:bg-secondary/70 text-brand-ink font-extrabold text-xs sm:text-sm transition-all border border-brand-ink/25 cursor-pointer active:scale-95"
            >
              Luyện đề thi thử
            </button>
          </div>
        </div>

        {/* 2. INTERACTIVE PRODUCT PREVIEW MOCKUP */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-10 md:pt-12">
          <div className="paper-panel rounded-xl overflow-hidden">

            {/* Window Topbar */}
            <div className="px-4 py-3 bg-secondary/65 border-b border-border flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-brand-learning/80" />
                <span className="text-[11px] font-mono text-muted-foreground font-bold ml-2 hidden sm:inline">
                  ezonthi.vn — Xem trước trải nghiệm giao diện ứng dụng
                </span>
              </div>

              {/* Demo Tabs Navigation */}
              <div className="flex items-center gap-1 bg-secondary/80 p-1 rounded-xl border border-border/40 overflow-x-auto scrollbar-none">
                <button
                  onClick={() => setActiveDemoTab('roadmap')}
                  className={cn(
                    "px-3 py-1 text-[11px] font-extrabold rounded-lg transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5",
                    activeDemoTab === 'roadmap' ? "bg-card text-foreground shadow-xs" : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <Map size={13} />
                  Lộ trình 3 Chặng
                </button>
                <button
                  onClick={() => setActiveDemoTab('textbook')}
                  className={cn(
                    "px-3 py-1 text-[11px] font-extrabold rounded-lg transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5",
                    activeDemoTab === 'textbook' ? "bg-card text-foreground shadow-xs" : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <BookOpen size={13} />
                  Ma trận SGK gốc
                </button>
                <button
                  onClick={() => setActiveDemoTab('mistakes')}
                  className={cn(
                    "px-3 py-1 text-[11px] font-extrabold rounded-lg transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5",
                    activeDemoTab === 'mistakes' ? "bg-card text-foreground shadow-xs" : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <Bookmark size={13} />
                  Sổ lỗi sai
                </button>
                <button
                  onClick={() => setActiveDemoTab('aitutor')}
                  className={cn(
                    "px-3 py-1 text-[11px] font-extrabold rounded-lg transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5",
                    activeDemoTab === 'aitutor' ? "bg-card text-foreground shadow-xs" : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <Bot size={13} />
                  Gia sư AI
                </button>
              </div>
            </div>

            {/* Interactive Preview Canvas */}
            <div className="p-5 sm:p-8 bg-secondary/20 min-h-[340px] flex items-center justify-center">

              {/* TAB 1: ROADMAP PREVIEW */}
              {activeDemoTab === 'roadmap' && (
                <div className="w-full space-y-4 animate-fade-in">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-black text-foreground font-sans">
                        Chuyên đề 1: Thành phần hoá học của tế bào
                      </h4>
                      <p className="text-[11px] text-muted-foreground font-bold">
                        SGK Sinh học 10 (Trang 23 – 43) • 8 Dạng bài thi cốt lõi
                      </p>
                    </div>
                    <span className="px-2.5 py-1 rounded-md bg-brand-learning/10 text-brand-learning text-[10px] font-black border border-brand-learning/20">
                      100% Hoàn thành
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="p-4 rounded-lg border border-brand-learning/30 bg-card shadow-2xs space-y-2">
                      <div className="flex items-center justify-between text-[10px]">
                        <span className="font-extrabold px-2 py-0.5 rounded-md bg-brand-learning/10 text-brand-learning">✓ Cơ bản</span>
                        <span className="font-bold text-muted-foreground">Trang 23–25</span>
                      </div>
                      <h5 className="text-xs font-black text-foreground">Dạng 1: Nguyên tố hóa học và vai trò carbon</h5>
                      <p className="text-[10px] text-muted-foreground line-clamp-2">Phân biệt nguyên tố đa lượng, vi lượng trong tế bào.</p>
                    </div>

                    <div className="p-4 rounded-lg border border-amber-600/30 bg-card shadow-2xs space-y-2">
                      <div className="flex items-center justify-between text-[10px]">
                        <span className="font-extrabold px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-700 dark:text-amber-300">⚡ Trung bình</span>
                        <span className="font-bold text-muted-foreground">Trang 34–36</span>
                      </div>
                      <h5 className="text-xs font-black text-foreground">Dạng 5: Protein và quan hệ cấu trúc–chức năng</h5>
                      <p className="text-[10px] text-muted-foreground line-clamp-2">Phân tích các bậc cấu trúc không gian của Protein.</p>
                    </div>

                    <div className="p-4 rounded-lg border border-brand-action/30 bg-card shadow-2xs space-y-2">
                      <div className="flex items-center justify-between text-[10px]">
                        <span className="font-extrabold px-2 py-0.5 rounded-md bg-brand-action/10 text-brand-action">🔥 Vận dụng</span>
                        <span className="font-bold text-muted-foreground">Trang 36–40</span>
                      </div>
                      <h5 className="text-xs font-black text-foreground">Dạng 6: Nucleic acid và thông tin di truyền</h5>
                      <p className="text-[10px] text-muted-foreground line-clamp-2">So sánh cấu tạo DNA & RNA và liên kết nucleotide.</p>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: TEXTBOOK MATRIX PREVIEW */}
              {activeDemoTab === 'textbook' && (
                <div className="w-full space-y-3 animate-fade-in">
                  <div className="p-3.5 rounded-xl bg-card border border-border shadow-2xs space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <span className="font-black px-2 py-0.5 rounded-md bg-brand-learning/10 text-brand-learning border border-brand-learning/20 text-[10px]">
                          Ma Trận Đối Chiếu SGK
                        </span>
                        <span className="font-extrabold text-foreground">SGK Sinh học 10</span>
                      </div>
                      <span className="text-[10px] font-bold text-brand-learning">Xem ảnh nét cao tức thì</span>
                    </div>

                    <div className="border border-border/60 rounded-lg overflow-hidden text-[11px]">
                      <div className="grid grid-cols-4 p-2.5 bg-secondary/60 font-extrabold text-foreground border-b border-border/40">
                        <span>STT</span>
                        <span>Dạng bài</span>
                        <span>Bài học tương ứng SGK</span>
                        <span className="text-center">Số trang SGK</span>
                      </div>
                      <div className="grid grid-cols-4 p-2.5 items-center border-b border-border/20">
                        <span className="font-bold text-muted-foreground">Dạng 1</span>
                        <span className="font-bold text-foreground">Cấu tạo & vai trò của nước</span>
                        <span className="text-muted-foreground">Bài 4: Các nguyên tố & nước (Mục III)</span>
                        <span className="text-center"><span className="px-2 py-0.5 rounded bg-brand-learning/10 text-brand-learning font-extrabold">Trang 25, 26, 27</span></span>
                      </div>
                      <div className="grid grid-cols-4 p-2.5 items-center">
                        <span className="font-bold text-muted-foreground">Dạng 3</span>
                        <span className="font-bold text-foreground">Carbohydrate trong sinh học</span>
                        <span className="text-muted-foreground">Bài 5: Phân tử sinh học (Mục II.1)</span>
                        <span className="text-center"><span className="px-2 py-0.5 rounded bg-brand-learning/10 text-brand-learning font-extrabold">Trang 28, 29, 30</span></span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 3: MISTAKES PREVIEW */}
              {activeDemoTab === 'mistakes' && (
                <div className="w-full space-y-3 animate-fade-in">
                  <div className="p-4 rounded-xl bg-card border border-rose-500/30 shadow-2xs space-y-2.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-black text-rose-600 dark:text-rose-400 flex items-center gap-1">
                        <Bookmark size={14} /> Sổ tay lỗi sai tự động
                      </span>
                      <span className="text-[10px] font-bold text-muted-foreground">Ôn lặp ngắt quãng (1 - 3 - 7 ngày)</span>
                    </div>

                    <div className="p-3 rounded-lg bg-rose-500/5 border border-rose-500/10 text-xs space-y-1">
                      <p className="font-extrabold text-foreground">❓ Câu hỏi: Phát biểu nào sau đây là KHÔNG đúng về tính phân cực của nước?</p>
                      <p className="text-[11px] text-rose-600 dark:text-rose-400 font-bold">❌ Đáp án bạn chọn: Nước hòa tan tất cả các hợp chất kị nước.</p>
                      <p className="text-[11px] text-brand-learning font-extrabold">✓ Sửa lại chuẩn: Nước chỉ hòa tan các chất phân cực và chất điện li (ưa nước).</p>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 4: AI TUTOR PREVIEW */}
              {activeDemoTab === 'aitutor' && (
                <div className="w-full space-y-3 animate-fade-in">
                  <div className="p-4 rounded-xl bg-card border border-amber-500/30 shadow-2xs space-y-3">
                    <div className="flex items-center gap-2 text-xs font-black text-amber-600 dark:text-amber-400">
                      <Bot size={16} /> Trợ lý AI Socratic 24/7 (Gợi ý tư duy 1-1)
                    </div>

                    <div className="space-y-2 text-xs">
                      <div className="p-2.5 rounded-lg bg-secondary text-foreground text-[11px] font-medium w-fit max-w-[85%]">
                        🎓 Học sinh: Em không hiểu vì sao Protein bị biến tính thì mất chức năng ạ?
                      </div>
                      <div className="p-2.5 rounded-lg bg-amber-500/10 text-foreground text-[11px] font-medium w-fit max-w-[90%] border border-amber-500/20">
                        🤖 AI Tutor: Hãy nhớ rằng chức năng của Protein được quyết định bởi <strong>cấu trúc không gian 3D</strong>. Khi bị biến tính do nhiệt độ hoặc pH, cấu trúc 3D này bị phá vỡ. Bạn có nghĩ đến ví dụ lòng trắng trứng khi luộc chín không?
                      </div>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </section>

      {/* 3. PEDAGOGICAL COMPARISON SECTION (SO SÁNH PHƯƠNG PHÁP CŨ VS MỚI) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14 md:py-20 space-y-10">
        <div className="text-center space-y-3">
          <span className="section-kicker">
            Phương Pháp Học Cốt Lõi
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground font-sans tracking-tight">
            Sự Khác Biệt Giữa Cách Học Cũ & Phương Pháp Cốt Lõi
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground max-w-xl mx-auto font-medium">
            Tại sao học sinh dễ cảm thấy ngợp trước SGK dài và làm thế nào ứng dụng giải quyết triệt để vấn đề đó.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* TRUYỀN THỐNG */}
          <div className="p-6 md:p-8 rounded-xl bg-secondary/45 border border-border space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-rose-500/10 text-rose-600 dark:text-rose-400 flex items-center justify-center font-black">
                <XCircle size={22} />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-black text-foreground font-sans">
                  Cách Học SGK Truyền Thống
                </h3>
                <p className="text-xs text-muted-foreground font-bold">Dễ ngợp và học lệch dạng bài</p>
              </div>
            </div>

            <ul className="space-y-3 text-xs text-muted-foreground">
              <li className="flex items-start gap-2.5">
                <XCircle size={16} className="text-rose-500 shrink-0 mt-0.5" />
                <span><strong>Đọc bài SGK dài 10 - 15 trang:</strong> Khó xác định đâu là trọng tâm sẽ xuất hiện trong đề thi thật.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <XCircle size={16} className="text-rose-500 shrink-0 mt-0.5" />
                <span><strong>Không biết đề thi thật ra dạng nào:</strong> Thắc mắc tại sao cô giáo dạy 2 bài mà đề thi có vô số dạng bài tập.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <XCircle size={16} className="text-rose-500 shrink-0 mt-0.5" />
                <span><strong>Dễ sập bẫy thi trắc nghiệm:</strong> Học lý thuyết suông nhưng không có phản xạ phát hiện bẫy sai lầm.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <XCircle size={16} className="text-rose-500 shrink-0 mt-0.5" />
                <span><strong>Làm sai rồi quên mất:</strong> Không có cơ chế lưu lại câu sai để ôn lại ngắt quãng.</span>
              </li>
            </ul>
          </div>

          {/* PHƯƠNG PHÁP ỨNG DỤNG */}
          <div className="p-6 md:p-8 rounded-xl bg-brand-learning/6 border border-brand-learning/30 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-brand-learning/10 text-brand-learning flex items-center justify-center font-black">
                <CheckCircle2 size={22} />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-black text-foreground font-sans">
                  Phương Pháp Trên Ứng Dụng
                </h3>
                <p className="text-xs text-brand-learning font-bold">Học đúng dạng bài • Đối chiếu SGK • Chống quên</p>
              </div>
            </div>

            <ul className="space-y-3 text-xs text-foreground font-medium">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-brand-learning shrink-0 mt-0.5" />
                <span><strong>Chẻ nhỏ SGK thành dạng bài 15 phút:</strong> Tiếp thu từng phần nhỏ cốt lõi, không lo bị ngợp.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-brand-learning shrink-0 mt-0.5" />
                <span><strong>Ma trận ánh xạ trang SGK chuẩn:</strong> Bấm 1 click mở ngay hình ảnh trang sách gốc để đối chiếu.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-brand-learning shrink-0 mt-0.5" />
                <span><strong>Rèn phản xạ chống bẫy thi:</strong> Nhận diện các bẫy khái niệm thường gặp trong đề thi thật.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-brand-learning shrink-0 mt-0.5" />
                <span><strong>Sổ lỗi sai lặp lại ngắt quãng:</strong> Tự động gom câu làm sai và nhắc ôn tập sau 1 - 3 - 7 ngày.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. BENTO GRID CORE PILLARS */}
      <section className="bg-secondary/25 border-y border-border py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
          <div className="text-center space-y-3">
            <span className="section-kicker">
              Công Nghệ & Tính Năng
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground font-sans tracking-tight">
              4 Trụ Cột Hỗ Trợ Tự Học Đỉnh Cao
            </h2>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Bento Card 1 (Large) */}
            <div className="md:col-span-2 p-6 md:p-8 rounded-xl paper-panel space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-lg bg-brand-ink/10 text-brand-ink flex items-center justify-center">
                  <Map size={22} />
                </div>
                <h3 className="text-lg font-black text-foreground font-sans">
                  Lộ Trình Học Phân Tầng 3 Chặng Theo Mục Tiêu Điểm Số
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Lộ trình được thiết kế chuẩn mực chia thành 3 Chặng rõ ràng: <strong>Chặng 1 (Nền tảng 5đ)</strong> giúp học sinh mất gốc lấy lại căn bản; <strong>Chặng 2 (Tăng tốc 7-8đ)</strong> làm chủ toàn bộ bài tập trung bình; <strong>Chặng 3 (Bứt phá 9-10đ)</strong> chinh phục các câu vận dụng cao.
                </p>
              </div>
              <div className="pt-2 flex items-center gap-2 text-xs font-bold text-brand-ink">
                <span>Chinh phục từng chặng bài bản</span>
                <ChevronRight size={14} />
              </div>
            </div>

            {/* Bento Card 2 */}
            <div className="p-6 rounded-xl paper-panel space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-lg bg-brand-learning/10 text-brand-learning flex items-center justify-center">
                  <BookOpen size={22} />
                </div>
                <h3 className="text-base font-black text-foreground font-sans">
                  Ma Trận Trang SGK Gốc Chuẩn Bộ GD&ĐT
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Mỗi bài học đều gắn nút đối chiếu trang SGK gốc (Kết Nối Tri Thức). Bấm 1 click mở ngay bản xem sách nét cao tải tức thì giúp học sinh đối chiếu bài học mọi lúc.
                </p>
              </div>
            </div>

            {/* Bento Card 3 */}
            <div className="p-6 rounded-xl paper-panel space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-2xl bg-rose-500/10 text-rose-600 dark:text-rose-400 flex items-center justify-center">
                  <Bookmark size={22} />
                </div>
                <h3 className="text-base font-black text-foreground font-sans">
                  Sổ Tay Sửa Lỗi Sai Tự Động
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Thu thập mọi câu trả lời sai, tự động lên lịch nhắc ôn lại theo chu kỳ 1 ngày, 3 ngày, 7 ngày giúp biến điểm yếu thành điểm mạnh.
                </p>
              </div>
            </div>

            {/* Bento Card 4 (Large) */}
            <div className="md:col-span-2 p-6 md:p-8 rounded-xl paper-panel space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-2xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                  <Bot size={22} />
                </div>
                <h3 className="text-lg font-black text-foreground font-sans">
                  Trợ Lý Gia Sư AI Socratic Trợ Giảng 24/7
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Gia sư AI sử dụng phương pháp đặt câu hỏi gợi mở Socratic, gợi ý hướng tư duy từng bước để học sinh tự tìm ra đáp án mà không đưa sẵn lời giải bài mẫu.
                </p>
              </div>
              <div className="pt-2 flex items-center gap-2 text-xs font-bold text-amber-600 dark:text-amber-400">
                <span>Hỏi đáp tư duy 1-1 mọi lúc</span>
                <ChevronRight size={14} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. STUDENT JOURNEY (HÀNH TRÌNH TIẾN BỘ CỦA HỌC SINH) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14 md:py-20 space-y-10">
        <div className="text-center space-y-3">
          <span className="section-kicker">
            Hành Trình Tiến Bộ
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground font-sans tracking-tight">
            Con Đường Tiến Bộ Thực Tế Của Học Sinh
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          <div className="p-6 rounded-xl paper-panel space-y-3 relative">
            <div className="w-8 h-8 rounded-md bg-brand-ink text-primary-foreground flex items-center justify-center font-black text-xs">1</div>
            <h4 className="text-base font-black text-foreground font-sans">Bước 1: Chặn Đứng Mất Gốc (Chặng 1)</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Luyện tập các dạng bài nhận biết, nắm chắc các định nghĩa cốt lõi và lấy trọn vẹn 5 điểm nền tảng.
            </p>
          </div>

          <div className="p-6 rounded-xl paper-panel space-y-3 relative">
            <div className="w-8 h-8 rounded-md bg-brand-learning text-white flex items-center justify-center font-black text-xs">2</div>
            <h4 className="text-base font-black text-foreground font-sans">Bước 2: Tăng Tốc & Chống Bẫy Thi (Chặng 2)</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Rèn phản xạ nhận biết câu hỏi gài bẫy, hoàn thành dạng bài thông hiểu và vươn tới mốc 7 – 8 điểm.
            </p>
          </div>

          <div className="p-6 rounded-xl paper-panel space-y-3 relative">
            <div className="w-8 h-8 rounded-md bg-brand-action text-white flex items-center justify-center font-black text-xs">3</div>
            <h4 className="text-base font-black text-foreground font-sans">Bước 3: Bứt Phá Điểm 9+ & Thi Thử (Chặng 3)</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Chinh phục dạng bài vận dụng cao, luyện bộ đề thi thử chuẩn định dạng Bộ GD&ĐT và tự tin bước vào kỳ thi thật.
            </p>
          </div>
        </div>
      </section>

      {/* 6. CTA BOTTOM BANNER */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="p-8 sm:p-12 rounded-xl bg-brand-ink text-primary-foreground shadow-lg text-center space-y-6 relative overflow-hidden border-l-8 border-brand-action">

          <div className="space-y-2 relative z-10 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight font-sans">
              Bắt Đầu Hành Trình Luyện Thi Ngay Hôm Nay
            </h2>
            <p className="text-xs sm:text-sm opacity-90 font-medium">
              Khám phá Lộ trình học phân tầng bài bản và làm chủ mọi dạng bài thi cốt lõi!
            </p>
          </div>

          <div className="pt-2 relative z-10 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => navigate(ROUTES.ROADMAP)}
              className="px-6 py-3 rounded-lg bg-brand-action text-white hover:bg-brand-action/90 font-black text-xs sm:text-sm transition-all shadow-md active:scale-95 cursor-pointer"
            >
              Vào Lộ trình học ngay
            </button>
            <button
              onClick={() => navigate(ROUTES.PRACTICE)}
              className="px-6 py-3 rounded-xl bg-black/20 hover:bg-black/30 border border-white/20 text-white font-black text-xs sm:text-sm transition-all cursor-pointer active:scale-95"
            >
              Luyện tập dạng bài
            </button>
          </div>
        </div>
      </section>

      {/* 7. DIRECT CONTACT & SUPPORT SECTION */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-12 md:pt-16 space-y-8">
        <div className="text-center space-y-2">
          <span className="section-kicker">
            Thông Tin Liên Hệ
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-foreground font-sans tracking-tight">
            Liên Hệ & Hỗ Trợ Trực Tiếp
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground font-medium max-w-xl mx-auto">
            Mọi thắc mắc về nội dung học tập, kích hoạt tài khoản Premium VIP hoặc hợp tác đối tác, xin vui lòng liên hệ với chúng tôi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Hotline & Zalo */}
          <div className="p-6 rounded-xl paper-panel hover:border-brand-learning/50 transition-all duration-300 space-y-4 group">
            <div className="w-12 h-12 rounded-lg bg-brand-learning/10 text-brand-learning flex items-center justify-center font-black border border-brand-learning/20 group-hover:scale-105 transition-transform">
              <Phone size={22} />
            </div>
            <div className="space-y-1">
              <h3 className="text-xs font-black text-muted-foreground uppercase tracking-wider">
                Hotline & Zalo Hỗ Trợ
              </h3>
              <a
                href="tel:09xxxxxxxx"
                className="text-lg font-black text-foreground hover:text-brand-learning transition-colors block"
              >
                0329670310
              </a>
              <p className="text-[11px] text-muted-foreground font-semibold flex items-center gap-1 pt-1">
                <Clock size={12} className="text-brand-learning" />
                <span>Hỗ trợ từ 8:00 – 22:00 Hàng ngày</span>
              </p>
            </div>
          </div>

          {/* Card 2: Email */}
          <div className="p-6 rounded-xl paper-panel hover:border-brand-ink/50 transition-all duration-300 space-y-4 group">
            <div className="w-12 h-12 rounded-lg bg-brand-ink/10 text-brand-ink flex items-center justify-center font-black border border-brand-ink/20 group-hover:scale-105 transition-transform">
              <Mail size={22} />
            </div>
            <div className="space-y-1">
              <h3 className="text-xs font-black text-muted-foreground uppercase tracking-wider">
                Email Liên Hệ Chính Thức
              </h3>
              <a
                href="mailto:hotro@onthivao10.com"
                className="text-base font-black text-foreground hover:text-brand-ink transition-colors block truncate"
              >
                phamkhuong436@gmail.com
              </a>
              <p className="text-[11px] text-muted-foreground font-semibold flex items-center gap-1 pt-1">
                <MessageCircle size={12} className="text-brand-ink" />
                <span>Phản hồi trong vòng 24 giờ làm việc</span>
              </p>
            </div>
          </div>

          {/* Card 3: Address */}
          <div className="p-6 rounded-xl paper-panel hover:border-brand-action/50 transition-all duration-300 space-y-4 group">
            <div className="w-12 h-12 rounded-lg bg-brand-action/10 text-brand-action flex items-center justify-center font-black border border-brand-action/20 group-hover:scale-105 transition-transform">
              <MapPin size={22} />
            </div>
            <div className="space-y-1">
              <h3 className="text-xs font-black text-muted-foreground uppercase tracking-wider">
                Văn Phòng & Địa Chỉ
              </h3>
              <p className="text-base font-black text-foreground">
                Hồ Chí Minh, Việt Nam
              </p>
              <p className="text-[11px] text-muted-foreground font-semibold pt-1">
                Phục vụ học sinh & đối tác trên toàn quốc
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;
