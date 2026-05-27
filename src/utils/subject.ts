import type { SubjectCode } from '../types';

export const getSubjectFromQuestionTypeId = (questionTypeId?: string): SubjectCode | null => {
  if (questionTypeId?.startsWith('math')) return 'math';
  if (questionTypeId?.startsWith('eng')) return 'english';
  return null;
};
