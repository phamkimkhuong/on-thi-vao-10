import type { LearningMisconception, LearningOutcome } from '@/types';

export const g11ChemistryHydrocarbonsOutcomes: LearningOutcome[] = [
  {
    id: 'chem11-hc-alkane-concept-formula', topicId: 'chem11-t4',
    title: 'Khái niệm và công thức chung của alkane',
    description: 'Nêu alkane là hydrocarbon no mạch hở, chỉ có liên kết đơn; sử dụng công thức chung CnH2n+2 với n ≥ 1.',
    scope: 'core', orderIndex: 401, questionTypeIds: ['chem11-qt45'],
    prerequisiteOutcomeIds: ['chem11-org-homolog-concept'],
    misconceptionIds: ['chem11-mis-alkane-any-saturated','chem11-mis-alkane-formula-all-n'],
    evidenceTypes: ['recognition','representation','calculation'], estimatedMinutes: 30, isCritical: true
  },
  {
    id: 'chem11-hc-alkane-natural-sources', topicId: 'chem11-t4',
    title: 'Nguồn alkane trong tự nhiên',
    description: 'Nêu khí thiên nhiên, khí đồng hành, dầu mỏ và biogas là các nguồn alkane quan trọng; nhận diện methane là thành phần chính của khí thiên nhiên/biogas.',
    scope: 'core', orderIndex: 402, questionTypeIds: ['chem11-qt45'],
    prerequisiteOutcomeIds: ['chem11-hc-alkane-concept-formula'],
    misconceptionIds: ['chem11-mis-biogas-pure-methane'],
    evidenceTypes: ['recognition','data','application'], estimatedMinutes: 20
  },
  {
    id: 'chem11-hc-alkane-isomer-formula', topicId: 'chem11-t4',
    title: 'Công thức và đồng phân mạch carbon của alkane đơn giản',
    description: 'Suy ra CTPT từ công thức chung và viết/nhận diện đồng phân mạch carbon của alkane đến C5.',
    scope: 'core', orderIndex: 403, questionTypeIds: ['chem11-qt45'],
    prerequisiteOutcomeIds: ['chem11-org-simple-isomer-enumeration'],
    misconceptionIds: ['chem11-mis-alkane-isomer-position','chem11-mis-alkane-c3-branched'],
    evidenceTypes: ['representation','calculation','application'], estimatedMinutes: 40
  },
  {
    id: 'chem11-hc-alkane-naming-straight', topicId: 'chem11-t4',
    title: 'Danh pháp alkane mạch không phân nhánh',
    description: 'Gọi tên và viết CTCT alkane mạch không phân nhánh C1–C10 theo danh pháp thay thế.',
    scope: 'core', orderIndex: 404, questionTypeIds: ['chem11-qt46'],
    prerequisiteOutcomeIds: ['chem11-hc-alkane-concept-formula'],
    misconceptionIds: ['chem11-mis-alkane-prefix-carbon-count'],
    evidenceTypes: ['recognition','representation'], estimatedMinutes: 35, isCritical: true
  },
  {
    id: 'chem11-hc-alkane-naming-branched', topicId: 'chem11-t4',
    title: 'Danh pháp alkane mạch nhánh',
    description: 'Chọn mạch chính dài nhất, đánh số gần nhánh, xác định vị trí–tên nhánh và gọi tên alkane mạch nhánh đến 5 carbon.',
    scope: 'core', orderIndex: 405, questionTypeIds: ['chem11-qt46'],
    prerequisiteOutcomeIds: ['chem11-hc-alkane-naming-straight'],
    misconceptionIds: ['chem11-mis-longest-chain-horizontal','chem11-mis-number-from-left','chem11-mis-branch-in-main-chain'],
    evidenceTypes: ['representation','application'], estimatedMinutes: 50, isCritical: true
  },
  {
    id: 'chem11-hc-alkane-structure-shape', topicId: 'chem11-t4',
    title: 'Liên kết và hình dạng methane, ethane',
    description: 'Trình bày alkane chỉ chứa liên kết sigma bền, kém phân cực; mô tả hình tứ diện của methane và hình học quanh carbon trong ethane.',
    scope: 'core', orderIndex: 406, questionTypeIds: ['chem11-qt47'],
    prerequisiteOutcomeIds: ['chem11-org-carbon-chain-bonding'],
    misconceptionIds: ['chem11-mis-methane-planar','chem11-mis-alkane-pi-bond'],
    evidenceTypes: ['representation','explanation'], estimatedMinutes: 30
  },
  {
    id: 'chem11-hc-alkane-physical-properties', topicId: 'chem11-t4',
    title: 'Tính chất vật lí của alkane',
    description: 'Trình bày và giải thích xu hướng trạng thái, nhiệt độ sôi, tỉ khối và tính tan; đọc dữ liệu C1–C6.',
    scope: 'core', orderIndex: 407, questionTypeIds: ['chem11-qt47'],
    prerequisiteOutcomeIds: ['chem11-hc-alkane-structure-shape'],
    misconceptionIds: ['chem11-mis-alkane-water-soluble','chem11-mis-alkane-boiling-branch'],
    evidenceTypes: ['data','explanation','application'], estimatedMinutes: 40, isCritical: true
  },
  {
    id: 'chem11-hc-alkane-substitution', topicId: 'chem11-t4',
    title: 'Phản ứng thế halogen của alkane',
    description: 'Viết và giải thích phản ứng bromine hóa alkane dưới ánh sáng/đun nóng; dự đoán sản phẩm thế đơn giản và hiện tượng với hexane.',
    scope: 'core', orderIndex: 408, questionTypeIds: ['chem11-qt48'],
    prerequisiteOutcomeIds: ['chem11-hc-alkane-structure-shape'],
    misconceptionIds: ['chem11-mis-alkane-bromine-dark','chem11-mis-substitution-addition'],
    evidenceTypes: ['representation','experiment','explanation'], estimatedMinutes: 45, isCritical: true
  },
  {
    id: 'chem11-hc-alkane-cracking-reforming', topicId: 'chem11-t4',
    title: 'Cracking và reforming alkane',
    description: 'Trình bày cracking bẻ gãy mạch tạo hydrocarbon nhỏ hơn; reforming biến đổi khung không làm đổi đáng kể số carbon; cân bằng sơ đồ đơn giản.',
    scope: 'core', orderIndex: 409, questionTypeIds: ['chem11-qt48'],
    prerequisiteOutcomeIds: ['chem11-hc-alkane-concept-formula'],
    misconceptionIds: ['chem11-mis-cracking-only-alkane','chem11-mis-reforming-cracking'],
    evidenceTypes: ['representation','explanation','application'], estimatedMinutes: 45
  },
  {
    id: 'chem11-hc-alkane-combustion', topicId: 'chem11-t4',
    title: 'Phản ứng oxi hóa alkane',
    description: 'Viết phản ứng cháy hoàn toàn alkane; nhận diện cháy không hoàn toàn tạo CO/soot và giải bài toán tỉ lệ CO2–H2O cơ bản.',
    scope: 'core', orderIndex: 410, questionTypeIds: ['chem11-qt48'],
    prerequisiteOutcomeIds: ['chem11-bridge-equation'],
    misconceptionIds: ['chem11-mis-combustion-always-complete','chem11-mis-alkane-water-co2-ratio'],
    evidenceTypes: ['representation','calculation','experiment'], estimatedMinutes: 50, isCritical: true
  },
  {
    id: 'chem11-hc-alkane-applications-production', topicId: 'chem11-t4',
    title: 'Ứng dụng và khai thác alkane',
    description: 'Liên hệ alkane với nhiên liệu, dung môi, nguyên liệu hóa dầu và khai thác/chế biến từ khí thiên nhiên, khí đồng hành, dầu mỏ.',
    scope: 'core', orderIndex: 411, questionTypeIds: ['chem11-qt48'],
    prerequisiteOutcomeIds: ['chem11-hc-alkane-natural-sources'],
    misconceptionIds: ['chem11-mis-alkane-only-fuel'],
    evidenceTypes: ['recognition','application'], estimatedMinutes: 25
  },
  {
    id: 'chem11-hc-alkane-environment-safety', topicId: 'chem11-t4',
    title: 'Khí thải giao thông và an toàn nhiên liệu',
    description: 'Giải thích CO, hydrocarbon chưa cháy, soot và khí nhà kính từ sử dụng nhiên liệu; lựa chọn biện pháp giảm phát thải và sử dụng alkane an toàn.',
    scope: 'core', orderIndex: 412, questionTypeIds: ['chem11-qt48'],
    prerequisiteOutcomeIds: ['chem11-hc-alkane-combustion'],
    misconceptionIds: ['chem11-mis-complete-combustion-no-impact','chem11-mis-idling-reduces-emission'],
    evidenceTypes: ['data','explanation','application'], estimatedMinutes: 35, isCritical: true
  },
  {id:'chem11-hc-unsat-concept-formula',topicId:'chem11-t4',title:'Khái niệm và công thức hydrocarbon không no',description:'Phân biệt alkene có C=C, alkyne có C≡C; dùng công thức CnH2n và CnH2n−2 cho mạch hở có một liên kết bội.',scope:'core',orderIndex:413,questionTypeIds:['chem11-qt49'],prerequisiteOutcomeIds:['chem11-hc-alkane-concept-formula'],misconceptionIds:['chem11-mis-unsat-any-formula','chem11-mis-alkyne-formula'],evidenceTypes:['recognition','representation','calculation'],estimatedMinutes:35,isCritical:true},
  {id:'chem11-hc-unsat-naming',topicId:'chem11-t4',title:'Danh pháp alkene và alkyne đơn giản',description:'Gọi tên và viết CTCT alkene, alkyne C2–C5; đánh số để liên kết bội có chỉ số nhỏ nhất.',scope:'core',orderIndex:414,questionTypeIds:['chem11-qt49'],prerequisiteOutcomeIds:['chem11-hc-alkane-naming-straight'],misconceptionIds:['chem11-mis-unsat-number-branch-first'],evidenceTypes:['representation','application'],estimatedMinutes:45,isCritical:true},
  {id:'chem11-hc-unsat-structure-shape',topicId:'chem11-t4',title:'Liên kết và hình dạng ethylene, acetylene',description:'Mô tả C=C gồm một sigma và một pi, C≡C gồm một sigma và hai pi; ethylene phẳng, acetylene thẳng.',scope:'core',orderIndex:415,questionTypeIds:['chem11-qt50'],prerequisiteOutcomeIds:['chem11-hc-alkane-structure-shape'],misconceptionIds:['chem11-mis-double-two-sigma','chem11-mis-acetylene-bent'],evidenceTypes:['representation','explanation'],estimatedMinutes:35,isCritical:true},
  {id:'chem11-hc-unsat-geometric-isomer',topicId:'chem11-t4',title:'Đồng phân hình học cis–trans',description:'Nêu điều kiện mỗi carbon C=C gắn hai nhóm khác nhau và xác định cis/trans trong trường hợp đơn giản.',scope:'core',orderIndex:416,questionTypeIds:['chem11-qt50'],prerequisiteOutcomeIds:['chem11-org-isomer-concept'],misconceptionIds:['chem11-mis-cis-trans-any-alkene','chem11-mis-cis-trans-rotation'],evidenceTypes:['representation','explanation','application'],estimatedMinutes:45,isCritical:true},
  {id:'chem11-hc-unsat-physical',topicId:'chem11-t4',title:'Tính chất vật lí alkene, alkyne',description:'Nêu trạng thái, nhiệt độ sôi, tỉ khối và khả năng hòa tan trong nước của một số alkene, alkyne.',scope:'core',orderIndex:417,questionTypeIds:['chem11-qt50'],prerequisiteOutcomeIds:['chem11-hc-alkane-physical-properties'],misconceptionIds:['chem11-mis-unsat-water-soluble'],evidenceTypes:['data','explanation'],estimatedMinutes:25},
  {id:'chem11-hc-unsat-addition-basic',topicId:'chem11-t4',title:'Phản ứng cộng hydrogen và bromine',description:'Viết phản ứng cộng H2, Br2 vào C=C/C≡C và liên hệ hiện tượng làm mất màu nước bromine.',scope:'core',orderIndex:418,questionTypeIds:['chem11-qt51'],prerequisiteOutcomeIds:['chem11-hc-unsat-structure-shape'],misconceptionIds:['chem11-mis-addition-substitution','chem11-mis-alkyne-one-equivalent-only'],evidenceTypes:['representation','experiment','calculation'],estimatedMinutes:50,isCritical:true},
  {id:'chem11-hc-unsat-markovnikov',topicId:'chem11-t4',title:'Cộng HX, nước và quy tắc Markovnikov',description:'Xác định sản phẩm chính khi cộng HX/H2O vào alkene bất đối xứng trong phạm vi đơn giản.',scope:'core',orderIndex:419,questionTypeIds:['chem11-qt51'],prerequisiteOutcomeIds:['chem11-hc-unsat-addition-basic'],misconceptionIds:['chem11-mis-markovnikov-random','chem11-mis-water-addition-no-catalyst'],evidenceTypes:['representation','explanation','application'],estimatedMinutes:50,isCritical:true},
  {id:'chem11-hc-unsat-polymerization',topicId:'chem11-t4',title:'Phản ứng trùng hợp alkene',description:'Viết phản ứng trùng hợp ethylene và alkene đơn giản, nhận diện monomer–mắt xích.',scope:'core',orderIndex:420,questionTypeIds:['chem11-qt52'],prerequisiteOutcomeIds:['chem11-hc-unsat-addition-basic'],misconceptionIds:['chem11-mis-polymer-repeat-double-bond'],evidenceTypes:['representation','application'],estimatedMinutes:40},
  {id:'chem11-hc-terminal-alkyne-silver',topicId:'chem11-t4',title:'Phản ứng alk-1-yne với AgNO3/NH3',description:'Nhận diện liên kết ≡C–H đầu mạch và viết/giải thích phản ứng tạo kết tủa bạc acetylide đơn giản.',scope:'core',orderIndex:421,questionTypeIds:['chem11-qt52'],prerequisiteOutcomeIds:['chem11-hc-unsat-concept-formula'],misconceptionIds:['chem11-mis-all-alkyne-silver'],evidenceTypes:['recognition','experiment','representation'],estimatedMinutes:40,isCritical:true},
  {id:'chem11-hc-unsat-oxidation',topicId:'chem11-t4',title:'Oxi hóa hydrocarbon không no',description:'Mô tả alkene/alkyne làm mất màu KMnO4, viết cháy hoàn toàn và phân biệt với phép thử bromine/AgNO3.',scope:'core',orderIndex:422,questionTypeIds:['chem11-qt52'],prerequisiteOutcomeIds:['chem11-bridge-equation'],misconceptionIds:['chem11-mis-kmno4-only-alkene','chem11-mis-bromine-unique-test'],evidenceTypes:['experiment','representation','explanation'],estimatedMinutes:45,isCritical:true},
  {id:'chem11-hc-unsat-preparation-experiment',topicId:'chem11-t4',title:'Điều chế và thí nghiệm ethylene, acetylene',description:'Phân tích dehydration ethanol tạo ethylene, CaC2 với nước tạo acetylene; mô tả thử cháy, bromine, KMnO4 an toàn.',scope:'core',orderIndex:423,questionTypeIds:['chem11-qt53'],prerequisiteOutcomeIds:['chem11-hc-unsat-addition-basic'],misconceptionIds:['chem11-mis-cac2-ethylene','chem11-mis-collect-before-air-purge'],evidenceTypes:['experiment','representation','application'],estimatedMinutes:50,isCritical:true},
  {id:'chem11-hc-unsat-applications-industry',topicId:'chem11-t4',title:'Ứng dụng và điều chế công nghiệp',description:'Nêu ứng dụng ethylene, acetylene và phương pháp công nghiệp: cracking tạo alkene, nhiệt phân methane tạo acetylene.',scope:'core',orderIndex:424,questionTypeIds:['chem11-qt53'],prerequisiteOutcomeIds:['chem11-hc-alkane-cracking-reforming'],misconceptionIds:['chem11-mis-unsat-only-fuel'],evidenceTypes:['recognition','data','application'],estimatedMinutes:30},
  {id:'chem11-hc-arene-concept-formula',topicId:'chem11-t4',title:'Khái niệm và công thức arene',description:'Nhận diện hydrocarbon chứa một hay nhiều vòng benzene; sử dụng CnH2n−6 cho dãy đồng đẳng benzene đơn vòng có một nhánh alkyl hoặc nhiều nhánh alkyl tổng quát.',scope:'core',orderIndex:425,questionTypeIds:['chem11-qt54'],prerequisiteOutcomeIds:['chem11-org-classify-hydrocarbon'],misconceptionIds:['chem11-mis-arene-smell-definition','chem11-mis-arene-formula-universal'],evidenceTypes:['recognition','representation','calculation'],estimatedMinutes:35,isCritical:true},
  {id:'chem11-hc-arene-common-formulas-names',topicId:'chem11-t4',title:'Công thức và tên arene thường gặp',description:'Viết công thức, gọi tên và phân biệt benzene, toluene, xylene, styrene và naphthalene.',scope:'core',orderIndex:426,questionTypeIds:['chem11-qt54'],prerequisiteOutcomeIds:['chem11-hc-arene-concept-formula'],misconceptionIds:['chem11-mis-styrene-alkylbenzene','chem11-mis-naphthalene-benzene-homolog'],evidenceTypes:['recognition','representation','application'],estimatedMinutes:40,isCritical:true},
  {id:'chem11-hc-arene-xylene-positions',topicId:'chem11-t4',title:'Vị trí o–m–p và đồng phân xylene',description:'Đổi giữa kí hiệu ortho/meta/para và vị trí 1,2-/1,3-/1,4-; nhận diện ba đồng phân xylene.',scope:'core',orderIndex:427,questionTypeIds:['chem11-qt54'],prerequisiteOutcomeIds:['chem11-org-isomer-identification'],misconceptionIds:['chem11-mis-omp-random','chem11-mis-xylene-one-isomer'],evidenceTypes:['representation','explanation','application'],estimatedMinutes:40,isCritical:true},
  {id:'chem11-hc-benzene-structure-shape',topicId:'chem11-t4',title:'Cấu tạo và hình dạng benzene',description:'Mô tả sáu carbon tạo lục giác phẳng, góc khoảng 120°, các liên kết C–C tương đương và hệ electron pi liên hợp.',scope:'core',orderIndex:428,questionTypeIds:['chem11-qt55'],prerequisiteOutcomeIds:['chem11-hc-unsat-structure-shape'],misconceptionIds:['chem11-mis-benzene-cyclohexatriene-local','chem11-mis-benzene-nonplanar'],evidenceTypes:['representation','data','explanation'],estimatedMinutes:40,isCritical:true},
  {id:'chem11-hc-arene-physical-natural',topicId:'chem11-t4',title:'Tính chất vật lí và trạng thái tự nhiên',description:'Đọc dữ liệu trạng thái, nhiệt độ sôi/nóng chảy, tỉ khối, độ tan; nêu sự có mặt của BTX trong dầu mỏ và arene đa vòng trong dầu mỏ, nhựa than đá.',scope:'core',orderIndex:429,questionTypeIds:['chem11-qt55'],prerequisiteOutcomeIds:['chem11-hc-alkane-physical-properties'],misconceptionIds:['chem11-mis-arene-water-soluble','chem11-mis-all-arene-liquid'],evidenceTypes:['recognition','data','explanation'],estimatedMinutes:40},
  {id:'chem11-hc-arene-substitution-benzene',topicId:'chem11-t4',title:'Phản ứng thế của benzene',description:'Viết và phân tích phản ứng halogen hóa, nitro hóa benzene với điều kiện xúc tác/nhiệt độ phù hợp.',scope:'core',orderIndex:430,questionTypeIds:['chem11-qt56'],prerequisiteOutcomeIds:['chem11-hc-benzene-structure-shape'],misconceptionIds:['chem11-mis-benzene-bromine-addition','chem11-mis-nitration-no-catalyst'],evidenceTypes:['representation','experiment','explanation'],estimatedMinutes:50,isCritical:true},
  {id:'chem11-hc-arene-substitution-toluene',topicId:'chem11-t4',title:'Phản ứng thế và quy tắc thế của toluene',description:'Dự đoán sản phẩm thế vào vòng của toluene; nhận biết nhóm methyl định hướng ưu tiên ortho, para trong phạm vi chương trình.',scope:'core',orderIndex:431,questionTypeIds:['chem11-qt56'],prerequisiteOutcomeIds:['chem11-hc-arene-substitution-benzene','chem11-hc-arene-xylene-positions'],misconceptionIds:['chem11-mis-methyl-meta-director','chem11-mis-ring-sidechain-condition'],evidenceTypes:['representation','explanation','application'],estimatedMinutes:50,isCritical:true},
  {id:'chem11-hc-benzene-addition',topicId:'chem11-t4',title:'Phản ứng cộng vào vòng benzene',description:'Viết phản ứng cộng hydrogen và chlorine vào benzene trong điều kiện mạnh/phù hợp; phân biệt với phản ứng thế.',scope:'core',orderIndex:432,questionTypeIds:['chem11-qt57'],prerequisiteOutcomeIds:['chem11-hc-benzene-structure-shape'],misconceptionIds:['chem11-mis-benzene-adds-easily','chem11-mis-benzene-hydrogen-one-mole'],evidenceTypes:['representation','explanation','calculation'],estimatedMinutes:40},
  {id:'chem11-hc-arene-combustion',topicId:'chem11-t4',title:'Phản ứng cháy của arene',description:'Cân bằng phản ứng cháy, khai thác tỉ lệ CO2–H2O và giải bài toán cơ bản của benzene, alkylbenzene.',scope:'core',orderIndex:433,questionTypeIds:['chem11-qt57'],prerequisiteOutcomeIds:['chem11-hc-alkane-combustion'],misconceptionIds:['chem11-mis-arene-combustion-water-more'],evidenceTypes:['representation','calculation','data'],estimatedMinutes:45,isCritical:true},
  {id:'chem11-hc-alkylbenzene-oxidation',topicId:'chem11-t4',title:'Oxi hóa nhóm alkyl gắn vòng benzene',description:'Mô tả và viết phản ứng oxi hóa mạch nhánh alkyl của toluene bằng KMnO4 khi đun nóng; phân biệt benzene và toluene qua hiện tượng.',scope:'core',orderIndex:434,questionTypeIds:['chem11-qt57','chem11-qt58'],prerequisiteOutcomeIds:['chem11-hc-arene-substitution-toluene'],misconceptionIds:['chem11-mis-benzene-kmno4-room','chem11-mis-toluene-ring-oxidized'],evidenceTypes:['experiment','representation','explanation'],estimatedMinutes:50,isCritical:true},
  {id:'chem11-hc-arene-experiments',topicId:'chem11-t4',title:'Thí nghiệm tính chất arene',description:'Phân tích quy trình, hiện tượng và an toàn của nitro hóa benzene, cộng chlorine vào benzene, oxi hóa benzene/toluene bằng KMnO4.',scope:'core',orderIndex:435,questionTypeIds:['chem11-qt58'],prerequisiteOutcomeIds:['chem11-hc-arene-substitution-benzene','chem11-hc-benzene-addition','chem11-hc-alkylbenzene-oxidation'],misconceptionIds:['chem11-mis-arene-direct-smell','chem11-mis-nitration-open-flame'],evidenceTypes:['experiment','data','explanation','application'],estimatedMinutes:55,isCritical:true},
  {id:'chem11-hc-arene-industrial-preparation',topicId:'chem11-t4',title:'Điều chế arene trong công nghiệp',description:'Nêu nguồn hydrocarbon thiên nhiên và reforming alkane/cycloalkane để tạo arene; kiểm tra phương trình bằng bảo toàn nguyên tử.',scope:'core',orderIndex:436,questionTypeIds:['chem11-qt58'],prerequisiteOutcomeIds:['chem11-hc-alkane-cracking-reforming'],misconceptionIds:['chem11-mis-arene-only-coal','chem11-mis-reforming-breaks-carbon'],evidenceTypes:['recognition','representation','application'],estimatedMinutes:35},
  {id:'chem11-hc-arene-applications-safety',topicId:'chem11-t4',title:'Ứng dụng, sức khỏe và môi trường của arene',description:'Liên hệ arene với dung môi/nguyên liệu tổng hợp; lựa chọn biện pháp giảm phơi nhiễm, bảo vệ sức khỏe và môi trường.',scope:'core',orderIndex:437,questionTypeIds:['chem11-qt55','chem11-qt58'],prerequisiteOutcomeIds:['chem11-hc-arene-physical-natural'],misconceptionIds:['chem11-mis-arene-safe-because-organic','chem11-mis-benzene-household-solvent'],evidenceTypes:['data','explanation','application'],estimatedMinutes:40,isCritical:true}
];

export const g11ChemistryHydrocarbonsMisconceptions: LearningMisconception[] = [
  { id:'chem11-mis-alkane-any-saturated',outcomeId:'chem11-hc-alkane-concept-formula',statement:'Mọi hydrocarbon no kể cả cycloalkane đều là alkane.',correction:'Trong chương trình, alkane là hydrocarbon no mạch hở.',severity:'critical',remediationOutcomeIds:['chem11-hc-alkane-concept-formula'] },
  { id:'chem11-mis-alkane-formula-all-n',outcomeId:'chem11-hc-alkane-concept-formula',statement:'Công thức CnH2n+2 dùng cho mọi hydrocarbon.',correction:'Công thức này dành cho alkane mạch hở, n nguyên dương.',severity:'critical',remediationOutcomeIds:['chem11-hc-alkane-concept-formula'] },
  { id:'chem11-mis-biogas-pure-methane',outcomeId:'chem11-hc-alkane-natural-sources',statement:'Biogas là methane tinh khiết 100%.',correction:'Biogas giàu methane nhưng còn CO2, H2S và khí khác tùy nguồn.',severity:'normal',remediationOutcomeIds:['chem11-hc-alkane-natural-sources'] },
  { id:'chem11-mis-alkane-isomer-position',outcomeId:'chem11-hc-alkane-isomer-formula',statement:'Alkane chỉ liên kết đơn có đồng phân vị trí liên kết đôi.',correction:'Alkane không có liên kết đôi; trong phạm vi này xét đồng phân mạch carbon.',severity:'critical',remediationOutcomeIds:['chem11-hc-alkane-isomer-formula'] },
  { id:'chem11-mis-alkane-c3-branched',outcomeId:'chem11-hc-alkane-isomer-formula',statement:'C3H8 có một đồng phân mạch nhánh.',correction:'Ba carbon chưa đủ tạo khung nhánh khác; propane chỉ có một CTCT.',severity:'normal',remediationOutcomeIds:['chem11-hc-alkane-isomer-formula'] },
  { id:'chem11-mis-alkane-prefix-carbon-count',outcomeId:'chem11-hc-alkane-naming-straight',statement:'Tiền tố tên alkane cho biết số hydrogen.',correction:'Meth-, eth-, prop-, but-... cho biết số carbon của mạch chính.',severity:'critical',remediationOutcomeIds:['chem11-hc-alkane-naming-straight'] },
  { id:'chem11-mis-longest-chain-horizontal',outcomeId:'chem11-hc-alkane-naming-branched',statement:'Mạch chính luôn là hàng carbon vẽ ngang.',correction:'Mạch chính là chuỗi carbon liên tục dài nhất, có thể gấp khúc.',severity:'critical',remediationOutcomeIds:['chem11-hc-alkane-naming-branched'] },
  { id:'chem11-mis-number-from-left',outcomeId:'chem11-hc-alkane-naming-branched',statement:'Luôn đánh số mạch từ trái sang phải.',correction:'Đánh số từ đầu gần nhánh hơn để bộ chỉ số nhỏ nhất.',severity:'critical',remediationOutcomeIds:['chem11-hc-alkane-naming-branched'] },
  { id:'chem11-mis-branch-in-main-chain',outcomeId:'chem11-hc-alkane-naming-branched',statement:'Có thể đếm lại carbon thuộc mạch chính như một nhánh.',correction:'Mỗi carbon chỉ thuộc một phần biểu diễn; nhánh là phần nằm ngoài mạch chính đã chọn.',severity:'normal',remediationOutcomeIds:['chem11-hc-alkane-naming-branched'] },
  { id:'chem11-mis-methane-planar',outcomeId:'chem11-hc-alkane-structure-shape',statement:'Methane có bốn H nằm trên một hình vuông phẳng.',correction:'Methane có hình tứ diện với C ở tâm.',severity:'critical',remediationOutcomeIds:['chem11-hc-alkane-structure-shape'] },
  { id:'chem11-mis-alkane-pi-bond',outcomeId:'chem11-hc-alkane-structure-shape',statement:'Alkane chứa liên kết pi C=C.',correction:'Alkane chỉ chứa liên kết đơn sigma C–C và C–H.',severity:'critical',remediationOutcomeIds:['chem11-hc-alkane-structure-shape'] },
  { id:'chem11-mis-alkane-water-soluble',outcomeId:'chem11-hc-alkane-physical-properties',statement:'Alkane tan tốt trong nước vì có hydrogen.',correction:'Alkane kém phân cực nên hầu như không tan trong nước.',severity:'critical',remediationOutcomeIds:['chem11-hc-alkane-physical-properties'] },
  { id:'chem11-mis-alkane-boiling-branch',outcomeId:'chem11-hc-alkane-physical-properties',statement:'Với cùng CTPT, mạch nhánh luôn có nhiệt độ sôi cao hơn mạch thẳng.',correction:'Phân nhánh thường làm giảm diện tích tiếp xúc và hạ nhiệt độ sôi.',severity:'normal',remediationOutcomeIds:['chem11-hc-alkane-physical-properties'] },
  { id:'chem11-mis-alkane-bromine-dark',outcomeId:'chem11-hc-alkane-substitution',statement:'Hexane làm mất màu nước bromine nhanh ở nhiệt độ thường trong bóng tối.',correction:'Phản ứng thế cần ánh sáng hoặc đun nóng; ở điều kiện thường tối phản ứng rất chậm/không đáng kể.',severity:'critical',remediationOutcomeIds:['chem11-hc-alkane-substitution'] },
  { id:'chem11-mis-substitution-addition',outcomeId:'chem11-hc-alkane-substitution',statement:'Bromine cộng vào liên kết đơn C–C của alkane.',correction:'Alkane phản ứng thế: H bị thay bởi halogen.',severity:'critical',remediationOutcomeIds:['chem11-hc-alkane-substitution'] },
  { id:'chem11-mis-cracking-only-alkane',outcomeId:'chem11-hc-alkane-cracking-reforming',statement:'Cracking alkane dài chỉ tạo các alkane ngắn.',correction:'Cracking thường tạo hỗn hợp alkane và alkene nhỏ hơn.',severity:'critical',remediationOutcomeIds:['chem11-hc-alkane-cracking-reforming'] },
  { id:'chem11-mis-reforming-cracking',outcomeId:'chem11-hc-alkane-cracking-reforming',statement:'Reforming luôn làm giảm số carbon phân tử như cracking.',correction:'Reforming chủ yếu đổi khung thẳng thành nhánh/vòng, không làm đổi đáng kể số carbon.',severity:'normal',remediationOutcomeIds:['chem11-hc-alkane-cracking-reforming'] },
  { id:'chem11-mis-combustion-always-complete',outcomeId:'chem11-hc-alkane-combustion',statement:'Đốt alkane trong mọi điều kiện chỉ tạo CO2 và H2O.',correction:'Thiếu oxygen có thể tạo CO, carbon đen và nước.',severity:'critical',remediationOutcomeIds:['chem11-hc-alkane-combustion'] },
  { id:'chem11-mis-alkane-water-co2-ratio',outcomeId:'chem11-hc-alkane-combustion',statement:'Cháy hoàn toàn alkane luôn cho n(H2O)=n(CO2).',correction:'Với CnH2n+2, một mol cho n mol CO2 và n+1 mol H2O.',severity:'critical',remediationOutcomeIds:['chem11-hc-alkane-combustion'] },
  { id:'chem11-mis-alkane-only-fuel',outcomeId:'chem11-hc-alkane-applications-production',statement:'Alkane chỉ dùng làm nhiên liệu.',correction:'Ngoài nhiên liệu, alkane còn là dung môi và nguyên liệu hóa dầu.',severity:'normal',remediationOutcomeIds:['chem11-hc-alkane-applications-production'] },
  { id:'chem11-mis-complete-combustion-no-impact',outcomeId:'chem11-hc-alkane-environment-safety',statement:'Cháy hoàn toàn nhiên liệu hoàn toàn không ảnh hưởng môi trường.',correction:'Dù giảm CO/soot, cháy hoàn toàn vẫn phát thải CO2 gây hiệu ứng nhà kính.',severity:'critical',remediationOutcomeIds:['chem11-hc-alkane-environment-safety'] },
  { id:'chem11-mis-idling-reduces-emission',outcomeId:'chem11-hc-alkane-environment-safety',statement:'Để động cơ nổ không tải lâu giúp giảm phát thải.',correction:'Nổ không tải lãng phí nhiên liệu và tiếp tục phát thải; nên tắt máy khi dừng lâu và bảo dưỡng đúng.',severity:'normal',remediationOutcomeIds:['chem11-hc-alkane-environment-safety'] }
  ,{id:'chem11-mis-unsat-any-formula',outcomeId:'chem11-hc-unsat-concept-formula',statement:'Mọi CnH2n đều là alkene.',correction:'Cần biết chất mạch hở có một C=C; cycloalkane cũng có CnH2n.',severity:'critical',remediationOutcomeIds:['chem11-hc-unsat-concept-formula']}
  ,{id:'chem11-mis-alkyne-formula',outcomeId:'chem11-hc-unsat-concept-formula',statement:'Alkyne một liên kết ba có CnH2n.',correction:'Alkyne mạch hở một C≡C có CnH2n−2, n≥2.',severity:'critical',remediationOutcomeIds:['chem11-hc-unsat-concept-formula']}
  ,{id:'chem11-mis-unsat-number-branch-first',outcomeId:'chem11-hc-unsat-naming',statement:'Đánh số ưu tiên nhánh trước liên kết bội.',correction:'Mạch được đánh số để liên kết bội có chỉ số nhỏ nhất trước.',severity:'critical',remediationOutcomeIds:['chem11-hc-unsat-naming']}
  ,{id:'chem11-mis-double-two-sigma',outcomeId:'chem11-hc-unsat-structure-shape',statement:'C=C gồm hai liên kết sigma.',correction:'C=C gồm một sigma và một pi; C≡C gồm một sigma và hai pi.',severity:'critical',remediationOutcomeIds:['chem11-hc-unsat-structure-shape']}
  ,{id:'chem11-mis-acetylene-bent',outcomeId:'chem11-hc-unsat-structure-shape',statement:'Acetylene có khung H–C≡C–H gấp khúc.',correction:'Acetylene có dạng thẳng quanh C≡C.',severity:'normal',remediationOutcomeIds:['chem11-hc-unsat-structure-shape']}
  ,{id:'chem11-mis-cis-trans-any-alkene',outcomeId:'chem11-hc-unsat-geometric-isomer',statement:'Mọi alkene đều có cis–trans.',correction:'Mỗi carbon của C=C phải gắn hai nhóm khác nhau.',severity:'critical',remediationOutcomeIds:['chem11-hc-unsat-geometric-isomer']}
  ,{id:'chem11-mis-cis-trans-rotation',outcomeId:'chem11-hc-unsat-geometric-isomer',statement:'Cis và trans đổi qua lại bằng quay tự do C=C.',correction:'Liên kết pi cản quay; đổi cấu hình cần phá vỡ liên kết pi.',severity:'critical',remediationOutcomeIds:['chem11-hc-unsat-geometric-isomer']}
  ,{id:'chem11-mis-unsat-water-soluble',outcomeId:'chem11-hc-unsat-physical',statement:'Alkene, alkyne tan tốt trong nước.',correction:'Chúng kém phân cực nên hầu như không tan trong nước.',severity:'normal',remediationOutcomeIds:['chem11-hc-unsat-physical']}
  ,{id:'chem11-mis-addition-substitution',outcomeId:'chem11-hc-unsat-addition-basic',statement:'Bromine hóa alkene là phản ứng thế H.',correction:'Br2 cộng qua liên kết pi, tạo hai liên kết C–Br.',severity:'critical',remediationOutcomeIds:['chem11-hc-unsat-addition-basic']}
  ,{id:'chem11-mis-alkyne-one-equivalent-only',outcomeId:'chem11-hc-unsat-addition-basic',statement:'Một liên kết ba chỉ cộng tối đa một mol H2/Br2.',correction:'C≡C có thể cộng tối đa hai đương lượng để thành liên kết đơn.',severity:'critical',remediationOutcomeIds:['chem11-hc-unsat-addition-basic']}
  ,{id:'chem11-mis-markovnikov-random',outcomeId:'chem11-hc-unsat-markovnikov',statement:'Cộng HX vào alkene bất đối xứng cho sản phẩm chính ngẫu nhiên.',correction:'Theo Markovnikov, H ưu tiên vào C đang có nhiều H hơn trong trường hợp chuẩn.',severity:'critical',remediationOutcomeIds:['chem11-hc-unsat-markovnikov']}
  ,{id:'chem11-mis-water-addition-no-catalyst',outcomeId:'chem11-hc-unsat-markovnikov',statement:'Cộng nước vào alkene luôn nhanh không cần xúc tác.',correction:'Hydration thường cần xúc tác acid và điều kiện phù hợp.',severity:'normal',remediationOutcomeIds:['chem11-hc-unsat-markovnikov']}
  ,{id:'chem11-mis-polymer-repeat-double-bond',outcomeId:'chem11-hc-unsat-polymerization',statement:'Mắt xích polyethylene vẫn giữ C=C.',correction:'Liên kết pi mở ra, mắt xích là –CH2–CH2– với liên kết đơn.',severity:'critical',remediationOutcomeIds:['chem11-hc-unsat-polymerization']}
  ,{id:'chem11-mis-all-alkyne-silver',outcomeId:'chem11-hc-terminal-alkyne-silver',statement:'Mọi alkyne đều kết tủa với AgNO3/NH3.',correction:'Chỉ alkyne đầu mạch có ≡C–H phản ứng trong phạm vi này.',severity:'critical',remediationOutcomeIds:['chem11-hc-terminal-alkyne-silver']}
  ,{id:'chem11-mis-kmno4-only-alkene',outcomeId:'chem11-hc-unsat-oxidation',statement:'Chỉ alkene làm mất màu KMnO4, alkyne không.',correction:'Cả alkene và alkyne có thể bị oxi hóa làm mất màu thuốc tím trong điều kiện phù hợp.',severity:'normal',remediationOutcomeIds:['chem11-hc-unsat-oxidation']}
  ,{id:'chem11-mis-bromine-unique-test',outcomeId:'chem11-hc-unsat-oxidation',statement:'Mất màu bromine luôn chứng minh duy nhất alkene.',correction:'Nhiều chất không no khác, kể cả alkyne, cũng cộng bromine.',severity:'critical',remediationOutcomeIds:['chem11-hc-unsat-oxidation']}
  ,{id:'chem11-mis-cac2-ethylene',outcomeId:'chem11-hc-unsat-preparation-experiment',statement:'CaC2 tác dụng nước tạo ethylene.',correction:'CaC2 + 2H2O → C2H2 + Ca(OH)2, tạo acetylene.',severity:'critical',remediationOutcomeIds:['chem11-hc-unsat-preparation-experiment']}
  ,{id:'chem11-mis-collect-before-air-purge',outcomeId:'chem11-hc-unsat-preparation-experiment',statement:'Có thể đốt ngay dòng acetylene đầu tiên từ bình điều chế.',correction:'Phải đuổi không khí trước để tránh hỗn hợp nổ.',severity:'critical',remediationOutcomeIds:['chem11-hc-unsat-preparation-experiment']}
  ,{id:'chem11-mis-unsat-only-fuel',outcomeId:'chem11-hc-unsat-applications-industry',statement:'Ethylene và acetylene chỉ dùng làm nhiên liệu.',correction:'Ethylene là nguyên liệu polymer/hóa chất và điều hòa quả; acetylene dùng hàn cắt và tổng hợp.',severity:'normal',remediationOutcomeIds:['chem11-hc-unsat-applications-industry']}
  ,{id:'chem11-mis-arene-smell-definition',outcomeId:'chem11-hc-arene-concept-formula',statement:'Hydrocarbon có mùi thơm thì đều là arene.',correction:'Arene được xác định bởi cấu trúc chứa vòng benzene, không phải bởi mùi.',severity:'critical',remediationOutcomeIds:['chem11-hc-arene-concept-formula']}
  ,{id:'chem11-mis-arene-formula-universal',outcomeId:'chem11-hc-arene-concept-formula',statement:'Mọi arene kể cả styrene, naphthalene đều có CnH2n−6.',correction:'CnH2n−6 áp dụng cho dãy đồng đẳng benzene đơn vòng no ở mạch nhánh; không dùng cho mọi arene.',severity:'critical',remediationOutcomeIds:['chem11-hc-arene-concept-formula']}
  ,{id:'chem11-mis-styrene-alkylbenzene',outcomeId:'chem11-hc-arene-common-formulas-names',statement:'Styrene là ethylbenzene vì đều có tám carbon.',correction:'Styrene là vinylbenzene C6H5CH=CH2; ethylbenzene là C6H5CH2CH3.',severity:'critical',remediationOutcomeIds:['chem11-hc-arene-common-formulas-names']}
  ,{id:'chem11-mis-naphthalene-benzene-homolog',outcomeId:'chem11-hc-arene-common-formulas-names',statement:'Naphthalene là đồng đẳng kế tiếp của benzene.',correction:'Naphthalene có hai vòng benzene ngưng tụ, không thuộc dãy đồng đẳng alkylbenzene CnH2n−6.',severity:'normal',remediationOutcomeIds:['chem11-hc-arene-common-formulas-names']}
  ,{id:'chem11-mis-omp-random',outcomeId:'chem11-hc-arene-xylene-positions',statement:'o-, m-, p- chỉ ba tên tùy ý, không gắn với vị trí.',correction:'o = 1,2; m = 1,3; p = 1,4 trên vòng benzene hai nhóm thế.',severity:'critical',remediationOutcomeIds:['chem11-hc-arene-xylene-positions']}
  ,{id:'chem11-mis-xylene-one-isomer',outcomeId:'chem11-hc-arene-xylene-positions',statement:'Xylene chỉ có một công thức cấu tạo.',correction:'Xylene có ba đồng phân vị trí o-, m-, p-xylene.',severity:'critical',remediationOutcomeIds:['chem11-hc-arene-xylene-positions']}
  ,{id:'chem11-mis-benzene-cyclohexatriene-local',outcomeId:'chem11-hc-benzene-structure-shape',statement:'Benzene có ba liên kết đơn và ba liên kết đôi định xứ với độ dài khác nhau rõ rệt.',correction:'Sáu liên kết C–C trong benzene tương đương do electron pi liên hợp/delocalized.',severity:'critical',remediationOutcomeIds:['chem11-hc-benzene-structure-shape']}
  ,{id:'chem11-mis-benzene-nonplanar',outcomeId:'chem11-hc-benzene-structure-shape',statement:'Vòng benzene gấp khúc như cyclohexane.',correction:'Benzene là lục giác phẳng, góc liên kết quanh C khoảng 120°.',severity:'critical',remediationOutcomeIds:['chem11-hc-benzene-structure-shape']}
  ,{id:'chem11-mis-arene-water-soluble',outcomeId:'chem11-hc-arene-physical-natural',statement:'Benzene tan tốt trong nước vì có liên kết pi.',correction:'Arene kém phân cực nên hầu như không tan trong nước.',severity:'critical',remediationOutcomeIds:['chem11-hc-arene-physical-natural']}
  ,{id:'chem11-mis-all-arene-liquid',outcomeId:'chem11-hc-arene-physical-natural',statement:'Mọi arene đều là chất lỏng ở điều kiện thường.',correction:'Naphthalene là chất rắn ở điều kiện thường; trạng thái phụ thuộc cấu trúc và nhiệt độ.',severity:'normal',remediationOutcomeIds:['chem11-hc-arene-physical-natural']}
  ,{id:'chem11-mis-benzene-bromine-addition',outcomeId:'chem11-hc-arene-substitution-benzene',statement:'Benzene làm mất màu nước bromine ngay như ethylene.',correction:'Benzene không cộng bromine dễ ở điều kiện thường; halogen hóa vòng là phản ứng thế cần xúc tác Lewis acid phù hợp.',severity:'critical',remediationOutcomeIds:['chem11-hc-arene-substitution-benzene']}
  ,{id:'chem11-mis-nitration-no-catalyst',outcomeId:'chem11-hc-arene-substitution-benzene',statement:'Benzene phản ứng nhanh với HNO3 loãng ở nhiệt độ thường.',correction:'Nitro hóa dùng HNO3 đặc/H2SO4 đặc và kiểm soát nhiệt độ phù hợp.',severity:'critical',remediationOutcomeIds:['chem11-hc-arene-substitution-benzene']}
  ,{id:'chem11-mis-methyl-meta-director',outcomeId:'chem11-hc-arene-substitution-toluene',statement:'Nhóm methyl định hướng thế tiếp theo chủ yếu vào meta.',correction:'Trong phạm vi chương trình, methyl định hướng ưu tiên ortho và para.',severity:'critical',remediationOutcomeIds:['chem11-hc-arene-substitution-toluene']}
  ,{id:'chem11-mis-ring-sidechain-condition',outcomeId:'chem11-hc-arene-substitution-toluene',statement:'Thế vào vòng và thế ở mạch nhánh toluene xảy ra trong cùng điều kiện và cho cùng sản phẩm.',correction:'Vị trí phản ứng phụ thuộc tác nhân/điều kiện; cần đọc rõ xúc tác, ánh sáng và phạm vi câu hỏi.',severity:'normal',remediationOutcomeIds:['chem11-hc-arene-substitution-toluene']}
  ,{id:'chem11-mis-benzene-adds-easily',outcomeId:'chem11-hc-benzene-addition',statement:'Benzene cộng H2 hoặc Cl2 dễ như alkene.',correction:'Cộng vào vòng benzene cần điều kiện mạnh vì làm mất tính bền thơm.',severity:'critical',remediationOutcomeIds:['chem11-hc-benzene-addition']}
  ,{id:'chem11-mis-benzene-hydrogen-one-mole',outcomeId:'chem11-hc-benzene-addition',statement:'Một mol benzene chỉ cộng tối đa một mol H2.',correction:'Hydrogen hóa hoàn toàn vòng benzene cần 3 mol H2, tạo cyclohexane.',severity:'critical',remediationOutcomeIds:['chem11-hc-benzene-addition']}
  ,{id:'chem11-mis-arene-combustion-water-more',outcomeId:'chem11-hc-arene-combustion',statement:'Đốt mọi hydrocarbon luôn cho nhiều mol H2O hơn CO2.',correction:'Với benzene/alkylbenzene CnH2n−6, một mol cho n CO2 và n−3 H2O; CO2 nhiều hơn H2O.',severity:'critical',remediationOutcomeIds:['chem11-hc-arene-combustion']}
  ,{id:'chem11-mis-benzene-kmno4-room',outcomeId:'chem11-hc-alkylbenzene-oxidation',statement:'Benzene làm mất màu KMnO4 dễ ở điều kiện thí nghiệm như toluene đun nóng.',correction:'Vòng benzene bền; toluene bị oxi hóa ở mạch nhánh khi đun nóng còn benzene không cho hiện tượng tương tự.',severity:'critical',remediationOutcomeIds:['chem11-hc-alkylbenzene-oxidation']}
  ,{id:'chem11-mis-toluene-ring-oxidized',outcomeId:'chem11-hc-alkylbenzene-oxidation',statement:'KMnO4 đun nóng phá vòng benzene của toluene trước.',correction:'Trong phạm vi bài học, nhóm CH3 bên vòng bị oxi hóa thành nhóm carboxyl/benzoate tùy môi trường.',severity:'critical',remediationOutcomeIds:['chem11-hc-alkylbenzene-oxidation']}
  ,{id:'chem11-mis-arene-direct-smell',outcomeId:'chem11-hc-arene-experiments',statement:'Có thể nhận biết benzene bằng cách ngửi trực tiếp.',correction:'Không ngửi trực tiếp arene; phải làm trong tủ hút và dùng kĩ thuật quan sát an toàn.',severity:'critical',remediationOutcomeIds:['chem11-hc-arene-experiments']}
  ,{id:'chem11-mis-nitration-open-flame',outcomeId:'chem11-hc-arene-experiments',statement:'Có thể đun hỗn hợp nitro hóa benzene bằng ngọn lửa trần.',correction:'Arene dễ cháy và hỗn hợp acid nguy hiểm; dùng điều kiện gia nhiệt kiểm soát theo quy trình, trong tủ hút.',severity:'critical',remediationOutcomeIds:['chem11-hc-arene-experiments']}
  ,{id:'chem11-mis-arene-only-coal',outcomeId:'chem11-hc-arene-industrial-preparation',statement:'Arene công nghiệp chỉ lấy từ nhựa than đá.',correction:'Arene còn có trong dầu mỏ và được tạo qua reforming nguồn hydrocarbon thiên nhiên.',severity:'normal',remediationOutcomeIds:['chem11-hc-arene-industrial-preparation']}
  ,{id:'chem11-mis-reforming-breaks-carbon',outcomeId:'chem11-hc-arene-industrial-preparation',statement:'Reforming tạo arene luôn làm giảm số carbon như cracking.',correction:'Reforming có thể vòng hóa/dehydrogen hóa mà giữ số carbon của khung.',severity:'critical',remediationOutcomeIds:['chem11-hc-arene-industrial-preparation']}
  ,{id:'chem11-mis-arene-safe-because-organic',outcomeId:'chem11-hc-arene-applications-safety',statement:'Arene là chất hữu cơ nên tự nhiên an toàn với sức khỏe.',correction:'Nhiều arene độc; mức nguy hại phụ thuộc chất, liều, đường và thời gian phơi nhiễm.',severity:'critical',remediationOutcomeIds:['chem11-hc-arene-applications-safety']}
  ,{id:'chem11-mis-benzene-household-solvent',outcomeId:'chem11-hc-arene-applications-safety',statement:'Có thể dùng benzene làm dung môi vệ sinh trong phòng kín.',correction:'Không dùng benzene tùy tiện; phải thay thế chất ít độc hơn và kiểm soát hơi, thông gió, PPE, chất thải.',severity:'critical',remediationOutcomeIds:['chem11-hc-arene-applications-safety']}
];
