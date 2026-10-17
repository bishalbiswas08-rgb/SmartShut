"use client";

import React, { useState } from "react";
import {
  Building2,
  GraduationCap,
  Store,
  CheckCircle2,
  ArrowRight,
  Zap,
  Shield,
  Clock,
} from "lucide-react";

interface ApplicationScene {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  places: string[];
  impactTitle: string;
  impactDescription: string;
  benefitStat: string;
  icon: React.ElementType;
  themeColor: string;
  borderGlow: string;
}

const scenes: ApplicationScene[] = [
  {
    id: "offices",
    category: "OFFICES",
    title: "CORPORATE WORKSPACES & SUITES",
    subtitle: "Meeting rooms · Executive offices · Conference halls",
    places: ["Executive Suites", "Conference Rooms", "Huddle Spaces", "Boardrooms"],
    impactTitle: "Eliminate Overnight Energy Leaks",
    impactDescription:
      "Conference rooms sit empty for hours between presentations with lights and climate systems left running. SmartShut ensures every closed meeting room instantly reverts to power-saving standby.",
    benefitStat: "Nightly idle cutoff for 12+ hours",
    icon: Building2,
    themeColor: "text-brand-green bg-brand-green/10 border-brand-green/30",
    borderGlow: "hover:border-brand-green/60",
  },
  {
    id: "schools",
    category: "SCHOOLS",
    title: "ACADEMIC BUILDINGS & LABS",
    subtitle: "Classrooms · Computer labs · Research facilities",
    places: ["Lecture Halls", "Computer Laboratories", "Faculty Lounges", "Library Pods"],
    impactTitle: "Automatic After-Class Safeguard",
    impactDescription:
      "When class dismisses and instructors lock up, SmartShut confirms zero remaining students before gracefully shutting down high-power ceiling projectors, fans, and cooling banks.",
    benefitStat: "Zero accidental locked-in students",
    icon: GraduationCap,
    themeColor: "text-brand-cyan bg-brand-cyan/10 border-brand-cyan/30",
    borderGlow: "hover:border-brand-cyan/60",
  },
  {
    id: "smart-spaces",
    category: "SMART SPACES",
    title: "COMMERCIAL & BOUTIQUE SPACES",
    subtitle: "Modern retail · Creative studios · Smart venues",
    places: ["Boutique Stores", "Photography Studios", "Shared Workspaces", "Tech Showrooms"],
    impactTitle: "Effortless Closing Time Automation",
    impactDescription:
      "Solo shop owners and studio managers can lock up with a single biometric gesture. SmartShut secures inventory and isolates non-critical retail lighting simultaneously.",
    benefitStat: "Single-touch locking & power shutdown",
    icon: Store,
    themeColor: "text-purple-300 bg-purple-950/60 border-purple-500/30",
    borderGlow: "hover:border-purple-400/60",
  },
];

export default function ApplicationsSection() {
  const [activeTab, setActiveTab] = useState<string>("offices");
  const activeScene = scenes.find((s) => s.id === activeTab) || scenes[0];

  return (
    <section id="applications" className="py-24 relative overflow-hidden bg-[#070311]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/3 w-[600px] h-[500px] bg-brand-purple/15 blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/70 border border-purple-500/30 backdrop-blur-md mb-4">
            <span className="w-2 h-2 rounded-full bg-brand-green" />
            <span className="text-xs font-mono font-medium text-purple-200 uppercase tracking-wider">
              REAL-WORLD ADAPTABILITY
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            BUILT FOR
            <br />
            <span className="text-gradient-mixed">REAL SPACES.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300">
            From university lecture halls to corporate headquarters, SmartShut adapts its access rules and power modulation to diverse architectural environments.
          </p>

          {/* Interactive Tab Switcher */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {scenes.map((s) => (
              <button
                key={s.id}
                onClick={() => setActiveTab(s.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono transition-all ${
                  activeTab === s.id
                    ? "bg-purple-900/60 border border-brand-green text-white shadow-[0_0_20px_rgba(0,245,155,0.25)] font-bold"
                    : "bg-[#110724] border border-purple-500/20 text-slate-400 hover:text-white"
                }`}
              >
                <s.icon className="w-4 h-4 text-brand-green" />
                <span>{s.category}</span>
              </button>
            ))}
          </div>
        </div>

        {/* LARGE ARCHITECTURAL SCENE DISPLAY */}
        <div className="rounded-3xl p-6 sm:p-10 bg-gradient-to-b from-[#150a2c]/90 via-[#0d051c]/95 to-[#06020f] border border-purple-500/30 shadow-2xl backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Architectural Visual Scene Render (7 Cols) */}
            <div className="lg:col-span-7 relative">
              <div className="relative w-full aspect-[16/10] rounded-2xl bg-[#090413] border-2 border-purple-500/25 overflow-hidden flex flex-col justify-between p-6">
                {/* SVG Architectural Scene */}
                <svg
                  className="absolute inset-0 w-full h-full opacity-35"
                  viewBox="0 0 700 450"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Perspective grid lines */}
                  <line x1="0" y1="200" x2="700" y2="200" stroke="#7c3aed" strokeWidth="0.8" />
                  <line x1="100" y1="0" x2="250" y2="450" stroke="#7c3aed" strokeWidth="0.5" strokeDasharray="4 4" />
                  <line x1="600" y1="0" x2="450" y2="450" stroke="#7c3aed" strokeWidth="0.5" strokeDasharray="4 4" />
                  
                  {/* Architectural doorway center */}
                  <rect x="270" y="80" width="160" height="320" rx="6" fill="#14082c" stroke="#a855f7" strokeWidth="2" />
                  <rect x="290" y="100" width="120" height="280" rx="4" fill="#0b0319" stroke="#581c87" strokeWidth="1" />
                  
                  {/* Room Interior furniture silhouettes */}
                  <rect x="310" y="240" width="80" height="40" rx="2" fill="#1e103f" />
                  <circle cx="350" cy="180" r="10" fill="#2e1065" />
                  
                  {/* SmartShut Sensor Ring */}
                  <circle cx="280" cy="220" r="6" fill="#00f59b" />
                  <line x1="280" y1="220" x2="350" y2="220" stroke="#00f59b" strokeWidth="1.5" strokeDasharray="3 3" />
                </svg>

                {/* Top Corner Scene Tag */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#140a2b]/85 border border-purple-500/30 backdrop-blur-md">
                    <activeScene.icon className="w-4 h-4 text-brand-green" />
                    <span className="text-xs font-mono font-bold text-white tracking-wider">
                      {activeScene.category} ARCHITECTURE
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-brand-green px-2.5 py-1 rounded bg-brand-green/10 border border-brand-green/30">
                    CONCEPT PREVIEW
                  </span>
                </div>

                {/* Floating Architectural Indicators */}
                <div className="relative z-10 grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-black/60 border border-purple-500/30 backdrop-blur-md">
                    <div className="text-[10px] font-mono text-purple-300 uppercase">Deployed Zone</div>
                    <div className="text-xs font-mono font-bold text-white mt-0.5">
                      {activeScene.places[0]}
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-black/60 border border-brand-green/30 backdrop-blur-md">
                    <div className="text-[10px] font-mono text-brand-green uppercase">Verified State</div>
                    <div className="text-xs font-mono font-bold text-brand-green mt-0.5">
                      Secured · Power Paused
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Narrative & Benefit Details (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div>
                <span className="text-xs font-mono font-bold tracking-widest text-brand-green uppercase">
                  APPLICATION FOCUS // {activeScene.category}
                </span>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-2 mb-3">
                  {activeScene.title}
                </h3>

                <div className="text-xs font-mono text-purple-300 mb-4">
                  {activeScene.subtitle}
                </div>

                <div className="p-4 rounded-xl bg-[#0f0722] border border-purple-500/20 mb-6">
                  <div className="text-xs font-mono text-brand-green font-bold mb-1">
                    {activeScene.impactTitle}
                  </div>
                  <p className="text-xs text-slate-300 font-mono leading-relaxed">
                    {activeScene.impactDescription}
                  </p>
                </div>

                {/* Typical Rooms Tags */}
                <div>
                  <div className="text-[11px] font-mono uppercase text-slate-400 mb-2">
                    Key Implementation Scenarios
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {activeScene.places.map((p, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-lg bg-[#14082b] border border-purple-500/25 text-xs font-mono text-slate-200"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Benefit Highlight Stat */}
              <div className="p-3 rounded-xl bg-gradient-to-r from-emerald-950/40 to-[#0e211b] border border-brand-green/40 flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0" />
                <span className="text-xs font-mono font-bold text-white">
                  {activeScene.benefitStat}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
