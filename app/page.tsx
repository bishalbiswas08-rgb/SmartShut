import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import ProductCutawaySection from "@/components/ProductCutawaySection";
import HowItWorksSection from "@/components/HowItWorksSection";
import LiveDemoSimulator from "@/components/LiveDemoSimulator";
import FeatureVisualsSection from "@/components/FeatureVisualsSection";
import PhoneDashboardSection from "@/components/PhoneDashboardSection";
import EnergyVisualizationSection from "@/components/EnergyVisualizationSection";
import SmartSchedulingSection from "@/components/SmartSchedulingSection";
import SecurityPrivacySection from "@/components/SecurityPrivacySection";
import ApplicationsSection from "@/components/ApplicationsSection";
import ComparisonSection from "@/components/ComparisonSection";
import CinematicCtaSection from "@/components/CinematicCtaSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F7F8FA] dark:bg-[#07040d] text-[#111218] dark:text-slate-100 flex flex-col selection:bg-brand-green/20 selection:text-black dark:selection:text-white overflow-x-hidden w-full max-w-full transition-colors duration-200">
      {/* Sticky Glass Navbar */}
      <Navbar />

      {/* Main Product Showcase Flow */}
      <main className="flex-grow w-full max-w-full overflow-x-hidden">
        {/* Section 1: Hero */}
        <HeroSection />

        {/* Section 2: The Problem */}
        <ProblemSection />

        {/* Section 3: The Product Cutaway Schematic */}
        <ProductCutawaySection />

        {/* Section 4: How SmartShut Works (6-step sequence) */}
        <HowItWorksSection />

        {/* Section 5: Live Concept Demo (Main Interactive Simulator) */}
        <LiveDemoSimulator />

        {/* Section 6: Six Rich Feature Visuals */}
        <FeatureVisualsSection />

        {/* Section 7: Companion Phone Dashboard */}
        <PhoneDashboardSection />

        {/* Section 8: Energy Flow Visualization */}
        <EnergyVisualizationSection />

        {/* Section 9: 24h Smart Scheduling */}
        <SmartSchedulingSection />

        {/* Section 10: Security & Privacy Architecture */}
        <SecurityPrivacySection />

        {/* Section 11: Real-World Applications */}
        <ApplicationsSection />

        {/* Section 12: Category Comparison Matrix */}
        <ComparisonSection />

        {/* Section 13: Final Cinematic Call To Action */}
        <CinematicCtaSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
