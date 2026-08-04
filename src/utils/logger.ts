import * as Sentry from '@sentry/react';

const getCallerInfo = (): string => {
  try {
    const stack = new Error().stack;
    if (!stack) return '';
    const lines = stack.split('\n');
    const callerLine = lines[3];
    if (!callerLine) return '';
    
    const match = callerLine.match(/at\s+(.+?)\s+\((.+?)\)/) || callerLine.match(/at\s+(.+)/);
    if (match) {
      const funcName = match[2] ? match[1] : 'anonymous';
      const fileUrl = match[2] || match[1];
      const cleanUrl = fileUrl.split('?')[0] || fileUrl;
      const parts = cleanUrl.split('/');
      const fileNameWithLine = parts[parts.length - 1] || cleanUrl;
      
      const lineColMatch = callerLine.match(/:(\d+:\d+)/);
      const lineCol = lineColMatch ? `:${lineColMatch[1]}` : '';
      
      return `-> ${funcName} (${fileNameWithLine.split(':')[0]}${lineCol})`;
    }
    return `-> ${callerLine.trim()}`;
  } catch {
    return '';
  }
};

export const logger = {
  dbRead(actionName: string, docCount: number) {
    if (import.meta.env.DEV) {
      const caller = getCallerInfo();
      console.log(
        `%c[Firestore Read] %c${actionName}: %c${docCount} Reads %c${caller}`,
        'color: #f59e0b; font-weight: bold;',
        'color: #fff;',
        'color: #10b981; font-weight: bold;',
        'color: #6b7280; font-size: 11px; font-style: italic; font-weight: normal;'
      );
    } else {
      Sentry.addBreadcrumb({
        category: 'firestore-read',
        message: `${actionName}: ${docCount} Reads`,
        level: 'info'
      });
    }
  },

  dbWrite(actionName: string, writeCount: number) {
    if (import.meta.env.DEV) {
      const caller = getCallerInfo();
      console.log(
        `%c[Firestore Write] %c${actionName}: %c${writeCount} Writes %c${caller}`,
        'color: #3b82f6; font-weight: bold;',
        'color: #fff;',
        'color: #ef4444; font-weight: bold;',
        'color: #6b7280; font-size: 11px; font-style: italic; font-weight: normal;'
      );
    } else {
      Sentry.addBreadcrumb({
        category: 'firestore-write',
        message: `${actionName}: ${writeCount} Writes`,
        level: 'info'
      });
    }
  },

  error(actionName: string, err: any) {
    if (import.meta.env.DEV) {
      const caller = getCallerInfo();
      console.error(
        `%c[App Error] %c${actionName} %c${caller}:`,
        'color: #ef4444; font-weight: bold;',
        'color: #fff;',
        'color: #6b7280; font-size: 11px; font-style: italic; font-weight: normal;',
        err
      );
    } else {
      // 🚀 Trên Production: Gửi lỗi trực tiếp về Sentry Dashboard
      Sentry.captureException(err || new Error(actionName), {
        extra: { actionName }
      });
    }
  },

  debug(...args: any[]) {
    if (import.meta.env.DEV) {
      console.log('%c[Debug]', 'color: #8b5cf6; font-weight: bold;', ...args);
    } else {
      Sentry.addBreadcrumb({
        category: 'debug',
        message: args.map(a => (typeof a === 'object' ? JSON.stringify(a) : String(a))).join(' '),
        level: 'debug'
      });
    }
  },

  info(...args: any[]) {
    if (import.meta.env.DEV) {
      console.info('%c[Info]', 'color: #06b6d4; font-weight: bold;', ...args);
    } else {
      Sentry.addBreadcrumb({
        category: 'info',
        message: args.map(a => (typeof a === 'object' ? JSON.stringify(a) : String(a))).join(' '),
        level: 'info'
      });
    }
  }
};
