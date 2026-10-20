"use client";

import React, { useState } from "react";
import {
  Smartphone,
  Lock,
  Unlock,
  ShieldCheck,
  Zap,
  Clock,
  BatteryCharging,
  Wifi,
  Signal,
  Bell,
  History,
  Activity,
  Lightbulb,
  Fan,
  Wind,
} from "lucide-react";

export default function PhoneDashboardSection() {
  const [appLocked, setAppLocked] = useState<boolean>(true);
  const [appLights, setAppLights] = useState<boolean>(false);
  const [appFan, setAppFan] = useState<boolean>(false);
  const [appAc, setAppAc] = useState<boolean>(false);

  return (
    <section id="dashboard" className="py-16 sm:py-24 relative overflow-hidden bg-[#070311]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[550px] lg:w-[750px] h-[350px] sm:h-[550px] lg:h-[750px] max-w-full bg-brand-purple/15 blur-[120px] sm:blur-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/70 border border-purple-500/30 backdrop-blur-md mb-4">
            <Smartphone className="w-3.5 h-3.5 text-brand-cyan" />
            <span className="text-[11px] sm:text-xs font-mono font-medium text-purple-200 uppercase tracking-wider">
              REMOTE COMPANION APP
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            YOUR ROOM.
            <br />
            <span className="text-gradient-purple">YOUR RULES. ANYWHERE.</span>
          </h2>

          <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-slate-300">
            Monitor door locks, verified vacancy, and connected appliance circuits in real time. Full administrative visibility packed into an architectural mobile companion.
          </p>
        </div>

        {/* Smartphone Mockup & Surrounding Floating Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
          {/* Left Floating Cards (3 Cols) */}
          <div className="lg:col-span-3 space-y-3 sm:space-y-4 order-2 lg:order-1">
            {/* 1. Security Alerts Floating Panel */}
            <div className="rounded-2xl p-3.5 sm:p-4 bg-[#110724]/90 border border-purple-500/30 shadow-xl backdrop-blur-xl">
              <div className="flex items-center justify-between mb-2.5 sm:mb-3 text-xs font-mono">
                <span className="flex items-center gap-1.5 text-brand-green font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  SECURITY OVERWATCH
                </span>
                <span className="w-2 h-2 rounded-full bg-brand-green animate-ping" />
              </div>
              <div className="space-y-2 text-xs font-mono">
                <div className="p-2 sm:p-2.5 rounded-lg bg-black/40 border border-purple-500/15">
                  <div className="text-white font-bold text-xs sm:text-sm">Perimeter Secured</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">Optical threshold clear</div>
                </div>
                <div className="p-2 sm:p-2.5 rounded-lg bg-black/40 border border-purple-500/15">
                  <div className="text-white font-bold text-xs sm:text-sm">Tamper Sensor Normal</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">Zero vibration anomalies</div>
                </div>
              </div>
            </div>

            {/* 2. Occupancy Graph / Radar Panel */}
            <div className="rounded-2xl p-3.5 sm:p-4 bg-[#110724]/90 border border-cyan-500/30 shadow-xl backdrop-blur-xl">
              <div className="flex items-center justify-between mb-2 text-xs font-mono">
                <span className="flex items-center gap-1.5 text-brand-cyan font-semibold">
                  <Activity className="w-3.5 h-3.5" />
                  OCCUPANCY TREND
                </span>
                <span className="text-[10px] text-slate-400">TODAY</span>
              </div>
              <div className="text-base sm:text-lg font-mono font-bold text-white mb-2">
                0 Occupants <span className="text-xs text-brand-green font-normal">(Verified)</span>
              </div>
              <div className="flex items-end gap-1 h-10 sm:h-12 pt-2">
                {[20, 45, 80, 95, 70, 85, 30, 0, 0, 0].map((val, i) => (
                  <div
                    key={i}
                    style={{ height: `${val}%` }}
                    className={`flex-1 rounded-t transition-all ${
                      val === 0 ? "bg-brand-green/30" : "bg-purple-500/60"
                    }`}
                  />
                ))}
              </div>
              <div className="flex justify-between text-[8px] sm:text-[9px] font-mono text-slate-400 mt-1">
                <span>08:00</span>
                <span>12:00</span>
                <span>19:00 (Vacated)</span>
              </div>
            </div>
          </div>

          {/* Center Smartphone Mockup (6 Cols) */}
          <div className="lg:col-span-6 flex justify-center order-1 lg:order-2 w-full">
            {/* Physical Phone Frame */}
            <div className="relative w-full max-w-[280px] xs:max-w-[310px] sm:max-w-[350px] rounded-[36px] sm:rounded-[44px] p-2.5 sm:p-3 bg-gradient-to-b from-[#2b1747] via-[#150a2b] to-[#080211] border-[3px] border-purple-400/30 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)]">
              <div className="absolute inset-0 rounded-[36px] sm:rounded-[44px] border border-white/10 pointer-events-none" />

              {/* Dynamic Island / Speaker Notch */}
              <div className="absolute top-5 sm:top-6 left-1/2 -translate-x-1/2 w-24 sm:w-28 h-4 sm:h-5 bg-black rounded-full z-30 flex items-center justify-between px-2.5 sm:px-3">
                <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-slate-900 border border-slate-800" />
                <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#0a1829] flex items-center justify-center">
                  <div className="w-1 h-1 rounded-full bg-brand-cyan" />
                </div>
              </div>

              {/* Phone Screen Glass */}
              <div className="relative w-full rounded-[28px] sm:rounded-[36px] bg-[#090413] border border-purple-500/25 overflow-hidden text-left p-3.5 sm:p-5 pt-7 sm:pt-8 min-h-[520px] sm:min-h-[580px] flex flex-col justify-between">
                {/* Mobile Status Bar */}
                <div className="flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-slate-400 pb-2 border-b border-purple-900/30">
                  <span>09:41</span>
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <Signal className="w-3 h-3 text-slate-300" />
                    <Wifi className="w-3 h-3 text-slate-300" />
                    <BatteryCharging className="w-3.5 h-3.5 text-brand-green" />
                  </div>
                </div>

                {/* App Brand Header */}
                <div className="mt-2.5 sm:mt-3 flex items-center justify-between">
                  <div>
                    <div className="text-[9px] sm:text-[10px] font-mono text-brand-green tracking-wider uppercase">
                      SMARTSHUT / CONCEPT UI
                    </div>
                    <div className="text-sm sm:text-base font-bold text-white font-mono mt-0.5">
                      ROOM 402 DASHBOARD
                    </div>
                  </div>
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-purple-900/50 border border-purple-500/40 flex items-center justify-center">
                    <Bell className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-300" />
                  </div>
                </div>

                {/* Quick Status Pill Deck */}
                <div className="mt-3 sm:mt-4 grid grid-cols-2 gap-2 text-xs font-mono">
                  <div className="p-2 sm:p-2.5 rounded-xl bg-[#130728] border border-purple-500/30 flex items-center justify-between">
                    <div>
                      <div className="text-[8px] sm:text-[9px] text-slate-400 uppercase">Lock Status</div>
                      <div className="font-bold text-white text-xs sm:text-sm mt-0.5">
                        {appLocked ? "Locked" : "Unlocked"}
                      </div>
                    </div>
                    <button
                      onClick={() => setAppLocked(!appLocked)}
                      className="p-1 sm:p-1.5 rounded-lg bg-purple-900/60 text-brand-green hover:bg-purple-800"
                      title="Toggle lock"
                    >
                      {appLocked ? <Lock className="w-3.5 h-3.5" /> : <Unlock className="w-3.5 h-3.5 text-amber-400" />}
                    </button>
                  </div>

                  <div className="p-2 sm:p-2.5 rounded-xl bg-[#130728] border border-purple-500/30">
                    <div className="text-[8px] sm:text-[9px] text-slate-400 uppercase">Occupancy</div>
                    <div className="font-bold text-brand-green text-xs sm:text-sm mt-0.5 truncate">
                      Empty · Verified
                    </div>
                  </div>
                </div>

                {/* Energy Status Banner */}
                <div className="mt-2.5 sm:mt-3 p-2.5 sm:p-3 rounded-xl bg-gradient-to-r from-emerald-950/50 to-[#0e211b] border border-brand-green/40 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-green animate-pulse" />
                    <div>
                      <div className="text-[11px] sm:text-xs font-bold text-brand-green font-mono">ENERGY: SAVING</div>
                      <div className="text-[8px] sm:text-[9px] text-slate-300 font-mono">Overnight sleep mode active</div>
                    </div>
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-mono px-1.5 sm:px-2 py-0.5 rounded bg-brand-green/20 text-brand-green font-bold">
                    STANDBY
                  </span>
                </div>

                {/* Device Relays */}
                <div className="mt-2.5 sm:mt-3 space-y-1.5 sm:space-y-2">
                  <div className="text-[9px] sm:text-[10px] font-mono uppercase text-slate-400 tracking-wider">
                    Non-Essential Relays (Demo)
                  </div>

                  <div className="flex items-center justify-between p-1.5 sm:p-2 rounded-lg bg-black/40 border border-purple-500/20 text-[11px] sm:text-xs font-mono">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <Lightbulb className={`w-3.5 h-3.5 ${appLights ? "text-amber-300" : "text-slate-500"}`} />
                      <span className="text-slate-200">LIGHTS</span>
                    </div>
                    <button
                      onClick={() => setAppLights(!appLights)}
                      className={`px-2 py-0.5 rounded text-[9px] sm:text-[10px] font-bold transition-all ${
                        appLights
                          ? "bg-amber-400/20 text-amber-300 border border-amber-400"
                          : "bg-slate-800 text-slate-400"
                      }`}
                    >
                      {appLights ? "ON" : "OFF"}
                    </button>
                  </div>

                  <div className="flex items-center justify-between p-1.5 sm:p-2 rounded-lg bg-black/40 border border-purple-500/20 text-[11px] sm:text-xs font-mono">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <Fan className={`w-3.5 h-3.5 ${appFan ? "text-purple-300 animate-spin" : "text-slate-500"}`} />
                      <span className="text-slate-200">CEILING FAN</span>
                    </div>
                    <button
                      onClick={() => setAppFan(!appFan)}
                      className={`px-2 py-0.5 rounded text-[9px] sm:text-[10px] font-bold transition-all ${
                        appFan
                          ? "bg-purple-900/60 text-purple-200 border border-purple-500"
                          : "bg-slate-800 text-slate-400"
                      }`}
                    >
                      {appFan ? "ON" : "OFF"}
                    </button>
                  </div>

                  <div className="flex items-center justify-between p-1.5 sm:p-2 rounded-lg bg-black/40 border border-purple-500/20 text-[11px] sm:text-xs font-mono">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <Wind className={`w-3.5 h-3.5 ${appAc ? "text-brand-cyan" : "text-slate-500"}`} />
                      <span className="text-slate-200">HVAC AIR COND.</span>
                    </div>
                    <button
                      onClick={() => setAppAc(!appAc)}
                      className={`px-2 py-0.5 rounded text-[9px] sm:text-[10px] font-bold transition-all ${
                        appAc
                          ? "bg-cyan-950/60 text-cyan-300 border border-cyan-500"
                          : "bg-slate-800 text-slate-400"
                      }`}
                    >
                      {appAc ? "COOLING" : "OFF"}
                    </button>
                  </div>
                </div>

                {/* Scheduled Unlock & Saved */}
                <div className="mt-2.5 sm:mt-3 pt-2 sm:pt-3 border-t border-purple-900/30 flex items-center justify-between text-xs font-mono">
                  <div>
                    <div className="text-[8px] sm:text-[9px] text-slate-400 uppercase">Scheduled Unlock</div>
                    <div className="font-bold text-white flex items-center gap-1 mt-0.5 text-[11px] sm:text-xs">
                      <Clock className="w-3 h-3 text-brand-cyan" />
                      9:00 AM
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[8px] sm:text-[9px] text-slate-400 uppercase">Circuit Mode</div>
                    <div className="font-bold text-brand-green mt-0.5 text-[11px] sm:text-xs">
                      SECURITY ACTIVE
                    </div>
                  </div>
                </div>

                <div className="mt-2 sm:mt-3 pt-1.5 sm:pt-2 text-center border-t border-purple-900/20 text-[9px] font-mono text-purple-300/80 bg-purple-950/30 rounded px-2 py-1">
                  Illustrative demo data — not live data.
                </div>
              </div>
            </div>
          </div>

          {/* Right Floating Cards (3 Cols) */}
          <div className="lg:col-span-3 space-y-3 sm:space-y-4 order-3">
            <div className="rounded-2xl p-3.5 sm:p-4 bg-[#110724]/90 border border-purple-500/30 shadow-xl backdrop-blur-xl">
              <div className="flex items-center justify-between mb-2.5 sm:mb-3 text-xs font-mono">
                <span className="flex items-center gap-1.5 text-purple-200 font-semibold">
                  <History className="w-3.5 h-3.5" />
                  ACCESS AUDIT TRAIL
                </span>
                <span className="text-[9px] sm:text-[10px] text-slate-400">ENCRYPTED</span>
              </div>
              <div className="space-y-2 text-xs font-mono">
                <div className="p-2 rounded-lg bg-black/40 border border-purple-500/15">
                  <div className="flex justify-between text-white font-bold text-xs sm:text-sm">
                    <span>Prof. Harrison</span>
                    <span className="text-slate-400 text-[10px]">19:04</span>
                  </div>
                  <div className="text-[10px] text-brand-green">Biometric Locked & Vacated</div>
                </div>
                <div className="p-2 rounded-lg bg-black/40 border border-purple-500/15">
                  <div className="flex justify-between text-white font-bold text-xs sm:text-sm">
                    <span>Assistant Sarah</span>
                    <span className="text-slate-400 text-[10px]">14:15</span>
                  </div>
                  <div className="text-[10px] text-brand-cyan">Biometric Unlocked</div>
                </div>
                <div className="p-2 rounded-lg bg-black/40 border border-purple-500/15">
                  <div className="flex justify-between text-white font-bold text-xs sm:text-sm">
                    <span>Facility Schedule</span>
                    <span className="text-slate-400 text-[10px]">09:00</span>
                  </div>
                  <div className="text-[10px] text-purple-300">Automated Morning Unlock</div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl p-3.5 sm:p-4 bg-[#110724]/90 border border-brand-green/30 shadow-xl backdrop-blur-xl">
              <div className="flex items-center justify-between mb-2 text-xs font-mono">
                <span className="flex items-center gap-1.5 text-brand-green font-semibold">
                  <Zap className="w-3.5 h-3.5" />
                  POWER ISOLATION
                </span>
                <span className="text-[10px] text-brand-green font-bold">SAFE</span>
              </div>
              <p className="text-[11px] sm:text-xs text-slate-300 font-mono leading-relaxed">
                Essential fire sensors and egress lighting remain fully energized 24/7.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
