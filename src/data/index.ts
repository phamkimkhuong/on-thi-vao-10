import { SubjectCode, Topic, QuestionType, Question, Solution, MockExam } from '@/types';

// Interface cho cấu trúc bộ nhớ đệm (Cache) của từng môn học
export interface SubjectDataCache {
  topics: Topic[];
  questionTypes: QuestionType[];
  questions: Question[];
  solutions: Solution[];
  mockExams: MockExam[];
  learningOutcomes?: any[];
  learningMisconceptions?: any[];
}

// Bộ nhớ đệm lưu trữ dữ liệu các môn đã nạp
const dataCache: Record<string, SubjectDataCache> = {};

// Hàm nạp động dữ liệu môn học
export const loadSubjectData = async (grade: 'grade9' | 'grade10', subject: SubjectCode): Promise<SubjectDataCache> => {
  const cacheKey = `${grade}-${subject}`;
  if (dataCache[cacheKey]) {
    return dataCache[cacheKey];
  }

  let data: SubjectDataCache;

  switch (grade) {
    case 'grade9':
      if (subject === 'math') {
        const [topics, questionTypes, questions, solutions, mockExams, mockSolutions, mathMockQuestions] = await Promise.all([
          import('./grade9/math/topics.json').then(m => m.default as Topic[]),
          import('./grade9/math/questionTypes.json').then(m => m.default as QuestionType[]),
          import('./grade9/math/questions.json').then(m => m.default as Question[]),
          import('./grade9/math/solutions.json').then(m => m.default as Solution[]),
          import('./grade9/mockExamsList.json').then(m => (m.default as MockExam[]).filter(e => e.subjectId === 'math')),
          import('./grade9/mockSolutionsList.json').then(m => m.default as Solution[]),
          import('./grade9/mathMockQuestions.json').then(m => m.default as Question[])
        ]);
        
        data = {
          topics,
          questionTypes,
          questions: [...questions, ...mathMockQuestions],
          solutions: [...solutions, ...mockSolutions],
          mockExams
        };
      } else if (subject === 'english') {
        const [topics, questionTypes, questions, solutions, mockExams, mockSolutions, englishMockQuestions] = await Promise.all([
          import('./grade9/english/topics.json').then(m => m.default as Topic[]),
          import('./grade9/english/questionTypes.json').then(m => m.default as QuestionType[]),
          import('./grade9/english/questions.json').then(m => m.default as Question[]),
          import('./grade9/english/solutions.json').then(m => m.default as Solution[]),
          import('./grade9/mockExamsList.json').then(m => (m.default as MockExam[]).filter(e => e.subjectId === 'english')),
          import('./grade9/mockSolutionsList.json').then(m => m.default as Solution[]),
          import('./grade9/englishMockQuestions.json').then(m => m.default as Question[])
        ]);

        data = {
          topics,
          questionTypes,
          questions: [...questions, ...englishMockQuestions],
          solutions: [...solutions, ...mockSolutions],
          mockExams
        };
      } else {
        data = { topics: [], questionTypes: [], questions: [], solutions: [], mockExams: [] };
      }
      break;

    case 'grade10':
      if (subject === 'math') {
        const [topicsMod, qtMod, qMod, sMod, assessmentsMod] = await Promise.all([
          import('./grade10/math/topics'),
          import('./grade10/math/questionTypes'),
          import('./grade10/math/questions'),
          import('./grade10/math/solutions'),
          import('./grade10/math/assessments')
        ]);
        data = {
          topics: topicsMod.g10MathTopics,
          questionTypes: qtMod.g10MathQuestionTypes,
          questions: [...qMod.g10MathQuestions, ...assessmentsMod.g10MathAssessmentQuestions],
          solutions: [...sMod.g10MathSolutions, ...assessmentsMod.g10MathAssessmentSolutions],
          mockExams: assessmentsMod.g10MathAssessmentExams
        };
      } else if (subject === 'english') {
        const [topicsMod, qtMod, qMod, sMod, assessmentsMod] = await Promise.all([
          import('./grade10/english/topics'),
          import('./grade10/english/questionTypes'),
          import('./grade10/english/questions'),
          import('./grade10/english/solutions'),
          import('./grade10/english/assessments')
        ]);
        data = {
          topics: topicsMod.g10EnglishTopics,
          questionTypes: qtMod.g10EnglishQuestionTypes,
          questions: qMod.g10EnglishQuestions,
          solutions: sMod.g10EnglishSolutions,
          mockExams: assessmentsMod.g10EnglishAssessmentExams
        };
      } else if (subject === 'chemistry') {
        const [topicsMod, qtMod, qMod, sMod, learningPathMod, assessmentsMod] = await Promise.all([
          import('./grade10/chemistry/topics'),
          import('./grade10/chemistry/questionTypes'),
          import('./grade10/chemistry/questions'),
          import('./grade10/chemistry/solutions'),
          import('./grade10/chemistry/learningPath'),
          import('./grade10/chemistry/assessments')
        ]);
        data = {
          topics: topicsMod.g10ChemistryTopics,
          questionTypes: qtMod.g10ChemistryQuestionTypes,
          questions: [...qMod.g10ChemistryQuestions, ...assessmentsMod.g10ChemistryAssessmentQuestions],
          solutions: [...sMod.g10ChemistrySolutions, ...assessmentsMod.g10ChemistryAssessmentSolutions],
          mockExams: assessmentsMod.g10ChemistryAssessmentExams,
          learningOutcomes: learningPathMod.g10ChemistryOutcomes,
          learningMisconceptions: learningPathMod.g10ChemistryMisconceptions
        };
      } else if (subject === 'biology') {
        const [topicsMod, qtMod, qMod, sMod, learningPathMod, assessmentsMod] = await Promise.all([
          import('./grade10/biology/topics'),
          import('./grade10/biology/questionTypes'),
          import('./grade10/biology/questions'),
          import('./grade10/biology/solutions'),
          import('./grade10/biology/learningPath'),
          import('./grade10/biology/assessments')
        ]);
        data = {
          topics: topicsMod.g10BiologyTopics,
          questionTypes: qtMod.g10BiologyQuestionTypes,
          questions: [...qMod.g10BiologyQuestions, ...assessmentsMod.g10BiologyAssessmentQuestions],
          solutions: [...sMod.g10BiologySolutions, ...assessmentsMod.g10BiologyAssessmentSolutions],
          mockExams: assessmentsMod.g10BiologyAssessmentExams,
          learningOutcomes: learningPathMod.g10BiologyOutcomes,
          learningMisconceptions: learningPathMod.g10BiologyMisconceptions
        };
      } else {
        data = { topics: [], questionTypes: [], questions: [], solutions: [], mockExams: [] };
      }
      break;

    default:
      throw new Error(`Unsupported grade: ${grade}`);
  }

  dataCache[cacheKey] = data;
  return data;
};

// Đồng bộ hóa việc truy xuất thông tin từ bộ nhớ cache
export const getTopics = (grade: 'grade9' | 'grade10', subject: SubjectCode): Topic[] => {
  const cacheKey = `${grade}-${subject}`;
  return dataCache[cacheKey]?.topics || [];
};

export const getQuestionTypes = (grade: 'grade9' | 'grade10', subject: SubjectCode): QuestionType[] => {
  const cacheKey = `${grade}-${subject}`;
  return dataCache[cacheKey]?.questionTypes || [];
};

export const getQuestions = (grade: 'grade9' | 'grade10', subject: SubjectCode): Question[] => {
  const cacheKey = `${grade}-${subject}`;
  return dataCache[cacheKey]?.questions || [];
};

export const getSolutions = (grade: 'grade9' | 'grade10', subject: SubjectCode): Solution[] => {
  const cacheKey = `${grade}-${subject}`;
  return dataCache[cacheKey]?.solutions || [];
};

export const getMockExams = (grade: 'grade9' | 'grade10', subject: SubjectCode): MockExam[] => {
  const cacheKey = `${grade}-${subject}`;
  return dataCache[cacheKey]?.mockExams || [];
};

export const getLearningOutcomes = (grade: 'grade9' | 'grade10', subject: SubjectCode): any[] => {
  const cacheKey = `${grade}-${subject}`;
  return dataCache[cacheKey]?.learningOutcomes || [];
};

export const getLearningMisconceptions = (grade: 'grade9' | 'grade10', subject: SubjectCode): any[] => {
  const cacheKey = `${grade}-${subject}`;
  return dataCache[cacheKey]?.learningMisconceptions || [];
};
