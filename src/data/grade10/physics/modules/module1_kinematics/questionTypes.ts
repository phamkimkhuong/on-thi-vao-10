import type { QuestionType } from '@/types';

export const g10PhysicsModule1QuestionTypes: QuestionType[] = [
  {
    id: 'phy10-qt8', topicId: 'phy10-t1', name: 'Hệ quy chiếu, thời điểm và tọa độ', slug: 'he-quy-chieu-toa-do',
    description: 'Xác định vật mốc, chiều dương, gốc tọa độ, mốc thời gian và mô tả vị trí của vật bằng tọa độ có dấu.',
    exampleQuestionId: 'phy10-m1-q001', difficulty: 'easy', examFrequency: 'medium',
    theory: ['Chuyển động và đứng yên có tính tương đối, phải được mô tả so với vật mốc.', 'Trong chuyển động thẳng, tọa độ x phụ thuộc gốc O và chiều dương; thời điểm t phụ thuộc mốc thời gian.'],
    recognitionSigns: ['Đề hỏi vật chuyển động hay đứng yên so với vật nào, hoặc yêu cầu chọn hệ quy chiếu.', 'Đề cho trục Ox, vị trí ở bên trái/bên phải gốc và yêu cầu tìm tọa độ, thời điểm hoặc khoảng thời gian.'],
    solvingSteps: ['Chỉ rõ vật khảo sát và vật mốc.', 'Ghi gốc O, chiều dương và mốc thời gian trước khi gán dấu.', 'Biểu diễn vị trí bằng tọa độ x; phân biệt thời điểm t với khoảng thời gian Δt.'],
    commonMistakes: ['Kết luận vật chuyển động mà không nói so với vật mốc nào.', 'Đồng nhất tọa độ âm với quãng đường âm hoặc nhầm thời điểm với thời gian chuyển động.']
  },
  {
    id: 'phy10-qt9', topicId: 'phy10-t1', name: 'Quãng đường và độ dịch chuyển', slug: 'quang-duong-do-dich-chuyen',
    description: 'Tính quãng đường, độ dịch chuyển và biểu diễn vector độ dịch chuyển trong chuyển động thẳng nhiều chặng.',
    exampleQuestionId: 'phy10-m1-q013', difficulty: 'easy', examFrequency: 'high',
    theory: ['Quãng đường s là tổng độ dài quỹ đạo nên không âm.', 'Độ dịch chuyển trong chuyển động thẳng là Δx=x₂−x₁, có dấu theo trục và chỉ phụ thuộc vị trí đầu–cuối.'],
    recognitionSigns: ['Đề có các chặng đi rồi quay lại hoặc hỏi độ dài đường đi và thay đổi vị trí.', 'Đề yêu cầu so sánh quãng đường với độ lớn độ dịch chuyển.'],
    solvingSteps: ['Vẽ trục, đánh dấu vị trí đầu, các điểm đổi chiều và vị trí cuối.', 'Cộng độ dài từng chặng để tìm s.', 'Tính Δx=x_cuối−x_đầu và kiểm tra |Δx|≤s.'],
    commonMistakes: ['Lấy tọa độ cuối trừ đầu để làm quãng đường trong mọi trường hợp.', 'Cho rằng độ dịch chuyển luôn dương hoặc luôn bằng quãng đường.']
  },
  {
    id: 'phy10-qt10', topicId: 'phy10-t1', name: 'Tốc độ và vận tốc', slug: 'toc-do-van-toc',
    description: 'Phân biệt tốc độ với vận tốc; tính tốc độ trung bình, vận tốc trung bình và giá trị tức thời từ dữ liệu đơn giản.',
    exampleQuestionId: 'phy10-m1-q025', difficulty: 'easy', examFrequency: 'high',
    theory: ['Tốc độ trung bình bằng tổng quãng đường chia tổng thời gian.', 'Vận tốc trung bình trong chuyển động thẳng bằng độ dịch chuyển chia khoảng thời gian; dấu cho biết chiều chuyển động.'],
    recognitionSigns: ['Đề hỏi nhanh/chậm, số chỉ tốc kế, tốc độ trung bình hoặc vận tốc trung bình.', 'Lộ trình nhiều chặng có thể đổi chiều hoặc dừng nghỉ.'],
    solvingSteps: ['Xác định đề hỏi tốc độ hay vận tốc.', 'Tính tổng s hoặc Δx tương ứng và tổng thời gian kể cả thời gian nghỉ nếu đề tính cả hành trình.', 'Chia đúng đại lượng, ghi đơn vị và diễn giải dấu của vận tốc.'],
    commonMistakes: ['Lấy trung bình cộng các tốc độ khi thời gian/quãng đường các chặng khác nhau.', 'Dùng quãng đường để tính vận tốc trung bình hoặc bỏ thời gian nghỉ.']
  },
  {
    id: 'phy10-qt11', topicId: 'phy10-t1', name: 'Cộng vận tốc và chuyển động tương đối', slug: 'cong-van-toc',
    description: 'Vận dụng công thức vận tốc tương đối trong các chuyển động thẳng cùng chiều, ngược chiều và qua sông có thành phần vuông góc.',
    exampleQuestionId: 'phy10-m1-q037', difficulty: 'medium', examFrequency: 'medium',
    theory: ['Công thức vector: v⃗_A/C=v⃗_A/B+v⃗_B/C.', 'Trong một chiều phải chọn chiều dương và dùng vận tốc có dấu; tốc độ tương đối cùng chiều thường là hiệu, ngược chiều thường là tổng độ lớn.'],
    recognitionSigns: ['Có hai vật hoặc hai hệ quy chiếu: người–tàu, thuyền–nước–bờ, xe–đường.', 'Đề hỏi tốc độ vật này nhìn từ vật kia, thời gian gặp/đuổi hoặc hướng chuyển động so với bờ.'],
    solvingSteps: ['Gắn đúng ba chỉ số A/B, B/C, A/C và viết công thức vector.', 'Chiếu lên trục hoặc phân tích các thành phần vuông góc.', 'Giải đại số rồi kiểm tra chiều, độ lớn và hệ quy chiếu của kết quả.'],
    commonMistakes: ['Cộng độ lớn máy móc dù hai vận tốc ngược chiều.', 'Trả vận tốc đối với nước khi đề hỏi đối với bờ.']
  },
  {
    id: 'phy10-qt12', topicId: 'phy10-t1', name: 'Đồ thị độ dịch chuyển–thời gian', slug: 'do-thi-do-dich-chuyen-thoi-gian',
    description: 'Đọc vị trí, chiều chuyển động, trạng thái nghỉ và vận tốc từ hệ số góc đồ thị x–t hoặc d–t.',
    exampleQuestionId: 'phy10-m1-q049', difficulty: 'medium', examFrequency: 'high',
    theory: ['Trên đồ thị tọa độ–thời gian, hệ số góc Δx/Δt là vận tốc trung bình của đoạn thẳng.', 'Đường ngang biểu thị đứng yên; dốc lên là vận tốc dương, dốc xuống là vận tốc âm theo trục đã chọn.'],
    recognitionSigns: ['Đề cho bảng (t,x), phương trình x(t), hoặc mô tả đoạn thẳng trên đồ thị x–t.', 'Đề hỏi giao điểm, hệ số góc, vật đứng yên, đổi chiều hoặc gặp nhau.'],
    solvingSteps: ['Đọc đúng hai trục, đơn vị và từng đoạn thời gian.', 'Tính hệ số góc bằng Δx/Δt; không lấy x/t nếu x₀≠0.', 'Dùng giao điểm/cùng tọa độ cùng thời điểm để xét gặp nhau.'],
    commonMistakes: ['Coi tung độ của đồ thị x–t là vận tốc.', 'Dùng độ dốc âm để kết luận vật chậm dần dù đồ thị chỉ cho vận tốc âm không đổi.']
  },
  {
    id: 'phy10-qt13', topicId: 'phy10-t1', name: 'Gia tốc và biến thiên vận tốc', slug: 'gia-toc',
    description: 'Tính gia tốc trung bình, xác định dấu/vector gia tốc và phân biệt nhanh dần với chậm dần.',
    exampleQuestionId: 'phy10-m1-q061', difficulty: 'medium', examFrequency: 'high',
    theory: ['Gia tốc trung bình a=Δv/Δt cho biết tốc độ biến thiên vận tốc.', 'Vật nhanh dần khi v và a cùng dấu, chậm dần khi trái dấu; dấu của a không tự nói nhanh hay chậm.'],
    recognitionSigns: ['Đề cho vận tốc ở hai thời điểm hoặc nói mỗi giây vận tốc thay đổi bao nhiêu.', 'Đề hỏi nhanh dần/chậm dần khi vật có thể chuyển động theo chiều âm.'],
    solvingSteps: ['Chọn chiều dương và gán dấu cho vận tốc.', 'Tính Δv=v₂−v₁, Δt=t₂−t₁ rồi a=Δv/Δt.', 'So dấu v và a để kết luận nhanh dần/chậm dần.'],
    commonMistakes: ['Dùng độ lớn v₂−v₁ mà bỏ dấu.', 'Cho rằng a<0 luôn là chậm dần.']
  },
  {
    id: 'phy10-qt14', topicId: 'phy10-t1', name: 'Chuyển động thẳng biến đổi đều', slug: 'chuyen-dong-thang-bien-doi-deu',
    description: 'Chọn và vận dụng các hệ thức v=v₀+at, Δx=v₀t+at²/2 và v²−v₀²=2aΔx với quy ước dấu nhất quán.',
    exampleQuestionId: 'phy10-m1-q073', difficulty: 'medium', examFrequency: 'high',
    theory: ['Các công thức động học trên chỉ áp dụng khi gia tốc không đổi trong khoảng xét.', 'Phương trình tọa độ là x=x₀+v₀t+at²/2; dấu của v₀, a, Δx phụ thuộc chiều dương.'],
    recognitionSigns: ['Đề nói chuyển động nhanh dần đều, chậm dần đều hoặc gia tốc không đổi.', 'Dữ kiện gồm ba trong các đại lượng v₀, v, a, t, Δx và cần tìm đại lượng còn lại.'],
    solvingSteps: ['Chọn trục và ghi dấu v₀, a, Δx.', 'Liệt kê dữ kiện, chọn công thức chứa ẩn và ít đại lượng thừa nhất.', 'Giải, chọn nghiệm thời gian phù hợp và kiểm tra điều kiện chuyển động.'],
    commonMistakes: ['Gán a âm chỉ vì vật chậm dần mà không xét chiều dương.', 'Dùng công thức chuyển động đều hoặc áp dụng công thức gia tốc không đổi cho chuyển động bất kì.']
  },
  {
    id: 'phy10-qt15', topicId: 'phy10-t1', name: 'Đồ thị vận tốc–thời gian', slug: 'do-thi-van-toc-thoi-gian',
    description: 'Đọc vận tốc, xác định gia tốc bằng hệ số góc, độ dịch chuyển bằng diện tích đại số và quãng đường bằng tổng diện tích tuyệt đối.',
    exampleQuestionId: 'phy10-m1-q085', difficulty: 'medium', examFrequency: 'high',
    theory: ['Hệ số góc đồ thị v–t là gia tốc.', 'Diện tích đại số giữa đồ thị và trục thời gian là độ dịch chuyển; tổng trị tuyệt đối các diện tích là quãng đường.'],
    recognitionSigns: ['Đề cho đồ thị hoặc bảng vận tốc theo thời gian và hỏi a, Δx, s.', 'Đồ thị có phần nằm dưới trục thời gian hoặc đổi dấu vận tốc.'],
    solvingSteps: ['Chia đồ thị thành các đoạn thẳng và hình cơ bản.', 'Tính hệ số góc từng đoạn để tìm a; tính diện tích có dấu để tìm Δx.', 'Nếu hỏi s, cộng trị tuyệt đối từng diện tích; kiểm tra thời điểm v=0 và đổi chiều.'],
    commonMistakes: ['Lấy tung độ làm gia tốc.', 'Cộng mọi diện tích dương khi đề hỏi độ dịch chuyển hoặc dùng diện tích đại số khi đề hỏi quãng đường.']
  },
  {
    id: 'phy10-qt16', topicId: 'phy10-t1', name: 'Rơi tự do', slug: 'roi-tu-do',
    description: 'Mô tả và tính chuyển động rơi tự do, rơi từ nghỉ hoặc ném thẳng đứng khi bỏ qua sức cản không khí.',
    exampleQuestionId: 'phy10-m1-q097', difficulty: 'medium', examFrequency: 'high',
    theory: ['Gần mặt đất và bỏ qua cản không khí, mọi vật rơi với gia tốc g hướng thẳng đứng xuống.', 'Khi thả rơi từ nghỉ: s=gt²/2, v=gt nếu chọn chiều xuống dương.'],
    recognitionSigns: ['Vật được thả rơi, ném thẳng đứng hoặc đề cho g và bỏ qua sức cản.', 'Đề hỏi thời gian rơi, vận tốc chạm đất, quãng đường trong giây cuối.'],
    solvingSteps: ['Chọn chiều dương, xác định v₀ và dấu của g.', 'Dùng công thức chuyển động biến đổi đều theo phương thẳng đứng.', 'Chọn nghiệm thời gian dương và kiểm tra vật chưa vượt mặt đất/điểm giới hạn.'],
    commonMistakes: ['Cho rằng vật nặng rơi nhanh hơn trong mô hình không cản.', 'Dùng h=gt² thay vì h=gt²/2 hoặc gán sai dấu khi ném lên.']
  },
  {
    id: 'phy10-qt17', topicId: 'phy10-t1', name: 'Chuyển động ném', slug: 'chuyen-dong-nem',
    description: 'Phân tích chuyển động ném ngang thành hai chuyển động thành phần, xác định thời gian, tầm xa, vận tốc và dạng quỹ đạo.',
    exampleQuestionId: 'phy10-m1-q109', difficulty: 'hard', examFrequency: 'medium',
    theory: ['Trong ném ngang không cản, chuyển động ngang là thẳng đều còn chuyển động thẳng đứng là rơi tự do.', 'Hai chuyển động thành phần dùng cùng thời gian; quỹ đạo là một nhánh parabol.'],
    recognitionSigns: ['Vật rời mép bàn/vách với vận tốc ban đầu nằm ngang từ độ cao h.', 'Đề hỏi thời gian chạm đất, tầm xa, vị trí hoặc vận tốc khi chạm đất.'],
    solvingSteps: ['Chọn Ox ngang, Oy thẳng đứng và phân tích v₀ thành thành phần.', 'Tìm thời gian từ phương thẳng đứng: h=gt²/2.', 'Dùng x=v₀t; nếu cần vận tốc, ghép vₓ và vᵧ bằng vector.'],
    commonMistakes: ['Cho rằng vận tốc ngang làm vật rơi lâu hơn.', 'Dùng tầm xa làm quãng đường quỹ đạo hoặc cộng đại số vₓ+vᵧ để tìm độ lớn vận tốc.']
  },
  {
    id: 'phy10-qt18', topicId: 'phy10-t1', name: 'Thực hành động học và xử lí dữ liệu', slug: 'thuc-hanh-dong-hoc',
    description: 'Thiết kế, đọc và đánh giá phép đo tốc độ hoặc gia tốc rơi tự do bằng cổng quang, đồng hồ, video hay bảng dữ liệu.',
    exampleQuestionId: 'phy10-m1-q121', difficulty: 'medium', examFrequency: 'medium',
    theory: ['Đo tốc độ cần xác định quãng đường/chiều dài chắn sáng và khoảng thời gian tương ứng.', 'Đo g có thể tuyến tính hóa h theo t²; phải kiểm soát độ cao, cách thả, mốc đo và đánh giá sai số.'],
    recognitionSigns: ['Đề mô tả cổng quang, video theo khung hình, băng giấy, bảng h–t hoặc nhiều lần đo.', 'Đề hỏi biến, quy trình, cách giảm sai số, kết luận từ dữ liệu hay tính g thực nghiệm.'],
    solvingSteps: ['Xác định đại lượng cần đo, biến độc lập/phụ thuộc và đại lượng đo trực tiếp.', 'Chọn công thức xử lí, thống nhất đơn vị và tính từ dữ liệu.', 'Đánh giá độ chụm, sai lệch, điểm ngoại lai và giới hạn của kết luận.'],
    commonMistakes: ['Thay đổi nhiều điều kiện cùng lúc hoặc chỉ đo một lần.', 'Làm tròn quá sớm, bỏ đơn vị hoặc sửa dữ liệu để gần giá trị chuẩn.']
  }
];
