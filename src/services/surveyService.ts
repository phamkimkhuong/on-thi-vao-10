import { doc, setDoc, serverTimestamp, increment, arrayUnion } from 'firebase/firestore';
import { db, auth } from './firebase';
import type { UnifiedSurveyResponse, UserSurveyState } from '../types/surveyTypes';
import { logger } from '../utils/logger';

const STORAGE_KEYS = {
  SURVEY_COMPLETED: 'otv10_survey_completed',
  SURVEY_DATA: 'otv10_survey_data',
  SKIPPED_UNTIL: 'otv10_survey_skipped_until',
};

function sanitizeForFirestore<T>(obj: T): T {
  if (obj === undefined) return null as unknown as T;
  if (obj === null || typeof obj !== 'object') return obj;
  if (Array.isArray(obj)) return obj.map(sanitizeForFirestore) as unknown as T;

  const cleaned: Record<string, any> = {};
  for (const [key, val] of Object.entries(obj)) {
    if (val !== undefined) {
      cleaned[key] = sanitizeForFirestore(val);
    }
  }
  return cleaned as T;
}

class SurveyService {
  /**
   * Lấy trạng thái khảo sát hiện tại của user
   */
  public getSurveyState(): UserSurveyState {
    if (typeof localStorage === 'undefined') {
      return { completed: false };
    }

    const completed = localStorage.getItem(STORAGE_KEYS.SURVEY_COMPLETED) === 'true';
    let data: UnifiedSurveyResponse | undefined;

    const rawData = localStorage.getItem(STORAGE_KEYS.SURVEY_DATA);
    if (rawData) {
      try {
        data = JSON.parse(rawData);
      } catch (e) {
        console.error('Lỗi đọc dữ liệu khảo sát từ LocalStorage:', e);
      }
    }

    return { completed, data };
  }

  /**
   * Kiểm tra xem có nên hiển thị Khảo sát tự động không
   */
  public shouldShowSurvey(): boolean {
    if (typeof localStorage === 'undefined') return false;

    const state = this.getSurveyState();
    if (state.completed) return false;

    const skippedUntil = localStorage.getItem(STORAGE_KEYS.SKIPPED_UNTIL);
    if (skippedUntil) {
      const skipTime = parseInt(skippedUntil, 10);
      if (Date.now() < skipTime) return false;
    }

    return true;
  }

  /**
   * Lưu kết quả Khảo sát (Local + Sync Firestore)
   * Tối ưu O(1) Read cho Admin: Đồng thời cập nhật dồn vào 1-Read Aggregated Directory Document
   */
  public async saveSurvey(data: Omit<UnifiedSurveyResponse, 'completedAt'>): Promise<void> {
    const fullData: UnifiedSurveyResponse = {
      ...data,
      completedAt: new Date().toISOString(),
    };

    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(STORAGE_KEYS.SURVEY_COMPLETED, 'true');
      localStorage.setItem(STORAGE_KEYS.SURVEY_DATA, JSON.stringify(fullData));
    }

    // Sync Firestore
    const user = auth.currentUser;
    if (user) {
      const sanitizedSurvey = sanitizeForFirestore(fullData);

      // 1. Lưu bản ghi cá nhân của học sinh
      try {
        const surveyRef = doc(db, 'survey_responses', user.uid);
        await setDoc(
          surveyRef,
          {
            userId: user.uid,
            userEmail: user.email ?? null,
            survey: sanitizedSurvey,
            updatedAt: serverTimestamp(),
          },
          { merge: true }
        );
      } catch (userDocError) {
        logger.error('Không thể đồng bộ survey_responses lên Firestore', userDocError);
      }

      // 2. ⭐ TỐI ƯU O(1) READ CHO ADMIN: Cập nhật dồn vào 1-Read Aggregated Directory Document
      try {
        const { getDoc, updateDoc } = await import('firebase/firestore');
        const summaryRef = doc(db, 'system_metrics', 'survey_directory');
        const uiRatingObj = typeof fullData.uiRating === 'object' && fullData.uiRating !== null
          ? (fullData.uiRating as { rating?: number; reason?: string })
          : null;
        const ratingVal = typeof fullData.uiRating === 'number' ? fullData.uiRating : uiRatingObj?.rating;
        const ratingReason = uiRatingObj?.reason || null;
        const deviceVal = fullData.primaryDevice ? (fullData.primaryDevice.startsWith('other:') ? 'other' : fullData.primaryDevice) : null;

        const feedbackItem = sanitizeForFirestore({
          userId: user.uid,
          userEmail: user.email || 'Học sinh',
          grade: fullData.grade || null,
          goal: fullData.goal || null,
          preferredSubject: fullData.preferredSubject || null,
          primaryDevice: fullData.primaryDevice || null,
          uiRating: fullData.uiRating || null,
          wishedFeatures: fullData.wishedFeatures || [],
          studyHurdles: fullData.studyHurdles || null,
          npsScore: fullData.npsScore ?? null,
          comments: fullData.additionalComments || ratingReason || null,
          submittedAt: fullData.completedAt,
          fullSurvey: fullData,
        });

        const snap = await getDoc(summaryRef);
        if (snap.exists()) {
          const updatePayload: Record<string, any> = {
            totalResponses: increment(1),
            updatedAt: serverTimestamp(),
            latestFeedbacks: arrayUnion(feedbackItem),
          };
          if (fullData.grade) {
            updatePayload[`grades.${fullData.grade}`] = increment(1);
          }
          if (ratingVal) {
            updatePayload[`uiRatings.${ratingVal}`] = increment(1);
          }
          if (deviceVal) {
            updatePayload[`devices.${deviceVal}`] = increment(1);
          }
          await updateDoc(summaryRef, updatePayload);
        } else {
          const initialPayload: Record<string, any> = {
            totalResponses: 1,
            updatedAt: serverTimestamp(),
            grades: fullData.grade ? { [fullData.grade]: 1 } : {},
            uiRatings: ratingVal ? { [ratingVal]: 1 } : {},
            devices: deviceVal ? { [deviceVal]: 1 } : {},
            latestFeedbacks: [feedbackItem],
          };
          await setDoc(summaryRef, initialPayload);
        }
      } catch (summaryError) {
        logger.info('Không thể cập nhật system_metrics/survey_directory:', summaryError);
      }
    }
  }

  /**
   * ⭐ Tối ưu O(1) Read cho Admin: Đọc toàn bộ báo cáo khảo sát chỉ tốn ĐÚNG 1 FIRESTORE READ
   */
  public async getAdminSurveySummary(): Promise<any> {
    try {
      const { getDoc } = await import('firebase/firestore');
      const summaryRef = doc(db, 'system_metrics', 'survey_directory');
      const snap = await getDoc(summaryRef);
      if (snap.exists()) {
        return snap.data();
      }
      return null;
    } catch (e) {
      console.error('Lỗi khi đọc survey summary O(1) read:', e);
      return null;
    }
  }

  /**
   * Tạm hoãn khảo sát (Skip) trong X giờ (Mặc định: 24 giờ)
   */
  public skipSurvey(hoursDelay = 24): void {
    if (typeof localStorage === 'undefined') return;
    const until = Date.now() + hoursDelay * 60 * 60 * 1000;
    localStorage.setItem(STORAGE_KEYS.SKIPPED_UNTIL, until.toString());
  }
}

export const surveyService = new SurveyService();
