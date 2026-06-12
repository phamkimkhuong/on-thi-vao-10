import { useMemo } from 'react';
import { Question } from '../../../types';

export const useEnglishQuestionFilter = (
  questionTypeId: string | undefined,
  qList: Question[],
  selectedSubTense: string | null,
  customQuestions: Question[] | null,
  isExamMode: boolean,
  examQuestions: Question[]
) => {
  return useMemo(() => {
    if (isExamMode) {
      return examQuestions;
    }

    if (questionTypeId === 'eng-qt6' && selectedSubTense === 'all' && customQuestions) {
      return customQuestions;
    }

    let filtered = questionTypeId
      ? qList.filter(q => q.questionTypeId === questionTypeId)
      : qList;

    if (questionTypeId === 'eng-qt6' && selectedSubTense && selectedSubTense !== 'all') {
      if (selectedSubTense === 'present_simple') {
        filtered = filtered.filter(q => {
          const num = parseInt(q.id.replace('eng-q', ''), 10);
          return (num >= 5 && num <= 24) || (num >= 102 && num <= 121);
        });
      } else if (selectedSubTense === 'past_simple') {
        filtered = filtered.filter(q => {
          const num = parseInt(q.id.replace('eng-q', ''), 10);
          return (num >= 25 && num <= 44) || (num >= 122 && num <= 141);
        });
      } else if (selectedSubTense === 'present_continuous') {
        filtered = filtered.filter(q => {
          const num = parseInt(q.id.replace('eng-q', ''), 10);
          return (num >= 45 && num <= 64) || (num >= 142 && num <= 161);
        });
      } else if (selectedSubTense === 'past_continuous') {
        filtered = filtered.filter(q => {
          const num = parseInt(q.id.replace('eng-q', ''), 10);
          return (num >= 65 && num <= 84) || (num >= 162 && num <= 181);
        });
      } else if (selectedSubTense === 'present_perfect') {
        filtered = filtered.filter(q => {
          const num = parseInt(q.id.replace('eng-q', ''), 10);
          return num >= 182 && num <= 201;
        });
      } else if (selectedSubTense === 'future_simple') {
        filtered = filtered.filter(q => {
          const num = parseInt(q.id.replace('eng-q', ''), 10);
          return num >= 202 && num <= 221;
        });
      } else if (selectedSubTense === 'to_v') {
        filtered = filtered.filter(q => {
          const num = parseInt(q.id.replace('eng-q', ''), 10);
          return num >= 222 && num <= 241;
        });
      } else if (selectedSubTense === 'v_ing') {
        filtered = filtered.filter(q => {
          const num = parseInt(q.id.replace('eng-q', ''), 10);
          return num >= 242 && num <= 261;
        });
      } else if (selectedSubTense === 'v0') {
        filtered = filtered.filter(q => {
          const num = parseInt(q.id.replace('eng-q', ''), 10);
          return num >= 262 && num <= 281;
        });
      } else if (selectedSubTense === 'verb_combo') {
        filtered = filtered.filter(q => {
          const num = parseInt(q.id.replace('eng-q', ''), 10);
          return num >= 222 && num <= 261;
        });
      } else if (selectedSubTense === 'prep_phrasal') {
        filtered = filtered.filter(q => {
          const num = parseInt(q.id.replace('eng-q', ''), 10);
          return num >= 262 && num <= 301;
        });
      } else if (selectedSubTense === 'comparison') {
        filtered = filtered.filter(q => {
          const num = parseInt(q.id.replace('eng-q', ''), 10);
          return num >= 302 && num <= 331;
        });
      } else if (selectedSubTense === 'word_position') {
        filtered = filtered.filter(q => {
          const num = parseInt(q.id.replace('eng-q', ''), 10);
          return num >= 332 && num <= 361;
        });
      } else if (selectedSubTense === 'tenses_review') {
        filtered = filtered.filter(q => {
          const num = parseInt(q.id.replace('eng-q', ''), 10);
          return num >= 5 && num <= 221;
        });
      }
    }

    return filtered;
  }, [questionTypeId, qList, selectedSubTense, customQuestions, isExamMode, examQuestions]);
};
