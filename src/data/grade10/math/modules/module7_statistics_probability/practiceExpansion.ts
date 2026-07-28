import type { PracticeRole, Question, QuestionPracticeMetadata, QuestionRepresentationType, Solution } from '@/types';

interface ExpansionSeed {
  id: string;
  subTypeId: string;
  content: string;
  difficulty: 'easy' | 'medium' | 'hard';
  correctAnswer: string;
  reasoning: [string, string];
  practiceRole: PracticeRole;
  representationType: QuestionRepresentationType;
  media?: Question['media'];
}

export const g10MathPracticeExpansionSeeds: ExpansionSeed[] = [
  {
    id: 'math10-m7x-q001', subTypeId: 'math10-qt12-st3',
    content: 'Hai mẫu A và B cùng đơn vị có độ lệch chuẩn lần lượt là 3 và 5. Độ lệch chuẩn của mẫu ổn định hơn nhỏ hơn mẫu kia bao nhiêu đơn vị?',
    difficulty: 'medium', correctAnswer: '2',
    reasoning: ['Độ lệch chuẩn nhỏ hơn biểu thị mẫu ổn định hơn.', 'Hiệu hai độ lệch chuẩn là $5-3=2$.'],
    practiceRole: 'near_transfer', representationType: 'text'
  },
  {
    id: 'math10-m7x-q002', subTypeId: 'math10-qt12-st3',
    content: 'Mẫu A có độ lệch chuẩn 4. Mẫu B được tạo bằng cách nhân mọi giá trị của A với 2 rồi cộng 3. Độ lệch chuẩn của B bằng bao nhiêu?',
    difficulty: 'medium', correctAnswer: '8',
    reasoning: ['Cộng 3 không đổi độ lệch chuẩn; nhân 2 làm độ lệch chuẩn nhân $|2|$.', '$s_B=2\\cdot4=8$.'],
    practiceRole: 'representation_switch', representationType: 'equation'
  },
  {
    id: 'math10-m7x-q003', subTypeId: 'math10-qt12-st3',
    content: 'Mẫu A có phương sai 9, mẫu B có phương sai 25. Độ lệch chuẩn của B lớn hơn độ lệch chuẩn của A bao nhiêu?',
    difficulty: 'hard', correctAnswer: '2',
    reasoning: ['Độ lệch chuẩn là căn bậc hai của phương sai: $s_A=3$, $s_B=5$.', 'Hiệu là $5-3=2$.'],
    practiceRole: 'far_transfer', representationType: 'table'
  },
  {
    id: 'math10-m7x-q004', subTypeId: 'math10-qt12-st3',
    content: 'Mẫu A gồm 10, 10, 10, 10; mẫu B gồm 8, 9, 11, 12. Phương sai của B lớn hơn phương sai của A bao nhiêu?',
    difficulty: 'medium', correctAnswer: '2.5',
    reasoning: ['Cả hai có trung bình 10; phương sai A bằng 0.', 'Phương sai B là $(4+1+1+4)/4=2{,}5$, nên hiệu bằng $2{,}5$.'],
    practiceRole: 'retention', representationType: 'table'
  },
  {
    id: 'math10-m7x-q005', subTypeId: 'math10-qt12-st3',
    content: 'Mẫu A có phương sai 7. Mẫu B thu được bằng cách cộng 100 vào mọi giá trị của A. Phương sai của B trừ phương sai của A bằng bao nhiêu?',
    difficulty: 'hard', correctAnswer: '0',
    reasoning: ['Cộng cùng một hằng số chỉ tịnh tiến mẫu và trung bình.', 'Các độ lệch không đổi nên hai phương sai bằng nhau, hiệu bằng 0.'],
    practiceRole: 'mastery_holdout', representationType: 'graph',
    media: [{
      id: 'math10-m7x-q005-media-shift',
      type: 'chart',
      src: '/assets/math/grade10/module7-shifted-distribution.svg',
      alt: 'Hai đường cong cùng hình dạng và độ rộng; mẫu B là mẫu A được dịch sang phải một trăm đơn vị.',
      caption: 'Phép cộng hằng số làm đổi vị trí nhưng không đổi độ phân tán',
      longDescription: 'Hai phân bố có tâm khác nhau một trăm đơn vị nhưng cùng độ rộng, vì vậy phương sai và độ lệch chuẩn bằng nhau.',
      width: 760,
      height: 410
    }]
  },
  {
    id: 'math10-m7x-q006', subTypeId: 'math10-qt12-st3',
    content: 'Một mẫu có độ lệch chuẩn 2. Nếu mọi giá trị được nhân với $-3$ thì độ lệch chuẩn mới bằng bao nhiêu?',
    difficulty: 'easy', correctAnswer: '6',
    reasoning: ['Độ lệch chuẩn nhân với trị tuyệt đối của hệ số biến đổi.', '$s_{mới}=|-3|\\cdot2=6$.'],
    practiceRole: 'misconception_check', representationType: 'equation'
  }
];

const questionTypeIdFrom = (subTypeId: string) => subTypeId.replace(/-st\d+$/, '');

export const g10MathModule7QuestionExpansion: Question[] = g10MathPracticeExpansionSeeds.map(seed => ({
  id: seed.id, subjectId: 'math', topicId: 'math10-t7',
  questionTypeId: questionTypeIdFrom(seed.subTypeId), content: seed.content,
  responseType: 'short_answer', difficulty: seed.difficulty, sourceType: 'manual',
  correctAnswer: seed.correctAnswer, acceptedAnswers: [seed.correctAnswer], validatorType: 'number',
  media: seed.media
}));

export const g10MathModule7SolutionExpansion: Solution[] = g10MathPracticeExpansionSeeds.map(seed => ({
  id: seed.id.replace('-q', '-s'), questionId: seed.id,
  recognition: `Dạng mở rộng ${seed.subTypeId}: so sánh đúng chỉ số phân tán và cùng đơn vị.`,
  detailedSteps: seed.reasoning.map((explanation, index) => ({
    order: index + 1,
    title: index === 0 ? 'Chọn chỉ số và quy tắc biến đổi' : 'Tính toán và diễn giải',
    explanation,
    ...(index === seed.reasoning.length - 1 ? { result: seed.correctAnswer } : {})
  })),
  finalAnswer: seed.correctAnswer,
  commonMistakes: ['So sánh trung bình thay vì chỉ số phân tán hoặc quên lấy căn phương sai.'],
  reviewSuggestions: ['Đưa các mẫu về cùng đại lượng, cùng đơn vị rồi mới so sánh phương sai hoặc độ lệch chuẩn.']
}));

export const g10MathModule7PracticeMetadataExpansion: QuestionPracticeMetadata[] =
  g10MathPracticeExpansionSeeds.map(seed => ({
    questionId: seed.id, subTypeId: seed.subTypeId, practiceRole: seed.practiceRole,
    representationType: seed.representationType,
    ...(seed.practiceRole === 'mastery_holdout' ? { isMasteryHoldout: true } : {})
  }));
