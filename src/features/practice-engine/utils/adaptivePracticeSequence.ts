import type { Question, UserAttempt } from '../../../types';

const DIFFICULTY_RANK: Record<Question['difficulty'], number> = {
  easy: 0,
  medium: 1,
  hard: 2,
};

const LEARNING_ROLE_ORDER = [
  'guided',
  'near_transfer',
  'representation_switch',
  'misconception_check',
  'far_transfer',
  'retention',
] as const;

const ROLE_RANK = new Map<string, number>(
  LEARNING_ROLE_ORDER.map((role, index) => [role, index]),
);

export interface AdaptivePracticeReadiness {
  attemptedLearningCount: number;
  requiredAttemptCount: number;
  correctLearningCount: number;
  accuracy: number;
  coveredSubTypeCount: number;
  requiredSubTypeCount: number;
  enoughAttempts: boolean;
  enoughAccuracy: boolean;
  enoughSubTypeCoverage: boolean;
}

export interface AdaptivePracticeSequenceResult {
  questions: Question[];
  learningQuestionCount: number;
  holdoutQuestionCount: number;
  visibleHoldoutCount: number;
  attemptedHoldoutCount: number;
  correctHoldoutCount: number;
  holdoutUnlocked: boolean;
  readiness: AdaptivePracticeReadiness;
}

const getLatestAttempts = (attempts: UserAttempt[], questionIds: Set<string>) => {
  const latestByQuestionId = new Map<string, UserAttempt>();

  for (const attempt of attempts) {
    if (!questionIds.has(attempt.questionId)) continue;
    const existing = latestByQuestionId.get(attempt.questionId);
    if (!existing || new Date(attempt.createdAt).getTime() > new Date(existing.createdAt).getTime()) {
      latestByQuestionId.set(attempt.questionId, attempt);
    }
  }

  return latestByQuestionId;
};

/**
 * Xen kẽ dạng con trong cùng một tầng độ khó/vai trò để học sinh không phải
 * giải liên tiếp nhiều câu chỉ thay số của cùng một mẫu.
 */
const interleaveBySubType = (questions: Question[]): Question[] => {
  const groups = new Map<string, Question[]>();

  for (const question of questions) {
    const key = question.subTypeId ?? `question:${question.id}`;
    const group = groups.get(key) ?? [];
    group.push(question);
    groups.set(key, group);
  }

  const orderedGroups = [...groups.entries()]
    .sort(([left], [right]) => left.localeCompare(right))
    .map(([, group]) => group.sort((left, right) => (
      (left.representationType ?? 'text').localeCompare(right.representationType ?? 'text')
      || left.id.localeCompare(right.id)
    )));

  const result: Question[] = [];
  let round = 0;
  let addedInRound = true;

  while (addedInRound) {
    addedInRound = false;
    for (const group of orderedGroups) {
      const question = group[round];
      if (!question) continue;
      result.push(question);
      addedInRound = true;
    }
    round += 1;
  }

  return result;
};

const orderUnseenLearningQuestions = (questions: Question[]): Question[] => {
  const result: Question[] = [];

  for (const difficulty of ['easy', 'medium', 'hard'] as const) {
    const questionsAtDifficulty = questions.filter(question => question.difficulty === difficulty);
    const knownRoles = [...questionsAtDifficulty]
      .sort((left, right) => (
        (ROLE_RANK.get(left.practiceRole ?? '') ?? LEARNING_ROLE_ORDER.length)
        - (ROLE_RANK.get(right.practiceRole ?? '') ?? LEARNING_ROLE_ORDER.length)
        || left.id.localeCompare(right.id)
      ));

    for (let roleIndex = 0; roleIndex <= LEARNING_ROLE_ORDER.length; roleIndex += 1) {
      const roleQuestions = knownRoles.filter(question => (
        (ROLE_RANK.get(question.practiceRole ?? '') ?? LEARNING_ROLE_ORDER.length) === roleIndex
      ));
      result.push(...interleaveBySubType(roleQuestions));
    }
  }

  return result;
};

const orderAttemptedQuestions = (
  questions: Question[],
  latestAttempts: Map<string, UserAttempt>,
): Question[] => [...questions].sort((left, right) => {
  const leftAttempt = latestAttempts.get(left.id);
  const rightAttempt = latestAttempts.get(right.id);
  const leftCorrectRank = leftAttempt?.isCorrect ? 1 : 0;
  const rightCorrectRank = rightAttempt?.isCorrect ? 1 : 0;

  return leftCorrectRank - rightCorrectRank
    || DIFFICULTY_RANK[left.difficulty] - DIFFICULTY_RANK[right.difficulty]
    || new Date(rightAttempt?.createdAt ?? 0).getTime() - new Date(leftAttempt?.createdAt ?? 0).getTime()
    || left.id.localeCompare(right.id);
});

/**
 * Tạo một snapshot thứ tự câu cho một phiên luyện tập Vật lí.
 *
 * Quy tắc:
 * - Câu chưa làm đi trước, tăng dần độ khó và xen kẽ dạng con.
 * - Câu holdout chưa từng làm bị ẩn cho tới khi học sinh đủ dữ liệu nền.
 * - Holdout chỉ mở khi đã thử tối thiểu 60% ngân hàng học (ít nhất 6 câu),
 *   đúng tối thiểu 70% theo lần làm gần nhất và đã chạm mọi dạng con.
 * - Nếu học sinh từng bắt đầu holdout, toàn bộ cụm holdout luôn được giữ mở.
 */
export const buildAdaptivePracticeSequence = (
  pool: Question[],
  attempts: UserAttempt[],
): AdaptivePracticeSequenceResult => {
  const questionIds = new Set(pool.map(question => question.id));
  const latestAttempts = getLatestAttempts(attempts, questionIds);
  const learningQuestions = pool.filter(question => !question.isMasteryHoldout);
  const holdoutQuestions = pool.filter(question => question.isMasteryHoldout);
  const attemptedLearning = learningQuestions.filter(question => latestAttempts.has(question.id));
  const correctLearningCount = attemptedLearning.filter(
    question => latestAttempts.get(question.id)?.isCorrect,
  ).length;
  const requiredAttemptCount = Math.min(
    learningQuestions.length,
    Math.max(6, Math.ceil(learningQuestions.length * 0.6)),
  );
  const requiredSubTypeIds = new Set(
    learningQuestions.map(question => question.subTypeId).filter((id): id is string => Boolean(id)),
  );
  const coveredSubTypeIds = new Set(
    attemptedLearning.map(question => question.subTypeId).filter((id): id is string => Boolean(id)),
  );
  const accuracy = attemptedLearning.length > 0
    ? correctLearningCount / attemptedLearning.length
    : 0;
  const readiness: AdaptivePracticeReadiness = {
    attemptedLearningCount: attemptedLearning.length,
    requiredAttemptCount,
    correctLearningCount,
    accuracy,
    coveredSubTypeCount: coveredSubTypeIds.size,
    requiredSubTypeCount: requiredSubTypeIds.size,
    enoughAttempts: attemptedLearning.length >= requiredAttemptCount,
    enoughAccuracy: attemptedLearning.length > 0 && accuracy >= 0.7,
    enoughSubTypeCoverage: [...requiredSubTypeIds].every(id => coveredSubTypeIds.has(id)),
  };
  const hasStartedHoldout = holdoutQuestions.some(question => latestAttempts.has(question.id));
  const holdoutUnlocked = holdoutQuestions.length === 0
    || hasStartedHoldout
    || (readiness.enoughAttempts && readiness.enoughAccuracy && readiness.enoughSubTypeCoverage);
  const visibleHoldouts = holdoutUnlocked ? holdoutQuestions : [];
  const attemptedHoldouts = holdoutQuestions.filter(question => latestAttempts.has(question.id));
  const correctHoldoutCount = attemptedHoldouts.filter(
    question => latestAttempts.get(question.id)?.isCorrect,
  ).length;

  const unseenLearning = learningQuestions.filter(question => !latestAttempts.has(question.id));
  const unseenHoldouts = visibleHoldouts.filter(question => !latestAttempts.has(question.id));
  const attemptedQuestions = [...learningQuestions, ...visibleHoldouts]
    .filter(question => latestAttempts.has(question.id));

  return {
    questions: [
      ...orderUnseenLearningQuestions(unseenLearning),
      ...orderUnseenLearningQuestions(unseenHoldouts),
      ...orderAttemptedQuestions(attemptedQuestions, latestAttempts),
    ],
    learningQuestionCount: learningQuestions.length,
    holdoutQuestionCount: holdoutQuestions.length,
    visibleHoldoutCount: visibleHoldouts.length,
    attemptedHoldoutCount: attemptedHoldouts.length,
    correctHoldoutCount,
    holdoutUnlocked,
    readiness,
  };
};
