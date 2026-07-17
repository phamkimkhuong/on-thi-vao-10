import fs from 'node:fs';
import path from 'node:path';
import ts from 'typescript';

const root = process.cwd();
const physicsRoot = path.join(root, 'src', 'data', 'grade10', 'physics');

const readNodeValue = node => {
  if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) return node.text;
  if (ts.isNumericLiteral(node)) return Number(node.text);
  if (node.kind === ts.SyntaxKind.TrueKeyword) return true;
  if (node.kind === ts.SyntaxKind.FalseKeyword) return false;
  if (ts.isArrayLiteralExpression(node)) return node.elements.map(readNodeValue);
  if (ts.isObjectLiteralExpression(node)) {
    const result = {};
    for (const property of node.properties) {
      if (!ts.isPropertyAssignment(property)) continue;
      const key = property.name.text ?? property.name.getText().replace(/["']/g, '');
      result[key] = readNodeValue(property.initializer);
    }
    return result;
  }
  return node.getText();
};

const readExport = (filePath, exportName) => {
  const source = ts.createSourceFile(filePath, fs.readFileSync(filePath, 'utf8'), ts.ScriptTarget.Latest, true);
  let result;
  source.forEachChild(node => {
    if (!ts.isVariableStatement(node)) return;
    for (const declaration of node.declarationList.declarations) {
      if (declaration.name.getText() === exportName && declaration.initializer) result = readNodeValue(declaration.initializer);
    }
  });
  if (result === undefined) throw new Error(`Không đọc được ${exportName} trong ${filePath}.`);
  return result;
};

const moduleSpecs = [
  {
    label: 'Module 0', directory: 'module0_intro', prefix: 'g10PhysicsModule0',
    expansionQuestionExport: 'g10PhysicsModule0ExpansionQuestions',
    expansionSolutionExport: 'g10PhysicsModule0ExpansionSolutions',
    minimumQuestions: 12, minimumDifficulty: { easy: 3, medium: 5, hard: 3 }
  },
  {
    label: 'Module 1', directory: 'module1_kinematics', prefix: 'g10PhysicsModule1',
    expansionQuestionExport: 'g10PhysicsModule1ExpansionQuestions',
    expansionSolutionExport: 'g10PhysicsModule1ExpansionSolutions',
    minimumQuestions: 12, minimumDifficulty: { easy: 3, medium: 5, hard: 3 }
  },
  {
    label: 'Module 2', directory: 'module2_dynamics', prefix: 'g10PhysicsModule2',
    expansionQuestionExport: 'g10PhysicsModule2ExpansionQuestions',
    expansionSolutionExport: 'g10PhysicsModule2ExpansionSolutions',
    minimumQuestions: 12, minimumDifficulty: { easy: 3, medium: 5, hard: 3 }
  },
  {
    label: 'Module 3', directory: 'module3_energy', prefix: 'g10PhysicsModule3',
    expansionQuestionExport: 'g10PhysicsModule3ExpansionQuestions',
    expansionSolutionExport: 'g10PhysicsModule3ExpansionSolutions',
    minimumQuestions: 12, minimumDifficulty: { easy: 3, medium: 5, hard: 4 }
  },
  {
    label: 'Module 4', directory: 'module4_momentum', prefix: 'g10PhysicsModule4',
    expansionQuestionExport: 'g10PhysicsModule4ExpansionQuestions',
    expansionSolutionExport: 'g10PhysicsModule4ExpansionSolutions',
    minimumQuestions: 12, minimumDifficulty: { easy: 3, medium: 5, hard: 4 }
  },
  {
    label: 'Module 5', directory: 'module5_circular_motion', prefix: 'g10PhysicsModule5',
    expansionQuestionExport: 'g10PhysicsModule5ExpansionQuestions',
    expansionSolutionExport: 'g10PhysicsModule5ExpansionSolutions',
    minimumQuestions: 12, minimumDifficulty: { easy: 3, medium: 5, hard: 4 }
  },
  {
    label: 'Module 6', directory: 'module6_solid_deformation', prefix: 'g10PhysicsModule6',
    expansionQuestionExport: 'g10PhysicsModule6ExpansionQuestions',
    expansionSolutionExport: 'g10PhysicsModule6ExpansionSolutions',
    minimumQuestions: 12, minimumDifficulty: { easy: 3, medium: 5, hard: 4 }
  }
];

const moduleData = moduleSpecs.map(spec => {
  const moduleRoot = path.join(physicsRoot, 'modules', spec.directory);
  return {
    label: spec.label,
    minimumQuestions: spec.minimumQuestions,
    minimumDifficulty: spec.minimumDifficulty,
    topics: readExport(path.join(moduleRoot, 'topics.ts'), `${spec.prefix}Topics`),
    types: readExport(path.join(moduleRoot, 'questionTypes.ts'), `${spec.prefix}QuestionTypes`),
    questions: [
      ...readExport(path.join(moduleRoot, 'questions.ts'), `${spec.prefix}Questions`),
      ...(spec.expansionQuestionExport
        ? readExport(path.join(moduleRoot, 'practiceExpansion', 'questions.ts'), spec.expansionQuestionExport)
        : [])
    ],
    solutions: [
      ...readExport(path.join(moduleRoot, 'solutions.ts'), `${spec.prefix}Solutions`),
      ...(spec.expansionSolutionExport
        ? readExport(path.join(moduleRoot, 'practiceExpansion', 'solutions.ts'), spec.expansionSolutionExport)
        : [])
    ],
    outcomes: readExport(path.join(moduleRoot, 'learningPath.ts'), `${spec.prefix}Outcomes`),
    misconceptions: readExport(path.join(moduleRoot, 'learningPath.ts'), `${spec.prefix}Misconceptions`)
  };
});

const assessmentQuestions = [
  ...readExport(path.join(physicsRoot, 'assessments', 'midterm1', 'questionsFormA.ts'), 'physicsMidterm1QuestionsFormA'),
  ...readExport(path.join(physicsRoot, 'assessments', 'midterm1', 'questionsFormB.ts'), 'physicsMidterm1QuestionsFormB'),
  ...readExport(path.join(physicsRoot, 'assessments', 'final1', 'questionsFormA.ts'), 'physicsFinal1QuestionsFormA'),
  ...readExport(path.join(physicsRoot, 'assessments', 'final1', 'questionsFormB.ts'), 'physicsFinal1QuestionsFormB')
];
const assessmentSolutions = [
  ...readExport(path.join(physicsRoot, 'assessments', 'midterm1', 'solutionsFormA.ts'), 'physicsMidterm1SolutionsFormA'),
  ...readExport(path.join(physicsRoot, 'assessments', 'midterm1', 'solutionsFormB.ts'), 'physicsMidterm1SolutionsFormB'),
  ...readExport(path.join(physicsRoot, 'assessments', 'final1', 'solutionsFormA.ts'), 'physicsFinal1SolutionsFormA'),
  ...readExport(path.join(physicsRoot, 'assessments', 'final1', 'solutionsFormB.ts'), 'physicsFinal1SolutionsFormB')
];
const topics = moduleData.flatMap(module => module.topics);
const types = moduleData.flatMap(module => module.types);
const questions = [...moduleData.flatMap(module => module.questions), ...assessmentQuestions];
const solutions = [...moduleData.flatMap(module => module.solutions), ...assessmentSolutions];
const outcomes = moduleData.flatMap(module => module.outcomes);
const misconceptions = moduleData.flatMap(module => module.misconceptions);
const curriculum = readExport(path.join(physicsRoot, 'curriculum', 'blueprint.ts'), 'g10PhysicsCurriculumModules');
const exams = [
  ...readExport(path.join(physicsRoot, 'assessments', 'index.ts'), 'g10PhysicsAssessmentExams').filter(item => typeof item === 'object'),
  ...readExport(path.join(physicsRoot, 'assessments', 'exams', 'midterm1.ts'), 'physicsMidterm1Exams'),
  ...readExport(path.join(physicsRoot, 'assessments', 'exams', 'final1.ts'), 'physicsFinal1Exams')
];
const assessmentBlueprints = [
  readExport(path.join(physicsRoot, 'assessments', 'blueprints', 'midterm1.ts'), 'physicsMidterm1Blueprint'),
  readExport(path.join(physicsRoot, 'assessments', 'blueprints', 'final1.ts'), 'physicsFinal1Blueprint'),
  readExport(path.join(physicsRoot, 'assessments', 'blueprints', 'midterm2.ts'), 'physicsMidterm2Blueprint'),
  readExport(path.join(physicsRoot, 'assessments', 'blueprints', 'final2.ts'), 'physicsFinal2Blueprint')
];

const errors = [];
const warnings = [];
const unique = (items, key, label) => {
  const seen = new Set();
  for (const item of items) {
    if (seen.has(item[key])) errors.push(`${label} trùng ${key}: ${item[key]}.`);
    seen.add(item[key]);
  }
};

unique(topics, 'id', 'Topic');
unique(types, 'id', 'Question type');
unique(questions, 'id', 'Question');
unique(solutions, 'questionId', 'Solution');
unique(outcomes, 'id', 'Outcome');
unique(misconceptions, 'id', 'Misconception');
unique(curriculum, 'id', 'Curriculum module');
unique(assessmentBlueprints, 'id', 'Assessment blueprint');

const topicById = new Map(topics.map(item => [item.id, item]));
const typeById = new Map(types.map(item => [item.id, item]));
const questionById = new Map(questions.map(item => [item.id, item]));
const solutionByQuestionId = new Map(solutions.map(item => [item.questionId, item]));
const outcomeById = new Map(outcomes.map(item => [item.id, item]));
const misconceptionById = new Map(misconceptions.map(item => [item.id, item]));
const assessmentBlueprintById = new Map(assessmentBlueprints.map(item => [item.id, item]));
const moduleRuleByTopicId = new Map(moduleData.flatMap(module =>
  module.topics.map(topic => [topic.id, module])
));

if (curriculum.length !== 7) errors.push(`Blueprint phải có 7 module cốt lõi, hiện có ${curriculum.length}.`);
const contentHours = curriculum.reduce((sum, module) => sum + module.officialHours, 0);
if (contentHours !== 62) errors.push(`Tổng tiết nội dung phải là 62, hiện là ${contentHours}.`);
const blueprintOutcomes = curriculum.flatMap(module => module.outcomes ?? []);
unique(blueprintOutcomes, 'id', 'Blueprint outcome');
if (blueprintOutcomes.length !== 58) errors.push(`Blueprint phải có 58 micro-outcome, hiện có ${blueprintOutcomes.length}.`);

for (const type of types) {
  if (!topicById.has(type.topicId)) errors.push(`${type.id}: topicId không tồn tại.`);
  const example = questionById.get(type.exampleQuestionId);
  if (!example) errors.push(`${type.id}: exampleQuestionId không tồn tại (${type.exampleQuestionId}).`);
  else if (example.questionTypeId !== type.id) errors.push(`${type.id}: câu mẫu thuộc ${example.questionTypeId}.`);
  if ((type.recognitionSigns ?? []).length < 2) errors.push(`${type.id}: cần ít nhất 2 dấu hiệu nhận biết.`);
  if ((type.solvingSteps ?? []).length < 3) errors.push(`${type.id}: cần ít nhất 3 bước giải.`);
  const typeQuestions = questions.filter(question => question.questionTypeId === type.id);
  const moduleRule = moduleRuleByTopicId.get(type.topicId);
  const minimumQuestions = moduleRule?.minimumQuestions ?? 12;
  const minimumDifficulty = moduleRule?.minimumDifficulty ?? { easy: 3, medium: 5, hard: 3 };
  if (typeQuestions.length < minimumQuestions) errors.push(`${type.id}: cần ít nhất ${minimumQuestions} câu, hiện có ${typeQuestions.length}.`);
  const distribution = {
    easy: typeQuestions.filter(question => question.difficulty === 'easy').length,
    medium: typeQuestions.filter(question => question.difficulty === 'medium').length,
    hard: typeQuestions.filter(question => question.difficulty === 'hard').length
  };
  if (distribution.easy < minimumDifficulty.easy || distribution.medium < minimumDifficulty.medium || distribution.hard < minimumDifficulty.hard) {
    errors.push(`${type.id}: phân tầng ${distribution.easy} dễ – ${distribution.medium} trung bình – ${distribution.hard} khó, chưa đạt ${minimumDifficulty.easy}–${minimumDifficulty.medium}–${minimumDifficulty.hard}.`);
  }
}

for (const question of questions) {
  const type = typeById.get(question.questionTypeId);
  if (question.subjectId !== 'physics') errors.push(`${question.id}: subjectId phải là physics.`);
  if (!topicById.has(question.topicId)) errors.push(`${question.id}: topicId không tồn tại.`);
  if (!type) errors.push(`${question.id}: questionTypeId không tồn tại.`);
  if (type && type.topicId !== question.topicId) errors.push(`${question.id}: topic lệch question type.`);
  if (!solutionByQuestionId.has(question.id)) errors.push(`${question.id}: thiếu lời giải.`);
  if (!(question.outcomeIds ?? []).length) errors.push(`${question.id}: thiếu outcomeIds.`);
  for (const outcomeId of question.outcomeIds ?? []) if (!outcomeById.has(outcomeId)) errors.push(`${question.id}: outcome không tồn tại (${outcomeId}).`);
  if (!String(question.competency).startsWith('physical_')) errors.push(`${question.id}: sai competency (${question.competency}).`);
  if (question.responseType === 'single_choice') {
    if (question.options?.length !== 4) errors.push(`${question.id}: MCQ phải có 4 phương án.`);
    const labels = (question.options ?? []).map(option => String(option).match(/^([A-D])\./)?.[1]);
    if (labels.some(label => !label) || new Set(labels).size !== 4) errors.push(`${question.id}: nhãn phương án phải là A–D.`);
    if (!labels.includes(question.correctAnswer)) errors.push(`${question.id}: correctAnswer không khớp options.`);
  }
  if (question.responseType === 'true_false_cluster') {
    const fields = question.answerSchema?.fields ?? [];
    if (fields.length !== 4) errors.push(`${question.id}: cụm Đúng/Sai phải có đúng 4 ý.`);
    if (question.answerSchema?.scoringMode !== 'per_field') errors.push(`${question.id}: cụm Đúng/Sai phải chấm độc lập từng ý.`);
    if (Object.keys(question.correctFinalAnswer ?? {}).length !== 4) errors.push(`${question.id}: thiếu đáp án cấu trúc cho 4 ý Đúng/Sai.`);
  }
  if (question.responseType === 'constructed_response') {
    if (question.validatorType !== 'manual' || question.answerSchema?.autoCheckMode !== 'manual') errors.push(`${question.id}: câu tự luận phải cấu hình chấm thủ công.`);
  }
}

for (const solution of solutions) {
  const question = questionById.get(solution.questionId);
  if (!question) errors.push(`${solution.id}: thiếu câu hỏi tương ứng.`);
  if (question && solution.finalAnswer !== question.correctAnswer) errors.push(`${solution.id}: đáp án lệch câu hỏi.`);
  if (String(solution.recognition).trim().length < 30) errors.push(`${solution.id}: nhận diện dạng bài quá ngắn.`);
  if ((solution.detailedSteps ?? []).length < 2) errors.push(`${solution.id}: cần ít nhất 2 bước giải.`);
  if (question?.responseType === 'constructed_response') {
    const rubricTotal = (solution.rubric ?? []).reduce((sum, criterion) => sum + criterion.points, 0);
    if (rubricTotal !== question.points) errors.push(`${solution.id}: tổng rubric là ${rubricTotal}, không khớp ${question.points} điểm.`);
  }
}

for (const outcome of outcomes) {
  if (!topicById.has(outcome.topicId)) errors.push(`${outcome.id}: topicId không tồn tại.`);
  for (const typeId of outcome.questionTypeIds ?? []) if (!typeById.has(typeId)) errors.push(`${outcome.id}: questionType không tồn tại (${typeId}).`);
  for (const prerequisiteId of outcome.prerequisiteOutcomeIds ?? []) if (!outcomeById.has(prerequisiteId)) errors.push(`${outcome.id}: prerequisite không tồn tại (${prerequisiteId}).`);
  for (const misconceptionId of outcome.misconceptionIds ?? []) {
    const misconception = misconceptionById.get(misconceptionId);
    if (!misconception) errors.push(`${outcome.id}: misconception không tồn tại (${misconceptionId}).`);
    else if (misconception.outcomeId !== outcome.id) errors.push(`${misconceptionId}: trỏ sai outcome.`);
  }
}

for (const exam of exams) {
  if (exam.subjectId !== 'physics') errors.push(`${exam.id}: subjectId phải là physics.`);
  if (exam.blueprintId && !assessmentBlueprintById.has(exam.blueprintId)) errors.push(`${exam.id}: blueprintId không tồn tại (${exam.blueprintId}).`);
  for (const questionId of exam.questionIds ?? []) if (!questionById.has(questionId)) errors.push(`${exam.id}: questionId không tồn tại (${questionId}).`);

  const blueprint = exam.blueprintId ? assessmentBlueprintById.get(exam.blueprintId) : undefined;
  if (!blueprint) continue;
  const examQuestions = (exam.questionIds ?? []).map(questionId => questionById.get(questionId)).filter(Boolean);
  const examPointTotal = examQuestions.reduce((sum, question) => sum + (question.points ?? 1), 0);
  if (examPointTotal !== blueprint.totalPoints) errors.push(`${exam.id}: tổng điểm câu hỏi là ${examPointTotal}, không khớp blueprint ${blueprint.totalPoints}.`);
  for (const question of examQuestions) {
    if (!blueprint.scopeTopicIds.includes(question.topicId)) errors.push(`${exam.id}/${question.id}: topic nằm ngoài phạm vi blueprint.`);
    for (const outcomeId of question.outcomeIds ?? []) if (!blueprint.outcomeIds.includes(outcomeId)) errors.push(`${exam.id}/${question.id}: outcome nằm ngoài phạm vi blueprint (${outcomeId}).`);
  }
  for (const section of blueprint.sections ?? []) {
    const sectionQuestions = examQuestions.filter(question => section.responseType === 'multiple_choice'
      ? question.responseType === 'single_choice'
      : question.responseType === section.responseType);
    const actualCount = sectionQuestions.length;
    const actualPoints = sectionQuestions.reduce((sum, question) => sum + (question.points ?? 1), 0);
    if (actualCount !== section.itemCount) errors.push(`${exam.id}/${section.id}: cần ${section.itemCount} câu, hiện có ${actualCount}.`);
    if (actualPoints !== section.points) errors.push(`${exam.id}/${section.id}: cần ${section.points} điểm, hiện có ${actualPoints}.`);
  }
}

const isApproximatelyOne = value => Math.abs(value - 1) < 0.000001;
for (const blueprint of assessmentBlueprints) {
  if (blueprint.subjectId !== 'physics') errors.push(`${blueprint.id}: subjectId phải là physics.`);
  if (blueprint.duration !== 45) errors.push(`${blueprint.id}: đề định kỳ mặc định phải có thời lượng 45 phút.`);
  if (blueprint.totalPoints !== 10) errors.push(`${blueprint.id}: tổng điểm phải bằng 10.`);
  for (const topicId of blueprint.scopeTopicIds ?? []) if (!topicById.has(topicId)) errors.push(`${blueprint.id}: topic không tồn tại (${topicId}).`);
  for (const outcomeId of blueprint.outcomeIds ?? []) if (!outcomeById.has(outcomeId)) errors.push(`${blueprint.id}: outcome không tồn tại (${outcomeId}).`);

  const topicWeightTotal = Object.values(blueprint.topicWeights ?? {}).reduce((sum, value) => sum + value, 0);
  if (!isApproximatelyOne(topicWeightTotal)) errors.push(`${blueprint.id}: tổng topicWeights phải bằng 1, hiện là ${topicWeightTotal}.`);

  const competencyEntries = Object.entries(blueprint.competencyWeights ?? {});
  const competencyWeightTotal = competencyEntries.reduce((sum, [, value]) => sum + value, 0);
  if (!isApproximatelyOne(competencyWeightTotal)) errors.push(`${blueprint.id}: tổng competencyWeights phải bằng 1, hiện là ${competencyWeightTotal}.`);
  for (const [competency] of competencyEntries) if (!competency.startsWith('physical_')) errors.push(`${blueprint.id}: competency không thuộc Vật lí (${competency}).`);

  const difficultyWeightTotal = Object.values(blueprint.difficultyWeights ?? {}).reduce((sum, value) => sum + value, 0);
  if (!isApproximatelyOne(difficultyWeightTotal)) errors.push(`${blueprint.id}: tổng difficultyWeights phải bằng 1, hiện là ${difficultyWeightTotal}.`);

  const sectionPointTotal = (blueprint.sections ?? []).reduce((sum, section) => sum + section.points, 0);
  if (sectionPointTotal !== blueprint.totalPoints) errors.push(`${blueprint.id}: tổng điểm các phần là ${sectionPointTotal}, không khớp ${blueprint.totalPoints}.`);
  for (const section of blueprint.sections ?? []) {
    if (section.itemCount <= 0) errors.push(`${blueprint.id}/${section.id}: itemCount phải lớn hơn 0.`);
    if (section.points <= 0) errors.push(`${blueprint.id}/${section.id}: points phải lớn hơn 0.`);
  }
}

console.log(`Vật lí 10: ${curriculum.length} module blueprint, ${assessmentBlueprints.length} ma trận đề, ${blueprintOutcomes.length} outcome toàn khóa.`);
console.log(`Đánh giá Vật lí 10: ${exams.length} đề, ${assessmentQuestions.length} câu riêng, ${assessmentSolutions.length} lời giải.`);
for (const module of moduleData) {
  console.log(`${module.label}: ${module.types.length} micro-type, ${module.questions.length} câu, ${module.solutions.length} lời giải.`);
}
for (const warning of warnings) console.warn(`WARN: ${warning}`);
if (errors.length) {
  for (const error of errors) console.error(`ERROR: ${error}`);
  process.exit(1);
}
console.log('Dữ liệu nền tảng Vật lí 10 hợp lệ.');
