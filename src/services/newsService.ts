import { db } from './firebase';
import {
  collection,
  getDocs,
  addDoc,
  query,
  orderBy,
  limit,
  serverTimestamp
} from 'firebase/firestore';
import { AnnouncementPost, AnnouncementCategory } from '../types/newsTypes';
import { notificationService } from './notificationService';
import { logger } from '../utils/logger';

class NewsService {
  /**
   * Tải danh sách bài viết thông báo tin tức
   */
  public async fetchPosts(_userId?: string, userGrade?: string): Promise<AnnouncementPost[]> {
    try {
      const postsRef = collection(db, 'announcement_posts');
      const q = query(postsRef, orderBy('createdAt', 'desc'), limit(30));
      const snap = await getDocs(q);

      const posts: AnnouncementPost[] = [];

      snap.forEach((docSnap) => {
        const d = docSnap.data();
        // Lọc theo khối lớp nếu có chỉ định
        if (!d.targetGrade || d.targetGrade === 'all' || (userGrade && d.targetGrade === userGrade)) {
          posts.push({
            id: docSnap.id,
            title: d.title || 'Thông báo mới',
            content: d.content || '',
            authorName: d.authorName || 'OnThiVao10 Official',
            authorBadge: d.authorBadge || 'Official',
            category: (d.category as AnnouncementCategory) || 'general',
            targetGrade: d.targetGrade || 'all',
            createdAt: d.createdAt?.toDate ? d.createdAt.toDate().toISOString() : d.createdAt || new Date().toISOString(),
          });
        }
      });

      return posts;
    } catch (err) {
      logger.error('Lỗi khi tải bài viết Bảng tin:', err);
      return [];
    }
  }

  /**
   * Tạo bài viết thông báo mới (Admin / Giáo viên)
   * Tự động gửi 1 thông báo lên Chuông 🔔 dẫn tới bài viết này!
   */
  public async createPost(payload: {
    title: string;
    content: string;
    category: AnnouncementCategory;
    targetGrade?: 'all' | 'grade9' | 'grade10' | 'grade11' | 'grade12';
    authorName?: string;
  }): Promise<string | null> {
    try {
      const postsRef = collection(db, 'announcement_posts');
      const newPostRef = await addDoc(postsRef, {
        title: payload.title.trim(),
        content: payload.content.trim(),
        category: payload.category || 'general',
        targetGrade: payload.targetGrade || 'all',
        authorName: payload.authorName || 'OnThiVao10 Official',
        authorBadge: 'Official',
        createdAt: serverTimestamp(),
      });

      const postId = newPostRef.id;

      // 📢 Tự động tạo 1 thông báo trên Chuông 🔔 dẫn tới trang bài viết này
      await notificationService.sendBroadcastNotification({
        title: `📰 ${payload.title.trim()}`,
        body: payload.content.substring(0, 100).replace(/[#*`_]/g, '') + '...',
        type: payload.category === 'feature' ? 'system' : 'system',
        targetGrade: payload.targetGrade || 'all',
        actionUrl: `/news?id=${postId}`,
        createdByEmail: payload.authorName || 'Ban Biên Tập',
      });

      return postId;
    } catch (err) {
      logger.error('Lỗi khi đăng bài viết mới:', err);
      return null;
    }
  }
}

export const newsService = new NewsService();
