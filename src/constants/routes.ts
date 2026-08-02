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
  ABOUT: '/about',
  TEACHER: '/teacher',
  AFFILIATE: '/affiliate',
  VOCABULARY: '/vocabulary',
  QUESTION_TYPE_DETAIL: (questionTypeId: string) => `/question-types/${questionTypeId}`
} as const;

