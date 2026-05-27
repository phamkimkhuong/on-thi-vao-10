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
        // Kiểm tra xem chuỗi có chứa các ký tự phân tách LaTeX hay không
        const hasDelimiters = text.includes('\\(') || text.includes('\\[');
        if (hasDelimiters) {
          // Phân tách chuỗi bằng regex đơn giản hóa để hiển thị block math
          const parts = text.split(/(\\\(.*?\\\)|\\\[.*?\\\])/gs);
          containerRef.current.innerHTML = '';
          
          parts.forEach((part) => {
            if ((part.startsWith('\\(') && part.endsWith('\\)')) || (part.startsWith('\\[') && part.endsWith('\\]'))) {
              const formula = part.slice(2, -2);
              const div = document.createElement('div');
              div.className = 'my-2 overflow-x-auto overflow-y-hidden py-1';
              katex.render(formula, div, { displayMode: true, throwOnError: false });
              containerRef.current?.appendChild(div);
            } else {
              const span = document.createElement('span');
              span.textContent = part;
              containerRef.current?.appendChild(span);
            }
          });
        } else {
          // Nếu không có delimiters, kiểm tra xem có phải chữ thuần/văn bản tiếng Việt hay không
          // Nếu chỉ chứa chữ thường, dấu cách và dấu câu cơ bản, không có kí hiệu LaTeX thì hiển thị text thuần
          const isProbablyPlainText = /^[a-zA-ZÀ-ỹ\s,.:;?!\(\)]+$/.test(text) && !text.includes('\\') && !text.includes('^') && !text.includes('_');
          if (isProbablyPlainText) {
            containerRef.current.textContent = text;
          } else {
            katex.render(text, containerRef.current, {
              displayMode: true,
              throwOnError: false,
            });
          }
        }
      } else {
        // Phân tách chuỗi chứa công thức toán học dạng \(...\) hoặc \[...\]
        const parts = text.split(/(\\\(.*?\\\)|\\\[.*?\\\])/gs);
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
