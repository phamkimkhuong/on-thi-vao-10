import type { QuestionPracticeMetadata } from '@/types';

type R = QuestionPracticeMetadata['practiceRole'];
type P = QuestionPracticeMetadata['representationType'];
const m = (questionId: string, subTypeId: string, practiceRole: R, representationType: P, isMasteryHoldout = false): QuestionPracticeMetadata => ({
  questionId, subTypeId, practiceRole, representationType,
  ...(isMasteryHoldout ? { isMasteryHoldout: true } : {})
});

/** Ánh xạ tường minh 55 câu legacy của Module 2. */
export const m2PracticeMetadata: QuestionPracticeMetadata[] = [
  m('chem10-q8a','chem10-qt8-st2','guided','table'),
  m('chem10-q8b','chem10-qt8-st1','guided','table'),
  m('chem10-q8c','chem10-qt8-st2','near_transfer','diagram'),
  m('chem10-q8d','chem10-qt8-st3','misconception_check','text'),
  m('chem10-q8e','chem10-qt8-st1','retention','table'),
  m('chem10-q8-reinforce-concept','chem10-qt8-st1','guided','text'),
  m('chem10-q8-reinforce-process','chem10-qt8-st1','near_transfer','text'),
  m('chem10-q8-reinforce-misconception','chem10-qt8-st2','misconception_check','text'),
  m('chem10-m2-qt8-e1','chem10-qt8-st4','mastery_holdout','diagram',true),
  m('chem10-m2-qt8-e2','chem10-qt8-st4','mastery_holdout','table',true),
  m('chem10-m2-qt8-e3','chem10-qt8-st3','mastery_holdout','table',true),

  m('chem10-q9a','chem10-qt9-st1','guided','equation'),
  m('chem10-q9b','chem10-qt9-st2','guided','equation'),
  m('chem10-q9c','chem10-qt9-st1','near_transfer','equation'),
  m('chem10-q9d','chem10-qt9-st2','near_transfer','equation'),
  m('chem10-q9e','chem10-qt9-st4','far_transfer','text'),
  m('chem10-q9-reinforce-concept','chem10-qt9-st1','guided','text'),
  m('chem10-q9-reinforce-process','chem10-qt9-st1','near_transfer','text'),
  m('chem10-q9-reinforce-misconception','chem10-qt9-st1','misconception_check','text'),
  m('chem10-m2-qt9-e1','chem10-qt9-st1','mastery_holdout','table',true),
  m('chem10-m2-qt9-e2','chem10-qt9-st2','mastery_holdout','equation',true),
  m('chem10-m2-qt9-e3','chem10-qt9-st3','mastery_holdout','equation',true),

  m('chem10-q10a','chem10-qt10-st4','guided','text'),
  m('chem10-q10b','chem10-qt10-st2','guided','table'),
  m('chem10-q10c','chem10-qt10-st3','near_transfer','diagram'),
  m('chem10-q10d','chem10-qt10-st3','far_transfer','table'),
  m('chem10-q10e','chem10-qt10-st4','misconception_check','diagram'),
  m('chem10-q10-reinforce-concept','chem10-qt10-st4','guided','text'),
  m('chem10-q10-reinforce-process','chem10-qt10-st1','near_transfer','text'),
  m('chem10-q10-reinforce-misconception','chem10-qt10-st4','misconception_check','text'),
  m('chem10-m2-qt10-e1','chem10-qt10-st1','mastery_holdout','table',true),
  m('chem10-m2-qt10-e2','chem10-qt10-st3','mastery_holdout','diagram',true),
  m('chem10-m2-qt10-e3','chem10-qt10-st3','mastery_holdout','table',true),

  m('chem10-q11a','chem10-qt11-st4','guided','table'),
  m('chem10-q11b','chem10-qt11-st2','guided','diagram'),
  m('chem10-q11c','chem10-qt11-st1','near_transfer','table'),
  m('chem10-q11d','chem10-qt11-st3','near_transfer','diagram'),
  m('chem10-q11e','chem10-qt11-st2','misconception_check','text'),
  m('chem10-q11-reinforce-concept','chem10-qt11-st4','guided','text'),
  m('chem10-q11-reinforce-process','chem10-qt11-st1','near_transfer','text'),
  m('chem10-q11-reinforce-misconception','chem10-qt11-st1','misconception_check','text'),
  m('chem10-m2-qt11-e1','chem10-qt11-st1','mastery_holdout','table',true),
  m('chem10-m2-qt11-e2','chem10-qt11-st2','mastery_holdout','table',true),
  m('chem10-m2-qt11-e3','chem10-qt11-st4','mastery_holdout','diagram',true),

  m('chem10-q12a','chem10-qt12-st1','guided','table'),
  m('chem10-q12b','chem10-qt12-st3','guided','text'),
  m('chem10-q12c','chem10-qt12-st1','near_transfer','equation'),
  m('chem10-q12d','chem10-qt12-st1','misconception_check','table'),
  m('chem10-q12e','chem10-qt12-st3','far_transfer','text'),
  m('chem10-q12-reinforce-concept','chem10-qt12-st1','guided','text'),
  m('chem10-q12-reinforce-process','chem10-qt12-st1','near_transfer','text'),
  m('chem10-q12-reinforce-misconception','chem10-qt12-st1','misconception_check','text'),
  m('chem10-m2-qt12-e1','chem10-qt12-st1','mastery_holdout','equation',true),
  m('chem10-m2-qt12-e2','chem10-qt12-st1','mastery_holdout','table',true),
  m('chem10-m2-qt12-e3','chem10-qt12-st4','mastery_holdout','equation',true)
];
