"use client";

import React from "react";
import {
  Shield,
  Lock,
  Camera,
  Fingerprint,
  DoorOpen,
  Zap,
  FileText,
  EyeOff,
} from "lucide-react";

interface SecurityPillar {
  icon: React.ElementType;
  title: string;
  tagline: string;
  description: string;
  badge: string;
}

const pillars: SecurityPillar[] = [
  {
    icon: Fingerprint,
    title: "AUTHORIZED ACCESS",
    tagline: "Biometric and physical credential control",
    description:
      "Encrypted biometric matching computed directly on internal door hardware. Stored as non-reversible mathematical hash values rather than raw images.",
    badge: "Hardware Secure Element",
  },
  {
    icon: EyeOff,
    title: "PROTECTED CAMERA DATA",
    tagline: "Local processing with privacy priority",
    description:
      "Optical transit algorithms analyze spatial vectors at the edge. Visual feeds are processed locally for headcount estimation without transmitting unencrypted public streams.",
    badge: "Edge Vision Computing",
  },
  {
    icon: FileText,
    title: "ACTIVITY HISTORY",
    tagline: "Tamper-evident access audit logs",
    description:
      "Every lock, unlock, and anomalous vibration event is logged locally with cryptographic timestamps, giving facility managers clear accountability.",
    badge: "Cryptographic Event Trail",
  },
  {
    icon: DoorOpen,
    title: "EMERGENCY MANUAL ACCESS",
    tagline: "Immediate physical interior egress",
    description:
      "In accordance with architectural life-safety codes, the interior handle mechanically retracts the latch regardless of electrical or logic status.",
    badge: "Mechanical Failsafe Exit",
  },
  {
    icon: Zap,
    title: "ESSENTIAL SYSTEMS POWERED",
    tagline: "Critical circuits never disconnect",
    description:
      "Smoke detectors, emergency lighting, perimeter sensors, and essential safety relays bypass the automated room shutdown completely.",
    badge: "Isolated Safety Bus",
  },
];

export default function SecurityPrivacySection() {
  return (
    <section className="py-16 sm:py-24 relative overflow-hidden bg-[#05020c]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] lg:w-[700px] max-w-full h-[500px] bg-brand-cyan/10 blur-[140px] sm:blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 backdrop-blur-md mb-4">
            <Shield className="w-3.5 h-3.5 text-brand-cyan" />
            <span className="text-[11px] sm:text-xs font-mono font-medium text-cyan-200 uppercase tracking-wider">
              PRAGMATIC SECURITY
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            SMART DOESN&apos;T MEAN
            <br />
            <span className="text-gradient-purple">CARELESS.</span>
          </h2>

          <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-slate-300">
            Energy efficiency never compromises physical safety or personal privacy. SmartShut is architected with fail-safes, local edge data boundaries, and mechanical emergency exit.
          </p>
        </div>

        {/* Security Field Architectural Schematic */}
        <div className="rounded-2xl sm:rounded-3xl p-3.5 sm:p-6 lg:p-10 bg-gradient-to-b from-[#140926]/90 via-[#0d051c]/95 to-[#06020f] border border-purple-500/30 shadow-2xl backdrop-blur-xl mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            {/* Visual Schematic Diagram (Left 5 Cols) */}
            <div className="lg:col-span-5 relative flex items-center justify-center p-4 sm:p-8 rounded-2xl bg-[#090413] border border-cyan-500/30 overflow-hidden">
              <div className="absolute inset-0 bg-dot-pattern opacity-25" />

              {/* Security Shield Field Graphic */}
              <div className="relative z-10 flex flex-col items-center">
                {/* Outer Security Field Ring */}
                <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full border-2 border-brand-cyan/40 flex items-center justify-center shadow-[0_0_35px_rgba(6,182,212,0.25)]">
                  <div className="absolute inset-2 rounded-full border border-purple-500/30 animate-ping opacity-20" />
                  
                  {/* Center Shield Node */}
                  <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-br from-[#12232c] to-[#0a121d] border border-brand-cyan/60 flex items-center justify-center shadow-inner">
                    <Shield className="w-10 h-10 sm:w-14 sm:h-14 text-brand-cyan animate-pulse" />
                  </div>

                  {/* Orbiting Satellite Security Nodes */}
                  <div className="absolute top-0 -translate-y-1/2 p-1.5 sm:p-2 rounded-full bg-black border border-brand-green shadow-md">
                    <Lock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-green" />
                  </div>
                  <div className="absolute bottom-0 translate-y-1/2 p-1.5 sm:p-2 rounded-full bg-black border border-purple-400 shadow-md">
                    <DoorOpen className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-300" />
                  </div>
                  <div className="absolute left-0 -translate-x-1/2 p-1.5 sm:p-2 rounded-full bg-black border border-cyan-400 shadow-md">
                    <Fingerprint className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-300" />
                  </div>
                  <div className="absolute right-0 translate-x-1/2 p-1.5 sm:p-2 rounded-full bg-black border border-brand-green shadow-md">
                    <Camera className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-green" />
                  </div>
                </div>

                <div className="mt-4 sm:mt-6 text-center font-mono">
                  <div className="text-[11px] sm:text-xs font-bold text-white tracking-wider">
                    MULTI-LAYER PRIVACY & EGRESS
                  </div>
                  <div className="text-[9px] sm:text-[10px] text-brand-cyan mt-0.5">
                    Continuous Hardware Supervision
                  </div>
                </div>
              </div>
            </div>

            {/* Pillar List Overview (Right 7 Cols) */}
            <div className="lg:col-span-7 space-y-3 sm:space-y-4">
              {pillars.slice(0, 3).map((p) => (
                <div
                  key={p.title}
                  className="p-3 sm:p-4 rounded-xl bg-[#0e061d] border border-purple-500/20 flex items-start gap-3 sm:gap-4 hover:border-purple-400/40 transition-colors"
                >
                  <div className="p-2 sm:p-2.5 rounded-lg bg-purple-950/70 border border-purple-500/30 text-brand-cyan flex-shrink-0 mt-0.5">
                    <p.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-1">
                      <span className="text-xs sm:text-sm font-mono font-bold text-white">{p.title}</span>
                      <span className="text-[9px] sm:text-[10px] font-mono px-2 py-0.5 rounded bg-purple-900/40 text-purple-200 border border-purple-500/20">
                        {p.badge}
                      </span>
                    </div>
                    <div className="text-[11px] sm:text-xs font-semibold text-purple-200/90 mb-1">
                      {p.tagline}
                    </div>
                    <p className="text-[11px] sm:text-xs text-slate-300 leading-relaxed font-mono">
                      {p.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom 2 Pillars: Emergency Manual Exit & Essential Circuits */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-purple-500/20">
            {pillars.slice(3).map((p) => (
              <div
                key={p.title}
                className="p-3 sm:p-4 rounded-xl bg-[#0e061d] border border-brand-green/30 flex items-start gap-3 sm:gap-4"
              >
                <div className="p-2 sm:p-2.5 rounded-lg bg-emerald-950/60 border border-brand-green/40 text-brand-green flex-shrink-0 mt-0.5">
                  <p.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-1">
                    <span className="text-xs sm:text-sm font-mono font-bold text-white">{p.title}</span>
                    <span className="text-[9px] sm:text-[10px] font-mono px-2 py-0.5 rounded bg-brand-green/10 text-brand-green border border-brand-green/30">
                      {p.badge}
                    </span>
                  </div>
                  <div className="text-[11px] sm:text-xs font-semibold text-emerald-300 mb-1">
                    {p.tagline}
                  </div>
                  <p className="text-[11px] sm:text-xs text-slate-300 leading-relaxed font-mono">
                    {p.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Realistic Disclaimer Footer */}
          <div className="mt-6 sm:mt-8 pt-3 sm:pt-4 border-t border-purple-500/15 flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] sm:text-xs font-mono text-slate-400 text-center sm:text-left">
            <span>Engineering Philosophy: Balanced security with zero life-safety compromise.</span>
            <span className="text-purple-300">Grounded Design Principles</span>
          </div>
        </div>
      </div>
    </section>
  );
}
