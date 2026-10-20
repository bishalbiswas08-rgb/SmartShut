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
    title: "PERSON EXITS",
    sub: "The room may become unoccupied.",
    description:
      "An occupant leaves the room. Bidirectional optical sensors register transit through the doorway threshold.",
    icon: UserMinus,
    safetyRule: "RULE: Transit alone does not trigger power down. Occupancy verification is always mandatory.",
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
    title: "VERIFY OCCUPANCY",
    sub: "The system checks that the room is empty.",
    description:
      "Wide-angle camera algorithms scan the interior volume to confirm zero human presence, checking for motionless occupants or obstructed areas.",
    icon: ScanEye,
    safetyRule: "CRITICAL: If occupancy is detected, energy shutdown is strictly prohibited.",
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
    title: "CONFIRM AUTHORIZED LOCKING",
    sub: "The door is locked and the required conditions are satisfied.",
    description:
      "The departing occupant locks the door via biometric sensor or physical key. The motorized deadbolt engages securely.",
    icon: Fingerprint,
    safetyRule: "RULE: If the door is unlocked, energy shutdown is strictly prohibited.",
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
    title: "MANAGE CONNECTED DEVICES",
    sub: "Selected non-essential devices switch off when the conditions permit.",
    description:
      "When the room is verified empty and the door is locked, SmartShut signals connected relays to turn off lights, fans, and air conditioning.",
    icon: ZapOff,
    safetyRule: "ESSENTIAL CIRCUITS: Fire sensors, life-safety alarms, and emergency egress lighting never disconnect.",
    visualDetails: {
      stateLabel: "POWER CUTOFF ACTIVE",
      lockStatus: "LOCKED",
      occupancyStatus: "EMPTY",
      energyStatus: "SAVING MODE (CIRCUITS ISOLATED)",
      securityStatus: "CONTINUOUS DEFENSE",
    },
  },
  {
    step: "05",
    title: "KEEP MONITORING ACTIVE",
    sub: "Security monitoring and essential safety systems remain active.",
    description:
      "While eligible non-essential electronics are powered off, security monitoring, perimeter sensors, and essential safety systems stay permanently powered.",
    icon: ShieldCheck,
    safetyRule: "CONTINUOUS PROTECTION: Optical perimeter sensors and hardware tamper detection stay fully energized.",
    visualDetails: {
      stateLabel: "OVERWATCH ONLINE",
      lockStatus: "LOCKED",
      occupancyStatus: "SECURED EMPTY",
      energyStatus: "LOW-POWER STANDBY (ACTIVE)",
      securityStatus: "ACTIVE RADAR PULSE",
    },
  },
  {
    step: "06",
    title: "AUTHORIZE THE NEXT ENTRY",
    sub: "Access follows the configured authorization and scheduling rules.",
    description:
      "Access follows configured authorization and scheduling rules (such as 9:00 AM auto-unlock or authorized fingerprint scan), seamlessly restoring comfort.",
    icon: CalendarClock,
    safetyRule: "EGRESS OVERRIDE: The interior manual handle provides immediate physical exit at all times.",
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
    <section id="how-it-works" className="py-16 sm:py-24 relative overflow-hidden bg-[#080414]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[500px] h-[280px] sm:h-[500px] max-w-[90vw] bg-brand-purple/15 blur-[120px] sm:blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[260px] sm:w-[400px] h-[260px] sm:h-[400px] max-w-[90vw] bg-brand-green/10 blur-[100px] sm:blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/70 border border-purple-500/30 backdrop-blur-md mb-4">
            <span className="w-2 h-2 rounded-full bg-brand-green" />
            <span className="text-[11px] sm:text-xs font-mono font-medium text-purple-200 uppercase tracking-wider">
              OPERATIONAL LOGIC
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            HOW SMARTSHUT
            <br />
            <span className="text-gradient-green">THINKS & ACTS.</span>
          </h2>

          <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-slate-300">
            A fail-safe 6-stage automation pipeline. SmartShut never turns off power while someone is inside, and requires both physical lock engagement and occupancy verification.
          </p>
        </div>

        {/* 6-Step Horizontal Progress Ribbon */}
        <div className="mb-8 sm:mb-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 sm:gap-3">
            {steps.map((s, index) => {
              const isCurrent = activeStepIndex === index;
              const isPast = activeStepIndex > index;
              return (
                <button
                  key={s.step}
                  onClick={() => setActiveStepIndex(index)}
                  className={`p-2.5 sm:p-3 rounded-xl text-left border transition-all flex flex-col justify-between ${
                    isCurrent
                      ? "bg-purple-900/60 border-brand-green shadow-[0_0_20px_rgba(0,245,155,0.2)]"
                      : isPast
                      ? "bg-[#100724]/90 border-brand-green/40 text-slate-300"
                      : "bg-[#0b0518]/70 border-purple-500/20 text-slate-500 hover:text-slate-300 hover:border-purple-400/40"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                    <span
                      className={`text-[11px] sm:text-xs font-mono font-bold ${
                        isCurrent ? "text-brand-green" : isPast ? "text-emerald-400" : "text-purple-400"
                      }`}
                    >
                      {s.step}
                    </span>
                    <s.icon
                      className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${
                        isCurrent ? "text-brand-green animate-pulse" : "opacity-60"
                      }`}
                    />
                  </div>
                  <div className="text-[10px] sm:text-[11px] font-bold tracking-tight text-white line-clamp-1">
                    {s.title}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Detailed Stage Visualizer Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-10 bg-gradient-to-b from-[#160c2e]/90 via-[#0e061e]/95 to-[#06020f] border border-purple-500/30 shadow-2xl backdrop-blur-xl">
          {/* Left Column: Stage Explanation & Safety Rule */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/80 border border-brand-green/30 text-brand-green font-mono text-[10px] sm:text-xs font-semibold mb-3 sm:mb-4">
                <span>STAGE {activeStep.step} OF 06</span>
              </div>

              <h3 className="text-xl sm:text-3xl font-extrabold text-white mb-1.5 sm:mb-2">
                {activeStep.title}
              </h3>

              <div className="text-xs sm:text-sm font-semibold text-brand-green mb-3 sm:mb-4">
                &ldquo;{activeStep.sub}&rdquo;
              </div>

              <p className="text-slate-300 text-xs sm:text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                {activeStep.description}
              </p>

              {/* Safety Rule Callout Box */}
              {activeStep.safetyRule && (
                <div className="p-3 sm:p-4 rounded-xl bg-amber-950/30 border border-amber-500/40 flex items-start gap-2.5 sm:gap-3 mb-4 sm:mb-6">
                  <ShieldAlert className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div className="text-[11px] sm:text-xs font-mono text-amber-200 leading-relaxed">
                    {activeStep.safetyRule}
                  </div>
                </div>
              )}
            </div>

            {/* Stepper Buttons */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-4 border-t border-purple-500/20">
              <button
                disabled={activeStepIndex === 0}
                onClick={() => setActiveStepIndex(Math.max(0, activeStepIndex - 1))}
                className="px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl text-[11px] sm:text-xs font-mono bg-surface-100 hover:bg-surface-50 text-slate-300 disabled:opacity-30 disabled:cursor-not-allowed border border-purple-500/20 transition-all"
              >
                Previous Stage
              </button>
              <button
                disabled={activeStepIndex === steps.length - 1}
                onClick={() => setActiveStepIndex(Math.min(steps.length - 1, activeStepIndex + 1))}
                className="px-4 py-1.5 sm:px-5 sm:py-2 rounded-xl text-[11px] sm:text-xs font-mono bg-gradient-to-r from-brand-green to-[#27fcae] text-black font-semibold hover:shadow-lg disabled:opacity-30 disabled:cursor-not-allowed transition-all flex items-center gap-1.5"
              >
                <span>Next Stage</span>
                <ArrowRight className="w-3.5 h-3.5 text-black" />
              </button>
            </div>
          </div>

          {/* Right Column: Dynamic Stage Hardware Simulation */}
          <div className="lg:col-span-6 relative w-full">
            <div className="relative rounded-2xl p-3.5 sm:p-6 bg-[#0a0416] border border-purple-500/30 overflow-hidden">
              <div className="flex items-center justify-between pb-2.5 sm:pb-3 border-b border-purple-500/20 text-[10px] sm:text-xs font-mono text-purple-300">
                <span className="flex items-center gap-1.5 truncate">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-ping flex-shrink-0" />
                  <span>LIVE LOGIC EMULATOR</span>
                </span>
                <span className="text-brand-green font-bold truncate ml-2">{activeStep.visualDetails.stateLabel}</span>
              </div>

              {/* Graphical representation of the stage */}
              <div className="my-4 sm:my-6 py-5 px-3 sm:px-4 rounded-xl bg-gradient-to-b from-[#130728] to-[#080312] border border-purple-800/40 flex flex-col items-center justify-center min-h-[180px] sm:min-h-[220px] relative">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-purple-950/80 border-2 border-brand-green/60 flex items-center justify-center shadow-[0_0_30px_rgba(0,245,155,0.25)] mb-3 sm:mb-4">
                  <activeStep.icon className="w-8 h-8 sm:w-10 sm:h-10 text-brand-green" />
                  <div className="absolute inset-0 rounded-2xl border border-white/20 animate-ping opacity-20" />
                </div>

                <div className="text-xs sm:text-sm font-mono font-bold text-white text-center">
                  STAGE {activeStep.step}: {activeStep.title}
                </div>
                <div className="text-[10px] sm:text-xs font-mono text-purple-300 text-center mt-0.5">
                  {activeStep.sub}
                </div>
              </div>

              {/* Status Telemetry Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 text-xs font-mono">
                <div className="p-2.5 sm:p-3 rounded-lg bg-[#110724] border border-purple-500/20">
                  <div className="text-[9px] sm:text-[10px] text-purple-300/70 uppercase">Door Deadbolt</div>
                  <div className="font-bold text-white text-xs sm:text-sm mt-0.5 truncate">
                    {activeStep.visualDetails.lockStatus}
                  </div>
                </div>
                <div className="p-2.5 sm:p-3 rounded-lg bg-[#110724] border border-purple-500/20">
                  <div className="text-[9px] sm:text-[10px] text-purple-300/70 uppercase">Occupancy Sensor</div>
                  <div className="font-bold text-brand-cyan text-xs sm:text-sm mt-0.5 truncate">
                    {activeStep.visualDetails.occupancyStatus}
                  </div>
                </div>
                <div className="p-2.5 sm:p-3 rounded-lg bg-[#110724] border border-purple-500/20">
                  <div className="text-[9px] sm:text-[10px] text-purple-300/70 uppercase">Room Power Relay</div>
                  <div className="font-bold text-brand-green text-xs sm:text-sm mt-0.5 truncate">
                    {activeStep.visualDetails.energyStatus}
                  </div>
                </div>
                <div className="p-2.5 sm:p-3 rounded-lg bg-[#110724] border border-purple-500/20">
                  <div className="text-[9px] sm:text-[10px] text-purple-300/70 uppercase">Surveillance Array</div>
                  <div className="font-bold text-purple-200 text-xs sm:text-sm mt-0.5 truncate">
                    {activeStep.visualDetails.securityStatus}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Explicit Safety Logic Architecture Callout */}
        <div className="mt-10 sm:mt-12 p-4 sm:p-6 rounded-2xl bg-gradient-to-r from-[#140a2b]/80 via-[#0e071e]/90 to-[#070312] border border-purple-500/30">
          <div className="flex items-center gap-2 mb-3">
            <ShieldAlert className="w-4 h-4 text-brand-green" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              CORE SAFETY LOCKOUT LOGIC
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 text-xs font-mono">
            <div className="p-3 rounded-xl bg-black/40 border border-purple-500/20">
              <span className="text-amber-400 font-bold block mb-1">01. OCCUPANCY DETECTED</span>
              <span className="text-slate-300">If any human presence is detected, energy shutdown is prohibited.</span>
            </div>
            <div className="p-3 rounded-xl bg-black/40 border border-purple-500/20">
              <span className="text-amber-400 font-bold block mb-1">02. DOOR UNLOCKED</span>
              <span className="text-slate-300">If the door remains unlatched, automated shutdown is prohibited.</span>
            </div>
            <div className="p-3 rounded-xl bg-black/40 border border-purple-500/20">
              <span className="text-amber-400 font-bold block mb-1">03. UNVERIFIED SPACE</span>
              <span className="text-slate-300">If room scanning has not verified 0 occupants, shutdown is prohibited.</span>
            </div>
            <div className="p-3 rounded-xl bg-black/40 border border-brand-green/30">
              <span className="text-brand-green font-bold block mb-1">04. SAFE ACTIVATION</span>
              <span className="text-slate-300">Only when (EMPTY + VERIFIED + LOCKED) is true may energy mode engage.</span>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-purple-500/15 text-[11px] font-mono text-slate-400 leading-relaxed">
            <span className="text-purple-300 font-bold">Safety Engineering Note:</span> Camera-assisted occupancy estimation is not infallible. A production hardware deployment requires multi-sensor verification (optical + IR vectors), hardware failsafes, and life-safety compliance. Interior emergency egress is always mechanical.
          </div>
        </div>
      </div>
    </section>
  );
}
