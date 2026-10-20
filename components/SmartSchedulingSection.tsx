"use client";

import React, { useState } from "react";
import {
  Clock,
  Lock,
  ScanEye,
  ZapOff,
  Sun,
  KeyRound,
  Fingerprint,
  ShieldCheck,
} from "lucide-react";

interface SchedulePhase {
  time: string;
  tag: string;
  title: string;
  sub: string;
  description: string;
  icon: React.ElementType;
  badge: string;
  badgeColor: string;
}

const phases: SchedulePhase[] = [
  {
    time: "07:00 PM",
    tag: "DEPARTURE & SECURING",
    title: "LOCKING",
    sub: "Last employee leaves and locks the door.",
    description:
      "Physical deadbolt engages upon biometric touch. Transition flag is dispatched to the room logic engine.",
    icon: Lock,
    badge: "DEADBOLT ENGAGED",
    badgeColor: "text-brand-green bg-brand-green/10 border-brand-green/30",
  },
  {
    time: "07:02 PM",
    tag: "SAFETY SCAN",
    title: "VERIFICATION",
    sub: "Room confirmed empty.",
    description:
      "Dual optical & infrared scans verify zero human occupancy inside the space. Prevents accidental lock-ins.",
    icon: ScanEye,
    badge: "0 DETECTED · VERIFIED",
    badgeColor: "text-brand-cyan bg-brand-cyan/10 border-brand-cyan/30",
  },
  {
    time: "07:03 PM",
    tag: "POWER ISOLATION",
    title: "POWER DOWN",
    sub: "Selected non-essential electronics switch off.",
    description:
      "Room contactors gently open. Lights extinguish, HVAC transitions to idle, preserving only essential life safety lines.",
    icon: ZapOff,
    badge: "NON-ESSENTIAL CUTOFF",
    badgeColor: "text-purple-300 bg-purple-950/60 border-purple-500/30",
  },
  {
    time: "09:00 AM",
    tag: "SCHEDULED ARRIVAL",
    title: "SCHEDULED UNLOCK",
    sub: "Door unlocks according to authorised rules.",
    description:
      "Automated morning unlock restores daytime access and pre-conditions climate comfort prior to student or worker arrival.",
    icon: Sun,
    badge: "ACCESS RESTORED",
    badgeColor: "text-amber-400 bg-amber-500/10 border-amber-500/30",
  },
];

export default function SmartSchedulingSection() {
  const [activePhaseIndex, setActivePhaseIndex] = useState<number>(0);
  const activePhase = phases[activePhaseIndex];

  return (
    <section className="py-16 sm:py-24 relative overflow-hidden bg-[#070310]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[500px] lg:w-[650px] max-w-[90vw] h-[450px] bg-brand-purple/15 blur-[140px] sm:blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/70 border border-purple-500/30 backdrop-blur-md mb-4">
            <Clock className="w-3.5 h-3.5 text-brand-green" />
            <span className="text-[11px] sm:text-xs font-mono font-medium text-purple-200 uppercase tracking-wider">
              24-HOUR CHRONOLOGY
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            SET THE TIME.
            <br />
            <span className="text-gradient-purple">SMARTSHUT HANDLES THE REST.</span>
          </h2>

          <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-slate-300">
            A continuous loop of perimeter defense and energy stewardship. SmartShut synchronizes room power with organizational work hours.
          </p>
        </div>

        {/* Cinematic Timeline Interactive Scrubber */}
        <div className="rounded-2xl sm:rounded-3xl p-3.5 sm:p-6 lg:p-10 bg-gradient-to-b from-[#150a2c]/90 via-[#0d051c]/95 to-[#06020f] border border-purple-500/30 shadow-2xl backdrop-blur-xl">
          {/* Timeline Nodes Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
            {phases.map((item, index) => {
              const isSelected = activePhaseIndex === index;
              return (
                <button
                  key={item.title}
                  onClick={() => setActivePhaseIndex(index)}
                  className={`p-3.5 sm:p-5 rounded-2xl text-left border transition-all flex flex-col justify-between ${
                    isSelected
                      ? "bg-purple-900/60 border-brand-green shadow-[0_0_25px_rgba(0,245,155,0.25)] scale-[1.01]"
                      : "bg-[#0c0519] border-purple-500/20 text-slate-400 hover:text-white hover:border-purple-400/40"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2 sm:mb-3">
                      <span className="text-xs sm:text-sm font-mono font-bold text-brand-green">
                        {item.time}
                      </span>
                      <item.icon
                        className={`w-4 h-4 sm:w-5 sm:h-5 ${
                          isSelected ? "text-brand-green animate-pulse" : "text-slate-500"
                        }`}
                      />
                    </div>
                    <div className="text-sm sm:text-base font-bold text-white mb-1">
                      {item.title}
                    </div>
                    <div className="text-[11px] sm:text-xs text-slate-300 font-mono">
                      &ldquo;{item.sub}&rdquo;
                    </div>
                  </div>

                  <div className="mt-3 sm:mt-4 pt-2.5 sm:pt-3 border-t border-purple-500/15">
                    <span
                      className={`text-[9px] sm:text-[10px] font-mono px-2 py-0.5 rounded border inline-block ${item.badgeColor}`}
                    >
                      {item.badge}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Phase Cinematic Showcase */}
          <div className="p-4 sm:p-6 lg:p-8 rounded-2xl bg-[#080312] border border-purple-500/25 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 sm:gap-6">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-2xl bg-purple-950 border border-brand-green/60 flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_rgba(0,245,155,0.25)]">
                <activePhase.icon className="w-5 h-5 sm:w-7 sm:h-7 text-brand-green" />
              </div>
              <div>
                <div className="text-[10px] sm:text-xs font-mono text-brand-green uppercase tracking-wider">
                  {activePhase.tag} // {activePhase.time}
                </div>
                <div className="text-lg sm:text-2xl font-bold text-white mt-0.5">
                  {activePhase.title}
                </div>
                <p className="text-slate-300 text-xs sm:text-sm mt-1 sm:mt-1.5 leading-relaxed max-w-2xl font-normal">
                  {activePhase.description}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 p-2.5 sm:p-3 rounded-xl bg-[#120726] border border-purple-500/30 text-[11px] sm:text-xs font-mono text-purple-200 flex-shrink-0">
              <ShieldCheck className="w-4 h-4 text-brand-green flex-shrink-0" />
              <span>Surveillance Maintained</span>
            </div>
          </div>

          {/* Essential Callout: Earlier Biometric Override */}
          <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-purple-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[11px] sm:text-xs font-mono text-slate-300">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-purple-900/60 border border-purple-500/40 flex items-center justify-center flex-shrink-0">
                <Fingerprint className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-green" />
              </div>
              <span>
                Users can unlock earlier at any time using authorized fingerprint or physical key.
              </span>
            </div>

            <div className="flex items-center gap-1.5 text-slate-400">
              <KeyRound className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
              <span>Manual Override Guaranteed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
