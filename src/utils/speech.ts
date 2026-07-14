/**
 * Chuyển đổi mã LaTeX thành văn bản tiếng Việt thuần túy có thể phát âm được bằng các công cụ Text-to-Speech (TTS).
 * Hỗ trợ dịch tự động các ký hiệu Toán học, Hóa học và Hình học phổ biến
 * sang ngôn ngữ nói chuẩn học sinh Việt Nam lớp 9 và lớp 10.
 *
 * Bộ dịch này bao phủ toàn bộ các công thức, ký hiệu, và thuật ngữ LaTeX
 * xuất hiện trong cơ sở dữ liệu bài giảng của hệ thống (questionTypes, solutions, questions).
 */
export const convertLatexToSpeechText = (text: string, subjectId: string): string => {
  let spoken = text;

  // ═══════════════════════════════════════════════════════════════
  // PHẦN 0: Dọn dẹp markdown và cấu trúc LaTeX bọc ngoài
  // ═══════════════════════════════════════════════════════════════
  spoken = spoken.replace(/\*\*([^*]+)\*\*/g, '$1'); // bold
  spoken = spoken.replace(/\*([^*]+)\*/g, '$1');     // italic
  spoken = spoken.replace(/#{1,6}\s+/g, '');         // headings
  spoken = spoken.replace(/-\s+/g, '');              // bullet points

  // Xóa cặp ngoặc display-math: \( ... \) và \[ ... \]
  spoken = spoken.replace(/\\\(/g, '');
  spoken = spoken.replace(/\\\)/g, '');
  spoken = spoken.replace(/\\\[/g, '');
  spoken = spoken.replace(/\\\]/g, '');

  // Xóa \left và \right (dùng với ngoặc lớn)
  spoken = spoken.replace(/\\left/g, '');
  spoken = spoken.replace(/\\right/g, '');

  // ═══════════════════════════════════════════════════════════════
  // PHẦN 1: Môi trường LaTeX phức tạp (begin/end)
  // ═══════════════════════════════════════════════════════════════
  // \begin{cases} ... \end{cases} -> chỉ giữ nội dung bên trong
  spoken = spoken.replace(/\\begin\{cases\}/g, ', hệ điều kiện: ');
  spoken = spoken.replace(/\\end\{cases\}/g, '. ');
  spoken = spoken.replace(/\\begin\{[^}]+\}/g, '');
  spoken = spoken.replace(/\\end\{[^}]+\}/g, '');
  // Dấu xuống dòng trong LaTeX: \\
  spoken = spoken.replace(/\\\\\\\\/g, ', ');

  // ═══════════════════════════════════════════════════════════════
  // PHẦN 2: Chuyên biệt theo môn học
  // ═══════════════════════════════════════════════════════════════
  if (subjectId === 'chemistry') {
    // ── Hóa học ──────────────────────────────────────────────────

    // \text{CO} -> CO (bóc thẻ text ra)
    spoken = spoken.replace(/\\text\{([^}]+)\}/g, '$1');
    spoken = spoken.replace(/\\mathrm\{([^}]+)\}/g, '$1');

    // Mũi tên phản ứng hóa học
    spoken = spoken.replace(/\\xrightarrow\{([^}]+)\}/g, ' ($1) phản ứng tạo thành ');
    spoken = spoken.replace(/\\rightarrow/g, ' phản ứng tạo thành ');
    spoken = spoken.replace(/\\longrightarrow/g, ' phản ứng tạo thành ');
    spoken = spoken.replace(/\\to/g, ' phản ứng tạo thành ');
    spoken = spoken.replace(/\\leftarrow/g, ' phản ứng ngược lại ');
    spoken = spoken.replace(/\\rightleftharpoons/g, ' cân bằng thuận nghịch ');
    spoken = spoken.replace(/\\leftrightarrow/g, ' cân bằng thuận nghịch ');

    // Mũi tên lên/xuống (kết tủa/khí thoát ra)
    spoken = spoken.replace(/\\uparrow/g, ' thoát ra dạng khí ');
    spoken = spoken.replace(/\\downarrow/g, ' kết tủa ');

    // Chỉ số dưới hóa học: O_2 -> O 2, H_{2} -> H 2
    spoken = spoken.replace(/_\{([^}]+)\}/g, ' $1 ');
    spoken = spoken.replace(/_([a-zA-Z0-9])/g, ' $1');

    // Chỉ số trên (điện tích ion): Na^+ -> Na dương, Cl^- -> Cl âm
    spoken = spoken.replace(/\^\{(\d+)\+\}/g, ' $1 dương ');
    spoken = spoken.replace(/\^\{(\d+)-\}/g, ' $1 âm ');
    spoken = spoken.replace(/\^\+/g, ' dương ');
    spoken = spoken.replace(/\^-/g, ' âm ');
    spoken = spoken.replace(/\^\{([^}]+)\}/g, ' mũ $1 ');

    // Ký hiệu hóa học đặc thù
    spoken = spoken.replace(/\\Delta H/gi, ' biến thiên entanpi ');
    spoken = spoken.replace(/\\Delta G/gi, ' biến thiên năng lượng tự do ');
    spoken = spoken.replace(/\\Delta S/gi, ' biến thiên entropy ');

  } else {
    // ── Toán học / Mặc định ─────────────────────────────────────

    // \text{} trong toán thường là ghi chú chữ
    spoken = spoken.replace(/\\text\{([^}]+)\}/g, ' $1 ');
    spoken = spoken.replace(/\\mathrm\{([^}]+)\}/g, ' $1 ');

    // Phân số: \frac{a}{b} -> a trên b
    spoken = spoken.replace(/\\dfrac\{([^}]+)\}\{([^}]+)\}/g, '$1 trên $2');
    spoken = spoken.replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, '$1 trên $2');

    // Căn bậc hai: \sqrt{x} -> căn x, \sqrt[3]{x} -> căn bậc 3 của x
    spoken = spoken.replace(/\\sqrt\[(\d+)\]\{([^}]+)\}/g, ' căn bậc $1 của $2 ');
    spoken = spoken.replace(/\\sqrt\{([^}]+)\}/g, ' căn $1 ');
    spoken = spoken.replace(/\\sqrt([a-zA-Z0-9])/g, ' căn $1');

    // Mũ / lũy thừa đặc biệt: x^2, x^3
    spoken = spoken.replace(/\^\{2\}/g, ' bình phương');
    spoken = spoken.replace(/\^2(?![0-9])/g, ' bình phương');
    spoken = spoken.replace(/\^\{3\}/g, ' mũ ba');
    spoken = spoken.replace(/\^3(?![0-9])/g, ' mũ ba');
    // Mũ tổng quát: x^{n+1} -> x mũ n+1
    spoken = spoken.replace(/\^\{([^}]+)\}/g, ' mũ $1 ');
    spoken = spoken.replace(/\^([a-zA-Z0-9])/g, ' mũ $1');

    // Chỉ số dưới: x_1, x_{n+1}
    spoken = spoken.replace(/_\{([^}]+)\}/g, ' $1 ');
    spoken = spoken.replace(/_([a-zA-Z0-9])/g, ' $1');
  }

  // ═══════════════════════════════════════════════════════════════
  // PHẦN 3: Ký hiệu quan hệ và logic (Chung cho tất cả môn)
  // ═══════════════════════════════════════════════════════════════
  // Mũi tên suy ra / tương đương
  spoken = spoken.replace(/\\Rightarrow/g, ' suy ra ');
  spoken = spoken.replace(/\\Leftrightarrow/g, ' tương đương ');
  spoken = spoken.replace(/\\implies/g, ' suy ra ');
  spoken = spoken.replace(/\\iff/g, ' khi và chỉ khi ');

  // So sánh
  spoken = spoken.replace(/\\neq/g, ' khác ');
  spoken = spoken.replace(/\\ne/g, ' khác ');
  spoken = spoken.replace(/\\leq/g, ' nhỏ hơn hoặc bằng ');
  spoken = spoken.replace(/\\le(?![a-z])/g, ' nhỏ hơn hoặc bằng ');
  spoken = spoken.replace(/\\geq/g, ' lớn hơn hoặc bằng ');
  spoken = spoken.replace(/\\ge(?![a-z])/g, ' lớn hơn hoặc bằng ');
  spoken = spoken.replace(/\\lt/g, ' nhỏ hơn ');
  spoken = spoken.replace(/\\gt/g, ' lớn hơn ');
  spoken = spoken.replace(/\\approx/g, ' xấp xỉ ');
  spoken = spoken.replace(/\\sim/g, ' đồng dạng ');
  spoken = spoken.replace(/\\equiv/g, ' đồng dư ');
  spoken = spoken.replace(/\\cong/g, ' bằng nhau ');

  // ═══════════════════════════════════════════════════════════════
  // PHẦN 4: Phép toán và toán tử
  // ═══════════════════════════════════════════════════════════════
  spoken = spoken.replace(/\\pm/g, ' cộng trừ ');
  spoken = spoken.replace(/\\mp/g, ' trừ cộng ');
  spoken = spoken.replace(/\\cdot/g, ' nhân ');
  spoken = spoken.replace(/\\times/g, ' nhân ');
  spoken = spoken.replace(/\\div/g, ' chia ');

  // ═══════════════════════════════════════════════════════════════
  // PHẦN 5: Ký hiệu Hình học (Geometry)
  // ═══════════════════════════════════════════════════════════════
  // Góc
  spoken = spoken.replace(/\\widehat\{([^}]+)\}/g, ' góc $1 ');
  spoken = spoken.replace(/\\hat\{([^}]+)\}/g, ' góc $1 ');
  spoken = spoken.replace(/\\angle/g, ' góc ');
  // Độ: 90^\circ -> 90 độ
  spoken = spoken.replace(/\^\{?\\circ\}?/g, ' độ ');
  // Vuông góc, song song
  spoken = spoken.replace(/\\perp/g, ' vuông góc ');
  spoken = spoken.replace(/\\parallel/g, ' song song ');
  // Đường (overline, overrightarrow)
  spoken = spoken.replace(/\\overline\{([^}]+)\}/g, ' đoạn $1 ');
  spoken = spoken.replace(/\\overrightarrow\{([^}]+)\}/g, ' véc tơ $1 ');
  spoken = spoken.replace(/\\vec\{([^}]+)\}/g, ' véc tơ $1 ');
  // Tam giác
  spoken = spoken.replace(/\\triangle/g, ' tam giác ');

  // ═══════════════════════════════════════════════════════════════
  // PHẦN 6: Chữ cái Hy Lạp
  // ═══════════════════════════════════════════════════════════════
  spoken = spoken.replace(/\\Delta/g, ' delta ');
  spoken = spoken.replace(/\\delta/g, ' delta ');
  spoken = spoken.replace(/\\alpha/g, ' alpha ');
  spoken = spoken.replace(/\\beta/g, ' beta ');
  spoken = spoken.replace(/\\gamma/g, ' gamma ');
  spoken = spoken.replace(/\\theta/g, ' theta ');
  spoken = spoken.replace(/\\lambda/g, ' lambda ');
  spoken = spoken.replace(/\\mu/g, ' mu ');
  spoken = spoken.replace(/\\sigma/g, ' sigma ');
  spoken = spoken.replace(/\\omega/g, ' omega ');
  spoken = spoken.replace(/\\Omega/g, ' omega ');
  spoken = spoken.replace(/\\epsilon/g, ' epsilon ');
  spoken = spoken.replace(/\\varepsilon/g, ' epsilon ');
  spoken = spoken.replace(/\\varphi/g, ' phi ');
  spoken = spoken.replace(/\\phi/g, ' phi ');
  spoken = spoken.replace(/\\rho/g, ' rho ');
  spoken = spoken.replace(/\\tau/g, ' tau ');
  spoken = spoken.replace(/\\pi/g, ' pi ');

  // ═══════════════════════════════════════════════════════════════
  // PHẦN 7: Hàm số lượng giác & các hàm toán phổ biến
  // ═══════════════════════════════════════════════════════════════
  spoken = spoken.replace(/\\sin/g, ' sin ');
  spoken = spoken.replace(/\\cos/g, ' cos ');
  spoken = spoken.replace(/\\tan/g, ' tan ');
  spoken = spoken.replace(/\\cot/g, ' cot ');
  spoken = spoken.replace(/\\log/g, ' log ');
  spoken = spoken.replace(/\\ln/g, ' ln ');
  spoken = spoken.replace(/\\lim/g, ' giới hạn ');
  spoken = spoken.replace(/\\max/g, ' max ');
  spoken = spoken.replace(/\\min/g, ' min ');
  spoken = spoken.replace(/\\sum/g, ' tổng ');
  spoken = spoken.replace(/\\prod/g, ' tích ');
  spoken = spoken.replace(/\\int/g, ' tích phân ');

  // ═══════════════════════════════════════════════════════════════
  // PHẦN 8: Ký hiệu tập hợp & logic nâng cao
  // ═══════════════════════════════════════════════════════════════
  spoken = spoken.replace(/\\in/g, ' thuộc ');
  spoken = spoken.replace(/\\notin/g, ' không thuộc ');
  spoken = spoken.replace(/\\subset/g, ' tập con của ');
  spoken = spoken.replace(/\\supset/g, ' tập chứa ');
  spoken = spoken.replace(/\\cap/g, ' giao ');
  spoken = spoken.replace(/\\cup/g, ' hợp ');
  spoken = spoken.replace(/\\emptyset/g, ' tập rỗng ');
  spoken = spoken.replace(/\\varnothing/g, ' tập rỗng ');
  spoken = spoken.replace(/\\infty/g, ' vô cực ');
  spoken = spoken.replace(/\\forall/g, ' với mọi ');
  spoken = spoken.replace(/\\exists/g, ' tồn tại ');
  spoken = spoken.replace(/\\mathbb\{R\}/g, ' tập số thực ');
  spoken = spoken.replace(/\\mathbb\{N\}/g, ' tập số tự nhiên ');
  spoken = spoken.replace(/\\mathbb\{Z\}/g, ' tập số nguyên ');
  spoken = spoken.replace(/\\mathbb\{Q\}/g, ' tập số hữu tỷ ');

  // ═══════════════════════════════════════════════════════════════
  // PHẦN 9: Khoảng trắng và dấu câu LaTeX
  // ═══════════════════════════════════════════════════════════════
  spoken = spoken.replace(/\\quad/g, ', ');
  spoken = spoken.replace(/\\qquad/g, ', ');
  spoken = spoken.replace(/\\;/g, ' ');
  spoken = spoken.replace(/\\,/g, ' ');
  spoken = spoken.replace(/\\!/g, '');
  spoken = spoken.replace(/\\:/g, ' ');

  // ═══════════════════════════════════════════════════════════════
  // PHẦN 10: Dọn dẹp cuối cùng - Loại bỏ cú pháp LaTeX còn sót
  // ═══════════════════════════════════════════════════════════════
  // Loại bỏ các lệnh LaTeX còn sót (ví dụ: \phantom, \hspace, \vspace, ...)
  spoken = spoken.replace(/\\[a-zA-Z]+/g, ' ');

  // Loại bỏ ký hiệu đô la (delimiters inline math)
  spoken = spoken.replace(/\$/g, '');

  // Loại bỏ gạch chéo ngược dư thừa
  spoken = spoken.replace(/\\/g, ' ');

  // Loại bỏ ngoặc nhọn dư thừa
  spoken = spoken.replace(/\{/g, ' ');
  spoken = spoken.replace(/\}/g, ' ');

  // Chuẩn hóa dấu câu bị lặp
  spoken = spoken.replace(/,\s*,/g, ',');
  spoken = spoken.replace(/\.\s*\./g, '.');

  // Chuẩn hóa khoảng trắng
  spoken = spoken.replace(/\s+/g, ' ').trim();

  return spoken;
};
