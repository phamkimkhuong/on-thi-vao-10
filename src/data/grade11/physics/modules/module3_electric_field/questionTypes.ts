import type { CourseQuestionType } from '@/data/schema';
import type { PracticeRole, QuestionRepresentationType } from '@/types';

interface TypeConfig {
  id: string;
  outcomeId: string;
  lessonIds: string[];
  name: string;
  slug: string;
  description: string;
  difficulty: CourseQuestionType['difficulty'];
  examFrequency: CourseQuestionType['examFrequency'];
  recognitionSigns: string[];
  solvingSteps: string[];
  commonMistakes: string[];
  subTypes: [
    { id: string; name: string; example: string },
    { id: string; name: string; example: string }
  ];
  representations: QuestionRepresentationType[];
  roles?: PracticeRole[];
}

const createType = (config: TypeConfig): CourseQuestionType => {
  const targetQuestionCount = ['phy11-qt17', 'phy11-qt20', 'phy11-qt22'].includes(config.id)
    ? 24
    : config.examFrequency === 'high'
      ? 18
      : 12;
  return {
  id: config.id,
  topicId: 'phy11-t03',
  courseId: 'grade11:physics',
  moduleId: 'phy11-m3',
  lessonIds: config.lessonIds,
  outcomeIds: [config.outcomeId],
  name: config.name,
  slug: config.slug,
  description: config.description,
  difficulty: config.difficulty,
  examFrequency: config.examFrequency,
  recognitionSigns: config.recognitionSigns,
  solvingSteps: config.solvingSteps,
  commonMistakes: config.commonMistakes,
  subTypes: config.subTypes.map(item => ({ ...item, targetQuestionCount: targetQuestionCount / 2 })),
  practiceCoverage: {
    targetQuestionCount,
    minimumQuestionsPerSubType: targetQuestionCount === 12 ? 3 : 6,
    requiredPracticeRoles: [...new Set([
      ...(config.roles ?? ['guided', 'near_transfer', 'misconception_check']),
      ...(targetQuestionCount > 12 ? ['far_transfer' as const] : [])
    ])],
    requiredRepresentations: config.representations,
    masteryHoldoutCount: targetQuestionCount === 24 ? 6 : targetQuestionCount === 18 ? 4 : 2
  }
  };
};

export const g11PhysicsModule3QuestionTypes: CourseQuestionType[] = [
  createType({
    id: 'phy11-qt15',
    outcomeId: 'out-phy11-m3-01',
    lessonIds: ['phy11-kntt-l16'],
    name: 'Dạng 15: Lực Coulomb giữa các điện tích điểm',
    slug: 'luc-coulomb',
    description: 'Xác định phương, chiều, độ lớn và tổng hợp lực tương tác điện.',
    difficulty: 'medium',
    examFrequency: 'high',
    recognitionSigns: ['Có các điện tích điểm và khoảng cách giữa chúng.', 'Yêu cầu lực điện hoặc trạng thái cân bằng.'],
    solvingSteps: ['Vẽ vị trí và xác định dấu từng điện tích.', 'Tính từng lực Coulomb trong cùng hệ đơn vị.', 'Tổng hợp vector lực và kiểm tra chiều.'],
    commonMistakes: ['Bỏ giá trị tuyệt đối khi tính độ lớn.', 'Cộng đại số lực mà không xét phương chiều.'],
    subTypes: [
      { id: 'phy11-qt15-st-pair', name: 'Tương tác hai điện tích', example: 'Tính lực giữa q1 và q2.' },
      { id: 'phy11-qt15-st-superposition', name: 'Tổng hợp nhiều lực điện', example: 'Tìm hợp lực lên một điện tích.' }
    ],
    representations: ['diagram', 'equation']
  }),
  createType({
    id: 'phy11-qt16',
    outcomeId: 'out-phy11-m3-02',
    lessonIds: ['phy11-kntt-l17'],
    name: 'Dạng 16: Khái niệm và vector cường độ điện trường',
    slug: 'khai-niem-cuong-do-dien-truong',
    description: 'Phân biệt điện trường với lực điện và xác định vector E từ lực tác dụng lên điện tích thử.',
    difficulty: 'medium',
    examFrequency: 'high',
    recognitionSigns: ['Đề hỏi điện trường tại một điểm hoặc lực lên điện tích thử.', 'Có quan hệ F = qE.'],
    solvingSteps: ['Xác định điện tích nguồn và điểm khảo sát.', 'Dùng định nghĩa vector E = F/q với quy ước dấu.', 'Tách đặc trưng điện trường khỏi điện tích thử.'],
    commonMistakes: ['Cho rằng E phụ thuộc điện tích thử.', 'Quên đổi chiều vector khi điện tích thử âm.'],
    subTypes: [
      { id: 'phy11-qt16-st-concept', name: 'Nhận thức khái niệm điện trường', example: 'Phân biệt E và F.' },
      { id: 'phy11-qt16-st-force', name: 'Quan hệ lực–điện trường', example: 'Tìm F tác dụng lên điện tích q.' }
    ],
    representations: ['text', 'diagram']
  }),
  createType({
    id: 'phy11-qt17',
    outcomeId: 'out-phy11-m3-03',
    lessonIds: ['phy11-kntt-l17'],
    name: 'Dạng 17: Điện trường của điện tích điểm và hệ điện tích',
    slug: 'dien-truong-dien-tich-diem',
    description: 'Vận dụng E = k|Q|/r² và nguyên lí chồng chất điện trường.',
    difficulty: 'hard',
    examFrequency: 'high',
    recognitionSigns: ['Yêu cầu E tại một điểm do một hoặc nhiều điện tích.', 'Dữ kiện có vị trí hình học và khoảng cách.'],
    solvingSteps: ['Vẽ từng vector điện trường thành phần.', 'Tính độ lớn từng thành phần bằng E = k|Q|/r².', 'Tổng hợp vector theo hình học hoặc tọa độ.'],
    commonMistakes: ['Gán chiều E theo dấu điện tích thử.', 'Cộng độ lớn khi các vector không cùng phương.'],
    subTypes: [
      { id: 'phy11-qt17-st-single', name: 'Điện trường một điện tích điểm', example: 'Tìm E cách Q một khoảng r.' },
      { id: 'phy11-qt17-st-system', name: 'Chồng chất điện trường', example: 'Tìm E tổng hợp của hai điện tích.' }
    ],
    representations: ['diagram', 'equation']
  }),
  createType({
    id: 'phy11-qt18',
    outcomeId: 'out-phy11-m3-04',
    lessonIds: ['phy11-kntt-l17'],
    name: 'Dạng 18: Đường sức và phổ điện trường',
    slug: 'duong-suc-dien',
    description: 'Đọc, vẽ và đánh giá tính hợp lệ của đường sức điện.',
    difficulty: 'medium',
    examFrequency: 'medium',
    recognitionSigns: ['Đề cho hình đường sức hoặc yêu cầu phác họa.', 'Yêu cầu so sánh độ mạnh điện trường theo mật độ đường sức.'],
    solvingSteps: ['Xác định điện tích nguồn và tính đối xứng.', 'Áp dụng chiều, tiếp tuyến và quy tắc không cắt nhau.', 'Đối chiếu mật độ đường sức với độ lớn E.'],
    commonMistakes: ['Cho các đường sức cắt nhau.', 'Cho rằng hạt mang điện luôn chuyển động đúng theo đường sức.'],
    subTypes: [
      { id: 'phy11-qt18-st-read', name: 'Đọc phổ đường sức', example: 'So sánh E tại hai vùng.' },
      { id: 'phy11-qt18-st-draw', name: 'Vẽ và kiểm tra đường sức', example: 'Chọn hình đúng của lưỡng cực.' }
    ],
    representations: ['diagram', 'text']
  }),
  createType({
    id: 'phy11-qt19',
    outcomeId: 'out-phy11-m3-05',
    lessonIds: ['phy11-kntt-l18'],
    name: 'Dạng 19: Điện trường đều và hiệu điện thế',
    slug: 'dien-truong-deu',
    description: 'Vận dụng E = U/d, lực điện và công trong điện trường đều.',
    difficulty: 'medium',
    examFrequency: 'high',
    recognitionSigns: ['Hai bản phẳng song song hoặc điện trường có E không đổi.', 'Dữ kiện gồm U, d, E hoặc q.'],
    solvingSteps: ['Xác định chiều điện trường và khoảng cách theo phương đường sức.', 'Dùng E = |U|/d và F = |q|E.', 'Giữ đúng dấu khi tính công hoặc hiệu điện thế.'],
    commonMistakes: ['Dùng độ dài đường đi thay cho hình chiếu theo đường sức.', 'Bỏ đổi đơn vị khoảng cách.'],
    subTypes: [
      { id: 'phy11-qt19-st-field', name: 'E, U và khoảng cách', example: 'Tính E giữa hai bản tụ.' },
      { id: 'phy11-qt19-st-force-work', name: 'Lực và công điện', example: 'Tính công dịch chuyển điện tích.' }
    ],
    representations: ['diagram', 'equation']
  }),
  createType({
    id: 'phy11-qt20',
    outcomeId: 'out-phy11-m3-06',
    lessonIds: ['phy11-kntt-l18'],
    name: 'Dạng 20: Chuyển động điện tích trong điện trường đều',
    slug: 'chuyen-dong-dien-tich-trong-dien-truong',
    description: 'Phân tích chuyển động thẳng biến đổi hoặc quỹ đạo cong của hạt mang điện.',
    difficulty: 'hard',
    examFrequency: 'medium',
    recognitionSigns: ['Hạt mang điện đi vào vùng điện trường đều.', 'Vận tốc ban đầu cùng phương hoặc vuông góc E.'],
    solvingSteps: ['Xác định chiều lực từ dấu q và vector E.', 'Tách chuyển động theo các trục và tính gia tốc qE/m.', 'Dùng phương trình động học để tìm quỹ đạo hoặc trạng thái.'],
    commonMistakes: ['Cho lực cùng chiều E với mọi điện tích.', 'Trộn chuyển động theo hai trục.'],
    subTypes: [
      { id: 'phy11-qt20-st-collinear', name: 'Chuyển động dọc đường sức', example: 'Tìm vận tốc sau khi qua hiệu điện thế.' },
      { id: 'phy11-qt20-st-perpendicular', name: 'Chuyển động vuông góc đường sức', example: 'Tìm độ lệch của chùm hạt.' }
    ],
    representations: ['diagram', 'equation']
  }),
  createType({
    id: 'phy11-qt21',
    outcomeId: 'out-phy11-m3-07',
    lessonIds: ['phy11-kntt-l19'],
    name: 'Dạng 21: Công của lực điện và thế năng điện',
    slug: 'cong-luc-dien-the-nang',
    description: 'Liên hệ công lực điện với độ biến thiên thế năng.',
    difficulty: 'medium',
    examFrequency: 'high',
    recognitionSigns: ['Đề hỏi công, thế năng hoặc độ biến thiên thế năng.', 'Điện tích dịch chuyển giữa hai vị trí.'],
    solvingSteps: ['Xác định trạng thái đầu–cuối và quy ước dấu.', 'Dùng A = Wt1 − Wt2 hoặc quan hệ điện trường đều.', 'Kiểm tra dấu bằng chiều lực và xu hướng biến thiên thế năng.'],
    commonMistakes: ['Nhầm A = ΔWt thay vì A = −ΔWt.', 'Cho rằng công phụ thuộc đường đi trong điện trường tĩnh.'],
    subTypes: [
      { id: 'phy11-qt21-st-work', name: 'Công của lực điện', example: 'Tính A khi q dịch chuyển.' },
      { id: 'phy11-qt21-st-energy', name: 'Biến thiên thế năng', example: 'Tìm Wt2 từ công lực điện.' }
    ],
    representations: ['equation', 'diagram']
  }),
  createType({
    id: 'phy11-qt22',
    outcomeId: 'out-phy11-m3-08',
    lessonIds: ['phy11-kntt-l20'],
    name: 'Dạng 22: Điện thế và hiệu điện thế',
    slug: 'dien-the-hieu-dien-the',
    description: 'Vận dụng V = W/q, U = A/q và quan hệ giữa điện thế với điện trường.',
    difficulty: 'hard',
    examFrequency: 'high',
    recognitionSigns: ['Đề cho điện thế tại điểm, hiệu điện thế hoặc công dịch chuyển.', 'Yêu cầu dấu và chiều biến thiên điện thế.'],
    solvingSteps: ['Phân biệt điện thế tại điểm và hiệu điện thế giữa hai điểm.', 'Chọn quan hệ V, U, A, q phù hợp với quy ước.', 'Kiểm tra dấu bằng chiều điện trường và dấu điện tích.'],
    commonMistakes: ['Đồng nhất điện thế với hiệu điện thế.', 'Đảo thứ tự chỉ số trong UAB.'],
    subTypes: [
      { id: 'phy11-qt22-st-potential', name: 'Điện thế tại một điểm', example: 'Tính V từ thế năng và điện tích.' },
      { id: 'phy11-qt22-st-voltage', name: 'Hiệu điện thế và công', example: 'Tính A từ q và UAB.' }
    ],
    representations: ['equation', 'diagram']
  }),
  createType({
    id: 'phy11-qt23',
    outcomeId: 'out-phy11-m3-09',
    lessonIds: ['phy11-kntt-l21'],
    name: 'Dạng 23: Tụ điện và điện dung',
    slug: 'tu-dien-dien-dung',
    description: 'Vận dụng Q = CU, đọc thông số tụ và phân tích ứng dụng.',
    difficulty: 'medium',
    examFrequency: 'high',
    recognitionSigns: ['Đề cho tụ điện, điện dung, điện tích hoặc hiệu điện thế.', 'Có thông số định mức hoặc ứng dụng tích–phóng điện.'],
    solvingSteps: ['Xác định loại tụ và các đại lượng Q, C, U.', 'Đổi đơn vị rồi dùng Q = CU.', 'So sánh với giới hạn định mức và kết luận an toàn.'],
    commonMistakes: ['Nhầm điện dung phụ thuộc Q hoặc U của cùng tụ lí tưởng.', 'Bỏ qua điện áp định mức.'],
    subTypes: [
      { id: 'phy11-qt23-st-capacitance', name: 'Q, C và U', example: 'Tính điện tích của tụ đã nạp.' },
      { id: 'phy11-qt23-st-application', name: 'Thông số và ứng dụng tụ', example: 'Chọn tụ phù hợp cho thiết bị.' }
    ],
    representations: ['equation', 'diagram']
  })
];
