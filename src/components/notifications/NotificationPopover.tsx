import React, { useState, useRef, useEffect } from 'react';
import { Bell, CheckCheck, Crown, Trophy, Clock, Megaphone, ExternalLink, Sparkles, X } from 'lucide-react';
import { useAppStore } from '../../services/store';
import { AppNotification, NotificationType } from '../../types/notificationTypes';
import { useNavigate } from 'react-router-dom';
import { cn } from '../../utils/cn';

const getNotificationIcon = (type: NotificationType) => {
  switch (type) {
    case 'achievement':
      return <Trophy className="w-4 h-4 text-amber-500" />;
    case 'reminder':
      return <Clock className="w-4 h-4 text-sky-500" />;
    case 'premium':
      return <Crown className="w-4 h-4 text-orange-500 animate-pulse" />;
    case 'system':
    default:
      return <Megaphone className="w-4 h-4 text-indigo-500" />;
  }
};

const getNotificationBadgeClass = (type: NotificationType) => {
  switch (type) {
    case 'achievement':
      return 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20';
    case 'reminder':
      return 'bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/20';
    case 'premium':
      return 'bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-orange-600 dark:text-orange-400 border-orange-500/30';
    case 'system':
    default:
      return 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20';
  }
};

interface NotificationPopoverProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NotificationPopover: React.FC<NotificationPopoverProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const { notifications, unreadNotificationCount, markNotificationAsRead, markAllNotificationsAsRead } = useAppStore();
  const [filter, setFilter] = useState<'all' | 'unread'>('all');
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredNotifs = filter === 'unread' ? notifications.filter((n) => !n.read) : notifications;

  const handleNotifClick = (item: AppNotification) => {
    markNotificationAsRead(item.id);
    if (item.actionUrl) {
      if (item.actionUrl.startsWith('http')) {
        window.open(item.actionUrl, '_blank');
      } else {
        navigate(item.actionUrl);
      }
      onClose();
    }
  };

  return (
    <div
      ref={popoverRef}
      className="absolute right-0 top-full mt-2 w-80 sm:w-96 bg-card border border-border/60 rounded-3xl shadow-2xl z-50 overflow-hidden flex flex-col animate-scaleUp text-left"
    >
      {/* Header */}
      <div className="p-4 border-b border-border/30 bg-secondary/30 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-xl bg-primary/10 text-primary">
            <Bell size={18} />
          </div>
          <div>
            <h3 className="text-xs font-black text-foreground">Thông Báo Học Tập</h3>
            <p className="text-[10px] text-muted-foreground font-semibold">
              {unreadNotificationCount > 0
                ? `Bạn có ${unreadNotificationCount} thông báo chưa đọc`
                : 'Bạn đã đọc hết tất cả thông báo'}
            </p>
          </div>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="p-1.5 rounded-xl text-muted-foreground hover:text-foreground hover:bg-secondary transition-all cursor-pointer"
        >
          <X size={16} />
        </button>
      </div>

      {/* Filter Tabs & Mark All As Read */}
      <div className="px-4 py-2.5 border-b border-border/20 bg-card/60 flex items-center justify-between gap-2">
        <div className="flex items-center gap-1 bg-secondary/50 p-1 rounded-xl">
          <button
            type="button"
            onClick={() => setFilter('all')}
            className={cn(
              'px-2.5 py-1 rounded-lg text-[10px] font-black transition-all cursor-pointer',
              filter === 'all'
                ? 'bg-card text-foreground shadow-xs'
                : 'text-muted-foreground hover:text-foreground'
            )}
          >
            Tất cả ({notifications.length})
          </button>
          <button
            type="button"
            onClick={() => setFilter('unread')}
            className={cn(
              'px-2.5 py-1 rounded-lg text-[10px] font-black transition-all cursor-pointer',
              filter === 'unread'
                ? 'bg-card text-foreground shadow-xs'
                : 'text-muted-foreground hover:text-foreground'
            )}
          >
            Chưa đọc ({unreadNotificationCount})
          </button>
        </div>

        {unreadNotificationCount > 0 && (
          <button
            type="button"
            onClick={markAllNotificationsAsRead}
            className="flex items-center gap-1 text-[10px] font-extrabold text-primary hover:underline transition-all cursor-pointer"
          >
            <CheckCheck size={12} />
            <span>Đã đọc hết</span>
          </button>
        )}
      </div>

      {/* List */}
      <div className="divide-y divide-border/20 max-h-80 overflow-y-auto">
        {filteredNotifs.length === 0 ? (
          <div className="py-10 text-center text-xs text-muted-foreground font-semibold px-4">
            <Sparkles className="w-8 h-8 text-muted-foreground/30 mx-auto mb-2" />
            <span>Chưa có thông báo nào {filter === 'unread' ? 'chưa đọc' : ''}.</span>
          </div>
        ) : (
          filteredNotifs.map((item) => (
            <div
              key={item.id}
              onClick={() => handleNotifClick(item)}
              className={cn(
                'p-3.5 flex items-start gap-3 hover:bg-secondary/40 transition-all cursor-pointer relative group',
                !item.read && 'bg-primary/5 dark:bg-primary/10 font-bold'
              )}
            >
              {/* Unread dot */}
              {!item.read && (
                <span className="absolute left-1.5 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary animate-pulse" />
              )}

              <div className={cn('p-2 rounded-xl border shrink-0 mt-0.5', getNotificationBadgeClass(item.type))}>
                {getNotificationIcon(item.type)}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-1">
                  <h4 className="text-xs font-black text-foreground truncate group-hover:text-primary transition-colors">
                    {item.title}
                  </h4>
                  <span className="text-[9px] text-muted-foreground font-medium shrink-0">
                    {new Date(item.createdAt).toLocaleDateString('vi-VN')}
                  </span>
                </div>

                <p className="text-[11px] text-muted-foreground line-clamp-2 mt-1 leading-relaxed">
                  {item.body}
                </p>

                {item.actionUrl && (
                  <div className="mt-2 flex items-center gap-1 text-[10px] font-extrabold text-primary group-hover:underline">
                    <span>Xem chi tiết</span>
                    <ExternalLink size={10} />
                  </div>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
