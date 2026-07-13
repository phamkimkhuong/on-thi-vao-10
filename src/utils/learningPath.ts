import type { LearningOutcome, LearningOutcomeStatus } from '@/types';

const getOutcomeMastery = (outcome: LearningOutcome, masteryLevels: Record<string, number>) => {
  if (outcome.questionTypeIds.length === 0) return 0;
  const scores = outcome.questionTypeIds.map(id => masteryLevels[id] ?? 0);
  return Math.round(scores.reduce((sum, score) => sum + score, 0) / scores.length);
};

export const buildLearningOutcomeStatuses = (
  outcomes: LearningOutcome[],
  masteryLevels: Record<string, number>
): LearningOutcomeStatus[] => {
  const byId = new Map(outcomes.map(outcome => [outcome.id, outcome]));
  const scoreById = new Map(outcomes.map(outcome => [outcome.id, getOutcomeMastery(outcome, masteryLevels)]));

  return outcomes.map(outcome => {
    const masteryScore = scoreById.get(outcome.id) ?? 0;
    const unmetPrerequisites = outcome.prerequisiteOutcomeIds
      .map(id => byId.get(id))
      .filter((item): item is LearningOutcome => Boolean(item))
      .filter(item => (scoreById.get(item.id) ?? 0) < 60);

    let state: LearningOutcomeStatus['state'];
    if (masteryScore >= 80) state = 'mastered';
    else if (unmetPrerequisites.length > 0) state = 'blocked';
    else if (masteryScore > 0) state = 'in_progress';
    else state = 'ready';

    return { outcome, masteryScore, state, unmetPrerequisites };
  });
};

export const getRecommendedOutcome = (statuses: LearningOutcomeStatus[]) =>
  statuses.find(item => item.outcome.scope === 'core' && item.state === 'in_progress' && item.outcome.questionTypeIds.length > 0)
  ?? statuses.find(item => item.outcome.scope === 'core' && item.state === 'ready' && item.outcome.questionTypeIds.length > 0)
  ?? statuses.find(item => item.outcome.scope === 'bridge' && item.state === 'in_progress' && item.outcome.questionTypeIds.length > 0)
  ?? null;
