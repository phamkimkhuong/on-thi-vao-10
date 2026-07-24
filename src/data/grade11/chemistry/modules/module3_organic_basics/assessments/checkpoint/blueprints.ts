import type { AssessmentBlueprint } from '@/types';

export const m3CheckpointBlueprints: AssessmentBlueprint[] = [
  {
    id: "chem11-blueprint-m3-foundation-v1",
    subjectId: "chemistry",
    title: "Ma trận Chuyên đề Chương 3 – Nền tảng",
    kind: "module_checkpoint",
    focus: "mixed",
    difficultyBand: "foundation",
    targetScoreRange: {
      min: 5,
      max: 7.9
    },
    semester: 1,
    seriesOrder: 1,
    duration: 25,
    totalPoints: 10,
    scopeTopicIds: [
      "chem11-t3"
    ],
    outcomeIds: [
      "chem11-org-organic-concept",
      "chem11-org-organic-exceptions",
      "chem11-org-classify-hydrocarbon",
      "chem11-org-classify-derivative",
      "chem11-org-functional-group",
      "chem11-org-distillation-principle",
      "chem11-org-extraction-principle",
      "chem11-org-crystallization-principle",
      "chem11-org-empirical-formula-meaning",
      "chem11-org-molecular-formula-meaning",
      "chem11-org-homolog-concept",
      "chem11-org-isomer-concept",
      "chem11-org-element-percent-from-formula",
      "chem11-org-empirical-from-percent",
      "chem11-org-formula-multiple-relation",
      "chem11-org-molecular-formula-determination",
      "chem11-org-simple-isomer-enumeration"
    ],
    competencyWeights: {
      chemical_cognition: 0.7,
      chemical_inquiry: 0.1,
      chemical_application: 0.2
    },
    difficultyWeights: {
      easy: 0.4166666666666667,
      medium: 0.4166666666666667,
      hard: 0.16666666666666666
    },
    sections: [
      {
        id: "mcq",
        title: "Trắc nghiệm nhiều lựa chọn",
        itemCount: 8,
        points: 4,
        responseType: "multiple_choice"
      },
      {
        id: "short",
        title: "Trả lời ngắn",
        itemCount: 4,
        points: 6,
        responseType: "short_answer"
      }
    ]
  },
  {
    id: "chem11-blueprint-m3-score8-v1",
    subjectId: "chemistry",
    title: "Ma trận Chuyên đề Chương 3 – Mục tiêu 8+",
    kind: "module_checkpoint",
    focus: "mixed",
    difficultyBand: "score8",
    targetScoreRange: {
      min: 8,
      max: 8.9
    },
    semester: 1,
    seriesOrder: 2,
    duration: 30,
    totalPoints: 10,
    scopeTopicIds: [
      "chem11-t3"
    ],
    outcomeIds: [
      "chem11-org-separation-method-selection",
      "chem11-org-distillation-apparatus",
      "chem11-org-distillation-data",
      "chem11-org-extraction-efficiency-safety",
      "chem11-org-crystallization-procedure",
      "chem11-org-functional-group",
      "chem11-org-structure-property-relation",
      "chem11-org-homolog-identification",
      "chem11-org-isomer-identification",
      "chem11-org-element-percent-from-formula",
      "chem11-org-empirical-from-mass",
      "chem11-org-combustion-analysis-ch",
      "chem11-org-molecular-formula-determination"
    ],
    competencyWeights: {
      chemical_cognition: 0.55,
      chemical_inquiry: 0.15,
      chemical_application: 0.3
    },
    difficultyWeights: {
      easy: 0.08333333333333333,
      medium: 0.5,
      hard: 0.4166666666666667
    },
    sections: [
      {
        id: "mcq",
        title: "Trắc nghiệm nhiều lựa chọn",
        itemCount: 8,
        points: 4,
        responseType: "multiple_choice"
      },
      {
        id: "short",
        title: "Trả lời ngắn",
        itemCount: 4,
        points: 6,
        responseType: "short_answer"
      }
    ]
  },
  {
    id: "chem11-blueprint-m3-score9-v1",
    subjectId: "chemistry",
    title: "Ma trận Chuyên đề Chương 3 – Mục tiêu 9+",
    kind: "module_checkpoint",
    focus: "mixed",
    difficultyBand: "score9",
    targetScoreRange: {
      min: 9,
      max: 10
    },
    semester: 1,
    seriesOrder: 3,
    duration: 35,
    totalPoints: 10,
    scopeTopicIds: [
      "chem11-t3"
    ],
    outcomeIds: [
      "chem11-org-separation-method-selection",
      "chem11-org-distillation-data",
      "chem11-org-extraction-efficiency-safety",
      "chem11-org-formula-multiple-relation",
      "chem11-org-structural-formula-representations",
      "chem11-org-structure-property-relation",
      "chem11-org-homolog-identification",
      "chem11-org-simple-isomer-enumeration",
      "chem11-org-oxygen-by-difference",
      "chem11-org-molecular-formula-determination",
      "chem11-org-crystallization-procedure"
    ],
    competencyWeights: {
      chemical_cognition: 0.45,
      chemical_inquiry: 0.2,
      chemical_application: 0.35
    },
    difficultyWeights: {
      easy: 0.08333333333333333,
      medium: 0.3333333333333333,
      hard: 0.5833333333333334
    },
    sections: [
      {
        id: "mcq",
        title: "Trắc nghiệm nhiều lựa chọn",
        itemCount: 8,
        points: 4,
        responseType: "multiple_choice"
      },
      {
        id: "short",
        title: "Trả lời ngắn",
        itemCount: 4,
        points: 6,
        responseType: "short_answer"
      }
    ]
  }
];
