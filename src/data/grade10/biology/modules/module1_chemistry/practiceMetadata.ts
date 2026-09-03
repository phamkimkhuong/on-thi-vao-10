import { buildLegacyBiologyMetadata } from '../../adaptiveFactory';
import { g10BiologyModule1Adaptive } from './adaptiveBank';

const legacy = buildLegacyBiologyMetadata([
  { questionTypeId: 'bio10-qt14', subTypeId: 'bio10-qt14-st1', questionIds: ['bio10-m1-q001', 'bio10-m1-q002', 'bio10-m1-q003', 'bio10-m1-q004', 'bio10-m1-q032', 'bio10-m1-q033', 'bio10-m1-q034', 'bio10-m1-q035', 'bio10-m1-q036', 'bio10-m1-q037', 'bio10-m1-q038', 'bio10-m1-q039'] },
  { questionTypeId: 'bio10-qt15', subTypeId: 'bio10-qt15-st1', questionIds: ['bio10-m1-q005', 'bio10-m1-q006', 'bio10-m1-q007', 'bio10-m1-q008', 'bio10-m1-q040', 'bio10-m1-q041', 'bio10-m1-q042', 'bio10-m1-q043', 'bio10-m1-q044', 'bio10-m1-q045', 'bio10-m1-q046', 'bio10-m1-q047'] },
  { questionTypeId: 'bio10-qt16', subTypeId: 'bio10-qt16-st1', questionIds: ['bio10-m1-q009', 'bio10-m1-q010', 'bio10-m1-q011', 'bio10-m1-q012', 'bio10-m1-q048', 'bio10-m1-q049', 'bio10-m1-q050', 'bio10-m1-q051', 'bio10-m1-q052', 'bio10-m1-q053', 'bio10-m1-q054', 'bio10-m1-q055'] },
  { questionTypeId: 'bio10-qt17', subTypeId: 'bio10-qt17-st1', questionIds: ['bio10-m1-q013', 'bio10-m1-q014', 'bio10-m1-q015', 'bio10-m1-q016', 'bio10-m1-q056', 'bio10-m1-q057', 'bio10-m1-q058', 'bio10-m1-q059', 'bio10-m1-q060', 'bio10-m1-q061', 'bio10-m1-q062', 'bio10-m1-q063'] },
  { questionTypeId: 'bio10-qt2', subTypeId: 'bio10-qt2-st1', questionIds: ['bio10-q2', 'bio10-m1-q017', 'bio10-m1-q018', 'bio10-m1-q019', 'bio10-m1-q064', 'bio10-m1-q065', 'bio10-m1-q066', 'bio10-m1-q067', 'bio10-m1-q068', 'bio10-m1-q069', 'bio10-m1-q070', 'bio10-m1-q071'] },
  { questionTypeId: 'bio10-qt18', subTypeId: 'bio10-qt18-st1', questionIds: ['bio10-m1-q020', 'bio10-m1-q021', 'bio10-m1-q022', 'bio10-m1-q023', 'bio10-m1-q072', 'bio10-m1-q073', 'bio10-m1-q074', 'bio10-m1-q075', 'bio10-m1-q076', 'bio10-m1-q077', 'bio10-m1-q078', 'bio10-m1-q079'] },
  { questionTypeId: 'bio10-qt19', subTypeId: 'bio10-qt19-st1', questionIds: ['bio10-m1-q024', 'bio10-m1-q025', 'bio10-m1-q026', 'bio10-m1-q027', 'bio10-m1-q080', 'bio10-m1-q081', 'bio10-m1-q082', 'bio10-m1-q083', 'bio10-m1-q084', 'bio10-m1-q085', 'bio10-m1-q086', 'bio10-m1-q087'] },
  { questionTypeId: 'bio10-qt20', subTypeId: 'bio10-qt20-st1', questionIds: ['bio10-m1-q028', 'bio10-m1-q029', 'bio10-m1-q030', 'bio10-m1-q031', 'bio10-m1-q088', 'bio10-m1-q089', 'bio10-m1-q090', 'bio10-m1-q091', 'bio10-m1-q092', 'bio10-m1-q093', 'bio10-m1-q094', 'bio10-m1-q095'] }
]);

export const g10BiologyModule1PracticeMetadata = [...legacy, ...g10BiologyModule1Adaptive.metadata];

