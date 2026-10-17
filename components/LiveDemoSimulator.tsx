"use client";

import React, { useState } from "react";
import {
  Lock,
  Unlock,
  Users,
  UserPlus,
  UserMinus,
  CheckCircle2,
  AlertCircle,
  Zap,
  ZapOff,
  ShieldCheck,
  Lightbulb,
  Fan,
  Wind,
  Scan,
  RotateCcw,
  Clock,
  Sparkles,
  Info,
} from "lucide-react";

export default function LiveDemoSimulator() {
  // Simulator State
  const [personCount, setPersonCount] = useState<number>(1);
  const [doorLocked, setDoorLocked] = useState<boolean>(false);
  const [isVerified, setIsVerified] = useState<boolean>(false);
  const [energySavingActive, setEnergySavingActive] = useState<boolean>(false);
  const [scheduledUnlockActive, setScheduledUnlockActive] = useState<boolean>(false);
  const [logMessage, setLogMessage] = useState<string>(
    "Room is currently occupied with 1 person. Power systems running normally."
  );
  const [ruleAlert, setRuleAlert] = useState<{ type: "error" | "success" | "info"; text: string } | null>(null);

  // Computed states based on energySavingActive
  const lightsOn = !energySavingActive;
  const fanOn = !energySavingActive;
  const acOn = !energySavingActive;
  const monitoringActive = true; // Security always remains active

  // Helper action: Person Enters
  const handlePersonEnters = () => {
    const nextCount = personCount + 1;
    setPersonCount(nextCount);
    setIsVerified(false);
    // If energy saving was on, someone entering must wake up systems
    if (energySavingActive) {
      setEnergySavingActive(false);
      setLogMessage(`Person entered the room. SmartShut automatically deactivated energy saving and restored room power.`);
      setRuleAlert({
        type: "info",
        text: "Safety override: Human presence detected. Power restored immediately.",
      });
    } else {
      setLogMessage(`Person entered the room. Current occupancy count: ${nextCount}.`);
      setRuleAlert(null);
    }
  };

  // Helper action: Person Leaves
  const handlePersonLeaves = () => {
    if (personCount <= 0) {
      setRuleAlert({
        type: "info",
        text: "Room is already unoccupied (0 persons).",
      });
      return;
    }
    const nextCount = personCount - 1;
    setPersonCount(nextCount);
    setIsVerified(false);
    setLogMessage(`Person departed. Remaining occupancy count: ${nextCount}.`);
    setRuleAlert(null);
  };

  // Helper action: Lock Door
  const handleLockDoor = () => {
    setDoorLocked(true);
    setLogMessage("Smart door deadbolt engaged. Door is now securely locked.");
    setRuleAlert(null);
  };

  // Helper action: Unlock Door
  const handleUnlockDoor = () => {
    setDoorLocked(false);
    // If unlocked while energy saving was active, does it revert?
    setLogMessage("Door unlocked via authorized biometric credential.");
    setRuleAlert(null);
  };

  // Helper action: Verify Room
  const handleVerifyRoom = () => {
    if (personCount > 0) {
      setIsVerified(false);
      setRuleAlert({
        type: "error",
        text: `Occupancy Scan Failed: ${personCount} person(s) still detected in room. Room cannot be marked verified empty.`,
      });
      setLogMessage(`Vision scan detected ${personCount} person(s). Verification rejected.`);
    } else {
      setIsVerified(true);
      setRuleAlert({
        type: "success",
        text: "Occupancy Scan Confirmed: 0 persons detected. Room verified 100% empty.",
      });
      setLogMessage("Camera and optical sensors verified room is completely empty.");
    }
  };

  // Helper action: Activate Energy Saving (STRICT SMARTSHUT LOGIC)
  const handleActivateEnergySaving = () => {
    // RULE 1: If OCCUPIED: energy saving cannot activate
    if (personCount > 0) {
      setRuleAlert({
        type: "error",
        text: "SAFETY LOCKOUT: Cannot activate energy saving while people are inside the room! Ensure everyone has exited.",
      });
      setLogMessage("Energy shutdown rejected: Room is currently occupied.");
      return;
    }

    // RULE 2: If EMPTY but DOOR UNLOCKED: energy saving cannot activate
    if (!doorLocked) {
      setRuleAlert({
        type: "error",
        text: "SECURITY REQUIREMENT: Door must be locked before activating energy shutdown to ensure room security.",
      });
      setLogMessage("Energy shutdown rejected: Door is still unlocked.");
      return;
    }

    // RULE 3: Must be verified empty
    if (!isVerified) {
      setRuleAlert({
        type: "error",
        text: "VERIFICATION REQUIRED: Run 'Verify Room' optical check before powering down non-essential devices.",
      });
      setLogMessage("Energy shutdown paused: Room verification scan required first.");
      return;
    }

    // SUCCESS: EMPTY + VERIFIED + LOCKED
    setEnergySavingActive(true);
    setRuleAlert({
      type: "success",
      text: "CONDITIONS MET: Room Empty + Verified + Locked. Non-essential devices powered down. Security remains vigilant.",
    });
    setLogMessage("SmartShut successfully activated energy saving. Lights, Fan, and AC switched off. Security active.");
  };

  // Helper action: Schedule Unlock (Simulates 9:00 AM unlock)
  const handleScheduleUnlock = () => {
    setScheduledUnlockActive(true);
    setDoorLocked(false);
    setEnergySavingActive(false);
    setLogMessage("Scheduled morning unlock triggered (09:00 AM). Door unlocked and daytime power restored.");
    setRuleAlert({
      type: "info",
      text: "Schedule Trigger: Door unlocked and daytime climate restored as scheduled.",
    });
  };

  // Reset demo
  const handleReset = () => {
    setPersonCount(1);
    setDoorLocked(false);
    setIsVerified(false);
    setEnergySavingActive(false);
    setScheduledUnlockActive(false);
    setLogMessage("Simulator reset to baseline room state (1 person inside, unlocked, full power).");
    setRuleAlert(null);
  };

  return (
    <section id="demo" className="py-24 relative overflow-hidden bg-[#070310]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-brand-green/10 blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/15 border border-brand-green/40 backdrop-blur-md mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-brand-green" />
            <span className="text-xs font-mono font-semibold text-brand-green uppercase tracking-wider">
              INTERACTIVE CONCEPT DEMO
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            SEE SMARTSHUT
            <br />
            <span className="text-gradient-green">THINK IN REAL TIME.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Experiment with SmartShut&apos;s core safety and energy logic. Try to trigger energy shutdown while occupied, or follow the authorized 3-key condition: <span className="text-brand-green font-mono font-semibold">Empty + Verified + Locked</span>.
          </p>
        </div>

        {/* Main Simulator Frame */}
        <div className="rounded-3xl p-6 sm:p-8 lg:p-10 bg-gradient-to-b from-[#160c2f]/90 via-[#0e071f]/95 to-[#06020f] border-2 border-purple-500/30 shadow-2xl backdrop-blur-2xl">
          {/* Top Status Telemetry Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pb-6 border-b border-purple-500/20 text-xs font-mono">
            {/* 1. Door Status */}
            <div className="p-3 rounded-xl bg-[#0e061d] border border-purple-500/25">
              <span className="text-[10px] text-purple-300/70 uppercase">Door Status</span>
              <div className="flex items-center gap-1.5 mt-1 font-bold text-sm">
                {doorLocked ? (
                  <>
                    <Lock className="w-4 h-4 text-brand-green" />
                    <span className="text-brand-green">LOCKED</span>
                  </>
                ) : (
                  <>
                    <Unlock className="w-4 h-4 text-amber-400" />
                    <span className="text-amber-400">UNLOCKED</span>
                  </>
                )}
              </div>
            </div>

            {/* 2. Occupancy */}
            <div className="p-3 rounded-xl bg-[#0e061d] border border-purple-500/25">
              <span className="text-[10px] text-purple-300/70 uppercase">Occupancy</span>
              <div className="flex items-center gap-1.5 mt-1 font-bold text-sm">
                <Users className="w-4 h-4 text-purple-300" />
                <span className={personCount > 0 ? "text-amber-400" : "text-brand-green"}>
                  {personCount > 0 ? `OCCUPIED (${personCount})` : "EMPTY (0)"}
                </span>
              </div>
            </div>

            {/* 3. Verification */}
            <div className="p-3 rounded-xl bg-[#0e061d] border border-purple-500/25">
              <span className="text-[10px] text-purple-300/70 uppercase">Vision Check</span>
              <div className="flex items-center gap-1.5 mt-1 font-bold text-sm">
                <Scan className="w-4 h-4 text-brand-cyan" />
                <span className={isVerified ? "text-brand-green" : "text-slate-400"}>
                  {isVerified ? "VERIFIED" : "NOT VERIFIED"}
                </span>
              </div>
            </div>

            {/* 4. Energy State */}
            <div className="p-3 rounded-xl bg-[#0e061d] border border-purple-500/25">
              <span className="text-[10px] text-purple-300/70 uppercase">Energy Mode</span>
              <div className="flex items-center gap-1.5 mt-1 font-bold text-sm">
                {energySavingActive ? (
                  <>
                    <ZapOff className="w-4 h-4 text-brand-green" />
                    <span className="text-brand-green font-bold">SAVING (-85%)</span>
                  </>
                ) : (
                  <>
                    <Zap className="w-4 h-4 text-amber-400" />
                    <span className="text-amber-400">ACTIVE (100%)</span>
                  </>
                )}
              </div>
            </div>

            {/* 5. Security Sentinel */}
            <div className="p-3 rounded-xl bg-[#0e061d] border border-purple-500/25 col-span-2 sm:col-span-1">
              <span className="text-[10px] text-purple-300/70 uppercase">Security Sentinel</span>
              <div className="flex items-center gap-1.5 mt-1 font-bold text-sm">
                <ShieldCheck className="w-4 h-4 text-brand-green animate-pulse" />
                <span className="text-brand-green">ACTIVE</span>
              </div>
            </div>
          </div>

          {/* Center Stage: Interactive Room View & Device Visualizer */}
          <div className="my-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* The Visual Simulated Room (7 cols) */}
            <div className="lg:col-span-7">
              <div className="relative rounded-2xl p-6 bg-[#090414] border-2 border-purple-500/30 overflow-hidden min-h-[360px] flex flex-col justify-between">
                {/* Visual Ambient Lighting according to Energy state */}
                <div
                  className={`absolute inset-0 transition-all duration-700 pointer-events-none ${
                    lightsOn
                      ? "bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-400/20 via-purple-950/20 to-transparent"
                      : "bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-green/10 via-[#070311] to-[#04010a]"
                  }`}
                />

                {/* Top Room Header: Sensors & Appliances */}
                <div className="relative z-10 flex items-start justify-between">
                  {/* Smart Light Fixture */}
                  <div className="flex flex-col items-center">
                    <div
                      className={`p-3 rounded-full border transition-all duration-500 ${
                        lightsOn
                          ? "bg-amber-400/20 border-amber-400/80 shadow-[0_0_25px_rgba(251,191,36,0.6)]"
                          : "bg-slate-900 border-slate-800"
                      }`}
                    >
                      <Lightbulb
                        className={`w-6 h-6 transition-colors duration-500 ${
                          lightsOn ? "text-amber-300" : "text-slate-600"
                        }`}
                      />
                    </div>
                    <span className="text-[11px] font-mono mt-1 font-semibold text-slate-300">
                      LIGHTS: {lightsOn ? "ON" : "OFF"}
                    </span>
                  </div>

                  {/* Ceiling Fan */}
                  <div className="flex flex-col items-center">
                    <div
                      className={`p-3 rounded-full border transition-all duration-500 ${
                        fanOn
                          ? "bg-purple-900/40 border-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.3)]"
                          : "bg-slate-900 border-slate-800"
                      }`}
                    >
                      <Fan
                        className={`w-6 h-6 transition-colors duration-500 ${
                          fanOn
                            ? "text-purple-300 animate-spin"
                            : "text-slate-600"
                        }`}
                        style={{ animationDuration: fanOn ? "0.8s" : "0s" }}
                      />
                    </div>
                    <span className="text-[11px] font-mono mt-1 font-semibold text-slate-300">
                      FAN: {fanOn ? "SPINNING" : "OFF"}
                    </span>
                  </div>

                  {/* Air Conditioning Unit */}
                  <div className="flex flex-col items-end">
                    <div
                      className={`px-3 py-1.5 rounded-lg border flex items-center gap-2 transition-all duration-500 ${
                        acOn
                          ? "bg-[#180b2a] border-cyan-400/60 shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                          : "bg-slate-900 border-slate-800"
                      }`}
                    >
                      <Wind
                        className={`w-4 h-4 ${
                          acOn ? "text-brand-cyan animate-bounce" : "text-slate-600"
                        }`}
                      />
                      <span className="text-xs font-mono text-white">
                        AC: {acOn ? "COOLING" : "OFF"}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-slate-400 mt-1">
                      {acOn ? "Compressor Active" : "Relay Isolated"}
                    </span>
                  </div>
                </div>

                {/* Center of the Room: Occupants Presence Avatar */}
                <div className="relative z-10 my-8 flex items-center justify-center">
                  <div className="flex items-center gap-4">
                    {personCount === 0 ? (
                      <div className="flex flex-col items-center p-6 rounded-2xl bg-black/40 border border-brand-green/30 backdrop-blur-sm animate-in fade-in">
                        <div className="w-12 h-12 rounded-full bg-brand-green/10 border border-brand-green/40 flex items-center justify-center text-brand-green mb-2">
                          <CheckCircle2 className="w-6 h-6 text-brand-green" />
                        </div>
                        <span className="text-xs font-mono font-bold text-brand-green">
                          NO OCCUPANTS IN ROOM
                        </span>
                        <span className="text-[10px] font-mono text-slate-400 mt-0.5">
                          Safe for energy power-down
                        </span>
                      </div>
                    ) : (
                      Array.from({ length: personCount }).map((_, i) => (
                        <div
                          key={i}
                          className="flex flex-col items-center animate-in zoom-in-95 duration-200"
                        >
                          <div className="w-14 h-14 rounded-full bg-purple-900/60 border-2 border-purple-400 flex items-center justify-center shadow-lg shadow-purple-950/50">
                            <Users className="w-7 h-7 text-purple-200" />
                          </div>
                          <span className="text-[11px] font-mono text-white font-medium mt-1">
                            Occupant #{i + 1}
                          </span>
                        </div>
                      ))
                    )}
                  </div>
                </div>

                {/* Bottom of Room: The SmartShut Doorway */}
                <div className="relative z-10 pt-4 border-t border-purple-500/20 flex items-center justify-between">
                  {/* Door visual node */}
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-9 h-9 rounded-xl border flex items-center justify-center transition-colors ${
                        doorLocked
                          ? "bg-brand-green/20 border-brand-green text-brand-green"
                          : "bg-amber-500/20 border-amber-500 text-amber-400"
                      }`}
                    >
                      {doorLocked ? (
                        <Lock className="w-5 h-5 text-brand-green" />
                      ) : (
                        <Unlock className="w-5 h-5 text-amber-400" />
                      )}
                    </div>
                    <div>
                      <div className="text-xs font-mono font-bold text-white">
                        SMARTSHUT DOOR LATCH
                      </div>
                      <div className="text-[10px] font-mono text-slate-400">
                        {doorLocked ? "Hardware Deadbolt Engaged" : "Door Unlocked / Accessible"}
                      </div>
                    </div>
                  </div>

                  {/* Energy Flow Animation Wave */}
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono text-slate-400">Circuit Load:</span>
                    <span
                      className={`text-xs font-mono font-bold px-2.5 py-1 rounded-md ${
                        energySavingActive
                          ? "bg-brand-green/20 text-brand-green border border-brand-green/40 animate-pulse"
                          : "bg-amber-500/20 text-amber-300 border border-amber-500/40"
                      }`}
                    >
                      {energySavingActive ? "15W (STANDBY)" : "1,850W (FULL)"}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Control Deck (5 cols) */}
            <div className="lg:col-span-5 flex flex-col space-y-4">
              <div className="text-xs font-mono uppercase tracking-wider text-purple-300">
                Simulator Control Panel
              </div>

              {/* Occupancy Manipulation */}
              <div className="p-4 rounded-xl bg-[#0f0722] border border-purple-500/20">
                <div className="text-xs font-mono text-slate-300 mb-2 font-semibold">
                  1. Room Occupancy
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={handlePersonEnters}
                    className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-surface-100 hover:bg-surface-50 border border-purple-500/30 text-white font-mono text-xs transition-all"
                  >
                    <UserPlus className="w-3.5 h-3.5 text-brand-green" />
                    <span>Person Enters</span>
                  </button>
                  <button
                    onClick={handlePersonLeaves}
                    className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-surface-100 hover:bg-surface-50 border border-purple-500/30 text-white font-mono text-xs transition-all"
                  >
                    <UserMinus className="w-3.5 h-3.5 text-amber-400" />
                    <span>Person Leaves</span>
                  </button>
                </div>
              </div>

              {/* Physical Door State */}
              <div className="p-4 rounded-xl bg-[#0f0722] border border-purple-500/20">
                <div className="text-xs font-mono text-slate-300 mb-2 font-semibold">
                  2. Door Deadbolt Latch
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={handleLockDoor}
                    className={`flex items-center justify-center gap-2 px-3 py-2 rounded-lg border font-mono text-xs transition-all ${
                      doorLocked
                        ? "bg-brand-green/20 border-brand-green text-brand-green font-bold"
                        : "bg-surface-100 hover:bg-surface-50 border-purple-500/30 text-white"
                    }`}
                  >
                    <Lock className="w-3.5 h-3.5" />
                    <span>Lock Door</span>
                  </button>
                  <button
                    onClick={handleUnlockDoor}
                    className={`flex items-center justify-center gap-2 px-3 py-2 rounded-lg border font-mono text-xs transition-all ${
                      !doorLocked
                        ? "bg-amber-500/20 border-amber-500 text-amber-400 font-bold"
                        : "bg-surface-100 hover:bg-surface-50 border-purple-500/30 text-white"
                    }`}
                  >
                    <Unlock className="w-3.5 h-3.5" />
                    <span>Unlock Door</span>
                  </button>
                </div>
              </div>

              {/* Verification & Energy Control */}
              <div className="p-4 rounded-xl bg-[#0f0722] border border-purple-500/20">
                <div className="text-xs font-mono text-slate-300 mb-2 font-semibold">
                  3. Logic Evaluation
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <button
                    onClick={handleVerifyRoom}
                    className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-surface-100 hover:bg-surface-50 border border-brand-cyan/40 text-brand-cyan font-mono text-xs transition-all"
                  >
                    <Scan className="w-3.5 h-3.5" />
                    <span>Verify Room</span>
                  </button>
                  <button
                    onClick={handleActivateEnergySaving}
                    className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r from-brand-green to-[#27fcae] hover:shadow-lg text-black font-mono text-xs font-bold transition-all shadow-[0_0_15px_rgba(0,245,155,0.3)]"
                  >
                    <ZapOff className="w-3.5 h-3.5 text-black" />
                    <span>Activate Energy</span>
                  </button>
                </div>
              </div>

              {/* Advanced Triggers: Schedule & Reset */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handleScheduleUnlock}
                  className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-purple-950/60 hover:bg-purple-900/60 border border-purple-500/30 text-purple-200 text-xs font-mono transition-all"
                >
                  <Clock className="w-3 h-3 text-brand-cyan" />
                  <span>Simulate 9 AM Unlock</span>
                </button>
                <button
                  onClick={handleReset}
                  className="px-3 py-2 rounded-lg bg-surface-100 hover:bg-surface-50 border border-purple-500/30 text-slate-300 text-xs font-mono transition-all flex items-center gap-1"
                  title="Reset simulator"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset</span>
                </button>
              </div>
            </div>
          </div>

          {/* Feedback & Rule Validation Banner */}
          {ruleAlert && (
            <div
              className={`p-4 rounded-xl mb-4 border flex items-start gap-3 transition-all animate-in fade-in ${
                ruleAlert.type === "error"
                  ? "bg-red-950/40 border-red-500/50 text-red-200"
                  : ruleAlert.type === "success"
                  ? "bg-brand-green/10 border-brand-green/50 text-emerald-200"
                  : "bg-purple-950/40 border-purple-500/40 text-purple-200"
              }`}
            >
              {ruleAlert.type === "error" ? (
                <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
              ) : (
                <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
              )}
              <div className="text-xs font-mono leading-relaxed">{ruleAlert.text}</div>
            </div>
          )}

          {/* System Console Log Bar */}
          <div className="p-3.5 rounded-xl bg-black/60 border border-purple-900/40 flex items-center gap-3 text-xs font-mono text-slate-300">
            <span className="text-purple-400 font-bold flex-shrink-0">SYSTEM LOG:</span>
            <span className="truncate">{logMessage}</span>
          </div>

          {/* Footer Concept Label */}
          <div className="mt-4 flex items-center justify-between text-[11px] font-mono text-slate-400 pt-2 border-t border-purple-500/15">
            <span className="flex items-center gap-1.5">
              <Info className="w-3.5 h-3.5 text-purple-400" />
              SmartShut Concept Engine · Illustrative demo logic
            </span>
            <span>Local state emulation</span>
          </div>
        </div>
      </div>
    </section>
  );
}
