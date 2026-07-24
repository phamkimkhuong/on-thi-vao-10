import type { AssessmentBlueprint } from '@/types';

export const m5CheckpointBlueprints: AssessmentBlueprint[] = [
  {
    "id": "chem11-blueprint-m5-foundation-v1",
    "subjectId": "chemistry",
    "title": "Ma trận Chuyên đề Chương 5 – Nền tảng",
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
      "chem11-t5"
    ],
    "outcomeIds": [
      "chem11-hal-concept-classification",
      "chem11-hal-substitution-hydroxide",
      "chem11-hal-elimination-hx",
      "chem11-alc-concept-formula",
      "chem11-alc-hydrogen-bond",
      "chem11-alc-reaction-sodium",
      "chem11-phe-concept-classification",
      "chem11-phe-naoh-carbonate-reactions",
      "chem11-alc-combustion",
      "chem11-phe-bromination",
      "chem11-hal-nomenclature",
      "chem11-hal-physical-properties",
      "chem11-hal-zaitsev-rule",
      "chem11-alc-degree",
      "chem11-alc-physical-properties",
      "chem11-alc-dehydration-alkene",
      "chem11-alc-oxidation-cuo"
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
    "id": "chem11-blueprint-m5-score8-v1",
    "subjectId": "chemistry",
    "title": "Ma trận Chuyên đề Chương 5 – Mục tiêu 8+",
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
      "chem11-t5"
    ],
    "outcomeIds": [
      "chem11-hal-reaction-pathway-selection",
      "chem11-hal-zaitsev-rule",
      "chem11-alc-nomenclature",
      "chem11-alc-polyol-cuoh2",
      "chem11-alc-dehydration-pathway",
      "chem11-alc-oxidation-cuo",
      "chem11-phe-acidity",
      "chem11-phe-preparation",
      "chem11-alc-reaction-sodium",
      "chem11-alc-ethanol-preparation",
      "chem11-phe-bromination",
      "chem11-hal-hydrolysis-experiment",
      "chem11-alc-degree",
      "chem11-alc-dehydration-alkene",
      "chem11-phe-naoh-carbonate-reactions",
      "chem11-phe-applications-responsibility"
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
    "id": "chem11-blueprint-m5-score9-v1",
    "subjectId": "chemistry",
    "title": "Ma trận Chuyên đề Chương 5 – Mục tiêu 9+",
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
      "chem11-t5"
    ],
    "outcomeIds": [
      "chem11-hal-reaction-pathway-selection",
      "chem11-hal-zaitsev-rule",
      "chem11-alc-dehydration-pathway",
      "chem11-alc-oxidation-cuo",
      "chem11-phe-acidity",
      "chem11-alc-polyol-cuoh2",
      "chem11-phe-bromination",
      "chem11-phe-nitration",
      "chem11-alc-polyol-cuoh2",
      "chem11-phe-bromination",
      "chem11-alc-reaction-sodium",
      "chem11-alc-combustion",
      "chem11-alc-ethanol-preparation",
      "chem11-alc-dehydration-ether"
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
