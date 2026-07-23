import { SubjectCode, Topic, QuestionType, Question, Solution, MockExam, AssessmentBlueprint } from '@/types';

// Interface cho cấu trúc bộ nhớ đệm (Cache) của từng môn học
export interface SubjectDataCache {
  topics: Topic[];
  questionTypes: QuestionType[];
  questions: Question[];
  solutions: Solution[];
  mockExams: MockExam[];
  assessmentBlueprints?: AssessmentBlueprint[];
  learningOutcomes?: any[];
  learningMisconceptions?: any[];
}

// Bộ nhớ đệm lưu trữ dữ liệu các môn đã nạp
const dataCache: Record<string, SubjectDataCache> = {};

// Hàm nạp động dữ liệu môn học
export const loadSubjectData = async (grade: 'grade9' | 'grade10' | 'grade11' | 'grade12', subject: SubjectCode): Promise<SubjectDataCache> => {
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
        const [topicsMod, qtMod, qMod, sMod, learningPathMod, assessmentsMod] = await Promise.all([
          import('./grade10/math/topics'),
          import('./grade10/math/questionTypes'),
          import('./grade10/math/questions'),
          import('./grade10/math/solutions'),
          import('./grade10/math/learningPath'),
          import('./grade10/math/assessments')
        ]);
        data = {
          topics: topicsMod.g10MathTopics,
          questionTypes: qtMod.g10MathQuestionTypes,
          questions: [...qMod.g10MathQuestions, ...assessmentsMod.g10MathAssessmentQuestions],
          solutions: [...sMod.g10MathSolutions, ...assessmentsMod.g10MathAssessmentSolutions],
          mockExams: assessmentsMod.g10MathAssessmentExams,
          assessmentBlueprints: assessmentsMod.g10MathAssessmentBlueprints,
          learningOutcomes: learningPathMod.g10MathOutcomes,
          learningMisconceptions: learningPathMod.g10MathMisconceptions
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
          mockExams: assessmentsMod.g10EnglishAssessmentExams,
          assessmentBlueprints: assessmentsMod.g10EnglishAssessmentBlueprints
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
          assessmentBlueprints: assessmentsMod.g10ChemistryAssessmentBlueprints,
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
          assessmentBlueprints: assessmentsMod.g10BiologyAssessmentBlueprints,
          learningOutcomes: learningPathMod.g10BiologyOutcomes,
          learningMisconceptions: learningPathMod.g10BiologyMisconceptions
        };
      } else if (subject === 'physics') {
        const [topicsMod, qtMod, qMod, sMod, learningPathMod, assessmentsMod] = await Promise.all([
          import('./grade10/physics/topics'),
          import('./grade10/physics/questionTypes'),
          import('./grade10/physics/questions'),
          import('./grade10/physics/solutions'),
          import('./grade10/physics/learningPath'),
          import('./grade10/physics/assessments')
        ]);
        data = {
          topics: topicsMod.g10PhysicsTopics,
          questionTypes: qtMod.g10PhysicsQuestionTypes,
          questions: [...qMod.g10PhysicsQuestions, ...assessmentsMod.g10PhysicsAssessmentQuestions],
          solutions: [...sMod.g10PhysicsSolutions, ...assessmentsMod.g10PhysicsAssessmentSolutions],
          mockExams: assessmentsMod.g10PhysicsAssessmentExams,
          assessmentBlueprints: assessmentsMod.g10PhysicsAssessmentBlueprints,
          learningOutcomes: learningPathMod.g10PhysicsOutcomes,
          learningMisconceptions: learningPathMod.g10PhysicsMisconceptions
        };
      } else {
        data = { topics: [], questionTypes: [], questions: [], solutions: [], mockExams: [] };
      }
      break;

    case 'grade11':
      if (subject === 'chemistry') {
        const [topicsMod, qtMod, qMod, sMod, learningPathMod, assessmentsMod] = await Promise.all([
          import('./grade11/chemistry/topics'),
          import('./grade11/chemistry/questionTypes'),
          import('./grade11/chemistry/questions'),
          import('./grade11/chemistry/solutions'),
          import('./grade11/chemistry/learningPath'),
          import('./grade11/chemistry/assessments')
        ]);
        data = {
          topics: topicsMod.g11ChemistryTopics,
          questionTypes: qtMod.g11ChemistryQuestionTypes,
          questions: [...qMod.g11ChemistryQuestions, ...assessmentsMod.g11ChemistryAssessmentQuestions],
          solutions: [...sMod.g11ChemistrySolutions, ...assessmentsMod.g11ChemistryAssessmentSolutions],
          mockExams: assessmentsMod.g11ChemistryAssessmentExams,
          learningOutcomes: learningPathMod.g11ChemistryOutcomes,
          learningMisconceptions: learningPathMod.g11ChemistryMisconceptions
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
export const getTopics = (grade: 'grade9' | 'grade10' | 'grade11' | 'grade12', subject: SubjectCode): Topic[] => {
  const cacheKey = `${grade}-${subject}`;
  return dataCache[cacheKey]?.topics || [];
};

export const getQuestionTypes = (grade: 'grade9' | 'grade10' | 'grade11' | 'grade12', subject: SubjectCode): QuestionType[] => {
  const cacheKey = `${grade}-${subject}`;
  return dataCache[cacheKey]?.questionTypes || [];
};

export const getQuestions = (grade: 'grade9' | 'grade10' | 'grade11' | 'grade12', subject: SubjectCode): Question[] => {
  const cacheKey = `${grade}-${subject}`;
  return dataCache[cacheKey]?.questions || [];
};

export const getSolutions = (grade: 'grade9' | 'grade10' | 'grade11' | 'grade12', subject: SubjectCode): Solution[] => {
  const cacheKey = `${grade}-${subject}`;
  return dataCache[cacheKey]?.solutions || [];
};

export const getMockExams = (grade: 'grade9' | 'grade10' | 'grade11' | 'grade12', subject: SubjectCode): MockExam[] => {
  const cacheKey = `${grade}-${subject}`;
  return dataCache[cacheKey]?.mockExams || [];
};

export const getAssessmentBlueprints = (grade: 'grade9' | 'grade10' | 'grade11' | 'grade12', subject: SubjectCode): AssessmentBlueprint[] => {
  const cacheKey = `${grade}-${subject}`;
  return dataCache[cacheKey]?.assessmentBlueprints || [];
};

export const getLearningOutcomes = (grade: 'grade9' | 'grade10' | 'grade11' | 'grade12', subject: SubjectCode): any[] => {
  const cacheKey = `${grade}-${subject}`;
  return dataCache[cacheKey]?.learningOutcomes || [];
};

export const getLearningMisconceptions = (grade: 'grade9' | 'grade10' | 'grade11' | 'grade12', subject: SubjectCode): any[] => {
  const cacheKey = `${grade}-${subject}`;
  return dataCache[cacheKey]?.learningMisconceptions || [];
};
