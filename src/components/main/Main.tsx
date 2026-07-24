
// // // "use client";

// // // import { motion } from "framer-motion";
// // // import { BtnPrimary, BtnSecondary } from "@/components/ui/UI";
// // // import { useRouter } from "next/navigation";

// // // const GLASS_SHADOW =
// // //   "0 8px 32px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.5), inset 0 -1px 0 rgba(255,255,255,0.1)";
// // // const EDGE_TOP =
// // //   "linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)";
// // // const EDGE_LEFT =
// // //   "linear-gradient(180deg, rgba(255,255,255,0.8), transparent, rgba(255,255,255,0.3))";
// // // const HEADLINE_GRADIENT =
// // //   "linear-gradient(103.7deg, #ffb13d 0%, #ff7a18 26%, #ff4d8d 64%, #a24bff 100%)";

// // // const STATS = [
// // //   {
// // //     label: "More real family time each week",
// // //     badge: "★",
// // //     num: <>+5hrs</>,
// // //     badgeBg:
// // //       "linear-gradient(150deg, rgba(79,227,154,0.6), rgba(31,168,94,0.6))",
// // //     numColor: "#34d67e",
// // //     badgeStroke: "rgba(110,240,175,0.55)",
// // //     badgeInset: "rgba(180,255,215,0.55)",
// // //   },
// // //   {
// // //     label: "Less daily screen time",
// // //     badge: "◷",
// // //     num: <>−40%</>,
// // //     badgeBg:
// // //       "linear-gradient(150deg, rgba(255,174,87,0.64), rgba(251,110,17,0.64))",
// // //     numColor: "#ff7a18",
// // //     badgeStroke: "rgba(255,190,120,0.55)",
// // //     badgeInset: "rgba(255,220,180,0.55)",
// // //   },
// // //   {
// // //     label: "Families feel closer",
// // //     badge: "♥",
// // //     num: (
// // //       <>
// // //         9 <span className="font-medium text-[#8b8a98]">in</span> 10
// // //       </>
// // //     ),
// // //     badgeBg:
// // //       "linear-gradient(150deg, rgba(197,139,255,0.6), rgba(162,75,255,0.6))",
// // //     numColor: "#a24bff",
// // //     badgeStroke: "rgba(210,165,255,0.55)",
// // //     badgeInset: "rgba(230,205,255,0.55)",
// // //   },
// // //   {
// // //     label: "More open conversations",
// // //     badge: "💬",
// // //     num: <>3X</>,
// // //     badgeBg:
// // //       "linear-gradient(150deg, rgba(124,192,255,0.61), rgba(46,143,232,0.61))",
// // //     numColor: "#4ba8ff",
// // //     badgeStroke: "rgba(140,200,255,0.55)",
// // //     badgeInset: "rgba(200,225,255,0.55)",
// // //   },
// // // ];

// // // const TESTIMONIALS = [
// // //   {
// // //     initial: "P",
// // //     avaBg: "linear-gradient(150deg, #ff9a6e 0%, #e8633b 100%)",
// // //     quote: "We've seen such an increase in family interaction.",
// // //     author: "— Gaurav, Father of 2",
// // //     icon: "♥",
// // //     iconBg: "linear-gradient(150deg, #ff6fa0 0%, #ff3d7f 100%)",
// // //     iconStroke: "rgba(255,140,180,0.6)",
// // //     iconInset: "rgba(255,200,220,0.55)",
// // //     posClass:
// // //       "top-[2%] left-[2%] sm:top-[-2%] sm:left-[6%] lg:top-[-8%] lg:left-[8%]",
// // //     delay: "0s",
// // //     duration: "5s",
// // //   },
// // //   {
// // //     initial: "N",
// // //     avaBg: "linear-gradient(150deg, #c58bff 0%, #a24bff 100%)",
// // //     quote: "My son opens up so much more now.",
// // //     author: "— Neha, Mom of 1",
// // //     icon: "💬",
// // //     iconBg: "linear-gradient(180deg, #ff9a40 0%, #ff7a18 52%, #f2670a 100%)",
// // //     iconStroke: "rgba(255,190,120,0.6)",
// // //     iconInset: "rgba(255,220,180,0.55)",
// // //     posClass:
// // //       "top-[40%] right-[2%] sm:top-[36%] sm:right-[-4%] lg:top-[8%] lg:right-[-10%]",
// // //     delay: "-2.75s",
// // //     duration: "5.5s",
// // //   },
// // // ];

// // // const fadeUp = {
// // //   hidden: { opacity: 0, y: 28 },
// // //   visible: (i: number) => ({
// // //     opacity: 1,
// // //     y: 0,
// // //     transition: { duration: 0.55, delay: i * 0.1, ease: "easeOut" },
// // //   }),
// // // };

// // // const GlassEdgeTop = () => (
// // //   <span
// // //     className="pointer-events-none absolute inset-x-0 top-0 z-[2] h-px"
// // //     style={{ background: EDGE_TOP }}
// // //   />
// // // );
// // // const GlassEdgeLeft = () => (
// // //   <span
// // //     className="pointer-events-none absolute left-0 top-0 z-[2] h-full w-px"
// // //     style={{ background: EDGE_LEFT }}
// // //   />
// // // );

// // // function Orbit({
// // //   w,
// // //   h,
// // //   border,
// // //   planets,
// // // }: {
// // //   w: number;
// // //   h: number;
// // //   border: string;
// // //   planets: {
// // //     size: number;
// // //     bg: string;
// // //     glow: string;
// // //     duration: string;
// // //     delay: string;
// // //   }[];
// // // }) {
// // //   const rx = w / 2;
// // //   const ry = h / 2;
// // //   return (
// // //     <div
// // //       className="absolute left-1/2 top-[55%] rounded-[50%]"
// // //       style={{
// // //         width: w,
// // //         height: h,
// // //         border: `1px solid ${border}`,
// // //         transform: "translate(-50%,-50%) rotate(14.54deg)",
// // //       }}
// // //     >
// // //       {planets.map((p, i) => (
// // //         <span
// // //           key={i}
// // //           className="absolute rounded-full"
// // //           style={{
// // //             left: "50%",
// // //             top: "50%",
// // //             width: p.size,
// // //             height: p.size,
// // //             marginLeft: -p.size / 2,
// // //             marginTop: -p.size / 2,
// // //             background: p.bg,
// // //             boxShadow: `0 0 8px ${p.glow}`,
// // //             offsetPath: `ellipse(${rx}px ${ry}px at 50% 50%)`,
// // //             offsetPosition: "50% 50%",
// // //             offsetDistance: "0%",
// // //             offsetRotate: "0deg",
// // //             animation: `orbit-travel ${p.duration} linear infinite`,
// // //             animationDelay: p.delay,
// // //           }}
// // //         />
// // //       ))}
// // //     </div>
// // //   );
// // // }

// // // const PLANET = {
// // //   warm: "radial-gradient(circle at 35% 35%, #ffd4a8, #ff9a40 70%)",
// // //   cool: "radial-gradient(circle at 35% 35%, #b8d4ff, #4ba8ff 70%)",
// // //   violet: "radial-gradient(circle at 35% 35%, #ddb8ff, #a24bff 70%)",
// // //   pale: "radial-gradient(circle at 35% 35%, #f0f0f5, #9a99a8 70%)",
// // // };
// // // const GLOW = {
// // //   warm: "rgba(255,154,64,0.45)",
// // //   cool: "rgba(75,168,255,0.45)",
// // //   violet: "rgba(162,75,255,0.45)",
// // //   pale: "rgba(200,200,220,0.35)",
// // // };

// // // export default function Hero() {
// // //   const router = useRouter();

// // //   return (
// // //     <div className="relative flex h-[calc(100svh-var(--nav-h,64px))] min-h-[560px] w-full flex-col overflow-hidden font-['Poppins',sans-serif] antialiased">
// // //       <style>{`
// // //         @keyframes orbit-travel { to { offset-distance: 100%; } }
// // //         @keyframes card-float { 0%,100%{transform:translate3d(0,0,0)} 50%{transform:translate3d(0,-18px,0)} }
// // //         @media (prefers-reduced-motion: reduce){
// // //           .hero-stack *, .hero-stack *::before, .hero-stack *::after { animation-duration:.001ms!important; transition-duration:.001ms!important; }
// // //         }
// // //       `}</style>

// // //       {/* page background — radial top to dark bottom */}
// // //       <div
// // //         className="fixed inset-0 -z-10"
// // //         style={{
// // //           background:
// // //             "radial-gradient(ellipse 130% 80% at 50% 0%, #11182E 0%, #0A0E1C 32%, #060709 68%, #050507 100%), #050507",
// // //         }}
// // //       />

// // //       {/* HERO STACK */}
// // //       <div className="hero-stack relative flex min-h-0 w-full flex-1 flex-col">
// // //         {/* Orbits with traveling planets */}
// // //         <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
// // //           <Orbit
// // //             w={1100}
// // //             h={388}
// // //             border="rgba(255,255,255,0.05)"
// // //             planets={[
// // //               { size: 6, bg: PLANET.warm, glow: GLOW.warm, duration: "52s", delay: "0s" },
// // //               { size: 4, bg: PLANET.pale, glow: GLOW.pale, duration: "68s", delay: "-22s" },
// // //             ]}
// // //           />
// // //           <Orbit
// // //             w={1620}
// // //             h={570}
// // //             border="rgba(255,255,255,0.06)"
// // //             planets={[
// // //               { size: 8, bg: PLANET.cool, glow: GLOW.cool, duration: "78s", delay: "-10s" },
// // //               { size: 6, bg: PLANET.violet, glow: GLOW.violet, duration: "95s", delay: "-38s" },
// // //             ]}
// // //           />
// // //           <Orbit
// // //             w={2150}
// // //             h={750}
// // //             border="rgba(255,255,255,0.04)"
// // //             planets={[
// // //               { size: 6, bg: PLANET.warm, glow: GLOW.warm, duration: "110s", delay: "-45s" },
// // //               { size: 4, bg: PLANET.cool, glow: GLOW.cool, duration: "130s", delay: "-72s" },
// // //             ]}
// // //           />
// // //         </div>

// // //         {/* NAV is a separate component rendered above <Hero /> in your layout */}

// // //         {/* HERO */}
// // //         <section className="relative flex w-full flex-1 items-center overflow-visible py-4 lg:py-0">
// // //           {/* Ambient glow blobs */}
// // //           <div
// // //             className="pointer-events-none absolute -left-[140px] -top-[180px] z-0 h-[260px] w-[260px] rounded-full opacity-[0.78] blur-[110px] sm:h-[440px] sm:w-[440px] lg:h-[620px] lg:w-[620px] lg:blur-[130px]"
// // //             style={{
// // //               background:
// // //                 "radial-gradient(circle, rgba(104,100,247,0.52) 0%, rgba(104,100,247,0) 70%)",
// // //             }}
// // //           />
// // //           <div
// // //             className="pointer-events-none absolute -right-[160px] top-1/4 z-0 h-[240px] w-[240px] rounded-full opacity-[0.78] blur-[110px] sm:h-[400px] sm:w-[400px] lg:h-[540px] lg:w-[540px] lg:blur-[130px]"
// // //             style={{
// // //               background:
// // //                 "radial-gradient(circle, rgba(75,80,220,0.45) 0%, rgba(75,80,220,0) 70%)",
// // //             }}
// // //           />
// // //           <div
// // //             className="pointer-events-none absolute -bottom-[180px] left-[22%] z-0 hidden h-[400px] w-[400px] rounded-full opacity-[0.78] blur-[130px] sm:block lg:h-[500px] lg:w-[500px]"
// // //             style={{
// // //               background:
// // //                 "radial-gradient(circle, rgba(46,36,140,0.5) 0%, rgba(46,36,140,0) 70%)",
// // //             }}
// // //           />
// // //           <div
// // //             className="pointer-events-none absolute right-[22%] top-[5%] z-0 hidden h-[420px] w-[420px] rounded-full opacity-[0.78] blur-[130px] lg:block"
// // //             style={{
// // //               background:
// // //                 "radial-gradient(circle, rgba(162,75,255,0.3) 0%, rgba(162,75,255,0) 70%)",
// // //             }}
// // //           />

// // //           {/* Mascot — hidden on mobile/tablet, capped on laptop, larger on xl/2xl */}
// // //           {/* <div
// // //             className="hidden lg:absolute lg:bottom-0 lg:right-0 lg:z-[1] lg:flex lg:items-end lg:justify-center lg:overflow-hidden lg:h-[clamp(340px,64vh,500px)] lg:w-[clamp(420px,46vw,680px)] xl:h-[clamp(460px,78vh,640px)] xl:w-[clamp(560px,56vw,1000px)] 2xl:h-[clamp(540px,88vh,740px)] 2xl:w-[clamp(680px,62vw,1200px)]"
// // //             id="mascot"
// // //           >
// // //             <img
// // //               src="/images/hero.webp"
// // //               alt="Mascots on Rocket"
// // //               className="h-full w-full object-cover object-bottom"
// // //             />
// // //           </div> */}
// // //           {/* Mascot — hidden on mobile/tablet, capped on laptop, larger on xl/2xl */}
// // // {/* Mascot — hidden on mobile/tablet, capped on laptop, larger on xl/2xl */}
// // // <div
// // //   className="hidden lg:absolute lg:bottom-0 lg:right-0 lg:z-[1] lg:flex lg:items-end lg:justify-center lg:overflow-hidden lg:h-[clamp(280px,52vh,400px)] lg:w-[clamp(340px,37vw,540px)] xl:h-[clamp(370px,62vh,610px)] xl:w-[clamp(450px,45vw,900px)] 2xl:h-[clamp(430px,70vh,690px)] 2xl:w-[clamp(540px,70vw,1060px)]"
// // //   id="mascot"
// // // >
// // //   <video
// // //     src="/videos/hero.webm"
// // //     autoPlay
// // //     muted
// // //     loop
// // //     playsInline
// // //     preload="auto"
// // //     aria-hidden="true"
// // //     className="h-full w-full object-cover object-bottom"
// // //   />
// // // </div>

// // //           {/* HERO INNER — content grid */}
// // //           <div className="relative z-[1] mx-auto grid w-full max-w-[1600px] grid-cols-1 items-center gap-6 px-[18px] sm:gap-8 sm:px-7 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-[clamp(24px,3vw,56px)] lg:px-[clamp(20px,4vw,72px)]">
// // //             {/* LEFT */}
// // //             <div className="relative">
// // //               {/* Pill */}
// // //               <motion.div
// // //                 custom={0}
// // //                 initial="hidden"
// // //                 animate="visible"
// // //                 variants={fadeUp}
// // //                 className="relative z-[2] mb-[clamp(10px,1.4vh,20px)] inline-flex h-7 items-center gap-2 rounded-full border border-[rgba(255,154,64,0.55)] bg-white/[0.07] px-3 backdrop-blur-[23px] transition-colors duration-700 hover:border-[rgba(255,154,64,0.75)] sm:h-8 sm:gap-2.5 sm:px-3.5 lg:h-9 lg:px-[18px]"
// // //                 style={{ boxShadow: GLASS_SHADOW }}
// // //               >
// // //                 <span className="h-1.5 w-1.5 rounded-full bg-[#ff9a40] sm:h-2 sm:w-2" />
// // //                 <span className="font-['Outfit',sans-serif] text-[10px] font-semibold uppercase tracking-[1.4px] text-[#ffb36b] sm:text-[11px] sm:tracking-[1.6px] lg:text-[12px] lg:tracking-[2px]">
// // //                   Family Growth Platform
// // //                 </span>
// // //               </motion.div>

// // //               {/* Headline */}
// // //               <motion.h1
// // //                 custom={1}
// // //                 initial="hidden"
// // //                 animate="visible"
// // //                 variants={fadeUp}
// // //                 className="relative z-[2] mb-[clamp(10px,1.6vh,20px)] font-['Outfit',sans-serif] text-[clamp(26px,7vw,38px)] font-extrabold leading-[1.05] tracking-[-0.6px] text-[#c3c2ce] sm:text-[clamp(34px,5vw,52px)] lg:text-[clamp(40px,4.2vw,64px)] lg:tracking-[-1.4px]"
// // //               >
// // //                 <span className="text-white">Ordinary Moments.</span>
// // //                 <br />
// // //                 <span
// // //                   className="bg-clip-text text-transparent"
// // //                   style={{ backgroundImage: HEADLINE_GRADIENT }}
// // //                 >
// // //                   Extraordinary
// // //                 </span>{" "}
// // //                 <span className="text-white">Family.</span>
// // //               </motion.h1>

// // //               {/* Lead */}
// // //               <motion.p
// // //                 custom={2}
// // //                 initial="hidden"
// // //                 animate="visible"
// // //                 variants={fadeUp}
// // //                 className="relative z-[2] mb-[clamp(14px,2vh,28px)] max-w-[640px] text-[clamp(13px,3.4vw,15px)] font-normal leading-[1.5] text-[#8b8a98] sm:text-[14px] sm:leading-[1.55] lg:text-[clamp(14px,1.05vw,17px)]"
// // //               >
// // //                 No prep. No screen. Just meaningful conversations and real family
// // //                 time. Spend just 10 mins a day with simple, age appropriate
// // //                 activities designed to build your child&apos;s{" "}
// // //                 <span className="text-[#c3c2ce]">
// // //                   emotional strength, resilience, and thinking skills,
// // //                 </span>{" "}
// // //                 while bridging the gap between Knowing and Doing.
// // //               </motion.p>

// // //               {/* CTAs */}
// // //               <motion.div
// // //                 custom={3}
// // //                 initial="hidden"
// // //                 animate="visible"
// // //                 variants={fadeUp}
// // //                 className="relative z-[2] mb-[clamp(18px,2.6vh,36px)] flex flex-wrap items-center gap-3 sm:gap-[18px]"
// // //               >
// // //                 <BtnPrimary onClick={() => router.push("/download-app")}>
// // //                   Get the App
// // //                 </BtnPrimary>
// // //                 <BtnSecondary href="#journey">See How It Works →</BtnSecondary>
// // //               </motion.div>

// // //               {/* Stat cards */}
// // //               <motion.div
// // //                 custom={4}
// // //                 initial="hidden"
// // //                 animate="visible"
// // //                 variants={fadeUp}
// // //                 className="relative z-[1] grid max-w-full grid-cols-2 gap-2.5 sm:gap-4 lg:max-w-[720px] lg:grid-cols-4 lg:gap-[22px]"
// // //               >
// // //                 {STATS.map((s) => (
// // //                   <div
// // //                     key={s.label}
// // //                     className="group relative z-[1] grid h-[clamp(120px,15vh,150px)] grid-rows-[auto_1fr_auto_auto] overflow-hidden rounded-[16px] border border-white/30 bg-white/[0.07] p-[12px_12px_14px] backdrop-blur-[23px] transition-[transform,border-color,box-shadow] duration-850 ease-smooth hover:-translate-y-1.5 hover:scale-[1.025] hover:border-white/[0.48] sm:h-[clamp(150px,18vh,170px)] sm:rounded-[20px] sm:p-[16px_14px_18px] lg:h-[clamp(160px,20vh,196px)] lg:p-[18px_16px_20px]"
// // //                     style={{ boxShadow: GLASS_SHADOW }}
// // //                   >
// // //                     <GlassEdgeTop />
// // //                     <GlassEdgeLeft />
// // //                     <div
// // //                       className="row-start-1 inline-flex h-8 w-8 flex-shrink-0 items-center justify-center self-start rounded-[18px] text-[14px] text-white backdrop-blur-[10px] transition-transform duration-1100 ease-smooth group-hover:scale-110 sm:h-10 sm:w-10 sm:rounded-[20px] sm:text-[16px] lg:h-11 lg:w-11 lg:rounded-[22px] lg:text-[18px]"
// // //                       style={{
// // //                         background: s.badgeBg,
// // //                         border: `1px solid ${s.badgeStroke}`,
// // //                         boxShadow: `inset 0 1px 0 ${s.badgeInset}, inset 0 -1px 0 rgba(255,255,255,0.08), 0 4px 14px rgba(0,0,0,0.20)`,
// // //                       }}
// // //                     >
// // //                       {s.badge}
// // //                     </div>
// // //                     <div
// // //                       className="row-start-3 mb-1.5 self-end text-[clamp(18px,4.6vw,22px)] font-semibold leading-none sm:mb-2 sm:text-[24px]"
// // //                       style={{ color: s.numColor }}
// // //                     >
// // //                       {s.num}
// // //                     </div>
// // //                     <div className="row-start-4 self-start text-[clamp(11px,2.8vw,13px)] font-normal leading-[1.35] text-[#c3c2ce] sm:text-[14px] sm:leading-[1.4]">
// // //                       {s.label}
// // //                     </div>
// // //                   </div>
// // //                 ))}
// // //               </motion.div>
// // //             </div>

// // //             {/* RIGHT — testimonials (mascot is flush to section on lg+) */}
// // //             <motion.div
// // //               custom={5}
// // //               initial="hidden"
// // //               animate="visible"
// // //               variants={fadeUp}
// // //               className="relative mx-auto hidden h-full w-full max-w-[620px] sm:block sm:min-h-[300px] lg:mx-0 lg:block lg:min-h-[clamp(340px,46vh,440px)] lg:max-w-none"
// // //             >
// // //               {TESTIMONIALS.map((t) => (
// // //                 <div
// // //                   key={t.initial}
// // //                   className={`group absolute z-[3] flex w-[82%] flex-col gap-2 rounded-[18px] border border-white/30 bg-white/[0.07] p-[14px_16px_16px] backdrop-blur-[23px] transition-colors duration-700 hover:border-white/40 hover:[animation-play-state:paused] sm:w-[clamp(240px,24vw,300px)] sm:gap-2.5 sm:rounded-[20px] sm:p-[16px_18px_18px] ${t.posClass}`}
// // //                   style={{
// // //                     boxShadow: GLASS_SHADOW,
// // //                     animation: `card-float ${t.duration} ease-in-out infinite`,
// // //                     animationDelay: t.delay,
// // //                     willChange: "transform",
// // //                   }}
// // //                 >
// // //                   <GlassEdgeTop />
// // //                   <div className="flex items-center gap-3">
// // //                     <span
// // //                       className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-[16px] font-['Outfit',sans-serif] text-[14px] font-bold text-white sm:h-9 sm:w-9 sm:rounded-[18px] sm:text-[15px]"
// // //                       style={{ background: t.avaBg }}
// // //                     >
// // //                       {t.initial}
// // //                     </span>
// // //                     <div className="text-[12px] leading-none tracking-[1.6px] text-[#ffb36b] sm:text-[13px]">
// // //                       ★★★★★
// // //                     </div>
// // //                   </div>
// // //                   <p className="m-0 text-[13px] font-medium leading-[1.45] text-white sm:text-[14px]">
// // //                     &ldquo;{t.quote}&rdquo;
// // //                   </p>
// // //                   <p className="m-0 text-[12px] font-normal text-[#8b8a98] sm:text-[12.5px]">
// // //                     {t.author}
// // //                   </p>
// // //                   <span
// // //                     className="absolute -right-3 -top-3.5 z-[4] inline-flex h-8 w-8 items-center justify-center rounded-[16px] text-[14px] text-white backdrop-blur-[10px] transition-transform duration-1000 ease-smooth group-hover:scale-105 sm:h-[34px] sm:w-[34px] sm:rounded-[17px] sm:text-[15px]"
// // //                     style={{
// // //                       background: t.iconBg,
// // //                       border: `1px solid ${t.iconStroke}`,
// // //                       boxShadow: `inset 0 1px 0 ${t.iconInset}, inset 0 -1px 0 rgba(255,255,255,0.08), 0 4px 14px rgba(0,0,0,0.22)`,
// // //                     }}
// // //                   >
// // //                     {t.icon}
// // //                   </span>
// // //                 </div>
// // //               ))}
// // //             </motion.div>
// // //           </div>
// // //         </section>
// // //       </div>
// // //     </div>
// // //   );
// // // }


// // "use client";

// // import { motion } from "framer-motion";
// // import { BtnPrimary, BtnSecondary } from "@/components/ui/UI";
// // import { useRouter } from "next/navigation";

// // const GLASS_SHADOW =
// //   "0 8px 32px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.5), inset 0 -1px 0 rgba(255,255,255,0.1)";
// // const EDGE_TOP =
// //   "linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)";
// // const EDGE_LEFT =
// //   "linear-gradient(180deg, rgba(255,255,255,0.8), transparent, rgba(255,255,255,0.3))";
// // const HEADLINE_GRADIENT =
// //   "linear-gradient(103.7deg, #ffb13d 0%, #ff7a18 26%, #ff4d8d 64%, #a24bff 100%)";

// // const STATS = [
// //   {
// //     label: "More real family time each week",
// //     badge: "★",
// //     num: <>+5hrs</>,
// //     badgeBg:
// //       "linear-gradient(150deg, rgba(79,227,154,0.6), rgba(31,168,94,0.6))",
// //     numColor: "#34d67e",
// //     badgeStroke: "rgba(110,240,175,0.55)",
// //     badgeInset: "rgba(180,255,215,0.55)",
// //   },
// //   {
// //     label: "Less daily screen time",
// //     badge: "◷",
// //     num: <>−40%</>,
// //     badgeBg:
// //       "linear-gradient(150deg, rgba(255,174,87,0.64), rgba(251,110,17,0.64))",
// //     numColor: "#ff7a18",
// //     badgeStroke: "rgba(255,190,120,0.55)",
// //     badgeInset: "rgba(255,220,180,0.55)",
// //   },
// //   {
// //     label: "Families feel closer",
// //     badge: "♥",
// //     num: (
// //       <>
// //         9 <span className="font-medium text-[#8b8a98]">in</span> 10
// //       </>
// //     ),
// //     badgeBg:
// //       "linear-gradient(150deg, rgba(197,139,255,0.6), rgba(162,75,255,0.6))",
// //     numColor: "#a24bff",
// //     badgeStroke: "rgba(210,165,255,0.55)",
// //     badgeInset: "rgba(230,205,255,0.55)",
// //   },
// //   {
// //     label: "More open conversations",
// //     badge: "💬",
// //     num: <>3X</>,
// //     badgeBg:
// //       "linear-gradient(150deg, rgba(124,192,255,0.61), rgba(46,143,232,0.61))",
// //     numColor: "#4ba8ff",
// //     badgeStroke: "rgba(140,200,255,0.55)",
// //     badgeInset: "rgba(200,225,255,0.55)",
// //   },
// // ];

// // const TESTIMONIALS = [
// //   {
// //     initial: "P",
// //     avaBg: "linear-gradient(150deg, #ff9a6e 0%, #e8633b 100%)",
// //     quote: "We've seen such an increase in family interaction.",
// //     author: "— Gaurav, Father of 2",
// //     icon: "♥",
// //     iconBg: "linear-gradient(150deg, #ff6fa0 0%, #ff3d7f 100%)",
// //     iconStroke: "rgba(255,140,180,0.6)",
// //     iconInset: "rgba(255,200,220,0.55)",
// //     posClass:
// //       "top-[40%] right-[2%] sm:top-[36%] sm:right-[-4%] lg:top-[44%] lg:right-[0%]",
// //     delay: "0s",
// //     duration: "5s",
// //   },
// //   {
// //     initial: "N",
// //     avaBg: "linear-gradient(150deg, #c58bff 0%, #a24bff 100%)",
// //     quote: "My son opens up so much more now.",
// //     author: "— Neha, Mom of 1",
// //     icon: "💬",
// //     iconBg: "linear-gradient(180deg, #ff9a40 0%, #ff7a18 52%, #f2670a 100%)",
// //     iconStroke: "rgba(255,190,120,0.6)",
// //     iconInset: "rgba(255,220,180,0.55)",
// //     posClass:
// //       "top-[40%] right-[2%] sm:top-[36%] sm:right-[-4%] lg:top-[8%] lg:right-[-10%]",
// //     delay: "-2.75s",
// //     duration: "5.5s",
// //   },
// // ];

// // const fadeUp = {
// //   hidden: { opacity: 0, y: 28 },
// //   visible: (i: number) => ({
// //     opacity: 1,
// //     y: 0,
// //     transition: { duration: 0.55, delay: i * 0.1, ease: "easeOut" },
// //   }),
// // };

// // const GlassEdgeTop = () => (
// //   <span
// //     className="pointer-events-none absolute inset-x-0 top-0 z-[2] h-px"
// //     style={{ background: EDGE_TOP }}
// //   />
// // );
// // const GlassEdgeLeft = () => (
// //   <span
// //     className="pointer-events-none absolute left-0 top-0 z-[2] h-full w-px"
// //     style={{ background: EDGE_LEFT }}
// //   />
// // );

// // function Orbit({
// //   w,
// //   h,
// //   border,
// //   planets,
// // }: {
// //   w: number;
// //   h: number;
// //   border: string;
// //   planets: {
// //     size: number;
// //     bg: string;
// //     glow: string;
// //     duration: string;
// //     delay: string;
// //   }[];
// // }) {
// //   const rx = w / 2;
// //   const ry = h / 2;
// //   return (
// //     <div
// //       className="absolute left-1/2 top-[55%] rounded-[50%]"
// //       style={{
// //         width: w,
// //         height: h,
// //         border: `1px solid ${border}`,
// //         transform: "translate(-50%,-50%) rotate(14.54deg)",
// //       }}
// //     >
// //       {planets.map((p, i) => (
// //         <span
// //           key={i}
// //           className="absolute rounded-full"
// //           style={{
// //             left: "50%",
// //             top: "50%",
// //             width: p.size,
// //             height: p.size,
// //             marginLeft: -p.size / 2,
// //             marginTop: -p.size / 2,
// //             background: p.bg,
// //             boxShadow: `0 0 8px ${p.glow}`,
// //             offsetPath: `ellipse(${rx}px ${ry}px at 50% 50%)`,
// //             offsetPosition: "50% 50%",
// //             offsetDistance: "0%",
// //             offsetRotate: "0deg",
// //             animation: `orbit-travel ${p.duration} linear infinite`,
// //             animationDelay: p.delay,
// //           }}
// //         />
// //       ))}
// //     </div>
// //   );
// // }

// // const PLANET = {
// //   warm: "radial-gradient(circle at 35% 35%, #ffd4a8, #ff9a40 70%)",
// //   cool: "radial-gradient(circle at 35% 35%, #b8d4ff, #4ba8ff 70%)",
// //   violet: "radial-gradient(circle at 35% 35%, #ddb8ff, #a24bff 70%)",
// //   pale: "radial-gradient(circle at 35% 35%, #f0f0f5, #9a99a8 70%)",
// // };
// // const GLOW = {
// //   warm: "rgba(255,154,64,0.45)",
// //   cool: "rgba(75,168,255,0.45)",
// //   violet: "rgba(162,75,255,0.45)",
// //   pale: "rgba(200,200,220,0.35)",
// // };

// // export default function Hero() {
// //   const router = useRouter();

// //   return (
// // <div className="relative flex min-h-[calc(100svh-var(--nav-h,64px))] w-full flex-col overflow-hidden font-['Poppins',sans-serif] antialiased lg:h-[calc(100svh-var(--nav-h,64px))]">
// //       <style>{`
// //         @keyframes orbit-travel { to { offset-distance: 100%; } }
// //         @keyframes card-float { 0%,100%{transform:translate3d(0,0,0)} 50%{transform:translate3d(0,-18px,0)} }
// //         @media (prefers-reduced-motion: reduce){
// //           .hero-stack *, .hero-stack *::before, .hero-stack *::after { animation-duration:.001ms!important; transition-duration:.001ms!important; }
// //         }
// //       `}</style>

// //       {/* page background — radial top to dark bottom */}
// //       <div
// //          className="absolute inset-0 -z-10"
// //         style={{
// //           background:
// //             "radial-gradient(ellipse 130% 80% at 50% 0%, #11182E 0%, #0A0E1C 32%, #060709 68%, #050507 100%), #050507",
// //         }}
// //       />

// //       {/* HERO STACK */}
// //       <div className="hero-stack relative flex min-h-0 w-full flex-1 flex-col">
// //         {/* Orbits with traveling planets */}
// //         <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
// //           <Orbit
// //             w={1100}
// //             h={388}
// //             border="rgba(255,255,255,0.05)"
// //             planets={[
// //               { size: 6, bg: PLANET.warm, glow: GLOW.warm, duration: "52s", delay: "0s" },
// //               { size: 4, bg: PLANET.pale, glow: GLOW.pale, duration: "68s", delay: "-22s" },
// //             ]}
// //           />
// //           <Orbit
// //             w={1620}
// //             h={570}
// //             border="rgba(255,255,255,0.06)"
// //             planets={[
// //               { size: 8, bg: PLANET.cool, glow: GLOW.cool, duration: "78s", delay: "-10s" },
// //               { size: 6, bg: PLANET.violet, glow: GLOW.violet, duration: "95s", delay: "-38s" },
// //             ]}
// //           />
// //           <Orbit
// //             w={2150}
// //             h={750}
// //             border="rgba(255,255,255,0.04)"
// //             planets={[
// //               { size: 6, bg: PLANET.warm, glow: GLOW.warm, duration: "110s", delay: "-45s" },
// //               { size: 4, bg: PLANET.cool, glow: GLOW.cool, duration: "130s", delay: "-72s" },
// //             ]}
// //           />
// //         </div>

// //         {/* NAV is a separate component rendered above <Hero /> in your layout */}

// //         {/* HERO */}
// //         <section className="relative flex w-full flex-1 items-center overflow-visible py-6 sm:py-8 lg:py-0">
// //           {/* Ambient glow blobs */}
// //           <div
// //             className="pointer-events-none absolute -left-[140px] -top-[180px] z-0 h-[260px] w-[260px] rounded-full opacity-[0.78] blur-[110px] sm:h-[440px] sm:w-[440px] lg:h-[620px] lg:w-[620px] lg:blur-[130px]"
// //             style={{
// //               background:
// //                 "radial-gradient(circle, rgba(104,100,247,0.52) 0%, rgba(104,100,247,0) 70%)",
// //             }}
// //           />
// //           <div
// //             className="pointer-events-none absolute -right-[160px] top-1/4 z-0 h-[240px] w-[240px] rounded-full opacity-[0.78] blur-[110px] sm:h-[400px] sm:w-[400px] lg:h-[540px] lg:w-[540px] lg:blur-[130px]"
// //             style={{
// //               background:
// //                 "radial-gradient(circle, rgba(75,80,220,0.45) 0%, rgba(75,80,220,0) 70%)",
// //             }}
// //           />
// //           <div
// //             className="pointer-events-none absolute -bottom-[180px] left-[22%] z-0 hidden h-[400px] w-[400px] rounded-full opacity-[0.78] blur-[130px] sm:block lg:h-[500px] lg:w-[500px]"
// //             style={{
// //               background:
// //                 "radial-gradient(circle, rgba(46,36,140,0.5) 0%, rgba(46,36,140,0) 70%)",
// //             }}
// //           />
// //           <div
// //             className="pointer-events-none absolute right-[22%] top-[5%] z-0 hidden h-[420px] w-[420px] rounded-full opacity-[0.78] blur-[130px] lg:block"
// //             style={{
// //               background:
// //                 "radial-gradient(circle, rgba(162,75,255,0.3) 0%, rgba(162,75,255,0) 70%)",
// //             }}
// //           />

// //           {/* Mascot — hidden on mobile/tablet, capped on laptop, larger on xl/2xl */}
// //           <div
// //             className="hidden lg:absolute lg:bottom-0 lg:right-0 lg:z-[1] lg:flex lg:items-end lg:justify-center lg:overflow-hidden lg:h-[clamp(280px,52vh,400px)] lg:w-[clamp(340px,37vw,540px)] xl:h-[clamp(370px,62vh,610px)] xl:w-[clamp(450px,45vw,900px)] 2xl:h-[clamp(430px,70vh,690px)] 2xl:w-[clamp(540px,70vw,1060px)]"
// //             id="mascot"
// //           >
// //             <video
// //               src="/videos/hero.webm"
// //               autoPlay
// //               muted
// //               loop
// //               playsInline
// //               preload="auto"
// //               aria-hidden="true"
// //               className="h-full w-full object-cover object-bottom"
// //             />
// //           </div>

// //           {/* HERO INNER — content grid */}
// //           <div className="relative z-[1] mx-auto grid w-full max-w-[1600px] grid-cols-1 items-center gap-7 px-5 sm:gap-8 sm:px-7 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-[clamp(24px,3vw,56px)] lg:px-[clamp(20px,4vw,72px)]">
// //             {/* LEFT — centered on mobile, left-aligned on lg+ */}
// //             <div className="relative flex flex-col items-center text-center lg:items-start lg:text-left">
// //               {/* Pill */}
// //               <motion.div
// //                 custom={0}
// //                 initial="hidden"
// //                 animate="visible"
// //                 variants={fadeUp}
// //                 className="relative z-[2] mb-[clamp(10px,1.4vh,20px)] inline-flex h-7 items-center gap-2 rounded-full border border-[rgba(255,154,64,0.55)] bg-white/[0.07] px-3 backdrop-blur-[23px] transition-colors duration-700 hover:border-[rgba(255,154,64,0.75)] sm:h-8 sm:gap-2.5 sm:px-3.5 lg:h-9 lg:px-[18px]"
// //                 style={{ boxShadow: GLASS_SHADOW }}
// //               >
// //                 <span className="h-1.5 w-1.5 rounded-full bg-[#ff9a40] sm:h-2 sm:w-2" />
// //                 <span className="font-['Outfit',sans-serif] text-[10px] font-semibold uppercase tracking-[1.4px] text-[#ffb36b] sm:text-[11px] sm:tracking-[1.6px] lg:text-[12px] lg:tracking-[2px]">
// //                   Family Growth Platform
// //                 </span>
// //               </motion.div>

// //               {/* Headline */}
// //               <motion.h1
// //                 custom={1}
// //                 initial="hidden"
// //                 animate="visible"
// //                 variants={fadeUp}
// //                 className="relative z-[2] mb-[clamp(10px,1.6vh,20px)] font-['Outfit',sans-serif] text-[clamp(26px,7vw,38px)] font-extrabold leading-[1.05] tracking-[-0.6px] text-[#c3c2ce] sm:text-[clamp(34px,5vw,52px)] lg:text-[clamp(40px,4.2vw,64px)] lg:tracking-[-1.4px]"
// //               >
// //                 <span className="text-white">Ordinary Moments.</span>
// //                 <br />
// //                 <span
// //                   className="bg-clip-text text-transparent"
// //                   style={{ backgroundImage: HEADLINE_GRADIENT }}
// //                 >
// //                   Extraordinary
// //                 </span>{" "}
// //                 <span className="text-white">Family.</span>
// //               </motion.h1>

// //               {/* Lead */}
// //               <motion.p
// //                 custom={2}
// //                 initial="hidden"
// //                 animate="visible"
// //                 variants={fadeUp}
// //                 className="relative z-[2] mb-[clamp(14px,2vh,28px)] mx-auto max-w-[640px] text-[clamp(13px,3.4vw,15px)] font-normal leading-[1.5] text-[#8b8a98] sm:text-[14px] sm:leading-[1.55] lg:mx-0 lg:text-[clamp(14px,1.05vw,17px)]"
// //               >
// //                 No prep. No screen. Just meaningful conversations and real family
// //                 time. Spend just 10 mins a day with simple, age appropriate
// //                 activities designed to build your child&apos;s{" "}
// //                 <span className="text-[#c3c2ce]">
// //                   emotional strength, resilience, and thinking skills,
// //                 </span>{" "}
// //                 while bridging the gap between Knowing and Doing.
// //               </motion.p>

// //               {/* CTAs */}
// //               <motion.div
// //                 custom={3}
// //                 initial="hidden"
// //                 animate="visible"
// //                 variants={fadeUp}
// //                 className="relative z-[2] mb-[clamp(18px,2.6vh,36px)] flex flex-wrap items-center justify-center gap-3 sm:gap-[18px] lg:justify-start"
// //               >
// //                 <BtnPrimary onClick={() => router.push("/download-app")}>
// //                   Get the App
// //                 </BtnPrimary>
// //                 <BtnSecondary href="#journey">See How It Works →</BtnSecondary>
// //               </motion.div>

// //               {/* Stat cards */}
// //               <motion.div
// //                 custom={4}
// //                 initial="hidden"
// //                 animate="visible"
// //                 variants={fadeUp}
// //                 className="relative z-[1] grid w-full max-w-full grid-cols-2 gap-2.5 text-left sm:gap-4 lg:max-w-[720px] lg:grid-cols-4 lg:gap-[22px]"
// //               >
// //                 {STATS.map((s) => (
// //                   <div
// //                     key={s.label}
// //                     className="group relative z-[1] flex min-h-[120px] flex-col justify-between gap-2 overflow-hidden rounded-[16px] border border-white/30 bg-white/[0.07] p-[12px_12px_14px] backdrop-blur-[23px] transition-[transform,border-color,box-shadow] duration-850 ease-smooth hover:-translate-y-1.5 hover:scale-[1.025] hover:border-white/[0.48] sm:min-h-[150px] sm:rounded-[20px] sm:p-[16px_14px_18px] lg:min-h-[160px] lg:p-[18px_16px_20px]"
// //                     style={{ boxShadow: GLASS_SHADOW }}
// //                   >
// //                     <GlassEdgeTop />
// //                     <GlassEdgeLeft />
// //                     <div
// //                       className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center self-start rounded-[18px] text-[14px] text-white backdrop-blur-[10px] transition-transform duration-1100 ease-smooth group-hover:scale-110 sm:h-10 sm:w-10 sm:rounded-[20px] sm:text-[16px] lg:h-11 lg:w-11 lg:rounded-[22px] lg:text-[18px]"
// //                       style={{
// //                         background: s.badgeBg,
// //                         border: `1px solid ${s.badgeStroke}`,
// //                         boxShadow: `inset 0 1px 0 ${s.badgeInset}, inset 0 -1px 0 rgba(255,255,255,0.08), 0 4px 14px rgba(0,0,0,0.20)`,
// //                       }}
// //                     >
// //                       {s.badge}
// //                     </div>
// //                     <div className="mt-auto flex flex-col gap-1.5">
// //                       <div
// //                         className="text-[clamp(18px,4.6vw,22px)] font-semibold leading-none sm:text-[24px]"
// //                         style={{ color: s.numColor }}
// //                       >
// //                         {s.num}
// //                       </div>
// //                       <div className="text-[clamp(11px,2.8vw,13px)] font-normal leading-[1.35] text-[#c3c2ce] sm:text-[14px] sm:leading-[1.4]">
// //                         {s.label}
// //                       </div>
// //                     </div>
// //                   </div>
// //                 ))}
// //               </motion.div>
// //             </div>

// //             {/* RIGHT — testimonials (mascot is flush to section on lg+) */}
// //             <motion.div
// //               custom={5}
// //               initial="hidden"
// //               animate="visible"
// //               variants={fadeUp}
// // className="relative mx-auto hidden h-full w-full max-w-[620px] sm:block sm:min-h-[300px] lg:mx-0 lg:block lg:min-h-[clamp(340px,46vh,440px)] lg:max-w-none"
// //             >
// //               {TESTIMONIALS.map((t) => (
// //                 <div
// //                   key={t.initial}
// //                   className={`group absolute z-[3] flex w-[82%] flex-col gap-2 rounded-[18px] border border-white/30 bg-white/[0.07] p-[14px_16px_16px] backdrop-blur-[23px] transition-colors duration-700 hover:border-white/40 hover:[animation-play-state:paused] sm:w-[clamp(240px,24vw,300px)] sm:gap-2.5 sm:rounded-[20px] sm:p-[16px_18px_18px] ${t.posClass}`}
// //                   style={{
// //                     boxShadow: GLASS_SHADOW,
// //                     animation: `card-float ${t.duration} ease-in-out infinite`,
// //                     animationDelay: t.delay,
// //                     willChange: "transform",
// //                   }}
// //                 >
// //                   <GlassEdgeTop />
// //                   <div className="flex items-center gap-3">
// //                     <span
// //                       className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-[16px] font-['Outfit',sans-serif] text-[14px] font-bold text-white sm:h-9 sm:w-9 sm:rounded-[18px] sm:text-[15px]"
// //                       style={{ background: t.avaBg }}
// //                     >
// //                       {t.initial}
// //                     </span>
// //                     <div className="text-[12px] leading-none tracking-[1.6px] text-[#ffb36b] sm:text-[13px]">
// //                       ★★★★★
// //                     </div>
// //                   </div>
// //                   <p className="m-0 text-[13px] font-medium leading-[1.45] text-white sm:text-[14px]">
// //                     &ldquo;{t.quote}&rdquo;
// //                   </p>
// //                   <p className="m-0 text-[12px] font-normal text-[#8b8a98] sm:text-[12.5px]">
// //                     {t.author}
// //                   </p>
// //                   <span
// //                     className="absolute -right-3 -top-3.5 z-[4] inline-flex h-8 w-8 items-center justify-center rounded-[16px] text-[14px] text-white backdrop-blur-[10px] transition-transform duration-1000 ease-smooth group-hover:scale-105 sm:h-[34px] sm:w-[34px] sm:rounded-[17px] sm:text-[15px]"
// //                     style={{
// //                       background: t.iconBg,
// //                       border: `1px solid ${t.iconStroke}`,
// //                       boxShadow: `inset 0 1px 0 ${t.iconInset}, inset 0 -1px 0 rgba(255,255,255,0.08), 0 4px 14px rgba(0,0,0,0.22)`,
// //                     }}
// //                   >
// //                     {t.icon}
// //                   </span>
// //                 </div>
// //               ))}
// //             </motion.div>
// //           </div>
// //         </section>
// //       </div>
// //     </div>
// //   );
// // }




// "use client";

// import { motion } from "framer-motion";
// import { BtnPrimary, BtnSecondary } from "@/components/ui/UI";
// import { useRouter } from "next/navigation";

// const GLASS_SHADOW =
//   "0 8px 32px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.5), inset 0 -1px 0 rgba(255,255,255,0.1)";
// const EDGE_TOP =
//   "linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)";
// const EDGE_LEFT =
//   "linear-gradient(180deg, rgba(255,255,255,0.8), transparent, rgba(255,255,255,0.3))";
// const HEADLINE_GRADIENT =
//   "linear-gradient(103.7deg, #ffb13d 0%, #ff7a18 26%, #ff4d8d 64%, #a24bff 100%)";

// const STATS = [
//   {
//     label: "More real family time each week",
//     badge: "★",
//     num: <>+5hrs</>,
//     badgeBg:
//       "linear-gradient(150deg, rgba(79,227,154,0.6), rgba(31,168,94,0.6))",
//     numColor: "#34d67e",
//     badgeStroke: "rgba(110,240,175,0.55)",
//     badgeInset: "rgba(180,255,215,0.55)",
//   },
//   {
//     label: "Less daily screen time",
//     badge: "◷",
//     num: <>−40%</>,
//     badgeBg:
//       "linear-gradient(150deg, rgba(255,174,87,0.64), rgba(251,110,17,0.64))",
//     numColor: "#ff7a18",
//     badgeStroke: "rgba(255,190,120,0.55)",
//     badgeInset: "rgba(255,220,180,0.55)",
//   },
//   {
//     label: "Families feel closer",
//     badge: "♥",
//     num: (
//       <>
//         9 <span className="font-medium text-[#8b8a98]">in</span> 10
//       </>
//     ),
//     badgeBg:
//       "linear-gradient(150deg, rgba(197,139,255,0.6), rgba(162,75,255,0.6))",
//     numColor: "#a24bff",
//     badgeStroke: "rgba(210,165,255,0.55)",
//     badgeInset: "rgba(230,205,255,0.55)",
//   },
//   {
//     label: "More open conversations",
//     badge: "💬",
//     num: <>3X</>,
//     badgeBg:
//       "linear-gradient(150deg, rgba(124,192,255,0.61), rgba(46,143,232,0.61))",
//     numColor: "#4ba8ff",
//     badgeStroke: "rgba(140,200,255,0.55)",
//     badgeInset: "rgba(200,225,255,0.55)",
//   },
// ];

// const TESTIMONIALS = [
//   {
//     initial: "P",
//     avaBg: "linear-gradient(150deg, #ff9a6e 0%, #e8633b 100%)",
//     quote: "We've seen such an increase in family interaction.",
//     author: "— Gaurav, Father of 2",
//     icon: "♥",
//     iconBg: "linear-gradient(150deg, #ff6fa0 0%, #ff3d7f 100%)",
//     iconStroke: "rgba(255,140,180,0.6)",
//     iconInset: "rgba(255,200,220,0.55)",
//     // staggered: first card sits to the left
//     alignClass: "lg:self-start lg:ml-[2%]",
//     delay: "0s",
//     duration: "5s",
//   },
//   {
//     initial: "N",
//     avaBg: "linear-gradient(150deg, #c58bff 0%, #a24bff 100%)",
//     quote: "My son opens up so much more now.",
//     author: "— Neha, Mom of 1",
//     icon: "💬",
//     iconBg: "linear-gradient(180deg, #ff9a40 0%, #ff7a18 52%, #f2670a 100%)",
//     iconStroke: "rgba(255,190,120,0.6)",
//     iconInset: "rgba(255,220,180,0.55)",
//     // staggered: second card sits to the right
//     alignClass: "lg:self-end lg:mr-[2%]",
//     delay: "-2.75s",
//     duration: "5.5s",
//   },
// ];

// const fadeUp = {
//   hidden: { opacity: 0, y: 28 },
//   visible: (i: number) => ({
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.55, delay: i * 0.1, ease: "easeOut" },
//   }),
// };

// const GlassEdgeTop = () => (
//   <span
//     className="pointer-events-none absolute inset-x-0 top-0 z-[2] h-px"
//     style={{ background: EDGE_TOP }}
//   />
// );
// const GlassEdgeLeft = () => (
//   <span
//     className="pointer-events-none absolute left-0 top-0 z-[2] h-full w-px"
//     style={{ background: EDGE_LEFT }}
//   />
// );

// function Orbit({
//   w,
//   h,
//   border,
//   planets,
// }: {
//   w: number;
//   h: number;
//   border: string;
//   planets: {
//     size: number;
//     bg: string;
//     glow: string;
//     duration: string;
//     delay: string;
//   }[];
// }) {
//   const rx = w / 2;
//   const ry = h / 2;
//   return (
//     <div
//       className="absolute left-1/2 top-[55%] rounded-[50%]"
//       style={{
//         width: w,
//         height: h,
//         border: `1px solid ${border}`,
//         transform: "translate(-50%,-50%) rotate(14.54deg)",
//       }}
//     >
//       {planets.map((p, i) => (
//         <span
//           key={i}
//           className="absolute rounded-full"
//           style={{
//             left: "50%",
//             top: "50%",
//             width: p.size,
//             height: p.size,
//             marginLeft: -p.size / 2,
//             marginTop: -p.size / 2,
//             background: p.bg,
//             boxShadow: `0 0 8px ${p.glow}`,
//             offsetPath: `ellipse(${rx}px ${ry}px at 50% 50%)`,
//             offsetPosition: "50% 50%",
//             offsetDistance: "0%",
//             offsetRotate: "0deg",
//             animation: `orbit-travel ${p.duration} linear infinite`,
//             animationDelay: p.delay,
//           }}
//         />
//       ))}
//     </div>
//   );
// }

// const PLANET = {
//   warm: "radial-gradient(circle at 35% 35%, #ffd4a8, #ff9a40 70%)",
//   cool: "radial-gradient(circle at 35% 35%, #b8d4ff, #4ba8ff 70%)",
//   violet: "radial-gradient(circle at 35% 35%, #ddb8ff, #a24bff 70%)",
//   pale: "radial-gradient(circle at 35% 35%, #f0f0f5, #9a99a8 70%)",
// };
// const GLOW = {
//   warm: "rgba(255,154,64,0.45)",
//   cool: "rgba(75,168,255,0.45)",
//   violet: "rgba(162,75,255,0.45)",
//   pale: "rgba(200,200,220,0.35)",
// };

// export default function Hero() {
//   const router = useRouter();

//   return (
//     <div className="relative flex min-h-[calc(100svh-var(--nav-h,64px))] w-full flex-col overflow-hidden font-['Poppins',sans-serif] antialiased lg:h-[calc(100svh-var(--nav-h,64px))]">
//       <style>{`
//         @keyframes orbit-travel { to { offset-distance: 100%; } }
//         @keyframes card-float { 0%,100%{transform:translate3d(0,0,0)} 50%{transform:translate3d(0,-16px,0)} }
//         @media (prefers-reduced-motion: reduce){
//           .hero-stack *, .hero-stack *::before, .hero-stack *::after { animation-duration:.001ms!important; transition-duration:.001ms!important; }
//         }
//       `}</style>

//       {/* page background — scoped to the hero (absolute, not fixed) */}
//       <div
//         className="absolute inset-0 -z-10"
//         style={{
//           background:
//             "radial-gradient(ellipse 130% 80% at 50% 0%, #11182E 0%, #0A0E1C 32%, #060709 68%, #050507 100%), #050507",
//         }}
//       />

//       {/* HERO STACK */}
//       <div className="hero-stack relative flex min-h-0 w-full flex-1 flex-col">
//         {/* Orbits with traveling planets */}
//         <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
//           <Orbit
//             w={1100}
//             h={388}
//             border="rgba(255,255,255,0.05)"
//             planets={[
//               { size: 6, bg: PLANET.warm, glow: GLOW.warm, duration: "52s", delay: "0s" },
//               { size: 4, bg: PLANET.pale, glow: GLOW.pale, duration: "68s", delay: "-22s" },
//             ]}
//           />
//           <Orbit
//             w={1620}
//             h={570}
//             border="rgba(255,255,255,0.06)"
//             planets={[
//               { size: 8, bg: PLANET.cool, glow: GLOW.cool, duration: "78s", delay: "-10s" },
//               { size: 6, bg: PLANET.violet, glow: GLOW.violet, duration: "95s", delay: "-38s" },
//             ]}
//           />
//           <Orbit
//             w={2150}
//             h={750}
//             border="rgba(255,255,255,0.04)"
//             planets={[
//               { size: 6, bg: PLANET.warm, glow: GLOW.warm, duration: "110s", delay: "-45s" },
//               { size: 4, bg: PLANET.cool, glow: GLOW.cool, duration: "130s", delay: "-72s" },
//             ]}
//           />
//         </div>

//         {/* NAV is a separate component rendered above <Hero /> in your layout */}

//         {/* HERO */}
//         <section className="relative flex w-full flex-1 items-center overflow-visible py-8 sm:py-10 lg:py-0">
//           {/* Ambient glow blobs */}
//           <div
//             className="pointer-events-none absolute -left-[140px] -top-[180px] z-0 h-[260px] w-[260px] rounded-full opacity-[0.78] blur-[110px] sm:h-[440px] sm:w-[440px] lg:h-[620px] lg:w-[620px] lg:blur-[130px]"
//             style={{
//               background:
//                 "radial-gradient(circle, rgba(104,100,247,0.52) 0%, rgba(104,100,247,0) 70%)",
//             }}
//           />
//           <div
//             className="pointer-events-none absolute -right-[160px] top-1/4 z-0 h-[240px] w-[240px] rounded-full opacity-[0.78] blur-[110px] sm:h-[400px] sm:w-[400px] lg:h-[540px] lg:w-[540px] lg:blur-[130px]"
//             style={{
//               background:
//                 "radial-gradient(circle, rgba(75,80,220,0.45) 0%, rgba(75,80,220,0) 70%)",
//             }}
//           />
//           <div
//             className="pointer-events-none absolute -bottom-[180px] left-[22%] z-0 hidden h-[400px] w-[400px] rounded-full opacity-[0.78] blur-[130px] sm:block lg:h-[500px] lg:w-[500px]"
//             style={{
//               background:
//                 "radial-gradient(circle, rgba(46,36,140,0.5) 0%, rgba(46,36,140,0) 70%)",
//             }}
//           />
//           <div
//             className="pointer-events-none absolute right-[22%] top-[5%] z-0 hidden h-[420px] w-[420px] rounded-full opacity-[0.78] blur-[130px] lg:block"
//             style={{
//               background:
//                 "radial-gradient(circle, rgba(162,75,255,0.3) 0%, rgba(162,75,255,0) 70%)",
//             }}
//           />

//           {/* Mascot — hidden on mobile/tablet, capped on laptop, larger on xl/2xl */}
//           <div
//             className="hidden lg:absolute lg:bottom-0 lg:right-0 lg:z-0 lg:flex lg:items-end lg:justify-center lg:overflow-hidden lg:h-[clamp(280px,52vh,400px)] lg:w-[clamp(340px,37vw,540px)] xl:h-[clamp(370px,62vh,610px)] xl:w-[clamp(450px,45vw,900px)] 2xl:h-[clamp(430px,70vh,690px)] 2xl:w-[clamp(540px,70vw,1060px)]"
//             id="mascot"
//           >
//             <video
//               src="/videos/hero.webm"
//               autoPlay
//               muted
//               loop
//               playsInline
//               preload="auto"
//               aria-hidden="true"
//               className="h-full w-full object-cover object-bottom"
//             />
//           </div>

//           {/* HERO INNER — content grid */}
//           <div className="relative z-[1] mx-auto grid w-full max-w-[1600px] grid-cols-1 items-center gap-8 px-5 sm:gap-10 sm:px-7 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-[clamp(24px,3vw,56px)] lg:px-[clamp(20px,4vw,72px)]">
//             {/* LEFT — centered on mobile, left-aligned on lg+ */}
//             <div className="relative flex flex-col items-center text-center lg:items-start lg:text-left">
//               {/* Pill */}
//               <motion.div
//                 custom={0}
//                 initial="hidden"
//                 animate="visible"
//                 variants={fadeUp}
//                 className="relative z-[2] mb-[clamp(10px,1.4vh,20px)] inline-flex h-7 items-center gap-2 rounded-full border border-[rgba(255,154,64,0.55)] bg-white/[0.07] px-3 backdrop-blur-[23px] transition-colors duration-700 hover:border-[rgba(255,154,64,0.75)] sm:h-8 sm:gap-2.5 sm:px-3.5 lg:h-9 lg:px-[18px]"
//                 style={{ boxShadow: GLASS_SHADOW }}
//               >
//                 <span className="h-1.5 w-1.5 rounded-full bg-[#ff9a40] sm:h-2 sm:w-2" />
//                 <span className="font-['Outfit',sans-serif] text-[10px] font-semibold uppercase tracking-[1.4px] text-[#ffb36b] sm:text-[11px] sm:tracking-[1.6px] lg:text-[12px] lg:tracking-[2px]">
//                   Family Growth Platform
//                 </span>
//               </motion.div>

//               {/* Headline */}
//               <motion.h1
//                 custom={1}
//                 initial="hidden"
//                 animate="visible"
//                 variants={fadeUp}
//                 className="relative z-[2] mb-[clamp(10px,1.6vh,20px)] font-['Outfit',sans-serif] text-[clamp(26px,7vw,38px)] font-extrabold leading-[1.05] tracking-[-0.6px] text-[#c3c2ce] sm:text-[clamp(34px,5vw,52px)] lg:text-[clamp(40px,4.2vw,64px)] lg:tracking-[-1.4px]"
//               >
//                 <span className="text-white">Ordinary Moments.</span>
//                 <br />
//                 <span
//                   className="bg-clip-text text-transparent"
//                   style={{ backgroundImage: HEADLINE_GRADIENT }}
//                 >
//                   Extraordinary
//                 </span>{" "}
//                 <span className="text-white">Family.</span>
//               </motion.h1>

//               {/* Lead */}
//               <motion.p
//                 custom={2}
//                 initial="hidden"
//                 animate="visible"
//                 variants={fadeUp}
//                 className="relative z-[2] mb-[clamp(14px,2vh,28px)] mx-auto max-w-[640px] text-[clamp(13px,3.4vw,15px)] font-normal leading-[1.5] text-[#8b8a98] sm:text-[14px] sm:leading-[1.55] lg:mx-0 lg:text-[clamp(14px,1.05vw,17px)]"
//               >
//                 No prep. No screen. Just meaningful conversations and real family
//                 time. Spend just 10 mins a day with simple, age appropriate
//                 activities designed to build your child&apos;s{" "}
//                 <span className="text-[#c3c2ce]">
//                   emotional strength, resilience, and thinking skills,
//                 </span>{" "}
//                 while bridging the gap between Knowing and Doing.
//               </motion.p>

//               {/* CTAs */}
//               <motion.div
//                 custom={3}
//                 initial="hidden"
//                 animate="visible"
//                 variants={fadeUp}
//                 className="relative z-[2] mb-[clamp(18px,2.6vh,36px)] flex flex-wrap items-center justify-center gap-3 sm:gap-[18px] lg:justify-start"
//               >
//                 <BtnPrimary onClick={() => router.push("/download-app")}>
//                   Get the App
//                 </BtnPrimary>
//                 <BtnSecondary href="#journey">See How It Works →</BtnSecondary>
//               </motion.div>

//               {/* Stat cards */}
//               <motion.div
//                 custom={4}
//                 initial="hidden"
//                 animate="visible"
//                 variants={fadeUp}
//                 className="relative z-[1] grid w-full max-w-full grid-cols-2 gap-2.5 text-left sm:gap-4 lg:max-w-[720px] lg:grid-cols-4 lg:gap-[22px]"
//               >
//                 {STATS.map((s) => (
//                   <div
//                     key={s.label}
//                     className="group relative z-[1] flex min-h-[120px] flex-col justify-between gap-2 overflow-hidden rounded-[16px] border border-white/30 bg-white/[0.07] p-[12px_12px_14px] backdrop-blur-[23px] transition-[transform,border-color,box-shadow] duration-850 ease-smooth hover:-translate-y-1.5 hover:scale-[1.025] hover:border-white/[0.48] sm:min-h-[150px] sm:rounded-[20px] sm:p-[16px_14px_18px] lg:min-h-[160px] lg:p-[18px_16px_20px]"
//                     style={{ boxShadow: GLASS_SHADOW }}
//                   >
//                     <GlassEdgeTop />
//                     <GlassEdgeLeft />
//                     <div
//                       className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center self-start rounded-[18px] text-[14px] text-white backdrop-blur-[10px] transition-transform duration-1100 ease-smooth group-hover:scale-110 sm:h-10 sm:w-10 sm:rounded-[20px] sm:text-[16px] lg:h-11 lg:w-11 lg:rounded-[22px] lg:text-[18px]"
//                       style={{
//                         background: s.badgeBg,
//                         border: `1px solid ${s.badgeStroke}`,
//                         boxShadow: `inset 0 1px 0 ${s.badgeInset}, inset 0 -1px 0 rgba(255,255,255,0.08), 0 4px 14px rgba(0,0,0,0.20)`,
//                       }}
//                     >
//                       {s.badge}
//                     </div>
//                     <div className="mt-auto flex flex-col gap-1.5">
//                       <div
//                         className="text-[clamp(18px,4.6vw,22px)] font-semibold leading-none sm:text-[24px]"
//                         style={{ color: s.numColor }}
//                       >
//                         {s.num}
//                       </div>
//                       <div className="text-[clamp(11px,2.8vw,13px)] font-normal leading-[1.35] text-[#c3c2ce] sm:text-[14px] sm:leading-[1.4]">
//                         {s.label}
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </motion.div>
//             </div>

//             {/* RIGHT — testimonials: flex column, staggered, hidden below lg */}
//             <motion.div
//               custom={5}
//               initial="hidden"
//               animate="visible"
//               variants={fadeUp}
//               className="relative z-[2] hidden h-full w-full lg:flex lg:flex-col lg:justify-center lg:gap-[clamp(20px,3.5vh,40px)]"
//             >
//               {TESTIMONIALS.map((t) => (
//                 <div
//                   key={t.initial}
//                   className={`group relative z-[3] flex w-[clamp(240px,24vw,300px)] flex-col gap-2.5 rounded-[20px] border border-white/30 bg-white/[0.07] p-[16px_18px_18px] backdrop-blur-[23px] transition-colors duration-700 hover:border-white/40 hover:[animation-play-state:paused] ${t.alignClass}`}
//                   style={{
//                     boxShadow: GLASS_SHADOW,
//                     animation: `card-float ${t.duration} ease-in-out infinite`,
//                     animationDelay: t.delay,
//                     willChange: "transform",
//                   }}
//                 >
//                   <GlassEdgeTop />
//                   <div className="flex items-center gap-3">
//                     <span
//                       className="inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-[18px] font-['Outfit',sans-serif] text-[15px] font-bold text-white"
//                       style={{ background: t.avaBg }}
//                     >
//                       {t.initial}
//                     </span>
//                     <div className="text-[13px] leading-none tracking-[1.6px] text-[#ffb36b]">
//                       ★★★★★
//                     </div>
//                   </div>
//                   <p className="m-0 text-[14px] font-medium leading-[1.45] text-white">
//                     &ldquo;{t.quote}&rdquo;
//                   </p>
//                   <p className="m-0 text-[12.5px] font-normal text-[#8b8a98]">
//                     {t.author}
//                   </p>
//                   <span
//                     className="absolute -right-3 -top-3.5 z-[4] inline-flex h-[34px] w-[34px] items-center justify-center rounded-[17px] text-[15px] text-white backdrop-blur-[10px] transition-transform duration-1000 ease-smooth group-hover:scale-105"
//                     style={{
//                       background: t.iconBg,
//                       border: `1px solid ${t.iconStroke}`,
//                       boxShadow: `inset 0 1px 0 ${t.iconInset}, inset 0 -1px 0 rgba(255,255,255,0.08), 0 4px 14px rgba(0,0,0,0.22)`,
//                     }}
//                   >
//                     {t.icon}
//                   </span>
//                 </div>
//               ))}
//             </motion.div>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// }

"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const GLASS_SHADOW =
  "0 8px 32px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.5), inset 0 -1px 0 rgba(255,255,255,0.1)";
const EDGE_TOP =
  "linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)";
const EDGE_LEFT =
  "linear-gradient(180deg, rgba(255,255,255,0.8), transparent, rgba(255,255,255,0.3))";
const HEADLINE_GRADIENT =
  "linear-gradient(103.7deg, #ffb13d 0%, #ff7a18 26%, #ff4d8d 64%, #a24bff 100%)";
const CTA_GRADIENT =
  "linear-gradient(166deg, #ffae57 0%, #ff8a2e 40%, #fb6e11 100%)";

const STATS = [
  {
    label: "Adds up to real family time",
    badge: "★",
    num: <>10 Min</>,
    badgeBg:
      "linear-gradient(150deg, rgba(79,227,154,0.6), rgba(31,168,94,0.6))",
    numColor: "#34d67e",
    badgeStroke: "rgba(110,240,175,0.55)",
    badgeInset: "rgba(180,255,215,0.55)",
  },
  {
    label: "Less daily screen time",
    badge: "◷",
    num: <>−40%</>,
    badgeBg:
      "linear-gradient(150deg, rgba(255,174,87,0.64), rgba(251,110,17,0.64))",
    numColor: "#ff7a18",
    badgeStroke: "rgba(255,190,120,0.55)",
    badgeInset: "rgba(255,220,180,0.55)",
  },
  {
    label: "Families feel closer",
    badge: "♥",
    num: (
      <>
        9 <span className="font-medium text-[#8b8a98]">in</span> 10
      </>
    ),
    badgeBg:
      "linear-gradient(150deg, rgba(197,139,255,0.6), rgba(162,75,255,0.6))",
    numColor: "#a24bff",
    badgeStroke: "rgba(210,165,255,0.55)",
    badgeInset: "rgba(230,205,255,0.55)",
  },
  {
    label: "More open conversations",
    badge: "💬",
    num: <>3X</>,
    badgeBg:
      "linear-gradient(150deg, rgba(124,192,255,0.61), rgba(46,143,232,0.61))",
    numColor: "#4ba8ff",
    badgeStroke: "rgba(140,200,255,0.55)",
    badgeInset: "rgba(200,225,255,0.55)",
  },
];

const TESTIMONIALS = [
  {
    id: "gaurav",
    images: "/images/transformation/Garurav.webp",
    avaBg: "linear-gradient(150deg, #ff9a6e 0%, #e8633b 100%)",
    quote: "We've seen such an increase in family interaction.",
    author: "— Gaurav, Father of 2",
    icon: "♥",
    iconBg: "linear-gradient(150deg, #ff6fa0 0%, #ff3d7f 100%)",
    iconStroke: "rgba(255,140,180,0.6)",
    iconInset: "rgba(255,200,220,0.55)",
    alignClass: "lg:self-start lg:ml-0 xl:ml-[2%]",
    delay: "0s",
    duration: "5s",
  },
  {
    id: "neha",
    images: "/images/transformation/Neha.webp",
    avaBg: "linear-gradient(150deg, #c58bff 0%, #a24bff 100%)",
    quote: "My son opens up so much more now.",
    author: "— Neha, Mom of 1",
    icon: "💬",
    iconBg: "linear-gradient(180deg, #ff9a40 0%, #ff7a18 52%, #f2670a 100%)",
    iconStroke: "rgba(255,190,120,0.6)",
    iconInset: "rgba(255,220,180,0.55)",
    alignClass: "lg:self-end lg:mr-0 xl:mr-[2%]",
    delay: "-2.75s",
    duration: "5.5s",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: "easeOut" },
  }),
};

const GlassEdgeTop = () => (
  <span
    className="pointer-events-none absolute inset-x-0 top-0 z-[2] h-px"
    style={{ background: EDGE_TOP }}
  />
);
const GlassEdgeLeft = () => (
  <span
    className="pointer-events-none absolute left-0 top-0 z-[2] h-full w-px"
    style={{ background: EDGE_LEFT }}
  />
);

function Orbit({
  w,
  h,
  border,
  planets,
}: {
  w: number;
  h: number;
  border: string;
  planets: {
    size: number;
    bg: string;
    glow: string;
    duration: string;
    delay: string;
  }[];
}) {
  const rx = w / 2;
  const ry = h / 2;
  return (
    <div
      className="absolute left-1/2 top-[55%] rounded-[50%]"
      style={{
        width: w,
        height: h,
        border: `1px solid ${border}`,
        transform: "translate(-50%,-50%) rotate(14.54deg)",
      }}
    >
      {planets.map((p, i) => (
        <span
          key={i}
          className="absolute rounded-full"
          style={{
            left: "50%",
            top: "50%",
            width: p.size,
            height: p.size,
            marginLeft: -p.size / 2,
            marginTop: -p.size / 2,
            background: p.bg,
            boxShadow: `0 0 8px ${p.glow}`,
            offsetPath: `ellipse(${rx}px ${ry}px at 50% 50%)`,
            offsetPosition: "50% 50%",
            offsetDistance: "0%",
            offsetRotate: "0deg",
            animation: `orbit-travel ${p.duration} linear infinite`,
            animationDelay: p.delay,
          }}
        />
      ))}
    </div>
  );
}

const PLANET = {
  warm: "radial-gradient(circle at 35% 35%, #ffd4a8, #ff9a40 70%)",
  cool: "radial-gradient(circle at 35% 35%, #b8d4ff, #4ba8ff 70%)",
  violet: "radial-gradient(circle at 35% 35%, #ddb8ff, #a24bff 70%)",
  pale: "radial-gradient(circle at 35% 35%, #f0f0f5, #9a99a8 70%)",
};
const GLOW = {
  warm: "rgba(255,154,64,0.45)",
  cool: "rgba(75,168,255,0.45)",
  violet: "rgba(162,75,255,0.45)",
  pale: "rgba(200,200,220,0.35)",
};

export default function Hero() {
  const router = useRouter();

  const handleScrollToJourney = () => {
    const section = document.querySelector("#journey");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative flex min-h-[100svh] w-full flex-col overflow-hidden pt-[var(--nav-h,80px)] font-['Poppins',sans-serif] antialiased lg:h-[100svh]">
      <style>{`
        @keyframes orbit-travel { to { offset-distance: 100%; } }
        @keyframes card-float { 0%,100%{transform:translate3d(0,0,0)} 50%{transform:translate3d(0,-16px,0)} }
        @media (prefers-reduced-motion: reduce){
          .hero-stack *, .hero-stack *::before, .hero-stack *::after { animation-duration:.001ms!important; transition-duration:.001ms!important; }
        }
      `}</style>

      {/* page background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 130% 80% at 50% 0%, #11182E 0%, #0A0E1C 32%, #060709 68%, #050507 100%), #050507",
        }}
      />

      {/* HERO STACK */}
      <div className="hero-stack relative flex min-h-0 w-full flex-1 flex-col">
        {/* Orbits with traveling planets */}
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <Orbit
            w={1100}
            h={388}
            border="rgba(255,255,255,0.05)"
            planets={[
              { size: 6, bg: PLANET.warm, glow: GLOW.warm, duration: "52s", delay: "0s" },
              { size: 4, bg: PLANET.pale, glow: GLOW.pale, duration: "68s", delay: "-22s" },
            ]}
          />
          <Orbit
            w={1620}
            h={570}
            border="rgba(255,255,255,0.06)"
            planets={[
              { size: 8, bg: PLANET.cool, glow: GLOW.cool, duration: "78s", delay: "-10s" },
              { size: 6, bg: PLANET.violet, glow: GLOW.violet, duration: "95s", delay: "-38s" },
            ]}
          />
          <Orbit
            w={2150}
            h={750}
            border="rgba(255,255,255,0.04)"
            planets={[
              { size: 6, bg: PLANET.warm, glow: GLOW.warm, duration: "110s", delay: "-45s" },
              { size: 4, bg: PLANET.cool, glow: GLOW.cool, duration: "130s", delay: "-72s" },
            ]}
          />
        </div>

        {/* HERO */}
        <section className="relative flex w-full flex-1 items-center overflow-visible py-8 sm:py-10 lg:py-0">
          {/* Ambient glow blobs */}
          <div
            className="pointer-events-none absolute -left-[140px] -top-[180px] z-0 h-[260px] w-[260px] rounded-full opacity-[0.78] blur-[110px] sm:h-[440px] sm:w-[440px] lg:h-[620px] lg:w-[620px] lg:blur-[130px]"
            style={{
              background:
                "radial-gradient(circle, rgba(104,100,247,0.52) 0%, rgba(104,100,247,0) 70%)",
            }}
          />
          <div
            className="pointer-events-none absolute -right-[160px] top-1/4 z-0 h-[240px] w-[240px] rounded-full opacity-[0.78] blur-[110px] sm:h-[400px] sm:w-[400px] lg:h-[540px] lg:w-[540px] lg:blur-[130px]"
            style={{
              background:
                "radial-gradient(circle, rgba(75,80,220,0.45) 0%, rgba(75,80,220,0) 70%)",
            }}
          />
          <div
            className="pointer-events-none absolute -bottom-[180px] left-[22%] z-0 hidden h-[400px] w-[400px] rounded-full opacity-[0.78] blur-[130px] sm:block lg:h-[500px] lg:w-[500px]"
            style={{
              background:
                "radial-gradient(circle, rgba(46,36,140,0.5) 0%, rgba(46,36,140,0) 70%)",
            }}
          />
          <div
            className="pointer-events-none absolute right-[22%] top-[5%] z-0 hidden h-[420px] w-[420px] rounded-full opacity-[0.78] blur-[130px] lg:block"
            style={{
              background:
                "radial-gradient(circle, rgba(162,75,255,0.3) 0%, rgba(162,75,255,0) 70%)",
            }}
          />

          {/* Mascot */}
          <div
            className="hidden lg:absolute lg:bottom-0 lg:right-0 lg:z-0 lg:flex lg:items-end lg:justify-center lg:overflow-hidden lg:h-[clamp(280px,52vh,400px)] lg:w-[clamp(340px,37vw,540px)] xl:h-[clamp(370px,62vh,610px)] xl:w-[clamp(450px,45vw,900px)] 2xl:h-[clamp(430px,70vh,690px)] 2xl:w-[clamp(540px,70vw,1060px)]"
            id="mascot"
          >
            <video
              src="/videos/hero.webm"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              aria-hidden="true"
              className="h-full w-full object-cover object-bottom"
            />
          </div>

          {/* HERO INNER — content grid */}
          <div className="relative z-[1] mx-auto grid w-full max-w-[1600px] grid-cols-1 items-center gap-8 px-5 sm:gap-10 sm:px-7 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-[clamp(24px,3vw,56px)] lg:px-[clamp(20px,4vw,72px)]">
            {/* LEFT */}
            <div className="relative flex flex-col items-center text-center lg:items-start lg:text-left">
              {/* Pill */}
              <motion.div
                custom={0}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="relative z-[2] mb-[clamp(10px,1.4vh,20px)] inline-flex h-7 items-center gap-2 rounded-full border border-[rgba(255,154,64,0.55)] bg-white/[0.07] px-3 backdrop-blur-[23px] transition-colors duration-700 hover:border-[rgba(255,154,64,0.75)] sm:h-8 sm:gap-2.5 sm:px-3.5 lg:h-9 lg:px-[18px]"
                style={{ boxShadow: GLASS_SHADOW }}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#ff9a40] sm:h-2 sm:w-2" />
                <span className="font-['Outfit',sans-serif] text-[10px] font-semibold uppercase tracking-[1.4px] text-[#ffb36b] sm:text-[11px] sm:tracking-[1.6px] lg:text-[12px] lg:tracking-[2px]">
                  Family Growth Platform
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                custom={1}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="relative z-[2] mb-[clamp(10px,1.6vh,20px)] font-['Outfit',sans-serif] text-[clamp(26px,7vw,38px)] font-extrabold leading-[1.05] tracking-[-0.6px] text-[#c3c2ce] sm:text-[clamp(34px,5vw,52px)] lg:text-[clamp(40px,4.2vw,64px)] lg:tracking-[-1.4px]"
              >
                <span className="text-white">Ordinary Moments.</span>
                <br />
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: HEADLINE_GRADIENT }}
                >
                  Extraordinary
                </span>{" "}
                <span className="text-white">Family.</span>
              </motion.h1>

              {/* Lead */}
              <motion.p
                custom={2}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="relative z-[2] mb-[clamp(14px,2vh,28px)] mx-auto max-w-[640px] text-[clamp(13px,3.4vw,15px)] font-normal leading-[1.5] text-[#8b8a98] sm:text-[14px] sm:leading-[1.55] lg:mx-0 lg:text-[clamp(14px,1.05vw,17px)]"
              >
                No prep. No screen. Just meaningful conversations and real family
                time. Spend just 10 mins a day with simple, age appropriate
                activities designed to build your child&apos;s{" "}
                <span className="text-[#c3c2ce]">
                  emotional strength, resilience, and thinking skills,
                </span>{" "}
                while bridging the gap between Knowing and Doing.
              </motion.p>

              {/* CTAs */}
              <motion.div
                custom={3}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="relative z-[2] mb-[clamp(38px,2.6vh,36px)] flex flex-wrap items-center justify-center gap-3 sm:gap-[18px] lg:justify-start"
              >
                <button
                  onClick={() => router.push("/download-app")}
                  className="cursor-pointer rounded-[12px] border-0 px-6 py-3.5 font-['Outfit',sans-serif] text-[15px] font-bold text-white transition-[transform,filter] duration-300 ease-smooth hover:-translate-y-px hover:brightness-105 sm:px-7 sm:py-4 sm:text-[16px]"
                  style={{ background: CTA_GRADIENT }}
                >
                  Get the App
                </button>

                {/* Updated "See How It Works" button matching .btn-ghost design */}
                <button
                  type="button"
                  onClick={handleScrollToJourney}
                  className="group inline-flex h-[3.25rem] sm:h-[3.5rem] cursor-pointer items-center gap-2.5 border-none bg-transparent px-4 sm:px-5 font-['Outfit',sans-serif] text-[19px] sm:text-[19px] font-bold tracking-[0.2px] text-[#ff9a40] transition-colors duration-300 ease-in-out hover:text-[#ffb677] hover:opacity-100"
                >
                  <span>See How It Works</span>
                  <span className="inline-flex h-[1.125rem] w-[1.125rem] items-center justify-center transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-[2px]">
                    <svg
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-full w-full"
                    >
                      <path
                        d="M4 10h12M11 5l5 5-5 5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>
              </motion.div>

              {/* Stat cards */}
              <motion.div
                custom={4}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="relative z-[1] grid w-full max-w-full grid-cols-2 gap-2.5 text-left sm:gap-4 lg:max-w-[560px] lg:gap-4 xl:max-w-[720px] xl:grid-cols-4 xl:gap-[22px]"
              >
                {STATS.map((s) => (
                  <div
                    key={s.label}
                    className="group relative z-[1] flex min-h-[120px] flex-col justify-between gap-2 overflow-hidden rounded-[16px] border border-white/30 bg-white/[0.07] p-[12px_12px_14px] backdrop-blur-[23px] transition-[transform,border-color,box-shadow] duration-850 ease-smooth hover:-translate-y-1.5 hover:scale-[1.025] hover:border-white/[0.48] sm:min-h-[150px] sm:rounded-[20px] sm:p-[16px_14px_18px] lg:min-h-[160px] lg:p-[18px_16px_20px]"
                    style={{ boxShadow: GLASS_SHADOW }}
                  >
                    <GlassEdgeTop />
                    <GlassEdgeLeft />
                    <div
                      className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center self-start rounded-[18px] text-[14px] text-white backdrop-blur-[10px] transition-transform duration-1100 ease-smooth group-hover:scale-110 sm:h-10 sm:w-10 sm:rounded-[20px] sm:text-[16px] lg:h-11 lg:w-11 lg:rounded-[22px] lg:text-[18px]"
                      style={{
                        background: s.badgeBg,
                        border: `1px solid ${s.badgeStroke}`,
                        boxShadow: `inset 0 1px 0 ${s.badgeInset}, inset 0 -1px 0 rgba(255,255,255,0.08), 0 4px 14px rgba(0,0,0,0.20)`,
                      }}
                    >
                      {s.badge}
                    </div>
                    <div className="mt-auto flex flex-col gap-1.5">
                      <div
                        className="text-[clamp(18px,4.6vw,22px)] font-semibold leading-none sm:text-[24px]"
                        style={{ color: s.numColor }}
                      >
                        {s.num}
                      </div>
                      <div className="text-[clamp(11px,2.8vw,13px)] font-normal leading-[1.35] text-[#c3c2ce] sm:text-[14px] sm:leading-[1.4]">
                        {s.label}
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* RIGHT — testimonials */}
            <motion.div
              custom={5}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="relative top-[-90px] z-[2] hidden h-full w-full lg:flex lg:flex-col lg:justify-start lg:gap-[clamp(12px,2.2vh,22px)] lg:pt-0"
            >
              {TESTIMONIALS.map((t) => (
                <div
                  key={t.id}
                  className={`group relative z-[3] flex w-[clamp(220px,21vw,300px)] flex-col gap-2 rounded-[20px] border border-white/30 bg-white/[0.07] p-[16px_18px_18px] backdrop-blur-[23px] transition-colors duration-700 hover:border-white/40 hover:[animation-play-state:paused] ${t.alignClass}`}
                  style={{
                    boxShadow: GLASS_SHADOW,
                    animation: `card-float ${t.duration} ease-in-out infinite`,
                    animationDelay: t.delay,
                    willChange: "transform",
                  }}
                >
                  <GlassEdgeTop />
                  <div className="flex items-center gap-3">
                    <span
                      className="relative inline-flex h-9 w-9 flex-shrink-0 items-center justify-center overflow-hidden rounded-full font-['Outfit',sans-serif] text-[15px] font-bold text-white ring-1 ring-white/20"
                      style={{ background: t.avaBg }}
                    >
                      {t.images ? (
                        <img
                          src={t.images}
                          alt={t.author.replace("— ", "")}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        t.id
                      )}
                    </span>
                    <div className="text-[13px] leading-none tracking-[1.6px] text-[#ffb36b]">
                      ★★★★★
                    </div>
                  </div>
                  <p className="m-0 text-[14px] font-medium leading-[1.45] text-white">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <p className="m-0 text-[12.5px] font-normal text-[#8b8a98]">
                    {t.author}
                  </p>
                  <span
                    className="absolute -right-3 -top-3.5 z-[4] inline-flex h-[34px] w-[34px] items-center justify-center rounded-[17px] text-[15px] text-white backdrop-blur-[10px] transition-transform duration-1000 ease-smooth group-hover:scale-105"
                    style={{
                      background: t.iconBg,
                      border: `1px solid ${t.iconStroke}`,
                      boxShadow: `inset 0 1px 0 ${t.iconInset}, inset 0 -1px 0 rgba(255,255,255,0.08), 0 4px 14px rgba(0,0,0,0.22)`,
                    }}
                  >
                    {t.icon}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}