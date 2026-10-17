"use client";

import React, { useState } from "react";
import {
  AlertTriangle,
  Zap,
  ShieldCheck,
  Lightbulb,
  Fan,
  Wind,
  Lock,
  ArrowRight,
  TrendingDown,
  Info,
} from "lucide-react";

export default function ProblemSection() {
  const [activeTab, setActiveTab] = useState<"side-by-side" | "interactive">("side-by-side");
  const [smartMode, setSmartMode] = useState<boolean>(true);

  return (
    <section id="problem" className="py-24 relative overflow-hidden bg-[#080413]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-red-500/5 blur-[160px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-brand-green/10 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/70 border border-purple-500/30 backdrop-blur-md mb-4">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-xs font-mono font-medium text-purple-200 uppercase tracking-wider">
              THE UNNOTICED LEAK
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            THE ROOM IS EMPTY.
            <br />
            <span className="text-gradient-purple">THE ELECTRICITY ISN'T.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300">
            People leave. Lights, fans and ACs can keep running for hours behind closed doors. Smart locks secure the perimeter, but silently abandon power management.
          </p>
        </div>

        {/* Comparison Showcase (Side by Side Architectural Render) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* LEFT: ORDINARY ROOM */}
          <div className="relative rounded-2xl p-6 sm:p-8 bg-gradient-to-b from-[#1b0d1e]/80 via-[#130717]/90 to-[#0c0310] border border-red-500/30 shadow-2xl backdrop-blur-xl flex flex-col justify-between group overflow-hidden">
            {/* Ambient heat/waste glow */}
            <div className="absolute -top-24 -left-24 w-48 h-48 bg-amber-500/10 blur-3xl pointer-events-none" />

            <div>
              {/* Header Label */}
              <div className="flex items-center justify-between pb-4 border-b border-red-500/20">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-red-500 animate-ping" />
                  <span className="text-sm font-mono font-bold tracking-wider text-red-400 uppercase">
                    ORDINARY ROOM
                  </span>
                </div>
                <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold bg-red-500/15 text-red-400 border border-red-500/30">
                  ENERGY WASTE
                </span>
              </div>

              {/* Architectural Cutaway Illustration: Ordinary Room */}
              <div className="mt-6 relative w-full h-56 sm:h-64 rounded-xl bg-[#0e040f] border border-red-500/20 overflow-hidden p-4">
                {/* Visual room elements with high energy glow */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-red-950/10 to-transparent" />

                {/* Ceiling Lights (Blaring ON) */}
                <div className="absolute top-4 left-1/4 -translate-x-1/2 flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-amber-400/20 border border-amber-400/60 flex items-center justify-center shadow-[0_0_20px_rgba(251,191,36,0.6)]">
                    <Lightbulb className="w-5 h-5 text-amber-300 animate-pulse" />
                  </div>
                  <div className="w-32 h-20 bg-gradient-to-b from-amber-400/20 to-transparent blur-sm -mt-1 pointer-events-none" />
                  <span className="text-[10px] font-mono text-amber-300 mt-1">Light Fixture (ON)</span>
                </div>

                {/* AC Unit (Blasting ON) */}
                <div className="absolute top-4 right-6 flex flex-col items-end">
                  <div className="px-3 py-1.5 rounded-lg bg-[#250d18] border border-amber-500/40 flex items-center gap-2 shadow-[0_0_15px_rgba(239,68,68,0.25)]">
                    <Wind className="w-4 h-4 text-cyan-400 animate-bounce" />
                    <span className="text-[11px] font-mono text-white">AC 18°C [HIGH]</span>
                  </div>
                  <span className="text-[9px] font-mono text-red-400 mt-1">Cooling empty space</span>
                </div>

                {/* Ceiling Fan (Spinning Wastefully) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div className="p-3 rounded-full bg-[#1e0a16] border border-amber-500/40 shadow-inner">
                    <Fan className="w-8 h-8 text-amber-400 animate-spin" style={{ animationDuration: "1s" }} />
                  </div>
                  <span className="text-[10px] font-mono text-amber-300 mt-1">Fan at max speed</span>
                </div>

                {/* Ordinary Lock on closed door */}
                <div className="absolute bottom-4 left-6 flex items-center gap-2 px-3 py-1.5 rounded-md bg-black/60 border border-slate-700">
                  <Lock className="w-3.5 h-3.5 text-slate-400" />
                  <span className="text-[10px] font-mono text-slate-300">Deadbolt Locked</span>
                </div>

                {/* Waste meter */}
                <div className="absolute bottom-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-md bg-red-950/80 border border-red-500/40">
                  <Zap className="w-4 h-4 text-amber-400 animate-pulse" />
                  <span className="text-xs font-mono font-bold text-red-300">~2,400 Watts</span>
                </div>
              </div>

              {/* Bullet Points */}
              <ul className="mt-6 space-y-3 text-sm text-slate-300">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                  <span>Door is locked from outside, but internal circuits remain continuously energized.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                  <span>HVAC and lighting systems lack coordination with physical door state.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                  <span>Substantial electrical waste accumulates overnight and across weekends.</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-red-500/15 flex items-center justify-between text-xs font-mono text-red-400/90">
              <span>UNMANAGED DRAIN</span>
              <span className="font-bold">100% BASELINE LOAD</span>
            </div>
          </div>

          {/* RIGHT: SMARTSHUT ROOM */}
          <div className="relative rounded-2xl p-6 sm:p-8 bg-gradient-to-b from-[#0c1c1f]/80 via-[#0a151b]/90 to-[#070c14] border border-brand-green/40 shadow-2xl backdrop-blur-xl flex flex-col justify-between group overflow-hidden">
            {/* Ambient green energy efficiency glow */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand-green/10 blur-3xl pointer-events-none" />

            <div>
              {/* Header Label */}
              <div className="flex items-center justify-between pb-4 border-b border-brand-green/20">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-brand-green animate-ping" />
                  <span className="text-sm font-mono font-bold tracking-wider text-brand-green uppercase">
                    SMARTSHUT ROOM
                  </span>
                </div>
                <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold bg-brand-green/15 text-brand-green border border-brand-green/30">
                  SMART ENERGY CONTROL
                </span>
              </div>

              {/* Architectural Cutaway Illustration: SmartShut Room */}
              <div className="mt-6 relative w-full h-56 sm:h-64 rounded-xl bg-[#050e0f] border border-brand-green/30 overflow-hidden p-4">
                {/* Subtle calm ambient lighting */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-green/5 via-brand-cyan/5 to-transparent" />

                {/* Ceiling Lights (OFF) */}
                <div className="absolute top-4 left-1/4 -translate-x-1/2 flex flex-col items-center opacity-40">
                  <div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center">
                    <Lightbulb className="w-5 h-5 text-slate-500" />
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 mt-1">Light Fixture (OFF)</span>
                </div>

                {/* AC Unit (STANDBY / OFF) */}
                <div className="absolute top-4 right-6 flex flex-col items-end">
                  <div className="px-3 py-1.5 rounded-lg bg-[#071a17] border border-brand-green/40 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-brand-green" />
                    <span className="text-[11px] font-mono text-brand-green">HVAC [STANDBY]</span>
                  </div>
                  <span className="text-[9px] font-mono text-slate-400 mt-1">Non-essential cutoff</span>
                </div>

                {/* Ceiling Fan (STOPPED) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div className="p-3 rounded-full bg-[#081716] border border-brand-green/30">
                    <Fan className="w-8 h-8 text-slate-500" />
                  </div>
                  <span className="text-[10px] font-mono text-brand-green mt-1">Fan Paused</span>
                </div>

                {/* Security Field / Camera Monitoring Active */}
                <div className="absolute bottom-4 left-6 flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#0a231f]/90 border border-brand-green/50 shadow-[0_0_12px_rgba(0,245,155,0.25)]">
                  <ShieldCheck className="w-4 h-4 text-brand-green" />
                  <span className="text-[10px] font-mono text-white font-medium">Security Guard Active</span>
                </div>

                {/* Power Load Meter */}
                <div className="absolute bottom-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-md bg-brand-green/15 border border-brand-green/50">
                  <TrendingDown className="w-4 h-4 text-brand-green" />
                  <span className="text-xs font-mono font-bold text-brand-green">~15 Watts (Sensors only)</span>
                </div>
              </div>

              {/* Bullet Points */}
              <ul className="mt-6 space-y-3 text-sm text-slate-300">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-green mt-2 flex-shrink-0" />
                  <span>Door confirms room is empty and locked before triggering power down.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-green mt-2 flex-shrink-0" />
                  <span>Connected lights, fans, and ACs gracefully switch to safe low-power sleep.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-green mt-2 flex-shrink-0" />
                  <span>Camera-assisted surveillance and safety circuits remain permanently online.</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-brand-green/20 flex items-center justify-between text-xs font-mono text-brand-green">
              <span>ACTIVE REDUCTION</span>
              <span className="font-bold flex items-center gap-1">
                <Zap className="w-3.5 h-3.5" />
                DRASTICALLY LOWER STANDBY
              </span>
            </div>
          </div>
        </div>

        {/* Note on Concept / Demo Data */}
        <div className="mt-8 flex items-center justify-center gap-2 text-xs font-mono text-slate-400">
          <Info className="w-3.5 h-3.5 text-purple-400" />
          <span>Wattage values are illustrative demo examples representing typical commercial classroom or office room loads.</span>
        </div>
      </div>
    </section>
  );
}
