"use client";

import React, { useState } from "react";
import {
  TrendingDown,
  Zap,
  Lightbulb,
  Fan,
  Wind,
  ShieldCheck,
  Building2,
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
      hoursEmpty: 14, // 7pm to 9am
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
  const smartTotal = current.sentinel; // Non-essentials completely off
  const reductionPercent = Math.round(((ordinaryTotal - smartTotal) / ordinaryTotal) * 100);

  return (
    <section className="py-24 relative overflow-hidden bg-[#06030f]">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-brand-green/10 blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/15 border border-brand-green/30 backdrop-blur-md mb-4">
            <TrendingDown className="w-3.5 h-3.5 text-brand-green" />
            <span className="text-xs font-mono font-medium text-brand-green uppercase tracking-wider">
              EFFICIENCY ARCHITECTURE
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            TURN EMPTY ROOMS
            <br />
            <span className="text-gradient-green">INTO SAVINGS.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Compare active draw during empty hours. SmartShut cuts unnecessary high-power loads while preserving ultra-low-power surveillance.
          </p>

          {/* Preset Selector */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {(["office", "classroom", "lab"] as const).map((key) => (
              <button
                key={key}
                onClick={() => setSelectedPreset(key)}
                className={`px-4 py-2 rounded-xl text-xs font-mono border transition-all ${
                  selectedPreset === key
                    ? "bg-brand-green/20 border-brand-green text-brand-green font-bold shadow-[0_0_15px_rgba(0,245,155,0.2)]"
                    : "bg-[#110724] text-slate-400 border-purple-500/20 hover:text-white"
                }`}
              >
                {presets[key].name}
              </button>
            ))}
          </div>
        </div>

        {/* Main Conceptual Comparison Graphic */}
        <div className="rounded-3xl p-6 sm:p-10 bg-gradient-to-b from-[#140a2b]/90 via-[#0d051c]/95 to-[#070210] border border-purple-500/30 shadow-2xl backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left: Ordinary Room Energy Flow */}
            <div className="p-6 rounded-2xl bg-[#0d0515] border border-red-500/30">
              <div className="flex items-center justify-between pb-3 border-b border-red-500/20 text-xs font-mono">
                <span className="text-red-400 font-bold uppercase">ORDINARY ROOM (EMPTY HOURS)</span>
                <span className="text-red-400 bg-red-500/10 px-2 py-0.5 rounded border border-red-500/20">
                  UNMANAGED WASTE
                </span>
              </div>

              {/* Energy Flow Visual Bar */}
              <div className="my-6">
                <div className="flex justify-between text-xs font-mono text-slate-300 mb-2">
                  <span>ENERGY FLOW:</span>
                  <span className="text-red-400 font-bold">100% LOAD ({ordinaryTotal}W)</span>
                </div>
                <div className="h-6 w-full rounded-full bg-red-950/60 border border-red-500/30 p-1 flex items-center">
                  <div className="h-full w-full rounded-full bg-gradient-to-r from-amber-500 to-red-500 shadow-[0_0_15px_rgba(239,68,68,0.5)] animate-pulse" />
                </div>
              </div>

              {/* Appliance breakdown */}
              <div className="space-y-2.5 font-mono text-xs">
                <div className="flex items-center justify-between p-2 rounded bg-black/40 text-slate-300">
                  <span className="flex items-center gap-2">
                    <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
                    Lighting
                  </span>
                  <span className="text-amber-400 font-semibold">{current.lights}W [ON]</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded bg-black/40 text-slate-300">
                  <span className="flex items-center gap-2">
                    <Fan className="w-3.5 h-3.5 text-amber-400" />
                    Ceiling Fan
                  </span>
                  <span className="text-amber-400 font-semibold">{current.fan}W [ON]</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded bg-black/40 text-slate-300">
                  <span className="flex items-center gap-2">
                    <Wind className="w-3.5 h-3.5 text-amber-400" />
                    HVAC Climate
                  </span>
                  <span className="text-amber-400 font-semibold">{current.ac}W [ON]</span>
                </div>
              </div>
            </div>

            {/* Right: SmartShut Room Energy Flow */}
            <div className="p-6 rounded-2xl bg-[#091516] border border-brand-green/40 shadow-[0_0_25px_rgba(0,245,155,0.15)]">
              <div className="flex items-center justify-between pb-3 border-b border-brand-green/20 text-xs font-mono">
                <span className="text-brand-green font-bold uppercase">SMARTSHUT ROOM (EMPTY HOURS)</span>
                <span className="text-brand-green bg-brand-green/10 px-2 py-0.5 rounded border border-brand-green/30">
                  AUTO-ISOLATED
                </span>
              </div>

              {/* Energy Flow Visual Bar */}
              <div className="my-6">
                <div className="flex justify-between text-xs font-mono text-slate-300 mb-2">
                  <span>ENERGY FLOW:</span>
                  <span className="text-brand-green font-bold">~{100 - reductionPercent}% LOAD ({smartTotal}W)</span>
                </div>
                <div className="h-6 w-full rounded-full bg-emerald-950/60 border border-brand-green/30 p-1 flex items-center">
                  <div
                    style={{ width: `${Math.max(8, 100 - reductionPercent)}%` }}
                    className="h-full rounded-full bg-gradient-to-r from-brand-green to-[#27fcae] shadow-[0_0_15px_rgba(0,245,155,0.5)]"
                  />
                </div>
              </div>

              {/* Appliance breakdown */}
              <div className="space-y-2.5 font-mono text-xs">
                <div className="flex items-center justify-between p-2 rounded bg-black/40 text-slate-400">
                  <span className="flex items-center gap-2">
                    <Lightbulb className="w-3.5 h-3.5 text-slate-500" />
                    Lighting
                  </span>
                  <span className="text-brand-green font-semibold">0W [OFF]</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded bg-black/40 text-slate-400">
                  <span className="flex items-center gap-2">
                    <Fan className="w-3.5 h-3.5 text-slate-500" />
                    Ceiling Fan
                  </span>
                  <span className="text-brand-green font-semibold">0W [OFF]</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded bg-black/40 text-slate-400">
                  <span className="flex items-center gap-2">
                    <Wind className="w-3.5 h-3.5 text-slate-500" />
                    HVAC Climate
                  </span>
                  <span className="text-brand-green font-semibold">0W [OFF]</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded bg-[#0b241c] text-brand-green font-bold border border-brand-green/30">
                  <span className="flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-brand-green" />
                    SmartShut Sentinel
                  </span>
                  <span>{current.sentinel}W [ACTIVE]</span>
                </div>
              </div>
            </div>
          </div>

          {/* Illustrative Notice */}
          <div className="mt-8 pt-4 border-t border-purple-500/20 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <Info className="w-4 h-4 text-brand-green" />
              <span>Illustrative demo data — calculated for concept demonstration, not verified field audits.</span>
            </div>
            <span className="text-brand-green font-semibold">
              Potential ~{reductionPercent}% reduction during unpopulated nighttime hours
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
