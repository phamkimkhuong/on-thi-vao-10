import type { CourseQuestion } from '@/data/schema';
import type { PracticeRole, QuestionRepresentationType, QuestionStimulus } from '@/types';
type Choice='A'|'B'|'C'|'D'; type Raw={p:string;c:string;w:[string,string,string];stimulus?:QuestionStimulus;representation?:QuestionRepresentationType};
const letters:Choice[]=['A','B','C','D']; const roles:PracticeRole[]=['guided','near_transfer','misconception_check','far_transfer','retention','mastery_holdout'];
const difficulties:CourseQuestion['difficulty'][]=['easy','easy','easy','easy','medium','medium','medium','medium','medium','hard','hard','hard'];
const build=(key:string,lesson:string,rows:Raw[],subs:[string,string]):CourseQuestion[]=>rows.map((r,i)=>{const pos=i%4,o=[...r.w];o.splice(pos,0,r.c);return{
  id:`eng11-q-u9-${key}-${String(i+1).padStart(2,'0')}`,courseId:'grade11:english',moduleId:'eng11-m9',lessonId:`eng11-u9-${lesson}`,
  subjectId:'english',topicId:'eng11-topic-u9',questionTypeId:`eng11-qt-u9-${key}`,content:r.p,
  options:o.map((v,j)=>`${letters[j]}. ${v}`) as [string,string,string,string],correctAnswer:letters[pos],responseType:'single_choice',validatorType:'choice',
  difficulty:difficulties[i],points:.25,sourceType:'manual',outcomeIds:[`eng11-out-u9-${key}`],subTypeId:`eng11-u9-${key}-${i<6?subs[0]:subs[1]}`,
  practiceRole:roles[i%6],representationType:r.representation??(i%4===3?'dialogue':'text'),isMasteryHoldout:i%6===5,stimulus:r.stimulus};});
const pronunciation:Raw[]=[
  {p:'In “online or in person?”, how does “online” normally end?',c:'with rising intonation',w:['with the final fall','without pitch','as a tag question']},
  {p:'The last alternative in a choice question usually has:',c:'falling intonation',w:['rising intonation','no stress','question-tag grammar']},
  {p:'Which pattern fits “peer pressure or bullying?”',c:'rise–fall',w:['fall–rise','rise–rise','fall–fall only']},
  {p:'A: “Should we email or call?” B: “Email rises; call ______.”',c:'falls',w:['rises forever','disappears','becomes a noun'],representation:'dialogue'},
  {p:'Why does the first choice rise?',c:'It signals that another alternative follows.',w:['It closes the question.','It changes tense.','It shows a statement.']},
  {p:'Which item receives the final fall in “school, family, or online support”?',c:'online support',w:['school only','family only','every item rises']},
  {p:'Choose the correct three-choice pattern.',c:'rise–rise–fall',w:['fall–rise–rise','fall–fall–rise','rise–fall–rise']},
  {p:'A: “Campaign A, B, or C?” B: “The tone on B should usually ______.”',c:'rise',w:['fall as final','stay silent','be a command'],representation:'dialogue'},
  {p:'A final fall tells the listener that:',c:'the set of choices is complete',w:['another item must follow','the speaker has no choice','or is a preposition']},
  {p:'Which question clearly presents alternatives?',c:'Will you report it now or after class?',w:['Do you know that bread and butter are food?','Where is the office?','It is safe, isn’t it?']},
  {p:'A repeated first option may rise because the speaker:',c:'is checking or requesting confirmation',w:['has ended every choice','is making a past tense','removed the alternative']},
  {p:'What is the safest interpretation strategy?',c:'Identify genuine alternatives and their position in the list.',w:['Make every or rise.','Use spelling alone.','Make every item fall.']}
];
const vocabulary:Raw[]=[
  {p:'Pressure to behave like members of a friend group is:',c:'peer pressure',w:['food pressure','campaign reach','privacy support']},
  {p:'Repeated harmful behaviour involving a power imbalance is:',c:'bullying',w:['awareness','confidentiality','evaluation']},
  {p:'Bullying through messages or online platforms is:',c:'cyberbullying',w:['workplace training','biodiversity','budgeting']},
  {p:'A: “What is discrimination?” B: “It is ______.”',c:'unfair treatment based on characteristics',w:['a neutral choice question','an evaluation metric','a private budget'],representation:'dialogue'},
  {p:'A person who witnesses an incident is a:',c:'bystander',w:['campaign outcome','support route','peer pressure']},
  {p:'A person who acts safely to help may be called an:',c:'upstander',w:['inequality','awareness','confidential form']},
  {p:'Choose the correct campaign collocation.',c:'raise awareness',w:['do awareness','make bullying','take privacy']},
  {p:'Students should ______ bullying through a safe channel.',c:'report',w:['experience at','challenge into','support on']},
  {p:'Someone affected by harassment may need to ______ support.',c:'seek',w:['raise into','measure at','protect from seeking']},
  {p:'A: “How should the service handle names?” B: “It must ______ privacy.”',c:'protect',w:['bully','campaign','pressure'],representation:'dialogue'},
  {p:'A programme should ______ outcomes, not only count posters.',c:'measure',w:['discriminate','peer','shame']},
  {p:'Which phrase means opposing unfair treatment?',c:'challenge discrimination',w:['raise a bystander','seek bullying','report awareness']}
];
const grammar:Raw[]=[
  {p:'______ the campaign was popular, repeat incidents continued.',c:'Although',w:['Despite','Because of','Therefore']},
  {p:'______ its popularity, the campaign needed revision.',c:'Despite',w:['Although','Because','Therefore of']},
  {p:'The channel was anonymous. ______, more students used it.',c:'Moreover',w:['Although','Because of','Despite']},
  {p:'A: “Which linker adds another benefit?” B: “______.”',c:'In addition',w:['However','Because','In spite of'],representation:'dialogue'},
  {p:'The posters reached many students; ______, few knew the reporting steps.',c:'however',w:['because of','in addition to success','therefore only']},
  {p:'______ being short, the workshop included practical examples.',c:'In spite of',w:['Although','Because','Therefore']},
  {p:'Reports increased ______ the new anonymous form reduced fear.',c:'because',w:['because of','despite','therefore']},
  {p:'A: “Why was attendance low?” B: “______ a transport strike.”',c:'Because of',w:['Because','Although','Therefore'],representation:'dialogue'},
  {p:'The response team trained staff; ______, waiting times fell.',c:'as a result',w:['although','because of','despite']},
  {p:'Which sentence is structurally correct?',c:'Because the route was clear, students sought help.',w:['Because of the route was clear, students sought help.','Although the route was clear, but students acted.','Despite students knew, they acted.']},
  {p:'Choose the correct contrast structure.',c:'Despite receiving many views, the video changed little behaviour.',w:['Although receiving many views, but the video changed.','Despite it received many views, the video changed.','Because of it received views, however changed.']},
  {p:'Which sentence avoids a double connector?',c:'Although the meeting was difficult, participants stayed.',w:['Although the meeting was difficult, but participants stayed.','Because the meeting ended, so they left.','Despite participants stayed, but difficult.']}
];
const passage1:QuestionStimulus={id:'eng11-stim-u9-reading-1',title:'An anonymous reporting route',content:`A school survey found that many students had witnessed hurtful online messages, but few had reported them. Interviews suggested two barriers: students did not know which incidents qualified for reporting, and they feared that their names would become public.

The school introduced an online form that allowed anonymous initial reports. It explained what information was useful, what would happen next, and when anonymity might be limited because someone faced immediate danger. A trained safeguarding team reviewed submissions, while students could request a private follow-up conversation.

During the first term, reports increased sharply. Some adults assumed cyberbullying had become more common. However, the team compared survey responses and found that students were more aware of the route and more confident that staff would respond. The rise therefore could not be interpreted as a simple rise in incidents.

The review also identified problems. Several reports lacked enough detail for action, and response times varied. The school added examples to the form, set response targets and published aggregate data without identifying students. It tracked repeat incidents, response time, satisfaction with support and awareness of procedures. Student representatives reviewed the instructions and suggested simpler language for younger users. Staff also tested whether the form worked with screen readers and mobile phones. The purpose was not to maximise the number of reports, but to make harm visible and respond safely. The case shows why reporting data requires context: an increase can reflect a worsening problem, improved access, or both, and several indicators are needed to distinguish these possibilities.`};
const passage2:QuestionStimulus={id:'eng11-stim-u9-reading-2',title:'A peer-pressure workshop redesigned',content:`A youth centre ran a workshop telling teenagers to “just say no” to harmful peer pressure. Participants remembered the slogan, yet follow-up interviews showed that many could not use it when a friend threatened exclusion or when pressure appeared in a group chat.

The centre invited teenagers to redesign the sessions. They created realistic scenarios involving parties, risky online challenges, spending and sharing private images. Students practised delaying a decision, stating a boundary, suggesting an alternative and contacting a trusted person. Facilitators avoided describing all peer influence as harmful; they discussed how friends can also encourage healthy choices.

The revised programme used anonymous pre- and post-session scenarios. Participants selected responses and explained why. Scores improved immediately, but organisers did not claim lasting behaviour change. Three months later, they repeated the scenarios and asked whether students had used any strategy. They also provided an opt-out and information about support services because discussions could recall distressing experiences.

Results showed better recognition of pressure and more willingness to seek help. Self-reported use of strategies increased modestly, although the organisers noted possible memory and social-desirability bias. They planned confidential interviews with a smaller volunteer group and further adaptation for students with different communication needs. Facilitators would also record which scenarios prompted confusion without linking comments to individual participants. This evidence would guide the next training cycle instead of being used to rank students. The programme illustrates that awareness is only one step. Effective prevention needs realistic practice, safe support, repeated measurement and recognition that social situations differ across groups and platforms.`};
const passage3:QuestionStimulus={id:'eng11-stim-u9-reading-3',title:'Evaluating an anti-stigma campaign',content:`A student club planned a campaign to reduce stigma around seeking mental-health support. Its first proposal focused on posters saying “It is okay not to be okay.” A counsellor welcomed the message but asked what students should do after reading it and whether support services could handle increased demand.

The club added a directory of verified services, instructions for urgent situations and short videos explaining what a first counselling appointment might involve. Students with experience of using support reviewed the language, but no one was required to share a personal story. The school increased counsellor hours before launching the campaign.

Evaluation included more than online views. A baseline survey measured knowledge of services, confidence in approaching an adult and common misconceptions. Follow-up surveys used the same questions. The counselling team monitored waiting time and anonymous referral sources, while avoiding publication of small-group data that could reveal identities.

After eight weeks, knowledge improved and more students requested appointments. Waiting time initially grew, then returned near baseline after scheduling changes. The team could not determine whether stigma itself had fallen permanently, and it avoided claiming that every appointment resulted from the campaign. It concluded that communication and service capacity must develop together. Teachers received guidance on responding without diagnosing students or promising confidentiality they could not guarantee. The directory was updated monthly so that inaccurate contact information would not create another barrier. A campaign that encourages help-seeking without accessible, confidential support may create frustration. Future reviews will examine whether students receive appropriate help and whether awareness remains after the campaign ends.`};
const reading:Raw[]=[
  {p:'Why did many students avoid reporting?',c:'They lacked clarity and feared exposure.',w:['No harmful messages existed.','The school banned reports.','All forms required public names.'],stimulus:passage1},
  {p:'Why did reports rise after the form opened?',c:'Improved awareness and trust may have increased reporting.',w:['The data proved incidents doubled.','Every report was false.','The form created bullying.'],stimulus:passage1},
  {p:'Which additional problem did the review find?',c:'Some reports lacked detail and response time varied.',w:['Students knew too much detail.','No team reviewed reports.','Aggregate data named everyone.'],stimulus:passage1},
  {p:'What is the main lesson of passage 1?',c:'Reporting trends need context and multiple indicators.',w:['More reports always mean more harm.','Fewer reports always mean safety.','One metric is sufficient.'],stimulus:passage1},
  {p:'Why was “just say no” insufficient?',c:'Students could not apply it in realistic social situations.',w:['No one remembered the slogan.','Peer influence is always positive.','The workshop included too much practice.'],stimulus:passage2},
  {p:'What did the redesigned sessions add?',c:'Scenario practice, boundaries, alternatives and support routes',w:['Only longer slogans','Public personal stories','A ban on opting out'],stimulus:passage2},
  {p:'Why did organisers repeat measures after three months?',c:'Immediate improvement did not prove retention or behaviour.',w:['They wanted more poster views.','The first data was deleted.','All students gave identical answers.'],stimulus:passage2},
  {p:'Which limitation affected self-reported strategy use?',c:'Memory and social-desirability bias',w:['No strategies existed.','The sample included adults only.','Scenarios were never used.'],stimulus:passage2},
  {p:'What concern changed the anti-stigma proposal?',c:'Students needed clear next steps and sufficient service capacity.',w:['Posters were too small.','Counsellors opposed help-seeking.','Every student had to tell a story.'],stimulus:passage3},
  {p:'How did the campaign protect participants?',c:'It avoided forced disclosure and small-group identifying data.',w:['It published names.','It removed urgent guidance.','It reduced counsellor hours.'],stimulus:passage3},
  {p:'What happened to waiting time?',c:'It rose initially and later fell after scheduling changes.',w:['It stayed zero.','It was never measured.','It permanently doubled.'],stimulus:passage3},
  {p:'Which conclusion best reflects passage 3?',c:'Awareness campaigns need accessible, confidential support capacity.',w:['Views alone prove stigma ended.','Communication can replace services.','Every appointment had one cause.'],stimulus:passage3}
];
const writing:Raw[]=[
  {p:'Choose the best proposal order: (a) evaluate outcomes; (b) define the problem; (c) assign actions and safeguards.',c:'b-c-a',w:['a-b-c','c-a-b','b-a-c']},
  {p:'Which opening has a clear scope?',c:'This proposal addresses cyberbullying reports among Grades 10–11.',w:['Social issues are bad.','End everything now.','Posters are useful.']},
  {p:'Choose the connector: “Views were high. ______, knowledge of reporting remained low.”',c:'However',w:['Therefore','Because of','In addition without contrast']},
  {p:'A: “What belongs after evidence?” B: “______”',c:'Actions linked to the identified barrier',w:['An unrelated slogan','A guaranteed outcome','No responsible owner'],representation:'dialogue'},
  {p:'Which objective is measurable?',c:'Increase correct identification of the reporting route by term end.',w:['Raise awareness somehow.','End bullying forever.','Make everyone agree.']},
  {p:'Which detail is least relevant?',c:'The designer’s favourite game',w:['Privacy safeguard','Response owner','Review date']},
  {p:'Choose the correct linker revision.',c:'Despite strong reach, behaviour changed little.',w:['Although strong reach, but behaviour changed.','Despite the campaign reached, behaviour.','Because of reach was strong, however.']},
  {p:'A: “How should confidential data be reported?” B: “______”',c:'Use aggregates large enough to protect identities.',w:['Publish small-group names.','Share raw reports publicly.','Ignore privacy.'],representation:'dialogue'},
  {p:'Which topic sentence fits training, reporting and counselling actions?',c:'The campaign combines prevention, safe reporting and follow-up support.',w:['Campaigns have posters.','Training takes time.','Counselling is a noun.']},
  {p:'Which social-campaign revision avoids overclaiming?',c:'The pilot may improve help-seeking knowledge, which will be measured.',w:['The pilot ends every social issue.','Views guarantee safety.','No evaluation is needed.']},
  {p:'Choose the clearest cause–result link.',c:'Because students feared exposure, the school introduced an anonymous first step.',w:['Students feared although anonymous therefore.','Exposure introduced school.','Because of students feared, so form.']},
  {p:'Which final sentence best closes the proposal?',c:'The team will review response time, repeat harm and support access after one term.',w:['Success is guaranteed.','The proposal has a title.','Only views will be counted.']}
];
const communication:Raw[]=[
  {p:'Which response expresses disappointment without blame?',c:'I’m sorry that happened to you.',w:['Why did you cause it?','Ignore it.','You are too sensitive.']},
  {p:'A: “Someone posted a cruel image of me.” B: “______”',c:'That’s awful. What support would feel helpful now?',w:['You should have prevented it.','Post it again.','Tell no one ever.'],representation:'dialogue'},
  {p:'Which question supports rather than interrogates?',c:'Would you like me to go with you to a trusted adult?',w:['Why were you weak?','Who can we blame publicly?','Must you hide it?']},
  {p:'A: “Promise you will never tell anyone.” B: “______”',c:'I’ll respect your privacy, but if someone is in danger we need help.',w:['I promise secrecy in every danger.','I will publish it.','Safety never matters.'],representation:'dialogue'},
  {p:'Which bystander action is safest?',c:'Save evidence and report through the appropriate channel.',w:['Start a dangerous confrontation.','Forward the harmful post.','Delete all evidence immediately.']},
  {p:'A: “The threats mention tomorrow.” B: “______”',c:'Let’s contact a trusted adult or emergency support now.',w:['Wait silently.','Confront them alone.','Treat it as a joke.'],representation:'dialogue'},
  {p:'Which phrase establishes a boundary?',c:'I won’t share that image, but I can help you report it.',w:['I will forward it.','Boundaries are rude.','Reporting is impossible.']},
  {p:'A: “I am disappointed the campaign excluded us.” B: “______”',c:'You’re right to raise that; how should participation change?',w:['Exclusion is irrelevant.','The plan cannot change.','Your view is wrong.'],representation:'dialogue'},
  {p:'What should support services explain clearly?',c:'Confidentiality, its limits and what happens next',w:['Only the logo','Rumours','No process']},
  {p:'A: “I don’t want to report alone.” B: “______”',c:'I can stay with you while we use the school’s safe route.',w:['Then do nothing.','I will decide for you.','Publicly name everyone.'],representation:'dialogue'},
  {p:'Which response avoids minimising harm?',c:'Even if others call it a joke, its impact matters.',w:['It was only a joke.','Everyone experiences it.','Forget it immediately.']},
  {p:'A: “What if someone may hurt themselves?” B: “______”',c:'Seek immediate qualified help and do not leave them unsupported.',w:['Keep it secret.','Handle it alone online.','Wait for a campaign.'],representation:'dialogue'}
];
export const g11EnglishModule9Questions:CourseQuestion[]=[
  ...build('pronunciation','language',pronunciation,['two-choice','multi-choice-context']),...build('vocabulary','language',vocabulary,['meaning-word-form','social-collocation']),
  ...build('grammar','language',grammar,['addition-contrast','cause-result']),...build('reading','reading',reading,['main-detail','infer-evaluate']),
  ...build('writing','writing',writing,['order-cohesion','transform-proposal']),...build('communication','communication-culture',communication,['disappointment-support','boundary-escalate'])
];
