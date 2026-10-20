"use client";

import React, { useState } from "react";
import {
  Lock,
  Unlock,
  Zap,
  ShieldCheck,
  Eye,
  Fingerprint,
  ArrowRight,
} from "lucide-react";

export default function HeroSection() {
  const [doorLocked, setDoorLocked] = useState(true);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 sm:pt-24 pb-12 sm:pb-16 overflow-hidden bg-grid-pattern">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[550px] lg:w-[700px] h-[350px] sm:h-[500px] max-w-full bg-purple-300/30 dark:bg-brand-purple/20 blur-[110px] sm:blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[240px] sm:w-[350px] h-[240px] sm:h-[350px] max-w-full bg-emerald-300/25 dark:bg-brand-green/10 blur-[100px] sm:blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[220px] sm:w-[300px] h-[220px] sm:h-[300px] max-w-full bg-cyan-200/25 dark:bg-brand-cyan/10 blur-[90px] sm:blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & Story */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white dark:bg-purple-950/60 border border-purple-200 dark:border-purple-500/30 backdrop-blur-md mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-brand-green animate-pulse" />
              <span className="text-[11px] sm:text-xs font-mono font-semibold tracking-wider text-purple-900 dark:text-purple-200 uppercase">
                SMART ACCESS × INTELLIGENT ENERGY
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] text-[#111218] dark:text-white">
              LOCK SMART.
              <br />
              <span className="text-gradient-green">SAVE ENERGY.</span>
              <br />
              <span className="text-gradient-purple">STAY SECURE.</span>
            </h1>

            {/* Supporting Text */}
            <p className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg text-[#4b5262] dark:text-slate-300/90 leading-relaxed max-w-xl font-normal">
              One smart door concept connecting authorized access, room monitoring and automatic energy management. When the room is verified empty and the door is locked, SmartShut automatically powers down non-essential electronics while maintaining continuous active security.
            </p>

            {/* CTA Buttons */}
            <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <a
                href="#demo"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm font-semibold text-black bg-gradient-to-r from-brand-green via-[#19f79e] to-[#00f59b] hover:shadow-[0_0_30px_rgba(0,245,155,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>EXPLORE INTERACTIVE DEMO</span>
                <ArrowRight className="w-4 h-4 text-black" />
              </a>

              <a
                href="#how-it-works"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm font-medium text-purple-900 dark:text-purple-200 bg-white dark:bg-surface-100/80 hover:bg-slate-50 dark:hover:bg-surface-50 border border-purple-300 dark:border-purple-500/30 hover:border-purple-400 backdrop-blur-sm shadow-sm transition-all"
              >
                <span>SEE HOW IT WORKS</span>
              </a>
            </div>

            {/* Value Pillars Quick Pills */}
            <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-[#D9DCE5] dark:border-purple-500/15 grid grid-cols-3 gap-2 sm:gap-4 w-full max-w-lg">
              <div>
                <div className="text-[10px] sm:text-xs font-mono text-[#626775] dark:text-purple-300/70 uppercase">Access</div>
                <div className="text-xs sm:text-sm font-semibold text-[#111218] dark:text-white mt-0.5 flex items-center gap-1 sm:gap-1.5 truncate">
                  <Fingerprint className="w-3.5 h-3.5 text-emerald-600 dark:text-brand-green flex-shrink-0" />
                  <span>Biometric</span>
                </div>
              </div>
              <div>
                <div className="text-[10px] sm:text-xs font-mono text-[#626775] dark:text-purple-300/70 uppercase">Detection</div>
                <div className="text-xs sm:text-sm font-semibold text-[#111218] dark:text-white mt-0.5 flex items-center gap-1 sm:gap-1.5 truncate">
                  <Eye className="w-3.5 h-3.5 text-cyan-600 dark:text-brand-cyan flex-shrink-0" />
                  <span>Vision Sensor</span>
                </div>
              </div>
              <div>
                <div className="text-[10px] sm:text-xs font-mono text-[#626775] dark:text-purple-300/70 uppercase">Power Logic</div>
                <div className="text-xs sm:text-sm font-semibold text-[#111218] dark:text-white mt-0.5 flex items-center gap-1 sm:gap-1.5 truncate">
                  <Zap className="w-3.5 h-3.5 text-emerald-600 dark:text-brand-green flex-shrink-0" />
                  <span>Auto Cutoff</span>
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-2 text-[10px] sm:text-[11px] text-[#626775] dark:text-slate-400 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-brand-green/80 flex-shrink-0" />
              <span>Proposed hardware concept · Illustrative architectural preview</span>
            </div>
          </div>

          {/* Right Column: SECTION 1 OVERHAULED — SMART SHUT DOOR SYSTEM VISUALIZATION */}
          <div className="lg:col-span-6 relative w-full">
            <div className="relative w-full rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-7 bg-white dark:bg-gradient-to-b dark:from-[#180d33]/90 dark:via-[#110724]/95 dark:to-[#090314] border border-[#D9DCE5] dark:border-purple-500/30 shadow-xl dark:shadow-2xl backdrop-blur-xl flex flex-col justify-between overflow-hidden">
              {/* Subtle background tech texture */}
              <div className="absolute inset-0 bg-dot-pattern opacity-25 pointer-events-none" />

              {/* 1. TOP: Keep ONE small header */}
              <div className="relative z-10 flex items-center justify-between pb-3 sm:pb-4 border-b border-[#D9DCE5] dark:border-purple-500/20">
                <div className="inline-flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-brand-green animate-pulse" />
                  <span className="text-[11px] sm:text-xs font-mono font-bold tracking-wider text-emerald-800 dark:text-brand-green uppercase">
                    SMARTSHUT • PRODUCT CONCEPT
                  </span>
                </div>
                <span className="text-[10px] sm:text-[11px] font-mono text-[#626775] dark:text-purple-300/70 font-semibold">
                  DOOR SYSTEM V1
                </span>
              </div>

              {/* 2. THE DOOR: Central Visual Focus (Simplified vertical outline, fingerprint, deadbolt, circuits, zero overlay cards) */}
              <div className="relative z-10 my-3 sm:my-5 flex items-center justify-center">
                <div
                  role="button"
                  tabIndex={0}
                  aria-label={`SmartShut Door illustration. Click to toggle state. Currently ${doorLocked ? "Locked" : "Unlocked"}`}
                  onClick={() => setDoorLocked(!doorLocked)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setDoorLocked(!doorLocked);
                    }
                  }}
                  className="relative cursor-pointer transition-transform hover:scale-[1.01] active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-brand-green/50 rounded-2xl p-1"
                >
                  {/* Outer Door Frame / Architectural Jamb */}
                  <div className="w-[210px] sm:w-[250px] md:w-[270px] h-[300px] sm:h-[340px] md:h-[360px] rounded-2xl bg-[#E2E8F0] dark:bg-[#130726] p-2.5 sm:p-3 border-2 border-slate-300 dark:border-purple-500/40 shadow-xl dark:shadow-[0_15px_40px_rgba(0,0,0,0.8)] flex flex-col justify-between relative overflow-hidden">
                    {/* Architectural Hinges (Left) */}
                    <div className="absolute left-0.5 top-10 w-1.5 h-6 rounded-r bg-slate-400 dark:bg-purple-400/60" />
                    <div className="absolute left-0.5 top-1/2 -translate-y-1/2 w-1.5 h-6 rounded-r bg-slate-400 dark:bg-purple-400/60" />
                    <div className="absolute left-0.5 bottom-10 w-1.5 h-6 rounded-r bg-slate-400 dark:bg-purple-400/60" />

                    {/* Right Strike Plate Mortise Receiver */}
                    <div className="absolute right-0.5 top-1/2 -translate-y-1/2 w-1.5 h-14 rounded-l bg-slate-400 dark:bg-purple-400/60 flex items-center justify-center">
                      <div className={`w-1 h-6 rounded-l transition-colors duration-300 ${doorLocked ? "bg-emerald-500 dark:bg-brand-green" : "bg-slate-700 dark:bg-black"}`} />
                    </div>

                    {/* Vertical Door Slab Surface */}
                    <div className="relative flex-1 rounded-xl bg-gradient-to-b from-white via-[#F8FAFC] to-[#EDF2F7] dark:bg-gradient-to-b dark:from-[#180a33] dark:via-[#100624] dark:to-[#070212] border border-slate-200 dark:border-purple-600/30 p-3 sm:p-3.5 flex flex-col justify-between overflow-hidden shadow-inner">
                      {/* Subtle Internal Circuit Traces */}
                      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-25 dark:opacity-20" xmlns="http://www.w3.org/2000/svg">
                        <line x1="24" y1="0" x2="24" y2="100%" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" className="text-purple-400" />
                        <line x1="82%" y1="0" x2="82%" y2="100%" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" className="text-purple-400" />
                        <path d="M24 50 H60 V140 H82%" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" className="text-emerald-400" />
                      </svg>

                      {/* Top Header: Vision Optic Sensor */}
                      <div className="relative z-10 w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg bg-white/95 dark:bg-[#0c051a]/90 border border-slate-200 dark:border-purple-500/30 shadow-sm">
                        <div className="flex items-center gap-1.5">
                          <div className="relative w-3.5 h-3.5 rounded-full bg-slate-900 border border-brand-cyan/80 flex items-center justify-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse" />
                          </div>
                          <span className="text-[8px] sm:text-[9px] font-mono font-bold text-[#111218] dark:text-slate-300">
                            VISION SENSOR
                          </span>
                        </div>
                        <span className="text-[7px] sm:text-[8px] font-mono px-1.5 py-0.5 rounded bg-cyan-50 dark:bg-brand-cyan/15 text-cyan-800 dark:text-brand-cyan border border-cyan-300 dark:border-brand-cyan/30 font-semibold">
                          SCANNING
                        </span>
                      </div>

                      {/* Center: Fingerprint Biometric Scanner */}
                      <div className="relative z-10 my-auto py-2 flex flex-col items-center">
                        <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white dark:bg-[#120726] border-2 border-emerald-400/80 dark:border-brand-green/60 flex items-center justify-center shadow-[0_0_20px_rgba(0,245,155,0.2)] overflow-hidden">
                          {/* Animated laser scan line */}
                          <div className="absolute inset-x-0 h-0.5 bg-emerald-400 dark:bg-brand-green shadow-[0_0_8px_#00f59b] animate-scan-line" />
                          <Fingerprint className="w-8 h-8 sm:w-9 sm:h-9 text-emerald-600 dark:text-brand-green" />
                        </div>
                        <div className="mt-1.5 text-center">
                          <span className="text-[8px] sm:text-[9px] font-mono font-bold text-emerald-800 dark:text-brand-green block tracking-wider">
                            FINGERPRINT SENSOR
                          </span>
                          <span className="text-[7px] sm:text-[8px] font-mono text-[#626775] dark:text-slate-400">
                            Authorized Access
                          </span>
                        </div>
                      </div>

                      {/* Lower: Motorized Deadbolt Lock Indicator */}
                      <div className="relative z-10 w-full px-2.5 py-1.5 rounded-lg bg-white/95 dark:bg-[#0c051a]/90 border border-slate-200 dark:border-purple-500/30 flex items-center justify-between shadow-sm">
                        <div className="flex items-center gap-1.5">
                          {doorLocked ? (
                            <Lock className="w-3.5 h-3.5 text-emerald-600 dark:text-brand-green flex-shrink-0" />
                          ) : (
                            <Unlock className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
                          )}
                          <span className="text-[8px] sm:text-[9px] font-mono font-bold text-[#111218] dark:text-white">
                            DEADBOLT {doorLocked ? "ENGAGED" : "UNLOCKED"}
                          </span>
                        </div>
                        <div className={`px-1.5 py-0.5 rounded text-[7px] font-mono font-bold border transition-colors ${
                          doorLocked
                            ? "bg-emerald-50 dark:bg-brand-green/15 text-emerald-700 dark:text-brand-green border-emerald-300 dark:border-brand-green/30"
                            : "bg-amber-50 dark:bg-amber-500/15 text-amber-700 dark:text-amber-400 border-amber-300 dark:border-amber-500/30"
                        }`}>
                          {doorLocked ? "SECURED" : "RETRACTED"}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. STATUS: Clean Grid BELOW the Door (4 compact items, equal height, consistent padding, zero overlap) */}
              <div className="relative z-10 grid grid-cols-2 gap-2 sm:gap-2.5 my-1">
                {/* Item 1: LOCKED */}
                <div className={`p-2.5 sm:p-3 rounded-xl border flex flex-col justify-center transition-all min-h-[58px] sm:min-h-[64px] ${
                  doorLocked
                    ? "bg-emerald-50/70 dark:bg-brand-green/10 border-emerald-400/60 dark:border-brand-green/30"
                    : "bg-amber-50/70 dark:bg-amber-500/10 border-amber-400/60 dark:border-amber-500/30"
                }`}>
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className={`w-2 h-2 rounded-full ${doorLocked ? "bg-emerald-500 dark:bg-brand-green animate-ping" : "bg-amber-500 animate-pulse"}`} />
                    <span className="text-[10px] sm:text-xs font-mono font-bold tracking-wider text-[#111218] dark:text-white">
                      {doorLocked ? "LOCKED" : "UNLOCKED"}
                    </span>
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-mono text-[#626775] dark:text-slate-400 truncate">
                    {doorLocked ? "Deadbolt Engaged" : "Manual Override"}
                  </span>
                </div>

                {/* Item 2: ROOM EMPTY */}
                <div className="p-2.5 sm:p-3 rounded-xl border bg-cyan-50/70 dark:bg-brand-cyan/10 border-cyan-400/60 dark:border-brand-cyan/30 flex flex-col justify-center min-h-[58px] sm:min-h-[64px]">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className="w-2 h-2 rounded-full bg-cyan-500 dark:bg-brand-cyan animate-pulse" />
                    <span className="text-[10px] sm:text-xs font-mono font-bold tracking-wider text-cyan-800 dark:text-brand-cyan">
                      ROOM EMPTY
                    </span>
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-mono text-[#626775] dark:text-slate-400 truncate">
                    Verified by Optic
                  </span>
                </div>

                {/* Item 3: ENERGY SAVING */}
                <div className={`p-2.5 sm:p-3 rounded-xl border flex flex-col justify-center transition-all min-h-[58px] sm:min-h-[64px] ${
                  doorLocked
                    ? "bg-emerald-50/70 dark:bg-brand-green/10 border-emerald-400/60 dark:border-brand-green/30"
                    : "bg-slate-100 dark:bg-slate-900/60 border-slate-300 dark:border-slate-800"
                }`}>
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <Zap className={`w-3.5 h-3.5 ${doorLocked ? "text-emerald-600 dark:text-brand-green animate-pulse" : "text-slate-400"}`} />
                    <span className={`text-[10px] sm:text-xs font-mono font-bold tracking-wider ${doorLocked ? "text-emerald-800 dark:text-brand-green" : "text-slate-600 dark:text-slate-400"}`}>
                      {doorLocked ? "ENERGY SAVING" : "POWER ACTIVE"}
                    </span>
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-mono text-[#626775] dark:text-slate-400 truncate">
                    {doorLocked ? "CIRCUITS ISOLATED" : "Normal Room Draw"}
                  </span>
                </div>

                {/* Item 4: MONITORING ACTIVE */}
                <div className="p-2.5 sm:p-3 rounded-xl border bg-purple-50/70 dark:bg-purple-950/40 border-purple-300 dark:border-purple-500/30 flex flex-col justify-center min-h-[58px] sm:min-h-[64px]">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-purple-600 dark:text-brand-purple-glow flex-shrink-0" />
                    <span className="text-[10px] sm:text-xs font-mono font-bold tracking-wider text-purple-900 dark:text-purple-200 truncate">
                      MONITORING
                    </span>
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-mono text-[#626775] dark:text-slate-400 truncate">
                    ACTIVE 24/7
                  </span>
                </div>
              </div>

              {/* 4. FOOTER: Dedicated Row (Door State toggle, HVAC: STANDBY, LIGHTS: 0W) */}
              <div className="relative z-10 mt-3 pt-3 border-t border-[#D9DCE5] dark:border-purple-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono text-[#626775] dark:text-slate-300">
                <div className="flex items-center gap-2">
                  <span className="text-purple-900 dark:text-purple-300 font-semibold text-[11px] sm:text-xs">
                    Door State:
                  </span>
                  <button
                    onClick={() => setDoorLocked(!doorLocked)}
                    className="px-2.5 py-1 rounded-full bg-purple-100 hover:bg-purple-200 dark:bg-purple-900/50 dark:hover:bg-purple-800/60 border border-purple-300 dark:border-purple-500/40 text-purple-900 dark:text-white font-semibold flex items-center gap-1.5 transition-all text-[10px] sm:text-[11px] shadow-sm cursor-pointer"
                  >
                    {doorLocked ? (
                      <>
                        <Lock className="w-3 h-3 text-emerald-600 dark:text-brand-green" />
                        <span>Toggle: Unlocked</span>
                      </>
                    ) : (
                      <>
                        <Unlock className="w-3 h-3 text-amber-500" />
                        <span>Toggle: Locked</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-3 text-[10px] sm:text-[11px] font-medium text-[#626775] dark:text-slate-400">
                  <span className="flex items-center gap-1">
                    <span className={`w-1.5 h-1.5 rounded-full ${doorLocked ? "bg-emerald-500 dark:bg-brand-green" : "bg-amber-500 animate-pulse"}`} />
                    HVAC: {doorLocked ? "STANDBY" : "RUNNING"}
                  </span>
                  <span className="flex items-center gap-1">
                    <span className={`w-1.5 h-1.5 rounded-full ${doorLocked ? "bg-emerald-500 dark:bg-brand-green" : "bg-amber-500 animate-pulse"}`} />
                    LIGHTS: {doorLocked ? "0W" : "120W"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
