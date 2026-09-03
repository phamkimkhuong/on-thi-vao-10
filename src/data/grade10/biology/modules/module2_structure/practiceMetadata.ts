import { buildLegacyBiologyMetadata } from '../../adaptiveFactory';
import { g10BiologyModule2Adaptive } from './adaptiveBank';

const legacy = buildLegacyBiologyMetadata([
  { questionTypeId: 'bio10-qt21', subTypeId: 'bio10-qt21-st1', questionIds: ['bio10-m2-q001', 'bio10-m2-q002', 'bio10-m2-q003', 'bio10-m2-q004', 'bio10-m2-q032', 'bio10-m2-q033', 'bio10-m2-q034', 'bio10-m2-q035', 'bio10-m2-q036', 'bio10-m2-q037', 'bio10-m2-q038', 'bio10-m2-q039'] },
  { questionTypeId: 'bio10-qt22', subTypeId: 'bio10-qt22-st1', questionIds: ['bio10-m2-q005', 'bio10-m2-q006', 'bio10-m2-q007', 'bio10-m2-q008', 'bio10-m2-q040', 'bio10-m2-q041', 'bio10-m2-q042', 'bio10-m2-q043', 'bio10-m2-q044', 'bio10-m2-q045', 'bio10-m2-q046', 'bio10-m2-q047'] },
  { questionTypeId: 'bio10-qt23', subTypeId: 'bio10-qt23-st1', questionIds: ['bio10-m2-q009', 'bio10-m2-q010', 'bio10-m2-q011', 'bio10-m2-q012', 'bio10-m2-q048', 'bio10-m2-q049', 'bio10-m2-q050', 'bio10-m2-q051', 'bio10-m2-q052', 'bio10-m2-q053', 'bio10-m2-q054', 'bio10-m2-q055'] },
  { questionTypeId: 'bio10-qt24', subTypeId: 'bio10-qt24-st1', questionIds: ['bio10-m2-q013', 'bio10-m2-q014', 'bio10-m2-q015', 'bio10-m2-q016', 'bio10-m2-q056', 'bio10-m2-q057', 'bio10-m2-q058', 'bio10-m2-q059', 'bio10-m2-q060', 'bio10-m2-q061', 'bio10-m2-q062', 'bio10-m2-q063'] },
  { questionTypeId: 'bio10-qt3', subTypeId: 'bio10-qt3-st1', questionIds: ['bio10-q3', 'bio10-m2-q017', 'bio10-m2-q018', 'bio10-m2-q019', 'bio10-m2-q064', 'bio10-m2-q065', 'bio10-m2-q066', 'bio10-m2-q067', 'bio10-m2-q068', 'bio10-m2-q069', 'bio10-m2-q070', 'bio10-m2-q071'] },
  { questionTypeId: 'bio10-qt25', subTypeId: 'bio10-qt25-st1', questionIds: ['bio10-m2-q020', 'bio10-m2-q021', 'bio10-m2-q022', 'bio10-m2-q023', 'bio10-m2-q072', 'bio10-m2-q073', 'bio10-m2-q074', 'bio10-m2-q075', 'bio10-m2-q076', 'bio10-m2-q077', 'bio10-m2-q078', 'bio10-m2-q079'] },
  { questionTypeId: 'bio10-qt26', subTypeId: 'bio10-qt26-st1', questionIds: ['bio10-m2-q024', 'bio10-m2-q025', 'bio10-m2-q026', 'bio10-m2-q027', 'bio10-m2-q080', 'bio10-m2-q081', 'bio10-m2-q082', 'bio10-m2-q083', 'bio10-m2-q084', 'bio10-m2-q085', 'bio10-m2-q086', 'bio10-m2-q087'] },
  { questionTypeId: 'bio10-qt27', subTypeId: 'bio10-qt27-st1', questionIds: ['bio10-m2-q028', 'bio10-m2-q029', 'bio10-m2-q030', 'bio10-m2-q031', 'bio10-m2-q088', 'bio10-m2-q089', 'bio10-m2-q090', 'bio10-m2-q091', 'bio10-m2-q092', 'bio10-m2-q093', 'bio10-m2-q094', 'bio10-m2-q095'] }
]);

export const g10BiologyModule2PracticeMetadata = [...legacy, ...g10BiologyModule2Adaptive.metadata];

