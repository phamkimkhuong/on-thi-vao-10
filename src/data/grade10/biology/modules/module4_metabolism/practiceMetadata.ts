import { buildLegacyBiologyMetadata } from '../../adaptiveFactory';
import { g10BiologyModule4Adaptive } from './adaptiveBank';

const legacy = buildLegacyBiologyMetadata([
  { questionTypeId: 'bio10-qt32', subTypeId: 'bio10-qt32-st1', questionIds: ['bio10-m4-q001', 'bio10-m4-q002', 'bio10-m4-q003', 'bio10-m4-q004', 'bio10-m4-q005', 'bio10-m4-q006', 'bio10-m4-q007', 'bio10-m4-q008', 'bio10-m4-q009', 'bio10-m4-q010', 'bio10-m4-q011', 'bio10-m4-q012'] },
  { questionTypeId: 'bio10-qt5', subTypeId: 'bio10-qt5-st1', questionIds: ['bio10-q5', 'bio10-m4-q013', 'bio10-m4-q014', 'bio10-m4-q015', 'bio10-m4-q016', 'bio10-m4-q017', 'bio10-m4-q018', 'bio10-m4-q019', 'bio10-m4-q020', 'bio10-m4-q021', 'bio10-m4-q022', 'bio10-m4-q023'] },
  { questionTypeId: 'bio10-qt33', subTypeId: 'bio10-qt33-st1', questionIds: ['bio10-m4-q024', 'bio10-m4-q025', 'bio10-m4-q026', 'bio10-m4-q027', 'bio10-m4-q028', 'bio10-m4-q029', 'bio10-m4-q030', 'bio10-m4-q031', 'bio10-m4-q032', 'bio10-m4-q033', 'bio10-m4-q034', 'bio10-m4-q035'] },
  { questionTypeId: 'bio10-qt34', subTypeId: 'bio10-qt34-st1', questionIds: ['bio10-m4-q036', 'bio10-m4-q037', 'bio10-m4-q038', 'bio10-m4-q039', 'bio10-m4-q040', 'bio10-m4-q041', 'bio10-m4-q042', 'bio10-m4-q043', 'bio10-m4-q044', 'bio10-m4-q045', 'bio10-m4-q046', 'bio10-m4-q047'] },
  { questionTypeId: 'bio10-qt35', subTypeId: 'bio10-qt35-st1', questionIds: ['bio10-m4-q048', 'bio10-m4-q049', 'bio10-m4-q050', 'bio10-m4-q051', 'bio10-m4-q052', 'bio10-m4-q053', 'bio10-m4-q054', 'bio10-m4-q055', 'bio10-m4-q056', 'bio10-m4-q057', 'bio10-m4-q058', 'bio10-m4-q059'] }
]);

export const g10BiologyModule4PracticeMetadata = [...legacy, ...g10BiologyModule4Adaptive.metadata];

