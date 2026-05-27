import React from 'react';

export interface ProgressProps {
  value: number; // 0 - 100
  className?: string;
  indicatorClassName?: string;
}

export const Progress: React.FC<ProgressProps> = ({ value, className = '', indicatorClassName = '' }) => {
  const percentage = Math.max(0, Math.min(100, isNaN(value) ? 0 : value));

  return (
    <div className={`h-2.5 w-full bg-secondary dark:bg-slate-800 rounded-full overflow-hidden border border-border/10 ${className}`}>
      <div
        className={`h-full bg-primary rounded-full transition-all duration-500 ease-out ${indicatorClassName}`}
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
};
export default Progress;
