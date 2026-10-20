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
  const [hoveredComponent, setHoveredComponent] = useState<string | null>(null);

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

          {/* Right Column: CINEMATIC HERO ILLUSTRATION */}
          <div className="lg:col-span-6 relative w-full">
            {/* Interactive Concept Banner */}
            <div className="flex justify-end mb-2.5 md:mb-0 md:absolute md:-top-6 md:right-6 z-20">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/95 dark:bg-[#170c2d]/90 border border-emerald-400/60 dark:border-brand-green/30 backdrop-blur-md shadow-md dark:shadow-lg">
                <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-brand-green animate-ping" />
                <span className="text-[10px] sm:text-[11px] font-mono text-emerald-800 dark:text-brand-green font-semibold tracking-wider">
                  SMARTSHUT — PRODUCT CONCEPT
                </span>
              </div>
            </div>

            {/* Main Showcase Stage */}
            <div className="relative w-full rounded-2xl sm:rounded-3xl p-3 sm:p-5 md:p-7 bg-gradient-to-b from-white via-[#F7F8FA] to-[#EDF0F7] dark:bg-gradient-to-b dark:from-[#190d36]/70 dark:via-[#100724]/80 dark:to-[#070311]/90 border border-[#D9DCE5] dark:border-purple-500/25 shadow-xl dark:shadow-2xl backdrop-blur-xl overflow-hidden group">
              {/* Subtle architectural grid lines */}
              <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" />

              {/* MOBILE TOP STATUS ROW (<= md) */}
              <div className="flex md:hidden items-center justify-between gap-2 mb-2.5 z-20 relative w-full">
                {/* 1. Top Left: LOCKED */}
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/95 dark:bg-[#140a2b]/90 border border-emerald-400/60 dark:border-brand-green/40 backdrop-blur-md shadow-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-brand-green animate-ping" />
                  <Lock className="w-3 h-3 text-emerald-600 dark:text-brand-green" />
                  <span className="text-[10px] font-mono font-bold text-[#111218] dark:text-white tracking-wider">
                    {doorLocked ? "LOCKED" : "UNLOCKED"}
                  </span>
                </div>

                {/* 2. Top Right: ROOM EMPTY */}
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/95 dark:bg-[#140a2b]/90 border border-cyan-400/60 dark:border-brand-cyan/40 backdrop-blur-md shadow-sm">
                  <Eye className="w-3 h-3 text-cyan-600 dark:text-brand-cyan" />
                  <span className="text-[10px] font-mono font-bold text-cyan-800 dark:text-brand-cyan tracking-wider">
                    ROOM EMPTY
                  </span>
                  <span className="text-[9px] font-mono text-[#626775] dark:text-slate-400">(VERIFIED)</span>
                </div>
              </div>

              {/* Architectural Entrance Graphic (SVG & Layered UI) */}
              <div className="relative w-full min-h-[330px] sm:min-h-[380px] md:aspect-[16/11] rounded-xl sm:rounded-2xl bg-[#EEF2F9] dark:bg-[#090413] border border-[#CBD5E1] dark:border-purple-900/40 overflow-hidden flex flex-col items-center justify-center py-2 sm:py-3 md:py-0">
                {/* Inside Room Perspective */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#EAEFF8] via-[#F1F4FA] to-[#E3E8F3] dark:from-[#120726] dark:via-[#0b0517] dark:to-[#04010a]">
                  <svg className="absolute inset-0 w-full h-full opacity-35 dark:opacity-25" viewBox="0 0 600 450">
                    <line x1="0" y1="60" x2="600" y2="60" stroke="#94a3b8" className="dark:stroke-[#a855f7]" strokeWidth="0.8" />
                    <line x1="120" y1="0" x2="200" y2="180" stroke="#94a3b8" className="dark:stroke-[#a855f7]" strokeWidth="0.6" strokeDasharray="3 3" />
                    <line x1="480" y1="0" x2="400" y2="180" stroke="#94a3b8" className="dark:stroke-[#a855f7]" strokeWidth="0.6" strokeDasharray="3 3" />
                    <circle cx="250" cy="80" r="14" fill="#e2e8f0" stroke="#94a3b8" className="dark:fill-[#1b0e36] dark:stroke-[#4c1d95]" strokeWidth="1.5" />
                    <line x1="250" y1="60" x2="250" y2="80" stroke="#94a3b8" className="dark:stroke-[#6b21a8]" strokeWidth="1.5" />
                    <circle cx="350" cy="80" r="14" fill="#e2e8f0" stroke="#94a3b8" className="dark:fill-[#1b0e36] dark:stroke-[#4c1d95]" strokeWidth="1.5" />
                    <line x1="350" y1="60" x2="350" y2="80" stroke="#94a3b8" className="dark:stroke-[#6b21a8]" strokeWidth="1.5" />
                    <rect x="420" y="70" width="70" height="24" rx="3" fill="#ffffff" stroke="#94a3b8" className="dark:fill-[#120824] dark:stroke-[#4c1d95]" strokeWidth="1" />
                    <text x="455" y="86" fill="#64748b" className="dark:fill-[#6b7280]" fontSize="8" fontFamily="monospace" textAnchor="middle">HVAC [OFF]</text>
                    <circle cx="300" cy="115" r="5" fill="#e2e8f0" stroke="#94a3b8" className="dark:fill-[#1f1142] dark:stroke-[#6b21a8]" strokeWidth="1" />
                    <line x1="280" y1="115" x2="320" y2="115" stroke="#94a3b8" className="dark:stroke-[#3b136f]" strokeWidth="2" strokeLinecap="round" />
                    <line x1="300" y1="95" x2="300" y2="135" stroke="#94a3b8" className="dark:stroke-[#3b136f]" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>

                {/* THE SMARTSHUT DOOR FRAME (Architectural Centerpiece) */}
                <div className="relative z-10 w-full max-w-[210px] sm:max-w-[250px] md:w-[280px] h-[310px] sm:h-[350px] md:h-[390px] rounded-xl bg-gradient-to-b from-white via-[#F4F7FC] to-[#E5EBF5] dark:bg-gradient-to-b dark:from-[#211244] dark:via-[#160c2e] dark:to-[#0c051a] p-2 sm:p-3 border-2 border-[#CBD5E1] dark:border-purple-500/40 shadow-[0_15px_35px_rgba(0,0,0,0.12),0_0_20px_rgba(0,217,139,0.1)] dark:shadow-[0_15px_45px_rgba(0,0,0,0.8)] flex flex-col justify-between my-auto">
                  {/* Outer Door Trim & Top Sensor Header */}
                  <div
                    tabIndex={0}
                    role="button"
                    aria-label="Vision Sensor component information"
                    onMouseEnter={() => setHoveredComponent("camera")}
                    onMouseLeave={() => setHoveredComponent(null)}
                    onClick={() => setHoveredComponent(hoveredComponent === "camera" ? null : "camera")}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setHoveredComponent(hoveredComponent === "camera" ? null : "camera");
                      }
                    }}
                    className="w-full flex items-center justify-between px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-lg bg-white/95 dark:bg-[#0e071e]/90 border border-[#D9DCE5] dark:border-purple-500/30 cursor-pointer transition-all hover:border-cyan-500 dark:hover:border-brand-cyan/60 focus:outline-none focus:ring-1 focus:ring-cyan-500 shadow-sm"
                  >
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <div className="relative w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-slate-900 border border-brand-cyan/80 flex items-center justify-center shadow-[0_0_8px_rgba(6,182,212,0.4)]">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse" />
                      </div>
                      <span className="text-[9px] sm:text-[10px] font-mono font-medium text-[#111218] dark:text-slate-300">
                        VISION OPTIC v2
                      </span>
                    </div>
                    <span className="text-[8px] sm:text-[9px] font-mono px-1.5 py-0.5 rounded bg-cyan-50 dark:bg-brand-cyan/15 text-cyan-800 dark:text-brand-cyan border border-cyan-300 dark:border-brand-cyan/30 font-semibold">
                      SCANNING
                    </span>
                  </div>

                  {/* Door Glass Panel / Finish */}
                  <div className="relative flex-1 my-2 rounded-lg bg-gradient-to-b from-[#F8FAFC] to-[#EEF2F6] dark:bg-gradient-to-b dark:from-[#150a2b] dark:to-[#0a0416] border border-[#D9DCE5] dark:border-purple-500/20 p-2.5 sm:p-4 flex flex-col justify-center items-center overflow-hidden shadow-inner">
                    <div className="absolute inset-0 bg-grid-pattern opacity-20" />

                    {/* Green Energy Conduit Line */}
                    <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-brand-green/80 via-brand-green to-brand-green/20">
                      <div className="w-full h-10 sm:h-12 bg-white blur-[1px] animate-bounce" />
                    </div>

                    {/* SmartShut Central Biometric Plate */}
                    <div
                      tabIndex={0}
                      role="button"
                      aria-label="Biometric Sensor component information"
                      onMouseEnter={() => setHoveredComponent("fingerprint")}
                      onMouseLeave={() => setHoveredComponent(null)}
                      onClick={() => setHoveredComponent(hoveredComponent === "fingerprint" ? null : "fingerprint")}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          setHoveredComponent(hoveredComponent === "fingerprint" ? null : "fingerprint");
                        }
                      }}
                      className="relative z-10 w-full max-w-[170px] sm:max-w-[190px] rounded-xl p-2.5 sm:p-3 bg-white dark:bg-[#110724]/90 border border-[#D9DCE5] dark:border-purple-400/30 backdrop-blur-md shadow-md dark:shadow-xl hover:border-emerald-500 dark:hover:border-brand-green/60 transition-all cursor-pointer focus:outline-none focus:ring-1 focus:ring-emerald-500"
                    >
                      <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                        <span className="text-[8px] sm:text-[9px] font-mono text-purple-800 dark:text-purple-300 uppercase tracking-wider font-semibold">
                          BIOMETRIC SENSOR
                        </span>
                        <Fingerprint className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 dark:text-brand-green animate-pulse" />
                      </div>

                      {/* Fingerprint scanner pad */}
                      <div className="relative w-12 h-12 sm:w-14 sm:h-14 mx-auto rounded-xl bg-emerald-50 dark:bg-purple-950/80 border border-emerald-400/60 dark:border-brand-green/40 flex items-center justify-center overflow-hidden shadow-[0_0_15px_rgba(0,217,139,0.18)] dark:shadow-[0_0_15px_rgba(0,245,155,0.2)]">
                        <Fingerprint className="w-7 h-7 sm:w-8 sm:h-8 text-emerald-600 dark:text-brand-green/90" />
                        <div className="absolute left-0 right-0 h-[2px] bg-brand-green shadow-[0_0_8px_#00f59b] animate-scan-line" />
                      </div>

                      <div className="text-center mt-1.5 sm:mt-2">
                        <span className="text-[9px] sm:text-[10px] font-mono font-bold text-emerald-800 dark:text-brand-green block leading-tight">
                          FINGERPRINT AUTHORIZED
                        </span>
                      </div>
                    </div>

                    {/* Smart Lock Electronic Latch Mechanism */}
                    <div
                      tabIndex={0}
                      role="button"
                      aria-label="Smart Electronic Deadbolt component information"
                      onMouseEnter={() => setHoveredComponent("lock")}
                      onMouseLeave={() => setHoveredComponent(null)}
                      onClick={() => setHoveredComponent(hoveredComponent === "lock" ? null : "lock")}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          setHoveredComponent(hoveredComponent === "lock" ? null : "lock");
                        }
                      }}
                      className="mt-2 sm:mt-3 w-full max-w-[170px] sm:max-w-[190px] rounded-lg p-2 sm:p-2.5 bg-[#F8FAFC] dark:bg-[#0d051c] border border-[#D9DCE5] dark:border-purple-500/20 flex items-center justify-between hover:border-purple-400/60 transition-colors cursor-pointer focus:outline-none focus:ring-1 focus:ring-purple-400 shadow-sm"
                    >
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        {doorLocked ? (
                          <Lock className="w-3.5 h-3.5 text-emerald-600 dark:text-brand-green flex-shrink-0" />
                        ) : (
                          <Unlock className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
                        )}
                        <span className="text-[9px] sm:text-[10px] font-mono font-medium text-[#111218] dark:text-slate-200">
                          DEADBOLT {doorLocked ? "ENGAGED" : "UNLOCKED"}
                        </span>
                      </div>
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-500 dark:bg-brand-green shadow-[0_0_6px_#00f59b] flex-shrink-0" />
                    </div>
                  </div>

                  {/* Bottom Door Energy & Egress Channel */}
                  <div
                    tabIndex={0}
                    role="button"
                    aria-label="Energy Cutoff and Egress component information"
                    onMouseEnter={() => setHoveredComponent("energy")}
                    onMouseLeave={() => setHoveredComponent(null)}
                    onClick={() => setHoveredComponent(hoveredComponent === "energy" ? null : "energy")}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setHoveredComponent(hoveredComponent === "energy" ? null : "energy");
                      }
                    }}
                    className="w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg bg-white/95 dark:bg-[#0e0620]/90 border border-[#D9DCE5] dark:border-purple-500/20 text-[8px] sm:text-[9px] font-mono text-[#626775] dark:text-slate-400 cursor-pointer hover:border-emerald-500/50 dark:hover:border-brand-green/40 focus:outline-none focus:ring-1 focus:ring-emerald-500 shadow-sm"
                  >
                    <span className="flex items-center gap-1 text-emerald-700 dark:text-brand-green font-semibold truncate">
                      <Zap className="w-3 h-3 text-emerald-600 dark:text-brand-green flex-shrink-0" />
                      CUTOFF: READY
                    </span>
                    <span className="text-purple-800 dark:text-purple-300 font-semibold flex-shrink-0">SAFE EGRESS</span>
                  </div>
                </div>

                {/* DESKTOP FLOATING STATUS UI PANELS (Hidden on mobile <= md, Visible on desktop >= md) */}
                {/* 1. Top Left: LOCKED */}
                <div className="hidden md:block absolute top-6 left-6 z-20 animate-float-gentle">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/95 dark:bg-[#140a2b]/85 border border-emerald-400/60 dark:border-brand-green/40 backdrop-blur-md shadow-md dark:shadow-lg">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-brand-green animate-ping" />
                    <Lock className="w-3.5 h-3.5 text-emerald-600 dark:text-brand-green" />
                    <span className="text-xs font-mono font-bold text-[#111218] dark:text-white tracking-wider">
                      {doorLocked ? "LOCKED" : "UNLOCKED"}
                    </span>
                  </div>
                </div>

                {/* 2. Top Right: ROOM EMPTY */}
                <div
                  className="hidden md:block absolute top-6 right-6 z-20 animate-float-gentle"
                  style={{ animationDelay: "1s" }}
                >
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/95 dark:bg-[#140a2b]/85 border border-cyan-400/60 dark:border-brand-cyan/40 backdrop-blur-md shadow-md dark:shadow-lg">
                    <Eye className="w-3.5 h-3.5 text-cyan-600 dark:text-brand-cyan" />
                    <span className="text-xs font-mono font-bold text-cyan-800 dark:text-brand-cyan tracking-wider">
                      ROOM EMPTY
                    </span>
                    <span className="text-[10px] font-mono text-[#626775] dark:text-slate-400">(VERIFIED)</span>
                  </div>
                </div>

                {/* 3. Bottom Left: ENERGY SAVING */}
                <div
                  className="hidden md:block absolute bottom-6 left-6 z-20 animate-float-gentle"
                  style={{ animationDelay: "2s" }}
                >
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-50/95 dark:bg-[#0c1c18]/90 border border-emerald-500/60 dark:border-brand-green/60 backdrop-blur-md shadow-md dark:shadow-[0_0_15px_rgba(0,245,155,0.2)]">
                    <Zap className="w-3.5 h-3.5 text-emerald-600 dark:text-brand-green animate-pulse" />
                    <span className="text-xs font-mono font-bold text-emerald-900 dark:text-brand-green tracking-wider">
                      ENERGY SAVING
                    </span>
                    <span className="text-[10px] font-mono text-emerald-700 dark:text-emerald-300 font-semibold">CIRCUITS ISOLATED</span>
                  </div>
                </div>

                {/* 4. Bottom Right: MONITORING ACTIVE */}
                <div
                  className="hidden md:block absolute bottom-6 right-6 z-20 animate-float-gentle"
                  style={{ animationDelay: "3s" }}
                >
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-purple-50/95 dark:bg-[#140a2b]/85 border border-purple-300 dark:border-purple-400/40 backdrop-blur-md shadow-md dark:shadow-lg">
                    <ShieldCheck className="w-3.5 h-3.5 text-purple-600 dark:text-brand-purple-glow" />
                    <span className="text-xs font-mono font-bold text-purple-900 dark:text-purple-200 tracking-wider">
                      MONITORING ACTIVE
                    </span>
                  </div>
                </div>

                {/* Component Hover Tooltip */}
                {hoveredComponent && (
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none px-3.5 py-2 rounded-xl bg-white/95 dark:bg-black/95 border border-emerald-500 dark:border-brand-green text-[11px] font-mono text-emerald-900 dark:text-brand-green shadow-2xl backdrop-blur-lg animate-in fade-in zoom-in-95 max-w-[250px] text-center font-medium">
                    {hoveredComponent === "camera" && "Integrated Vision Sensor: Tracks room entry/exit to verify occupancy"}
                    {hoveredComponent === "fingerprint" && "High-Precision Biometric Reader: Instant encrypted authorization"}
                    {hoveredComponent === "lock" && "Smart Electronic Deadbolt: Dual-fail safe locking with mechanical override"}
                    {hoveredComponent === "energy" && "Smart Relay Interface: Powers down non-essential lights, fans, and ACs"}
                  </div>
                )}
              </div>

              {/* MOBILE BOTTOM STATUS ROW (<= md) */}
              <div className="flex md:hidden flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2 mt-2.5 z-20 relative w-full">
                {/* 3. Bottom Left: ENERGY SAVING */}
                <div className="flex items-center justify-between sm:justify-start gap-2 px-2.5 py-1.5 rounded-lg bg-emerald-50/95 dark:bg-[#0c1c18]/90 border border-emerald-500/60 dark:border-brand-green/60 backdrop-blur-md shadow-sm">
                  <div className="flex items-center gap-1.5">
                    <Zap className="w-3 h-3 text-emerald-600 dark:text-brand-green animate-pulse" />
                    <span className="text-[10px] font-mono font-bold text-emerald-900 dark:text-brand-green tracking-wider">
                      ENERGY SAVING
                    </span>
                  </div>
                  <span className="text-[9px] font-mono text-emerald-800 dark:text-emerald-300 bg-emerald-100 dark:bg-brand-green/10 px-1.5 py-0.5 rounded border border-emerald-300 dark:border-brand-green/30 font-semibold">
                    CIRCUITS ISOLATED
                  </span>
                </div>

                {/* 4. Bottom Right: MONITORING ACTIVE */}
                <div className="flex items-center justify-between sm:justify-start gap-1.5 px-2.5 py-1.5 rounded-lg bg-purple-50/95 dark:bg-[#140a2b]/90 border border-purple-300 dark:border-purple-400/40 backdrop-blur-md shadow-sm">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3 h-3 text-purple-600 dark:text-brand-purple-glow" />
                    <span className="text-[10px] font-mono font-bold text-purple-900 dark:text-purple-200 tracking-wider">
                      MONITORING ACTIVE
                    </span>
                  </div>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-brand-green animate-pulse" />
                </div>
              </div>

              {/* Bottom Interactive Strip */}
              <div className="mt-3.5 pt-3 border-t border-[#D9DCE5] dark:border-purple-500/15 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 text-xs font-mono text-[#626775] dark:text-slate-300">
                <div className="flex flex-wrap items-center justify-between sm:justify-start gap-2">
                  <span className="text-purple-900/80 dark:text-purple-300/70 text-[11px] sm:text-xs font-semibold">Interactive Door State:</span>
                  <button
                    onClick={() => setDoorLocked(!doorLocked)}
                    className="px-2.5 py-1 rounded-full bg-purple-100 hover:bg-purple-200 dark:bg-purple-900/50 dark:hover:bg-purple-800/60 border border-purple-300 dark:border-purple-500/40 text-purple-900 dark:text-white font-semibold flex items-center gap-1.5 transition-all text-[10px] sm:text-[11px] shadow-sm"
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

                <div className="flex items-center justify-between sm:justify-end gap-3 text-[#626775] dark:text-slate-400 text-[10px] sm:text-[11px] font-medium">
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-brand-green" />
                    HVAC: STANDBY
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-brand-green" />
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
