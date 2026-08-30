import type { SolutionStep } from '@/types';
import type { AuthoredProblem } from './authored/helpers';
import type { AdvancedMathLevel } from './types';

type TopicProfile = {
  recognition: string;
  reading: string;
  stepControl: string;
  completeness: string;
  fallbackMistake: string;
  review: string;
};

const profiles: Record<string, TopicProfile> = {
  'math10-adv-algebra': {
    recognition: 'Dấu hiệu của dạng đại số nâng cao là các dữ kiện liên hệ với nhau và có thể được gom thành một cấu trúc quen thuộc thay vì tính từng đại lượng riêng lẻ.',
    reading: 'Hãy ghi riêng đại lượng đã biết, đại lượng phải tìm và mối liên hệ giữa chúng. Việc này giúp tránh khai triển dài hoặc giải từng ẩn khi đề chỉ cần một biểu thức trung gian.',
    stepControl: 'Phép biến đổi phải giữ phương trình tương đương và chỉ sử dụng những đại lượng đã được xác định từ giả thiết.',
    completeness: 'Kiểm tra lại điều kiện xác định, nghiệm bị loại và các trường hợp có thể phát sinh khi nhân, chia, bình phương hoặc đổi biến.',
    fallbackMistake: 'Khai triển hoặc giải trực tiếp quá sớm, làm mất cấu trúc đại số mà đề bài đang gợi ý.',
    review: 'ôn cách nhận dạng cấu trúc, điều kiện áp dụng và cách kiểm tra nghiệm sau biến đổi'
  },
  'math10-adv-functions': {
    recognition: 'Dạng hàm số–tham số cần đọc đồng thời công thức, miền xét và ý nghĩa hình học của số nghiệm, giao điểm hoặc cực trị.',
    reading: 'Trước khi tính, xác định biến đang chạy trên tập nào và câu hỏi đang yêu cầu giá trị, số nghiệm hay điều kiện của tham số. Ba yêu cầu này dẫn đến ba cách xử lí khác nhau.',
    stepControl: 'Mỗi phép biến đổi đại số phải được đối chiếu lại với miền xác định và hình dạng của đồ thị.',
    completeness: 'Đối chiếu các khoảng, điểm đổi dấu, đầu mút và trường hợp tiếp xúc để chắc chắn không đếm thiếu hoặc đếm lặp nghiệm.',
    fallbackMistake: 'Chỉ giải phương trình đại số mà quên diễn giải số nghiệm hoặc vị trí nghiệm trên đồ thị.',
    review: 'ôn miền xác định, cách đọc đồ thị và điều kiện để nghiệm thuộc đúng khoảng đang xét'
  },
  'math10-adv-inequalities': {
    recognition: 'Bài bất đẳng thức nâng cao thường che giấu một cận tối ưu; ngoài việc tìm cận còn phải chứng minh cận đó đạt được.',
    reading: 'Tách rõ điều kiện của các biến, biểu thức cần đánh giá và dấu bằng mong muốn. Điều kiện quyết định có thể dùng AM–GM, Cauchy hay một phép đổi biến hay không.',
    stepControl: 'Mỗi bất đẳng thức trung gian phải đúng chiều và có điều kiện xảy ra dấu bằng tương thích với giả thiết.',
    completeness: 'Ghép điều kiện dấu bằng của tất cả các bước rồi thay ngược vào giả thiết. Nếu không tồn tại bộ biến thỏa đồng thời thì cận vừa tìm chưa phải cực trị.',
    fallbackMistake: 'Tìm được một cận đúng nhưng không kiểm tra cận có đạt được hay không.',
    review: 'ôn điều kiện áp dụng và điều kiện dấu bằng của bất đẳng thức được sử dụng'
  },
  'math10-adv-number-theory': {
    recognition: 'Dạng số học yêu cầu giữ nguyên tính nguyên, tính chia hết hoặc lớp dư; biến đổi trên số thực thường không đủ để kết luận.',
    reading: 'Xác định rõ miền số nguyên, môđun, ước số hoặc số mũ nguyên tố xuất hiện trong đề. Sau đó chọn biểu diễn làm lộ tính chia hết thay vì thử số tùy ý.',
    stepControl: 'Mọi phép rút gọn đồng dư, phân tích thừa số hoặc đếm ước phải giữ đúng môđun và miền nghiệm nguyên.',
    completeness: 'Kiểm tra các lớp dư hoặc cặp ước đã xét có rời nhau và phủ hết trường hợp hay chưa; cuối cùng thay nghiệm trở lại điều kiện ban đầu.',
    fallbackMistake: 'Suy luận như trên số thực rồi mặc nhiên kết luận cho nghiệm nguyên hoặc bỏ sót một lớp dư.',
    review: 'ôn phép chia có dư, phân tích thừa số nguyên tố và cách chứng minh đã xét hết nghiệm nguyên'
  },
  'math10-adv-combinatorics': {
    recognition: 'Bài tổ hợp khó không nằm ở phép tính cuối mà ở việc xây dựng đúng đối tượng đếm và chia trường hợp không trùng nhau.',
    reading: 'Xác định một kết quả được xem là khác khi nào, có xét thứ tự hay không, và điều kiện cấm tác động đến vị trí nào. Chỉ sau đó mới chọn chỉnh hợp, tổ hợp, truy hồi hay bù.',
    stepControl: 'Khi cộng số trường hợp, các trường hợp phải rời nhau; khi nhân, mỗi lựa chọn ở bước sau phải tồn tại với mọi lựa chọn trước đó.',
    completeness: 'Dùng một phép đếm nhỏ, trường hợp biên hoặc phương pháp bù để xác nhận không bỏ sót và không đếm lặp đối tượng.',
    fallbackMistake: 'Áp dụng ngay công thức tổ hợp mà chưa xác định có xét thứ tự hoặc có đếm trùng hay không.',
    review: 'ôn quy tắc cộng–nhân, cách chia trường hợp và tiêu chí nhận biết các đối tượng bị đếm trùng'
  },
  'math10-adv-euclidean': {
    recognition: 'Dạng hình học cần đọc cấu hình trước công thức: cạnh, góc, đường tròn và các điểm đặc biệt quyết định định lý nào được phép dùng.',
    reading: 'Đánh dấu giả thiết trực tiếp trên hình, xác định tam giác hoặc đường tròn đang xét và đại lượng trung gian có thể nối giả thiết với kết luận.',
    stepControl: 'Mỗi hệ thức phải gắn với đúng tam giác, đúng cạnh đối diện hoặc đúng cấu hình đường tròn; không thay số trước khi xác định vai trò hình học.',
    completeness: 'Kiểm tra độ dài dương, thứ tự điểm, loại góc và giả thiết của định lý. Có thể ước lượng trên hình để phát hiện kết quả vô lí, nhưng không dùng hình vẽ thay cho chứng minh.',
    fallbackMistake: 'Nhớ đúng công thức nhưng gán sai cạnh, góc hoặc đoạn thẳng trong cấu hình đang xét.',
    review: 'ôn giả thiết của định lý và tập vẽ lại hình có đánh dấu đầy đủ các đại lượng liên quan'
  },
  'math10-adv-coordinate': {
    recognition: 'Dạng tọa độ–vectơ chuyển quan hệ hình học thành phương trình; điều quan trọng là chọn đúng vectơ, phương trình hoặc phép biến hình.',
    reading: 'Ghi tọa độ các điểm, vectơ chỉ phương/pháp tuyến và quan hệ cần bảo toàn. Thống nhất thứ tự tọa độ trước khi lập phương trình để tránh sai dấu.',
    stepControl: 'Sau mỗi phép tính tọa độ, đối chiếu lại ý nghĩa hình học như vuông góc, song song, thuộc đường hoặc bằng khoảng cách.',
    completeness: 'Thay điểm hoặc vectơ vừa tìm vào phương trình ban đầu và kiểm tra lại quan hệ hình học. Với bài cực trị, cần chứng minh điều kiện xảy ra dấu bằng thực sự đạt được.',
    fallbackMistake: 'Nhầm vectơ chỉ phương với vectơ pháp tuyến hoặc đổi dấu một tọa độ nhưng không đổi quan hệ hình học tương ứng.',
    review: 'ôn cách chuyển từng quan hệ hình học thành điều kiện tọa độ và cách thử lại kết quả'
  },
  'math10-adv-modeling': {
    recognition: 'Dạng mô hình hóa phải chuyển đúng dữ kiện thực tế thành biến, ràng buộc và đại lượng cần tối ưu hoặc xác suất cần tính.',
    reading: 'Nêu ý nghĩa và đơn vị của từng biến, xác định miền giá trị rồi mới lập biểu thức. Một mô hình tính đúng nhưng sai miền hoặc sai đơn vị vẫn cho đáp án sai.',
    stepControl: 'Mỗi con số trong biểu thức phải truy được về một dữ kiện của đề; các biến phải tiếp tục thỏa toàn bộ ràng buộc trong suốt phép tính.',
    completeness: 'Đối chiếu kết quả với miền khả thi, tính nguyên, xác suất trong đoạn từ 0 đến 1 và đơn vị thực tế. Nếu là tối ưu, cần chứng minh không còn điểm khả thi tốt hơn.',
    fallbackMistake: 'Lập đúng phép tính nhưng bỏ quên một ràng buộc, điều kiện nguyên hoặc đơn vị của kết quả.',
    review: 'ôn quy trình đặt biến, lập ràng buộc và kiểm tra tính hợp lí của đáp số trong bối cảnh thực tế'
  }
};

const fallbackProfile = profiles['math10-adv-algebra'];
const math = (value: string): string => `\\(${value}\\)`;
const unwrapMath = (value: string): string => value.startsWith('\\(') && value.endsWith('\\)')
  ? value.slice(2, -2)
  : value;
const primaryTags = (problem: AuthoredProblem): string[] => problem.tags.filter(tag => tag !== 'Olympic').slice(0, 2);

const knowledgeNotes: Record<string, string> = {
  'Viète': 'Nếu phương trình bậc hai có dạng \\(t^2-St+P=0\\) và hai nghiệm là \\(u,v\\), thì \\(u+v=S\\), \\(uv=P\\). Ta dùng hai hệ thức này để tính biểu thức đối xứng mà không cần tìm riêng \\(u,v\\).',
  'hệ thức Newton': 'Hệ thức Newton nối tổng lũy thừa của các nghiệm với các hệ số của đa thức. Ta nên lập lần lượt các tổng bậc thấp rồi mới suy ra tổng bậc cao, tránh khai triển trực tiếp từng nghiệm.',
  'phần dư đa thức': 'Nếu chia \\(P(x)\\) cho đa thức bậc hai và dư là \\(R(x)=ax+b\\), ta thay các nghiệm của đa thức chia vào đẳng thức \\(P=Q\\cdot D+R\\). Khi đó phần chứa \\(D\\) triệt tiêu và tạo đủ phương trình để tìm \\(a,b\\).',
  'sai phân': 'Với đa thức bậc hai tại các hoành độ cách đều, sai phân cấp hai không đổi. Vì vậy có thể kéo dài bảng giá trị bằng sai phân thay vì phải giải hệ ba ẩn tìm toàn bộ đa thức.',
  'AM-GM': 'AM–GM biến tổng thành một cận của tích hoặc ngược lại, nhưng chỉ áp dụng trực tiếp cho các số không âm. Giá trị tối ưu chỉ được kết luận khi các số ở điều kiện dấu bằng thực sự thỏa giả thiết.',
  'Cauchy': 'Cauchy–Schwarz tạo cận bằng cách ghép các bình phương hoặc phân thức. Trước khi dùng, cần chọn cách tách sao cho mẫu và tử tái tạo đúng điều kiện của đề, đồng thời ghi lại điều kiện dấu bằng.',
  'CRT': 'Định lý phần dư Trung Hoa cho phép ghép các điều kiện theo những môđun đôi một nguyên tố cùng nhau. Mỗi tổ hợp lớp dư thành phần tạo đúng một lớp dư theo tích các môđun.',
  'Legendre': 'Số mũ của số nguyên tố \\(p\\) trong \\(n!\\) là \\(\\sum_{k\\ge1}\\left\\lfloor n/p^k\\right\\rfloor\\). Mỗi số hạng đếm thêm một lần các bội chứa ít nhất \\(k\\) thừa số \\(p\\).',
  'Dirichlet': 'Nguyên lý Dirichlet chỉ phát huy tác dụng sau khi xác định đúng “hộp”. Muốn buộc hai đối tượng có tính chất cần tìm, ta chia các đối tượng thành những nhóm mà việc chọn hai phần tử cùng nhóm tạo ngay tính chất đó.',
  'bao hàm loại trừ': 'Bao hàm–loại trừ bắt đầu từ toàn bộ trường hợp, trừ các tập vi phạm từng điều kiện, rồi cộng lại phần giao đã bị trừ nhiều lần. Cần ghi rõ mỗi tập vi phạm để kiểm soát dấu cộng–trừ.',
  'truy hồi': 'Quan hệ truy hồi được lập bằng cách xét lựa chọn đầu tiên hoặc cuối cùng. Các nhánh phải rời nhau và sau khi bỏ phần đã cố định, bài toán còn lại phải đúng là một bài toán cùng loại có kích thước nhỏ hơn.',
  'Catalan': 'Mã hóa dấu mở thành bước \\(+1\\), dấu đóng thành bước \\(-1\\). Chuỗi đúng có tổng bằng \\(0\\) và mọi tổng đầu không âm. Trong \\(\\binom{10}{5}\\) chuỗi cân bằng, phép phản xạ ghép các chuỗi từng xuống âm với \\(\\binom{10}{4}\\) chuỗi xấu; vì vậy số chuỗi đúng là \\(\\binom{10}{5}-\\binom{10}{4}=42\\).',
  'Heron': 'Công thức Heron dùng ba cạnh: với nửa chu vi \\(s\\), diện tích thỏa \\(S^2=s(s-a)(s-b)(s-c)\\). Tính \\(S^2\\) trước thường giúp tránh xử lí căn thức quá sớm.',
  'Stewart': 'Định lý Stewart áp dụng cho cevian \\(AD\\) chia \\(BC\\) thành \\(BD=m,DC=n\\): \\(AC^2m+AB^2n=BC(AD^2+mn)\\). Phải ghép đúng cạnh với đoạn đối diện trước khi thay số.',
  'Brahmagupta': 'Với tứ giác nội tiếp có bốn cạnh \\(a,b,c,d\\) và nửa chu vi \\(s\\), diện tích thỏa \\(S^2=(s-a)(s-b)(s-c)(s-d)\\). Điều kiện nội tiếp là giả thiết không thể bỏ.',
  'công suất điểm': 'Từ một điểm cố định đối với một đường tròn, tích hai đoạn trên mọi cát tuyến là như nhau; nếu có tiếp tuyến thì tích đó bằng bình phương độ dài tiếp tuyến. Cần đọc đúng thứ tự các điểm trên cát tuyến.',
  'phản xạ': 'Phản xạ một đầu mút qua đường phải đi qua sẽ biến hai đoạn gãy thành một đoạn thẳng. Bất đẳng thức tam giác cho cận dưới, còn giao điểm của đoạn thẳng mới với đường ràng buộc xác nhận dấu bằng đạt được.',
  'trục đẳng phương': 'Trục đẳng phương là quỹ tích các điểm có công suất bằng nhau đối với hai đường tròn. Trừ hai phương trình đường tròn sẽ khử các hạng \\(x^2,y^2\\) và cho phương trình đường thẳng.',
  'quy hoạch nguyên': 'Tối ưu tuyến tính liên tục gợi ý các đỉnh cần quan sát, nhưng nghiệm nguyên không nhất thiết đúng tại giao điểm hai đường biên. Phải liệt kê các điểm nguyên khả thi gần biên hoặc xét từng giá trị nguyên của một biến.',
  'xác suất có điều kiện': 'Dùng \\(P(A\\mid B)=P(A\\cap B)/P(B)\\). Không gian mẫu sau khi biết \\(B\\) đã thu hẹp, nên cả tử và mẫu phải được đếm trong điều kiện \\(B\\).',
  'kỳ vọng': 'Với biến chỉ báo \\(I_i\\), ta có \\(E(I_i)=P(I_i=1)\\). Tính tuyến tính của kỳ vọng cho phép cộng các kỳ vọng riêng ngay cả khi các biến chỉ báo không độc lập.'
};

const knowledgeFor = (problem: AuthoredProblem): string | undefined => {
  if (problem.content.includes('2x+y\\le10') && problem.content.includes('x+3y\\le12')) {
    return 'Do \\(0\\le x\\le5\\), xét lần lượt \\(x=0,1,2,3,4,5\\) và chọn \\(y\\) nguyên lớn nhất còn thỏa hai ràng buộc. Các giá trị tốt nhất của \\(5x+7y\\) lần lượt là \\(28,26,31,36,34,25\\). Bảng kiểm tra hữu hạn này chứng minh \\(36\\) là lớn nhất, không chỉ là một dự đoán từ giao điểm hai đường biên.';
  }
  for (const tag of problem.tags) {
    const normalizedTag = tag.toLocaleLowerCase('vi').replace(/[–—-]/g, ' ').replace(/\s+/g, ' ').trim();
    const matchingEntry = Object.entries(knowledgeNotes).find(([key]) => {
      const normalizedKey = key.toLocaleLowerCase('vi').replace(/[–—-]/g, ' ').replace(/\s+/g, ' ').trim();
      return normalizedTag === normalizedKey || normalizedTag.includes(normalizedKey);
    });
    if (matchingEntry) return matchingEntry[1];
  }
  return undefined;
};

const conditionGuidance = (problem: AuthoredProblem, profile: TopicProfile): string => {
  const text = problem.content;
  if (/\\dfrac|phân thức|hữu tỉ/i.test(text)) {
    return 'Đề có phân thức nên trước mọi phép quy đồng hoặc nhân chéo phải giữ điều kiện mẫu khác \\(0\\). Nghiệm cuối cùng chỉ được nhận sau khi thử lại điều kiện này.';
  }
  if (/\\sqrt|căn/i.test(text)) {
    return 'Đề có căn thức nên cần giữ đồng thời điều kiện biểu thức dưới căn không âm và điều kiện của vế còn lại trước khi bình phương. Bình phương có thể sinh nghiệm ngoại lai.';
  }
  if (/\\lvert|\\rvert|\|x|giá trị tuyệt đối/i.test(text)) {
    return 'Dấu giá trị tuyệt đối buộc phải xét điểm đổi dấu hoặc tách nhánh có điều kiện. Mỗi nghiệm tìm được phải nằm đúng miền của nhánh đã dùng.';
  }
  if (/nguyên|chia hết|đồng dư|\\pmod/i.test(text)) {
    return 'Miền đang xét là số nguyên hoặc lớp dư, vì vậy không được bỏ điều kiện nguyên khi biến đổi. Các nghiệm hoặc lớp dư cuối cùng phải được kiểm tra trực tiếp.';
  }
  if (/xác suất|ngẫu nhiên/i.test(text)) {
    return 'Trước khi tính xác suất, cần xác định các kết quả có đồng khả năng hay không và mô tả rõ biến cố cần đếm. Mẫu số là toàn bộ không gian mẫu, không phải chỉ các trường hợp thuận lợi.';
  }
  if (/lớn nhất|nhỏ nhất|tối đa|tối thiểu|cực trị/i.test(text)) {
    return 'Đây là câu hỏi cực trị nên ngoài việc tạo được một cận, phải chỉ ra giá trị nào làm cận đạt được và giá trị đó có thỏa mọi điều kiện của đề hay không.';
  }
  return profile.stepControl;
};

const titleForReasoning = (explanation: string, index: number, total: number): string => {
  if (index === total - 1) return 'Hoàn tất phép tính';
  if (/^(Gọi|Đặt|Chọn|Viết)/i.test(explanation)) return 'Đặt ẩn và biểu diễn dữ kiện';
  if (/^(Theo|Dùng|Áp dụng|Công thức|Định lý)/i.test(explanation)) return 'Áp dụng công cụ then chốt';
  if (/^(Thay|Tính|Rút gọn|Cộng|Trừ|Chia|Nhân)/i.test(explanation)) return 'Biến đổi và tính toán';
  if (/^(Suy ra|Do đó|Vì thế|Khi đó)/i.test(explanation)) return 'Suy ra hệ quả cần thiết';
  return `Triển khai lập luận ${index + 1}`;
};

const expandReasoning = (explanation: string, index: number, profile: TopicProfile): string => {
  if (index === 0) return `${explanation} ${profile.stepControl}`;
  if (/^(Thay|Tính|Rút gọn|Cộng|Trừ|Chia|Nhân)/i.test(explanation)) {
    return `${explanation} Việc thay số được thực hiện sau khi đã thiết lập đúng hệ thức, nhờ đó hạn chế nhầm công thức hoặc dùng dữ kiện sai vị trí.`;
  }
  if (/^(Suy ra|Do đó|Vì thế|Khi đó|Vậy|Kết quả)/i.test(explanation)) {
    return `${explanation} Đây là kết quả của chuỗi lập luận phía trên, chưa phải một phép đoán từ các lựa chọn A–D.`;
  }
  return explanation;
};

const buildMistakes = (problem: AuthoredProblem, profile: TopicProfile): string[] => {
  if (problem.mistakes.length > 0 && !problem.mistakes.every(mistake =>
    mistake === 'Áp dụng công thức trước khi kiểm tra điều kiện.' ||
    mistake === 'Dừng ở kết quả trung gian hoặc bỏ sót trường hợp.'
  )) return problem.mistakes;

  const tags = primaryTags(problem);
  const tagLabel = tags.length > 0 ? tags.join(' và ') : 'phương pháp của bài';
  return [
    `Thấy dấu hiệu ${tagLabel} rồi áp dụng công thức ngay, nhưng chưa kiểm tra điều kiện hoặc phạm vi mà công thức được phép sử dụng.`,
    profile.fallbackMistake,
    'Dừng ở một giá trị trung gian, không thử lại giả thiết hoặc không đối chiếu kết quả với đúng đại lượng mà đề yêu cầu.'
  ];
};

export const buildPedagogicalSolution = (
  problem: AuthoredProblem,
  level: AdvancedMathLevel,
  answer: 'A' | 'B' | 'C' | 'D'
): {
  recognition: string;
  insight: string;
  steps: SolutionStep[];
  mistakes: string[];
  reviewSuggestions: string[];
} => {
  const profile = profiles[problem.topicId] ?? fallbackProfile;
  const tags = primaryTags(problem);
  const tagLabel = tags.length > 0 ? tags.join(', ') : 'dạng toán tương ứng';
  const condition = conditionGuidance(problem, profile);
  const knowledge = knowledgeFor(problem);
  const correctValue = unwrapMath(problem.options[0]);
  const steps: Omit<SolutionStep, 'order'>[] = [
    {
      title: 'Đọc dữ kiện và nhận dạng',
      explanation: `${profile.reading} Câu này thuộc nhóm ${tagLabel}, vì vậy cần bám vào các dấu hiệu đó thay vì thử lần lượt bốn đáp án.`
    },
    {
      title: 'Giữ điều kiện trước khi giải',
      explanation: condition
    },
    ...(knowledge ? [{
      title: 'Hiểu công cụ trước khi áp dụng',
      explanation: knowledge
    }] : []),
    ...problem.steps.map((step, index) => ({
      title: titleForReasoning(step.explanation, index, problem.steps.length),
      explanation: expandReasoning(step.explanation, index, profile),
      ...(step.result ? { result: step.result } : {})
    }))
  ];

  if (level !== 'hard') {
    steps.push({
      title: 'Kiểm tra tính đầy đủ',
      explanation: profile.completeness
    });
  }

  steps.push({
    title: 'Đối chiếu và chốt đáp án',
    explanation: `Kết quả thu được là ${math(correctValue)}. Đối chiếu đúng biểu thức hoặc đại lượng đề hỏi, lựa chọn tương ứng là phương án ${answer}.`,
    result: math(correctValue)
  });

  return {
    recognition: `${profile.recognition} Trong câu này, dấu hiệu quyết định là: ${problem.insight}`,
    insight: problem.insight,
    steps: steps.map((step, index) => ({ order: index + 1, ...step })),
    mistakes: buildMistakes(problem, profile),
    reviewSuggestions: tags.map(tag => `Ôn lại ${tag}: ${profile.review}.`)
  };
};
