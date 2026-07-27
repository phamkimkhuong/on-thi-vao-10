const modules = import.meta.glob('./modules/module*/index.ts', { eager: true });

export const g11MathOutcomes = Object.values(modules).flatMap(
  (mod: any) => mod.outcomes || []
);

export const g11MathMisconceptions = Object.values(modules).flatMap(
  (mod: any) => mod.misconceptions || []
);
