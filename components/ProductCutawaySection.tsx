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
  const [selectedId, setSelectedId] = useState<string>("devices");

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
                  <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-brand-green flex-shrink-0 animate-pulse" />
                  <span>SCHEMATIC: SMARTSHUT-V1</span>
                </span>
                <span className="text-[10px] sm:text-[11px] text-[#626775] dark:text-slate-400 flex-shrink-0 font-medium">CUTAWAY VIEW</span>
              </div>

              {/* Exploded / Cutaway Technical Canvas */}
              <div className="relative w-full my-3 sm:my-4 rounded-xl bg-[#F8FAFC] dark:bg-[#090414] border border-[#CBD5E1] dark:border-purple-900/40 overflow-hidden flex items-center justify-center p-1 sm:p-2">
                <div className="absolute inset-0 bg-grid-pattern opacity-30 dark:opacity-20 pointer-events-none" />

                {/* DESKTOP & TABLET SCHEMATIC (>= 640px) */}
                <svg
                  className="hidden sm:block w-full h-auto max-h-[520px] select-none"
                  viewBox="0 0 760 560"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <filter id="glow-green-dt" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="3" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                    <filter id="glow-cyan-dt" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="3" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                    <filter id="glow-purple-dt" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="3" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                    <linearGradient id="door-grad-dt" x1="240" y1="55" x2="520" y2="505" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#1e103d" className="dark:stop-color-[#1e103d] stop-color-slate-100" />
                      <stop offset="100%" stopColor="#0c051a" className="dark:stop-color-[#0c051a] stop-color-slate-200" />
                    </linearGradient>
                    <linearGradient id="chassis-grad-dt" x1="270" y1="80" x2="490" y2="480" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#25144b" stopOpacity="0.85" className="dark:stop-color-[#25144b] stop-color-slate-50" />
                      <stop offset="100%" stopColor="#0f0724" stopOpacity="0.95" className="dark:stop-color-[#0f0724] stop-color-slate-100" />
                    </linearGradient>
                  </defs>

                  {/* ===================== THE SMARTSHUT DOOR ===================== */}
                  {/* Outer Architectural Frame */}
                  <rect
                    x="235"
                    y="55"
                    width="290"
                    height="450"
                    rx="14"
                    className="fill-[#E2E8F0] dark:fill-[#120826] stroke-slate-400 dark:stroke-purple-600/60"
                    strokeWidth="2.5"
                  />
                  {/* Internal Door Reveal / Jamb */}
                  <rect
                    x="245"
                    y="65"
                    width="270"
                    height="430"
                    rx="10"
                    className="fill-[#F1F5F9] dark:fill-[#0b0517] stroke-slate-300 dark:stroke-purple-900/50"
                    strokeWidth="1.5"
                  />

                  {/* Left Jamb Architectural Hinges */}
                  <rect x="230" y="105" width="8" height="26" rx="2" className="fill-slate-400 dark:fill-purple-500/70 stroke-slate-500 dark:stroke-purple-400/80" strokeWidth="1" />
                  <rect x="230" y="265" width="8" height="26" rx="2" className="fill-slate-400 dark:fill-purple-500/70 stroke-slate-500 dark:stroke-purple-400/80" strokeWidth="1" />
                  <rect x="230" y="425" width="8" height="26" rx="2" className="fill-slate-400 dark:fill-purple-500/70 stroke-slate-500 dark:stroke-purple-400/80" strokeWidth="1" />

                  {/* Right Jamb Strike Plate & Mortise Receiver */}
                  <rect x="517" y="260" width="8" height="60" rx="2" className="fill-slate-400 dark:fill-purple-500/70 stroke-slate-500 dark:stroke-purple-400/80" strokeWidth="1" />
                  <rect x="519" y="278" width="5" height="24" rx="1" className="fill-slate-600 dark:fill-[#05020a]" />

                  {/* Door Slab Surface */}
                  <rect
                    x="252"
                    y="72"
                    width="256"
                    height="416"
                    rx="8"
                    className="fill-white dark:fill-[#0e061e] stroke-slate-300 dark:stroke-purple-700/60"
                    strokeWidth="1.5"
                  />

                  {/* Architectural Accent Groove & Pull Bar */}
                  <line x1="266" y1="80" x2="266" y2="480" className="stroke-slate-200 dark:stroke-purple-900/40" strokeWidth="1.5" />
                  <rect x="492" y="215" width="6" height="130" rx="3" className="fill-slate-400 dark:fill-purple-400/60 stroke-slate-500 dark:stroke-purple-300/40" strokeWidth="1" />

                  {/* Cutaway Transparent Inspection Chassis Panel */}
                  <rect
                    x="272"
                    y="80"
                    width="216"
                    height="400"
                    rx="8"
                    className="fill-slate-50/90 dark:fill-[#150a2e]/90 stroke-slate-300 dark:stroke-purple-600/40"
                    strokeWidth="1.5"
                  />

                  {/* Internal PCB Blueprint Circuit Traces */}
                  <g className="stroke-slate-300 dark:stroke-purple-700/40" strokeWidth="1" fill="none">
                    <path d="M380 95 L380 140 L340 140 L340 255" strokeDasharray="3 3" />
                    <path d="M380 140 L420 140" strokeDasharray="3 3" />
                    <path d="M340 325 L340 375 L380 375 L380 395" strokeDasharray="3 3" />
                    <path d="M365 290 L415 290" strokeDasharray="3 3" />
                    <path d="M315 240 L315 255" strokeDasharray="3 3" />
                    <path d="M315 325 L315 375" strokeDasharray="3 3" />
                  </g>

                  {/* ===================== DOOR INTERNAL MODULES ===================== */}

                  {/* 02 CAMERA MODULE (Top Lintel) */}
                  <g className="cursor-pointer" onClick={() => setSelectedId("camera")}>
                    <rect
                      x="350"
                      y="58"
                      width="60"
                      height="28"
                      rx="6"
                      className={`transition-all duration-300 ${
                        selectedId === "camera"
                          ? "fill-cyan-50 dark:fill-[#08202c] stroke-cyan-500 dark:stroke-brand-cyan"
                          : "fill-white dark:fill-[#140b2b] stroke-slate-300 dark:stroke-purple-500/50"
                      }`}
                      strokeWidth={selectedId === "camera" ? "2" : "1.2"}
                      filter={selectedId === "camera" ? "url(#glow-cyan-dt)" : undefined}
                    />
                    <circle cx="380" cy="72" r="9" className="fill-slate-100 dark:fill-[#0c051a] stroke-cyan-500 dark:stroke-brand-cyan" strokeWidth="1.5" />
                    <circle cx="380" cy="72" r="4.5" className="fill-cyan-500 dark:fill-brand-cyan" />
                    <circle cx="381.5" cy="70.5" r="1.5" fill="white" />
                    {/* Visual Coverage Field Cone */}
                    <path d="M372 86 L348 116 L412 116 Z" className="fill-cyan-400/20 dark:fill-brand-cyan/15 stroke-cyan-400/40 dark:stroke-brand-cyan/30" strokeWidth="0.8" strokeDasharray="2 2" />
                  </g>

                  {/* 04 OCCUPANCY SENSOR MODULE (Upper Right) */}
                  <g className="cursor-pointer" onClick={() => setSelectedId("occupancy")}>
                    <rect
                      x="418"
                      y="112"
                      width="64"
                      height="46"
                      rx="6"
                      className={`transition-all duration-300 ${
                        selectedId === "occupancy"
                          ? "fill-emerald-50 dark:fill-[#06241a] stroke-emerald-500 dark:stroke-brand-green"
                          : "fill-white dark:fill-[#140b2b] stroke-slate-300 dark:stroke-purple-500/50"
                      }`}
                      strokeWidth={selectedId === "occupancy" ? "2" : "1.2"}
                      filter={selectedId === "occupancy" ? "url(#glow-green-dt)" : undefined}
                    />
                    {/* Dual sensing windows */}
                    <circle cx="437" cy="135" r="8" className="fill-emerald-100 dark:fill-[#0e3b2e] stroke-emerald-500 dark:stroke-brand-green" strokeWidth="1.2" />
                    <circle cx="437" cy="135" r="3.5" className="fill-emerald-600 dark:fill-brand-green" />
                    <circle cx="463" cy="135" r="8" className="fill-emerald-100 dark:fill-[#0e3b2e] stroke-emerald-500 dark:stroke-brand-green" strokeWidth="1.2" />
                    <rect x="460" y="132" width="6" height="6" rx="1" className="fill-emerald-600 dark:fill-brand-green" />
                    <text x="450" y="122" className="fill-emerald-800 dark:fill-brand-green text-[7px] font-mono font-bold" textAnchor="middle">DUAL PIR+OPT</text>
                  </g>

                  {/* 01 FINGERPRINT BIOMETRIC SENSOR (Ergonomic Left Escutcheon) */}
                  <g className="cursor-pointer" onClick={() => setSelectedId("fingerprint")}>
                    <rect
                      x="285"
                      y="175"
                      width="58"
                      height="64"
                      rx="8"
                      className={`transition-all duration-300 ${
                        selectedId === "fingerprint"
                          ? "fill-emerald-50 dark:fill-[#06241a] stroke-emerald-500 dark:stroke-brand-green"
                          : "fill-white dark:fill-[#140b2b] stroke-slate-300 dark:stroke-purple-500/50"
                      }`}
                      strokeWidth={selectedId === "fingerprint" ? "2" : "1.2"}
                      filter={selectedId === "fingerprint" ? "url(#glow-green-dt)" : undefined}
                    />
                    {/* Biometric Glass Surface */}
                    <rect x="296" y="184" width="36" height="46" rx="6" className="fill-slate-100 dark:fill-[#0a1824] stroke-emerald-400 dark:stroke-brand-green/60" strokeWidth="1" />
                    {/* Concentric Fingerprint Arcs */}
                    <path d="M314 200 A7 7 0 0 1 314 214" fill="none" className="stroke-emerald-600 dark:stroke-brand-green" strokeWidth="1.2" strokeLinecap="round" />
                    <path d="M314 196 A11 11 0 0 1 314 218" fill="none" className="stroke-emerald-600 dark:stroke-brand-green" strokeWidth="1.2" strokeLinecap="round" />
                    <path d="M314 192 A15 15 0 0 1 314 222" fill="none" className="stroke-emerald-600 dark:stroke-brand-green" strokeWidth="1.2" strokeLinecap="round" />
                    <circle cx="314" cy="227" r="1.8" className="fill-emerald-500 dark:fill-brand-green" />
                  </g>

                  {/* 05 CENTRAL LOGIC CONTROLLER (Core Embedded Brain) */}
                  <g className="cursor-pointer" onClick={() => setSelectedId("controller")}>
                    <rect
                      x="285"
                      y="260"
                      width="66"
                      height="65"
                      rx="6"
                      className={`transition-all duration-300 ${
                        selectedId === "controller"
                          ? "fill-purple-50 dark:fill-[#200c3b] stroke-purple-500 dark:stroke-purple-300"
                          : "fill-white dark:fill-[#140b2b] stroke-slate-300 dark:stroke-purple-500/50"
                      }`}
                      strokeWidth={selectedId === "controller" ? "2" : "1.2"}
                      filter={selectedId === "controller" ? "url(#glow-purple-dt)" : undefined}
                    />
                    {/* Chip Body */}
                    <rect x="296" y="271" width="44" height="43" rx="4" className="fill-slate-800 dark:fill-[#090314] stroke-purple-400 dark:stroke-purple-400" strokeWidth="1" />
                    {/* Pin Headers */}
                    <line x1="292" y1="279" x2="296" y2="279" className="stroke-purple-300" strokeWidth="1.2" />
                    <line x1="292" y1="286" x2="296" y2="286" className="stroke-purple-300" strokeWidth="1.2" />
                    <line x1="292" y1="293" x2="296" y2="293" className="stroke-purple-300" strokeWidth="1.2" />
                    <line x1="292" y1="300" x2="296" y2="300" className="stroke-purple-300" strokeWidth="1.2" />
                    <line x1="340" y1="279" x2="344" y2="279" className="stroke-purple-300" strokeWidth="1.2" />
                    <line x1="340" y1="286" x2="344" y2="286" className="stroke-purple-300" strokeWidth="1.2" />
                    <line x1="340" y1="293" x2="344" y2="293" className="stroke-purple-300" strokeWidth="1.2" />
                    <line x1="340" y1="300" x2="344" y2="300" className="stroke-purple-300" strokeWidth="1.2" />
                    <text x="318" y="295" className="fill-purple-300 dark:fill-purple-200 text-[8px] font-mono font-bold" textAnchor="middle">CORE-X</text>
                  </g>

                  {/* 03 SMART MOTORIZED DEADBOLT (Mechanical Lock Assembly) */}
                  <g className="cursor-pointer" onClick={() => setSelectedId("lock")}>
                    <rect
                      x="415"
                      y="262"
                      width="70"
                      height="58"
                      rx="6"
                      className={`transition-all duration-300 ${
                        selectedId === "lock"
                          ? "fill-purple-50 dark:fill-[#200c3b] stroke-purple-500 dark:stroke-purple-400"
                          : "fill-white dark:fill-[#140b2b] stroke-slate-300 dark:stroke-purple-500/50"
                      }`}
                      strokeWidth={selectedId === "lock" ? "2" : "1.2"}
                      filter={selectedId === "lock" ? "url(#glow-purple-dt)" : undefined}
                    />
                    {/* Dual Solenoids */}
                    <rect x="423" y="270" width="16" height="20" rx="3" className="fill-purple-700 dark:fill-purple-600" />
                    <rect x="423" y="294" width="16" height="20" rx="3" className="fill-purple-700 dark:fill-purple-600" />
                    {/* Drive Gear */}
                    <circle cx="452" cy="291" r="9" className="fill-slate-200 dark:fill-[#180a30] stroke-purple-400" strokeWidth="1.2" />
                    <circle cx="452" cy="291" r="3" className="fill-purple-600" />
                    {/* Hardened Steel Deadbolt Extending Into Strike Plate */}
                    <rect
                      x="475"
                      y="283"
                      width="46"
                      height="16"
                      rx="2"
                      className="fill-slate-300 dark:fill-slate-200 stroke-slate-500 dark:stroke-white"
                      strokeWidth="1.2"
                    />
                    <text x="498" y="294" className="fill-slate-800 dark:fill-slate-900 text-[7px] font-mono font-bold" textAnchor="middle">BOLT</text>
                  </g>

                  {/* 07 ENCRYPTED GATEWAY (Secure Wireless Bridge) */}
                  <g className="cursor-pointer" onClick={() => setSelectedId("phone")}>
                    <rect
                      x="285"
                      y="375"
                      width="60"
                      height="52"
                      rx="6"
                      className={`transition-all duration-300 ${
                        selectedId === "phone"
                          ? "fill-cyan-50 dark:fill-[#08202c] stroke-cyan-500 dark:stroke-brand-cyan"
                          : "fill-white dark:fill-[#140b2b] stroke-slate-300 dark:stroke-purple-500/50"
                      }`}
                      strokeWidth={selectedId === "phone" ? "2" : "1.2"}
                      filter={selectedId === "phone" ? "url(#glow-cyan-dt)" : undefined}
                    />
                    {/* Transceiver Chip */}
                    <rect x="294" y="385" width="22" height="22" rx="3" className="fill-cyan-800 dark:fill-[#051c24] stroke-cyan-400" strokeWidth="1" />
                    {/* RF Wireless Radiation Waves */}
                    <path d="M326 390 A6 6 0 0 1 326 402" fill="none" className="stroke-cyan-500 dark:stroke-brand-cyan" strokeWidth="1.2" />
                    <path d="M331 386 A11 11 0 0 1 331 406" fill="none" className="stroke-cyan-500 dark:stroke-brand-cyan" strokeWidth="1.2" />
                    <text x="315" y="420" className="fill-cyan-700 dark:fill-brand-cyan text-[7px] font-mono font-bold" textAnchor="middle">RF BRIDGE</text>
                  </g>

                  {/* 06 CONNECTED ROOM DEVICE HUB (Non-Essential Energy Bus) */}
                  <g className="cursor-pointer" onClick={() => setSelectedId("devices")}>
                    <rect
                      x="410"
                      y="375"
                      width="68"
                      height="54"
                      rx="6"
                      className={`transition-all duration-300 ${
                        selectedId === "devices"
                          ? "fill-emerald-50 dark:fill-[#06241a] stroke-emerald-500 dark:stroke-brand-green"
                          : "fill-white dark:fill-[#140b2b] stroke-slate-300 dark:stroke-purple-500/50"
                      }`}
                      strokeWidth={selectedId === "devices" ? "2.5" : "1.2"}
                      filter={selectedId === "devices" ? "url(#glow-green-dt)" : undefined}
                    />
                    {/* 3 Relay Contactors */}
                    <rect x="418" y="383" width="13" height="15" rx="2" className="fill-emerald-700 dark:fill-[#083827] stroke-emerald-400" strokeWidth="0.8" />
                    <rect x="435" y="383" width="13" height="15" rx="2" className="fill-emerald-700 dark:fill-[#083827] stroke-emerald-400" strokeWidth="0.8" />
                    <rect x="452" y="383" width="13" height="15" rx="2" className="fill-emerald-700 dark:fill-[#083827] stroke-emerald-400" strokeWidth="0.8" />
                    {/* Terminal Block & Power Bus Lead Out */}
                    <rect x="418" y="407" width="52" height="14" rx="2" className="fill-slate-800 dark:fill-[#0a1b15] stroke-emerald-500 dark:stroke-brand-green" strokeWidth="1" />
                    <text x="444" y="417" className="fill-emerald-400 dark:fill-brand-green text-[7px] font-mono font-bold" textAnchor="middle">⚡ LOAD BUS</text>
                  </g>

                  {/* ===================== CONNECTOR LINES ===================== */}

                  {/* Node 02 Connector */}
                  <path
                    d="M380 38 L380 58"
                    className={`transition-all duration-300 ${
                      selectedId === "camera"
                        ? "stroke-cyan-500 dark:stroke-brand-cyan animate-pulse"
                        : "stroke-slate-400/70 dark:stroke-purple-500/40"
                    }`}
                    strokeWidth={selectedId === "camera" ? "2.5" : "1.5"}
                    strokeDasharray={selectedId === "camera" ? "none" : "3 3"}
                  />

                  {/* Node 01 Connector */}
                  <path
                    d="M195 175 L235 175 L285 195"
                    fill="none"
                    className={`transition-all duration-300 ${
                      selectedId === "fingerprint"
                        ? "stroke-emerald-500 dark:stroke-brand-green animate-pulse"
                        : "stroke-slate-400/70 dark:stroke-purple-500/40"
                    }`}
                    strokeWidth={selectedId === "fingerprint" ? "2.5" : "1.5"}
                    strokeDasharray={selectedId === "fingerprint" ? "none" : "3 3"}
                  />

                  {/* Node 04 Connector */}
                  <path
                    d="M565 140 L525 140 L482 135"
                    fill="none"
                    className={`transition-all duration-300 ${
                      selectedId === "occupancy"
                        ? "stroke-emerald-500 dark:stroke-brand-green animate-pulse"
                        : "stroke-slate-400/70 dark:stroke-purple-500/40"
                    }`}
                    strokeWidth={selectedId === "occupancy" ? "2.5" : "1.5"}
                    strokeDasharray={selectedId === "occupancy" ? "none" : "3 3"}
                  />

                  {/* Node 05 Connector */}
                  <path
                    d="M195 290 L245 290 L285 290"
                    fill="none"
                    className={`transition-all duration-300 ${
                      selectedId === "controller"
                        ? "stroke-purple-500 dark:stroke-purple-300 animate-pulse"
                        : "stroke-slate-400/70 dark:stroke-purple-500/40"
                    }`}
                    strokeWidth={selectedId === "controller" ? "2.5" : "1.5"}
                    strokeDasharray={selectedId === "controller" ? "none" : "3 3"}
                  />

                  {/* Node 03 Connector */}
                  <path
                    d="M565 290 L525 290 L485 290"
                    fill="none"
                    className={`transition-all duration-300 ${
                      selectedId === "lock"
                        ? "stroke-purple-500 dark:stroke-purple-400 animate-pulse"
                        : "stroke-slate-400/70 dark:stroke-purple-500/40"
                    }`}
                    strokeWidth={selectedId === "lock" ? "2.5" : "1.5"}
                    strokeDasharray={selectedId === "lock" ? "none" : "3 3"}
                  />

                  {/* Node 07 Connector */}
                  <path
                    d="M195 415 L245 415 L285 405"
                    fill="none"
                    className={`transition-all duration-300 ${
                      selectedId === "phone"
                        ? "stroke-cyan-500 dark:stroke-brand-cyan animate-pulse"
                        : "stroke-slate-400/70 dark:stroke-purple-500/40"
                    }`}
                    strokeWidth={selectedId === "phone" ? "2.5" : "1.5"}
                    strokeDasharray={selectedId === "phone" ? "none" : "3 3"}
                  />

                  {/* Node 06 Connector (Highlighted when active) */}
                  <path
                    d="M565 415 L525 415 L478 405"
                    fill="none"
                    className={`transition-all duration-300 ${
                      selectedId === "devices"
                        ? "stroke-emerald-500 dark:stroke-brand-green animate-pulse"
                        : "stroke-slate-400/70 dark:stroke-purple-500/40"
                    }`}
                    strokeWidth={selectedId === "devices" ? "2.5" : "1.5"}
                    strokeDasharray={selectedId === "devices" ? "none" : "3 3"}
                  />

                  {/* ===================== INTERACTIVE NODES ===================== */}

                  {/* NODE 02: WIDE-ANGLE CAMERA (Top Center) */}
                  <g
                    className="cursor-pointer"
                    role="button"
                    tabIndex={0}
                    aria-label="Subsystem 02 Wide-Angle Camera"
                    onClick={() => setSelectedId("camera")}
                    onMouseEnter={() => setSelectedId("camera")}
                    onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setSelectedId("camera")}
                  >
                    <rect x="290" y="8" width="180" height="30" rx="15" className="fill-transparent" />
                    <circle
                      cx="380"
                      cy="23"
                      r={selectedId === "camera" ? "15" : "13"}
                      className={`transition-all duration-300 ${
                        selectedId === "camera"
                          ? "fill-cyan-500 dark:fill-brand-cyan stroke-cyan-300 dark:stroke-white"
                          : "fill-white dark:fill-[#120826] stroke-slate-400 dark:stroke-purple-500/60"
                      }`}
                      strokeWidth={selectedId === "camera" ? "2" : "1.5"}
                      filter={selectedId === "camera" ? "url(#glow-cyan-dt)" : undefined}
                    />
                    <text
                      x="380"
                      y="27"
                      className={`font-mono text-[10px] font-extrabold text-center select-none ${
                        selectedId === "camera" ? "fill-black" : "fill-slate-800 dark:fill-purple-200"
                      }`}
                      textAnchor="middle"
                    >
                      02
                    </text>
                    <text
                      x="380"
                      y="48"
                      className={`font-mono text-[9px] font-bold select-none ${
                        selectedId === "camera" ? "fill-cyan-700 dark:fill-brand-cyan" : "fill-slate-600 dark:fill-slate-400"
                      }`}
                      textAnchor="middle"
                    >
                      WIDE-ANGLE CAMERA
                    </text>
                  </g>

                  {/* NODE 01: FINGERPRINT SENSOR (Left Top) */}
                  <g
                    className="cursor-pointer"
                    role="button"
                    tabIndex={0}
                    aria-label="Subsystem 01 Fingerprint Sensor"
                    onClick={() => setSelectedId("fingerprint")}
                    onMouseEnter={() => setSelectedId("fingerprint")}
                    onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setSelectedId("fingerprint")}
                  >
                    <rect x="25" y="152" width="170" height="46" rx="8" className="fill-transparent" />
                    <circle
                      cx="56"
                      cy="175"
                      r={selectedId === "fingerprint" ? "15" : "13"}
                      className={`transition-all duration-300 ${
                        selectedId === "fingerprint"
                          ? "fill-emerald-500 dark:fill-brand-green stroke-emerald-300 dark:stroke-white"
                          : "fill-white dark:fill-[#120826] stroke-slate-400 dark:stroke-purple-500/60"
                      }`}
                      strokeWidth={selectedId === "fingerprint" ? "2" : "1.5"}
                      filter={selectedId === "fingerprint" ? "url(#glow-green-dt)" : undefined}
                    />
                    <text
                      x="56"
                      y="179"
                      className={`font-mono text-[10px] font-extrabold select-none ${
                        selectedId === "fingerprint" ? "fill-black" : "fill-slate-800 dark:fill-purple-200"
                      }`}
                      textAnchor="middle"
                    >
                      01
                    </text>
                    <text
                      x="78"
                      y="173"
                      className={`font-mono text-[11px] font-bold select-none ${
                        selectedId === "fingerprint" ? "fill-emerald-700 dark:fill-brand-green" : "fill-slate-800 dark:fill-slate-200"
                      }`}
                    >
                      FINGERPRINT
                    </text>
                    <text x="78" y="185" className="font-mono text-[9px] fill-slate-500 dark:fill-slate-400 select-none">
                      BIOMETRIC ACCESS
                    </text>
                  </g>

                  {/* NODE 04: OCCUPANCY MODULE (Right Top) */}
                  <g
                    className="cursor-pointer"
                    role="button"
                    tabIndex={0}
                    aria-label="Subsystem 04 Occupancy Module"
                    onClick={() => setSelectedId("occupancy")}
                    onMouseEnter={() => setSelectedId("occupancy")}
                    onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setSelectedId("occupancy")}
                  >
                    <rect x="565" y="117" width="170" height="46" rx="8" className="fill-transparent" />
                    <circle
                      cx="704"
                      cy="140"
                      r={selectedId === "occupancy" ? "15" : "13"}
                      className={`transition-all duration-300 ${
                        selectedId === "occupancy"
                          ? "fill-emerald-500 dark:fill-brand-green stroke-emerald-300 dark:stroke-white"
                          : "fill-white dark:fill-[#120826] stroke-slate-400 dark:stroke-purple-500/60"
                      }`}
                      strokeWidth={selectedId === "occupancy" ? "2" : "1.5"}
                      filter={selectedId === "occupancy" ? "url(#glow-green-dt)" : undefined}
                    />
                    <text
                      x="704"
                      y="144"
                      className={`font-mono text-[10px] font-extrabold select-none ${
                        selectedId === "occupancy" ? "fill-black" : "fill-slate-800 dark:fill-purple-200"
                      }`}
                      textAnchor="middle"
                    >
                      04
                    </text>
                    <text
                      x="682"
                      y="138"
                      className={`font-mono text-[11px] font-bold select-none ${
                        selectedId === "occupancy" ? "fill-emerald-700 dark:fill-brand-green" : "fill-slate-800 dark:fill-slate-200"
                      }`}
                      textAnchor="end"
                    >
                      OCCUPANCY
                    </text>
                    <text x="682" y="150" className="font-mono text-[9px] fill-slate-500 dark:fill-slate-400 select-none" textAnchor="end">
                      SPATIAL SENSING
                    </text>
                  </g>

                  {/* NODE 05: CENTRAL CONTROLLER (Left Mid) */}
                  <g
                    className="cursor-pointer"
                    role="button"
                    tabIndex={0}
                    aria-label="Subsystem 05 Central Controller"
                    onClick={() => setSelectedId("controller")}
                    onMouseEnter={() => setSelectedId("controller")}
                    onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setSelectedId("controller")}
                  >
                    <rect x="25" y="267" width="170" height="46" rx="8" className="fill-transparent" />
                    <circle
                      cx="56"
                      cy="290"
                      r={selectedId === "controller" ? "15" : "13"}
                      className={`transition-all duration-300 ${
                        selectedId === "controller"
                          ? "fill-purple-500 dark:fill-purple-300 stroke-purple-300 dark:stroke-white"
                          : "fill-white dark:fill-[#120826] stroke-slate-400 dark:stroke-purple-500/60"
                      }`}
                      strokeWidth={selectedId === "controller" ? "2" : "1.5"}
                      filter={selectedId === "controller" ? "url(#glow-purple-dt)" : undefined}
                    />
                    <text
                      x="56"
                      y="294"
                      className={`font-mono text-[10px] font-extrabold select-none ${
                        selectedId === "controller" ? "fill-black" : "fill-slate-800 dark:fill-purple-200"
                      }`}
                      textAnchor="middle"
                    >
                      05
                    </text>
                    <text
                      x="78"
                      y="288"
                      className={`font-mono text-[11px] font-bold select-none ${
                        selectedId === "controller" ? "fill-purple-700 dark:fill-purple-300" : "fill-slate-800 dark:fill-slate-200"
                      }`}
                    >
                      CONTROLLER
                    </text>
                    <text x="78" y="300" className="font-mono text-[9px] fill-slate-500 dark:fill-slate-400 select-none">
                      EMBEDDED BRAIN
                    </text>
                  </g>

                  {/* NODE 03: SMART DEADBOLT (Right Mid) */}
                  <g
                    className="cursor-pointer"
                    role="button"
                    tabIndex={0}
                    aria-label="Subsystem 03 Smart Deadbolt"
                    onClick={() => setSelectedId("lock")}
                    onMouseEnter={() => setSelectedId("lock")}
                    onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setSelectedId("lock")}
                  >
                    <rect x="565" y="267" width="170" height="46" rx="8" className="fill-transparent" />
                    <circle
                      cx="704"
                      cy="290"
                      r={selectedId === "lock" ? "15" : "13"}
                      className={`transition-all duration-300 ${
                        selectedId === "lock"
                          ? "fill-purple-500 dark:fill-purple-400 stroke-purple-300 dark:stroke-white"
                          : "fill-white dark:fill-[#120826] stroke-slate-400 dark:stroke-purple-500/60"
                      }`}
                      strokeWidth={selectedId === "lock" ? "2" : "1.5"}
                      filter={selectedId === "lock" ? "url(#glow-purple-dt)" : undefined}
                    />
                    <text
                      x="704"
                      y="294"
                      className={`font-mono text-[10px] font-extrabold select-none ${
                        selectedId === "lock" ? "fill-black" : "fill-slate-800 dark:fill-purple-200"
                      }`}
                      textAnchor="middle"
                    >
                      03
                    </text>
                    <text
                      x="682"
                      y="288"
                      className={`font-mono text-[11px] font-bold select-none ${
                        selectedId === "lock" ? "fill-purple-700 dark:fill-purple-300" : "fill-slate-800 dark:fill-slate-200"
                      }`}
                      textAnchor="end"
                    >
                      SMART LOCK
                    </text>
                    <text x="682" y="300" className="font-mono text-[9px] fill-slate-500 dark:fill-slate-400 select-none" textAnchor="end">
                      MOTORIZED DEADBOLT
                    </text>
                  </g>

                  {/* NODE 07: ENCRYPTED GATEWAY (Left Bottom) */}
                  <g
                    className="cursor-pointer"
                    role="button"
                    tabIndex={0}
                    aria-label="Subsystem 07 Encrypted Gateway"
                    onClick={() => setSelectedId("phone")}
                    onMouseEnter={() => setSelectedId("phone")}
                    onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setSelectedId("phone")}
                  >
                    <rect x="25" y="392" width="170" height="46" rx="8" className="fill-transparent" />
                    <circle
                      cx="56"
                      cy="415"
                      r={selectedId === "phone" ? "15" : "13"}
                      className={`transition-all duration-300 ${
                        selectedId === "phone"
                          ? "fill-cyan-500 dark:fill-brand-cyan stroke-cyan-300 dark:stroke-white"
                          : "fill-white dark:fill-[#120826] stroke-slate-400 dark:stroke-purple-500/60"
                      }`}
                      strokeWidth={selectedId === "phone" ? "2" : "1.5"}
                      filter={selectedId === "phone" ? "url(#glow-cyan-dt)" : undefined}
                    />
                    <text
                      x="56"
                      y="419"
                      className={`font-mono text-[10px] font-extrabold select-none ${
                        selectedId === "phone" ? "fill-black" : "fill-slate-800 dark:fill-purple-200"
                      }`}
                      textAnchor="middle"
                    >
                      07
                    </text>
                    <text
                      x="78"
                      y="413"
                      className={`font-mono text-[11px] font-bold select-none ${
                        selectedId === "phone" ? "fill-cyan-700 dark:fill-brand-cyan" : "fill-slate-800 dark:fill-slate-200"
                      }`}
                    >
                      GATEWAY
                    </text>
                    <text x="78" y="425" className="font-mono text-[9px] fill-slate-500 dark:fill-slate-400 select-none">
                      ENCRYPTED BRIDGE
                    </text>
                  </g>

                  {/* NODE 06: CONNECTED ROOM DEVICE HUB (Right Bottom - Selected by default) */}
                  <g
                    className="cursor-pointer"
                    role="button"
                    tabIndex={0}
                    aria-label="Subsystem 06 Connected Room Device Hub"
                    onClick={() => setSelectedId("devices")}
                    onMouseEnter={() => setSelectedId("devices")}
                    onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setSelectedId("devices")}
                  >
                    <rect x="565" y="392" width="170" height="46" rx="8" className="fill-transparent" />
                    <circle
                      cx="704"
                      cy="415"
                      r={selectedId === "devices" ? "16" : "13"}
                      className={`transition-all duration-300 ${
                        selectedId === "devices"
                          ? "fill-emerald-500 dark:fill-brand-green stroke-emerald-300 dark:stroke-white ring-4 ring-emerald-400/30"
                          : "fill-white dark:fill-[#120826] stroke-slate-400 dark:stroke-purple-500/60"
                      }`}
                      strokeWidth={selectedId === "devices" ? "2.5" : "1.5"}
                      filter={selectedId === "devices" ? "url(#glow-green-dt)" : undefined}
                    />
                    <text
                      x="704"
                      y="419"
                      className={`font-mono text-[10px] font-extrabold select-none ${
                        selectedId === "devices" ? "fill-black" : "fill-slate-800 dark:fill-purple-200"
                      }`}
                      textAnchor="middle"
                    >
                      06
                    </text>
                    <text
                      x="682"
                      y="413"
                      className={`font-mono text-[11px] font-bold select-none ${
                        selectedId === "devices" ? "fill-emerald-700 dark:fill-brand-green" : "fill-slate-800 dark:fill-slate-200"
                      }`}
                      textAnchor="end"
                    >
                      DEVICE HUB
                    </text>
                    <text x="682" y="425" className="font-mono text-[9px] fill-slate-500 dark:fill-slate-400 select-none" textAnchor="end">
                      ENERGY CONTROL BUS
                    </text>
                  </g>
                </svg>

                {/* MOBILE SCHEMATIC (< 640px) */}
                <svg
                  className="block sm:hidden w-full h-auto select-none"
                  viewBox="0 0 380 510"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <filter id="glow-green-mb" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="2.5" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                    <filter id="glow-cyan-mb" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="2.5" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                    <filter id="glow-purple-mb" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="2.5" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  {/* ===================== MOBILE DOOR STRUCTURE ===================== */}
                  {/* Outer Frame (63% width, 80% height) */}
                  <rect
                    x="68"
                    y="50"
                    width="244"
                    height="410"
                    rx="12"
                    className="fill-[#E2E8F0] dark:fill-[#120826] stroke-slate-400 dark:stroke-purple-600/60"
                    strokeWidth="2"
                  />
                  {/* Inner Reveal */}
                  <rect
                    x="76"
                    y="58"
                    width="228"
                    height="394"
                    rx="8"
                    className="fill-[#F1F5F9] dark:fill-[#0b0517] stroke-slate-300 dark:stroke-purple-900/50"
                    strokeWidth="1.2"
                  />
                  {/* Hinges */}
                  <rect x="64" y="95" width="6" height="22" rx="1.5" className="fill-slate-400 dark:fill-purple-500/70" />
                  <rect x="64" y="245" width="6" height="22" rx="1.5" className="fill-slate-400 dark:fill-purple-500/70" />
                  <rect x="64" y="395" width="6" height="22" rx="1.5" className="fill-slate-400 dark:fill-purple-500/70" />

                  {/* Right Strike Plate */}
                  <rect x="306" y="238" width="6" height="50" rx="1.5" className="fill-slate-400 dark:fill-purple-500/70" />
                  <rect x="307" y="252" width="4" height="20" rx="1" className="fill-slate-700 dark:fill-[#05020a]" />

                  {/* Door Leaf Surface */}
                  <rect
                    x="82"
                    y="64"
                    width="216"
                    height="382"
                    rx="6"
                    className="fill-white dark:fill-[#0e061e] stroke-slate-300 dark:stroke-purple-700/60"
                    strokeWidth="1.2"
                  />

                  {/* Cutaway Inspection Chassis Window */}
                  <rect
                    x="96"
                    y="72"
                    width="188"
                    height="366"
                    rx="6"
                    className="fill-slate-50/90 dark:fill-[#150a2e]/90 stroke-slate-300 dark:stroke-purple-600/40"
                    strokeWidth="1.2"
                  />

                  {/* Internal Blueprint Traces */}
                  <g className="stroke-slate-300 dark:stroke-purple-700/40" strokeWidth="0.8" fill="none">
                    <path d="M190 85 L190 120 L155 120 L155 220" strokeDasharray="2 2" />
                    <path d="M190 120 L225 120" strokeDasharray="2 2" />
                    <path d="M155 285 L155 340 L190 340 L190 360" strokeDasharray="2 2" />
                    <path d="M175 250 L220 250" strokeDasharray="2 2" />
                  </g>

                  {/* ===================== MOBILE DOOR MODULES ===================== */}

                  {/* 02 Camera Module */}
                  <g className="cursor-pointer" onClick={() => setSelectedId("camera")}>
                    <rect
                      x="165"
                      y="52"
                      width="50"
                      height="24"
                      rx="5"
                      className={selectedId === "camera" ? "fill-cyan-50 dark:fill-[#08202c] stroke-cyan-500 dark:stroke-brand-cyan" : "fill-white dark:fill-[#140b2b] stroke-slate-300 dark:stroke-purple-500/50"}
                      strokeWidth={selectedId === "camera" ? "1.8" : "1"}
                      filter={selectedId === "camera" ? "url(#glow-cyan-mb)" : undefined}
                    />
                    <circle cx="190" cy="64" r="7" className="fill-slate-100 dark:fill-[#0c051a] stroke-cyan-500 dark:stroke-brand-cyan" strokeWidth="1.2" />
                    <circle cx="190" cy="64" r="3.5" className="fill-cyan-500 dark:fill-brand-cyan" />
                  </g>

                  {/* 04 Occupancy Module */}
                  <g className="cursor-pointer" onClick={() => setSelectedId("occupancy")}>
                    <rect
                      x="222"
                      y="105"
                      width="52"
                      height="38"
                      rx="5"
                      className={selectedId === "occupancy" ? "fill-emerald-50 dark:fill-[#06241a] stroke-emerald-500 dark:stroke-brand-green" : "fill-white dark:fill-[#140b2b] stroke-slate-300 dark:stroke-purple-500/50"}
                      strokeWidth={selectedId === "occupancy" ? "1.8" : "1"}
                      filter={selectedId === "occupancy" ? "url(#glow-green-mb)" : undefined}
                    />
                    <circle cx="236" cy="124" r="6" className="fill-emerald-100 dark:fill-[#0e3b2e] stroke-emerald-500 dark:stroke-brand-green" strokeWidth="1" />
                    <circle cx="258" cy="124" r="6" className="fill-emerald-100 dark:fill-[#0e3b2e] stroke-emerald-500 dark:stroke-brand-green" strokeWidth="1" />
                  </g>

                  {/* 01 Fingerprint Sensor */}
                  <g className="cursor-pointer" onClick={() => setSelectedId("fingerprint")}>
                    <rect
                      x="106"
                      y="155"
                      width="50"
                      height="54"
                      rx="6"
                      className={selectedId === "fingerprint" ? "fill-emerald-50 dark:fill-[#06241a] stroke-emerald-500 dark:stroke-brand-green" : "fill-white dark:fill-[#140b2b] stroke-slate-300 dark:stroke-purple-500/50"}
                      strokeWidth={selectedId === "fingerprint" ? "1.8" : "1"}
                      filter={selectedId === "fingerprint" ? "url(#glow-green-mb)" : undefined}
                    />
                    <rect x="115" y="163" width="32" height="38" rx="4" className="fill-slate-100 dark:fill-[#0a1824] stroke-emerald-400 dark:stroke-brand-green/60" strokeWidth="0.8" />
                    <path d="M131 176 A6 6 0 0 1 131 188" fill="none" className="stroke-emerald-600 dark:stroke-brand-green" strokeWidth="1" strokeLinecap="round" />
                    <path d="M131 172 A9 9 0 0 1 131 192" fill="none" className="stroke-emerald-600 dark:stroke-brand-green" strokeWidth="1" strokeLinecap="round" />
                  </g>

                  {/* 05 Central Controller */}
                  <g className="cursor-pointer" onClick={() => setSelectedId("controller")}>
                    <rect
                      x="106"
                      y="230"
                      width="54"
                      height="54"
                      rx="5"
                      className={selectedId === "controller" ? "fill-purple-50 dark:fill-[#200c3b] stroke-purple-500 dark:stroke-purple-300" : "fill-white dark:fill-[#140b2b] stroke-slate-300 dark:stroke-purple-500/50"}
                      strokeWidth={selectedId === "controller" ? "1.8" : "1"}
                      filter={selectedId === "controller" ? "url(#glow-purple-mb)" : undefined}
                    />
                    <rect x="115" y="239" width="36" height="36" rx="3" className="fill-slate-800 dark:fill-[#090314] stroke-purple-400" strokeWidth="0.8" />
                    <text x="133" y="260" className="fill-purple-300 dark:fill-purple-200 text-[7px] font-mono font-bold" textAnchor="middle">CPU</text>
                  </g>

                  {/* 03 Smart Deadbolt */}
                  <g className="cursor-pointer" onClick={() => setSelectedId("lock")}>
                    <rect
                      x="220"
                      y="230"
                      width="56"
                      height="48"
                      rx="5"
                      className={selectedId === "lock" ? "fill-purple-50 dark:fill-[#200c3b] stroke-purple-500 dark:stroke-purple-400" : "fill-white dark:fill-[#140b2b] stroke-slate-300 dark:stroke-purple-500/50"}
                      strokeWidth={selectedId === "lock" ? "1.8" : "1"}
                      filter={selectedId === "lock" ? "url(#glow-purple-mb)" : undefined}
                    />
                    <rect x="226" y="236" width="12" height="16" rx="2" className="fill-purple-700 dark:fill-purple-600" />
                    <rect x="226" y="256" width="12" height="16" rx="2" className="fill-purple-700 dark:fill-purple-600" />
                    {/* Extended Deadbolt */}
                    <rect x="268" y="248" width="38" height="13" rx="1.5" className="fill-slate-300 dark:fill-slate-200 stroke-slate-500 dark:stroke-white" strokeWidth="1" />
                  </g>

                  {/* 07 Encrypted Gateway */}
                  <g className="cursor-pointer" onClick={() => setSelectedId("phone")}>
                    <rect
                      x="106"
                      y="340"
                      width="50"
                      height="44"
                      rx="5"
                      className={selectedId === "phone" ? "fill-cyan-50 dark:fill-[#08202c] stroke-cyan-500 dark:stroke-brand-cyan" : "fill-white dark:fill-[#140b2b] stroke-slate-300 dark:stroke-purple-500/50"}
                      strokeWidth={selectedId === "phone" ? "1.8" : "1"}
                      filter={selectedId === "phone" ? "url(#glow-cyan-mb)" : undefined}
                    />
                    <rect x="114" y="348" width="18" height="18" rx="2" className="fill-cyan-800 dark:fill-[#051c24] stroke-cyan-400" strokeWidth="0.8" />
                    <path d="M140 352 A5 5 0 0 1 140 362" fill="none" className="stroke-cyan-500 dark:stroke-brand-cyan" strokeWidth="1" />
                  </g>

                  {/* 06 Device Hub */}
                  <g className="cursor-pointer" onClick={() => setSelectedId("devices")}>
                    <rect
                      x="218"
                      y="340"
                      width="56"
                      height="44"
                      rx="5"
                      className={selectedId === "devices" ? "fill-emerald-50 dark:fill-[#06241a] stroke-emerald-500 dark:stroke-brand-green" : "fill-white dark:fill-[#140b2b] stroke-slate-300 dark:stroke-purple-500/50"}
                      strokeWidth={selectedId === "devices" ? "2" : "1"}
                      filter={selectedId === "devices" ? "url(#glow-green-mb)" : undefined}
                    />
                    <rect x="224" y="346" width="11" height="12" rx="1.5" className="fill-emerald-700 dark:fill-[#083827] stroke-emerald-400" strokeWidth="0.7" />
                    <rect x="238" y="346" width="11" height="12" rx="1.5" className="fill-emerald-700 dark:fill-[#083827] stroke-emerald-400" strokeWidth="0.7" />
                    <rect x="252" y="346" width="11" height="12" rx="1.5" className="fill-emerald-700 dark:fill-[#083827] stroke-emerald-400" strokeWidth="0.7" />
                    <rect x="224" y="364" width="44" height="12" rx="1.5" className="fill-slate-800 dark:fill-[#0a1b15] stroke-emerald-500 dark:stroke-brand-green" strokeWidth="0.8" />
                    <text x="246" y="373" className="fill-emerald-400 dark:fill-brand-green text-[6px] font-mono font-bold" textAnchor="middle">⚡ LOAD BUS</text>
                  </g>

                  {/* ===================== MOBILE CONNECTORS ===================== */}
                  {/* 02 Connector */}
                  <path
                    d="M190 32 L190 52"
                    className={selectedId === "camera" ? "stroke-cyan-500 dark:stroke-brand-cyan animate-pulse" : "stroke-slate-400/70 dark:stroke-purple-500/40"}
                    strokeWidth={selectedId === "camera" ? "2" : "1.2"}
                    strokeDasharray={selectedId === "camera" ? "none" : "2 2"}
                  />
                  {/* 01 Connector */}
                  <path
                    d="M48 135 L76 135 L106 170"
                    fill="none"
                    className={selectedId === "fingerprint" ? "stroke-emerald-500 dark:stroke-brand-green animate-pulse" : "stroke-slate-400/70 dark:stroke-purple-500/40"}
                    strokeWidth={selectedId === "fingerprint" ? "2" : "1.2"}
                    strokeDasharray={selectedId === "fingerprint" ? "none" : "2 2"}
                  />
                  {/* 04 Connector */}
                  <path
                    d="M332 135 L304 135 L274 125"
                    fill="none"
                    className={selectedId === "occupancy" ? "stroke-emerald-500 dark:stroke-brand-green animate-pulse" : "stroke-slate-400/70 dark:stroke-purple-500/40"}
                    strokeWidth={selectedId === "occupancy" ? "2" : "1.2"}
                    strokeDasharray={selectedId === "occupancy" ? "none" : "2 2"}
                  />
                  {/* 05 Connector */}
                  <path
                    d="M48 255 L76 255 L106 255"
                    fill="none"
                    className={selectedId === "controller" ? "stroke-purple-500 dark:stroke-purple-300 animate-pulse" : "stroke-slate-400/70 dark:stroke-purple-500/40"}
                    strokeWidth={selectedId === "controller" ? "2" : "1.2"}
                    strokeDasharray={selectedId === "controller" ? "none" : "2 2"}
                  />
                  {/* 03 Connector */}
                  <path
                    d="M332 255 L306 255 L276 255"
                    fill="none"
                    className={selectedId === "lock" ? "stroke-purple-500 dark:stroke-purple-400 animate-pulse" : "stroke-slate-400/70 dark:stroke-purple-500/40"}
                    strokeWidth={selectedId === "lock" ? "2" : "1.2"}
                    strokeDasharray={selectedId === "lock" ? "none" : "2 2"}
                  />
                  {/* 07 Connector */}
                  <path
                    d="M48 375 L76 375 L106 360"
                    fill="none"
                    className={selectedId === "phone" ? "stroke-cyan-500 dark:stroke-brand-cyan animate-pulse" : "stroke-slate-400/70 dark:stroke-purple-500/40"}
                    strokeWidth={selectedId === "phone" ? "2" : "1.2"}
                    strokeDasharray={selectedId === "phone" ? "none" : "2 2"}
                  />
                  {/* 06 Connector */}
                  <path
                    d="M332 375 L304 375 L274 360"
                    fill="none"
                    className={selectedId === "devices" ? "stroke-emerald-500 dark:stroke-brand-green animate-pulse" : "stroke-slate-400/70 dark:stroke-purple-500/40"}
                    strokeWidth={selectedId === "devices" ? "2" : "1.2"}
                    strokeDasharray={selectedId === "devices" ? "none" : "2 2"}
                  />

                  {/* ===================== MOBILE NODES ===================== */}

                  {/* 02 CAMERA (Top) */}
                  <g
                    className="cursor-pointer"
                    role="button"
                    tabIndex={0}
                    aria-label="Subsystem 02 Wide-Angle Camera"
                    onClick={() => setSelectedId("camera")}
                  >
                    <circle cx="190" cy="20" r="22" className="fill-transparent" />
                    <circle
                      cx="190"
                      cy="20"
                      r={selectedId === "camera" ? "14" : "12"}
                      className={selectedId === "camera" ? "fill-cyan-500 dark:fill-brand-cyan stroke-cyan-300 dark:stroke-white" : "fill-white dark:fill-[#120826] stroke-slate-400 dark:stroke-purple-500/60"}
                      strokeWidth={selectedId === "camera" ? "2" : "1.2"}
                      filter={selectedId === "camera" ? "url(#glow-cyan-mb)" : undefined}
                    />
                    <text
                      x="190"
                      y="24"
                      className={`font-mono text-[9px] font-extrabold select-none ${selectedId === "camera" ? "fill-black" : "fill-slate-800 dark:fill-purple-200"}`}
                      textAnchor="middle"
                    >
                      02
                    </text>
                  </g>

                  {/* 01 FINGERPRINT (Left Top) */}
                  <g
                    className="cursor-pointer"
                    role="button"
                    tabIndex={0}
                    aria-label="Subsystem 01 Fingerprint Sensor"
                    onClick={() => setSelectedId("fingerprint")}
                  >
                    <circle cx="34" cy="135" r="24" className="fill-transparent" />
                    <circle
                      cx="34"
                      cy="135"
                      r={selectedId === "fingerprint" ? "14" : "12"}
                      className={selectedId === "fingerprint" ? "fill-emerald-500 dark:fill-brand-green stroke-emerald-300 dark:stroke-white" : "fill-white dark:fill-[#120826] stroke-slate-400 dark:stroke-purple-500/60"}
                      strokeWidth={selectedId === "fingerprint" ? "2" : "1.2"}
                      filter={selectedId === "fingerprint" ? "url(#glow-green-mb)" : undefined}
                    />
                    <text
                      x="34"
                      y="139"
                      className={`font-mono text-[9px] font-extrabold select-none ${selectedId === "fingerprint" ? "fill-black" : "fill-slate-800 dark:fill-purple-200"}`}
                      textAnchor="middle"
                    >
                      01
                    </text>
                    <text
                      x="34"
                      y="157"
                      className={`font-mono text-[8px] font-bold select-none ${selectedId === "fingerprint" ? "fill-emerald-700 dark:fill-brand-green" : "fill-slate-600 dark:fill-slate-400"}`}
                      textAnchor="middle"
                    >
                      BIOMETRIC
                    </text>
                  </g>

                  {/* 04 OCCUPANCY (Right Top) */}
                  <g
                    className="cursor-pointer"
                    role="button"
                    tabIndex={0}
                    aria-label="Subsystem 04 Occupancy Module"
                    onClick={() => setSelectedId("occupancy")}
                  >
                    <circle cx="346" cy="135" r="24" className="fill-transparent" />
                    <circle
                      cx="346"
                      cy="135"
                      r={selectedId === "occupancy" ? "14" : "12"}
                      className={selectedId === "occupancy" ? "fill-emerald-500 dark:fill-brand-green stroke-emerald-300 dark:stroke-white" : "fill-white dark:fill-[#120826] stroke-slate-400 dark:stroke-purple-500/60"}
                      strokeWidth={selectedId === "occupancy" ? "2" : "1.2"}
                      filter={selectedId === "occupancy" ? "url(#glow-green-mb)" : undefined}
                    />
                    <text
                      x="346"
                      y="139"
                      className={`font-mono text-[9px] font-extrabold select-none ${selectedId === "occupancy" ? "fill-black" : "fill-slate-800 dark:fill-purple-200"}`}
                      textAnchor="middle"
                    >
                      04
                    </text>
                    <text
                      x="346"
                      y="157"
                      className={`font-mono text-[8px] font-bold select-none ${selectedId === "occupancy" ? "fill-emerald-700 dark:fill-brand-green" : "fill-slate-600 dark:fill-slate-400"}`}
                      textAnchor="middle"
                    >
                      OCCUPANCY
                    </text>
                  </g>

                  {/* 05 CONTROLLER (Left Mid) */}
                  <g
                    className="cursor-pointer"
                    role="button"
                    tabIndex={0}
                    aria-label="Subsystem 05 Central Controller"
                    onClick={() => setSelectedId("controller")}
                  >
                    <circle cx="34" cy="255" r="24" className="fill-transparent" />
                    <circle
                      cx="34"
                      cy="255"
                      r={selectedId === "controller" ? "14" : "12"}
                      className={selectedId === "controller" ? "fill-purple-500 dark:fill-purple-300 stroke-purple-300 dark:stroke-white" : "fill-white dark:fill-[#120826] stroke-slate-400 dark:stroke-purple-500/60"}
                      strokeWidth={selectedId === "controller" ? "2" : "1.2"}
                      filter={selectedId === "controller" ? "url(#glow-purple-mb)" : undefined}
                    />
                    <text
                      x="34"
                      y="259"
                      className={`font-mono text-[9px] font-extrabold select-none ${selectedId === "controller" ? "fill-black" : "fill-slate-800 dark:fill-purple-200"}`}
                      textAnchor="middle"
                    >
                      05
                    </text>
                    <text
                      x="34"
                      y="277"
                      className={`font-mono text-[8px] font-bold select-none ${selectedId === "controller" ? "fill-purple-700 dark:fill-purple-300" : "fill-slate-600 dark:fill-slate-400"}`}
                      textAnchor="middle"
                    >
                      CONTROLLER
                    </text>
                  </g>

                  {/* 03 SMART DEADBOLT (Right Mid) */}
                  <g
                    className="cursor-pointer"
                    role="button"
                    tabIndex={0}
                    aria-label="Subsystem 03 Smart Deadbolt"
                    onClick={() => setSelectedId("lock")}
                  >
                    <circle cx="346" cy="255" r="24" className="fill-transparent" />
                    <circle
                      cx="346"
                      cy="255"
                      r={selectedId === "lock" ? "14" : "12"}
                      className={selectedId === "lock" ? "fill-purple-500 dark:fill-purple-400 stroke-purple-300 dark:stroke-white" : "fill-white dark:fill-[#120826] stroke-slate-400 dark:stroke-purple-500/60"}
                      strokeWidth={selectedId === "lock" ? "2" : "1.2"}
                      filter={selectedId === "lock" ? "url(#glow-purple-mb)" : undefined}
                    />
                    <text
                      x="346"
                      y="259"
                      className={`font-mono text-[9px] font-extrabold select-none ${selectedId === "lock" ? "fill-black" : "fill-slate-800 dark:fill-purple-200"}`}
                      textAnchor="middle"
                    >
                      03
                    </text>
                    <text
                      x="346"
                      y="277"
                      className={`font-mono text-[8px] font-bold select-none ${selectedId === "lock" ? "fill-purple-700 dark:fill-purple-300" : "fill-slate-600 dark:fill-slate-400"}`}
                      textAnchor="middle"
                    >
                      DEADBOLT
                    </text>
                  </g>

                  {/* 07 ENCRYPTED GATEWAY (Left Bottom) */}
                  <g
                    className="cursor-pointer"
                    role="button"
                    tabIndex={0}
                    aria-label="Subsystem 07 Encrypted Gateway"
                    onClick={() => setSelectedId("phone")}
                  >
                    <circle cx="34" cy="375" r="24" className="fill-transparent" />
                    <circle
                      cx="34"
                      cy="375"
                      r={selectedId === "phone" ? "14" : "12"}
                      className={selectedId === "phone" ? "fill-cyan-500 dark:fill-brand-cyan stroke-cyan-300 dark:stroke-white" : "fill-white dark:fill-[#120826] stroke-slate-400 dark:stroke-purple-500/60"}
                      strokeWidth={selectedId === "phone" ? "2" : "1.2"}
                      filter={selectedId === "phone" ? "url(#glow-cyan-mb)" : undefined}
                    />
                    <text
                      x="34"
                      y="379"
                      className={`font-mono text-[9px] font-extrabold select-none ${selectedId === "phone" ? "fill-black" : "fill-slate-800 dark:fill-purple-200"}`}
                      textAnchor="middle"
                    >
                      07
                    </text>
                    <text
                      x="34"
                      y="397"
                      className={`font-mono text-[8px] font-bold select-none ${selectedId === "phone" ? "fill-cyan-700 dark:fill-brand-cyan" : "fill-slate-600 dark:fill-slate-400"}`}
                      textAnchor="middle"
                    >
                      GATEWAY
                    </text>
                  </g>

                  {/* 06 DEVICE HUB (Right Bottom - Selected by default) */}
                  <g
                    className="cursor-pointer"
                    role="button"
                    tabIndex={0}
                    aria-label="Subsystem 06 Connected Room Device Hub"
                    onClick={() => setSelectedId("devices")}
                  >
                    <circle cx="346" cy="375" r="24" className="fill-transparent" />
                    <circle
                      cx="346"
                      cy="375"
                      r={selectedId === "devices" ? "15" : "12"}
                      className={selectedId === "devices" ? "fill-emerald-500 dark:fill-brand-green stroke-emerald-300 dark:stroke-white" : "fill-white dark:fill-[#120826] stroke-slate-400 dark:stroke-purple-500/60"}
                      strokeWidth={selectedId === "devices" ? "2.2" : "1.2"}
                      filter={selectedId === "devices" ? "url(#glow-green-mb)" : undefined}
                    />
                    <text
                      x="346"
                      y="379"
                      className={`font-mono text-[9px] font-extrabold select-none ${selectedId === "devices" ? "fill-black" : "fill-slate-800 dark:fill-purple-200"}`}
                      textAnchor="middle"
                    >
                      06
                    </text>
                    <text
                      x="346"
                      y="397"
                      className={`font-mono text-[8px] font-bold select-none ${selectedId === "devices" ? "fill-emerald-700 dark:fill-brand-green" : "fill-slate-600 dark:fill-slate-400"}`}
                      textAnchor="middle"
                    >
                      DEVICE HUB
                    </text>
                  </g>
                </svg>
              </div>

              {/* Bottom Instructions */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-[11px] sm:text-xs font-mono text-[#626775] dark:text-slate-400 font-medium pt-1">
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
