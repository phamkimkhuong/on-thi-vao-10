import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../services/firebase';
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup
} from 'firebase/auth';
import { useAppStore } from '../../services/store';
import { progressService } from '../../services/progressService';
import { Button } from '../../components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/card';
import { GraduationCap, Mail, Lock, User, ArrowRight, AlertCircle, Loader } from 'lucide-react';

export const AuthPage: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAppStore();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) {
      navigate('/dashboard', { replace: true });
    }
  }, [user, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (isLogin) {
        // Đăng nhập
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const loggedUser = userCredential.user;
        
        // Đồng bộ dữ liệu cục bộ lên đám mây (Guest -> Member)
        await progressService.syncLocalDataToFirestore(loggedUser.uid);
      } else {
        // Đăng ký
        if (!name.trim()) {
          throw new Error('Vui lòng nhập họ và tên của bạn.');
        }
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const loggedUser = userCredential.user;
        
        // Cập nhật tên hiển thị
        await updateProfile(loggedUser, { displayName: name });
        
        // Khởi tạo và đồng bộ dữ liệu cục bộ lên Firestore
        await progressService.syncLocalDataToFirestore(loggedUser.uid);
      }
      
      // Chuyển về màn hình Dashboard sau khi đăng nhập thành công
      navigate('/dashboard');
    } catch (err: any) {
      console.error(err);
      let friendlyMessage = 'Đã có lỗi xảy ra. Vui lòng thử lại.';
      
      if (err.code === 'auth/wrong-password') {
        friendlyMessage = 'Mật khẩu không chính xác. Vui lòng kiểm tra lại.';
      } else if (err.code === 'auth/user-not-found') {
        friendlyMessage = 'Email này chưa được đăng ký tài khoản ôn thi.';
      } else if (err.code === 'auth/email-already-in-use') {
        friendlyMessage = 'Email này đã được sử dụng cho một tài khoản khác.';
      } else if (err.code === 'auth/weak-password') {
        friendlyMessage = 'Mật khẩu quá yếu. Vui lòng đặt mật khẩu tối thiểu 6 ký tự.';
      } else if (err.code === 'auth/invalid-email') {
        friendlyMessage = 'Định dạng Email không hợp lệ.';
      } else if (err.message) {
        friendlyMessage = err.message;
      }
      
      setError(friendlyMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setError('');
    setLoading(true);
    try {
      const provider = new GoogleAuthProvider();
      const userCredential = await signInWithPopup(auth, provider);
      const loggedUser = userCredential.user;
      
      // Đồng bộ dữ liệu cục bộ lên đám mây (Guest -> Member)
      await progressService.syncLocalDataToFirestore(loggedUser.uid);
      
      // Chuyển về màn hình Dashboard sau khi đăng nhập thành công
      navigate('/dashboard');
    } catch (err: any) {
      console.error(err);
      if (err.code !== 'auth/popup-closed-by-user') {
        setError(err.message || 'Lỗi đăng nhập bằng Google.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-radial from-slate-50 to-indigo-50/50 dark:from-slate-950 dark:to-slate-900/50 p-4">
      {/* Background blobs for a modern glass effect */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="w-full max-w-md z-10 space-y-6">
        <div className="text-center space-y-2">
          <div className="inline-flex p-3 rounded-2xl bg-indigo-500/10 text-primary animate-bounce">
            <GraduationCap size={36} className="text-primary" />
          </div>
          <h1 className="text-3xl font-black tracking-tight text-foreground bg-gradient-to-r from-primary to-indigo-600 bg-clip-text text-transparent">
            Chinh Phục Lớp 10
          </h1>
          <p className="text-xs text-muted-foreground font-semibold">
            Hệ thống ôn luyện thông minh môn Toán & Tiếng Anh vào 10
          </p>
        </div>

        <Card className="backdrop-blur-md bg-card/70 border border-border/40 shadow-xl">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg font-black text-center text-foreground">
              {isLogin ? 'Đăng nhập học tập' : 'Tạo tài khoản mới'}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {error && (
              <div className="p-3 bg-rose-500/10 border border-rose-500/20 text-rose-700 dark:text-rose-400 rounded-xl text-xs font-bold flex items-center gap-2 animate-shake">
                <AlertCircle size={16} className="shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLogin && (
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-muted-foreground block">Họ và tên học sinh:</label>
                  <div className="relative">
                    <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground/60" />
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Nguyễn Văn A"
                      className="w-full bg-slate-50/50 dark:bg-slate-900/30 border border-border/80 rounded-xl pl-10 pr-4 py-2.5 text-xs text-foreground font-semibold focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50 placeholder:font-normal"
                    />
                  </div>
                </div>
              )}

              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-muted-foreground block">Email đăng nhập:</label>
                <div className="relative">
                  <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground/60" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="hocsinh@gmail.com"
                    className="w-full bg-slate-50/50 dark:bg-slate-900/30 border border-border/80 rounded-xl pl-10 pr-4 py-2.5 text-xs text-foreground font-semibold focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50 placeholder:font-normal"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-muted-foreground block">Mật khẩu:</label>
                <div className="relative">
                  <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground/60" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full bg-slate-50/50 dark:bg-slate-900/30 border border-border/80 rounded-xl pl-10 pr-4 py-2.5 text-xs text-foreground font-semibold focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50 placeholder:font-normal"
                  />
                </div>
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full font-bold py-2.5 text-xs active:scale-[0.98] mt-2 flex items-center justify-center gap-1.5"
              >
                {loading ? (
                  <>
                    <Loader size={14} className="animate-spin" />
                    <span>Đang xử lý...</span>
                  </>
                ) : (
                  <>
                    <span>{isLogin ? 'Đăng nhập ngay' : 'Đăng ký học tập'}</span>
                    <ArrowRight size={14} />
                  </>
                )}
              </Button>
            </form>

            <div className="relative my-4 flex items-center justify-center">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border/40"></div>
              </div>
              <span className="relative px-3 bg-card text-[10px] font-extrabold text-muted-foreground/60 uppercase">Hoặc</span>
            </div>

            <div className="flex flex-col gap-2.5">
              <button
                type="button"
                disabled={loading}
                onClick={handleGoogleSignIn}
                className="w-full flex items-center justify-center py-2.5 bg-card hover:bg-slate-50 dark:hover:bg-slate-900 border border-border/80 rounded-xl text-xs font-bold text-foreground transition-all duration-150 active:scale-[0.98] shadow-sm disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
              >
                <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.85z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.85c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
                <span>Tiếp tục với Google</span>
              </button>

              <button
                type="button"
                onClick={() => navigate('/dashboard')}
                className="w-full text-center py-2 bg-secondary/50 hover:bg-secondary border border-border/30 rounded-xl text-xs font-bold text-foreground transition-all duration-150 active:scale-[0.98] cursor-pointer"
              >
                Tiếp tục học ở chế độ Khách (Guest)
              </button>

              <button
                type="button"
                onClick={() => {
                  setError('');
                  setIsLogin(!isLogin);
                }}
                className="text-xs font-bold text-primary hover:underline text-center cursor-pointer block mt-1"
              >
                {isLogin ? 'Chưa có tài khoản? Đăng ký ngay' : 'Đã có tài khoản? Quay về Đăng nhập'}
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
