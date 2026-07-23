import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth, logCustomEvent } from './firebase';
import { progressService } from './progressService';
import { teacherAccessService } from './teacherAccessService';

export const authService = {
  /**
   * Đăng nhập nhanh bằng Google và đồng bộ dữ liệu Guest
   */
  signInWithGoogle: async (): Promise<void> => {
    try {
      const provider = new GoogleAuthProvider();
      const userCredential = await signInWithPopup(auth, provider);
      const loggedUser = userCredential.user;

      // Lưu hồ sơ lên Firestore
      await progressService.saveUserProfile(loggedUser);

      // Đồng bộ thông minh dữ liệu Firestore xuống LocalStorage (chỉ áp dụng đối với học sinh)
      const isTeacher = await teacherAccessService.isTeacher(loggedUser);
      if (!isTeacher) {
        await progressService.syncUserData(loggedUser.uid);
      }
      
      logCustomEvent('sign_in', { method: 'google' });
    } catch (err: any) {
      console.error("Lỗi đăng nhập bằng Google:", err);
      // Ném lỗi lên trên để component hiển thị toast hoặc thông báo nếu cần
      if (err.code !== 'auth/popup-closed-by-user') {
        throw new Error(err.message || 'Lỗi đăng nhập bằng Google. Vui lòng thử lại.', { cause: err });
      }
    }
  }
};
