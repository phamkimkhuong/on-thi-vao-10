import React, { useEffect, useRef } from 'react';
import katex from 'katex';

interface LatexRendererProps {
  text: string;
  block?: boolean;
  className?: string;
}

/**
 * Kiểm tra xem chuỗi có nên được render bằng KaTeX hay không.
 * Tự động nhận diện raw LaTeX và các biểu thức toán học thuần túy (không có delimiters).
 */
const shouldRenderAsLatex = (text: string, block: boolean): boolean => {
  if (block) {
    // Nếu là block mode, luôn render bằng KaTeX
    return true;
  }

  // Các ký tự tiếng Việt có dấu
  const hasVietnameseAccents = /[àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđĐ]/i.test(text);

  // Danh sách các từ tiếng Việt không dấu phổ biến trong câu hỏi toán hoặc lời giải
  const vietnameseStopWords = /\b(cho|voi|co|la|va|tim|de|rut|gon|bieu|thuc|phuong|trinh|he|so|duong|am|nghiem|thoa|man|chung|minh|tu|giac|noi|tiep|duong|tron|tam|ban|kinh|cat|diem|thang|giao|tuyen|song|song|vuong|goc|tam|giac|can|deu|vuong|dien|tich|chu|vi|dat|bien|ta|duoc|thu|nghiem|thay|vao|phap|the|cong|dai|so|nhan|chia|cong|tru|quy|dong|tu|mau|chung)\b/i;
  const hasVietnameseStopWords = vietnameseStopWords.test(text);

  if (hasVietnameseAccents || hasVietnameseStopWords) {
    return false;
  }

  // Nhận diện bất kỳ lệnh LaTeX nào (bắt đầu bằng \ theo sau là chữ cái) hoặc các ký tự đặc trưng
  if (/\\[a-zA-Z]+/.test(text) || /[_^{}]/.test(text)) {
    return true;
  }

  // Kiểm tra xem chuỗi chỉ chứa các ký tự toán học hợp lệ
  // Cho phép chữ cái (biến), chữ số, dấu cách, toán tử: +, -, *, /, =, <, >, !, %, ^, _, {, }, (, ), [, ], ,, ., ;, :, \
  // Và các ký tự toán đặc biệt: √, ±, ∓, ÷, ×, π, ∞, ≈, ≠, ≤, ≥
  const mathCharsOnly = /^[a-zA-Z0-9\s+\-*/=<>()\[\],.;:√±∓÷×π∞≈≠≤≥\\%^_{}]+$/.test(text);

  if (mathCharsOnly) {
    if (!text.trim()) return false;

    // Chứa ít nhất một toán tử hoặc ký tự toán học đặc trưng
    const hasMathOperators = /[+\-*/=<>()√±∓÷×π∞≈≠≤≥%^_{}]/.test(text);
    // Chứa biến số đơn lẻ (ví dụ: x, y, m, a, b, c)
    const hasMathPatterns = /\b[a-zA-Z]\b/.test(text);
    // Hoặc là một số đơn lẻ hoặc phân số (ví dụ: 10, 1/4)
    const isNumberOrFraction = /^\d+(\/\d+)?$/.test(text.trim());

    return hasMathOperators || hasMathPatterns || isNumberOrFraction;
  }

  return false;
};

/**
 * Kiểm tra xem chuỗi có chứa delimiters LaTeX hay không: \\( ... \\) hoặc \\[ ... \\]
 */
const hasLatexDelimiters = (text: string): boolean => {
  return text.includes('\\(') || text.includes('\\[') || text.includes('$');
};

/**
 * Regex phân tách chuỗi theo delimiters LaTeX: $...$, $$...$$, \\( ... \\) hoặc \\[ ... \\]
 */
const DELIMITER_REGEX = /(\$\$.*?\$\$|\$.*?\$|\\\(.*?\\\)|\\\[.*?\\\])/gs;

/**
 * Render phần text thuần (không phải LaTeX) với hỗ trợ xuống dòng.
 */
const appendTextWithLineBreaks = (container: HTMLElement, text: string) => {
  const lines = text.split('\n');
  lines.forEach((line, index) => {
    if (index > 0) {
      container.appendChild(document.createElement('br'));
    }
    if (line) {
      container.appendChild(document.createTextNode(line));
    }
  });
};

/**
 * Render một đoạn LaTeX vào element, xử lý lỗi graceful.
 */
const renderKatex = (formula: string, element: HTMLElement, displayMode: boolean) => {
  try {
    katex.render(formula, element, { displayMode, throwOnError: false });
  } catch {
    element.textContent = formula;
  }
};

/**
 * Render chuỗi có chứa delimiters LaTeX xen lẫn text thường.
 * Phân tách theo \\( ... \\) (inline) và \\[ ... \\] (display), phần còn lại là text thuần.
 */
const renderMixedContent = (container: HTMLElement, text: string, defaultDisplayMode: boolean) => {
  const parts = text.split(DELIMITER_REGEX);
  container.innerHTML = '';

  parts.forEach((part) => {
    if (part.startsWith('\\(') && part.endsWith('\\)')) {
      const formula = part.slice(2, -2);
      const span = document.createElement('span');
      span.className = 'inline-block px-0.5';
      renderKatex(formula, span, false);
      container.appendChild(span);
    } else if (part.startsWith('\\[') && part.endsWith('\\]')) {
      const formula = part.slice(2, -2);
      const div = document.createElement('div');
      div.className = 'my-2 overflow-x-auto overflow-y-hidden py-1';
      renderKatex(formula, div, true);
      container.appendChild(div);
    } else if (part.startsWith('$$') && part.endsWith('$$')) {
      const formula = part.slice(2, -2);
      const div = document.createElement('div');
      div.className = 'my-2 overflow-x-auto overflow-y-hidden py-1';
      renderKatex(formula, div, true);
      container.appendChild(div);
    } else if (part.startsWith('$') && part.endsWith('$')) {
      const formula = part.slice(1, -1);
      const span = document.createElement('span');
      span.className = 'inline-block px-0.5';
      renderKatex(formula, span, false);
      container.appendChild(span);
    } else if (part) {
      // Text thuần — nếu text chứa LaTeX commands hoặc biểu thức toán học, render nốt bằng KaTeX
      if (shouldRenderAsLatex(part, defaultDisplayMode)) {
        if (defaultDisplayMode) {
          const div = document.createElement('div');
          div.className = 'my-2 overflow-x-auto overflow-y-hidden py-1';
          renderKatex(part, div, true);
          container.appendChild(div);
        } else {
          const span = document.createElement('span');
          span.className = 'inline-block px-0.5';
          renderKatex(part, span, false);
          container.appendChild(span);
        }
      } else {
        appendTextWithLineBreaks(container, part);
      }
    }
  });
};

export const LatexRenderer: React.FC<LatexRendererProps> = ({ text, block = false, className = '' }) => {
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!containerRef.current || !text) return;

    try {
      // Chuẩn hóa các ký tự xuống dòng dạng chữ \n thành ký tự xuống dòng thực tế
      const normalizedText = text.replace(/\\n/g, '\n');
      const hasDelims = hasLatexDelimiters(normalizedText);

      if (hasDelims) {
        // Chuỗi có delimiters \\( \\) hoặc \\[ \\] → phân tách và render từng phần
        renderMixedContent(containerRef.current, normalizedText, block);
      } else if (shouldRenderAsLatex(normalizedText, block)) {
        // Chuỗi là raw LaTeX hoặc biểu thức toán học (không có delimiters) → render toàn bộ bằng KaTeX
        containerRef.current.innerHTML = '';
        renderKatex(normalizedText, containerRef.current, block);
      } else {
        // Text thuần (tiếng Việt, chữ cái, số, dấu câu) → hiển thị nguyên văn
        containerRef.current.innerHTML = '';
        appendTextWithLineBreaks(containerRef.current, normalizedText);
      }
    } catch (error) {
      console.error('KaTeX rendering error:', error);
      if (containerRef.current) {
        containerRef.current.textContent = text;
      }
    }
  }, [text, block]);

  return (
    <span
      ref={containerRef}
      className={`inline-block text-left ${className}`}
      aria-label={text}
      title={text}
    />
  );
};

export default LatexRenderer;
