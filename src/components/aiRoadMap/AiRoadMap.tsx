// "use client";

// import { motion } from "framer-motion";
// import { containerClass, SectionHeader } from "@/components/ui/UI";

// const PHASES = [
//   {
//     badge: "Live Now",
//     badgeType: "live" as const,
//     num: "01",
//     title: "Foundation Engine",
//     subtitle: "Ages 6–12 · Beginner to Intermediate",
//     items: [
//       "Scratch & block-based programming",
//       "Python fundamentals via projects",
//       "Game design & interactive stories",
//       "Digital literacy & internet safety",
//       "AICTE-certified completion badge",
//     ],
//   },
//   {
//     badge: "Coming Next",
//     badgeType: "next" as const,
//     num: "02",
//     title: "Builder Accelerator",
//     subtitle: "Ages 12–16 · Intermediate to Advanced",
//     items: [
//       "Web development (HTML, CSS, JS)",
//       "App development with React Native",
//       "Data science & visualisation",
//       "Peer team project sprints",
//       "Portfolio-ready capstone project",
//     ],
//   },
//   {
//     badge: "Vision",
//     badgeType: "vision" as const,
//     num: "03",
//     title: "AI & Future Tech",
//     subtitle: "Ages 14–18 · Advanced",
//     items: [
//       "Machine learning fundamentals",
//       "Prompt engineering & AI tools",
//       "Robotics & IoT integration",
//       "Startup & entrepreneurship track",
//       "Industry mentorship program",
//     ],
//   },
// ];

// const badgeStyles = {
//   live: {
//     className: "text-[#f97316]",
//     style: { background: "rgba(249,115,22,0.15)", border: "1px solid rgba(249,115,22,0.3)" },
//   },
//   next: {
//     className: "text-[#60a5fa]",
//     style: { background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.2)" },
//   },
//   vision: {
//     className: "text-[#a78bfa]",
//     style: { background: "rgba(167,139,250,0.1)", border: "1px solid rgba(167,139,250,0.2)" },
//   },
// };

// const cardVariants = {
//   hidden: { opacity: 0, y: 28 },
//   visible: (i: number) => ({
//     opacity: 1, y: 0,
//     transition: { duration: 0.45, delay: i * 0.1, ease: "easeOut" },
//   }),
// };

// export default function AiRoadmap() {
//   return (
//     <section id="ai" className="py-[100px] relative z-[1] bg-[#0a0e1f]">
//       <div className={containerClass}>
//         <SectionHeader
//           tag="AI Roadmap"
//           heading={<>The path from curious<br /><em className="text-[#f97316] not-italic">to unstoppable</em></>}
//           sub="A structured three-phase journey that takes any child from zero to industry-ready — at their own pace."
//         />

//         {/* .ai-phases — repeat(3,1fr) */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
//           {PHASES.map((phase, i) => {
//             const badge = badgeStyles[phase.badgeType];
//             return (
//               <motion.div
//                 key={phase.title}
//                 custom={i}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true, amount: 0.15 }}
//                 variants={cardVariants}
//                 /* .ai-phase */
//                 className="relative bg-[#04060f] border border-white/[0.08] rounded-[20px] p-8 overflow-hidden transition-all duration-300 hover:border-[rgba(167,139,250,0.3)]"
//               >
//                 {/* .phase-num — ghost number */}
//                 <span
//                   className="absolute top-2 right-5 font-black text-[3rem] leading-none pointer-events-none select-none text-white"
//                   style={{ opacity: 0.08, fontFamily: "'Rubik', sans-serif" }}
//                 >
//                   {phase.num}
//                 </span>

//                 {/* .phase-badge */}
//                 <span
//                   className={`inline-block text-[0.7rem] font-bold tracking-[0.08em] uppercase px-2.5 py-0.5 rounded-full mb-4 ${badge.className}`}
//                   style={{ ...badge.style, fontFamily: "'Rubik', sans-serif" }}
//                 >
//                   {phase.badge}
//                 </span>

//                 {/* heading */}
//                 <h3 className="text-white font-black text-[1.1rem] mb-1" style={{ fontFamily: "'Rubik', sans-serif" }}>
//                   {phase.title}
//                 </h3>
//                 <h4 className="text-[#9ca3af] text-[0.85rem] font-normal mb-4">{phase.subtitle}</h4>

//                 {/* list */}
//                 <ul className="list-none p-0 m-0 flex flex-col">
//                   {phase.items.map((item, j) => (
//                     <li
//                       key={item}
//                       className={`flex items-start gap-2.5 text-[0.82rem] text-[#9ca3af] py-1.5 font-light leading-[1.5] ${
//                         j < phase.items.length - 1 ? "border-b border-white/[0.06]" : ""
//                       }`}
//                     >
//                       {/* ::before → */}
//                       <span className="text-[#f97316] text-[0.8rem] flex-shrink-0 mt-[2px]">→</span>
//                       {item}
//                     </li>
//                   ))}
//                 </ul>
//               </motion.div>
//             );
//           })}
//         </div>

//         {/* .ai-flywheel */}
//         <motion.div
//           initial={{ opacity: 0, y: 16 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.4 }}
//           transition={{ duration: 0.5, delay: 0.3 }}
//           className="mt-10 bg-[#04060f] rounded-[20px] px-10 py-8 text-center"
//           style={{ border: "1px solid rgba(249,115,22,0.25)" }}
//         >
//           <p className="text-white font-bold text-[1rem] mb-1.5">
//             {/* YOUR FLYWHEEL STATEMENT */}
//           </p>
//           <span className="text-[#9ca3af] text-[0.85rem]">
//             {/* YOUR FLYWHEEL SUBLINE */}
//           </span>
//         </motion.div>

//       </div>
//     </section>
//   );
// }


"use client";

import { motion } from "framer-motion";
import { containerClass, SectionHeader } from "@/components/ui/UI";

/* ── data ── */
const PHASES = [
  {
    num: "01",
    badge: "● Live Now",
    badgeStyle: {
      background: "rgba(249,115,22,0.15)",
      color: "#f97316",
      border: "1px solid rgba(249,115,22,0.25)",
    },
    h3: "Knowledge AI",
    h4: "UltiMate Assistant",
    items: [
      "Answers all parenting & child development questions",
      "Explains app philosophy, structure & how to use",
      "Grounded in app context — not generic AI",
      "Full content guardrails — safe, accurate, focused",
      "Phase 1 does not access user data",
    ],
  },
  {
    num: "02",
    badge: "Coming Next",
    badgeStyle: {
      background: "rgba(59,130,246,0.1)",
      color: "#60a5fa",
      border: "1px solid rgba(59,130,246,0.2)",
    },
    h3: "Contextual AI",
    h4: "In-App Guidance Engine",
    items: [
      "Reads in-app activity & milestone progress",
      "Suggests next most relevant activity or challenge",
      "Prompts families when engagement drops",
      "Surfaces relevant WonderChat prompts daily",
      "Uses app usage data — not personal data",
    ],
  },
  {
    num: "03",
    badge: "The Vision",
    badgeStyle: {
      background: "rgba(167,139,250,0.1)",
      color: "#a78bfa",
      border: "1px solid rgba(167,139,250,0.2)",
    },
    h3: "Personalised AI",
    h4: "Family Intelligence Engine",
    items: [
      "Integrates StrengthFinder psychometric results",
      "Analyses quarterly child self-assessment trends",
      "Delivers truly personalised activity prescriptions",
      "Predicts developmental gaps before they emerge",
      "Maps your entire family journey longitudinally",
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.4, delay: i * 0.1, ease: "easeOut" },
  }),
};

export default function AiRoadmap() {
  return (
    <section
      id="ai"
      className="py-[100px] relative z-[1]"
      style={{ background: "#0a0e1f" }}
    >
      <div className={containerClass}>

        {/* .section-header.reveal */}
        <SectionHeader
          tag="AI That Grows With Your Family"
          heading={
            <>
              Intelligence That Gets
              <br />
              More Personal Over Time.
            </>
          }
          sub="A deliberate three-phase approach — starting with trust, building with data, culminating in true personalisation for your unique family."
        />

        {/* .ai-phases.reveal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {PHASES.map((phase, i) => (
            <motion.div
              key={phase.num}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              /* .ai-phase */
              className="bg-[#04060f] border border-white/[0.08] rounded-[20px] p-8 relative overflow-hidden transition-all duration-300 hover:border-[rgba(167,139,250,0.3)]"
            >
              {/* .phase-num — ghost large number */}
              <span
                className="absolute top-2 right-5 font-black text-[3rem] text-white leading-none select-none"
                style={{ opacity: 0.08, fontFamily: "'Rubik', sans-serif" }}
              >
                {phase.num}
              </span>

              {/* .phase-badge */}
              <span
                className="inline-block text-[0.7rem] font-bold tracking-[0.08em] uppercase px-2.5 py-0.5 rounded-full mb-4"
                style={{ fontFamily: "'Rubik', sans-serif", ...phase.badgeStyle }}
              >
                {phase.badge}
              </span>

              {/* h3 */}
              <h3
                className="text-white font-black text-[1.1rem] mb-1"
                style={{ fontFamily: "'Rubik', sans-serif" }}
              >
                {phase.h3}
              </h3>

              {/* h4 */}
              <h4 className="text-[#9ca3af] text-[0.85rem] font-normal mb-4">{phase.h4}</h4>

              {/* ul */}
              <ul className="list-none p-0 space-y-0">
                {phase.items.map((item, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-2.5 text-[0.82rem] text-[#9ca3af] font-light leading-[1.5] py-1.5 border-b border-white/[0.06] last:border-b-0"
                  >
                    {/* ::before → */}
                    <span className="text-[#f97316] flex-shrink-0 text-[0.8rem] mt-0.5">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* .ai-flywheel.reveal */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 rounded-[20px] px-10 py-8 text-center bg-[#04060f]"
          style={{ border: "1px solid rgba(249,115,22,0.25)" }}
        >
          {/* p — flywheel statement */}
          <p className="text-white font-bold text-[1rem] mb-1.5 leading-[1.6]">
            Families use daily → AI observes patterns → AI learns what works → AI prescribes better next steps → Families see stronger results → More engagement → Better AI
          </p>

          {/* span — subline */}
          <span className="text-[#9ca3af] text-[0.85rem]">
            The families who use UltiMate today are building the intelligence that will make UltiMate tomorrow&apos;s most personalised family platform in the world.
          </span>
        </motion.div>

      </div>
    </section>
  );
}