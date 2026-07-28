// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";

// const HEADLINE_GRADIENT =
//   "linear-gradient(95.82deg, #ffb13d 0%, #ff7a18 26%, #ff4d8d 64%, #a24bff 100%)";

// const CARD_SHADOW =
//   "inset 0 1px 0 rgba(255,255,255,0.16), inset 0 -1px 0 rgba(255,255,255,0.05), 0 18px 50px rgba(0,0,0,0.30)";
// const CARD_SHADOW_HOVER =
//   "inset 0 1px 0 rgba(255,255,255,0.28), inset 0 -1px 0 rgba(255,255,255,0.08), 0 32px 80px rgba(0,0,0,0.45), 0 0 60px rgba(255,154,64,0.12)";

// type Side = { age: string; img: string; title: string; body: string };
// type Card = { left: Side; right: Side };

// const CARDS: Card[] = [
//   {
//     left: { age: "AGE 7", img: "blueone", title: "Needs a screen to calm down", body: "Can't self-regulate without a device" },
//     right: { age: "AGE 15", img: "redone", title: "Can't handle discomfort", body: "Without his phone, falls apart" },
//   },
//   {
//     left: { age: "AGE 8", img: "bluetwo", title: 'Only answer is "fine"', body: "Closed off, no emotional vocabulary" },
//     right: { age: "AGE 17", img: "redtwo", title: "You find out about bullying", body: "3 months after it started" },
//   },
//   {
//     left: { age: "AGE 7", img: "bluethree", title: "Can't handle losing a game", body: "Low frustration tolerance" },
//     right: { age: "AGE 15", img: "redthree", title: "Can't handle rejection", body: "Or professional setbacks" },
//   },
//   {
//     left: { age: "AGE 8", img: "bluefour", title: "Every choice made by parents", body: "No agency, no decision muscle" },
//     right: { age: "AGE 17", img: "redfour", title: "Can't pick a career", body: "College, or what to eat" },
//   },
// ];

// const IMG_BASE = "/images/invinsibleconsequences";

// const fadeUp = {
//   hidden: { opacity: 0, y: 28 },
//   visible: (i: number) => ({
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.55, delay: i * 0.1, ease: "easeOut" },
//   }),
// };

// const cardIn = {
//   hidden: { opacity: 0, y: 36 },
//   visible: (i: number) => ({
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, delay: 0.1 + i * 0.08, ease: [0.16, 1, 0.3, 1] as const },
//   }),
// };

// function Arrow() {
//   return (
//     <svg viewBox="0 0 20 20" fill="none" className="block h-[1.125rem] w-[1.125rem]" style={{ strokeWidth: 2.2 }}>
//       <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//     </svg>
//   );
// }

// function AgePill({ tone, children }: { tone: "blue" | "red"; children: React.ReactNode }) {
//   const styles =
//     tone === "blue"
//       ? "bg-[rgba(91,168,255,0.10)] border-[rgba(91,168,255,0.32)] text-[#5ba8ff]"
//       : "bg-[rgba(233,74,63,0.10)] border-[rgba(233,74,63,0.32)] text-[#e94a3f]";
//   return (
//     <span
//       className={`inline-flex h-[1.625rem] min-w-[4.9375rem] items-center justify-center self-start rounded-full border px-3.5 font-['Poppins',sans-serif] text-[0.75rem] font-semibold uppercase tracking-[0.096875rem] [backdrop-filter:blur(0.75rem)_saturate(180%)] [-webkit-backdrop-filter:blur(0.75rem)_saturate(180%)] shadow-[inset_0_0.0625rem_0_rgba(255,255,255,0.22),inset_0_-0.0625rem_0_rgba(255,255,255,0.05)] ${styles}`}
//     >
//       {children}
//     </span>
//   );
// }

// export default function InvisibleConsequences() {
//   return (
//     <section
//       className="relative w-full overflow-hidden px-[clamp(1.125rem,4vw,4.5rem)] pb-0 pt-[clamp(3rem,8vh,7.5rem)] font-['Poppins',sans-serif] antialiased text-white bg-[#050507]" 
//     //   style={{ background: "linear-gradient(180deg, #0a0a14 0%, #08080d 100%)" }}
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
//         {/* Pill */}
//         <motion.div
//           custom={0}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.4 }}
//           variants={fadeUp}
//           className="mb-[clamp(1.375rem,2.8vh,2.25rem)] flex justify-center"
//         >
//           <div className="mb-[26px] flex justify-center">
//           <div className="inline-flex h-9 items-center gap-2.5 rounded-full border-[1.029px] border-[rgba(255,154,64,0.25)] bg-[linear-gradient(180deg,rgba(255,154,64,0.03)_0%,rgba(255,122,24,0.01)_100%)] px-[18px] shadow-[inset_0_1.029px_0_rgba(255,255,255,0.16)]">
//             <span className="h-[7.2px] w-[7.2px] rounded-[3.6px] bg-[#ff9a40] shadow-[0_0_8.229px_#ff9a40]" />
//             <span className="font-['Outfit',sans-serif] text-[12.343px] font-semibold uppercase tracking-[1.9749px] text-[#ffb36b]">
//               The Invisible Consequences
//             </span>
//           </div>
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
//           Small Signs{" "}
//           <span className="bg-clip-text text-transparent" style={{ backgroundImage: HEADLINE_GRADIENT }}>
//             Today
//           </span>
//           .
//           <br />
//           Defining Traits{" "}
//           <span className="bg-clip-text text-transparent" style={{ backgroundImage: HEADLINE_GRADIENT }}>
//             Tomorrow
//           </span>
//           .
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
//           What you see today as a small habit, your child will live tomorrow as
//           a defining trait.
//         </motion.p>

//         {/* 2x2 grid */}
//         <div className="mx-auto grid max-w-[80rem] grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-[clamp(1.125rem,1.6vw,1.75rem)]">
//           {CARDS.map((card, i) => (
//             <motion.article
//               key={i}
//               custom={i}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, amount: 0.25 }}
//               variants={cardIn}
//               className="ic-card group relative grid min-h-[17.125rem] grid-cols-1 grid-rows-[1fr_auto_1fr] items-stretch overflow-hidden rounded-[1.817rem] border-[0.09375rem] border-white/[0.22] bg-transparent backdrop-blur-[3.125rem] transition-[transform,border-color,box-shadow] duration-600 ease-smooth will-change-transform hover:-translate-y-1.5 hover:border-white/[0.30] lg:grid-cols-[1fr_auto_1fr] lg:grid-rows-1"
//               style={{ boxShadow: CARD_SHADOW }}
//             >
//               {/* rotating gloss stroke on hover */}
//               <span
//                 aria-hidden
//                 className="ic-gloss pointer-events-none absolute inset-0 z-[2] rounded-[inherit] opacity-0 transition-opacity duration-400 group-hover:opacity-100"
//               />
//               {/* LEFT side (blue) */}
//               <div className="relative flex flex-col p-[1.125rem] sm:p-6">
//                 <AgePill tone="blue">{card.left.age}</AgePill>
//                 <div className="relative my-3 flex min-h-[9.375rem] flex-1 items-center justify-center">
//                   <div className="flex h-[clamp(8.125rem,16vw,10.625rem)] w-[clamp(8.125rem,16vw,10.625rem)] items-center justify-center bg-transparent">
//                     <Image
//                       src={`${IMG_BASE}/${card.left.img}.webp`}
//                       alt=""
//                       fill
//                       className="pointer-events-none block h-auto max-h-full w-auto max-w-full object-contain"
//                       onError={(e) => { e.currentTarget.style.opacity = "0"; }}
//                     />
//                   </div>
//                 </div>
//                 <h3 className="m-0 mb-1.5 flex min-h-[calc(1.0625rem*1.33*2)] items-end text-left font-['Poppins',sans-serif] text-[1.0625rem] font-bold leading-[1.33] tracking-[-0.0125rem] text-white">
//                   {card.left.title}
//                 </h3>
//                 <p className="m-0 text-left font-['Manrope',sans-serif] text-[0.77875rem] font-normal leading-[1.12925rem] text-[#c9cbd3]">
//                   {card.left.body}
//                 </p>
//               </div>

//               {/* DIVIDER orb */}
//               <div className="relative flex items-center justify-center px-1.5 py-1.5 lg:py-0">
//                 <span className="flex h-[2.776375rem] w-[2.776375rem] rotate-90 items-center justify-center rounded-full border border-[rgba(255,154,64,0.28)] bg-[rgba(255,138,43,0.08)] text-[#ffb36b] backdrop-blur-[0.625rem] shadow-[inset_0_0.0625rem_0_rgba(255,255,255,0.20),inset_0_-0.0625rem_0_rgba(255,255,255,0.05)] lg:rotate-0">
//                   <Arrow />
//                 </span>
//               </div>

//               {/* RIGHT side (red) */}
//               <div className="relative flex flex-col p-[1.125rem] sm:p-6">
//                 <AgePill tone="red">{card.right.age}</AgePill>
//                 <div className="relative my-3 flex min-h-[9.375rem] flex-1 items-center justify-center">
//                   <div className="flex h-[clamp(8.125rem,16vw,10.625rem)] w-[clamp(8.125rem,16vw,10.625rem)] items-center justify-center bg-transparent">
//                     <Image
//                       src={`${IMG_BASE}/${card.right.img}.webp`}
//                       alt=""
//                       fill
//                       className="pointer-events-none block h-auto max-h-full w-auto max-w-full object-contain"
//                       onError={(e) => { e.currentTarget.style.opacity = "0"; }}
//                     />
//                   </div>
//                 </div>
//                 <h3 className="m-0 mb-1.5 flex min-h-[calc(1.0625rem*1.33*2)] items-end text-left font-['Poppins',sans-serif] text-[1.0625rem] font-bold leading-[1.33] tracking-[-0.0125rem] text-white">
//                   {card.right.title}
//                 </h3>
//                 <p className="m-0 text-left font-['Manrope',sans-serif] text-[0.77875rem] font-normal leading-[1.12925rem] text-[#c9cbd3]">
//                   {card.right.body}
//                 </p>
//               </div>
//             </motion.article>
//           ))}
//         </div>
//       </div>

//       {/* Branch visual — full bleed, flush to bottom */}
//       <div className="pointer-events-none relative z-[1] mt-[clamp(2.5rem,6vh,6.25rem)] -mx-[clamp(1.125rem,4vw,4.5rem)] leading-[0]">
//         <Image
//           src={`${IMG_BASE}/ic.webp`}
//           alt=""
//           className="block h-auto w-full bg-transparent"
//           fill
//           onError={(e) => { e.currentTarget.style.opacity = "0"; }}
//         />
//       </div>

//       {/* component-scoped styles for the rotating conic gloss + hover shadow */}
//       <style>{`
//         @property --ic-gloss-angle { syntax: '<angle>'; initial-value: 0deg; inherits: false; }
//         .ic-card:hover { box-shadow: ${CARD_SHADOW_HOVER}; }
//         .ic-gloss {
//           --ic-gloss-angle: 0deg;
//           padding: 0.09375rem;
//           background: conic-gradient(from var(--ic-gloss-angle),
//             transparent 0deg,
//             rgba(255,255,255,0.95) 50deg,
//             transparent 110deg,
//             transparent 250deg,
//             rgba(255,255,255,0.95) 310deg,
//             transparent 360deg);
//           -webkit-mask:
//             linear-gradient(#000 0 0) content-box,
//             linear-gradient(#000 0 0);
//           -webkit-mask-composite: xor;
//                   mask:
//             linear-gradient(#000 0 0) content-box,
//             linear-gradient(#000 0 0);
//                   mask-composite: exclude;
//         }
//         .ic-card:hover .ic-gloss { animation: ic-gloss-spin 3s linear infinite; }
//         @keyframes ic-gloss-spin { to { --ic-gloss-angle: 360deg; } }
//         @media (prefers-reduced-motion: reduce) {
//           .ic-card:hover .ic-gloss { animation: none; }
//         }
//       `}</style>
//     </section>
//   );
// }
"use client";

import type { ReactEventHandler } from "react";
import { containerClass } from "@/components/ui/UI";
import styles from "./InvisibleConsequences.module.css";

/** One half of a card — the habit now, or the trait it becomes. */
export interface ConsequenceFace {
  age: number;
  title: string;
  body: string;
  image: string;
}

/** A before/after pair: the small sign today, the defining trait tomorrow. */
export interface ConsequenceCard {
  id: string;
  before: ConsequenceFace;
  after: ConsequenceFace;
}

export interface InvisibleConsequencesProps {
  id?: string;
  eyebrow?: string;
  subheading?: string;
  cards?: ConsequenceCard[];
  /** Pass null to render the section without the bottom branch strip. */
  branchImage?: string | null;
  className?: string;
}

type SideVariant = "blue" | "red";

/** All eight mascots plus the branch strip live in public/images/invinsibleconsequences. */
const IMAGE_BASE = "/images/invinsibleconsequences";

/* Swap copy or artwork here — the markup below never needs to change. */
const DEFAULT_CARDS: ConsequenceCard[] = [
  {
    id: "self-regulation",
    before: {
      age: 7,
      title: "Needs a screen to calm down",
      body: "Can't self-regulate without a device",
      image: `${IMAGE_BASE}/blueone.webp`,
    },
    after: {
      age: 15,
      title: "Can't handle discomfort",
      body: "Without his phone, falls apart",
      image: `${IMAGE_BASE}/redone.webp`,
    },
  },
  {
    id: "emotional-vocabulary",
    before: {
      age: 8,
      title: 'Only answer is "fine"',
      body: "Closed off, no emotional vocabulary",
      image: `${IMAGE_BASE}/bluethree.webp`,
    },
    after: {
      age: 17,
      title: "You find out about bullying",
      body: "3 months after it started",
      image: `${IMAGE_BASE}/redtwo.webp`,
    },
  },
  {
    id: "frustration-tolerance",
    before: {
      age: 7,
      title: "Can't handle losing a game",
      body: "Low frustration tolerance",
      image: `${IMAGE_BASE}/bluetwo.webp`,
    },
    after: {
      age: 15,
      title: "Can't handle rejection",
      body: "Or professional setbacks",
      image: `${IMAGE_BASE}/redthree.webp`,
    },
  },
  {
    id: "decision-making",
    before: {
      age: 8,
      title: "Every choice made by parents",
      body: "No agency, no decision muscle",
      image: `${IMAGE_BASE}/bluefour.webp`,
    },
    after: {
      age: 17,
      title: "Can't pick a career",
      body: "College, or what to eat",
      image: `${IMAGE_BASE}/redfour.webp`,
    },
  },
];

/* Artwork is decorative — if a file is missing, fade it out rather than
   showing a broken-image icon inside the glass frame. */
const hideOnError: ReactEventHandler<HTMLImageElement> = (event) => {
  event.currentTarget.style.opacity = "0";
};

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M4 10h12M11 5l5 5-5 5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CardSide({
  variant,
  age,
  title,
  body,
  image,
}: ConsequenceFace & { variant: SideVariant }) {
  return (
    <div className={styles.side}>
      <span className={`${styles.agePill} ${styles[variant]}`}>Age {age}</span>

      <div className={styles.mascotWrap}>
        <div className={styles.mascotFrame}>
          <img src={image} alt="" onError={hideOnError} />
        </div>
      </div>

      <h3 className={styles.title}>{title}</h3>
      <p className={styles.body}>{body}</p>
    </div>
  );
}

export default function InvisibleConsequences({
  id = "invisible-consequences",
  eyebrow = "The Invisible Consequences",
  subheading = "What you see today as a small habit, your child will live tomorrow as a defining trait.",
  cards = DEFAULT_CARDS,
  branchImage = `${IMAGE_BASE}/branch.webp`,
  className = "",
}: InvisibleConsequencesProps) {
  return (
    <section id={id} className={`${styles.section} ${className}`}>
      <div className={`${styles.inner} ${containerClass}`}>
        <div className={styles.pillWrap}>
          <div className={styles.pill}>
            <span className={styles.pillDot} />
            <span className={styles.pillText}>{eyebrow}</span>
          </div>
        </div>

        <h2 className={styles.heading}>
          Small Signs <span className={styles.gradient}>Today</span>.
          <br />
          Defining Traits <span className={styles.gradient}>Tomorrow</span>.
        </h2>

        <p className={styles.sub}>{subheading}</p>

        <div className={styles.grid}>
          {cards.map((card) => (
            <article key={card.id} className={styles.card}>
              <CardSide variant="blue" {...card.before} />

              <div className={styles.divider}>
                <span className={styles.dividerOrb}>
                  <ArrowIcon />
                </span>
              </div>

              <CardSide variant="red" {...card.after} />
            </article>
          ))}
        </div>
      </div>

      {branchImage && (
        <div className={styles.branch}>
          <img src={branchImage} alt="" onError={hideOnError} />
        </div>
      )}
    </section>
  );
}