"use client";

import { motion } from "framer-motion";
import { containerClass, SectionHeader } from "@/components/ui/UI";

/* ── data ── */
const INPUTS = [
  {
    num: "Input 01 — Society",
    heading: "Family Culture & Society",
    body: "Village collapse · Digital overload · Academic pressure · Nuclear family rise — we observed it all.",
  },
  {
    num: "Input 02 — Research",
    heading: "Global Science",
    body: "WHO · UNICEF · OECD · Edgar Dale's Cone of Learning · Handbook of Child Psychology",
  },
  {
    num: "Input 03 — Experts",
    heading: "Expert Collaboration",
    body: "Dr. Nandita Babu (Delhi Univ.) · Dr. Naina Athalye (Pune Univ.) · 100 person-months of content",
  },
  {
    num: "Input 04 — Families",
    heading: "Primary Research",
    body: "1,000+ parent & teen surveys · Prototype feedback · Institutional validation",
  },
];

const OUTPUTS = [
  {
    num: "Output 01",
    heading: "Milestone-Based Family Journey",
    body: "20+ cosmic milestones across the year — each unlocking guided deeds that fuel your family's growth together.",
  },
  {
    num: "Output 02",
    heading: "20-Minute Daily Deeds",
    body: "Age-wise structured content by psychologists. Offline, screen-free, real-world activities — every single day.",
  },
  {
    num: "Output 03",
    heading: "Reactive → Intentional Parenting",
    body: "A structured, joyful, purposeful family rhythm. No prep. No expertise needed. Both child and caregiver grow.",
  },
];

const DEFENSE = [
  {
    icon: "🎮",
    heading: "Gamification Drives Daily Compliance",
    body: "Points, milestone tiers & rewards keep families returning until the habit becomes intrinsic.",
  },
  {
    icon: "🤖",
    heading: "AI Family Assistant",
    body: "Phase 1: Expert answers. Phase 2: Journey guidance. Phase 3: Personalised family intelligence.",
  },
  {
    icon: "👨‍👩‍👧",
    heading: "The Only Platform Where Both Grow",
    body: "Child builds EQ, CQ, AQ, SQ. Caregiver builds awareness, patience & confidence simultaneously.",
  },
];

/* ── keyframe styles injected once ── */
const KEYFRAMES = `
@keyframes engineSpin {
  from { transform: translate(-50%, -50%) rotate(0deg); }
  to   { transform: translate(-50%, -50%) rotate(360deg); }
}
@keyframes enginePulse {
  0%,100% { box-shadow: 0 0 25px rgba(249,115,22,.5), 0 0 50px rgba(249,115,22,.15); }
  50%     { box-shadow: 0 0 45px rgba(249,115,22,.9), 0 0 80px rgba(249,115,22,.3); }
}
@keyframes engineSpinRev {
  from { transform: translate(-50%, -50%) rotate(0deg); }
  to   { transform: translate(-50%, -50%) rotate(-360deg); }
}
@keyframes arrowPulse {
  0%,100% { opacity:.4; transform:translateY(0); }
  50%     { opacity:1;  transform:translateY(3px); }
}
`;

export default function Solution() {
  return (
    <section
      id="solution"
      className="py-[100px] relative z-[1]"
      style={{ background: "#0a0e1f" }}
    >
      <style>{KEYFRAMES}</style>

      <div className={containerClass}>

        {/* .section-header.reveal */}
        <SectionHeader
          tag="The Solution"
          heading="How UltiMate Works"
          sub="Society's challenges + Global research + Expert collaboration, processed through the UltiMate engine, delivering a complete Family Operating System."
        />

        {/* .solution-layout.reveal — 3-col: inputs | engine | outputs */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 items-center mt-12">

          {/* ── LEFT: INPUTS ── */}
          <div className="flex flex-col gap-5">
            {/* "WHAT WE PUT IN" label */}
            <div
              className="text-[0.72rem] font-bold tracking-[0.1em] uppercase text-[#60a5fa]"
              style={{ fontFamily: "'Rubik', sans-serif" }}
            >
              WHAT WE PUT IN
            </div>

            {INPUTS.map((card, i) => (
              <motion.div
                key={card.num}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                /* .input-card */
                className="bg-[#04060f] border border-white/[0.08] rounded-[14px] px-5 py-4 transition-all duration-300 hover:translate-x-1 hover:border-[#60a5fa]"
                style={{ borderRight: "3px solid rgba(59,130,246,0.4)" }}
              >
                {/* .input-num */}
                <div
                  className="text-[0.68rem] font-bold tracking-[0.08em] uppercase text-[#60a5fa] mb-1"
                  style={{ fontFamily: "'Rubik', sans-serif" }}
                >
                  {card.num}
                </div>
                <h4 className="text-white font-bold text-[0.9rem] mb-1">{card.heading}</h4>
                <p className="text-[#9ca3af] text-[0.78rem] leading-[1.5] font-light">{card.body}</p>
              </motion.div>
            ))}
          </div>

          {/* ── CENTRE: ENGINE ── */}
          <div className="flex flex-col items-center gap-6 px-4">
            {/* "ENGINE" label */}
            <div
              className="text-[0.72rem] font-bold tracking-[0.08em] uppercase text-[#9ca3af] text-center"
              style={{ fontFamily: "'Rubik', sans-serif" }}
            >
              ENGINE
            </div>

            {/* .engine-wrap */}
            <div className="relative w-[160px] h-[160px] flex items-center justify-center">
              {/* .engine-ring-1 — spins 8s, has orbit dot */}
              <div
                className="absolute rounded-full border border-[rgba(249,115,22,0.25)]"
                style={{
                  width: 160, height: 160,
                  top: "50%", left: "50%",
                  animation: "engineSpin 8s linear infinite",
                }}
              >
                {/* .engine-orbit-dot — pinned at top-center of ring-1 */}
                <div
                  className="absolute w-[10px] h-[10px] rounded-full bg-[#f97316]"
                  style={{
                    top: 0, left: "50%",
                    transform: "translate(-50%, -50%)",
                    boxShadow: "0 0 8px #f97316",
                  }}
                />
              </div>

              {/* .engine-ring-2 — reverse 5s */}
              <div
                className="absolute rounded-full border border-[rgba(249,115,22,0.4)]"
                style={{
                  width: 120, height: 120,
                  top: "50%", left: "50%",
                  animation: "engineSpinRev 5s linear infinite",
                }}
              />

              {/* .engine-core */}
              <div
                className="relative z-[2] w-[80px] h-[80px] rounded-full flex items-center justify-center text-[1.5rem]"
                style={{
                  background: "radial-gradient(circle at 40% 35%, #f97316, #c2530a, #7c2d12)",
                  animation: "enginePulse 2s ease-in-out infinite",
                }}
              >
                ⚙️
              </div>
            </div>

            {/* .engine-label */}
            <div className="text-center">
              <h3
                className="text-white font-black text-[1.1rem] tracking-[-0.01em]"
                style={{ fontFamily: "'Rubik', sans-serif" }}
              >
                UltiMate
              </h3>
              <p className="text-[#9ca3af] text-[0.72rem] font-light">Family Operating System</p>
            </div>

            {/* .engine-pillars */}
            <div className="flex flex-col gap-1.5 w-full">
              {/* .eq-pill */}
              <div
                className="flex items-center justify-center gap-1.5 py-0.5 text-[0.72rem] font-bold tracking-[0.04em]"
                style={{ fontFamily: "'Rubik', sans-serif" }}
              >
                {["EQ", "CQ", "AQ", "SQ"].map((q) => (
                  <span
                    key={q}
                    className="px-2 py-0.5 rounded text-[#f97316]"
                    style={{
                      background: "rgba(249,115,22,0.12)",
                      border: "1px solid rgba(249,115,22,0.2)",
                    }}
                  >
                    {q}
                  </span>
                ))}
              </div>
              <div className="text-center text-[0.72rem] text-[#9ca3af] font-light">
                4 pillars of every child
              </div>
            </div>

            {/* flow arrow */}
            <div className="flex flex-col items-center gap-1">
              <div
                className="text-[1rem] text-[#f97316]"
                style={{ animation: "arrowPulse 1.5s ease-in-out infinite" }}
              >
                ▼
              </div>
              <div className="text-[0.7rem] text-[#9ca3af] font-light text-center">
                Processes & delivers
              </div>
            </div>
          </div>

          {/* ── RIGHT: OUTPUTS ── */}
          <div className="flex flex-col gap-5">
            {/* "WHAT YOU GET" label */}
            <div
              className="text-[0.72rem] font-bold tracking-[0.1em] uppercase text-[#f97316]"
              style={{ fontFamily: "'Rubik', sans-serif" }}
            >
              WHAT YOU GET
            </div>

            {OUTPUTS.map((card, i) => (
              <motion.div
                key={card.num}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                /* .output-card */
                className="bg-[#04060f] border border-white/[0.08] rounded-[14px] px-5 py-4 transition-all duration-300 hover:-translate-x-1 hover:border-[#f97316]"
                style={{ borderLeft: "3px solid rgba(249,115,22,0.4)" }}
              >
                {/* .output-num */}
                <div
                  className="text-[0.68rem] font-bold tracking-[0.08em] uppercase text-[#f97316] mb-1"
                  style={{ fontFamily: "'Rubik', sans-serif" }}
                >
                  {card.num}
                </div>
                <h4 className="text-white font-bold text-[0.9rem] mb-1">{card.heading}</h4>
                <p className="text-[#9ca3af] text-[0.78rem] leading-[1.5] font-light">{card.body}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── DEFENSIBILITY ROW .solution-defense.reveal ── */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-5">
          {DEFENSE.map((card, i) => (
            <motion.div
              key={card.heading}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              /* .defense-card */
              className="bg-[#04060f] border border-white/[0.08] rounded-[14px] p-5 text-center transition-all duration-300 hover:border-[rgba(20,184,166,0.3)]"
            >
              <div className="text-[2.4rem] mb-2">{card.icon}</div>
              <h4 className="text-white font-bold text-[0.85rem] mb-1">{card.heading}</h4>
              <p className="text-[#9ca3af] text-[0.78rem] leading-[1.5] font-light">{card.body}</p>
            </motion.div>
          ))}
        </div>

        {/* ── .solution-quote.reveal ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 text-center text-[0.95rem] text-[#9ca3af] italic px-6 py-6 rounded-[14px]"
          style={{
            border: "1px solid rgba(255,255,255,0.08)",
            background: "rgba(249,115,22,0.03)",
          }}
        >
          &quot;Ordinary moments. Extraordinary family.&quot; —{" "}
          <strong className="text-[#f97316] not-italic">
            Where research meets real life, one intentional moment at a time.
          </strong>
        </motion.div>

      </div>
    </section>
  );
}