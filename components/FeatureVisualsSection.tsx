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
  Lock,
  Unlock,
  Radio,
  Sliders,
  Bell,
  RefreshCw,
} from "lucide-react";

export default function FeatureVisualsSection() {
  // Feature 1: Fingerprint scan simulation
  const [fpState, setFpState] = useState<"idle" | "scanning" | "authorized">("authorized");

  // Feature 2: Occupancy counter simulation
  const [occupancyCount, setOccupancyCount] = useState<number>(3);

  // Feature 3: Activity Monitoring sequence
  const [motionActive, setMotionActive] = useState<boolean>(true);

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
    <section className="py-24 relative overflow-hidden bg-[#06030e]">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-brand-purple/10 blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/70 border border-purple-500/30 backdrop-blur-md mb-4">
            <span className="w-2 h-2 rounded-full bg-brand-green" />
            <span className="text-xs font-mono font-medium text-purple-200 uppercase tracking-wider">
              CORE HARDWARE CAPABILITIES
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            INTELLIGENCE BUILT
            <br />
            <span className="text-gradient-purple">INTO THE DOOR.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300">
            SmartShut transforms the traditional door into an autonomous node combining biometric physical security, visual occupancy tracking, and active circuit modulation.
          </p>
        </div>

        {/* 6 Rich Visual Feature Blocks */}
        <div className="space-y-12">
          {/* ---------------------------------------------------- */}
          {/* 01 — FINGERPRINT ACCESS */}
          {/* ---------------------------------------------------- */}
          <div className="rounded-3xl p-6 sm:p-10 bg-gradient-to-br from-[#150a2b]/90 via-[#0d051c]/95 to-[#070210] border border-purple-500/30 shadow-2xl backdrop-blur-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual Block (Left 6 Cols) */}
            <div className="lg:col-span-6 relative flex flex-col items-center justify-center p-6 sm:p-8 rounded-2xl bg-[#0a0416] border border-purple-500/25 overflow-hidden min-h-[300px]">
              <div className="absolute inset-0 bg-grid-pattern opacity-20" />

              {/* Fingerprint Scanner Stage */}
              <div className="relative z-10 flex flex-col items-center">
                <div
                  onClick={triggerScan}
                  className="relative w-28 h-28 rounded-2xl bg-purple-950/70 border-2 border-brand-green/60 flex items-center justify-center cursor-pointer shadow-[0_0_30px_rgba(0,245,155,0.25)] hover:scale-105 transition-all group"
                  title="Click to trigger biometric scan"
                >
                  <Fingerprint className="w-16 h-16 text-brand-green group-hover:scale-110 transition-transform" />

                  {/* Laser Scan Beam */}
                  {fpState === "scanning" && (
                    <div className="absolute left-0 right-0 h-1 bg-brand-green shadow-[0_0_12px_#00f59b] animate-scan-line" />
                  )}

                  {fpState === "authorized" && (
                    <div className="absolute -bottom-2 -right-2 w-7 h-7 rounded-full bg-brand-green text-black flex items-center justify-center shadow-md">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                  )}
                </div>

                {/* Progress flow status indicators */}
                <div className="mt-6 flex items-center gap-2 text-xs font-mono">
                  <span className="px-2.5 py-1 rounded bg-[#170a2f] border border-purple-500/30 text-purple-200">
                    Scan
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-brand-green" />
                  <span className="px-2.5 py-1 rounded bg-[#170a2f] border border-brand-green/40 text-brand-green font-semibold">
                    Authorized
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-brand-green" />
                  <span className="px-2.5 py-1 rounded bg-brand-green/20 border border-brand-green text-white font-bold flex items-center gap-1">
                    <Unlock className="w-3 h-3 text-brand-green" />
                    Unlocked
                  </span>
                </div>

                <button
                  onClick={triggerScan}
                  className="mt-4 text-[11px] font-mono text-purple-300 hover:text-brand-green underline flex items-center gap-1 transition-colors"
                >
                  <RefreshCw className="w-3 h-3" />
                  <span>Test Scan Simulation</span>
                </button>
              </div>

              {/* Physical Key fallback callout */}
              <div className="absolute bottom-3 left-4 flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
                <Key className="w-3.5 h-3.5 text-amber-400" />
                <span>Includes concealed mechanical key override</span>
              </div>
            </div>

            {/* Content Info (Right 6 Cols) */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <span className="text-xs font-mono font-bold tracking-widest text-brand-green uppercase mb-2">
                01 — BIOMETRIC AUTHENTICATION
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                YOUR FINGERPRINT.
                <br />
                YOUR ACCESS.
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                Registered users can unlock instantly using high-precision biometric sensing. Encrypted templates are securely stored in the door&apos;s protected silicon, guaranteeing reliable access in less than a third of a second.
              </p>
              <div className="p-4 rounded-xl bg-[#110724] border border-purple-500/20 w-full flex items-center justify-between">
                <div>
                  <div className="text-xs font-mono text-slate-300 font-semibold">
                    Failsafe Mechanical Egress
                  </div>
                  <div className="text-[11px] text-slate-400 font-mono mt-0.5">
                    Physical key slot for maintenance and emergencies
                  </div>
                </div>
                <div className="px-2.5 py-1 rounded bg-purple-900/40 text-[10px] font-mono text-purple-200 border border-purple-500/30">
                  DUAL-PATH
                </div>
              </div>
            </div>
          </div>

          {/* ---------------------------------------------------- */}
          {/* 02 — OCCUPANCY DETECTION */}
          {/* ---------------------------------------------------- */}
          <div className="rounded-3xl p-6 sm:p-10 bg-gradient-to-br from-[#130926]/90 via-[#0c0419]/95 to-[#06020f] border border-purple-500/30 shadow-2xl backdrop-blur-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Content Info (Left 6 Cols) */}
            <div className="lg:col-span-6 flex flex-col items-start order-2 lg:order-1">
              <span className="text-xs font-mono font-bold tracking-widest text-brand-cyan uppercase mb-2">
                02 — SPATIAL PERCEPTION
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                INTELLIGENT
                <br />
                OCCUPANCY DETECTION.
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                Camera-assisted entry and exit tracking estimates room population in real time. SmartShut calculates continuous headcount and guarantees that no room with occupants ever powers down.
              </p>
              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={() => setOccupancyCount(3)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono border transition-all ${
                    occupancyCount === 3
                      ? "bg-brand-cyan/20 border-brand-cyan text-brand-cyan font-bold"
                      : "bg-[#110724] text-slate-400 border-purple-500/20"
                  }`}
                >
                  Count: 03 (Class Active)
                </button>
                <button
                  onClick={() => setOccupancyCount(1)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono border transition-all ${
                    occupancyCount === 1
                      ? "bg-brand-cyan/20 border-brand-cyan text-brand-cyan font-bold"
                      : "bg-[#110724] text-slate-400 border-purple-500/20"
                  }`}
                >
                  Count: 01 (Last Person)
                </button>
                <button
                  onClick={() => setOccupancyCount(0)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono border transition-all ${
                    occupancyCount === 0
                      ? "bg-brand-green/20 border-brand-green text-brand-green font-bold"
                      : "bg-[#110724] text-slate-400 border-purple-500/20"
                  }`}
                >
                  Count: 00 (Vacant)
                </button>
              </div>
            </div>

            {/* Visual Block (Right 6 Cols) */}
            <div className="lg:col-span-6 relative p-6 sm:p-8 rounded-2xl bg-[#090414] border border-cyan-500/30 overflow-hidden min-h-[300px] flex flex-col justify-between order-1 lg:order-2">
              <div className="flex items-center justify-between pb-3 border-b border-purple-500/20 text-xs font-mono">
                <span className="flex items-center gap-2 text-brand-cyan">
                  <Eye className="w-3.5 h-3.5" />
                  OPTICAL TRANSIT ANALYZER
                </span>
                <span className="text-[10px] text-slate-400">EDGE VISION v1.4</span>
              </div>

              {/* Room Occupants Silhouettes Graphic */}
              <div className="my-6 relative flex items-center justify-center gap-6">
                {occupancyCount === 0 ? (
                  <div className="text-center py-6">
                    <span className="text-xs font-mono text-brand-green font-bold px-3 py-1 rounded bg-brand-green/10 border border-brand-green/30">
                      ROOM VACANT · CONFIRMED 00 OCCUPANTS
                    </span>
                  </div>
                ) : (
                  Array.from({ length: occupancyCount }).map((_, idx) => (
                    <div key={idx} className="flex flex-col items-center">
                      <div className="w-14 h-14 rounded-full bg-cyan-950/60 border border-brand-cyan/70 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                        <Users className="w-7 h-7 text-brand-cyan" />
                      </div>
                      <span className="text-[10px] font-mono text-cyan-200 mt-1">Person #{idx + 1}</span>
                    </div>
                  ))
                )}
              </div>

              {/* Headcount readout */}
              <div className="p-3 rounded-xl bg-black/60 border border-cyan-500/30 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-300">ESTIMATED HEADCOUNT:</span>
                <span className="text-base font-mono font-bold text-brand-cyan">
                  {occupancyCount < 10 ? `0${occupancyCount}` : occupancyCount} PEOPLE INSIDE
                </span>
              </div>
            </div>
          </div>

          {/* ---------------------------------------------------- */}
          {/* 03 — ACTIVITY MONITORING */}
          {/* ---------------------------------------------------- */}
          <div className="rounded-3xl p-6 sm:p-10 bg-gradient-to-br from-[#150a2b]/90 via-[#0d051c]/95 to-[#070210] border border-purple-500/30 shadow-2xl backdrop-blur-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual Block (Left 6 Cols) */}
            <div className="lg:col-span-6 relative p-6 sm:p-8 rounded-2xl bg-[#090413] border border-purple-500/25 overflow-hidden min-h-[300px] flex flex-col justify-between">
              <div className="flex items-center justify-between pb-3 border-b border-purple-500/20 text-xs font-mono text-purple-300">
                <span className="flex items-center gap-2">
                  <Radio className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
                  NIGHTTIME SURVEILLANCE RADAR
                </span>
                <span className="text-slate-400">IR CONTOUR</span>
              </div>

              {/* Motion sequence visual */}
              <div className="my-6 relative flex flex-col items-center justify-center">
                {/* Radar Ring */}
                <div className="relative w-36 h-36 rounded-full border border-purple-500/40 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full border border-purple-400/20 animate-ping opacity-30" />
                  <div className="w-24 h-24 rounded-full border border-brand-green/30 flex items-center justify-center">
                    <ShieldAlert className="w-10 h-10 text-purple-300" />
                  </div>
                  {/* Motion Blip */}
                  {motionActive && (
                    <div className="absolute top-4 right-6 w-3 h-3 rounded-full bg-amber-400 shadow-[0_0_10px_#f59e0b] animate-ping" />
                  )}
                </div>

                {/* Event Trail */}
                <div className="mt-6 flex items-center gap-2 text-[11px] font-mono">
                  <span className="px-2 py-1 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    MOTION DETECTED
                  </span>
                  <ArrowRight className="w-3 h-3 text-purple-400" />
                  <span className="px-2 py-1 rounded bg-purple-900/40 text-purple-200 border border-purple-500/30">
                    ACTIVITY LOGGED
                  </span>
                  <ArrowRight className="w-3 h-3 text-purple-400" />
                  <span className="px-2 py-1 rounded bg-brand-green/20 text-brand-green border border-brand-green/30">
                    OWNER ALERT
                  </span>
                </div>
              </div>

              <div className="text-[10px] font-mono text-slate-400 text-center">
                Conceptual simulation · Encrypted private optical telemetry
              </div>
            </div>

            {/* Content Info (Right 6 Cols) */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <span className="text-xs font-mono font-bold tracking-widest text-purple-400 uppercase mb-2">
                03 — OVERWATCH PROTOCOL
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                ACTIVITY MONITORING
                <br />
                THAT NEVER SLEEPS.
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                Even while room illumination and appliances are fully switched off to conserve energy, SmartShut maintains an active low-power security perimeter. Any unexpected doorway movement is timestamped and relayed to the companion app.
              </p>
              <div className="space-y-2 w-full text-xs font-mono text-slate-300">
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#110724] border border-purple-500/20">
                  <Bell className="w-4 h-4 text-purple-400" />
                  <span>Real-time push alerts on unexpected off-hours movement</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#110724] border border-purple-500/20">
                  <CheckCircle2 className="w-4 h-4 text-brand-green" />
                  <span>Zero cloud dependency — local edge log storage</span>
                </div>
              </div>
            </div>
          </div>

          {/* ---------------------------------------------------- */}
          {/* 04 — ENERGY MANAGEMENT */}
          {/* ---------------------------------------------------- */}
          <div className="rounded-3xl p-6 sm:p-10 bg-gradient-to-br from-[#130926]/90 via-[#0c0419]/95 to-[#06020f] border border-purple-500/30 shadow-2xl backdrop-blur-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Content Info (Left 6 Cols) */}
            <div className="lg:col-span-6 flex flex-col items-start order-2 lg:order-1">
              <span className="text-xs font-mono font-bold tracking-widest text-brand-green uppercase mb-2">
                04 — POWER MODULATION
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                AUTOMATED ENERGY
                <br />
                MANAGEMENT.
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                When the room is verified empty, locked by an authorized credential, and checked for clear corridors: connected non-essential circuits turn off instantly.
              </p>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setEnergyState("occupied")}
                  className={`px-4 py-2 rounded-xl text-xs font-mono border transition-all ${
                    energyState === "occupied"
                      ? "bg-amber-500/20 border-amber-500 text-amber-300 font-bold"
                      : "bg-[#110724] text-slate-400 border-purple-500/20"
                  }`}
                >
                  Room Occupied (Devices On)
                </button>
                <button
                  onClick={() => setEnergyState("saving")}
                  className={`px-4 py-2 rounded-xl text-xs font-mono border transition-all ${
                    energyState === "saving"
                      ? "bg-brand-green/20 border-brand-green text-brand-green font-bold shadow-[0_0_15px_rgba(0,245,155,0.25)]"
                      : "bg-[#110724] text-slate-400 border-purple-500/20"
                  }`}
                >
                  Empty + Locked (Power Cutoff)
                </button>
              </div>
            </div>

            {/* Visual Block (Right 6 Cols) */}
            <div className="lg:col-span-6 relative p-6 sm:p-8 rounded-2xl bg-[#090414] border border-brand-green/30 overflow-hidden min-h-[300px] flex flex-col justify-between order-1 lg:order-2">
              <div className="flex items-center justify-between pb-3 border-b border-purple-500/20 text-xs font-mono text-brand-green">
                <span>ENERGY FLOW ARCHITECTURE</span>
                <span>{energyState === "saving" ? "STANDBY CUTOFF" : "FULL LOAD"}</span>
              </div>

              {/* Dynamic Flow Diagram */}
              <div className="my-6 space-y-3 font-mono text-xs">
                <div className="p-3 rounded-lg bg-[#110724] border border-purple-500/20 flex items-center justify-between">
                  <span className="text-slate-300">Room Lights Fixture</span>
                  <span className={energyState === "saving" ? "text-slate-500" : "text-amber-400 font-bold"}>
                    {energyState === "saving" ? "[RELAY OPEN / OFF]" : "[ENERGIZED / 180W]"}
                  </span>
                </div>
                <div className="p-3 rounded-lg bg-[#110724] border border-purple-500/20 flex items-center justify-between">
                  <span className="text-slate-300">Ceiling Fans (HVAC)</span>
                  <span className={energyState === "saving" ? "text-slate-500" : "text-amber-400 font-bold"}>
                    {energyState === "saving" ? "[RELAY OPEN / OFF]" : "[ENERGIZED / 150W]"}
                  </span>
                </div>
                <div className="p-3 rounded-lg bg-[#110724] border border-purple-500/20 flex items-center justify-between">
                  <span className="text-slate-300">Split AC Compressor</span>
                  <span className={energyState === "saving" ? "text-slate-500" : "text-amber-400 font-bold"}>
                    {energyState === "saving" ? "[RELAY OPEN / OFF]" : "[ENERGIZED / 1,500W]"}
                  </span>
                </div>
                <div className="p-3 rounded-lg bg-[#0c221a] border border-brand-green/40 flex items-center justify-between text-brand-green font-bold">
                  <span>SmartShut Security Sentinel</span>
                  <span>[ONLINE / 15W]</span>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs font-mono pt-2 border-t border-purple-500/15">
                <span className="text-slate-400">Total Circuit Draw:</span>
                <span className="text-sm font-bold text-brand-green">
                  {energyState === "saving" ? "15 Watts (-85%)" : "1,845 Watts (100%)"}
                </span>
              </div>
            </div>
          </div>

          {/* ---------------------------------------------------- */}
          {/* 05 — SMART SCHEDULING */}
          {/* ---------------------------------------------------- */}
          <div className="rounded-3xl p-6 sm:p-10 bg-gradient-to-br from-[#150a2b]/90 via-[#0d051c]/95 to-[#070210] border border-purple-500/30 shadow-2xl backdrop-blur-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual Block (Left 6 Cols) */}
            <div className="lg:col-span-6 relative p-6 sm:p-8 rounded-2xl bg-[#090413] border border-purple-500/25 overflow-hidden min-h-[300px] flex flex-col justify-between">
              <div className="flex items-center justify-between pb-3 border-b border-purple-500/20 text-xs font-mono text-purple-300">
                <span className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-brand-green" />
                  TIMELINE AUTOMATION
                </span>
                <span className="text-slate-400">DAILY CRON</span>
              </div>

              {/* Interactive Visual Clock / Timeline */}
              <div className="my-6 space-y-4">
                <div className="relative pl-6 border-l-2 border-brand-green/60 space-y-4 font-mono text-xs">
                  <div>
                    <span className="text-brand-green font-bold text-sm">{lockTime} (Evening)</span>
                    <p className="text-slate-300 text-[11px] mt-0.5">
                      Last user departs → Door deadbolt locks → Empty room verified → Non-essentials power down.
                    </p>
                  </div>
                  <div>
                    <span className="text-purple-300 font-bold text-sm">Overnight Safe Hold</span>
                    <p className="text-slate-400 text-[11px] mt-0.5">
                      Continuous security monitoring at minimal 15W standby consumption.
                    </p>
                  </div>
                  <div>
                    <span className="text-brand-cyan font-bold text-sm">{unlockTime} (Morning)</span>
                    <p className="text-slate-300 text-[11px] mt-0.5">
                      Scheduled automated unlock or early biometric entry restores normal room comfort.
                    </p>
                  </div>
                </div>
              </div>

              {/* Editable Demo Schedule Controls */}
              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-purple-500/20">
                <div>
                  <label className="text-[10px] font-mono text-slate-400 uppercase block mb-1">
                    Lock Time (Demo)
                  </label>
                  <input
                    type="time"
                    value={lockTime}
                    onChange={(e) => setLockTime(e.target.value)}
                    className="w-full px-2.5 py-1.5 rounded bg-[#150a2b] border border-purple-500/30 text-white font-mono text-xs focus:outline-none focus:border-brand-green"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-mono text-slate-400 uppercase block mb-1">
                    Unlock Time (Demo)
                  </label>
                  <input
                    type="time"
                    value={unlockTime}
                    onChange={(e) => setUnlockTime(e.target.value)}
                    className="w-full px-2.5 py-1.5 rounded bg-[#150a2b] border border-purple-500/30 text-white font-mono text-xs focus:outline-none focus:border-brand-green"
                  />
                </div>
              </div>
            </div>

            {/* Content Info (Right 6 Cols) */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <span className="text-xs font-mono font-bold tracking-widest text-brand-green uppercase mb-2">
                05 — TIME-BASED AUTOMATION
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                INTELLIGENT
                <br />
                SMART SCHEDULING.
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                Automate facility routines effortlessly. Configure recurring schedules for lecture halls, laboratories, or private offices. SmartShut respects scheduled windows while keeping early biometric overrides available 24/7.
              </p>
              <div className="p-4 rounded-xl bg-[#110724] border border-purple-500/20 w-full flex items-center justify-between text-xs font-mono">
                <span className="text-slate-300">Early Arrival Support:</span>
                <span className="text-brand-green font-bold">Biometric / Key Override Always Active</span>
              </div>
            </div>
          </div>

          {/* ---------------------------------------------------- */}
          {/* 06 — PHONE CONNECTIVITY */}
          {/* ---------------------------------------------------- */}
          <div className="rounded-3xl p-6 sm:p-10 bg-gradient-to-br from-[#130926]/90 via-[#0c0419]/95 to-[#06020f] border border-purple-500/30 shadow-2xl backdrop-blur-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Content Info (Left 6 Cols) */}
            <div className="lg:col-span-6 flex flex-col items-start order-2 lg:order-1">
              <span className="text-xs font-mono font-bold tracking-widest text-brand-cyan uppercase mb-2">
                06 — MOBILE SYNCHRONIZATION
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                PHONE
                <br />
                CONNECTIVITY.
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                Control your room from anywhere. Check live occupancy confirmation, review biometric unlock audit logs, inspect circuit status, and configure power rules directly from the intuitive SmartShut companion interface.
              </p>
              <a
                href="#dashboard"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono font-semibold bg-surface-100 hover:bg-surface-50 border border-brand-cyan/40 text-brand-cyan transition-all"
              >
                <span>Preview Interactive Phone Dashboard</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Visual Block (Right 6 Cols) */}
            <div className="lg:col-span-6 relative p-6 sm:p-8 rounded-2xl bg-[#090414] border border-cyan-500/30 overflow-hidden min-h-[300px] flex flex-col items-center justify-center order-1 lg:order-2">
              <div className="flex items-center gap-4">
                {/* Gateway Icon */}
                <div className="w-16 h-16 rounded-2xl bg-[#13082a] border border-purple-500/40 flex items-center justify-center">
                  <Radio className="w-8 h-8 text-brand-purple-glow" />
                </div>
                {/* Wireless Sync Waves */}
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-ping" />
                  <span className="w-8 h-[2px] bg-gradient-to-r from-purple-500 to-brand-cyan" />
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-ping" />
                </div>
                {/* Mobile Phone Mockup Icon */}
                <div className="w-16 h-16 rounded-2xl bg-[#091f24] border border-brand-cyan/50 flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                  <Smartphone className="w-8 h-8 text-brand-cyan" />
                </div>
              </div>
              <div className="mt-6 text-center">
                <div className="text-xs font-mono font-bold text-white">
                  END-TO-END ENCRYPTED TELEMETRY
                </div>
                <div className="text-[11px] font-mono text-slate-400 mt-1">
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
