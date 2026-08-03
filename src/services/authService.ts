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
      const errorCode = err?.code || '';
      const errorMessage = err?.message || '';

      // Bỏ qua lỗi người dùng hoặc trình duyệt đóng / hủy popup / ẩn tab đăng nhập / đóng database
      if (
        errorCode === 'auth/popup-closed-by-user' ||
        errorCode === 'auth/cancelled-popup-request' ||
        errorCode === 'auth/user-cancelled' ||
        errorMessage.includes('Database is closing') ||
        errorMessage.includes('popup-closed-by-user') ||
        errorMessage.includes('cancelled-popup-request')
      ) {
        return;
      }

      if (errorCode === 'auth/popup-blocked') {
        throw new Error('Trình duyệt đã chặn cửa sổ đăng nhập. Vui lòng cho phép mở popup và thử lại.');
      }

      throw new Error('Đăng nhập bằng Google không thành công. Vui lòng thử lại.');
    }
  }
};
