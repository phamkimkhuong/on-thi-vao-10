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
  onTabChange?: (tabId: string) => void;
  afterHeader?: React.ReactNode;
}

export const Tabs: React.FC<TabsProps> = ({
  items,
  defaultTabId,
  className,
  tabHeaderClassName,
  tabContentClassName,
  activeTabClassName,
  inactiveTabClassName,
  onTabChange,
  afterHeader,
}) => {
  const [activeTabId, setActiveTabId] = useState(defaultTabId || items[0]?.id);

  const activeContent = items.find(item => item.id === activeTabId)?.content;

  return (
    <div className={cn('flex flex-col gap-5', className)}>
      <div
        className={cn(
          'flex items-center gap-2 overflow-x-auto no-scrollbar whitespace-nowrap pb-1 justify-start scroll-smooth',
          tabHeaderClassName
        )}
      >
        {items.map(item => (
          <button
            key={item.id}
            onClick={() => {
              setActiveTabId(item.id);
              onTabChange?.(item.id);
            }}
            className={cn(
              'px-3.5 py-2 font-extrabold text-xs transition-all duration-200 rounded-xl cursor-pointer shadow-xs border border-transparent shrink-0 whitespace-nowrap',
              activeTabId === item.id
                ? cn('bg-primary text-primary-foreground border-primary/20', activeTabClassName)
                : cn('bg-secondary/50 text-muted-foreground hover:text-foreground hover:bg-secondary/80 border-border/10', inactiveTabClassName)
            )}
          >
            {item.label}
          </button>
        ))}
      </div>
      {afterHeader}
      <div className={cn('mt-1 animate-fade-in', tabContentClassName)}>
        {activeContent}
      </div>
    </div>
  );
};

export default Tabs;
