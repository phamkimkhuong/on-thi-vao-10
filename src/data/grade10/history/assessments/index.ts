import type { AssessmentBlueprint, MockExam, Question, Solution } from '@/types';
import { g10HistoryKnowledgeSeeds, g10HistoryTopicIdForType } from '../contentBank';

interface ExamSpec {
  key: 'mid1' | 'final1' | 'mid2' | 'final2';
  title: string;
  kind: 'midterm' | 'final';
  semester: 1 | 2;
  typeNumbers: number[];
}

const specs: ExamSpec[] = [
  { key: 'mid1', title: 'Giữa học kỳ I', kind: 'midterm', semester: 1, typeNumbers: [1, 2, 3, 4] },
  { key: 'final1', title: 'Cuối học kỳ I', kind: 'final', semester: 1, typeNumbers: [1, 2, 3, 4, 5, 6, 7, 8] },
  { key: 'mid2', title: 'Giữa học kỳ II', kind: 'midterm', semester: 2, typeNumbers: [9, 10, 11] },
  { key: 'final2', title: 'Cuối học kỳ II', kind: 'final', semester: 2, typeNumbers: [9, 10, 11, 12, 13, 14] }
];

const letters = ['A', 'B', 'C', 'D'] as const;
const assessmentQuestions: Question[] = [];
const assessmentSolutions: Solution[] = [];
const assessmentExams: MockExam[] = [];

export const g10HistoryAssessmentBlueprints: AssessmentBlueprint[] = specs.map(spec => ({
  id: `g10-his-bp-${spec.key}-v1`,
  subjectId: 'history',
  title: `Ma trận ${spec.title} – Lịch sử 10`,
  kind: spec.kind,
  focus: 'mixed',
  semester: spec.semester,
  duration: 45,
  totalPoints: 10,
  scopeTopicIds: [...new Set(spec.typeNumbers.map(g10HistoryTopicIdForType))],
  outcomeIds: spec.typeNumbers.map(type => `g10-his-out-${String(type).padStart(2, '0')}`),
  competencyWeights: {},
  difficultyWeights: { easy: 1 / 3, medium: 1 / 2, hard: 1 / 6 },
  sections: [
    {
      id: `${spec.key}-mcq`,
      title: 'Phần trắc nghiệm nhiều lựa chọn',
      itemCount: 24,
      points: 10,
      responseType: 'multiple_choice'
    }
  ]
}));

specs.forEach((spec, specIndex) => {
  const pool = g10HistoryKnowledgeSeeds.filter(item => spec.typeNumbers.includes(item.type));

  (['A', 'B'] as const).forEach((formCode, formIndex) => {
    const examPrefix = `g10-his-assess-${spec.key}-${formCode.toLowerCase()}`;
    const questionIds: string[] = [];

    for (let itemIndex = 0; itemIndex < 24; itemIndex += 1) {
      const knowledge = pool[(itemIndex * 5 + formIndex * 11 + specIndex * 3) % pool.length];
      const questionId = `${examPrefix}-q${String(itemIndex + 1).padStart(2, '0')}`;
      const correctIndex = (itemIndex + formIndex + specIndex) % 4;
      const rawOptions = [knowledge.correct, ...knowledge.wrong];
      const options = [...rawOptions];
      const [correct] = options.splice(0, 1);
      options.splice(correctIndex, 0, correct);
      const answer = letters[correctIndex];
      const difficulty: Question['difficulty'] =
        itemIndex < 8 ? 'easy' : itemIndex < 20 ? 'medium' : 'hard';

      questionIds.push(questionId);
      assessmentQuestions.push({
        id: questionId,
        courseId: 'grade10:history',
        subjectId: 'history',
        topicId: g10HistoryTopicIdForType(knowledge.type),
        questionTypeId: `g10-his-type-${knowledge.type}`,
        content: itemIndex % 3 === 0
          ? `Chọn nhận định đúng về ${knowledge.focus}.`
          : itemIndex % 3 === 1
            ? `Một học sinh đang ôn ${knowledge.focus}. Thẻ ghi nhớ nào sau đây chính xác?`
            : `Nội dung nào sau đây phù hợp với kiến thức đã học về ${knowledge.focus}?`,
        options: options.map((option, index) => `${letters[index]}. ${option}`),
        correctAnswer: answer,
        acceptedAnswers: [answer, answer.toLowerCase()],
        responseType: 'single_choice',
        validatorType: 'choice',
        difficulty,
        sourceType: 'mock_exam',
        points: 10 / 24,
        outcomeIds: [`g10-his-out-${String(knowledge.type).padStart(2, '0')}`],
        cognitiveLevel: difficulty === 'easy' ? 'recognition' : 'understanding',
        estimatedSeconds: difficulty === 'hard' ? 90 : 60,
        variantGroupId: `g10-his-${spec.key}-item-${String(itemIndex + 1).padStart(2, '0')}`
      });

      assessmentSolutions.push({
        id: `sol-${questionId}`,
        questionId,
        courseId: 'grade10:history',
        recognition: `Câu hỏi kiến thức về ${knowledge.focus}.`,
        detailedSteps: [
          {
            order: 1,
            title: 'Kiến thức cần nhớ',
            explanation: `${knowledge.correct} ${knowledge.explanation}`
          }
        ],
        finalAnswer: answer,
        commonMistakes: [`Không chọn nhận định: “${knowledge.wrong[0]}”`],
        reviewSuggestions: [`Ôn lại bài ${knowledge.type}: ${knowledge.focus}.`]
      });
    }

    assessmentExams.push({
      id: `${examPrefix}-exam`,
      subjectId: 'history',
      title: `${spec.title} – Lịch sử 10 (Mã ${formCode})`,
      duration: 45,
      questionIds,
      createdAt: '2026-08-28T00:00:00.000Z',
      kind: spec.kind,
      focus: 'mixed',
      semester: spec.semester,
      parallelFormGroup: `g10-his-${spec.key}-parallel-v1`,
      scopeTopicIds: [...new Set(spec.typeNumbers.map(g10HistoryTopicIdForType))],
      totalPoints: 10,
      formCode,
      instructions: [
        'Thời gian làm bài 45 phút; tổng điểm 10.',
        'Đề gồm 24 câu trắc nghiệm nhiều lựa chọn và được chấm tự động.',
        'Mỗi câu chỉ có một phương án đúng.'
      ],
      resultReleasePolicy: 'after_submit',
      blueprintId: `g10-his-bp-${spec.key}-v1`,
      assessmentVersion: '1.0.0'
    });
  });
});

export const g10HistoryAssessmentQuestions = assessmentQuestions;
export const g10HistoryAssessmentSolutions = assessmentSolutions;
export const g10HistoryAssessmentExams = assessmentExams;
