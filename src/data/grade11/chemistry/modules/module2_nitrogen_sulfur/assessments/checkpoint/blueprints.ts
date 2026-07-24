import type { AssessmentBlueprint } from '@/types';

export const m2CheckpointBlueprints: AssessmentBlueprint[] = [
  {
    id: "chem11-blueprint-m2-foundation-v1",
    subjectId: "chemistry",
    title: "Ma trận Chuyên đề Chương 2 – Nền tảng",
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
      "chem11-t2"
    ],
    outcomeIds: [
      "chem11-ns-n2-bond-inertness",
      "chem11-ns-nh3-structure",
      "chem11-ns-nh3-base",
      "chem11-ns-ammonium-identification",
      "chem11-ns-nox-acid-rain",
      "chem11-ns-hno3-acid",
      "chem11-ns-sulfur-oxidizing",
      "chem11-ns-sulfur-reducing",
      "chem11-ns-so2-acidic-oxide",
      "chem11-ns-h2so4-dilution-first-aid",
      "chem11-ns-n2-high-temperature-reactions",
      "chem11-ns-ammonium-alkali",
      "chem11-ns-h2so4-dilute-acid",
      "chem11-ns-sulfate-identification"
    ],
    competencyWeights: {
      chemical_cognition: 0.7,
      chemical_inquiry: 0.1,
      chemical_application: 0.2
    },
    difficultyWeights: {
      easy: 0.3333333333333333,
      medium: 0.5,
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
    id: "chem11-blueprint-m2-score8-v1",
    subjectId: "chemistry",
    title: "Ma trận Chuyên đề Chương 2 – Mục tiêu 8+",
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
      "chem11-t2"
    ],
    outcomeIds: [
      "chem11-ns-n2-high-temperature-reactions",
      "chem11-ns-haber-equilibrium",
      "chem11-ns-nh3-reducing",
      "chem11-ns-ammonium-thermal",
      "chem11-ns-hno3-oxidizing",
      "chem11-ns-eutrophication-effects",
      "chem11-ns-so2-redox",
      "chem11-ns-h2so4-concentrated-oxidizing",
      "chem11-ns-h2so4-dehydrating",
      "chem11-ns-so2-acidic-oxide",
      "chem11-ns-sulfate-identification"
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
    id: "chem11-blueprint-m2-score9-v1",
    subjectId: "chemistry",
    title: "Ma trận Chuyên đề Chương 2 – Mục tiêu 9+",
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
      "chem11-t2"
    ],
    outcomeIds: [
      "chem11-ns-haber-equilibrium",
      "chem11-ns-ammonium-identification",
      "chem11-ns-ammonium-thermal",
      "chem11-ns-nox-environment",
      "chem11-ns-hno3-oxidizing",
      "chem11-ns-eutrophication-data-mitigation",
      "chem11-ns-so2-redox",
      "chem11-ns-h2so4-contact-process",
      "chem11-ns-ammonium-applications-safety",
      "chem11-ns-sulfate-identification"
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
