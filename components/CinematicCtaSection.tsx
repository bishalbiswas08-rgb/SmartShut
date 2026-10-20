"use client";

import React from "react";
import { ArrowUp, ArrowRight } from "lucide-react";

export default function CinematicCtaSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToDemo = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const demo = document.getElementById("demo");
    if (demo) {
      demo.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative py-16 sm:py-28 overflow-hidden bg-[#F0F1F5] dark:bg-[#05020b]">
      {/* Background Architectural Mega Illustration & Glows */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[600px] lg:w-[850px] h-[350px] sm:h-[450px] lg:h-[550px] max-w-full bg-purple-300/20 dark:bg-brand-purple/20 blur-[120px] sm:blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[260px] sm:w-[400px] lg:w-[500px] h-[260px] sm:h-[350px] lg:h-[400px] max-w-[90vw] bg-emerald-400/15 dark:bg-brand-green/10 blur-[100px] sm:blur-[160px] rounded-full pointer-events-none" />

      {/* SVG Background Futuristic Door Silhouette */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20 dark:opacity-15 pointer-events-none overflow-hidden">
        <svg className="w-[320px] sm:w-[480px] lg:w-[600px] h-auto max-w-full aspect-square" viewBox="0 0 500 500" fill="none">
          <rect x="150" y="50" width="200" height="400" rx="12" stroke="#a855f7" strokeWidth="2" strokeDasharray="8 8" />
          <circle cx="250" cy="220" r="40" stroke="#00f59b" strokeWidth="2" />
          <line x1="150" y1="220" x2="350" y2="220" stroke="#00f59b" strokeWidth="1" strokeDasharray="4 4" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-purple-950/70 border border-emerald-400 dark:border-brand-green/40 backdrop-blur-md mb-4 sm:mb-6 shadow-sm dark:shadow-md">
          <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-brand-green animate-ping" />
          <span className="text-[11px] sm:text-xs font-mono font-bold text-emerald-800 dark:text-brand-green uppercase tracking-wider">
            SMARTSHUT / VISION & HORIZON
          </span>
        </div>

        {/* Main Huge Headline */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#111218] dark:text-white leading-[1.1]">
          ONE SMART DOOR.
          <br />
          <span className="text-gradient-purple">SMARTER BUILDINGS.</span>
          <br />
          <span className="text-gradient-green">LESS ENERGY WASTE.</span>
        </h2>

        {/* Supporting Text */}
        <p className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-xl text-[#4b5262] dark:text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
          Discover a concept that connects access control, room monitoring, and intelligent energy management.
        </p>

        {/* Call To Action Buttons */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
          <a
            href="#demo"
            onClick={scrollToDemo}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full text-xs sm:text-sm font-bold text-black bg-gradient-to-r from-brand-green via-[#1afc9e] to-brand-green hover:shadow-[0_0_35px_rgba(0,245,155,0.5)] hover:scale-[1.03] active:scale-[0.98] transition-all shadow-md"
          >
            <span>EXPLORE SMARTSHUT</span>
            <ArrowRight className="w-4 h-4 text-black" />
          </a>

          <button
            onClick={scrollToTop}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 rounded-full text-xs sm:text-sm font-semibold text-purple-900 dark:text-purple-200 bg-white dark:bg-[#140a2b]/80 hover:bg-slate-50 dark:hover:bg-[#1c0e3d] border border-purple-300 dark:border-purple-500/30 hover:border-purple-400 backdrop-blur-md transition-all shadow-sm"
          >
            <ArrowUp className="w-4 h-4 text-emerald-600 dark:text-brand-green" />
            <span>BACK TO TOP</span>
          </button>
        </div>

        {/* Final Memorable Punchline */}
        <div className="mt-10 sm:mt-14 pt-6 sm:pt-8 border-t border-[#CBD5E1] dark:border-purple-500/20">
          <div className="text-base sm:text-xl font-mono font-bold tracking-wide text-emerald-800 dark:text-brand-green">
            &ldquo;SmartShut: Close the Door. Cut the Waste.&rdquo;
          </div>
        </div>
      </div>
    </section>
  );
}
