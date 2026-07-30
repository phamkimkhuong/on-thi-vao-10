export interface IMeaning {
  level?: string;
  definition: string;
  example?: string;
  grammar_note?: string | null;
  useful_phrases?: string[];
  alternative_expressions?: string[];
}

export interface IDefinitionGroup {
  part_of_speech: string;
  inflections?: string | string[] | null;
  ipa_uk?: string;
  ipa_us?: string;
  meanings: IMeaning[];
}

export interface IRelevantWord {
  word: string;
  definitions: IDefinitionGroup[];
}

export interface IVocabularyItem {
  entry_word: string;
  inflections?: string[];
  main_definitions: IDefinitionGroup[];
  relevant_words?: IRelevantWord[];
  _id?: string;
}

const R2_VOCABULARY_URL = import.meta.env.VITE_R2_VOCABULARY_URL;

const LOCAL_STORAGE_KEY = 'cached_vocabulary_english_v1';

class DictionaryService {
  private vocabularyMap: Map<string, IVocabularyItem> = new Map();
  private isLoaded: boolean = false;
  private loadPromise: Promise<boolean> | null = null;

  /**
   * Khởi tạo và nạp dữ liệu từ điển (Ưu tiên R2 URL + Browser Caching)
   */
  public async init(): Promise<boolean> {
    if (this.isLoaded) return true;
    if (this.loadPromise) return this.loadPromise;

    this.loadPromise = this.loadData();
    return this.loadPromise;
  }

  private async loadData(): Promise<boolean> {
    // 1. Kiểm tra cache trong LocalStorage trước (Truy cập tức thì 0ms, không tốn băng thông)
    try {
      const cached = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (cached) {
        const data: IVocabularyItem[] = JSON.parse(cached);
        if (Array.isArray(data) && data.length > 0) {
          this.buildIndex(data);
          this.isLoaded = true;
          // Tải ngầm bản mới nhất từ R2 để cập nhật cache
          this.fetchAndCacheR2().catch(() => { });
          return true;
        }
      }
    } catch {
      // Lỗi parse cache
    }

    // 2. Nạp chính thức từ Cloudflare R2 URL
    const successR2 = await this.fetchAndCacheR2();
    if (successR2) return true;

    return false;
  }

  private async fetchAndCacheR2(): Promise<boolean> {
    try {
      const res = await fetch(R2_VOCABULARY_URL, {
        method: 'GET',
        mode: 'cors',
      });

      if (res.ok) {
        const data: IVocabularyItem[] = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          this.buildIndex(data);
          this.isLoaded = true;
          try {
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
          } catch {
            // LocalStorage đầy
          }
          return true;
        }
      }
    } catch (err) {
      console.warn('Lỗi nạp từ điển từ R2 URL:', err);
    }
    return false;
  }

  /**
   * Xây dựng chỉ mục tìm kiếm thông minh theo mảng inflections
   */
  private buildIndex(dataList: IVocabularyItem[]): void {
    this.vocabularyMap.clear();

    for (const item of dataList) {
      if (!item.entry_word) continue;

      const entryWordClean = item.entry_word.trim().toLowerCase();
      this.vocabularyMap.set(entryWordClean, item);

      // Thêm các biến thể từ (inflections) vào Map
      if (Array.isArray(item.inflections)) {
        for (const infl of item.inflections) {
          if (infl) {
            const inflClean = infl.trim().toLowerCase();
            if (!this.vocabularyMap.has(inflClean)) {
              this.vocabularyMap.set(inflClean, item);
            }
          }
        }
      }
    }
  }

  /**
   * Tra cứu từ vựng (hỗ trợ tự động biến đổi inflections)
   */
  public searchWord(term: string): IVocabularyItem | null {
    if (!term || !term.trim()) return null;
    const cleanTerm = term.trim().toLowerCase().replace(/[.,!?;:"()]/g, '');

    // Tra trực tiếp trong index map
    if (this.vocabularyMap.has(cleanTerm)) {
      return this.vocabularyMap.get(cleanTerm)!;
    }

    // Thử loại bỏ các hậu tố thông thường (-s, -es, -ed, -ing)
    if (cleanTerm.endsWith('s') && this.vocabularyMap.has(cleanTerm.slice(0, -1))) {
      return this.vocabularyMap.get(cleanTerm.slice(0, -1))!;
    }
    if (cleanTerm.endsWith('es') && this.vocabularyMap.has(cleanTerm.slice(0, -2))) {
      return this.vocabularyMap.get(cleanTerm.slice(0, -2))!;
    }
    if (cleanTerm.endsWith('ed') && this.vocabularyMap.has(cleanTerm.slice(0, -2))) {
      return this.vocabularyMap.get(cleanTerm.slice(0, -2))!;
    }
    if (cleanTerm.endsWith('ing') && this.vocabularyMap.has(cleanTerm.slice(0, -3))) {
      return this.vocabularyMap.get(cleanTerm.slice(0, -3))!;
    }

    return null;
  }

  /**
   * Đọc từ tiếng Anh bằng Web Speech Synthesis
   */
  public speak(text: string, lang: 'en-US' | 'en-GB' = 'en-US'): void {
    if (!text || !('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  }

  /**
   * Phát âm từ với giọng chuẩn UK (type=1) hoặc US (type=2) qua Youdao API + Fallback Web Speech
   */
  public playAudio(word: string, type: 1 | 2 = 2): void {
    if (!word) return;
    try {
      const audio = new Audio(`https://dict.youdao.com/dictvoice?audio=${encodeURIComponent(word)}&type=${type}`);
      audio.play().catch(() => {
        // Fallback Web Speech nếu audio element phát âm thất bại
        this.speak(word, type === 1 ? 'en-GB' : 'en-US');
      });
    } catch {
      this.speak(word, type === 1 ? 'en-GB' : 'en-US');
    }
  }

  public getIsLoaded(): boolean {
    return this.isLoaded;
  }
}

export const dictionaryService = new DictionaryService();
