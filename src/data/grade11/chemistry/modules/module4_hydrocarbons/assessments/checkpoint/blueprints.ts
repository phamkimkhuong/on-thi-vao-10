import type { AssessmentBlueprint } from '@/types';

export const m4CheckpointBlueprints: AssessmentBlueprint[] = [
  {
    "id": "chem11-blueprint-m4-foundation-v1",
    "subjectId": "chemistry",
    "title": "Ma trận Chuyên đề Chương 4 – Nền tảng",
    "kind": "module_checkpoint",
    "focus": "mixed",
    "difficultyBand": "foundation",
    "targetScoreRange": {
      "min": 5,
      "max": 7.9
    },
    "semester": 2,
    "seriesOrder": 1,
    "duration": 25,
    "totalPoints": 10,
    "scopeTopicIds": [
      "chem11-t4"
    ],
    "outcomeIds": [
      "chem11-hc-alkane-concept-formula",
      "chem11-hc-alkane-naming-branched",
      "chem11-hc-alkane-naming-straight",
      "chem11-hc-alkane-physical-properties",
      "chem11-hc-alkane-combustion",
      "chem11-hc-unsat-concept-formula",
      "chem11-hc-unsat-addition-basic",
      "chem11-hc-unsat-polymerization",
      "chem11-hc-arene-xylene-positions",
      "chem11-hc-alkane-isomer-formula",
      "chem11-hc-alkane-substitution",
      "chem11-hc-unsat-geometric-isomer",
      "chem11-hc-unsat-preparation-experiment",
      "chem11-hc-arene-common-formulas-names"
    ],
    "competencyWeights": {
      "chemical_cognition": 0.7,
      "chemical_inquiry": 0.1,
      "chemical_application": 0.2
    },
    "difficultyWeights": {
      "easy": 0.4166666666666667,
      "medium": 0.4166666666666667,
      "hard": 0.16666666666666666
    },
    "sections": [
      {
        "id": "mcq",
        "title": "Trắc nghiệm nhiều lựa chọn",
        "itemCount": 8,
        "points": 4,
        "responseType": "multiple_choice"
      },
      {
        "id": "short",
        "title": "Trả lời ngắn",
        "itemCount": 4,
        "points": 6,
        "responseType": "short_answer"
      }
    ]
  },
  {
    "id": "chem11-blueprint-m4-score8-v1",
    "subjectId": "chemistry",
    "title": "Ma trận Chuyên đề Chương 4 – Mục tiêu 8+",
    "kind": "module_checkpoint",
    "focus": "mixed",
    "difficultyBand": "score8",
    "targetScoreRange": {
      "min": 8,
      "max": 8.9
    },
    "semester": 2,
    "seriesOrder": 2,
    "duration": 30,
    "totalPoints": 10,
    "scopeTopicIds": [
      "chem11-t4"
    ],
    "outcomeIds": [
      "chem11-hc-alkane-naming-branched",
      "chem11-hc-alkane-cracking-reforming",
      "chem11-hc-unsat-geometric-isomer",
      "chem11-hc-unsat-markovnikov",
      "chem11-hc-terminal-alkyne-silver",
      "chem11-hc-arene-substitution-benzene",
      "chem11-hc-alkylbenzene-oxidation",
      "chem11-hc-arene-applications-safety",
      "chem11-hc-alkane-combustion",
      "chem11-hc-unsat-addition-basic",
      "chem11-hc-arene-combustion",
      "chem11-hc-alkane-substitution",
      "chem11-hc-unsat-structure-shape",
      "chem11-hc-unsat-polymerization",
      "chem11-hc-arene-substitution-toluene",
      "chem11-hc-benzene-addition",
      "chem11-hc-arene-experiments"
    ],
    "competencyWeights": {
      "chemical_cognition": 0.55,
      "chemical_inquiry": 0.15,
      "chemical_application": 0.3
    },
    "difficultyWeights": {
      "easy": 0.08333333333333333,
      "medium": 0.5,
      "hard": 0.4166666666666667
    },
    "sections": [
      {
        "id": "mcq",
        "title": "Trắc nghiệm nhiều lựa chọn",
        "itemCount": 8,
        "points": 4,
        "responseType": "multiple_choice"
      },
      {
        "id": "short",
        "title": "Trả lời ngắn",
        "itemCount": 4,
        "points": 6,
        "responseType": "short_answer"
      }
    ]
  },
  {
    "id": "chem11-blueprint-m4-score9-v1",
    "subjectId": "chemistry",
    "title": "Ma trận Chuyên đề Chương 4 – Mục tiêu 9+",
    "kind": "module_checkpoint",
    "focus": "mixed",
    "difficultyBand": "score9",
    "targetScoreRange": {
      "min": 9,
      "max": 10
    },
    "semester": 2,
    "seriesOrder": 3,
    "duration": 35,
    "totalPoints": 10,
    "scopeTopicIds": [
      "chem11-t4"
    ],
    "outcomeIds": [
      "chem11-hc-alkane-combustion",
      "chem11-hc-alkane-substitution",
      "chem11-hc-unsat-addition-basic",
      "chem11-hc-unsat-markovnikov",
      "chem11-hc-terminal-alkyne-silver",
      "chem11-hc-arene-substitution-benzene",
      "chem11-hc-alkylbenzene-oxidation",
      "chem11-hc-arene-experiments",
      "chem11-hc-arene-applications-safety",
      "chem11-hc-arene-combustion",
      "chem11-hc-unsat-geometric-isomer",
      "chem11-hc-unsat-oxidation",
      "chem11-hc-arene-substitution-toluene",
      "chem11-hc-arene-industrial-preparation"
    ],
    "competencyWeights": {
      "chemical_cognition": 0.45,
      "chemical_inquiry": 0.2,
      "chemical_application": 0.35
    },
    "difficultyWeights": {
      "easy": 0.08333333333333333,
      "medium": 0.3333333333333333,
      "hard": 0.5833333333333334
    },
    "sections": [
      {
        "id": "mcq",
        "title": "Trắc nghiệm nhiều lựa chọn",
        "itemCount": 8,
        "points": 4,
        "responseType": "multiple_choice"
      },
      {
        "id": "short",
        "title": "Trả lời ngắn",
        "itemCount": 4,
        "points": 6,
        "responseType": "short_answer"
      }
    ]
  }
];
