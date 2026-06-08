import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../../services/store';
import { functions } from '../../services/firebase';
import { httpsCallable } from 'firebase/functions';
import { 
  Check, 
  Sparkles, 
  Zap, 
  ShieldCheck, 
  ArrowLeft, 
  Loader2 
} from 'lucide-react';

export const PremiumPricing: React.FC = () => {
  const navigate = useNavigate();
  const { isPremium, user } = useAppStore();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleUpgrade = async () => {
    if (!user) {
      navigate('/auth');
      return;
    }
    setLoading(true);
    setError(null);

    try {
      const createPaymentLinkFn = httpsCallable<{ returnUrl: string; cancelUrl: string }, { checkoutUrl: string; orderCode: number }>(
        functions, 
        'createPaymentLink'
      );
      
      const returnUrl = `${window.location.origin}/dashboard?payment=success`;
      const cancelUrl = `${window.location.origin}/premium?payment=cancelled`;

      const result = await createPaymentLinkFn({
        returnUrl,
        cancelUrl
      });

      if (result.data?.checkoutUrl) {
        // Chuyển hướng sang trang thanh toán của PayOS
        window.location.href = result.data.checkoutUrl;
      } else {
        throw new Error('Không nhận được liên kết thanh toán từ máy chủ.');
      }
    } catch (err: any) {
      console.error('Lỗi khi thanh toán:', err);
      setError(err?.message || 'Có lỗi xảy ra khi tạo giao dịch thanh toán. Vui lòng thử lại sau.');
      setLoading(false);
    }
  };

  const freeBenefits = [
    'Học tập chặng 1 & 2 (Mục tiêu điểm 5 và điểm 7-8)',
    'Hỏi đáp Gia sư AI giới hạn 20 câu hỏi/ngày',
    'Tự động ghi nhận sổ lỗi sai dạng bài',
    'Thi thử vào 10 cơ bản'
  ];

  const premiumBenefits = [
    'Mở khóa hoàn toàn chặng 3 (Mục tiêu điểm 9-10)',
    'Không giới hạn hỏi đáp Gia sư AI (hạn mức 100 câu/ngày)',
    'Ưu tiên giải các câu hỏi toán hình học, bất đẳng thức khó',
    'Phân tích chi tiết lỗi sai và đề xuất lộ trình khắc phục cá nhân',
    'Không quảng cáo banner gây gián đoạn học tập',
    'Tài khoản trọn đời, cập nhật ngân hàng đề thi mới liên tục'
  ];

  return (
    <div className="max-w-5xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      {/* Quay lại */}
      <button 
        onClick={() => navigate('/dashboard')}
        className="flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground mb-8 transition-colors group cursor-pointer"
      >
        <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
        Quay lại Bảng điều khiển
      </button>

      {/* Header giới thiệu */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-xs font-black uppercase tracking-wider mb-4 animate-pulse">
          <Sparkles size={12} /> NÂNG CẤP HỘI VIÊN BỨT PHÁ
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 dark:from-white dark:via-indigo-200 dark:to-white bg-clip-text text-transparent mb-4">
          Tài Khoản Premium Ôn Thi Vào 10
        </h1>
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
          Mở khóa toàn bộ tài nguyên học tập đặc quyền chặng 9-10 điểm và học tập không giới hạn cùng trợ lý Gia sư AI thông minh để sẵn sàng cho kỳ thi chuyển cấp.
        </p>
      </div>

      {error && (
        <div className="mb-8 p-4 bg-rose-50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/30 text-rose-600 dark:text-rose-400 rounded-xl text-sm font-bold text-center">
          {error}
        </div>
      )}

      {/* So sánh các gói */}
      <div className="grid md:grid-cols-2 gap-8 items-stretch max-w-4xl mx-auto">
        
        {/* Gói miễn phí */}
        <div className="bg-card rounded-3xl p-8 border border-border shadow-sm flex flex-col justify-between relative overflow-hidden transition-all duration-300 hover:shadow-md">
          <div>
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-lg font-bold text-foreground">Gói Miễn Phí</h3>
                <p className="text-xs text-muted-foreground mt-1">Dành cho học sinh ôn tập cơ bản</p>
              </div>
              <span className="px-2.5 py-1 text-[10px] bg-slate-100 dark:bg-slate-800 text-muted-foreground font-black rounded-lg">CƠ BẢN</span>
            </div>

            <div className="mb-6">
              <span className="text-3xl font-black text-foreground">0đ</span>
              <span className="text-xs text-muted-foreground ml-1">/ trọn đời</span>
            </div>

            <hr className="border-border mb-6" />

            <ul className="space-y-3.5 mb-8">
              {freeBenefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check size={16} className="text-slate-400 shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <button
            disabled={true}
            className="w-full py-3 bg-secondary text-muted-foreground font-bold text-sm rounded-xl cursor-not-allowed text-center"
          >
            {isPremium ? 'Gói hiện tại (Đã nâng cấp)' : 'Gói Mặc Định Của Bạn'}
          </button>
        </div>

        {/* Gói Premium */}
        <div className="bg-card rounded-3xl p-8 border-2 border-primary shadow-xl shadow-primary/5 flex flex-col justify-between relative overflow-hidden transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl hover:shadow-primary/10">
          {/* Tag nổi bật */}
          <div className="absolute top-0 right-0 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-[9px] font-black tracking-widest px-4 py-1.5 rounded-bl-2xl uppercase shadow-sm">
            PHỔ BIẾN NHẤT
          </div>

          <div>
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-lg font-black text-foreground flex items-center gap-1.5">
                  Gói Bứt Phá Premium <Zap size={16} className="text-amber-500 fill-amber-500" />
                </h3>
                <p className="text-xs text-muted-foreground mt-1">Mở khóa toàn năng lực học tập</p>
              </div>
            </div>

            <div className="mb-6 flex items-baseline gap-2">
              <span className="text-3xl font-black bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">99.000đ</span>
              <span className="text-xs text-muted-foreground">/ tài khoản trọn đời</span>
              <span className="text-xs line-through text-slate-400 ml-1">199.000đ</span>
            </div>

            <hr className="border-border mb-6" />

            <ul className="space-y-3.5 mb-8">
              {premiumBenefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-foreground/90">
                  <Check size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                  <span className="font-semibold">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {isPremium ? (
            <div className="w-full py-3 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-black text-sm rounded-xl text-center flex items-center justify-center gap-2 border border-emerald-500/20">
              <ShieldCheck size={18} /> ĐÃ KÍCH HOẠT PREMIUM
            </div>
          ) : (
            <button
              onClick={handleUpgrade}
              disabled={loading}
              className="w-full py-3.5 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-extrabold text-sm rounded-xl shadow-lg shadow-amber-500/20 hover:shadow-xl transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin" size={16} /> Đang khởi tạo ví thanh toán...
                </>
              ) : (
                'Nâng Cấp Premium Ngay'
              )}
            </button>
          )}
        </div>

      </div>

      {/* Cam kết bảo mật */}
      <div className="mt-12 text-center text-xs text-muted-foreground max-w-md mx-auto flex flex-col items-center gap-2">
        <div className="flex items-center gap-1.5 font-bold text-slate-500 dark:text-slate-400">
          <ShieldCheck size={14} className="text-primary" /> Hệ thống thanh toán bảo mật VietQR qua PayOS
        </div>
        <p>Giao dịch của bạn được xử lý tự động và mã hóa hoàn toàn. Quyền lợi Premium sẽ được kích hoạt ngay lập tức sau khi giao dịch chuyển khoản thành công.</p>
      </div>
    </div>
  );
};

export default PremiumPricing;
