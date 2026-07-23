// // // "use client";

// // // import { motion } from "framer-motion";
// // // import { containerClass, SectionHeader } from "@/components/ui/UI";

// // // const PHASES = [
// // //   {
// // //     badge: "Live Now",
// // //     badgeType: "live" as const,
// // //     num: "01",
// // //     title: "Foundation Engine",
// // //     subtitle: "Ages 6–12 · Beginner to Intermediate",
// // //     items: [
// // //       "Scratch & block-based programming",
// // //       "Python fundamentals via projects",
// // //       "Game design & interactive stories",
// // //       "Digital literacy & internet safety",
// // //       "AICTE-certified completion badge",
// // //     ],
// // //   },
// // //   {
// // //     badge: "Coming Next",
// // //     badgeType: "next" as const,
// // //     num: "02",
// // //     title: "Builder Accelerator",
// // //     subtitle: "Ages 12–16 · Intermediate to Advanced",
// // //     items: [
// // //       "Web development (HTML, CSS, JS)",
// // //       "App development with React Native",
// // //       "Data science & visualisation",
// // //       "Peer team project sprints",
// // //       "Portfolio-ready capstone project",
// // //     ],
// // //   },
// // //   {
// // //     badge: "Vision",
// // //     badgeType: "vision" as const,
// // //     num: "03",
// // //     title: "AI & Future Tech",
// // //     subtitle: "Ages 14–18 · Advanced",
// // //     items: [
// // //       "Machine learning fundamentals",
// // //       "Prompt engineering & AI tools",
// // //       "Robotics & IoT integration",
// // //       "Startup & entrepreneurship track",
// // //       "Industry mentorship program",
// // //     ],
// // //   },
// // // ];

// // // const badgeStyles = {
// // //   live: {
// // //     className: "text-[#f97316]",
// // //     style: { background: "rgba(249,115,22,0.15)", border: "1px solid rgba(249,115,22,0.3)" },
// // //   },
// // //   next: {
// // //     className: "text-[#60a5fa]",
// // //     style: { background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.2)" },
// // //   },
// // //   vision: {
// // //     className: "text-[#a78bfa]",
// // //     style: { background: "rgba(167,139,250,0.1)", border: "1px solid rgba(167,139,250,0.2)" },
// // //   },
// // // };

// // // const cardVariants = {
// // //   hidden: { opacity: 0, y: 28 },
// // //   visible: (i: number) => ({
// // //     opacity: 1, y: 0,
// // //     transition: { duration: 0.45, delay: i * 0.1, ease: "easeOut" },
// // //   }),
// // // };

// // // export default function AiRoadmap() {
// // //   return (
// // //     <section id="ai" className="py-[100px] relative z-[1] bg-[#0a0e1f]">
// // //       <div className={containerClass}>
// // //         <SectionHeader
// // //           tag="AI Roadmap"
// // //           heading={<>The path from curious<br /><em className="text-[#f97316] not-italic">to unstoppable</em></>}
// // //           sub="A structured three-phase journey that takes any child from zero to industry-ready — at their own pace."
// // //         />

// // //         {/* .ai-phases — repeat(3,1fr) */}
// // //         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
// // //           {PHASES.map((phase, i) => {
// // //             const badge = badgeStyles[phase.badgeType];
// // //             return (
// // //               <motion.div
// // //                 key={phase.title}
// // //                 custom={i}
// // //                 initial="hidden"
// // //                 whileInView="visible"
// // //                 viewport={{ once: true, amount: 0.15 }}
// // //                 variants={cardVariants}
// // //                 /* .ai-phase */
// // //                 className="relative bg-[#04060f] border border-white/[0.08] rounded-[20px] p-8 overflow-hidden transition-all duration-300 hover:border-[rgba(167,139,250,0.3)]"
// // //               >
// // //                 {/* .phase-num — ghost number */}
// // //                 <span
// // //                   className="absolute top-2 right-5 font-black text-[3rem] leading-none pointer-events-none select-none text-white"
// // //                   style={{ opacity: 0.08, fontFamily: "'Rubik', sans-serif" }}
// // //                 >
// // //                   {phase.num}
// // //                 </span>

// // //                 {/* .phase-badge */}
// // //                 <span
// // //                   className={`inline-block text-[0.7rem] font-bold tracking-[0.08em] uppercase px-2.5 py-0.5 rounded-full mb-4 ${badge.className}`}
// // //                   style={{ ...badge.style, fontFamily: "'Rubik', sans-serif" }}
// // //                 >
// // //                   {phase.badge}
// // //                 </span>

// // //                 {/* heading */}
// // //                 <h3 className="text-white font-black text-[1.1rem] mb-1" style={{ fontFamily: "'Rubik', sans-serif" }}>
// // //                   {phase.title}
// // //                 </h3>
// // //                 <h4 className="text-[#9ca3af] text-[0.85rem] font-normal mb-4">{phase.subtitle}</h4>

// // //                 {/* list */}
// // //                 <ul className="list-none p-0 m-0 flex flex-col">
// // //                   {phase.items.map((item, j) => (
// // //                     <li
// // //                       key={item}
// // //                       className={`flex items-start gap-2.5 text-[0.82rem] text-[#9ca3af] py-1.5 font-light leading-[1.5] ${
// // //                         j < phase.items.length - 1 ? "border-b border-white/[0.06]" : ""
// // //                       }`}
// // //                     >
// // //                       {/* ::before → */}
// // //                       <span className="text-[#f97316] text-[0.8rem] flex-shrink-0 mt-[2px]">→</span>
// // //                       {item}
// // //                     </li>
// // //                   ))}
// // //                 </ul>
// // //               </motion.div>
// // //             );
// // //           })}
// // //         </div>

// // //         {/* .ai-flywheel */}
// // //         <motion.div
// // //           initial={{ opacity: 0, y: 16 }}
// // //           whileInView={{ opacity: 1, y: 0 }}
// // //           viewport={{ once: true, amount: 0.4 }}
// // //           transition={{ duration: 0.5, delay: 0.3 }}
// // //           className="mt-10 bg-[#04060f] rounded-[20px] px-10 py-8 text-center"
// // //           style={{ border: "1px solid rgba(249,115,22,0.25)" }}
// // //         >
// // //           <p className="text-white font-bold text-[1rem] mb-1.5">
// // //             {/* YOUR FLYWHEEL STATEMENT */}
// // //           </p>
// // //           <span className="text-[#9ca3af] text-[0.85rem]">
// // //             {/* YOUR FLYWHEEL SUBLINE */}
// // //           </span>
// // //         </motion.div>

// // //       </div>
// // //     </section>
// // //   );
// // // }


// // "use client";

// // import { motion } from "framer-motion";
// // import { containerClass, SectionHeader } from "@/components/ui/UI";

// // /* ── data ── */
// // const PHASES = [
// //   {
// //     num: "01",
// //     badge: "● Live Now",
// //     badgeStyle: {
// //       background: "rgba(249,115,22,0.15)",
// //       color: "#f97316",
// //       border: "1px solid rgba(249,115,22,0.25)",
// //     },
// //     h3: "Knowledge AI",
// //     h4: "UltiMate Assistant",
// //     items: [
// //       "Clear, practical answers to everyday parenting questions — so you know what to do in the moment",
// //       "Understand the app's approach and philosophy — so you can use it with clarity and purpose",
// //       "Guidance tailored to your situation — not generic advice",
// //       "Reliable, thoughtful insights you can trust — building your confidence as a parent",
// //       // "Phase 1 does not access user data",
// //     ],
// //   },
// //   {
// //     num: "02",
// //     badge: "Coming Next",
// //     badgeStyle: {
// //       background: "rgba(59,130,246,0.1)",
// //       color: "#60a5fa",
// //       border: "1px solid rgba(59,130,246,0.2)",
// //     },
// //     h3: "Contextual AI",
// //     h4: "In-App Guidance Engine",
// //     items: [
// //       "Understands your journey in the app — so guidance always feels relevant to you",
// //       "Suggests the next best activity — so you always know what to do next with your child",
// //       "Gentle, timely nudges — helping you stay consistent without feeling overwhelmed",
// //       "Meaningful daily prompts — making it easier to connect and engage with your child",
// //       // "Uses app usage data — not personal data",
// //     ],
// //   },
// //   {
// //     num: "03",
// //     badge: "The Vision",
// //     badgeStyle: {
// //       background: "rgba(167,139,250,0.1)",
// //       color: "#a78bfa",
// //       border: "1px solid rgba(167,139,250,0.2)",
// //     },
// //     h3: "Personalised AI",
// //     h4: "Family Intelligence Engine",
// //     items: [
// //       "Understands your child's strengths and progress — so guidance truly fits your child",
// //       "Tracks growth over time — helping you see what's improving and what needs attention",
// //       "Recommends tailored activities — so every effort creates real impact",
// //       "Anticipates potential gaps early — so you can support your child before challenges grow",
// //       // "Maps your entire family journey longitudinally",
// //     ],
// //   },
// // ];

// // const cardVariants = {
// //   hidden: { opacity: 0, y: 20 },
// //   visible: (i: number) => ({
// //     opacity: 1, y: 0,
// //     transition: { duration: 0.4, delay: i * 0.1, ease: "easeOut" },
// //   }),
// // };

// // export default function AiRoadmap() {
// //   return (
// //     <section
// //       id="ai"
// //       className="py-[100px] relative z-[1]"
// //       style={{ background: "#0a0e1f" }}
// //     >
// //       <div className={containerClass}>

// //         {/* .section-header.reveal */}
// //         <SectionHeader
// //           tag="AI That Grows With Your Family"
// //           heading={
// //             <>
// //               Intelligence That Gets
// //               <br />
// //               More Personal Over Time.
// //             </>
// //           }
// //           sub="A deliberate three-phase approach — starting with trust, building with data, culminating in true personalisation for your unique family."
// //         />

// //         {/* .ai-phases.reveal */}
// //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
// //           {PHASES.map((phase, i) => (
// //             <motion.div
// //               key={phase.num}
// //               custom={i}
// //               initial="hidden"
// //               whileInView="visible"
// //               viewport={{ once: true, amount: 0.2 }}
// //               variants={cardVariants}
// //               /* .ai-phase */
// //               className="bg-[#04060f] border border-white/[0.08] rounded-[20px] p-8 relative overflow-hidden transition-all duration-300 hover:border-[rgba(167,139,250,0.3)]"
// //             >
// //               {/* .phase-num — ghost large number */}
// //               <span
// //                 className="absolute top-2 right-5 font-black text-[3rem] text-white leading-none select-none"
// //                 style={{ opacity: 0.08, fontFamily: "'Rubik', sans-serif" }}
// //               >
// //                 {phase.num}
// //               </span>

// //               {/* .phase-badge */}
// //               <span
// //                 className="inline-block text-[0.7rem] font-bold tracking-[0.08em] uppercase px-2.5 py-0.5 rounded-full mb-4"
// //                 style={{ fontFamily: "'Rubik', sans-serif", ...phase.badgeStyle }}
// //               >
// //                 {phase.badge}
// //               </span>

// //               {/* h3 */}
// //               <h3
// //                 className="text-white font-black text-[1.1rem] mb-1"
// //                 style={{ fontFamily: "'Rubik', sans-serif" }}
// //               >
// //                 {phase.h3}
// //               </h3>

// //               {/* h4 */}
// //               <h4 className="text-[#9ca3af] text-[0.85rem] font-normal mb-4">{phase.h4}</h4>

// //               {/* ul */}
// //               <ul className="list-none p-0 space-y-0">
// //                 {phase.items.map((item, j) => (
// //                   <li
// //                     key={j}
// //                     className="flex items-start gap-2.5 text-[0.82rem] text-[#9ca3af] font-light leading-[1.5] py-1.5 border-b border-white/[0.06] last:border-b-0"
// //                   >
// //                     {/* ::before → */}
// //                     <span className="text-[#f97316] flex-shrink-0 text-[0.8rem] mt-0.5">→</span>
// //                     {item}
// //                   </li>
// //                 ))}
// //               </ul>
// //             </motion.div>
// //           ))}
// //         </div>

// //         {/* .ai-flywheel.reveal */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 16 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //           transition={{ duration: 0.5, delay: 0.3 }}
// //           className="mt-10 rounded-[20px] px-10 py-8 text-center"
// //           // style={{ border: "1px solid rgba(249,115,22,0.25)" }}
// //         >
// //           {/* p — flywheel statement */}
// //           <p className="text-white font-bold text-[1rem] mb-1.5 leading-[1.6]">
// //             From knowledge → to context → to <span className="text-[#f97316]">knowing your child</span>
// //           </p>

// //           {/* span — subline */}
// //           <span className="text-[#9ca3af] text-[0.85rem]">
// //             Each layer builds on the last — growing smarter as your family grows
// //           </span>
// //         </motion.div>

// //       </div>
// //     </section>
// //   );
// // }



// /**
//  * AiRoadmap — "AI That Grows With Your Family"
//  *
//  * SERVER COMPONENT. No "use client" needed:
//  *  - no state, no hooks, no event handlers
//  *  - the only interactivity is CSS :hover on the cards (pure CSS, no JS)
//  *
//  * Tailwind-first. A small scoped <style> block holds ONLY the mask-composite
//  * gradient border ring, which Tailwind can't express cleanly.
//  *
//  * Fonts: Outfit + Poppins must be loaded globally.
//  */

// type BadgeTone = "green" | "blue" | "violet";

// type Card = {
//   num: string;
//   badge: string;
//   tone: BadgeTone;
//   showDot: boolean;
//   title: string;
//   eyebrow: string;
//   points: string[];
// };

// const CARDS: Card[] = [
//   {
//     num: "01",
//     badge: "Live Now",
//     tone: "green",
//     showDot: true,
//     title: "Knowledge AI",
//     eyebrow: "UltiMate Assistant",
//     points: [
//       "Clear, practical answers to everyday parenting questions",
//       "Guidance tailored to your situation — not generic advice",
//       "Reliable insights that build your confidence as a parent",
//     ],
//   },
//   {
//     num: "02",
//     badge: "Coming Next",
//     tone: "blue",
//     showDot: false,
//     title: "Contextual AI",
//     eyebrow: "In-App Guidance Engine",
//     points: [
//       "Understands your journey so guidance always feels relevant",
//       "Suggests the next best activity for your child",
//       "Gentle, timely nudges that keep you consistent",
//     ],
//   },
//   {
//     num: "03",
//     badge: "The Vision",
//     tone: "violet",
//     showDot: false,
//     title: "Personalised AI",
//     eyebrow: "Family Intelligence Engine",
//     points: [
//       "Understands your child's strengths and progress",
//       "Recommends tailored activities for real impact",
//       "Anticipates gaps early — so you can act before they grow",
//     ],
//   },
// ];

// const BADGE_TONE: Record<BadgeTone, string> = {
//   green:
//     "text-[#34d67e] bg-[rgba(52,214,126,0.12)] border border-[rgba(52,214,126,0.25)]",
//   blue: "text-[#4ba8ff] bg-[rgba(75,168,255,0.12)] border border-[rgba(75,168,255,0.25)]",
//   violet:
//     "text-[#a24bff] bg-[rgba(162,75,255,0.12)] border border-[rgba(162,75,255,0.28)]",
// };

// export default function AiRoadmap() {
//   return (
//     <section className="relative w-full bg-[#050507] px-[clamp(20px,4vw,48px)] py-[clamp(56px,7vw,110px)] font-['Poppins',sans-serif] text-[#c3c2ce] antialiased">
//       <div className="mx-auto max-w-[1240px]">
//         {/* Pill */}
//         <div className="mb-[26px] flex justify-center">
//           <div className="inline-flex h-9 items-center gap-2.5 rounded-full border-[1.029px] border-[rgba(255,154,64,0.25)] bg-[linear-gradient(180deg,rgba(255,154,64,0.03)_0%,rgba(255,122,24,0.01)_100%)] px-[18px] shadow-[inset_0_1.029px_0_rgba(255,255,255,0.16)]">
//             <span className="h-[7.2px] w-[7.2px] rounded-full bg-[#ff9a40] shadow-[0_0_8.229px_#ff9a40]" />
//             <span className="font-['Outfit',sans-serif] text-[12.343px] font-semibold uppercase tracking-[1.9749px] text-[#ffb36b]">
//               AI That Grows With Your Family
//             </span>
//           </div>
//         </div>

//         {/* Heading */}
//         <h2 className="mx-auto mb-[22px] max-w-[760px] text-center font-['Outfit',sans-serif] text-[clamp(34px,4.6vw,60px)] font-extrabold leading-[1.02] tracking-[-1.2px] text-white max-[560px]:tracking-[-0.6px]">
//           Intelligence that gets{" "}
//           <span className="bg-[linear-gradient(98.35deg,#FFB13D_0%,#FF7A18_26%,#FF4D8D_64%,#A24BFF_100%)] bg-clip-text text-transparent">
//             more personal over time.
//           </span>
//         </h2>

//         {/* Subtitle */}
//         <p className="mx-auto mb-[clamp(40px,5vw,64px)] max-w-[720px] text-center text-[clamp(16px,1.5vw,20px)] font-normal leading-[1.62] text-[#8b8a98]">
//           A deliberate three-phase approach — starting with trust, building with
//           data, culminating in true personalisation for your unique family.
//         </p>

//         {/* Cards */}
//         <div className="grid grid-cols-3 gap-6 max-[900px]:mx-auto max-[900px]:max-w-[520px] max-[900px]:grid-cols-1 max-[900px]:gap-5">
//           {CARDS.map((c) => (
//             <article
//               key={c.num}
//               className="ai-card relative min-h-[340px] rounded-[28px] bg-[linear-gradient(180deg,rgba(22,22,30,0.55)_0%,rgba(9,9,14,0.42)_100%)] p-8 backdrop-blur-[24px] backdrop-saturate-[130%] max-[900px]:min-h-0 max-[560px]:p-[26px]"
//             >
//               <div className="mb-[34px] flex items-start justify-between gap-3 max-[560px]:mb-[26px]">
//                 <span className="font-['Outfit',sans-serif] text-[14px] font-extrabold text-[#5c5b68]">
//                   {c.num}
//                 </span>
//                 <span
//                   className={`inline-flex h-[29px] items-center gap-[7px] rounded-full px-3 font-['Outfit',sans-serif] text-[11px] font-semibold uppercase tracking-[0.88px] ${BADGE_TONE[c.tone]}`}
//                 >
//                   {c.showDot && (
//                     <span className="h-1.5 w-1.5 rounded-full bg-current" />
//                   )}
//                   {c.badge}
//                 </span>
//               </div>

//               <h3 className="mb-2 font-['Outfit',sans-serif] text-[24px] font-extrabold leading-[1.05] tracking-[-0.2px] text-white">
//                 {c.title}
//               </h3>
//               <p className="mb-[22px] text-[14px] font-normal text-[#ffb36b]">
//                 {c.eyebrow}
//               </p>

//               <ul className="flex list-none flex-col gap-3.5">
//                 {c.points.map((p) => (
//                   <li key={p} className="flex items-start gap-3">
//                     <span className="mt-[3px] h-3.5 w-3.5 flex-none text-[#ff9a40]">
//                       <ArrowIcon />
//                     </span>
//                     <span className="text-[14px] font-normal leading-[1.5] text-[#8b8a98]">
//                       {p}
//                     </span>
//                   </li>
//                 ))}
//               </ul>
//             </article>
//           ))}
//         </div>

//         {/* Footer line */}
//         <p className="mx-auto mt-[clamp(36px,4vw,56px)] max-w-[760px] text-center text-[clamp(16px,1.5vw,20px)] font-normal leading-[1.62] text-[#8b8a98]">
//           From knowledge <span className="text-[#ff9a40]">→</span> to context{" "}
//           <span className="text-[#ff9a40]">→</span> to knowing your child. Each
//           layer builds on the last.
//         </p>
//       </div>

//       {/*
//         Minimal CSS — only the premium glass border ring (mask-composite) and
//         the hover shadow/transform, which Tailwind can't express cleanly.
//         Plain <style> (not styled-jsx) so this stays a server component.
//       */}
//       <style
//         dangerouslySetInnerHTML={{
//           __html: `
//         .ai-card {
//           box-shadow: inset 0 1px 0 rgba(255,255,255,0.08),
//             inset 0 -1px 0 rgba(255,255,255,0.03),
//             0 26px 60px rgba(0,0,0,0.5);
//           transition: transform .5s cubic-bezier(0.22,1,0.36,1),
//             box-shadow .5s cubic-bezier(0.22,1,0.36,1);
//         }
//         .ai-card::after {
//           content: '';
//           position: absolute;
//           inset: 0;
//           border-radius: inherit;
//           padding: 1px;
//           background: linear-gradient(155deg,
//             rgba(255,255,255,0.34) 0%,
//             rgba(255,255,255,0.10) 20%,
//             rgba(255,255,255,0.03) 52%,
//             rgba(255,255,255,0.07) 80%,
//             rgba(255,255,255,0.16) 100%);
//           -webkit-mask: linear-gradient(#000 0 0) content-box,
//             linear-gradient(#000 0 0);
//           -webkit-mask-composite: xor;
//           mask-composite: exclude;
//           pointer-events: none;
//         }
//         .ai-card:hover {
//           transform: translateY(-4px);
//           box-shadow: inset 0 1px 0 rgba(255,255,255,0.12),
//             0 34px 78px rgba(0,0,0,0.6);
//         }
//         @media (prefers-reduced-motion: reduce) {
//           .ai-card { transition-duration: 0.001ms !important; }
//         }
//       `,
//         }}
//       />
//     </section>
//   );
// }

// /* Static SVG — no client JS needed */
// function ArrowIcon() {
//   return (
//     <svg viewBox="0 0 14 14" fill="none" className="block h-full w-full">
//       <path
//         d="M2.5 7h8M7.5 3.5 11 7l-3.5 3.5"
//         stroke="currentColor"
//         strokeWidth="1.6"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//     </svg>
//   );
// }