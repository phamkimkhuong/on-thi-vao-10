import { db } from './firebase';
import { 
  collection, 
  query, 
  getDocs, 
  getDoc, 
  doc, 
  setDoc, 
  deleteDoc, 
  orderBy, 
  limit, 
  startAfter,
  where,
  getCountFromServer 
} from 'firebase/firestore';
import { UserAttempt, SimulatedStudent } from '../types';
import { calculateMasteryScore } from '../utils/theme';
import { logger } from '../utils/logger';

export const teacherService = {
  /**
   * Lấy danh sách học sinh thực tế hỗ trợ phân trang Cursor-based
   */
  async getRealStudents(
    excludedUserIds: string[] = [],
    limitCount?: number,
    startAfterActiveAt?: string
  ): Promise<{ students: SimulatedStudent[]; lastActiveAt?: string; hasMore: boolean }> {
    try {
      const usersRef = collection(db, 'users');
      let q = query(usersRef, orderBy('lastActiveAt', 'desc'));
      
      if (startAfterActiveAt) {
        q = query(q, startAfter(startAfterActiveAt));
      }
      
      if (limitCount !== undefined) {
        q = query(q, limit(limitCount + 1));
      }
      
      const querySnapshot = await getDocs(q);
      logger.dbRead('Tải danh sách học sinh (users)', querySnapshot.size || 1);
      let students: SimulatedStudent[] = [];
      const excludedIds = new Set(excludedUserIds);
      
      querySnapshot.forEach(docRef => {
        const data = docRef.data();
        if (!excludedIds.has(docRef.id)) {
          students.push({
            id: docRef.id,
            name: data.name || 'Học sinh mới',
            avatar: data.avatar || `https://api.dicebear.com/7.x/adventurer/svg?seed=${docRef.id}`,
            email: data.email || '',
            isPremium: data.isPremium === true || data.role === 'premium',
            completedCount: data.completedCount ?? 0,
            lastActiveAt: data.lastActiveAt || '',
            masteryLevels: data.masteryLevels || {},
            completedLessons: data.completedLessons || [],
            stats: data.stats || null
          } as any);
        }
      });
      
      let hasMore = false;
      if (limitCount !== undefined && students.length > limitCount) {
        hasMore = true;
        students = students.slice(0, limitCount);
      }
      
      const lastStudent = students[students.length - 1];
      const lastActiveAtCursor = lastStudent ? (lastStudent as any).lastActiveAt : undefined;
      
      return {
        students,
        lastActiveAt: lastActiveAtCursor,
        hasMore
      };
    } catch (e) {
      logger.error('Tải danh sách học sinh', e);
      return { students: [], hasMore: false };
    }
  },

  /**
   * Lấy danh sách bài làm tự luận cần chấm của học sinh
   */
  async getRealPendingManualAttempts(limitCount?: number): Promise<Array<{ student: SimulatedStudent; attempt: UserAttempt }>> {
    try {
      const q = collection(db, 'manual_attempts');
      let queryRef = query(q);
      
      if (limitCount !== undefined) {
        queryRef = query(q, limit(limitCount));
      }
      
      const pendingSnapshot = await getDocs(queryRef);
      logger.dbRead('Tải bài tự luận chờ chấm (manual_attempts)', pendingSnapshot.size || 1);
      const pending: Array<{ student: SimulatedStudent; attempt: UserAttempt }> = [];
      
      pendingSnapshot.forEach(docRef => {
        const data = docRef.data() as any;
        const attempt = data as UserAttempt;
        
        // Trích xuất thông tin học sinh được phi chuẩn hóa nhúng kèm
        const student: SimulatedStudent = {
          id: attempt.userId,
          name: data.studentName || 'Học sinh mới',
          avatar: data.studentAvatar || `https://api.dicebear.com/7.x/adventurer/svg?seed=${attempt.userId}`,
          email: data.studentEmail || '',
          isPremium: data.isPremium === true || data.role === 'premium',
          completedCount: data.completedCount ?? 0,
          masteryLevels: data.masteryLevels || {},
          completedLessons: data.completedLessons || [],
          stats: data.stats || null
        } as any;
        
        pending.push({ student, attempt });
      });
      
      return pending.sort((a, b) => new Date(b.attempt.createdAt).getTime() - new Date(a.attempt.createdAt).getTime());
    } catch (e) {
      logger.error('Tải bài tự luận chờ chấm', e);
      return [];
    }
  },

  /**
   * Giáo viên chấm điểm bài tự luận của học sinh
   */
  async gradeRealAttempt(studentId: string, attempt: UserAttempt, isCorrect: boolean, feedback?: string): Promise<void> {
    try {
      const attemptId = attempt.id;
      const attemptRef = doc(db, `users/${studentId}/attempts`, attemptId);
      const syncedAt = new Date().toISOString();
      
      const reviewPatch = {
        isCorrect,
        gradingMode: 'auto' as const,
        teacherFeedback: feedback,
        syncedAt
      };

      const updatedAttempt = {
        ...attempt,
        ...reviewPatch
      };
      
      await setDoc(attemptRef, reviewPatch, { merge: true });
      logger.dbWrite('Cập nhật trạng thái bài làm (attempts)', 1);

      try {
        await deleteDoc(doc(db, 'manual_attempts', attemptId));
        logger.dbWrite('Xóa bài làm khỏi hàng đợi (manual_attempts)', 1);
      } catch (err) {
        logger.error('Xóa bài làm khỏi hàng đợi', err);
      }

      // Chỉ tải attempts của CHUYÊN ĐỀ NÀY để recalculate mastery (thay vì tải toàn bộ lịch sử)
      const typeQuery = query(
        collection(db, `users/${studentId}/attempts`),
        where('questionTypeId', '==', attempt.questionTypeId)
      );
      const typeSnapshot = await getDocs(typeQuery);
      logger.dbRead(`Tải attempts chuyên đề ${attempt.questionTypeId} để tính mastery`, typeSnapshot.size || 1);

      const typeAttempts: UserAttempt[] = [];
      typeSnapshot.forEach(docRef => {
        const data = docRef.data() as UserAttempt;
        // Nếu attempt vừa chấm đã có trong query, dùng phiên bản đã cập nhật
        if (data.id === attemptId) {
          typeAttempts.push(updatedAttempt);
        } else {
          typeAttempts.push(data);
        }
      });
      // Nếu attempt vừa chấm chưa có trong query (edge case), thêm vào
      if (!typeAttempts.some(a => a.id === attemptId)) {
        typeAttempts.push(updatedAttempt);
      }

      const newScore = calculateMasteryScore(typeAttempts);

      // Cập nhật progress và completedCount trực tiếp trên doc cha users/{studentId}
      try {
        const userRef = doc(db, 'users', studentId);
        const userSnap = await getDoc(userRef);
        logger.dbRead('Lọc lấy tiến độ cũ (users/{studentId})', 1);
        const userData = userSnap.exists() ? userSnap.data() : {};
        
        const masteryLevels = userData.masteryLevels || {};
        const completedLessons = userData.completedLessons || [];
        
        masteryLevels[attempt.questionTypeId] = newScore;
        
        const isCompleted = newScore >= 60;
        const lessonIndex = completedLessons.indexOf(attempt.questionTypeId);
        
        if (isCompleted) {
          if (lessonIndex === -1) {
            completedLessons.push(attempt.questionTypeId);
          }
        } else {
          if (lessonIndex > -1) {
            completedLessons.splice(lessonIndex, 1);
          }
        }
        
        // Cập nhật stats incremental từ dữ liệu trên doc cha (thay vì recalculate toàn bộ)
        const existingStats = userData.stats || {};
        const stats = {
          ...existingStats,
          lastActiveAt: syncedAt
        };

        await setDoc(userRef, {
          masteryLevels,
          completedLessons,
          completedCount: completedLessons.length,
          stats,
          lastActiveAt: syncedAt
        }, { merge: true });
        logger.dbWrite('Cập nhật tiến độ & stats tổng hợp (users/{studentId})', 1);
      } catch (err) {
        logger.error('Cập nhật tiến độ học sinh sau khi chấm', err);
      }

      // Cập nhật Sổ lỗi sai trên Firestore thông qua progressService
      const mistakeId = `mistake-${attempt.questionId}`;
      const mistakeRef = doc(db, `users/${studentId}/mistakes`, mistakeId);

      if (!isCorrect) {
        await setDoc(mistakeRef, {
          id: mistakeId,
          userId: studentId,
          questionId: attempt.questionId,
          questionTypeId: attempt.questionTypeId,
          wrongAnswer: attempt.userAnswer,
          reviewStatus: 'new',
          reviewCount: 1,
          lastAttemptedAt: attempt.createdAt,
          nextReviewAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
          teacherFeedback: feedback,
          syncedAt
        }, { merge: true });
        logger.dbWrite('Cập nhật Sổ lỗi sai (mistakes) - Báo lỗi mới', 1);
      } else {
        const existingMistake = await getDoc(mistakeRef);
        logger.dbRead('Đọc kiểm tra lỗi cũ (mistakes)', 1);
        if (existingMistake.exists()) {
          await setDoc(mistakeRef, {
            reviewStatus: 'fixed',
            nextReviewAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
            syncedAt
          }, { merge: true });
          logger.dbWrite('Cập nhật Sổ lỗi sai (mistakes) - Đánh dấu Đã sửa', 1);
        }
      }
    } catch (e) {
      logger.error('Chấm điểm bài tự luận', e);
    }
  },

  /**
   * Đếm số bài làm tự luận đang chờ chấm bằng API getCountFromServer (chỉ tốn 1 Read)
   */
  async getRealPendingCount(): Promise<number> {
    try {
      const q = collection(db, 'manual_attempts');
      const snapshot = await getCountFromServer(q);
      logger.dbRead('Đếm bài chờ chấm (getCountFromServer)', 1);
      return snapshot.data().count;
    } catch (e) {
      logger.error('Đếm bài chờ chấm', e);
      return 0;
    }
  }
};
