import { QuestionType } from '@/types';

export const g10EnglishQuestionTypes: QuestionType[] = [
  {
    id: 'eng10-qt1',
    topicId: 'eng10-t1',
    name: 'Phân biệt Hiện tại đơn & Hiện tại tiếp diễn',
    slug: 'hien-tai-don-hien-tai-tiep-dien',
    description: 'Học cách nhận biết và chia động từ ở hai thì cơ bản: Hiện tại đơn (diễn tả sự thật hiển nhiên, thói quen) và Hiện tại tiếp diễn (diễn tả hành động đang xảy ra tại thời điểm nói hoặc có tính chất tạm thời). Đây là chủ điểm ngữ pháp trọng tâm của Unit 1: Family Life.',
    exampleQuestionId: 'eng10-q1',
    recognitionSigns: [
      'Hiện tại đơn: Có trạng từ chỉ tần suất như always, usually, often, sometimes, never, every day...',
      'Hiện tại tiếp diễn: Có trạng từ chỉ thời gian như now, at the moment, currently, hoặc các động từ mệnh lệnh gây chú ý như Look!, Listen!'
    ],
    solvingSteps: [
      'Bước 1: Đọc kỹ ngữ cảnh câu và tìm các dấu hiệu nhận biết thời gian (trạng từ).',
      'Bước 2: Xác định xem câu nói về một thói quen/sự thật hiển nhiên hay một hành động đang tiếp diễn/tạm thời.',
      'Bước 3: Chia động từ theo đúng cấu trúc của thì đã chọn và phù hợp với chủ ngữ (số ít/số nhiều).'
    ],
    commonMistakes: [
      'Chia hiện tại tiếp diễn cho các động từ trạng thái (state verbs) như like, love, hate, know, believe, understand...',
      'Quên thêm "s/es" khi chia thì hiện tại đơn với chủ ngữ số ít (he, she, it).'
    ],
    difficulty: 'easy',
    examFrequency: 'high'
  },
  {
    id: 'eng10-qt2',
    topicId: 'eng10-t1',
    name: 'Danh động từ và Động từ nguyên mẫu (Gerunds & Infinitives)',
    slug: 'danh-dong-tu-dong-tu-nguyen-mau',
    description: 'Chọn dạng đúng của động từ đi kèm sau một động từ khác (V-ing hoặc to-V). Đây là chủ điểm quan trọng xuất hiện ở Unit 2: Humans and the Environment.',
    exampleQuestionId: 'eng10-q2',
    recognitionSigns: [
      'Câu chứa các động từ đi với To-V như: decide, plan, promise, agree, refuse, want, hope...',
      'Câu chứa các động từ đi với V-ing như: avoid, enjoy, mind, practice, suggest, postpone...'
    ],
    solvingSteps: [
      'Bước 1: Xác định động từ chính đứng trước khoảng trống cần chia.',
      'Bước 2: Đối chiếu với danh sách các từ đi kèm động từ nguyên mẫu (to-V) hoặc danh động từ (V-ing).',
      'Bước 3: Chọn đáp án phù hợp. Chú ý nếu có "not" thì đặt trước "to-V" hoặc "V-ing".'
    ],
    commonMistakes: [
      'Lẫn lộn cách dùng giữa to-V và V-ing của các động từ đổi nghĩa tùy ngữ cảnh như: stop, try, remember, forget.'
    ],
    difficulty: 'easy',
    examFrequency: 'high'
  },
  {
    id: 'eng10-qt3',
    topicId: 'eng10-t1',
    name: 'Câu bị động (Passive Voice) của các thì cơ bản',
    slug: 'cau-bi-dong-thi-co-ban',
    description: 'Rèn luyện kỹ năng biến đổi câu chủ động sang bị động và chọn đúng dạng động từ bị động ở các thì Hiện tại đơn, Quá khứ đơn, Hiện tại hoàn thành và Tương lai đơn.',
    exampleQuestionId: 'eng10-q3',
    recognitionSigns: [
      'Chủ ngữ chỉ vật chịu tác động của hành động khác.',
      'Câu có từ "by" đứng trước tác nhân thực hiện hành động.'
    ],
    solvingSteps: [
      'Bước 1: Xác định thì của động từ trong ngữ cảnh.',
      'Bước 2: Sử dụng công thức bị động tương ứng: S + be + V3/ed.',
      'Bước 3: Đảm bảo động từ "to be" được chia đúng theo thì và phù hợp với số của chủ ngữ mới.'
    ],
    commonMistakes: [
      'Chia sai phân từ hai (V3/ed) của các động từ bất quy tắc phổ biến.',
      'Quên chia động từ to be hợp với chủ ngữ số ít hoặc số nhiều mới.'
    ],
    difficulty: 'medium',
    examFrequency: 'high'
  },
  {
    id: 'eng10-qt4',
    topicId: 'eng10-t2',
    name: 'Bài đọc điền từ (Guided Cloze Test)',
    slug: 'bai-doc-dien-tu',
    description: 'Luyện tập đọc một đoạn văn ngắn và lựa chọn từ vựng, giới từ, liên từ hoặc đại từ quan hệ thích hợp để hoàn thiện văn bản.',
    exampleQuestionId: 'eng10-q4',
    recognitionSigns: [
      'Đoạn văn có các chỗ trống được đánh số 1, 2, 3, 4, 5.',
      'Mỗi câu hỏi có 4 đáp án lựa chọn tương ứng cho từng chỗ trống.'
    ],
    solvingSteps: [
      'Bước 1: Đọc lướt qua toàn bộ đoạn văn để nắm bắt ý chính và chủ đề.',
      'Bước 2: Phân tích chỗ trống cần điền thuộc loại từ gì (danh từ, động từ, tính từ, liên từ...).',
      'Bước 3: Xem xét các từ xung quanh chỗ trống để nhận biết các cụm từ cố định (collocations) hoặc cấu trúc ngữ pháp.',
      'Bước 4: Loại trừ các đáp án sai nghĩa hoặc sai ngữ pháp để chọn đáp án đúng nhất.'
    ],
    commonMistakes: [
      'Chỉ nhìn vào chỗ trống mà không đọc hết câu dẫn tới chọn từ sai ngữ cảnh hoặc sai giới từ đi kèm.'
    ],
    difficulty: 'medium',
    examFrequency: 'high'
  },
  {
    id: 'eng10-qt5',
    topicId: 'eng10-t3',
    name: 'Mệnh đề quan hệ xác định và không xác định',
    slug: 'menh-de-quan-he',
    description: 'Sử dụng các đại từ quan hệ (who, whom, which, that, whose) hoặc trạng từ quan hệ (where, when, why) để nối hai câu đơn hoặc bổ nghĩa cho danh từ đứng trước.',
    exampleQuestionId: 'eng10-q5',
    recognitionSigns: [
      'Chỗ trống đứng sau danh từ chỉ người hoặc vật cần được làm rõ nghĩa.',
      'Yêu cầu nối hai câu sử dụng đại từ quan hệ.'
    ],
    solvingSteps: [
      'Bước 1: Xác định danh từ đứng trước khoảng trống là chỉ người, chỉ vật hay chỉ sở hữu.',
      'Bước 2: Xác định vai trò của đại từ quan hệ trong mệnh đề phụ (làm chủ ngữ, tân ngữ hay trạng ngữ).',
      'Bước 3: Lựa chọn đại từ thích hợp (ví dụ: Who cho người làm chủ ngữ, Which cho vật, Whose cho sở hữu). Chú ý quy tắc dùng dấu phẩy đối với mệnh đề không xác định.'
    ],
    commonMistakes: [
      'Dùng đại từ "that" sau dấu phẩy (mệnh đề quan hệ không xác định) hoặc sau giới từ.',
      'Viết thừa đại từ tân ngữ ở mệnh đề quan hệ (ví dụ: "The book which I bought it yesterday" - thừa "it").'
    ],
    difficulty: 'hard',
    examFrequency: 'high'
  }
];
