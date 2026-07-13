import React, { useState } from 'react';
import { cn } from '../../utils/cn';

export interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
}

export interface TabsProps {
  items: TabItem[];
  defaultTabId?: string;
  className?: string;
  tabHeaderClassName?: string;
  tabContentClassName?: string;
  activeTabClassName?: string;
  inactiveTabClassName?: string;
}

export const Tabs: React.FC<TabsProps> = ({
  items,
  defaultTabId,
  className,
  tabHeaderClassName,
  tabContentClassName,
  activeTabClassName,
  inactiveTabClassName,
}) => {
  const [activeTabId, setActiveTabId] = useState(defaultTabId || items[0]?.id);

  const activeContent = items.find(item => item.id === activeTabId)?.content;

  return (
    <div className={cn('flex flex-col gap-5', className)}>
      <div
        className={cn(
          'flex flex-wrap gap-2.5 pb-1',
          tabHeaderClassName
        )}
      >
        {items.map(item => (
          <button
            key={item.id}
            onClick={() => setActiveTabId(item.id)}
            className={cn(
              'px-4 py-2.5 font-bold text-xs md:text-sm transition-all duration-200 rounded-xl cursor-pointer shadow-sm border border-transparent',
              activeTabId === item.id
                ? cn('bg-primary text-primary-foreground border-primary/20', activeTabClassName)
                : cn('bg-secondary/50 text-muted-foreground hover:text-foreground hover:bg-secondary/80 border-border/10', inactiveTabClassName)
            )}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className={cn('mt-1 animate-fade-in', tabContentClassName)}>
        {activeContent}
      </div>
    </div>
  );
};

export default Tabs;
