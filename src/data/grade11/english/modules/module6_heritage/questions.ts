import type { CourseQuestion } from '@/data/schema';
import type { PracticeRole, QuestionRepresentationType, QuestionStimulus } from '@/types';

type Choice = 'A' | 'B' | 'C' | 'D';
type Raw = { p: string; c: string; w: [string, string, string]; stimulus?: QuestionStimulus; representation?: QuestionRepresentationType };
const letters: Choice[] = ['A', 'B', 'C', 'D'];
const roles: PracticeRole[] = ['guided', 'near_transfer', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'];
const difficulties: CourseQuestion['difficulty'][] = ['easy', 'easy', 'easy', 'easy', 'medium', 'medium', 'medium', 'medium', 'medium', 'hard', 'hard', 'hard'];
const build = (key: string, lesson: string, rows: Raw[], subTypes: [string, string]): CourseQuestion[] =>
  rows.map((row, index) => {
    const position = index % 4;
    const choices = [...row.w]; choices.splice(position, 0, row.c);
    return {
      id: `eng11-q-u6-${key}-${String(index + 1).padStart(2, '0')}`,
      courseId: 'grade11:english', moduleId: 'eng11-m6', lessonId: `eng11-u6-${lesson}`,
      subjectId: 'english', topicId: 'eng11-topic-u6', questionTypeId: `eng11-qt-u6-${key}`,
      content: row.p, options: choices.map((option, optionIndex) => `${letters[optionIndex]}. ${option}`) as [string, string, string, string],
      correctAnswer: letters[position], responseType: 'single_choice', validatorType: 'choice',
      difficulty: difficulties[index], points: 0.25, sourceType: 'manual', outcomeIds: [`eng11-out-u6-${key}`],
      subTypeId: `eng11-u6-${key}-${index < 6 ? subTypes[0] : subTypes[1]}`,
      practiceRole: roles[index % 6], representationType: row.representation ?? (index % 4 === 3 ? 'dialogue' : 'text'),
      isMasteryHoldout: index % 6 === 5, stimulus: row.stimulus
    };
  });

const pronunciation: Raw[] = [
  { p: 'A neutral complete statement most commonly ends with:', c: 'falling intonation', w: ['a permanent rise', 'equal pitch on every word', 'no final tone'] },
  { p: 'Which sentence is most naturally spoken with a final fall?', c: 'The museum closes at five.', w: ['Are you ready?', 'Really?', 'Could it be open?'] },
  { p: 'A firm but polite command commonly has:', c: 'falling intonation', w: ['rising list intonation only', 'no stressed syllable', 'four final rises'] },
  { p: 'A: “How should ‘Please protect the exhibits’ end?” B: “With a ______ tone.”', c: 'falling', w: ['list-opening', 'never-ending rising', 'silent'], representation: 'dialogue' },
  { p: 'A final fall in a statement usually signals that:', c: 'the message is complete', w: ['another list item must follow', 'the speaker forgot the words', 'the sentence is a yes/no question'] },
  { p: 'Which interpretation is safest for intonation?', c: 'Tone interacts with purpose, attitude and context.', w: ['One tone has exactly one meaning always.', 'Spelling fully determines tone.', 'Commands cannot be polite.'] },
  { p: 'In “We collected maps, tools, and photographs”, the voice usually rises after:', c: 'maps', w: ['photographs only', 'the final full stop only', 'nothing in any list'] },
  { p: 'A: “Why does the voice rise on ‘masks’?” B: “To show ______.”', c: 'the list is not finished', w: ['the statement is false', 'masks are questions', 'the speaker is ending'], representation: 'dialogue' },
  { p: 'The final item in a completed list usually takes:', c: 'falling intonation', w: ['the same rise as every earlier item', 'no vowel', 'question grammar'] },
  { p: 'Which pattern best fits a three-item list?', c: 'rise – rise – fall', w: ['fall – fall – rise', 'rise – fall – rise', 'flat – flat – rise'] },
  { p: 'Why might a speaker rise on a normally falling statement?', c: 'To signal uncertainty or invite confirmation in context', w: ['Because all statements are questions', 'Because nouns require rising tone', 'To delete the final word'] },
  { p: 'What should learners do when interpreting intonation?', c: 'Combine the pitch pattern with grammar and communicative context.', w: ['Use pitch alone in every case.', 'Count letters only.', 'Assume all speakers sound identical.'] }
];
const vocabulary: Raw[] = [
  { p: 'Buildings and objects are examples of ______ heritage.', c: 'tangible', w: ['intangible only', 'oral-only', 'temporary spoken'] },
  { p: 'Traditional knowledge and performance are often ______ heritage.', c: 'intangible', w: ['concrete-only', 'architectural material', 'ticketed'] },
  { p: 'A person skilled in a traditional craft is an:', c: 'artisan', w: ['audience', 'archive building', 'admission'] },
  { p: 'A: “What does restoration mean?” B: “It is work to ______.”', c: 'return heritage fabric to a defined earlier state', w: ['erase all history', 'replace every old part automatically', 'increase ticket prices'], representation: 'dialogue' },
  { p: 'A threat to an old structure may be described as:', c: 'deterioration', w: ['transmission', 'awareness', 'craftsmanship'] },
  { p: 'The noun for protecting and managing cultural value is:', c: 'conservation', w: ['conserve adjective', 'conservatively site', 'conservering'] },
  { p: 'Choose the correct heritage collocation.', c: 'preserve cultural heritage', w: ['do cultural heritage', 'make heritage down', 'take a tradition'] },
  { p: 'Skills can be ______ from one generation to the next.', c: 'passed down', w: ['restored at', 'raised into', 'documented off'] },
  { p: 'A campaign can ______ awareness of an endangered tradition.', c: 'raise', w: ['do', 'pass', 'restore into'] },
  { p: 'A: “What should researchers do with oral histories?” B: “They can ______ them with consent.”', c: 'document', w: ['deteriorate', 'demolish', 'exclude'], representation: 'dialogue' },
  { p: 'Local residents should be actively ______ in preservation decisions.', c: 'involved', w: ['involvingly', 'involvement adjective', 'involve at'] },
  { p: 'Which phrase means preventing physical harm to a historic place?', c: 'protect the site from damage', w: ['pass the site down damage', 'raise the site', 'restore awareness from'] }
];
const grammar: Raw[] = [
  { p: 'The class visited the archive ______ original maps.', c: 'to examine', w: ['examining after to purpose', 'examined', 'to examining'] },
  { p: 'Volunteers raised funds ______ the damaged roof.', c: 'to repair', w: ['repairing as infinitive', 'repaired by funds', 'to repaired'] },
  { p: 'The museum added captions ______ access for more visitors.', c: 'to improve', w: ['improving after infinitive', 'improved', 'to improving'] },
  { p: 'A: “Why did they interview the artisan?” B: “______ her knowledge.”', c: 'To document', w: ['Documented by', 'To documenting', 'Documents'], representation: 'dialogue' },
  { p: 'It is important ______ community consent.', c: 'to obtain', w: ['obtaining after infinitive', 'obtained', 'to obtaining'] },
  { p: 'Residents were proud ______ their stories.', c: 'to share', w: ['sharing after infinitive', 'shared', 'to sharing'] },
  { p: 'The council approved a plan ______ the old gate.', c: 'to restore', w: ['restoring only after plan to', 'restored', 'to restoring'] },
  { p: 'A: “Do we have a place ______ the objects safely?” B: “Yes.”', c: 'to store', w: ['storing after place to', 'stored', 'to storing'], representation: 'dialogue' },
  { p: 'She was the first student ______ the master craftsperson.', c: 'to interview', w: ['interviewing after first', 'interviewed by first', 'to interviewing'] },
  { p: 'Which sentence uses a noun-modifying infinitive correctly?', c: 'We need a method to record the designs accurately.', w: ['We need a method recording after to.', 'A method to recorded exists.', 'We need to recording a method.'] },
  { p: 'Choose the correct form after the prepositional phrase “committed to”.', c: 'preserving', w: ['preserve', 'to preserve', 'preserved always'] },
  { p: 'Which sentence distinguishes purpose from a prepositional to correctly?', c: 'They met to plan the project and committed to consulting residents.', w: ['They met planning and committed to consult.', 'They met to planning and committed consult.', 'They met planned and committed to consulted.'] }
];

const passage1: QuestionStimulus = {
  id: 'eng11-stim-u6-reading-1', title: 'A community-controlled song archive',
  content: `A youth club wanted to record traditional songs remembered by older residents. Its first plan was to upload every performance to a public website. At a community meeting, several singers explained that some songs belonged to particular ceremonies, while others could be shared widely. Public access, they said, should not be treated as the default.

The club revised the project with a committee of singers, teachers and local historians. Before each recording, participants selected an access level: public, school-only, community-only, or temporarily closed. They could also choose how their names appeared and whether excerpts could be used in new educational materials. The archive recorded these decisions beside each file.

Young volunteers learned interviewing, audio editing and cataloguing, but community members remained responsible for cultural descriptions. When two accounts of a song’s origin differed, the catalogue preserved both instead of selecting one as the official version. The committee also scheduled annual reviews because permissions and community views might change.

The project produced fewer public recordings than the club originally expected. Nevertheless, it created a more trustworthy collection and encouraged several singers to participate who had initially refused. Success was measured through sound quality, accurate context, community control and use in local teaching—not simply the number of online views. The archive shows that digital preservation is not only copying information. It requires decisions about authority, consent, access, credit and future use if living heritage is to remain meaningful to the people who sustain it. The committee will also train new student archivists each year.`
};
const passage2: QuestionStimulus = {
  id: 'eng11-stim-u6-reading-2', title: 'Managing visitors at an old trading port',
  content: `An old trading port became popular after new transport links reduced travel time. Visitor spending supported guides, food stalls and family guesthouses, but crowded lanes made daily movement difficult for residents. Vibration from large vehicles also threatened fragile structures, and waste increased during holiday weekends.

The town initially considered a single daily visitor limit. Business owners worried that an inflexible cap would remove income even on quiet days. Residents argued that total numbers alone ignored where and when pressure occurred. The heritage office therefore collected hourly footfall, vehicle, waste and building-condition data across different zones.

The resulting plan moved coach parking outside the historic core, introduced timed entry for two narrow buildings, and created resident-only delivery periods. A small visitor fee funded waste collection and structural monitoring. Local guides helped explain why some areas required restrictions rather than presenting the rules as punishment.

After a year, peak crowding declined and cracks in one vulnerable building were no longer increasing, although researchers said longer observation was required. Some stalls near the former coach park lost passing customers, so the town supported a market beside the new walking route. The case demonstrates that heritage tourism has connected benefits and costs. Management must protect physical fabric and residential life while allowing viable local enterprise. Counting arrivals remains useful, but a sound assessment also asks where visitors go, how revenue is distributed, what damage changes, and whether residents retain access to their own neighbourhood. Future reports will include resident surveys alongside structural and economic indicators.`
};
const passage3: QuestionStimulus = {
  id: 'eng11-stim-u6-reading-3', title: 'Teaching a craft without freezing it',
  content: `A weaving cooperative had only six experienced artisans under the age of sixty. It opened weekend classes to pass techniques to teenagers, but early lessons focused on copying one historic pattern exactly. Several learners left because they could not see how the skill connected with their lives.

The artisans redesigned the programme. Beginners still learned fibre preparation, tool care and core weaving structures. After demonstrating these foundations, mentors invited students to create small objects for contemporary use and to explain their design choices. The cooperative documented both traditional patterns and new experiments, clearly labelling their different origins.

Some observers feared that innovation would weaken authenticity. The artisans responded that the craft had always changed with available materials, trade and community needs. In their view, preservation meant maintaining knowledge, standards and cultural relationships rather than producing identical objects forever. They also established rules preventing commercial partners from using community designs without permission or payment.

Attendance and completed products increased, but the cooperative did not rely on those numbers alone. It tracked whether learners could prepare materials independently, explain pattern meanings, follow safety practices and return as peer mentors. Experienced artisans reviewed quality, while students evaluated whether schedules and costs were accessible. The programme suggests that safeguarding living heritage requires continuity and room for responsible change. Transmission succeeds when learners gain real capability and when the people who hold the tradition retain authority over how knowledge is taught, adapted, credited and used. Graduates will help revise future lessons as materials and community needs change.`
};
const reading: Raw[] = [
  { p: 'Why did the song archive abandon automatic public access?', c: 'Some songs had cultural restrictions and required community decisions.', w: ['The club owned no recorder.', 'All singers wanted publicity.', 'Public websites cannot store audio.'], stimulus: passage1 },
  { p: 'What did participants choose before recording?', c: 'Access, naming and possible future uses', w: ['Only the file colour', 'A compulsory public licence', 'Which account would be deleted'], stimulus: passage1 },
  { p: 'Why were two origin accounts preserved?', c: 'The archive avoided imposing one official version where memories differed.', w: ['The catalogue had no editor.', 'Origins were unimportant.', 'Both accounts were identical.'], stimulus: passage1 },
  { p: 'What does passage 1 present as meaningful success?', c: 'A trustworthy collection with context, consent and community control', w: ['The highest possible view count', 'Publishing every song immediately', 'Removing annual review'], stimulus: passage1 },
  { p: 'Why was one fixed visitor cap considered insufficient?', c: 'Pressure varied by location and time, and livelihoods could be affected.', w: ['Visitor numbers were never counted.', 'Residents wanted unlimited coaches.', 'Buildings could not be monitored.'], stimulus: passage2 },
  { p: 'What funded waste collection and structural monitoring?', c: 'A small visitor fee', w: ['Song downloads', 'Artisan tuition', 'Private cars inside every lane'], stimulus: passage2 },
  { p: 'How did the town respond to losses near the old coach park?', c: 'It supported a market beside the new walking route.', w: ['It returned all coaches to narrow lanes.', 'It closed every stall.', 'It stopped collecting data.'], stimulus: passage2 },
  { p: 'Which inference best reflects the port case?', c: 'Good tourism management tracks distribution and impact, not arrivals alone.', w: ['More arrivals always protect buildings.', 'Restrictions have no economic effects.', 'Residents need no access.'], stimulus: passage2 },
  { p: 'Why did some learners leave the first weaving course?', c: 'Exact copying seemed disconnected from their lives.', w: ['No historic patterns existed.', 'Artisans refused to teach tools.', 'Classes allowed too much innovation.'], stimulus: passage3 },
  { p: 'What remained compulsory after the redesign?', c: 'Learning materials, tool care and core structures', w: ['Selling every new design', 'Copying one pattern forever', 'Giving designs to partners for free'], stimulus: passage3 },
  { p: 'How did artisans define preservation?', c: 'Maintaining knowledge, standards and relationships while allowing responsible change', w: ['Preventing every change', 'Maximising product numbers only', 'Removing community authority'], stimulus: passage3 },
  { p: 'Which measure shows transmission beyond attendance?', c: 'Learners can work independently, explain meaning and become mentors.', w: ['The poster received likes.', 'Every object looked identical.', 'The course used a weekend.'], stimulus: passage3 }
];

const writing: Raw[] = [
  { p: 'Choose the best order: (a) Moisture is damaging the wall paintings. (b) The temple contains rare nineteenth-century paintings. (c) The proposal will improve drainage and monitor humidity.', c: 'b-a-c', w: ['a-c-b', 'c-b-a', 'b-c-a'] },
  { p: 'Which is the clearest opening for a heritage project notice?', c: 'Applications are open for the community oral-history workshop on 14 March.', w: ['Hi, stuff happens!', 'History is old.', 'Come somehow.'] },
  { p: 'Select the connector: “Visitor income supports families. ______, unmanaged crowds can damage the site.”', c: 'However', w: ['Therefore with no contrast', 'For example of time', 'Because although'] },
  { p: 'A: “What belongs after the project purpose?” B: “______”', c: 'Participants, schedule, responsibilities and application steps', w: ['An unrelated joke', 'A guarantee of permanent success', 'No practical information'], representation: 'dialogue' },
  { p: 'Which statement best describes a measurable aim?', c: 'The project aims to train twenty learners and assess their skills after six months.', w: ['The project will save everything forever.', 'Heritage will become perfect.', 'Everyone will always agree.'] },
  { p: 'Which detail is least relevant in a restoration proposal?', c: 'The writer’s favourite sports team', w: ['Condition survey', 'Community consultation', 'Maintenance plan'] },
  { p: 'Choose the correct purpose clause.', c: 'The team scanned the documents to create backup copies.', w: ['The team scanned to creating.', 'Scanned documents, the team to copies.', 'The team to scanned copies.'] },
  { p: 'A: “How should I describe a realistic benefit?” B: “______”', c: 'Use “could help” and name the mechanism.', w: ['Promise eternal success.', 'Remove all conditions.', 'Use the strongest claim possible.'], representation: 'dialogue' },
  { p: 'Select the best topic sentence for details about consent, access levels and credit.', c: 'A responsible digital archive needs clear community governance.', w: ['Files have names.', 'Computers use power.', 'Songs can be short.'] },
  { p: 'Which revision gives the community an active role?', c: 'Community representatives will approve access rules and review them annually.', w: ['Experts will decide without consultation.', 'Residents will be informed after publication.', 'Permission is assumed.'] },
  { p: 'Choose the clearest combination.', c: 'To reduce vibration near the gate, the town moved coach parking outside the old quarter.', w: ['Vibration to moving coach because.', 'The gate moved to coach.', 'Outside because parking vibration.'] },
  { p: 'Which final sentence best closes a balanced preservation proposal?', c: 'Regular reviews will assess physical condition, community benefit and unintended effects.', w: ['Success needs no measurement.', 'The proposal ends here.', 'More visitors prove every goal.'] }
];
const communication: Raw[] = [
  { p: 'What is the most respectful question before recording a performance?', c: 'Would you be comfortable with us recording it, and how may it be used?', w: ['We will upload it now.', 'Permission is unnecessary.', 'Who owns the most views?'] },
  { p: 'A: “The community prefers restricted access.” B: “______”', c: 'Let us document that condition and design the archive accordingly.', w: ['Public access must override them.', 'Ignore the request.', 'Publish first and ask later.'], representation: 'dialogue' },
  { p: 'Which sentence makes a constructive preservation suggestion?', c: 'We could invite artisans to co-design the school workshops.', w: ['Students should copy without context.', 'Experts should exclude residents.', 'Traditions need no practitioners.'] },
  { p: 'A: “Can we photograph this object?” B: “______”', c: 'Please ask the custodian; photography is restricted during the ceremony.', w: ['Take it secretly.', 'All objects are public.', 'Rules never apply.'], representation: 'dialogue' },
  { p: 'Which response properly gives credit?', c: 'The catalogue names the artisan and follows the agreed wording.', w: ['The designer is omitted.', 'The school claims authorship.', 'Credit is replaced with a logo.'] },
  { p: 'A: “Tourism revenue increased.” B: “______”', c: 'That is useful, but how was it distributed and did site damage change?', w: ['Revenue proves every outcome.', 'Residents cannot be stakeholders.', 'Damage is irrelevant.'], representation: 'dialogue' },
  { p: 'Which question helps clarify cultural context?', c: 'Could you explain when and by whom this practice is traditionally used?', w: ['Why is it strange?', 'Can we remove its meaning?', 'Does context matter?'] },
  { p: 'A: “We cannot share this story publicly.” B: “______”', c: 'I understand. Would a community-only record be appropriate, or should we not record it?', w: ['We will share it anyway.', 'Secrecy proves it is unimportant.', 'Consent can be assumed.'], representation: 'dialogue' },
  { p: 'What is a fair role for outside specialists?', c: 'Provide expertise while decisions are made with rights-holders and communities.', w: ['Control every cultural decision.', 'Replace local knowledge.', 'Publish without review.'] },
  { p: 'A: “Innovation destroys authenticity.” B: “______”', c: 'Could we ask practitioners which changes maintain core knowledge and standards?', w: ['Only outsiders define authenticity.', 'Traditions never changed historically.', 'No evidence is needed.'], representation: 'dialogue' },
  { p: 'Which proposal addresses accessibility?', c: 'Offer free local sessions, translated materials and transport support.', w: ['Raise every fee.', 'Schedule only during work hours.', 'Remove captions.'] },
  { p: 'A: “How will we know the apprenticeship works?” B: “______”', c: 'Assess skills, understanding, continued practice and mentor feedback over time.', w: ['Count registrations only.', 'Use one photograph.', 'Assume success before teaching.'], representation: 'dialogue' }
];

export const g11EnglishModule6Questions: CourseQuestion[] = [
  ...build('pronunciation', 'language', pronunciation, ['statement-command', 'list-intonation']),
  ...build('vocabulary', 'language', vocabulary, ['meaning-word-form', 'heritage-collocation']),
  ...build('grammar', 'language', grammar, ['purpose-adjective', 'noun-modifier']),
  ...build('reading', 'reading', reading, ['main-detail', 'infer-stakeholder']),
  ...build('writing', 'writing', writing, ['order-cohesion', 'transform-proposal']),
  ...build('communication', 'communication-culture', communication, ['request-suggest', 'community-respect'])
];
