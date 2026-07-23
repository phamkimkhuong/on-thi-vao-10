import type { LearningMisconception, LearningOutcome } from '@/types';

export const g11ChemistryNitrogenSulfurOutcomes: LearningOutcome[] = [
  {
    id: 'chem11-ns-n2-natural',
    topicId: 'chem11-t2',
    title: 'Trạng thái tự nhiên của nitrogen',
    description: 'Nhận biết dạng tồn tại chủ yếu của nitrogen trong khí quyển và trong một số hợp chất tự nhiên.',
    scope: 'core',
    orderIndex: 201,
    questionTypeIds: ['chem11-qt15'],
    prerequisiteOutcomeIds: [],
    misconceptionIds: ['chem11-mis-n2-natural-only-free'],
    evidenceTypes: ['recognition', 'application'],
    estimatedMinutes: 15
  },
  {
    id: 'chem11-ns-n2-bond-inertness',
    topicId: 'chem11-t2',
    title: 'Liên kết ba và tính trơ của nitrogen',
    description: 'Giải thích tính kém hoạt động của N₂ ở nhiệt độ thường dựa trên liên kết ba bền vững trong phân tử.',
    scope: 'core',
    orderIndex: 202,
    questionTypeIds: ['chem11-qt15'],
    prerequisiteOutcomeIds: [],
    misconceptionIds: ['chem11-mis-n2-inert-no-reaction'],
    evidenceTypes: ['representation', 'explanation'],
    estimatedMinutes: 25,
    isCritical: true
  },
  {
    id: 'chem11-ns-n2-high-temperature-reactions',
    topicId: 'chem11-t2',
    title: 'Phản ứng của nitrogen ở nhiệt độ cao',
    description: 'Viết và phân tích phản ứng của N₂ với H₂ và O₂ ở nhiệt độ cao, gồm vai trò oxi hóa–khử của nitrogen.',
    scope: 'core',
    orderIndex: 203,
    questionTypeIds: ['chem11-qt16'],
    prerequisiteOutcomeIds: ['chem11-bridge-equation'],
    misconceptionIds: ['chem11-mis-n2-reacts-room-temperature', 'chem11-mis-n2-redox-role-fixed'],
    remediationOutcomeIds: ['chem11-bridge-equation'],
    evidenceTypes: ['representation', 'explanation'],
    estimatedMinutes: 35,
    isCritical: true
  },
  {
    id: 'chem11-ns-n2-nitrate-rain',
    topicId: 'chem11-t2',
    title: 'Tạo nitrate tự nhiên từ sấm sét và nước mưa',
    description: 'Giải thích chuỗi biến đổi từ N₂ và O₂ trong khí quyển đến nitrate được nước mưa đưa xuống đất.',
    scope: 'core',
    orderIndex: 204,
    questionTypeIds: ['chem11-qt16'],
    prerequisiteOutcomeIds: ['chem11-ns-n2-high-temperature-reactions'],
    misconceptionIds: ['chem11-mis-lightning-direct-fertilizer'],
    evidenceTypes: ['representation', 'explanation', 'application'],
    estimatedMinutes: 25
  },
  {
    id: 'chem11-ns-n2-applications',
    topicId: 'chem11-t2',
    title: 'Ứng dụng của nitrogen khí và lỏng',
    description: 'Lựa chọn và giải thích ứng dụng của N₂ khí, N₂ lỏng dựa trên tính trơ tương đối và nhiệt độ sôi rất thấp.',
    scope: 'core',
    orderIndex: 205,
    questionTypeIds: ['chem11-qt15'],
    prerequisiteOutcomeIds: ['chem11-ns-n2-bond-inertness'],
    misconceptionIds: ['chem11-mis-liquid-nitrogen-inert-only'],
    evidenceTypes: ['explanation', 'application'],
    estimatedMinutes: 20
  }
];

export const g11ChemistryNitrogenSulfurMisconceptions: LearningMisconception[] = [
  {
    id: 'chem11-mis-n2-natural-only-free',
    outcomeId: 'chem11-ns-n2-natural',
    statement: 'Nitrogen trong tự nhiên chỉ tồn tại dưới dạng N₂.',
    correction: 'Nitrogen tồn tại cả dưới dạng N₂ tự do và dạng liên kết trong nitrate, protein cùng nhiều hợp chất tự nhiên.',
    severity: 'normal',
    remediationOutcomeIds: ['chem11-ns-n2-natural']
  },
  {
    id: 'chem11-mis-n2-inert-no-reaction',
    outcomeId: 'chem11-ns-n2-bond-inertness',
    statement: 'N₂ trơ nghĩa là hoàn toàn không phản ứng trong mọi điều kiện.',
    correction: 'N₂ kém hoạt động ở nhiệt độ thường do liên kết ba bền nhưng vẫn phản ứng khi có đủ năng lượng và điều kiện thích hợp.',
    severity: 'critical',
    remediationOutcomeIds: ['chem11-ns-n2-bond-inertness']
  },
  {
    id: 'chem11-mis-n2-reacts-room-temperature',
    outcomeId: 'chem11-ns-n2-high-temperature-reactions',
    statement: 'N₂ phản ứng dễ dàng với H₂ hoặc O₂ ở nhiệt độ thường.',
    correction: 'Các phản ứng này cần điều kiện thích hợp hoặc nhiệt độ rất cao vì phải vượt rào cản liên quan đến liên kết ba bền.',
    severity: 'critical',
    remediationOutcomeIds: ['chem11-ns-n2-bond-inertness', 'chem11-ns-n2-high-temperature-reactions']
  },
  {
    id: 'chem11-mis-n2-redox-role-fixed',
    outcomeId: 'chem11-ns-n2-high-temperature-reactions',
    statement: 'N₂ chỉ có một vai trò oxi hóa–khử cố định.',
    correction: 'Phải xét từng phản ứng: N₂ là chất oxi hóa khi tạo NH₃ nhưng là chất khử khi tạo NO.',
    severity: 'critical',
    remediationOutcomeIds: ['chem11-ns-n2-high-temperature-reactions']
  },
  {
    id: 'chem11-mis-lightning-direct-fertilizer',
    outcomeId: 'chem11-ns-n2-nitrate-rain',
    statement: 'Sấm sét biến trực tiếp N₂ thành nitrate trong một bước.',
    correction: 'Quá trình đi qua các chất trung gian như NO, NO₂ và sản phẩm acid trước khi nitrate được nước mưa đưa xuống đất.',
    severity: 'normal',
    remediationOutcomeIds: ['chem11-ns-n2-nitrate-rain']
  },
  {
    id: 'chem11-mis-liquid-nitrogen-inert-only',
    outcomeId: 'chem11-ns-n2-applications',
    statement: 'Mọi ứng dụng của nitrogen lỏng đều chỉ do tính trơ.',
    correction: 'Trong bảo quản và cấp đông, nhiệt độ rất thấp cùng khả năng làm lạnh nhanh của nitrogen lỏng là tính chất quyết định.',
    severity: 'normal',
    remediationOutcomeIds: ['chem11-ns-n2-applications']
  }
];
