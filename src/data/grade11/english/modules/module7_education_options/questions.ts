import type { CourseQuestion } from '@/data/schema';
import type { PracticeRole, QuestionRepresentationType, QuestionStimulus } from '@/types';
type Choice = 'A' | 'B' | 'C' | 'D';
type Raw = { p: string; c: string; w: [string, string, string]; stimulus?: QuestionStimulus; representation?: QuestionRepresentationType };
const letters: Choice[] = ['A', 'B', 'C', 'D'];
const roles: PracticeRole[] = ['guided', 'near_transfer', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'];
const difficulties: CourseQuestion['difficulty'][] = ['easy', 'easy', 'easy', 'easy', 'medium', 'medium', 'medium', 'medium', 'medium', 'hard', 'hard', 'hard'];
const build = (key: string, lesson: string, rows: Raw[], subTypes: [string, string]): CourseQuestion[] =>
  rows.map((row, index) => {
    const position = index % 4, choices = [...row.w]; choices.splice(position, 0, row.c);
    return {
      id: `eng11-q-u7-${key}-${String(index + 1).padStart(2, '0')}`,
      courseId: 'grade11:english', moduleId: 'eng11-m7', lessonId: `eng11-u7-${lesson}`,
      subjectId: 'english', topicId: 'eng11-topic-u7', questionTypeId: `eng11-qt-u7-${key}`,
      content: row.p, options: choices.map((v, i) => `${letters[i]}. ${v}`) as [string, string, string, string],
      correctAnswer: letters[position], responseType: 'single_choice', validatorType: 'choice',
      difficulty: difficulties[index], points: 0.25, sourceType: 'manual', outcomeIds: [`eng11-out-u7-${key}`],
      subTypeId: `eng11-u7-${key}-${index < 6 ? subTypes[0] : subTypes[1]}`,
      practiceRole: roles[index % 6], representationType: row.representation ?? (index % 4 === 3 ? 'dialogue' : 'text'),
      isMasteryHoldout: index % 6 === 5, stimulus: row.stimulus
    };
  });
const pronunciation: Raw[] = [
  { p: 'Which question normally ends with rising intonation?', c: 'Are you applying this year?', w: ['Where will you study?', 'Why did you choose it?', 'Which course is cheaper?'] },
  { p: 'A neutral Yes/No question generally invites:', c: 'confirmation with a rising tone', w: ['a content answer with a final fall only', 'no response', 'a list of three items'] },
  { p: 'How does “Can I visit the campus?” commonly end?', c: 'with rising intonation', w: ['with compulsory falling intonation', 'without a final pitch', 'with equal stress everywhere'] },
  { p: 'A: “Is the deadline Friday?” B: “Use a ______ tone for a neutral check.”', c: 'rising', w: ['falling Wh-', 'flat written', 'silent'], representation: 'dialogue' },
  { p: 'Which statement about Yes/No intonation is safest?', c: 'A rise is common, but context can change the tone.', w: ['A rise is mandatory in every situation.', 'All Yes/No questions fall.', 'Intonation depends only on punctuation.'] },
  { p: 'A falling Yes/No question may sound more:', c: 'definite or checking', w: ['like an unfinished list', 'like no question exists', 'grammatically passive'] },
  { p: 'Which question normally ends with falling intonation?', c: 'What qualification will you gain?', w: ['Have you applied?', 'Can you attend?', 'Is tuition included?'] },
  { p: 'A: “Where is the training centre?” B: “A neutral Wh-question usually ______.”', c: 'falls at the end', w: ['rises like every Yes/No question', 'deletes the Wh-word', 'has no stress'], representation: 'dialogue' },
  { p: 'Why do neutral Wh-questions often fall?', c: 'They request specific information and sound complete.', w: ['They require yes or no.', 'They are statements.', 'Their spelling is longer.'] },
  { p: 'A rising tone on “What course?” may signal:', c: 'surprise or a request to repeat', w: ['that it is no longer a question', 'a guaranteed command', 'past perfect grammar'] },
  { p: 'Which pair is matched correctly?', c: 'Yes/No—usually rise; Wh—usually fall', w: ['Yes/No—always fall; Wh—always rise', 'Both—no tone', 'Both—rise in every context'] },
  { p: 'What should determine a final intonation choice?', c: 'Question type plus communicative context', w: ['Word length only', 'The number of letters', 'A fixed rule without exceptions'] }
];
const vocabulary: Raw[] = [
  { p: 'A programme leading to an academic university qualification is a:', c: 'degree programme', w: ['workplace shift', 'school fee', 'career survey'] },
  { p: 'Education focused on practical occupational skills is:', c: 'vocational education', w: ['general weather', 'tuition prospect', 'academic location'] },
  { p: 'Training that combines paid workplace experience and study is an:', c: 'apprenticeship', w: ['admission office', 'application fee', 'entry grade'] },
  { p: 'A: “What are entry requirements?” B: “They are ______.”', c: 'conditions applicants must meet', w: ['the cost of transport only', 'jobs after retirement', 'optional brochure colours'], representation: 'dialogue' },
  { p: 'Money charged for teaching by an institution is called:', c: 'tuition fees', w: ['career prospects', 'qualifications', 'work placements'] },
  { p: 'The possibility of future employment and progress is described as:', c: 'career prospects', w: ['entry tuition', 'vocational admission', 'application learning'] },
  { p: 'Choose the correct collocation for admission.', c: 'apply for a course', w: ['apply a course into', 'do an application at', 'make course for'] },
  { p: 'Students must ______ the entry requirements before enrolment.', c: 'meet', w: ['gain into', 'pay on', 'complete at'] },
  { p: 'After finishing the programme, learners can ______ a recognised qualification.', c: 'gain', w: ['meet at', 'enrol from', 'apply down'] },
  { p: 'A: “When will you ______ in the course?” B: “After I accept the offer.”', c: 'enrol', w: ['qualify for at', 'prospect', 'fee'], representation: 'dialogue' },
  { p: 'Which phrase describes financial support for study?', c: 'receive a scholarship', w: ['make an entry', 'do tuition', 'meet a fee'] },
  { p: 'A careful learner should ______ before choosing a pathway.', c: 'make an informed decision', w: ['take a random prospect', 'gain a brochure', 'meet every opinion'] }
];
const grammar: Raw[] = [
  { p: 'She admitted ______ the application late.', c: 'having submitted', w: ['have submitted', 'having submit', 'to submitted'] },
  { p: 'Nam regretted ______ the open day.', c: 'having missed', w: ['have miss', 'having miss', 'to missing'] },
  { p: '______ vocational subjects helped Lan choose a technical course.', c: 'Having studied', w: ['Have studied', 'Having study', 'To studied'] },
  { p: 'A: “Why is it a perfect gerund?” B: “Because ‘having completed’ acts as ______.”', c: 'a noun phrase', w: ['the finite verb', 'an adjective only', 'a question word'], representation: 'dialogue' },
  { p: 'He denied ______ false information on the form.', c: 'having provided', w: ['have provide', 'provided having', 'to providing after deny'] },
  { p: 'Which sentence contains a perfect gerund as object?', c: 'Mai remembered having checked the fee.', w: ['Having checked the fee, Mai applied.', 'Checked the fee, Mai.', 'Mai has checking the fee.'] },
  { p: '______ the requirements, Linh prepared the documents.', c: 'Having read', w: ['Have read', 'Having reading', 'To readed'] },
  { p: 'A: “Which action happened first?” B: “In ‘Having compared, she chose’, ______ happened first.”', c: 'comparing', w: ['choosing', 'both have no sequence', 'the subject'], representation: 'dialogue' },
  { p: '______ enough information, he delayed his decision.', c: 'Not having found', w: ['Not have find', 'Having not finding', 'To not found'] },
  { p: 'Which Unit 7 sentence keeps the same logical subject in both clauses?', c: 'Having visited the college, Hoa completed her application.', w: ['Having visited the college, the deadline arrived.', 'Having compared, the fees were high.', 'Having applied, there was rain.'] },
  { p: 'Choose the perfect passive participle form.', c: 'Having been offered a scholarship, Minh accepted the place.', w: ['Having offered a scholarship, Minh was received.', 'Been having offered, Minh accepted.', 'To having offered, Minh accepted.'] },
  { p: 'Which sentence correctly distinguishes the two functions?', c: 'He regretted having waited, but having compared the routes, he made a choice.', w: ['Both phrases are finite verbs.', 'Neither phrase shows earlier time.', 'The first is a participle clause and the second an object.'] }
];
const passage1: QuestionStimulus = {
  id: 'eng11-stim-u7-reading-1', title: 'Comparing outcomes without misleading applicants',
  content: `A careers team compared two technology programmes: a three-year college diploma and a two-year apprenticeship. The college reported that 88 percent of graduates were employed, while the apprenticeship provider reported 94 percent. At first, students assumed the second route produced better results.

The adviser examined the definitions behind the figures. The college surveyed graduates twelve months after completion and counted only paid jobs lasting at least six months. The apprenticeship survey occurred three months after training and included learners who stayed temporarily with their training employer. Neither measure was wrong, but the percentages did not describe the same outcome.

Costs also required careful comparison. College students paid tuition but could apply for grants. Apprentices received wages, although pay varied and some travelled long distances to workplaces. The diploma offered a broader academic foundation; the apprenticeship provided more workplace practice. Employers in different roles valued these features differently.

The team created a comparison sheet showing definitions, timing, sample size, fees, support, qualifications and progression routes. Students then added personal priorities such as preferred learning style, location and target occupation. The exercise did not identify one universal winner. Instead, it showed that an informed decision depends on comparable evidence and individual goals. The careers team will update the sheet annually and contact providers when statistics lack clear definitions, helping future applicants distinguish a strong percentage from a genuinely useful comparison. The sheet also links applicants to official contacts so they can verify whether reported outcomes match the occupation and qualification they actually seek.`
};
const passage2: QuestionStimulus = {
  id: 'eng11-stim-u7-reading-2', title: 'A bridge course with hidden barriers',
  content: `A university introduced a foundation course for students who did not yet meet direct entry requirements. The course included academic writing, mathematics and study skills, and successful students could progress to selected degree programmes. Applications increased rapidly after the university advertised the new route.

During the first year, however, completion differed sharply between groups. Many students commuting from outer districts missed early classes because buses were unreliable. Others worked long evening shifts and struggled to attend support sessions. The official fee was lower than a degree fee, but transport, materials and reduced working hours created additional costs.

The university initially offered a time-management workshop. Student representatives argued that planning skills could not solve every structural barrier. In response, the course recorded key lectures, moved tutorials to several time slots, created a travel fund and published a full cost guide. Advisers also checked whether each target degree accepted the foundation qualification.

Completion improved the following year, although the university cautioned that several changes occurred together, so it could not attribute improvement to one measure. Surveys showed that flexible tutorials were especially valued, while the travel fund reached fewer students than expected because its application process was complex. The university simplified the form and scheduled another review. The case demonstrates that creating an entry route is not the same as making it accessible. Institutions must examine who can participate, what support reaches them, and whether progression promises are specific and verifiable. Future reports will compare participation and progression across income and travel groups.`
};
const passage3: QuestionStimulus = {
  id: 'eng11-stim-u7-reading-3', title: 'Testing a gap-year plan',
  content: `Trang wanted to take a gap year before applying for environmental science. She hoped to volunteer, improve English and save money. Her family worried that an unstructured year might delay her education without developing useful skills.

Rather than arguing about the label “gap year,” Trang wrote a plan. She identified a six-month paid job, a local weekend conservation project and an English examination date. She estimated income, transport costs and study time. A careers adviser checked that her intended universities accepted applications from students after a year away and asked how she would document learning.

After three months, the plan needed revision. Overtime at work reduced study time, and the conservation project offered fewer field activities during the rainy season. Trang negotiated a more predictable shift schedule and enrolled in a short data course. She kept evidence of tasks, feedback and reflections instead of assuming participation alone would impress admissions staff.

The family reviewed the plan using agreed criteria: savings, English progress, relevant experience, wellbeing and application deadlines. They did not require every target to be met exactly. They wanted evidence that Trang could notice problems and adjust responsibly. By the end of the year, she had saved less than first estimated but gained clearer knowledge of environmental work and submitted applications on time. The experience suggests that a gap year becomes educational through purposeful design, monitoring and reflection—not simply through the passage of time. Trang will use the same evidence to review her first university semester and revise future goals.`
};
const reading: Raw[] = [
  { p: 'Why could the two employment percentages not be compared directly?', c: 'The surveys used different timing and definitions.', w: ['One provider had no graduates.', 'Percentages cannot describe employment.', 'Both surveys measured identical outcomes.'], stimulus: passage1 },
  { p: 'What financial advantage did apprentices have?', c: 'They received wages during training.', w: ['They all travelled free.', 'They paid identical college fees.', 'They automatically received grants.'], stimulus: passage1 },
  { p: 'What did the comparison sheet add beyond employment rates?', c: 'Definitions, costs, qualifications, progression and personal priorities', w: ['Only provider logos', 'A universal ranking', 'Guaranteed job offers'], stimulus: passage1 },
  { p: 'What is the central lesson of passage 1?', c: 'Useful comparison needs equivalent evidence and learner-specific criteria.', w: ['The highest percentage is always best.', 'Academic study suits everyone.', 'Workplace learning has no costs.'], stimulus: passage1 },
  { p: 'Which hidden cost affected foundation students?', c: 'Transport, materials and reduced working hours', w: ['A compulsory overseas year', 'Buying university buildings', 'Paying employer wages'], stimulus: passage2 },
  { p: 'Why was a time-management workshop insufficient?', c: 'Some barriers came from transport, schedules and costs.', w: ['Students refused all planning.', 'The course had no timetable.', 'Study skills never help.'], stimulus: passage2 },
  { p: 'Why did the university avoid crediting one measure?', c: 'Several changes were introduced together.', w: ['Completion did not change.', 'No students answered surveys.', 'The university removed support.'], stimulus: passage2 },
  { p: 'Which inference best fits passage 2?', c: 'A pathway is accessible only when practical barriers and progression are addressed.', w: ['Advertising guarantees participation.', 'Low listed fees equal low total costs.', 'One route must accept every student.'], stimulus: passage2 },
  { p: 'How did Trang turn her gap-year idea into a plan?', c: 'She set activities, costs, study goals and checks.', w: ['She avoided all deadlines.', 'She relied on the label alone.', 'She promised not to revise anything.'], stimulus: passage3 },
  { p: 'What caused Trang to revise the plan?', c: 'Overtime and seasonal limits changed available study and field time.', w: ['Universities banned gap years.', 'Her family selected a degree for her.', 'The conservation project closed forever.'], stimulus: passage3 },
  { p: 'Why did she keep evidence and reflections?', c: 'Participation alone did not demonstrate what she had learned.', w: ['Admissions staff requested no information.', 'Evidence replaces all qualifications.', 'Reflection guarantees admission.'], stimulus: passage3 },
  { p: 'What counted as responsible progress for the family?', c: 'Monitoring results and adapting when conditions changed', w: ['Meeting every estimate exactly', 'Never asking for advice', 'Saving money as the only outcome'], stimulus: passage3 }
];
const writing: Raw[] = [
  { p: 'Choose the best order: (a) Compare entry, cost and learning model. (b) I am writing about your two offers. (c) Verify the qualification with both providers.', c: 'b-a-c', w: ['a-c-b', 'c-b-a', 'b-c-a'] },
  { p: 'Which opening best identifies purpose and reader need?', c: 'You asked whether the diploma or apprenticeship better supports your goal of becoming a technician.', w: ['Education has options.', 'Choose this immediately.', 'Brochures are colourful.'] },
  { p: 'Choose the connector: “The diploma is broader academically, ______ the apprenticeship offers more workplace practice.”', c: 'whereas', w: ['therefore', 'because of no cause', 'for example of time'] },
  { p: 'A: “What should a comparison use?” B: “______”', c: 'The same criteria for both options', w: ['Different definitions secretly', 'Only the highest percentage', 'One personal story'], representation: 'dialogue' },
  { p: 'Which sentence reports evidence cautiously?', c: 'The survey suggests stronger short-term employment, but its definition is limited.', w: ['The survey proves lifelong success.', 'One number settles every question.', 'Definitions never matter.'] },
  { p: 'Which detail is least relevant to course choice?', c: 'The brochure designer’s favourite food', w: ['Entry requirements', 'Total cost', 'Qualification awarded'] },
  { p: 'Select the best perfect-gerund transformation.', c: 'She regretted having ignored the deadline.', w: ['She regretted have ignored.', 'Having ignored, she regretted object.', 'She to regretted ignored.'] },
  { p: 'A: “How should I end the advice?” B: “______”', c: 'Suggest a verified next step while leaving the decision to the reader.', w: ['Order the reader to obey.', 'Claim one path fits all.', 'Omit practical checks.'], representation: 'dialogue' },
  { p: 'Which topic sentence best introduces fees, travel and lost work hours?', c: 'Applicants should compare total costs, not tuition alone.', w: ['Fees are numbers.', 'Travel uses roads.', 'Work has hours.'] },
  { p: 'Which revision avoids an unfair recommendation?', c: 'The course may suit learners who prefer structured academic study.', w: ['This is the best course for everyone.', 'All vocational routes are inferior.', 'No personal condition matters.'] },
  { p: 'Choose the clearest Unit 7 combination using a perfect participle clause.', c: 'Having checked the progression rules, Minh accepted the foundation place.', w: ['Checking after accepted having.', 'The rules having Minh accepted.', 'To checked, progression accepted.'] },
  { p: 'Which final sentence best supports an informed decision?', c: 'Before accepting, ask both providers to confirm costs, support and progression in writing.', w: ['Pick the famous name.', 'Ignore unanswered questions.', 'A friend can guarantee your fit.'] }
];
const communication: Raw[] = [
  { p: 'Which question should come before giving pathway advice?', c: 'What kind of work and learning environment interests you?', w: ['Why not copy my choice?', 'Which logo is brightest?', 'Can I decide for you?'] },
  { p: 'A: “I prefer practical learning.” B: “______”', c: 'You could investigate apprenticeships and compare their qualifications.', w: ['University is your only option.', 'Practical learning has no value.', 'Do not check providers.'], representation: 'dialogue' },
  { p: 'Which question clarifies affordability?', c: 'What total costs and financial support apply to you?', w: ['Is the campus sign blue?', 'Does the title rhyme?', 'Are all costs identical?'] },
  { p: 'A: “This course says 95% employed.” B: “______”', c: 'When was that measured, and what counted as employment?', w: ['The number proves everything.', 'Definitions are unnecessary.', 'Choose immediately.'], representation: 'dialogue' },
  { p: 'Which advice appropriately includes a condition?', c: 'A degree may be necessary if your target profession requires one.', w: ['Degrees always suit everyone.', 'Requirements never vary.', 'Only rankings matter.'] },
  { p: 'A: “My parents want to choose for me.” B: “______”', c: 'Could you discuss your goals and compare options together before you decide?', w: ['They must decide alone.', 'Hide all information.', 'Goals are irrelevant.'], representation: 'dialogue' },
  { p: 'Which response distinguishes evidence from experience?', c: 'My experience was positive, but check current official requirements.', w: ['My experience guarantees yours.', 'Official information never changes.', 'One story is complete evidence.'] },
  { p: 'A: “Should I take a gap year?” B: “______”', c: 'What would you aim to achieve, and how would you monitor it?', w: ['Time alone makes it educational.', 'No plan is needed.', 'Every gap year is identical.'], representation: 'dialogue' },
  { p: 'Which criterion concerns learning fit?', c: 'Preference for classroom study or workplace practice', w: ['Provider logo shape', 'Brochure paper', 'Course-name length'] },
  { p: 'A: “The cheaper course must be best.” B: “______”', c: 'Let’s compare total cost, quality, support and outcomes.', w: ['Listed fee is the only criterion.', 'Quality cannot be checked.', 'Support has no value.'], representation: 'dialogue' },
  { p: 'Which adviser action preserves learner agency?', c: 'Help the student rank criteria and verify information, then let them choose.', w: ['Submit an application without consent.', 'Choose based on the adviser’s career.', 'Remove alternatives.'] },
  { p: 'A: “I’m still uncertain.” B: “______”', c: 'Let’s list the unanswered questions for each provider’s open day.', w: ['Uncertainty means failure.', 'Guess now.', 'Stop gathering evidence.'], representation: 'dialogue' }
];
export const g11EnglishModule7Questions: CourseQuestion[] = [
  ...build('pronunciation', 'language', pronunciation, ['yes-no', 'wh-context']),
  ...build('vocabulary', 'language', vocabulary, ['meaning-word-form', 'education-collocation']),
  ...build('grammar', 'language', grammar, ['perfect-gerund', 'perfect-participle']),
  ...build('reading', 'reading', reading, ['main-detail', 'infer-evaluate']),
  ...build('writing', 'writing', writing, ['order-cohesion', 'transform-advice']),
  ...build('communication', 'communication-culture', communication, ['ask-advise', 'compare-agency'])
];
