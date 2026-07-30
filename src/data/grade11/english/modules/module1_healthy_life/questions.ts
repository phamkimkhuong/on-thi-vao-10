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

const roles: PracticeRole[] = [
  'guided',
  'near_transfer',
  'misconception_check',
  'far_transfer',
  'retention',
  'mastery_holdout'
];
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
    id: `eng11-q-u1-${key}-${String(index + 1).padStart(2, '0')}`,
    courseId: 'grade11:english',
    moduleId: 'eng11-m1',
    lessonId,
    subjectId: 'english',
    topicId: 'eng11-topic-u1',
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
    content: 'In the neutral question “Do you exercise every morning?”, the auxiliary “do” is most likely pronounced in its:',
    options: ['A. weak form', 'B. strong form', 'C. past form', 'D. contracted negative form'],
    answer: 'A',
    subTypeId: 'eng11-u1-pron-weak'
  },
  {
    content: 'Which auxiliary is most likely unstressed in “Can Mai join the fitness class?”',
    options: ['A. Mai', 'B. can', 'C. join', 'D. class'],
    answer: 'B',
    subTypeId: 'eng11-u1-pron-weak'
  },
  {
    content: 'In “Have they finished the health survey?”, “have” normally carries:',
    options: ['A. contrastive stress', 'B. the main sentence stress', 'C. a weak form', 'D. a negative meaning'],
    answer: 'C',
    subTypeId: 'eng11-u1-pron-weak'
  },
  {
    content: 'A: “Could you walk to school today?” B: “I am not sure.” In A’s neutral question, “could” is usually:',
    options: ['A. omitted', 'B. strongly stressed', 'C. changed into can', 'D. weak and unstressed'],
    answer: 'D',
    subTypeId: 'eng11-u1-pron-weak',
    representationType: 'dialogue'
  },
  {
    content: 'Which statement best describes “was” in the question “Was he tired after the race?”',
    options: ['A. It is normally weak because it only forms the question.', 'B. It must be strong because it is in the past.', 'C. It is silent before a pronoun.', 'D. It is a main verb with lexical stress.'],
    answer: 'A',
    subTypeId: 'eng11-u1-pron-weak'
  },
  {
    content: 'Choose the context in which “has” is most likely weak.',
    options: ['A. “Who has?”', 'B. “Yes, she has.”', 'C. “Has Lan taken her medicine?”', 'D. “She HAS taken it, despite your doubt.”'],
    answer: 'C',
    subTypeId: 'eng11-u1-pron-weak'
  },
  {
    content: 'In the short answer “Yes, I do.”, “do” is normally pronounced in its:',
    options: ['A. weak form', 'B. strong form', 'C. infinitive marker', 'D. contracted form'],
    answer: 'B',
    subTypeId: 'eng11-u1-pron-strong'
  },
  {
    content: 'A: “Can you swim?” B: “Yes, I can.” Which occurrence of “can” is normally strong?',
    options: ['A. Neither occurrence', 'B. Both occurrences equally', 'C. The one in A’s question', 'D. The one in B’s short answer'],
    answer: 'D',
    subTypeId: 'eng11-u1-pron-strong',
    representationType: 'dialogue'
  },
  {
    content: 'Which sentence most clearly requires a strong form of the capitalised auxiliary?',
    options: ['A. HAVE you eaten?', 'B. She HAS finished, although you said she had not.', 'C. CAN he run?', 'D. WERE they late?'],
    answer: 'B',
    subTypeId: 'eng11-u1-pron-strong'
  },
  {
    content: 'In “I said I could finish, and I COULD,” the final “could” is strong mainly because it:',
    options: ['A. follows a pronoun', 'B. refers to the future', 'C. is contrasted and stands without a following main verb', 'D. begins a dependent clause'],
    answer: 'C',
    subTypeId: 'eng11-u1-pron-strong'
  },
  {
    content: 'A speaker stresses “DO” in “I DO eat vegetables” to:',
    options: ['A. correct or strongly confirm the statement', 'B. ask a neutral question', 'C. mark the past tense', 'D. shorten the sentence'],
    answer: 'A',
    subTypeId: 'eng11-u1-pron-strong'
  },
  {
    content: 'Which pair most naturally contrasts a weak form followed by a strong form?',
    options: ['A. “She runs” / “She walks”', 'B. “Healthy food” / “fresh food”', 'C. “Do you?” / “Do they?”', 'D. “Have you finished?” / “Yes, I have.”'],
    answer: 'D',
    subTypeId: 'eng11-u1-pron-strong',
    representationType: 'dialogue'
  }
];

const vocabularyRows: Row[] = [
  {
    content: 'A ______ diet provides the body with different nutrients in suitable amounts.',
    options: ['A. balanced', 'B. repeated', 'C. narrow', 'D. sleepy'],
    answer: 'A',
    subTypeId: 'eng11-u1-vocab-meaning'
  },
  {
    content: 'The body’s ______ system protects it against many infections.',
    options: ['A. living', 'B. immune', 'C. social', 'D. breathing'],
    answer: 'B',
    subTypeId: 'eng11-u1-vocab-meaning'
  },
  {
    content: 'Regular health checks can help doctors ______ a disease at an early stage.',
    options: ['A. decorate', 'B. replace', 'C. detect', 'D. perform'],
    answer: 'C',
    subTypeId: 'eng11-u1-vocab-meaning'
  },
  {
    content: 'A: “What does life expectancy mean?” B: “It is the average number of years a person is expected to ______.”',
    options: ['A. exercise', 'B. study', 'C. travel', 'D. live'],
    answer: 'D',
    subTypeId: 'eng11-u1-vocab-meaning',
    representationType: 'dialogue'
  },
  {
    content: 'Fresh fruit contains vitamins and other ______ that the body needs.',
    options: ['A. nutrients', 'B. symptoms', 'C. treatments', 'D. routines'],
    answer: 'A',
    subTypeId: 'eng11-u1-vocab-meaning'
  },
  {
    content: 'A fever and a persistent cough may be ______ of an infection.',
    options: ['A. habits', 'B. symptoms', 'C. ingredients', 'D. lifestyles'],
    answer: 'B',
    subTypeId: 'eng11-u1-vocab-meaning'
  },
  {
    content: 'Walking for thirty minutes a day can ______ your immune system.',
    options: ['A. boost', 'B. rise', 'C. enlarge', 'D. grow up'],
    answer: 'A',
    subTypeId: 'eng11-u1-vocab-collocation'
  },
  {
    content: 'To improve his health, Nam is trying to ______ the habit of staying up late.',
    options: ['A. build', 'B. break', 'C. catch', 'D. hold'],
    answer: 'B',
    subTypeId: 'eng11-u1-vocab-collocation'
  },
  {
    content: 'Experts recommend taking ______ exercise rather than exercising heavily once a month.',
    options: ['A. balanced', 'B. stable', 'C. regular', 'D. repeated'],
    answer: 'C',
    subTypeId: 'eng11-u1-vocab-collocation'
  },
  {
    content: 'A: “Why is Linh absent?” B: “She is ______ a severe cold.”',
    options: ['A. caring for', 'B. looking at', 'C. depending on', 'D. suffering from'],
    answer: 'D',
    subTypeId: 'eng11-u1-vocab-collocation',
    representationType: 'dialogue'
  },
  {
    content: 'Better sanitation and medical care have increased average life ______ in many countries.',
    options: ['A. expectancy', 'B. expectation', 'C. extension', 'D. experience'],
    answer: 'A',
    subTypeId: 'eng11-u1-vocab-collocation'
  },
  {
    content: 'The phrase “sedentary lifestyle” is closest in meaning to a way of life with:',
    options: ['A. a varied diet', 'B. very little physical activity', 'C. frequent travel', 'D. regular medical treatment'],
    answer: 'B',
    subTypeId: 'eng11-u1-vocab-collocation'
  }
];

const grammarRows: Row[] = [
  {
    content: 'My grandfather ______ smoking twenty years ago.',
    options: ['A. stopped', 'B. has stopped', 'C. stops', 'D. has been stopping'],
    answer: 'A',
    subTypeId: 'eng11-u1-grammar-time'
  },
  {
    content: 'Lan has followed this exercise routine ______ three months.',
    options: ['A. since', 'B. for', 'C. ago', 'D. last'],
    answer: 'B',
    subTypeId: 'eng11-u1-grammar-time'
  },
  {
    content: 'The school ______ a health workshop last Friday.',
    options: ['A. has organised', 'B. organises', 'C. organised', 'D. has been organising'],
    answer: 'C',
    subTypeId: 'eng11-u1-grammar-time'
  },
  {
    content: 'A: “Have you taken your medicine ______?” B: “Not yet.”',
    options: ['A. yesterday', 'B. last night', 'C. ago', 'D. yet'],
    answer: 'D',
    subTypeId: 'eng11-u1-grammar-time',
    representationType: 'dialogue'
  },
  {
    content: 'She ______ a vegetarian since she was sixteen.',
    options: ['A. has been', 'B. was', 'C. is', 'D. became'],
    answer: 'A',
    subTypeId: 'eng11-u1-grammar-time'
  },
  {
    content: 'We ______ our new PE teacher in September 2025.',
    options: ['A. have met', 'B. met', 'C. meet', 'D. have known'],
    answer: 'B',
    subTypeId: 'eng11-u1-grammar-time'
  },
  {
    content: 'I cannot join the run because I ______ my ankle.',
    options: ['A. injured', 'B. injure', 'C. have injured', 'D. was injuring'],
    answer: 'C',
    subTypeId: 'eng11-u1-grammar-context'
  },
  {
    content: 'A: “Where is Minh?” B: “He ______ to the pharmacy. He will be back soon.”',
    options: ['A. went', 'B. goes', 'C. was going', 'D. has gone'],
    answer: 'D',
    subTypeId: 'eng11-u1-grammar-context',
    representationType: 'dialogue'
  },
  {
    content: 'This is the first time I ______ a ten-kilometre race.',
    options: ['A. have completed', 'B. completed', 'C. complete', 'D. had completed'],
    answer: 'A',
    subTypeId: 'eng11-u1-grammar-context'
  },
  {
    content: 'When my mother was at university, she ______ for the college basketball team.',
    options: ['A. has played', 'B. played', 'C. has been playing', 'D. plays'],
    answer: 'B',
    subTypeId: 'eng11-u1-grammar-context'
  },
  {
    content: 'Choose the sentence that correctly contrasts Past Simple and Present Perfect.',
    options: ['A. I have visited the doctor yesterday.', 'B. I visited the doctor since Monday.', 'C. I have not eaten fast food for two months.', 'D. I did not drink soft drinks so far.'],
    answer: 'C',
    subTypeId: 'eng11-u1-grammar-context'
  },
  {
    content: 'The community clinic opened in 2020 and it ______ free check-ups ever since.',
    options: ['A. offered', 'B. offers yesterday', 'C. was offering', 'D. has offered'],
    answer: 'D',
    subTypeId: 'eng11-u1-grammar-context'
  }
];

const passage1: QuestionStimulus = {
  id: 'eng11-stim-u1-reading-1',
  title: 'Small changes that last',
  content: `Many teenagers decide to become healthier by changing everything at once. They plan to wake up at five, stop eating all sweet food, exercise every day, and sleep for exactly eight hours. Such plans may sound impressive, but they often disappear after a week because they demand too much attention and energy.

A more sustainable approach is to begin with one small behaviour. For example, a student who usually drinks very little water can put a bottle beside their schoolbag and drink some at each break. Once this action becomes automatic, the student can add another habit, such as walking for fifteen minutes after dinner. Small actions produce modest results at first, but they are easier to repeat. Repetition allows the brain to connect an action with a regular signal, such as finishing a meal or arriving home.

It is also useful to measure progress in a simple way. A calendar mark can show whether the action was completed, but it should not become a source of punishment. Missing one day does not destroy a habit. The important response is to continue at the next opportunity and consider why the plan failed that day.

Finally, a healthy routine needs to fit real life. A student preparing for an examination may have less time for sport, so a shorter walk may be more realistic than an hour at the gym. The most effective routine is not necessarily the most difficult one; it is the one a person can maintain over time.`
};

const passage2: QuestionStimulus = {
  id: 'eng11-stim-u1-reading-2',
  title: 'Sleep is active time',
  content: `People sometimes describe sleep as a period when the body does nothing. In fact, sleep is an active biological process. During different stages of sleep, the brain organises new information, the body repairs tissue, and several hormones are released. These activities help people learn, manage emotions, and recover after physical exercise.

Teenagers often need more sleep than they actually get. Homework, social media, entertainment, and early school schedules can reduce the number of hours available. Drinking coffee late in the day may make the problem worse because caffeine can remain active in the body for several hours. Even when a person falls asleep, an irregular schedule can make sleep less refreshing.

Researchers suggest creating a short routine before bedtime. Lowering bright lights, putting digital devices away, and doing a calm activity can signal that it is time to rest. Keeping roughly the same sleeping and waking times is also helpful. However, the advice should be applied flexibly. A rigid routine that causes anxiety defeats its own purpose.

Students can also notice patterns by recording bedtime, wake time, and daytime energy for a week, then changing only one factor instead of blaming every tired morning on a single cause. This simple record can make an invisible routine easier to discuss.

Good sleep cannot replace medical treatment, and persistent sleep problems should be discussed with a health professional. Nevertheless, daily choices can improve sleep quality for many people. Seeing sleep as an essential part of health—not as time stolen from study—may be the first useful change.`
};

const passage3: QuestionStimulus = {
  id: 'eng11-stim-u1-reading-3',
  title: 'A community garden prescription',
  content: `A neighbourhood clinic noticed that some older patients felt lonely and moved very little, although they did not need additional medicine. The clinic therefore worked with a local community garden. Doctors could invite suitable patients to join a weekly gardening group led by trained volunteers.

The programme was not presented as a cure. Instead, it offered a safe reason to leave home, meet other people, and perform light physical tasks. Participants planted herbs, watered vegetables, repaired small containers, and shared produce. Those with limited movement used raised beds and lighter tools. Volunteers were taught to recognise signs of tiredness and to encourage breaks.

Before joining, each participant met a clinic worker to discuss suitable tasks, transport, and existing treatment. This preparation helped volunteers adapt activities without making medical decisions that belonged to qualified professionals or excluding people unnecessarily.

After six months, many participants reported that they felt more connected to their neighbourhood. Some also said they walked more on non-gardening days because they had become more confident. The clinic did not claim that gardening alone caused every improvement. People who choose to join a group may already be motivated to change, and the social contact may be as important as the physical activity.

The project illustrates a broader idea: health support can extend beyond hospitals and medicine. When community activities are accessible and carefully supervised, they may complement professional care. They should not replace necessary treatment, but they can help people build routines that support both physical and emotional well-being.`
};

const readingRows: Row[] = [
  {
    content: 'What is the main idea of the passage?',
    options: ['A. Small, realistic habits are often easier to maintain than extreme plans.', 'B. Teenagers should exercise for one hour every day.', 'C. Calendars are the best tool for improving health.', 'D. Sweet food is the main cause of failed routines.'],
    answer: 'A',
    subTypeId: 'eng11-u1-read-main-detail',
    stimulus: passage1
  },
  {
    content: 'According to the passage, why do extreme health plans often disappear?',
    options: ['A. They do not produce any result.', 'B. They require too much attention and energy.', 'C. Teenagers dislike drinking water.', 'D. They are designed by teachers.'],
    answer: 'B',
    subTypeId: 'eng11-u1-read-main-detail',
    stimulus: passage1
  },
  {
    content: 'Which action is suggested as a simple way to measure progress?',
    options: ['A. Buying sports equipment', 'B. Joining a competition', 'C. Marking a calendar', 'D. Weighing yourself every hour'],
    answer: 'C',
    subTypeId: 'eng11-u1-read-main-detail',
    stimulus: passage1
  },
  {
    content: 'Which statement is true according to the passage?',
    options: ['A. Missing one day completely destroys a habit.', 'B. Difficult routines are always the most effective.', 'C. Students should never change their routines.', 'D. A routine should be adjusted to a person’s real situation.'],
    answer: 'D',
    subTypeId: 'eng11-u1-read-main-detail',
    stimulus: passage1
  },
  {
    content: 'Which title best summarises the second passage?',
    options: ['A. Why sleep is an essential and active part of health', 'B. How to study throughout the night', 'C. Why all teenagers need medicine', 'D. The history of digital devices'],
    answer: 'A',
    subTypeId: 'eng11-u1-read-main-detail',
    stimulus: passage2
  },
  {
    content: 'Which factor is NOT mentioned as reducing teenagers’ sleep?',
    options: ['A. Homework', 'B. Social media', 'C. Early school schedules', 'D. Gardening'],
    answer: 'D',
    subTypeId: 'eng11-u1-read-main-detail',
    stimulus: passage2
  },
  {
    content: 'The phrase “defeats its own purpose” in passage 2 means that a rigid routine may:',
    options: ['A. make sleep more expensive', 'B. create anxiety instead of helping rest', 'C. cause people to exercise more', 'D. replace medical treatment'],
    answer: 'B',
    subTypeId: 'eng11-u1-read-infer-reference',
    stimulus: passage2
  },
  {
    content: 'What can be inferred from passage 2?',
    options: ['A. Daily choices may help, but continuing problems require professional advice.', 'B. Everyone should follow exactly the same bedtime routine.', 'C. Sleep is less important than examination preparation.', 'D. Caffeine stops affecting the body immediately.'],
    answer: 'A',
    subTypeId: 'eng11-u1-read-infer-reference',
    stimulus: passage2
  },
  {
    content: 'Why did the clinic help create the gardening group?',
    options: ['A. To sell vegetables to patients', 'B. To replace all medical treatment', 'C. To offer social contact and light activity', 'D. To train patients as professional gardeners'],
    answer: 'C',
    subTypeId: 'eng11-u1-read-infer-reference',
    stimulus: passage3
  },
  {
    content: 'The word “They” in the final paragraph refers to:',
    options: ['A. hospitals', 'B. routines', 'C. professionals', 'D. community activities'],
    answer: 'D',
    subTypeId: 'eng11-u1-read-infer-reference',
    stimulus: passage3
  },
  {
    content: 'Why is the writer cautious about saying gardening caused every improvement?',
    options: ['A. Other factors, including motivation and social contact, may have contributed.', 'B. The garden did not produce any vegetables.', 'C. All participants stopped walking.', 'D. Doctors refused to observe the programme.'],
    answer: 'A',
    subTypeId: 'eng11-u1-read-infer-reference',
    stimulus: passage3
  },
  {
    content: 'Which conclusion about community health support is best supported by passage 3?',
    options: ['A. Medicine is unnecessary for older people.', 'B. Well-designed community activities can complement professional health care.', 'C. Gardening is the only useful form of exercise.', 'D. Every patient should receive the same activity.'],
    answer: 'B',
    subTypeId: 'eng11-u1-read-infer-reference',
    stimulus: passage3
  }
];

const writingRows: Row[] = [
  {
    content: 'Choose the best order: (a) As a result, she feels more energetic in class. (b) Lan started walking to school three months ago. (c) She now walks for about twenty minutes every morning.',
    options: ['A. b-c-a', 'B. a-b-c', 'C. c-a-b', 'D. b-a-c'],
    answer: 'A',
    subTypeId: 'eng11-u1-write-order'
  },
  {
    content: 'Choose the best sentence to begin a paragraph about healthy sleep habits.',
    options: ['A. For example, phones produce light.', 'B. Several simple habits can improve the quality of our sleep.', 'C. Therefore, I turned it off.', 'D. This also helps.'],
    answer: 'B',
    subTypeId: 'eng11-u1-write-order'
  },
  {
    content: 'Choose the most logical connector: “Minh often felt tired in the morning. ______, he decided to go to bed earlier.”',
    options: ['A. However', 'B. For example', 'C. Therefore', 'D. Meanwhile'],
    answer: 'C',
    subTypeId: 'eng11-u1-write-order'
  },
  {
    content: 'A: (a) First, prepare a realistic weekly plan. (b) Finally, review it and make small adjustments. (c) Next, record whether you completed each action. Choose the best order.',
    options: ['A. c-a-b', 'B. b-c-a', 'C. a-b-c', 'D. a-c-b'],
    answer: 'D',
    subTypeId: 'eng11-u1-write-order',
    representationType: 'dialogue'
  },
  {
    content: 'Which sentence does NOT support the topic “Regular physical activity benefits students”?',
    options: ['A. Some schools were built many years ago.', 'B. Exercise can improve concentration.', 'C. Team sports can develop cooperation.', 'D. Movement can reduce long periods of sitting.'],
    answer: 'A',
    subTypeId: 'eng11-u1-write-order'
  },
  {
    content: 'Choose the sentence that best concludes a paragraph describing several small health changes.',
    options: ['A. One change was drinking more water.', 'B. Together, these manageable changes have made my routine healthier.', 'C. My bottle is blue.', 'D. Last Monday was rainy.'],
    answer: 'B',
    subTypeId: 'eng11-u1-write-order'
  },
  {
    content: 'Choose the sentence closest in meaning: “I started doing yoga two years ago.”',
    options: ['A. I did yoga for two years and then stopped.', 'B. I have started yoga in two years.', 'C. I have done yoga for two years.', 'D. I do yoga two years ago.'],
    answer: 'C',
    subTypeId: 'eng11-u1-write-transform'
  },
  {
    content: 'A: “Mai last ate fast food in May.” Which sentence has the same meaning?',
    options: ['A. Mai has eaten fast food since May.', 'B. Mai ate only fast food in May.', 'C. Mai has never eaten fast food.', 'D. Mai has not eaten fast food since May.'],
    answer: 'D',
    subTypeId: 'eng11-u1-write-transform',
    representationType: 'dialogue'
  },
  {
    content: 'Choose the best topic sentence for supporting details about water, sleep and exercise.',
    options: ['A. Daily routines strongly influence our health.', 'B. Water is sold in many shops.', 'C. Yesterday I bought new shoes.', 'D. My school has three floors.'],
    answer: 'A',
    subTypeId: 'eng11-u1-write-transform'
  },
  {
    content: 'Choose the best combination: “Nam has a balanced diet. He still needs regular exercise.”',
    options: ['A. Because Nam has a balanced diet, he never exercises.', 'B. Although Nam has a balanced diet, he still needs regular exercise.', 'C. Nam has a balanced diet, so exercise is harmful.', 'D. Nam needs exercise unless he has a balanced diet.'],
    answer: 'B',
    subTypeId: 'eng11-u1-write-transform'
  },
  {
    content: 'Which revision is the clearest and most concise?',
    options: ['A. Exercise is good because exercise has benefits that are good.', 'B. Exercise, which is exercise, is beneficial.', 'C. Regular exercise supports both physical and mental health.', 'D. It is exercise that is something good in a good way.'],
    answer: 'C',
    subTypeId: 'eng11-u1-write-transform'
  },
  {
    content: 'Choose the best final sentence for an email asking a friend to join a weekend walk.',
    options: ['A. Walking has existed for a long time.', 'B. My shoes were expensive.', 'C. Health is a broad subject.', 'D. Let me know if you are free to join me on Saturday morning.'],
    answer: 'D',
    subTypeId: 'eng11-u1-write-transform'
  }
];

const communicationRows: Row[] = [
  {
    content: 'A: “I often feel tired after staying up late.” B: “______”',
    options: ['A. You should try going to bed earlier.', 'B. I stayed up last year.', 'C. That is not my book.', 'D. Do not mention health.'],
    answer: 'A',
    subTypeId: 'eng11-u1-comm-advice',
    representationType: 'dialogue'
  },
  {
    content: 'A: “Why don’t you take a short walk after dinner?” B: “______”',
    options: ['A. The dinner was short.', 'B. That sounds like a good idea.', 'C. I do not know why you walk.', 'D. No, you did not.'],
    answer: 'B',
    subTypeId: 'eng11-u1-comm-advice',
    representationType: 'dialogue'
  },
  {
    content: 'Which is the most polite advice to a classmate who is stressed?',
    options: ['A. Stop complaining.', 'B. You are doing everything wrong.', 'C. You could take a short break and talk to someone you trust.', 'D. You must obey me.'],
    answer: 'C',
    subTypeId: 'eng11-u1-comm-advice',
    representationType: 'text'
  },
  {
    content: 'A: “I want to eat more healthily, but I do not know where to start.” B: “______”',
    options: ['A. Health started yesterday.', 'B. I know where the shop is.', 'C. You ate at noon.', 'D. How about adding one portion of vegetables to dinner?”'],
    answer: 'D',
    subTypeId: 'eng11-u1-comm-advice',
    representationType: 'dialogue'
  },
  {
    content: 'A friend gives you useful health advice. Which response is most appropriate?',
    options: ['A. Thanks. I’ll give it a try.', 'B. You have no right to speak.', 'C. That question is blue.', 'D. I was not advice.'],
    answer: 'A',
    subTypeId: 'eng11-u1-comm-advice',
    representationType: 'text'
  },
  {
    content: 'A: “If I were you, I would speak to the school nurse.” B: “______”',
    options: ['A. Nurses are at school.', 'B. Thank you. I think I will.', 'C. You were me yesterday.', 'D. Speaking is a noun.'],
    answer: 'B',
    subTypeId: 'eng11-u1-comm-advice',
    representationType: 'dialogue'
  },
  {
    content: 'A: “Are you feeling better today?” B: “______”',
    options: ['A. Yes, much better, thanks.', 'B. Health is important.', 'C. I feel yesterday.', 'D. The question is long.'],
    answer: 'A',
    subTypeId: 'eng11-u1-comm-response',
    representationType: 'dialogue'
  },
  {
    content: 'A: “Would you like to join our morning run?” B: “______ I have an appointment then.”',
    options: ['A. That proves it.', 'B. I’d love to, but I can’t.', 'C. You must run.', 'D. Morning is before noon.'],
    answer: 'B',
    subTypeId: 'eng11-u1-comm-response',
    representationType: 'dialogue'
  },
  {
    content: 'A: “I have just completed my first five-kilometre run!” B: “______”',
    options: ['A. Never mind the distance.', 'B. I disagree with running.', 'C. Congratulations! That is a great achievement.', 'D. You completed it tomorrow.'],
    answer: 'C',
    subTypeId: 'eng11-u1-comm-response',
    representationType: 'dialogue'
  },
  {
    content: 'A: “Could you show me how to use this exercise machine safely?” B: “______”',
    options: ['A. Machines are made of metal.', 'B. You should know already.', 'C. I used it last month.', 'D. Certainly. Start by adjusting the seat.”'],
    answer: 'D',
    subTypeId: 'eng11-u1-comm-response',
    representationType: 'dialogue'
  },
  {
    content: 'Which sentence appropriately expresses concern?',
    options: ['A. You look unwell. Would you like me to call the nurse?', 'B. You always cause trouble.', 'C. Illness is an English noun.', 'D. Do not answer me.'],
    answer: 'A',
    subTypeId: 'eng11-u1-comm-response',
    representationType: 'text'
  },
  {
    content: 'A: “The doctor said I need to rest for a few days.” B: “______”',
    options: ['A. Doctors rest every day.', 'B. I hope you recover soon.', 'C. A few means three exactly.', 'D. You should ignore that.'],
    answer: 'B',
    subTypeId: 'eng11-u1-comm-response',
    representationType: 'dialogue'
  }
];

export const g11EnglishModule1Questions: CourseQuestion[] = [
  ...buildQuestions('pron', 'eng11-qt-u1-pronunciation', 'eng11-u1-language', 'eng11-out-u1-pronunciation', pronunciationRows),
  ...buildQuestions('vocab', 'eng11-qt-u1-vocabulary', 'eng11-u1-language', 'eng11-out-u1-vocabulary', vocabularyRows),
  ...buildQuestions('grammar', 'eng11-qt-u1-grammar', 'eng11-u1-language', 'eng11-out-u1-grammar', grammarRows),
  ...buildQuestions('reading', 'eng11-qt-u1-reading', 'eng11-u1-reading', 'eng11-out-u1-reading', readingRows),
  ...buildQuestions('writing', 'eng11-qt-u1-writing', 'eng11-u1-writing', 'eng11-out-u1-writing', writingRows),
  ...buildQuestions('comm', 'eng11-qt-u1-communication', 'eng11-u1-communication-culture', 'eng11-out-u1-communication', communicationRows)
];
