import React, { useState, useMemo, useEffect, useRef } from 'react';
import {
  ENGLISH_10_VOCABULARY,
  ENGLISH_10_UNITS,
  IVocabItem
} from '../../data/grade10/english/vocabulary/english10Vocabulary';
import { dictionaryService } from '../../services/dictionaryService';
import { useDictionaryStore } from '../../stores/useDictionaryStore';
import {
  Volume2,
  BookOpen,
  RotateCw,
  Sparkles,
  CheckCircle2,
  XCircle,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Award,
  ArrowLeft,
  Pencil,
  Eye
} from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';
import { cn } from '../../utils/cn';

type Mode = 'flashcard' | 'quiz' | 'spelling';

export const VocabularyPage: React.FC = () => {
  // Selected Unit ID: null = Unit Grid view, number = Specific Unit view, 'all' = All Units view
  const [selectedUnit, setSelectedUnit] = useState<number | 'all' | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [mode, setMode] = useState<Mode>('flashcard');

  // Flashcard state
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  // Quiz state & settings
  const [quizScore, setQuizScore] = useState(0);
  const [quizIndex, setQuizIndex] = useState(0);
  const [selectedQuizOption, setSelectedQuizOption] = useState<string | null>(null);
  const quizOptionCount = 6;
  const [quizDirection, setQuizDirection] = useState<'en-vi' | 'vi-en'>('en-vi');
  const [quizRoundLength] = useState<number>(10);
  const [quizCompleted, setQuizCompleted] = useState<boolean>(false);

  // Spelling state
  const [spellingIndex, setSpellingIndex] = useState(0);
  const [spellingInput, setSpellingInput] = useState('');
  const [showSpellingAnswer, setShowSpellingAnswer] = useState(false);
  const [spellingFeedback, setSpellingFeedback] = useState<'correct' | 'wrong' | null>(null);
  const [spellingScore, setSpellingScore] = useState(0);
  const [spellingCompleted, setSpellingCompleted] = useState(false);

  const spellingInputRef = useRef<HTMLInputElement>(null);

  const { searchAndOpenModal } = useDictionaryStore();

  // Filtered vocabulary list based on selected unit and search query
  const filteredVocab = useMemo(() => {
    if (selectedUnit === null) return [];
    return ENGLISH_10_VOCABULARY.filter(item => {
      const matchUnit = selectedUnit === 'all' || item.unit === selectedUnit;
      const matchQuery =
        !searchQuery ||
        item.word.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.meaning.toLowerCase().includes(searchQuery.toLowerCase());
      return matchUnit && matchQuery;
    });
  }, [selectedUnit, searchQuery]);

  // Current active unit spec
  const currentUnitSpec = useMemo(() => {
    if (typeof selectedUnit === 'number') {
      return ENGLISH_10_UNITS.find(u => u.unit === selectedUnit);
    }
    return null;
  }, [selectedUnit]);

  // Current flashcard item
  const currentCard: IVocabItem | undefined = filteredVocab[currentIndex % (filteredVocab.length || 1)];

  // Current quiz item
  const totalQuizInRound = Math.min(quizRoundLength, filteredVocab.length || 1);
  const currentQuizItem: IVocabItem | undefined = filteredVocab[quizIndex % (filteredVocab.length || 1)];

  // Current spelling item
  const totalSpellingInRound = Math.min(10, filteredVocab.length || 1);
  const currentSpellingItem: IVocabItem | undefined = filteredVocab[spellingIndex % (filteredVocab.length || 1)];

  const quizOptions = useMemo(() => {
    if (!currentQuizItem || filteredVocab.length === 0) return [];
    const isEnVi = quizDirection === 'en-vi';
    const correct = isEnVi ? currentQuizItem.meaning : currentQuizItem.word;
    const distractorCount = quizOptionCount - 1; // 5 for 6 options, 3 for 4 options

    // Pull distractors from overall dataset
    const distractorPool = ENGLISH_10_VOCABULARY
      .filter(v => v.id !== currentQuizItem.id)
      .map(v => isEnVi ? v.meaning : v.word)
      .filter((val, idx, self) => self.indexOf(val) === idx && val !== correct);

    const distractors = distractorPool
      .sort(() => 0.5 - Math.random())
      .slice(0, distractorCount);

    return [correct, ...distractors].sort(() => 0.5 - Math.random());
  }, [currentQuizItem, quizDirection, quizOptionCount, filteredVocab.length]);

  const handlePlayAudio = (word: string, e?: React.MouseEvent) => {
    e?.stopPropagation();
    dictionaryService.playAudio(word);
  };

  const handleNextCard = () => {
    setIsFlipped(false);
    setCurrentIndex(prev => (prev + 1) % (filteredVocab.length || 1));
  };

  const handlePrevCard = () => {
    setIsFlipped(false);
    setCurrentIndex(prev => (prev - 1 + filteredVocab.length) % (filteredVocab.length || 1));
  };

  // Keyboard navigation for Flashcards (ArrowLeft, ArrowRight, Space)
  useEffect(() => {
    if (selectedUnit === null || mode !== 'flashcard') return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        handleNextCard();
      } else if (e.key === 'ArrowLeft') {
        handlePrevCard();
      } else if (e.key === ' ' || e.code === 'Space') {
        e.preventDefault();
        setIsFlipped(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedUnit, mode, filteredVocab.length]);

  const handleQuizAnswer = (option: string) => {
    if (selectedQuizOption !== null || !currentQuizItem) return;
    setSelectedQuizOption(option);
    const correctValue = quizDirection === 'en-vi' ? currentQuizItem.meaning : currentQuizItem.word;
    if (option === correctValue) {
      setQuizScore(prev => prev + 1);
    }
  };

  const handleNextQuiz = () => {
    setSelectedQuizOption(null);
    const nextIdx = quizIndex + 1;
    if (nextIdx >= totalQuizInRound) {
      setQuizCompleted(true);
    } else {
      setQuizIndex(nextIdx);
    }
  };

  const handleRestartQuiz = () => {
    setQuizIndex(0);
    setQuizScore(0);
    setSelectedQuizOption(null);
    setQuizCompleted(false);
  };

  // Spelling Handlers
  const handleCheckSpelling = () => {
    if (!currentSpellingItem || !spellingInput.trim()) return;
    const isCorrect = spellingInput.trim().toLowerCase() === currentSpellingItem.word.toLowerCase();
    if (isCorrect) {
      setSpellingFeedback('correct');
      setSpellingScore(prev => prev + 1);
      handlePlayAudio(currentSpellingItem.word);
    } else {
      setSpellingFeedback('wrong');
    }
  };

  const handleNextSpelling = () => {
    setSpellingInput('');
    setSpellingFeedback(null);
    setShowSpellingAnswer(false);
    const nextIdx = spellingIndex + 1;
    if (nextIdx >= totalSpellingInRound) {
      setSpellingCompleted(true);
    } else {
      setSpellingIndex(nextIdx);
    }
  };

  const handleRestartSpelling = () => {
    setSpellingIndex(0);
    setSpellingScore(0);
    setSpellingInput('');
    setSpellingFeedback(null);
    setShowSpellingAnswer(false);
    setSpellingCompleted(false);
  };

  const handleSelectUnit = (unitId: number | 'all') => {
    setSelectedUnit(unitId);
    setCurrentIndex(0);
    setIsFlipped(false);
    setQuizIndex(0);
    setQuizScore(0);
    setSelectedQuizOption(null);
    setQuizCompleted(false);
    handleRestartSpelling();
    setSearchQuery('');
  };

  // Unit count map
  const unitVocabCountMap = useMemo(() => {
    const map: Record<number, number> = {};
    ENGLISH_10_VOCABULARY.forEach(item => {
      map[item.unit] = (map[item.unit] || 0) + 1;
    });
    return map;
  }, []);

  const progressPercent = useMemo(() => {
    if (filteredVocab.length === 0) return 0;
    return Math.round(((currentIndex + 1) / filteredVocab.length) * 100);
  }, [currentIndex, filteredVocab.length]);

  return (
    <div className="min-h-screen bg-slate-50/60 dark:bg-slate-950 p-4 sm:p-6 md:p-8 space-y-6">
      {/* LEVEL 1: UNIT SELECTION GRID VIEW */}
      {selectedUnit === null ? (
        <div className="space-y-6 animate-fade-in max-w-7xl mx-auto">
          {/* Header Banner */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-800 p-6 sm:p-8 text-white shadow-xl">
            <div className="relative z-10 space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-bold uppercase tracking-wider text-indigo-100 border border-white/20">
                <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
                <span>Tiếng Anh Lớp 10 — Global Success</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
                Kho Từ Vựng Tiếng Anh 10 📚
              </h1>
              <p className="text-sm text-indigo-100 font-medium leading-relaxed">
                Chọn bài học (Unit) để học từ vựng chuyên sâu qua Flashcards 3D, Trắc nghiệm Quiz và Luyện viết từ vựng.
              </p>
            </div>
            <div className="absolute -right-8 -bottom-8 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          </div>

          {/* Unit Cards Grid */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-base sm:text-lg font-black text-foreground flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                <span>Danh sách các bài học (Unit 1 - 10)</span>
              </h2>
              <span className="text-xs font-bold text-muted-foreground">
                Tổng cộng {ENGLISH_10_VOCABULARY.length} từ vựng
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
              {/* 10 Unit Cards */}
              {ENGLISH_10_UNITS.map(u => {
                const count = unitVocabCountMap[u.unit] || 0;
                return (
                  <Card
                    key={u.unit}
                    onClick={() => handleSelectUnit(u.unit)}
                    className="group cursor-pointer border border-border/50 hover:border-indigo-500/50 bg-card hover:shadow-lg transition-all duration-200 hover:-translate-y-1 rounded-2xl flex flex-col justify-between"
                  >
                    <CardContent className="p-5 flex flex-col justify-between h-full space-y-4">
                      <div className="space-y-2.5">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-black px-2.5 py-0.5 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 uppercase tracking-wider border border-indigo-500/20">
                            Unit {u.unit}
                          </span>
                          <span className="text-xs font-mono font-bold text-muted-foreground">
                            {count} từ vựng
                          </span>
                        </div>

                        <h3 className="font-extrabold text-base text-foreground group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors leading-snug">
                          {u.title}
                        </h3>
                        <p className="text-xs font-medium text-muted-foreground">
                          📌 Chủ đề: <span className="font-bold text-foreground">{u.theme}</span>
                        </p>
                      </div>

                      <div className="flex items-center justify-between border-t border-border/30 pt-3">
                        <span className="text-xs font-bold text-muted-foreground group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                          Học từ vựng bài này
                        </span>
                        <Button variant="outline" size="sm" className="h-8 text-xs font-extrabold rounded-xl px-3 cursor-pointer border-border/50 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                          Vào học →
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}

              {/* All Units Summary Card */}
              <Card
                onClick={() => handleSelectUnit('all')}
                className="group cursor-pointer border border-indigo-500/30 hover:border-indigo-500/60 bg-gradient-to-br from-indigo-500/10 via-card to-purple-500/10 hover:shadow-xl transition-all duration-200 hover:-translate-y-1 rounded-2xl flex flex-col justify-between overflow-hidden"
              >
                <CardContent className="p-5 flex flex-col justify-between h-full space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-black px-2.5 py-1 rounded-lg bg-indigo-600 text-white uppercase tracking-wider">
                        🌟 Tất cả Unit
                      </span>
                      <span className="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400">
                        {ENGLISH_10_VOCABULARY.length} từ vựng
                      </span>
                    </div>

                    <h3 className="font-extrabold text-base text-foreground group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      Tổng ôn từ vựng toàn bộ 10 Unit
                    </h3>
                    <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                      Luyện tập tất cả từ vựng môn Tiếng Anh Lớp 10 cùng lúc qua Flashcard, Trắc nghiệm và Luyện viết.
                    </p>
                  </div>

                  <div className="flex items-center justify-between border-t border-border/30 pt-3 text-xs font-bold text-indigo-600 dark:text-indigo-400">
                    <span>Học ngay tất cả từ →</span>
                    <Button variant="primary" size="sm" className="h-8 text-xs font-extrabold rounded-xl px-3 cursor-pointer">
                      Bắt đầu →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      ) : (
        /* LEVEL 2: VOCABULARY LEARNING VIEW */
        <div className="max-w-5xl mx-auto space-y-6 animate-fade-in">
          {/* Top Integrated Control Header */}
          <div className="bg-card border border-border/50 rounded-2xl p-4 sm:p-5 shadow-sm space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-4">
              {/* Back Button & Unit Title */}
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSelectedUnit(null)}
                  className="rounded-xl gap-2 font-extrabold text-xs cursor-pointer border-border/50 hover:bg-secondary"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Danh sách Unit</span>
                </Button>

                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded-md bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-[10px] font-black uppercase">
                      {selectedUnit === 'all' ? 'Tất cả' : `Unit ${currentUnitSpec?.unit}`}
                    </span>
                    <h2 className="text-base sm:text-lg font-black text-foreground">
                      {selectedUnit === 'all'
                        ? 'Tổng ôn từ vựng (Unit 1 - 10)'
                        : currentUnitSpec?.title}
                    </h2>
                  </div>
                  {currentUnitSpec && (
                    <p className="text-xs text-muted-foreground font-medium">
                      Chủ đề: <span className="font-semibold text-foreground">{currentUnitSpec.theme}</span> • <span className="font-mono">{filteredVocab.length}</span> từ vựng
                    </p>
                  )}
                </div>
              </div>

              {/* Segmented Mode Selector Stepper Tabs (Matching User Mockup Image) */}
              <div className="flex flex-wrap items-center p-1.5 bg-secondary/40 rounded-2xl border border-border/40 gap-1.5">
                <button
                  onClick={() => { setMode('flashcard'); setIsFlipped(false); }}
                  className={cn(
                    "flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer border",
                    mode === 'flashcard'
                      ? "bg-indigo-900 text-white dark:bg-indigo-600 border-indigo-900 dark:border-indigo-600 shadow-md"
                      : "bg-card text-muted-foreground border-border/40 hover:text-foreground"
                  )}
                >
                  <span className="w-4 h-4 rounded-full bg-secondary/80 flex items-center justify-center text-[10px] font-mono">1</span>
                  <span>Flashcards 3D</span>
                </button>

                <span className="text-muted-foreground/30 text-xs">➔</span>

                <button
                  onClick={() => { setMode('quiz'); handleRestartQuiz(); }}
                  className={cn(
                    "flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer border",
                    mode === 'quiz'
                      ? "bg-indigo-900 text-white dark:bg-indigo-600 border-indigo-900 dark:border-indigo-600 shadow-md"
                      : "bg-card text-muted-foreground border-border/40 hover:text-foreground"
                  )}
                >
                  <span className="w-4 h-4 rounded-full bg-secondary/80 flex items-center justify-center text-[10px] font-mono">2</span>
                  <span>Trắc nghiệm Quiz</span>
                </button>

                <span className="text-muted-foreground/30 text-xs">➔</span>

                <button
                  onClick={() => { setMode('spelling'); handleRestartSpelling(); }}
                  className={cn(
                    "flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer border",
                    mode === 'spelling'
                      ? "bg-indigo-900 text-white dark:bg-indigo-600 border-indigo-900 dark:border-indigo-600 shadow-md ring-2 ring-indigo-500/30"
                      : "bg-card text-muted-foreground border-border/40 hover:text-foreground"
                  )}
                >
                  <span className="w-4 h-4 rounded-full bg-amber-500 text-white flex items-center justify-center text-[10px] font-mono">3</span>
                  <span>Luyện viết</span>
                </button>
              </div>
            </div>
          </div>

          {/* LEARNING MODES CONTENT */}
          {filteredVocab.length === 0 ? (
            <Card className="p-12 text-center space-y-3">
              <BookOpen className="w-12 h-12 text-muted-foreground mx-auto opacity-40" />
              <h3 className="text-base font-bold text-foreground">Không tìm thấy từ vựng</h3>
              <p className="text-xs text-muted-foreground">Vui lòng chọn bài học khác.</p>
            </Card>
          ) : mode === 'flashcard' ? (
            /* CLEAN & CENTERED FLASHCARD MODE */
            <div className="flex flex-col items-center justify-center space-y-5 py-2 max-w-2xl mx-auto">
              {/* Progress & Counter Bar */}
              <div className="w-full flex items-center justify-between gap-4 text-xs font-extrabold text-muted-foreground px-1">
                <div className="flex items-center gap-2">
                  <span className="text-foreground">Thẻ {currentIndex + 1} / {filteredVocab.length}</span>
                  <span className="text-indigo-600 dark:text-indigo-400 font-mono">({progressPercent}%)</span>
                </div>
                <span className="text-[11px] font-normal text-muted-foreground hidden sm:inline">
                  💡 Mẹo: Dùng phím <kbd className="px-1.5 py-0.5 bg-secondary rounded border border-border/60 font-mono">Space</kbd> lật thẻ, <kbd className="px-1.5 py-0.5 bg-secondary rounded border border-border/60 font-mono">←</kbd> <kbd className="px-1.5 py-0.5 bg-secondary rounded border border-border/60 font-mono">→</kbd> chuyển từ
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-1.5 bg-secondary rounded-full overflow-hidden">
                <div
                  className="h-full bg-indigo-600 dark:bg-indigo-500 rounded-full transition-all duration-300"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>

              {/* STABLE & BEAUTIFUL FLASHCARD CONTAINER */}
              <Card
                onClick={() => setIsFlipped(!isFlipped)}
                className="w-full max-w-2xl min-h-[360px] sm:min-h-[400px] p-6 sm:p-8 cursor-pointer select-none border-2 border-indigo-500/30 dark:border-indigo-500/50 shadow-2xl rounded-3xl bg-card hover:border-indigo-500/60 transition-all duration-300 flex flex-col justify-between my-3 relative overflow-hidden group"
              >
                {!isFlipped ? (
                  /* FRONT CONTENT (ENGLISH WORD + POS + PHONETIC + AUDIO) */
                  <div className="flex flex-col justify-between h-full space-y-6 animate-fade-in">
                    <div className="flex items-center justify-between">
                      <span className="px-3.5 py-1.5 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-black rounded-xl uppercase tracking-wider border border-indigo-500/20 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                        <span>{currentCard?.pos}</span>
                      </span>
                      <button
                        onClick={(e) => currentCard && handlePlayAudio(currentCard.word, e)}
                        className="p-3 bg-indigo-600 text-white rounded-2xl hover:bg-indigo-700 active:scale-95 shadow-md shadow-indigo-500/20 transition-all cursor-pointer flex items-center gap-2 text-xs font-bold"
                        title="Phát âm tiếng Anh"
                      >
                        <Volume2 className="w-5 h-5" />
                        <span className="hidden sm:inline">Phát âm</span>
                      </button>
                    </div>

                    <div className="text-center space-y-3 my-auto py-4">
                      <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-foreground bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 dark:from-white dark:via-indigo-100 dark:to-white bg-clip-text text-transparent">
                        {currentCard?.word}
                      </h2>
                      <p className="text-lg sm:text-xl font-mono text-indigo-600 dark:text-indigo-400 font-extrabold">
                        {currentCard?.phonetic}
                      </p>
                    </div>

                    <div className="flex items-center justify-center gap-2 text-xs font-bold text-muted-foreground/70 group-hover:text-muted-foreground transition-colors pt-3 border-t border-border/40">
                      <RotateCw className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                      <span>Bấm vào thẻ để xem nghĩa Tiếng Việt & Ví dụ</span>
                    </div>
                  </div>
                ) : (
                  /* BACK CONTENT (VIETNAMESE MEANING + EXAMPLE + DICTIONARY) */
                  <div className="flex flex-col justify-between h-full space-y-6 animate-fade-in">
                    <div className="flex items-center justify-between border-b border-border/40 pb-3">
                      <span className="px-3 py-1 bg-amber-500/10 text-amber-700 dark:text-amber-300 text-xs font-black rounded-xl uppercase tracking-wider border border-amber-500/20 flex items-center gap-1.5">
                        <Sparkles className="w-4 h-4 text-amber-500" />
                        <span>Nghĩa & Ví dụ minh họa</span>
                      </span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          if (currentCard) searchAndOpenModal(currentCard.word);
                        }}
                        className="flex items-center gap-1.5 text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline cursor-pointer bg-indigo-500/10 px-3 py-1.5 rounded-xl transition-all border border-indigo-500/20"
                      >
                        <span>Từ điển chi tiết</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="space-y-4 my-auto text-center py-4">
                      <h3 className="text-3xl sm:text-5xl font-black text-indigo-600 dark:text-indigo-400 tracking-tight">
                        {currentCard?.meaning}
                      </h3>
                      <div className="p-4 sm:p-5 rounded-2xl bg-indigo-500/5 dark:bg-indigo-950/40 border border-indigo-500/15 text-xs sm:text-sm text-foreground text-left leading-relaxed space-y-2">
                        <p className="italic font-extrabold text-foreground sm:text-base">"{currentCard?.example}"</p>
                        <p className="text-indigo-600 dark:text-indigo-300 font-bold flex items-start gap-1">👉 {currentCard?.exampleTranslation}</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-center gap-2 text-xs font-bold text-muted-foreground pt-3 border-t border-border/40">
                      <RotateCw className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                      <span>Bấm vào thẻ để quay lại từ tiếng Anh</span>
                    </div>
                  </div>
                )}
              </Card>

              {/* Navigation Action Buttons */}
              <div className="flex items-center gap-3 pt-2">
                <Button
                  variant="outline"
                  size="lg"
                  onClick={handlePrevCard}
                  className="rounded-2xl gap-2 font-extrabold text-xs cursor-pointer border-border/50 h-11 px-5"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Từ trước</span>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setIsFlipped(!isFlipped)}
                  className="rounded-2xl gap-2 font-extrabold text-xs cursor-pointer border-border/50 h-11 px-5"
                >
                  <RotateCw className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                  <span>Lật thẻ</span>
                </Button>

                <Button
                  variant="primary"
                  size="lg"
                  onClick={handleNextCard}
                  className="rounded-2xl gap-2 font-extrabold text-xs bg-indigo-600 hover:bg-indigo-700 text-white shadow-md h-11 px-6 cursor-pointer"
                >
                  <span>Từ tiếp theo</span>
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ) : mode === 'quiz' ? (
            /* MULTIPLE CHOICE QUIZ MODE MATCHING USER MOCKUP DESIGN */
            <div className="max-w-3xl mx-auto py-2 space-y-5">
              {/* Quiz Configuration Controls Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 bg-card border border-border/50 p-3.5 rounded-2xl text-xs font-semibold shadow-sm">
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground font-bold">Chế độ hỏi:</span>
                  <div className="flex items-center bg-secondary/60 p-1 rounded-xl border border-border/40">
                    <button
                      onClick={() => { setQuizDirection('en-vi'); handleRestartQuiz(); }}
                      className={cn(
                        "px-3 py-1 rounded-lg text-xs font-extrabold transition-all cursor-pointer",
                        quizDirection === 'en-vi'
                          ? "bg-indigo-600 text-white shadow-sm"
                          : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      🇬🇧 ➔ 🇻🇳 Anh - Việt
                    </button>
                    <button
                      onClick={() => { setQuizDirection('vi-en'); handleRestartQuiz(); }}
                      className={cn(
                        "px-3 py-1 rounded-lg text-xs font-extrabold transition-all cursor-pointer",
                        quizDirection === 'vi-en'
                          ? "bg-indigo-600 text-white shadow-sm"
                          : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      🇻🇳 ➔ 🇬🇧 Việt - Anh
                    </button>
                  </div>
                </div>
              </div>

              {quizCompleted ? (
                /* QUIZ COMPLETED SUMMARY CARD */
                <Card className="p-8 sm:p-10 text-center space-y-6 shadow-xl border-indigo-500/20 rounded-3xl bg-card">
                  <div className="w-16 h-16 bg-amber-500/10 text-amber-500 rounded-full flex items-center justify-center mx-auto ring-8 ring-amber-500/5">
                    <Award className="w-8 h-8" />
                  </div>

                  <div className="space-y-2">
                    <h2 className="text-2xl font-black text-foreground">Hoàn thành bài Trắc Nghiệm! 🎉</h2>
                    <p className="text-xs text-muted-foreground">
                      Bạn đã hoàn thành lượt trắc nghiệm từ vựng cho <span className="font-bold text-foreground">{selectedUnit === 'all' ? 'Tất cả Unit' : `Unit ${currentUnitSpec?.unit}`}</span>.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-indigo-500/5 border border-indigo-500/10 max-w-sm mx-auto space-y-2">
                    <div className="text-4xl font-black text-indigo-600 dark:text-indigo-400 font-mono">
                      {quizScore} / {totalQuizInRound}
                    </div>
                    <p className="text-xs font-bold text-muted-foreground">
                      Tỷ lệ chính xác: <span className="text-emerald-600 dark:text-emerald-400 font-extrabold">{Math.round((quizScore / totalQuizInRound) * 100)}%</span>
                    </p>
                  </div>

                  <div className="pt-2 flex justify-center gap-3">
                    <Button
                      variant="primary"
                      onClick={handleRestartQuiz}
                      className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold rounded-2xl cursor-pointer shadow-lg shadow-indigo-500/20"
                    >
                      Làm bài trắc nghiệm mới 🔄
                    </Button>
                  </div>
                </Card>
              ) : currentQuizItem ? (
                /* QUIZ CARD MATCHING MOCKUP DESIGN EXACTLY */
                <Card className="p-6 sm:p-10 space-y-6 shadow-xl border-border/60 rounded-3xl bg-card relative overflow-hidden">
                  {/* Top Progress Bar & Counter */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-4">
                      {/* Smooth Progress Bar Line */}
                      <div className="flex-1 h-2 bg-secondary/80 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-indigo-600 dark:bg-indigo-500 rounded-full transition-all duration-300"
                          style={{
                            width: `${((quizIndex + (selectedQuizOption !== null ? 1 : 0)) / totalQuizInRound) * 100}%`
                          }}
                        />
                      </div>

                      {/* Counter Badge matching mockup (e.g. 0/10) */}
                      <span className="text-sm font-extrabold font-mono text-emerald-600 dark:text-emerald-400 shrink-0">
                        {quizScore}/{totalQuizInRound}
                      </span>
                    </div>
                  </div>

                  {/* Question Prompt & Main Word */}
                  <div className="text-center space-y-3 py-2">
                    <p className="text-xs sm:text-sm font-extrabold text-muted-foreground">
                      {quizDirection === 'en-vi' ? 'Nghĩa của từ này là gì?' : 'Từ tiếng Anh của nghĩa này là gì?'}
                    </p>

                    <div className="flex items-center justify-center gap-3">
                      <h2 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
                        {quizDirection === 'en-vi' ? currentQuizItem.word : currentQuizItem.meaning}
                      </h2>
                      {quizDirection === 'en-vi' && (
                        <button
                          onClick={() => handlePlayAudio(currentQuizItem.word)}
                          className="p-2.5 bg-indigo-100 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 rounded-2xl hover:scale-110 active:scale-95 transition-all cursor-pointer shadow-sm"
                          title="Nghe phát âm"
                        >
                          <Volume2 className="w-5 h-5" />
                        </button>
                      )}
                    </div>

                    {quizDirection === 'en-vi' && (
                      <p className="text-xs font-mono text-indigo-600 dark:text-indigo-400 font-bold">
                        {currentQuizItem.phonetic} • ({currentQuizItem.pos})
                      </p>
                    )}
                  </div>

                  {/* 6 Choice Buttons Grid (2 columns x 3 rows matching user image) */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                    {quizOptions.map((opt, idx) => {
                      const isSelected = selectedQuizOption === opt;
                      const correctValue = quizDirection === 'en-vi' ? currentQuizItem.meaning : currentQuizItem.word;
                      const isCorrect = opt === correctValue;

                      let btnStyle = "bg-card border-border/60 hover:border-indigo-500/50 hover:bg-secondary/40 text-foreground shadow-sm";

                      if (selectedQuizOption !== null) {
                        if (isCorrect) {
                          btnStyle = "bg-emerald-500/10 border-emerald-500 text-emerald-700 dark:text-emerald-300 font-bold shadow-md shadow-emerald-500/10";
                        } else if (isSelected) {
                          btnStyle = "bg-rose-500/10 border-rose-500 text-rose-700 dark:text-rose-300 font-bold shadow-md shadow-rose-500/10";
                        } else {
                          btnStyle = "opacity-40 border-border/30 bg-card text-muted-foreground";
                        }
                      }

                      return (
                        <button
                          key={idx}
                          onClick={() => handleQuizAnswer(opt)}
                          disabled={selectedQuizOption !== null}
                          className={cn(
                            "w-full p-4 sm:p-5 rounded-2xl border text-center text-xs sm:text-sm font-extrabold flex items-center justify-center gap-2 transition-all cursor-pointer min-h-[64px]",
                            btnStyle
                          )}
                        >
                          <span className="leading-snug">{opt}</span>
                          {selectedQuizOption !== null && isCorrect && (
                            <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 ml-auto" />
                          )}
                          {selectedQuizOption !== null && isSelected && !isCorrect && (
                            <XCircle className="w-5 h-5 text-rose-500 shrink-0 ml-auto" />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* Next Question Action Button */}
                  {selectedQuizOption !== null && (
                    <div className="pt-2 animate-fade-in">
                      <Button
                        variant="primary"
                        onClick={handleNextQuiz}
                        className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-xs sm:text-sm rounded-2xl cursor-pointer shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2"
                      >
                        <span>
                          {quizIndex + 1 < totalQuizInRound ? 'Câu tiếp theo →' : 'Xem kết quả bài trắc nghiệm 🎉'}
                        </span>
                      </Button>
                    </div>
                  )}
                </Card>
              ) : null}
            </div>
          ) : (
            /* LUYỆN VIẾT TỪ VỰNG MODE MATCHING MOCKUP DESIGN EXACTLY */
            <div className="max-w-3xl mx-auto py-2 space-y-6">
              {spellingCompleted ? (
                /* SPELLING COMPLETED SUMMARY CARD */
                <Card className="p-8 sm:p-10 text-center space-y-6 shadow-xl border-indigo-500/20 rounded-3xl bg-card">
                  <div className="w-16 h-16 bg-amber-500/10 text-amber-500 rounded-full flex items-center justify-center mx-auto ring-8 ring-amber-500/5">
                    <Award className="w-8 h-8" />
                  </div>

                  <div className="space-y-2">
                    <h2 className="text-2xl font-black text-foreground">Hoàn thành Luyện Viết Từ Vựng! 🎉</h2>
                    <p className="text-xs text-muted-foreground">
                      Bạn đã hoàn thành lượt luyện viết chính tả từ vựng cho <span className="font-bold text-foreground">{selectedUnit === 'all' ? 'Tất cả Unit' : `Unit ${currentUnitSpec?.unit}`}</span>.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-indigo-500/5 border border-indigo-500/10 max-w-sm mx-auto space-y-2">
                    <div className="text-4xl font-black text-indigo-600 dark:text-indigo-400 font-mono">
                      {spellingScore} / {totalSpellingInRound}
                    </div>
                    <p className="text-xs font-bold text-muted-foreground">
                      Tỷ lệ chính xác: <span className="text-emerald-600 dark:text-emerald-400 font-extrabold">{Math.round((spellingScore / totalSpellingInRound) * 100)}%</span>
                    </p>
                  </div>

                  <div className="pt-2 flex justify-center gap-3">
                    <Button
                      variant="primary"
                      onClick={handleRestartSpelling}
                      className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold rounded-2xl cursor-pointer shadow-lg shadow-indigo-500/20"
                    >
                      Luyện viết lượt mới 🔄
                    </Button>
                  </div>
                </Card>
              ) : currentSpellingItem ? (
                <Card className="p-6 sm:p-8 space-y-6 shadow-xl border-border/60 rounded-3xl bg-card">
                  {/* Top Banner inside Card matching user mockup */}
                  <div className="flex items-center gap-4 pb-4 border-b border-border/40">
                    <div className="w-12 h-12 rounded-2xl bg-amber-100 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0 shadow-sm">
                      <Pencil className="w-6 h-6" />
                    </div>
                    <div>
                      <h2 className="text-xl sm:text-2xl font-black text-foreground tracking-tight">
                        Luyện Viết Từ Vựng
                      </h2>
                      <p className="text-xs text-muted-foreground font-semibold">
                        Đọc hiểu nghĩa và lắp ghép chính xác từng ký tự
                      </p>
                    </div>
                    <span className="ml-auto text-xs font-extrabold font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-xl border border-emerald-500/20">
                      {spellingIndex + 1}/{totalSpellingInRound}
                    </span>
                  </div>

                  {/* Main Practice Inner Card */}
                  <div
                    onClick={() => spellingInputRef.current?.focus()}
                    className="bg-secondary/30 dark:bg-secondary/20 border border-border/50 rounded-3xl p-6 sm:p-8 text-center space-y-6 cursor-text relative"
                  >
                    {/* Hidden Input for Keyboard Typing */}
                    <input
                      ref={spellingInputRef}
                      type="text"
                      value={spellingInput}
                      onChange={(e) => {
                        const val = e.target.value;
                        if (val.length <= currentSpellingItem.word.length) {
                          setSpellingInput(val);
                          setSpellingFeedback(null);
                        }
                      }}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          if (spellingFeedback === 'correct') {
                            handleNextSpelling();
                          } else {
                            handleCheckSpelling();
                          }
                        }
                      }}
                      className="opacity-0 absolute inset-0 w-full h-full cursor-text"
                      autoFocus
                    />

                    {/* Target Meaning Header */}
                    <div className="space-y-2">
                      <span className="inline-block px-3 py-1 bg-secondary text-muted-foreground text-[11px] font-black uppercase tracking-wider rounded-full border border-border/40">
                        Nghĩa của từ
                      </span>
                      <h3 className="text-2xl sm:text-4xl font-black text-foreground tracking-tight">
                        {currentSpellingItem.meaning}
                      </h3>
                      <p className="text-xs font-mono text-indigo-600 dark:text-indigo-400 font-bold">
                        ({currentSpellingItem.pos}) • {currentSpellingItem.phonetic}
                      </p>
                    </div>

                    {/* Interactive Character Letter Boxes Grid */}
                    <div className="flex flex-wrap items-center justify-center gap-2 py-2">
                      {currentSpellingItem.word.split('').map((char, idx) => {
                        const isSpace = char === ' ' || char === '-';
                        if (isSpace) {
                          return <div key={idx} className="w-4" />;
                        }

                        const userChar = spellingInput[idx] || '';
                        const displayChar = showSpellingAnswer ? char : userChar;

                        let borderStyle = "border-border/60 bg-card text-foreground";
                        if (spellingFeedback === 'correct') {
                          borderStyle = "border-emerald-500 bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 font-black shadow-md shadow-emerald-500/10 animate-bounce-subtle";
                        } else if (spellingFeedback === 'wrong') {
                          borderStyle = "border-rose-500 bg-rose-500/10 text-rose-600 dark:text-rose-300 font-black shadow-md shadow-rose-500/10";
                        } else if (userChar || showSpellingAnswer) {
                          borderStyle = "border-indigo-600 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-black shadow-sm";
                        }

                        return (
                          <div
                            key={idx}
                            className={cn(
                              "w-10 h-12 sm:w-12 sm:h-14 rounded-2xl border-2 text-center text-lg sm:text-2xl font-black flex items-center justify-center transition-all uppercase select-none",
                              borderStyle
                            )}
                          >
                            {displayChar}
                          </div>
                        );
                      })}
                    </div>

                    {/* Feedback message */}
                    {spellingFeedback === 'correct' && (
                      <div className="text-emerald-600 dark:text-emerald-400 text-xs font-extrabold flex items-center justify-center gap-1.5 animate-fade-in">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Chính xác! Nhấn Enter hoặc bấm "Chuyển từ" để tiếp tục 🎉</span>
                      </div>
                    )}
                    {spellingFeedback === 'wrong' && (
                      <div className="text-rose-600 dark:text-rose-400 text-xs font-extrabold flex items-center justify-center gap-1.5 animate-fade-in">
                        <XCircle className="w-4 h-4" />
                        <span>Chưa chính xác, hãy thử lại hoặc bấm "Xem KQ"!</span>
                      </div>
                    )}
                  </div>

                  {/* Action Buttons Bar matching user mockup */}
                  <div className="flex items-center justify-between gap-3 pt-2">
                    <Button
                      variant="outline"
                      onClick={() => setShowSpellingAnswer(!showSpellingAnswer)}
                      className="rounded-2xl gap-2 text-xs font-extrabold cursor-pointer border-border/60 hover:bg-secondary px-4 py-2.5"
                    >
                      <Eye className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                      <span>{showSpellingAnswer ? 'Ẩn KQ' : 'Xem KQ'}</span>
                    </Button>

                    <div className="flex items-center gap-3">
                      <Button
                        variant="outline"
                        onClick={handleCheckSpelling}
                        className={cn(
                          "rounded-2xl gap-2 text-xs font-extrabold cursor-pointer px-5 py-2.5 transition-all",
                          spellingFeedback === 'correct'
                            ? "bg-emerald-500 text-white border-emerald-500 shadow-md"
                            : "border-border/60 hover:bg-secondary"
                        )}
                      >
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Kiểm tra</span>
                      </Button>

                      <Button
                        variant="primary"
                        onClick={handleNextSpelling}
                        className="rounded-2xl gap-2 text-xs font-extrabold bg-indigo-900 hover:bg-indigo-950 dark:bg-indigo-600 dark:hover:bg-indigo-700 text-white shadow-lg cursor-pointer px-6 py-2.5"
                      >
                        <span>Chuyển từ →</span>
                      </Button>
                    </div>
                  </div>
                </Card>
              ) : null}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default VocabularyPage;
