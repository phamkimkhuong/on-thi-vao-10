import React from 'react';
import {
  advancedChemistry10Questions,
  advancedChemistry10Solutions,
  advancedChemistry10Topics
} from '@/data/grade10/chemistry/advanced';
import { AdvancedPracticePage } from '@/features/advanced-physics/AdvancedPhysics10';

const AdvancedChemistry10Page: React.FC = () => (
  <AdvancedPracticePage
    config={{
      subjectKey: 'chem10',
      storageKeyPrefix: 'ezonthi_chem10_advanced_progress_',
      selectedSubject: 'chemistry',
      subjectLabel: 'Hóa học 10',
      contextLabel: 'Hóa học - Lớp 10',
      title: 'Chuyên đề nâng cao Hóa học 10',
      seoTitle: 'Chuyên đề nâng cao Hóa học 10 | ezonthi',
      heroDescription: '192 thử thách độc lập từ khó đến cực khó, gồm bài cốt lõi nâng cao, chuyên đề chính thức lớp 10 và dữ kiện kiểu Olympic. Mỗi câu chỉ chọn A–B–C–D, không chia nhỏ dẫn dắt và có lời giải kiểm tra đầy đủ phương trình, đơn vị cùng bẫy sai.',
      topics: advancedChemistry10Topics,
      questions: advancedChemistry10Questions,
      solutions: advancedChemistry10Solutions
    }}
  />
);

export default AdvancedChemistry10Page;
