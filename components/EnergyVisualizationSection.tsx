"use client";

import React, { useState } from "react";
import {
  TrendingDown,
  Lightbulb,
  Fan,
  Wind,
  ShieldCheck,
  Info,
} from "lucide-react";

export default function EnergyVisualizationSection() {
  const [selectedPreset, setSelectedPreset] = useState<"classroom" | "office" | "lab">("office");

  const presets = {
    office: {
      name: "Standard Private Office",
      lights: 120,
      fan: 80,
      ac: 1200,
      sentinel: 15,
      hoursEmpty: 14,
    },
    classroom: {
      name: "University Classroom",
      lights: 350,
      fan: 160,
      ac: 2400,
      sentinel: 18,
      hoursEmpty: 12,
    },
    lab: {
      name: "Computer Teaching Lab",
      lights: 400,
      fan: 200,
      ac: 3200,
      sentinel: 20,
      hoursEmpty: 14,
    },
  };

  const current = presets[selectedPreset];
  const ordinaryTotal = current.lights + current.fan + current.ac + current.sentinel;
  const smartTotal = current.sentinel;
  const reductionPercent = Math.round(((ordinaryTotal - smartTotal) / ordinaryTotal) * 100);

  return (
    <section className="py-16 sm:py-24 relative overflow-hidden bg-[#F7F8FA] dark:bg-[#06030f]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[500px] h-[280px] sm:h-[500px] max-w-[90vw] bg-emerald-400/15 dark:bg-brand-green/10 blur-[120px] sm:blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-brand-green/15 border border-emerald-300 dark:border-brand-green/30 backdrop-blur-md mb-4 shadow-sm">
            <TrendingDown className="w-3.5 h-3.5 text-emerald-600 dark:text-brand-green" />
            <span className="text-[11px] sm:text-xs font-mono font-bold text-emerald-800 dark:text-brand-green uppercase tracking-wider">
              EFFICIENCY ARCHITECTURE
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#111218] dark:text-white leading-tight">
            CONNECT EMPTY ROOMS
            <br />
            <span className="text-gradient-green">TO SMARTER POWER.</span>
          </h2>

          <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-[#4b5262] dark:text-slate-300">
            A conceptual comparison of electrical draw during unoccupied hours. SmartShut explores isolating eligible high-draw equipment while keeping security and safety systems active.
          </p>

          {/* Preset Selector */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {(["office", "classroom", "lab"] as const).map((key) => (
              <button
                key={key}
                onClick={() => setSelectedPreset(key)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-[11px] sm:text-xs font-mono border transition-all ${
                  selectedPreset === key
                    ? "bg-emerald-100 dark:bg-brand-green/20 border-emerald-400 dark:border-brand-green text-emerald-900 dark:text-brand-green font-bold shadow-sm dark:shadow-[0_0_15px_rgba(0,245,155,0.2)]"
                    : "bg-white dark:bg-[#110724] text-[#626775] dark:text-slate-400 border-[#CBD5E1] dark:border-purple-500/20 hover:text-[#111218] dark:hover:text-white shadow-sm"
                }`}
              >
                {presets[key].name} (Demo Model)
              </button>
            ))}
          </div>
        </div>

        {/* Main Conceptual Comparison Graphic */}
        <div className="rounded-2xl sm:rounded-3xl p-3.5 sm:p-6 lg:p-10 bg-white dark:bg-gradient-to-b dark:from-[#140a2b]/90 dark:via-[#0d051c]/95 dark:to-[#070210] border border-[#D9DCE5] dark:border-purple-500/30 shadow-xl dark:shadow-2xl backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
            {/* Left: Ordinary Room Energy Flow */}
            <div className="p-3.5 sm:p-6 rounded-2xl bg-[#FFF5F5] dark:bg-[#0d0515] border border-rose-300 dark:border-red-500/30 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-1.5 pb-2.5 sm:pb-3 border-b border-rose-200 dark:border-red-500/20 text-[10px] sm:text-xs font-mono">
                <span className="text-rose-700 dark:text-red-400 font-bold uppercase">ORDINARY ROOM (UNOCCUPIED)</span>
                <span className="text-rose-800 dark:text-red-400 bg-rose-100 dark:bg-red-500/10 px-2 py-0.5 rounded border border-rose-300 dark:border-red-500/20 font-semibold">
                  UNMANAGED DRAW
                </span>
              </div>

              {/* Energy Flow Visual Bar */}
              <div className="my-4 sm:my-6">
                <div className="flex justify-between text-[11px] sm:text-xs font-mono text-[#111218] dark:text-slate-300 mb-1.5 sm:mb-2 font-bold">
                  <span>ENERGY FLOW:</span>
                  <span className="text-rose-700 dark:text-red-400 font-bold">UNMANAGED FULL DRAW (DEMO)</span>
                </div>
                <div className="h-5 sm:h-6 w-full rounded-full bg-rose-100 dark:bg-red-950/60 border border-rose-300 dark:border-red-500/30 p-1 flex items-center shadow-inner">
                  <div className="h-full w-full rounded-full bg-gradient-to-r from-amber-500 to-rose-500 shadow-[0_0_15px_rgba(239,68,68,0.4)] animate-pulse" />
                </div>
              </div>

              {/* Appliance breakdown */}
              <div className="space-y-2 font-mono text-xs">
                <div className="flex items-center justify-between p-2 rounded bg-white dark:bg-black/40 text-[#111218] dark:text-slate-300 border border-rose-200/60 dark:border-transparent text-[11px] sm:text-xs shadow-sm">
                  <span className="flex items-center gap-1.5 sm:gap-2 font-medium">
                    <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                    Lighting
                  </span>
                  <span className="text-amber-600 dark:text-amber-400 font-bold">[ON] Active Draw</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded bg-white dark:bg-black/40 text-[#111218] dark:text-slate-300 border border-rose-200/60 dark:border-transparent text-[11px] sm:text-xs shadow-sm">
                  <span className="flex items-center gap-1.5 sm:gap-2 font-medium">
                    <Fan className="w-3.5 h-3.5 text-amber-500" />
                    Ceiling Fan
                  </span>
                  <span className="text-amber-600 dark:text-amber-400 font-bold">[ON] Active Draw</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded bg-white dark:bg-black/40 text-[#111218] dark:text-slate-300 border border-rose-200/60 dark:border-transparent text-[11px] sm:text-xs shadow-sm">
                  <span className="flex items-center gap-1.5 sm:gap-2 font-medium">
                    <Wind className="w-3.5 h-3.5 text-amber-500" />
                    HVAC Climate
                  </span>
                  <span className="text-amber-600 dark:text-amber-400 font-bold">[ON] Cooling Empty Space</span>
                </div>
              </div>
            </div>

            {/* Right: SmartShut Room Energy Flow */}
            <div className="p-3.5 sm:p-6 rounded-2xl bg-[#F0FDF4] dark:bg-[#091516] border border-emerald-300 dark:border-brand-green/40 shadow-sm dark:shadow-[0_0_25px_rgba(0,245,155,0.15)]">
              <div className="flex flex-wrap items-center justify-between gap-1.5 pb-2.5 sm:pb-3 border-b border-emerald-200 dark:border-brand-green/20 text-[10px] sm:text-xs font-mono">
                <span className="text-emerald-800 dark:text-brand-green font-bold uppercase">SMARTSHUT ROOM (VERIFIED EMPTY)</span>
                <span className="text-emerald-800 dark:text-brand-green bg-emerald-100 dark:bg-brand-green/10 px-2 py-0.5 rounded border border-emerald-300 dark:border-brand-green/30 font-bold">
                  AUTO-ISOLATED
                </span>
              </div>

              {/* Energy Flow Visual Bar */}
              <div className="my-4 sm:my-6">
                <div className="flex justify-between text-[11px] sm:text-xs font-mono text-[#111218] dark:text-slate-300 mb-1.5 sm:mb-2 font-bold">
                  <span>ENERGY FLOW:</span>
                  <span className="text-emerald-700 dark:text-brand-green font-bold">STANDBY LOAD (ACTIVE SENTINEL ONLY)</span>
                </div>
                <div className="h-5 sm:h-6 w-full rounded-full bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-300 dark:border-brand-green/30 p-1 flex items-center shadow-inner">
                  <div
                    style={{ width: "12%" }}
                    className="h-full rounded-full bg-gradient-to-r from-brand-green to-[#27fcae] shadow-[0_0_15px_rgba(0,245,155,0.5)]"
                  />
                </div>
              </div>

              {/* Appliance breakdown */}
              <div className="space-y-2 font-mono text-xs">
                <div className="flex items-center justify-between p-2 rounded bg-white dark:bg-black/40 text-[#626775] dark:text-slate-400 border border-emerald-200/60 dark:border-transparent text-[11px] sm:text-xs shadow-sm">
                  <span className="flex items-center gap-1.5 sm:gap-2 font-medium">
                    <Lightbulb className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
                    Lighting
                  </span>
                  <span className="text-emerald-700 dark:text-brand-green font-bold">[OFF] Isolated</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded bg-white dark:bg-black/40 text-[#626775] dark:text-slate-400 border border-emerald-200/60 dark:border-transparent text-[11px] sm:text-xs shadow-sm">
                  <span className="flex items-center gap-1.5 sm:gap-2 font-medium">
                    <Fan className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
                    Ceiling Fan
                  </span>
                  <span className="text-emerald-700 dark:text-brand-green font-bold">[OFF] Isolated</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded bg-white dark:bg-black/40 text-[#626775] dark:text-slate-400 border border-emerald-200/60 dark:border-transparent text-[11px] sm:text-xs shadow-sm">
                  <span className="flex items-center gap-1.5 sm:gap-2 font-medium">
                    <Wind className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
                    HVAC Climate
                  </span>
                  <span className="text-emerald-700 dark:text-brand-green font-bold">[OFF] Standby</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded bg-emerald-50 dark:bg-[#0b241c] text-emerald-900 dark:text-brand-green font-bold border border-emerald-300 dark:border-brand-green/30 text-[11px] sm:text-xs shadow-sm">
                  <span className="flex items-center gap-1.5 sm:gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-brand-green" />
                    SmartShut Sentinel
                  </span>
                  <span>[ACTIVE] Overwatch 24/7</span>
                </div>
              </div>
            </div>
          </div>

          {/* Illustrative Notice */}
          <div className="mt-6 sm:mt-8 pt-3 sm:pt-4 border-t border-[#D9DCE5] dark:border-purple-500/20 flex flex-col sm:flex-row items-center justify-between gap-2.5 sm:gap-3 text-[10px] sm:text-xs font-mono text-[#626775] dark:text-slate-400 text-center sm:text-left font-medium">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Info className="w-4 h-4 text-emerald-600 dark:text-brand-green flex-shrink-0" />
              <span>Illustrative demo data — calculated for concept demonstration, not verified field audits.</span>
            </div>
            <span className="text-emerald-700 dark:text-brand-green font-bold flex-shrink-0">
              Mechanism: Non-essential load cutoff
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
