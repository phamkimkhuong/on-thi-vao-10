import React from 'react';
import { Brain, Loader, CheckCircle, AlertTriangle, X } from 'lucide-react';

interface AiTutorDiagnosticsProps {
  isLoadingProfile: boolean;
  hasProfileData: boolean;
  learningSummary: string;
  strengths: string[];
  weaknesses: string[];
  lastUpdated?: any;
  isMobile?: boolean;
  onCloseMobile?: () => void;
}

export const AiTutorDiagnostics: React.FC<AiTutorDiagnosticsProps> = ({
  isLoadingProfile,
  hasProfileData,
  learningSummary,
  strengths,
  weaknesses,
  lastUpdated,
  isMobile = false,
  onCloseMobile,
}) => {
  const formattedLastUpdated = lastUpdated
    ? new Date(lastUpdated.seconds ? lastUpdated.seconds * 1000 : new Date(lastUpdated).getTime()).toLocaleString("vi-VN")
    : null;

  if (isMobile) {
    return (
      <>
        {/* Backdrop */}
        <div
          onClick={onCloseMobile}
          className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-xs z-50 animate-fade-in"
        />
        {/* Bottom Sheet Card */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 max-h-[75vh] bg-card rounded-t-3xl border-t border-border shadow-2xl z-55 flex flex-col overflow-hidden animate-in slide-in-from-bottom duration-300">
          <div className="w-12 h-1.5 bg-slate-300 dark:bg-slate-700 rounded-full mx-auto my-3 shrink-0" />

          <div className="flex items-center justify-between px-5 pb-3 border-b border-border">
            <div className="flex items-center gap-2">
              <Brain className="text-amber-500" size={18} />
              <div className="text-left">
                <h3 className="text-sm font-black text-foreground">Hồ Sơ Năng Lực Của Bạn</h3>
                <p className="text-[9px] font-semibold text-muted-foreground">Chẩn đoán điểm mạnh/yếu thời gian thực</p>
              </div>
            </div>
            <button
              onClick={onCloseMobile}
              className="p-1.5 hover:bg-secondary rounded-full text-muted-foreground hover:text-foreground cursor-pointer flex items-center justify-center border border-border/40"
            >
              <X size={16} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-5 space-y-5 text-left pb-10">
            {isLoadingProfile ? (
              <div className="flex flex-col items-center justify-center py-10 text-muted-foreground gap-2 text-xs font-bold animate-pulse">
                <Loader size={20} className="animate-spin text-amber-500" />
                Đang tải dữ liệu hồ sơ...
              </div>
            ) : hasProfileData ? (
              <>
                {learningSummary && (
                  <div className="p-3.5 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-border/40">
                    <span className="text-[9px] font-black text-amber-600 dark:text-amber-400 block mb-1">TIẾN TRÌNH HIỆN TẠI</span>
                    <p className="text-xs font-bold leading-relaxed text-foreground">{learningSummary}</p>
                  </div>
                )}

                <div className="space-y-2">
                  <span className="text-[10px] font-black text-emerald-600 block">ĐIỂM MẠNH ({strengths.length || 0})</span>
                  {strengths.length > 0 ? (
                    <ul className="space-y-2.5">
                      {strengths.map((s, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs font-bold text-muted-foreground leading-tight">
                          <CheckCircle className="text-emerald-500 shrink-0 mt-0.5" size={14} />
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-xs text-muted-foreground italic pl-1">Chưa ghi nhận điểm mạnh đặc biệt.</p>
                  )}
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] font-black text-orange-600 block">ĐIỂM YẾU / LỖI SAI ({weaknesses.length || 0})</span>
                  {weaknesses.length > 0 ? (
                    <ul className="space-y-2.5">
                      {weaknesses.map((w, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs font-bold text-muted-foreground leading-tight">
                          <AlertTriangle className="text-orange-500 shrink-0 mt-0.5" size={14} />
                          <span>{w}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-xs text-muted-foreground italic pl-1">Tuyệt vời! Chưa phát hiện lỗi sai hệ thống nào.</p>
                  )}
                </div>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center py-10 text-center gap-3">
                <Brain className="text-slate-300 dark:text-slate-700" size={40} />
                <p className="text-xs font-bold text-muted-foreground leading-relaxed px-4">
                  Chưa có dữ liệu chẩn đoán cho môn học này. Thầy sẽ phân tích và tự động ghi nhận các điểm mạnh, lỗi sai thường gặp khi em gửi câu hỏi ôn luyện!
                </p>
              </div>
            )}

            {formattedLastUpdated && (
              <div className="pt-4 border-t border-border text-[9px] text-muted-foreground font-semibold text-right">
                Cập nhật mới nhất: {formattedLastUpdated}
              </div>
            )}
          </div>
        </div>
      </>
    );
  }

  // Desktop sidebar panel
  return (
    <div className="hidden lg:flex w-full lg:w-80 shrink-0 flex-col lg:h-full pr-1 animate-fade-in">
      <div className="flex-1 bg-card border border-border/80 rounded-2xl p-4 shadow-xl flex flex-col overflow-hidden min-h-[350px] shrink-0">
        <div className="flex items-center gap-2 pb-4 border-b border-border">
          <Brain className="text-amber-500" size={18} />
          <div className="text-left">
            <h3 className="text-xs font-black text-foreground">Hồ Sơ Năng Lực</h3>
            <p className="text-[8px] font-semibold text-muted-foreground mt-0.5">Chẩn đoán điểm mạnh/yếu thời gian thực</p>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto mt-4 space-y-4 pr-1 text-left">
          {isLoadingProfile ? (
            <div className="flex flex-col items-center justify-center h-40 text-muted-foreground gap-2 text-[10px] font-bold animate-pulse">
              <Loader size={16} className="animate-spin text-amber-500" />
              Đang tải dữ liệu hồ sơ...
            </div>
          ) : hasProfileData ? (
            <>
              {learningSummary && (
                <div className="p-3 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-border/40">
                  <span className="text-[8px] font-black text-amber-600 dark:text-amber-400 block mb-1">TIẾN TRÌNH HIỆN TẠI</span>
                  <p className="text-[10px] font-bold leading-relaxed text-foreground">{learningSummary}</p>
                </div>
              )}

              <div>
                <span className="text-[8px] font-black text-emerald-600 block mb-2">ĐIỂM MẠNH ({strengths.length || 0})</span>
                {strengths.length > 0 ? (
                  <ul className="space-y-1.5">
                    {strengths.map((s, idx) => (
                      <li key={idx} className="flex items-start gap-1.5 text-[10px] font-bold text-muted-foreground leading-tight">
                        <CheckCircle className="text-emerald-500 shrink-0 mt-0.5" size={12} />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-[9px] text-muted-foreground italic">Chưa ghi nhận điểm mạnh đặc biệt.</p>
                )}
              </div>

              <div>
                <span className="text-[8px] font-black text-orange-600 block mb-2">ĐIỂM YẾU / LỖI SAI ({weaknesses.length || 0})</span>
                {weaknesses.length > 0 ? (
                  <ul className="space-y-1.5">
                    {weaknesses.map((w, idx) => (
                      <li key={idx} className="flex items-start gap-1.5 text-[10px] font-bold text-muted-foreground leading-tight">
                        <AlertTriangle className="text-orange-500 shrink-0 mt-0.5" size={12} />
                        <span>{w}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-[9px] text-muted-foreground italic">Tuyệt vời! Chưa phát hiện lỗi sai hệ thống nào.</p>
                )}
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center h-40 text-center gap-3">
              <Brain className="text-slate-300 dark:text-slate-700" size={32} />
              <p className="text-[10px] font-bold text-muted-foreground leading-relaxed px-2">
                Chưa có dữ liệu chẩn đoán cho môn học này. Thầy sẽ phân tích và tự động ghi nhận các điểm mạnh, lỗi sai thường gặp khi em gửi câu hỏi ôn luyện!
              </p>
            </div>
          )}
        </div>

        {formattedLastUpdated && (
          <div className="pt-3 border-t border-border text-[8px] text-muted-foreground font-semibold text-right">
            Cập nhật mới nhất: {formattedLastUpdated}
          </div>
        )}
      </div>
    </div>
  );
};
