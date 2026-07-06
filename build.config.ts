/**
 * build.config.ts — BUILD 011 · Inventory Control & Alerts
 * ─────────────────────────────────────────────────────────────
 * Repo: ias-build-011-inventory-ops
 * URL:  inventory-ops.elwoodberry.com
 * Sector: Supply Chain, Logistics & Construction
 *
 * THE ONLY FILE EDITED FOR THIS BUILD.
 *
 * Governance (Article IX): no fabricated data. Every unknown
 * value stays as an explicit "TODO:" string — the page renders
 * TODO values in a visible warning style so they cannot ship
 * silently.
 * ─────────────────────────────────────────────────────────────
 */

import type { BuildConfig } from "./lib/types";

export const buildConfig: BuildConfig = {
  // ── Identity ─────────────────────────────────────────────
  buildNumber: "011",
  name: "Inventory Control & Alerts",
  sector: "Supply Chain, Logistics & Construction",

  // Verbatim from projects.csv (primary_description) —
  // site + CSV + repo never drift.
  tagline:
    "Connects warehouse databases with supply monitors to auto-trigger procurement workflows the moment raw materials hit minimum stock.",

  // ── Status (honest, always) ──────────────────────────────
  // Upgrade path: "planned" → "preview" → "prototype" → "live"
  // as the deep-build ships. One word, push to main, auto-deploys.
  status: "planned",

  // ── What it does ─────────────────────────────────────────
  // One string per paragraph — the page renders each as its
  // own <p>. Problem / pipeline / traceability.
  whatItDoes: [
    "Stockouts get discovered when a crew reaches for material that isn't there — procurement finds out last.",
    "This system monitors warehouse stock levels via database polling and fires n8n procurement sub-workflows the moment raw materials cross minimum threshold.",
    "Every restocking action is logged for audit review — deterministic rules, no guesswork.",
  ],

  // ── Stack ────────────────────────────────────────────────
  stack: ["n8n", "Next.js", "Vercel"],

  // ── Architecture ─────────────────────────────────────────
  architecture: {
    // Real diagrams only. Stays null until one is drawn —
    // the page renders the system-map table alone.
    diagramSrc: null,
    diagramAlt: "TODO: describe the diagram for screen readers",

    layers: [
      {
        layer: "Presentation",
        technology: "Next.js on Vercel",
        responsibility:
          "Build page, stock level view, threshold event and payload rendering",
      },
      {
        layer: "Orchestration",
        // Demos run on n8n Cloud. The identical workflows deploy
        // self-hosted or in a client's VPC for regulated
        // production — the /workflows export is the portable
        // artifact. Never state "self-hosted" as current fact.
        technology: "n8n (cloud-hosted)",
        responsibility:
          "Warehouse database polling, threshold evaluation, procurement sub-workflow dispatch",
      },
      {
        layer: "Data",
        // Storage + queue selection pending deep-build.
        // Stated uncertainty beats invented detail.
        technology: "TODO: warehouse database + supplier connector set pending deep-build",
        responsibility:
          "TODO: stock levels, threshold rules, procurement orders, restock audit log",
      },
      {
        layer: "AI",
        technology: "None — deterministic pipeline",
        responsibility:
          "Deliberately no LLM in the loop — threshold rules are deterministic and audit-friendly",
      },
    ],

    // One string per step — numbered on render because order
    // carries meaning: this is the sequence a record travels.
    flow: [
      "Poll cycle reads warehouse stock levels",
      "each material checked against minimum threshold",
      "threshold crossing fires procurement sub-workflow",
      "purchase request generated and dispatched",
      "restocking action logged for audit review",
    ],
  },

  // ── Sample payload ───────────────────────────────────────
  // Real production schema, mock values, labeled as mock.
  payload: {
    caption: "// mock data — representative of production schema",
    input: {
      event: "inventory.threshold.crossed",
      submitted_at: "2026-07-05T15:23:00Z",
      source: "inventory-ops.elwoodberry.com",
      fields: {
        sku: "MOCK-RM-2205", on_hand: 140, min_threshold: 200, warehouse: "kzo-01"
      },
    },
    output: {
      status: "reorder_triggered",
      confidence: null,
      routed_to: "workflow:procurement-po",
      audit_id: "ias-demo-011-0001",
    },
  },

  // ── Live demo slot ───────────────────────────────────────
  // Renders only when a real demo exists. Demo Mode (cached
  // representative responses) is the default for public
  // traffic — protects demo reliability and n8n Cloud
  // execution quota.
  demo: {
    embedUrl: null,
    videoUrl: null,
    note: "Demo Mode serves cached representative responses to public traffic; live mode is enabled per session.",
  },

  // ── Links ────────────────────────────────────────────────
  links: {
    github: "https://github.com/elwoodberry3/ias-build-011-inventory-ops",
    // Decision pending: master CSV stores the build's own deploy
    // URL here; the page needs a route BACK to the portfolio
    // index. Root used until the portfolio index URL is final.
    portfolio: "https://elwoodberry.com", // TODO: confirm portfolio index URL
    // TODO: confirm /contact is the persona-routed booking page,
    // not a generic contact form, before deep-build ships.
    booking: "https://elwoodberry.com/contact",
  },
};
