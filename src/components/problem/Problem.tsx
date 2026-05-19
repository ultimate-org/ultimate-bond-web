// "use client";

// import { motion } from "framer-motion";

// const CARDS = [
//   {
//     icon: "😓",
//     stat: "93%",
//     heading: "Graduates feel unprepared",
//     body: "Most engineering graduates lack the practical, job-ready skills that modern tech companies actually demand on day one.",
//   },
//   {
//     icon: "📉",
//     stat: "68%",
//     heading: "Jobs go unfilled for months",
//     body: "Companies struggle to find candidates with real-world project experience, despite thousands of applicants in the queue.",
//   },
//   {
//     icon: "💸",
//     stat: "₹0",
//     heading: "Wasted years, wasted fees",
//     body: "Students spend 4 years and lakhs of rupees on degrees that don't translate into employable, industry-relevant skills.",
//   },
// ];

// const PILLS = [
//   '"Freshers lack problem-solving skills" — NASSCOM',
//   '"60% of CS grads unemployable" — Aspiring Minds',
//   '"Industry-academia gap widening" — McKinsey',
//   '"Hiring costs rising 3x" — LinkedIn Report',
// ];

// const cardVariants = {
//   hidden: { opacity: 0, y: 24 },
//   visible: (i: number) => ({
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.45, delay: i * 0.1, ease: "easeOut" },
//   }),
// };

// export default function Problem() {
//   return (
//     <section id="problem" className="py-[100px] px-[6%] bg-[#04060f]">
//       <div className="max-w-[1160px] mx-auto">

//         {/* 3-column card grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {CARDS.map((card, i) => (
//             <motion.div
//               key={card.heading}
//               custom={i}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, amount: 0.2 }}
//               variants={cardVariants}
//               className="group relative bg-[#0a0e1f] border border-white/[0.08] rounded-[20px] p-8 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(249,115,22,0.4)]"
//             >
//               {/* top accent line — ::before */}
//               <div
//                 className="absolute top-0 left-0 right-0 h-[3px]"
//                 style={{
//                   background:
//                     "linear-gradient(90deg, #f97316, transparent)",
//                 }}
//               />

//               {/* Icon */}
//               <div className="text-[2.6rem] mb-4 leading-none">{card.icon}</div>

//               {/* Stat */}
//               <p
//                 className="text-[2.8rem] font-black text-[#f97316] leading-none mb-2"
//                 style={{ fontFamily: "'Rubik', sans-serif" }}
//               >
//                 {card.stat}
//               </p>

//               {/* Heading */}
//               <h3 className="text-white font-bold text-[1.05rem] mb-2.5">
//                 {card.heading}
//               </h3>

//               {/* Body */}
//               <p className="text-[#9ca3af] text-[0.88rem] leading-[1.7] font-light">
//                 {card.body}
//               </p>
//             </motion.div>
//           ))}
//         </div>

//         {/* Headlines row */}
//         <motion.div
//           initial={{ opacity: 0, y: 16 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.45, delay: 0.3 }}
//           className="mt-8 px-8 py-6 rounded-2xl"
//           style={{
//             background: "rgba(249,115,22,0.05)",
//             border: "1px solid rgba(249,115,22,0.25)",
//           }}
//         >
//           <p className="text-[#9ca3af] text-[0.85rem] mb-3">
//             What the industry is saying:
//           </p>
//           <div className="flex flex-wrap gap-3">
//             {PILLS.map((pill) => (
//               <span
//                 key={pill}
//                 className="text-[0.78rem] text-[#f97316] px-3 py-1 rounded-full"
//                 style={{
//                   background: "rgba(249,115,22,0.1)",
//                   border: "1px solid rgba(249,115,22,0.25)",
//                 }}
//               >
//                 {pill}
//               </span>
//             ))}
//           </div>
//         </motion.div>

//       </div>
//     </section>
//   );
// }



"use client";

import { motion } from "framer-motion";
import { containerClass, SectionHeader } from "@/components/ui/UI";

const CARDS = [
  {
    icon: "📱",
    stat: "59%",
    heading: "Screen Addicted",
    body: "of parents say their children are too distracted to engage in meaningful family interactions. Children aged 3–13 average 4+ hours of screen time daily — replacing family conversations, outdoor play and emotional development.",
  },
  {
    icon: "📚",
    stat: "52%",
    heading: "Emotionally Unprepared",
    body: "of parents feel they are not doing enough to support their child's emotional development. Parents invest heavily in tuitions — but no structure exists for emotional intelligence, resilience or life skills.",
  },
  {
    icon: "🏠",
    stat: "40%",
    heading: "The Village Is Gone",
    body: "of children in India struggle with anxiety, stress & depression — UNICEF India. Nuclear families have lost the joint family ecosystem. The entire weight of emotional development falls on two overwhelmed adults, alone.",
  },
];

// const PILLS = [
//   "Suicide claiming 1 student every hour",
//   "16-yr-old dies near Pune after gaming addiction",
//   "The child who hides everything at 15 was the 7-yr-old who never talks",
// ];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.45, delay: i * 0.1, ease: "easeOut" },
  }),
};

export default function Problem() {
  return (
    <section id="problem" className="py-[100px] relative z-[1]">
      <div className={containerClass}>

        {/* .section-header.reveal */}
        <SectionHeader
          tag="The Reality Check"
          heading={
            <>
              Modern Families Are
              <br />
              Physically Together —
              <br />
              <em className="text-[#f97316] not-italic">Emotionally Drifting Apart.</em>
            </>
          }
          sub="Alarming trends every caregiver must know. The data is clear. The window to act is now."
        />

        {/* .problem-grid.reveal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CARDS.map((card, i) => (
            <motion.div
              key={card.heading}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              /* .problem-card */
              className="relative bg-[#0a0e1f] border border-white/[0.08] rounded-[20px] p-8 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(249,115,22,0.4)]"
            >
              {/* ::before — top orange gradient line */}
              <div
                className="absolute top-0 left-0 right-0 h-[3px]"
                style={{ background: "linear-gradient(90deg, #f97316, transparent)" }}
              />

              {/* .problem-icon */}
              <div className="text-[2.6rem] mb-4 leading-none">{card.icon}</div>

              {/* .problem-stat */}
              <p
                className="text-[2.8rem] font-black text-[#f97316] leading-none mb-2"
                style={{ fontFamily: "'Rubik', sans-serif" }}
              >
                {card.stat}
              </p>

              

              {/* p */}
              <p className="text-[#9ca3af] text-[0.88rem] leading-[1.7] font-light">
                {card.body}
              </p>
              {/* h3 */}
              <h3 className="text-white font-bold text-[1.05rem] mb-2.5">
                {card.heading}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* .problem-headlines.reveal */}
        {/* <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, delay: 0.3 }}
          className="mt-8 px-8 py-6 rounded-2xl"
          style={{
            background: "rgba(249,115,22,0.05)",
            border: "1px solid rgba(249,115,22,0.25)",
          }}
        > */}
          {/* p */}
          {/* <p className="text-[#9ca3af] text-[0.85rem] mb-3">
            Real headlines. Real families. This is happening now.
          </p> */}

          {/* .headlines-row */}
          {/* <div className="flex flex-wrap gap-4">
            {PILLS.map((pill) => (
              <span
                key={pill}
                className="text-[0.78rem] text-[#f97316] px-3 py-1 rounded-full"
                style={{
                  background: "rgba(249,115,22,0.1)",
                  border: "1px solid rgba(249,115,22,0.25)",
                }}
              >
                {pill}
              </span>
            ))}
          </div> */}
        {/* </motion.div> */}

      </div>
    </section>
  );
}