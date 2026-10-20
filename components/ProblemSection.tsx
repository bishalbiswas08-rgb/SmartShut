"use client";

import React from "react";
import {
  AlertTriangle,
  Zap,
  ShieldCheck,
  Lightbulb,
  Fan,
  Wind,
  Lock,
  CheckCircle2,
  TrendingDown,
  Info,
} from "lucide-react";

interface RoomData {
  id: "ordinary" | "smartshut";
  headerTitle: string;
  headerBadge: string;
  relationshipPill: string;
  light: {
    status: "ON" | "OFF";
    watts: string;
  };
  ac: {
    status: "HIGH" | "STANDBY";
    detail: string;
  };
  fan: {
    status: "RUNNING" | "PAUSED";
    speed: string;
  };
  door: {
    status: string;
    sub: string;
  };
  indicators: Array<{
    label: string;
    value: string;
  }>;
  consequences: string[];
  bottomMetric: {
    left: string;
    right: string;
  };
}

const ordinaryRoomData: RoomData = {
  id: "ordinary",
  headerTitle: "ORDINARY ROOM",
  headerBadge: "ENERGY WASTE",
  relationshipPill: "LOCKED ≠ EMPTY",
  light: {
    status: "ON",
    watts: "100W Constant",
  },
  ac: {
    status: "HIGH",
    detail: "Cooling Empty Room",
  },
  fan: {
    status: "RUNNING",
    speed: "High RPM",
  },
  door: {
    status: "DOOR LOCKED",
    sub: "Circuits Remain Energized",
  },
  indicators: [
    { label: "LIGHT", value: "ON (100W)" },
    { label: "FAN", value: "RUNNING" },
    { label: "AC", value: "HIGH DRAW" },
    { label: "CIRCUITS", value: "100% HOT" },
  ],
  consequences: [
    "Door locked, but circuits remain energized.",
    "HVAC and lighting continue running.",
    "Energy waste accumulates while the room is empty.",
  ],
  bottomMetric: {
    left: "UNMANAGED LOAD",
    right: "100% BASELINE",
  },
};

const smartShutRoomData: RoomData = {
  id: "smartshut",
  headerTitle: "SMARTSHUT ROOM",
  headerBadge: "SMART ENERGY CONTROL",
  relationshipPill: "LOCKED + EMPTY → ENERGY SAVE",
  light: {
    status: "OFF",
    watts: "0W Zero Drain",
  },
  ac: {
    status: "STANDBY",
    detail: "Compressor Cutoff",
  },
  fan: {
    status: "PAUSED",
    speed: "Relay Isolated",
  },
  door: {
    status: "DOOR SECURED",
    sub: "Empty Verified • Cutoff Active",
  },
  indicators: [
    { label: "LIGHT", value: "OFF (0W)" },
    { label: "FAN", value: "PAUSED" },
    { label: "HVAC", value: "STANDBY" },
    { label: "SECURITY", value: "ACTIVE 24/7" },
  ],
  consequences: [
    "Door verifies the room is empty before power reduction.",
    "Non-essential loads enter safe low-power mode.",
    "Security and monitoring remain active.",
  ],
  bottomMetric: {
    left: "ACTIVE REDUCTION",
    right: "NON-ESSENTIAL LOAD ISOLATED",
  },
};

// Reusable Room Illustration with IDENTICAL geometry for both cards
function RoomIllustration({ data }: { data: RoomData }) {
  const isSmartShut = data.id === "smartshut";

  return (
    <div
      className={`relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-xl p-3.5 sm:p-4 flex flex-col justify-between overflow-hidden border transition-all ${
        isSmartShut
          ? "bg-[#F0FDF4] dark:bg-[#050e0f] border-emerald-300 dark:border-brand-green/30"
          : "bg-[#FFF5F5] dark:bg-[#0e040f] border-rose-300 dark:border-red-500/25"
      }`}
    >
      {/* Subtle interior lighting wash */}
      <div
        className={`absolute inset-0 pointer-events-none opacity-40 ${
          isSmartShut
            ? "bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-500/10 via-brand-cyan/5 to-transparent"
            : "bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/15 via-rose-950/10 to-transparent"
        }`}
      />

      {/* TOP ROW: LIGHT (LEFT) and AC (RIGHT) */}
      <div className="relative z-10 flex items-start justify-between w-full">
        {/* LIGHT */}
        <div className="flex items-center gap-2">
          <div
            className={`w-9 h-9 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center transition-all ${
              data.light.status === "ON"
                ? "bg-amber-100 dark:bg-amber-950/60 border border-amber-400 text-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.4)]"
                : "bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-slate-400 opacity-60"
            }`}
          >
            <Lightbulb
              className={`w-4 h-4 sm:w-5 sm:h-5 ${
                data.light.status === "ON" ? "animate-pulse" : ""
              }`}
            />
          </div>
          <div>
            <span
              className={`text-[10px] sm:text-xs font-mono font-bold block ${
                data.light.status === "ON"
                  ? "text-amber-700 dark:text-amber-400"
                  : "text-slate-500 dark:text-slate-400"
              }`}
            >
              LIGHT: {data.light.status}
            </span>
            <span className="text-[8px] sm:text-[9px] font-mono text-[#626775] dark:text-slate-400 block">
              {data.light.watts}
            </span>
          </div>
        </div>

        {/* AC / CLIMATE */}
        <div className="flex items-center gap-2 text-right flex-row-reverse">
          <div
            className={`w-9 h-9 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center transition-all ${
              data.ac.status === "HIGH"
                ? "bg-white dark:bg-[#220d18] border border-rose-300 dark:border-amber-500/40 text-cyan-500 shadow-sm"
                : "bg-white dark:bg-[#071a17] border border-emerald-300 dark:border-brand-green/40 text-emerald-600 dark:text-brand-green shadow-sm"
            }`}
          >
            <Wind
              className={`w-4 h-4 sm:w-5 sm:h-5 ${
                data.ac.status === "HIGH" ? "animate-bounce" : ""
              }`}
            />
          </div>
          <div>
            <span
              className={`text-[10px] sm:text-xs font-mono font-bold block ${
                data.ac.status === "HIGH"
                  ? "text-[#111218] dark:text-white"
                  : "text-emerald-800 dark:text-brand-green"
              }`}
            >
              AC: {data.ac.status}
            </span>
            <span className="text-[8px] sm:text-[9px] font-mono text-[#626775] dark:text-slate-400 block">
              {data.ac.detail}
            </span>
          </div>
        </div>
      </div>

      {/* CENTER ROW: CEILING FAN */}
      <div className="relative z-10 flex flex-col items-center justify-center my-auto">
        <div
          className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all shadow-sm ${
            data.fan.status === "RUNNING"
              ? "bg-white dark:bg-[#1e0a16] border border-amber-400 dark:border-amber-500/50 text-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.25)]"
              : "bg-white dark:bg-[#081816] border border-emerald-300 dark:border-brand-green/40 text-slate-400 dark:text-slate-500"
          }`}
        >
          <Fan
            className={`w-6 h-6 sm:w-7 sm:h-7 ${
              data.fan.status === "RUNNING"
                ? "animate-spin text-amber-500"
                : "text-slate-400 dark:text-slate-500"
            }`}
            style={{ animationDuration: data.fan.status === "RUNNING" ? "1s" : "0s" }}
          />
        </div>
        <div className="text-center mt-1">
          <span
            className={`text-[9px] sm:text-[10px] font-mono font-bold block ${
              data.fan.status === "RUNNING"
                ? "text-amber-700 dark:text-amber-400"
                : "text-emerald-700 dark:text-brand-green"
            }`}
          >
            FAN: {data.fan.status}
          </span>
          <span className="text-[8px] sm:text-[9px] font-mono text-[#626775] dark:text-slate-400 block">
            {data.fan.speed}
          </span>
        </div>
      </div>

      {/* BOTTOM ROW: DOOR / LOCK (Centered Entrance Threshold) */}
      <div className="relative z-10 pt-2 border-t border-slate-200/80 dark:border-purple-500/20 flex items-center justify-center w-full">
        <div
          className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border shadow-sm ${
            isSmartShut
              ? "bg-white/95 dark:bg-[#071916]/95 border-emerald-300 dark:border-brand-green/40 text-emerald-800 dark:text-brand-green"
              : "bg-white/95 dark:bg-black/70 border-slate-300 dark:border-slate-800 text-[#111218] dark:text-slate-200"
          }`}
        >
          {isSmartShut ? (
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-brand-green flex-shrink-0" />
          ) : (
            <Lock className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400 flex-shrink-0" />
          )}
          <div className="text-left">
            <span className="text-[9px] sm:text-[10px] font-mono font-bold block leading-tight">
              {data.door.status}
            </span>
            <span className="text-[8px] sm:text-[9px] font-mono text-[#626775] dark:text-slate-400 block leading-tight">
              {data.door.sub}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Reusable Room Card Structure (Identical DOM, identical geometry, identical padding)
function RoomCard({ data }: { data: RoomData }) {
  const isSmartShut = data.id === "smartshut";

  return (
    <div
      className={`relative rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-7 backdrop-blur-xl flex flex-col justify-between border shadow-lg dark:shadow-2xl overflow-hidden group transition-all ${
        isSmartShut
          ? "bg-gradient-to-b from-white via-emerald-50/40 to-cyan-50/30 dark:bg-gradient-to-b dark:from-[#0c1c1f]/80 dark:via-[#0a151b]/90 dark:to-[#070c14] border-emerald-300 dark:border-brand-green/40"
          : "bg-gradient-to-b from-white via-rose-50/40 to-amber-50/30 dark:bg-gradient-to-b dark:from-[#1b0d1e]/80 dark:via-[#130717]/90 dark:to-[#0c0310] border-rose-300 dark:border-red-500/30"
      }`}
    >
      {/* Background ambient corner glow */}
      <div
        className={`absolute top-0 ${isSmartShut ? "right-0" : "left-0"} w-36 h-36 blur-2xl pointer-events-none ${
          isSmartShut ? "bg-emerald-500/10 dark:bg-brand-green/10" : "bg-amber-500/10"
        }`}
      />

      <div className="relative z-10">
        {/* 1. ROOM HEADER */}
        <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-slate-200 dark:border-purple-500/20 min-h-[48px]">
          <div className="flex items-center gap-2">
            <span
              className={`w-2 h-2 rounded-full ${
                isSmartShut ? "bg-emerald-500 dark:bg-brand-green" : "bg-red-500"
              } animate-ping`}
            />
            <span
              className={`text-xs sm:text-sm font-mono font-bold tracking-wider uppercase ${
                isSmartShut
                  ? "text-emerald-800 dark:text-brand-green"
                  : "text-rose-700 dark:text-red-400"
              }`}
            >
              {data.headerTitle}
            </span>
          </div>
          <span
            className={`px-2.5 py-1 rounded-md text-[10px] sm:text-[11px] font-mono font-semibold border ${
              isSmartShut
                ? "bg-emerald-100 dark:bg-brand-green/15 text-emerald-800 dark:text-brand-green border-emerald-300 dark:border-brand-green/30"
                : "bg-rose-100 dark:bg-red-500/15 text-rose-800 dark:text-red-400 border-rose-300 dark:border-red-500/30"
            }`}
          >
            {data.headerBadge}
          </span>
        </div>

        {/* Subtle Visual Relationship Pill */}
        <div className="my-2.5 flex items-center justify-between">
          <span className="text-[10px] font-mono text-[#626775] dark:text-slate-400">
            Concept Logic:
          </span>
          <span
            className={`text-[10px] font-mono px-2 py-0.5 rounded border font-semibold ${
              isSmartShut
                ? "bg-emerald-50 dark:bg-brand-green/10 text-emerald-700 dark:text-brand-green border-emerald-300/80 dark:border-brand-green/30"
                : "bg-amber-50 dark:bg-amber-500/10 text-amber-800 dark:text-amber-400 border-amber-300/80 dark:border-amber-500/30"
            }`}
          >
            {data.relationshipPill}
          </span>
        </div>

        {/* 2. ROOM ILLUSTRATION (Shared Geometry: LIGHT top-left, AC top-right, FAN center, DOOR bottom-center) */}
        <div className="my-3">
          <RoomIllustration data={data} />
        </div>

        {/* 3. 4 COMPACT STATUS INDICATORS */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 sm:gap-2 my-3">
          {data.indicators.map((ind, i) => (
            <div
              key={i}
              className={`p-2 rounded-lg border text-center flex flex-col justify-center min-h-[50px] ${
                isSmartShut
                  ? "bg-white/90 dark:bg-[#071617]/80 border-emerald-200 dark:border-brand-green/20"
                  : "bg-white/90 dark:bg-[#1a0b18]/80 border-rose-200 dark:border-red-500/20"
              }`}
            >
              <span className="text-[8px] sm:text-[9px] font-mono text-[#626775] dark:text-slate-400 block uppercase">
                {ind.label}
              </span>
              <span
                className={`text-[9px] sm:text-[10px] font-mono font-bold truncate ${
                  isSmartShut
                    ? "text-emerald-800 dark:text-brand-green"
                    : "text-rose-700 dark:text-red-400"
                }`}
              >
                {ind.value}
              </span>
            </div>
          ))}
        </div>

        {/* 4. SHORT EXPLANATION (3 Concise Points) */}
        <ul className="mt-4 space-y-2 text-xs sm:text-sm text-[#4b5262] dark:text-slate-300 font-normal">
          {data.consequences.map((text, i) => (
            <li key={i} className="flex items-start gap-2">
              <span
                className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${
                  isSmartShut ? "bg-emerald-500 dark:bg-brand-green" : "bg-rose-500 dark:bg-red-400"
                }`}
              />
              <span>{text}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* 5. BOTTOM RESULT */}
      <div
        className={`mt-5 pt-3.5 border-t flex items-center justify-between text-[11px] sm:text-xs font-mono font-semibold ${
          isSmartShut
            ? "border-emerald-200 dark:border-brand-green/20 text-emerald-800 dark:text-brand-green"
            : "border-rose-200 dark:border-red-500/15 text-rose-700 dark:text-red-400"
        }`}
      >
        <span>{data.bottomMetric.left}</span>
        <span className="font-bold flex items-center gap-1">
          {isSmartShut ? <TrendingDown className="w-3.5 h-3.5" /> : <Zap className="w-3.5 h-3.5" />}
          {data.bottomMetric.right}
        </span>
      </div>
    </div>
  );
}

export default function ProblemSection() {
  return (
    <section id="problem" className="py-16 sm:py-24 relative overflow-hidden bg-[#F7F8FA] dark:bg-[#080413]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-[280px] sm:w-[400px] h-[400px] max-w-full bg-red-500/5 blur-[120px] sm:blur-[160px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[280px] sm:w-[400px] h-[400px] max-w-full bg-emerald-500/10 dark:bg-brand-green/10 blur-[120px] sm:blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with generous breathing room */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 dark:bg-purple-950/70 border border-amber-200 dark:border-purple-500/30 backdrop-blur-md mb-4 shadow-sm">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-500" />
            <span className="text-[11px] sm:text-xs font-mono font-semibold text-amber-900 dark:text-purple-200 uppercase tracking-wider">
              THE UNNOTICED LEAK
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#111218] dark:text-white leading-tight">
            THE ROOM IS EMPTY.
            <br />
            <span className="text-gradient-purple">THE ELECTRICITY ISN&apos;T.</span>
          </h2>

          <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-[#4b5262] dark:text-slate-300">
            People leave. Lights, fans and ACs can keep running for hours behind closed doors. Smart locks secure the perimeter, but silently abandon power management.
          </p>
        </div>

        {/* Rebuilt Architectural Comparison Showcase (Side by Side Shared Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          {/* LEFT: ORDINARY ROOM */}
          <RoomCard data={ordinaryRoomData} />

          {/* RIGHT: SMARTSHUT ROOM */}
          <RoomCard data={smartShutRoomData} />
        </div>

        {/* Technical Footnote */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-2 text-center text-[11px] sm:text-xs font-mono text-[#626775] dark:text-slate-400 max-w-3xl mx-auto">
          <Info className="w-4 h-4 text-purple-600 dark:text-purple-400 flex-shrink-0" />
          <span>
            Illustrative demo concept. Device cutoff requires connected relays or smart circuit switches. Security surveillance and emergency manual egress remain permanently operational.
          </span>
        </div>
      </div>
    </section>
  );
}
