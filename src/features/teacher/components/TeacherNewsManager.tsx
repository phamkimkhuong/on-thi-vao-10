import React, { useState } from 'react';
import { newsService } from '../../../services/newsService';
import { useAppStore } from '../../../services/store';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../../../components/ui/card';
import { Newspaper, Send, Loader, CheckCircle2, Eye } from 'lucide-react';
import { AnnouncementCategory } from '../../../types/newsTypes';
import { useNavigate } from 'react-router-dom';

const CATEGORY_OPTIONS: { value: AnnouncementCategory; label: string }[] = [
  { value: 'feature', label: '🚀 Tính năng mới' },
  { value: 'exam_update', label: '📚 Cập nhật bộ đề thi' },
  { value: 'guide', label: '💡 Hướng dẫn học tập' },
  { value: 'general', label: '📢 Thông báo chung' },
];

export const TeacherNewsManager: React.FC = () => {
  const { user } = useAppStore();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState<AnnouncementCategory>('feature');
  const [targetGrade, setTargetGrade] = useState<'all' | 'grade9' | 'grade10' | 'grade11' | 'grade12'>('all');
  const [content, setContent] = useState('');

  const [isPublishing, setIsPublishing] = useState(false);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      setErrorMsg('Vui lòng nhập đầy đủ tiêu đề và nội dung bài viết.');
      return;
    }

    setIsPublishing(true);
    setErrorMsg(null);
    setSuccessMsg(null);

    try {
      const postId = await newsService.createPost({
        title: title.trim(),
        content: content.trim(),
        category,
        targetGrade,
        authorName: user?.displayName || 'OnThiVao10 Official',
      });

      if (postId) {
        setSuccessMsg('🎉 Đã phát hành bài viết lên Bảng Tin và gửi thông báo tới học sinh thành công!');
        setTitle('');
        setContent('');
        setTimeout(() => setSuccessMsg(null), 5000);
      } else {
        setErrorMsg('Không thể đăng bài viết. Vui lòng thử lại.');
      }
    } catch (err: any) {
      setErrorMsg(err.message || 'Lỗi khi phát hành bài viết Bảng tin.');
    } finally {
      setIsPublishing(false);
    }
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      <Card className="rounded-3xl border-border/40 bg-card">
        <CardHeader>
          <CardTitle className="text-base font-extrabold flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <Newspaper className="w-5 h-5 text-emerald-500" />
              <span>Đăng Bài Viết Lên Bảng Tin & Diễn Đàn Thông Báo</span>
            </div>
            <button
              type="button"
              onClick={() => navigate('/news')}
              className="px-3.5 py-1.5 rounded-xl bg-secondary hover:bg-secondary/80 text-foreground text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Eye size={14} />
              <span>Xem trang Bảng tin 📰</span>
            </button>
          </CardTitle>
          <CardDescription className="text-xs">
            Bài viết sẽ hiển thị ở trang Bảng Tin (`/news`) kèm tính năng thả tim & bình luận. Hệ thống cũng tự động tạo 1 thông báo trên thanh Chuông 🔔.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {errorMsg && (
              <div className="p-3.5 bg-rose-500/10 border border-rose-500/20 text-rose-500 text-xs font-bold rounded-2xl">
                {errorMsg}
              </div>
            )}
            {successMsg && (
              <div className="p-3.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-bold rounded-2xl flex items-center gap-2">
                <CheckCircle2 size={16} />
                <span>{successMsg}</span>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Phân loại bài viết */}
              <div className="space-y-1.5 text-left">
                <label className="text-[11px] font-black text-muted-foreground uppercase tracking-wider block">
                  Chuyên mục bài viết
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value as AnnouncementCategory)}
                  className="w-full px-3.5 py-2.5 bg-secondary/50 border border-border/40 rounded-xl text-xs font-bold focus:outline-none focus:border-emerald-500 text-foreground cursor-pointer"
                >
                  {CATEGORY_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Khối lớp mục tiêu */}
              <div className="space-y-1.5 text-left">
                <label className="text-[11px] font-black text-muted-foreground uppercase tracking-wider block">
                  Khối lớp áp dụng
                </label>
                <select
                  value={targetGrade}
                  onChange={(e) => setTargetGrade(e.target.value as any)}
                  className="w-full px-3.5 py-2.5 bg-secondary/50 border border-border/40 rounded-xl text-xs font-bold focus:outline-none focus:border-emerald-500 text-foreground cursor-pointer"
                >
                  <option value="all">🌐 Tất cả học sinh</option>
                  <option value="grade9">🎓 Lớp 9 (Ôn thi vào 10)</option>
                  <option value="grade10">🎓 Lớp 10</option>
                  <option value="grade11">🎓 Lớp 11</option>
                  <option value="grade12">🎓 Lớp 12 (Thi THPT)</option>
                </select>
              </div>
            </div>

            {/* Tiêu đề bài viết */}
            <div className="space-y-1.5 text-left">
              <label className="text-[11px] font-black text-muted-foreground uppercase tracking-wider block">
                Tiêu đề bài viết <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Ví dụ: ĐỌC TRUYỆN TỪ TỪ VỰNG ĐÃ HỌC!"
                className="w-full px-4 py-2.5 bg-secondary/50 border border-border/40 rounded-xl text-xs font-bold uppercase focus:outline-none focus:border-emerald-500 text-foreground"
                maxLength={100}
              />
            </div>

            {/* Nội dung chi tiết */}
            <div className="space-y-1.5 text-left">
              <label className="text-[11px] font-black text-muted-foreground uppercase tracking-wider block">
                Nội dung chi tiết bài viết (Hỗ trợ biểu tượng emoji, gạch đầu dòng `-`) <span className="text-rose-500">*</span>
              </label>
              <textarea
                rows={8}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder={`Bạn chán ngắt với việc học từ vựng theo danh sách khô khan?
Hãy để HeyWord biến những từ bạn đã học thành những câu chuyện đầy thú vị!

Vì sao bạn sẽ thích tính năng này?
- 🧠 Nhớ siêu lâu: Từ vựng được lồng ghép vào cốt truyện giúp não bộ ghi nhớ tự nhiên và bền vững.
- 🏃 Thân thiện với người mất gốc: Học nhẹ nhàng, không áp lực.
- 💡 Bật phản xạ đoán nghĩa: Dễ dàng hiểu từ mới chỉ nhờ vào ngữ cảnh xung quanh.`}
                className="w-full p-4 bg-secondary/50 border border-border/40 rounded-xl text-xs font-semibold focus:outline-none focus:border-emerald-500 text-foreground resize-none leading-relaxed"
              />
            </div>

            <button
              type="submit"
              disabled={isPublishing || !title.trim() || !content.trim()}
              className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white font-black text-xs transition-all shadow-md active:scale-95 cursor-pointer flex items-center justify-center gap-2"
            >
              {isPublishing ? <Loader className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
              <span>{isPublishing ? 'Đang đăng bài viết...' : 'Đăng Bài Viết Lên Bảng Tin 🚀'}</span>
            </button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
