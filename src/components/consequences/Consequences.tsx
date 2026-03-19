// "use client";

// import { motion } from "framer-motion";
// import { containerClass, SectionHeader } from "@/components/ui/UI";

// const CARDS = [
//   {
//     childIcon: "👦",
//     childLabel: "Age 6–10",
//     teenLabel: "Age 16+",
//     teenIcon: "🧑",
//     nowTitle: "Screen addiction starts",
//     nowBody: "Unregulated device usage replaces physical play and social interaction during critical developmental years.",
//     futureTitle: "Attention spans collapse",
//     futureBody: "Unable to focus for more than a few minutes, impacting academic performance and career prospects.",
//   },
//   {
//     childIcon: "👧",
//     childLabel: "Age 8–12",
//     teenLabel: "Age 18+",
//     teenIcon: "👩",
//     nowTitle: "Social media exposure",
//     nowBody: "Early access to unfiltered social platforms distorts self-image and fuels anxiety and comparison.",
//     futureTitle: "Mental health crisis",
//     futureBody: "Rising rates of depression, low self-esteem, and social withdrawal traced directly to early exposure.",
//   },
//   {
//     childIcon: "🧒",
//     childLabel: "Age 5–9",
//     teenLabel: "Age 15+",
//     teenIcon: "🧑",
//     nowTitle: "No digital literacy",
//     nowBody: "Children consume content passively without learning how technology works or how to use it safely.",
//     futureTitle: "Left behind in the job market",
//     futureBody: "Every industry now requires digital fluency — those without it face systemic disadvantage.",
//   },
//   {
//     childIcon: "👦",
//     childLabel: "Age 10–13",
//     teenLabel: "Age 20+",
//     teenIcon: "👨",
//     nowTitle: "Gaming without purpose",
//     nowBody: "Hours lost to entertainment without structured learning or skill-building embedded in the experience.",
//     futureTitle: "No transferable skills",
//     futureBody: "Time that could have built real coding, design, or problem-solving ability is gone forever.",
//   },
// ];

// const cardVariants = {
//   hidden: { opacity: 0, y: 24 },
//   visible: (i: number) => ({
//     opacity: 1, y: 0,
//     transition: { duration: 0.45, delay: i * 0.1, ease: "easeOut" },
//   }),
// };

// export default function Consequences() {
//   return (
//     <section id="consequences" className="py-[100px] relative z-[1] bg-[#0a0e1f]">
//       <div className={containerClass}>

//         <SectionHeader
//           tag="The Cost of Waiting"
//           heading={<>What happens when<br /><em className="text-[#f97316] not-italic">nothing changes</em></>}
//           sub="Every year without the right skills compounds the disadvantage. Here's what the data shows."
//         />

//         {/* 2-column grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
//           {CARDS.map((card, i) => (
//             <motion.div
//               key={card.nowTitle}
//               custom={i}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, amount: 0.2 }}
//               variants={cardVariants}
//               className="bg-[#04060f] border border-white/[0.08] rounded-2xl p-[1.6rem] transition-all duration-300 hover:border-[rgba(249,115,22,0.2)]"
//             >
//               {/* Age chips row — .consequence-ages */}
//               <div className="flex items-center gap-2.5 mb-4">
//                 {/* child chip */}
//                 <span
//                   className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[0.72rem] font-bold tracking-[0.02em] text-[#60a5fa]"
//                   style={{
//                     background: "rgba(59,130,246,0.1)",
//                     border: "1px solid rgba(59,130,246,0.25)",
//                     fontFamily: "'Rubik', sans-serif",
//                   }}
//                 >
//                   <span className="text-[1rem] leading-none">{card.childIcon}</span>
//                   {card.childLabel}
//                 </span>

//                 {/* arrow */}
//                 <span className="text-[#9ca3af] text-[0.8rem]">→</span>

//                 {/* teen chip */}
//                 <span
//                   className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[0.72rem] font-bold tracking-[0.02em] text-[#f97316]"
//                   style={{
//                     background: "rgba(249,115,22,0.1)",
//                     border: "1px solid rgba(249,115,22,0.25)",
//                     fontFamily: "'Rubik', sans-serif",
//                   }}
//                 >
//                   <span className="text-[1rem] leading-none">{card.teenIcon}</span>
//                   {card.teenLabel}
//                 </span>
//               </div>

//               {/* Body — 3-col: now | arrow | future */}
//               <div className="grid grid-cols-[1fr_auto_1fr] gap-4 items-start">
//                 {/* Now */}
//                 <div className="text-[0.88rem] text-[#9ca3af] font-light">
//                   <strong className="block text-white font-semibold text-[0.95rem] mb-1">
//                     {card.nowTitle}
//                   </strong>
//                   {card.nowBody}
//                 </div>

//                 {/* Mid arrow */}
//                 <div className="text-[#f97316] text-[1.4rem] text-center pt-1">→</div>

//                 {/* Future */}
//                 <div className="text-[0.85rem] text-[#9ca3af] font-light">
//                   <strong className="block text-[rgba(249,115,22,0.9)] font-semibold text-[0.9rem] mb-1">
//                     {card.futureTitle}
//                   </strong>
//                   {card.futureBody}
//                 </div>
//               </div>
//             </motion.div>
//           ))}

//           {/* Warning line — .consequence-warning */}
//           <motion.p
//             initial={{ opacity: 0, y: 12 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.5 }}
//             transition={{ duration: 0.5, delay: 0.4 }}
//             className="col-span-full text-center mt-8 text-[1rem] font-medium text-white italic opacity-80"
//           >
//             {/* YOUR WARNING TEXT */}
//           </motion.p>
//         </div>

//       </div>
//     </section>
//   );
// }




"use client";

import { motion } from "framer-motion";
import { containerClass, SectionHeader } from "@/components/ui/UI";

const CARDS = [
  {
    childAge: "Age 7",
    teenAge: "Age 15",
    nowStrong: "Needs a screen to calm down",
    nowBody: "Can't self-regulate without a device",
    futureStrong: "Can't handle discomfort",
    futureBody: "without his phone",
  },
  {
    childAge: "Age 8",
    teenAge: "Age 16",
    nowStrong: "Only answer is 'fine'",
    nowBody: "Closed off, no emotional vocabulary",
    futureStrong: "You find out about bullying",
    futureBody: "3 months later",
  },
  {
    childAge: "Age 8",
    teenAge: "Age 15",
    nowStrong: "Can't handle losing a game",
    nowBody: "Low frustration tolerance",
    futureStrong: "Can't handle rejection",
    futureBody: "or professional setbacks",
  },
  {
    childAge: "Age 8",
    teenAge: "Age 17",
    nowStrong: "Every choice made by parents",
    nowBody: "No agency, no decision muscle",
    futureStrong: "Can't pick a career",
    futureBody: "college, or what to eat",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.4, delay: i * 0.08, ease: "easeOut" },
  }),
};

export default function Consequences() {
  return (
    <section
      id="consequences"
      className="py-[100px] relative z-[1]"
      style={{ background: "#0a0e1f" }}
    >
      <div className={containerClass}>

        {/* .section-header.reveal */}
        <SectionHeader
          tag="The Invisible Consequences"
          heading={
            <>
              Small Signs Today.
              <br />
              Defining Traits Tomorrow.
            </>
          }
          sub="What you see today as a small habit, your child will live tomorrow as a defining trait."
        />

        {/* .consequences-grid.reveal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
          {CARDS.map((card, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              /* .consequence-card */
              className="bg-[#04060f] border border-white/[0.08] rounded-2xl p-[1.6rem] transition-all duration-300 hover:border-[rgba(249,115,22,0.2)]"
            >
              {/* .consequence-ages */}
              <div className="flex items-center gap-2.5 mb-4">
                {/* .age-chip.child */}
                <span
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[0.72rem] font-bold tracking-[0.02em] text-[#60a5fa]"
                  style={{
                    fontFamily: "'Rubik', sans-serif",
                    background: "rgba(59,130,246,0.1)",
                    border: "1px solid rgba(59,130,246,0.25)",
                  }}
                >
                  <span className="text-base">🧒</span> {card.childAge}
                </span>

                {/* .age-arrow */}
                <span className="text-[#9ca3af] text-[0.8rem]">──▶</span>

                {/* .age-chip.teen */}
                <span
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[0.72rem] font-bold tracking-[0.02em] text-[#f97316]"
                  style={{
                    fontFamily: "'Rubik', sans-serif",
                    background: "rgba(249,115,22,0.1)",
                    border: "1px solid rgba(249,115,22,0.25)",
                  }}
                >
                  <span className="text-base">🧑</span> {card.teenAge}
                </span>
              </div>

              {/* .consequence-body — 3-col grid: now | arrow | future */}
              <div className="grid grid-cols-[1fr_auto_1fr] gap-4 items-start">
                {/* .consequence-now */}
                <div className="text-[0.88rem] text-[#9ca3af] font-light">
                  <strong className="block text-white font-semibold text-[0.95rem] mb-1">
                    {card.nowStrong}
                  </strong>
                  {card.nowBody}
                </div>

                {/* .arrow-mid */}
                <div className="text-[#f97316] text-[1.4rem] text-center pt-1">▶</div>

                {/* .consequence-future */}
                <div className="text-[0.85rem] text-[#9ca3af] font-light">
                  <strong className="block font-semibold text-[0.9rem] mb-1" style={{ color: "rgba(249,115,22,0.9)" }}>
                    {card.futureStrong}
                  </strong>
                  {card.futureBody}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* .consequence-warning.reveal */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.8 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-8 text-white text-[1rem] font-medium italic"
        >
          The window to act is ages 3–13. After that, you're not building — you're rebuilding.
        </motion.p>

      </div>
    </section>
  );
}