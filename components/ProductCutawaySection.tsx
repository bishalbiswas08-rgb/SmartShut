"use client";

import React, { useState } from "react";
import {
  Fingerprint,
  Camera,
  Lock,
  Users,
  Cpu,
  PlugZap,
  Smartphone,
  Check,
  ChevronRight,
} from "lucide-react";

interface ComponentDetail {
  id: string;
  name: string;
  number: string;
  category: string;
  icon: React.ElementType;
  title: string;
  description: string;
  specs: string[];
  techColor: string;
  dotPosition: { top: string; left: string };
}

const componentsData: ComponentDetail[] = [
  {
    id: "fingerprint",
    number: "01",
    name: "Fingerprint Biometric Sensor",
    category: "Access Layer",
    icon: Fingerprint,
    title: "Instant Biometric Verification",
    description:
      "Encrypted capacitive biometric sensor engineered into the exterior door frame. Authorizes registered users within milliseconds with mechanical key fallback.",
    specs: ["Sub-300ms verification", "Tamper-resistant encasing", "Physical key override"],
    techColor: "text-emerald-700 dark:text-brand-green border-emerald-400/60 dark:border-brand-green/40",
    dotPosition: { top: "45%", left: "42%" },
  },
  {
    id: "camera",
    number: "02",
    name: "Wide-Angle Camera Sensor",
    category: "Vision & Security",
    icon: Camera,
    title: "Overwatch & Activity Monitoring",
    description:
      "Wide-angle optical sensor placed on the upper exterior and interior lintel to monitor transit, verify empty room thresholds, and capture motion logs.",
    specs: ["Edge activity sensing", "Local privacy processing", "Night vision assist"],
    techColor: "text-cyan-700 dark:text-brand-cyan border-cyan-400/60 dark:border-brand-cyan/40",
    dotPosition: { top: "18%", left: "50%" },
  },
  {
    id: "lock",
    number: "03",
    name: "Smart Motorized Deadbolt",
    category: "Mechanical Security",
    icon: Lock,
    title: "High-Torque Electronic Latch",
    description:
      "Reinforced stainless steel deadbolt with dual-solenoid engagement. Sends guaranteed hardware state signals (Locked vs Unlocked) to the power controller.",
    specs: ["Reinforced steel throw", "Position feedback sensors", "Manual interior emergency turn"],
    techColor: "text-purple-700 dark:text-purple-400 border-purple-400/60 dark:border-purple-400/40",
    dotPosition: { top: "54%", left: "55%" },
  },
  {
    id: "occupancy",
    number: "04",
    name: "Occupancy Detection Module",
    category: "Spatial Sensing",
    icon: Users,
    title: "Dual-Verification Space Tracking",
    description:
      "Combines vision-assisted entry/exit counting with infrared ambient detection. Prevents energy shutoff if anyone remains inside the room.",
    specs: ["Bidirectional counting", "Zero false-negative priority", "Safety lockout logic"],
    techColor: "text-emerald-700 dark:text-brand-green border-emerald-400/60 dark:border-brand-green/40",
    dotPosition: { top: "28%", left: "68%" },
  },
  {
    id: "controller",
    number: "05",
    name: "Central Logic Controller",
    category: "Embedded Brain",
    icon: Cpu,
    title: "On-Door Automation Engine",
    description:
      "Low-voltage embedded controller executing core SmartShut state machine. Evaluates the condition: (EMPTY + VERIFIED + LOCKED) => POWER_SAVING_ACTIVATE.",
    specs: ["Autonomous offline logic", "Relay bus interface", "Encrypted storage"],
    techColor: "text-purple-700 dark:text-purple-300 border-purple-400/60 dark:border-purple-300/40",
    dotPosition: { top: "62%", left: "42%" },
  },
  {
    id: "devices",
    number: "06",
    name: "Connected Room Device Hub",
    category: "Power Control",
    icon: PlugZap,
    title: "Non-Essential Energy Bus",
    description:
      "Communicates with room contactors or smart switches controlling lights, ceiling fans, and air conditioning. Cuts non-critical load while preserving essential outlets.",
    specs: ["Isolated essential circuits", "Surge protected relays", "Soft shutoff command"],
    techColor: "text-emerald-700 dark:text-brand-green border-emerald-400/60 dark:border-brand-green/40",
    dotPosition: { top: "78%", left: "65%" },
  },
  {
    id: "phone",
    number: "07",
    name: "Encrypted Mobile Gateway",
    category: "Remote Connectivity",
    icon: Smartphone,
    title: "Secure Companion Bridge",
    description:
      "Low-energy wireless bridge linking the door unit to the SmartShut companion application. View live status, access history, and configure daily schedules.",
    specs: ["Bluetooth LE & WiFi sync", "Real-time alerts", "Custom schedule manager"],
    techColor: "text-cyan-700 dark:text-brand-cyan border-cyan-400/60 dark:border-brand-cyan/40",
    dotPosition: { top: "72%", left: "26%" },
  },
];

export default function ProductCutawaySection() {
  const [selectedId, setSelectedId] = useState<string>("fingerprint");

  const selectedComponent =
    componentsData.find((c) => c.id === selectedId) || componentsData[0];

  return (
    <section id="features" className="py-16 sm:py-24 relative overflow-hidden bg-[#F0F1F5] dark:bg-[#070310]">
      {/* Background accents */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[320px] sm:w-[550px] lg:w-[800px] h-[280px] sm:h-[400px] max-w-full bg-purple-300/25 dark:bg-brand-purple/15 blur-[120px] sm:blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-950/70 border border-purple-200 dark:border-purple-500/30 backdrop-blur-md mb-4 shadow-sm">
            <Cpu className="w-3.5 h-3.5 text-emerald-600 dark:text-brand-green" />
            <span className="text-[11px] sm:text-xs font-mono font-semibold text-purple-900 dark:text-purple-200 uppercase tracking-wider">
              HARDWARE ARCHITECTURE
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#111218] dark:text-white leading-tight">
            ONE DOOR THAT
            <br />
            <span className="text-gradient-mixed">SECURES AND SAVES.</span>
          </h2>

          <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-[#4b5262] dark:text-slate-300">
            SmartShut integrates 7 coordinated subsystems into a single cohesive door framework. Hover or tap any component to inspect its role.
          </p>
        </div>

        {/* Main Cutaway Engineering Canvas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
          {/* Engineering Visual Diagram (Left 7 Cols) */}
          <div className="lg:col-span-7 relative w-full">
            <div className="relative rounded-2xl sm:rounded-3xl p-3.5 sm:p-6 lg:p-8 bg-white dark:bg-gradient-to-b dark:from-[#140b2b]/90 dark:via-[#0d061c]/95 dark:to-[#06020f] border border-[#D9DCE5] dark:border-purple-500/30 shadow-xl dark:shadow-2xl backdrop-blur-xl">
              {/* Top Diagram Bar */}
              <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-[#D9DCE5] dark:border-purple-500/20 text-[10px] sm:text-xs font-mono text-purple-900/80 dark:text-purple-300/80">
                <span className="flex items-center gap-1.5 truncate font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-brand-green flex-shrink-0" />
                  <span>SCHEMATIC: SMARTSHUT-V1</span>
                </span>
                <span className="text-[10px] sm:text-[11px] text-[#626775] dark:text-slate-400 flex-shrink-0 font-medium">CUTAWAY VIEW</span>
              </div>

              {/* Exploded / Cutaway SVG Canvas */}
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] my-3 sm:my-4 rounded-xl bg-[#EEF2F9] dark:bg-[#090414] border border-[#CBD5E1] dark:border-purple-900/40 overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-grid-pattern opacity-25" />

                <svg
                  className="w-full h-full max-h-[380px]"
                  viewBox="0 0 600 450"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="180"
                    y="40"
                    width="240"
                    height="370"
                    rx="12"
                    className="fill-white dark:fill-[#150a2e] stroke-slate-400 dark:stroke-[#5b21b6]"
                    strokeWidth="2"
                  />
                  <rect
                    x="195"
                    y="55"
                    width="210"
                    height="340"
                    rx="8"
                    className="fill-[#F8FAFC] dark:fill-[#0f0722] stroke-slate-300 dark:stroke-[#3b136f]"
                    strokeWidth="1.5"
                  />
                  <rect
                    x="215"
                    y="80"
                    width="170"
                    height="200"
                    rx="6"
                    className="fill-[#E2E8F0] dark:fill-[#180e36] stroke-purple-300 dark:stroke-[#6d28d9]"
                    strokeWidth="1"
                    opacity="0.6"
                  />

                  <path
                    d="M300 65 L300 130 L250 130 L250 200"
                    stroke="#00f59b"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    opacity="0.7"
                    className="animate-energy-line"
                  />
                  <path
                    d="M300 200 L300 280 L350 280 L350 350"
                    stroke="#a855f7"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    opacity="0.7"
                  />
                  <path
                    d="M250 280 L160 320"
                    stroke="#06b6d4"
                    strokeWidth="1.2"
                    strokeDasharray="3 3"
                    opacity="0.8"
                  />
                  <path
                    d="M350 280 L440 350"
                    stroke="#00f59b"
                    strokeWidth="1.2"
                    strokeDasharray="3 3"
                    opacity="0.8"
                  />

                  {/* Component 02: Camera */}
                  <g className="cursor-pointer">
                    <circle cx="300" cy="70" r="14" className="fill-white dark:fill-[#0c0618] stroke-cyan-500 dark:stroke-[#06b6d4]" strokeWidth="2" />
                    <circle cx="300" cy="70" r="6" fill="#06b6d4" opacity="0.8" />
                  </g>

                  {/* Component 01: Fingerprint */}
                  <g className="cursor-pointer">
                    <rect x="235" y="175" width="46" height="52" rx="8" className="fill-white dark:fill-[#140a2b] stroke-emerald-500 dark:stroke-[#00f59b]" strokeWidth="2" />
                    <circle cx="258" cy="201" r="12" className="fill-emerald-50 dark:fill-[#1e1140] stroke-emerald-500 dark:stroke-[#00f59b]" strokeWidth="1" />
                  </g>

                  {/* Component 03: Motorized Deadbolt */}
                  <g className="cursor-pointer">
                    <rect x="330" y="225" width="55" height="40" rx="6" className="fill-white dark:fill-[#190e38] stroke-purple-500 dark:stroke-[#a855f7]" strokeWidth="2" />
                    <rect x="385" y="235" width="25" height="20" rx="3" className="fill-purple-600 dark:fill-[#a855f7]" />
                  </g>

                  {/* Component 05: CPU */}
                  <g className="cursor-pointer">
                    <rect x="235" y="260" width="50" height="45" rx="6" className="fill-white dark:fill-[#170c30] stroke-purple-400 dark:stroke-[#c084fc]" strokeWidth="1.5" />
                    <circle cx="260" cy="282" r="8" className="fill-purple-600 dark:fill-[#581c87]" />
                  </g>

                  {/* Component 04: Occupancy */}
                  <g className="cursor-pointer">
                    <rect x="380" y="110" width="80" height="34" rx="6" className="fill-emerald-50 dark:fill-[#0e071c] stroke-emerald-500 dark:stroke-[#00f59b]" strokeWidth="1.5" />
                    <text x="420" y="132" className="fill-emerald-800 dark:fill-[#00f59b]" fontSize="10" fontFamily="monospace" fontWeight="bold" textAnchor="middle">OCCUPANCY</text>
                  </g>

                  {/* Component 06: Energy Bus */}
                  <g className="cursor-pointer">
                    <rect x="380" y="340" width="85" height="34" rx="6" className="fill-emerald-50 dark:fill-[#0a1d18] stroke-emerald-500 dark:stroke-[#00f59b]" strokeWidth="1.5" />
                    <text x="422" y="362" className="fill-emerald-800 dark:fill-[#00f59b]" fontSize="10" fontFamily="monospace" fontWeight="bold" textAnchor="middle">ENERGY BUS</text>
                  </g>

                  {/* Component 07: Gateway */}
                  <g className="cursor-pointer">
                    <rect x="110" y="320" width="75" height="36" rx="6" className="fill-cyan-50 dark:fill-[#061622] stroke-cyan-500 dark:stroke-[#06b6d4]" strokeWidth="1.5" />
                    <text x="147" y="342" className="fill-cyan-800 dark:fill-[#38bdf8]" fontSize="10" fontFamily="monospace" fontWeight="bold" textAnchor="middle">GATEWAY</text>
                  </g>
                </svg>

                {/* Interactive Hotspot Buttons */}
                {componentsData.map((item) => {
                  const isSelected = selectedId === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setSelectedId(item.id)}
                      onMouseEnter={() => setSelectedId(item.id)}
                      style={{ top: item.dotPosition.top, left: item.dotPosition.left }}
                      className={`absolute -translate-x-1/2 -translate-y-1/2 w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-mono text-[10px] sm:text-xs font-bold transition-all z-20 ${
                        isSelected
                          ? "bg-brand-green text-black ring-4 ring-brand-green/30 scale-110 sm:scale-125 shadow-lg"
                          : "bg-white dark:bg-surface-100 text-[#111218] dark:text-white border border-[#CBD5E1] dark:border-purple-400/40 hover:border-emerald-500 dark:hover:border-brand-green hover:scale-110 shadow-sm"
                      }`}
                      aria-label={`Inspect ${item.name}`}
                    >
                      {item.number}
                    </button>
                  );
                })}
              </div>

              {/* Bottom Instructions */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-[11px] sm:text-xs font-mono text-[#626775] dark:text-slate-400 font-medium">
                <span>Select node 01–07 to inspect technical subsystem</span>
                <span className="text-emerald-700 dark:text-brand-green font-bold">Interactive Cutaway</span>
              </div>
            </div>
          </div>

          {/* Component Deep-Dive Inspection Card (Right 5 Cols) */}
          <div className="lg:col-span-5 flex flex-col space-y-4 w-full">
            <div className="rounded-2xl p-4 sm:p-6 lg:p-7 bg-white dark:bg-gradient-to-b dark:from-[#180d33] dark:via-[#110724] dark:to-[#0a0416] border border-[#D9DCE5] dark:border-purple-500/30 shadow-xl dark:shadow-2xl backdrop-blur-xl relative">
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <span className="text-[10px] sm:text-xs font-mono font-bold tracking-wider text-emerald-800 dark:text-brand-green bg-emerald-50 dark:bg-brand-green/10 px-2.5 sm:px-3 py-1 rounded-full border border-emerald-300 dark:border-brand-green/30">
                  COMPONENT {selectedComponent.number} // {selectedComponent.category}
                </span>
                <selectedComponent.icon className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 dark:text-brand-green flex-shrink-0" />
              </div>

              <h3 className="text-lg sm:text-2xl font-bold text-[#111218] dark:text-white mb-1.5 sm:mb-2">
                {selectedComponent.name}
              </h3>

              <div className="text-xs sm:text-sm font-semibold text-purple-800 dark:text-purple-200 mb-2 sm:mb-3">
                {selectedComponent.title}
              </div>

              <p className="text-xs sm:text-sm text-[#4b5262] dark:text-slate-300 leading-relaxed mb-4 sm:mb-6">
                {selectedComponent.description}
              </p>

              {/* Specs & Architecture List */}
              <div className="border-t border-[#D9DCE5] dark:border-purple-500/20 pt-3 sm:pt-4">
                <div className="text-[11px] sm:text-xs font-mono uppercase text-purple-900/80 dark:text-purple-300/80 mb-2 sm:mb-3 font-semibold">
                  Technical Characteristics
                </div>
                <div className="space-y-1.5 sm:space-y-2">
                  {selectedComponent.specs.map((spec, i) => (
                    <div key={i} className="flex items-center gap-2 text-[11px] sm:text-xs text-[#111218] dark:text-slate-200 font-mono">
                      <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-emerald-100 dark:bg-brand-green/15 flex items-center justify-center flex-shrink-0">
                        <Check className="w-2.5 h-2.5 text-emerald-700 dark:text-brand-green" />
                      </div>
                      <span className="truncate font-medium">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Subsystem Quick Switcher Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-1.5 sm:gap-2">
              {componentsData.map((item) => {
                const isSelected = selectedId === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setSelectedId(item.id)}
                    className={`flex items-center justify-between px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl text-left font-mono text-[10px] sm:text-xs transition-all ${
                      isSelected
                        ? "bg-purple-100 dark:bg-purple-900/60 text-purple-950 dark:text-white border border-purple-400 dark:border-brand-green shadow-sm font-semibold"
                        : "bg-white dark:bg-[#0d061c]/80 text-[#626775] dark:text-slate-400 hover:text-[#111218] dark:hover:text-white border border-[#D9DCE5] dark:border-purple-500/20 hover:border-purple-300 shadow-sm"
                    }`}
                  >
                    <div className="flex items-center gap-1.5 truncate">
                      <span className="text-[10px] text-emerald-700 dark:text-brand-green font-bold flex-shrink-0">{item.number}</span>
                      <span className="truncate">{item.name.split(" ")[0]}</span>
                    </div>
                    <ChevronRight className="w-3 h-3 flex-shrink-0 opacity-50 ml-1" />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
