import fs from 'node:fs';
import path from 'node:path';
import ts from 'typescript';

const root = process.cwd();
const modulesDirectory = path.join(root, 'src', 'data', 'grade11', 'chemistry', 'modules');
const curriculumDirectory = path.join(root, 'src', 'data', 'grade11', 'chemistry', 'curriculum');

const readNodeValue = (node, constants = new Map()) => {
  if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) return node.text;
  if (ts.isNumericLiteral(node)) return Number(node.text);
  if (node.kind === ts.SyntaxKind.TrueKeyword) return true;
  if (node.kind === ts.SyntaxKind.FalseKeyword) return false;
  if (ts.isIdentifier(node) && constants.has(node.text)) return readNodeValue(constants.get(node.text), constants);
  if (ts.isArrayLiteralExpression(node)) {
    return node.elements
      .filter(item => !ts.isSpreadElement(item))
      .map(item => readNodeValue(item, constants));
  }
  if (ts.isObjectLiteralExpression(node)) {
    const result = {};
    for (const property of node.properties) {
      if (ts.isPropertyAssignment(property)) {
        const key = property.name.getText().replace(/["']/g, '');
        result[key] = readNodeValue(property.initializer, constants);
      } else if (ts.isShorthandPropertyAssignment(property)) {
        result[property.name.text] = readNodeValue(property.name, constants);
      }
    }
    return result;
  }
  return node.getText();
};

const readExportedArray = (filePath, exportName) => {
  const sourceFile = ts.createSourceFile(filePath, fs.readFileSync(filePath, 'utf8'), ts.ScriptTarget.Latest, true);
  const constants = new Map();
  let result;
  sourceFile.forEachChild(node => {
    if (!ts.isVariableStatement(node)) return;
    for (const declaration of node.declarationList.declarations) {
      if (ts.isIdentifier(declaration.name) && declaration.initializer) {
        constants.set(declaration.name.text, declaration.initializer);
      }
    }
  });
  sourceFile.forEachChild(node => {
    if (!ts.isVariableStatement(node)) return;
    for (const declaration of node.declarationList.declarations) {
      if (declaration.name.getText() !== exportName || !declaration.initializer) continue;
      if (ts.isArrayLiteralExpression(declaration.initializer)) {
        result = readNodeValue(declaration.initializer, constants);
      }
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
  .filter(name =>
    fs.statSync(path.join(modulesDirectory, name)).isDirectory()
    && fs.existsSync(path.join(modulesDirectory, name, 'index.ts'))
  )
  .sort();

const topics = [];
const questionTypes = [];
const questions = [];
const solutions = [];
const outcomes = [];
const misconceptions = [];

for (const moduleName of moduleDirs) {
  const modulePath = path.join(modulesDirectory, moduleName);
  topics.push(...readFirstMatchingArray(path.join(modulePath, 'topics.ts'), /export const (g11Chemistry\w+Topics)/));
  questionTypes.push(...readFirstMatchingArray(path.join(modulePath, 'questionTypes.ts'), /export const (g11Chemistry\w+QuestionTypes)/));
  questions.push(...readFirstMatchingArray(path.join(modulePath, 'questions.ts'), /export const (g11Chemistry\w+Questions)/));
  solutions.push(...readFirstMatchingArray(path.join(modulePath, 'solutions.ts'), /export const (g11Chemistry\w+Solutions)/));
  outcomes.push(...readFirstMatchingArray(path.join(modulePath, 'learningPath.ts'), /export const (g11Chemistry\w+Outcomes)/));
  misconceptions.push(...readFirstMatchingArray(path.join(modulePath, 'learningPath.ts'), /export const (g11Chemistry\w+Misconceptions)/));
}

const textbookLessons = readExportedArray(
  path.join(curriculumDirectory, 'textbookMap.ts'),
  'g11ChemistryTextbookLessons'
);
const officialRequirements = readExportedArray(
  path.join(curriculumDirectory, 'officialRequirements.ts'),
  'g11ChemistryOfficialRequirements'
);
const outcomeManifest = readExportedArray(
  path.join(curriculumDirectory, 'outcomeManifest.ts'),
  'g11ChemistryOutcomeManifest'
);

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
  ['Textbook lesson', textbookLessons, item => item.id],
  ['Official requirement', officialRequirements, item => item.id],
  ['Outcome manifest', outcomeManifest, item => item.outcomeId]
]) {
  for (const key of duplicateKeys(items, keyOf)) errors.push(`${label} bị trùng: ${key}.`);
}

const topicById = new Map(topics.map(item => [item.id, item]));
const typeById = new Map(questionTypes.map(item => [item.id, item]));
const questionById = new Map(questions.map(item => [item.id, item]));
const solutionByQuestionId = new Map(solutions.map(item => [item.questionId, item]));
const outcomeById = new Map(outcomes.map(item => [item.id, item]));
const misconceptionById = new Map(misconceptions.map(item => [item.id, item]));
const textbookLessonById = new Map(textbookLessons.map(item => [item.id, item]));
const officialRequirementById = new Map(officialRequirements.map(item => [item.id, item]));
const outcomeManifestById = new Map(outcomeManifest.map(item => [item.outcomeId, item]));

if (textbookLessons.length !== 25) {
  errors.push(`Mục lục Kết nối tri thức phải có 25 bài, hiện có ${textbookLessons.length}.`);
}
const reviewLessons = textbookLessons.filter(item => item.kind === 'review');
if (reviewLessons.length !== 6) {
  errors.push(`Mục lục phải có 6 bài ôn tập chương, hiện có ${reviewLessons.length}.`);
}
const textbookChapters = new Set(textbookLessons.map(item => item.chapterId));
if (textbookChapters.size !== 6) {
  errors.push(`Mục lục phải có 6 chương, hiện có ${textbookChapters.size}.`);
}
for (const [index, lesson] of [...textbookLessons].sort((a, b) => a.orderIndex - b.orderIndex).entries()) {
  if (lesson.orderIndex !== index + 1) errors.push(`${lesson.id}: orderIndex không liên tục.`);
  if (lesson.lessonNumber !== lesson.orderIndex) errors.push(`${lesson.id}: lessonNumber phải khớp orderIndex.`);
}

for (const requirement of officialRequirements) {
  if (!Array.isArray(requirement.sourceLocators) || requirement.sourceLocators.length === 0) {
    errors.push(`${requirement.id}: thiếu vị trí đối chiếu trong nguồn chung.`);
  }
  for (const lessonId of requirement.textbookLessonIds ?? []) {
    if (!textbookLessonById.has(lessonId)) errors.push(`${requirement.id}: bài SGK ${lessonId} không tồn tại.`);
    if (textbookLessonById.get(lessonId)?.kind === 'review') {
      errors.push(`${requirement.id}: không được gắn yêu cầu mới vào bài ôn tập ${lessonId}.`);
    }
  }
  for (const outcomeId of requirement.implementedOutcomeIds ?? []) {
    if (!outcomeById.has(outcomeId)) errors.push(`${requirement.id}: outcome đã triển khai ${outcomeId} không tồn tại.`);
  }
  if (requirement.coverageStatus === 'covered' && requirement.implementedOutcomeIds?.length === 0) {
    errors.push(`${requirement.id}: đánh dấu covered nhưng chưa có outcome.`);
  }
  if (requirement.coverageStatus === 'not_started' && requirement.implementedOutcomeIds?.length > 0) {
    errors.push(`${requirement.id}: đánh dấu not_started nhưng đã có outcome.`);
  }
}

for (const outcome of outcomes) {
  const manifest = outcomeManifestById.get(outcome.id);
  if (!manifest) {
    errors.push(`${outcome.id}: thiếu curriculum outcome manifest.`);
    continue;
  }
  if (manifest.scope !== outcome.scope) errors.push(`${outcome.id}: scope trong manifest không khớp learning path.`);
}

for (const manifest of outcomeManifest) {
  if (!outcomeById.has(manifest.outcomeId)) errors.push(`${manifest.outcomeId}: manifest không có outcome runtime tương ứng.`);
  for (const requirementId of manifest.officialRequirementIds ?? []) {
    const requirement = officialRequirementById.get(requirementId);
    if (!requirement) {
      errors.push(`${manifest.outcomeId}: official requirement ${requirementId} không tồn tại.`);
    } else if (!(requirement.implementedOutcomeIds ?? []).includes(manifest.outcomeId)) {
      errors.push(`${manifest.outcomeId}: mapping hai chiều với ${requirementId} chưa đồng bộ.`);
    }
  }
  for (const lessonId of manifest.textbookLessonIds ?? []) {
    const lesson = textbookLessonById.get(lessonId);
    if (!lesson) {
      errors.push(`${manifest.outcomeId}: bài SGK ${lessonId} không tồn tại.`);
    } else if (lesson.kind === 'review') {
      errors.push(`${manifest.outcomeId}: bài ôn tập ${lessonId} không được sở hữu outcome mới.`);
    }
  }
  if (manifest.scope !== 'bridge' && manifest.textbookLessonIds?.length === 0) {
    errors.push(`${manifest.outcomeId}: outcome cốt lõi phải được ánh xạ tới bài SGK.`);
  }
}

for (const type of questionTypes) {
  if (!topicById.has(type.topicId)) errors.push(`${type.id}: topicId không tồn tại.`);
  if (!Array.isArray(type.recognitionSigns) || type.recognitionSigns.length === 0) errors.push(`${type.id}: thiếu dấu hiệu nhận biết.`);
  if (!Array.isArray(type.solvingSteps) || type.solvingSteps.length < 3) errors.push(`${type.id}: cần ít nhất 3 bước giải.`);
  if (type.exampleQuestionId && !questionById.has(type.exampleQuestionId)) errors.push(`${type.id}: exampleQuestionId không tồn tại.`);
  const subtypeIds = (type.subTypes ?? []).map(item => item.id);
  if (new Set(subtypeIds).size !== subtypeIds.length) errors.push(`${type.id}: subtype bị trùng.`);

  if (type.practiceCoverage) {
    const typeQuestions = questions.filter(item => item.questionTypeId === type.id);
    if (typeQuestions.length !== type.practiceCoverage.targetQuestionCount) {
      errors.push(`${type.id}: có ${typeQuestions.length}/${type.practiceCoverage.targetQuestionCount} câu theo blueprint.`);
    }
    for (const subtype of type.subTypes ?? []) {
      const count = typeQuestions.filter(item => item.subTypeId === subtype.id).length;
      if (count < type.practiceCoverage.minimumQuestionsPerSubType) {
        errors.push(`${type.id}/${subtype.id}: mới có ${count} câu.`);
      }
    }
    for (const role of type.practiceCoverage.requiredPracticeRoles) {
      if (!typeQuestions.some(item => item.practiceRole === role)) errors.push(`${type.id}: thiếu vai trò ${role}.`);
    }
    for (const representation of type.practiceCoverage.requiredRepresentations) {
      if (!typeQuestions.some(item => item.representationType === representation)) errors.push(`${type.id}: thiếu biểu diễn ${representation}.`);
    }
    const holdouts = typeQuestions.filter(item => item.isMasteryHoldout).length;
    if (holdouts < type.practiceCoverage.masteryHoldoutCount) errors.push(`${type.id}: chỉ có ${holdouts} mastery holdout.`);
    const difficulty = Object.fromEntries(['easy', 'medium', 'hard'].map(level => [level, typeQuestions.filter(item => item.difficulty === level).length]));
    if (difficulty.easy < 3 || difficulty.medium < 4 || difficulty.hard < 3) {
      errors.push(`${type.id}: phân bố độ khó chưa đạt tối thiểu 3 dễ, 4 vừa, 3 khó.`);
    }
  }
}

for (const question of questions) {
  if (!topicById.has(question.topicId)) errors.push(`${question.id}: topicId không tồn tại.`);
  if (!typeById.has(question.questionTypeId)) errors.push(`${question.id}: questionTypeId không tồn tại.`);
  if (!solutionByQuestionId.has(question.id)) errors.push(`${question.id}: thiếu lời giải.`);
  for (const outcomeId of question.outcomeIds ?? []) {
    if (!outcomeById.has(outcomeId)) errors.push(`${question.id}: outcome ${outcomeId} không tồn tại.`);
    if (!outcomeManifestById.has(outcomeId)) errors.push(`${question.id}: outcome ${outcomeId} chưa có curriculum manifest.`);
  }
  if (!Array.isArray(question.outcomeIds) || question.outcomeIds.length === 0) errors.push(`${question.id}: thiếu outcomeIds.`);
  if (question.misconceptionId && !misconceptionById.has(question.misconceptionId)) errors.push(`${question.id}: misconception không tồn tại.`);
  if (question.validatorType === 'choice') {
    if (!Array.isArray(question.options) || question.options.length !== 4) errors.push(`${question.id}: phải có đúng 4 phương án.`);
    if (!['A', 'B', 'C', 'D'].includes(question.correctAnswer)) errors.push(`${question.id}: đáp án phải là A/B/C/D.`);
    if (new Set(question.options ?? []).size !== (question.options ?? []).length) errors.push(`${question.id}: phương án bị trùng.`);
  }
}

for (const solution of solutions) {
  const question = questionById.get(solution.questionId);
  if (!question) errors.push(`${solution.questionId}: lời giải không có câu hỏi.`);
  if (!solution.recognition?.trim()) errors.push(`${solution.questionId}: thiếu phần nhận dạng dạng bài.`);
  if (!Array.isArray(solution.detailedSteps) || solution.detailedSteps.length < 2) errors.push(`${solution.questionId}: cần ít nhất 2 bước giải.`);
  if (question && solution.finalAnswer !== question.correctAnswer) errors.push(`${solution.questionId}: finalAnswer không khớp correctAnswer.`);
}

for (const outcome of outcomes) {
  if (!topicById.has(outcome.topicId)) errors.push(`${outcome.id}: topicId không tồn tại.`);
  for (const typeId of outcome.questionTypeIds ?? []) if (!typeById.has(typeId)) errors.push(`${outcome.id}: question type ${typeId} không tồn tại.`);
  for (const prerequisiteId of outcome.prerequisiteOutcomeIds ?? []) if (!outcomeById.has(prerequisiteId)) errors.push(`${outcome.id}: prerequisite ${prerequisiteId} không tồn tại.`);
  for (const misconceptionId of outcome.misconceptionIds ?? []) if (!misconceptionById.has(misconceptionId)) errors.push(`${outcome.id}: misconception ${misconceptionId} không tồn tại.`);
}

const coreQuestions = questions.filter(item => item.topicId === 'chem11-t1');
const answerDistribution = Object.fromEntries(['A', 'B', 'C', 'D'].map(key => [key, coreQuestions.filter(item => item.correctAnswer === key).length]));
const maxAnswers = Math.max(...Object.values(answerDistribution));
if (maxAnswers > Math.ceil(coreQuestions.length * 0.4)) warnings.push(`Khóa đáp án lệch: ${JSON.stringify(answerDistribution)}.`);

console.log(`Hóa học 11 giai đoạn 1: ${topics.length} topic, ${outcomes.length} outcomes, ${questionTypes.length} dạng, ${questions.length} câu, ${solutions.length} lời giải.`);
console.log(`Curriculum registry: ${textbookChapters.size} chương, ${textbookLessons.length} bài, ${officialRequirements.length} yêu cầu đã chuẩn hóa, ${outcomeManifest.length} outcome manifest.`);
console.log(`Module 1: ${coreQuestions.length} câu; phân bố đáp án ${JSON.stringify(answerDistribution)}.`);

if (warnings.length) {
  console.log('CẢNH BÁO');
  for (const warning of warnings) console.log(`- ${warning}`);
}
if (errors.length) {
  console.error('LỖI');
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log('✓ Dữ liệu Hóa học 11 giai đoạn 1 hợp lệ.');
