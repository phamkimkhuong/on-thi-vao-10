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
    const choices = [...row.w];
    choices.splice(position, 0, row.c);
    return {
      id: `eng11-q-u5-${key}-${String(index + 1).padStart(2, '0')}`,
      courseId: 'grade11:english', moduleId: 'eng11-m5', lessonId: `eng11-u5-${lesson}`,
      subjectId: 'english', topicId: 'eng11-topic-u5', questionTypeId: `eng11-qt-u5-${key}`,
      content: row.p, options: choices.map((option, optionIndex) => `${letters[optionIndex]}. ${option}`) as [string, string, string, string],
      correctAnswer: letters[position], responseType: 'single_choice', validatorType: 'choice',
      difficulty: difficulties[index], points: 0.25, sourceType: 'manual', outcomeIds: [`eng11-out-u5-${key}`],
      subTypeId: `eng11-u5-${key}-${index < 6 ? subTypes[0] : subTypes[1]}`,
      practiceRole: roles[index % 6], representationType: row.representation ?? (index % 4 === 3 ? 'dialogue' : 'text'),
      isMasteryHoldout: index % 6 === 5, stimulus: row.stimulus
    };
  });

const pronunciation: Raw[] = [
  { p: 'Which word normally carries the main stress in “Factories release harmful gases”?', c: 'harmful', w: ['the implied article', 'no word', 'a missing preposition'] },
  { p: 'In neutral speech, which item is most likely to be stressed?', c: 'emissions', w: ['the', 'of', 'to'] },
  { p: 'Which group mainly contains content words?', c: 'climate, reduce, serious', w: ['the, of, a', 'can, have, to', 'we, they, it'] },
  { p: 'A: “Why is ‘energy’ prominent in the sentence?” B: “Because it ______.”', c: 'carries important meaning', w: ['is always the last word', 'is a function word', 'has the fewest letters'], representation: 'dialogue' },
  { p: 'In “People can REDUCE waste”, why is reduce stressed?', c: 'It is the main verb carrying information.', w: ['It is an article.', 'It has no meaning.', 'Every auxiliary must be strongest.'] },
  { p: 'Function words are commonly weaker because they:', c: 'mainly express grammatical relationships', w: ['are always silent', 'are never necessary', 'cannot occur in questions'] },
  { p: 'In “We need SOLAR power, not coal”, SOLAR receives extra stress to:', c: 'mark a contrast', w: ['end the sentence', 'remove meaning', 'turn it into a function word'] },
  { p: 'A: “Did Lan propose buses?” B: “No, she proposed TRAINS.” The stress corrects:', c: 'the type of transport', w: ['the speaker’s name', 'the tense', 'the number of syllables'], representation: 'dialogue' },
  { p: 'Which statement about English rhythm is most accurate?', c: 'Unstressed syllables may be shortened between stressed beats.', w: ['Every syllable has equal force.', 'Rhythm depends only on spelling.', 'All short words disappear.'] },
  { p: 'To make “I said Tuesday, not Thursday” clear, the most useful contrastive stress is on:', c: 'Tuesday', w: ['I only', 'said only', 'the implied punctuation'] },
  { p: 'Why can a function word receive stress?', c: 'The speaker may contrast or correct it.', w: ['It becomes a noun permanently.', 'Grammar requires every function word to be loud.', 'It has four syllables.'] },
  { p: 'What is the safest strategy when marking sentence stress?', c: 'Use meaning and context to identify prominent information.', w: ['Stress every written word.', 'Stress only the longest spelling.', 'Ignore correction and contrast.'] }
];

const vocabulary: Raw[] = [
  { p: 'Gases that trap heat in the atmosphere are called:', c: 'greenhouse gases', w: ['renewable gases', 'weather walls', 'carbon roads'] },
  { p: 'The total emissions linked to an activity can be called its carbon:', c: 'footprint', w: ['fingerprint', 'shadowing', 'temperature'] },
  { p: 'Which term means adjusting to reduce harm from climate impacts?', c: 'adaptation', w: ['emission', 'combustion', 'prediction only'] },
  { p: 'A: “What is mitigation?” B: “It means ______.”', c: 'reducing emissions or increasing carbon removal', w: ['measuring one rainy day', 'ignoring future risk', 'moving every community'], representation: 'dialogue' },
  { p: 'Energy from sunlight and wind is generally described as:', c: 'renewable', w: ['fossilised', 'exhaustive weather', 'emissive'] },
  { p: 'A long-term rise in average sea level is called:', c: 'sea-level rise', w: ['sea-level mood', 'weather footprint', 'carbon adaptation'] },
  { p: 'Choose the correct collocation for climate action.', c: 'reduce emissions', w: ['do emissions', 'make emissions down', 'take greenhouse'] },
  { p: 'Countries can ______ to cleaner sources of energy.', c: 'switch', w: ['release at', 'cope into', 'emit from'] },
  { p: 'Forests can act as carbon ______ by absorbing carbon dioxide.', c: 'sinks', w: ['waves', 'storms', 'footprints only'] },
  { p: 'A: “How can coastal towns ______ rising seas?” B: “Through adaptation planning.”', c: 'cope with', w: ['release to', 'switch at', 'absorb on'], representation: 'dialogue' },
  { p: 'The noun needed in “Improved energy ______ lowers demand” is:', c: 'efficiency', w: ['efficient', 'efficiently', 'efficiencies adjective'] },
  { p: 'Which phrase refers to unusually severe climate-related events?', c: 'extreme weather', w: ['renewable climate', 'efficient carbon', 'greenhouse adaptation'] }
];

const grammar: Raw[] = [
  { p: '______ less electricity, households can lower their emissions.', c: 'Using', w: ['Used', 'Use', 'To used'] },
  { p: 'Walking to school, Minh ______ fuel and gets exercise.', c: 'saves', w: ['is saved by fuel', 'saving only', 'were save'] },
  { p: '______ the long-term data, researchers identified a warming trend.', c: 'Analysing', w: ['Analysed by the data', 'Analyse', 'To analysed'] },
  { p: 'A: “Why use ‘reducing’?” B: “Because the subject actively ______ waste.”', c: 'reduces', w: ['is reduced by', 'was reducing by itself only', 'has no link to'], representation: 'dialogue' },
  { p: 'Which sentence has a correct shared logical subject?', c: 'Cycling to work, Mai avoids traffic emissions.', w: ['Cycling to work, the rain began.', 'Cycling to work, the road was wet.', 'Cycling to work, there were clouds.'] },
  { p: 'Choose the clause showing two actions by the same subject.', c: 'Comparing the options, the council selected solar panels.', w: ['Compared the options, rain fell.', 'Comparing the options, the cost was high.', 'To comparing, the plan selected.'] },
  { p: '______ by rising water, several paths were temporarily closed.', c: 'Flooded', w: ['Flooding actively', 'Flood', 'To flooding'] },
  { p: 'A: “Why is ‘powered’ correct?” B: “Because the building is ______ by solar energy.”', c: 'powered', w: ['powering the sun', 'to power itself', 'powers'], representation: 'dialogue' },
  { p: '______ from local farms, the food requires less transport.', c: 'Sourced', w: ['Sourcing itself', 'Source', 'To sourcing'] },
  { p: 'Which sentence correctly uses a past participle clause?', c: 'Designed for hot weather, the roof keeps rooms cooler.', w: ['Designing for hot weather, the roof designer disappeared.', 'Designed the roof, it cooling.', 'To designed, rooms cool.'] },
  { p: 'Select the best reduction: “Because it was damaged by the storm, the bridge closed.”', c: 'Damaged by the storm, the bridge closed.', w: ['Damaging by the storm, the bridge closed.', 'Having damage the storm, the bridge closed.', 'To damage, the bridge closed.'] },
  { p: 'Which revision fixes the dangling clause “Driving home, the storm began”?', c: 'While we were driving home, the storm began.', w: ['Driving home, the storm was beginning us.', 'Driven home, the storm drove.', 'Driving the storm, home began.'] }
];

const passage1: QuestionStimulus = {
  id: 'eng11-stim-u5-reading-1', title: 'Cooling classrooms without shifting the problem',
  content: `A secondary school experienced increasingly uncomfortable classrooms during hot months. Its first proposal was to install air conditioners in every room. Students supported quick relief, but the facilities team examined electricity use before making a decision. The building had an old roof, little shade, and windows that admitted strong afternoon sunlight.

The school tested several measures in one block. Workers added external shades, repaired ventilation openings, coated part of the roof with a reflective material, and planted trees at a safe distance from foundations. Indoor sensors recorded temperature and humidity, while teachers noted when rooms felt uncomfortable. The school also installed efficient fans and allowed air conditioning only when temperature and humidity passed agreed thresholds.

After one term, the test rooms were cooler during most lessons and used less electricity than rooms relying mainly on air conditioning. However, results differed by location. Top-floor rooms still needed additional cooling on the hottest afternoons, and young trees provided limited shade. The team therefore avoided claiming that one design worked everywhere.

The project combined adaptation and mitigation. It protected students from heat while limiting extra electricity demand and associated emissions. Yet the report identified important conditions: filters and fans require maintenance, trees require water, and staff need clear guidance for operating equipment. The school will publish seasonal data and ask students whether comfort improved. This evidence will guide renovation of the remaining blocks instead of treating the pilot’s average result as a guarantee for every classroom. Student representatives will also review maintenance records publicly.`
};
const passage2: QuestionStimulus = {
  id: 'eng11-stim-u5-reading-2', title: 'A town measures its transport emissions',
  content: `A coastal town promised to reduce transport emissions, but officials first needed a reliable baseline. They counted vehicles on major roads, surveyed household travel, and used fuel-sales records. Each method had limits. Road counters missed some small streets, surveys depended on accurate memories, and fuel purchased in town was not always used there.

Instead of hiding these problems, the project published a range rather than one exact number. Researchers compared the sources and explained which journeys were included. They found that short motorbike trips were common, but many residents lacked safe walking routes or convenient buses. Simply telling people to change their behaviour would therefore ignore the conditions shaping their choices.

The town introduced connected footpaths near schools, more frequent buses on two busy routes, and secure bicycle parking. It also changed delivery times in the centre to reduce congestion. Six months later, bus use had risen, although total fuel sales had changed only slightly. Officials said the period was too short to establish a lasting emissions trend.

The programme illustrates why measurement and infrastructure must develop together. A baseline supports comparison, but uncertainty should remain visible. Behaviour campaigns may help, yet people need realistic alternatives. The next review will compare travel times, costs, road safety and estimated emissions across neighbourhoods. By examining who can use each option, the town hopes to avoid improving mobility in well-served areas while leaving outer communities with the same high-carbon choices. The results will be discussed at open neighbourhood meetings before further routes are redesigned.`
};
const passage3: QuestionStimulus = {
  id: 'eng11-stim-u5-reading-3', title: 'Restoring a wetland with local evidence',
  content: `For decades, a wetland beside a farming community had been drained by narrow channels. The drainage created more dry land but also reduced habitat, allowed salt water to move inland during storms, and released carbon stored in wet soil. A restoration group proposed blocking several channels and reintroducing native plants.

Farmers worried that rapid changes might flood fields or restrict access. The group therefore began with a small area and installed water-level gauges. Residents helped identify old flow paths and places where livestock crossed. Scientists measured plant recovery, soil conditions and greenhouse-gas exchange, while farmers recorded effects on wells and field edges.

During the first wet season, water remained longer in the test area and native birds returned. Some monitoring points showed lower carbon loss, but researchers warned that ecosystem carbon varies over time and cannot be judged from one season. One access path also became muddy, so the design was changed before work expanded.

The trial showed that restoring a carbon-rich ecosystem is not only a matter of planting vegetation. Hydrology, livelihoods, maintenance and land rights all influence results. Blocking every channel at once might have produced faster visible change, but it would also have increased risk and weakened local trust. The partners agreed on a staged plan with public monitoring reports and a process for reporting unexpected damage. Long-term success will be assessed through ecological recovery, net emissions, storm protection and whether neighbouring households can continue safe, viable livelihoods. Independent reviewers will check the measurements before each expansion decision.`
};

const reading: Raw[] = [
  { p: 'What is the main purpose of the classroom passage?', c: 'To show how a school tested combined cooling measures before wider renovation', w: ['To advertise one air-conditioner brand', 'To prove trees cool every room immediately', 'To reject temperature measurements'], stimulus: passage1 },
  { p: 'Why did the school examine electricity use?', c: 'Cooling choices could increase energy demand and emissions.', w: ['Electricity has no relation to cooling.', 'Students requested new lights.', 'The roof generated unlimited power.'], stimulus: passage1 },
  { p: 'What limitation remained in the pilot rooms?', c: 'Top-floor rooms still needed extra cooling at peak heat.', w: ['All fans failed permanently.', 'No temperatures were recorded.', 'Trees damaged the foundations.'], stimulus: passage1 },
  { p: 'Which evidence will guide the remaining renovations?', c: 'Seasonal measurements combined with student comfort reports', w: ['One afternoon observation', 'The colour of equipment', 'A guaranteed average without room differences'], stimulus: passage1 },
  { p: 'Why did the town publish an emissions range?', c: 'Every measurement source had limitations.', w: ['It collected no information.', 'Ranges always look smaller.', 'Officials wanted to hide methods.'], stimulus: passage2 },
  { p: 'What did the travel research reveal?', c: 'Many residents lacked practical low-carbon alternatives.', w: ['Every resident owned a bicycle.', 'All journeys were long flights.', 'Buses already reached every street.'], stimulus: passage2 },
  { p: 'Why was six months insufficient?', c: 'It was too short to establish a lasting emissions trend.', w: ['No buses were introduced.', 'Fuel cannot be measured.', 'A baseline never supports comparison.'], stimulus: passage2 },
  { p: 'What fairness question shapes the next review?', c: 'Whether people in different neighbourhoods can use the new options', w: ['Whether every bus has the same colour', 'Whether reports use short titles', 'Whether roads avoid all data'], stimulus: passage2 },
  { p: 'Why did the wetland group begin with a small area?', c: 'To monitor risks and adjust the design before expansion', w: ['To avoid community knowledge', 'To remove every channel immediately', 'To guarantee results in one day'], stimulus: passage3 },
  { p: 'What did residents contribute to the wetland project?', c: 'Knowledge of old water paths and livestock crossings', w: ['A ban on all monitoring', 'Only satellite images', 'A promise that flooding was impossible'], stimulus: passage3 },
  { p: 'Why did researchers avoid judging carbon after one season?', c: 'Ecosystem carbon exchange varies over time.', w: ['Wetlands contain no carbon.', 'Birds determine every measurement.', 'Soil cannot be monitored.'], stimulus: passage3 },
  { p: 'Which conclusion best follows from passage 3?', c: 'Restoration should integrate ecology, livelihoods, rights and long-term monitoring.', w: ['Fast visible change is the only goal.', 'Local trust reduces scientific quality.', 'Planting alone guarantees every outcome.'], stimulus: passage3 }
];

const writing: Raw[] = [
  { p: 'Choose the best order: (a) This raises flood risk. (b) Sea level is rising along the coast. (c) The town is restoring dunes and improving warnings.', c: 'b-a-c', w: ['a-c-b', 'c-b-a', 'b-c-a'] },
  { p: 'Which sentence is the clearest problem statement for a climate paragraph?', c: 'Summer heat is increasing health risks for older residents in the district.', w: ['Climate is a word.', 'Everything is terrible everywhere.', 'Residents exist.'] },
  { p: 'Choose the logical connector: “The bus network is limited. ______, many commuters still depend on private vehicles.”', c: 'As a result', w: ['In contrast to no cause', 'For example of a definition', 'Before that means purpose'] },
  { p: 'A: “What should follow evidence of hotter nights?” B: “______”', c: 'An explanation of impacts and a feasible response', w: ['An unrelated slogan', 'A new topic without a link', 'A claim that evidence is unnecessary'], representation: 'dialogue' },
  { p: 'Which sentence uses evidence with suitable caution?', c: 'The five-year record suggests that hot nights are becoming more frequent.', w: ['One night proves permanent change.', 'The record guarantees every future temperature.', 'No uncertainty can exist.'] },
  { p: 'Which detail is least relevant in a proposal for cooler classrooms?', c: 'The designer’s favourite song', w: ['Indoor temperature data', 'Electricity demand', 'Maintenance responsibilities'] },
  { p: 'Select the clearest participle-clause revision.', c: 'Using efficient lights, the school reduced electricity demand.', w: ['Used efficient lights, demand reduced school.', 'Using efficient lights, electricity was happy.', 'To used lights, school reducing.'] },
  { p: 'A: “How can I avoid a dangling clause?” B: “______”', c: 'Make sure the participle clause and main clause share a logical subject.', w: ['Always start with V3.', 'Delete the main subject.', 'Use any V-ing phrase.'], representation: 'dialogue' },
  { p: 'Choose the best topic sentence for a paragraph about buses, cycling paths and compact development.', c: 'Cities can reduce transport emissions through coordinated planning.', w: ['Buses have wheels.', 'Development has letters.', 'Every city is identical.'] },
  { p: 'Which Unit 5 revision reports the pilot without overclaiming?', c: 'The pilot may reduce peak electricity use if equipment is maintained.', w: ['The pilot solves climate change forever.', 'Maintenance never matters.', 'One result guarantees every building.'] },
  { p: 'Choose the clearest cause–effect combination.', c: 'Because dark roofs absorb heat, indoor temperatures can rise.', w: ['Dark roofs although temperature because.', 'Heat absorbs roofs therefore no link.', 'Indoor temperatures roof.'] },
  { p: 'Which final sentence best closes a balanced climate proposal?', c: 'Annual monitoring will show whether the measures cut emissions without reducing access.', w: ['The proposal has twelve lines.', 'Climate is important.', 'Success is already guaranteed.'] }
];

const communication: Raw[] = [
  { p: 'Which sentence makes a constructive climate suggestion?', c: 'We could test a weekly car-free zone near the school.', w: ['Cars are bad and discussion is over.', 'Do nothing forever.', 'Everyone must agree immediately.'] },
  { p: 'A: “Let’s install solar panels.” B: “______”', c: 'That could help. Could we compare cost, roof condition and expected output?', w: ['Evidence is irrelevant.', 'Solar means sunny.', 'No questions are allowed.'], representation: 'dialogue' },
  { p: 'Which question asks for evidence?', c: 'What data supports the estimated emissions reduction?', w: ['Is the poster green?', 'Who chose the font?', 'Does the title rhyme?'] },
  { p: 'A: “This is the cheapest option.” B: “______”', c: 'How effective is it, and who might bear additional costs?', w: ['Cheapest always means fairest.', 'No other criteria exist.', 'Cost has no meaning.'], representation: 'dialogue' },
  { p: 'Which response appropriately agrees with a condition?', c: 'I support the trial provided that its safety and access are monitored.', w: ['I agree without knowing the plan.', 'Monitoring must stop.', 'Safety is unrelated.'] },
  { p: 'A: “Individual choices are useless.” B: “______”', c: 'They can contribute, especially when infrastructure and policy make them practical.', w: ['Only individuals control power grids.', 'Systems never matter.', 'Both levels must be ignored.'], representation: 'dialogue' },
  { p: 'Which criterion best measures feasibility?', c: 'Available resources, time and implementation capacity', w: ['Poster brightness only', 'Number of slogans', 'Length of the project name'] },
  { p: 'A: “Should every household pay the same fee?” B: “______”', c: 'We should consider income and who receives the benefits.', w: ['Fairness means ignoring ability to pay.', 'All impacts are identical.', 'Benefits cannot be studied.'], representation: 'dialogue' },
  { p: 'Which statement distinguishes mitigation from adaptation?', c: 'Mitigation cuts drivers of warming; adaptation reduces harm from impacts.', w: ['Both mean recording weather.', 'Adaptation always increases emissions.', 'Mitigation is only emergency relief.'] },
  { p: 'A: “The pilot worked in one street, so it will work everywhere.” B: “______”', c: 'We need to check whether conditions are comparable before scaling it.', w: ['One case guarantees all results.', 'Context never matters.', 'Pilots need no evaluation.'], representation: 'dialogue' },
  { p: 'Which response identifies a trade-off?', c: 'The dam may provide low-carbon power but could disrupt habitats and livelihoods.', w: ['Every benefit has zero cost.', 'Energy projects affect nothing.', 'Trade-offs are only grammar.'] },
  { p: 'A: “How should we choose between the options?” B: “______”', c: 'Let’s compare emissions, resilience, cost, access and unintended effects.', w: ['Choose the shortest name.', 'Use one criterion secretly.', 'Assume all options are equal.'], representation: 'dialogue' }
];

export const g11EnglishModule5Questions: CourseQuestion[] = [
  ...build('pronunciation', 'language', pronunciation, ['content-stress', 'contrastive-stress']),
  ...build('vocabulary', 'language', vocabulary, ['meaning-word-form', 'climate-collocation']),
  ...build('grammar', 'language', grammar, ['present-participle', 'past-participle']),
  ...build('reading', 'reading', reading, ['main-detail', 'infer-evidence']),
  ...build('writing', 'writing', writing, ['order-cohesion', 'transform-evidence']),
  ...build('communication', 'communication-culture', communication, ['suggest-respond', 'evidence-tradeoff'])
];
