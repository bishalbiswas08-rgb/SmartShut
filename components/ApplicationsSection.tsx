"use client";

import React, { useState } from "react";
import {
  Building2,
  GraduationCap,
  Store,
  CheckCircle2,
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
  },
];

export default function ApplicationsSection() {
  const [activeTab, setActiveTab] = useState<string>("offices");
  const activeScene = scenes.find((s) => s.id === activeTab) || scenes[0];

  return (
    <section id="applications" className="py-16 sm:py-24 relative overflow-hidden bg-[#F7F8FA] dark:bg-[#070311]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[500px] lg:w-[600px] max-w-[90vw] h-[500px] bg-purple-300/20 dark:bg-brand-purple/15 blur-[140px] sm:blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-950/70 border border-purple-200 dark:border-purple-500/30 backdrop-blur-md mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-brand-green" />
            <span className="text-[11px] sm:text-xs font-mono font-semibold text-purple-900 dark:text-purple-200 uppercase tracking-wider">
              REAL-WORLD ADAPTABILITY
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#111218] dark:text-white leading-tight">
            BUILT FOR
            <br />
            <span className="text-gradient-mixed">REAL SPACES.</span>
          </h2>

          <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-[#4b5262] dark:text-slate-300">
            From university lecture halls to corporate headquarters, SmartShut adapts its access rules and power modulation to diverse architectural environments.
          </p>

          {/* Interactive Tab Switcher */}
          <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {scenes.map((s) => (
              <button
                key={s.id}
                onClick={() => setActiveTab(s.id)}
                className={`flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-mono transition-all ${
                  activeTab === s.id
                    ? "bg-purple-100 dark:bg-purple-900/60 border border-emerald-500 dark:border-brand-green text-purple-950 dark:text-white shadow-sm dark:shadow-[0_0_20px_rgba(0,245,155,0.25)] font-bold"
                    : "bg-white dark:bg-[#110724] border border-[#CBD5E1] dark:border-purple-500/20 text-[#626775] dark:text-slate-400 hover:text-[#111218] dark:hover:text-white shadow-sm"
                }`}
              >
                <s.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 dark:text-brand-green" />
                <span>{s.category}</span>
              </button>
            ))}
          </div>
        </div>

        {/* LARGE ARCHITECTURAL SCENE DISPLAY */}
        <div className="rounded-2xl sm:rounded-3xl p-3.5 sm:p-6 lg:p-10 bg-white dark:bg-gradient-to-b dark:from-[#150a2c]/90 dark:via-[#0d051c]/95 dark:to-[#06020f] border border-[#D9DCE5] dark:border-purple-500/30 shadow-xl dark:shadow-2xl backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            {/* Left: Architectural Visual Scene Render (7 Cols) */}
            <div className="lg:col-span-7 relative w-full">
              <div className="relative w-full aspect-[16/10] rounded-xl sm:rounded-2xl bg-[#EEF2F9] dark:bg-[#090413] border-2 border-[#CBD5E1] dark:border-purple-500/25 overflow-hidden flex flex-col justify-between p-3.5 sm:p-6 shadow-sm">
                <svg
                  className="absolute inset-0 w-full h-full opacity-35"
                  viewBox="0 0 700 450"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line x1="0" y1="200" x2="700" y2="200" stroke="#94a3b8" className="dark:stroke-[#7c3aed]" strokeWidth="0.8" />
                  <line x1="100" y1="0" x2="250" y2="450" stroke="#94a3b8" className="dark:stroke-[#7c3aed]" strokeWidth="0.5" strokeDasharray="4 4" />
                  <line x1="600" y1="0" x2="450" y2="450" stroke="#94a3b8" className="dark:stroke-[#7c3aed]" strokeWidth="0.5" strokeDasharray="4 4" />
                  
                  <rect x="270" y="80" width="160" height="320" rx="6" className="fill-white dark:fill-[#14082c] stroke-purple-400 dark:stroke-[#a855f7]" strokeWidth="2" />
                  <rect x="290" y="100" width="120" height="280" rx="4" className="fill-[#F8FAFC] dark:fill-[#0b0319] stroke-purple-300 dark:stroke-[#581c87]" strokeWidth="1" />
                  
                  <rect x="310" y="240" width="80" height="40" rx="2" className="fill-purple-100 dark:fill-[#1e103f]" />
                  <circle cx="350" cy="180" r="10" className="fill-purple-200 dark:fill-[#2e1065]" />
                  
                  <circle cx="280" cy="220" r="6" fill="#00f59b" />
                  <line x1="280" y1="220" x2="350" y2="220" stroke="#00f59b" strokeWidth="1.5" strokeDasharray="3 3" />
                </svg>

                {/* Top Corner Scene Tag */}
                <div className="relative z-10 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl bg-white/95 dark:bg-[#140a2b]/85 border border-[#CBD5E1] dark:border-purple-500/30 backdrop-blur-md shadow-sm">
                    <activeScene.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 dark:text-brand-green" />
                    <span className="text-[10px] sm:text-xs font-mono font-bold text-[#111218] dark:text-white tracking-wider truncate">
                      {activeScene.category} ARCHITECTURE
                    </span>
                  </div>
                  <span className="text-[9px] sm:text-[11px] font-mono text-emerald-800 dark:text-brand-green px-2 py-0.5 sm:py-1 rounded bg-emerald-50 dark:bg-brand-green/10 border border-emerald-300 dark:border-brand-green/30 font-bold flex-shrink-0">
                    CONCEPT PREVIEW
                  </span>
                </div>

                {/* Floating Architectural Indicators */}
                <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                  <div className="p-2 sm:p-3 rounded-xl bg-white/95 dark:bg-black/60 border border-[#CBD5E1] dark:border-purple-500/30 backdrop-blur-md shadow-sm">
                    <div className="text-[9px] sm:text-[10px] font-mono text-purple-800 dark:text-purple-300 uppercase font-semibold">Deployed Zone</div>
                    <div className="text-[11px] sm:text-xs font-mono font-bold text-[#111218] dark:text-white mt-0.5 truncate">
                      {activeScene.places[0]}
                    </div>
                  </div>
                  <div className="p-2 sm:p-3 rounded-xl bg-emerald-50/95 dark:bg-black/60 border border-emerald-400 dark:border-brand-green/30 backdrop-blur-md shadow-sm">
                    <div className="text-[9px] sm:text-[10px] font-mono text-emerald-800 dark:text-brand-green uppercase font-semibold">Verified State</div>
                    <div className="text-[11px] sm:text-xs font-mono font-bold text-emerald-900 dark:text-brand-green mt-0.5 truncate">
                      Secured · Power Paused
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Narrative & Benefit Details (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-4 sm:space-y-6 w-full">
              <div>
                <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest text-emerald-800 dark:text-brand-green uppercase">
                  APPLICATION FOCUS // {activeScene.category}
                </span>

                <h3 className="text-xl sm:text-3xl font-extrabold text-[#111218] dark:text-white mt-1.5 sm:mt-2 mb-2 sm:mb-3">
                  {activeScene.title}
                </h3>

                <div className="text-[11px] sm:text-xs font-mono text-purple-800 dark:text-purple-300 mb-3 sm:mb-4 font-semibold">
                  {activeScene.subtitle}
                </div>

                <div className="p-3 sm:p-4 rounded-xl bg-[#F8FAFC] dark:bg-[#0f0722] border border-[#CBD5E1] dark:border-purple-500/20 mb-4 sm:mb-6 shadow-sm">
                  <div className="text-xs font-mono text-emerald-800 dark:text-brand-green font-bold mb-1">
                    {activeScene.impactTitle}
                  </div>
                  <p className="text-[11px] sm:text-xs text-[#4b5262] dark:text-slate-300 font-mono leading-relaxed font-medium">
                    {activeScene.impactDescription}
                  </p>
                </div>

                {/* Typical Rooms Tags */}
                <div>
                  <div className="text-[10px] sm:text-[11px] font-mono uppercase text-[#626775] dark:text-slate-400 mb-2 font-semibold">
                    Key Implementation Scenarios
                  </div>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {activeScene.places.map((p, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg bg-white dark:bg-[#14082b] border border-[#CBD5E1] dark:border-purple-500/25 text-[11px] sm:text-xs font-mono text-[#111218] dark:text-slate-200 shadow-sm font-medium"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Benefit Highlight Stat */}
              <div className="p-2.5 sm:p-3 rounded-xl bg-emerald-50 dark:bg-gradient-to-r dark:from-emerald-950/40 dark:to-[#0e211b] border border-emerald-400 dark:border-brand-green/40 flex items-center gap-2.5 sm:gap-3 shadow-sm">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-700 dark:text-brand-green flex-shrink-0" />
                <span className="text-[11px] sm:text-xs font-mono font-bold text-emerald-950 dark:text-white">
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
