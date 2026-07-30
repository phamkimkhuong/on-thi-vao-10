import type { CourseQuestion } from '@/data/schema';
import type { PracticeRole, QuestionRepresentationType, QuestionStimulus } from '@/types';

type Choice = 'A' | 'B' | 'C' | 'D';
type Row = {
  content: string;
  options: [string, string, string, string];
  answer: Choice;
  subTypeId: string;
  stimulus?: QuestionStimulus;
  representationType?: QuestionRepresentationType;
};

const roles: PracticeRole[] = ['guided', 'near_transfer', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'];
const difficulties: CourseQuestion['difficulty'][] = [
  'easy', 'easy', 'easy', 'easy',
  'medium', 'medium', 'medium', 'medium', 'medium',
  'hard', 'hard', 'hard'
];

const buildQuestions = (
  key: string,
  questionTypeId: string,
  lessonId: string,
  outcomeId: string,
  rows: Row[]
): CourseQuestion[] =>
  rows.map((row, index) => ({
    id: `eng11-q-u2-${key}-${String(index + 1).padStart(2, '0')}`,
    courseId: 'grade11:english',
    moduleId: 'eng11-m2',
    lessonId,
    subjectId: 'english',
    topicId: 'eng11-topic-u2',
    questionTypeId,
    content: row.content,
    options: row.options,
    correctAnswer: row.answer,
    responseType: 'single_choice',
    validatorType: 'choice',
    difficulty: difficulties[index],
    points: 0.25,
    sourceType: 'manual',
    outcomeIds: [outcomeId],
    subTypeId: row.subTypeId,
    practiceRole: roles[index % roles.length],
    representationType: row.representationType ?? (index % 4 === 3 ? 'dialogue' : 'text'),
    isMasteryHoldout: index % roles.length === 5,
    stimulus: row.stimulus
  }));

const pronunciationRows: Row[] = [
  {
    content: 'The contracted form “we’ll” stands for:',
    options: ['A. we will', 'B. we are', 'C. we have', 'D. we were'],
    answer: 'A',
    subTypeId: 'eng11-u2-pron-expand'
  },
  {
    content: 'In “They’ve agreed on the new rule,” “they’ve” means:',
    options: ['A. they would', 'B. they have', 'C. they are', 'D. they will'],
    answer: 'B',
    subTypeId: 'eng11-u2-pron-expand'
  },
  {
    content: 'The full form of “mustn’t” is:',
    options: ['A. must need', 'B. must have', 'C. must not', 'D. must be'],
    answer: 'C',
    subTypeId: 'eng11-u2-pron-expand'
  },
  {
    content: 'A: “What does ‘I’d’ mean in ‘I’d like to explain’?” B: “It means ______.”',
    options: ['A. I did', 'B. I had', 'C. I must', 'D. I would'],
    answer: 'D',
    subTypeId: 'eng11-u2-pron-expand',
    representationType: 'dialogue'
  },
  {
    content: 'In “She’s talking to her parents,” the full form of “she’s” is:',
    options: ['A. she is', 'B. she has', 'C. she does', 'D. she was'],
    answer: 'A',
    subTypeId: 'eng11-u2-pron-expand'
  },
  {
    content: 'In “He’s finished his homework,” the full form of “he’s” is:',
    options: ['A. he is', 'B. he has', 'C. he was', 'D. he does'],
    answer: 'B',
    subTypeId: 'eng11-u2-pron-expand'
  },
  {
    content: 'Choose the correct contracted sentence.',
    options: ['A. We not ready.', 'B. Were not ready.', 'C. We’re not ready.', 'D. We’nt ready.'],
    answer: 'C',
    subTypeId: 'eng11-u2-pron-context'
  },
  {
    content: 'A: “Is ‘can’t’ suitable in this formal notice?” B: “The full form ______ may be more formal.”',
    options: ['A. can', 'B. did not', 'C. should not', 'D. cannot'],
    answer: 'D',
    subTypeId: 'eng11-u2-pron-context',
    representationType: 'dialogue'
  },
  {
    content: 'Which sentence uses ’s to mean “has”?',
    options: ['A. Mai’s already spoken to her mother.', 'B. Mai’s very patient.', 'C. Mai’s at home.', 'D. Mai’s younger than Nam.'],
    answer: 'A',
    subTypeId: 'eng11-u2-pron-context'
  },
  {
    content: 'Which sentence CANNOT normally be contracted using ’ll?',
    options: ['A. I will call you.', 'B. We are ready.', 'C. She will understand.', 'D. They will arrive soon.'],
    answer: 'B',
    subTypeId: 'eng11-u2-pron-context'
  },
  {
    content: 'Choose the most appropriate form for a highly formal school regulation.',
    options: ['A. Students mustn’t enter.', 'B. Students can’t enter.', 'C. Students must not enter.', 'D. Students won’t enter.'],
    answer: 'C',
    subTypeId: 'eng11-u2-pron-context'
  },
  {
    content: 'A: “She’d left before the discussion began.” What does “she’d” mean here?',
    options: ['A. she did', 'B. she would', 'C. she should', 'D. she had'],
    answer: 'D',
    subTypeId: 'eng11-u2-pron-context',
    representationType: 'dialogue'
  }
];

const vocabularyRows: Row[] = [
  {
    content: 'A generation ______ may develop when family members of different ages have contrasting values.',
    options: ['A. gap', 'B. space', 'C. hole', 'D. distance away'],
    answer: 'A',
    subTypeId: 'eng11-u2-vocab-meaning'
  },
  {
    content: 'Honesty and respect are important family ______.',
    options: ['A. attitudes', 'B. values', 'C. behaviours', 'D. arguments'],
    answer: 'B',
    subTypeId: 'eng11-u2-vocab-meaning'
  },
  {
    content: 'The word “conflict” is closest in meaning to:',
    options: ['A. a family meal', 'B. a private room', 'C. a serious disagreement', 'D. a shared hobby'],
    answer: 'C',
    subTypeId: 'eng11-u2-vocab-meaning'
  },
  {
    content: 'A: “What does privacy mean?” B: “It is the right to keep personal matters ______.”',
    options: ['A. traditional', 'B. confident', 'C. similar', 'D. private'],
    answer: 'D',
    subTypeId: 'eng11-u2-vocab-meaning',
    representationType: 'dialogue'
  },
  {
    content: 'Her positive ______ towards older relatives helps her listen patiently to their stories.',
    options: ['A. attitude', 'B. behaviour', 'C. rule', 'D. conflict'],
    answer: 'A',
    subTypeId: 'eng11-u2-vocab-meaning'
  },
  {
    content: 'Checking a phone without permission is a type of ______, not merely an opinion.',
    options: ['A. value', 'B. behaviour', 'C. generation', 'D. tradition'],
    answer: 'B',
    subTypeId: 'eng11-u2-vocab-meaning'
  },
  {
    content: 'Parents and teenagers should try to ______ a compromise that both sides can accept.',
    options: ['A. reach', 'B. touch', 'C. arrive', 'D. catch'],
    answer: 'A',
    subTypeId: 'eng11-u2-vocab-collocation'
  },
  {
    content: 'Family members need to ______ one another’s privacy.',
    options: ['A. follow', 'B. respect', 'C. obey', 'D. perform'],
    answer: 'B',
    subTypeId: 'eng11-u2-vocab-collocation'
  },
  {
    content: 'Calm discussion can help families ______ conflicts before they become serious.',
    options: ['A. refuse', 'B. raise', 'C. resolve', 'D. divide'],
    answer: 'C',
    subTypeId: 'eng11-u2-vocab-collocation'
  },
  {
    content: 'A: “Why did your family meet?” B: “We wanted to ______ clear rules about device use.”',
    options: ['A. do', 'B. take', 'C. catch', 'D. set'],
    answer: 'D',
    subTypeId: 'eng11-u2-vocab-collocation',
    representationType: 'dialogue'
  },
  {
    content: 'Teenagers should be allowed to ______ their opinions respectfully.',
    options: ['A. express', 'B. reach', 'C. solve', 'D. follow'],
    answer: 'A',
    subTypeId: 'eng11-u2-vocab-collocation'
  },
  {
    content: 'Many families continue to ______ traditions while adapting them to modern life.',
    options: ['A. make', 'B. follow', 'C. reach', 'D. resolve'],
    answer: 'B',
    subTypeId: 'eng11-u2-vocab-collocation'
  }
];

const grammarRows: Row[] = [
  {
    content: 'I ______ remember to call Grandma tonight; it is very important to me.',
    options: ['A. must', 'B. should not', 'C. do not have to', 'D. must not'],
    answer: 'A',
    subTypeId: 'eng11-u2-grammar-obligation'
  },
  {
    content: 'Students ______ wear their school ID cards because the school rules require it.',
    options: ['A. should', 'B. have to', 'C. mustn’t', 'D. don’t have to'],
    answer: 'B',
    subTypeId: 'eng11-u2-grammar-obligation'
  },
  {
    content: 'You look exhausted. You ______ take a short break.',
    options: ['A. have to because of a law', 'B. mustn’t', 'C. should', 'D. don’t have to'],
    answer: 'C',
    subTypeId: 'eng11-u2-grammar-obligation'
  },
  {
    content: 'A: “Do we ______ submit the form today?” B: “Yes, it is the deadline.”',
    options: ['A. should to', 'B. must to', 'C. have', 'D. have to'],
    answer: 'D',
    subTypeId: 'eng11-u2-grammar-obligation',
    representationType: 'dialogue'
  },
  {
    content: 'Parents ______ listen before giving advice if they want an open conversation.',
    options: ['A. should', 'B. mustn’t', 'C. don’t have to', 'D. should to'],
    answer: 'A',
    subTypeId: 'eng11-u2-grammar-obligation'
  },
  {
    content: 'Because the bus service ends early, I ______ leave the club before six.',
    options: ['A. should not', 'B. have to', 'C. mustn’t', 'D. do not have to'],
    answer: 'B',
    subTypeId: 'eng11-u2-grammar-obligation'
  },
  {
    content: 'You ______ share your online password with anyone. It is unsafe.',
    options: ['A. don’t have to', 'B. should', 'C. mustn’t', 'D. have to'],
    answer: 'C',
    subTypeId: 'eng11-u2-grammar-negative'
  },
  {
    content: 'A: “Do I need to bring food?” B: “No, you ______. Lunch is provided.”',
    options: ['A. must not', 'B. should not', 'C. cannot', 'D. do not have to'],
    answer: 'D',
    subTypeId: 'eng11-u2-grammar-negative',
    representationType: 'dialogue'
  },
  {
    content: 'You ______ interrupt people while they are explaining their views.',
    options: ['A. should not', 'B. do not have to', 'C. must', 'D. have to'],
    answer: 'A',
    subTypeId: 'eng11-u2-grammar-negative'
  },
  {
    content: 'Which sentence means “It is not necessary for Minh to attend”?',
    options: ['A. Minh mustn’t attend.', 'B. Minh doesn’t have to attend.', 'C. Minh shouldn’t attend.', 'D. Minh cannot attend.'],
    answer: 'B',
    subTypeId: 'eng11-u2-grammar-negative'
  },
  {
    content: 'Choose the grammatically and semantically correct sentence about obligation.',
    options: ['A. You must to respect the rule.', 'B. You should to explain calmly.', 'C. You must not use this emergency exit except in an emergency.', 'D. You do not have respect others.'],
    answer: 'C',
    subTypeId: 'eng11-u2-grammar-negative'
  },
  {
    content: 'The museum entry is free, so visitors ______ buy a ticket, but they ______ touch the exhibits.',
    options: ['A. mustn’t / don’t have to', 'B. shouldn’t / have to', 'C. have to / should', 'D. don’t have to / mustn’t'],
    answer: 'D',
    subTypeId: 'eng11-u2-grammar-negative'
  }
];

const passage1: QuestionStimulus = {
  id: 'eng11-stim-u2-reading-1',
  title: 'A family technology agreement',
  content: `When the Tran family first tried to control phone use, they created a list of strict rules. The two teenagers felt that the rules treated them like young children, while their parents believed the limits were necessary. Arguments continued because each side discussed the rules only after someone had broken one.

The family later tried a different process. At a planned meeting, each person described one problem without interrupting the others. The parents were concerned that phones were reducing sleep and conversation. The teenagers explained that they used their devices for homework and to maintain friendships, not only for entertainment.

Instead of setting one limit for every situation, the family agreed on phone-free times and places. No one would use a phone during meals, and devices would charge outside bedrooms at night. However, the teenagers could request extra online time for school projects. The parents also accepted the same meal rule, which made the agreement feel fairer.

They also wrote down reasons for each rule, so a limit would not feel like an unexplained order. This detail helped everyone remember that the purpose was sleep, safety, and shared attention rather than control alone.

The new arrangement did not remove every disagreement. It did, however, give the family a shared method for solving them. They decided to review the agreement once a month and change rules that were not working. The main improvement came not from a perfect set of limits, but from allowing everyone to explain the needs behind their position.`
};

const passage2: QuestionStimulus = {
  id: 'eng11-stim-u2-reading-2',
  title: 'Different memories of the same age',
  content: `Adults sometimes compare teenagers’ lives with their own youth and conclude that young people have become less responsible. Such comparisons can be misleading because memory is selective. People may clearly remember the challenges they overcame while forgetting the help they received or the mistakes they made.

The environment has also changed. A teenager today may need to manage online communication, public social-media profiles, and a large flow of information. Their parents did not face these exact demands at the same age. This does not mean that current teenagers have harder lives in every way. Previous generations may have had fewer educational opportunities, stricter social expectations, or greater financial uncertainty.

Technology can even change the meaning of familiar behaviour: a teenager looking at a screen may be doing homework, receiving support from friends, or avoiding a difficult conversation, and the context matters greatly.

A fair comparison therefore requires curiosity rather than competition. Parents can ask how a new pressure affects their children, and teenagers can ask why an older experience shaped a family value. Both sides may then discover that a disagreement about behaviour is connected to a reasonable concern. A parent’s rule about spending, for example, may come from an earlier period of financial difficulty.

Recognising different contexts does not require families to accept every choice. It simply improves the quality of the discussion. When people examine the experiences behind an opinion, they are more likely to negotiate a practical rule than to dismiss the other generation as careless or old-fashioned.`
};

const passage3: QuestionStimulus = {
  id: 'eng11-stim-u2-reading-3',
  title: 'Reverse mentoring at a community centre',
  content: `A community centre created a reverse-mentoring programme in which teenagers helped older adults use digital services. In return, the older participants shared practical knowledge, such as budgeting, repairing household items, and preparing for job interviews. The organisers hoped that exchanging skills would reduce stereotypes between age groups.

At first, some teenagers assumed that every older learner would need the same basic instructions. They soon discovered wide differences: one participant had never used online banking, while another edited videos on a tablet. Older adults also had to adjust their expectations. A quiet teenager was not necessarily bored or disrespectful; she might simply be concentrating on the task.

The programme asked pairs to set one goal for each meeting and explain rather than take control of the device or activity. This rule slowed the first sessions but increased independence. Participants also discussed online safety. The teenagers contributed current technical knowledge, while older adults often asked careful questions about privacy and long-term consequences.

Attendance remained voluntary, and participants could change partners if their goals or communication styles did not match. This prevented the programme from treating cooperation as something that could simply be forced.

The organisers did not describe one generation as the teacher and the other as the student. Both roles changed throughout each session. By the end, many participants reported greater confidence in their own skills and more patience with people of a different age. The project suggests that direct cooperation can challenge generalisations more effectively than simply telling people not to hold them.`
};

const readingRows: Row[] = [
  {
    content: 'What is the main idea of the first passage?',
    options: ['A. A shared, flexible agreement improved how a family handled phone-use conflicts.', 'B. Teenagers should have unlimited online time.', 'C. Parents should make rules without discussion.', 'D. Phones should never be used for homework.'],
    answer: 'A',
    subTypeId: 'eng11-u2-read-main-detail',
    stimulus: passage1
  },
  {
    content: 'Why did the first set of rules fail?',
    options: ['A. They allowed too much homework.', 'B. The family discussed them mainly after a rule had been broken.', 'C. The parents had no concerns.', 'D. The teenagers did not own phones.'],
    answer: 'B',
    subTypeId: 'eng11-u2-read-main-detail',
    stimulus: passage1
  },
  {
    content: 'Which rule applied to both parents and teenagers?',
    options: ['A. No online school projects', 'B. No devices in the house', 'C. No phone use during meals', 'D. No monthly review'],
    answer: 'C',
    subTypeId: 'eng11-u2-read-main-detail',
    stimulus: passage1
  },
  {
    content: 'According to the passage, what produced the main improvement?',
    options: ['A. Buying newer phones', 'B. Removing all limits', 'C. Charging phones at school', 'D. Letting everyone explain the needs behind their view'],
    answer: 'D',
    subTypeId: 'eng11-u2-read-main-detail',
    stimulus: passage1
  },
  {
    content: 'What is the main purpose of passage 2?',
    options: ['A. To explain why comparisons between generations should consider different contexts', 'B. To prove that modern teenagers have the hardest lives', 'C. To show that memory is always accurate', 'D. To recommend accepting every choice'],
    answer: 'A',
    subTypeId: 'eng11-u2-read-main-detail',
    stimulus: passage2
  },
  {
    content: 'Which challenge of earlier generations is mentioned?',
    options: ['A. Too many social-media profiles', 'B. Fewer educational opportunities', 'C. Online banking fraud', 'D. Excessive video editing'],
    answer: 'B',
    subTypeId: 'eng11-u2-read-main-detail',
    stimulus: passage2
  },
  {
    content: 'The phrase “This does not mean” in passage 2 mainly prevents readers from concluding that:',
    options: ['A. memories can be selective', 'B. parents had no childhood', 'C. teenagers today have harder lives in every way', 'D. online communication exists'],
    answer: 'C',
    subTypeId: 'eng11-u2-read-infer-attitude',
    stimulus: passage2
  },
  {
    content: 'What can be inferred about the writer’s attitude in passage 2?',
    options: ['A. The writer blames only teenagers.', 'B. The writer wants families to avoid all rules.', 'C. The writer believes older experiences are irrelevant.', 'D. The writer supports curious, balanced discussion rather than competition.'],
    answer: 'D',
    subTypeId: 'eng11-u2-read-infer-attitude',
    stimulus: passage2
  },
  {
    content: 'Why was the programme called reverse mentoring?',
    options: ['A. Teenagers taught some digital skills while older adults also shared expertise.', 'B. Older adults completed all tasks for teenagers.', 'C. Participants met in reverse order.', 'D. The centre stopped all teaching.'],
    answer: 'A',
    subTypeId: 'eng11-u2-read-infer-attitude',
    stimulus: passage3
  },
  {
    content: 'What did participants learn about age groups?',
    options: ['A. Every older adult needed identical lessons.', 'B. Individuals within one generation had very different skills and behaviours.', 'C. Quiet teenagers were always bored.', 'D. Only teenagers understood privacy.'],
    answer: 'B',
    subTypeId: 'eng11-u2-read-infer-attitude',
    stimulus: passage3
  },
  {
    content: 'Why were pairs asked to explain rather than take control?',
    options: ['A. To make sessions shorter', 'B. To avoid setting goals', 'C. To help the learner become more independent', 'D. To prevent discussion of safety'],
    answer: 'C',
    subTypeId: 'eng11-u2-read-infer-attitude',
    stimulus: passage3
  },
  {
    content: 'Which conclusion about reverse mentoring is best supported by passage 3?',
    options: ['A. Stereotypes disappear after one conversation.', 'B. Technical knowledge is the only useful knowledge.', 'C. Generations should learn separately.', 'D. Cooperative experience can challenge stereotypes through direct evidence.'],
    answer: 'D',
    subTypeId: 'eng11-u2-read-infer-attitude',
    stimulus: passage3
  }
];

const writingRows: Row[] = [
  {
    content: 'Choose the best order: (a) Finally, they agreed on quiet study hours. (b) Lan and her brother often argued about noise. (c) They first explained when each person needed silence.',
    options: ['A. b-c-a', 'B. a-b-c', 'C. c-a-b', 'D. b-a-c'],
    answer: 'A',
    subTypeId: 'eng11-u2-write-order'
  },
  {
    content: 'Choose the best topic sentence for a paragraph about solving family disagreements.',
    options: ['A. Some tables are made of wood.', 'B. Respectful communication can turn disagreements into practical solutions.', 'C. Yesterday was Tuesday.', 'D. Therefore, this happened.'],
    answer: 'B',
    subTypeId: 'eng11-u2-write-order'
  },
  {
    content: 'Choose the connector: “Parents may worry about online safety. ______, teenagers may need the internet for schoolwork.”',
    options: ['A. Therefore', 'B. For example', 'C. However', 'D. As a result'],
    answer: 'C',
    subTypeId: 'eng11-u2-write-order'
  },
  {
    content: 'A: Arrange the paragraph: (a) As a result, both sides understood the problem better. (b) First, each person described their concern. (c) Then, they asked questions without interrupting.',
    options: ['A. a-b-c', 'B. c-b-a', 'C. b-a-c', 'D. b-c-a'],
    answer: 'D',
    subTypeId: 'eng11-u2-write-order',
    representationType: 'dialogue'
  },
  {
    content: 'Which sentence does NOT support the topic “Family rules should be reviewed regularly”?',
    options: ['A. My uncle owns a blue bicycle.', 'B. Children’s needs change as they grow.', 'C. A rule may create an unexpected problem.', 'D. Regular discussion helps families adjust unfair rules.'],
    answer: 'A',
    subTypeId: 'eng11-u2-write-order'
  },
  {
    content: 'Choose the best concluding sentence for a paragraph presenting two generations’ views and a compromise.',
    options: ['A. The first opinion belonged to the parents.', 'B. This solution respects both safety and growing independence.', 'C. Some teenagers are sixteen.', 'D. Families live in many countries.'],
    answer: 'B',
    subTypeId: 'eng11-u2-write-order'
  },
  {
    content: 'Choose the closest meaning: “It is necessary for students to follow the safety rule.”',
    options: ['A. Students should ignore the safety rule.', 'B. Students do not have to follow it.', 'C. Students have to follow the safety rule.', 'D. Students mustn’t follow it.'],
    answer: 'C',
    subTypeId: 'eng11-u2-write-transform'
  },
  {
    content: 'A: “It is not necessary for you to come early.” Which sentence is equivalent?',
    options: ['A. You mustn’t come early.', 'B. You shouldn’t come early.', 'C. You cannot come early.', 'D. You do not have to come early.'],
    answer: 'D',
    subTypeId: 'eng11-u2-write-transform',
    representationType: 'dialogue'
  },
  {
    content: 'Choose the closest meaning: “It is advisable to listen before responding.”',
    options: ['A. You should listen before responding.', 'B. You must not listen.', 'C. You do not have to listen.', 'D. You are forbidden to respond.'],
    answer: 'A',
    subTypeId: 'eng11-u2-write-transform'
  },
  {
    content: 'Choose the best combination: “The parents were worried. They listened to their daughter’s explanation.”',
    options: ['A. Because they listened, they were never worried.', 'B. Although the parents were worried, they listened to their daughter’s explanation.', 'C. The parents were worried unless they listened.', 'D. The parents listened so that they became worried.'],
    answer: 'B',
    subTypeId: 'eng11-u2-write-transform'
  },
  {
    content: 'Which revision is most constructive?',
    options: ['A. My parents are old-fashioned and wrong.', 'B. Parents never understand anything.', 'C. My parents and I have different views, so we need to discuss the reasons behind them.', 'D. There is no point in talking.'],
    answer: 'C',
    subTypeId: 'eng11-u2-write-transform'
  },
  {
    content: 'Choose the best final sentence for an email proposing a family discussion.',
    options: ['A. Emails use written words.', 'B. I have a family.', 'C. Rules are nouns.', 'D. Could we talk about this together after dinner tonight?'],
    answer: 'D',
    subTypeId: 'eng11-u2-write-transform'
  }
];

const communicationRows: Row[] = [
  {
    content: 'A: “In my view, family rules should apply to everyone.” B: “______ That makes them feel fairer.”',
    options: ['A. I completely agree.', 'B. I refuse to listen.', 'C. That is not a family.', 'D. Rules are words.'],
    answer: 'A',
    subTypeId: 'eng11-u2-comm-opinion',
    representationType: 'dialogue'
  },
  {
    content: 'A: “Teenagers should never question a family rule.” B: “______ Asking respectfully can help clarify its purpose.”',
    options: ['A. Exactly.', 'B. I’m not sure I agree.', 'C. That is impossible grammar.', 'D. Never speak again.'],
    answer: 'B',
    subTypeId: 'eng11-u2-comm-opinion',
    representationType: 'dialogue'
  },
  {
    content: 'Which sentence states an opinion politely?',
    options: ['A. Everyone else is stupid.', 'B. There is only one answer: mine.', 'C. From my perspective, both generations need to listen more carefully.', 'D. Stop disagreeing.'],
    answer: 'C',
    subTypeId: 'eng11-u2-comm-opinion',
    representationType: 'text'
  },
  {
    content: 'A: “Parents worry because they are responsible for safety.” B: “______ teenagers also need chances to make decisions.”',
    options: ['A. That sentence is long, and', 'B. You have no idea because', 'C. Safety does not exist, but', 'D. I see your point, but'],
    answer: 'D',
    subTypeId: 'eng11-u2-comm-opinion',
    representationType: 'dialogue'
  },
  {
    content: 'Which response disagrees with an idea rather than attacking the speaker?',
    options: ['A. I understand your concern; however, I think the rule is too broad.', 'B. You are completely unreasonable.', 'C. Only an old person would say that.', 'D. Your opinion is ridiculous.'],
    answer: 'A',
    subTypeId: 'eng11-u2-comm-opinion',
    representationType: 'text'
  },
  {
    content: 'A: “Young people do not value traditions.” B: “______ Many of us value them but express them differently.”',
    options: ['A. Traditions are old.', 'B. I don’t think that is true for everyone.', 'C. You must stop.', 'D. People are young.'],
    answer: 'B',
    subTypeId: 'eng11-u2-comm-opinion',
    representationType: 'dialogue'
  },
  {
    content: 'A: “We need more privacy.” B: “Do you mean you want us to knock before entering?” This response is used to:',
    options: ['A. clarify the speaker’s meaning', 'B. end the conversation', 'C. forbid privacy', 'D. change the topic'],
    answer: 'A',
    subTypeId: 'eng11-u2-comm-compromise',
    representationType: 'dialogue'
  },
  {
    content: 'A: “You want more freedom, and we are worried about safety.” B: “______ agreeing on a later weekend curfew first?”',
    options: ['A. Why did', 'B. How about', 'C. Must we', 'D. You cannot'],
    answer: 'B',
    subTypeId: 'eng11-u2-comm-compromise',
    representationType: 'dialogue'
  },
  {
    content: 'Which sentence asks for clarification most politely?',
    options: ['A. Speak clearly.', 'B. That makes no sense.', 'C. Could you explain what you mean by “responsible use”?', 'D. Do not use that phrase.'],
    answer: 'C',
    subTypeId: 'eng11-u2-comm-compromise',
    representationType: 'text'
  },
  {
    content: 'A: “I need quiet to study, but you want to practise music.” B: “______”',
    options: ['A. Music always wins.', 'B. Studying is your problem.', 'C. We cannot discuss it.', 'D. Could we agree on separate times for both activities?'],
    answer: 'D',
    subTypeId: 'eng11-u2-comm-compromise',
    representationType: 'dialogue'
  },
  {
    content: 'Which proposal is a genuine compromise?',
    options: ['A. Phones stay outside bedrooms on school nights, but weekend use can be discussed.', 'B. Only my preference matters.', 'C. No one explains any concern.', 'D. One side accepts every demand.'],
    answer: 'A',
    subTypeId: 'eng11-u2-comm-compromise',
    representationType: 'text'
  },
  {
    content: 'A: “Could we review this rule after a month?” B: “______ Then we can see whether it works.”',
    options: ['A. Reviews are difficult words.', 'B. That seems reasonable.', 'C. I will never discuss it.', 'D. A month has days.'],
    answer: 'B',
    subTypeId: 'eng11-u2-comm-compromise',
    representationType: 'dialogue'
  }
];

export const g11EnglishModule2Questions: CourseQuestion[] = [
  ...buildQuestions('pron', 'eng11-qt-u2-pronunciation', 'eng11-u2-language', 'eng11-out-u2-pronunciation', pronunciationRows),
  ...buildQuestions('vocab', 'eng11-qt-u2-vocabulary', 'eng11-u2-language', 'eng11-out-u2-vocabulary', vocabularyRows),
  ...buildQuestions('grammar', 'eng11-qt-u2-grammar', 'eng11-u2-language', 'eng11-out-u2-grammar', grammarRows),
  ...buildQuestions('reading', 'eng11-qt-u2-reading', 'eng11-u2-reading', 'eng11-out-u2-reading', readingRows),
  ...buildQuestions('writing', 'eng11-qt-u2-writing', 'eng11-u2-writing', 'eng11-out-u2-writing', writingRows),
  ...buildQuestions('comm', 'eng11-qt-u2-communication', 'eng11-u2-communication-culture', 'eng11-out-u2-communication', communicationRows)
];
