import React, { useState } from 'react';

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
}

export const Tabs: React.FC<TabsProps> = ({
  items,
  defaultTabId,
  className = '',
  tabHeaderClassName = '',
  tabContentClassName = '',
}) => {
  const [activeTabId, setActiveTabId] = useState(defaultTabId || items[0]?.id);

  const activeContent = items.find(item => item.id === activeTabId)?.content;

  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      <div className={`flex border-b border-border/30 overflow-x-auto scrollbar-none gap-2 ${tabHeaderClassName}`}>
        {items.map(item => (
          <button
            key={item.id}
            onClick={() => setActiveTabId(item.id)}
            className={`px-4 py-3 font-semibold text-sm transition-all relative border-b-2 whitespace-nowrap -mb-[2px] cursor-pointer ${
              activeTabId === item.id
                ? 'border-primary text-primary'
                : 'border-transparent text-muted-foreground hover:text-foreground'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className={`mt-1 animate-fade-in ${tabContentClassName}`}>
        {activeContent}
      </div>
    </div>
  );
};
export default Tabs;
