"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Sun, BookOpen, Clock, ShieldAlert, Sparkles, CircleCheck } from "lucide-react";

interface RhythmSlot {
  id: string;
  time: string;
  period: string;
  title: string;
  icon: React.ElementType;
  observedSignal: string;
  whatCannotBeKnown: string;
  contextSignificance: string;
  reasonableNextStep: string;
  status: "nominal" | "calm" | "uncertainty" | "triage";
}

const rhythmSlots: RhythmSlot[] = [
  {
    id: "m_01",
    time: "07:30 AM",
    period: "Morning Wake Window",
    title: "Balcony Tea & Footfall Transition",
    icon: Sun,
    observedSignal: "Bedroom to kitchen transit logged at 07:14 AM. Balcony sliding door contact cycled once.",
    whatCannotBeKnown: "The system does not know her mental mood or hydration level from this sensor alone.",
    contextSignificance: "Aligns with her daily routine of morning balcony gardening.",
    reasonableNextStep: "No action. Mark morning rhythm nominal.",
    status: "nominal",
  },
  {
    id: "m_02",
    time: "02:15 PM",
    period: "Afternoon Rest Window",
    title: "Quiet Reading Hour in Armchair",
    icon: BookOpen,
    observedSignal: "Zero kinetic transitions in hallway for 75 minutes. Reading chair ambient pressure active.",
    whatCannotBeKnown: "Whether she has fallen asleep deeply or is reading quietly.",
    contextSignificance: "This window is configured as her customary afternoon quiet time (13:30 – 15:30).",
    reasonableNextStep: "Maintain silent monitoring. Suppress false alarms during designated quiet hours.",
    status: "calm",
  },
  {
    id: "m_03",
    time: "05:10 PM",
    period: "Active Evening Window",
    title: "Missed Scheduled Kitchen Visit",
    icon: Clock,
    observedSignal: "No movement recorded since 04:00 PM. Customary evening tea preparation did not occur.",
    whatCannotBeKnown: "Whether she stepped out to chat with neighbor Mrs. Kulkarni or is unwell.",
    contextSignificance: "Gait transition usually occurs by 04:45 PM. The delay is anomalous.",
    reasonableNextStep: "Send gentle audio check-in prompt to living room console before alerting family.",
    status: "uncertainty",
  },
  {
    id: "m_04",
    time: "06:45 PM",
    period: "Alert Escalation State",
    title: "Kinetic Vector Anomaly & Zero Posture Change",
    icon: ShieldAlert,
    observedSignal: "Sharp 3.8g deceleration spike recorded near hallway threshold, followed by 180s stillness.",
    whatCannotBeKnown: "Whether she dropped her tablet or experienced a severe slip.",
    contextSignificance: "Floor pressure matches immobility posture immediately adjacent to bath threshold.",
    reasonableNextStep: "60-second living room grace period active. Notify primary caregiver Kavita Rao.",
    status: "triage",
  },
];

export function LifeHasARhythmSection() {
  const [selectedId, setSelectedId] = useState<string>("m_03");
  const selected = rhythmSlots.find((r) => r.id === selectedId) || rhythmSlots[2];

  return (
    <section className="py-24 md:py-32 border-t border-gx-border/40 relative overflow-hidden" id="rhythm">
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />
      <Container>
        <SectionHeader
          eyebrow="Routines & Context Engine"
          title="Not every signal is an emergency."
          titleAccent="Context changes everything."
          description="A prolonged silence during an afternoon nap is peaceful rest. The same silence during morning kitchen prep demands thoughtful inquiry. Explore how context transforms raw data into intelligent care."
        />

        <div className="mt-12 p-3 sm:p-4 rounded-2xl bg-[#091713] border border-gx-border flex flex-col md:flex-row items-center justify-between gap-3 shadow-panel">
          {rhythmSlots.map((slot) => {
            const Icon = slot.icon;
            const isSelected = slot.id === selectedId;
            return (
              <button
                key={slot.id}
                onClick={() => setSelectedId(slot.id)}
                className={`w-full md:w-auto flex-1 p-3.5 sm:p-4 rounded-xl text-left transition-all relative ${
                  isSelected
                    ? "bg-[#10271e] border border-gx-mint/40 shadow-sm"
                    : "bg-black/30 border border-transparent hover:border-gx-border"
                }`}
              >
                <div className="flex items-center justify-between text-xs font-mono mb-2">
                  <span className={isSelected ? "text-gx-citron font-bold" : "text-gx-mineral"}>
                    {slot.time}
                  </span>
                  <span
                    className={`text-[9px] uppercase px-1.5 py-0.5 rounded font-mono ${
                      slot.status === "nominal" || slot.status === "calm"
                        ? "bg-gx-carbon text-gx-citron border border-gx-citron/30"
                        : slot.status === "uncertainty"
                        ? "bg-gx-carbon text-gx-amber border border-gx-amber/40"
                        : "bg-gx-carbon text-gx-vermilion border border-gx-vermilion/40"
                    }`}
                  >
                    {slot.status}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon className={`w-4 h-4 shrink-0 ${isSelected ? "text-gx-citron" : "text-gx-mineral"}`} />
                  <span className={`font-display font-semibold text-xs truncate ${isSelected ? "text-gx-warmWhite" : "text-gx-mineral"}`}>
                    {slot.title}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          <div className="md:col-span-5 p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-gx-carbon to-gx-obsidian border border-gx-border flex flex-col justify-between text-left">
            <div>
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-gx-citron">{selected.period}</span>
                <span className="text-gx-mineral">{selected.time}</span>
              </div>
              <h4 className="font-display font-bold text-xl text-gx-warmWhite mt-3">{selected.title}</h4>

              <div className="mt-6 space-y-4">
                <div className="p-4 rounded-xl bg-gx-obsidian/70 border border-gx-border/60">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-gx-chalk block mb-1">
                    1. Observed Signal Telemetry
                  </span>
                  <p className="text-xs text-gx-warmWhite leading-relaxed">{selected.observedSignal}</p>
                </div>

                <div className="p-4 rounded-xl bg-gx-obsidian/70 border border-gx-border/60">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-gx-amber block mb-1">
                    2. What The Signal Cannot Prove
                  </span>
                  <p className="text-xs text-gx-mineral leading-relaxed">{selected.whatCannotBeKnown}</p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gx-border/40 text-[11px] font-mono text-gx-muted">
              Sample scenario data for research demonstration
            </div>
          </div>

          <div className="md:col-span-7 p-6 sm:p-8 rounded-3xl bg-gx-carbon border border-gx-border flex flex-col justify-between text-left space-y-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-gx-vermilion block mb-2 font-semibold">
                Why Contextual Awareness Changes Everything
              </span>
              <h4 className="font-display font-extrabold text-2xl text-gx-warmWhite">
                Context-Aware Triage Engine
              </h4>
              <p className="text-sm text-gx-mineral mt-2 leading-relaxed">{selected.contextSignificance}</p>
            </div>

            <div className="p-5 rounded-2xl bg-gx-obsidian border border-gx-citron/30 space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-wider text-gx-citron flex items-center gap-1.5 font-bold">
                <Sparkles className="w-3.5 h-3.5" /> Proposed GuardianX Response Protocol
              </span>
              <p className="text-sm font-display font-medium text-gx-warmWhite leading-snug">
                {selected.reasonableNextStep}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono text-gx-mineral pt-2 border-t border-gx-border/40">
              <div className="flex items-center gap-2">
                <CircleCheck className="w-4 h-4 text-gx-citron" />
                <span>Zero premature emergency dispatch</span>
              </div>
              <div className="flex items-center gap-2">
                <CircleCheck className="w-4 h-4 text-gx-citron" />
                <span>Local check-in grace period honored</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
