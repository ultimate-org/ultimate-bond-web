"use client";

import { motion } from "framer-motion";
import { containerClass } from "@/components/ui/UI";

/* ── data ── */
const INSIGHTS = [
  {
    strong: "Daily Signals",
    body: " — curated news, research findings and trends in child development, delivered fresh each morning",
  },
  {
    strong: "Actionable Nudges",
    body: " — not just information, but a specific action you can take with your child today",
  },
  {
    strong: "Age-Matched Intelligence",
    body: " — insights filtered for your child's exact age and milestone stage",
  },
  {
    strong: "Caregiver-Specific Guidance",
    body: " — separate signals for what you as a parent need to know this week",
  },
];

const CARDS = [
  {
    label: "Screen Behaviour Signal",
    head: "Research: Evening screen use disrupts sleep in 7–9 year olds",
    body: "Children using devices after 7pm show 34% more sleep disruption, affecting next-day emotional regulation and school performance.",
    action: "Today's action: Device-free dinner + 10-min story tonight",
  },
  {
    label: "Caregiver Growth Signal",
    head: "This week's virtue: Active Listening — the skill that keeps your child talking at 15",
    body: "Parents who practice reflective listening report 3× more open conversations with teenagers.",
    action: 'Try WonderChat: "What was the best and hardest part of your day?"',
  },
];

export default function ParentingPulse() {
  return (
    <section id="radar" className="py-[100px] relative z-[1]">
      <div className={containerClass}>

        {/* .radar-grid — 2-col lg */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mt-10">

          {/* ── LEFT: copy + insights ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45 }}
          >
            {/* .section-tag */}
            <span
              className="inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 mb-3 text-[0.75rem] font-bold tracking-[0.06em] uppercase text-[#f97316]"
              style={{
                background: "rgba(249,115,22,0.1)",
                border: "1px solid rgba(249,115,22,0.25)",
                fontFamily: "'Rubik', sans-serif",
              }}
            >
              Parenting Pulse
            </span>

            {/* .radar-tag-top */}
            <div
              className="text-[0.72rem] tracking-[0.1em] uppercase text-[#2dd4bf] font-bold mb-2"
              style={{ fontFamily: "'Rubik', sans-serif" }}
            >
              DAILY INTELLIGENCE FEED
            </div>

            {/* .radar-title */}
            <h2
              className="text-white font-black text-[1.5rem] leading-[1.25] mb-3"
              style={{ fontFamily: "'Rubik', sans-serif" }}
            >
              Your Daily Parenting
              <br />
              Intelligence Layer
            </h2>

            {/* .radar-desc */}
            <p className="text-[#9ca3af] text-[0.9rem] leading-[1.7] font-light mb-6">
              Every morning, Parenting Pulse scans what&apos;s happening in the world of family,
              parenting and child development — and delivers specific, actionable insights
              tailored to your journey. Not generic advice. Timely signals that matter right now.
            </p>

            {/* .radar-insight × 4 */}
            {INSIGHTS.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 py-3.5 border-b border-white/[0.07] last:border-b-0 text-[0.85rem]"
              >
                {/* .ri-dot */}
                <div
                  className="w-2 h-2 rounded-full flex-shrink-0 mt-[5px] bg-[#2dd4bf]"
                  style={{ boxShadow: "0 0 8px rgba(20,184,166,0.6)" }}
                />

                {/* .ri-text */}
                <span className="text-[#9ca3af] leading-[1.55] font-light">
                  <strong className="text-white font-medium">{item.strong}</strong>
                  {item.body}
                </span>
              </div>
            ))}
          </motion.div>

          {/* ── RIGHT: mock + cards ── */}
          <div>
            {/* .radar-mock */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="rounded-2xl p-[1.4rem] mb-6"
              style={{
                background: "#0a0e1f",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {/* .rc-label */}
              <div
                className="text-[0.7rem] tracking-[0.08em] uppercase text-[#2dd4bf] font-bold mb-1.5"
                style={{ fontFamily: "'Rubik', sans-serif" }}
              >
                📡 Today&apos;s Parenting Pulse
              </div>
              <div className="text-[0.85rem] font-semibold mb-1">
                3 signals · Age 7 · Milestone: Explorer
              </div>
              <div className="text-[0.78rem] text-[#9ca3af]">Fresh intelligence ready</div>
            </motion.div>

            {/* .radar-card × 2 */}
            {CARDS.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: i * 0.12 }}
                /* .radar-card */
                className="rounded-2xl p-[1.4rem] mb-4 last:mb-0 transition-all duration-300 hover:border-[rgba(249,115,22,0.4)]"
                style={{
                  background: "#0a0e1f",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderLeft: "3px solid #2dd4bf",
                }}
              >
                {/* .rc-label */}
                <div
                  className="text-[0.7rem] tracking-[0.08em] uppercase text-[#2dd4bf] font-bold mb-1.5"
                  style={{ fontFamily: "'Rubik', sans-serif" }}
                >
                  {card.label}
                </div>

                {/* .rc-head */}
                <div className="text-white font-bold text-[0.95rem] mb-1.5">{card.head}</div>

                {/* .rc-body */}
                <div className="text-[#9ca3af] text-[0.82rem] leading-[1.55] font-light">
                  {card.body}
                </div>

                {/* .rc-action */}
                <div className="mt-2.5 text-[0.78rem] text-[#f97316] font-semibold flex items-center gap-1.5">
                  <span>→</span>
                  {card.action}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}