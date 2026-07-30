import type { CourseQuestion } from '@/data/schema';
import type { PracticeRole, QuestionRepresentationType, QuestionStimulus } from '@/types';

type Choice = 'A' | 'B' | 'C' | 'D';
type Row = { content: string; options: [string, string, string, string]; answer: Choice; subTypeId: string; stimulus?: QuestionStimulus; representationType?: QuestionRepresentationType };
const roles: PracticeRole[] = ['guided', 'near_transfer', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'];
const difficulties: CourseQuestion['difficulty'][] = ['easy', 'easy', 'easy', 'easy', 'medium', 'medium', 'medium', 'medium', 'medium', 'hard', 'hard', 'hard'];
const build = (key: string, type: string, lesson: string, outcome: string, rows: Row[]): CourseQuestion[] =>
  rows.map((row, index) => ({
    id: `eng11-q-u4-${key}-${String(index + 1).padStart(2, '0')}`,
    courseId: 'grade11:english', moduleId: 'eng11-m4', lessonId: lesson,
    subjectId: 'english', topicId: 'eng11-topic-u4', questionTypeId: type,
    content: row.content, options: row.options, correctAnswer: row.answer,
    responseType: 'single_choice', validatorType: 'choice', difficulty: difficulties[index],
    points: 0.25, sourceType: 'manual', outcomeIds: [outcome], subTypeId: row.subTypeId,
    practiceRole: roles[index % 6], representationType: row.representationType ?? (index % 4 === 3 ? 'dialogue' : 'text'),
    isMasteryHoldout: index % 6 === 5, stimulus: row.stimulus
  }));

const pronunciationRows: Row[] = [
  { content: 'Vowel elision most commonly affects a vowel that is:', options: ['A. unstressed', 'B. the main stressed vowel', 'C. written in capitals', 'D. at the start of every sentence'], answer: 'A', subTypeId: 'eng11-u4-pron-word' },
  { content: 'Which word is commonly pronounced with a reduced middle vowel and fewer syllables than its spelling may suggest?', options: ['A. see', 'B. family', 'C. go', 'D. tea'], answer: 'B', subTypeId: 'eng11-u4-pron-word' },
  { content: 'In a common pronunciation of “history”, which kind of sound may be elided?', options: ['A. The stressed first vowel', 'B. The final consonant', 'C. An unstressed middle vowel', 'D. Every vowel'], answer: 'C', subTypeId: 'eng11-u4-pron-word' },
  { content: 'A: “Why can ‘comfortable’ sound shorter than it looks?” B: “Because ______.”', options: ['A. every consonant is silent', 'B. stress disappears', 'C. spelling changes', 'D. an unstressed vowel may be elided'], answer: 'D', subTypeId: 'eng11-u4-pron-word', representationType: 'dialogue' },
  { content: 'Which word is a common example used when teaching vowel elision?', options: ['A. different', 'B. ASEAN', 'C. state', 'D. trade'], answer: 'A', subTypeId: 'eng11-u4-pron-word' },
  { content: 'The natural pronunciation of “camera” in many accents may:', options: ['A. add two stressed vowels', 'B. reduce an unstressed middle vowel', 'C. remove the first consonant', 'D. turn every sound into /a/'], answer: 'B', subTypeId: 'eng11-u4-pron-word' },
  { content: 'Which statement about elision is correct?', options: ['A. Speakers may delete any vowel they choose.', 'B. It depends only on the number of letters.', 'C. It is a recognised feature of particular natural pronunciations.', 'D. It occurs only in writing.'], answer: 'C', subTypeId: 'eng11-u4-pron-principle' },
  { content: 'A: “Should I pronounce every written vowel as a full syllable?” B: “______”', options: ['A. Yes, spelling always equals sound.', 'B. Only in long words.', 'C. Every vowel is stressed.', 'D. No. Check the standard pronunciation because weak vowels may be reduced or elided.'], answer: 'D', subTypeId: 'eng11-u4-pron-principle', representationType: 'dialogue' },
  { content: 'Why is stress important when learning elision?', options: ['A. Unstressed vowels are more likely to be weakened or omitted.', 'B. Stressed vowels are always deleted.', 'C. Stress changes spelling.', 'D. Stress removes all consonants.'], answer: 'A', subTypeId: 'eng11-u4-pron-principle' },
  { content: 'Which learning strategy is most reliable?', options: ['A. Delete every schwa symbol.', 'B. Listen to a trusted pronunciation and note syllables and stress.', 'C. Count letters only.', 'D. Invent a shorter pronunciation.'], answer: 'B', subTypeId: 'eng11-u4-pron-principle' },
  { content: 'Elision can make two consonants:', options: ['A. disappear from spelling', 'B. become vowels', 'C. occur next to each other in pronunciation', 'D. receive sentence stress'], answer: 'C', subTypeId: 'eng11-u4-pron-principle' },
  { content: 'Which conclusion is safest?', options: ['A. All speakers elide exactly the same sounds.', 'B. Elision is incorrect speech.', 'C. Every long word must lose a vowel.', 'D. Accepted pronunciations may vary, so learners should recognise common forms rather than delete sounds freely.'], answer: 'D', subTypeId: 'eng11-u4-pron-principle' }
];

const vocabularyRows: Row[] = [
  { content: 'A country that officially belongs to an organisation is a member ______.', options: ['A. state', 'B. station', 'C. statement', 'D. status'], answer: 'A', subTypeId: 'eng11-u4-vocab-meaning' },
  { content: 'Cultural ______ refers to the presence of many different traditions and ways of life.', options: ['A. identity only', 'B. diversity', 'C. participation', 'D. summit'], answer: 'B', subTypeId: 'eng11-u4-vocab-meaning' },
  { content: 'The noun referring to a person who joins an activity is ______.', options: ['A. participation', 'B. participate', 'C. participant', 'D. participatory event'], answer: 'C', subTypeId: 'eng11-u4-vocab-meaning' },
  { content: 'A: “What is cultural identity?” B: “It is the sense of ______ shared by a cultural group.”', options: ['A. trading', 'B. competing', 'C. travelling', 'D. who they are'], answer: 'D', subTypeId: 'eng11-u4-vocab-meaning', representationType: 'dialogue' },
  { content: 'A formal meeting of national leaders is often called a ______.', options: ['A. summit', 'B. participant', 'C. tie', 'D. diversity'], answer: 'A', subTypeId: 'eng11-u4-vocab-meaning' },
  { content: 'The correct noun form in “Youth ______ is essential” is:', options: ['A. participate', 'B. participation', 'C. participant people', 'D. participatingly'], answer: 'B', subTypeId: 'eng11-u4-vocab-meaning' },
  { content: 'Educational exchanges can ______ cooperation among ASEAN students.', options: ['A. promote', 'B. do', 'C. make up', 'D. catch'], answer: 'A', subTypeId: 'eng11-u4-vocab-collocation' },
  { content: 'Joint projects can help neighbouring countries ______ ties.', options: ['A. harden', 'B. strengthen', 'C. lift', 'D. widen up'], answer: 'B', subTypeId: 'eng11-u4-vocab-collocation' },
  { content: 'Viet Nam will ______ a regional youth forum next month.', options: ['A. take', 'B. participate the', 'C. host', 'D. exchange'], answer: 'C', subTypeId: 'eng11-u4-vocab-collocation' },
  { content: 'A: “Would you like to ______ in the ASEAN quiz?” B: “Yes, please.”', options: ['A. promote', 'B. host to', 'C. strengthen', 'D. participate'], answer: 'D', subTypeId: 'eng11-u4-vocab-collocation', representationType: 'dialogue' },
  { content: 'Delegates met to ______ ideas about sustainable tourism.', options: ['A. exchange', 'B. resolve in', 'C. identify as', 'D. preserve from'], answer: 'A', subTypeId: 'eng11-u4-vocab-collocation' },
  { content: 'Regional programmes can support economic ______ while protecting communities.', options: ['A. grow', 'B. growth', 'C. grown', 'D. growingly'], answer: 'B', subTypeId: 'eng11-u4-vocab-collocation' }
];

const grammarRows: Row[] = [
  { content: '______ about neighbouring countries broadens students’ perspectives.', options: ['A. Learning', 'B. Learn', 'C. Learned', 'D. To learning'], answer: 'A', subTypeId: 'eng11-u4-grammar-subject' },
  { content: 'Joining regional projects ______ students practise teamwork.', options: ['A. help', 'B. helps', 'C. helping', 'D. have helped always'], answer: 'B', subTypeId: 'eng11-u4-grammar-subject' },
  { content: '______ cultural diversity requires listening to different communities.', options: ['A. Preserve', 'B. To preserving', 'C. Preserving', 'D. Preserved'], answer: 'C', subTypeId: 'eng11-u4-grammar-subject' },
  { content: 'A: “What develops confidence?” B: “______ presentations in an international group does.”', options: ['A. Give', 'B. Gave', 'C. To giving', 'D. Giving'], answer: 'D', subTypeId: 'eng11-u4-grammar-subject', representationType: 'dialogue' },
  { content: 'Working with people from different backgrounds ______ patience.', options: ['A. develops', 'B. develop', 'C. developing', 'D. have developed'], answer: 'A', subTypeId: 'eng11-u4-grammar-subject' },
  { content: 'Which sentence correctly uses a gerund as subject?', options: ['A. Exchange ideas is useful.', 'B. Exchanging ideas is useful.', 'C. Exchanged ideas are gerund.', 'D. To exchanging is useful.'], answer: 'B', subTypeId: 'eng11-u4-grammar-subject' },
  { content: 'The students enjoy ______ with their partners online.', options: ['A. communicating', 'B. communicate', 'C. to communicating', 'D. communicated'], answer: 'A', subTypeId: 'eng11-u4-grammar-object' },
  { content: 'A: “What did the committee suggest?” B: “They suggested ______ the event in Da Nang.”', options: ['A. host', 'B. hosting', 'C. to host after suggest', 'D. hosted'], answer: 'B', subTypeId: 'eng11-u4-grammar-object', representationType: 'dialogue' },
  { content: 'We are interested in ______ more about ASEAN history.', options: ['A. learn', 'B. to learn after in', 'C. learning', 'D. learned'], answer: 'C', subTypeId: 'eng11-u4-grammar-object' },
  { content: 'Please avoid ______ unsupported claims about an entire culture.', options: ['A. make', 'B. to making', 'C. made', 'D. making'], answer: 'D', subTypeId: 'eng11-u4-grammar-object' },
  { content: 'Choose the correct sentence.', options: ['A. We look forward to meeting the delegates.', 'B. We look forward to meet the delegates.', 'C. We enjoy to exchange ideas.', 'D. We suggested to organising a forum.'], answer: 'A', subTypeId: 'eng11-u4-grammar-object' },
  { content: 'After ______ the application, candidates should check their email.', options: ['A. submit', 'B. submitting', 'C. submitted', 'D. to submitting'], answer: 'B', subTypeId: 'eng11-u4-grammar-object' }
];

const passage1: QuestionStimulus = {
  id: 'eng11-stim-u4-reading-1',
  title: 'A regional student research network',
  content: `Four secondary schools in different ASEAN countries created a shared research network on urban water use. Each school selected a local question rather than following one identical experiment. Students in Viet Nam examined household water-saving habits, while other teams studied school leaks, rainwater collection, and public information campaigns.

The network provided a common method for recording observations so results could be compared. Teachers also organised monthly online meetings where students explained their choices and questioned one another’s conclusions. English was the working language, but participants could prepare key ideas in their first language before meetings. Short written summaries and captions helped students who needed more time to process spoken discussion.

At the end of the first term, teams exchanged data and identified patterns. They did not combine every number into a single regional average because the local conditions were too different. Instead, each team described which findings could transfer to another location and which depended on climate, infrastructure, or community behaviour.

The project’s value was not limited to producing a final report. Students learned that regional cooperation requires both shared standards and respect for local context. The organisers also reviewed participation data. They found that confident speakers dominated early meetings, so later sessions assigned rotating roles for presenting, questioning, and summarising. This adjustment gave more students a visible contribution and improved the quality of the comparison. In the next term, mixed-school teams will test one another's recommendations and document which adaptations are necessary before an idea can work elsewhere successfully.`
};
const passage2: QuestionStimulus = {
  id: 'eng11-stim-u4-reading-2',
  title: 'Cooperation on seasonal smoke',
  content: `Seasonal smoke can cross national borders, affecting air quality far from the fires that produced it. Because wind carries pollution across the region, action by a single city or country may be insufficient. Monitoring, prevention, emergency response, and public communication all require cooperation.

A group of neighbouring provinces began sharing satellite observations and ground-level sensor readings through a common platform. The system allowed local agencies to compare conditions and issue health advice using consistent categories. However, technical sharing was only one part of the programme. Fire risk was linked to land management, farming practices, weather, and economic pressure, so prevention teams worked with local communities rather than treating every fire as the same problem.

The partners also agreed to publish uncertainty ranges. Satellite images can identify likely fire locations, but clouds may block observations, and a sensor can fail or represent only one small area. Reporting uncertainty prevented officials from presenting estimates as exact facts. It also helped emergency teams decide when they needed additional checks.

Regional cooperation did not remove disagreements about responsibility or cost. It did create faster communication and a shared base of evidence. The programme shows that environmental problems crossing borders need institutions that can exchange data, compare methods, and learn from local knowledge. Trust grows not simply from collecting more information, but from explaining how the information was produced and how decisions will affect different communities. Future meetings will include farmers, health workers, scientists, and local officials so that technical evidence can inform practical, realistic action.`
};
const passage3: QuestionStimulus = {
  id: 'eng11-stim-u4-reading-3',
  title: 'Designing a cultural festival with communities',
  content: `A city planned an ASEAN cultural festival to introduce residents to music, food, crafts, and stories from across the region. The first proposal gave each participating country a small stage and asked organisers to produce short performances. Community associations welcomed the event but worried that reducing cultures to colourful shows could reinforce stereotypes.

The city changed the planning process. Instead of asking communities only to perform, it invited them to help select themes, explain context, and decide how activities would be presented. Some groups organised workshops where visitors learned a technique and discussed its history. Others created conversations about how traditions change when people migrate or when younger generations reinterpret them.

Payment and access also became part of the design. Performers and advisers received fees, translated materials were provided, and several events were scheduled outside working hours. The city reserved free spaces for school groups but avoided describing any participant as an official representative of an entire national culture.

After the festival, visitors completed surveys and community partners held a separate review. Attendance was high, yet organisers did not treat numbers alone as proof of meaningful exchange. They examined whether visitors stayed for discussion, whether partners felt accurately represented, and whether future cooperation had begun. The festival became less a display of fixed traditions and more a platform where residents could encounter cultural knowledge while recognising diversity within every country. Partners later proposed year-round school visits and community exchanges, allowing relationships formed during the event to continue through smaller joint projects.`
};

const readingRows: Row[] = [
  { content: 'What is the main idea of passage 1?', options: ['A. Regional research works best when shared methods are balanced with local context and inclusive participation.', 'B. Every school must conduct an identical experiment.', 'C. Only confident English speakers can do research.', 'D. Regional averages are always accurate.'], answer: 'A', subTypeId: 'eng11-u4-read-main-detail', stimulus: passage1 },
  { content: 'Why did the network provide a common recording method?', options: ['A. To remove local questions', 'B. To make results comparable', 'C. To replace teachers', 'D. To create one compulsory average'], answer: 'B', subTypeId: 'eng11-u4-read-main-detail', stimulus: passage1 },
  { content: 'Why were results not combined into one regional average?', options: ['A. Students collected no data.', 'B. Meetings were cancelled.', 'C. Local conditions differed too much.', 'D. Every result was identical.'], answer: 'C', subTypeId: 'eng11-u4-read-main-detail', stimulus: passage1 },
  { content: 'What change improved participation in later meetings?', options: ['A. Removing questions', 'B. Ending summaries', 'C. Allowing only teachers to speak', 'D. Rotating presentation, questioning and summarising roles'], answer: 'D', subTypeId: 'eng11-u4-read-main-detail', stimulus: passage1 },
  { content: 'What is the central purpose of passage 2?', options: ['A. To explain why cross-border smoke requires transparent regional cooperation and local knowledge', 'B. To prove sensors never fail', 'C. To blame one province for every fire', 'D. To argue uncertainty should be hidden'], answer: 'A', subTypeId: 'eng11-u4-read-main-detail', stimulus: passage2 },
  { content: 'What did the common platform allow agencies to do?', options: ['A. Control the wind', 'B. Compare conditions and use consistent health categories', 'C. Eliminate all fires', 'D. Replace local communities'], answer: 'B', subTypeId: 'eng11-u4-read-main-detail', stimulus: passage2 },
  { content: 'Why did partners publish uncertainty ranges?', options: ['A. To make reports longer', 'B. To avoid collecting data', 'C. To show that observations and estimates had limits', 'D. To claim exact certainty'], answer: 'C', subTypeId: 'eng11-u4-read-infer-fairness', stimulus: passage2 },
  { content: 'What can be inferred about trust from passage 2?', options: ['A. It results automatically from more sensors.', 'B. It requires no explanation.', 'C. It grows only after disagreements disappear.', 'D. It is supported by transparency about evidence and impacts.'], answer: 'D', subTypeId: 'eng11-u4-read-infer-fairness', stimulus: passage2 },
  { content: 'Why were community associations concerned about the first festival proposal?', options: ['A. Short colourful performances could reinforce stereotypes.', 'B. The city offered too many discussions.', 'C. Every event was free.', 'D. Communities controlled all themes.'], answer: 'A', subTypeId: 'eng11-u4-read-infer-fairness', stimulus: passage3 },
  { content: 'How did the revised process give communities more agency?', options: ['A. It asked them only to perform.', 'B. It involved them in selecting themes and explaining context.', 'C. It removed their advisers.', 'D. It cancelled workshops.'], answer: 'B', subTypeId: 'eng11-u4-read-infer-fairness', stimulus: passage3 },
  { content: 'Why did organisers avoid calling one participant an official representative of an entire culture?', options: ['A. No countries took part.', 'B. The event had no audience.', 'C. Cultures contain internal diversity and one person cannot represent everyone.', 'D. Only officials may cook food.'], answer: 'C', subTypeId: 'eng11-u4-read-infer-fairness', stimulus: passage3 },
  { content: 'Which evidence went beyond attendance numbers?', options: ['A. Stage colour', 'B. Ticket shape', 'C. Event length only', 'D. Whether partners felt accurately represented and new cooperation began'], answer: 'D', subTypeId: 'eng11-u4-read-infer-fairness', stimulus: passage3 }
];

const writingRows: Row[] = [
  { content: 'Choose the best order for a notice: (a) Register through the school portal by 12 September. (b) Our school will host an ASEAN youth discussion on 20 September. (c) Students in Grades 10–12 are invited to apply.', options: ['A. b-c-a', 'B. a-b-c', 'C. c-a-b', 'D. b-a-c'], answer: 'A', subTypeId: 'eng11-u4-write-order' },
  { content: 'Choose the best opening sentence for a formal programme announcement.', options: ['A. Hi guys, something cool!', 'B. Applications are now open for the 2026 ASEAN Student Research Exchange.', 'C. Anyway, you know.', 'D. This and that will happen.'], answer: 'B', subTypeId: 'eng11-u4-write-order' },
  { content: 'Choose the connector: “The forum uses English as its working language. ______, translated summaries will be available.”', options: ['A. Therefore it excludes everyone', 'B. For example of contrast', 'C. However', 'D. Because no language exists'], answer: 'C', subTypeId: 'eng11-u4-write-order' },
  { content: 'A: Arrange an invitation: (a) Please let us know by Friday whether you can attend. (b) We are organising a cultural exchange on 8 October. (c) We would be delighted if your club could present a workshop.', options: ['A. a-c-b', 'B. c-a-b', 'C. b-a-c', 'D. b-c-a'], answer: 'D', subTypeId: 'eng11-u4-write-order', representationType: 'dialogue' },
  { content: 'Which detail is least relevant in a notice about joining a youth forum?', options: ['A. The organiser’s favourite colour', 'B. Eligibility', 'C. Application deadline', 'D. Contact information'], answer: 'A', subTypeId: 'eng11-u4-write-order' },
  { content: 'Choose the best closing line for an application invitation.', options: ['A. Programmes are things.', 'B. Submit your form by 5 p.m. on 30 August; selected applicants will be contacted by email.', 'C. Time exists.', 'D. Maybe do something.'], answer: 'B', subTypeId: 'eng11-u4-write-order' },
  { content: 'Choose the closest meaning: “Learning about regional cultures is valuable.”', options: ['A. Learn about cultures was value.', 'B. To learning is valuable.', 'C. It is valuable to learn about regional cultures.', 'D. Cultures avoid learning.'], answer: 'C', subTypeId: 'eng11-u4-write-transform' },
  { content: 'A: “They are interested in joining the exchange.” Which sentence keeps the meaning?', options: ['A. They avoid the exchange.', 'B. Joining is forbidden.', 'C. They joined unwillingly.', 'D. They have an interest in taking part in the exchange.'], answer: 'D', subTypeId: 'eng11-u4-write-transform', representationType: 'dialogue' },
  { content: 'Choose the best topic sentence for details about student exchanges, joint research and volunteer work.', options: ['A. Young people can contribute to regional cooperation in several practical ways.', 'B. Students carry bags.', 'C. Research has letters.', 'D. Volunteering is a long word.'], answer: 'A', subTypeId: 'eng11-u4-write-transform' },
  { content: 'Which revision avoids overclaiming?', options: ['A. The programme has solved every regional problem.', 'B. The programme aims to strengthen communication among participating students.', 'C. One meeting guarantees permanent peace.', 'D. All participants always agree.'], answer: 'B', subTypeId: 'eng11-u4-write-transform' },
  { content: 'Choose the clearest combination: “Students exchange local data. They identify shared challenges.”', options: ['A. Students exchange because challenges data.', 'B. Shared challenges are exchange.', 'C. By exchanging local data, students can identify shared challenges.', 'D. Data identifies students always.'], answer: 'C', subTypeId: 'eng11-u4-write-transform' },
  { content: 'Choose the best final sentence for a report on an ASEAN school project.', options: ['A. ASEAN is an acronym.', 'B. The report has paragraphs.', 'C. Schools are buildings.', 'D. The project created a useful network that can support future student collaboration.'], answer: 'D', subTypeId: 'eng11-u4-write-transform' }
];

const communicationRows: Row[] = [
  { content: 'A: “Would you like to join our ASEAN culture quiz?” B: “______”', options: ['A. I’d love to. When is it?', 'B. Culture is a noun.', 'C. You must not ask.', 'D. I joined tomorrow.'], answer: 'A', subTypeId: 'eng11-u4-comm-invite-info', representationType: 'dialogue' },
  { content: 'A: “Could you tell me who is eligible for the exchange?” B: “______”', options: ['A. Eligibility is long.', 'B. It is open to students aged sixteen to eighteen.', 'C. I refuse all information.', 'D. The exchange is a verb.'], answer: 'B', subTypeId: 'eng11-u4-comm-invite-info', representationType: 'dialogue' },
  { content: 'Which is the most formal invitation?', options: ['A. Come if you want.', 'B. You must show up.', 'C. We would be delighted if your school could nominate two participants.', 'D. Get here now.'], answer: 'C', subTypeId: 'eng11-u4-comm-invite-info', representationType: 'text' },
  { content: 'A: “I’m interested in the forum.” B: “______”', options: ['A. Interest is personal.', 'B. Forums have chairs.', 'C. Do not ask.', 'D. Shall I send you the programme and application link?'], answer: 'D', subTypeId: 'eng11-u4-comm-invite-info', representationType: 'dialogue' },
  { content: 'Which question appropriately asks about accessibility?', options: ['A. Will interpretation or translated materials be available?', 'B. Why is every language difficult?', 'C. Must everyone speak perfectly?', 'D. Can we ignore participants’ needs?'], answer: 'A', subTypeId: 'eng11-u4-comm-invite-info', representationType: 'text' },
  { content: 'A: “Thank you for the invitation, but I have an exam that day.” B: “______”', options: ['A. Exams are always wrong.', 'B. I understand. We can share the recorded public session afterwards.', 'C. You have to attend anyway.', 'D. No response is possible.'], answer: 'B', subTypeId: 'eng11-u4-comm-invite-info', representationType: 'dialogue' },
  { content: 'A: “Everyone from that country must follow the same tradition.” B: “______”', options: ['A. I’m not sure that is fair; practices can vary among communities and individuals.', 'B. Yes, stereotypes are always accurate.', 'C. No one needs context.', 'D. One person represents millions.'], answer: 'A', subTypeId: 'eng11-u4-comm-cultural', representationType: 'dialogue' },
  { content: 'A: “I don’t understand this custom.” B: “______”', options: ['A. Guess its meaning.', 'B. Let’s ask the participants how they understand it in their community.', 'C. Call it strange.', 'D. Avoid listening.'], answer: 'B', subTypeId: 'eng11-u4-comm-cultural', representationType: 'dialogue' },
  { content: 'Which sentence uses appropriately cautious cultural language?', options: ['A. All families behave identically.', 'B. People there never change.', 'C. In some communities, this practice is associated with welcoming guests.', 'D. This custom has one meaning everywhere.'], answer: 'C', subTypeId: 'eng11-u4-comm-cultural', representationType: 'text' },
  { content: 'A: “Your presentation was different from what I expected.” B: “______”', options: ['A. Expectations are facts.', 'B. You should keep the stereotype.', 'C. Difference needs no explanation.', 'D. Which part surprised you? I’d be happy to discuss it.'], answer: 'D', subTypeId: 'eng11-u4-comm-cultural', representationType: 'dialogue' },
  { content: 'Which response shows respect during a cultural workshop?', options: ['A. Could you explain the history of this technique before we try it?', 'B. This is obviously simple and unimportant.', 'C. I already know what everyone thinks.', 'D. Context is unnecessary.'], answer: 'A', subTypeId: 'eng11-u4-comm-cultural', representationType: 'text' },
  { content: 'A: “How was your exchange experience?” B: “______”', options: ['A. Every exchange is exactly alike.', 'B. I learned a lot, especially from comparing our different school routines.', 'C. Countries have borders.', 'D. Experience is uncountable.'], answer: 'B', subTypeId: 'eng11-u4-comm-cultural', representationType: 'dialogue' }
];

export const g11EnglishModule4Questions: CourseQuestion[] = [
  ...build('pron', 'eng11-qt-u4-pronunciation', 'eng11-u4-language', 'eng11-out-u4-pronunciation', pronunciationRows),
  ...build('vocab', 'eng11-qt-u4-vocabulary', 'eng11-u4-language', 'eng11-out-u4-vocabulary', vocabularyRows),
  ...build('grammar', 'eng11-qt-u4-grammar', 'eng11-u4-language', 'eng11-out-u4-grammar', grammarRows),
  ...build('reading', 'eng11-qt-u4-reading', 'eng11-u4-reading', 'eng11-out-u4-reading', readingRows),
  ...build('writing', 'eng11-qt-u4-writing', 'eng11-u4-writing', 'eng11-out-u4-writing', writingRows),
  ...build('comm', 'eng11-qt-u4-communication', 'eng11-u4-communication-culture', 'eng11-out-u4-communication', communicationRows)
];
