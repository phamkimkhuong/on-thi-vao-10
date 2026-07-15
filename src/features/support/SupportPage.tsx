import React, { useState, useEffect, useRef } from 'react';
import { useAppStore } from '../../services/store';
import { supportService } from '../../services/supportService';

import { SupportTicket } from '../../types';
import {
  LifeBuoy,
  Send,
  Image as ImageIcon,
  Loader2,
  CheckCircle2,
  AlertCircle,
  MessageSquare,
  ChevronRight,
  Inbox,
  X,
  Sparkles
} from 'lucide-react';
import { cn } from '../../utils/cn';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';

export const SupportPage: React.FC = () => {
  const { user } = useAppStore();

  // Form states
  const [category, setCategory] = useState<'bug' | 'feature' | 'question' | 'other'>('bug');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [screenshot, setScreenshot] = useState<File | null>(null);
  const [screenshotPreview, setScreenshotPreview] = useState<string | null>(null);

  // Action states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Tickets list
  const [tickets, setTickets] = useState<SupportTicket[]>([]);
  const [isLoadingTickets, setIsLoadingTickets] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState<SupportTicket | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load tickets history
  const loadTickets = async () => {
    if (!user) return;
    setIsLoadingTickets(true);
    try {
      const data = await supportService.getStudentTickets(user.uid);
      setTickets(data);
    } catch (err) {
      console.error('Lỗi khi load lịch sử hỗ trợ:', err);
    } finally {
      setIsLoadingTickets(false);
    }
  };

  useEffect(() => {
    loadTickets();
  }, [user]);

  // Clean up preview URL
  useEffect(() => {
    return () => {
      if (screenshotPreview) {
        URL.revokeObjectURL(screenshotPreview);
      }
    };
  }, [screenshotPreview]);

  // Guest states
  const [guestName, setGuestName] = useState('');
  const [guestEmail, setGuestEmail] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      alert('Chỉ hỗ trợ file hình ảnh (PNG, JPG, WEBP).');
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      alert('Kích thước ảnh đính kèm phải nhỏ hơn 5MB.');
      return;
    }

    setScreenshot(file);
    const previewUrl = URL.createObjectURL(file);
    setScreenshotPreview(previewUrl);
  };

  const handleRemoveFile = () => {
    setScreenshot(null);
    if (screenshotPreview) {
      URL.revokeObjectURL(screenshotPreview);
      setScreenshotPreview(null);
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;

    if (!user && (!guestName.trim() || !guestEmail.trim())) {
      setSubmitError('Vui lòng điền Họ tên và Email để chúng tôi liên hệ phản hồi.');
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const uid = user?.uid || 'guests';
      const email = user?.email || guestEmail.trim();
      const name = user?.displayName || guestName.trim();

      await supportService.createTicket(
        uid,
        email,
        name,
        category,
        title,
        description,
        screenshot || undefined
      );

      setSubmitSuccess(true);
      setTitle('');
      setDescription('');
      if (!user) {
        setGuestEmail('');
        setGuestName('');
      }
      handleRemoveFile();

      // Reload tickets history if logged in
      if (user) {
        loadTickets();
      }

      // Reset success status after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (err: any) {
      console.error('Lỗi khi gửi yêu cầu hỗ trợ:', err);
      setSubmitError(err.message || 'Có lỗi xảy ra khi gửi yêu cầu hỗ trợ. Vui lòng thử lại.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getCategoryLabel = (cat: string) => {
    switch (cat) {
      case 'bug': return 'Báo lỗi hệ thống';
      case 'feature': return 'Đề xuất tính năng';
      case 'question': return 'Hỏi đáp bài tập';
      case 'other': return 'Ý kiến đóng góp khác';
      default: return cat;
    }
  };

  const getCategoryBadgeColor = (cat: string) => {
    switch (cat) {
      case 'bug': return 'bg-rose-500/10 text-rose-500 border-rose-500/20';
      case 'feature': return 'bg-amber-500/10 text-amber-500 border-amber-500/20';
      case 'question': return 'bg-sky-500/10 text-sky-500 border-sky-500/20';
      default: return 'bg-slate-500/10 text-slate-500 border-slate-500/20';
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'resolved':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-black bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
            <CheckCircle2 size={10} /> Đã giải quyết
          </span>
        );
      case 'rejected':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-black bg-rose-500/10 text-rose-500 border border-rose-500/20">
            <AlertCircle size={10} /> Từ chối
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-black bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
            <Loader2 size={10} className="animate-spin" /> Đang chờ duyệt
          </span>
        );
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6 animate-fade-in pb-12">
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-600 via-teal-600 to-indigo-600 p-6 md:p-8 text-white shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2 z-10">
          <h2 className="text-xl md:text-2xl font-black tracking-tight flex items-center gap-2.5">
            <LifeBuoy className="animate-pulse" size={26} />
            Hỗ Trợ & Góp Ý Ý Kiến
          </h2>
          <p className="text-xs md:text-sm font-semibold opacity-90 max-w-xl leading-relaxed">
            Em đang gặp lỗi hệ thống, cần hỏi đáp bài tập hay có bất kỳ đề xuất gì để cải thiện ứng dụng?
            Hãy gửi yêu cầu cho thầy cô tại đây. Thầy cô sẽ xem xét và phản hồi sớm nhất!
          </p>
        </div>
        <div className="z-10 shrink-0 bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/20 flex items-center gap-2 text-xs font-extrabold shadow-sm select-none w-fit">
          <Sparkles size={15} className="text-yellow-300 animate-pulse" />
          <span>Gửi ý kiến trực tiếp tới thầy cô</span>
        </div>
        {/* Decor */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16" />
      </div>

      {/* Main Grid: Form on the Left, History on the Right */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

        {/* Left Column: Create ticket Form */}
        <div className={user ? "lg:col-span-3" : "lg:col-span-5 max-w-3xl mx-auto w-full"}>
          <Card className="border-border/50 bg-card shadow-sm h-full flex flex-col">
            <CardHeader className="p-6 border-b border-border/20">
              <CardTitle className="text-foreground text-sm font-black uppercase tracking-wider flex items-center gap-2">
                <Send size={16} className="text-emerald-500" />
                Gửi yêu cầu hỗ trợ mới
              </CardTitle>
              <CardDescription className="text-[10px] font-semibold text-muted-foreground mt-0.5">
                Nhập đầy đủ tiêu đề, chi tiết ý kiến và đính kèm ảnh lỗi (nếu có).
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6 flex-1">
              <form onSubmit={handleSubmit} className="space-y-4">
                {submitSuccess ? (
                  <div className="p-8 text-center space-y-4 animate-fade-in py-16">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto shadow-inner">
                      <CheckCircle2 size={36} className="animate-bounce" />
                    </div>
                    <div className="space-y-1.5">
                      <h4 className="font-black text-sm text-foreground">Gửi yêu cầu thành công!</h4>
                      {user ? (
                        <p className="text-xs text-muted-foreground font-semibold leading-relaxed">
                          Yêu cầu hỗ trợ của em đã được gửi trực tiếp đến thầy cô.
                          <br />Vui lòng theo dõi tiến trình phản hồi ở cột "Yêu cầu đã gửi" bên cạnh.
                        </p>
                      ) : (
                        <p className="text-xs text-muted-foreground font-semibold leading-relaxed">
                          Yêu cầu hỗ trợ của bạn đã được gửi trực tiếp đến thầy cô.
                          <br />Thầy cô sẽ xem xét và phản hồi sớm nhất qua email liên hệ của bạn.
                        </p>
                      )}
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-wider text-muted-foreground">Phân loại hỗ trợ</label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {(['bug', 'feature', 'question', 'other'] as const).map((cat) => (
                          <button
                            key={cat}
                            type="button"
                            onClick={() => setCategory(cat)}
                            className={cn(
                              "py-2.5 px-3.5 rounded-xl text-[10px] font-black border text-center transition-all cursor-pointer shadow-sm active:scale-97",
                              category === cat
                                ? "bg-emerald-500/10 border-emerald-500 text-emerald-600 dark:text-emerald-400 font-black shadow-inner"
                                : "border-border/60 text-muted-foreground hover:bg-secondary/40 hover:text-foreground"
                            )}
                          >
                            {cat === 'bug' && '🐛 '}
                            {cat === 'feature' && '💡 '}
                            {cat === 'question' && '❓ '}
                            {cat === 'other' && '💬 '}
                            {getCategoryLabel(cat)}
                          </button>
                        ))}
                      </div>
                    </div>

                    {!user && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label htmlFor="guest-name" className="text-[10px] font-black uppercase tracking-wider text-muted-foreground">Họ và tên của bạn <span className="text-rose-500">*</span></label>
                          <input
                            id="guest-name"
                            type="text"
                            required
                            placeholder="Nhập họ và tên..."
                            value={guestName}
                            onChange={(e) => setGuestName(e.target.value)}
                            className="w-full bg-slate-50 dark:bg-slate-900 border border-border/60 focus:border-emerald-500 rounded-xl px-4 py-3 text-xs font-semibold outline-none transition-all"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label htmlFor="guest-email" className="text-[10px] font-black uppercase tracking-wider text-muted-foreground">Email nhận phản hồi <span className="text-rose-500">*</span></label>
                          <input
                            id="guest-email"
                            type="email"
                            required
                            placeholder="VD: email@example.com"
                            value={guestEmail}
                            onChange={(e) => setGuestEmail(e.target.value)}
                            className="w-full bg-slate-50 dark:bg-slate-900 border border-border/60 focus:border-emerald-500 rounded-xl px-4 py-3 text-xs font-semibold outline-none transition-all"
                          />
                        </div>
                      </div>
                    )}

                    <div className="space-y-1.5">
                      <label htmlFor="ticket-title" className="text-[10px] font-black uppercase tracking-wider text-muted-foreground">Tiêu đề yêu cầu</label>
                      <input
                        id="ticket-title"
                        type="text"
                        required
                        placeholder="Ví dụ: Lỗi hiển thị công thức Hóa học, Đề xuất thêm trắc nghiệm..."
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full bg-slate-50 dark:bg-slate-900 border border-border/60 focus:border-emerald-500 rounded-xl px-4 py-3 text-xs font-semibold outline-none transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="ticket-desc" className="text-[10px] font-black uppercase tracking-wider text-muted-foreground">Mô tả chi tiết góp ý / lỗi gặp phải</label>
                      <textarea
                        id="ticket-desc"
                        required
                        rows={5}
                        placeholder="Ghi chi tiết mô tả lỗi hoặc đề xuất cải tiến của em tại đây..."
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full bg-slate-50 dark:bg-slate-900 border border-border/60 focus:border-emerald-500 rounded-xl px-4 py-3 text-xs font-semibold outline-none transition-all resize-none leading-relaxed"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black uppercase tracking-wider text-muted-foreground">Ảnh minh họa đính kèm (nếu có)</label>

                      {screenshotPreview ? (
                        <div className="relative border border-border/30 rounded-2xl overflow-hidden shadow-sm group max-w-md">
                          <img
                            src={screenshotPreview}
                            alt="Preview đính kèm"
                            className="max-h-[180px] w-full object-cover"
                          />
                          <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                            <button
                              type="button"
                              onClick={handleRemoveFile}
                              className="bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs px-3.5 py-2 rounded-xl flex items-center gap-1.5 transition-all active:scale-95 cursor-pointer"
                            >
                              <X size={14} /> Xóa ảnh minh họa
                            </button>
                          </div>
                        </div>
                      ) : (
                        <button
                          type="button"
                          onClick={() => fileInputRef.current?.click()}
                          className="w-full border border-dashed border-border/60 hover:border-emerald-500/40 rounded-xl py-4 text-center text-xs font-bold text-muted-foreground hover:text-foreground hover:bg-secondary/40 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                        >
                          <ImageIcon size={16} className="text-muted-foreground" />
                          <span>Tải lên ảnh lỗi / ảnh chụp màn hình</span>
                        </button>
                      )}

                      <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        accept="image/*"
                        className="hidden"
                      />
                    </div>

                    {submitError && (
                      <div className="p-3.5 bg-rose-500/10 border border-rose-500/20 text-rose-600 dark:text-rose-400 rounded-xl text-xs font-semibold animate-fade-in flex items-center gap-2 leading-relaxed">
                        <AlertCircle size={15} className="shrink-0" />
                        <span>{submitError}</span>
                      </div>
                    )}

                    <Button
                      type="submit"
                      disabled={isSubmitting || !title.trim() || !description.trim()}
                      className="w-full font-bold text-xs py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white cursor-pointer h-12 flex items-center justify-center gap-2 transition-all shadow-sm active:scale-98 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 size={16} className="animate-spin" />
                          Đang tải lên và gửi yêu cầu...
                        </>
                      ) : (
                        <>
                          <Send size={14} />
                          Gửi yêu cầu hỗ trợ đến thầy cô
                        </>
                      )}
                    </Button>
                  </>
                )}
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Right Column: History of requests */}
        {user && (
          <div className="lg:col-span-2">
            <Card className="border-border/50 bg-card shadow-sm h-full flex flex-col">
              <CardHeader className="p-6 border-b border-border/20">
                <CardTitle className="text-foreground text-sm font-black uppercase tracking-wider flex items-center gap-2">
                  <Inbox size={16} className="text-indigo-500" />
                  Yêu cầu đã gửi ({tickets.length})
                </CardTitle>
                <CardDescription className="text-[10px] font-semibold text-muted-foreground mt-0.5">
                  Nhấn vào từng yêu cầu bên dưới để xem chi tiết phản hồi từ thầy cô.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 flex-1 overflow-y-auto max-h-[600px] space-y-3">
                {isLoadingTickets ? (
                  <div className="py-12 flex flex-col items-center justify-center gap-2">
                    <Loader2 size={24} className="animate-spin text-primary" />
                    <span className="text-xs font-bold text-muted-foreground animate-pulse">Đang tải lịch sử hỗ trợ...</span>
                  </div>
                ) : tickets.length === 0 ? (
                  <div className="h-48 flex flex-col items-center justify-center gap-3 text-center py-12 bg-secondary/15 rounded-2xl border border-dashed border-border/20">
                    <Inbox size={32} className="text-muted-foreground/30 animate-bounce" />
                    <div className="space-y-1">
                      <span className="font-extrabold text-xs text-foreground block">Chưa gửi yêu cầu nào</span>
                      <span className="text-[10px] text-muted-foreground font-semibold">Các yêu cầu em gửi sẽ hiển thị tại đây.</span>
                    </div>
                  </div>
                ) : (
                  tickets.map((ticket) => (
                    <button
                      key={ticket.id}
                      onClick={() => setSelectedTicket(ticket)}
                      className="w-full p-4 rounded-2xl bg-card border border-border/40 hover:border-primary/30 text-left transition-all cursor-pointer shadow-sm hover:shadow flex items-center justify-between group active:scale-98"
                    >
                      <div className="space-y-2 max-w-[85%]">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className={cn("px-2 py-0.5 rounded text-[8px] font-black border uppercase tracking-wider", getCategoryBadgeColor(ticket.category))}>
                            {getCategoryLabel(ticket.category)}
                          </span>
                          {ticket.status === 'resolved' ? (
                            <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full text-[8px] font-black bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/10">
                              Đã giải quyết
                            </span>
                          ) : ticket.status === 'rejected' ? (
                            <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full text-[8px] font-black bg-rose-500/10 text-rose-500 border border-rose-500/10">
                              Từ chối
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full text-[8px] font-black bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/10 animate-pulse">
                              Đang chờ
                            </span>
                          )}
                        </div>
                        <h4 className="font-black text-xs text-foreground truncate">{ticket.title}</h4>
                        <span className="text-[9px] text-muted-foreground font-semibold block">
                          Ngày gửi: {new Date(ticket.createdAt).toLocaleDateString('vi-VN')}
                        </span>
                      </div>
                      <ChevronRight size={15} className="text-muted-foreground group-hover:translate-x-1.5 transition-transform" />
                    </button>
                  ))
                )}
              </CardContent>
            </Card>
          </div>
        )}

      </div>

      {/* Detail Overlay Modal when selectedTicket is set */}
      {selectedTicket && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in">
          <div className="bg-card/95 border border-border/40 rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl animate-scale-in max-h-[85vh] flex flex-col glass">

            {/* Modal Header */}
            <div className="p-4 bg-gradient-to-r from-emerald-600/90 via-teal-600/90 to-indigo-600/90 text-white flex items-center justify-between shadow-md">
              <div className="flex items-center gap-2">
                <LifeBuoy size={18} />
                <span className="font-black text-xs uppercase tracking-wider">Chi tiết yêu cầu hỗ trợ</span>
              </div>
              <button
                onClick={() => setSelectedTicket(null)}
                className="p-1.5 rounded-xl hover:bg-white/10 text-white transition-all cursor-pointer"
              >
                <X size={16} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto space-y-4 flex-1">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className={cn("px-2 py-0.5 rounded text-[9px] font-black border uppercase tracking-wider", getCategoryBadgeColor(selectedTicket.category))}>
                    {getCategoryLabel(selectedTicket.category)}
                  </span>
                  {getStatusBadge(selectedTicket.status)}
                </div>
                <h3 className="font-black text-sm text-foreground leading-snug">{selectedTicket.title}</h3>
                <span className="text-[10px] text-muted-foreground font-semibold block">
                  Mã yêu cầu: {selectedTicket.id} | Ngày gửi: {new Date(selectedTicket.createdAt).toLocaleString('vi-VN')}
                </span>
              </div>

              <div className="p-4 bg-secondary/35 rounded-2xl border border-border/20 text-xs font-semibold text-muted-foreground leading-relaxed whitespace-pre-wrap">
                {selectedTicket.description}
              </div>

              {selectedTicket.screenshotUrl && (
                <div className="space-y-1.5">
                  <span className="text-[9px] font-black text-muted-foreground block uppercase tracking-wider">Ảnh minh họa đính kèm:</span>
                  <a
                    href={selectedTicket.screenshotUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="block overflow-hidden rounded-2xl border border-border/30 hover:border-primary/40 transition-colors shadow-sm cursor-zoom-in"
                  >
                    <img
                      src={selectedTicket.screenshotUrl}
                      alt="Student Screenshot"
                      className="max-h-[180px] w-full object-cover hover:scale-102 transition-transform duration-300 animate-fade-in"
                    />
                  </a>
                </div>
              )}

              {/* Teacher response */}
              <div className="border-t border-border/40 pt-4 space-y-3">
                <span className="text-[9px] font-black text-muted-foreground block uppercase tracking-wider">Phản hồi của Giáo viên:</span>

                {selectedTicket.teacherResponse ? (
                  <div className="p-4 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-xs leading-relaxed space-y-2">
                    <div className="flex items-center gap-1.5 text-indigo-600 dark:text-indigo-400 font-extrabold">
                      <MessageSquare size={14} />
                      <span>Thầy cô phản hồi:</span>
                    </div>
                    <p className="font-semibold text-foreground whitespace-pre-wrap leading-relaxed">{selectedTicket.teacherResponse}</p>
                    <span className="text-[9px] text-muted-foreground font-semibold block pt-1.5 border-t border-indigo-500/5">
                      Cập nhật lúc: {new Date(selectedTicket.updatedAt).toLocaleString('vi-VN')}
                    </span>
                  </div>
                ) : (
                  <div className="p-5 rounded-2xl bg-slate-500/5 border border-dashed border-border/45 text-center text-xs text-muted-foreground font-semibold leading-relaxed">
                    💬 Thầy cô đang xử lý yêu cầu hỗ trợ này của em. Em vui lòng tải lại hoặc check lại lịch sử sau nhé!
                  </div>
                )}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-border/20 flex justify-end bg-card/60 shrink-0">
              <Button
                onClick={() => setSelectedTicket(null)}
                className="font-bold text-xs bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 px-5 py-2 cursor-pointer h-9 rounded-xl"
              >
                Đóng
              </Button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
