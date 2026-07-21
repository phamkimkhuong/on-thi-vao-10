import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../../services/store';
import { authService } from '../../services/authService';
import { affiliateService, PayoutRequestItem } from '../../services/affiliateService';
import { AffiliateCode, AffiliateWallet } from '../../types';
import {
  Wallet,
  TrendingUp,
  Share2,
  Copy,
  Check,
  Plus,
  Building,
  ArrowLeft,
  Sparkles,
  Loader2,
  Tag,
  Users,
  DollarSign,
  Clock,
  ArrowUpRight,
  CheckCircle2,
  Power,
  RotateCcw
} from 'lucide-react';

const VIETNAM_BANKS = [
  'Vietcombank (VCB)',
  'MB Bank (MB)',
  'Techcombank (TCB)',
  'VPBank',
  'BIDV',
  'VietinBank',
  'Agribank',
  'TPBank',
  'Sacombank',
  'ACBank (ACB)',
  'HD Bank',
  'VIB',
  'MSB',
  'SeABank',
  'Khác'
];

export const AffiliateDashboard: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAppStore();

  const [loading, setLoading] = useState(true);
  const [wallet, setWallet] = useState<AffiliateWallet | null>(null);
  const [codes, setCodes] = useState<AffiliateCode[]>([]);
  const [transactions, setTransactions] = useState<any[]>([]);
  const [payouts, setPayouts] = useState<PayoutRequestItem[]>([]);

  // Form tạo mã
  const [isCreatingCode, setIsCreatingCode] = useState(false);
  const [newCodeInput, setNewCodeInput] = useState('');
  const [createCodeError, setCreateCodeError] = useState<string | null>(null);

  // Form rút tiền & ngân hàng
  const [isPayoutModalOpen, setIsPayoutModalOpen] = useState(false);
  const [payoutAmountInput, setPayoutAmountInput] = useState('100000');
  const [bankName, setBankName] = useState(VIETNAM_BANKS[0]);
  const [accountNumber, setAccountNumber] = useState('');
  const [accountHolder, setAccountHolder] = useState('');
  const [payoutError, setPayoutError] = useState<string | null>(null);
  const [payoutSuccess, setPayoutSuccess] = useState<string | null>(null);
  const [submittingPayout, setSubmittingPayout] = useState(false);

  // Toast thông báo tùy chỉnh
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const showToast = (message: string, type: 'success' | 'error' = 'success') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 4000);
  };

  // Copy feedback
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  // 75% Revenue Pool state
  const [newDiscountInput, setNewDiscountInput] = useState<number>(20);
  const [editingRateCode, setEditingRateCode] = useState<{ code: string; discountPercent: number } | null>(null);

  const loadAffiliateData = useCallback(async () => {
    if (!user) {
      setLoading(false);
      return;
    }
    setLoading(true);

    try {
      const [walletRes, codesRes, txRes, payoutRes] = await Promise.all([
        affiliateService.getWallet(user.uid),
        affiliateService.getMyCodes(user.uid),
        affiliateService.getMyTransactions(user.uid),
        affiliateService.getPayoutRequests(user.uid)
      ]);

      setWallet(walletRes);
      setCodes(codesRes);
      setTransactions(txRes);
      setPayouts(payoutRes);

      if (walletRes.bankAccount) {
        setBankName(walletRes.bankAccount.bankName || VIETNAM_BANKS[0]);
        setAccountNumber(walletRes.bankAccount.accountNumber || '');
        setAccountHolder(walletRes.bankAccount.accountHolder || '');
      } else if (user.displayName) {
        setAccountHolder(user.displayName.toUpperCase());
      }
    } catch (err) {
      console.error('Lỗi khi tải dữ liệu affiliate:', err);
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    loadAffiliateData();
  }, [loadAffiliateData]);

  const handleCreateCode = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    setCreateCodeError(null);
    try {
      const sellerName = user.displayName || user.email?.split('@')[0] || 'Đối tác';
      const created = await affiliateService.createMyCode(user.uid, sellerName, newCodeInput, newDiscountInput);
      setCodes((prev) => [...prev, created]);
      setNewCodeInput('');
      setNewDiscountInput(20);
      setIsCreatingCode(false);
      showToast(`Đã tạo mã "${created.code}" (Giảm ${created.discountPercent}% - Hoa hồng ${created.commissionPercent}%)!`, 'success');
    } catch (err: any) {
      setCreateCodeError(err.message || 'Lỗi khi tạo mã.');
    }
  };

  const handleUpdateCodeRates = async (codeToUpdate: string, requestedDiscount: number) => {
    try {
      const res = await affiliateService.updateMyCodeRates(codeToUpdate, requestedDiscount);
      setCodes((prev) =>
        prev.map((c) =>
          c.code === codeToUpdate
            ? { ...c, discountPercent: res.discountPercent, commissionPercent: res.commissionPercent }
            : c
        )
      );
      setEditingRateCode(null);
      showToast(`Đã đổi tỷ lệ mã "${codeToUpdate}": Giảm ${res.discountPercent}% cho HS, Bạn nhận ${res.commissionPercent}% HH!`, 'success');
    } catch (err: any) {
      showToast(err.message || 'Không thể cập nhật tỷ lệ mã.', 'error');
    }
  };

  const handleCopyText = (text: string, codeName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(codeName);
    showToast(`Đã sao chép liên kết giới thiệu cho mã ${codeName}!`, 'success');
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const [togglingCode, setTogglingCode] = useState<string | null>(null);

  const handleToggleCodeStatus = async (codeToToggle: AffiliateCode) => {
    setTogglingCode(codeToToggle.code);
    const newStatus = codeToToggle.isActive === false; // nếu đang false thì bật lại (true), nếu đang true/undefined thì thành false

    try {
      await affiliateService.toggleCodeActive(codeToToggle.code, newStatus);
      setCodes((prev) =>
        prev.map((item) =>
          item.code === codeToToggle.code ? { ...item, isActive: newStatus } : item
        )
      );
      showToast(
        newStatus
          ? `Đã kích hoạt lại mã "${codeToToggle.code}" thành công!`
          : `Đã tạm dừng mã "${codeToToggle.code}".`,
        newStatus ? 'success' : 'error'
      );
    } catch (err: any) {
      console.error('Lỗi đổi trạng thái mã:', err);
      showToast(err.message || 'Có lỗi xảy ra khi đổi trạng thái mã.', 'error');
    } finally {
      setTogglingCode(null);
    }
  };

  const handleSaveBankAndRequestPayout = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || !wallet) return;

    setPayoutError(null);
    setPayoutSuccess(null);

    const amountNum = Number(payoutAmountInput);
    if (isNaN(amountNum) || amountNum < 100000) {
      setPayoutError('Số tiền rút tối thiểu là 100.000 VNĐ.');
      return;
    }

    if (amountNum > wallet.balance) {
      setPayoutError('Số dư khả dụng không đủ.');
      return;
    }

    if (!accountNumber.trim() || !accountHolder.trim()) {
      setPayoutError('Vui lòng điền đầy đủ số tài khoản và tên chủ tài khoản.');
      return;
    }

    setSubmittingPayout(true);
    try {
      const bankInfo = {
        bankName,
        accountNumber: accountNumber.trim(),
        accountHolder: accountHolder.trim().toUpperCase()
      };

      await affiliateService.updateBankDetails(user.uid, bankInfo);
      await affiliateService.requestPayout(user.uid, amountNum, bankInfo);

      setPayoutSuccess(`Đã gửi yêu cầu rút ${amountNum.toLocaleString('vi-VN')}đ thành công! BQT sẽ xử lý chuyển khoản trong 24h.`);
      setIsPayoutModalOpen(false);
      loadAffiliateData();
    } catch (err: any) {
      setPayoutError(err.message || 'Có lỗi xảy ra khi gửi yêu cầu rút tiền.');
    } finally {
      setSubmittingPayout(false);
    }
  };

  const maskEmail = (email?: string) => {
    if (!email) return 'Học sinh';
    const parts = email.split('@');
    if (parts[0].length <= 2) return `${parts[0]}***@${parts[1]}`;
    return `${parts[0].slice(0, 2)}***@${parts[1]}`;
  };

  // Tính tổng doanh thu tạo ra
  const totalRevenue = transactions.reduce((acc, curr) => acc + (curr.amount || 0), 0);

  if (!user) {
    return (
      <div className="max-w-4xl mx-auto py-12 px-4 text-center">
        <div className="bg-card rounded-3xl p-8 border border-border shadow-lg max-w-lg mx-auto">
          <div className="w-16 h-16 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center mx-auto mb-4">
            <TrendingUp size={32} />
          </div>
          <h2 className="text-2xl font-black text-foreground mb-2">Chương Trình Đối Tác Affiliate</h2>
          <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
            Đăng nhập tài khoản để nhận mã giới thiệu riêng, chiết khấu 20% cho học sinh và tích lũy 20% hoa hồng thụ động trên mỗi đơn bán trọn đời.
          </p>
          <button
            onClick={() => authService.signInWithGoogle()}
            className="w-full py-3.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-extrabold text-sm rounded-xl shadow-lg shadow-amber-500/20 hover:shadow-xl transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            Đăng Nhập Với Google
          </button>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-3">
        <Loader2 className="animate-spin text-amber-500" size={32} />
        <p className="text-sm font-bold text-muted-foreground">Đang nạp dữ liệu Góc Đối Tác...</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      {/* Toast Notification */}
      {toast && (
        <div className="fixed top-6 right-6 z-50 animate-in fade-in slide-in-from-top-5 duration-300">
          <div className={`flex items-center gap-3 px-5 py-3.5 rounded-2xl shadow-2xl border backdrop-blur-md text-sm font-bold text-white ${toast.type === 'success' ? 'bg-emerald-600/95 border-emerald-400/40 shadow-emerald-600/20' : 'bg-rose-600/95 border-rose-400/40 shadow-rose-600/20'
            }`}>
            {toast.type === 'success' ? <CheckCircle2 size={18} className="text-white" /> : <Sparkles size={18} className="text-white" />}
            <span>{toast.message}</span>
          </div>
        </div>
      )}

      {/* Quay lại */}
      <button
        onClick={() => navigate('/dashboard')}
        className="flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground mb-6 transition-colors group cursor-pointer"
      >
        <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
        Quay lại Bảng điều khiển
      </button>

      {/* Header Banner - Sleek Minimal & Premium */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 rounded-3xl p-6 sm:p-8 text-white shadow-xl mb-8 relative overflow-hidden">
        <div className="absolute right-0 top-0 translate-x-10 -translate-y-10 opacity-5 pointer-events-none">
          <TrendingUp size={280} />
        </div>
        <div className="max-w-2xl relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-300 text-xs font-black uppercase tracking-wider mb-3">
            <Sparkles size={12} /> ĐỐI TÁC TRUYỀN THÔNG & GIÁO VIÊN
          </div>
          <h1 className="text-2xl sm:text-4xl font-black tracking-tight mb-3">
            Góc Đối Tác Affiliate
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-medium">
            Chia sẻ cơ hội học tập bứt phá cho học sinh Lớp 9 - 12. Tận hưởng <strong className="text-amber-400">ngân sách lên tới 75%</strong> cho mỗi đơn nâng cấp thành công và tự do tùy chỉnh mức giảm giá cho học sinh.
          </p>
        </div>
      </div>

      {payoutSuccess && (
        <div className="mb-6 p-4 bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 rounded-2xl text-sm font-bold flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CheckCircle2 size={18} />
            <span>{payoutSuccess}</span>
          </div>
          <button onClick={() => setPayoutSuccess(null)} className="text-xs font-bold underline cursor-pointer">
            Đóng
          </button>
        </div>
      )}

      {/* Thẻ Thống Kê Tổng Quan - Đồng bộ màu sắc tối giản */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {/* Số Dư Khả Dụng */}
        <div className="bg-card rounded-2xl p-5 border border-border shadow-sm flex flex-col justify-between relative">
          <div>
            <div className="flex items-center justify-between text-muted-foreground text-xs font-bold mb-2">
              <span>Số Dư Khả Dụng</span>
              <div className="p-2 rounded-xl bg-amber-500/10 text-amber-500">
                <Wallet size={18} />
              </div>
            </div>
            <div className="text-2xl font-black text-emerald-600 dark:text-emerald-400">
              {(wallet?.balance || 0).toLocaleString('vi-VN')}đ
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-border/60 flex items-center justify-between">
            <span className="text-[11px] text-muted-foreground font-semibold">Tối thiểu rút 100k</span>
            <button
              onClick={() => setIsPayoutModalOpen(true)}
              disabled={(wallet?.balance || 0) < 100000}
              className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white font-extrabold text-xs rounded-lg transition-all cursor-pointer flex items-center gap-1"
            >
              Rút tiền <ArrowUpRight size={14} />
            </button>
          </div>
        </div>

        {/* Tổng hoa hồng đã kiếm */}
        <div className="bg-card rounded-2xl p-5 border border-border shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-muted-foreground text-xs font-bold mb-2">
              <span>Tổng Hoa Hồng Đã Kiếm</span>
              <div className="p-2 rounded-xl bg-amber-500/10 text-amber-500">
                <DollarSign size={18} />
              </div>
            </div>
            <div className="text-2xl font-black text-foreground">
              {(wallet?.totalEarned || 0).toLocaleString('vi-VN')}đ
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-border/60 text-[11px] text-muted-foreground font-semibold flex items-center gap-1">
            <Clock size={12} className="text-amber-500" /> Chờ quyết toán: {(wallet?.pendingBalance || 0).toLocaleString('vi-VN')}đ
          </div>
        </div>

        {/* Doanh thu mang lại */}
        <div className="bg-card rounded-2xl p-5 border border-border shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-muted-foreground text-xs font-bold mb-2">
              <span>Doanh Thu Mang Lại</span>
              <div className="p-2 rounded-xl bg-amber-500/10 text-amber-500">
                <TrendingUp size={18} />
              </div>
            </div>
            <div className="text-2xl font-black text-foreground">
              {totalRevenue.toLocaleString('vi-VN')}đ
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-border/60 text-[11px] text-muted-foreground font-semibold">
            Tổng giá trị đơn trọn đời
          </div>
        </div>

        {/* Lượt nâng cấp thành công */}
        <div className="bg-card rounded-2xl p-5 border border-border shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-muted-foreground text-xs font-bold mb-2">
              <span>Lượt Nâng Cấp Thành Công</span>
              <div className="p-2 rounded-xl bg-amber-500/10 text-amber-500">
                <Users size={18} />
              </div>
            </div>
            <div className="text-2xl font-black text-foreground">
              {transactions.length} <span className="text-xs font-normal text-muted-foreground">lượt mua</span>
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-border/60 text-[11px] text-muted-foreground font-semibold">
            {codes.length} mã đang hoạt động
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Cột trái (2/3): Danh sách Mã Giới Thiệu + Lịch Sử Đơn Hàng */}
        <div className="lg:col-span-2 space-y-8">

          {/* Section 1: Mã Giới Thiệu Của Tôi */}
          <div className="bg-card rounded-3xl p-6 border border-border shadow-sm">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-6">
              <div>
                <h3 className="text-lg font-black text-foreground flex items-center gap-2">
                  <Tag size={18} className="text-amber-500" /> Mã Giới Thiệu Của Bạn
                </h3>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Chia sẻ mã hoặc link này để học sinh được giảm 20% (chỉ còn 79.200đ)
                </p>
              </div>
              <button
                onClick={() => setIsCreatingCode(true)}
                className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white font-extrabold text-xs rounded-xl shadow-sm transition-all cursor-pointer flex items-center gap-1.5 shrink-0"
              >
                <Plus size={14} /> Tạo Mã Mới
              </button>
            </div>

            {/* Form tạo mã mới - Minimal theme */}
            {isCreatingCode && (
              <form onSubmit={handleCreateCode} className="mb-6 p-4 bg-secondary/40 border border-border/80 rounded-2xl space-y-4">
                <div className="flex justify-between items-center">
                  <h4 className="text-xs font-black uppercase text-foreground">Tạo Mã Giới Thiệu Mới (Ngân Sách 75%)</h4>
                  <button
                    type="button"
                    onClick={() => setIsCreatingCode(false)}
                    className="text-xs text-muted-foreground hover:text-foreground font-bold cursor-pointer"
                  >
                    Hủy
                  </button>
                </div>

                <div className="flex gap-2">
                  <input
                    type="text"
                    value={newCodeInput}
                    onChange={(e) => setNewCodeInput(e.target.value.toUpperCase())}
                    placeholder="VD: THAYNAM10, EZ2026..."
                    className="flex-1 px-3 py-2 text-sm bg-background border border-border rounded-xl font-bold uppercase tracking-wider focus:outline-none focus:ring-2 focus:ring-amber-500"
                    autoFocus
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-amber-500 text-white font-extrabold text-xs rounded-xl hover:bg-amber-600 transition-colors cursor-pointer"
                  >
                    Xác Nhận Tạo
                  </button>
                </div>

                {/* Thanh trượt chọn Tỷ lệ Giảm Giá / Hoa Hồng */}
                <div className="p-3 bg-background rounded-xl border border-border space-y-2">
                  <div className="flex justify-between items-center text-xs font-bold">
                    <span className="text-amber-600 dark:text-amber-400">🎓 Giảm cho Học Sinh: <strong>{newDiscountInput}%</strong></span>
                    <span className="text-emerald-600 dark:text-emerald-400">💰 Bạn nhận Hoa Hồng: <strong>{75 - newDiscountInput}%</strong></span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="75"
                    step="5"
                    value={newDiscountInput}
                    onChange={(e) => setNewDiscountInput(Number(e.target.value))}
                    className="w-full accent-amber-500 cursor-pointer h-2 bg-secondary rounded-lg"
                  />
                  <div className="flex justify-between text-[10px] text-muted-foreground font-semibold">
                    <span>0% (Bạn nhận 75%)</span>
                    <span>20% (Bạn nhận 55%)</span>
                    <span>50% (Bạn nhận 25%)</span>
                    <span>75% (Bạn nhận 0%)</span>
                  </div>
                </div>

                {createCodeError && (
                  <p className="text-xs font-bold text-rose-500 mt-1">{createCodeError}</p>
                )}
              </form>
            )}

            {/* Danh sách mã */}
            {codes.length === 0 ? (
              <div className="p-8 text-center bg-secondary/30 rounded-2xl border border-dashed border-border">
                <Tag size={32} className="mx-auto text-muted-foreground/50 mb-2" />
                <p className="text-sm font-bold text-muted-foreground mb-3">Bạn chưa tạo mã giới thiệu nào.</p>
                <button
                  onClick={() => setIsCreatingCode(true)}
                  className="px-4 py-2 bg-amber-500 text-white font-bold text-xs rounded-xl hover:bg-amber-600 transition-colors"
                >
                  Tạo Mã Giới Thiệu Đầu Tiên
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {codes.map((c) => {
                  const shareUrl = `${window.location.origin}/premium?code=${c.code}`;
                  const isCopiedCode = copiedCode === c.code;
                  const isCopiedLink = copiedCode === `${c.code}_link`;
                  const isEditingRates = editingRateCode?.code === c.code;

                  return (
                    <div
                      key={c.code}
                      className="p-4 bg-secondary/20 hover:bg-secondary/40 border border-border rounded-2xl transition-all space-y-3"
                    >
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <div>
                          <div className="flex items-center gap-2 mb-1 flex-wrap">
                            <span className="text-lg font-black text-amber-600 dark:text-amber-400 tracking-wider">
                              {c.code}
                            </span>
                            {c.isActive !== false ? (
                              <span className="px-2 py-0.5 text-[10px] font-black bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-md border border-emerald-500/20 uppercase">
                                Đang Hoạt Động
                              </span>
                            ) : (
                              <span className="px-2 py-0.5 text-[10px] font-black bg-slate-500/10 text-slate-500 rounded-md border border-slate-500/20 uppercase">
                                Đã Tạm Dừng
                              </span>
                            )}
                            <span className="px-2 py-0.5 text-[10px] font-bold bg-secondary text-foreground rounded-md border border-border">
                              Giảm {c.discountPercent ?? 20}% cho HS | Hoa Hồng {c.commissionPercent ?? (75 - (c.discountPercent ?? 20))}%
                            </span>
                          </div>
                          <p className="text-xs text-muted-foreground">
                            Đã sử dụng: <strong className="text-foreground">{c.usageCount || 0} lượt</strong>
                          </p>
                        </div>

                        <div className="flex items-center gap-2 w-full sm:w-auto shrink-0 flex-wrap">
                          <button
                            onClick={() =>
                              setEditingRateCode(
                                isEditingRates ? null : { code: c.code, discountPercent: c.discountPercent ?? 20 }
                              )
                            }
                            className="px-2.5 py-1.5 bg-secondary hover:bg-secondary/80 border border-border text-foreground text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1 cursor-pointer"
                            title="Chỉnh tỷ lệ % Giảm giá & Hoa hồng"
                          >
                            <Sparkles size={14} className="text-amber-500" /> <span>{isEditingRates ? 'Đóng Sửa' : 'Sửa %'}</span>
                          </button>
                          <button
                            onClick={() => handleToggleCodeStatus(c)}
                            disabled={togglingCode === c.code}
                            className={`px-3 py-1.5 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer border ${c.isActive !== false
                                ? 'bg-rose-500/10 hover:bg-rose-500/20 border-rose-500/30 text-rose-600 dark:text-rose-400'
                                : 'bg-emerald-500/10 hover:bg-emerald-500/20 border-emerald-500/30 text-emerald-600 dark:text-emerald-400'
                              }`}
                            title={c.isActive !== false ? 'Tạm dừng mã này' : 'Kích hoạt lại mã này'}
                          >
                            {togglingCode === c.code ? (
                              <Loader2 size={14} className="animate-spin" />
                            ) : c.isActive !== false ? (
                              <>
                                <Power size={14} /> <span>Tạm Dừng</span>
                              </>
                            ) : (
                              <>
                                <RotateCcw size={14} /> <span>Bật Lại</span>
                              </>
                            )}
                          </button>
                          <button
                            onClick={() => handleCopyText(c.code, c.code)}
                            className="px-3 py-1.5 bg-background border border-border hover:border-amber-500 text-foreground text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                            title="Sao chép tên mã"
                          >
                            {isCopiedCode ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                            <span>{isCopiedCode ? 'Đã chép!' : 'Copy Mã'}</span>
                          </button>
                          <button
                            onClick={() => handleCopyText(shareUrl, `${c.code}_link`)}
                            className="px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-600 dark:text-amber-400 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                            title="Sao chép link đầy đủ"
                          >
                            {isCopiedLink ? <Check size={14} className="text-emerald-500" /> : <Share2 size={14} />}
                            <span>{isCopiedLink ? 'Đã chép!' : 'Copy Link'}</span>
                          </button>
                        </div>
                      </div>

                      {/* Inline Form Chỉnh Sửa % Ngân Sách 75% */}
                      {isEditingRates && editingRateCode && (
                        <div className="p-4 bg-secondary/40 border border-border/80 rounded-xl space-y-3 mt-3 animate-in fade-in duration-200">
                          <div className="flex justify-between items-center text-xs font-bold">
                            <span className="text-foreground">Chỉnh tỷ lệ chia mã "{c.code}" (Ngân sách cố định 75%)</span>
                          </div>

                          <div className="flex justify-between items-center text-xs font-bold">
                            <span className="text-amber-600 dark:text-amber-400">🎓 Học sinh giảm: <strong>{editingRateCode.discountPercent}%</strong></span>
                            <span className="text-emerald-600 dark:text-emerald-400">💰 Bạn nhận Hoa hồng: <strong>{75 - editingRateCode.discountPercent}%</strong></span>
                          </div>
                          <input
                            type="range"
                            min="0"
                            max="75"
                            step="5"
                            value={editingRateCode.discountPercent}
                            onChange={(e) =>
                              setEditingRateCode({ ...editingRateCode, discountPercent: Number(e.target.value) })
                            }
                            className="w-full accent-amber-500 cursor-pointer h-2 bg-secondary rounded-lg"
                          />

                          <div className="flex justify-end gap-2 pt-1">
                            <button
                              type="button"
                              onClick={() => setEditingRateCode(null)}
                              className="px-3 py-1 bg-secondary hover:bg-secondary/80 text-foreground font-bold text-xs rounded-lg cursor-pointer"
                            >
                              Hủy
                            </button>
                            <button
                              type="button"
                              onClick={() => handleUpdateCodeRates(c.code, editingRateCode.discountPercent)}
                              className="px-4 py-1 bg-amber-500 hover:bg-amber-600 text-white font-extrabold text-xs rounded-lg transition-colors cursor-pointer"
                            >
                              Lưu Tỷ Lệ Mới
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Section 2: Lịch Sử Đơn Hàng & Hoa Hồng */}
          <div className="bg-card rounded-3xl p-6 border border-border shadow-sm">
            <h3 className="text-lg font-black text-foreground mb-4 flex items-center gap-2">
              <TrendingUp size={18} className="text-amber-500" /> Lịch Sử Giới Thiệu ({transactions.length})
            </h3>

            {transactions.length === 0 ? (
              <div className="p-8 text-center bg-secondary/30 rounded-2xl border border-dashed border-border">
                <p className="text-sm font-bold text-muted-foreground">Chưa có giao dịch phát sinh từ mã của bạn.</p>
                <p className="text-xs text-muted-foreground mt-1">Hãy chia sẻ mã hoặc link giới thiệu cho học sinh ngay nhé!</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-border text-xs text-muted-foreground uppercase font-black tracking-wider">
                      <th className="pb-3 px-2">Học sinh</th>
                      <th className="pb-3 px-2">Mã dùng</th>
                      <th className="pb-3 px-2">Giá học sinh trả</th>
                      <th className="pb-3 px-2">Hoa hồng nhận</th>
                      <th className="pb-3 px-2">Trạng thái</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/60">
                    {transactions.map((tx) => (
                      <tr key={tx.id || tx.orderCode} className="hover:bg-secondary/20 transition-colors">
                        <td className="py-3 px-2 font-semibold text-foreground">
                          {maskEmail(tx.email)}
                        </td>
                        <td className="py-3 px-2">
                          <span className="px-2 py-0.5 text-xs font-black bg-amber-500/10 text-amber-600 dark:text-amber-400 rounded-md">
                            {tx.affiliateCode || 'N/A'}
                          </span>
                        </td>
                        <td className="py-3 px-2 font-bold text-foreground">
                          {(tx.amount || 0).toLocaleString('vi-VN')}đ
                        </td>
                        <td className="py-3 px-2 font-black text-emerald-500">
                          +{(tx.commissionAmount || 0).toLocaleString('vi-VN')}đ
                        </td>
                        <td className="py-3 px-2">
                          {tx.status === 'completed' ? (
                            <span className="px-2 py-0.5 text-[11px] font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-md flex items-center gap-1 w-fit">
                              <CheckCircle2 size={12} /> Thành công
                            </span>
                          ) : (
                            <span className="px-2 py-0.5 text-[11px] font-bold bg-amber-500/10 text-amber-600 dark:text-amber-400 rounded-md flex items-center gap-1 w-fit">
                              <Clock size={12} /> Chờ thanh toán
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>

        {/* Cột phải (1/3): Cấu hình Tài Khoản Ngân Hàng & Rút Tiền */}
        <div className="space-y-6">
          <div className="bg-card rounded-3xl p-6 border border-border shadow-sm">
            <h3 className="text-lg font-black text-foreground mb-4 flex items-center gap-2">
              <Building size={18} className="text-amber-500" /> Tài Khoản Ngân Hàng
            </h3>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-muted-foreground mb-1">Ngân hàng</label>
                <select
                  value={bankName}
                  onChange={(e) => setBankName(e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-background border border-border rounded-xl font-semibold focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  {VIETNAM_BANKS.map((b) => (
                    <option key={b} value={b}>{b}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-muted-foreground mb-1">Số tài khoản</label>
                <input
                  type="text"
                  value={accountNumber}
                  onChange={(e) => setAccountNumber(e.target.value)}
                  placeholder="Nhập số tài khoản..."
                  className="w-full px-3 py-2 text-sm bg-background border border-border rounded-xl font-bold tracking-wider focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-muted-foreground mb-1">Tên chủ tài khoản (Viết hoa)</label>
                <input
                  type="text"
                  value={accountHolder}
                  onChange={(e) => setAccountHolder(e.target.value.toUpperCase())}
                  placeholder="VD: NGUYEN VAN A"
                  className="w-full px-3 py-2 text-sm bg-background border border-border rounded-xl font-bold uppercase tracking-wider focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <button
                onClick={() => setIsPayoutModalOpen(true)}
                disabled={(wallet?.balance || 0) < 100000}
                className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white font-extrabold text-xs rounded-xl shadow-sm transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <ArrowUpRight size={16} /> Gửi Yêu Cầu Rút Tiền
              </button>
            </div>
          </div>

          {/* Lịch sử yêu cầu rút tiền */}
          <div className="bg-card rounded-3xl p-6 border border-border shadow-sm">
            <h4 className="text-sm font-black text-foreground mb-3 flex items-center gap-2">
              <Clock size={16} className="text-amber-500" /> Lịch Sử Rút Tiền ({payouts.length})
            </h4>

            {payouts.length === 0 ? (
              <p className="text-xs text-muted-foreground font-semibold">Chưa phát sinh yêu cầu rút tiền nào.</p>
            ) : (
              <div className="space-y-3">
                {payouts.map((p) => (
                  <div key={p.id || p.createdAt} className="p-3 bg-secondary/30 rounded-xl border border-border text-xs flex justify-between items-center">
                    <div>
                      <span className="font-black text-foreground block">
                        {(p.amount || 0).toLocaleString('vi-VN')}đ
                      </span>
                      <span className="text-[10px] text-muted-foreground">
                        {p.bankAccount?.bankName} - {p.bankAccount?.accountNumber}
                      </span>
                    </div>
                    <div>
                      {p.status === 'approved' ? (
                        <span className="px-2 py-0.5 font-bold bg-emerald-500/10 text-emerald-600 rounded-md">
                          Đã thanh toán
                        </span>
                      ) : (
                        <span className="px-2 py-0.5 font-bold bg-amber-500/10 text-amber-600 rounded-md">
                          Chờ duyệt
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modal Yêu Cầu Rút Tiền */}
      {isPayoutModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-card rounded-3xl p-6 border border-border shadow-2xl max-w-md w-full animate-in fade-in zoom-in-95">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-black text-foreground flex items-center gap-2">
                <Wallet className="text-emerald-500" size={20} /> Yêu Cầu Rút Hoa Hồng
              </h3>
              <button
                onClick={() => setIsPayoutModalOpen(false)}
                className="text-muted-foreground hover:text-foreground font-bold text-sm cursor-pointer"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSaveBankAndRequestPayout} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-muted-foreground mb-1">Số dư khả dụng</label>
                <div className="text-xl font-black text-emerald-500">
                  {(wallet?.balance || 0).toLocaleString('vi-VN')}đ
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-muted-foreground mb-1">Số tiền muốn rút (VNĐ)</label>
                <input
                  type="number"
                  step="50000"
                  min="100000"
                  max={wallet?.balance || 0}
                  value={payoutAmountInput}
                  onChange={(e) => setPayoutAmountInput(e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-background border border-border rounded-xl font-black text-foreground focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  required
                />
              </div>

              <div className="p-3 bg-secondary/30 rounded-xl space-y-2 border border-border">
                <div className="text-xs font-bold text-foreground flex items-center gap-1">
                  <Building size={14} className="text-amber-500" /> Tài Khoản Nhận Tiền
                </div>
                <div className="text-xs text-muted-foreground font-semibold">
                  {bankName} - {accountNumber || 'Chưa nhập STK'}
                </div>
                <div className="text-xs font-bold text-foreground uppercase">
                  {accountHolder || 'Chưa nhập chủ TK'}
                </div>
              </div>

              {payoutError && (
                <p className="text-xs font-bold text-rose-500">{payoutError}</p>
              )}

              <div className="flex gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsPayoutModalOpen(false)}
                  className="flex-1 py-2.5 bg-secondary hover:bg-secondary/80 text-foreground font-bold text-xs rounded-xl transition-colors cursor-pointer"
                >
                  Hủy
                </button>
                <button
                  type="submit"
                  disabled={submittingPayout}
                  className="flex-1 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-xs rounded-xl shadow-md transition-all cursor-pointer flex items-center justify-center gap-1.5"
                >
                  {submittingPayout ? <Loader2 size={14} className="animate-spin" /> : 'Xác Nhận Rút'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AffiliateDashboard;
