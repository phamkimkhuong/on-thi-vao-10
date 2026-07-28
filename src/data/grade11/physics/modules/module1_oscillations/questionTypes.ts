import type { CourseQuestionType } from '@/data/schema';

const g11PhysicsModule1BaseQuestionTypes: CourseQuestionType[] = [
  {
    id: 'phy11-qt01',
    topicId: 'phy11-t01',
    courseId: 'grade11:physics',
    moduleId: 'phy11-m1',
    lessonIds: ['phy11-kntt-l1', 'phy11-kntt-l2'],
    outcomeIds: ['out-phy11-m1-01'],
    name: 'Dạng 1: Xác định các đại lượng đặc trưng của Dao động điều hòa (A, T, f, omega, phi)',
    slug: 'dai-luong-dac-trung-dao-dong',
    description: 'Xác định biên độ A, chu kỳ T, tần số f, tần số góc omega và pha ban đầu phi từ phương trình li độ x = A*cos(omega*t + phi).',
    difficulty: 'easy',
    examFrequency: 'high',
    recognitionSigns: ['Đề cho phương trình x = A cos(omega t + phi) và yêu cầu tìm A, T, f, omega, phi.'],
    solvingSteps: [
      'Đưa phương trình về dạng chuẩn $x = A \\cos(\\omega t + \\varphi)$.',
      'Đọc trực tiếp $A$, $\\omega$, $\\varphi$ từ phương trình.',
      'Tính $T = \\frac{2\\pi}{\\omega}$ và $f = \\frac{\\omega}{2\\pi}$.'
    ],
    commonMistakes: [
      'Quên đổi hàm $-\\cos$ hoặc $\\sin$ về hàm $+\\cos$ chuẩn.',
      'Nhầm lẫn giữa pha ban đầu $\\varphi$ và pha tại thời điểm $t$ $(\\omega t + \\varphi)$.'
    ],
    subTypes: [
      {
        id: 'phy11-qt01-st-equation',
        name: 'Đọc đại lượng từ phương trình dao động',
        example: 'Xác định A, ω, φ từ x = A cos(ωt + φ).',
        targetQuestionCount: 6
      },
      {
        id: 'phy11-qt01-st-graph',
        name: 'Đọc đại lượng từ đồ thị li độ–thời gian',
        example: 'Xác định A và T từ đồ thị x–t.',
        targetQuestionCount: 6
      }
    ],
    practiceCoverage: {
      targetQuestionCount: 12,
      minimumQuestionsPerSubType: 3,
      requiredPracticeRoles: ['guided', 'near_transfer', 'misconception_check'],
      requiredRepresentations: ['equation', 'graph'],
      masteryHoldoutCount: 2
    }
  },
  {
    id: 'phy11-qt02',
    topicId: 'phy11-t01',
    courseId: 'grade11:physics',
    moduleId: 'phy11-m1',
    lessonIds: ['phy11-kntt-l3', 'phy11-kntt-l4'],
    outcomeIds: ['out-phy11-m1-02'],
    name: 'Dạng 2: Vận tốc và Gia tốc trong Dao động điều hòa',
    slug: 'van-toc-gia-toc-dao-dong',
    description: 'Tính vận tốc v = x\' và gia tốc a = v\' = -omega^2 * x, mối liên hệ v vuông pha với x và a ngược pha với x.',
    difficulty: 'medium',
    examFrequency: 'high',
    recognitionSigns: ['Đề yêu cầu tính vận tốc cực đại, gia tốc cực đại hoặc vận tốc tại vị trí bất kỳ.'],
    solvingSteps: [
      'Viết phương trình $x(t)$, suy ra phương trình $v(t)$ và $a(t)$.',
      'Chọn hệ thức phù hợp với dữ kiện và thống nhất đơn vị.',
      'Sử dụng công thức độc lập thời gian: $A^2 = x^2 + \\frac{v^2}{\\omega^2}$ rồi kiểm tra dấu và chiều chuyển động.'
    ],
    commonMistakes: [
      'Nhầm vị trí $v_{\\max}$ và $a_{\\max}$.',
      'Quên dấu trừ trong công thức $a = -\\omega^2 x$.'
    ],
    subTypes: [
      {
        id: 'phy11-qt02-st-extrema',
        name: 'Giá trị cực đại của vận tốc và gia tốc',
        example: 'Tính vmax và amax từ A, ω.',
        targetQuestionCount: 6
      },
      {
        id: 'phy11-qt02-st-state',
        name: 'Trạng thái dao động tại một thời điểm hoặc vị trí',
        example: 'Xác định x, v, a và chiều chuyển động.',
        targetQuestionCount: 6
      }
    ],
    practiceCoverage: {
      targetQuestionCount: 12,
      minimumQuestionsPerSubType: 3,
      requiredPracticeRoles: ['guided', 'near_transfer', 'misconception_check'],
      requiredRepresentations: ['equation', 'graph'],
      masteryHoldoutCount: 2
    }
  },
  {
    id: 'phy11-qt03',
    topicId: 'phy11-t01',
    courseId: 'grade11:physics',
    moduleId: 'phy11-m1',
    lessonIds: ['phy11-kntt-l5', 'phy11-kntt-l7'],
    outcomeIds: ['out-phy11-m1-03'],
    name: 'Dạng 3: Năng lượng trong dao động điều hòa',
    slug: 'nang-luong-dao-dong-dieu-hoa',
    description: 'Phân tích động năng, thế năng, cơ năng và sự chuyển hóa năng lượng theo vị trí hoặc thời gian.',
    difficulty: 'medium',
    examFrequency: 'high',
    recognitionSigns: ['Đề nhắc đến động năng, thế năng, cơ năng hoặc tỉ số năng lượng.', 'Dữ kiện có vị trí x, biên độ A hoặc vận tốc v.'],
    solvingSteps: ['Xác định mô hình dao động và mốc thế năng.', 'Viết quan hệ năng lượng phù hợp và thống nhất đơn vị.', 'Giải đại lượng cần tìm rồi kiểm tra giới hạn tại biên và vị trí cân bằng.'],
    commonMistakes: ['Cho rằng động năng hoặc thế năng luôn bảo toàn.', 'Bỏ qua điều kiện mô hình lí tưởng khi dùng bảo toàn cơ năng.'],
    subTypes: [
      { id: 'phy11-qt03-st-state', name: 'Năng lượng tại một trạng thái', example: 'Tìm động năng, thế năng tại li độ x.', targetQuestionCount: 6 },
      { id: 'phy11-qt03-st-conservation', name: 'Bảo toàn và chuyển hóa năng lượng', example: 'Tìm vận tốc hoặc vị trí từ bảo toàn cơ năng.', targetQuestionCount: 6 }
    ],
    practiceCoverage: {
      targetQuestionCount: 12,
      minimumQuestionsPerSubType: 3,
      requiredPracticeRoles: ['guided', 'near_transfer', 'misconception_check'],
      requiredRepresentations: ['equation', 'graph'],
      masteryHoldoutCount: 2
    }
  },
  {
    id: 'phy11-qt04',
    topicId: 'phy11-t01',
    courseId: 'grade11:physics',
    moduleId: 'phy11-m1',
    lessonIds: ['phy11-kntt-l6'],
    outcomeIds: ['out-phy11-m1-04'],
    name: 'Dạng 4: Dao động tắt dần và dao động cưỡng bức',
    slug: 'dao-dong-tat-dan-cuong-buc',
    description: 'Nhận diện, so sánh và giải thích dao động tắt dần, dao động cưỡng bức.',
    difficulty: 'medium',
    examFrequency: 'medium',
    recognitionSigns: ['Biên độ giảm theo thời gian hoặc hệ chịu ngoại lực tuần hoàn.', 'Đề hỏi nguyên nhân mất năng lượng hay trạng thái ổn định.'],
    solvingSteps: ['Xác định lực cản và ngoại lực tác dụng lên hệ.', 'Phân loại dao động theo nguồn duy trì năng lượng.', 'Giải thích sự biến thiên biên độ và tần số bằng đặc điểm của loại dao động.'],
    commonMistakes: ['Cho rằng tần số dao động cưỡng bức luôn bằng tần số riêng.', 'Đồng nhất dao động duy trì với dao động cưỡng bức.'],
    subTypes: [
      { id: 'phy11-qt04-st-damped', name: 'Dao động tắt dần', example: 'Đọc đồ thị biên độ giảm và giải thích tổn hao.', targetQuestionCount: 6 },
      { id: 'phy11-qt04-st-forced', name: 'Dao động cưỡng bức', example: 'Xác định tần số trạng thái ổn định.', targetQuestionCount: 6 }
    ],
    practiceCoverage: {
      targetQuestionCount: 12,
      minimumQuestionsPerSubType: 3,
      requiredPracticeRoles: ['guided', 'near_transfer', 'misconception_check'],
      requiredRepresentations: ['text', 'graph'],
      masteryHoldoutCount: 2
    }
  },
  {
    id: 'phy11-qt05',
    topicId: 'phy11-t01',
    courseId: 'grade11:physics',
    moduleId: 'phy11-m1',
    lessonIds: ['phy11-kntt-l6'],
    outcomeIds: ['out-phy11-m1-05'],
    name: 'Dạng 5: Cộng hưởng và ứng dụng',
    slug: 'cong-huong-va-ung-dung',
    description: 'Xác định điều kiện cộng hưởng và đánh giá lợi ích, tác hại trong thực tiễn.',
    difficulty: 'medium',
    examFrequency: 'high',
    recognitionSigns: ['Biên độ cưỡng bức đạt cực đại khi thay đổi tần số.', 'Tình huống liên quan rung mạnh của cầu, máy hoặc nhạc cụ.'],
    solvingSteps: ['Xác định tần số riêng và tần số lực cưỡng bức.', 'Kiểm tra điều kiện gần bằng nhau và vai trò lực cản.', 'Kết luận cộng hưởng rồi đánh giá tác động trong bối cảnh.'],
    commonMistakes: ['Cho rằng mọi dao động cưỡng bức đều cộng hưởng.', 'Bỏ qua ảnh hưởng của lực cản đến độ cao và độ rộng đỉnh cộng hưởng.'],
    subTypes: [
      { id: 'phy11-qt05-st-condition', name: 'Điều kiện và đường cong cộng hưởng', example: 'Đọc đồ thị biên độ–tần số.', targetQuestionCount: 6 },
      { id: 'phy11-qt05-st-application', name: 'Lợi ích và tác hại', example: 'Đề xuất cách hạn chế cộng hưởng có hại.', targetQuestionCount: 6 }
    ],
    practiceCoverage: {
      targetQuestionCount: 12,
      minimumQuestionsPerSubType: 3,
      requiredPracticeRoles: ['near_transfer', 'misconception_check', 'far_transfer'],
      requiredRepresentations: ['graph', 'text'],
      masteryHoldoutCount: 2
    }
  },
  {
    id: 'phy11-qt06',
    topicId: 'phy11-t01',
    courseId: 'grade11:physics',
    moduleId: 'phy11-m1',
    lessonIds: ['phy11-kntt-l1'],
    outcomeIds: ['out-phy11-m1-06'],
    name: 'Dạng 6: Thực nghiệm khảo sát dao động',
    slug: 'thuc-nghiem-khao-sat-dao-dong',
    description: 'Lựa chọn phương án, xử lí dữ liệu và đánh giá kết quả thí nghiệm dao động.',
    difficulty: 'medium',
    examFrequency: 'medium',
    recognitionSigns: ['Đề cho sơ đồ thiết bị, bảng số liệu hoặc chuỗi ảnh chuyển động.', 'Yêu cầu xác định đại lượng đo, xử lí sai số hoặc kết luận.'],
    solvingSteps: ['Xác định mục tiêu, biến đo và dụng cụ.', 'Chọn cách thu thập, biểu diễn và xử lí dữ liệu.', 'Đối chiếu kết quả với mô hình rồi nêu sai số và giới hạn kết luận.'],
    commonMistakes: ['Tính đại lượng từ quá ít chu kì làm sai số tương đối lớn.', 'Kết luận vượt quá độ chính xác của dữ liệu.'],
    subTypes: [
      { id: 'phy11-qt06-st-design', name: 'Thiết kế và quy trình đo', example: 'Chọn dụng cụ và các bước đo chu kì.', targetQuestionCount: 6 },
      { id: 'phy11-qt06-st-data', name: 'Xử lí dữ liệu thực nghiệm', example: 'Tính chu kì trung bình từ bảng số liệu.', targetQuestionCount: 6 }
    ],
    practiceCoverage: {
      targetQuestionCount: 12,
      minimumQuestionsPerSubType: 3,
      requiredPracticeRoles: ['guided', 'representation_switch', 'far_transfer'],
      requiredRepresentations: ['experiment', 'table'],
      masteryHoldoutCount: 2
    }
  }
];

const expandedTargetByTypeId: Record<string, number> = {
  'phy11-qt01': 18,
  'phy11-qt02': 18,
  'phy11-qt03': 18,
  'phy11-qt05': 18
};

export const g11PhysicsModule1QuestionTypes: CourseQuestionType[] =
  g11PhysicsModule1BaseQuestionTypes.map(questionType => {
    const targetQuestionCount = expandedTargetByTypeId[questionType.id] ?? 12;
    if (targetQuestionCount === 12) return questionType;
    return {
      ...questionType,
      subTypes: questionType.subTypes?.map(subType => ({
        ...subType,
        targetQuestionCount: targetQuestionCount / 2
      })),
      practiceCoverage: {
        ...questionType.practiceCoverage!,
        targetQuestionCount,
        minimumQuestionsPerSubType: 6,
        requiredPracticeRoles: [
          ...new Set([
            ...(questionType.practiceCoverage?.requiredPracticeRoles ?? []),
            'far_transfer' as const
          ])
        ],
        masteryHoldoutCount: 4
      }
    };
  });
