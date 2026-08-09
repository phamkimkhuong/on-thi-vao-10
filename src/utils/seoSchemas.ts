export interface BreadcrumbItem {
  name: string;
  item: string;
}

export interface CourseSchemaParams {
  name: string;
  description: string;
  url: string;
  providerName?: string;
  providerUrl?: string;
  courseCode?: string;
}

export interface WebPageSchemaParams {
  name: string;
  description: string;
  url: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface QuizQuestionItem {
  text: string;
  options: string[];
  answer: string;
}

export interface QuizSchemaParams {
  name: string;
  description: string;
  url: string;
  questions: QuizQuestionItem[];
}

const DEFAULT_DOMAIN = 'https://ezonthi.com';

/**
 * Tạo Schema.org JSON-LD BreadcrumbList
 * Ví dụ: Trang chủ > Lớp 10 > Môn Toán > Dạng 1: Parabol
 */
export const createBreadcrumbSchema = (items: BreadcrumbItem[]) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.item.startsWith('http') ? crumb.item : `${DEFAULT_DOMAIN}${crumb.item}`
    }))
  };
};

/**
 * Tạo Schema.org JSON-LD Course
 * Dùng cho các trang khóa học / môn học (Ví dụ: Toán Lớp 10, Tiếng Anh Lớp 9)
 */
export const createCourseSchema = ({
  name,
  description,
  url,
  providerName = 'ezonthi',
  providerUrl = DEFAULT_DOMAIN,
  courseCode
}: CourseSchemaParams) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name,
    description,
    courseCode,
    url: url.startsWith('http') ? url : `${DEFAULT_DOMAIN}${url}`,
    provider: {
      '@type': 'EducationalOrganization',
      name: providerName,
      sameAs: providerUrl,
      url: providerUrl
    }
  };
};

/**
 * Tạo Schema.org JSON-LD WebPage
 */
export const createWebPageSchema = ({
  name,
  description,
  url
}: WebPageSchemaParams) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name,
    description,
    url: url.startsWith('http') ? url : `${DEFAULT_DOMAIN}${url}`
  };
};

/**
 * Tạo Schema.org JSON-LD FAQPage
 * Biến các câu hỏi thường gặp / dấu hiệu / bẫy bài thi thành Rich Snippets trên Google Search
 */
export const createFAQSchema = (items: FAQItem[]) => {
  if (!items || items.length === 0) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer
      }
    }))
  };
};

/**
 * Tạo Schema.org JSON-LD Quiz
 * Dùng cho các câu tự kiểm tra lý thuyết (theoryCheckpoints)
 */
export const createQuizSchema = ({
  name,
  description,
  url,
  questions
}: QuizSchemaParams) => {
  if (!questions || questions.length === 0) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'Quiz',
    name,
    description,
    url: url.startsWith('http') ? url : `${DEFAULT_DOMAIN}${url}`,
    hasPart: questions.map(q => ({
      '@type': 'Question',
      name: q.text,
      suggestedAnswer: q.options.map(opt => ({
        '@type': 'Answer',
        text: opt
      })),
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.answer
      }
    }))
  };
};

