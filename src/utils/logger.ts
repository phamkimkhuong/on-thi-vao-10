const getCallerInfo = (): string => {
  try {
    const stack = new Error().stack;
    if (!stack) return '';
    const lines = stack.split('\n');
    // lines[0] là "Error"
    // lines[1] là getCallerInfo
    // lines[2] là dbRead/dbWrite
    // lines[3] là hàm gọi dbRead/dbWrite thực tế
    const callerLine = lines[3];
    if (!callerLine) return '';
    
    // Regex bắt định dạng "at funcName (url:line:col)" hoặc "at url:line:col"
    const match = callerLine.match(/at\s+(.+?)\s+\((.+?)\)/) || callerLine.match(/at\s+(.+)/);
    if (match) {
      const funcName = match[2] ? match[1] : 'anonymous';
      const fileUrl = match[2] || match[1];
      const cleanUrl = fileUrl.split('?')[0] || fileUrl;
      const parts = cleanUrl.split('/');
      const fileNameWithLine = parts[parts.length - 1] || cleanUrl;
      
      // Lấy thêm số dòng nếu có
      const lineColMatch = callerLine.match(/:(\d+:\d+)/);
      const lineCol = lineColMatch ? `:${lineColMatch[1]}` : '';
      
      return `-> ${funcName} (${fileNameWithLine.split(':')[0]}${lineCol})`;
    }
    return `-> ${callerLine.trim()}`;
  } catch (e) {
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
    }
  },
  error(actionName: string, err: any) {
    if (import.meta.env.DEV) {
      const caller = getCallerInfo();
      console.error(
        `%c[Firestore Error] %c${actionName} %c${caller}:`,
        'color: #ef4444; font-weight: bold;',
        'color: #fff;',
        'color: #6b7280; font-size: 11px; font-style: italic; font-weight: normal;',
        err
      );
    }
  }
};
