import type { CourseQuestion, CourseSolution } from '@/data/schema';

type EnglishQuestionKind =
  | 'pronunciation'
  | 'vocabulary'
  | 'grammar'
  | 'reading'
  | 'writing'
  | 'communication';

const optionLetters = ['A', 'B', 'C', 'D'] as const;
const absoluteWords = /\b(always|all|only|every|never|forever|guarantee[sd]?|completely|impossible|no one|everyone)\b/i;
const stopWords = new Set([
  'a', 'an', 'and', 'are', 'as', 'at', 'be', 'because', 'been', 'being', 'but', 'by',
  'can', 'could', 'did', 'do', 'does', 'for', 'from', 'had', 'has', 'have', 'how',
  'in', 'into', 'is', 'it', 'its', 'may', 'might', 'more', 'not', 'of', 'on', 'or',
  'should', 'than', 'that', 'the', 'their', 'them', 'there', 'these', 'they', 'this',
  'to', 'was', 'were', 'what', 'when', 'where', 'which', 'why', 'will', 'with', 'would'
]);

const stripOptionPrefix = (value: string): string =>
  value.replace(/^[A-D][.)]\s*/i, '').trim();

const questionKind = (question: CourseQuestion): EnglishQuestionKind => {
  const id = question.questionTypeId.toLowerCase();
  if (id.includes('reading')) return 'reading';
  if (id.includes('writing')) return 'writing';
  if (id.includes('grammar')) return 'grammar';
  if (id.includes('vocab')) return 'vocabulary';
  if (id.includes('pron')) return 'pronunciation';
  return 'communication';
};

const taskTranslation = (question: CourseQuestion, kind: EnglishQuestionKind): string => {
  const prompt = question.content.trim();
  if (/what is the main idea/i.test(prompt)) return 'Ý chính của bài đọc là gì?';
  if (/what is the main lesson/i.test(prompt)) return 'Bài học hoặc thông điệp chính của bài đọc là gì?';
  if (/which conclusion best/i.test(prompt)) return 'Kết luận nào phản ánh đúng nhất nội dung bài đọc?';
  if (/which title best/i.test(prompt)) return 'Tiêu đề nào phù hợp nhất với bài đọc?';
  if (/according to (the passage|paragraph)/i.test(prompt)) {
    return 'Theo thông tin được nêu trực tiếp trong bài đọc, phương án nào đúng?';
  }
  if (/what does .+ refer to/i.test(prompt)) {
    return 'Từ hoặc đại từ được hỏi đang chỉ người/vật nào trong bài?';
  }
  if (/why\b/i.test(prompt) && kind === 'reading') {
    return 'Bài đọc đưa ra nguyên nhân hoặc bằng chứng nào cho sự việc được hỏi?';
  }
  if (
    /best order|correct order/i.test(prompt) ||
    (kind === 'writing' && /\border\b/i.test(prompt))
  ) {
    return 'Hãy sắp xếp các câu theo thứ tự hợp lý nhất.';
  }
  if (/choose the (correct|best)/i.test(prompt)) {
    return 'Chọn phương án đúng và phù hợp nhất với cấu trúc hoặc ngữ cảnh.';
  }
  if (/which (sentence|statement|option|response|question|phrase)/i.test(prompt)) {
    return 'Chọn câu hoặc cách diễn đạt đáp ứng đúng yêu cầu được nêu.';
  }
  if (/stands for|full form|contracted form/i.test(prompt)) {
    return 'Xác định dạng đầy đủ hoặc dạng rút gọn chính xác.';
  }
  if (/means|meaning/i.test(prompt)) return 'Xác định nghĩa chính xác trong ngữ cảnh.';
  if (kind === 'reading') return 'Đọc câu hỏi, tìm câu liên quan trong bài rồi chọn đáp án.';
  if (kind === 'writing') return 'Nhìn cách các ý nối với nhau để chọn câu hoặc thứ tự phù hợp.';
  if (kind === 'grammar') return 'Xác định dấu hiệu và áp dụng đúng cấu trúc ngữ pháp vào câu.';
  if (kind === 'vocabulary') return 'Xác định nghĩa, từ loại và cụm từ phù hợp với ngữ cảnh.';
  if (kind === 'pronunciation') return 'Áp dụng quy tắc phát âm, trọng âm hoặc ngữ điệu được hỏi.';
  return 'Xác định mục đích giao tiếp và chọn phản hồi tự nhiên, phù hợp nhất.';
};

const recognitionFor = (question: CourseQuestion, fallback: string): string => {
  const prompt = question.content;
  const kind = questionKind(question);
  if (kind === 'reading') {
    if (/main idea|main lesson|best title/i.test(prompt)) {
      return 'Đây là câu hỏi ý chính: cần tổng hợp thông điệp xuyên suốt nhiều đoạn, không chọn một ví dụ hoặc chi tiết nhỏ.';
    }
    if (/refer to/i.test(prompt)) {
      return 'Câu hỏi đang hỏi một đại từ chỉ ai/cái gì: đọc câu chứa đại từ và câu ngay trước đó để tìm đúng danh từ.';
    }
    if (/infer|suggest|imply|conclusion|why/i.test(prompt)) {
      return 'Câu hỏi cần suy ra từ bài: chỉ chọn điều có thể rút ra từ câu chữ trong bài, không tự thêm thông tin bên ngoài.';
    }
    return 'Đây là câu hỏi chi tiết: gạch chân từ khóa, tìm đoạn có cùng ý rồi đọc trọn câu trước khi chọn.';
  }
  if (kind === 'writing') {
    if (/order/i.test(prompt)) {
      return 'Đây là câu sắp xếp: tìm câu mở đầu, mốc thời gian, từ báo hiệu bước tiếp theo và từ báo hiệu kết quả.';
    }
    if (/connector|linker/i.test(prompt)) {
      return 'Cần xác định quan hệ nghĩa giữa hai vế trước khi chọn từ nối và kiểm tra cấu trúc theo sau từ nối.';
    }
    if (/revision|rewrite|transform/i.test(prompt)) {
      return 'Câu viết lại phải giữ nguyên ý, đúng cấu trúc và không được nói mạnh hơn câu gốc.';
    }
  }
  return fallback;
};

const firstStepFor = (question: CourseQuestion, kind: EnglishQuestionKind): string => {
  const prompt = question.content;
  if (kind === 'reading') {
    if (/main idea|main lesson|best title/i.test(prompt)) {
      return 'Đọc câu mở đầu và kết luận của các đoạn, gạch chân ý được lặp lại hoặc phát triển nhiều lần; tạm bỏ qua các ví dụ riêng lẻ.';
    }
    if (/refer to/i.test(prompt)) {
      return 'Quay lại câu chứa từ được hỏi, thử thay từng danh từ gần trước nó vào vị trí đại từ rồi kiểm tra nghĩa và số ít/số nhiều.';
    }
    if (/infer|suggest|imply|conclusion|why/i.test(prompt)) {
      return 'Khoanh từ khóa trong câu hỏi, tìm câu chứa thông tin liên quan và chỉ suy luận thêm một bước từ bằng chứng đó.';
    }
    return 'Khoanh từ khóa quan trọng, tìm từ đồng nghĩa hoặc cách diễn đạt tương đương trong bài rồi đọc trọn câu chứa thông tin.';
  }
  if (kind === 'grammar') {
    return 'Xác định từ đứng trước/sau chỗ trống, dấu hiệu thời gian và quan hệ nghĩa; sau đó đặt từng phương án vào câu hoàn chỉnh để kiểm tra.';
  }
  if (kind === 'vocabulary') {
    return 'Xác định nghĩa cần diễn đạt và vị trí từ loại, sau đó đọc cả cụm để kiểm tra collocation thay vì dịch từng từ riêng lẻ.';
  }
  if (kind === 'pronunciation') {
    return 'Xác định chính xác yếu tố được kiểm tra (dạng mạnh/yếu, nối âm, trọng âm hay ngữ điệu) rồi xét vị trí và mục đích phát ngôn.';
  }
  if (kind === 'writing') {
    if (/order/i.test(prompt)) {
      return 'Tìm các từ như “first”, “now”, “finally”, “as a result” hoặc mốc thời gian. Chúng cho biết câu nào đứng trước và câu nào đứng sau.';
    }
    return 'Tìm câu mở đầu, từ nối và các từ như “this/they/it”; sau đó xem ý nào là nguyên nhân, ý nào là kết quả.';
  }
  return 'Xác định mục đích của lượt lời trước và quan hệ giữa người nói; loại câu lạc đề, thiếu lịch sự hoặc không giúp hội thoại tiếp tục.';
};

const grammarFormulaByModule: Record<string, string> = {
  'eng11-m1': 'Past Simple: S + V2/ed; Present Perfect: S + have/has + V3; since + mốc, for + khoảng thời gian.',
  'eng11-m2': 'must/should + V nguyên mẫu; have to + V; mustn’t = bị cấm; don’t have to = không cần thiết.',
  'eng11-m3': 'Linking verb + adjective/noun; stative verbs thường không dùng ở Continuous trừ khi nghĩa thay đổi.',
  'eng11-m4': 'Gerund (V-ing) có thể làm chủ ngữ hoặc tân ngữ; chọn dạng theo chức năng trong câu.',
  'eng11-m5': 'V-ing clause: chủ động; V3/ed clause: bị động; participle clause phải cùng chủ ngữ logic với mệnh đề chính.',
  'eng11-m6': 'to + V có thể diễn tả mục đích hoặc bổ nghĩa sau một số danh từ/tính từ.',
  'eng11-m7': 'Perfect gerund: having + V3; perfect participle: having + V3, nhấn mạnh hành động xảy ra trước.',
  'eng11-m8': 'Cleft sentence: It + be + thành phần được nhấn + that/who + mệnh đề còn lại.',
  'eng11-m9': 'although + clause; despite/in spite of + noun/V-ing; because + clause; because of + noun/V-ing.',
  'eng11-m10': 'Compound noun: modifier + head noun; số nhiều thường đặt ở head noun; cách viết theo quy ước từ vựng.'
};

const pronunciationRuleByModule: Record<string, string> = {
  'eng11-m1': 'Trợ động từ không mang trọng âm thường có dạng yếu; khi đứng độc lập hoặc mang ý đối lập sẽ dùng dạng mạnh.',
  'eng11-m2': 'Dạng rút gọn phải được mở rộng theo động từ phía sau và ngữ cảnh: ’s = is/has; ’d = would/had.',
  'eng11-m3': 'Phụ âm cuối có thể nối với nguyên âm đầu của từ sau trong dòng nói tự nhiên.',
  'eng11-m4': 'Unstressed vowel thường chuyển thành /ə/ hoặc bị lược trong lời nói tự nhiên.',
  'eng11-m5': 'Content words và thông tin đối lập thường được nhấn; function words thường yếu.',
  'eng11-m6': 'Câu kể/mệnh lệnh thường xuống giọng; danh sách lên ở các mục chưa cuối và xuống ở mục cuối.',
  'eng11-m7': 'Yes/No question thường lên giọng; Wh-question thường xuống, nhưng ngữ cảnh có thể thay đổi sắc thái.',
  'eng11-m8': 'Ngữ điệu phụ thuộc mục đích, quan hệ và mức độ khẩn cấp của lời mời, đề nghị hoặc yêu cầu.',
  'eng11-m9': 'Choice question: phương án chưa cuối lên giọng, phương án cuối xuống giọng.',
  'eng11-m10': 'Question tag lên giọng khi hỏi xác nhận thật; xuống giọng khi người nói kỳ vọng đồng thuận.'
};

const tokenize = (value: string): string[] =>
  value
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s-]/gu, ' ')
    .split(/\s+/)
    .filter(token => token.length > 2 && !stopWords.has(token));

const readingEvidence = (question: CourseQuestion, correctOption: string): string | undefined => {
  const content = question.stimulus?.content;
  if (!content) return undefined;
  const target = new Set(tokenize(`${question.content} ${correctOption}`));
  const candidates = content
    .split(/\n\s*\n/)
    .flatMap((paragraph, paragraphIndex) =>
      paragraph
        .split(/(?<=[.!?])\s+/)
        .map(sentence => ({
          paragraph: paragraphIndex + 1,
          sentence: sentence.trim(),
          score: tokenize(sentence).reduce(
            (score, token) => score + (target.has(token) ? 1 : 0),
            0
          )
        }))
    )
    .filter(item => item.sentence.length > 0)
    .sort((left, right) => right.score - left.score);

  const selected = candidates
    .filter((item, index, items) =>
      item.score > 0 &&
      items.findIndex(candidate => candidate.sentence === item.sentence) === index
    )
    .slice(0, /main idea|main lesson|conclusion|best title/i.test(question.content) ? 2 : 1);

  if (selected.length === 0) return undefined;
  return selected
    .map(item => `Đoạn ${item.paragraph}: “${item.sentence}”`)
    .join('\n');
};

type OrderingClause = { label: string; text: string };

const orderingClauses = (content: string): OrderingClause[] => {
  const clauses: OrderingClause[] = [];
  const expression = /\(([a-z])\)\s*([\s\S]*?)(?=\s*\([a-z]\)|\s*Choose the best order|$)/gi;
  for (const match of content.matchAll(expression)) {
    clauses.push({
      label: match[1].toLowerCase(),
      text: match[2].trim().replace(/[.;]\s*$/, '')
    });
  }
  return clauses;
};

const friendlyClauseClue = (text: string, position: number, total: number): string => {
  if (/\b(first|initially|started?|three months ago|ago)\b/i.test(text)) {
    return 'có dấu hiệu bắt đầu hoặc mốc thời gian trước, nên dùng để mở câu chuyện';
  }
  if (/^(as a result|therefore|consequently|this raises|this improves)/i.test(text)) {
    return 'đang nói kết quả/tác động, nên phải đứng sau phần nguyên nhân';
  }
  if (/\bfinally\b/i.test(text)) return 'có từ “Finally” (cuối cùng), nên đặt ở cuối';
  if (/\bnext\b/i.test(text)) return 'có từ “Next” (tiếp theo), nên đứng sau bước đầu';
  if (/\b(now|currently)\b/i.test(text)) return 'nói về tình trạng hiện tại, nên đứng sau câu kể việc bắt đầu';
  if (/\b(review|evaluate|monitor outcomes?|feedback)\b/i.test(text)) {
    return 'là bước kiểm tra/đánh giá, thường đặt sau khi đã thực hiện';
  }
  if (/\b(register|apply|contact|submit)\b/i.test(text)) {
    return 'là lời kêu gọi hành động, nên đặt sau phần giới thiệu và thông tin chính';
  }
  if (position === 0) return 'giới thiệu chủ đề hoặc vấn đề trước khi nói chi tiết';
  if (position === total - 1) return 'khép lại bằng hành động, giải pháp hoặc kết quả';
  return 'bổ sung bước hoặc chi tiết cần biết trước khi đi tới kết quả';
};

const orderingEvidence = (question: CourseQuestion, correctOption: string): string | undefined => {
  if (!/order/i.test(question.content) || !/^[a-z](?:-[a-z]){2,}$/i.test(correctOption)) {
    return undefined;
  }
  const clauses = orderingClauses(question.content);
  if (clauses.length < 3) return undefined;
  const clauseByLabel = new Map(clauses.map(clause => [clause.label, clause]));
  const order = correctOption.toLowerCase().split('-');
  const lines = order.map((label, index) => {
    const clause = clauseByLabel.get(label);
    if (!clause) return undefined;
    const position = index === 0 ? 'đứng đầu' : index === order.length - 1 ? 'đứng cuối' : 'đứng giữa';
    return `• Câu ${label} ${position}: “${clause.text}” — ${friendlyClauseClue(clause.text, index, order.length)}.`;
  }).filter(Boolean);
  return `${lines.join('\n')}\n\nVậy thứ tự tự nhiên là: ${order.join(' → ')}.`;
};

const orderingWrongReason = (
  question: CourseQuestion,
  optionText: string,
  correctOption: string
): string | undefined => {
  if (!/order/i.test(question.content)) return undefined;
  const proposed = optionText.toLowerCase().split('-');
  const correct = correctOption.toLowerCase().split('-');
  if (proposed.length !== correct.length || proposed.length < 3) return undefined;
  const clauseByLabel = new Map(
    orderingClauses(question.content).map(clause => [clause.label, clause.text])
  );
  const mismatchIndex = proposed.findIndex((label, index) => label !== correct[index]);
  if (mismatchIndex < 0) return undefined;
  const wrongLabel = proposed[mismatchIndex];
  const rightLabel = correct[mismatchIndex];
  const wrongText = clauseByLabel.get(wrongLabel) ?? `câu ${wrongLabel}`;
  const rightText = clauseByLabel.get(rightLabel) ?? `câu ${rightLabel}`;
  if (mismatchIndex === 0) {
    return `Mở đầu bằng câu ${wrongLabel} chưa hợp lý. “${wrongText}” đang nói tiếp một ý khác; câu ${rightLabel} (“${rightText}”) mới giới thiệu điểm bắt đầu.`;
  }
  return `Sau câu ${correct[mismatchIndex - 1]}, cần đến câu ${rightLabel} (“${rightText}”), nhưng phương án lại đưa câu ${wrongLabel} (“${wrongText}”) lên trước nên mạch ý bị đảo.`;
};

const orderingCorrectReason = (question: CourseQuestion, correctOption: string): string | undefined => {
  if (!/order/i.test(question.content) || !/^[a-z](?:-[a-z]){2,}$/i.test(correctOption)) {
    return undefined;
  }
  const order = correctOption.toLowerCase().split('-');
  const clauseByLabel = new Map(
    orderingClauses(question.content).map(clause => [clause.label, clause.text])
  );
  const shortClue = (label: string, index: number): string => {
    const text = clauseByLabel.get(label) ?? '';
    const signal = text.match(/\b(three months ago|as a result|finally|first|next|now|currently|therefore)\b/i)?.[0];
    if (signal) return `câu ${label} có “${signal}”`;
    if (/^this\b/i.test(text)) return `câu ${label} bắt đầu bằng “This”, nối với ý ngay trước`;
    if (/\b(proposal|restore|introduce|register|record|compare|assign|monitor)\w*\b/i.test(text)) {
      return `câu ${label} nêu việc cần làm`;
    }
    if (index === 0) return `câu ${label} giới thiệu vấn đề/chủ đề`;
    if (index === order.length - 1) return `câu ${label} khép lại ý`;
    return `câu ${label} nói tiếp diễn biến`;
  };
  return `${order.map(shortClue).join('; ')}. Vì vậy xếp ${order.join(' → ')}.`;
};

const grammarOptionRule = (optionText: string): string | undefined => {
  const value = optionText.trim().toLowerCase();
  if (value === 'although') return 'Although diễn tả tương phản và phải đứng trước một mệnh đề đầy đủ S + V.';
  if (value === 'despite' || value === 'in spite of') {
    return `${optionText} diễn tả tương phản nhưng phải đứng trước danh từ, cụm danh từ hoặc V-ing; không đứng trực tiếp trước mệnh đề S + V.`;
  }
  if (value === 'because') return 'Because nêu nguyên nhân và phải đứng trước một mệnh đề đầy đủ S + V.';
  if (value === 'because of') return 'Because of nêu nguyên nhân nhưng phải đứng trước danh từ, cụm danh từ hoặc V-ing.';
  if (value === 'however') return 'However là trạng từ nối chỉ tương phản; khi nối hai mệnh đề độc lập cần dấu câu phù hợp.';
  if (value === 'therefore') return 'Therefore giới thiệu kết quả, không giới thiệu nguyên nhân hay tương phản.';
  if (value === 'moreover' || value === 'in addition') {
    return `${optionText} dùng để bổ sung thông tin cùng chiều, không diễn đạt tương phản hay nguyên nhân.`;
  }
  if (value === 'as a result' || value === 'consequently') {
    return `${optionText} giới thiệu kết quả của ý trước và cần dấu câu phù hợp khi nối các mệnh đề.`;
  }
  if (value === 'since') return 'Since đi với một mốc bắt đầu hoặc một mệnh đề chỉ thời điểm bắt đầu.';
  if (value === 'for') return 'For đi với một khoảng thời gian, không đi với mốc thời gian cụ thể.';
  if (value === 'yet') return 'Yet thường xuất hiện ở cuối câu hỏi hoặc câu phủ định trong Present Perfect.';
  if (value === 'must') return 'Must + V nguyên mẫu diễn tả nghĩa vụ mạnh hoặc điều người nói xem là bắt buộc.';
  if (value === 'mustn’t' || value === 'must not') return 'Mustn’t/must not có nghĩa bị cấm, không có nghĩa “không cần thiết”.';
  if (/don.?t have to|doesn.?t have to|do not have to|does not have to/.test(value)) {
    return 'Don’t/doesn’t have to có nghĩa không cần thiết, không mang nghĩa cấm đoán.';
  }
  if (value === 'should' || value === 'should not') {
    return `${optionText} + V nguyên mẫu dùng cho lời khuyên, không phải nghĩa vụ bắt buộc.`;
  }
  if (/although.+\bbut\b/i.test(optionText)) {
    return 'Although đã mang nghĩa tương phản nên không dùng thêm but trong cùng cấu trúc.';
  }
  if (/because.+\bso\b/i.test(optionText)) {
    return 'Because đã giới thiệu nguyên nhân nên không ghép thêm so theo cấu trúc chuẩn.';
  }
  if (/^despite\s+\w+\s+(is|are|was|were|has|have|had|did|does|do)\b/i.test(optionText)) {
    return 'Sau despite đang là một mệnh đề có chủ ngữ và động từ; phải đổi thành cụm danh từ/V-ing hoặc dùng although.';
  }
  return undefined;
};

const wrongOptionReason = (
  question: CourseQuestion,
  optionText: string,
  kind: EnglishQuestionKind,
  correctRationale: string,
  correctOption: string
): string => {
  const orderReason = orderingWrongReason(question, optionText, correctOption);
  if (orderReason) return orderReason;
  const absoluteWord = optionText.match(absoluteWords)?.[0];
  if (absoluteWord) {
    return `Từ “${absoluteWord}” làm câu khẳng định quá chắc. Bài hoặc tình huống không nói mạnh đến mức đó.`;
  }
  if (kind === 'reading') {
    if (/main idea|main lesson|best title/i.test(question.content)) {
      const distractorEvidence = readingEvidence(question, optionText)?.split('\n')[0];
      return distractorEvidence
        ? `Bài có nhắc ý gần giống ở ${distractorEvidence.replace(/^Đoạn\s+/i, 'đoạn ')}, nhưng đó chỉ là một ví dụ/chi tiết nhỏ, không bao quát toàn bài.`
        : 'Ý này không được bài phát triển xuyên suốt, nên không thể là ý chính.';
    }
    if (/infer|suggest|imply|conclusion|why/i.test(question.content)) {
      return 'Bài không cho đủ bằng chứng để kết luận như vậy, hoặc ý này ngược với điều bài nói.';
    }
    return 'Bài không nói như phương án này, hoặc phương án đã đổi ý của câu trong bài.';
  }
  if (kind === 'grammar') {
    return grammarOptionRule(optionText) ??
      `Không dùng được trong câu này. Dấu hiệu cần nhớ là: ${correctRationale}`;
  }
  if (kind === 'vocabulary') {
    return `Từ/cụm này không có nghĩa phù hợp. Câu đang hỏi về: ${correctRationale}`;
  }
  if (kind === 'pronunciation') {
    return `Cách đọc này không đúng trong trường hợp đang hỏi. Lý do: ${correctRationale}`;
  }
  if (kind === 'writing') {
    return `Cách viết/sắp xếp này làm ý bị ngược hoặc bị đứt. Dấu hiệu cần nhìn là: ${correctRationale}`;
  }
  return `Câu trả lời này chưa hợp với tình huống hoặc chưa đáp lại đúng ý người trước. Cách phù hợp cần: ${correctRationale}`;
};

const questionSpecificMistake = (
  question: CourseQuestion,
  kind: EnglishQuestionKind
): string => {
  if (kind === 'reading') {
    if (/main idea|main lesson|best title/i.test(question.content)) {
      return 'Đừng chọn một chi tiết nhỏ làm ý chính. Đáp án đúng phải bao quát được phần lớn bài đọc.';
    }
    return 'Đừng chọn chỉ vì thấy vài từ giống trong bài; hãy đọc cả câu để kiểm tra ý có thật sự giống nhau không.';
  }
  if (kind === 'grammar') {
    return 'Sau khi chọn, hãy đọc lại cả câu một lần để kiểm tra cả cấu trúc lẫn nghĩa.';
  }
  if (kind === 'vocabulary') {
    return 'Đừng dịch từng từ riêng lẻ; hãy đọc cả cụm để xem cách kết hợp từ có tự nhiên không.';
  }
  if (kind === 'pronunciation') {
    return 'Đừng đoán theo mặt chữ; hãy nhìn vị trí của từ và mục đích người nói.';
  }
  if (kind === 'writing') {
    return 'Đừng sắp xếp chỉ vì thấy từ giống nhau; hãy tìm từ chỉ thời gian, từ nối và câu nêu kết quả.';
  }
  return 'Một câu có thể đúng ngữ pháp nhưng vẫn sai nếu lạc đề, thiếu lịch sự hoặc không đáp lại người trước.';
};

const friendlyReviewSuggestion = (
  question: CourseQuestion,
  kind: EnglishQuestionKind
): string => {
  const unit = question.moduleId.replace('eng11-m', '');
  const topicByKind: Record<EnglishQuestionKind, string> = {
    pronunciation: 'cách phát âm, trọng âm hoặc ngữ điệu',
    vocabulary: 'nghĩa từ và các cụm từ thường đi cùng nhau',
    grammar: 'công thức ngữ pháp và dấu hiệu nhận biết',
    reading: 'cách tìm ý chính, chi tiết và bằng chứng trong bài đọc',
    writing: 'cách nối ý, sắp xếp câu và viết lại câu',
    communication: 'cách chọn lời đáp tự nhiên, đúng tình huống'
  };
  return `Unit ${unit}: ${topicByKind[kind]}.`;
};

export const buildDetailedEnglishSolutions = (
  questions: CourseQuestion[],
  baseSolutions: CourseSolution[]
): CourseSolution[] => {
  const questionById = new Map(questions.map(question => [question.id, question]));

  return baseSolutions.map(baseSolution => {
    const question = questionById.get(baseSolution.questionId);
    if (!question) return baseSolution;
    const kind = questionKind(question);
    const options = question.options ?? [];
    const correctIndex = optionLetters.indexOf(baseSolution.finalAnswer as typeof optionLetters[number]);
    const correctOption = stripOptionPrefix(options[correctIndex] ?? baseSolution.finalAnswer);
    const originalEvidence =
      baseSolution.detailedSteps[baseSolution.detailedSteps.length - 1]?.explanation ??
      baseSolution.recognition;
    const orderEvidence = kind === 'writing'
      ? orderingEvidence(question, correctOption)
      : undefined;
    const specificEvidence = orderEvidence ?? originalEvidence;
    const correctReason = orderingCorrectReason(question, correctOption) ?? originalEvidence;
    const passageEvidence = kind === 'reading'
      ? readingEvidence(question, correctOption)
      : undefined;
    const rule = kind === 'grammar'
      ? grammarFormulaByModule[question.moduleId]
      : kind === 'pronunciation'
        ? pronunciationRuleByModule[question.moduleId]
        : undefined;

    const evidenceExplanation = [
      passageEvidence,
      specificEvidence
    ].filter(Boolean).join('\n\n');

    const optionAnalysis = options
      .map((option, index) => {
        const letter = optionLetters[index];
        const body = stripOptionPrefix(option);
        if (letter === baseSolution.finalAnswer) {
          return `${letter}. ${body} — ĐÚNG: ${correctReason}`;
        }
        return `${letter}. ${body} — SAI: ${wrongOptionReason(question, body, kind, specificEvidence, correctOption)}`;
      })
      .join('\n');
    const evidenceTitle =
      kind === 'reading'
        ? 'Tìm câu làm bằng chứng'
        : kind === 'writing' && /order/i.test(question.content)
          ? 'Nhìn vào từ khóa'
          : kind === 'grammar'
            ? 'Dùng quy tắc vào câu'
            : kind === 'vocabulary'
              ? 'So nghĩa và cách dùng'
              : kind === 'pronunciation'
                ? 'Áp dụng cách đọc'
                : kind === 'communication'
                  ? 'Đặt vào tình huống'
                  : 'Giải câu hỏi';

    return {
      ...baseSolution,
      recognition: recognitionFor(question, baseSolution.recognition),
      translation: taskTranslation(question, kind),
      detailedSteps: [
        {
          order: 1,
          title: 'Bắt đầu từ đâu?',
          explanation: firstStepFor(question, kind)
        },
        {
          order: 2,
          title: evidenceTitle,
          explanation: evidenceExplanation,
          ...(rule ? { formula: rule } : {})
        },
        {
          order: 3,
          title: 'Vì sao chọn đáp án này?',
          explanation: optionAnalysis,
          result: `${baseSolution.finalAnswer}. ${correctOption}`
        }
      ],
      commonMistakes: [questionSpecificMistake(question, kind)],
      reviewSuggestions: [`Ôn nhanh: ${friendlyReviewSuggestion(question, kind)}`]
    };
  });
};
