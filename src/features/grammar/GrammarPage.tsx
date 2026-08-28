import React, { useState, useMemo, useEffect } from 'react';
import {
  ENGLISH_GRAMMAR_TOPICS,
  IGrammarTopic,
  IGrammarLesson,
  IGrammarSegment
} from '../../data/english/grammar/englishGrammarData';
import {
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Search,
  CheckCircle2,
  Sparkles,
  Layers,
  ChevronDown,
  ChevronUp,
  X,
  ArrowRight,
  BookText,
  Puzzle
} from 'lucide-react';
import { Button } from '../../components/ui/button';
import { cn } from '../../utils/cn';
import { GrammarQuizView } from './components/GrammarQuizView';
import { GrammarSentenceBuildingView } from './components/GrammarSentenceBuildingView';

type SubTab = 'theory' | 'quiz' | 'sentence_building';

export const GrammarPage: React.FC = () => {
  // Topics & Lessons state
  const [selectedTopicId, setSelectedTopicId] = useState<string>('topic-01');
  const [selectedLessonId, setSelectedLessonId] = useState<string>('lesson-1-1');
  const [expandedTopicIds, setExpandedTopicIds] = useState<Record<string, boolean>>({
    'topic-01': true
  });
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeTab, setActiveTab] = useState<SubTab>('theory');
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState<boolean>(false);

  // Flattened all lessons for previous / next navigation
  const allLessons = useMemo(() => {
    const list: { topic: IGrammarTopic; lesson: IGrammarLesson; globalIndex: number }[] = [];
    let idx = 0;
    ENGLISH_GRAMMAR_TOPICS.forEach(topic => {
      topic.lessons.forEach(lesson => {
        list.push({ topic, lesson, globalIndex: idx++ });
      });
    });
    return list;
  }, []);

  const currentTopic = useMemo(() => {
    return ENGLISH_GRAMMAR_TOPICS.find(t => t.id === selectedTopicId) || ENGLISH_GRAMMAR_TOPICS[0];
  }, [selectedTopicId]);

  const currentLesson = useMemo(() => {
    return currentTopic.lessons.find(l => l.id === selectedLessonId) || currentTopic.lessons[0] || allLessons[0].lesson;
  }, [currentTopic, selectedLessonId, allLessons]);

  const currentLessonIndexInTopic = useMemo(() => {
    return currentTopic.lessons.findIndex(l => l.id === currentLesson.id);
  }, [currentTopic, currentLesson]);

  const currentGlobalIndex = useMemo(() => {
    return allLessons.findIndex(item => item.lesson.id === currentLesson.id);
  }, [allLessons, currentLesson]);

  const prevLessonItem = currentGlobalIndex > 0 ? allLessons[currentGlobalIndex - 1] : null;
  const nextLessonItem = currentGlobalIndex < allLessons.length - 1 ? allLessons[currentGlobalIndex + 1] : null;

  // Handle switching to a specific lesson
  const handleSelectLesson = (topicId: string, lessonId: string) => {
    setSelectedTopicId(topicId);
    setSelectedLessonId(lessonId);
    setExpandedTopicIds(prev => ({ ...prev, [topicId]: true }));
    setIsMobileDrawerOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNextLesson = () => {
    if (nextLessonItem) {
      handleSelectLesson(nextLessonItem.topic.id, nextLessonItem.lesson.id);
    }
  };

  const handlePrevLesson = () => {
    if (prevLessonItem) {
      handleSelectLesson(prevLessonItem.topic.id, prevLessonItem.lesson.id);
    }
  };

  const toggleTopicExpand = (topicId: string) => {
    setExpandedTopicIds(prev => ({
      ...prev,
      [topicId]: !prev[topicId]
    }));
  };

  // Search filter
  const filteredTopics = useMemo(() => {
    if (!searchQuery.trim()) return ENGLISH_GRAMMAR_TOPICS;
    const q = searchQuery.toLowerCase().trim();
    return ENGLISH_GRAMMAR_TOPICS.map(topic => {
      const matchedLessons = topic.lessons.filter(
        l => l.title.toLowerCase().includes(q) || l.lessonNumber.includes(q)
      );
      const isTopicMatch = topic.title.toLowerCase().includes(q) || topic.topicNumber.includes(q);
      if (isTopicMatch || matchedLessons.length > 0) {
        return {
          ...topic,
          lessons: isTopicMatch ? topic.lessons : matchedLessons
        };
      }
      return null;
    }).filter((t): t is IGrammarTopic => t !== null);
  }, [searchQuery]);

  // Auto expand topics when searching
  useEffect(() => {
    if (searchQuery.trim()) {
      const expandAll: Record<string, boolean> = {};
      filteredTopics.forEach(t => {
        expandAll[t.id] = true;
      });
      setExpandedTopicIds(expandAll);
    }
  }, [searchQuery, filteredTopics]);

  // Phân loại màu sắc huy hiệu theo ngữ cảnh ngữ pháp chuẩn ezonthi
  const getBadgeStyle = (content: string = '') => {
    const lower = content.toLowerCase().trim();
    // 1. Phủ định / Cảnh báo bẫy / Lưu ý / Tránh
    if (
      lower.includes('phủ định') ||
      lower.includes('bẫy') ||
      lower.includes('lưu ý') ||
      lower.includes('tránh') ||
      lower.includes('sai') ||
      lower.includes('không') ||
      lower.includes('tuyệt đối không') ||
      lower.includes('chỉ dùng với') ||
      lower.startsWith('-')
    ) {
      return "bg-rose-500/10 text-rose-700 dark:text-rose-300 border-rose-500/25";
    }
    // 2. Khẳng định / Đúng / Quy tắc chuẩn
    if (
      lower.includes('khẳng định') ||
      lower.includes('đúng') ||
      lower.includes('chính xác') ||
      lower.startsWith('+')
    ) {
      return "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/25";
    }
    // 3. Cấu trúc / Công thức / Động từ chính (MAKE, DO, HAVE, TAKE, WHO...)
    if (
      lower.includes('công thức') ||
      lower.includes('quy tắc') ||
      lower.includes('mô hình') ||
      lower.includes('make') ||
      lower.includes('do') ||
      lower.includes('have') ||
      lower.includes('take') ||
      lower.includes('s +') ||
      lower.includes('v +')
    ) {
      return "bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border-indigo-500/25";
    }
    // 4. Mặc định nhã nhặn theo ezonthi
    return "bg-secondary text-secondary-foreground border-border/80";
  };

  // Helper renderers for segments
  const renderSegment = (segment: IGrammarSegment, sIdx: number) => {
    switch (segment.type) {
      case 'pill':
        return (
          <span
            key={sIdx}
            className="inline-block bg-indigo-50/80 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 font-semibold px-2 py-0.5 mx-0.5 rounded-md text-xs sm:text-[13px] border border-indigo-200/60 dark:border-indigo-800/40 shadow-2xs font-mono"
          >
            {segment.content}
          </span>
        );
      case 'badge':
        return (
          <span
            key={sIdx}
            className={cn(
              "inline-flex items-center font-bold px-2 py-0.5 mx-0.5 rounded-md text-[11px] uppercase tracking-wide border shadow-2xs",
              getBadgeStyle(segment.content)
            )}
          >
            {segment.content}
          </span>
        );
      case 'bold':
        return (
          <strong key={sIdx} className="font-bold text-foreground mx-0.5">
            {segment.content}
          </strong>
        );
      case 'box':
        if (!segment.box) return null;
        return (
          <span
            key={sIdx}
            className="inline-flex items-center gap-1.5 bg-card border border-border/80 px-2.5 py-0.5 mx-1 rounded-lg text-xs font-semibold text-foreground shadow-2xs hover:border-indigo-500/40 transition-all"
          >
            <span className="text-muted-foreground">{segment.box.from}</span>
            <span className="text-indigo-600 dark:text-indigo-400 font-bold">➔</span>
            <span className="text-foreground font-bold">{segment.box.to}</span>
          </span>
        );
      default:
        return (
          <span key={sIdx} className="text-foreground/90 font-normal leading-relaxed">
            {segment.content}
          </span>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground pb-24">
      {/* Mobile Top Navigation & Drawer Toggle */}
      <div className="lg:hidden sticky top-0 z-30 bg-background/95 backdrop-blur-md border-b border-border/60 px-4 py-3 flex items-center justify-between gap-3 shadow-xs">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="w-8 h-8 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0">
            <BookText size={18} />
          </div>
          <div className="min-w-0">
            <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block truncate">
              Chủ điểm {currentTopic.topicNumber}: {currentTopic.title}
            </span>
            <h2 className="text-xs font-bold text-foreground truncate">
              {currentLesson.lessonNumber} {currentLesson.title}
            </h2>
          </div>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsMobileDrawerOpen(!isMobileDrawerOpen)}
          className="shrink-0 font-bold text-xs rounded-xl border-border cursor-pointer flex items-center gap-1.5"
        >
          <Layers size={14} /> Mục lục
        </Button>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 pt-4 sm:pt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* ============================================================ */}
          {/* CỘT TRÁI: SIDEBAR CHỦ ĐIỂM & BÀI HỌC                          */}
          {/* ============================================================ */}
          <aside
            className={cn(
              "lg:col-span-4 xl:col-span-3 space-y-4",
              "fixed lg:static inset-y-0 left-0 z-40 lg:z-auto bg-card lg:bg-transparent w-80 sm:w-88 lg:w-auto p-4 lg:p-0 shadow-2xl lg:shadow-none overflow-y-auto max-h-screen lg:max-h-none transition-transform duration-300 ease-in-out",
              isMobileDrawerOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
            )}
          >
            {/* Mobile Drawer Close Button */}
            <div className="lg:hidden flex items-center justify-between pb-3 border-b border-border/60 mb-2">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                  <Layers size={16} />
                </div>
                <span className="text-xs font-bold uppercase text-foreground">Mục lục Ngữ pháp</span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileDrawerOpen(false)}
                className="rounded-lg p-1.5"
              >
                <X size={16} />
              </Button>
            </div>

            {/* Sidebar Card Container */}
            <div className="bg-card border border-border/80 rounded-2xl p-4 sm:p-5 shadow-xs space-y-4">
              
              {/* Header Card */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
                  <BookText size={20} />
                </div>
                <div>
                  <h2 className="text-xs sm:text-sm font-black text-foreground uppercase tracking-tight">
                    CẨM NANG NGỮ PHÁP
                  </h2>
                  <p className="text-[11px] text-muted-foreground font-semibold">
                    20 Chủ điểm · 104 Bài học chuẩn
                  </p>
                </div>
              </div>

              {/* Search Bar */}
              <div className="relative">
                <Search
                  size={15}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
                />
                <input
                  type="text"
                  placeholder="Tìm bài học..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-8 py-2 rounded-xl bg-secondary/50 border border-border/70 text-xs font-semibold text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:bg-card transition-all"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground cursor-pointer"
                  >
                    <X size={13} />
                  </button>
                )}
              </div>

              {/* Topics List */}
              <div className="space-y-2.5 max-h-[calc(100vh-280px)] lg:max-h-[calc(100vh-220px)] overflow-y-auto pr-1">
                {filteredTopics.length > 0 ? (
                  filteredTopics.map((topic) => {
                    const isExpanded = !!expandedTopicIds[topic.id];
                    const isTopicActive = topic.id === selectedTopicId;
                    return (
                      <div
                        key={topic.id}
                        className={cn(
                          "border rounded-xl transition-all duration-200 overflow-hidden",
                          isTopicActive
                            ? "border-indigo-500/30 bg-indigo-500/[0.02] dark:bg-indigo-950/20"
                            : "border-border/60 hover:border-border bg-card"
                        )}
                      >
                        {/* Topic Header Accordion Button */}
                        <button
                          type="button"
                          onClick={() => toggleTopicExpand(topic.id)}
                          className="w-full p-3 flex items-center justify-between gap-2.5 text-left cursor-pointer hover:bg-secondary/30 transition-colors"
                        >
                          <div className="flex items-center gap-2.5 min-w-0">
                            <span
                              className={cn(
                                "w-6 h-6 rounded-lg flex items-center justify-center text-[11px] font-bold shrink-0 transition-colors",
                                isTopicActive
                                  ? "bg-indigo-600 text-white"
                                  : "bg-secondary text-muted-foreground"
                              )}
                            >
                              {topic.topicNumber}
                            </span>
                            <div className="min-w-0">
                              <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-wider block">
                                Chủ điểm {topic.topicNumber}
                              </span>
                              <h3 className="text-xs font-bold text-foreground truncate">
                                {topic.title}
                              </h3>
                            </div>
                          </div>
                          <div className="flex items-center gap-1.5 shrink-0">
                            <span className="text-[10px] font-semibold text-muted-foreground bg-secondary/80 px-2 py-0.5 rounded-full">
                              {topic.lessons.length} bài
                            </span>
                            {isExpanded ? (
                              <ChevronUp size={14} className="text-muted-foreground" />
                            ) : (
                              <ChevronDown size={14} className="text-muted-foreground" />
                            )}
                          </div>
                        </button>

                        {/* Lessons Sub-list */}
                        {isExpanded && (
                          <div className="px-2 pb-2.5 pt-1 space-y-1 border-t border-border/30 bg-secondary/[0.15]">
                            {topic.lessons.map((lesson) => {
                              const isLessonActive =
                                topic.id === selectedTopicId && lesson.id === selectedLessonId;
                              return (
                                <button
                                  key={lesson.id}
                                  type="button"
                                  onClick={() => handleSelectLesson(topic.id, lesson.id)}
                                  className={cn(
                                    "w-full text-left px-3 py-2 rounded-xl text-xs transition-all flex items-start gap-2 cursor-pointer",
                                    isLessonActive
                                      ? "bg-indigo-600 text-white font-bold shadow-xs"
                                      : "text-foreground/80 hover:bg-secondary/80 font-medium hover:text-foreground"
                                  )}
                                >
                                  <span
                                    className={cn(
                                      "mt-0.5 shrink-0 text-[10px]",
                                      isLessonActive ? "text-white" : "text-indigo-500 font-bold"
                                    )}
                                  >
                                    ★
                                  </span>
                                  <span className="line-clamp-2 leading-relaxed">
                                    <strong className="mr-1 opacity-90">{lesson.lessonNumber}</strong>
                                    {lesson.title}
                                  </span>
                                </button>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  })
                ) : (
                  <div className="p-6 text-center text-muted-foreground space-y-1">
                    <p className="text-xs font-bold">Không tìm thấy bài học nào</p>
                    <p className="text-[10px]">Thử tìm với từ khóa khác nhé.</p>
                  </div>
                )}
              </div>
            </div>
          </aside>

          {/* Backdrop for Mobile Drawer */}
          {isMobileDrawerOpen && (
            <div
              onClick={() => setIsMobileDrawerOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-xs z-30 lg:hidden"
            />
          )}

          {/* ============================================================ */}
          {/* CỘT PHẢI: KHUNG NỘI DUNG CHÍNH (THEORY & FORMULAS)           */}
          {/* ============================================================ */}
          <main className="lg:col-span-8 xl:col-span-9 space-y-5">
            
            {/* Top Bar Header & Navigation */}
            <div className="bg-card border border-border/80 rounded-2xl p-4 sm:p-5 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
              <Button
                variant="outline"
                size="sm"
                onClick={handlePrevLesson}
                disabled={!prevLessonItem}
                className="w-full sm:w-auto font-bold text-xs py-2 px-4 rounded-xl border-border text-foreground hover:border-indigo-500/40 disabled:opacity-40 cursor-pointer flex items-center justify-center gap-1.5"
              >
                <ChevronLeft size={15} /> Bài trước
              </Button>

              <div className="text-center space-y-0.5 min-w-0">
                <span className="inline-block px-2.5 py-0.5 rounded-md bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-[10px] font-bold uppercase tracking-wider">
                  Chủ điểm {currentTopic.topicNumber.replace(/^0/, '')}/20 · Bài {currentLessonIndexInTopic + 1}/{currentTopic.lessons.length}
                </span>
                <h1 className="text-sm sm:text-base font-black text-foreground truncate max-w-md sm:max-w-lg">
                  {currentLesson.title}
                </h1>
                <p className="text-[10px] text-muted-foreground font-semibold">
                  Chủ điểm {currentTopic.topicNumber.replace(/^0/, '')} - {currentTopic.title}
                </p>
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={handleNextLesson}
                disabled={!nextLessonItem}
                className="w-full sm:w-auto font-bold text-xs py-2 px-4 rounded-xl border-border text-foreground hover:border-indigo-500/40 disabled:opacity-40 cursor-pointer flex items-center justify-center gap-1.5"
              >
                Bài tiếp theo <ChevronRight size={15} />
              </Button>
            </div>

            {/* Sub-navigation Tabs: Lý thuyết | Trắc nghiệm | Ghép câu */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
              <button
                type="button"
                onClick={() => setActiveTab('theory')}
                className={cn(
                  "px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer flex items-center gap-2 shrink-0 border shadow-2xs",
                  activeTab === 'theory'
                    ? "bg-indigo-600 text-white border-indigo-600 shadow-xs"
                    : "bg-card text-muted-foreground hover:text-foreground border-border/60 hover:bg-secondary/50"
                )}
              >
                <BookOpen size={14} /> Lý thuyết
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('quiz')}
                className={cn(
                  "px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer flex items-center gap-2 shrink-0 border shadow-2xs",
                  activeTab === 'quiz'
                    ? "bg-indigo-600 text-white border-indigo-600 shadow-xs"
                    : "bg-card text-muted-foreground hover:text-foreground border-border/60 hover:bg-secondary/50"
                )}
              >
                <CheckCircle2 size={14} /> Trắc nghiệm
                <span className="text-[9px] bg-secondary/80 text-muted-foreground font-bold px-1.5 py-0.5 rounded-md">
                  Luyện tập
                </span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('sentence_building')}
                className={cn(
                  "px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer flex items-center gap-2 shrink-0 border shadow-2xs",
                  activeTab === 'sentence_building'
                    ? "bg-indigo-600 text-white border-indigo-600 shadow-xs"
                    : "bg-card text-muted-foreground hover:text-foreground border-border/60 hover:bg-secondary/50"
                )}
              >
                <Puzzle size={14} /> Ghép câu
                <span className="text-[9px] bg-secondary/80 text-muted-foreground font-bold px-1.5 py-0.5 rounded-md">
                  Phản xạ
                </span>
              </button>
            </div>

            {/* TAB: LÝ THUYẾT (THEORY CANVAS) */}
            {activeTab === 'theory' && (
              <div className="space-y-6 animate-in fade-in duration-300">
                
                {/* Hero Header Banner */}
                <div className="bg-card border border-border/80 rounded-2xl p-5 sm:p-6 shadow-xs relative overflow-hidden space-y-2">
                  <div className="absolute -right-10 -top-10 w-44 h-44 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
                  <div className="absolute -left-10 -bottom-10 w-44 h-44 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
                  
                  <div className="relative flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider">
                      <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                      <span>{currentLesson.heroBadge || 'Cẩm nang Ngữ pháp Tiếng Anh · Lớp 9 - 12'}</span>
                    </span>
                  </div>
                  
                  <h2 className="relative text-xl sm:text-2xl font-black text-foreground tracking-tight">
                    {currentLesson.title}
                  </h2>
                  <p className="relative text-xs sm:text-sm text-muted-foreground font-medium">
                    Chủ điểm {currentTopic.topicNumber.replace(/^0/, '')}: {currentTopic.title}
                  </p>
                </div>

                {/* Blocks List */}
                <div className="space-y-5">
                  {currentLesson.blocks.map((block, bIdx) => {
                    const isException = block.type === 'exception';
                    const isFormula = block.type === 'formula';
                    return (
                      <div
                        key={bIdx}
                        className={cn(
                          "border rounded-2xl p-5 sm:p-6 bg-card space-y-4 shadow-xs transition-all",
                          isException
                            ? "border-rose-200 dark:border-rose-900/30 bg-rose-500/[0.02]"
                            : isFormula
                            ? "border-purple-200 dark:border-purple-900/30 bg-purple-500/[0.02]"
                            : "border-border/80"
                        )}
                      >
                        {/* Block Header */}
                        <div className="flex items-start gap-3">
                          <span
                            className={cn(
                              "w-7 h-7 rounded-xl flex items-center justify-center text-xs font-bold shrink-0 shadow-2xs border",
                              isException
                                ? "bg-rose-500/15 text-rose-600 dark:text-rose-400 border-rose-500/20"
                                : isFormula
                                ? "bg-purple-500/15 text-purple-600 dark:text-purple-400 border-purple-500/20"
                                : "bg-indigo-500/15 text-indigo-600 dark:text-indigo-400 border-indigo-500/20"
                            )}
                          >
                            {block.blockNumber}
                          </span>
                          <div>
                            <span
                              className={cn(
                                "text-[10px] font-black uppercase tracking-wider block",
                                isException
                                  ? "text-rose-600 dark:text-rose-400"
                                  : isFormula
                                  ? "text-purple-600 dark:text-purple-400"
                                  : "text-indigo-600 dark:text-indigo-400"
                              )}
                            >
                              {block.badgeTitle}
                            </span>
                            <h3 className="text-sm sm:text-base font-bold text-foreground">
                              {block.title}
                            </h3>
                          </div>
                        </div>

                        {/* Block Rows */}
                        {block.rows && block.rows.length > 0 && (
                          <div className="space-y-2.5 pt-1">
                            {block.rows.map((row, rIdx) => (
                              <div
                                key={rIdx}
                                className="bg-slate-50/70 dark:bg-slate-900/40 border border-slate-200/70 dark:border-slate-800/60 rounded-xl p-3 sm:p-3.5 flex items-start gap-2.5 text-xs sm:text-[13px] leading-relaxed hover:bg-slate-100/70 dark:hover:bg-slate-900/70 transition-colors"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 dark:bg-indigo-400 mt-2 shrink-0" />
                                <div className="leading-relaxed flex flex-wrap items-center">
                                  {row.segments.map((seg, sIdx) => renderSegment(seg, sIdx))}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Exception / Custom Pill Boxes Grid */}
                        {block.pillBoxes && block.pillBoxes.length > 0 && (
                          <div className="pt-2 flex flex-wrap gap-2.5">
                            {block.pillBoxes.map((pill, pIdx) => (
                              <div
                                key={pIdx}
                                className="bg-card border border-amber-500/30 rounded-xl px-3.5 py-2 shadow-2xs flex items-center gap-2 text-xs font-bold hover:border-amber-500/60 hover:-translate-y-0.5 transition-all cursor-default"
                              >
                                <span className="text-foreground">{pill.from}</span>
                                <span className="text-amber-500 font-bold">➔</span>
                                <span className="text-amber-600 dark:text-amber-400">{pill.to}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Sẵn sàng thực hành CTA Card */}
                <div className="bg-card border border-indigo-500/20 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs relative overflow-hidden">
                  <div className="space-y-1 text-center sm:text-left">
                    <h3 className="text-sm sm:text-base font-bold text-foreground">
                      Sẵn sàng thực hành kiến thức vừa học?
                    </h3>
                    <p className="text-xs text-muted-foreground font-medium">
                      Làm bài trắc nghiệm hoặc ghép câu phản xạ để ghi nhớ sâu các điểm ngữ pháp này.
                    </p>
                  </div>
                  <div className="flex items-center gap-2.5 w-full sm:w-auto shrink-0">
                    <Button
                      onClick={() => setActiveTab('quiz')}
                      className="flex-1 sm:flex-none font-bold text-xs py-2.5 px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl shadow-xs cursor-pointer flex items-center justify-center gap-1.5"
                    >
                      Làm trắc nghiệm <ArrowRight size={13} />
                    </Button>
                    <Button
                      onClick={() => setActiveTab('sentence_building')}
                      className="flex-1 sm:flex-none font-bold text-xs py-2.5 px-4 bg-purple-600 hover:bg-purple-700 text-white rounded-xl shadow-xs cursor-pointer flex items-center justify-center gap-1.5"
                    >
                      Luyện ghép câu <ArrowRight size={13} />
                    </Button>
                  </div>
                </div>

                {/* Bottom Previous / Next Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {prevLessonItem ? (
                    <button
                      type="button"
                      onClick={handlePrevLesson}
                      className="text-left bg-card border border-border/80 hover:border-indigo-500/50 p-4 rounded-xl transition-all hover:-translate-y-0.5 shadow-2xs group cursor-pointer space-y-1"
                    >
                      <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                        <ChevronLeft size={12} /> BÀI TRƯỚC
                      </span>
                      <h4 className="text-xs font-bold text-foreground line-clamp-1">
                        {prevLessonItem.lesson.title}
                      </h4>
                    </button>
                  ) : (
                    <div className="bg-secondary/20 border border-dashed border-border/60 p-4 rounded-xl opacity-60 space-y-1">
                      <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-wider block">
                        BÀI TRƯỚC
                      </span>
                      <h4 className="text-xs font-medium text-muted-foreground">Đầu danh sách</h4>
                    </div>
                  )}

                  {nextLessonItem ? (
                    <button
                      type="button"
                      onClick={handleNextLesson}
                      className="text-right bg-card border border-border/80 hover:border-indigo-500/50 p-4 rounded-xl transition-all hover:-translate-y-0.5 shadow-2xs group cursor-pointer space-y-1"
                    >
                      <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-wider flex items-center justify-end gap-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                        BÀI TIẾP THEO <ChevronRight size={12} />
                      </span>
                      <h4 className="text-xs font-bold text-foreground line-clamp-1">
                        {nextLessonItem.lesson.title}
                      </h4>
                    </button>
                  ) : (
                    <div className="bg-secondary/20 border border-dashed border-border/60 p-4 rounded-xl opacity-60 space-y-1 text-right">
                      <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-wider block">
                        BÀI TIẾP THEO
                      </span>
                      <h4 className="text-xs font-medium text-muted-foreground">Cuối danh sách</h4>
                    </div>
                  )}
                </div>

              </div>
            )}

            {/* TAB: TRẮC NGHIỆM (QUIZ PRACTICE ENGINE) */}
            {activeTab === 'quiz' && (
              <GrammarQuizView
                lesson={currentLesson}
                onBackToTheory={() => setActiveTab('theory')}
                onNextLesson={nextLessonItem ? handleNextLesson : undefined}
              />
            )}

            {/* TAB: GHÉP CÂU (SENTENCE BUILDING ENGINE) */}
            {activeTab === 'sentence_building' && (
              <GrammarSentenceBuildingView
                lesson={currentLesson}
                onBackToTheory={() => setActiveTab('theory')}
                onNextLesson={nextLessonItem ? handleNextLesson : undefined}
              />
            )}

          </main>

        </div>
      </div>
    </div>
  );
};

export default GrammarPage;
