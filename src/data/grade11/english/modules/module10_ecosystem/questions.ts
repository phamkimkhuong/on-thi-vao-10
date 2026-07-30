import type { CourseQuestion } from '@/data/schema';
import type { PracticeRole, QuestionRepresentationType, QuestionStimulus } from '@/types';
type Choice='A'|'B'|'C'|'D'; type Raw={p:string;c:string;w:[string,string,string];stimulus?:QuestionStimulus;representation?:QuestionRepresentationType};
const letters:Choice[]=['A','B','C','D']; const roles:PracticeRole[]=['guided','near_transfer','misconception_check','far_transfer','retention','mastery_holdout'];
const difficulties:CourseQuestion['difficulty'][]=['easy','easy','easy','easy','medium','medium','medium','medium','medium','hard','hard','hard'];
const build=(key:string,lesson:string,rows:Raw[],subs:[string,string]):CourseQuestion[]=>rows.map((r,i)=>{const pos=i%4,o=[...r.w];o.splice(pos,0,r.c);return{
  id:`eng11-q-u10-${key}-${String(i+1).padStart(2,'0')}`,courseId:'grade11:english',moduleId:'eng11-m10',lessonId:`eng11-u10-${lesson}`,
  subjectId:'english',topicId:'eng11-topic-u10',questionTypeId:`eng11-qt-u10-${key}`,content:r.p,
  options:o.map((v,j)=>`${letters[j]}. ${v}`) as [string,string,string,string],correctAnswer:letters[pos],responseType:'single_choice',validatorType:'choice',
  difficulty:difficulties[i],points:.25,sourceType:'manual',outcomeIds:[`eng11-out-u10-${key}`],subTypeId:`eng11-u10-${key}-${i<6?subs[0]:subs[1]}`,
  practiceRole:roles[i%6],representationType:r.representation??(i%4===3?'dialogue':'text'),isMasteryHoldout:i%6===5,stimulus:r.stimulus};});
const pronunciation:Raw[]=[
  {p:'Choose the correct tag: “The wetland is recovering, ______?”',c:'isn’t it',w:['doesn’t it','is it','aren’t they']},
  {p:'“Birds migrate, ______?”',c:'don’t they',w:['aren’t birds','do it','isn’t they']},
  {p:'A negative statement normally takes a:',c:'positive tag',w:['negative tag only','choice question','compound noun']},
  {p:'A: “The water isn’t clean, ______?” B: “Is it.”',c:'is it',w:['isn’t it','does it','wasn’t water'],representation:'dialogue'},
  {p:'Which tag matches “We can restore it”?',c:'can’t we',w:['don’t we','can it','aren’t us']},
  {p:'Which special tag commonly follows “Let’s monitor the stream”?',c:'shall we',w:['will it','do they','aren’t we']},
  {p:'A rising tag usually shows:',c:'genuine uncertainty or a real request for confirmation',w:['complete certainty','a list ending','compound spelling']},
  {p:'A: “You measured the site, didn’t you ↗?” The rise suggests ______.',c:'the speaker really wants confirmation',w:['the speaker expects agreement only','the sentence is a command','measurement is impossible'],representation:'dialogue'},
  {p:'A falling tag commonly suggests:',c:'the speaker expects agreement',w:['the speaker knows nothing','another list item follows','the main statement is false']},
  {p:'Which interpretation fits “This habitat matters, doesn’t it ↘?”',c:'The speaker presents a view and invites agreement.',w:['The speaker asks for unknown factual data.','The tag reverses the statement.','The speaker lists alternatives.']},
  {p:'Why can the same tag use different tones?',c:'The speaker’s certainty and communicative purpose differ.',w:['The auxiliary changes spelling.','The subject disappears.','All ecosystems sound different.']},
  {p:'What should learners check first?',c:'Statement polarity, auxiliary, subject pronoun and intended certainty',w:['The longest word only','The final noun only','A fixed rising tone']}
];
const vocabulary:Raw[]=[
  {p:'Living and non-living components interacting form an:',c:'ecosystem',w:['individual only','single habitat word','compound spelling']},
  {p:'The natural place where a species lives is its:',c:'habitat',w:['consumer','biodiversity','food web role']},
  {p:'The variety of genes, species and ecosystems is:',c:'biodiversity',w:['decomposition','migration tag','restoration fee']},
  {p:'A: “What is a food web?” B: “It shows ______.”',c:'interconnected feeding relationships',w:['one isolated animal','only non-living factors','a visitor route'],representation:'dialogue'},
  {p:'An organism that breaks down dead matter is a:',c:'decomposer',w:['producer only','habitat','corridor']},
  {p:'A species with a disproportionately large ecological effect is a:',c:'keystone species',w:['headline species','food service','water tag']},
  {p:'Choose the correct restoration collocation.',c:'restore habitat',w:['do habitat','make biodiversity down','take a food web']},
  {p:'Scientists ______ a population to detect change.',c:'monitor',w:['restore into','disrupt at','provide on']},
  {p:'Roads may ______ ecological connectivity.',c:'disrupt',w:['conserve from','monitor into','provide at']},
  {p:'A: “How can corridors help?” B: “They can ______ connectivity.”',c:'improve',w:['decompose','invade','consume'],representation:'dialogue'},
  {p:'Wetlands can ______ ecosystem services such as flood storage.',c:'provide',w:['break','tag','compound']},
  {p:'Management may be needed to ______ invasive species.',c:'control',w:['produce a tag','food-web from','biodiversity into']}
];
const grammar:Raw[]=[
  {p:'Which is a compound noun?',c:'food web',w:['web is complex','feed quickly','very diverse']},
  {p:'In “wildlife corridor”, the head noun is:',c:'corridor',w:['wildlife','wild','life only']},
  {p:'What kind of thing is a “river bank”?',c:'a type of bank',w:['a type of river only','a verb phrase','an adjective']},
  {p:'A: “Where is plural marked in food web?” B: “On ______.”',c:'web: food webs',w:['food: foods web','both always','neither'],representation:'dialogue'},
  {p:'Which plural is correct?',c:'wildlife corridors',w:['wildlives corridor','wildlifes corridors','wildlife corridor-es']},
  {p:'In “ecosystem service”, ecosystem functions mainly as:',c:'a modifier of service',w:['the plural marker','a finite verb','a tag question']},
  {p:'Which spelling is standard?',c:'food chain',w:['foodchain in every dictionary','food-chain compulsory','foods chain']},
  {p:'A: “Is ‘wildlife’ open or closed?” B: “It is normally ______.”',c:'closed',w:['open as wild life','hyphenated always','a phrase only'],representation:'dialogue'},
  {p:'Which compound is commonly hyphenated in this context?',c:'decision-making',w:['food web','wildlife','river bank']},
  {p:'Why should learners check a dictionary?',c:'Compound spelling is conventional and not fully predictable.',w:['Every compound is closed.','Meaning never matters.','Plural always goes first.']},
  {p:'Which compound has “loss” as its head?',c:'habitat loss',w:['loss habitat interpreted the same','habitat losing','lost habitat adjective']},
  {p:'Which statement is correct?',c:'A compound noun can have a specialised meaning and several spelling patterns.',w:['All compounds are literal and closed.','Every first noun takes plural.','Compounds cannot contain V-ing.']}
];
const passage1:QuestionStimulus={id:'eng11-stim-u10-reading-1',title:'A corridor measured beyond tree planting',content:`A farming district created a wildlife corridor between two forest patches. The first plan measured success by the number of trees planted. Ecologists and farmers argued that planting totals did not show whether animals could move safely or whether the trees survived.

The revised project mapped existing vegetation, roads, streams and land use. Farmers identified places where fencing or crop schedules could affect movement. The corridor used native trees and shrubs, but also retained open areas needed by some species. Small crossings were added under two busy roads.

Monitoring combined camera traps, bird surveys, plant survival and roadkill records. After two years, several mammals appeared in both forest patches more often, and roadkill declined near the crossings. However, some planted sections had low survival during a dry season, and an invasive shrub spread along one edge.

The team replaced failed planting methods, controlled the shrub and compensated participating farmers for agreed land-management changes. It avoided claiming that connectivity was fully restored because genetic exchange and long-term population effects remained unknown. Future monitoring will compare corridor and non-corridor areas and record maintenance costs. Surveys will also ask farmers whether compensation arrives on time and whether management rules remain practical during different seasons. If conflict grows, the agreement allows boundaries and schedules to be reviewed rather than abandoning monitoring. The project demonstrates that a wildlife corridor is a functioning landscape, not simply a line of trees. Success depends on habitat quality, movement, survival, neighbouring livelihoods and continued adjustment based on multiple indicators.`};
const passage2:QuestionStimulus={id:'eng11-stim-u10-reading-2',title:'Reintroducing a predator carefully',content:`A reserve considered reintroducing a native predator that had disappeared decades earlier. Supporters expected it to limit an overabundant herbivore and reduce damage to young trees. Livestock owners worried that animals near the reserve might also be attacked.

Before release, researchers estimated prey numbers, mapped habitat and studied causes of the predator’s earlier disappearance. The reserve improved livestock fencing with willing farmers and created a verified compensation process. It also set conditions that could pause or reverse the programme if mortality, conflict or prey decline crossed agreed thresholds.

Six animals were released with tracking collars. During the first year, most remained inside suitable habitat, but one repeatedly approached farms and was relocated. Browsing pressure fell in several monitored plots, while tree recovery differed by soil and rainfall. Researchers warned that the small sample and short period could not establish a complete food-web effect.

Community meetings reviewed tracking summaries, livestock reports and vegetation data. Participants disagreed about acceptable risk, but the public criteria made decisions more transparent. The reserve planned a staged release rather than rapid expansion. Independent reviewers would audit compensation claims and animal-welfare records before any second release. Researchers would also compare vegetation inside and outside predator ranges to reduce the risk of attributing every change to reintroduction. The case shows that reintroduction is not achieved at the moment animals are released. It requires preparation, conflict mitigation, welfare monitoring, ecological evidence and rules for changing course. Expected benefits may take years, while costs can appear quickly and may be distributed unevenly.`};
const passage3:QuestionStimulus={id:'eng11-stim-u10-reading-3',title:'A seagrass restoration experiment',content:`A coastal community noticed that seagrass beds had declined near boat routes. Seagrass provides nursery habitat, stores carbon and stabilises sediment, but it can be damaged by anchors, poor water quality and repeated disturbance. A volunteer group proposed planting shoots across the entire bay.

Marine scientists recommended a smaller experiment first. They tested water clarity, current speed and sediment at several sites, then transplanted small plots using two methods. Fishers contributed knowledge about seasonal currents and areas where boats sought shelter. Temporary no-anchor markers protected the plots while leaving an emergency route open.

After eighteen months, survival was high at two sites and poor at a third where water remained cloudy. Juvenile fish were more frequent near surviving plots, but researchers could not yet separate the effect of seagrass from differences already present between sites. Carbon storage had not been measured directly.

The group expanded only the successful methods and worked upstream on sources of muddy runoff. It also surveyed whether markers affected fishing access and adjusted one boundary. Reports included failed plots rather than presenting only favourable photographs. Volunteers received the same monitoring protocol so observations from different months could be compared. The team stored photographs with dates and fixed locations, while scientists checked a sample of species records. Long-term evaluation will compare vegetation cover, water quality, fish communities, maintenance and local access. The experiment illustrates why ecological restoration needs both site conditions and social design. Planting can fail if the causes of decline continue, and visible growth alone does not establish every claimed ecosystem service.`};
const reading:Raw[]=[
  {p:'Why was tree count an insufficient corridor measure?',c:'It did not show survival, movement or safety.',w:['No trees were planted.','Farmers opposed all vegetation.','Animals never use corridors.'],stimulus:passage1},
  {p:'What local knowledge did farmers contribute?',c:'Where fencing, crops and land use affected movement',w:['Predator genetics','Ocean currents','School surveys'],stimulus:passage1},
  {p:'Which problem appeared after planting?',c:'Low survival in dry sections and an invasive shrub',w:['Every crossing failed.','Roadkill rose everywhere.','All farmers withdrew.'],stimulus:passage1},
  {p:'Why did the team avoid claiming full restoration?',c:'Long-term population and genetic effects were unknown.',w:['No monitoring existed.','All indicators declined.','Connectivity has no meaning.'],stimulus:passage1},
  {p:'What benefit was expected from predator return?',c:'Reduced herbivore pressure on young trees',w:['More road traffic','Less habitat mapping','Guaranteed livestock growth'],stimulus:passage2},
  {p:'What made the programme adaptive?',c:'Pre-agreed thresholds could pause or reverse action.',w:['Every release was permanent.','Data remained private.','Conflict had no response.'],stimulus:passage2},
  {p:'Why was one predator relocated?',c:'It repeatedly approached farms.',w:['Its collar failed once.','Trees recovered too fast.','Prey numbers increased.'],stimulus:passage2},
  {p:'Which limitation constrained ecological conclusions?',c:'A small sample and short monitoring period',w:['No animals were released.','Vegetation was never measured.','Farmers had no concerns.'],stimulus:passage2},
  {p:'Why did scientists propose a small seagrass experiment?',c:'Site conditions could strongly affect survival.',w:['Seagrass has no habitat role.','The bay had perfect water quality.','Volunteers rejected monitoring.'],stimulus:passage3},
  {p:'What caused poor survival at one site?',c:'Persistently cloudy water',w:['Too many juvenile fish','Emergency access','High carbon measurements'],stimulus:passage3},
  {p:'Why could more juvenile fish not be attributed fully to seagrass?',c:'Sites may have differed before restoration.',w:['Fish were not observed.','Every plot failed.','Carbon was measured directly.'],stimulus:passage3},
  {p:'What broader lesson does passage 3 support?',c:'Restoration must address original pressures and track ecological and social outcomes.',w:['Planting alone proves every service.','Failed plots should be hidden.','Local access never matters.'],stimulus:passage3}
];
const writing:Raw[]=[
  {p:'Choose the best order: (a) explain the mechanism; (b) state habitat loss; (c) propose monitored restoration.',c:'b-a-c',w:['a-c-b','c-b-a','b-c-a']},
  {p:'Which opening defines a clear ecological problem?',c:'Seagrass cover declined by 30% in monitored boat-route plots over five years.',w:['Nature is important.','Everything is collapsing.','Plants are green.']},
  {p:'Choose the connector: “Planting survival improved. ______, water quality remained poor.”',c:'However',w:['Therefore','Because of','In addition only']},
  {p:'A: “What should follow a mechanism?” B: “______”',c:'Evidence and a response addressing the cause',w:['An unrelated species list','A guarantee','No indicator'],representation:'dialogue'},
  {p:'Which sentence uses a compound noun correctly?',c:'The restoration plan includes water-quality monitoring.',w:['The restoration plans includes waters quality.','Water qualities monitoring is verb.','The plan restorationly.']},
  {p:'Which detail is least relevant to an ecosystem restoration proposal?',c:'The report designer’s favourite animal',w:['Baseline','Maintenance owner','Review trigger']},
  {p:'Choose the cautious evidence statement.',c:'Camera records suggest increased use of the corridor by two species.',w:['Two photos prove full recovery.','The corridor guarantees genetic exchange.','Monitoring is unnecessary.']},
  {p:'A: “How do I pluralise wildlife corridor?” B: “______”',c:'wildlife corridors',w:['wildlives corridor','wildlifes corridors','wildlife corridor-es'],representation:'dialogue'},
  {p:'Which topic sentence fits survival, movement and roadkill indicators?',c:'Corridor performance should be assessed with multiple ecological measures.',w:['Trees are counted.','Roads exist.','Animals move.']},
  {p:'Which ecosystem-proposal revision avoids overclaiming?',c:'The pilot may improve habitat connectivity if crossings and vegetation are maintained.',w:['The pilot restores every population forever.','One year proves all effects.','Maintenance cannot matter.']},
  {p:'Choose the clearest cause–response combination.',c:'Because muddy runoff reduced light, the project addressed upstream erosion.',w:['Runoff although light therefore.','Erosion because project.','Because of runoff reduced, so erosion.']},
  {p:'Which final sentence best closes an adaptive proposal?',c:'Annual reviews will compare indicators and trigger changes if thresholds are missed.',w:['Success is guaranteed.','Only photos will be used.','The proposal ends.']}
];
const communication:Raw[]=[
  {p:'Which question asks for ecological evidence?',c:'Which indicators show that food-web function improved?',w:['Is the logo attractive?','Who speaks loudest?','Is the title short?']},
  {p:'A: “Let’s plant everywhere.” B: “______”',c:'Could we test site conditions and survival in a pilot first?',w:['Monitoring is unnecessary.','Every site is identical.','Planting guarantees success.'],representation:'dialogue'},
  {p:'Which proposal includes adaptive management?',c:'Set thresholds, monitor results and revise the method.',w:['Never change the plan.','Hide failed plots.','Use no baseline.']},
  {p:'A: “Farmers are worried about access.” B: “______”',c:'Let’s map essential routes and include them in the design review.',w:['Livelihoods are irrelevant.','Decide before consultation.','Remove all feedback.'],representation:'dialogue'},
  {p:'Which statement identifies a trade-off?',c:'A closure may protect nesting sites but reduce seasonal fishing access.',w:['Every action has only benefits.','Access and habitat never interact.','Trade-offs are spelling.']},
  {p:'A: “One species increased.” B: “______”',c:'That is encouraging, but what happened to diversity and ecosystem function?',w:['Full recovery is proven.','No other indicator matters.','Stop monitoring.'],representation:'dialogue'},
  {p:'What makes consultation meaningful?',c:'Stakeholders can influence choices and review outcomes.',w:['They receive a final notice only.','Data is withheld.','The plan cannot change.']},
  {p:'A: “Why include local fishers?” B: “______”',c:'They hold place-based knowledge and are affected by access decisions.',w:['Only scientists observe change.','Rights do not matter.','Fishing has no ecosystem link.'],representation:'dialogue'},
  {p:'Which question reveals uncertainty?',c:'What effects remain unmeasured or may take longer to appear?',w:['Can we guarantee everything?','Why report only success?','Is uncertainty forbidden?']},
  {p:'A: “The pilot failed at one site.” B: “______”',c:'Let’s compare conditions and report the failure before redesigning.',w:['Hide it.','Expand the same method everywhere.','Delete the baseline.'],representation:'dialogue'},
  {p:'Which response balances science and distribution?',c:'Compare ecological benefit with who bears cost and how harm can be reduced.',w:['Choose ecology with no social data.','Choose popularity only.','Assume equal impacts.']},
  {p:'A: “When should the plan change?” B: “______”',c:'When monitored thresholds or unexpected harms indicate revision is needed.',w:['Never.','Only after all damage is permanent.','Whenever a slogan changes.'],representation:'dialogue'}
];
export const g11EnglishModule10Questions:CourseQuestion[]=[
  ...build('pronunciation','language',pronunciation,['form','meaning-tone']),...build('vocabulary','language',vocabulary,['meaning-word-form','ecosystem-collocation']),
  ...build('grammar','language',grammar,['formation-head','meaning-spelling']),...build('reading','reading',reading,['main-detail','infer-evaluate']),
  ...build('writing','writing',writing,['order-cohesion','transform-evidence']),...build('communication','communication-culture',communication,['ask-suggest','stakeholder-tradeoff'])
];
