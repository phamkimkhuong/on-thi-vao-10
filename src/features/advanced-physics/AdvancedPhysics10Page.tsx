import React from 'react';
import {
  advancedPhysics10Questions,
  advancedPhysics10Solutions,
  advancedPhysics10Topics
} from '@/data/grade10/physics/advanced';
import { AdvancedPracticePage } from './AdvancedPhysics10';

const AdvancedPhysics10Page: React.FC = () => (
  <AdvancedPracticePage
    config={{
      subjectKey: 'phy10',
      storageKeyPrefix: 'ezonthi_phy10_advanced_progress_',
      selectedSubject: 'physics',
      subjectLabel: 'Vật lí 10',
      contextLabel: 'Vật lý - Lớp 10',
      title: 'Chuyên đề nâng cao Vật lí 10',
      seoTitle: 'Chuyên đề nâng cao Vật lí 10 | ezonthi',
      heroDescription: 'Mỗi bài là một thử thách độc lập. Không chia nhỏ bước giải, không gợi ý trước khi nộp và không yêu cầu nhập đáp án tự luận.',
      topics: advancedPhysics10Topics,
      questions: advancedPhysics10Questions,
      solutions: advancedPhysics10Solutions
    }}
  />
);

export default AdvancedPhysics10Page;
