"use client";

import React, { useState } from "react";
import {
  UserMinus,
  ScanEye,
  Fingerprint,
  ZapOff,
  ShieldCheck,
  CalendarClock,
  ArrowRight,
  ShieldAlert,
  Play,
  RotateCcw,
} from "lucide-react";

interface Step {
  step: string;
  title: string;
  sub: string;
  description: string;
  icon: React.ElementType;
  safetyRule?: string;
  visualDetails: {
    stateLabel: string;
    lockStatus: string;
    occupancyStatus: string;
    energyStatus: string;
    securityStatus: string;
  };
}

const steps: Step[] = [
  {
    step: "01",
    title: "LAST PERSON EXITS",
    sub: "The room becomes unoccupied.",
    description:
      "The final occupant finishes work and leaves the room. Bidirectional optical sensors register transit through the doorway threshold.",
    icon: UserMinus,
    visualDetails: {
      stateLabel: "TRANSIT OCCURRED",
      lockStatus: "UNLOCKED",
      occupancyStatus: "VACATING (0 DETECTED)",
      energyStatus: "FULL POWER (ACTIVE)",
      securityStatus: "MONITORING LOBBY",
    },
  },
  {
    step: "02",
    title: "VERIFY THE ROOM IS EMPTY",
    sub: "Occupancy is checked before shutdown.",
    description:
      "Wide-angle camera algorithms scan the interior volume to confirm zero human presence, ruling out motionless persons or blind spots.",
    icon: ScanEye,
    safetyRule: "CRITICAL: If any person is detected, automated power shutdown is immediately halted.",
    visualDetails: {
      stateLabel: "VISION SCAN RUNNING",
      lockStatus: "UNLOCKED",
      occupancyStatus: "VERIFIED EMPTY (0)",
      energyStatus: "AWAITING LOCK CONFIRMATION",
      securityStatus: "SCANNING PERIMETER",
    },
  },
  {
    step: "03",
    title: "AUTHORISED USER LOCKS",
    sub: "Empty and locked are both required.",
    description:
      "The departing occupant touches the exterior biometric sensor or utilizes their authorized credential. Motorized deadbolt engages securely.",
    icon: Fingerprint,
    safetyRule: "RULE: Energy shutdown requires BOTH confirmed empty space AND engaged physical lock.",
    visualDetails: {
      stateLabel: "BIOMETRIC CONFIRMED",
      lockStatus: "LOCKED (SECURED)",
      occupancyStatus: "VERIFIED EMPTY",
      energyStatus: "DISPATCHING SHUTDOWN SIGNAL",
      securityStatus: "ARMED & ENGAGED",
    },
  },
  {
    step: "04",
    title: "SELECTED DEVICES TURN OFF",
    sub: "Only connected, non-essential devices.",
    description:
      "SmartShut signals connected relays. Overhead illumination fades out, ceiling fans decelerate to a stop, and air conditioning pauses.",
    icon: ZapOff,
    safetyRule: "ESSENTIAL CIRCUITS: Fire sensors, life-safety alarms, and emergency egress lighting never disconnect.",
    visualDetails: {
      stateLabel: "POWER CUTOFF ACTIVE",
      lockStatus: "LOCKED",
      occupancyStatus: "EMPTY",
      energyStatus: "SAVING MODE (-85% LOAD)",
      securityStatus: "CONTINUOUS DEFENSE",
    },
  },
  {
    step: "05",
    title: "MONITORING STAYS ACTIVE",
    sub: "Security continues after shutdown.",
    description:
      "With lights and fans turned off, the door's sensor array remains vigilant. An active infrared perimeter ring detects any unauthorized tampering or motion.",
    icon: ShieldCheck,
    visualDetails: {
      stateLabel: "OVERWATCH ONLINE",
      lockStatus: "LOCKED",
      occupancyStatus: "SECURED EMPTY",
      energyStatus: "LOW-POWER STANDBY (15W)",
      securityStatus: "ACTIVE RADAR PULSE",
    },
  },
  {
    step: "06",
    title: "UNLOCK MANUALLY OR BY SCHEDULE",
    sub: "Access follows authorised rules.",
    description:
      "At scheduled morning hours (e.g., 9:00 AM) or upon verified fingerprint arrival, the door unlocks smoothly and restores climate comfort.",
    icon: CalendarClock,
    safetyRule: "EGRESS OVERRIDE: Interior manual handle provides immediate physical exit at all times.",
    visualDetails: {
      stateLabel: "DAY CYCLE RESTORE",
      lockStatus: "UNLOCKED",
      occupancyStatus: "ARRIVALS WELCOMED",
      energyStatus: "POWER RESTORED",
      securityStatus: "DAYTIME LOGGING",
    },
  },
];

export default function HowItWorksSection() {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const activeStep = steps[activeStepIndex];

  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden bg-[#080414]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-brand-purple/15 blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-brand-green/10 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/70 border border-purple-500/30 backdrop-blur-md mb-4">
            <span className="w-2 h-2 rounded-full bg-brand-green" />
            <span className="text-xs font-mono font-medium text-purple-200 uppercase tracking-wider">
              OPERATIONAL LOGIC
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            HOW SMARTSHUT
            <br />
            <span className="text-gradient-green">THINKS & ACTS.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300">
            A fail-safe 6-stage automation pipeline. SmartShut never turns off power while someone is inside, and requires both physical lock engagement and occupancy verification.
          </p>
        </div>

        {/* 6-Step Horizontal Progress Ribbon */}
        <div className="mb-12">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-2 sm:gap-3">
            {steps.map((s, index) => {
              const isCurrent = activeStepIndex === index;
              const isPast = activeStepIndex > index;
              return (
                <button
                  key={s.step}
                  onClick={() => setActiveStepIndex(index)}
                  className={`p-3 rounded-xl text-left border transition-all flex flex-col justify-between ${
                    isCurrent
                      ? "bg-purple-900/60 border-brand-green shadow-[0_0_20px_rgba(0,245,155,0.2)]"
                      : isPast
                      ? "bg-[#100724]/90 border-brand-green/40 text-slate-300"
                      : "bg-[#0b0518]/70 border-purple-500/20 text-slate-500 hover:text-slate-300 hover:border-purple-400/40"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`text-xs font-mono font-bold ${
                        isCurrent ? "text-brand-green" : isPast ? "text-emerald-400" : "text-purple-400"
                      }`}
                    >
                      {s.step}
                    </span>
                    <s.icon
                      className={`w-4 h-4 ${
                        isCurrent ? "text-brand-green animate-pulse" : "opacity-60"
                      }`}
                    />
                  </div>
                  <div className="text-[11px] font-bold tracking-tight text-white line-clamp-1">
                    {s.title}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Detailed Stage Visualizer Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-3xl p-6 sm:p-10 bg-gradient-to-b from-[#160c2e]/90 via-[#0e061e]/95 to-[#06020f] border border-purple-500/30 shadow-2xl backdrop-blur-xl">
          {/* Left Column: Stage Explanation & Safety Rule */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/80 border border-brand-green/30 text-brand-green font-mono text-xs font-semibold mb-4">
                <span>STAGE {activeStep.step} OF 06</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                {activeStep.title}
              </h3>

              <div className="text-sm font-semibold text-brand-green mb-4">
                &ldquo;{activeStep.sub}&rdquo;
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                {activeStep.description}
              </p>

              {/* Safety Rule Callout Box */}
              {activeStep.safetyRule && (
                <div className="p-4 rounded-xl bg-amber-950/30 border border-amber-500/40 flex items-start gap-3 mb-6">
                  <ShieldAlert className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div className="text-xs font-mono text-amber-200 leading-relaxed">
                    {activeStep.safetyRule}
                  </div>
                </div>
              )}
            </div>

            {/* Stepper Buttons */}
            <div className="flex items-center gap-3 pt-4 border-t border-purple-500/20">
              <button
                disabled={activeStepIndex === 0}
                onClick={() => setActiveStepIndex(Math.max(0, activeStepIndex - 1))}
                className="px-4 py-2 rounded-xl text-xs font-mono bg-surface-100 hover:bg-surface-50 text-slate-300 disabled:opacity-30 disabled:cursor-not-allowed border border-purple-500/20 transition-all"
              >
                Previous Stage
              </button>
              <button
                disabled={activeStepIndex === steps.length - 1}
                onClick={() => setActiveStepIndex(Math.min(steps.length - 1, activeStepIndex + 1))}
                className="px-5 py-2 rounded-xl text-xs font-mono bg-gradient-to-r from-brand-green to-[#27fcae] text-black font-semibold hover:shadow-lg disabled:opacity-30 disabled:cursor-not-allowed transition-all flex items-center gap-1.5"
              >
                <span>Next Stage</span>
                <ArrowRight className="w-3.5 h-3.5 text-black" />
              </button>
            </div>
          </div>

          {/* Right Column: Dynamic Stage Hardware Simulation */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl p-6 bg-[#0a0416] border border-purple-500/30 overflow-hidden">
              <div className="flex items-center justify-between pb-3 border-b border-purple-500/20 text-xs font-mono text-purple-300">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-green animate-ping" />
                  LIVE LOGIC EMULATOR
                </span>
                <span className="text-brand-green">{activeStep.visualDetails.stateLabel}</span>
              </div>

              {/* Graphical representation of the stage */}
              <div className="my-6 py-6 px-4 rounded-xl bg-gradient-to-b from-[#130728] to-[#080312] border border-purple-800/40 flex flex-col items-center justify-center min-h-[220px] relative">
                {/* Visual Icon Presentation */}
                <div className="relative w-20 h-20 rounded-2xl bg-purple-950/80 border-2 border-brand-green/60 flex items-center justify-center shadow-[0_0_30px_rgba(0,245,155,0.25)] mb-4">
                  <activeStep.icon className="w-10 h-10 text-brand-green" />
                  <div className="absolute inset-0 rounded-2xl border border-white/20 animate-ping opacity-20" />
                </div>

                <div className="text-sm font-mono font-bold text-white text-center">
                  STAGE {activeStep.step}: {activeStep.title}
                </div>
                <div className="text-xs font-mono text-purple-300 text-center mt-1">
                  {activeStep.sub}
                </div>
              </div>

              {/* Status Telemetry Grid */}
              <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                <div className="p-3 rounded-lg bg-[#110724] border border-purple-500/20">
                  <div className="text-[10px] text-purple-300/70 uppercase">Door Deadbolt</div>
                  <div className="font-bold text-white mt-0.5">
                    {activeStep.visualDetails.lockStatus}
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-[#110724] border border-purple-500/20">
                  <div className="text-[10px] text-purple-300/70 uppercase">Occupancy Sensor</div>
                  <div className="font-bold text-brand-cyan mt-0.5">
                    {activeStep.visualDetails.occupancyStatus}
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-[#110724] border border-purple-500/20">
                  <div className="text-[10px] text-purple-300/70 uppercase">Room Power Relay</div>
                  <div className="font-bold text-brand-green mt-0.5">
                    {activeStep.visualDetails.energyStatus}
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-[#110724] border border-purple-500/20">
                  <div className="text-[10px] text-purple-300/70 uppercase">Surveillance Array</div>
                  <div className="font-bold text-purple-200 mt-0.5">
                    {activeStep.visualDetails.securityStatus}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
