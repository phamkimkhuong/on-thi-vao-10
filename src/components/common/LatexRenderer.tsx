import React, { useEffect, useRef } from 'react';
import katex from 'katex';

interface LatexRendererProps {
  text: string;
  block?: boolean;
  className?: string;
}

export const LatexRenderer: React.FC<LatexRendererProps> = ({ text, block = false, className = '' }) => {
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    try {
      if (block) {
        katex.render(text, containerRef.current, {
          displayMode: true,
          throwOnError: false,
        });
      } else {
        // Phân tách chuỗi chứa công thức toán học dạng \(...\) hoặc \[...\]
        // ví dụ: "Giải phương trình \(x^2 - 4 = 0\)"
        const parts = text.split(/(\\\(.*?[^\\]\\\)|\\\[.*?[^\\]\\\])/gs);
        containerRef.current.innerHTML = '';
        
        parts.forEach((part) => {
          if (part.startsWith('\\(') && part.endsWith('\\)')) {
            const formula = part.slice(2, -2);
            const span = document.createElement('span');
            span.className = 'inline-block px-0.5';
            katex.render(formula, span, { displayMode: false, throwOnError: false });
            containerRef.current?.appendChild(span);
          } else if (part.startsWith('\\[') && part.endsWith('\\]')) {
            const formula = part.slice(2, -2);
            const div = document.createElement('div');
            div.className = 'my-2 overflow-x-auto overflow-y-hidden py-1';
            katex.render(formula, div, { displayMode: true, throwOnError: false });
            containerRef.current?.appendChild(div);
          } else {
            // Thay thế ký tự xuống dòng bằng thẻ <br />
            const subParts = part.split('\n');
            subParts.forEach((subPart, index) => {
              if (index > 0) {
                containerRef.current?.appendChild(document.createElement('br'));
              }
              if (subPart) {
                const textNode = document.createTextNode(subPart);
                containerRef.current?.appendChild(textNode);
              }
            });
          }
        });
      }
    } catch (error) {
      console.error('KaTeX rendering error:', error);
      containerRef.current.textContent = text;
    }
  }, [text, block]);

  return <span ref={containerRef} className={`inline-block text-left ${className}`} />;
};
export default LatexRenderer;
