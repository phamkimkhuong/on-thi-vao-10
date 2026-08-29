import React, { useEffect, useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  Atom,
  BrainCircuit,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Flame,
  RotateCcw,
  Target,
  Trophy,
  XCircle
} from 'lucide-react';
import LatexRenderer from '@/components/common/LatexRenderer';
import QuestionStimulusRenderer from '@/components/common/QuestionStimulusRenderer';
import { Button } from '@/components/ui/button';
import { advancedPhysics10Questions, advancedPhysics10Solutions, advancedPhysics10Topics } from '@/data/grade10/physics/advanced';
import type { AdvancedPhysicsLevel, AdvancedPhysicsProblemLength } from '@/data/grade10/physics/advanced';
import { ROUTES } from '@/constants/routes';
import { useAppStore } from '@/services/store';
import { cn } from '@/utils/cn';

interface StoredAttempt {
  answer: string;
  isCorrect: boolean;
  updatedAt: string;
}

type StoredProgress = Record<string, StoredAttempt>;

const levelLabel: Record<AdvancedPhysicsLevel, string> = {
  hard: 'Khó',
  very_hard: 'Rất khó',
  extreme: 'Cực khó'
};

const levelStyle: Record<AdvancedPhysicsLevel, string> = {
  hard: 'bg-sky-500/10 text-sky-700 dark:text-sky-300 border-sky-500/20',
  very_hard: 'bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/20',
  extreme: 'bg-rose-500/10 text-rose-700 dark:text-rose-300 border-rose-500/20'
};

const problemLengthLabel: Record<AdvancedPhysicsProblemLength, string> = {
  compact: 'Bài cô đọng',
  extended: 'Bài tổng hợp dài',
  olympiad: 'Bài Olympic'
};

const optionLetters = ['A', 'B', 'C', 'D'];

const AdvancedPhysics10: React.FC = () => {
  const navigate = useNavigate();
  const { selectedGrade, selectedSubject, user } = useAppStore();
  const progressKey = `ezonthi_phy10_advanced_progress_${user?.uid || 'guest'}`;
  const [progress, setProgress] = useState<StoredProgress>({});
  const [activeTopicId, setActiveTopicId] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(progressKey);
      setProgress(saved ? JSON.parse(saved) : {});
    } catch {
      setProgress({});
    }
  }, [progressKey]);

  const topicQuestions = useMemo(
    () => activeTopicId
      ? advancedPhysics10Questions.filter(question => question.topicId === activeTopicId)
      : [],
    [activeTopicId]
  );

  const currentQuestion = topicQuestions[currentIndex];
  const currentSolution = currentQuestion
    ? advancedPhysics10Solutions.find(solution => solution.questionId === currentQuestion.id)
    : undefined;

  const totalCompleted = Object.keys(progress).filter(id => advancedPhysics10Questions.some(question => question.id === id)).length;
  const totalCorrect = Object.entries(progress).filter(([id, attempt]) => (
    attempt.isCorrect && advancedPhysics10Questions.some(question => question.id === id)
  )).length;
  const accuracy = totalCompleted ? Math.round(totalCorrect / totalCompleted * 100) : 0;

  const resetQuestionState = () => {
    setSelectedAnswer(null);
    setIsSubmitted(false);
  };

  const openTopic = (topicId: string) => {
    const questions = advancedPhysics10Questions.filter(question => question.topicId === topicId);
    const firstUnanswered = questions.findIndex(question => !progress[question.id]);
    setActiveTopicId(topicId);
    setCurrentIndex(firstUnanswered >= 0 ? firstUnanswered : 0);
    resetQuestionState();
  };

  const moveToQuestion = (index: number) => {
    setCurrentIndex(index);
    resetQuestionState();
  };

  const submitAnswer = () => {
    if (!currentQuestion || !selectedAnswer || isSubmitted) return;
    const nextProgress: StoredProgress = {
      ...progress,
      [currentQuestion.id]: {
        answer: selectedAnswer,
        isCorrect: selectedAnswer === currentQuestion.correctAnswer,
        updatedAt: new Date().toISOString()
      }
    };
    setProgress(nextProgress);
    localStorage.setItem(progressKey, JSON.stringify(nextProgress));
    setIsSubmitted(true);
  };

  const clearProgress = () => {
    if (!window.confirm('Xóa toàn bộ tiến độ Chuyên đề nâng cao Vật lí 10?')) return;
    localStorage.removeItem(progressKey);
    setProgress({});
    resetQuestionState();
  };

  if (selectedGrade !== 'grade10' || selectedSubject !== 'physics') {
    return (
      <div className="max-w-2xl mx-auto py-16 px-4 text-center space-y-5">
        <div className="w-16 h-16 mx-auto rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center">
          <Atom size={34} />
        </div>
        <h1 className="text-2xl font-black">Chuyên đề này dành cho Vật lí lớp 10</h1>
        <p className="text-sm text-muted-foreground font-semibold">Hãy chọn “Vật lý - Lớp 10” trong thanh môn học để mở ngân hàng bài nâng cao.</p>
        <Button onClick={() => navigate(ROUTES.ROADMAP)}>Về lộ trình học</Button>
      </div>
    );
  }

  if (!activeTopicId || !currentQuestion) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-7">
        <Helmet>
          <title>Chuyên đề nâng cao Vật lí 10 | ezonthi</title>
          <meta name="robots" content="noindex, follow" />
        </Helmet>

        <section className="relative overflow-hidden rounded-[28px] border border-slate-200/70 dark:border-slate-700/60 bg-[linear-gradient(135deg,rgba(8,145,178,0.12),rgba(255,255,255,0.92)_48%,rgba(249,115,22,0.10))] dark:bg-[linear-gradient(135deg,rgba(8,145,178,0.16),rgba(15,23,42,0.96)_48%,rgba(249,115,22,0.12))] p-6 sm:p-9 shadow-sm">
          <div className="absolute -right-14 -top-16 w-52 h-52 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="relative grid lg:grid-cols-[1fr_auto] gap-7 items-end">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-950 text-white dark:bg-cyan-300 dark:text-slate-950 text-[11px] font-black uppercase tracking-[0.14em]">
                <Trophy size={14} /> HSG · Olympic · Trường chuyên
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-950 dark:text-white">Chuyên đề nâng cao Vật lí 10</h1>
                <p className="mt-3 max-w-3xl text-sm sm:text-base font-semibold leading-7 text-slate-600 dark:text-slate-300">
                  Mỗi bài là một thử thách độc lập. Không chia nhỏ bước giải, không gợi ý trước khi nộp và không yêu cầu nhập đáp án tự luận.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {(['hard', 'very_hard', 'extreme'] as AdvancedPhysicsLevel[]).map(level => (
                  <span key={level} className={cn('px-3 py-1.5 rounded-full border text-xs font-black', levelStyle[level])}>
                    {levelLabel[level]}: {advancedPhysics10Questions.filter(question => question.advancedLevel === level).length} câu
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 min-w-[290px]">
              <StatBox label="Đã làm" value={`${totalCompleted}/${advancedPhysics10Questions.length}`} />
              <StatBox label="Đúng" value={String(totalCorrect)} />
              <StatBox label="Chính xác" value={`${accuracy}%`} />
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.14em] text-cyan-700 dark:text-cyan-300">Chọn chiến trường</p>
              <h2 className="mt-1 text-2xl font-black">7 mảng bài tập nâng cao</h2>
            </div>
            {totalCompleted > 0 && (
              <button onClick={clearProgress} className="text-xs font-bold text-muted-foreground hover:text-rose-600 flex items-center gap-1.5 cursor-pointer">
                <RotateCcw size={13} /> Xóa tiến độ
              </button>
            )}
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
            {advancedPhysics10Topics.map((topic, index) => {
              const questions = advancedPhysics10Questions.filter(question => question.topicId === topic.id);
              const completed = questions.filter(question => progress[question.id]).length;
              const correct = questions.filter(question => progress[question.id]?.isCorrect).length;
              return (
                <button
                  key={topic.id}
                  onClick={() => openTopic(topic.id)}
                  className="group text-left p-5 rounded-2xl border border-border/70 bg-card hover:border-cyan-600/40 hover:shadow-lg hover:shadow-cyan-950/5 transition-all cursor-pointer"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="w-10 h-10 rounded-xl bg-slate-950 text-white dark:bg-cyan-300 dark:text-slate-950 flex items-center justify-center font-black text-sm">{String(index + 1).padStart(2, '0')}</span>
                    <span className="text-[11px] font-black text-muted-foreground">{completed}/{questions.length} câu</span>
                  </div>
                  <h3 className="mt-4 text-base font-black group-hover:text-cyan-700 dark:group-hover:text-cyan-300 transition-colors">{topic.title}</h3>
                  <p className="mt-2 text-xs font-semibold leading-5 text-muted-foreground min-h-10">{topic.description}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {topic.focus.map(item => <span key={item} className="px-2 py-1 bg-secondary/70 rounded-md text-[10px] font-bold text-muted-foreground">{item}</span>)}
                  </div>
                  <div className="mt-5 pt-4 border-t border-border/50 flex items-center justify-between">
                    <span className="text-xs font-black text-emerald-700 dark:text-emerald-300">{correct} câu đúng</span>
                    <span className="inline-flex items-center gap-1 text-xs font-black text-cyan-700 dark:text-cyan-300">Vào làm <ChevronRight size={14} /></span>
                  </div>
                </button>
              );
            })}
          </div>
        </section>
      </div>
    );
  }

  const activeTopic = advancedPhysics10Topics.find(topic => topic.id === activeTopicId)!;
  const isCorrect = selectedAnswer === currentQuestion.correctAnswer;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 sm:py-7 space-y-5">
      <Helmet>
        <title>{activeTopic.shortTitle} nâng cao – Vật lí 10 | ezonthi</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 p-4 rounded-2xl border border-border/70 bg-card shadow-sm">
        <div className="flex items-center gap-3 min-w-0">
          <Button variant="outline" size="sm" onClick={() => { setActiveTopicId(null); resetQuestionState(); }} className="shrink-0">
            <ArrowLeft size={14} /> Chuyên đề
          </Button>
          <div className="min-w-0">
            <p className="text-[10px] font-black uppercase tracking-wider text-cyan-700 dark:text-cyan-300">Vật lí 10 nâng cao</p>
            <h1 className="text-sm sm:text-base font-black truncate">{activeTopic.title}</h1>
          </div>
        </div>
        <div className="flex gap-1.5 overflow-x-auto pb-1 lg:pb-0">
          {topicQuestions.map((question, index) => {
            const attempt = progress[question.id];
            return (
              <button
                key={question.id}
                onClick={() => moveToQuestion(index)}
                className={cn(
                  'w-8 h-8 shrink-0 rounded-lg border text-[11px] font-black transition-all cursor-pointer',
                  index === currentIndex
                    ? 'bg-slate-950 text-white border-slate-950 dark:bg-cyan-300 dark:text-slate-950 dark:border-cyan-300'
                    : attempt?.isCorrect
                      ? 'bg-emerald-500/10 text-emerald-700 border-emerald-500/25'
                      : attempt
                        ? 'bg-rose-500/10 text-rose-700 border-rose-500/25'
                        : 'bg-background text-muted-foreground border-border hover:border-cyan-500/40'
                )}
              >
                {index + 1}
              </button>
            );
          })}
        </div>
      </div>

      <div className={cn('grid gap-5', isSubmitted ? 'lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.75fr)]' : 'max-w-4xl mx-auto')}>
        <section className="rounded-2xl border border-border/70 bg-card shadow-sm overflow-hidden">
          <div className="px-5 py-4 border-b border-border/60 bg-secondary/25 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className={cn('px-2.5 py-1 rounded-full border text-[10px] font-black uppercase tracking-wider', levelStyle[currentQuestion.advancedLevel])}>
                {levelLabel[currentQuestion.advancedLevel]}
              </span>
              {currentQuestion.problemLength !== 'compact' && (
                <span className="px-2.5 py-1 rounded-full border border-violet-500/20 bg-violet-500/10 text-[10px] font-black uppercase tracking-wider text-violet-700 dark:text-violet-300">
                  {problemLengthLabel[currentQuestion.problemLength]}
                </span>
              )}
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-muted-foreground"><Clock3 size={13} /> {currentQuestion.estimatedMinutes} phút</span>
            </div>
            <span className="text-xs font-black text-muted-foreground">Câu {currentIndex + 1}/{topicQuestions.length}</span>
          </div>

          <div className="p-5 sm:p-7 space-y-6">
            <QuestionStimulusRenderer question={currentQuestion} />
            <div className="flex items-start gap-3">
              <span className="w-9 h-9 shrink-0 rounded-xl bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 flex items-center justify-center"><BrainCircuit size={19} /></span>
              <div className="text-sm sm:text-base font-bold leading-7 text-foreground"><LatexRenderer text={currentQuestion.content} /></div>
            </div>

            <div className="grid gap-3">
              {currentQuestion.options.map((option, index) => {
                const letter = optionLetters[index];
                const selected = selectedAnswer === letter;
                const correctOption = currentQuestion.correctAnswer === letter;
                return (
                  <button
                    key={letter}
                    disabled={isSubmitted}
                    onClick={() => setSelectedAnswer(letter)}
                    className={cn(
                      'w-full min-h-14 px-4 py-3 rounded-xl border text-left flex items-center gap-3 transition-all cursor-pointer disabled:cursor-default',
                      !isSubmitted && selected && 'border-cyan-600 bg-cyan-500/8 ring-2 ring-cyan-500/10',
                      !isSubmitted && !selected && 'border-border/70 hover:border-cyan-500/35 hover:bg-secondary/30',
                      isSubmitted && correctOption && 'border-emerald-500/50 bg-emerald-500/8',
                      isSubmitted && selected && !correctOption && 'border-rose-500/50 bg-rose-500/8'
                    )}
                  >
                    <span className={cn(
                      'w-8 h-8 rounded-lg border flex items-center justify-center shrink-0 text-xs font-black',
                      !isSubmitted && selected ? 'bg-cyan-700 text-white border-cyan-700' :
                        isSubmitted && correctOption ? 'bg-emerald-600 text-white border-emerald-600' :
                          isSubmitted && selected ? 'bg-rose-600 text-white border-rose-600' : 'bg-secondary text-muted-foreground border-border'
                    )}>{letter}</span>
                    <span className="text-sm font-semibold"><LatexRenderer text={option} /></span>
                    {isSubmitted && correctOption && <CheckCircle2 size={18} className="ml-auto text-emerald-600 shrink-0" />}
                    {isSubmitted && selected && !correctOption && <XCircle size={18} className="ml-auto text-rose-600 shrink-0" />}
                  </button>
                );
              })}
            </div>

            {!isSubmitted ? (
              <Button onClick={submitAnswer} disabled={!selectedAnswer} size="lg" className="w-full bg-slate-950 hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200 font-black">
                Chốt đáp án <Target size={17} />
              </Button>
            ) : (
              <div className="space-y-3">
                <div className={cn('p-4 rounded-xl border flex items-start gap-3', isCorrect ? 'bg-emerald-500/8 border-emerald-500/25' : 'bg-rose-500/8 border-rose-500/25')}>
                  {isCorrect ? <CheckCircle2 className="text-emerald-600 shrink-0" /> : <XCircle className="text-rose-600 shrink-0" />}
                  <div>
                    <p className="font-black text-sm">{isCorrect ? 'Chính xác.' : 'Chưa đúng.'}</p>
                    <p className="text-xs font-semibold text-muted-foreground mt-1">Đáp án đúng là {currentQuestion.correctAnswer}. Lời giải trọn bài đã được mở.</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline" onClick={resetQuestionState}><RotateCcw size={14} /> Làm lại</Button>
                  <Button onClick={() => {
                    if (currentIndex < topicQuestions.length - 1) moveToQuestion(currentIndex + 1);
                    else { setActiveTopicId(null); resetQuestionState(); }
                  }} className="bg-slate-950 hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950">
                    {currentIndex < topicQuestions.length - 1 ? 'Câu tiếp theo' : 'Hoàn thành'} <ArrowRight size={14} />
                  </Button>
                </div>
              </div>
            )}
          </div>
        </section>

        {isSubmitted && currentSolution && (
          <aside className="rounded-2xl border border-border/70 bg-card shadow-sm overflow-hidden h-fit">
            <div className="px-5 py-4 border-b border-border/60 bg-amber-500/6">
              <p className="text-[10px] font-black uppercase tracking-[0.13em] text-amber-700 dark:text-amber-300">Lời giải sau khi nộp</p>
              <h2 className="mt-1 font-black flex items-center gap-2"><Flame size={17} className="text-orange-600" /> Mấu chốt của bài</h2>
            </div>
            <div className="p-5 space-y-5">
              <div className="p-4 rounded-xl bg-cyan-500/7 border border-cyan-500/15 text-sm font-semibold leading-6">
                <LatexRenderer text={currentSolution.insight} />
              </div>
              <div className="space-y-5">
                {currentSolution.detailedSteps.map(step => (
                  <div key={step.order} className="flex gap-3">
                    <span className="w-7 h-7 rounded-lg bg-slate-950 text-white dark:bg-cyan-300 dark:text-slate-950 flex items-center justify-center text-[11px] font-black shrink-0">{step.order}</span>
                    <div className="min-w-0 space-y-1.5">
                      <h3 className="text-sm font-black">{step.title}</h3>
                      <div className="text-xs font-semibold leading-5 text-muted-foreground"><LatexRenderer text={step.explanation} /></div>
                      {step.formula && <div className="p-3 rounded-lg bg-secondary/50 border border-border/50 text-sm overflow-x-auto"><LatexRenderer text={step.formula} block /></div>}
                      {step.result && <div className="text-sm font-black text-emerald-700 dark:text-emerald-300"><LatexRenderer text={step.result} /></div>}
                    </div>
                  </div>
                ))}
              </div>
              <div className="pt-4 border-t border-border/60">
                <h3 className="text-xs font-black text-rose-700 dark:text-rose-300">Bẫy dễ mắc</h3>
                <ul className="mt-2 space-y-1.5 text-xs font-semibold text-muted-foreground">
                  {currentSolution.commonMistakes.map(mistake => <li key={mistake}>• <LatexRenderer text={mistake} /></li>)}
                </ul>
              </div>
            </div>
          </aside>
        )}
      </div>
    </div>
  );
};

const StatBox: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="rounded-xl border border-slate-200/70 dark:border-slate-700/70 bg-white/75 dark:bg-slate-950/50 px-3 py-3 text-center">
    <div className="text-lg font-black text-slate-950 dark:text-white">{value}</div>
    <div className="mt-0.5 text-[9px] font-black uppercase tracking-wider text-slate-500">{label}</div>
  </div>
);

export default AdvancedPhysics10;
