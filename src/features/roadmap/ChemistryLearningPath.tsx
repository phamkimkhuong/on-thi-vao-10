import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, BookOpenCheck, CheckCircle2, CircleDashed, Clock3, FlaskConical, LockKeyhole, Wrench } from 'lucide-react';
import type { LearningOutcomeStatus, Topic } from '@/types';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/utils/cn';
import { buildLearningOutcomeStatuses, getRecommendedOutcome } from '@/utils/learningPath';

interface ChemistryLearningPathProps {
  topics: Topic[];
  outcomes: LearningOutcomeStatus['outcome'][];
  masteryLevels: Record<string, number>;
}

const stateMeta: Record<LearningOutcomeStatus['state'], { label: string; classes: string }> = {
  mastered: { label: 'Đã làm chủ', classes: 'text-emerald-700 bg-emerald-500/10 border-emerald-500/20 dark:text-emerald-300' },
  in_progress: { label: 'Đang học', classes: 'text-amber-700 bg-amber-500/10 border-amber-500/20 dark:text-amber-300' },
  ready: { label: 'Sẵn sàng', classes: 'text-primary bg-primary/10 border-primary/20' },
  blocked: { label: 'Cần tiền đề', classes: 'text-muted-foreground bg-muted border-border' },
  not_started: { label: 'Chưa bắt đầu', classes: 'text-muted-foreground bg-muted border-border' }
};

export const ChemistryLearningPath: React.FC<ChemistryLearningPathProps> = ({ topics, outcomes, masteryLevels }) => {
  const navigate = useNavigate();
  const statuses = buildLearningOutcomeStatuses(outcomes, masteryLevels);
  const recommended = getRecommendedOutcome(statuses);
  const coreStatuses = statuses.filter(item => item.outcome.scope === 'core');
  const bridgeStatuses = statuses.filter(item => item.outcome.scope === 'bridge');
  const masteredCore = coreStatuses.filter(item => item.state === 'mastered').length;

  const openOutcome = (status: LearningOutcomeStatus) => {
    const questionTypeId = status.outcome.questionTypeIds[0];
    if (questionTypeId && status.state !== 'blocked') navigate(`/question-types/${questionTypeId}`);
  };

  const renderOutcome = (status: LearningOutcomeStatus) => {
    const meta = stateMeta[status.state];
    const actionable = status.outcome.questionTypeIds.length > 0 && status.state !== 'blocked';
    const Icon = status.state === 'mastered' ? CheckCircle2 : status.state === 'blocked' ? LockKeyhole : CircleDashed;

    return (
      <Card key={status.outcome.id} className={cn('border rounded-2xl shadow-sm', status.state === 'blocked' ? 'opacity-75' : 'hover:border-primary/30')}>
        <CardContent className="p-5 space-y-3">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-start gap-3 min-w-0">
              <Icon size={20} className={cn('mt-0.5 shrink-0', status.state === 'mastered' ? 'text-emerald-500' : 'text-primary')} aria-hidden="true" />
              <div>
                <h4 className="text-sm font-extrabold text-foreground leading-snug">{status.outcome.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed mt-1">{status.outcome.description}</p>
              </div>
            </div>
            <span className={cn('shrink-0 text-[10px] font-black px-2 py-1 rounded-lg border', meta.classes)}>{meta.label}</span>
          </div>

          <div className="flex flex-wrap gap-2 text-[10px] font-bold text-muted-foreground">
            {status.outcome.estimatedMinutes && <span className="inline-flex items-center gap-1"><Clock3 size={12} /> {status.outcome.estimatedMinutes} phút</span>}
            <span>{status.outcome.evidenceTypes.length} loại bằng chứng học tập</span>
            {status.masteryScore > 0 && <span>{status.masteryScore}% mastery hiện tại</span>}
          </div>

          {status.unmetPrerequisites.length > 0 && (
            <div className="text-[11px] leading-relaxed rounded-xl bg-muted/60 border border-border/60 px-3 py-2.5">
              <strong>Cần hoàn thành trước:</strong> {status.unmetPrerequisites.map(item => item.title).join(', ')}.
            </div>
          )}

          {actionable && (
            <button type="button" onClick={() => openOutcome(status)} className="min-h-11 w-full flex items-center justify-center gap-2 rounded-xl bg-primary/10 hover:bg-primary/15 text-primary text-xs font-extrabold transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
              {status.state === 'in_progress' ? 'Tiếp tục học' : status.state === 'mastered' ? 'Ôn lại' : 'Bắt đầu học'} <ArrowRight size={14} />
            </button>
          )}
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="space-y-10 max-w-5xl mx-auto pb-12">
      <header className="space-y-4">
        <div className="inline-flex items-center gap-2 text-xs font-black text-teal-700 dark:text-teal-300 bg-teal-500/10 border border-teal-500/20 px-3 py-1.5 rounded-full">
          <FlaskConical size={15} /> LÀM CHỦ HÓA HỌC 10
        </div>
        <div>
          <h1 className="text-3xl md:text-4xl font-black text-foreground tracking-tight">Lộ trình học theo năng lực</h1>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl mt-2">Hệ thống dùng kết quả luyện tập để đề xuất đúng kiến thức tiếp theo. Bài cầu nối chỉ xuất hiện khi bạn cần củng cố nền tảng, không làm chậm lộ trình chính.</p>
        </div>
      </header>

      <section className="grid md:grid-cols-[1.5fr_1fr] gap-4" aria-label="Tổng quan lộ trình">
        <Card className="border-primary/20 bg-gradient-to-br from-primary/10 to-teal-500/5 rounded-2xl">
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center gap-2 text-xs font-black text-primary"><BookOpenCheck size={17} /> BÀI NÊN HỌC TIẾP</div>
            {recommended ? (
              <>
                <div><h2 className="text-xl font-black text-foreground">{recommended.outcome.title}</h2><p className="text-xs text-muted-foreground leading-relaxed mt-1">{recommended.outcome.description}</p></div>
                {recommended.outcome.questionTypeIds.length > 0 ? (
                  <button type="button" onClick={() => openOutcome(recommended)} className="min-h-11 inline-flex items-center gap-2 rounded-xl bg-primary text-primary-foreground px-5 text-xs font-black cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">Học tiếp ngay <ArrowRight size={15} /></button>
                ) : <p className="text-xs font-bold text-amber-700 dark:text-amber-300">Học liệu nhập môn đang được biên soạn; bạn có thể bắt đầu từ phần Cấu tạo nguyên tử bên dưới.</p>}
              </>
            ) : <p className="text-sm font-bold text-emerald-700 dark:text-emerald-300">Bạn đã hoàn thành toàn bộ nội dung cốt lõi hiện có.</p>}
          </CardContent>
        </Card>
        <Card className="rounded-2xl border-border/60"><CardContent className="p-6"><div className="text-3xl font-black text-foreground">{masteredCore}/{coreStatuses.length}</div><p className="text-xs font-bold text-muted-foreground mt-1">outcome cốt lõi đã làm chủ</p><div className="h-2 bg-muted rounded-full overflow-hidden mt-4"><div className="h-full bg-emerald-500 rounded-full" style={{ width: `${coreStatuses.length ? masteredCore / coreStatuses.length * 100 : 0}%` }} /></div></CardContent></Card>
      </section>

      {topics.map(topic => {
        const topicStatuses = coreStatuses.filter(item => item.outcome.topicId === topic.id);
        if (topicStatuses.length === 0) return null;
        return <section key={topic.id} className="space-y-4"><div><h2 className="text-xl font-black text-foreground">{topic.name.replace(' & Cầu nối', '')}</h2><p className="text-xs text-muted-foreground mt-1">Học theo thứ tự tiền đề; outcome bị khóa luôn hiển thị rõ lý do.</p></div><div className="grid md:grid-cols-2 gap-4">{topicStatuses.map(renderOutcome)}</div></section>;
      })}

      <section className="space-y-4 rounded-3xl border border-amber-500/20 bg-amber-500/5 p-5 md:p-6">
        <div className="flex items-start gap-3"><Wrench size={21} className="text-amber-600 shrink-0" /><div><h2 className="text-lg font-black text-foreground">Kho bài bổ trợ THCS</h2><p className="text-xs text-muted-foreground leading-relaxed mt-1">Không bắt buộc học tuần tự. Chỉ mở bài phù hợp khi chẩn đoán hoặc bài học mới phát hiện lỗ hổng.</p></div></div>
        <div className="grid md:grid-cols-2 gap-4">{bridgeStatuses.map(renderOutcome)}</div>
      </section>
    </div>
  );
};

export default ChemistryLearningPath;
