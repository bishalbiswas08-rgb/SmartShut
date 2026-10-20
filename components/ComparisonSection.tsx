"use client";

import React from "react";
import {
  Check,
  Minus,
  Sparkles,
  Info,
  Layers,
} from "lucide-react";

interface ComparisonRow {
  dimension: string;
  traditional: string;
  conventional: string;
  smartshut: string;
  highlight?: boolean;
}

const comparisonRows: ComparisonRow[] = [
  {
    dimension: "ACCESS CONTROL",
    traditional: "Physical metal key only",
    conventional: "Keypad PIN / Bluetooth app",
    smartshut: "Biometric Fingerprint + Concealed physical key",
  },
  {
    dimension: "ROOM INTELLIGENCE",
    traditional: "None (zero awareness)",
    conventional: "Door open/closed contact only",
    smartshut: "Camera optical activity + verified headcount estimation",
    highlight: true,
  },
  {
    dimension: "ENERGY MANAGEMENT",
    traditional: "Manual switch toggle",
    conventional: "None (unlinked to appliances)",
    smartshut: "Automated power cutoff (Empty + Verified + Locked)",
    highlight: true,
  },
  {
    dimension: "SCHEDULE AUTOMATION",
    traditional: "None (manual lock/unlock)",
    conventional: "Basic auto-lock timer (e.g. 30s)",
    smartshut: "Time-of-day facility schedule + early biometric override",
  },
  {
    dimension: "PHONE COMPANION",
    traditional: "None",
    conventional: "Lock/unlock status toggle",
    smartshut: "Live occupancy radar, relay status & schedule config",
  },
  {
    dimension: "ACTIVITY AUDIT TRAIL",
    traditional: "None",
    conventional: "Basic unlock timestamp list",
    smartshut: "Tamper-evident logs, motion events & circuit states",
  },
];

export default function ComparisonSection() {
  return (
    <section className="py-16 sm:py-24 relative overflow-hidden bg-[#06030e]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] lg:w-[700px] max-w-full h-[500px] bg-brand-purple/15 blur-[140px] sm:blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/70 border border-purple-500/30 backdrop-blur-md mb-4">
            <Layers className="w-3.5 h-3.5 text-brand-green" />
            <span className="text-[11px] sm:text-xs font-mono font-medium text-purple-200 uppercase tracking-wider">
              CATEGORY DISTINCTION
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            MORE THAN JUST
            <br />
            <span className="text-gradient-purple">A SMART LOCK.</span>
          </h2>

          <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-slate-300">
            Conventional smart locks offer advanced wireless locking and digital credentials. SmartShut&apos;s proposed distinction is the unified coordination of authorized access, room occupancy verification, and connected-device energy management.
          </p>

          <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950/50 border border-purple-500/20 text-[10px] sm:text-xs font-mono text-purple-300">
            <Info className="w-3.5 h-3.5 text-brand-green flex-shrink-0" />
            <span>Illustrative category comparison — not a verified competitor audit.</span>
          </div>
        </div>

        {/* Mobile Swipe Hint */}
        <div className="md:hidden flex items-center justify-end gap-1.5 text-[10px] font-mono text-purple-300/80 mb-2 px-1">
          <span>Scroll table horizontally →</span>
        </div>

        {/* Comparison Table Grid */}
        <div className="rounded-2xl sm:rounded-3xl p-3 sm:p-6 lg:p-8 bg-gradient-to-b from-[#140a2a]/90 via-[#0d051c]/95 to-[#06020f] border border-purple-500/30 shadow-2xl backdrop-blur-xl overflow-hidden w-full">
          <div className="overflow-x-auto w-full">
            <table className="w-full text-left border-collapse min-w-[620px]">
              <thead>
                <tr className="border-b border-purple-500/20 text-xs font-mono">
                  <th className="py-3 sm:py-4 px-3 sm:px-4 text-purple-300 uppercase tracking-wider w-1/4 text-[11px] sm:text-xs">
                    CAPABILITY DIMENSION
                  </th>
                  <th className="py-3 sm:py-4 px-3 sm:px-4 text-slate-400 uppercase tracking-wider w-1/4 text-[11px] sm:text-xs">
                    TRADITIONAL DOOR
                  </th>
                  <th className="py-3 sm:py-4 px-3 sm:px-4 text-slate-300 uppercase tracking-wider w-1/4 text-[11px] sm:text-xs">
                    CONVENTIONAL SMART LOCK
                  </th>
                  <th className="py-3 sm:py-4 px-3 sm:px-4 text-brand-green uppercase tracking-wider w-1/4 bg-purple-950/40 rounded-t-xl border-t border-x border-brand-green/30 text-[11px] sm:text-xs">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-brand-green" />
                      <span>SMARTSHUT CONCEPT</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-purple-500/15 text-[11px] sm:text-xs font-mono">
                {comparisonRows.map((row) => (
                  <tr
                    key={row.dimension}
                    className={`transition-colors ${
                      row.highlight ? "bg-purple-950/20" : "hover:bg-white/[0.02]"
                    }`}
                  >
                    <td className="py-3 sm:py-4 px-3 sm:px-4 font-bold text-white tracking-wide">
                      {row.dimension}
                    </td>

                    <td className="py-3 sm:py-4 px-3 sm:px-4 text-slate-400">
                      <div className="flex items-start gap-1.5 sm:gap-2">
                        <Minus className="w-3.5 h-3.5 text-slate-500 flex-shrink-0 mt-0.5" />
                        <span>{row.traditional}</span>
                      </div>
                    </td>

                    <td className="py-3 sm:py-4 px-3 sm:px-4 text-slate-300">
                      <div className="flex items-start gap-1.5 sm:gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 flex-shrink-0" />
                        <span>{row.conventional}</span>
                      </div>
                    </td>

                    <td className="py-3 sm:py-4 px-3 sm:px-4 text-white font-medium bg-purple-950/40 border-x border-brand-green/20">
                      <div className="flex items-start gap-1.5 sm:gap-2 text-brand-green font-semibold">
                        <Check className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
                        <span>{row.smartshut}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer Disclaimer */}
          <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-purple-500/15 flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] sm:text-xs font-mono text-slate-400 text-center sm:text-left">
            <div className="flex items-center gap-1.5">
              <Info className="w-3.5 h-3.5 text-purple-400 flex-shrink-0" />
              <span>Illustrative category comparison — not a verified competitor audit.</span>
            </div>
            <span className="text-brand-green font-semibold flex-shrink-0">Integrated Concept Architecture</span>
          </div>
        </div>
      </div>
    </section>
  );
}
