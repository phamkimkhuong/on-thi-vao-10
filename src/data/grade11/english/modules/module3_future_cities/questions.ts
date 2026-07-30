import type { CourseQuestion } from '@/data/schema';
import type { PracticeRole, QuestionRepresentationType, QuestionStimulus } from '@/types';

type Choice = 'A' | 'B' | 'C' | 'D';
type Row = { content: string; options: [string, string, string, string]; answer: Choice; subTypeId: string; stimulus?: QuestionStimulus; representationType?: QuestionRepresentationType };
const roles: PracticeRole[] = ['guided', 'near_transfer', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'];
const difficulties: CourseQuestion['difficulty'][] = ['easy', 'easy', 'easy', 'easy', 'medium', 'medium', 'medium', 'medium', 'medium', 'hard', 'hard', 'hard'];
const build = (key: string, type: string, lesson: string, outcome: string, rows: Row[]): CourseQuestion[] =>
  rows.map((row, index) => ({
    id: `eng11-q-u3-${key}-${String(index + 1).padStart(2, '0')}`,
    courseId: 'grade11:english', moduleId: 'eng11-m3', lessonId: lesson,
    subjectId: 'english', topicId: 'eng11-topic-u3', questionTypeId: type,
    content: row.content, options: row.options, correctAnswer: row.answer,
    responseType: 'single_choice', validatorType: 'choice',
    difficulty: difficulties[index], points: 0.25, sourceType: 'manual', outcomeIds: [outcome],
    subTypeId: row.subTypeId, practiceRole: roles[index % 6],
    representationType: row.representationType ?? (index % 4 === 3 ? 'dialogue' : 'text'),
    isMasteryHoldout: index % 6 === 5, stimulus: row.stimulus
  }));

const pronunciationRows: Row[] = [
  { content: 'Which phrase contains consonant-to-vowel linking?', options: ['A. lives‿in', 'B. smart city', 'C. green roof', 'D. clean street'], answer: 'A', subTypeId: 'eng11-u3-pron-identify' },
  { content: 'In “cities of the future”, the most likely linking occurs between:', options: ['A. the / future', 'B. cities / of', 'C. of / the', 'D. cities / future'], answer: 'B', subTypeId: 'eng11-u3-pron-identify' },
  { content: 'Choose the correctly marked linking in “turn on the lights”.', options: ['A. turn / on', 'B. on‿the', 'C. turn‿on', 'D. the‿lights'], answer: 'C', subTypeId: 'eng11-u3-pron-identify' },
  { content: 'A: “Where is the link in ‘bus is electric’?” B: “Between ______.”', options: ['A. electric and silence', 'B. bus and bus', 'C. is and a consonant', 'D. bus‿is and is‿electric'], answer: 'D', subTypeId: 'eng11-u3-pron-identify', representationType: 'dialogue' },
  { content: 'Which word boundary can link in “make it accessible”?', options: ['A. make‿it', 'B. it / accessible only after a pause', 'C. make / accessible', 'D. no boundary'], answer: 'A', subTypeId: 'eng11-u3-pron-identify' },
  { content: 'In “an app for everyone”, which boundary clearly has final-consonant to initial-vowel linking?', options: ['A. an / app has vowel-vowel', 'B. for‿everyone', 'C. app / for has consonant-consonant', 'D. everyone / end'], answer: 'B', subTypeId: 'eng11-u3-pron-identify' },
  { content: 'Which pair normally does NOT create consonant-to-vowel linking?', options: ['A. move‿in', 'B. plan‿it', 'C. green park', 'D. turn‿off'], answer: 'C', subTypeId: 'eng11-u3-pron-boundary' },
  { content: 'A: “Should we link across a full stop?” B: “______”', options: ['A. Always', 'B. Only because it is written', 'C. Every consonant must link', 'D. Normally no, because the full stop creates a pause.'], answer: 'D', subTypeId: 'eng11-u3-pron-boundary', representationType: 'dialogue' },
  { content: 'Why can “make‿it” link although make ends with the letter e?', options: ['A. The final spoken sound is /k/.', 'B. Every letter e is a vowel sound.', 'C. It begins with a consonant.', 'D. Make has no final sound.'], answer: 'A', subTypeId: 'eng11-u3-pron-boundary' },
  { content: 'Which statement about linking is correct?', options: ['A. It depends only on spelling.', 'B. It depends on the actual sounds and absence of a pause.', 'C. It occurs only inside one word.', 'D. It changes the grammatical tense.'], answer: 'B', subTypeId: 'eng11-u3-pron-boundary' },
  { content: 'In “a safe and open space”, which boundary is most likely linked?', options: ['A. a / safe', 'B. safe / and because e is pronounced', 'C. safe‿and because safe ends in /f/', 'D. open / space'], answer: 'C', subTypeId: 'eng11-u3-pron-boundary' },
  { content: 'Which marking respects a pause in “The bus stopped. It opened its doors”?', options: ['A. stopped‿It', 'B. bus‿stopped', 'C. The‿bus', 'D. no link across stopped. / It, but opened‿its may link'], answer: 'D', subTypeId: 'eng11-u3-pron-boundary' }
];

const vocabularyRows: Row[] = [
  { content: 'Roads, water systems and power networks are parts of a city’s ______.', options: ['A. infrastructure', 'B. prediction', 'C. population alone', 'D. appliance'], answer: 'A', subTypeId: 'eng11-u3-vocab-meaning' },
  { content: 'A small device that detects movement, heat or pollution is a ______.', options: ['A. pedestrian', 'B. sensor', 'C. resident', 'D. district'], answer: 'B', subTypeId: 'eng11-u3-vocab-meaning' },
  { content: 'Traffic ______ occurs when too many vehicles use limited road space.', options: ['A. privacy', 'B. housing', 'C. congestion', 'D. energy'], answer: 'C', subTypeId: 'eng11-u3-vocab-meaning' },
  { content: 'A: “Who is a pedestrian?” B: “A person who is travelling ______.”', options: ['A. by train', 'B. by car', 'C. by plane', 'D. on foot'], answer: 'D', subTypeId: 'eng11-u3-vocab-meaning', representationType: 'dialogue' },
  { content: 'Housing described as ______ is reasonably priced for people with ordinary incomes.', options: ['A. affordable', 'B. renewable', 'C. congested', 'D. automatic'], answer: 'A', subTypeId: 'eng11-u3-vocab-meaning' },
  { content: 'Urban planners decide how land and services should be organised; this process is called city ______.', options: ['A. sensing', 'B. planning', 'C. commuting', 'D. emitting'], answer: 'B', subTypeId: 'eng11-u3-vocab-meaning' },
  { content: 'Solar and wind power are forms of ______ energy.', options: ['A. renewable', 'B. crowded', 'C. public', 'D. vertical'], answer: 'A', subTypeId: 'eng11-u3-vocab-collocation' },
  { content: 'Reliable ______ transport can reduce the number of private cars.', options: ['A. common', 'B. public', 'C. sharedly', 'D. urbanised'], answer: 'B', subTypeId: 'eng11-u3-vocab-collocation' },
  { content: 'Planting trees can help cities ______ carbon emissions and provide shade.', options: ['A. raise', 'B. create', 'C. reduce', 'D. consume up'], answer: 'C', subTypeId: 'eng11-u3-vocab-collocation' },
  { content: 'A: “What is the goal of the new metro?” B: “It should ______ traffic congestion.”', options: ['A. collect', 'B. develop', 'C. power', 'D. ease'], answer: 'D', subTypeId: 'eng11-u3-vocab-collocation', representationType: 'dialogue' },
  { content: 'Safe parks and accessible services can improve residents’ quality of ______.', options: ['A. life', 'B. living only as an adjective', 'C. lively', 'D. lifetime ticket'], answer: 'A', subTypeId: 'eng11-u3-vocab-collocation' },
  { content: 'The city installed air-quality ______ near schools to measure pollution.', options: ['A. infrastructures', 'B. sensors', 'C. pedestrians', 'D. congestions'], answer: 'B', subTypeId: 'eng11-u3-vocab-collocation' }
];

const grammarRows: Row[] = [
  { content: 'I ______ the new transport plan is practical.', options: ['A. think', 'B. am thinking', 'C. thinking', 'D. am think'], answer: 'A', subTypeId: 'eng11-u3-grammar-stative' },
  { content: 'The planning team ______ about several locations for the new station this week.', options: ['A. thinks permanently', 'B. is thinking', 'C. thinked', 'D. has think'], answer: 'B', subTypeId: 'eng11-u3-grammar-stative' },
  { content: 'The city ______ an efficient bus network.', options: ['A. is having now as possession', 'B. having', 'C. has', 'D. have been'], answer: 'C', subTypeId: 'eng11-u3-grammar-stative' },
  { content: 'A: “Why can’t I call Mai?” B: “She ______ a meeting with the architects now.”', options: ['A. has as possession', 'B. have', 'C. is had', 'D. is having'], answer: 'D', subTypeId: 'eng11-u3-grammar-stative', representationType: 'dialogue' },
  { content: 'The engineer ______ the material to check whether it is safe.', options: ['A. is feeling', 'B. feels a permanent opinion', 'C. feel', 'D. has feel'], answer: 'A', subTypeId: 'eng11-u3-grammar-stative' },
  { content: 'I ______ what you mean about protecting residents’ data.', options: ['A. am seeing', 'B. see', 'C. seeing', 'D. am see'], answer: 'B', subTypeId: 'eng11-u3-grammar-stative' },
  { content: 'The renovated square looks ______ at night.', options: ['A. attractively', 'B. attraction', 'C. attractive', 'D. attract'], answer: 'C', subTypeId: 'eng11-u3-grammar-linking' },
  { content: 'A: “How does the air near the park smell?” B: “It smells ______.”', options: ['A. cleanly', 'B. cleaning', 'C. cleanliness', 'D. clean'], answer: 'D', subTypeId: 'eng11-u3-grammar-linking', representationType: 'dialogue' },
  { content: 'After the street lights were repaired, the area became ______.', options: ['A. safer', 'B. safely', 'C. safety', 'D. save'], answer: 'A', subTypeId: 'eng11-u3-grammar-linking' },
  { content: 'The proposal seems ______, but the council still needs cost estimates.', options: ['A. practically', 'B. practical', 'C. practice', 'D. practicality'], answer: 'B', subTypeId: 'eng11-u3-grammar-linking' },
  { content: 'Choose the correct sentence about a temporary action and a state.', options: ['A. I am knowing the answer.', 'B. The city is owning the buses.', 'C. We are tasting the new water supply to check its quality.', 'D. The plan is seeming useful.'], answer: 'C', subTypeId: 'eng11-u3-grammar-linking' },
  { content: 'The smart benches feel ______, even after several hours in the sun.', options: ['A. comfortably', 'B. comfort', 'C. comforting manner', 'D. comfortable'], answer: 'D', subTypeId: 'eng11-u3-grammar-linking' }
];

const passage1: QuestionStimulus = {
  id: 'eng11-stim-u3-reading-1',
  title: 'A quieter street experiment',
  content: `A city district wanted to make one busy shopping street safer and quieter. Instead of permanently closing it to traffic immediately, planners ran a six-month experiment. Private cars could enter only during early delivery hours, while buses, bicycles, emergency vehicles, and people with mobility permits kept access throughout the day.

The district placed temporary seating and trees in several former parking spaces. It also widened pedestrian areas with removable barriers, allowing the design to be changed quickly. Sensors measured noise and vehicle speed, but researchers also interviewed shop workers, delivery drivers, residents, and visitors. This combination mattered because numbers alone could not explain why people avoided or enjoyed particular areas.

After three months, average traffic noise had fallen and more people were staying on the street in the evening. However, some nearby roads had become busier as drivers changed routes. Several small shops also reported difficult deliveries. In response, the district added two loading points and adjusted signal times on surrounding roads.

The experiment shows why temporary projects can be useful. They allow a city to observe consequences before spending heavily on permanent construction. Yet a trial is not automatically fair or successful. Officials still need to identify who receives the benefits, who carries new costs, and whether adjustments solve problems rather than merely moving them elsewhere. The final design will therefore be based on both measured changes and the experiences of different street users. A public report will compare the original goals with the final outcomes and explain why each permanent change was accepted.`
};
const passage2: QuestionStimulus = {
  id: 'eng11-stim-u3-reading-2',
  title: 'When a city builds a digital twin',
  content: `Some cities are developing digital twins: computer models that represent streets, buildings, transport systems, and environmental conditions. Planners can use these models to test possible changes before applying them in the physical city. For example, they may explore how a new tower could affect wind at street level or how closing a road might change bus travel times.

A useful digital twin needs current and reliable information. Sensors, surveys, maps, and service records can all contribute data. More data, however, does not always produce a better decision. Information collected for one purpose may be inaccurate for another, and neighbourhoods with fewer sensors may appear less important simply because less is known about them.

There are also questions about access and responsibility. If only technical specialists can understand the model, residents may struggle to challenge its assumptions. Some cities therefore publish simplified views and invite communities to compare the model with local experience. They also record where each dataset came from and how often it is updated.

A digital twin should be treated as a decision-support tool, not a machine that decides what a city must do. Models can reveal patterns and test scenarios, but they cannot determine social priorities by themselves. Choosing between faster traffic, cleaner air, affordable housing, and public space remains a political and community decision. The technology is most valuable when its limits are visible and its results form one part of a wider public discussion. Regular independent reviews can also reveal hidden errors and unequal effects over time.`
};
const passage3: QuestionStimulus = {
  id: 'eng11-stim-u3-reading-3',
  title: 'Cooling a neighbourhood fairly',
  content: `During increasingly hot summers, one neighbourhood recorded temperatures several degrees higher than nearby areas. It had few mature trees, large paved car parks, and many dark roofs that absorbed heat. Residents living in small upper-floor flats were especially affected because indoor temperatures remained high at night.

The city proposed planting street trees, installing shaded bus stops, and offering support for reflective roofs. At first, officials planned to begin wherever planting was easiest. Community groups argued that this approach would favour wider, wealthier streets and delay help for the hottest blocks. The city then combined temperature maps with information about age, housing conditions, and access to air conditioning.

This revised method identified priority locations, but implementation still required care. Young trees need years to provide full shade and require water during dry periods. Reflective roofs can reduce heat entering a building, yet landlords may not participate unless tenants receive clear protections. Shaded public spaces also need safe routes so that older residents can reach them.

The project illustrates that climate adaptation is not only a technical question. A city can measure heat accurately and still distribute protection unfairly. Effective planning must consider urgency, long-term maintenance, and the people least able to avoid the risk. The neighbourhood will publish annual results, including temperature changes and which households received support, so residents can judge both environmental impact and fairness. They will also survey residents during heatwaves, since lower outdoor readings do not necessarily mean that every home has become comfortable or safe enough.`
};

const readingRows: Row[] = [
  { content: 'What is the main purpose of the first passage?', options: ['A. To explain how a temporary street trial was measured and adjusted', 'B. To prove all cars should disappear immediately', 'C. To advertise one shopping centre', 'D. To show sensors replace interviews'], answer: 'A', subTypeId: 'eng11-u3-read-main-detail', stimulus: passage1 },
  { content: 'Why did researchers interview different street users?', options: ['A. To replace all traffic data', 'B. To understand experiences that numbers alone could not explain', 'C. To choose shop colours', 'D. To stop emergency access'], answer: 'B', subTypeId: 'eng11-u3-read-main-detail', stimulus: passage1 },
  { content: 'What unintended effect appeared after three months?', options: ['A. Buses stopped running', 'B. Trees were removed', 'C. Nearby roads became busier', 'D. Noise increased on the trial street'], answer: 'C', subTypeId: 'eng11-u3-read-main-detail', stimulus: passage1 },
  { content: 'What did the district do about delivery difficulties?', options: ['A. It ended all deliveries.', 'B. It removed pedestrians.', 'C. It closed nearby roads.', 'D. It added loading points.'], answer: 'D', subTypeId: 'eng11-u3-read-main-detail', stimulus: passage1 },
  { content: 'Which statement best summarises the central message of passage 2?', options: ['A. Digital twins help test scenarios but must remain transparent decision-support tools.', 'B. Computer models should make every city decision.', 'C. More data always guarantees fairness.', 'D. Residents should not see technical models.'], answer: 'A', subTypeId: 'eng11-u3-read-main-detail', stimulus: passage2 },
  { content: 'Why may neighbourhoods with fewer sensors appear less important?', options: ['A. They have no residents.', 'B. The model has less information about them.', 'C. They produce too much wind.', 'D. Their roads are always closed.'], answer: 'B', subTypeId: 'eng11-u3-read-main-detail', stimulus: passage2 },
  { content: 'The word “its” in “challenge its assumptions” refers to:', options: ['A. the physical street', 'B. the public meeting', 'C. the model', 'D. the neighbourhood'], answer: 'C', subTypeId: 'eng11-u3-read-infer-evidence', stimulus: passage2 },
  { content: 'What can be inferred about the writer’s view of technology in passage 2?', options: ['A. It is useless without perfect data.', 'B. It should be kept secret.', 'C. It can choose social priorities objectively.', 'D. It is valuable when combined with transparency and public judgement.'], answer: 'D', subTypeId: 'eng11-u3-read-infer-evidence', stimulus: passage2 },
  { content: 'What caused the neighbourhood to remain unusually hot?', options: ['A. Few trees, extensive paving and dark roofs', 'B. Too many shaded bus stops', 'C. Reflective roofs everywhere', 'D. A lack of temperature maps'], answer: 'A', subTypeId: 'eng11-u3-read-infer-evidence', stimulus: passage3 },
  { content: 'Why did community groups oppose starting wherever planting was easiest?', options: ['A. They disliked all trees.', 'B. It could delay help for the hottest, less advantaged blocks.', 'C. They wanted darker roofs.', 'D. It would protect tenants immediately.'], answer: 'B', subTypeId: 'eng11-u3-read-infer-evidence', stimulus: passage3 },
  { content: 'Which evidence will help residents evaluate fairness?', options: ['A. Only the number of city meetings', 'B. The colour of the maps', 'C. Information about which households received support', 'D. The names of tree species alone'], answer: 'C', subTypeId: 'eng11-u3-read-infer-evidence', stimulus: passage3 },
  { content: 'Which conclusion is best supported by the cooling project?', options: ['A. Accurate measurement automatically creates fair policy.', 'B. Climate adaptation requires only quick construction.', 'C. Landlords always protect tenants voluntarily.', 'D. Technical solutions must be paired with equitable priorities and maintenance.'], answer: 'D', subTypeId: 'eng11-u3-read-infer-evidence', stimulus: passage3 }
];

const writingRows: Row[] = [
  { content: 'Choose the best order: (a) As a result, buses became more reliable. (b) Buses were often delayed by private cars. (c) The city introduced a separate bus lane.', options: ['A. b-c-a', 'B. a-b-c', 'C. c-a-b', 'D. b-a-c'], answer: 'A', subTypeId: 'eng11-u3-write-order' },
  { content: 'Choose the best topic sentence for a paragraph comparing urban cooling solutions.', options: ['A. Trees have leaves.', 'B. Cities can reduce heat through several solutions, but each has different costs and timelines.', 'C. Yesterday was hot.', 'D. Therefore, roofs exist.'], answer: 'B', subTypeId: 'eng11-u3-write-order' },
  { content: 'Choose the connector: “Sensors provide useful traffic data. ______, they do not explain every traveller’s experience.”', options: ['A. Therefore', 'B. For example', 'C. However', 'D. As a result'], answer: 'C', subTypeId: 'eng11-u3-write-order' },
  { content: 'A: Arrange: (a) Finally, evaluate whether travel times actually fall. (b) First, identify the most congested routes. (c) Next, test adjusted bus frequencies.', options: ['A. a-b-c', 'B. c-a-b', 'C. b-a-c', 'D. b-c-a'], answer: 'D', subTypeId: 'eng11-u3-write-order', representationType: 'dialogue' },
  { content: 'Which sentence does NOT support a paragraph about accessible public transport?', options: ['A. The station roof is painted blue.', 'B. Step-free entrances help wheelchair users.', 'C. Clear signs help visitors navigate.', 'D. Affordable fares make travel available to more residents.'], answer: 'A', subTypeId: 'eng11-u3-write-order' },
  { content: 'Choose the best concluding sentence after discussing benefits and privacy risks of sensors.', options: ['A. Sensors are small devices.', 'B. The system is useful only if data collection remains limited, secure and accountable.', 'C. Cities have streets.', 'D. Privacy is spelled with seven letters.'], answer: 'B', subTypeId: 'eng11-u3-write-order' },
  { content: 'Choose the best combination: “The city added more buses. Waiting times fell.”', options: ['A. Although waiting times fell, no buses existed.', 'B. The city added buses unless time fell.', 'C. The city added more buses, so waiting times fell.', 'D. Waiting times fell because buses were removed.'], answer: 'C', subTypeId: 'eng11-u3-write-transform' },
  { content: 'A: “The plan is innovative. It may be too expensive for small districts.” Choose the best combination.', options: ['A. Because it is innovative, cost is impossible.', 'B. The plan is innovative and therefore free.', 'C. The plan is expensive unless innovative.', 'D. Although the plan is innovative, it may be too expensive for small districts.'], answer: 'D', subTypeId: 'eng11-u3-write-transform', representationType: 'dialogue' },
  { content: 'Choose the strongest topic sentence for details about buses, cycle lanes and walkable streets.', options: ['A. A balanced transport system offers residents several alternatives to private cars.', 'B. Cars have wheels.', 'C. My bicycle is green.', 'D. Walking uses feet.'], answer: 'A', subTypeId: 'eng11-u3-write-transform' },
  { content: 'Which revision expresses appropriate uncertainty?', options: ['A. The new app will certainly solve every traffic problem.', 'B. The new app may improve route planning if its data are accurate.', 'C. The app always makes cities perfect.', 'D. No evidence is needed.'], answer: 'B', subTypeId: 'eng11-u3-write-transform' },
  { content: 'Choose the clearest revision.', options: ['A. There are sensors that are sensing in a sensor way.', 'B. Data is data and it helps.', 'C. Traffic sensors help planners identify where delays occur.', 'D. Smart things are smart.'], answer: 'C', subTypeId: 'eng11-u3-write-transform' },
  { content: 'Choose the best final sentence for a proposal about a neighbourhood park.', options: ['A. Parks contain plants.', 'B. The proposal has four pages.', 'C. The neighbourhood has a name.', 'D. A shaded, accessible park would improve daily life while helping the area manage heat.'], answer: 'D', subTypeId: 'eng11-u3-write-transform' }
];

const communicationRows: Row[] = [
  { content: 'A: “Will autonomous buses completely remove congestion?” B: “______ They may help, but travel demand will still matter.”', options: ['A. Probably not.', 'B. Absolutely always.', 'C. Congestion is a noun.', 'D. No buses exist.'], answer: 'A', subTypeId: 'eng11-u3-comm-prediction', representationType: 'dialogue' },
  { content: 'A: “What might green roofs do?” B: “They ______ reduce indoor heat and manage rainwater.”', options: ['A. guarantee to', 'B. could', 'C. always must', 'D. certainly all'], answer: 'B', subTypeId: 'eng11-u3-comm-prediction', representationType: 'dialogue' },
  { content: 'Which statement makes a balanced prediction?', options: ['A. The system can never fail.', 'B. This technology will make everyone happy.', 'C. The metro is likely to reduce some car trips, although fares will affect use.', 'D. Data guarantees fairness.'], answer: 'C', subTypeId: 'eng11-u3-comm-prediction', representationType: 'text' },
  { content: 'A: “The city plans to move every service online.” B: “______ residents without reliable internet may be excluded.”', options: ['A. That is perfect because', 'B. It will never matter although', 'C. Digital is a word and', 'D. That could save time, but'], answer: 'D', subTypeId: 'eng11-u3-comm-prediction', representationType: 'dialogue' },
  { content: 'Which phrase signals a relatively likely, but not certain, outcome?', options: ['A. is likely to', 'B. is guaranteed to', 'C. always', 'D. cannot possibly'], answer: 'A', subTypeId: 'eng11-u3-comm-prediction', representationType: 'text' },
  { content: 'A: “Could sensors improve waste collection?” B: “______ if the routes are adjusted using reliable data.”', options: ['A. It is impossible', 'B. They might', 'C. They always have', 'D. No condition matters'], answer: 'B', subTypeId: 'eng11-u3-comm-prediction', representationType: 'dialogue' },
  { content: 'A: “The crossing is dangerous.” B: “______ installing a longer pedestrian signal?”', options: ['A. Why don’t we consider', 'B. We must ignore', 'C. It cannot be', 'D. There is no point'], answer: 'A', subTypeId: 'eng11-u3-comm-proposal', representationType: 'dialogue' },
  { content: 'A: “We could introduce an app-only bus ticket.” B: “______ we keep a cash or card option too.”', options: ['A. That cannot work unless nobody pays', 'B. That could work if', 'C. Apps are always fair because', 'D. Remove every alternative and'], answer: 'B', subTypeId: 'eng11-u3-comm-proposal', representationType: 'dialogue' },
  { content: 'Which proposal is the most inclusive?', options: ['A. Close the meeting to residents.', 'B. Ask only car owners.', 'C. Test the design with pedestrians, disabled users, drivers and nearby businesses.', 'D. Publish no results.'], answer: 'C', subTypeId: 'eng11-u3-comm-proposal', representationType: 'text' },
  { content: 'A: “How should we prioritise cooling projects?” B: “______”', options: ['A. Use the easiest locations only.', 'B. Avoid measuring heat.', 'C. Choose the wealthiest street.', 'D. We should combine heat data with residents’ vulnerability.'], answer: 'D', subTypeId: 'eng11-u3-comm-proposal', representationType: 'dialogue' },
  { content: 'Which response constructively adds a condition?', options: ['A. I support the plan provided that fares remain affordable.', 'B. The plan is either perfect or useless.', 'C. Do not discuss costs.', 'D. Everyone must agree immediately.'], answer: 'A', subTypeId: 'eng11-u3-comm-proposal', representationType: 'text' },
  { content: 'A: “Let’s make the street change permanent tomorrow.” B: “______ first, so we can examine effects on nearby roads?”', options: ['A. Why wait for no data', 'B. Could we review the trial evidence', 'C. Evidence is unnecessary', 'D. Tomorrow is a day'], answer: 'B', subTypeId: 'eng11-u3-comm-proposal', representationType: 'dialogue' }
];

export const g11EnglishModule3Questions: CourseQuestion[] = [
  ...build('pron', 'eng11-qt-u3-pronunciation', 'eng11-u3-language', 'eng11-out-u3-pronunciation', pronunciationRows),
  ...build('vocab', 'eng11-qt-u3-vocabulary', 'eng11-u3-language', 'eng11-out-u3-vocabulary', vocabularyRows),
  ...build('grammar', 'eng11-qt-u3-grammar', 'eng11-u3-language', 'eng11-out-u3-grammar', grammarRows),
  ...build('reading', 'eng11-qt-u3-reading', 'eng11-u3-reading', 'eng11-out-u3-reading', readingRows),
  ...build('writing', 'eng11-qt-u3-writing', 'eng11-u3-writing', 'eng11-out-u3-writing', writingRows),
  ...build('comm', 'eng11-qt-u3-communication', 'eng11-u3-communication-culture', 'eng11-out-u3-communication', communicationRows)
];
