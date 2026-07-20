import type { PracticeRole, QuestionPracticeMetadata, QuestionRepresentationType } from '@/types';
const m=(questionId:string,subTypeId:string,practiceRole:PracticeRole,representationType:QuestionRepresentationType,isMasteryHoldout=false):QuestionPracticeMetadata=>({questionId,subTypeId,practiceRole,representationType,...(isMasteryHoldout?{isMasteryHoldout}:{})});
export const m8PracticeMetadata:QuestionPracticeMetadata[]=[
 m('chem10-q35a','chem10-qt35-st1','guided','equation'),m('chem10-q35b','chem10-qt35-st2','guided','equation'),m('chem10-q35c','chem10-qt35-st3','near_transfer','text'),m('chem10-q35d','chem10-qt35-st4','far_transfer','diagram'),
 m('chem10-q35-reinforce-concept','chem10-qt35-st1','guided','text'),m('chem10-q35-reinforce-process','chem10-qt35-st1','near_transfer','text'),m('chem10-q35-reinforce-misconception','chem10-qt35-st3','misconception_check','text'),
 m('chem10-m8-qt35-e1','chem10-qt35-st1','mastery_holdout','equation',true),m('chem10-m8-qt35-e2','chem10-qt35-st2','mastery_holdout','diagram',true),m('chem10-m8-qt35-e3','chem10-qt35-st4','mastery_holdout','table',true),
 m('chem10-q36a','chem10-qt36-st2','guided','equation'),m('chem10-q36b','chem10-qt36-st1','guided','equation'),m('chem10-q36c','chem10-qt36-st3','near_transfer','equation'),m('chem10-q36d','chem10-qt36-st4','misconception_check','text'),
 m('chem10-q36-reinforce-concept','chem10-qt36-st1','guided','text'),m('chem10-q36-reinforce-process','chem10-qt36-st2','near_transfer','text'),m('chem10-q36-reinforce-misconception','chem10-qt36-st4','misconception_check','text'),
 m('chem10-m8-qt36-e1','chem10-qt36-st2','mastery_holdout','equation',true),m('chem10-m8-qt36-e2','chem10-qt36-st3','mastery_holdout','equation',true),m('chem10-m8-qt36-e3','chem10-qt36-st1','mastery_holdout','text',true),
 m('chem10-q37a','chem10-qt37-st3','guided','experiment'),m('chem10-q37b','chem10-qt37-st1','guided','table'),m('chem10-q37c','chem10-qt37-st4','misconception_check','table'),m('chem10-q37d','chem10-qt37-st1','far_transfer','experiment'),
 m('chem10-q37-reinforce-concept','chem10-qt37-st1','guided','text'),m('chem10-q37-reinforce-process','chem10-qt37-st3','near_transfer','text'),m('chem10-q37-reinforce-misconception','chem10-qt37-st4','misconception_check','text'),
 m('chem10-m8-qt37-e1','chem10-qt37-st1','mastery_holdout','table',true),m('chem10-m8-qt37-e2','chem10-qt37-st3','mastery_holdout','experiment',true),m('chem10-m8-qt37-e3','chem10-qt37-st4','mastery_holdout','experiment',true),
 m('chem10-q38a','chem10-qt38-st1','guided','text'),m('chem10-q38b','chem10-qt38-st2','near_transfer','equation'),m('chem10-q38c','chem10-qt38-st2','representation_switch','graph'),m('chem10-q38d','chem10-qt38-st4','guided','text'),
 m('chem10-q38-reinforce-concept','chem10-qt38-st1','guided','text'),m('chem10-q38-reinforce-process','chem10-qt38-st2','near_transfer','text'),m('chem10-q38-reinforce-misconception','chem10-qt38-st3','misconception_check','text'),
 m('chem10-m8-qt38-e1','chem10-qt38-st1','mastery_holdout','equation',true),m('chem10-m8-qt38-e2','chem10-qt38-st1','mastery_holdout','graph',true),m('chem10-m8-qt38-e3','chem10-qt38-st3','mastery_holdout','text',true),
];
