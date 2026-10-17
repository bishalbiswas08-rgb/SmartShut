"use client";

import React from "react";
import { ArrowUp, Sparkles, Shield, ArrowRight } from "lucide-react";

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
    <section className="relative py-28 overflow-hidden bg-[#05020b]">
      {/* Background Architectural Mega Illustration & Glows */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-brand-purple/20 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-[500px] h-[400px] bg-brand-green/10 blur-[160px] rounded-full pointer-events-none" />

      {/* SVG Background Futuristic Door Silhouette */}
      <div className="absolute inset-0 flex items-center justify-center opacity-15 pointer-events-none">
        <svg className="w-[600px] h-[600px]" viewBox="0 0 500 500" fill="none">
          <rect x="150" y="50" width="200" height="400" rx="12" stroke="#a855f7" strokeWidth="2" strokeDasharray="8 8" />
          <circle cx="250" cy="220" r="40" stroke="#00f59b" strokeWidth="2" />
          <line x1="150" y1="220" x2="350" y2="220" stroke="#00f59b" strokeWidth="1" strokeDasharray="4 4" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/70 border border-brand-green/40 backdrop-blur-md mb-6 shadow-md">
          <span className="w-2 h-2 rounded-full bg-brand-green animate-ping" />
          <span className="text-xs font-mono font-semibold text-brand-green uppercase tracking-wider">
            SMARTSHUT / VISION & HORIZON
          </span>
        </div>

        {/* Main Huge Headline */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
          ONE SMART DOOR.
          <br />
          <span className="text-gradient-purple">SMARTER BUILDINGS.</span>
          <br />
          <span className="text-gradient-green">LESS ENERGY WASTE.</span>
        </h2>

        {/* Supporting Text */}
        <p className="mt-6 text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
          SmartShut brings access, security and energy management together. Explore how every door can become an active guardian of safety and energy stewardship.
        </p>

        {/* Call To Action Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#demo"
            onClick={scrollToDemo}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-bold text-black bg-gradient-to-r from-brand-green via-[#1afc9e] to-brand-green hover:shadow-[0_0_35px_rgba(0,245,155,0.5)] hover:scale-[1.03] active:scale-[0.98] transition-all"
          >
            <span>EXPLORE THE DEMO</span>
            <ArrowRight className="w-4 h-4 text-black" />
          </a>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-sm font-semibold text-purple-200 bg-[#140a2b]/80 hover:bg-[#1c0e3d] border border-purple-500/30 hover:border-purple-400 backdrop-blur-md transition-all"
          >
            <ArrowUp className="w-4 h-4 text-brand-green" />
            <span>BACK TO TOP</span>
          </button>
        </div>

        {/* Final Memorable Punchline */}
        <div className="mt-14 pt-8 border-t border-purple-500/20">
          <div className="text-lg sm:text-xl font-mono font-bold tracking-wide text-brand-green">
            &ldquo;SmartShut: Close the Door. Cut the Waste.&rdquo;
          </div>
        </div>
      </div>
    </section>
  );
}
