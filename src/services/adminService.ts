import { db } from './firebase';
import { collection, query, orderBy, limit, getDocs, doc, getDoc } from 'firebase/firestore';
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
   * Lấy lịch sử sử dụng AI của học sinh (số tokens, chi phí, câu hỏi)
   */
  async getAiUsageLogs(limitCount = 100): Promise<any[]> {
    try {
      const q = query(
        collection(db, 'ai_usage_logs'),
        orderBy('timestamp', 'desc'),
        limit(limitCount)
      );
      const querySnapshot = await getDocs(q);
      logger.dbRead('Tải nhật ký AI (ai_usage_logs)', querySnapshot.size || 1);
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
      logger.error('Tải nhật ký AI', e);
      return [];
    }
  }
};
