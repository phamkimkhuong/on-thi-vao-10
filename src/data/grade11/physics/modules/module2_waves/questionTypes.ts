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

const createType = (config: TypeConfig): CourseQuestionType => ({
  ...(() => {
    const targetQuestionCount =
      config.id === 'phy11-qt12' || config.id === 'phy11-qt13'
        ? 24
        : config.id === 'phy11-qt07' || config.id === 'phy11-qt08'
          ? 18
          : 12;
    return {
  id: config.id,
  topicId: 'phy11-t02',
  courseId: 'grade11:physics',
  moduleId: 'phy11-m2',
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
  subTypes: config.subTypes.map(item => ({
    ...item,
    targetQuestionCount: targetQuestionCount / 2
  })),
  practiceCoverage: {
    targetQuestionCount,
    minimumQuestionsPerSubType: targetQuestionCount === 12 ? 3 : 6,
    requiredPracticeRoles: [
      ...new Set([
        ...(config.roles ?? ['guided', 'near_transfer', 'misconception_check']),
        ...(targetQuestionCount > 12 ? ['far_transfer' as const] : [])
      ])
    ],
    requiredRepresentations: config.representations,
    masteryHoldoutCount: targetQuestionCount === 24 ? 6 : targetQuestionCount === 18 ? 4 : 2
  }
    };
  })()
});

export const g11PhysicsModule2QuestionTypes: CourseQuestionType[] = [
  createType({
    id: 'phy11-qt07',
    outcomeId: 'out-phy11-m2-01',
    lessonIds: ['phy11-kntt-l8'],
    name: 'Dạng 7: Đọc đồ thị và mô tả sóng',
    slug: 'doc-do-thi-mo-ta-song',
    description: 'Xác định biên độ, bước sóng, chu kì, tần số và pha từ các đồ thị mô tả sóng.',
    difficulty: 'medium',
    examFrequency: 'high',
    recognitionSigns: ['Đề cho đồ thị u–x hoặc u–t.', 'Yêu cầu đọc bước sóng, chu kì hay trạng thái dao động.'],
    solvingSteps: ['Xác định loại đồ thị và đại lượng trên từng trục.', 'Đọc khoảng lặp theo không gian hoặc thời gian.', 'Suy ra đại lượng còn lại và kiểm tra đơn vị.'],
    commonMistakes: ['Nhầm đồ thị không gian với đồ thị thời gian.', 'Đọc khoảng giữa hai điểm bất kì thay vì hai trạng thái cùng pha gần nhất.'],
    subTypes: [
      { id: 'phy11-qt07-st-space', name: 'Đồ thị độ dịch chuyển–vị trí', example: 'Đọc A và λ từ đồ thị u–x.' },
      { id: 'phy11-qt07-st-time', name: 'Đồ thị độ dịch chuyển–thời gian', example: 'Đọc A và T từ đồ thị u–t.' }
    ],
    representations: ['graph', 'equation']
  }),
  createType({
    id: 'phy11-qt08',
    outcomeId: 'out-phy11-m2-02',
    lessonIds: ['phy11-kntt-l8', 'phy11-kntt-l9', 'phy11-kntt-l14'],
    name: 'Dạng 8: Tốc độ truyền sóng và năng lượng',
    slug: 'toc-do-truyen-song-nang-luong',
    description: 'Vận dụng v = λf và giải thích sự truyền năng lượng của sóng.',
    difficulty: 'medium',
    examFrequency: 'high',
    recognitionSigns: ['Dữ kiện chứa v, λ, f hoặc T.', 'Đề hỏi vật chất hay năng lượng được truyền theo sóng.'],
    solvingSteps: ['Đổi các đại lượng về đơn vị thống nhất.', 'Chọn v = λf hoặc v = λ/T.', 'Tính toán rồi giải thích kết quả theo cơ chế truyền sóng.'],
    commonMistakes: ['Nhầm tốc độ truyền sóng với tốc độ dao động của phần tử.', 'Cho rằng phần tử môi trường đi theo sóng.'],
    subTypes: [
      { id: 'phy11-qt08-st-calculation', name: 'Tính v, λ, f, T', example: 'Tính bước sóng từ tốc độ và tần số.' },
      { id: 'phy11-qt08-st-energy', name: 'Truyền năng lượng', example: 'Giải thích vật nổi không đi theo gợn sóng.' }
    ],
    representations: ['equation', 'diagram']
  }),
  createType({
    id: 'phy11-qt09',
    outcomeId: 'out-phy11-m2-03',
    lessonIds: ['phy11-kntt-l9'],
    name: 'Dạng 9: Phân loại sóng ngang và sóng dọc',
    slug: 'phan-loai-song-ngang-doc',
    description: 'Phân loại sóng theo quan hệ giữa phương dao động và phương truyền sóng.',
    difficulty: 'easy',
    examFrequency: 'medium',
    recognitionSigns: ['Đề mô tả phương dao động của phần tử.', 'Yêu cầu phân loại hoặc chọn môi trường truyền.'],
    solvingSteps: ['Xác định phương truyền sóng.', 'Xác định phương dao động của phần tử.', 'So sánh hai phương và kết luận loại sóng.'],
    commonMistakes: ['Phân loại theo hình dạng đường sóng vẽ trên giấy.', 'Cho rằng sóng âm trong không khí là sóng ngang.'],
    subTypes: [
      { id: 'phy11-qt09-st-classify', name: 'Phân loại từ mô tả', example: 'Phân loại sóng trên dây và sóng âm.' },
      { id: 'phy11-qt09-st-medium', name: 'Loại sóng và môi trường', example: 'Chọn môi trường truyền được sóng cơ.' }
    ],
    representations: ['text', 'diagram']
  }),
  createType({
    id: 'phy11-qt10',
    outcomeId: 'out-phy11-m2-04',
    lessonIds: ['phy11-kntt-l10'],
    name: 'Dạng 10: Thực hành đo tần số âm',
    slug: 'thuc-hanh-do-tan-so-am',
    description: 'Lựa chọn phương án và xử lí tín hiệu để xác định tần số âm.',
    difficulty: 'medium',
    examFrequency: 'medium',
    recognitionSigns: ['Đề cho dao động kí, micro hoặc đồ thị tín hiệu âm.', 'Yêu cầu xác định chu kì, tần số hay sai số.'],
    solvingSteps: ['Xác định đại lượng trực tiếp đọc từ tín hiệu.', 'Đo nhiều chu kì và tính giá trị trung bình.', 'Đổi sang tần số rồi đánh giá độ phân giải và sai số.'],
    commonMistakes: ['Đọc một chu kì quá ngắn gây sai số lớn.', 'Nhầm thang thời gian trên màn hình.'],
    subTypes: [
      { id: 'phy11-qt10-st-procedure', name: 'Thiết bị và quy trình đo', example: 'Sắp xếp các bước dùng micro và phần mềm.' },
      { id: 'phy11-qt10-st-signal', name: 'Xử lí tín hiệu âm', example: 'Tính f từ đồ thị điện áp–thời gian.' }
    ],
    representations: ['experiment', 'graph'],
    roles: ['guided', 'representation_switch', 'far_transfer']
  }),
  createType({
    id: 'phy11-qt11',
    outcomeId: 'out-phy11-m2-05',
    lessonIds: ['phy11-kntt-l11'],
    name: 'Dạng 11: Phổ và ứng dụng sóng điện từ',
    slug: 'pho-song-dien-tu',
    description: 'Sắp xếp các miền phổ và liên hệ bước sóng, tần số, năng lượng với ứng dụng.',
    difficulty: 'medium',
    examFrequency: 'medium',
    recognitionSigns: ['Đề nêu tên miền sóng điện từ hoặc ứng dụng.', 'Yêu cầu so sánh λ, f hay mức năng lượng.'],
    solvingSteps: ['Đặt miền sóng vào đúng thứ tự phổ.', 'Dùng c = λf để suy ra chiều biến thiên.', 'Đối chiếu đặc trưng với ứng dụng hoặc yêu cầu an toàn.'],
    commonMistakes: ['Cho rằng sóng điện từ cần môi trường truyền.', 'Sắp xếp λ và f cùng chiều.'],
    subTypes: [
      { id: 'phy11-qt11-st-spectrum', name: 'Thứ tự và đại lượng phổ', example: 'So sánh λ của tia hồng ngoại và tử ngoại.' },
      { id: 'phy11-qt11-st-application', name: 'Ứng dụng và an toàn', example: 'Ghép miền sóng với ứng dụng phù hợp.' }
    ],
    representations: ['table', 'text']
  }),
  createType({
    id: 'phy11-qt12',
    outcomeId: 'out-phy11-m2-06',
    lessonIds: ['phy11-kntt-l12', 'phy11-kntt-l14'],
    name: 'Dạng 12: Giao thoa sóng',
    slug: 'giao-thoa-song',
    description: 'Xác định điều kiện giao thoa, cực đại–cực tiểu và xử lí dữ liệu giao thoa.',
    difficulty: 'hard',
    examFrequency: 'high',
    recognitionSigns: ['Có hai nguồn kết hợp hoặc hệ vân.', 'Đề hỏi hiệu đường đi, vị trí cực đại–cực tiểu hoặc khoảng vân.'],
    solvingSteps: ['Kiểm tra điều kiện kết hợp và quy ước pha.', 'Tính hiệu đường đi hoặc dùng quan hệ hình học phù hợp.', 'Áp điều kiện cực đại–cực tiểu rồi kiểm tra miền nghiệm.'],
    commonMistakes: ['Dùng sai điều kiện do bỏ qua pha ban đầu.', 'Không giới hạn nghiệm trong vùng quan sát.'],
    subTypes: [
      { id: 'phy11-qt12-st-path', name: 'Hiệu đường đi và cực trị', example: 'Xác định điểm cực đại từ d2 − d1.' },
      { id: 'phy11-qt12-st-fringe', name: 'Khoảng vân và dữ liệu giao thoa', example: 'Tính λ từ khoảng vân.' }
    ],
    representations: ['diagram', 'equation']
  }),
  createType({
    id: 'phy11-qt13',
    outcomeId: 'out-phy11-m2-07',
    lessonIds: ['phy11-kntt-l13', 'phy11-kntt-l14'],
    name: 'Dạng 13: Sóng dừng trên dây',
    slug: 'song-dung-tren-day',
    description: 'Nhận diện nút–bụng và vận dụng điều kiện sóng dừng cho các biên khác nhau.',
    difficulty: 'hard',
    examFrequency: 'high',
    recognitionSigns: ['Dây có các nút, bụng cố định.', 'Đề cho chiều dài dây, số bó sóng hoặc điều kiện đầu dây.'],
    solvingSteps: ['Xác định điều kiện tại hai đầu dây.', 'Biểu diễn số đoạn λ/2 hoặc λ/4 trên chiều dài.', 'Tìm λ, f hoặc số nút–bụng và kiểm tra bằng hình.'],
    commonMistakes: ['Dùng cùng công thức cho mọi điều kiện biên.', 'Đếm số nút bằng số bó sóng.'],
    subTypes: [
      { id: 'phy11-qt13-st-fixed', name: 'Hai đầu cùng loại biên', example: 'Dây hai đầu cố định có n bó sóng.' },
      { id: 'phy11-qt13-st-mixed', name: 'Hai đầu khác loại biên', example: 'Một đầu cố định, một đầu tự do.' }
    ],
    representations: ['diagram', 'equation']
  }),
  createType({
    id: 'phy11-qt14',
    outcomeId: 'out-phy11-m2-08',
    lessonIds: ['phy11-kntt-l15'],
    name: 'Dạng 14: Thực hành đo tốc độ truyền âm',
    slug: 'thuc-hanh-do-toc-do-am',
    description: 'Thiết kế, xử lí dữ liệu và đánh giá phép đo tốc độ truyền âm.',
    difficulty: 'medium',
    examFrequency: 'medium',
    recognitionSigns: ['Đề cho ống cộng hưởng, micro hoặc thời gian truyền.', 'Yêu cầu tính tốc độ và đánh giá sai số.'],
    solvingSteps: ['Xác định đại lượng đo trực tiếp và mô hình liên hệ.', 'Xử lí nhiều lần đo hoặc đồ thị để tìm λ hay thời gian.', 'Tính tốc độ, nêu sai số chính và cách cải thiện.'],
    commonMistakes: ['Không hiệu chỉnh chiều dài hữu hiệu của cột khí khi cần.', 'Dùng một lần đo duy nhất để kết luận.'],
    subTypes: [
      { id: 'phy11-qt14-st-resonance', name: 'Phương pháp cộng hưởng', example: 'Tìm λ từ hai vị trí cộng hưởng liên tiếp.' },
      { id: 'phy11-qt14-st-time', name: 'Phương pháp thời gian truyền', example: 'Tính v từ quãng đường và độ trễ.' }
    ],
    representations: ['experiment', 'table'],
    roles: ['guided', 'representation_switch', 'far_transfer']
  })
];
