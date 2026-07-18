import React from 'react';
import { CheckCircle2, LockKeyhole, ShieldCheck } from 'lucide-react';
import type { AdaptivePracticeSequenceResult } from '../utils/adaptivePracticeSequence';

interface AdaptivePracticeStatusProps {
  status: AdaptivePracticeSequenceResult;
}

export const AdaptivePracticeStatus: React.FC<AdaptivePracticeStatusProps> = ({ status }) => {
  const { readiness } = status;
  const accuracyPercent = Math.round(readiness.accuracy * 100);

  return (
    <section
      className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 px-4 py-3 shadow-sm"
      aria-label="Trạng thái lộ trình luyện tập thích nghi"
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-2.5">
          <div className="mt-0.5 rounded-xl bg-cyan-500/10 p-2 text-cyan-600 dark:text-cyan-400">
            {status.holdoutUnlocked ? <ShieldCheck size={17} /> : <LockKeyhole size={17} />}
          </div>
          <div className="space-y-1">
            <p className="text-xs font-black text-foreground">
              {status.holdoutUnlocked
                ? `Đã mở ${status.visibleHoldoutCount} câu kiểm tra làm chủ`
                : 'Đang học nền tảng — kiểm tra làm chủ chưa xuất hiện'}
            </p>
            <p className="max-w-2xl text-[11px] font-semibold leading-relaxed text-muted-foreground">
              {status.holdoutUnlocked
                ? 'Các câu có biểu tượng khiên là câu đánh giá độc lập: gợi ý được khóa cho tới khi em nộp đáp án.'
                : 'Hoàn thành đủ số câu, đạt ít nhất 70% chính xác và trải qua mọi dạng con. Cụm kiểm tra sẽ mở ở lượt vào tiếp theo để không làm đổi câu giữa phiên.'}
            </p>
          </div>
        </div>

        {!status.holdoutUnlocked && status.holdoutQuestionCount > 0 && (
          <div className="grid grid-cols-3 gap-2 sm:min-w-[310px]" aria-label="Điều kiện mở khóa">
            <ReadinessItem
              passed={readiness.enoughAttempts}
              label="Số câu"
              value={`${readiness.attemptedLearningCount}/${readiness.requiredAttemptCount}`}
            />
            <ReadinessItem
              passed={readiness.enoughAccuracy}
              label="Chính xác"
              value={`${accuracyPercent}%/70%`}
            />
            <ReadinessItem
              passed={readiness.enoughSubTypeCoverage}
              label="Dạng con"
              value={`${readiness.coveredSubTypeCount}/${readiness.requiredSubTypeCount}`}
            />
          </div>
        )}
      </div>
    </section>
  );
};

interface ReadinessItemProps {
  passed: boolean;
  label: string;
  value: string;
}

const ReadinessItem: React.FC<ReadinessItemProps> = ({ passed, label, value }) => (
  <div className="rounded-xl border border-border/50 bg-background/80 px-2.5 py-2 text-center">
    <div className="flex items-center justify-center gap-1 text-[9px] font-bold uppercase tracking-wide text-muted-foreground">
      {passed && <CheckCircle2 size={10} className="text-emerald-500" aria-hidden="true" />}
      {label}
    </div>
    <div className={passed
      ? 'mt-0.5 text-[11px] font-black text-emerald-600 dark:text-emerald-400'
      : 'mt-0.5 text-[11px] font-black text-foreground'}
    >
      {value}
    </div>
  </div>
);
