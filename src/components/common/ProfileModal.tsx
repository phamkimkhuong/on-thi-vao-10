import React, { useState, useEffect, useRef } from 'react';
import { X, Calendar, MapPin, User, Save, LogOut, Loader } from 'lucide-react';
import { doc, updateDoc } from 'firebase/firestore';
import { updateProfile } from 'firebase/auth';
import { db } from '../../services/firebase';
import { useAppStore } from '../../services/store';
import { VIETNAM_PROVINCES } from '../../constants/provinces';
import { useNavigate } from 'react-router-dom';
import { ConfirmationModal } from './ConfirmationModal';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProfileModal: React.FC<ProfileModalProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const { user, userData, logout } = useAppStore();

  const [name, setName] = useState('');
  const [birthYear, setBirthYear] = useState('');
  const [gender, setGender] = useState('');
  const [province, setProvince] = useState('');
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const titleId = React.useId();
  const descriptionId = React.useId();
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isOpen) {
      setName(userData?.name || user?.displayName || '');
      setBirthYear(userData?.birthYear ? String(userData.birthYear) : '');
      setGender(userData?.gender || '');
      setProvince(userData?.province || '');
      setError(null);
      setSuccess(false);
      closeButtonRef.current?.focus();
    }
  }, [isOpen, userData, user]);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen || !user) return null;

  const birthYears = Array.from({ length: 22 }, (_, i) => String(1995 + i)); // 1995 to 2016

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Vui lòng nhập họ tên hoặc nickname.');
      return;
    }

    setIsSaving(true);
    setError(null);
    setSuccess(false);

    try {
      // 1. Cập nhật thông tin auth profile (displayName)
      await updateProfile(user, { displayName: name.trim() });

      // 2. Cập nhật Firestore document
      const userDocRef = doc(db, 'users', user.uid);
      await updateDoc(userDocRef, {
        name: name.trim(),
        birthYear: birthYear ? parseInt(birthYear, 10) : null,
        gender: gender || null,
        province: province || null,
        updatedAt: new Date().toISOString()
      });

      setSuccess(true);
      setTimeout(() => {
        onClose();
      }, 1000);
    } catch (err: any) {
      console.error('Lỗi khi cập nhật hồ sơ:', err);
      setError(err.message || 'Có lỗi xảy ra khi lưu thông tin.');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-slate-950/50 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-fade-in">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        className="bg-card/95 border border-border/50 rounded-3xl w-full max-w-md overflow-hidden shadow-2xl animate-scale-in p-6 space-y-6 relative max-h-[90vh] flex flex-col"
      >
        {/* Close Button */}
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label="Đóng cài đặt tài khoản"
          className="absolute top-3 right-3 flex h-10 w-10 items-center justify-center rounded-xl hover:bg-secondary text-muted-foreground transition-all cursor-pointer active:scale-95 focus-visible:outline-none"
        >
          <X size={15} />
        </button>

        {/* Header */}
        <div className="text-center space-y-1">
          <h3 id={titleId} className="font-black text-base text-foreground leading-snug">
            Cài đặt tài khoản học sinh
          </h3>
          <p id={descriptionId} className="text-xs text-muted-foreground font-semibold">
            Cập nhật thông tin để tối ưu hóa lộ trình & tham gia Bảng xếp hạng.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSave} className="space-y-4 flex-1 overflow-y-auto pr-1">
          {error && (
            <div className="p-3 bg-rose-500/10 border border-rose-500/20 text-rose-500 text-xs font-semibold rounded-xl text-center">
              {error}
            </div>
          )}

          {success && (
            <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold rounded-xl text-center">
              ✓ Lưu thông tin thành công!
            </div>
          )}

          {/* Name input */}
          <div className="space-y-1.5 text-left">
            <label className="text-[10px] font-black text-muted-foreground uppercase tracking-widest pl-1 block">
              Họ tên hoặc Nickname
            </label>
            <div className="relative">
              <User className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nhập tên của bạn hoặc nickname tự chọn..."
                className="w-full pl-10 pr-4 py-2.5 bg-secondary/50 border border-border/40 rounded-xl text-xs font-semibold focus:outline-none focus:border-primary/60 transition-colors text-foreground"
                maxLength={40}
              />
            </div>
          </div>

          {/* Birth Year dropdown */}
          <div className="space-y-1.5 text-left">
            <label className="text-[10px] font-black text-muted-foreground uppercase tracking-widest pl-1 block">
              Năm sinh
            </label>
            <div className="relative">
              <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <select
                value={birthYear}
                onChange={(e) => setBirthYear(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-secondary/50 border border-border/40 rounded-xl text-xs font-semibold focus:outline-none focus:border-primary/60 transition-colors text-foreground appearance-none cursor-pointer"
              >
                <option value="">Chọn năm sinh...</option>
                {birthYears.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Gender dropdown */}
          <div className="space-y-1.5 text-left">
            <label className="text-[10px] font-black text-muted-foreground uppercase tracking-widest pl-1 block">
              Giới tính
            </label>
            <div className="relative">
              <User className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-secondary/50 border border-border/40 rounded-xl text-xs font-semibold focus:outline-none focus:border-primary/60 transition-colors text-foreground appearance-none cursor-pointer"
              >
                <option value="">Chọn giới tính...</option>
                <option value="nam">Nam</option>
                <option value="nữ">Nữ</option>
                <option value="khác">Khác</option>
              </select>
            </div>
          </div>

          {/* Province dropdown */}
          <div className="space-y-1.5 text-left">
            <label className="text-[10px] font-black text-muted-foreground uppercase tracking-widest pl-1 block">
              Tỉnh / Thành phố
            </label>
            <div className="relative">
              <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <select
                value={province}
                onChange={(e) => setProvince(e.target.value)}
                className="w-full pl-10 pr-10 py-2.5 bg-secondary/50 border border-border/40 rounded-xl text-xs font-semibold focus:outline-none focus:border-primary/60 transition-colors text-foreground appearance-none cursor-pointer"
              >
                <option value="">Chọn tỉnh / thành phố...</option>
                {VIETNAM_PROVINCES.map((prov) => (
                  <option key={prov} value={prov}>
                    {prov}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Email (Readonly) */}
          <div className="space-y-1.5 text-left">
            <label className="text-[10px] font-black text-muted-foreground/60 uppercase tracking-widest pl-1 block select-none">
              Địa chỉ Email
            </label>
            <input
              type="text"
              value={user.email || ''}
              readOnly
              className="w-full px-4 py-2.5 bg-secondary/30 border border-border/10 rounded-xl text-xs font-medium text-muted-foreground select-all outline-none"
            />
          </div>

          {/* Buttons */}
          <div className="pt-4 space-y-2">
            <button
              type="submit"
              disabled={isSaving || success}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-primary hover:bg-primary/95 disabled:bg-primary/60 text-primary-foreground font-black text-xs transition-all shadow-md hover:shadow-lg active:scale-97 cursor-pointer"
            >
              {isSaving ? (
                <Loader className="animate-spin w-4 h-4" />
              ) : (
                <Save className="w-4 h-4" />
              )}
              {isSaving ? 'Đang lưu...' : 'Lưu thay đổi'}
            </button>

            <button
              type="button"
              onClick={() => setShowLogoutConfirm(true)}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-2xl border border-rose-500/20 hover:bg-rose-500/5 text-rose-500 font-bold text-xs transition-all duration-300 active:scale-97 cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" />
              Đăng xuất tài khoản
            </button>
          </div>
        </form>

        <ConfirmationModal
          isOpen={showLogoutConfirm}
          title="Xác nhận đăng xuất"
          description="Bạn có chắc chắn muốn đăng xuất tài khoản khỏi hệ thống không?"
          confirmLabel="Đăng xuất"
          cancelLabel="Hủy bỏ"
          variant="danger"
          onConfirm={() => {
            setShowLogoutConfirm(false);
            logout();
            onClose();
            navigate('/dashboard');
          }}
          onCancel={() => setShowLogoutConfirm(false)}
        />
      </div>
    </div>
  );
};
export default ProfileModal;
