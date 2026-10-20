"use client";

import React from "react";
import { Shield, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "How It Works", href: "#how-it-works" },
    { name: "Features", href: "#features" },
    { name: "Demo", href: "#demo" },
    { name: "Dashboard", href: "#dashboard" },
    { name: "Applications", href: "#applications" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t border-[#D9DCE5] dark:border-purple-500/15 bg-white dark:bg-[#05020a] relative z-10 pt-16 pb-12 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start justify-between pb-12 border-b border-[#D9DCE5] dark:border-purple-500/15">
          {/* Brand & Tagline (5 cols) */}
          <div className="md:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-purple-100 dark:bg-purple-950 border border-purple-300 dark:border-brand-green/40 shadow-sm">
                <Shield className="w-4 h-4 text-emerald-600 dark:text-brand-green" />
              </div>
              <span className="font-bold text-lg tracking-widest text-[#111218] dark:text-white font-mono flex items-center gap-2">
                SMARTSHUT
                <span className="text-[10px] font-medium text-emerald-800 dark:text-brand-green bg-emerald-50 dark:bg-brand-green/10 px-1.5 py-0.5 rounded border border-emerald-300 dark:border-brand-green/20">
                  CONCEPT
                </span>
              </span>
            </div>

            <p className="mt-3 text-sm text-purple-900 dark:text-slate-300 font-mono font-semibold">
              &ldquo;Lock Smart. Save Energy. Stay Secure.&rdquo;
            </p>

            <p className="mt-2 text-xs text-[#626775] dark:text-slate-400 max-w-sm leading-relaxed">
              A proposed smart door system unifying biometric physical access, camera-assisted occupancy estimation, and automated non-essential room energy shutdown.
            </p>
          </div>

          {/* Quick Navigation Links (4 cols) */}
          <div className="md:col-span-4 flex flex-col">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-purple-900 dark:text-purple-300 mb-3">
              Explore Concept
            </div>
            <ul className="space-y-2 text-xs font-mono">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.href)}
                    className="text-[#626775] dark:text-slate-400 hover:text-emerald-700 dark:hover:text-brand-green transition-colors font-medium"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Project & Attribution Info (3 cols) */}
          <div className="md:col-span-3 flex flex-col items-start md:items-end">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-purple-900 dark:text-purple-300 mb-3">
              Project Showcase
            </div>
            <div className="text-xs font-mono text-[#626775] dark:text-slate-400 md:text-right space-y-1 font-medium">
              <div>Concept Prototype v1.0</div>
              <div className="text-emerald-700 dark:text-brand-green font-bold">Academic & Hackathon Ready</div>
              <div>Designed with Next.js & Tailwind</div>
            </div>

            <button
              onClick={scrollToTop}
              className="mt-4 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-[#110724] dark:hover:bg-purple-900/40 border border-[#CBD5E1] dark:border-purple-500/25 text-xs font-mono text-[#111218] dark:text-purple-200 transition-all shadow-sm font-semibold"
            >
              <ArrowUp className="w-3.5 h-3.5 text-emerald-600 dark:text-brand-green" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

        {/* Small Required Product Concept Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#626775] dark:text-slate-400">
          <p className="text-center sm:text-left max-w-2xl leading-relaxed">
            SmartShut is a proposed product concept. Interface states and energy figures shown on this website are illustrative.
          </p>

          <div className="text-[#626775] dark:text-slate-400 text-[11px] whitespace-nowrap">
            © {new Date().getFullYear()} SmartShut Concept. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
