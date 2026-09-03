import { buildLegacyBiologyMetadata } from '../../adaptiveFactory';
import { g10BiologyModule0Adaptive } from './adaptiveBank';

const legacy = buildLegacyBiologyMetadata([
  { questionTypeId: 'bio10-qt1', subTypeId: 'bio10-qt1-st1', questionIds: ['bio10-q1', 'bio10-m0-q001', 'bio10-m0-q002', 'bio10-m0-q003', 'bio10-m0-q024', 'bio10-m0-q025', 'bio10-m0-q026', 'bio10-m0-q027', 'bio10-m0-q028', 'bio10-m0-q029', 'bio10-m0-q030', 'bio10-m0-q031'] },
  { questionTypeId: 'bio10-qt9', subTypeId: 'bio10-qt9-st1', questionIds: ['bio10-m0-q004', 'bio10-m0-q005', 'bio10-m0-q006', 'bio10-m0-q007', 'bio10-m0-q032', 'bio10-m0-q033', 'bio10-m0-q034', 'bio10-m0-q035', 'bio10-m0-q036', 'bio10-m0-q037', 'bio10-m0-q038', 'bio10-m0-q039'] },
  { questionTypeId: 'bio10-qt10', subTypeId: 'bio10-qt10-st1', questionIds: ['bio10-m0-q008', 'bio10-m0-q009', 'bio10-m0-q010', 'bio10-m0-q011', 'bio10-m0-q040', 'bio10-m0-q041', 'bio10-m0-q042', 'bio10-m0-q043', 'bio10-m0-q044', 'bio10-m0-q045', 'bio10-m0-q046', 'bio10-m0-q047'] },
  { questionTypeId: 'bio10-qt11', subTypeId: 'bio10-qt11-st1', questionIds: ['bio10-m0-q012', 'bio10-m0-q013', 'bio10-m0-q014', 'bio10-m0-q015', 'bio10-m0-q048', 'bio10-m0-q049', 'bio10-m0-q050', 'bio10-m0-q051', 'bio10-m0-q052', 'bio10-m0-q053', 'bio10-m0-q054', 'bio10-m0-q055'] },
  { questionTypeId: 'bio10-qt12', subTypeId: 'bio10-qt12-st1', questionIds: ['bio10-m0-q016', 'bio10-m0-q017', 'bio10-m0-q018', 'bio10-m0-q019', 'bio10-m0-q056', 'bio10-m0-q057', 'bio10-m0-q058', 'bio10-m0-q059', 'bio10-m0-q060', 'bio10-m0-q061', 'bio10-m0-q062', 'bio10-m0-q063'] },
  { questionTypeId: 'bio10-qt13', subTypeId: 'bio10-qt13-st1', questionIds: ['bio10-m0-q020', 'bio10-m0-q021', 'bio10-m0-q022', 'bio10-m0-q023', 'bio10-m0-q064', 'bio10-m0-q065', 'bio10-m0-q066', 'bio10-m0-q067', 'bio10-m0-q068', 'bio10-m0-q069', 'bio10-m0-q070', 'bio10-m0-q071'] }
]);

export const g10BiologyModule0PracticeMetadata = [...legacy, ...g10BiologyModule0Adaptive.metadata];

