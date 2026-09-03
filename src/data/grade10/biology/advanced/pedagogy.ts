import type { SolutionStep } from '@/types';
import type { AuthoredBiologyProblem } from './types';

const topicReview: Record<string, string> = {
  'bio10-adv-method': 'biến độc lập–phụ thuộc–kiểm soát, đối chứng, mẫu lặp, sai số và giới hạn của kết luận',
  'bio10-adv-molecule': 'quan hệ giữa thành phần hóa học, cấu trúc phân tử và chức năng sinh học',
  'bio10-adv-cell': 'cấu trúc–chức năng bào quan, dòng nội màng, tế bào chuyên hóa và phép đo kính hiển vi',
  'bio10-adv-transport': 'gradient điện hóa, tính thấm chọn lọc, vận chuyển khối và ba giai đoạn truyền tin',
  'bio10-adv-metabolism': 'enzyme, ATP, phản ứng oxi hóa–khử, hô hấp, lên men và quang hợp',
  'bio10-adv-division': 'hàm lượng DNA, tâm động, điểm kiểm soát, nguyên phân, giảm phân và công nghệ tế bào',
  'bio10-adv-microbe': 'kiểu dinh dưỡng, nuôi cấy, đường cong sinh trưởng, kháng thuốc và công nghệ vi sinh',
  'bio10-adv-virus': 'cấu trúc virus, chu trình nhân lên, đường lây, vaccine và ứng dụng thể thực khuẩn'
};

export const buildBiologySolution = (
  problem: AuthoredBiologyProblem,
  answer: 'A' | 'B' | 'C' | 'D'
): { recognition: string; insight: string; steps: SolutionStep[]; mistakes: string[]; reviewSuggestions: string[] } => {
  const [correct, ...distractors] = problem.options;
  const steps: Array<Omit<SolutionStep, 'order'>> = [
    {
      title: 'Xác định điều đề thật sự hỏi',
      explanation: `Câu này không yêu cầu nhắc lại một định nghĩa riêng lẻ. Ta phải dùng ${problem.tags.join(', ')} để chọn phát biểu giải thích được toàn bộ dữ kiện, không chỉ một chi tiết thuận mắt.`
    },
    {
      title: 'Đọc bằng chứng trước khi nhớ kiến thức',
      explanation: problem.evidence
    },
    {
      title: 'Nối bằng chứng với cơ chế sinh học',
      explanation: problem.mechanism
    },
    ...problem.reasoning.map((explanation, index) => ({
      title: index === problem.reasoning.length - 1 ? 'Khép chuỗi suy luận' : `Suy luận từ dữ kiện ${index + 1}`,
      explanation
    })),
    {
      title: 'Kiểm tra phương án đúng',
      explanation: `Phát biểu “${correct}” phù hợp đồng thời với dữ kiện quan sát và cơ chế. Nếu bỏ đi một trong hai lớp này, ta rất dễ chọn một câu nghe đúng kiến thức nhưng không trả lời đúng thí nghiệm.`
    },
    {
      title: 'Loại ba phương án gây nhiễu',
      explanation: `“${distractors[0]}” sai vì ${problem.distractorReasons[0]} “${distractors[1]}” sai vì ${problem.distractorReasons[1]} “${distractors[2]}” sai vì ${problem.distractorReasons[2]}`
    },
    {
      title: 'Chốt đáp án theo đúng vị trí hiển thị',
      explanation: `Sau khi hệ thống cân bằng vị trí các lựa chọn, phát biểu đúng nằm ở phương án ${answer}.`,
      result: correct
    }
  ];

  return {
    recognition: `Dạng bài yêu cầu đọc ngữ liệu sinh học rồi suy luận cơ chế. Mấu chốt là: ${problem.insight} Không được chọn chỉ vì một phương án chứa thuật ngữ quen thuộc.`,
    insight: problem.insight,
    steps: steps.map((step, index) => ({ order: index + 1, ...step })),
    mistakes: problem.distractorReasons.map((reason, index) => `Chọn “${distractors[index]}” vì ${reason}`),
    reviewSuggestions: problem.tags.map(tag => `Ôn lại ${tag}: ${topicReview[problem.topicId]}.`)
  };
};
