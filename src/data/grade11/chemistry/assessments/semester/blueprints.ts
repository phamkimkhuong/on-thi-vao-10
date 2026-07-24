import type { AssessmentBlueprint } from '@/types';

export const g11ChemistrySemesterBlueprints: AssessmentBlueprint[] = [
  {
    "id": "chem11-blueprint-midterm1-v2",
    "subjectId": "chemistry",
    "title": "Ma trận Giữa học kỳ I – Hóa học 11",
    "kind": "midterm",
    "focus": "mixed",
    "difficultyBand": "standard",
    "semester": 1,
    "seriesOrder": 1,
    "duration": 45,
    "totalPoints": 10,
    "scopeTopicIds": [
      "chem11-t1",
      "chem11-t2"
    ],
    "topicWeights": {
      "chem11-t1": 0.8,
      "chem11-t2": 0.2
    },
    "outcomeIds": [
      "chem11-eq-reversible",
      "chem11-eq-dynamic",
      "chem11-eq-kc-expression",
      "chem11-eq-shift-concentration",
      "chem11-eq-shift-pressure",
      "chem11-eq-shift-temperature",
      "chem11-eq-rate-vs-position",
      "chem11-aq-electrolyte",
      "chem11-aq-bronsted-role",
      "chem11-aq-conjugate-pair",
      "chem11-aq-ph-conversion",
      "chem11-ns-n2-bond-inertness",
      "chem11-ns-nh3-structure",
      "chem11-ns-nh3-base",
      "chem11-ns-ammonium-alkali",
      "chem11-eq-kc-calculation",
      "chem11-aq-ph-simple-solution"
    ],
    "competencyWeights": {
      "chemical_cognition": 1,
      "chemical_inquiry": 0,
      "chemical_application": 0
    },
    "difficultyWeights": {
      "easy": 0.3125,
      "medium": 0.625,
      "hard": 0.0625
    },
    "sections": [
      {
        "id": "mcq",
        "title": "Trắc nghiệm nhiều lựa chọn",
        "itemCount": 14,
        "points": 7,
        "responseType": "multiple_choice"
      },
      {
        "id": "short",
        "title": "Trả lời ngắn",
        "itemCount": 2,
        "points": 3,
        "responseType": "short_answer"
      }
    ]
  },
  {
    "id": "chem11-blueprint-final1-v2",
    "subjectId": "chemistry",
    "title": "Ma trận Cuối học kỳ I – Hóa học 11",
    "kind": "final",
    "focus": "mixed",
    "difficultyBand": "standard",
    "semester": 1,
    "seriesOrder": 2,
    "duration": 60,
    "totalPoints": 10,
    "scopeTopicIds": [
      "chem11-t1",
      "chem11-t2",
      "chem11-t3"
    ],
    "topicWeights": {
      "chem11-t1": 0.35,
      "chem11-t2": 0.45,
      "chem11-t3": 0.2
    },
    "outcomeIds": [
      "chem11-eq-shift-concentration",
      "chem11-eq-shift-pressure",
      "chem11-aq-ph-conversion",
      "chem11-aq-titration-principle",
      "chem11-ns-ammonium-identification",
      "chem11-ns-nox-acid-rain",
      "chem11-ns-hno3-oxidizing",
      "chem11-ns-so2-redox",
      "chem11-ns-h2so4-dilution-first-aid",
      "chem11-ns-sulfate-identification",
      "chem11-org-organic-exceptions",
      "chem11-org-functional-group",
      "chem11-org-extraction-principle",
      "chem11-org-isomer-concept",
      "chem11-aq-titration-calculation"
    ],
    "competencyWeights": {
      "chemical_cognition": 0.85,
      "chemical_inquiry": 0,
      "chemical_application": 0.15
    },
    "difficultyWeights": {
      "easy": 0.25,
      "medium": 0.625,
      "hard": 0.125
    },
    "sections": [
      {
        "id": "mcq",
        "title": "Trắc nghiệm nhiều lựa chọn",
        "itemCount": 14,
        "points": 7,
        "responseType": "multiple_choice"
      },
      {
        "id": "short",
        "title": "Trả lời ngắn",
        "itemCount": 2,
        "points": 3,
        "responseType": "short_answer"
      }
    ]
  },
  {
    "id": "chem11-blueprint-midterm2-v2",
    "subjectId": "chemistry",
    "title": "Ma trận Giữa học kỳ II – Hóa học 11",
    "kind": "midterm",
    "focus": "mixed",
    "difficultyBand": "standard",
    "semester": 2,
    "seriesOrder": 3,
    "duration": 45,
    "totalPoints": 10,
    "scopeTopicIds": [
      "chem11-t4",
      "chem11-t5"
    ],
    "topicWeights": {
      "chem11-t4": 0.6,
      "chem11-t5": 0.4
    },
    "outcomeIds": [
      "chem11-hc-alkane-concept-formula",
      "chem11-hc-alkane-naming-branched",
      "chem11-hc-alkane-isomer-formula",
      "chem11-hc-alkane-substitution",
      "chem11-hc-alkane-cracking-reforming",
      "chem11-hc-unsat-geometric-isomer",
      "chem11-hc-unsat-addition-basic",
      "chem11-hc-unsat-markovnikov",
      "chem11-hc-arene-substitution-benzene",
      "chem11-hal-concept-classification",
      "chem11-hal-substitution-hydroxide",
      "chem11-hal-elimination-hx",
      "chem11-alc-concept-formula",
      "chem11-alc-reaction-sodium",
      "chem11-hc-alkane-combustion"
    ],
    "competencyWeights": {
      "chemical_cognition": 0.85,
      "chemical_inquiry": 0,
      "chemical_application": 0.15
    },
    "difficultyWeights": {
      "easy": 0.3125,
      "medium": 0.5625,
      "hard": 0.125
    },
    "sections": [
      {
        "id": "mcq",
        "title": "Trắc nghiệm nhiều lựa chọn",
        "itemCount": 14,
        "points": 7,
        "responseType": "multiple_choice"
      },
      {
        "id": "short",
        "title": "Trả lời ngắn",
        "itemCount": 2,
        "points": 3,
        "responseType": "short_answer"
      }
    ]
  },
  {
    "id": "chem11-blueprint-final2-v2",
    "subjectId": "chemistry",
    "title": "Ma trận Cuối học kỳ II – Hóa học 11",
    "kind": "final",
    "focus": "mixed",
    "difficultyBand": "standard",
    "semester": 2,
    "seriesOrder": 4,
    "duration": 60,
    "totalPoints": 10,
    "scopeTopicIds": [
      "chem11-t4",
      "chem11-t5",
      "chem11-t6"
    ],
    "topicWeights": {
      "chem11-t4": 0.2,
      "chem11-t5": 0.4,
      "chem11-t6": 0.4
    },
    "outcomeIds": [
      "chem11-hc-unsat-addition-basic",
      "chem11-hc-arene-substitution-benzene",
      "chem11-hc-alkane-combustion",
      "chem11-hc-unsat-geometric-isomer",
      "chem11-hal-zaitsev-rule",
      "chem11-alc-oxidation-cuo",
      "chem11-phe-acidity",
      "chem11-phe-bromination",
      "chem11-alc-dehydration-alkene",
      "chem11-car-aldehyde-concept",
      "chem11-car-ketone-concept",
      "chem11-car-tollens-oxidation",
      "chem11-cax-concept",
      "chem11-cax-carbonate-reaction",
      "chem11-cax-esterification-equilibrium-yield",
      "chem11-alc-reaction-sodium"
    ],
    "competencyWeights": {
      "chemical_cognition": 0.7,
      "chemical_inquiry": 0,
      "chemical_application": 0.3
    },
    "difficultyWeights": {
      "easy": 0.25,
      "medium": 0.5625,
      "hard": 0.1875
    },
    "sections": [
      {
        "id": "mcq",
        "title": "Trắc nghiệm nhiều lựa chọn",
        "itemCount": 14,
        "points": 7,
        "responseType": "multiple_choice"
      },
      {
        "id": "short",
        "title": "Trả lời ngắn",
        "itemCount": 2,
        "points": 3,
        "responseType": "short_answer"
      }
    ]
  }
];
