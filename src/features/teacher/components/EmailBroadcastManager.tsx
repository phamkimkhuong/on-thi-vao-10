import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { Send, Mail, CheckCircle2, AlertCircle, Eye, Sparkles, RefreshCw, Users, Layers } from 'lucide-react';
import { cn } from '../../../utils/cn';
import { functions } from '../../../services/firebase';
import { httpsCallable } from 'firebase/functions';

export const EmailBroadcastManager: React.FC = () => {
  const [targetAudience, setTargetAudience] = useState<'all' | 'grade9' | 'grade10' | 'grade11' | 'premium'>('all');
  const [subject, setSubject] = useState('🚀 Ra mắt tính năng mới cực hot cho môn Toán & Anh!');
  const [content, setContent] = useState(
    `Chào em!

Thầy cô từ ezonthi vừa cập nhật thêm tính năng mới giúp em ôn luyện hiệu quả hơn:

✨ **Các điểm mới nổi bật:**
- Giao diện Giấy thi dịu mắt, hỗ trợ đọc đề & làm bài thoải mái.
- Hệ thống công thức Toán & bảng biểu hiển thị siêu chuẩn.
- Tối ưu tốc độ tải và lưu tiến trình học tập thông minh.

Em hãy vào ngay ezonthi để trải nghiệm tính năng mới này nhé!`
  );

  const [senderName, setSenderName] = useState('Ban Giáo Dục ezonthi');
  const [senderEmail, setSenderEmail] = useState('thongbao@ezonthi.com');
  const [previewTab, setPreviewTab] = useState<'edit' | 'preview'>('edit');
  const [isSending, setIsSending] = useState(false);
  const [isSyncingDirectory, setIsSyncingDirectory] = useState(false);
  const [isFetchingDirectory, setIsFetchingDirectory] = useState(false);

  const [directoryInfo, setDirectoryInfo] = useState<{
    totalCount: number;
    emails: string[];
    updatedAt: string;
  } | null>(null);

  const [selectedBatchIndex, setSelectedBatchIndex] = useState(0);
  const [sendStatus, setSendStatus] = useState<{
    type: 'success' | 'error' | 'info' | null;
    message: string;
  }>({ type: null, message: '' });

  const fetchDirectory = async () => {
    setIsFetchingDirectory(true);
    try {
      const getEmailDirFn = httpsCallable<any, { success: boolean; totalCount: number; emails: string[]; updatedAt: string }>(
        functions,
        'getEmailDirectory'
      );
      const res = await getEmailDirFn({});
      if (res.data.success) {
        setDirectoryInfo({
          totalCount: res.data.totalCount,
          emails: res.data.emails,
          updatedAt: res.data.updatedAt
        });
      }
    } catch (e) {
      console.error("Lỗi lấy thông tin email_directory:", e);
    } finally {
      setIsFetchingDirectory(false);
    }
  };

  useEffect(() => {
    fetchDirectory();
  }, []);

  const handleSyncDirectory = async () => {
    setIsSyncingDirectory(true);
    setSendStatus({ type: 'info', message: 'Đang quét toàn bộ Firestore và cập nhật danh bạ email tập trung...' });

    try {
      const syncFn = httpsCallable<any, { success: boolean; totalCount: number; emails: string[]; message: string }>(
        functions,
        'syncEmailDirectory'
      );
      const res = await syncFn({});
      if (res.data.success) {
        setDirectoryInfo({
          totalCount: res.data.totalCount,
          emails: res.data.emails,
          updatedAt: new Date().toISOString()
        });
        setSendStatus({
          type: 'success',
          message: `🎉 ${res.data.message}`
        });
      }
    } catch (err: any) {
      console.error("Lỗi đồng bộ danh bạ:", err);
      setSendStatus({
        type: 'error',
        message: `❌ Lỗi khi đồng bộ danh bạ: ${err.message || 'Có lỗi xảy ra'}`
      });
    } finally {
      setIsSyncingDirectory(false);
    }
  };

  const handleSendTestEmail = async () => {
    const testEmailPrompt = prompt('Nhập địa chỉ Email của bạn để nhận bản thử nghiệm:', 'phamkhuong436@gmail.com');
    if (!testEmailPrompt) return;

    setIsSending(true);
    setSendStatus({ type: 'info', message: `Đang gửi email dùng thử tới ${testEmailPrompt}...` });

    try {
      const sendResendEmailFn = httpsCallable<any, { success: boolean; id: string; message: string }>(
        functions,
        'sendResendEmail'
      );

      const res = await sendResendEmailFn({
        fromName: senderName,
        fromEmail: senderEmail,
        to: testEmailPrompt.trim(),
        subject: subject,
        html: generateEmailHtml(subject, content)
      });

      setSendStatus({
        type: 'success',
        message: `🎉 ${res.data.message || 'Đã gửi email thử nghiệm thành công!'} (ID: ${res.data.id || 'ok'})`
      });
    } catch (err: any) {
      console.error('Lỗi gửi test email:', err);
      setSendStatus({
        type: 'error',
        message: `❌ Lỗi khi gửi thử: ${err.message || 'Có lỗi xảy ra'}`
      });
    } finally {
      setIsSending(false);
    }
  };

  const handleBroadcastBatch = async () => {
    const batchSize = 95;
    const totalEmails = directoryInfo?.totalCount || 0;
    const start = selectedBatchIndex * batchSize + 1;
    const end = Math.min((selectedBatchIndex + 1) * batchSize, totalEmails);

    const confirmSend = window.confirm(
      `⚠️ BẠN CÓ CHẮC CHẮN MUỐN GỬI EMAIL THÔNG BÁO HÀNG LOẠT?\n\n- Đợt gửi: Đợt ${selectedBatchIndex + 1} (${start} - ${end} / tổng ${totalEmails} học sinh)\n- Tiêu đề: ${subject}`
    );
    if (!confirmSend) return;

    setIsSending(true);
    setSendStatus({
      type: 'info',
      message: `Đang gửi email đợt ${selectedBatchIndex + 1} (${start} - ${end})...`
    });

    try {
      const sendBatchFn = httpsCallable<any, { success: boolean; sentCount: number; message: string }>(
        functions,
        'sendBroadcastBatch'
      );

      const res = await sendBatchFn({
        batchIndex: selectedBatchIndex,
        batchSize: 95,
        fromName: senderName,
        fromEmail: senderEmail,
        subject: subject,
        html: generateEmailHtml(subject, content)
      });

      setSendStatus({
        type: 'success',
        message: res.data.message
      });
    } catch (err: any) {
      console.error('Lỗi gửi email phân đợt:', err);
      setSendStatus({
        type: 'error',
        message: `❌ Lỗi khi gửi đợt ${selectedBatchIndex + 1}: ${err.message || 'Có lỗi xảy ra'}`
      });
    } finally {
      setIsSending(false);
    }
  };

  const generateEmailHtml = (emailSubject: string, bodyContent: string) => {
    const formattedBody = bodyContent.replace(/\n/g, '<br/>');
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #FAF8F5; margin: 0; padding: 20px; color: #2D2A26; }
          .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #E8E3DA; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
          .header { background: linear-gradient(135deg, #10B981 0%, #059669 100%); padding: 28px 24px; text-align: center; color: white; }
          .header h1 { margin: 0; font-size: 22px; font-weight: 700; letter-spacing: -0.5px; }
          .content { padding: 32px 24px; font-size: 15px; line-height: 1.6; color: #374151; }
          .cta-btn { display: inline-block; background: #10B981; color: white !important; text-decoration: none; padding: 14px 28px; font-weight: bold; border-radius: 12px; margin-top: 20px; text-align: center; box-shadow: 0 2px 8px rgba(16,185,129,0.3); }
          .footer { background: #F9FAFB; padding: 20px; text-align: center; font-size: 12px; color: #6B7280; border-top: 1px solid #E5E7EB; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🎓 Ôn Thi Vào 10 - ezonthi</h1>
            <p style="margin: 4px 0 0 0; opacity: 0.9; font-size: 13px;">Thông báo cập nhật tính năng mới</p>
          </div>
          <div class="content">
            <h2 style="color: #111827; font-size: 18px; margin-top: 0;">${emailSubject}</h2>
            <div>${formattedBody}</div>
            <div style="text-align: center; margin-top: 28px;">
              <a href="https://ezonthi.com" class="cta-btn">🚀 Trải Nghiệm Ngay</a>
            </div>
          </div>
          <div class="footer">
            <p>© 2026 ezonthi. Hệ thống Học & Ôn Thi Thông Minh.</p>
            <p style="margin: 0; font-size: 11px;">Nếu bạn không muốn nhận thông báo qua email, hãy tùy chỉnh trong trang cài đặt tài khoản.</p>
          </div>
        </div>
      </body>
      </html>
    `;
  };

  const totalSystemEmails = directoryInfo?.totalCount || 0;
  const batchSize = 95;
  const totalBatches = Math.max(1, Math.ceil(totalSystemEmails / batchSize));

  return (
    <div className="space-y-6">

      {/* Top Banner: 1-Read Email Directory Status */}
      <Card className="border-emerald-500/20 bg-emerald-50/50 dark:bg-emerald-950/20">
        <CardContent className="p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-600 font-bold">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-sm text-foreground">
                  Danh bạ Email Học sinh (Kiến trúc 1-Read Tối ưu)
                </h3>
                <span className="text-[10px] bg-emerald-600 text-white font-extrabold px-2 py-0.5 rounded-full">
                  1 Read / Ngày
                </span>
              </div>
              <p className="text-xs text-muted-foreground mt-0.5">
                {isFetchingDirectory ? (
                  'Đang tải danh bạ email tập trung...'
                ) : (
                  <>
                    Tổng số email học sinh: <strong className="text-emerald-700 font-extrabold">{totalSystemEmails} email</strong>
                    {directoryInfo?.updatedAt && (
                      <span className="ml-2 text-[11px] opacity-80">
                        • Cập nhật lần cuối: {new Date(directoryInfo.updatedAt).toLocaleDateString('vi-VN')}
                      </span>
                    )}
                  </>
                )}
              </p>
            </div>
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={handleSyncDirectory}
            disabled={isSyncingDirectory}
            className="text-xs gap-1.5 cursor-pointer shrink-0 bg-background hover:bg-emerald-100 dark:hover:bg-emerald-900/40 border-emerald-500/30"
          >
            <RefreshCw className={cn("w-3.5 h-3.5", isSyncingDirectory && "animate-spin")} />
            {isSyncingDirectory ? 'Đang đồng bộ...' : 'Quét & Đồng bộ danh bạ'}
          </Button>
        </CardContent>
      </Card>

      {/* Main Broadcast Editor */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-3">
          <div>
            <CardTitle className="text-lg flex items-center gap-2">
              <Mail className="w-5 h-5 text-emerald-600" />
              Soạn thông báo Email tính năng mới
            </CardTitle>
            <CardDescription className="text-xs mt-1">
              Gửi thư thông báo tính năng mới, sự kiện hoặc bài giảng mới đến học sinh.
            </CardDescription>
          </div>

          <div className="flex bg-secondary/60 p-1 rounded-xl gap-1">
            <button
              onClick={() => setPreviewTab('edit')}
              className={cn(
                "px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer",
                previewTab === 'edit' ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
              )}
            >
              Soạn thảo
            </button>
            <button
              onClick={() => setPreviewTab('preview')}
              className={cn(
                "px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5",
                previewTab === 'preview' ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
              )}
            >
              <Eye className="w-3.5 h-3.5" />
              Xem trước Email
            </button>
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          {previewTab === 'edit' ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Target Audience */}
                <div>
                  <label className="text-xs font-bold text-foreground block mb-1">Đối tượng nhận thông báo:</label>
                  <select
                    value={targetAudience}
                    onChange={(e: any) => setTargetAudience(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-emerald-500 font-semibold"
                  >
                    <option value="all">🌟 Tất cả học sinh toàn hệ thống ({totalSystemEmails} email)</option>
                    <option value="grade9">🎒 Học sinh Lớp 9 ôn thi vào 10</option>
                    <option value="grade10">🏫 Học sinh Lớp 10 THPT</option>
                    <option value="grade11">📐 Học sinh Lớp 11 THPT</option>
                    <option value="premium">👑 Học viên gói Premium</option>
                  </select>
                </div>

                {/* Sender Title */}
                <div>
                  <label className="text-xs font-bold text-foreground block mb-1">Tên người gửi hiển thị:</label>
                  <input
                    type="text"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-emerald-500 font-semibold"
                  />
                </div>

                {/* Sender Email */}
                <div>
                  <label className="text-xs font-bold text-foreground block mb-1">Địa chỉ Email gửi (From):</label>
                  <input
                    type="email"
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-emerald-500 font-semibold"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="text-xs font-bold text-foreground block mb-1">Tiêu đề Email (Subject):</label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-emerald-500 font-bold"
                  placeholder="Ví dụ: 🚀 [ezonthi Cập Nhật] Ra mắt tính năng mới..."
                />
              </div>

              {/* Content Body */}
              <div>
                <label className="text-xs font-bold text-foreground block mb-1">Nội dung thông báo (Email Body):</label>
                <textarea
                  rows={8}
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="w-full p-3 text-xs rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-emerald-500 font-mono leading-relaxed"
                  placeholder="Nhập nội dung thông báo gửi đến học sinh..."
                />
              </div>
            </>
          ) : (
            /* Live Email Preview */
            <div className="border border-border rounded-2xl p-4 bg-amber-50/20 dark:bg-stone-900/30">
              <div className="text-xs text-muted-foreground mb-3 flex items-center justify-between">
                <span>📄 Bản xem trước hiển thị trong Gmail/Outlook của học sinh:</span>
                <span className="font-mono bg-secondary px-2 py-0.5 rounded text-[11px]">From: {senderName} &lt;{senderEmail}&gt;</span>
              </div>

              <div className="max-w-md mx-auto bg-white rounded-xl shadow-md border border-stone-200 overflow-hidden text-stone-900 text-xs">
                <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-4 text-center text-white">
                  <h4 className="font-bold text-base m-0">🎓 Ôn Thi Vào 10 - ezonthi</h4>
                  <p className="text-[11px] opacity-80 m-0 mt-0.5">Thông báo cập nhật tính năng mới</p>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-sm mb-3 text-stone-900">{subject}</h3>
                  <div className="whitespace-pre-line text-stone-700">{content}</div>
                  <div className="mt-6 text-center">
                    <button className="bg-emerald-600 text-white font-bold text-xs px-6 py-3 rounded-xl shadow-md border-0 cursor-pointer">
                      🚀 Trải Nghiệm Ngay
                    </button>
                  </div>
                </div>
                <div className="bg-stone-50 p-3 text-center text-[10px] text-stone-500 border-t border-stone-100">
                  © 2026 ezonthi. Hệ thống Học & Ôn Thi Thông Minh.
                </div>
              </div>
            </div>
          )}

          {/* Status Message */}
          {sendStatus.type && (
            <div className={cn(
              "p-3 rounded-xl text-xs flex items-center gap-2 font-medium",
              sendStatus.type === 'success' ? "bg-emerald-500/10 text-emerald-600 border border-emerald-500/20" :
                sendStatus.type === 'error' ? "bg-red-500/10 text-red-600 border border-red-500/20" :
                  "bg-blue-500/10 text-blue-600 border border-blue-500/20"
            )}>
              {sendStatus.type === 'success' && <CheckCircle2 className="w-4 h-4 shrink-0" />}
              {sendStatus.type === 'error' && <AlertCircle className="w-4 h-4 shrink-0" />}
              {sendStatus.type === 'info' && <Sparkles className="w-4 h-4 shrink-0 animate-spin text-blue-500" />}
              <span>{sendStatus.message}</span>
            </div>
          )}

          {/* Batch Selector & Actions */}
          <div className="space-y-3 pt-4 border-t border-border/40">
            {/* Selector đợt gửi (95 mail/ngày) */}
            <div className="bg-secondary/40 p-3 rounded-2xl space-y-2">
              <div className="flex items-center justify-between text-xs font-bold text-foreground">
                <span className="flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-emerald-600" />
                  Chọn Đợt Gửi Hôm Nay (Hạn mức 95 email/ngày):
                </span>
                <span className="text-muted-foreground text-[11px]">
                  Tổng {totalBatches} đợt gửi ({totalSystemEmails} học sinh)
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {Array.from({ length: totalBatches }).map((_, idx) => {
                  const startIdx = idx * 95 + 1;
                  const endIdx = Math.min((idx + 1) * 95, totalSystemEmails);
                  const isSelected = selectedBatchIndex === idx;

                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setSelectedBatchIndex(idx)}
                      className={cn(
                        "p-2 rounded-xl text-xs text-left transition-all border cursor-pointer",
                        isSelected
                          ? "bg-emerald-600 text-white border-emerald-600 font-bold shadow-md"
                          : "bg-background text-foreground border-border hover:border-emerald-500/50"
                      )}
                    >
                      <div className="font-extrabold text-[11px]">Đợt {idx + 1}</div>
                      <div className="text-[10px] opacity-90 mt-0.5">
                        {totalSystemEmails > 0 ? `${startIdx} - ${endIdx}` : '0 học sinh'}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={handleSendTestEmail}
                disabled={isSending}
                className="w-full sm:w-auto text-xs cursor-pointer gap-1.5"
              >
                <Send className="w-3.5 h-3.5" />
                Gửi Thử Email Test Tới Tôi
              </Button>

              <Button
                type="button"
                onClick={handleBroadcastBatch}
                disabled={isSending || totalSystemEmails === 0}
                className="w-full sm:w-auto bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-xs px-6 py-2.5 rounded-xl shadow-md gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                {isSending
                  ? 'Đang thực thi lệnh gửi...'
                  : `🚀 Gửi Đợt ${selectedBatchIndex + 1} (${selectedBatchIndex * 95 + 1} - ${Math.min((selectedBatchIndex + 1) * 95, totalSystemEmails)}) Hôm Nay`}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
