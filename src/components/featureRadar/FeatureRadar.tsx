// "use client";

// import { motion } from "framer-motion";
// import { ArrowRight } from "lucide-react";
// import { containerClass, SectionHeader } from "@/components/ui/UI";

// /* ─── Features data ─── */
// const FEATURES = [
//   { icon: "🧩", title: "Project-Based Learning",  body: "Every concept is taught through real projects — not theory. Students build, ship and iterate from day one.", skill: "Critical Thinking" },
//   { icon: "🤖", title: "AI & Coding Tracks",       body: "From Scratch to Python to AI — age-appropriate tracks that grow with the student over years.", skill: "Technical Fluency" },
//   { icon: "🎨", title: "Design & Creativity",      body: "UI/UX, game design and digital art — because the future needs builders who also think beautifully.", skill: "Creative Problem Solving" },
//   { icon: "🧑‍🤝‍🧑", title: "Peer Collaboration",    body: "Team projects and peer reviews mirror real-world workflows and build communication skills early.", skill: "Teamwork" },
//   { icon: "📊", title: "Live Progress Tracking",   body: "Parents and students see exactly what's been mastered, what's next and where to focus.", skill: "Self-Awareness" },
//   { icon: "🏅", title: "Certifications & Badges",  body: "AICTE-recognised certificates and skill badges that carry real credibility with schools and colleges.", skill: "Recognised Credentials" },
// ];

// /* ─── Radar data ─── */
// const INSIGHTS = [
//   { text: <><strong className="text-white font-medium">78% of parents</strong> say they don't know what their child is actually learning online.</> },
//   { text: <><strong className="text-white font-medium">Screen time without purpose</strong> is the #1 concern for parents of children aged 8–14.</> },
//   { text: <><strong className="text-white font-medium">Only 1 in 5 schools</strong> in India has a structured digital skills curriculum.</> },
//   { text: <><strong className="text-white font-medium">Parents who see progress reports</strong> are 3× more likely to continue enrolment.</> },
// ];

// const RADAR_CARDS = [
//   // {
//   //   label: "",
//   //   heading: "Safe, moderated environment",
//   //   body: "No open chat, no external links, no distractions. Every session is monitored and every interaction is age-appropriate.",
//   //   action: "See safety features",
//   // },
//   {
//     label: "Parenting Insight",
//     heading: "You can see everything",
//     body: "A live parent dashboard shows session attendance, project progress, skill milestones and mentor feedback — all in one place.",
//     action: "View dashboard demo",
//   },
//   {
//     label: "Child Safety",
//     heading: "Safe, moderated environment",
//     body: "No open chat, no external links, no distractions. Every session is monitored and every interaction is age-appropriate.",
//     action: "See safety features",
//   },
// ];

// const cardVariants = {
//   hidden: { opacity: 0, y: 24 },
//   visible: (i: number) => ({
//     opacity: 1, y: 0,
//     transition: { duration: 0.45, delay: i * 0.08, ease: "easeOut" },
//   }),
// };

// export default function FeaturesRadar() {
//   return (
//     <>
//       {/* ══════════════════════════════════════
//           FEATURES
//       ══════════════════════════════════════ */}
//       <section id="features" className="py-[100px] relative z-[1] bg-[#0a0e1f]">
//         <div className={containerClass}>
//           <SectionHeader
//             tag="What's Inside"
//             heading={<>Everything a young<br /><em className="text-[#f97316] not-italic">builder needs</em></>}
//             sub="A complete learning ecosystem — not just videos. Projects, mentors, certifications and a community."
//           />

//           {/* .features-grid — repeat(3,1fr) */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
//             {FEATURES.map((f, i) => (
//               <motion.div
//                 key={f.title}
//                 custom={i}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true, amount: 0.15 }}
//                 variants={cardVariants}
//                 /* .feature-card */
//                 className="relative bg-[#04060f] border border-white/[0.08] rounded-[18px] p-6 overflow-hidden transition-all duration-300 hover:-translate-y-[3px] hover:border-[rgba(249,115,22,0.25)]"
//               >
//                 {/* .feature-icon */}
//                 <div className="text-[2.4rem] mb-3 leading-none">{f.icon}</div>
//                 <h3 className="text-white font-bold text-[0.95rem] mb-1.5">{f.title}</h3>
//                 <p className="text-[#9ca3af] text-[0.82rem] leading-[1.6] font-light">{f.body}</p>
//                 {/* .feature-skill */}
//                 <p className="mt-3 text-[0.72rem] text-[#2dd4bf] font-medium">{f.skill}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

      
//     </>
//   );
// }


"use client";

import { motion } from "framer-motion";
import { containerClass, SectionHeader } from "@/components/ui/UI";

/* ── All 15 cards, word-for-word from HTML ── */
const FEATURES = [
  {
    icon: "🎯",
    heading: "Milestone Tracking",
    body: "Structured cosmic journey through 20+ tiers — tools revealed as your family advances.",
    skill: "Builds: Family discipline · Shared purpose",
  },
  {
    icon: "🌟",
    heading: "Life Skills Activities (1500+)",
    body: "Psychologist-designed offline activities for EQ, AQ, CQ & SQ. Fun while building real-world competence.",
    skill: "Builds: Critical thinking · Emotional intelligence",
  },
  {
    icon: "💬",
    heading: "WonderChat",
    body: "Age-smart conversation prompts for meaningful 5–10 minute parent-child conversations.",
    skill: "Builds: Reflective thinking · Trust · Communication",
  },
  {
    icon: "🔭",
    heading: "Know Your Child (KYC)",
    body: "Decodes your child's behaviour with science-backed explanations so you respond, not react.",
    skill: "Builds: Parental awareness · Reduced conflict",
  },
  {
    icon: "🎧",
    heading: "Audio Stories (1000+)",
    body: "Value-based audio stories for bonding and character. Socratic questions at the end of each story.",
    skill: "Builds: Imagination · Empathy · Ethics",
  },
  {
    icon: "⭐",
    heading: "StrengthFinder",
    body: "Psychometric assessment to identify your child's natural strengths and guide their path.",
    skill: "Builds: Self-awareness · Confidence · Direction",
  },
  {
    icon: "🏆",
    heading: "Challenges",
    body: "Guided parent-child challenges for discipline, habit building and resilience.",
    skill: "Builds: Self-regulation · Resilience · Habit formation",
  },
  {
    icon: "🎓",
    heading: "Parenting Virtues Workshop",
    body: "Weekly focus on a parenting quality — patience, empathy, active listening — with micro challenges.",
    skill: "Builds: Caregiver growth · Positive values",
  },
  {
    icon: "💪",
    heading: "Habit-Up",
    body: "Daily fitness, mental health and household responsibility activities.",
    skill: "Builds: Physical health · Mental discipline",
  },
  {
    icon: "📚",
    heading: "Read-O-Meter",
    body: "Tracks daily reading minutes, reinforces consistent habits, rewards every minute.",
    skill: "Builds: Language · Communication · Critical thinking",
  },
  {
    icon: "🧩",
    heading: "Case Studies",
    body: "Harvard-inspired real-world scenarios to build problem-solving and entrepreneurial mindset.",
    skill: "Builds: Decision making · Ethics · Practical intelligence",
  },
  {
    icon: "🕉️",
    heading: "Shlok & Mudra",
    body: "Indian wisdom through shlok audio and mudras. Memory, concentration, speech and cultural rootedness.",
    skill: "Builds: Cultural identity · Focus · Mental clarity",
  },
  {
    icon: "📁",
    heading: "Portfolio",
    body: "A living digital record of your child's achievements across Sports, Academics, Arts and more.",
    skill: "Builds: Pride · Accountability · Growth mindset",
  },
  {
    icon: "✏️",
    heading: "Create Task",
    body: "Create custom activities tailored to your child's unique needs and family context.",
    skill: "Builds: Personalisation · Ownership",
  },
  {
    icon: "🎮",
    heading: "Points & Rewards",
    body: "Gamified recognition linking effort to earned rewards. Children earn points for becoming better humans.",
    skill: "Builds: Motivation · Consistency · Love of growth",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.35, delay: i * 0.04, ease: "easeOut" },
  }),
};

export default function Features() {
  return (
    <section
      id="features"
      className="py-[100px] relative z-[1]"
      style={{ background: "#0a0e1f" }}
    >
      <div className={containerClass}>

        {/* .section-header.reveal */}
        <SectionHeader
          tag="15-Feature Ecosystem"
          heading="Everything a Family Needs to Thrive."
          sub="Not a single tool — a complete daily family operating system. Every feature serves the whole family. No feature works in isolation."
        />

        {/* .features-grid.reveal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {FEATURES.map((feat, i) => (
            <motion.div
              key={feat.heading}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={cardVariants}
              /* .feature-card */
              className="bg-[#04060f] border border-white/[0.08] rounded-[18px] p-6 relative overflow-hidden transition-all duration-300 hover:-translate-y-[3px] hover:border-[rgba(249,115,22,0.25)]"
            >
              {/* .feature-icon */}
              <div className="text-[2.4rem] mb-3 leading-none">{feat.icon}</div>

              {/* h3 */}
              <h3 className="text-white font-bold text-[0.95rem] mb-1.5">{feat.heading}</h3>

              {/* p */}
              <p className="text-[#9ca3af] text-[0.82rem] leading-[1.6] font-light">{feat.body}</p>

              {/* .feature-skill */}
              <div className="mt-3 text-[0.72rem] font-medium text-[#2dd4bf]">{feat.skill}</div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}