import type { CourseModuleData, CourseQuestion, CourseSolution } from '@/data/schema';
import { g11PhysicsPracticeChoices } from './practiceChoices';

export interface Physics11PracticeChoice {
  id: string;
  options: [string, string, string, string];
  correctAnswer: 'A' | 'B' | 'C' | 'D';
}

const choiceByQuestionId = new Map(
  g11PhysicsPracticeChoices.map(choice => [choice.id, choice])
);

const CLEANUP_INPUT_PROMPTS = [
  /\s*Chỉ nhập giá trị số\./gi,
  /\s*Chỉ nhập giá trị thập phân\./gi,
  /\s*Chỉ nhập số\./gi,
  /\s*Chỉ điền số\./gi,
  /\s*Chỉ nhập số nguyên\./gi,
  /\s*Chỉ nhập đáp số\./gi,
  /\s*Chỉ nhập giá trị\./gi,
  /\s*Làm tròn đến hai chữ số thập phân\./gi,
  /\s*Làm tròn đến một chữ số thập phân\./gi,
  /\s*Nhập kết quả theo [^.]*\./gi,
  /\s*Nhập hệ số của [^.]*\./gi,
  /\s*Nhập giá trị [^.]*\./gi,
  /\s*Nhập đáp số [^.]*\./gi,
  /\s*Nhập động năng [^.]*\./gi,
  /\s*Nhập phần trăm [^.]*\./gi,
  /\s*Nhập tốc độ [^.]*\./gi,
];

export const applyPhysics11PracticeChoice = (
  question: CourseQuestion,
  choice: Physics11PracticeChoice | undefined
): CourseQuestion => {
  if (!choice) return question;

  let cleanedContent = question.content;
  for (const regex of CLEANUP_INPUT_PROMPTS) {
    cleanedContent = cleanedContent.replace(regex, '');
  }

  const { answerSchema: _legacyAnswerSchema, ...baseQuestion } = question;
  void _legacyAnswerSchema;

  return {
    ...baseQuestion,
    content: cleanedContent.trim(),
    responseType: 'single_choice',
    options: choice.options,
    correctAnswer: choice.correctAnswer,
    acceptedAnswers: [choice.correctAnswer, choice.correctAnswer.toLowerCase()],
    validatorType: 'choice',
  };
};

const updateConclusion = (
  solution: CourseSolution,
  originalQuestion: CourseQuestion,
  choice: Physics11PracticeChoice
): CourseSolution['detailedSteps'] =>
  solution.detailedSteps.map((step, index) => {
    const isLastStep = index === solution.detailedSteps.length - 1;
    let explanation = step.explanation.replace(
      /(?:phương án|đáp án)(?: đúng)?(?: là|:)??\s*[A-D](?=[.\s]|$)/giu,
      `Phương án đúng là ${choice.correctAnswer}`
    );
    if (originalQuestion.responseType === 'short_answer' && isLastStep) {
      explanation = `Giá trị đúng là ${originalQuestion.correctAnswer}; tương ứng phương án ${choice.correctAnswer}.`;
    }
    return { ...step, explanation };
  });

export const applyPhysics11PracticeChoiceSolution = (
  solution: CourseSolution,
  originalQuestion: CourseQuestion | undefined,
  choice: Physics11PracticeChoice | undefined
): CourseSolution => {
  if (!originalQuestion || !choice) return solution;
  return {
    ...solution,
    detailedSteps: updateConclusion(solution, originalQuestion, choice),
    finalAnswer: choice.correctAnswer,
  };
};

export const normalizePhysics11PracticeModules = (
  modules: CourseModuleData[]
): CourseModuleData[] =>
  modules.map(module => {
    const originalQuestionById = new Map(
      module.practiceQuestions.map(question => [question.id, question])
    );
    return {
      ...module,
      practiceQuestions: module.practiceQuestions.map(question =>
        applyPhysics11PracticeChoice(question, choiceByQuestionId.get(question.id))
      ),
      practiceSolutions: module.practiceSolutions.map(solution => {
        const originalQuestion = originalQuestionById.get(solution.questionId);
        return applyPhysics11PracticeChoiceSolution(
          solution,
          originalQuestion,
          choiceByQuestionId.get(solution.questionId)
        );
      }),
    };
  });

export const normalizePhysics11Assessments = (assessments: {
  exams: any[];
  questions: CourseQuestion[];
  solutions: CourseSolution[];
  blueprints: any[];
}) => {
  const originalQuestionById = new Map(
    assessments.questions.map(question => [question.id, question])
  );
  return {
    ...assessments,
    questions: assessments.questions.map(question =>
      applyPhysics11PracticeChoice(question, choiceByQuestionId.get(question.id))
    ),
    solutions: assessments.solutions.map(solution => {
      const originalQuestion = originalQuestionById.get(solution.questionId);
      return applyPhysics11PracticeChoiceSolution(
        solution,
        originalQuestion,
        choiceByQuestionId.get(solution.questionId)
      );
    }),
  };
};
