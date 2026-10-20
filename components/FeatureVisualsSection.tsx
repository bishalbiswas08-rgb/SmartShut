"use client";

import React, { useState } from "react";
import {
  Fingerprint,
  Users,
  Eye,
  Zap,
  Clock,
  Smartphone,
  Key,
  ShieldAlert,
  ArrowRight,
  CheckCircle2,
  Unlock,
  Radio,
  Bell,
  RefreshCw,
} from "lucide-react";

export default function FeatureVisualsSection() {
  // Feature 1: Fingerprint scan simulation
  const [fpState, setFpState] = useState<"idle" | "scanning" | "authorized">("authorized");

  // Feature 2: Occupancy counter simulation
  const [occupancyCount, setOccupancyCount] = useState<number>(3);

  // Feature 3: Activity Monitoring sequence
  const [motionActive] = useState<boolean>(true);

  // Feature 4: Energy flow toggle
  const [energyState, setEnergyState] = useState<"occupied" | "saving">("saving");

  // Feature 5: Smart schedule interactive values
  const [lockTime, setLockTime] = useState<string>("19:00");
  const [unlockTime, setUnlockTime] = useState<string>("09:00");

  const triggerScan = () => {
    setFpState("scanning");
    setTimeout(() => {
      setFpState("authorized");
    }, 1200);
  };

  return (
    <section className="py-16 sm:py-24 relative overflow-hidden bg-[#F7F8FA] dark:bg-[#06030e]">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[500px] lg:w-[600px] h-[280px] sm:h-[500px] lg:h-[600px] max-w-[90vw] bg-purple-300/20 dark:bg-brand-purple/10 blur-[120px] sm:blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-950/70 border border-purple-200 dark:border-purple-500/30 backdrop-blur-md mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-brand-green" />
            <span className="text-[11px] sm:text-xs font-mono font-semibold text-purple-900 dark:text-purple-200 uppercase tracking-wider">
              CORE HARDWARE CAPABILITIES
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#111218] dark:text-white leading-tight">
            INTELLIGENCE BUILT
            <br />
            <span className="text-gradient-purple">INTO THE DOOR.</span>
          </h2>

          <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-[#4b5262] dark:text-slate-300">
            SmartShut transforms the traditional door into an autonomous node combining biometric physical security, visual occupancy tracking, and active circuit modulation.
          </p>
        </div>

        {/* 6 Rich Visual Feature Blocks */}
        <div className="space-y-8 sm:space-y-12">
          {/* 01 — FINGERPRINT ACCESS */}
          <div className="rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-10 bg-white dark:bg-gradient-to-br dark:from-[#150a2b]/90 dark:via-[#0d051c]/95 dark:to-[#070210] border border-[#D9DCE5] dark:border-purple-500/30 shadow-xl dark:shadow-2xl backdrop-blur-xl grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            <div className="lg:col-span-6 relative flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 rounded-2xl bg-[#EEF2F9] dark:bg-[#0a0416] border border-[#CBD5E1] dark:border-purple-500/25 overflow-hidden min-h-[280px] shadow-sm">
              <div className="absolute inset-0 bg-grid-pattern opacity-20" />

              <div className="relative z-10 flex flex-col items-center w-full">
                <div
                  onClick={triggerScan}
                  className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-emerald-50 dark:bg-purple-950/70 border-2 border-emerald-500 dark:border-brand-green/60 flex items-center justify-center cursor-pointer shadow-md dark:shadow-[0_0_30px_rgba(0,245,155,0.25)] hover:scale-105 transition-all group"
                  title="Click to trigger biometric scan"
                >
                  <Fingerprint className="w-12 h-12 sm:w-16 sm:h-16 text-emerald-600 dark:text-brand-green group-hover:scale-110 transition-transform" />

                  {fpState === "scanning" && (
                    <div className="absolute left-0 right-0 h-1 bg-brand-green shadow-[0_0_12px_#00f59b] animate-scan-line" />
                  )}

                  {fpState === "authorized" && (
                    <div className="absolute -bottom-2 -right-2 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-brand-green text-black flex items-center justify-center shadow-md">
                      <CheckCircle2 className="w-4 h-4 text-black" />
                    </div>
                  )}
                </div>

                {/* Progress flow status indicators */}
                <div className="mt-4 sm:mt-6 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-mono">
                  <span className="px-2 sm:px-2.5 py-1 rounded bg-white dark:bg-[#170a2f] border border-[#CBD5E1] dark:border-purple-500/30 text-[#111218] dark:text-purple-200 shadow-sm font-medium">
                    Scan
                  </span>
                  <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-600 dark:text-brand-green" />
                  <span className="px-2 sm:px-2.5 py-1 rounded bg-emerald-50 dark:bg-[#170a2f] border border-emerald-300 dark:border-brand-green/40 text-emerald-800 dark:text-brand-green font-bold shadow-sm">
                    Authorized
                  </span>
                  <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-600 dark:text-brand-green" />
                  <span className="px-2 sm:px-2.5 py-1 rounded bg-emerald-100 dark:bg-brand-green/20 border border-emerald-400 dark:border-brand-green text-emerald-900 dark:text-white font-bold flex items-center gap-1 shadow-sm">
                    <Unlock className="w-3 h-3 text-emerald-700 dark:text-brand-green" />
                    Unlocked
                  </span>
                </div>

                <button
                  onClick={triggerScan}
                  className="mt-3 sm:mt-4 text-[10px] sm:text-[11px] font-mono text-purple-800 dark:text-purple-300 hover:text-emerald-700 dark:hover:text-brand-green underline flex items-center gap-1 transition-colors font-semibold"
                >
                  <RefreshCw className="w-3 h-3" />
                  <span>Test Scan Simulation</span>
                </button>
              </div>

              {/* Physical Key fallback callout */}
              <div className="relative mt-4 sm:absolute sm:bottom-3 sm:left-4 flex items-center gap-1.5 text-[10px] sm:text-[11px] font-mono text-[#626775] dark:text-slate-400 font-medium">
                <Key className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
                <span>Includes concealed mechanical key override</span>
              </div>
            </div>

            <div className="lg:col-span-6 flex flex-col items-start">
              <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest text-emerald-800 dark:text-brand-green uppercase mb-1.5 sm:mb-2">
                01 — FINGERPRINT ACCESS & KEY OVERRIDE
              </span>
              <h3 className="text-xl sm:text-3xl font-extrabold text-[#111218] dark:text-white mb-2 sm:mb-3">
                Authorized access,
                <br />
                <span className="text-gradient-green">made simple.</span>
              </h3>
              <p className="text-[#4b5262] dark:text-slate-300 text-xs sm:text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                Registered users unlock smoothly using high-precision biometric sensing, with an optional concealed physical key for maintenance and emergency override.
              </p>
              <div className="p-3 sm:p-4 rounded-xl bg-[#F8FAFC] dark:bg-[#110724] border border-[#CBD5E1] dark:border-purple-500/20 w-full flex items-center justify-between gap-2 shadow-sm">
                <div>
                  <div className="text-[11px] sm:text-xs font-mono text-[#111218] dark:text-slate-300 font-bold">
                    Failsafe Mechanical Egress
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-[#626775] dark:text-slate-400 font-mono mt-0.5">
                    Physical key slot for maintenance and emergencies
                  </div>
                </div>
                <div className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded bg-purple-100 dark:bg-purple-900/40 text-[9px] sm:text-[10px] font-mono text-purple-900 dark:text-purple-200 border border-purple-300 dark:border-purple-500/30 flex-shrink-0 font-bold">
                  DUAL-PATH
                </div>
              </div>
            </div>
          </div>

          {/* 02 — OCCUPANCY DETECTION */}
          <div className="rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-10 bg-white dark:bg-gradient-to-br dark:from-[#130926]/90 dark:via-[#0c0419]/95 dark:to-[#06020f] border border-[#D9DCE5] dark:border-purple-500/30 shadow-xl dark:shadow-2xl backdrop-blur-xl grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            <div className="lg:col-span-6 flex flex-col items-start order-2 lg:order-1">
              <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest text-cyan-800 dark:text-brand-cyan uppercase mb-1.5 sm:mb-2">
                02 — OCCUPANCY INTELLIGENCE
              </span>
              <h3 className="text-xl sm:text-3xl font-extrabold text-[#111218] dark:text-white mb-2 sm:mb-3">
                Know when a room
                <br />
                <span className="text-gradient-mixed">appears to be empty.</span>
              </h3>
              <p className="text-[#4b5262] dark:text-slate-300 text-xs sm:text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                Camera-assisted threshold monitoring estimates room population in real time, preventing automated energy shutdown if anyone remains inside.
              </p>
              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={() => setOccupancyCount(3)}
                  className={`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg text-[10px] sm:text-xs font-mono border transition-all ${
                    occupancyCount === 3
                      ? "bg-cyan-100 dark:bg-brand-cyan/20 border-cyan-400 text-cyan-900 dark:text-brand-cyan font-bold shadow-sm"
                      : "bg-white dark:bg-[#110724] text-[#626775] dark:text-slate-400 border-[#CBD5E1] dark:border-purple-500/20"
                  }`}
                >
                  Count: 03 (Class)
                </button>
                <button
                  onClick={() => setOccupancyCount(1)}
                  className={`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg text-[10px] sm:text-xs font-mono border transition-all ${
                    occupancyCount === 1
                      ? "bg-cyan-100 dark:bg-brand-cyan/20 border-cyan-400 text-cyan-900 dark:text-brand-cyan font-bold shadow-sm"
                      : "bg-white dark:bg-[#110724] text-[#626775] dark:text-slate-400 border-[#CBD5E1] dark:border-purple-500/20"
                  }`}
                >
                  Count: 01 (Last)
                </button>
                <button
                  onClick={() => setOccupancyCount(0)}
                  className={`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg text-[10px] sm:text-xs font-mono border transition-all ${
                    occupancyCount === 0
                      ? "bg-emerald-100 dark:bg-brand-green/20 border-emerald-400 text-emerald-900 dark:text-brand-green font-bold shadow-sm"
                      : "bg-white dark:bg-[#110724] text-[#626775] dark:text-slate-400 border-[#CBD5E1] dark:border-purple-500/20"
                  }`}
                >
                  Count: 00 (Vacant)
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 relative p-4 sm:p-6 lg:p-8 rounded-2xl bg-[#EEF2F9] dark:bg-[#090414] border border-cyan-400/50 dark:border-cyan-500/30 overflow-hidden min-h-[280px] flex flex-col justify-between order-1 lg:order-2 shadow-sm">
              <div className="flex items-center justify-between pb-3 border-b border-[#CBD5E1] dark:border-purple-500/20 text-[10px] sm:text-xs font-mono">
                <span className="flex items-center gap-1.5 sm:gap-2 text-cyan-700 dark:text-brand-cyan font-bold">
                  <Eye className="w-3.5 h-3.5" />
                  TRANSIT ANALYZER
                </span>
                <span className="text-[10px] text-[#626775] dark:text-slate-400 font-medium">EDGE VISION</span>
              </div>

              <div className="my-4 sm:my-6 relative flex items-center justify-center gap-4 sm:gap-6">
                {occupancyCount === 0 ? (
                  <div className="text-center py-4 sm:py-6">
                    <span className="text-[10px] sm:text-xs font-mono text-emerald-800 dark:text-brand-green font-bold px-3 py-1 rounded bg-emerald-50 dark:bg-brand-green/10 border border-emerald-300 dark:border-brand-green/30 shadow-sm">
                      ROOM VACANT · 00 OCCUPANTS
                    </span>
                  </div>
                ) : (
                  Array.from({ length: occupancyCount }).map((_, idx) => (
                    <div key={idx} className="flex flex-col items-center">
                      <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-cyan-100 dark:bg-cyan-950/60 border border-cyan-400 dark:border-brand-cyan/70 flex items-center justify-center shadow-md">
                        <Users className="w-5 h-5 sm:w-7 sm:h-7 text-cyan-700 dark:text-brand-cyan" />
                      </div>
                      <span className="text-[9px] sm:text-[10px] font-mono text-[#111218] dark:text-cyan-200 mt-1 font-semibold">Person #{idx + 1}</span>
                    </div>
                  ))
                )}
              </div>

              <div className="p-2.5 sm:p-3 rounded-xl bg-white dark:bg-black/60 border border-cyan-400/40 dark:border-cyan-500/30 flex items-center justify-between text-xs font-mono shadow-sm">
                <span className="text-[10px] sm:text-xs text-[#626775] dark:text-slate-300 font-bold">HEADCOUNT:</span>
                <span className="text-xs sm:text-base font-bold text-cyan-800 dark:text-brand-cyan">
                  {occupancyCount < 10 ? `0${occupancyCount}` : occupancyCount} PEOPLE INSIDE
                </span>
              </div>
            </div>
          </div>

          {/* 03 — ACTIVITY MONITORING */}
          <div className="rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-10 bg-white dark:bg-gradient-to-br dark:from-[#150a2b]/90 dark:via-[#0d051c]/95 dark:to-[#070210] border border-[#D9DCE5] dark:border-purple-500/30 shadow-xl dark:shadow-2xl backdrop-blur-xl grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            <div className="lg:col-span-6 relative p-4 sm:p-6 lg:p-8 rounded-2xl bg-[#EEF2F9] dark:bg-[#090413] border border-[#CBD5E1] dark:border-purple-500/25 overflow-hidden min-h-[280px] flex flex-col justify-between shadow-sm">
              <div className="flex items-center justify-between pb-3 border-b border-[#CBD5E1] dark:border-purple-500/20 text-[10px] sm:text-xs font-mono text-purple-900/80 dark:text-purple-300 font-semibold">
                <span className="flex items-center gap-1.5">
                  <Radio className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400 animate-pulse" />
                  NIGHTTIME SURVEILLANCE RADAR
                </span>
                <span className="text-[#626775] dark:text-slate-400 font-medium">IR CONTOUR</span>
              </div>

              <div className="my-4 sm:my-6 relative flex flex-col items-center justify-center">
                <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full border border-purple-300 dark:border-purple-500/40 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full border border-purple-300/40 dark:border-purple-400/20 animate-ping opacity-30" />
                  <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-full border border-emerald-400/50 dark:border-brand-green/30 flex items-center justify-center">
                    <ShieldAlert className="w-8 h-8 sm:w-10 sm:h-10 text-purple-600 dark:text-purple-300" />
                  </div>
                  {motionActive && (
                    <div className="absolute top-3 right-4 sm:top-4 sm:right-6 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-500 shadow-[0_0_10px_#f59e0b] animate-ping" />
                  )}
                </div>

                <div className="mt-4 sm:mt-6 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 text-[9px] sm:text-[11px] font-mono font-semibold">
                  <span className="px-2 py-0.5 sm:py-1 rounded bg-amber-100 dark:bg-amber-500/20 text-amber-900 dark:text-amber-300 border border-amber-300 dark:border-amber-500/30">
                    MOTION DETECTED
                  </span>
                  <ArrowRight className="w-3 h-3 text-purple-600 dark:text-purple-400" />
                  <span className="px-2 py-0.5 sm:py-1 rounded bg-purple-100 dark:bg-purple-900/40 text-purple-900 dark:text-purple-200 border border-purple-300 dark:border-purple-500/30">
                    ACTIVITY LOGGED
                  </span>
                  <ArrowRight className="w-3 h-3 text-purple-600 dark:text-purple-400" />
                  <span className="px-2 py-0.5 sm:py-1 rounded bg-emerald-100 dark:bg-brand-green/20 text-emerald-900 dark:text-brand-green border border-emerald-300 dark:border-brand-green/30">
                    OWNER ALERT
                  </span>
                </div>
              </div>

              <div className="text-[9px] sm:text-[10px] font-mono text-[#626775] dark:text-slate-400 text-center font-medium">
                Conceptual simulation · Encrypted private optical telemetry
              </div>
            </div>

            <div className="lg:col-span-6 flex flex-col items-start">
              <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest text-purple-800 dark:text-purple-400 uppercase mb-1.5 sm:mb-2">
                03 — ACTIVITY MONITORING & ACCESS LOGS
              </span>
              <h3 className="text-xl sm:text-3xl font-extrabold text-[#111218] dark:text-white mb-2 sm:mb-3">
                Explore a concept for
                <br />
                <span className="text-gradient-purple">monitoring room activity.</span>
              </h3>
              <p className="text-[#4b5262] dark:text-slate-300 text-xs sm:text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                Even while room illumination and appliances are powered down, SmartShut maintains an active low-power security perimeter, capturing motion timestamps and access events locally.
              </p>
              <div className="space-y-2 w-full text-[11px] sm:text-xs font-mono text-[#111218] dark:text-slate-300 font-medium">
                <div className="flex items-center gap-2 p-2 sm:p-2.5 rounded-lg bg-[#F8FAFC] dark:bg-[#110724] border border-[#CBD5E1] dark:border-purple-500/20 shadow-sm">
                  <Bell className="w-4 h-4 text-purple-600 dark:text-purple-400 flex-shrink-0" />
                  <span>Real-time push alerts on unexpected movement</span>
                </div>
                <div className="flex items-center gap-2 p-2 sm:p-2.5 rounded-lg bg-[#F8FAFC] dark:bg-[#110724] border border-[#CBD5E1] dark:border-purple-500/20 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-brand-green flex-shrink-0" />
                  <span>Zero cloud dependency — local edge log storage</span>
                </div>
              </div>
            </div>
          </div>

          {/* 04 — ENERGY MANAGEMENT */}
          <div className="rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-10 bg-white dark:bg-gradient-to-br dark:from-[#130926]/90 dark:via-[#0c0419]/95 dark:to-[#06020f] border border-[#D9DCE5] dark:border-purple-500/30 shadow-xl dark:shadow-2xl backdrop-blur-xl grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            <div className="lg:col-span-6 flex flex-col items-start order-2 lg:order-1">
              <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest text-emerald-800 dark:text-brand-green uppercase mb-1.5 sm:mb-2">
                04 — POWER MODULATION
              </span>
              <h3 className="text-xl sm:text-3xl font-extrabold text-[#111218] dark:text-white mb-2 sm:mb-3">
                Connect room occupancy to
                <br />
                <span className="text-gradient-green">smarter device control.</span>
              </h3>
              <p className="text-[#4b5262] dark:text-slate-300 text-xs sm:text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                When the room is verified empty, locked by an authorized credential, and checked for clear corridors: eligible connected non-essential circuits turn off safely.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 w-full sm:w-auto">
                <button
                  onClick={() => setEnergyState("occupied")}
                  className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-[11px] sm:text-xs font-mono border transition-all text-center ${
                    energyState === "occupied"
                      ? "bg-amber-100 dark:bg-amber-500/20 border-amber-400 text-amber-900 dark:text-amber-300 font-bold shadow-sm"
                      : "bg-white dark:bg-[#110724] text-[#626775] dark:text-slate-400 border-[#CBD5E1] dark:border-purple-500/20"
                  }`}
                >
                  Room Occupied (Devices On)
                </button>
                <button
                  onClick={() => setEnergyState("saving")}
                  className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-[11px] sm:text-xs font-mono border transition-all text-center ${
                    energyState === "saving"
                      ? "bg-emerald-100 dark:bg-brand-green/20 border-emerald-400 text-emerald-900 dark:text-brand-green font-bold shadow-sm"
                      : "bg-white dark:bg-[#110724] text-[#626775] dark:text-slate-400 border-[#CBD5E1] dark:border-purple-500/20"
                  }`}
                >
                  Empty + Locked (Power Cutoff)
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 relative p-4 sm:p-6 lg:p-8 rounded-2xl bg-[#EEF2F9] dark:bg-[#090414] border border-emerald-300 dark:border-brand-green/30 overflow-hidden min-h-[280px] flex flex-col justify-between order-1 lg:order-2 shadow-sm">
              <div className="flex items-center justify-between pb-3 border-b border-[#CBD5E1] dark:border-purple-500/20 text-[10px] sm:text-xs font-mono text-emerald-800 dark:text-brand-green font-bold">
                <span>ENERGY FLOW ARCHITECTURE</span>
                <span>{energyState === "saving" ? "STANDBY" : "FULL LOAD"}</span>
              </div>

              <div className="my-4 sm:my-6 space-y-2 sm:space-y-3 font-mono text-xs">
                <div className="p-2 sm:p-2.5 rounded-lg bg-white dark:bg-[#110724] border border-[#CBD5E1] dark:border-purple-500/20 flex items-center justify-between shadow-sm">
                  <span className="text-[11px] sm:text-xs text-[#111218] dark:text-slate-300 font-medium">Room Lights</span>
                  <span className={`text-[10px] sm:text-xs font-bold ${energyState === "saving" ? "text-slate-400 dark:text-slate-500" : "text-amber-600 dark:text-amber-400"}`}>
                    {energyState === "saving" ? "[OFF]" : "[180W]"}
                  </span>
                </div>
                <div className="p-2 sm:p-2.5 rounded-lg bg-white dark:bg-[#110724] border border-[#CBD5E1] dark:border-purple-500/20 flex items-center justify-between shadow-sm">
                  <span className="text-[11px] sm:text-xs text-[#111218] dark:text-slate-300 font-medium">Ceiling Fans</span>
                  <span className={`text-[10px] sm:text-xs font-bold ${energyState === "saving" ? "text-slate-400 dark:text-slate-500" : "text-amber-600 dark:text-amber-400"}`}>
                    {energyState === "saving" ? "[OFF]" : "[150W]"}
                  </span>
                </div>
                <div className="p-2 sm:p-2.5 rounded-lg bg-white dark:bg-[#110724] border border-[#CBD5E1] dark:border-purple-500/20 flex items-center justify-between shadow-sm">
                  <span className="text-[11px] sm:text-xs text-[#111218] dark:text-slate-300 font-medium">Split AC</span>
                  <span className={`text-[10px] sm:text-xs font-bold ${energyState === "saving" ? "text-slate-400 dark:text-slate-500" : "text-amber-600 dark:text-amber-400"}`}>
                    {energyState === "saving" ? "[OFF]" : "[1,500W]"}
                  </span>
                </div>
                <div className="p-2 sm:p-2.5 rounded-lg bg-emerald-50 dark:bg-[#0c221a] border border-emerald-400 dark:border-brand-green/40 flex items-center justify-between text-emerald-900 dark:text-brand-green font-bold shadow-sm">
                  <span className="text-[11px] sm:text-xs">Security Sentinel</span>
                  <span className="text-[10px] sm:text-xs">[15W ONLINE]</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between text-xs font-mono pt-2 border-t border-[#CBD5E1] dark:border-purple-500/15 gap-1">
                <span className="text-[#626775] dark:text-slate-400 text-[10px] sm:text-xs font-medium">Relative Circuit State:</span>
                <span className="text-xs sm:text-sm font-bold text-emerald-800 dark:text-brand-green">
                  {energyState === "saving" ? "Standby Mode (Protected)" : "Standard Active Draw (Illustrative)"}
                </span>
              </div>
            </div>
          </div>

          {/* 05 — SMART SCHEDULING */}
          <div className="rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-10 bg-white dark:bg-gradient-to-br dark:from-[#150a2b]/90 dark:via-[#0d051c]/95 dark:to-[#070210] border border-[#D9DCE5] dark:border-purple-500/30 shadow-xl dark:shadow-2xl backdrop-blur-xl grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            <div className="lg:col-span-6 relative p-4 sm:p-6 lg:p-8 rounded-2xl bg-[#EEF2F9] dark:bg-[#090413] border border-[#CBD5E1] dark:border-purple-500/25 overflow-hidden min-h-[280px] flex flex-col justify-between shadow-sm">
              <div className="flex items-center justify-between pb-3 border-b border-[#CBD5E1] dark:border-purple-500/20 text-[10px] sm:text-xs font-mono text-emerald-800 dark:text-brand-green font-bold">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-emerald-600 dark:text-brand-green" />
                  TIMELINE AUTOMATION
                </span>
                <span className="text-[#626775] dark:text-slate-400 font-medium">DAILY CRON</span>
              </div>

              <div className="my-4 sm:my-6 space-y-3 sm:space-y-4">
                <div className="relative pl-4 sm:pl-6 border-l-2 border-emerald-500 dark:border-brand-green/60 space-y-3 font-mono text-xs">
                  <div>
                    <span className="text-emerald-800 dark:text-brand-green font-bold text-xs sm:text-sm">{lockTime} (Evening)</span>
                    <p className="text-[#4b5262] dark:text-slate-300 text-[10px] sm:text-[11px] mt-0.5">
                      Last user departs → Door deadbolt locks → Empty room verified → Non-essentials power down.
                    </p>
                  </div>
                  <div>
                    <span className="text-purple-800 dark:text-purple-300 font-bold text-xs sm:text-sm">Overnight Safe Hold</span>
                    <p className="text-[#626775] dark:text-slate-400 text-[10px] sm:text-[11px] mt-0.5">
                      Continuous security monitoring at minimal 15W standby consumption.
                    </p>
                  </div>
                  <div>
                    <span className="text-cyan-800 dark:text-brand-cyan font-bold text-xs sm:text-sm">{unlockTime} (Morning)</span>
                    <p className="text-[#4b5262] dark:text-slate-300 text-[10px] sm:text-[11px] mt-0.5">
                      Scheduled automated unlock or early biometric entry restores normal room comfort.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 sm:gap-3 pt-3 border-t border-[#CBD5E1] dark:border-purple-500/20">
                <div>
                  <label className="text-[9px] sm:text-[10px] font-mono text-[#626775] dark:text-slate-400 uppercase block mb-1 font-semibold">
                    Lock Time
                  </label>
                  <input
                    type="time"
                    value={lockTime}
                    onChange={(e) => setLockTime(e.target.value)}
                    className="w-full px-2 py-1 sm:px-2.5 sm:py-1.5 rounded bg-white dark:bg-[#150a2b] border border-[#CBD5E1] dark:border-purple-500/30 text-[#111218] dark:text-white font-mono text-[11px] sm:text-xs focus:outline-none focus:border-emerald-500 shadow-sm"
                  />
                </div>
                <div>
                  <label className="text-[9px] sm:text-[10px] font-mono text-[#626775] dark:text-slate-400 uppercase block mb-1 font-semibold">
                    Unlock Time
                  </label>
                  <input
                    type="time"
                    value={unlockTime}
                    onChange={(e) => setUnlockTime(e.target.value)}
                    className="w-full px-2 py-1 sm:px-2.5 sm:py-1.5 rounded bg-white dark:bg-[#150a2b] border border-[#CBD5E1] dark:border-purple-500/30 text-[#111218] dark:text-white font-mono text-[11px] sm:text-xs focus:outline-none focus:border-emerald-500 shadow-sm"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 flex flex-col items-start">
              <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest text-emerald-800 dark:text-brand-green uppercase mb-1.5 sm:mb-2">
                05 — OPERATING SCHEDULES
              </span>
              <h3 className="text-xl sm:text-3xl font-extrabold text-[#111218] dark:text-white mb-2 sm:mb-3">
                Coordinate access with your
                <br />
                <span className="text-gradient-purple">operating schedule.</span>
              </h3>
              <p className="text-[#4b5262] dark:text-slate-300 text-xs sm:text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                Automate facility routines effortlessly. Configure recurring schedules for lecture halls, laboratories, or private offices, while keeping authorized early biometric overrides active.
              </p>
              <div className="p-3 sm:p-4 rounded-xl bg-[#F8FAFC] dark:bg-[#110724] border border-[#CBD5E1] dark:border-purple-500/20 w-full flex items-center justify-between text-xs font-mono gap-2 shadow-sm">
                <span className="text-[11px] sm:text-xs text-[#111218] dark:text-slate-300 font-bold">Early Arrival:</span>
                <span className="text-[10px] sm:text-xs text-emerald-700 dark:text-brand-green font-bold">Biometric Override Active</span>
              </div>
            </div>
          </div>

          {/* 06 — PHONE CONNECTIVITY */}
          <div className="rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-10 bg-white dark:bg-gradient-to-br dark:from-[#130926]/90 dark:via-[#0c0419]/95 dark:to-[#06020f] border border-[#D9DCE5] dark:border-purple-500/30 shadow-xl dark:shadow-2xl backdrop-blur-xl grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            <div className="lg:col-span-6 flex flex-col items-start order-2 lg:order-1">
              <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest text-cyan-800 dark:text-brand-cyan uppercase mb-1.5 sm:mb-2">
                06 — MOBILE SYNCHRONIZATION
              </span>
              <h3 className="text-xl sm:text-3xl font-extrabold text-[#111218] dark:text-white mb-2 sm:mb-3">
                Bring door status, room state,
                <br />
                <span className="text-gradient-cyan">and devices together.</span>
              </h3>
              <p className="text-[#4b5262] dark:text-slate-300 text-xs sm:text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                Review live lock state, occupancy confirmation, circuit status, and recent access history from a clean companion mobile interface.
              </p>
              <a
                href="#dashboard"
                className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs font-mono font-bold bg-white dark:bg-surface-100 hover:bg-slate-50 dark:hover:bg-surface-50 border border-cyan-400 dark:border-brand-cyan/40 text-cyan-800 dark:text-brand-cyan shadow-sm transition-all"
              >
                <span>Preview Phone Dashboard</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="lg:col-span-6 relative p-4 sm:p-6 lg:p-8 rounded-2xl bg-[#EEF2F9] dark:bg-[#090414] border border-cyan-400/50 dark:border-cyan-500/30 overflow-hidden min-h-[280px] flex flex-col items-center justify-center order-1 lg:order-2 shadow-sm">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-white dark:bg-[#13082a] border border-purple-300 dark:border-purple-500/40 flex items-center justify-center shadow-md">
                  <Radio className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600 dark:text-brand-purple-glow" />
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 dark:bg-brand-cyan animate-ping" />
                  <span className="w-6 sm:w-8 h-[2px] bg-gradient-to-r from-purple-500 to-cyan-500" />
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 dark:bg-brand-cyan animate-ping" />
                </div>
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-white dark:bg-[#091f24] border border-cyan-400 dark:border-brand-cyan/50 flex items-center justify-center shadow-md">
                  <Smartphone className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-600 dark:text-brand-cyan" />
                </div>
              </div>
              <div className="mt-4 sm:mt-6 text-center">
                <div className="text-[11px] sm:text-xs font-mono font-bold text-[#111218] dark:text-white">
                  END-TO-END ENCRYPTED TELEMETRY
                </div>
                <div className="text-[9px] sm:text-[11px] font-mono text-[#626775] dark:text-slate-400 mt-1 font-medium">
                  Bluetooth LE direct pair + Optional WiFi facility gateway
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
