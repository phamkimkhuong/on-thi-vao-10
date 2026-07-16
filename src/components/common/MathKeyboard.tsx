import React from 'react';
import { Delete } from 'lucide-react';
import { cn } from '../../utils/cn';

interface MathKeyboardProps {
  inputRef: React.RefObject<HTMLInputElement | null>;
  value: string;
  onChange: (val: string) => void;
  layout?: 'set' | 'algebra' | 'inequality' | 'geometry';
  className?: string;
}

export const MathKeyboard: React.FC<MathKeyboardProps> = ({
  inputRef,
  onChange,
  layout = 'set',
  className
}) => {
  const insertText = (text: string) => {
    const input = inputRef.current;
    if (!input) return;

    const start = input.selectionStart ?? 0;
    const end = input.selectionEnd ?? 0;
    const currentValue = input.value;

    const newValue = currentValue.substring(0, start) + text + currentValue.substring(end);
    const newCursorPos = start + text.length;

    onChange(newValue);
    setTimeout(() => {
      input.focus();
      input.setSelectionRange(newCursorPos, newCursorPos);
    }, 0);
  };

  const handleBackspace = () => {
    const input = inputRef.current;
    if (!input) return;

    const start = input.selectionStart ?? 0;
    const end = input.selectionEnd ?? 0;
    const currentValue = input.value;

    let newValue = '';
    let newCursorPos = 0;

    if (start !== end) {
      newValue = currentValue.substring(0, start) + currentValue.substring(end);
      newCursorPos = start;
    } else if (start > 0) {
      newValue = currentValue.substring(0, start - 1) + currentValue.substring(start);
      newCursorPos = start - 1;
    } else {
      return;
    }

    onChange(newValue);
    setTimeout(() => {
      input.focus();
      input.setSelectionRange(newCursorPos, newCursorPos);
    }, 0);
  };

  const keyGroups = React.useMemo(() => {
    if (layout === 'algebra') {
      return [
        // Hàng 1 (Biến & Số mũ): y , = , x , x² , + , - , /
        [
          { label: 'y', value: 'y' },
          { label: '=', value: '=' },
          { label: 'x', value: 'x' },
          { label: 'x²', value: 'x^2' },
          { label: '+', value: '+' },
          { label: '-', value: '-' },
          { label: '/', value: '/' },
        ],
        // Hàng 2 (Số 1-5): 1 , 2 , 3 , 4 , 5 , ( , )
        [
          { label: '1', value: '1' },
          { label: '2', value: '2' },
          { label: '3', value: '3' },
          { label: '4', value: '4' },
          { label: '5', value: '5' },
          { label: '(', value: '(' },
          { label: ')', value: ')' },
        ],
        // Hàng 3 (Số 6-0 & Xóa): 6 , 7 , 8 , 9 , 0 , ; , xóa
        [
          { label: '6', value: '6' },
          { label: '7', value: '7' },
          { label: '8', value: '8' },
          { label: '9', value: '9' },
          { label: '0', value: '0' },
          { label: ';', value: ';' },
          { label: 'xóa', value: 'backspace', isSpecial: true },
        ]
      ];
    }

    if (layout === 'inequality') {
      return [
        // Hàng 1: x, y, <, >, ≤, ≥, R
        [
          { label: 'x', value: 'x' },
          { label: 'y', value: 'y' },
          { label: '<', value: '<' },
          { label: '>', value: '>' },
          { label: '≤', value: '≤' },
          { label: '≥', value: '≥' },
          { label: 'R', value: 'R' },
        ],
        // Hàng 2: [, ], (, ), ;, +, -
        [
          { label: '[', value: '[' },
          { label: ']', value: ']' },
          { label: '(', value: '(' },
          { label: ')', value: ')' },
          { label: ';', value: ';' },
          { label: '+', value: '+' },
          { label: '-', value: '-' },
        ],
        // Hàng 3: 1, 2, 3, 4, 5, 0, xóa
        [
          { label: '1', value: '1' },
          { label: '2', value: '2' },
          { label: '3', value: '3' },
          { label: '4', value: '4' },
          { label: '5', value: '5' },
          { label: '0', value: '0' },
          { label: 'xóa', value: 'backspace', isSpecial: true },
        ]
      ];
    }

    if (layout === 'geometry') {
      return [
        // Hàng 1: S, R, r, √, sin, cos, tan
        [
          { label: 'S', value: 'S' },
          { label: 'R', value: 'R' },
          { label: 'r', value: 'r' },
          { label: '√', value: '√' },
          { label: 'sin', value: 'sin(' },
          { label: 'cos', value: 'cos(' },
          { label: 'tan', value: 'tan(' },
        ],
        // Hàng 2: 1, 2, 3, 4, 5, (, )
        [
          { label: '1', value: '1' },
          { label: '2', value: '2' },
          { label: '3', value: '3' },
          { label: '4', value: '4' },
          { label: '5', value: '5' },
          { label: '(', value: '(' },
          { label: ')', value: ')' },
        ],
        // Hàng 3: 6, 7, 8, 9, 0, /, xóa
        [
          { label: '6', value: '6' },
          { label: '7', value: '7' },
          { label: '8', value: '8' },
          { label: '9', value: '9' },
          { label: '0', value: '0' },
          { label: '/', value: '/' },
          { label: 'xóa', value: 'backspace', isSpecial: true },
        ]
      ];
    }

    // Mặc định: layout = 'set' (Toán tập hợp)
    return [
      [
        { label: '[', value: '[' },
        { label: ']', value: ']' },
        { label: '(', value: '(' },
        { label: ')', value: ')' },
        { label: ';', value: ';' },
      ],
      [
        { label: '∩', value: '∩' },
        { label: '∪', value: '∪' },
        { label: '\\', value: '\\' },
        { label: '∅', value: '∅' },
        { label: 'R', value: 'R' },
      ],
      [
        { label: '-∞', value: '-∞' },
        { label: '+∞', value: '+∞' },
        { label: '≤', value: '≤' },
        { label: '≥', value: '≥' },
        { label: 'xóa', value: 'backspace', isSpecial: true },
      ]
    ];
  }, [layout]);

  return (
    <div className={cn("p-3 bg-slate-100/80 dark:bg-slate-900/80 border border-border/50 rounded-2xl space-y-2 shadow-sm max-w-md w-full", className)}>
      <span className="text-[9px] font-black text-muted-foreground uppercase tracking-wider block mb-1">
        {layout === 'algebra'
          ? "Bàn phím hỗ trợ công thức Parabol & Đại số:"
          : layout === 'inequality'
          ? "Bàn phím hỗ trợ Bất phương trình:"
          : layout === 'geometry'
          ? "Bàn phím hỗ trợ Hình học & Hệ thức lượng:"
          : "Bàn phím hỗ trợ toán tập hợp:"}
      </span>
      <div className="space-y-1.5">
        {keyGroups.map((row, rIdx) => (
          <div key={rIdx} className="flex gap-1 justify-between">
            {row.map((key) => {
              if (key.isSpecial) {
                return (
                  <button
                    key={key.value}
                    type="button"
                    onClick={handleBackspace}
                    className="flex-1 py-1.5 rounded-xl border border-rose-500/25 bg-rose-50 hover:bg-rose-100/50 dark:bg-rose-950/15 dark:hover:bg-rose-950/25 text-rose-600 dark:text-rose-400 font-extrabold text-[10px] uppercase flex items-center justify-center gap-1 cursor-pointer active:scale-95 transition-all shadow-xs"
                  >
                    <Delete size={12} />
                    <span>Xóa</span>
                  </button>
                );
              }

              return (
                <button
                  key={key.value}
                  type="button"
                  onClick={() => insertText(key.value)}
                  className="flex-1 py-1.5 rounded-xl border border-border/60 bg-card hover:bg-secondary text-foreground font-black text-xs cursor-pointer active:scale-95 transition-all shadow-xs hover:border-primary/20 dark:hover:border-primary/40"
                >
                  {key.label}
                </button>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};
