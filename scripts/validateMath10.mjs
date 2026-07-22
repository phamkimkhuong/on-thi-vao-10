import fs from 'node:fs';
import path from 'node:path';
import ts from 'typescript';

const root = process.cwd();
const dataDirectory = path.join(root, 'src', 'data', 'grade10', 'math');
const modulesDirectory = path.join(dataDirectory, 'modules');

const readNodeValue = node => {
  if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) return node.text;
  if (ts.isNumericLiteral(node)) return Number(node.text);
  if (node.kind === ts.SyntaxKind.TrueKeyword) return true;
  if (node.kind === ts.SyntaxKind.FalseKeyword) return false;
  if (ts.isCallExpression(node)) {
    const callee = node.expression.getText();
    if (['mcq', 'short', 'tf'].includes(callee) && node.arguments[0]) return readNodeValue(node.arguments[0]);
    if (callee === 'ids' && node.arguments.length === 2) {
      const prefix = readNodeValue(node.arguments[0]);
      const count = readNodeValue(node.arguments[1]);
      return Array.from({ length: count }, (_, index) => `${prefix}${String(index + 1).padStart(2, '0')}`);
    }
  }
  if (ts.isArrayLiteralExpression(node)) return node.elements.filter(item => !ts.isSpreadElement(item)).map(readNodeValue);
  if (ts.isObjectLiteralExpression(node)) {
    const result = {};
    for (const property of node.properties) {
      if (!ts.isPropertyAssignment(property)) continue;
      const key = property.name.getText().replace(/["']/g, '');
      result[key] = readNodeValue(property.initializer);
    }
    return result;
  }
  return node.getText();
};

const readExportedArray = (filePath, exportName) => {
  const sourceFile = ts.createSourceFile(filePath, fs.readFileSync(filePath, 'utf8'), ts.ScriptTarget.Latest, true);
  let result;
  sourceFile.forEachChild(node => {
    if (!ts.isVariableStatement(node)) return;
    for (const declaration of node.declarationList.declarations) {
      if (declaration.name.getText() !== exportName || !declaration.initializer) continue;
      if (ts.isArrayLiteralExpression(declaration.initializer)) result = readNodeValue(declaration.initializer);
    }
  });
  if (!result) throw new Error(`Không đọc được ${exportName} trong ${filePath}.`);
  return result;
};

const readFirstMatchingArray = (filePath, pattern) => {
  const source = fs.readFileSync(filePath, 'utf8');
  const match = source.match(pattern);
  if (!match) throw new Error(`Không tìm thấy export phù hợp trong ${filePath}.`);
  return readExportedArray(filePath, match[1]);
};

const moduleDirs = fs.readdirSync(modulesDirectory)
  .filter(name => fs.statSync(path.join(modulesDirectory, name)).isDirectory())
  .sort();

const topics = [];
const questionTypes = [];
const questions = [];
const solutions = [];
const outcomes = [];
const misconceptions = [];
const blueprints = [];
const metadata = [];

for (const moduleName of moduleDirs) {
  const modulePath = path.join(modulesDirectory, moduleName);
  topics.push(...readFirstMatchingArray(path.join(modulePath, 'topics.ts'), /export const (g10MathModule\d+Topics)/));
  questionTypes.push(...readFirstMatchingArray(path.join(modulePath, 'questionTypes.ts'), /export const (g10MathModule\d+QuestionTypes)/));
  questions.push(...readFirstMatchingArray(path.join(modulePath, 'questions.ts'), /export const (g10MathModule\d+Questions)/));
  solutions.push(...readFirstMatchingArray(path.join(modulePath, 'solutions.ts'), /export const (g10MathModule\d+Solutions)/));
  outcomes.push(...readFirstMatchingArray(path.join(modulePath, 'learningPath.ts'), /export const (g10MathModule\d+Outcomes)/));
  misconceptions.push(...readFirstMatchingArray(path.join(modulePath, 'learningPath.ts'), /export const (g10MathModule\d+Misconceptions)/));
  blueprints.push(...readFirstMatchingArray(path.join(modulePath, 'practiceBlueprint.ts'), /export const (g10MathModule\d+PracticeBlueprints)/));
  metadata.push(...readFirstMatchingArray(path.join(modulePath, 'practiceMetadata.ts'), /export const (g10MathModule\d+PracticeMetadata)/));
}

const assessmentQuestions = readExportedArray(path.join(dataDirectory, 'assessments', 'questions.ts'), 'g10MathAssessmentQuestions');
const assessmentSolutions = readExportedArray(path.join(dataDirectory, 'assessments', 'solutions.ts'), 'g10MathAssessmentSolutions');
const exams = readExportedArray(path.join(dataDirectory, 'assessments', 'exams.ts'), 'g10MathAssessmentExams');
const semester2DataFile = path.join(dataDirectory, 'assessments', 'semester2', 'data.ts');
const semester2Seeds = ['mid2A', 'mid2B', 'final2A', 'final2B'].flatMap(name => readExportedArray(semester2DataFile, name));
assessmentQuestions.push(...semester2Seeds);
assessmentSolutions.push(...semester2Seeds.map(item => ({ questionId: item.id })));
exams.push(...readExportedArray(path.join(dataDirectory, 'assessments', 'semester2', 'exams.ts'), 'g10MathSemester2AssessmentExams'));

const errors = [];
const warnings = [];
const duplicateKeys = (items, keyOf) => {
  const counts = new Map();
  for (const item of items) counts.set(keyOf(item), (counts.get(keyOf(item)) ?? 0) + 1);
  return [...counts.entries()].filter(([, count]) => count > 1).map(([key]) => key);
};

for (const [label, items, keyOf] of [
  ['Topic', topics, item => item.id],
  ['Question type', questionTypes, item => item.id],
  ['Question', questions, item => item.id],
  ['Solution', solutions, item => item.questionId],
  ['Outcome', outcomes, item => item.id],
  ['Misconception', misconceptions, item => item.id],
  ['Practice blueprint', blueprints, item => item.questionTypeId],
  ['Practice metadata', metadata, item => item.questionId],
  ['Assessment question', assessmentQuestions, item => item.id],
  ['Assessment solution', assessmentSolutions, item => item.questionId],
  ['Exam', exams, item => item.id]
]) {
  for (const key of duplicateKeys(items, keyOf)) errors.push(`${label} bị trùng: ${key}.`);
}

const topicById = new Map(topics.map(item => [item.id, item]));
const typeById = new Map(questionTypes.map(item => [item.id, item]));
const questionById = new Map(questions.map(item => [item.id, item]));
const solutionByQuestionId = new Map(solutions.map(item => [item.questionId, item]));
const outcomeById = new Map(outcomes.map(item => [item.id, item]));
const misconceptionById = new Map(misconceptions.map(item => [item.id, item]));
const metadataByQuestionId = new Map(metadata.map(item => [item.questionId, item]));

for (const content of duplicateKeys(questions, item => String(item.content).toLocaleLowerCase('vi').replace(/\s+/g, ' ').trim())) {
  errors.push(`Nội dung câu hỏi luyện tập bị trùng: "${content.slice(0, 90)}".`);
}

if (moduleDirs.length !== 8) errors.push(`Cần đúng 8 module cốt lõi, hiện có ${moduleDirs.length}.`);
if (topics.length !== 8) errors.push(`Cần đúng 8 topic, hiện có ${topics.length}.`);

for (const type of questionTypes) {
  if (!topicById.has(type.topicId)) errors.push(`${type.id}: topicId không tồn tại.`);
  if (type.exampleQuestionId && !questionById.has(type.exampleQuestionId)) errors.push(`${type.id}: exampleQuestionId không tồn tại.`);
  if (!Array.isArray(type.recognitionSigns) || type.recognitionSigns.length < 2) errors.push(`${type.id}: cần ít nhất 2 dấu hiệu nhận biết.`);
  if (!Array.isArray(type.solvingSteps) || type.solvingSteps.length < 3) errors.push(`${type.id}: cần ít nhất 3 bước giải.`);
}

for (const question of questions) {
  if (!topicById.has(question.topicId)) errors.push(`${question.id}: topicId không tồn tại.`);
  if (!typeById.has(question.questionTypeId)) errors.push(`${question.id}: questionTypeId không tồn tại.`);
  if (!solutionByQuestionId.has(question.id)) errors.push(`${question.id}: thiếu lời giải.`);
  if (!metadataByQuestionId.has(question.id)) errors.push(`${question.id}: thiếu practice metadata.`);
  if (question.validatorType === 'choice') {
    if (!Array.isArray(question.options) || question.options.length !== 4) errors.push(`${question.id}: câu lựa chọn phải có đúng 4 phương án.`);
    if (!['A', 'B', 'C', 'D'].includes(question.correctAnswer)) errors.push(`${question.id}: đáp án lựa chọn phải là A, B, C hoặc D.`);
    if (new Set(question.options ?? []).size !== (question.options ?? []).length) errors.push(`${question.id}: phương án lựa chọn bị trùng.`);
  }
}

for (const solution of solutions) {
  if (!questionById.has(solution.questionId)) errors.push(`${solution.questionId}: lời giải không có câu hỏi.`);
  if (!solution.recognition?.trim()) errors.push(`${solution.questionId}: thiếu phần nhận dạng.`);
  if (!Array.isArray(solution.detailedSteps) || solution.detailedSteps.length === 0) errors.push(`${solution.questionId}: thiếu các bước giải.`);
  if (!Array.isArray(solution.commonMistakes) || solution.commonMistakes.length === 0) warnings.push(`${solution.questionId}: chưa nêu lỗi thường gặp.`);
  const question = questionById.get(solution.questionId);
  if (question?.id.startsWith('math10-m1-') || question?.id.startsWith('math10-m2-') || question?.id.startsWith('math10-m3-') || question?.id.startsWith('math10-m4-') || question?.id.startsWith('math10-m5-') || question?.id.startsWith('math10-m6-') || question?.id.startsWith('math10-m7-') || question?.id.startsWith('math10-m8-')) {
    if (question.validatorType === 'choice' && !String(solution.finalAnswer).startsWith(`${question.correctAnswer}.`)) {
      errors.push(`${solution.questionId}: lời giải không khớp khóa đáp án lựa chọn.`);
    }
    if (question.validatorType !== 'choice' && String(solution.finalAnswer) !== String(question.correctAnswer)) {
      errors.push(`${solution.questionId}: finalAnswer không khớp correctAnswer.`);
    }
  }
}

const subtypeById = new Map();
for (const blueprint of blueprints) {
  if (!typeById.has(blueprint.questionTypeId)) errors.push(`${blueprint.questionTypeId}: blueprint trỏ tới dạng không tồn tại.`);
  for (const subtype of blueprint.subTypes ?? []) {
    if (!subtype.id) errors.push(`${blueprint.questionTypeId}: dạng con thiếu id.`);
    if (subtypeById.has(subtype.id)) errors.push(`Dạng con bị trùng: ${subtype.id}.`);
    subtypeById.set(subtype.id, { ...subtype, questionTypeId: blueprint.questionTypeId });
  }
}

for (const item of metadata) {
  const question = questionById.get(item.questionId);
  const subtype = subtypeById.get(item.subTypeId);
  if (!question) errors.push(`${item.questionId}: metadata không có câu hỏi.`);
  if (!subtype) errors.push(`${item.questionId}: subTypeId ${item.subTypeId} không tồn tại.`);
  if (question && subtype && question.questionTypeId !== subtype.questionTypeId) errors.push(`${item.questionId}: dạng con không thuộc question type của câu.`);
  if (item.practiceRole === 'mastery_holdout' && !item.isMasteryHoldout) errors.push(`${item.questionId}: mastery_holdout phải có isMasteryHoldout=true.`);
}

let completedSubtypeCount = 0;
const requiredRoles = ['guided', 'near_transfer', 'representation_switch', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'];
for (const [subtypeId, subtype] of subtypeById) {
  const subtypeQuestions = metadata.filter(item => item.subTypeId === subtypeId);
  const counts = { easy: 0, medium: 0, hard: 0 };
  for (const item of subtypeQuestions) {
    const difficulty = questionById.get(item.questionId)?.difficulty;
    if (difficulty) counts[difficulty] += 1;
  }
  const holdouts = subtypeQuestions.filter(item => item.isMasteryHoldout).length;
  const target = subtype.targetQuestionCount ?? 12;
  if (subtypeQuestions.length < target) warnings.push(`${subtypeId}: ${subtypeQuestions.length}/${target} câu; phân tầng ${counts.easy} dễ – ${counts.medium} vừa – ${counts.hard} khó; holdout ${holdouts}/2.`);
  else {
    completedSubtypeCount += 1;
    if (counts.easy < 3 || counts.medium < 5 || counts.hard < 3) warnings.push(`${subtypeId}: đủ số lượng nhưng phân tầng chưa đạt tối thiểu 3 dễ – 5 vừa – 3 khó.`);
    if (holdouts < 2) warnings.push(`${subtypeId}: đủ số lượng nhưng mới có ${holdouts}/2 mastery holdout.`);
    const roles = new Set(subtypeQuestions.map(item => item.practiceRole));
    const missingRoles = requiredRoles.filter(role => !roles.has(role));
    if (missingRoles.length > 0) warnings.push(`${subtypeId}: thiếu vai trò luyện tập ${missingRoles.join(', ')}.`);
  }
}

for (const outcome of outcomes) {
  if (!topicById.has(outcome.topicId)) errors.push(`${outcome.id}: topicId không tồn tại.`);
  for (const typeId of outcome.questionTypeIds ?? []) if (!typeById.has(typeId)) errors.push(`${outcome.id}: questionTypeId ${typeId} không tồn tại.`);
  for (const prerequisiteId of outcome.prerequisiteOutcomeIds ?? []) if (!outcomeById.has(prerequisiteId)) errors.push(`${outcome.id}: prerequisite ${prerequisiteId} không tồn tại.`);
  for (const misconceptionId of outcome.misconceptionIds ?? []) if (!misconceptionById.has(misconceptionId)) errors.push(`${outcome.id}: misconception ${misconceptionId} không tồn tại.`);
  if ((outcome.questionTypeIds ?? []).length === 0) warnings.push(`${outcome.id}: chưa có dạng luyện tập ánh xạ.`);
}

for (const misconception of misconceptions) {
  if (!outcomeById.has(misconception.outcomeId)) errors.push(`${misconception.id}: outcomeId không tồn tại.`);
}

for (const topic of topics) {
  const topicTypeCount = questionTypes.filter(item => item.topicId === topic.id).length;
  const topicQuestionCount = questions.filter(item => item.topicId === topic.id).length;
  if (topicTypeCount === 0 || topicQuestionCount === 0) warnings.push(`${topic.id} (${topic.name}): ${topicTypeCount} dạng, ${topicQuestionCount} câu.`);
}

const assessmentQuestionById = new Map(assessmentQuestions.map(item => [item.id, item]));
const assessmentSolutionByQuestionId = new Map(assessmentSolutions.map(item => [item.questionId, item]));
const referencedAssessmentIds = new Set();
for (const exam of exams) {
  if (!Array.isArray(exam.questionIds) || exam.questionIds.length === 0) errors.push(`${exam.id}: đề chưa có câu hỏi.`);
  let calculatedPoints = 0;
  for (const questionId of exam.questionIds ?? []) {
    referencedAssessmentIds.add(questionId);
    const question = assessmentQuestionById.get(questionId);
    if (!question) errors.push(`${exam.id}: questionId ${questionId} không tồn tại.`);
    else {
      calculatedPoints += question.points ?? 1;
      if (Array.isArray(exam.scopeTopicIds) && !exam.scopeTopicIds.includes(question.topicId)) errors.push(`${exam.id}: ${questionId} nằm ngoài scopeTopicIds.`);
    }
  }
  if (typeof exam.totalPoints === 'number' && Math.abs(calculatedPoints - exam.totalPoints) > 1e-9) errors.push(`${exam.id}: tổng points câu hỏi là ${calculatedPoints}, khác totalPoints=${exam.totalPoints}.`);
}
for (const question of assessmentQuestions) {
  if (!assessmentSolutionByQuestionId.has(question.id)) errors.push(`${question.id}: câu kiểm tra thiếu lời giải.`);
  if (!referencedAssessmentIds.has(question.id)) warnings.push(`${question.id}: chưa được đề nào sử dụng.`);
  if (question.points === undefined) warnings.push(`${question.id}: chưa khai báo points, runtime sẽ dùng trọng số mặc định.`);
}
if (!exams.some(exam => /học kỳ II/.test(exam.title))) warnings.push('Assessment: chưa có đề giữa kỳ II và cuối kỳ II.');

console.log(`Toán 10: ${topics.length} chủ đề, ${outcomes.length} outcomes, ${questionTypes.length} dạng lớn, ${subtypeById.size} dạng nhỏ, ${questions.length} câu luyện tập, ${assessmentQuestions.length} câu kiểm tra.`);
console.log(`Coverage: ${completedSubtypeCount}/${subtypeById.size} micro-type đạt tối thiểu 12 câu.`);
if (warnings.length > 0) {
  console.log(`\nCẢNH BÁO (${warnings.length}):`);
  for (const warning of warnings) console.log(`- ${warning}`);
}
if (errors.length > 0) {
  console.error(`\nLỖI (${errors.length}):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}
console.log('\nHợp đồng dữ liệu Toán 10 hợp lệ; các cảnh báo là backlog coverage cần tiếp tục bổ sung.');
