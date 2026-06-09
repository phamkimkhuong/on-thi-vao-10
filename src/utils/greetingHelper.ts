import { getStarsFromScore } from './theme';
import { storageService } from '../services/storage';
import { auth } from '../services/firebase';
import { mathQuestionTypes } from '../data/mathData';
import { englishQuestionTypes } from '../data/englishData';

export interface SubjectProfile {
  strengths?: string[];
  weaknesses?: string[];
  learningSummary?: string;
  lastUpdated?: any;
}

export interface StudentProfile {
  math?: SubjectProfile;
  english?: SubjectProfile;
  // Legacy fields for backward compatibility
  strengths?: string[];
  weaknesses?: string[];
  learningSummary?: string;
  lastUpdated?: any;
}

export function removeAccents(str: string): string {
  if (!str) return "";
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "d");
}

export function isRelevantToTopic(item: string, topicName: string): boolean {
  if (!topicName) return true;
  
  const cleanStr = (s: string) => {
    return removeAccents(s.toLowerCase())
      .replace(/[^\w\s]/g, " ")
      .split(/\s+/)
      .filter(w => w.length >= 2);
  };

  const topicWords = cleanStr(topicName);
  const itemWords = cleanStr(item);

  // 1. Check direct overlap
  const hasDirectOverlap = itemWords.some(w => topicWords.includes(w));
  if (hasDirectOverlap) return true;

  // 2. Cross reference synonyms/related terms
  const topicNormalized = removeAccents(topicName.toLowerCase()).replace(/[^\w\s]/g, " ");
  const relatedMap: { [key: string]: string[] } = {
    "vi et": ["vi et", "viét", "delta", "nghiem", "he thuc", "bac hai"],
    "can thuc": ["can", "rut gon", "bieu thuc", "mau thuc", "hang dang thuc"],
    "dai so": ["can", "rut gon", "bieu thuc"],
    "he phuong trinh": ["he", "thuc te", "chuyen dong", "nang suat", "cong viec"],
    "toan thuc te": ["he", "thuc te", "chuyen dong", "nang suat", "cong viec", "phan tram"],
    "ham so": ["ham", "parabol", "duong thang", "cat", "giao diem", "toa do", "tiep xuc"],
    "do thi": ["ham", "parabol", "duong thang", "cat", "giao diem", "toa do", "tiep xuc"],
    "duong tron": ["tron", "tiep tuyen", "noi tiep", "goc", "cung", "day", "tam giac"],
    "hinh hoc": ["tron", "tiep tuyen", "noi tiep", "goc", "cung", "day", "tam giac"],
    "tu vung": ["tu vung", "vocabulary", "word", "nghia"],
    "ngu phap": ["ngu phap", "grammar", "thi", "tense", "verb", "dong tu", "tu loai"],
    "viet": ["viet", "bien doi", "rewrite", "dong", "indirect", "gian tiep", "conditional", "dieu kien", "wish", "although", "despite"]
  };

  for (const [key, relatedWords] of Object.entries(relatedMap)) {
    if (topicNormalized.includes(key)) {
      const itemNormalized = removeAccents(item.toLowerCase());
      const hasRelated = relatedWords.some(word => itemNormalized.includes(word));
      if (hasRelated) return true;
    }
  }

  return false;
}

export function getPersonalizedGreeting(
  displayName: string | null | undefined,
  profile: StudentProfile | null | undefined,
  subject: 'math' | 'english',
  topicName?: string
): string {
  // Extract student's first name
  let name = 'em';
  if (displayName) {
    const trimmed = displayName.trim();
    const parts = trimmed.split(' ');
    name = parts[parts.length - 1] || trimmed;
  }

  const subProfile = profile?.[subject];
  let strengths = subProfile?.strengths || [];
  let weaknesses = subProfile?.weaknesses || [];

  // Backward compatibility for flat math profile
  if (subject === 'math' && !subProfile) {
    if (profile?.strengths) strengths = profile.strengths;
    if (profile?.weaknesses) weaknesses = profile.weaknesses;
  }

  // Clean empty values
  strengths = strengths.filter(Boolean);
  weaknesses = weaknesses.filter(Boolean);

  // Scenario 1: Topic-specific chat (AiTutorPanel)
  if (topicName) {
    // 1a. Student is strong in this topic
    const relevantStrength = strengths.find(s => isRelevantToTopic(s, topicName));
    if (relevantStrength) {
      return `Chào ${name}! Thầy thấy phần ${relevantStrength.toLowerCase()} em đã làm rất tốt. Hôm nay chúng ta cùng tiếp tục chinh phục chuyên đề ${topicName} nhé. Em đã sẵn sàng chưa?`;
    }

    // 1b. Student is weak in this topic
    const relevantWeakness = weaknesses.find(w => isRelevantToTopic(w, topicName));
    if (relevantWeakness) {
      return `Chào ${name}! Thầy thấy ở chuyên đề ${topicName}, phần ${relevantWeakness.toLowerCase()} em còn hay gặp chút khó khăn. Thầy trò mình cùng luyện tập để giải quyết dứt điểm phần này nhé. Em đã sẵn sàng chưa?`;
    }

    // 1c. Student has other strengths (different topic)
    if (strengths.length > 0) {
      const firstStrength = strengths[0];
      return `Chào ${name}! Thầy thấy phần ${firstStrength.toLowerCase()} em đã làm rất tốt. Hôm nay chúng ta cùng chinh phục chuyên đề ${topicName} nhé. Em đã sẵn sàng chưa?`;
    }

    // 1d. Student has other weaknesses (different topic)
    if (weaknesses.length > 0) {
      const firstWeakness = weaknesses[0];
      return `Chào ${name}! Hy vọng em đã nắm vững các bài học trước. Hôm nay chúng ta cùng chinh phục chuyên đề ${topicName} nhé. Thầy sẽ đồng hành để giúp em tránh các lỗi hay gặp như ${firstWeakness.toLowerCase()}. Em sẵn sàng chưa?`;
    }

    // 1e. No profile data
    return subject === 'math'
      ? `Chào ${name}! Thầy là Gia sư AI môn Toán ôn thi vào 10. Thầy thấy em đang làm câu hỏi về chuyên đề ${topicName}. Thầy đã đọc đề bài và lời giải chi tiết. Em có gặp khó khăn hay thắc mắc gì cần thầy gợi ý không?`
      : `Hello ${name}! Thầy là Gia sư AI môn Tiếng Anh ôn thi vào 10. Thầy thấy em đang ôn tập chủ điểm ${topicName}. Em có vướng mắc gì ở câu hỏi này cần thầy trợ giúp không?`;
  }

  // Scenario 2: General Chat (GeneralAiTutor)
  // Find recommended topic based on student's actual progress
  let recommendedTopicName = '';
  const currentUserId = auth.currentUser?.uid || 'guest';
  const progress = storageService.getProgress(currentUserId);
  const qTypes = subject === 'math' ? mathQuestionTypes : englishQuestionTypes;
  
  // Find first unmastered topic/questionType (stars < 3)
  const nextUnmastered = qTypes.find(qt => {
    const score = progress.masteryLevels[qt.id] ?? 0;
    return getStarsFromScore(score) < 3;
  });
  
  if (nextUnmastered) {
    recommendedTopicName = nextUnmastered.name;
  } else if (qTypes.length > 0) {
    recommendedTopicName = qTypes[qTypes.length - 1].name;
  }

  // 2a. Student has strengths
  if (strengths.length > 0) {
    const str = strengths[0];
    return `Chào ${name}! Thầy thấy phần ${str.toLowerCase()} em đã làm rất tốt. Hôm nay chúng ta cùng chinh phục chuyên đề ${recommendedTopicName} nhé. Em đã sẵn sàng chưa?`;
  }

  // 2b. Student has weaknesses
  if (weaknesses.length > 0) {
    const weak = weaknesses[0];
    return `Chào ${name}! Thầy thấy phần ${weak.toLowerCase()} em còn hay gặp chút khó khăn. Hôm nay chúng ta cùng tập trung chinh phục chuyên đề ${recommendedTopicName} để vượt qua nhé. Em đã sẵn sàng chưa?`;
  }

  // 2c. General fallback
  const subjectText = subject === 'math' ? 'Toán' : 'Tiếng Anh';
  return `Chào ${name}! Thầy là Gia sư AI môn ${subjectText} ôn thi vào 10. Hôm nay chúng ta cùng chinh phục chuyên đề ${recommendedTopicName} nhé. Em đã sẵn sàng chưa?`;
}
