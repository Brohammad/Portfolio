/**
 * Engineering metrics pinned to repository evidence.
 * Regenerate VoxForge figures from docs/project-metrics.md in the VoxForge repo.
 */

export const voxForgeMetrics = {
  source: "https://github.com/Brohammad/VoxForge/blob/main/docs/project-metrics.md",
  asOf: "2026-08-30",
  testsCollected: 426,
  testsPassedNonBrowser: 407,
  browserTestsCollected: 9,
  coveragePercent: 76.4,
  adrs: 7,
  display: [
    "407 non-browser tests passed (426 collected)",
    "76.40% coverage on src/voxforge (non-browser suite)",
    "v1.0.0-rc.1 · self-hostable",
  ],
} as const;

export const bugSathiMetrics = {
  source: "https://github.com/Brohammad/BugSathi",
  verifiedLocally: "2026-11-07",
  goTests: 116,
  adrs: 35,
  display: ["116 Go tests under -race", "35 ADRs in docs/adr", "8-topic Kafka pipeline"],
} as const;

export const signalMineMetrics = {
  source: "https://github.com/Brohammad/PainMiningEngine",
  verifiedLocally: "2026-11-07",
  pytestCollected: 125,
  jsonSchemas: 4,
  display: [
    "125 pytest tests collected",
    "4 canonical JSON schemas in schemas/",
    "Golden-dataset extraction evaluation",
    "OpenTelemetry + Prometheus on FastAPI",
  ],
} as const;

export const paintCrmMetrics = {
  source: "https://github.com/Brohammad/PaintCRM",
  liveDemo: "https://paintcrm.brohammad.tech",
  display: ["Live demo at paintcrm.brohammad.tech", "Playwright E2E in CI", "63 catalog shades"],
} as const;
