import type { SolutionStep } from '@/types';
import type { AdvancedChemistryLevel, AuthoredChemistryProblem } from './types';

interface ChemistryProfile {
  reading: string;
  setup: string;
  verification: string;
  review: string;
}

const profiles: Record<string, ChemistryProfile> = {
  'chem10-adv-atom': {
    reading: 'Tách rõ số proton, neutron, electron, số khối, điện tích ion và cường độ peak. Những đại lượng này liên quan nhưng không được dùng thay thế cho nhau.',
    setup: 'Viết quan hệ số hạt hoặc công thức trung bình có trọng số trước khi thay số; với phổ khối phải đọc đúng m/z và trị số điện tích ion.',
    verification: 'Thử lại tổng phần trăm bằng 100%, số electron không âm, cấu hình không vượt sức chứa phân lớp và kết quả nguyên tử khối nằm giữa các số khối đã cho.',
    review: 'cách đếm hạt, viết cấu hình electron và đọc phổ khối theo tỉ lệ đồng vị'
  },
  'chem10-adv-periodic': {
    reading: 'Xác định nguyên tố đang được mô tả bằng cấu hình, ion, oxide hay dữ liệu xu hướng; không suy ra tính chất chỉ từ một con số đứng riêng lẻ.',
    setup: 'Chuyển dữ kiện về số electron hóa trị, vị trí chu kì–nhóm và số oxi hóa cao nhất rồi mới áp dụng xu hướng tuần hoàn.',
    verification: 'Đối chiếu chiều biến thiên trong cùng chu kì hoặc nhóm, kiểm tra điện tích công thức và phân loại oxide–hydroxide bằng phản ứng đặc trưng.',
    review: 'xu hướng bán kính, độ âm điện, năng lượng ion hóa và tính chất oxide theo bảng tuần hoàn'
  },
  'chem10-adv-bond': {
    reading: 'Đếm tổng electron hóa trị, miền electron quanh nguyên tử trung tâm, cặp electron tự do và tính đối xứng trước khi gọi tên hình học hoặc độ phân cực.',
    setup: 'Dùng Lewis để xác định liên kết và cặp tự do; dùng VSEPR cho hình học; sau đó mới cộng vectơ moment hoặc xét tương tác giữa phân tử.',
    verification: 'Kiểm tra tổng điện tích hình thức, quy tắc octet hoặc ngoại lệ đã nêu, số miền electron và sự triệt tiêu moment theo đúng hình học.',
    review: 'Lewis, điện tích hình thức, VSEPR, lai hóa và lực tương tác giữa các phân tử'
  },
  'chem10-adv-nuclear': {
    reading: 'Phân biệt số khối A, số hiệu nguyên tử Z, số hạt còn lại, hoạt độ và thời gian; các đại lượng này thay đổi theo những quy luật khác nhau.',
    setup: 'Với phương trình hạt nhân dùng bảo toàn A và Z; với bán rã đưa thời gian về số chu kì rồi dùng lũy thừa của một nửa.',
    verification: 'Cộng lại A và Z ở hai vế, kiểm tra hoạt độ giảm theo thời gian và phần còn lại luôn nằm trong khoảng từ 0 đến 100%.',
    review: 'bảo toàn trong phản ứng hạt nhân, chu kì bán rã, hoạt độ và phép trừ phông'
  },
  'chem10-adv-redox': {
    reading: 'Ghi số oxi hóa trước và sau cho đúng nguyên tố, xác định chất nhường–nhận electron rồi mới xử lí hệ số hoặc lượng chất.',
    setup: 'Lập các quá trình oxi hóa và khử, nhân hệ số để tổng electron nhường bằng tổng electron nhận; sau đó cân bằng nguyên tố và điện tích còn lại.',
    verification: 'Đếm lại từng nguyên tố, tổng điện tích và tổng electron; với bài hỗn hợp phải kiểm tra chất giới hạn, sản phẩm cuối và số mol không âm.',
    review: 'số oxi hóa, phương pháp thăng bằng electron và các định luật bảo toàn trong bài hỗn hợp'
  },
  'chem10-adv-energy': {
    reading: 'Xác định hệ hay môi trường đang nhận nhiệt, phương trình hóa học gắn với ΔH và đơn vị của entropy, nhiệt dung hoặc năng lượng liên kết.',
    setup: 'Chọn đúng công thức Hess, enthalpy tạo thành, năng lượng liên kết, q = mcΔT hoặc ΔG = ΔH − TΔS; ghi quy ước dấu trước khi tính.',
    verification: 'Kiểm tra hệ số phương trình, đổi J–kJ, dấu tỏa–thu nhiệt và xem độ lớn kết quả có phù hợp dữ liệu năng lượng hay không.',
    review: 'quy ước dấu nhiệt, định luật Hess, nhiệt lượng kế, entropy và năng lượng tự do Gibbs'
  },
  'chem10-adv-rate': {
    reading: 'Phân biệt tốc độ mất chất, tốc độ tạo chất, hằng số tốc độ và thời gian đạt cùng mức chuyển hóa; đọc đúng biến nào được giữ cố định.',
    setup: 'Dùng độ dốc hoặc ΔC/Δt cho tốc độ trung bình, hệ số phương trình cho quan hệ tốc độ và tỉ số thí nghiệm cho ảnh hưởng nồng độ.',
    verification: 'Kiểm tra đơn vị, chiều tăng–giảm, số biến thay đổi trong phép so sánh và không suy luận cân bằng hay ΔH từ dữ liệu tốc độ.',
    review: 'tốc độ trung bình, thuyết va chạm, ảnh hưởng điều kiện, xúc tác và phương trình Arrhenius'
  },
  'chem10-adv-halogen': {
    reading: 'Xác định halogen hay ion halide, điều kiện nước/kiềm và dấu hiệu màu–kết tủa; cùng một nguyên tố có thể thể hiện vai trò khác nhau theo trạng thái oxi hóa.',
    setup: 'Dùng xu hướng tính oxi hóa của X₂, tính khử của X⁻, phương trình tự oxi hóa–khử và phản ứng Ag⁺ với halide.',
    verification: 'Kiểm tra màu, trạng thái, độ tan, điều kiện nóng–lạnh và bảo toàn electron; không dùng một xu hướng cho cả halogen lẫn halide.',
    review: 'xu hướng nhóm VIIA, phản ứng đặc trưng của halogen, hydrogen halide và nhận biết ion halide'
  },
  'chem10-adv-experiment': {
    reading: 'Tách mục tiêu đo, biến độc lập, biến phụ thuộc, biến kiểm soát và chiều sai số. Dữ liệu quan sát chỉ có giá trị khi quy trình cho phép so sánh công bằng.',
    setup: 'Mô tả phép đo bằng đại lượng định lượng, giữ các điều kiện còn lại giống nhau và dự đoán mỗi sai sót làm kết quả tăng hay giảm.',
    verification: 'Kiểm tra độ lặp, ngoại lệ, độ phân giải, chữ số có nghĩa và an toàn; không loại hoặc sửa số liệu nếu chưa có bằng chứng từ quy trình.',
    review: 'thiết kế đối chứng, xử lí sai số, an toàn hóa chất và nguyên lí phòng chống cháy nổ'
  }
};

const fallback = profiles['chem10-adv-experiment'];
const scopeLabel = (scope: AuthoredChemistryProblem['scope']): string => scope === 'core_advanced'
  ? 'nâng cao từ nội dung cốt lõi Hóa học 10'
  : scope === 'grade10_specialized'
    ? 'chuyên đề học tập chính thức lớp 10'
    : 'mở rộng kiểu Olympic với kiến thức cần thiết đã được cho trong đề';

export const buildChemistrySolution = (
  problem: AuthoredChemistryProblem,
  level: AdvancedChemistryLevel,
  answer: 'A' | 'B' | 'C' | 'D'
): { recognition: string; insight: string; steps: SolutionStep[]; mistakes: string[]; reviewSuggestions: string[] } => {
  const profile = profiles[problem.topicId] ?? fallback;
  const correctText = problem.options[0];
  const steps: Omit<SolutionStep, 'order'>[] = [
    {
      title: 'Đọc đúng dữ kiện và phạm vi',
      explanation: `${profile.reading} Đây là câu thuộc nhóm ${scopeLabel(problem.scope)}, vì vậy mọi dữ kiện mở rộng phải được sử dụng đúng như đề đã định nghĩa.`
    },
    {
      title: 'Nhận ra mấu chốt của câu',
      explanation: `${problem.insight} Đây là dấu hiệu giúp chọn đường giải trực tiếp, thay vì thử lần lượt bốn lựa chọn rồi tìm cách hợp thức hóa một đáp án.`
    },
    {
      title: 'Nắm nguyên lí trước khi thay số',
      explanation: `${problem.principle} ${profile.setup}`
    },
    ...problem.steps.map(step => ({
      title: step.title,
      explanation: `${step.explanation} Ở bước này cần giữ nguyên hệ số, điện tích, đơn vị và điều kiện phản ứng đã xác định ở trên.`,
      ...(step.result ? { result: step.result } : {})
    })),
    {
      title: 'Kiểm tra tính hợp lí hóa học',
      explanation: profile.verification
    }
  ];

  if (level !== 'hard') {
    steps.push({
      title: 'Đối chiếu các bẫy gần đúng',
      explanation: `Phương án đúng phải thỏa đồng thời toàn bộ dữ kiện, không chỉ trùng một con số trung gian. Ba lựa chọn còn lại lần lượt đại diện cho các lỗi thường gặp: ${problem.mistakes.join(' ')} `
    });
  }

  if (level === 'extreme') {
    steps.push({
      title: 'Kiểm tra độc lập bằng chiều biến thiên',
      explanation: 'Không lặp lại toàn bộ phép tính, hãy kiểm tra bằng dấu, giới hạn, tỉ lệ, bảo toàn hoặc xu hướng hóa học. Nếu kết quả trái chiều định tính thì phải quay lại bước lập mô hình, không được chốt chỉ vì trùng một phương án.'
    });
  }

  steps.push({
    title: 'Chốt đúng đại lượng đề hỏi',
    explanation: `Kết quả cuối cùng là “${correctText}”. Đối chiếu thứ tự lựa chọn sau khi hệ thống đã cân bằng vị trí đáp án, phương án đúng là ${answer}.`,
    result: correctText
  });

  return {
    recognition: `Câu hỏi yêu cầu vận dụng ${problem.tags.join(', ')}. Dấu hiệu quyết định là ${problem.insight} Học sinh cần giải từ dữ kiện hóa học, không suy đoán từ hình thức các phương án.`,
    insight: problem.insight,
    steps: steps.map((step, index) => ({ order: index + 1, ...step })),
    mistakes: problem.mistakes,
    reviewSuggestions: problem.tags.map(tag => `Ôn lại ${tag}: ${profile.review}.`)
  };
};
