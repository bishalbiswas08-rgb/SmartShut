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
  Sliders,
  CheckCircle2,
  Sparkles,
  Layers,
} from "lucide-react";

export default function HeroSection() {
  const [doorLocked, setDoorLocked] = useState(true);
  const [hoveredComponent, setHoveredComponent] = useState<string | null>(null);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-grid-pattern">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-brand-purple/20 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-brand-green/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] bg-brand-cyan/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & Story */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 backdrop-blur-md mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
              <span className="text-xs font-mono font-semibold tracking-wider text-purple-200 uppercase">
                SMARTSHUT / SMART ACCESS + ENERGY
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] text-white">
              LOCK SMART.
              <br />
              <span className="text-gradient-green">SAVE ENERGY.</span>
              <br />
              <span className="text-gradient-purple">STAY SECURE.</span>
            </h1>

            {/* Supporting Text */}
            <p className="mt-6 text-base sm:text-lg text-slate-300/90 leading-relaxed max-w-xl font-normal">
              One smart door connecting access, security and energy management. When the room is verified empty and the door is locked, SmartShut automatically powers down non-essential electronics while maintaining continuous active security.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                href="#demo"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-black bg-gradient-to-r from-brand-green via-[#19f79e] to-[#00f59b] hover:shadow-[0_0_30px_rgba(0,245,155,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>Explore SmartShut Demo</span>
                <ArrowRight className="w-4 h-4 text-black" />
              </a>

              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium text-purple-200 bg-surface-100/80 hover:bg-surface-50 border border-purple-500/30 hover:border-purple-400/50 backdrop-blur-sm transition-all"
              >
                <span>See How It Works</span>
              </a>
            </div>

            {/* Value Pillars Quick Pills */}
            <div className="mt-10 pt-8 border-t border-purple-500/15 grid grid-cols-3 gap-4 w-full max-w-lg">
              <div>
                <div className="text-xs font-mono text-purple-300/70 uppercase">Access</div>
                <div className="text-sm font-semibold text-white mt-0.5 flex items-center gap-1.5">
                  <Fingerprint className="w-3.5 h-3.5 text-brand-green" />
                  Biometric
                </div>
              </div>
              <div>
                <div className="text-xs font-mono text-purple-300/70 uppercase">Detection</div>
                <div className="text-sm font-semibold text-white mt-0.5 flex items-center gap-1.5">
                  <Eye className="w-3.5 h-3.5 text-brand-cyan" />
                  Vision Sensor
                </div>
              </div>
              <div>
                <div className="text-xs font-mono text-purple-300/70 uppercase">Power Logic</div>
                <div className="text-sm font-semibold text-white mt-0.5 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-brand-green" />
                  Auto Cutoff
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-2 text-[11px] text-slate-400 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-green/80" />
              <span>Proposed hardware concept · Illustrative architectural preview</span>
            </div>
          </div>

          {/* Right Column: CINEMATIC HERO ILLUSTRATION */}
          <div className="lg:col-span-6 relative">
            {/* Interactive Concept Banner */}
            <div className="absolute -top-6 right-2 sm:right-6 z-20 flex items-center gap-2 px-3 py-1 rounded-full bg-[#170c2d]/80 border border-brand-green/30 backdrop-blur-md shadow-lg">
              <span className="w-2 h-2 rounded-full bg-brand-green animate-ping" />
              <span className="text-[11px] font-mono text-brand-green font-medium tracking-wider">
                SMARTSHUT SYSTEM / CONCEPT
              </span>
            </div>

            {/* Main Showcase Stage */}
            <div className="relative rounded-3xl p-4 sm:p-7 bg-gradient-to-b from-[#190d36]/70 via-[#100724]/80 to-[#070311]/90 border border-purple-500/25 shadow-2xl backdrop-blur-xl overflow-hidden group">
              {/* Subtle architectural grid lines */}
              <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" />

              {/* Architectural Entrance Graphic (SVG & Layered UI) */}
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] rounded-2xl bg-[#090413] border border-purple-900/40 overflow-hidden flex items-center justify-center">
                {/* Inside Room Perspective (visible through architectural doorway/glass) */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#120726] via-[#0b0517] to-[#04010a]">
                  {/* Perspective Room Ceiling Grid */}
                  <svg className="absolute inset-0 w-full h-full opacity-25" viewBox="0 0 600 450">
                    <line x1="0" y1="60" x2="600" y2="60" stroke="#a855f7" strokeWidth="0.8" />
                    <line x1="120" y1="0" x2="200" y2="180" stroke="#a855f7" strokeWidth="0.6" strokeDasharray="3 3" />
                    <line x1="480" y1="0" x2="400" y2="180" stroke="#a855f7" strokeWidth="0.6" strokeDasharray="3 3" />
                    {/* Interior Room Lights (OFF state indicator) */}
                    <circle cx="250" cy="80" r="14" fill="#1b0e36" stroke="#4c1d95" strokeWidth="1.5" />
                    <line x1="250" y1="60" x2="250" y2="80" stroke="#6b21a8" strokeWidth="1.5" />
                    <circle cx="350" cy="80" r="14" fill="#1b0e36" stroke="#4c1d95" strokeWidth="1.5" />
                    <line x1="350" y1="60" x2="350" y2="80" stroke="#6b21a8" strokeWidth="1.5" />
                    {/* AC Unit schematic inside room */}
                    <rect x="420" y="70" width="70" height="24" rx="3" fill="#120824" stroke="#4c1d95" strokeWidth="1" />
                    <text x="455" y="86" fill="#6b7280" fontSize="8" fontFamily="monospace" textAnchor="middle">HVAC [OFF]</text>
                    {/* Ceiling fan schematic inside room */}
                    <circle cx="300" cy="115" r="5" fill="#1f1142" stroke="#6b21a8" strokeWidth="1" />
                    <line x1="280" y1="115" x2="320" y2="115" stroke="#3b136f" strokeWidth="2" strokeLinecap="round" />
                    <line x1="300" y1="95" x2="300" y2="135" stroke="#3b136f" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>

                {/* THE SMARTSHUT DOOR FRAME (Architectural Centerpiece) */}
                <div className="relative z-10 w-[240px] sm:w-[280px] h-[340px] sm:h-[390px] rounded-xl bg-gradient-to-b from-[#211244] via-[#160c2e] to-[#0c051a] p-3 border-2 border-purple-500/40 shadow-[0_15px_45px_rgba(0,0,0,0.8)] flex flex-col justify-between">
                  {/* Outer Door Trim & Top Sensor Header */}
                  <div
                    onMouseEnter={() => setHoveredComponent("camera")}
                    onMouseLeave={() => setHoveredComponent(null)}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-lg bg-[#0e071e]/90 border border-purple-500/30 cursor-pointer transition-all hover:border-brand-cyan/60"
                  >
                    <div className="flex items-center gap-2">
                      {/* Micro Camera Module */}
                      <div className="relative w-4 h-4 rounded-full bg-black border border-brand-cyan/80 flex items-center justify-center shadow-[0_0_8px_rgba(6,182,212,0.4)]">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse" />
                      </div>
                      <span className="text-[10px] font-mono font-medium text-slate-300">
                        VISION OPTIC v2
                      </span>
                    </div>
                    <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-brand-cyan/15 text-brand-cyan border border-brand-cyan/30">
                      SCANNING
                    </span>
                  </div>

                  {/* Door Glass Panel / Finish */}
                  <div className="relative flex-1 my-2.5 rounded-lg bg-gradient-to-b from-[#150a2b] to-[#0a0416] border border-purple-500/20 p-4 flex flex-col justify-center items-center overflow-hidden">
                    {/* Architectural brushed door lines */}
                    <div className="absolute inset-0 bg-grid-pattern opacity-15" />

                    {/* Green Energy Conduit Line running down door */}
                    <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-brand-green/80 via-brand-green to-brand-green/20">
                      <div className="w-full h-12 bg-white blur-[1px] animate-bounce" />
                    </div>

                    {/* SmartShut Central Biometric Plate */}
                    <div
                      onMouseEnter={() => setHoveredComponent("fingerprint")}
                      onMouseLeave={() => setHoveredComponent(null)}
                      className="relative z-10 w-full max-w-[190px] rounded-xl p-3 bg-[#110724]/90 border border-purple-400/30 backdrop-blur-md shadow-xl hover:border-brand-green/60 transition-all cursor-pointer"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[9px] font-mono text-purple-300 uppercase tracking-wider">
                          BIOMETRIC SENSOR
                        </span>
                        <Fingerprint className="w-4 h-4 text-brand-green animate-pulse" />
                      </div>

                      {/* Fingerprint glowing scanner pad */}
                      <div className="relative w-14 h-14 mx-auto rounded-xl bg-purple-950/80 border border-brand-green/40 flex items-center justify-center overflow-hidden shadow-[0_0_15px_rgba(0,245,155,0.2)]">
                        <Fingerprint className="w-8 h-8 text-brand-green/90" />
                        {/* Scanning beam */}
                        <div className="absolute left-0 right-0 h-[2px] bg-brand-green shadow-[0_0_8px_#00f59b] animate-scan-line" />
                      </div>

                      <div className="text-center mt-2">
                        <span className="text-[10px] font-mono font-medium text-brand-green">
                          FINGERPRINT AUTHORIZED
                        </span>
                      </div>
                    </div>

                    {/* Smart Lock Electronic Latch Mechanism */}
                    <div
                      onMouseEnter={() => setHoveredComponent("lock")}
                      onMouseLeave={() => setHoveredComponent(null)}
                      className="mt-3 w-full max-w-[190px] rounded-lg p-2.5 bg-[#0d051c] border border-purple-500/20 flex items-center justify-between hover:border-purple-300/50 transition-colors cursor-pointer"
                    >
                      <div className="flex items-center gap-2">
                        {doorLocked ? (
                          <Lock className="w-4 h-4 text-brand-green" />
                        ) : (
                          <Unlock className="w-4 h-4 text-amber-400" />
                        )}
                        <span className="text-[10px] font-mono text-slate-200">
                          DEADBOLT {doorLocked ? "ENGAGED" : "UNLOCKED"}
                        </span>
                      </div>
                      <span className="w-2 h-2 rounded-full bg-brand-green shadow-[0_0_6px_#00f59b]" />
                    </div>
                  </div>

                  {/* Bottom Door Energy & Egress Channel */}
                  <div
                    onMouseEnter={() => setHoveredComponent("energy")}
                    onMouseLeave={() => setHoveredComponent(null)}
                    className="w-full flex items-center justify-between px-3 py-1.5 rounded-lg bg-[#0e0620]/90 border border-purple-500/20 text-[9px] font-mono text-slate-400"
                  >
                    <span className="flex items-center gap-1.5 text-brand-green">
                      <Zap className="w-3 h-3 text-brand-green" />
                      NON-ESSENTIAL CUTOFF: READY
                    </span>
                    <span className="text-purple-300">SAFE EGRESS PASS</span>
                  </div>
                </div>

                {/* FLOATING STATUS UI PANELS (Framing the door) */}
                {/* 1. Top Left: LOCKED */}
                <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20 animate-float-gentle">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#140a2b]/85 border border-brand-green/40 backdrop-blur-md shadow-lg">
                    <div className="w-2 h-2 rounded-full bg-brand-green animate-ping" />
                    <Lock className="w-3.5 h-3.5 text-brand-green" />
                    <span className="text-xs font-mono font-bold text-white tracking-wider">
                      LOCKED
                    </span>
                  </div>
                </div>

                {/* 2. Top Right: ROOM EMPTY */}
                <div
                  className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 animate-float-gentle"
                  style={{ animationDelay: "1s" }}
                >
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#140a2b]/85 border border-brand-cyan/40 backdrop-blur-md shadow-lg">
                    <Eye className="w-3.5 h-3.5 text-brand-cyan" />
                    <span className="text-xs font-mono font-bold text-brand-cyan tracking-wider">
                      ROOM EMPTY
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">(VERIFIED)</span>
                  </div>
                </div>

                {/* 3. Bottom Left: ENERGY SAVING */}
                <div
                  className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-20 animate-float-gentle"
                  style={{ animationDelay: "2s" }}
                >
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#0c1c18]/90 border border-brand-green/60 backdrop-blur-md shadow-[0_0_15px_rgba(0,245,155,0.2)]">
                    <Zap className="w-3.5 h-3.5 text-brand-green animate-pulse" />
                    <span className="text-xs font-mono font-bold text-brand-green tracking-wider">
                      ENERGY SAVING
                    </span>
                    <span className="text-[10px] font-mono text-emerald-300">-85% ROOM LOAD</span>
                  </div>
                </div>

                {/* 4. Bottom Right: MONITORING ACTIVE */}
                <div
                  className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-20 animate-float-gentle"
                  style={{ animationDelay: "3s" }}
                >
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#140a2b]/85 border border-purple-400/40 backdrop-blur-md shadow-lg">
                    <ShieldCheck className="w-3.5 h-3.5 text-brand-purple-glow" />
                    <span className="text-xs font-mono font-bold text-purple-200 tracking-wider">
                      MONITORING ACTIVE
                    </span>
                  </div>
                </div>

                {/* Component Hover Tooltip */}
                {hoveredComponent && (
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none px-4 py-2 rounded-xl bg-black/90 border border-brand-green text-xs font-mono text-brand-green shadow-2xl backdrop-blur-lg animate-in fade-in zoom-in-95">
                    {hoveredComponent === "camera" && "Integrated Vision Sensor: Tracks room entry/exit to verify occupancy"}
                    {hoveredComponent === "fingerprint" && "High-Precision Biometric Reader: Instant encrypted authorization"}
                    {hoveredComponent === "lock" && "Smart Electronic Deadbolt: Dual-fail safe locking with mechanical override"}
                    {hoveredComponent === "energy" && "Smart Relay Interface: Powers down non-essential lights, fans, and ACs"}
                  </div>
                )}
              </div>

              {/* Bottom Interactive Strip */}
              <div className="mt-4 flex flex-wrap items-center justify-between gap-3 px-2 pt-2 text-xs font-mono text-slate-300">
                <div className="flex items-center gap-2">
                  <span className="text-purple-300/70">Interactive Door State:</span>
                  <button
                    onClick={() => setDoorLocked(!doorLocked)}
                    className="px-3 py-1 rounded-full bg-purple-900/50 hover:bg-purple-800/60 border border-purple-500/40 text-white font-medium flex items-center gap-1.5 transition-all text-[11px]"
                  >
                    {doorLocked ? (
                      <>
                        <Lock className="w-3 h-3 text-brand-green" />
                        <span>Toggle: Unlocked</span>
                      </>
                    ) : (
                      <>
                        <Unlock className="w-3 h-3 text-amber-400" />
                        <span>Toggle: Locked</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="flex items-center gap-3 text-slate-400 text-[11px]">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-brand-green" />
                    HVAC: STANDBY
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-brand-green" />
                    LIGHTS: 0W
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
