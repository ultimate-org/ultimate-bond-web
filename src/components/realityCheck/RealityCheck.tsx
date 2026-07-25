// "use client";

// import { motion } from "framer-motion";

// const HEADLINE_GRADIENT =
//   "linear-gradient(101.87deg, #ffb13d 0%, #ff7a18 26%, #ff4d8d 64%, #a24bff 100%)";

// const SCHOOL_ROWS = [
//   { subject: "Mathematics", grade: "92 / 100" },
//   { subject: "Science", grade: "88 / 100" },
//   { subject: "English", grade: "95 / 100" },
//   { subject: "Social Studies", grade: "86 / 100" },
//   { subject: "Hindi", grade: "90 / 100" },
//   { subject: "Computer Science", grade: "94 / 100" },
// ];

// const LIFE_ROWS = [
//   "Sitting with a hard feeling",
//   "Asking for what you need",
//   "Choosing without being told",
//   "Knowing what money is for",
//   "Walking into a room of strangers",
//   "Getting back up",
// ];

// const SMOOTH = [0.16, 1, 0.3, 1] as const;

// // header pieces fade up on scroll-in
// const fadeUp = {
//   hidden: { opacity: 0, y: 28 },
//   visible: (i: number) => ({
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.55, delay: i * 0.1, ease: "easeOut" },
//   }),
// };

// // Entrance: cards start pulled toward center + rotated (look stacked behind the
// // orb), then slide apart to their resting tilt when the row scrolls into view.
// const leftSlot = {
//   hidden: { x: "72%", rotate: -14, opacity: 0 },
//   visible: {
//     x: 0,
//     rotate: 0,
//     opacity: 1,
//     transition: {
//       x: { duration: 1.5, ease: SMOOTH, delay: 0.15 },
//       rotate: { duration: 1.5, ease: SMOOTH, delay: 0.15 },
//       opacity: { duration: 0.9, ease: "easeOut", delay: 0.15 },
//     },
//   },
// };
// const rightSlot = {
//   hidden: { x: "-72%", rotate: 14, opacity: 0 },
//   visible: {
//     x: 0,
//     rotate: 0,
//     opacity: 1,
//     transition: {
//       x: { duration: 1.5, ease: SMOOTH, delay: 0.3 },
//       rotate: { duration: 1.5, ease: SMOOTH, delay: 0.3 },
//       opacity: { duration: 0.9, ease: "easeOut", delay: 0.3 },
//     },
//   },
// };
// const orb = {
//   hidden: { opacity: 0, scale: 0.7 },
//   visible: {
//     opacity: 1,
//     scale: 1,
//     transition: {
//       opacity: { duration: 0.9, ease: "easeOut", delay: 0.55 },
//       scale: { duration: 0.9, ease: SMOOTH, delay: 0.55 },
//     },
//   },
// };

// export default function RealityCheck() {
//   return (
//     <section
//       className="relative w-full overflow-hidden px-[clamp(1.125rem,4vw,4.5rem)] py-[clamp(3rem,8vh,7.5rem)] font-['Poppins',sans-serif] antialiased text-white"
//       style={{ background: "linear-gradient(180deg, #0a0a14 0%, #08080d 100%)" }}
//     >
//       {/* warm glow */}
//       <div
//         className="pointer-events-none absolute left-1/2 top-[-7.5rem] z-0 h-[33.75rem] w-[min(106.25rem,90vw)] -translate-x-1/2"
//         style={{
//           background:
//             "radial-gradient(ellipse 60% 60% at 50% 30%, rgba(255,138,43,0.08) 0%, rgba(255,138,43,0) 65%)",
//         }}
//       />

//       <div className="relative z-[1] mx-auto max-w-[100rem]">
//         {/* Pill — reusable orange-glow */}
//         <motion.div
//           custom={0}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.4 }}
//           variants={fadeUp}
//           className="mb-[clamp(1.375rem,2.8vh,2.25rem)] flex justify-center"
//         >
//           <div
//             className="inline-flex h-9 items-center gap-2.5 rounded-full border border-[rgba(255,154,64,0.55)] px-[1.125rem] backdrop-blur-[1.125rem] sm:h-10 sm:gap-2.5 sm:pl-[1.125rem] sm:pr-[1.375rem]"
//             style={{
//               background:
//                 "linear-gradient(180deg, rgba(20,20,30,0.55) 0%, rgba(8,8,13,0.55) 100%)",
//               boxShadow:
//                 "inset 0 0.0625rem 0 rgba(255,175,100,0.16), 0 0 0 0.0625rem rgba(255,154,64,0.06), 0 0.25rem 1.125rem rgba(255,154,64,0.12), 0 0 2.25rem rgba(255,154,64,0.08)",
//             }}
//           >
//             <span
//               className="h-2 w-2 flex-shrink-0 rounded-full bg-[#ff9a40] sm:h-2.5 sm:w-2.5"
//               style={{
//                 boxShadow:
//                   "0 0 0.5rem rgba(255,154,64,0.9), 0 0 1rem rgba(255,154,64,0.4)",
//               }}
//             />
//             <span className="whitespace-nowrap font-['Outfit',sans-serif] text-[0.75rem] font-semibold uppercase tracking-[0.125rem] text-[#ffb36b] sm:text-[0.8125rem] sm:tracking-[0.175rem]">
//               The Reality Check
//             </span>
//           </div>
//         </motion.div>

//         {/* Heading */}
//         <motion.h2
//           custom={1}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.4 }}
//           variants={fadeUp}
//           className="mx-auto mb-[clamp(1.125rem,2.4vh,1.875rem)] max-w-[57.5rem] text-center font-['Outfit',sans-serif] text-[clamp(2rem,4.4vw,3.75rem)] font-extrabold leading-[1.02] tracking-[-0.0375rem] text-white sm:tracking-[-0.075rem]"
//         >
//           You&apos;ll see one of these.
//           <br />
//           The other one will{" "}
//           <span
//             className="bg-clip-text text-transparent"
//             style={{ backgroundImage: HEADLINE_GRADIENT }}
//           >
//             see them.
//           </span>
//         </motion.h2>

//         {/* Sub */}
//         <motion.p
//           custom={2}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.4 }}
//           variants={fadeUp}
//           className="mx-auto mb-[clamp(3.5rem,7vh,6rem)] max-w-[45rem] text-center text-[clamp(0.875rem,1.1vw,1.25rem)] font-normal leading-[1.55] text-[#8b8a98]"
//         >
//           School grades the answers your child writes down. Life grades the ones
//           they don&apos;t.
//         </motion.p>

//         {/* Cards row — entrance animates once on scroll-in */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.18 }}
//           className="relative grid grid-cols-1 items-center justify-items-center gap-14 lg:grid-cols-[1fr_auto_1fr] lg:gap-[clamp(0rem,0.4vw,0.625rem)]"
//         >
//           {/* LEFT — School Report */}
//           <motion.div
//             variants={leftSlot}
//             className="group/slot relative w-full max-w-[30rem] lg:max-w-[35rem]"
//           >
//             <article className="group relative w-full rotate-[-0.6deg] cursor-pointer rounded-[0.75rem] bg-[#fff6e8] p-[1.75rem_1.5rem_1.375rem] shadow-[0_2.125rem_4.375rem_-1.375rem_rgba(0,0,0,0.70),0_0_0_0.0625rem_rgba(255,255,255,0.05)] transition-[transform,box-shadow] duration-700 ease-smooth hover:z-[6] hover:rotate-0 hover:-translate-y-3.5 hover:scale-[1.025] hover:shadow-[0_3.75rem_6.875rem_-1.75rem_rgba(0,0,0,0.85),0_0_0_0.0625rem_rgba(255,255,255,0.10),0_0_2.25rem_rgba(255,154,64,0.10)] sm:p-[2.375rem_2.375rem_1.625rem] lg:rotate-[-1deg]">
//               <header className="mb-[1.125rem] border-b-[0.14375rem] border-[#1a0d04] pb-3.5 uppercase">
//                 <h3 className="font-['Outfit',sans-serif] text-[0.90625rem] font-black leading-[1.2] tracking-[0.11875rem] text-[#1a0d04] sm:text-[1.00625rem] sm:tracking-[0.14375rem]">
//                   St. Xavier&apos;s Senior School
//                 </h3>
//                 <p className="mt-1.5 font-['Manrope',sans-serif] text-[0.8125rem] font-normal tracking-[0.08125rem] text-[#6a4022] sm:text-[0.93125rem] sm:tracking-[0.10625rem]">
//                   Class 8 · Term Report · 2026
//                 </p>
//               </header>

//               <p className="pb-2.5 pt-1.5 font-['Outfit',sans-serif] text-[0.9375rem] font-normal text-[#1a0d04] sm:pb-3.5 sm:text-[1.075rem]">
//                 Student: Aarav Sharma
//               </p>

//               <ul className="m-0 list-none p-0">
//                 {SCHOOL_ROWS.map((r) => (
//                   <li
//                     key={r.subject}
//                     className="flex items-center justify-between border-b-[0.071875rem] border-dashed border-[rgba(26,13,4,0.22)] py-2.5 last:border-b-0 sm:py-3.5"
//                   >
//                     <span className="font-['Manrope',sans-serif] text-[0.875rem] font-semibold text-[#1a0d04] sm:text-[0.96875rem]">
//                       {r.subject}
//                     </span>
//                     <span className="whitespace-nowrap font-['JetBrains_Mono',monospace] text-[1rem] font-bold text-[#2a6b3a] sm:text-[1.15rem]">
//                       {r.grade}
//                     </span>
//                   </li>
//                 ))}
//               </ul>

//               <footer className="mt-3.5 flex items-center justify-between gap-3 border-t-[0.14375rem] border-[#1a0d04] pt-[1.125rem]">
//                 <span className="inline-block rotate-[-3deg] rounded-[0.21875rem] bg-[#2a6b3a] px-[0.6875rem] py-1.5 font-['Manrope',sans-serif] text-[0.75rem] font-extrabold tracking-[0.125rem] text-white sm:px-3.5 sm:text-[0.8625rem] sm:tracking-[0.14375rem]">
//                   PASSED
//                 </span>
//                 <span className="font-['Caveat',cursive] text-[1.375rem] font-normal leading-none text-[#1a0d04] opacity-70 sm:text-[1.725rem]">
//                   — framed on the wall
//                 </span>
//               </footer>
//             </article>
//           </motion.div>

//           {/* CENTER — VS orb */}
//           <motion.div
//             variants={orb}
//             className="relative z-[4] flex flex-col items-center gap-[1.125rem]"
//           >
//             <div className="flex h-[3.75rem] w-[3.75rem] items-center justify-center rounded-full border-[0.09375rem] border-[rgba(255,154,64,0.30)] bg-[linear-gradient(180deg,rgba(255,154,64,0.04)_0%,rgba(255,122,24,0.015)_100%)] backdrop-blur-[0.5rem] shadow-[inset_0_0.0625rem_0_rgba(255,255,255,0.10),0_0.5rem_1.5rem_rgba(0,0,0,0.25)] sm:h-[4.375rem] sm:w-[4.375rem]">
//               <span className="font-['Outfit',sans-serif] text-[1.25rem] font-extrabold italic tracking-[-0.0625rem] text-[#ff9a40] sm:text-[1.5rem]">
//                 VS
//               </span>
//             </div>
//             <div className="text-center font-['Poppins',sans-serif] text-[0.6875rem] font-normal uppercase leading-[1.25] tracking-[0.09375rem] text-[#8b8a98] sm:text-[0.75rem] sm:tracking-[0.125rem]">
//               THE ONE
//               <br />
//               NO ONE
//               <br />
//               HANDS YOU
//             </div>
//           </motion.div>

//           {/* RIGHT — Life Curriculum */}
//           <motion.div
//             variants={rightSlot}
//             className="group/slot relative w-full max-w-[30rem] lg:max-w-[35rem]"
//           >
//             <article className="group relative w-full rotate-[0.8deg] cursor-pointer rounded-[0.75rem] bg-[#f8f0e0] p-[1.75rem_1.5rem_1.375rem] shadow-[0_2.125rem_4.375rem_-1.375rem_rgba(0,0,0,0.70),0_0_0_0.0625rem_rgba(255,255,255,0.05)] transition-[transform,box-shadow] duration-700 ease-smooth hover:z-[6] hover:rotate-0 hover:-translate-y-3.5 hover:scale-[1.025] hover:shadow-[0_3.75rem_6.875rem_-1.75rem_rgba(0,0,0,0.85),0_0_0_0.0625rem_rgba(255,255,255,0.10),0_0_2.25rem_rgba(255,154,64,0.10)] sm:p-[2.375rem_2.375rem_1.625rem] lg:rotate-[1.2deg]">
//               <header className="mb-[1.125rem] border-b-[0.14375rem] border-[#1a0d04] pb-3.5 uppercase">
//                 <h3 className="font-['Outfit',sans-serif] text-[0.90625rem] font-black leading-[1.2] tracking-[0.11875rem] text-[#e94a3f] sm:text-[1.00625rem] sm:tracking-[0.14375rem]">
//                   The Life Curriculum
//                 </h3>
//                 <p className="mt-1.5 font-['Manrope',sans-serif] text-[0.8125rem] font-normal tracking-[0.08125rem] text-[#6a4022] sm:text-[0.93125rem] sm:tracking-[0.10625rem]">
//                   Same Child · Same Year · No Exam Date
//                 </p>
//               </header>

//               <p className="pb-2.5 pt-1.5 font-['Outfit',sans-serif] text-[0.9375rem] font-normal text-[#1a0d04] sm:pb-3.5 sm:text-[1.075rem]">
//                 Student: Aarav Sharma
//               </p>

//               <ul className="m-0 list-none p-0">
//                 {LIFE_ROWS.map((subject) => (
//                   <li
//                     key={subject}
//                     className="flex items-center justify-between border-b-[0.071875rem] border-dashed border-[rgba(26,13,4,0.22)] py-2.5 last:border-b-0 sm:py-3.5"
//                   >
//                     <span className="font-['Manrope',sans-serif] text-[0.875rem] font-semibold text-[#1a0d04] sm:text-[0.96875rem]">
//                       {subject}
//                     </span>
//                     <span className="font-['Caveat',cursive] text-[1.5625rem] font-bold leading-none text-[#b0a090] sm:text-[1.86875rem]">
//                       —
//                     </span>
//                   </li>
//                 ))}
//               </ul>

//               <footer className="mt-3.5 flex items-center justify-between gap-3 border-t-[0.14375rem] border-[#1a0d04] pt-[1.125rem]">
//                 <span className="inline-block rotate-[-3deg] rounded-[0.21875rem] bg-[#e94a3f] px-[0.6875rem] py-1.5 font-['Manrope',sans-serif] text-[0.75rem] font-extrabold tracking-[0.125rem] text-white sm:px-3.5 sm:text-[0.8625rem] sm:tracking-[0.14375rem]">
//                   UNGRADED
//                 </span>
//                 <span className="font-['Caveat',cursive] text-[1.375rem] font-normal leading-none text-[#ff1000] opacity-60 sm:text-[1.725rem]">
//                   — but lived every day
//                 </span>
//               </footer>
//             </article>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }





"use client";

import { motion } from "framer-motion";

const HEADLINE_GRADIENT =
  "linear-gradient(101.87deg, #ffb13d 0%, #ff7a18 26%, #ff4d8d 64%, #a24bff 100%)";

const SMOOTH = [0.16, 1, 0.3, 1] as const;

// header pieces fade up on scroll-in
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: "easeOut" },
  }),
};

// Entrance: cards start pulled toward center + rotated (look stacked behind the
// orb), then slide apart to their resting tilt when the row scrolls into view.
const leftSlot = {
  hidden: { x: "72%", rotate: -14, opacity: 0 },
  visible: {
    x: 0,
    rotate: 0,
    opacity: 1,
    transition: {
      x: { duration: 1.5, ease: SMOOTH, delay: 0.15 },
      rotate: { duration: 1.5, ease: SMOOTH, delay: 0.15 },
      opacity: { duration: 0.9, ease: "easeOut", delay: 0.15 },
    },
  },
};
const rightSlot = {
  hidden: { x: "-72%", rotate: 14, opacity: 0 },
  visible: {
    x: 0,
    rotate: 0,
    opacity: 1,
    transition: {
      x: { duration: 1.5, ease: SMOOTH, delay: 0.3 },
      rotate: { duration: 1.5, ease: SMOOTH, delay: 0.3 },
      opacity: { duration: 0.9, ease: "easeOut", delay: 0.3 },
    },
  },
};
const orb = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      opacity: { duration: 0.9, ease: "easeOut", delay: 0.55 },
      scale: { duration: 0.9, ease: SMOOTH, delay: 0.55 },
    },
  },
};

export default function RealityCheck() {
  return (
    <section
      className="relative w-full overflow-hidden px-[clamp(1.125rem,4vw,4.5rem)] py-[clamp(3rem,8vh,7.5rem)] font-['Poppins',sans-serif] antialiased text-white bg-[#050507]"
    //   style={{ background: "linear-gradient(180deg, #0a0a14 0%, #08080d 100%)" }}

    >
      {/* warm glow */}
      {/* <div
        className="pointer-events-none absolute left-1/2 top-[-7.5rem] z-0 h-[33.75rem] w-[min(106.25rem,90vw)] -translate-x-1/2"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 50% 30%, rgba(255,138,43,0.08) 0%, rgba(255,138,43,0) 65%)",
        }}
      /> */}

      <div className="relative z-[1] mx-auto max-w-[100rem]">
        {/* Pill — reusable orange-glow */}
        <motion.div
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="mb-[clamp(1.375rem,2.8vh,2.25rem)] flex justify-center"
        >
          <div
            className="inline-flex h-9 items-center gap-2.5 rounded-full border border-[rgba(255,154,64,0.55)] px-[1.125rem] backdrop-blur-[1.125rem] sm:h-10 sm:gap-2.5 sm:pl-[1.125rem] sm:pr-[1.375rem]"
            style={{
              background:
                "linear-gradient(180deg, rgba(20,20,30,0.55) 0%, rgba(8,8,13,0.55) 100%)",
              boxShadow:
                "inset 0 0.0625rem 0 rgba(255,175,100,0.16), 0 0 0 0.0625rem rgba(255,154,64,0.06), 0 0.25rem 1.125rem rgba(255,154,64,0.12), 0 0 2.25rem rgba(255,154,64,0.08)",
            }}
          >
            <span
              className="h-2 w-2 flex-shrink-0 rounded-full bg-[#ff9a40] sm:h-2.5 sm:w-2.5"
              style={{
                boxShadow:
                  "0 0 0.5rem rgba(255,154,64,0.9), 0 0 1rem rgba(255,154,64,0.4)",
              }}
            />
            <span className="whitespace-nowrap font-['Outfit',sans-serif] text-[0.75rem] font-semibold uppercase tracking-[0.125rem] text-[#ffb36b] sm:text-[0.8125rem] sm:tracking-[0.175rem]">
              The Reality Check
            </span>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h2
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="mx-auto mb-[clamp(1.125rem,2.4vh,1.875rem)] max-w-[52rem] text-center font-['Outfit',sans-serif] text-[clamp(1.625rem,3.6vw,3rem)] font-extrabold leading-[1.04] tracking-[-0.0375rem] text-white sm:tracking-[-0.06rem]"
        >
          You&apos;ll see one of these.
          <br />
          The other one will{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: HEADLINE_GRADIENT }}
          >
            see them.
          </span>
        </motion.h2>

        {/* Sub */}
        <motion.p
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="mx-auto mb-[clamp(3.5rem,7vh,6rem)] max-w-[42rem] text-center text-[clamp(0.8125rem,1vw,1.0625rem)] font-normal leading-[1.55] text-[#8b8a98]"
        >
          School grades the answers your child writes down. Life grades the ones
          they don&apos;t.
        </motion.p>

        {/* Cards row — entrance animates once on scroll-in */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          className="relative grid grid-cols-1 items-center justify-items-center gap-14 lg:grid-cols-[1fr_auto_1fr] lg:gap-[clamp(0rem,0.4vw,0.625rem)]"
        >
          {/* LEFT — School Report */}
          <motion.div
            variants={leftSlot}
            className="group/slot relative w-full max-w-[30rem] lg:max-w-[35rem]"
          >
            <img
              src="/images/checkreality/check-reality-1.webp"
              alt="School report card"
              className="w-full cursor-pointer select-none rotate-[-0.6deg] rounded-[0.75rem] shadow-[0_2.125rem_4.375rem_-1.375rem_rgba(0,0,0,0.70),0_0_0_0.0625rem_rgba(255,255,255,0.05)] transition-[transform,box-shadow] duration-700 ease-smooth hover:z-[6] hover:rotate-0 hover:-translate-y-3.5 hover:scale-[1.025] hover:shadow-[0_3.75rem_6.875rem_-1.75rem_rgba(0,0,0,0.85),0_0_0_0.0625rem_rgba(255,255,255,0.10),0_0_2.25rem_rgba(255,154,64,0.10)] lg:rotate-[-1deg]"
            />
          </motion.div>

          {/* CENTER — VS orb */}
          <motion.div
            variants={orb}
            className="relative z-[4] flex flex-col items-center gap-[1.125rem]"
          >
            <div className="flex h-[3.75rem] w-[3.75rem] items-center justify-center rounded-full border-[0.09375rem] border-[rgba(255,154,64,0.30)] bg-[linear-gradient(180deg,rgba(255,154,64,0.04)_0%,rgba(255,122,24,0.015)_100%)] backdrop-blur-[0.5rem] shadow-[inset_0_0.0625rem_0_rgba(255,255,255,0.10),0_0.5rem_1.5rem_rgba(0,0,0,0.25)] sm:h-[4.375rem] sm:w-[4.375rem]">
              <span className="font-['Outfit',sans-serif] text-[1.25rem] font-extrabold italic tracking-[-0.0625rem] text-[#ff9a40] sm:text-[1.5rem]">
                VS
              </span>
            </div>
            <div className="text-center font-['Poppins',sans-serif] text-[0.6875rem] font-semibold uppercase leading-[1.25] tracking-[0.09375rem] text-[#8b8a98] sm:text-[1.0rem] sm:tracking-[0.125rem]">
              THE ONE
              <br />
              NO ONE
              <br />
              GIVES YOU
            </div>
          </motion.div>

          {/* RIGHT — Life Curriculum */}
          <motion.div
            variants={rightSlot}
            className="group/slot relative w-full max-w-[30rem] lg:max-w-[35rem]"
          >
            <img
              src="/images/checkreality/check-reality-2.webp"
              alt="The life curriculum"
              className="w-full cursor-pointer select-none rotate-[0.8deg] rounded-[0.75rem] shadow-[0_2.125rem_4.375rem_-1.375rem_rgba(0,0,0,0.70),0_0_0_0.0625rem_rgba(255,255,255,0.05)] transition-[transform,box-shadow] duration-700 ease-smooth hover:z-[6] hover:rotate-0 hover:-translate-y-3.5 hover:scale-[1.025] hover:shadow-[0_3.75rem_6.875rem_-1.75rem_rgba(0,0,0,0.85),0_0_0_0.0625rem_rgba(255,255,255,0.10),0_0_2.25rem_rgba(255,154,64,0.10)] lg:rotate-[1.2deg]"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}