import React from 'react';
import {
  advancedBiology10Questions,
  advancedBiology10Solutions,
  advancedBiology10Topics
} from '@/data/grade10/biology/advanced';
import { AdvancedPracticePage } from '@/features/advanced-physics/AdvancedPhysics10';

const AdvancedBiology10Page: React.FC = () => (
  <AdvancedPracticePage
    config={{
      subjectKey: 'bio10',
      storageKeyPrefix: 'ezonthi_bio10_advanced_progress_',
      selectedSubject: 'biology',
      subjectLabel: 'Sinh học 10',
      contextLabel: 'Sinh học - Lớp 10',
      title: 'Chuyên đề nâng cao Sinh học 10',
      seoTitle: 'Chuyên đề nâng cao Sinh học 10 | ezonthi',
      heroDescription: '144 câu A–B–C–D độc lập từ khó đến cực khó, biên soạn theo dữ liệu, thí nghiệm và cơ chế sinh học. Mỗi câu có lời giải theo chuỗi bằng chứng–cơ chế–loại nhiễu; không nhân bản bằng cách đổi số và không chia nhỏ dẫn dắt.',
      topics: advancedBiology10Topics,
      questions: advancedBiology10Questions,
      solutions: advancedBiology10Solutions
    }}
  />
);

export default AdvancedBiology10Page;
