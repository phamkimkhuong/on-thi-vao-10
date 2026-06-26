import { ChatContent } from "../types.js";
import { removeAccents } from "./gemini.js";

export function isRelevantToTopic(item: string, topicName: string): boolean {
  if (!topicName) return true; // Nếu không có tên chuyên đề, giữ lại tất cả
  
  const cleanStr = (s: string) => {
    return removeAccents(s.toLowerCase())
      .replace(/[^\w\s]/g, " ")
      .split(/\s+/)
      .filter(w => w.length > 2);
  };

  const topicWords = cleanStr(topicName);
  const itemWords = cleanStr(item);

  // 1. Kiểm tra từ trùng nhau trực tiếp
  const hasDirectOverlap = itemWords.some(w => topicWords.includes(w));
  if (hasDirectOverlap) return true;

  // 2. Tra cứu chéo từ đồng nghĩa/liên quan
  const topicNormalized = removeAccents(topicName.toLowerCase());
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

export function shouldRewriteQuery(query: string, chatHistory?: ChatContent[]): boolean {
  if (!chatHistory || chatHistory.length === 0) {
    return false;
  }

  const cleanQuery = query.toLowerCase().trim();
  
  // Các từ khóa chỉ điểm ngữ cảnh phụ thuộc (Việt & Anh)
  const contextIndicators = [
    "tại sao", "vì sao", "sao lại", "thế nào", "như vậy", "này", "kia", "đó", 
    "chỗ", "dòng", "bước", "câu này", "câu đó", "đáp án", "giải thích thêm", 
    "rõ hơn", "chi tiết hơn", "phần này", "đoạn", "hướng dẫn tiếp", "lại",
    "why", "how so", "it", "this", "that", "them", "those", "explain more",
    "why is", "why does", "what about", "again", "then", "step", "đối chiếu"
  ];

  const hasIndicator = contextIndicators.some(indicator => cleanQuery.includes(indicator));
  if (hasIndicator) {
    return true;
  }

  // Nếu câu hỏi quá ngắn, rất có thể đang phụ thuộc ngữ cảnh trò chuyện trước đó
  if (cleanQuery.length < 15) {
    return true;
  }

  return false;
}
