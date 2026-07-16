import type { SubjectCode } from '../types';

export const getSubjectFromQuestionTypeId = (questionTypeId?: string): SubjectCode | null => {
  if (questionTypeId?.startsWith('math')) return 'math';
  if (questionTypeId?.startsWith('eng')) return 'english';
  if (questionTypeId?.startsWith('chem')) return 'chemistry';
  if (questionTypeId?.startsWith('bio')) return 'biology';
  return null;
};

export const getSubjectName = (subject: SubjectCode): string => {
  switch (subject) {
    case 'math': return 'Toán học';
    case 'english': return 'Tiếng Anh';
    case 'chemistry': return 'Hóa học';
    case 'physics': return 'Vật lý';
    case 'biology': return 'Sinh học';
    default: return 'Môn học';
  }
};

export const getSubjectIcon = (subject: SubjectCode): string => {
  switch (subject) {
    case 'math': return '📐';
    case 'english': return '🗣️';
    case 'chemistry': return '⚗️';
    case 'physics': return '🧪';
    case 'biology': return '🧬';
    default: return '📚';
  }
};
