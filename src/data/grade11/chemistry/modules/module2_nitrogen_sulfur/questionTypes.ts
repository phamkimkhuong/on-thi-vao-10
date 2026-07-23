import type { QuestionType } from '@/types';

export const g11ChemistryNitrogenSulfurQuestionTypes: QuestionType[] = [
  {
    id: 'chem11-qt15',
    topicId: 'chem11-t2',
    name: 'Trạng thái tự nhiên, cấu tạo và ứng dụng của nitrogen',
    slug: 'trang-thai-cau-tao-ung-dung-nitrogen',
    description: 'Nhận diện dạng tồn tại, giải thích tính trơ tương đối của N₂ và chọn ứng dụng phù hợp cho nitrogen khí hoặc lỏng.',
    exampleQuestionId: 'chem11-ns-q001',
    theory: [
      'Trong tự nhiên, nitrogen tồn tại chủ yếu dưới dạng $N_2$ trong khí quyển và dưới dạng hợp chất trong đất, nước, cơ thể sống.',
      'Phân tử $N_2$ có liên kết ba $N\\equiv N$ rất bền. Muốn phản ứng phải cung cấp đủ năng lượng để phá vỡ hoặc làm suy yếu liên kết này.',
      'Nitrogen khí được dùng tạo môi trường trơ tương đối; nitrogen lỏng được dùng làm lạnh nhanh nhờ nhiệt độ sôi rất thấp.'
    ],
    recognitionSigns: [
      'Đề hỏi nitrogen tồn tại ở đâu hoặc dưới dạng đơn chất/hợp chất nào.',
      'Đề yêu cầu giải thích tính kém hoạt động của N₂ ở nhiệt độ thường.',
      'Đề nêu bảo quản, môi trường trơ, cấp đông hoặc nghiên cứu nhiệt độ thấp.'
    ],
    solvingSteps: [
      'Xác định câu hỏi thuộc trạng thái tự nhiên, cấu tạo–tính trơ hay ứng dụng.',
      'Nối dữ kiện với đặc điểm quyết định: liên kết ba bền, tính trơ tương đối hoặc nhiệt độ sôi rất thấp.',
      'Chọn kết luận đúng phạm vi; không biến “kém hoạt động” thành “không bao giờ phản ứng”.'
    ],
    commonMistakes: [
      'Cho rằng nitrogen tự nhiên chỉ có trong không khí.',
      'Giải thích tính trơ bằng liên kết đơn hoặc bằng việc N₂ không có electron.',
      'Quy mọi ứng dụng của nitrogen lỏng cho tính trơ mà bỏ qua khả năng làm lạnh.'
    ],
    difficulty: 'medium',
    examFrequency: 'high',
    subTypes: [
      {
        id: 'chem11-ns-st-natural',
        name: 'Trạng thái tự nhiên của nitrogen',
        example: 'Phân loại nitrogen tự do trong khí quyển và nitrogen liên kết trong nitrate hoặc protein.',
        recognitionSigns: ['Có dữ kiện về khí quyển, đất, nước hoặc cơ thể sống.'],
        targetQuestionCount: 4
      },
      {
        id: 'chem11-ns-st-bond-inertness',
        name: 'Liên kết ba và tính trơ tương đối',
        example: 'Giải thích vì sao N₂ kém hoạt động ở nhiệt độ thường nhưng phản ứng ở nhiệt độ cao.',
        recognitionSigns: ['Hỏi về công thức Lewis, loại liên kết hoặc năng lượng hoạt hóa.'],
        targetQuestionCount: 4
      },
      {
        id: 'chem11-ns-st-applications',
        name: 'Ứng dụng nitrogen khí và lỏng',
        example: 'Chọn N₂ khí để tạo môi trường trơ hoặc N₂ lỏng để cấp đông nhanh.',
        recognitionSigns: ['Bối cảnh bảo quản, công nghiệp, y sinh hoặc nghiên cứu nhiệt độ thấp.'],
        targetQuestionCount: 4
      }
    ],
    practiceCoverage: {
      targetQuestionCount: 12,
      minimumQuestionsPerSubType: 4,
      requiredPracticeRoles: ['guided', 'near_transfer', 'misconception_check', 'far_transfer'],
      requiredRepresentations: ['text', 'equation'],
      masteryHoldoutCount: 3
    }
  },
  {
    id: 'chem11-qt16',
    topicId: 'chem11-t2',
    name: 'Phản ứng của nitrogen và quá trình tạo nitrate tự nhiên',
    slug: 'phan-ung-nitrogen-tao-nitrate-tu-nhien',
    description: 'Viết, phân tích phản ứng của N₂ với H₂/O₂ và giải thích chuỗi tạo nitrate trong khí quyển khi có sấm sét.',
    exampleQuestionId: 'chem11-ns-q013',
    theory: [
      'Ở nhiệt độ cao và điều kiện thích hợp: $N_2+3H_2\\rightleftharpoons2NH_3$. Nitrogen giảm số oxi hóa từ 0 xuống −3 nên N₂ là chất oxi hóa.',
      'Ở nhiệt độ rất cao: $N_2+O_2\\rightleftharpoons2NO$. Nitrogen tăng số oxi hóa từ 0 lên +2 nên N₂ là chất khử.',
      'Sấm sét cung cấp năng lượng tạo NO; NO bị oxi hóa thành NO₂, tiếp tục tạo nitric acid/nitrate rồi được nước mưa đưa xuống đất.'
    ],
    recognitionSigns: [
      'Đề cho N₂ phản ứng với H₂ hoặc O₂ và yêu cầu phương trình, điều kiện hay vai trò oxi hóa–khử.',
      'Đề mô tả sấm sét, mưa giông, nitrate trong đất hoặc yêu cầu sắp xếp chuỗi chuyển hóa.'
    ],
    solvingSteps: [
      'Viết đúng phương trình và điều kiện phản ứng; không suy diễn phản ứng xảy ra dễ ở nhiệt độ thường.',
      'Xác định số oxi hóa của nitrogen trước và sau phản ứng để kết luận vai trò.',
      'Nếu là bối cảnh sấm sét, lần theo chuỗi $N_2\\rightarrow NO\\rightarrow NO_2\\rightarrow HNO_3/NO_3^-$.'
    ],
    commonMistakes: [
      'Viết sản phẩm trực tiếp là NO₂ khi N₂ phản ứng với O₂ ở nhiệt độ rất cao.',
      'Cho rằng N₂ luôn là chất oxi hóa hoặc luôn là chất khử.',
      'Bỏ qua các chất trung gian và nói sấm sét tạo nitrate trực tiếp.'
    ],
    difficulty: 'medium',
    examFrequency: 'high',
    subTypes: [
      {
        id: 'chem11-ns-st-n2-h2',
        name: 'Phản ứng N₂ với H₂',
        example: 'Viết phương trình tạo NH₃ và xác định vai trò của N₂.',
        recognitionSigns: ['Có nitrogen, hydrogen, ammonia hoặc quy trình Haber.'],
        targetQuestionCount: 4
      },
      {
        id: 'chem11-ns-st-n2-o2',
        name: 'Phản ứng N₂ với O₂',
        example: 'Viết phương trình tạo NO ở nhiệt độ rất cao và phân tích số oxi hóa.',
        recognitionSigns: ['Có nitrogen, oxygen, nhiệt độ rất cao hoặc tia lửa điện.'],
        targetQuestionCount: 4
      },
      {
        id: 'chem11-ns-st-nitrate-rain',
        name: 'Chuỗi tạo nitrate từ sấm sét',
        example: 'Sắp xếp các bước từ N₂ trong không khí đến nitrate trong đất.',
        recognitionSigns: ['Có sấm sét, mưa giông, NOx, nitric acid hoặc nitrate trong đất.'],
        targetQuestionCount: 4
      }
    ],
    practiceCoverage: {
      targetQuestionCount: 12,
      minimumQuestionsPerSubType: 4,
      requiredPracticeRoles: ['guided', 'near_transfer', 'misconception_check', 'far_transfer'],
      requiredRepresentations: ['text', 'equation'],
      masteryHoldoutCount: 3
    }
  }
];
