export const ROUTES = {
  DASHBOARD: '/dashboard',
  ROADMAP: '/roadmap',
  PRACTICE: '/practice',
  PRACTICE_DETAIL: (questionTypeId: string) => `/practice/${questionTypeId}`,
  AI_TUTOR: '/ai-tutor',
  MISTAKES: '/mistakes',
  EXAM: '/exam',
  SUPPORT: '/support',
  PREMIUM: '/premium',
  TEACHER: '/teacher',
  AFFILIATE: '/affiliate',
  QUESTION_TYPE_DETAIL: (questionTypeId: string) => `/question-types/${questionTypeId}`
} as const;

