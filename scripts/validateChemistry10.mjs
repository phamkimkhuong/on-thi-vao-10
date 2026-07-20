import fs from 'node:fs';
import path from 'node:path';
import ts from 'typescript';

const root = process.cwd();
const chemistryRoot = path.join(root, 'src', 'data', 'grade10', 'chemistry');

const moduleSpecs = [
  ['Module 0', 'module0_intro', 'm0'],
  ['Module 1', 'module1_atoms', 'm1'],
  ['Module 2', 'module2_periodic', 'm2'],
  ['Module 3', 'module3_bond', 'm3'],
  ['Module 4', 'module4_redox', 'm4'],
  ['Module 5', 'module5_energy', 'm5'],
  ['Module 6', 'module6_rate', 'm6'],
  ['Module 7', 'module7_halogen', 'm7'],
  ['Module 8', 'module8_synthesis', 'm8']
].map(([label, directory, prefix]) => ({ label, directory, prefix }));

const unwrap = node => {
  if (ts.isAsExpression(node) || ts.isSatisfiesExpression(node) || ts.isParenthesizedExpression(node)) {
    return unwrap(node.expression);
  }
  return node;
};

const readNodeValue = input => {
  const node = unwrap(input);
  if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) return node.text;
  if (ts.isNumericLiteral(node)) return Number(node.text);
  if (node.kind === ts.SyntaxKind.TrueKeyword) return true;
  if (node.kind === ts.SyntaxKind.FalseKeyword) return false;
  if (node.kind === ts.SyntaxKind.NullKeyword) return null;
  if (ts.isPrefixUnaryExpression(node) && ts.isNumericLiteral(node.operand)) {
    return node.operator === ts.SyntaxKind.MinusToken ? -Number(node.operand.text) : Number(node.operand.text);
  }
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
  if (ts.isCallExpression(node)) {
    return { __call: node.expression.getText(), args: node.arguments.map(readNodeValue) };
  }
  return node.getText();
};

const readExport = (filePath, exportName) => {
  const source = ts.createSourceFile(filePath, fs.readFileSync(filePath, 'utf8'), ts.ScriptTarget.Latest, true);
  let result;
  source.forEachChild(node => {
    if (!ts.isVariableStatement(node)) return;
    for (const declaration of node.declarationList.declarations) {
      if (declaration.name.getText() === exportName && declaration.initializer) {
        result = readNodeValue(declaration.initializer);
      }
    }
  });
  if (result === undefined) throw new Error(`Không đọc được ${exportName} trong ${filePath}.`);
  return result;
};

const normalizeQuestion = item => {
  if (!item?.__call) return item;
  if (item.__call === 'choice' || item.__call === 'q') {
    const [id, questionTypeId, subTypeId, content, options, correctAnswer, difficulty, practiceRole, representationType] = item.args;
    return { id, questionTypeId, subTypeId, content, options: typeof options === 'string' ? options.split('|') : options, correctAnswer, acceptedAnswers: [correctAnswer, String(correctAnswer).toLowerCase()], difficulty, practiceRole, representationType, responseType: 'single_choice' };
  }
  if (item.__call === 'shortAnswer' || item.__call === 's') {
    const [id, questionTypeId, subTypeId, content, correctAnswer, acceptedAnswers, difficulty, practiceRole, representationType] = item.args;
    return { id, questionTypeId, subTypeId, content, correctAnswer, acceptedAnswers, difficulty, practiceRole, representationType, responseType: 'short_answer' };
  }
  return item;
};

const normalizeMetadata = item => {
  if (!item?.__call || item.__call !== 'm') return item;
  const [questionId, subTypeId, practiceRole, representationType, isMasteryHoldout] = item.args;
  return { questionId, subTypeId, practiceRole, representationType, ...(isMasteryHoldout ? { isMasteryHoldout: true } : {}) };
};

const normalizeSolution = item => {
  if (!item?.__call) return { ...item, __fromHelper: false };
  const [questionId, finalAnswer, ...details] = item.args;
  return { questionId, finalAnswer, __fromHelper: true, __helper: item.__call, __details: details };
};

const readModule = spec => {
  const moduleRoot = path.join(chemistryRoot, 'modules', spec.directory);
  return {
    ...spec,
    types: readExport(path.join(moduleRoot, 'questionTypes.ts'), `${spec.prefix}QuestionTypes`),
    questions: [
      ...readExport(path.join(moduleRoot, 'questions.ts'), `${spec.prefix}Questions`),
      ...readExport(path.join(moduleRoot, 'practiceExpansion', 'questions.ts'), `${spec.prefix}ExpansionQuestions`),
      ...(fs.existsSync(path.join(moduleRoot, 'practiceGapFill', 'questions.ts'))
        ? readExport(path.join(moduleRoot, 'practiceGapFill', 'questions.ts'), `${spec.prefix}GapFillQuestions`)
        : []),
      ...(fs.existsSync(path.join(moduleRoot, 'practiceExpansion2', 'questions.ts'))
        ? readExport(path.join(moduleRoot, 'practiceExpansion2', 'questions.ts'), `${spec.prefix}Expansion2Questions`)
        : [])
    ].map(normalizeQuestion),
    solutions: [
      ...readExport(path.join(moduleRoot, 'solutions.ts'), `${spec.prefix}Solutions`),
      ...readExport(path.join(moduleRoot, 'practiceExpansion', 'solutions.ts'), `${spec.prefix}ExpansionSolutions`),
      ...(fs.existsSync(path.join(moduleRoot, 'practiceGapFill', 'solutions.ts'))
        ? readExport(path.join(moduleRoot, 'practiceGapFill', 'solutions.ts'), `${spec.prefix}GapFillSolutions`)
        : []),
      ...(fs.existsSync(path.join(moduleRoot, 'practiceExpansion2', 'solutions.ts'))
        ? readExport(path.join(moduleRoot, 'practiceExpansion2', 'solutions.ts'), `${spec.prefix}Expansion2Solutions`)
        : [])
    ].map(normalizeSolution),
    blueprints: readExport(path.join(moduleRoot, 'practiceBlueprint.ts'), `${spec.prefix}PracticeBlueprints`),
    metadata: fs.existsSync(path.join(moduleRoot, 'practiceMetadata.ts'))
      ? readExport(path.join(moduleRoot, 'practiceMetadata.ts'), `${spec.prefix}PracticeMetadata`).map(normalizeMetadata)
      : []
  };
};

const modules = moduleSpecs.map(readModule);
const types = modules.flatMap(module => module.types);
const questions = modules.flatMap(module => module.questions);
const blueprints = modules.flatMap(module => module.blueprints);
const metadata = modules.flatMap(module => module.metadata);
const solutions = modules.flatMap(module => module.solutions);
const solutionQuestionIds = solutions.map(solution => solution.questionId);

const errors = [];
const warnings = [];

const ensureUnique = (items, keyOf, label) => {
  const seen = new Set();
  for (const item of items) {
    const key = keyOf(item);
    if (!key) {
      errors.push(`${label} thiếu khóa định danh.`);
      continue;
    }
    if (seen.has(key)) errors.push(`${label} trùng định danh: ${key}.`);
    seen.add(key);
  }
};

ensureUnique(types, item => item.id, 'Question type');
ensureUnique(questions, item => item.id, 'Question');
ensureUnique(blueprints, item => item.questionTypeId, 'Practice blueprint');
ensureUnique(metadata, item => item.questionId, 'Practice metadata');
ensureUnique(solutionQuestionIds.map(questionId => ({ questionId })), item => item.questionId, 'Solution');

const typeById = new Map(types.map(item => [item.id, item]));
const questionById = new Map(questions.map(item => [item.id, item]));
const blueprintByTypeId = new Map(blueprints.map(item => [item.questionTypeId, item]));
const metadataByQuestionId = new Map(metadata.map(item => [item.questionId, item]));
const solutionByQuestionId = new Map(solutions.map(item => [item.questionId, item]));

if (types.length !== 44) errors.push(`Hóa 10 phải có 44 dạng lớn hiện hành, hiện đọc được ${types.length}.`);
if (blueprints.length !== types.length) errors.push(`Blueprint phải phủ ${types.length} dạng lớn, hiện có ${blueprints.length}.`);

for (const type of types) {
  if (!blueprintByTypeId.has(type.id)) errors.push(`${type.id}: thiếu practice blueprint.`);
}

const allSubTypeIds = [];
for (const blueprint of blueprints) {
  if (!typeById.has(blueprint.questionTypeId)) {
    errors.push(`${blueprint.questionTypeId}: blueprint không có question type tương ứng.`);
    continue;
  }
  if (!Array.isArray(blueprint.subTypes) || blueprint.subTypes.length < 3) {
    errors.push(`${blueprint.questionTypeId}: cần tối thiểu 3 dạng con.`);
    continue;
  }
  const targetFromSubTypes = blueprint.subTypes.reduce((sum, item) => sum + (item.targetQuestionCount ?? 0), 0);
  if (targetFromSubTypes !== blueprint.coverage?.targetQuestionCount) {
    errors.push(`${blueprint.questionTypeId}: tổng target dạng con ${targetFromSubTypes} khác target dạng lớn ${blueprint.coverage?.targetQuestionCount}.`);
  }
  for (const subType of blueprint.subTypes) {
    allSubTypeIds.push({ id: subType.id, questionTypeId: blueprint.questionTypeId });
    if (!subType.id || !subType.name || !subType.example) {
      errors.push(`${blueprint.questionTypeId}: dạng con thiếu id, name hoặc example.`);
    }
    if (!Array.isArray(subType.recognitionSigns) || subType.recognitionSigns.length === 0) {
      errors.push(`${subType.id ?? blueprint.questionTypeId}: thiếu dấu hiệu nhận biết.`);
    }
    if (!Number.isInteger(subType.targetQuestionCount) || subType.targetQuestionCount < 3) {
      errors.push(`${subType.id ?? blueprint.questionTypeId}: targetQuestionCount phải từ 3 trở lên.`);
    }
  }
  const roles = new Set(blueprint.coverage?.requiredPracticeRoles ?? []);
  if (!roles.has('misconception_check') || !roles.has('mastery_holdout')) {
    errors.push(`${blueprint.questionTypeId}: coverage phải có misconception_check và mastery_holdout.`);
  }
  if ((blueprint.coverage?.masteryHoldoutCount ?? 0) < 3) {
    errors.push(`${blueprint.questionTypeId}: cần ít nhất 3 câu mastery holdout theo blueprint.`);
  }
}
ensureUnique(allSubTypeIds, item => item.id, 'Subtype');

const subTypeOwnerById = new Map(allSubTypeIds.map(item => [item.id, item.questionTypeId]));
for (const question of questions) {
  if (!typeById.has(question.questionTypeId)) errors.push(`${question.id}: questionTypeId không tồn tại.`);
  const data = metadataByQuestionId.get(question.id) ?? question;
  if (!data.subTypeId) continue;
  if (!subTypeOwnerById.has(data.subTypeId)) errors.push(`${question.id}: subTypeId ${data.subTypeId} không tồn tại.`);
  if (subTypeOwnerById.get(data.subTypeId) !== question.questionTypeId) {
    errors.push(`${question.id}: subtype ${data.subTypeId} không thuộc ${question.questionTypeId}.`);
  }
}
for (const item of metadata) {
  if (!questionById.has(item.questionId)) errors.push(`${item.questionId}: metadata không có câu hỏi tương ứng.`);
}

const allowedDifficulties = new Set(['easy', 'medium', 'hard']);
for (const question of questions) {
  if (!allowedDifficulties.has(question.difficulty)) errors.push(`${question.id}: difficulty không hợp lệ.`);
  if (!question.correctAnswer) errors.push(`${question.id}: thiếu correctAnswer.`);
  if (!Array.isArray(question.acceptedAnswers) || !question.acceptedAnswers.map(String).includes(String(question.correctAnswer))) {
    errors.push(`${question.id}: acceptedAnswers không chứa correctAnswer.`);
  }
  if (/^[A-D]$/i.test(String(question.correctAnswer))) {
    const answer = String(question.correctAnswer).toUpperCase();
    if (Array.isArray(question.options)) {
      const optionIndex = answer.charCodeAt(0) - 65;
      if (question.options.length < 2 || optionIndex >= question.options.length) {
        errors.push(`${question.id}: đáp án ${answer} không khớp danh sách options.`);
      }
    } else if (!new RegExp(`\\n${answer}[.)]`, 'i').test(String(question.content))) {
      errors.push(`${question.id}: không tìm thấy phương án ${answer} trong content legacy.`);
    }
  }
}

const questionIdSet = new Set(questions.map(item => item.id));
const solutionQuestionIdSet = new Set(solutionQuestionIds);
for (const id of questionIdSet) if (!solutionQuestionIdSet.has(id)) errors.push(`${id}: thiếu lời giải.`);
for (const id of solutionQuestionIdSet) if (!questionIdSet.has(id)) errors.push(`${id}: lời giải không có câu hỏi tương ứng.`);
for (const solution of solutions) {
  if (!solution.finalAnswer) errors.push(`${solution.questionId}: lời giải thiếu finalAnswer.`);
  if (solution.__fromHelper) {
    if ((solution.__details?.length ?? 0) < 2) errors.push(`${solution.questionId}: helper lời giải thiếu nội dung giải thích/lỗi sai.`);
  } else {
    if (!solution.recognition) errors.push(`${solution.questionId}: lời giải thiếu recognition.`);
    if (!Array.isArray(solution.detailedSteps) || solution.detailedSteps.length === 0) errors.push(`${solution.questionId}: lời giải thiếu detailedSteps.`);
    if (!Array.isArray(solution.commonMistakes) || solution.commonMistakes.length === 0) errors.push(`${solution.questionId}: lời giải thiếu commonMistakes.`);
    if (!Array.isArray(solution.reviewSuggestions) || solution.reviewSuggestions.length === 0) errors.push(`${solution.questionId}: lời giải thiếu reviewSuggestions.`);
  }
  const question = questionById.get(solution.questionId);
  if (question && /^[A-D]$/i.test(String(question.correctAnswer)) && /^[A-D]$/i.test(String(solution.finalAnswer))) {
    if (String(question.correctAnswer).toUpperCase() !== String(solution.finalAnswer).toUpperCase()) {
      errors.push(`${question.id}: đáp án câu hỏi ${question.correctAnswer} khác finalAnswer ${solution.finalAnswer}.`);
    }
  }
}

const isReinforcement = question => /-reinforce-(concept|process|misconception)$/.test(question.id);
const normalizedStem = content => String(content ?? '')
  .replace(/\n[A-D][.)].*$/gms, '')
  .replace(/\$|\\text|[{}_^*`]/g, '')
  .replace(/\s+/g, ' ')
  .trim()
  .toLocaleLowerCase('vi');

const stableHash = value => {
  let hash = 0x811c9dc5;
  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 0x01000193);
  }
  return hash >>> 0;
};

const duplicateStemGroups = new Map();
for (const question of questions.filter(question => !isReinforcement(question))) {
  const stem = normalizedStem(question.content);
  if (!stem) continue;
  const group = duplicateStemGroups.get(stem) ?? [];
  group.push(question.id);
  duplicateStemGroups.set(stem, group);
}
const duplicateGroups = [...duplicateStemGroups.values()].filter(group => group.length > 1);
if (duplicateGroups.length > 0) {
  warnings.push(`${duplicateGroups.length} nhóm câu có đề bài trùng sau chuẩn hóa (${duplicateGroups.flat().length} câu).`);
  if (process.env.CHEMISTRY10_VERBOSE_DUPLICATES === '1') {
    console.log('Chi tiết nhóm câu trùng:', duplicateGroups);
  }
}

const coverageRows = [];
const migratedTypeRows = [];
for (const module of modules) {
  const moduleTypeIds = new Set(module.types.map(item => item.id));
  const moduleQuestions = module.questions.filter(item => moduleTypeIds.has(item.questionTypeId));
  const authentic = moduleQuestions.filter(question => !isReinforcement(question));
  const target = module.blueprints.reduce((sum, item) => sum + item.coverage.targetQuestionCount, 0);
  const migrated = moduleQuestions.filter(question => {
    const data = metadataByQuestionId.get(question.id) ?? question;
    return Boolean(data.subTypeId && data.practiceRole && data.representationType);
  }).length;
  const difficulty = Object.fromEntries(['easy', 'medium', 'hard'].map(level => [
    level,
    authentic.filter(question => question.difficulty === level).length
  ]));
  const choiceQuestions = authentic.filter(question => /^[A-D]$/i.test(String(question.correctAnswer)));
  const answerKeyCounts = Object.fromEntries(['A', 'B', 'C', 'D'].map(letter => [
    letter,
    choiceQuestions.filter(question => String(question.correctAnswer).toUpperCase() === letter).length
  ]));
  const displayAnswerKeyCounts = Object.fromEntries(['A', 'B', 'C', 'D'].map((letter, index) => [
    letter,
    choiceQuestions.filter(question => stableHash(`${question.id}:answer`) % 4 === index).length
  ]));
  const dominantAnswer = Object.entries(answerKeyCounts).sort((a, b) => b[1] - a[1])[0];
  if (choiceQuestions.length >= 20 && dominantAnswer[1] / choiceQuestions.length > 0.45) {
    warnings.push(`${module.label}: đáp án ${dominantAnswer[0]} chiếm ${dominantAnswer[1]}/${choiceQuestions.length} câu trắc nghiệm; cần đảo vị trí phương án.`);
  }
  const dominantDisplayAnswer = Object.entries(displayAnswerKeyCounts).sort((a, b) => b[1] - a[1])[0];
  if (choiceQuestions.length >= 20 && dominantDisplayAnswer[1] / choiceQuestions.length > 0.4) {
    errors.push(`${module.label}: thuật toán hoán vị vẫn lệch đáp án ${dominantDisplayAnswer[0]} (${dominantDisplayAnswer[1]}/${choiceQuestions.length}).`);
  }
  if (authentic.length >= 20) {
    if (difficulty.easy / authentic.length < 0.1) warnings.push(`${module.label}: câu easy dưới 10% (${difficulty.easy}/${authentic.length}).`);
    if (difficulty.medium / authentic.length < 0.2) warnings.push(`${module.label}: câu medium dưới 20% (${difficulty.medium}/${authentic.length}).`);
    if (difficulty.hard / authentic.length < 0.15) warnings.push(`${module.label}: câu hard dưới 15% (${difficulty.hard}/${authentic.length}).`);
  }
  coverageRows.push({
    Module: module.label,
    Types: module.types.length,
    Raw: moduleQuestions.length,
    Authentic: authentic.length,
    Target: target,
    Gap: Math.max(0, target - authentic.length),
    Easy: difficulty.easy,
    Medium: difficulty.medium,
    Hard: difficulty.hard,
    Keys: `A${answerKeyCounts.A}/B${answerKeyCounts.B}/C${answerKeyCounts.C}/D${answerKeyCounts.D}`,
    Display: `A${displayAnswerKeyCounts.A}/B${displayAnswerKeyCounts.B}/C${displayAnswerKeyCounts.C}/D${displayAnswerKeyCounts.D}`,
    Metadata: `${migrated}/${moduleQuestions.length}`
  });

  if (migrated === moduleQuestions.length) {
    for (const type of module.types) {
      const blueprint = blueprintByTypeId.get(type.id);
      const typeQuestions = moduleQuestions.filter(question => question.questionTypeId === type.id);
      const authenticQuestions = typeQuestions.filter(question => !isReinforcement(question));
      const enriched = authenticQuestions.map(question => ({
        ...question,
        ...(metadataByQuestionId.get(question.id) ?? {})
      }));
      const subTypeCounts = new Map(blueprint.subTypes.map(subType => [
        subType.id,
        enriched.filter(question => question.subTypeId === subType.id).length
      ]));
      const subTypesAtMinimum = blueprint.subTypes.filter(subType => (
        (subTypeCounts.get(subType.id) ?? 0) >= blueprint.coverage.minimumQuestionsPerSubType
      )).length;
      const subTypesAtTarget = blueprint.subTypes.filter(subType => (
        (subTypeCounts.get(subType.id) ?? 0) === subType.targetQuestionCount
      )).length;
      if (authenticQuestions.length === blueprint.coverage.targetQuestionCount && subTypesAtTarget !== blueprint.subTypes.length) {
        for (const subType of blueprint.subTypes) {
          const actual = subTypeCounts.get(subType.id) ?? 0;
          if (actual !== subType.targetQuestionCount) {
            errors.push(`${subType.id}: có ${actual} câu, target chính xác là ${subType.targetQuestionCount}.`);
          }
        }
      }
      for (const subType of blueprint.subTypes) {
        const subtypeDifficulties = new Set(enriched.filter(question => question.subTypeId === subType.id).map(question => question.difficulty));
        if (subtypeDifficulties.size < 2) warnings.push(`${subType.id}: chỉ có một mức độ khó (${[...subtypeDifficulties].join(', ') || 'không có'}).`);
      }
      const roles = new Set(enriched.map(question => question.practiceRole));
      const representations = new Set(enriched.map(question => question.representationType));
      const missingRoles = blueprint.coverage.requiredPracticeRoles.filter(role => !roles.has(role));
      const missingRepresentations = blueprint.coverage.requiredRepresentations.filter(item => !representations.has(item));
      const holdouts = enriched.filter(question => question.isMasteryHoldout).length;
      migratedTypeRows.push({
        Type: type.id,
        Authentic: authenticQuestions.length,
        Target: blueprint.coverage.targetQuestionCount,
        Subtypes: `${subTypesAtMinimum}/${blueprint.subTypes.length}`,
        Exact: `${subTypesAtTarget}/${blueprint.subTypes.length}`,
        MissingRoles: missingRoles.join(', ') || '—',
        MissingRepresentations: missingRepresentations.join(', ') || '—',
        Holdouts: `${holdouts}/${blueprint.coverage.masteryHoldoutCount}`
      });
    }
  }
}

const unmigrated = questions.filter(question => {
  const data = metadataByQuestionId.get(question.id) ?? question;
  return !(data.subTypeId && data.practiceRole && data.representationType);
});
if (unmigrated.length > 0) warnings.push(`${unmigrated.length}/${questions.length} câu chưa được ánh xạ subtype/role/representation.`);

const legacyChoiceCount = questions.filter(question => !question.responseType && !question.options).length;
if (legacyChoiceCount > 0) warnings.push(`${legacyChoiceCount}/${questions.length} câu còn dùng trắc nghiệm lựa chọn nhúng trong content.`);

const authenticCount = questions.filter(question => !isReinforcement(question)).length;
const reinforcementCount = questions.length - authenticCount;
const targetCount = blueprints.reduce((sum, item) => sum + item.coverage.targetQuestionCount, 0);

console.log('\nCHEMISTRY 10 PRACTICE COVERAGE');
console.table(coverageRows);
console.log(`Dạng lớn: ${types.length}; dạng con: ${allSubTypeIds.length}.`);
console.log(`Câu thô: ${questions.length}; câu luyện thực chất: ${authenticCount}; câu củng cố mẫu: ${reinforcementCount}.`);
console.log(`Ngân hàng đích theo blueprint: ${targetCount}; khoảng thiếu sơ bộ: ${Math.max(0, targetCount - authenticCount)} câu.`);

if (migratedTypeRows.length > 0) {
  console.log('\nCHI TIẾT CÁC MODULE ĐÃ ÁNH XẠ ĐẦY ĐỦ');
  console.table(migratedTypeRows);
}

if (warnings.length > 0) {
  console.log('\nCẢNH BÁO / BACKLOG');
  for (const warning of warnings) console.log(`- ${warning}`);
}

if (errors.length > 0) {
  console.error('\nLỖI CẤU TRÚC');
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log('\n✓ Blueprint Hóa học 10 hợp lệ; các thiếu hụt nội dung được giữ ở mức backlog để bổ sung theo dạng con.');
