import fs from 'node:fs';
import path from 'node:path';
import ts from 'typescript';

const loadTypeScriptModule = async filePath => {
  const source = fs.readFileSync(filePath, 'utf8');
  const transpiled = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.ES2022,
      target: ts.ScriptTarget.ES2023,
      importsNotUsedAsValues: ts.ImportsNotUsedAsValues.Remove
    },
    fileName: filePath,
    reportDiagnostics: true
  });
  const diagnostics = transpiled.diagnostics ?? [];
  if (diagnostics.length > 0) {
    const message = ts.formatDiagnosticsWithColorAndContext(diagnostics, {
      getCurrentDirectory: () => process.cwd(),
      getCanonicalFileName: fileName => fileName,
      getNewLine: () => '\n'
    });
    throw new Error(message);
  }
  if (/^\s*import\s/m.test(transpiled.outputText)) {
    throw new Error(`${filePath}: leaf data file không được có runtime import.`);
  }
  const encoded = Buffer.from(transpiled.outputText).toString('base64');
  return import(`data:text/javascript;base64,${encoded}#${encodeURIComponent(filePath)}`);
};

const arrayExport = (module, suffix, filePath) => {
  const entry = Object.entries(module).find(
    ([name, value]) => name.endsWith(suffix) && Array.isArray(value)
  );
  if (!entry) throw new Error(`${filePath}: không tìm thấy array export *${suffix}.`);
  return entry[1];
};

const objectExport = (module, suffix, filePath) => {
  const entry = Object.entries(module).find(
    ([name, value]) =>
      name.endsWith(suffix) &&
      value !== null &&
      typeof value === 'object' &&
      !Array.isArray(value)
  );
  if (!entry) throw new Error(`${filePath}: không tìm thấy object export *${suffix}.`);
  return entry[1];
};

const duplicates = (items, keyOf) => {
  const counts = new Map();
  for (const item of items) {
    const key = keyOf(item);
    counts.set(key, (counts.get(key) ?? 0) + 1);
  }
  return [...counts].filter(([, count]) => count > 1).map(([key]) => key);
};

const isNonEmptyString = value => typeof value === 'string' && value.trim().length > 0;

export const validateCourseDataV4 = async ({
  courseDirectory,
  courseId,
  expectedLessonCount,
  expectedCurriculumModuleCount,
  expectedOfficialRequirementCount,
  expectedOutcomeCount,
  expectedQuestionTypeCount,
  expectedPracticeTargetCount
}) => {
  const errors = [];
  const warnings = [];
  const absoluteCourseDirectory = path.resolve(courseDirectory);
  const curriculumDirectory = path.join(absoluteCourseDirectory, 'curriculum');
  const modulesDirectory = path.join(absoluteCourseDirectory, 'modules');

  for (const requiredPath of [
    path.join(absoluteCourseDirectory, 'course.ts'),
    path.join(curriculumDirectory, 'sources.ts'),
    path.join(curriculumDirectory, 'textbookMap.ts'),
    path.join(curriculumDirectory, 'officialRequirements.ts'),
    path.join(curriculumDirectory, 'outcomeManifest.ts'),
    modulesDirectory
  ]) {
    if (!fs.existsSync(requiredPath)) errors.push(`Thiếu ${path.relative(process.cwd(), requiredPath)}.`);
  }
  if (errors.length > 0) return { errors, warnings, stats: {} };

  const sourcesPath = path.join(curriculumDirectory, 'sources.ts');
  const lessonsPath = path.join(curriculumDirectory, 'textbookMap.ts');
  const requirementsPath = path.join(curriculumDirectory, 'officialRequirements.ts');
  const outcomeManifestPath = path.join(curriculumDirectory, 'outcomeManifest.ts');

  const [sourcesModule, lessonsModule, requirementsModule, outcomeManifestModule] =
    await Promise.all([
      loadTypeScriptModule(sourcesPath),
      loadTypeScriptModule(lessonsPath),
      loadTypeScriptModule(requirementsPath),
      loadTypeScriptModule(outcomeManifestPath)
    ]);

  const sources = arrayExport(sourcesModule, 'CurriculumSources', sourcesPath);
  const lessons = arrayExport(lessonsModule, 'TextbookLessons', lessonsPath);
  const officialRequirements = arrayExport(
    requirementsModule,
    'OfficialRequirements',
    requirementsPath
  );
  const outcomeManifest = arrayExport(
    outcomeManifestModule,
    'OutcomeManifest',
    outcomeManifestPath
  );

  const moduleDirectories = fs
    .readdirSync(modulesDirectory)
    .map(name => path.join(modulesDirectory, name))
    .filter(directory => fs.statSync(directory).isDirectory())
    .sort();

  const manifests = [];
  const topics = [];
  const questionTypes = [];
  const questions = [];
  const solutions = [];
  const outcomes = [];
  const misconceptions = [];
  const theory = [];
  const practiceBlueprints = [];

  for (const moduleDirectory of moduleDirectories) {
    const requiredModuleFiles = [
      'index.ts',
      'manifest.ts',
      'topics.ts',
      'lessons.ts',
      'theory.ts',
      'learningPath.ts',
      'questionTypes.ts',
      'questions.ts',
      'solutions.ts',
      'practiceBlueprint.ts'
    ];
    for (const fileName of requiredModuleFiles) {
      if (!fs.existsSync(path.join(moduleDirectory, fileName))) {
        errors.push(`${path.basename(moduleDirectory)}: thiếu ${fileName}.`);
      }
    }
    if (errors.length > 0) continue;

    const [
      manifestModule,
      topicsModule,
      theoryModule,
      learningPathModule,
      questionTypesModule,
      questionsModule,
      solutionsModule,
      practiceBlueprintModule
    ] = await Promise.all([
      loadTypeScriptModule(path.join(moduleDirectory, 'manifest.ts')),
      loadTypeScriptModule(path.join(moduleDirectory, 'topics.ts')),
      loadTypeScriptModule(path.join(moduleDirectory, 'theory.ts')),
      loadTypeScriptModule(path.join(moduleDirectory, 'learningPath.ts')),
      loadTypeScriptModule(path.join(moduleDirectory, 'questionTypes.ts')),
      loadTypeScriptModule(path.join(moduleDirectory, 'questions.ts')),
      loadTypeScriptModule(path.join(moduleDirectory, 'solutions.ts')),
      loadTypeScriptModule(path.join(moduleDirectory, 'practiceBlueprint.ts'))
    ]);

    manifests.push(
      objectExport(manifestModule, 'Manifest', path.join(moduleDirectory, 'manifest.ts'))
    );
    topics.push(...arrayExport(topicsModule, 'Topics', path.join(moduleDirectory, 'topics.ts')));
    theory.push(...arrayExport(theoryModule, 'Theory', path.join(moduleDirectory, 'theory.ts')));
    outcomes.push(
      ...arrayExport(learningPathModule, 'Outcomes', path.join(moduleDirectory, 'learningPath.ts'))
    );
    misconceptions.push(
      ...arrayExport(
        learningPathModule,
        'Misconceptions',
        path.join(moduleDirectory, 'learningPath.ts')
      )
    );
    questionTypes.push(
      ...arrayExport(
        questionTypesModule,
        'QuestionTypes',
        path.join(moduleDirectory, 'questionTypes.ts')
      )
    );
    questions.push(
      ...arrayExport(questionsModule, 'Questions', path.join(moduleDirectory, 'questions.ts'))
    );
    solutions.push(
      ...arrayExport(solutionsModule, 'Solutions', path.join(moduleDirectory, 'solutions.ts'))
    );
    practiceBlueprints.push(
      ...arrayExport(
        practiceBlueprintModule,
        'PracticeBlueprints',
        path.join(moduleDirectory, 'practiceBlueprint.ts')
      )
    );
  }

  for (const [label, items, keyOf] of [
    ['Nguồn', sources, item => item.id],
    ['Bài học', lessons, item => item.id],
    ['Yêu cầu chính thức', officialRequirements, item => item.id],
    ['Outcome manifest', outcomeManifest, item => item.outcomeId],
    ['Module', manifests, item => item.id],
    ['Topic', topics, item => item.id],
    ['Dạng bài', questionTypes, item => item.id],
    ['Câu hỏi', questions, item => item.id],
    ['Lời giải', solutions, item => item.questionId],
    ['Outcome', outcomes, item => item.id],
    ['Misconception', misconceptions, item => item.id],
    ['Theory block', theory, item => item.id],
    ['Practice blueprint', practiceBlueprints, item => item.questionTypeId]
  ]) {
    for (const duplicate of duplicates(items, keyOf)) {
      errors.push(`${label} bị trùng: ${duplicate}.`);
    }
  }

  if (lessons.length !== expectedLessonCount) {
    errors.push(`Mục lục phải có ${expectedLessonCount} bài, hiện có ${lessons.length}.`);
  }
  if (
    expectedOfficialRequirementCount !== undefined &&
    officialRequirements.length !== expectedOfficialRequirementCount
  ) {
    errors.push(
      `Phải có ${expectedOfficialRequirementCount} yêu cầu chính thức, hiện có ${officialRequirements.length}.`
    );
  }
  const curriculumModuleIds = new Set(lessons.map(item => item.moduleId));
  if (curriculumModuleIds.size !== expectedCurriculumModuleCount) {
    errors.push(
      `Mục lục phải có ${expectedCurriculumModuleCount} module/chương, hiện có ${curriculumModuleIds.size}.`
    );
  }
  for (const [index, lesson] of [...lessons].sort((a, b) => a.orderIndex - b.orderIndex).entries()) {
    if (lesson.orderIndex !== index + 1 || lesson.lessonNumber !== index + 1) {
      errors.push(`${lesson.id}: lessonNumber/orderIndex không liên tục.`);
    }
    if (lesson.courseId !== courseId) errors.push(`${lesson.id}: courseId không khớp.`);
    if (!Array.isArray(lesson.sourceIds) || lesson.sourceIds.length === 0) {
      errors.push(`${lesson.id}: thiếu sourceIds.`);
    }
  }

  const sourceById = new Map(sources.map(item => [item.id, item]));
  const lessonById = new Map(lessons.map(item => [item.id, item]));
  const manifestById = new Map(manifests.map(item => [item.id, item]));
  const topicById = new Map(topics.map(item => [item.id, item]));
  const typeById = new Map(questionTypes.map(item => [item.id, item]));
  const questionById = new Map(questions.map(item => [item.id, item]));
  const solutionByQuestionId = new Map(solutions.map(item => [item.questionId, item]));
  const outcomeById = new Map(outcomes.map(item => [item.id, item]));
  const misconceptionById = new Map(misconceptions.map(item => [item.id, item]));
  const requirementById = new Map(officialRequirements.map(item => [item.id, item]));
  const outcomeManifestById = new Map(outcomeManifest.map(item => [item.outcomeId, item]));
  const blueprintByTypeId = new Map(practiceBlueprints.map(item => [item.questionTypeId, item]));
  const sameMembers = (left = [], right = []) =>
    left.length === right.length && left.every(item => right.includes(item));

  for (const lesson of lessons) {
    for (const sourceId of lesson.sourceIds) {
      if (!sourceById.has(sourceId)) errors.push(`${lesson.id}: source ${sourceId} không tồn tại.`);
    }
  }

  for (const manifest of manifests) {
    if (manifest.courseId !== courseId) errors.push(`${manifest.id}: courseId không khớp.`);
    for (const lessonId of manifest.lessonIds ?? []) {
      const mappedLesson = lessonById.get(lessonId);
      if (!mappedLesson) errors.push(`${manifest.id}: lesson ${lessonId} không tồn tại.`);
      else if (mappedLesson.moduleId !== manifest.id) {
        errors.push(`${manifest.id}: không sở hữu lesson ${lessonId}.`);
      }
    }
    for (const topicId of manifest.topicIds ?? []) {
      if (!topicById.has(topicId)) errors.push(`${manifest.id}: topic ${topicId} không tồn tại.`);
    }
  }

  for (const moduleId of curriculumModuleIds) {
    if (!manifestById.has(moduleId)) {
      warnings.push(`${moduleId}: đã có trong mục lục nhưng chưa có module dữ liệu.`);
    }
  }

  for (const requirement of officialRequirements) {
    if (requirement.courseId !== courseId) errors.push(`${requirement.id}: courseId không khớp.`);
    if (!manifestById.has(requirement.moduleId)) {
      errors.push(`${requirement.id}: moduleId ${requirement.moduleId} không tồn tại.`);
    }
    if (!Array.isArray(requirement.sourceLocators) || requirement.sourceLocators.length === 0) {
      errors.push(`${requirement.id}: thiếu sourceLocators.`);
    }
    for (const lessonId of requirement.lessonIds ?? []) {
      const mappedLesson = lessonById.get(lessonId);
      if (!mappedLesson) errors.push(`${requirement.id}: lesson ${lessonId} không tồn tại.`);
      else if (mappedLesson.moduleId !== requirement.moduleId) {
        errors.push(`${requirement.id}: lesson ${lessonId} thuộc module khác.`);
      }
    }
    for (const outcomeId of requirement.implementedOutcomeIds ?? []) {
      if (!outcomeById.has(outcomeId)) errors.push(`${requirement.id}: outcome ${outcomeId} không tồn tại.`);
    }
  }

  for (const lesson of lessons) {
    if (!officialRequirements.some(requirement => requirement.lessonIds?.includes(lesson.id))) {
      errors.push(`${lesson.id}: chưa được yêu cầu chính thức nào bao phủ.`);
    }
  }

  if (expectedOutcomeCount !== undefined && outcomes.length !== expectedOutcomeCount) {
    errors.push(`Phải có ${expectedOutcomeCount} outcome, hiện có ${outcomes.length}.`);
  }
  for (const outcome of outcomes) {
    const mappedTopic = topicById.get(outcome.topicId);
    if (!mappedTopic) errors.push(`${outcome.id}: topicId không tồn tại.`);
    if (!outcomeManifestById.has(outcome.id)) errors.push(`${outcome.id}: thiếu outcome manifest.`);
    if (!Array.isArray(outcome.questionTypeIds) || outcome.questionTypeIds.length === 0) {
      errors.push(`${outcome.id}: chưa được gắn với dạng bài nào.`);
    }
    for (const prerequisiteId of outcome.prerequisiteOutcomeIds ?? []) {
      if (!outcomeById.has(prerequisiteId)) {
        errors.push(`${outcome.id}: prerequisite ${prerequisiteId} không tồn tại.`);
      }
    }
    for (const misconceptionId of outcome.misconceptionIds ?? []) {
      if (!misconceptionById.has(misconceptionId)) {
        errors.push(`${outcome.id}: misconception ${misconceptionId} không tồn tại.`);
      }
    }
    for (const questionTypeId of outcome.questionTypeIds ?? []) {
      if (!typeById.has(questionTypeId)) {
        errors.push(`${outcome.id}: questionType ${questionTypeId} không tồn tại.`);
      }
    }
  }

  for (const entry of outcomeManifest) {
    const runtimeOutcome = outcomeById.get(entry.outcomeId);
    if (!runtimeOutcome) {
      errors.push(`${entry.outcomeId}: manifest không có outcome runtime.`);
    } else {
      const runtimeTopic = topicById.get(runtimeOutcome.topicId);
      if (runtimeTopic?.moduleId !== entry.moduleId) {
        errors.push(`${entry.outcomeId}: moduleId trong manifest không khớp learning path.`);
      }
      if (runtimeOutcome.scope !== entry.scope) {
        errors.push(`${entry.outcomeId}: scope trong manifest không khớp learning path.`);
      }
    }
    for (const requirementId of entry.officialRequirementIds ?? []) {
      const requirement = requirementById.get(requirementId);
      if (!requirement) errors.push(`${entry.outcomeId}: requirement ${requirementId} không tồn tại.`);
      else if (!(requirement.implementedOutcomeIds ?? []).includes(entry.outcomeId)) {
        errors.push(`${entry.outcomeId}: mapping hai chiều với ${requirementId} chưa đồng bộ.`);
      }
    }
    for (const lessonId of entry.lessonIds ?? []) {
      const mappedLesson = lessonById.get(lessonId);
      if (!mappedLesson) errors.push(`${entry.outcomeId}: lesson ${lessonId} không tồn tại.`);
      else if (mappedLesson.moduleId !== entry.moduleId) {
        errors.push(`${entry.outcomeId}: lesson ${lessonId} thuộc module khác.`);
      }
    }
  }

  if (
    expectedQuestionTypeCount !== undefined &&
    questionTypes.length !== expectedQuestionTypeCount
  ) {
    errors.push(
      `Phải có ${expectedQuestionTypeCount} dạng bài, hiện có ${questionTypes.length}.`
    );
  }
  const coverageGaps = [];
  for (const type of questionTypes) {
    if (type.courseId !== courseId) errors.push(`${type.id}: courseId không khớp.`);
    if (!manifestById.has(type.moduleId)) errors.push(`${type.id}: moduleId không tồn tại.`);
    const mappedTopic = topicById.get(type.topicId);
    if (!mappedTopic) errors.push(`${type.id}: topicId không tồn tại.`);
    else if (mappedTopic.moduleId !== type.moduleId) {
      errors.push(`${type.id}: topic ${type.topicId} thuộc module khác.`);
    }
    if (!blueprintByTypeId.has(type.id)) errors.push(`${type.id}: thiếu practice blueprint.`);
    if (!Array.isArray(type.solvingSteps) || type.solvingSteps.length < 3) {
      errors.push(`${type.id}: cần ít nhất 3 bước giải.`);
    }
    if (!Array.isArray(type.outcomeIds) || type.outcomeIds.length === 0) {
      errors.push(`${type.id}: chưa được gắn với outcome nào.`);
    }
    for (const lessonId of type.lessonIds ?? []) {
      const mappedLesson = lessonById.get(lessonId);
      if (!mappedLesson) errors.push(`${type.id}: lesson ${lessonId} không tồn tại.`);
      else if (mappedLesson.moduleId !== type.moduleId) {
        errors.push(`${type.id}: lesson ${lessonId} thuộc module khác.`);
      }
    }
    for (const outcomeId of type.outcomeIds ?? []) {
      const mappedOutcome = outcomeById.get(outcomeId);
      if (!mappedOutcome) {
        errors.push(`${type.id}: outcome ${outcomeId} không tồn tại.`);
      } else {
        if (!mappedOutcome.questionTypeIds?.includes(type.id)) {
          errors.push(`${type.id}: mapping hai chiều với ${outcomeId} chưa đồng bộ.`);
        }
        if (topicById.get(mappedOutcome.topicId)?.moduleId !== type.moduleId) {
          errors.push(`${type.id}: outcome ${outcomeId} thuộc module khác.`);
        }
      }
    }
    const blueprint = blueprintByTypeId.get(type.id);
    const typeQuestions = questions.filter(question => question.questionTypeId === type.id);
    if (blueprint) {
      const typeSubTypes = type.subTypes ?? [];
      const blueprintSubTypes = blueprint.subTypes ?? [];
      if (!sameMembers(typeSubTypes.map(item => item.id), blueprintSubTypes.map(item => item.id))) {
        errors.push(`${type.id}: danh sách subtype giữa dạng bài và blueprint không khớp.`);
      }
      for (const subType of typeSubTypes) {
        const blueprintSubType = blueprintSubTypes.find(item => item.id === subType.id);
        if (
          blueprintSubType &&
          (blueprintSubType.name !== subType.name ||
            blueprintSubType.targetQuestionCount !== subType.targetQuestionCount)
        ) {
          errors.push(`${type.id}: subtype ${subType.id} không đồng bộ với blueprint.`);
        }
      }
      const coverage = type.practiceCoverage;
      if (!coverage) {
        errors.push(`${type.id}: thiếu practiceCoverage.`);
      } else if (
        coverage.targetQuestionCount !== blueprint.coverage.targetQuestionCount ||
        coverage.minimumQuestionsPerSubType !== blueprint.coverage.minimumQuestionsPerSubType ||
        coverage.masteryHoldoutCount !== blueprint.coverage.masteryHoldoutCount ||
        !sameMembers(
          coverage.requiredPracticeRoles,
          blueprint.coverage.requiredPracticeRoles
        ) ||
        !sameMembers(
          coverage.requiredRepresentations,
          blueprint.coverage.requiredRepresentations
        )
      ) {
        errors.push(`${type.id}: practiceCoverage không đồng bộ với blueprint.`);
      }
      const subTypeTarget = blueprintSubTypes.reduce(
        (total, item) => total + (item.targetQuestionCount ?? 0),
        0
      );
      if (subTypeTarget !== blueprint.coverage.targetQuestionCount) {
        errors.push(
          `${type.id}: tổng chỉ tiêu subtype ${subTypeTarget} không bằng chỉ tiêu dạng bài ${blueprint.coverage.targetQuestionCount}.`
        );
      }
      if (typeQuestions.length < blueprint.coverage.targetQuestionCount) {
        coverageGaps.push({
          questionTypeId: type.id,
          current: typeQuestions.length,
          target: blueprint.coverage.targetQuestionCount
        });
      }
    }
  }

  for (const blueprint of practiceBlueprints) {
    if (!typeById.has(blueprint.questionTypeId)) {
      errors.push(`${blueprint.questionTypeId}: blueprint không có dạng bài tương ứng.`);
    }
  }

  const totalPracticeTarget = practiceBlueprints.reduce(
    (total, blueprint) => total + (blueprint.coverage?.targetQuestionCount ?? 0),
    0
  );
  if (
    expectedPracticeTargetCount !== undefined &&
    totalPracticeTarget !== expectedPracticeTargetCount
  ) {
    errors.push(
      `Chỉ tiêu ngân hàng phải là ${expectedPracticeTargetCount} câu, hiện là ${totalPracticeTarget}.`
    );
  }
  if (coverageGaps.length > 0) {
    const currentQuestionCount = coverageGaps.reduce((total, gap) => total + gap.current, 0);
    const targetQuestionCount = coverageGaps.reduce((total, gap) => total + gap.target, 0);
    warnings.push(
      `Độ phủ practice: ${coverageGaps.length}/${questionTypes.length} dạng chưa đủ, hiện có ${currentQuestionCount}/${targetQuestionCount} câu trong các dạng này.`
    );
  }

  for (const question of questions) {
    if (question.courseId !== courseId) errors.push(`${question.id}: courseId không khớp.`);
    if (!manifestById.has(question.moduleId)) errors.push(`${question.id}: moduleId không tồn tại.`);
    if (!lessonById.has(question.lessonId)) errors.push(`${question.id}: lessonId không tồn tại.`);
    if (!topicById.has(question.topicId)) errors.push(`${question.id}: topicId không tồn tại.`);
    if (!typeById.has(question.questionTypeId)) errors.push(`${question.id}: questionTypeId không tồn tại.`);
    if (!solutionByQuestionId.has(question.id)) errors.push(`${question.id}: thiếu lời giải.`);
    if (!Array.isArray(question.outcomeIds) || question.outcomeIds.length === 0) {
      errors.push(`${question.id}: thiếu outcomeIds.`);
    }
    for (const outcomeId of question.outcomeIds ?? []) {
      if (!outcomeById.has(outcomeId)) errors.push(`${question.id}: outcome ${outcomeId} không tồn tại.`);
    }
    if (question.validatorType === 'choice') {
      if (!Array.isArray(question.options) || question.options.length !== 4) {
        errors.push(`${question.id}: câu choice phải có đúng 4 phương án.`);
      }
      if (!['A', 'B', 'C', 'D'].includes(question.correctAnswer)) {
        errors.push(`${question.id}: đáp án choice phải chuẩn hóa về A/B/C/D.`);
      }
    }
  }

  for (const solution of solutions) {
    const question = questionById.get(solution.questionId);
    if (!question) errors.push(`${solution.questionId}: lời giải không có câu hỏi.`);
    if (solution.courseId !== courseId) errors.push(`${solution.questionId}: courseId không khớp.`);
    if (question && solution.finalAnswer !== question.correctAnswer) {
      errors.push(`${solution.questionId}: finalAnswer không khớp correctAnswer.`);
    }
    if (!Array.isArray(solution.detailedSteps) || solution.detailedSteps.length < 2) {
      errors.push(`${solution.questionId}: lời giải cần ít nhất 2 bước.`);
    }
  }

  for (const block of theory) {
    if (block.courseId !== courseId) errors.push(`${block.id}: courseId không khớp.`);
    if (!isNonEmptyString(block.content)) errors.push(`${block.id}: nội dung lý thuyết rỗng.`);
    for (const lessonId of block.lessonIds ?? []) {
      if (!lessonById.has(lessonId)) errors.push(`${block.id}: lesson ${lessonId} không tồn tại.`);
    }
  }

  const videosPath = path.join(absoluteCourseDirectory, 'videos.ts');
  if (fs.existsSync(videosPath) && fs.readFileSync(videosPath, 'utf8').includes('dQw4w9WgXcQ')) {
    errors.push('videos.ts còn chứa YouTube placeholder dQw4w9WgXcQ.');
  }

  return {
    errors,
    warnings,
    stats: {
      sources: sources.length,
      curriculumLessons: lessons.length,
      implementedModules: manifests.length,
      officialRequirements: officialRequirements.length,
      outcomes: outcomes.length,
      questionTypes: questionTypes.length,
      practiceTarget: totalPracticeTarget,
      practiceQuestions: questions.length,
      solutions: solutions.length
    }
  };
};
