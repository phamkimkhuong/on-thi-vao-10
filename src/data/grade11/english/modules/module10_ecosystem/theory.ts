import type { TheoryBlock } from '@/data/schema';
type Choice = 'A' | 'B' | 'C' | 'D';
const sourceIds = ['eng11-source-official-program', 'eng11-source-global-success-textbook'];
const block = (kind: string, lesson: string, title: string, content: string[], keys: string[], ex: [string, string, string[], string], checks: Array<[string,[string,string,string,string],Choice,string]>, orderIndex: number, formulas: TheoryBlock['formulas'] = []): TheoryBlock => ({
  id:`eng11-theory-u10-${kind}`,courseId:'grade11:english',moduleId:'eng11-m10',
  lessonIds:kind==='vocabulary'?['eng11-u10-getting-started','eng11-u10-language']:[`eng11-u10-${lesson}`],
  outcomeIds:[`eng11-out-u10-${kind}`],questionTypeIds:[`eng11-qt-u10-${kind}`],sourceIds,title,
  objectives:[`Hiểu và vận dụng ${title}.`,'Tránh suy luận đơn giản hóa hệ thống.'],content:content.join('\n\n'),formulas,keyPoints:keys,
  workedExamples:[{id:`eng11-ex-u10-${kind}`,title:ex[0],problem:ex[1],steps:ex[2],answer:ex[3]}],
  checkpoints:checks.map((x,i)=>({id:`eng11-cp-u10-${kind}-${i+1}`,question:x[0],options:x[1],correctAnswer:x[2],explanation:x[3]})),
  orderIndex,reviewStatus:'source_checked'
});
export const g11EnglishModule10Theory: TheoryBlock[] = [
  block('pronunciation','language','Intonation in tag questions',[
    'Tag question gồm statement và auxiliary + pronoun đảo polarity: “The wetland is recovering, isn’t it?” Positive statement thường đi với negative tag và ngược lại.',
    'Rising intonation trên tag cho thấy người nói thật sự chưa chắc và hỏi thông tin. Falling intonation thường mời người nghe đồng thuận với điều người nói tin là đúng.',
    'Chọn auxiliary theo tense/modal của statement và pronoun theo subject. “Let’s...” dùng shall we; imperative thường dùng will you trong các mẫu quen thuộc.'
  ],['Opposite polarity.','Rising = genuine uncertainty.','Falling = expected agreement.','Match auxiliary and pronoun.'],
  ['Đọc ý nghĩa','The river is cleaner, isn’t it ↗?',['Tag có polarity đối lập và đúng auxiliary.','Rising tag cho thấy uncertainty nên người nói hỏi xác nhận thật.'],'Người nói hỏi xác nhận thật.'],
  [['Tag đúng: “Birds migrate, ___?”',['don’t they','aren’t it','do birds','isn’t they'],'A','Present simple migrate → don’t they.'],['Falling tag thường:',['hỏi thật','mời đồng thuận','xóa statement','tạo command'],'B','Người nói kỳ vọng agreement.']],1),
  block('vocabulary','language','Vocabulary: ecosystem structure, threats and restoration',[
    'Ecosystem gồm biotic components và abiotic conditions. Habitat là nơi sống; biodiversity bao gồm đa dạng gene, loài và hệ sinh thái; food web mô tả nhiều quan hệ feeding.',
    'Producer tạo năng lượng sinh học; consumer ăn sinh vật khác; decomposer phân giải vật chất. Keystone species có ảnh hưởng lớn so với độ phổ biến; invasive species có thể làm thay đổi tương tác.',
    'Collocation gồm restore habitat, conserve biodiversity, disrupt a food web, monitor a population, control invasive species, provide ecosystem services và improve ecological connectivity.'
  ],['biotic/abiotic','habitat/biodiversity','food web','restore/monitor/connectivity'],
  ['Chọn vai trò','Fungi breaking down dead matter are...',['Xác định chức năng là phân giải vật chất hữu cơ chết.','Sinh vật đảm nhiệm chức năng đó là decomposers.'],'decomposers'],
  [['Cụm đúng:',['restore habitat','do biodiversity','make food web down','take species'],'A','Restore habitat là collocation.'],['Nơi loài sống là:',['food web','habitat','consumer','service'],'B','Habitat là nơi sống.']],2),
  block('grammar','language','Compound nouns',[
    'Compound noun gồm hai hay nhiều thành tố hoạt động như một danh từ: food web, wildlife corridor, ecosystem service. Head noun thường ở cuối và quyết định loại: a river bank là một loại bank.',
    'Dạng viết có thể closed (wildlife), hyphenated (decision-making) hoặc open (food chain). Không tự đoán spelling; đối chiếu từ điển và convention của thuật ngữ.',
    'Số nhiều thường đánh dấu trên head noun: food webs, wildlife corridors. Stress thường rơi sớm trong nhiều compound nouns nhưng khác phrase mô tả; bài core tập trung nghĩa, formation và spelling.'
  ],['Head noun thường cuối.','Plural trên head noun.','Closed/hyphenated/open.','Nghĩa có thể chuyên biệt.'],
  ['Xác định head','In “wildlife corridor”, what is the head?',['Hỏi toàn bộ cụm chỉ một loại sự vật nào.','Đây là một loại corridor nên corridor là head noun.'],'corridor'],
  [['Số nhiều đúng:',['food webs','foods web','food webes','foods webs always'],'A','Web là head noun.'],['Dạng chuẩn là:',['foodchain','food chain','food-chain bắt buộc','foods chain'],'B','Food chain thường viết mở.']],3,[
    {id:'eng11-form-u10-compound',label:'Compound noun',expression:'modifier + head\\ noun',variables:[{symbol:'head noun',meaning:'Thành tố quyết định loại và số'}],conditions:['Spelling theo quy ước từ vựng']}
  ]),
  block('reading','reading','Reading ecosystem evidence and interactions',[
    'Ecosystem text cần theo dõi mechanism: thay đổi habitat, resource hoặc species dẫn tới tác động qua food web. Không suy ra causation chỉ từ hai xu hướng cùng xảy ra.',
    'Monitoring cần baseline, comparison, multiple indicators và time. Species count tăng có thể tốt nhưng diversity, reproduction, water quality hoặc connectivity vẫn yếu.',
    'Restoration có trade-offs và lag. Đánh giá ai sử dụng đất/nước, rủi ro chuyển nơi khác, maintenance và uncertainty. Adaptive management dùng monitoring để điều chỉnh action.'
  ],['Mechanism và food-web effects.','Baseline + multiple indicators.','Lag, trade-off và adaptive management.'],
  ['Đánh giá phục hồi','One bird species increased. Is the ecosystem restored?',['Một indicator chưa đủ.','Cần function, diversity và thời gian.'],'Chưa thể kết luận.'],
  [['Evidence mạnh hơn:',['multi-year indicators','one photo','one visitor','a slogan'],'A','Nhiều indicator qua thời gian mạnh hơn.'],['Adaptive management là:',['không đổi kế hoạch','adjust using monitoring','bỏ baseline','chỉ đếm một loài'],'B','Monitoring dẫn tới adjustment.']],4),
  block('writing','writing','Indirect writing: explaining ecosystem change',[
    'Đoạn tốt đi từ condition/problem tới mechanism, evidence, consequence và response. Nêu phạm vi không gian/thời gian và tránh viết mọi thay đổi là “ecosystem collapse”.',
    'Compound nouns giúp chính xác: habitat loss, water quality, food-web change, restoration plan. Linking words thể hiện cause/contrast nhưng không thay evidence.',
    'Proposal cần baseline, action, responsibility, indicator, review point và unintended effects. Dùng may/suggests/likely nếu uncertainty tồn tại.'
  ],['Condition–mechanism–evidence–response.','Dùng thuật ngữ chính xác.','Nêu indicator và review.'],
  ['Sửa overclaim','Rewrite “Planting trees fixes the ecosystem.”',['Thay fixes bằng may improve để phản ánh uncertainty.','Nêu loại cây, điều kiện và chỉ báo cần theo dõi.'],'Planting suitable native trees may improve habitat if survival and food-web effects are monitored.'],
  [['Proposal cần:',['baseline','logo duy nhất','guarantee','zero review'],'A','Baseline cho so sánh.'],['Từ giảm overclaim:',['proves always','suggests','guarantees','ends debate'],'B','Suggests phản ánh uncertainty.']],5),
  block('communication','communication-culture','Discussing ecosystem decisions',[
    'Đề xuất: We could restore..., One option is..., What if we test...? Hỏi evidence: Which indicator supports that claim? What baseline will we use?',
    'Stakeholders có thể gồm residents, farmers, fishers, Indigenous/local communities, scientists và agencies. Consultation không chỉ là thông báo; cần cơ chế ảnh hưởng quyết định.',
    'Trade-off nên nêu rõ benefit, cost, distribution và mitigation. Pilot, monitoring, review trigger và exit condition giúp quyết định có thể thích ứng.'
  ],['Ask for indicators.','Map stakeholders and rights.','State trade-offs.','Pilot–monitor–review.'],
  ['Phản hồi proposal','“Close all access immediately.”',['Ghi nhận conservation goal.','Hỏi evidence, livelihood impact và alternatives.'],'What evidence supports a full closure, and can a monitored zone protect habitat while maintaining essential access?'],
  [['Câu hỏi evidence:',['Which indicator will change?','Is the poster green?','Is it popular?','Who speaks loudest?'],'A','Indicator liên hệ outcome.'],['Consultation thực chất cần:',['chỉ thông báo','stakeholder influence','không feedback','quyết định trước'],'B','Người liên quan cần ảnh hưởng quyết định.']],6)
];
