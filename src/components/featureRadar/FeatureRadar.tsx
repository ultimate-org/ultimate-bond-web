// // "use client";

// // import { motion } from "framer-motion";
// // import { ArrowRight } from "lucide-react";
// // import { containerClass, SectionHeader } from "@/components/ui/UI";

// // /* ─── Features data ─── */
// // const FEATURES = [
// //   { icon: "🧩", title: "Project-Based Learning",  body: "Every concept is taught through real projects — not theory. Students build, ship and iterate from day one.", skill: "Critical Thinking" },
// //   { icon: "🤖", title: "AI & Coding Tracks",       body: "From Scratch to Python to AI — age-appropriate tracks that grow with the student over years.", skill: "Technical Fluency" },
// //   { icon: "🎨", title: "Design & Creativity",      body: "UI/UX, game design and digital art — because the future needs builders who also think beautifully.", skill: "Creative Problem Solving" },
// //   { icon: "🧑‍🤝‍🧑", title: "Peer Collaboration",    body: "Team projects and peer reviews mirror real-world workflows and build communication skills early.", skill: "Teamwork" },
// //   { icon: "📊", title: "Live Progress Tracking",   body: "Parents and students see exactly what's been mastered, what's next and where to focus.", skill: "Self-Awareness" },
// //   { icon: "🏅", title: "Certifications & Badges",  body: "AICTE-recognised certificates and skill badges that carry real credibility with schools and colleges.", skill: "Recognised Credentials" },
// // ];

// // /* ─── Radar data ─── */
// // const INSIGHTS = [
// //   { text: <><strong className="text-white font-medium">78% of parents</strong> say they don't know what their child is actually learning online.</> },
// //   { text: <><strong className="text-white font-medium">Screen time without purpose</strong> is the #1 concern for parents of children aged 8–14.</> },
// //   { text: <><strong className="text-white font-medium">Only 1 in 5 schools</strong> in India has a structured digital skills curriculum.</> },
// //   { text: <><strong className="text-white font-medium">Parents who see progress reports</strong> are 3× more likely to continue enrolment.</> },
// // ];

// // const RADAR_CARDS = [
// //   // {
// //   //   label: "",
// //   //   heading: "Safe, moderated environment",
// //   //   body: "No open chat, no external links, no distractions. Every session is monitored and every interaction is age-appropriate.",
// //   //   action: "See safety features",
// //   // },
// //   {
// //     label: "Parenting Insight",
// //     heading: "You can see everything",
// //     body: "A live parent dashboard shows session attendance, project progress, skill milestones and mentor feedback — all in one place.",
// //     action: "View dashboard demo",
// //   },
// //   {
// //     label: "Child Safety",
// //     heading: "Safe, moderated environment",
// //     body: "No open chat, no external links, no distractions. Every session is monitored and every interaction is age-appropriate.",
// //     action: "See safety features",
// //   },
// // ];

// // const cardVariants = {
// //   hidden: { opacity: 0, y: 24 },
// //   visible: (i: number) => ({
// //     opacity: 1, y: 0,
// //     transition: { duration: 0.45, delay: i * 0.08, ease: "easeOut" },
// //   }),
// // };

// // export default function FeaturesRadar() {
// //   return (
// //     <>
// //       {/* ══════════════════════════════════════
// //           FEATURES
// //       ══════════════════════════════════════ */}
// //       <section id="features" className="py-[100px] relative z-[1] bg-[#0a0e1f]">
// //         <div className={containerClass}>
// //           <SectionHeader
// //             tag="What's Inside"
// //             heading={<>Everything a young<br /><em className="text-[#f97316] not-italic">builder needs</em></>}
// //             sub="A complete learning ecosystem — not just videos. Projects, mentors, certifications and a community."
// //           />

// //           {/* .features-grid — repeat(3,1fr) */}
// //           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
// //             {FEATURES.map((f, i) => (
// //               <motion.div
// //                 key={f.title}
// //                 custom={i}
// //                 initial="hidden"
// //                 whileInView="visible"
// //                 viewport={{ once: true, amount: 0.15 }}
// //                 variants={cardVariants}
// //                 /* .feature-card */
// //                 className="relative bg-[#04060f] border border-white/[0.08] rounded-[18px] p-6 overflow-hidden transition-all duration-300 hover:-translate-y-[3px] hover:border-[rgba(249,115,22,0.25)]"
// //               >
// //                 {/* .feature-icon */}
// //                 <div className="text-[2.4rem] mb-3 leading-none">{f.icon}</div>
// //                 <h3 className="text-white font-bold text-[0.95rem] mb-1.5">{f.title}</h3>
// //                 <p className="text-[#9ca3af] text-[0.82rem] leading-[1.6] font-light">{f.body}</p>
// //                 {/* .feature-skill */}
// //                 <p className="mt-3 text-[0.72rem] text-[#2dd4bf] font-medium">{f.skill}</p>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>


// //     </>
// //   );
// // }


// "use client";

// import { motion } from "framer-motion";
// import { containerClass, SectionHeader } from "@/components/ui/UI";

// /* ── All 15 cards, word-for-word from HTML ── */
// const FEATURES = [
//   {
//     icon: "🎯",
//     heading: "Milestone Tracking",
//     body: "Structured cosmic journey through 20+ tiers — tools revealed as your family advances.",
//     skill: "Builds: Family discipline · Shared purpose",
//   },
//   {
//     icon: "🌟",
//     heading: "Life Skills Activities (1500+)",
//     body: "Psychologist-designed offline activities for EQ, AQ, CQ & SQ. Fun while building real-world competence.",
//     skill: "Builds: Critical thinking · Emotional intelligence",
//   },
//   {
//     icon: "💬",
//     heading: "WonderChat",
//     body: "Age-smart conversation prompts for meaningful 5–10 minute parent-child conversations.",
//     skill: "Builds: Reflective thinking · Trust · Communication",
//   },
//   {
//     icon: "🔭",
//     heading: "Know Your Child (KYC)",
//     body: "Decodes your child's behaviour with science-backed explanations so you respond, not react.",
//     skill: "Builds: Parental awareness · Reduced conflict",
//   },
//   {
//     icon: "🎧",
//     heading: "Audio Stories (1000+)",
//     body: "Value-based audio stories for bonding and character. Socratic questions at the end of each story.",
//     skill: "Builds: Imagination · Empathy · Ethics",
//   },
//   {
//     icon: "⭐",
//     heading: "StrengthFinder",
//     body: "Psychometric assessment to identify your child's natural strengths and guide their path.",
//     skill: "Builds: Self-awareness · Confidence · Direction",
//   },
//   {
//     icon: "🏆",
//     heading: "Challenges",
//     body: "Guided parent-child challenges for discipline, habit building and resilience.",
//     skill: "Builds: Self-regulation · Resilience · Habit formation",
//   },
//   {
//     icon: "🎓",
//     heading: "Parenting Virtues Workshop",
//     body: "Weekly focus on a parenting quality — patience, empathy, active listening — with micro challenges.",
//     skill: "Builds: Caregiver growth · Positive values",
//   },
//   {
//     icon: "💪",
//     heading: "Habit-Up",
//     body: "Daily fitness, mental health and household responsibility activities.",
//     skill: "Builds: Physical health · Mental discipline",
//   },
//   {
//     icon: "📚",
//     heading: "Read-O-Meter",
//     body: "Tracks daily reading minutes, reinforces consistent habits, rewards every minute.",
//     skill: "Builds: Language · Communication · Critical thinking",
//   },
//   {
//     icon: "🧩",
//     heading: "Case Studies",
//     body: "Harvard-inspired real-world scenarios to build problem-solving and entrepreneurial mindset.",
//     skill: "Builds: Decision making · Ethics · Practical intelligence",
//   },
//   {
//     icon: "🕉️",
//     heading: "Shlok & Mudra",
//     body: "Indian wisdom through shlok audio and mudras. Memory, concentration, speech and cultural rootedness.",
//     skill: "Builds: Cultural identity · Focus · Mental clarity",
//   },
//   {
//     icon: "📁",
//     heading: "Portfolio",
//     body: "A living digital record of your child's achievements across Sports, Academics, Arts and more.",
//     skill: "Builds: Pride · Accountability · Growth mindset",
//   },
//   {
//     icon: "✏️",
//     heading: "Create Task",
//     body: "Create custom activities tailored to your child's unique needs and family context.",
//     skill: "Builds: Personalisation · Ownership",
//   },
//   {
//     icon: "🎮",
//     heading: "Points & Rewards",
//     body: "Gamified recognition linking effort to earned rewards. Children earn points for becoming better humans.",
//     skill: "Builds: Motivation · Consistency · Love of growth",
//   },
// ];

// const cardVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: (i: number) => ({
//     opacity: 1, y: 0,
//     transition: { duration: 0.35, delay: i * 0.04, ease: "easeOut" },
//   }),
// };

// export default function Features() {
//   return (
//     <section
//       id="features"
//       className="py-[100px] relative z-[1]"
//       style={{ background: "#0a0e1f" }}
//     >
//       <div className={containerClass}>

//         {/* .section-header.reveal */}
//         <SectionHeader
//           tag="15-Feature Ecosystem"
//           heading="Everything a Family Needs to Thrive."
//           sub="Not a single tool — a complete daily family operating system. Every feature serves the whole family. No feature works in isolation."
//         />

//         {/* .features-grid.reveal */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
//           {FEATURES.map((feat, i) => (
//             <motion.div
//               key={feat.heading}
//               custom={i}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, amount: 0.1 }}
//               variants={cardVariants}
//               /* .feature-card */
//               className="bg-[#04060f] border border-white/[0.08] rounded-[18px] p-6 relative overflow-hidden transition-all duration-300 hover:-translate-y-[3px] hover:border-[rgba(249,115,22,0.25)]"
//             >
//               {/* .feature-icon */}
//               <div className="text-[2.4rem] mb-3 leading-none">{feat.icon}</div>

//               {/* h3 */}
//               <h3 className="text-white font-bold text-[0.95rem] mb-1.5">{feat.heading}</h3>

//               {/* p */}
//               <p className="text-[#9ca3af] text-[0.82rem] leading-[1.6] font-light">{feat.body}</p>

//               {/* .feature-skill */}
//               <div className="mt-3 text-[0.72rem] font-medium text-[#2dd4bf]">{feat.skill}</div>
//             </motion.div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }


//BEFORE

// "use client";

// /**
//  * FeatureCarousel — "Everything a family needs to thrive."
//  *
//  * CLIENT COMPONENT — required: 3D coverflow with pointer-drag, autoplay,
//  * keyboard nav, and dot navigation. All need browser events + state.
//  *
//  * Icons: @phosphor-icons/react  →  npm i @phosphor-icons/react
//  * Named imports tree-shake, so only these 16 glyphs ship (much lighter than
//  * the CDN icon-font the original HTML used).
//  *
//  * Fonts: Outfit (display) + Poppins (body) must be loaded globally.
//  */

// import { useCallback, useEffect, useRef, useState } from "react";
// import type { Icon } from "@phosphor-icons/react";
// import {
//   FlagPennant,
//   PuzzlePiece,
//   ChatsCircle,
//   MagnifyingGlass,
//   Headphones,
//   Star,
//   Trophy,
//   GraduationCap,
//   Barbell,
//   BookOpen,
//   Lightbulb,
//   HandsPraying,
//   FolderOpen,
//   PencilSimple,
//   GameController,
//   Broadcast,
// } from "@phosphor-icons/react";

// type Feature = {
//   Icon: Icon;
//   name: string;
//   desc: string;
//   builds: string;
// };

// const FEATURES: Feature[] = [
//   { Icon: FlagPennant, name: "Milestone Tracking", desc: "A cosmic journey through 20+ tiers — tools unlock as your family advances.", builds: "Discipline & shared purpose" },
//   { Icon: PuzzlePiece, name: "Life Skills Activities", desc: "1500+ psychologist-designed offline activities for EQ, AQ, CQ and SQ.", builds: "Critical thinking & EQ" },
//   { Icon: ChatsCircle, name: "WonderChat", desc: "Age-smart prompts for meaningful five to ten minute parent-child talks.", builds: "Reflection & trust" },
//   { Icon: MagnifyingGlass, name: "Know Your Child", desc: "Decodes behaviour with science-backed explanations so you respond, not react.", builds: "Awareness & less conflict" },
//   { Icon: Headphones, name: "Audio Stories", desc: "1000+ value-based stories with a Socratic question at the end of each.", builds: "Imagination & empathy" },
//   { Icon: Star, name: "StrengthFinder", desc: "A psychometric read to identify your child's natural strengths.", builds: "Self-awareness & direction" },
//   { Icon: Trophy, name: "Challenges", desc: "Guided parent-child challenges for discipline, habit-building and grit.", builds: "Self-regulation & resilience" },
//   { Icon: GraduationCap, name: "Virtues Workshop", desc: "A weekly focus on one parenting quality, with small daily challenges.", builds: "Caregiver growth" },
//   { Icon: Barbell, name: "Habit-Up", desc: "Daily fitness, mental-health and household-responsibility routines.", builds: "Health & discipline" },
//   { Icon: BookOpen, name: "Read-O-Meter", desc: "Tracks daily reading minutes and rewards consistent habits.", builds: "Language & communication" },
//   { Icon: Lightbulb, name: "Case Studies", desc: "Harvard-inspired real-world scenarios for everyday problem-solving.", builds: "Decision-making & ethics" },
//   { Icon: HandsPraying, name: "Shlok and Mudra", desc: "Indian wisdom brought to life through shlok audio and mudras.", builds: "Cultural identity & focus" },
//   { Icon: FolderOpen, name: "Portfolio", desc: "A living record of achievements across sport, academics and arts.", builds: "Pride & accountability" },
//   { Icon: PencilSimple, name: "Create Task", desc: "Build custom activities tailored to your child and family context.", builds: "Personalisation & ownership" },
//   { Icon: GameController, name: "Points and Rewards", desc: "Gamified recognition that links real effort to earned rewards.", builds: "Motivation & consistency" },
//   { Icon: Broadcast, name: "Parenting Pulse", desc: "A daily feed of age-matched signals and one action to take today.", builds: "Timely & actionable" },
// ];

// const N = FEATURES.length;
// const DEPTH = 240;
// const AUTOPLAY_MS = 3800;

// /**
//  * Card + spacing metrics, derived from viewport width.
//  * SPACING must scale with the card, otherwise neighbours fly off-screen on
//  * phones and bunch up on wide monitors. Recomputed on every resize.
//  */
// function getMetrics(w: number) {
//   if (w <= 480) return { card: 260, spacing: 172, depth: 150, height: 420 };
//   if (w <= 640) return { card: 292, spacing: 196, depth: 180, height: 452 };
//   if (w <= 900) return { card: 310, spacing: 220, depth: 210, height: 462 };
//   return { card: 330, spacing: 244, depth: DEPTH, height: 472 };
// }

// const pad = (n: number) => (n < 10 ? "0" : "") + n;

// export default function FeatureCarousel() {
//   const carRef = useRef<HTMLDivElement | null>(null);
//   const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

//   // `pos` is a float during drag, snapped to int on release. Kept in a ref so
//   // the rAF/pointer handlers don't re-render on every move.
//   const posRef = useRef(0);
//   const [active, setActive] = useState(0);

//   // Live layout metrics — recomputed on resize so drag + placement stay correct
//   const metricsRef = useRef(getMetrics(1280));
//   const [metrics, setMetrics] = useState(() => getMetrics(1280));

//   const downRef = useRef(false);
//   const movedRef = useRef(false);
//   const startXRef = useRef(0);
//   const startPosRef = useRef(0);
//   const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
//   const reduceRef = useRef(false);

//   const idx = useCallback(() => {
//     const p = posRef.current;
//     return ((Math.round(p) % N) + N) % N;
//   }, []);

//   /** Position every card in 3D space for a given (possibly fractional) pos. */
//   const place = useCallback((p: number, withTrans: boolean) => {
//     const { spacing, depth } = metricsRef.current;
//     for (let i = 0; i < N; i++) {
//       const el = cardRefs.current[i];
//       if (!el) continue;

//       let off = i - p;
//       if (off > N / 2) off -= N;
//       if (off < -N / 2) off += N;
//       const abs = Math.abs(off);

//       el.style.transition = withTrans ? "" : "none";

//       // Far-off cards: park them out of sight, skip the math
//       if (abs > 3.15) {
//         el.style.opacity = "0";
//         el.style.pointerEvents = "none";
//         el.style.transform = `translate3d(${off * 150}px,0,-1050px) scale(.5)`;
//         el.classList.remove("is-active");
//         continue;
//       }

//       el.style.pointerEvents = "auto";
//       const x = off * spacing;
//       const z = -abs * depth;
//       const rot = Math.max(-44, Math.min(44, off * -26));
//       const scale = Math.max(0.56, 1 - abs * 0.15);
//       const op = Math.max(0, 1 - abs * 0.4);

//       el.style.opacity = op.toFixed(3);
//       el.style.zIndex = String(120 - Math.round(abs * 10));
//       el.style.transform = `translate3d(${x.toFixed(1)}px,0,${z.toFixed(1)}px) rotateY(${rot.toFixed(2)}deg) scale(${scale.toFixed(3)})`;
//       el.classList.toggle("is-active", abs < 0.5);
//     }
//   }, []);

//   const sync = useCallback(() => setActive(idx()), [idx]);

//   const stop = useCallback(() => {
//     if (timerRef.current) {
//       clearInterval(timerRef.current);
//       timerRef.current = null;
//     }
//   }, []);

//   const step = useCallback(
//     (d: number) => {
//       posRef.current = Math.round(posRef.current) + d;
//       place(posRef.current, true);
//       sync();
//     },
//     [place, sync]
//   );

//   const restart = useCallback(() => {
//     if (reduceRef.current) return;
//     stop();
//     timerRef.current = setInterval(() => step(1), AUTOPLAY_MS);
//   }, [stop, step]);

//   /** Jump to a specific index by the shortest path around the loop. */
//   const go = useCallback(
//     (i: number) => {
//       const cur = idx();
//       let off = i - cur;
//       if (off > N / 2) off -= N;
//       if (off < -N / 2) off += N;
//       posRef.current = Math.round(posRef.current) + off;
//       place(posRef.current, true);
//       sync();
//       restart();
//     },
//     [idx, place, sync, restart]
//   );

//   // Init: honour reduced-motion, lay out cards, start autoplay
//   useEffect(() => {
//     reduceRef.current =
//       typeof window !== "undefined" &&
//       !!window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

//     const applyMetrics = () => {
//       const m = getMetrics(window.innerWidth);
//       metricsRef.current = m;
//       setMetrics(m);
//       place(posRef.current, false); // re-lay out without animating
//     };

//     applyMetrics();
//     sync();
//     restart();

//     window.addEventListener("resize", applyMetrics);
//     return () => {
//       window.removeEventListener("resize", applyMetrics);
//       stop();
//     };
//   }, [place, sync, restart, stop]);

//   // Keyboard nav
//   useEffect(() => {
//     const onKey = (e: KeyboardEvent) => {
//       if (e.key === "ArrowRight") {
//         step(1);
//         restart();
//       } else if (e.key === "ArrowLeft") {
//         step(-1);
//         restart();
//       }
//     };
//     window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//   }, [step, restart]);

//   // ── Pointer drag ──
//   const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
//     downRef.current = true;
//     movedRef.current = false;
//     startXRef.current = e.clientX;
//     startPosRef.current = posRef.current;
//     stop();
//     carRef.current?.classList.add("grabbing");
//     try {
//       carRef.current?.setPointerCapture(e.pointerId);
//     } catch {
//       /* no-op */
//     }
//   };

//   const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
//     if (!downRef.current) return;
//     const dx = e.clientX - startXRef.current;
//     if (Math.abs(dx) > 4) movedRef.current = true;
//     posRef.current = startPosRef.current - dx / metricsRef.current.spacing;
//     place(posRef.current, false); // no transition while dragging = 1:1 feel
//     sync();
//   };

//   const release = () => {
//     if (!downRef.current) return;
//     downRef.current = false;
//     carRef.current?.classList.remove("grabbing");
//     posRef.current = Math.round(posRef.current); // snap
//     place(posRef.current, true);
//     sync();
//     restart();
//     setTimeout(() => {
//       movedRef.current = false;
//     }, 0);
//   };

//   return (
//     <section
//       id="features"
//       className="relative w-full bg-[#050507] py-[clamp(64px,8vw,120px)] font-['Poppins',sans-serif] text-[#C3C2CE] antialiased"
//     >
//       <div className="relative z-[1] mx-auto w-full max-w-[1240px] px-8 max-[640px]:px-4">
//         {/* Section head */}
//         <div className="mx-auto mb-[clamp(40px,5vw,72px)] flex max-w-[820px] flex-col items-center gap-5 text-center">
//           <span className="inline-flex h-[34px] items-center gap-[9px] rounded-full border border-[rgba(255,154,64,0.28)] bg-[linear-gradient(180deg,rgba(255,154,64,0.05)_0%,rgba(255,122,24,0.02)_100%)] px-[18px] font-['Outfit',sans-serif] text-[12px] font-semibold uppercase tracking-[0.18em] text-[#FFB36B] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
//             <span className="h-[7px] w-[7px] rounded-full bg-[#FF9A40] shadow-[0_0_8px_#FF9A40]" />
//             The ecosystem
//           </span>

//           <h2 className="m-0 font-['Outfit',sans-serif] text-[clamp(34px,4.6vw,60px)] font-extrabold leading-[1.06] tracking-[-0.02em] text-white [text-wrap:balance]">
//             Everything a family needs{" "}
//             <span className="bg-[linear-gradient(100deg,#FF7A18_26%,#FF4D8D_64%)] bg-clip-text text-transparent">
//               to thrive.
//             </span>
//           </h2>

//           <p className="mx-auto max-w-[62ch] text-[clamp(16px,1.5vw,20px)] font-normal leading-[1.62] text-[#8B8A98] [text-wrap:pretty]">
//             Not a single tool, a complete daily family operating system. Every
//             feature serves the whole family. No feature works in isolation, grab
//             anywhere and glide.
//           </p>
//         </div>

//         {/* Carousel stage */}
//         <div
//           ref={carRef}
//           style={{ height: metrics.height, perspective: metrics.card * 5.15 }}
//           className="car relative mx-auto w-full max-w-[1120px] cursor-grab select-none [touch-action:pan-y]"
//           aria-roledescription="carousel"
//           onPointerDown={onPointerDown}
//           onPointerMove={onPointerMove}
//           onPointerUp={release}
//           onPointerCancel={release}
//           onLostPointerCapture={release}
//           onPointerEnter={stop}
//           onPointerLeave={() => {
//             if (!downRef.current) restart();
//           }}
//         >
//           <div className="absolute inset-0 [transform-style:preserve-3d]">
//             {FEATURES.map((f, i) => {
//               const Ico = f.Icon;
//               return (
//                 <div
//                   key={f.name}
//                   ref={(el) => {
//                     cardRefs.current[i] = el;
//                   }}
//                   onClick={() => {
//                     if (!movedRef.current) go(i);
//                   }}
//                   style={{
//                     width: metrics.card,
//                     height: metrics.height - 72,
//                     marginLeft: -metrics.card / 2,
//                     marginTop: -(metrics.height - 72) / 2,
//                   }}
//                   className="card absolute left-1/2 top-1/2 flex flex-col gap-5 rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.065)_0%,rgba(255,255,255,0.022)_100%)] p-[32px_30px_30px] backdrop-blur-[22px] backdrop-saturate-[140%] max-[640px]:gap-4 max-[640px]:p-[24px_20px]"
//                 >
//                   {/* Icon box — gradient ring + gradient glyph */}
//                   <div className="c-ico relative flex h-[52px] w-[52px] flex-none items-center justify-center rounded-[15px] bg-white/[0.04] sm:h-[60px] sm:w-[60px] sm:rounded-[17px]">
//                     <Ico size={28} weight="duotone" className="relative z-[1]" />
//                   </div>

//                   <h3 className="m-0 font-['Outfit',sans-serif] text-[clamp(20px,4.5vw,25px)] font-bold leading-[1.15] tracking-[-0.01em] text-white">
//                     {f.name}
//                   </h3>
//                   <p className="m-0 text-[clamp(13px,3.4vw,15px)] font-normal leading-[1.55] text-[#8B8A98]">
//                     {f.desc}
//                   </p>

//                   <div className="mt-auto flex flex-wrap items-center gap-x-[9px] gap-y-1 border-t border-white/[0.06] pt-[18px]">
//                     <span className="h-2 w-2 flex-none rounded-full bg-[linear-gradient(145deg,#FFB13D_0%,#FF7A18_34%,#FF4D8D_70%,#A24BFF_100%)] shadow-[0_0_8px_rgba(255,122,24,.5)]" />
//                     <span className="font-['Outfit',sans-serif] text-[10.5px] font-semibold uppercase tracking-[.12em] text-[#5C5B68]">
//                       Builds
//                     </span>
//                     <span className="text-[12.5px] font-medium tracking-[.01em] text-[#C3C2CE]">
//                       {f.builds}
//                     </span>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         {/* Counter */}
//         <div className="mt-[clamp(24px,3vw,40px)] text-center font-['Outfit',sans-serif] text-[14px] font-bold tracking-[0.02em] text-[#8B8A98]">
//           <b className="text-[#FFB36B]">{pad(active + 1)}</b> / {N} ·{" "}
//           <span>{FEATURES[active].name}</span>
//         </div>

//         {/* Dots */}
//         <div className="mx-auto mt-4 flex max-w-[440px] flex-wrap items-center justify-center gap-2">
//           {FEATURES.map((f, i) => (
//             <button
//               key={f.name}
//               aria-label={`Go to feature ${i + 1}`}
//               aria-current={i === active}
//               onClick={() => go(i)}
//               className={`car-dot h-2 cursor-pointer rounded-full border-0 p-0 transition-all duration-[280ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
//                 i === active
//                   ? "w-[26px] rounded-[5px] bg-[linear-gradient(145deg,#FFB13D_0%,#FF7A18_34%,#FF4D8D_70%,#A24BFF_100%)]"
//                   : "w-2 bg-white/[0.18] hover:bg-white/40"
//               }`}
//             />
//           ))}
//         </div>
//       </div>

//       <style jsx>{`
//         .car.grabbing {
//           cursor: grabbing;
//         }

//         /* Card: shadows + the transition curve (multi-layer inset shadows and
//            the 5-property transition are unwieldy as Tailwind arbitrary values) */
//         .card {
//           box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.12),
//             inset 0 -1px 0 rgba(255, 255, 255, 0.04), 0 26px 60px rgba(0, 0, 0, 0.55);
//           transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1),
//             opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1),
//             box-shadow 0.45s cubic-bezier(0.22, 1, 0.36, 1),
//             border-color 0.45s cubic-bezier(0.22, 1, 0.36, 1),
//             background 0.45s cubic-bezier(0.22, 1, 0.36, 1);
//           will-change: transform, opacity;
//           backface-visibility: hidden;
//           -webkit-backface-visibility: hidden;
//         }
//         .card.is-active {
//           background: linear-gradient(
//             180deg,
//             rgba(255, 255, 255, 0.1) 0%,
//             rgba(255, 255, 255, 0.035) 100%
//           );
//           border-color: rgba(255, 255, 255, 0.18);
//           box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.18),
//             inset 0 -1px 0 rgba(255, 255, 255, 0.05), 0 30px 74px rgba(0, 0, 0, 0.6),
//             0 0 44px rgba(255, 122, 24, 0.08);
//         }

//         /* Icon box gradient ring (mask-composite) + gradient-filled glyph */
//         .c-ico::before {
//           content: "";
//           position: absolute;
//           inset: 0;
//           border-radius: inherit;
//           padding: 2px;
//           background: linear-gradient(
//             145deg,
//             #ffb13d 0%,
//             #ff7a18 34%,
//             #ff4d8d 70%,
//             #a24bff 100%
//           );
//           -webkit-mask: linear-gradient(#000 0 0) content-box,
//             linear-gradient(#000 0 0);
//           -webkit-mask-composite: xor;
//           mask-composite: exclude;
//           pointer-events: none;
//         }
//         /* Tint the Phosphor glyph with the brand gradient */
//         .c-ico :global(svg) {
//           color: #ff9a40;
//         }
//       `}</style>
//     </section>
//   );
// }

"use client";

/**
 * FeatureCarousel — "Everything a family needs to thrive."
 *
 * CLIENT COMPONENT — required: 3D coverflow with pointer-drag, autoplay,
 * keyboard nav, and dot navigation. All need browser events + state.
 *
 * Motion model: stepped, not drifting. Every AUTOPLAY_MS the carousel advances
 * exactly one card and comes to rest; the CSS transition on .card animates the
 * move. `pos` is an unbounded integer, so index 15 -> 16 wraps to 0 and the
 * loop continues forever in both directions.
 *
 * Icons: @phosphor-icons/react  →  npm i @phosphor-icons/react
 * Named imports tree-shake, so only these 16 glyphs ship (much lighter than
 * the CDN icon-font the original HTML used).
 *
 * Fonts: Outfit (display) + Poppins (body) must be loaded globally.
 */
//BEFORE 
// import { useCallback, useEffect, useRef, useState } from "react";
// import type { Icon } from "@phosphor-icons/react";
// import {
//   FlagPennant,
//   PuzzlePiece,
//   ChatsCircle,
//   MagnifyingGlass,
//   Headphones,
//   Star,
//   Trophy,
//   GraduationCap,
//   Barbell,
//   BookOpen,
//   Lightbulb,
//   HandsPraying,
//   FolderOpen,
//   PencilSimple,
//   GameController,
//   Broadcast,
// } from "@phosphor-icons/react";

// type Feature = {
//   Icon: Icon;
//   name: string;
//   desc: string;
//   builds: string;
// };

// const FEATURES: Feature[] = [
//   { Icon: FlagPennant, name: "Milestone Tracking", desc: "A cosmic journey through 20+ tiers — tools unlock as your family advances.", builds: "Discipline & shared purpose" },
//   { Icon: PuzzlePiece, name: "Life Skills Activities", desc: "1500+ psychologist-designed offline activities for EQ, AQ, CQ and SQ.", builds: "Critical thinking & EQ" },
//   { Icon: ChatsCircle, name: "WonderChat", desc: "Age-smart prompts for meaningful five to ten minute parent-child talks.", builds: "Reflection & trust" },
//   { Icon: MagnifyingGlass, name: "Know Your Child", desc: "Decodes behaviour with science-backed explanations so you respond, not react.", builds: "Awareness & less conflict" },
//   { Icon: Headphones, name: "Audio Stories", desc: "1000+ value-based stories with a Socratic question at the end of each.", builds: "Imagination & empathy" },
//   { Icon: Star, name: "StrengthFinder", desc: "A psychometric read to identify your child's natural strengths.", builds: "Self-awareness & direction" },
//   { Icon: Trophy, name: "Challenges", desc: "Guided parent-child challenges for discipline, habit-building and grit.", builds: "Self-regulation & resilience" },
//   { Icon: GraduationCap, name: "Virtues Workshop", desc: "A weekly focus on one parenting quality, with small daily challenges.", builds: "Caregiver growth" },
//   { Icon: Barbell, name: "Habit-Up", desc: "Daily fitness, mental-health and household-responsibility routines.", builds: "Health & discipline" },
//   { Icon: BookOpen, name: "Read-O-Meter", desc: "Tracks daily reading minutes and rewards consistent habits.", builds: "Language & communication" },
//   { Icon: Lightbulb, name: "Case Studies", desc: "Harvard-inspired real-world scenarios for everyday problem-solving.", builds: "Decision-making & ethics" },
//   { Icon: HandsPraying, name: "Shlok and Mudra", desc: "Indian wisdom brought to life through shlok audio and mudras.", builds: "Cultural identity & focus" },
//   { Icon: FolderOpen, name: "Portfolio", desc: "A living record of achievements across sport, academics and arts.", builds: "Pride & accountability" },
//   { Icon: PencilSimple, name: "Create Task", desc: "Build custom activities tailored to your child and family context.", builds: "Personalisation & ownership" },
//   { Icon: GameController, name: "Points and Rewards", desc: "Gamified recognition that links real effort to earned rewards.", builds: "Motivation & consistency" },
//   { Icon: Broadcast, name: "Parenting Pulse", desc: "A daily feed of age-matched signals and one action to take today.", builds: "Timely & actionable" },
// ];

// const N = FEATURES.length;
// const DEPTH = 240;

// /** Pause between steps, in ms. One card per tick. */
// const AUTOPLAY_MS = 5000;

// /**
//  * Card + spacing metrics, derived from viewport width.
//  * SPACING must scale with the card, otherwise neighbours fly off-screen on
//  * phones and bunch up on wide monitors. Recomputed on every resize.
//  */
// function getMetrics(w: number) {
//   if (w <= 480) return { card: 260, spacing: 172, depth: 150, height: 420 };
//   if (w <= 640) return { card: 292, spacing: 196, depth: 180, height: 452 };
//   if (w <= 900) return { card: 310, spacing: 220, depth: 210, height: 462 };
//   return { card: 330, spacing: 244, depth: DEPTH, height: 472 };
// }

// const pad = (n: number) => (n < 10 ? "0" : "") + n;

// export default function FeatureCarousel() {
//   const carRef = useRef<HTMLDivElement | null>(null);
//   const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

//   // `pos` is a float during drag, snapped to int on release. Unbounded — it
//   // just keeps counting up, and the offset wrap in place() turns that into an
//   // endless loop (…15 -> 16 lands on index 0 again).
//   const posRef = useRef(0);
//   const [active, setActive] = useState(0);

//   // Live layout metrics — recomputed on resize so drag + placement stay correct
//   const metricsRef = useRef(getMetrics(1280));
//   const [metrics, setMetrics] = useState(() => getMetrics(1280));

//   const downRef = useRef(false);
//   const movedRef = useRef(false);
//   const startXRef = useRef(0);
//   const startPosRef = useRef(0);
//   const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
//   const reduceRef = useRef(false);

//   const idx = useCallback(() => {
//     const p = posRef.current;
//     return ((Math.round(p) % N) + N) % N;
//   }, []);

//   /** Position every card in 3D space for a given (possibly fractional) pos. */
//   const place = useCallback((p: number, withTrans: boolean) => {
//     const { spacing, depth } = metricsRef.current;
//     for (let i = 0; i < N; i++) {
//       const el = cardRefs.current[i];
//       if (!el) continue;

//       // Shortest signed distance around the ring — this is what makes the
//       // carousel infinite: card 0 is "one step right" of card 15, not 15 back.
//       let off = i - p;
//       if (off > N / 2) off -= N;
//       if (off < -N / 2) off += N;
//       const abs = Math.abs(off);

//       el.style.transition = withTrans ? "" : "none";

//       // Far-off cards: park them out of sight, skip the math
//       if (abs > 3.15) {
//         el.style.opacity = "0";
//         el.style.pointerEvents = "none";
//         el.style.transform = `translate3d(${off * 150}px,0,-1050px) scale(.5)`;
//         el.classList.remove("is-active");
//         continue;
//       }

//       el.style.pointerEvents = "auto";
//       const x = off * spacing;
//       const z = -abs * depth;
//       const rot = Math.max(-44, Math.min(44, off * -26));
//       const scale = Math.max(0.56, 1 - abs * 0.15);
//       const op = Math.max(0, 1 - abs * 0.4);

//       el.style.opacity = op.toFixed(3);
//       el.style.zIndex = String(120 - Math.round(abs * 10));
//       el.style.transform = `translate3d(${x.toFixed(1)}px,0,${z.toFixed(1)}px) rotateY(${rot.toFixed(2)}deg) scale(${scale.toFixed(3)})`;
//       el.classList.toggle("is-active", abs < 0.5);
//     }
//   }, []);

//   const sync = useCallback(() => setActive(idx()), [idx]);

//   const stop = useCallback(() => {
//     if (timerRef.current) {
//       clearInterval(timerRef.current);
//       timerRef.current = null;
//     }
//   }, []);

//   /** Advance d whole cards and come to rest. */
//   const step = useCallback(
//     (d: number) => {
//       posRef.current = Math.round(posRef.current) + d;
//       place(posRef.current, true);
//       sync();
//     },
//     [place, sync]
//   );

//   // step() is referenced by the interval, but restart() must not be rebuilt
//   // every time step changes — a ref keeps the timer stable.
//   const stepRef = useRef(step);
//   stepRef.current = step;

//   const restart = useCallback(() => {
//     if (reduceRef.current) return;
//     stop();
//     timerRef.current = setInterval(() => stepRef.current(1), AUTOPLAY_MS);
//   }, [stop]);

//   /** Jump to a specific index by the shortest path around the loop. */
//   const go = useCallback(
//     (i: number) => {
//       const cur = idx();
//       let off = i - cur;
//       if (off > N / 2) off -= N;
//       if (off < -N / 2) off += N;
//       posRef.current = Math.round(posRef.current) + off;
//       place(posRef.current, true);
//       sync();
//       restart(); // reset the 5s clock so the click gets its full dwell
//     },
//     [idx, place, sync, restart]
//   );

//   // Init: honour reduced-motion, lay out cards, start autoplay
//   useEffect(() => {
//     const mq =
//       typeof window !== "undefined" && window.matchMedia
//         ? window.matchMedia("(prefers-reduced-motion: reduce)")
//         : null;
//     reduceRef.current = !!mq?.matches;
//     const onMq = (e: MediaQueryListEvent) => {
//       reduceRef.current = e.matches;
//       if (e.matches) stop();
//       else restart();
//     };
//     mq?.addEventListener?.("change", onMq);

//     const applyMetrics = () => {
//       const m = getMetrics(window.innerWidth);
//       metricsRef.current = m;
//       setMetrics(m);
//       place(posRef.current, false); // re-lay out without animating
//     };

//     applyMetrics();
//     sync();
//     restart();

//     // Don't tick while the tab is hidden — otherwise the carousel silently
//     // races through several cards and jumps on return.
//     const onVis = () => {
//       if (document.hidden) stop();
//       else restart();
//     };

//     window.addEventListener("resize", applyMetrics);
//     document.addEventListener("visibilitychange", onVis);

//     return () => {
//       window.removeEventListener("resize", applyMetrics);
//       document.removeEventListener("visibilitychange", onVis);
//       mq?.removeEventListener?.("change", onMq);
//       stop();
//     };
//   }, [place, sync, restart, stop]);

//   // Keyboard nav
//   useEffect(() => {
//     const onKey = (e: KeyboardEvent) => {
//       if (e.key === "ArrowRight") {
//         step(1);
//         restart();
//       } else if (e.key === "ArrowLeft") {
//         step(-1);
//         restart();
//       }
//     };
//     window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//   }, [step, restart]);

//   // ── Pointer drag ──
//   const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
//     downRef.current = true;
//     movedRef.current = false;
//     startXRef.current = e.clientX;
//     startPosRef.current = posRef.current;
//     stop();
//     carRef.current?.classList.add("grabbing");
//     try {
//       carRef.current?.setPointerCapture(e.pointerId);
//     } catch {
//       /* no-op */
//     }
//   };

//   const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
//     if (!downRef.current) return;
//     const dx = e.clientX - startXRef.current;
//     if (Math.abs(dx) > 4) movedRef.current = true;
//     posRef.current = startPosRef.current - dx / metricsRef.current.spacing;
//     place(posRef.current, false); // no transition while dragging = 1:1 feel
//     sync();
//   };

//   const release = () => {
//     if (!downRef.current) return;
//     downRef.current = false;
//     carRef.current?.classList.remove("grabbing");
//     posRef.current = Math.round(posRef.current); // snap
//     place(posRef.current, true);
//     sync();
//     restart();
//     setTimeout(() => {
//       movedRef.current = false;
//     }, 0);
//   };

//   return (
//     <section
//       id="features"
//       className="relative w-full bg-[#050507] py-[clamp(64px,8vw,120px)] font-['Poppins',sans-serif] text-[#C3C2CE] antialiased"
//     >
//       <div className="relative z-[1] mx-auto w-full max-w-[1240px] px-8 max-[640px]:px-4">
//         {/* Section head */}
//         <div className="mx-auto mb-[clamp(40px,5vw,72px)] flex max-w-[820px] flex-col items-center gap-5 text-center">
//           <span className="inline-flex h-[34px] items-center gap-[9px] rounded-full border border-[rgba(255,154,64,0.28)] bg-[linear-gradient(180deg,rgba(255,154,64,0.05)_0%,rgba(255,122,24,0.02)_100%)] px-[18px] font-['Outfit',sans-serif] text-[12px] font-semibold uppercase tracking-[0.18em] text-[#FFB36B] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
//             <span className="h-[7px] w-[7px] rounded-full bg-[#FF9A40] shadow-[0_0_8px_#FF9A40]" />
//             The ecosystem
//           </span>

//           <h2 className="m-0 font-['Outfit',sans-serif] text-[clamp(34px,4.6vw,60px)] font-extrabold leading-[1.06] tracking-[-0.02em] text-white [text-wrap:balance]">
//             Everything a family needs{" "}
//             <span className="bg-[linear-gradient(100deg,#FF7A18_26%,#FF4D8D_64%)] bg-clip-text text-transparent">
//               to thrive.
//             </span>
//           </h2>

//           <p className="mx-auto max-w-[62ch] text-[clamp(16px,1.5vw,20px)] font-normal leading-[1.62] text-[#8B8A98] [text-wrap:pretty]">
//             Not a single tool, a complete daily family operating system. Every
//             feature serves the whole family. No feature works in isolation, grab
//             anywhere and glide.
//           </p>
//         </div>

//         {/* Carousel stage */}
//         <div
//           ref={carRef}
//           style={{ height: metrics.height, perspective: metrics.card * 5.15 }}
//           className="car relative mx-auto w-full max-w-[1120px] cursor-grab select-none [touch-action:pan-y]"
//           aria-roledescription="carousel"
//           onPointerDown={onPointerDown}
//           onPointerMove={onPointerMove}
//           onPointerUp={release}
//           onPointerCancel={release}
//           onLostPointerCapture={release}
//           onPointerEnter={stop}
//           onPointerLeave={() => {
//             if (!downRef.current) restart();
//           }}
//         >
//           <div className="absolute inset-0 [transform-style:preserve-3d]">
//             {FEATURES.map((f, i) => {
//               const Ico = f.Icon;
//               return (
//                 <div
//                   key={f.name}
//                   ref={(el) => {
//                     cardRefs.current[i] = el;
//                   }}
//                   onClick={() => {
//                     // A drag that ended on this card is not a click.
//                     if (!movedRef.current) go(i);
//                   }}
//                   style={{
//                     width: metrics.card,
//                     height: metrics.height - 72,
//                     marginLeft: -metrics.card / 2,
//                     marginTop: -(metrics.height - 72) / 2,
//                   }}
//                   className={`card absolute left-1/2 top-1/2 flex flex-col gap-5 rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.065)_0%,rgba(255,255,255,0.022)_100%)] p-[32px_30px_30px] backdrop-blur-[22px] backdrop-saturate-[140%] max-[640px]:gap-4 max-[640px]:p-[24px_20px] ${i === active ? "cursor-default" : "cursor-pointer"
//                     }`}
//                 >
//                   {/* Icon box — gradient ring + gradient glyph */}
//                   <div className="c-ico relative flex h-[52px] w-[52px] flex-none items-center justify-center rounded-[15px] bg-white/[0.04] sm:h-[60px] sm:w-[60px] sm:rounded-[17px]">
//                     <Ico size={28} weight="duotone" className="relative z-[1]" />
//                   </div>

//                   <h3 className="m-0 font-['Outfit',sans-serif] text-[clamp(20px,4.5vw,25px)] font-bold leading-[1.15] tracking-[-0.01em] text-white">
//                     {f.name}
//                   </h3>
//                   <p className="m-0 text-[clamp(13px,3.4vw,15px)] font-normal leading-[1.55] text-[#8B8A98]">
//                     {f.desc}
//                   </p>

//                   <div className="mt-auto flex flex-wrap items-center gap-x-[9px] gap-y-1 border-t border-white/[0.06] pt-[18px]">
//                     <span className="h-2 w-2 flex-none rounded-full bg-[linear-gradient(145deg,#FFB13D_0%,#FF7A18_34%,#FF4D8D_70%,#A24BFF_100%)] shadow-[0_0_8px_rgba(255,122,24,.5)]" />
//                     <span className="font-['Outfit',sans-serif] text-[10.5px] font-semibold uppercase tracking-[.12em] text-[#5C5B68]">
//                       Builds
//                     </span>
//                     <span className="text-[12.5px] font-medium tracking-[.01em] text-[#C3C2CE]">
//                       {f.builds}
//                     </span>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         {/* Counter */}
//         <div className="mt-[clamp(24px,3vw,40px)] text-center font-['Outfit',sans-serif] text-[14px] font-bold tracking-[0.02em] text-[#8B8A98]">
//           <b className="text-[#FFB36B]">{pad(active + 1)}</b> / {N} ·{" "}
//           <span>{FEATURES[active].name}</span>
//         </div>

//         {/* Dots */}
//         <div className="mx-auto mt-4 flex max-w-[440px] flex-wrap items-center justify-center gap-2">
//           {FEATURES.map((f, i) => (
//             <button
//               key={f.name}
//               aria-label={`Go to feature ${i + 1}`}
//               aria-current={i === active}
//               onClick={() => go(i)}
//               className={`car-dot h-2 cursor-pointer rounded-full border-0 p-0 transition-all duration-[280ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${i === active
//                 ? "w-[26px] rounded-[5px] bg-[linear-gradient(145deg,#FFB13D_0%,#FF7A18_34%,#FF4D8D_70%,#A24BFF_100%)]"
//                 : "w-2 bg-white/[0.18] hover:bg-white/40"
//                 }`}
//             />
//           ))}
//         </div>
//       </div>

//       <style jsx>{`
//         .car.grabbing {
//           cursor: grabbing;
//         }

//         /* Card: shadows + the transition curve (multi-layer inset shadows and
//            the 5-property transition are unwieldy as Tailwind arbitrary values).
//            transform/opacity ARE transitioned here — the carousel steps between
//            discrete resting positions, so CSS animates each 0.6s move. */
//         .card {
//           box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.12),
//             inset 0 -1px 0 rgba(255, 255, 255, 0.04), 0 26px 60px rgba(0, 0, 0, 0.55);
//           transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1),
//             opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1),
//             box-shadow 0.45s cubic-bezier(0.22, 1, 0.36, 1),
//             border-color 0.45s cubic-bezier(0.22, 1, 0.36, 1),
//             background 0.45s cubic-bezier(0.22, 1, 0.36, 1);
//           will-change: transform, opacity;
//           backface-visibility: hidden;
//           -webkit-backface-visibility: hidden;
//         }
//         .card.is-active {
//           background: linear-gradient(
//             180deg,
//             rgba(255, 255, 255, 0.1) 0%,
//             rgba(255, 255, 255, 0.035) 100%
//           );
//           border-color: rgba(255, 255, 255, 0.18);
//           box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.18),
//             inset 0 -1px 0 rgba(255, 255, 255, 0.05), 0 30px 74px rgba(0, 0, 0, 0.6),
//             0 0 44px rgba(255, 122, 24, 0.08);
//         }

//         /* Icon box gradient ring (mask-composite) + gradient-filled glyph */
//         .c-ico::before {
//           content: "";
//           position: absolute;
//           inset: 0;
//           border-radius: inherit;
//           padding: 2px;
//           background: linear-gradient(
//             145deg,
//             #ffb13d 0%,
//             #ff7a18 34%,
//             #ff4d8d 70%,
//             #a24bff 100%
//           );
//           -webkit-mask: linear-gradient(#000 0 0) content-box,
//             linear-gradient(#000 0 0);
//           -webkit-mask-composite: xor;
//           mask-composite: exclude;
//           pointer-events: none;
//         }
//         /* Tint the Phosphor glyph with the brand gradient */
//         .c-ico :global(svg) {
//           color: #ff9a40;
//         }
//       `}</style>
//     </section>
//   );
// }


// import { useCallback, useEffect, useRef, useState } from "react";
// import type { Icon } from "@phosphor-icons/react";
// import {
//   FlagPennant,
//   PuzzlePiece,
//   ChatsCircle,
//   MagnifyingGlass,
//   Headphones,
//   Star,
//   Trophy,
//   GraduationCap,
//   Barbell,
//   BookOpen,
//   Lightbulb,
//   HandsPraying,
//   FolderOpen,
//   PencilSimple,
//   GameController,
//   Broadcast,
// } from "@phosphor-icons/react";

// type Feature = {
//   Icon: Icon;
//   name: string;
//   desc: string;
//   builds: string;
// };

// const FEATURES: Feature[] = [
//   { Icon: FlagPennant, name: "Milestone Tracking", desc: "A cosmic journey through 20+ tiers — tools unlock as your family advances.", builds: "Discipline & shared purpose" },
//   { Icon: PuzzlePiece, name: "Life Skills Activities", desc: "1500+ psychologist-designed offline activities for EQ, AQ, CQ and SQ.", builds: "Critical thinking & EQ" },
//   { Icon: ChatsCircle, name: "WonderChat", desc: "Age-smart prompts for meaningful five to ten minute parent-child talks.", builds: "Reflection & trust" },
//   { Icon: MagnifyingGlass, name: "Know Your Child", desc: "Decodes behaviour with science-backed explanations so you respond, not react.", builds: "Awareness & less conflict" },
//   { Icon: Headphones, name: "Audio Stories", desc: "1000+ value-based stories with a Socratic question at the end of each.", builds: "Imagination & empathy" },
//   { Icon: Star, name: "StrengthFinder", desc: "A psychometric read to identify your child's natural strengths.", builds: "Self-awareness & direction" },
//   { Icon: Trophy, name: "Challenges", desc: "Guided parent-child challenges for discipline, habit-building and grit.", builds: "Self-regulation & resilience" },
//   { Icon: GraduationCap, name: "Virtues Workshop", desc: "A weekly focus on one parenting quality, with small daily challenges.", builds: "Caregiver growth" },
//   { Icon: Barbell, name: "Habit-Up", desc: "Daily fitness, mental-health and household-responsibility routines.", builds: "Health & discipline" },
//   { Icon: BookOpen, name: "Read-O-Meter", desc: "Tracks daily reading minutes and rewards consistent habits.", builds: "Language & communication" },
//   { Icon: Lightbulb, name: "Case Studies", desc: "Harvard-inspired real-world scenarios for everyday problem-solving.", builds: "Decision-making & ethics" },
//   { Icon: HandsPraying, name: "Shlok and Mudra", desc: "Indian wisdom brought to life through shlok audio and mudras.", builds: "Cultural identity & focus" },
//   { Icon: FolderOpen, name: "Portfolio", desc: "A living record of achievements across sport, academics and arts.", builds: "Pride & accountability" },
//   { Icon: PencilSimple, name: "Create Task", desc: "Build custom activities tailored to your child and family context.", builds: "Personalisation & ownership" },
//   { Icon: GameController, name: "Points and Rewards", desc: "Gamified recognition that links real effort to earned rewards.", builds: "Motivation & consistency" },
//   { Icon: Broadcast, name: "Parenting Pulse", desc: "A daily feed of age-matched signals and one action to take today.", builds: "Timely & actionable" },
// ];

// const N = FEATURES.length;

// /** Pause between steps, in ms. One card per tick. */
// const AUTOPLAY_MS = 3800;

// /**
//  * Card + spacing metrics, derived from viewport width.
//  * SPACING must scale with the card, otherwise neighbours fly off-screen on
//  * phones and bunch up on wide monitors. Recomputed on every resize.
//  * `persp` is kept in sync with offsetAtX()'s projection math.
//  */
// function getMetrics(w: number) {
//   if (w <= 480) return { card: 260, cardH: 372, spacing: 172, depth: 150, height: 420, persp: 1340 };
//   if (w <= 640) return { card: 292, cardH: 388, spacing: 196, depth: 180, height: 452, persp: 1500 };
//   if (w <= 900) return { card: 310, cardH: 392, spacing: 220, depth: 210, height: 462, persp: 1600 };
//   return { card: 330, cardH: 400, spacing: 244, depth: 240, height: 472, persp: 1700 };
// }

// const pad = (n: number) => (n < 10 ? "0" : "") + n;

// export default function FeatureCarousel() {
//   const carRef = useRef<HTMLDivElement | null>(null);
//   const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

//   // `pos` is unbounded — it just keeps counting up, and the shortest-path
//   // offset wrap in place() turns that into an endless loop (…15 -> 16 lands
//   // on index 0 again, and -1 lands on 15).
//   const posRef = useRef(0);
//   const [active, setActive] = useState(0);

//   const metricsRef = useRef(getMetrics(1280));
//   const [metrics, setMetrics] = useState(() => getMetrics(1280));

//   const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
//   const reduceRef = useRef(false);

//   const idx = useCallback(() => {
//     const p = posRef.current;
//     return ((Math.round(p) % N) + N) % N;
//   }, []);

//   /** Position every card in 3D space for a given pos. */
//   const place = useCallback((p: number, withTrans: boolean) => {
//     const { spacing, depth } = metricsRef.current;
//     for (let i = 0; i < N; i++) {
//       const el = cardRefs.current[i];
//       if (!el) continue;

//       // Shortest signed distance around the ring — this is what makes the
//       // carousel infinite: card 0 is "one step right" of card 15, not 15 back.
//       let off = i - p;
//       if (off > N / 2) off -= N;
//       if (off < -N / 2) off += N;
//       const abs = Math.abs(off);

//       el.style.transition = withTrans ? "" : "none";

//       // Far-off cards: park them out of sight, skip the math.
//       // Kept at a small x so the parked stack never widens the stage.
//       if (abs > 3.15) {
//         el.style.opacity = "0";
//         el.style.pointerEvents = "none";
//         el.style.transform = `translate3d(${(off > 0 ? 1 : -1) * 40}px,0,-1050px) scale(.5)`;
//         el.classList.remove("is-active");
//         continue;
//       }

//       el.style.pointerEvents = "auto";
//       const x = off * spacing;
//       const z = -abs * depth;
//       const rot = Math.max(-44, Math.min(44, off * -26));
//       const scale = Math.max(0.56, 1 - abs * 0.15);
//       const op = Math.max(0, 1 - abs * 0.4);

//       el.style.opacity = op.toFixed(3);
//       el.style.zIndex = String(120 - Math.round(abs * 10));
//       el.style.transform = `translate3d(${x.toFixed(1)}px,0,${z.toFixed(1)}px) rotateY(${rot.toFixed(2)}deg) scale(${scale.toFixed(3)})`;
//       el.classList.toggle("is-active", abs < 0.5);
//     }
//   }, []);

//   const sync = useCallback(() => setActive(idx()), [idx]);

//   const stop = useCallback(() => {
//     if (timerRef.current) {
//       clearInterval(timerRef.current);
//       timerRef.current = null;
//     }
//   }, []);

//   /** Advance d whole cards and come to rest. */
//   const step = useCallback(
//     (d: number) => {
//       posRef.current = Math.round(posRef.current) + d;
//       place(posRef.current, true);
//       sync();
//     },
//     [place, sync]
//   );

//   // step() is referenced by the interval, but restart() must not be rebuilt
//   // every time step changes — a ref keeps the timer stable.
//   const stepRef = useRef(step);
//   stepRef.current = step;

//   const restart = useCallback(() => {
//     if (reduceRef.current) return;
//     stop();
//     timerRef.current = setInterval(() => stepRef.current(1), AUTOPLAY_MS);
//   }, [stop]);

//   /** Jump to a specific index by the shortest path around the loop. */
//   const go = useCallback(
//     (i: number) => {
//       const cur = idx();
//       let off = i - cur;
//       if (off > N / 2) off -= N;
//       if (off < -N / 2) off += N;
//       posRef.current = Math.round(posRef.current) + off;
//       place(posRef.current, true);
//       sync();
//       restart(); // reset the clock so the click gets its full dwell
//     },
//     [idx, place, sync, restart]
//   );

//   // Init: honour reduced-motion, lay out cards, start autoplay
//   useEffect(() => {
//     const mq =
//       typeof window !== "undefined" && window.matchMedia
//         ? window.matchMedia("(prefers-reduced-motion: reduce)")
//         : null;
//     reduceRef.current = !!mq?.matches;
//     const onMq = (e: MediaQueryListEvent) => {
//       reduceRef.current = e.matches;
//       if (e.matches) stop();
//       else restart();
//     };
//     mq?.addEventListener?.("change", onMq);

//     const applyMetrics = () => {
//       const m = getMetrics(window.innerWidth);
//       metricsRef.current = m;
//       setMetrics(m);
//       place(posRef.current, false); // re-lay out without animating
//     };

//     applyMetrics();
//     sync();
//     restart();

//     // Don't tick while the tab is hidden — otherwise the carousel silently
//     // races through several cards and jumps on return.
//     const onVis = () => {
//       if (document.hidden) stop();
//       else restart();
//     };

//     window.addEventListener("resize", applyMetrics);
//     document.addEventListener("visibilitychange", onVis);

//     return () => {
//       window.removeEventListener("resize", applyMetrics);
//       document.removeEventListener("visibilitychange", onVis);
//       mq?.removeEventListener?.("change", onMq);
//       stop();
//     };
//   }, [place, sync, restart, stop]);

//   // Keyboard nav
//   useEffect(() => {
//     const onKey = (e: KeyboardEvent) => {
//       if (e.key === "ArrowRight") {
//         step(1);
//         restart();
//       } else if (e.key === "ArrowLeft") {
//         step(-1);
//         restart();
//       }
//     };
//     window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//   }, [step, restart]);

//   /**
//    * Click-to-focus, resolved geometrically.
//    * Native hit-testing on 3D-rotated cards is unreliable inside preserve-3d,
//    * so clicks never depend on which element the browser thinks was hit.
//    * Measure the click's X relative to the stage centre and map it to the card
//    * slot whose projected span contains that point.
//    */
//   const offsetAtX = useCallback((relX: number) => {
//     const { card, spacing, depth, persp } = metricsRef.current;
//     const half = card / 2;
//     const s = relX < 0 ? -1 : 1;
//     const ax = Math.abs(relX);
//     if (ax <= half) return 0; // centre card
//     for (let k = 1; k <= 3; k++) {
//       const pj = persp / (persp + k * depth);
//       const scale = Math.max(0.56, 1 - k * 0.15);
//       const rot = (Math.min(44, k * 26) * Math.PI) / 180;
//       const rightEdge = (k * spacing + half * scale * Math.cos(rot)) * pj;
//       if (ax <= rightEdge) return s * k;
//     }
//     return 0; // empty space — ignore
//   }, []);

//   const onStageClick = (e: React.MouseEvent<HTMLDivElement>) => {
//     const el = carRef.current;
//     if (!el) return;
//     const rect = el.getBoundingClientRect();
//     const relX = e.clientX - rect.left - rect.width / 2;
//     const relY = e.clientY - rect.top - rect.height / 2;
//     if (Math.abs(relY) > metricsRef.current.cardH / 2 + 10) return; // outside the card band
//     const off = offsetAtX(relX);
//     if (off) {
//       step(off);
//       restart();
//     }
//   };

//   return (
//     <section
//       id="features"
//       className="relative w-full bg-[#050507] py-[clamp(64px,8vw,120px)] font-['Poppins',sans-serif] text-[#C3C2CE] antialiased"
//     >
//       <div className="relative z-[1] mx-auto w-full max-w-[1240px] px-8 max-[640px]:px-4">
//         {/* Section head */}
//         <div className="mx-auto mb-[clamp(40px,5vw,72px)] flex max-w-[820px] flex-col items-center gap-5 text-center">
//           <span className="inline-flex h-[34px] items-center gap-[9px] rounded-full border border-[rgba(255,154,64,0.28)] bg-[linear-gradient(180deg,rgba(255,154,64,0.05)_0%,rgba(255,122,24,0.02)_100%)] px-[18px] font-['Outfit',sans-serif] text-[12px] font-semibold uppercase tracking-[0.18em] text-[#FFB36B] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
//             <span className="h-[7px] w-[7px] rounded-full bg-[#FF9A40] shadow-[0_0_8px_#FF9A40]" />
//             The ecosystem
//           </span>

//           <h2 className="m-0 font-['Outfit',sans-serif] text-[clamp(34px,4.6vw,60px)] font-extrabold leading-[1.06] tracking-[-0.02em] text-white [text-wrap:balance]">
//             Everything a family needs{" "}
//             <span className="bg-[linear-gradient(100deg,#FF7A18_26%,#FF4D8D_64%)] bg-clip-text text-transparent">
//               to thrive.
//             </span>
//           </h2>

//           <p className="mx-auto max-w-[62ch] text-[clamp(16px,1.5vw,20px)] font-normal leading-[1.62] text-[#8B8A98] [text-wrap:pretty]">
//             Not a single tool, a complete daily family operating system. Every
//             feature serves the whole family. No feature works in isolation, grab
//             anywhere and glide.
//           </p>
//         </div>

//         {/* Overflow guard — cards translate well past the stage width during
//             transitions. `clip` (not `hidden`) contains that horizontally
//             without creating a scroll container, so page margins never shift
//             and sticky/3D ancestors keep working. */}
//         <div className="car-clip relative w-full">
//           {/* Carousel stage */}
//           <div
//             ref={carRef}
//             style={{ height: metrics.height, perspective: metrics.persp }}
//             className="car relative mx-auto w-full max-w-[1120px] cursor-pointer select-none"
//             aria-roledescription="carousel"
//             onClick={onStageClick}
//             onPointerEnter={stop}
//             onPointerLeave={restart}
//           >
//             <div className="absolute inset-0 [transform-style:preserve-3d]">
//               {FEATURES.map((f, i) => {
//                 const Ico = f.Icon;
//                 return (
//                   <div
//                     key={f.name}
//                     ref={(el) => {
//                       cardRefs.current[i] = el;
//                     }}
//                     style={{
//                       width: metrics.card,
//                       height: metrics.cardH,
//                       marginLeft: -metrics.card / 2,
//                       marginTop: -metrics.cardH / 2,
//                     }}
//                     className={`card absolute left-1/2 top-1/2 flex flex-col gap-5 rounded-[28px] border border-transparent p-[32px_30px_30px] max-[640px]:gap-4 max-[640px]:p-[28px_24px] ${i === active ? "cursor-default" : "cursor-pointer"
//                       }`}
//                   >
//                     {/* Icon box — gradient ring + gradient glyph */}
//                     <div className="c-ico relative flex h-[52px] w-[52px] flex-none items-center justify-center rounded-[15px] bg-white/[0.04] sm:h-[60px] sm:w-[60px] sm:rounded-[17px]">
//                       <Ico size={28} weight="duotone" className="relative z-[1]" />
//                     </div>

//                     <h3 className="m-0 font-['Outfit',sans-serif] text-[clamp(20px,4.5vw,25px)] font-bold leading-[1.15] tracking-[-0.01em] text-white">
//                       {f.name}
//                     </h3>
//                     <p className="m-0 text-[clamp(13px,3.4vw,15px)] font-normal leading-[1.55] text-[#8B8A98]">
//                       {f.desc}
//                     </p>

//                     <div className="mt-auto flex flex-wrap items-center gap-x-[9px] gap-y-1 border-t border-white/[0.06] pt-[18px]">
//                       <span className="h-2 w-2 flex-none rounded-full bg-[linear-gradient(145deg,#FFB13D_0%,#FF7A18_34%,#FF4D8D_70%,#A24BFF_100%)] shadow-[0_0_8px_rgba(255,122,24,.5)]" />
//                       <span className="font-['Outfit',sans-serif] text-[10.5px] font-semibold uppercase tracking-[.12em] text-[#5C5B68]">
//                         Builds
//                       </span>
//                       <span className="text-[12.5px] font-medium tracking-[.01em] text-[#C3C2CE]">
//                         {f.builds}
//                       </span>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>

//         {/* Counter */}
//         <div className="mt-[clamp(24px,3vw,40px)] text-center font-['Outfit',sans-serif] text-[14px] font-bold tracking-[0.02em] text-[#8B8A98]">
//           <b className="text-[#FFB36B]">{pad(active + 1)}</b> / {N} ·{" "}
//           <span>{FEATURES[active].name}</span>
//         </div>

//         {/* Dots */}
//         <div className="mx-auto mt-4 flex max-w-[440px] flex-wrap items-center justify-center gap-2">
//           {FEATURES.map((f, i) => (
//             <button
//               key={f.name}
//               aria-label={`Go to feature ${i + 1}`}
//               aria-current={i === active}
//               onClick={() => go(i)}
//               className={`car-dot h-2 cursor-pointer rounded-full border-0 p-0 transition-all duration-[280ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${i === active
//                 ? "w-[26px] rounded-[5px] bg-[linear-gradient(145deg,#FFB13D_0%,#FF7A18_34%,#FF4D8D_70%,#A24BFF_100%)]"
//                 : "w-2 bg-white/[0.18] hover:bg-white/40"
//                 }`}
//             />
//           ))}
//         </div>
//       </div>

//       <style jsx>{`
//         /* Horizontal containment. overflow-x:clip needs overflow-y:visible to
//            stay a non-scrolling clip — 'hidden' on one axis would force the
//            other into a scroll container and cut the card shadows. */
//         .car-clip {
//           overflow-x: clip;
//           overflow-y: visible;
//           /* breathing room so shadows aren't sheared at the edge */
//           padding-inline: 0;
//         }

//         /* Card — dark premium glass.
//            NO backdrop-filter: Chromium intermittently fails to composite
//            backdrop-filtered layers inside a 3D (preserve-3d + rotateY) stage,
//            which makes cards randomly invisible. Solid dark fill renders
//            reliably. */
//         .card {
//           --ring: linear-gradient(
//             155deg,
//             rgba(255, 255, 255, 0.3) 0%,
//             rgba(255, 255, 255, 0.09) 22%,
//             rgba(255, 255, 255, 0.03) 55%,
//             rgba(255, 255, 255, 0.06) 80%,
//             rgba(255, 255, 255, 0.14) 100%
//           );
//           background: linear-gradient(180deg, #17171d 0%, #0d0d12 100%);
//           box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1),
//             inset 0 -1px 0 rgba(255, 255, 255, 0.03), 0 26px 60px rgba(0, 0, 0, 0.55);
//           transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1),
//             opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1),
//             box-shadow 0.45s cubic-bezier(0.22, 1, 0.36, 1),
//             background 0.45s cubic-bezier(0.22, 1, 0.36, 1);
//           will-change: transform, opacity;
//           backface-visibility: hidden;
//           -webkit-backface-visibility: hidden;
//         }
//         /* premium glass border — gradient ring masked to the 1px edge */
//         .card::after {
//           content: "";
//           position: absolute;
//           inset: 0;
//           border-radius: inherit;
//           padding: 1px;
//           background: var(--ring);
//           -webkit-mask: linear-gradient(#000 0 0) content-box,
//             linear-gradient(#000 0 0);
//           -webkit-mask-composite: xor;
//           mask-composite: exclude;
//           pointer-events: none;
//         }
//         .card.is-active {
//           --ring: linear-gradient(
//             155deg,
//             rgba(255, 255, 255, 0.46) 0%,
//             rgba(255, 255, 255, 0.15) 22%,
//             rgba(255, 255, 255, 0.06) 55%,
//             rgba(255, 255, 255, 0.1) 80%,
//             rgba(255, 255, 255, 0.24) 100%
//           );
//           background: linear-gradient(180deg, #1b1b22 0%, #101016 100%);
//           box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.16),
//             inset 0 -1px 0 rgba(255, 255, 255, 0.05), 0 30px 74px rgba(0, 0, 0, 0.6),
//             0 0 44px rgba(255, 122, 24, 0.08);
//         }

//         /* Icon box gradient ring (mask-composite) + gradient-filled glyph */
//         .c-ico::before {
//           content: "";
//           position: absolute;
//           inset: 0;
//           border-radius: inherit;
//           padding: 2px;
//           background: linear-gradient(
//             145deg,
//             #ffb13d 0%,
//             #ff7a18 34%,
//             #ff4d8d 70%,
//             #a24bff 100%
//           );
//           -webkit-mask: linear-gradient(#000 0 0) content-box,
//             linear-gradient(#000 0 0);
//           -webkit-mask-composite: xor;
//           mask-composite: exclude;
//           pointer-events: none;
//         }
//         .c-ico :global(svg) {
//           color: #ff9a40;
//         }
//       `}</style>
//     </section>
//   );
// }

// import { useCallback, useEffect, useRef, useState } from "react";
// import type { Icon } from "@phosphor-icons/react";
// import {
//   FlagPennant,
//   PuzzlePiece,
//   ChatsCircle,
//   MagnifyingGlass,
//   Headphones,
//   Star,
//   Trophy,
//   GraduationCap,
//   Barbell,
//   BookOpen,
//   Lightbulb,
//   HandsPraying,
//   FolderOpen,
//   PencilSimple,
//   GameController,
//   Broadcast,
// } from "@phosphor-icons/react";

// type Feature = {
//   Icon: Icon;
//   name: string;
//   desc: string;
//   builds: string;
// };

// const FEATURES: Feature[] = [
//   { Icon: FlagPennant, name: "Milestone Tracking", desc: "A cosmic journey through 20+ tiers — tools unlock as your family advances.", builds: "Discipline & shared purpose" },
//   { Icon: PuzzlePiece, name: "Life Skills Activities", desc: "1500+ psychologist-designed offline activities for EQ, AQ, CQ and SQ.", builds: "Critical thinking & EQ" },
//   { Icon: ChatsCircle, name: "WonderChat", desc: "Age-smart prompts for meaningful five to ten minute parent-child talks.", builds: "Reflection & trust" },
//   { Icon: MagnifyingGlass, name: "Know Your Child", desc: "Decodes behaviour with science-backed explanations so you respond, not react.", builds: "Awareness & less conflict" },
//   { Icon: Headphones, name: "Audio Stories", desc: "1000+ value-based stories with a Socratic question at the end of each.", builds: "Imagination & empathy" },
//   { Icon: Star, name: "StrengthFinder", desc: "A psychometric read to identify your child's natural strengths.", builds: "Self-awareness & direction" },
//   { Icon: Trophy, name: "Challenges", desc: "Guided parent-child challenges for discipline, habit-building and grit.", builds: "Self-regulation & resilience" },
//   { Icon: GraduationCap, name: "Virtues Workshop", desc: "A weekly focus on one parenting quality, with small daily challenges.", builds: "Caregiver growth" },
//   { Icon: Barbell, name: "Habit-Up", desc: "Daily fitness, mental-health and household-responsibility routines.", builds: "Health & discipline" },
//   { Icon: BookOpen, name: "Read-O-Meter", desc: "Tracks daily reading minutes and rewards consistent habits.", builds: "Language & communication" },
//   { Icon: Lightbulb, name: "Case Studies", desc: "Harvard-inspired real-world scenarios for everyday problem-solving.", builds: "Decision-making & ethics" },
//   { Icon: HandsPraying, name: "Shlok and Mudra", desc: "Indian wisdom brought to life through shlok audio and mudras.", builds: "Cultural identity & focus" },
//   { Icon: FolderOpen, name: "Portfolio", desc: "A living record of achievements across sport, academics and arts.", builds: "Pride & accountability" },
//   { Icon: PencilSimple, name: "Create Task", desc: "Build custom activities tailored to your child and family context.", builds: "Personalisation & ownership" },
//   { Icon: GameController, name: "Points and Rewards", desc: "Gamified recognition that links real effort to earned rewards.", builds: "Motivation & consistency" },
//   { Icon: Broadcast, name: "Parenting Pulse", desc: "A daily feed of age-matched signals and one action to take today.", builds: "Timely & actionable" },
// ];

// const N = FEATURES.length;

// /** Pause between steps, in ms. One card per tick. */
// const AUTOPLAY_MS = 3800;

// /**
//  * Card + spacing metrics, derived from viewport width.
//  * SPACING must scale with the card, otherwise neighbours fly off-screen on
//  * phones and bunch up on wide monitors. Recomputed on every resize.
//  * `persp` is kept in sync with offsetAtX()'s projection math.
//  */
// function getMetrics(w: number) {
//   if (w <= 480) return { card: 260, cardH: 372, spacing: 172, depth: 150, height: 420, persp: 1340 };
//   if (w <= 640) return { card: 292, cardH: 388, spacing: 196, depth: 180, height: 452, persp: 1500 };
//   if (w <= 900) return { card: 310, cardH: 392, spacing: 220, depth: 210, height: 462, persp: 1600 };
//   return { card: 330, cardH: 400, spacing: 244, depth: 240, height: 472, persp: 1700 };
// }

// const pad = (n: number) => (n < 10 ? "0" : "") + n;

// export default function FeatureCarousel() {
//   const carRef = useRef<HTMLDivElement | null>(null);
//   const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

//   // `pos` is unbounded — it just keeps counting up, and the shortest-path
//   // offset wrap in place() turns that into an endless loop (…15 -> 16 lands
//   // on index 0 again, and -1 lands on 15).
//   const posRef = useRef(0);
//   const [active, setActive] = useState(0);

//   const metricsRef = useRef(getMetrics(1280));
//   const [metrics, setMetrics] = useState(() => getMetrics(1280));

//   const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
//   const reduceRef = useRef(false);

//   const idx = useCallback(() => {
//     const p = posRef.current;
//     return ((Math.round(p) % N) + N) % N;
//   }, []);

//   /** Position every card in 3D space for a given pos. */
//   const place = useCallback((p: number, withTrans: boolean) => {
//     const { spacing, depth } = metricsRef.current;
//     for (let i = 0; i < N; i++) {
//       const el = cardRefs.current[i];
//       if (!el) continue;

//       // Shortest signed distance around the ring — this is what makes the
//       // carousel infinite: card 0 is "one step right" of card 15, not 15 back.
//       // Using >= / <= at the N/2 antipode gives a deterministic side for the
//       // exactly-opposite card, so an even-length ring never flickers there.
//       let off = i - p;
//       if (off >= N / 2) off -= N;
//       if (off < -N / 2) off += N;
//       const abs = Math.abs(off);

//       el.style.transition = withTrans ? "" : "none";

//       // Far-off cards: park them out of sight, skip the math.
//       // Kept at a small x so the parked stack never widens the stage.
//       if (abs > 3.15) {
//         el.style.opacity = "0";
//         el.style.pointerEvents = "none";
//         el.style.transform = `translate3d(${(off > 0 ? 1 : -1) * 40}px,0,-1050px) scale(.5)`;
//         el.classList.remove("is-active");
//         continue;
//       }

//       el.style.pointerEvents = "auto";
//       const isActive = abs < 0.5;
//       // Round X to whole pixels — fractional translate on a rotateY'd, scaled
//       // layer is what makes side cards look soft. The active (front) card gets
//       // NO rotation and NO scale so it rasterises crisp; only the depth cards
//       // carry the 3D transform.
//       const x = Math.round(off * spacing);
//       const z = Math.round(-abs * depth);
//       const rot = isActive ? 0 : Math.max(-44, Math.min(44, off * -26));
//       const scale = isActive ? 1 : Math.max(0.56, 1 - abs * 0.15);
//       const op = Math.max(0, 1 - abs * 0.4);

//       el.style.opacity = op.toFixed(3);
//       el.style.zIndex = String(120 - Math.round(abs * 10));
//       el.style.transform = `translate3d(${x}px,0,${z}px) rotateY(${rot.toFixed(2)}deg) scale(${scale.toFixed(3)})`;
//       el.classList.toggle("is-active", isActive);
//     }
//   }, []);

//   const sync = useCallback(() => setActive(idx()), [idx]);

//   const stop = useCallback(() => {
//     if (timerRef.current) {
//       clearInterval(timerRef.current);
//       timerRef.current = null;
//     }
//   }, []);

//   /** Advance d whole cards and come to rest. */
//   const step = useCallback(
//     (d: number) => {
//       posRef.current = Math.round(posRef.current) + d;
//       place(posRef.current, true);
//       sync();
//     },
//     [place, sync]
//   );

//   // step() is referenced by the interval, but restart() must not be rebuilt
//   // every time step changes — a ref keeps the timer stable.
//   const stepRef = useRef(step);
//   stepRef.current = step;

//   const restart = useCallback(() => {
//     if (reduceRef.current) return;
//     stop();
//     timerRef.current = setInterval(() => stepRef.current(1), AUTOPLAY_MS);
//   }, [stop]);

//   /** Jump to a specific index by the shortest path around the loop. */
//   const go = useCallback(
//     (i: number) => {
//       const cur = idx();
//       let off = i - cur;
//       if (off > N / 2) off -= N;
//       if (off < -N / 2) off += N;
//       posRef.current = Math.round(posRef.current) + off;
//       place(posRef.current, true);
//       sync();
//       restart(); // reset the clock so the click gets its full dwell
//     },
//     [idx, place, sync, restart]
//   );

//   // Init: honour reduced-motion, lay out cards, start autoplay
//   useEffect(() => {
//     const mq =
//       typeof window !== "undefined" && window.matchMedia
//         ? window.matchMedia("(prefers-reduced-motion: reduce)")
//         : null;
//     reduceRef.current = !!mq?.matches;
//     const onMq = (e: MediaQueryListEvent) => {
//       reduceRef.current = e.matches;
//       if (e.matches) stop();
//       else restart();
//     };
//     mq?.addEventListener?.("change", onMq);

//     const applyMetrics = () => {
//       const m = getMetrics(window.innerWidth);
//       metricsRef.current = m;
//       setMetrics(m);
//       place(posRef.current, false); // re-lay out without animating
//     };

//     applyMetrics();
//     sync();
//     restart();

//     // Don't tick while the tab is hidden — otherwise the carousel silently
//     // races through several cards and jumps on return.
//     const onVis = () => {
//       if (document.hidden) stop();
//       else restart();
//     };

//     window.addEventListener("resize", applyMetrics);
//     document.addEventListener("visibilitychange", onVis);

//     return () => {
//       window.removeEventListener("resize", applyMetrics);
//       document.removeEventListener("visibilitychange", onVis);
//       mq?.removeEventListener?.("change", onMq);
//       stop();
//     };
//   }, [place, sync, restart, stop]);

//   // Keyboard nav
//   useEffect(() => {
//     const onKey = (e: KeyboardEvent) => {
//       if (e.key === "ArrowRight") {
//         step(1);
//         restart();
//       } else if (e.key === "ArrowLeft") {
//         step(-1);
//         restart();
//       }
//     };
//     window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//   }, [step, restart]);

//   /**
//    * Click-to-focus, resolved geometrically.
//    * Native hit-testing on 3D-rotated cards is unreliable inside preserve-3d,
//    * so clicks never depend on which element the browser thinks was hit.
//    * Measure the click's X relative to the stage centre and map it to the card
//    * slot whose projected span contains that point.
//    */
//   const offsetAtX = useCallback((relX: number) => {
//     const { card, spacing, depth, persp } = metricsRef.current;
//     const half = card / 2;
//     const s = relX < 0 ? -1 : 1;
//     const ax = Math.abs(relX);
//     if (ax <= half) return 0; // centre card
//     for (let k = 1; k <= 3; k++) {
//       const pj = persp / (persp + k * depth);
//       const scale = Math.max(0.56, 1 - k * 0.15);
//       const rot = (Math.min(44, k * 26) * Math.PI) / 180;
//       const rightEdge = (k * spacing + half * scale * Math.cos(rot)) * pj;
//       if (ax <= rightEdge) return s * k;
//     }
//     return 0; // empty space — ignore
//   }, []);

//   const onStageClick = (e: React.MouseEvent<HTMLDivElement>) => {
//     const el = carRef.current;
//     if (!el) return;
//     const rect = el.getBoundingClientRect();
//     const relX = e.clientX - rect.left - rect.width / 2;
//     const relY = e.clientY - rect.top - rect.height / 2;
//     if (Math.abs(relY) > metricsRef.current.cardH / 2 + 10) return; // outside the card band
//     const off = offsetAtX(relX);
//     if (off) {
//       step(off);
//       restart();
//     }
//   };

//   return (
//     <section
//       id="features"
//       className="relative w-full bg-[#050507] py-[clamp(64px,8vw,120px)] font-['Poppins',sans-serif] text-[#C3C2CE] antialiased"
//     >
//       <div className="relative z-[1] mx-auto w-full max-w-[1240px] px-8 max-[640px]:px-4">
//         {/* Section head */}
//         <div className="mx-auto mb-[clamp(40px,5vw,72px)] flex max-w-[820px] flex-col items-center gap-5 text-center">
//           <span className="inline-flex h-[34px] items-center gap-[9px] rounded-full border border-[rgba(255,154,64,0.28)] bg-[linear-gradient(180deg,rgba(255,154,64,0.05)_0%,rgba(255,122,24,0.02)_100%)] px-[18px] font-['Outfit',sans-serif] text-[12px] font-semibold uppercase tracking-[0.18em] text-[#FFB36B] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
//             <span className="h-[7px] w-[7px] rounded-full bg-[#FF9A40] shadow-[0_0_8px_#FF9A40]" />
//             The ecosystem
//           </span>

//           <h2 className="m-0 font-['Outfit',sans-serif] text-[clamp(34px,4.6vw,60px)] font-extrabold leading-[1.06] tracking-[-0.02em] text-white [text-wrap:balance]">
//             Everything a family needs{" "}
//             <span className="bg-[linear-gradient(100deg,#FF7A18_26%,#FF4D8D_64%)] bg-clip-text text-transparent">
//               to thrive.
//             </span>
//           </h2>

//           <p className="mx-auto max-w-[62ch] text-[clamp(16px,1.5vw,20px)] font-normal leading-[1.62] text-[#8B8A98] [text-wrap:pretty]">
//             Not a single tool, a complete daily family operating system. Every
//             feature serves the whole family. No feature works in isolation, grab
//             anywhere and glide.
//           </p>
//         </div>

//         {/* Overflow guard — cards translate well past the stage width during
//             transitions. `clip` (not `hidden`) contains that horizontally
//             without creating a scroll container, so page margins never shift
//             and sticky/3D ancestors keep working. */}
//         <div className="car-clip relative w-full">
//           {/* Carousel stage */}
//           <div
//             ref={carRef}
//             style={{ height: metrics.height, perspective: metrics.persp }}
//             className="car relative mx-auto w-full max-w-[1120px] cursor-pointer select-none"
//             aria-roledescription="carousel"
//             onClick={onStageClick}
//             onPointerEnter={stop}
//             onPointerLeave={restart}
//           >
//             <div className="absolute inset-0 [transform-style:preserve-3d]">
//               {FEATURES.map((f, i) => {
//                 const Ico = f.Icon;
//                 return (
//                   <div
//                     key={f.name}
//                     ref={(el) => {
//                       cardRefs.current[i] = el;
//                     }}
//                     style={{
//                       width: metrics.card,
//                       height: metrics.cardH,
//                       marginLeft: -metrics.card / 2,
//                       marginTop: -metrics.cardH / 2,
//                     }}
//                     className={`card absolute left-1/2 top-1/2 flex flex-col gap-5 rounded-[28px] border border-transparent p-[32px_30px_30px] max-[640px]:gap-4 max-[640px]:p-[28px_24px] ${i === active ? "cursor-default" : "cursor-pointer"
//                       }`}
//                   >
//                     {/* Icon box — gradient ring + gradient glyph */}
//                     <div className="c-ico relative flex h-[52px] w-[52px] flex-none items-center justify-center rounded-[15px] bg-white/[0.04] sm:h-[60px] sm:w-[60px] sm:rounded-[17px]">
//                       <Ico size={28} weight="duotone" className="relative z-[1]" />
//                     </div>

//                     <h3 className="m-0 font-['Outfit',sans-serif] text-[clamp(20px,4.5vw,25px)] font-bold leading-[1.15] tracking-[-0.01em] text-white">
//                       {f.name}
//                     </h3>
//                     <p className="m-0 text-[clamp(13px,3.4vw,15px)] font-normal leading-[1.55] text-[#8B8A98]">
//                       {f.desc}
//                     </p>

//                     <div className="mt-auto flex flex-wrap items-center gap-x-[9px] gap-y-1 border-t border-white/[0.06] pt-[18px]">
//                       <span className="h-2 w-2 flex-none rounded-full bg-[linear-gradient(145deg,#FFB13D_0%,#FF7A18_34%,#FF4D8D_70%,#A24BFF_100%)] shadow-[0_0_8px_rgba(255,122,24,.5)]" />
//                       <span className="font-['Outfit',sans-serif] text-[10.5px] font-semibold uppercase tracking-[.12em] text-[#5C5B68]">
//                         Builds
//                       </span>
//                       <span className="text-[12.5px] font-medium tracking-[.01em] text-[#C3C2CE]">
//                         {f.builds}
//                       </span>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>

//         {/* Counter */}
//         <div className="mt-[clamp(24px,3vw,40px)] text-center font-['Outfit',sans-serif] text-[14px] font-bold tracking-[0.02em] text-[#8B8A98]">
//           <b className="text-[#FFB36B]">{pad(active + 1)}</b> / {N} ·{" "}
//           <span>{FEATURES[active].name}</span>
//         </div>

//         {/* Dots */}
//         <div className="mx-auto mt-4 flex max-w-[440px] flex-wrap items-center justify-center gap-2">
//           {FEATURES.map((f, i) => (
//             <button
//               key={f.name}
//               aria-label={`Go to feature ${i + 1}`}
//               aria-current={i === active}
//               onClick={() => go(i)}
//               className={`car-dot h-2 cursor-pointer rounded-full border-0 p-0 transition-all duration-[280ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${i === active
//                 ? "w-[26px] rounded-[5px] bg-[linear-gradient(145deg,#FFB13D_0%,#FF7A18_34%,#FF4D8D_70%,#A24BFF_100%)]"
//                 : "w-2 bg-white/[0.18] hover:bg-white/40"
//                 }`}
//             />
//           ))}
//         </div>
//       </div>

//       <style jsx>{`
//         /* Horizontal containment. overflow-x:clip needs overflow-y:visible to
//            stay a non-scrolling clip — 'hidden' on one axis would force the
//            other into a scroll container and cut the card shadows. */
//         .car-clip {
//           overflow-x: clip;
//           overflow-y: visible;
//         }
//         /* On phones the parent's px-4 plus the stage width can still exceed the
//            viewport during a transition. Break the clip out to the full screen
//            width and re-centre it, so the horizontal overflow is clipped against
//            the viewport edge — the page can never gain a horizontal scrollbar or
//            shift its margin. */
//         @media (max-width: 640px) {
//           .car-clip {
//             width: 100vw;
//             margin-left: 50%;
//             transform: translateX(-50%);
//           }
//         }

//         /* Card — dark premium glass.
//            NO backdrop-filter: Chromium intermittently fails to composite
//            backdrop-filtered layers inside a 3D (preserve-3d + rotateY) stage,
//            which makes cards randomly invisible. Solid dark fill renders
//            reliably. */
//         .card {
//           --ring: linear-gradient(
//             155deg,
//             rgba(255, 255, 255, 0.3) 0%,
//             rgba(255, 255, 255, 0.09) 22%,
//             rgba(255, 255, 255, 0.03) 55%,
//             rgba(255, 255, 255, 0.06) 80%,
//             rgba(255, 255, 255, 0.14) 100%
//           );
//           background: linear-gradient(180deg, #17171d 0%, #0d0d12 100%);
//           box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1),
//             inset 0 -1px 0 rgba(255, 255, 255, 0.03), 0 26px 60px rgba(0, 0, 0, 0.55);
//           transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1),
//             opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1),
//             box-shadow 0.45s cubic-bezier(0.22, 1, 0.36, 1),
//             background 0.45s cubic-bezier(0.22, 1, 0.36, 1);
//           will-change: transform, opacity;
//           backface-visibility: hidden;
//           -webkit-backface-visibility: hidden;
//           /* Force the card onto its own crisp raster layer. Without this,
//              Chromium can render a rotateY'd card into a low-res texture and
//              the text/icons look blurry — most visible on the side cards. */
//           transform-style: flat;
//           -webkit-font-smoothing: antialiased;
//         }
//         /* The front card carries no 3D transform, so pin it to the pixel grid
//            for maximum sharpness. */
//         .card.is-active {
//           image-rendering: auto;
//         }
//         /* premium glass border — gradient ring masked to the 1px edge */
//         .card::after {
//           content: "";
//           position: absolute;
//           inset: 0;
//           border-radius: inherit;
//           padding: 1px;
//           background: var(--ring);
//           -webkit-mask: linear-gradient(#000 0 0) content-box,
//             linear-gradient(#000 0 0);
//           -webkit-mask-composite: xor;
//           mask-composite: exclude;
//           pointer-events: none;
//         }
//         .card.is-active {
//           --ring: linear-gradient(
//             155deg,
//             rgba(255, 255, 255, 0.46) 0%,
//             rgba(255, 255, 255, 0.15) 22%,
//             rgba(255, 255, 255, 0.06) 55%,
//             rgba(255, 255, 255, 0.1) 80%,
//             rgba(255, 255, 255, 0.24) 100%
//           );
//           background: linear-gradient(180deg, #1b1b22 0%, #101016 100%);
//           box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.16),
//             inset 0 -1px 0 rgba(255, 255, 255, 0.05), 0 30px 74px rgba(0, 0, 0, 0.6),
//             0 0 44px rgba(255, 122, 24, 0.08);
//         }

//         /* Icon box gradient ring (mask-composite) + gradient-filled glyph */
//         .c-ico::before {
//           content: "";
//           position: absolute;
//           inset: 0;
//           border-radius: inherit;
//           padding: 2px;
//           background: linear-gradient(
//             145deg,
//             #ffb13d 0%,
//             #ff7a18 34%,
//             #ff4d8d 70%,
//             #a24bff 100%
//           );
//           -webkit-mask: linear-gradient(#000 0 0) content-box,
//             linear-gradient(#000 0 0);
//           -webkit-mask-composite: xor;
//           mask-composite: exclude;
//           pointer-events: none;
//         }
//         .c-ico :global(svg) {
//           color: #ff9a40;
//         }
//       `}</style>
//     </section>
//   );
// }

//INFINITE SCROLLING  
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { Icon } from "@phosphor-icons/react";
import {
  FlagPennant,
  PuzzlePiece,
  ChatsCircle,
  MagnifyingGlass,
  Headphones,
  Star,
  Trophy,
  GraduationCap,
  Barbell,
  BookOpen,
  Lightbulb,
  HandsPraying,
  FolderOpen,
  PencilSimple,
  GameController,
  Broadcast,
} from "@phosphor-icons/react";

type Feature = {
  Icon: Icon;
  name: string;
  desc: string;
  builds: string;
};

const FEATURES: Feature[] = [
  { Icon: FlagPennant, name: "Milestone Tracking", desc: "A cosmic journey through 20+ tiers — tools unlock as your family advances.", builds: "Discipline & shared purpose" },
  { Icon: PuzzlePiece, name: "Life Skills Activities", desc: "1500+ psychologist-designed offline activities for EQ, AQ, CQ and SQ.", builds: "Critical thinking & EQ" },
  { Icon: ChatsCircle, name: "WonderChat", desc: "Age-smart prompts for meaningful five to ten minute parent-child talks.", builds: "Reflection & trust" },
  { Icon: MagnifyingGlass, name: "Know Your Child", desc: "Decodes behaviour with science-backed explanations so you respond, not react.", builds: "Awareness & less conflict" },
  { Icon: Headphones, name: "Audio Stories", desc: "1000+ value-based stories with a Socratic question at the end of each.", builds: "Imagination & empathy" },
  { Icon: Star, name: "StrengthFinder", desc: "A psychometric read to identify your child's natural strengths.", builds: "Self-awareness & direction" },
  { Icon: Trophy, name: "Challenges", desc: "Guided parent-child challenges for discipline, habit-building and grit.", builds: "Self-regulation & resilience" },
  { Icon: GraduationCap, name: "Virtues Workshop", desc: "A weekly focus on one parenting quality, with small daily challenges.", builds: "Caregiver growth" },
  { Icon: Barbell, name: "Habit-Up", desc: "Daily fitness, mental-health and household-responsibility routines.", builds: "Health & discipline" },
  { Icon: BookOpen, name: "Read-O-Meter", desc: "Tracks daily reading minutes and rewards consistent habits.", builds: "Language & communication" },
  { Icon: Lightbulb, name: "Case Studies", desc: "Harvard-inspired real-world scenarios for everyday problem-solving.", builds: "Decision-making & ethics" },
  { Icon: HandsPraying, name: "Shlok and Mudra", desc: "Indian wisdom brought to life through shlok audio and mudras.", builds: "Cultural identity & focus" },
  { Icon: FolderOpen, name: "Portfolio", desc: "A living record of achievements across sport, academics and arts.", builds: "Pride & accountability" },
  { Icon: PencilSimple, name: "Create Task", desc: "Build custom activities tailored to your child and family context.", builds: "Personalisation & ownership" },
  { Icon: GameController, name: "Points and Rewards", desc: "Gamified recognition that links real effort to earned rewards.", builds: "Motivation & consistency" },
  { Icon: Broadcast, name: "Parenting Pulse", desc: "A daily feed of age-matched signals and one action to take today.", builds: "Timely & actionable" },
];

const N = FEATURES.length;

/** Pause between steps, in ms. One card per tick. */
const AUTOPLAY_MS = 3800;

/**
 * Card + spacing metrics, derived from viewport width.
 * SPACING must scale with the card, otherwise neighbours fly off-screen on
 * phones and bunch up on wide monitors. Recomputed on every resize.
 * `persp` is kept in sync with offsetAtX()'s projection math.
 */
function getMetrics(w: number) {
  if (w <= 480) return { card: 260, cardH: 372, spacing: 172, depth: 150, height: 420, persp: 1340 };
  if (w <= 640) return { card: 292, cardH: 388, spacing: 196, depth: 180, height: 452, persp: 1500 };
  if (w <= 900) return { card: 310, cardH: 392, spacing: 220, depth: 210, height: 462, persp: 1600 };
  return { card: 330, cardH: 400, spacing: 244, depth: 240, height: 472, persp: 1700 };
}

const pad = (n: number) => (n < 10 ? "0" : "") + n;

/** Shortest signed distance around the N-length ring from `active` to `i`. */
function ringOffset(i: number, active: number) {
  let off = i - active;
  if (off >= N / 2) off -= N;
  if (off < -N / 2) off += N;
  return off;
}

export default function FeatureCarousel() {
  const carRef = useRef<HTMLDivElement | null>(null);

  // `active` is the ONLY source of truth for where every card sits. Every
  // card's transform is re-derived from it on every render (see cardStyle
  // below), so there is no imperative DOM state that can drift or leave a
  // card stranded off-stage — the exact class of bug that made a neighbour
  // vanish at the far end of the loop. Wrapping is plain modulo, so the
  // carousel truly never runs out of cards to advance to.
  const [active, setActive] = useState(0);

  const [metrics, setMetrics] = useState(() => getMetrics(1280));
  const metricsRef = useRef(metrics);
  metricsRef.current = metrics;

  // True only for the instant we need to re-lay-out without animating
  // (initial mount, resize). Everything else picks up the CSS transition.
  const [skipTransition, setSkipTransition] = useState(true);

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const reduceRef = useRef(false);

  const stop = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  /** Advance d whole cards. Wraps forever — (a + d) mod N, never bounded. */
  const step = useCallback((d: number) => {
    setActive((a) => (((a + d) % N) + N) % N);
  }, []);

  // step() is referenced by the interval, but restart() must not be rebuilt
  // every time step changes — a ref keeps the timer stable.
  const stepRef = useRef(step);
  stepRef.current = step;

  const restart = useCallback(() => {
    if (reduceRef.current) return;
    stop();
    timerRef.current = setInterval(() => stepRef.current(1), AUTOPLAY_MS);
  }, [stop]);

  /** Jump straight to index i. ringOffset() guarantees the render lands on
   *  the shortest path, so there's no separate "travel distance" to track. */
  const go = useCallback(
    (i: number) => {
      setActive(i);
      restart(); // reset the clock so the click gets its full dwell
    },
    [restart]
  );

  // Init: honour reduced-motion, lay out cards, start autoplay
  useEffect(() => {
    const mq =
      typeof window !== "undefined" && window.matchMedia
        ? window.matchMedia("(prefers-reduced-motion: reduce)")
        : null;
    reduceRef.current = !!mq?.matches;
    const onMq = (e: MediaQueryListEvent) => {
      reduceRef.current = e.matches;
      if (e.matches) stop();
      else restart();
    };
    mq?.addEventListener?.("change", onMq);

    const applyMetrics = () => {
      const m = getMetrics(window.innerWidth);
      setSkipTransition(true);
      setMetrics(m);
      // Double rAF: let the no-transition layout commit and paint once
      // before re-enabling transitions, otherwise the browser can tween
      // the very frame we wanted to be instant.
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setSkipTransition(false));
      });
    };

    applyMetrics();
    restart();

    // Don't tick while the tab is hidden — otherwise the carousel silently
    // races through several cards and jumps on return.
    const onVis = () => {
      if (document.hidden) stop();
      else restart();
    };

    window.addEventListener("resize", applyMetrics);
    document.addEventListener("visibilitychange", onVis);

    return () => {
      window.removeEventListener("resize", applyMetrics);
      document.removeEventListener("visibilitychange", onVis);
      mq?.removeEventListener?.("change", onMq);
      stop();
    };
  }, [restart, stop]);

  // Keyboard nav
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        step(1);
        restart();
      } else if (e.key === "ArrowLeft") {
        step(-1);
        restart();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [step, restart]);

  /**
   * Click-to-focus, resolved geometrically.
   * Native hit-testing on 3D-rotated cards is unreliable inside preserve-3d,
   * so clicks never depend on which element the browser thinks was hit.
   * Measure the click's X relative to the stage centre and map it to the card
   * slot whose projected span contains that point.
   */
  const offsetAtX = useCallback((relX: number) => {
    const { card, spacing, depth, persp } = metricsRef.current;
    const half = card / 2;
    const s = relX < 0 ? -1 : 1;
    const ax = Math.abs(relX);
    if (ax <= half) return 0; // centre card
    for (let k = 1; k <= 2; k++) {
      const pj = persp / (persp + k * depth);
      const scale = Math.max(0.56, 1 - k * 0.15);
      const rot = (Math.min(44, k * 26) * Math.PI) / 180;
      const rightEdge = (k * spacing + half * scale * Math.cos(rot)) * pj;
      if (ax <= rightEdge) return s * k;
    }
    return 0; // empty space — ignore
  }, []);

  const onStageClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = carRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    if (Math.abs(relY) > metricsRef.current.cardH / 2 + 10) return; // outside the card band
    const off = offsetAtX(relX);
    if (off) {
      step(off);
      restart();
    }
  };

  /** Pure function of (i, active, metrics) — every card's full inline style,
   *  recomputed together on every render so none can lag behind. */
  const cardStyle = useCallback(
    (i: number): React.CSSProperties => {
      const { card, cardH, spacing, depth } = metrics;
      const off = ringOffset(i, active);
      const abs = Math.abs(off);
      const parked = abs > 2.15;

      const base: React.CSSProperties = {
        width: card,
        height: cardH,
        marginLeft: -card / 2,
        marginTop: -cardH / 2,
        zIndex: 120 - Math.round(abs * 10),
        pointerEvents: parked ? "none" : "auto",
        transition: skipTransition ? "none" : undefined,
      };

      if (parked) {
        // Far-off cards: park them out of sight, skip the rest of the math.
        // Kept at a small x so the parked stack never widens the stage.
        return {
          ...base,
          opacity: 0,
          transform: `translate3d(${(off > 0 ? 1 : -1) * 40}px,0,-1050px) scale(.5)`,
        };
      }

      const isActive = abs < 0.5;
      // Round X to whole pixels — fractional translate on a rotateY'd, scaled
      // layer is what makes side cards look soft. The active (front) card gets
      // NO rotation and NO scale so it rasterises crisp; only the depth cards
      // carry the 3D transform.
      const x = Math.round(off * spacing);
      const z = Math.round(-abs * depth);
      const rot = isActive ? 0 : Math.max(-44, Math.min(44, off * -26));
      const scale = isActive ? 1 : Math.max(0.56, 1 - abs * 0.15);
      const opacity = isActive
        ? 1
        : Math.max(0.2, 1 - Math.pow(abs / 2.3, 1.2));

      return {
        ...base,
        opacity,
        transform: `translate3d(${x}px,0,${z}px) rotateY(${rot.toFixed(2)}deg) scale(${scale.toFixed(3)})`,
      };
    },
    [active, metrics, skipTransition]
  );

  const visibleIndices = useMemo(
    () => FEATURES.map((_, i) => i).filter((i) => Math.abs(ringOffset(i, active)) <= 2.3),
    [active]
  );

  return (
    <section
      id="features"
      className="relative w-full py-[clamp(64px,8vw,120px)] font-['Poppins',sans-serif] antialiased"
      style={{ background: "var(--site-page-bg)", color: "var(--site-text)" }}
    >
      <div className="relative z-[1] mx-auto w-full max-w-[1240px] px-8 max-[640px]:px-4">
        {/* Section head */}
        <div className="mx-auto mb-[clamp(40px,5vw,72px)] flex max-w-[820px] flex-col items-center gap-5 text-center">
          <span
            className="inline-flex h-[34px] items-center gap-[9px] rounded-full border px-[18px] font-['Outfit',sans-serif] text-[12px] font-semibold uppercase tracking-[0.18em] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
            style={{ borderColor: "var(--site-pill-border)", background: "var(--site-pill-bg)", color: "var(--site-pill-text)" }}
          >
            <span className="h-[7px] w-[7px] rounded-full bg-[#FF9A40] shadow-[0_0_8px_#FF9A40]" />
            The ecosystem
          </span>

          <h2
            className="m-0 font-['Outfit',sans-serif] text-[clamp(34px,4.6vw,60px)] font-extrabold leading-[1.06] tracking-[-0.02em] [text-wrap:balance]"
            style={{ color: "var(--site-heading)" }}
          >
            Everything a family needs{" "}
            <span className="bg-[linear-gradient(100deg,#FF7A18_26%,#FF4D8D_64%)] bg-clip-text text-transparent">
              to thrive.
            </span>
          </h2>

          <p
            className="mx-auto max-w-[62ch] text-[clamp(16px,1.5vw,20px)] font-normal leading-[1.62] [text-wrap:pretty]"
            style={{ color: "var(--site-text-muted)" }}
          >
            Not a single tool, a complete daily family operating system. Every
            feature serves the whole family. No feature works in isolation, grab
            anywhere and glide.
          </p>
        </div>

        {/* Overflow guard — cards translate well past the stage width during
            transitions. `clip` (not `hidden`) contains that horizontally
            without creating a scroll container, so page margins never shift
            and sticky/3D ancestors keep working. */}
        <div className="car-clip relative w-full">
          {/* Carousel stage */}
          <div
            ref={carRef}
            style={{ height: metrics.height, perspective: metrics.persp }}
            className="car relative mx-auto w-full max-w-[1120px] cursor-pointer select-none"
            aria-roledescription="carousel"
            onClick={onStageClick}
            onPointerEnter={stop}
            onPointerLeave={restart}
          >
            <div className="absolute inset-0 [transform-style:preserve-3d]">
              {/* Only cards within the visible band are mounted — parked
                  cards further out don't even need a DOM node, and every
                  mounted card's transform comes straight from cardStyle(i)
                  each render, so nothing can ever get left behind. */}
              {visibleIndices.map((i) => {
                const f = FEATURES[i];
                const Ico = f.Icon;
                const isActive = i === active;
                return (
                  <div
                    key={f.name}
                    style={cardStyle(i)}
                    className={`card absolute left-1/2 top-1/2 flex flex-col gap-5 rounded-[28px] border border-transparent p-[32px_30px_30px] max-[640px]:gap-4 max-[640px]:p-[28px_24px] ${isActive ? "cursor-default is-active" : "cursor-pointer"
                      }`}
                  >
                    {/* Icon box — gradient ring + gradient glyph */}
                    <div
                      className="c-ico relative flex h-[52px] w-[52px] flex-none items-center justify-center rounded-[15px] sm:h-[60px] sm:w-[60px] sm:rounded-[17px]"
                      style={{ background: "var(--site-card-border)" }}
                    >
                      <Ico size={28} weight="duotone" className="relative z-[1]" />
                    </div>

                    <h3
                      className="m-0 font-['Outfit',sans-serif] text-[clamp(20px,4.5vw,25px)] font-bold leading-[1.15] tracking-[-0.01em]"
                      style={{ color: "var(--site-heading)" }}
                    >
                      {f.name}
                    </h3>
                    <p
                      className="m-0 text-[clamp(13px,3.4vw,15px)] font-normal leading-[1.55]"
                      style={{ color: "var(--site-text-muted)" }}
                    >
                      {f.desc}
                    </p>

                    <div
                      className="mt-auto flex flex-wrap items-center gap-x-[9px] gap-y-1 border-t pt-[18px]"
                      style={{ borderColor: "var(--site-card-border)" }}
                    >
                      <span className="h-2 w-2 flex-none rounded-full bg-[linear-gradient(145deg,#FFB13D_0%,#FF7A18_34%,#FF4D8D_70%,#A24BFF_100%)] shadow-[0_0_8px_rgba(255,122,24,.5)]" />
                      <span className="font-['Outfit',sans-serif] text-[10.5px] font-semibold uppercase tracking-[.12em] text-[#5C5B68]">
                        Builds
                      </span>
                      <span
                        className="text-[12.5px] font-medium tracking-[.01em]"
                        style={{ color: "var(--site-text)" }}
                      >
                        {f.builds}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Counter */}
        <div
          className="mt-[clamp(24px,3vw,40px)] text-center font-['Outfit',sans-serif] text-[14px] font-bold tracking-[0.02em]"
          style={{ color: "var(--site-text-muted)" }}
        >
          <b style={{ color: "var(--site-pill-text)" }}>{pad(active + 1)}</b> / {N} ·{" "}
          <span>{FEATURES[active].name}</span>
        </div>

        {/* Dots */}
        <div className="mx-auto mt-4 flex max-w-[440px] flex-wrap items-center justify-center gap-2">
          {FEATURES.map((f, i) => (
            <button
              key={f.name}
              aria-label={`Go to feature ${i + 1}`}
              aria-current={i === active}
              onClick={() => go(i)}
              className={`car-dot h-2 cursor-pointer rounded-full border-0 p-0 transition-all duration-[280ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${i === active
                ? "w-[26px] rounded-[5px] bg-[linear-gradient(145deg,#FFB13D_0%,#FF7A18_34%,#FF4D8D_70%,#A24BFF_100%)]"
                : "w-2 bg-[var(--site-card-border)] hover:opacity-100"
                }`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        /* Horizontal containment. overflow-x:clip needs overflow-y:visible to
           stay a non-scrolling clip — 'hidden' on one axis would force the
           other into a scroll container and cut the card shadows. */
        .car-clip {
          overflow-x: clip;
          overflow-y: visible;
        }
        /* On phones the parent's px-4 plus the stage width can still exceed the
           viewport during a transition. Break the clip out to the full screen
           width and re-centre it, so the horizontal overflow is clipped against
           the viewport edge — the page can never gain a horizontal scrollbar or
           shift its margin. */
        @media (max-width: 640px) {
          .car-clip {
            width: 100vw;
            margin-left: 50%;
            transform: translateX(-50%);
          }
        }

        /* Card — dark premium glass.
           NO backdrop-filter: Chromium intermittently fails to composite
           backdrop-filtered layers inside a 3D (preserve-3d + rotateY) stage,
           which makes cards randomly invisible. Solid dark fill renders
           reliably. */
        .card {
          --ring: var(--site-card-border);
          background: #0f121d;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1),
            inset 0 -1px 0 rgba(255, 255, 255, 0.03), 0 26px 60px rgba(0, 0, 0, 0.55);
          transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1),
            opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 0.45s cubic-bezier(0.22, 1, 0.36, 1),
            background 0.45s cubic-bezier(0.22, 1, 0.36, 1);
          will-change: transform, opacity;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          /* Force the card onto its own crisp raster layer. Without this,
             Chromium can render a rotateY'd card into a low-res texture and
             the text/icons look blurry — most visible on the side cards. */
          transform-style: flat;
          -webkit-font-smoothing: antialiased;
        }
        /* The front card carries no 3D transform, so pin it to the pixel grid
           for maximum sharpness. */
        .card.is-active {
          image-rendering: auto;
        }
        /* premium glass border — gradient ring masked to the 1px edge */
        .card::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 1px;
          background: var(--ring);
          -webkit-mask: linear-gradient(#000 0 0) content-box,
            linear-gradient(#000 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }
        .card.is-active {
          --ring: var(--site-ghost-hover);
          background: linear-gradient(180deg, #1a1d2e 0%, #0d0f19 100%);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.16),
            inset 0 -1px 0 rgba(255, 255, 255, 0.05), 0 30px 74px rgba(0, 0, 0, 0.6),
            0 0 44px rgba(255, 122, 24, 0.08);
        }

        /* Icon box gradient ring (mask-composite) + gradient-filled glyph */
        .c-ico::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 2px;
          background: linear-gradient(
            145deg,
            #ffb13d 0%,
            #ff7a18 34%,
            #ff4d8d 70%,
            #a24bff 100%
          );
          -webkit-mask: linear-gradient(#000 0 0) content-box,
            linear-gradient(#000 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }
        .c-ico :global(svg) {
          color: #ff9a40;
        }
      `}</style>
    </section>
  );
}