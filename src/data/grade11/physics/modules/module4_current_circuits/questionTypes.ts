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
  const targetQuestionCount = ['phy11-qt24', 'phy11-qt29', 'phy11-qt31'].includes(config.id)
    ? 24
    : 18;
  return {
  id: config.id,
  topicId: 'phy11-t04',
  courseId: 'grade11:physics',
  moduleId: 'phy11-m4',
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
    minimumQuestionsPerSubType: 6,
    requiredPracticeRoles: [...new Set([
      ...(config.roles ?? ['guided', 'near_transfer', 'misconception_check']),
      'far_transfer' as const
    ])],
    requiredRepresentations: config.representations,
    masteryHoldoutCount: targetQuestionCount === 24 ? 6 : 4
  }
  };
};

export const g11PhysicsModule4QuestionTypes: CourseQuestionType[] = [
  createType({
    id: 'phy11-qt24',
    outcomeId: 'out-phy11-m4-01',
    lessonIds: ['phy11-kntt-l22'],
    name: 'Dạng 24: Cường độ dòng điện ở mức vi mô',
    slug: 'cuong-do-dong-dien-vi-mo',
    description: 'Vận dụng quan hệ giữa dòng điện với mật độ hạt tải, tiết diện và tốc độ trôi.',
    difficulty: 'hard',
    examFrequency: 'medium',
    recognitionSigns: ['Đề cho mật độ hạt tải n, tiết diện S và tốc độ trôi v.', 'Yêu cầu giải thích cơ chế dòng điện trong kim loại.'],
    solvingSteps: ['Xác định loại hạt tải và độ lớn điện tích.', 'Đổi đơn vị n, S, v về SI.', 'Dùng I = Sn|q|v và kiểm tra bậc độ lớn.'],
    commonMistakes: ['Nhầm tốc độ trôi với tốc độ truyền tín hiệu.', 'Bỏ hệ số điện tích của hạt tải.'],
    subTypes: [
      { id: 'phy11-qt24-st-microscopic', name: 'Tính I từ mô hình vi mô', example: 'Tính I từ n, S, v.' },
      { id: 'phy11-qt24-st-drift', name: 'Suy ra tốc độ trôi hoặc mật độ hạt', example: 'Tìm v khi biết I.' }
    ],
    representations: ['equation', 'diagram']
  }),
  createType({
    id: 'phy11-qt25',
    outcomeId: 'out-phy11-m4-02',
    lessonIds: ['phy11-kntt-l22'],
    name: 'Dạng 25: Điện lượng và cường độ dòng điện',
    slug: 'dien-luong-cuong-do-dong-dien',
    description: 'Vận dụng I = Δq/Δt và ý nghĩa đơn vị ampere, coulomb.',
    difficulty: 'easy',
    examFrequency: 'high',
    recognitionSigns: ['Đề cho điện lượng qua tiết diện trong một khoảng thời gian.', 'Yêu cầu số electron hoặc thời gian truyền điện lượng.'],
    solvingSteps: ['Xác định điện lượng và khoảng thời gian.', 'Dùng I = Δq/Δt hoặc q = Ne.', 'Đổi đơn vị và kiểm tra dấu, số hạt.'],
    commonMistakes: ['Nhầm điện lượng với cường độ dòng điện.', 'Quên điện tích nguyên tố khi đổi sang số electron.'],
    subTypes: [
      { id: 'phy11-qt25-st-charge', name: 'I, q và thời gian', example: 'Tính q qua dây trong t giây.' },
      { id: 'phy11-qt25-st-carriers', name: 'Số hạt tải điện', example: 'Tính số electron qua tiết diện.' }
    ],
    representations: ['equation', 'table']
  }),
  createType({
    id: 'phy11-qt26',
    outcomeId: 'out-phy11-m4-03',
    lessonIds: ['phy11-kntt-l23'],
    name: 'Dạng 26: Điện trở và sự phụ thuộc nhiệt độ',
    slug: 'dien-tro-va-nhiet-do',
    description: 'Phân tích điện trở theo vật liệu, kích thước, nhiệt độ và đặc tính điện trở nhiệt.',
    difficulty: 'medium',
    examFrequency: 'high',
    recognitionSigns: ['Dữ kiện có chiều dài, tiết diện, điện trở suất hoặc nhiệt độ.', 'Đề cho đồ thị R–T hay điện trở nhiệt.'],
    solvingSteps: ['Xác định yếu tố hình học, vật liệu và nhiệt độ.', 'Chọn quan hệ điện trở phù hợp và đổi đơn vị.', 'Tính hoặc đọc đồ thị rồi giải thích chiều biến thiên.'],
    commonMistakes: ['Nhầm điện trở với điện trở suất.', 'Áp dụng quan hệ tuyến tính ngoài khoảng nhiệt độ cho phép.'],
    subTypes: [
      { id: 'phy11-qt26-st-material', name: 'Điện trở vật dẫn', example: 'Tính R từ ρ, l, S.' },
      { id: 'phy11-qt26-st-temperature', name: 'Nhiệt độ và điện trở nhiệt', example: 'Đọc đặc tính thermistor.' }
    ],
    representations: ['equation', 'graph']
  }),
  createType({
    id: 'phy11-qt27',
    outcomeId: 'out-phy11-m4-04',
    lessonIds: ['phy11-kntt-l23'],
    name: 'Dạng 27: Đặc tuyến dòng điện–điện áp',
    slug: 'dac-tuyen-dong-dien-dien-ap',
    description: 'Đọc, vẽ và phân tích đặc tuyến I–U của vật dẫn hoặc linh kiện.',
    difficulty: 'medium',
    examFrequency: 'high',
    recognitionSigns: ['Đề cho bảng hoặc đồ thị I–U.', 'Yêu cầu nhận diện linh kiện tuyến tính hay phi tuyến.'],
    solvingSteps: ['Đọc đúng trục và đơn vị của đặc tuyến.', 'Tính hệ số góc hoặc tỉ số U/I tại điểm cần xét.', 'Kết luận tính tuyến tính và sự thay đổi điện trở.'],
    commonMistakes: ['Lấy hệ số góc I/U nhưng gọi là điện trở.', 'Suy ra R không đổi từ một điểm dữ liệu.'],
    subTypes: [
      { id: 'phy11-qt27-st-ohmic', name: 'Đặc tuyến vật dẫn Ohm', example: 'Tìm R từ đường thẳng I–U.' },
      { id: 'phy11-qt27-st-nonlinear', name: 'Đặc tuyến phi tuyến', example: 'So sánh R tại hai điểm của linh kiện.' }
    ],
    representations: ['graph', 'table']
  }),
  createType({
    id: 'phy11-qt28',
    outcomeId: 'out-phy11-m4-05',
    lessonIds: ['phy11-kntt-l23'],
    name: 'Dạng 28: Định luật Ohm',
    slug: 'dinh-luat-ohm',
    description: 'Vận dụng U = IR trong đúng điều kiện và giải mạch điện trở cơ bản.',
    difficulty: 'medium',
    examFrequency: 'high',
    recognitionSigns: ['Đề cho U, I, R của vật dẫn hoặc đoạn mạch.', 'Yêu cầu kiểm tra vật dẫn có tuân theo Ohm.'],
    solvingSteps: ['Xác định đoạn mạch và điều kiện nhiệt độ.', 'Viết U = IR cho đúng phần mạch.', 'Giải đại lượng và đối chiếu với đặc tuyến hoặc giới hạn vật lí.'],
    commonMistakes: ['Cho rằng mọi linh kiện luôn tuân theo Ohm.', 'Dùng sai hiệu điện thế của đoạn mạch đang xét.'],
    subTypes: [
      { id: 'phy11-qt28-st-basic', name: 'U, I và R', example: 'Tính I qua điện trở.' },
      { id: 'phy11-qt28-st-condition', name: 'Điều kiện áp dụng định luật Ohm', example: 'Đánh giá linh kiện từ bảng I–U.' }
    ],
    representations: ['equation', 'graph']
  }),
  createType({
    id: 'phy11-qt29',
    outcomeId: 'out-phy11-m4-06',
    lessonIds: ['phy11-kntt-l24'],
    name: 'Dạng 29: Nguồn điện, suất điện động và điện trở trong',
    slug: 'nguon-dien-suat-dien-dong',
    description: 'Vận dụng quan hệ của nguồn điện trong mạch kín và phân tích hiệu điện thế cực nguồn.',
    difficulty: 'hard',
    examFrequency: 'high',
    recognitionSigns: ['Nguồn có suất điện động E và điện trở trong r.', 'Đề hỏi dòng mạch kín, điện áp mạch ngoài hoặc hiệu suất nguồn.'],
    solvingSteps: ['Vẽ mạch và xác định điện trở mạch ngoài.', 'Dùng I = E/(R + r) và U = E − Ir khi phát điện.', 'Kiểm tra trường hợp hở mạch, ngắn mạch và dấu điện áp.'],
    commonMistakes: ['Đồng nhất suất điện động với hiệu điện thế cực nguồn khi có dòng.', 'Bỏ điện trở trong khi tính dòng mạch kín.'],
    subTypes: [
      { id: 'phy11-qt29-st-closed', name: 'Mạch kín có điện trở trong', example: 'Tính I và U của nguồn.' },
      { id: 'phy11-qt29-st-state', name: 'Hở mạch, ngắn mạch và hiệu suất', example: 'So sánh U ở các chế độ tải.' }
    ],
    representations: ['diagram', 'equation']
  }),
  createType({
    id: 'phy11-qt30',
    outcomeId: 'out-phy11-m4-07',
    lessonIds: ['phy11-kntt-l25'],
    name: 'Dạng 30: Điện năng và công suất điện',
    slug: 'dien-nang-cong-suat-dien',
    description: 'Tính điện năng, công suất và đánh giá sử dụng điện hiệu quả, an toàn.',
    difficulty: 'medium',
    examFrequency: 'high',
    recognitionSigns: ['Đề cho công suất định mức, thời gian sử dụng hoặc số điện.', 'Yêu cầu chi phí, năng lượng hay điều kiện an toàn.'],
    solvingSteps: ['Xác định chế độ hoạt động và công suất thực tế.', 'Dùng A = Pt và các biểu thức công suất phù hợp.', 'Đổi đơn vị năng lượng rồi đánh giá hiệu quả, an toàn.'],
    commonMistakes: ['Nhầm kW với kWh.', 'Mặc định thiết bị luôn hoạt động đúng công suất định mức.'],
    subTypes: [
      { id: 'phy11-qt30-st-calculation', name: 'Điện năng và công suất', example: 'Tính điện năng tiêu thụ trong tháng.' },
      { id: 'phy11-qt30-st-application', name: 'Hiệu quả và an toàn điện', example: 'Chọn thiết bị hoặc dây dẫn phù hợp.' }
    ],
    representations: ['table', 'equation'],
    roles: ['guided', 'near_transfer', 'far_transfer']
  }),
  createType({
    id: 'phy11-qt31',
    outcomeId: 'out-phy11-m4-08',
    lessonIds: ['phy11-kntt-l26'],
    name: 'Dạng 31: Thực hành đo suất điện động và điện trở trong',
    slug: 'thuc-hanh-do-suat-dien-dong-dien-tro-trong',
    description: 'Thiết kế mạch đo, xử lí dữ liệu U–I và đánh giá phép đo nguồn điện.',
    difficulty: 'hard',
    examFrequency: 'medium',
    recognitionSigns: ['Đề cho sơ đồ vôn kế–ampe kế hoặc bảng U–I.', 'Yêu cầu tìm E, r hay đánh giá sai số.'],
    solvingSteps: ['Kiểm tra cách mắc dụng cụ và giới hạn đo.', 'Dùng U = E − rI hoặc đồ thị U–I.', 'Suy ra E, r rồi phân tích sai số và an toàn.'],
    commonMistakes: ['Mắc ampe kế song song với nguồn.', 'Đọc sai dấu hệ số góc của đồ thị U–I.'],
    subTypes: [
      { id: 'phy11-qt31-st-circuit', name: 'Sơ đồ và quy trình đo', example: 'Chọn cách mắc ampe kế, vôn kế.' },
      { id: 'phy11-qt31-st-data', name: 'Xử lí bảng và đồ thị U–I', example: 'Tìm E và r từ đường thẳng.' }
    ],
    representations: ['experiment', 'graph'],
    roles: ['guided', 'representation_switch', 'far_transfer']
  })
];
