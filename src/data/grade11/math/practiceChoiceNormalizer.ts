import type { CourseModuleData, CourseQuestion, CourseSolution } from '@/data/schema';
import { g11MathPracticeChoices } from './practiceChoices';

export interface Math11PracticeChoice {
  id: string;
  options: [string, string, string, string];
  correctAnswer: 'A' | 'B' | 'C' | 'D';
}

const choiceByQuestionId = new Map(
  g11MathPracticeChoices.map(choice => [choice.id, choice])
 );

export const applyMath11PracticeChoice = (
  question: CourseQuestion,
  choice: Math11PracticeChoice | undefined
 ): CourseQuestion => {
  if (!choice) return question;
  const { answerSchema: _legacyAnswerSchema, ...baseQuestion } = question;
  void _legacyAnswerSchema;
  return {
    ...baseQuestion,
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
  choice: Math11PracticeChoice
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

export const applyMath11PracticeChoiceSolution = (
  solution: CourseSolution,
  originalQuestion: CourseQuestion | undefined,
  choice: Math11PracticeChoice | undefined
 ): CourseSolution => {
  if (!originalQuestion || !choice) return solution;
  return {
    ...solution,
    detailedSteps: updateConclusion(solution, originalQuestion, choice),
    finalAnswer: choice.correctAnswer,
  };
};

export const normalizeMath11PracticeModules = (
  modules: CourseModuleData[]
 ): CourseModuleData[] =>
  modules.map(module => {
    const originalQuestionById = new Map(
      module.practiceQuestions.map(question => [question.id, question])
    );
    return {
      ...module,
      practiceQuestions: module.practiceQuestions.map(question =>
        applyMath11PracticeChoice(question, choiceByQuestionId.get(question.id))
      ),
      practiceSolutions: module.practiceSolutions.map(solution => {
        const originalQuestion = originalQuestionById.get(solution.questionId);
        return applyMath11PracticeChoiceSolution(
          solution,
          originalQuestion,
          choiceByQuestionId.get(solution.questionId)
        );
      }),
    };
  });
