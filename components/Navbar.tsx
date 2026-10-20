"use client";

import React, { useState, useEffect } from "react";
import { Shield, Sparkles, Menu, X, ArrowUpRight } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeProvider";

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: "How It Works", href: "#how-it-works" },
  { name: "Features", href: "#features" },
  { name: "Demo", href: "#demo" },
  { name: "Dashboard", href: "#dashboard" },
  { name: "Applications", href: "#applications" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 dark:bg-[#090514]/85 backdrop-blur-xl border-b border-[#D9DCE5] dark:border-purple-500/15 py-3 shadow-sm dark:shadow-lg dark:shadow-purple-950/20"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#"
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-green rounded-lg"
              aria-label="SmartShut Home"
            >
              <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-purple-100 dark:bg-gradient-to-br dark:from-brand-purple/40 dark:to-surface-100 border border-purple-300 dark:border-brand-purple/40 shadow-sm dark:shadow-inner group-hover:border-emerald-500 dark:group-hover:border-brand-green/50 transition-colors">
                <Shield className="w-5 h-5 text-emerald-600 dark:text-brand-green" />
                <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 dark:bg-brand-green opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 dark:bg-brand-green shadow-[0_0_8px_#00f59b]"></span>
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg tracking-widest text-[#111218] dark:text-white group-hover:text-purple-700 dark:group-hover:text-slate-100 transition-colors flex items-center gap-1.5 font-mono">
                  SMARTSHUT
                  <span className="text-[10px] font-medium tracking-normal text-emerald-700 dark:text-brand-green bg-emerald-50 dark:bg-brand-green/10 px-1.5 py-0.5 rounded border border-emerald-300 dark:border-brand-green/20">
                    CONCEPT
                  </span>
                </span>
                <span className="text-[9px] uppercase tracking-wider text-purple-700/70 dark:text-purple-300/60 font-mono hidden sm:block">
                  Smart Access + Energy
                </span>
              </div>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-0.5 lg:gap-1 rounded-full px-2 lg:px-4 py-1 lg:py-1.5 bg-white/80 dark:bg-[#120a24]/60 backdrop-blur-md border border-[#D9DCE5] dark:border-purple-500/20 shadow-sm dark:shadow-inner">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`px-2.5 lg:px-4 py-1 lg:py-1.5 rounded-full text-[11px] lg:text-xs font-medium tracking-wide transition-all ${
                      isActive
                        ? "text-emerald-700 dark:text-brand-green bg-emerald-50 dark:bg-purple-900/40 shadow-sm dark:shadow-[0_0_12px_rgba(0,245,155,0.15)] border border-emerald-300 dark:border-brand-green/30 font-semibold"
                        : "text-[#626775] dark:text-slate-300 hover:text-[#111218] dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5"
                    }`}
                  >
                    {item.name}
                  </a>
                );
              })}
            </nav>

            {/* Right Action & Theme Toggle (Desktop) */}
            <div className="hidden md:flex items-center gap-2 lg:gap-3">
              {/* Theme Toggle Button */}
              <ThemeToggle />

              <a
                href="#demo"
                onClick={(e) => handleNavClick(e, "#demo")}
                className="group relative inline-flex items-center gap-1.5 lg:gap-2 px-3.5 lg:px-5 py-1.5 lg:py-2 rounded-full text-[11px] lg:text-xs font-semibold tracking-wide text-black bg-gradient-to-r from-brand-green to-[#2bfdb0] hover:from-[#10e882] hover:to-brand-green transition-all shadow-[0_0_20px_rgba(0,245,155,0.35)] hover:shadow-[0_0_25px_rgba(0,245,155,0.55)] hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Explore Demo</span>
                <Sparkles className="w-3.5 h-3.5 text-black group-hover:rotate-12 transition-transform" />
              </a>
            </div>

            {/* Mobile header controls: Theme Toggle + Menu Trigger */}
            <div className="flex md:hidden items-center gap-2">
              <ThemeToggle />
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-slate-100 dark:bg-surface-100/80 border border-[#D9DCE5] dark:border-purple-500/20 text-[#111218] dark:text-slate-300 hover:text-black dark:hover:text-white focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 border-b border-[#D9DCE5] dark:border-purple-500/20 bg-white/95 dark:bg-[#0c0618]/95 backdrop-blur-2xl px-4 pt-3 pb-6 shadow-2xl animate-in slide-in-from-top duration-200">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="px-4 py-2.5 rounded-lg text-sm font-medium text-[#111218] dark:text-slate-200 hover:text-emerald-700 dark:hover:text-brand-green hover:bg-slate-100 dark:hover:bg-white/5 transition-colors flex items-center justify-between"
                >
                  <span>{item.name}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-50" />
                </a>
              ))}
              <div className="pt-2 flex flex-col gap-2">
                <a
                  href="#demo"
                  onClick={(e) => handleNavClick(e, "#demo")}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold text-black bg-gradient-to-r from-brand-green to-[#2bfdb0] shadow-lg shadow-brand-green/20"
                >
                  <span>Explore Demo</span>
                  <Sparkles className="w-4 h-4 text-black" />
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
