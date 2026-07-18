import React from 'react';
import { Compass, Footprints, ScanSearch, ShieldAlert } from 'lucide-react';
import type { QuestionType } from '../../../types';
import { LatexRenderer } from '../../../components/common/LatexRenderer';

interface QuestionTypeGuidanceProps {
  questionType: QuestionType;
  compact?: boolean;
}

export const QuestionTypeGuidance: React.FC<QuestionTypeGuidanceProps> = ({ questionType, compact = false }) => (
  <section className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 overflow-hidden text-left">
    <div className="px-4 py-3 border-b border-cyan-500/15 bg-cyan-500/5">
      <div className="flex items-start gap-2.5">
        <Compass size={18} className="text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
        <div>
          <p className="text-[10px] font-black uppercase tracking-wider text-cyan-700 dark:text-cyan-300">Nhận dạng trước khi giải</p>
          <h5 className="text-sm font-black text-foreground mt-0.5">Dạng: <LatexRenderer text={questionType.name} /></h5>
          {!compact && <div className="text-xs font-semibold text-muted-foreground mt-1 leading-relaxed"><LatexRenderer text={questionType.description} /></div>}
        </div>
      </div>
    </div>

    <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <h6 className="flex items-center gap-1.5 text-[11px] font-black text-foreground mb-2">
          <ScanSearch size={14} className="text-cyan-600 dark:text-cyan-400" /> Dấu hiệu nhận biết
        </h6>
        <ul className="space-y-1.5">
          {questionType.recognitionSigns.slice(0, compact ? 2 : 4).map((sign, index) => (
            <li key={index} className="flex gap-2 text-xs font-semibold text-muted-foreground leading-relaxed">
              <span className="text-cyan-600 dark:text-cyan-400 font-black">•</span>
              <LatexRenderer text={sign} />
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h6 className="flex items-center gap-1.5 text-[11px] font-black text-foreground mb-2">
          <Footprints size={14} className="text-emerald-600 dark:text-emerald-400" /> Bắt đầu như thế nào?
        </h6>
        <ol className="space-y-1.5">
          {questionType.solvingSteps.slice(0, compact ? 2 : 4).map((step, index) => (
            <li key={index} className="flex gap-2 text-xs font-semibold text-muted-foreground leading-relaxed">
              <span className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 flex items-center justify-center text-[10px] font-black shrink-0">{index + 1}</span>
              <LatexRenderer text={step} />
            </li>
          ))}
        </ol>
      </div>
    </div>

    {!compact && questionType.commonMistakes.length > 0 && (
      <div className="mx-4 mb-4 px-3 py-2.5 rounded-xl bg-amber-500/5 border border-amber-500/15 flex items-start gap-2">
        <ShieldAlert size={14} className="text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
        <div className="text-xs font-semibold text-muted-foreground leading-relaxed">
          <span className="font-black text-foreground">Bẫy cần tránh: </span>
          <LatexRenderer text={questionType.commonMistakes[0]} />
        </div>
      </div>
    )}
  </section>
);
