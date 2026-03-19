// "use client";

// import { motion } from "framer-motion";
// import { containerClass, SectionHeader } from "@/components/ui/UI";

// const CARDS = [
//   {
//     icon: "🎯",
//     title: "Built for Outcomes",
//     body: "Every lesson, every project and every mentor session is designed with one goal — a child who can build, ship and compete in the real world.",
//   },
//   {
//     icon: "🧠",
//     title: "Pedagogy-First Approach",
//     body: "We combine child psychology, learning science and industry expertise to design experiences that stick — not just content that streams.",
//   },
//   {
//     icon: "🛡️",
//     title: "Safe & Structured",
//     body: "A fully moderated, distraction-free environment built specifically for children. Parents see everything. Students focus on everything.",
//   },
//   {
//     icon: "🚀",
//     title: "Industry-Relevant Tracks",
//     body: "Our curriculum is co-designed with engineers, designers and founders — so what students learn today is what companies need tomorrow.",
//   },
//   {
//     icon: "🏅",
//     title: "Recognised Credentials",
//     body: "AICTE-approved certificates that carry real weight with schools, colleges and employers — not just participation badges.",
//   },
//   {
//     icon: "👨‍👩‍👧",
//     title: "Family Visibility",
//     body: "Parents get a live dashboard with progress reports, skill milestones and mentor feedback — because learning is a family investment.",
//   },
// ];

// const cardVariants = {
//   hidden: { opacity: 0, y: 28 },
//   visible: (i: number) => ({
//     opacity: 1, y: 0,
//     transition: { duration: 0.45, delay: i * 0.08, ease: "easeOut" },
//   }),
// };

// export default function Why() {
//   return (
//     <section id="why" className="py-[100px] relative z-[1] bg-[#04060f]">
//       <div className={containerClass}>
//         <SectionHeader
//           tag="Why Choose Us"
//           heading={<>Not just another<br /><em className="text-[#f97316] not-italic">EdTech platform</em></>}
//           sub="Most platforms give you videos. We give you a system — built around outcomes, not hours watched."
//         />

//         {/* .why-grid — repeat(3,1fr) */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
//           {CARDS.map((card, i) => (
//             <motion.div
//               key={card.title}
//               custom={i}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, amount: 0.15 }}
//               variants={cardVariants}
//               /* .why-card */
//               className="bg-[#0a0e1f] border border-white/[0.08] rounded-[20px] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(249,115,22,0.3)]"
//               style={{ transition: "transform .3s, border-color .3s, background .3s" }}
//             >
//               {/* .why-icon */}
//               <div
//                 className="w-[60px] h-[60px] rounded-[14px] flex items-center justify-center text-[2.2rem] mb-5"
//                 style={{
//                   background: "rgba(249,115,22,0.08)",
//                   border: "1px solid rgba(249,115,22,0.25)",
//                 }}
//               >
//                 {card.icon}
//               </div>

//               <h3
//                 className="text-white font-black text-[1.05rem] mb-2.5"
//                 style={{ fontFamily: "'Rubik', sans-serif" }}
//               >
//                 {card.title}
//               </h3>
//               <p className="text-[#9ca3af] text-[0.85rem] leading-[1.65] font-light">
//                 {card.body}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { motion } from "framer-motion";
import { containerClass, SectionHeader } from "@/components/ui/UI";

/* ── 6 cards, word-for-word from HTML ── */
const CARDS = [
  {
    icon: "🔬",
    heading: "Science-Backed Ecosystem",
    body: "Built on WHO, UNICEF & peer-reviewed research. Not intuition — a defensible scientific foundation.",
  },
  {
    icon: "📵",
    heading: "Screen-Free & Offline",
    body: "The only platform that deliberately fights screen addiction by driving real-world family interaction.",
  },
  {
    icon: "👨‍👩‍👧",
    heading: "The Whole Family Grows",
    body: "Children AND caregivers develop simultaneously. Child builds EQ, CQ, AQ, SQ. You build awareness, patience & confidence.",
  },
  {
    icon: "🇮🇳",
    heading: "Indian Roots + Modern Science",
    body: "Shloks, mudras, cultural values blended with global psychology. Rooted in who we are. Ready for where we're going.",
  },
  {
    icon: "⚙️",
    heading: "15 Integrated Features",
    body: "Not a single tool — a complete daily family operating system. Breadth and integration create true defensibility.",
  },
  {
    icon: "⏱️",
    heading: "Just 20 Minutes a Day",
    body: "Designed for India's busiest caregivers. Low barrier. High impact. Habit-forming from day one.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.38, delay: i * 0.08, ease: "easeOut" },
  }),
};

export default function Why() {
  return (
    <section id="why" className="py-[100px] relative z-[1]">
      <div className={containerClass}>

        {/* .section-header.reveal */}
        <SectionHeader
          tag="Why UltiMate Wins"
          heading={
            <>
              We Are Not Another Parenting Blog,
              <br />
              Workshop, or Children&apos;s App.
            </>
          }
        />

        {/* .why-grid.reveal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {CARDS.map((card, i) => (
            <motion.div
              key={card.heading}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={cardVariants}
              /* .why-card */
              className="bg-[#0a0e1f] border border-white/[0.08] rounded-[20px] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(249,115,22,0.25)] hover:bg-[#0d1224]"
            >
              {/* .why-icon */}
              <div
                className="w-[60px] h-[60px] rounded-[14px] flex items-center justify-center text-[2.2rem] mb-5"
                style={{
                  background: "rgba(249,115,22,0.08)",
                  border: "1px solid rgba(249,115,22,0.25)",
                }}
              >
                {card.icon}
              </div>

              {/* h3 */}
              <h3
                className="text-white font-black text-[1.05rem] mb-2.5"
                style={{ fontFamily: "'Rubik', sans-serif" }}
              >
                {card.heading}
              </h3>

              {/* p */}
              <p className="text-[#9ca3af] text-[0.85rem] leading-[1.65] font-light">
                {card.body}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}