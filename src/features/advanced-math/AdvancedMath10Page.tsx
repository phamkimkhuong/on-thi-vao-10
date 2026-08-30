import React from 'react';
import {
  advancedMath10Questions,
  advancedMath10Solutions,
  advancedMath10Topics
} from '@/data/grade10/math/advanced';
import { AdvancedPracticePage } from '@/features/advanced-physics/AdvancedPhysics10';

const AdvancedMath10Page: React.FC = () => (
  <AdvancedPracticePage
    config={{
      subjectKey: 'math10',
      storageKeyPrefix: 'ezonthi_math10_advanced_progress_',
      selectedSubject: 'math',
      subjectLabel: 'Toán 10',
      contextLabel: 'Toán học - Lớp 10',
      title: 'Chuyên đề nâng cao Toán 10',
      seoTitle: 'Chuyên đề nâng cao Toán 10 | ezonthi',
      heroDescription: 'Mỗi câu là một bài toán độc lập dành cho học sinh khá giỏi, đội tuyển và lớp chuyên. Không gợi ý trước khi nộp, không chia nhỏ thành chuỗi câu và không yêu cầu nhập tự luận.',
      topics: advancedMath10Topics,
      questions: advancedMath10Questions,
      solutions: advancedMath10Solutions
    }}
  />
);

export default AdvancedMath10Page;

