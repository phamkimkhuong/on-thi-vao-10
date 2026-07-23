import type { SubjectCode } from '../types';

export const getSubjectFromQuestionTypeId = (questionTypeId?: string): SubjectCode | null => {
  if (!questionTypeId) return null;
  // Hỗ trợ bóc tách tiền tố khối lớp (VD: g10-chem -> chem) để so khớp chính xác
  const id = questionTypeId.replace(/^g\d+-/, '');
  if (id.startsWith('math')) return 'math';
  if (id.startsWith('eng')) return 'english';
  if (id.startsWith('chem')) return 'chemistry';
  if (id.startsWith('bio')) return 'biology';
  if (id.startsWith('phy')) return 'physics';
  return null;
};

export const getGradeFromQuestionTypeId = (questionTypeId?: string): string => {
  if (!questionTypeId) return 'Lớp 9';
  const match = questionTypeId.match(/^g(\d+)-/);
  if (match) {
    return `Lớp ${match[1]}`;
  }
  return 'Lớp 9';
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
    case 'physics': return '⚛️';
    case 'biology': return '🧬';
    default: return '📚';
  }
};
