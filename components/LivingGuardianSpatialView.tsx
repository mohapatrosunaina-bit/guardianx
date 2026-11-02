"use client";

import React, { useState, useEffect } from "react";
import { Compass, Sun, Coffee, Moon, Eye, Activity } from "lucide-react";

interface RoomData {
  id: string;
  name: string;
  sqft: string;
  ambientStatus: string;
  lightLevel: string;
  lastPresence: string;
  sensorNodes: number;
  activityDescription: string;
  normalPattern: string;
}

const roomsData: Record<string, RoomData> = {
  living: {
    id: "living",
    name: "Living Room & Balcony",
    sqft: "280 sq ft",
    ambientStatus: "nominal",
    lightLevel: "Natural Morning Ambient · 420 lux",
    lastPresence: "Active 4m ago (Reading chair / Garden window)",
    sensorNodes: 3,
    activityDescription:
      "Gentle cadence around morning seating area. Thermal ambient readings and acoustic levels are within customary daytime bounds.",
    normalPattern:
      "Customary window: 08:00 – 12:30. Tea on balcony followed by newspaper reading.",
  },
  bedroom: {
    id: "bedroom",
    name: "Master Bedroom & En-Suite",
    sqft: "220 sq ft",
    ambientStatus: "quiet",
    lightLevel: "Soft Amber · Night Stand 60 lux",
    lastPresence: "Vacated at 07:15 AM (Wake transition)",
    sensorNodes: 2,
    activityDescription:
      "Resting cycle completed at 07:12 AM with standard postural rising acceleration. Zero acoustic or kinetic anomalies logged during nocturnal window.",
    normalPattern: "Customary sleep window: 22:30 – 07:00. Unbroken nominal sleep cadence.",
  },
  kitchen: {
    id: "kitchen",
    name: "Kitchen & Tea Station",
    sqft: "140 sq ft",
    ambientStatus: "expected_activity",
    lightLevel: "Task Ambient · 310 lux",
    lastPresence: "Transit at 07:18 AM (Kettle pressure pad)",
    sensorNodes: 3,
    activityDescription:
      "Morning tea ritual completed. Water flow telemetry and refrigerator contact switch logged nominal cadence.",
    normalPattern:
      "Expected visits: Morning (07:15-08:00), Afternoon (12:30-13:15), Evening (16:30-17:15).",
  },
  corridor: {
    id: "corridor",
    name: "Central Corridor & Threshold",
    sqft: "90 sq ft",
    ambientStatus: "nominal",
    lightLevel: "Low Ambient · 120 lux",
    lastPresence: "Transit 12m ago (Living to Bathroom path)",
    sensorNodes: 2,
    activityDescription:
      "Gait speed nominal at 0.92 m/s. Accelerometer vectors show steady balance without wall support reliance.",
    normalPattern:
      "Primary distribution corridor connecting bedroom, kitchen, and bathroom.",
  },
};

interface LivingGuardianSpatialViewProps {
  activeSimulatedEvent?: { room: string; type: string; title?: string } | null;
  interactive?: boolean;
}

export function LivingGuardianSpatialView({
  activeSimulatedEvent,
  interactive = true,
}: LivingGuardianSpatialViewProps) {
  const [activeRoom, setActiveRoom] = useState<string>("living");
  const [hoveredRoom, setHoveredRoom] = useState<string | null>(null);
  const [timeOfDay, setTimeOfDay] = useState<"morning" | "afternoon" | "night">("morning");
  const [pulseOffset, setPulseOffset] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulseOffset((prev) => (prev + 1) % 100);
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (activeSimulatedEvent?.room) {
      setActiveRoom(activeSimulatedEvent.room);
    }
  }, [activeSimulatedEvent]);

  const currentRoom = roomsData[activeRoom] || roomsData.living;

  return (
    <div className="relative w-full rounded-3xl bg-gx-obsidian border border-gx-border/80 overflow-hidden shadow-panel">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,rgba(198,91,61,0.08)_0%,rgba(34,34,31,0.95)_70%,#171715_100%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(233,225,210,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(233,225,210,0.02)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none opacity-50" />

      {/* Header bar */}
      <div className="relative z-10 px-5 py-4 border-b border-gx-border/50 flex flex-wrap items-center justify-between gap-3 bg-gx-carbon/90 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-gx-vermilion/20 to-gx-clay/10 border border-gx-vermilion/30 flex items-center justify-center text-gx-vermilion">
            <Compass className="w-4 h-4 animate-spin-slow" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-gx-chalk font-semibold">
                The Living Guardian
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-gx-carbon text-gx-citron border border-gx-citron/30">
                Spatial Architecture Layer
              </span>
            </div>
            <div className="text-[11px] text-gx-mineral">
              Conceptual Architectural Environment · Independent Residence Simulation
            </div>
          </div>
        </div>

        {/* Time of Day toggle */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-gx-obsidian border border-gx-border/60 text-xs font-mono">
          <button
            onClick={() => setTimeOfDay("morning")}
            className={`px-2.5 py-1 rounded-lg flex items-center gap-1.5 transition-all ${
              timeOfDay === "morning"
                ? "bg-gx-amber/20 text-gx-amber border border-gx-amber/40 font-bold"
                : "text-gx-mineral hover:text-gx-warmWhite"
            }`}
          >
            <Sun className="w-3.5 h-3.5 text-gx-amber" /> Morning Rhythm
          </button>
          <button
            onClick={() => setTimeOfDay("afternoon")}
            className={`px-2.5 py-1 rounded-lg flex items-center gap-1.5 transition-all ${
              timeOfDay === "afternoon"
                ? "bg-gx-amber/20 text-gx-amber border border-gx-amber/40 font-bold"
                : "text-gx-mineral hover:text-gx-warmWhite"
            }`}
          >
            <Coffee className="w-3.5 h-3.5 text-gx-citron" /> Afternoon Rest
          </button>
          <button
            onClick={() => setTimeOfDay("night")}
            className={`px-2.5 py-1 rounded-lg flex items-center gap-1.5 transition-all ${
              timeOfDay === "night"
                ? "bg-gx-amber/20 text-gx-amber border border-gx-amber/40 font-bold"
                : "text-gx-mineral hover:text-gx-warmWhite"
            }`}
          >
            <Moon className="w-3.5 h-3.5 text-gx-vermilion" /> Nocturnal Safety
          </button>
        </div>
      </div>

      {/* Main Grid: SVG + Telemetry sidebar */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 min-h-[460px] lg:min-h-[520px]">
        {/* Isometric SVG Canvas */}
        <div className="lg:col-span-8 p-4 sm:p-8 flex flex-col justify-between relative select-none">
          <div className="relative w-full h-[320px] sm:h-[400px] flex items-center justify-center">
            <svg
              viewBox="0 0 800 500"
              className="w-full h-full max-w-[720px] filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
            >
              <defs>
                <linearGradient id="wallGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#C65B3D" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#22221F" stopOpacity="0.1" />
                </linearGradient>
                <linearGradient id="livingFloor" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#39382F" />
                  <stop offset="100%" stopColor="#171715" />
                </linearGradient>
                <linearGradient id="bedroomFloor" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1F1F1C" />
                  <stop offset="100%" stopColor="#141412" />
                </linearGradient>
                <linearGradient id="kitchenFloor" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#21201D" />
                  <stop offset="100%" stopColor="#151513" />
                </linearGradient>
                <linearGradient id="corridorFloor" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1E1E1B" />
                  <stop offset="100%" stopColor="#131311" />
                </linearGradient>
                <radialGradient id="sunlightPool" cx="50%" cy="50%" r="50%">
                  <stop
                    offset="0%"
                    stopColor={timeOfDay === "morning" ? "#DDA85E" : timeOfDay === "afternoon" ? "#D4E45A" : "#6E7A94"}
                    stopOpacity={timeOfDay === "night" ? "0.12" : "0.28"}
                  />
                  <stop offset="100%" stopColor="#171715" stopOpacity="0" />
                </radialGradient>
                <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Base shadow ellipse */}
              <ellipse cx="400" cy="340" rx="340" ry="110" fill="rgba(0,0,0,0.65)" />

              {/* Bedroom Room Polygon */}
              <g
                onClick={() => setActiveRoom("bedroom")}
                onMouseEnter={() => setHoveredRoom("bedroom")}
                onMouseLeave={() => setHoveredRoom(null)}
                className="cursor-pointer transition-all duration-300"
              >
                <polygon
                  points="210,170 380,85 430,135 260,220"
                  fill="url(#bedroomFloor)"
                  stroke={activeRoom === "bedroom" ? "#E9E1D2" : "#39382F"}
                  strokeWidth={activeRoom === "bedroom" ? "2.5" : "1"}
                  strokeDasharray={activeRoom === "bedroom" ? "none" : "3,3"}
                  filter={activeRoom === "bedroom" ? "url(#softGlow)" : undefined}
                />
                <polyline
                  points="210,170 210,110 380,25 380,85"
                  fill="none"
                  stroke={activeRoom === "bedroom" ? "#C65B3D" : "#39382F"}
                  strokeWidth="1.5"
                />
                <polyline
                  points="380,25 430,75 430,135"
                  fill="none"
                  stroke={activeRoom === "bedroom" ? "#C65B3D" : "#39382F"}
                  strokeWidth="1"
                />
                <polygon points="260,160 330,125 365,160 295,195" fill="#2A2A26" stroke="#4E4D43" strokeWidth="1" />
                <ellipse cx="330" cy="145" rx="14" ry="7" fill="#39382F" />
                <circle cx="310" cy="160" r="45" fill="url(#sunlightPool)" pointerEvents="none" />
                <text x="270" y="130" fill="#77766E" fontSize="11" fontFamily="DM Mono">
                  BEDROOM
                </text>
              </g>

              {/* Kitchen Room Polygon */}
              <g
                onClick={() => setActiveRoom("kitchen")}
                onMouseEnter={() => setHoveredRoom("kitchen")}
                onMouseLeave={() => setHoveredRoom(null)}
                className="cursor-pointer transition-all duration-300"
              >
                <polygon
                  points="380,85 550,170 490,230 320,145"
                  fill="url(#kitchenFloor)"
                  stroke={activeRoom === "kitchen" ? "#E9E1D2" : "#39382F"}
                  strokeWidth={activeRoom === "kitchen" ? "2.5" : "1"}
                  strokeDasharray={activeRoom === "kitchen" ? "none" : "3,3"}
                  filter={activeRoom === "kitchen" ? "url(#softGlow)" : undefined}
                />
                <polyline
                  points="550,170 550,110 380,25"
                  fill="none"
                  stroke={activeRoom === "kitchen" ? "#C65B3D" : "#39382F"}
                  strokeWidth="1.5"
                />
                <polygon points="460,165 520,135 535,150 475,180" fill="#2A2A26" stroke="#4E4D43" strokeWidth="1" />
                <circle cx="430" cy="150" r="40" fill="url(#sunlightPool)" pointerEvents="none" />
                <text x="410" y="125" fill="#77766E" fontSize="11" fontFamily="DM Mono">
                  KITCHEN
                </text>
              </g>

              {/* Corridor Polygon */}
              <g
                onClick={() => setActiveRoom("corridor")}
                onMouseEnter={() => setHoveredRoom("corridor")}
                onMouseLeave={() => setHoveredRoom(null)}
                className="cursor-pointer transition-all duration-300"
              >
                <polygon
                  points="260,220 430,135 480,185 310,270"
                  fill="url(#corridorFloor)"
                  stroke={activeRoom === "corridor" ? "#E9E1D2" : "#39382F"}
                  strokeWidth={activeRoom === "corridor" ? "2.5" : "1"}
                  filter={activeRoom === "corridor" ? "url(#softGlow)" : undefined}
                />
                <text x="350" y="195" fill="#77766E" fontSize="10" fontFamily="DM Mono">
                  CORRIDOR
                </text>
              </g>

              {/* Living Room & Balcony Polygon */}
              <g
                onClick={() => setActiveRoom("living")}
                onMouseEnter={() => setHoveredRoom("living")}
                onMouseLeave={() => setHoveredRoom(null)}
                className="cursor-pointer transition-all duration-300"
              >
                <polygon
                  points="190,290 360,205 600,325 430,410"
                  fill="url(#livingFloor)"
                  stroke={activeRoom === "living" ? "#E9E1D2" : "#39382F"}
                  strokeWidth={activeRoom === "living" ? "3" : "1.2"}
                  filter={activeRoom === "living" ? "url(#softGlow)" : undefined}
                />
                <polyline
                  points="190,290 190,260 270,220 270,250"
                  fill="none"
                  stroke="#C65B3D"
                  strokeWidth="1.5"
                  strokeDasharray="4,2"
                />
                <polygon points="330,300 400,265 440,285 370,320" fill="#2A2A26" stroke="#4E4D43" strokeWidth="1" />
                <ellipse cx="385" cy="292" rx="18" ry="9" fill="#39382F" />
                <ellipse cx="280" cy="310" rx="16" ry="10" fill="#32312A" stroke="#C65B3D" strokeWidth="0.8" />
                <circle cx="360" cy="290" r="75" fill="url(#sunlightPool)" pointerEvents="none" />
                <text x="320" y="360" fill="#E9E1D2" fontSize="12" fontWeight="bold" fontFamily="DM Mono">
                  LIVING ROOM &amp; BALCONY
                </text>
              </g>

              {/* Kinetic Transition Path */}
              <g pointerEvents="none" opacity="0.85">
                <path
                  d="M 310,160 Q 360,180 370,200 T 430,160 T 360,220 T 370,290"
                  fill="none"
                  stroke="#D4E45A"
                  strokeWidth="2"
                  strokeDasharray="6,4"
                  strokeDashoffset={-pulseOffset}
                  opacity="0.85"
                />
                <circle cx="310" cy="160" r="4" fill="#D4E45A" className="animate-ping" opacity="0.3" />
                <circle cx="310" cy="160" r="3" fill="#D4E45A" />
                <circle cx="440" cy="155" r="4" fill="#D4E45A" className="animate-ping" opacity="0.3" />
                <circle cx="440" cy="155" r="3" fill="#D4E45A" />
                <circle cx="370" cy="200" r="4" fill="#D4E45A" className="animate-ping" opacity="0.3" />
                <circle cx="370" cy="200" r="3" fill="#D4E45A" />
                <circle cx="370" cy="290" r="5" fill="#D4E45A" className="animate-ping" opacity="0.5" />
                <circle cx="370" cy="290" r="3.5" fill="#F5F1E8" />
              </g>

              {/* Active Simulated Event Marker */}
              {activeSimulatedEvent && (
                <g pointerEvents="none">
                  <circle
                    cx={activeSimulatedEvent.room === "living" ? 370 : 310}
                    cy={activeSimulatedEvent.room === "living" ? 290 : 160}
                    r="28"
                    fill="none"
                    stroke="#C65B3D"
                    strokeWidth="2"
                    className="animate-ping"
                  />
                  <circle
                    cx={activeSimulatedEvent.room === "living" ? 370 : 310}
                    cy={activeSimulatedEvent.room === "living" ? 290 : 160}
                    r="8"
                    fill="#C65B3D"
                  />
                  <text
                    x={activeSimulatedEvent.room === "living" ? 410 : 350}
                    y={activeSimulatedEvent.room === "living" ? 295 : 165}
                    fill="#C65B3D"
                    fontSize="11"
                    fontFamily="DM Mono"
                    fontWeight="bold"
                  >
                    SIGNAL REVIEW CANDIDATE
                  </text>
                </g>
              )}
            </svg>
          </div>

          {/* Room quick select pills */}
          <div className="pt-3 border-t border-gx-border/40 flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
            <span className="text-gx-muted flex items-center gap-1.5">
              <Eye className="w-3.5 h-3.5 text-gx-mint" /> Tap a room to explore its ambient rhythm
            </span>
            <div className="flex gap-1.5">
              {["living", "bedroom", "kitchen", "corridor"].map((r) => (
                <button
                  key={r}
                  onClick={() => setActiveRoom(r)}
                  className={`px-3 py-1 rounded-lg capitalize transition-all ${
                    activeRoom === r
                      ? "bg-gx-vermilion text-gx-warmWhite font-bold shadow-sm"
                      : "bg-gx-carbon text-gx-mineral hover:text-gx-warmWhite border border-gx-border/60"
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Spatial Node Telemetry Sidebar */}
        <div className="lg:col-span-4 p-5 sm:p-6 bg-gx-carbon/90 border-t lg:border-t-0 lg:border-l border-gx-border/60 flex flex-col justify-between text-left space-y-4">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono uppercase tracking-widest text-gx-chalk px-2 py-0.5 rounded bg-gx-carbon border border-gx-chalk/20">
                Spatial Node Inspection
              </span>
              <span className="text-xs font-mono text-gx-mineral">{currentRoom.sqft}</span>
            </div>
            <h4 className="font-display font-extrabold text-xl text-gx-warmWhite mt-2.5">
              {currentRoom.name}
            </h4>
            <p className="text-xs text-gx-mineral mt-1 leading-relaxed">
              {currentRoom.activityDescription}
            </p>
          </div>

          <div className="space-y-2.5">
            <div className="p-3 rounded-xl bg-gx-obsidian/70 border border-gx-border/60 text-xs">
              <div className="text-[10px] font-mono uppercase text-gx-mineral">
                Customary Daily Rhythm
              </div>
              <div className="text-gx-warmWhite font-medium mt-1 leading-snug">
                {currentRoom.normalPattern}
              </div>
            </div>

            <div className="p-3 rounded-xl bg-gx-obsidian/70 border border-gx-border/60 text-xs flex items-center justify-between">
              <div>
                <div className="text-[10px] font-mono uppercase text-gx-mineral">
                  Light &amp; Ambient Illumination
                </div>
                <div className="text-gx-amber font-mono mt-0.5">{currentRoom.lightLevel}</div>
              </div>
              <Sun className="w-4 h-4 text-gx-amber" />
            </div>

            <div className="p-3 rounded-xl bg-gx-obsidian/70 border border-gx-border/60 text-xs flex items-center justify-between">
              <div>
                <div className="text-[10px] font-mono uppercase text-gx-mineral">
                  Room Presence Telemetry
                </div>
                <div className="text-gx-chalk font-mono mt-0.5">{currentRoom.lastPresence}</div>
              </div>
              <Activity className="w-4 h-4 text-gx-citron" />
            </div>
          </div>

          <div className="pt-3 border-t border-gx-border/40 text-[11px] font-mono text-gx-mineral leading-normal">
            <span className="text-gx-mint font-semibold">Concept Disclosure:</span>{" "}
            Architectural model presents a spatial visualization of environmental telemetry. GuardianX
            does not employ optical surveillance in private living spaces.
          </div>
        </div>
      </div>
    </div>
  );
}
