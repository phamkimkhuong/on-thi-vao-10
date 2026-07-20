import type { QuestionPracticeMetadata } from '@/types';

type R = QuestionPracticeMetadata['practiceRole'];
type P = QuestionPracticeMetadata['representationType'];

const m = (questionId: string, subTypeId: string, practiceRole: R, representationType: P, isMasteryHoldout = false): QuestionPracticeMetadata => ({
  questionId,
  subTypeId,
  practiceRole,
  representationType,
  ...(isMasteryHoldout ? { isMasteryHoldout: true } : {})
});

/** Ánh xạ tường minh 70 câu legacy của Module 1 vào micro-type. */
export const m1PracticeMetadata: QuestionPracticeMetadata[] = [
  m('chem10-q1', 'chem10-qt1-st1', 'guided', 'text'),
  m('chem10-q1b', 'chem10-qt1-st2', 'near_transfer', 'equation'),
  m('chem10-q1c', 'chem10-qt1-st2', 'retention', 'equation'),
  m('chem10-q1d', 'chem10-qt1-st4', 'misconception_check', 'diagram'),
  m('chem10-q1-reinforce-concept', 'chem10-qt1-st1', 'guided', 'text'),
  m('chem10-q1-reinforce-process', 'chem10-qt1-st2', 'near_transfer', 'text'),
  m('chem10-q1-reinforce-misconception', 'chem10-qt1-st1', 'misconception_check', 'text'),
  m('chem10-m1-qt1-e1', 'chem10-qt1-st2', 'mastery_holdout', 'equation', true),
  m('chem10-m1-qt1-e2', 'chem10-qt1-st3', 'mastery_holdout', 'equation', true),
  m('chem10-m1-qt1-e3', 'chem10-qt1-st3', 'mastery_holdout', 'table', true),

  m('chem10-q2', 'chem10-qt2-st2', 'guided', 'equation'),
  m('chem10-q2b', 'chem10-qt2-st3', 'near_transfer', 'table'),
  m('chem10-q2c', 'chem10-qt2-st1', 'retention', 'equation'),
  m('chem10-q2d', 'chem10-qt2-st3', 'misconception_check', 'text'),
  m('chem10-q2-reinforce-concept', 'chem10-qt2-st3', 'guided', 'text'),
  m('chem10-q2-reinforce-process', 'chem10-qt2-st1', 'near_transfer', 'text'),
  m('chem10-q2-reinforce-misconception', 'chem10-qt2-st1', 'misconception_check', 'text'),
  m('chem10-m1-qt2-e1', 'chem10-qt2-st2', 'mastery_holdout', 'equation', true),
  m('chem10-m1-qt2-e2', 'chem10-qt2-st4', 'mastery_holdout', 'table', true),
  m('chem10-m1-qt2-e3', 'chem10-qt2-st2', 'mastery_holdout', 'equation', true),

  m('chem10-q3', 'chem10-qt3-st2', 'guided', 'equation'),
  m('chem10-q3b', 'chem10-qt3-st4', 'representation_switch', 'graph'),
  m('chem10-q3c', 'chem10-qt3-st2', 'near_transfer', 'equation'),
  m('chem10-q3d', 'chem10-qt3-st4', 'misconception_check', 'graph'),
  m('chem10-q3-reinforce-concept', 'chem10-qt3-st1', 'guided', 'text'),
  m('chem10-q3-reinforce-process', 'chem10-qt3-st2', 'near_transfer', 'text'),
  m('chem10-q3-reinforce-misconception', 'chem10-qt3-st1', 'misconception_check', 'text'),
  m('chem10-m1-qt3-e1', 'chem10-qt3-st2', 'mastery_holdout', 'equation', true),
  m('chem10-m1-qt3-e2', 'chem10-qt3-st3', 'mastery_holdout', 'equation', true),
  m('chem10-m1-qt3-e3', 'chem10-qt3-st4', 'mastery_holdout', 'graph', true),

  m('chem10-q4', 'chem10-qt4-st2', 'guided', 'text'),
  m('chem10-q4b', 'chem10-qt4-st4', 'near_transfer', 'diagram'),
  m('chem10-q4c', 'chem10-qt4-st3', 'misconception_check', 'text'),
  m('chem10-q4d', 'chem10-qt4-st2', 'representation_switch', 'diagram'),
  m('chem10-q4-reinforce-concept', 'chem10-qt4-st1', 'guided', 'text'),
  m('chem10-q4-reinforce-process', 'chem10-qt4-st3', 'near_transfer', 'text'),
  m('chem10-q4-reinforce-misconception', 'chem10-qt4-st3', 'misconception_check', 'text'),
  m('chem10-m1-qt4-e1', 'chem10-qt4-st2', 'mastery_holdout', 'diagram', true),
  m('chem10-m1-qt4-e2', 'chem10-qt4-st4', 'mastery_holdout', 'text', true),
  m('chem10-m1-qt4-e3', 'chem10-qt4-st3', 'mastery_holdout', 'diagram', true),

  m('chem10-q5', 'chem10-qt5-st3', 'guided', 'equation'),
  m('chem10-q5b', 'chem10-qt5-st2', 'near_transfer', 'text'),
  m('chem10-q5c', 'chem10-qt5-st2', 'retention', 'text'),
  m('chem10-q5d', 'chem10-qt5-st3', 'representation_switch', 'table'),
  m('chem10-q5-reinforce-concept', 'chem10-qt5-st1', 'guided', 'text'),
  m('chem10-q5-reinforce-process', 'chem10-qt5-st2', 'near_transfer', 'text'),
  m('chem10-q5-reinforce-misconception', 'chem10-qt5-st1', 'misconception_check', 'text'),
  m('chem10-m1-qt5-e1', 'chem10-qt5-st2', 'mastery_holdout', 'equation', true),
  m('chem10-m1-qt5-e2', 'chem10-qt5-st2', 'mastery_holdout', 'diagram', true),
  m('chem10-m1-qt5-e3', 'chem10-qt5-st1', 'mastery_holdout', 'diagram', true),

  m('chem10-q6', 'chem10-qt6-st4', 'guided', 'equation'),
  m('chem10-q6b', 'chem10-qt6-st1', 'near_transfer', 'equation'),
  m('chem10-q6c', 'chem10-qt6-st1', 'retention', 'equation'),
  m('chem10-q6d', 'chem10-qt6-st3', 'misconception_check', 'diagram'),
  m('chem10-q6-reinforce-concept', 'chem10-qt6-st1', 'guided', 'text'),
  m('chem10-q6-reinforce-process', 'chem10-qt6-st1', 'near_transfer', 'text'),
  m('chem10-q6-reinforce-misconception', 'chem10-qt6-st3', 'misconception_check', 'text'),
  m('chem10-m1-qt6-e1', 'chem10-qt6-st2', 'mastery_holdout', 'equation', true),
  m('chem10-m1-qt6-e2', 'chem10-qt6-st4', 'mastery_holdout', 'diagram', true),
  m('chem10-m1-qt6-e3', 'chem10-qt6-st2', 'mastery_holdout', 'equation', true),

  m('chem10-q7', 'chem10-qt7-st1', 'guided', 'equation'),
  m('chem10-q7b', 'chem10-qt7-st3', 'near_transfer', 'equation'),
  m('chem10-q7c', 'chem10-qt7-st2', 'retention', 'equation'),
  m('chem10-q7d', 'chem10-qt7-st3', 'misconception_check', 'equation'),
  m('chem10-q7-reinforce-concept', 'chem10-qt7-st2', 'guided', 'text'),
  m('chem10-q7-reinforce-process', 'chem10-qt7-st1', 'near_transfer', 'text'),
  m('chem10-q7-reinforce-misconception', 'chem10-qt7-st1', 'misconception_check', 'text'),
  m('chem10-m1-qt7-e1', 'chem10-qt7-st2', 'mastery_holdout', 'equation', true),
  m('chem10-m1-qt7-e2', 'chem10-qt7-st3', 'mastery_holdout', 'table', true),
  m('chem10-m1-qt7-e3', 'chem10-qt7-st1', 'mastery_holdout', 'equation', true)
];
