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
      id: `eng11-q-u8-${key}-${String(index + 1).padStart(2, '0')}`,
      courseId: 'grade11:english', moduleId: 'eng11-m8', lessonId: `eng11-u8-${lesson}`,
      subjectId: 'english', topicId: 'eng11-topic-u8', questionTypeId: `eng11-qt-u8-${key}`,
      content: row.p, options: choices.map((v, i) => `${letters[i]}. ${v}`) as [string, string, string, string],
      correctAnswer: letters[position], responseType: 'single_choice', validatorType: 'choice',
      difficulty: difficulties[index], points: 0.25, sourceType: 'manual', outcomeIds: [`eng11-out-u8-${key}`],
      subTypeId: `eng11-u8-${key}-${index < 6 ? subTypes[0] : subTypes[1]}`,
      practiceRole: roles[index % 6], representationType: row.representation ?? (index % 4 === 3 ? 'dialogue' : 'text'),
      isMasteryHoldout: index % 6 === 5, stimulus: row.stimulus
    };
  });
const pronunciation: Raw[] = [
  { p: 'Which sentence is an invitation that commonly uses an open rising tone?', c: 'Would you like to cook with us?', w: ['You cooked yesterday.', 'Close the door now.', 'Why did you cook?'] },
  { p: 'A friendly rising or fall-rise tone in an invitation helps:', c: 'leave space for the listener’s response', w: ['turn it into a command', 'remove politeness', 'guarantee acceptance'] },
  { p: 'Which sentence is a suggestion?', c: 'Why don’t we make a weekly plan?', w: ['You made the plan.', 'The plan is weekly.', 'Where is the plan?'] },
  { p: 'A: “How can ‘We could review it together’ sound collaborative?” B: “Use an ______ tone.”', c: 'open, non-final', w: ['abrupt command-only', 'unrelated flat written', 'angry final'], representation: 'dialogue' },
  { p: 'Which conclusion about invitation intonation is safest?', c: 'Tone, wording and relationship work together.', w: ['Rising tone guarantees politeness.', 'Please fixes every rude request.', 'Context never matters.'] },
  { p: 'A strong fall on a suggestion can make it sound more:', c: 'firm or directive', w: ['like an unfinished list only', 'like no message exists', 'grammatically past'] },
  { p: 'Which request is worded most politely?', c: 'Could you show me how to check this bill?', w: ['Check it.', 'You do this now.', 'Why have a bill?'] },
  { p: 'A: “May I borrow the guide?” B: “A gentle rise can signal ______.”', c: 'a genuine request for permission', w: ['a completed command', 'certain refusal', 'a past event'], representation: 'dialogue' },
  { p: 'Why may an urgent safety request use a strong falling tone?', c: 'Urgency can require a clear, firm instruction.', w: ['All requests are commands.', 'Politeness is forbidden.', 'Falling tone changes the verb tense.'] },
  { p: 'Which factor is least useful when judging request tone?', c: 'The colour of the written text', w: ['Urgency', 'Relationship', 'Modal wording'] },
  { p: 'What can make “Can you help?” less imposing?', c: 'An open tone and room to decline', w: ['A louder final fall always', 'Removing the question form', 'Assuming agreement'] },
  { p: 'How should learners interpret functional intonation?', c: 'Combine pitch, wording, purpose and context.', w: ['Use one fixed tone rule.', 'Count letters only.', 'Ignore speaker relationships.'] }
];
const vocabulary: Raw[] = [
  { p: 'The ability to rely on your own skills and judgement is:', c: 'self-reliance', w: ['procrastination', 'allowance', 'deadline'] },
  { p: 'Choosing which tasks matter most means setting:', c: 'priorities', w: ['expenses', 'consequences', 'instructions only'] },
  { p: 'A plan for income and spending is a:', c: 'budget', w: ['deadline', 'decision consequence', 'self-discipline'] },
  { p: 'A: “What is procrastination?” B: “It is ______.”', c: 'delaying tasks that should be done', w: ['asking for qualified help', 'tracking expenses', 'meeting deadlines'], representation: 'dialogue' },
  { p: 'Money spent on goods or services is called:', c: 'expenses', w: ['priorities', 'self-reliance', 'guidance'] },
  { p: 'Control over habits and actions is:', c: 'self-discipline', w: ['dependence fee', 'deadline budget', 'consequence plan'] },
  { p: 'Choose the correct collocation.', c: 'take responsibility for a decision', w: ['do responsibility at', 'make responsibility into', 'take decision for responsibility'] },
  { p: 'Students should ______ a realistic deadline for each step.', c: 'set', w: ['take into', 'meet on before setting', 'do'] },
  { p: 'Tracking every purchase helps you ______ a budget.', c: 'manage', w: ['procrastinate', 'deadline', 'priority from'] },
  { p: 'A: “I do not understand the contract.” B: “You should ______.”', c: 'ask for guidance', w: ['hide the problem', 'sign without reading', 'avoid qualified adults'], representation: 'dialogue' },
  { p: 'Which phrase means choosing on the basis of reliable information?', c: 'make an informed decision', w: ['take a random deadline', 'do a consequence', 'set an expense'] },
  { p: 'A responsible learner should ______ the consequences of a choice.', c: 'learn from', w: ['procrastinate at', 'budget into', 'prioritise away'] }
];
const grammar: Raw[] = [
  { p: 'Emphasise Lan: “Lan created the budget.”', c: 'It was Lan who created the budget.', w: ['It Lan was the budget.', 'Lan that created it was.', 'It created Lan who budget.'] },
  { p: 'Emphasise the object: “Minh forgot the deadline.”', c: 'It was the deadline that Minh forgot.', w: ['It the deadline forgot Minh.', 'The deadline who it forgot.', 'It was Minh that the deadline forgot.'] },
  { p: 'Which sentence correctly focuses on “my sister”?', c: 'It was my sister who taught me to cook.', w: ['It my sister was taught cook.', 'My sister that it taught.', 'It was taught who my sister.'] },
  { p: 'A: “Who prepared the documents?” B: “It was Nam ______ prepared them.”', c: 'who', w: ['where', 'when', 'what'], representation: 'dialogue' },
  { p: 'Which cleft keeps the past tense of the original?', c: 'It was Hoa who paid the bill.', w: ['It is Hoa who paid yesterday originally.', 'It be Hoa paid.', 'It were pay Hoa.'] },
  { p: 'Emphasise “this checklist” in “I use this checklist every week.”', c: 'It is this checklist that I use every week.', w: ['It this checklist is use.', 'This checklist who uses me.', 'It is I that this checklist uses.'] },
  { p: 'Emphasise time: “We reviewed the plan on Sunday.”', c: 'It was on Sunday that we reviewed the plan.', w: ['It Sunday who reviewed.', 'On Sunday it was plan.', 'It reviewed that Sunday.'] },
  { p: 'A: “Where did you learn budgeting?” B: “It was at school ______ I learnt it.”', c: 'that', w: ['who', 'what', 'whose'], representation: 'dialogue' },
  { p: 'Which sentence correctly focuses on “after dinner”?', c: 'It is after dinner that I plan the next day.', w: ['It after dinner who plan.', 'After dinner it plans me.', 'It is I after dinner that.'] },
  { p: 'Emphasise the reason phrase: “I called because I needed advice.”', c: 'It was because I needed advice that I called.', w: ['It called because advice who.', 'Because it was I needed called.', 'It was advice who because called.'] },
  { p: 'Which cleft preserves the meaning “Mai bought the laptop at the local shop”?', c: 'It was at the local shop that Mai bought the laptop.', w: ['It was the shop that bought Mai.', 'It is Mai where the laptop bought.', 'The laptop was Mai who shop.'] },
  { p: 'Which statement about It-clefts is correct?', c: 'The focus changes prominence, while the core event meaning is retained.', w: ['Clefting always changes tense.', 'Who must follow every object.', 'Any words can be moved without structure.'] }
];
const passage1: QuestionStimulus = {
  id: 'eng11-stim-u8-reading-1', title: 'A budgeting trial with fading support',
  content: `Mai received a monthly allowance for transport, lunches and personal expenses. During the first month, she spent most of it in two weeks and then borrowed money. Her parents considered taking control of every purchase, but they wanted her to develop budgeting skills rather than simply follow orders.

Together they listed fixed costs and estimated flexible spending. Mai chose weekly limits and recorded purchases in a simple app. At first, her father reminded her every evening. After two weeks, reminders moved to twice a week, then stopped. They reviewed the totals on Sundays, but Mai entered and classified the expenses herself.

The second month did not go perfectly. An unexpected school activity increased transport costs, and Mai exceeded one weekly limit. Instead of hiding the difference, she moved money from entertainment and updated the remaining weeks. She also created a small emergency category for future surprises.

By the third month, Mai no longer needed reminders and could explain why actual spending differed from her plan. Her parents still offered help with unfamiliar banking terms and potential scams. The family judged progress through accurate records, timely adjustments and safer decisions—not through never making a mistake. Their approach illustrates fading support: guidance is stronger while a skill is new and decreases as the learner demonstrates control. Independence grows when responsibility and suitable support change together, rather than when help disappears without regard to risk. Mai will repeat the review after any major change in allowance or travel needs, rather than assuming the system will remain suitable.`
};
const passage2: QuestionStimulus = {
  id: 'eng11-stim-u8-reading-2', title: 'Learning to manage a shared project',
  content: `Four students planned a school repair café where volunteers would help fix small household items. Their teacher offered a detailed checklist, but the group had to assign roles, contact volunteers, manage a small budget and report safety concerns.

At first, Long volunteered for every task because he believed independence meant doing the most work himself. Messages were delayed, receipts were lost and two volunteers received different arrival times. The group stopped and created a shared board showing each task, owner, deadline and status. Members agreed that asking for an update was not the same as taking over.

The teacher modelled how to make one safety checklist, then asked the students to adapt it. When they were uncertain about electrical repairs, they contacted a qualified technician rather than guessing. Students handled registration and publicity independently, while the technician approved equipment and supervised high-risk work.

After the event, the group reviewed more than attendance. They examined spending records, response times, repaired items, safety reports and volunteer feedback. Long had completed fewer individual tasks than in his original plan, yet the project was better coordinated. He concluded that responsibility includes delegation, communication and knowing when specialist help is necessary. The teacher retained the final safety authority but removed several planning prompts for the next event. The experience showed that independence in teamwork is not individual control over everything; it is reliable contribution within clear roles and boundaries. For the next event, students will rotate coordination roles and compare whether the revised board prevents earlier communication problems.`
};
const passage3: QuestionStimulus = {
  id: 'eng11-stim-u8-reading-3', title: 'A travel plan that included safety boundaries',
  content: `For a regional youth workshop, sixteen-year-old Huy wanted to organise his journey without his older brother. He compared train and bus times, calculated costs, checked the venue route and drafted a packing list. His family agreed that he would lead the planning but identified decisions requiring adult involvement.

Huy booked the approved ticket with a parent because the payment platform had age conditions. He saved emergency contacts offline, shared his itinerary and planned a check-in after arrival. Rather than choosing the cheapest connection, he rejected one that arrived after local transport stopped. He also confirmed the organiser’s safeguarding arrangements.

On travel day, a delayed train meant he would miss the final connection. Huy checked official updates, identified an earlier transfer and contacted both the organiser and his family before changing the route. He did not accept transport from an unknown person who approached passengers at the station.

After returning, Huy reviewed the difference between his estimated and actual costs and noted which information had been most useful. His brother had not managed the trip, but remained available for a high-risk problem. The family viewed this as supported independence, not failure. Huy had made ordinary decisions, communicated changes and followed agreed safety limits. The case suggests that becoming independent does not require removing every boundary. Clear escalation rules can allow young people to practise judgement while ensuring that unusual financial, legal or safety risks receive appropriate adult support. Huy also plans to teach the route-checking process to younger students under adult supervision.`
};
const reading: Raw[] = [
  { p: 'Why did Mai’s parents avoid controlling every purchase?', c: 'They wanted her to develop budgeting skill and responsibility.', w: ['They did not care about spending.', 'The app controlled all money.', 'Borrowing had no consequences.'], stimulus: passage1 },
  { p: 'How was support reduced?', c: 'Reminders became less frequent and then stopped.', w: ['Records were removed.', 'Her father classified every expense forever.', 'Reviews increased to every hour.'], stimulus: passage1 },
  { p: 'What did Mai do after an unexpected cost?', c: 'She reallocated money and revised later weeks.', w: ['She hid the expense.', 'She abandoned the budget.', 'She borrowed without recording it.'], stimulus: passage1 },
  { p: 'Which evidence best showed progress?', c: 'Accurate records, explanations and timely adjustments', w: ['Never facing surprises', 'Receiving no support at any risk level', 'Spending every category exactly'], stimulus: passage1 },
  { p: 'Why did Long’s first approach fail?', c: 'Taking every task caused poor coordination and lost information.', w: ['The group had too few tasks.', 'Volunteers refused all roles.', 'The teacher banned communication.'], stimulus: passage2 },
  { p: 'What did the shared board record?', c: 'Task, owner, deadline and status', w: ['Only attendance', 'Private opinions', 'The teacher’s favourite repairs'], stimulus: passage2 },
  { p: 'Why did students contact a technician?', c: 'Electrical work involved risks beyond their competence.', w: ['They wanted the technician to run publicity.', 'Students avoided every responsibility.', 'The repair café had no tools.'], stimulus: passage2 },
  { p: 'What did Long learn about responsibility?', c: 'It includes delegation, communication and seeking specialist help.', w: ['It means doing everything alone.', 'It is measured by task count only.', 'Clear roles reduce independence.'], stimulus: passage2 },
  { p: 'Which planning choice shows Huy considered safety, not just price?', c: 'He rejected a route arriving after local transport ended.', w: ['He chose the cheapest connection.', 'He removed emergency contacts.', 'He kept the itinerary secret.'], stimulus: passage3 },
  { p: 'What did Huy do when the train was delayed?', c: 'He checked official information and communicated before rerouting.', w: ['He accepted an unknown driver.', 'He stopped informing anyone.', 'He guessed without checking.'], stimulus: passage3 },
  { p: 'Why did the family call this supported independence?', c: 'Huy led normal decisions while adults remained available for high-risk issues.', w: ['His brother planned the entire trip.', 'No boundaries existed.', 'Huy made no decisions.'], stimulus: passage3 },
  { p: 'What broader lesson does Huy’s travel experience support?', c: 'Clear escalation rules can support autonomy and safety together.', w: ['Independence requires removing every boundary.', 'Asking for help always shows failure.', 'Lowest cost is the only criterion.'], stimulus: passage3 }
];
const writing: Raw[] = [
  { p: 'Choose the best order: (a) Review actual spending each Sunday. (b) My goal is to control monthly expenses. (c) Record every purchase in the app.', c: 'b-c-a', w: ['a-b-c', 'c-a-b', 'b-a-c'] },
  { p: 'Which goal is specific and measurable?', c: 'I will prepare two safe meals each week for one month.', w: ['I will be independent.', 'I will improve somehow.', 'I will never need help.'] },
  { p: 'Choose the connector: “I missed two deadlines. ______, I divided later assignments into smaller steps.”', c: 'As a result', w: ['Although without contrast', 'For example of a definition', 'Before purpose'] },
  { p: 'A: “What follows a progress review?” B: “______”', c: 'A specific adjustment for the next cycle', w: ['A judgement about personality', 'An unrelated target', 'A claim that evidence is useless'], representation: 'dialogue' },
  { p: 'Which evidence best supports improved time management?', c: 'All assignments were submitted by the recorded deadlines for four weeks.', w: ['I feel perfect.', 'One task was easy.', 'A friend likes schedules.'] },
  { p: 'Which detail is least useful in a budgeting plan?', c: 'The app icon’s favourite colour', w: ['Income', 'Fixed costs', 'Review date'] },
  { p: 'Emphasise Sunday in a reflective sentence.', c: 'It was on Sunday that I noticed the spending error.', w: ['It Sunday who noticed.', 'Sunday was it spending.', 'It noticed Sunday that error.'] },
  { p: 'A: “How can I avoid blaming myself in reflection?” B: “______”', c: 'Describe the evidence, cause and changeable process.', w: ['Use a negative label.', 'Ignore what happened.', 'Claim one mistake defines you.'], representation: 'dialogue' },
  { p: 'Which topic sentence fits details about lists, deadlines and weekly reviews?', c: 'A simple monitoring system can improve task management.', w: ['Lists use paper.', 'Weeks have days.', 'Deadlines are dates.'] },
  { p: 'Which revision creates a realistic plan?', c: 'I will test the checklist for two weeks and revise it using missed-task data.', w: ['The checklist will solve everything.', 'No review is needed.', 'I will become perfect tomorrow.'] },
  { p: 'Choose the clearest cleft transformation emphasising “the reminder”.', c: 'It was the reminder that helped me complete the task.', w: ['It reminder was helped.', 'The task who reminded.', 'It helped reminder that me.'] },
  { p: 'Which final sentence best closes a reflection?', c: 'Next week, I will set earlier reminders and compare completion data at Friday’s review.', w: ['Time management is good.', 'The paragraph is finished.', 'Nothing can be changed.'] }
];
const communication: Raw[] = [
  { p: 'Which invitation allows the listener a real choice?', c: 'Would you like to practise cooking together?', w: ['You must cook with me.', 'I have accepted for you.', 'Cooking is compulsory now.'] },
  { p: 'A: “I keep missing deadlines.” B: “______”', c: 'Would you like to try breaking one task into smaller steps?', w: ['I will do every task for you.', 'You are irresponsible forever.', 'Deadlines do not matter.'], representation: 'dialogue' },
  { p: 'Which request asks for instruction rather than replacement?', c: 'Could you show me how to check this form?', w: ['Could you complete it secretly?', 'Take over every decision.', 'Sign it for me without explanation.'] },
  { p: 'A: “Can you write my budget?” B: “______”', c: 'I can explain the template; you fill it in, and we can review it.', w: ['Yes, you need not learn.', 'No support is ever allowed.', 'Budgets require no data.'], representation: 'dialogue' },
  { p: 'Which response respects a refusal?', c: 'No problem; let me know if you want help later.', w: ['You must accept.', 'I will proceed anyway.', 'Refusal is not allowed.'] },
  { p: 'A: “This payment request seems suspicious.” B: “______”', c: 'Do not pay yet; let’s ask a trusted adult or the bank.', w: ['Guess and send money.', 'Hide it from everyone.', 'Independence means taking the risk alone.'], representation: 'dialogue' },
  { p: 'What is the best first question before offering help?', c: 'Which part would you like support with?', w: ['May I take control?', 'Why can’t you do anything?', 'Shall I decide without asking?'] },
  { p: 'A: “I made a mistake in the plan.” B: “______”', c: 'What did the evidence show, and what will you adjust?', w: ['One error defines you.', 'Stop monitoring.', 'Hide it.'], representation: 'dialogue' },
  { p: 'Which support follows model–practise–fade?', c: 'Demonstrate once, practise together, then let the learner try independently.', w: ['Do the task forever.', 'Remove all support immediately.', 'Give no feedback.'] },
  { p: 'A: “My friend wants my bank password to help.” B: “______”', c: 'Do not share it; use official support and protect your account.', w: ['Sharing passwords proves trust.', 'Security is unnecessary.', 'Post it publicly.'], representation: 'dialogue' },
  { p: 'Which statement best defines responsible independence?', c: 'Making informed choices, accepting consequences and seeking help when risk exceeds your skills', w: ['Never consulting anyone', 'Doing every group task alone', 'Avoiding all boundaries'] },
  { p: 'A: “How can my parents support me without taking over?” B: “______”', c: 'Agree on the outcome and safety limits, then reduce prompts as you improve.', w: ['They should make every choice.', 'Remove limits regardless of risk.', 'Stop all communication.'], representation: 'dialogue' }
];
export const g11EnglishModule8Questions: CourseQuestion[] = [
  ...build('pronunciation', 'language', pronunciation, ['invite-suggest', 'request-politeness']),
  ...build('vocabulary', 'language', vocabulary, ['meaning-word-form', 'independence-collocation']),
  ...build('grammar', 'language', grammar, ['subject-object-focus', 'adverbial-focus']),
  ...build('reading', 'reading', reading, ['main-detail', 'infer-evaluate']),
  ...build('writing', 'writing', writing, ['order-cohesion', 'transform-plan']),
  ...build('communication', 'communication-culture', communication, ['invite-request', 'support-agency'])
];
