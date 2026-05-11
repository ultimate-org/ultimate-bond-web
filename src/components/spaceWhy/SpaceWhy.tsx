// // "use client";

// // import { motion } from "framer-motion";

// // const CARDS = [
// //   {
// //     icon: "😓",
// //     stat: "93%",
// //     heading: "Graduates feel unprepared",
// //     body: "Most engineering graduates lack the practical, job-ready skills that modern tech companies actually demand on day one.",
// //   },
// //   {
// //     icon: "📉",
// //     stat: "68%",
// //     heading: "Jobs go unfilled for months",
// //     body: "Companies struggle to find candidates with real-world project experience, despite thousands of applicants in the queue.",
// //   },
// //   {
// //     icon: "💸",
// //     stat: "₹0",
// //     heading: "Wasted years, wasted fees",
// //     body: "Students spend 4 years and lakhs of rupees on degrees that don't translate into employable, industry-relevant skills.",
// //   },
// // ];

// // const PILLS = [
// //   '"Freshers lack problem-solving skills" — NASSCOM',
// //   '"60% of CS grads unemployable" — Aspiring Minds',
// //   '"Industry-academia gap widening" — McKinsey',
// //   '"Hiring costs rising 3x" — LinkedIn Report',
// // ];

// // const cardVariants = {
// //   hidden: { opacity: 0, y: 24 },
// //   visible: (i: number) => ({
// //     opacity: 1,
// //     y: 0,
// //     transition: { duration: 0.45, delay: i * 0.1, ease: "easeOut" },
// //   }),
// // };

// // export default function SpaceWhy() {
// //   return (
// //     <>
// //       {/* ── SPACE WHY ── */}
// //       <section
// //         id="space-why"
// //         className="py-20 text-center"
// //         style={{
// //           background:
// //             "linear-gradient(180deg, #04060f 0%, #0a0e1f 50%, #04060f 100%)",
// //         }}
// //       >
// //         <div className="max-w-[720px] mx-auto px-[6%]">
// //           <h2
// //             className="font-black leading-[1.2] tracking-[-0.03em] mb-5 text-white text-left"
// //             style={{
// //               fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
// //               fontFamily: "'Rubik', sans-serif",
// //             }}
// //           >
// //             Modern Families Are
// // Physically Together —
// // Emotionally Drifting Apart.
// //           </h2>
// //           <p className="text-[#9ca3af] text-[1.05rem] leading-[1.85] font-light text-left">
// //             Alarming trends every caregiver must know. The data is clear. The window to act is now.
// //           </p>
// //         </div>
// //       </section>

// //       {/* ── PROBLEM ── */}
// //       <section id="problem" className="py-[100px] px-[6%] bg-[#04060f]">
// //         <div className="max-w-[1160px] mx-auto">

// //           {/* 3-column card grid */}
// //           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
// //             {CARDS.map((card, i) => (
// //               <motion.div
// //                 key={card.heading}
// //                 custom={i}
// //                 initial="hidden"
// //                 whileInView="visible"
// //                 viewport={{ once: true, amount: 0.2 }}
// //                 variants={cardVariants}
// //                 className="relative bg-[#0a0e1f] border border-white/[0.08] rounded-[20px] p-8 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(249,115,22,0.4)]"
// //               >
// //                 {/* top accent line — ::before */}
// //                 <div
// //                   className="absolute top-0 left-0 right-0 h-[3px]"
// //                   style={{
// //                     background: "linear-gradient(90deg, #f97316, transparent)",
// //                   }}
// //                 />

// //                 {/* Icon */}
// //                 <div className="text-[2.6rem] mb-4 leading-none">{card.icon}</div>

// //                 {/* Stat */}
// //                 <p
// //                   className="text-[2.8rem] font-black text-[#f97316] leading-none mb-2"
// //                   style={{ fontFamily: "'Rubik', sans-serif" }}
// //                 >
// //                   {card.stat}
// //                 </p>

// //                 {/* Heading */}
// //                 <h3 className="text-white font-bold text-[1.05rem] mb-2.5">
// //                   {card.heading}
// //                 </h3>

// //                 {/* Body */}
// //                 <p className="text-[#9ca3af] text-[0.88rem] leading-[1.7] font-light">
// //                   {card.body}
// //                 </p>
// //               </motion.div>
// //             ))}
// //           </div>

// //           {/* Headlines row */}
// //           <motion.div
// //             initial={{ opacity: 0, y: 16 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true, amount: 0.3 }}
// //             transition={{ duration: 0.45, delay: 0.3 }}
// //             className="mt-8 px-8 py-6 rounded-2xl"
// //             style={{
// //               background: "rgba(249,115,22,0.05)",
// //               border: "1px solid rgba(249,115,22,0.25)",
// //             }}
// //           >
// //             <p className="text-[#9ca3af] text-[0.85rem] mb-3">
// //               What the industry is saying:
// //             </p>
// //             <div className="flex flex-wrap gap-3">
// //               {PILLS.map((pill) => (
// //                 <span
// //                   key={pill}
// //                   className="text-[0.78rem] text-[#f97316] px-3 py-1 rounded-full"
// //                   style={{
// //                     background: "rgba(249,115,22,0.1)",
// //                     border: "1px solid rgba(249,115,22,0.25)",
// //                   }}
// //                 >
// //                   {pill}
// //                 </span>
// //               ))}
// //             </div>
// //           </motion.div>

// //         </div>
// //       </section>
// //     </>
// //   );
// // }


// "use client";

// import { motion } from "framer-motion";
// import { containerClass } from "@/components/ui/UI";

// const CARDS = [
//   { icon: "😓", stat: "93%",  heading: "Graduates feel unprepared",   body: "Most engineering graduates lack the practical, job-ready skills that modern tech companies actually demand on day one." },
//   { icon: "📉", stat: "68%",  heading: "Jobs go unfilled for months",  body: "Companies struggle to find candidates with real-world project experience, despite thousands of applicants in the queue." },
//   { icon: "💸", stat: "₹0",   heading: "Wasted years, wasted fees",    body: "Students spend 4 years and lakhs of rupees on degrees that don't translate into employable, industry-relevant skills." },
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
//     opacity: 1, y: 0,
//     transition: { duration: 0.45, delay: i * 0.1, ease: "easeOut" },
//   }),
// };

// export default function SpaceWhyProblem() {
//   return (
//     <>
//       {/* ── SPACE WHY ── */}
//       <section
//         id="space-why"
//         className="py-20 text-center relative z-[1]"
//         style={{ background: "linear-gradient(180deg, #04060f 0%, #0a0e1f 50%, #04060f 100%)" }}
//       >
//         <div className="max-w-[720px] mx-auto px-[6%]">
//           <h2
//             className="font-black leading-[1.2] tracking-[-0.03em] mb-5 text-white"
//             style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontFamily: "'Rubik', sans-serif" }}
//           >
//            Modern Families Are Physically Together — Emotionally Drifting Apart.
//           </h2>
//           <p className="text-[#9ca3af] text-[1.05rem] leading-[1.85] font-light">
//             Alarming trends every caregiver must know. The data is clear. The window to act is now.
//           </p>
//         </div>
//       </section>

//       {/* ── PROBLEM ── */}
//       <section id="problem" className="py-[100px] relative z-[1] bg-[#04060f]">
//         <div className={containerClass}>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {CARDS.map((card, i) => (
//               <motion.div
//                 key={card.heading}
//                 custom={i}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true, amount: 0.2 }}
//                 variants={cardVariants}
//                 className="relative bg-[#0a0e1f] border border-white/[0.08] rounded-[20px] p-8 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(249,115,22,0.4)]"
//               >
//                 {/* top accent line */}
//                 <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: "linear-gradient(90deg, #f97316, transparent)" }} />

//                 <div className="text-[2.6rem] mb-4 leading-none">{card.icon}</div>
//                 <p className="text-[2.8rem] font-black text-[#f97316] leading-none mb-2" style={{ fontFamily: "'Rubik', sans-serif" }}>
//                   {card.stat}
//                 </p>
//                 <h3 className="text-white font-bold text-[1.05rem] mb-2.5">{card.heading}</h3>
//                 <p className="text-[#9ca3af] text-[0.88rem] leading-[1.7] font-light">{card.body}</p>
//               </motion.div>
//             ))}
//           </div>

//           {/* Headlines row */}
//           <motion.div
//             initial={{ opacity: 0, y: 16 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 0.45, delay: 0.3 }}
//             className="mt-8 px-8 py-6 rounded-2xl"
//             style={{ background: "rgba(249,115,22,0.05)", border: "1px solid rgba(249,115,22,0.25)" }}
//           >
//             <p className="text-[#9ca3af] text-[0.85rem] mb-3">What the industry is saying:</p>
//             <div className="flex flex-wrap gap-3">
//               {PILLS.map((pill) => (
//                 <span
//                   key={pill}
//                   className="text-[0.78rem] text-[#f97316] px-3 py-1 rounded-full"
//                   style={{ background: "rgba(249,115,22,0.1)", border: "1px solid rgba(249,115,22,0.25)" }}
//                 >
//                   {pill}
//                 </span>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </>
//   );
// }



import { SectionTag } from "@/components/ui/UI";

export default function SpaceWhy() {
  return (
    <section
      id="space-why"
      className="py-20 text-center relative z-[1]"
      style={{
        background:
          "linear-gradient(180deg, #04060f 0%, #0a0e1f 50%, #04060f 100%)",
      }}
    >
      {/* .space-why-inner.reveal */}
      <div className="max-w-[720px] mx-auto px-[6%]">

        {/* .section-tag */}
        <SectionTag>Why Space?</SectionTag>

        {/* h2 */}
        <h2
          className="text-white font-black leading-[1.2] tracking-[-0.03em] mb-5"
          style={{
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            fontFamily: "'Rubik', sans-serif",
          }}
        >
          Space is Infinite.
          <br />
          So Is Your Family&apos;s Journey.
        </h2>

        {/* p */}
        <p className="text-[#9ca3af] text-[1.05rem] leading-[1.85] font-light">
          Just as space has no boundary,{" "}
          <strong className="text-white font-medium">
            a parent&apos;s love and a family&apos;s growth know no limits.
          </strong>{" "}
          Every deed completed is fuel. Every milestone crossed is a new planet
          reached. The journey through the cosmos of parenthood never truly ends
          — it only deepens. UltiMate maps your family&apos;s infinite growth across
          the stars, one intentional moment at a time.
        </p>

      </div>
    </section>
  );
}