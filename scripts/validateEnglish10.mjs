import fs from 'node:fs';
import path from 'node:path';
import ts from 'typescript';

const root = process.cwd();
const dataDirectory = path.join(root, 'src', 'data', 'grade10', 'english');

const readNodeValue = node => {
  if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) return node.text;
  if (ts.isNumericLiteral(node)) return Number(node.text);
  if (node.kind === ts.SyntaxKind.TrueKeyword) return true;
  if (node.kind === ts.SyntaxKind.FalseKeyword) return false;
  if (ts.isArrayLiteralExpression(node)) {
    return node.elements
      .filter(element => !ts.isSpreadElement(element))
      .map(readNodeValue);
  }
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

const readExportedArray = (fileName, exportName) => {
  const filePath = path.join(dataDirectory, fileName);
  const sourceFile = ts.createSourceFile(
    filePath,
    fs.readFileSync(filePath, 'utf8'),
    ts.ScriptTarget.Latest,
    true
  );
  let result;
  sourceFile.forEachChild(node => {
    if (!ts.isVariableStatement(node)) return;
    for (const declaration of node.declarationList.declarations) {
      if (declaration.name.getText() !== exportName || !declaration.initializer) continue;
      if (ts.isArrayLiteralExpression(declaration.initializer)) {
        result = readNodeValue(declaration.initializer);
      }
    }
  });
  if (!result) throw new Error(`Không đọc được ${exportName} trong ${fileName}.`);
  return result;
};

const modulesDir = path.join(dataDirectory, 'modules');
const moduleDirs = fs.readdirSync(modulesDir).filter(f => fs.statSync(path.join(modulesDir, f)).isDirectory());

const topics = [];
const questionTypes = [];
const questions = [];
const solutions = [];

for (const dir of moduleDirs) {
  const dirPath = path.join(modulesDir, dir);
  const topicsFilePath = path.join(dirPath, 'topics.ts');
  if (!fs.existsSync(topicsFilePath)) continue;
  
  const topicsFile = fs.readFileSync(topicsFilePath, 'utf8');
  const exportTopicsMatch = topicsFile.match(/export const (g10EnglishModule\d+\w*Topics)/);
  if (!exportTopicsMatch) continue;
  
  const topicsExport = exportTopicsMatch[1];
  const prefix = topicsExport.replace('Topics', '');
  
  const moduleTopics = readExportedArray(path.join('modules', dir, 'topics.ts'), `${prefix}Topics`);
  const moduleQuestionTypes = readExportedArray(path.join('modules', dir, 'questionTypes.ts'), `${prefix}QuestionTypes`);
  const moduleQuestions = readExportedArray(path.join('modules', dir, 'questions.ts'), `${prefix}Questions`);
  const moduleSolutions = readExportedArray(path.join('modules', dir, 'solutions.ts'), `${prefix}Solutions`);

  topics.push(...moduleTopics);
  questionTypes.push(...moduleQuestionTypes);
  questions.push(...moduleQuestions);
  solutions.push(...moduleSolutions);
}

const assessmentExams = readExportedArray(
  path.join('assessments', 'exams.ts'),
  'g10EnglishAssessmentExams'
);

const errors = [];
const warnings = [];
const topicById = new Map(topics.map(topic => [topic.id, topic]));
const typeById = new Map(questionTypes.map(type => [type.id, type]));
const questionById = new Map(questions.map(question => [question.id, question]));
const solutionByQuestionId = new Map(solutions.map(solution => [solution.questionId, solution]));

const findDuplicates = (items, getKey) => {
  const counts = new Map();
  for (const item of items) counts.set(getKey(item), (counts.get(getKey(item)) ?? 0) + 1);
  return [...counts.entries()].filter(([, count]) => count > 1).map(([key]) => key);
};

for (const id of findDuplicates(topics, topic => topic.id)) errors.push(`Topic ID trùng: ${id}`);
for (const id of findDuplicates(questionTypes, type => type.id)) errors.push(`Question type ID trùng: ${id}`);
for (const id of findDuplicates(questions, question => question.id)) errors.push(`Question ID trùng: ${id}`);
for (const id of findDuplicates(solutions, solution => solution.questionId)) errors.push(`Một câu có nhiều lời giải: ${id}`);
for (const id of findDuplicates(assessmentExams, exam => exam.id)) errors.push(`Assessment ID trùng: ${id}`);

for (const type of questionTypes) {
  if (!topicById.has(type.topicId)) errors.push(`${type.id}: topicId không tồn tại (${type.topicId}).`);
  const example = questionById.get(type.exampleQuestionId);
  if (!example) {
    errors.push(`${type.id}: exampleQuestionId không tồn tại (${type.exampleQuestionId}).`);
  } else if (example.questionTypeId !== type.id) {
    errors.push(`${type.id}: câu mẫu ${example.id} thuộc ${example.questionTypeId}.`);
  }
}

for (const question of questions) {
  const type = typeById.get(question.questionTypeId);
  const solution = solutionByQuestionId.get(question.id);
  if (!topicById.has(question.topicId)) errors.push(`${question.id}: topicId không tồn tại.`);
  if (!type) errors.push(`${question.id}: questionTypeId không tồn tại (${question.questionTypeId}).`);
  if (type && type.topicId !== question.topicId) {
    errors.push(`${question.id}: topic ${question.topicId} lệch với ${type.id} (${type.topicId}).`);
  }
  if (question.subjectId !== 'english') errors.push(`${question.id}: subjectId phải là english.`);
  if (question.validatorType !== 'choice') warnings.push(`${question.id}: validatorType không phải choice.`);
  if (!Array.isArray(question.options) || question.options.length !== 4) {
    errors.push(`${question.id}: phải có đúng 4 phương án.`);
  } else {
    const optionLetters = question.options.map(option => option.match(/^([A-D])\.\s/)?.[1]);
    if (optionLetters.join('') !== 'ABCD') errors.push(`${question.id}: phương án phải theo thứ tự A–D.`);
    if (new Set(question.options).size !== question.options.length) errors.push(`${question.id}: có phương án trùng.`);
  }
  if (!['A', 'B', 'C', 'D'].includes(question.correctAnswer)) {
    errors.push(`${question.id}: correctAnswer không hợp lệ (${question.correctAnswer}).`);
  }
  if (!solution) {
    errors.push(`${question.id}: thiếu lời giải.`);
  } else {
    if (solution.finalAnswer !== question.correctAnswer) {
      errors.push(`${question.id}: đáp án câu hỏi ${question.correctAnswer} lệch lời giải ${solution.finalAnswer}.`);
    }
    if (!solution.recognition) errors.push(`${question.id}: lời giải thiếu recognition.`);
    if (!Array.isArray(solution.detailedSteps) || solution.detailedSteps.length === 0) {
      errors.push(`${question.id}: lời giải thiếu detailedSteps.`);
    }
  }

  if (['eng10-qt14', 'eng10-qt15'].includes(question.questionTypeId)) {
    if (/underlined part/i.test(question.content)) {
      errors.push(`${question.id}: đề nhắc phần gạch chân nhưng dữ liệu không biểu diễn phần gạch chân.`);
    }
    if (!/initial consonant cluster/i.test(question.content)) {
      errors.push(`${question.id}: đề phát âm phải nêu rõ đang xét cụm phụ âm đầu.`);
    }
  }
}

for (const solution of solutions) {
  if (!questionById.has(solution.questionId)) errors.push(`${solution.id}: lời giải không có câu hỏi tương ứng.`);
}

for (const exam of assessmentExams) {
  if (exam.subjectId !== 'english') errors.push(`${exam.id}: subjectId phải là english.`);
  if (!['midterm', 'final'].includes(exam.kind)) {
    errors.push(`${exam.id}: giai đoạn hiện tại chỉ cho phép đề giữa kỳ hoặc cuối kỳ.`);
  }
  if (!Array.isArray(exam.questionIds) || exam.questionIds.length < 24) {
    errors.push(`${exam.id}: cần tối thiểu 24 câu hỏi.`);
    continue;
  }
  const duplicateQuestionIds = findDuplicates(exam.questionIds, id => id);
  for (const questionId of duplicateQuestionIds) errors.push(`${exam.id}: lặp câu ${questionId}.`);

  const examQuestions = exam.questionIds.map(questionId => questionById.get(questionId));
  for (let index = 0; index < examQuestions.length; index += 1) {
    const question = examQuestions[index];
    const questionId = exam.questionIds[index];
    if (!question) {
      errors.push(`${exam.id}: questionId không tồn tại (${questionId}).`);
      continue;
    }
    if (!exam.scopeTopicIds.includes(question.topicId)) {
      errors.push(`${exam.id}: ${questionId} thuộc ${question.topicId}, ngoài phạm vi đề.`);
    }
  }

  for (const topicId of exam.scopeTopicIds) {
    if (!topicById.has(topicId)) errors.push(`${exam.id}: scopeTopicId không tồn tại (${topicId}).`);
    if (!examQuestions.some(question => question?.topicId === topicId)) {
      errors.push(`${exam.id}: không có câu nào thuộc ${topicId}.`);
    }
  }

  const validExamQuestions = examQuestions.filter(Boolean);
  const hardRatio = validExamQuestions.filter(question => question.difficulty === 'hard').length / validExamQuestions.length;
  if (hardRatio < 0.1 || hardRatio > 0.25) {
    warnings.push(`${exam.id}: tỷ lệ hard ${(hardRatio * 100).toFixed(1)}% nằm ngoài khoảng khuyến nghị 10–25%.`);
  }
}

const questionTypeCounts = new Map(questionTypes.map(type => [
  type.id,
  questions.filter(question => question.questionTypeId === type.id).length
]));
for (const [typeId, count] of questionTypeCounts) {
  if (count < 12) errors.push(`${typeId} mới có ${count} câu; yêu cầu tối thiểu 12 câu theo micro-type.`);
  if (count > 15) warnings.push(`${typeId} có ${count} câu; nên kiểm tra lại phạm vi micro-type (mục tiêu 12–15).`);

  const questionsOfType = questions.filter(question => question.questionTypeId === typeId);
  const mediumCount = questionsOfType.filter(question => question.difficulty === 'medium').length;
  const hardCountForType = questionsOfType.filter(question => question.difficulty === 'hard').length;
  if (mediumCount < 3) warnings.push(`${typeId} chỉ có ${mediumCount} câu medium; độ chuyển tiếp còn mỏng.`);
  if (hardCountForType < 3) errors.push(`${typeId} chỉ có ${hardCountForType} câu hard; cần tối thiểu 3 câu phân hóa.`);
}

const hardCount = questions.filter(question => question.difficulty === 'hard').length;
if (hardCount < Math.ceil(questions.length * 0.1)) {
  warnings.push(`Chỉ có ${hardCount}/${questions.length} câu hard; độ phân hóa còn thấp.`);
}
if (topics.length < 10) warnings.push(`Mới có ${topics.length}/10 Unit của Tiếng Anh 10.`);

const fullCorpus = [
  ...questionTypes.flatMap(type => [type.description, ...(type.theory ?? [])]),
  ...questions.flatMap(question => [question.content, ...(question.options ?? [])]),
  ...solutions.flatMap(solution => [
    solution.recognition,
    ...(solution.detailedSteps ?? []).flatMap(step => [step.title, step.explanation, step.result]),
    ...(solution.commonMistakes ?? []),
    ...(solution.reviewSuggestions ?? [])
  ])
].filter(Boolean).join('\n');

for (const forbiddenText of ['brainwinner', 'kreal', 'green living lifestyle', 'for searching information']) {
  if (fullCorpus.toLowerCase().includes(forbiddenText)) {
    errors.push(`Còn cụm nội dung cần biên tập: "${forbiddenText}".`);
  }
}

if (warnings.length > 0) {
  console.warn(`English 10 validation warnings (${warnings.length}):`);
  for (const warning of warnings) console.warn(`- ${warning}`);
}
if (errors.length > 0) {
  console.error(`English 10 validation failed (${errors.length} lỗi):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(
  `English 10 validation passed: ${topics.length} topics, ${questionTypes.length} types, `
  + `${questions.length} questions, ${solutions.length} solutions, ${assessmentExams.length} assessments.`
);
const difficultyCounts = ['easy', 'medium', 'hard']
  .map(level => `${level}=${questions.filter(question => question.difficulty === level).length}`)
  .join(', ');
const countsByType = [...questionTypeCounts.values()];
console.log(
  `Distribution: ${difficultyCounts}; `
  + `questions/type=${Math.min(...countsByType)}–${Math.max(...countsByType)}.`
);
