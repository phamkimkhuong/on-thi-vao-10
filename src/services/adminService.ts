import { db } from './firebase';
import { collection, query, orderBy, limit, getDocs, doc, getDoc, getCountFromServer, where } from 'firebase/firestore';
import { logger } from '../utils/logger';

export const adminService = {
  /**
   * Lấy tổng hợp lịch sử sử dụng AI (Tốn đúng 1 Read)
   */
  async getAiSummary(): Promise<any> {
    try {
      const summaryRef = doc(db, 'system_stats', 'ai_summary');
      const docSnap = await getDoc(summaryRef);
      logger.dbRead('Tải tổng hợp thống kê AI (system_stats/ai_summary)', 1);
      if (docSnap.exists()) {
        return docSnap.data();
      }
      return null;
    } catch (e) {
      logger.error('Tải tổng hợp thống kê AI', e);
      return null;
    }
  },
  /**
   * Lấy lịch sử sử dụng AI của học sinh trong 7 ngày gần nhất
   */
  async getAiUsageLogsLast7Days(limitCount = 500): Promise<any[]> {
    try {
      const sevenDaysAgo = new Date();
      sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

      const q = query(
        collection(db, 'ai_usage_logs'),
        where('timestamp', '>=', sevenDaysAgo),
        orderBy('timestamp', 'desc'),
        limit(limitCount)
      );
      const querySnapshot = await getDocs(q);
      logger.dbRead('Tải nhật ký AI 7 ngày qua (ai_usage_logs)', querySnapshot.size || 1);
      const logs: any[] = [];
      querySnapshot.forEach(docSnap => {
        const data = docSnap.data();
        logs.push({
          id: docSnap.id,
          ...data,
          timestamp: data.timestamp ? (data.timestamp.toDate ? data.timestamp.toDate().toISOString() : data.timestamp) : null
        });
      });
      return logs;
    } catch (e) {
      logger.error('Tải nhật ký AI 7 ngày qua', e);
      return [];
    }
  },

  /**
   * Lấy tổng số lượng bản ghi cuộc gọi AI trong 7 ngày gần nhất (Dùng Firestore Aggregation - 1 Read)
   */
  async getTotalAiCallsCount7Days(): Promise<number> {
    try {
      const sevenDaysAgo = new Date();
      sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

      const coll = collection(db, 'ai_usage_logs');
      const q = query(coll, where('timestamp', '>=', sevenDaysAgo));
      const snapshot = await getCountFromServer(q);
      return snapshot.data().count;
    } catch (e) {
      logger.error('Lấy tổng số lượt gọi AI 7 ngày qua', e);
      return 0;
    }
  }
};
