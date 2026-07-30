import React, { useEffect, useRef } from 'react';
import katex from 'katex';

interface LatexRendererProps {
  text: string;
  block?: boolean;
  className?: string;
}

const ALLOWED_MATH_WORDS = new Set([
  'sin', 'cos', 'tan', 'cot', 'sec', 'csc', 'log', 'ln', 'lim', 'max', 'min',
  'det', 'rad', 'deg', 'mod', 'gcd', 'lcm', 'abs', 'exp', 'sqrt', 'vec', 'arg',
  'dim', 'ker', 'sup', 'inf', 'cm', 'mm', 'm', 'km', 'g', 'kg', 'mol', 'hz',
  'khz', 'mhz', 'ghz', 's', 'ms', 'h', 'v', 'mv', 'a', 'ma', 'w', 'kw',
  'mw', 'j', 'kj', 'cal', 'kcal', 'n', 'pa', 'kpa', 'atm', 'bar', 'db'
]);

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

  // Trích xuất các từ tiếng Anh (từ 2 ký tự trở lên)
  const words = text.match(/\b[a-zA-Z]{2,}\b/g) || [];
  const hasNaturalLanguageEnglishWords = words.some(w => !ALLOWED_MATH_WORDS.has(w.toLowerCase()));

  if (hasVietnameseAccents || hasVietnameseStopWords || hasNaturalLanguageEnglishWords) {
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
 * Regex phân tách chuỗi theo delimiters LaTeX: $...$, $$...$$, \\( ... \\) hoặc \\[ ... \\]
 */
const DELIMITER_REGEX = /(\$\$.*?\$\$|\$.*?\$|\\\(.*?\\\)|\\\[.*?\\\])/gs;

/**
 * Render phần text thuần (không phải LaTeX) với hỗ trợ xuống dòng.
 */
/**
 * Render một đoạn LaTeX vào element, xử lý lỗi graceful.
 */
const renderKatex = (formula: string, element: HTMLElement, displayMode: boolean) => {
  const originalWarn = console.warn;
  console.warn = (...args: any[]) => {
    if (typeof args[0] === 'string' && (args[0].includes('No character metrics for') || args[0].includes('LaTeX-incompatible input'))) {
      return;
    }
    originalWarn.apply(console, args);
  };

  try {
    katex.render(formula, element, {
      displayMode,
      throwOnError: false,
      strict: false,
      trust: true
    });
  } catch {
    element.textContent = formula;
  } finally {
    console.warn = originalWarn;
  }
};

/**
 * Render nội dung của một dòng văn bản đơn lẻ, xử lý xen lẫn in đậm **...** và công thức LaTeX.
 */
const renderLineContent = (container: HTMLElement, text: string, defaultDisplayMode: boolean) => {
  // 1. Kiểm tra xem có cặp ** nào không để xử lý in đậm trước nhằm tránh đứt gãy khi split theo LaTeX delimiters
  if (text.includes('**')) {
    const boldRegex = /(\*\*.*?\*\*)/gs;
    const parts = text.split(boldRegex);
    
    // Chỉ xử lý đệ quy nếu thực sự chia tách thành nhiều phần (có cặp ** hợp lệ)
    if (parts.length > 1) {
      parts.forEach((part) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          const content = part.slice(2, -2);
          if (content) {
            const strong = document.createElement('strong');
            strong.className = 'font-bold text-foreground';
            container.appendChild(strong);
            renderLineContent(strong, content, defaultDisplayMode);
          }
        } else if (part) {
          renderLineContent(container, part, defaultDisplayMode);
        }
      });
      return;
    }
  }

  // 2. Phân tách theo LaTeX delimiters như bình thường
  const parts = text.split(DELIMITER_REGEX);

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
        container.appendChild(document.createTextNode(part));
      }
    }
  });
};

/**
 * Render chuỗi có chứa delimiters LaTeX xen lẫn text thường.
 * Tách riêng các khối hình ảnh SVG (nếu có) để render đồ họa vector trực tiếp
 */
export const LatexRenderer: React.FC<LatexRendererProps> = ({ text, block = false, className = '' }) => {
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!containerRef.current || !text) return;

    try {
      // Xóa trắng container trước khi render mới
      containerRef.current.innerHTML = '';

      // Chuẩn hóa các ký tự xuống dòng dạng chữ \n thành ký tự xuống dòng thực tế (trừ các lệnh LaTeX bắt đầu bằng \n như \neq, \nexists, \notin, \nu, \nabla, \neg, ...)
      const normalizedText = text.replace(/\\n(?!eq|e|exists|subseteq|in|otin|geq|leq|parallel|cong|sim|approx|u|abla|eg)/g, '\n');

      // Tách riêng các khối hình ảnh SVG (nếu có) để render đồ họa vector trực tiếp
      const SVG_REGEX = /(<svg[\s\S]*?<\/svg>)/g;
      const segments = normalizedText.split(SVG_REGEX);

      segments.forEach((segment) => {
        if (!segment) return;

        if (segment.trim().startsWith('<svg') && segment.trim().endsWith('</svg>')) {
          const svgDiv = document.createElement('div');
          // Giao diện thẻ SVG căn giữa, nền trắng ở theme sáng / nền đậm ở theme tối
          svgDiv.className = 'flex justify-center my-3 p-3 bg-white dark:bg-slate-900 rounded-2xl border border-border/60 shadow-sm max-w-full overflow-x-auto';
          svgDiv.innerHTML = segment;
          containerRef.current?.appendChild(svgDiv);
        } else {
          // Xử lý đoạn văn bản / công thức Toán bình thường theo từng dòng
          const lines = segment.split('\n');
          lines.forEach((line, lineIdx) => {
            if (lineIdx > 0) {
              containerRef.current?.appendChild(document.createElement('br'));
            }

            if (line) {
              let lineContainer: HTMLElement = containerRef.current!;
              let contentToRender = line;

              // Kiểm tra danh sách bullet point: bắt đầu bằng "- " hoặc "* " hoặc "• " ở đầu dòng
              const bulletMatch = line.match(/^(\s*)[-*•]\s+(.*)/);
              if (bulletMatch) {
                const li = document.createElement('li');
                li.className = 'list-disc ml-5 my-1 pl-1 text-muted-foreground';
                containerRef.current?.appendChild(li);
                lineContainer = li;
                contentToRender = bulletMatch[2];
              }

              // Render nội dung của dòng vào lineContainer tương ứng
              renderLineContent(lineContainer, contentToRender, block);
            }
          });
        }
      });
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
      className={`inline-block text-left notranslate ${className}`}
      aria-label={text}
      title={text}
    />
  );
};

export default LatexRenderer;
