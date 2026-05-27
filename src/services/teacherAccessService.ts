import type { User } from 'firebase/auth';
import { doc, getDocFromServer } from 'firebase/firestore';
import { db } from './firebase';

const BOOTSTRAP_TEACHER_EMAIL = 'phamkhuong436@gmail.com';
const BOOTSTRAP_TEACHER_UIDS = new Set([
  'hzSKwkaroTR1LKcXp09E5wL7F6f1'
]);

const normalizeEmail = (email?: string | null): string => email?.trim().toLowerCase() ?? '';

export const teacherAccessService = {
  isBootstrapTeacherUid(user: User | null): boolean {
    return Boolean(user?.uid && BOOTSTRAP_TEACHER_UIDS.has(user.uid));
  },

  isBootstrapTeacherEmail(user: User | null): boolean {
    return normalizeEmail(user?.email) === BOOTSTRAP_TEACHER_EMAIL;
  },

  isBootstrapTeacher(user: User | null): boolean {
    return this.isBootstrapTeacherUid(user) || this.isBootstrapTeacherEmail(user);
  },

  async isTeacher(user: User | null): Promise<boolean> {
    if (!user) return false;
    // Cho phép bootstrap teacher bằng cả UID lẫn email (phòng trường hợp UID thay đổi khi đổi provider)
    if (this.isBootstrapTeacher(user)) {
      if (!this.isBootstrapTeacherUid(user)) {
        console.warn(
          `[TeacherAccess] Bootstrap teacher email matched nhưng UID không khớp. UID hiện tại: "${user.uid}". ` +
          `Hãy cập nhật BOOTSTRAP_TEACHER_UIDS và firestore.rules/storage.rules.`
        );
      }
      return true;
    }

    try {
      const teacherRef = doc(db, 'teachers', user.uid);
      const teacherSnap = await getDocFromServer(teacherRef);
      const data = teacherSnap.data();

      return teacherSnap.exists()
        && data?.active === true
        && data?.role === 'teacher';
    } catch (e) {
      console.error('Lỗi khi kiểm tra quyền giáo viên:', e);
      return false;
    }
  }
};
