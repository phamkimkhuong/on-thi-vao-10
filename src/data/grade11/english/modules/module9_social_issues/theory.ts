import type { TheoryBlock } from '@/data/schema';
type Choice = 'A' | 'B' | 'C' | 'D';
const sourceIds = ['eng11-source-official-program', 'eng11-source-global-success-textbook'];
const block = (kind: string, lesson: string, title: string, content: string[], keys: string[], ex: [string, string, string[], string], checks: Array<[string, [string,string,string,string], Choice, string]>, orderIndex: number, formulas: TheoryBlock['formulas'] = []): TheoryBlock => ({
  id: `eng11-theory-u9-${kind}`, courseId: 'grade11:english', moduleId: 'eng11-m9',
  lessonIds: kind === 'vocabulary' ? ['eng11-u9-getting-started', 'eng11-u9-language'] : [`eng11-u9-${lesson}`],
  outcomeIds: [`eng11-out-u9-${kind}`], questionTypeIds: [`eng11-qt-u9-${kind}`], sourceIds, title,
  objectives: [`Hiểu và vận dụng ${title}.`, 'Tránh lỗi hình thức và suy luận phổ biến.'], content: content.join('\n\n'),
  formulas, keyPoints: keys, workedExamples: [{ id: `eng11-ex-u9-${kind}`, title: ex[0], problem: ex[1], steps: ex[2], answer: ex[3] }],
  checkpoints: checks.map((x,i) => ({ id: `eng11-cp-u9-${kind}-${i+1}`, question: x[0], options: x[1], correctAnswer: x[2], explanation: x[3] })),
  orderIndex, reviewStatus: 'source_checked'
});
export const g11EnglishModule9Theory: TheoryBlock[] = [
  block('pronunciation','language','Intonation in choice questions',[
    'Choice question đưa ra từ hai lựa chọn trở lên, thường nối bằng or. Mỗi lựa chọn chưa cuối dùng rising intonation để báo còn tiếp; lựa chọn cuối dùng falling intonation để khép câu.',
    'Ví dụ “Should we discuss peer pressure ↗ or bullying ↘?” Với ba lựa chọn, hai mục đầu lên và mục cuối xuống. Đây khác Yes/No question chứa or chỉ nối thành phần không phải lựa chọn thực.',
    'Context vẫn quan trọng: người nói có thể nhắc lại một lựa chọn với rise để xác nhận. Bài web tập trung nhận biết mẫu trung tính rise–fall, không chấm phát âm.'
  ],['Non-final choices rise.','Final choice falls.','Xác định or có thật sự tạo alternatives.'],
  ['Đánh dấu tone','Online ↗ or in person ↘?',['Hai alternatives được nêu.','Mục đầu rise, mục cuối fall.'],'rise–fall'],
  [['Lựa chọn cuối thường:',['fall','rise','biến mất','không stress'],'A','Fall khép danh sách lựa chọn.'],['Mẫu ba lựa chọn là:',['fall–rise–rise','rise–rise–fall','rise–fall–rise','flat'],'B','Các mục chưa cuối rise; mục cuối fall.']],1),
  block('vocabulary','language','Vocabulary: social issues, impact and support',[
    'Peer pressure là áp lực từ nhóm bạn; bullying là hành vi gây hại lặp lại có mất cân bằng quyền lực; cyberbullying diễn ra qua nền tảng số. Body shaming nhắm vào ngoại hình; discrimination là đối xử bất công dựa trên đặc điểm.',
    'Awareness campaign nâng nhận thức nhưng support service cung cấp trợ giúp. Bystander chứng kiến; upstander can thiệp an toàn hoặc báo cáo. Confidential không đồng nghĩa tuyệt đối secret nếu có nguy cơ gây hại.',
    'Collocation gồm experience peer pressure, report bullying, raise awareness, seek support, protect privacy, challenge discrimination và measure campaign outcomes.'
  ],['peer pressure/bullying/cyberbullying','raise awareness','seek support','protect privacy'],
  ['Chọn khái niệm','Repeated harmful messages sent online are...',['Có hành vi gây hại lặp lại.','Môi trường thực hiện là nền tảng số nên chọn cyberbullying.'],'cyberbullying'],
  [['Cụm đúng là:',['raise awareness','do awareness','make bullying','take privacy'],'A','Raise awareness là collocation.'],['Người chứng kiến là:',['campaign','bystander','outcome','pressure'],'B','Bystander chứng kiến sự việc.']],2),
  block('grammar','language','Linking words and phrases',[
    'Bổ sung: moreover, besides, in addition. Tương phản: however, although + clause; despite/in spite of + noun hoặc V-ing; by contrast. Các connector đứng đầu câu thường theo sau dấu phẩy.',
    'Nguyên nhân: because/as/since + clause; because of + noun/V-ing. Kết quả: therefore, as a result, consequently. Không ghép because...so hoặc although...but trong cùng cấu trúc chuẩn.',
    'Chọn linker theo cả quan hệ nghĩa và grammar. “Although the campaign was popular, reports did not fall.” nhưng “Despite its popularity, reports did not fall.”'
  ],['although + clause','despite + noun/V-ing','because + clause','because of + noun/V-ing','therefore = result'],
  ['Đổi cấu trúc','Although attendance was high → Despite...',['Although đi với clause attendance was high.','Sau despite phải đổi thành noun phrase high attendance.'],'Despite high attendance'],
  [['___ the rain, students attended.',['Despite','Although','Because','Therefore'],'A','Despite + noun.'],['The route was anonymous; ___, more students reported.',['although','therefore','because of','despite'],'B','Vế sau là kết quả.']],3,[
    { id:'eng11-form-u9-contrast',label:'Contrast',expression:'although + clause;\\ despite + noun/V-ing',variables:[{symbol:'clause',meaning:'S + V'}],conditions:['Không dùng although...but'] },
    { id:'eng11-form-u9-cause',label:'Cause',expression:'because + clause;\\ because\\ of + noun/V-ing',variables:[{symbol:'noun',meaning:'Cụm danh từ'}],conditions:['Chọn cấu trúc sau linker'] }
  ]),
  block('reading','reading','Reading social interventions critically',[
    'Đọc văn bản xã hội theo problem–population–mechanism–intervention–outcome. Phân biệt reach như lượt xem với outcome như hành vi báo cáo an toàn, giảm sự cố hoặc tiếp cận hỗ trợ.',
    'Số liệu nhạy cảm có thể bị under-reporting. Tăng báo cáo sau chiến dịch có thể phản ánh hệ thống tin cậy hơn, không nhất thiết vấn đề tăng. Cần time frame, definition và nguồn.',
    'Đánh giá fairness: ai có thể truy cập, ai chịu rủi ro bị lộ, cộng đồng bị ảnh hưởng có tham gia thiết kế không, và quy trình escalation có an toàn không.'
  ],['Reach khác outcome.','Reporting data cần context.','Đánh giá privacy, access và fairness.'],
  ['Suy luận số liệu','Reports rose after an anonymous channel opened.',['Channel giảm barrier báo cáo.','Không tự kết luận incidents tăng.'],'Có thể phản ánh reporting tốt hơn.'],
  [['Outcome mạnh hơn là:',['reduced repeat incidents','poster views','logo likes','leaflets printed'],'A','Repeat incidents gần tác động thực.'],['Tăng reports có thể do:',['vấn đề chắc chắn tăng','access to reporting improved','data vô nghĩa','campaign thất bại'],'B','Reporting access làm lộ nhu cầu trước đó.']],4),
  block('writing','writing','Indirect writing: a social-issue proposal',[
    'Proposal rõ gồm problem có phạm vi, evidence, objectives, actions, roles, safeguards, timeline và evaluation. Đối với cyberbullying cần privacy, reporting route và support sau báo cáo.',
    'Dùng linking words để thể hiện logic, không trang trí. However nêu giới hạn; therefore dẫn tới action; in addition bổ sung thành phần.',
    'Mục tiêu phải đo được và không hứa “end bullying forever”. Có thể theo dõi awareness, confidence to seek help, response time và repeat incidents với bảo vệ dữ liệu.'
  ],['Problem–evidence–action–evaluation.','Nêu safeguard và owner.','Dùng outcome thay vanity metric.'],
  ['Sửa mục tiêu','Make “raise awareness” measurable.',['Xác định đối tượng và hành vi/kiến thức có thể đo.','Thêm baseline, target và thời hạn đánh giá.'],'Increase students who know the reporting route from baseline to target by term end.'],
  [['Proposal cần:',['evaluation plan','khẩu hiệu duy nhất','tin đồn','zero safeguard'],'A','Evaluation cho biết action có hiệu quả.'],['Linker bổ sung là:',['however','in addition','therefore only','because'],'B','In addition bổ sung thông tin.']],5),
  block('communication','communication-culture','Responding safely and respectfully',[
    'Thể hiện disappointment: I’m sorry that happened; That’s really disappointing. Tránh đổ lỗi như Why didn’t you stop it? Hỏi nhu cầu: What would feel helpful now?',
    'Giữ privacy nhưng không hứa secrecy tuyệt đối khi có nguy cơ. Nói rõ: I will respect your privacy, but if someone is in danger, we need qualified help.',
    'Bystander có thể document an toàn, report qua kênh phù hợp, hỗ trợ người bị ảnh hưởng và tránh đối đầu nguy hiểm. Emergency hoặc nguy cơ tự gây hại cần escalation ngay.'
  ],['Validate, do not blame.','Ask what support is needed.','Explain limits of confidentiality.','Escalate danger.'],
  ['Phản hồi','A friend reports threatening messages.',['Ghi nhận và không đổ lỗi.','Giữ evidence, block/report và tìm trusted adult.'],'I’m sorry. Let’s save the evidence and contact a trusted adult together.'],
  [['Phản hồi phù hợp:',['I’m sorry this happened.','You caused it.','Keep every threat secret.','Ignore it.'],'A','Ghi nhận trải nghiệm.'],['Khi có danger nên:',['hứa bí mật tuyệt đối','seek qualified help','đối đầu một mình','xóa evidence'],'B','Safety cần escalation.']],6)
];
