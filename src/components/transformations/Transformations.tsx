"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { containerClass } from "@/components/ui/UI";

/* ── Types ── */
type BeforeAfter = { before: string; after: string };
type TimelineItem = {
  emoji: string;
  phase: string;
  phaseColor: string;
  dotGradient: string;
  dotShadow: string;
  heading: string;
  desc: string;
  beforeAfter?: BeforeAfter;
  tags?: string[];
};

/* ── Data ── */
const PARENT_JOURNEY: TimelineItem[] = [
  {
    emoji: "😤",
    phase: "Week 0 — Before UltiMate",
    phaseColor: "#f87171",
    dotGradient: "linear-gradient(135deg,#7f1d1d,#991b1b)",
    dotShadow: "0 0 20px rgba(239,68,68,0.2)",
    heading: "Reacting, Not Responding",
    desc: "You love your child deeply — but in the chaos of daily life, you catch yourself yelling before thinking, giving in to screens for peace, and wondering if you're doing enough beyond academics.",
    beforeAfter: {
      before: '"Stop crying!" — said before understanding why.',
      after: '"You seem upset. Can you tell me what happened?"',
    },
  },
  {
    emoji: "🔍",
    phase: "Week 2 — Awareness Awakens",
    phaseColor: "#fbbf24",
    dotGradient: "linear-gradient(135deg,#78350f,#92400e)",
    dotShadow: "0 0 20px rgba(245,158,11,0.2)",
    heading: "Seeing Patterns You Missed",
    desc: "Know Your Child (KYC) insights start revealing why your child acts the way they do. You begin recognising triggers — theirs and yours. The daily WonderChat prompts give you something real to talk about beyond \"How was school?\"",
    tags: ["KYC Insights", "WonderChat", "Parenting Pulse"],
  },
  {
    emoji: "🧘",
    phase: "Month 2 — The Shift",
    phaseColor: "#60a5fa",
    dotGradient: "linear-gradient(135deg,#1e3a5f,#1e40af)",
    dotShadow: "0 0 20px rgba(96,165,250,0.2)",
    heading: "From Reactive to Intentional",
    desc: "The Parenting Virtues Workshop builds patience, empathy, and active listening — one week at a time. You stop fixing and start listening. Your child notices. Conversations get longer. Eye contact returns.",
    beforeAfter: {
      before: "Lecturing for 10 minutes after every mistake.",
      after: "Asking one question and letting them reflect.",
    },
    tags: ["Parenting Virtues Workshop", "Challenges"],
  },
  {
    emoji: "💡",
    phase: "Month 4 — Confidence Builds",
    phaseColor: "#34d399",
    dotGradient: "linear-gradient(135deg,#064e3b,#065f46)",
    dotShadow: "0 0 20px rgba(52,211,153,0.2)",
    heading: "You Know What You're Doing — and It Shows",
    desc: 'You no longer second-guess every parenting decision. You have a framework. Daily deeds feel natural. Other parents start asking, "What changed? Your child seems so different." You smile — because you changed first.',
    tags: ["Milestone Tracking", "StrengthFinder"],
  },
  {
    emoji: "🌟",
    phase: "Month 8+ — The New Normal",
    phaseColor: "#a78bfa",
    dotGradient: "linear-gradient(135deg,#4c1d95,#5b21b6)",
    dotShadow: "0 0 20px rgba(167,139,250,0.2)",
    heading: "Parenting With Purpose, Not Pressure",
    desc: "You've crossed multiple milestones. You and your child have inside jokes from WonderChat. You notice emotional shifts before they escalate. Parenting isn't perfect — but it's intentional, connected, and deeply fulfilling.",
    beforeAfter: {
      before: '"Am I doing enough for my child?"',
      after: '"We\'re growing together — and I can see it."',
    },
  },
];

const CHILD_JOURNEY: TimelineItem[] = [
  {
    emoji: "😶",
    phase: "Week 0 — Before UltiMate",
    phaseColor: "#f87171",
    dotGradient: "linear-gradient(135deg,#7f1d1d,#991b1b)",
    dotShadow: "0 0 20px rgba(239,68,68,0.2)",
    heading: "Quiet, Guarded, Screen-First",
    desc: 'Your child retreats to screens after school. Answers everything with "fine" or "nothing." Struggles to handle losing, sharing, or waiting. Emotional vocabulary is limited. Life skills — empathy, problem-solving, resilience — aren\'t being built anywhere.',
    beforeAfter: {
      before: "Throws a tantrum when things don't go their way.",
      after: '"I\'m frustrated, but can I try again?"',
    },
  },
  {
    emoji: "🎧",
    phase: "Week 2 — Curiosity Returns",
    phaseColor: "#fbbf24",
    dotGradient: "linear-gradient(135deg,#78350f,#92400e)",
    dotShadow: "0 0 20px rgba(245,158,11,0.2)",
    heading: 'Stories, Activities, and "Can We Do More?"',
    desc: "Audio stories spark imagination. Offline life skill activities replace some screen time — not forcefully, but because they're genuinely fun. Your child starts asking questions they never asked before. Curiosity replaces passivity.",
    tags: ["1000+ Audio Stories", "1500+ Life Skill Activities", "Habit-Up"],
  },
  {
    emoji: "💬",
    phase: "Month 2 — Opening Up",
    phaseColor: "#60a5fa",
    dotGradient: "linear-gradient(135deg,#1e3a5f,#1e40af)",
    dotShadow: "0 0 20px rgba(96,165,250,0.2)",
    heading: "Naming Emotions. Starting Conversations.",
    desc: 'Your child can now say "I feel left out" instead of slamming a door. WonderChat conversations teach them that talking to you is safe. They start sharing things — small at first, then bigger. The wall comes down, brick by brick.',
    beforeAfter: {
      before: '"Nothing happened." (hides being bullied)',
      after: '"Something happened at school. Can I tell you?"',
    },
    tags: ["WonderChat", "Challenges"],
  },
  {
    emoji: "🛠️",
    phase: "Month 4 — Life Skills Emerge",
    phaseColor: "#34d399",
    dotGradient: "linear-gradient(135deg,#064e3b,#065f46)",
    dotShadow: "0 0 20px rgba(52,211,153,0.2)",
    heading: "Problem-Solving, Leading, Deciding",
    desc: "Case studies build critical thinking. Offline challenges teach resilience through real experience — not lectures. Your child starts solving conflicts with siblings and friends on their own. They make small decisions confidently. Teachers notice the change.",
    tags: ["Case Studies", "Create Task", "Read-O-Meter", "Shlok & Mudra"],
  },
  {
    emoji: "🚀",
    phase: "Month 8+ — Ready for the Real World",
    phaseColor: "#a78bfa",
    dotGradient: "linear-gradient(135deg,#4c1d95,#5b21b6)",
    dotShadow: "0 0 20px rgba(167,139,250,0.2)",
    heading: "Emotionally Intelligent. Culturally Rooted. Future-Ready.",
    desc: "Your child handles setbacks without falling apart. Speaks up in groups. Respects others while standing their ground. They have EQ, resilience, and life skills that no tuition class could have taught — and they built it all through experiences, not textbooks.",
    beforeAfter: {
      before: "Couldn't handle losing a board game.",
      after: "Leads a group project and handles disagreements calmly.",
    },
  },
];

const FAMILY_JOURNEY: TimelineItem[] = [
  {
    emoji: "🏚️",
    phase: "Week 0 — Before UltiMate",
    phaseColor: "#f87171",
    dotGradient: "linear-gradient(135deg,#7f1d1d,#991b1b)",
    dotShadow: "0 0 20px rgba(239,68,68,0.2)",
    heading: "Same Roof, Different Worlds",
    desc: "Everyone's home — but no one's really present. Evenings are a cycle of homework, screens, and \"eat your food.\" Weekends disappear without a single meaningful interaction. You're a family by structure, not by connection.",
    beforeAfter: {
      before: "Dinner = TV on, phones out, silence between bites.",
      after: "Dinner = today's WonderChat question sparks a 10-minute conversation.",
    },
  },
  {
    emoji: "⚡",
    phase: "Week 2 — A Rhythm Appears",
    phaseColor: "#fbbf24",
    dotGradient: "linear-gradient(135deg,#78350f,#92400e)",
    dotShadow: "0 0 20px rgba(245,158,11,0.2)",
    heading: "10 Minutes That Change the Texture of a Day",
    desc: "A daily 10-minute deed becomes the anchor. One story together. One activity. One conversation. It's small — but it's consistent. And consistency is where bonds are built. The gamified milestone journey keeps everyone showing up.",
    tags: ["Daily Deeds", "Points & Rewards", "Milestone Journey"],
  },
  {
    emoji: "🤝",
    phase: "Month 2 — Shared Language",
    phaseColor: "#60a5fa",
    dotGradient: "linear-gradient(135deg,#1e3a5f,#1e40af)",
    dotShadow: "0 0 20px rgba(96,165,250,0.2)",
    heading: "Inside Jokes, Shared Rituals, Real Talk",
    desc: "You now have a shared vocabulary. Your child references a story you listened to together. You both laugh about a challenge that went hilariously wrong. A family culture is forming — one built on presence, not just proximity.",
    beforeAfter: {
      before: '"We never do anything together."',
      after: '"Remember when we tried that challenge and Dad burned the toast?"',
    },
  },
  {
    emoji: "🌿",
    phase: "Month 4 — Trust Deepens",
    phaseColor: "#34d399",
    dotGradient: "linear-gradient(135deg,#064e3b,#065f46)",
    dotShadow: "0 0 20px rgba(52,211,153,0.2)",
    heading: "Conflict Becomes Conversation",
    desc: "Arguments still happen — but they resolve faster. Your child comes to you first, not last. Siblings manage small fights on their own. The household emotional temperature drops. There's more laughter, less shouting.",
    tags: ["KYC", "Parenting Virtues", "Portfolio"],
  },
  {
    emoji: "✨",
    phase: "Month 8+ — Extraordinary, Ordinary",
    phaseColor: "#a78bfa",
    dotGradient: "linear-gradient(135deg,#4c1d95,#5b21b6)",
    dotShadow: "0 0 20px rgba(167,139,250,0.2)",
    heading: "A Family That Grows — Together, On Purpose",
    desc: "No single dramatic moment changed everything. It was hundreds of small deeds — a story here, a question there, a challenge that made everyone laugh. You're not a perfect family. You're an intentional one. And your child will carry this foundation forever.",
    beforeAfter: {
      before: "A family wondering if they're drifting apart.",
      after: "A family that knows exactly how to come together.",
    },
  },
];

const TABS = [
  { id: "parent", label: "As a Parent", icon: "🧭", data: PARENT_JOURNEY },
  { id: "child",  label: "Your Child",  icon: "🌱", data: CHILD_JOURNEY  },
  { id: "family", label: "Your Family", icon: "🏠", data: FAMILY_JOURNEY },
];

/* ── Sub-components ── */
function TimelineItemCard({ item, index }: { item: TimelineItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
      className="flex items-start gap-6 pb-12 last:pb-0"
    >
      {/* dot */}
      <div
        className="w-14 h-14 min-w-[56px] rounded-full flex items-center justify-center text-[22px] relative z-[2] flex-shrink-0"
        style={{ background: item.dotGradient, boxShadow: item.dotShadow }}
      >
        {item.emoji}
      </div>

      {/* card */}
      <div
        className="flex-1 rounded-[16px] p-7 transition-all duration-300 hover:translate-x-1"
        style={{
          background: "#111627",
          border: "1px solid rgba(148,163,184,0.08)",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLDivElement).style.background = "#161D35";
          (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(148,163,184,0.15)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLDivElement).style.background = "#111627";
          (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(148,163,184,0.08)";
        }}
      >
        {/* phase */}
        <div
          className="text-[11px] uppercase tracking-[2px] font-bold mb-1.5"
          style={{ color: item.phaseColor }}
        >
          {item.phase}
        </div>

        {/* heading */}
        <h3
          className="text-white font-black text-[1.2rem] leading-[1.3] mb-2.5"
          style={{ fontFamily: "'Rubik', sans-serif" }}
        >
          {item.heading}
        </h3>

        {/* desc */}
        <p className="text-[#94A3B8] text-[0.9rem] leading-[1.7] mb-0">
          {item.desc}
        </p>

        {/* before/after */}
        {item.beforeAfter && (
          <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] gap-3 items-center mt-4">
            <div
              className="p-3.5 rounded-[10px] text-[13.5px] leading-[1.55] font-medium"
              style={{
                background: "rgba(239,68,68,0.06)",
                border: "1px solid rgba(239,68,68,0.12)",
                color: "#fca5a5",
              }}
            >
              <span className="block text-[10px] uppercase tracking-[1.5px] font-bold text-[#f87171] mb-1.5">
                Today
              </span>
              {item.beforeAfter.before}
            </div>

            <div className="text-[#64748B] text-[18px] opacity-50 text-center sm:text-left">→</div>

            <div
              className="p-3.5 rounded-[10px] text-[13.5px] leading-[1.55] font-medium"
              style={{
                background: "rgba(52,211,153,0.06)",
                border: "1px solid rgba(52,211,153,0.12)",
                color: "#6ee7b7",
              }}
            >
              <span className="block text-[10px] uppercase tracking-[1.5px] font-bold text-[#34d399] mb-1.5">
                After UltiMate
              </span>
              {item.beforeAfter.after}
            </div>
          </div>
        )}

        {/* tags */}
        {item.tags && item.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-3.5">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] px-2.5 py-1 rounded-full font-semibold tracking-[0.3px]"
                style={{
                  background: "rgba(249,115,22,0.08)",
                  border: "1px solid rgba(249,115,22,0.15)",
                  color: "#F97316",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

/* ── Main Component ── */
export default function TransformationJourney() {
  const [activeTab, setActiveTab] = useState("parent");
  const activeData = TABS.find((t) => t.id === activeTab)!.data;

  return (
    <section className="py-[100px] relative z-[1] bg-[#0B0E1A]">
      <div className={containerClass}>

        {/* header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-[72px]"
        >
          <div
            className="text-[12px] uppercase tracking-[3px] font-bold text-[#F97316] mb-4"
          >
            The Transformation
          </div>

          <h2
            className="text-white font-black leading-[1.15] mb-4"
            style={{
              fontSize: "clamp(32px, 5vw, 52px)",
              fontFamily: "'Rubik', sans-serif",
            }}
          >
            Where Your Family Is Today —
            <br />
            And Where{" "}
            <em className="not-italic text-[#FBBF24]">UltiMate</em>{" "}
            Takes You
          </h2>

          <p className="text-[#94A3B8] text-[1.05rem] max-w-[640px] mx-auto leading-[1.7]">
            This isn&apos;t a course you finish. It&apos;s a shift that unfolds — week by week, deed by deed
            — across your child, you as a parent, and your family as a whole.
          </p>
        </motion.div>

        {/* tab bar */}
        <div className="flex justify-center gap-2 mb-14 flex-wrap">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="relative px-7 py-3 rounded-full text-[15px] font-semibold transition-all duration-300 overflow-hidden"
              style={{
                background: activeTab === tab.id ? "transparent" : "#111627",
                border: `1px solid ${activeTab === tab.id ? "transparent" : "rgba(148,163,184,0.08)"}`,
                color: activeTab === tab.id ? "#F1F5F9" : "#94A3B8",
                boxShadow: activeTab === tab.id ? "0 0 24px rgba(249,115,22,0.1)" : "none",
              }}
            >
              {/* gradient bg when active */}
              {activeTab === tab.id && (
                <span
                  className="absolute inset-0 rounded-full"
                  style={{
                    background:
                      tab.id === "parent"
                        ? "linear-gradient(135deg,rgba(249,115,22,0.15),rgba(251,191,36,0.08))"
                        : tab.id === "child"
                        ? "linear-gradient(135deg,rgba(96,165,250,0.15),rgba(167,139,250,0.08))"
                        : "linear-gradient(135deg,rgba(52,211,153,0.15),rgba(251,191,36,0.08))",
                    border: "1px solid rgba(249,115,22,0.2)",
                  }}
                />
              )}
              <span className="relative z-[1]">
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </span>
            </button>
          ))}
        </div>

        {/* timeline panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative"
          >
            {/* vertical line */}
            <div
              className="absolute top-0 bottom-0 w-[2px] rounded-full opacity-30 hidden sm:block"
              style={{
                left: "28px",
                background:
                  "linear-gradient(to bottom, #F97316, #FBBF24, #34D399)",
              }}
            />

            <div className="relative">
              {activeData.map((item, i) => (
                <TimelineItemCard key={i} item={item} index={i} />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-[72px] px-8 py-12 rounded-[20px]"
          style={{
            background:
              "linear-gradient(135deg, rgba(249,115,22,0.06), rgba(52,211,153,0.04))",
            border: "1px solid rgba(148,163,184,0.08)",
          }}
        >
          <p
            className="text-white font-black text-[1.5rem] mb-2"
            style={{ fontFamily: "'Rubik', sans-serif" }}
          >
            Every family&apos;s journey starts with Day 1.
          </p>
          <p className="text-[#94A3B8] text-[0.92rem] mb-7">
            10 minutes. One deed. Three lives transformed.
          </p>
          <a
            href="#cta"
            className="inline-flex items-center gap-2 px-9 py-4 rounded-full text-white font-bold text-[1rem] transition-all duration-300 hover:-translate-y-0.5"
            style={{
              background: "linear-gradient(135deg, #F97316, #ea580c)",
              boxShadow: "0 4px 24px rgba(249,115,22,0.3)",
              fontFamily: "'Rubik', sans-serif",
            }}
          >
            Start Your Family&apos;s Journey 🚀
          </a>
        </motion.div>

      </div>
    </section>
  );
}