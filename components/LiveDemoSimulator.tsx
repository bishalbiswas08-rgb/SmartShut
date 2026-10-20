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
  const [scheduledTime, setScheduledTime] = useState<string>("09:00 AM");
  const [logMessage, setLogMessage] = useState<string>(
    "Room is currently occupied with 1 person. Power systems running normally."
  );
  const [ruleAlert, setRuleAlert] = useState<{ type: "error" | "success" | "info"; text: string } | null>(null);

  // Computed states based on energySavingActive
  const lightsOn = !energySavingActive;
  const fanOn = !energySavingActive;
  const acOn = !energySavingActive;

  // Helper action: Person Enters
  const handlePersonEnters = () => {
    const nextCount = personCount + 1;
    setPersonCount(nextCount);
    setIsVerified(false);
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
    // RULE 1: If OCCUPIED
    if (personCount > 0) {
      setRuleAlert({
        type: "error",
        text: `SAFETY LOCKOUT: Cannot activate energy saving while ${personCount} occupant(s) remain inside! Action required: Click "Leaves" until occupancy is 0.`,
      });
      setLogMessage("Energy shutdown rejected: Room is currently occupied.");
      return;
    }

    // RULE 2: If EMPTY but DOOR UNLOCKED
    if (!doorLocked) {
      setRuleAlert({
        type: "error",
        text: 'SECURITY REQUIREMENT: Door must be locked before activating energy shutdown to ensure perimeter security. Action required: Click "Lock Door".',
      });
      setLogMessage("Energy shutdown rejected: Door is still unlocked.");
      return;
    }

    // RULE 3: Must be verified empty
    if (!isVerified) {
      setRuleAlert({
        type: "error",
        text: 'VERIFICATION REQUIRED: Run "Verify Room" optical check before powering down non-essential devices. Action required: Click "Verify Room".',
      });
      setLogMessage("Energy shutdown paused: Room verification scan required first.");
      return;
    }

    // SUCCESS: EMPTY + VERIFIED + LOCKED
    setEnergySavingActive(true);
    setRuleAlert({
      type: "success",
      text: "CONDITIONS MET: Room Empty + Verified + Locked. Non-essential devices powered down. Security monitoring remains continuously active.",
    });
    setLogMessage("SmartShut successfully activated energy saving. Lights, Fan, and AC switched off. Security active.");
  };

  // Helper action: Schedule Unlock
  const handleScheduleUnlock = () => {
    setDoorLocked(false);
    setEnergySavingActive(false);
    setLogMessage(`Scheduled unlock triggered (${scheduledTime}). Door unlocked and daytime comfort circuits restored.`);
    setRuleAlert({
      type: "info",
      text: `Schedule Trigger: Reached scheduled time (${scheduledTime}). Door unlocked and daytime comfort circuits restored.`,
    });
  };

  // Reset demo
  const handleReset = () => {
    setPersonCount(1);
    setDoorLocked(false);
    setIsVerified(false);
    setEnergySavingActive(false);
    setScheduledTime("09:00 AM");
    setLogMessage("Simulator reset to baseline room state (1 person inside, unlocked, full power).");
    setRuleAlert(null);
  };

  return (
    <section id="demo" className="py-16 sm:py-24 relative overflow-hidden bg-[#070310]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[600px] lg:w-[900px] h-[350px] sm:h-[450px] lg:h-[550px] max-w-full bg-brand-green/10 blur-[120px] sm:blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/15 border border-brand-green/40 backdrop-blur-md mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-brand-green" />
            <span className="text-[11px] sm:text-xs font-mono font-semibold text-brand-green uppercase tracking-wider">
              INTERACTIVE CONCEPT DEMO — NOT CONNECTED TO REAL HARDWARE
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            SEE SMARTSHUT
            <br />
            <span className="text-gradient-green">THINK IN REAL TIME.</span>
          </h2>

          <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-slate-300">
            Experiment with SmartShut&apos;s core safety and energy logic. Try to trigger energy shutdown while occupied, or satisfy the required conditions: <span className="text-brand-green font-mono font-semibold">Empty + Verified + Locked</span>.
          </p>
        </div>

        {/* Main Simulator Frame */}
        <div className="rounded-2xl sm:rounded-3xl p-3.5 sm:p-6 lg:p-10 bg-gradient-to-b from-[#160c2f]/90 via-[#0e071f]/95 to-[#06020f] border-2 border-purple-500/30 shadow-2xl backdrop-blur-2xl">
          {/* Top Status Telemetry Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-3 pb-4 sm:pb-6 border-b border-purple-500/20 text-xs font-mono">
            {/* 1. Door Status */}
            <div className="p-2.5 sm:p-3 rounded-xl bg-[#0e061d] border border-purple-500/25">
              <span className="text-[9px] sm:text-[10px] text-purple-300/70 uppercase">Door Status</span>
              <div className="flex items-center gap-1.5 mt-1 font-bold text-xs sm:text-sm">
                {doorLocked ? (
                  <>
                    <Lock className="w-3.5 h-3.5 text-brand-green flex-shrink-0" />
                    <span className="text-brand-green truncate">LOCKED</span>
                  </>
                ) : (
                  <>
                    <Unlock className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                    <span className="text-amber-400 truncate">UNLOCKED</span>
                  </>
                )}
              </div>
            </div>

            {/* 2. Occupancy */}
            <div className="p-2.5 sm:p-3 rounded-xl bg-[#0e061d] border border-purple-500/25">
              <span className="text-[9px] sm:text-[10px] text-purple-300/70 uppercase">Occupancy</span>
              <div className="flex items-center gap-1.5 mt-1 font-bold text-xs sm:text-sm">
                <Users className="w-3.5 h-3.5 text-purple-300 flex-shrink-0" />
                <span className={`truncate ${personCount > 0 ? "text-amber-400" : "text-brand-green"}`}>
                  {personCount > 0 ? `OCCUPIED (${personCount})` : "EMPTY (0)"}
                </span>
              </div>
            </div>

            {/* 3. Verification */}
            <div className="p-2.5 sm:p-3 rounded-xl bg-[#0e061d] border border-purple-500/25">
              <span className="text-[9px] sm:text-[10px] text-purple-300/70 uppercase">Vision Check</span>
              <div className="flex items-center gap-1.5 mt-1 font-bold text-xs sm:text-sm">
                <Scan className="w-3.5 h-3.5 text-brand-cyan flex-shrink-0" />
                <span className={`truncate ${isVerified ? "text-brand-green" : "text-slate-400"}`}>
                  {isVerified ? "VERIFIED" : "UNVERIFIED"}
                </span>
              </div>
            </div>

            {/* 4. Energy State */}
            <div className="p-2.5 sm:p-3 rounded-xl bg-[#0e061d] border border-purple-500/25">
              <span className="text-[9px] sm:text-[10px] text-purple-300/70 uppercase">Energy Mode</span>
              <div className="flex items-center gap-1.5 mt-1 font-bold text-xs sm:text-sm">
                {energySavingActive ? (
                  <>
                    <ZapOff className="w-3.5 h-3.5 text-brand-green flex-shrink-0" />
                    <span className="text-brand-green font-bold truncate">SAVING (ISOLATED)</span>
                  </>
                ) : (
                  <>
                    <Zap className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                    <span className="text-amber-400 truncate">ACTIVE (FULL LOAD)</span>
                  </>
                )}
              </div>
            </div>

            {/* 5. Security Sentinel */}
            <div className="p-2.5 sm:p-3 rounded-xl bg-[#0e061d] border border-purple-500/25 col-span-2 sm:col-span-1">
              <span className="text-[9px] sm:text-[10px] text-purple-300/70 uppercase">Security Sentinel</span>
              <div className="flex items-center gap-1.5 mt-1 font-bold text-xs sm:text-sm">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-green animate-pulse flex-shrink-0" />
                <span className="text-brand-green truncate">ACTIVE 24/7</span>
              </div>
            </div>
          </div>

          {/* Center Stage: Interactive Room View & Device Visualizer */}
          <div className="my-6 sm:my-8 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            {/* The Visual Simulated Room (7 cols) */}
            <div className="lg:col-span-7">
              <div className="relative rounded-2xl p-3.5 sm:p-6 bg-[#090414] border-2 border-purple-500/30 overflow-hidden min-h-[320px] sm:min-h-[360px] flex flex-col justify-between">
                {/* Visual Ambient Lighting according to Energy state */}
                <div
                  className={`absolute inset-0 transition-all duration-700 pointer-events-none ${
                    lightsOn
                      ? "bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-400/20 via-purple-950/20 to-transparent"
                      : "bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-green/10 via-[#070311] to-[#04010a]"
                  }`}
                />

                {/* Top Room Header: Sensors & Appliances */}
                <div className="relative z-10 flex items-start justify-between gap-1.5 sm:gap-2">
                  {/* Smart Light Fixture */}
                  <div className="flex flex-col items-center">
                    <div
                      className={`p-2 sm:p-3 rounded-full border transition-all duration-500 ${
                        lightsOn
                          ? "bg-amber-400/20 border-amber-400/80 shadow-[0_0_25px_rgba(251,191,36,0.6)]"
                          : "bg-slate-900 border-slate-800"
                      }`}
                    >
                      <Lightbulb
                        className={`w-5 h-5 sm:w-6 sm:h-6 transition-colors duration-500 ${
                          lightsOn ? "text-amber-300" : "text-slate-600"
                        }`}
                      />
                    </div>
                    <span className="text-[9px] sm:text-[11px] font-mono mt-1 font-semibold text-slate-300">
                      LIGHTS: {lightsOn ? "ON" : "OFF"}
                    </span>
                  </div>

                  {/* Ceiling Fan */}
                  <div className="flex flex-col items-center">
                    <div
                      className={`p-2 sm:p-3 rounded-full border transition-all duration-500 ${
                        fanOn
                          ? "bg-purple-900/40 border-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.3)]"
                          : "bg-slate-900 border-slate-800"
                      }`}
                    >
                      <Fan
                        className={`w-5 h-5 sm:w-6 sm:h-6 transition-colors duration-500 ${
                          fanOn
                            ? "text-purple-300 animate-spin"
                            : "text-slate-600"
                        }`}
                        style={{ animationDuration: fanOn ? "0.8s" : "0s" }}
                      />
                    </div>
                    <span className="text-[9px] sm:text-[11px] font-mono mt-1 font-semibold text-slate-300">
                      FAN: {fanOn ? "SPIN" : "OFF"}
                    </span>
                  </div>

                  {/* Air Conditioning Unit */}
                  <div className="flex flex-col items-end">
                    <div
                      className={`px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg border flex items-center gap-1.5 transition-all duration-500 ${
                        acOn
                          ? "bg-[#180b2a] border-cyan-400/60 shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                          : "bg-slate-900 border-slate-800"
                      }`}
                    >
                      <Wind
                        className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${
                          acOn ? "text-brand-cyan animate-bounce" : "text-slate-600"
                        }`}
                      />
                      <span className="text-[10px] sm:text-xs font-mono text-white">
                        AC: {acOn ? "COOLING" : "OFF"}
                      </span>
                    </div>
                    <span className="text-[8px] sm:text-[10px] font-mono text-slate-400 mt-0.5">
                      {acOn ? "Compressor Active" : "Relay Isolated"}
                    </span>
                  </div>
                </div>

                {/* Center of the Room: Occupants Presence Avatar */}
                <div className="relative z-10 my-6 sm:my-8 flex items-center justify-center">
                  <div className="flex items-center gap-3 sm:gap-4 flex-wrap justify-center">
                    {personCount === 0 ? (
                      <div className="flex flex-col items-center p-4 sm:p-6 rounded-2xl bg-black/40 border border-brand-green/30 backdrop-blur-sm animate-in fade-in">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-brand-green/10 border border-brand-green/40 flex items-center justify-center text-brand-green mb-1.5 sm:mb-2">
                          <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-brand-green" />
                        </div>
                        <span className="text-[11px] sm:text-xs font-mono font-bold text-brand-green">
                          NO OCCUPANTS IN ROOM
                        </span>
                        <span className="text-[9px] sm:text-[10px] font-mono text-slate-400 mt-0.5">
                          Safe for energy power-down
                        </span>
                      </div>
                    ) : (
                      Array.from({ length: Math.min(3, personCount) }).map((_, i) => (
                        <div
                          key={i}
                          className="flex flex-col items-center animate-in zoom-in-95 duration-200"
                        >
                          <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-purple-900/60 border-2 border-purple-400 flex items-center justify-center shadow-lg shadow-purple-950/50">
                            <Users className="w-5 h-5 sm:w-7 sm:h-7 text-purple-200" />
                          </div>
                          <span className="text-[10px] sm:text-[11px] font-mono text-white font-medium mt-1">
                            Occupant #{i + 1}
                          </span>
                        </div>
                      ))
                    )}
                  </div>
                </div>

                {/* Bottom of Room: The SmartShut Doorway */}
                <div className="relative z-10 pt-3 sm:pt-4 border-t border-purple-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3">
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <div
                      className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl border flex items-center justify-center transition-colors flex-shrink-0 ${
                        doorLocked
                          ? "bg-brand-green/20 border-brand-green text-brand-green"
                          : "bg-amber-500/20 border-amber-500 text-amber-400"
                      }`}
                    >
                      {doorLocked ? (
                        <Lock className="w-4 h-4 sm:w-5 sm:h-5 text-brand-green" />
                      ) : (
                        <Unlock className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
                      )}
                    </div>
                    <div>
                      <div className="text-[11px] sm:text-xs font-mono font-bold text-white">
                        SMARTSHUT DOOR LATCH
                      </div>
                      <div className="text-[9px] sm:text-[10px] font-mono text-slate-400">
                        {doorLocked ? "Deadbolt Engaged" : "Door Unlocked"}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-2 text-xs font-mono">
                    <span className="text-[10px] sm:text-[11px] text-slate-400">Circuit Load:</span>
                    <span
                      className={`text-[10px] sm:text-xs font-mono font-bold px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md ${
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
            <div className="lg:col-span-5 flex flex-col space-y-3 sm:space-y-4 w-full">
              <div className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-purple-300">
                Simulator Control Panel
              </div>

              {/* Occupancy Manipulation */}
              <div className="p-3 sm:p-4 rounded-xl bg-[#0f0722] border border-purple-500/20">
                <div className="text-xs font-mono text-slate-300 mb-2 font-semibold">
                  1. Room Occupancy
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={handlePersonEnters}
                    className="flex items-center justify-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-2 rounded-lg bg-surface-100 hover:bg-surface-50 border border-purple-500/30 text-white font-mono text-[11px] sm:text-xs transition-all"
                  >
                    <UserPlus className="w-3.5 h-3.5 text-brand-green flex-shrink-0" />
                    <span>Enters</span>
                  </button>
                  <button
                    onClick={handlePersonLeaves}
                    className="flex items-center justify-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-2 rounded-lg bg-surface-100 hover:bg-surface-50 border border-purple-500/30 text-white font-mono text-[11px] sm:text-xs transition-all"
                  >
                    <UserMinus className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                    <span>Leaves</span>
                  </button>
                </div>
              </div>

              {/* Physical Door State */}
              <div className="p-3 sm:p-4 rounded-xl bg-[#0f0722] border border-purple-500/20">
                <div className="text-xs font-mono text-slate-300 mb-2 font-semibold">
                  2. Door Deadbolt Latch
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={handleLockDoor}
                    className={`flex items-center justify-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-2 rounded-lg border font-mono text-[11px] sm:text-xs transition-all ${
                      doorLocked
                        ? "bg-brand-green/20 border-brand-green text-brand-green font-bold"
                        : "bg-surface-100 hover:bg-surface-50 border-purple-500/30 text-white"
                    }`}
                  >
                    <Lock className="w-3.5 h-3.5 flex-shrink-0" />
                    <span>Lock Door</span>
                  </button>
                  <button
                    onClick={handleUnlockDoor}
                    className={`flex items-center justify-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-2 rounded-lg border font-mono text-[11px] sm:text-xs transition-all ${
                      !doorLocked
                        ? "bg-amber-500/20 border-amber-500 text-amber-400 font-bold"
                        : "bg-surface-100 hover:bg-surface-50 border-purple-500/30 text-white"
                    }`}
                  >
                    <Unlock className="w-3.5 h-3.5 flex-shrink-0" />
                    <span>Unlock</span>
                  </button>
                </div>
              </div>

              {/* Verification & Energy Control */}
              <div className="p-3 sm:p-4 rounded-xl bg-[#0f0722] border border-purple-500/20">
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

              {/* 4. Schedule Automation & Time Adjuster */}
              <div className="p-3 sm:p-4 rounded-xl bg-[#0f0722] border border-purple-500/20">
                <div className="flex items-center justify-between text-xs font-mono text-slate-300 mb-2 font-semibold">
                  <span>4. Scheduled Unlock Time</span>
                  <span className="text-brand-cyan text-[11px]">{scheduledTime}</span>
                </div>
                <div className="grid grid-cols-3 gap-1.5 mb-2.5">
                  {(["07:00 AM", "08:30 AM", "09:00 AM"] as const).map((t) => (
                    <button
                      key={t}
                      onClick={() => setScheduledTime(t)}
                      className={`px-2 py-1 rounded text-[10px] font-mono transition-all ${
                        scheduledTime === t
                          ? "bg-cyan-950/80 border border-brand-cyan text-brand-cyan font-bold"
                          : "bg-surface-100 hover:bg-surface-50 border border-purple-500/25 text-slate-300"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleScheduleUnlock}
                    className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-purple-950/70 hover:bg-purple-900/70 border border-brand-cyan/40 text-cyan-200 text-xs font-mono transition-all truncate"
                  >
                    <Clock className="w-3.5 h-3.5 text-brand-cyan flex-shrink-0" />
                    <span className="truncate">Trigger Scheduled Unlock</span>
                  </button>
                  <button
                    onClick={handleReset}
                    className="px-3 py-2 rounded-lg bg-surface-100 hover:bg-surface-50 border border-purple-500/30 text-slate-300 text-xs font-mono transition-all flex items-center gap-1 flex-shrink-0"
                    title="Reset simulator"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Reset</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Feedback & Rule Validation Banner */}
          {ruleAlert && (
            <div
              className={`p-3 sm:p-4 rounded-xl mb-4 border flex items-start gap-2.5 sm:gap-3 transition-all animate-in fade-in ${
                ruleAlert.type === "error"
                  ? "bg-red-950/40 border-red-500/50 text-red-200"
                  : ruleAlert.type === "success"
                  ? "bg-brand-green/10 border-brand-green/50 text-emerald-200"
                  : "bg-purple-950/40 border-purple-500/40 text-purple-200"
              }`}
            >
              {ruleAlert.type === "error" ? (
                <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-400 flex-shrink-0 mt-0.5" />
              ) : (
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-brand-green flex-shrink-0 mt-0.5" />
              )}
              <div className="text-[11px] sm:text-xs font-mono leading-relaxed">{ruleAlert.text}</div>
            </div>
          )}

          {/* System Console Log Bar */}
          <div className="p-3 sm:p-3.5 rounded-xl bg-black/60 border border-purple-900/40 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-xs font-mono text-slate-300">
            <span className="text-purple-400 font-bold flex-shrink-0">SYSTEM LOG:</span>
            <span className="break-words sm:truncate">{logMessage}</span>
          </div>

          {/* Footer Concept Label */}
          <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-[10px] sm:text-[11px] font-mono text-slate-400 pt-2 border-t border-purple-500/15">
            <span className="flex items-center gap-1.5">
              <Info className="w-3.5 h-3.5 text-purple-400 flex-shrink-0" />
              SmartShut Concept Demo — not connected to real hardware.
            </span>
            <span>Local state emulation</span>
          </div>
        </div>
      </div>
    </section>
  );
}
